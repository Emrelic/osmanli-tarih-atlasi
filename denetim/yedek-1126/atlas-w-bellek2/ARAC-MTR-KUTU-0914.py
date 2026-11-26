# -*- coding: utf-8 -*-
"""ARAC-MTR-KUTU-0914 — bir ekran görüntüsünün (tarih + kutu) motor çıktısında
BİNME · BOŞLUK · GEÇERSİZLİK · PARÇA dökümü. SALT OKUMA.

Kullanım:
  py denetim/ARAC-MTR-KUTU-0914.py <gun> <lat0> <lat1> <lon0> <lon1> [--etiket X] [--json cikti.json]

Ölçtükleri:
  ① BİNME: farklı iki boyalı katmanın kesişimi (km²). Her binme yüzü, içinde
     durduğu PETEKLERİN (petek_govde.js) o gündeki sahibine göre atanır:
       · "A'nın peteğinde, B taşmış"  → taşan = B
       · her ikisinin de peteği değil → ikisi de taşmış
     İKİNCİ YÖN (D010): taşan katmanın KENDİ peteklerinin birleşimine motorun
     `kapat()` morfolojik kapamasını (0,15°, mitre) uygular ve binmenin yüzde
     kaçını açıkladığını ölçer. Kapama binmeyi açıklıyorsa kusur gövde-başına
     bağımsız şişirmedir (komşudan çıkarım yok).
  ② BOŞLUK: kara − bütün boyalı katmanlar. Yüzler petek sahipliğine göre kovalanır:
       tavan      hiçbir peteğin kapsamadığı kara (A1 200 km tavanı/çöl kesimi)
       sahipsiz   sahipsiz yerleşimin peteği (Değişmez 1 kasıtlı delikleri dahil)
       sahnede-yok  kur:>gün / bit:≤gün yerleşimin peteği (epok devri)
       SAHİPLİ    o gün sahibi olan yerleşimin peteği ama boyanmamış
                  (puan kapısı · çöl eşiği · dikiş) → alt kova: sahibin gövdesine
                  mesafe
  ③ GEÇERSİZLİK: kutudaki her ham (onarımsız) gövde poligonunun is_valid'i.
  ④ PARÇA: her katmanın kutudaki parçaları, içlerindeki yerleşimler ve sahipleri.
"""
import sys, os, json, importlib.util, argparse
from collections import defaultdict
from shapely.geometry import box, Point
from shapely.ops import unary_union
from shapely.validation import explain_validity

_s = importlib.util.spec_from_file_location("mtr", os.path.join(os.path.dirname(os.path.abspath(__file__)), "ARAC-MTR-ORTAK-0914.py"))
M = importlib.util.module_from_spec(_s); _s.loader.exec_module(M)

ESIK_KM2 = 1.0          # altı sayısal kırıntı (motorun mp_koord eşiği ~2 km²)


def kapat(g, yaricap=0.15):
    """uret_petek.py:1264 birebir."""
    if g.is_empty:
        return g
    k = g.buffer(yaricap, join_style=2, mitre_limit=2.0).buffer(0).buffer(-yaricap, join_style=2, mitre_limit=2.0)
    return unary_union([k.buffer(0), g])


