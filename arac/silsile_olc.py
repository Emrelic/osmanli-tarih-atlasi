# -*- coding: utf-8 -*-
"""SİLSİLE ÖLÇÜMÜ — halka ③ (yer çözümü) ve halka ④ (yerleşim yoğunluğu).
SALT OKUR: data/ altında hiçbir dosyaya YAZMAZ, motor dosyalarına dokunmaz.
                                                         SILSILE-OLCUM-1014

Emre'nin silsilesi:
  ① Sümer–2000 devlet listesi → ② her devletin kaynaklı kronolojisi →
  ③ kronolojide adı geçen her şehir yerleşim indeksinde OLMALI →
  ④ her devletin bölgesinde merkez yerleşimler indekste olmalı ve harita
     çizimi için yerleşim yoğunluğu bir tabanın altına düşmemeli.
Bu araç ③ ve ④'ün kopukluğunu SAYIYLA verir. Eşik ÖNERMEZ (yetkisi yok);
yalnız dağılımı ve Emre'nin seçebileceği eşik seçeneklerinde altta kalanı yazar.

EVRENLER
  yerleşim   arac/girdi.py yukle()  (GIRDI_DOSYALARI — motorun petek evreni)
  kronoloji  index.html'in GERÇEKTE yüklediği data/olaylar*.js + data/kronoloji*.js
             (arac/paket_coz.py index_kaynaklari — paketler çözülmüş), JS olarak
             yüklenir (arac/silsile_yukle.js, node vm) — regex ile sayılmaz
  künye      data/devletler.js (girdi.oku_devletler): kronoloji[] + baskent
  ad         ad_esanlam.sadelestir (Türkçe güvenli: "İ".lower() tuzağı yok) +
             parantez/eğik çizgi alternatifleri + data/ad_esanlam.js +
             arac/yer_esanlam.json (elle, KAYNAKLI) + açık transliterasyon kuralları
  kara       veri-kaynak/ne_10m_land.geojson (motorun kara maskesi kaynağı,
             uret_petek.py:747) — motor_kara.geojson DEĞİL (o motor ÇIKTISIDIR)
  bölge      veri-kaynak/ne_10m_admin_0_countries.geojson CONTINENT/SUBREGION
             (MODERN sınırlar — yalnız hücreleri kovalamak için)

KULLANIM
  py arac/silsile_olc.py            # ölç, denetim/SILSILE-OLCUM-1014/ altına yaz
  py arac/silsile_olc.py --sinav    # yalnız iki yönlü sınav
  py arac/silsile_olc.py --gazeteer-geonames <cities1000.zip> --gazeteer-pleiades <dizin> [--sinav]
        # KOORDİNAT KATMANI (arac/gazeteer.py): adla çözülmeyen şehir/başkenti
        # gazeteerle eşler → denetim/SILSILE-KOORDINAT-1014/ (halka ④ koşmaz;
        # SILSILE-OLCUM-1014 çıktısına dokunmaz). Argümansız çalışma DEĞİŞMEDİ.
ÇIKIŞ  0 ölçüldü + sınav geçti · 1 sınav kaldı · 2 ölçülemedi
"""
import collections
import io
import json
import math
import os
import re
import statistics
import subprocess
import sys
import tempfile
import time

sys.stdout.reconfigure(encoding="utf-8", errors="replace")
KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
os.chdir(KOK)
sys.path.insert(0, os.path.join(KOK, "arac"))
import girdi                                    # noqa: E402
import ad_esanlam                               # noqa: E402
from paket_coz import index_kaynaklari          # noqa: E402

CIKTI = os.path.join(KOK, "denetim", "SILSILE-OLCUM-1014")
SOZLUK = os.path.join(KOK, "arac", "yer_esanlam.json")
TARIHLER = list(range(1000, 2001, 100))   # 1300/1500/1700/1900 bu dizinin içinde
KON_ESIK_KM = 25.0                        # yer_kon → en yakın yerleşim çözüm eşiği
KARA_ESIK = 0.25                          # hücre "kara" sayılır: örneklerin ≥ %25'i kara
ORNEK = 6                                 # hücre başına ORNEK×ORNEK kara örneği
TAVAN_KM = 200.0                          # motorun petek tavanı (_dunya_bosluk.py ile aynı)

sade = ad_esanlam.sadelestir
PARCACIK = {"de", "la", "le", "del", "da", "do", "dos", "das", "di", "al", "el", "i",
            "e", "y", "of", "the", "von", "van", "der", "den", "sur", "an", "am", "bin",
            "ibn", "ul", "ül", "ad", "ar", "as", "at", "az", "en", "et", "zu", "upon"}


def log(*a):
    print(*a, flush=True)


# ════════════════════════════════════════════════════════════════════════
# TARİH
# ════════════════════════════════════════════════════════════════════════
_GUN = re.compile(r"^\s*(-?)(\d{1,5})(?:-(\d{1,2}))?(?:-(\d{1,2}))?")


def gun(s):
    """'1453-05-29' / '-0550-01-01' / '330-05-11' / '1526-08' → (yıl, ay, gün).
    Okunamazsa None (çağıran 'sınırsız' sayar ve SAYAR)."""
    if s is None:
        return None
    m = _GUN.match(str(s))
    if not m:
        return None
    y = int(m.group(2)) * (-1 if m.group(1) else 1)
    return (y, int(m.group(3) or 1), int(m.group(4) or 1))


# ════════════════════════════════════════════════════════════════════════
# SÖZLÜK VE SINIFLANDIRMA KÜMELERİ
# ════════════════════════════════════════════════════════════════════════
def sozluk_oku():
    j = json.load(io.open(SOZLUK, encoding="utf-8"))
    for alan in ("elle", "kurallar", "betimleyiciler", "cografi_ekler",
                 "bolge_adlari", "unvanlar"):
        if alan not in j:
            raise SystemExit("ÖLÇÜLEMEDİ: %s içinde `%s` yok" % (SOZLUK, alan))
    return j


def kural_uygula(k, kurallar):
    for r in kurallar:
        k = re.sub(r["bul"], r["yaz"], k)
    return k


TUR_KELIMELERI = ["krallığı", "krallik", "beyliği", "hanlığı", "sultanlığı", "prensliği",
                  "dukalığı", "cumhuriyeti", "emirliği", "eyaleti", "sancağı", "devleti",
                  "imparatorluğu", "hanedanı", "hanedanlığı", "konfederasyonu", "beylerbeyliği",
                  "despotluğu", "kontluğu", "markizliği", "şehri", "site", "devlet", "hükümeti",
                  "imamlığı", "halifeliği", "kağanlığı", "kaganligi", "atabegliği", "atabeyliği",
                  "melikliği", "şeyhliği", "ocaklığı", "mutasarrıflığı", "valiliği", "naipliği",
                  "piskoposluğu", "başpiskoposluğu", "uygarlığı", "kültürü", "federasyonu",
                  "birliği", "ligi", "toprakları", "bölgesi", "kolonisi", "sömürgesi"]
_TUR_SADE = {sade(x) for x in TUR_KELIMELERI}


def siniflandirma_kumeleri(soz, devletler):
    """Çözülemeyen bir adın ŞEHİR mi yoksa bölge/ülke/devlet/coğrafî unsur mu
    olduğunu ayıran kümeler. Hepsi atlastan ya da Natural Earth'ten gelir;
    tek elle liste arac/yer_esanlam.json `bolge_adlari`dır."""
    bolge = {sade(x) for x in soz["bolge_adlari"] + soz.get("bolge_ek_1014", [])}
    for d in devletler:
        b = d.get("bolge")
        if b:
            bolge.add(sade(b))
    ulke = set()
    gj = json.load(io.open("veri-kaynak/ne_10m_admin_0_countries.geojson", encoding="utf-8"))
    for f in gj["features"]:
        p = f["properties"]
        for a in ("NAME", "NAME_TR", "NAME_EN", "ADMIN", "NAME_LONG", "FORMAL_EN"):
            if p.get(a):
                ulke.add(sade(p[a]))
    cog = set()
    gj = json.load(io.open("veri-kaynak/ne_10m_geography_regions_polys.geojson", encoding="utf-8"))
    for f in gj["features"]:
        p = f["properties"]
        for a in ("NAME", "NAME_TR", "NAME_EN", "LABEL"):
            if p.get(a):
                cog.add(sade(p[a]))
    devlet = set()
    for d in devletler:
        ad = re.sub(r"\s*\(.*?\)\s*", " ", d.get("ad") or "").strip()
        devlet.add(sade(ad))
        kel = ad.split()
        while kel and sade(kel[-1]) in _TUR_SADE:
            kel = kel[:-1]
        if kel:
            devlet.add(sade(" ".join(kel)))
    devlet.discard("")
    cog_ek = {sade(x) for x in soz["cografi_ekler"]}
    unvan = {sade(x) for x in soz["unvanlar"]}
    return {"bolge": bolge, "ulke": ulke, "cografi": cog, "devlet": devlet,
            "cografi_ek": cog_ek, "unvan": unvan,
            "betim": {sade(x) for x in soz["betimleyiciler"]},
            # tek kelimelik metin eşleşmesini İZLEYEBİLEN kelimeler ('Halep Valisi',
            # 'Belgrad Kalesi', 'Viyana Kuşatması'); izleyen bunlardan biri değilse
            # eşleşme bileşik özel adın parçası sayılır ('Kara Mustafa')
            "izleyen": (unvan | {sade(x) for x in soz["betimleyiciler"]} | cog_ek | _TUR_SADE
                        | {sade(x) for x in soz.get("izleyen_ekler", [])})}


# ════════════════════════════════════════════════════════════════════════
# YERLEŞİM AD DİZİNİ
# ════════════════════════════════════════════════════════════════════════
def _parantez_ust_bol(s, ayiricilar=",;"):
    """Parantez DIŞINDAKİ ayırıcılardan böler."""
    parca, d, cur = [], 0, []
    for c in s:
        if c in "([":
            d += 1
        elif c in ")]":
            d = max(0, d - 1)
        if d == 0 and c in ayiricilar:
            parca.append("".join(cur))
            cur = []
        else:
            cur.append(c)
    parca.append("".join(cur))
    return [p.strip() for p in parca if p.strip()]


def _alternatif_gecerli(seg):
    """Parantez/eğik çizgi bölütü bir YER ADI mı, yoksa açıklama mı?
    'Kruja' evet · 'bölge' · 'Techiman kuzeyi' · 'B bölgesi' · '1. kale' hayır."""
    seg = seg.strip(" .-—–")
    if not seg or re.search(r"\d", seg):
        return False
    kel = seg.split()
    if len(kel) > 4:
        return False
    for i, w in enumerate(kel):
        if not w[:1].isupper() and w.lower() not in PARCACIK:
            return False
    return len(sade(seg)) >= 3


def ad_varyantlari(ad):
    """→ [(varyant, tür)]  tür: 'ad' (asıl/çekirdek) | 'parantez' (alternatif)."""
    out = [(ad, "ad")]
    cekirdek = re.sub(r"\s*\(.*?\)\s*", " ", ad).strip()
    if cekirdek != ad:
        out.append((cekirdek, "ad"))
    # çekirdekteki üst düzey eğik çizgi: 'Paulatuk / Cape Bathurst'
    if "/" in cekirdek:
        for s in cekirdek.split("/"):
            if _alternatif_gecerli(s):
                out.append((s.strip(), "parantez"))
    for ic in re.findall(r"\(([^()]*)\)", ad):
        for s in re.split(r"[,/;]| — | – | - ", ic):
            s = re.sub(r"^(bugün|bugünkü|modern|eski|sonra|sonraki|yeni adı|bugünkü adı)\s+",
                       "", s.strip(), flags=re.I)
            if _alternatif_gecerli(s):
                out.append((s.strip(), "parantez"))
    return out


class Dizin:
    """Yerleşim ad dizini. Katmanlar (öncelik sırasıyla):
       ad       asıl ad / parantezsiz çekirdek (sadeleştirilmiş)
       parantez atlasın kendi parantez/eğik çizgi alternatifi
       esanlam  data/ad_esanlam.js + arac/yer_esanlam.json 'elle'
       kural    yukarıdakilerin açık transliterasyon katlaması (yalnız yer
                alanlarında; serbest metin taramasında KULLANILMAZ)"""

    def __init__(self, Y, soz, kumeler):
        self.Y = Y
        self.adlar = {y["ad"]: i for i, y in enumerate(Y)}
        self.kat = {"ad": collections.defaultdict(set),
                    "parantez": collections.defaultdict(set),
                    "esanlam": collections.defaultdict(set)}
        self.reddedilen_alt = []      # bölge/ülke/devlet adı olduğu için alias SAYILMAYAN
        for i, y in enumerate(Y):
            for v, tur in ad_varyantlari(y["ad"]):
                k = sade(v)
                if not k:
                    continue
                if tur == "parantez":
                    if (k in kumeler["bolge"] or k in kumeler["ulke"]
                            or k in kumeler["devlet"]):
                        self.reddedilen_alt.append((y["ad"], v))
                        continue
                self.kat[tur][k].add(i)
        # data/ad_esanlam.js — atlasın kendi ölçülmüş sözlüğü (salt okunur)
        es = ad_esanlam.yukle()
        self.esanlam_yuklu = 0
        for atlas_ad, esler in es["esanlam"].items():
            if atlas_ad not in self.adlar:
                continue
            for e in esler:
                self.kat["esanlam"][sade(e)].add(self.adlar[atlas_ad])
                self.esanlam_yuklu += 1
        self.belirsiz_es = {sade(k) for k in es["belirsiz"]}
        # arac/yer_esanlam.json 'elle' — yalnız kaynaklı çift
        self.elle_red = []
        for atlas_ad, esler in soz["elle"].items():
            for e in esler:
                if not isinstance(e, dict) or not e.get("ad") or not e.get("kaynak"):
                    self.elle_red.append((atlas_ad, e, "kaynak yok"))
                    continue
                if atlas_ad not in self.adlar:
                    self.elle_red.append((atlas_ad, e, "atlas adı yok"))
                    continue
                self.kat["esanlam"][sade(e["ad"])].add(self.adlar[atlas_ad])
        self.kurallar = soz["kurallar"]
        self.kural_kat = collections.defaultdict(set)
        for tur in ("ad", "parantez", "esanlam"):
            for k, s in self.kat[tur].items():
                self.kural_kat[kural_uygula(k, self.kurallar)] |= s

    def ara(self, ad, kural=True):
        """→ (durum, {idx}, yol)  durum: bulundu | belirsiz | yok"""
        if ad in self.adlar:
            return "bulundu", {self.adlar[ad]}, "birebir"
        k = sade(ad)
        if not k:
            return "yok", set(), "-"
        for tur in ("ad", "parantez", "esanlam"):
            s = self.kat[tur].get(k)
            if s:
                yol = "normal" if tur == "ad" else tur
                if len(s) > 1 or k in self.belirsiz_es:
                    return "belirsiz", set(s), yol
                return "bulundu", set(s), yol
        if kural:
            s = self.kural_kat.get(kural_uygula(k, self.kurallar))
            if s:
                return ("belirsiz" if len(s) > 1 else "bulundu"), set(s), "kural"
        return "yok", set(), "-"

    def metin_ara(self, k):
        """Serbest metin taraması: yalnız ad/parantez/esanlam katmanı."""
        for tur in ("ad", "parantez", "esanlam"):
            s = self.kat[tur].get(k)
            if s:
                return s, tur
        return None, None


