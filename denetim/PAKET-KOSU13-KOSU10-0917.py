# -*- coding: utf-8 -*-
"""KOSU13-YAMA · YAMA-KOSU10-KALAN-0917 UYGULANABİLİR kalemleri (1.MURAT M-4357).
Uygulayıcı: py denetim/ARAC-KOSU13-UYGULA2-0917.py denetim/PAKET-KOSU13-KOSU10-0917.py [--yaz]
Basit kalemler eski/yeni metnini doğrudan denetim/YAMA-KOSU10-KALAN-0917.json'dan alır (kod ile).
ERTELENEN (rapor §8): G5-KAVALALI (js/app.js, Oturum 1) · G5-RUS-KUNYE (renk + ad kararı) ·
  G4-A6A-HALKA · G5-A6B-HALKA · G6-HALKA-HALKALAR (yeni halka dosyaları + app.js/index.html) ·
  Hotin/Yaş/Roman/Birlad 1806 günü (G5-RUS-1806-BOGDAN kararı) · Merend 1731 penceresi (kaynaksız).
Tebriz 1725-07-28'e çekilince ona bağlı beş kayıt (Merend · Merâga · Ahar · Mîyandoab · Mahabad)
AYNI günü alır (D166 çapa kuralı; hepsinin 1725 günü "gün komşudan: Tebriz/Merâga").
"""
import collections
import io
import json
import re

_J = {x["kod"]: x for x in json.load(io.open("denetim/YAMA-KOSU10-KALAN-0917.json", encoding="utf-8"))
      ["kalemler"]["uygulanabilir"]}


def S(f, t, d, **ek):
    p = {"f": f, "t": t, "d": d}
    p.update(ek)
    return p


def W(f, t, **ek):
    p = {"f": f, "t": t}
    p.update(ek)
    return p


def basit(kod, *degis):
    x = _J[kod]
    y = x["yeni"]
    for a, b in degis:
        assert a in y, (kod, a)
        y = y.replace(a, b)
    return ("data/" + re.split(r"[:\s]", x["dosya"])[0][5:], x["eski"], y)


def degisik(kod, i, mod="bir", dosya=None, eski=None, yeni=None):
    c = _J[kod]["degisiklikler"][i]
    e, y = eski or c["eski"], yeni or c["yeni"]
    if isinstance(mod, tuple) and e.endswith("},") and y.endswith("},"):
        e, y = e[:-1], y[:-1]  # kayıt kapsamı kapanış '}'de biter; sondaki virgül kapsam dışında
    return (dosya or "data/" + re.split(r"[:\s]", c["dosya"])[0][5:], e, y, mod)


T0728 = ('{f:"1725-08-04"', '{f:"1725-07-28"')
SAM = "gün komşudan: Şam · TDV selim-i ('27 Eylül'de Şam'a ulaştı, fakat şehre girmedi' — varış günü, teslim günü değil)"

ISLEM = collections.OrderedDict()
# ── G2/G3: Tebriz'e bağlı 1725 günleri ────────────────────────────────────
for ad in ("Merâga", "Mîyandoab"):
    ISLEM[ad] = ("G3-A6C/D166", [("d~", W("1725-08-04", "1730-08-12"), W("1725-07-28", "1730-08-12"))])
ISLEM["Merâga"][1][0][2]["kaynak"] = ("gün komşudan: Tebriz · TDV tebriz ('tekrar zaptedildi (17 Zilkade 1137/28 Temmuz 1725)') · "
                                      "TDV ahmed-iii: Tebriz eyaletine bağlı Merâga aynı seferde")
