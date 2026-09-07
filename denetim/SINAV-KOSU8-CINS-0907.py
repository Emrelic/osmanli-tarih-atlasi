# -*- coding: utf-8 -*-
u"""Ⓒ — «YÖNLENDİRİLEMEYEN» DOSYALAR HANGİ `_CINS`i BEYAN ETMELİ?
SINAV-KOSU8-0907  ·  7 Eylül 2026

══════════════════════════════════════════════════════════════════════════
🔴 ÖNGÖRÜ ÖLÇÜMDEN ÖNCE DAMGALANDI:
   `denetim/ONGORU-SINAV-KOSU8-CINS-0907.md`
   Ö-C1 olcum ≥%50 · Ö-C2 belirsiz ≤4 · Ö-C3 kunye ≥2 ·
   Ö-C4 en az bir dosyanın ADI cinsini YANLIŞ ima ediyor
══════════════════════════════════════════════════════════════════════════

🔴🔴 ÜÇ SINIR — ve üçü de öngörüde YAZILI, sonradan eklenmedi:
   ① HİÇBİR DOSYAYA `_CINS` YAZILMAZ. Hepsi başka oturumların (`§7`).
     Bu betiğin çıktısı bir **ÖNERİ TABLOSU**; sözleşmeyi koordinatör
     koyar, alanı dosyanın sahibi yazar.
   ② ŞEMADAN okunur, ANAHTAR ADINDAN DEĞİL. Bugün ikisi de yanılttı:
        `YAMA-KUNYE-T-0905`    DOSYA adı doğru · cins yanlış
        `OLCUM-ANTLASMA-SLUG`  ANAHTAR adı doğru · cins yanlış (31 «künye»,
                               şema TAM 0/31 — TDV slug ölçümüymüş)
   ③ `olcum` kovası bir HÜKÜM DEĞİL. Bir dosyanın uygulanacak
     olmadığını KESİN söyleyen tek şey SAHİBİNİN BEYANI. Buradaki
     hüküm *"şemasında uygulanabilir bir iz yok"* demektir, o kadar.

ÖLÇÜT (öngörüde yazıldı, DEĞİŞTİRİLMEDİ)
    kunye              id VE ad VE f VE t
    kunye-kronoloji    üst düzey `kunyeler` VE kayıtlarda `eklenen`
    cekirdek-kronoloji `gun` ya da `duygu` ya da `yer_id`
    sahiplik           ad VE (d|s|v|isg)
    kenar              üst düzey `kenarlar` VE f,t
    olcum              hiçbiri tutmuyor
    ⓑ BELİRSİZ         İKİ ya da daha çok cins AYNI ANDA tutuyor

KOŞULUŞ
    py denetim/SINAV-KOSU8-CINS-0907.py
    py denetim/SINAV-KOSU8-CINS-0907.py --atesle
"""
from __future__ import unicode_literals

import io
import json
import os
import sys

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DIZIN = os.path.join(KOK, "denetim")
SAHIP_ONEK = ("YAMA-KUNYE-", "KRONOLOJI-")
YAMA_KOK = ("kunye", "madde", "yama", "oneri", "eklenen", "kayit")
VERI_ALANI = ("ad", "id", "d", "s", "v", "isg", "k", "m", "f", "t", "kur")
# ad öneki → ima ettiği cins (Ö-C4 için; HÜKÜM DEĞİL, yalnız İMA)
ONEK_IMA = {"OLCUM-": "olcum", "BULGU-": "olcum", "YAMA-": "yama-cinsi",
            "ONERI-": "oneri-cinsi", "KUNYE-": "kunye",
            "KRONOLOJI-": "kunye-kronoloji", "SINIR-": "kenar"}


def yama_mi(d):
    if isinstance(d, list):
        return any(isinstance(x, dict) and ("id" in x or "ad" in x)
                   for x in d[:5])
    if not isinstance(d, dict):
        return False
    if any(any(k2 in k.lower() for k2 in YAMA_KOK) for k in d):
        return True
    for v in d.values():
        if isinstance(v, list) and v and isinstance(v[0], dict) \
                and ("id" in v[0] or "ad" in v[0]):
            return True
    return False


