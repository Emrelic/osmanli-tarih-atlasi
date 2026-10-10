# -*- coding: utf-8 -*-
"""ARAC-CELISKI-ICKAYNAK-1010 — "KAYNAK DOĞRU, VERİ KAYNAĞI İZLEMİYOR" ADAY ÜRETİCİSİ.

🔴 BU BİR KAPI DEĞİLDİR. `denetle.py`ye BAĞLANMAZ, tavan yazmaz, çıkış kodu
   hüküm taşımaz (0 = koştu). Ürettiği şey LİSTEDİR; hükmü KASA verir.
   Motor tuzu dosyaları (girdi · gun · renkler) YALNIZ İTHAL edilir.

ÜÇ YÜKLEM (koordinatör düzeltmesi, 10 Ekim 2026 — sıralamayı ④ ve B yapar)
  ④ ENGEL  Not bir ENGEL anıyor (künye/kimlik yok · eksik_kimlik · boya/renk
           yok) ve o engel BUGÜN kalkmış: adı geçen kimlik devletler.js'te VAR,
           renkler.BOYALAR'da boyası VAR, ve kayıt onu HİÇBİR döneminde
           kullanmıyor  ⇒  ENGEL-KALKMIS (YÜKSEK).
           Kimlik metinden çıkarılamazsa ENGEL-OLCULEMEDI; çıkarılan `kimlik`
           bugün de yoksa ENGEL-DURUYOR; kayıt zaten kullanıyorsa
           ENGEL-DONULMUS (bilgi).
  B  ÖZ-İLAN  Kaydın kendi metni KENDİ dilimi hakkında hüküm veriyor mu
           (YANLIŞ · yazılmadı · dokunulmadı · kapsam dışı · ÇIKARIM ·
           yerleşim YOK · bulunamadı · DEĞİL/olmadı …)? Hüküm KAYDIN KENDİ
           d:/s:/v:/isg: kimliğine ya da KENDİ dönem tarihlerine bağlanırsa
           OZ-ILAN-ISABET (YÜKSEK); başka devlet hakkındaysa ELENİR; bağ
           kurulamazsa OZ-ILAN-OLCULEMEDI.
  A  YIL-İÇ   (kaba evren, ayrı sütun) metindeki Y yılı bir P dönemine
           yf+1 < Y < yt-1 ile düşüyor. Sınıf: YALNIZ-A (ORTA). "Cümlede başka
           devlet anılıyor" ölçütü ÖLDÜ (KASA: 40 yabancı dilimde 0 isabet) —
           yalnız BİLGİ sütunu (`a_anilan_yabanci`).

Kullanım
   py ARAC-CELISKI-ICKAYNAK-1010.py [--kok <depo>] [--json <yol>] [--c2-kapali] [--ozet]
"""
import argparse
import contextlib
import importlib.util
import io
import json
import os
import re
import sys

BURASI = os.path.dirname(os.path.abspath(__file__))

KAYIT_METIN_ALANLARI = ("kaynak", "not", "neden", "devir_beyani")
DONEM_KATMANLARI = ("s", "d", "v", "isg")
DONEM_METIN_ALANI = "kaynak"
OSMANLI = "OSMANLI"            # d: katmanının örtük sahibi (devletler.js'te künyesi yok)
BOSLUK = "__BOSLUK__"
YIL_ALT, YIL_UST = 1000, 1945  # girdi.UFUK kuşağı


def _yukle_modul(ad, yol):
    spec = importlib.util.spec_from_file_location(ad, yol)
    m = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(m)
    return m


def ortam(kok):
    """girdi, gun, renkler ve normalleştiriciyi YALNIZ İTHAL eder."""
    sys.path.insert(0, os.path.join(kok, "arac"))
    import girdi  # noqa
    import gun    # noqa
    with contextlib.redirect_stdout(io.StringIO()):   # renkler içe alınırken uyarı basar
        import renkler  # noqa
    nrm = _yukle_modul("arac_normal_0903",
                       os.path.join(kok, "denetim", "ARAC-NORMAL-0903.py"))
    return girdi, gun, renkler, nrm.norm


# ═══ ① YIL ÇIKARIMI ═══════════════════════════════════════════════════════
APOS = str.maketrans({"’": "'", "‘": "'", "`": "'", "´": "'", "–": "-"})
RX_HICRI_PAR = re.compile(r"(?<![\d.,])(\d{2,4})(?:'[^\s()]*)?\s*\(\s*(\d{3,4})(?:\s*-\s*\d{2,4})?\s*\)")
RX_HICRI_BOLU = re.compile(r"(?<![\d.,/])(\d{2,4})\s*/\s*(\d{4})(?![\d.,/])")
RX_PAR = re.compile(r"\(([^()]*)\)")
RX_PAR_YALNIZ_YIL = re.compile(
    r"^\s*\d{3,4}[a-z]?(?:\s*[-/]\s*\d{2,4}[a-z]?)?"
    r"(?:\s*[,:]\s*(?:s|ss|c|cilt|p|pp|vol)\.?\s*[\dIVXLC\-, ]+)?\s*$", re.I)
