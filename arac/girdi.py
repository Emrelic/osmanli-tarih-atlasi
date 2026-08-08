# -*- coding: utf-8 -*-
"""
GİRDİ — yerleşim verisinin TEK okuma noktası
=============================================
`arac/uret_petek.py` ve `arac/denetle.py` yerleşim verisini buradan okur.

## Neden ayrı bir modül

Bu depoda iki araç aynı veriyi FARKLI katılıkta okuduğu için bir kez üretim
çöktü: `denetle.py` JS dizisinin sonundaki fazladan virgüle toleranslıydı,
motor değildi — denetim "temiz" derken üretim düşüyordu (bkz. uret_petek.py
içindeki uyarı). Aynı hatanın çok dosyalı girdide tekrar etmemesi için okuma
mantığı ve DOSYA LİSTESİ tek yerde duruyor. Bir parti canlıya alınacaksa
değişecek tek şey aşağıdaki `GIRDI_DOSYALARI` listesidir.

## Neden glob değil, izin listesi

`data/yerlesimler_*.js` desenini çıplak okumak cazip ama TEHLİKELİ: depoda
merge'e hazır OLMAYAN partiler duruyor ve desen onları sessizce içeri alır.

  data/yerlesimler_asya.js    344 nokta — 135 devlet kimliği renkler.py'de YOK,
                              tamamı 62°D'nin doğusunda, harita penceresi dışı
  (sayılar 2 Ağustos 2026 ölçümü — yorumdaki sayı ölçümün fotoğrafıdır ve
  eskir; partiye dokunan oturum yeniden ölçüp burayı düzeltir.
  yerlesimler_avrupa.js de bir dönem bu listedeydi: 15 kimliği renksizdi;
  RENK 15'ini yazınca — BOYALAR 114→129, c8cb964 — canlıya alındı, aşağıda.)

Kimliği tanımsız nokta üretimde uyarı verir ve bölgesi BOYANMAZ; yani glob
kullanmak "bir dosya ekledim" ile "haritada renksiz delik açtım"ı aynı işleme
indirger. İzin listesiyle bir partiyi canlıya almak tek satırlık, gözden
geçirilmiş bir karar oluyor.

## Bir parti nasıl canlıya alınır

1. Partinin bütün devlet kimlikleri `arac/renkler.py`'deki BOYALAR'da olsun
2. `py arac/denetle.py` — altı denetim de temiz olsun (ad çakışması, 3 km
   yakınlık ve maske kontrolü bu modül üzerinden çalışır)
3. Dosya adını aşağıdaki listeye ekle
4. `py arac/uret_petek.py` — üretim koşarken hiçbir girdi dosyasına YAZILMAZ
"""
import io
import json
import math
import os
import re

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DATA = os.path.join(KOK, "data")


def anlik_goruntu():
    """Girdi dosyalarını geçici bir dizine kopyalar ve DATA'yı oraya çevirir.

    ⚠️ ÜRETİM KİLİDİNİ KALDIRAN DEĞİŞİKLİK. Kilit teknik bir zorunluluk değil,
    protokoldü — ölçüldü: `uret_petek.py` 1320 satırda girdiye ÜÇ kez dokunuyor
    ve üçü de başta (parmak_izi · oku_goller · yukle). 233. satırdan sonraki
    1087 satır tamamen bellekle çalışıyor. Yani koşu sırasında dosyanın
    değişmesi motorun OKUDUĞUNU değiştirmiyor; kilit, değişikliğin çıktıya
    girdiğini SANMAYI önlemek için vardı.

    Anlık görüntü o sanıyı imkânsız kılıyor: motor koşu boyunca kopyadan okur,
    kopya değişmez, orijinaller serbest kalır.

    ⚠️ KOPYA ATOMİK DEĞİL. Üç dosya sırayla kopyalanırken araya bir yazma
    girerse KARIŞIK anlık görüntü çıkar (biri değişiklik öncesi, öteki sonrası).
    Pencere milisaniye ama sıfır değil. Bu yüzden kopyadan sonra orijinaller
    yeniden özetlenir; biri değiştiyse kopya TEKRARLANIR.
    Ölçülen maliyet: 3 dosya / 369 KB / 18 ms (iki tur sha256 dahil) —
    44 dakikalık koşuda 1/147.000.

    📌 VE BUGÜN AÇIK OLAN BİR KAPIYI KAPATIYOR: `oku_goller()` motorun 125.
    satırında, `yukle()` 233'te. Aralarında bir pencere var ve girdi orada
    değişirse motor KARIŞIK okur; `_GIRDI_IZI` bunu ancak üçüncü yazma
    noktasında, ~40 dakika sonra yakalar. Kilit tam bu pencereyi kapatmak için
    konmuştu ama KAPATMIYORDU. Anlık görüntü kapatıyor.
    """
    global DATA
    import hashlib
    import shutil
    import tempfile

    def _ozet(kok):
        iz = {}
        for ad in list(GIRDI_DOSYALARI) + [GOL_DOSYASI]:
            y = os.path.join(kok, ad)
            if os.path.exists(y):
                iz[ad] = hashlib.sha256(io.open(y, "rb").read()).hexdigest()
        return iz

    kaynak = DATA
    hedef = tempfile.mkdtemp(prefix="petek_girdi_")
    for deneme in range(1, 6):
        once = _ozet(kaynak)
        for ad in list(GIRDI_DOSYALARI) + [GOL_DOSYASI]:
            y = os.path.join(kaynak, ad)
            if os.path.exists(y):
                shutil.copy2(y, os.path.join(hedef, ad))
        if _ozet(kaynak) == once:
            DATA = hedef
            print(f"Girdi anlık görüntüsü: {len(once)} dosya kopyalandı"
                  + (f" ({deneme}. denemede)" if deneme > 1 else "")
                  + " → girdi dosyaları SERBEST")
            return hedef
        print(f"  anlık görüntü sırasında girdi değişti, tekrarlanıyor "
              f"({deneme}/5)")
    raise SystemExit("Girdi 5 denemede de durulmadı — kopya alınamadı.")

