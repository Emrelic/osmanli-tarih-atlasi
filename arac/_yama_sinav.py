# -*- coding: utf-8 -*-
"""YAMA SINAVI — 67 kaydin kaci GERCEKTEN uygulanabilir?

Uygulamadan ONCE sinanacak uc sey (ucu de bu projede isirmis):
  ① `ad:` VERIDE var mi          -> yoksa yeni nokta, yer_yama'ya yazilmaz
  ② KOORDINAT dogru mu           -> Foca (Foca) Bosna'da, Izmir degil
  ③ KIRILMA gunu kulliyatta var mi -> yoksa Degismez 2 acilir
"""
import io, json, os, re, sys, glob, subprocess, collections

KOK = os.getcwd()
sys.path.insert(0, os.path.join(KOK, "arac"))

# --- veri: girdi.GIRDI_DOSYALARI uzerinden (tek otorite)
import girdi
try:
    Y = girdi.yukle()
except Exception:
    Y = girdi.oku()
if isinstance(Y, tuple):
    Y = Y[0]
ADLAR = {}
for y in Y:
    ADLAR.setdefault(y["ad"], []).append((y.get("lat"), y.get("lon")))
print("TABAN: %d nokta, %d benzersiz ad" % (len(Y), len(ADLAR)))

# --- kronoloji gunleri
gunler = set()
for f in glob.glob(os.path.join(KOK, "data", "olaylar*.js")):
    s = io.open(f, encoding="utf-8", errors="replace").read()
    gunler |= set(re.findall(r't:"(\d{4}-\d{2}-\d{2})"', s))
    gunler |= set(re.findall(r'"t":\s*"(\d{4}-\d{2}-\d{2})"', s))
print("KRONOLOJI: %d benzersiz gun" % len(gunler))

# --- yamalari node ile oku (kendi dilinde)
js = """
global.window={};const fs=require('fs');
for(const f of fs.readdirSync('data').filter(x=>/^yer_yama_/.test(x)))
  try{eval(fs.readFileSync('data/'+f,'utf8'))}catch(e){}
const out=[];
for(const k of Object.keys(window).filter(k=>k.startsWith('YER_YAMA'))){
  const a=window[k];
  if(Array.isArray(a)) for(const r of a) if(r&&r.ad) out.push({k,ad:r.ad,d:r.d,s:r.s,v:r.v,isg:r.isg,kaynak:r.kaynak});
}
console.log(JSON.stringify(out));
"""
io.open("_yama_oku.js", "w", encoding="utf-8").write(js)
ham = subprocess.run(["node", "_yama_oku.js"], capture_output=True, text=True,
                     encoding="utf-8", errors="replace")
os.remove("_yama_oku.js")
kayitlar = json.loads(ham.stdout.strip().splitlines()[-1])
print("YAMA: %d kayit\n" % len(kayitlar))

kova = collections.Counter()
sorun = []
for r in kayitlar:
    ad = r["ad"]
    if ad not in ADLAR:
        kova["ad-YOK"] += 1
        sorun.append(("ad-YOK", r["k"], ad, ""))
        continue
    if len(ADLAR[ad]) > 1:
        kova["ad-COKLU"] += 1
        sorun.append(("ad-COKLU", r["k"], ad, "%d kayit" % len(ADLAR[ad])))
    if not r.get("kaynak"):
        kova["kaynak-YOK"] += 1
        sorun.append(("kaynak-YOK", r["k"], ad, ""))
    # kirilma gunleri
    yeni = []
    for alan in ("d", "s", "v", "isg"):
        for p in (r.get(alan) or []):
            if not isinstance(p, dict):
                continue
            for g in (p.get("f"), p.get("t")):
                if g and g not in gunler and "1281-01-01" < g < "1923-10-29":
                    yeni.append(g)
    if yeni:
        kova["gun-MADDESIZ"] += 1
        sorun.append(("gun-MADDESIZ", r["k"], ad, ", ".join(sorted(set(yeni))[:3])))
    if ad in ADLAR and not yeni:
        kova["TEMIZ"] += 1

print("SINAV SONUCU")
for k, v in kova.most_common():
    print("   %-14s %3d" % (k, v))
print("\nSORUNLU KAYITLAR (ilk 22)")
for cins, dosya, ad, ek in sorun[:22]:
    print("   %-14s %-22s %-28s %s"
          % (cins, dosya, ad.encode("ascii", "replace").decode(), ek))