def olc(gun, la0, la1, lo0, lo1, etiket="", sessiz=False):
    K = box(lo0, la0, lo1, la1)
    Y = M.yerler()
    kat = M.sahipler(gun, K)
    katK = {k: g.intersection(K) for k, g in kat.items()}
    katK = {k: g for k, g in katK.items() if M.km2(g) > ESIK_KM2}
    pix = M.kutudaki_petekler(K)
    psahip = {i: (M.sahip(Y[i], gun) if M.sahnede(Y[i], gun) else "__SAHNEDE_YOK__") for i in pix}
    R = {"etiket": etiket, "gun": gun, "kutu": [la0, la1, lo0, lo1],
         "kara_km2": None, "katman": {}, "binme": [], "bosluk": {}, "gecersiz": [], "parca": {}}
    kara = M.kara(K)
    R["kara_km2"] = round(M.km2(kara))
    for k, g in katK.items():
        R["katman"][k] = round(M.km2(g))

    # ① BİNME
    anahtar = sorted(katK)
    for a_i in range(len(anahtar)):
        for b_i in range(a_i + 1, len(anahtar)):
            A, B = anahtar[a_i], anahtar[b_i]
            ab = katK[A].intersection(katK[B])
            akm = M.km2(ab)
            if akm <= ESIK_KM2:
                continue
            # atama: binme yüzünün her parçası hangi sahibin peteğinde
            kova = defaultdict(float)
            for parca in M.parcalar(ab):
                kalan = parca
                for i in pix:
                    x = parca.intersection(M.petek(i))
                    a = M.km2(x)
                    if a > 0:
                        kova[psahip[i] or "__SAHIPSIZ__"] += a
                        kalan = kalan.difference(M.petek(i))
                kova["__PETEKSIZ__"] += M.km2(kalan)
            # ikinci yön: taşanın kendi petek birleşimine kapat()
            aciklama = {}
            for T in (A, B):
                sahip_T = {"OSMANLI": {"OSMANLI"}, "OSMANLI-tabi": {"OSMANLI-tabi"}}.get(T, {T})
                kendi = [M.petek(i) for i in pix if psahip[i] in sahip_T]
                if not kendi:
                    aciklama[T] = None; continue
                ham = unary_union(kendi)
                kap = kapat(ham).intersection(K)
                fark = kap.difference(ham)
                aciklama[T] = round(100 * M.km2(ab.intersection(fark)) / akm, 1)
            R["binme"].append({"a": A, "b": B, "km2": round(akm, 1),
                               "petek_sahibine_gore": {k: round(v, 1) for k, v in kova.items() if v > 0.5},
                               "kapat_aciklar_yuzde": aciklama,
                               "temsil": [round(ab.representative_point().y, 3), round(ab.representative_point().x, 3)]})

    # ② BOŞLUK
    boyali = unary_union(list(katK.values())) if katK else None
    bos = kara.difference(boyali) if boyali is not None else kara
    kova = defaultdict(float); ornek = defaultdict(list)
    bos_kalan = bos
    for i in pix:
        x = bos.intersection(M.petek(i))
        a = M.km2(x)
        if a <= 0.05:
            continue
        s = psahip[i]
        if s == "__SAHNEDE_YOK__":
            k = "sahnede-yok"
        elif s is None:
            k = "sahipsiz"
        else:
            k = "SAHIPLI"
        kova[k] += a
        ornek[k].append((round(a, 1), Y[i]["ad"], s))
        bos_kalan = bos_kalan.difference(M.petek(i))
    kova["tavan(petek-yok)"] = M.km2(bos_kalan)
    # SAHİPLİ boşluğun alt kovası: sahibinin gövdesine en yakın mesafe.
    #   ≤ 3,5 km  → DİKİŞ (seyrelt tol 0,03° ≈ 3,3 km ölçeğinde kılcal şerit)
    #   > 3,5 km  → gövde o peteğin o kısmını HİÇ boyamamış (puan kapısı / çöl eşiği)
    dikis = uzak = 0.0
    for i in pix:
        s = psahip[i]
        if s in (None, "__SAHNEDE_YOK__"):
            continue
        x = bos.intersection(M.petek(i))
        if M.km2(x) <= 0.05:
            continue
        sg = kat.get(s)
        for p in M.parcalar(x):
            a = M.km2(p)
            if sg is None or sg.is_empty:
                uzak += a; continue
            # parçanın gövdeden en uzak noktası ≈ Hausdorff yerine temsil+genişlik: iç tampon sınavı
            if p.buffer(-0.016).is_empty:          # ≈1,8 km yarı-genişlikten ince ⇒ şerit
                dikis += a
            else:
                uzak += a
    R["bosluk"] = {"toplam_km2": round(M.km2(bos), 1),
                   "kova_km2": {k: round(v, 1) for k, v in kova.items()},
                   "SAHIPLI_alt": {"serit(<~3,5km genislik)": round(dikis, 1), "genis": round(uzak, 1)},
                   "ornek": {k: sorted(v, reverse=True)[:8] for k, v in ornek.items()}}

    # ③ GEÇERSİZLİK (ham, onarımsız)
    o_ham, v_ham, _ = M.osmanli(gun, onar=False)
    hamlar = [("OSMANLI", o_ham or []), ("OSMANLI-tabi", v_ham or [])]
    for k, (gg, _) in M.yabancilar(gun, K, onar=False).items():
        hamlar.append((k, gg))
    ncoz = 0
    for k, ps in hamlar:
        for q in ps:
            if not q.envelope.intersects(K):
                continue
            ncoz += 1
            if not q.is_valid:
                neden = explain_validity(q)
                import re as _re
                m = _re.search(r"\[([-\d.]+) ([-\d.]+)\]", neden)
                kutu_ici = bool(m and K.contains(Point(float(m.group(1)), float(m.group(2)))))
                R["gecersiz"].append({"katman": k, "neden": neden[:120], "kutu_ici": kutu_ici,
                                      "km2": round(M.km2(q.buffer(0)))})
    R["sinanan_ham_poligon"] = ncoz

    # ④ PARÇA
    for k, g in katK.items():
        L = []
        for p in M.parcalar(g):
            a = M.km2(p)
            if a < 50:
                continue
            ic = [(Y[i]["ad"], M.sahip(Y[i], gun)) for i in range(len(Y))
                  if p.contains(Point(Y[i]["lon"], Y[i]["lat"]))]
            L.append({"km2": round(a), "yerlesim": ic[:6], "yerlesim_n": len(ic),
                      "temsil": [round(p.representative_point().y, 2), round(p.representative_point().x, 2)]})
        R["parca"][k] = sorted(L, key=lambda r: -r["km2"])[:10]

    if not sessiz:
        print(json.dumps(R, ensure_ascii=False, indent=1))
    return R


if __name__ == "__main__":
    ap = argparse.ArgumentParser()
    ap.add_argument("gun"); ap.add_argument("la0", type=float); ap.add_argument("la1", type=float)
    ap.add_argument("lo0", type=float); ap.add_argument("lo1", type=float)
    ap.add_argument("--etiket", default=""); ap.add_argument("--json")
    a = ap.parse_args()
    R = olc(a.gun, a.la0, a.la1, a.lo0, a.lo1, a.etiket)
    if a.json:
        json.dump(R, open(a.json, "w", encoding="utf-8"), ensure_ascii=False, indent=1)
