# -*- coding: utf-8 -*-
u"""«0 MADDE» BASAN DOSYALAR — Ⓐ mı, Ⓑ mi, Ⓒ mi?
SINAV-KOSU8-0907  ·  7 Eylül 2026

══════════════════════════════════════════════════════════════════════════
SORU (1.MURAT · kuru koşu 12 dosya için «0 madde» bastı)
══════════════════════════════════════════════════════════════════════════
    Ⓐ dosya kronoloji yaması DEĞİL      → glob yanlış sahiplenmiş
    Ⓑ kronoloji yaması AMA alet okuyamıyor → GERÇEK KAYIP
    Ⓒ 🆕 kronoloji yaması, alet DOĞRU çalışıyor — HEDEFLERİ AYRI
       (`_kronoloji_uygula` → devletler.js künye içi `kronoloji:[]`
        bu dosyalar    → data/olaylar*.js ÇEKİRDEK kronolojisi)

🔴 ÖNGÖRÜ ÖLÇÜMDEN ÖNCE YAZILDI: `denetim/ONGORU-SINAV-KOSU8-SIFIR-0907.md`
   Ö-S1 Ⓒ ≥ 5 (mazeret YOK) · Ö-S2 0 < Ⓑ ≤ 3 (mazeret VAR) ·
   Ö-S3 ≥1 Ⓐ ve ZEND onlardan biri (mazeret YOK) ·
   Ö-S4 «12» sayısı eksik olabilir (mazeret YOK)

══════════════════════════════════════════════════════════════════════════
ALETİN OKUMA YOLU — koddan çıkarıldı, varsayılmadı
══════════════════════════════════════════════════════════════════════════
    _kronoloji_uygula.py:231   ky = d.get("kunyeler")
    :232   cift = ky.items() if dict else [(k.get("id"), k) for k in ky]
    :235   ek = k.get("eklenen") or []
⇒ Bir dosyanın «0 madde» basması ÜÇ ayrı sebepten olabilir:
    · `kunyeler` anahtarı YOK           → dosya o cinsten değil ya da başka şema
    · `kunyeler` VAR ama boş
    · `kunyeler` VAR, öğelerde `eklenen` YOK  → alan adı sapması (Ⓑ adayı)

KOŞULUŞ
    py denetim/SINAV-KOSU8-SIFIR-0907.py
    py denetim/SINAV-KOSU8-SIFIR-0907.py --atesle
"""
from __future__ import unicode_literals

import io
import json
import os
import sys

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DIZIN = os.path.join(KOK, "denetim")


def madde_sayisi(d):
    u"""Aletin YOLUNU birebir taklit eder — kendi yolumu kurmuyorum."""
    ky = d.get("kunyeler")
    if ky is None:
        return None, "«kunyeler» anahtarı YOK"
    cift = (list(ky.items()) if isinstance(ky, dict)
            else [(k.get("id") if isinstance(k, dict) else None, k)
                  for k in (ky or [])])
    if not cift:
        return 0, "«kunyeler» VAR ama BOŞ"
    n = 0
    eklensiz = 0
    for _slug, k in cift:
        ek = (k.get("eklenen") if isinstance(k, dict) else None) or []
        if not ek:
            eklensiz += 1
        n += len(ek)
    if n == 0:
        return 0, "«kunyeler» VAR (%d öğe) ama hiçbirinde «eklenen» YOK" % len(cift)
    return n, "%d madde" % n


# ── hedef beyanı: dosyanın KENDİ sözü ────────────────────────────────────
# 🔴 İLK SÜRÜM BUNU SEZGİYLE YAPIYORDU («içerikte 'olaylar' geçiyor mu»)
#   ve Ⓒ=12 dedi. Ölçüm sezgiyi daralttı: yalnız ÜÇ dosya hedefini ADIYLA
#   beyan ediyor, DOKUZU hiç etmiyor. Bir sezgi bütün kümeyi tek kovaya
#   koyunca kova bilgi taşımaz. ⇒ Hüküm artık BEYANA dayanıyor, sezgi
#   yalnız ikinci kademe, ve beyansızlar AYRI bir kovada.
HEDEF_ANAHTAR = ("hedef_dosya", "hedef_dosya_onerisi", "_HEDEF", "hedef",
                 "_UYGULAMA", "is", "_KAPSAM")


