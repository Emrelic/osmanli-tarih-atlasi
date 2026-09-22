# -*- coding: utf-8 -*-
"""KRONO-0076-B — CEVAP.json'a YALNIZ kendi 24 anahtarimi koyar.

Dosya PAYLASIK (sekiz oturum). Bu yuzden:
  ① oku -> yalnizca KENDI anahtarlarini ekle/guncelle -> yaz
  ② baska oturumun anahtarina DOKUNMA (once/sonra sayisi basilir)
  ③ yazdiktan sonra GERI OKU ve dogrula
"""
import io, json, os, sys, shutil, datetime
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8")

YOL = r"C:\claudemre\kutu\giden\parti-emrelic-0076\CEVAP.json"

BENIM = {

"H-0067": ("cozuldu",
 "EK OKUMA KARTI URETILDI. Capa olculdu: kronoloji_misir.js:267 t:\"1883-11-05\" "
 "(ayrica olaylar_ek9 ayni gun, Hicks Pasa yuzu). Kart: sebep-sonuc-seykan-1883 "
 "(window.EKOKUMA_P76E). Emre'nin sorusu -- \"nasil oluyor da sunu yenemiyor bunu "
 "yeniyor\" -- dogrudan cevaplandi: Seykan'da dagilan kuvvet bir OSMANLI ordusu "
 "degil, 1882'de dagitilip aceleyle yeniden kurulmus MISIR ordusudur; iki savas "
 "ayni olcekte degil (colde ikmal hatti). Kaynak: TDV sudan (govde okundu -- "
 "Muhammed Ahmed el-Mehdi'nin cikisi, Rauf Pasa'nin teklifi, Ubeyyid, Hartum'a "
 "giris 26 Ocak 1885) + TDV osman-dikne."),

"H-0070": ("olculecek",
 "OLCULDU, HARITA YANLIS DEGIL. s: kirilmalari bati->dogu siralandi: Kordofan "
 "lon29.5 -> mehdi 1882-09-07 | TOKAR lon37.7 -> mehdi 1884-01-01 enklav:true | "
 "Berber lon34.0 -> 1884-05-01 | Hartum/Dongola/Sennar/Kesela/Fasoda -> 1885-01-26. "
 "Yani 1884-01-01..1884-05-01 penceresinde Mehdi dogudaki tek noktayi (Tokar) "
 "tutuyor, ara (Nil hatti) hala Misir'da. Bitisiksizlik O YILIN GERCEGI ve veride "
 "zaten enklav:true ile BEYAN EDILMIS. \"Ucakla mi geldiler\": HAYIR -- TDV "
 "osman-dikne olculdu: Dogu Sudan emiri Osman Dikne SEVAKINLI (1836 rivayeti), "
 "Mehdi tarafindan BECE kabilelerine emir tayin edilmis; kaynak 5 Agustos 1883 - "
 "12 Mart 1884 arasi DOKUZ carpismayi gun gun veriyor. Ayaklanma YEREL. "
 "Bu olcum kimdir-osman-dikne kartina donusturuldu (sevkli 19'a EK, 20. kart). "
 "🟡 IKI TARIH CELISKISI BILDIRILIYOR (benim kalemim degil): (a) Ubeyyid veri "
 "1882-09-07, TDV sudan \"19 Ocak 1883\" -- fark ~4,5 ay; (b) Kesela veri "
 "1885-01-26, TDV osman-dikne \"8 Subat 1884\" -- fark ~1 yil. "
 "BULUNAMADI: Tokar'in teslim GUNU (veri 1884-01-01 bir YYYY-01-01 dolgusudur; "
 "TDV dokuz carpismayi sayiyor ama Tokar'i vermiyor). Ayrinti: denetim/KRONO-0076-B.md §5."),

"H-0074": ("cozuldu",
 "EK OKUMA KARTI URETILDI + EMRE'NIN ITIRAZI HAKLI CIKTI. Kart: teknik-habes-eyaleti. "
 "Olcum: TDV habes-eyaleti govdesi okundu -- eyalet 5 Temmuz 1555'te Ozdemir Pasa ile "
 "kuruldu; kapsadigi yerler Masavva', Arkiko, Sevakin, Zeyla', Beylul, Ayzab, Berbera "
 "ve Dehlek adalari, yani KIZILDENIZ KIYI SERIDI ve LIMANLARI. Habes (Etiyopya) "
 "yaylasini KAPSAMIYOR. Emre'nin \"Habesistan Osmanli'ya bagli degil, uc bes kiyi "
 "kenti mi\" sorusunun cevabi: evet, tam olarak kiyi kentleri. 1865'te limanlar "
 "Misir hidivi Ismail Pasa'ya devredildi (veride Sevakin/Masavva v: kayitlariyla "
 "birebir ortusuyor). TDV TUZAGI: `habesistan` slugu yalniz \"bk. ETIYOPYA\" "
 "dondurdu (canli yonlendirme kutugu); asil madde `habes-eyaleti` slugunda bulundu."),

"H-0081": ("senin-kararin",
 "EMRE'NIN SAYDIGI UC YERIN UCU DE HARITADA VAR -- eksik olan BASKA uc sancak merkezi. "
 "🔴 ONCE BIR DUZELTME: ilk olcumumde \"Eski Zagra yerlesim noktasi YOK\" demistim, "
 "BU HUKUM YANLISTI ve ayni gece duzeltildi. Gercek: yerlesimler.js ad:\"Eski Zagra "
 "(Stara Zagora)\" lat 42.425 lon 25.633. Kacirma sebebi ADIN PARANTEZLI olmasi; "
 "literal dizgi aramasi kordu. Arama suzgeci Turkce-guvenli hale getirildi ve 9 "
 "pozitif vakayla ATESLENDI (9/9 OK). "
 "OLCUM (TDV bulgaristan, govde okundu): Dogu Rumeli vilayeti FILIBE, ISLIMYE, ESKI "
 "ZAGRA, TATARPAZARCIGI, BURGAZ ve HASKOY sancaklarindan olusturuldu -- ALTI sancak. "
 "Havuzda VAR: Filibe (42.144/24.750) - Eski Zagra (42.425/25.633) - Tatarpazarcigi "
 "(42.192/24.333). Havuzda YOK: ISLIMYE (Sliven) - BURGAZ (Burgas) - HASKOY (Haskovo). "
 "⇒ Ekrandaki Dogu Rumeli sekli vilayetin siniri DEGIL, UC NOKTANIN VORONOI'sidir; "
 "vilayetin dogu yarisi (Burgaz kiyisi, Islimye havzasi) noktasiz. "
 "ONERI: uc sancak merkezi eklensin. Yaklasik koordinatlar raporda (§6.1). "
 "🔴 KAYNAK UYARISI: TDV KOORDINAT VERMEZ -- dayanak olan sey HANGI ALTI SANCAGIN "
 "vilayete girdigidir, noktalarin yeri degil; enlem/boylamlar dis kaynakla "
 "DOGRULANMADAN yazilmamalidir. Karar Emre'nin."),

"H-0082": ("kosu-bekliyor",
 "IKI AYRI EKSIK OLCULDU. (1) NOKTA: Emre'nin \"bu maddenin haritada noktasi yok, "
 "koyalim\" dedigi yer RAS ECDIR'dir (1886 duzenlemesinin konusu olan Akdeniz ucu) "
 "ve havuzda YOK. Cizili hattin kendi Akdeniz ucu lon 11.5252 lat 33.1771 -- ama "
 "🔴 bu koordinat ATLASIN KENDI VERISINDEN okundu, CLAUDE.md §4 geregi DAYANAK "
 "DEGILDIR, dis kaynakla dogrulanmali. Havuzda olanlar: Gadamis, Derc (Derj), Nalut, "
 "Zuvare, Bin Gerdan, Tatavin, Medenin, Gabes. Yok olanlar: Ras Ecdir, Sinaven, "
 "Dehibat, Remada. (2) HAT: 1886 duzenlemesi icin d_sinirlar* kaydi SIFIR -- cizilen "
 "en eski hat d1910-libya-tunus-osmanli (f:1910-05-19). Kronoloji \"sinir cizildi\" "
 "diyor, harita 24 yil hicbir sey gostermiyor; kronoloji maddesinin yer_id'si de bos. "
 "Ayrinti ve onerim: H-0087'ye bak (iki madde ayni cozumu istiyor). "
 "🔴 Duzeltme: ilk raporumda dolayli olarak \"Gadames yok\" demistim; VAR -- "
 "yerlesimler_afrika.js ad:\"Gadamis\", bas harf G degil G-breve."),

"H-0083": ("cozuldu",
 "EK OKUMA KARTI URETILDI. Kart: teknik-osmanli-demiryollari. IKIZ SINAVI CEVABI: "
 "H-0083 ile H-0084 MUKERRER DEGIL. Capa maddesi ayni (olaylar_ek5.js:411, "
 "t:\"1888-09-24\") ama govdeler iki ayri yuz: H-0083 Osmanli demiryollarinin GENEL "
 "gelisimi, H-0084 ALMAN imtiyazinin stratejik anlami. Bu kart genel yuzu isliyor: "
 "kilometre garantisi usulunun nasil calistigi, Rumeli hatti (17 Nisan 1869 Hirsch "
 "mukavelesi, yilda 28 milyon frank, 4 Ocak 1871 ilk parca, 12 Agustos 1888 Sark "
 "Ekspresi), Anadolu hatti (24 Eylul 1888 imtiyaz, 15.000 frank/km, 4 Mart 1889 "
 "sirket) ve faturanin ikinci kez odenmesi (1909'da 42 milyon franklik tazminat). "
 "Kaynak: TDV rumeli-demiryolu + TDV bagdat-demiryolu (ikisinin de govdesi okundu). "
 "TDV TUZAGI: mustakil bir `demiryolu` maddesi YOK, slug arama sayfasi dondurdu."),

"H-0084": ("cozuldu",
 "EK OKUMA KARTI URETILDI. Kart: sebep-sonuc-alman-imtiyazi-1888. H-0083 ile ayni "
 "capaya baglandi ama AYRI YUZ (ikiz sinavi: mukerrer degil). Emre'nin sordugu ucu de "
 "cevaplandi: (a) imtiyazin onemi -- 24 Eylul 1888 Alfred von Kaulla'ya verildi, "
 "4 Ekim 1888 sozlesme, Deutsche Bank Haydarpasa-Izmit isletme + Ankara insa hakkini "
 "aldi, 15.000 frank/km garanti, 4 Mart 1889 Anadolu Demiryollari Sirketi. "
 "(b) AMAC -- Osmanli icin toprak ISTEMEYEN bir buyuk devletle, toprak isteyen ucunu "
 "(Ingiltere/Fransa/Rusya) dengelemek; Almanya icin pazar, ham madde, Doguya acilim. "
 "(c) STRATEJIK ANLAM -- Bagdat'a inen hat Berlin'den Basra'ya kesintisiz kara yolu "
 "demekti ve Ingiltere'nin Hindistan yolunun yanindan geciyordu; Ingiltere tam bu "
 "yuzden mudahale etti. (d) BAGDAT/HICAZ FARKI -- Bagdat hatti imtiyaz+kilometre "
 "garantisiyle, HICAZ hatti BAGISLA yapildi (fonun ~1/3'u bagis); tercih bilincliydi, "
 "kutsal topraklara yabanci sirket sokmamak icin. Kaynak: TDV bagdat-demiryolu + "
 "TDV almanya + TDV hicaz-demiryolu."),

"H-0085": ("cozuldu",
 "EK OKUMA KARTI URETILDI. Kart: sebep-sonuc-ittihadi-osmani-1889. Capa: "
 "olaylar_ek5.js:412 t:\"1889-06-02\". Kaynak: TDV ittihat-ve-terakki-cemiyeti "
 "(govde okundu) -- 2 Haziran 1889'da Mekteb-i Tibbiyye-i Sahane'de dort ogrenci "
 "(Ibrahim Temo, Abdullah Cevdet, Ishak Sukuti, Mehmed Resid), 1895'te Ahmed Riza'nin "
 "etkisiyle ad degisikligi, hucre sistemi ve yemin usulu, Paris-Cenevre subeleri, "
 "1908'de Resneli Niyazi ve Enver Bey, 1918 feshi ve 1926 tasfiyesi. Kart ayrica "
 "\"nicin tibbiye\" sorusunu ve hucre usulunun teknik mantigini isliyor."),

"H-0086": ("cozuldu",
 "EK OKUMA KARTI URETILDI + TARIH CELISKISI BILDIRILIYOR. Kart: "
 "kimdir-sammar-hail-residileri, kesinlik:\"tartismali\". "
 "Capa: olaylar_ek16.js:366 t:\"1891-01-01\". "
 "Emre'nin sordugu: \"Sammar Hail Devleti emirligi ile alakali ek okuma yapalim, "
 "kimdir bunlar\" -- cevaplandi: Semmer kabilesinin Abde kolu, 1835'te Abdullah b. "
 "Resid Hail emirligini ele gecirdi, Osmanli hakimiyetini kabul ettiler, 1921'de "
 "Suudiler tarafindan tasfiye edildiler. Kaynak: TDV residiler + TDV suudiler. "
 "🔴 TARIH: VERIDE UC AYRI DEGER VAR -- paket basligi 21 Ocak 1891, "
 "olaylar_ek16.js t:\"1891-01-01\" + gun:\"21 Ocak 1891\", devletler.js:1538 ve :1562 "
 "1891-01-24. KAYNAGA SORULDU: TDV residiler Muleyda'yi ADIYLA HIC ANMIYOR; TDV "
 "suudiler taraflari veriyor ama YALNIZ YIL (1891), GUN VERMIYOR. "
 "⇒ CLAUDE.md §4: hassasiyet kaynagi asamaz. Kart YIL hassasiyetinde yazildi ve bu "
 "acikca beyan edildi. devletler.js'teki 1891-01-24 BIR KAYNAK DEGILDIR ve delil "
 "sayilmadi. 21 <-> 24 farkini DUZELTMEDIM: devletler.js benim dosyam degil, "
 "koordinatore birakiyorum."),

"H-0087": ("kosu-bekliyor",
 "OLCULDU: EMRE HAKLI, D KATEGORISI BIR SINIR TARIF EDILIYOR AMA HARITADA YOK. "
 "\"Bu anlasmada belirlenen koordinatlar haritada karsilik buluyor mu ve gosteriliyor "
 "mu\" sorusunun cevabi: HAYIR. 1886 ve 1892 duzenlemeleri icin d_sinirlar* kaydi "
 "SIFIR (tam tarama). Cizilen en eski hat d1910-libya-tunus-osmanli f:1910-05-19 "
 "(57 nokta; Akdeniz ucu lon 11.5252 lat 33.1771 = Ras Ecdir, guney ucu lon 9.5017 "
 "lat 30.2203 ~ Gadames) ve d1910-libya-cezayir-gadames-osmanli (5 nokta). "
 "Kronoloji iki kez \"sinir cizildi\" diyor (kronoloji_sinir_ortadogu.js:11 "
 "t:\"1886-01-01\" kiyi kesimi, :12 t:\"1892-01-01\" Gadames'e kadar), ikisinin de "
 "yer_id'si BOS. Yani harita 24 yil boyunca hicbir sey gostermiyor. "
 "🔴 ONERIM VE NICIN \"1910 GEOMETRISINI KOPYALA\" DEMIYORUM: d1910-libya-tunus-osmanli "
 "ile d1923-libya-tunus BIREBIR AYNI 57 noktayi tasiyor. Ayni geometriyi 1886 ve "
 "1892'ye kopyalamak SAHTE KESINLIK olur -- 1886 yalniz KIYI kesimini, 1892 "
 "Gadames'e kadarki kesimi cizmisti ve bu iki hattin gercek guzergahi elimdeki "
 "kaynaklarda YOK. Semanin zaten destekledigi yol kullanilmali: "
 "d_sinirlar_amerika.js'teki \"kategori\":\"D-YOK\", \"hat\":null, \"kutu\":[...] "
 "kalibi -- boylece \"burada bir hat vardi ama guzergahi bilinmiyor\" BEYAN edilmis "
 "olur, uydurulmus olmaz. Kalem karari; hukum koordinatorun."),

"H-0088": ("cozuldu",
 "🔴 CAPA DEGISTIRILDI -- paket kaydi 1892 Tunus-Trablusgarp sinirina dusmustu "
 "(H-0087 ile ayni baslik), gercek konu ISTANBUL DEPREMLERI. Bu bir paket yakalama "
 "arizasidir; koordinatorun hukmuyle (a) secenegi uygulandi ve gercek capa "
 "UYDURULMADAN, OLCULEREK bulundu: olaylar_ek14.js:147 t:\"1894-07-10\" "
 "b:\"1894 Istanbul depremi\". Kart ayrica iki capa daha aldi: olaylar_ek7.js:23 "
 "t:\"1509-09-14\" (Kucuk Kiyamet) ve olaylar_ek7.js:123 t:\"1766-05-01\" "
 "(Fatih Camii'nin yikilmasi). Uc capanin ucu de dogrulayiciyla sinandi, ucu de "
 "tutuyor. Kart: teknik-istanbul-depremleri. "
 "Kaynak: TDV zelzele (buyuk Marmara depremleri 1509-1719-1766-1894; depremin ahlaki "
 "yorumu, sarap ve eglence yasaklari, kiyamet alameti telakkisi; kaynak turleri) + "
 "TDV istanbul + TDV fatih-camii-ve-kulliyesi. "
 "BULUNAMADI: 1894 depreminin can kaybi -- zelzele govdesinden cekilen rakamlarin "
 "HANGI DEPREMI tarihledigi ayirt edilemedi, karta YAZILMADI (rakamin govdede "
 "gecmesi o degeri desteklemez)."),

"H-0089": ("cozuldu",
 "EK OKUMA KARTI URETILDI. Kart: teknik-darulaceze-ve-hayir-kurumlari. Capa: "
 "olaylar_ek14.js:146 t:\"1896-02-02\". Kaynak: TDV darulaceze (govde okundu) -- "
 "30 Mart 1890 fermani, 1890-1892 planlama, 10 Kasim 1892 temel (Halil Rifat Pasa), "
 "mimar Vasilaki Efendi, 100.000 -> 70.000 lira butce, 17.000 liralik padisah "
 "hediyesi + bagis + piyango + tiyatro geliri + mabed sandiklari, 2 Subat 1896 "
 "acilis ve ilk 150 kadin, 200 yatakli hastahane, yetimhane, 0-7 yas suthane, "
 "1896-1907 arasi 48 diploma 6 hafiz, 1907'de 130 erkek 22 kiz ogrenci. Kurulus "
 "ilkesi \"din ve milliyet farki gozetilmeyecekti\" ve avluda cami-kilise-havra "
 "birlikte. Emre'nin saydigi oteki kurumlar (Darussafaka, Sisli Etfal, GATA) "
 "mustakil olarak arastirilmadi; kart onlari tek tek anlatmak yerine devrin "
 "KURUMLASMA DALGASI olarak cerceveliyor -- ucu icin ayri kart istenirse yeni "
 "numara gerekir (kendi basima kapsam acmadim)."),

"H-0091": ("cozuldu",
 "EK OKUMA KARTI URETILDI. Kart: sebep-sonuc-ingiltere-sudan-1896. Capa: "
 "kronoloji_misir.js:271 t:\"1896-09-23\". Emre'nin sorusu (\"Misir ve Ingiliz "
 "kuvvetleri nicin Sudan'a inme siyaseti guttuler, stratejik askeri siyasi veya "
 "ekonomik acidan nasil cikarlar vardi\") dort baslikta cevaplandi: (a) NIL -- "
 "Ingiltere 1882'den beri Misir'i idare ediyordu ve Misir'in hayati tek bir nehre "
 "bagliydi; Sudan kendi basina degil Misir'in emniyet kusagi olarak goruldu. "
 "(b) RAKIPLER -- 1890'larda Nil'in yukari havzasina baska bayraklarin ulasma "
 "ihtimali belirdi. (c) YONTEM -- ordu ilerledikce arkasindan demiryolu doseniyor, "
 "yani Seykan'da Misir ordusunu olduren sey (colde kopan ikmal) tersine ceviriliyor. "
 "(d) HUKUKI KILIF -- Sudan Misir'in kaybedilmis vilayeti sayildigi icin oraya "
 "\"donmek\" isgal degil iade gibi anlatilabiliyordu. Kaynak: TDV sudan (Kitchener'in "
 "Abdullah et-Teayisi uzerine sevki, 2 Eylul 1898 Kerkeri savasi) + TDV osman-dikne."),

"H-0092": ("cozuldu",
 "EK OKUMA KARTI URETILDI. Kart: savas-hikayesi-domeke-1897. Capa: "
 "kronoloji_balkan.js:929 ve olaylar_ek5.js:414, t:\"1897-04-17\". "
 "Emre'nin cercevesi (\"meydanda kazanilmis ama masada kaybedilmis\") ALINDI ve "
 "olculdu: TDV gazi-edhem-pasa govdesi -- 18 Nisan 1897 savas ilani, ayni gun "
 "Milona zaferi, 25 Nisan Yenisehir, 12 Mayis Tirhala, 17 MAYIS 1897 DOMEKE "
 "(Yunanlilar buyuk bozguna ugratildi), Termopil gecidi 24 saatte asilarak Atina "
 "yolu acildi, Edhem Pasa'ya \"gazi\" unvani ve murassa Imtiyaz nisani. "
 "Kart, kaybedilenin TOPRAK degil ZAFERIN SIYASI KARSILIGI oldugunu ayirt ediyor. "
 "🟡 KAYNAK FARKI: veri t:\"1897-04-17\", TDV \"18 Nisan 1897\" diyor -- ilki sinir "
 "carpismalarinin, ikincisi RESMI ILANIN tarihi gorunuyor; kartta ikisi de anildi, "
 "veri DEGISTIRILMEDI. "
 "TDV TUZAGI: `domeke-muharebesi` slugu 0 SONUC verdi. TDV olay degil yer-kisi "
 "ansiklopedisi: arama/?q=domeke -> gazi-edhem-pasa, izzet-pasa-ahmed, tesalya "
 "maddelerinin GOVDESINDE bulundu; kisi maddesi okundu."),

"H-0094": ("cozuldu",
 "EK OKUMA KARTI URETILDI. Kart: sebep-sonuc-alman-osmanli-yakinlasmasi-1898. "
 "Capa: olaylar_ek2.js:73 t:\"1898-10-18\". Emre iki yonu de sordu, ikisi de "
 "cevaplandi. ALMANYA NICIN: pazar, ham madde, Doguya acilim ve Ingiltere-Fransa-"
 "Rusya'nin nufuzunu dengeleme; \"Doguya acilma\" Almanya'da prestij ve propaganda "
 "meselesi olmustu. Kudus'teki \"300 milyon muslumanin dostu\" ilani ASIL "
 "Osmanlilara degil INGILTERE'ye soylenmisti -- muhatap Ingiliz idaresindeki musluman "
 "somurgelerdir. OSMANLI NICIN: cevap olumsuzdadir -- Almanya'nin musluman somurgesi "
 "YOKTU ve Osmanli toprağindan pay talebi yoktu; II. Abdulhamid ucunu dengelemek "
 "istedi. Zemin zaten haziRdi: 1790 Osmanli-Prusya ittifaki, 1798 ilk elci, "
 "1835-1839 Moltke, von der Goltz Pasa ve Krupp-Mauser alimlari, 1889'da ilk ziyaret. "
 "Ziyaret takvimi: 18 Ekim Istanbul, 25 Ekim Hayfa, 29 Ekim Kudus. "
 "Kart, denge siyasetinin riskini de yaziyor: somurgesi olmadigi icin secilen ortak "
 "on alti yil sonra imparatorlugu kendi savasina ortak etti. Kaynak: TDV almanya."),

"H-0100": ("cozuldu",
 "EK OKUMA KARTI URETILDI. Kart: sebep-sonuc-murzsteg-1903. Capa: olaylar_ek5.js:417 "
 "t:\"1903-10-02\". Emre'nin sordugu \"Osmanli acisindan siyasi hayat acisindan "
 "onemi\" tam olarak cevaplandi: programin ozu reformun kendisi degil reformun "
 "DENETIMININ disariya devredilmesidir -- Avrupali askeri ve sivil temsilciler bir "
 "umumi mufettisle isbirligi icinde gorev alacakti; Osmanli hukumeti egemenlik "
 "haklari zedelendigi icin basta istemedi, kabul etmek zorunda kaldi. SIYASI SONUC: "
 "bunu en keskin goren kesim o vilayetlerdeki genc subaylardi; 1908'de Reval "
 "soylentileri yayilinca Ittihatcilar harekete gecti ve 24 Temmuz 1908'de II. "
 "Mesrutiyet ilan ettirildi. Yani Murzsteg Makedonya'yi kurtarmadi, Makedonya'yi "
 "kaybetmemek icin ayaklanan bir subay kusagi yaratti. Kaynak: TDV makedonya "
 "(Ayastefanos-Berlin farki, komitacilik, 1893 IMRO ve 1903 Ilinden, Murzsteg, "
 "1908 Reval)."),

"H-0101": ("cozuldu",
 "EK OKUMA KARTI URETILDI. Kart: sebep-sonuc-yemen-israri. Capa: "
 "kronoloji_arabistan.js:237 ve olaylar_ek5.js:424, t:\"1905-04-01\". "
 "Emre'nin sorusu (\"1. Dunya Savasinda bile Yemen konusunda inat etmesinin sebebi "
 "ne idi, Osmanlinin Yemen vizyonu ne idi\") BES SEBEPLE cevaplandi -- TDV yemen "
 "govdesinden birebir: Kizildeniz kontrolu, Suveys'in guvenligi, Hicaz'in korunmasi, "
 "hilafet prestiji, Ingiliz Aden'ine karsi denge. Kart bunu tek cumlede topluyor: "
 "Yemen kutsal topraklarin guney kapisidir. Takvim: 1871 Ahmed Muhtar Pasa valiligi "
 "ve ~20 yil istikrar, 1889 ve 1902 Zeydi isyanlari, 1905'te Imam Yahya'nin San'a "
 "kusatmasi ve sehrin teslimi, Ahmed Izzet Pasa'nin 50.000 kisilik ordusu, "
 "13 Ekim 1911 Daan Antlasmasi (22 aleni + 5 gizli madde, yillik 20.000 altin lira, "
 "dis iliski hakki YOK), savas boyunca surmesi ve 7. Kolordu'nun Asir-Aden "
 "harekatina destegi, 5 Mart 1919'da 3883 kisinin Hudeyde'de teslimi. Cozumun "
 "mantigi da yazildi: devlet kirk yilda silahla alamadigini sozlesmeyle aldi -- "
 "hukuki bag korundu, fiili idare devredildi."),

"H-0102": ("cozuldu",
 "EK OKUMA KARTI URETILDI -- AMA BIR YUZU ACIKCA BOS BIRAKILDI. Kart: "
 "tartisma-yildiz-suikasti-1905, tur:\"tartisma\", kesinlik:\"tartismali\". "
 "Capa: olaylar_ek5.js:425 t:\"1905-07-21\". "
 "CEVAPLANAN: Tevfik Fikret'in siiri -- adi \"BIR LAHZA-I TEAHHUR\", 1906'da "
 "yayimlandi, Mesrutiyet oncesi yillarda elden ele dolasti; ad, suikastin "
 "basarisizligina sebep olan bir anlik gecikmeyi anlatir. Kart siirin IKI OKUMASINI "
 "da kaynagiyla veriyor (istibdada karsi duran sair / suikastcilari alkislayan sair) "
 "ve taraf tutmuyor; Fikret'in 1902 \"Sis\" ve 1912 \"Doksan Bese Dogru\" - "
 "\"Han-i Yagma\" cizgisi de anilarak tek bir tarafin adami sayilamayacagi gosteriliyor. "
 "🔴 BOS BIRAKILAN: suikasti kimin duzenledigi, Ermeni siyasi hareketleriyle baglanti "
 "ve saikler. SEBEP OLCULDU: TDV abdulhamid-ii maddesinin cekilen govdesi 1905 "
 "suikastini, failini ve arka planini KAPSAMIYOR. Dayanaksiz bir isnat yazmaktansa "
 "bosluk birakildi ve bu kartta ACIKCA BEYAN edildi. Emre bu yuzu istiyorsa ayri bir "
 "kaynak taramasi gerekir. Kaynak: TDV tevfik-fikret."),

"H-0103": ("kosu-bekliyor",
 "EMRE'NIN TAHMINI DOGRU CIKTI, HAT ZATEN CIZILI -- eksik olan NOKTALAR. "
 "\"Bu madde de Misir'in D kategori sinirini tarif ediyor saniyorum\" -> EVET. "
 "OLCULDU: d_sinirlar_ortadogu.js:19 d1906-filistin-misir-hidivlik VAR, "
 "f:\"1906-10-01\" t:\"1914-12-18\" kategori:\"E\", 22 noktali hat. "
 "AMA hattin tarif ettigi IKI UCTA DA yerlesim noktasi YOK: "
 "TABA yok (hattin guney ucu lon 34.8691 lat 29.4806, Akabe korfezi basi), "
 "REFAH yok (hattin kuzey ucu lon 34.2484 lat 31.2114, Akdeniz). "
 "Ayrica Akabe, Nahl, Bi'russebi, Kusayme de yok. Havuzda olanlar: El-Aris, "
 "Gazze, Suveys. "
 "🔴 KAYNAK UYARISI: yukaridaki koordinatlar ATLASIN KENDI HAT VERISINDEN okundu. "
 "CLAUDE.md §4 geregi atlas referans DEGILDIR -- bu sayilar nokta eklemek icin "
 "kullanilacaksa dis kaynakla DOGRULANMALIDIR. Burada olculen tek sey: hat nereye "
 "kadar cizilmis. "
 "Arama suzgeci Turkce-guvenli ve 9 pozitif vakayla atesli (B9); \"yok\" hukumleri "
 "parantezli adlari da iki anahtarla tarayan havuzdan verildi (9418 ad anahtari)."),

"H-0104": ("cozuldu",
 "EK OKUMA KARTI URETILDI. Kart: sebep-sonuc-ikinci-mesrutiyet-1908. Capa: "
 "olaylar.js:162 t:\"1908-07-23\". Emre DORT sey istedi, dordu de tek kartta "
 "boluml bolum islendi: (a) TELGRAFLA ILAN -- hareket Rumeli'de basladi ve Istanbul'a "
 "once telgrafla ulasti; istibdadi ayakta tutan seylerden biri (merkezin tasrayi "
 "gecikmeyle duymasi) teknik olarak ortadan kalkmisti: ayni hat otuz yil jurnal "
 "tasimisti, simdi ultimatom tasiyordu. (b) KOLAGASI NIYAZI -- Resneli Niyazi Bey ve "
 "Enver Bey'in daga cikisi; hareket ne saray darbesi ne halk ayaklanmasi, TASRADAKI "
 "ORDUNUN ICINDEN teskilatli bir cemiyet eliyle cikti. (c) ITTIHAT VE TERAKKI -- "
 "kurulus (2 Haziran 1889, dort tibbiyeli), 1895 ad degisikligi, Paris-Cenevre, "
 "hucre ve yemin usulu, onde gelen isimler. (d) SEVINC VE KUTLAMALAR -- farkli din "
 "ve milletlerden topluluklarin birlikte kutladigi sahneler; kart bu havanin ne kadar "
 "surdugunu da soruyor (dokuz ay sonra ayni anayasa Istanbul'da silahla tartisilacakti). "
 "\"Nicin tam o yil\" sorusu da cevaplandi: 1908 Reval soylentileri. "
 "Kaynak: TDV ittihat-ve-terakki-cemiyeti + TDV mesrutiyet + TDV makedonya."),

"H-0105": ("cozuldu",
 "EK OKUMA KARTI URETILDI. Kart: teknik-hicaz-demiryolu. Capa: olaylar_ek2.js:101 "
 "t:\"1908-09-01\". Kaynak: TDV hicaz-demiryolu (govde okundu) -- uc amac (askeri/"
 "siyasi/dini), hac yolunun 40-50 gunden 4-5 gune inmesi, BAGIS finansmani (fonun "
 "~1/3'u bagis, 2/3'u pul-harc-maden imtiyazi), 2 Mayis 1900 emri, 1 Eylul 1900 "
 "resmi acilis, 1903 Amman - 1904 Maan - 1905 Hayfa subesi, 1908'de Medine ve "
 "1464 km, 1,05 m dar hat, 43 muhendis (17 Turk 12 Alman), I. Dunya Savasinda askeri "
 "rol, 1916 Serif Huseyin isyani, 10 Ocak 1919 Medine'nin teslimi. Emre'nin \"colde "
 "devrilmis lokomotifler\" imgesi kartin son bolumunde karsilik buluyor ve bir "
 "demiryolunun bu cografyada NICIN ordunun kendisi oldugu aciklaniyor (rayi sokersen "
 "kolordu colde kalir). "
 "🔴 KAPSAM DISI BIRAKILAN: Arabistanli Lawrence filmi ve populer kulturdeki yeri -- "
 "TDV kapsami disi, karta YAZILMADI. Bu yuz istenirse ayri kaynak ve ayri numara "
 "gerekir; kendi basima kapsam acmadim."),

"H-0109": ("cozuldu",
 "EK OKUMA KARTI URETILDI. Kart: teknik-1908-secimleri-ve-meclis. Capa: "
 "olaylar_ek5.js:427 t:\"1908-12-17\". Emre'nin en cok sordugu sey -- \"secme "
 "secilme hakki kimlere aitti, kadinlar koyluler koleler gayrimuslimler fakirler "
 "herkes katilabiliyor muydu\" -- olculebildigi kadariyla cevaplandi (TDV "
 "meclis-i-mebusan govdesi): IKI DERECELI secim (birinci secmenler ikincileri, onlar "
 "mebusu secer); sancak esasi, erkek nufusu 25.000-75.000 olan sancaklardan birer "
 "mebus; secmen icin 25, mebus icin 30 yas; ERKEK secmen esasi -- yani KADINLAR "
 "tamamen disarida; nufus cuzdani sarti ve mukerrer oyun onlenmesi. Dini ayrim yok: "
 "gayrimuslim tebaa surecin icindeydi. Meclisin yetkileri (kanun teklifi, butce, "
 "hukumet denetimi, gensoruyla dusurme -- 1909'da Kibrisli Kamil Pasa hukumeti fiilen "
 "dusuruldu) ve 1909 Kanun-i Esasi tadilati (hukumetin meclise karsi sorumlulugu, "
 "padisahin fesih yetkisinin sinirlanmasi, 53. madde, 10. ve 118. maddeler) yazildi. "
 "BULUNAMADI: toplam mebus sayisi ve etnik/dini dagilim -- meclis-i-mebusan ve "
 "mesrutiyet maddelerinin cekilen govdeleri RAKAM VERMIYOR, karta yazilmadi."),

"H-0110": ("cozuldu",
 "EK OKUMA KARTI URETILDI. Kart: tartisma-otuzbir-mart-1909, kesinlik:\"tartismali\". "
 "Capa: olaylar_ek2.js:97 t:\"1909-04-13\". Emre'nin sorusu (\"mesrutiyete kimler "
 "neden karsi idi\") tek bir gruba indirgenmedi; TDV otuzbir-mart-vakasi govdesinden "
 "DORT AYRI KUME ayristirildi: (1) tasfiye edilen ALAYLI subaylar -- sikayetleri "
 "anayasayla degil kendi gelecekleriyle ilgili; (2) imtiyazini kaybeden eski kadrolar; "
 "(3) SIYASI muhalefet (Ahrar Firkasi ve muhafazakar kesimler) -- bunlar mesrutiyete "
 "degil Ittihat ve Terakki'nin IKTIDARI KULLANMA BICIMINE karsiydi, kart bu ayrimi "
 "ozellikle vurguluyor; (4) dini talep (Dervis Vahdeti, Ittihad-i Muhammedi Cemiyeti). "
 "Fitil: 7 Nisan 1909 Hasan Fehmi cinayeti; 12-13 Nisan gecesi 4. Avci Taburu; "
 "3-4000 isyanci Ayasofya meydaninda, meclisin isgali; Hareket Ordusu 19 Nisan'dan "
 "itibaren, 24 Nisan'da kontrol; 27 Nisan 1909 hal'. "
 "🔴 HUKUM VERILMEDI: II. Abdulhamid'in olaydaki rolu -- kaynaklar keskin ayriliyor; "
 "kart \"bastirilmasindan sonra hal' edildigi KESIN, cikarilmasindaki payi KESIN "
 "DEGIL\" diyerek duruyor."),

"H-0112": ("cozuldu",
 "EK OKUMA KARTI URETILDI. Kart: teknik-bulgaristan-sinirinin-cizilisi. Capa: "
 "kronoloji_sinir_turkiye.js:24 t:\"1909-04-19\" (+ ikinci capa 1885-09-18). "
 "Emre'nin uc sorusu da cevaplandi (TDV bulgaristan govdesi): "
 "(a) SINIR NASIL BELIRLENDI -- uc asama: 1878 Berlin (Ayastefanos'un Buyuk "
 "Bulgaristan'i kuculdu; Tuna-Balkan arasi prenslik + AYRI statulu Dogu Rumeli "
 "vilayeti), 1885 emrivakisi (prenslik Dogu Rumeli'yi katti), 1908-1909 taninma "
 "(5 Ekim 1908 bagimsizlik, 19 Nisan 1909 Istanbul protokolu -- gorusmeler Rumeli "
 "demiryolu ve tazminati da kapsadi; devlet hatlari 42 milyon franklik tazminatla "
 "birakti). "
 "(b) BULGARLAR YOGUN OLDUKLARI HER YERDE KATILABILDI MI -- HAYIR. Ayastefanos "
 "Makedonya'yi da iciyordu, Berlin bunu geri aldi; Bulgar hareketi bundan sonra "
 "otuz bes yil Makedonya'yi hedefledi (komitacilik ve 1903 Ilinden'in arka plani). "
 "Sinirl etnik yogunluk degil BUYUK DEVLETLERIN DENGESI belirledi. "
 "(c) BULGARISTAN'DAKI TURKLER NE OLDU -- 1877-78 savasi sirasinda ve sonrasinda "
 "500.000-600.000 Turk'un oldurulduğu veya goce zorlandigi; Filibe sancaginda Turk "
 "nufusu 1875'te 300.000 iken 1878'de 15.000'e dusmesi; 1893-1902 arasi 72.524 "
 "musluman Turk gocu; 1913'te 115.883 kisinin resmi iskan talebi. "
 "Kaynak: TDV bulgaristan + TDV rumeli-demiryolu + TDV makedonya."),
}