RX_YUZYIL = re.compile(r"\b([IVXLC]+|\d{1,2})\s*\.?\s*(?:yüzyıl|yy|asır|asr)\w*", re.I)
RX_GURULTU = [
    ("sayfa/cilt", re.compile(r"\b(?:s|ss|sayfa|c|cilt|vol|no|nr|sayı|p|pp|fol|vr|tab)\.\s*\d[\d\-, ]*", re.I)),
    ("yüzyıl", RX_YUZYIL),
    ("MÖ", re.compile(r"\bM\.?\s*Ö\.?\s*\d+|\d+\s*M\.?\s*Ö\b|\bBC\s*\d+|\d+\s*BC\b", re.I)),
    ("ölçü birimi", re.compile(r"\d[\d.,]*\s*(?:km²|km2|km|m²|metre|mil|kişi|nokta|kayıt|kalem|madde|dönem|adet|bayt|MB|GB|token)\b", re.I)),
    ("kod/kimlik", re.compile(r"[A-Za-zÇĞİÖŞÜçğıöşü]+[-_./#]?\d{3,}[\w\-]*|\b\d{3,4}[-_/][A-Za-zÇĞİÖŞÜçğıöşü][\w\-]*")),
    ("ondalık/koordinat", re.compile(r"\d+[.,]\d+(?:[.,]\d+)*")),
    ("saat", re.compile(r"\b\d{1,2}:\d{2}\b")),
]
RX_ARALIK = re.compile(r"(?<![\d.,])(\d{4})\s*[-–]\s*(\d{2,4})(?![\d.,])")
RX_ISO = re.compile(r"(?<![\d.,])(\d{4})-(\d{2})(?:-(\d{2}))?(?![\d])")
RX_YIL = re.compile(r"(?<![\d.,])(\d{4})(?![\d])")
ROMA = {"I": 1, "V": 5, "X": 10, "L": 50, "C": 100}


def _roma(s):
    t, onceki = 0, 0
    for ch in reversed(s.upper()):
        v = ROMA.get(ch, 0)
        t = t - v if v < onceki else t + v
        onceki = max(onceki, v)
    return t


def tarih_refleri(metin, c2=True, gunluk=None, yuzyil=False):
    """Metin → [(a, b, biçim, konum)] yıl aralıkları (tek yıl a==b).
    hicrî(miladî) → miladî korunur · C2: hicrîsiz parantezli yıl ATILIR ·
    sayfa/cilt/ölçü/kod/ondalık/saat atılır · yüzyıl ifadesi A'da ATILIR,
    yuzyil=True iken (B'nin tarih eşlemesi) [100(n-1)+1, 100n] aralığı olur ·
    kuşak (1000-1945) dışı atılır."""
    if gunluk is None:
        gunluk = []
    s = metin.translate(APOS)
    maske = list(s)
    out = []

    def kapat(a, b):
        for i in range(a, b):
            maske[i] = " "

    def cur():
        return "".join(maske)

    for m in RX_HICRI_PAR.finditer(s):
        h, y = int(m.group(1)), int(m.group(2))
        if 500 <= y - h <= 660 or (h < 1000 <= y):
            out.append((y, y, "hicri(miladi)", m.start()))
            gunluk.append(("hicrî yıl atıldı", m.group(0)))
            kapat(m.start(), m.end())
    for m in RX_HICRI_BOLU.finditer(cur()):
        h, y = int(m.group(1)), int(m.group(2))
        if 500 <= y - h <= 660:
            out.append((y, y, "hicri/miladi", m.start()))
            gunluk.append(("hicrî yıl atıldı", m.group(0)))
            kapat(m.start(), m.end())
    if c2:
        for m in RX_PAR.finditer(cur()):
            if RX_PAR_YALNIZ_YIL.match(m.group(1)):
                gunluk.append(("C2 parantezli yıl", m.group(0)))
                kapat(m.start(), m.end())
    if yuzyil:
        for m in RX_YUZYIL.finditer(cur()):
            g = m.group(1)
            n = int(g) if g.isdigit() else _roma(g)
            if 1 <= n <= 20:
                out.append((100 * (n - 1) + 1, 100 * n, "yuzyil", m.start()))
            kapat(m.start(), m.end())
    for sebep, rx in RX_GURULTU:
        for m in rx.finditer(cur()):
            gunluk.append((sebep, m.group(0)))
            kapat(m.start(), m.end())
    for m in RX_ISO.finditer(cur()):
        y = int(m.group(1))
        out.append((y, y, "iso", m.start()))
        kapat(m.start(), m.end())
    for m in RX_ARALIK.finditer(cur()):
        a, b = m.group(1), m.group(2)
        ya = int(a)
        yb = int(b) if len(b) == 4 else int(a[:4 - len(b)] + b)
        if yb >= ya:
            out.append((ya, yb, "aralik", m.start()))
        else:
            out.append((ya, ya, "yil", m.start()))
        kapat(m.start(), m.end())
    for m in RX_YIL.finditer(cur()):
        y = int(m.group(1))
        out.append((y, y, "yil", m.start()))
    son = []
    for a, b, bc, k in out:
        if b < YIL_ALT or a > YIL_UST:
            gunluk.append(("kuşak dışı", "%d-%d" % (a, b)))
            continue
        son.append((max(a, YIL_ALT), min(b, YIL_UST), bc, k))
    son.sort(key=lambda x: x[3])
    return son


def yillari_cikar(metin, c2=True, gunluk=None):
    """A yüklemi için: tek yıllar (aralığın İKİ ucu ayrı yıl)."""
    out = []
    for a, b, bc, _ in tarih_refleri(metin, c2=c2, gunluk=gunluk):
        out.append((a, bc))
        if b != a:
            out.append((b, bc))
    return out


# ═══ ② CÜMLE / PARÇA BÖLME ═══════════════════════════════════════════════
KISALTMA = {"s", "ss", "c", "vb", "bkz", "yy", "no", "nr", "vol", "p", "pp",
            "st", "dr", "prof", "doç", "hz", "ö", "m", "h", "mö", "ms", "bk", "md"}
RX_AYRAC_A = re.compile(r"\s*(?:·|;|\||‖|\n| — | -- )\s*")
RX_AYRAC_B = re.compile(r"\s*(?:·|;|\||‖|\n)\s*")    # B: " — " BÖLMEZ (Hama/Malta vakası)


