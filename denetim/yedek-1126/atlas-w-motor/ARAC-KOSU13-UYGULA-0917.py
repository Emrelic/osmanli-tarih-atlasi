# -*- coding: utf-8 -*-
"""KOSU13-YAMA — HEDEFLİ UYGULAYICI. 17 Eylül 2026 · 1.MURAT M-4331 ("UYGULA ZAMANI").

    py denetim/ARAC-KOSU13-UYGULA-0917.py          KURU KOŞU
    py denetim/ARAC-KOSU13-UYGULA-0917.py --yaz    yaz

🔴 NİÇİN `_sahiplik_uygula.py --yaz` DEĞİL (ölçüldü, M-4333):
   o alet BÜTÜN data/yer_yama*.js dosyalarını uygular; bugünkü kuru koşusu
   56 İLGİSİZ kaydı indirecekti ve bunların ~30'u (Libya) 1.MURAT'ın bugünkü
   Karamanlı 1711-07-29 düzeltmesini bayat 1711-03-01 kopyalarıyla GERİ
   ALACAKTI (yer_yama_vassal_kid_0906.js 39 satır · barka_dogu8 8 satır).
   ⇒ Bu alet YALNIZ aşağıdaki kayıtlara dokunur; kayıt bulma ve dizi yazma
   yöntemi `_sahiplik_uygula.py`den birebir alındı (dizge/yorum maskesi,
   köşeli parantez dengesi, çok satırlı kayıt).

KARARLAR (1.MURAT M-4322 + M-4328 / Emre 17 Eyl):
   K1 A · K2 B · K3 (Salyan: başlangıç DOKUNULMAZ, bitiş 1735-03-21) · K4 B ·
   K5 Emre kuralı (Gümrü=Revan, Meşkin=Erdebil, Kotur BEKLER) · K6 bekler ·
   K7 Dubica DOKUNULMAZ · K8 Bosna 1908 gününe dokunulmaz (mevcut 1908-10-05) ·
   K9 uygulanmaz · K10 bekler · K11 B (1725-09-09).
ANCHOR: A6C veride İNMEMİŞ (ölçüldü: Tebriz 1725-08-04) ⇒ bugünkü günler
   kopyalanır (Tebriz 1725-08-04→1730-08-12 · antlaşma 1732-01-10 ·
   Nahçıvan t 1730-08-12). A6C inerken bağlılar AYNI günlerle taşınmalı.

Ayrıca: 1DUNYA-A #1 (Lüksemburg isg) · 1DUNYA-B A1-A9 (A10-A12 KARAR).
"""
import collections
import io
import json
import os
import re
import subprocess
import sys

sys.stdout.reconfigure(encoding="utf-8", errors="replace")
KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
os.chdir(KOK)
sys.path.insert(0, os.path.join(KOK, "arac"))
import girdi  # noqa: E402

YAZ = "--yaz" in sys.argv
VERI = os.path.join(KOK, "data")
SON = "1923-10-29"


def S(f, t, d, **ek):
    p = {"f": f, "t": t, "d": d}
    p.update(ek)
    return p


def W(f, t, **ek):
    p = {"f": f, "t": t}
    p.update(ek)
    return p


TEB = ("1725-08-04", "1730-08-12")
ERD = ("1723-11-10", "1732-01-10")
REV = ("1724-10-03", "1735-10-03")
NAH = ("1724-08-11", "1730-08-12")
ERB = ("1725-09-09", "1730-08-12")
KB = "Bilgili 2016 (Ermeni Araştırmaları 53)"

# ═══════════════════════════ KAYIT → İŞLEMLER ════════════════════════════
# ("s", eski_alt, yeni_alt) · ("s+", seg) · ("d~", eski_pen, yeni_pen) ·
# ("d+", pen) · ("v~", eski_pen, yeni_pen) · ("isg+", pen) · ("konum", lat, lon)
AV = [S("1699-01-26", "1918-11-11", "avusturya")]
SAF = [S("1501-07-01", "1736-03-08", "safevi")]
TAL = [S("1501-07-01", "1723-01-01", "safevi"), S("1723-01-01", "1732-09-02", "rusya"),
       S("1732-09-02", "1736-03-08", "safevi")]


def h2(on):
    return ("s", [S(on, "1723-09-23", "safevi"), S("1723-09-23", "1734-01-01", "rusya"),
                  S("1734-01-01", "1736-03-08", "safevi")], [S(on, "1736-03-08", "safevi")])


