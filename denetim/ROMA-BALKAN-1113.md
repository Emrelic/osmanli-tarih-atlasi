# ROMA-BALKAN-1113 — eyalet bazlı Roma zincirleri, Balkan turu

Tarih: 13 Kasım 2026 · Dal: `emrelic-1113-roma-balkan` (`emrelic-1113-roma-kibris-misir-yunan` tepesinden) · Ağır araç (tam denetle, renk_olc, denetle_yayin, ceviri) KOŞTURULMADI. Yapılan: kendi doğrulama betiği (çakışma / sıfır uzunluk / kimlik+BOYALAR / ±30 gün madde), `paketle yenile` + `surum_damgala` + `paketle sina` (TAZE). Motor tuzu dosyalarına, tavanlara dokunulmadı; yeni nokta açılmadı.

## 1. Ölçüm (bu worktree; bbox lat 35–48 / lon 13–30; ölçüt: MS 150-01-01'de `s:` kapsamı yok ya da `__BOSLUK__`)
Önce 630 → sonra 551 (−79 yerleşim). Kalanın büyük kısmı bbox'a giren Anadolu, İtalya/Sicilya, MÖ höyük/harabe, ortaçağ yerleşimi (kırılım ölçülmedi).

| Eyalet | Başlangıç (kaynak) | Yerleşim | Madde |
|---|---|---|---|
| Thracia | MS 46 (Tacitus Ann. 12.63, Loeb notu «46 A.D.»; Livius.org «Roman Thrace» 45/46) | 14 | 2 |
| Moesia | MÖ 29 fetih (Cassius Dio 51.23-27, Loeb/Thayer; Moesia Roma hâkimiyeti) → MÖ 27 imp | 18 | 3 |
| Achaea+Epirus | MÖ 27 (Dio 53.12.4 «Greece with Epirus») | 22 | 2 |
| Dalmatia | MÖ 27 (Dio 53.12.4 «Dalmatian district»; TDV Dalmaçya MÖ II. yy / 6-9) | 10 Batı + 3 Doğu | 2+2+1 (476) |
| Pannonia | MS 9 (Dio 56.16, A.D. 9; TDV Macaristan «I. yüzyıl») | 12 | 2 |
Toplam 79 yerleşim, 14 yeni madde (`data/kronoloji_sinir_antik_roma.js`; yalnız Türkçe, Emre kararı).

Zincir: roma-cumhuriyeti/roma-imp (künye sınırları) → 395-01-17. Doğu payı (Thracia, Moesia, Achaea, Dalmatia-Doğu): bizans 395 → mevcut ilk dilime kadar UZATILDI (beyanlı; Slav/Avar/Bulgar/Frank/Sırp evreleri okunmadı; KASA kararı). Dalmatia Batı: bati-roma 395→476-09-04 (TDV «Balkanlar»: Hırvatistan/Slovenya Batı'ya) → beyanlı `__BOSLUK__`. Pannonia: 395'te beyanlı `__BOSLUK__` (TDV Macaristan: IV. yy sonu Roma idaresi bitti). Pleiades (toplu JSON) her dilimin `kaynak:`ında varlık tanığı (≤3 km). Abi merkez iddiası yazılmadı: eyalet başkenti için kaynak okunmadı (zincir eyalet geneli, BEYANLI YAKLAŞIKLIK).

## 2. Yazılmayanlar ve nedeni
- **Dacia (MS 106)**: TDV «Romanya» 106'yı verir; 271/275 terk yılı için tarihli kaynak yok (Eutropius 9.15 yıl vermez; Livius yalnız «Aurelian 270-275») ⇒ yazılmadı (Napoca/Apulum/Drobeta vb.).
- **Moesia 86 Superior/Inferior bölünmesi** ve 15 CE Moesia eyalet ilanı: yalnız Livius.org (birincil yazar yok) ⇒ yazılmadı (künye zaten değişmez). Dio Moesia'yı «boyun eğdirme» olarak anlatır, eyalet ilanını değil (beyanlı).
- **Achaea MÖ 146 / Epirus MÖ 167**: Pausanias 7.16.10 metni alınamadı, eyalet kuruluşu bilimsel olarak tartışmalı; zincir MÖ 27'den. Thessalia (Larissa, Tırhala, Golos, Alasonya, İzdin), Kiklad/Sporad/İyon adaları, Anabolu, Karistos, Draç, Berat, Avlonya, Kesriye, İştip: eyalet aidiyeti belirsiz ⇒ atlandı.
- **Sofya, Köstendil, İhtiman** (Serdica/Pautalia/Helice: Moesia Sup./Thracia sınırı), Burgaz, Ferecik: eyalet belirsiz; **Aquileia, Ljubljana, Pula, Trieste, İtalya, Sicilya, Malta**: Balkan dışı/İtalya eyaleti; Peşte (Contra Aquincum, Barbaricum); Zigetvar, Varasd, Orsova, Mehádia, Haram, Pirot, Prizren (Pleiades eşleşmesi zayıf/eyalet belirsiz); ilk dilimi >1300 ya da `kur:`lu kayıtlar (Vostitsa, Kalavrita-kasaba, Banaluka, İlbasan, Ilok, Tuzla vb.).
- Tüm 79 kaydın `bit`/ilk dilimi ≤1300; boş `s:`li 14 kaydın zinciri `bit` (1281) ucunda biter (ucun ±30 gününde madde yok — mevcut kayıt sınırı; önceki turlardaki Mısır `s:`siz kayıtlarla aynı kalıp).

## 3. Ölçülemedi / uyarı
1. Tam `denetle.py` (Değişmez 2/3/8), çeviri eşitliği ölçülmedi; 14 madde yalnız Türkçe ⇒ `ceviri.py` tavanı kapıda yükselebilir.
2. Livius.org: «birincil yazar şart» kuralına uyuldu — Thracia'da Livius yalnız ikinci kaynaktır (birincil: Tacitus 12.63'ün Loeb editör notu, yıl notu); Moesia'da Livius yazılmadı.
3. Thracia 46, Pannonia 9 ve Moesia −0028 yalnız yıl teyitli (gün teyitsiz); Pannonia MS 9 = isyan sonu (asgari yıl), eyalet kuruluş yılı kaynaklı değil (BEYANLI).
4. Bizans uzatması (395→mevcut ilk dilim) tarihsel olarak iddialı (örn. Filibe 395→1281); KASA talimatıyla beyanlı.