def _nokta_bol(p):
    out, bas = [], 0
    for m in re.finditer(r"[.!?]\s+(?=[\"'(`]?[A-ZÇĞİÖŞÜÂÎÛ_])", p):
        onceki = re.findall(r"[\wÇĞİÖŞÜçğıöşüâîû]+$", p[:m.start()])
        w = onceki[0] if onceki else ""
        if (w.lower() in KISALTMA or len(w) == 1 or re.fullmatch(r"[IVXLC]+", w)
                or (w.isdigit() and len(w) <= 2)):
            continue
        out.append(p[bas:m.start() + 1].strip())
        bas = m.end()
    out.append(p[bas:].strip())
    return out


def cumleler(metin, ayrac=RX_AYRAC_A):
    s = metin.translate(APOS)
    parcalar = []
    for p in ayrac.split(s):
        parcalar.extend(_nokta_bol(p))
    return [c for c in parcalar if c]


# ═══ ③ DEVLET ADI SÖZLÜĞÜ ═════════════════════════════════════════════════
GENEL = {
    "kralligi", "krallik", "krallari", "kralliklari", "taci", "cumhuriyeti",
    "cumhuriyet", "sultanligi", "sultanliklari", "sultanlik", "devleti", "devletleri",
    "hanedani", "imparatorlugu", "emirligi", "emirlikleri", "konfederasyonu", "hanligi",
    "prensligi", "prenslikleri", "dukaligi", "beyligi", "beylikleri", "kontlugu",
    "knezligi", "protektorasi", "mandasi", "hukumeti", "atabegligi", "birligi",
    "idaresi", "kolonisi", "saltanati", "donemi", "oncesi", "kolu", "halklari",
    "genel", "valiligi", "eyaleti", "eyaletleri", "vilayeti", "sancagi", "despotlugu",
    "imamligi", "seyhligi", "hanedanligi", "markizligi", "ve", "i", "ii", "iii", "iv",
    "dahil", "ile", "doneminde", "sonrasi", "bolgesi", "topraklari", "sehir", "serbest",
    "demokratik", "birlesik", "yonetimi", "ordusu", "isgali", "bolgesel", "yerel",
    "kabileleri", "kabilesi", "konfederasyon", "hakimiyeti", "yonetim", "idare",
    "sirketi", "kumpanyasi", "da", "de", "nda", "nde", "kurulus",
    "devlet", "devletler", "imparatorluk", "hanlik", "emirlik", "beylik", "prenslik",
    "knezlik", "dukalik", "hanedan", "tarikat", "cumhuriyetler", "krallik",
}
TEK_SOZ_YASAK = {
    "kuzey", "guney", "dogu", "bati", "orta", "buyuk", "kucuk", "yeni", "eski", "halk",
    "ust", "alt", "ic", "dis", "kara", "ak", "beni", "ibn", "seyh", "imam", "ada",
    "adalar", "kabile", "afrika", "asya", "avrupa", "amerika", "anadolu", "rumeli",
    "hint", "arap", "turk", "islam", "latin", "katolik", "frank", "tatar", "mogol",
    "sehri", "kalesi", "vadisi", "adasi", "gecici", "milli", "sovyet", "federal",
    # sıfat/niteleyici — tek başına bir künye DEĞİL (ölçüldü: Cenne 'bağımsız' →
    # arnavutluk-bagimsiz/norvec · Ratanpur 'İngiliz' → yeni-zelanda)
    "bagimsiz", "ingiliz", "fransiz", "alman", "italyan", "ispanyol", "hollandali",
    "portekizli", "rus", "osmanli", "mustakil", "ozerk", "muttefik",
    # 10 Ekim ölçümü — bütün metinlerde en sık eşleşen alias'lar okundu, sözcük
    # anlamı baskın olanlar atıldı: Kasım (ay) 95 · birlik 128 · ikinci 79 ·
    # kıyı 55 · doğrudan 54 · naiplik 37 · ordu 38 · sancak 12 · Kars↔karşı 102
    "birlik", "kasim", "ikinci", "birinci", "ucuncu", "kiyi", "dogrudan", "naiplik",
    "ordu", "sancak", "kars", "sili", "mali", "hacli",
}
# Türkçe çekim/yapım eki (normalleştirilmiş): kesmeli her ek · -lı/-lu/-lar/-ler
# (Aragonlular, Memlükler) · -ya/-ye/-yı (Sicilya'yı yazımsız) · -nın · -da/-dan ·
# -ca · tek ünlü. Ek DIŞINDA bir harfle devam eden sözcük alias DEĞİLDİR
# (Kazan↔kazandı · Şili↔silindi · Mora↔moral).
EK = (r"(?:'[a-z]*|l[iuae][a-z]*|y[aeiu][a-z]*|n[iu]n[a-z]*|d[ae][a-z]*|t[ae][a-z]*|"
      r"[ck][ae][a-z]*|s[iu][a-z]*|[iuae])?(?![a-z])")
RX_AD_BOL = re.compile(r"\s*(?:/|\(|\)|→|·|,| — | - |;| veya | ya da )\s*")


def _alias_norm(s, norm):
    a = " ".join(w for w in re.split(r"[\s\-_]+", norm(s)) if w)
    return re.sub(r"[^a-z0-9 ]", "", a).strip()