GIL = [S("1592-01-01", "1723-09-23", "safevi"), S("1723-09-23", "1734-01-01", "rusya"),
       S("1734-01-01", "1736-03-08", "safevi")]
RUS1917 = lambda a, b: [S(a, "1917-03-15", "rusya"), S("1917-03-15", "1917-11-07", "rusya-gecici-hukumet"),
                        S("1917-11-07", b, "transkafkasya")]

ISLEM = collections.OrderedDict([
    # ── A · Bosna (0057-SAVA; K7 Dubica DOKUNULMAZ; K8 1908 günü mevcut 10-05) ──
    ("Bosna Brod'u (Bosanski Brod)", ("B1", [
        ("s", AV, [S("1718-07-21", "1739-09-28", "avusturya"), S("1908-10-05", "1918-11-11", "avusturya")]),
        ("d~", W("1538-01-01", "1699-01-26"), W("1538-01-01", "1718-07-21")),
        ("d+", W("1739-09-28", "1908-10-05", kaynak="Karlofça metni ('Bred on the part of Bosnia … shall be drawn out') · TDV karlofca · TDV bosna-hersek (1718 Sava şeridi · 1739 iade) · TDV mahmud-i--osmanli (28 Eylül 1739) · 1908 günü mevcut Bosna kayıtlarıyla aynı (K8 ayrı kalem)")),
    ])),
    ("Bosna Novi'si (Bosanski Novi)", ("B3", [
        ("s", AV, [S("1908-10-05", "1918-11-11", "avusturya")]),
        ("d~", W("1556-01-01", "1699-01-26"), W("1556-01-01", "1908-10-05",
                                                 kaynak="Karlofça metni ('Novi … on the part of Bosnia') · TDV karlofca · TDV bosna-hersek (Novi kadısı Ömer Efendi · 1872 demiryolu) · 1908 günü K8'e bağlı")),
    ])),
    ("Kostayniçe (Kostajnica)", ("B4", [("konum", 45.232, 16.539)])),
    # ── B · Rus yanı ──
    ("Derbend", ("R1 K1-A", [
        ("s", [S("1509-01-01", "1722-08-23", "safevi"), S("1722-08-23", "1735-03-10", "rusya"),
               S("1735-03-10", "1736-03-08", "safevi")],
         [S("1509-01-01", "1722-09-03", "safevi"), S("1722-09-03", "1735-03-21", "rusya"),
          S("1735-03-21", "1736-03-08", "safevi")]),
    ])),
    ("Bakü", ("R2 K1-A + 1DUNYA-B A8", [
        ("s", [S("1501-07-01", "1723-07-26", "safevi"), S("1723-07-26", "1735-03-10", "rusya"),
               S("1735-03-10", "1736-03-08", "safevi")],
         [S("1501-07-01", "1723-08-06", "safevi"), S("1723-08-06", "1735-03-21", "rusya"),
          S("1735-03-21", "1736-03-08", "safevi")]),
        ("s", [S("1917-11-07", SON, "sovyet-rusya")],
         [S("1917-11-07", "1918-09-15", "sovyet-rusya"),
          S("1918-09-15", "1920-04-27", "azerbaycan-demokratik-cumhuriyeti"),
          S("1920-04-27", SON, "sovyet-rusya")]),
    ])),
    ("Ağraham burnu", ("R4 K2-B", [
        ("s", SAF, [S("1501-07-01", "1722-08-08", "safevi"), S("1722-08-08", "1735-08-23", "rusya"),
                    S("1735-08-23", "1736-03-08", "safevi")]),
    ])),
    ("Lenkeran", ("R5", [("s", SAF, TAL)])),
    ("Astara", ("R6", [("s", SAF, TAL)])),
    ("Salyan", ("R7 K3", [
        ("s", [S("1538-01-01", "1723-09-23", "safevi"), S("1723-09-23", "1732-01-21", "rusya"),
               S("1732-01-21", "1736-03-08", "safevi")],
         [S("1538-01-01", "1723-09-23", "safevi"), S("1723-09-23", "1735-03-21", "rusya"),
          S("1735-03-21", "1736-03-08", "safevi")]),
    ])),
    ("Reşt", ("R10", [("s", SAF, TAL)])),
    ("Sârî", ("R11", [h2("1596-01-01")])),
    ("Âmül", ("R12", [h2("1596-01-01")])),
    ("Bârfurûş (Bâbil)", ("R13", [h2("1596-01-01")])),
    ("Ferahâbâd", ("R14", [h2("1611-01-01")])),
    ("Eşref (Behşehr)", ("R15", [h2("1596-01-01")])),
    ("Esterâbâd (Gürgân)", ("R16", [h2("1510-12-02")])),
    ("Lâhîcan", ("R17", [("s", GIL, [S("1592-01-01", "1725-01-01", "safevi"), S("1725-01-01", "1732-09-02", "rusya"),
                                     S("1732-09-02", "1736-03-08", "safevi")])])),
    ("Bender Enzeli", ("R18", [("s", GIL, [S("1592-01-01", "1723-01-01", "safevi"), S("1723-01-01", "1732-09-02", "rusya"),
                                           S("1732-09-02", "1736-03-08", "safevi")])])),
    # ── C/D · Osmanlı anahtarları ve bağlıları ──
    ("Revan", ("O1", [("d~", W("1724-09-28", "1735-06-19"),
                       W(*REV, kaynak=KB + " s.107 (3 Ekim 1724, BOA MD 132) · TDV nadir-sah--iran (3 Ekim 1735)"))])),
    ("Eçmiyadzin", ("O2", [("d+", W(*REV, kaynak=KB + " s.107 (TD 901 Karpi nahiyesi) · gün komşudan: Revan"))])),
    ("Şerur (Sharur)", ("O3", [("d+", W(*REV, kaynak=KB + " s.107 (TD 901 Şerür nahiyesi) · gün komşudan: Revan"))])),
    ("Mâku", ("O4", [("d+", W(*REV, kaynak=KB + " s.107 (TD 901 Makû nahiyesi) · gün komşudan: Revan"))])),
    ("Gümrü (Aleksandropol)", ("O5 K5", [("d+", W(*REV, kaynak="örtülü — Emre 17 Eylül karari · dayanak: Revan · " + KB + " (3 Ekim 1724) / TDV nadir-sah--iran (3 Ekim 1735) · batıda Kars kesintisiz Osmanlı · Alandağlı 2024 (Arpaçay doğusu Revan eyaleti)"))])),
    ("Nahçıvan", ("O8 K4-B", [("d~", W("1725-01-01", "1730-08-12"),
                               W(*NAH, kaynak="Yörük & Valiyev 2016 s.20 (Aktepe 1970 s.53-58) '11 Ağustos 1724' · TDV nahcivan (1724-1735) · ayrışma: Bilgili 2016 'Nisan 1723'ten biraz önce'"))])),
    ("Ordubad", ("O9 K4-B", [("d~", W("1725-01-01", "1730-08-12"),
                              W(*NAH, kaynak="Yörük & Valiyev 2016 s.20 (Aktepe 1970) 'Nahçivan ve Ordubad ise 11 Ağustos 1724' · " + KB + " s.117 (TD 905)"))])),
    ("Culfa", ("O10 K4-B", [("d+", W(*NAH, kaynak=KB + " s.117-118 (TD 905: Culha 39 hane) · gün komşudan: Nahçıvan · Aktepe 1970"))])),
    ("Merend", ("O11", [("d+", W(*TEB, kaynak="TDV tebriz ('1728'de eyalete … Merend … bağlıydı') · gün komşudan: Tebriz"))])),
    ("Urmiye", ("O12", [("d+", W("1724-01-01", TEB[1], kaynak="TDV urmiye ('1724 yılında bir defa daha Osmanlı hâkimiyetine girdi') · Emre kararı 17 Eyl şık A · ayrışma: Bilgili 2016 'Aralık 1725'"))])),
    ("Selmâs (Dilman)", ("O13", [("d+", W("1724-01-01", TEB[1], kaynak=KB + " s.120 (TD 910 Selmâs livası) · gün komşudan: Urmiye · TDV urmiye"))])),
    ("Mîyandoab", ("O15", [("d+", W(*TEB, kaynak=KB + " s.119 (TD 909 Miyan-duvâb nahiyesi) · gün komşudan: Merâga (Tebriz ile aynı gün, Emre kararı)"))])),
    ("Mahabad (Sâvücbulak)", ("O16", [("d+", W(*TEB, kaynak=KB + " s.119 (TD 909 Sovukbulak) · TDV tebriz · Özcoşar-Açar 2024 · gün komşudan: Merâga · Emre 17 Eyl: Kürt beylikleri d:"))])),
    ("Senendec (Sine)", ("O17", [("d+", W(*ERD, kaynak="Özcoşar-Açar 2024 s.221 '11 Safer 1136 (10 Kasım 1723)' · TDV mahmud-i--osmanli (10 Ocak 1732) · Emre 17 Eyl: d:"))])),
    ("Merîvan", ("O18", [("d+", W(*ERD, kaynak=KB + " dn.88 (TD 1066 Mihribân livası) · gün komşudan: Senendec"))])),
    ("Bâne", ("O19", [("d+", W(*ERD, kaynak=KB + " dn.88 (TD 1066 Pâne livası) · gün komşudan: Senendec"))])),
    ("Sakkız", ("O20", [("d+", W(*ERD, kaynak=KB + " dn.88 (TD 1066 Sakîz livası) · gün komşudan: Senendec"))])),
    ("Erdebil", ("O23 K11-B", [("d+", W(*ERB, kaynak="TDV erdebil ('1725 sonbaharında') · Iranica ARDABĪL (1138/1725) · " + KB + " s.110 (TD 902) · 1 Muharrem 1138 kaynaklarla çelişmeyen EN ERKEN gün, olay günü DEĞİL"))])),
    ("Halhâl", ("O24 K11-B", [("d+", W(*ERB, kaynak=KB + " s.120 (TD 910 Halhâl livası) · Iranica KHALKHAL · gün Erdebil ile aynı (K11 B)"))])),
    ("Meşkinşehr (Hiyav)", ("O25 K5", [("d+", W(*ERB, kaynak="örtülü — Emre 17 Eylül karari · dayanak: Erdebil · TDV erdebil / Iranica ARDABĪL · adıyla anan kaynak YOK"))])),
    ("Sarâb", ("O26 K11-B", [("d~", W(*TEB), W(*ERB, kaynak=KB + " s.111 (TD 902 Erdebil kazası Serab nahiyesi) · gün Erdebil ile aynı (K11 B)"))])),
    ("Miyâne", ("O27 K11-B", [("d~", W(*TEB), W(*ERB, kaynak=KB + " s.111 (TD 902 Germ-rûd kazası Miyane) · gün Erdebil ile aynı (K11 B)"))])),
    # ── 1DUNYA ──
    ("Lüksemburg", ("1DA-1", [("isg+", S("1914-08-02", "1918-11-20", "almanya",
                                         kaynak="1914-1918-online, Majerus/Roemer «Luxembourg» — 2 Ağustos 1914 işgal · Alman işgal ordusu 20 Kasım 1918'de ayrıldı"))])),
    ("Erzurum", ("1DB-A1", [
        ("d~", W("1518-01-01", "1920-04-23"), W("1518-01-01", "1916-02-16")),
        ("d+", W("1918-03-12", "1920-04-23", kaynak="TDV erzurum (12 Mart 1918)")),
    ] + [("s+", x) for x in RUS1917("1916-02-16", "1918-03-12")])),
    ("Erzincan", ("1DB-A2", [
        ("d~", W("1514-09-06", "1920-04-23"), W("1514-09-06", "1916-07-24")),
        ("d+", W("1918-02-26", "1920-04-23", kaynak="TDV erzincan (26 Şubat 1918)")),
    ] + [("s+", x) for x in RUS1917("1916-07-24", "1918-02-26")])),
    ("Trabzon", ("1DB-A3", [
        ("d~", W("1461-08-15", "1920-04-23"), W("1461-08-15", "1916-04-18")),
        ("d+", W("1918-02-24", "1920-04-23", kaynak="TDV trabzon (Rus işgali 18 Nisan 1916 - 24 Şubat 1918)")),
    ] + [("s+", x) for x in RUS1917("1916-04-18", "1918-02-24")])),
    ("Bitlis", ("1DB-A4", [
        ("d~", W("1515-09-15", "1920-04-23"), W("1515-09-15", "1916-03-01")),
        ("d+", W("1916-08-08", "1920-04-23", kaynak="TDV bitlis (Rus işgali 1 Mart - 8 Ağustos 1916)")),
        ("s+", S("1916-03-01", "1916-08-08", "rusya")),
    ])),
    ("Kût el-Amâre", ("1DB-A5", [
        ("d~", W("1638-12-24", "1917-03-11"), W("1638-12-24", "1915-09-26")),
        ("d+", W("1916-04-29", "1917-03-11", kaynak="TDV kutulamare (29 Nisan 1916) · bitiş 1917-03-11 KAYNAKSIZ (TDV 'Şubat 1917') — dokunulmadı")),
        ("s+", S("1915-09-26", "1916-04-29", "ingiltere")),
    ])),
    ("Tâif", ("1DB-A6", [
        ("v~", W("1813-05-02", "1916-06-10"), W("1813-05-02", "1916-09-17")),
        ("s", [S("1916-06-10", SON, "hicaz")], [S("1916-09-17", SON, "hicaz")]),
    ])),
    ("Halep", ("1DB-A7", [
        ("d~", W("1516-08-28", "1918-10-26"), W("1516-08-28", "1918-10-27")),
        ("s", [S("1918-10-26", "1920-07-24", "fransa-cumhuriyet")], [S("1918-10-27", "1920-07-24", "fransa-cumhuriyet")]),
    ])),
    ("Bağdat", ("1DB-A9", [
        ("s", [S("1917-03-11", SON, "ingiltere")],
         [S("1917-03-11", "1921-08-23", "ingiltere"), S("1921-08-23", SON, "irak-kralligi")]),
    ])),
])

