# EK — İkinci kaynak kampanyası: çift teyit, çelişki, bulunamayan (TOP100-1103)

Tarih: 4 Kasım 2026 · UMIT SALI · Ağaç: `umit-1104-ikinci` (`origin/main` 09c1aa176). **Salt okuma, `data/`ya yazılmadı.**
Ham kanıt: `ikinci-kaynak/sonuc_<parti>.md`. Her satırda kaynak, URL ve ≤15 kelime alıntı var. Ajan brifi `ikinci-kaynak/KAMPANYA-BRIEF.md`.

## 0. Evren ve yöntem
- **Seçim:** 100 devlet dosyasının `b) f/t ve evreler` tablolarındaki 660 satır betikle tarandı (`tek_kaynak.py`).
  - Zaten "çift teyit" olan 33 satır elendi.
  - **194 satır tek kaynaklı** çıktı (`ikinci-kaynak/tek_kaynak_194.tsv`):
    - 127 satırda kaynak 2 boş ya da "tek";
    - 67 satırda iki kaynak da TDV (aynı aile, bağımsız sayılmaz).
  - Bunlardan **125 kritik satır** seçildi: kuruluş 43, yıkılış 53, başkent 12+, antlaşma 7 ve başkent niteliğindeki evreler.
  - Kalan ~69 satır savaş/fetih evresi; bu kampanyaya alınmadı.
  - 6 dosyada tablo madde biçiminde (68–73); taranmadı, el ile bakılmadı.
- **Araştırma:** 5 bölge partisi, sırayla birer Sonnet ajanı (mesai kuralı: tek ajan). Kullanılan kaynaklar:
  - **EI¹** (Encyclopaedia of Islam 1. baskı, 1913-36; archive.org tam metin, yerelde arandı), TDV'den bağımsız;
  - Treccani; Grousset, *Empire of the Steppes*; Banglapedia;
  - Kotobank (Nihon Daihyakka, Sekai Daihyakka, Britannica Kokusai…);
  - Avalon Project, Library of Congress Law Library, history.state.gov, TSHA Handbook of Texas;
  - ADB, germanhistorydocs;
  - Columbia Encyclopedia ve Oxford Research Encyclopedia özet sayfası.
- **Açılmayanlar:**
  - Cambridge History serilerinin archive.org kopyaları ödünç kilitli (401): CHI, CHIr, CHC, CHEIA, CH Africa, Bosworth, Hemming.
  - Iranica ve Britannica 403 verdi.
- **Teyit ölçütü:** çift teyit = ikinci, bağımsız kaynağın **sayfası okunmuş** olmalı. Yalnız arama özetine dayanan bulgu **ADAY (ÖZ)** sayıldı (§3), çift teyite katılmadı. Gün ve yıl teyidi ayrı sayıldı.

| parti | satır | ÇİFT TEYİT (gün) | ÇİFT TEYİT (yalnız yıl) | ÇELİŞKİ | ADAY (ÖZ) | BULUNAMADI / DENENMEDİ | KAPSAM DIŞI |
|---|---|---|---|---|---|---|---|
| A İslâm-batı | 26 | 3 | 20 | 3 | 0 | 0 | 0 |
| B İslâm-doğu | 24 | 3 | 7 | 8 | 0 | 4 | 2 |
| C Doğu Asya | 19 | 1 | 11 | 1 | 0 | 5 | 1 |
| D Avrupa | 35 | 2 | 0 | 1 | 7 | 18 | 5 |
| E Amerika/Afrika/Antik | 21 | 5 | 4 | 3 | 1 | 7 | 1 |
| **toplam** | **125** | **14** | **42** | **16** | **8** | **34** | **9** |

Notlar:
- Satırlar tek sınıfa sayıldı. Toplam 123; artı D'nin 2 Verdun satırı (aşağıda) = 125.
- B #16 (Uygur) hem çift teyit hem çelişkidir (`uygur-kaganligi` 744 ✓, `uygur` 745 ✗); çelişki sayıldı.
- E'deki üç ABD satırı (#6–#8) çift teyit sütunundadır (yerleşim ucu ya da imza günü teyitli). Ama aynı satırların **kronoloji maddesi** `-01-01` ile yanlış; bu ayrı atlas hatası §2a'da.
- D #24/#27 (Verdun) çelişkisi veride **zaten uygulanmış**: `frank` t, `dogu-francia` f ve `bati-francia` f = 0843-08-10. Tabloya bayat girmiş; sayıma katılmadı.

## 1. ÇİFT TEYİT — `ic_not`a "çift teyit" yazılabilir