# ════════════════════════════════════════════════════════════════════════
# YER PARÇASI ÇÖZÜMÜ
# ════════════════════════════════════════════════════════════════════════
def parca_denemeleri(ham, kum):
    """parca_coz'un denediği ad biçimleri (gazeteer katmanı da aynılarını sorar).
    → (s, denemeler, cekirdek, kel)"""
    s = ham.strip().strip(".")
    denemeler = [s]
    cekirdek = re.sub(r"\s*\(.*?\)\s*", " ", s).strip()
    kel = cekirdek.split()
    # sondaki betimleyici: 'Belgrad kalesi' → 'Belgrad'
    while len(kel) > 1 and sade(kel[-1]) in kum["betim"]:
        kel = kel[:-1]
    if " ".join(kel) != cekirdek:
        denemeler.append(" ".join(kel))
    denemeler.append(cekirdek)
    for v, tur in ad_varyantlari(s):
        if tur == "parantez":
            denemeler.append(v)
    if "/" in cekirdek:
        denemeler += [x.strip() for x in cekirdek.split("/") if x.strip()]
    return s, denemeler, cekirdek, kel


def parca_coz(dz, ham, kum):
    """Tek yer parçası ('Ordu (Bayramlı)', 'Belgrad kalesi', 'Sis (Kozan)').
    → dict(durum, idx, yol, kova, anahtar, gosterim)"""
    s, denemeler, cekirdek, kel = parca_denemeleri(ham, kum)
    gor = set()
    belirsiz = None
    for d in denemeler:
        if not d or d in gor:
            continue
        gor.add(d)
        durum, idx, yol = dz.ara(d)
        if durum == "bulundu":
            return {"durum": durum, "idx": idx, "yol": yol, "kova": "sehir",
                    "anahtar": sade(cekirdek), "gosterim": s}
        if durum == "belirsiz" and belirsiz is None:
            belirsiz = {"durum": durum, "idx": idx, "yol": yol, "kova": "sehir",
                        "anahtar": sade(cekirdek), "gosterim": s}
    if belirsiz:
        return belirsiz
    return {"durum": "yok", "idx": set(), "yol": "-", "kova": kova_bul(cekirdek, kum),
            "anahtar": sade(" ".join(kel) or cekirdek), "gosterim": s}


def kova_bul(ad, kum):
    """Çözülemeyen adın kovası: sehir | bolge-ulke | devlet-adi | cografi | serbest-metin."""
    k = sade(ad)
    kel = ad.split()
    if not kel:
        return "serbest-metin"
    if k in kum["bolge"] or k in kum["ulke"]:
        return "bolge-ulke"
    if k in kum["devlet"]:
        return "devlet-adi"
    if sade(kel[-1]) in kum["cografi_ek"] or k in kum["cografi"]:
        return "cografi"
    kucuk = [w for w in kel if not w[:1].isupper() and w.lower() not in PARCACIK]
    if kucuk or len(kel) > 4 or not kel[0][:1].isupper():
        return "serbest-metin"
    # 'Batı Anadolu', 'Doğu Trakya' → yön + bölge
    if len(kel) >= 2 and (sade(" ".join(kel[1:])) in kum["bolge"]
                          or sade(" ".join(kel[1:])) in kum["ulke"]):
        return "bolge-ulke"
    return "sehir"


def yer_parcalari(yer):
    if not yer:
        return []
    if isinstance(yer, list):
        out = []
        for x in yer:
            out += yer_parcalari(x)
        return out
    out = []
    for p in _parantez_ust_bol(str(yer), ",;"):
        out += [x.strip() for x in re.split(r"\s+ve\s+|\s+&\s+", p) if x.strip()]
    return out


# ════════════════════════════════════════════════════════════════════════
# SERBEST METİN TARAMASI (yer alanı OLMAYAN maddeler)
# ════════════════════════════════════════════════════════════════════════
_KELIME = re.compile(r"[^\W\d_][\w'’ʿʾ\-]*", re.UNICODE)
_KESME = re.compile(r"['’]")


METIN_ELENEN = collections.Counter()


def metin_tara(dz, metin, kum, kisi_tok, kucuk_tok=frozenset()):
    """→ (bulunan {anahtar: (idxset, katman, gösterim)}, aday {anahtar: (gösterim, ek_kaniti)})

    KATI KURALLAR (yanlış pozitifi kısmak için; elenen her eşleşme
    METIN_ELENEN sayacında sebebiyle sayılır, sessizce düşmez):
      · tek kelimelik eşleşme kişi adı kelimesiyse ('İsmail', 'David') elenir
      · tek kelimelik eşleşme bölge/ülke/devlet adıysa ('Roma', 'Mora', 'Fas') elenir
      · tek kelimelik eşleşmeyi koşuda unvan OLMAYAN büyük harfli kelime izliyorsa
        ('Kara Mustafa', 'Ordu Komutanı' değil ama 'Kara Mustafa') elenir
    ADAY KURALLARI: kişi kelimesi, unvan, bölge/ülke/devlet/coğrafya adı, metinde
      küçük harfle de geçen sözcük ('Birliği', 'Altın', 'Meclis') ve devlet-türü
      kelimesi içeren koşunun kelimeleri ('Zhou Hanedanı') aday sayılmaz."""
    bul, aday = {}, {}
    if not metin:
        return bul, aday
    toks = []
    for m in _KELIME.finditer(metin):
        w = m.group(0)
        once = metin[max(0, m.start() - 3):m.start()]
        cumle_basi = m.start() == 0 or bool(re.search(r"[.!?:;\"“(]\s*$", once))
        toks.append((w, m.start(), m.end(), cumle_basi))
    i, n = 0, len(toks)
    while i < n:
        w = toks[i][0]
        if not w[:1].isupper():
            i += 1
            continue
        # büyük harfli koşu (ara kelimeler arasında yalnız boşluk/tire)
        j = i
        while (j + 1 < n and toks[j + 1][0][:1].isupper()
               and metin[toks[j][2]:toks[j + 1][1]].strip() in ("", "-")
               and not _KESME.search(toks[j][0])):
            j += 1
        kos = toks[i:j + 1]
        # en uzun eşleşme, soldan sağa
        a = 0
        while a < len(kos):
            eslesti = False
            for L in range(min(4, len(kos) - a), 0, -1):
                parca = kos[a:a + L]
                kel = [p[0] for p in parca]
                ek = bool(_KESME.search(kel[-1]))
                kel[-1] = _KESME.split(kel[-1])[0]
                gos = " ".join(kel)
                k = sade(gos)
                if len(k) < 3 or (L == 1 and k in kum["unvan"]):
                    continue
                if L == 1 and parca[0][3] and not ek and len(k) < 4:
                    continue
                s, kat = dz.metin_ara(k)
                if s and L == 1:
                    sebep = None
                    if k in kisi_tok:
                        sebep = "kisi-adi-kelimesi"
                    elif (k in kum["bolge"] or k in kum["ulke"] or k in kum["devlet"]):
                        sebep = "bolge-ulke-devlet-adi"
                    elif a + 1 < len(kos) and sade(_KESME.split(kos[a + 1][0])[0]) not in kum["izleyen"]:
                        sebep = "bilesik-ozel-ad-parcasi"
                    if sebep:
                        METIN_ELENEN[sebep] += 1
                        s = None
                if s:
                    bul[k] = (s, kat, gos)
                    a += L
                    eslesti = True
                    break
            if not eslesti:
                a += 1
        # adaylar: kalan (eşleşmeyen) büyük harfli kelimeler; unvan/kişi/bölge değil
        kel_ham = [p[0] for p in kos]
        temiz = []
        for x, p in zip(kel_ham, kos):
            ek = bool(_KESME.search(x))
            kk = _KESME.split(x)[0]
            ks = sade(kk)
            if ks in kum["unvan"] or len(ks) < 3:
                temiz.append(None)
            else:
                temiz.append((kk, ks, ek, p[3]))
        devlet_kosusu = any(sade(_KESME.split(x)[0]) in _TUR_SADE for x in kel_ham)
        for idx, t in enumerate(temiz):
            if t is None:
                continue
            kk, ks, ek, cb = t
            if devlet_kosusu or ks in bul or ks in kisi_tok or ks in kucuk_tok:
                continue
            if cb and not ek:
                continue          # cümle başı, eksiz: özel ad kanıtı yok
            if (ks in kum["bolge"] or ks in kum["ulke"] or ks in kum["devlet"]
                    or ks in kum["cografi"]):
                continue
            if any(ks in b for b in bul):   # bulunan çok kelimeli adın parçası
                continue
            onc = aday.get(ks)
            aday[ks] = (kk, (onc[1] if onc else False) or ek)
        i = j + 1
    return bul, aday


# ════════════════════════════════════════════════════════════════════════
# YÜKLEME
# ════════════════════════════════════════════════════════════════════════
def kronoloji_yukle():
    kay = index_kaynaklari(KOK)
    dosyalar = [x for x in kay if re.match(r"^data/(olaylar|kronoloji)[^/]*\.js$", x)]
    kisi = [x for x in kay if x in ("data/kisiler.js", "data/padisahlar.js")]
    if not dosyalar:
        raise SystemExit("ÖLÇÜLEMEDİ: index.html'den 0 kronoloji dosyası çözüldü")
    with tempfile.NamedTemporaryFile("w", suffix=".txt", delete=False, encoding="utf-8") as f:
        f.write("\n".join(dosyalar + kisi))
        liste = f.name
    try:
        r = subprocess.run(["node", os.path.join("arac", "silsile_yukle.js"), liste],
                           capture_output=True, cwd=KOK)
    finally:
        os.unlink(liste)
    if r.returncode != 0:
        raise SystemExit("ÖLÇÜLEMEDİ: silsile_yukle.js hata: %s"
                         % r.stderr.decode("utf-8", "replace")[:800])
    j = json.loads(r.stdout.decode("utf-8"))
    hatali = [d for d in j["dosyalar"] if d["hata"]]
    bos = [d["dosya"] for d in j["dosyalar"] if not d["diziler"] and d["dosya"] in dosyalar]
    return dosyalar, j, hatali, bos


