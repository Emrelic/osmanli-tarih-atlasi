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

# ⚠️ KORUMALI. İki TextIOWrapper aynı buffer'ı sararsa ilki çöp toplandığında
# buffer KAPANIR ve bu modülü İÇE AKTARAN aracın çıktısı
# "ValueError: I/O operation on closed file" ile ölür. Üç kez yaşandı.
if getattr(sys.stdout, "encoding", "").lower() not in ("utf-8", "utf8"):
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
# 917 -> 927: başka oturumların partileri. ⚠️ 2026-07-30 gecesi merkez oturum
# 12 oturuma görev dağıttı ve yerlesimler.js'in on iki potansiyel yazarı oldu;
# bu iki sabit o gece saat başı değişti. Sapma uyarısı bilgi amaçlıdır, ihlal
# değildir — ama üretim koşturacak oturum ÖNCE girdinin donduğunu teyit etmeli.
# 927 -> 939: Oturum 14'ün Libya partisi (12 nokta).
# 951 -> 965: YAMACI'nin 8 paketi (+14).
# 965 -> 966: Podgorica.
# 966 -> 967.
# 967 -> 968.
BEKLENEN_YERLESIM = 968
# 29 -> 32: Oturum 4'ün Necid noktaları (Buraydâ, Uneyze, Şakrâ) 1744
# öncesinde kasten sahipsiz — orada devlet yoktu, Riyad ve Dir'iye ile
# aynı desen (MIMARI.md §6: 'devletsiz' ile 'veri yok' ayrımı).
# 32 -> 35: Oturum 11 in col/plato dolgu noktalari (Uzboy, Ustyurt bati ve
# dogu) kasten sahipsiz — Karakum ve Rub ul Hali ile ayni desen.
# 34 -> 40: Oturum 14'ün Libya çölü dolgu noktaları. SAYIYI DEĞİL, ADLARI
# doğruladım — beklentiyi "merkez oturum 40 dedi" diye yükseltmek denetimi
# kendi kendini onaylayan bir şeye çevirirdi. Yeni altı ad ölçüldü:
#   Kufra (el-Cûf) · Rebyâne · Serîr · Tâzirbû · Vâv el-Kebîr · İdehân Murzuk
# Altısı da 1285-1920 boyunca kesintisiz sahipsiz, yani "bir dönem sahipliydi,
# sonra delik açıldı" deseni DEĞİL — mevcut 34'ün aynı deseni: Sahra ve
# Rub'ul Hâlî dolgu noktaları, orada devlet yoktu. Kufra Senûsî zâviyesiydi,
# Osmanlı idaresi ulaşmadı, İtalya 1931'de girdi (kapsam dışı).
# 40 -> 43: merkez oturumun uc col noktasi (e35b699). Yine ADLARI dogruladim:
#   Ramletul-kubra (Buyuk Kum Denizi) · Gilf el-Kebir · Selime (Nube colu batisi)
# Uc yeni ad, sifir kaybolan ad — yani mevcut 40 in hicbiri sessizce sahiplenmedi.
# Bu kontrol onemli: sayi 40 dan 43 e ciksa da icerik degisseydi (2 yeni + 1
# kaybolan gibi) fark gorunmezdi. Sayi degil KUME karsilastiriliyor.
# 43 -> 50: Oturum 14'un dokuz Libya noktasi (c7ce502), yedisi kasten sahipsiz.
# Kume karsilastirmasi: yedi YENI ad, sifir kaybolan.
#   Idehan Ubari · Ramletu Murzuk · Vadi Tanezzuft · Serir Kalansu ·
#   Ramletu Zellaf · Ma'tan es-Sarra · Tasili n'Accer
# NOT: merkez oturum "Ramletu Murzuk GB" diye bildirdi, veride "Ramletu Murzuk"
# yaziyor. Adi kumeden okudum, mesajdan degil - denetim veriye bakar.
# 50 -> 55: PETEK/NOKTA parti 2'nin bes col dolgusu (Vadi Sirhan,
# Dumetulcendel, Teyma, Necid guneybatisi, Necid guneyi). Besi de KASTEN
# sahipsiz -- Nefud/Rub'ul Hali ile ayni sinif. Bunlar delik ACMIYOR,
# petek yildizini KESIYOR: kuzey Arabistan sifir noktaydi.
# 55 -> 57: PETEK/NOKTA parti 6'nin iki KASTEN SAHIPSIZ dolgusu
# (Hamad 33,05/40,28 · Libya ic colu 29,50/21,50). Delik degil, DELIGIN
# ILACI: cevre vahalarin petegi cole uzanip orayi Osmanli boyuyordu.
# Olculmus sabit: bir sahipsiz dolgu ~46.000-54.000 km2 dondurur.
# 57 -> 86: PETEK/NOKTA PARTI 19 -- kuzey/Arktik (_ek8, 39 nokta) ve Sibirya
# (_ek9, 12 nokta) kusagi. Artis +29.
# 🔴 VE BU SAYI ONCEDEN YAZILDI, SONRA DOGRULANDI. PETEK/NOKTA kosudan ONCE
# "ek8+ek9 baglanirsa +29" dedi; kosu 9 sonrasi olculen 86-57 = TAM 29.
# Tahmin ile olcum ayni cikinca artis "kabul edildi" degil DOGRULANMIS oluyor.
# ⇒ Kural: kapsam buyutan parti, beklenen tavan degisimini ONCEDEN yazsin.
# Artisin tamami KASTEN SAHIPSIZ: 31 kaydin 31'i de kasitli_bosluk:true ve
# neden: tasiyor (PETEK/NOKTA olctu, tasimayan sifir). Arktik'te 1281-1923
# arasi devlet YOK -- Svalbard 1920 antlasmasi 1925'te yururluge giriyor,
# Franz Josef 1873'te kesfediliyor, Severnaya Zemlya 1913'te.
# ⚠️ Anakara BUNUN DISINDA: Sibirya fetihten once sahipsiz, sonra `rusya`.
# "Hepsi kasten sahipsiz olsun" onerisi REDDEDILDI, cunku Rusya'nin kuzeyinde
# 1600-1923 arasi 3,9 milyon km2'lik bir delik acardi -- Mogolistan'in
# Arktik'i boyamasinin aynadaki goruntusu.
# 86 -> 102: NOKTA EKLEME PARTI 20 (_ek13, 16 nokta) -- Amur asagisi, Ohotsk
# kiyisi, Sahalin, Orta Sibirya. Artis +16, yani partinin TAMAMI.
# 16 kaydin 16'si da kasitli_bosluk: tasiyor. Rus/Qing gelisinden once
# (1630-1875 arasi degisen tarihlerde) bu cografyada bu atlasin modelledigi
# anlamda devlet YOK -- yukaridaki "anakara bunun disinda" notunun devami.
# ⚠️ AMA BU PARTIDE TAVAN DEGISIMI ONCEDEN YAZILMAMISTI. Yukaridaki kural
# ("kapsam buyuten parti, beklenen tavan degisimini ONCEDEN yazsin") PARTI 19'da
# uygulandi, PARTI 20'de uygulanmadi: dosya basi kutu/renk/Degismez 2'yi
# onceden olcmus ama Degismez 1'i HIC ANMAMIS.
# 🔴 Ve koordinator de ayni yeri kacirdi: baglamadan once dosyanin ALTI
# IDDIASINI dogruladi, PROJENIN DEGISMEZLERINI sormadi. Kirilan tam o ikisi
# oldu (Degismez 1: 86->102, Degismez 2s: 126->131).
# ⇒ Kural genisletildi: teslim alinan dosya, kendi iddia listesiyle DEGIL
#   uc degismezin tamamiyla sinanir. Iddia listesi teslim edenin GORDUGU
#   yerdir; degismez, GORMEDIGI yer.
BEKLENEN_SAHIPSIZ = 102
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
# 451 -> 452: Oturum 14'ün Konstantin maddesi (1837-10-13).
# 452 -> 448: kirilma sayisi DUSTU. Kronoloji oturumlari eski maddeleri
# emekli ediyor; zemin su anda hareketli, tavan kosudan hemen once olculmeli.
# 448 -> 456: A5'in yedi TDV tarih duzeltmesi (Yemen/Asir).
# 456 -> 458: uc TDV duzeltmesi daha (Sevakin/Masavva/Dahlak).
# 458 -> 462: YAMACI'nin 8 paketi.
# 462 -> 463: Podgorica yerlesimi + 1457 maddesi ayni commit te.
# 463 -> 462: zemin yine oynadi; kosudan hemen once olculdu.
# 462 -> 476: Oturum 14 in Port Said/parantez duzeltmeleri.
BEKLENEN_KIRILMA = 476
BEKLENEN_ACIK = 0
# 🔴 İŞ KUYRUĞU AYRIMI (İş O + O-3, koordinatör kararı 2 Ağustos 2026):
# önce Asya için verildi, aynı gün Avrupa +71 maddesiz kırılma getirince
# PARTİ-BAĞIMSIZ kurala çevrildi: YENİ MERGE EDİLEN HER PARTİ kendi
# sayacıyla raporlanır, çekirdek tavanına KATILMAZ. Çünkü ölçüldü: borç
# etiketi alarmı uyuşturuyor (2s 119→121→192 bugün sessizce normalleşti).
# ⇒ Değişmez 2 ve 2s tavanları MEVCUT KÜLLİYAT (yerlesimler.js + afrika +
#   ek) için hüküm verir; partiler "dosya: N nokta · K kırılma · M MADDESİZ"
#   diye AYRI satırlar alır. Fark davranışta: borç normalleşir, kuyruk
#   EKSİLİR — madde yazıldıkça iner. Kaynak ayrımı girdi.py `_kaynak`
#   damgasıyla. Parti kronolojisi tamamlanınca dosya bu listeden çekirdeğe
#   ALINIR (satırı silmek = külliyata kabul, bilinçli karar).
KUYRUK_DOSYALARI = ("yerlesimler_ortaasya2.js", "yerlesimler_avrupa.js",
                    "yerlesimler_asya.js",
                    # 3 Agustos 2026, Oturum 0. CAPRAZ IBERYA D2+D3 partisi:
                    # Sebte 1415 · Melilla 1497 · Portekiz Fasi (Mazagan 1514-
                    # 1769 · Safi 1488 · Azemmur 1513 · Arzila 1471) — sekiz
                    # MADDESIZ yabanci kirilmasi getiriyor ve HEPSI AYNI
                    # HIKAYENIN parcasi: Portekiz'in Fas kiyisindaki bir bucuk
                    # asri atlasta HIC YOKTU, kronolojisi de yok.
                    # ⇒ Tavani 114'ten sekiz yukari cekmek yerine kural
                    #   uygulandi: YENI PARTI kendi sayaciyla raporlanir.
                    # Kronoloji yazilinca satir SILINIR = kulliyata kabul.
                    "yerlesimler_ek3.js")
