# -*- coding: utf-8 -*-
"""ORTAK NORMALLEŞTİRİCİ — Türkçe harf · diakritik · kesme.

🔴 NİÇİN AYRI BİR DOSYA:
`CLAUDE.md §4`: *"Normalleştirici ORTAK olmalı — üç ayrı alet üç ayrı
normalleştirici yazarsa ÜÇ AYRI KÖR NOKTA doğar."*

🔴 DOĞURAN VAKA (3 Eylül 2026, DUNYA-KAMERIKA-0903 kendi aletinde):
Künye eşleştiricim `bolge.lower()` kullanıyordu ve **58 adayı sessizce
kaçırdı.** Sebep Python'un Unicode kuralı:

    "İ".lower()  ==  "i̇"      (i + BİRLEŞİK NOKTA, iki kod noktası)

yani `"İnyupiak".lower()` = `"i̇nyupiak"` ve içinde `"inyupiak"` **YOKTUR**.
Alet ötmedi, hata vermedi — yalnız `?` bastı. `§4`ün Türkçe yazım
ekseninin bu projedeki altıncı vakası, ve bu sefer **kuralı okumuş olan
oturumun kendi aletinde.**

📌 Ders: *bir alet yazarken varsayılan `.lower()` DEĞİL, normalleştirici
olmalı.* `.lower()` istisna, normalleştirme kural.
"""
import re
import unicodedata

_HARF = {
    "İ": "i", "I": "i", "ı": "i", "i": "i",
    "Ğ": "g", "ğ": "g", "Ş": "s", "ş": "s",
    "Ç": "c", "ç": "c", "Ö": "o", "ö": "o",
    "Ü": "u", "ü": "u",
    "Â": "a", "â": "a", "Î": "i", "î": "i", "Û": "u", "û": "u",
    "Ê": "e", "ê": "e", "Ô": "o", "ô": "o",
    "É": "e", "é": "e", "È": "e", "è": "e",
    "Á": "a", "á": "a", "Í": "i", "í": "i",
    "Ó": "o", "ó": "o", "Ú": "u", "ú": "u",
    "Ñ": "n", "ñ": "n", "Å": "a", "å": "a",
    "Ø": "o", "ø": "o", "Æ": "ae", "æ": "ae",
    # kesme işaretinin bütün biçimleri — TDV tipografik kesme kullanır
    "’": "'", "‘": "'", "ʼ": "'", "´": "'",
    "`": "'", "ʻ": "'", "ʼ": "'",
}


def nrm(s):
    """Karşılaştırma için normalleştir: Türkçe harf + diakritik + kesme.

    - `İ`/`I`/`ı` hepsi `i`ye iner (Python'un .lower() tuzağı yok)
    - birleşik aksan işaretleri (U+0300-036F) düşer
    - tipografik kesme (U+2019) düz kesmeye (U+0027) iner
    - çoklu boşluk teke iner
    """
    if not s:
        return ""
    out = []
    for ch in s:
        out.append(_HARF.get(ch, ch))
    t = "".join(out).lower()
    # geriye kalan aksanları ayrıştırıp birleşik işaretleri at
    t = unicodedata.normalize("NFD", t)
    t = "".join(c for c in t if unicodedata.category(c) != "Mn")
    return re.sub(r"\s+", " ", t).strip()


def icerir(metin, anahtar):
    """`anahtar` `metin` içinde geçiyor mu — normalleştirilmiş.

    Kısa anahtarlar (<=4 harf) KELİME SINIRI ister: `ute` anahtarı
    `Tututepec` içinde eşleşmesin diye.
    """
    m, a = nrm(metin), nrm(anahtar)
    if not a:
        return False
    if len(a) <= 4:
        return re.search(r"(?<![a-z0-9])" + re.escape(a) + r"(?![a-z0-9])",
                         m) is not None
    return a in m


if __name__ == "__main__":
    import sys
    sys.stdout.reconfigure(encoding="utf-8", errors="replace")
    print("SINAV — geçme yolu ve ateşleme yolu (C13)")
    sinav = [
        # (metin, anahtar, beklenen)
        ("İnyupiak", "inyupiak", True),          # 🔴 .lower() BUNU KAÇIRIYORDU
        ("İnuit", "inuit", True),
        ("Bakır İnuit", "inuit", True),
        ("İngiltere", "ingiltere", True),
        ("İspanyol Kaliforniyası", "ispanyol", True),
        ("Şoşoni", "sosoni", True),
        ("Doğu Şoşoni", "sosoni", True),
        ("Wiçita", "wicita", True),
        ("Métis", "metis", True),
        ("Secwépemc", "secwepemc", True),
        ("Gwich'in", "gwich'in", True),
        ("Gwich’in", "gwich'in", True),     # tipografik kesme
        ("Tsilhqot'in", "tsilhqot'in", True),
        ("Üsküp", "uskup", True),                # §4'ün asıl vakası
        ("Eğirdir", "egirdir", True),
        # ATEŞLEME: eşleşmemesi GEREKENLER
        ("Tututepec", "ute", False),             # kısa anahtar, kelime sınırı
        ("Amerika", "kri", False),
        ("Kanada", "abd", False),
        ("İnuit", "dene", False),
    ]
    hata = 0
    for metin, anahtar, bekle in sinav:
        var = icerir(metin, anahtar)
        im = "✓" if var == bekle else "🔴 HATA"
        if var != bekle:
            hata += 1
        print("  %-8s %-26s ⊃ %-14s = %-5s (beklenen %s)"
              % (im, metin, anahtar, var, bekle))
    print("\n%s — %d hata" % ("🟢 TEMİZ" if not hata else "🔴 KIRIK", hata))
    sys.exit(1 if hata else 0)
