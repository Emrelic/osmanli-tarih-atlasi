# -*- coding: utf-8 -*-
"""KOSU13-YAMA · 0052 ailesinin UYGULANABİLİR kalemleri (1.MURAT M-4336).
Uygulayıcı: py denetim/ARAC-KOSU13-UYGULA2-0917.py denetim/PAKET-KOSU13-0052-0917.py [--yaz]
Kaynak kalemler: YAMA-0052B-DEVIR #1 #2 #3 #11 · YAMA-0052B-NOKTA #1 #2 #5 #7 ·
                 YAMA-0052B-RENK (veri) #2 #3 #4-#12 #15
Karar/bloke/devir kalemleri rapora (denetim/YAMA-KOSU13-RAPOR-0917.md §8) yazıldı.
"""
import collections
import io
import json


def S(f, t, d, **ek):
    p = {"f": f, "t": t, "d": d}
    p.update(ek)
    return p


def W(f, t, **ek):
    p = {"f": f, "t": t}
    p.update(ek)
    return p


KG = "gün komşudan: Kars/Revan · TDV kars (788/1386 Timur) · 1406-10-21 çekirdek madde (Kara Yûsuf, TDV karakoyunlular) — TDV Kars için gün vermiyor (YAMA-0052B-RENK)"
KARS_ESKI = [S("1340-01-01", "1410-01-01", "celayirli"), S("1410-01-01", "1469-01-01", "karakoyunlu")]
KARS_YENI = [S("1340-01-01", "1386-01-01", "celayirli", kaynak=KG),
             S("1386-01-01", "1406-10-21", "timurlu", kaynak=KG),
             S("1406-10-21", "1469-01-01", "karakoyunlu", kaynak=KG)]
EG = "gün komşudan: Erzurum · TDV erzurum / TDV akkoyunlular (YAMA-0052B-RENK #2)"
SG = "gün komşudan: Kars · TDV kars (1358 Celâyirli · 1386 Timur · Timur sonrası Karakoyunlu · 1467 Uzun Hasan) — Kars'ın kendi günleri TDV ile birebir değil (YAMA-0052B-RENK #3)"
EB = "TDV elbistan: 1337'ye kadar Moğol/İlhanlı · 1381 Memlük · 1384 Dulkadıroğlu Halil Bey geri aldı (yıl hassasiyeti) — YAMA-0052B-NOKTA #5"

ISLEM = collections.OrderedDict([
    ("Kilitbahir", ("52-D1", [
        ("kur", "1452-01-01", "1463-01-01"),
        ("d~", W("1452-01-01", "1920-04-23"), W("1463-01-01", "1920-04-23", kesinlik={"f": "yil"},
             kaynak="TDV kilitbahir-kalesi: 'İstanbul'un fethinden sonra yapılmış kale' · Kritovulos 867 (1463) inşa görevi, 869 (1464-65) tamamlanma · KOSU10-SONRASI §5-0 (Emre 13 Eyl)")),
    ])),
    ("Tartu (Dorpat)", ("52-D11", [
        ("s", [S("1281-01-01", "1561-11-28", "almanya"), S("1561-11-28", "1621-09-15", "lehistan")],
         [S("1281-01-01", "1558-01-01", "almanya", kesinlik={"t": "yil"}),
          S("1558-01-01", "1582-01-01", "rusya", kesinlik={"f": "yil", "t": "yil"},
            kaynak="Britannica «Livonian War» (Britannica Editors): 1558 Dorpat zaptı · 1582 Yam Zapolski — §4 ara bölge, ikinci kaynak aranacak"),
          S("1582-01-01", "1621-09-15", "lehistan", kesinlik={"f": "yil"})]),
    ])),
    ("Elbistan", ("52-N5", [
        ("s", [S("1281-01-01", "1337-01-01", "memluk"), S("1337-01-01", "1515-06-13", "dulkadir")],
         [S("1281-01-01", "1337-01-01", "ilhanli", kaynak=EB), S("1337-01-01", "1381-01-01", "dulkadir", kaynak=EB),
          S("1381-01-01", "1384-01-01", "memluk", kaynak=EB), S("1384-01-01", "1515-06-13", "dulkadir", kaynak=EB)]),
    ])),
    ("Aşkale", ("52-R2", [
        ("s", [S("1281-01-01", "1348-01-01", "ilhanli"), S("1348-01-01", "1502-01-01", "akkoyunlu")],
         [S("1281-01-01", "1360-01-01", "ilhanli", kaynak=EG), S("1360-01-01", "1385-01-01", "eretna", kaynak=EG),
          S("1385-01-01", "1387-01-01", "karakoyunlu", kaynak=EG), S("1387-01-01", "1403-01-01", "timurlu", kaynak=EG),
          S("1403-01-01", "1408-01-01", "mutahharten", kaynak=EG), S("1408-01-01", "1467-01-01", "karakoyunlu", kaynak=EG),
          S("1467-01-01", "1502-01-01", "akkoyunlu", kaynak=EG)]),
    ])),
    ("Sarıkamış", ("52-R3", [
        ("s", [S("1281-01-01", "1534-06-01", "gurcistan")],
         [S("1281-01-01", "1340-01-01", "ilhanli", kaynak=SG), S("1340-01-01", "1386-01-01", "celayirli", kaynak=SG),
          S("1386-01-01", "1406-10-21", "timurlu", kaynak=SG), S("1406-10-21", "1467-01-01", "karakoyunlu", kaynak=SG),
          S("1467-01-01", "1514-09-06", "akkoyunlu", kaynak=SG), S("1514-09-06", "1534-06-01", "safevi", kaynak=SG)]),
    ])),
    ("Zigetvar", ("52-R15", [
        ("s", [S("1281-01-01", "1566-09-07", "macaristan")],
         [S("1281-01-01", "1526-08-29", "macaristan"),
          S("1526-08-29", "1566-09-07", "avusturya",
            kaynak="TDV sigetvar: 1543 sonrası 'Macar serhad kaleleri', 1566'da başı 'Habsburg Kralı II. Maksimilyan'a' gönderilen Zrínyi · 1526-08-29 yerel fetih günü DEĞİL, Macar tacının el değiştirdiği gün (Mohaç; Eğri/Kanije cb24187 reçetesi) · TDV 1526-1543 bağlılığını SÖYLEMİYOR (YAMA-0052B-RENK #15)")]),
    ])),
])
for i, ad in enumerate(["Arpaçay (Akyaka)", "Digor", "Iğdır", "Gümrü (Aleksandropol)", "Eçmiyadzin",
                        "Norapat", "Beri", "Kliçatak (Suser)", "Küçükperveli"]):
    ISLEM[ad] = ("52-R%d" % (4 + i), [("s", KARS_ESKI, KARS_YENI)])

