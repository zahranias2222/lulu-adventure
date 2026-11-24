import subprocess,sys,re
# cut a clip at the first pause (>=0.22s) that starts after `after` seconds
for k in sys.argv[1:]:
  f=f'out/ar_{k}.mp3'
  r=subprocess.run(['ffmpeg','-i',f,'-af','silencedetect=n=-38dB:d=0.22','-f','null','-'],capture_output=True,text=True).stderr
  st=[float(x) for x in re.findall(r'silence_start: ([\d.]+)',r)]
  st=[s for s in st if s>0.45]
  if not st: print(k,'no pause'); continue
  cut=st[0]+0.12
  subprocess.run(['ffmpeg','-y','-loglevel','error','-i',f,'-t',str(cut),'-af',f'afade=t=out:st={cut-0.08}:d=0.08','/tmp/t.mp3']); subprocess.run(['mv','/tmp/t.mp3',f]); print(k,'cut at',round(cut,2))
