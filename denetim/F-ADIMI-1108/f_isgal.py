#!/usr/bin/env py
# -*- coding: utf-8 -*-
"""F-ADIMI-1108 — İŞGAL DESEN KATMANI ölçümü (salt okur).

Soru: yerleşimin `isg:` dönemi başlangıç/bitiş gününde, haritanın işgal örtüsünde
(`window.ISGALLER`, data/devirler.js; js/app.js bunu taralı çizer) yerleşimin KOORDİNATI o
işgalcinin örtüsü içinde mi ve gün değişince örtü açılıp kapanıyor mu?
BÜTÜN `isg:` dönemleri ölçülür (örnek değil). Kullanım: py denetim/F-ADIMI-1108/f_isgal.py [--etiket kosu35]
Sınıflar (her uç için): EVET = f-1 örtüsüz → f örtülü (bitiş için tersi) · KAYMA = ±3 günde · YOK(+neden) · ÖLÇÜLEMEDİ.
"""
import argparse, collections, datetime, hashlib, json, os, re, subprocess, sys

BU = os.path.dirname(os.path.abspath(__file__))
KOK = os.path.abspath(os.path.join(BU, "..", ".."))
sys.path.insert(0, os.path.join(KOK, "arac"))
import girdi  # noqa


def gun(s):
    try:
        y, m, d = (int(x) for x in s.split("-"))
        return datetime.date(y, m, d).toordinal()
    except Exception:
        return None


def pip_ring(r, x, y):
    ic = False
    j = len(r) - 1
    for i in range(len(r)):
        xi, yi = r[i][0], r[i][1]
        xj, yj = r[j][0], r[j][1]
        if (yi > y) != (yj > y) and x < (xj - xi) * (y - yi) / (yj - yi) + xi:
            ic = not ic
        j = i
    return ic