# ═══════════════════════════ YARDIMCILAR (_sahiplik_uygula.py'den) ════════
AD_RX = re.compile(r'\bad:\s*"((?:[^"\\]|\\.)*)"')
ALAN_RX = {a: re.compile(r'(\b%s:\s*)\[' % a) for a in ("d", "s", "v", "isg")}


def _denge(s):
    d, tirnak, kacis = 0, False, False
    for c in s:
        if kacis:
            kacis = False
            continue
        if c == "\\":
            kacis = True
            continue
        if c == '"':
            tirnak = not tirnak
            continue
        if tirnak:
            continue
        if c in "{[":
            d += 1
        elif c in "}]":
            d -= 1
    return d


def _maske(s):
    m = bytearray(len(s))
    tirnak, kacis, i, n = None, False, 0, len(s)
    while i < n:
        c = s[i]
        if kacis:
            kacis = False
            m[i] = 1
            i += 1
            continue
        if tirnak:
            m[i] = 1
            if c == "\\":
                kacis = True
            elif c == tirnak:
                tirnak = None
            i += 1
            continue
        if c in "\"'":
            tirnak = c
            m[i] = 1
            i += 1
            continue
        if c == "/" and i + 1 < n and s[i + 1] == "/":
            while i < n and s[i] != "\n":
                m[i] = 1
                i += 1
            continue
        i += 1
    return m


