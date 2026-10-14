# -*- coding: utf-8 -*-
"""GAZETEER KOORDİNAT KATMANI — silsile_olc.py halka ③'ün yardımcısı.
                                                         SILSILE-KOORDINAT-1014
Emre kararı (14 Ekim 2026): "Şehirlerin eşleştirilmesinde koordinat sistemi
kullanalım; farklı adlar bu şekilde birleşsin."

Adla çözülemeyen bir yer adı için gazeteerde (GeoNames cities1000, Pleiades)
aday koordinat arar, adayı maddenin BAĞLAMIYLA daraltır ve atlas yerleşimine
uzaklığına göre sınıflar:
    ≤ 3 km   atlasta-farkli-adla   (eşanlam ADAYI — insan onayı ister)
    3–15 km  yakin-incele          (aynı şehir mi, antik/yeni yer mi?)
    > 15 km  atlasta-yok           (yeni nokta ADAYI)
    belirsiz                       (bağlam yok / bağlamda >1 ayrı yer / bağlam dışı)
    gazeteerde-yok                 (hiçbir gazeteerde adı yok)

🔴 GAZETEER TARİH DAYANAĞI DEĞİLDİR (CLAUDE.md kaynak kuralı): yalnız koordinat
   ve ad birleştirme içindir. Bu modül hiçbir veri dosyasına YAZMAZ.
🔴 Gazeteer dosyaları GÜVENİLMEYEN veridir: yalnız okunur (csv/zip/gzip),
   hiçbir alanı kod olarak yorumlanmaz.

Atıf (her çıktıda yazılır):
  GeoNames (geonames.org) cities1000 — CC BY 4.0
  Pleiades (pleiades.stoa.org), NYU ISAW — CC BY 3.0
"""
import collections
import csv
import gzip
import io
import math
import os
import re
import zipfile

ATIF = ("Koordinat kaynakları: GeoNames cities1000 (geonames.org, CC BY 4.0) · "
        "Pleiades (pleiades.stoa.org, NYU ISAW, CC BY 3.0). Gazeteer TARİH DAYANAĞI "
        "DEĞİLDİR — yalnız koordinat ve ad birleştirme içindir.")

ESIK_AYNI_KM = 3.0          # ≤ → atlasta-farkli-adla
ESIK_YAKIN_KM = 15.0        # ≤ → yakin-incele, > → atlasta-yok
KUME_KM = 10.0              # aynı yerin iki gazeteer kaydı bu kadar yakın olur
TAMPON_KM = 300.0           # bağlam alanı: künye noktalarının zarfı + tampon
YER_KON_KM = 50.0           # maddenin kendi yer_kon'u bağlamı (en dar katman)
ANTIK_SINIR = 1500          # madde tarihi < 1500 → Pleiades öncelikli
GENIS_KATMAN = ("bolge:", "dosya-varsayimi:")   # bu katmanlarda GeoNames alternatif adı yetmez
ZARF_AZAMI_DERECE2 = 1200.0  # bundan geniş dışbükey zarf kullanılmaz (≈ 35°×35°)

R_KM = 6371.0


def km(a_lat, a_lon, b_lat, b_lon):
    p1, p2 = math.radians(a_lat), math.radians(b_lat)
    dp, dl = p2 - p1, math.radians(b_lon - a_lon)
    h = math.sin(dp / 2) ** 2 + math.cos(p1) * math.cos(p2) * math.sin(dl / 2) ** 2
    return 2 * R_KM * math.asin(min(1.0, math.sqrt(h)))


def _ad_gecerli(n):
    """GeoNames alternatenames çöpü: kodlar ('IST', 'TR-63'), URL'ler, sayılar."""
    if not n or len(n) < 2 or re.search(r"\d|https?:|www\.", n):
        return False
    if n.isupper() and len(n) <= 4:          # IATA/ICAO/kısaltma
        return False
    # küçük harfle başlayan alternatif ad çoğu kez çöp/cins addır ('kuba' → Couva,
    # Trinidad — Küba adaş vakası); 'al-', 'el-' gibi tanım ekleri hariç
    if n[:1].islower() and not re.match(r"^(al|el|ad|ar|as|ash|an|at|az|ad|de|da|di|la|le|ibn|bin)[-\s'’]", n):
        return False
    return True


