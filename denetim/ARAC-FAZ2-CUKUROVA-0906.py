# -*- coding: utf-8 -*-
"""FAZ 2 ③④ — Çukurova + Güneydoğu'nun BUGÜNKÜ hâli.

🔴 VERİ YAZMAZ. Yalnız okur ve basar.
🔴 Ad araması NORMALLEŞTİRİCİ ile (§4 Türkçe yazım ekseni:
   "Afyon" ≠ "Karahisâr-ı Sâhib (Afyon)" tuzağı bu gece dokuzuncu kez
   çıktı). Ad TAM eşleşmezse İÇEREN adları da basar.
"""
import io
import os
import sys
import unicodedata

KOK = r"C:\Users\emrem\OneDrive\Desktop\TARİH COĞRAFYA SİTESİ"
sys.path.insert(0, os.path.join(KOK, "arac"))
os.chdir(KOK)
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8")
import girdi  # noqa: E402

CEV = {"İ": "i", "I": "i", "ı": "i", "Ş": "s", "ş": "s", "Ğ": "g",
       "ğ": "g", "Ü": "u", "ü": "u", "Ö": "o", "ö": "o", "Ç": "c",
       "ç": "c", "Â": "a", "â": "a", "Î": "i", "î": "i", "Û": "u",
       "û": "u", "’": "'", "‘": "'"}


def norm(s):
    s = "".join(CEV.get(c, c) for c in s)
    s = unicodedata.normalize("NFKD", s)
    s = "".join(c for c in s if not unicodedata.combining(c))
    return s.lower()


CUKUROVA = ["Adana", "Mersin", "Tarsus", "Osmaniye", "Ceyhan", "Dörtyol",
            "Payas", "Erzin", "Yumurtalık", "Kozan", "Silifke"]
GUNEYDOGU = ["Antep", "Maraş", "Urfa", "Kilis", "Suruç", "Akçakale",
             "Ceylanpınar", "Nusaybin", "Silopi", "Birecik", "Mardin"]

Y = girdi.yukle(sessiz=True)
ix = {}
for z in Y:
    ix.setdefault(norm(z["ad"]), []).append(z)


def bul(ad):
    n = norm(ad)
    if n in ix:
        return ix[n]
    return [z for k, v in ix.items() if n in k for z in v]


def don(z, kat):
    return [(p.get("f"), p.get("t"), p.get("d")) for p in (z.get(kat) or [])]


def pencerede(p):
    return p[0] and "1914" <= p[0][:4] <= "1923"


for baslik, kume in (("③ ÇUKUROVA", CUKUROVA), ("④ GÜNEYDOĞU", GUNEYDOGU)):
    print("\n═══════ %s" % baslik)
    for ad in kume:
        z = bul(ad)
        if not z:
            print("   🔴 %-14s ATLASTA YOK" % ad)
            continue
        for k in z:
            isg = don(k, "isg")
            pen = [p for kat in ("d", "s", "isg") for p in don(k, kat)
                   if pencerede(p)]
            son_d = don(k, "d")[-1] if k.get("d") else None
            print("   %-26s d.son:%-24s isg:%-2d  1914+:%s"
                  % (k["ad"][:26],
                     ("%s→%s" % (son_d[0], son_d[1])) if son_d else "—",
                     len(isg),
                     " ".join("%s→%s:%s" % p for p in pen) or "YOK"))

print("\n═══ ÖZET")
tum = [z for ad in CUKUROVA + GUNEYDOGU for z in bul(ad)]
tum = {z["ad"]: z for z in tum}
print("   bulunan kayıt        : %d" % len(tum))
print("   `isg:` taşıyan       : %d" % sum(1 for z in tum.values()
                                           if z.get("isg")))
print("   1914+ kırılması olan : %d"
      % sum(1 for z in tum.values()
            if any(pencerede(p) for kat in ("d", "s", "isg")
                   for p in don(z, kat))))
