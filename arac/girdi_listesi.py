"""GIRDI_DOSYALARI — motorun okuyacagi yerlesim dosyalarinin CANLI listesi.

🔴 BU DOSYA NICIN AYRI — 24 Eylul 2026, Emre'nin karari
`girdi.py`nin sha256'si motorun TUZUNA girer (`girdi.motor_izi()` →
`uret_petek._ONB_TUZ`). Liste `girdi.py`nin icindeyken, YENI BIR YERLESIM
DOSYASI BAGLAMAK butun onbellek anahtarlarini oldururuyordu: 279 MB'lik
icerik adresli onbellek cope gidiyor ve kosu ~19 saate donuyordu
(olculmus: kosu 12 = 19s08dk). Tam bu 24 Eylul aksami yasandi — bes
oturumun teslimi baglanirken 5 ad eklendi ve onbellek oldu.

⇒ LISTE KOD DEGIL VERIDIR. Ayri modulde durur ve `motor_izi()`ye GIRMEZ.

🔴 BUNU "DUZELTIP" motor_izi()'ye EKLEME. Guvenligin dayanagi olculdu
(24 Eylul 2026): `uret_petek.py`deki ON anahtar sitesinin HEPSI okudugu
girdiyi anahtara koyuyor —
   `_onb_parca_anahtar`  cevredeki BUTUN yerlesimleri (R derece, yeterlilik
                         ispati fonksiyonun kendi belgesinde)
   `kusat`               komsu peteklerin WKB ozetleri
   `dolgu`               katilan yerlesimlerin kimlikleri
   `sb`                  kaplam + bos_bolge WKB ozeti
   `col`                 yerlesimin kendi lon/lat'i
   `k1_*`                yalniz KARA/gol/col altligi — noktadan BAGIMSIZ
⇒ Yeni nokta eklenince YALNIZ cevresindeki hucrelerin anahtari degisir ve
yalniz onlar yeniden hesaplanir. Bayat sonuc okunmasi yapisal olarak
imkansiz kalir; degisen tek sey, UZAK hucrelerin bosuna yeniden
hesaplanmamasi.

📌 KOKEN KAYDI KAYBOLMAZ: `girdi.parmak_izi()` bu listeyi dolasip her
dosyanin sha256'sini cikartiya yazar. "Hangi veriden uretildi" sorusu
eskisi gibi cevaplanir; yalniz "hangi KODDAN" sorusundan cikarildi.
"""

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
    "yerlesimler_ek23.js",
    "yerlesimler_ek24.js",
    "yerlesimler_ek25.js",
    "yerlesimler_ek26.js",
    "yerlesimler_ek27.js",
    "yerlesimler_ek28.js",
    # NOKTA MENZİL, 15 Ağustos 2026 — 26 nokta. İki bağımsız ölçümün
    # gösterdiği aynı boşluk: koridor ağının yere oturmayan 18 menzil
    # durağı + TUNA HAVZASI'nın veride bulamadığı 10 Macaristan merkezi.
    # Aralarında Gyulafehérvár var — Erdel Prensliği'nin BAŞKENTİ ve
    # bugüne kadar veride yoktu; Erdel kimliğinin darboğazıydı.
    "yerlesimler_ek29.js",
    # NOKTA EPİR, 22 Ağustos 2026 — 2 nokta, ve azlığı KASITLI.
    # Emre: *"Parga genellikle Venedik'te görünüyor ama kuzeyindeki topraklar
    # yerleşim yeri olmadığı için Parga'nın peteğine emilip Venedik
    # boyanıyor."* Ölçüldü: Parga'nın peteği 3.701 km² ve 96,9 km KUZEYE
    # uzanıyor; Epir kutusunda topu topu 8 nokta var ve Parga'nın kuzeyi
    # BOŞ — üstelik boşluğu paylaşan iki komşudan biri (Korfu) de VENEDİK,
    # yani tampon yok. `§2` emilmesinin ders kitabı vakası.
    # ⚠️ Beş yer daha aday olarak duruyordu (Delvine · Sarandë · Butrint ·
    # Borsh · İgumenitsa) ama TDV'de maddeleri YOK (slug sınavı: hepsi 302)
    # ve doğrulanmış akademik kaynak elde değildi. Tarih uydurmaktansa
    # YAZILMADI; `oturumlar/NOKTA-EPIR.md` ile araştırmaya verildi.
    "yerlesimler_epir.js",
    # MACARİSTAN SERHAT ARAŞTIRMA, 22 Ağustos 2026 — 2 nokta, ve AZLIĞI
    # KASITLI. Emre'nin `H-0007` sorusu: *"Niş ve Vidin elden çıkmış.
    # Semendire, Çaçak ve Kragujevac elden çıkmadan mı buralar elden çıktı?
    # Hangi koridordan geçilerek? Uçakla gidilecek hâli yok."*
    # Ölçüm Emre'yi DOĞRULADI: Belgrad(Avusturya) – Semendire(Osmanlı) –
    # Yagodina(Osmanlı) – Kragujevac(Osmanlı) – Niş(Avusturya) –
    # Vidin(Avusturya). Yani cephe gerisinde iki Osmanlı adası kalıyor.
    # 🔴 VE İKİ NOKTA BİLEREK TERS YÖNDE YAZILDI (`§3.5.1` iki uç kuralı):
    #   Şehirköy (Pirot)      1689 Avusturya dönemi VAR  — TDV: alındı
    #   Alacahisar (Kruševac) Avusturya dönemi YOK       — TDV: "kesintisiz
    #                         300 sene … ilk defa 1737'de"
    # Koridoru *"bütün Sırbistan Avusturya"* diye kapatmak hatayı TAŞIRDI,
    # silmezdi. Bir sınır kayması önerilirken İKİ UÇ DA ölçülür.
    #
    # 🟢 BORÇ KAPANDI (22 Ağu 2026) — `data/olaylar_serhat.js` yazıldı, üç
    # açık kırılma gününe madde geldi ve `Değişmez 2` 0 açığa döndü.
    # ⚠️ İKİSİ BİRLİKTE BAĞLANIR: nokta dosyası burada, madde dosyası
    # `index.html`de. Biri bağlanıp öteki bağlanmazsa maddelerin `yer_id`si
    # eşleşmez ve denetim başka bir yerden kırmızıya döner.
    #
    # 📌 VE BORCUN KENDİSİ ÖĞRETİCİYDİ: teslim "sıfır yeni kırılma günü"
    # demişti, ölçüm 3 açık buldu. Sebebi oturum kendi buldu ve bildirdi:
    #     kendi ölçümü 48 dosyada (kronoloji_* + olaylar*) yapılmış
    #     `denetle.py:703` ise YALNIZ `glob("data/olaylar*.js")` = 18 dosya
    # `1428-01-01` onların evreninde "+0 gün" görünüyordu — o madde
    # `kronoloji_balkan.js`teydi, yani KUYRUKTA; çekirdekte en yakın madde
    # 214 gün ötede. `CLAUDE.md §11`: *"bu gün zaten var" yetmiyor — HANGİ
    # KOVADA olduğu da sorulmalı.*
    #
    # ESKİ NOT (borç açıkken yazılmıştı, kayıt olsun diye duruyor):
    # Teslim raporu *"sıfır yeni kırılma günü — 9 günün 9'u da çekirdekte
    # +0 gün maddeli"* diyordu. ÖLÇTÜM, ÇÜRÜDÜ:
    #     serhat BAĞLI      519 kırılma · 3 AÇIK
    #     serhat ÇIKARILDI  515 kırılma · 0 açık
    # (Yöntem: `girdi.py`den satır geçici çıkarıldı, `denetle.py` iki kez
    #  koşturuldu, dosya `finally` ile geri yazıldı.)
    # ⇒ Fark BİREBİR bu dosyadan. Onların ölçümü başka bir tabandaydı.
    #
    # `Değişmez 2` tam olarak bunun için var: bir toprak değişiminin
    # ±30 gün içinde maddesi yoksa, değişim o güne rastlayan ALAKASIZ bir
    # maddenin altında belirir — Emre'nin en çok şikâyet ettiği hata.
    # 📌 Veri SİLİNMEDİ, araştırma sağlam ve commit'li. Yalnız haritaya
    # girmesi, kırılmalarının maddesi yazılana kadar BEKLİYOR. Borç burada
    # KAYITLI — `§11`: kayıtsız borç yarın kusur diye yeniden bulunur.
    "yerlesimler_serhat.js",
    # 23 Ağustos 2026 — MACARİSTAN SERHAT ARAŞTIRMA teslimi.
    # Tek kayıt: Debrecen. `H-0004`ün ikinci ayağı — Szatmár
    # enklavının noktasızlık sebebi. Debrecen yokken onun toprağı
    # Varad (58 km, OSMANLI) · Tokaj (67 km, TÂBİ) · Szatmár
    # (97 km, avusturya) arasında paylaşılıyor ve Szatmár'ın
    # peteğini şişiriyordu.
    # Dayanak TDV `varad`: "Varad merkezli yeni eyaletin Varad
    # dışında beş sancağı vardı: Salanta/Salonta, DEBRECEN, ..."
    "yerlesimler_kdmacar.js",
    "yerlesimler_amerika.js",
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
    "yerlesimler_emilme.js",
    "yerlesimler_sibirya.js",
    "yerlesimler_kalite4.js",
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
    # ── UZAK COĞRAFYA PARTİLERİ · 16 Ağustos 2026 ───────────────────
    # Emre: "Okyanusya, Kuzey/Orta/Güney Amerika, iç ve güney Afrika,
    # Sibirya… 1281'de kayıtlı şehir ve devlet yoksa o dönemi DEVLETSİZ
    # göstermek zorundayız." Dört oturumun teslimi, toplam 62 nokta.
    #
    # 🔴 BU DÖRT DOSYA BİR MOTOR DÜZELTMESİNİ BEKLEDİ ve bekleme ölçülmüştü:
    # 62 noktanın 36'sı harita penceresinin DIŞINDA. Motor bunları maliyet
    # ızgarasının kenar sütununa KISTIRIYORDU (hata vermeden), ve kıstırılan
    # tohum Dijkstra'da oradan yayılıyordu. Bugün zararsızdı çünkü kıstırılan
    # peteklerin sahibi yoktu; bu parti onu ZARARLI hâle getirecekti:
    #   Kap 2.555 km · Oranj 2.020 · Ulundi 1.930 · Transvaal 1.644 ·
    #   Mapungubwe 1.249 · Büyük Zimbabve 1.034 — altısı da SAHİPLİ, yani
    #   Güney Afrika'nın altı gövdesi Orta Afrika toprağı için yarışacaktı.
    # ⇒ Kusur BAĞLAMADAN ÖNCE düzeltildi (pencere dışı nokta ızgaraya HİÇ
    # alınmıyor, kıstırma yerine atlama). Bağlama ondan SONRA yapıldı.
    # 📌 Ve bunu bulan şey bir denetim değil, BOŞTA BEKLEYEN bir oturumun
    # kendi eski uyarısını (M-0247) yeniden ölçmesiydi.
    "yerlesimler_ek30.js",
    "yerlesimler_ek31.js",
    "yerlesimler_0ee15e.js",
    "yerlesimler_e9353f.js",
    # ---- 19-20 Ağustos 2026 · dört araştırma oturumunun teslimi ----------
    # 13 nokta. BAĞLANMADAN ÖNCE tek tek VE BİRLİKTE doğrulandı:
    #   sözdizimi 4/4 ✓ · ad alanı 4/4 dosya adıyla uyuşuyor (§7) ·
    #   ad alanı çakışması YOK · ad çakışması YOK · 3 km mükerrer YOK ·
    #   rengi olmayan kimlik YOK · taban 2580 → 2593
    # 📌 "Birlikte" ölçümü şart: `§7`de bir vaka var — beş dosya TEK ad
    # alanı kullanınca tek tek 537, birlikte 137 kayıt okunuyordu (%74 kayıp)
    # ve hiçbir denetim ötmüyordu, çünkü denetimler "yama UYGULANDI mı" diye
    # sorar, "yama OKUNDU mu" diye sormaz.
    "yerlesimler_ek_adalar.js",       # Paksos · Elafonisos (İyon-Ege)
    "yerlesimler_ek_bozkir.js",       # Karadeniz kuzeyi bozkırı
    "yerlesimler_ek_ferhadpasa.js",   # 1590 Ferhad Paşa hattı
    # ⚠️ Macaristan dosyası TEK BAŞINA bağlanamazdı: Fülek · Ungvár ·
    # Munkács'a `v:` (Orta Macar, 1682-1685) yazıyor, ama krallığın
    # BAŞKENTİ Kassa ile Eperjes ve Tokaj `yerlesimler_ek.js`te kesintisiz
    # `avusturya`ydı ⇒ 1682-85 haritası ALACALI çıkardı. O üç kayıt aynı
    # commit'te düzeltildi (TDV `tokoli-imre` toplu teslim tarihi).
    "yerlesimler_ek_macaristan.js",   # Fülek · Ungvár · Munkács · Szatmár
    # ---- 28 Ağustos 2026 · YAMA KURTARMA'nın devrettiği boşluklar ----------
    # Birecik (TDV `birecik`, 1516 Mercidâbık sonrası) ve PRİZREN.
    # 🔴 Prizren'in yokluğu ölçüldü ve ciddiydi: `_yer_ara.py --kutu
    #    41.9 20.4 42.5 21.1` → **0 nokta**. Kosova'nın ikinci şehri ve
    #    1455-1912 arası sancak merkezi, çevresi `§2` emilmesiyle komşulara
    #    dağılıyordu. Fetih günü TDV'den tam: 20 Haziran 1455.
    # ⚠️ O gün külliyatta YOKTU (0 madde) ⇒ maddesi `olaylar_ek18.js`e AYNI
    #    turda yazıldı. Nokta maddesiz inseydi `Değişmez 2` açılırdı.
    "yerlesimler_ek_bosluk.js",       # Birecik · Prizren (2 nokta)
    # ⚠️ `yerlesimler_8beb2b.js` BİLEREK BAĞLANMADI: dosya var, 165 satır,
    # ama kayıt dizisi BOŞ (0 nokta — node ile ölçüldü). Bağlamak hiçbir şey
    # eklemez, ama "bağlı" görünmesi sahibinin işini BİTMİŞ gösterir.
    # ---- 28 Ağustos 2026 · körfez dolgu noktası --------------------------
    # TEK kayıt: "Katar Yarımadası (iç, dolgu)" — `tur:"bolge"`, sahiplenmez.
    # NİÇİN: Emre'nin H-0007/H-0021 şikâyeti ("Bahreyn'deki kırmızılık garip
    # bir bozukluk gibi") ölçüldü ve kaynağı Bahreyn DEĞİLDİ: Katar
    # yarımadasının hiçbir noktası yoktu (Doha ancak `kur:"1825-01-01"`den
    # sonra var), bu yüzden yarımada `§2` emilmesiyle en yakın sahipli noktaya
    # — Ukayr, Lahsa Eyaleti, OSMANLI — düşüyor ve 1550'den beri kırmızı
    # boyanıyordu. Lahsa'nın idaresi kıyı şeridiyle sınırlıydı; yarımadanın o
    # dönemde merkezî idare kaydı yok (ilk somut bağ 1868/71 Osmanlı-Katar
    # kazâsı). Dolgu noktası Ukayr peteğinin yarımadayı yutmasını keser.
    # 3 km mükerrer ölçüldü: en yakın nokta Doha, 59,5 km.
    # ⚠️ Dosya 20 Ağustos'ta yazılmış ve BAĞLANMAMIŞTI — ölçüm yapılmış, çare
    # yazılmış, ama haritaya hiç inmemişti. Sekiz gün boyunca `denetle.py`
    # temiz raporladı, çünkü denetimler "yama UYGULANDI mı" diye sorar,
    # "yama BAĞLANDI mı" diye sormaz.
    "yerlesimler_ek_korfez.js",       # Katar yarımadası dolgu (1 nokta)

    # ══ 31 AĞUSTOS 2026 — SINIR YERLEŞİMİ PROGRAMI ve bir BOŞ ÖLÇÜM ══
    # 🔴 ÜÇÜ DE KÖRÜ KÖRÜNE BAĞLANMADI — dördü ayrı ayrı ölçüldü:
    #   ① ad çakışması (canlı külliyatta aynı ad var mı)
    #   ② 3 km mükerrer (`CLAUDE.md §11` — Varat/Varad vakası)
    #   ③ kimlikler `BOYALAR`da tanımlı mı (`§8` — yoksa harita DELİĞİ)
    #   ④ node ile ayrıştırılıyor mu (sözdizimi)
    # Üçü de dört testten TEMİZ geçti.
    #
    # ⚠️ VE AYNI TURDA DÖRT DOSYA BAĞLANMADI, sebepleri ölçüldü:
    #   yerlesimler_4ff22b.js     2 nokta · `hawaii-kralligi` · `merina` RENKSİZ
    #   yerlesimler_amerika2.js   2 nokta · `apaci-ovalar` · `komanci` RENKSİZ
    #   yerlesimler_hindistan.js  2 nokta · `farukiler` RENKSİZ
    #     ⇒ üçü de `§8` gereği bekliyor: renksiz kimlik BOYANMAZ, yani
    #       bağlamak nokta eklemez, HARİTA DELİĞİ açar. RENK oturumuna
    #       sevk edildi; renkler inince bağlanacaklar.
    #     🟢 1 EYLÜL 2026 — BEŞ RENK DE YAZILDI (RENK AÇIKLIK TABANI):
    #       hawaii-kralligi #ffa5d6 · merina #73c0a0 · farukiler #80f67e
    #       apaci-ovalar #d7a300 · komanci #78bdff
    #       ⇒ ENGEL KALKTI, üçü de aşağıda BAĞLANDI.
    #   yerlesimler_kafkas_duzeltme.js  19 nokta · 19 AD ÇAKIŞMASI
    #     ⇒ Bu bir YERLEŞİM dosyası DEĞİL, bir YAMA: Kars · Ardahan ·
    #       Derbend · Kutaisi'nin DÜZELTİLMİŞ hâllerini taşıyor. Bağlanırsa
    #       aynı yerleşim İKİ KEZ girer. Uygulanacak (`_sahiplik_uygula.py`),
    #       bağlanmayacak. 📌 Adı "yerlesimler_" ile başlıyor diye yerleşim
    #       dosyası sanmak, bu turda kıl payı önlenen hatadır — dosyanın
    #       CİNSİNİ adı değil İÇERİĞİ belirler.
    "yerlesimler_sinir_dogu.js",      # sınır çifti — Türkiye-İran hattı
                                      # (Bacirge/Esendere · Sero · Şemdinli
                                      #  · Rāzhān). Emre 31 Ağu: "1923
                                      # sınırlarını birebir çizmeliyiz."
    "yerlesimler_sinir_guney.js",     # sınır çifti — Suriye/Irak kolu.
                                      # 🔴 ŞU AN BOŞ VE BU KASITLI: ilk tur
                                      # 3 nokta yazmıştı, sapma ÖLÇÜLDÜ ve
                                      # noktalar sapmayı BÜYÜTÜYORDU ⇒ geri
                                      # çekildi. Şimdiden bağlı, çünkü rehber
                                      # gelince dolacak ve o gün girdi.py
                                      # kilitli olabilir.
                                      # 🟢 14 Eylül 2026 TR-1923-SINIR doldurdu.
    "yerlesimler_sinir_kuzey.js",     # sınır çifti — Yunanistan · Bulgaristan ·
                                      # SSCB kolu (TR-1923-SINIR, Emre 14 Eyl).
    # ══ 1 EYLÜL 2026 — RENK ENGELİ KALKTI, ÜÇÜ DE BAĞLANDI ══
    # Dünkü tur bu üçünü *"kimlikleri renksiz"* diye bekletmişti; RENK
    # oturumu beş rengi de yazdı ⇒ engel kalktı. Dördü de yeniden ölçüldü:
    # ad çakışması 0 · 3 km mükerrer 0 · koordinat VAR · node temiz.
    # ⚠️ Ve BU KOŞUYA GİRMEDİLER — motor girdiyi 18:53'te fotoğrafladı,
    #    bağlama 1 Eylül'de yapıldı. Altı nokta BİR SONRAKİ koşuda çizilir.
    #    Kusur değil GECİKME; yayın kapısı (`_bagli_mi.py`) bu üçünü
    #    *"adı yerleşim vaat ediyor ama girdi.py okumuyor"* diye durdurdu
    #    ve haklıydı — çare bağlamaktı.
    # 🔴 1 EYLUL 2026 — UCU DE GERI ALINDI, ve sebebi KODDA YAZILIYDI.
    #   Bu turda once bagladim (renkler inmisti, engel kalkti sandim),
    #   sonra `denetle_yayin.py:955-975` okundu ve UCUNU DE ADIYLA
    #   sayiyordu: *'5. kosuda BAGLANAMADI => 6. kosunun ILK isi'*.
    # 🔴 KURAL (denetle_yayin.py, iki kez yazili):
    #   **Anlik goruntu 'YAZABILIRSIN' der, 'BAGLAYABILIRSIN' demez.**
    #   Kosudan SONRA baglamak yayini BAYAT yapar; index.html'e de
    #   eklenirse *nokta gorunur ama peteği olmaz* -- kullanici
    #   sahipsiz bir isaret gorur.
    # ⇒ DOGRU AN: bir sonraki kosu BASLAMADAN HEMEN ONCE.
    #   yerlesimler_4ff22b.js · yerlesimler_amerika2.js ·
    #   yerlesimler_hindistan.js  (2'ser nokta, renkleri HAZIR)
    # 📌 Ve iki alet ZIT ogut verdi: `_bagli_mi.py` *'bagla'* dedi,
    #   `denetle_yayin.py` *'bunlar kasten bekliyor'* diyordu. Once
    #   kosturdugumun ogudune uydum. ⇒ Bir aletin ogudunu uygulamadan
    #   once OTEKI aletin ayni dosya hakkinda ne dedigine bak.
    #
    # ══ 1 EYLÜL 2026 · 22:40 — DOĞRU AN GELDİ, ÜÇÜ DE BAĞLANDI ══
    # Yukarıdaki satır *"DOĞRU AN: bir sonraki koşu BAŞLAMADAN HEMEN
    # ÖNCE"* diyor. O an BUDUR: koordinatör (1.MURAT) yeni koşuyu
    # başlatmadan hemen önce, girdi kilidi ilan edilmeden bağlıyor.
    # Emre'nin sözü (1 Eylül): *"elde ne var ise koşsun; koşuya
    # yetişmeyenler bir sonraki koşuda katılırlar."*
    # 🔴 KAYIT DÖRDÜNCÜ KEZ BAYATLAMADI — çünkü bu sefer bağlama
    #    koşunun KENDİSİYLE aynı işlemde yapıldı, ayrı bir kalem
    #    olarak kuyrukta bırakılmadı.
    # Ölçüldü (bağlamadan önce, dördü de): ad çakışması 0 · 3 km
    # mükerrer 0 · beş kimliğin beş rengi de `renkler.py`de VAR ·
    # node ile ayrıştırma temiz.
    "yerlesimler_4ff22b.js",          # 2 nokta · hawaii-kralligi #ffa5d6
                                      #          · merina #73c0a0
    "yerlesimler_amerika2.js",        # 2 nokta · apaci-ovalar #d7a300
                                      #          · komanci #78bdff
    "yerlesimler_hindistan.js",       # 2 nokta · farukiler #80f67e

    # ═══ 2 EYLÜL 2026 PARTİSİ — ALTI dosya, 36 nokta, 2624 → 2660.
    # Sekizi de `arac/_baglama_onsinav.py` ile BAĞLAMADAN ÖNCE sınandı
    # (araç aynı gün yazıldı, C13'ün üç ayağıyla: geçme çıkış 0 ·
    # ateşleme çıkış 1 · bilinmeyen-alan dalı ayrıca).
    #   ad alanı §7 kuralı        8/8 ✓   (dosya adının ayırt edici
    #                                     parçası değişken adında)
    #   bağlı evrende ad çakışması  0 ✓
    #   3 km mükerrer (bağlı)       0 ✓   en yakın 6,6 km
    #   node ayrıştırma             8/8 ✓
    #
    # 🔴 AMA İKİSİ BAĞLANMADI — kuyruğun KENDİ İÇİNDE bir mükerrer var:
    #   `el-Ulâ` (ok102) ↔ `Ulâ (el-Ulâ)` (ok107)   →  0,10 km = 100 METRE
    # Tek tek sınavda GÖRÜNMÜYORDU: ad çakışması denetimi kaçırdı (adlar
    # farklı yazılmış), tek tek sınav da kaçırdı (ikisi de bağlı DEĞİLDİ,
    # hiç karşılaşmadılar). Yakalayan tek şey MESAFE oldu, ve ancak
    # KUYRUĞUN TAMAMI üstünde.
    # 📌 Ve `el-Ulâ` aynı gece İKİNCİ kez keşfedildi: ok101-ok102 arasında
    #    zaten çözülmüştü, ama karşılaştırma İKİ DOSYA arasında yapılmıştı;
    #    üçüncü kopya ok107'de duruyordu.
    #    ⇒ Bir mükerrer avı, KUYRUĞUN TAMAMI üzerinde yapılmazsa yarım
    #      kalır — ve yarım kaldığı BELLİ OLMAZ.
    # Ölçüldü: ok107 `kaynak:"vadilkura"` taşıyor (ok102'de kaynak YOK,
    # `§4` kırmızı çizgisi), ok102 ise `m:"Medine"` ve `g:` taşıyor.
    # ⇒ Doğrusu bir BİRLEŞME ve sahiplerinin işi; parti onları beklemedi.
    # 🔜 `bekleyen_yerlesim_ok102.js` · `yerlesimler_ok107.js` — çözülünce
    #    bağlanır; ok102 o an `yerlesimler_ok102.js` adına GERİ döner.
    # 🔴🔴 BU ALTI SATIR 2 EYLÜL 10:5x'te EKLENDİ VE 11:0x'te GERİ ALINDI.
    #   Yayın kapısı (`denetle_yayin.py`) durdurdu ve HAKLIYDI:
    #     "✗ YAYIN BAYAT — üretim girdiden geride (girdi DOSYA KÜMESİ
    #      değişmiş: ok101, ok104, ok106, ok109, ok110, p0037)"
    #   Koşu 22:51'de bu ALTI DOSYA OLMADAN başlamıştı; 10:30'da bitti.
    #   Koşudan SONRA bağlamak, `donemler.js`in 36 noktayı HİÇ görmemesi
    #   demek — nokta ekranda belirir, PETEĞİ OLMAZ.
    #
    # 📌 VE BUNU KENDİ KUYRUK DOSYAM ADIYLA YAZIYORDU
    #   (`oturumlar/BAGLAMA-KUYRUGU.md`):
    #     "Koşudan SONRA bağlamak yayını BAYAT yapar: index.html'e de
    #      eklenirse NOKTA GÖRÜNÜR AMA PETEĞİ OLMAZ, kullanıcı sahipsiz
    #      bir işaret görür.  ⇒ DOĞRU AN: bir sonraki koşu BAŞLAMADAN
    #      HEMEN ÖNCE."
    #   Koordinatör A-sırasını "koşu biter → bağla → yayınla" diye kurdu;
    #   doğrusu "koşu biter → YAYINLA → bağla → yeni koşu"dur.
    #   ⇒ Kural yazılıydı, sıra yanlış kuruldu, ve yakalayan İNSAN DEĞİL
    #     KAPI oldu. `§11`in "kural yetmiyor, ALET gerekiyor" dersinin
    #     bugünkü dördüncü vakası — ve bu sefer alet kazandı.
    #
    # 🟢 YAYIN YAPILDI (r4776, commit db9d87f) — ALTI DOSYA ŞİMDİ BAĞLANDI,
    #    yani bir SONRAKİ koşu onları görecek. Sıra artık doğru:
    #    koşu biter → YAYINLA → bağla → yeni koşu.
    "yerlesimler_ok101.js",           # 1 nokta · el-Vech (Tebük-Medine hac yolu)
    "yerlesimler_ok104.js",           # 6 nokta · Mat · Leş · Kevkebân ·
                                      # Hasankeyf. Hasankeyf
                                      # `eyyubi-hisnikeyfa` kullanıyor ve
                                      # o renk A3'te YAZILDI (#108810);
                                      # renksiz kimlik = harita deliği (§8)
    "yerlesimler_ok106.js",           # 11 nokta · Sloboda/Kırım hattı ·
                                      # İzyum · Yenikale · Çuguyev
    "yerlesimler_ok109.js",           # 2 nokta · İmâdiye (Musul sancağının
                                      # altıncı kazası) · Şırnak.
                                      # `kesinlik:"belirsiz"` taşır — A2'de
                                      # BILINEN_ALANLAR'a kaydedildi.
                                      # Şırnak'ın `kur:"1891-01-01"`i bir
                                      # ALT SINIRDIR, kuruluş günü DEĞİL.
    "yerlesimler_ok110.js",           # 1 nokta · Darende
    # ───── 3 Eylül 2026 · ÜÇ DOSYA BAĞLANDI, dördüncüsü BAĞLANMADI ─────
    # Üçü de `_baglama_onsinav.py`dan KIRMIZI 0 ile geçti (ad çakışması ·
    # 3 km · alan sınavı). Yayın kapısı dördünü de "ADI YANILTAN DOSYA"
    # diye uyarıyordu: adları `yerlesimler_` ama `girdi.py` okumuyordu.
    "yerlesimler_amerika3.js",        # 25 nokta · Kuzey Meksika · Kaliforniya
                                      # misyonları (AMERIKA-0902)
                                      # ⚠️ 2s'e etkisi ÖLÇÜLDÜ: +15 (70→85,
                                      # tavan 121) ve 25 açığın 22'si
                                      # KURULUŞ günü — "el değiştirme" değil
                                      # "doğuş". Değişmez 2 bu ayrımı BİLMİYOR.
    "yerlesimler_ortaasya3.js",       # 22 nokta · Yedisu · Kazak bozkırı ·
                                      # Doğu Türkistan (ORTAASYA-0902)
    "yerlesimler_ok107.js",           # 21 nokta · Orta Asya · Cizre-Midyat
    # 🔴 `bekleyen_yerlesim_ok102.js` (eski adı `yerlesimler_ok102.js`;
    #    22 Eylül 2026'da yayın kapısının "ADI YANILTAN DOSYA" uyarısı
    #    üzerine yeniden adlandırıldı — ad, taşımadığı bir şeyi vaat
    #    ediyordu) BAĞLANMADI — ön sınav 2 KIRMIZI verdi:
    #   ad çakışması: "Medâin-i Sâlih (el-Hicr)" · "el-Ulâ" BAĞLI EVRENDE VAR
    #   3 km: el-Ulâ → el-Ulâ  0,04 km
    #   ⇒ `yukle()` ad çakışmasında ValueError ATAR ve MOTOR HİÇ BAŞLAMAZ.
    #   Bağlansaydı koşu daha ilk saniyede ölürdü. Sahibiyle çözülecek.
    "yerlesimler_okyanusya.js",
    "yerlesimler_sibirya2.js",
    "yerlesimler_gamerika.js",
    "yerlesimler_kamerika.js",
    "yerlesimler_p0043libya.js",      # 1 nokta · Sîva (Siwa) — paket 0043
                                      # (H-0017), KITA 13. Sevk 12 ADAY
                                      # verdi, ONU ZATEN VERİDEYDİ ve
                                      # ÜÇÜ 3 KM TUZAĞIYDI:
                                      #   "Farafra"      → Ferâfire  0,0 km
                                      #   "Mercu (Marj)" → Merc      4,8 km
                                      #   "el-Beyda"     → Beyzâ    12,4 km
                                      # ⇒ harfiyen uygulansa ON MÜKERRER
                                      # nokta. Koordinatörün taraması ADA
                                      # baktı, işçi KOORDİNATA baktı —
                                      # `yerlesimler_hint0912.js`teki aynı
                                      # kaçırmanın ikinci vakası, aynı gün.
                                      # 📌 Gerçek boşluk TEKTİ: TDV `mısır`
                                      # altı Batı Çölü vahası sayıyor
                                      # (Sîva · Bahriyye · Feyyûm ·
                                      # Ferâfre · Dâhle · Hârce) ve BEŞİ
                                      # atlasta; Sîva kaynağın kendi
                                      # listesindeki tek eksikti.
                                      # ⚠️ Dosyaya damgalı zayıflık: Sîva
                                      # altı vahanın en özerkiydi, Mısır'ın
                                      # fiilî denetimi 1820 Kavalalı
                                      # seferiyle kuruldu; `v:1805-07-03`
                                      # ondan ~15 yıl önce başlıyor. AMA
                                      # dört kardeş vaha da aynısını
                                      # taşıyor — atlasın konvansiyonu.
                                      # Düzeltilecekse BEŞİ BİRLİKTE.
    "yerlesimler_hint0912.js",        # 1 nokta · Baroda (Vadodara)
                                      # ⚠️ Sevk DÖRT nokta istiyordu; KITA 8
                                      # ölçtü ve ÜÇÜ ZATEN VARDI —
                                      # `Gvalyar (Gwalior)` · `İndor (Indore)`
                                      # · `Kolhapûr`, hepsi yerlesimler_asya.js.
                                      # Koordinatörün taraması onları
                                      # `ad:"Gvalyar"` diye TAM AD eşleşmesiyle
                                      # aradı; veri PARANTEZLİ ÇİFT AD yazıyor
                                      # ve `Kolhapûr` şapkalı. ⇒ Dördü de
                                      # yazılsaydı ÜÇ MÜKERRER nokta doğardı.
    "yerlesimler_ukrayna_0916.js",    # 5 nokta · Vinnitsa · Braslav · Kostantinov · Jitomir · Berdiçev
                                      # (H-0095, HARITA-VERI araştırdı, UYGULA bağladı 16 Eyl 2026)
    "yerlesimler_anadolu_0914.js", "yerlesimler_p0037.js",           # 15 nokta · Bolgrad · Kahul · Zamość
                                      # ⚠️ Zamość/Lublin/Chełm `lehistan`
                                      # kullanıyor ama o künye 1795'te
                                      # bitiyor — 1809-1815 VARŞOVA
                                      # DÜKALIĞI'dır ve künyesi YOK.
                                      # `Değişmez 4` 8 → 11 bunun yüzünden.
                                      # 🔜 `varsova-dukaligi` künyesi +
                                      #   rengi + dört kaydın hedefi:
                                      #   AÇIK KALEM, sevk edildi.
    "yerlesimler_8beb2b.js",
    "yerlesimler_afrika2.js",          # Yakutistan · Kamçatka · Çukotka ·
                                      # Kolıma. 🔴 SIFIR NOKTA, VE KASITLI:
                                      # araştırma "buraya nokta yazılmamalı"
                                      # diye SONUÇLANDI (kaynak susuyor ⇒
                                      # `veri-yok`, kaynak konuşuyor ⇒
                                      # `devletsiz` ayrımı). Boşluk bir
                                      # eksiklik değil bir ÖLÇÜM; bağlı
                                      # olması "bu dosya görüldü" demektir.
    # KOSU13-OTOBUS (17 Eylül 2026) — NOKTASIZLIK-ADAY kümelerine kaynaklı noktalar
    "yerlesimler_nokta_amerika_0917.js",
    "yerlesimler_nokta_asya_0917.js",
    "yerlesimler_nokta_ortadogu_0917.js",  # 1b boşlukları kaynaklı __BOSLUK__ beyanı (NOKTA-ORTADOGU fbe53ef, 19 Eyl)
    "yerlesimler_nokta_sibirya_0917.js",
    "yerlesimler_nokta_afrika_0917.js",
    # BITIR-1923-0078 (24 Eylul 2026) — A katmani kolu, bes oturumun teslimi
    "yerlesimler_a78_afrika.js",
    "yerlesimler_a78_amerika.js",
    "yerlesimler_a78_asya.js",
    "yerlesimler_a78_avrupa.js",
    "yerlesimler_a78_okyanusya.js",
]