def ara_disi(rx, metin):
    mk = _maske(metin)
    for m in rx.finditer(metin):
        if not mk[m.start()]:
            return m
    return None


def ust_seviye_say(kayit, alan):
    mk = _maske(kayit)
    say = 0
    for m in re.finditer(r"\b%s:" % alan, kayit):
        if mk[m.start()]:
            continue
        d = 0
        for p in range(m.start()):
            if not mk[p] and kayit[p] in "{[":
                d += 1
            elif not mk[p] and kayit[p] in "}]":
                d -= 1
        if d == 1:
            say += 1
    return say


def dizi_sonu(s, bas):
    der, tirnak, kacis = 0, False, False
    for i in range(bas, len(s)):
        c = s[i]
        if kacis:
            kacis = False
            continue
        if c == "\\":
            kacis = True
            continue
        if c == '"':
            tirnak = not tirnak
            continue
        if tirnak:
            continue
        if c == "[":
            der += 1
        elif c == "]":
            der -= 1
            if der == 0:
                return i
    return -1


def js_yaz(v):
    if isinstance(v, list):
        return "[" + ",".join(js_yaz(x) for x in v) + "]"
    if isinstance(v, dict):
        return "{" + ",".join("%s:%s" % (k, js_yaz(x)) for k, x in v.items()) + "}"
    if isinstance(v, str):
        return '"' + v.replace("\\", "\\\\").replace('"', '\\"') + '"'
    if v is None:
        return "null"
    if isinstance(v, bool):
        return "true" if v else "false"
    return str(v)


