# -*- coding: utf-8 -*-
"""
DENETLE — üç değişmezin toplu denetimi
=======================================
CLAUDE.md §3'teki üç node tek-satırlığını tek script'te toplar. Her oturum
kendi başına kopyala-yapıştır yapmak yerine bunu çalıştırır.

Değişmez 1 — sahipsizlik yok        (data/yerlesimler.js)
Değişmez 2 — sessiz toprak değişimi yok  (yerlesimler.js × olaylar*.js)
Değişmez 3 — dört boyut çelişmez (bilinen borç, sayı artmamalı)

Kullanım:
    py arac/denetle.py            # üçünü de koştur, özet bas
    py arac/denetle.py --ayrinti  # her ihlali tek tek listele

İhlal varsa çıkış kodu sıfırdan farklıdır (Değişmez 1: sahipsiz > beklenen;
Değişmez 2: açık > 0; Değişmez 3: çelişki > beklenen üst sınır).
"""
import argparse
import glob
import io
import json
import os
import re
import sys
from datetime import date

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8", errors="replace")

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DATA = os.path.join(KOK, "data")

# Bugün doğru kabul edilen sayılar — CLAUDE.md §3 ile aynı. Sapma varsa uyar.
# 748 -> 761: hatalar 4.docx düzeltmeleri (Çerkezya 5, Dağıstan 3, Şirvan 4,
# Kaheti 1) — gerekçeleri yerlesimler.js içindeki blok yorumlarda.
# 761 -> 765: hatalar 6.docx — Podolya sancak merkezleri (Bar, Meciboj,
# Yazlofça) ve Katîf.
# 765 -> 764: mükerrer Katîf kaydı silindi (î harfiyle aranmadığı için
# olmadığı sanılmıştı; HEAD'de zaten vardı).
# 764 -> 917: data/yerlesimler_afrika.js (Oturum 14, 153 nokta) girdi.py'deki
# izin listesine eklendi. Merge provası iki kez koşturuldu: ad çakışması yok,
# 3 km'den yakın çift yok, Afrika'dan sıfır çelişki katkısı.
BEKLENEN_YERLESIM = 917
# 29 -> 32: Oturum 4'ün Necid noktaları (Buraydâ, Uneyze, Şakrâ) 1744
# öncesinde kasten sahipsiz — orada devlet yoktu, Riyad ve Dir'iye ile
# aynı desen (MIMARI.md §6: 'devletsiz' ile 'veri yok' ayrımı).
# 32 -> 35: Oturum 11 in col/plato dolgu noktalari (Uzboy, Ustyurt bati ve
# dogu) kasten sahipsiz — Karakum ve Rub ul Hali ile ayni desen.
BEKLENEN_SAHIPSIZ = 34
# 427 -> 432: Kirmanşah 1590-1603 (+2), Tarki tâbiiyeti (+2, mevcut günlere
# oturdu), Kaheti tâbiiyeti (+2), Şirvan ara şehirleri (+0, mevcut günler),
# Azak'ın 1637-1642 Kazak işgali (+2), Şehrizor 1554-01-01 -> 1554-08-22 (+0).
# 432 -> 433: hatalar 6.docx — Limni/Semadirek 1657-11-15 geri alışı (+1);
# Limni kaybı mevcut 1656-07-13 gününe, Podolya sancakları mevcut 1672/1699
# günlerine, Varad-Yanova mevcut 1526/1541 günlerine oturdu (+0).
# 433 -> 437: Afrika partisinin dört kırılması (58 ocaklık bölmesi mevcut
# günlere oturdu, tek açık kırılma üretmedi).
# 437 -> 441: merkez oturumun hatalar 8-9 partisi (Rus Hazar işgali, üç işgal
# dönemi). ⚠️ Bu dört kırılma üretimin ORTASINDA girdi ve o yüzden r82 geometrisi
# çöpe gitti — CLAUDE.md §7 kilit kuralının yedinci ihlali.
BEKLENEN_KIRILMA = 441
BEKLENEN_ACIK = 0
# MIMARI.md §3.4 — bilinen borç, tavan bu. 311'den 318'e çıkarıldı: beylik
# düzeltmesiyle 19 yerleşim eklendi (567 -> 586) ve 11'i bu borcu tetikliyor.
# Ölçüldü, indirilemez: m alanının zaman boyutu yok, bir yerleşim bütün tarih
# boyunca tek merkeze bağlı. Birgi/Tire/Ayasuluk m:"İzmir" — ama İzmir 1344-1402
# arası St. Jean Şövalyeleri'nde, Birgi Osmanlı'da. Hangi merkez seçilirse
# seçilsin bir dönemde çelişiyor. Gerçek çözüm zamanlı kd: alanı (VERI-YAPISI).
# 318 -> 325: Likya kıyısı (3) ve Batı Karadeniz (7) noktaları eklendi.
# 325 -> 381: Oturum 4'ün 126 yerleşimi eklendi; m alanının zamansızlık
# borcu nokta sayısıyla doğru orantılı büyüyor. Gerçek çözüm zamanlı kd:.
# 381 -> 383: Kanina ve Oreoi eklendi.
BEKLENEN_CELISKI_UST_SINIR = 383


