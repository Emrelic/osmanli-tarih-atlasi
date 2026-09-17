# -*- coding: utf-8 -*-
"""KOSU13-YAMA — HARİTA YAMALARINI TEK PAKETTE BİRLEŞTİRİR (salt okuma → JSON).
17 Eylül 2026 · 1.MURAT sevki (DALGA-BEKLEYEN C2).

Girdi (hepsi ÖNERİ, hiçbiri veriye inmemiş — ölçüldü, OLCUM-KOSU13-0917.json):
    YAMA-0057-SAVA · YAMA-0059-HAZAR · YAMA-0060-IRAN1723 · YAMA-0063-IRAN ·
    YAMA-0063-HAZAR · YAMA-0060-KRONO (yalnız harita_yamalari H1-H4)
Ön koşul paket: YAMA-A6C-0913 + koordinatör hükmü (KOSU10-SONRASI.md §A6c)
    — Tebriz 1725-07-28 · Tebriz 1731-11-15 penceresi · antlaşma 1732-01-08 ·
    Nahçıvan t 1735-06-19. Bu paket A6C'yi UYGULAMAZ, onun SONRASINI hesaplar (D166).

Ne yapar:
  ① her kalemin "eski" değerini BUGÜNKÜ veride arar — tutmazsa kalem REDDEDİLİR
    (ölçemediğini eleyen süzgeç değil: reddi sayıp basar)
  ② yeni TAM s/d dizisini üretir (`_sahiplik_uygula.py` diziyi DEĞİŞTİRİR, eklemez)
  ③ denetler: sıra/çakışma/sıfır uzunluk · Değişmez 1 (yeni boşluk) · künye penceresi
    · renk · Değişmez 2/2s (±30 gün, çekirdek + paketteki madde önerileri) ·
    kaldırılan günlerin kırılmasız kalıp kalmadığı · 3 km yakınlık (konum kalemi)
  ④ aynı adın data/yer_yama*.js kopyalarını listeler — güncellenmezse bir sonraki
    `_sahiplik_uygula.py` koşusu düzeltmeyi GERİ ALIR (D017)
Çıktı: denetim/YAMA-KOSU13-BIRLESIK-0917.json
    py denetim/ARAC-KOSU13-BIRLESTIR-0917.py
"""
import copy
import datetime as dt
import io
import json
import math
import os
import subprocess
import sys

sys.stdout.reconfigure(encoding="utf-8", errors="replace")
KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
os.chdir(KOK)
sys.path.insert(0, os.path.join(KOK, "arac"))
import girdi  # noqa: E402
import renkler  # noqa: E402

SON = "1923-10-29"

# ═══════════════════════════════ ANAHTARLAR (A6C hükmü SONRASI) ═══════════
TEB1 = ("1725-07-28", "1730-08-12")   # A6C: TDV tebriz 28 Temmuz 1725 · t kaynaksız (TDV "1730")
TEB2 = ("1731-11-15", "1732-01-08")   # A6C: Hekimoğlu geri alışı · antlaşma TDV hemedan 10 Receb 1144
ERD = ("1723-11-10", "1732-01-08")    # Özcoşar-Açar 2024 · antlaşma günü A6C (0060 #16 01-10 yazmıştı)
REV = ("1724-10-03", "1735-10-03")    # Bilgili 2016 (BOA MD 132) · TDV nadir-sah--iran
NAH_T = "1735-06-19"                  # A6C P-0076-a hükmü
NAH_F = {"A": "1724-01-01", "B": "1724-08-11"}
ERDB_F = {"A": TEB1[0], "B": "1725-09-09"}


def S(f, t, d):
    return {"f": f, "t": t, "d": d}


def W(f, t, **ek):
    p = {"f": f, "t": t}
    p.update(ek)
    return p


def safevi_ac(on):  # "önceki" başlangıçlı safevi + rus + safevi (H2 eski biçimi)
    return [S(on, "1723-09-23", "safevi"), S("1723-09-23", "1734-01-01", "rusya"),
            S("1734-01-01", "1736-03-08", "safevi")]


# ═══════════════════════════════ KALEMLER ═════════════════════════════════
# islem: ("s", eski_alt_dizi, yeni_alt_dizi) | ("d~", eski_pencere, yeni_pencere)
#        ("d+", pencere) | ("konum", lat, lon)
# kova : UYGULA · KARAR (varyantlı) · BLOKE · BILDIRIM
K = []


def kalem(kod, ad, kaynak_yama, kova, islem=None, varyant=None, **ek):
    K.append(dict(kod=kod, ad=ad, kaynak_yama=kaynak_yama, kova=kova,
                  islem=islem or [], varyant=varyant or {}, **ek))


# ── 0057-SAVA ─────────────────────────────────────────────────────────────
AV = [S("1699-01-26", "1918-11-11", "avusturya")]
kalem("B1", "Bosna Brod'u (Bosanski Brod)", "0057-SAVA #1", "UYGULA",
      [("s", AV, [S("1718-07-21", "1739-09-28", "avusturya"), S("1908-10-07", "1918-11-11", "avusturya")]),
       ("d~", W("1538-01-01", "1699-01-26"), W("1538-01-01", "1718-07-21")),
       ("d+", W("1739-09-28", "1908-10-07"))],
      kaynak="Karlofça metni ('Bred on the part of Bosnia … shall be drawn out') · TDV karlofca · TDV bosna-hersek (1718 şerit · 1739 iade · 7 Ekim 1908) · TDV pasarofca-antlasmasi (21 Temmuz 1718) · TDV mahmud-i--osmanli (28 Eylül 1739)",
      not_="1739-09-28 TDV; çekirdek Belgrad maddesi 1739-09-18 (10 gün, ölü slug belgrad-antlasmalari) — K8'e bak")
kalem("B2", "Bosna Dubiçası (Bosanska Dubica)", "0057-SAVA #2", "UYGULA",
      [("s", AV, [S("1908-10-07", "1918-11-11", "avusturya")]),
       ("d~", W("1538-01-01", "1699-01-26"), W("1538-01-01", "1908-10-07"))],
      kaynak="Karlofça metni · TDV karlofca · TDV bosna-hersek (7 Ekim 1908)",
      not_="1718-1739 Pasarofça şeridine girip girmediği BULUNAMADI (K7) — girerse Brod gibi pencere EKLENİR (ekleyici değişiklik, bu kalemi bozmaz)")
kalem("B3", "Bosna Novi'si (Bosanski Novi)", "0057-SAVA #3", "UYGULA",
      [("s", AV, [S("1908-10-07", "1918-11-11", "avusturya")]),
       ("d~", W("1556-01-01", "1699-01-26"), W("1556-01-01", "1908-10-07"))],
      kaynak="Karlofça metni · TDV karlofca · TDV bosna-hersek (Novi kadısı Ömer Efendi · 1872 demiryolu · 7 Ekim 1908)")
kalem("B4", "Kostayniçe (Kostajnica)", "0057-SAVA #4", "UYGULA",
      [("konum", 45.232, 16.539)],
      kaynak="GeoNames 3197594 (Hrvatska Kostajnica) · Karlofça metni ('farthermost Bank of the said River Unna')",
      not_="dönem DOĞRU, yalnız nokta Una'nın Hırvat yakasına taşınır (~12,5 km)")
kalem("B5", "Jasenovaç (Jasenovac)", "0057-SAVA #5", "BILDIRIM",
      not_="DOKUNULMADI — metin 'on the part of Bosnia' sayıyor ama nokta Una-Sava'nın Hırvat yakasında; Karlofça sınır komisyonu (1699-1703) akademik çalışması gerekiyor")

# ── 0059-HAZAR / 0063-HAZAR (Rus yanı) ────────────────────────────────────
DER_E = [S("1509-01-01", "1722-08-23", "safevi"), S("1722-08-23", "1735-03-10", "rusya"),
         S("1735-03-10", "1736-03-08", "safevi")]