class Sozluk:
    """Güçlü alias: künye `ad` parçaları (unvan sözcükleri atılmış) + `id` +
    `harita` (tire→boşluk) + elle OSMANLI. Zayıf alias (YALNIZ ENGEL'de):
    çok sözcüklü adların ≥5 harfli tek sözcükleri."""

    def __init__(self, devletler, norm):
        self.norm = norm
        self.kunye = {d["id"]: d for d in devletler}
        self.harita = {d["id"]: d.get("harita") or d["id"] for d in devletler}
        guclu, zayif = {}, {}

        def ekle(tablo, alias, kid):
            a = _alias_norm(alias, norm)
            sozler = [w for w in a.split() if w not in GENEL]
            if not sozler:
                return
            a = " ".join(sozler)
            if len(sozler) == 1 and (len(a) < 4 or a in TEK_SOZ_YASAK or a.isdigit()):
                return
            tablo.setdefault(a, set()).add(kid)

        for d in devletler:
            for parca in RX_AD_BOL.split(d.get("ad") or ""):
                if parca:
                    ekle(guclu, parca, d["id"])
                    sozler = [w for w in _alias_norm(parca, norm).split()
                              if w not in GENEL]
                    if len(sozler) > 1:
                        for w in sozler:
                            if len(w) >= 5 and w not in TEK_SOZ_YASAK:
                                zayif.setdefault(w, set()).add(d["id"])
            ekle(guclu, d["id"], d["id"])
            if d.get("harita"):
                ekle(guclu, d["harita"], d["id"])
        ekle(guclu, "Osmanlı", OSMANLI)
        self.guclu = guclu
        self.zayif = {k: v for k, v in zayif.items() if k not in guclu}
        self.rx_guclu = self._derle(guclu)
        self.rx_zayif = self._derle(self.zayif)

    @staticmethod
    def _derle(tablo):
        uzun = sorted([a for a in tablo if len(a) >= 5], key=len, reverse=True)
        kisa = sorted([a for a in tablo if len(a) < 5], key=len, reverse=True)
        par = []
        if uzun:
            par.append("(?P<u>" + "|".join(re.escape(a) for a in uzun) + ")" + EK)
        if kisa:
            par.append("(?P<k>" + "|".join(re.escape(a) for a in kisa) + ")(?:'[a-z]*)?(?![a-z])")
        return re.compile(r"(?<![a-z0-9])(?:" + "|".join(par) + ")")

    def kanon(self, kid):
        return self.harita.get(kid, kid)

    def bul(self, metin, zayif=False):
        """→ [(alias, metinde, {künye id}, konum_norm)] — konum NORMALLEŞTİRİLMİŞ
        metinde (yalnız aynı uzayda kıyaslanır; NFKD '…'yu uzatır)."""
        n = self.norm(metin)
        tablo, rx = (self.zayif, self.rx_zayif) if zayif else (self.guclu, self.rx_guclu)
        out = []
        for m in rx.finditer(n):
            a = m.group("u") if m.groupdict().get("u") else m.group("k")
            out.append((a, m.group(0), tablo[a], m.start()))
        return out


# ═══ ④ DÖNEM VE SAHİP ═════════════════════════════════════════════════════
def donemler(y, sz, gun):
    out = []
    for kat in DONEM_KATMANLARI:
        for i, p in enumerate(y.get(kat) or []):
            try:
                yf = gun.yil(gun.gun(p["f"]))
                yt = gun.yil(gun.gun(p["t"]))
            except (KeyError, ValueError, TypeError):
                continue
            if kat == "d":
                d, sahip = OSMANLI, {OSMANLI}
            elif kat == "v":
                d = p.get("kid") or p.get("k") or "?"
                sahip = {OSMANLI} | ({sz.kanon(p["kid"])} if p.get("kid") else set())
            else:
                d = p.get("d")
                sahip = {sz.kanon(d)}
            out.append({"alan": kat, "i": i, "d": d, "f": p["f"], "t": p["t"],
                        "yf": yf, "yt": yt, "sahip": sahip, "metin": p.get(DONEM_METIN_ALANI)})
    return out


def icinde(Y, P):
    """A: yf + 1 < Y < yt - 1."""
    return P["yf"] + 1 < Y < P["yt"] - 1


def aralik_eslesir(a, b, P):
    """B: aralık P'nin iki ucuyla ±1 örtüşüyor, YA DA P'nin iç kuşağına
    [yf+2, yt-2] en az bir yıl değiyor."""
    if abs(a - P["yf"]) <= 1 and abs(b - P["yt"]) <= 1 and (
            b > a or (a == P["yf"] == P["yt"])):
        # tek yıl ancak TEK YILLIK dönemin kendisiyse "uçlar" sayılır (ölçüldü:
        # Petseri 1918 → rusya-gecici-hukumet 1917-1917 sahte isabeti)
        return "uclar"
    if max(a, P["yf"] + 2) <= min(b, P["yt"] - 2):
        return "ic"
    return None


def metinler(y, D):
    for a in KAYIT_METIN_ALANLARI:
        v = y.get(a)
        if isinstance(v, str) and v.strip():
            yield a, v, None
    for P in D:
        if isinstance(P["metin"], str) and P["metin"].strip():
            yield "%s[%d].%s" % (P["alan"], P["i"], DONEM_METIN_ALANI), P["metin"], P


# ═══ ⑤ B — ÖZ-İLAN ═════════════════════════════════════════════════════════
B_ANAHTAR = [
    ("YANLIS", r"yanl[iı][sş]\w*"),
    ("BOSLUK", r"yaz[iı]lmad[iı]\w*|dokunulmad[iı]\w*|uygulanmad[iı]\w*|kodlanmad[iı]\w*|"
               r"kapsam\s+d[iı][sş][iı]\w*|a[cç][iı]k\s+bor[cç]\w*"),
    ("BELIRSIZ", r"[cç][iı]kar[iı]m\w*|bulunamad[iı]\w*|do[gğ]rulanamad[iı]\w*|"
                 r"yerle[sş]im\s+yok\w*|dayana[gğ][iı]\s+yok"),
    ("NEG", r"de[gğ]il\w*|olmad[iı]\w*"),
]
RX_B = re.compile("|".join("(?P<%s>%s)" % (k, v) for k, v in B_ANAHTAR), re.I)
# hassasiyet itirafı — dilimin SAHİBİ hakkında değil, gün/ay hakkında
RX_HASSASIYET = re.compile(
    r"(?:\bg[uü]n[uü]?|\bay[iı]?|\btarih[iı]?|\bkurulu[sş]\s+y[iı]l[iı]|\by[iı]l[iı]|"
    r"\bba[sş]lang[iı][cç]\s+g[uü]n[uü]|\bbiti[sş]\s+g[uü]n[uü])\s*(?:\w+\s+){0,1}$", re.I)