def oku_pencere(yol, degisken):
    """`window.<degisken> = [ ... ];` biçimindeki dosyayı JSON'a çevirip döker.
    Yöntem uret_petek.py'nin 274-281. satırlarından birebir alınmıştır."""
    js = open(yol, encoding="utf-8").read()
    js = "\n".join(l for l in js.split("\n") if not l.strip().startswith("//"))
    anahtar = f"window.{degisken} = "
    govde = js[js.index(anahtar) + len(anahtar):]
    govde = govde[:govde.rindex("]") + 1]
    j = re.sub(r'([{,]\s*)([A-Za-zçğıöşüÇĞİÖŞÜ_]\w*)\s*:', r'\1"\2":', govde)
    # JS dizi/nesne sonundaki fazladan virgul gecerlidir, JSON'da degildir.
    # olaylar_ek7.js bu yuzden ceviriciyi dusuruyordu: veri saglamdi, arac katiydi.
    j = re.sub(r',(\s*[\]}])', r'\1', j)
    return json.loads(j)


# ⚠️ Yerleşim girdisi artık arac/girdi.py'den okunuyor — motorla AYNI modül,
# aynı dosya listesi. İki aracın veriyi farklı okuması bu depoda bir kez üretimi
# çökertti (sondaki virgül toleransı); tek okuma noktası bunu imkânsız kılar.
# Çok dosyalı girdi açıldığında bu fonksiyon kendiliğinden bütün partileri okur.
def yerlesimleri_yukle():
    sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
    import girdi
    Y = girdi.yukle(sessiz=True)
    yakin = girdi.yakin_ciftler(Y)
    if yakin:
        print(f"  i {len(yakin)} nokta çifti {girdi.YAKINLIK_ESIK_KM} km'den yakın:")
        for d, a, b in yakin[:10]:
            print(f"      {d:.2f} km  {a} <-> {b}")
    return Y


def olaylari_yukle():
    olaylar = []
    for yol in sorted(glob.glob(os.path.join(DATA, "olaylar*.js"))):
        js = open(yol, encoding="utf-8").read()
        m = re.search(r"window\.(OLAYLAR\w*)\s*=", js)
        if not m:
            continue
        olaylar.extend(oku_pencere(yol, m.group(1)))
    return olaylar


def tam(s):
    return s + "-01" if len(s) == 7 else s


def gun_no(s):
    s = tam(s)
    y, a = int(s[0:4]), int(s[5:7])
    g = int(s[8:10]) if len(s) >= 10 else 1
    return date(y, a, g).toordinal()


# ---------------- Değişmez 1 — sahipsizlik yok ----------------
def degismez1(Y):
    def ir(periods, g):
        return bool(periods) and any(p["f"] <= g < p["t"] for p in periods)

    sahipsiz = {}
    # ⚠️ Kesitler 1300'den başlıyordu ve KURULUŞ DEVRİNİ (1281-1300) hiç
    # örneklemiyordu. İnegöl ile Bilecik'in 1281-1299 arası sahipsiz olduğu
    # bu yüzden aylarca görünmedi — Osmanlı çekirdeğinin tam ortasında iki
    # delik. Kuruluş devri seyrek örneklenemez: en hareketli dönem odur.
    for yil in [1285, 1290, 1295] + list(range(1300, 1921, 20)):
        g = f"{yil}-06-15"
        for t in Y:
            kur = t.get("kur")
            if kur and kur > g:
                continue
            if ir(t.get("d"), g) or ir(t.get("s"), g) or ir(t.get("v"), g):
                continue
            sahipsiz.setdefault(t["ad"], []).append(yil)
    return sahipsiz


# ---------------- Değişmez 1b — pencere arası boşluk (ÖRNEKLEMESİZ) ----------------
# ⚠️ Değişmez 1 yukarıda KESİTLERLE ölçülüyor: 1285/1290/1295 ve sonra 20 yılda
# bir. Yirmi yıllık adım, ondan KISA sahipsiz pencereleri tamamen atlıyor.
# Yaşanmış (2026-07-30, Kuzey-Doğu Avrupa hazırlığı): Varşova'nın s: dizisi
#   {1795-10-24 → 1806-11-28 almanya}, {1815-06-09 → 1918-11-11 rusya}
# yani Varşova Dükalığı dönemi (1806-1815) hiç yazılmamış — Lehistan'ın
# başkenti dokuz yıl haritada DELİK. Kesitler 1800 ve 1820'yi örnekliyor,
# 1810'u hiç; hata bu yüzden aylarca görünmedi.
#
# Bu kontrol örnekleme yapmaz: her yerleşimin bütün s/d/v pencerelerini sıraya
# dizip aralarındaki boşluğu ARAR. Kesitli ölçüm kalıyor (kuruluş devri ve
# kasten boş noktalar için ondan okunuyor), bu onun üstüne biniyor.
#
# Penceresi HİÇ OLMAYAN noktalar buraya girmez — onlar kasten boş dolgu
# noktaları ve zaten Değişmez 1'in 34'lük sayısında görünüyorlar.
# 0 -> 1: Doha (Katar) 1913-07-29 → 1916-11-03 KASTEN açık. Osmanlı 1913'te
# çekildi, İngiliz himayesi 1916'da başladı; arada Al Sani'nin bağımsız
# şeyhliği var ve renkler.py'de Katar kimliği yok. Kuveyt ve Bahreyn ile aynı
# desen (ikisi de ilk penceresinden önce kasten sahipsiz). Diğer 19 boşluk
# kapatıldı: Bicâye ve Hacıbey s: bitişleri gerçek fetih gününe taşındı,
# Varşova Dükalığı (1806-1815) lehistan olarak yazıldı, Ankara bozgunu sonrası
# 16 Anadolu şehrine Timur hâkimiyeti (timurlu) eklendi.
BEKLENEN_BOSLUK = 1


