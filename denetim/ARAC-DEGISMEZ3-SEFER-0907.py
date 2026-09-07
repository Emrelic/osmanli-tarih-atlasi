# -*- coding: utf-8 -*-
"""DEGISMEZ3-0907 ⑱ — `SEFERLER`in 18 açığı: MADDESİZ mi, ÖLÇÜT UYUMSUZ mu?

HİPOTEZİM (önceki turda, ölçmeden yazıldı ve HİPOTEZ diye damgalandı):
  *"`SEFERLER` `f` VE `t` taşıyor (bir aralık); `savas_senkronu` yalnız
    `t`ye (bitiş) bakıyor, kronoloji ise çoğu zaman seferin BAŞLANGICINI
    anlatıyor ⇒ %70 verinin kusuru değil ÖLÇÜTÜN sefere uymaması olabilir."*

ŞİMDİ ÖLÇÜLÜYOR — üç ölçüt, aynı veri, aynı pencere (`SAVAS_PENCERE`):
  Ⓐ `t` ±30        ← `savas_senkronu`un BUGÜNKÜ ölçütü          (taban: 18 açık)
  Ⓑ `f` ±30        ← seferin BAŞLANGICI
  Ⓒ [f-30, t+30]   ← ARALIK örtüşmesi (seferin herhangi bir ânı)

🔴 ÖNGÖRÜ (ölçümden ÖNCE, mazeretiyle):
   Ⓒ açık sayısını BELİRGİN düşürecek (18 → 5'in altı bekliyorum).
   Düşmezse hipotezim ÇÜRÜR ve o 18 GERÇEKTEN maddesiz demektir —
   **mazeret YOK**, o zaman denetim önerisi doğar.
   ÖLÇÜM: `denetle.gun_no`/`tam` ile, birim GÜN.

⚠️ Denetim YAZILMIYOR (koordinatörün şartı) — ölçüm ve öneri.
"""
import io
import json
import os
import sys

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8", errors="replace")
KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(KOK, "arac"))
os.chdir(KOK)
import denetle  # noqa: E402

P = denetle.SAVAS_PENCERE
O = denetle.olaylari_yukle()
S = denetle.oku_pencere(os.path.join(KOK, "data", "savaslar.js"), "SEFERLER")
ol = []
for o in O:
    try:
        ol.append((denetle.gun_no(denetle.tam(o["t"])), o.get("b", "")))
    except Exception:
        pass

print("=" * 76)
print("`SEFERLER` — 18 açık: MADDESİZ mi, ÖLÇÜT UYUMSUZ mu?")
print("=" * 76)
print("sefer %d · kronoloji maddesi %d · pencere ±%d gün" % (len(S), len(ol), P))


def g(x):
    try:
        return denetle.gun_no(denetle.tam(x))
    except Exception:
        return None


def enyakin(hedef):
    if hedef is None:
        return None, None
    d, b = min(((abs(og - hedef), (og - hedef, b)) for og, b in ol),
               key=lambda z: z[0])
    return b[0], b[1]


sonuc = {"A_t": [], "B_f": [], "C_aralik": []}
detay = []
for r in S:
    ad = r.get("ad", "?")
    gf, gt = g(r.get("f")), g(r.get("t"))
    # Ⓐ  t ±P
    fa, ba = enyakin(gt)
    a_acik = fa is None or abs(fa) > P
    # Ⓑ  f ±P
    fb, bb = enyakin(gf)
    b_acik = fb is None or abs(fb) > P
    # Ⓒ  [f-P, t+P] aralığında HERHANGİ bir madde
    c_acik = True
    c_ornek = ""
    if gf is not None and gt is not None:
        alt, ust = min(gf, gt) - P, max(gf, gt) + P
        icinde = [(og, b) for og, b in ol if alt <= og <= ust]
        if icinde:
            c_acik = False
            c_ornek = icinde[0][1]
    if a_acik:
        sonuc["A_t"].append(ad)
    if b_acik:
        sonuc["B_f"].append(ad)
    if c_acik:
        sonuc["C_aralik"].append(ad)
    if a_acik:                       # yalnız Ⓐ'da açık olanları raporla
        detay.append({"ad": ad, "f": r.get("f"), "t": r.get("t"),
                      "t_fark": fa, "f_fark": fb,
                      "B_kapali": not b_acik, "C_kapali": not c_acik,
                      "C_madde": c_ornek[:60], "t_madde": (ba or "")[:60]})