kalem("R1", "Derbend", "0059-HAZAR #1 + 0063-HAZAR inceltme 1", "KARAR", karar="K1",
      varyant={v: [("s", DER_E, [S("1509-01-01", "1722-09-03", "safevi"), S("1722-09-03", x, "rusya"),
                                  S(x, "1736-03-08", "safevi")])]
               for v, x in (("A", "1735-03-21"), ("B", "1735-05-08"))},
      kaynak="BRE 'Персидский поход 1722–23' (23 авг. (3 сент.)) · BRE 'Гянджинский трактат 1735' 10(21) Mart · TDV derbend--dagistan · B: Kurukin 2010 (ÇEVRİMİÇİ AYNA, basılı nüshayla karşılaştırılmadı)",
      not_="Başlangıç 1722-09-03 (J→G) iki varyantta da aynı")
BAK_E = [S("1501-07-01", "1723-07-26", "safevi"), S("1723-07-26", "1735-03-10", "rusya"),
         S("1735-03-10", "1736-03-08", "safevi")]
kalem("R2", "Bakü", "0059-HAZAR #2 + 0063-HAZAR inceltme 2", "KARAR", karar="K1",
      varyant={v: [("s", BAK_E, [S("1501-07-01", "1723-08-06", "safevi"), S("1723-08-06", x, "rusya"),
                                  S(x, "1736-03-08", "safevi")])]
               for v, x in (("A", "1735-03-21"), ("B", "1735-05-01"))},
      kaynak="BRE 'Персидский поход' (26 июля (6 авг.)) · Iranica BAKU i · B: Kurukin 2010 (AYNA, doğrulanmadı) · ⚠️ TDV baku '1734' çelişki")
TAR_E = [S("1501-07-01", "1736-03-08", "safevi")]
kalem("R3", "Tarki (Tarku)", "0059-HAZAR #3", "KARAR", karar="K6",
      varyant={
          "A": [("s", TAR_E, [S("1501-07-01", "1722-08-24", "safevi"), S("1722-08-24", "1726-01-01", "kumuk-samhalligi"),
                               S("1726-01-01", "1735-03-21", "rusya"), S("1735-03-21", "1736-03-08", "safevi")])],
          "B": [("s", TAR_E, [S("1501-07-01", "1722-08-24", "safevi"), S("1722-08-24", "1735-03-21", "rusya"),
                               S("1735-03-21", "1736-03-08", "safevi")])]},
      kaynak="Bukanova & Abdusalamov (CyberLeninka; Butkov'dan) · Abdusalamov, Vestnik AGU 2011 · TDV kumuklar ('1725')",
      not_="A ÖN KOŞULLU: devletler.js `kumuk-samhalligi` t 1607-01-01 → ≥1726-01-01 VE renkler.py BOYALAR'a renk (bugün YOK → HARİTA DELİĞİ). B tâbiiyeti doğrudan idare gibi gösterir (D089) — kayda not şart")
kalem("R4", "Ağraham burnu", "0059-HAZAR #4 + 0063-HAZAR inceltme 4", "KARAR", karar="K2",
      varyant={v: [("s", TAR_E, [S("1501-07-01", "1722-08-08", "safevi"), S("1722-08-08", x, "rusya"),
                                  S(x, "1736-03-08", "safevi")])]
               for v, x in (("A", "1735-03-21"), ("B", "1735-08-23"))},
      kaynak="BRE (28 июля высадка) · Abdusalamov 2011 · Salamova 2007 (Sulak) · B: Garunova, Vestnik DGU 2016 + Asvarov–Magaramov 2022 (Kutsal Haç 12 Ağu 1735 J yıkımı, fiilî hat Terek)")
TAL_E = [S("1501-07-01", "1736-03-08", "safevi")]
TAL_Y = [S("1501-07-01", "1723-01-01", "safevi"), S("1723-01-01", "1732-09-02", "rusya"),
         S("1732-09-02", "1736-03-08", "safevi")]
for kod, ad in (("R5", "Lenkeran"), ("R6", "Astara")):
    kalem(kod, ad, "0063-HAZAR T1", "UYGULA", [("s", TAL_E, TAL_Y)],
          kaynak="Iranica BOUNDARIES ii ('abandoned Gīlān and Ṭāleš') · TDV talis-hanligi · Özdamirova 2024 (arşiv) · bitiş Kurukin 2010 (AYNA) + Iranica 1732",
          not_="başlangıç yalnız YIL (1723) — Reşt/Enzeli ile aynı tarih kararı")
SAL_E = [S("1538-01-01", "1723-09-23", "safevi"), S("1723-09-23", "1732-01-21", "rusya"),
         S("1732-01-21", "1736-03-08", "safevi")]
kalem("R7", "Salyan", "0063-HAZAR S1", "KARAR", karar="K3",
      varyant={v: [("s", SAL_E, [S("1538-01-01", "1724-01-01", "safevi"), S("1724-01-01", "1724-09-11", "rusya"),
                                  S("1724-09-11", "1727-01-01", "safevi"), S("1727-01-01", x, "rusya"),
                                  S(x, "1736-03-08", "safevi")])]
               for v, x in (("A", "1732-09-02"), ("B", "1735-05-01"))},
      kaynak="Kurukin 2010 (AYNA, doğrulanmadı — 1724 garnizonu ve 11 Eyl 1724 baskını YALNIZ buna dayanıyor) · Özdamirova 2024 · Iranica MOḠĀN",
      not_="ÖLÇÜLDÜ (ARAC-KOSU13-KURA-YAKA): atlas noktası Kura'nın SOL/kuzey yakasında, 3,0 km — NE 10m genelleme payı içinde, KESİN DEĞİL")
kalem("R8", "Kuba", "0063-HAZAR K1", "BLOKE",
      not_="`kuba-hanligi` künyesi YOK (devletler.js `kuba` = Kongo Kuba Krallığı!) + renk YOK. Yazar: künye gelene kadar DOKUNMA; B (s:rusya) garnizonsuz bölgeyi Rus ordusu gibi boyar")
kalem("R9", "Şâbüran", "0063-HAZAR K1", "BLOKE", not_="R8 ile aynı karar")
REST_Y = TAL_Y
kalem("R10", "Reşt", "0060-KRONO H1", "UYGULA", [("s", TAL_E, REST_Y)],
      kaynak="Iranica BOUNDARIES ii · BRE Персидский поход · Garunova 2016 (Reşt'te redut ve Yeni kale) · bitiş Iranica 1732 + Kurukin 2010 (AYNA)")
for kod, ad, on in (("R11", "Sârî", "1596-01-01"), ("R12", "Âmül", "1596-01-01"),
                    ("R13", "Bârfurûş (Bâbil)", "1596-01-01"), ("R14", "Ferahâbâd", "1611-01-01"),
                    ("R15", "Eşref (Behşehr)", "1596-01-01"), ("R16", "Esterâbâd (Gürgân)", "1510-12-02")):
    kalem(kod, ad, "0060-KRONO H2", "UYGULA", [("s", safevi_ac(on), [S(on, "1736-03-08", "safevi")])],
          kaynak="Iranica BOUNDARIES ii ('never effectively occupied by the Russians') · Iranica RUSSIA i ('no attempts were made to send garrisons')",
          not_="D030: atlas antlaşmayı değil TASARRUFU boyar — Rus boyası kalkar")
GIL_E = [S("1592-01-01", "1723-09-23", "safevi"), S("1723-09-23", "1734-01-01", "rusya"),
         S("1734-01-01", "1736-03-08", "safevi")]
kalem("R17", "Lâhîcan", "0060-KRONO H3", "UYGULA",
      [("s", GIL_E, [S("1592-01-01", "1725-01-01", "safevi"), S("1725-01-01", "1732-09-02", "rusya"),
                     S("1732-09-02", "1736-03-08", "safevi")])],
      kaynak="Iranica BOUNDARIES ii (1725 işgal) · bitiş Iranica 1732 + Kurukin 2010 (AYNA)")