# ⚠️ SIRA ÖNEMLİ: aynı ad iki dosyada varsa hangisinin kazandığı değil, HATA
# verilmesi gerekir (aşağıda kontrol ediliyor). Sıra yalnız okunabilirlik için.
GIRDI_DOSYALARI = [
    "yerlesimler.js",           # çekirdek — Osmanlı ve komşuları
    # 153 nokta (Oturum 14). Merge provası 764'lük çekirdeğe karşı iki kez
    # koşturuldu (hatalar 2-3 oturumu): ad çakışması YOK, 3 km'den yakın çift
    # YOK, Değişmez 1 sahipsiz 34'te sabit, Değişmez 2 437 kırılma / 0 açık,
    # Değişmez 3 çelişki 378'de sabit (Afrika'dan sıfır katkı). 12 devlet
    # kimliğinin hepsi renkler.py'de tanımlı, yeni renk gerekmiyor. 58 dönemde
    # ocaklık ayrımı (Cezayir 23 / Tunus 21 / Trablus 14 nokta) geçirildi ve
    # tek açık kırılma üretmedi.
    # 9 nokta (PETEK/NOKTA, 3 Agustos 2026). Kirim Hanligi 3 noktayla
    # temsil ediliyordu: Bahcesaray-Kefe-Kerc. 70.868 km2 / 3 nokta =
    # nokta basina 23.623 km2; Bati Anadolu 2.154 km2 -- 11 KAT SEYREK.
    # Kullanicinin "cetvelle bolunmus Kirim" sikayeti (p3/H-0015, H-0022)
    # o uc noktanin ORTA DIKMELERIYDI. Sekiz kontrol temiz, Degismez 2
    # borcu 0, yeni renk gerekmedi.
    "yerlesimler_kirim.js",
    # 13 nokta (PETEK/NOKTA parti 2). Col 7 + Rumeli 6.
    # 🔴 BESI KASTEN SAHIPSIZ (Vadi Sirhan, Dumetulcendel, Teyma, Necid
    #    guneybatisi, Necid guneyi) -- BEKLENEN_SAHIPSIZ 50 -> 55 bu yuzden.
    #    Bunlar delik degil, DELIGIN ILACI: kuzey Arabistan sifir noktaydi,
    #    alti petek oraya 268-345 km'den uzanip tek noktada bulusuyordu
    #    (p5/H-0007'nin "yildiz ucgen" gorunumu). En yakin nokta mesafesi
    #    268 -> 87 km (3,1x).
    # ⚠️ Saraybosna ve Bosna ucu KAPANMADI: gereken alti nokta (Visoko,
    #    Konjic, Zenitsa, Prusac, Kamengrad, Sanski Most) TDV'de mustakil
    #    madde tasimiyor. VERI ARASTIRMA oturumuna devredildi.
    "yerlesimler_seyrek.js",
    # 3+ nokta (PETEK/NOKTA, VERI ARASTIRMA turu). Konice · Visoko ·
    # Bogazici Rumeli yakasi. Saraybosna 2. en yakin nokta 49,3 -> 23,4 km
    # (p3/H-0016 kapandi). Bogaz kuzeyinde kazanan artik BIZANS (7,0 km),
    # Anadolu Hisari (13,5 km) degil -- p3/H-0001+H-0013.
    "yerlesimler_ek2.js",
    # 5 nokta (PETEK/NOKTA parti 4, 3 Agustos 2026). Kuzey Afrika
    # presidio'lari 3 + Karadeniz kuzeyi bozkiri 2.
    # 🔴 CAPRAZ IBERYA D2'nin olctugu bosluk: Melilla'nin en yakin komsusu
    #    112,86 km oteydi (Nedrume) ve bir Ispanyol enklavi haritada
    #    ZEYYANI/OSMANLI toprgi olarak goruntyordu; Sebte'de ise
    #    Cebelitarik'in peteği Ingiltere'yi 219 yil olmadigi yere tasiyordu.
    # ⚠️ Melilla partinin EN ZAYIF kaydi ve dosyada isaretli: yer ve
    #    Ispanyol hakimiyeti TDV ile sabit, 1497 TARIHI DEGIL.
    # 📌 Ucu de s:→s:, Degismez 2 borcu SIFIR. Sebte'nin 1581-01-01'i
    #    Oturum 0 tarafindan 1581-04-16'ya (Tomar Cortes) hizalandi.
    "yerlesimler_ek3.js",
    # 4 nokta (PETEK/NOKTA parti 6, 3 Agustos 2026). IKISI KASTEN SAHIPSIZ
    # dolgu -- BEKLENEN_SAHIPSIZ 55 -> 57 bu yuzden.
    # 🔴 Hamad (Badiyetu's-Sam): olculdu, cevre vahalarin petegi cole
    #    uzaniyordu ve 248.342 km2'nin %74'u OSMANLI boyaniyordu. Kimse
    #    karar vermedi; "dokunmamak" tarafsiz degildi. Tek dolgu %74 -> %52.
    # 🔴 Libya ic colu: ayni sinif, %64 -> ~%50. Orada zaten uc dolgu vardi,
    #    yani karar coktan verilmisti; eksik olan tek hucreydi.
    # 📌 Zaporojye Seci: `zaporojye` kimligi renkler.py ve devletler.js'te
    #    AYLARDIR tamdi (kunye · pencere · olculmus ΔE 33,0) ama haritada
    #    TEK METREKARESI YOKTU. Bu, ona verilen ILK GOVDE (33.669 km2).
    # 📌 Sloboda bozkiri: YENI IDDIA TASIMIYOR -- zinciri Harkov'un birebir
    #    aynisi, tek isi hucrenin cozunurlugunu 115 -> 67 km indirmek.
    "yerlesimler_ek4.js",
    # 1 nokta (PETEK/NOKTA parti 12): Gyula (Gole). CLAUDE.md 3.5.1 onu
    # ACIKCA sayiyordu ama dort nokta eklenirken ATLANMISTI; MOTOR 3 okudu,
    # TDV `timisvar` dogruladi ("Timisvar, GOLE (Gyula) ve Arad").
    "yerlesimler_ek5.js",
    # 3 nokta (PETEK/NOKTA parti 17). Cerkask (Razdory) DON ORDUSU'NUN
    # BASKENTI -- devletler.js kunyesinde yaziliydi, HARITADA YOKTU.
    # + Don ve Donets bozkirlari: hucre 8 (133->71 km), hucre 10 (156->83).
    # Dordu de s:->s:, Degismez 2 borcu SIFIR.
    "yerlesimler_ek6.js",
    "yerlesimler_afrika.js",
    # 15 nokta (NOKTA EKLEME, 1 Ağustos 2026). Beş boşluğun ölçülmüş kapanışı:
    # Yukarı Macaristan 4 (Kassa·Eperjes·Tokaj·Sopron, ~28.000 km² 91 yıl yanlış
    # Osmanlı) · Dalmaçya kıyı 4 (Zadar·Şibenik·Split·Kotor) · Klis sancağı 5
    # (Knin·Sin·Klis·Vrana·Nadin) · Herseknovi · Bihaç. Toplam 76.353 km² petek.
    # Kabul ölçütü canlıymış gibi ayrıca koşturuldu: ad çakışması YOK, 3 km en
    # yakın çift 8,38 km, maske 15/15 içeride, Değişmez 1 15/15 KESİNTİSİZ
    # (günlük tam tarama), 8 kimliğin 8'i renkler.py'de — YENİ RENK GEREKMEDİ.
    # Dört kırılma borcu VERİ KRONOLOJİ tarafından kapatıldı (Sin 1513 · Knin
    # 1522-05-29 · Klis 1537-03-12 · Klis kaybı 1648-03-31 · Bihaç 1592-06-19).
    # ⚠️ Skradin ÇIKARILDI: 1522 fethinin GÜNÜ bilinmiyor; madde uydurma gün
    #    taşımasın diye kayıt dosyada YORUM olarak bekliyor (§76).
    "yerlesimler_ek.js",
    "yerlesimler_ortaasya2.js",
    # 7 nokta (MOTOR 2, 2 Ağustos 2026). Canlıya alınma gerekçesi — üç ön koşulun
    # üçü de ölçülerek sağlandı: ① 9 devlet kimliğinin 9'u renkler.py BOYALAR'da
    # tanımlı (yeni renk gerekmedi), ② 7/7 nokta BOLGE kutusunun İÇİNDE
    # (lon 51,92..61,50 — kutu işi yok), ③ canlı 991 noktaya karşı 3 km çakışması
    # YOK (en yakın çift 17,36 km: Aşkabad ↔ Nesâ), partinin kendi içinde de yok.
    "yerlesimler_avrupa.js",
    # ⚠️ 3 Agustos 2026: bu blokta iki kez '9f4d2c8' yaziyordu ve o hash
    # REPODA YOK -- uydurulmus bir referansti (RENK oturumu olctu, koordinator
    # dogruladi). Gercegi c8cb964 "RENK Parti 2: 15 Avrupa rengi yazildi".
    # 📌 KURAL: belgeye hash yazmadan once `git cat-file -e <hash>^{commit}`
    #   ile dogrula. Cozulmeyen referans guven kaynagi degil, GUVEN TUZAGIDIR.
    # 237 nokta (MOTOR 2 İş O, 2 Ağustos 2026). Canlıya alınma gerekçesi —
    # dört ön koşul ÖLÇÜLDÜ (İş I, 73bded7) ve son engel RENK'le kapandı:
    # ① 35 kimliğin 35'i renkler.py'de tanımlı (RENK 15'ini yazdı: BOYALAR
    #   114→129, c8cb964; bu oturum 15/15'i yeniden doğruladı),
    # ② canlı 998 noktaya karşı 3 km çakışması YOK (en yakın 12,31 km:
    #   Reggio Calabria ↔ Messina), partinin kendi içinde de yok,
    # ③ 235/237 BOLGE kutusunun içinde — Sundsvall (62,4°K) ve Trondheim
    #   (63,4°K) BUGÜN kutu dışında: kuzey kenarı 64 olunca girecekler,
    #   o zamana dek maske-dışı görünmeleri BEKLENEN durumdur,
    # ④ tarih hassasiyeti: YYYY-01-01 yer tutucu %25 (ortaasya2: %59).
    "yerlesimler_asya.js",
    # ── KOŞU 9 · 4 Ağustos 2026 ─────────────────────────────────────
    # ek7  İskandinavya 39 nokta — kutunun kuzeye açılmasını bekliyordu
    # ek8  kuzey 39 nokta (lat 64,5-80,3) — KUTU AÇILMADAN ANLAMSIZ:
    #      hepsi eski 64° tavanının üstünde. Kutu L şekline geçtiği
    #      koşuda birlikte iniyor.
    # ek9  Sibirya 12 nokta — kutuyu BEKLEMİYOR, bugünkü kutunun içindeki
    #      10,98 mn km²lik noktasız alanı kapatıyor (58-91°D / 44°K kuzeyi;
    #      6,57 mn km²si şu an Mançu/Moğol renginde görünüyor).
    # 🔴 Üçünün de bütün devlet kimlikleri renkler.py BOYALAR'da TANIMLI
    #    (ölçüldü: renksiz 0). ek10/ek11/ek12 bu yüzden DIŞARIDA —
    #    sibir-hanligi · estonya · izlanda renkleri henüz yok.
    "yerlesimler_ek7.js",
    "yerlesimler_ek8.js",
    "yerlesimler_ek9.js",
    # ── PARTİ 20 · 6 Ağustos 2026 (NOKTA EKLEME) ────────────────────
    # ek13 Amur aşağısı · Ohotsk kıyısı · Sahalin · Orta Sibirya, 16 nokta.
    #      `ek9`un (koşu 9) AÇIK BIRAKTIĞI iki cebi kapatıyor.
    # 🔴 SIRAYI ATLADI ve sebebi ölçüldü: `ek10·ek11·ek12` renk beklediği
    #    için hâlâ dışarıda, `ek13` ise HİÇBİR ŞEY BEKLEMİYOR. Sıra numarası
    #    bir bağlanma ölçütü değil; bekleyen borç öyle.
    # ÖLÇÜLDÜ (koordinatör, bağlamadan önce — dosyanın kendi iddiaları
    # doğrulandı, devralınmadı): kutu 16/16 içinde · kullanılan 3 kimlik
    # (rusya · qing-hanedani · meiji-japonya) üçü de BOYALAR'da ve üçünün
    # de dizin künyesi var · d:/v: dönemi 0 ⇒ Değişmez 2 borcu YAPISAL
    # SIFIR · 3 km'den yakın çift YOK · dönem sağlığı temiz.
    "yerlesimler_ek13.js",
    # ── PARTİ 21 · 6 Ağustos 2026 (NOKTA EKLEME) ────────────────────
    # ek14 Mâverâünnehir çekirdeği 9 nokta · ek15 Hokand Hanlığı 7 nokta.
    # `box(37-45°K / 62-76°D)`de TEK nokta vardı (Kaşgar, doğu kenarında):
    # Semerkant · Buhara · Taşkent · Hokand · Andican · Hucend · Termez ·
    # Belh — Timur'un başkenti dâhil hiçbiri yoktu. ~1,5 milyon km².
    # 🔴 DOSYA BAŞINA TEK ENGEL kuralı iki turda ikinci kez işledi:
    #    parti üçe bölündü, `hokand` rengi oturum SIRASINDA geldi (RENK 2,
    #    BOYALAR 231→232) ve on altı nokta birden bağlanabilir oldu.
    #    Bölünmeseydi hepsi `_ek16`nın afgan renkleri yüzünden beklerdi.
    # ⚠️ `_ek16` (2 nokta) BAĞLANMADI: `afgan-durrani` ve `afganistan`
    #    ne renkte ne DİZİNDE var (ölçtüm — parti "renk bekliyor" diyor,
    #    künye de gerekiyor).
    # ÖLÇÜLDÜ (koordinatör, bağlamadan önce — parti 20'de bunu ATLAMIŞTIM):
    #   Değişmez 1  ✓ 16 kaydın 16'sı 1281'den KESİNTİSİZ sahipli ⇒ tavan
    #               102'de KALIR. Parti bunu ÖNCEDEN yazdı ve tuttu.
    #   Değişmez 2  ✓ d:/v: dönemi 0 · kutu 16/16 · renksiz 0 · dizinsiz 0
    #   3 km ✓ · dönem sağlığı ✓
    "yerlesimler_ek14.js",
    "yerlesimler_ek15.js",
    # ── PARTİ 22 · 6 Ağustos 2026 (NOKTA EKLEME) ────────────────────
    # ek17 Orman-bozkır kuşağı 11 nokta: Çernigov · Novgorod-Seversk ·
    # Putivl · Bryansk · Kursk · Orel · Ryazan · Belgorod · Tambov ·
    # Penza · Simbirsk.
    # 🔴 SEVK GEREKÇEM ÇÜRÜTÜLDÜ VE HEDEF KAYDIRILDI — parti haklıydı.
    #   Koordinatör "Karadeniz kuzeyi bozkırı"nı onayladı; dayanak partinin
    #   KENDİ `PARTİ 1 §⑥` listesiydi ve ÜÇ GÜNDE bayatlamıştı:
    #       bozkır 44-50°K   parti 1: yarıçap 130-215 km
    #                        bugün  : ort 81 km · en uzak 191 km  ⇒ DOLMUŞ
    #   (arada Zaporojye · Don Kazak · Sloboda · Donets · Camboyluk ·
    #    Yediçkul · Kalmuk bozkırı eklenmiş — 50 nokta)
    #   Açlık BİR KUŞAK KUZEYE kaymış: 50-54°K, 640.745 km², ort 162 km,
    #   EN UZAK 303 km; Tula ile Voronej arasında 280 km boyunca sıfır nokta.
    #   📌 §1.5 dersinin dördüncü vakası — ama bayatlayan belge CLAUDE.md
    #   değil PARTİNİN KENDİ ilerleme dosyası. Sevki reddetmedi, ÖLÇÜP
    #   hedefi kaydırdı.
    # 🔴 VE ORADA RENK DE YANLIŞTI: 1500'de kuşağın %28,8'i (184.611 km²)
    #   `kirim`. Sebep veri hatası DEĞİL, saf §2 emilmesi — Voronej
    #   (kirim 1441→1585) ve Harkov (kirim 1441→1654) kayıtları KENDİ
    #   BAŞINA doğru ama petekleri 300 km kuzeye taşıyor; Ryazan · Tambov ·
    #   Penza haritada Kırım Hanlığı görünüyordu. Yeni noktalar taşmayı
    #   o kayıtlara HİÇ DOKUNMADAN kesiyor.
    # ÖLÇÜLDÜ (koordinatör): Değişmez 1 sahipsiz 0 · d:/v: 0 · renksiz 0 ·
    #   dizinsiz 0 · dönem sağlığı temiz.
    # 🟢 VE `2s` TAHMİNİ İLK KEZ ÖNDEN YAZILDI (yeni kural): +3.
    "yerlesimler_ek17.js",
    # ── PARTİ 23 · 6 Ağustos 2026 (NOKTA EKLEME) ────────────────────
    # ek18 Batı Sibirya + Altay eteği 10 nokta: Tara · Omsk · Kainsk ·
    # Kuznetsk · Biysk · Barnaul · Zmeinogorsk · Pavlodar · Semipalatinsk ·
    # Ust-Kamenogorsk. `ek13`in KENDİ açık bıraktığı en uzak hücre.
    #   box(48-58°K/75-95°D) 1.473.752 km² · TOPLAM 3 nokta, üçü de kenarda
    #   ort 382 km · en uzak 761 km · 1600'de %59,9 SAHİPSİZ
    #   Kolıvan-Kuznetsk hattı (Rusya'nın en yoğun 18. yy Sibirya kale
    #   zinciri) atlasta hiç yoktu.
    # ⚠️ §3.5.1 öbür uç: Kobdo'nun kaydı DOĞRU; kusur değerinde değil
    #   MENZİLİNDE — altı Rus kalesi orta dikmeyi İrtiş'e indiriyor.
    # 🔴 QING YAKASINA NOKTA KASTEN KONMADI ve bundan kural doğdu:
    #   Çin Altayı'nın 1912 sonrası kimliği `cin-cumhuriyeti` ve o RENKSİZ
    #   (44 renksiz kimliğin birincisi, 85 pencere). Nokta konsaydı
    #   DÜZELTİRKEN YENİ BOYASIZ ALAN AÇILIRDI.
    #   ⇒ "İki uçlu düzeltme, öbür ucun rengi yoksa TEK UÇLU kalır.
    #      Renksiz kimlik, §3.5.1'in istisnasıdır."
    # ÖLÇÜLDÜ: kimlik cungar·rusya (ikisi de renkli+dizinli) · d:/v: 0 ·
    #   kasitli_bosluk 10/10 + neden 10/10.
    "yerlesimler_ek18.js",
    # ── PARTI 21 artigi · ek16 (2 nokta, Afganistan) ────────────────
    # RENK 2 `afgan-durrani` rengini, koordinator `afgan-durrani` ve
    # `afganistan` kunyelerini yazinca engel kalkti. Iki nokta o gunden
    # beri bekliyordu ve engel RENK DEGIL KUNYE+RENK ikilisiydi -- parti
    # "renk bekliyor" demisti, olculdu, kunye de yoktu.
    # ⚠️ Tek kalan dizinsiz kimlik `iran` ve o BU PARTININ ESERI DEGIL:
    #   `iran` renkli ama devletler.js kunyesi yok (BEKLEYENLER kalemi).
    "yerlesimler_ek16.js",
    # ── PARTI 25 · 6 Agustos 2026 (NOKTA EKLEME) ────────────────────
    # ek20 Cin Altayi ve Cungarya 4 nokta: Cocek (Tarbagatay) ·
    # Altay (Sara Sume) · Zaysan · Cungarya havzasi.
    # 🔴 BU PARTI, PARTI 23UN ACTIGI HATAYI KAPATIYOR:
    #   1800 · 42-49,5K/78-96D  `rusya` boyanan CIN topragi
    #     Ust-Kamenogorsk  99.500 km2 · Semipalatinsk 41.378 km2
    #     TOPLAM 140.878 km2 / 17 hucre
    #   Tarbagatay · Zaysan · Cin Altayi 1755ten beri Qing idi;
    #   Rusya'ya ancak 1864 Cugucak protokoluyle gecti ⇒ 64 YIL ERKEN.
    # 📌 VE AYNI DESEN AYNI GUN UCUNCU KEZ, ucunde de tasan nokta
    #   PARTININ KENDI noktasi:
    #     PARTI 20 Selenginsk        24.144 km2  (PARTI 24 kesti)
    #     PARTI 23 UstKam+Semipal   140.878 km2  (PARTI 25 kesiyor)
    #   "§3.5.1i YAZMIS, UYGULAMAYI ATLAMISIM."
    #   ⇒ Partinin kendine cikardigi kural: bir SINIR noktasi eklerken,
    #     orta dikmenin obur tarafinda da nokta olup olmadigi AYNI
    #     PARTIDE olculur. Sonrakine birakmak, hatayi bir tur boyunca
    #     YAYINDA tutmak demek.
    # 🟢 Ve koordinatorun "obur ucun rengi yoksa tek uclu kalir" kurali
    #   DEGISMEDI, kosulu dustu: `cin-cumhuriyeti` artik renkli.
    # ⚠️ Gulca'nin `rusya 1871-07-04 → 1882-03-22` donemi KOPYALANMADI:
    #   o Rusya'nin Ili vadisi isgali (Yakub Beg isyani), Petersburg
    #   antlasmasiyla geri verildi; bu dort nokta isgalin icinde degil.
    # OLCULDU: kimlik 6 (hepsi renkli+dizinli) · d:/v: 0 · sahipsiz 0
    #   · donem sagligi temiz.
    "yerlesimler_ek20.js",
    # ── PARTI 24-27 · 6 Agustos 2026, r833 YAYININDAN SONRA ─────────
    # Uc dosya da kosu sirasinda dogdu (anlik goruntu 05:20:03) ve
    # BILEREK BEKLETILDI: baglansalardi URETIM_IZI bozulur, yayin
    # BAYAT gorunurdu. "Anlik goruntu YAZABILIRSIN der, BAGLAYABILIRSIN
    # demez." r833 yayinlandi, siradaki kosuda haritaya girecekler.
    # KOVA KARARI OLCULDU (her noktanin en yakin 3 komsusunun kovasi):
    #   ek19  12 kuyruk / 6 cekirdek → KUYRUK (Mogolistan asya ile)
    #   ek21  18/18 kuyruk          → KUYRUK
    #   ek22  15/15 cekirdek        → cekirdek
    "yerlesimler_ek19.js",
    "yerlesimler_ek21.js",
    "yerlesimler_ek22.js",
    # ── HALKA-2 NOKTA PARTILERI · 7 Agustos 2026 ───────────────────
    # Uc oturum, uc bolge, 333 yeni nokta. Yogunluk olcumu (nokta/mn km2):
    #   Sudan-Habes-Somali-Umman   8,9 -> 25,2   (181 nokta)
    #   Avrupa Rusyasi            17,7 -> 36,5   ( 88)
    #   Kuzey Afrika              26,5 -> 39,6   ( 64)
    # Ucu de denetle.py KUYRUK_DOSYALARI listesinde -- 2s tavani 121
    # DOLUYDU ve iki oturum bunu YAZMAYA BASLAMADAN olcup bildirdi.
    "yerlesimler_h2_afrika.js",
    "yerlesimler_h2_rusya.js",
    "yerlesimler_h2_kuzeyafrika.js",
    # ── GÜNEYDOĞU ASYA · 8 Ağustos 2026 ─────────────────────────────
    # Emre: "yerleşim katmanını tüm dünyayı olabildiğince hızlı
    # doldurmalıyız." Pencere içindeki EN SEYREK bölge: 11 alt kutuda
    # 76 nokta / ~23,3 mn km² ⇒ yoğunluk 3,3 (Anadolu 130,1).
    # 🔴 Bu satır BOŞ DOSYA açılırken kondu — dün öğrenilen "üç yer"
    # kuralı: bağlanmamış dosya YAZILMAMIŞ dosyadır.
    "yerlesimler_gdasya.js",
    # ── ESTONYA · 7 Agustos 2026 ────────────────────────────────────
    # ek11 Tallinn (Reval) · Narva · Tartu (Dorpat) · Parnu, 4 nokta.
    # PARTI 19dan beri BEKLIYORDU ve tek engeli `estonya` rengiydi;
    # RENK 2 bugun yazdi, engel dustu.
    # 🔴 Odunc renk VERILMEMISTI ve gerekcesi olculmustu: estonyayi
    #   1923e kadar Rus boyamak, harita 1919da Letonya ve Finlandiyayi
    #   BAGIMSIZ gosterirken aradaki Estonyayi Rus gosterirdi.
    #   ⇒ Oduncun olcusu SURE degil, KOMSUSUYLA CELISIP CELISMEDIGI.
    # OLCULDU (baglamadan once): renksiz 0 · dizinsiz 0 · sahipsiz 0 ·
    #   d:/v: donemi 0 ⇒ Degismez 1 ve 2 borcu YOK.
    "yerlesimler_ek11.js",
    # ── SIBIR + IZLANDA · 7 Agustos 2026 ────────────────────────────
    # ek10 Tumen (Cimgi-Tura) · Tobolsk (Isker) · Tara · Baraba bozkiri
    # ek12 Reykjavik · Akureyri · Dogu Gronland · Kuzeydogu Gronland
    # PARTI 19dan beri bekliyorlardi; engelleri RENK ve KUNYE ikilisiydi.
    #   RENK 2   `sibir-hanligi` + `izlanda` renklerini yazdi
    #   koordinator  ayni iki kunyeyi devletler.js"e yazdi (306 -> 308)
    # 📌 Parti "renk bekliyor" diyordu; olculdu, KUNYE de yoktu.
    #   Bugun ucuncu kez ayni desen: engel cogu zaman RENK+KUNYE ikilisi.
    # ⚠️ _ek12"nin IKI noktasi KASTEN SAHIPSIZ (Dogu ve Kuzeydogu
    #   Gronland) -- BEKLENEN_SAHIPSIZ 112 -> 114 bu yuzden. Gronland
    #   1281-1923 boyunca Danimarka"nin NOMINAL iddiasi altindaydi ama
    #   dogu kiyisinda fiili idare yoktu; bos birakmak DOGRU.
    "yerlesimler_ek10.js",
    "yerlesimler_ek12.js",





    # 344 nokta (MOTOR 2, 2 Ağustos 2026 — kutu genişletme koşusuyla).
    # KOORDİNATÖR KARARI: 37-renkle açılış — 147 kimliğin 49'u boyalı, 98'i
    # renksiz ve renksiz dönem BOŞLUK üretir (yanlış renk değil; motor
    # kuralı). Ölçüldü (İş T): kalıcı boşluk 13 nokta / kara %1,2; dönemsel
    # tepe 1550'de yeni gelen alanın ~%33'ü; bugün boyalı HİÇBİR alan
    # boşalmaz (regresyon 0 km² — ölçüm). 98 kayıt koşu SONRASI iş kuyruğu
    # (denetle.py KUYRUK_DOSYALARI bu dosyayı zaten ayrı sayaçla izliyor;
    # 1550 öncelik listesi: kuzey-yuan · mogulistan · yarkent · tibet).
    # Ön koşullar: 3 km çakışma 0 (İş J evreninde) · kutu ölçümleri İş C/J/M
    # · maske-dışı 0 beklenir (344/344 yeni kutunun içinde — İş C ③b).
]

