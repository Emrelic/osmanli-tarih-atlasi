# -*- coding: utf-8 -*-
"""MÜKERRER ALAN DÜZELTİCİSİ — beş kayıt, KOŞU BİTİNCE koşulacak.

🔒 KURU KOŞU VARSAYILAN. Yazmak için `--yaz`.
🔴 KOŞU SÜRERKEN `--yaz` KULLANILMAZ: `data/` donuk; yazmak koşuyu
   öldürmez ama ÇIKTISINI YAYINLANAMAZ yapar (yayın kapısı girdi izini
   karşılaştırır). Emre'nin kararı: "koşuyu bitirelim, beş noktayı
   sonraki koşuya bırak ama HAZIR olsun."

DOĞURAN VAKA: beş kayıtta AYNI alan iki kez yazılmış. JavaScript ve
`json.loads` SON anahtarı alır ⇒ `ad:` satırına yazılmış DÜZELTMELER
sessizce kayboluyor. Ölçüm: `denetim/OLCUM-MUKERRER-ALAN-0906.md`

⚠️ HANGİSİNİN TUTULACAĞI VAKA VAKA ÖLÇÜLDÜ — kural "hep ilkini tut" ya
   da "hep sonuncuyu tut" DEĞİLDİR:
     Şırnak    `ad:` satırı TUTULUR (TBMM katmanı orada)
     Mersin    `ad:` satırı TUTULUR (tbmm-turkiye orada)
     Yedisan   `ad:` satırı TUTULUR (8y9a ÇİFT SAHİPLİK orada kapanmış)
     Honolulu  ALTTAKİ tutulur (hawaii-kralligi 1795-1898 orada)
     Yagodina  ALTTAKİ tutulur + `isg:` EKLENİR  ← ÜÇÜNCÜ BİÇİM
🔴 YAGODINA NİÇİN AYRI: `ad:` satırındaki düzeltme 1689-1690 Habsburg
   epizodunu `s:avusturya` diye yazıyor. Bugünkü hüküm
   (`HUKUM-CAKISMA-TASNIF-18-0906.md §④`) bunu REDDEDİYOR: bir yıllık
   işgal, Osmanlı 1690-09-09'da GERİ ALDI ⇒ egemenlik devri değil ÖRTÜ.
   `isg:` konvansiyonu ölçülmüş: 401 dönem, `avusturya` için 18.
   Ve alttaki yazımın kapsaması ZATEN TAM (boşluk 0), `d:` kesilmemeli.

KULLANIM:  py denetim/ARAC-MUKERRER-DUZELT-0906.py [--yaz]
"""
import io, os, re, subprocess, sys

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
YAZ = "--yaz" in sys.argv


def a(s):
    for x, y in [("İ", "I"), ("ı", "i"), ("ş", "s"), ("Ş", "S"), ("ü", "u"),
                 ("Ü", "U"), ("ö", "o"), ("Ö", "O"), ("ç", "c"), ("Ç", "C"),
                 ("ğ", "g"), ("Ğ", "G"), ("â", "a"), ("î", "i"), ("û", "u"),
                 ("’", "'"), ("→", "->"), ("⇒", "=>")]:
        s = s.replace(x, y)
    return "".join(c if ord(c) < 256 else "?" for c in s)


def p(s=""):
    sys.stdout.write(a(str(s)) + "\n")
    sys.stdout.flush()


# ── 0. KOSU SURUYOR MU ─────────────────────────────────────────────────
kilit = os.path.join(KOK, ".petek.kilit")
kosuyor = False
if os.path.exists(kilit):
    m = re.search(r"pid=(\d+)", io.open(kilit, encoding="utf-8",
                                        errors="replace").read())
    if m:
        try:
            r = subprocess.run(
                ["powershell", "-NoProfile", "-Command",
                 "if (Get-Process -Id %s -ErrorAction SilentlyContinue) "
                 "{'CANLI'} else {'OLU'}" % m.group(1)],
                capture_output=True, text=True, timeout=30)
            kosuyor = "CANLI" in r.stdout
        except Exception:
            pass

if kosuyor and YAZ:
    p("[X] KOSU CALISIYOR — `--yaz` REDDEDILDI.")
    p("    data/ donuk; yazmak kosunun ciktisini YAYINLANAMAZ yapar.")
    p("    Kosu bitince yeniden calistir.")
    sys.exit(1)