def degismez1b(Y):
    """Pencereleri arasında sahipsiz aralık kalan yerleşimleri döker."""
    bulunan = []
    for y in Y:
        araliklar = []
        for kat in ("s", "d", "v"):
            for p in (y.get(kat) or []):
                if p.get("f") and p.get("t"):
                    araliklar.append((p["f"], p["t"]))
        if not araliklar:
            continue                      # kasten boş dolgu noktası
        araliklar.sort()
        # örtüşenleri birleştir (s×d/v örtüşmesi kasıtlı, bkz. dönem sağlığı)
        birlesik = [list(araliklar[0])]
        for f, t in araliklar[1:]:
            if f <= birlesik[-1][1]:
                birlesik[-1][1] = max(birlesik[-1][1], t)
            else:
                birlesik.append([f, t])
        for i in range(len(birlesik) - 1):
            bas, son = birlesik[i][1], birlesik[i + 1][0]
            gun = gun_no(son) - gun_no(bas)
            bulunan.append((gun, y["ad"], bas, son))
    bulunan.sort(reverse=True)
    return bulunan


# ---------------- Değişmez 2 — sessiz toprak değişimi yok ----------------
def degismez2(Y, O):
    ol = [{"g": gun_no(o["t"]), "b": o["b"]} for o in O]
    kir = {}
    for y in Y:
        donemler = (y.get("d") or []) + (y.get("v") or [])
        for p in donemler:
            for d, tip in ((p.get("f"), "kazanc"), (p.get("t"), "kayip")):
                if not d or d <= "1281-01-01" or d >= "1923-10-29":
                    continue
                kayit = kir.setdefault(d, {"t": tip, "ad": set()})
                kayit["ad"].add(y["ad"])
    acik = []
    for d in sorted(kir):
        gd = gun_no(d)
        en_yakin = min(ol, key=lambda o: abs(o["g"] - gd)) if ol else {"g": gd, "b": "—"}
        fark = abs(en_yakin["g"] - gd)
        if fark > 30:
            acik.append((d, kir[d]["t"], sorted(kir[d]["ad"])[:4], en_yakin["b"], fark))
    return kir, acik


# ---------------- Değişmez 3 — dört boyut çelişmez ----------------
def degismez3(Y):
    ix = {y["ad"]: y for y in Y}

    def durum(y, g):
        for p in (y.get("d") or []):
            if p["f"] <= g < p["t"]:
                return "OSMANLI"
        for p in (y.get("v") or []):
            if p["f"] <= g < p["t"]:
                return "tabi"
        for p in (y.get("s") or []):
            if p["f"] <= g < p["t"]:
                return p["d"]
        return "—"

    celiskiler = []
    for g in ("1300-06-15", "1400-06-15", "1500-06-15", "1600-06-15", "1700-06-15", "1800-06-15"):
        for y in Y:
            if not y.get("m"):
                continue
            m = ix.get(y["m"])
            if not m:
                continue
            a, b = durum(y, g), durum(m, g)
            if a == "—" or b == "—" or a == b:
                continue
            # OSMANLI ile tâbi ÇELİŞKİ DEĞİLDİR — ikisi de Osmanlı sistemi içinde.
            # Kullanıcının genel kuralı gereği voyvodalık/hanlık/ocaklık v: yazılıyor
            # (açık kırmızı) ve bunların bağlı olduğu sancak d: kalıyor: Bahçesaray
            # tâbi ama Kefe sancağı doğrudan, Boğdan tâbi ama Hotin rayası doğrudan,
            # Erdel prenslik ama Varad eyalet. Bu ayrım modelin DOĞRU çalışmasıdır;
            # çelişki saymak 28 yanlış alarm üretiyordu.
            if {a, b} == {"OSMANLI", "tabi"}:
                continue
            celiskiler.append((g, y["ad"], y["m"], a, b))
    return celiskiler