kalem("R18", "Bender Enzeli", "0060-KRONO H4", "UYGULA",
      [("s", GIL_E, [S("1592-01-01", "1723-01-01", "safevi"), S("1723-01-01", "1732-09-02", "rusya"),
                     S("1732-09-02", "1736-03-08", "safevi")])],
      kaynak="BRE Персидский поход · Iranica BOUNDARIES ii")
kalem("R19", "Mahmudâbâd", "0060-KRONO yazilmayanlar · 0063-HAZAR", "BILDIRIM",
      not_="1723-09-23 → 1732-01-21 Rus dönemi KAYNAKSIZ (Petersburg + zayıf Reşt günü); dokunulmadı. Salyan'dan bu iki gün kalkınca bu kayıt onları TEK BAŞINA taşır")

# ── 0060-IRAN1723 + 0063-IRAN (Osmanlı yanı) ──────────────────────────────
kalem("O1", "Revan", "0060-IRAN1723 #1-2", "UYGULA",
      [("d~", W("1724-09-28", "1735-06-19"), W(*REV))],
      kaynak="Bilgili 2016 (Ermeni Araştırmaları 53, s.107; BOA MD 132) 'Köprülü-zâde Abdullah Paşa'nın 3 Ekim 1724'de' · TDV nadir-sah--iran '15 Cemâziyelevvel'de (3 Ekim) Revan'ı' · TDV revan",
      anahtar="K-REVAN")
for kod, ad, no in (("O2", "Eçmiyadzin", 3), ("O3", "Şerur (Sharur)", 4), ("O4", "Mâku", 5)):
    kalem(kod, ad, "0060-IRAN1723 #%d = 0063-IRAN #%d (devir, AYNI hüküm)" % (no, {3: 15, 4: 14, 5: 13}[no]),
          "UYGULA", [("d+", W(*REV))],
          kaynak="Bilgili 2016 s.107 (TD 901, 1727 Revan eyaleti tahriri nahiye listesi)",
          gun_komsudan="Revan · Bilgili 2016 / TDV nadir-sah--iran — şart ①②③④ ✓ (O1 ile AYNI ADIMDA)",
          bagli="K-REVAN")
kalem("O5", "Gümrü (Aleksandropol)", "0063-IRAN #6 (0060 #6 'bulunamadı'yı yeniden ölçtü)", "KARAR", karar="K5",
      varyant={"EVET": [("d+", W(*REV))]},
      kaynak="Alandağlı 2024 (Külliyat) · Bilgili 2016 (TD 901 Şüregel nahiyesi — Arpaçay doğusu ÇIKARIMDIR) · Yörük & Valiyev 2016 (SUTAD 40)",
      not_="ÖRTÜLÜ OSMANLI — Emre onayı. Adıyla anan kaynak YOK", bagli="K-REVAN")
kalem("O6", "Kliçatak (Suser)", "0063-IRAN #7", "KARAR", karar="K9",
      varyant={"EVET": [("d+", W(*REV))]},
      not_="Kaydın kendi kaynak alanı 'Gümrü kaydından BİREBİR' — §4 ZİNCİRLEME/atlas-referans yasağı; köyün kendi tarihi ARANMADI. O5 inip bu inmezse Revan eyaleti içinde safevi cebi kalır")
kalem("O7", "Norapat", "0063-IRAN #7", "KARAR", karar="K9",
      varyant={"EVET": [("d+", W(*REV))]},
      not_="'Eçmiyadzin kaydından BİREBİR' — O6 ile aynı yasak ve aynı risk")
kalem("O8", "Nahçıvan", "0060-IRAN1723 #7 + 0063-IRAN #10 + A6C P-0076-a", "KARAR", karar="K4",
      varyant={v: [("d~", W("1725-01-01", "1730-08-12"), W(f, NAH_T))] for v, f in NAH_F.items()},
      kaynak="A: TDV nahcivan ('1724-1735 yıllarında Osmanlı idaresinde') · B: Yörük & Valiyev 2016 s.20 (Aktepe 1970 s.53-58) '11 Ağustos 1724' · ayrışma: Bilgili 2016 'Nisan 1723'ten biraz önce' · t: A6C P-0076-a hükmü",
      not_="t 1735-06-19 A6C P-0076-a ile AYNI değişiklik — iki pakette de varsa BİR KEZ uygula", anahtar="K-NAHCIVAN")
kalem("O9", "Ordubad", "0060-IRAN1723 #8", "KARAR", karar="K4",
      varyant={v: [("d~", W("1725-01-01", "1730-08-12"), W(f, NAH_T))] for v, f in NAH_F.items()},
      kaynak="Bilgili 2016 s.117 (TD 905 Nahçıvan livası nahiyesi) · Özcoşar-Açar 2024 · B'de Yörük & Valiyev 2016 Ordubad'ı ADIYLA 11 Ağustos 1724'e koyuyor (komşu günü değil, KENDİ günü)",
      bagli="K-NAHCIVAN", not_="A6C C-0076-b kapanır")
kalem("O10", "Culfa", "0060-IRAN1723 #9 = 0063-IRAN #12", "KARAR", karar="K4",
      varyant={v: [("d+", W(f, NAH_T))] for v, f in NAH_F.items()},
      kaynak="Bilgili 2016 s.117-118 (TD 905: Culha 39 hane, Sisyan nahiyesi)",
      gun_komsudan="Nahçıvan · TDV nahcivan (A) / Aktepe (B) — 34 km, aynı liva tahriri", bagli="K-NAHCIVAN")
kalem("O11", "Merend", "0060-IRAN1723 #10 = 0063-IRAN #11", "UYGULA",
      [("d+", W(*TEB1)), ("d+", W(*TEB2))],
      kaynak="TDV tebriz ('1728'de eyalete … Merend … bağlıydı' · 28 Temmuz 1725)",
      gun_komsudan="Tebriz · TDV tebriz — ① f ✓ (A6C sonrası 07-28) t kaynaksız (TDV '1730') · ② ✓ · ③ aynı eyalet 65 km ✓",
      bagli="K-TEBRIZ", not_="ikinci pencere 0060 #10'un kendi şartı ('A6C eklerse Merend de almalı')")
kalem("O12", "Urmiye", "0060-IRAN1723 #11 = 0063-IRAN #17 · EMRE 17 Eyl şık A", "UYGULA",
      [("d+", W("1724-01-01", TEB1[1]))],
      kaynak="TDV urmiye ('1724 yılında bir defa daha Osmanlı hâkimiyetine girdi') · Bilgili 2016 s.120 (TD 910) — ayrışma: 'Aralık 1725'",
      not_="1731 ikinci pencere BULUNAMADI (Hekimoğlu Urmiye'yi aldı ama bitiş yok) — yazılmadı")
kalem("O13", "Selmâs (Dilman)", "0060-IRAN1723 #12 = 0063-IRAN #16", "UYGULA",
      [("d+", W("1724-01-01", TEB1[1]))],
      kaynak="Bilgili 2016 s.120 (TD 910 Selmâs livası)",
      gun_komsudan="Urmiye · TDV urmiye (Emre kararı A)")
kalem("O14", "Merâga", "0060-IRAN1723 #13 (EMRE: Tebriz ile aynı gün) + A6C sonucu", "UYGULA",
      [("d~", W("1725-08-04", "1730-08-12"), W(*TEB1))],
      kaynak="Emre kararı 17 Eyl · TDV tebriz (28 Temmuz 1725) · ayrışma: Bilgili 2016 s.119 'Mart 1724'",
      anahtar="K-MERAGA", not_="A6C Tebriz'i 07-28'e çekince Merâga İZLER; izlemezse 7 günlük safevi cebi")