### 1a. Gün düzeyinde (14)
| parti# | dosya · uç | atlas | 2. kaynak (okundu) | hüküm |
|---|---|---|---|---|
| A9 | 25-hulefa · f (Peygamber'in vefatı / Sakîfe) | 0632-06-08 | Treccani EI «Maometto»: «morto a Medina il lunedì 8 giugno 632» | ✓ gün |
| A16 | 40-fatimi · halifelik (Rakkāde'ye giriş) | f 0909-01-01 | EI¹ «Fatimids»: 29 Rebîülâhir 297 = 15 Ocak 910 (TDV ile aynı) | ✓ gün (910-01-15). Atlas f'nin 909 yılı Aglebî çöküşüdür (EI¹ 296/909 ✓). 909-01-01 günü hiçbir kaynakta yok; f'nin hangi olayı tarihlediği beyan edilmeli |
| A21 | 41-safevi · t (Nâdir'in taç giyişi) | 1736-03-08 | EI¹ «Nadir Shah» (Minorsky): «Thursday, 24th Shawwal 1148» = TDV hicrî günü | ✓ hicrî gün |
| B4 | 26-buyuk-selcuklu · Bağdat | 1055-12-18 | EI¹ «Tughril-Beg»: hutbe 22 Ramazan 447, «three days later» giriş = 25 Ramazan 447 = TDV | ✓ hicrî gün |
| B8 | 29-timurlu · f | 1370-04-09 | EI¹ «Timur Lang» (Barthold): «Ramadan 12, 771 (April 10, 1370)» | ✓ hicrî gün. EI¹'in miladî çevirisi 10 Nisan, TDV 9 Nisan; OCR teyidi gerek |
| B11 | 47-ilhanli · Hülâgû ölümü | künyede yok | EI¹ «Hulagu»: «19th Rabi' II 663 = 8th February 1265» = TDV | ✓ gün. Künyeye madde olarak eklenebilir |
| C18 | 76-edo · Japonya Devleti f (Anayasa yürürlüğü) | 1947-05-03 | Kotobank 日本国憲法 (8 giriş): «翌47年5月3日施行» | ✓ gün |
| D17 | 22-fransiz-somurge · yeni-fransa t (Paris 1763) | 1763-02-10 | Avalon «Treaty of Paris 1763»: «the tenth day of February, 1763» | ✓ gün |
| D23 | 32-almanya · HRE sonu | 1806-08-06 | ADB «Franz II.»: «am 6. Aug. 1806»; feragat metni «datirt Wien den 6. August 1806» | ✓ gün (habsburger.net'teki 16 Ağustos yazım hatası) |
| E4 | 24-abd · Paris 1783 | s 1783-09-03 | Avalon «Definitive Treaty of Peace 1783»: «this third day of September» | ✓ gün |
| E5 | 24-abd · Teksas | s 1845-12-29 | TSHA «Annexation» + history.state.gov «Texas annexation» | ✓ gün. Fiilî devir 1846-02-19 ayrıca beyan edilir |
| E6 | 24-abd · Oregon (yerleşim ucu) | s 1846-06-15 | Avalon br-1846 «fifteenth day of June» + LoC «Signed June 15, 1846» | ✓ gün. Madde günü için bkz. §2 |
| E8 | 24-abd · Webster-Ashburton imzası | — | Avalon br-1842 + LoC «Signed August 9, 1842» | ✓ imza 1842-08-09. Atlas için bkz. §2 |
| E9 | 24-abd · Hawaii | s 1898-08-12 | history.state.gov «Hawaii» + LoC kaydı «August 12, 1898» | ✓ gün |

### 1b. Yalnız yıl düzeyinde (42) — gün teyitsiz kalır
Kural: sınıra bağlı gün `[yalnız yıl teyitli; gün teyitsiz]` notuyla kalır, bağlı değilse `YYYY-01-01`e iner (`teyit_uygula.py --yil-karari`). Kaynak cümleleri sonuç dosyalarında.
- **A (EI¹ / Treccani) — 20 satır:**
  - Osmanlı: Edirne merkez 1362 (±1, EI¹ «Edirne» 763 H); Bursa evresi 1404.
  - Abbâsî: Bağdat 762, 945 ve 1055 (EI¹ «Baghdad», Streck); Bağdat ikinci evre 1152 (EI¹ «Hilla»).
  - Endülüs Emevî: f 756, t 1031; hilâfet 929.
  - Hulefâ: Muâviye 661; Kûfe 661; Ebû Bekir 634; Ömer 644; Osman 656; Ali 661 (Treccani ayrıca Ocak ayını veriyor).
  - Fâtımî: Mehdiye 921 (308 H); Kahire 973 (362 H).
  - Eyyûbî: Halep 1260; Hama 1342 (742 H aralığında); Meyyâfârikîn 1260.
  - Muvahhid: Merakeş başkent 1147 (Şevval 541 = 6 Mart–3 Nisan 1147). TDV'de tarih yoktu; **yeni bilgi**.
- **B (EI¹ / Grousset) — 7 satır:**
  - Büyük Selçuklu: f 1038; Melikşah 1092.
  - İlhanlı: Gazan 1304; Sultâniye 1305. Künyedeki 1304 → **1305 önerilir**; yerleşim zaten 1305.
  - İlhanlı başkent zinciri Merâga → Tebriz → Sultâniye (EI¹ + Grousset). Önceki "Merâga kaynağı yok" notu giderildi.
  - Hârizmşah: f ~1097, t 1231.
- **C (Kotobank) — 11 satır:**
  - Han: Doğu Han 25; Shu-Han 221.
  - Wu Zhou: t 705.
  - Qing: f 1616. ⚠ Britannica Kokusai'ye göre Kore kaynakları kuruluşu 1619'a indiriyor; `ic_not`a beyan edilmeli.
  - Ming: Annam 1407; Ming 1368.
  - Yuan: adı 1271; Dadu 1272.
  - Güney Song: 1127.
  - Sui ardılı Wei: t 618.
  - Jin: başkent 1214.
- **E — 4 satır:**
  - ABD 1818 Sözleşmesi: yıl çift. Gün 1818-10-20 yalnız LoC'de.
  - İnka: t 1572.
  - Bornu'ya geçiş ≈1380.
  - Sokoto düşüşü 1903.

## 2. ÇELİŞKİLER — KASA / Emre kararı

### 2a. Atlas hatası (kaynak açık, düzeltme önerisi)
| parti# | kayıt | atlas | kaynak | öneri |
|---|---|---|---|---|
| E6 | Oregon Antlaşması maddesi (`kronoloji_sinir_amerika.js:59-60`) | 1846-01-01 | Avalon + LoC: imza 15 Haziran 1846 | madde → **1846-06-15**. Yerleşim ucu zaten 06-15; madde 5,5 ay erken duruyor |
| E7 | 1818 Sözleşmesi maddesi (`kronoloji_sinir_amerika.js:41`) | 1818-01-01 | LoC «Signed October 20, 1818» | madde → **1818-10-20**. Pembina ucu zaten 10-20 |
| E8 | Webster-Ashburton maddesi + Keweenaw ucu | madde 1842-01-01 · s 1842-10-04 | Avalon + LoC: imza 9 Ağu 1842; Avalon: onay mübadelesi Londra 15 Eki 1842 (fetch özeti) | madde → **1842-08-09**. `s:` ucu kaynakta yok (ne 08-09 ne mübadele). Ucun neyi tarihlediği beyan edilmeli ya da madde günüyle eşitlenmeli |
| B13 | İlhanlı künye «Sultâniye başkent» | 1304 | EI¹ «Sultaniya»: Olcaytu 705 H'de büyüttü ve başkent yaptı | künye → 1305 |
| B19 | Gazneli t | 1186-01-01 | EI¹ «Ghaznawids»: Hüsrev Melik Pencap'ı «till 583 (1187)» tuttu | ÇELİŞKİ TDV 582/1186 ↔ EI¹ 583/1187. TDV esas, `ic_not`a iki kaynak yazılır. Düzeltme Emre'nin |
| B10 | Doğu Göktürk-2 t / `uygur` f | 745 | Grousset: «Ozmish khagan was killed in 744»; TDV `dokuz-oguzlar` 744; `uygur-kaganligi` künyesi zaten 744 | t/f → **744** önerilir. TDV `turk` 745 der; TDV kendi içinde çelişik. İki künye (`uygur` / `uygur-kaganligi`) mükerrer adayı |
| B9 | Batı Göktürk t | 659 | Grousset: Ho-lu 657'de düştü; 659 Pu-chen'in Çin vasalı olarak atanması | `ic_not`a 657 (son bağımsız Aşina) / 659 (Çin vasallığı) beyanı. Değer kararı Emre'nin |
| E14 | Kanem f | 0800-01-01 | Columbia «9th cent.» | yüzyıl hassasiyeti; 800 sınırda. Beyan yeterli |

### 2b. Kaynaklar arası gün/yıl farkı (beyan, değer TDV'de kalır)
- **A2 Ankara Savaşı / Fetret başlangıcı — 28 Temmuz 1402 (TDV) ↔ 20 Temmuz 1402 (EI¹ «Angora»: 19 Zilhicce 804).**
  - UMIT hesabı (tablo açılmadı, bilgi): 1 Muharrem 805 ≈ 1 Ağustos 1402 Jülyen ⇒ 19 Zilhicce 804 ≈ 21 Temmuz, 28 Temmuz ≈ 27 Zilhicce. Yani fark **hicrî günün kendisinde** (19 / 27 Zilhicce), miladî çeviride değil. Ajanın "EI¹ çevirisi hatalı" yorumu yanlış görünüyor.
  - Batı literatürü 20 Temmuz, Türk literatürü 28 Temmuz der.
  - Öneri: değer 28 Temmuz kalır (TDV esas); `ic_not`a iki kaynak + iki hicrî gün yazılır. Hicrî tablo (NAOJ / Wüstenfeld-Mahler) ile teyit gerek.
- **A18 Mansûriye:** 947 ↔ 948. EI¹ kendi içinde de çelişiyor; TDV de öyle.
- **A20 Safevî şah unvanı:** EI¹ 908 H = 1502 ↔ 1501-12-22 (ikincil). EI¹ eskidir, CHIr 6 okunmalı.
- **A21 ek:** EI¹ «Safawids» 26 Şubat 1737 (iç hata). EI¹'deki III. Abbas'ın ilanı 7 Temmuz 1732 ↔ TDV 7 Eylül 1732; hicrî gün aynı (17 Rebîülevvel 1145). Bu kaba hesapla TDV'nin çevirisi tutarlı.
- **B1 Bengal'de Sûr sonu:** Banglapedia 1563 ↔ TDV 1564.
- **B6 Sencer ölümü / Büyük Selçuklu t:** EI¹ 26 Rebîülevvel 552 = 8 Mayıs 1157 ↔ TDV 14 ya da 24 Rebîülevvel 552 (26 Nisan / 6 Mayıs). Atlas 26 Nisan'ı seçmiş. Yıl çift teyitli; gün için üç okuma `ic_not`a yazılır.
- **B7 Altın Orda kuruluşu — hangi olay?**
  - 1227: Cuci ulusu (EI¹ «Batu»).
  - 1242-43: Volga'ya dönüş (EI¹ = TDV = atlas 1242).
  - ~1253: Saray başkent (Grousset).

  Atlas 1242'yi "dönüş" olarak beyan etmeli.
- **B14 Olcaytu ölümü:** EI¹ Şevval 716 ↔ TDV 27 Ramazan 716; ikisi de Aralık 1316. ⚠ Ajan "künye 1317-01-01 yanlış" dedi. Ama o satır (`devletler.js:2135`) **Ebû Saîd'in cülûsudur**, Olcaytu'nun ölümü değil; cülûs 1317'de olabilir. Hüküm verilmedi, TDV «ebu-said-bahadir-han» ile bakılmalı.
- **B16 Uygur:** bkz. B10.
- **C14 Xia f:** 617 (Dou Jiande'nin Changle Kralı unvanı; atlas uyumlu) ↔ 618 (Xia adı, Sekai Daihyakka). Hangi olayın "f" olacağı karar ister.
- **D31 Breda 1667 / Guyana:** Britannica 31 Temmuz ↔ Canadian Encyclopedia 21 Temmuz. Bu takvim farkı; atlas kuralıyla **1667-07-31**. Atlas künyesi 1667-01-01; Paramaribo'nun fiilî alınışı (1667 başı) ayrı olaydır.
- **E18 Kanem-Bornu t:** ORE «until 1897» (Kanemî hanedanı sonu) ↔ TDV 1902 / 1905. Hangi olay tarihleniyor, ayrılmalı.
- **E19 Sokoto kuruluşu:** Columbia/Britannica 1809 (şehir-başkent) ↔ TDV 1812 (halifelik ilanı). İki ayrı olay; künye beyanı gerekli.

### 2c. KOORDİNATÖR KARARI (EMRELİC 1 KASIM, 4 Kasım 2026) — KASA uygular
Genel kural (CLAUDE.md): İslâm dünyasında TDV esastır, çelişki `ic_not`ta iki kaynağıyla beyan edilir. Öteki bölgelerde bölgenin çekirdek eseri esastır.

| konu | karar |
|---|---|
| Ankara 1402 (A2) | **TDV 28 Temmuz 1402 esas.** EI¹ 20 Temmuz (19 Zilhicce 804) `ic_not`ta hicrî gün farkıyla beyan edilir |
| Altın Orda f (B7) | TDV hangi olayı esas alıyorsa o. TDV belirsizse **1242** (Batu'nun dönüşü ve Saray); 1227 ve 1253 beyan edilir |
| Doğu Göktürk-2 t ve `uygur` f (B10/B16) | **744** (Grousset + TDV «Dokuz Oğuzlar», çift teyit) |
| Batı Göktürk t (B9) · Gazneli t (B19) · Sencer ölümü (B6) · Sokoto f (E19) · Kanem-Bornu t (E18) | **TDV esas**, öteki değer beyan edilir. TDV yıl vermiyorsa iki akademik kaynağın ortak yılı alınır; ortak yıl yoksa mevcut değer kalır + beyan |
| Xia f 617/618 (C14) | Çin, TDV kapsamı dışı. Cambridge History of China / birincil kaynak (Jiu Tangshu) esas; okunamazsa mevcut değer kalır + beyan |

Koordinatörün okuduğu kaynaklar (yeniden istenmez; EI² bu tarayıcıda açılmıyor):
- Iranica «Ardašīr I»: **28 Nisan 224 → çift teyit.** E2 satırı ÇİFT TEYİT (gün) olur.
- Iranica «Esmāʿīl I»: 906-7 H / 1501, gün yok. A20'de 1501 yılı teyitli, EI¹'in 1502'si beyan edilir.

## 3. ADAY (ÖZ) — sayfa okunmadı, çift teyit SAYILMADI (yeniden okunmalı)
- **D1 Roma imp. f (-0026-01-16):** Fasti Praenestini 16 Ocak girdisi (attalus.org çevirisi; arama özeti). Okununca gün çift teyit olur.
- **D12 Río de la Plata f:** Real Cédula, San Ildefonso **1 Ağustos 1776** (Wikisource nakli). Atlas 1776-01-01 yıl başı; akademik teyitle 1776-08-01'e çekilmeli.
- **D18 Saint-Domingue f (Ryswick):** İspanya-Fransa 20 Eylül 1697 (Peace Palace Library). Yıl kesin.
- **D25 Alman Konfederasyonu f:** Bundesakte «8. Juni 1815» (imza 10 Haziran).
- **D30 Hollanda Brezilya t:** Itinerario (Cambridge) «on 26 January 1654».
- **D32/D33 Prusya Krallığı 18 Ocak 1701:** Cambridge bölümü «On 18 January 1701 … crowned».
- **E21 Kerma f:** Met «ca. 2500–2050 B.C.» (Met 429). Yaklaşık.

## 4. BULUNAMADI / DENENMEDİ (34) — gece turu adayları
- **A:** yok.
- **B:**
  - Rey merkez 1042;
  - Hazar f 630/650 (yalnız 626-627 ittifakı bulundu);
  - Çağatay f 1227 (Barthold bağımsızlığı 1269'a koyuyor);
  - Hârizmşah Semerkant başkent 1212.
- **C:**
  - Hangzhou 1129;
  - Güney Song ilk barışı 1141;
  - Jin sonu 1234 (sayfa yarım okundu);
  - Qin t 618;
  - Tayvan devri 1945-10-25 (akademik gün yok, ay Ekim ✓).
- **D (18):**
  - Gwynedd t 1283; Bulgar f 681; Krum ölümü 814 (yalnız yıl PBE'de); Rusya 1917-11-07;
  - Tenochtitlan 1521; Leyes Nuevas 1542; Yeni Granada 1717 (yapı 1717 / 1723 / 1739 iki dönem olmalı); Şili 1541; Küba 1511;
  - Suriye-Lübnan mandası 1920; Fransız Çinhindi 1859;
  - Mozambik 1505; Gine 1879; Makao f 1887 (imza mı yürürlük mü) ve t 1999;
  - Alman Konfederasyonu t 1866; Kap 1652/1795; Kiev 1240-12-06 (Aralık ✓, gün yok).

  D partisinde bu satırların çoğu **hiç denenmedi**; ajan ilk turda DENENMEDİ yerine BULUNAMADI yazdı.
- **E:**
  - Ahameniş-Mısır t -403;
  - Sâsânî f 224-04-28 (yıl ✓, gün yok);
  - Gupta sonrası t 750 (hiçbir kaynakta yok — Later Guptas 750 şüpheli);
  - Yeni Hitit f -1179;
  - Ur III Susa -2111;
  - Ngazargamu 1465;
  - Medâin başkent (denenmedi).
- **68–73 dosyaları** (madde biçimli tablo) bu kampanyaya girmedi.

## 5. Sisam 1912 (koordinatör sorusu)
Takvimi açıkça veren Yunan akademik ya da Oxford kaynağı **bulunamadı**.
- Bulunanlar: naegean-modernhistory.gr (yalnız yıl), samosin.gr (blog: 11-11-1912), Vikipedi (dipnotsuz "11/24 Kasım 1912").
- Koordinatör kararı geçerli: 1912-11-11 kalır, "takvim belirsiz".
- İlk aday: Yunan Genelkurmay army.gr/?p=118893 (açılmadı); Clogg, *A Concise History of Greece*; Cambridge History of the Balkans.

## 6. JSTOR / Oxford Reference / Iranica / Cambridge'de okunacaklar (koordinatöre)

**Iranica** (bu makineden 403):
- «Ardašīr I» (Sâsânî f 224 günü);
- «Esmāʿīl I Ṣafawī» (Safevî f);
- «Saljuqs», «Timurids», «Fatimids».

**Brill EI²:**
- «Abū Bakr», «ʿUmar», «ʿUthmān», «ʿAlī» (ölüm günleri);
- «ʿAbd al-Raḥmān I» ve «ʿAbd al-Raḥmān III» (756 ve 929 günleri);
- «Djaghatayids», «Batu», «Sulṭāniyya»;
- «Anḳara» (Ankara 1402: 19 / 27 Zilhicce).

**Oxford:**
- Oxford Dictionary of Byzantium «Bulgaria», «Asparuch», «Krum»;
- ORE «Kanem and Borno Sultanates» (tam metin);
- Clogg (Sisam).

**Cambridge (Core / kitap):**
- CHIr 5: Bosworth (Selçuklu, Gazneli, Hârizmşah) ve Boyle (İlhanlı);
- CHIr 6: Savory (Safevî 1501);
- CH Egypt 1 (Kahire 973, Mehdiye, Mansûriye);
- CHEIA: Mackerras (Uygur 744/745) ve Golden (Hazar, Batı Göktürk);
- CHC 1: Bielenstein (Guangwu 25);
- CHC 3 (Wu Zhou, Sui sonu rakipleri);
- CHC 5: Tao Jing-shen s. 556–643 (Güney Song);
- CHC 6 (Yuan 1271, Dadu, Jin 1214/1234);
- CHC 7 (Ming 1368, Annam 1407);
- CHC 9 + Crossley, *The Manchus* (Qing 1616/1619);
- CAH 6 (Mısır 404/401);
- CH Latin America 2 (Río de la Plata, Yeni Granada 1739);
- Cambridge Medieval History 4 (Bulgar 681);
- JRS «Octavian in the Senate, January 27 BC»;
- Itinerario makalesi (Brezilya 1654).

**JSTOR / diğer:**
- Bielenstein, BMFEA 26/31/39;
- Classen, «Die Verträge von Verdun und von Coulaines»;
- Marchesi 2013 (Ur-Nammu, Susa);
- Kastritsis, *The Sons of Bayezid* (Fetret / Bursa);
- Hemming, *Conquest of the Incas* s. 396-410;
- Dictionary of Welsh Biography «Dafydd ap Gruffydd».

## 7. Rapor
① **Ne ölçtüm:**
- 660 b) satırından 194 tek kaynaklı; 125 kritik satır araştırıldı.
- **14 gün düzeyinde, 42 yıl düzeyinde çift teyit.**
- 16 çelişkili satır ve 3 ABD madde hatası. §2a'da 8 düzeltme önerisi, §2b'de 13 beyan ve karar konusu.
- 8 aday (yalnız arama özeti), 34 bulunamadı ya da denenmedi, 9 kapsam dışı.
- Verdun çelişkisi veride zaten düzeltilmiş.

② **Ne bulamadım:**
- Cambridge serilerinin tam metinleri (ödünç kilitli), Iranica, Britannica, EI².
- Avrupa partisinin 18 satırının çoğu denenmedi.
- Gün düzeyindeki teyitlerin çoğu İslâm satırlarında hicrî gündür; miladî çeviri tabloyla doğrulanmadı.

③ **Ne istiyorum:**
- KASA §2a'daki üç ABD maddesini ve İlhanlı Sultâniye 1305'i uygulayabilir.
- Emre/koordinatör §2b'deki "hangi olay" kararlarını vermeli: Altın Orda, Sokoto, Kanem t, Xia, Batı Göktürk, Uygur 744.
- 19:00 sonrası (3 ajan) §3 ve §4 için ikinci tur öneriyorum: Avrupa satırlarının okunması (dbe.rah.es, HLS, IEG-Mainz, Encyclopedia of Ukraine doğrudan GET) ve 68–73 dosyaları.

## 8. İkinci tur (4 Kasım 2026 öğleden sonra; R1 · R2 · R3, sırayla tek ajan)

Ham kanıt `ikinci-kaynak/` altında: `sonuc_R1-avrupa2.md`, `sonuc_R2-aday.md`, `sonuc_R3-68-73.md`.
Bu turda arama özeti teyit sayılmadı; sayfanın kendisi açıldı.

### 8a. R1 — Avrupa'nın denenmemiş ve bulunamamış 18 satırı (§4)
- **ÇİFT TEYİT, 6 tam satır:** D4, D7, D8, D15, D22, D35.
  - D13'te yalnız Santiago kuruluşu teyitli; kaptanlığın kuruluşu bulunamadı.
  - D11 ve D29'da yalnız yıl teyitli.
- **ÇELİŞKİ, 4 satır:** D6, D11, D14, D16.
- **ADAY, 4 satır:** D9, D10, D20, D21.
- **BULUNAMADI, 2 satır:** D19, D26.

**Düzeltme önerileri (KASA):**
- **D7 Krum'un ölümü:** Treccani «13 aprile 814» diyor, künyedeki 13 Nisan ile tutuyor. Evren `bizans_balkan.js:26` → `0814-04-13`.
- **D15 Suriye-Lübnan mandası:** Fransızlar 25 Temmuz 1920'de Şam'a girdi (encyclopedia.com «Maysalun»; TDV ile uyumlu). Künyedeki f = `1920-07-01` desteksiz → `1920-07-25`.

**Açık kalanlar:**
- **D16 Saygon:** Treccani 17 Şubat 1859, encyclopedia.com «Indochina» 18 Şubat 1859 diyor. Gün tek akademik kaynakla çözülmüyor; `ic_not`ta iki gün beyanla anılmalı.
- **D11 Yeni Granada:** 1717–1723 arasında başarısız bir ilk kuruluş var, kalıcı kuruluş 1739. Hangi olayın kayda girdiğine karar gerekiyor.
- **D14 Baracoa:** Columbia (encyclopedia.com) «c.1512» diyor, atlas 1511. Yaklaşık değer olduğu beyan edilmeli.

### 8b. R2 — §3'teki 8 aday satır, sayfası okunarak
- **ÇİFT TEYİT, 5 satır:**
  - **D1 Augustus:** gün Fasti Praenestini'deki 16 Ocak kaydından, yıl Cumanum'dan.
  - **D25 Alman Federal Antlaşması:** GHDI «June 8, 1815» diyor; 10 Haziran ayrımını yapmıyor.
  - **D30 Hollanda Brezilyası t:** `1654-01-26`, Wiznitzer, *Jewish Social Studies* 16/2 (1954).
  - **D32 ve D33 Prusya Krallığı:** `1701-01-18`, NDB 5 (Oestreich, 1961) ve DHM.
- **D18 Ryswick:** yıl 1697 çift teyit (Eddins 2022, Cambridge); 20 Eylül günü ADAY kalıyor.
- **ÇELİŞKİ, 1 satır:** E21 Kerma.
  - Honegger 2014 MÖ 2550, kerma.ch MÖ 2450 diyor; ikisi de aynı Cenevre misyonundan.
  - Atlasın −2449'u bu aralığın en geç ucu; beyan önerilir.
- **ADAY, 1 satır:** D12 Río de la Plata.
  - Kraliyet cédula'sının metni 1 Ağustos 1776; akademik sayfa açılamadı.
  - Atlastaki `1776-01-01` her durumda yanlış; öneri `1776-08-01`.

**Atlas içi tutarsızlıklar:**
- **D30 f:** 16 Şubat 1630 Hollanda çıkarmasının ve Olinda'nın günüdür, Recife'nin değil. Recife'nin düşüşü 3 Mart 1630, ama yalnız arama özetinde görüldü.
- **D32/D33:** brandenburg-markgrafligi t = `1701-01-01` ile Prusya Krallığı f = `1701-01-18` arasında 17 günlük açık var.

### 8c. R3 — 68–73 dosyaları (16 uç; b) bölümleri madde listesi, BAS/ANT ucu yok)
- **ÇİFT TEYİT, 9 uç (hepsi yalnız yıl):**
  - 68 Yeni Babil: 626 / 539.
  - 70 Ptolemaios: 323 / 30.
  - 71 Delos Birliği: 478/7 / 404.
  - 71 Atina demokrasisi: 508/7 / 338.
  - 72 Çola KUR: c. 850.
  - Kaynaklar: ağırlıkla OCD; 72 için Sastri *The Cōḻas* ve Devare (ISEAS).
- **ÇELİŞKİ, 1 uç:** 71 İkinci Atina Birliği KUR.
  - OCD (Tuplin) kuruluşu 379/8 diye veriyor.
  - Atlasta künye −0377, kronoloji olayı −0376.
  - Aynı olay için üç değer var; Cawkwell okunmalı.
- **ADAY, 4 uç:**
  - **69 Medya KUR:** OCD 678'i teyit etmiyor, devleti ~612'ye bağlıyor.
  - **69 Medya YIK:** 550/49 yalnız arama özetinde görüldü.
  - **73 Vijayanagara KUR ve YIK:** Talbot (ORE Asian History) yalnız "mid-14th" ve "mid-17th century" diyor.
- **BULUNAMADI, 2 uç:**
  - **72 Çola YIK:** TDV 1273, HCIP V 1279 diyor; Sastri cilt 2'nin OCR'ı bozuk.
  - **71 İkinci Atina Birliği YIK (355).**
- **Gün teyidi yok:**
  - 68 KUR'un 23 Kasım günü yalnız Livius'ta var.
  - 68 YIK'nin 12 Ekim günü için OCD «Babylon» açılmadı.
  - 70 YIK'nin 1 Ağustos günü hiçbir kaynakta çıkmadı.
- **Künye uyarısı:** *Babylonia: A Very Short Introduction* sayfasında yazar Trevor Bryce göründü; künye doğrulanmalı.

### 8d. Toplam (ikinci tur, 42 satır ya da uç)
| | R1 | R2 | R3 | Σ |
|---|---|---|---|---|
| ÇİFT TEYİT (gün/yıl, kısmî dahil) | 6 + 2 kısmî | 5 + 1 yıl | 9 (yıl) | 23 |
| ÇELİŞKİ | 4 | 1 | 1 | 6 |
| ADAY | 4 | 1 | 4 | 9 |
| BULUNAMADI | 2 | 0 | 2 | 4 |
| Σ | 18 | 8 | 16 | 42 |

Kısmî satırlar ÇİFT TEYİT altında sayıldı: R1'de D13 (yalnız Santiago) ve D29 (yalnız yıl), R2'de D18 (yalnız yıl). D11'de de yalnız yıl teyitli, ama satır ÇELİŞKİ altında sayıldı.

**Ayrıca:** EMRELİC'in 4 sorusu `EK-lab-sorular.md`de cevaplandı (Georgia, Florida, Çita, Bratislava/Košice).

## 9. HAVVA JSTOR okuması (§6 listesi; 4 Kasım 2026)

Kaynak dosya: `origin/havva-1104-jstor:denetim/TOP100-1103/EK-jstor-havva.md` (4da9a96bf). Aşağıdaki satırlar UMIT'te o dosyadan okunarak işlendi; alıntılar oradadır.

| Kalem | Önceki hüküm | HAVVA okuması | Yeni hüküm |
|---|---|---|---|
| Uygur Kağanlığı kuruluşu (B10/B16) | §2c koordinatör kararı: 744 | Mackerras, *Central Asiatic Journal* 13/3 (1969), s. 215 + Mackerras, CHEIA (1990), bölüm 12 açılış sayfası: ikisi de 744 | **ÇİFT TEYİT (yıl) 744.** 745'i destekleyen kaynak yok. `uygur` f ve Doğu Göktürk-2 t → 744 önerisi güçlendi |
| Krum'un ölümü (D7) | §8a R1: Treccani 13 Nisan | ODB «Krum» (Hollingsworth): "died … 13 Apr. 814" | **ÇİFT TEYİT (gün) 814-04-13** (Treccani + ODB). Evren `bizans_balkan.js:26` → `0814-04-13` |
| Qing / Sonraki Jin kuruluşu | Kore kaynakları 1619 diyor | Bohnet, *Turning toward Edification* (2020), s. 74: "Later Jin dynasty in 1616" | **Yıl teyidi 1616.** Kore tarihçisi de 1616 diyor, "Kore 1619" iddiası zayıfladı. CHC 9/1 okunmadı |
| Fetret Bursa zinciri (A2) | tek kaynak | Kastritsis 2022 (Oxbow), s. 293–295: İsa→Mehmed 1403, Süleyman'ın alışı "late 1403, or possibly a year later", Mehmed'in geri alışı 1410, Fetret sonu 1413 | **Yıllar teyitli: 1403, 1410, 1413.** `olaylar_ek5.js` 1404-03-01 maddesi **teyitsiz, beyanlı:** "Kastritsis 2022: 1403 sonu ya da 1404 sonu". *Sons of Bayezid* s. 112–113 okunmalı |
| Kanem-Bornu bitişi (E18) | 1897 / 1902 / 1905 ayrımı açık | Kyari Mohammed, *Paideuma* 43 (1997), s. 281–282: Rabih Bornu'yu 1893–1900 arasında fethetti | **Olay tanımlandı, karar okunmadı:** 1893 Kânemî iktidarının kesilişi, 1900 Rabih'in yenilgisi. 1897 (ORE) ve 1902/1905 (TDV) okunmadı |
| Bulgar 681, Kanem kuruluş yüzyılı, EI² ölüm günleri (Ebû Bekir, Ömer, Osman, Ali) | — | Kapalı kaynaklar: ODB tam metni, ORE (403), Brill EI² (403) | **OKUNMADI.** Oxford arama parçalarında 681 geçiyor, teyit sayılmadı |
| Košice 1919 (EK-lab 4b) | gün bulunamadı | Toma 1958 + Boisserie 2020: dönüş günü yok | **Değişmedi:** Çekoslovak dönüşü 4 Temmuz 1919'dan önce başlamamalı |
| Çita 1920 (EK-lab 3) | birincil kaynaklı karar | JSTOR'da gün veren kaynak yok | **Değişmedi:** alınış 1920-10-20, başkentli birleşme 1920-11-09/10 |

**KASA'ya:**
- Krum günü artık iki kaynaklı.
- Uygur 744 artık iki kaynaklı.
- Bursa 1404-03-01'e beyan eklenmeli.