YAKINLIK_ESIK_KM = 3.0          # CLAUDE.md §11: 3 km içinde ikinci nokta açma

# ⚠️ ALAN NORMALİZASYONU — bu modülün var olma sebebinin ikinci kanıtı
# Şema alanlarının çoğu İSTEĞE BAĞLI ve dosyalar farklı alışkanlıklarla yazılmış:
#   yerlesimler.js       : d: HER kayıtta var (boşsa d:[] yazılmış)
#   yerlesimler_afrika.js: 47 kayıtta d: HİÇ YOK — Osmanlı dönemi olmayan yerler
# Motor `y["d"]` diye okuyordu, denetim `y.get("d")` diye. Afrika partisi girdiye
# eklendiği anda üretim `KeyError: 'd'` ile düştü — denetim ise TEMİZ diyordu.
# Bu, sondaki virgül vakasının birebir aynısı: iki araç aynı veriyi farklı
# katılıkta okuyor. Çözüm de aynı yerde olmalı — normalizasyon burada yapılır,
# iki araç da tam alanlı kayıt alır. Yeni bir isteğe bağlı alan eklenirse
# (kur:, bit:, kd:) varsayılanı BURAYA yazılır, iki aracın koduna değil.
VARSAYILAN = {
    "tur": "sehir",
    "g": 0,
    "k": 0,          # idari kademe: 0 = kademesiz
    "m": None,       # bağlı olunan k1/k2 merkezin adı
    "s": [],         # yabancı sahiplik dönemleri
    "d": [],         # doğrudan Osmanlı dönemleri
    "v": [],         # tâbi / dolaylı idare dönemleri
}