# ⚠️ `s:` boyutu ON AY BOYUNCA HİÇ DENETLENMEDİ (Oturum 13 buldu). Ölçüldü:
# 566 yabancı kırılması, 115'inin ±30 günde maddesi yok. 115'i İHLAL ilan etmek
# denetimi ilk koşuda kırmızıya boyar ve OGRENILENLER §3 gereği kimse bakmaz;
# Değişmez 3'ün deseni uygulandı — bilinen borç + tavan, madde yazıldıkça iner.
# 115 -> 120: ayni duzeltmeler s: tarafinda bes yeni acik kirilma dogurdu.
# 120 -> 114: DUSTU, tavan da dusuruldu (kural: tavan asagi da takip edilir).
# ⚠️ 3 Agustos 2026, olculen deger 120 -> 121 ve TAVAN OYNATILMADI.
#   Artisin tamami TEK KAYNAKLI ve adiyla yaziliyor: CAPRAZ IBERYA D3'un
#   Agadir duzeltmesi (Santa Cruz do Cabo de Gue, portekiz 1505-1541) iki
#   yeni maddesiz satir acti; buna karsilik D6'nin Tanca duzeltmesi
#   (1661-01-23 -> 1662-01-30, maddesi yazildi) bir satir kapatti. Net +1.
#   Ayni partinin oteki dort Fas noktasi ile Sebte/Melilla KUYRUGA alindi;
#   Agadir kuyruga girmedi cunku noktasi zaten cekirdekteydi (yerlesimler.js)
#   ve bir noktayi yalniz sayac icin dosya degistirmek olcumu kirletir.
#   ⇒ Borc: Portekiz Fasi kronolojisi. Yazilinca 121 -> 119 iner.
# ═══ 🔴 6 Agustos 2026 — 2s'nin YAPISAL KUSURU OLCULDU ═══════════════════
# `_ek13` (Sibirya/Amur, 16 nokta) baglanirken olculen 131, tavani +17 asiyor
# gibi duruyor ama ASIL BULGU SAYI DEGIL: bu olcut TARIH YAKINLIGINA bakiyor,
# KONU YAKINLIGINA bakmiyor. ek13'un 13 kirilmasindan 6'si "MADDELI" sayildi
# ve takildiklari maddeler sunlar:
#     1689-09-06 Nercinsk Antlasmasi  ↔ "Nis ve Vidin'in kaybi"        +18g
#     1858-05-28 Aygun Antlasmasi     ↔ "Arazi Kanunnamesi"             +9g
#     1860-11-14 Pekin Antlasmasi     ↔ "Tercuman-i Ahval'in yayini"   +23g
#     1905-09-05 Portsmouth           ↔ "San'a'nin geri alinmasi"       +4g
#     1679-01-01 Ayan/Udskoy ostrogu  ↔ "Hafiz Osman'in hat uslubu"     +0g
#     1634-01-01 Vilyuysk ostrogu     ↔ "Ilk seyhulislam idami"         +7g
# Altisi da ALAKASIZ. Yani kullanici Vladivostok'un renk degistirdigini
# Istanbul'da bir gazetenin yayina baslamasi maddesinin altinda gorecek.
# ⚠️ VE BU TAM OLARAK CLAUDE.md §3'un Degismez 2'yi yazma sebebi:
#   "degisim, o gune rastgele denk gelen alakasiz bir maddenin altinda belirir
#    — kullanicinin en cok sikayet ettigi hata bu."
# ⇒ Olcut, ONLEMEK ICIN YAZILDIGI HATAYI GECIRIYOR. Kusur ek13'te degil,
#   olcutun kendisinde; ek13 yalnizca GORUNUR KILDI.
#
# 🔴 VE BU CUMLENIN ILK HALI YANLISTI -- CAPRAZ IRAN teslim 9 duzeltti.
#   Once soyle yazmistim: "gorunur oldu cunku tarihleri Osmanli
#   kronolojisinden BAMBASKA BIR SAHNEDE (Sibirya) geciyor."
#   CAPRAZ IRAN ayni kusurun IRAN sahasinda da oldugunu olctu:
#       1357 Cobanli→Celayirli ↔ "Suleyman Pasa'nin Trakya ilerleyisi"
#       1381 Timur Horasan     ↔ "Germiyan ceyizi: Kutahya'nin katilisi"
#       1386 Timur Azerbaycan  ↔ "Nis'in fethi"
#       1393 Muzafferiler'in sonu ↔ "Anadolu Beylerbeyligi kuruldu"
#   Iran sahnesi Osmanli'ya YAKIN ve kusur yine de var.
#   ⇒ Kusur UZAK SAHNELERE OZGU DEGIL. Uzaklik onu gorunur kilar, DOGURMAZ.
#   ⇒ Ve tavan sayisi (bugun 143) su anda bile "maddeli" sayilan alakasiz
#     eslesmeler tasiyor olabilir: sayinin temiz olmasi denetimin temiz
#     oldugu anlamina GELMIYOR.
#   📌 PETEK/NOKTA ucuncu sinifi adlandirdi: olcut bugun yalniz MADDELI /
#     ACIK diyebiliyor; gereken uculu **MADDELI · ACIK · KAPSAM DISI**
#     ("bu kirilmanin maddesi bu kronolojide OLAMAZ").
#   🟢 Dortunden UCU 6 Agustos'ta kapatildi -- gercek madde yazilarak
#     (1381-04-01 Herat · 1386-01-01 uc yillik sefer · 1393-01-01 Muzafferi).
#     Yalanci gecis, gercek gecise donusturulebiliyor; pahali olan olcut
#     degil, kronoloji borcu.
# 📌 Cozum tasarimi ACIK IS: kirilmanin yer/devlet kimligi ile maddenin
#   `yer_id:`/`kisiler:`/metni arasinda bir ORTUSME sarti aranmali. Bugun
#   uygulanmadi cunku 649 kirilmanin tamamini yeniden tartar ve tek oturumda
#   olculemez. Yazildi ki kaybolmasin.
# 114 -> 131: _ek13'un getirdigi +5'in HEPSI adiyla belli (asagidaki 7 acik
# tarihten besi; 1630/1631/1651/1653/1665/1668/1875 kusaginda). Borc:
# Sibirya'nin Rus fethi kronolojisi — yazilinca 131 -> 124 iner.
# 131 -> 143: PARTİ 21 (_ek14 · _ek15, 16 nokta Mâverâünnehir + Hokand).
# 20 ayrık kırılma tarihinin 7'si maddeli, 13'ü AÇIK. On üçü de adıyla belli
# ve hepsi GERÇEK OLAY — uydurma tarih yok:
#   1370-01-01 Timur'un yükselişi · 1500-01-01 Şeybânî fethi
#   1710-01-01 Hokand Hanlığı'nın kuruluşu · 1802-01-01 Hucend Hokand'a
#   1864-09-22 Çimkent · 1865-06-17 TAŞKENT · 1866-05-24 Hucend
#   1866-10-18 Cizzah · 1876-02-19 Hokand Hanlığı'nın ilgası
#   1347/1758/1847 Almatı zinciri · 1598-01-01 Türkistan-Çimkent
# Borç: **Orta Asya'nın Rus fethi kronolojisi.** Yazılınca 143 -> 130 iner.
#
# 🔴 VE BİR DESEN: PARTİ 20 ile 21'in İKİSİ DE `Değişmez 2`yi önceden ölçtü
# (ikisinde de 0 çıktı, doğru) ama `2s`yi HİÇ ölçmedi — 20'de +5, 21'de +12.
# Sebep anlaşılır: partiler `d:`/`v:` yazmıyor, hepsi `s:`; "Osmanlı borcu
# sıfır" doğru ama SORULMASI GEREKEN SORU O DEĞİL. Yabancı-yabancı devir de
# bir kırılmadır ve maddesi olmalıdır.
# ⇒ Kural: `s:` yazan her parti, beklenen **2s** değişimini de önceden yazar.
BEKLENEN_ACIK_S = 143
# Değişmez 2'nin AYNADAKİ HÂLİ: madde var ama kırılma yok. Oturum 14'ün Girit
# bulgusu — "1830-11-01 Girit'in idaresi Mehmed Ali'ye bırakıldı" maddesi VARDI,
# beş nokta `d:` kalmıştı. Ölçüldü: 442 toprak/antlaşma maddesinin 67'sinin
# ±30 gününde hiçbir kırılma yok (antlasma 40 · kayip 20 · fetih 7).
# `antlasma` çoğunlukla meşrudur (statükoyu teyit eden barış sınır oynatmaz),
# asıl sinyal `fetih`tir; o yüzden tür dağılımı ayrıca basılıyor.
# 67 -> 65: SAYI DUSTU, tavan da DUSURULDU.
# ⚠️ Koordinator "tavana dokunma" dedi, dokunuyorum ve gerekcesi bu dosyada
# zaten yazili (BEKLENEN_BOSLUK 1->0 vakasi): tavan yalniz yukari degil ASAGI
# da takip edilir. 67'de birakilsaydi denetim "65 <= 67" diye sessizce gecer
# ve borcun GERI ACILMASINI goremezdi. Borc kapandikca tavan iner; kapanan
# borcun yeniden acilmasi yeni borctur.
# 65 -> 64: DUSTU.
# 64 -> 62: DUSTU.
# 62 → 48: payda `k:`den `etiket:`e taşındı (bkz. `_toprak_iddiasi`).
# ⚠️ SAF DARALMA DEĞİL, KÜME DEĞİŞİMİ — ve bunu ön ölçüm YANLIŞ tahmin etti.
# Elle hesapladığımda "63'ün 32'si kalır" çıkmıştı; gerçek koşu **48** verdi.
# Sebep: yeni payda, eski `k:` kümesinde HİÇ OLMAYAN 61 maddeyi de kapsıyor ve
# onların 16'sının kırılması yok. Yani 63 − 31 (düşen) + 16 (yeni giren) = 48.
# Ön ölçüme güvenip koşturmasaydım "32" diye raporlayacaktım.
#
# 48 → 49: MEŞRU ÜYE, GERİLEME DEĞİL — ve ayrımı yapan şey ÖNGÖRÜLMÜŞ OLMASI.
# YAMACI Kızıldeniz paketinde Vâdî Halfâ'yı TDV'ye uyarak 1555 → 1517-04-13'e
# taşıdı; geriye "1555-01-01 İbrim ve Nübye sınırının güneye taşınması" maddesi
# KIRILMASIZ kaldı. Madde gerçek bir olayı anlatıyor (Nûbe sınırının güneye
# kayması) ve hiçbir yerleşim el değiştirmiyor — ölçütün tanımı gereği sayılır.
#
# ⚠️ "Tavan gerilemede artmaz" duruşum burada GEÇERSİZ, ve sebebi şu:
# A3 bunu paketi teslim ederken ÖNCEDEN yazdı — *"kırılmasız madde olur,
# Değişmez 2t artar"*. Sonradan gerekçelendirilmiş bir artış değil, önceden
# ilan edilmiş bir yan etki. Ayrımı yapan şey açıklamanın kendisi değil,
# NE ZAMAN yazıldığı: koşudan önce yazılan tahmin, koşudan sonra yazılan
# gerekçeden başka bir şeydir.
#
# 📌 Ve artışın hangi üyeden geldiğini DEFTER söyledi, tahmin değil:
#     + YENİ  1555-01-01|İbrim ve Nübye sınırının güneye taşınması
BEKLENEN_KIRILMASIZ = 49
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
# 383 -> 387: ⚠️ TAVAN UC AYRI SEBEPLE ARTABILIR, BU UCUNCUSU:
#   (a) GERILEME     veri kotulesti          -> tavan ARTMAMALI, duzeltilmeli
#   (b) ARAC DUZELDI korluk kalkti           -> tavan artar, veri ayni
#                    (BEKLENEN_A 68->97 boyleydi)
#   (c) SEMA SINIRI  veri DOGRULANDI ama sema yetmiyor   <- BU
# Kok sebep BAGIMSIZ OLCUMLE dogrulandi (YAMACI olctu, ben tekrar olctum,
# ikisi de +4 dedi ve AYNI dort cifti gosterdi):
#     1300-06-15  Akkirman/Kili  m:"Silistre"  bogdan <-> bulgaristan
#     1400-06-15  Akkirman/Kili  m:"Silistre"  bogdan <-> OSMANLI
# Kili/Akkirman'in m: alani TDV kaynakli olarak "Yas" -> "Silistre" oldu.
# O kesitlerde Kili hala bogdan, yeni merkezi Silistre baska devlette. AMA
# 1484 fetihinden ONCE Silistre'nin Kili uzerinde idari bagi YOKTU - bag
# fetihle kuruldu. `m:` alani ZAMANSIZ oldugu icin sema bunu ayiramiyor.
# ⇒ Bu bir gerileme DEGIL; YAPILACAKLAR'daki "k/m alanlari zamanli olmali"
#   borcunun olculmus bir vakasi. Duzeltme burada degil, semada.
BEKLENEN_CELISKI_UST_SINIR = 387