for kod, ad, no, sw in (("O15", "Mîyandoab", 14, "Bilgili 2016 s.119 (TD 909 Meraga livası: Miyan-duvâb nahiyesi)"),
                        ("O16", "Mahabad (Sâvücbulak)", 15, "Bilgili 2016 s.119 (TD 909) · TDV tebriz (1728 Sovukbulak) · Özcoşar-Açar 2024 (1727 'Mukri'; 1730 Nâdir 'Mahabad, Merağa ve Mukri')")):
    kalem(kod, ad, "0060-IRAN1723 #%d%s" % (no, " · EMRE: Kürt beylikleri d:" if no == 15 else ""), "UYGULA",
          [("d+", W(*TEB1))], kaynak=sw,
          gun_komsudan="Merâga (O14) · aynı liva tahriri", bagli="K-MERAGA",
          not_="`neden:` alanı 'kaynaksız olacağı için YAZILMADI' diyor — güncellenmeli" if no == 14 else "v: DEĞİL d: (Emre 17 Eyl); 1585-1603 v: yazımı DEĞİŞMEZ")
kalem("O17", "Senendec (Sine)", "0060-IRAN1723 #16 · EMRE: d:", "UYGULA",
      [("d+", W(*ERD))],
      kaynak="Özcoşar-Açar 2024 s.221 '11 Safer 1136 (10 Kasım 1723)' · TDV mahmud-i--osmanli + TDV hemedan (antlaşma; A6C günü 1732-01-08) · Bilgili 2016 dn.88 (TD 1066)",
      anahtar="K-ERDELAN", not_="1730-1731 Safevî ara dilimi GÜNSÜZ — yazılmadı")
for kod, ad, no, km_ in (("O18", "Merîvan", 17, 88), ("O19", "Bâne", 18, 120), ("O20", "Sakkız", 19, 110)):
    kalem(kod, ad, "0060-IRAN1723 #%d · EMRE: d:" % no, "UYGULA", [("d+", W(*ERD))],
          kaynak="Bilgili 2016 s.124 dn.88 (BOA TD 1066, 1727 Erdelân Eyâleti mufassal)",
          gun_komsudan="Senendec · Özcoşar-Açar 2024 / A6C antlaşma günü — aynı eyalet tahriri, ~%d km" % km_,
          bagli="K-ERDELAN")
kalem("O21", "Serdeşt (Sardasht)", "0060-IRAN1723 #20", "BILDIRIM",
      not_="BULUNAMADI — TD 1066/909 listelerinde yok; O16+O19 inince Bâne–Mahabad arasında safevi cebi KALIR (kaynak kararı, §2 emilmesi değil)")
kalem("O22", "Bîcâr", "0060-IRAN1723 #21", "BILDIRIM",
      not_="FERHATPASA-BIRLESIK kur:1801-01-01 bekliyor — o inince soru kalkar")
kalem("O23", "Erdebil", "0063-IRAN #1", "KARAR", karar="K11",
      varyant={v: [("d+", W(f, TEB1[1]))] for v, f in ERDB_F.items()},
      kaynak="TDV erdebil ('1725 sonbaharında' · '1730'da Nâdir geri aldı') · Iranica ARDABĪL (1138/1725-1142/1730) · Bilgili 2016 s.110 (TD 902) 'Ağustos 1725'den az sonra'",
      not_="A: Tebriz günü (A6C sonrası 07-28) — kaynakların ÜÇÜ de alınışı Tebriz'den SONRAYA koyuyor ⇒ A birkaç hafta ERKEN boyar. B: 1 Muharrem 1138 — kaynaklarla çelişmeyen EN ERKEN gün, ama bir SINIR, olay günü değil; madde ister",
      anahtar="K-ERDEBIL")
kalem("O24", "Halhâl", "0063-IRAN #2", "KARAR", karar="K11",
      varyant={v: [("d+", W(f, TEB1[1]))] for v, f in ERDB_F.items()},
      kaynak="Bilgili 2016 s.120 (TD 910 Halhâl livası nahiyeleri) · Iranica KHALKHAL (aynı alt bölge adları) · Iranica ARDABĪL ('the whole of Azarbaijan … 1137/1725')",
      gun_komsudan="Tebriz'e DOĞRUDAN (Erdebil üzerinden değil — zincir yasağı); A/B Erdebil ile aynı",
      not_="Bilgili 'Aralık 1725' cümlesi Urmiye teslimini anlatıyor — Halhâl'e taşınmadı")
kalem("O25", "Meşkinşehr (Hiyav)", "0063-IRAN #3", "KARAR", karar="K5+K11",
      varyant={v: [("d+", W(f, TEB1[1]))] for v, f in ERDB_F.items()},
      kaynak="Iranica ARDABĪL ('the whole of Azarbaijan fell into Turkish hands (1137/1725)') · TD 902/910/911 listelerinde YOK",
      not_="ÖRTÜLÜ OSMANLI — Emre onayı; Ahar·Sarâb·Erdebil ile çevrili")
for kod, ad in (("O26", "Sarâb"), ("O27", "Miyâne")):
    kalem(kod, ad, "0063-IRAN #4 + A6C sonucu", "KARAR", karar="K11",
          varyant={v: [("d~", W("1725-08-04", "1730-08-12"), W(f, TEB1[1]))] for v, f in ERDB_F.items()},
          kaynak="Bilgili 2016 s.111 (TD 902: Erdebil kazası Serab / Germ-rûd kazası Miyane) · TDV tebriz 1728 listesinde YOK",
          not_="bugünkü 1725-08-04 Tebriz'den DEVRALINMIŞ; doğru anahtar K-ERDEBIL. `m:\"Tebriz\"` 1725-30 için Erdebil olmalı — kd: borcu (yama yok)",
          bagli="K-ERDEBIL")
kalem("O28", "Ahar (Karadağ)", "0063-IRAN #5", "BLOKE", karar="K10",
      not_="K-HOY bekliyor (A6C C-0076-c + 0060 #23: Bilgili 'Mayıs 1724'). Hoy kararı inmeden uygulanmaz (D166). Geçici risk: Tebriz 07-28'e çekilince Ahar'ın 08-04'ü 7 günlük safevi cebi bırakır",
      kaynak="Bilgili 2016 s.121 (TD 911 Hoy, Karadağ ve Kapan livaları, Mayıs 1724) · Iranica AHAR")
kalem("O29", "Kotur", "0063-IRAN #8 (0060 #22 'bulunamadı'yı yeniden ölçtü)", "BLOKE", karar="K5+K10",
      not_="ÖRTÜLÜ (Emre onayı) VE K-HOY bekliyor. 1639-1923 kaynak çelişkisi ayrıca (0063-IRAN #9, Uluerler 2015 ↔ TDV maku)",
      kaynak="TDV van · Uluerler 2015 · TDV maku · Bilgili 2016 s.121")
kalem("O30", "Hoy", "0060-IRAN1723 #23 · A6C C-0076-c", "BILDIRIM", karar="K10",
      not_="d f 1724-09-28 Revan maddesinden devralınmış (kaynaksız); Bilgili 'Mayıs 1724' · TDV hoy yıl '1724' · bitiş TDV hoy '1739' ↔ 1730. Ahar ve Kotur buna bağlı")
kalem("O31", "Kazvin · Zencan · Sultâniye", "0063-IRAN #18", "BILDIRIM",
      not_="TDV iran 1727 antlaşması bu eyaletleri Osmanlı'ya bırakıyor, atlas safevi; fiilî alınış ARANMADI. TDV'nin kendi 1727 günü tutarsız (hemedan 22 Eyl 1728 ↔ ahmed-iii 4 Eki 1727)")