# ⚠️ BİLİNEN ALAN KÜTÜĞÜ — "sessizce yutulan alan" hata sınıfının kapağı
# Yeni bir alan (isg:, kur:, bit:, go:) şemaya girdiğinde motor onu tanımaz ve
# HİÇ SES ÇIKARMADAN yok sayar. Sorun yeni alanda değil, YAZIM HATASINDA:
# `isg:` yerine `isgal:`, `kur:` yerine `kr:` yazılırsa veri dosyada durur,
# denetim temiz raporlar, harita eski hâlinde kalır ve kimse fark etmez.
# Bu depoda aynı sınıftan üç hata çıktı (sondaki virgül, KeyError:'d', ek9'un
# yayına bağlanmaması) ve üçü de "iki araç aynı veriyi farklı katılıkta okuyor"
# yüzündendi. Kütük, yeni alanı AÇIKÇA kaydetmeye zorlar.
# Bir alanı buraya eklemek "motor bunu okuyor" demek DEĞİLDİR; "bu alanın
# varlığından haberdarım" demektir. Hangi aracın okuduğu yorumda yazılı.
BILINEN_ALANLAR = {
    "ad":  "zorunlu — benzersiz yerleşim adı",
    "lat": "zorunlu — enlem",
    "lon": "zorunlu — boylam",
    "tur": "sehir / kale / bolge …",
    "g":   "gösterim önceliği (app.js: etiket zoom kademesi)",
    "k":   "idari kademe 0-4",
    "m":   "bağlı olunan k1/k2 merkezin adı",
    "s":   "yabancı sahiplik dönemleri — MOTOR BOYAR",
    "d":   "doğrudan Osmanlı dönemleri — MOTOR BOYAR",
    "v":   "tâbi / dolaylı idare dönemleri — MOTOR BOYAR",
    "kur": "kuruluş tarihi — motor: petek_epok() bu tarihten önce peteği "
           "komşuya devreder",
    "bit": "yok oluş tarihi — kur:'un aynadaki hâli",
    "go":  "önemin söndüğü gün — YALNIZ app.js (etiket kalabalığı); motor okumaz",
    # ⚠️ isg: MOTOR TARAFINDAN KASTEN OKUNMAZ. Sebebi şema kararıdır, ihmal
    # değil: işgal bir dönem TÜRÜ değil ÖRTÜ katmanıdır (commit 043e911).
    #   d:/v:/s: → DE JURE sahiplik → peteğin TABAN RENGİ (motorun işi)
    #   isg:     → DE FACTO denetim → tarama katmanı (uret_devirler.py'nin işi)
    # Mısır bunu zorunlu kılıyor: İngiltere 1882'den beri fiilen orada ama
    # Osmanlı hükümranlığı hukuken 1914'e kadar sürüyor. İşgal bir dönem türü
    # olsaydı taban rengi değişir ve 32 yıllık hukukî durum haritadan silinirdi.
    # Bosna aynı desen: 1878 Avusturya işgali, 1908 ilhak — ikisi AYRI gösterim.
    "isg": "işgal örtüsü — motor OKUMAZ (taban rengi de jure kalır); "
           "window.ISGALLER üreticisi arac/uret_devirler.py",
    # ⚠️ GEOMETRİNİN SORAMADIĞI SORUYU TAŞIYAN ALAN.
    # Motor "bu peteğin çevresi sahipli mi" diye sorabiliyor ama "o dağ
    # YÖNETİLİYOR muydu" diye soramıyor. Kuşatılmışlık ölçütü bu yüzden
    # Cetinje'yi devretmek istiyor (%94,5) — oysa TDV `karadag` Karadağ'ı
    # "göçebe kabilelerin GEVŞEK KONFEDERASYONU" diye tarif ediyor ve
    # Podgorica XVIII. yy'da hâlâ dağa karşı altı tabyayla tahkim ediliyor.
    # Kuşatılmışlık ovadan geliyor; dağ yönetilmiyordu.
    # ⇒ Ölçüt VARSAYILAN, bu alan İSTİSNA. Ve istisna YALNIZ KAYNAKLI
    #   araştırma hükmüyle yazılır — "bence öyle" ile değil.
    # 📌 Alan yoksa varsayılan False'tur: yani sessizlik "kasıtlı değil"
    #   demektir, "bilinmiyor" değil. Bilinmiyorsa yazılmaz ve ölçüt karar
    #   verir; bu, bilgisizliği kasıt gibi göstermenin önüne geçiyor.
    "kasitli_bosluk": "True ise kuşatılmışlık ölçütü bu peteği DEVRETMEZ — "
                      "boşluk kasten öyle. Yalnız kaynaklı hükümle yazılır. "
                      "Okuyan: uret_petek.py, _kusatilmis()",
    # 🔴 `kasitli_bosluk`un GEREKÇESİ — serbest metin.
    # `denetle_bosluk.py:270` bu alanı ZATEN okuyor ve kendi yorumunda
    # mevcut bayraklı kayıtların hiçbirinde `neden:` olmamasını bir KUSUR
    # olarak yazıyor ("boş bıraksın VE SEBEBİNİ KAYDETSİN"). Ama alan
    # kütüğe kayıtlı değildi, o yüzden yükleyici her yüklemede uyarı
    # basıyordu: doğru davranış, hatalıymış gibi görünüyordu.
    # (PETEK/NOKTA ölçtü ve ilk dört gerekçeli kaydı yazdı, 3 Ağustos 2026)
    "neden": "kasitli_bosluk'un gerekçesi — niçin kasten boş",
}

