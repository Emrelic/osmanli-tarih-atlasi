"""Değişmez 9 — İKİ DEVLET GÖVDESİ ÇAKIŞMAZ (ölçüm modülü; `denetle.py` main() çağırır).

🔴 DOĞURAN CÜMLE (Emre, post-it #112, 19 Ekim 2026): 1676-09-19'da Don Kazak
alanı "üçüncü bir yeşil" göründü — Rusya gövdesi Don Kazak ve Zaporojye
gövdelerinin üstüne biniyordu; iki yarı saydam dolgu üst üste gelince ikisinden
de farklı renk çıkıyordu. *"İki devlet gövdesi çakışmaz kuralı ekleyelim."*

Ölçüm: motor ÇIKTISINDA bugün her örnek günde onlarca çakışan çift var
(Rusya∩Zaporojye, Fransa∩Haudenosaunee, İngiltere∩Transvaal…) ⇒ bu bir MOTOR
BORCUDUR (motor donuk; HAVVA koşusunda kapanır). `js/app.js` `cakismaGider`
çizimde çakışmayı ayırır (küçük gövde = alt devlet kalır), yani KULLANICI artık
görmez; bu kapı çıktıdaki borcu sayar, gerilemeyi bloke eder, iyileşince tavan
iner. Osmanlı ↔ Osmanlı tâbi çifti aile sayılır, atlanır.
Ölçü: ≥ D9_ESIK derece² (≈ 600 km²) ortak alan; günde bir (gün, çift) = 1 birim.

Tek başına: `py arac/degismez9.py [--ayrinti]`
"""
import os
import sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))

D9_ESIK = 0.05
D9_GUNLER = tuple("%04d-06-15" % y for y in range(1000, 2000, 50)) + ("1676-09-19",)
BEKLENEN_D9 = 231   # 19 EKİM 2026 ilk ölçüm (21 gün, ≥0,05 derece²; motor e70882f7) — TAVAN ÖNERİSİ, Emre onayı bekler


def olc(gv=None):
    """Döner: dict(birim=[(gün, a, b, derece²)], olculen_gun, damga)."""
    import denetle as D
    from shapely import STRtree
    from shapely.ops import unary_union
    gv = gv or D._D8Govde()
    aile = {"OSMANLI", "OSM-TABI"}
    birim = []
    for gun in D9_GUNLER:
        by = {}
        for gid, g in gv.kesit(gun, (-180, -90, 180, 90)):
            by.setdefault(gid, []).append(g)
        U = {k: unary_union(v) for k, v in by.items()}
        ids = sorted(U)
        agac = STRtree([U[i] for i in ids])
        for ai, a in enumerate(ids):
            for bi in agac.query(U[a]):
                b = ids[bi]
                if b <= a or (a in aile and b in aile):
                    continue
                ar = U[a].intersection(U[b]).area
                if ar >= D9_ESIK:
                    birim.append((gun, a, b, round(ar, 3)))
    return {"birim": birim, "olculen_gun": len(D9_GUNLER), "damga": gv.damga}


def rapor(ayrinti=False):
    """denetle.main() için: ihlal varsa True döner."""
    import denetle as D
    try:
        R = olc()
    except ImportError as e:
        print(f"Değişmez 9  !  ÖLÇÜLEMEDİ — {e} (shapely yok). Ölçülemeyen soru TEMİZ DEĞİLDİR.")
        D.olculemedi("Değişmez 9", e)
        return False
    except Exception as e:
        print(f"Değişmez 9  !  ÖLÇÜLEMEDİ — {type(e).__name__}: {str(e)[:90]}")
        D.olculemedi("Değişmez 9", "%s: %s" % (type(e).__name__, e))
        return False
    n = len(R["birim"])
    if BEKLENEN_D9 is None:
        print(f"Değişmez 9  i  devlet gövdesi çakışması: {n} (gün, çift) birim — TAVAN YAZILMADI "
              f"(BEKLENEN_D9 = {n} yazılabilir) · {R['olculen_gun']} gün · gövde {R['damga']}")
        ihlal = False
    else:
        ihlal = n > BEKLENEN_D9
        print(f"Değişmez 9  {'✗' if ihlal else '✓'}  devlet gövdesi çakışması: {n} (gün, çift) birim "
              f"(tavan {BEKLENEN_D9}) — ≥{D9_ESIK:g} derece² · {R['olculen_gun']} gün · gövde {R['damga']}")
        if n < BEKLENEN_D9:
            print(f"            ⚠️ TAVAN GEVŞEK — BEKLENEN_D9 = {n} yapılmalı "
                  f"(aradaki {BEKLENEN_D9 - n} birimlik gerileme GÖRÜNMEZ).")
    if ayrinti or ihlal:
        for gun, a, b, ar in sorted(R["birim"], key=lambda x: -x[3])[:None if ayrinti else 15]:
            print(f"    9  {gun}  {a:<28} ∩ {b:<28} {ar:7.3f} derece²")
    return ihlal


if __name__ == "__main__":
    os.chdir(os.path.join(os.path.dirname(os.path.abspath(__file__)), ".."))
    sys.exit(1 if rapor(ayrinti="--ayrinti" in sys.argv) else 0)
