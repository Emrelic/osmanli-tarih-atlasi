# -*- coding: utf-8 -*-
"""EKO-YENICERI-0073 — bağ doğrulayıcı.

Bir ek okuma dosyasındaki her `olay:` bağının GERÇEK bir kronoloji maddesine
düştüğünü ölçer. `js/app.js`in iki fonksiyonunu birebir taklit eder:

    _ekNorm(s)          — Türkçe eşleme + şapka + kesme işareti atma + lower
    _ekBagEslesir(v,o)  — gün kısmında TAM EŞİTLİK, ayırt edicide ALT DİZİ

🔴 NİÇİN GEREK: bağ tutmazsa kart SESSİZCE görünmez (D045 ailesi) — ne konsol
   hatası ne denetim ihlali çıkar. Tek kanıt bu ölçümdür.
🔴 İKİ YÖNDE SINANIR (CLAUDE.md §11): `--sina` bilerek bozuk iki bağ verir;
   doğrulayıcı onları YAKALAMAZSA kendisi bozuktur.

kullanım:
    py denetim/ARAC-EKO-YENICERI-BAG-0920.py data/ekokuma_yeniceri.js
    py denetim/ARAC-EKO-YENICERI-BAG-0920.py --sina
"""
import glob
import io
import os
import re
import sys
import unicodedata

sys.stdout.reconfigure(encoding="utf-8", errors="replace")

TR = {"İ": "i", "I": "i", "ı": "i", "Ş": "s", "ş": "s", "Ğ": "g", "ğ": "g",
      "Ü": "u", "ü": "u", "Ö": "o", "ö": "o", "Ç": "c", "ç": "c",
      "Â": "a", "â": "a", "Î": "i", "î": "i", "Û": "u", "û": "u"}


def ek_norm(s):
    s = "".join(TR.get(c, c) for c in str(s or ""))
    s = "".join(c for c in unicodedata.normalize("NFD", s)
                if unicodedata.category(c) != "Mn")
    s = s.lower()
    for k in "'‘’`ʼ":
        s = s.replace(k, "")
    return re.sub(r"\s+", " ", s).strip()


def kronoloji_oku():
    """(t, b, dosya) üçlüleri — obje bazlı ayrıştırma (alan sırası değişebilir)."""
    OBJ = re.compile(r"\{[^{}]*\}", re.S)
    T = re.compile(r'(?:^|[\s,{])t\s*:\s*"([0-9][0-9\-]{3,9})"')
    B = re.compile(r'(?:^|[\s,{])b\s*:\s*"((?:\\.|[^"\\])*)"')
    kayit = []
    for f in sorted(glob.glob("data/olaylar*.js")) + sorted(glob.glob("data/kronoloji*.js")):
        s = io.open(f, encoding="utf-8").read()
        for m in OBJ.finditer(s):
            g = m.group(0)
            mt, mb = T.search(g), B.search(g)
            if mt and mb:
                kayit.append((mt.group(1), mb.group(1).replace('\\"', '"'),
                              os.path.basename(f)))
    return kayit


def eslesir(bag, t, b):
    """js/app.js _ekBagEslesir ile AYNI hüküm."""
    s = str(bag)
    i = s.find("|")
    if i < 0:
        return s == t
    if s[:i] != t:            # gün kısmı TAM EŞİTLİK
        return False
    ayirt = ek_norm(s[i + 1:])
    return (not ayirt) or (ayirt in ek_norm(b))


def turler_oku():
    s = io.open("js/app.js", encoding="utf-8").read()
    i = s.find("var EKOKUMA_TUR = {")
    j = s.find("\n};", i)
    return set(re.findall(r'^\s*"([a-z0-9\-]+)"\s*:', s[i:j], re.M))


def bagalari_oku(dosya):
    """(kart_id, tur, bag) üçlüleri."""
    s = io.open(dosya, encoding="utf-8").read()
    cikti = []
    for p in re.split(r"\n\s*(?=\{\s*id\s*:)", s):
        mi = re.search(r'\bid\s*:\s*"([^"]+)"', p)
        if not mi:
            continue
        mt = re.search(r'\btur\s*:\s*"([^"]+)"', p)
        mo = re.search(r"\b(?:olay|baglanti)\s*:\s*\[([^\]]*)\]", p)
        baglar = re.findall(r'"((?:\\.|[^"\\])*)"', mo.group(1)) if mo else []
        cikti.append((mi.group(1), mt.group(1) if mt else "", baglar))
    return cikti


def olc(dosya, kayit, turler, sessiz=False):
    kartlar = bagalari_oku(dosya)
    kayip, tanimsiz = [], []
    toplam_bag = 0
    for kid, tur, baglar in kartlar:
        if tur and tur not in turler:
            tanimsiz.append((kid, tur))
        for bag in baglar:
            toplam_bag += 1
            vurus = [(t, b, f) for (t, b, f) in kayit if eslesir(bag, t, b)]
            if not vurus:
                kayip.append((kid, bag))
            elif not sessiz:
                print("  ✓ %-34s %-34s → %s" % (kid, bag, vurus[0][1][:58]))
    return kartlar, toplam_bag, kayip, tanimsiz


def sina(kayit, turler):
    """İKİ YÖNLÜ SINAV — doğrulayıcı bozuğu yakalıyor mu?"""
    dogru = ("1826-06|Hayriyye", True)        # gerçek madde (AY hassasiyetli)
    yanlis = [("1826-06-15|Hayriyye", False),  # gün TAM EŞİT değil → tutmamalı
              ("1826-06|Nusretiye", False)]    # ayırt edici gövdede yok
    gecti = True
    for bag, beklenen in [dogru] + yanlis:
        var = any(eslesir(bag, t, b) for (t, b, f) in kayit)
        ok = (var == beklenen)
        gecti = gecti and ok
        print("  %s  %-28s bekleniyor=%s ölçülen=%s"
              % ("✓" if ok else "🔴", bag, beklenen, var))
    # normalleştirici: Türkçe büyük İ
    n = ek_norm("İSYAN") == "isyan"
    print("  %s  _ekNorm('İSYAN') == 'isyan' → %s" % ("✓" if n else "🔴", n))
    print("SINAV: %s" % ("GEÇTİ" if (gecti and n) else "🔴 KALDI"))
    return gecti and n


if __name__ == "__main__":
    kayit = kronoloji_oku()
    turler = turler_oku()
    print("kronoloji maddesi: %d · EKOKUMA_TUR kayıtlı tür: %d"
          % (len(kayit), len(turler)))
    if "--sina" in sys.argv:
        sys.exit(0 if sina(kayit, turler) else 1)
    hedefler = [a for a in sys.argv[1:] if not a.startswith("--")]
    if not hedefler:
        hedefler = ["data/ekokuma_yeniceri.js"]
    kod = 0
    for d in hedefler:
        print("\n=== %s" % d)
        kartlar, toplam, kayip, tanimsiz = olc(d, kayit, turler)
        print("kart: %d · bağ: %d · BULUNAMAYAN BAĞ: %d · TANIMSIZ TÜR: %d"
              % (len(kartlar), toplam, len(kayip), len(tanimsiz)))
        for kid, bag in kayip:
            print("  🔴 KAYIP BAĞ  %-34s %s" % (kid, bag))
            kod = 1
        for kid, tur in tanimsiz:
            print("  🔴 TANIMSIZ TÜR  %-34s %s" % (kid, tur))
            kod = 1
    sys.exit(kod)
