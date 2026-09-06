# -*- coding: utf-8 -*-
"""SERHAT — her cift icin "HANGI TARIH".  YALNIZ OKUR.

Emre'nin UC sarti:
  1) hangi iki devletin siniri   → d1, d2   ✓ SERHAT-CIFT-0907'de VAR
  2) HANGI TARIH                 → f, t     🔴 EKSIKTI — bu arac onu ekler
  3) cifter cifter A-B C-D E-F   → a, b     ✓ VAR

🟢 YONTEM — turetme degil KESISIM:
   `a` yerlesiminin 1923-10-28'de aktif olan sahiplik donemi [f1,t1)
   `b` yerlesiminin ayni gundeki donemi          [f2,t2)
   ⇒ bu CIFT, o iki sahiple ancak KESISIMDE vardir: [max(f1,f2), min(t1,t2))
   Bu bir tahmin degil; iki donemin mantiksal kesisimi.

⚠️ SINIR — gizlenmedi: kesisim, ciftin GECERLI OLABILECEGI en genis
   penceredir. Gercek pencere BUNDAN DAR olabilir, cunku:
     · aradaki bir ucuncu nokta `kur:` ile dogup Gabriel kenarini
       KOPARABILIR (komsuluk zamanla degisir)
     · `bit:` ile bir uc yok olabilir
   ⇒ Bu bir UST SINIRDIR ve raporda oyle yazili.
"""
import sys, io, json
from collections import defaultdict

KOK = r"C:\Users\emrem\OneDrive\Desktop\TARİH COĞRAFYA SİTESİ"
sys.path.insert(0, KOK + r"\arac")
import girdi

G = "1923-10-28"
O = json.load(io.open(KOK + r"\denetim\SERHAT-CIFT-0907.json", encoding="utf-8"))

DON = {}
for y in girdi.yukle():
    ad = y.get("ad")
    if not ad or ad in DON:
        continue
    lst = []
    for p in (y.get("d") or []):
        lst.append((p.get("f", ""), p.get("t", ""), "OSMANLI"))
    for p in (y.get("v") or []):
        lst.append((p.get("f", ""), p.get("t", ""), "OSMANLI-tabi"))
    for p in (y.get("s") or []):
        lst.append((p.get("f", ""), p.get("t", ""), p.get("d")))
    DON[ad] = lst


def aktif(ad, g):
    for f, t, d in DON.get(ad, []):
        if f <= g < t:
            return (f, t, d)
    return None


tam, eksik = [], []
for c in O["cift"]:
    A, B = aktif(c["a"], G), aktif(c["b"], G)
    if not A or not B:
        eksik.append(c)
        continue
    f = max(A[0], B[0])
    t = min(A[1], B[1])
    if f >= t:
        eksik.append(c)
        continue
    tam.append(dict(c, f=f, t=t, sure_gun=None))

# sure
from datetime import date


def gun(s):
    try:
        p = s.split("-")
        return date(int(p[0]), int(p[1]), int(p[2])).toordinal()
    except Exception:
        return None


for c in tam:
    a, b = gun(c["f"]), gun(c["t"])
    c["sure_gun"] = (b - a) if (a and b) else None

sureli = [c for c in tam if c["sure_gun"]]
sureli.sort(key=lambda c: c["sure_gun"])

f = io.open(KOK + r"\denetim\SERHAT-TARIH-0907.md", "w", encoding="utf-8")
W = f.write
W("# SERHAT — her çift için HANGİ TARİH  (Emre'nin 2. şartı)\n\n")
W("> Yöntem türetme değil **kesişim**: `a`nın 1923-10-28'de aktif sahiplik\n")
W("> dönemi `[f1,t1)`, `b`ninki `[f2,t2)` ⇒ çift ancak\n")
W("> `[max(f1,f2), min(t1,t2))` aralığında **bu iki sahiple** vardır.\n\n")
W("```\n")
W("sınır çifti (toplam)          %d\n" % len(O["cift"]))
W("🟢 tarih penceresi ÇIKARILDI  %d\n" % len(tam))
W("⚠️ çıkarılamadı               %d\n" % len(eksik))
W("```\n\n")
if sureli:
    import statistics as st
    s = [c["sure_gun"] / 365.25 for c in sureli]
    W("Pencere uzunluğu (yıl): min %.2f · %%25 %.1f · **ORTANCA %.1f** · %%75 %.1f · max %.1f\n\n"
      % (min(s), st.quantiles(s, n=4)[0], st.median(s), st.quantiles(s, n=4)[2], max(s)))

W("## 🔴 EN KISA 25 PENCERE — bunlar en KIRILGAN sınırlar\n\n```\n")
for c in sureli[:25]:
    W("%6.1f yıl  %s → %s   %-22s [%s] ↔ %-22s [%s]\n"
      % (c["sure_gun"] / 365.25, c["f"], c["t"], c["a"], c["d1"], c["b"], c["d2"]))
W("```\n\n")

W("## 🟢 EMRE'NİN ÖRNEKLERİ — üç şart bir arada\n\n```\n")
for c in tam:
    if c["a"] in ("Rusçuk", "Çirmen", "Edirne") or c["b"] in (
            "Yergöğü (Giurgiu)", "Mustafapaşa (Svilengrad)", "Sofulu (Soufli)"):
        W("%-22s ↔ %-24s\n" % (c["a"], c["b"]))
        W("   1) %s  ↔  %s\n" % (c["d1"], c["d2"]))
        W("   2) %s → %s   (%.1f yıl)\n" % (c["f"], c["t"], (c["sure_gun"] or 0) / 365.25))
        W("   3) mesafe %.1f km\n\n" % c["km"])
W("```\n\n")

W("## ⚠️ BU BİR ÜST SINIRDIR — gizlenmedi\n\n")
W("Kesişim, çiftin **geçerli olabileceği en geniş** penceredir. Gerçek\n")
W("pencere daha DAR olabilir: aradaki bir üçüncü nokta `kur:` ile doğup\n")
W("Gabriel kenarını **koparabilir**, ya da bir uç `bit:` ile yok olabilir.\n")
W("⇒ Komşuluğun zaman içinde ne zaman kurulup koptuğunu **ölçmedim**;\n")
W("bunun için her gün için Gabriel yeniden kurulmalı.\n")
f.close()

J = dict(O)
J["cift"] = tam
J["not"] = "f/t = iki sahiplik doneminin KESISIMI · UST SINIR"
io.open(KOK + r"\denetim\SERHAT-TARIH-0907.json", "w", encoding="utf-8").write(
    json.dumps(J, ensure_ascii=False, indent=1))
print("tarih cikarilan:", len(tam), "· cikarilamayan:", len(eksik))
print("yazildi: denetim/SERHAT-TARIH-0907.md (+ .json)")