# ── G4-A6A-Y1b + G6-HALKA-ERZINCAN ────────────────────────────────────────
EZ = "TDV erzincan: 'Erzincan 1410 yılında Karakoyunlu hâkimiyetine girdi' · 'Karayülük Osman … Akkoyunlu topraklarına katıldı (1422)' · 'Uzun Hasan … yeniden Akkoyunlu hâkimiyetine aldı (1457)' · TDV uzun-hasan: 'Cihan Şah'ın 854'te (1450) Erzincan'a ordu gönderip burayı alması' — YIL"
ISLEM["Erzincan"] = ("G4-Y1b+G6-ERZ", [
    ("s~", S("1348-01-01", "1379-01-01", "akkoyunlu"), S("1348-01-01", "1379-01-01", "eretna",
        kaynak="TDV erzincan: 'Eretna Bey'in hükmüne girdi … (1348)' · 'Pîr Hüseyin Bey'in vefatıyla (1378) … Mutahharten'in Erzincan emîri olması'")),
    ("s", [S("1410-01-01", "1502-01-01", "akkoyunlu")],
     [S("1410-01-01", "1422-01-01", "karakoyunlu", kaynak=EZ), S("1422-01-01", "1450-01-01", "akkoyunlu", kaynak=EZ),
      S("1450-01-01", "1457-01-01", "karakoyunlu", kaynak=EZ), S("1457-01-01", "1502-01-01", "akkoyunlu", kaynak=EZ)]),
])
# ── G6-HALKA-TILIMSAN ─────────────────────────────────────────────────────
TL = "TDV abdulvadiler: '1337'de şehri ele geçirdi' · 'Merînîler'in hâkimiyetinden kurtuldular (1348)' · '1352'de Tilimsân'ın tekrar zaptedilmesi … 1359'da yeniden bağımsızlıklarını' · TDV meriniler '752'de (1351)' — iç ayrışma, ihtiyatlı 1352 · YIL"
ISLEM["Tilimsan"] = ("G6-TIL", [
    ("s", [S("1281-01-01", "1552-01-01", "zeyyani")],
     [S("1281-01-01", "1337-01-01", "zeyyani"), S("1337-01-01", "1348-01-01", "merini", kaynak=TL),
      S("1348-01-01", "1352-01-01", "zeyyani", kaynak=TL), S("1352-01-01", "1359-01-01", "merini", kaynak=TL),
      S("1359-01-01", "1552-01-01", "zeyyani", kaynak=TL)]),
])
# ── G4-A6A-Y7 + G5-RUS-YERGOGU ────────────────────────────────────────────
YER_S = "TDV yergogu: '1427'de Eflaklılar Giurgiu Kalesi'ni geri aldı'"
YER_D = "TDV yergogu: 'Ancak 853'te (1449) burası tekrar Osmanlı kontrolü altına girdi' — 853 H = 24.02.1449-13.02.1450, YIL"
YER_I = "yergogu · ESBE «Турецкие войны России» (15 Eylül J) · Bükreş Antlaşması (iade ÇIKARIMLI)"
KOPYA_ATLA = {("yer_yama_p0035.js", "Yergöğü (Giurgiu)")}
ISLEM["Yergöğü (Giurgiu)"] = ("G4-Y7+G5-YER", [
    ("s~", S("1427-01-01", "1449-01-01", "eflak"), S("1427-01-01", "1450-01-01", "eflak", kaynak=YER_S)),
    ("s", [S("1810-09-27", "1829-09-14", "rusya")], []),
    ("d~", W("1449-01-01", "1810-09-27", y="savas"), W("1450-01-01", "1829-09-14", kaynak=YER_D)),
    ("isg=", [], [S("1810-09-27", "1812-05-28", "rusya", kaynak=YER_I)]),
])
# ── G5-RUS: Hotin · Bender · İsmail ────────────────────────────────────────
ISLEM["Hotin"] = ("G5-HOTIN", [
    ("s", [S("1769-09-19", "1774-07-21", "rusya")], []),
    ("d-", W("1774-07-21", "1812-05-28")),
    ("d~", W("1713-06-24", "1769-09-19"), W("1713-06-24", "1812-05-28")),
    ("isg=", [S("1806-01-01", "1812-05-28", "rusya", kaynak="hotin")], [
        S("1739-08-30", "1739-09-18", "rusya", kaynak="hotin · ESBE «Ставчаны» (teslim muharebeden iki gün sonra) · ESBE «Белградский мир»"),
        S("1769-09-19", "1774-07-21", "rusya", kaynak="hotin · ESBE «Турецкие войны России» (9 Eylül J) · kucuk-kaynarca-antlasmasi"),
        S("1788-09-01", "1792-01-09", "avusturya", kesinlik="ay",
          kaynak="hotin ('1788 Eylülünde') · zistovi-antlasmasi (Hotin emaneten Avusturya'da, Rus barışına kadar) · yas-antlasmasi (9 Ocak)"),
        S("1806-01-01", "1812-05-28", "rusya", kaynak="hotin — 1806 günü G5-RUS-1806-BOGDAN kararını bekliyor"),
    ]),
])
ISLEM["Bender"] = ("G5-BENDER", [
    ("s", [S("1770-09-27", "1774-07-21", "rusya")], []),
    ("d-", W("1774-07-21", "1812-05-28")),
    ("d~", W("1538-09-01", "1770-09-27"), W("1538-09-01", "1812-05-28")),
    ("isg=", [], [
        S("1770-09-27", "1774-07-21", "rusya", kaynak="ESBE «Турецкие войны России» (16 Eylül J) · ESBE «Бендеры» · kucuk-kaynarca-antlasmasi"),
        S("1789-11-14", "1792-01-09", "rusya", kaynak="ESBE «Турецкие войны России» (3 Kasım J) · ESBE «Бендеры» · yas-antlasmasi"),
        S("1806-11-30", "1812-05-28", "rusya",
          kaynak="gün komşudan: Akkirman · TDV akkirman (30 Kasım 1806); ESBE «Турецкие войны России»: Hotin, Bender, Akkirman ve Kili komutanları kaleleri savaşsız teslim etti"),
    ]),
])
ISLEM["İsmail"] = ("G5-ISMAIL", [
    ("s", [S("1790-12-22", "1792-01-10", "rusya")], []),
    ("d-", W("1792-01-10", "1812-05-28")),
    ("d~", W("1538-09-01", "1790-12-22"), W("1538-09-01", "1812-05-28")),
    ("isg=", [], [
        S("1790-12-22", "1792-01-09", "rusya", kaynak="ESBE «Турецкие войны России» (11 Aralık J) · yas-antlasmasi"),
        S("1809-09-26", "1812-05-28", "rusya", kaynak="ESBE «Измаил, город» (14 Eylül 1809 J) · ESBE «Турецкие войны России»"),
    ]),
])
# ── G5-RUS: Bükreş · Yaş · Eflak beşi · Boğdan üçü (1828) ─────────────────
I1812 = "ESBE «Турецкие войны России» (13 Aralık J, Miloradoviç)"
I1828 = "edirne-antlasmasi · ESBE (25 Nisan J)"
ISLEM["Bükreş"] = ("G5-BUKRES", [
    ("isg=", [S("1806-11-30", "1812-05-28", "rusya", kaynak="eflak"), S("1828-05-01", "1834-01-01", "rusya", kaynak="eflak")], [
        S("1789-11-01", "1791-08-04", "avusturya", kesinlik="ay",
          kaynak="ESBE «Турецкие войны России» (Kasım başı J, Coburg) · zistovi-antlasmasi (4 Ağustos 1791, iade)"),
        S("1806-12-25", "1812-05-28", "rusya", kaynak="eflak · " + I1812),
        S("1828-05-07", "1834-01-01", "rusya", kaynak="eflak · " + I1828),
    ]),
])
YAS1806 = S("1806-11-30", "1812-05-28", "rusya", kaynak="bogdan")
ISLEM["Yaş"] = ("G5-YAS", [
    ("isg=", [YAS1806, S("1828-05-01", "1834-01-01", "rusya", kaynak="bogdan")], [
        S("1739-09-12", "1739-09-18", "rusya", kaynak="ESBE «Турецкие войны России» (1 Eylül J) · ESBE «Белградский мир»"),
        dict(YAS1806),
        S("1828-05-07", "1834-01-01", "rusya", kaynak="bogdan · " + I1828),
    ]),
])
for ad in ("Tırgovişte", "Piteşti", "Buzău", "Rimnik-i Sârat (Râmnicu Sărat)", "Kımpulung (Câmpulung)"):
    ISLEM[ad] = ("G5-1806-EFLAK", [
        ("isg+", S("1806-12-25", "1812-05-28", "rusya", kaynak="gün komşudan: Bükreş · " + I1812)),
        ("isg+", S("1828-05-07", "1834-01-01", "rusya", kaynak="ESBE (25 Nisan J) · edirne-antlasmasi · eflak")),
    ])
for ad in ("Roman", "Birlad (Bârlad)", "Kalas (Galatz)"):
    ISLEM[ad] = ("G5-1828-PRENS", [
        ("isg+", S("1828-05-07", "1834-01-01", "rusya", kaynak="ESBE (25 Nisan J) · edirne-antlasmasi · bogdan")),
    ])
# ── G4-A6A-Y8 Filistin ─────────────────────────────────────────────────────
FK = {
    "Nablus": ("1516-12-28", "1918-09-21", "TDV nablus: 'Şehir 922 (1516) sonbaharında Osmanlı yönetimine girdi'"),
    "Yafa": ("1516-12-28", "1917-11-16", "TDV yafa (bölge cümlesi): 'Mercidâbık Savaşı'nın ardından (922/1516) bütün Suriye Osmanlı hâkimiyetine girdi'"),
    "Sayda": ("1517-01-01", "1918-10-06", "TDV sayda: '922 (1516) Mercidâbık zaferinden sonra Osmanlı ülkesine katıldı'"),
    "Akkâ": ("1517-01-01", "1918-09-23", "kendi kaynağı BULUNAMADI (TDV akka 922/1516'yı anmıyor)"),
}
for ad, (g, son, kk) in FK.items():
    ISLEM[ad] = ("G4-Y8", [
        ("s~", S("1281-01-01", g, "memluk"), S("1281-01-01", "1516-09-27", "memluk")),
        ("d~", W(g, son), W("1516-09-27", son, kaynak=SAM + " · " + kk)),
    ])