# Aşkale/Sarıkamış yaması kaydı ÇAPASININ (Erzurum/Kars) zincirine birebir eşitler (D034);
# çapanın kendi künye aşımları (ilhanli→1360 · eretna→1385 · akkoyunlu→1514-09-06) da kopyalanır.
KUNYE_IZIN = {"Aşkale", "Sarıkamış"}

_n = json.load(io.open("denetim/YAMA-0052B-NOKTA.json", encoding="utf-8"))["kalemler"]
_y = {x["no"]: x["yeni"] for x in _n}
EKLE = [
    ("data/yerlesimler_anadolu_0914.js", "Göksun", _y[1]),
    ("data/yerlesimler_anadolu_0914.js", "Gürün", _y[2]),
    ("data/yerlesimler_anadolu_0914.js", "Reşadiye (İskefsir)", _y[7]),
]

METIN = [
    # 52-D2 Kilitbahir maddesi
    ("data/olaylar_p0036.js",
     '{ t:"1452-01-01", k:"kurulus", etiket:["askeri","konu-askeri","konu-siyasi","konu-imar"], b:"Kilitbahir Kalesi\'nin inşası — Çanakkale Boğazı\'nın kontrolü", gun:"İki rivayet: 856/1452 (Evliya Çelebi) · fetihten sonra, 1463-1465 (Tursun Bey, Kritovulos)"',
     '{ t:"1463-01-01", kesinlik:"yil", k:"kurulus", etiket:["askeri","konu-askeri","konu-siyasi","konu-imar"], b:"Kilitbahir Kalesi\'nin inşası — Çanakkale Boğazı\'nın kontrolü", gun:"867 (1463) inşa görevi, 869 (1464-65) tamamlanma (Kritovulos, TDV) · Evliya Çelebi 856/1452 der"'),
    ("data/olaylar_p0036.js",
     "t 1452-01-01 KORUNDU: Kilitbahir yerleşiminin `kur:` ve `d:` başlangıcı 1452-01-01 — bu madde o Değişmez 2 kırılmasını karşılıyor; 1463'e taşımak kırılmayı maddesiz bırakır.",
     "17 Eyl 2026: yerleşimle BİRLİKTE 1463'e alındı (KOSU10-SONRASI §5-0 · YAMA-0052B-DEVIR #1-2 · KOSU13-YAMA). Eski not: 't 1452-01-01 korundu, 1463'e taşımak kırılmayı maddesiz bırakır' — yerleşim de taşındığı için geçersiz."),
    # 52-D3 anakronik anış
    ("data/olaylar_ek.js", "Aynı tarihte elden çıkan diğer yerleşimler: Kilitbahir, Çimpe.",
     "Aynı tarihte elden çıkan diğer yerleşimler: Çimpe."),
    ("data/olaylar_ek.js", "Aynı tarihte katılan öteki yerler: Kilitbahir, Çimpe.",
     "Aynı tarihte katılan öteki yerler: Çimpe."),
]