# ════════════════════════════════════════════════════════════════════════
# HALKA ③
# ════════════════════════════════════════════════════════════════════════
def halka3(Y, D, soz, kum, dz, J, kron_dosyalar):
    from scipy.spatial import cKDTree
    import numpy as np

    def uc(lat, lon):
        la, lo = np.radians(lat), np.radians(lon)
        return np.c_[np.cos(la) * np.cos(lo), np.cos(la) * np.sin(lo), np.sin(la)]
    agac = cKDTree(uc(np.array([y["lat"] for y in Y]), np.array([y["lon"] for y in Y])))

    def kon_km(lat, lon):
        d, i = agac.query(uc(np.array([lat]), np.array([lon]))[0])
        return 6371.0 * 2 * math.asin(min(1.0, d / 2)), int(i)

    kisi_tok = set()
    maddeler = []
    for m in J["maddeler"]:
        if m["dosya"] in ("data/kisiler.js", "data/padisahlar.js"):
            if m.get("ad"):
                for w in re.findall(r"[^\W\d_]+", m["ad"]):
                    kisi_tok.add(sade(w))
            continue
        maddeler.append(dict(m, kaynak_tur="kronoloji-dosyasi"))
        if m.get("kisiler"):
            ks = m["kisiler"] if isinstance(m["kisiler"], list) else [m["kisiler"]]
            for x in ks:
                for w in re.findall(r"[^\W\d_]+", x):
                    kisi_tok.add(sade(w))
    for d in D:
        for i, k in enumerate(d.get("kronoloji") or []):
            maddeler.append({"dosya": "data/devletler.js", "dizi": d["id"], "i": i,
                             "t": k.get("t"), "b": k.get("b"), "d": None, "yer": None,
                             "yer_id": None, "yer_kon": None, "kaynak_tur": "kunye-kronolojisi"})
    kisi_tok -= {"", None}
    # metinde KÜÇÜK harfle de geçen sözcükler cins addır ('birliği', 'altın')
    kucuk_tok = set()
    for m in maddeler:
        for x in (m.get("b"), m.get("d")):
            if isinstance(x, str):
                for w in _KELIME.findall(x):
                    if w[:1].islower():
                        kucuk_tok.add(sade(_KESME.split(w)[0]))
    kucuk_tok.discard("")
    # şehir adı olan kişi-tokenlarını korumak için: kişi kümesinden atlas asıl adlarını çıkarma
    # YAPILMAZ — kişi kümesi yalnız ADAY listesini süzer, bulunan adları değil.

    sayac = collections.Counter()
    parca_say = collections.Counter()
    yol_say = collections.Counter()
    kon_say = collections.Counter()
    eksik = collections.defaultdict(lambda: {"madde": set(), "gosterim": collections.Counter(),
                                             "dosya": collections.Counter(), "ornek": None,
                                             "gecis": []})   # gecis: koordinat katmanının bağlamı
    kova_ad = collections.defaultdict(lambda: collections.defaultdict(set))
    belirsiz_ad = collections.defaultdict(set)
    kon_cozulmeyen = []
    metin_bulunan_madde = collections.Counter()
    metin_bulunan_ad = collections.defaultdict(set)
    metin_aday = collections.defaultdict(lambda: {"madde": set(), "gosterim": collections.Counter(),
                                                  "ek": 0, "kaynak_tur": collections.Counter()})
    madde_durum = []
    for mi, m in enumerate(maddeler):
        mid = "%s#%s[%s]" % (m["dosya"], m["dizi"], m["i"])
        kt = m["kaynak_tur"]
        alanli = bool(m.get("yer") or m.get("yer_id") or m.get("yer_kon"))
        sayac[(kt, "madde")] += 1
        if not alanli:
            sayac[(kt, "yer-alansiz")] += 1
            metin = " ".join(x for x in (m.get("b"), m.get("d")) if isinstance(x, str))
            bul, aday = metin_tara(dz, metin, kum, kisi_tok, kucuk_tok)
            if bul:
                sayac[(kt, "yer-alansiz-metinde-yerlesim")] += 1
                for k, (s, kat, gos) in bul.items():
                    metin_bulunan_ad[Y[sorted(s)[0]]["ad"] if len(s) == 1 else gos + " (belirsiz)"].add(mid)
            for k, (gos, ek) in aday.items():
                a = metin_aday[k]
                a["madde"].add(mid)
                a["gosterim"][gos] += 1
                a["ek"] += int(ek)
                a["kaynak_tur"][kt] += 1
            madde_durum.append((mid, kt, "alansiz", len(bul), 0))
            continue
        sayac[(kt, "yer-alanli")] += 1
        sehir_ok = sehir_yok = 0
        bulunan_idx = set()
        bu_gecis = []
        for alan in ("yer_id", "yer"):
            for p in yer_parcalari(m.get(alan)):
                r = parca_coz(dz, p, kum)
                parca_say[(alan, r["durum"], r["kova"])] += 1
                if r["durum"] != "yok":
                    if r["durum"] == "bulundu":
                        bulunan_idx |= r["idx"]
                    yol_say[(alan, r["yol"])] += 1
                    sehir_ok += 1
                    if r["durum"] == "belirsiz":
                        belirsiz_ad[r["gosterim"]].add(mid)
                else:
                    if r["kova"] == "sehir":
                        sehir_yok += 1
                        e = eksik[r["anahtar"]]
                        e["madde"].add(mid)
                        e["gosterim"][r["gosterim"]] += 1
                        e["dosya"][m["dosya"]] += 1
                        if e["ornek"] is None:
                            e["ornek"] = "%s %s" % (m.get("t"), (m.get("b") or "")[:90])
                        g_ = {"mid": mid, "t": m.get("t"), "dosya": m["dosya"],
                              "gosterim": r["gosterim"], "taraflar": m.get("taraflar") or [],
                              "yer_kon": m.get("yer_kon"), "ayni": None}
                        e["gecis"].append(g_)
                        bu_gecis.append(g_)
                    else:
                        kova_ad[r["kova"]][r["gosterim"]].add(mid)
        if m.get("yer_kon"):
            try:
                lat, lon = float(m["yer_kon"][0]), float(m["yer_kon"][1])
                km_, ii = kon_km(lat, lon)
                for e_ in (10, 25, 50):
                    if km_ <= e_:
                        kon_say["<=%d" % e_] += 1
                kon_say["toplam"] += 1
                if km_ > KON_ESIK_KM:
                    kon_cozulmeyen.append((mid, m.get("t"), (m.get("b") or "")[:80], lat, lon,
                                           round(km_, 1), Y[ii]["ad"]))
                else:
                    sehir_ok += 1
            except (TypeError, ValueError, IndexError):
                kon_say["okunamadi"] += 1
        for g_ in bu_gecis:
            g_["ayni"] = sorted(bulunan_idx)
        if sehir_yok == 0 and sehir_ok > 0:
            sayac[(kt, "yer-tam-cozuldu")] += 1
        elif sehir_ok > 0:
            sayac[(kt, "yer-kismi")] += 1
        elif sehir_yok > 0:
            sayac[(kt, "yer-hic-cozulmedi")] += 1
        else:
            sayac[(kt, "yer-yalniz-bolge-cografi")] += 1
        madde_durum.append((mid, kt, "alanli", sehir_ok, sehir_yok))

    # künye başkentleri
    baskent = []
    bas_say = collections.Counter()
    bas_eksik = collections.defaultdict(list)
    bas_gecis = []
    for d in D:
        b = d.get("baskent")
        bk = [x.get("ad") for x in (d.get("bk") or []) if isinstance(x, dict) and x.get("ad")]
        if not b and not bk:
            bas_say["baskent-alani-yok"] += 1
            baskent.append((d["id"], d.get("ad"), "", "baskent-yok", "", ""))
            continue
        hm = str(b or "")
        if hm.strip() in ("—", "-", "–", "?", ""):
            if not bk:
                bas_say["baskent-bos-tire"] += 1
                baskent.append((d["id"], d.get("ad"), hm, "baskent-yok", "", ""))
                continue
        hm2 = re.sub(r"\((?:[^()]*?(?:kaynak|teyit|bilinmiyor|tartışmalı|HE |sabit)[^()]*)\)", " ", hm)
        parcalar = []
        for p in re.split(r"→|·|;|,|\s+ve\s+|\s+/\s+|\(sonra\)|\bsonra\b", hm2):
            p = p.strip(" .")
            if p:
                parcalar.append(p)
        parcalar += bk
        ok, yok, diger = [], [], []
        for p in parcalar:
            r = parca_coz(dz, p, kum)
            if r["durum"] != "yok":
                ok.append(p)
            elif r["kova"] == "sehir":
                yok.append(p)
                bas_eksik[r["anahtar"]].append(d["id"])
                bas_gecis.append({"kunye": d["id"], "anahtar": r["anahtar"], "gosterim": r["gosterim"]})
            else:
                diger.append("%s[%s]" % (p, r["kova"]))
        if yok and not ok:
            durum = "hic-cozulmedi"
        elif yok:
            durum = "kismi"
        elif ok:
            durum = "tam"
        else:
            durum = "yalniz-bolge-serbest"
        bas_say[durum] += 1
        baskent.append((d["id"], d.get("ad"), hm, durum, " | ".join(ok),
                        " | ".join(yok + diger)))
    return {
        "maddeler_n": len(maddeler), "sayac": sayac, "parca_say": parca_say,
        "yol_say": yol_say, "kon_say": kon_say, "kon_cozulmeyen": kon_cozulmeyen,
        "eksik": eksik, "kova_ad": kova_ad, "belirsiz_ad": belirsiz_ad,
        "metin_bulunan_ad": metin_bulunan_ad, "metin_aday": metin_aday,
        "baskent": baskent, "bas_say": bas_say, "bas_eksik": bas_eksik, "bas_gecis": bas_gecis,
        "kisi_tok_n": len(kisi_tok), "madde_durum": madde_durum,
    }


# ════════════════════════════════════════════════════════════════════════
# HALKA ④
# ════════════════════════════════════════════════════════════════════════
def sahnede(y, g):
    """Motorun tanımı (uret_petek.py devir_kumesi): kur ≤ g < bit."""
    k, b = gun(y.get("kur")), gun(y.get("bit"))
    return (k is None or k <= g) and (b is None or g < b)


def boyayan(y, g):
    """Sahnede VE g'yi kapsayan bir s:/d:/v: dönemi var, sahibi __BOSLUK__ değil."""
    if not sahnede(y, g):
        return False
    for kat in ("d", "v", "s"):
        for p in y.get(kat) or []:
            f, t = gun(p.get("f")), gun(p.get("t"))
            if (f is None or f <= g) and (t is None or g < t):
                if kat == "s" and p.get("d") == "__BOSLUK__":
                    continue
                return True
    return False


def izgara():
    """Eşit alanlı enlem bandı ızgarası: 1° enlem bandı, bant içinde
    round(360·cos φ) eşit boylam dilimi ⇒ her hücre ≈ 111 km × 111 km (~12.360 km²).
    Gerekçe: 1°×1° hücre 60°K'de ekvatordakinin YARISI alandadır; 'hücre başına
    yerleşim' ancak hücreler eşit alanlıysa bölgeler arasında karşılaştırılabilir.
    Enlem penceresi motorunki: -60..85 (uret_petek.py BOLGE)."""
    hucreler = []
    for lat0 in range(-60, 85):
        phi = math.radians(lat0 + 0.5)
        nc = max(1, int(round(360 * math.cos(phi))))
        w = 360.0 / nc
        for j in range(nc):
            hucreler.append({"id": "%+03d_%03d" % (lat0, j), "lat0": lat0, "j": j, "nc": nc,
                             "lon0": -180 + j * w, "w": w})
    return hucreler


def hucre_bul(lat, lon, satir):
    lat0 = int(math.floor(lat))
    if lat0 < -60 or lat0 > 84:
        return None
    nc, bas = satir[lat0]
    j = min(nc - 1, int((lon + 180.0) / (360.0 / nc)))
    return bas + j


def halka4(Y):
    import numpy as np
    import shapely
    from shapely.geometry import shape
    from shapely.strtree import STRtree
    from scipy.spatial import cKDTree

    H = izgara()
    satir = {}
    for i, h in enumerate(H):
        if h["lat0"] not in satir:
            satir[h["lat0"]] = (h["nc"], i)
    log("  ızgara: %d hücre" % len(H))
    # kara örnekleri
    gj = json.load(io.open("veri-kaynak/ne_10m_land.geojson", encoding="utf-8"))
    kara = []
    for f in gj["features"]:
        g = shape(f["geometry"])
        kara += list(getattr(g, "geoms", [g]))
    tree = STRtree(kara)
    off = (np.arange(ORNEK) + 0.5) / ORNEK
    xs, ys, sahip = [], [], []
    for i, h in enumerate(H):
        gx, gy = np.meshgrid(h["lon0"] + off * h["w"], h["lat0"] + off)
        xs.append(gx.ravel())
        ys.append(gy.ravel())
    xs = np.concatenate(xs)
    ys = np.concatenate(ys)
    t0 = time.time()
    # Her kara poligonu HAZIRLANIR ve yalnız kendi zarfındaki örneklere
    # contains_xy sorulur (hazırlanmamış dev Avrasya poligonuna nokta nokta
    # 'intersects' sormak saatler sürüyordu — ilk deneme 12+ dk'da kesildi).
    karada = np.zeros(len(xs), bool)
    for poly in kara:
        x0, y0, x1, y1 = poly.bounds
        m = (~karada) & (xs >= x0) & (xs <= x1) & (ys >= y0) & (ys <= y1)
        if not m.any():
            continue
        shapely.prepare(poly)
        ii = np.nonzero(m)[0]
        karada[ii[shapely.contains_xy(poly, xs[ii], ys[ii])]] = True
    pts = xs
    log("  kara örneklemesi: %d nokta, %.0f sn" % (len(pts), time.time() - t0))
    ok = karada.reshape(len(H), ORNEK * ORNEK)
    oran = ok.mean(axis=1)
    rx = np.where(ok, xs.reshape(len(H), -1), np.nan)
    ry = np.where(ok, ys.reshape(len(H), -1), np.nan)
    with np.errstate(all="ignore"):
        tlon = np.nanmean(rx, axis=1)
        tlat = np.nanmean(ry, axis=1)
    for i, h in enumerate(H):
        h["kara"] = float(oran[i])
        if oran[i] > 0:
            h["tlat"], h["tlon"] = float(tlat[i]), float(tlon[i])
        else:
            h["tlat"], h["tlon"] = h["lat0"] + 0.5, h["lon0"] + h["w"] / 2
    # kıta / alt bölge — modern ülke poligonları (yalnız kovalama için)
    gj = json.load(io.open("veri-kaynak/ne_10m_admin_0_countries.geojson", encoding="utf-8"))
    ulk, ulk_p = [], []
    for f in gj["features"]:
        g = shape(f["geometry"])
        for p in getattr(g, "geoms", [g]):
            ulk.append(p)
            ulk_p.append(f["properties"])
    ut = STRtree(ulk)
    kidx = [i for i, h in enumerate(H) if h["kara"] >= KARA_ESIK]
    kp = shapely.points([H[i]["tlon"] for i in kidx], [H[i]["tlat"] for i in kidx])
    en = ut.nearest(kp)
    for n, i in enumerate(kidx):
        p = ulk_p[int(en[n])]
        H[i]["kita"] = p.get("CONTINENT") or "?"
        H[i]["altbolge"] = p.get("SUBREGION") or "?"
    kara_h = kidx
    log("  kara hücresi (kara oranı ≥ %.2f): %d · (≥0.50: %d · >0: %d)"
        % (KARA_ESIK, len(kara_h), int((oran >= 0.5).sum()), int((oran > 0).sum())))

    # yerleşimlerin hücresi
    yh = [hucre_bul(y["lat"], y["lon"], satir) for y in Y]
    disari = sum(1 for x in yh if x is None)

    def uc(lat, lon):
        la, lo = np.radians(lat), np.radians(lon)
        return np.c_[np.cos(la) * np.cos(lo), np.cos(la) * np.sin(lo), np.sin(la)]
    hk = uc(np.array([H[i]["tlat"] for i in kara_h]), np.array([H[i]["tlon"] for i in kara_h]))

    sonuc = {}
    for yil in TARIHLER:
        g = (yil, 1, 1)
        nA = np.zeros(len(H), int)
        nB = np.zeros(len(H), int)
        bl, bo = [], []
        for y, c in zip(Y, yh):
            s = sahnede(y, g)
            b = s and boyayan(y, g)
            if c is not None:
                nA[c] += s
                nB[c] += b
            if b:
                bl.append(y["lat"])
                bo.append(y["lon"])
        if bl:
            tr = cKDTree(uc(np.array(bl), np.array(bo)))
            dd, _ = tr.query(hk)
            km_ = 6371.0 * 2 * np.arcsin(np.minimum(1.0, dd / 2))
        else:
            km_ = np.full(len(kara_h), np.inf)
        sonuc[yil] = {"nA": nA, "nB": nB, "km": km_, "boyayan_toplam": len(bl),
                      "sahnede_toplam": int(sum(1 for y in Y if sahnede(y, g)))}
        log("  %d: boyayan %d · sahnede %d" % (yil, len(bl), sonuc[yil]["sahnede_toplam"]))
    return {"H": H, "kara_h": kara_h, "sonuc": sonuc, "disari": disari, "satir": satir,
            "kara_n_50": int((oran >= 0.5).sum()), "kara_n_pos": int((oran > 0).sum())}


