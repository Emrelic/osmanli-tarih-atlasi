# LAB-RUSYA-KAYNAK-1001 — altı Rusya gününün kaynak erişim denemesi

- Tarih: 2026-10-01
- Makine: EMRE (makine adı `Emre`), oturum adı "LAB bilgisayarı irtibat noktası oturumu"
- Yöntem: Sayfalar `curl` ile ham hâlde indirildi. HTML'den etiketler temizlendi, PDF'ler `pdftotext` ile metne çevrildi. Cümleler bu metinlerden `grep` ile birebir çıkarıldı. Arama motoru özetleri ve model metni **kaynak olarak kullanılmadı**. Arama motoru yalnızca makale URL'lerini bulmak için kullanıldı.
- Doğrudan açılmayan kaynaklarda aynı URL'nin Wayback Machine (web.archive.org) kopyası okundu. Bu durum ilgili satırda ayrıca belirtildi.

## Özet

| # | Olay | Atlas günü | Kaynak | Erişim (bu IP) | Kaynak günü veriyor mu? |
|---|---|---|---|---|---|
| 16 | Vedroşa | 1500-07-14 | encyclopedia.mil.ru | Doğrudan: **bağlantı yok** (TCP zaman aşımı, 443 ve 80) · Wayback 2021-12-01: 200 | **EVET**: 14 июля 1500 |
| 31 | Tambov | 1636-04-17 | old.bigenc.ru/geography/text/4180917 | Doğrudan: **301 → bigenc.ru**. Ayrıca `-L` ile → bre.ruwiki.ru **401** · Wayback 2023-01-23: 200 | **EVET, çift tarihli**: 17(27).4.1636 ⚠️ |
| 41 | Nijneudinsk | 1648-10-14 | lib38.ru, pribaikal.ru | ikisi de **200** | **EVET**: 14 октября 1648 ⚠️ |
| 65 | Çelyabinsk | 1736-09-13 | natu.susu.ru | **200** | **EVET**: 13 сентября (yıl 1736, önceki cümlede) ⚠️ |
| 80 | Türkistan | 1864-06-12 | bilig.yesevi.edu.tr | **200** (PDF) | **EVET**: 12 Haziran 1864 |
| 81 | Çimkent | 1864-09-22 | dergipark.org.tr (+ bilig) | **200** (PDF) | **EVET**: 22 Eylül 1864 / 22nd September 1864 |

Sonuç: 6 kaynağın 4'ü bu IP'den doğrudan açıldı. 2'si yalnızca arşiv kopyasından okunabildi. 6 olayın 6'sında kaynak gün bilgisi veriyor ve 6'sı da atlas günüyle aynı. ⚠️ Ancak 3 olayda takvim (Jülyen/Gregoryen) sorusu açık; ayrıntısı aşağıda.

## Ayrıntı ve birebir cümleler

### #16 Vedroşa (1500-07-14)
- URL: https://encyclopedia.mil.ru/encyclopedia/history/more.htm?id=12305235@cmsArticle
- Doğrudan erişim: `Failed to connect to encyclopedia.mil.ru port 443 after 21044 ms`. Port 80'de de aynı hata alındı. HTTP kodu alınamadı, bağlantı TCP düzeyinde kurulamıyor. Muhtemelen yurt dışı IP engeli var, ancak bu ölçülemedi.
- Okunan kopya: https://web.archive.org/web/20211201010621/https://encyclopedia.mil.ru/encyclopedia/history/more.htm?id=12305235@cmsArticle (sayfa başlığı: "Забытая победа на Ведроши : Министерство обороны Российской Федерации")
- Birebir: «Сражение началось во вторник 14 июля 1500 года.»
- Makale, iddiası için [1] Разин Е.А. (1994, s. 322) ve Борисов Н.С. «Иван III» (2006, s. 489) kaynaklarını gösteriyor.