## 3b. REVİZYON (KASA kararı): kıyı/Yunan çekirdeği Bizans uzatması KALDI, iç Balkan beyanlı BOŞLUK
Kıyı/çekirdek (40, uzatma kaldı): Achaea+Epirus 22 (hepsi Yunan çekirdeği), Thracia 12 (Edirne, Dimetoka, Havsa, Babaeski, Lüleburgaz, Çorlu, Silivri, Vize, Enez, Mustafapaşa, İğneada, Ahtapolu: güney Trakya/Marmara/Karadeniz kıyısı; Edirne için TDV 813 Krum alışı beyan), Moesia kıyısı 4 (Varna, Köstence, Mangalya, Balçık), Dalmatia-Doğu kıyısı 2 (İşkodra, Leş).
İç (17, BOŞLUK'a çevrildi; kesim yılı kaynaklı): 547 (TDV Sırbistan, ilk Slav akınları — kayıp yılı değil, BEYANLI): Niş, Belgrad, Vidin, Semendire, Ćuprija, Kurşunlu, Ürküp, Üsküp, Doclea · 681 (TDV Bulgaristan, Slav-Bulgar Devleti): Silistre, Tutrakan, Hırsova, Tulça, Maçin, Lofça · 831 (TDV Bulgaristan, Malamir Filibe'yi aldı; Eski Zağra Filibe'den devralındı): Filibe, Eski Zağra. Formül: «BOŞLUK BEYANI (arandı, bulunamadı)». 3 yeni madde (547, 681, 831; Değişmez 2). Pannonia (12) ve Dalmatia-Batı (10) zaten BOŞLUK.
Ayırt edilemeyen: kıyı/iç sınırı koordinat+bölge ile verildi; Pleiades/DARE kıyıya uzaklık ölçülmedi; TDV 971 (Trakya+Kuzey Bulgaristan) ve 1018 (tüm Bulgar toprakları) Bizans dönüşleri şehre özgü olmadığından yazılmadı. Dacia: kaynaksız terk yılı, yazılmadı. Toplam madde 17.

## 3c. REVİZYON-2 (KASA): şehir bazlı TDV el değişimi (Edirne, Dimetoka)
Edirne: TDV Bulgaristan «Edirne (813) alındı» → bizans 395→813, sonra beyanlı BOŞLUK 813→1000 (birinci-bulgar kimliği BOYALAR'da var ama Bulgar diliminin bitişi yazılamadı: TDV Edirne Bizans dönüşünü yılsız verir, «zaptı 914» zapteden adsız; 971/1018 bölge düzeyi, şehre bağlanmadı). Dimetoka: TDV «Dimetoka» 813 Krum; 1230-1246 Bulgar (mevcut ilk dilim 1230) → aynı kalıp, BOŞLUK 813→1230. 1 yeni madde (813, Değişmez 2; toplam 18).
Bulunamadı (TDV şehir/bölge maddesinde yıllı Bulgar-Bizans el değişimi yok, kıyıda Bizans uzatması KALDI): Lüleburgaz (yalnız yılsız «Bulgar Kralı Aleksandr geri aldı»), Çorlu, Silivri, Enez, Vize, Havsa, Babaeski, Mustafapaşa, İğneada, Ahtapolu (TDV'de ayrı madde yok/yılsız); Burgaz maddesi yok; Kırklareli yalnız yılsız Bulgar akınları. Tekirdağ/Gelibolu/Yanbolu/Sozopol bu turun yerleşimi değil (Gelibolu TDV: 1235 İznik geri aldı — ayrı iş).

## 4. Karar soruları
1. Bizans'ın 395→1000/1281 sürekli uzatması (Slav/Bulgar 681/Frank 1204 atlanıyor) kabul mü, yoksa Pannonia gibi beyanlı boşluk mu?
2. Dacia için Aurelianus yılı (271 vs 275) kabul edilebilir bir akademik kaynak (Brill's New Pauly / CAH XII) tam metin erişimi olan makinede yazılsın mı?
3. Moesia/Thessalia/Kiklad için Pleiades ve Dio ötesinde Mócsy / Wilkes / Barrington erişimi olan makinede devam edilsin mi?