# ═══════════════════════════════ KRONOLOJİ — HARİTAYLA BİRLİKTE ═══════════
# (UYGULA-2'nin C1 listesinde OLMAYAN, bu paketin kırılmalarını taşıyan maddeler)
MADDE = [
    {"kod": "M1", "t": "1722-09-03", "tur": "düzeltme", "yer": "olaylar_ek7.js:208 'Rus kuvvetlerinin Derbend'i alması'",
     "kaynak_yama": "0059-HAZAR #5", "degisiklik": "t 1722-08-23→1722-09-03 · gun '3 Eylül 1722 (Rus takvimiyle 23 Ağustos)' · d'ye deniz+kara yürüyüşü cümlesi · kaynak 'dagistan · derbend--dagistan · BRE Персидский поход 1722–23'",
     "bag": "yer_yama.js:132 t 1722-08-23→1722-09-03 (anahtar dosya+t+b) · ekokuma_rusiran iki anahtarı da TAŞIYOR ✓"},
    {"kod": "M2", "t": "1735-03-21", "tur": "düzeltme", "yer": "olaylar_ek7.js:209 'Gence Antlaşması'",
     "kaynak_yama": "0059-HAZAR #6", "degisiklik": "t 1735-03-10→1735-03-21 · gun '21 Mart 1735 (Rus takvimiyle 10 Mart)' · kaynak '+ BRE Гянджинский трактат 1735'",
     "bag": "yer_yama.js:133 t güncellenir · ekokuma_rusiran iki anahtar ✓"},
    {"kod": "M3", "t": "1723-08-06", "tur": "yeni", "yer": "çekirdek olaylar (UYGULA seçer)", "kaynak_yama": "0059-HAZAR #7",
     "degisiklik": "'Rus kuvvetlerinin Bakü'yü alması' — metin 0059-HAZAR #7'de HAZIR"},
    {"kod": "M4", "t": "1726-01-01", "tur": "yeni", "yer": "çekirdek olaylar", "kaynak_yama": "0059-HAZAR #8",
     "degisiklik": "'Tarku şamhallığının Ruslarca kaldırılması' — YALNIZ K6=A seçilirse kırılması olur; B'de kırılmasız madde (2t) olur"},
    {"kod": "M5", "t": "1722-07-29", "tur": "düzeltme (kuyruk)", "yer": "kronoloji_rusya.js 'İran (Hazar) seferi başladı'",
     "kaynak_yama": "0059-HAZAR #9", "degisiklik": "t 1722-07-18→1722-07-29 (J→G)"},
    {"kod": "M6", "t": "1724-10-03", "tur": "düzeltme", "yer": "olaylar_ek5.js:521 'Revan'ın yeniden fethi'",
     "kaynak_yama": "0060-IRAN1723 #1", "degisiklik": "t 1724-09-28→1724-10-03 · gun '3 Ekim 1724' · kisiler 'Köprülüzâde Abdullah Paşa' · metne gün kaynağı (Bilgili 2016, BOA MD 132) + 'Karpi (Üçkilise), Şerür, Makû ve Şüregel nahiyeleri de Revan eyaletine bağlandı' (D147)",
     "bag": "yer_yama.js:187 t güncellenir · 1724-09-28 kırılması (Hoy, Ahar-sonrası) 5 gün içinde maddeli KALIR"},
    {"kod": "M7", "t": "1735-10-03", "tur": "yeni", "yer": "çekirdek olaylar", "kaynak_yama": "0060-IRAN1723 #2",
     "degisiklik": "'Revan'ın Nâdir Han'a teslimi' — metin 0060 #2 madde_istegi'nde HAZIR (kaynak nadir-sah--iran)"},
    {"kod": "M8", "t": "K4", "tur": "düzeltme", "yer": "olaylar_ek5.js:522 'Nahçıvan'ın alınışı'",
     "kaynak_yama": "0060-IRAN1723 #7 / 0063-IRAN #10",
     "degisiklik": "A: t 1724-01-01 · gun '1724 (gün/ay kaynakta yok; Bilgili 'Nisan 1723'ten biraz önce')' — B: t 1724-08-11 · gun '11 Ağustos 1724' · kaynak + 'Aktepe 1970 s.53-58 (Yörük-Valiyev 2016)'. İkisinde de: 'Revan'ın düşmesinden sonra' ÇIKAR, Ordubad ve Culfa adları GİRER",
     "bag": "yer_yama.js:89 t 1725-01-01→(K4) · ekokuma_lale '1725-01-01|heyeti' AYRI madde (Nahçıvan değil) — dokunulmaz"},
    {"kod": "M9", "t": "1724-01-01", "tur": "yeni", "yer": "çekirdek olaylar", "kaynak_yama": "0060-IRAN1723 #11 (A)",
     "degisiklik": "'Urmiye ve Selmâs'ın Osmanlı idaresine geçişi' · gun '1724 (TDV; Bilgili 2016 Aralık 1725 der)' · kaynak urmiye"},
    {"kod": "M10", "t": "1723-11-10", "tur": "yeni", "yer": "çekirdek olaylar", "kaynak_yama": "0060-IRAN1723 #16",
     "degisiklik": "'Erdelan'ın merkezi Senendec'in (Sine) teslimi' — metin HAZIR · kaynak Özcoşar-Açar 2024 (doi 10.29029/busbed.1518775)"},
    {"kod": "M11", "t": "1732-01-08", "tur": "metin", "yer": "olaylar_ek5.js:275 (Ahmed Paşa antlaşması; A6C günü 01-10→01-08)",
     "kaynak_yama": "0060-IRAN1723 #16", "degisiklik": "metne 'Erdelan' eklenir (D147)"},
    {"kod": "M12", "t": "1730-08-12", "tur": "metin", "yer": "olaylar_ek6.js:25 (Nâdir'in taarruzu)",
     "kaynak_yama": "0063-IRAN #1-2 (A)", "degisiklik": "metne 'Erdebil ve Halhal' + kaynağa 'erdebil' (D147)"},
    {"kod": "M13", "t": "1725-09-09", "tur": "yeni — YALNIZ K11=B", "yer": "çekirdek olaylar", "kaynak_yama": "0063-IRAN #1 (B)",
     "degisiklik": "'Erdebil'in alınışı' — metin 0063-IRAN #1'de HAZIR"},
    {"kod": "M14", "t": "1725-07-28", "tur": "metin", "yer": "olaylar_ek5.js:273 (Tebriz; A6C 08-04→07-28)",
     "kaynak_yama": "0060-IRAN1723 #10", "degisiklik": "metne 'Merend' eklenebilir (D147) — gün değişikliği A6C'nin"},
    {"kod": "M15", "t": "1731-11-15", "tur": "yeni — A6C hükmünün EKSİĞİ", "yer": "çekirdek olaylar",
     "kaynak_yama": "A6C hükmü 'Tebriz 1731-11-15 geri alınışı eklenir' · 0060-IRAN1723 #11 kaynak alıntısı",
     "degisiklik": "TASLAK: t:'1731-11-15', k:'fetih', b:'Hekimoğlu Ali Paşa'nın Tebriz'i geri alması', gun:'15 Kasım 1731', yer_id:'Tebriz', d:'Hemedan ve Kirmanşah'ı kurtaran Hekimoğlu Ali Paşa önce Urmiye'yi, ardından Tebriz'i Nâdir'in kuvvetlerinden geri aldı; şehir 1732 antlaşmasıyla yeniden İran'a bırakıldı.', kaynak:'hekimoglu-ali-pasa' — TDV alıntısı (0060 #11'den): «Önce Rûmiye'yi (Urmiye), ardından da … (15 Kasım 1731) … Tebriz'i alan». ÖLÇÜLDÜ: çekirdek+kuyrukta bu günde madde YOK, A6C'de metin YOK ⇒ inmezse Tebriz VE Merend'in 1731-11-15 kırılması MADDESİZ (uygulayıcıda ENGEL)"},
]
# UYGULA-2'nin ŞU AN indirdiği (C1) ve bu paketin kırılmalarını taşıyan maddeler:
C1_MADDE = {"1723-01-01": "0060-KRONO #1", "1725-01-01": "0060-KRONO #3", "1732-09-02": "0060-KRONO #5",
            "1724-09-11": "0063-KRONO #1", "1735-05-01": "0063-KRONO #4", "1735-05-08": "0063-KRONO #5",
            "1735-08-23": "0063-KRONO #6", "1723-09-23": "0060-KRONO #2", "1732-01-01": "0060-KRONO #4"}
PAKET_MADDE = {m["t"]: m["kod"] for m in MADDE if m["t"][0].isdigit() and "YALNIZ" not in m["tur"]}