### #31 Tambov (1636-04-17)
- URL: https://old.bigenc.ru/geography/text/4180917
- Doğrudan erişim: `301 → https://bigenc.ru/`. Eski adres artık makaleye değil, sitenin ana sayfasına yönlendiriyor. Yönlendirme zinciri takip edildiğinde `401` (bre.ruwiki.ru) alınıyor.
- Okunan kopya: https://web.archive.org/web/20230123190536/https://old.bigenc.ru/geography/text/4180917 (başlık: "ТАМБОВ • Большая российская энциклопедия - электронная версия")
- Birebir: «Заложен 17(27).4.1636 как город-крепость воеводой Р. Ф. Боборыкиным (sayfada yumuşak tirelerle hecelenmiş; burada tireler kaldırıldı) по указу царя Михаила Фёдоровича…»
- ⚠️ BRE iki tarih veriyor: **17 Nisan eski stil (Jülyen)** ve **27 Nisan yeni stil (Gregoryen)**. Atlastaki 1636-04-17 Jülyen tarih. Atlasın tarih ekseni Gregoryen ise doğru gün 1636-04-27 olur (10 gün fark).

### #41 Nijneudinsk (1648-10-14)
- https://lib38.ru/sobytiya/novosti/zdes_rodiny_moej_nachalo._nizhneudinsk/ (200)
  - Birebir: «Нижнеудинск основан русскими казаками как «государево зимовье» 14 октября (в Покров день) 1648 года.»
- https://www.pribaikal.ru/towns-districts/nizhneudinsk-gorod/obshchie-svedenija/nizhneudinsk-istorija.html (200)
  - Birebir: «Нижнеудинск основан русскими казаками как «государево зимовье» 14 октября (в Покров день) 1648 г. на возвышенном правом берегу реки Уды.»
- ⚠️ İki sayfadaki cümle neredeyse aynı. Bunlar birbirinden bağımsız iki kaynak değil, aynı metnin iki kopyası; tek kaynak sayılmalı.
- ⚠️ Takvim çelişkisi (benim akıl yürütmem, sayfada yazmıyor): Pokrov bayramı Jülyen takviminde 1 Ekim'dir. 1648'de bu gün Gregoryen 11 Ekim'e denk gelir. "14 Ekim" ise Pokrov'un 1900-2099 arasındaki Gregoryen karşılığıdır. Yani "14 октября (в Покров день)" ifadesi muhtemelen 20. yüzyıl dönüşümünün 1648'e geriye taşınmış hâli. Gün "Pokrov" bilgisinden türetilmişse: Jülyen 1648-10-01 = Gregoryen 1648-10-11 olur. Bu çıkarımın arşiv belgesiyle doğrulanması gerekir.

### #65 Çelyabinsk (1736-09-13)
- URL: https://natu.susu.ru/урал-индустриальный/крепости/челябинская-крепость/ (200)
- Birebir: «В 1736 году на месте урочища Селябэ была заложена Челябинская крепость. … 13 сентября полковник А. И. Тевкелев (Тевкелев Кутлу-Мухаммед) писал: «в урочище Челяби от Миясской крепости в тридцати верстах заложил город».»
- Gün veriliyor. Yıl ise ayrı bir cümlede, bağlamdan geliyor.
- ⚠️ Sayfada takvim belirtilmemiş. Bu tarih bir 1736 tarihli Rus mektubundan alındığı için ham hâliyle Jülyen olmalı. Ancak yaygın kullanımda "2(13) сентября" çift tarihi geçiyor, yani 13 Eylül Gregoryen karşılık olarak da kullanılıyor. Bu kaynak hangisi olduğunu söylemiyor: **ölçülemedi**.

### #80 Türkistan (1864-06-12)
- URL: https://bilig.yesevi.edu.tr/yonetim/icerik/makaleler/6980-published.pdf (200)
- Künye: Ebubekir Güngör, "Türkistan Askerî Valiliğinin Kurulması ve Sınırlarının Belirlenmesi (Yedi Adet Harita ile Birlikte)", *bilig* 106 (Yaz 2023), 77-107.
- Birebir: «…1864'te aynı anda harekete geçmeleri ile başlatılan işgal saldırıları sonucu Evliyata (4 Haziran 1864), Türkistan (12 Haziran 1864), Çimkent (22 Eylül 1864) ilhak edilmiştir (Halfin 104).»
- Dayanak: Halfin, H. A. *Politika Rossii v Sredney Azii (1857-1868)*. Moskva, 1960, s. 104. Makale takvimi belirtmiyor (19. yüzyıl Rus kaynaklarında Jülyen ile Gregoryen arasında 12 gün fark var). **ölçülemedi**