def sehir1900(R4):
    """denetim/SEHIR-1900-KOORDINAT-1013/LISTE-KOORD.tsv `atlasta-yok` şehirleri."""
    yol = "denetim/SEHIR-1900-KOORDINAT-1013/LISTE-KOORD.tsv"
    if not os.path.exists(yol):
        return None
    satirlar = io.open(yol, encoding="utf-8").read().splitlines()
    bas = satirlar[0].split("\t")
    ix = {k: i for i, k in enumerate(bas)}
    H, sonuc = R4["H"], R4["sonuc"][1900]
    kara_pos = {c: n for n, c in enumerate(R4["kara_h"])}
    toplam = koordli = 0
    say = collections.Counter()
    hucre_kume = collections.defaultdict(set)
    satir_out = []
    for s in satirlar[1:]:
        p = s.split("\t")
        if len(p) < len(bas) or p[ix["eslesme"]] != "atlasta-yok":
            continue
        toplam += 1
        try:
            lat, lon = float(p[ix["lat"]]), float(p[ix["lon"]])
        except ValueError:
            continue
        koordli += 1
        c = hucre_bul(lat, lon, R4["satir"])
        if c is None:
            say["izgara-disi"] += 1
            continue
        if c not in kara_pos:
            say["kara-disi-hucre"] += 1
            continue
        nB = int(sonuc["nB"][c])
        km_ = float(sonuc["km"][kara_pos[c]])
        for ad, kosul in (("n<1", nB < 1), ("n<2", nB < 2), ("n<3", nB < 3),
                          (">200km", km_ > TAVAN_KM)):
            if kosul:
                say[ad] += 1
                hucre_kume[ad].add(c)
        satir_out.append((p[ix["ad_1900"]], p[ix["bolge"]], p[ix["ulke_1900"]], lat, lon,
                          H[c]["id"], nB, round(km_, 1)))
    return {"toplam": toplam, "koordli": koordli, "say": say,
            "hucre": {k: len(v) for k, v in hucre_kume.items()}, "satir": satir_out}


# ════════════════════════════════════════════════════════════════════════
# SINAV — iki yön
# ════════════════════════════════════════════════════════════════════════
BILINEN_VAR = ["Stokholm", "Budin", "Revan", "İstanbul", "Buda", "Suceava", "Kruja"]
BILINEN_YOK = ["Ani", "Mistra", "Sis (Kozan)", "Harran", "Alamut", "Rey", "Yayçe/Jajce"]


def sinav(Y, dz, kum):
    satir, kaldi = [], 0
    for ad in BILINEN_VAR:
        r = parca_coz(dz, ad, kum)
        hedef = ", ".join(Y[i]["ad"] for i in sorted(r["idx"]))
        ok = r["durum"] != "yok"
        kaldi += not ok
        satir.append(("VAR bekleniyor", ad, r["durum"], r["yol"], hedef, "geçti" if ok else "KALDI"))
    for ad in BILINEN_YOK:
        r = parca_coz(dz, ad, kum)
        hedef = ", ".join(Y[i]["ad"] for i in sorted(r["idx"]))
        ok = r["durum"] == "yok"
        satir.append(("YOK bekleniyor", ad, r["durum"], r["yol"], hedef,
                      "geçti" if ok else "BULDU — açıklama gerekir"))
        if not ok and ad != "Yayçe/Jajce":
            kaldi += 1
    # ateşleme: sözlük alias reddi ve Türkçe katlama
    for a, b in (("İstanbul", "istanbul"), ("IĞDIR", "Iğdır")):
        ok = sade(a) == sade(b)
        kaldi += not ok
        satir.append(("katlama", "%s = %s" % (a, b), sade(a), "-", sade(b), "geçti" if ok else "KALDI"))
    return satir, kaldi


# ════════════════════════════════════════════════════════════════════════
# YAZIM
# ════════════════════════════════════════════════════════════════════════
def tsv(ad, bas, satirlar):
    with io.open(os.path.join(CIKTI, ad), "w", encoding="utf-8", newline="\n") as f:
        f.write("\t".join(bas) + "\n")
        for s in satirlar:
            f.write("\t".join("" if x is None else str(x).replace("\t", " ").replace("\n", " ")
                              for x in s) + "\n")


def git(*a):
    try:
        return subprocess.run(["git"] + list(a), capture_output=True, cwd=KOK
                              ).stdout.decode("utf-8", "replace").strip()
    except Exception:
        return "?"


# ════════════════════════════════════════════════════════════════════════
# KOORDİNAT KATMANI (SILSILE-KOORDINAT-1014) — arac/gazeteer.py
# ════════════════════════════════════════════════════════════════════════
KOORD_CIKTI = os.path.join(KOK, "denetim", "SILSILE-KOORDINAT-1014")


def _arg(ad):
    if ad in sys.argv:
        i = sys.argv.index(ad)
        if i + 1 < len(sys.argv):
            return sys.argv[i + 1]
    return None


def _yil(s):
    g = gun(s)
    return g[0] if g else None


class KoordCozucu:
    def __init__(self, Y, D, kum, soz, gz_yol, pl_yol):
        import gazeteer
        import numpy as np
        from scipy.spatial import cKDTree
        self.G = gazeteer
        self.Y, self.D, self.kum = Y, D, kum
        self.kurallar = soz["kurallar"]
        self.bg = gazeteer.Baglam(Y, D)
        self.gz = gazeteer.Gazeteer(gz_yol, pl_yol, sade, lambda k: kural_uygula(k, self.kurallar))
        self.np = np
        la, lo = np.radians([y["lat"] for y in Y]), np.radians([y["lon"] for y in Y])
        self.agac = cKDTree(np.c_[np.cos(la) * np.cos(lo), np.cos(la) * np.sin(lo), np.sin(la)])

    def anahtarlar(self, gosterim):
        s, den, cek, kel = parca_denemeleri(gosterim, self.kum)
        out = []
        for d in den + [" ".join(kel)]:
            k = sade(d)
            if len(k) >= 3:
                k = kural_uygula(k, self.kurallar)
                if k not in out:
                    out.append(k)
        return out

    def yukle(self, gosterimler):
        Q = set()
        for g in gosterimler:
            Q.update(self.anahtarlar(g))
        self.gz.yukle(Q)

    def atlas_yakin(self, lat, lon, n=6):
        np = self.np
        la, lo = math.radians(lat), math.radians(lon)
        d, i = self.agac.query([math.cos(la) * math.cos(lo), math.cos(la) * math.sin(lo), math.sin(la)], k=n)
        return [(6371.0 * 2 * math.asin(min(1.0, float(x) / 2)), int(j)) for x, j in zip(d, i)]

    def coz(self, gosterim, yil, taraflar=(), yer_kon=None, ayni=(), varsayilan=()):
        bolgeler = [self.bg.kunye[t]["bolge"] for t in taraflar
                    if t in self.bg.kunye and self.bg.kunye[t].get("bolge")]
        yk = None
        if yer_kon:
            try:
                yk = (float(yer_kon[0]), float(yer_kon[1]))
            except (TypeError, ValueError, IndexError):
                yk = None
        kat = self.bg.katmanlar(taraflar=taraflar, yer_kon=yk, ayni_madde=ayni,
                                bolgeler=bolgeler, varsayilan=varsayilan)
        return self.G.coz(self.gz, self.bg, self.anahtarlar(gosterim), yil, kat, self.atlas_yakin)


KSINAV = [
    # (tür, girdi, bağlam taraflar, aynı maddede geçen atlas yerleşimleri, yıl, beklenti)
    ("VAR (farklı adla)", "Şanlıurfa", ["artuklu"], [], 1100, ("farkli", ["Urfa"])),
    ("VAR (farklı adla)", "Budapeşte", ["macaristan"], [], 1900, ("farkli", ["Budin", "Peşte"])),
    ("VAR (farklı adla)", "Addis Ababa", ["habesistan"], [], 1930, ("farkli", ["Addis"])),
    # Pleiades'te İKİ Ani var (Kars 40.51,43.57 · Kemah 39.60,39.04): künye bağlamı ikisini
    # de kapsar ⇒ seçmemeli; aynı maddede Kars geçince Kars'ın Ani'si seçilmeli
    ("ADAŞ (iki Ani)", "Ani", ["ani-bagratli-kralligi", "bizans"], [], 1045,
     ("kutu-ya-belirsiz", (40.506, 43.571, 5))),
    ("YOK (koordinatlı)", "Ani", [], ["Kars"], 1045, ("yok-kutu", (40.506, 43.571, 5))),
    ("YOK (koordinatlı)", "Harran", ["selcuklu"], [], 1100, ("yok", None)),
    # GeoNames'teki tek 'Alamut' Aydın'da bir köydür (37.81,28.29) — Rûdbâr'daki kale iki
    # gazeteerde de YOK: seçilmemeli, 'bulunamadı' yazılmalı
    ("YOK (gazeteerde yok)", "Alamut", ["alamut-nizari"], [], 1100, ("secilmemeli", None)),
    ("YOK (koordinatlı)", "Mistra", ["bizans"], [], 1400, ("yok", None)),
    ("ADAŞ", "Kuba", ["kuba-hanligi"], [], 1750, ("yakin-atlas", ["Kuba"])),
    ("ADAŞ", "Küba", ["kuba-cumhuriyeti"], [], 1950, ("secilmemeli", None)),
    ("ADAŞ", "Saint-Pierre", [], [], 1700, ("belirsiz", None)),
    ("ADAŞ", "Saint-Pierre", ["martinik"], [], 1700, ("kutu", (14.74, -61.17, 30))),
    ("ADAŞ", "Kediri", ["kediri"], [], 1100, ("kutu-ya-belirsiz", (-7.82, 112.01, 40))),
]


def koord_sinav(KC):
    satir, kaldi = [], 0
    for tur, ad, taraf, ayni_ad, yil, (bek, arg) in KSINAV:
        taraf = [t for t in taraf if t in KC.bg.kunye]    # künyede olmayan taraf bağlam vermez
        ayni = [i for i, y in enumerate(KC.Y) if y["ad"] in ayni_ad]
        r = KC.coz(ad, yil, taraflar=taraf, ayni=ayni)
        s = r.get("secilen")
        atlas = KC.Y[r["atlas_idx"]]["ad"] if s else ""
        a3 = [KC.Y[i]["ad"] for i in r.get("atlas_3km", [])]
        if bek == "farkli":
            ok = r["sinif"] == "atlasta-farkli-adla" and atlas in arg
        elif bek == "yok":
            ok = r["sinif"] == "atlasta-yok"
        elif bek == "yakin-atlas":
            ok = bool(s) and r["sinif"] in ("atlasta-farkli-adla", "yakin-incele") and atlas in arg
        elif bek == "secilmemeli":
            ok = r["sinif"] in ("belirsiz", "gazeteerde-yok")
        elif bek == "yok-kutu":
            # 'yakin-incele' de kabul: eşik kuralı gereği 3–15 km'de BAŞKA bir atlas noktası
            # varsa sınıf yakin-incele olur; hüküm sütunu bunu ayrıca yazar
            ok = (r["sinif"] in ("atlasta-yok", "yakin-incele") and bool(s)
                  and KC.G.km(arg[0], arg[1], s["lat"], s["lon"]) <= arg[2])
        elif bek == "belirsiz":
            ok = r["sinif"] in ("belirsiz", "gazeteerde-yok")
        elif bek == "kutu":
            ok = bool(s) and KC.G.km(arg[0], arg[1], s["lat"], s["lon"]) <= arg[2]
        else:   # kutu-ya-belirsiz
            ok = (r["sinif"] in ("belirsiz", "gazeteerde-yok")
                  or (bool(s) and KC.G.km(arg[0], arg[1], s["lat"], s["lon"]) <= arg[2]))
        kaldi += not ok
        bg_ = ",".join(taraf) + ((" + aynı madde: " + ",".join(ayni_ad)) if ayni_ad else "")
        satir.append((tur, ad, bg_ or "(bağlam yok)", yil, r["sinif"],
                      r.get("sebep", ""), r.get("katman", ""),
                      ("%s:%s %s" % (s["kaynak"], s["id"], s["eslesen"])) if s
                      else ("adaylar: " + _aday_ozet(r.get("adaylar", []), 3) if r.get("adaylar") else ""),
                      ("%.4f,%.4f" % (s["lat"], s["lon"])) if s else "",
                      atlas, r.get("atlas_km", ""), " | ".join(a3),
                      r.get("kaynaklar_arasi_km", ""),
                      ("geçti" + (" (yakin-incele: %s %.1f km'de, başka yer)" % (atlas, r["atlas_km"])
                                  if bek in ("yok", "yok-kutu") and r["sinif"] == "yakin-incele" else ""))
                      if ok else "KALDI"))
    return satir, kaldi


def _ktsv(ad, bas, satirlar, G):
    with io.open(os.path.join(KOORD_CIKTI, ad), "w", encoding="utf-8", newline="\n") as f:
        f.write("# " + G.ATIF + "\n")
        f.write("\t".join(bas) + "\n")
        for s in satirlar:
            f.write("\t".join("" if x is None else str(x).replace("\t", " ").replace("\n", " ")
                              for x in s) + "\n")


def _aday_ozet(ads, n=6):
    return " | ".join("%s:%s %s (%.3f,%.3f)" % (c["kaynak"], c["id"], c["eslesen"], c["lat"], c["lon"])
                      for c in ads[:n]) + (" …+%d" % (len(ads) - n) if len(ads) > n else "")