def hedef_beyani(o, derinlik=0):
    out = []
    if isinstance(o, dict):
        for k, v in o.items():
            if k in HEDEF_ANAHTAR and isinstance(v, type(u"")):
                out.append(v)
            elif derinlik < 2:
                out.extend(hedef_beyani(v, derinlik + 1))
    elif isinstance(o, list) and derinlik < 2:
        for x in o[:3]:
            out.extend(hedef_beyani(x, derinlik + 1))
    return out


def sinifla(ad, d, sayi, sebep):
    u"""Ⓐ / Ⓑ / Ⓒ / BEYANSIZ — ve gerekçesi YAZILIR."""
    beyan = " | ".join(hedef_beyani(d))
    ham = json.dumps(d, ensure_ascii=False).lower()
    if sayi == 0 and "eklenen" in sebep:
        return "B", "şema uyuşmuyor: künye var, «eklenen» yok ⇒ GERÇEK KAYIP adayı"
    if "olaylar" in beyan:
        return "C", "hedefini ADIYLA beyan ediyor → %s" % (
            [p for p in beyan.split(" | ") if "olaylar" in p][0][:70])
    if "devletler" in beyan:
        return "?", "hedefi `devletler.js` diyor ama alet okuyamıyor — İNCELE"
    if "çekirdek" in ham or "cekirdek" in ham:
        return "C2", "hedef beyanı YOK; metni ÇEKİRDEK kronolojiden söz ediyor"
    if sayi is None:
        return "BEYANSIZ", "«kunyeler» YOK ve hedef beyanı da YOK — cinsi ölçülemez"
    return "A", sebep


