# -*- coding: utf-8 -*-
"""Mükerrer-madde ölçütü yer_id ayırtı — İKİ YÖNLÜ sınav (22 Ekim 2026). Çıkış 0 = geçti.
YÖN 1 (sahici mükerrer hâlâ yakalanıyor): aynı gün · aynı başlık · yer_id AYNI ya da BOŞ ⇒ ihlal listesinde.
YÖN 2 (bozuk/yanlış eşleşme düşüyor): aynı gün · benzer başlık · yer_id İKİSİNDE DOLU ve FARKLI ⇒ düşer.
YÖN 3 (gerçek veri): eski ölçüt ↔ yeni ölçüt; düşen çiftlerin HEPSİNİN yer_id'si farklı ve dolu; kalan her çift ya eşit-dolu ya biri boş."""
import contextlib, io, os, sys
sys.path.insert(0, os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), "arac"))
with contextlib.redirect_stdout(io.StringIO()):
    import denetle as D
    O = D.olaylari_yukle()

def olay(t, b, yer=None, kaynak="k"):
    o = {"t": t, "b": b, "kaynak": kaynak}
    if yer is not None:
        o["yer_id"] = yer
    return o

def ihlal(L):
    return [r for r in D.mukerrer_maddeler(L) if r[4] == "başlık" or r[4].startswith("kişi!")]

hata = 0
B = "Trianon Antlaşması yürürlüğe girdi sınır"
for ad, L, bek in (
    ("sahici mükerrer, yer_id aynı",      [olay("1921-07-26", B, "Segedin"), olay("1921-07-26", B, "Segedin")], 1),
    ("sahici mükerrer, yer_id ikisi boş", [olay("1921-07-26", B), olay("1921-07-26", B)], 1),
    ("sahici mükerrer, biri boş",         [olay("1921-07-26", B, "Segedin"), olay("1921-07-26", B)], 1),
    ("farklı şehir (ikisi dolu, farklı)", [olay("1921-07-26", B, "Segedin"), olay("1921-07-26", B, "Varad")], 0),
):
    for acik in (True,):
        D.MUKERRER_YER_AYIRT = acik
        n = len(ihlal(L))
        ok = (n == bek)
        hata += (not ok)
        print(("✓" if ok else "✗"), ad, "→ ihlal", n, "(beklenen %d)" % bek)
D.MUKERRER_YER_AYIRT = False
n_eski = len(ihlal([olay("1921-07-26", B, "Segedin"), olay("1921-07-26", B, "Varad")]))
ok = (n_eski == 1)
hata += (not ok)
print(("✓" if ok else "✗"), "kapalıyken (eski ölçüt) farklı şehir çifti yakalanıyor →", n_eski, "(beklenen 1) — sınav ölçütün KENDİSİNİ ölçüyor")

# YÖN 3 — gerçek veri
D.MUKERRER_YER_AYIRT = False
m0 = ihlal(O)
D.MUKERRER_YER_AYIRT = True
m1 = ihlal(O)
k1 = {(r[2]["t"], r[2]["b"], r[3]["b"]) for r in m1}
dusen = [r for r in m0 if (r[2]["t"], r[2]["b"], r[3]["b"]) not in k1]
kotu_dusen = [r for r in dusen if not (r[2].get("yer_id") and r[3].get("yer_id") and r[2]["yer_id"] != r[3]["yer_id"])]
kotu_kalan = [r for r in m1 if r[2].get("yer_id") and r[3].get("yer_id") and r[2]["yer_id"] != r[3]["yer_id"]]
print("gerçek veri: eski", len(m0), "→ yeni", len(m1), "· düşen", len(dusen))
for ad, L in (("düşenlerin hepsi 'ikisi dolu ve farklı'", kotu_dusen), ("kalanlarda 'ikisi dolu ve farklı' çift YOK", kotu_kalan)):
    ok = not L
    hata += (not ok)
    print(("✓" if ok else "✗"), ad, "→ ihlal", len(L))
sys.exit(1 if hata else 0)
