# -*- coding: utf-8 -*-
"""SINIR-D-AVRUPA-ORTA-0077 — YOK -> C yükseltmesi (24 Eylül 2026).

Ne yapar: `data/d_sinirlar_avrupa_orta.js`teki 14 YOK kaydına Natural Earth 10m
admin-0 BUGÜNKÜ hattını C VEKİLİ olarak koyar (kardeş ailelerin emsali:
d1847-osm-kacar-erzurum, d1923-sudan-libya). E DEĞİL: hiçbirinde "1923 hattı =
bugünkü hat" diyen kaynak yok (kayıtların `degisti` alanı zaten bunu söylüyor).
C'nin tanımı (SINIR-DUNYA-0077 §1): belgeye dayanır, milimetrik değildir; C
yaslamaya girmez, siyah çizilir ⇒ renk ölçüsünü DEĞİŞTİRMEZ, kapsamayı artırır.

Kullanım:  py denetim/SINIR-D-AVRUPA-ORTA-0077-C.py          (kuru koşu, yazmaz)
           py denetim/SINIR-D-AVRUPA-ORTA-0077-C.py --yaz
Dosya satır başına bir kayıt; yalnız hedef id'lerin satırı değişir, sayı sınanır.
"""
import io, json, sys
from math import radians, sin, cos, asin, sqrt
from shapely.geometry import shape, Point

KOK = "C:/atlas/"
DOSYA = KOK + "data/d_sinirlar_avrupa_orta.js"
BUGUN = json.load(io.open(KOK + "veri-kaynak/d_bugunku_sinirlar.geojson", encoding="utf-8"))
ULKE = json.load(io.open(KOK + "veri-kaynak/ne_10m_admin_0_countries.geojson", encoding="utf-8"))

POLI = {}
for f in ULKE["features"]:
    p = f["properties"]
    for k in ("ISO_A3", "ISO_A3_EH", "ADM0_A3"):
        if p.get(k) and p[k] != "-99":
            POLI.setdefault(p[k], shape(f["geometry"]).buffer(0))
            break


# --- geometri (ARAC-D3ORTA-URET-0916.py ile aynı işlevler) ---------------------
def hav(a, b):
    d = (sin(radians(b[1] - a[1]) / 2) ** 2
         + cos(radians(a[1])) * cos(radians(b[1])) * sin(radians(b[0] - a[0]) / 2) ** 2)
    return 2 * 6371.0088 * asin(sqrt(d))


def uzunluk(c):
    return sum(hav(c[i], c[i + 1]) for i in range(len(c) - 1))


def bugun(cift, parca=1):
    for f in BUGUN["features"]:
        p = f["properties"]
        if p["cift"] == cift and p["parca_no"] == parca:
            return [tuple(x[:2]) for x in f["geometry"]["coordinates"]]
    raise SystemExit(f"🔴 bugünkü çizgi yok: {cift} parça {parca}")


def sol(c, iso_kunye):
    toplam, s = uzunluk(c), 0.0
    for i in range(len(c) - 1):
        L = hav(c[i], c[i + 1])
        if s + L >= toplam / 2 and L > 0:
            p, q = c[i], c[i + 1]
            break
        s += L
    mx, my = (p[0] + q[0]) / 2, (p[1] + q[1]) / 2
    dx, dy = (q[0] - p[0]) * cos(radians(my)), q[1] - p[1]
    n = sqrt(dx * dx + dy * dy)
    lx, ly = -dy / n, dx / n
    d = 3 / 111.0
    nokta = Point(mx + lx * d / cos(radians(my)), my + ly * d)
    for iso, kunye in iso_kunye.items():
        if POLI.get(iso) is not None and POLI[iso].contains(nokta):
            return kunye
    return None


def yuvarla(c):
    return [[round(x[0], 4), round(x[1], 4)] for x in c]


def en_yakin(c, pt):
    return min(range(len(c)), key=lambda i: hav(c[i], pt))


def kutu_ici(c, k):
    """Kutunun içindeki EN UZUN ardışık parça."""
    en, cur = [], []
    for x in c:
        if k[0] <= x[0] <= k[2] and k[1] <= x[1] <= k[3]:
            cur.append(x)
        else:
            if len(cur) > len(en):
                en = cur
            cur = []
    return cur if len(cur) > len(en) else en


