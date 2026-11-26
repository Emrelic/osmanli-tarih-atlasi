# -*- coding: utf-8 -*-
"""ORTAK NORMALLESTIRICI — ve niçin gerekli olduğunun ÖLÇÜMÜ.

🔴 TUZAK (DUNYA-KAMERIKA-0903 ölçtü, 3 Eylül 2026):
   "İ".lower() Python'da 'i' + U+0307 (BIRLESIK NOKTA) verir — IKI kod
   noktasi. Yani "İnyupiak".lower() icinde "inyupiak" YOKTUR.
   Dizgi UZAR (len 5 -> 6). Alet OTMEZ, hata VERMEZ, sessizce KACIRIR.
   ⚠️ casefold() DE COZMEZ — ayni sonucu verir.

📌 CLAUDE.md §4'un "Turkce yazim ekseni" dersinin KOD yuzu: orada
   `usku` aramasi `Üsküp`u bulamiyordu (insan yazimi), burada
   Python'un KENDI lower()'i kaciriyor (kod davranisi).
"""
import unicodedata as _u

# Turkce ozel esleme — lower() cagrilmadan ONCE
_ESLEME = str.maketrans({
    "İ": "i", "I": "i", "ı": "i",
    "Ş": "s", "ş": "s", "Ğ": "g", "ğ": "g",
    "Ü": "u", "ü": "u", "Ö": "o", "ö": "o", "Ç": "c", "ç": "c",
    "Â": "a", "â": "a", "Î": "i", "î": "i", "Û": "u", "û": "u",
    "’": "'", "‘": "'", "”": '"', "“": '"', "–": "-", "—": "-",
})


def norm(s):
    """Ad karsilastirmasi icin TEK normallestirici."""
    if not s:
        return ""
    s = s.translate(_ESLEME)
    s = _u.normalize("NFKD", s)
    s = "".join(c for c in s if not _u.combining(c))
    return s.lower().strip()


if __name__ == "__main__":
    import sys, io
    sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8",
                                  errors="replace")
    print("SINAV — her satirda: HAM · lower() · norm()")
    print()
    ornek = ["İnyupiak", "Üsküp", "Eğirdir", "Iğdır", "İstanbul",
             "Diyarbekir", "Şanlıurfa", "Çanakkale", "Karahisâr-ı Sâhib"]
    for s in ornek:
        l = s.lower()
        print("  %-20s lower=%-22r norm=%r" % (s, l, norm(s)))
    print()
    print("ARAMA SINAVI — 'usku' · 'inyupiak' · 'egirdir' aranıyor")
    for hedef, ad in [("inyupiak", "İnyupiak"), ("usku", "Üsküp"),
                      ("egirdir", "Eğirdir"), ("igdir", "Iğdır"),
                      ("diyarbakir", "Diyarbekir")]:
        print("  %-12s in %-14s  lower:%-6s  norm:%s"
              % (hedef, ad, hedef in ad.lower(), hedef in norm(ad)))
    print()
    print("🔴 `Diyarbekir` ↔ `diyarbakir` NORM ile de EŞLEŞMEZ — o bir")
    print("   YAZIM VARYANTI değil AYRI BİR AD. Normallestirici onu")
    print("   çözmez; `data/ad_esanlam.js` gibi bir SÖZLÜK çözer.")
    print("   (CLAUDE.md §4: 'Budin ↔ Buda aynı dizginin varyantı DEĞİL')")
