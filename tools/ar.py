import json,subprocess,os,re,difflib,sys,numpy as np,torchaudio as ta,torch
torch.set_num_threads(4)
from chatterbox.mtl_tts import ChatterboxMultilingualTTS
from faster_whisper import WhisperModel
CB=ChatterboxMultilingualTTS.from_pretrained(device='cpu')
WH=WhisperModel('large-v3-turbo',compute_type='int8')
def pcm(p):
  raw=subprocess.run(['ffmpeg','-loglevel','error','-i',p,'-f','s16le','-ac','1','-ar','16000','-'],capture_output=True).stdout
  return np.frombuffer(raw,np.int16).astype(np.float32)/32768
def norm(t):
  t=re.sub(r'[ً-ْـ]','',t);t=re.sub('[أإآ]','ا',t).replace('ة','ه').replace('ى','ي')
  return re.sub(r'[^ء-ي]','',t)
d=json.load(open('/home/user/lulu/src/lines.json'))['ar']
only=sys.argv[1:];LOG={}
for k,(ch,t) in d.items():
  if only and k not in only: continue
  if not only and os.path.exists(f'out/ar_{k}.mp3'): continue
  best=None
  for i in range(5):
    p=f'seg/ar_{k}_{i}.wav'
    w=CB.generate(t,language_id='ar',audio_prompt_path=f'ref_{ch}.wav',temperature=0.6,exaggeration=0.6,cfg_weight=0.5)
    ta.save(p,w,CB.sr)
    q=p.replace('.wav','_t.wav')
    subprocess.run(['ffmpeg','-y','-loglevel','error','-i',p,'-af','silenceremove=start_periods=1:start_threshold=-45dB,areverse,silenceremove=start_periods=1:start_threshold=-45dB,areverse',q])
    s,_=WH.transcribe(pcm(q),language='ar');tr=' '.join(x.text for x in s).strip()
    sc=difflib.SequenceMatcher(None,norm(t),norm(tr)).ratio()
    dur=len(pcm(q))/16000;exp=0.085*len(norm(t))+0.6
    if dur>exp*2.2: sc-=0.3
    print(f'{k} [{i}] {sc:.2f} {dur:.1f}s | {tr}',flush=True)
    if not best or sc>best[0]: best=(sc,q,tr)
    if sc>=0.9: break
  subprocess.run(['ffmpeg','-y','-loglevel','error','-i',best[1],'-af','loudnorm=I=-16:TP=-1.5,apad=pad_dur=0.08','-ar','24000','-ac','1','-b:a','64k',f'out/ar_{k}.mp3'],check=True)
  LOG[k]=(round(best[0],2),best[2])
  json.dump(LOG,open(f'arlog_{os.getpid()}.json','w'),ensure_ascii=False,indent=0)
print('DONE')