RX_ESKI = re.compile(r"\beski\s+(?:[ft]\b|\S*\d)", re.I)


def _kimlik_ref(pencere, sz, D, kayit_kimlikleri):
    """Penceredeki devlet referansları: güçlü alias + tırnaklı/ters tırnaklı
    çıplak kimlik. → [(kanon_set, metinde, konum)]."""
    out = []
    for a, g, kids, k in sz.bul(pencere):
        out.append(({sz.kanon(x) for x in kids}, g, k))
    for m in re.finditer(r"[`'\"]([a-z0-9][a-z0-9\-]{2,})[`'\"]", pencere):
        kid = m.group(1)
        if kid in sz.kunye or kid in kayit_kimlikleri:
            out.append(({sz.kanon(kid)}, m.group(0), m.start()))
    return out


def b_tara(y, D, sz, c2=True):
    bulgular = []
    kayit_kimlikleri = {P["d"] for P in D}
    for alan, metin, kendi in metinler(y, D):
        for parca in cumleler(metin, RX_AYRAC_B):
            onceki_son = 0
            for m in RX_B.finditer(parca):
                tur = m.lastgroup
                pencere = parca[onceki_son:m.start()]
                onceki_son = m.end()
                if tur == "BELIRSIZ" and RX_HASSASIYET.search(pencere):
                    continue                      # "gün BULUNAMADI" — hassasiyet itirafı
                tarihler = tarih_refleri(pencere, c2=c2, yuzyil=True)
                if not tarihler and tur in ("BELIRSIZ", "BOSLUK"):
                    # tarih anahtarın ARDINDA da olabilir ("BULUNAMADI: 1362")
                    arka = re.split(r"[,(·]", parca[m.end():], maxsplit=1)[0]
                    tarihler = tarih_refleri(arka, c2=c2, yuzyil=True)
                kimlikler = _kimlik_ref(pencere, sz, D, kayit_kimlikleri)
                if tur == "NEG":
                    # yalnız anahtarın HEMEN önündeki kimlik ("X DEĞİL")
                    kimlikler = [x for x in kimlikler if len(sz.norm(pencere)) - x[2] - len(x[1]) <= 3]
                eski = bool(RX_ESKI.search(pencere[-60:]))
                hedef, gerekce, sonuc = [], [], None
                if eski:
                    sonuc, gerekce = "ELENDI", ["'eski <değer>' — geçmiş düzeltmenin anlatısı"]
                else:
                    for P in D:
                        t_es = [(a, b) for a, b, _, _ in tarihler if aralik_eslesir(a, b, P)]
                        k_sahip = [g for ks, g, _ in kimlikler if ks & P["sahip"]]
                        if tur == "NEG":
                            # "X DEĞİL": X P'nin sahibi VE (tarih yok ya da tarih P'de)
                            if k_sahip and (t_es or not tarihler):
                                hedef.append((P, "kimlik+tarih" if t_es else "kimlik(tarihsiz)"))
                        elif tur == "YANLIS":
                            if k_sahip and (t_es or not tarihler):
                                hedef.append((P, "kimlik+tarih" if t_es else "kimlik(tarihsiz)"))
                            elif any(aralik_eslesir(a, b, P) == "uclar" for a, b in t_es):
                                hedef.append((P, "tarih-uclar"))
                        else:   # BOSLUK / BELIRSIZ: hüküm dilimin İÇİNE ya da uçlarına
                            if t_es:
                                hedef.append((P, "tarih"))
                            elif k_sahip and not tarihler:
                                hedef.append((P, "kimlik(tarihsiz)"))
                    # tarihsiz kimlik eşleşmesi tek başına İSABET değil
                    kesin = [(P, n) for P, n in hedef if "tarihsiz" not in n]
                    if kendi is not None and any(P is kendi for P, _ in kesin):
                        kesin = [(P, n) for P, n in kesin if P is kendi]
                    # beyanlı boşluk (__BOSLUK__) zaten belirsizliği UYGULAMIŞTIR
                    # (ölçüldü: Karakul "egemen BULUNAMADI" · Qitai "Yakub Bey'e itmek yanlış")
                    bos_hedef = [(P, n) for P, n in kesin if P["d"] == BOSLUK]
                    kesin = [(P, n) for P, n in kesin if P["d"] != BOSLUK]
                    if bos_hedef and not kesin:
                        sonuc, hedef = "ELENDI", bos_hedef
                        gerekce = ["hedef dilim zaten __BOSLUK__ (beyanlı)"]
                    elif kesin:
                        sonuc, hedef = "OZ-ILAN-ISABET", kesin
                    elif hedef:
                        if tur == "NEG" and len(hedef) > 1:
                            sonuc = "OZ-ILAN-OLCULEMEDI"
                            gerekce = ["kimlik birden çok dönemin sahibi, tarih yok"]
                        elif tur == "NEG":
                            sonuc = "OZ-ILAN-OLCULEMEDI"
                            gerekce = ["'X DEĞİL' — X kendi sahip, tarih yok"]
                        else:
                            sonuc = "OZ-ILAN-OLCULEMEDI"
                            gerekce = ["kendi kimliği anılıyor, tarih yok"]
                    elif kimlikler or tarihler:
                        sonuc = "ELENDI"
                        gerekce = ["hüküm başka devlet/tarih hakkında"]
                    else:
                        sonuc = "B-REFERANSSIZ"
                        gerekce = ["pencerede devlet ya da tarih yok"]
                guc = None
                if sonuc == "OZ-ILAN-ISABET":
                    # bulunamadı/doğrulanamadı = "kanıt yok" — çoğu kez veri ZATEN
                    # o yokluğa göre yazılmıştır (elle okundu, 10 örnekte ~yarısı)
                    guc = ("zayif" if re.match(r"(?i)bulunamad|do[gğ]rulanamad", m.group(0))
                           else "guclu")
                bulgular.append({
                    "yuklem": "B", "sinif": sonuc, "guc": guc, "anahtar_tur": tur,
                    "anahtar": m.group(0), "metin_alani": alan,
                    "metin_kendi_donemi": None if kendi is None else "%s[%d]" % (kendi["alan"], kendi["i"]),
                    "cumle": parca[:600], "pencere": pencere[-300:],
                    "tarihler": [(a, b) for a, b, _, _ in tarihler],
                    "kimlikler": [g for _, g, _ in kimlikler],
                    "hedef": [{"alan": P["alan"], "i": P["i"], "d": P["d"], "f": P["f"],
                               "t": P["t"], "nasil": n} for P, n in hedef],
                    "gerekce": gerekce,
                })
    return bulgular