# ---------------- Ek denetim — mükerrer kronoloji maddesi ----------------
# Üç değişmezden biri DEĞİL, ama tekrar eden bir hata sınıfı: içerik oturumları
# kronolojiyi yoğunlaştırırken zaten var olan maddeleri yeniden yazıyor.
# İki temizlik turunda 26 mükerrer çıktı (Ali Kuşçu, Sefarad göçü, Çandarlı'nın
# idamı, Mondros, Tanzimat Fermanı...). Kullanıcı bunları haritada tek tek
# gördü; araç görmüyordu.
#
# Ölçüt: aynı YIL içinde başlıkların kelime kümesi benzerliği (Jaccard) >= 0.45.
# İlk denemede "başlığın ilk 40 karakteri" kullanılmıştı ve farklı sözcüklerle
# yazılmış aynı olayı kaçırıyordu ("Sefarad Yahudilerinin" / "Yahudilerin").
#
# ⚠️ İKİNCİ TUR SERTLEŞTİRME — hatalar 5.docx madde 3 ve 4 ve 5
# Kullanıcı elle on üç mükerrer daha buldu, bu araç hiçbirini görmemişti. İki
# kör noktası vardı:
#   1) YIL kutusu. Eşleştirme yalnız aynı takvim yılı içinde yapılıyordu; yılı
#      kayan çiftler tamamen görünmezdi — Selimiye (1574 / 1575), Sultanahmet
#      (1616 / 1617), Barbaros'un kaptan-ı deryalığı (1533 / 1534), Karayazıcı
#      (1596 / 1599). Artık ölçüt ±400 GÜN.
#   2) Türkçe ekler. Tam kelime karşılaştırıldığı için "Paşa'nın" ≠ "Paşa",
#      "öldürülmesi" ≠ "öldürüldü", "sadrazam" ≠ "sadrazamlığa" sayılıyordu;
#      Sokullu suikasti bu yüzden 0.25 çıkıp eşiğin altında kalmıştı. Artık
#      Türkçe harfler katlanıyor ve kelimeler 6 harflik köke indiriliyor.
# Eşik 0.45 → 0.34: yukarıdaki iki düzeltmeyle birlikte on üç mükerrerin hepsi
# yakalandı. Doğru pozitif oranını korumak için gerçekten AYRI olan çiftler
# aşağıya tek tek yazıldı — listeye eklemeden önce iki maddeyi de OKU.
BILINEN_AYRI = {
    ("Halep'in Osmanlı hâkimiyetine girişi", "Şam'ın (Dımaşk) Osmanlı hâkimiyetine girişi"),
    ("Rodos'un İtalyan işgali", "Onikiada'nın İtalyan işgali"),
    ("Erzurum Kongresi'nin toplanması", "Sivas Kongresi'nin toplanması"),
    ("Koron'un Venedik'e kaybı", "Modon'un Venedik'e kaybı"),
    ("Ayamavra'nın (Lefkada) Venedik'e kaybı", "Koron'un Venedik'e kaybı"),
    ("Hotin Kalesi'nin Ruslara kaybı", "Bender'in Ruslara kaybı"),
    ("Alemdar Mustafa Paşa'nın ölümü", "Alemdar Mustafa Paşa ordusuyla İstanbul'a girdi"),
    ("Şah Abbas'ın karşı taarruzu — Tebriz'in kaybı", "Revan'ın Şah Abbas'a kaybı"),
    ("Köprühisar'ın alınışı ve Yenişehir'in kuruluşuna hazırlık", "Yenişehir'in kuruluşu"),
    ("Mudanya limanının abluka altına alınışı", "Mudanya'nın alınışı"),
    ("Tomanbay'ın Kahire'de Memlük sultanı ilân edilmesi",
     "Son Memlük sultanı Tomanbay'ın Terrûce'de yakalanması"),
    ("Oruç Ovası zaferi ve Canbolatoğlu isyanının bastırılması",
     "Alaçayır zaferi ve Kalenderoğlu isyanının bastırılması"),
    ("Barbaros'un Kuzey Ege seferi: İskiros ve Kuzey Sporadlar'ın alınması",
     "Barbaros'un Ege seferi: Venedik'in doğrudan yönettiği adaların alınması"),
    ("Kadızadeliler hareketinin Köprülü Mehmed Paşa tarafından bastırılması",
     "Köprülü Mehmed Paşa'nın şartlı kabulle sadrazamlığa atanması"),
    ("Sofya'nın fethi", "Niş'in fethi"),
    ("Kudüs'ün kaybı", "Şam'ın kaybı"),
}

MUKERRER_ESIK = 0.34
MUKERRER_GUN = 400          # ±400 gün: yıl kayması olan çiftleri de yakalar

# Anlam taşımayan, her başlıkta geçen kelimeler benzerliği şişiriyordu.
_DURAK = {"osmanl", "sultan", "kalesi", "pasan", "seferi"}
_KATLA = str.maketrans({"ı": "i", "İ": "i", "ç": "c", "ğ": "g", "ö": "o",
                        "ş": "s", "ü": "u", "â": "a", "î": "i", "û": "u",
                        "Â": "a", "Î": "i", "Û": "u"})


def _kelimeler(b):
    """Türkçe ekleri yutan kaba kök kümesi: harf katla → 6 harfe kırp."""
    t = b.lower().translate(_KATLA)
    t = "".join(c if (c.isalpha() or c == " ") else " " for c in t)
    kok = {w[:6] for w in t.split() if len(w) > 3}
    return kok - _DURAK


