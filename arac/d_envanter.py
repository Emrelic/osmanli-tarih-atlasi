"""D ADIMI (b) envanteri: bir hücrede (tarih aralığı x kıta kutusu) `s:` kırılma
birimlerini sınıflar: YER anılarak kapalı / YALNIZ TARAF / MADDE YOK.

Kullanım:
  py arac/d_envanter.py --f 1500-01-01 --t 1800-01-01 --kutu avrupa --cikti x.json

Mantık denetle.degismez2(yer_sarti=True) ile aynı çağrıları kullanır
(_2s_yeri_aniyor / _2s_tarafi_aniyor); hüküm üretmez, yalnız ölçer.
Çıktı: madde -> yalnız-taraf birimleri (ajan girdisi). Veri yazmaz.
"""
import argparse, json, os, sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import denetle as D

KUTULAR = {  # (lat_min, lat_max, lon_min, lon_max) kaba; sınırdaki yerler elle bakılır
    "avrupa": (34.5, 72.0, -25.0, 45.0),
    "asya": (-12.0, 82.0, 26.0, 180.0),
    "afrika": (-36.0, 38.0, -20.0, 52.0),
    "amerika": (-56.0, 84.0, -170.0, -30.0),
    "okyanusya": (-50.0, 0.0, 110.0, 180.0),
    "hepsi": (-90, 90, -180, 180),
}


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--f", required=True)
    ap.add_argument("--t", required=True)
    ap.add_argument("--kutu", default="hepsi")
    ap.add_argument("--cikti", required=True)
    a = ap.parse_args()
    la0, la1, lo0, lo1 = KUTULAR[a.kutu]

    Y = D.yerlesimleri_yukle()
    O = D.olaylari_yukle()
    Yc = [y for y in Y if y.get("_kaynak") not in D.KUYRUK_DOSYALARI]
    kir, _ = D.degismez2(Yc, O, ("s",), yer_sarti=True)

    ol = []
    for o in O:
        k = {"g": D.gun_no(o["t"]), "b": o["b"], "yer": o.get("yer_id") or o.get("yer"),
             "t": o["t"], "yer_id": o.get("yer_id") or ""}
        met = " ".join([o.get("b") or "", o.get("yer") or "", o.get("d") or ""])
        k["nrm"] = D._2s_norm(met)
        k["kor"] = D._2s_kor(met)
        k["nrm_yer"] = D._2s_norm(o.get("yer") or "")
        k["nrm_b"] = D._2s_norm(o.get("b") or "")
        k["nrm_y"] = D._2s_norm(" ".join([o.get("b") or "", o.get("yer") or ""]))
        ol.append(k)
    Y_KOK = {y["ad"]: D._2s_norm(D.re.sub(r"\s*\(.*?\)", "", y["ad"] or "").strip()) for y in Y}
    Y_MERKEZ = {y["ad"]: (y.get("m") or "", D._2s_norm(y.get("m") or "")) for y in Y}
    konum = {y["ad"]: (y.get("lat"), y.get("lon")) for y in Y}

    sayac = {"yer": 0, "yalniz_taraf": 0, "madde_yok": 0}
    maddeler = {}   # (t, baslik) -> birimler
    yok = []
    for d in sorted(kir):
        if not (a.f <= d < a.t):
            continue
        gd = D.gun_no(d)
        yakin = [o for o in ol if abs(o["g"] - gd) <= 30]
        for ad in sorted(kir[d]["ad"]):
            lat, lon = konum.get(ad, (None, None))
            if lat is None or not (la0 <= lat <= la1 and lo0 <= lon <= lo1):
                continue
            sah = {ad: kir[d]["sahip"].get(ad, {})}
            yer = [o for o in yakin if D._2s_yeri_aniyor(o, {ad}, Y_KOK, Y_MERKEZ)]
            if yer:
                sayac["yer"] += 1
                continue
            taraf = [o for o in yakin if D._2s_tarafi_aniyor(o, sah)]
            birim = {"yer": ad, "gun": d, "eski": sah[ad].get("eski", ""),
                     "yeni": sah[ad].get("yeni", ""), "lat": lat, "lon": lon}
            if taraf:
                sayac["yalniz_taraf"] += 1
                en = min(taraf, key=lambda o: abs(o["g"] - gd))
                maddeler.setdefault((en["t"], en["b"]), []).append(birim)
            else:
                sayac["madde_yok"] += 1
                yok.append(birim)

    cikti = {
        "aralik": [a.f, a.t], "kutu": a.kutu, "sayac": sayac,
        "maddeler": [{"t": t, "b": b, "birimler": v} for (t, b), v in
                     sorted(maddeler.items(), key=lambda kv: -len(kv[1]))],
        "madde_yok": yok,
    }
    with open(a.cikti, "w", encoding="utf-8") as f:
        json.dump(cikti, f, ensure_ascii=False, indent=1)
    print(a.kutu, a.f, a.t, sayac, "madde:", len(maddeler))


if __name__ == "__main__":
    main()