# Dönem nesnelerinin (s/d/v/isg elemanları) alanları
BILINEN_DONEM_ALANLARI = {
    "f": "başlangıç (YYYY-AA-GG)",
    "t": "bitiş",
    "d": "devlet kimliği — s: ve isg: içinde; renkler.py'de tanımlı olmalı",
    "k": "tâbi devletin adı — v: içinde (motor okumaz, gösterim için)",
    # ⚠️ `enklav:` — GEOMETRİNİN SORAMADIĞI SORUYU TAŞIYAN İKİNCİ ALAN.
    # `kasitli_bosluk` ile aynı sınıftır ve gerekçesi tek cümle:
    # ENKLAVLIK HUKUKÎ BİR DURUMDUR, GEOMETRİK DEĞİL. Motor "bu peteğin
    # çevresi kimin" diye sorabiliyor ama "burası bir presidio muydu, yoksa
    # hinterlandı olan bir şehir mi" diye soramıyor.
    # Ölçüldü (MOTOR 3, 3 Ağustos): yetim petek payı EN ÇOK ÖRTÜŞEN noktaya
    # verilince ölçüt 7 çiftin 6'sında doğru sonuç verdi — ama Sebte'de
    # yanıldı ve İLKEDEN değil TESADÜFEN tutuyordu (enklav çoğu zaman kısa
    # kenarlı olur). Presidionun hinterlandı YOKTUR; toprağı ona vermek ayrı,
    # ondan almak ayrı sorudur ve hiçbir geometrik ölçüt ikisini ayıramaz.
    #
    # 🔴 DÖNEM BAZLIDIR, NOKTA BAZLI DEĞİL — ayrım şart:
    #     Sebte 1281-1415 fas       → sıradan Fas kasabası, enklav DEĞİL
    #           1415-1581 portekiz  → ENKLAV
    #     Mersa'l-Kebîr 1509-1792 ispanya → ENKLAV
    #                   1831-1923 fransa  → DEĞİL (sömürge, hinterlandı VAR)
    # ⚠️ Motorun taban geometrisi ZAMANSIZ olduğu için bugünkü uygulama
    #    yaklaşıktır: bir dönemde bile enklavsa nokta hiç yetim ememez.
    #    Bedeli ÖLÇÜLDÜ — 1.609 km² · 155 yıl · tek nokta (Oran), yani
    #    Osmanlı tepe gövdesinin on binde 3'ü. Dönem bazlı gerçek çözüm
    #    (petek_epok deseni) bu bedele değmedi; ölçüm MOTOR-3 raporunda.
    #
    # ⚠️ COĞRAFÎ TARİF DEĞİL. Bu depoda "enklav" kelimesi dokuz yorumda
    #    GÖRÜNTÜ anlamında geçiyor ("Şirvan enklav görünüyor", "Saraybosna
    #    enklavı", "Dubrovnik enklavı") ve orada kastedilen şey bir KUSURDUR.
    #    Buradaki alan ise bir HÜKÜMDÜR: "bu dönemde hinterlandı yoktu".
    #    İkisi karıştırılırsa alan, düzeltilmesi gereken bir görüntü hatasına
    #    yazılır ve hatayı kalıcılaştırır.
    #
    # 📌 A LİSTESİ (PETEK/NOKTA parti 14, Oturum 0 işledi): 13 nokta / 17
    #    dönem. Sebte · Melîle · Mersa'l-Kebîr · Oran · Bicâye · Halkulvâdî ·
    #    Tanca · Mazagan · Safi · Azemmûr · Arzila · Agadir · Cebelitarık.
    # 🔴 MENORKA LİSTEDEYDİ, YAZILMADI: İngiltere 1708-1802'de ADANIN
    #    TAMAMINI tutuyordu, yani hinterlandı VARDI (kendi adası). Ölçüt
    #    "yabancı hâkimiyet" değil "hinterlandı yok" — ikisi karıştırılırsa
    #    alan bütün sömürgelere yayılır ve anlamını yitirir. Aynı sebeple
    #    Oran'ın ve Mersa'l-Kebîr'in `fransa 1831-1923` dönemleri de HARİÇ.
    # 📌 Otomatik tarama DENENDİ ve ÇÜRÜDÜ (iki ölçüt, PETEK/NOKTA parti 14):
    #    enklavı görünmez yapan seyreklik, testi de kör ediyor. Liste ELLE
    #    kurulur.
    "enklav": "True ise yerleşimin BU DÖNEMDE hinterlandı yoktur (presidio, "
              "karşı-kıyı karakolu) — yetim petek payı ona DEVREDİLMEZ ve "
              "yedinci denetimin %10 bayrağından MUAFTIR. s: içinde. "
              "Okuyan: uret_petek.py. Yalnız kaynaklı hükümle yazılır.",
    # ⚠️ `y:` İKİ ANLAMDA KULLANILMIŞTI — Oturum 2'nin bulgusu, kütüğün ilk
    # gerçek müşterisi. d:/s: içinde KAZANIM BİÇİMİ enum'u (kusatma 85, savas
    # 77, antlasma 67 kayıt), isg: içinde ise KAYNAK SLUG'ı. Aynı ada iki
    # anlam: `y:` üzerinden istatistik alan bir araç işgal kayıtlarını enum
    # sanıp sayardı. Ayrıldı — isg: tarafı `kaynak:` oldu (olaylar.js'in zaten
    # kullandığı sözleşme; yeni ad uydurulmadı).
    "y": "kazanım biçimi enum'u (kusatma/savas/antlasma…) — d: ve s: içinde",
    "kaynak": "kaynak slug'ı — isg: içinde; motor OKUMAZ, "
              "üretici arac/uret_devirler.py",
}