ISLEM["Kudüs"] = ("G4-Y8", [
    ("s~", S("1281-01-01", "1516-12-29", "memluk"), S("1281-01-01", "1516-10-01", "memluk", kesinlik={"t": "ay"})),
    ("d~", W("1516-12-29", "1917-12-09", y="antlasma"),
     W("1516-10-01", "1917-12-09", kesinlik={"f": "ay"},
       kaynak="TDV kudus: 'Kudüs, padişahın gelişinden önce muhtemelen Ekim 1516'da Osmanlı yönetimine girmişti (Ercan, s. 10)' — AY; 29 Aralık 1516 padişahın gelişi")),
])
# ── G6 Derbend · Derne ─────────────────────────────────────────────────────
ISLEM["Derbend"] = ("G6-DERBEND", [
    ("d~", W("1578-11-01", "1607-01-01"), W("1578-10-05", "1607-01-01",
        kaynak="TDV derbend--dagistan: 'Derbend halkından yedi kişilik bir heyet 5 Ekim 1578'de Ereş'te bulunan Serdar Lala Mustafa Paşa'nın yanına giderek bağlılık arzettiler' · '1607'ye kadar süren Osmanlı hâkimiyeti'")),
])
ISLEM["Derne"] = ("G6-TRABLUS", [
    ("isg+", S("1911-10-16", "1912-10-18", "italya", kaynak="TDV derne — 16 Ekim'de işgal; 18 Ekim 1912 Uşi")),
])

EKLE = []

# ═══════════════════════════ METİN ══════════════════════════════════════
METIN = [basit(k) for k in (
    "K2-BITLIS-YER", "K29-A1-MAKU", "K29-A3-GENCE", "K29-A3-BERDE", "K29-C1-REVAN",
    "G2-HEMEDAN", "G2-BURUCIRD", "G2-LURISTAN", "G2-NIHAVEND", "G2-KIRMANSAH-KAYNAK", "G2-BICAR",
    "G2-SARAB", "G2-MIYANE", "G2-SELMAS", "G2-TIFLIS", "G2-SERUR", "G2-GUMRU", "G2-MADDE-EK2-TEBRIZ",
    "G3-A6C-P0058B", "G3-A6C-P0076A", "G3-A6C-TEBRIZ", "G3-A6C-C0020",
    "G4-KRON3-DUBROVNIK", "G4-A6A-Y5-DEJANOVIC-KUNYE","G5-RUS-KILI", "G5-RUS-AKKIRMAN")]
