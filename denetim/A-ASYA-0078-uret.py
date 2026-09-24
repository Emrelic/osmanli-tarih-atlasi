# -*- coding: utf-8 -*-
"""A-ASYA-0078 — data/yerlesimler_a78_asya.js ÜRETİCİ + SINAV.

Girdi : denetim/A-ASYA-0078-noktalar.json  (elle yazılan araştırma sonucu)
Çıktı : data/yerlesimler_a78_asya.js → window.YERLESIMLER_A78_ASYA
Sınav (hepsi --yaz'dan ÖNCE koşar; biri kırmızıysa dosya YAZILMAZ):
  ① künye var mı (devletler.js id) · dönem künye penceresinin içinde mi
     (__BOSLUK__ muaf) · renk (renkler.BOYALAR, harita: anahtarı)
  ② dönem ters / sıfır uzunluk / çakışma yok
  ③ kesintisizlik: (kur | 1281-01-01) → 1923-10-29 arası boşluk yok
  ④ ad benzersiz (norm) + 3 km içinde mevcut nokta yok (bütün girdi)
  ⑤ her dönemde kaynak: dolu
Vekil ölçü (--olc): 1923-09-01'de kutularda, 200 km tavanlı en-yakın-nokta
  sahibi — ÖNCE (mevcut girdi) → SONRA (+ bu dosya). MOTOR DEĞİLDİR (sürtünme,
  kıyı, nehir yok); yalnız yön göstergesi.
Kullanım: py denetim/A-ASYA-0078-uret.py [--yaz] [--olc]
"""
import json
import math
import os
import sys
import unicodedata

sys.stdout.reconfigure(encoding="utf-8", errors="replace")
sys.path.insert(0, "arac")
import girdi  # noqa: E402
import renkler  # noqa: E402

GIRDI = "denetim/A-ASYA-0078-noktalar.json"
CIKTI = "data/yerlesimler_a78_asya.js"
DEGISKEN = "YERLESIMLER_A78_ASYA"
BAS, SON = "1281-01-01", "1923-10-29"
BOSLUK = "__BOSLUK__"
ALAN_SIRA = ["ad", "tur", "lat", "lon", "g", "k", "kur", "s", "isg", "bos", "neden", "kaynak", "not"]


def norm(s):
    s = s.replace("İ", "i").replace("I", "ı").lower()
    s = unicodedata.normalize("NFKD", s)
    return "".join(c for c in s if c.isalnum())


GENEL = {norm(x) for x in ("bölge", "vahan", "kıyısı")}


def ad_kokleri(ad):
    """'Tengyue (Tengchong)' → {'tengyue', 'tengchong'} (genel ekler hariç)"""
    parca = [ad] + [x.strip(" )") for x in ad.replace(")", "").split("(")]
    return {norm(p) for p in parca if norm(p) and norm(p) not in GENEL}


def sinav(N, Y, D):
    hata, uyari = [], []
    kunye = {k["id"]: k for k in (D.values() if isinstance(D, dict) else D)
             if isinstance(k, dict) and k.get("id")}
    for y in N:
        ad = y["ad"]
        bas = y.get("kur") or BAS
        if bas < BAS:
            bas = BAS
        for kat in ("s", "isg"):
            for p in y.get(kat) or []:
                if not (p.get("kaynak") or "").strip():
                    hata.append("%s: %s %s→%s kaynak BOŞ" % (ad, kat, p["f"], p["t"]))
                if p["f"] >= p["t"]:
                    hata.append("%s: %s ters/sıfır %s→%s" % (ad, kat, p["f"], p["t"]))
                did = p["d"]
                if did == BOSLUK:
                    continue
                k = kunye.get(did)
                if not k:
                    hata.append("%s: künye YOK '%s'" % (ad, did))
                    continue
                if p["f"] < (k.get("f") or "0000") or p["t"] > (k.get("t") or "9999"):
                    hata.append("%s: %s %s→%s künye penceresini AŞIYOR (%s→%s)"
                                % (ad, did, p["f"], p["t"], k.get("f"), k.get("t")))
                if (k.get("harita") or did) not in renkler.BOYALAR:
                    hata.append("%s: '%s' RENKSİZ (harita:%s)" % (ad, did, k.get("harita")))
        s = sorted(y.get("s") or [], key=lambda p: p["f"])
        if not s:
            hata.append("%s: s: boş" % ad)
            continue
        if s[0]["f"] != bas:
            hata.append("%s: zincir %s'de başlıyor, beklenen %s" % (ad, s[0]["f"], bas))
        for a, b in zip(s, s[1:]):
            if a["t"] != b["f"]:
                hata.append("%s: zincir kopuk/çakışık %s ↔ %s" % (ad, a["t"], b["f"]))
        if s[-1]["t"] != SON:
            hata.append("%s: zincir %s'de bitiyor, beklenen %s" % (ad, s[-1]["t"], SON))
    # ④ ad + 3 km
    mevcut_ad = {}
    for x in Y:
        for kk in ad_kokleri(x["ad"]):
            mevcut_ad.setdefault(kk, x)
    tam_ad = {x["ad"] for x in Y}
    gorulen = {}
    for y in N:
        if y["ad"] in tam_ad:
            hata.append("%s: TAM AD ÇAKIŞMASI (motor düşürür)" % y["ad"])
        for kk in ad_kokleri(y["ad"]):
            if kk in mevcut_ad:
                x = mevcut_ad[kk]
                d = girdi.km(y["lat"], y["lon"], x["lat"], x["lon"]) if x.get("lat") is not None else 0
                (hata if d < 50 else uyari).append(
                    "%s: AD kökü '%s' mevcut '%s' ile ortak (%.0f km)" % (y["ad"], kk, x["ad"], d))
            if kk in gorulen and gorulen[kk] != y["ad"]:
                hata.append("%s: AD dosya içinde tekrar ('%s')" % (y["ad"], gorulen[kk]))
            gorulen[kk] = y["ad"]
        for x in Y + [z for z in N if z is not y]:
            if x.get("lat") is None:
                continue
            d = girdi.km(y["lat"], y["lon"], x["lat"], x["lon"])
            if d < 3.0:
                hata.append("%s: %.1f km yakınında '%s'" % (y["ad"], d, x["ad"]))
            elif d < 30.0 and x in Y:
                uyari.append("%s: %.0f km'de mevcut '%s'" % (y["ad"], d, x["ad"]))
    return hata, uyari