class Gazeteer:
    """Yalnız sorulan anahtarlar için indeks kurar (bütün GeoNames
    alternatenames'i belleğe almamak için): `yukle(anahtarlar)`.
    Anahtar = kural(sade(ad)) — atlasın kendi katlaması."""

    def __init__(self, geonames_zip, pleiades_dir, sade, kural):
        self.geonames_zip = geonames_zip
        self.pleiades_dir = pleiades_dir
        self.sade = sade
        self.kural = kural
        self.idx = collections.defaultdict(list)
        self.say = collections.Counter()
        self.olculemedi = []

    def _k(self, n):
        s = self.sade(n)
        return self.kural(s) if s else ""

    # ── GeoNames ───────────────────────────────────────────────────────
    def _geonames(self, Q):
        if not self.geonames_zip:
            self.olculemedi.append("GeoNames yolu verilmedi")
            return
        if not os.path.exists(self.geonames_zip):
            self.olculemedi.append("GeoNames dosyası yok: %s" % self.geonames_zip)
            return
        z = zipfile.ZipFile(self.geonames_zip)
        ad = [n for n in z.namelist() if n.endswith(".txt") and "readme" not in n.lower()][0]
        onbellek = {}
        with z.open(ad) as f:
            for satir in io.TextIOWrapper(f, encoding="utf-8"):
                p = satir.rstrip("\n").split("\t")
                if len(p) < 19:
                    continue
                self.say["geonames_kayit"] += 1
                try:
                    lat, lon = float(p[4]), float(p[5])
                    nufus = int(p[14] or 0)
                except ValueError:
                    continue
                gor = set()
                adlar = [(p[1], True), (p[2], True)] + [(x, False) for x in p[3].split(",")]
                for n, asil in adlar:
                    if not _ad_gecerli(n):
                        continue
                    k = onbellek.get(n)
                    if k is None:
                        k = self._k(n)
                        if len(onbellek) < 2_000_000:
                            onbellek[n] = k
                    if len(k) < 3 or k not in Q or k in gor:
                        continue
                    gor.add(k)
                    self.idx[k].append({
                        "kaynak": "geonames", "id": p[0], "uri": "https://www.geonames.org/" + p[0],
                        "ad": p[1], "eslesen": n, "asil": asil, "lat": lat, "lon": lon,
                        "tur": "%s.%s" % (p[6], p[7]), "ulke": p[8], "nufus": nufus,
                        "zaman": ""})
        self.say["geonames_eslesme"] = sum(1 for v in self.idx.values() for c in v
                                           if c["kaynak"] == "geonames")

    # ── Pleiades ───────────────────────────────────────────────────────
    def _pleiades(self, Q):
        if not self.pleiades_dir:
            self.olculemedi.append("Pleiades yolu verilmedi")
            return
        yer = os.path.join(self.pleiades_dir, "pleiades-places-latest.csv.gz")
        ad = os.path.join(self.pleiades_dir, "pleiades-names-latest.csv.gz")
        if not (os.path.exists(yer) and os.path.exists(ad)):
            self.olculemedi.append("Pleiades places/names dosyası yok: %s" % self.pleiades_dir)
            return
        csv.field_size_limit(1 << 30)
        yerler = {}
        with gzip.open(yer, "rt", encoding="utf-8", newline="") as f:
            for r in csv.DictReader(f):
                self.say["pleiades_yer"] += 1
                try:
                    lat, lon = float(r["reprLat"]), float(r["reprLong"])
                except (TypeError, ValueError):
                    self.say["pleiades_koordinatsiz"] += 1
                    continue
                pid = "/places/" + r["id"]
                yerler[pid] = {"kaynak": "pleiades", "id": r["id"],
                               "uri": "https://pleiades.stoa.org/places/" + r["id"],
                               "ad": r["title"], "lat": lat, "lon": lon,
                               "tur": r.get("featureTypes") or "", "ulke": "", "nufus": 0,
                               "zaman": r.get("timePeriodsRange") or "",
                               "kesinlik": r.get("locationPrecision") or ""}
        adlar = collections.defaultdict(list)       # pid → [(ad, asıl mı)]
        for pid, y in yerler.items():
            adlar[pid].append((y["ad"], True))
        with gzip.open(ad, "rt", encoding="utf-8", newline="") as f:
            for r in csv.DictReader(f):
                pid = r.get("pid") or ""
                if pid not in yerler:
                    continue
                for alan in ("nameTransliterated", "nameAttested"):
                    for n in re.split(r"[,/;]", r.get(alan) or ""):
                        n = n.strip()
                        if n:
                            adlar[pid].append((n, False))
        for pid, ls in adlar.items():
            gor = set()
            for n, asil in ls:
                # 'Carrhae (Harran)' gibi başlıklar: parantez içi de ad
                parcalar = [n] + re.findall(r"\(([^()]*)\)", n) + [re.sub(r"\s*\(.*?\)\s*", " ", n)]
                for x in parcalar:
                    x = x.strip()
                    if not _ad_gecerli(x):
                        continue
                    k = self._k(x)
                    if len(k) < 3 or k not in Q or k in gor:
                        continue
                    gor.add(k)
                    c = dict(yerler[pid])
                    c.update({"eslesen": x, "asil": asil})
                    self.idx[k].append(c)
        self.say["pleiades_eslesme"] = sum(1 for v in self.idx.values() for c in v
                                           if c["kaynak"] == "pleiades")

    def yukle(self, anahtarlar):
        Q = {a for a in anahtarlar if a}
        self._geonames(Q)
        self._pleiades(Q)
        return self

    def adaylar(self, anahtarlar):
        out, gor = [], set()
        for a in anahtarlar:
            for c in self.idx.get(a, []):
                u = (c["kaynak"], c["id"])
                if u not in gor:
                    gor.add(u)
                    out.append(c)
        return out


