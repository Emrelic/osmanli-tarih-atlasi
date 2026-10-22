import sys,io,re,html
sys.stdout=io.TextIOWrapper(sys.stdout.buffer,encoding='utf-8')
# kullanim: py _txt.py dosya [anahtar ...]  -> anahtar gecen paragraflar (onceki "N年" basligi ile); anahtar yoksa tum metin
raw=open(sys.argv[1],encoding='utf-8',errors='replace').read()
raw=re.sub(r'(?s)<(script|style).*?</\1>',' ',raw)
m=re.search(r'(?s)<div class="mw-parser-output">(.*?)<noscript',raw)
if m: raw=m.group(1)
raw=re.sub(r'(?s)</(p|div|li|h\d|tr)>','\n',raw)
raw=re.sub(r'(?s)<[^>]+>','',raw)
t=html.unescape(raw)
paras=[p.strip() for p in t.split('\n') if p.strip()]
keys=sys.argv[2:]
yil=''
for p in paras:
    mm=re.match(r'^((?:[^，。、]{1,12})?[元一二三四五六七八九十]+年)',p)
    if re.match(r'^[貞永顯龍麟乾儀總咸上儀調露永隆開耀永淳弘道嗣聖文明光宅垂拱永昌載初天授如意長壽延載證聖天冊萬歲登封通天神功聖曆久視大足長安神龍景龍唐景雲太極延和先天開元天寶至德乾元上元寶應廣德永泰大曆建中興元貞元永貞元和長慶寶曆大和開成會昌大中咸通乾符武德][^，。]{0,6}[年]',p) or re.match(r'^[^，。]{1,8}年[，。]?$',p) or re.match(r'^[^，。]{1,12}年，',p):
        yil=p[:30]
    if not keys or any(k in p for k in keys):
        print('['+yil+']',p[:3000])
        print('--')
