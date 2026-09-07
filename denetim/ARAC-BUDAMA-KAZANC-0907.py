# -*- coding: utf-8 -*-
"""BUDAMA-0907 · ÖNERİNİN KAZANCI — tahmin değil, ÖLÇÜM

Ⓒ ölçüldü ve KOORDİNATÖRÜN HİPOTEZİ ÇÜRÜDÜ: 178 dersin 163'ü korpusta
alıntılanıyor; hiç izi olmayan 9 ders yalnız 2.615 token (§11'in %2,5'i).
⇒ «kullanılmayanı ayır» ölçütü ile budama YAPILAMAZ.

Kalan tek ölçüt: her dersin KURALI ile VAKASINI ayırmak.
Bu alet o ayrımın kazancını ÖLÇER — üç kademede:

    Ⓞ  BUGÜN            dersin tamamı
    Ⓚ1 yalnız MANŞET    ilk satır + `→ dersler/<slug>.md` bağlantısı
    Ⓚ2 MANŞET + ÖZ      ek olarak dersin `📌` / `⇒` / `🟢 KURAL` satırları
                        (bu satırlar dersin damıtılmış hükmünü taşır)

🔴 HİÇBİR DERS SİLİNMEZ — Ⓚ1/Ⓚ2 CLAUDE.md'de KALAN kısımdır; gerisi
`dersler/` altına İNER ve bağlantısı durur. `§11`: "bir vakayı SİLMEK
dersi de siler; DAMGALAMAK dersi korur."
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
import tiktoken
ENC = tiktoken.get_encoding("o200k_base")
tok = lambda s: len(ENC.encode(s))

OZ_DESEN = re.compile(r"^\s*(📌|⇒|🟢\s*\*?\*?KURAL|🔴\s*\*?\*?KURAL|🟢\s*\*?\*?HÜKÜM)")


def slug(etiket):
    s = etiket.lower()
    s = s.translate(str.maketrans("ıİşŞğĞüÜöÖçÇâîû", "iissgguuooccaiu"))
    s = re.sub(r"[^a-z0-9]+", "-", s).strip("-")
    return "-".join(s.split("-")[:6])[:48] or "ders"


def main():
    bol = json.load(open(os.path.join(KOK, "denetim", "_budama_bolum.json"),
                         encoding="utf-8"))
    dersler = bol["dersler"]
    top = bol["toplam_token"]

    o = k1 = k2 = 0
    oz_var = 0
    kayit = []
    for d in dersler:
        satirlar = d["metin"].split("\n")
        manset = satirlar[0]
        sl = slug(d["etiket"])
        bag = "%s  → `dersler/%s.md`" % (manset, sl)
        oz = [s for s in satirlar[1:] if OZ_DESEN.match(s)]
        if oz:
            oz_var += 1
        t0, t1 = d["token"], tok(bag)
        t2 = tok(bag + "\n" + "\n".join(oz))
        o += t0
        k1 += t1
        k2 += t2
        kayit.append({"bas": d["bas"], "slug": sl, "tam": t0,
                      "manset": t1, "manset_oz": t2, "oz_satir": len(oz)})

    print("KAZANÇ ÖLÇÜMÜ — 178 ders, o200k 🟡 PROXY")
    print()
    print("  %-34s %9s %9s" % ("kademe", "token", "CLAUDE.md payı"))
    print("  " + "-" * 56)
    print("  %-34s %9d %9s" % ("Ⓞ bugün — §11'in tamamı", o,
                               "%.1f%%" % (100.0 * o / top)))
    print("  %-34s %9d %9s" % ("Ⓚ1 yalnız manşet + bağlantı", k1,
                               "%.1f%%" % (100.0 * k1 / top)))
    print("  %-34s %9d %9s" % ("Ⓚ2 manşet + 📌/⇒/KURAL satırları", k2,
                               "%.1f%%" % (100.0 * k2 / top)))
    print()
    print("  KAZANÇ  Ⓞ→Ⓚ1 : %6d token  (%%%.1f)" % (o - k1, 100.0 * (o - k1) / o))
    print("  KAZANÇ  Ⓞ→Ⓚ2 : %6d token  (%%%.1f)" % (o - k2, 100.0 * (o - k2) / o))
    print()
    print("  CLAUDE.md bugün      : %6d token" % top)
    print("  Ⓚ1 uygulanırsa       : %6d token   (%%%.0f'e iner)" % (
        top - o + k1, 100.0 * (top - o + k1) / top))
    print("  Ⓚ2 uygulanırsa       : %6d token   (%%%.0f'e iner)" % (
        top - o + k2, 100.0 * (top - o + k2) / top))
    print()
    print("  📌/⇒/KURAL satırı taşıyan ders: %d / %d (%%%.0f)" % (
        oz_var, len(dersler), 100.0 * oz_var / len(dersler)))
    print("  ortalama ders: tam %d tok · manşet %d tok · manşet+öz %d tok" % (
        o // len(dersler), k1 // len(dersler), k2 // len(dersler)))

    with open(os.path.join(KOK, "denetim", "_budama_kazanc.json"), "w",
              encoding="utf-8") as f:
        json.dump({"toplam": top, "s11_tam": o, "k1": k1, "k2": k2,
                   "dersler": kayit}, f, ensure_ascii=False, indent=1)
    print()
    print("yazıldı: denetim/_budama_kazanc.json")
    return 0


if __name__ == "__main__":
    sys.exit(main())