def kayit_alanlari(d):
    u"""Dosyadaki TÜM kayıt dizilerinin alan birleşimi."""
    alan = set()
    diziler = []
    if isinstance(d, list):
        diziler = [("(üst düzey)", d)]
    elif isinstance(d, dict):
        diziler = [(k, v) for k, v in d.items()
                   if isinstance(v, list) and v and isinstance(v[0], dict)]
    for _ad, v in diziler:
        for r in v[:12]:
            if isinstance(r, dict):
                alan |= set(r.keys())
    return alan, [a for a, _ in diziler]


def cinsler(d):
    u"""ÖLÇÜTÜ birebir uygular; TUTAN CİNSLERİN listesini döner."""
    ust = set(d.keys()) if isinstance(d, dict) else set()
    alan, _ = kayit_alanlari(d)
    out = []
    if {"id", "ad", "f", "t"} <= alan:
        out.append("kunye")
    if "kunyeler" in ust and "eklenen" in alan:
        out.append("kunye-kronoloji")
    if alan & {"gun", "duygu", "yer_id"}:
        out.append("cekirdek-kronoloji")
    if "ad" in alan and (alan & {"d", "s", "v", "isg"}):
        out.append("sahiplik")
    if "kenarlar" in ust and {"f", "t"} <= alan:
        out.append("kenar")
    return out


def ima(ad):
    for onek, c in ONEK_IMA.items():
        if ad.startswith(onek):
            return c
    return None


def atesleme():
    t = []

    def de(ad, bekle, olc):
        t.append((ad, bekle, olc, bekle == olc))

    de("kunye · id+ad+f+t", ["kunye"],
       cinsler({"k": [{"id": "x", "ad": "A", "f": "1", "t": "2"}]}))
    de("kunye-kronoloji · kunyeler+eklenen", ["kunye-kronoloji"],
       cinsler({"kunyeler": [{"eklenen": [1]}]}))
    de("cekirdek · gun", ["cekirdek-kronoloji"],
       cinsler({"m": [{"gun": "1", "b": "x"}]}))
    de("sahiplik · ad+s", ["sahiplik"],
       cinsler({"n": [{"ad": "X", "s": []}]}))
    de("kenar · kenarlar+f,t", ["kenar"],
       cinsler({"kenarlar": [{"f": "1", "t": "2"}]}))
    de("olcum · hiçbiri tutmuyor", [],
       cinsler({"o": [{"deger": 1, "aciklama": "x"}]}))
    de("BELİRSİZ · İKİ cins aynı anda", 2,
       len(cinsler({"n": [{"id": "x", "ad": "A", "f": "1", "t": "2",
                           "s": []}]})))
    de("şema ANAHTAR ADINI ezer · `kunyeler` ama şema künye DEĞİL", [],
       cinsler({"kunyeler": [{"id": "x", "ad": "A", "kaba_yil": 1}]}))
    de("ima · OLCUM- öneki", "olcum", ima("OLCUM-X.json"))
    de("ima · önek yoksa None", None, ima("ZZZ-X.json"))
    return t