def js_deger(v):
    return json.dumps(v, ensure_ascii=False)


def js_yaz(N, baslik):
    satir = [baslik, "", "window.%s = [" % DEGISKEN, ""]
    for y in N:
        parca = []
        for k in ALAN_SIRA:
            if k not in y:
                continue
            v = y[k]
            if k in ("s", "isg"):
                ic = ",\n     ".join(
                    "{" + ", ".join("%s:%s" % (a, js_deger(p[a])) for a in ("f", "t", "d", "kesinlik", "enklav", "kaynak") if a in p) + "}"
                    for p in v)
                parca.append("%s:[%s]" % (k, ic))
            else:
                parca.append("%s:%s" % (k, js_deger(v)))
        bas = [x for x in parca if x.split(":", 1)[0] in ("ad", "tur", "lat", "lon", "g", "k", "kur")]
        kalan = [x for x in parca if x not in bas]
        satir.append("{ " + ", ".join(bas) + ",\n  " + ",\n  ".join(kalan) + " },")
        satir.append("")
    satir.append("];")
    return "\n".join(satir) + "\n"


def vekil_olc(Y, N):
    from shapely.geometry import Point, shape, box
    from shapely.ops import unary_union
    ne = json.load(open("veri-kaynak/ne_10m_land.geojson", encoding="utf-8"))
    kara = unary_union([shape(f["geometry"]) for f in ne["features"]])
    G = "1923-09-01"

    def sahip(y):
        if y.get("kur") and y["kur"] > G:
            return None
        for kat in ("s",):
            for p in y.get(kat) or []:
                if p["f"] <= G < p["t"]:
                    return p["d"]
        for p in y.get("d") or []:
            if p["f"] <= G < p["t"]:
                return "OSMANLI"
        return None

    kutular = {"Yunnan-GB": (21.0, 26.5, 97.5, 104.0), "Pamir": (36.5, 39.6, 71.0, 75.6),
               "Borneo": (-4.3, 7.5, 108.5, 119.5), "Timor": (-10.5, -8.1, 123.4, 127.4),
               "Sahalin": (45.8, 54.5, 141.5, 144.8)}
    for kad, (a0, a1, o0, o1) in kutular.items():
        kk = kara.intersection(box(o0, a0, o1, a1))
        pay = [(y["lat"], y["lon"], sahip(y)) for y in Y
               if y.get("lat") is not None and a0 - 3 <= y["lat"] <= a1 + 3 and o0 - 3 <= y["lon"] <= o1 + 3]
        yeni = [(y["lat"], y["lon"], sahip(y)) for y in N]
        sonuc = []
        for liste in (pay, pay + yeni):
            n = bos = 0
            lat = a0 + 0.05
            while lat < a1:
                lon = o0 + 0.05
                while lon < o1:
                    if kk.contains(Point(lon, lat)):
                        n += 1
                        en, es = 1e9, None
                        for (la, lo, s) in liste:
                            d = girdi.km(lat, lon, la, lo)
                            if d < en:
                                en, es = d, s
                        if en > 200 or not es or es == BOSLUK:
                            bos += 1
                    lon += 0.1
                lat += 0.1
            sonuc.append(100.0 * bos / n if n else 0)
        print("  vekil %-10s boş %%%.1f → %%%.1f" % (kad, sonuc[0], sonuc[1]))


def main():
    N = json.load(open(GIRDI, encoding="utf-8"))
    baslik = N.pop(0)["_baslik"] if N and "_baslik" in N[0] else "// A-ASYA-0078"
    Y = girdi.yukle(sessiz=True)
    Y = Y[0] if isinstance(Y, tuple) else Y
    Y = [y for y in Y if y.get("_kaynak") != os.path.basename(CIKTI)]
    D = girdi.oku_devletler()
    hata, uyari = sinav(N, Y, D)
    print("A-ASYA-0078 · %d nokta · hata %d · uyarı %d" % (len(N), len(hata), len(uyari)))
    for h in hata:
        print("  ✗", h)
    for u in uyari:
        print("  ·", u)
    if "--olc" in sys.argv:
        vekil_olc(Y, N)
    if "--yaz" in sys.argv:
        if hata:
            print("!! hata var — YAZILMADI")
            sys.exit(1)
        open(CIKTI, "w", encoding="utf-8", newline="\n").write(js_yaz(N, baslik))
        geri = girdi.oku_dosya(os.path.basename(CIKTI))
        print("yazıldı %s · geri okunan %d kayıt" % (CIKTI, len(geri)))
        if len(geri) != len(N):
            print("!! geri okuma sayısı tutmuyor")
            sys.exit(1)


if __name__ == "__main__":
    main()