# ═══ ⑥ ENGEL KALKMIŞ ═══════════════════════════════════════════════════════
RX_ENGEL = re.compile(
    r"(?:k[uü]nye\w*|kimli\w*|boya\w*|renk\w*)\s+(?:de\s+|da\s+)?(?:yok|eksik)\w*|"
    r"eksik_kimlik|kimli\w*\s+eksik|boyalar'?da\s+yok|"
    # "KUNYE+RENK BEKLIYOR — x/y devletler.js'e henuz UYGULANMADI" (Asvan vakası, ölçüldü)
    r"k[uü]nye\w*(?:\s*\+\s*renk\w*)?\s+bekl\w*|devletler\.js'?[ea]?\s+hen[uü]z\s+\w+", re.I)


def _bos_yillar(D):
    kap = [(P["yf"], P["yt"]) for P in D if P["d"] != BOSLUK]
    out, y0 = [], YIL_ALT
    for a, b in sorted(kap):
        if a > y0:
            out.append((y0, a))
        y0 = max(y0, b)
    if y0 < YIL_UST:
        out.append((y0, YIL_UST))
    out += [(P["yf"], P["yt"]) for P in D if P["d"] == BOSLUK]
    return out


ENGEL_PENCERE = 140   # engelin öznesi anahtarın YAKININDA yazılır (ölçüldü: Kabartay vakası)
RX_KIMLIK_ENGEL = re.compile(r"[`'\"]([a-z][a-z0-9\-]{2,})[`'\"]\s*(?:k[uü]nye|kimli)", re.I)