def _gun_no(t):
    p = (t + "-01-01").split("-")
    return date(int(p[0]), int(p[1]), int(p[2])).toordinal()


# ⚠️ ÜÇÜNCÜ TUR — BAŞLIK BENZERLİĞİNİN KÖR NOKTASI (hatalar 7.docx madde 5)
# Jaccard ölçütü "aynı olayın iki yüzü zıt özneyle yazılmış" çiftleri GÖREMİYOR:
#   "IV. Mehmed'in tahttan indirilmesi"  ↔  "II. Süleyman'ın cülusu"
# tek kelime paylaşmıyor, benzerlik SIFIR — araç "0 şüpheli çift" diyor.
# "II. Mustafa'nın cülusu" ↔ "II. Mustafa tahta çıktı" ise 0.125 veriyor.
# Hal'/cülûs, ölüm/cülûs, azil/tayin çiftleri bu kör noktada yaşıyor.
#
# İkinci ölçüt: AYNI GÜN ±3 ve ORTAK KİŞİ ADI. Padişah/paşa adı iki maddede
# birlikte geçiyor ve tarih neredeyse aynıysa, başlıklar bambaşka olsa da
# aynı olayın iki yüzü olma ihtimali yüksek. Kişi adı `kisiler` alanından
# okunur; yoksa başlıktaki büyük harfle başlayan öbekler kullanılır.
MUKERRER_KISI_GUN = 3


def _kisiler_kumesi(o):
    """Maddedeki kişi adlarını normalize eder (soyad/lakap köküne indirir)."""
    ham = (o.get("kisiler") or "") + ", " + (o.get("b") or "")
    parcalar = re.split(r"[,;()]", ham)
    kumesi = set()
    for p in parcalar:
        for w in p.split():
            w = w.strip("'’.\"").translate(_KATLA).lower()
            # sıra sayısı (I., II., IV.) ve kısa/genel kelimeler atılır
            if len(w) < 4 or w in {"sultan", "pasa", "pasanin", "bey", "han",
                                   "hanin", "efendi", "gazi", "sah", "kral"}:
                continue
            if re.fullmatch(r"[ivxlcdm]+", w):
                continue
            kumesi.add(w[:6])
    return kumesi


def mukerrer_maddeler(O):
    """İki ölçüt: (1) başlık benzerliği + ±400 gün, (2) ortak kişi + ±3 gün."""
    S = sorted(O, key=lambda o: o["t"])
    bulunan = []
    for i in range(len(S)):
        gi = _gun_no(S[i]["t"])
        for j in range(i + 1, len(S)):
            fark = _gun_no(S[j]["t"]) - gi
            if fark > MUKERRER_GUN:
                break                       # sıralı: bundan sonrası daha da uzak
            cift = (S[i]["b"], S[j]["b"])
            if cift in BILINEN_AYRI or cift[::-1] in BILINEN_AYRI:
                continue
            a, b = _kelimeler(S[i]["b"]), _kelimeler(S[j]["b"])
            oran = 0.0
            if a and b:
                ortak = len(a & b)
                oran = ortak / (len(a) + len(b) - ortak)
            olcut = None
            if oran >= MUKERRER_ESIK:
                olcut = "başlık"
            elif fark <= MUKERRER_KISI_GUN:
                ka, kb = _kisiler_kumesi(S[i]), _kisiler_kumesi(S[j])
                if ka & kb:
                    olcut = "kişi:" + ",".join(sorted(ka & kb)[:3])
            if olcut is None:
                continue
            bulunan.append((S[i]["t"][:4], oran, S[i], S[j], olcut))
    return bulunan

# ---------------- Ek denetim — dönem sağlığı ----------------
# Üç değişmezden biri DEĞİL; VERI-YAPISI.md'nin d/s/v kuralı: "Dönemler
# çakışmamalı, ters olmamalı, sıfır uzunlukta olmamalı." Tebriz'in sıfır
# uzunluklu dönemi (Çaldıran sonrası hiç Osmanlı görünmemesi) tam bu türden
# bir hataydı ve üç değişmez onu yakalayamazdı — biri o pencerede zaten
# sahipsizdi/kırılmasızdı diye değil, dönem baştan geçersizdi diye.
# ---------------- Ek denetim — KONUM (altıncı denetim) ----------------
# hatalar 2-3 oturumunun devir notu: denetim/MASKE-DISI-NOKTALAR.md
#
# Üç değişmez de VERİ TUTARLILIĞINA bakıyor; hiçbiri noktanın gerçekten KARADA
# olup olmadığına bakmıyor. Kara maskesinin dışında kalan nokta hiç toprak
# sahibi olamaz — peteği ada kuralı tarafından haklı olarak kesilir ve o
# yerleşimin BÜTÜN fetih/kayıp maddeleri haritada hiçbir değişim göstermez.
# Belirti sessizdir: denetim temiz raporlar, harita yanlış çizer.
#
# Yaşanmış: kullanıcı "Taman yarımadasının alınışı maddesinde haritada hiçbir
# değişiklik olmuyor, 1482" dedi. Tarih düzeltildi ama yarımada hâlâ 1475'te
# el değiştiriyordu; sebep Taman'ın 740 m açıkta kalmasıydı. Arama bütün kümeye
# yayılınca 36 nokta çıktı — Gelibolu dâhil (1354 fethi, 1366 kaybı, 1416 deniz
# savaşı: hiçbiri haritaya yansımıyordu). Hepsi en yakın kara hücresine
# kaydırıldı; en büyük sapma 1.39 km, yani normal yakınlaştırmada piksel altı.
#
# Maske uret_petek.py'nin kurduğunun BİREBİR aynısı olmalı: BOLGE kırpması,
# KARA_TOL sadeleştirmesi ve göl çıkarma kuralı (modern baraj gölleri hariç).
# Aksi hâlde araç ile motor farklı şey ölçer.
BEKLENEN_MASKE_DISI = 0
_BOLGE_KUTU = (-12, 1.5, 62, 62)
_KARA_TOL = 0.002
_DOGAL_GOL = {"Lake Il'Men'", "Ozero Kubenskoye", "Mjøsa", "Kostroma Reservoir"}