# ═══════════════════════════════ ÖLÇÜM ════════════════════════════════════
Y = girdi.yukle(sessiz=True)
ADA = {}
for y in Y:
    ADA.setdefault(y["ad"], []).append(y)

JS = r"""
const fs=require('fs');const cik={ol:[],yy:[]};
for(const f of fs.readdirSync('data').filter(x=>/^olaylar.*\.js$/.test(x))){
  global.window={};try{eval(fs.readFileSync('data/'+f,'utf8'));}catch(e){continue;}
  for(const k of Object.keys(global.window)){const v=global.window[k];if(!Array.isArray(v))continue;
    for(const o of v)if(o&&o.t)cik.ol.push({t:o.t,b:o.b,f});}}
for(const f of fs.readdirSync('data').filter(x=>/^yer_yama.*\.js$/.test(x))){
  global.window={};try{eval(fs.readFileSync('data/'+f,'utf8'));}catch(e){continue;}
  for(const k of Object.keys(global.window)){const v=global.window[k];if(!Array.isArray(v))continue;
    for(const r of v)if(r&&r.ad)cik.yy.push({f,k,ad:r.ad,alan:['s','d','v','isg'].filter(a=>r[a]!==undefined)});}}
process.stdout.write(JSON.stringify(cik));
"""
NJ = json.loads(subprocess.run(["node", "-e", JS], capture_output=True, text=True,
                               encoding="utf-8", cwd=KOK).stdout)


def gun(s):
    s = s if len(s) == 10 else (s + "-01" if len(s) == 7 else s + "-01-01")
    return dt.date(int(s[:4]), int(s[5:7]), int(s[8:10])).toordinal()


OL = [(gun(o["t"]), o) for o in NJ["ol"]]


def yakin_madde(g, esik=30):
    x = gun(g)
    return sorted(((abs(a - x), o["t"], (o.get("b") or "")[:50]) for a, o in OL if abs(a - x) <= esik))


DEV = girdi.oku_devletler()
KUNYE = {}
for d in DEV:
    KUNYE.setdefault(d.get("id"), d)
    if d.get("harita"):
        KUNYE.setdefault("harita:" + d["harita"], d)
BOY = renkler.BOYALAR


def kirilmalar(r):
    out = set()
    for kat in ("s", "d", "v"):
        for p in r.get(kat) or []:
            for u in (p["f"], p["t"]):
                if "1281-01-01" < u < SON:
                    out.add(u)
    return out


def bosluklar(r):
    ps = sorted([(p["f"], p["t"]) for kat in ("s", "d", "v") for p in (r.get(kat) or [])])
    if not ps:
        return []
    bas = r.get("kur") or ps[0][0]
    son, out = bas, []
    for f, t in ps:
        if f > son:
            out.append((son, f))
        son = max(son, t)
    if son < SON:
        out.append((son, SON))
    return out


def uygula(r, islemler, hata):
    r = copy.deepcopy(r)
    for op in islemler:
        if op[0] == "s":
            eski, yeni = op[1], op[2]
            s = r.get("s") or []
            n = len(eski)
            yer = [i for i in range(len(s) - n + 1) if s[i:i + n] == eski]
            if len(yer) != 1:
                hata.append("s: 'eski' alt dizisi bugünkü veride %d kez bulundu (1 olmalı)" % len(yer))
                continue
            r["s"] = s[:yer[0]] + yeni + s[yer[0] + n:]
        elif op[0] == "d~":
            d = r.get("d") or []
            yer = [i for i, p in enumerate(d) if p["f"] == op[1]["f"] and p["t"] == op[1]["t"]]
            if len(yer) != 1:
                hata.append("d~: eski pencere %s→%s bulunamadı" % (op[1]["f"], op[1]["t"]))
                continue
            yeni = dict(d[yer[0]])
            yeni.update(op[2])
            d = list(d)
            d[yer[0]] = yeni
            r["d"] = d
        elif op[0] == "d+":
            d = list(r.get("d") or [])
            if any(p["f"] == op[1]["f"] and p["t"] == op[1]["t"] for p in d):
                hata.append("d+: pencere ZATEN VAR (uygulanmış?)")
                continue
            d.append(dict(op[1]))
            r["d"] = sorted(d, key=lambda p: p["f"])
        elif op[0] == "konum":
            r["lat"], r["lon"] = op[1], op[2]
    return r


def denetle_kayit(eski, yeni):
    b = []
    for kat in ("s", "d", "v"):
        ps = yeni.get(kat) or []
        for p in ps:
            if p["f"] >= p["t"]:
                b.append("🔴 %s sıfır/ters uzunluk %s→%s" % (kat, p["f"], p["t"]))
        for a, c in zip(ps, ps[1:]):
            if c["f"] < a["t"]:
                b.append("🔴 %s çakışma %s→%s / %s→%s" % (kat, a["f"], a["t"], c["f"], c["t"]))
    yeni_bos = set(bosluklar(yeni)) - set(bosluklar(eski))
    for bb in yeni_bos:
        b.append("🔴 Değişmez 1: YENİ boşluk %s→%s" % bb)
    for p in yeni.get("s") or []:
        if p in (eski.get("s") or []):
            continue
        k = p["d"]
        ku = KUNYE.get(k) or KUNYE.get("harita:" + k)
        if not ku:
            b.append("🔴 künye YOK: %s" % k)
        else:
            kf, kt = ku.get("f") or "0000", ku.get("t") or "9999"
            if p["f"] < kf or p["t"] > kt:
                b.append("🔴 künye penceresi aşılıyor: %s %s→%s (künye %s %s→%s)" % (k, p["f"], p["t"], ku.get("id"), kf, kt))
        if (ku or {}).get("harita", k) not in BOY and k not in BOY:
            b.append("🔴 RENK YOK: %s (HARİTA DELİĞİ)" % k)
    return b


rapor = {"uygulanabilir": [], "karar": [], "bloke": [], "bildirim": []}
yeni_gunler, kalkan_gunler = {}, {}
sonuclar = []
for k in K:
    kay = ADA.get(k["ad"], [])
    satir = {x: k[x] for x in k if x not in ("islem", "varyant") and k[x] not in (None, "", {}, [])}
    if "not_" in satir:
        satir["not"] = satir.pop("not_")
    if k["kova"] == "BILDIRIM" or (k["kova"] == "BLOKE" and not k["islem"]):
        rapor["bildirim" if k["kova"] == "BILDIRIM" else "bloke"].append(satir)
        continue
    if len(kay) != 1:
        satir["RED"] = "kayıt %d kez bulundu" % len(kay)
        rapor["bloke"].append(satir)
        continue
    eski = kay[0]
    satir["dosya"] = "data/" + eski["_kaynak"]
    satir["yer_yama_kopyasi"] = ["data/%s (%s: %s)" % (c["f"], c["k"], "/".join(c["alan"]) or "yalnız kd/m/k")
                                 for c in NJ["yy"] if c["ad"] == k["ad"]]
    varyantlar = {"TEK": k["islem"]} if k["islem"] else k["varyant"]
    satir["sonuc"] = {}
    for vad, isl in varyantlar.items():
        hata = []
        yeni = uygula(eski, isl, hata)
        bulgu = hata + denetle_kayit(eski, yeni)
        dogan = sorted(kirilmalar(yeni) - kirilmalar(eski))
        kalkan = sorted(kirilmalar(eski) - kirilmalar(yeni))
        for g in dogan:
            yeni_gunler.setdefault(g, set()).add("%s%s" % (k["ad"], "" if vad == "TEK" else "[" + vad + "]"))
        for g in kalkan:
            kalkan_gunler.setdefault(g, set()).add(k["ad"])
        alanlar = {}
        for a in ("s", "d", "lat", "lon"):
            if yeni.get(a) != eski.get(a):
                alanlar[a] = {"eski": eski.get(a), "yeni": yeni.get(a)}
        satir["sonuc"][vad] = {"degisen": alanlar, "dogan_gun": dogan, "kalkan_gun": kalkan,
                               "bulgu": bulgu or ["✓ temiz"]}
    # kopya YALNIZ değişen alanı taşıyorsa önemli (s değişip kopya s taşıyorsa GERİ ALIR)
    degisen = {a for so in satir["sonuc"].values() for a in so["degisen"]}
    satir["yer_yama_kopyasi"] = [
        "data/%s (%s: %s) — %s" % (c["f"], c["k"], "/".join(c["alan"]),
                                   "🔴 GÜNCELLENMELİ (tam dizi yeni değerle)" if set(c["alan"]) & degisen
                                   else "etkilenmez (değişmeyen alan)")
        for c in NJ["yy"] if c["ad"] == k["ad"] and c["alan"]]
    kova = {"UYGULA": "uygulanabilir", "KARAR": "karar", "BLOKE": "bloke"}[k["kova"]]
    rapor[kova].append(satir)