def _cevir(js, degisken):
    """`window.<degisken> = [ ... ];` gövdesini JSON'a çevirir."""
    js = "\n".join(l for l in js.split("\n") if not l.strip().startswith("//"))
    anahtar = f"window.{degisken} = "
    govde = js[js.index(anahtar) + len(anahtar):]
    govde = govde[:govde.rindex("]") + 1]
    j = re.sub(r'([{,]\s*)([A-Za-zçğıöşüÇĞİÖŞÜ_]\w*)\s*:', r'\1"\2":', govde)
    # JS'te dizi/nesne sonundaki fazladan virgül geçerli, JSON'da değil.
    j = re.sub(r',(\s*[\]}])', r'\1', j)
    # JS'te uzun metin "a" + "b" diye bölünebilir, JSON'da bölünemez. goller.js'in
    # `kaynak:` alanı böyle yazılmış ve okuyucu burada patlamıştı. Birleştirme
    # güvenli: JSON dizesi kaçışsız `"` içeremez, dolayısıyla desen dizenin
    # İÇİNDEKİ bir artıyla eşleşemez.
    _bir = r'"((?:[^"\\]|\\.)*)"\s*\+\s*"((?:[^"\\]|\\.)*)"'
    while re.search(_bir, j):
        j = re.sub(_bir, lambda m: '"' + m.group(1) + m.group(2) + '"', j)
    return json.loads(j)


# ⚠️ DEVLETLER.JS'İN TEK OKUYUCUSU — "herkes kendi ayrıştırıcısını yazıyor"
# sınıfının kapağı (2 Ağustos 2026). O gün AYNI dosya için ÜÇ geçici çözüm
# yazıldı ve yarısı YANLIŞ cevap verdi: düz regex 0 kayıt döndürdü (sessiz
# sıfır "veri yok" diye okundu), parantez sayan "zend KAYIT YOK" dedi (kayıt
# vardı), hedefli dört-alan çalıştı ama işine özeldi. Sebep: `_cevir`
# devletler.js'i ÇEVİREMİYOR — anahtar-tırnaklama regex'i dizelerin İÇİNE
# işliyor ve özet düzyazısındaki "(kaynak: TDV, madde: sirbistan)" gibi
# `, kelime:` desenlerini anahtar sanıp JSON'u kırıyor. yerlesimler
# dosyalarının düzyazısında bu desen yok, devletler.js'inkinde var.
# Bu okuyucu bu yüzden DİZE-FARKINDA tek geçiş yapar: dizelerin içi hiç
# değiştirilmez, yorumlar yalnız dize DIŞINDA atılır (1724. satırdaki yorum
# içi `harita:"bosna"` kayda sızmaz), sondaki virgül dize dışında ayıklanır.
# 🔴 SESSİZ SIFIR YASAK: ayrıştırma tutmazsa boş liste değil SystemExit —
# "bulamadım" ile "yok" ekranda aynı görünür, araç farkı SÖYLEMEK zorunda.
DEVLET_DOSYASI = "devletler.js"


