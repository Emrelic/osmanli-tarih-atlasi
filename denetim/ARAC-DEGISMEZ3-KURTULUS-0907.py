# -*- coding: utf-8 -*-
"""DEGISMEZ3-0907 ㉖ — «KURTULUŞ» KALIBI: borç KOMBİNATORYAL büyüyor mu?

3 mükerrer ihlalinin üçü de aynı şablonla yazılmış şehir kurtuluşu:
    "Antep'in kurtuluşu — Fransızların şehri boşaltması"   1921-12-25
    "Tarsus'un kurtuluşu — Fransızların şehri boşaltması"  1921-12-27
    "Adana'nın kurtuluşu — Fransızların şehri terketmesi"  1922-01-05
Üçü de AYRI ŞEHİR, AYRI GÜN ⇒ ölçüt uyumsuzluğu, `BILINEN_AYRI`ya girmeli.

🔴 AMA `BILINEN_AYRI`ya ÇİFT eklemek ÖLÇEKLENİR Mİ?
   n benzer başlık → n(n−1)/2 çift.  3 şehir → 3 çift.  6 şehir → 15.
   Bu betik kalıbın BUGÜNKÜ ve MUHTEMEL büyüklüğünü ölçer.
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

O = denetle.olaylari_yukle()
print("=" * 76)
print("«KURTULUŞ» KALIBI — borç ölçeklenmesi")
print("=" * 76)

kurtulus = [o for o in O if "kurtuluş" in (o.get("b") or "").lower()]
print("  «kurtuluş» geçen madde : %d" % len(kurtulus))
for o in sorted(kurtulus, key=lambda x: x["t"]):
    print("    %s  %s" % (o["t"], str(o.get("b"))[:62]))

# aynı şablon: "… kurtuluşu — Fransızların şehri …"
fr = [o for o in kurtulus if "fransız" in (o.get("b") or "").lower()]
print("\n  bunlardan «Fransızların…» şablonu : %d" % len(fr))
n = len(fr)
print("  ⇒ olası çift sayısı n(n−1)/2 = %d" % (n * (n - 1) // 2))
print("  ⇒ `MUKERRER_GUN` (±%d gün) penceresi içinde kalanlar ihlal olur"
      % denetle.MUKERRER_GUN)

# pencere içinde gerçekten kaç çift
def gn(t):
    return denetle._gun_no(t)


cift = 0
for i in range(len(fr)):
    for j in range(i + 1, len(fr)):
        if abs(gn(fr[j]["t"]) - gn(fr[i]["t"])) <= denetle.MUKERRER_GUN:
            cift += 1
print("  ⇒ pencere İÇİNDE olan çift : %d  (bugün ihlal sayısı = 3)" % cift)

print("\n[BÜYÜME PROJEKSİYONU]")
print("  Millî Mücadele'de kurtuluş günü olan şehir sayısı ONLARCA.")
for k in (3, 4, 5, 6, 8, 10):
    print("    %2d şehir → %3d çift" % (k, k * (k - 1) // 2))
print("  🔴 `BILINEN_AYRI`ya çift eklemek KARESEL büyür; her yeni şehir")
print("     mevcut hepsiyle bir çift üretir.")

json.dump({"_NOT": "«kurtuluş» kalıbının ölçeklenmesi.",
           "kurtulus_madde": len(kurtulus),
           "fransiz_sablonu": len(fr),
           "olasi_cift": n * (n - 1) // 2,
           "pencere_ici_cift": cift,
           "maddeler": [{"t": o["t"], "b": o.get("b")} for o in
                        sorted(kurtulus, key=lambda x: x["t"])]},
          open(os.path.join(KOK, "denetim", "OLCUM-DEGISMEZ3-KURTULUS-0907.json"),
               "w", encoding="utf-8", newline=""), ensure_ascii=False, indent=1)
print("\n[YAZILDI] denetim/OLCUM-DEGISMEZ3-KURTULUS-0907.json")
