# -*- coding: utf-8 -*-
"""BAYAT taramasinin BORC KAPATAN hukumlerini uygular — TEK YONDE.

Birlestirici 39 cakisma bildirdi: mevcut `sirada`, yeni `cozuldu`.
Bu bir kaza DEGIL, BAYAT AVCISI'nin ISININ TA KENDISI: acik gorunen ama
coktan cozulmus maddeleri bulmak.

🔴 AMA YON KISITI SART. Yalniz su gecis uygulanir:
      ACIK  (sirada · olculecek)   ->   KAPALI (cozuldu · tekrar · zaten-dogru)
Tersi (kapali bir maddeyi acmak) UYGULANMAZ — o, bir borcu geri acmak
olurdu ve ancak insan karariyla yapilir.

⚠️ Ve her degisiklik `onceki_hukum` alanina KAYDEDILIR: bir hukmun
   degistigi gorunmez olursa, yarin "bu niye kapali" sorusu cevapsiz kalir.
"""
import io, json, os, sys

PROJE = os.environ["ATLAS_KOK"]
KUTU = r"C:\Users\emrem\OneDrive\Desktop\ClaudEmre\kutu\giden"
KAYNAK = os.path.join(PROJE, "denetim", "HUKUM-BAYAT.json")
ACIK = {"sirada", "olculecek"}
KAPALI = {"cozuldu", "tekrar", "zaten-dogru"}

def yaz(s):
    print(str(s).encode("ascii", "replace").decode("ascii"))

if not os.path.exists(KAYNAK):
    yaz("[!] HUKUM-BAYAT.json yok — DUR."); sys.exit(2)
veri = json.load(io.open(KAYNAK, encoding="utf-8"))

uygulanan = reddedilen = 0
for paket, maddeler in veri.items():
    cy = os.path.join(KUTU, paket, "CEVAP.json")
    if not os.path.exists(cy):
        continue
    d = json.load(io.open(cy, encoding="utf-8"))
    mad = d.get("maddeler") or {}
    n = 0
    for no, kayit in (maddeler or {}).items():
        yeni = (kayit or {}).get("hukum", "")
        if no not in mad:
            continue
        esk = mad[no].get("hukum", "")
        if esk == yeni:
            continue
        if esk in ACIK and yeni in KAPALI:
            mad[no] = {"hukum": yeni,
                       "not": (kayit or {}).get("not", ""),
                       "onceki_hukum": esk,
                       "olcen": "BAYAT AVCISI · 27 Agustos 2026 gece nobeti"}
            n += 1
            uygulanan += 1
        else:
            yaz("   🔴 UYGULANMADI %s/%s: '%s' -> '%s' (yon kisiti disi)"
                % (paket, no, esk, yeni))
            reddedilen += 1
    if n:
        d["maddeler"] = mad
        io.open(cy, "w", encoding="utf-8").write(
            json.dumps(d, ensure_ascii=False, indent=1))
        yaz("   %-22s borc kapandi: %d" % (paket, n))

yaz("")
yaz("TOPLAM uygulanan: %d · yon kisitiyla reddedilen: %d"
    % (uygulanan, reddedilen))