def alan_yaz(metin, alan, deger):
    m = ara_disi(ALAN_RX[alan], metin)
    js = js_yaz(deger)
    if m:
        son = dizi_sonu(metin, m.end() - 1)
        if son < 0:
            raise ValueError("%s:[ kapanmıyor" % alan)
        return metin[:m.end() - 1] + js + metin[son + 1:]
    ma = ara_disi(AD_RX, metin)
    if not ma:
        raise ValueError("ad: çıpası yok")
    return metin[:ma.end()] + ",%s:%s" % (alan, js) + metin[ma.end():]


# ═══════════════════════════ İŞLEM MOTORU ═══════════════════════════════
def _ayni(p, q):
    return p["f"] == q["f"] and p["t"] == q["t"] and p.get("d") == q.get("d")


def uygula(kayit, islemler, hata, yalniz=None):
    """kayıt dict'ine işlemleri uygular; `yalniz` verilirse yalnız o alanlar."""
    r = {a: [dict(p) for p in (kayit.get(a) or [])] for a in ("s", "d", "v", "isg")}
    r["lat"], r["lon"] = kayit.get("lat"), kayit.get("lon")
    for op in islemler:
        alan = {"s": "s", "s+": "s", "d~": "d", "d+": "d", "v~": "v", "isg+": "isg", "konum": "lat"}[op[0]]
        if yalniz is not None and alan not in yalniz:
            continue
        if op[0] == "s":
            eski, yeni = op[1], op[2]
            n = len(eski)
            yer = [i for i in range(len(r["s"]) - n + 1)
                   if all(_ayni(r["s"][i + k], eski[k]) for k in range(n))]
            if len(yer) != 1:
                m = len(yeni)
                zaten = [i for i in range(len(r["s"]) - m + 1)
                         if all(_ayni(r["s"][i + k], yeni[k]) for k in range(m))]
                if yalniz is not None and not yer and len(zaten) == 1:
                    continue      # KOPYA: işlem zaten uygulanmış (hoşgörü yalnız kopyada)
                hata.append("s: eski alt dizi %d kez bulundu: %s" % (len(yer), [(p["f"], p["t"], p["d"]) for p in eski]))
                continue
            r["s"] = r["s"][:yer[0]] + [dict(p) for p in yeni] + r["s"][yer[0] + n:]
        elif op[0] in ("s+", "isg+", "d+"):
            a = {"s+": "s", "isg+": "isg", "d+": "d"}[op[0]]
            if any(p["f"] == op[1]["f"] and p["t"] == op[1]["t"] for p in r[a]):
                hata.append("%s: pencere ZATEN VAR %s→%s" % (a, op[1]["f"], op[1]["t"]))
                continue
            r[a] = sorted(r[a] + [dict(op[1])], key=lambda p: p["f"])
        elif op[0] in ("d~", "v~"):
            a = op[0][0]
            yer = [i for i, p in enumerate(r[a]) if p["f"] == op[1]["f"] and p["t"] == op[1]["t"]]
            if len(yer) != 1:
                hata.append("%s~: eski pencere %s→%s %d kez" % (a, op[1]["f"], op[1]["t"], len(yer)))
                continue
            r[a][yer[0]].update(op[2])
            r[a] = sorted(r[a], key=lambda p: p["f"])
        elif op[0] == "konum":
            r["lat"], r["lon"] = op[1], op[2]
    return r