# ════════════════════════════════════════════════════════════════════════
# BAĞLAM
# ════════════════════════════════════════════════════════════════════════
class Baglam:
    """Künye → atlas noktaları (s:d sahibi; d:/v: = osmanli) ve bolge → noktalar.
    Bağlam alanı = noktaların dışbükey zarfı (lon/lat düzleminde) ∪ her noktanın
    TAMPON_KM çevresi. Antimeridyeni geçen künyede zarf yanlış olabilir —
    tampon katmanı yine çalışır (ölçüm uyarısı)."""

    def __init__(self, Y, D):
        import numpy as np
        from scipy.spatial import cKDTree
        self.np = np
        self.cKDTree = cKDTree
        self.Y = Y
        harita = {}
        for d in D:
            harita[d["id"]] = d["id"]
            if d.get("harita"):
                harita.setdefault(d["harita"], d["id"])
        self.kunye = {d["id"]: d for d in D}
        self.nokta = collections.defaultdict(set)      # künye id → {yerleşim idx}
        for i, y in enumerate(Y):
            for p in y.get("s") or []:
                if isinstance(p, dict) and p.get("d") and p["d"] != "__BOSLUK__":
                    self.nokta[harita.get(p["d"], p["d"])].add(i)
            if y.get("d") or y.get("v"):
                self.nokta["osmanli"].add(i)
        # BÖLGE ALANI: künyenin bütün noktalarının birleşimi DEĞİL (İlhanlı 'iran' künyesi
        # Anadolu'yu da tutar ⇒ 'iran' alanı Aydın'a uzanır, Aydın'daki 'Alamut' köyü seçilirdi).
        # Her noktanın EV BÖLGESİ = en uzun süre sahibi olan (osmanli dışı) künyenin bolge'si;
        # yalnız osmanli (d:/v:) ya da bolgesiz sahipli noktalar en yakın 7 ev-bölgeli noktanın
        # çoğunluk oyuyla kovalanır (yalnız kovalama — tarihî iddia değildir).
        def _yil_(s, vars_):
            m = re.match(r"^\s*(-?)(\d{1,5})", str(s or ""))
            return (int(m.group(2)) * (-1 if m.group(1) else 1)) if m else vars_
        ev = {}
        for i, y in enumerate(Y):
            sure = collections.Counter()
            for p in y.get("s") or []:
                if not isinstance(p, dict):
                    continue
                kid = harita.get(p.get("d"), p.get("d"))
                if kid in self.kunye and self.kunye[kid].get("bolge"):
                    sure[self.kunye[kid]["bolge"]] += max(1, _yil_(p.get("t"), 2000) - _yil_(p.get("f"), 1281))
            osm = sum(max(1, _yil_(p.get("t"), 1923) - _yil_(p.get("f"), 1281))
                      for k_ in ("d", "v") for p in (y.get(k_) or []) if isinstance(p, dict))
            if sure and max(sure.values()) >= osm:
                ev[i] = sure.most_common(1)[0][0]
        evli = sorted(ev)
        if evli:
            import numpy as np
            from scipy.spatial import cKDTree
            tr = cKDTree(self._uc(np, np.array([Y[i]["lat"] for i in evli]),
                                  np.array([Y[i]["lon"] for i in evli])))
            evsiz = [i for i in range(len(Y)) if i not in ev]
            if evsiz:
                _, nn = tr.query(self._uc(np, np.array([Y[i]["lat"] for i in evsiz]),
                                          np.array([Y[i]["lon"] for i in evsiz])), k=min(7, len(evli)))
                nn = np.atleast_2d(nn)
                for i, row in zip(evsiz, nn):
                    ev[i] = collections.Counter(ev[evli[int(j)]] for j in row).most_common(1)[0][0]
        self.ev_bolge = ev
        self.bolge_nokta = collections.defaultdict(set)
        for i, b in ev.items():
            self.bolge_nokta[b].add(i)
        self._alan = {}

    @staticmethod
    def _uc(np, lat, lon):
        la, lo = np.radians(lat), np.radians(lon)
        return np.c_[np.cos(la) * np.cos(lo), np.cos(la) * np.sin(lo), np.sin(la)]

    def alan(self, anahtar, idxler):
        """→ alan nesnesi (ağaç + zarf) ya da None (nokta yok)."""
        if anahtar in self._alan:
            return self._alan[anahtar]
        idxler = sorted(idxler)
        if not idxler:
            self._alan[anahtar] = None
            return None
        np = self.np
        lat = np.array([self.Y[i]["lat"] for i in idxler])
        lon = np.array([self.Y[i]["lon"] for i in idxler])
        zarf = None
        if len(idxler) >= 3:
            from shapely.geometry import MultiPoint
            z = MultiPoint(list(zip(lon, lat))).convex_hull
            # kıtalar arası künyede (ABD+Japonya, sömürgeli Almanya) lon/lat zarfı
            # Asya'yı/Pasifik'i yutar ('Hawaii' → Assam'da 'Hawai'; 'Lidice' → Panama):
            # zarf ancak ≤ ZARF_AZAMI_DERECE² ise kullanılır, değilse yalnız tampon
            if z.geom_type == "Polygon" and z.area <= ZARF_AZAMI_DERECE2:
                from shapely import prepare
                prepare(z)
                zarf = z
        a = {"agac": self.cKDTree(self._uc(np, lat, lon)), "zarf": zarf, "n": len(idxler)}
        self._alan[anahtar] = a
        return a

    def icinde(self, a, lat, lon, tampon=TAMPON_KM):
        if a is None:
            return False
        if a["zarf"] is not None:
            from shapely import contains_xy
            if contains_xy(a["zarf"], lon, lat):
                return True
        d, _ = a["agac"].query(self._uc(self.np, self.np.array([lat]), self.np.array([lon]))[0])
        return R_KM * 2 * math.asin(min(1.0, d / 2)) <= tampon

    def katmanlar(self, taraflar=(), yer_kon=None, ayni_madde=(), bolgeler=(), varsayilan=()):
        """Daralma merdiveni (en dardan en genişe). → [(katman adı, test fonksiyonu)]"""
        out = []
        if yer_kon:
            la, lo = yer_kon
            out.append(("yer_kon<=%dkm" % YER_KON_KM,
                        lambda lat, lon, la=la, lo=lo: km(la, lo, lat, lon) <= YER_KON_KM))
        if ayni_madde:
            a = self.alan(("madde",) + tuple(sorted(ayni_madde)), ayni_madde)
            out.append(("ayni-madde-yerleri", lambda lat, lon, a=a: self.icinde(a, lat, lon)))
        t = [x for x in taraflar if x in self.nokta]
        if t:
            ids = set()
            for x in t:
                ids |= self.nokta[x]
            a = self.alan(("taraf",) + tuple(sorted(t)), ids)
            out.append(("taraf:" + ",".join(sorted(t)), lambda lat, lon, a=a: self.icinde(a, lat, lon)))
        b = sorted({x for x in bolgeler if x and self.bolge_nokta.get(x)})
        if b:
            ids = set()
            for x in b:
                ids |= self.bolge_nokta[x]
            a = self.alan(("bolge",) + tuple(b), ids)
            out.append(("bolge:" + ",".join(b), lambda lat, lon, a=a: self.icinde(a, lat, lon)))
        v = [x for x in varsayilan if x in self.nokta]
        if v:
            a = self.alan(("varsayilan",) + tuple(v), self.nokta[v[0]])
            out.append(("dosya-varsayimi:" + v[0], lambda lat, lon, a=a: self.icinde(a, lat, lon)))
        return out


