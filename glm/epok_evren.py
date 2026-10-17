# -*- coding: utf-8 -*-
"""GLM-I EPOK-SAHI P — evren çıkarımı (ölçüm, hüküm değil).

İlk `s:` (sahiplik) dönemi tam `f:"1281-01-01"` (EPOK_DAMGASI, app.js:3666)
olan noktalar; her nokta için: ad · dosya · lat/lon · atlastaki 1281 sahibinin
kimliği (`s[0].d`) · künyedeki adı.

AŞAMA kovaları (görev tanımı): 1 = Anadolu · Balkan · Ortadoğu · İran-Kafkas ·
Kuzey Afrika · Arabistan-Hint · 2 = Avrupa · Doğu Asya · Amerika · Sahra-altı.
Koordinat kutusu, sırayla ilk tutan kazanır (ARAC-ONCE1281-YERLESIM-TDV.py
düzeninde). `tur:"bolge"` olanlar sahiplik noktası değildir → hariç.

Çıktı: glm/epok_evren.json
"""
import sys, io, os, json
if __name__ == "__main__":
    sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8", errors="replace")
KOK = os.path.dirname(os.path.abspath(__file__)) + os.sep + ".."
sys.path.insert(0, os.path.join(KOK, "arac"))
import girdi

# (ad, lat_min, lat_max, lon_min, lon_max) — SIRA önemli; önce dar/kritik kutular
KOVALAR = [
    # --- AŞAMA 1 ------------------------------------------------------------
    ("Anadolu",        35.5, 43.0, 25.5, 44.8),   # Batı/doğu Anadolu + Kilikya
    ("Kırım-Karadeniz", 43.0, 48.5, 28.0, 50.0),  # Kırım + Azak (PD bölgesi)
    ("Balkan",         34.5, 48.5, 12.0, 29.5),   # Yunanistan'dan Tuna'ya
    ("Ortadoğu",       29.0, 38.0, 34.0, 50.0),   # Levant + Cezîre + Arabistan kuzeyi
    ("İran-Kafkas",    24.0, 45.5, 44.0, 65.0),   # İran + Kafkasya + Horasan batısı
    ("Kuzey Afrika",   20.0, 37.5, -17.0, 34.0),  # Mağrip + Mısır (Sahra üstü)
    ("Arabistan-Hint", 2.0,  30.0, 34.0, 92.0),   # Arabistan yarımadası + Hint altkıtası
    # --- AŞAMA 2 ------------------------------------------------------------
    ("Avrupa",         34.5, 72.0, -25.0, 45.0),  # Batı/Orta/Kuzey Avrupa + Ukrayna
    ("Doğu Asya",      0.0,  70.0, 60.0, 180.0),  # Orta Asya + Sibirya + Uzak Doğu
    ("Amerika",       -60.0, 85.0, -180.0, -30.0),
    ("Sahra-altı",    -40.0, 20.0, -20.0, 52.0),  # Afrika'nın geri kalanı
    ("Okyanusya",     -50.0, 10.0, 92.0, 180.0),
]


def kova(y):
    for ad, a, b, c, d in KOVALAR:
        if a <= y["lat"] <= b and c <= y["lon"] <= d:
            return ad
    return None


def main():
    yerlesim = girdi.yukle(sessiz=True)
    devletler = {d["id"]: d for d in girdi.oku_devletler()}
    evren = []
    toplam_epok = 0
    for y in yerlesim:
        if y.get("tur") == "bolge":
            continue
        s = y.get("s") or []
        if not s or not s[0].get("f"):
            continue
        if s[0]["f"] != "1281-01-01":
            continue
        toplam_epok += 1
        sid = s[0].get("d", "")
        evren.append({
            "ad": y["ad"],
            "dosya": y["_kaynak"],
            "lat": y["lat"], "lon": y["lon"],
            "sahip_id": sid,
            "sahip_ad": (devletler.get(sid) or {}).get("ad", "?" + sid),
            "bolge": kova(y),
        })
    # sayılar
    from collections import Counter
    bol = Counter(e["bolge"] for e in evren)
    sah = Counter(e["sahip_id"] for e in evren)
    as1 = [e for e in evren if e["bolge"] in
           ("Anadolu", "Kırım-Karadeniz", "Balkan", "Ortadoğu", "İran-Kafkas",
            "Kuzey Afrika", "Arabistan-Hint")]
    print("toplam nokta (bolge hariç):", len(yerlesim))
    print("ilk s: f=1281-01-01      :", toplam_epok)
    print("AŞAMA 1                  :", len(as1))
    print("AŞAMA 2                  :", toplam_epok - len(as1))
    print("-- bölgeler --")
    for k, v in bol.most_common():
        print(f"  {k or 'KOVA-YOK'}: {v}")
    print("-- ilk 25 sahip --")
    for k, v in sah.most_common(25):
        ad = (devletler.get(k) or {}).get("ad", "?")
        print(f"  {k} ({ad}): {v}")
    with io.open(os.path.join(os.path.dirname(os.path.abspath(__file__)),
                              "epok_evren.json"), "w", encoding="utf-8") as f:
        json.dump(evren, f, ensure_ascii=False, indent=1)
    print("-> glm/epok_evren.json")


if __name__ == "__main__":
    main()
