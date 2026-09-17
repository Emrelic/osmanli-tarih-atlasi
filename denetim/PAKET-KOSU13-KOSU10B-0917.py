# -*- coding: utf-8 -*-
"""KOSU13-YAMA · KOSU10 partisinin ek kalemi: Kuba'nın 1583-01-01 günü.
Kuba'nın d: başı, Derbend maddesinin ESKİ gününden (1583-01-01) geliyordu; o madde
G6-HALKA-DERBEND ile kaynak gününe (1578-10-05) taşınınca Kuba kırılması maddesiz kaldı
(Değişmez 2 · 1 açık). Kuba'nın kendi kaynağı YOK (kayıt: 'Kuba o cümlede yok'), m:"Derbend".
Çare: çapa kuralı (D166) + şartlı komşu günü — Derbend'in kendi kaynaklı günü.
KOORDİNATÖRE KARAR KALEMİ olarak bildirildi (rapor §8).
"""
import collections


def W(f, t, **ek):
    p = {"f": f, "t": t}
    p.update(ek)
    return p


ISLEM = collections.OrderedDict([
    ("Kuba", ("K10-KUBA", [
        ("d~", W("1583-01-01", "1607-01-01"), W("1578-10-05", "1607-01-01",
            kaynak="gün komşudan: Derbend · TDV derbend--dagistan (5 Ekim 1578 bağlılık arzı) — Kuba'nın kendi kaynağı yok; m:\"Derbend\", eski 1583 günü Derbend'in eski gününden devralınmıştı (KOSU13-YAMA, karar kalemi)")),
    ])),
])
EKLE = []
METIN = []