print("\n[ÜÇ ÖLÇÜT — açık sayısı]")
print("  Ⓐ `t` ±%d       (BUGÜNKÜ ölçüt) : %2d açık" % (P, len(sonuc["A_t"])))
print("  Ⓑ `f` ±%d       (başlangıç)     : %2d açık" % (P, len(sonuc["B_f"])))
print("  Ⓒ [f-%d, t+%d]  (ARALIK)        : %2d açık" % (P, P, len(sonuc["C_aralik"])))

print("\n[Ⓐ'DA AÇIK OLAN %d SEFERİN AYRIMI]" % len(detay))
b_kurtaran = [d for d in detay if d["B_kapali"]]
c_kurtaran = [d for d in detay if d["C_kapali"]]
gercek = [d for d in detay if not d["C_kapali"]]
print("  Ⓑ ile kapanan (madde BAŞLANGICI anlatıyor) : %d" % len(b_kurtaran))
print("  Ⓒ ile kapanan (madde ARALIK içinde)        : %d" % len(c_kurtaran))
print("  🔴 ÜÇÜNDE DE AÇIK — GERÇEKTEN MADDESİZ      : %d" % len(gercek))

print("\n  ── Ⓒ ile kapananlar (ölçüt uyumsuzluğu) ──")
for d in c_kurtaran:
    print("   %-34s f:%s t:%s  t_fark %+5dg" % (d["ad"][:34], d["f"], d["t"],
                                                d["t_fark"] or 0))
    print("      aralıkta: %s" % d["C_madde"])
if gercek:
    print("\n  ── 🔴 ÜÇÜNDE DE AÇIK ──")
    for d in gercek:
        print("   %-34s f:%s t:%s  t_fark %+5dg  f_fark %+5dg"
              % (d["ad"][:34], d["f"], d["t"], d["t_fark"] or 0, d["f_fark"] or 0))
        print("      en yakın madde: %s" % d["t_madde"])

print("\n" + "=" * 76)
print("ÖNGÖRÜ SINAVI — 'Ⓒ açığı 18 → 5'in altına düşecek'")
print("=" * 76)
tuttu = len(sonuc["C_aralik"]) < 5
print("  ölçüm: Ⓒ %d açık  ⇒  %s"
      % (len(sonuc["C_aralik"]), "TUTTU ✓" if tuttu else "🔴 ÇÜRÜDÜ — mazeret YOK"))
print("  ⇒ %s" % ("HİPOTEZ DOĞRULANDI: %d açığın %d'i ÖLÇÜT UYUMSUZLUĞU, "
                  "%d'i gerçek" % (len(detay), len(c_kurtaran), len(gercek))
                  if tuttu else
                  "HİPOTEZ ÇÜRÜDÜ: açıkların çoğu GERÇEKTEN maddesiz"))

json.dump({"_NOT": ("SEFERLER 18 açığının ayrımı. Üç ölçüt aynı veri ve aynı "
                    "pencereyle. Denetim YAZILMADI — ölçüm ve öneri."),
           "pencere": P, "sefer": len(S), "madde": len(ol),
           "acik": {k: len(v) for k, v in sonuc.items()},
           "acik_adlar": sonuc,
           "ayrim": {"B_ile_kapanan": len(b_kurtaran),
                     "C_ile_kapanan": len(c_kurtaran),
                     "gercekten_maddesiz": len(gercek)},
           "detay": detay},
          open(os.path.join(KOK, "denetim", "OLCUM-DEGISMEZ3-SEFER-0907.json"),
               "w", encoding="utf-8", newline=""), ensure_ascii=False, indent=1)
print("\n[YAZILDI] denetim/OLCUM-DEGISMEZ3-SEFER-0907.json")
