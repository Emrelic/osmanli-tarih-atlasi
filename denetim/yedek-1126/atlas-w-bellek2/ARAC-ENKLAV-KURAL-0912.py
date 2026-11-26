# -*- coding: utf-8 -*-
"""
ARAC-ENKLAV-KURAL-0912.py — KITA 2, 12 Eylül 2026 · Ⓑ ENKLAV KURALI (tahta M-3566)

GOREV OLCUM, HUKUM DEGIL. Emre'nin dort kurali:
  ① Devletin topraklari ARASINDA kalan bosluk, icinde yerlesim/asiret/siyasi
     yapi yoksa enklav DEGIL.
  ② Ana kutleden ayrik + arada BASKA devletin sehri/bolgesi/asiret denetimi
     VAR -> GERCEK ENKLAV, asla birlestirilmez.
  ③ Kopuk + arada hicbir bilinen yapi yok (bos arazi):
     (a) o devlete ait ARA YERLESIM var mi (veride var ama zincire GIRMEMIS)?
         -> varsa zincire kat, enklav KAPANIR. EN DEGERLI KOVA.
     (b) yoksa -> BIRLESTIR sarti: iki bolge arasi < 200 km.
  ④ (algoritma versiyonu notu, bu olcumu etkilemiyor)

D023 UYGUNLUGU: kendi ayristiricimi yazmadim. `arac/denetle.py`nin KENDI
`degismez7()` fonksiyonunu import edip CALISTIRIYORUM; ustune yalniz "arada
ne var" sorusunu mekanik hale getiren bir KORIDOR testi ekliyorum. Sahiplik
(sahip(i,g)) mantigi denetle.py:2379-2383 ile BIREBIR ayni (kucuk, disari
cikarilmamis bir kapanis oldugu icin burada AYNEN tekrarlandi — degistirilmedi).

KORIDOR TANIMI (secim + gerekce + alternatif, sartname madde ③):
  SECIM: nokta-DOGRU PARCASI (segment) uzakligi. Ada'nin sinanan noktasi
  (p0) ile en yakin ayni-sahip nokta (p1=ana) arasinda DOGRU cizgi cekilir;
  her ucuncu nokta k icin bu cizgiye olan EN KISA UZAKLIK (segment disina
  tasarsa UC NOKTAYA uzaklik) hesaplanir. Esik = D7_BAG_KM (150 km) —
  denetle.py'nin KENDI "bagli sayilir" esigiyle AYNI sayi kullanildi: baska
  bir esik icat etmek yeni bir OYDURULMUS parametre olurdu, bu ZATEN
  projenin "iki nokta baglidir" tanimidir.
  ⚠️ ALTERNATIF ELENDI: "en kisa kara yolu" (yol agi) veri yok, kurulamaz.
  "tampon poligon" (petek/Voronoi) HENUZ URETILMEMIS bu tur icin (uret_petek
  motoru TEK ELDE, M-3566). Duz-cizgi + sabit koridor genisligi, MEVCUT
  VERIYLE hesaplanabilen EN BASIT mekanik tanim ve `D7_BAG_KM` ile
  TUTARLI — sartnamenin istedigi "sec, savun, alternatifini soyle" burada.

CIKTI: denetim/OLCUM-ENKLAV-KURAL-0912.json + .md
"""
import sys, os, json, math
sys.path.insert(0, os.path.join(os.path.dirname(__file__), "..", "arac"))
import denetle  # D023: kendi ayristiricimi yazmadim, ONUN degismez7'sini kullaniyorum

D7_BAG_KM = denetle.D7_BAG_KM  # 150.0 — koridor yari genisligi olarak da kullanildi
D7_ADA_MUAF = denetle.D7_ADA_MUAF

R = 6371.0

def d7km(a, b):
    return denetle._d7_km(a, b)

def to_xyz(lat, lon):
    # kucuk-olcek duzlemsel yaklasim YETERLI (kita-ici mesafeler, <5000 km)
    # enlem/boylami km'ye cevirirken boylam enlemle olceklenir
    lat_km = lat * 111.0
    lon_km = lon * 111.0 * math.cos(math.radians(lat))
    return lat_km, lon_km

def nokta_segment_km(p, a, b):
    """p noktasinin (a,b) dogru parcasina EN KISA uzakligi, km. Duzlemsel
    yaklasim (D7 zaten ayni yaklasimla calisiyor, haversine ile TUTARLI
    kalmasi icin km donusumu yapilip Oklid kullanildi)."""
    px, py = to_xyz(*p)
    ax, ay = to_xyz(*a)
    bx, by = to_xyz(*b)
    dx, dy = bx - ax, by - ay
    L2 = dx * dx + dy * dy
    if L2 < 1e-9:
        return d7km(p, a)
    t = ((px - ax) * dx + (py - ay) * dy) / L2
    t = max(0.0, min(1.0, t))
    cx, cy = ax + t * dx, ay + t * dy
    return math.hypot(px - cx, py - cy)


def sahip_tablosu(Y):
    """denetle.degismez7 icindeki DON/sahip mantigi BIREBIR — kopyalandi
    cunku fonksiyon icinde kapali (disari aktarilmiyor). D023: yeni bir
    YORUM eklenmedi, ayni kural tekrarlandi."""
    DON = []
    for y in Y:
        d = []
        for kat in ("d", "v"):
            for p in (y.get(kat) or []):
                if p.get("f") and p.get("t"):
                    d.append((p["f"], p["t"], "OSMANLI"))
        for p in (y.get("s") or []):
            if p.get("f") and p.get("t") and p.get("d"):
                d.append((p["f"], p["t"], p["d"]))
        DON.append(d)

    def sahip(i, g):
        for f, t, s in DON[i]:
            if f <= g < t:
                return s
        return None
    return sahip


