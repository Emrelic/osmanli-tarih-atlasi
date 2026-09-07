# -*- coding: utf-8 -*-
"""
SINIR-ASYA-0907 · CIPA GUNU SINAVI
1.MURAT'in M-3191 uyarisi: `1923-10-29` sorulunca atlas SESSIZCE bosaliyor.

Benim aletlerim ZATEN `1923-10-28` soruyor. Ama koordinator IKI cikis yolu
saydi ve ikisinin AYNI sonucu verdigini KIMSE olcmedi:
    A)  g = 1923-10-28  ·  f <= g <  t      <- benim kullandigim
    B)  g = 1923-10-29  ·  f <= g <= t      <- UFUK sonunda `<=`

Ikisi ayrisirsa benim tarafimda da bir kayip var demektir:
  · A, `f:1923-10-29` ile BASLAYAN bir donemi KACIRIR
  · B, ayni gun BITEN ve ayni gun BASLAYAN iki donemi AYNI ANDA aktif sayar
    (bir gunluk sahte ORTUSME)
⇒ Fark SAYILIR, ve hangi kayitta oldugu ADIYLA basilir.
"""
import sys, io, os, collections
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8", errors="replace")

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(KOK, "arac"))
import girdi                                            # noqa: E402

UFUK = "1923-10-29"


def sahip(y, g, kapali):
    """kapali=False -> f <= g <  t   (yarim acik, motorun olcutu)
       kapali=True  -> f <= g <= t   (UFUK sonunda kapali)"""
    def kaps(p):
        return p.get("f", "") <= g <= p.get("t", "") if kapali \
            else p.get("f", "") <= g < p.get("t", "")
    for p in (y.get("d") or []):
        if kaps(p):
            return "OSMANLI"
    for p in (y.get("v") or []):
        if kaps(p):
            return "tabi:" + (p.get("kid") or p.get("k") or "ADSIZ")
    for p in (y.get("s") or []):
        if kaps(p):
            return p.get("d") or "ADSIZ"
    return None


def main():
    Y = girdi.yukle(sessiz=True)
    Y = [y for y in Y if not (y.get("kur") and y["kur"] > UFUK)]

    senaryo = {
        "A · 28 Ekim, yarim acik": [sahip(y, "1923-10-28", False) for y in Y],
        "B · 29 Ekim, KAPALI":     [sahip(y, UFUK, True) for y in Y],
        "C · 29 Ekim, yarim acik": [sahip(y, UFUK, False) for y in Y],   # ARIZA
    }
    print("nokta:", len(Y))
    for ad, v in senaryo.items():
        canli = [x for x in v if x]
        print("  %-26s sahipli=%5d  sahipsiz=%5d  benzersiz kimlik=%4d"
              % (ad, len(canli), len(v) - len(canli), len(set(canli))))

    A, B = senaryo["A · 28 Ekim, yarim acik"], senaryo["B · 29 Ekim, KAPALI"]
    fark = [(Y[i]["ad"], A[i], B[i]) for i in range(len(Y)) if A[i] != B[i]]
    print()
    print("=== A ile B ARASINDAKI FARK:", len(fark))
    ozet = collections.Counter((a, b) for _, a, b in fark)
    for (a, b), n in ozet.most_common(20):
        print("   %-26s -> %-26s  %d nokta" % (str(a)[:26], str(b)[:26], n))
    if fark:
        print("   ornek:", ", ".join(f[0] for f in fark[:8]))

    # B'nin kendi riski: ayni gun BITEN + BASLAYAN iki donem birden aktif mi?
    cift = []
    for y in Y:
        for kat in ("s", "d", "v"):
            akt = [p for p in (y.get(kat) or [])
                   if p.get("f", "") <= UFUK <= p.get("t", "")]
            if len(akt) > 1:
                cift.append((y["ad"], kat, [(p.get("f"), p.get("t")) for p in akt]))
    print()
    print("=== B'nin SAHTE ORTUSMESI (ayni gun iki donem aktif):", len(cift))
    for c in cift[:10]:
        print("   %-30s %s %s" % (c[0][:30], c[1], c[2]))


if __name__ == "__main__":
    main()