# ── 1. DUZELTMELER — her biri TAM METIN, TEK ESLESME sarti ─────────────
# (dosya, aciklama, silinecek_metin, eklenecek_metin_ya_da_None)
ISLER = [
    ("yerlesimler_ok109.js", "Şırnak — eski `d:` ve boş `s:` düşürülür "
     "(TBMM düzeltmesi `ad:` satırında)",
     '\n    d: [{ f: "1891-01-01", t: "1923-10-29" }],\n    s: [],', None),

    ("yerlesimler_ek27.js", "Mersin — eski `s:`/`d:` düşürülür "
     "(tbmm-turkiye `ad:` satırında)",
     '\n  s:[{f:"1281-01-01",t:"1352-01-01",d:"kilikya-ermeni"},'
     '{f:"1918-10-30",t:"1921-10-20",d:"fransa-cumhuriyet"}],'
     '\n  d:[{f:"1352-01-01",t:"1918-10-30"},'
     '{f:"1921-10-20",t:"1923-10-29"}],', None),
]

p("=" * 70)
p("MUKERRER ALAN DUZELTICISI" + ("  [--yaz]" if YAZ else "  [KURU KOSU]"))
p("=" * 70)
p("  kosu canli mi : %s" % ("EVET — --yaz reddedilir" if kosuyor else "hayir"))
p("")

# ── 2. ONCE/SONRA olcumu ───────────────────────────────────────────────
OLC = r"""
const fs=require('fs'),vm=require('vm');
const hedef=%s;
for(const f of fs.readdirSync('data')){
  if(!/^yerlesim.*\.js$/.test(f)) continue;
  const d={window:{}}; vm.createContext(d);
  try{vm.runInContext(fs.readFileSync('data/'+f,'utf8'),d);}catch(e){continue;}
  for(const k of Object.keys(d.window)){const A=d.window[k]; if(!Array.isArray(A))continue;
    for(const y of A){ if(!y||hedef.indexOf(y.ad)<0)continue;
      const par=[];
      for(const al of ['d','s','v','isg']){
        const v=y[al]; if(!v||!v.length) continue;
        par.push(al+':'+v.map(p=>p.f+'>'+p.t+(p.d?'/'+p.d:'')).join(','));
      }
      console.log(y.ad+' || '+par.join(' || '));
    }}}
"""
HEDEF = '["Şırnak","Mersin","Yedisan bozkırı","Honolulu","Yagodina (Jagodina)"]'


def olc():
    # 🔴 `text=True` TEK BASINA YETMEZ: Windows'ta cp1254'e duser ve
    #   node'un UTF-8 ciktisi UnicodeDecodeError verir. Kodlama ACIKCA
    #   yazilir. (Bu tuzak bu projede defalarca isirdi.)
    r = subprocess.run(["node", "-e", OLC % HEDEF], cwd=KOK,
                       capture_output=True, text=True, timeout=300,
                       encoding="utf-8", errors="replace")
    if not r.stdout:
        p("  [!] node ciktisi BOS - stderr: " + (r.stderr or "")[:200])
        return {}
    d = {}
    for satir in r.stdout.strip().splitlines():
        if " || " in satir:
            ad = satir.split(" || ")[0]
            d[ad] = satir.split(" || ", 1)[1]
    return d


once = olc()
p("ONCEKI HAL (JS'in gordugu — motor da bunu okuyor):")
for ad in sorted(once):
    p("  %-22s %s" % (ad, once[ad][:110]))
p("")

# ── 3. UYGULA ──────────────────────────────────────────────────────────
hata = 0
for dosya, aciklama, sil, ekle in ISLER:
    yol = os.path.join(KOK, "data", dosya)
    s = io.open(yol, encoding="utf-8").read()
    n = s.count(sil)
    if n != 1:
        p("  [X] %s : capa %d kez gecti (1 bekleniyordu) - ATLANDI" % (dosya, n))
        hata += 1
        continue
    p("  [OK] %s" % aciklama)
    if YAZ:
        yeni = s.replace(sil, ekle if ekle else "", 1)
        io.open(yol, "w", encoding="utf-8", newline="").write(yeni)

p("")

