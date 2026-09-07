# -*- coding: utf-8 -*-
"""ÜÇ KÜNYE — taban ölçümü · SINIR-KAFRIKA-0907

🔴 `id` TAHMİN EDİLMEZ, `devletler.js` TARANIR. Bu gece
   `ingiliz-hindistani` (sondaki tek harf) bu depoda bir hükmü çürüttü.
   Arama Türkçe NORMALLEŞTİRİCİ ile yapılır — `"İ".lower()` iki kod
   noktası verir ve sessizce kaçırır.

Ne ölçer:
  ① akraba künyeler (arama, tahmin değil)
  ② künye ŞEMASININ gerçek alan kümesi — emsalden
  ③ yamaların o üç kimlikle yazdığı DÖNEM SINIRLARI (pencere buradan)
  ④ `kolhapur` yamalarda geçiyor mu
"""
import io
import json
import os
import re
import sys
import unicodedata

sys.stdout.reconfigure(encoding="utf-8", errors="replace")

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(KOK, "arac"))
import girdi  # noqa: E402

TR = {ord(a): b for a, b in zip("İIıŞşĞğÜüÖöÇçÂâÎîÛû’‘", "iiissgguuooccaaiiuu''")}


def norm(s):
    s = (s or "").translate(TR)
    s = unicodedata.normalize("NFKD", s)
    s = "".join(c for c in s if not unicodedata.combining(c))
    return s.lower()


HEDEF = ["gvalyar-sindiya", "indor-holkar", "meysur-racaligi"]
ARA = ["meysur", "maratha", "haydarabad", "nizam", "gvalyar", "gwalior",
       "indor", "indore", "sindiya", "scindia", "holkar", "kolhapur",
       "hindistan", "racput", "prenslik", "baroda", "gaekwad"]


def main():
    D = girdi.oku_devletler()
    print("künye toplam: %d" % len(D))
    print("")
    print("=" * 78)
    print("① AKRABA KÜNYELER — TARANDI (tahmin edilmedi)")
    print("=" * 78)
    bulunan = {}
    for d in D:
        n = norm(str(d.get("id", "")) + " " + str(d.get("ad", "")))
        for a in ARA:
            if norm(a) in n:
                bulunan.setdefault(d["id"], d)
                break
    for k in sorted(bulunan):
        d = bulunan[k]
        print("   %-26s %-46s %s -> %s"
              % (d["id"], str(d.get("ad"))[:46], d.get("f"), d.get("t")))
    print("")
    print("   HEDEF id'ler künyede VAR MI:")
    idler = set(d["id"] for d in D)
    for h in HEDEF:
        print("      %-22s %s" % (h, "🔴 VAR (beklenmedik!)" if h in idler
                                  else "🟢 YOK — açılacak"))

    print("")
    print("=" * 78)
    print("② KÜNYE ŞEMASI — emsalden (haydarabad-nizam)")
    print("=" * 78)
    emsal = None
    for d in D:
        if d["id"] == "haydarabad-nizam":
            emsal = d
    if emsal:
        for k in sorted(emsal.keys()):
            v = emsal[k]
            print("   %-12s %s" % (k, str(v)[:300]))
    else:
        print("   🔴 `haydarabad-nizam` BULUNAMADI — emsal başka yerden alınacak")
    # butun kunyelerde hangi alanlar var
    alan = {}
    for d in D:
        for k in d:
            alan[k] = alan.get(k, 0) + 1
    print("")
    print("   ALAN DOLULUĞU (627 künyede):")
    for k, v in sorted(alan.items(), key=lambda x: -x[1]):
        print("      %-12s %d" % (k, v))

    print("")
    print("=" * 78)
    print("③ YAMALARIN KULLANDIĞI DÖNEM SINIRLARI — pencere BURADAN türetilir")
    print("=" * 78)
    olcum = json.load(io.open(os.path.join(KOK, "denetim",
                      "OLCUM-SINIR-KAFRIKA-RENKSIZ-0907.json"),
                      encoding="utf-8"))
    dosya_of = {k["kimlik"]: k["dosya"] for k in olcum["renksiz"]}
    pencere = {}
    for kim in HEDEF:
        f_min, t_max, ornek = None, None, []
        for d in dosya_of.get(kim, []):
            yol = os.path.join(KOK, d)
            if not os.path.exists(yol):
                continue
            s = io.open(yol, encoding="utf-8", errors="replace").read()
            s = re.sub(r"//[^\n]*", " ", s)
            for m in re.finditer(
                    r'\{[^{}]*"?f"?\s*:\s*"(\d{4}-\d{2}-\d{2})"[^{}]*'
                    r'"?t"?\s*:\s*"(\d{4}-\d{2}-\d{2})"[^{}]*\}', s):
                if ('"%s"' % kim) not in m.group(0):
                    continue
                f, t = m.group(1), m.group(2)
                f_min = f if f_min is None or f < f_min else f_min
                t_max = t if t_max is None or t > t_max else t_max
                if len(ornek) < 4:
                    ornek.append((f, t))
        pencere[kim] = (f_min, t_max)
        print("   %-22s f_min=%-12s t_max=%-12s  ornek %s"
              % (kim, str(f_min), str(t_max), ornek[:3]))
        if f_min is None:
            print("      ⚠️ DÖNEM SINIRI ÇIKARILAMADI — regex tutmadı, "
                  "ham dosya elle okunacak")

    print("")
    print("=" * 78)
    print("④ `kolhapur` YAMALARDA GEÇİYOR MU")
    print("=" * 78)
    gecis = []
    for kok, alt in (("data", None), ("denetim", None)):
        dizin = os.path.join(KOK, kok)
        for f in os.listdir(dizin):
            if not (f.endswith(".js") or f.endswith(".json")):
                continue
            try:
                s = io.open(os.path.join(dizin, f), encoding="utf-8",
                            errors="replace").read()
            except Exception:
                continue
            if "kolhapur" in norm(s):
                gecis.append("%s/%s" % (kok, f))
    print("   geçtiği dosya: %d  %s" % (len(gecis), gecis[:6]))
    if not gecis:
        print("   🟢 HİÇ GEÇMİYOR ⇒ künye açmak gereksiz (sevk: 'zorlamana "
              "gerek yok')")
    return 0


if __name__ == "__main__":
    sys.exit(main())