# Türkçe harf kümesi — kelime sınırı için. `denetle_eslesme.py` ile aynı;
# oradan import EDİLMİYOR (stdout sarmalayıcı çakışması, bkz. _madde_yeri_aniyor).
HARF = "a-zçğıöşüâîû"


def oku_pencere(yol, degisken):
    """`window.<degisken> = [ ... ];` biçimindeki dosyayı JSON'a çevirip döker.
    Yöntem uret_petek.py'nin 274-281. satırlarından birebir alınmıştır."""
    js = open(yol, encoding="utf-8").read()
    js = "\n".join(l for l in js.split("\n") if not l.strip().startswith("//"))
    anahtar = f"window.{degisken} = "
    govde = js[js.index(anahtar) + len(anahtar):]
    # 🔴 ESKİDEN `govde.rindex("]")` idi: dosyanın SON köşeli parantezi.
    # Tek dizili dosyalarda (olaylar*.js) doğru çalışıyordu, ama `savaslar.js`
    # DÖRT dizi taşıyor (SAVASLAR · ANTLASMALAR · SERILER · SEFERLER) ve dilim
    # dördünü birden kapsıyordu → "Extra data" ile çöküyordu. Aracın katı
    # olduğu yer veriyi okunamaz sanmaya yol açıyordu; veri sağlamdı.
    # Şimdi EŞLEŞEN parantez bulunuyor — metin içindeki köşeli parantezler
    # sayılmasın diye dizge ve kaçış farkındalığıyla.
    derinlik, i, dizge, kacis = 0, 0, None, False
    for i, c in enumerate(govde):
        if kacis:
            kacis = False
            continue
        if c == "\\":
            kacis = True
            continue
        if dizge:
            if c == dizge:
                dizge = None
            continue
        if c in "\"'":
            dizge = c
        elif c == "[":
            derinlik += 1
        elif c == "]":
            derinlik -= 1
            if derinlik == 0:
                break
    if derinlik != 0:
        raise ValueError("%s içinde %s dizisi kapanmıyor" % (yol, degisken))
    govde = govde[:i + 1]
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
            # ⚠️ bit: — yerleşim ortadan kalktıysa sahipsizlik SORULMAZ. Motor
            # bu alanı 2026-07-30'da okumaya başladı (petek_epok); araç da
            # okumazsa yok olmuş nokta "sahipsiz" diye yanlış alarm üretir.
            # Örnek: Zaporijya Sıçı 1775'te yıkıldı, sonrasında sahibi olmaz.
            bit = t.get("bit")
            if bit and bit <= g:
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
# 1 -> 0: merkez oturum Doha'nın 1193 günlük deliğini kapattı (ab1df42):
# 1913-07-29 Osmanlı-İngiliz mukavelesi Osmanlı'yı Katar'dan çekiyor,
# 1916-11-03 İngiliz-Katar antlaşması himayeyi kuruyor, arada Âl Sânî
# şeyhliği kendi başına — s:{d:"katar"} yazıldı.
# ⚠️ BEKLENTİNİN TERS YÖNDE ESKİMESİ: sayı DÜŞTÜĞÜNDE de sabit güncellenmeli,
# yoksa denetim "0 <= 1" diye sessizce geçer ve deliğin geri açılmasını
# göremez. Tavan yalnız yukarı doğru değil, AŞAĞI doğru da takip edilir.
BEKLENEN_BOSLUK = 0


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
        bit = y.get("bit")
        for i in range(len(birlesik) - 1):
            bas, son = birlesik[i][1], birlesik[i + 1][0]
            # bit: sonrası boşluk BOŞLUK DEĞİLDİR — yerleşim sahneden çıkmıştır.
            if bit and bit <= bas:
                continue
            gun = gun_no(son) - gun_no(bas)
            bulunan.append((gun, y["ad"], bas, son))
    bulunan.sort(reverse=True)
    return bulunan


# ---------------- Değişmez 2 — sessiz toprak değişimi yok ----------------
def degismez2(Y, O, kategoriler=("d", "v")):
    """Belirtilen kategorilerin kırılmalarını ve ±30 günde maddesizleri döker.

    ⚠️ `s:` VARSAYILANDA YOK VE BU BİR TASARIM DEĞİL, ON AYLIK BİR KÖRLÜKTÜ.
    CLAUDE.md §3'ün tek satırlığı `(y.d||[]).concat(y.v||[])` yazıyor; yani
    Değişmez 2 kurulduğundan beri **iki yabancı devlet arasındaki toprak
    değişimini hiç sormadı.** Osmanlı kazanır/kaybederse denetleniyor, Akkoyunlu
    Safevî'ye devrederse denetlenmiyordu — oysa harita ikisinde de renk
    değiştiriyor ve kullanıcı ikisini de görüyor.

    Ölçüldü (Oturum 13 buldu, burada doğrulandı): **566 `s:` kırılması, 115'inin
    ±30 günde maddesi yok.** En kötüsü 1469-01-01'de 70 kaydın Karakoyunlu'dan
    Akkoyunlu'ya geçmesi. 1503-01-01'de 37 kayıt Akkoyunlu'dan Safevî'ye geçiyor
    ve ölçütü TEKNİK OLARAK GEÇİYOR — 18 gün ötede "Osmanlı-Venedik Savaşı'nın
    sona ermesi" maddesi var. Yani `s:` eklenmesi tek başına yetmez; yanlış
    eşleşmeyi `denetle_eslesme.py` A bölümü sorar.

    `s:` ayrı çağrılıyor çünkü ayrı KADEMEDE raporlanıyor: `d:`/`v:` için açık
    sayısı 0 olmalı (İHLAL), `s:` için bilinen borç + tavan.
    """
    ol = [{"g": gun_no(o["t"]), "b": o["b"]} for o in O]
    kir = {}
    for y in Y:
        donemler = []
        for kat in kategoriler:
            donemler += (y.get(kat) or [])
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


