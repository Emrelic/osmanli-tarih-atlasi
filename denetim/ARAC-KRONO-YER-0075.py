# -*- coding: utf-8 -*-
"""ARAC-KRONO-YER-0075 — noktası işaretlenmemiş kronoloji maddelerinin SAYIMI (H-0020/H-0021).

Koşum (depo kökünden):  py -X utf8 denetim/ARAC-KRONO-YER-0075.py
Yalnız OKUR; data/ ve arac/ dizinlerine yazmaz. Çıktı: denetim/KRONO-YER-0075-HAM.json

ÖLÇÜT — js/app.js ile AYNI (yeniden yorumlanmadı):
  konum çözülür  = yer_kon (2 elemanlı)  YA DA  yer_id `sehirler` içinde BİREBİR ad
                   (ya da adın " (" öncesi)  [olayKonumu, app.js]
  odak beyanı    = odak_yer | odak_kimlik | odak_kutu_kaynak | kapsam_genis  [maddeOdakKutusu]
  NOKTASIZ       = konum çözülmüyor.
`sehirler` = YERLESIMLER'in d/v/s alanlarından en az biri dolu olan kayıtları (ISARET_KAYNAK).
"""
import glob
import io
import json
import os
import re
import sys
from collections import Counter

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8", errors="replace")
KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(KOK, "arac"))
import denetle  # noqa: E402

Y = denetle.yerlesimleri_yukle()
SEH = [y for y in Y if (y.get("d") or y.get("v") or y.get("s"))]
AD = {}
for y in SEH:
    ad = y["ad"]
    AD.setdefault(ad, y)
    AD.setdefault(ad.split(" (")[0], y)


def coz(m):
    k = m.get("yer_kon")
    if k and len(k) == 2:
        return "yer_kon"
    yid = m.get("yer_id")
    if yid and yid in AD:
        return "yer_id"
    return None


def odak(m):
    return [a for a in ("odak_yer", "odak_kimlik", "odak_kutu_kaynak", "kapsam_genis") if m.get(a)]


def evren_a():
    out = []
    for yol in sorted(glob.glob(os.path.join(KOK, "data", "olaylar*.js"))):
        js = open(yol, encoding="utf-8").read()
        mm = re.search(r"window\.(OLAYLAR\w*)\s*=", js)
        if not mm:
            continue
        for m in denetle.oku_pencere(yol, mm.group(1)):
            m["_dosya"] = os.path.basename(yol)
            out.append(m)
    return out


def evren_b():
    out = []
    for yol in sorted(glob.glob(os.path.join(KOK, "data", "kronoloji_*.js"))):
        js = open(yol, encoding="utf-8").read()
        mm = re.search(r"window\.(KRONOLOJI_\w+)\s*=", js)
        if not mm:
            continue
        try:
            for m in denetle.oku_pencere(yol, mm.group(1)):
                m["_dosya"] = os.path.basename(yol)
                out.append(m)
        except Exception as e:  # sessiz eleme YOK
            print("  ! okunamadı", yol, e)
    return out


def ozet(ad, M):
    c = Counter()
    for m in M:
        z = coz(m)
        if z:
            c["bagli_" + z] += 1
        elif m.get("yer_id"):
            c["yer_id_COZULMUYOR"] += 1
        else:
            o = odak(m)
            c["noktasiz_odaklı" if o else "noktasiz_odaksiz"] += 1
    print(f"\n[{ad}] {len(M)} madde")
    for k, v in sorted(c.items()):
        print(f"   {k:28s} {v}")
    return c


# ── SINIFLAMA ────────────────────────────────────────────────────────────────
import importlib.util
_sp = importlib.util.spec_from_file_location("normal0903", os.path.join(KOK, "denetim", "ARAC-NORMAL-0903.py"))
_nm = importlib.util.module_from_spec(_sp)
_sp.loader.exec_module(_nm)
norm = _nm.norm

# norm(ad) -> [atlas adı, ...]  (tam ad + " (" öncesi + parantez içi ayrı anahtar)
NORM_AD = {}
for y in SEH:
    ad = y["ad"]
    anahtarlar = {norm(ad), norm(ad.split(" (")[0])}
    m_ = re.search(r"\(([^)]+)\)", ad)
    if m_:
        anahtarlar.add(norm(m_.group(1)))
    for a in anahtarlar:
        if a and ad not in NORM_AD.setdefault(a, []):
            NORM_AD[a].append(ad)

GENEL = re.compile(r"(?i)^\(?\s*(genel|osmanl[ıi].*|imparatorluk.*|t[üu]m .*|her yer|—|-)\s*\)?$")


def parcala(yer):
    """yer: metnini aday ad parçalarına böl (virgül · noktalı virgül · '/' · ' ve ' · '→')."""
    if not yer:
        return []
    out = []
    for p in re.split(r"[,;/→]| ve ", yer):
        p = p.strip()
        if p:
            out.append(p)
    return out


def aday_bul(yer):
    """yer metninden atlas adı adayları; sıra korunur. Bulanık eşleşme YOK — yalnız norm() eşitliği."""
    adaylar = []
    for p in parcala(yer):
        cand = [p, p.split(" (")[0]]
        m_ = re.search(r"\(([^)]+)\)", p)
        if m_:
            cand.append(m_.group(1))
        for c in cand:
            n = norm(c)
            if n in NORM_AD:
                adaylar.append({"parca": p, "atlas": NORM_AD[n]})
                break
    return adaylar


def yer_id_dizgisi(atlas_ad):
    """olayKonumu'nun çözeceği dizgi: kısa ad (" (" öncesi) TEKİL ise o, değilse tam ad."""
    kisa = atlas_ad.split(" (")[0]
    kisa_sayi = sum(1 for y in SEH if y["ad"].split(" (")[0] == kisa)
    return kisa if kisa_sayi == 1 else atlas_ad


def siniflandir(m):
    """Noktasız madde -> sınıf. SAF VERİ (kaynak okumaz; kaynak taraması ayrı iştir)."""
    yer = (m.get("yer") or "").strip()
    ad = aday_bul(yer)
    kg = bool(m.get("kapsam_genis"))
    if not yer or GENEL.match(yer):
        return ("D_DEVLET_BUTUNU" if kg else "E_YERSIZ"), []
    if len(ad) == 1 and norm(parcala(yer)[0]) == norm(ad[0]["parca"]):
        return "A_YERI_BELLI_TEK", ad
    if len(ad) == 1:
        return "A2_YERI_BELLI_ILK_PARCA_DEGIL", ad
    if len(ad) >= 2:
        return "B_YERI_BELLI_COK", ad
    return ("D_DEVLET_BUTUNU" if kg else "C_BOLGESEL_ATLASTA_YOK"), []


if __name__ == "__main__":
    A = evren_a()
    B = evren_b()
    ozet("A · olaylar*.js (Osmanlı listesi)", A)
    ozet("B · kronoloji_*.js (devlet kronolojileri)", B)
    for ad_, M_ in (("A", A), ("B", B)):
        c_ = Counter()
        for m in M_:
            if coz(m):
                continue
            c_[siniflandir(m)[0]] += 1
        print(f"  [{ad_}] noktasız sınıf dağılımı: {dict(sorted(c_.items()))}")
    json.dump({"A": A, "B": B}, open(os.path.join(KOK, "denetim", "_krono0075_ham.json"), "w", encoding="utf-8"),
              ensure_ascii=False)