def dogu_bati(c):
    """Ölçüm/okuma kolaylığı: çizgiyi batıdan doğuya çevir (yön sol_taraf ile birlikte hesaplanır)."""
    return c if c[0][0] <= c[-1][0] else c[::-1]


# --- bugünkü hatlar ------------------------------------------------------------
CZDE = bugun("CZE-DEU")
CZPL = bugun("CZE-POL")
PLSK = bugun("POL-SVK")
ROSR = bugun("ROU-SRB")
ALMK = bugun("ALB-MKD")
ALME = bugun("ALB-MNE")
EELV = bugun("EST-LVA")
LTRU = bugun("LTU-RUS", 2)

if "--uclar" in sys.argv:
    for ad, c in [("CZE-DEU", CZDE), ("CZE-POL", CZPL), ("POL-SVK", PLSK), ("ROU-SRB", ROSR),
                  ("ALB-MKD", ALMK), ("ALB-MNE", ALME), ("EST-LVA", EELV), ("LTU-RUS/2", LTRU)]:
        print(ad, len(c), "bas", c[0], "son", c[-1], round(uzunluk(c), 1), "km")
    sys.exit(0)

# CZE-DEU: güney (AT-CZ-DE üçlü noktası) -> kuzey (DE-CZ-PL üçlü noktası)
cz = CZDE if CZDE[0][1] < CZDE[-1][1] else CZDE[::-1]
i493 = next(i for i, x in enumerate(cz) if x[1] >= 49.3)          # de-cs-3 | de-cs-1 kutu sınırı
i_bs = en_yakin(cz, (12.10, 50.32))                                 # Bavyera–Saksonya iç sınırı (yaklaşık)
DECS3, DECS1, DECS2 = cz[:i493 + 1], cz[i493:i_bs + 1], cz[i_bs:]

# CZE-POL: batı (DE-CZ-PL) -> doğu (CZ-PL-SK)
cp = CZPL if CZPL[0][0] < CZPL[-1][0] else CZPL[::-1]
i_olza = en_yakin(cp, (18.33, 49.93))                               # Olza'nın Oder'e karıştığı yer (yaklaşık)
DECS4 = cp[:i_olza + 1]
ps = PLSK if hav(PLSK[0], cp[-1]) < hav(PLSK[-1], cp[-1]) else PLSK[::-1]
CSPL1 = cp[i_olza:] + ps[1:] if hav(ps[0], cp[-1]) < 0.5 else None
if CSPL1 is None:
    raise SystemExit(f"🔴 CZE-POL sonu ile POL-SVK başı birleşmiyor: {cp[-1]} / {ps[0]} ({hav(ps[0], cp[-1]):.2f} km)")

# ROU-SRB: kuzey (HU-RO-RS) -> güney-doğu (Timok ağzı)
rs = ROSR if ROSR[0][1] > ROSR[-1][1] else ROSR[::-1]
i_baz = en_yakin(rs, (21.39, 44.81))                                # Baziaş: kara hattı Tuna'ya iner (yaklaşık)
BANAT, TUNA = rs[:i_baz + 1], rs[i_baz:]

NAUM = kutu_ici(ALMK, [20.68, 40.84, 20.88, 40.98])
VERMOS = kutu_ici(ALME, [19.5, 42.48, 19.85, 42.72])

PL, CS, DE, AH = "polonya", "cekoslovakya", "almanya", "habsburg"
RO, YU, AL, EE, LV, LT = "romanya-kralligi", "yugoslavya", "arnavutluk-bagimsiz", "estonya", "letonya", "litvanya"

NE = "Natural Earth 10m admin-0 (bugünkü sınır, veri-kaynak/d_bugunku_sinirlar.geojson) — C VEKİLİ: 1923 hattıyla aynı olduğu KAYNAKLA doğrulanmadı"
DAMGA = "SINIR-D-AVRUPA-ORTA-0077 (24 Eyl 2026): YOK→C"

