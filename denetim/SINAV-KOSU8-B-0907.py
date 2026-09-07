# -*- coding: utf-8 -*-
u"""Ⓑ — «KOŞU BİTİNCE» KALEMLERİ: BAYAT MI, AÇIK MI?
SINAV-KOSU8-0907  ·  7 Eylül 2026

══════════════════════════════════════════════════════════════════════════
🔴 ÖNGÖRÜ ÖLÇÜMDEN ÖNCE DAMGALANDI: `denetim/ONGORU-SINAV-KOSU8-B-0907.md`
   (commit `07bf1c8`) — Ö-B1 ölçülemez ≥%50 · Ö-B2 bayat %20-60 ·
   Ö-B3 evren >179 · Ö-B4 yeni kilit 0 · Ö-B5 bayatlar «alan/şema» cinsi
══════════════════════════════════════════════════════════════════════════

YÖNTEM — «sınıflandır, sonra oku»
    Bir «koşu bitince» satırı SINANABİLİR bir ARTEFAKT adıyor mu?
      ARTEFAKT = dosya yolu · geri tikli tanımlayıcı
      SINAV    = o artefakt bugün VAR mı?
    🔴 BAYAT     artefakt VAR   ⇒ borç ÖDENMİŞ olabilir
    ⚪ AÇIK      artefakt YOK   ⇒ kalem duruyor
    ⚫ ÖLÇÜLEMEZ satır artefakt adamıyor

🔴🔴 VE BU BİR HÜKÜM DEĞİL, ELLE OKUNACAK BİR ADAY LİSTESİDİR.
   Bir artefaktın VAR OLMASI, o satırdaki işin YAPILDIĞINI göstermez —
   yalnız o adın bugün depoda geçtiğini gösterir. Bu oturum bugün ÜÇ KEZ
   bir ad eşleşmesinden yanlış hüküm çıkardı (`Cânet (Djanet)` ·
   `Doha (Katar)` · `OLCUM-ANTLASMA-SLUG`'un 31 «künye»si).
   ⇒ ***Bir ad eşleşmesi cins kanıtı değildir.*** Öngörüde de yazılı.

KOŞULUŞ
    py denetim/SINAV-KOSU8-B-0907.py
    py denetim/SINAV-KOSU8-B-0907.py --atesle
    py denetim/SINAV-KOSU8-B-0907.py --liste BAYAT
"""
from __future__ import unicode_literals

import io
import os
import re
import sys

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DIZIN = ["denetim", "oturumlar", "."]

DESEN = re.compile(
    r"ko(?:ş|s)u\s*(?:\d+[ab]?\s*)?(?:bitince|bittikten|bitene|bitsin|"
    r"bitmeden|sonras(?:ı|i)|(?:ç|c)(?:ö|o)z(?:ü|u)l(?:ü|u)nce)|"
    r"ko(?:ş|s)udan\s+sonra|bir sonraki ko(?:ş|s)u|sonraki ko(?:ş|s)uda|"
    r"gelecek ko(?:ş|s)u|yeni bir ko(?:ş|s)u", re.I)

YOL_RX = re.compile(r"\b((?:data|arac|denetim|js|css|oturumlar|veri-kaynak)"
                    r"/[A-Za-z0-9_\-\.\*]+\.(?:js|py|json|md|css|geojson))")
# geri tikli tanımlayıcı: `ikiz` · `kid` · `not` · `_HEDEF`
TIK_RX = re.compile(r"`([A-Za-z_][A-Za-z0-9_]{1,24})`")
# çok geçen ve ayırt etmeyen kelimeler — artefakt sayılmaz
GURULTU = {"data", "arac", "denetim", "js", "py", "json", "md", "true",
           "false", "null", "None", "int", "str", "if", "for", "in"}

_ONBELLEK = {}


def dosya_metni(yol):
    if yol not in _ONBELLEK:
        tam = os.path.join(KOK, yol.replace("/", os.sep))
        try:
            with io.open(tam, encoding="utf-8", errors="replace") as f:
                _ONBELLEK[yol] = f.read()
        except Exception:                            # noqa: BLE001
            _ONBELLEK[yol] = None
    return _ONBELLEK[yol]