def koordinat(Y, D, soz, kum, dz, R3, t0):
    gz_yol, pl_yol = _arg("--gazeteer-geonames"), _arg("--gazeteer-pleiades")
    KC = KoordCozucu(Y, D, kum, soz, gz_yol, pl_yol)
    G = KC.G
    gost = set(g for e in R3["eksik"].values() for g in e["gosterim"])
    gost |= {b["gosterim"] for b in R3["bas_gecis"]}
    gost |= {x[1] for x in KSINAV}
    log("gazeteer yükleniyor (%d sorgu adı)…" % len(gost))
    KC.yukle(gost)
    log("  %s · ölçülemedi: %s" % (dict(KC.gz.say), KC.gz.olculemedi or "-"))
    ksinav, kkaldi = koord_sinav(KC)
    for s in ksinav:
        log("  KSINAV", " · ".join(str(x) for x in s))

    # ── kronoloji geçişleri
    sonuc = []          # (anahtar, gecis, r)
    for anahtar, e in R3["eksik"].items():
        for g in e["gecis"]:
            # 'dosya varsayımı' (taraflarsız olaylar*.js = osmanli) KULLANILMAZ: Osmanlı alanı üç
            # kıtadır; ilk koşuda Ayastefanos→Adana'daki Yeşilköy, Kozluca→Burdur, Uşi→Gürün
            # yanlış eşleşmeleri verdi (adaş tuzağı). Bağlamsız madde 'belirsiz' kalır.
            vars_ = []
            r = KC.coz(g["gosterim"], _yil(g["t"]), taraflar=g["taraflar"], yer_kon=g["yer_kon"],
                       ayni=g["ayni"] or (), varsayilan=vars_)
            sonuc.append((anahtar, g, r))
    # ── başkent geçişleri
    bsonuc = []
    for b in R3["bas_gecis"]:
        d = KC.bg.kunye[b["kunye"]]
        r = KC.coz(b["gosterim"], _yil(d.get("f")), taraflar=[b["kunye"]])
        bsonuc.append((b["anahtar"], b, r))

    # ── anahtar düzeyinde birleştirme (kronoloji + başkent birlikte)
    grup = collections.defaultdict(list)     # anahtar → [(tür, gecis, r)]
    for a, g, r in sonuc:
        grup[a].append(("kron", g, r))
    for a, b, r in bsonuc:
        grup[a].append(("bas", b, r))

    SINIFLAR = ["atlasta-farkli-adla", "yakin-incele", "atlasta-yok", "belirsiz", "gazeteerde-yok"]
    parca_dag = collections.Counter(r["sinif"] for _, _, r in sonuc)
    bas_dag = collections.Counter(r["sinif"] for _, _, r in bsonuc)
    belirsiz_sebep = collections.Counter(re.sub(r"\d+", "N", r.get("sebep", ""))
                                         for _, _, r in sonuc + bsonuc if r["sinif"] == "belirsiz")
    satirlar = {k: [] for k in ("farkli", "yakin", "yok", "belirsiz", "gyok")}
    anahtar_sinif = {}
    for a, ls in grup.items():
        kron_n = sum(1 for t, _, _ in ls if t == "kron")
        kron_madde = len({g["mid"] for t, g, _ in ls if t == "kron"})
        bas_k = sorted({g["kunye"] for t, g, _ in ls if t == "bas"})
        gos = collections.Counter(g["gosterim"] for _, g, _ in ls).most_common(1)[0][0]
        ornek = R3["eksik"][a]["ornek"] if a in R3["eksik"] else ""
        # belirlenen yerler: seçilen koordinata göre KUME_KM ile gruplanır
        yerler = []
        for t, g, r in ls:
            s = r.get("secilen")
            if not s:
                continue
            for y in yerler:
                if G.km(y["s"]["lat"], y["s"]["lon"], s["lat"], s["lon"]) <= G.KUME_KM:
                    y["ls"].append((t, g, r))
                    break
            else:
                yerler.append({"s": s, "r": r, "ls": [(t, g, r)]})
        bel = [(t, g, r) for t, g, r in ls if r["sinif"] == "belirsiz"]
        gy = [(t, g, r) for t, g, r in ls if r["sinif"] == "gazeteerde-yok"]
        adas = len(yerler) > 1
        siniflar = set()
        for y in yerler:
            r = y["r"]
            siniflar.add(r["sinif"])
            yk = len({g["mid"] for t, g, _ in y["ls"] if t == "kron"})
            yb = sorted({g["kunye"] for t, g, _ in y["ls"] if t == "bas"})
            baglam = sorted({x for t, g, _ in y["ls"] for x in ((g.get("taraflar") or []) if t == "kron"
                                                                  else [g["kunye"]])})
            s = r["secilen"]
            ik = r.get("ikinci_kaynak")
            ortak = (a, gos, "%.5f" % s["lat"], "%.5f" % s["lon"], s["kaynak"], s["id"], s["uri"],
                     s["ad"], s["eslesen"], "asil" if s["asil"] else "alternatif", s["tur"],
                     s.get("zaman", ""),
                     ("%s:%s" % (ik["kaynak"], ik["id"])) if ik else "", r.get("kaynaklar_arasi_km") or "",
                     KC.Y[r["atlas_idx"]]["ad"], r["atlas_km"], yk, len(yb), ",".join(yb),
                     ",".join(baglam[:8]), r["katman"], "EVET" if adas else "", ornek)
            if r["sinif"] == "atlasta-farkli-adla":
                a3 = [KC.Y[i]["ad"] for i in r["atlas_3km"]]
                satirlar["farkli"].append((KC.Y[r["atlas_idx"]]["ad"], s["eslesen"], gos, a, s["kaynak"],
                                           s["id"], s["uri"], "%.5f" % s["lat"], "%.5f" % s["lon"],
                                           r["atlas_km"], " | ".join(a3[1:]), yk, len(yb), ",".join(yb),
                                           r["katman"], r.get("kaynaklar_arasi_km") or "",
                                           "EVET" if adas else "", ornek))
            elif r["sinif"] == "yakin-incele":
                satirlar["yakin"].append(ortak)
            else:
                satirlar["yok"].append(ortak)
        for t, g, r in bel:
            satirlar["belirsiz"].append((a, gos, t, g["mid"] if t == "kron" else "kunye:" + g["kunye"],
                                         g.get("t", ""), ",".join(g.get("taraflar") or []) if t == "kron"
                                         else g["kunye"], r.get("sebep", ""), r.get("katman", ""),
                                         r["aday_n"], r.get("kume_n", ""), _aday_ozet(r.get("adaylar", []))))
        for t, g, r in gy:
            satirlar["gyok"].append((a, gos, t, g["mid"] if t == "kron" else "kunye:" + g["kunye"]))
        # anahtar sınıfı: bütün geçişler farklı-adla ise 'çözüldü'
        if ls and all(r["sinif"] == "atlasta-farkli-adla" for _, _, r in ls) and not adas:
            anahtar_sinif[a] = "atlasta-farkli-adla"
        elif adas:
            anahtar_sinif[a] = "adas-coklu-yer"
        elif yerler:
            anahtar_sinif[a] = (yerler[0]["r"]["sinif"] + ("+belirsiz" if bel else "")
                                + ("+gazeteerde-yok" if gy else ""))
        elif bel:
            anahtar_sinif[a] = "belirsiz"
        else:
            anahtar_sinif[a] = "gazeteerde-yok"

    # ── başkent önce/sonra
    cozulen_bas = collections.defaultdict(set)     # künye → koordinatla çözülen parça
    for a, b, r in bsonuc:
        if r["sinif"] == "atlasta-farkli-adla":
            cozulen_bas[b["kunye"]].add(b["gosterim"])
    kalan_bas = collections.defaultdict(list)
    for a, b, r in bsonuc:
        if r["sinif"] != "atlasta-farkli-adla":
            kalan_bas[b["kunye"]].append(b["gosterim"])
    bas_once = collections.Counter(x[3] for x in R3["baskent"])
    bas_sonra = collections.Counter()
    for x in R3["baskent"]:
        did, durum = x[0], x[3]
        if durum in ("hic-cozulmedi", "kismi"):
            ok_var = bool(x[4]) or bool(cozulen_bas.get(did))
            if not kalan_bas.get(did):
                durum = "tam"
            elif ok_var:
                durum = "kismi"
            else:
                durum = "hic-cozulmedi"
        bas_sonra[durum] += 1

    os.makedirs(KOORD_CIKTI, exist_ok=True)
    ORTAK_BAS = ["anahtar", "gosterim", "lat", "lon", "kaynak", "kaynak_id", "uri", "gazeteer_ad",
                 "eslesen_ad", "ad_turu", "gazeteer_tur", "pleiades_zaman", "ikinci_kaynak",
                 "kaynaklar_arasi_km", "en_yakin_atlas", "atlas_km", "madde_sayisi",
                 "baskent_kunye_sayisi", "baskent_kunyeleri", "baglam_kunyeleri", "baglam_katmani",
                 "adas_coklu", "ornek_madde"]
    yok_s = sorted(satirlar["yok"], key=lambda x: (-(x[16] + x[17]), x[0]))
    yakin_s = sorted(satirlar["yakin"], key=lambda x: (-(x[16] + x[17]), x[0]))
    _ktsv("yeni_nokta_aday.tsv", ORTAK_BAS, yok_s, G)
    _ktsv("yakin_incele.tsv", ORTAK_BAS, yakin_s, G)
    _ktsv("esanlam_oneri.tsv",
          ["atlas_ad", "gazeteer_eslesen_ad", "kronoloji_gosterim", "anahtar", "kaynak", "kaynak_id", "uri",
           "gazeteer_lat", "gazeteer_lon", "atlas_km", "diger_atlas_3km_icinde", "madde_sayisi",
           "baskent_kunye_sayisi", "baskent_kunyeleri", "baglam_katmani", "kaynaklar_arasi_km",
           "adas_coklu", "ornek_madde"],
          sorted(satirlar["farkli"], key=lambda x: (-(x[11] + x[12]), x[0])), G)
    _ktsv("belirsiz.tsv", ["anahtar", "gosterim", "tur", "madde_ya_da_kunye", "t", "baglam", "sebep",
                           "denenen_katman", "aday_n", "kume_n", "adaylar(ilk 6)"],
          sorted(satirlar["belirsiz"], key=lambda x: (x[0], x[3])), G)
    _ktsv("gazeteerde_yok.tsv", ["anahtar", "gosterim", "tur", "madde_ya_da_kunye"],
          sorted(satirlar["gyok"]), G)
    _ktsv("sinav.tsv", ["tur", "girdi", "baglam", "yil", "sinif", "sebep", "katman", "secilen",
                        "lat,lon", "en_yakin_atlas", "atlas_km", "atlas_3km_icinde",
                        "kaynaklar_arasi_km", "hukum"], ksinav, G)
    oz = {
        "kimlik": {"commit": git("rev-parse", "HEAD"), "dal": git("rev-parse", "--abbrev-ref", "HEAD"),
                   "agac": KOK, "kirli": git("status", "--porcelain", "--", "data", "arac/girdi.py"),
                   "tarih": time.strftime("%Y-%m-%d %H:%M"), "makine": os.environ.get("COMPUTERNAME", "?"),
                   "geonames": gz_yol, "pleiades": pl_yol},
        "gazeteer_say": dict(KC.gz.say), "olculemedi": KC.gz.olculemedi,
        "once": {"sehir_ad": len(R3["eksik"]), "sehir_parca": len(sonuc),
                 "baskent": dict(bas_once),
                 "baskent_eksik_kunye": bas_once.get("hic-cozulmedi", 0) + bas_once.get("kismi", 0),
                 "baskent_eksik_parca": len(bsonuc)},
        "sonra": {"sehir_ad_hala_cozulmeyen": sum(1 for a in R3["eksik"]
                                                 if anahtar_sinif.get(a) != "atlasta-farkli-adla"),
                  "sehir_parca_hala_cozulmeyen": sum(1 for _, _, r in sonuc
                                                     if r["sinif"] != "atlasta-farkli-adla"),
                  "baskent": dict(bas_sonra),
                  "baskent_eksik_kunye": bas_sonra.get("hic-cozulmedi", 0) + bas_sonra.get("kismi", 0)},
        "parca_sinif": dict(parca_dag), "baskent_parca_sinif": dict(bas_dag),
        "anahtar_sinif": dict(collections.Counter(anahtar_sinif[a] for a in R3["eksik"] if a in anahtar_sinif)),
        "anahtar_sinif_baskent_dahil": dict(collections.Counter(anahtar_sinif.values())),
        "belirsiz_sebep": dict(belirsiz_sebep),
        "satir": {k: len(v) for k, v in satirlar.items()},
        "adas_coklu_anahtar": sorted(a for a, s in anahtar_sinif.items() if s == "adas-coklu-yer"),
        "ksinav": {"kaldi": kkaldi, "satir": ksinav},
        "sure_sn": round(time.time() - t0),
    }
    with io.open(os.path.join(KOORD_CIKTI, "ozet.json"), "w", encoding="utf-8") as f:
        json.dump(oz, f, ensure_ascii=False, indent=1)
    koord_rapor(oz, yok_s, satirlar, G)
    log("tamam: %s (%d sn)" % (KOORD_CIKTI, time.time() - t0))
    return oz