# id: (hat, iso->künye, kesinlik_km, kesinlik_not, sinif_not)
PLAN = {
    "d1923-de-cs-3": (DECS3, {"CZE": CS, "DEU": DE}, 5,
        "C KABA: NE 1:10m ölçeği (~1-2 km) + 1945 sonrası küçük düzeltmelerin büyüklüğü ARANMADI; güney ucu AT-CS-DE üçlü noktası, kuzey ucu kutu sınırı 49,3 K",
        "C: Versay md. 82 hattı METİNLE tanımlar ('3 Ağustos 1914'teki eski sınır') ama koordinat vermez; bugünkü hat vekil"),
    "d1923-de-cs-1": (DECS1, {"CZE": CS, "DEU": DE}, 5,
        "C KABA: NE 1:10m + 1945 sonrası düzeltmeler ölçülmedi; kuzey ucu Bavyera–Saksonya iç sınırı YAKLAŞIK (12,10 D · 50,32 K'ye en yakın NE köşesi) — iki yan da DE/CS, renk etkisi yok",
        "C: Versay md. 82 — 1914 eski sınırı; koordinatsız"),
    "d1923-de-cs-2": (DECS2, {"CZE": CS, "DEU": DE}, 5,
        "C KABA: NE 1:10m + 1945 sonrası düzeltmeler ölçülmedi; doğu ucu bugünkü DE-CZ-PL üçlü noktası (1923'te Almanya içi — Lužice/Silezya ayrımı yok)",
        "C: Versay md. 82 — 1914 eski sınırı; koordinatsız"),
    "d1923-de-cs-4": (DECS4, {"CZE": CS, "POL": DE}, 10,
        "C KABA: bugünkü CZ-PL hattının batı kesimi (1945'e dek Alman Silezyası). Doğu ucu Olza–Oder kavşağına en yakın NE köşesi — 1922 DE-CS-PL üçlü noktasının konumu KAYNAKLA doğrulanmadı; 1958 PL-ÇS takasları ölçülmedi",
        "C: Versay md. 82 (1914 hattı) + md. 83 (Hlučín); koordinatsız"),
    "d1923-cs-pl-1": (CSPL1, {"CZE": CS, "SVK": CS, "POL": PL}, 5,
        "C KABA: bugünkü CZ-PL (Olza'dan) + PL-SK hattı; 1958-06-13 kesin tahdit takasları ölçülmedi; JAVORİNA (20,14 D) 1923-09-01'de UDAD önünde — o kesimde hat fiilî değil ÇEKİŞMELİ",
        "C: Büyükelçiler Konf. 1920-07-28 kararı hattı sözle verir, koordinat yok; Javorina kesimi ihtilaflı"),
    "d1923-ro-yu-banat": (BANAT, {"ROU": RO, "SRB": YU}, 15,
        "C KABA: bugünkü RO-RS kara hattı; 1923-11-24 Belgrad Protokolü köy takası 1923-09-01'den SONRA — o gün hat bundan farklı, üçlü nokta ~13 km GB'de (Timár & Varga); güney ucu Baziaş'a en yakın NE köşesi (yaklaşık)",
        "C: Sèvres 'Belirli Sınırlar' 1920-08-10 hattı tarif eder, takas sonra ⇒ kaba"),
    "d1923-ro-yu-tuna": (TUNA, {"ROU": RO, "SRB": YU}, 3,
        "C KABA: bugünkü RO-RS Tuna hattı; Demir Kapı barajı (1972) nehri değiştirdi, talveg kayması ÖLÇÜLMEDİ; batı ucu Baziaş (yaklaşık)",
        "C: Tuna talvegi — metin tanımlı, 1923 koordinatı yok"),
    "d1923-al-yu-naum": (NAUM, {"ALB": AL, "MKD": YU}, 5,
        "C KABA: bugünkü AL-MK hattı Sveti Naum'u Makedonya'da bırakır; 1923-09-01'de manastır ARNAVUTLUK'taydı (1922-12-06 kararı, 1925'te YU'ya) ⇒ bu kutuda hat birkaç km yanlış tarafta",
        "C: 1922 Büyükelçiler kararı; UDAD Görüşü No. 9 (1924) öncesi ihtilaflı"),
    "d1923-al-yu-vermos": (VERMOS, {"ALB": AL, "MNE": YU}, 10,
        "C KABA: bugünkü AL-ME hattı Vermoş'u Arnavutluk'ta bırakır; IBS 116: 1925'te değişti (kapsamı çelişkili) ⇒ 1923 hattı bu kutuda farklı",
        "C: IBS 116 dipnotu ile sınır tarifi çelişiyor"),
    "d1923-ee-lv": (EELV, {"EST": EE, "LVA": LV}, 5,
        "C KABA: bugünkü EE-LV hattı; 1992 antl. md. VII düzeltmeleri ÖLÇÜLMEDİ; DOĞU UCU EKSİK — 1923 üçlü noktası bugünkünün doğusundaydı (Petseri EE, Abrene LV — ikisi de bugün Rusya), o kesim çizilmedi",
        "C: Tallents hakem kararı (1920) — hat metin + komisyon; koordinat yok"),
    "d1923-de-lt-memel": (LTRU, {"LTU": LT, "RUS": DE}, 5,
        "C KABA: bugünkü LT-RU (Kaliningrad) kara+Neman hattı; Kuşlu Kıstak (Kurşiu Nerija) parçası (NE parça 1, 4 km) ÇİZİLMEDİ; Neman talveg kayması ÖLÇÜLMEDİ",
        "C: Versay md. 28 (Neman) + 1914 Prusya–Rusya eski sınırı; koordinatsız"),
    # 1878–1918: Versay md. 82 1923 hattını TAM BU hat olarak tanımlar ⇒ aynı vekil
    "d1878-de-ah-bohemya-3": (DECS3, {"CZE": AH, "DEU": DE}, 5,
        "C KABA: d1923-de-cs-3 ile AYNI hat — Versay md. 82 1923 hattını '3 Ağustos 1914 eski sınırı' diye tanımlar; NE ölçeği + sonraki düzeltmeler ölçülmedi",
        "C: aynı eski Bohemya sınırı; koordinatsız"),
    "d1878-de-ah-bohemya-1": (DECS1, {"CZE": AH, "DEU": DE}, 5,
        "C KABA: d1923-de-cs-1 ile AYNI hat (Versay md. 82 geriye izdüşüm)", "C: aynı eski Bohemya sınırı; koordinatsız"),
    "d1878-de-ah-bohemya-2": (DECS2, {"CZE": AH, "DEU": DE}, 5,
        "C KABA: d1923-de-cs-2 ile AYNI hat (Versay md. 82 geriye izdüşüm)", "C: aynı eski Bohemya sınırı; koordinatsız"),
}


