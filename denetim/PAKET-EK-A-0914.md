# PAKET-EK-A · 14 Eylül 2026 — Kasr-ı Şirin ve Rus tarih yazımında Kırım (ek okuma)

Koordinatör: 1.MURAT · kutu `parti-emrelic-0050` · H-0005 + H-0001
Açılış: tahta **M-3892** (geri okundu, `tahta.json`da var)
Teslim: tahta **M-3926** (geri okundu: `tahta.json` · commit `497e78a` · `origin/main`)
⚠️ İlk teslim denemesi **kayboldu** (§7.1⑤b): push `cannot lock ref` ile reddedildi, araç "M-3924 COMMIT EDİLMEDİ" dedi. Geri okumada M-3924 **PAKET-SINIF2**'ye ait çıktı; `PAKET-EK-A TESLIM` metni 0 kez geçiyordu. Mesaj yeniden yazıldı (M-3926), bu kez üç yerde de doğrulandı.

## ① NE YAPILDI — sayıyla

| Dosya | window adı | Kart | Bağ | Tür dağılımı |
|---|---|---|---|---|
| `data/ekokuma_kasrisirin.js` (YENİ) | `EKOKUMA_KASRISIRIN` | **5** | 16 | sebep-sonuc 2 · antlasma 2 · tartisma 1 |
| `data/ekokuma_kirimrus.js` (YENİ) | `EKOKUMA_KIRIMRUS` | **5** | 18 | tartisma 5 |
| **Toplam** | | **10** | **34** | |

Ad deseni `/^EKOKUMA(_[A-Z0-9]+)?$/` ikisinde de tutuyor (ölçüldü). Mükerrer id 0.

