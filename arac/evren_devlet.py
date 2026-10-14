# -*- coding: utf-8 -*-
"""EVREN-DEVLET — silsilenin 1. halkası: "Sümerlerden 2000'e bütün devletlerin
listesi elimizde mi?"  Atlasın künyelerini (data/devletler.js) bir DIŞ referans
listeyle karşılaştırır.                                     EVREN-DEVLET-1014

SALT OKUR: data/ altında hiçbir dosyaya YAZMAZ, motor dosyalarına dokunmaz,
künye YAZMAZ. Yalnız ölçer ve aday üretir.

REFERANS
  Cliopatria v0.2.1 — Seshat Global History Databank (Bennett ve diğ.,
  Scientific Data 2025, doi:10.1038/s41597-025-04516-9), CC-BY 4.0.
  Girdi zip'i depoya KOPYALANMAZ; yolu argümanla verilir. Zip içeriği
  GÜVENİLMEYEN veridir: yalnız json olarak okunur, içinden hiçbir şey çalıştırılmaz.
  Çıktılara atıf satırı yazılır: "Cliopatria v0.2.1, Seshat Global History
  Databank, CC-BY 4.0; değiştirildi: özetlendi".

YIL DÖNÜŞÜMÜ (Cliopatria → atlas astronomik yılı)
  README: "Years are recorded as integers, negative for BCE, positive for CE",
  FromYear/ToYear kapsayıcı. Veride ölçülen: -1 hiç geçmiyor; 6 satır ToYear=0
  ile bitip ardılı FromYear=1 ile başlıyor; Roman Empire FromYear=-31 (Aktion,
  MÖ 31), Roman Republic ToYear=-32. ⇒ negatif değer MÖ ETİKETİDİR (tarihî
  numaralandırma), 0 değeri MÖ 1'in yerine kullanılmıştır.
      astro = Y + 1   (Y < 0)       MÖ n → -(n-1)   (VERI-YAPISI.md §MÖ)
      astro = Y       (Y ≥ 0)       0 → 0 (= MÖ 1), 1 → MS 1
  -1 veride bulunmadığı için 0 ile çakışma yoktur (ölçülür, raporlanır).
  Satır aralığı astronomik [astro(From), astro(To)+1) olarak alınır.

YÖNTEM — ad değil KOORDİNAT + ZAMAN (Emre kararı)
  1. Type=POLITY satırları Name'e göre toplanır (polity). RELATION ayrı sayılır.
     Adı parantezli POLITY (ör. "(Holy Roman Empire)") BİLEŞİK yapıdır
     (Components alanı bileşenlerini sayar) — ayrı işaretlenir.
  2. Yerleşim oyu: her satırın poligonu İÇİNE düşen atlas yerleşimleri
     (arac/girdi.py yukle) satırın birkaç örnek yılında hangi künyenindir?
     (v:/d: → "osmanli", s: → d:; motorun önceliği: v > d > s; kur/bit sahnesi)
  3. Başkent: künyenin `baskent` metni silsile_olc.py'nin ad çözücüsüyle
     yerleşime çözülür; künyenin ömrüyle örtüşen satırların poligonunda mı?
  4. Zaman: künye [f,t) ile polity satırlarının birleşimi örtüşmesi.
  5. Ad benzerliği YALNIZ yardımcı işarettir; tek başına eşleşme saymaz.
  Nokta-poligon testi saf Python'dur (ray casting, bbox ön süzgeci, enlem
  bandı kenar dizini; MultiPolygon ve delikler çift-tek kuralıyla).

KULLANIM
  py -I arac/evren_devlet.py <cliopatria.geojson.zip>            # ölç + yaz
  py -I arac/evren_devlet.py <cliopatria.geojson.zip> --sinav    # iki yönlü sınav
ÇIKIŞ 0 ölçüldü (+ sınav geçti) · 1 sınav kaldı · 2 ölçülemedi
"""
import argparse
import collections
import difflib
import io
import json
import math
import os
import re
import subprocess
import sys
import time
import zipfile

sys.stdout.reconfigure(encoding="utf-8", errors="replace")
KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
os.chdir(KOK)
sys.path.insert(0, os.path.join(KOK, "arac"))
import girdi                                    # noqa: E402
import silsile_olc as SO                        # noqa: E402  (ad çözücü — yeniden kullanılır)

CIKTI = os.path.join(KOK, "denetim", "EVREN-DEVLET-1014")
ULKE = os.path.join(KOK, "veri-kaynak", "ne_10m_admin_0_countries.geojson")
ATIF = ("Kaynak: Cliopatria v0.2.1, Seshat Global History Databank (Bennett ve diğ., "
        "Scientific Data 2025, doi:10.1038/s41597-025-04516-9), CC-BY 4.0; "
        "değiştirildi: özetlendi.")
SADELE_DERECE = 0.005      # poligon köşe seyreltme (≈0.5 km): ardışık yakın köşe atılır
KIYI_TAMPON = 0.05         # nokta poligon dışında kalırsa ±0.05° (≈5 km) dört komşu denenir
UST_YIL = 2000             # "Sümerlerden 2000'e" — bundan SONRA başlayan polity kapsam dışı
ACIK_UC = 2025.0           # künye t yoksa (süren ya da bilinmeyen) bu yıla dek sayılır

# Eşikler (rapora aynen yazılır)
ZAMAN_ESIK = 0.5           # örtüşme / kısa olanın süresi
MEKAN_GUCLU = 0.4          # share_P ve cover_K ikisi de
MEKAN_ZAYIF_SHARE = 0.15
MEKAN_ZAYIF_COVER = 0.3
MEKAN_ZAYIF_OY = 3
BASKENT_ESIK = 0.5         # künyeyle örtüşen satırların ≥ yarısında başkent poligonda
AD_ESIK = 0.8
BASKENT_ZMAX = 0.25        # başkent kuralında örtüşme / UZUN olanın süresi alt sınırı (kısa
                           # bir polity uzun bir künyenin başkentini kısa süre tuttuğunda eşleşme sayılmaz)

sade = SO.sade


def log(*a):
    print(*a, flush=True)


# ════════════════════════════════════════════════════════════════════════
# YIL
# ════════════════════════════════════════════════════════════════════════
def clio_astro(y):
    return y + 1 if y < 0 else y


def atlas_yil(s):
    g = SO.gun(s)
    if g is None:
        return None
    y, m, d = g
    return y + (m - 1) / 12.0 + (d - 1) / 365.0


def donem(y):
    if y is None:
        return "?"
    if y <= 0:
        return "MÖ"
    if y < 1000:
        return "1–999"
    if y < 1281:
        return "1000–1280"
    if y < 1924:
        return "1281–1923"
    return "1924+"


DONEMLER = ["MÖ", "1–999", "1000–1280", "1281–1923", "1924+"]
KITALAR = ["Avrupa", "Asya", "Afrika", "K.Amerika", "G.Amerika", "Okyanusya", "?"]
NE_KITA = {"Europe": "Avrupa", "Asia": "Asya", "Africa": "Afrika",
           "North America": "K.Amerika", "South America": "G.Amerika",
           "Oceania": "Okyanusya", "Antarctica": "?", "Seven seas (open ocean)": "?"}
BOLGE_KITA = {}
for _b in ("balkanlar", "orta-avrupa", "bati-avrupa", "kuzey-avrupa", "dogu-avrupa",
           "italya", "iberya"):
    BOLGE_KITA[_b] = "Avrupa"
for _b in ("anadolu", "kafkasya", "iran", "mezopotamya", "suriye-filistin", "arabistan",
           "orta-asya", "guney-asya", "dogu-asya", "guneydogu-asya", "sibirya-bozkir"):
    BOLGE_KITA[_b] = "Asya"
for _b in ("kuzey-afrika", "misir-sudan", "dogu-afrika", "bati-afrika", "orta-afrika",
           "guney-afrika"):
    BOLGE_KITA[_b] = "Afrika"
for _b in ("kuzey-amerika", "orta-amerika", "orta-amerika-karayip"):
    BOLGE_KITA[_b] = "K.Amerika"
BOLGE_KITA["guney-amerika"] = "G.Amerika"
BOLGE_KITA["okyanusya"] = "Okyanusya"