def artefaktlar(satir):
    u"""(yollar, tanımlayıcılar) — gürültü elenmiş."""
    yol = [y for y in YOL_RX.findall(satir) if "*" not in y]
    tik = [t for t in TIK_RX.findall(satir)
           if t not in GURULTU and not t.endswith(".js")]
    return (yol, tik)


def sina(satir):
    u"""(kova, gerekçe) — BAYAT · AÇIK · ÖLÇÜLEMEZ."""
    yol, tik = artefaktlar(satir)
    if not yol and not tik:
        return ("ÖLÇÜLEMEZ", "satır sınanabilir artefakt adamıyor")
    # ① dosya yolu varsa: dosya var mı?
    for y in yol:
        if dosya_metni(y) is None:
            return ("AÇIK", "dosya YOK: %s" % y)
    # ② tanımlayıcı: satırda bir dosya da adanmışsa ONUN içinde ara
    for t in tik:
        hedefler = yol if yol else ["arac/girdi.py", "arac/uret_petek.py"]
        for h in hedefler:
            m = dosya_metni(h)
            if m and re.search(r'["\']%s["\']|\b%s\b' % (re.escape(t),
                                                         re.escape(t)), m):
                return ("BAYAT", "`%s` → %s içinde GEÇİYOR" % (t, h))
        if yol:
            return ("AÇIK", "`%s` → %s içinde GEÇMİYOR" % (t, yol[0]))
        return ("ÖLÇÜLEMEZ",
                "`%s` — hangi dosyada aranacağı satırda YAZMIYOR" % t)
    if yol:
        return ("BAYAT", "dosya VAR: %s" % yol[0])
    return ("ÖLÇÜLEMEZ", "-")


def dosyalar():
    out = []
    for d in DIZIN:
        kok = os.path.join(KOK, d) if d != "." else KOK
        if not os.path.isdir(kok):
            continue
        for ad in sorted(os.listdir(kok)):
            if ad.endswith(".md"):
                out.append(((d + "/" + ad) if d != "." else ad,
                            os.path.join(kok, ad)))
    return out


def atesleme():
    t = []

    def de(ad, bekle, olc):
        t.append((ad, bekle, olc, bekle == olc))

    de("artefakt YOK → ÖLÇÜLEMEZ", "ÖLÇÜLEMEZ",
       sina("koşu bitince bu iş yapılacak")[0])
    de("var olan dosya + geçen tanımlayıcı → BAYAT", "BAYAT",
       sina("koşu bitince `GIRDI_DOSYALARI` arac/girdi.py'ye")[0])
    de("var olmayan dosya → AÇIK", "AÇIK",
       sina("koşu bitince data/yok_boyle_bir_dosya.js yazılacak")[0])
    de("dosya VAR ama tanımlayıcı GEÇMİYOR → AÇIK", "AÇIK",
       sina("koşu bitince `ZZZ_YOK_BOYLE_BIR_ALAN` arac/girdi.py'ye")[0])
    de("tanımlayıcı VAR, dosya adanmamış → ÖLÇÜLEMEZ", "ÖLÇÜLEMEZ",
       sina("koşu bitince `ZZZ_YOK_BOYLE_BIR_ALAN` eklenecek")[0])
    de("gürültü kelimesi artefakt SAYILMAZ", "ÖLÇÜLEMEZ",
       sina("koşu bitince `data` bakılacak")[0])
    de("glob içeren yol SAYILMAZ (dosya değil)", "ÖLÇÜLEMEZ",
       sina("koşu bitince data/olaylar*.js gözden geçirilecek")[0])
    de("desen · «bir sonraki koşu» yakalanır", True,
       bool(DESEN.search("bir sonraki koşuda bakılacak")))
    de("desen · ilgisiz metin GİRMEZ", False,
       bool(DESEN.search("bu koşu uzun sürdü")))
    return t