# Değişmez 2 / 2s — doğan her gün için madde
def osmanli_mi(g):
    for k in K:
        for isl in ([k["islem"]] if k["islem"] else list(k["varyant"].values())):
            for op in isl:
                if op[0] in ("d~", "d+") and g in (op[-1]["f"], op[-1]["t"]):
                    return True
    return False


gunler = []
for g in sorted(yeni_gunler):
    ym = yakin_madde(g)
    gunler.append({
        "gun": g, "kimde": sorted(yeni_gunler[g]),
        "eksen": "Değişmez 2 (Osmanlı d:)" if osmanli_mi(g) else "Değişmez 2s (yabancı s:)",
        "cekirdek_30gun": ["%s (%d gün) %s" % (t, a, b) for a, t, b in ym[:3]],
        "paket_maddesi": PAKET_MADDE.get(g), "c1_maddesi": C1_MADDE.get(g),
        "hukum": ("✓ ilgili madde BU pakette (%s)" % PAKET_MADDE[g] if g in PAKET_MADDE else
                  "✓ ilgili madde C1'de (%s) — UYGULA-2" % C1_MADDE[g] if g in C1_MADDE else
                  "🟡 sayaç kapanır, İLGİSİ ÖLÇÜLMEDİ (D147) — en yakın: %s %s" % (ym[0][1], ym[0][2]) if ym else
                  "🔴 MADDESİZ"),
    })
kalkan = []
for g in sorted(kalkan_gunler):
    hala = [y["ad"] for y in Y if g in kirilmalar(y) and y["ad"] not in kalkan_gunler[g]]
    kalkan.append({"gun": g, "kalktigi": sorted(kalkan_gunler[g]), "baska_kayitta_suruyor": hala[:6],
                   "tam_eslesen_madde": [o["t"] + " " + (o.get("b") or "")[:50] for a, o in OL if o["t"] == g],
                   "hukum": ("kırılma SÜRÜYOR" if hala else
                             "⚠️ kırılma TAMAMEN kalkar — aynı günlü madde 2t'ye düşebilir" if any(o["t"] == g for a, o in OL)
                             else "kırılma kalkar, madde yok")})

# 3 km — konum kalemi
yakin = []
for k in K:
    for op in k["islem"]:
        if op[0] == "konum":
            for y in Y:
                if y["ad"] != k["ad"]:
                    d = girdi.km(op[1], op[2], y["lat"], y["lon"])
                    if d < 15:
                        yakin.append("%s ↔ %s %.1f km" % (k["ad"], y["ad"], d))

