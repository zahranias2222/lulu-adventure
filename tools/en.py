import json,subprocess,soundfile as sf,sys
from kokoro_onnx import Kokoro
K=Kokoro('/home/user/tts/kokoro-v1.0.onnx','/home/user/tts/voices-v1.0.bin')
V={'lulu':('af_heart',1.0,0.92),'bibo':('af_nova',1.28,0.95),'toota':('af_bella',1.12,0.95),'bondoq':('am_michael',0.97,0.92)}
d=json.load(open('/home/user/lulu/src/lines.json'))
only=sys.argv[1:]
for k,(ch,txt) in d['en'].items():
  if only and k not in only: continue
  v,pitch,speed=V[ch]
  if k.startswith('w_'): speed=0.85
  ph=txt.startswith('/');a,sr=K.create(txt.lstrip('/'),voice=v,speed=speed,lang='en-us',is_phonemes=ph)
  p=f'/home/user/tts/seg/{k}.wav';sf.write(p,a,sr)
  af=f'asetrate={int(sr*pitch)},aresample=24000,atempo={1/pitch:.4f},' if pitch!=1 else ''
  af+='silenceremove=start_periods=1:start_threshold=-45dB,areverse,silenceremove=start_periods=1:start_threshold=-45dB,areverse,loudnorm=I=-16:TP=-1.5,apad=pad_dur=0.08'
  subprocess.run(['ffmpeg','-y','-loglevel','error','-i',p,'-af',af,'-ar','24000','-ac','1','-b:a','64k',f'/home/user/tts/out/{k}.mp3'],check=True)
  print(k,flush=True)
# reference samples for cloning
for ch,(v,pitch,speed) in V.items():
  a,sr=K.create("Hello my friend! Today we will play together on the island. Look at all the yummy fruit, it is so much fun to learn new words with you.",voice=v,speed=0.95,lang='en-us')
  p=f'/home/user/tts/ref_{ch}_raw.wav';sf.write(p,a,sr)
  af=f'asetrate={int(sr*pitch)},aresample=24000,atempo={1/pitch:.4f}' if pitch!=1 else 'anull'
  subprocess.run(['ffmpeg','-y','-loglevel','error','-i',p,'-af',af,f'/home/user/tts/ref_{ch}.wav'],check=True)
print('DONE')