### #81 Çimkent (1864-09-22)
- Aynı bilig makalesi (yukarıdaki cümle): «Çimkent (22 Eylül 1864)»
- URL: https://dergipark.org.tr/tr/download/article-file/2438460 (200)
- Künye: Zebiniso Kamalova, "The Strategic Importance of Tashkent in 19th Century", *MANAS Sosyal Araştırmalar Dergisi* 11/4 (2022).
- Birebir: «…the Russians who made hay of the situation attacked Shymkent on 3rd September 1864 and occupied the city on 22nd September 1864 (Muşrif, 1995, p. 74; Ziyoyev, 1998, p. 140; Koç, 2015, p. 40).»
- Not: dergipark'tan indirilen diğer iki makalede (117875 ve 1423481) Çimkent için yalnızca yıl ya da ay geçiyor ("1864'te Çimkent'i işgal ettiler", "Temmuz 1864'te Çimkent'e doğru"). Gün yok.

## Bulamadıklarım
- mil.ru'nun canlı sayfası: bu IP'den TCP bağlantısı kurulamıyor. Yalnızca 2021 arşiv kopyası okundu.
- bigenc'in canlı makalesi: eski adres ana sayfaya yönleniyor, yeni bre.ruwiki.ru 401 veriyor. Yalnızca 2023 arşiv kopyası okundu. Yeni bigenc.ru'daki karşılık URL aranmadı.
- #65, #80 ve #81 için kaynakların hangi takvimi kullandığı: **ölçülemedi**.
- #41'in iki kaynağı arasında bağımsızlık yok. Birincil belgeye (arşiv kaydı veya yazışma) ulaşılamadı.

## KOORDİNATÖR HÜKMÜ (1 Ekim 2026, YILDIRIM BAYEZIT) ve takvim kapanışı

Atlasın tarih ekseni **JÜLYEN**dir: `VERI-YAPISI.md` satır 60-92 «Bu atlasın tarihleri JÜLYEN'dir. ÇEVİRME YAPILMAZ.» (LAB bu satırları origin/main 1c9f8306'da okudu.) Yukarıdaki #31 maddesinde geçen "eksen Gregoryen ise 1636-04-27" şartı bu yüzden **gerçekleşmiyor**.

```
#31  takvim sorusu KAPANDI — eksen JÜLYEN (VERI-YAPISI.md 60-92).
     BRE 17(27).4.1636 · atlas 1636-04-17 = Jülyen kolu ⇒ DOĞRU.
#65 · #80 · #81  takvim ÖLÇÜLEMEDİ olarak KALIR — kaynaklar takvimi
     beyan etmiyor; "ölçülemedi" doğru hükümdür, tahmin yazılmaz.
#41  Pokrov çıkarımı AÇIK KALIR — çıkarım LAB'ın, kaynağın değil (§4:
     çıkarım halka almaz). Birincil belge bulunursa yeniden açılır.
```

### Ek (LAB ölçümü): #16 Vedroşa'da kaynak JÜLYEN veriyor (haftagünü sınavı)
Kaynak «во вторник 14 июля 1500 года» diyor, yani günün salı olduğunu yazıyor. Hesap (Jülyen gün sayısı mod 7):
```
14 Temmuz 1500  Jülyen'de     SALI       ✓ kaynağın dediği gün
14 Temmuz 1500  Gregoryen'de  CUMARTESİ  ✗
```
⇒ mil.ru maddesi Jülyen tarih veriyor ve atlastaki 1500-07-14 Jülyen kolu ⇒ **DOĞRU**. Bu, `VERI-YAPISI.md`deki haftagünü yöntemiyle elde edildi.