def _madde_yeri_aniyor(baslik, adlar):
    """Bu madde, kırılmanın yerleşimlerinden BAHSEDİYOR mu?

    ⚠️ Bu Değişmez 2'yi A bölümüyle BİRLEŞTİRMEZ — ölçüldü ve birleştirmemek
    gerekiyor: `denetle_eslesme.py` A'nın 97 şüphelisinin bir kısmı DOĞRU
    eşleşmedir (Londra Protokolü 21 noktayı adlarını saymadan devreder).
    Burada yapılan yalnız RAPORU DÜRÜSTLEŞTİRMEK: Değişmez 2 hükmünü
    değiştirmiyor, "yakın madde var" cümlesinin yanına o maddenin ilgili
    olup olmadığını yazıyor. Kademe aynı, teselli kalkıyor.
    """
    # ⚠️ `denetle_eslesme`'yi IMPORT ETMİYORUM ve sebebi ölçüldü: o modül de
    # stdout'u TextIOWrapper ile sarıyor, koşan denetle.py'nin içinden import
    # edilince iki sarmalayıcı aynı buffer'ı sarıyor ve ilki çöp toplandığında
    # buffer KAPANIYOR — "ValueError: I/O operation on closed file". Bu tuzağı
    # denetle_statu.py'nin başında yazmıştım ve bugün yine düştüm. Kelime
    # sınırı ifadesi bu yüzden burada tekrarlanıyor: küçük bir kopya, ama
    # alternatifi aracı çökerten bir bağımlılık.
    m = (baslik or "").lower().replace("’", "'")
    for ad in adlar:
        kok = re.sub(r"\s*\(.*?\)", "", ad).strip().lower()
        if len(kok) >= 3 and re.search(f"(?<![{HARF}])" + re.escape(kok)
                                       + f"(?![{HARF}])", m):
            return True
    return False


# ---------------- Değişmez 2t — kırılmasız madde (aynadaki hâl) ----------------
# ═══ PAYDA `k:`DEN `etiket:`E TAŞINDI — KOORDİNATÖR kararı, ölçümle ═══
# Eski payda `k:` ∈ {fetih, kayip, antlasma} idi ve **kapanamayan** bir sınıf
# içeriyordu: ittifak antlaşmaları. Bir ittifak toprak değişimi İDDİA ETMEZ,
# dolayısıyla haritanın kıpırdamaması kusur değildir — ama eski ölçüt onu borç
# sayıyordu. Sonuç: her diplomasi maddesi tavanı bir artırıyordu.
#
# Ölçütün amacı tek cümle: **"madde toprak değişimi İDDİA EDİYOR ama harita
# kıpırdamıyor."** İddia belge TÜRÜNDEN değil, maddenin kendi etiketinden
# okunmalı. `etiket:` 1009 maddenin 1009'unda dolu (ölçüldü);
# `toprak-kazanc` 305 · `toprak-kaybi` 175.
#
# ÖLÇÜLDÜ: payda değişince 2t defteri **63 → 32**. Düşen 31'in çoğu tam
# hedeflenen sınıf — Kasr-ı Şirin, Vasvar, Amasya, Sened-i İttifak, beş ittifak
# antlaşması: statükoyu teyit eden ya da toprak devretmeyen belgeler.
#
# ⚠️ AMA İKİSİ YANLIŞ SEBEPLE DÜŞÜYOR: **Lozan** ve **Mudanya**. İkisi de toprak
# devrediyor; `etiket:` alanlarında `toprak-*` YOK. Yani ölçüt doğru, GİRDİSİ
# eksik. Bu bir etiket borcudur ve içerik oturumunun işidir — ölçütü onlara
# uydurmak (yani `k:`e geri dönmek) ittifak sınıfını geri getirirdi.
def _toprak_iddiasi(o):
    """Madde toprak değişimi İDDİA EDİYOR mu? — `etiket:`ten okunur."""
    e = o.get("etiket") or []
    if not isinstance(e, list):
        e = [x.strip() for x in str(e).split(",")]
    return "toprak-kazanc" in e or "toprak-kaybi" in e


def kirilmasiz_madde(kir_dv, kir_s, O):
    """Toprak/antlaşma maddesi var ama ±30 günde HİÇ kırılma yok.

    Değişmez 2 "kırılmanın maddesi var mı" diye sorar; bu onun aynası:
    "maddenin kırılması var mı". Girit vakası (Oturum 14): kronolojide
    "1830-11-01 Girit'in idaresi Mehmed Ali'ye bırakıldı" maddesi vardı,
    haritada beş nokta `d:` kalmıştı. Kullanıcı maddeyi okuyor, haritaya
    bakıyor, hiçbir şey olmuyor.

    Kırılma havuzuna `s:` de dahil — yabancılar arası devir de bir maddeye
    karşılık gelebilir (1797 Campo Formio gibi).
    """
    gunler = sorted([gun_no(d) for d in kir_dv] + [gun_no(d) for d in kir_s])
    yok = []
    for o in O:
        if not _toprak_iddiasi(o):
            continue
        g = gun_no(o["t"])
        if not any(abs(x - g) <= 30 for x in gunler):
            yok.append(o)
    return yok


# ---------------- ÖRNEKLEME — A3'ün önerisi ÖLÇÜLDÜ ve UYGULANMADI ---------
# A3 şunu önerdi: *"örneklemeye devlet ömürlerinin bittiği yıllar eklensin
# (1517, 1453, 1502…) — hayalet devletler tam oralarda doğuyor."* Gerekçe
# doğru: hata "kayıt bitiş tarihini güncellemeyi unutmak"tır ve yüzyıl başları
# (1300 · 1400 · …) 1517-1557 penceresine hiç düşmez.
#
# 🔴 AMA ÖLÇTÜM VE ÖNERİ YANLIŞ DENETİME NİŞAN ALIYOR:
#   · Hayalet devletleri bulan araç `denetle_anakronizm.py` ve o **HİÇ
#     ÖRNEKLEME YAPMIYOR** — bütün `s:` dönemlerini tarıyor (958 ham taşma) ve
#     Kızıldeniz vakasını zaten yakalıyor (`memluk` 31/107 dönem).
#   · Aşağıdaki sayaç ise `m:`/egemen uyuşmazlığını sayıyor; hayalet devlet
#     ARAMIYOR. Ölüm yılları eklenince sayaç 390 → 12.953'e fırladı (33 kat) —
#     yeni bir hata sınıfı değil, aynı şeyin 33 kat daha çok örneklenmesi.
#
# ⇒ Uygulanmadı. Kazancı sıfır, bedeli sayacın kıyaslanabilirliğini yitirmesi.
# 📌 Ders: bir örnekleme önerisi, önerinin hedeflediği hatayı hangi aracın
# aradığı doğrulanmadan uygulanmamalı. Öneri doğruydu, adresi yanlıştı.

# ---------------- 2t DEFTERİ — tavan bir sayı, defter bir küme -------------
# KOORDİNATÖR onayladı. Gerekçe A ve B defterlerininkiyle birebir aynı:
# tavan aşıldığında (63 > 62) sayı **hangisinin yeni olduğunu söyleyemiyor.**
# Elimde makul bir hipotez vardı — "içerik oturumları toprak kırılması olmayan
# maddeler yazıyor (ittifak, muhasara, Sofya 1878-01-04)" — ama bugün üç kez
# makul hipotez yanlış çıktı. Defter kurulunca ölçülmüş olacak.
#
# ⚠️ Kimlik `tarih|başlık`: A defterinde başlığı KASTEN dışarıda bırakmıştım
# (madde düzeltilince kırılma "kapandı + yeni açıldı" görünürdü). Burada
# tersi geçerli — **kayıt maddenin kendisi**, kırılma değil. Maddeyi tanımlayan
# şey başlığıdır; tarih tek başına aynı gün yazılmış iki maddeyi ayıramaz.
KIRILMASIZ_DEFTERI = os.path.join(KOK, "denetim", "KIRILMASIZ-DEFTERI.json")