METIN += [
    basit("G2-MEREND", T0728),
    basit("G2-MAHABAD", T0728),
    basit("G2-AHAR", ('{f:"1725-08-04", t:"1730-08-12"}',
                      '{f:"1725-07-28", t:"1730-08-12", kaynak:"gün komşudan: Tebriz · TDV tebriz (17 Zilkade 1137 / 28 Temmuz 1725)"}')),
]
METIN.append(basit("G4-A6A-Y9-ZENCAN") + (("kayit", "Zencan"),))
# Yergöğü p0035 kopyası (tam dizi taşıyor, veriden önceden farklıydı) — yeni veriyle birebir
METIN += [
    ("data/yer_yama_p0035.js", '{ f: "1449-01-01", t: "1829-09-14", y: "savas" }',
     '{ f: "1450-01-01", t: "1829-09-14", y: "savas", kaynak: ' + json.dumps(YER_D, ensure_ascii=False) + ' }', ("kayit", "Yergöğü (Giurgiu)")),
    ("data/yer_yama_p0035.js", '{ f: "1427-01-01", t: "1449-01-01", d: "eflak" }',
     '{ f: "1427-01-01", t: "1450-01-01", d: "eflak", kaynak: ' + json.dumps(YER_S, ensure_ascii=False) + ' }', ("kayit", "Yergöğü (Giurgiu)")),
    ("data/yer_yama_p0035.js", 'isg: [{ f: "1810-09-27", t: "1812-05-28", d: "rusya", kaynak: "yergogu" }]',
     'isg: [{ f: "1810-09-27", t: "1812-05-28", d: "rusya", kaynak: ' + json.dumps(YER_I, ensure_ascii=False) + ' }]', ("kayit", "Yergöğü (Giurgiu)")),
]
# kayıt kapsamlı çok parçalı kalemler
METIN += [degisik("K29-B1-ECMIYADZIN", i, ("kayit", "Eçmiyadzin")) for i in (0, 1)]
METIN += [degisik("G4-KITA14-1-KOSTAJNICA", i, ("kayit", "Kostayniçe (Kostajnica)")) for i in (0, 1)]
METIN += [degisik("G4-A6A-Y2-VODINA", i, ("kayit", "Vodina (Edessa)")) for i in (0, 1)]
METIN += [
    ("data/yerlesimler.js", '{f:"1281-01-01",t:"1392-01-15",d:"sirbistan"}', '{f:"1281-01-01",t:"1392-01-06",d:"sirbistan"}', ("kayit", "Üsküp")),
    ("data/yerlesimler.js", 'd:[{f:"1392-01-15",t:"1402-07-28",y:"savas"}',
     'd:[{f:"1392-01-06",t:"1402-07-28",y:"savas",kaynak:"uskup — 6 Ocak 1392 (Batılı müelliflere göre; ilk Osmanlı kronikleri tarih vermez)"}', ("kayit", "Üsküp")),
    ("data/olaylar_ek.js", '{ t:"1392-01-15", k:"fetih", etiket:["toprak-kazanc","konu-askeri"], b:"Üsküp\'ün fethi", gun:"Ocak 1392"',
     '{ t:"1392-01-06", k:"fetih", etiket:["toprak-kazanc","konu-askeri"], b:"Üsküp\'ün fethi", gun:"6 Ocak 1392 (Batılı müelliflere göre; ilk Osmanlı kronikleri tarih vermez)"'),
]
METIN += [degisik("G4-A6A-Y4-KOSTENDIL", i, ("kayit", "Köstendil")) for i in (0, 1)]
METIN += [degisik("G4-A6A-Y6-MANISA", i, ("kayit", "Manisa")) for i in (0, 1)]
# Bender kd satırı (Özi'ye bağlılık iki parça → tek parça)
METIN += [degisik("G5-RUS-BENDER", 0, ("kayit", "Bender"))]
# Özi
METIN += [
    ("data/yerlesimler.js", 's:[{f:"1737-07-13",t:"1738-08-01",d:"rusya"},', 's:[{f:"1737-07-11",t:"1738-08-01",d:"rusya"},', ("kayit", "Özi")),
    ("data/yerlesimler.js", 'd:[{f:"1538-09-01",t:"1737-07-13"},', 'd:[{f:"1538-09-01",t:"1737-07-11"},', ("kayit", "Özi")),
    degisik("G5-A6B-OZI", 2, dosya="data/olaylar_ek5.js", eski='{ t:"1737-07-13", k:"kayip"', yeni='{ t:"1737-07-11", k:"kayip"'),
    degisik("G5-A6B-OZI", 3, dosya="data/olaylar_ek5.js"),
]
# G6-MALAKA
METIN += [
    degisik("G6-MALAKA", 0, ("kayit", "Malaka")),
    degisik("G6-MALAKA", 1, ("kayit", "Malaka")),
    degisik("G6-MALAKA", 2, ("kayit", "Malaka")),
    degisik("G6-MALAKA", 3),
    degisik("G6-MALAKA", 4),
    degisik("G6-MALAKA", 5),
    degisik("G6-MALAKA", 6),
    degisik("G6-MALAKA", 7),
]
# G6-KRON2 — t'ler kaynak gününe; bağlar (ekokuma/savaslar) birlikte
ONCEKI = "17 Eyl 2026: t kaynak gününe alındı, bağlar birlikte taşındı (KOSU13-YAMA · YAMA-KOSU10-KALAN G6). ÖNCEKİ NOT — "
METIN += [
    degisik("G6-KRON2-02", 0), degisik("G6-KRON2-02", 1),
    ("data/olaylar_ek14.js", 'gun:"t:1505-01-01 KORUNDU — TDV günü 13 Ekim 1505', 'gun:"' + ONCEKI + 't:1505-01-01 KORUNDU — TDV günü 13 Ekim 1505'),
    degisik("G6-KRON2-04", 0), degisik("G6-KRON2-04", 1), degisik("G6-KRON2-04", 2),
    ("data/olaylar.js", 'gun:"A2 §4b: t:\'1596-10\' ay hassasiyetli', 'gun:"' + ONCEKI + 'A2 §4b: t:\'1596-10\' ay hassasiyetli'),
    degisik("G6-KRON2-09", 0),
    ("data/ekokuma_celali.js", '"1608-08-05|Kalender', '"1608-08-09|Kalender', "hepsi"),
    ("data/savaslar.js", '{ t:"1608-08-05", tur:"isyan", ad:"Kalenderoğlu"', '{ t:"1608-08-09", tur:"isyan", ad:"Kalenderoğlu"'),
    ("data/olaylar_ek5.js", 'gun:"EK2 §4: 5 Ağustos günü kaynakta YOK', 'gun:"' + ONCEKI + 'EK2 §4: 5 Ağustos günü kaynakta YOK'),
    degisik("G6-KRON2-10", 0),
    ("data/ekokuma_celali.js", '"1607-10-23|Canbolatoğlu', '"1607-10-24|Canbolatoğlu', "hepsi"),
    ("data/savaslar.js", '{ t:"1607-10-23", tur:"isyan", ad:"Canbolatoğlu', '{ t:"1607-10-24", tur:"isyan", ad:"Canbolatoğlu'),
    ("data/olaylar_ek5.js", 'gun:"EK2 §4: TDV kuyucu-murad-pasa: çatışmalar', 'gun:"' + ONCEKI + 'EK2 §4: TDV kuyucu-murad-pasa: çatışmalar'),
    degisik("G6-KRON2-11", 0), degisik("G6-KRON2-11", 1), degisik("G6-KRON2-11", 2),
    ("data/olaylar_ek5.js", 'gun:"EK2 §4: TDV kucuk-kaynarca-antlasmasi Kozluca', 'gun:"' + ONCEKI + 'EK2 §4: TDV kucuk-kaynarca-antlasmasi Kozluca'),
    degisik("G6-KRON2-12", 0),
    ("data/ekokuma_celali.js", '"1599-06-01|Karayazıcı"', '"1599-01-01|Karayazıcı"', "hepsi"),
    ("data/ekokuma_ekonomi.js", '"1599-06-01|Karayazıcı"', '"1599-01-01|Karayazıcı"', "hepsi"),
    ("data/ekokuma_savas.js", '"1599-06-01|Karayazıcı"', '"1599-01-01|Karayazıcı"', "hepsi"),
    degisik("G6-KRON2-12", 2),
    degisik("G6-KRON2-13", 0),
    degisik("G6-KRON2-13", 1, "hepsi"),
]
# G6-HALKA-TRABLUSGARP
METIN += [
    degisik("G6-HALKA-TRABLUSGARP", 0, ("kayit", "Trablus")),
    degisik("G6-HALKA-TRABLUSGARP", 1, ("kayit", "Bingazi")),
    ("data/olaylar_ek5.js", '{ t:"1912-10-15", k:"kayip", etiket:["antlasma","toprak-kayip","konu-askeri","konu-diplomasi"], b:"Uşi Antlaşması: Trablusgarp ve Bingazi\'nin İtalya\'ya terki", gun:"15 Ekim 1912"',
     '{ t:"1912-10-18", k:"kayip", etiket:["antlasma","toprak-kayip","konu-askeri","konu-diplomasi"], b:"Uşi Antlaşması: Trablusgarp ve Bingazi\'nin İtalya\'ya terki", gun:"18 Ekim 1912 (15 Ekim tarihli belge muhtariyet iradesidir — TDV trablusgarp-savasi)"'),
    degisik("G6-HALKA-TRABLUSGARP", 4),
]
# G6-HALKA-TILIMSAN kuyruk maddeleri
METIN += [
    degisik("G6-HALKA-TILIMSAN", 1), degisik("G6-HALKA-TILIMSAN", 2),
]
# G6-HALKA-KANDIYE
METIN += [
    degisik("G6-HALKA-KANDIYE", 0, ("kayit", "Kandiye (Girit)")),
    ("data/olaylar.js", 'b:"Girit\'in fethi tamamlandı", gun:"Eylül 1669 (Kandiye\'nin teslimi)"',
     'b:"Girit\'in fethi tamamlandı", gun:"6 Eylül 1669 (9 Rebîülâhir 1080 — Kandiye\'nin teslim anlaşması, TDV kandiye)"'),
    degisik("G6-HALKA-KANDIYE", 1),
    ("data/yer_yama.js", '{ dosya:"olaylar.js", t:"1669-09-27", b:"Girit\'in fethi tamamlandı", yer_id:"Kandiye (Girit)", not:"Kandiye (Candia/Heraklion) 27 Eylül 1669\'da teslim oldu, tarih birebir örtüşüyor."',
     '{ dosya:"olaylar.js", t:"1669-09-06", b:"Girit\'in fethi tamamlandı", yer_id:"Kandiye (Girit)", not:"Kandiye (Candia/Heraklion) 6 Eylül 1669\'da (9 Rebîülâhir 1080) teslim anlaşmasıyla teslim oldu (TDV kandiye); madde 17 Eyl 2026\'da 27 Eylül\'den taşındı."'),
    degisik("G6-HALKA-KANDIYE", 3),
]
# G6-HALKA-DERBEND maddesi
METIN += [
    ("data/olaylar_ek5.js",
     '{ t:"1583-01-01", k:"fetih", etiket:["toprak-kazanc","konu-askeri"], b:"Demirkapı (Derbend) ve Hazar kıyısının denetimi", gun:"1583", yer:"Derbend, Dağıstan", yer_id:"Derbend", kisiler:"Özdemiroğlu Osman Paşa", d:"Meşaleler Savaşı\'nın kazanılmasının ardından Kafkas duvarı ile Hazar denizi arasındaki dar geçidi kapatan Derbend kalesi Osmanlı idaresine alındı. Kuzeyden gelen bütün kara yollarının mecburi geçidi olan bu nokta, Kırım kuvvetleriyle Kafkasya ordusu arasındaki bağlantıyı sağlıyordu. Derbend\'in alınması Şirvan\'ın elde tutulmasını mümkün kılan lojistik halkaydı.", kaynak:"sirvan"',
     '{ t:"1578-10-05", k:"fetih", etiket:["toprak-kazanc","konu-askeri"], b:"Derbend halkının Lala Mustafa Paşa\'ya bağlılık arzı — Demirkapı Osmanlı idaresinde", gun:"5 Ekim 1578", yer:"Ereş (Şirvan) · Derbend, Dağıstan", yer_id:"Derbend", kisiler:"Lala Mustafa Paşa, Özdemiroğlu Osman Paşa", d:"Şirvan seferi sırasında Derbend halkından yedi kişilik bir heyet Ereş\'te bulunan Serdar Lala Mustafa Paşa\'nın yanına giderek bağlılık arzetti. Kafkas duvarı ile Hazar denizi arasındaki dar geçidi kapatan Derbend (Demirkapı), kuzeyden gelen kara yollarının mecburi geçidi olarak Şirvan\'ın elde tutulmasında kilit rol oynadı. Osmanlı hâkimiyeti burada 1607\'ye kadar sürdü.", ic_not_d:"17 Eyl 2026 (KOSU13-YAMA · YAMA-KOSU10-KALAN G6-HALKA-DERBEND): madde 1583-01-01\'den kaynak gününe taşındı; eski metin Meşaleler Savaşı (1583) sonrasını anlatıyordu.", kaynak:"derbend--dagistan · sirvan"'),
]
# G7-NAHCIVAN-1586
METIN += [
    degisik("G7-NAHCIVAN-1586", 0, ("kayit", "Nahçıvan")),
    degisik("G7-NAHCIVAN-1586", 1, ("kayit", "Ordubad")),
    degisik("G7-NAHCIVAN-1586", 2, ("kayit", "Culfa")),
    ("data/olaylar_ek8.js", '"t": "1585-01-01",\n  "k": "fetih",\n  "etiket": [\n   "toprak-kazanc",\n   "konu-askeri"\n  ],\n  "b": "Nahçıvan ve Ordubad\'ın Osmanlı idaresine girmesi",\n  "gun": "1585",',
     '"t": "1586-01-01",\n  "k": "fetih",\n  "etiket": [\n   "toprak-kazanc",\n   "konu-askeri"\n  ],\n  "b": "Nahçıvan ve Ordubad\'ın Osmanlı idaresine girmesi",\n  "gun": "1586 (Bilge 2017, Vakanüvis 2 s.51-52; TDV nahcivan yıl vermiyor) — Emre kararı 14 Eylül 2026",'),
    ("data/olaylar_ek8.js", '"kaynak": "nahcivan",\n  "duygu": [\n   "🎉",\n   "😔"\n  ]', '"kaynak": "nahcivan · Bilge 2017 (Vakanüvis 2, s.51-52)",\n  "duygu": [\n   "🎉",\n   "😔"\n  ]'),
]
# Tebriz maddesi + bağı (G3-A6C-TEBRIZ ①)
METIN += [
    ("data/olaylar_ek5.js", '{ t:"1725-08-04", k:"fetih", etiket:["savas","toprak-kazanc","konu-askeri"], b:"Tebriz\'in zaptı — Azerbaycan\'ın ele geçirilmesi", gun:"Ağustos 1725"',
     '{ t:"1725-07-28", k:"fetih", etiket:["savas","toprak-kazanc","konu-askeri"], b:"Tebriz\'in zaptı — Azerbaycan\'ın ele geçirilmesi", gun:"28 Temmuz 1725 (17 Zilkade 1137 — TDV tebriz)"'),
    ("data/olaylar_ek5.js", 'Ferhad Paşa Antlaşması devrinden sonraki en ileri sınırdı; ancak elde tutulması ordu ve hazineye ağır bir yük bindirdi.", kaynak:"ahmed-iii"',
     'Ferhad Paşa Antlaşması devrinden sonraki en ileri sınırdı; ancak elde tutulması ordu ve hazineye ağır bir yük bindirdi.", kaynak:"ahmed-iii · tebriz"'),
    ("data/yer_yama.js", '{ dosya:"olaylar_ek5.js", t:"1725-08-04", b:"Tebriz\'in zaptı', '{ dosya:"olaylar_ek5.js", t:"1725-07-28", b:"Tebriz\'in zaptı'),
]
# Filistin maddeleri (G4-A6A-Y8 ① ②)
METIN += [
    ("data/olaylar_ek5.js",
     '{ t:"1516-12-28", k:"fetih", etiket:["toprak-kazanc","konu-askeri"], b:"Filistin\'in katılışı: Yafa, Nablus ve Amman", gun:"Aralık 1516", yer:"Yafa, Nablus, Amman", yer_id:"Yafa", kisiler:"Yavuz Sultan Selim, Hadım Sinan Paşa", d:"Gazze muharebesinin ardından Filistin\'in iç ve kıyı şehirleri Osmanlı idaresine girdi; Yafa limanı, Nablus ve Şeria\'nın doğusundaki Amman art arda teslim oldu. Kudüs\'ün bir gün sonra teslim olmasıyla bölgenin tamamı el değiştirmiş olacaktı. Bu şehirler dört asır boyunca Şam eyaletinin sancakları olarak yönetildi.", kaynak:"yafa"',
     '{ t:"1516-12-28", k:"fetih", etiket:["toprak-kazanc","konu-askeri"], b:"Şeria\'nın doğusu: Amman\'ın Osmanlı idaresine girişi", gun:"Aralık 1516", yer:"Amman", yer_id:"Amman", kisiler:"Yavuz Sultan Selim, Hadım Sinan Paşa", d:"Gazze muharebesinin ardından Mısır seferine hazırlanan Osmanlı kuvvetleri güneye inerken Şeria\'nın doğusundaki Amman da Osmanlı idaresine girdi. Filistin\'in kıyı ve iç şehirleri (Yafa, Nablus, Sayda, Akkâ, Kudüs) ise Mercidâbık\'tan sonra 1516 sonbaharında zaten el değiştirmişti. Bu şehirler dört asır boyunca Şam eyaletinin sancakları olarak yönetildi.", ic_not_d:"17 Eyl 2026 (KOSU13-YAMA · YAMA-KOSU10-KALAN G4-A6A-Y8): Yafa ve Nablus bu günden 1516-09-27\'ye taşındı (TDV nablus \'922 sonbaharı\'); madde Amman\'a daraltıldı. Amman\'ın 28 Aralık günü ölçülmedi.", kaynak:"yafa"'),
    ("data/olaylar_ek5.js",
     '{ t:"1516-12-29", k:"fetih", etiket:["toprak-kazanc","konu-askeri"], b:"Kudüs\'ün Osmanlı idaresine geçişi", gun:"4 Zilhicce 922 / 29 Aralık 1516", yer:"Kudüs", yer_id:"Kudüs", kisiler:"Yavuz Sultan Selim", d:"Mercidâbık sonrası güneye ilerleyen Osmanlı kuvvetleri karşısında Kudüs direnmeden teslim oldu ve Yavuz Sultan Selim devletin ileri gelenleri ve askerle birlikte şehre geldi.',
     '{ t:"1516-12-29", k:"siyaset", etiket:["siyaset","konu-siyasi","konu-din"], b:"Yavuz Sultan Selim\'in Kudüs\'e gelişi", gun:"4 Zilhicce 922 / 29 Aralık 1516", yer:"Kudüs", yer_id:"Kudüs", kisiler:"Yavuz Sultan Selim", ic_not_d:"17 Eyl 2026 (KOSU13-YAMA): TDV kudus \'Kudüs, padişahın gelişinden önce muhtemelen Ekim 1516\'da Osmanlı yönetimine girmişti\' — el değiştirme 1516-10-01 maddesine taşındı; bu gün padişahın gelişidir.", d:"Mercidâbık sonrası Osmanlı yönetimine direnmeden geçmiş olan Kudüs\'e, Gazze muharebesinin ardından Yavuz Sultan Selim devletin ileri gelenleri ve askerle birlikte geldi.'),
]

