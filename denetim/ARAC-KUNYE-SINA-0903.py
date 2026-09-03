# -*- coding: utf-8 -*-
"""ONERILEN KUNYE JSON'unu uygulamadan ONCE sinar.

  ① id CAKISMASI      mevcut 441 kunye ile · ve kendi icinde mukerrer
  ② YIL DORT HANE     "987-01-01" gibi kisa yil YOK  (AFRIKA'nin bulgusu)
  ③ ARALIK            f < t · sifir uzunluk yok · t <= 1923-10-29
  ④ ZORUNLU ALAN      id · ad · f · t  (bos olmaz)
  ⑤ kaynak:           bos birakilmamis  (§4: yazilmayan kaynak, olmayan
                      kaynaktan ayirt edilemez — "bulunamadi" da bir CEVAP)
  ⑥ harita:           varsa HEDEFI VAR MI (yoksa sessizce boyanmaz)
  ⑦ RENK              BOYALAR'da var mi (yoksa §8 harita deligi)

Kullanim:  py kunye_sina.py <json yolu>   (kok dizinden)
"""
import sys, os, io, json, subprocess
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8", errors="replace")
KOK = os.getcwd()
sys.path.insert(0, os.path.join(KOK, "arac"))
import renkler as R

UFUK = (1923, 10, 29)


def gun(s):
    """🔴 Dizgi kiyasi YASAK — `fransa` f='987-01-01' uc haneli."""
    if not s:
        return None
    p = str(s).split("-")
    try:
        return (int(p[0]), int(p[1]) if len(p) > 1 else 1,
                int(p[2]) if len(p) > 2 else 1)
    except ValueError:
        return None


js = ("global.window={};eval(require('fs').readFileSync(process.argv[1],'utf8'));"
      "const D=window.DEVLETLER||[];"
      "console.log(JSON.stringify(D.map(d=>({id:d.id,harita:d.harita}))));")
p = subprocess.run(["node", "-e", js, os.path.join(KOK, "data", "devletler.js")],
                   capture_output=True, text=True, encoding="utf-8")
MEVCUT = json.loads(p.stdout.strip())
MEVCUT_ID = {d["id"] for d in MEVCUT if d.get("id")}
ANAHTAR = MEVCUT_ID | {d["harita"] for d in MEVCUT if d.get("harita")}
BOYA = set(R.BOYALAR)

veri = json.load(io.open(sys.argv[1], encoding="utf-8"))
# kunye listesini ic ice yapidan cikar: 'id' ve 'f' tasiyan her sozluk
kunyeler = []


def topla(o):
    if isinstance(o, dict):
        if "id" in o and ("f" in o or "t" in o):
            kunyeler.append(o)
        else:
            for v in o.values():
                topla(v)
    elif isinstance(o, list):
        for e in o:
            topla(e)


topla(veri)
print("mevcut künye : %d · BOYALAR : %d" % (len(MEVCUT_ID), len(BOYA)))
print("önerilen     : %d" % len(kunyeler))
print()

hata, uyari = [], []
gorulen = {}
for k in kunyeler:
    kid = k.get("id") or "<ID YOK>"
    # ④
    for a in ("id", "ad", "f", "t"):
        if not k.get(a):
            hata.append((kid, "④ zorunlu alan BOŞ: %s" % a))
    # ① kendi içinde
    if kid in gorulen:
        hata.append((kid, "① MÜKERRER — bu dosyada %d kez" % (gorulen[kid] + 1)))
    gorulen[kid] = gorulen.get(kid, 0) + 1
    # ① mevcutla
    if kid in MEVCUT_ID:
        hata.append((kid, "① ÇAKIŞMA — devletler.js'te ZATEN VAR"))
    # ②
    for a in ("f", "t"):
        v = k.get(a)
        if v and len(str(v).split("-")[0]) < 4:
            hata.append((kid, "② YIL DÖRT HANE DEĞİL: %s=%s" % (a, v)))
    # ③
    gf, gt = gun(k.get("f")), gun(k.get("t"))
    if gf and gt:
        if gf > gt:
            hata.append((kid, "③ TERS aralık: %s → %s" % (k["f"], k["t"])))
        elif gf == gt:
            hata.append((kid, "③ SIFIR uzunluk: %s" % k["f"]))
        if gt > UFUK:
            hata.append((kid, "③ ufuk AŞILDI: t=%s > 1923-10-29" % k["t"]))
    # ⑤
    if not (k.get("kaynak") or "").strip():
        uyari.append((kid, "⑤ kaynak: BOŞ — §4: 'bulunamadı' da yazılır"))
    # ⑥
    h = k.get("harita")
    if h and h not in ANAHTAR and h not in {x.get("id") for x in kunyeler}:
        hata.append((kid, "⑥ harita:'%s' HEDEFİ YOK — sessizce boyanmaz" % h))
    # ⑦
    anahtar = h or kid
    if anahtar not in BOYA:
        uyari.append((kid, "⑦ RENK YOK (%s) — §8 harita deliği" % anahtar))

print("🔴 HATA  : %d" % len(hata))
for kid, m in hata:
    print("   %-30s %s" % (kid, m))
print()
print("🟡 UYARI : %d" % len(uyari))
renksiz = [kid for kid, m in uyari if m.startswith("⑦")]
for kid, m in uyari:
    if not m.startswith("⑦"):
        print("   %-30s %s" % (kid, m))
print("   ⑦ RENK YOK: %d künye — renk partisi BENDE, bu beklenen" % len(renksiz))
print()
print("🟢 UYGULANABİLİR" if not hata else "🔴 UYGULAMA DURDU — önce hatalar")