# ── 3b. KALAN UC KAYIT — capalar ELLE YAZILMADI, HESAPLANDI ───────────
# `node denetim/ARAC-MUKERRER-CAPA-0906.js` uretti; dogrulanmis
# cozumleyici (ARAC-MUKERRER-ALAN-0906b.js) ile bulundu ve dordunun de
# dosyada BENZERSIZ oldugu olculdu. Elle yazilan uzun bir capa, bir
# karakter kayarsa YANLIS yeri keser — bu yuzden uretildi.
# ── OTOMATIK URETILDI: node denetim/ARAC-MUKERRER-CAPA-0906.js
EK_ISLER = [
    # Yedisan bozkırı  `s`  yazim 2/2  ·  dosyada 1 kez geciyor  ✓
    ("yerlesimler_ek_bozkir.js", "Yedisan bozkırı `s`",
     """,
  s:[{f:"1281-01-01",t:"1502-03-01",d:"altinorda"},{f:"1502-03-01",t:"1792-01-09",d:"kirim"},{f:"1792-01-09",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}]""", None),
    # Honolulu  `s`  yazim 1/2  ·  dosyada 1 kez geciyor  ✓
    ("yerlesimler_4ff22b.js", "Honolulu `s`",
     """,s:[{f:"1898-08-12",t:"1923-10-29",d:"abd"}]""", None),
    # Yagodina (Jagodina)  `s`  yazim 1/2  ·  dosyada 1 kez geciyor  ✓
    ("yerlesimler_ek29.js", "Yagodina (Jagodina) `s`",
     """,s:[{f:"1281-01-01",t:"1439-08-27",d:"sirbistan"},{f:"1444-08-01",t:"1459-06-20",d:"sirp-despotlugu"},{f:"1689-09-24",t:"1690-09-09",d:"avusturya"},{f:"1717-08-18",t:"1739-09-18",d:"avusturya"},{f:"1878-07-13",t:"1882-03-06",d:"sirbistan-prensligi"},{f:"1882-03-06",t:"1918-12-01",d:"sirbistan-kralligi"},{f:"1918-12-01",t:"1923-10-29",d:"yugoslavya"}]""", None),
    # Yagodina (Jagodina)  `d`  yazim 1/2  ·  dosyada 1 kez geciyor  ✓
    ("yerlesimler_ek29.js", "Yagodina (Jagodina) `d`",
     """,d:[{f:"1439-08-27",t:"1444-08-01"},{f:"1459-06-20",t:"1689-09-24"},{f:"1690-09-09",t:"1717-08-18"},{f:"1739-09-18",t:"1830-11-08"}]""", None),
]


for dosya, aciklama, sil, ekle in EK_ISLER:
    yol = os.path.join(KOK, "data", dosya)
    s = io.open(yol, encoding="utf-8").read()
    n = s.count(sil)
    if n != 1:
        p("  [X] %s : capa %d kez gecti (1 bekleniyordu) - ATLANDI"
          % (aciklama, n))
        hata += 1
        continue
    p("  [OK] %s : eski yazim dusuruluyor (%d karakter)" % (aciklama, len(sil)))
    if YAZ:
        io.open(yol, "w", encoding="utf-8", newline="").write(
            s.replace(sil, "", 1))

# ── 3c. YAGODINA — `isg:` EKLENIR (ucuncu bicim) ──────────────────────
# HUKUM-CAKISMA-TASNIF-18-0906.md §④: 1689-09-24 -> 1690-09-09 Habsburg
# epizodu bir EGEMENLIK DEVRI degil ISGAL — Osmanli 1690-09-09'da geri
# aldi. `isg:` konvansiyonu olculmus: 401 donem, `avusturya` icin 18.
# `d:` KESILMEZ (alttaki yazimin kapsamasi zaten TAM, bosluk 0).
YAG_CAPA = '  v:[{f:"1830-11-08",t:"1878-07-13"}] },'
YAG_YENI = ('  v:[{f:"1830-11-08",t:"1878-07-13"}],\n'
            '  isg:[{f:"1689-09-24",t:"1690-09-09",d:"avusturya",'
            'kaynak:"HUKUM-CAKISMA-TASNIF-18-0906.md — bir yillik Habsburg '
            'isgali; Osmanli 1690-09-09\'da geri aldi. `s:` degil `isg:`: '
            'polity surdu, egemenlik devrolmadi."}] },')
_y = os.path.join(KOK, "data", "yerlesimler_ek29.js")
_s = io.open(_y, encoding="utf-8").read()
if _s.count(YAG_CAPA) != 1:
    p("  [X] Yagodina `isg:` : capa %d kez gecti - ATLANDI" % _s.count(YAG_CAPA))
    hata += 1
elif "1689-09-24" in _s and "isg:" in _s.split("Yagodina")[1][:2000]:
    p("  [i] Yagodina `isg:` : ZATEN VAR - atlandi")
else:
    p("  [OK] Yagodina : isg:avusturya 1689-09-24 -> 1690-09-09 EKLENIYOR")
    if YAZ:
        io.open(_y, "w", encoding="utf-8", newline="").write(
            _s.replace(YAG_CAPA, YAG_YENI, 1))

p("")
if hata:
    p("🔴 %d is ATLANDI — capa tutmadi. DOSYA YAZILMADI." % hata)

# ── 4. KALAN UC KAYIT — HENUZ OTOMATIK DEGIL ───────────────────────────
p("=" * 70)
p("🔜 KALAN: Honolulu'nun MUKERRER `kaynak:` alani "
  "(ad: satirindaki) — dizi degil skaler oldugu icin ayri ele alinacak.")
p("=" * 70)

if not YAZ:
    p("")
    p("(kuru kosu — hicbir dosya yazilmadi; --yaz ile calistir)")
    sys.exit(0)

sonra = olc()
p("")
p("SONRAKI HAL:")
for ad in sorted(sonra):
    degisti = once.get(ad) != sonra.get(ad)
    p("  %s %-22s %s" % ("*" if degisti else " ", ad, sonra[ad][:110]))