def oku_devletler():
    """data/devletler.js → kayıt listesi (bütün alanlar, kronoloji dahil).
    Kullanıcıları: renk_olc.py, denetle*.py ve yarın yazılacaklar."""
    yol = os.path.join(DATA, DEVLET_DOSYASI)
    if not os.path.exists(yol):
        raise SystemExit(f"!! {DEVLET_DOSYASI} bulunamadı: {yol}")
    js = io.open(yol, encoding="utf-8").read()
    m = re.search(r"window\.DEVLETLER\s*=", js)
    if not m:
        raise SystemExit(f"!! {DEVLET_DOSYASI}: window.DEVLETLER bulunamadı")
    govde = js[m.end():]
    son = govde.rfind("]")
    if son < 0:
        raise SystemExit(f"!! {DEVLET_DOSYASI}: kapanış ']' bulunamadı")
    govde = govde[:son + 1]
    out, i, n = [], 0, len(govde)
    dize = False
    son_anlam = ""                      # son anlamlı karakter (dize dışı)
    while i < n:
        c = govde[i]
        if dize:                        # dizenin İÇİ: olduğu gibi geçir
            out.append(c)
            if c == "\\" and i + 1 < n:
                out.append(govde[i + 1])
                i += 2
                continue
            if c == '"':
                dize = False
            i += 1
            continue
        if c == '"':
            dize = True
            out.append(c)
            son_anlam = c
            i += 1
            continue
        if c == "'":                    # 🔴 TEK TIRNAKLI DİZE — JS'te geçerli, JSON'da değil
            # 8 Ağustos 2026: `kaynak:'bulunamadı — TDV\'de müstakil maddesi
            # yok…'` biçiminde 112 değer yazıldı. Yazan haklıydı: değer
            # kesme işareti taşıyor ve JS'te tek tırnak en kolay yol. Ama bu
            # okuyucu JSON'a çeviriyordu ve JSON tek tırnak KABUL ETMEZ ⇒
            # `renk_olc` bütün künye denetimini kaybetti.
            # ⚠️ Alet SESSİZCE SIFIR DÖNDÜRMEDİ, "okuyucu düzeltilmeden sonuç
            # kullanılamaz" deyip DURDU — doğru davranış, ve kusuru bu yüzden
            # aynı gün bulduk. `node` dosyayı 381 kayıt diye ayrıştırıyordu:
            # dosya geçerliydi, OKUYUCU dardı.
            out.append('"')
            i += 1
            while i < n:
                ch = govde[i]
                if ch == "\\" and i + 1 < n:
                    nx = govde[i + 1]
                    if nx == "'":       # \' JSON'da geçersiz kaçış → çıplak '
                        out.append("'")
                    else:
                        out.append(ch); out.append(nx)
                    i += 2
                    continue
                if ch == "'":
                    out.append('"')
                    i += 1
                    break
                if ch == '"':           # tek tırnaklı dizenin İÇİNDEKİ " → kaçışla
                    out.append('\\"')
                    i += 1
                    continue
                if ch == "\n":          # JSON dizesinde çıplak satır sonu yasak
                    out.append("\\n")
                    i += 1
                    continue
                out.append(ch)
                i += 1
            son_anlam = '"'
            continue
        if govde[i:i + 2] == "//":      # yorum: satır sonuna dek at
            while i < n and govde[i] != "\n":
                i += 1
            continue
        if c == ",":                    # sondaki virgül: JSON'da geçersiz
            j = i + 1
            while j < n:
                if govde[j] in " \t\r\n":
                    j += 1
                elif govde[j:j + 2] == "//":
                    while j < n and govde[j] != "\n":
                        j += 1
                else:
                    break
            if j < n and govde[j] in "]}":
                i += 1
                continue
            out.append(c)
            son_anlam = c
            i += 1
            continue
        if c.isalpha() or c == "_":     # çıplak anahtar → tırnakla
            j = i
            while j < n and (govde[j].isalnum() or govde[j] == "_"):
                j += 1
            kelime = govde[i:j]
            k = j
            while k < n and govde[k] in " \t\r\n":
                k += 1
            if k < n and govde[k] == ":" and son_anlam in "{,":
                out.append('"' + kelime + '"')
            else:
                out.append(kelime)      # true/false/null gibi değerler
            son_anlam = kelime[-1]
            i = j
            continue
        out.append(c)
        if not c.isspace():
            son_anlam = c
        i += 1
    try:
        kayitlar = json.loads("".join(out))
    except ValueError as e:
        raise SystemExit(f"!! {DEVLET_DOSYASI} ayrıştırılamadı ({e}) — "
                         f"bu 'veri yok' DEĞİLDİR, okuyucu düzeltilmeden "
                         f"sonuç kullanılamaz")
    if not isinstance(kayitlar, list) or not kayitlar:
        raise SystemExit(f"!! {DEVLET_DOSYASI}: 0 kayıt döndü — dosya boş "
                         f"olamaz, ayrıştırma çürümüş demektir (sessiz sıfır "
                         f"yasak)")
    return kayitlar


def oku_dosya(ad):
    """Tek dosyayı okur; `window.YERLESIMLER*` değişkenini kendisi bulur."""
    yol = os.path.join(DATA, ad)
    js = io.open(yol, encoding="utf-8").read()
    m = re.search(r"window\.(YERLESIMLER\w*)\s*=", js)
    if not m:
        raise ValueError(f"{ad}: window.YERLESIMLER* bulunamadı")
    return _cevir(js, m.group(1))


def km(a_lat, a_lon, b_lat, b_lon):
    orta = math.radians((a_lat + b_lat) / 2)
    return 111.32 * math.hypot(a_lat - b_lat, (a_lon - b_lon) * math.cos(orta))


def yukle(sessiz=False):
    """Bütün girdi dosyalarını birleştirip döker. Ad çakışmasında ValueError."""
    hepsi, nereden, bilinmeyen = [], {}, {}
    for ad in GIRDI_DOSYALARI:
        kayitlar = oku_dosya(ad)
        for y in kayitlar:
            if y["ad"] in nereden:
                raise ValueError(
                    f"AD ÇAKIŞMASI: '{y['ad']}' hem {nereden[y['ad']]} hem {ad} "
                    f"içinde. Yerleşim adı benzersiz olmalı (VERI-YAPISI.md)."
                )
            nereden[y["ad"]] = ad
            for alan in y:
                if alan not in BILINEN_ALANLAR:
                    bilinmeyen.setdefault(alan, []).append(f"{ad}:{y['ad']}")
            for kat in ("s", "d", "v", "isg"):
                for p in y.get(kat) or []:
                    for alan in p:
                        if alan not in BILINEN_DONEM_ALANLARI:
                            bilinmeyen.setdefault(f"{kat}.{alan}", []).append(
                                f"{ad}:{y['ad']}")
            for alan, deger in VARSAYILAN.items():
                y.setdefault(alan, [] if deger == [] else deger)
            # Kaynak damgası — dosyadan OKUNMAZ, yükleyici basar (bu yüzden
            # BILINEN_ALANLAR kontrolüne girmez; kontrol yukarıda, damga
            # burada). Tüketicisi denetle.py'nin İŞ KUYRUĞU ayrımı (İş O):
            # yeni partinin kırılmaları çekirdek tavanına KATILMAZ, kaynağa
            # göre ayrı sayaçta raporlanır.
            y["_kaynak"] = ad
        hepsi.extend(kayitlar)
        if not sessiz:
            print(f"  {ad}: {len(kayitlar)} nokta")
    # ⚠️ Bilinmeyen alan HATA DEĞİL, UYARIDIR — bir alanı şemaya eklemek ile
    # motoru ona göre değiştirmek ayrı işlerdir ve ayrı oturumlarda yapılır.
    # Ama SESSİZ de olamaz: yazım hatası olan alan da tam böyle görünür.
    for alan, kimde in sorted(bilinmeyen.items()):
        print(f"  UYARI alan: '{alan}' BILINEN_ALANLAR'da yok — {len(kimde)} "
              f"kayıtta ({', '.join(kimde[:3])}{'…' if len(kimde) > 3 else ''}). "
              f"Yazım hatası mı, yeni şema alanı mı? girdi.py'ye kaydet.")
    if not sessiz and len(GIRDI_DOSYALARI) > 1:
        print(f"  toplam: {len(hepsi)} nokta")
    return hepsi


# ⚠️ EK GÖLLER — Natural Earth'ün MODERN göl katmanının tarihî düzeltmesi
# Baraj gölü kuralı (uret_petek.py:73-88) maskeye FAZLA su giren hâli düzeltir:
# 1960 sonrası yapılmış bir baraj 1500 haritasında delik açmasın diye maskeden
# çıkarılmaz. Bu dosya TERS yöndeki hatayı düzeltir: tarihte VAR OLAN ama
# modern katmanda kurumuş/küçülmüş göller. Bugün tek kayıt var — Aral.
# Natural Earth Aral'ı kuruma SONRASI iki artık parça olarak taşıyor; oysa
# 1281-1923 boyunca ~68.000 km²'lik tek göldü. Motor farkı bilmediği için
# gölün yerini KARA sayıyor ve en yakın petek oraya emiliyor (MIMARI.md §2).
# ⚠️ ZAMAN BOYUTU YOK: motorun GOLLER birleşimi statiktir. Bu yüzden
# `gecerli` penceresi atlasın ufkunu KAPSAMIYORSA kayıt ALINMAZ — dar
# pencereli bir gölü statik uygulamak, düzeltmeye çalıştığı anakronizmin
# aynısını üretir. Zamana bağlı göl gerekirse önce motorda epok desteği
# (petek_epok deseni) kurulmalı.
GOL_DOSYASI = "goller.js"
UFUK = ("1281-01-01", "1923-10-29")


def oku_goller(sessiz=False):
    """Ek göl poligonları — GeoJSON `geometry` sözlüklerinin listesi.
    Dosya yoksa boş liste döner (motor onsuz da çalışır)."""
    yol = os.path.join(DATA, GOL_DOSYASI)
    if not os.path.exists(yol):
        return []
    js = io.open(yol, encoding="utf-8").read()
    m = re.search(r"window\.(GOLLER\w*)\s*=", js)
    if not m:
        raise ValueError(f"{GOL_DOSYASI}: window.GOLLER bulunamadı")
    alinan = []
    for g in _cevir(js, m.group(1)):
        gec = g.get("gecerli") or {}
        if gec.get("f", UFUK[0]) > UFUK[0] or gec.get("t", UFUK[1]) < UFUK[1]:
            print(f"  UYARI göl: '{g.get('ad')}' yalnız {gec.get('f')}→"
                  f"{gec.get('t')} arası geçerli, motor statik göl kullanıyor "
                  f"— ATLANDI (zamana bağlı göl için epok desteği gerekir)")
            continue
        alinan.append(g)
    if not sessiz and alinan:
        print(f"  {GOL_DOSYASI}: {len(alinan)} tarihî göl düzeltmesi "
              f"({', '.join(g['ad'].split('(')[0].strip() for g in alinan)})")
    return alinan