# ═══════════════════════════ YENİ ÇEKİRDEK MADDELER ═════════════════════
YENI = r'''
// ─── 17 Eyl 2026 · KOSU10-KALAN partisi (1.MURAT M-4357) · denetim/YAMA-KOSU10-KALAN-0917.json ───

{ t:"1387-01-01", kesinlik:"yil", k:"fetih", etiket:["toprak-kazanc","konu-askeri"], b:"Vodina'nın fethi (1386-1387 kışı)", gun:"1386-1387 kışı (TDV'nin tercihi; kroniklerde 1386, 1391 ve Üsküp sonrası)", yer:"Vodina (Edessa), Makedonya", yer_id:"Vodina (Edessa)", kisiler:"", d:"Makedonya'da Vardar'ın batısındaki Vodina, Osmanlı kroniklerinin farklı yıllar verdiği bir fetihle Osmanlı idaresine girdi. Hoca Sâdeddin fethi 1386'ya koyar; TDV kuvvetli ihtimalle 1386-1387 kışının kabul edilmesini daha uygun bulur. Fethi yapan komutan kaynakta açıkça anılmadığı için kişi yazılmadı.", ic_not_d:"G4-A6A-Y2 · yerleşim d: 1387-01-01 ile birlikte · kisiler boş (Evrenos Bey TDV cümlesinde fethi yapan olarak geçmiyor)", kaynak:"vodina" },

{ t:"1415-01-01", kesinlik:"yil", k:"fetih", etiket:["toprak-kazanc","konu-askeri"], b:"Manisa'nın Çelebi Mehmed idaresine girişi — Saruhanoğulları Manisa kolunun sonu", gun:"1411-1415 arası (en geç 1415)", yer:"Manisa, Saruhan", yer_id:"Manisa", kisiler:"Çelebi Mehmed", d:"Fetret Devri'nin sonunda Saruhan ülkesi Çelebi Mehmed'in idaresine girdi ve Saruhanoğulları'nın Manisa kolu tarihe karıştı. TDV bu geçişi 1411'den sonra ve 1415'ten önceye koyar; Osmanlı idaresi 818'den (1415) biraz önce tam olarak kurulabildi. Tarih bu yüzden aralığın en geç ucuyla yazıldı.", ic_not_d:"G4-A6A-Y6 · yerleşim d: 1415-01-01 ile birlikte", kaynak:"saruhanogullari · manisa" },

{ t:"1427-01-01", kesinlik:"yil", k:"kayip", etiket:["toprak-kayip","konu-askeri"], b:"Yergöğü'nün Eflak'a geçişi", gun:"1427", yer:"Yergöğü (Giurgiu), Tuna", yer_id:"Yergöğü (Giurgiu)", kisiler:"", d:"Tuna kıyısındaki Yergöğü (Giurgiu) kalesi 1427'de Eflaklılar tarafından geri alındı. Kale, Osmanlı'nın Tuna'nın kuzey kıyısındaki ilk tutunma noktalarından biriydi ve yirmi yılı aşkın bir süre Eflak'ta kaldı.", ic_not_d:"G4-A6A-Y7 · 1427-01-01'deki alakasız maddeler (Niksar, Tata, Alâiye) bu kırılmayı sayaçta kapatıyordu (D147)", kaynak:"yergogu" },

{ t:"1450-01-01", kesinlik:"yil", k:"fetih", etiket:["toprak-kazanc","konu-askeri"], b:"Yergöğü'nün yeniden Osmanlı kontrolüne girişi (853/1449-50)", gun:"853 H (24 Şubat 1449 – 13 Şubat 1450); gün kaynakta yok", yer:"Yergöğü (Giurgiu), Tuna", yer_id:"Yergöğü (Giurgiu)", kisiler:"", d:"Eflaklıların 1427'de geri aldığı Yergöğü kalesi 853 yılında tekrar Osmanlı kontrolü altına girdi. Hicrî yıl 1449'un şubatından 1450'nin şubatına uzandığından tarih aralığın içinde kalan 1450 yılbaşıyla yazıldı. Kale bundan sonra Tuna geçişini koruyan bir Osmanlı serhaddi oldu.", ic_not_d:"G4-A6A-Y7 · yerleşim d: 1450-01-01 ile birlikte (eski 1449-01-01 hicrî aralığın 54 gün öncesiydi)", kaynak:"yergogu" },

{ t:"1516-10-01", kesinlik:"ay", k:"fetih", etiket:["toprak-kazanc","konu-askeri"], b:"Kudüs ve Filistin şehirlerinin Osmanlı yönetimine girişi", gun:"1516 sonbaharı — Kudüs için muhtemelen Ekim 1516 (Ercan); Nablus '922 sonbaharı'", yer:"Kudüs, Nablus, Yafa, Sayda, Akkâ", yer_id:"Kudüs", kisiler:"Yavuz Sultan Selim", d:"Mercidâbık zaferinin ardından Yavuz Sultan Selim'in 27 Eylül'de Şam'a ulaşmasıyla Suriye ve Filistin şehirleri birbiri ardına Osmanlı yönetimine geçti. TDV Nablus'un 1516 sonbaharında, Kudüs'ün ise padişahın gelişinden önce muhtemelen Ekim 1516'da Osmanlı yönetimine girdiğini belirtir. Padişah Kudüs'e ancak Gazze muharebesinden sonra, 29 Aralık 1516'da geldi.", ic_not_d:"G4-A6A-Y8 · Nablus/Yafa/Sayda/Akkâ yerleşim günü 1516-09-27 (gün komşudan: Şam), Kudüs 1516-10-01 (ay) — bu madde ikisini birlikte anlatır (D147)", kaynak:"kudus · nablus · sayda · selim-i" },

{ t:"1532-01-01", kesinlik:"yil", k:"kayip", etiket:["toprak-kayip","konu-askeri"], b:"Bitlis Safevî himayesine geçti — Ulama ve Fil Paşa kuşatmayı kaldırdı", gun:"938 h. / 1532 (ay ve gün kaynakta yok)", yer:"Bitlis · Van gölü batısı", yer_id:"Bitlis", kisiler:"Tekelü Ulama, Fil Paşa, IV. Şeref Han, Şah Tahmasb", d:"Tekelü Ulama'nın Osmanlı'ya sığınıp Bitlis arazisine beylerbeyi tayin edilmesi üzerine Osmanlı'ya tâbi Bitlis hâkimi Şeref Han Safevîlere sığındı. Ulama ile Diyarbekir Beylerbeyi Fil Paşa 938 yılında kaleyi kuşattı; kale üç ay dayandı ve Şah Tahmasb'ın yaklaştığını öğrenen Osmanlı kuvvetleri kuşatmayı kaldırdı. Şah, Bitlis ile Ahlat, Muş ve Hınıs yörelerini Şeref Han'a bağladı.", ic_not_d:"K2-BITLIS-M1 · kaynak hicrî yıl veriyor (938 = Ağustos 1531–Ağustos 1532) · yerleşim s:safevi 1532-01-01 ile birlikte", kaynak:"Dağlar 2016, Vakanüvis 1/1, s.185 · bitlis (TDV: 'IV. Şeref Han, Kanûnî döneminde Osmanlı tâbiiyetinden ayrılıp yeniden İran himayesine sığınmıştı')" },

{ t:"1534-01-01", kesinlik:"yil", k:"fetih", etiket:["toprak-kazanc","konu-askeri"], b:"Bitlis Ulama Paşa eliyle kesin olarak Osmanlı'ya katıldı", gun:"1534 (ay ve gün kaynakta yok)", yer:"Bitlis · Van gölü batısı", yer_id:"Bitlis", kisiler:"Tekelü Ulama, Şemseddin Bey", d:"İlk kuşatması sonuçsuz kalan Tekelü Ulama, Bitlis hâkimi Şeref Han'ı 940 (1533) yılında öldürdü ve Bitlis'i 1534'te kesin olarak Osmanlı topraklarına kattı. Şeref Han'ın oğlu Şemseddin Bey, Bitlis'in Ulama'ya verilmesinin ardından Rojeki aşiretiyle Safevîlere iltica etti. Bitlis üzerindeki Osmanlı hâkimiyeti 1555 Amasya Antlaşması ile Safevîlerce de tanındı.", ic_not_d:"K2-BITLIS-M2 · yerleşim d: 1534-01-01 ile birlikte · 1534-01-01'deki iki alakasız madde bu kırılmayı sayaçta kapatıyordu (D147)", kaynak:"bitlis · seref-han" },

{ t:"1578-08-24", k:"fetih", etiket:["toprak-kazanc","konu-askeri"], b:"Tiflis'in savaşsız ele geçirilmesi — Kahet ve İmeret'in itaati", gun:"24 Ağustos 1578", yer:"Tiflis, Kartli", yer_id:"Tiflis", kisiler:"Lala Mustafa Paşa", d:"Çıldır zaferinden sonra ilerleyen Lala Mustafa Paşa kumandasındaki Osmanlı ordusu 24 Ağustos'ta Tiflis'e ulaştı ve boşaltılmış kaleyi savaşsız ele geçirdi. Tiflis'in fethinden sonra İmeret ve Kahet yöneticileri Osmanlılar'a itaatlerini bildirdiler.", ic_not_d:"G2-TIFLIS + G3-A6C-P0058B · Kaheti v: başı 1578-08-24 en erken sınırdır (gün komşudan: Tiflis) · kuyrukta kronoloji_gurcistan aynı günü taşır", kaynak:"tiflis · gurcistan" },

{ t:"1588-09-01", k:"fetih", etiket:["toprak-kazanc","konu-askeri"], b:"Karacadağ (Ahar) hâkimi Şâhverdi Han'ın Cafer Paşa'ya itaati — Merend'in Osmanlı idaresine girmesi", gun:"997 (1588) — gün kaynakta yok; aynı yılın Gence seferiyle eşlendi", yer:"Ahar, Merend", yer_id:"Ahar (Karadağ)", kisiler:"Cafer Paşa, Şâhverdi Han", d:"Tebriz Beylerbeyi Cafer Paşa 1588'de hükmünü Merend'e genişletti; Karacadağ hâkimi Şâhverdi Han itaat edip oğlunu Tebriz'e gönderdi. Kaynaklar yalnız yılı verir; gün aynı yılın Gence seferiyle eşlenmiştir.", ic_not_d:"G2-MADDE-1588 · gün komşudan: Gence (TDV murad-iii 1 Eylül 1588)", kaynak:"safeviler · Eskandar Beg, tr. Savory II s.582-583 · Kütükoğlu 1962 s.168 · Petrushevsky 1949 s.168-169" },

{ t:"1589-01-01", kesinlik:"yil", k:"fetih", etiket:["toprak-kazanc","konu-askeri"], b:"Cığalazâde Sinan Paşa'nın Nihâvend'i alıp kale kurması — Luristan'ın itaati", gun:"996 sonu – 997 (1588 sonu – 1589)", yer:"Nihâvend, Luristan", yer_id:"Nihâvend", kisiler:"Cığalazâde Sinan Paşa, Şâhverdi", d:"Bağdat Valisi Cığalazâde Sinan Paşa 1588 yılı sonlarında Nihâvend'i alıp burada bir kale yaptırdı; Luristan hâkimi Şâhverdi Osmanlı'ya itaat etti. Kaynaklar gün vermez; tarih yıl düzeyindedir.", ic_not_d:"G2-MADDE-1589 · TDV 996 sonları (1588), fetihten sonraki ilk yılbaşı 1589-01-01 (Luristan/Nihâvend yerleşim kırılmasıyla aynı gün)", kaynak:"nihavend--iran · Iranica NEHĀVAND (998/1589) · Kütükoğlu 1962 s.182-183" },

{ t:"1722-11-01", kesinlik:"ay", k:"diplomasi", etiket:["diplomasi","toprak-kazanc","konu-diplomasi"], b:"Hacı Dâvud'un Şirvan hâkimiyetinin Osmanlı'ca tanınması", gun:"Kasım 1722", yer:"Şirvan (Şemâhî)", yer_id:"Şamahı", kisiler:"Hacı Dâvud", d:"Osmanlılar Kasım 1722'de Rus kuvvetlerine bölgeden çekilmeleri için ültimatom verirken Hacı Dâvud'un Şirvan üzerindeki hâkimiyetini tanıdılar. Hacı Dâvud böylece Kırım hanı gibi Osmanlı'ya bağlı vasal bir hükümdar oldu.", ic_not_d:"G3-A6C-C0020 · Şamahı v: 1722-11-01 ile birlikte", kaynak:"sirvan" },

{ t:"1731-11-15", k:"fetih", etiket:["savas","toprak-kazanc","konu-askeri"], b:"Hekimoğlu Ali Paşa'nın Tebriz'i geri alması", gun:"15 Kasım 1731 (15 Cemâziyelevvel 1144)", yer:"Tebriz", yer_id:"Tebriz", kisiler:"Hekimoğlu Ali Paşa", d:"1730'da Safevîlerin eline geçen Tebriz'i Hekimoğlu Ali Paşa 15 Kasım 1731'de yeniden ele geçirdi; aynı harekâtta Urmiye de alınmıştı. Ancak 10 Ocak 1732'de yapılan antlaşmayla Tebriz İran'a bırakıldı.", ic_not_d:"G3-A6C-TEBRIZ · yerleşim d: 1731-11-15→1732-01-08 ile birlikte · bitiş günü G3-A6C-ANTLASMA kararına bağlı", kaynak:"tebriz · mahmud-i--osmanli" },

{ t:"1770-10-09", k:"kayip", etiket:["toprak-kayip","savas","konu-askeri"], b:"Dinyester ağzında Akkirman Kalesi düştü", gun:"9 Ekim 1770 (ESBE: 28 Eylül eski takvim)", yer:"Akkirman, Besarabya", yer_id:"Akkirman", kisiler:"", d:"Bender'in düşmesinden kısa süre sonra Dinyester ağzındaki Akkirman da Rus kuvvetlerinin eline geçti. Kale, Küçük Kaynarca Antlaşması (1774) ile Osmanlılar'a geri verildi.", ic_not_d:"G5-RUS-AKKIRMAN · 1770-09-27 Bender maddesi bu kırılmayı sayaçta kapatıyordu ama Akkirman'ı anmıyordu (D147)", kaynak:"akkirman · ESBE «Турецкие войны России»" },

{ t:"1788-09-01", kesinlik:"ay", k:"kayip", etiket:["toprak-kayip","savas","konu-askeri"], b:"Hotin'in Avusturya-Rus kuvvetlerince zaptı", gun:"Eylül 1788 (TDV; ESBE «Хотин» 1787 diyor)", yer:"Hotin, Boğdan", yer_id:"Hotin", kisiler:"", d:"1787'de başlayan savaşta Avusturya ve Rusya'nın ortak kuvvetleri Hotin'i kuşattı ve kale 1788 Eylülünde bu kuvvetlerce alındı. Ziştovi Antlaşması'na göre Avusturya kaleyi Rus barışının bitimine kadar emaneten elinde tuttu; Hotin 1792 Yaş Antlaşması ile Osmanlılar'a geri verildi.", ic_not_d:"G5-RUS-HOTIN · isg 1788-09-01→1792-01-09 avusturya ile birlikte", kaynak:"hotin · zistovi-antlasmasi" },

{ t:"1789-11-01", kesinlik:"ay", k:"kayip", etiket:["savas","konu-askeri"], b:"Avusturya ordusunun (Coburg) Bükreş'i işgali", gun:"Kasım 1789 başı (eski takvim)", yer:"Bükreş, Eflak", yer_id:"Bükreş", kisiler:"Saxe-Coburg Prensi Josias", d:"Rimnik yenilgisinin ardından Avusturya ordusu Kasım 1789 başında Eflak'ın merkezi Bükreş'i işgal etti. Şehir 4 Ağustos 1791 Ziştovi Antlaşması ile Osmanlı tarafına iade edildi.", ic_not_d:"G5-RUS-1788-89 · Bükreş isg 1789-11-01→1791-08-04 ile birlikte · fiilî tahliye günü bulunamadı (t = antlaşma)", kaynak:"ESBE «Турецкие войны России» · zistovi-antlasmasi" },

{ t:"1789-11-14", k:"kayip", etiket:["toprak-kayip","savas","konu-askeri"], b:"Bender Kalesi'nin Potemkin'e teslimi", gun:"14 Kasım 1789 (ESBE: 3 Kasım eski takvim)", yer:"Bender, Besarabya", yer_id:"Bender", kisiler:"Potemkin", d:"1787-1792 Osmanlı-Rus savaşında Dinyester üzerindeki Bender Kalesi Potemkin kumandasındaki Rus ordusuna teslim oldu. Kale 1792 Yaş Antlaşması ile Osmanlılar'a geri verildi.", ic_not_d:"G5-RUS-BENDER · TDV'de bender maddesi yok", kaynak:"ESBE «Турецкие войны России» · ESBE «Бендеры»" },

{ t:"1790-10-24", k:"kayip", etiket:["toprak-kayip","savas","konu-askeri"], b:"Kili Kalesi'nin Ruslara teslimi", gun:"24 Ekim 1790 (ESBE: 13 Ekim eski takvim)", yer:"Kili, Tuna ağzı", yer_id:"Kili", kisiler:"Gudoviç", d:"1790 seferinde Tuna ağzındaki Kili kalesi 4 Ekim'de (eski takvim) kuşatıldı ve dokuz gün sonra General Gudoviç'e teslim oldu. Kale 1792 Yaş Antlaşması ile Osmanlılar'a geri verildi.", ic_not_d:"G5-RUS-KILI", kaynak:"kili · ESBE «Килия»" },

{ t:"1809-09-26", k:"kayip", etiket:["toprak-kayip","savas","konu-askeri"], b:"İsmail Kalesi'nin General Zass'a teslimi", gun:"26 Eylül 1809 (ESBE: 14 Eylül eski takvim)", yer:"İsmail, Tuna", yer_id:"İsmail", kisiler:"General Zass", d:"1806-1812 Osmanlı-Rus savaşı sırasında Tuna üzerindeki İsmail kalesi General Zass'a teslim oldu. Kale 1812 Bükreş Antlaşması ile Besarabya'yla birlikte Rusya'ya bırakıldı.", ic_not_d:"G5-RUS-ISMAIL", kaynak:"ESBE «Измаил, город» · ESBE «Турецкие войны России»" },
'''
METIN.append(("data/olaylar_p0917kosu13.js", "\n];", YENI.rstrip() + "\n\n];"))