# 🔴 SINAV: BENIM sozlugunu KENDISIYLE dogrulamak hicbir sey kanitlamaz
# (ilk kosuda tam bu oldu: sozlukte 23 anahtar vardi, betik "24/24" dedi
# cunku kendi uzunluguna bakiyordu -- H-0103 sessizce dusmustu).
# Bu yuzden sevkin verdigi liste BURAYA AYRICA yazilir ve karsilastirilir.
SEVK = ("H-0067 H-0070 H-0074 H-0081 H-0082 H-0083 H-0084 H-0085 H-0086 H-0087 "
        "H-0088 H-0089 H-0091 H-0092 H-0094 H-0100 H-0101 H-0102 H-0103 H-0104 "
        "H-0105 H-0109 H-0110 H-0112").split()
assert len(SEVK) == 24, "SEVK listesi 24 degil: %d" % len(SEVK)
eksik_sevk = [n for n in SEVK if n not in BENIM]
fazla = [n for n in BENIM if n not in SEVK]
if eksik_sevk or fazla:
    print("🔴 SEVK ILE UYUSMUYOR — eksik:", eksik_sevk, "· fazla:", fazla)
    sys.exit(1)
print("SEVK SINAVI: 24/24 madde sozlukte var (eksik 0, fazla 0)")