def pad(g):
    """§3.5.0 üç haneli yıl tuzağı: '962-02-02' > '1914-…' (metin karşılaştırması)."""
    y, _, kalan = g.partition("-")
    return y.zfill(4) + ("-" + kalan if kalan else "")


def bosluk(r, kur=None):
    ps = sorted((p["f"], p["t"]) for a in ("s", "d", "v") for p in r.get(a) or [])
    if not ps:
        return []
    son, out = kur or ps[0][0], []
    for f, t in ps:
        if f > son:
            out.append((son, f))
        son = max(son, t)
    if son < SON:
        out.append((son, SON))
    return out


# ═══════════════════════════ 1 · VERİYİ OKU ════════════════════════════
Y = {}
for y in girdi.yukle(sessiz=True):
    Y.setdefault(y["ad"], []).append(y)
DEV = girdi.oku_devletler()
KUNYE = {}
for d_ in DEV:
    KUNYE.setdefault(d_.get("id"), d_)
    if d_.get("harita"):
        KUNYE.setdefault("h:" + d_["harita"], d_)
import renkler  # noqa: E402

BOY = renkler.BOYALAR

konum = collections.defaultdict(list)
icerik = {}
for ad_d in girdi.GIRDI_DOSYALARI:
    satirlar = io.open(os.path.join(VERI, ad_d), encoding="utf-8", newline="").read().split("\n")
    icerik[ad_d] = satirlar
    for i, satir in enumerate(satirlar):
        m = AD_RX.search(satir)
        if not m or m.group(1) not in ISLEM:
            continue
        d, j = _denge(satir), i
        while d != 0 and j + 1 < len(satirlar) and j - i < 60:
            j += 1
            d += _denge(satirlar[j])
        konum[m.group(1)].append((ad_d, i, j))

