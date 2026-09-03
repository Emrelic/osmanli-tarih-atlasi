# -*- coding: utf-8 -*-
"""Bir aday/oneri JSON'undaki her `d:` kimligini UC yonden sinar.

  ① kunye VAR MI      data/devletler.js  (id: ya da harita:)
  ② rengi VAR MI      arac/renkler.py    BOYALAR
  ③ omru KAPSIYOR MU  kunye f/t araligi, donemi iceriyor mu  (§3.5 hayalet)

Kullanim:  py kimlik_sina.py <json yolu> [<json yolu> ...]

🔴 Bu alet REGEX ile devletler.js ayristirMAZ — `girdi._cevir` kullanir,
   yani motorun kendi JS okuyucusu.  (§11: veri bir dilde yazilmissa
   o dilin yorumlayicisini cagir — bu proje o dersi bes kez ogrendi.)
"""
import sys, os, json, io
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8", errors="replace")

KOK = os.getcwd()          # kok dizinden koşulur
sys.path.insert(0, os.path.join(KOK, "arac"))

import girdi                      # noqa
import renkler as R               # noqa

# ---- kunye kumesi -------------------------------------------------------
_dv = os.path.join(KOK, "data", "devletler.js")
_ham = io.open(_dv, encoding="utf-8").read()
KUNYE = {}
try:
    kayitlar = girdi._cevir(_ham, "DEVLETLER")
except Exception:
    kayitlar = None

if kayitlar is None:
    # girdi._cevir bu dosyayi tanimiyorsa node'a sor
    import subprocess, tempfile
    js = ("global.window={};eval(require('fs').readFileSync(process.argv[1],'utf8'));"
          "const D=window.DEVLETLER||[];"
          "console.log(JSON.stringify(D.map(d=>({id:d.id,harita:d.harita,f:d.f,t:d.t}))));")
    p = subprocess.run(["node", "-e", js, _dv], capture_output=True, text=True,
                       encoding="utf-8")
    kayitlar = json.loads(p.stdout.strip())

for k in kayitlar:
    for anahtar in (k.get("id"), k.get("harita")):
        if anahtar:
            KUNYE.setdefault(anahtar, k)

BOYA = set(R.BOYALAR)

print("kunye anahtari : %d" % len(KUNYE))
print("BOYALAR        : %d" % len(BOYA))
print()

# ---- adaylari tara ------------------------------------------------------
def kimlikler(obj, cikti):
    """Herhangi bir ic ice yapida s:/d: alanlarini topla."""
    if isinstance(obj, dict):
        for a, d in obj.items():
            if a == "d" and isinstance(d, str):
                cikti.append((d, obj.get("f"), obj.get("t")))
            else:
                kimlikler(d, cikti)
    elif isinstance(obj, list):
        for e in obj:
            kimlikler(e, cikti)

TOPLAM = {}
for yol in sys.argv[1:]:
    veri = json.load(io.open(yol, encoding="utf-8"))
    bulgu = []
    kimlikler(veri, bulgu)
    ad = os.path.basename(yol)
    if not bulgu:
        print("%-42s  🔴 HIC `d:` YOK — zincir tasimayan liste" % ad)
        continue
    kume = {}
    for kid, f, t in bulgu:
        kume.setdefault(kid, []).append((f, t))
    print("%-42s  %d donem · %d benzersiz kimlik" % (ad, len(bulgu), len(kume)))
    for kid in sorted(kume):
        d = TOPLAM.setdefault(kid, {"donem": 0, "dosya": set(), "araliklar": []})
        d["donem"] += len(kume[kid])
        d["dosya"].add(ad)
        d["araliklar"] += [(f, t, ad) for f, t in kume[kid]]
    print()

print("=" * 72)
yok_kunye, yok_renk, hayalet, tamam = [], [], [], []
for kid in sorted(TOPLAM):
    k = KUNYE.get(kid)
    if k is None:
        yok_kunye.append(kid); continue
    if kid not in BOYA and (k.get("harita") or kid) not in BOYA:
        yok_renk.append(kid); continue
    tamam.append(kid)

def bas(baslik, liste, isaret):
    print("%s %s : %d" % (isaret, baslik, len(liste)))
    for kid in liste:
        d = TOPLAM[kid]
        print("     %-34s %3d donem  %s" % (kid, d["donem"], ", ".join(sorted(d["dosya"]))))
    print()

bas("KUNYE YOK        (§3.5 hayalet — yazilamaz)", yok_kunye, "🔴")
bas("RENK YOK         (§8 boyanmaz — bosluk kapanmis GORUNUR)", yok_renk, "🔴")
print("🟢 KUNYE + RENK TAM : %d" % len(tamam))
print("   " + ", ".join(tamam))
print()

# ---- ③ OMUR SINAVI — §3.5 hayalet ---------------------------------------
print("=" * 72)
print("③ OMUR SINAVI — kunyenin f/t araligi donemi KAPSIYOR MU (§3.5)")


def gun(s):
    """🔴 YIL DORT HANEYE DOLDURULMADAN yapilan tarih kiyasi GUVENLI DEGIL.
    `fransa` kunyesi f='987-01-01' · `almanya` f='962-02-02' — UC HANELI.
    Sozluksel kiyasta '1659-01-01' < '987-01-01' TRUE cikar ('1' < '9').
    DUNYA-AFRIKA-0903 olctu: dogrulayicisi 42 sahte 'omur kapsamiyor'
    verdi, 38'i bu yuzdendi.  Alet GURULTULU bozuldu, o yuzden farkedildi;
    sessiz bozulsa hayalet donemler veriye inerdi."""
    if not s:
        return None
    p = str(s).split("-")
    try:
        return (int(p[0]), int(p[1]) if len(p) > 1 else 1,
                int(p[2]) if len(p) > 2 else 1)
    except ValueError:
        return None
tasan = []
for kid in tamam:
    k = KUNYE[kid]
    kf, kt = gun(k.get("f")), gun(k.get("t"))
    if kf is None or kt is None:
        tasan.append((kid, "?", "?", "kunye f/t EKSIK ya da AYRISTIRILAMADI — olculemedi"))
        continue
    for f, t, ad in TOPLAM[kid]["araliklar"]:
        gf, gt = gun(f), gun(t)
        if gf is None or gt is None:
            continue
        if gf < kf:
            tasan.append((kid, f, t, "donem kunyeden ONCE basliyor (kunye f=%s)" % k.get("f")))
        if gt > kt:
            tasan.append((kid, f, t, "donem kunyeden SONRA bitiyor (kunye t=%s)" % k.get("t")))
if tasan:
    print("🔴 HAYALET RISKI : %d" % len(tasan))
    for kid, f, t, nic in tasan:
        print("     %-30s %s → %s   %s" % (kid, f, t, nic))
else:
    print("🟢 hicbir donem kunye omrunun disina tasmiyor")