def kirilmasiz_defteri(ksiz, yaz=False):
    """(yeni, kapanan, defter_boyu)."""
    simdi = {"%s|%s" % (o["t"], o.get("b", "")): (o.get("k") or "?") for o in ksiz}
    eski = {}
    if os.path.exists(KIRILMASIZ_DEFTERI):
        try:
            eski = json.load(open(KIRILMASIZ_DEFTERI, encoding="utf-8"))
            eski.pop("_NOT", None)
        except Exception:
            print("  !  KIRILMASIZ-DEFTERI.json okunamadı — bozuk olabilir")
    yeni = sorted(k for k in simdi if k not in eski)
    kapanan = sorted(k for k in eski if k not in simdi)
    if yaz:
        kayit = dict(simdi)
        kayit["_NOT"] = (
            "TEMEL DEFTER, 2026-08-01. ⚠️ TAVAN AŞILMIŞ HÂLDEYKEN yazıldı "
            "(63 / tavan 62). 'Defterde var' ≠ 'incelendi ve kabul edildi'. "
            "`antlasma` türündekilerin çoğu MEŞRU: statükoyu teyit eden barış "
            "(Kasr-ı Şirin, Zitvatorok) o gün sınır oynatmaz. Defterin işlevi "
            "ileriye dönük: bundan sonraki her ekleme YENİ diye adıyla çıkar.")
        open(KIRILMASIZ_DEFTERI, "w", encoding="utf-8", newline="").write(
            json.dumps(kayit, ensure_ascii=False, indent=1, sort_keys=True))
    return yeni, kapanan, len(eski)


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
    # Tâif ve Mekke AYRI düştü, 88 gün arayla — TDV `mekke`: 30 Nisan 1803
    # Suûd birinci kez işgal. Başlık KALIBI ("Vehhâbîlerin … ele geçirmesi")
    # tetikledi, olayların benzerliği değil.
    ("Vehhâbîlerin Tâif'i ele geçirmesi",
     "Vehhâbîlerin Mekke'yi ilk kez ele geçirmesi"),
    # ⭐ "AYNI KURUM, FARKLI AŞAMA" SINIFI — ARABİSTAN'ın TDV turu kesti.
    # Önek ölçütü bunu 0,500 benzerlikle mükerrer sandı ve ben "üç gerçek
    # mükerrer" diye raporladım; üçünden biri GERÇEK DEĞİLMİŞ. TDV
    # `sura-yi-devlet`: 5 Mart 1868 irade ile kuruldu, 10 Mayıs 1868 Bâbıâli'de
    # resmî açılış — İKİSİ DE DOĞRU, gerçekten ayrı olay.
    # 🟡 Bu bir AYAR sorunu değil, YAPISAL SINIR: aynı kurumun iki aşaması
    # kelime benzerliğiyle ayrılamaz, çünkü fark tam da FİİLDE (kuruldu ↔
    # açılışı) ve fiil ikisinde de tek kelime. Jaccard 0,500 çıkması DOĞRU.
    # Aynı sınıfa düşecek başka çiftler: tayin↔azil · kuşatma↔fetih ·
    # sefer↔antlaşma. Otomatik ayırmak yerine elle elenmesi daha ucuz.
    # ⚠️ Aynı `kaynak:` slug'ını paylaşmaları AYIRT EDİCİ DEĞİL — tek TDV
    # maddesi iki olayı anlatabilir ve doğru davranış zaten budur. Bu, "kaynak
    # slug'ı güçlü sinyal" hipotezimin ölçülmüş bir karşı örneğidir.
    ("Şûrâ-yı Devlet kuruldu", "Şûrâ-yı Devlet'in açılışı: Osmanlı Danıştayı'nın kuruluşu"),
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

# ⚠️ DÖRDÜNCÜ TUR — "eşiği düşür" ÖLÇÜLDÜ ve REDDEDİLDİ (hatalar 11 madde 36)
# Kullanıcı Âli Paşa'nın 1871 vefatını iki madde hâlinde gördü ve merkez oturum
# "eşiği ölçüme dayanarak ayarla" dedi. Ölçüm şunu söyledi: EŞİK SUÇLU DEĞİL.
#
# Yer gerçeği: kullanıcının gözüyle bulunup silinen 27 mükerrer çift (SİLİNDİ
# yorumlarından çıkarıldı). Bu çiftlerin başlık Jaccard'ı:
#     min 0.000 · orta 0.222 · max 0.333   → HEPSİ 0.34'ün ALTINDA
# Âli Paşa çifti ("Âli Paşa vefat etti" / "Sadrazam Âlî Paşa'nın vefatı:
# Tanzimat kadrosunun sonu") = 0.125.
#
# Eşiği düşürmenin ölçülmüş bedeli (aynı veri, ±400 gün penceresi):
#     eşik 0.340 →  12 çift ·  1 gerçek · 11 yanlış
#     eşik 0.250 →  93 çift · 16 gerçek · 77 yanlış
#     eşik 0.150 → 207 çift · 25 gerçek · 182 yanlış   ← hepsini yakalamak için
#     eşik 0.125 → 315 çift · 31 gerçek · 284 yanlış
# Yani "hepsini yakalayan" eşik %88 yanlış alarm üretir; OGRENILENLER §3'ün
# "101 yanlış alarmlı denetim güvenilirliğini kaybeder" kuralına çarpar.
# EŞİK 0.34'TE KALIYOR.
#
# Asıl kusur TESPİT değil TRİYAJ: 27 gerçek çiftin 27'si zaten ZAYIF ölçütte
# (aynı kişi + ±3 gün) yakalanıyordu — ama zayıf liste 57 çiftti, ihlal
# sayılmıyordu ve --ayrinti'siz yalnız ilk 8'i basılıyordu. Araç görüyordu,
# rapor gömüyordu. Çözüm: zayıf listeyi KADEMELE (bkz. KESIN_* ölçütleri).
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

# --- ZAYIF LİSTENİN KADEMELENMESİ — ölçülerek seçildi -----------------------
# Zayıf ölçüt (aynı kişi + ±3 gün) 57 çift üretiyordu; 27'si gerçek, 30'u
# meşru. %47 kesinlikle bir liste okunmuyor, nitekim okunmadı. Dört aday kural
# aynı yer gerçeğine karşı ölçüldü:
#
#   kural                                seçer  gerçek  diğer  kesinlik  duyarlılık
#   (mevcut) tüm zayıf liste               57      27     30      0.47      1.00
#   gün=0 VE aynı kaynak                   20      19      1      0.95      0.70
#   gün=0 VE (kaynak | J≥.10)              24      23      1      0.96      0.85
#   gün=0 VE (kaynak | J≥.10 | ortak≥3)    25      24      1      0.96      0.89  ←
#   gün≤1 VE (kaynak | J≥.10)              30      25      5      0.83      0.93
#
# Seçilen kural sonuncudan bir öncekidir: 25 seçimin 24'ü gerçek, TEK "diğer"i
# de gerçek bir mükerrer adayı (1718-07-21 Pasarofça çifti — aynı gün, aynı
# kaynak slug'ı, 6 ortak kişi). Yani ölçülen yanlış alarm SIFIR.
#
# GÜN FARKI 0 ŞARTI kritik: kaçırdığı üç çiftin üçü de 1-2 gün aralıklı, ve
# gün≤1'e gevşetmek 5 meşru çift getiriyor — hepsi Yavuz'un Mısır seferi gibi
# ardışık günlerde geçen ayrı olaylar (Halep 28/29 Ağustos, Trablusşam/Şam
# 26/27 Eylül). Bir gün gevşeklik burada tam olarak "sefer günlüğü" demek.
KESIN_JACCARD = 0.10        # zayıf ölçütü kesinleştiren minimum başlık benzerliği
KESIN_ORTAK_KISI = 3        # ya da bu kadar ortak kişi


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


# ============================================================================
# ÖNEK ÖLÇÜTÜ — `_kelimeler`in SABİT 6 HARF kırpması ortak kökü öldürüyor
# ============================================================================
# ARABİSTAN oturumunun vakası açığa çıkardı: "katli" (5 harf) ile
# "katledilmesi"[:6] = "katled". Ortak kök `katl` VAR ama küme kesişimi BOŞ,
# çünkü kırpma SABİT uzunlukta. Kelimelerden biri kırpma boyundan kısaysa
# ortak kök sessizce kayboluyor — benzerlik olduğundan düşük ölçülüyor.
#
# ⚠️ ÖLÇÜLDÜ, VE VAKAYI YİNE DE ÇÖZMÜYOR. Önek eşleşmesiyle 1622 çiftinin
# benzerliği 0,125 → 0,286 çıkıyor ama eşik 0,34. Yakalamak için eşiği 0,28'e
# indirmek gerekirdi; bu daha önce ölçüldü ve zararlıydı (0,15 → 182 çiftin
# 207'si yanlış). Yani bu bir EŞİK sorunu değil: o iki başlık gerçekten
# dokuz kökten yalnız ikisini paylaşıyor.
# 📌 1622 çiftinin asıl kusuru başka: `1622-05` AY hassasiyetinde yazılmış
# (CLAUDE.md §8 ihlali). Gün yazılsaydı "aynı gün" kademesi devreye girerdi.
#
# ÖLÇÜLEN KAZANÇ (n=4, ortak önek uzunluğu ≥ 4 harf): bugünkü ölçütün
# GÖRMEDİĞİ 9 çift · en az 3'ü GERÇEK mükerrer —
#     Pîrî Reis'in idamı 1554-01-01  ↔  Kaptan-ı derya Pîrî Reis idam edildi 1553-12-01
#     Şûrâ-yı Devlet'in açılışı 1868-05-10  ↔  Şûrâ-yı Devlet kuruldu 1868-03-05
#     Balkan Savaşları başladı 1912-10  ↔  I. Balkan Savaşı'nın başlaması 1912-10-08
#
# ⚠️ İHLAL KADEMESİNE KOYMUYORUM. Dokuz çiftin altısı yanlış pozitif ve ana
# denetimin "temiz" hükmü başka oturumlar için taşıyıcı; bir gecede kırmızıya
# çevirmek yanlış olurdu. Mevcut "ZAYIF ölçüt" listesi gibi GÖZDEN GEÇİRME
# listesi olarak basılıyor. Kademe yükseltmesi, üç gerçek çift kapandıktan
# sonra ve ölçülerek yapılır.
ONEK_ASGARI = 4