def koord_rapor(oz, yok_s, satirlar, G):
    k = oz["kimlik"]
    L = []
    w = L.append
    w("# SİLSİLE KOORDİNAT KATMANI — halka ③ adla çözülmeyen yerlerin gazeteerle eşlenmesi")
    w("")
    w("*Bu dosya `py arac/silsile_olc.py --gazeteer-geonames <zip> --gazeteer-pleiades <dizin>` "
      "tarafından ÜRETİLDİ; elle düzenleme — yeniden koştur.*")
    w("")
    w("> " + G.ATIF)
    w("")
    w("| | |\n|---|---|")
    w("| ağaç | `%s` |" % k["agac"])
    w("| dal · commit | `%s` · `%s` |" % (k["dal"], k["commit"]))
    w("| data/ + girdi kirli mi | %s |" % ("HAYIR (temiz)" if not k["kirli"] else "EVET: " + k["kirli"]))
    w("| makine · zaman · süre | %s · %s · %s sn |" % (k["makine"], k["tarih"], oz["sure_sn"]))
    gs = oz["gazeteer_say"]
    w("| GeoNames | %s kayıt okundu · sorgu adına uyan %s kayıt |" % (gs.get("geonames_kayit", "?"),
                                                                   gs.get("geonames_eslesme", "?")))
    w("| Pleiades | %s yer (%s koordinatsız atlandı) · sorgu adına uyan %s kayıt |"
      % (gs.get("pleiades_yer", "?"), gs.get("pleiades_koordinatsiz", 0), gs.get("pleiades_eslesme", "?")))
    if oz["olculemedi"]:
        w("| **ÖLÇÜLEMEDİ** | %s |" % "; ".join(oz["olculemedi"]))
    w("")
    w("## Yöntem")
    w("- **Sorgu:** adla çözülmeyen her ŞEHİR parçası (`denetim/SILSILE-OLCUM-1014` ile aynı evren, aynı "
      "`parca_coz` denemeleri: asıl, parantez/eğik çizgi alternatifleri, betimleyicisiz çekirdek) "
      "`sadelestir` + açık transliterasyon kurallarıyla anahtara çevrilir. GeoNames'te `name`, "
      "`asciiname`, `alternatenames` (kod/sayı/URL elenir); Pleiades'te yer `title` + names tablosunun "
      "`nameTransliterated`/`nameAttested` alanları aranır.")
    w("- **Bağlam merdiveni (en dardan):** ① maddenin kendi `yer_kon`u ≤%d km · ② aynı maddede adla "
      "BULUNAN atlas yerleşimleri (dışbükey zarf + %d km) · ③ `taraflar` künyelerinin sahip olduğu atlas "
      "noktaları (`s:d`; `d:`/`v:` = osmanli) zarfı + %d km · ④ taraf künyelerinin `bolge`si: EV BÖLGESİ "
      "o bolge olan noktalar (ev bölgesi = noktanın en uzun süreli osmanli-dışı sahibinin `bolge`si; "
      "osmanli ağırlıklı noktalar en yakın 7 noktanın oyuyla — künyenin fetih noktaları bölgeyi "
      "şişirmesin diye: İlhanlı `iran` künyesi Anadolu'yu da tuttuğundan birleşim alanı Aydın'daki "
      "`Alamut` köyünü içine alıyordu). Zarf ancak ≤%g derece² ise kullanılır (kıtalar arası "
      "künyede — ABD+Japonya, sömürgeli Almanya — zarf Asya'yı yutuyordu: `Hawaii`→Assam'daki `Hawai`, "
      "`Lidice`→Panama), değilse yalnız tampon. *Dosya varsayımı (taraflarsız `olaylar*.js` = osmanli) "
      "denendi ve ATILDI*: Osmanlı alanı üç kıta olduğundan Ayastefanos→Adana'daki Yeşilköy, Kozluca→"
      "Burdur, Uşi (Ouchy)→Gürün yanlışlarını verdi. Başkentte bağlam = künyenin kendisi (③) ve `bolge`si (④). İlk aday veren katmanda "
      "adaylar %g km'lik tek bağlantıyla kümelenir: **tek küme → seçilir; >1 küme → `belirsiz`, "
      "SEÇİLMEZ**. Geniş katmanlarda (④ ⑤) yalnız GeoNames `alternatenames` eşleşmesi yetmez (asıl ad "
      "ya da Pleiades adı gerekir; yoksa `belirsiz`). Hiçbir katmanda aday yoksa `belirsiz (bağlam dışı)`; bağlam hiç yoksa `belirsiz "
      "(bağlam yok)`." % (G.YER_KON_KM, G.TAMPON_KM, G.TAMPON_KM, G.ZARF_AZAMI_DERECE2, G.KUME_KM))
    w("- **Kaynak önceliği:** madde (ya da künye `f`) yılı < %d → Pleiades kaydı temsilci, aksi hâlde "
      "GeoNames; aynı kümede öteki gazeteerin kaydı varsa iki kaynak arası km yazılır." % G.ANTIK_SINIR)
    w("- **Sınıf (temsilcinin en yakın atlas yerleşimine uzaklığı, `girdi.yukle()` evreni):** ≤%g km "
      "`atlasta-farkli-adla` (eşanlam ADAYI) · %g–%g km `yakin-incele` · >%g km `atlasta-yok` (yeni "
      "nokta ADAYI)." % (G.ESIK_AYNI_KM, G.ESIK_AYNI_KM, G.ESIK_YAKIN_KM, G.ESIK_YAKIN_KM))
    w("- Bu araç `arac/yer_esanlam.json`a ve `data/`ya **YAZMAZ**. `esanlam_oneri.tsv` onay bekleyen "
      "listedir: kaynaklı bulunursa elle `elle` bölümüne geçer. Gazeteer tarih dayanağı değildir.")
    w("")
    o, s = oz["once"], oz["sonra"]
    w("## Önce / sonra (halka ③)")
    w("| ölçü | önce (yalnız ad) | sonra (ad + koordinat) |\n|---|---|---|")
    w("| çözülmeyen ŞEHİR adı (ayrı anahtar) | %d | **%d** |" % (o["sehir_ad"], s["sehir_ad_hala_cozulmeyen"]))
    w("| çözülmeyen ŞEHİR parçası | %d | **%d** |" % (o["sehir_parca"], s["sehir_parca_hala_cozulmeyen"]))
    w("| başkenti indekste OLMAYAN künye (hiç + kısmi) | %d | **%d** |"
      % (o["baskent_eksik_kunye"], s["baskent_eksik_kunye"]))
    w("| — hiçbir başkent parçası yok | %d | %d |" % (o["baskent"].get("hic-cozulmedi", 0),
                                                    s["baskent"].get("hic-cozulmedi", 0)))
    w("| — kısmi | %d | %d |" % (o["baskent"].get("kismi", 0), s["baskent"].get("kismi", 0)))
    w("")
    w("*\"Sonra\"da yalnız `atlasta-farkli-adla` çözülmüş sayılır — o da eşanlam ADAYIdır; onaylanmadan "
      "atlas sözlüğüne girmez. `yakin-incele`, `atlasta-yok`, `belirsiz` çözülmemiş kalır (koordinatı "
      "bilinir, atlasta karşılığı yok ya da kesin değil).*")
    w("")
    w("## Sınıf dağılımı")
    w("| sınıf | kronoloji parçası | başkent parçası |\n|---|---|---|")
    for c in ("atlasta-farkli-adla", "yakin-incele", "atlasta-yok", "belirsiz", "gazeteerde-yok"):
        w("| %s | %d | %d |" % (c, oz["parca_sinif"].get(c, 0), oz["baskent_parca_sinif"].get(c, 0)))
    w("")
    w("Anahtar (ayrı ad) düzeyi — kronolojide çözülmeyen %d ad: %s" % (
        o["sehir_ad"], " · ".join("%s %d" % kv for kv in sorted(oz["anahtar_sinif"].items(),
                                                                key=lambda kv: -kv[1]))))
    w("")
    w("Belirsiz sebepleri (parça): %s" % " · ".join("%s %d" % kv for kv in sorted(
        oz["belirsiz_sebep"].items(), key=lambda kv: -kv[1])))
    w("")
    w("Adaş (aynı ad, maddeler arasında >%g km ayrı İKİ yere çözüldü): %d anahtar — %s"
      % (G.KUME_KM, len(oz["adas_coklu_anahtar"]), ", ".join(oz["adas_coklu_anahtar"]) or "yok"))
    w("")
    w("Dosyalar: `esanlam_oneri.tsv` (%d) · `yakin_incele.tsv` (%d) · `yeni_nokta_aday.tsv` (%d) · "
      "`belirsiz.tsv` (%d) · `gazeteerde_yok.tsv` (%d) · `sinav.tsv` · `ozet.json`"
      % tuple(oz["satir"][x] for x in ("farkli", "yakin", "yok", "belirsiz", "gyok")))
    w("")
    w("## Sınav — iki yön + adaş (`sinav.tsv`)")
    w("| tür | girdi | bağlam | yıl | sınıf | sebep | katman | seçilen | lat,lon | en yakın atlas | km | ≤3 km atlas | kaynaklar arası km | hüküm |")
    w("|---|---|---|---|---|---|---|---|---|---|---|---|---|---|")
    for r in oz["ksinav"]["satir"]:
        w("| " + " | ".join(str(x).replace("|", "/") for x in r) + " |")
    w("")
    w("## En sık geçen 50 `atlasta-yok` şehir (yeni nokta ADAYI)")
    w("| # | ad | madde | künye başkenti | lat | lon | kaynak id | gazeteer adı | en yakın atlas (km) | bağlam katmanı |")
    w("|---|---|---|---|---|---|---|---|---|---|")
    for i, x in enumerate(yok_s[:50], 1):
        w("| %d | %s | %d | %d | %s | %s | [%s:%s](%s) | %s | %s (%s) | %s |"
          % (i, x[1], x[16], x[17], x[2], x[3], x[4], x[5], x[6], x[7], x[14], x[15], x[20]))
    w("")
    w("## Belirsizler (`belirsiz.tsv`, tam liste)")
    bel = collections.defaultdict(list)
    for r in satirlar["belirsiz"]:
        bel[(r[0], r[1])].append(r)
    w("%d parça · %d ayrı ad. Seçim YAPILMADI; insan bağlama bakıp seçer." % (len(satirlar["belirsiz"]), len(bel)))
    w("")
    w("| ad | geçiş | sebep(ler) | ilk adaylar |\n|---|---|---|---|")
    for (a, g), ls in sorted(bel.items(), key=lambda kv: (-len(kv[1]), kv[0])):
        w("| %s | %d | %s | %s |" % (g, len(ls), ", ".join(sorted({x[6] for x in ls})),
                                    ls[0][10][:220].replace("|", "/")))
    w("")
    w("## Ölçüm uyarıları (ölçülemedi ≠ yok ≠ temiz)")
    w("- **GeoNames cities1000 yalnız nüfusu ≥1000 yerleşim yeridir** (P sınıfı): ören yeri, kale, "
      "terk edilmiş şehir (Ani, Alamut, Harran'ın antik höyüğü) burada YOKTUR — onlar için tek kaynak "
      "Pleiades'tir; Pleiades Greko-Romen merkezlidir, İran/Orta Asya/Doğu Asya/Amerika'yı seyrek kapsar. "
      "`gazeteerde-yok` = bu İKİ dosyada yok demektir, dünyada yok değil (GeoNames allCountries "
      "indirilmedi — ölçülmedi).")
    w("- Ad eşleşmesi Türkçe-güvenli katlama + transliterasyon kurallarıdır; Türkçe/Osmanlıca adlar "
      "(`Belensiye`, `Meyyâfârikîn`) gazeteerde ancak alternatenames'te Türkçe biçim varsa ya da "
      "kronolojide parantezli modern ad varsa bulunur.")
    w("- Bağlam alanı lon/lat düzleminde dışbükey zarftır; antimeridyeni geçen künyelerde (Pasifik) zarf "
      "yanlış olabilir, tampon katmanı yine çalışır. Geniş künyeler (imparatorluklar, sömürge sahipleri) "
      "zarfı kıtalar boyu açar ⇒ o maddelerde adaş `belirsiz`e düşer (seçmemek bilinçli).")
    w("- `atlasta-farkli-adla` eşiği (≤%g km) iki ayrı yeri de yakalayabilir (ikiz şehir, antik/yeni "
      "yer, semt): `diger_atlas_3km_icinde` sütunu doluysa birden çok atlas noktası var — örn. "
      "Budapeşte hem Budin hem Peşte'ye 3 km içinde." % G.ESIK_AYNI_KM)
    w("- Gazeteer koordinatı temsilî noktadır (GeoNames: şehir merkezi; Pleiades: `reprLat/reprLong`); "
      "yeni nokta yazılacaksa koordinat ve TARİH akademik kaynaktan ayrıca doğrulanır.")
    with io.open(os.path.join(KOORD_CIKTI, "RAPOR.md"), "w", encoding="utf-8", newline="\n") as f:
        f.write("\n".join(L) + "\n")