# ---------------------------------------------------------------- yaz
if not os.path.exists(YOL):
    print("🔴 CEVAP.json yok:", YOL); sys.exit(1)

with io.open(YOL, encoding="utf-8") as f:
    d = json.load(f)
d.setdefault("maddeler", {})

onceki = set(d["maddeler"].keys())
benimki = set(BENIM.keys())
baskasinin = onceki - benimki
print("ONCE: %d anahtar (%d baskasinin, %d benim)"
      % (len(onceki), len(baskasinin), len(onceki & benimki)))

yedek = YOL + ".KRONO-0076-B.yedek"
shutil.copy2(YOL, yedek)

for no, (hukum, notu) in BENIM.items():
    d["maddeler"][no] = {"hukum": hukum, "not": notu, "oturum": "KRONO-0076-B"}

d["cevap_tarihi"] = datetime.date.today().isoformat()

with io.open(YOL, "w", encoding="utf-8") as f:
    json.dump(d, f, ensure_ascii=False, indent=1)

# ---------------------------------------------------------------- geri oku
with io.open(YOL, encoding="utf-8") as f:
    g = json.load(f)
sonra = set(g["maddeler"].keys())
kayip = baskasinin - sonra
print("SONRA: %d anahtar" % len(sonra))
print("BASKASININ ANAHTARI KAYBOLDU MU:", "🔴 EVET -> " + str(sorted(kayip)) if kayip else "HAYIR (0)")
eksik = [n for n in SEVK if n not in sonra]          # BENIM degil SEVK'e karsi
print("SEVKIN 24 MADDESI DOSYADA MI:",
      "EVET (%d/24)" % len(SEVK) if not eksik else "🔴 EKSIK -> " + str(eksik))
print("  (beklenen toplam: %d baskasinin + 24 benim = %d · gercek: %d)"
      % (len(baskasinin), len(baskasinin) + 24, len(sonra)))
bozuk = [n for n in BENIM if g["maddeler"][n]["not"] != BENIM[n][1]]
print("NOT METINLERI TAM MI:", "EVET" if not bozuk else "🔴 BOZUK -> " + str(bozuk))
print("yedek:", yedek)