# yer_yama kopyaları (node, uygulayıcının okuduğu biçimde)
JS = r"""
const fs=require('fs');const out=[];
for(const f of fs.readdirSync('data').filter(x=>/^yer_yama.*\.js$/.test(x))){
  global.window={};try{eval(fs.readFileSync('data/'+f,'utf8'));}catch(e){continue;}
  for(const k of Object.keys(global.window)){const v=global.window[k];if(!Array.isArray(v))continue;
    for(const r of v)if(r&&r.ad)out.push({f,ad:r.ad,s:r.s,d:r.d,v:r.v,isg:r.isg});}}
process.stdout.write(JSON.stringify(out));
"""
KOPYA = json.loads(subprocess.run(["node", "-e", JS], capture_output=True, text=True,
                                  encoding="utf-8", cwd=KOK).stdout)

# ═══════════════════════════ 2 · HESAPLA + DENETLE ══════════════════════
duzen = []          # (dosya, i, j, yeni_satirlar)
kopya_duzen = collections.defaultdict(list)   # dosya -> [(ad, alan, yeni)]
rapor = []
engel = 0
for ad, (kod, isl) in ISLEM.items():
    kay = Y.get(ad, [])
    yer = konum.get(ad, [])
    if len(kay) != 1 or len(yer) != 1:
        rapor.append("🔴 %s %s: kayıt %d / konum %d — ATLANDI" % (kod, ad, len(kay), len(yer)))
        engel += 1
        continue
    eski = kay[0]
    hata = []
    yeni = uygula(eski, isl, hata)
    # denetim
    for a in ("s", "d", "v", "isg"):
        for p in yeni[a]:
            if p["f"] >= p["t"]:
                hata.append("%s sıfır/ters %s→%s" % (a, p["f"], p["t"]))
        for p, q in zip(yeni[a], yeni[a][1:]):
            if q["f"] < p["t"] and a != "isg":
                hata.append("%s çakışma %s→%s / %s→%s" % (a, p["f"], p["t"], q["f"], q["t"]))
    yb = set(bosluk(yeni, eski.get("kur"))) - set(bosluk(eski, eski.get("kur")))
    for b in yb:
        hata.append("Değişmez 1 YENİ boşluk %s→%s" % b)
    for a in ("s", "isg"):
        for p in yeni[a]:
            if any(_ayni(p, q) for q in (eski.get(a) or [])):
                continue
            ku = KUNYE.get(p["d"]) or KUNYE.get("h:" + p["d"])
            if not ku:
                hata.append("künye YOK: %s" % p["d"])
            elif pad(p["f"]) < pad(ku.get("f") or "0000") or pad(p["t"]) > pad(ku.get("t") or "9999"):
                hata.append("künye penceresi: %s %s→%s (künye %s→%s)" % (p["d"], p["f"], p["t"], ku.get("f"), ku.get("t")))
            if p["d"] not in BOY and (ku or {}).get("harita") not in BOY:
                hata.append("RENK YOK: %s" % p["d"])
    dosya, i, j = yer[0]
    metin = "\n".join(icerik[dosya][i:j + 1])
    degisen = [a for a in ("s", "d", "v", "isg") if yeni[a] != [dict(p) for p in (eski.get(a) or [])]]
    for a in degisen:
        if ust_seviye_say(metin, a) > 1:
            hata.append("MÜKERRER üst-seviye %s: — JS sonuncuyu okur" % a)
    if hata:
        engel += 1
        rapor.append("🔴 %s %s: %s" % (kod, ad, " | ".join(hata)))
        continue
    yeni_metin = metin
    for a in degisen:
        yeni_metin = alan_yaz(yeni_metin, a, yeni[a])
    if yeni["lat"] != eski.get("lat"):
        for anahtar, deger in (("lat", yeni["lat"]), ("lon", yeni["lon"])):
            m = ara_disi(re.compile(r"\b%s:\s*-?[\d.]+" % anahtar), yeni_metin)
            yeni_metin = yeni_metin[:m.start()] + "%s:%s" % (anahtar, deger) + yeni_metin[m.end():]
        degisen.append("lat/lon")
    duzen.append((dosya, i, j, yeni_metin.split("\n")))
    rapor.append("✓ %-9s %-32s %-26s %s" % (kod, ad, dosya, "+".join(degisen)))
    # kopyalar: AYNI işlemler kopyanın KENDİ dizisine (yalnız taşıdığı alanlar)
    for c in KOPYA:
        if c["ad"] != ad:
            continue
        tasidigi = [a for a in ("s", "d", "v", "isg") if c.get(a) is not None and a in degisen
                    and c[a] != yeni[a]]
        hedefte = [a for a in ("s", "d", "v", "isg") if c.get(a) is not None and a in degisen
                   and c[a] == yeni[a]]
        if hedefte:
            rapor.append("   ↳ kopya %s (%s) ZATEN HEDEF DEĞERDE — dokunulmaz" % (c["f"], "/".join(hedefte)))
        if not tasidigi:
            continue
        kh = []
        ky = uygula({a: c.get(a) for a in ("s", "d", "v", "isg")}, isl, kh, yalniz=set(tasidigi))
        if kh:
            engel += 1
            rapor.append("   🔴 KOPYA %s (%s): %s" % (c["f"], "/".join(tasidigi), " | ".join(kh)))
            continue
        tasidigi = [a for a in tasidigi if ky[a] != c[a]]
        if not tasidigi:
            rapor.append("   ↳ kopya %s işlem ZATEN UYGULANMIŞ — dokunulmaz" % c["f"])
            continue
        for a in tasidigi:
            kopya_duzen[c["f"]].append((ad, a, ky[a]))
        rapor.append("   ↳ kopya %s (%s) aynı işlemle güncellenecek" % (c["f"], "/".join(tasidigi)))