def _onek_orani(A, B, n=ONEK_ASGARI):
    """İki kök kümesi arasında ORTAK ÖNEK eşleşmeli Jaccard.

    ⚠️ Ölçüt ortak önek UZUNLUĞUDUR, `min(len(a), len(b))` değil. İlk yazımda
    min(len) kullanılmıştı ve vakayı kaçırıyordu: "katli"(5) vs "katledilmesi"
    beş harf kıyaslanınca "katli" ≠ "katle" çıkıyor, oysa ortak önek "katl"=4.
    """
    esles, kullanildi = 0, set()
    for a in A:
        for b in B:
            if b in kullanildi:
                continue
            lcp = 0
            for x, y in zip(a, b):
                if x != y:
                    break
                lcp += 1
            if lcp >= n:
                esles += 1
                kullanildi.add(b)
                break
    return esles / max(1, len(A) + len(B) - esles)


def _tam_kokler(b):
    """Kırpma YOK — `_kelimeler`in 6 harfe kırpan hâlinin önek eşleşmeli eşi."""
    t = b.lower().translate(_KATLA)
    t = "".join(c if (c.isalpha() or c == " ") else " " for c in t)
    return {w for w in t.split() if len(w) > 3} - _DURAK


def onek_olcutu(O):
    """Bugünkü ölçütün GÖRMEDİĞİ, önek eşleşmesiyle görünen çiftler."""
    S = sorted(O, key=lambda o: o["t"])
    out = []
    for i in range(len(S)):
        gi = _gun_no(S[i]["t"])
        for j in range(i + 1, len(S)):
            if _gun_no(S[j]["t"]) - gi > MUKERRER_GUN:
                break
            cift = (S[i]["b"], S[j]["b"])
            if cift in BILINEN_AYRI or cift[::-1] in BILINEN_AYRI:
                continue
            a, b = _kelimeler(S[i]["b"]), _kelimeler(S[j]["b"])
            ortak = len(a & b)
            eski = ortak / (len(a) + len(b) - ortak) if (a and b) else 0.0
            if eski >= MUKERRER_ESIK:
                continue                      # zaten bugünkü ölçüt yakalıyor
            yeni = _onek_orani(_tam_kokler(S[i]["b"]), _tam_kokler(S[j]["b"]))
            if yeni >= MUKERRER_ESIK:
                out.append((round(yeni, 3), S[i]["t"], S[i]["b"],
                            S[j]["t"], S[j]["b"]))
    return sorted(out, reverse=True)


# ============================================================================
# 7. DENETİM — SAVAŞ ↔ KRONOLOJİ SENKRONU (ARABİSTAN oturumu buldu)
# ============================================================================
# Değişmez 2 `yerlesimler.js` kırılmalarını kronolojiye bağlar. Ama
# `savaslar.js` kayıtları da HARİTADA GÖRÜNÜYOR — `lat/lon` ile ⚔ işareti
# çiziliyor — ve onları hiçbir denetim kronolojiye bağlamıyordu.
# Vaka: Rodos kuşatması `1522-06-26`'da kılıç beliriyor, "Rodos'un fethi"
# maddesi 178 GÜN SONRA akıyor. Kullanıcı altı ay boyunca sebebi anlatılmayan
# bir kılıç görüyor — Değişmez 2'nin tam önlemek için var olduğu şey.
#
# ⚠️ `sure:` ALANI SÜREYİ ANLATMAZ. Dosyanın kendi yorumu: "işaretin kaç gün
# görüneceği (varsayılan ~2 yıl)". Değerleri 200/300/365 gibi yuvarlak
# kovalardır — ÇİZİM parametresi, olgu değil. 170 kaydın 55'inde dolu.
# Kuşatmanın gerçek uzunluğu veride YOK; KOORDİNATÖR ikinci tarih alanına
# karar verdi, VERİ SAVAŞ yazacak. Bu alan gelene kadar denetim tek tarihe
# bakar ve KAYMAYI ölçer.
SAVAS_PENCERE = 30


# ---- HASSASİYET DÜŞÜŞÜ — "madde doğru, TARİHİ KABA" (ARABİSTAN buldu) -----
# Vaka:
#     olaylar*.js   t:"1517-01"      "Ridaniye — Mısır'ın fethi ve hilâfet"
#     savaslar.js   t:"1517-01-22"   "Ridaniye"
#     TDV ridaniye-savasi: 22 Ocak 1517
# Kronoloji AY hassasiyetinde, dizin ve TDV GÜN veriyor → 21 gün kayma.
#
# ⚠️ 7. DENETİM BUNU GÖREMEZ VE GÖRMEMESİ DOĞRU: 21 gün, ±30 penceresinin
# içinde — "maddesi var" diyor ve haklı. Ama tarih yine de kaba. Bu, "madde
# var mı ≠ doğru madde mi" ailesinin üçüncü üyesi: **madde doğru, tarihi kaba.**
#
# Ölçüt tam eşleşme ARAMIYOR, yalnız HASSASİYET DÜŞÜŞÜ arıyor: iki belge aynı
# olaydan bahsediyorsa ve biri günü biliyorsa, öteki de bilmeli. CLAUDE.md §8
# zaten "gün yaz" diyor; bu, o kuralın ölçülebilir hâli.
def hassasiyet_dususu(S, O):
    """(çift_sayısı, düşenler) — dizin günü biliyor, kronoloji bilmiyor."""
    ol = [(gun_no(tam(o["t"])), o.get("b", ""), o["t"]) for o in O]
    dusen, cift = [], 0
    for r in S:
        t = r.get("t")
        if not t or len(t) < 10:
            continue                      # dizin de gün vermiyorsa kıyas yok
        g = gun_no(t)
        yakin = [(abs(og - g), og, b, ot) for og, b, ot in ol
                 if abs(og - g) <= SAVAS_PENCERE]
        if not yakin:
            continue
        cift += 1
        yakin.sort()
        _, og, b, ot = yakin[0]
        if len(ot) < 10:                  # kronoloji ay/yıl hassasiyetinde
            dusen.append((t, r.get("ad", "")[:30], ot, b[:40], og - g))
    return cift, dusen


def savas_senkronu(S, O):
    """(toplam, aykiri) — aykiri: (tarih, ad, tur, en yakın maddeye gün, başlık)."""
    ol = [(gun_no(tam(o["t"])), o.get("b", "")) for o in O]
    aykiri = []
    for r in S:
        if not r.get("t"):
            continue
        try:
            g = gun_no(tam(r["t"]))
        except Exception:
            continue
        en = min(ol, key=lambda o: abs(o[0] - g))
        fark = en[0] - g
        if abs(fark) > SAVAS_PENCERE:
            aykiri.append((r["t"], r.get("ad", ""), r.get("tur", ""), fark, en[1]))
    return len(S), aykiri


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
                ortak = ka & kb
                if ortak:
                    # Kademe: aynı GÜN + (aynı kaynak | başlık benzerliği |
                    # üç ortak kişi) → kesin sayılır, ihlaldir. Gerekçe ve
                    # ölçüm KESIN_JACCARD'ın üstündeki blokta.
                    ayni_kaynak = (S[i].get("kaynak") or "\x00") == \
                                  (S[j].get("kaynak") or "\x01")
                    kesin = fark == 0 and (ayni_kaynak
                                           or oran >= KESIN_JACCARD
                                           or len(ortak) >= KESIN_ORTAK_KISI)
                    olcut = ("kişi!" if kesin else "kişi:") + \
                        ",".join(sorted(ortak)[:3])
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
# 🔴 MASKE SABİTLERİ ELLE KOPYALANMAZ — MOTORUN KAYNAĞINDAN OKUNUR.
# Yukarıdaki yorumun kendisi sayıyor: maske motorunkiyle BİREBİR aynı olmalı
# ve bunu ÜÇ sabit belirliyor — BOLGE kırpması, KARA_TOL sadeleştirmesi,
# DOGAL_GOL kurtarma kümesi. Eskiden üçü de elle kopyaydı; motor tarafında
# biri değiştiği an buradaki kopya SESSİZCE çürür ve konum denetimi FARKLI
# bir maskeyle ölçerdi — denetim yeşil yanarken harita bozulur. Aynı hata
# denetle_kapsama.py'de yaşandı ve a6215ce'de kaynaktan okumaya çevrildi;
# desen oradan (denetle_kapsama.py:47-58) alındı. En sinsisi DOGAL_GOL:
# motora beşinci bir göl eklense kopya küme bilmezdi ve iki maske ayrışırdı.
# ⚠️ Ayrıştırma başarısızsa SESSİZCE eski değere düşülMEZ: ölçemeyen denetim
# temiz denetim değildir, SystemExit ile durulur.
_UP = os.path.join(KOK, "arac", "uret_petek.py")
try:
    _src = io.open(_UP, encoding="utf-8").read()
    # 🔴 BÖLGE ARTIK TEK DİKDÖRTGEN DEĞİL. Koşu 9'da pencere L şekline geçti:
    #   BOLGE = unary_union([box(-12,-11,146,82), box(-25,60,-12,82)])
    # Batı kenarı İzlanda için açıldı ama düz dikdörtgen olsaydı şeridin %77'si
    # Batı Afrika olacaktı: Timbuktu'nun d/v/s üçü de boş ⇒ Senegal-Gambiya-
    # Moritanya beyaz delik, Agadir `fas` taşıdığı için Kanarya Adaları Fas
    # boyanırdı (PETEK/NOKTA ölçtü). Çentik onu dışarıda bırakıyor.
    #
    # ⚠️ VE BURADA TEK KUTUYA İNDİRGEMEK YASAK: `box(*bounds)` çentiği de
    # kapsar ve konum denetimi Batı Afrika'daki bir noktaya "içeride" der —
    # yani ölçemediği için değil, YANLIŞ ÖLÇTÜĞÜ için hata yapar. Birleşim
    # kullanılıyor; kutu sayısı bir ise davranış eskisiyle birebir aynı.
    _satir = re.search(r"^BOLGE\s*=.*$", _src, re.M)
    if not _satir:
        raise ValueError("BOLGE satırı bulunamadı")
    _kutular = [tuple(map(float, b)) for b in re.findall(
        r"box\(\s*(-?[\d.]+)\s*,\s*(-?[\d.]+)\s*,\s*(-?[\d.]+)\s*,\s*(-?[\d.]+)\s*\)",
        _satir.group(0))]
    if not _kutular:
        raise ValueError("BOLGE satırında hiç box(...) yok")
    _m = re.search(r"^KARA_TOL\s*=\s*([0-9.eE+-]+)", _src, re.M)
    if not _m:
        raise ValueError("KARA_TOL satırı bulunamadı")
    _KARA_TOL = float(_m.group(1))
    _m = re.search(r"^DOGAL_GOL\s*=\s*(\{[^}]*\})", _src, re.M)
    if not _m:
        raise ValueError("DOGAL_GOL satırı bulunamadı")
    import ast
    _DOGAL_GOL = ast.literal_eval(_m.group(1))
    if not isinstance(_DOGAL_GOL, set):
        raise ValueError("DOGAL_GOL küme olarak ayrıştırılamadı")
