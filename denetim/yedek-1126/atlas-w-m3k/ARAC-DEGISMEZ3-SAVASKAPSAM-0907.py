# -*- coding: utf-8 -*-
"""DEGISMEZ3-0907 ⑯ — `savas_senkronu` KAPSAMI: hangi küme denetlenmeli?

BULGU: `denetle.py:3745` yalnız **`SAVASLAR`**ı okuyor
   S = oku_pencere(os.path.join(DATA, "savaslar.js"), "SAVASLAR")
Aynı dosyada `ANTLASMALAR` (41) · `SEFERLER` (61) · `SERILER` (16) var ve
**hiçbiri denetlenmiyor.**

🔴 KOORDİNATÖRÜN ŞARTI: *"Denetim YAZMA — hangisinin denetlenmesi ANLAMLI
   olduğunu ÖLÇ."* Bu betik hüküm vermez, ölçer.

ÖLÇÜT — bir küme ancak ÜÇÜ birden doğruysa denetlenebilir:
   ① kayıtları GÜN hassasiyetli bir `t` taşıyor mu
   ② `t` ayrıştırılabiliyor mu (`:2837`in `except` dalı — açık kalemim)
   ③ kaydın anlattığı şey bir OLAY mı (kronolojide maddesi OLMALI mı)
      — bu üçüncüsü ölçülemez, kayıt YAPISINDAN okunur ve AYRI damgalanır
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

DATA = os.path.join(KOK, "data")
O = denetle.olaylari_yukle()
print("=" * 74)
print("`savas_senkronu` KAPSAMI — hangi küme denetlenmeli?")
print("=" * 74)
print("kronoloji maddesi (çekirdek) : %d" % len(O))

rapor = {}
for kume in ("SAVASLAR", "ANTLASMALAR", "SEFERLER", "SERILER"):
    try:
        S = denetle.oku_pencere(os.path.join(DATA, "savaslar.js"), kume)
    except Exception as e:
        print("\n[%s] ⚠️ okunamadı: %s" % (kume, str(e)[:50]))
        rapor[kume] = {"olculemedi": str(e)[:80]}
        continue

    # ① `t` varlığı ve hassasiyeti
    t_var = [r for r in S if r.get("t")]
    gun_hassas = [r for r in S if r.get("t") and len(str(r["t"])) >= 10]
    # ② ayrıştırılabilirlik — `:2837`in except dalı
    ayristirilamayan = []
    for r in t_var:
        try:
            denetle.gun_no(denetle.tam(r["t"]))
        except Exception:
            ayristirilamayan.append(r.get("ad") or r.get("b") or "?")
    # alan yapısı — kayıt NE anlatıyor
    alanlar = {}
    for r in S:
        for a in r:
            alanlar[a] = alanlar.get(a, 0) + 1

    print("\n[%s]  %d kayıt" % (kume, len(S)))
    print("  `t` taşıyan          : %d" % len(t_var))
    print("  GÜN hassasiyetli     : %d" % len(gun_hassas))
    print("  🔴 AYRIŞTIRILAMAYAN  : %d %s"
          % (len(ayristirilamayan), ayristirilamayan[:4]))
    print("  alanlar              : %s"
          % ", ".join("%s(%d)" % (a, n) for a, n in
                      sorted(alanlar.items(), key=lambda x: -x[1])[:9]))

    # senkron ölçümü — DENETİM DEĞİL, ÖLÇÜM
    if t_var:
        n_s, ayk = denetle.savas_senkronu(S, O)
        oran = 100.0 * (n_s - len(ayk)) / n_s if n_s else 0
        print("  senkron: %d/%d kaydın ±%d gün içinde maddesi VAR  (%%%.0f)"
              % (n_s - len(ayk), n_s, denetle.SAVAS_PENCERE, oran))
        if ayk:
            print("  açık ilk 5:")
            for t, ad, tur, fark, b in sorted(ayk, key=lambda r: -abs(r[3]))[:5]:
                print("    %s  %-30s %+6dg" % (t, str(ad)[:30], fark))
        rapor[kume] = {"kayit": len(S), "t_var": len(t_var),
                       "gun_hassas": len(gun_hassas),
                       "ayristirilamayan": ayristirilamayan,
                       "senkron_toplam": n_s, "senkron_acik": len(ayk),
                       "oran": round(oran, 1),
                       "alanlar": sorted(alanlar)}
    else:
        print("  ⇒ `t` YOK ⇒ senkron ölçülemez — KAPSAM DIŞI")
        rapor[kume] = {"kayit": len(S), "t_var": 0, "kapsam_disi": True,
                       "alanlar": sorted(alanlar)}

print("\n" + "=" * 74)
print("HÜKÜM DEĞİL — ÖLÇÜM ÖZETİ")
print("=" * 74)
for k, d in rapor.items():
    if d.get("kapsam_disi"):
        print("  %-13s ⚪ KAPSAM DIŞI — `t` taşımıyor (tanım gereği)" % k)
    elif "olculemedi" in d:
        print("  %-13s ⚠️ ÖLÇÜLEMEDİ" % k)
    else:
        print("  %-13s %3d kayıt · `t` %3d · senkron %%%.0f · açık %d"
              % (k, d["kayit"], d["t_var"], d["oran"], d["senkron_acik"]))
print("\n  ⚠️ ÜÇÜNCÜ ÖLÇÜT (`kaydın anlattığı bir OLAY mı`) SAYILAMAZ —")
print("     kayıt yapısından okunur ve bu betik onu ÖLÇMEZ. Aşağıdaki")
print("     alan listeleri o okumanın malzemesi.")

json.dump({"_NOT": ("savas_senkronu kapsam ölçümü. HÜKÜM YOK. Üçüncü ölçüt "
                    "(kayıt bir OLAY mı) ölçülemez, alan listesinden okunur."),
           "kronoloji_madde": len(O), "kumeler": rapor},
          open(os.path.join(KOK, "denetim",
                            "OLCUM-DEGISMEZ3-SAVASKAPSAM-0907.json"),
               "w", encoding="utf-8", newline=""), ensure_ascii=False, indent=1)
print("\n[YAZILDI] denetim/OLCUM-DEGISMEZ3-SAVASKAPSAM-0907.json")
