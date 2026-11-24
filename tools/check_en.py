import json,glob,os,subprocess,numpy as np
def pcm(p):
  r=subprocess.run(['ffmpeg','-loglevel','error','-i',p,'-f','s16le','-ac','1','-ar','16000','-'],capture_output=True).stdout
  return np.frombuffer(r,np.int16).astype(np.float32)/32768
from faster_whisper import WhisperModel
W=WhisperModel('small.en',compute_type='int8')
d=json.load(open('/home/user/lulu/src/lines.json'))
for k,(ch,t) in d['en'].items():
  s,_=W.transcribe(pcm(f'out/{k}.mp3'),language='en')
  tr=' '.join(x.text for x in s).strip()
  print(f'{k:24s}| {t:38s}| {tr}')