# ⚠️ KOŞU BEKÇİSİ — yedi üretimi yakan hata sınıfının TEKNİK kapağı
# Motor girdiyi koşunun BAŞINDA bir kez okur. Koşunun 13. dakikasında yapılan
# bir düzenleme çıktıya HİÇ girmez ama koşu temiz biter, denetim temiz çıkar
# ve harita sessizce veriden geri kalır. Bugün canlı örneği yaşandı:
#   21:53:33 üretim başladı
#   22:06:07 yerlesimler_afrika.js'e 108 satır eklendi (Mısır batı çölü vahaları)
#   → o koşunun çıktısında vahalar YOK, ama hiçbir denetim bunu göremez.
# Protokol "her oturum 'girdi sabit' desin" diyordu; yetmedi, çünkü duyuru
# mesaj katmanında ve mesaj kuyrukta bekleyebiliyor (bugün öyle oldu).
# Bekçi duyuruya değil ÖLÇÜME bağlar: parmak izi başta alınır, her yazımdan
# önce doğrulanır, tutmazsa çıktı YAZILMAZ.
# Kapsam: yalnız data/ girdileri. veri-kaynak/*.geojson (27 MB) kapsam dışı —
# depo verisi, oturumlar arasında değişmiyor ve her yazımda hashlemek pahalı.
def parmak_izi():
    """Okunan data/ girdilerinin sha256'ları — {dosya: özet}."""
    import hashlib
    iz = {}
    for ad in list(GIRDI_DOSYALARI) + [GOL_DOSYASI]:
        yol = os.path.join(DATA, ad)
        if os.path.exists(yol):
            iz[ad] = hashlib.sha256(io.open(yol, "rb").read()).hexdigest()
    return iz


def motor_izi():
    """Üretimi yapan KODUN sha256'ları — {dosya: özet}.

    `parmak_izi()` "çıktı hangi VERİDEN üretildi" sorusunu cevaplar; bu ise
    "hangi KODDAN üretildi" sorusunu. İkisi çıktıya birlikte yazılır.

    ⚠️ Neden gerekli — 31 Temmuz'da yaşandı. Koordinatör elindeki
    `donemler.js`in düzeltilmiş motordan mı çıktığını soramadı: dosya damgası
    koşuyu değil son dokunuşu gösteriyor, boyut kaba bir ipucu, ve sekiz
    denetimin "temiz" demesi kanıt değil — hiçbiri o soruyu sormuyor. Cevap
    ancak log arkeolojisiyle verilebildi. Damga çıktının İÇİNDE olursa soru
    dosyanın kendisinden cevaplanır.
    """
    import hashlib
    iz = {}
    for ad in ("uret_petek.py", "renkler.py", "girdi.py"):
        yol = os.path.join(os.path.dirname(os.path.abspath(__file__)), ad)
        if os.path.exists(yol):
            iz[ad] = hashlib.sha256(io.open(yol, "rb").read()).hexdigest()
    return iz


# ⚠️ ÜRETİM İZİ YARDIMCISI — "7 üretilen çıktının 6'sında iz yok" ölçümünün
# (2 Ağustos, İş G) kapağı. denetle_yayin.py yayın tazeliğini URETIM_IZI'yle
# ölçüyor ve hükmü YALNIZ izi taşıyan dosya için geçerli — izi olmayan çıktı
# hakkında hiçbir şey bilinmiyor ama ekran "✓ tazelik" diyordu. Her üretici
# kendi çıktısına bu satırı yazar; denetim her izi kendi girdileriyle
# karşılaştırır. uret_petek.py BUNU KULLANMAZ: onun izi koşu BAŞINDA alınan
# _GIRDI_IZI'dir (motorun okuduğu hâl) — burada yeniden hashlemek koşu
# ortasında değişen girdiye taze damgası basardı.
def uretim_izi_js(girdiler, betikler):
    """`window.URETIM_IZI = …;` satırı — üretilen çıktının künyesi.

    girdiler: KÖK'e göre yollar ("data/donemler.js", "BEKLEYENLER.md",
    "veri-kaynak/ne_10m_land.geojson"…). betikler: arac/ içindeki üretici
    dosya adları. 🔴 Eksik dosya SystemExit — listeden sessizce düşen girdi,
    izi küçültür ve küçük iz 'taze' okunur.
    """
    import hashlib

    def _oz(yol):
        return hashlib.sha256(io.open(yol, "rb").read()).hexdigest()

    iz_g = {}
    for ad in girdiler:
        yol = os.path.join(KOK, ad)
        if not os.path.exists(yol):
            raise SystemExit("URETIM_IZI: girdi dosyası yok: %s — iz eksik "
                             "yazılamaz, eksik iz taze okunur" % ad)
        iz_g[ad] = _oz(yol)
    iz_m = {}
    for ad in betikler:
        yol = os.path.join(os.path.dirname(os.path.abspath(__file__)), ad)
        if not os.path.exists(yol):
            raise SystemExit("URETIM_IZI: betik yok: %s" % ad)
        iz_m[ad] = _oz(yol)
    return ("window.URETIM_IZI = "
            + json.dumps({"girdi": iz_g, "motor": iz_m},
                         separators=(",", ":"), sort_keys=True) + ";\n")


def motor_izi_dogrula(baslangic, nerede):
    """Motor KODU koşu sırasında değiştiyse ÖLDÜRÜR.

    `izi_dogrula`nın kod eksenindeki eşi. 1 Ağustos 2026'da ölçüldü: girdi
    koşunun BAŞINDA damgalanıp üç yerde doğrulanıyordu, kod ise SONUNDA
    diskten okunuyordu ve hiç doğrulanmıyordu. Koşu sırasında `renkler.py`
    düzenlense süreç etkilenmez (Python dosyayı başta belleğe alır) ama
    damga, koşunun ÇALIŞTIRMADIĞI kodun özetini yazardı — "çıktı hangi
    koddan üretildi" sorusuna sessizce yanlış cevap.

    📌 Sebep bilgi eksikliği değildi: `uret_petek.py`nin çıktı bölümünde
    aynı gerekçe GİRDİ için yazılıydı. Gerekçe yazılmış, bir argüman
    ötesine uygulanmamıştı.
    ⇒ Bir yöntemin bağışık olduğunu varsaydığın eksen, taramayı en çok
      atlayacağın eksendir.
    """
    simdi = motor_izi()
    degisen = [a for a in set(baslangic) | set(simdi)
               if baslangic.get(a) != simdi.get(a)]
    if degisen:
        raise SystemExit(
            "MOTOR KODU KOSU SIRASINDA DEGISTI: " + ", ".join(sorted(degisen))
            + " (" + nerede + " yazilmadan once olculdu). Cikti karisik"
            " koddan uretilmis olabilir ve damga da yalan soylerdi."
            " Kosu OLDURULDU -- bastan baslat.")


def izi_dogrula(baslangic, nerede):
    """Girdi koşu sırasında değiştiyse ÖLDÜRÜR. Sessiz geçiş yok."""
    simdi = parmak_izi()
    degisen = [a for a in set(baslangic) | set(simdi)
               if baslangic.get(a) != simdi.get(a)]
    if degisen:
        print("")
        print("  " + "=" * 66)
        print(f"  ✗ GİRDİ KOŞU SIRASINDA DEĞİŞTİ — '{nerede}' YAZILMADI")
        for a in sorted(degisen):
            print(f"      {a}")
        print("  Bu çıktı bayat olurdu: motor girdiyi koşunun başında bir kez")
        print("  okur, sonraki düzenlemeler çıktıya girmez ve hiçbir denetim")
        print("  bunu göremez. Girdiyi sabitleyip üretimi BAŞTAN koşturun.")
        print("  " + "=" * 66)
        raise SystemExit(1)


def yakin_ciftler(Y, esik=YAKINLIK_ESIK_KM):
    """Eşikten yakın nokta çiftleri — mükerrer/çelişen kayıt avı."""
    ciftler = []
    for i in range(len(Y)):
        for j in range(i + 1, len(Y)):
            d = km(Y[i]["lat"], Y[i]["lon"], Y[j]["lat"], Y[j]["lon"])
            if d < esik:
                ciftler.append((d, Y[i]["ad"], Y[j]["ad"]))
    ciftler.sort()
    return ciftler
