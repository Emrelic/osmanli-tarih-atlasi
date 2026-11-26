# -*- coding: utf-8 -*-
"""BUDAMA-0907 · Ⓒ HANGİ DERS ATIF ALIYOR

🔴🔴 BU ALET NE ÖLÇER, NE ÖLÇMEZ — önce bu okunur (`§11`: "bir denetim
şartnamesinin en değerli satırı ne ölçtüğü değil NE ÖLÇMEDİĞİDİR"):

    ÖLÇER   bir dersin metni, CLAUDE.md DIŞINDA bir yerde ALINTILANMIŞ mı?
            (n-gram örtüşmesi) ve bir bölüm `§N` diye ANILMIŞ mı?
    ÖLÇMEZ  bir dersin UYGULANIP uygulanmadığını. Bir ders alıntılanmadan
            da uygulanabilir — hatta çoğu öyle uygulanır.
    ⇒ "atıf bulunamadı" = «kullanılmıyor» DEĞİL. En fazla
      «yazıya dökülmüş bir izi yok» demektir.

YÖNTEM
  ① korpus: oturumlar/tahta.json (mesaj gövdeleri) · denetim/*.md ·
     oturumlar/*.md · arac/*.py (ayrı kova) — CLAUDE.md ve BUDAMA'nın
     kendi dosyaları HARİÇ (`§11`: alet aradığı şeyin NEREDE OLMAYACAĞINI
     da bilmeli — dersin kendi metnini atıf sayma).
  ② normalleştirme: Türkçe harf indirgeme + noktalama/emoji atma
     (`denetim/ARAC-NORMAL-0903.py` ile aynı ilke; `"İ".lower()` tuzağı).
  ③ N kelimelik pencere (shingle) karşılaştırması. N duyarlılığı ölçülür.

`§11`: eşleşme bulmak, doğru şeyi bulmak değildir ⇒ her ders için
eşleşen pencerelerin sayısı VE hangi dosyada bulunduğu yazılır.
"""
import os
import re
import sys
import json
import glob
import unicodedata
from collections import defaultdict

try:
    sys.stdout.reconfigure(encoding="utf-8", errors="replace")
except Exception:
    pass

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
N = 7                      # pencere boyu (kelime)
N_DUYARLILIK = (5, 7, 9)   # duyarlılık taraması

CEV = str.maketrans({
    "İ": "i", "I": "i", "ı": "i", "Ş": "s", "ş": "s", "Ğ": "g", "ğ": "g",
    "Ü": "u", "ü": "u", "Ö": "o", "ö": "o", "Ç": "c", "ç": "c",
    "Â": "a", "â": "a", "Î": "i", "î": "i", "Û": "u", "û": "u",
    "’": "'", "‘": "'", "”": '"', "“": '"', "–": "-", "—": "-",
})


def normal(s):
    s = s.translate(CEV)
    s = unicodedata.normalize("NFKD", s)
    s = "".join(c for c in s if not unicodedata.combining(c))
    s = s.lower()
    s = re.sub(r"[^a-z0-9]+", " ", s)
    return s.split()


def pencereler(kelimeler, n):
    return {" ".join(kelimeler[i:i + n]) for i in range(len(kelimeler) - n + 1)}


def korpus_topla():
    """(etiket, dosya, metin) uretir. CLAUDE.md ve BUDAMA dosyalari HARIC."""
    at = []
    # ① tahta
    yol = os.path.join(KOK, "oturumlar", "tahta.json")
    if os.path.exists(yol):
        veri = json.load(open(yol, encoding="utf-8"))
        kayitlar = veri if isinstance(veri, list) else veri.get("mesajlar", veri)
        if isinstance(kayitlar, dict):
            kayitlar = list(kayitlar.values())
        n = 0
        for k in kayitlar:
            if not isinstance(k, dict):
                continue
            govde = " ".join(str(k.get(a, "")) for a in
                             ("mesaj", "icerik", "metin", "govde", "text"))
            if govde.strip():
                at.append(("tahta", "tahta.json#%s" % k.get("no", n), govde))
                n += 1
    # ② denetim/ ③ oturumlar/ ④ arac/
    for etiket, desen in (("denetim", "denetim/**/*.md"),
                          ("oturumlar", "oturumlar/**/*.md"),
                          ("arac", "arac/**/*.py")):
        for p in glob.glob(os.path.join(KOK, desen), recursive=True):
            ad = os.path.relpath(p, KOK).replace("\\", "/")
            if "BUDAMA" in ad:
                continue
            try:
                at.append((etiket, ad,
                           open(p, "rb").read().decode("utf-8", "replace")))
            except Exception:
                pass
    return at