### Kasr-ı Şirin kartları
1. `sebep-sonuc-kasrisirin-arka-plan`: Bağdat'ın kaybı (1623-24), Hâfız Ahmed Paşa (1626) ve Husrev Paşa (1630) kuşatmaları, Revan 1635/1636, Bağdat 1638
2. `antlasma-kasrisirin-1639-muzakere`: Zühâb görüşmeleri, 14-17 Mayıs 1639 imza, Temmuz 1639'da İstanbul'a götürülüş, Kasım 1639 sonunda tasdik
3. `antlasma-kasrisirin-1639-sinir`: Irâk-ı Arab (Bağdat · Basra · Şehrizor) Osmanlıya, Revan Safevîye kaldı; Kars · Ahıska · Van güvenceye alındı; Basra körfezi tanındı. Tek tek kaleler için okura **"kaynaklar ayrışır"** deniyor.
4. `sebep-sonuc-kasrisirin-kalicilik`: 1746 Kerden · 1823/1847 Erzurum · ipek ticareti · 1843-1914 karma komisyonlar
5. `tartisma-kasrisirin-tarih-yazimi`: "kurucu belge mi, kurucu efsane mi" (TDV'ye karşı Ateş 2019)

### Kırım kartları
1. `tartisma-kirimrus-moskova-akinlari`: 1502 kırılması, I. Mehmed Giray, 1552/1556, 1571 yangını, 1572 Molodi, Fisher/Lemercier ile Ocakli arasındaki tartışma, Belgorod hattı
2. `tartisma-kirimrus-pominki-harac`: pominki / upominki / tıyış / ulug hazine / vergü terimleri, 1649 hazinesi, 1700'e kadar süren ödeme
3. `tartisma-kirimrus-esir-ticareti`: esir ihracı, 1575'te 35.000 kişi (EoU), fidye, 1648 ve 1654 esir şartları, Williams'ın Nogay ayrımı
4. `tartisma-kirimrus-carlik-sovyet`: "Tatar boyunduruğu", 1783'te İskit ve Grek meşrulaştırması, Nadinskii 1951, 1944 sürgünü, Holobuc'kyj
5. `tartisma-kirimrus-ukrayna-kirimtatar-turk`: Solov'ev ile Kostomarov, muhalifler, yerli halk tezi, İnalcık/TDV çizgisi, yeni araştırmalar

## ② DENETİM SONUÇLARI

```
node --check                              ikisi de OK
node denetim/ARAC-A2-BAG-0913.js --hepsi   öz-sınav 7/7 · BAĞ 602/602 · HATA 0 · UYARI 146 · exit 0
   ⇒ araç yeni dosyaları GÖRÜYOR: havuz globu /^(ekokuma|merak|gorsel_madde).*\.js$/,
     çıktıda 10 kimliğin 10'u da listelendi (satır 182-196)
   ⇒ yeni bağların hatası 0; uyarı 5, hepsi aynı satır:
     "1639-05-17|Kasr-ı Şirin" 2 maddeye düşüyor:
        olaylar.js "Kasr-ı Şirin Antlaşması" ‖ kronoloji_iran.js "… — kalıcı sınır"
     AYNI OLAY. Kartın iki maddede de görünmesi İSTENEN davranış.
     İzin listesine eklemek aracın sahibinin işi (bu oturum araca yazmadı).
bağımsız sınama (scratchpad/bagsina_ekA.js, _ekBagEslesir kopyası + 5'lik öz-sınav)
   öz-sınav 5/5 · BAĞ 34/34 tuttu · eşleşmesiz 0 · çok maddeli 5 (yukarıdakilerin aynısı)
node denetim/ARAC-A2-KOPYA-0913.js (ic_not ayıklanmış taslak, TDV gövdeleriyle)
   🔴 kopya şüphesi 0 · en uzun ortak dizi ≤ 7 kelime
   ⚪ ölçülemedi 1: tartisma-kirimrus-carlik-sovyet (TDV slug'ı yok; kaynakları İngilizce)
   ② kaynakta geçmeyen sayılar, elle bakıldı, hepsi açıklanıyor:
      1843 (Ateş özeti) · 1630 (Ocakli "1635") · 1640/1480 (Ocakli · Ugra) · 1575/35.000 (EoU)
```
⚠️ **Çeviri yakınlığı n-gram ile ölçülemez.** İngilizce kaynaklara dayanan cümleler yeniden kuruldu. 15 kelimeden uzun alıntı yok; en uzun doğrudan aktarım "yağma yuvası" (Nadinskii, Williams'tan, 2 kelime).

**İç not kuralı:** "doğrulanamadı · OKUNMADI · ⚠ · bulunamadı" izleri okur alanlarında (metin · kisa · not · bag · ad) **0** (bagsina_ekA.js taradı). Hepsi `ic_not`ta duruyor. İki yorum köprüsü okur metninden çıkarıldı:
- "Nadinskii'nin kitabının 1944'ten hemen sonra yazılması tesadüf değildir": nedensellik kurduğu için yan yana koyma diline çevrildi
- pominki notundaki "boyunduruğun 1480'de bittiğini kabul etmek": Ocakli bu bağı kurmuyor, çıkarıldı

## ③ PAKET-UI3 İÇİN İKİ SATIR (bu oturum js/ ve index.html'e YAZMADI)

**`js/app.js` → `_EKOKUMA_DOSYA_ADLARI`** (ekokuma_celali satırının altına):
```js
  "ekokuma_kasrisirin", // window.EKOKUMA_KASRISIRIN — Kasr-ı Şirin 1639, 5 kart (0050/H-0005)
  "ekokuma_kirimrus",   // window.EKOKUMA_KIRIMRUS — Rus/Ukrayna/Kırım Tatar tarih yazımında Kırım, 5 kart (0050/H-0001)
```
**`index.html`:** ölçüldü, **satır GEREKMİYOR.** `index.html`de hiçbir `ekokuma*` dosyası `<script src>` ile bağlı değil (`grep -n ekokuma index.html` yalnız yorum ve DOM satırı veriyor). Ek okuma dosyaları `_EKOKUMA_DOSYA_ADLARI` üzerinden tembel yükleyiciyle geliyor. Yine de script etiketiyle bağlamak istenirse biçim şu olur:
```html
<script src="data/ekokuma_kasrisirin.js?v=rNNNN"></script>
<script src="data/ekokuma_kirimrus.js?v=rNNNN"></script>
```
⚠️ Liste satırı eklenene kadar kartlar ekranda **görünmez** (D099). Tarayıcıda görsel doğrulama bu yüzden yapılmadı.

## ④ KAYNAKLAR — okunan, ölü, erişilemeyen, OKUNMAYAN

**TDV, 200 döndü ve gövdesi okundu:** kasrisirin-antlasmasi · murad-iv · kemankes-mustafa-pasa · hafiz-ahmed-pasa · safeviler · iran · erzurum · bagdat · kirim · devlet-giray (İnalcık) · giray · rusya · tatarlar · kazan-hanligi · esir (Kırım bölümü çıkmadı)
**TDV, 302 döndü (ÖLÜ):** kasr-i-sirin · kasrisirin · kasr-i-sirin-antlasmasi · zuhab · zohab · zohab-antlasmasi · erzurum-antlasmasi · kerden · kerden-antlasmasi · nadir-sah · mihriban · osmanli-iran-antlasmalari · kemankes-kara-mustafa-pasa · ahmed-pasa-kemankes · kirim-hanligi · kirim-tatarlari · devlet-giray-i · molodi · moskova · altin-orda · sahib-giray-i · mengli-giray-i · muhammed-giray-i
📌 Doğru slug **`kasrisirin-antlasmasi`**. Tahmin edilen dört slug öldü; slug TDV aramasıyla bulundu (§4 "önce ARA").

**Akademik, tam metin okundu:**
- Sait Ocakli, doktora tezi, Univ. of Toronto 2017 (331 s., pypdf ile çıkarıldı)
- Brian Glyn Williams, "The Ethnogenesis of the Crimean Tatars", *JRAS* 3. seri 11/3 (2001) 329-348
- Johannes Remy, "Russia and Crimea: Heroism and ethnic cleansing", *Baltic Rim Economies* 1/2019 (Turku Üniv.)
- Encyclopedia of Ukraine: "Tatars" (Zhdan · Zhukovsky) · "Crimean Tatars" · "Crimean Khanate"
- Arpacı ile İskender, *bilig* 115 (2025): yalnız tıyış defterleri dipnotu kullanıldı

**Yalnız özeti okundu:** Sabri Ateş, "Treaty of Zohab, 1639", *Iranian Studies* 52 (2019). Kartta "makale özeti" diye açıkça yazıyor.

**Erişilemedi (403):** Encyclopaedia Iranica (boundaries-iii · qasr-e-sirin · zohab) · Britannica (iki madde) · academia.edu "Belated Consummation of the Peace of Zuhab" · HURI Harvard. Ateş'in tam metni (Cambridge / T&F) yalnız giriş duvarı döndü.

**Şartnamede önerilen ama OKUNMADI, kaynak diye KONMADI:** B. G. Williams *The Crimean Tatars* (kitap) · A. Fisher *The Crimean Tatars* · M. Khodarkovsky *Russia's Steppe Frontier* · B. Davies *Warfare, State and Society…*. Fisher'e ve Davies'e yalnız Ocakli'nin ve TDV'nin aktarımıyla değinildi, metinde de öyle yazıyor. Khodarkovsky'nin "150-200 bin esir" rakamı yalnız bir arama özetinde görüldüğü için **yazılmadı**.

## ⑤ BULUNAMAYANLAR

- **Madde yok, bağ kurulamadı:** 1624-1626 Hâfız Ahmed Paşa Bağdat kuşatması · 1630 Husrev Paşa kuşatması · 1823 I. Erzurum Antlaşması (1818-1825 tarandı) · 1944 Kırım Tatar sürgünü (evren 1923'te bitiyor)
- **Kasr-ı Şirin'deki tek tek sınır kaleleri** (Zencir · Mihriban · Derne vb.): okunan hiçbir kaynak bunları hükümle birlikte vermiyor. Karta ad **konmadı**, "kaynaklar ayrışır" yazıldı. ARAS-BAGDAT'ın harita araştırmasıyla çakışma yok.
- **İran tarafının kendi kronikleri** (Safevî vakayinameleri) okunmadı. Kartın "İran açısından" cümlesi yalnız TDV'ye dayanıyor.
- **Rus tarafında esir kurtarma kurumları** (polonyaniçnıe dengi) okunan kaynaklarda yok, yazılmadı.

## ⑥ KOORDİNATÖRÜN BİLMESİ GEREKEN VERİ BULGULARI (bu oturumun dosyası değil, dokunulmadı)

1. `kronoloji_safevi.js` **1633-01-01 "Erivan'ın Osmanlı'ya kısa süreli kaybı"**: TDV murad-iv Revan'ın teslimini **8 Ağustos 1635** veriyor. Yıl 2 yıl erken görünüyor. Kaynağına sorulmalı.
2. `kronoloji_iran.js` **1623-01-14 "Bağdat'ın geçici olarak geri alınması"**: TDV murad-iv 1623 başı için böyle bir olay anlatmıyor (kayıp 1033/1623-24). Sınanmadı.
3. TDV kendi içinde ayrışıyor: **Astarhan'ın düşüşü** `giray` 1554, `devlet-giray` 1556 (§4 ⑥). Kartta okur diliyle belirtildi.
4. Hanlığın kuruluşu: TDV `kirim` ilk sikke 845/1441-42 · Encyclopedia of Ukraine bağımsızlık **1449**, Osmanlı tâbiliği **1478** (TDV 1475). Kaynaklar ayrışıyor, karta tarih konmadı.
5. `ARAC-A2-BAG` 1639-05-17 için 5 uyarı veriyor (aynı olayın iki maddesi). `IZINLI_COK_MADDELI_GUN` listesine eklenmesi önerilir; araç sahibinin kararı.

## ⑦ NE İSTİYORUM

PAKET-UI3'e ③'teki iki `_EKOKUMA_DOSYA_ADLARI` satırının iletilmesi. Commit ATILMADI (şartname gereği).

---

## ⑧ EK İŞ, 14 Eylül: 1.MURAT'ın sevki, PAKET-UI4 tarayıcı ölçümü M-3930 üzerine

Dosyalar `ac8a94d` ile commit'lenmişti. Yalnız iki veri dosyasına yazıldı. **Kuyruk bağlarının hiçbiri silinmedi**; tek istisna, yamayla kırılacak olan ③.

| # | Sorun (M-3930) | Yapılan | Sonuç |
|---|---|---|---|
| ① | `tartisma-kirimrus-pominki-harac` hiçbir maddede çizilmiyordu (iki bağı da kuyruktaydı) | Çekirdek bağ eklendi: **`1700-07-14\|İstanbul Antlaşması`** → `olaylar_ek5` "İstanbul Antlaşması — Azak'ın Rusya'ya bırakılması". Karta tek bir kaynaklı cümle eklendi, `kaynak`a `TDV: karlofca` yazıldı. | ✓ tuttu, 1 madde |
| ② | `1556-01-01\|Astrahan`: aynı günün Osmanlı maddesi "Astarhan" yazıyor, eşleşmiyordu | Kuyruk bağı korundu, yanına **`1556-01-01\|Moskova Çarlığı Astarhan`** eklendi → `olaylar_p0044` | ✓ ikisi de tek madde; aynı günün Turgut Reis maddesine düşmüyor |
| ③ | `1638-12-25\|Bağdat` UYGULA-BAGDAT K1 ile kırılacak | **Seçim: 12-25 bağı KALDIRILDI, ikinci bağ konmadı.** Kartta zaten `1638-12-24\|Bağdat` var; bugün `olaylar_ek5` "Bağdat'ın geri fethi"ni tutuyor. K1 kuyruk maddesini 12-24'e taşıyor ve başlığını ("Bağdat Osmanlı'ya kesin olarak kaybedildi") değiştirmiyor (`YAMA-BAGDAT-0914.json` madde_duzeltmeleri K1 okundu). Yama inince aynı bağ ikisini birden tutacak. | ✓ bugün 1 madde, yamadan sonra 2 (aynı olay) |

### ①'in dayanağı ve bir düzeltme
- **İlk ek yazımım yanlıştı.** Önce `1502-03-01|Altın Orda` bağladım ve `ic_not`a "çekirdekte ödemeyi anlatan madde yok" yazdım. O taramada yalnız madde **başlıklarına** bakmıştım.
- **`d` metni taranınca iddia çürüdü:** 1440-1800 arasındaki 733 çekirdek madde tarandı. Kırım ile ödeme kelimesinin birlikte geçtiği 4 madde çıktı. Ödemeyi gerçekten anlatan tek madde 1700-07-14'teki ("Kırım hanının Moskova'dan aldığı yıllık vergiden vazgeçti"). Kalan üçü konu dışı: 1454 Kefe haracı, 1787 boş hazine, 1792 Eflak-Boğdan muafiyeti. 1502 bağı pominki kartından kaldırıldı; `moskova-akinlari` kartındaki 1502 bağı yerinde duruyor.
- **Maddenin dayanağı sınandı:** TDV `karlofca` HTTP 200 döndü, gövdesi okundu. İstanbul Antlaşması 27 Muharrem 1112 / 14 Temmuz 1700'de on dört madde olarak imzalanmış. "Kırımlılar'ın Rusya'ya akın yapmamaları ve vergi taleplerinde" Rus isteklerinin kabul edildiği yazıyor. Karta eklenen cümle bunun okur diline çevrilmiş hâli.
- Önceki `ic_not`taki "ANTLASMA2'nin 1700 kartı vergi hükmü anmıyor" iddiası da kartın yalnız başı okunarak verilmişti. Dayanak olarak kullanılmadı, `ic_not`tan çıkarıldı.

### Denetim (ek iş sonrası)
```
node --check (iki dosya)                  OK
node denetim/ARAC-A2-BAG-0913.js --hepsi   öz-sınav 7/7 · BAĞ 603/603 · HATA 0 · UYARI 146 · exit 0
   yeni dosyalardaki uyarı hâlâ yalnız 5 × "1639-05-17|Kasr-ı Şirin" (aynı olayın iki maddesi)
bagsina_ekA.js                            öz-sınav 5/5 · BAĞ 35/35 · eşleşmesiz 0
ARAC-A2-KOPYA (pominki kartı, karlofca dahil)  ortak dizi 0 · 🔴 kopya şüphesi 0 (10 kartın hepsinde)
```
⚠️ Ara adımda bir sözdizimi hatası oldu: `ic_not` dizgisinin ortasında başıboş bir `",` kalmıştı. `node --check` yakaladı ve düzeltildi; dosya bozuk hâliyle hiçbir alete teslim edilmedi.
⚠️ Tarayıcıda yeniden ölçmedim. DOM'daki karşılığını PAKET-UI4 ölçebilir.