def pip_multi(parca, x, y, tol=0.0):
    for poly in parca:
        d = poly[0]
        xs = [p[0] for p in d]
        ys = [p[1] for p in d]
        if x < min(xs) - tol or x > max(xs) + tol or y < min(ys) - tol or y > max(ys) + tol:
            continue
        if pip_ring(d, x, y) and not any(pip_ring(h, x, y) for h in poly[1:]):
            return True
        if tol:
            j = len(d) - 1
            for i in range(len(d)):
                ax, ay, bx, by = d[j][0], d[j][1], d[i][0], d[i][1]
                dx, dy = bx - ax, by - ay
                l2 = dx * dx + dy * dy
                t = ((x - ax) * dx + (y - ay) * dy) / l2 if l2 else 0
                t = max(0, min(1, t))
                if (ax + t * dx - x) ** 2 + (ay + t * dy - y) ** 2 <= tol * tol:
                    return True
                j = i
    return False


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--etiket", default="")
    a = ap.parse_args()
    yol = os.path.join(KOK, "data", "devirler.js")
    s = open(yol, encoding="utf-8").read()
    i = s.index("window.ISGALLER = ") + len("window.ISGALLER = ")
    IG, _ = json.JSONDecoder().raw_decode(s[i:])
    for g in IG:
        g["_f"], g["_t"] = gun(g["f"]), gun(g["t"])
    TOL = 0.04
    Y = girdi.yukle(sessiz=True)

    def orte(ad_id, x, y, z, tol):
        """z gününde yerleşim noktası `ad_id` işgalcisinin örtüsünde mi (başka işgalci ayrı)."""
        for g in IG:
            if g["id"] == ad_id and g["_f"] <= z < g["_t"] and pip_multi(g["parca"], x, y, tol):
                return True
        return False

    def hic(ad_id, x, y, tol):
        return any(g["id"] == ad_id and pip_multi(g["parca"], x, y, tol) for g in IG)

    satir = []
    for y in Y:
        for p in y.get("isg") or []:
            isg_id = p.get("d")
            try:
                lat, lon = float(y["lat"]), float(y["lon"])
            except Exception:
                continue
            for uc, tarih in (("bas", p["f"]), ("bit", p["t"])):
                z = gun(tarih)
                if z is None:
                    satir.append(dict(ad=y["ad"], d=isg_id, uc=uc, tarih=tarih, sinif="OLCULEMEDI", neden="tarih çözülemedi"))
                    continue
                oc1 = tarih.endswith("-01-01")
                # kontrol: tolerans yok önce, gövde dışıysa 4 km
                def durum(tol):
                    return {o: orte(isg_id, lon, lat, z + o, tol) for o in range(-4, 4)}
                tol = 0.0
                D = durum(0.0)
                if not any(D.values()):
                    D2 = durum(TOL)
                    if any(D2.values()):
                        D, tol = D2, TOL
                # beklenen: bas → -1 yok, 0 var ; bit → -1 var, 0 yok
                bek_once, bek_sonra = (False, True) if uc == "bas" else (True, False)
                ardisik = any(q is not p and q.get("d") == isg_id and ((uc == "bit" and q["f"] == p["t"]) or (uc == "bas" and q["t"] == p["f"]))
                              for q in (y.get("isg") or []))
                if D[-1] == bek_once and D[0] == bek_sonra:
                    sinif, neden = "EVET", ""
                elif ardisik and D[-1] and D[0]:
                    sinif, neden = "SUREKLI", "aynı işgalcinin ardışık dönemi; örtü kesintisiz (beklenen)"
                else:
                    kayma = [o for o in range(-3, 4) if o != 0 and D.get(o - 1) == bek_once and D.get(o) == bek_sonra]
                    if kayma:
                        sinif, neden = "KAYMA", "kayma %+d gün" % kayma[0]
                    elif not any(D.values()):
                        gv = hic(isg_id, lon, lat, TOL)
                        neden = ("nokta işgalcinin HİÇBİR örtüsünde değil (peteği örtüye girmemiş)" if not gv
                                 else "nokta örtüde ama bu dönem penceresinde örtü yok (başka tarih/aralık)")
                        if not any(g["id"] == isg_id for g in IG):
                            neden = "bu işgalcinin hiç örtüsü yok (ISGALLER'de id yok)"
                        sinif = "YOK"
                    else:
                        sinif = "YOK"
                        neden = ("yıl-temsili (YYYY-01-01); örtü başka günde değişiyor" if oc1 else
                                 "örtü %s ama gün %s" % ("açık" if D[0] else "kapalı", "uyuşmuyor"))
                satir.append(dict(ad=y["ad"], d=isg_id, uc=uc, tarih=tarih, ocak1=oc1, yak=bool(tol), sinif=sinif, neden=neden,
                                  kaynak_var=bool(p.get("kaynak"))))
    n = collections.Counter(r["sinif"] for r in satir)
    by = {uc: collections.Counter(r["sinif"] for r in satir if r["uc"] == uc) for uc in ("bas", "bit")}
    byd = collections.defaultdict(collections.Counter)
    for r in satir:
        byd[r["d"]][r["sinif"]] += 1
    yok = collections.Counter(r["neden"] for r in satir if r["sinif"] == "YOK")
    git = subprocess.run(["git", "rev-parse", "HEAD"], capture_output=True, text=True, cwd=KOK).stdout.strip()
    sha = hashlib.sha256(open(yol, "rb").read()).hexdigest()
    cikti = dict(meta=dict(taban=git, devirler_sha=sha, zaman=datetime.datetime.now().isoformat(timespec="seconds"),
                           orte_sayi=len(IG), isg_donem=sum(len(y.get("isg") or []) for y in Y)),
                 toplam=dict(n), uc={k: dict(v) for k, v in by.items()},
                 isgalci={k: dict(v) for k, v in byd.items()}, yok_neden=dict(yok), satirlar=satir)
    ek = ("-" + a.etiket) if a.etiket else ""
    with open(os.path.join(BU, "sonuc-isgal%s.json" % ek), "w", encoding="utf-8") as f:
        json.dump(cikti, f, ensure_ascii=False)
    print("isg dönem:", cikti["meta"]["isg_donem"], "· uç:", len(satir), "· örtü:", len(IG))
    print(dict(n))
    print("başlangıç", dict(by["bas"]), "· bitiş", dict(by["bit"]))
    for k, v in sorted(byd.items(), key=lambda kv: -sum(kv[1].values()))[:12]:
        print(" ", k, dict(v))
    for k, v in yok.most_common(8):
        print(" YOK:", v, k)


if __name__ == "__main__":
    main()