def main():
    print("Veri okunuyor (denetle.yerlesimleri_yukle) ...")
    Y = denetle.yerlesimleri_yukle()
    ix_ad = {y["ad"]: i for i, y in enumerate(Y)}
    print(f"  {len(Y)} yerlesim")

    print("degismez7 kosuluyor (denetle.py'nin KENDI fonksiyonu) ...")
    ihlaller, muaf = denetle.degismez7(Y)
    print(f"  {len(ihlaller)} ihlal · muaf: {muaf}")

    sahip = sahip_tablosu(Y)

    kovalar = {"②": [], "③a": [], "③b_altinda200": [], "③b_ustunde200": [], "olculemedi": []}
    uc_a_liste = []

    for ih in ihlaller:
        gun = ih["gun"]
        s = ih["sahip"]
        ada_adlari = set(ih["ada"])
        i = ix_ad.get(ih["yerlesim"])
        ana_ad = ih["ana"]
        ana_km = ih["ana_km"]
        if i is None or ana_ad is None or ana_km is None:
            kovalar["olculemedi"].append(ih)
            continue
        j = ix_ad.get(ana_ad)
        if j is None:
            kovalar["olculemedi"].append(ih)
            continue
        p0 = (Y[i]["lat"], Y[i]["lon"])
        p1 = (Y[j]["lat"], Y[j]["lon"])

        yabanci_bulundu = None
        kendi_bulundu = []
        for k, yk in enumerate(Y):
            if k == i or k == j or yk["ad"] in ada_adlari:
                continue
            sk = sahip(k, gun)
            if sk is None:
                continue  # bos/dolgu nokta -- "siyasi yapi" sayilmaz
            dk = nokta_segment_km((yk["lat"], yk["lon"]), p0, p1)
            if dk <= D7_BAG_KM:
                if sk == s:
                    kendi_bulundu.append((yk["ad"], round(dk, 1)))
                elif yabanci_bulundu is None:
                    yabanci_bulundu = (yk["ad"], sk, round(dk, 1))

        rec = {**ih, "koridor_yabanci": yabanci_bulundu,
               "koridor_kendi_n": len(kendi_bulundu),
               "koridor_kendi_ornek": kendi_bulundu[:5]}

        if yabanci_bulundu:
            kovalar["②"].append(rec)
        elif kendi_bulundu:
            kovalar["③a"].append(rec)
            uc_a_liste.append((ih["yerlesim"], s, gun, kendi_bulundu[:3]))
        elif ana_km <= 200:
            kovalar["③b_altinda200"].append(rec)
        else:
            kovalar["③b_ustunde200"].append(rec)

    print()
    print("=" * 70)
    print("DAGILIM (650 ihlal Emre'nin 4 kovasina)")
    print("=" * 70)
    toplam = sum(len(v) for v in kovalar.values())
    for k, v in kovalar.items():
        print(f"  {k:20s} {len(v)}")
    print(f"  {'TOPLAM':20s} {toplam}  (girdi: {len(ihlaller)})")

    print()
    print("③(a) EN DEGERLI KOVA — adiyla:")
    for ad, s, gun, orn in uc_a_liste[:60]:
        print(f"  {gun}  {ad:35s} sahip={s:20s} -> {orn}")
    if len(uc_a_liste) > 60:
        print(f"  ... {len(uc_a_liste)-60} tane daha")

    print()
    print("200 km esiginin BUGUNKU veride ne kestigi:")
    print(f"  <=200 km (③b altinda, BIRLESTIRILEBILIR): {len(kovalar['③b_altinda200'])}")
    print(f"  >200 km  (③b ustunde, BIRLESMEZ)         : {len(kovalar['③b_ustunde200'])}")

    # ---- CEBEL MERRE SINAV VAKASI ----
    print()
    print("=" * 70)
    print("CEBEL MERRE SINAV VAKASI (12.950/24.270, Darfur)")
    print("=" * 70)
    cm_kayitlar = [ih for ih in ihlaller if ih["yerlesim"] == "Cebel Merre"]
    if not cm_kayitlar:
        print("  Cebel Merre BUGUNKU 650 ihlalin icinde YOK (muaf olabilir ya da ada>5).")
        # niye muaf/haric oldugunu ayrica olc
        i = ix_ad.get("Cebel Merre")
        if i is not None:
            print(f"  Cebel Merre indeksi: {i}, sahip donemleri (d/v/s):")
            y = Y[i]
            print("    d:", y.get("d"), "v:", y.get("v"), "s:", y.get("s"))
    else:
        for ih in cm_kayitlar:
            print(f"  {ih['gun']}  sahip={ih['sahip']}  kova(eski)={ih['kova']}  ana={ih['ana']} {ih['ana_km']} km")
            for kv, liste in kovalar.items():
                for r in liste:
                    if r is ih or (r.get("yerlesim") == ih["yerlesim"] and r.get("gun") == ih["gun"]):
                        print(f"    -> BENIM SINIFLANDIRMAM: {kv}")

    # yazdir
    out = {
        "toplam_ihlal": len(ihlaller),
        "muaf": muaf,
        "dagilim": {k: len(v) for k, v in kovalar.items()},
        "uc_a_listesi": [{"yerlesim": a, "sahip": s, "gun": g, "koridor_ornek": o}
                          for a, s, g, o in uc_a_liste],
        "koridor_esik_km": D7_BAG_KM,
        "detay": kovalar,
    }
    yol = os.path.join(os.path.dirname(__file__), "OLCUM-ENKLAV-KURAL-0912.json")
    with open(yol, "w", encoding="utf-8") as f:
        json.dump(out, f, ensure_ascii=False, indent=1)
    print()
    print(f"YAZILDI: {yol}")


if __name__ == "__main__":
    main()