def konum_denetimi(Y):
    """Maske dışındaki noktaları (km, ad, lat, lon, en_yakın_lat, en_yakın_lon)
    olarak döker. shapely ya da veri-kaynak yoksa None."""
    try:
        from shapely.geometry import shape, box, Point
        from shapely.ops import unary_union, nearest_points
    except ImportError:
        return None
    kaynak = os.path.join(KOK, "veri-kaynak")
    kara_yol = os.path.join(kaynak, "ne_10m_land.geojson")
    if not os.path.exists(kara_yol):
        return None
    bolge = box(*_BOLGE_KUTU)
    ne = json.load(io.open(kara_yol, encoding="utf-8"))
    kara = unary_union([shape(f["geometry"]).buffer(0).intersection(bolge)
                        for f in ne["features"]
                        if shape(f["geometry"]).envelope.intersects(bolge)])
    kara = kara.buffer(0).simplify(_KARA_TOL, preserve_topology=True).buffer(0)
    gol_yol = os.path.join(kaynak, "ne_10m_lakes.geojson")
    if os.path.exists(gol_yol):
        gs = []
        for f in json.load(io.open(gol_yol, encoding="utf-8"))["features"]:
            p = f["properties"]
            g = shape(f["geometry"]).buffer(0)
            if not (g.envelope.intersects(bolge) and g.area > 0.02):
                continue
            ad = p.get("name") or ""
            yil = p.get("year") or -99
            if (p.get("featurecla") == "Reservoir" and ad not in _DOGAL_GOL
                    and (yil >= 1900 or p.get("dam_name"))):
                continue                      # modern baraj gölü: kara sayılır
            g = g.intersection(bolge)
            if not g.is_empty:
                gs.append(g)
        if gs:
            goller = unary_union(gs).buffer(0).simplify(0.01, preserve_topology=True).buffer(0)
            kara = kara.difference(goller).buffer(0)
    disarida = []
    for y in Y:
        p = Point(y["lon"], y["lat"])
        if kara.covers(p):
            continue
        ic, _ = nearest_points(kara, p)
        km = 111.32 * ((ic.x - y["lon"]) ** 2 + (ic.y - y["lat"]) ** 2) ** 0.5
        disarida.append((km, y["ad"], y["lat"], y["lon"], ic.y, ic.x))
    disarida.sort(reverse=True)
    return disarida


def donem_sagligi(Y):
    sifir, ters, cakisan_ayni, sd_ortusme, dv_ortusme = [], [], [], [], []

    def orusuyor(a, b):
        return a["f"] < b["t"] and b["f"] < a["t"]

    for y in Y:
        kategoriler = {"d": y.get("d") or [], "s": y.get("s") or [], "v": y.get("v") or []}
        for kat, donemler in kategoriler.items():
            for p in donemler:
                f, t = p.get("f"), p.get("t")
                if not f or not t:
                    continue
                if f == t:
                    sifir.append((y["ad"], kat, f))
                elif f > t:
                    ters.append((y["ad"], kat, f, t))
            gecerli = sorted((p for p in donemler if p.get("f") and p.get("t")), key=lambda p: p["f"])
            for i in range(len(gecerli) - 1):
                if orusuyor(gecerli[i], gecerli[i + 1]):
                    cakisan_ayni.append((y["ad"], kat, gecerli[i], gecerli[i + 1]))

        # s ile d/v çakışması İHLAL DEĞİL: uret_petek.py 551-554. satırlar bunu
        # kasıtlı kullanıyor — geniş bir yabancı egemenlik döneminin (s) içine
        # gömülü kısa bir Osmanlı fethi (d/v) deseni. Üretim, Osmanlı aktifken
        # o yerleşimi yabancı devletin gövdesinden açıkça dışlıyor
        # (`not _osm_aktif(...)`), yani d/v her zaman kazanır — tıpkı d×v için
        # VERI-YAPISI.md'de yazılı "tâbi kazanır" kuralı gibi, yalnız s'ye de
        # genelleşmiş hâli belgede yok. Bilgi olarak listelenir, ihlal sayılmaz.
        for sp in kategoriler["s"]:
            if not sp.get("f") or not sp.get("t"):
                continue
            for dp in kategoriler["d"] + kategoriler["v"]:
                if dp.get("f") and dp.get("t") and orusuyor(sp, dp):
                    sd_ortusme.append((y["ad"], sp, dp))

        # d ile v çakışması da VERI-YAPISI.md'de kasıtlı: "d ve v çakışırsa
        # tâbi kazanır (açık ton)". İhlal değil, yalnız bilgi.
        for dp in kategoriler["d"]:
            if not dp.get("f") or not dp.get("t"):
                continue
            for vp in kategoriler["v"]:
                if vp.get("f") and vp.get("t") and orusuyor(dp, vp):
                    dv_ortusme.append((y["ad"], dp, vp))

    return {"sifir": sifir, "ters": ters, "cakisan_ayni": cakisan_ayni,
            "sd_ortusme": sd_ortusme, "dv_ortusme": dv_ortusme}