def main():
    t0 = time.time()
    soz = sozluk_oku()
    log("yerleşim evreni okunuyor (girdi.yukle)…")
    Y = girdi.yukle(sessiz=True)
    D = girdi.oku_devletler()
    kum = siniflandirma_kumeleri(soz, D)
    dz = Dizin(Y, soz, kum)
    log("  %d yerleşim · %d künye · ad katmanları: ad %d · parantez %d · esanlam %d anahtar"
        % (len(Y), len(D), len(dz.kat["ad"]), len(dz.kat["parantez"]), len(dz.kat["esanlam"])))
    sinav_s, kaldi = sinav(Y, dz, kum)
    for s in sinav_s:
        log("  SINAV", " · ".join(str(x) for x in s))
    koord_mod = bool(_arg("--gazeteer-geonames") or _arg("--gazeteer-pleiades"))
    if "--sinav" in sys.argv and not koord_mod:
        return 1 if kaldi else 0
    if koord_mod:
        # KOORDİNAT KATMANI: yalnız halka ③ + gazeteer; çıktı SILSILE-KOORDINAT-1014'e,
        # SILSILE-OLCUM-1014 dosyalarına DOKUNULMAZ, halka ④ koşturulmaz.
        if "--sinav" in sys.argv:
            KC = KoordCozucu(Y, D, kum, soz, _arg("--gazeteer-geonames"), _arg("--gazeteer-pleiades"))
            KC.yukle({x[1] for x in KSINAV})
            ks, kk = koord_sinav(KC)
            for s in ks:
                log("  KSINAV", " · ".join(str(x) for x in s))
            return 1 if (kaldi or kk) else 0
        log("kronoloji yükleniyor (index.html → paket_coz → node vm)…")
        kron_dosyalar, J, hatali, bos = kronoloji_yukle()
        if hatali:
            log("  UYARI yüklenemeyen dosya: %s" % [d["dosya"] for d in hatali])
        log("halka ③…")
        R3 = halka3(Y, D, soz, kum, dz, J, kron_dosyalar)
        oz = koordinat(Y, D, soz, kum, dz, R3, t0)
        if oz["olculemedi"]:
            return 2
        return 1 if (kaldi or oz["ksinav"]["kaldi"]) else 0

    log("kronoloji yükleniyor (index.html → paket_coz → node vm)…")
    kron_dosyalar, J, hatali, bos = kronoloji_yukle()
    if hatali:
        log("  UYARI yüklenemeyen dosya: %s" % [d["dosya"] for d in hatali])
    log("  %d dosya · %d madde (kişi dosyaları dahil)" % (len(kron_dosyalar), len(J["maddeler"])))
    log("halka ③…")
    R3 = halka3(Y, D, soz, kum, dz, J, kron_dosyalar)
    log("halka ④…")
    R4 = halka4(Y)
    S19 = sehir1900(R4)

    os.makedirs(CIKTI, exist_ok=True)
    kimlik = {"commit": git("rev-parse", "HEAD"), "dal": git("rev-parse", "--abbrev-ref", "HEAD"),
              "agac": KOK, "kirli": git("status", "--porcelain", "--", "data", "arac/girdi.py",
                                        "arac/girdi_listesi.py"),
              "tarih": time.strftime("%Y-%m-%d %H:%M"), "makine": os.environ.get("COMPUTERNAME", "?")}

    # ── ③ dosyaları
    eksik = sorted(R3["eksik"].items(), key=lambda kv: (-len(kv[1]["madde"]), kv[0]))
    # İPUCU (hüküm değil): atlasta yazımı benzeyen ad — 'Şanlıurfa'↔'Urfa' gibi.
    # Eşanlam DEĞİLDİR; insan bakıp kaynaklıysa yer_esanlam.json 'elle'ye yazar.
    import difflib
    atlas_cek = collections.defaultdict(list)
    for y in Y:
        atlas_cek[sade(re.sub(r"\s*\(.*?\)\s*", " ", y["ad"]))].append(y["ad"])
    cek_liste = [k for k in atlas_cek if len(k) >= 4]

    def benzer(k):
        if len(k) < 4:
            return ""
        out = difflib.get_close_matches(k, cek_liste, n=3, cutoff=0.85)
        out += [c for c in cek_liste if len(c) >= 4 and c != k and (k.endswith(c) or c.endswith(k)
                                                                     or k.startswith(c))][:3]
        seen, ad = set(), []
        for c in out:
            for a in atlas_cek[c]:
                if a not in seen:
                    seen.add(a)
                    ad.append(a)
        return " | ".join(ad[:4])
    tsv("h3_cozulmeyen_sehir.tsv",
        ["anahtar", "gosterim", "madde_sayisi", "baskent_kunye_sayisi", "dosyalar", "ornek_madde",
         "ipucu_atlasta_benzer_yazim"],
        [(k, v["gosterim"].most_common(1)[0][0], len(v["madde"]), len(R3["bas_eksik"].get(k, [])),
          "; ".join("%s:%d" % x for x in v["dosya"].most_common(4)), v["ornek"], benzer(k))
         for k, v in eksik])
    tsv("h3_baskent_eksik_sehir.tsv", ["anahtar", "kunye_sayisi", "kronolojide_yer_alani_olarak_gecer",
                                       "ipucu_atlasta_benzer_yazim"],
        [(k, len(set(R3["bas_eksik"][k])), len(R3["eksik"][k]["madde"]) if k in R3["eksik"] else 0,
          benzer(k)) for k in sorted(R3["bas_eksik"], key=lambda k: -len(set(R3["bas_eksik"][k])))])
    kv_s = []
    for kova, ads in R3["kova_ad"].items():
        for ad, ms in ads.items():
            kv_s.append((kova, ad, len(ms)))
    kv_s.sort(key=lambda x: (x[0], -x[2], x[1]))
    tsv("h3_cozulmeyen_bolge_cografi.tsv", ["kova", "ad", "madde_sayisi"], kv_s)
    tsv("h3_belirsiz.tsv", ["ad", "madde_sayisi"],
        sorted(((a, len(m)) for a, m in R3["belirsiz_ad"].items()), key=lambda x: -x[1]))
    tsv("h3_baskent.tsv", ["devlet_id", "ad", "baskent_ham", "durum", "cozulen", "cozulmeyen[kova]"],
        R3["baskent"])
    tsv("h3_yer_kon_cozulmeyen.tsv", ["madde", "t", "b", "lat", "lon", "en_yakin_km", "en_yakin_yerlesim"],
        sorted(R3["kon_cozulmeyen"], key=lambda x: -x[5]))
    tsv("h3_metin_bulunan_yerlesim.tsv", ["yerlesim", "yer_alansiz_madde_sayisi"],
        sorted(((a, len(m)) for a, m in R3["metin_bulunan_ad"].items()), key=lambda x: -x[1]))
    ad_s = sorted(R3["metin_aday"].items(), key=lambda kv: (-len(kv[1]["madde"]), kv[0]))
    tsv("h3_metin_aday_ozel_ad.tsv",
        ["anahtar", "gosterim", "madde_sayisi", "kesme_ekli_gecis", "kaynak_tur"],
        [(k, v["gosterim"].most_common(1)[0][0], len(v["madde"]), v["ek"],
          "; ".join("%s:%d" % x for x in v["kaynak_tur"].items())) for k, v in ad_s])
    tsv("h3_alias_reddedilen.tsv", ["yerlesim", "reddedilen_alternatif"], dz.reddedilen_alt)
    tsv("h3_sinav.tsv", ["yon", "girdi", "durum", "yol", "atlas_karsiligi", "hukum"], sinav_s)

    # ── ④ dosyaları
    H, kh, so = R4["H"], R4["kara_h"], R4["sonuc"]
    kitalar = sorted({H[i]["kita"] for i in kh})
    KOVALAR = [("0", 0, 0), ("1", 1, 1), ("2", 2, 2), ("3-4", 3, 4), ("5-9", 5, 9), ("10+", 10, 10 ** 9)]
    dag = []
    for yil in TARIHLER:
        for kita in kitalar + ["DÜNYA"]:
            idx = [n for n, i in enumerate(kh) if kita == "DÜNYA" or H[i]["kita"] == kita]
            for olcu in ("boyayan", "sahnede"):
                arr = so[yil]["nB" if olcu == "boyayan" else "nA"]
                v = [int(arr[kh[n]]) for n in idx]
                say = [sum(1 for x in v if a <= x <= b) for _, a, b in KOVALAR]
                dag.append([yil, kita, olcu, len(v)] + say +
                           [round(statistics.mean(v), 2) if v else "",
                            statistics.median(v) if v else ""])
    tsv("h4_dagilim_tarih_kita.tsv", ["tarih", "kita", "olcu", "kara_hucre"] +
        ["n=" + k[0] for k in KOVALAR] + ["ortalama", "medyan"], dag)
    esik_s = []
    for yil in TARIHLER:
        for kita in kitalar + ["DÜNYA"]:
            idx = [n for n, i in enumerate(kh) if kita == "DÜNYA" or H[i]["kita"] == kita]
            nB = so[yil]["nB"]
            km_ = so[yil]["km"]
            esik_s.append((yil, kita, len(idx),
                           sum(1 for n in idx if nB[kh[n]] < 1),
                           sum(1 for n in idx if nB[kh[n]] < 2),
                           sum(1 for n in idx if nB[kh[n]] < 3),
                           sum(1 for n in idx if km_[n] > TAVAN_KM),
                           sum(1 for n in idx if km_[n] > 100)))
    tsv("h4_esik_secenekleri.tsv",
        ["tarih", "kita", "kara_hucre", "E1_n<1", "E2_n<2", "E3_n<3", "E200_km>200", "E100_km>100"],
        esik_s)
    alt_s = []
    for yil in (1300, 1500, 1700, 1900):
        say = collections.defaultdict(lambda: [0, 0, 0])
        for n, i in enumerate(kh):
            a = say[(H[i]["kita"], H[i]["altbolge"])]
            a[0] += 1
            a[1] += so[yil]["nB"][i] < 1
            a[2] += so[yil]["nB"][i] < 2
        for (k, a), v in sorted(say.items()):
            alt_s.append((yil, k, a, v[0], v[1], v[2]))
    tsv("h4_altbolge.tsv", ["tarih", "kita", "altbolge", "kara_hucre", "n<1", "n<2"], alt_s)
    sey = []
    for yil in TARIHLER:
        for n, i in enumerate(kh):
            b = int(so[yil]["nB"][i])
            if b <= 1:
                h = H[i]
                sey.append((h["id"], yil, b, int(so[yil]["nA"][i]),
                            round(float(so[yil]["km"][n]), 1) if math.isfinite(so[yil]["km"][n]) else "",
                            round(h["kara"], 2), h["kita"], h["altbolge"],
                            round(h["tlat"], 2), round(h["tlon"], 2)))
    tsv("h4_seyrek_hucre.tsv", ["hucre", "tarih", "n_boyayan", "n_sahnede", "en_yakin_boyayan_km",
                                "kara_orani", "kita", "altbolge", "kara_lat", "kara_lon"], sey)
    if S19:
        tsv("h4_sehir1900_aday.tsv", ["ad_1900", "bolge", "ulke_1900", "lat", "lon", "hucre",
                                      "hucrede_boyayan_1900", "en_yakin_boyayan_km_1900"],
            S19["satir"])

    # ── özet JSON
    sayac = {"%s|%s" % k: v for k, v in R3["sayac"].items()}
    ozet = {
        "kimlik": kimlik,
        "evren": {"yerlesim": len(Y), "kunye": len(D), "kron_dosya": len(kron_dosyalar),
                  "yuklenemeyen": [d["dosya"] for d in hatali], "dizisiz": bos,
                  "madde_toplam": R3["maddeler_n"]},
        "h3": {"sayac": sayac,
               "parca": {"%s|%s|%s" % k: v for k, v in R3["parca_say"].items()},
               "yol": {"%s|%s" % k: v for k, v in R3["yol_say"].items()},
               "yer_kon": dict(R3["kon_say"]),
               "cozulmeyen_sehir_ad": len(eksik),
               "baskent": dict(R3["bas_say"]),
               "metin_bulunan_yerlesim_ad": len(R3["metin_bulunan_ad"]),
               "metin_aday_ad": len(R3["metin_aday"]),
               "alias_reddedilen": len(dz.reddedilen_alt),
               "metin_elenen_eslesme": dict(METIN_ELENEN),
               "elle_reddedilen": dz.elle_red, "esanlam_yuklu": dz.esanlam_yuklu},
        "h4": {"hucre": len(H), "kara_hucre": len(kh), "kara_esik": KARA_ESIK,
               "kara_hucre_50": R4["kara_n_50"], "kara_hucre_pos": R4["kara_n_pos"],
               "izgara_disi_yerlesim": R4["disari"],
               "tarih": {str(y): {"boyayan": so[y]["boyayan_toplam"],
                                  "sahnede": so[y]["sahnede_toplam"]} for y in TARIHLER},
               "sehir1900": {k: (dict(v) if isinstance(v, collections.Counter) else v)
                             for k, v in S19.items() if k != "satir"} if S19 else None},
        "sinav": {"kaldi": kaldi, "satir": sinav_s},
        "sure_sn": round(time.time() - t0),
    }
    with io.open(os.path.join(CIKTI, "ozet.json"), "w", encoding="utf-8") as f:
        json.dump(ozet, f, ensure_ascii=False, indent=1)
    rapor(ozet)
    log("tamam: %s (%d sn)" % (CIKTI, time.time() - t0))
    return 1 if kaldi else 0


def _oku_tsv(ad):
    s = io.open(os.path.join(CIKTI, ad), encoding="utf-8").read().splitlines()
    bas = s[0].split("\t")
    return [dict(zip(bas, x.split("\t"))) for x in s[1:]]