# ════════════════════════════════════════════════════════════════════════
# GEOMETRİ — saf Python nokta-poligon
# ════════════════════════════════════════════════════════════════════════
class Sekil:
    """Bir satırın (Multi)Polygon'u. Bütün halkaların kenarları tek havuzda;
    çift-tek kuralı MultiPolygon parçalarını ve delikleri doğru işler
    (parçalar örtüşmediği sürece — GeoJSON geçerli geometride örtüşmez)."""
    __slots__ = ("x0", "y0", "x1", "y1", "h", "bant", "nk")

    def __init__(self, geom):
        if geom["type"] == "Polygon":
            parcalar = [geom["coordinates"]]
        elif geom["type"] == "MultiPolygon":
            parcalar = geom["coordinates"]
        else:
            raise ValueError("geometri türü: %s" % geom["type"])
        kenar = []
        x0 = y0 = 1e9
        x1 = y1 = -1e9
        for parca in parcalar:
            for halka in parca:
                pts = []
                for p in halka:
                    x, y = float(p[0]), float(p[1])
                    if pts and abs(x - pts[-1][0]) < SADELE_DERECE and abs(y - pts[-1][1]) < SADELE_DERECE:
                        continue
                    pts.append((x, y))
                if len(pts) < 3:
                    continue
                if pts[0] != pts[-1]:
                    pts.append(pts[0])
                for i in range(len(pts) - 1):
                    a, b = pts[i], pts[i + 1]
                    if a[1] == b[1]:
                        continue          # yatay kenar ışını kesmez
                    kenar.append((a[0], a[1], b[0], b[1]))
                    x0 = min(x0, a[0]); x1 = max(x1, a[0])
                    y0 = min(y0, a[1]); y1 = max(y1, a[1])
        self.x0, self.y0, self.x1, self.y1 = x0, y0, x1, y1
        self.nk = len(kenar)
        nb = max(1, min(512, self.nk // 12))
        self.h = (y1 - y0) / nb if y1 > y0 else 1.0
        bant = [[] for _ in range(nb)]
        for e in kenar:
            lo, hi = (e[1], e[3]) if e[1] < e[3] else (e[3], e[1])
            i0 = max(0, min(nb - 1, int((lo - y0) / self.h)))
            i1 = max(0, min(nb - 1, int((hi - y0) / self.h)))
            for i in range(i0, i1 + 1):
                bant[i].append(e)
        self.bant = bant

    def kutu(self, x, y, pay=0.0):
        return self.x0 - pay <= x <= self.x1 + pay and self.y0 - pay <= y <= self.y1 + pay

    def _ic(self, x, y):
        if not (self.x0 <= x <= self.x1 and self.y0 <= y <= self.y1):
            return False
        i = int((y - self.y0) / self.h)
        if i >= len(self.bant):
            i = len(self.bant) - 1
        c = False
        for ax, ay, bx, by in self.bant[i]:
            if (ay > y) != (by > y):
                if x < ax + (y - ay) * (bx - ax) / (by - ay):
                    c = not c
        return c

    def icinde(self, x, y, tampon=True):
        if self._ic(x, y):
            return True
        if tampon and self.kutu(x, y, KIYI_TAMPON):
            t = KIYI_TAMPON
            return (self._ic(x + t, y) or self._ic(x - t, y)
                    or self._ic(x, y + t) or self._ic(x, y - t))
        return False


def temsil_noktasi(geom):
    """En büyük parçanın ağırlık merkezi; parçanın dışındaysa o enlemdeki
    en geniş iç kirişin ortası (poligon İÇİNDE bir nokta)."""
    parcalar = [geom["coordinates"]] if geom["type"] == "Polygon" else geom["coordinates"]
    en, en_alan = None, -1
    for parca in parcalar:
        dis = parca[0]
        a = 0.0
        for i in range(len(dis) - 1):
            a += dis[i][0] * dis[i + 1][1] - dis[i + 1][0] * dis[i][1]
        if abs(a) > en_alan:
            en_alan, en = abs(a), parca
    dis = en[0]
    A = cx = cy = 0.0
    for i in range(len(dis) - 1):
        x0, y0, x1, y1 = dis[i][0], dis[i][1], dis[i + 1][0], dis[i + 1][1]
        c = x0 * y1 - x1 * y0
        A += c
        cx += (x0 + x1) * c
        cy += (y0 + y1) * c
    if abs(A) < 1e-12:
        return float(dis[0][0]), float(dis[0][1])
    cx /= 3 * A
    cy /= 3 * A
    s = Sekil({"type": "Polygon", "coordinates": en})
    if s.icinde(cx, cy, tampon=False):
        return cx, cy
    xs = []
    for halka in en:
        for i in range(len(halka) - 1):
            ax, ay, bx, by = halka[i][0], halka[i][1], halka[i + 1][0], halka[i + 1][1]
            if (ay > cy) != (by > cy):
                xs.append(ax + (cy - ay) * (bx - ax) / (by - ay))
    xs.sort()
    best = None
    for i in range(0, len(xs) - 1, 2):
        if best is None or xs[i + 1] - xs[i] > best[1] - best[0]:
            best = (xs[i], xs[i + 1])
    if best:
        return (best[0] + best[1]) / 2, cy
    return cx, cy


class Ulkeler:
    def __init__(self):
        gj = json.load(io.open(ULKE, encoding="utf-8"))
        self.u = []
        for f in gj["features"]:
            p = f["properties"]
            try:
                s = Sekil(f["geometry"])
            except (ValueError, TypeError):
                continue
            self.u.append((s, p.get("NAME_TR") or p.get("NAME") or p.get("ADMIN"),
                           NE_KITA.get(p.get("CONTINENT"), "?")))

    def bul(self, lon, lat):
        for s, ad, kita in self.u:
            if s.icinde(lon, lat, tampon=False):
                return ad, kita
        for s, ad, kita in self.u:          # kıyıdan hemen dışarı düşen nokta
            if s.icinde(lon, lat, tampon=True):
                return ad, kita
        return "(deniz/bulunamadı)", "?"


# ════════════════════════════════════════════════════════════════════════
# CLİOPATRİA
# ════════════════════════════════════════════════════════════════════════
def cliopatria_oku(yol):
    z = zipfile.ZipFile(yol)
    adlar = [n for n in z.namelist() if n.lower().endswith(".geojson")]
    if len(adlar) != 1:
        raise SystemExit("ÖLÇÜLEMEDİ: zip içinde tek .geojson beklenirdi: %s" % adlar)
    with z.open(adlar[0]) as f:
        gj = json.load(f)
    satirlar, iliski = [], []
    yil_say = collections.Counter()
    for ft in gj["features"]:
        p = ft["properties"]
        for k in ("FromYear", "ToYear"):
            yil_say[p[k]] += 1
        if p.get("Type") == "RELATION":
            iliski.append({k: p.get(k) for k in ("Name", "FromYear", "ToYear", "Components")})
            continue
        if p.get("Type") != "POLITY" or not ft.get("geometry"):
            continue
        satirlar.append({
            "ad": p["Name"], "from": int(p["FromYear"]), "to": int(p["ToYear"]),
            "a0": clio_astro(int(p["FromYear"])), "a1": clio_astro(int(p["ToYear"])) + 1,
            "alan": float(p.get("Area") or 0), "wd": p.get("Wikidata") or "",
            "wp": p.get("Wikipedia") or "", "sid": p.get("SeshatID") or "",
            "uye": p.get("MemberOf") or "", "bilesen": p.get("Components") or "",
            "sekil": Sekil(ft["geometry"]), "_g": ft["geometry"]})
    del gj
    return adlar[0], satirlar, iliski, yil_say


# ════════════════════════════════════════════════════════════════════════
# ATLAS
# ════════════════════════════════════════════════════════════════════════
def sahiplik_tablosu(Y):
    """Her yerleşim için [(f, t, sahip)] — v > d > s önceliği, __BOSLUK__ atılır,
    kur/bit sahnesi uygulanır (silsile_olc.boyayan ile aynı tanım)."""
    out = []
    for y in Y:
        kur = atlas_yil(y.get("kur"))
        bit = atlas_yil(y.get("bit"))
        L = []
        for kat, sahip in (("v", "osmanli"), ("d", "osmanli"), ("s", None)):
            for p in y.get(kat) or []:
                f, t = atlas_yil(p.get("f")), atlas_yil(p.get("t"))
                f = -1e9 if f is None else f
                t = 1e9 if t is None else t
                if kur is not None:
                    f = max(f, kur)
                if bit is not None:
                    t = min(t, bit)
                if t <= f:
                    continue
                s = sahip or p.get("d")
                if not s or s == "__BOSLUK__":
                    continue
                L.append((f, t, s, kat))
        out.append(L)
    return out


def sahip(L, g):
    for f, t, s, _k in L:           # liste v,d,s sırasıyla yazıldı ⇒ ilk tutan kazanır
        if f <= g < t:
            return s
    return None


def baskent_coz(D, Y):
    soz = SO.sozluk_oku()
    kum = SO.siniflandirma_kumeleri(soz, D)
    dz = SO.Dizin(Y, soz, kum)
    out, durum = {}, collections.Counter()
    for d in D:
        b = d.get("baskent")
        if not b:
            durum["baskent-yok"] += 1
            continue
        noktalar = []
        for parca in re.split(r"→|->|/|;|,|\s+ve\s+|\s+sonra\s+", b):
            parca = parca.strip()
            if not parca:
                continue
            r = SO.parca_coz(dz, parca, kum)
            if r["durum"] == "bulundu":
                for i in r["idx"]:
                    noktalar.append((Y[i]["lon"], Y[i]["lat"], Y[i]["ad"]))
        if noktalar:
            out[d["id"]] = noktalar
            durum["cozuldu"] += 1
        else:
            durum["cozulemedi"] += 1
    return out, durum


# ════════════════════════════════════════════════════════════════════════
# AD BENZERLİĞİ (yalnız yardımcı)
# ════════════════════════════════════════════════════════════════════════
EN_DURAK = {"empire", "kingdom", "dynasty", "sultanate", "khanate", "caliphate", "of", "the",
            "republic", "state", "states", "confederation", "confederacy", "principality",
            "duchy", "grand", "county", "emirate", "period", "civilization", "city", "and",
            "polity", "polities", "kingdoms", "dynasties", "great", "people", "s", "realm",
            "chiefdom", "chiefdoms", "federation", "union", "socialist", "democratic",
            "peoples", "imamate", "khaganate", "beylik", "margraviate", "electorate",
            "archduchy", "lordship", "despotate", "tsardom", "shogunate", "regency",
            "protectorate", "colony", "territory", "new", "first", "second", "third"}
TR_DURAK = {sade(x) for x in SO.TUR_KELIMELERI} | {
    "imparatorlugu", "imparatorlugu", "krallik", "krallığı", "kralligi", "hanedani",
    "hanedanligi", "devleti", "sultanligi", "beyligi", "hanligi", "cumhuriyeti", "donemi",
    "hakimiyeti", "uygarligi", "dukaligi", "prensligi", "emirligi", "kaganligi",
    "ve", "ile", "i", "ii", "iii", "iv", "buyuk", "yeni", "eski", "erken", "gec", "ilk"}


def _katla(s):
    s = s.replace("kh", "h").replace("q", "k").replace("x", "h").replace("w", "v")
    s = s.replace("ph", "f").replace("th", "t").replace("ou", "u").replace("j", "c")
    s = s.replace("y", "i").replace("dh", "d").replace("gh", "g")
    s = re.sub(r"(.)\1+", r"\1", s)
    for ek in ("ianlar", "ian", "ean", "ese", "ids", "id", "ites", "ite", "ler", "lar", "ic"):
        if len(s) > len(ek) + 3 and s.endswith(ek):
            s = s[: -len(ek)]
            break
    return s


def ad_anahtarlari(ad, tr):
    out = set()
    varyant = [ad, re.sub(r"\s*\(.*?\)\s*", " ", ad)] + re.findall(r"\(([^()]*)\)", ad)
    durak = TR_DURAK if tr else EN_DURAK
    for v in varyant:
        tok = [sade(t) for t in re.split(r"[\s\-–—'’,/()]+", v)]
        tok = [t for t in tok if t and t not in durak and not t.isdigit()]
        if tok:
            out.add(_katla("".join(tok)))
            for t in tok:
                if len(t) >= 4:
                    out.add(_katla(t))
    return {x for x in out if len(x) >= 3}


def ad_benzer(A, B):
    best = 0.0
    for a in A:
        for b in B:
            if a == b:
                return 1.0
            r = difflib.SequenceMatcher(None, a, b).ratio()
            if r > best:
                best = r
    return best


# ════════════════════════════════════════════════════════════════════════
# ANA ÖLÇÜM
# ════════════════════════════════════════════════════════════════════════
def aralik_birlesim(ar):
    ar = sorted(ar)
    out = []
    for a, b in ar:
        if out and a <= out[-1][1]:
            out[-1][1] = max(out[-1][1], b)
        else:
            out.append([a, b])
    return out


def ortusme(kf, kt, birlesim):
    s = 0.0
    for a, b in birlesim:
        lo, hi = max(kf, a), min(kt, b)
        if hi > lo:
            s += hi - lo
    return s


def olc(zip_yol):
    t0 = time.time()
    log("Cliopatria okunuyor: %s" % zip_yol)
    ic_ad, R, iliski, yil_say = cliopatria_oku(zip_yol)
    log("  %d POLITY satırı · %d RELATION satırı · %.0f sn" % (len(R), len(iliski), time.time() - t0))

    log("atlas okunuyor (girdi.yukle, oku_devletler)…")
    Y = girdi.yukle(sessiz=True)
    D = girdi.oku_devletler()
    SL = sahiplik_tablosu(Y)
    kunye = {d["id"]: d for d in D}
    # Osmanlı'nın devletler.js'te künyesi YOK; d:/v: katmanı onu taşır. Sentetik künye:
    # ömür = atlas çekirdek aralığı (CLAUDE.md "Osmanlı 1281–1923"). Uydurma gün değil,
    # atlasın kendi kapsam beyanı; rapora yazılır.
    kunye_sentetik = "osmanli" not in kunye
    if kunye_sentetik:
        kunye["osmanli"] = {"id": "osmanli", "ad": "Osmanlı Devleti (SENTETİK: d:/v: katmanı)",
                            "tur": "devlet", "bolge": "anadolu", "f": "1281-01-01",
                            "t": "1923-10-29", "baskent": "İstanbul"}
        D = D + [kunye["osmanli"]]
    BK, bk_durum = baskent_coz(D, Y)
    # Tutarlılık süzgeci: başkent noktasının kıtası künyenin `bolge` kıtasıyla çelişiyorsa
    # (ör. Mısır künyesinin "Tebai"si Yunanistan'daki Thebai'ye çözülürse) nokta ATILIR.
    ulk = Ulkeler()
    bk_red = []
    for K in list(BK):
        bk_kita = BOLGE_KITA.get(kunye[K].get("bolge"))
        if not bk_kita:
            continue
        kalan = []
        for x, y, a in BK[K]:
            k2 = ulk.bul(x, y)[1]
            if k2 != "?" and k2 != bk_kita and not (
                    {k2, bk_kita} <= {"Avrupa", "Asya"}):   # Avrasya sınırı (Kafkasya/Rusya) yumuşak
                bk_red.append((K, kunye[K].get("baskent"), a, k2, bk_kita))
                continue
            kalan.append((x, y, a))
        if kalan:
            BK[K] = kalan
        else:
            del BK[K]
            bk_durum["cozuldu"] -= 1
            bk_durum["kita-celiskisi-atildi"] += 1
    log("  %d yerleşim · %d künye · başkent çözümü %s" % (len(Y), len(D), dict(bk_durum)))

    # künye zamanları
    KZ, acik_uc = {}, []
    for d in D:
        f = atlas_yil(d.get("f"))
        t = atlas_yil(d.get("t"))
        if f is None:
            KZ[d["id"]] = None
            continue
        if t is None:
            t = ACIK_UC
            acik_uc.append(d["id"])
        if t <= f:
            t = f + 1.0
        KZ[d["id"]] = (f, t)

    # sahiplik evreni
    sahipli = collections.Counter()
    for L in SL:
        for _f, _t, s, _k in L:
            sahipli[s] += 1
    en_erken = min((f for L in SL for f, _t, _s, _k in L if f > -1e8), default=None)

    # yerleşim ızgarası
    izg = collections.defaultdict(list)
    for i, y in enumerate(Y):
        izg[(math.floor(y["lat"]), math.floor(y["lon"]))].append(i)

    # dünya sahip sayımı (yıl önbelleği)
    dunya_onb = {}

    def dunya(g):
        c = dunya_onb.get(g)
        if c is None:
            c = collections.Counter()
            for L in SL:
                s = sahip(L, g)
                if s:
                    c[s] += 1
            dunya_onb[g] = c
        return c

    log("yerleşim oyları (poligon içi × örnek yıl)…")
    P = collections.OrderedDict()
    for r in R:
        P.setdefault(r["ad"], []).append(r)
    ic_oy = collections.defaultdict(collections.Counter)   # P → K → oy
    top_oy = collections.Counter()                          # P → sahipli iç oy
    dunya_oy = collections.defaultdict(collections.Counter)  # P → K → dünya sayımı (aynı örneklerde)
    ornek_say = collections.Counter()
    pip_say = 0
    for n, (pad, rows) in enumerate(P.items()):
        ornekler = []
        for r in rows:
            s = r["sekil"]
            aday = []
            for la in range(math.floor(s.y0 - KIYI_TAMPON), math.floor(s.y1 + KIYI_TAMPON) + 1):
                for lo in range(math.floor(s.x0 - KIYI_TAMPON), math.floor(s.x1 + KIYI_TAMPON) + 1):
                    aday.extend(izg.get((la, lo), ()))
            ic = []
            for i in aday:
                pip_say += 1
                if s.icinde(Y[i]["lon"], Y[i]["lat"]):
                    ic.append(i)
            r["ic"] = ic
            a0, a1 = r["a0"], r["a1"] - 1
            yillar = sorted({a0, (a0 + a1) // 2, a1})
            for yl in yillar:
                g = yl + 0.5
                if en_erken is None or g < en_erken:
                    continue
                ornekler.append(g)
                c = collections.Counter()
                for i in ic:
                    s2 = sahip(SL[i], g)
                    if s2:
                        c[s2] += 1
                ic_oy[pad].update(c)
                top_oy[pad] += sum(c.values())
                ornek_say[pad] += 1
                r.setdefault("oy", collections.Counter()).update(c)
        for K in ic_oy[pad]:
            dunya_oy[pad][K] = sum(dunya(g)[K] for g in ornekler)
        if n % 200 == 0:
            log("  %d/%d polity · %d pip · %.0f sn" % (n, len(P), pip_say, time.time() - t0))

    log("başkent testi…")
    bk_oy = collections.defaultdict(dict)   # P → K → (iç satır, test satırı)
    for K, noktalar in BK.items():
        kz = KZ.get(K)
        if not kz:
            continue
        for pad, rows in P.items():
            ic_n = test_n = 0
            for r in rows:
                if r["a1"] <= kz[0] or r["a0"] >= kz[1]:
                    continue
                s = r["sekil"]
                if not any(s.kutu(x, y, KIYI_TAMPON) for x, y, _a in noktalar):
                    test_n += 1
                    continue
                test_n += 1
                if any(s.icinde(x, y) for x, y, _a in noktalar):
                    ic_n += 1
            if ic_n:
                bk_oy[pad][K] = (ic_n, test_n)

    log("polity özetleri ve eşleşme…")
    PZ = {}
    ozet = {}
    for pad, rows in P.items():
        bir = aralik_birlesim([(r["a0"], r["a1"]) for r in rows])
        enb = max(rows, key=lambda r: r["alan"])
        lon, lat = temsil_noktasi(enb["_g"])
        ulke, kita = ulk.bul(lon, lat)
        sure = sum(b - a for a, b in bir)
        ozet[pad] = {
            "ad": pad, "from": min(r["from"] for r in rows), "to": max(r["to"] for r in rows),
            "a0": bir[0][0], "a1": bir[-1][1], "sure": sure, "alan": enb["alan"],
            "satir": len(rows), "wd": ";".join(sorted({r["wd"] for r in rows if r["wd"]})),
            "sid": ";".join(sorted({x for r in rows for x in r["sid"].split(";") if x})),
            "wp": ";".join(sorted({r["wp"] for r in rows if r["wp"]}))[:200],
            "uye": ";".join(sorted({x for r in rows for x in r["uye"].split(";") if x})),
            "bilesik": pad.startswith("("), "lon": lon, "lat": lat, "ulke": ulke,
            "kita": kita, "ad_an": ad_anahtarlari(pad, False)}
        PZ[pad] = bir
    for r in R:
        r.pop("_g", None)

    K_an = {d["id"]: ad_anahtarlari(d.get("ad") or d["id"], True) for d in D}

    # künye kıtası: başkent noktası varsa NE ülkesi, yoksa bolge
    k_kita = {}
    for d in D:
        if d["id"] in BK:
            x, y, _a = BK[d["id"]][0]
            k_kita[d["id"]] = ulk.bul(x, y)[1]
        else:
            k_kita[d["id"]] = BOLGE_KITA.get(d.get("bolge"), "?")

    # ── çift metrikleri
    ciftler = []
    for pad in P:
        oz = ozet[pad]
        adaylar = set(ic_oy[pad]) | set(bk_oy[pad])
        for K in adaylar:
            kz = KZ.get(K)
            if not kz or K not in kunye:
                continue
            ov = ortusme(kz[0], kz[1], PZ[pad])
            lk, lp = kz[1] - kz[0], oz["sure"]
            zmin = ov / min(lk, lp) if min(lk, lp) > 0 else 0.0
            zmax = ov / max(lk, lp) if max(lk, lp) > 0 else 0.0
            v = ic_oy[pad].get(K, 0)
            share = v / top_oy[pad] if top_oy[pad] else 0.0
            cover = v / dunya_oy[pad][K] if dunya_oy[pad].get(K) else 0.0
            bi, bt = bk_oy[pad].get(K, (0, 0))
            bko = bi / bt if bt else 0.0
            adb = ad_benzer(oz["ad_an"], K_an[K])
            ciftler.append(dict(P=pad, K=K, ov=ov, zmin=zmin, zmax=zmax, oy=v, share=share,
                                cover=cover, bk_ic=bi, bk_test=bt, bko=bko, ad=adb))
    # noktasız künyeler için ad+zaman yardımcı adayı
    noktasiz = {d["id"] for d in D if sahipli[d["id"]] == 0 and d["id"] not in BK}
    var_cift = {(c["P"], c["K"]) for c in ciftler}
    for K in noktasiz:
        kz = KZ.get(K)
        if not kz:
            continue
        for pad in P:
            oz = ozet[pad]
            if oz["a1"] <= kz[0] or oz["a0"] >= kz[1] or (pad, K) in var_cift:
                continue
            adb = ad_benzer(oz["ad_an"], K_an[K])
            if adb < AD_ESIK:
                continue
            ov = ortusme(kz[0], kz[1], PZ[pad])
            lk, lp = kz[1] - kz[0], oz["sure"]
            zmin = ov / min(lk, lp) if min(lk, lp) > 0 else 0.0
            ciftler.append(dict(P=pad, K=K, ov=ov, zmin=zmin,
                                zmax=ov / max(lk, lp) if max(lk, lp) else 0.0, oy=0, share=0.0,
                                cover=0.0, bk_ic=0, bk_test=0, bko=0.0, ad=adb))

    for c in ciftler:
        K = c["K"]
        kz_oy_yok = c["oy"] == 0 and dunya_oy[c["P"]].get(K, 0) == 0
        ms = c["share"] >= MEKAN_GUCLU and c["cover"] >= MEKAN_GUCLU
        mz = c["oy"] >= MEKAN_ZAYIF_OY and (c["share"] >= MEKAN_ZAYIF_SHARE
                                             or c["cover"] >= MEKAN_ZAYIF_COVER)
        bk = c["bk_ic"] > 0 and c["bko"] >= BASKENT_ESIK
        zaman = c["zmin"] >= ZAMAN_ESIK
        ad = c["ad"] >= AD_ESIK
        sinif, neden = None, []
        if zaman and ms:
            sinif = "eslesen"
            neden.append("mekan-iki-yon")
        elif zaman and bk and (c["share"] >= MEKAN_ZAYIF_SHARE or kz_oy_yok) and (
                c["zmax"] >= BASKENT_ZMAX or c["ad"] >= AD_ESIK):
            sinif = "eslesen"
            neden.append("baskent" + ("(yerlesim-oyu-yok)" if kz_oy_yok else "+pay"))
        elif zaman and (mz or bk) and ad:
            sinif = "eslesen"
            neden.append("mekan-zayif+ad")
        if sinif is None:
            if c["oy"] == 0 and c["bk_ic"] == 0:
                if zaman and ad:
                    sinif = "aday"
                    neden.append("noktasiz-kunye: yalniz ad+zaman")
            elif c["zmin"] > 0 and (ms or mz or bk or (c["oy"] >= MEKAN_ZAYIF_OY and ad)):
                sinif = "aday"
                if not zaman:
                    neden.append("zaman-zayif(%.2f)" % c["zmin"])
                if not (ms or bk):
                    neden.append("mekan-zayif(pay %.2f/kapsam %.2f)" % (c["share"], c["cover"]))
                if bk and not (c["share"] >= MEKAN_ZAYIF_SHARE or kz_oy_yok):
                    neden.append("yalniz-baskent(pay %.2f)" % c["share"])
                elif bk and zaman and c["zmax"] < BASKENT_ZMAX and c["ad"] < AD_ESIK:
                    neden.append("baskent-ama-sure-uyumsuz(zaman_uzun %.2f)" % c["zmax"])
        c["sinif"] = sinif
        c["neden"] = ";".join(neden)

    # ── sınıflar
    p_sinif, k_sinif = {}, {}
    p_es = collections.defaultdict(list)
    k_es = collections.defaultdict(list)
    p_ad = collections.defaultdict(list)
    k_ad = collections.defaultdict(list)
    for c in ciftler:
        if c["sinif"] == "eslesen":
            p_es[c["P"]].append(c)
            k_es[c["K"]].append(c)
        elif c["sinif"] == "aday":
            p_ad[c["P"]].append(c)
            k_ad[c["K"]].append(c)
    kapsam_disi = {p for p in P if ozet[p]["a0"] > UST_YIL}
    for p in P:
        p_sinif[p] = ("kapsam-disi" if p in kapsam_disi else
                      "eslesen" if p_es[p] else "aday" if p_ad[p] else "atlasta-yok")
    for d in D:
        K = d["id"]
        if k_es[K]:
            k_sinif[K] = "eslesen"
        elif K in noktasiz:
            k_sinif[K] = "noktasiz-kunye" if not k_ad[K] else "noktasiz-kunye(ad-adayi)"
        elif k_ad[K]:
            k_sinif[K] = "aday"
        else:
            k_sinif[K] = "atlasa-ozgu"

    # atlasta-yok ipucu: en iyi zayıf künye (eşik altı)
    ipucu = {}
    for p in P:
        if p_sinif[p] != "atlasta-yok":
            continue
        oz = ozet[p]
        en = []
        for K, v in ic_oy[p].most_common(2):
            en.append("%s(oy %d)" % (K, v))
        best = None
        for d in D:
            kz = KZ.get(d["id"])
            if not kz or kz[1] <= oz["a0"] or kz[0] >= oz["a1"]:
                continue
            a = ad_benzer(oz["ad_an"], K_an[d["id"]])
            if a >= 0.7 and (best is None or a > best[0]):
                best = (a, d["id"])
        if best:
            en.append("ad~%s(%.2f)" % (best[1], best[0]))
        ipucu[p] = " | ".join(en)

    return dict(R=R, P=P, ozet=ozet, ciftler=ciftler, p_sinif=p_sinif, k_sinif=k_sinif,
                p_es=p_es, k_es=k_es, p_ad=p_ad, k_ad=k_ad, D=D, kunye=kunye, KZ=KZ,
                BK=BK, bk_durum=bk_durum, sahipli=sahipli, noktasiz=noktasiz, iliski=iliski,
                yil_say=yil_say, ic_ad=ic_ad, Y=Y, en_erken=en_erken, acik_uc=acik_uc,
                kunye_sentetik=kunye_sentetik, k_kita=k_kita, ipucu=ipucu,
                kapsam_disi=kapsam_disi, bk_red=bk_red, sure=time.time() - t0, top_oy=top_oy,
                ornek_say=ornek_say, pip_say=pip_say)


# ════════════════════════════════════════════════════════════════════════
# SINAV (iki yönlü)
# ════════════════════════════════════════════════════════════════════════
SINAV_POZITIF = [("Ottoman Empire", "osmanli"), ("Byzantine Empire", "bizans"),
                 ("Safavid Dynasty", "safevi"), ("Mamluk Sultanate", "memluk"),
                 ("Akkadian Empire", "akad")]
SINAV_NEGATIF = [("Byzantine Empire", "safevi"), ("Ottoman Empire", "akad"),
                 ("Akkadian Empire", "bizans")]


def sinav(O):
    sonuc, kaldi, olculemedi = [], False, False
    cs = {(c["P"], c["K"]): c for c in O["ciftler"]}
    for pad, K in SINAV_POZITIF:
        if pad not in O["P"]:
            sonuc.append(("POZ", pad, K, "ÖLÇÜLEMEDİ: Cliopatria'da yok"))
            olculemedi = True
            continue
        if K not in O["kunye"]:
            sonuc.append(("POZ", pad, K, "ÖLÇÜLEMEDİ: künye yok"))
            olculemedi = True
            continue
        c = cs.get((pad, K))
        s = c["sinif"] if c else None
        if s == "eslesen":
            sonuc.append(("POZ", pad, K, "GEÇTİ eslesen (%s)" % c["neden"]))
        elif K in O["noktasiz"]:
            sonuc.append(("POZ", pad, K, "ÖLÇÜLEMEDİ: künye noktasız (başkent çözülemedi, "
                          "yerleşim dönemi yok) — sınıf=%s %s" % (s, c["neden"] if c else "")))
            olculemedi = True
        else:
            sonuc.append(("POZ", pad, K, "KALDI sınıf=%s %s" % (s, c and c["neden"])))
            kaldi = True
    # Ur III: Cliopatria'da ayrı polity yok mu? varsa eşleşmeli, yoksa Sumerian City-States'le
    ur_p = [p for p in O["P"] if re.search(r"\bUr\b|Third Dynasty of Ur|Ur III|Neo-Sumerian", p)]
    if ur_p:
        c = [cs.get((p, "ur-3")) for p in ur_p]
        ok = any(x and x["sinif"] == "eslesen" for x in c)
        sonuc.append(("POZ", "/".join(ur_p), "ur-3", "GEÇTİ" if ok else "KALDI"))
        kaldi |= not ok
    else:
        c = cs.get(("Sumerian City-States", "ur-3"))
        sonuc.append(("POZ", "(Cliopatria'da Ur III yok)", "ur-3",
                      "Sumerian City-States ile: %s %s — Cliopatria Ur III'ü ayrı polity olarak "
                      "TAŞIMIYOR (bilgi, sınav maddesi değil)" % (c and c["sinif"], c and c["neden"])))
    # negatif: Frigya atlasta-yok çıkmalı
    if "Phrygia" in O["P"]:
        s = O["p_sinif"]["Phrygia"]
        if s == "atlasta-yok":
            sonuc.append(("NEG", "Phrygia", "-", "GEÇTİ atlasta-yok"))
        else:
            es = [c["K"] for c in O["p_es"]["Phrygia"] + O["p_ad"]["Phrygia"]]
            sonuc.append(("NEG", "Phrygia", "-", "KALDI sınıf=%s %s" % (s, es)))
            kaldi = True
    else:
        sonuc.append(("NEG", "Phrygia", "-", "ÖLÇÜLEMEDİ: Cliopatria'da Phrygia yok"))
        olculemedi = True
    for pad, K in SINAV_NEGATIF:
        c = cs.get((pad, K))
        if c and c["sinif"] == "eslesen":
            sonuc.append(("NEG", pad, K, "KALDI yanlış eşleşme"))
            kaldi = True
        else:
            sonuc.append(("NEG", pad, K, "GEÇTİ eşleşmedi (%s)" % (c and c["sinif"])))
    return sonuc, (1 if kaldi else 2 if olculemedi else 0)


# ════════════════════════════════════════════════════════════════════════
# YAZIM
# ════════════════════════════════════════════════════════════════════════
def tsv(ad, bas, satirlar):
    with io.open(os.path.join(CIKTI, ad), "w", encoding="utf-8", newline="\n") as f:
        f.write("# " + ATIF + "\n")
        f.write("\t".join(bas) + "\n")
        for s in satirlar:
            f.write("\t".join("" if x is None else (("%.3f" % x) if isinstance(x, float) else
                                                       str(x)).replace("\t", " ").replace("\n", " ")
                              for x in s) + "\n")


def git(*a):
    try:
        return subprocess.run(["git"] + list(a), capture_output=True, text=True,
                              cwd=KOK).stdout.strip()
    except OSError:
        return "?"


def yaz(O, zip_yol, sinav_s, sinav_kod):
    os.makedirs(CIKTI, exist_ok=True)
    oz, ps, ks = O["ozet"], O["p_sinif"], O["k_sinif"]
    kunye, KZ = O["kunye"], O["KZ"]

    def yb(a):
        return "%d" % a

    tsv("cliopatria_polity.tsv",
        ["ad", "FromYear_ham", "ToYear_ham", "bas_astro", "son_astro", "sure_yil", "en_buyuk_alan_km2",
         "satir", "bilesik", "kita", "modern_ulke", "temsil_lon", "temsil_lat", "Wikidata",
         "SeshatID", "MemberOf", "sinif"],
        [[p, o["from"], o["to"], o["a0"], o["a1"] - 1, o["sure"], o["alan"], o["satir"],
          int(o["bilesik"]), o["kita"], o["ulke"], "%.3f" % o["lon"], "%.3f" % o["lat"], o["wd"],
          o["sid"], o["uye"], ps[p]] for p, o in oz.items()])

    def cift_satir(c):
        o = oz[c["P"]]
        k = kunye[c["K"]]
        kz = KZ[c["K"]]
        return [c["sinif"], c["P"], o["a0"], o["a1"] - 1, c["K"], k.get("ad"),
                "%.1f" % kz[0], "%.1f" % kz[1], c["ov"], c["zmin"], c["zmax"], c["oy"], c["share"],
                c["cover"], "%d/%d" % (c["bk_ic"], c["bk_test"]), c["ad"], c["neden"]]
    bas_c = ["sinif", "cliopatria", "c_bas_astro", "c_son_astro", "kunye_id", "kunye_ad",
             "k_f", "k_t", "ortusme_yil", "zaman_kisa", "zaman_uzun", "yerlesim_oyu",
             "pay_P", "kapsam_K", "baskent_ic/test", "ad_benzer", "neden"]
    es = sorted([c for c in O["ciftler"] if c["sinif"] in ("eslesen", "aday")],
                key=lambda c: (c["sinif"], c["P"], -c["zmin"]))
    tsv("eslesme.tsv", bas_c, [cift_satir(c) for c in es if c["sinif"] == "eslesen"])
    tsv("aday.tsv", bas_c, [cift_satir(c) for c in es if c["sinif"] == "aday"])

    yok = [p for p in oz if ps[p] == "atlasta-yok"]
    yok.sort(key=lambda p: -oz[p]["alan"] * oz[p]["sure"])
    tsv("atlasta_yok.tsv",
        ["sira", "ad", "FromYear_ham", "ToYear_ham", "bas_astro", "son_astro", "donem", "kita",
         "modern_ulke", "en_buyuk_alan_km2", "sure_yil", "alan_x_sure", "bilesik", "Wikidata",
         "SeshatID", "Wikipedia", "esik_alti_ipucu"],
        [[i + 1, p, oz[p]["from"], oz[p]["to"], oz[p]["a0"], oz[p]["a1"] - 1, donem(oz[p]["a0"]),
          oz[p]["kita"], oz[p]["ulke"], oz[p]["alan"], oz[p]["sure"], oz[p]["alan"] * oz[p]["sure"],
          int(oz[p]["bilesik"]), oz[p]["wd"], oz[p]["sid"], oz[p]["wp"], O["ipucu"].get(p, "")]
         for i, p in enumerate(yok)])

    ozg = [d for d in O["D"] if ks[d["id"]] in ("atlasa-ozgu",) or ks[d["id"]].startswith("noktasiz")]
    ozg.sort(key=lambda d: (ks[d["id"]], KZ[d["id"]][0] if KZ[d["id"]] else 9e9))
    tsv("atlasa_ozgu.tsv",
        ["sinif", "kunye_id", "ad", "tur", "bolge", "f", "t", "baskent", "baskent_cozuldu",
         "yerlesim_donem_sayisi", "donem", "kita"],
        [[ks[d["id"]], d["id"], d.get("ad"), d.get("tur"), d.get("bolge"), d.get("f"), d.get("t"),
          d.get("baskent"), "evet" if d["id"] in O["BK"] else "hayir", O["sahipli"][d["id"]],
          donem(KZ[d["id"]][0] if KZ[d["id"]] else None), O["k_kita"][d["id"]]] for d in ozg])

    rapor(O, zip_yol, sinav_s, sinav_kod, yok)


def rapor(O, zip_yol, sinav_s, sinav_kod, yok):
    oz, ps, ks = O["ozet"], O["p_sinif"], O["k_sinif"]
    L = []
    w = L.append
    w("# EVREN-DEVLET — atlas künyeleri × Cliopatria v0.2.1")
    w("")
    w("*Bu dosya `py -I arac/evren_devlet.py <zip>` tarafından ÜRETİLDİ; elle düzenleme — yeniden koştur.*")
    w("")
    w("> " + ATIF)
    w("")
    w("| | |\n|---|---|")
    w("| ağaç | `%s` |" % KOK)
    w("| dal · commit | `%s` · `%s` |" % (git("rev-parse", "--abbrev-ref", "HEAD"), git("rev-parse", "HEAD")))
    kirli = git("status", "--porcelain", "--", "data", "arac/girdi.py")
    w("| data/ + girdi kirli mi | %s |" % ("EVET: " + kirli.replace("\n", " ") if kirli else "HAYIR (temiz)"))
    w("| makine · zaman | %s · %s |" % (os.environ.get("COMPUTERNAME", "?"), time.strftime("%Y-%m-%d %H:%M")))
    w("| girdi | `%s` (içerik: `%s`) |" % (os.path.basename(zip_yol), O["ic_ad"]))
    w("| süre | %.0f sn · %d nokta-poligon testi |" % (O["sure"], O["pip_say"]))
    w("")

    w("## Sonuç özeti")
    pc = collections.Counter(ps.values())
    kc = collections.Counter(ks.values())
    bil = sum(1 for p in oz if oz[p]["bilesik"])
    w("- **Cliopatria:** %d polity adı (%d POLITY satırı); bunların %d'i bileşik (parantezli ad), "
      "%d'i %d sonrası başladığı için kapsam dışı." % (len(oz), len(O["R"]), bil, len(O["kapsam_disi"]), UST_YIL))
    w("- **Polity sınıfları:** " + " · ".join("%s %d" % (k, pc[k]) for k in
                                                ("eslesen", "aday", "atlasta-yok", "kapsam-disi")))
    w("- **Künye sınıfları (%d künye%s):** " % (len(O["D"]), ", 1'i sentetik osmanli" if O["kunye_sentetik"] else "")
      + " · ".join("%s %d" % (k, v) for k, v in sorted(kc.items())))
    w("- **İki yönlü sınav:** çıkış %d (%s)." % (sinav_kod, {0: "geçti", 1: "KALDI", 2: "ölçülemedi var"}[sinav_kod]))
    w("")
    w("🔴 **Cevap (halka ①):** hayır, liste elimizde değil. Cliopatria'nın kapsamı içindeki "
      "%d tekil (bileşik olmayan) polity'den **%d**'i atlasın hiçbir künyesiyle mekân+zaman "
      "üzerinden eşleşmedi ve ad+zaman yardımcı işareti de yok (`atlasta_yok.tsv`). Ama bu sayı "
      "bir ÜST sınırdır: atlasın MÖ ve 330 öncesi yerleşim sahipliği hiç yazılmadığı için o "
      "dönemde tek mekânsal işaret künyenin BAŞKENT noktasıdır; başkenti çözülemeyen künye "
      "eşleşemez (aşağıda `noktasiz-kunye`)." % (
          sum(1 for p in oz if not oz[p]["bilesik"] and p not in O["kapsam_disi"]),
          sum(1 for p in yok if not oz[p]["bilesik"])))
    w("")

    w("## Yıl dönüşümü — KARAR")
    ys = O["yil_say"]
    w("- README (aynı dizin): *Years are recorded as integers, negative for BCE, positive for CE*, "
      "From/To **kapsayıcı**.")
    w("- Veride ölçüldü: `-1` değeri **%d** kez, `0` değeri **%d** kez, `1` değeri **%d** kez geçiyor. "
      "`0` ile biten 6 satırın ardılı `1` ile başlıyor (Roman Empire, Parthian Empire, Yuezhi, "
      "Indo-Scythians, Judea, Indo-Greeks). Roman Empire FromYear=-31 (Aktion, MÖ 31), Roman Republic "
      "ToYear=-32." % (ys.get(-1, 0), ys.get(0, 0), ys.get(1, 0)))
    w("- ⇒ Negatif değer **MÖ etiketidir** (tarihî numaralandırma); `0`, MÖ 1 yerine kullanılmış. "
      "**Dönüşüm: `astro = Y + 1` (Y < 0), `astro = Y` (Y ≥ 0).** MÖ 3400 → -3399; MÖ 31 → -30; "
      "0 → 0 (= MÖ 1). `-1` veride yok ⇒ 0 ile çakışan iki değer yok.")
    w("- Satır aralığı astronomik `[astro(From), astro(To)+1)` yarı açık aralık; atlas künyesi `[f, t)`.")
    w("- Atlas künyeleri zaten astronomik (`VERI-YAPISI.md` §MÖ). Kalan risk: Cliopatria'nın tek tek "
      "satırlarının yılları kendi kaynaklarına göre kaba (ör. Ptolemaic Kingdom ToYear=-28, Achaemenid "
      "ToYear=-327); bu bir yıllık kaymadan büyüktür ve dönüşüm onu düzeltmez.")
    w("")

    w("## Evren ve tanımlar")
    rel_ad = sorted({r["Name"] for r in O["iliski"]})
    w("- **RELATION:** %d satır, %d ad. Biçim `(Alliance between X and Y)` / `(Allegiance of X to Y)` "
      "— bir siyasi yapı DEĞİL, iki polity arasındaki ittifak/tâbiiyet ilişkisi; `Components` "
      "alanı tarafları sayar. Eşleşmeye **katılmadı**. Örnek: %s." % (
          len(O["iliski"]), len(rel_ad), "; ".join(rel_ad[:5])))
    w("- **Bileşik POLITY:** adı parantezli %d polity (`(Holy Roman Empire)`, `(Kingdom of France)` …) "
      "— bileşenlerinin (Components) çatısı; tekil polity'ler `MemberOf` ile ona bağlanır. "
      "Eşleşmeye katıldı ama `bilesik=1` işaretli; özetteki eksik sayısına KATILMADI." % bil)
    w("- **Atlas yerleşim evreni:** `girdi.yukle()` → %d yerleşim. Sahiplik `v:`/`d:` → `osmanli`, "
      "`s:` → `d:` (öncelik v > d > s, `kur`/`bit` sahnesi, `__BOSLUK__` atılır; `isg:` sahiplik "
      "değiştirmediği için sayılmaz). **En erken sahiplik dönemi: %.0f** ⇒ bundan önceki örnek "
      "yıllarda yerleşim oyu YOKTUR." % (len(O["Y"]), O["en_erken"] or 0))
    if O["kunye_sentetik"]:
        w("- 🔴 **Osmanlı'nın `data/devletler.js`te künyesi YOK** (`id:\"osmanli\"` bulunmadı; "
          "`d:`/`v:` katmanı onu taşır). Ölçüm için sentetik künye kullanıldı: ömür atlasın "
          "kapsam beyanı 1281–1923 (CLAUDE.md), başkent İstanbul. Kendi başına bir bulgudur.")
    w("- **Başkent çözümü:** `silsile_olc.py` Dizin + `parca_coz` (yeni çözücü yazılmadı); "
      "`baskent` metni `→ / , ; ve sonra` ile parçalanır. Sonuç: %s." % dict(O["bk_durum"]))
    w("- **Başkent kıta süzgeci:** çözülen başkent noktası künyenin `bolge` kıtasıyla çelişirse "
      "(Avrupa↔Asya hariç) nokta atıldı — çözücünün eşadlı yanlış yeri: **%d** nokta. %s" % (
          len(O["bk_red"]), "; ".join("%s: '%s'→%s (%s, beklenen %s)" % r for r in O["bk_red"][:12])))
    w("- **Açık uçlu künye:** `t` yok → %.0f sayıldı (%d künye: %s…)." % (
        ACIK_UC, len(O["acik_uc"]), ", ".join(O["acik_uc"][:8])))
    w("- **Nokta-poligon:** saf Python (ray casting, çift-tek; bbox + 1° yerleşim ızgarası + enlem "
      "bandı kenar dizini). Köşe seyreltme %.3f°; poligon dışına düşen nokta için ±%.2f° (~5 km) "
      "dört komşu denenir (kıyı şehirleri kaba poligonun dışında kalmasın)." % (SADELE_DERECE, KIYI_TAMPON))
    w("- **Örnek yıllar:** her satırın ilk, orta, son yılı (astronomik, yıl ortası).")
    w("")

    w("## Sınıflama kuralları (eşikler)")
    w("Her (polity P, künye K) çifti için: `zaman_kisa` = örtüşme / kısa olanın süresi; "
      "`pay_P` = P poligonlarındaki sahipli yerleşim oylarının K'ya düşen payı; `kapsam_K` = aynı "
      "örnek yıllarda K'nın dünyadaki yerleşimlerinin P içinde kalan payı; `baskent` = K'nın ömrüyle "
      "örtüşen P satırlarının kaçında K'nın başkenti poligonda; `ad_benzer` = transliterasyon "
      "katlamalı (q→k, kh→h, w→v, ç ekleri…) en iyi difflib oranı — YALNIZ yardımcı.")
    w("")
    w("| sınıf | kural |\n|---|---|")
    w("| eslesen (mekan-iki-yon) | zaman_kisa ≥ %.1f VE pay_P ≥ %.1f VE kapsam_K ≥ %.1f |" % (ZAMAN_ESIK, MEKAN_GUCLU, MEKAN_GUCLU))
    w("| eslesen (baskent) | zaman_kisa ≥ %.1f VE başkent satırların ≥ %%%d'inde içeride VE (pay_P ≥ %.2f YA DA K'nın o yıllarda hiç yerleşim oyu yok) VE (örtüşme/uzun süre ≥ %.2f YA DA ad_benzer ≥ %.1f) |" % (ZAMAN_ESIK, BASKENT_ESIK * 100, MEKAN_ZAYIF_SHARE, BASKENT_ZMAX, AD_ESIK))
    w("| eslesen (mekan-zayif+ad) | zaman_kisa ≥ %.1f VE (zayıf mekân YA DA başkent) VE ad_benzer ≥ %.1f |" % (ZAMAN_ESIK, AD_ESIK))
    w("| aday | zaman örtüşüyor ama yukarıdakiler tutmuyor ve bir mekânsal işaret var (zayıf mekân: oy ≥ %d ve pay ≥ %.2f ya da kapsam ≥ %.1f); ya da künye noktasız ve ad_benzer ≥ %.1f + zaman_kisa ≥ %.1f — `neden` sütunu hangisi olduğunu yazar |" % (MEKAN_ZAYIF_OY, MEKAN_ZAYIF_SHARE, MEKAN_ZAYIF_COVER, AD_ESIK, ZAMAN_ESIK))
    w("| atlasta-yok | polity hiçbir künyeyle eslesen/aday değil — EKSİK DEVLET ADAYI |")
    w("| atlasa-ozgu | künye hiçbir polity ile eslesen/aday değil (YANLIŞ demek değil: Cliopatria küçük beylik/kontluk/kabile kapsamayabilir) |")
    w("| noktasiz-kunye | künyenin hiçbir `s:` dönemi yok VE başkenti yerleşime çözülemedi — mekânsal ÖLÇÜLEMEDİ (≠ yok) |")
    w("")

    # dönem × kıta
    def tablo(baslik, sayac_fn, kumeler, satir_ad):
        w("### " + baslik)
        w("")
        w("| " + satir_ad + " | " + " | ".join(DONEMLER) + " | toplam |")
        w("|---" * (len(DONEMLER) + 2) + "|")
        for k in kumeler:
            row = [sayac_fn(k, dn) for dn in DONEMLER]
            w("| %s | %s | %d |" % (k, " | ".join(str(x) for x in row), sum(row)))
        w("")

    w("## Dönem × kıta")
    w("Polity için dönem = astronomik ilk yıl, kıta = en büyük satırın temsil noktasının modern "
      "ülkesi (Natural Earth CONTINENT; Rusya Avrupa sayılır). Künye için kıta = başkent noktası "
      "çözüldüyse NE ülkesi, yoksa `bolge` eşlemesi. **Bileşik polity'ler ve %d sonrası başlayanlar hariç.**" % UST_YIL)
    w("")
    tekil = [p for p in oz if not oz[p]["bilesik"] and p not in O["kapsam_disi"]]
    for sinif in ("eslesen", "aday", "atlasta-yok"):
        tablo("Cliopatria polity — %s" % sinif,
              lambda k, dn, s=sinif: sum(1 for p in tekil if ps[p] == s and oz[p]["kita"] == k
                                         and donem(oz[p]["a0"]) == dn), KITALAR, "kıta")
    KZ = O["KZ"]
    for sinif in sorted(set(ks.values())):
        tablo("Atlas künyesi — %s" % sinif,
              lambda k, dn, s=sinif: sum(1 for d in O["D"] if ks[d["id"]] == s
                                         and O["k_kita"][d["id"]] == k
                                         and donem(KZ[d["id"]][0] if KZ[d["id"]] else None) == dn),
              KITALAR, "kıta")

    w("## En büyük 50 `atlasta-yok` (tekil polity; alan × süre)")
    w("")
    w("| # | Cliopatria | yıl (ham) | astro | kıta · ülke | alan km² | süre | Wikidata | eşik altı ipucu |")
    w("|---|---|---|---|---|---|---|---|---|")
    n = 0
    for p in yok:
        if oz[p]["bilesik"]:
            continue
        n += 1
        o = oz[p]
        w("| %d | %s | %d…%d | %d…%d | %s · %s | %.0f | %.0f | %s | %s |" % (
            n, p, o["from"], o["to"], o["a0"], o["a1"] - 1, o["kita"], o["ulke"], o["alan"],
            o["sure"], o["wd"], O["ipucu"].get(p, "")))
        if n >= 50:
            break
    w("")

    w("## Kırılma ayrımı")
    bire_cok = {p: v for p, v in O["p_es"].items() if len({c["K"] for c in v}) >= 2}
    coka_bir = {k: v for k, v in O["k_es"].items() if len({c["P"] for c in v}) >= 2}
    w("- **Bire-çok** (bir Cliopatria polity'si ↔ ≥2 künye; atlas daha ince bölmüş ya da "
      "eyalet/tâbi künyeleri çatıya düşüyor): **%d** polity." % len(bire_cok))
    w("- **Çoka-bir** (bir künye ↔ ≥2 Cliopatria polity'si; Cliopatria dönemlere bölmüş, ör. Roman "
      "Empire / Eastern Roman / Byzantine): **%d** künye." % len(coka_bir))
    w("")
    w("### Bire-çok (ilk 40, künye sayısına göre)")
    for p, v in sorted(bire_cok.items(), key=lambda kv: -len(kv[1]))[:40]:
        w("- **%s** → %s" % (p, ", ".join(sorted({c["K"] for c in v}))))
    w("")
    w("### Çoka-bir (ilk 40, polity sayısına göre)")
    for k, v in sorted(coka_bir.items(), key=lambda kv: -len(kv[1]))[:40]:
        w("- **%s** → %s" % (k, ", ".join(sorted({c["P"] for c in v}))))
    w("")

    w("## İki yönlü sınav")
    w("")
    for s in sinav_s:
        w("- %s · %s ↔ %s · %s" % s)
    w("")

    w("## Kapsam uyarıları")
    w("- Cliopatria **kalıcı toprak tutan siyasi yapıları** çizer; poligonsuz (göçebe konfederasyon "
      "çekirdeği belirsiz olanlar kısmen var), çok küçük şehir devletleri, kontluklar, Haçlı "
      "senyörlükleri, beylik altı birimler, isyan/geçici hükümetler, sömürge alt birimleri büyük ölçüde "
      "yoktur ya da bileşik çatı altına toplanmıştır (`MemberOf`). Bu yüzden `atlasa-ozgu` YANLIŞ demek değildir.")
    w("- Cliopatria satırları yıl hassasiyetindedir (çoğu kaba adım: 10–100 yıl). Gün hassasiyetli "
      "atlas künyesiyle yalnız örtüşme oranı karşılaştırılır.")
    w("- Cliopatria'da adlar İngilizce/Wikipedia biçimi; Ur III, Lagaş, Isin, Larsa gibi şehir "
      "hanedanları **Sumerian City-States** çatısında tek polity'dir.")
    w("- Atlas tarafında: MÖ ve 330 öncesi yerleşim sahipliği hiç yazılmamış (en erken sahiplik "
      "%.0f) ⇒ o dönemde eşleşme YALNIZ başkent noktasına dayanır; başkent çözülemeyen künye "
      "noktasızdır." % (O["en_erken"] or 0))
    w("- Polity poligonları çoğunlukla kaba; ±5 km tampon kıyı şehirlerini kurtarır ama komşu "
      "polity'nin sınır şehrini de içeri alabilir (zayıf oy eşiği bunun için ≥ %d)." % MEKAN_ZAYIF_OY)
    w("")
    w("## Ölçülemeyenler")
    nk = [d["id"] for d in O["D"] if ks[d["id"]].startswith("noktasiz")]
    w("- `noktasiz-kunye`: **%d** künye — hiç `s:` dönemi yok ve başkenti çözülemedi. Mekânsal ölçülemedi; "
      "`atlasa_ozgu.tsv`de ayrı sınıfla listelenir. Örnek: %s." % (len(nk), ", ".join(nk[:15])))
    mo = [d for d in O["D"] if KZ[d["id"]] and KZ[d["id"]][0] < 1]
    mo_nk = [d for d in mo if ks[d["id"]].startswith("noktasiz")]
    w("- MÖ künyeleri: %d; bunların **%d**'i noktasız (yerleşim dönemi MÖ'ye inmiyor, başkent "
      "yerleşim indeksinde yok/çözülmedi). Çözülemeyen MÖ başkent metinleri (halka ③ ile aynı kopukluk): %s." % (
          len(mo), len(mo_nk), "; ".join(sorted({str(d.get("baskent")) for d in mo_nk}))[:1500]))
    w("- Künye `f` okunamayan: %d." % sum(1 for d in O["D"] if not KZ[d["id"]]))
    w("")
    w("## Dosyalar")
    w("- `cliopatria_polity.tsv` — türetilmiş polity listesi (ad başına özet + sınıf)")
    w("- `eslesme.tsv` · `aday.tsv` — çift metrikleri; `neden` sütunu")
    w("- `atlasta_yok.tsv` — EKSİK DEVLET ADAYLARI (alan × süre sıralı; bileşikler `bilesik=1`)")
    w("- `atlasa_ozgu.tsv` — künye tarafı: atlasa-özgü + noktasız")
    w("")
    w("> " + ATIF)
    with io.open(os.path.join(CIKTI, "RAPOR.md"), "w", encoding="utf-8", newline="\n") as f:
        f.write("\n".join(L) + "\n")


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("zip", help="cliopatria.geojson.zip yolu (depoya kopyalanmaz)")
    ap.add_argument("--sinav", action="store_true", help="yalnız iki yönlü sınav, dosya yazmaz")
    a = ap.parse_args()
    if not os.path.exists(a.zip):
        log("ÖLÇÜLEMEDİ: girdi yok: %s" % a.zip)
        return 2
    O = olc(a.zip)
    s, kod = sinav(O)
    for x in s:
        log("  SINAV %s · %s ↔ %s · %s" % x)
    if a.sinav:
        return kod
    yaz(O, a.zip, s, kod)
    pc = collections.Counter(O["p_sinif"].values())
    kc = collections.Counter(O["k_sinif"].values())
    log("polity: %s" % dict(pc))
    log("künye : %s" % dict(kc))
    log("yazıldı: %s (ölçüm %.0f sn)" % (CIKTI, O["sure"]))
    return kod


if __name__ == "__main__":
    sys.exit(main())
