# -*- coding: utf-8 -*-
"""MÜKERRER DÜZELTİCİNİN SINAVI — KOPYA üzerinde, `data/`ye DOKUNMADAN.

🔴 NİÇİN: `ARAC-MUKERRER-DUZELT-0906.py` bir VERİ AMELİYATIDIR — kayıt
   metninden yüzlerce karakter kesiyor. Koşu sürerken `--yaz` reddediliyor,
   yani sonucu görmeden koşu sonuna kadar beklemek gerekirdi. Bu betik
   dosyaları SCRATCHPAD'e kopyalayıp ameliyatı ORADA yapar ve sonucu
   `node` ile okur.

   ⇒ Böylece "uygulanınca ne olacak" sorusu, uygulamadan CEVAPLANIR.
   📌 `§11`: *"bir aracın verdiği reçete, uygulanınca kendi testini
      geçmek zorundadır."* Bu betik o testtir.

KULLANIM:  py denetim/ARAC-MUKERRER-SINAV-0906.py
"""
import io, os, shutil, subprocess, sys, tempfile

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(KOK, "denetim"))


def a(s):
    for x, y in [("İ", "I"), ("ı", "i"), ("ş", "s"), ("Ş", "S"), ("ü", "u"),
                 ("Ü", "U"), ("ö", "o"), ("Ö", "O"), ("ç", "c"), ("Ç", "C"),
                 ("ğ", "g"), ("Ğ", "G"), ("â", "a"), ("→", "->"), ("⇒", "=>")]:
        s = s.replace(x, y)
    return "".join(c if ord(c) < 256 else "?" for c in s)


def p(s=""):
    sys.stdout.write(a(str(s)) + "\n")
    sys.stdout.flush()


# düzelticinin İŞLER/EK_ISLER tablolarını ONDAN AL — kopyalamıyorum,
# yoksa iki otorite doğar ve ayrışırlar (`§11`, ölçülmüş sınıf).
kaynak = io.open(os.path.join(KOK, "denetim",
                              "ARAC-MUKERRER-DUZELT-0906.py"),
                 encoding="utf-8").read()
ns = {"__name__": "_sinav_", "os": os, "io": io, "sys": sys,
      "subprocess": subprocess, "re": __import__("re")}
# yalnız tabloları çıkar: `ISLER = [` … `]` ve `EK_ISLER = [` … `]`
for ad in ("ISLER", "EK_ISLER"):
    i = kaynak.find(ad + " = [")
    if i < 0:
        p("[X] %s bulunamadi" % ad)
        sys.exit(1)
    derin, j = 0, kaynak.index("[", i)
    for k in range(j, len(kaynak)):
        if kaynak[k] == "[":
            derin += 1
        elif kaynak[k] == "]":
            derin -= 1
            if not derin:
                j = k
                break
    exec(kaynak[i:j + 1], ns)

ISLER = ns["ISLER"] + ns["EK_ISLER"]
p("duzelticiden alinan is: %d" % len(ISLER))

# Yagodina isg: eklemesi de ondan alinir
i = kaynak.find("YAG_CAPA = ")
j = kaynak.find("_y = os.path.join", i)
exec(kaynak[i:j], ns)
YAG_CAPA, YAG_YENI = ns["YAG_CAPA"], ns["YAG_YENI"]

# ── KOPYA ─────────────────────────────────────────────────────────────
gecici = tempfile.mkdtemp(prefix="mukerrer_sinav_")
hedefler = sorted(set([d for d, _, _, _ in ISLER] + ["yerlesimler_ek29.js"]))
os.makedirs(os.path.join(gecici, "data"))
for f in hedefler:
    shutil.copy2(os.path.join(KOK, "data", f), os.path.join(gecici, "data", f))
p("kopyalanan dosya: %d  ->  %s" % (len(hedefler), gecici))
p("")

# ── AMELIYAT (KOPYA uzerinde) ─────────────────────────────────────────
hata = 0
for dosya, aciklama, sil, ekle in ISLER:
    yol = os.path.join(gecici, "data", dosya)
    s = io.open(yol, encoding="utf-8").read()
    if s.count(sil) != 1:
        p("  [X] %s : capa %d kez" % (aciklama, s.count(sil)))
        hata += 1
        continue
    io.open(yol, "w", encoding="utf-8", newline="").write(
        s.replace(sil, ekle if ekle else "", 1))

_y = os.path.join(gecici, "data", "yerlesimler_ek29.js")
_s = io.open(_y, encoding="utf-8").read()
if _s.count(YAG_CAPA) == 1:
    io.open(_y, "w", encoding="utf-8", newline="").write(
        _s.replace(YAG_CAPA, YAG_YENI, 1))
else:
    p("  [X] Yagodina isg: capasi tutmadi")
    hata += 1

# ── SONUC: node ile OKU ───────────────────────────────────────────────
JS = r"""
const fs=require('fs'),vm=require('vm'),yol=process.argv[1];
const hedef=["Şırnak","Mersin","Yedisan bozkırı","Honolulu","Yagodina (Jagodina)"];
for(const f of fs.readdirSync(yol+'/data')){
  const d={window:{}}; vm.createContext(d);
  try{vm.runInContext(fs.readFileSync(yol+'/data/'+f,'utf8'),d);}
  catch(e){console.log('SOZDIZIMI HATASI '+f+': '+e.message); continue;}
  for(const k of Object.keys(d.window)){const A=d.window[k]; if(!Array.isArray(A))continue;
    for(const y of A){ if(!y||hedef.indexOf(y.ad)<0)continue;
      const par=[]; const ar=[];
      for(const al of ['d','s','v','isg']){
        const v=y[al]; if(!v||!v.length) continue;
        par.push(al+':'+v.map(p=>p.f+'>'+p.t+(p.d?'/'+p.d:'')).join(','));
        if(al!=='isg') for(const p of v) ar.push([p.f,p.t]);
      }
      ar.sort((x,z)=>x[0]<z[0]?-1:1);
      let im='1281-01-01', bos=[];
      for(const [f2,t2] of ar){ if(f2>im) bos.push(im+'->'+f2); if(t2>im) im=t2; }
      if(im<'1923-10-29') bos.push(im+'->1923-10-29');
      console.log('### '+y.ad);
      par.forEach(x=>console.log('    '+x));
      console.log('    BOSLUK: '+(bos.length?bos.join(', '):'YOK'));
    }}}
"""
r = subprocess.run(["node", "-e", JS, gecici], capture_output=True,
                   text=True, encoding="utf-8", errors="replace", timeout=300)
p("=" * 70)
p("AMELIYAT SONRASI (kopya uzerinde, node ile okundu):")
p("=" * 70)
for satir in (r.stdout or "").splitlines():
    p(satir)
if r.stderr and r.stderr.strip():
    p("stderr: " + r.stderr[:300])

sozdizimi = "SOZDIZIMI HATASI" in (r.stdout or "")
bosluk = "BOSLUK: YOK" not in (r.stdout or "") or (r.stdout or "").count("BOSLUK: YOK") < 5
p("")
p("=" * 70)
p("  sozdizimi hatasi : %s" % ("🔴 VAR" if sozdizimi else "🟢 yok"))
p("  capa tutmayan is : %d" % hata)
p("  BOSLUK: YOK olan : %d / 5" % (r.stdout or "").count("BOSLUK: YOK"))
p("=" * 70)
shutil.rmtree(gecici, ignore_errors=True)
sys.exit(1 if (sozdizimi or hata) else 0)