def engel_tara(y, D, sz, boyalar, gun, c2=True):
    bulgular = []
    kayit_kanon = set()
    for P in D:
        kayit_kanon |= P["sahip"]
    for alan, metin, kendi in metinler(y, D):
        for parca in cumleler(metin, RX_AYRAC_B):
            onceki_son = 0
            son_engel = -10 ** 6
            for m in RX_ENGEL.finditer(parca):
                if m.start() - son_engel < ENGEL_PENCERE:
                    continue      # aynı engelin ikinci anahtarı (Asvan: "BEKLIYOR … henuz UYGULANMADI")
                son_engel = m.end()
                pencere = parca[max(onceki_son, m.start() - ENGEL_PENCERE):m.start()]
                # anahtar ÖZNEDEN ÖNCE de gelebilir ("KUNYE+RENK BEKLIYOR -- misir-sultanligi …")
                arka = (parca[m.end():m.end() + ENGEL_PENCERE]
                        if re.search(r"(?i)bekl", m.group(0)) else "")   # yalnız "BEKLIYOR" kalıbında
                onceki_son = m.end()
                engel_turu = "boya" if re.search(r"(?i)boya|renk", m.group(0)) else "kunye"
                # dilim: penceredeki tarih aralıkları > kendi dönemi > kaydın boş yılları
                tar = [(a, b) for a, b, _, _ in tarih_refleri(pencere, c2=c2, yuzyil=True)]
                araliklar = [(a, b) for a, b in tar if b > a]
                if araliklar:
                    dilim, dkaynak = araliklar, "metin"
                elif kendi is not None:
                    dilim, dkaynak = [(kendi["yf"], kendi["yt"])], "kendi-donem"
                else:
                    dilim, dkaynak = _bos_yillar(D), "kaydin-bos-yillari"
                adaylar = []
                kuyruk = pencere + m.group(0)
                # ① tırnaklı çıplak kimlik: künyede VARSA her yerde; YOKSA yalnız
                #    "`x` kimliği/künyesi" kalıbında (yoksa alan adları — `kur` — düşer)
                for t in re.finditer(r"[`'\"]([a-z][a-z0-9\-]{2,})[`'\"]", pencere):
                    if t.group(1) in sz.kunye:
                        adaylar.append(("kimlik", t.group(1), t.group(0)))
                # tırnaksız ama TİRELİ künye kimliği (misir-sultanligi) — kimliğin kendisi
                for t in re.finditer(r"(?<![\w\-])([a-z][a-z0-9]*(?:-[a-z0-9]+)+)(?![\w\-])", pencere + " " + arka):
                    if t.group(1) in sz.kunye:
                        adaylar.append(("kimlik", t.group(1), t.group(0)))
                for t in RX_KIMLIK_ENGEL.finditer(kuyruk):
                    if t.group(1) not in sz.kunye:
                        adaylar.append(("kimlik", t.group(1), t.group(0)))
                # ② güçlü alias · ③ zayıf alias YALNIZ ① ve ② boşsa
                for a, g, kids, _ in sz.bul(pencere):
                    sahipli = [k for k in kids if sz.kanon(k) in kayit_kanon]
                    for k in (sahipli[:1] or kids):     # alias kayıtta sahipse grup SAHİPTİR
                        adaylar.append(("guclu", k, g))
                if not [1 for _, k, _ in adaylar if sz.kanon(k) not in kayit_kanon]:
                    for a, g, kids, _ in sz.bul(pencere, zayif=True):
                        for k in kids:
                            adaylar.append(("zayif", k, g))
                sonuc_k = []
                for tur, kid, g in adaylar:
                    if kid == OSMANLI:
                        continue
                    var = kid in sz.kunye
                    if tur == "kimlik" and not var:
                        if kid in kayit_kanon or kid in {P["d"] for P in D}:
                            continue      # tırnaklı kendi sahibi ('almanya')
                        sonuc_k.append({"kimlik": kid, "metinde": g, "yol": tur,
                                        "durum": "ENGEL-DURUYOR", "neden": "kimlik devletler.js'te YOK"})
                        continue
                    if not var:
                        continue
                    kan = sz.kanon(kid)
                    d = sz.kunye[kid]
                    try:
                        kf, kt = gun.yil(gun.gun(d["f"])), gun.yil(gun.gun(d["t"]))
                    except (KeyError, ValueError, TypeError):
                        continue
                    if kan in kayit_kanon or kid in kayit_kanon:
                        if tur == "kimlik" or tur == "guclu":
                            sonuc_k.append({"kimlik": kid, "metinde": g, "yol": tur,
                                            "durum": "ENGEL-DONULMUS",
                                            "neden": "kayıt bu kimliği zaten kullanıyor"})
                        continue
                    if tur in ("kimlik", "guclu"):
                        # künye ömrü dilime en az 2 yıl değmeli
                        uyar = any(min(b, kt) - max(a, kf) >= 2 for a, b in dilim)
                    else:
                        # zayıf (tek sözcük) eşleşme: dilim METİNDEN gelmeli ve künye
                        # ömrünün İKİ ucu dilimin iki ucuna ±1 (Königsberg: teuton 1281-1525)
                        uyar = dkaynak == "metin" and any(
                            abs(kf - a) <= 1 and abs(kt - b) <= 1 for a, b in dilim)
                    if not uyar:
                        continue
                    boya = bool(kid in boyalar or (d.get("harita") in boyalar))
                    # engelin TÜRÜ anahtardan: künye/kimlik engeli künye VARSA kalkar;
                    # boya/renk engeli BOYA VARSA kalkar. Öteki engel AYRI sütun.
                    if engel_turu == "boya":
                        kalkti = boya
                    else:
                        kalkti = True
                    sonuc_k.append({"kimlik": kid, "metinde": g, "yol": tur,
                                    "kunye": "%s → %s" % (d["f"], d["t"]),
                                    "boya": boya,
                                    "durum": "ENGEL-KALKMIS" if kalkti else "ENGEL-YARIM",
                                    "ikinci_engel": None if boya else "BOYA YOK (renkler.BOYALAR'da yok — yazılırsa harita deliği)",
                                    "neden": ("künye VAR + kayıt kullanmıyor" if engel_turu != "boya"
                                              else ("boya VAR" if boya else "boya hâlâ YOK"))})
                # tekilleştir
                gor, tek = set(), []
                for x in sonuc_k:
                    if x["kimlik"] not in gor:
                        gor.add(x["kimlik"])
                        tek.append(x)
                durumlar = {x["durum"] for x in tek}
                if "ENGEL-KALKMIS" in durumlar:
                    sinif = "ENGEL-KALKMIS"
                elif "ENGEL-YARIM" in durumlar:
                    sinif = "ENGEL-YARIM"
                elif "ENGEL-DURUYOR" in durumlar:
                    sinif = "ENGEL-DURUYOR"
                elif "ENGEL-DONULMUS" in durumlar:
                    sinif = "ENGEL-DONULMUS"
                else:
                    sinif = "ENGEL-OLCULEMEDI"
                bulgular.append({
                    "yuklem": "ENGEL", "sinif": sinif, "anahtar": m.group(0),
                    "metin_alani": alan,
                    "metin_kendi_donemi": None if kendi is None else "%s[%d]" % (kendi["alan"], kendi["i"]),
                    "cumle": parca[:600], "pencere": pencere[-300:],
                    "dilim": dilim[:6], "dilim_kaynagi": dkaynak, "kimlikler": tek,
                })
    return bulgular