# ════════════════════════════════════════════════════════════════════════
# ÇÖZÜM
# ════════════════════════════════════════════════════════════════════════
def _kumele(ads):
    """Tek bağlantılı kümeleme (KUME_KM)."""
    kume = []
    for c in ads:
        yer = None
        for k in kume:
            if any(km(c["lat"], c["lon"], x["lat"], x["lon"]) <= KUME_KM for x in k):
                yer = k
                break
        if yer is None:
            kume.append([c])
        else:
            yer.append(c)
    # zincirleme birleşme
    degisti = True
    while degisti:
        degisti = False
        for i in range(len(kume)):
            for j in range(i + 1, len(kume)):
                if any(km(a["lat"], a["lon"], b["lat"], b["lon"]) <= KUME_KM
                       for a in kume[i] for b in kume[j]):
                    kume[i] += kume.pop(j)
                    degisti = True
                    break
            if degisti:
                break
    return kume


def _temsilci(kume, yil):
    """Kümenin temsilcisi: antik/ortaçağ (yıl < 1500) → Pleiades önce, yoksa GeoNames önce;
    sonra asıl-ad eşleşmesi, sonra nüfus."""
    once = "pleiades" if (yil is not None and yil < ANTIK_SINIR) else "geonames"
    return sorted(kume, key=lambda c: (c["kaynak"] != once, not c["asil"], -c["nufus"]))[0]