def main():
    ap = argparse.ArgumentParser(description="Üç değişmezi tek komutta denetler.")
    ap.add_argument("--ayrinti", action="store_true", help="her ihlali tek tek listele")
    args = ap.parse_args()

    print("Veri okunuyor...")
    Y = yerlesimleri_yukle()
    O = olaylari_yukle()
    print(f"  {len(Y)} yerleşim, {len(O)} kronoloji maddesi\n")

    ihlal = False

    # Değişmez 1
    sahipsiz = degismez1(Y)
    n1 = len(sahipsiz)
    durum1 = "✓" if n1 <= BEKLENEN_SAHIPSIZ else "✗"
    if n1 > BEKLENEN_SAHIPSIZ:
        ihlal = True
    print(f"Değişmez 1  {durum1}  {len(Y)} yerleşim, {n1} sahipsiz (beklenen {BEKLENEN_SAHIPSIZ})")
    if len(Y) != BEKLENEN_YERLESIM:
        print(f"            ! yerleşim sayısı beklenenden farklı ({len(Y)} ≠ {BEKLENEN_YERLESIM}) — sadece bilgi")
    if args.ayrinti and sahipsiz:
        for ad, yillar in sahipsiz.items():
            print(f"    {ad:<28} {', '.join(str(y) for y in yillar)}")

    # Değişmez 1b — pencere arası boşluk (örneklemesiz; kesitlerin kaçırdığını yakalar)
    bosluk = degismez1b(Y)
    durum1b = "✓" if len(bosluk) <= BEKLENEN_BOSLUK else "✗"
    if len(bosluk) > BEKLENEN_BOSLUK:
        ihlal = True
    print(f"Değişmez 1b {durum1b}  pencere arası boşluk: {len(bosluk)} "
          f"(beklenen {BEKLENEN_BOSLUK}) — örnekleme YAPILMAZ, tam tarama")
    for gun, ad, bas, son in (bosluk if args.ayrinti else bosluk[:15]):
        print(f"    {ad:<28} {bas} → {son}  ({gun} gün sahipsiz)")
    if bosluk:
        print("            ⚠️ BU KONTROL YENİ (2026-07-30) ve ilk koşuda 20 boşluk buldu;")
        print("               hepsi ÖLÇÜLDÜ, düzeltme Oturum 0'a ait ve sırada. Başka bir")
        print("               oturum bunları görüp yerlesimler.js'e YAZMASIN — dosya devri")
        print("               sözle yapılır (CLAUDE.md §7 kilit kuralı). Bilinen küme:")
        print("               Varşova (Varşova Dükalığı 1806-1815 hiç yazılmamış) · Doha ·")
        print("               Bicâye · Hacıbey · Ankara bozgunu sonrası 16 Anadolu şehri")
        print("               (1402-07-28 → 09-15: Timur'un elindeydi, 'timurlu' yazılacak)")

    # Değişmez 2
    kir, acik = degismez2(Y, O)
    n2_kirilma, n2_acik = len(kir), len(acik)
    durum2 = "✓" if n2_acik <= BEKLENEN_ACIK else "✗"
    if n2_acik > BEKLENEN_ACIK:
        ihlal = True
    print(f"\nDeğişmez 2  {durum2}  {n2_kirilma} kırılma, {n2_acik} açık (beklenen {BEKLENEN_ACIK})")
    if n2_kirilma != BEKLENEN_KIRILMA:
        print(f"            ! kırılma sayısı beklenenden farklı ({n2_kirilma} ≠ {BEKLENEN_KIRILMA}) — sadece bilgi")
    if args.ayrinti and acik:
        for d, tip, adlar, baslik, fark in acik:
            print(f"    {d}  {tip:<7} {', '.join(adlar):<40} en yakın madde {fark} gün uzakta: {baslik}")

    # Değişmez 3
    celiskiler = degismez3(Y)
    n3 = len(celiskiler)
    durum3 = "✓" if n3 <= BEKLENEN_CELISKI_UST_SINIR else "✗"
    if n3 > BEKLENEN_CELISKI_UST_SINIR:
        ihlal = True
    print(f"\nDeğişmez 3  {durum3}  {n3} çelişki (beklenen ≤{BEKLENEN_CELISKI_UST_SINIR}) — bilinen borç, bkz. MIMARI.md §3.4")
    if args.ayrinti and celiskiler:
        for g, ad, m, a, b in celiskiler:
            print(f"    {g}  {ad:<20} (m:{m})  yerleşim={a:<10} merkez={b}")

    # Ek denetim — dönem sağlığı (üç değişmezden biri değil, VERI-YAPISI.md kuralı)
    ds = donem_sagligi(Y)
    n4 = len(ds["sifir"]) + len(ds["ters"]) + len(ds["cakisan_ayni"])
    durum4 = "✓" if n4 == 0 else "✗"
    if n4 > 0:
        ihlal = True
    print(f"\nEk denetim  {durum4}  dönem sağlığı: {len(ds['sifir'])} sıfır-uzunluk, "
          f"{len(ds['ters'])} ters, {len(ds['cakisan_ayni'])} kategori-içi çakışma (beklenen: hepsi 0)")
    if ds["sd_ortusme"] or ds["dv_ortusme"]:
        print(f"            i {len(ds['sd_ortusme'])} s×d/v + {len(ds['dv_ortusme'])} d×v örtüşmesi — "
              f"uret_petek.py'de kasıtlı (Osmanlı/tâbi kazanır), ihlal SAYILMADI")
    if args.ayrinti:
        for ad, kat, f in ds["sifir"]:
            print(f"    SIFIR    {ad:<28} {kat}: {f}")
        for ad, kat, f, t in ds["ters"]:
            print(f"    TERS     {ad:<28} {kat}: {f} > {t}")
        for ad, kat, p1, p2 in ds["cakisan_ayni"]:
            print(f"    ÇAKIŞMA  {ad:<28} {kat}: [{p1['f']}, {p1['t']}) ile [{p2['f']}, {p2['t']})")

    # Ek denetim — mükerrer kronoloji maddesi
    # İki ölçüt AYRI raporlanır. Başlık benzerliği KESİN sayılır (ihlal);
    # kişi+tarih ölçütü ZAYIF — 55 çift üretiyor ve içinde sefer sırasında
    # yan yana düşen meşru olaylar var (Yavuz'un Mısır seferinin her günü aynı
    # adı taşıyor). Ama gerçek mükerrerleri de buluyor ve Jaccard onları HİÇ
    # göremiyor: Fatih'in ölümü, Cem Sultan'ın ölümü, İbrahim Paşa'nın idamı,
    # Şehzade Mustafa, Fâtih Kanunnâmesi. O yüzden ihlal değil, gözden geçirme
    # listesi. Triyaj edilen çiftler BILINEN_AYRI'ya yazılır ve liste kısalır.
    tum = mukerrer_maddeler(O)
    mk = [r for r in tum if r[4] == "başlık"]
    zayif = [r for r in tum if r[4] != "başlık"]
    durum5 = "✓" if not mk else "✗"
    if mk:
        ihlal = True
    print(f"Ek denetim  {durum5}  mükerrer madde: {len(mk)} şüpheli çift (beklenen 0)")
    if zayif:
        print(f"            i {len(zayif)} çift ZAYIF ölçütte (aynı kişi + ±3 gün) — "
              f"ihlal DEĞİL, gözden geçirilecek liste; --ayrinti ile tamamı")
        for yil, oran, a2, b2, olcut in (zayif if args.ayrinti else zayif[:8]):
            print(f"              [{olcut}] {a2['t']}  {a2['b'][:48]}")
            print(f"              {b2['t']}  {b2['b'][:48]}")
    if mk:
        for yil, oran, a, b, olcut in (mk if args.ayrinti else mk[:20]):
            print(f"    [{olcut}] {yil}  {a['t']}  {a['b'][:52]}")
            print(f"           {b['t']}  {b['b'][:52]}")
        print("    → gerçekten ayrı olaylarsa denetle.py'deki BILINEN_AYRI kümesine ekle")

    # Ek denetim — KONUM: her nokta kara maskesinin içinde mi
    kd = konum_denetimi(Y)
    if kd is None:
        print("Ek denetim  i  konum: shapely ya da veri-kaynak yok, ATLANDI")
    else:
        durum6 = "✓" if not kd else "✗"
        if kd:
            ihlal = True
        print(f"Ek denetim  {durum6}  konum: {len(kd)} nokta kara maskesinin dışında "
              f"(beklenen {BEKLENEN_MASKE_DISI})")
        for km, ad, lat, lon, ylat, ylon in (kd if args.ayrinti else kd[:25]):
            print(f"    {ad:<26} {km:5.2f} km dışarıda  {lat:.4f},{lon:.4f} "
                  f"→ en yakın kara {ylat:.4f},{ylon:.4f}")
        if kd:
            print("    → koordinatı en yakın kara hücresine kaydır (payla birlikte);"
                  " maske dışındaki nokta HİÇ toprak sahibi olamaz")

    print()
    if ihlal:
        print("SONUÇ: İHLAL VAR — çıkış kodu 1")
        sys.exit(1)
    print("SONUÇ: temiz")
    sys.exit(0)


if __name__ == "__main__":
    main()