def atesleme():
    t = []

    def de(ad, bekle, olc):
        t.append((ad, bekle, olc, bekle == olc))

    de("kunyeler YOK → None", None, madde_sayisi({"baska": 1})[0])
    de("kunyeler BOŞ dict → 0", 0, madde_sayisi({"kunyeler": {}})[0])
    de("kunyeler dict + eklenen → sayar", 2, madde_sayisi(
        {"kunyeler": {"x": {"eklenen": [1, 2]}}})[0])
    de("kunyeler LİSTE + eklenen → sayar", 1, madde_sayisi(
        {"kunyeler": [{"id": "x", "eklenen": [1]}]})[0])
    de("eklenen YOK → 0 ve sebep söyler", 0, madde_sayisi(
        {"kunyeler": {"x": {"maddeler": [1]}}})[0])
    de("sınıf · hedefini ADIYLA beyan → C", "C",
       sinifla("f", {"hedef": "data/olaylar_ek.js"}, None, "-")[0])
    de("sınıf · beyan YOK, metinde ÇEKİRDEK → C2", "C2",
       sinifla("f", {"_NOT": "çekirdek kronolojiye"}, None, "-")[0])
    # 🔴 BU BEKLENTİ BİR KEZ BAYATLADI: tasarım «sezgi» yerine «beyan»a
    #   çevrildiğinde doğru cevap A değil BEYANSIZ oldu. Kod doğruydu,
    #   BEKLENTİ eskiydi — bugün dördüncü kez ateşleme sınavın kendisini
    #   yakaladı. Ve doğrusu BEYANSIZ: hedefini söylemeyen bir dosyanın
    #   cinsi hakkında hüküm vermek, ölçmeden sınıflandırmaktır.
    de("sınıf · beyan YOK + çekirdek işareti YOK → BEYANSIZ", "BEYANSIZ",
       sinifla("f", {"baska": 1}, None, "-")[0])
    de("sınıf · eklensiz künye → B", "B",
       sinifla("f", {"kunyeler": {"x": {}}}, 0,
               "«kunyeler» VAR (1 öğe) ama hiçbirinde «eklenen» YOK")[0])
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

    dosyalar = sorted(a for a in os.listdir(DIZIN)
                      if a.startswith("KRONOLOJI-") and a.endswith(".json"))
    print("═" * 78)
    print("«0 MADDE» BASAN DOSYALAR — Ⓐ / Ⓑ / Ⓒ")
    print("═" * 78)
    print("glob'un tuttuğu: denetim/KRONOLOJI-*.json  ·  %d dosya" % len(dosyalar))
    print("")
    kova = {"A": [], "B": [], "C": [], "C2": [], "BEYANSIZ": [],
            "?": [], "DOLU": []}
    for ad in dosyalar:
        try:
            with io.open(os.path.join(DIZIN, ad), encoding="utf-8") as f:
                d = json.load(f)
        except Exception as e:                       # noqa: BLE001
            print("  ⚫ %s — okunamadı: %s" % (ad, str(e)[:50]))
            continue
        sayi, sebep = madde_sayisi(d)
        if sayi:
            kova["DOLU"].append((ad, sayi))
            continue
        s, gerekce = sinifla(ad, d, sayi, sebep)
        kova[s].append((ad, gerekce, sorted(d.keys())[:6] if isinstance(d, dict) else []))

    sifir = sum(len(kova[s]) for s in ("A", "B", "C", "C2", "BEYANSIZ", "?"))
    print("🟢 DOLU (alet madde okuyor): %d dosya" % len(kova["DOLU"]))
    print("🔴 «0 MADDE» BASAN         : %d dosya" % sifir)
    print("")
    for s, baslik in (
            ("C", "Ⓒ HEDEFİNİ ADIYLA BEYAN EDİYOR — alet doğru, dosya başka yere ait"),
            ("C2", "Ⓒ2 hedef beyanı YOK, metni ÇEKİRDEK diyor — güçlü ama BEYANSIZ"),
            ("BEYANSIZ", "⚫ HEDEF BEYANI YOK — cinsi ÖLÇÜLEMEZ"),
            ("B", "Ⓑ ŞEMA UYUŞMUYOR — GERÇEK KAYIP adayı"),
            ("A", "Ⓐ KRONOLOJİ YAMASI DEĞİL — glob yanlış sahiplenmiş"),
            ("?", "❓ SINIFLANDIRILAMADI")):
        k = kova[s]
        print("%s   (%d dosya)" % (baslik, len(k)))
        for ad, gerekce, anah in k:
            print("   · %-38s %s" % (ad, gerekce))
            print("     anahtarlar: %s" % ", ".join(anah))
        print("")
    print("─" * 78)
    print("ÖNGÖRÜ SINAVI (denetim/ONGORU-SINAV-KOSU8-SIFIR-0907.md)")
    ceset = len(kova["C"]) + len(kova["C2"])
    for et, kos, gercek in (
            ("Ö-S1  Ⓒ >= 5", ceset >= 5, ceset),
            ("Ö-S2  0 < Ⓑ <= 3", 0 < len(kova["B"]) <= 3, len(kova["B"])),
            ("Ö-S3  Ⓐ >= 1", len(kova["A"]) >= 1, len(kova["A"])),
            ("Ö-S4  sıfır basan != 12", sifir != 12, sifir)):
        print("  %-18s %s   ölçülen %d" % (et, "🟢 TUTTU" if kos else "🔴 ÇÜRÜDÜ", gercek))
    zend = [a for a, _, _ in kova["A"] if "ZEND" in a]
    print("  Ö-S3b ZEND Ⓐ'da    %s" % ("🟢 TUTTU" if zend else "🔴 ÇÜRÜDÜ"))
    print("")
    print("🔴 Ⓒ ÇIKSA BİLE KUSUR KAYBOLMUYOR: bir alet kendisine ait")
    print("   OLMAYAN bir dosya için «0 madde» basarsa, okuyan onu")
    print("   «yapacak iş yok» diye okur. Doğrusu «bu dosya BANA ait")
    print("   değil» — aletin dördüncü bir kovaya ihtiyacı var:")
    print("   SAHİPLENMEDİM.")
    return 0


if __name__ == "__main__":
    if hasattr(sys.stdout, "reconfigure"):
        sys.stdout.reconfigure(encoding="utf-8", errors="replace")
    sys.exit(main())