cikti = {
    "paket": "KOSU13-BIRLESIK-0917",
    "tarih": "2026-09-17",
    "yazan": "KOSU13-YAMA (Opus hazır kıta 1010) · 1.MURAT sevki DALGA-BEKLEYEN C2",
    "durum": "ÖNERİ — VERİYE YAZILMADI (koşu 12 sürüyor, data/ donuk). Uygulayıcı: Oturum 0 / UYGULA, KOŞU 12 BİTTİKTEN SONRA, koşu 13'ten ÖNCE.",
    "rapor": "denetim/YAMA-KOSU13-RAPOR-0917.md",
    "arac": "denetim/ARAC-KOSU13-BIRLESTIR-0917.py (bu dosyayı ÜRETİR) · ARAC-KOSU13-OLCUM-0917.py · ARAC-KOSU13-KURA-YAKA-0917.py",
    "birlestirilen": ["denetim/YAMA-0057-SAVA.json", "denetim/YAMA-0059-HAZAR.json",
                      "denetim/YAMA-0060-IRAN1723.json", "denetim/YAMA-0063-IRAN.json",
                      "denetim/YAMA-0063-HAZAR.json", "denetim/YAMA-0060-KRONO.json (yalnız harita_yamalari H1-H4)"],
    "henuz_gelmeyen": "YAMA-1DUNYA-A-0917 / YAMA-1DUNYA-B-0917 — 17 Eyl ölçümünde diskte YOK; gelince bu araca kalem olarak eklenir",
    "on_kosul": [
        "0 · A6C hükmü (KOSU10-SONRASI §A6c) ÖNCE iner: Tebriz d 1725-08-04→1725-07-28 · Tebriz +1731-11-15→1732-01-08 · antlaşma günü 1732-01-08 (veri/madde/devirler) · Nahçıvan t 1735-06-19 (P-0076-a). Bu paket o SONRAKİ durumu varsayar (D166).",
        "1 · Koşu 12 bitmiş ve 'dosya senin' denmiş olmalı (§7).",
        "2 · C1 (UYGULA-2) kronoloji maddeleri inmiş olmalı: 0060-KRONO #1 #3 #5 · 0063-KRONO #1 #4 #5 #6.",
    ],
    "uygulama_sirasi": [
        "A · Bosna (B1-B4) — bağımsız",
        "B · Rus yanı (R5-R6, R10-R18) + K1/K2/K3/K6 kararlarına göre R1-R4, R7",
        "C · Osmanlı anahtarları: O1 Revan · O8 Nahçıvan (K4) · O14 Merâga · O17 Senendec  [Tebriz A6C'de]",
        "D · bağlılar: O2-O4 (K-REVAN) · O9-O10 (K-NAHCIVAN) · O11 (K-TEBRIZ) · O12→O13 · O15-O16 (K-MERAGA) · O18-O20 (K-ERDELAN) · O23-O27 (K11)",
        "E · Emre onayı gelirse: O5 Gümrü · O25 Meşkinşehr (K5) · K9 gelirse O6-O7",
        "F · MADDE M1-M14 AYNI PARTİDE (Değişmez 2 — maddesiz d: günü uygulayıcıda ENGEL)",
        "G · yer_yama kopyaları (aşağıda) AYNI PARTİDE güncellenir — yoksa sonraki _sahiplik_uygula GERİ ALIR",
        "H · py arac/denetle.py · py arac/renk_olc.py · koşu 13",
        "I · koşu 13 sonrası göz: Brod peteği Sava'nın kuzeyine taşıyor mu (Slavonski Brod/Stara Gradiška noktası YOK — 0057 iki uç uyarısı)",
    ],
    "kararlar": {
        "K1": {"soru": "Derbend/Bakü Rus döneminin sonu: antlaşma günü mü, teslim günü mü?",
               "A": "1735-03-21 (BRE — doğrulanmış)", "B": "Derbend 1735-05-08 · Bakü 1735-05-01 (Kurukin AYNASI, basılı nüsha ile KARŞILAŞTIRILMADI)",
               "oneri": "A şimdi; B yalnız Kurukin basılı nüshada doğrulanırsa (D030 tasarruf ilkesi B'yi destekliyor ama §4 kaynak şartı henüz yok). 0063-KRONO #4/#5 maddeleri iki varyantta da doğru OLAY — yalnız A'da kırılmasız kalır (2t)"},
        "K2": {"soru": "Ağraham burnu Rus döneminin sonu (Sulak mı Terek mi)?",
               "A": "1735-03-21", "B": "1735-08-23 (Garunova 2016 + Asvarov-Magaramov 2022: fiilî hat Terek, Kutsal Haç yıkımı)",
               "oneri": "B — iki akademik kaynak, madde 0063-KRONO #6'da hazır"},
        "K3": {"soru": "Salyan: Kura'nın hangi yakası? (2. Rus döneminin sonu)",
               "A": "1732-09-02 (güney yaka / Iranica MOḠĀN)", "B": "1735-05-01 (kuzey yaka — 1734 buyruğu 'Kura'dan itibaren')",
               "olcum": "atlas noktası SOL/kuzey yakada, en yakın NE10m Kura parçasına 3,0 km — genelleme payı içinde, KESİN DEĞİL",
               "oneri": "koordinatör; ayrıca iki dönemin başlangıç bilgisi yalnız Kurukin AYNASINA dayanıyor"},
        "K4": {"soru": "Nahçıvan/Ordubad/Culfa başlangıcı", "A": "1724-01-01 (TDV yıl)",
               "B": "1724-08-11 (Aktepe 1970 via Yörük-Valiyev 2016 — TDV yılıyla UYUMLU, Ordubad'ı adıyla anıyor)",
               "oneri": "B — TDV ile çelişmiyor, onu inceltiyor; Bilgili 1723 ayrışma notu olarak kalır. B'de M9 (1724-01-01) yalnız Urmiye/Selmâs'ı taşır"},
        "K5": {"soru": "ÖRTÜLÜ OSMANLI — Gümrü (O5) · Meşkinşehr (O25) · Kotur (O29)", "oneri": "EMRE'nin onayı; yazarlar üçünü de öneriyor"},
        "K6": {"soru": "Tarku 1722-1726 tâbiiyeti", "A": "kumuk-samhalligi (künye t ≥1726 + RENK gerekir — devletler.js ve renkler.py SAHİPLERİNE)",
               "B": "rusya 1722-08-24→1735-03-21 tek dönem (D089: tâbiiyet doğrudan idare görünür)",
               "oneri": "A (yazar); ön koşullar gelene kadar kalem BEKLER. B ancak koordinatör açıkça seçerse"},
        "K7": {"soru": "Bosna Dubiçası 1718-1739 Pasarofça şeridinde mi?", "oneri": "kaynak gerekiyor — B2 bundan bağımsız uygulanır"},
        "K8": {"soru": "Bosna ilhakı günü: bu paket 1908-10-07 (TDV bosna-hersek); öteki Bosna kayıtları 1908-10-05",
               "oneri": "atlas referans DEĞİL: bütün Bosna kayıtları TDV'ye (10-07) çekilmeli ya da 10-05 için ayrı kaynak gösterilmeli — ayrı kalem. Çekirdek madde 1908-10-05 iki günü de kapsar"},
        "K9": {"soru": "Kliçatak/Norapat — komşu kaydın BİREBİR kopyası; doğrudan Revan'a bağlanabilir mi?", "oneri": "köylerin 1724-35 durumu ARANMADI; aranmadan zincir uygulanmaz (§4). İnmezse iki küçük safevi cebi"},
        "K10": {"soru": "Hoy başlangıcı (Bilgili 'Mayıs 1724') ve bitişi (TDV hoy '1739')", "oneri": "A6C C-0076-c ile birlikte; Ahar (O28) ve Kotur (O29) buna bağlı"},
        "K11": {"soru": "Erdebil (ve bağlıları Halhâl · Meşkin · Sarâb · Miyâne) başlangıcı",
                "A": "Tebriz günü (A6C sonrası 1725-07-28) — madde gerekmez, ama kaynakların ÜÇÜNDEN de ERKEN",
                "B": "1725-09-09 (1 Muharrem 1138 — kaynaklarla çelişmeyen en erken gün; madde M13 gerekir)",
                "oneri": "yazar A; ben A'nın 'kaynaktan erken boyar' kusurunu kayda geçiriyorum, seçim koordinatörün"},
    },
    "kaynak_sinavi": {
        "arac": "denetim/ARAC-KOSU13-KAYNAK-0917.py → denetim/OLCUM-KOSU13-KAYNAK-0917.json",
        "tdv_http": "24 slug ölçüldü: 24 × 200 (karlofca · bosna-hersek · pasarofca-antlasmasi · mahmud-i--osmanli · derbend--dagistan · dagistan · baku · kumuklar · talis-hanligi · revan · nadir-sah--iran · nahcivan · tebriz · urmiye · hekimoglu-ali-pasa · erdebil · van · maku · iran · hemedan · gilan · sirvan · ahmed-iii · hoy) · belgrad-antlasmalari 302 ÖLÜ (bilinen)",
        "tdv_govde": "19 kilit alıntı 14 madde gövdesinde arandı: 19/19 BULUNDU, bağlam okundu (§4②/⑧). M15'in günü İKİ TDV maddesinde: hekimoglu-ali-pasa VE tebriz ('15 Cemâziyelevvel 1144 (15 Kasım 1731) yeniden ele…')",
        "iranica": "7 adres (ardabil · khalkhal · baku-i · boundaries-ii · russia-i-relations · mogan · ahar) → 403 — bot engeli: ÖLÇÜLEMEDİ (yok DEĞİL); alıntılar yazar oturumların beyanıdır",
        "dogrulanmamis": "Kurukin 2010 ÇEVRİMİÇİ AYNA — basılı nüshayla karşılaştırılmadı. Yalnız ona dayanan: K1-B (Derbend 05-08 · Bakü 05-01) · R7 Salyan 1724 garnizonu + 1724-09-11 · R5/R6/R10/R17/R18 bitişinin Levaşov günü (Iranica '1732' yılı ayrıca destekliyor)",
        "bre": "BRE (Большая российская энциклопедия) — bu oturumda ÖLÇÜLMEDİ; yazar oturum çift tarihleri alıntılamış",
    },
    "kopya_riski_olculdu": "arac/_sahiplik_uygula.py:916-925 kapsam koruması d+s+v BİRLEŞİK kapsama bakar: bayat s: kopyası (hep bitişik) ve s:'nin zaten kapsadığı yerde eksik d: penceresi kapsamı DARALTMAZ ⇒ koruma ötmez, kopya düzeltmenin ÜSTÜNE YAZAR. 20 kopya 'GÜNCELLENMELİ' işaretli.",
    "kalemler": rapor,
    "madde": MADDE,
    "degismez2_gunler": gunler,
    "kalkan_gunler": kalkan,
    "yakinlik_15km": yakin,
}
io.open("denetim/YAMA-KOSU13-BIRLESIK-0917.json", "w", encoding="utf-8").write(
    json.dumps(cikti, ensure_ascii=False, indent=1))

# ── ekran özeti ──
say = {k: len(v) for k, v in rapor.items()}
print("KALEM:", len(K), "|", say)
kotu = []
for kova, ls in rapor.items():
    for s in ls:
        for vad, so in (s.get("sonuc") or {}).items():
            for b in so["bulgu"]:
                if not b.startswith("✓"):
                    kotu.append("%s %s [%s] %s" % (s["kod"], s["ad"], vad, b))
            if "RED" in s:
                kotu.append("%s RED %s" % (s["kod"], s["RED"]))
print("BULGU (✓ dışı):", len(kotu))
for x in kotu:
    print("  ", x)
print("DOĞAN GÜN:", len(gunler))
for g in gunler:
    print("  %s  %-14s %s" % (g["gun"], g["eksen"][:14], g["hukum"][:110]))
    print("              <- %s" % ", ".join(g["kimde"])[:110])
print("KALKAN GÜN:", len(kalkan))
for g in kalkan:
    print("  %s  %s  | sürüyor: %s | madde: %s" % (g["gun"], g["hukum"], g["baska_kayitta_suruyor"][:3], g["tam_eslesen_madde"][:1]))
print("YAKINLIK:", yakin)
kop = [(s["ad"], c) for ls in rapor.values() for s in ls for c in s.get("yer_yama_kopyasi", [])
       if s.get("sonuc") and "GÜNCELLENMELİ" in c]
print("YER_YAMA KOPYASI (değişen kayıtların s/d/v taşıyan kopyası):", len(kop))
for a, c in kop:
    print("  ", a, "←", c)
