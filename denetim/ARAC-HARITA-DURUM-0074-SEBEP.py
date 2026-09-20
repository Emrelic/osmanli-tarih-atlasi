# -*- coding: utf-8 -*-
"""H-0008 SEBEP TESTI — cifte iddia KAYITTA mi, GOVDE URETIMINDE mi?

Sinav: bir gun icin, AYNI yerlesim noktasinda ayni anda gecerli BIRDEN COK
sahiplik donemi (d:/v:/s:) var mi? Varsa o noktanin petegi iki govdeye birden
girer ve cakisma KAYITTANDIR. Yoksa cakisma GOVDE URETIMINDEDIR.

Ongoru (olcumden once): Afrika/Amerika ciftlerinin buyuk kismi KAYITTAN
gelir — yerli yapi (ör. kri) ile somurge kimligi (ör. ingiliz-kuzey-amerika)
ayni noktaya ayni yillar icin yazilmistir.

Kullanim: py denetim/ARAC-HARITA-DURUM-0074-SEBEP.py [gun ...]
Cikti: denetim/HARITA-DURUM-0074-SEBEP.json
"""
import sys, os, io, json
KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(KOK, "arac"))
import girdi

Y = [y for y in girdi.yukle(sessiz=True) if y.get("lat") is not None]

def pad(t):
    if not t: return ""
    p = str(t).split("-")
    return "%04d-%02d-%02d" % (int(p[0]), int(p[1]) if len(p) > 1 else 1,
                               int(p[2]) if len(p) > 2 else 1)

def aktif(y, g):
    out = []
    for kat in ("d", "v", "s"):
        for p in y.get(kat) or []:
            f, t = pad(p.get("f", "")), pad(p.get("t", ""))
            if f and f > g: continue
            if t and t <= g: continue
            out.append((kat, p.get("d") or p.get("kid") or "OSMANLI", p.get("f"), p.get("t")))
    return out

GUNLER = sys.argv[1:] or ["1850-01-01", "1828-02-22", "1700-01-01", "1300-01-01"]
SON = {}
for g in GUNLER:
    G = pad(g)
    coklu, cift_say = [], {}
    for y in Y:
        a = aktif(y, G)
        if len(a) > 1:
            kimlikler = sorted(set(x[1] for x in a))
            coklu.append({"ad": y["ad"], "lat": y["lat"], "lon": y["lon"],
                          "dosya": y.get("_kaynak"),
                          "aktif": ["%s:%s %s..%s" % x for x in a]})
            if len(kimlikler) > 1:
                for i in range(len(kimlikler)):
                    for j in range(i+1, len(kimlikler)):
                        k = "%s + %s" % (kimlikler[i], kimlikler[j])
                        cift_say[k] = cift_say.get(k, 0) + 1
    SON[g] = {"gun": g, "nokta_evreni": len(Y),
              "ayni_anda_BIRDEN_COK_sahiplik": len(coklu),
              "farkli_kimlik_cifti": len(cift_say),
              "cift_dagilimi": dict(sorted(cift_say.items(), key=lambda x: -x[1])[:25]),
              "ornek": coklu[:25]}
    print("%s | cok-sahipli nokta: %4d / %d | farkli kimlik cifti: %d"
          % (g, len(coklu), len(Y), len(cift_say)))
    for k, n in list(SON[g]["cift_dagilimi"].items())[:10]:
        sys.stdout.buffer.write(("     %-52s %4d nokta\n" % (k[:52], n)).encode("utf-8", "replace"))

io.open(os.path.join(KOK, "denetim", "HARITA-DURUM-0074-SEBEP.json"), "w",
        encoding="utf-8").write(json.dumps(SON, ensure_ascii=False, indent=1))
print("yazildi")