def main():
    if "--atesle" in sys.argv:
        print("C13 ② ATEŞLEME\n")
        d = atesleme()
        kotu = 0
        for ad, b, o, ok in d:
            print(("  🟢 " if ok else "  🔴 ") + ad.ljust(48) +
                  "beklenen %r · ölçülen %r" % (b, o))
            kotu += (not ok)
        print("\n%d/%d dal ateşledi" % (len(d) - kotu, len(d)))
        return 1 if kotu else 0

    secilen = []
    for ad in sorted(os.listdir(DIZIN)):
        if not ad.endswith(".json") or "0907" not in ad:
            continue
        if any(ad.startswith(o) for o in SAHIP_ONEK):
            continue
        try:
            with io.open(os.path.join(DIZIN, ad), encoding="utf-8") as f:
                d = json.load(f)
        except Exception:                             # noqa: BLE001
            continue
        if not yama_mi(d):
            continue
        alan, diziler = kayit_alanlari(d)
        if not (alan & set(VERI_ALANI)):
            continue                                  # ÖLÇÜM/BULGU, önceki tur
        secilen.append((ad, d, alan, diziler))

    print("═" * 78)
    print("Ⓒ — `_CINS` ÖNERİ TABLOSU  (ÖNERİDİR · HİÇBİR DOSYAYA YAZILMADI)")
    print("═" * 78)
    print("aday dosya: %d" % len(secilen))
    print("")
    kova = {"ACIK": [], "BELIRSIZ": [], "OLCUM": []}
    celisen = []
    for ad, d, alan, diziler in secilen:
        c = cinsler(d)
        im = ima(ad)
        if len(c) > 1:
            k = "BELIRSIZ"
            oneri = " ya da ".join(c)
        elif len(c) == 1:
            k = "ACIK"
            oneri = c[0]
        else:
            k = "OLCUM"
            oneri = "olcum"
        kova[k].append((ad, oneri, sorted(alan)[:8], diziler[:2]))
        # Ö-C4: adın ima ettiği cins ile şemadan çıkan ÇELİŞİYOR mu?
        if im and im not in ("yama-cinsi", "oneri-cinsi") and im != oneri:
            celisen.append((ad, im, oneri))

    for k, baslik in (("ACIK", "ⓐ CİNS AÇIK — şemadan okunuyor"),
                      ("BELIRSIZ", "🔴 ⓑ BELİRSİZ — iki alete de uyuyor"),
                      ("OLCUM", "ⓒ `olcum` — şemasında uygulanabilir iz YOK")):
        print("%s   (%d)" % (baslik, len(kova[k])))
        for ad, oneri, alan, diz in kova[k]:
            print("   %-44s → _CINS: %s" % (ad, oneri))
            print("      dizi: %s · alan: %s"
                  % (", ".join(diz) or "-", ", ".join(alan)))
        print("")

    print("─" * 78)
    print("🔴 Ö-C4 · ADI CİNSİNİ YANLIŞ İMA EDEN DOSYA: %d" % len(celisen))
    for ad, im, oneri in celisen:
        print("   %-44s ad İMA EDİYOR «%s» · şema DİYOR «%s»" % (ad, im, oneri))
    print("")
    top = len(secilen)
    o1 = 100.0 * len(kova["OLCUM"]) / max(1, top)
    print("ÖNGÖRÜ SINAVI (denetim/ONGORU-SINAV-KOSU8-CINS-0907.md)")
    kunye_n = sum(1 for _a, o, _al, _d in kova["ACIK"] if o == "kunye")
    for et, kos, ol in (
            ("Ö-C1  olcum >= %50", o1 >= 50, "%.1f%%" % o1),
            ("Ö-C2  belirsiz <= 4", len(kova["BELIRSIZ"]) <= 4,
             len(kova["BELIRSIZ"])),
            ("Ö-C3  kunye >= 2", kunye_n >= 2, kunye_n),
            ("Ö-C4  yanlış ima >= 1", len(celisen) >= 1, len(celisen))):
        print("  %-22s %s   ölçülen %s"
              % (et, "🟢 TUTTU" if kos else "🔴 ÇÜRÜDÜ", ol))
    print("")
    print("🔴 BU BİR ÖNERİ TABLOSUDUR. Hiçbir dosyaya `_CINS` yazılmadı —")
    print("   hepsi başka oturumların (`§7`). Sözleşmeyi koordinatör koyar,")
    print("   alanı dosyanın SAHİBİ yazar.")
    return 0


if __name__ == "__main__":
    if hasattr(sys.stdout, "reconfigure"):
        sys.stdout.reconfigure(encoding="utf-8", errors="replace")
    sys.exit(main())