def main():
    if "--atesle" in sys.argv:
        print("C13 ② ATEŞLEME\n")
        d = atesleme()
        kotu = 0
        for ad, b, o, ok in d:
            print(("  🟢 " if ok else "  🔴 ") + ad.ljust(46) +
                  "beklenen %r · ölçülen %r" % (b, o))
            kotu += (not ok)
        print("\n%d/%d dal ateşledi" % (len(d) - kotu, len(d)))
        return 1 if kotu else 0

    kova = {"BAYAT": [], "AÇIK": [], "ÖLÇÜLEMEZ": []}
    dosya_kumesi = set()
    for gor, yol in dosyalar():
        try:
            with io.open(yol, encoding="utf-8", errors="replace") as f:
                satirlar = f.read().splitlines()
        except Exception:                            # noqa: BLE001
            continue
        for i, s in enumerate(satirlar):
            if not DESEN.search(s):
                continue
            dosya_kumesi.add(gor)
            k, gerekce = sina(s)
            kova[k].append((gor, i + 1, gerekce, s.strip()[:96]))

    toplam = sum(len(v) for v in kova.values())
    sinanabilir = len(kova["BAYAT"]) + len(kova["AÇIK"])
    print("═" * 78)
    print("Ⓑ — «KOŞU BİTİNCE» KALEMLERİ")
    print("═" * 78)
    print("EVREN     : %d DOSYA · %d SATIR" % (len(dosya_kumesi), toplam))
    print("🔴 BAYAT   : %4d   (artefakt VAR — ADAY, hüküm DEĞİL)" % len(kova["BAYAT"]))
    print("⚪ AÇIK    : %4d   (artefakt YOK)" % len(kova["AÇIK"]))
    print("⚫ ÖLÇÜLEMEZ: %4d   (%.1f%%)"
          % (len(kova["ÖLÇÜLEMEZ"]),
             100.0 * len(kova["ÖLÇÜLEMEZ"]) / max(1, toplam)))
    print("")
    iL = sys.argv.index("--liste") if "--liste" in sys.argv else -1
    hedef_kova = sys.argv[iL + 1] if iL >= 0 else "BAYAT"
    print("«%s» KOVASI (ilk 25):" % hedef_kova)
    for gor, no, gerekce, s in kova.get(hedef_kova, [])[:25]:
        print("   %s:%d" % (gor, no))
        print("      %s" % gerekce)
        print("      %s" % s)
    print("")
    print("─" * 78)
    print("ÖNGÖRÜ SINAVI (denetim/ONGORU-SINAV-KOSU8-B-0907.md · 07bf1c8)")
    olc_oran = 100.0 * len(kova["ÖLÇÜLEMEZ"]) / max(1, toplam)
    bayat_oran = 100.0 * len(kova["BAYAT"]) / max(1, sinanabilir)
    for et, kos, ol in (
            ("Ö-B1  ölçülemez >= %50", olc_oran >= 50, "%.1f%%" % olc_oran),
            ("Ö-B2  bayat %20-%60", 20 <= bayat_oran <= 60,
             "%.1f%%" % bayat_oran),
            ("Ö-B3  evren > 179", len(dosya_kumesi) > 179, len(dosya_kumesi))):
        print("  %-24s %s   ölçülen %s"
              % (et, "🟢 TUTTU" if kos else "🔴 ÇÜRÜDÜ", ol))
    print("  Ö-B4  yeni merge kilidi   ⚫ ELLE okunacak — makine hükmedemez")
    print("  Ö-B5  bayatların cinsi    ⚫ ELLE okunacak")
    print("")
    print("🔴🔴 BAYAT KOVASI BİR HÜKÜM DEĞİL, ADAY LİSTESİDİR. Bir artefaktın")
    print("   VAR OLMASI, o satırdaki işin YAPILDIĞINI göstermez. Bu oturum")
    print("   bugün ÜÇ KEZ bir ad eşleşmesinden yanlış hüküm çıkardı.")
    return 0


if __name__ == "__main__":
    if hasattr(sys.stdout, "reconfigure"):
        sys.stdout.reconfigure(encoding="utf-8", errors="replace")
    sys.exit(main())
