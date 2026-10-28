# -*- coding: utf-8 -*-
"""ARAC-MUKERRER-OLU-SINAV-1006 — ölü istisna sayacı + özel ad ölçütü, İKİ YÖNLÜ sınav.

UMIT-W11-OLCUT-1006b. `denetle.py`nin GERÇEK işlevleri (mukerrer_maddeler,
onek_olcutu, _kisiler_kumesi, _BILINEN_AYRI_KULLANILAN) yapay evrende çağrılır;
gerçek BILINEN_AYRI sınav süresince yerine konur ve SONUNDA geri yüklenir.

    py denetim/ARAC-MUKERRER-OLU-SINAV-1006.py      # çıkış 0 = hepsi geçti

Yönler:
  ① temiz   — bastıran istisna CANLI sayılır, ölü listesi BOŞ
  ② öter    — evrende karşılığı olmayan girdi ÖLÜ sayılır
  ③ önek    — yalnız önek ölçütünde bastıran girdi de CANLI sayılır
  ④ ölçüt   — yıl damgalı "X krallığı kuruldu" çifti artık kişi! DEĞİL
  ⑤ ölçüt   — aynı gün aynı antlaşma (Lozan) hâlâ YAKALANIR
"""
import os
import sys

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(KOK, "arac"))
import denetle as D  # noqa: E402


def madde(t, b, **k):
    o = {"t": t, "b": b}
    o.update(k)
    return o


def kos(evren, istisnalar):
    eski = set(D.BILINEN_AYRI)
    D.BILINEN_AYRI.clear()
    D.BILINEN_AYRI.update(istisnalar)
    D._BILINEN_AYRI_KULLANILAN.clear()
    try:
        bulunan = D.mukerrer_maddeler(evren)
        onek = D.onek_olcutu(evren)
        olu = sorted(c for c in D.BILINEN_AYRI if c not in D._BILINEN_AYRI_KULLANILAN)
    finally:
        D.BILINEN_AYRI.clear()
        D.BILINEN_AYRI.update(eski)
        D._BILINEN_AYRI_KULLANILAN.clear()
    return bulunan, onek, olu


def kesin(bulunan):
    return [r for r in bulunan if r[4] == "başlık" or r[4].startswith("kişi!")]


GECTI, KALDI = [], []


def sina(ad, kosul, ayrinti=""):
    (GECTI if kosul else KALDI).append(ad)
    print(f"  {'✓' if kosul else '✗'}  {ad}" + (f"   [{ayrinti}]" if ayrinti else ""))


A = madde("1600-01-01", "Kale X'in Ruslara kaybı")
B = madde("1600-02-01", "Kale X'in Ruslara kesin kaybı")
CIFT = (A["b"], B["b"])

print("① temiz: bastıran istisna canlı")
bul, _, olu = kos([A, B], {CIFT})
sina("çift bastırıldı (kesin 0)", not kesin(bul), f"kesin={len(kesin(bul))}")
sina("ölü listesi boş", olu == [], f"ölü={olu}")
bul2, _, _ = kos([A, B], set())
sina("istisnasız aynı çift ÖTÜYOR (sınav boş değil)", len(kesin(bul2)) == 1)

print("② öter: karşılıksız girdi ölü")
HAYALET = ("Bu başlık evrende yok", "Bu da yok")
_, _, olu = kos([A, B], {CIFT, HAYALET})
sina("hayalet girdi ÖLÜ", olu == [HAYALET], f"ölü={olu}")
TERS = (B["b"], A["b"])
_, _, olu = kos([A, B], {TERS})
sina("ters yönde yazılmış girdi de CANLI", olu == [], f"ölü={olu}")

print("③ önek: yalnız önekte bastıran girdi canlı")
S1 = madde("1868-03-05", "Şûrâ-yı Devlet kuruldu")
S2 = madde("1868-05-10", "Şûrâ-yı Devlet'in açılışı: Osmanlı Danıştayı'nın kuruluşu")
_, onek0, _ = kos([S1, S2], set())
sina("istisnasız önek ölçütü çifti görüyor", len(onek0) == 1, f"önek={len(onek0)}")
_, onek1, olu = kos([S1, S2], {(S1["b"], S2["b"])})
sina("istisnayla önek listesi boş", onek1 == [])
sina("önekle bastıran girdi ÖLÜ DEĞİL", olu == [], f"ölü={olu}")

print("④ ölçüt: genel kelime artık kişi değil")
K1 = madde("1450-01-01", "Karagve krallığı kuruldu")
K2 = madde("1450-01-01", "Büyük Zimbabve'nin başşehri terk edildi ve krallık dağıldı")
ESKI_KK = D._kisiler_kumesi
D._kisiler_kumesi = lambda o: {"kralli"}          # eski davranışın özeti: ortak genel kelime
bul_eski, _, _ = kos([K1, K2], set())
D._kisiler_kumesi = ESKI_KK
sina("eski davranışta bu çift kişi! ötüyordu (sınav boş değil)",
     [r[4][:5] for r in bul_eski] == ["kişi!"], ", ".join(r[4] for r in bul_eski) or "hiç")
bul, _, _ = kos([K1, K2], set())
sina("yıl damgalı 'krallığı kuruldu' çifti kesin DEĞİL", not kesin(bul),
     ", ".join(r[4] for r in bul) or "hiç")
sina("_kisiler_kumesi genel kelime almıyor",
     not (D._kisiler_kumesi(K1) & D._kisiler_kumesi(K2)),
     f"{sorted(D._kisiler_kumesi(K1))} ∩ {sorted(D._kisiler_kumesi(K2))}")

print("⑤ ölçüt: sahici mükerrer hâlâ yakalanıyor")
L1 = madde("1923-07-24", "Lozan Antlaşması", kaynak="a")
L2 = madde("1923-07-24", "Lozan Antlaşması — Türk-Bulgar sınırının teyidi", kaynak="b")
bul, _, _ = kos([L1, L2], set())
sina("aynı gün Lozan ×2 KESİN yakalanıyor", len(kesin(bul)) == 1,
     ", ".join(r[4] for r in bul) or "hiç")
kk = D._kisiler_kumesi(madde("1500-01-01", "z", kisiler="kâtip mehmed"))
sina("`kisiler` alanı küçük harfle de okunuyor (yalnız başlık süzülür)",
     "mehmed" in kk, f"{sorted(kk)}")

print(f"\nSONUÇ: {len(GECTI)} geçti · {len(KALDI)} kaldı")
sys.exit(1 if KALDI else 0)