except Exception as _e:
    raise SystemExit("!! Maske sabitleri uret_petek.py'den okunamadı (%s) — "
                     "konum denetimi ölçemez, düzeltilmeden "
                     "koşturulmamalı" % _e)


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
    # L pencere: kutuların BİRLEŞİMİ (bkz. _kutular'ın yanındaki not — sınırlayıcı
    # dikdörtgene indirgemek çentiği kapsar ve yanlış "içeride" der).
    bolge = unary_union([box(*k) for k in _kutular])
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
        # 🔴 TARİHÎ GÖLLER — motor bunları okuyor (uret_petek.py:314), denetim
        # OKUMUYORDU. PETEK/NOKTA maskeyi satır satır yeniden kurunca çıktı.
        # Eksik olan: `data/goller.js` → tarihî Aral, **80.522 km²**.
        # Natural Earth Aral'ı kuruma SONRASI üç artık parça olarak taşıyor;
        # 1281-1923 boyunca tek göldü. Motor farkı kapatıyor, denetim
        # kapatmıyordu ⇒ tarihî Aral'a konan bir nokta denetimden TEMİZ geçer,
        # motorda peteği SIFIRLANIRDI.
        # 📌 Bu, aynı ailenin ALTINCI hâli (PETEK/NOKTA'nın sayımı): eksik dosya
        # kümesi · eksik maske katmanı · eksik kutu · eskimiş bağlılık listesi ·
        # fazla sadeleştirme · **eksik göl katmanı**. Hepsi tek cümle:
        # *denetim, motorun sorduğu soruyu değil kendi sorduğu soruyu ölçüyor.*
        try:
            sys.path.insert(0, os.path.join(KOK, "arac"))
            import girdi as _girdi
            for _eg in _girdi.oku_goller(sessiz=True):
                _g = shape(_eg["geometry"]).buffer(0).intersection(bolge)
                if not _g.is_empty:
                    gs.append(_g)
        except Exception as _e:
            print("   ⚠️ tarihî göller okunamadı (%s) — maske motordan EKSİK" % _e)
        if gs:
            # ⚠️ SADELEŞTİRME MOTORLA AYNI OLMAK ZORUNDA (uret_petek.py:317).
            # 6 Ağustos'ta NOKTA EKLEME "motor sadeleştirmiyor, denetim
            # sadeleştiriyor" diye bir ayrışma bildirdi; ÖLÇÜLDÜ ve ayrışma
            # YOKTU — ikisi de simplify(0.01). Buradaki toleransı düşürmek
            # denetimi motordan KATI yapar: motorun sorunsuz boyadığı noktayı
            # ihlal ilan eder. Denetimin işi motoru tahmin etmek.
            goller = unary_union(gs).buffer(0).simplify(0.01, preserve_topology=True).buffer(0)
            kara = kara.difference(goller).buffer(0)
            # 🔴 AMA SINIRDA OLANI DA GÖSTER — hüküm değil, UYARI.
            # İnari vakası: eski nokta gerçek göl poligonunun 20 m İÇİNDEydi,
            # sadeleştirilmiş poligonun DIŞINDA. Yani motor da denetim de
            # "karada" der ve ikisi de haklıdır, ama nokta suyun üstündedir.
            # Sadeleştirme sonrası maske ile ham maske arasındaki 0,2°²lik
            # ince şerit tam bu vakaları saklıyor.
            _ham = unary_union(gs).buffer(0)
            _sinir = [y["ad"] for y in Y
                      if _ham.covers(Point(y["lon"], y["lat"]))
                      and not goller.covers(Point(y["lon"], y["lat"]))]
            if _sinir:
                print("   ⚠️ SINIRDA: %d nokta ham göl poligonunun içinde ama "
                      "sadeleştirilmişin dışında (ihlal DEĞİL, motor da böyle "
                      "görüyor — ama nokta suyun üstünde): %s"
                      % (len(_sinir), ", ".join(_sinir[:6])))
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
        # "isg" (işgal örtüsü, 043e911) BİLEREK burada: sıfır uzunluk, ters
        # dönem ve KENDİ İÇİNDE çakışma denetimleri örtü için de geçerli — iki
        # işgalci aynı yeri aynı anda işgal edemez. Ama aşağıdaki s×d/v ve d×v
        # çapraz örtüşme döngülerine GİRMEZ: örtünün altındaki de jure dönemle
        # çakışması kuralın ta kendisidir (bkz. denetle_statu.py D bölümü).
        kategoriler = {"d": y.get("d") or [], "s": y.get("s") or [],
                       "v": y.get("v") or [], "isg": y.get("isg") or []}
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
    ap.add_argument("--defter-yaz", action="store_true",
                    help="2t defterini bugünkü durumla güncelle (temel yazımı)")
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

    # Değişmez 2 — çekirdek/kuyruk ayrımıyla (KUYRUK_DOSYALARI yorumu)
    Y_cekirdek = [y for y in Y if y.get("_kaynak") not in KUYRUK_DOSYALARI]
    Y_kuyruk = [y for y in Y if y.get("_kaynak") in KUYRUK_DOSYALARI]
    kir, acik = degismez2(Y_cekirdek, O)
    n2_kirilma, n2_acik = len(kir), len(acik)
    durum2 = "✓" if n2_acik <= BEKLENEN_ACIK else "✗"
    if n2_acik > BEKLENEN_ACIK:
        ihlal = True
    print(f"\nDeğişmez 2  {durum2}  {n2_kirilma} kırılma, {n2_acik} açık (beklenen {BEKLENEN_ACIK})")
    if n2_kirilma != BEKLENEN_KIRILMA:
        print(f"            ! kırılma sayısı beklenenden farklı ({n2_kirilma} ≠ {BEKLENEN_KIRILMA}) — sadece bilgi")
    if args.ayrinti and acik:
        for d, tip, adlar, baslik, fark in acik:
            # ⚠️ "31 gün uzakta bir madde var" cümlesi TESELLİ VERİYORDU.
            # Ölçülmüş üç vaka: Sevâkin'in İngiliz kontrolüne geçişi "Reji
            # İdaresi kuruldu (tütün tekeli)" ile eşleşiyor · Asmara 1889
            # "Haydarpaşa demiryolu imtiyazı" ile · Hudeyde/Moha/Zebîd 1849
            # "Baltalimanı Sözleşmesi" ile. Üçünde de madde YAKIN ama ALÂKASIZ.
            # YAKINLIK ALÂKA DEĞİLDİR — satır bunu artık söylüyor.
            alakali = _madde_yeri_aniyor(baslik, adlar)
            im = "" if alakali else "   ⚠️ madde bu yerlerden BAHSETMİYOR"
            print(f"    {d}  {tip:<7} {', '.join(adlar):<40} en yakın madde {fark} gün uzakta: {baslik}{im}")

    # ---- Değişmez 2'nin `s:` boyutu — ON AYLIK KÖRLÜK, bilinen borç olarak açıldı
    kir_s, acik_s = degismez2(Y_cekirdek, O, ("s",))
    durum2s = "✓" if len(acik_s) <= BEKLENEN_ACIK_S else "✗"
    if len(acik_s) > BEKLENEN_ACIK_S:
        ihlal = True
    print(f"Değişmez 2s {durum2s}  {len(kir_s)} YABANCI kırılması, {len(acik_s)} açık "
          f"(tavan {BEKLENEN_ACIK_S}) — bilinen borç")
    print( "            i iki yabancı devlet arasındaki devir de haritada renk")
    print( "              değiştirir; Değişmez 2 bunu bugüne kadar hiç sormadı.")
    if acik_s:
        for d, tip, adlar, baslik, fark in (acik_s if args.ayrinti else
                                            sorted(acik_s, key=lambda r: -len(r[2]))[:8]):
            print(f"    {d}  ({len(adlar):3d}) {', '.join(adlar[:3])[:44]:44s}"
                  f" | en yakın {fark}g: {baslik[:38]}")
        if not args.ayrinti and len(acik_s) > 8:
            print(f"    … {len(acik_s)-8} satır daha (--ayrinti)")

    # ---- İŞ KUYRUĞU — borç DEĞİL, tavana KATILMAZ, çıkış koduna etkimez
    if Y_kuyruk:
        for dosya in KUYRUK_DOSYALARI:
            Yk = [y for y in Y_kuyruk if y.get("_kaynak") == dosya]
            if not Yk:
                continue
            k_dv, a_dv = degismez2(Yk, O)
            k_s, a_s = degismez2(Yk, O, ("s",))
            print(f"Kuyruk      i  {dosya}: {len(Yk)} nokta · "
                  f"{len(k_dv) + len(k_s)} kırılma · "
                  f"{len(a_dv) + len(a_s)} MADDESİZ — iş kuyruğu, borç değil")
        print( "            i tavana katılmaz (borç etiketi alarmı uyuşturur —")
        print( "              2s 119→192 vakası); kuyruk EKSİLİR: madde yazıldıkça")
        print( "              iner, düşmüyorsa VERİ KRONOLOJİ'ye haber ver.")

    # ---- Değişmez 2'nin AYNADAKİ HÂLİ — kırılmasız madde
    ksiz = kirilmasiz_madde(kir, kir_s, O)
    durum2t = "✓" if len(ksiz) <= BEKLENEN_KIRILMASIZ else "✗"
    if len(ksiz) > BEKLENEN_KIRILMASIZ:
        ihlal = True
    print(f"Değişmez 2t {durum2t}  kırılmasız madde: {len(ksiz)} (tavan "
          f"{BEKLENEN_KIRILMASIZ}) — bilinen borç")
    print( "            i kronoloji 'Girit Mehmed Ali'ye bırakıldı' diyor ama")
    print( "              hiçbir nokta el değiştirmiyor — madde var, kırılma yok.")
    if ksiz:
        say = {}
        for o in ksiz:
            say[o.get("k")] = say.get(o.get("k"), 0) + 1
        print("            tür dağılımı: " + ", ".join(f"{k}×{v}" for k, v in
                                                       sorted(say.items(), key=lambda x: -x[1])))
        print( "            ⚠️ `antlasma` çoğunlukla MEŞRU: statükoyu teyit eden")
        print( "               barış (Kasr-ı Şirin, Zitvatorok) o gün sınır oynatmaz.")
        yeni_k, kapanan_k, boy_k = kirilmasiz_defteri(
            ksiz, yaz="--defter-yaz" in sys.argv)
        if boy_k == 0:
            print("            i 2t defteri BOŞ — ilk kez yazmak için: --defter-yaz")
        else:
            print(f"            2t defteri: {boy_k} kayıt · YENİ {len(yeni_k)} · "
                  f"KAPANAN {len(kapanan_k)}")
            for k in yeni_k[:10]:
                print(f"              + YENİ    {k[:78]}")
            for k in kapanan_k[:6]:
                print(f"              - KAPANAN {k[:78]}")
        print( "               ASIL SİNYAL `fetih` — bir yer fethedilip hiçbir nokta")
        print( "               el değiştirmemişse ya madde ya veri yanlıştır.")
        for o in [x for x in ksiz if x.get("k") == "fetih"]:
            print(f"    {o['t']}  {o.get('b','')[:62]}")

    # Değişmez 3
    celiskiler = degismez3(Y)
    n3 = len(celiskiler)
    # 🔴 BU BİR DEĞİŞMEZ DEĞİL, SAYAÇ — ölçülerek düşürüldü (31 Temmuz 2026).
    # Koordinatör "farklı egemen olanları sayma" diye daraltma önerdi; ölçüm
    # geriye SIFIR bıraktı: 389 çelişkinin 389'u "farklı egemen", yani
    # çelişkinin TANIMI. Daraltılacak gürültü ile korunacak sinyal ayrı kümeler
    # değil — tek sebebin sonucu: `m:` alanı ZAMANSIZ.
    #
    # ⇒ §34 gereği bu bir ölçüm değil sayaçtır: hiçbir veri hatasında farklı
    #   cevap veremez, yalnız YERLEŞİM EKLENDİKÇE artar. "390 kusur var" diye
    #   okunması yanlış okumadır ve bu sunum tam olarak ona yol açıyordu.
    # ⇒ Bu yüzden ✗ YOK, tavan YOK, çıkış koduna etki YOK.
    #   Tavanı olan şey ölçüttür; sayacın tavanı olmaz.
    # ⇒ Gerçek çözüm ZAMANLI `m:` (VERI-YAPISI.md borcu). O gelene kadar bu
    #   sayı mekanik olarak artacak ve BU BİR GERİLEME DEĞİLDİR.
    print(f"\nSayaç       ·  {n3} `m:`/egemen uyuşmazlığı — ŞEMA borcu, veri kusuru DEĞİL")
    print( "               `m:` zamansız; her yeni yerleşim bu sayıyı artırır.")
    print( "               Tavanı yok, ihlal değil — bkz. MIMARI.md §3.4")
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

    # Ek denetim — mükerrer kronoloji maddesi. ÜÇ kademe:
    #   [başlık] Jaccard ≥ 0.34            → İHLAL
    #   [kişi!]  aynı GÜN + ortak kişi +
    #            (aynı kaynak | J≥0.10 | 3 ortak kişi)  → İHLAL (ölçülmüş: 24/25)
    #   [kişi:]  ±3 gün + ortak kişi, aynı gün değil    → gözden geçirme listesi
    # İkinci kademe 2026-07-30'da ölçülerek eklendi: 27 gerçek mükerrerin
    # 27'si zayıf ölçütte zaten yakalanıyordu ama 57 çiftlik bir listeye
    # gömülüydü ve ihlal sayılmadığı için kimse bakmıyordu — Âli Paşa'nın 1871
    # vefatı bu yüzden kullanıcının gözüyle bulundu. Gerekçe ve ölçüm
    # KESIN_JACCARD'ın üstündeki blokta. Üçüncü kademede kalanların çoğu
    # Yavuz'un Mısır seferi gibi ardışık günlerde geçen AYRI olaylardır.
    # Triyaj edilen çiftler BILINEN_AYRI'ya yazılır ve liste kısalır.
    tum = mukerrer_maddeler(O)
    mk = [r for r in tum if r[4] == "başlık" or r[4].startswith("kişi!")]
    zayif = [r for r in tum if r[4].startswith("kişi:")]
    durum5 = "✓" if not mk else "✗"
    if mk:
        ihlal = True
    print(f"Ek denetim  {durum5}  mükerrer madde: {len(mk)} şüpheli çift (beklenen 0)")
    if zayif:
        print(f"            i {len(zayif)} çift ZAYIF ölçütte (aynı kişi + ±3 gün, "
              f"AYRI gün) — ihlal DEĞİL, gözden geçirilecek liste; --ayrinti ile tamamı")
        for yil, oran, a2, b2, olcut in (zayif if args.ayrinti else zayif[:8]):
            print(f"              [{olcut}] {a2['t']}  {a2['b'][:48]}")
            print(f"              {b2['t']}  {b2['b'][:48]}")
    if mk:
        for yil, oran, a, b, olcut in (mk if args.ayrinti else mk[:20]):
            print(f"    [{olcut}] {yil}  {a['t']}  {a['b'][:52]}")
            print(f"           {b['t']}  {b['b'][:52]}")
        print("    → gerçekten ayrı olaylarsa denetle.py'deki BILINEN_AYRI kümesine ekle")

    # ÖNEK ÖLÇÜTÜ — bugünkü belirtecin 6-harf kırpmasının GÖRMEDİĞİ çiftler
    onek = onek_olcutu(O)
    if onek:
        print(f"            i {len(onek)} çift ÖNEK ölçütünde (ortak kök var ama "
              f"6-harf kırpma öldürüyor) — ihlal DEĞİL, gözden geçirme")
        for oran, t1, b1, t2, b2 in (onek if args.ayrinti else onek[:6]):
            print(f"              {oran:.3f}  {t1:11s} {b1[:44]}")
            print(f"                     {t2:11s} {b2[:44]}")
        if not args.ayrinti and len(onek) > 6:
            print(f"              … {len(onek)-6} çift daha (--ayrinti)")

    # Ek denetim 7 — SAVAŞ ↔ KRONOLOJİ: haritadaki ⚔ anlatılıyor mu
    try:
        S = oku_pencere(os.path.join(DATA, "savaslar.js"), "SAVASLAR")
    except Exception as e:
        S = None
        print("Ek denetim  !  savaş senkronu ÖLÇÜLEMEDİ: %s" % str(e)[:60])
    if S is not None:
        n_s, ayk = savas_senkronu(S, O)
        durum7 = "✓" if not ayk else "i"
        print(f"Ek denetim  {durum7}  savaş senkronu: {n_s-len(ayk)}/{n_s} kaydın "
              f"±{SAVAS_PENCERE} gün içinde maddesi var")
        if ayk:
            print(f"            i {len(ayk)} kayıt açık — ihlal DEĞİL, çünkü çoğu")
            print( "              KUŞATMA BAŞLANGICI↔SONUÇ kaymasıdır: dizin kuşatmanın")
            print( "              başladığı günü, kronoloji bittiği günü yazıyor.")
            print( "              İkinci tarih alanı gelince ölçüt sonuca bakacak.")
            for t, ad, tur, fark, b in sorted(ayk, key=lambda r: -abs(r[3])):
                print(f"              {t}  {tur:8s} {ad[:30]:30s} {fark:+5d}g  {b[:34]}")

        # HASSASİYET DÜŞÜŞÜ — madde doğru olabilir, TARİHİ kaba
        n_cift, dusen = hassasiyet_dususu(S, O)
        if dusen:
            print(f"Ek denetim  i  hassasiyet düşüşü: {len(dusen)}/{n_cift} çiftte "
                  f"dizin GÜNÜ biliyor, kronoloji bilmiyor")
            print( "              §8 'gün yaz' kuralının ölçülebilir hâli. 7. denetim")
            print( "              bunları GÖREMEZ ve görmemesi doğru — ±30 içindeler.")
            for t, ad, ot, b, fark in sorted(dusen, key=lambda r: -abs(r[4])):
                print(f"              {t}  {ad:30s} ↔ {ot:10s} {fark:+4d}g  {b}")

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