def rapor(oz):
    """RAPOR.md — sayılar ozet.json ve TSV'lerden okunur (elle sayı yazılmaz)."""
    k, h3, h4 = oz["kimlik"], oz["h3"], oz["h4"]
    S = h3["sayac"]
    P = h3["parca"]
    L = []
    w = L.append
    w("# SİLSİLE ÖLÇÜMÜ — halka ③ (yer çözümü) ve ④ (yerleşim yoğunluğu)")
    w("")
    w("*Bu dosya `py arac/silsile_olc.py` tarafından ÜRETİLDİ; elle düzenleme — yeniden koştur.*")
    w("")
    w("| | |\n|---|---|")
    w("| ağaç | `%s` |" % k["agac"])
    w("| dal · commit | `%s` · `%s` |" % (k["dal"], k["commit"]))
    w("| data/ + girdi kirli mi | %s |" % ("HAYIR (temiz)" if not k["kirli"] else "EVET: " + k["kirli"]))
    w("| makine · zaman | %s · %s |" % (k["makine"], k["tarih"]))
    w("| süre | %s sn |" % oz["sure_sn"])
    w("")
    w("## Evren ve tanımlar")
    e = oz["evren"]
    w("- **Yerleşim evreni:** `girdi.yukle()` (GIRDI_DOSYALARI) → **%d** yerleşim. "
      "`index.html`'in yüklediği öteki `yerlesimler_*.js` (ör. nokta2/3, halef_1946) motor evreninde "
      "değilse burada da YOKTUR — ölçülen soru *\"motorun çizdiği noktalarda var mı\"*dır." % e["yerlesim"])
    w("- **Kronoloji evreni:** `index.html` → `arac/paket_coz.py` ile paketler çözüldü → "
      "**%d** `olaylar*/kronoloji*` dosyası, node `vm` ile yüklendi (`arac/silsile_yukle.js`); "
      "yüklenemeyen: %s · dizi tanımlamayan: %s. Üstüne `devletler.js` künyelerinin "
      "`kronoloji[]` maddeleri (**%d** künye). Toplam **%d** madde."
      % (e["kron_dosya"], e["yuklenemeyen"] or "0", e["dizisiz"] or "0", e["kunye"], e["madde_toplam"]))
    w("- **Ad eşleme:** `ad_esanlam.sadelestir` (Türkçe güvenli; `İ`→`i` lower()'dan ÖNCE) · "
      "yerleşim adının parantez/eğik çizgi alternatifleri (bölge/ülke/devlet adı olanlar alias "
      "SAYILMADI: %d alternatif, `h3_alias_reddedilen.tsv`) · `data/ad_esanlam.js` (%d çift, salt okunur) · "
      "`arac/yer_esanlam.json` `elle` (bugün boş; yalnız kaynaklı çift kabul eder) · açık "
      "transliterasyon kuralları (q→k, w→v, ph→f, x→ks, çift harf) — kural katmanı yalnız yer "
      "alanlarında, serbest metinde KULLANILMAZ." % (h3["alias_reddedilen"], h3["esanlam_yuklu"]))
    w("- **Varlık (④):** `sahnede(g)` = `kur ≤ g < bit` (motorun `devir_kumesi` tanımı, "
      "`uret_petek.py:5047`; alan yoksa sınırsız). `boyayan(g)` = sahnede **ve** g'yi kapsayan bir "
      "`d:`/`v:`/`s:` dönemi var, `s:` sahibi `__BOSLUK__` değil. `isg:` sayılmaz (motor okumaz; "
      "sahipliği değiştirmez). Eşik tabloları **boyayan** üzerinden; sahnede ayrıca dağılımda.")
    w("- **Izgara:** eşit alanlı enlem bandı — 1° bant, bant içinde round(360·cos φ) dilim ⇒ her hücre "
      "≈ 111×111 km (~12.360 km²). Gerekçe: 1°×1° hücre 60°K'de ekvatordakinin yarısı alandadır; "
      "\"hücre başına yerleşim\" ancak eşit alanla bölgeler arası karşılaştırılabilir. Pencere -60..85 "
      "(motorun `BOLGE`'si). Toplam **%d** hücre." % h4["hucre"])
    w("- **Kara:** `veri-kaynak/ne_10m_land.geojson` (motorun kara maskesinin kaynağı, "
      "`uret_petek.py:747`; `motor_kara.geojson` motor ÇIKTISI olduğu için kullanılmadı). Hücre başına "
      "%d×%d örnek; kara oranı ≥ %.2f olan **%d** kara hücresi (≥0,50: %d · >0: %d)."
      % (ORNEK, ORNEK, h4["kara_esik"], h4["kara_hucre"], h4["kara_hucre_50"], h4["kara_hucre_pos"]))
    w("- **Kıta:** hücrenin kara ağırlık merkezine en yakın Natural Earth ülkesinin `CONTINENT` alanı "
      "(MODERN sınır — yalnız kovalama içindir, tarihî iddia değildir). `devletler.js` `bolge` sözlüğü "
      "coğrafî poligon taşımadığı için hücreye bağlanamadı ⇒ kıta + `SUBREGION` (`h4_altbolge.tsv`).")
    w("")
    w("## Halka ③ — kronolojideki yerler yerleşim indeksinde mi")
    w("")
    w("### Madde düzeyi")
    w("| kaynak | madde | yer alanı olan | tam çözülen | kısmi | hiç çözülmeyen | yalnız bölge/coğrafya/serbest | yer alanı OLMAYAN | — metninde atlas yerleşimi geçen |")
    w("|---|---|---|---|---|---|---|---|---|")
    for kt, ad in (("kronoloji-dosyasi", "olaylar*/kronoloji* dosyaları"),
                   ("kunye-kronolojisi", "devletler.js kronoloji[]")):
        g = lambda x: S.get("%s|%s" % (kt, x), 0)   # noqa: E731
        w("| %s | %d | %d | %d | %d | %d | %d | %d | %d |" % (
            ad, g("madde"), g("yer-alanli"), g("yer-tam-cozuldu"), g("yer-kismi"),
            g("yer-hic-cozulmedi"), g("yer-yalniz-bolge-cografi"), g("yer-alansiz"),
            g("yer-alansiz-metinde-yerlesim")))
    w("")
    w("*Son sütun = `yer_id` doldurulabilecek madde sayısı (metin taramasının katı kurallarıyla; "
      "elenen tek kelimelik eşleşmeler: %s).*" % ", ".join("%s %d" % x for x in sorted(
          h3["metin_elenen_eslesme"].items())))
    w("")
    w("### Yer parçası düzeyi (`yer_id` + `yer` alanları, virgül/`ve` ile bölünmüş)")
    bul = sum(v for x, v in P.items() if "|bulundu|" in x)
    bel = sum(v for x, v in P.items() if "|belirsiz|" in x)
    yok = lambda kv: sum(v for x, v in P.items() if x.endswith("|yok|" + kv))  # noqa: E731
    w("| durum | parça |\n|---|---|")
    w("| **bulundu** (tek yerleşime) | **%d** |" % bul)
    w("| bulundu ama belirsiz (birden çok yerleşime düşüyor) | %d |" % bel)
    w("| **çözülmedi — ŞEHİR** | **%d** |" % yok("sehir"))
    w("| çözülmedi — bölge/ülke adı | %d |" % yok("bolge-ulke"))
    w("| çözülmedi — devlet adı | %d |" % yok("devlet-adi"))
    w("| çözülmedi — coğrafî unsur (deniz, nehir, ada…) | %d |" % yok("cografi"))
    w("| çözülmedi — serbest metin (\"Batı Anadolu kıyıları\" tipi) | %d |" % yok("serbest-metin"))
    w("")
    w("Bulunanın yolu: " + " · ".join("%s %d" % (x.replace("|", ":"), v)
                                      for x, v in sorted(h3["yol"].items(), key=lambda kv: -kv[1])))
    w("")
    yk = h3["yer_kon"]
    w("`yer_kon` (koordinat) taşıyan **%d** madde: en yakın yerleşim ≤10 km %d · ≤25 km %d · ≤50 km %d. "
      "Eşik %g km ⇒ çözülmeyen %d (`h3_yer_kon_cozulmeyen.tsv`)."
      % (yk.get("toplam", 0), yk.get("<=10", 0), yk.get("<=25", 0), yk.get("<=50", 0),
         KON_ESIK_KM, yk.get("toplam", 0) - yk.get("<=25", 0)))
    w("")
    es = _oku_tsv("h3_cozulmeyen_sehir.tsv")
    w("### Çözülmeyen ŞEHİR adları — **%d** ayrı ad (tam liste `h3_cozulmeyen_sehir.tsv`)" % len(es))
    w("İpucu sütunu HÜKÜM DEĞİLDİR: atlasta yazımı benzeyen ad (ör. `Şanlıurfa`↔`Urfa`) — bunlar "
      "yeni yerleşim değil, kaynaklı eşanlam ister. Boş ipucu = atlasta benzer yazım da yok.")
    w("")
    w("| # | ad | madde | künye başkenti | ipucu: atlasta benzer yazım |\n|---|---|---|---|---|")
    for i, r in enumerate(es[:30], 1):
        w("| %d | %s | %s | %s | %s |" % (i, r["gosterim"], r["madde_sayisi"],
                                         r["baskent_kunye_sayisi"], r["ipucu_atlasta_benzer_yazim"]))
    w("")
    bs = h3["baskent"]
    w("### Künye başkentleri (`baskent:` metni →/·/,/ve ile bölündü; `bk:` hiçbir künyede yok)")
    w("| durum | künye |\n|---|---|")
    for a, b in (("tam", "her parça çözüldü"), ("kismi", "kısmi — en az bir şehir parçası yok"),
                 ("hic-cozulmedi", "**hiçbir başkent parçası indekste yok**"),
                 ("yalniz-bolge-serbest", "yalnız bölge/serbest metin (şehir adı yok)"),
                 ("baskent-bos-tire", "`baskent: \"—\"`"), ("baskent-alani-yok", "alan yok")):
        w("| %s | %d |" % (b, bs.get(a, 0)))
    w("")
    w("Başkenti indekste OLMAYAN künye (hiç + kısmi) = **%d** · liste `h3_baskent.tsv`, eksik "
      "başkent adları `h3_baskent_eksik_sehir.tsv`." % (bs.get("hic-cozulmedi", 0) + bs.get("kismi", 0)))
    be = _oku_tsv("h3_baskent_eksik_sehir.tsv")
    w("")
    w("En çok künyede geçen eksik başkentler: " + " · ".join(
        "%s (%s)" % (r["anahtar"], r["kunye_sayisi"]) for r in be[:25]))
    w("")
    w("### Sınav — iki yön (`h3_sinav.tsv`)")
    w("| yön | girdi | durum | yol | atlas karşılığı | hüküm |\n|---|---|---|---|---|---|")
    for s in oz["sinav"]["satir"]:
        w("| " + " | ".join(str(x) for x in s) + " |")
    w("")
    w("**Yayçe/Jajce neden BULUNDU:** atlasta `Yayça (Jajce)` kaydı var; parça `Yayçe/Jajce` "
      "eğik çizgiden bölünüyor ve `Jajce` atlasın kendi parantez alternatifiyle birebir eşleşiyor. "
      "`Yayçe` (e ile) tek başına aranınca YOK — yazım farkı `Yayça`↔`Yayçe`. Yani yer atlasta "
      "VAR; \"yok\" beklentisi atlasın adıyla değil, `Yayçe` yazımıyla doğruydu.")
    w("")
    w("Bilinen-yok örneklerinin kronolojide geçişi (`h3_cozulmeyen_sehir.tsv` / metin adayı): "
      "Ani, Alamut, Harran, Rey, Mistra, Sis (Kozan) çözülmeyen şehir listesinde çıkıyor "
      "(sayıları tabloda/TSV'de).")
    w("")
    w("### Yer alanı olmayan maddelerde metin taraması")
    w("- Atlas yerleşimi geçen ayrı yerleşim adı: **%d** (`h3_metin_bulunan_yerlesim.tsv`)."
      % h3["metin_bulunan_yerlesim_ad"])
    w("- Evrende OLMAYAN aday özel ad: **%d** (`h3_metin_aday_ozel_ad.tsv`) — **ADAY**dır, kesinlik "
      "iddiası yok: kişi, kurum, hanedan adı da içerir. `kesme_ekli_gecis` sütunu adın Türkçe kesme "
      "ekiyle (`Mistra'yı`) geçme sayısıdır — özel ad olmanın en güçlü kanıtı." % h3["metin_aday_ad"])
    w("")
    w("## Halka ④ — yerleşim yoğunluğu")
    w("")
    w("### Tarih başına (DÜNYA, %d kara hücresi)" % h4["kara_hucre"])
    w("| tarih | boyayan yerleşim | sahnede | 0 boyayanlı kara hücresi | 1 boyayanlı | 0 sahnedeli |")
    w("|---|---|---|---|---|---|")
    dg = _oku_tsv("h4_dagilim_tarih_kita.tsv")
    for y in TARIHLER:
        b = [r for r in dg if r["tarih"] == str(y) and r["kita"] == "DÜNYA" and r["olcu"] == "boyayan"][0]
        a = [r for r in dg if r["tarih"] == str(y) and r["kita"] == "DÜNYA" and r["olcu"] == "sahnede"][0]
        t = h4["tarih"][str(y)]
        w("| %d | %d | %d | **%s** | %s | %s |" % (y, t["boyayan"], t["sahnede"], b["n=0"], b["n=1"], a["n=0"]))
    w("")
    w("### Eşik seçenekleri — kaç kara hücresi ALTTA kalır (boyayan; `h4_esik_secenekleri.tsv`)")
    w("Eşik ÖNERİLMİYOR; seçim Emre'nin. E200 motorun kendi petek tavanıdır (`TAVAN_KM`=200, "
      "`_dunya_bosluk.py`): en yakın boyayan noktaya >200 km olan hücre hiçbir peteğe girmez.")
    w("")
    w("| tarih | E1: hücrede 0 | E2: hücrede <2 | E3: hücrede <3 | E200: en yakın >200 km | E100: >100 km |")
    w("|---|---|---|---|---|---|")
    for r in _oku_tsv("h4_esik_secenekleri.tsv"):
        if r["kita"] == "DÜNYA":
            w("| %s | %s | %s | %s | %s | %s |" % (r["tarih"], r["E1_n<1"], r["E2_n<2"], r["E3_n<3"],
                                                 r["E200_km>200"], r["E100_km>100"]))
    w("")
    w("### Kıta kırılımı — 1300 · 1500 · 1700 · 1900")
    w("| tarih | kıta | kara hücre | E1 | E2 | E3 | E200 |\n|---|---|---|---|---|---|---|")
    for r in _oku_tsv("h4_esik_secenekleri.tsv"):
        if r["tarih"] in ("1300", "1500", "1700", "1900") and r["kita"] != "DÜNYA":
            w("| %s | %s | %s | %s | %s | %s | %s |" % (r["tarih"], r["kita"], r["kara_hucre"],
                                                      r["E1_n<1"], r["E2_n<2"], r["E3_n<3"],
                                                      r["E200_km>200"]))
    w("")
    w("Dağılımın tamamı (0 · 1 · 2 · 3-4 · 5-9 · 10+, ortalama, medyan; kıta × tarih × boyayan/sahnede): "
      "`h4_dagilim_tarih_kita.tsv`. 0/1 boyayanlı hücrelerin haritası (hücre, tarih, sayı, en yakın "
      "boyayana km, kara ağırlık merkezi lat/lon): `h4_seyrek_hucre.tsv`. Izgara dışı (|enlem| "
      "pencere dışı) yerleşim: %d." % h4["izgara_disi_yerlesim"])
    w("")
    s19 = h4.get("sehir1900")
    if s19:
        w("### `SEHIR-1900-KOORDINAT-1013` `atlasta-yok` şehirleri × 1900 seyrek hücreleri")
        sy = s19["say"]
        w("Toplam %d şehir (koordinatlı %d; ızgara dışı %d; kara-hücresi-dışı %d)."
          % (s19["toplam"], s19["koordli"], sy.get("izgara-disi", 0), sy.get("kara-disi-hucre", 0)))
        w("")
        w("| eşik (1900, boyayan) | düşen şehir | dokunduğu ayrı seyrek hücre |\n|---|---|---|")
        for a, b in (("n<1", "E1 hücrede 0"), ("n<2", "E2 hücrede <2"), ("n<3", "E3 hücrede <3"),
                     (">200km", "E200 >200 km")):
            w("| %s | %d | %d |" % (b, sy.get(a, 0), s19["hucre"].get(a, 0)))
        w("")
        w("Şehir başına satır: `h4_sehir1900_aday.tsv`.")
    w("")
    w("## Ölçüm uyarıları (ölçülemedi ≠ yok ≠ temiz)")
    w("- **1000–1200 boyayan sayısı neredeyse sıfır** (bkz. tablo): girdi evreninde 1281 öncesi sahiplik "
      "dönemi yalnız birkaç düzine kayıtta yazılı. `data/yer_yama_once1281_z6.js` (1000–1281 sahiplik ÖNERİSİ) girdi listesinde "
      "değil ⇒ bu ölçüm onu SAYMAZ. Önce-1281 hücre sayıları \"yoğunluk\" değil \"sahiplik verisi "
      "yok\" demektir; sahnede sütunu yerleşim noktalarının varlığını ayrıca gösterir.")
    w("- Ad katlaması kayıplıdır: `Küba`→`kuba` atlastaki `Kuba`ya (Azerbaycan) düşer; `ad_esanlam.js` "
      "`belirsiz` listesi dışındaki çarpışmalar ÖLÇÜLMEDİ. Metin taraması sezgiseldir (kesme eki, büyük "
      "harf, kişi/unvan süzgeci); son sütun bir ÜST SINIR değil, kurallara bağlı bir tahmindir.")
    w("- Çözülmeyen şehir listesinde İstanbul semtleri (Topkapı, Bâbıâli, Kâğıthane…) ve bölge adları "
      "(süzgeçten kaçanlar) da var — liste insan gözüyle ayıklanmalı; araç sınıflandırmayı "
      "`arac/yer_esanlam.json` `bolge_adlari`/`bolge_ek_1014` ile yapar, liste genişletilebilir.")
    w("- Kıta ataması modern ülke poligonuyla; `Seven seas (open ocean)` kovası küçük okyanus "
      "adalarıdır.")
    with io.open(os.path.join(CIKTI, "RAPOR.md"), "w", encoding="utf-8", newline="\n") as f:
        f.write("\n".join(L) + "\n")


if __name__ == "__main__":
    try:
        sys.exit(main())
    except SystemExit:
        raise
    except Exception as e:                       # ölçülemedi ≠ temiz
        import traceback
        traceback.print_exc()
        print("ÖLÇÜLEMEDİ: %s" % e)
        sys.exit(2)