def main():
    yaz = "--yaz" in sys.argv
    satirlar = io.open(DOSYA, encoding="utf-8").read().split("\n")
    bulunan, rapor = set(), []
    for n, s in enumerate(satirlar):
        if not s.startswith('{"id":'):
            continue
        virgul = s.endswith(",")
        r = json.loads(s[:-1] if virgul else s)
        if r["id"] not in PLAN:
            continue
        if r.get("sinif") != "YOK":
            raise SystemExit(f"🔴 {r['id']} YOK değil ({r.get('sinif')}) — plan bayat")
        hat, isomap, kes, kes_not, snot = PLAN[r["id"]]
        if len(hat) < 2:
            raise SystemExit(f"🔴 {r['id']}: hat boş")
        st = sol(hat, isomap)
        if st is None or st not in r["taraflar"]:
            raise SystemExit(f"🔴 {r['id']}: sol_taraf ölçülemedi ({st})")
        r["kategori"] = "C"
        r["sinif"] = "C"
        r["sinif_not"] = snot
        r["sol_taraf"] = st
        r["hat"] = yuvarla(hat)
        r["uzunluk_km"] = round(uzunluk(hat), 1)
        r["geometri_kaynagi"] = NE
        r["kesinlik_km"] = kes
        r["kesinlik_not"] = kes_not
        r["not"] = (r.get("not") or "") + " · " + DAMGA + " — hat bugünkü sınırın KABA vekili; E değil (değişmedi kaynağı yok)."
        satirlar[n] = json.dumps(r, ensure_ascii=False, separators=(",", ":")) + ("," if virgul else "")
        bulunan.add(r["id"])
        rapor.append(f"{r['id']:26s} {len(hat):4d} nokta {r['uzunluk_km']:7.1f} km  sol={st}  kes={kes}")
    eksik = set(PLAN) - bulunan
    if eksik:
        raise SystemExit(f"🔴 bulunamayan id: {sorted(eksik)}")
    print("\n".join(rapor))
    print(f"toplam {len(bulunan)} kayıt · {sum(uzunluk(PLAN[i][0]) for i in bulunan if i.startswith('d1923')):.0f} km (1923 kayıtları)")
    if yaz:
        io.open(DOSYA, "w", encoding="utf-8", newline="\n").write("\n".join(satirlar))
        print("YAZILDI:", DOSYA)
    else:
        print("kuru koşu — yazılmadı (--yaz)")


if __name__ == "__main__":
    main()