# ═══ ⑦ A — YIL-İÇ ══════════════════════════════════════════════════════════
def a_tara(y, D, sz, c2=True, sayac=None):
    adaylar = {}
    for alan, metin, kendi in metinler(y, D):
        sayac["metin"] = sayac.get("metin", 0) + 1
        for cumle in cumleler(metin):
            gl = []
            yillar = yillari_cikar(cumle, c2=c2, gunluk=gl)
            for sebep, _ in gl:
                sayac["atilan:" + sebep] = sayac.get("atilan:" + sebep, 0) + 1
            if not yillar:
                continue
            anilan = sz.bul(cumle)
            for Y in sorted({yy for yy, _ in yillar}):
                sayac["yil"] = sayac.get("yil", 0) + 1
                kapsayan = set()
                for Q in D:
                    if Q["yf"] <= Y <= Q["yt"]:
                        kapsayan |= Q["sahip"]
                for P in D:
                    if not icinde(Y, P):
                        continue
                    yab = sorted({g for a, g, k, _ in anilan
                                  if not ({sz.kanon(x) for x in k} & (P["sahip"] | kapsayan))})
                    anahtar = (P["alan"], P["i"], Y)
                    k = {"yuklem": "A", "sinif": "YALNIZ-A", "metin_alani": alan,
                         "metin_kendi_donemi": None if kendi is None else "%s[%d]" % (kendi["alan"], kendi["i"]),
                         "ayni_donem": kendi is P, "Y": Y, "cumle": cumle[:600],
                         "P": {"alan": P["alan"], "i": P["i"], "d": P["d"], "f": P["f"], "t": P["t"]},
                         "a_anilan_yabanci": yab}
                    if anahtar not in adaylar or (yab and not adaylar[anahtar]["a_anilan_yabanci"]):
                        adaylar[anahtar] = k
    return list(adaylar.values())


# ═══ ⑧ TARAMA ══════════════════════════════════════════════════════════════
YUKSEK = {"ENGEL-KALKMIS", "OZ-ILAN-ISABET"}


def tara(kayitlar, devletler, gun, norm, boyalar, c2=True):
    sz = Sozluk(devletler, norm)
    sayac = {}
    out = []
    for y in kayitlar:
        D = donemler(y, sz, gun)
        kim = {"dosya": y.get("_kaynak", "?"), "ad": y["ad"]}
        A = a_tara(y, D, sz, c2=c2, sayac=sayac)
        B = b_tara(y, D, sz, c2=c2)
        E = engel_tara(y, D, sz, boyalar, gun, c2=c2)
        b_hedef = {(h["alan"], h["i"]) for b in B if b["sinif"] == "OZ-ILAN-ISABET" for h in b["hedef"]}
        for x in A:
            x["B_ayni_donemde_isabet"] = (x["P"]["alan"], x["P"]["i"]) in b_hedef
        for x in A + B + E:
            x.update(kim)
            x["yuksek"] = x["sinif"] in YUKSEK
            out.append(x)
    return out, sayac, sz


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--kok", default=os.path.dirname(BURASI))
    ap.add_argument("--json")
    ap.add_argument("--c2-kapali", action="store_true")
    ap.add_argument("--ozet", action="store_true")
    a = ap.parse_args()
    sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8", errors="replace")
    girdi, gun, renkler, norm = ortam(a.kok)
    Y = girdi.yukle(sessiz=True)
    Dv = girdi.oku_devletler()
    out, sayac, sz = tara(Y, Dv, gun, norm, renkler.BOYALAR, c2=not a.c2_kapali)
    from collections import Counter
    c = Counter((x["yuklem"], x["sinif"]) for x in out)
    print("evren: %d dosya (girdi.GIRDI_DOSYALARI, canlı) · %d kayıt · %d künye · "
          "%d güçlü + %d zayıf alias · BOYALAR %d"
          % (len(girdi.GIRDI_DOSYALARI), len(Y), len(Dv), len(sz.guclu), len(sz.zayif),
             len(renkler.BOYALAR)))
    print("C2:", "KAPALI" if a.c2_kapali else "açık")
    for k in sorted(c):
        print("  %-6s %-22s %d" % (k[0], k[1], c[k]))
    print("YÜKSEK toplam:", sum(1 for x in out if x["yuksek"]))
    if a.json:
        import subprocess
        try:
            taban = subprocess.run(["git", "-C", a.kok, "rev-parse", "HEAD"], capture_output=True,
                                   text=True).stdout.strip()
        except OSError:
            taban = "olculemedi"
        sira = {"ENGEL-KALKMIS": 0, "OZ-ILAN-ISABET": 1, "ENGEL-YARIM": 2,
                "OZ-ILAN-OLCULEMEDI": 3, "ENGEL-OLCULEMEDI": 4, "ENGEL-DURUYOR": 5,
                "ENGEL-DONULMUS": 6, "YALNIZ-A": 7, "ELENDI": 8}
        govde = [x for x in out if x["sinif"] != "B-REFERANSSIZ"]
        govde.sort(key=lambda x: (sira.get(x["sinif"], 9), x.get("guc") == "zayif",
                                  x["dosya"], x["ad"]))
        for x in govde:      # şartnamenin istediği ortak alan adları
            x["alan"] = x["metin_alani"]
        with io.open(a.json, "w", encoding="utf-8") as f:
            json.dump({"arac": "ARAC-CELISKI-ICKAYNAK-1010", "kapi_degil": True,
                       "taban_commit": taban, "c2": not a.c2_kapali,
                       "evren": {"girdi_dosyasi": len(girdi.GIRDI_DOSYALARI), "kayit": len(Y),
                                 "kunye": len(Dv), "boya": len(renkler.BOYALAR)},
                       "sayac": sayac, "siniflar": {"%s/%s" % k: v for k, v in sorted(c.items())},
                       "yuksek": sum(1 for x in out if x["yuksek"]),
                       "not": "B-REFERANSSIZ gövdeleri yazılmadı (yalnız sayı); ELENDI denetlenebilsin diye duruyor",
                       "bulgular": govde}, f, ensure_ascii=False, indent=1, default=list)
        print("yazıldı:", a.json)
    if not a.ozet:
        for x in out:
            if x["yuksek"]:
                print(" ", x["sinif"], "|", x["ad"], "|", x.get("anahtar"), "|",
                      [h["d"] for h in x.get("hedef", [])] or
                      [k["kimlik"] for k in x.get("kimlikler", []) if isinstance(k, dict)])
    return 0


if __name__ == "__main__":
    sys.exit(main())
