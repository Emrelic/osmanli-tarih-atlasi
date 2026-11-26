# -*- coding: utf-8 -*-
"""BUDAMA-0907 · Ⓑ BOLUM BOLUM DAGILIM

CLAUDE.md'yi iki kademede ayirir:
  ① `^## ` basliklari      -> ana bolumler (§1 … §11)
  ② her bolumun icindeki
     SUTUN 0'daki `- ` ile baslayan bloklar  -> DERS BLOKLARI

🔴 Blok siniri neden `^- `: `§11` duz bir madde listesidir; her ders
   sutun 0'da bir `- ` ile baslar ve bir sonraki `- `ye (ya da bolum
   sonuna) kadar surer. Girintili `- ` (alt madde) blok BASLATMAZ --
   bunu ayirt etmemek dersleri paramparca sayardi.

Cikti: denetim/_budama_bolum.json  (Ⓒ ve Ⓓ bunu okur)
"""
import os
import re
import sys
import json

try:
    sys.stdout.reconfigure(encoding="utf-8", errors="replace")
except Exception:
    pass

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
HEDEF = os.path.join(KOK, "CLAUDE.md")

import tiktoken
ENC = tiktoken.get_encoding("o200k_base")


def tok(s):
    return len(ENC.encode(s))


def bolumlere_ayir(satirlar):
    """`^## ` basliklarina gore boler. Ilk baslik oncesi = ONSOZ."""
    bol = []
    su = {"baslik": "ÖNSÖZ", "bas": 1, "satirlar": []}
    for i, s in enumerate(satirlar, 1):
        if s.startswith("## "):
            if su["satirlar"]:
                bol.append(su)
            su = {"baslik": s[3:].strip(), "bas": i, "satirlar": []}
        su["satirlar"].append(s)
    if su["satirlar"]:
        bol.append(su)
    return bol


def ders_bloklari(satirlar, ofset):
    """Sutun 0'daki `- ` ile baslayan bloklar. Girintili olanlar DEGIL."""
    bloklar = []
    su = None
    for i, s in enumerate(satirlar):
        if re.match(r"^- \S", s):
            if su:
                bloklar.append(su)
            su = {"bas": ofset + i, "satirlar": [s]}
        elif su is not None:
            su["satirlar"].append(s)
    if su:
        bloklar.append(su)
    return bloklar


def basligi_kisalt(blok):
    """Bir ders blogunun ilk anlamli satirini kisa bir etikete cevirir."""
    s = blok["satirlar"][0]
    s = s[2:]
    s = re.sub(r"[*`]", "", s)
    s = re.sub(r"\s+", " ", s).strip()
    return s[:96]


def main():
    ham = open(HEDEF, "rb").read().decode("utf-8")
    satirlar = ham.split("\n")
    top_tok = tok(ham)
    print("CLAUDE.md  %d satır · %d karakter · %d token (o200k 🟡 PROXY)" % (
        len(satirlar), len(ham), top_tok))
    print()

    bolumler = bolumlere_ayir(satirlar)
    bas = "%-46s %7s %8s %9s %7s"
    print(bas % ("bölüm", "satır", "karakter", "token", "pay"))
    print("-" * 82)
    kayit = []
    for b in bolumler:
        metin = "\n".join(b["satirlar"])
        t = tok(metin)
        print(bas % (b["baslik"][:46], len(b["satirlar"]), len(metin), t,
                     "%.1f%%" % (100.0 * t / top_tok)))
        kayit.append({"baslik": b["baslik"], "bas_satir": b["bas"],
                      "satir": len(b["satirlar"]), "karakter": len(metin),
                      "token": t})
    print("-" * 82)
    print(bas % ("TOPLAM", len(satirlar), len(ham), top_tok, "100%"))

    # ---- §11 ders bloklari ----
    on_bir = None
    for b in bolumler:
        if b["baslik"].startswith("11."):
            on_bir = b
    if on_bir is None:
        print("\n🔴 §11 bulunamadı — başlık kalıbı değişmiş olabilir")
        return 1

    print()
    print("§11 = «%s» · %d. satırda başlıyor" % (on_bir["baslik"], on_bir["bas"]))
    bloklar = ders_bloklari(on_bir["satirlar"], on_bir["bas"])
    tl = []
    for bl in bloklar:
        metin = "\n".join(bl["satirlar"])
        bl["token"] = tok(metin)
        bl["karakter"] = len(metin)
        bl["satir"] = len(bl["satirlar"])
        bl["etiket"] = basligi_kisalt(bl)
        tl.append(bl["token"])
    tl_s = sorted(tl)
    n = len(tl_s)
    print("  ders bloğu sayısı : %d" % n)
    print("  toplam token      : %d  (§11'in %.1f%%'i)" % (
        sum(tl), 100.0 * sum(tl) / on_bir_token(on_bir)))
    print("  en uzun           : %d token" % tl_s[-1])
    print("  ortanca           : %d token" % tl_s[n // 2])
    print("  en kısa           : %d token" % tl_s[0])
    print("  ortalama          : %d token" % (sum(tl) // n))
    print()
    print("  EN UZUN 15 DERS")
    for bl in sorted(bloklar, key=lambda x: -x["token"])[:15]:
        print("   %6d tok  %4d satır  s%-5d %s" % (
            bl["token"], bl["satir"], bl["bas"], bl["etiket"]))

    with open(os.path.join(KOK, "denetim", "_budama_bolum.json"), "w",
              encoding="utf-8") as f:
        json.dump({"toplam_token": top_tok, "bolumler": kayit,
                   "s11_bas": on_bir["bas"],
                   "dersler": [{"bas": b["bas"], "satir": b["satir"],
                                "token": b["token"], "karakter": b["karakter"],
                                "etiket": b["etiket"],
                                "metin": "\n".join(b["satirlar"])}
                               for b in bloklar]},
                  f, ensure_ascii=False)
    print()
    print("yazıldı: denetim/_budama_bolum.json")
    return 0


def on_bir_token(b):
    return tok("\n".join(b["satirlar"]))


if __name__ == "__main__":
    sys.exit(main())