def main():
    bol = json.load(open(os.path.join(KOK, "denetim", "_budama_bolum.json"),
                         encoding="utf-8"))
    dersler = bol["dersler"]
    korpus = korpus_topla()
    print("KORPUS")
    say = defaultdict(int)
    kar = defaultdict(int)
    for e, ad, m in korpus:
        say[e] += 1
        kar[e] += len(m)
    for e in ("tahta", "denetim", "oturumlar", "arac"):
        print("  %-10s %5d parça · %9d karakter" % (e, say[e], kar[e]))
    print("  %-10s %5d parça · %9d karakter" % (
        "TOPLAM", sum(say.values()), sum(kar.values())))
    print()

    # ---- BÖLÜM DÜZEYİ: `§N` atıfları ----
    print("BÖLÜM DÜZEYİ — `§N` biçimindeki atıflar (korpusta, CLAUDE.md hariç)")
    ham = "\n".join(m for _, _, m in korpus)
    bolum_say = defaultdict(int)
    for m in re.finditer(r"§\s?(\d+(?:\.\d+)?)", ham):
        bolum_say[m.group(1)] += 1
    for k, v in sorted(bolum_say.items(), key=lambda x: -x[1])[:16]:
        print("   §%-6s %6d" % (k, v))
    print()

    # ---- DERS DÜZEYİ ----
    print("DERS DÜZEYİ — n=%d kelimelik pencere örtüşmesi" % N)
    kp = defaultdict(set)          # pencere -> {dosya}
    for e, ad, m in korpus:
        for p in pencereler(normal(m), N):
            if len(kp[p]) < 4:
                kp[p].add("%s:%s" % (e, ad))
            else:
                kp[p].add("")      # 4'ten fazlasını saymayı bırak
    print("  korpus penceresi: %d benzersiz" % len(kp))

    sonuc = []
    for d in dersler:
        pen = pencereler(normal(d["metin"]), N)
        vurus = [p for p in pen if p in kp]
        kaynak = set()
        for p in vurus[:400]:
            kaynak |= {x for x in kp[p] if x}
        sonuc.append({
            "bas": d["bas"], "token": d["token"], "satir": d["satir"],
            "etiket": d["etiket"], "pencere": len(pen), "vurus": len(vurus),
            "oran": (len(vurus) / len(pen)) if pen else 0.0,
            "kaynak": sorted(kaynak)[:5],
        })

    hic = [s for s in sonuc if s["vurus"] == 0]
    az = [s for s in sonuc if 0 < s["vurus"] <= 2]
    print()
    print("  ders sayısı                     : %d" % len(sonuc))
    print("  HİÇ eşleşen penceresi olmayan   : %d  (%d token, §11'in %%%.1f'i)" % (
        len(hic), sum(s["token"] for s in hic),
        100.0 * sum(s["token"] for s in hic) / sum(s["token"] for s in sonuc)))
    print("  1-2 pencere eşleşen (zayıf iz)  : %d  (%d token)" % (
        len(az), sum(s["token"] for s in az)))
    print("  3+ pencere eşleşen (açık atıf)  : %d  (%d token)" % (
        len(sonuc) - len(hic) - len(az),
        sum(s["token"] for s in sonuc if s["vurus"] > 2)))

    print()
    print("  EN ÇOK ALINTILANAN 12 DERS")
    for s in sorted(sonuc, key=lambda x: -x["vurus"])[:12]:
        print("   %5d vuruş/%4d pencere (%%%2.0f)  s%-5d %s" % (
            s["vurus"], s["pencere"], 100 * s["oran"], s["bas"], s["etiket"][:60]))
        print("        kaynak: %s" % ", ".join(k[:56] for k in s["kaynak"][:3]))

    print()
    print("  HİÇ İZİ OLMAYAN DERSLERİN EN UZUN 15'İ")
    for s in sorted(hic, key=lambda x: -x["token"])[:15]:
        print("   %5d tok  s%-5d %s" % (s["token"], s["bas"], s["etiket"][:70]))

    # ---- duyarlılık ----
    print()
    print("DUYARLILIK — pencere boyu değişince «izsiz ders» sayısı")
    for n in N_DUYARLILIK:
        kp2 = set()
        for _, _, m in korpus:
            kp2 |= pencereler(normal(m), n)
        izsiz = 0
        for d in dersler:
            pen = pencereler(normal(d["metin"]), n)
            if not (pen & kp2):
                izsiz += 1
        print("   n=%-2d  izsiz ders: %3d / %d" % (n, izsiz, len(dersler)))

    with open(os.path.join(KOK, "denetim", "_budama_atif.json"), "w",
              encoding="utf-8") as f:
        json.dump({"n": N, "bolum_atif": dict(bolum_say), "dersler": sonuc},
                  f, ensure_ascii=False, indent=1)
    print()
    print("yazıldı: denetim/_budama_atif.json")
    return 0


if __name__ == "__main__":
    sys.exit(main())