print("\n".join(rapor))
print("\nKAYIT: %d düzenleme · ENGEL %d · kopya dosyası %d (%d alan)"
      % (len(duzen), engel, len(kopya_duzen), sum(len(v) for v in kopya_duzen.values())))

if not YAZ:
    print("\n(kuru koşu — hiçbir dosya yazılmadı)")
    sys.exit(1 if engel else 0)
if engel:
    print("\n🔴 ENGEL VAR — YAZILMADI")
    sys.exit(1)

# ═══════════════════════════ 3 · YAZ ════════════════════════════════════
for dosya, i, j, yeni in sorted(duzen, key=lambda x: (x[0], -x[1])):
    icerik[dosya][i:j + 1] = yeni
for dosya in {d_[0] for d_ in duzen}:
    io.open(os.path.join(VERI, dosya), "w", encoding="utf-8", newline="").write("\n".join(icerik[dosya]))
for dosya, liste in kopya_duzen.items():
    yol = os.path.join(VERI, dosya)
    satirlar = io.open(yol, encoding="utf-8", newline="").read().split("\n")
    for ad, alan, deger in liste:
        yerler = []
        for i, s in enumerate(satirlar):
            m = AD_RX.search(s)
            if m and m.group(1) == ad:
                d, j = _denge(s), i
                while d != 0 and j + 1 < len(satirlar) and j - i < 60:
                    j += 1
                    d += _denge(satirlar[j])
                yerler.append((i, j))
        if len(yerler) != 1:
            print("🔴 KOPYA YAZILAMADI %s %s: %d konum" % (dosya, ad, len(yerler)))
            continue
        i, j = yerler[0]
        metin = alan_yaz("\n".join(satirlar[i:j + 1]), alan, deger)
        satirlar[i:j + 1] = metin.split("\n")
    io.open(yol, "w", encoding="utf-8", newline="").write("\n".join(satirlar))

# ═══════════════════════════ 4 · GERİ OKU ═══════════════════════════════
Y2 = {y["ad"]: y for y in girdi.yukle(sessiz=True)}
kotu = 0
for ad, (kod, isl) in ISLEM.items():
    h = []
    beklenen = uygula(Y[ad][0], isl, h)
    for a in ("s", "d", "v", "isg"):
        if (Y2[ad].get(a) or []) != beklenen[a]:
            kotu += 1
            print("🔴 GERİ OKUMA FARKI %s %s" % (ad, a))
print("YAZILDI · geri okuma farkı: %d" % kotu)