def coz(gz, bg, anahtarlar, yil, katmanlar, atlas_yakin):
    """Bir yer adı geçişi için koordinat çözümü.
    anahtarlar: kural(sade(...)) varyantları; katmanlar: Baglam.katmanlar(...);
    atlas_yakin(lat, lon) → [(km, idx)] sıralı.
    → dict(sinif, ...)"""
    ads = gz.adaylar(anahtarlar)
    if not ads:
        return {"sinif": "gazeteerde-yok", "aday_n": 0}
    if not katmanlar:
        return {"sinif": "belirsiz", "sebep": "baglam-yok", "aday_n": len(ads),
                "kume_n": len(_kumele(ads)), "adaylar": ads}
    for ad_k, test in katmanlar:
        ic = [c for c in ads if test(c["lat"], c["lon"])]
        if not ic:
            continue
        if ad_k.startswith(GENIS_KATMAN):
            # geniş bağlamda GeoNames alternatenames eşleşmesi tek başına yetmez
            # ('Jiankang' → Yunnan'da Tongzilin; 'Uşi (Ouchy)' → Gürün yanında 'Usi')
            ic2 = [c for c in ic if c["asil"] or c["kaynak"] == "pleiades"]
            if not ic2:
                return {"sinif": "belirsiz", "sebep": "genis-baglamda-yalniz-geonames-alternatif-ad",
                        "katman": ad_k, "aday_n": len(ads), "kume_n": len(_kumele(ic)), "adaylar": ic}
            ic = ic2
        kume = _kumele(ic)
        if len(kume) > 1:
            return {"sinif": "belirsiz", "sebep": "baglamda-%d-ayri-yer" % len(kume),
                    "katman": ad_k, "aday_n": len(ads), "kume_n": len(kume), "adaylar": ic}
        k = kume[0]
        t = _temsilci(k, yil)
        diger = [c for c in k if c["kaynak"] != t["kaynak"]]
        ikinci = (sorted(diger, key=lambda c: km(t["lat"], t["lon"], c["lat"], c["lon"]))[0]
                  if diger else None)
        yakin = atlas_yakin(t["lat"], t["lon"])
        d0, i0 = yakin[0]
        if d0 <= ESIK_AYNI_KM:
            sinif = "atlasta-farkli-adla"
        elif d0 <= ESIK_YAKIN_KM:
            sinif = "yakin-incele"
        else:
            sinif = "atlasta-yok"
        return {"sinif": sinif, "katman": ad_k, "aday_n": len(ads), "kume_n": 1,
                "secilen": t, "ikinci_kaynak": ikinci,
                "kaynaklar_arasi_km": (round(km(t["lat"], t["lon"], ikinci["lat"], ikinci["lon"]), 1)
                                       if ikinci else None),
                "atlas_km": round(d0, 2), "atlas_idx": i0,
                "atlas_3km": [i for d, i in yakin if d <= ESIK_AYNI_KM]}
    return {"sinif": "belirsiz", "sebep": "baglam-disi", "aday_n": len(ads),
            "kume_n": len(_kumele(ads)), "adaylar": ads,
            "katman": " > ".join(a for a, _ in katmanlar)}
