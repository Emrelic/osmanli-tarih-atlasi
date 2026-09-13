# PAKET-KRON3 · 13 Eylül 2026 — maddesiz Osmanlı çevresi geçişleri · yanlış `dis` · isyan günleri

> Sevk: 1.MURAT · hükümler M-3866 (Bihaç, isyan_tarama devri) · M-3869 (DATA SERBEST) · M-3870 (günler, bağlı dosyalar).
> **Commit YOK.** `data/` yazımı koşu 10 yayın zinciri süresince askıya alındı (0 yazım), DATA SERBEST'ten sonra yapıldı.
> Yazılan: `data/olaylar_p0050.js` (YENİ) · `olaylar_ek10.js` · `olaylar_ek16.js` · `olaylar_serhat.js` · `olaylar_p0043a.js` · `olaylar_p0043b.js` · `olaylar_p0044.js` · `olaylar_ek8.js` · `olaylar_ek17.js` · `olaylar_ek20.js` · `isyan_tarama.js` · `ekokuma_statu.js` · `yer_yama.js` · `savaslar.js` · bu rapor.
> Dokunulmadı: yerleşim dosyaları · `arac/*` · `devletler.js` · `js/*` · `index.html`.

## 0 · SAYILAR

| kalem | sayı |
|---|---|
| yeni madde (`olaylar_p0050.js`) | **6** |
| `kapsam:"dis"` → `"ic"` | **14** (çekirdek `dis` 135 → 121) |
| hassasiyeti düşürülen / kaynaksız gün | **2** (1594-10-05 → 1594-08-28 · 1594-11-13 → 1594-11-01 `kesinlik:"ay"`) |
| ek: `kesinlik:"ay"` beyanı | 1 (1595-10-01, gün zaten ay kodluydu) |
| bayat iç not güncellendi | 1 (1595-10-01 Yergöğü `ic_not_d`) |
| bağlı dizgi güncellendi | 8 (isyan_tarama 2 · ekokuma_statu 3 · yer_yama 1 · savaslar 2) |
| yapıştırma hatası | 1 (ek16 Moskova-Litvanya 1503 `yer`: "Nikarya (İkarya)" çıkarıldı) |
| çekirdek madde | 1372 → **1378** |

## 1 · MADDESİZ OSMANLI ÇEVRESİ GEÇİŞLERİ — `data/olaylar_p0050.js`

### 1.1 Ölçüm
`ARAC-KPS-KIRILMA-0913.js` yalnız PAKET-KAPSAM'ın 90'ını tanıyor. Genelleştirilmiş hâli (scratchpad `kir_dis.js`: bütün `kapsam:"dis"` çekirdek maddeler, aynı ±30 gün kuralı, kırılmadaki yerleşimin atlasta hiç `d:`/`v:` taşıyıp taşımadığı):
```
önce   dis 135 · yalnız-dis kapanan kırılma 130 · Osmanlı-hiç yerleşim içeren 21
sonra  dis 121 · yalnız-dis kapanan kırılma 113 · Osmanlı-hiç yerleşim içeren 9
```
21'in dağılımı: 5'i PAKET-KAPSAM'ın saydığı "anlatılmamış" geçiş (aşağıda, madde yazıldı) · 7'si yanlış `dis` işaretli Osmanlı maddesinin kapattığı kırılma (§2 düzeltince çıktı: 1428 ×2 · 1443 ×2 · 1454 ×2 · 1556) · 9'u bağlam maddesi (§2.3, sınırda, dokunulmadı).

### 1.2 Yazılan maddeler

| t | madde | kaynak (okundu) | atlas kırılması |
|---|---|---|---|
| 1527-01-01 | Cetin Meclisi — Hırvat soyluları Ferdinand'ı kral seçti | TDV `hirvatistan` (yıl) · Hrvatski sabor, "Sabor u Cetinu 1527. godine" (gün: "na samu Novu godinu") · TDV `bihac` | Bihaç macaristan→avusturya 1527-01-01 — kaynakla aynı |
| 1527-01-01 `kesinlik:"yil"` | Bihaç'ın kısa süreli Osmanlı idaresi (M-3866) | **tek kaynak: TDV** `bihac` · `bosna-hersek` | atlasta YOK — §4 |
| 1814-01-28 | Dubrovnik'te Fransız idaresinin sonu, Avusturya kuvvetleri şehre | TDV `dubrovnik` (1806 · 1815) · F. Bona, Kolo 2/2008, Matica hrvatska (3 Ocak · 28 Ocak) · Državni arhiv u Dubrovniku HR-DADU-310 (31 Ocak idare) | 1814-01-01 — **farklı, §4** |
| 1882-03-06 | Sırbistan Krallığı'nın ilânı | TDV `sirbistan` · `nis` (yıl) · Zakon o proglašenju Knjažestva Srbije za Kraljevinu, Srpske novine 41, 22.II.1882 (birincil) | aynı |
| 1920-07-01 | Filistin'de İngiliz sivil manda idaresi | TDV `filistin` ("Temmuz 1920") · `kudus` · `gazze` · Interim Report on the Civil Administration of Palestine, 1st July 1920–30th June 1921 (HMSO 1921) | aynı |
| 1922-03-15 | Mısır Krallığı ilan edildi | TDV `misir` (gün: "15 Mart 1922") | aynı |

Hepsinde `kapsam:"ic"`; süreç notları `ic_not_gun` / `ic_not_d` alanında. Atlasın kırılma günü hiçbirinde dayanak alınmadı.

**Takvim:** 1527 Jülyen, çevrilmedi. 1882'de Sırbistan Jülyen kullanıyordu. Kanun 22 Şubat (Jülyen) = 6 Mart (Gregoryen) olarak yazıldı; çevirme yapıldığı maddede açıkça belirtildi (VERI-YAPISI TAKVİM).

**Slug ölçümü** (`ARAC-A6A-TDV-0913.py`, 302 = ölü):
- 🟢 200: `bihac` · `hirvatistan` · `dubrovnik` · `sirbistan` · `filistin` · `misir` · `kudus` · `belgrad` · `nis` · `eflak` · `bogdan` · `erdel` · `israil` · `kahire` · `gazze` · `bosna-hersek` · `malkocogullari`
- 🔴 302: `fuad-i` · `fuad` · `milan-obrenovic` · `zeyl-i-misir` · `mandater` · `manda` · `yayce` · `yayca` · `jajce` · `bosna` · `yayce--kale`

### 1.3 🔴 ATLAS DÜZELECEK YER (yerleşim yaması koşu sonrası)
1. **Dubrovnik** `s:` fransa-cumhuriyet→avusturya **1814-01-01** (yuvarlak) → kaynak **1814-01-28**.
   - 28 Ocak: Avusturya-İngiliz yürüyüşü.
   - 31 Ocak: geçici idare başlangıcı, istenirse bu gün.
   - Fark 27 gün.
2. **Bihaç** 1592 öncesinde hiç `d:` yok. TDV `bihac` iki ayrı Osmanlı dönemi veriyor:
   - (a) "Stjepan Tomašević'in tutuklanmasından sonra Osmanlı hâkimiyetine girdi (1463)"
   - (b) "Mohaç'ı izleyen yılda Yayça Kalesi'nin alınmasından sonra … kısa bir süre için yeniden Osmanlılar'ın idaresine geçti"
   - (b) için madde yazıldı. (a) için yazılmadı, sevk 1527-28 idi.
   - İki dönemin de **bitişi kaynakta yok** ⇒ yama önerisi dönem sonunu veremez.
   - TDV `bosna-hersek` Yayça için "(1527 veya 1528)" diyor, `bihac` "izleyen yıl" = 1527 diyor. Aradaki ayrışma §4⑥ gereği bildirildi, hüküm verilmedi.

### 1.4 D147 notu — yeni maddelerin ±30 gününe düşen başka kırılmalar
Bu kırılmalar bu maddelerle **anlatılmış olmaz**. Hepsi bugün de başka maddelerce kapalı, sayı değişmedi:
- **Dubrovnik 1814-01-28:**
  - Kukava (Kukawa) · Berens River 1814-01-01
  - Kiel/Norveç 1814-01-14
- **Sırbistan 1882-03-06:** Aseb 03-10 · Gulca/Almalık 03-22
- **Filistin 1920-07-01:**
  - Aabenraa 06-15
  - Antakya/Halep (Suriye-Lübnan mandası) 07-24. Sevr 08-10 zaten kapatıyordu. Kendi maddesi yok ⇒ ayrı borç adayı.

## 2 · YANLIŞ `dis` — 14 düzeltme (`"dis"` → `"ic"`)

Şema: `js/suzgec.js:175` `kapsamOf` yalnız `"dis"`i tanır, geri kalan her şey `"ic"` sayılır. Çekirdekte açık `"ic"` 25 maddede kullanılıyor (Prizren fethi · Niğbolu geri alınışı · Turgut Reis beylerbeyiliği gibi Osmanlı olayları). Bu yüzden alan silinmedi, `"ic"` yazıldı.

| dosya#sıra | t | madde | gerekçe |
|---|---|---|---|
| serhat#0 | 1428 | II. Murad Alacahisar'ı aldı | Osmanlı fethi, padişah aktör |
| serhat#1 | 1443 | Haçlı ordusu Şehirköy'ü zaptetti | Osmanlı toprak kaybı, Haçlı-Osmanlı savaşı (rapor listesinde yoktu, aynı dosya/aynı cins) |
| serhat#2 | 1454 | Alacahisar yeniden Osmanlı hâkimiyetine | Osmanlı fethi, tımar kaydı |
| p0043a#0 | 1456 | Şehirköy Osmanlı hâkimiyetine döndü | Osmanlı kazanımı |
| p0043b#0 | 1514-03-20 | Yavuz, Çaldıran Seferi için Edirne'den çıktı | padişah seferi |
| p0044#1 | 1556-07-16 | Kostayniçe ve Novi'nin fethi | Malkoç Bey, Osmanlı fethi |
| p0044#3 | 1574 | Mâku Osmanlı'ya geçti | Osmanlı kazanımı |
| ek8#0 | 1460 | İzvornik fethi | Osmanlı fethi |
| ek8#2 | 1515 | Nusaybin-Cizre Osmanlı'ya katıldı | İdrîs-i Bitlisî, Osmanlı ilhakı |
| ek8#10 | 1688-09-11 | Knin'in Venedik'e kaybı | Osmanlı kaybı — rapor listesinde yoktu, okununca bulundu |
| ek17#0 | 1513 | Pîrî Reis'in dünya haritası | Osmanlı denizcisi, Gelibolu |
| ek17#12 | 1711-07-21 | Baltacı Mehmed Paşa–Katerina rivayeti | Osmanlı sadrazamı, Prut |
| ek17#13 | 1711-07-21 | Prut'ta "kaçırılan fırsat" | Osmanlı ordusu, Prut |
| ek20#13 | 1489-03-04 | Cem Sultan Roma'ya getirildi | Osmanlı şehzadesi, II. Bayezid |

Uygulama: scratchpad `kron3_yama.py`. Her değişiklik dosya · satır · eski dizgi ile yapıldı; satırın ±12 satırında madde başlığının çapası sınandı. Yalnız o satırın `kapsam` değeri değişti.

### 2.1 Emin olunmayan — DEĞİŞTİRİLMEDİ, Emre'nin PAKET-KAPSAM §3 sorusuna bağlı
Soru: *Timur / Safevî / beylik / Memlük / Mısır "Osmanlı bağlamı" mı?*
- **`dis` ama Osmanlı bağlamı** (Osmanlı-hiç yerleşimli, yalnız-dis kapanan 9 kırılmanın kapatanları):
  - ek20#5 1315 Malatya Memlük · ek20#6 1338 Malatya Memlük
  - ek20#1 1344 İzmir Haçlı-Aydınoğulları
  - ek20#3 1467 Uzun Hasan-Karakoyunlu
  - ek20#4 1490 Gürcistan bölünmesi
  - ek20#7 1510 Trablusgarp İspanyol işgali
  - ek20#8 1530 Malta-Trablus şövalyeler (gövde Kanûnî'yi anıyor)
  - ek22#0 1794 Zend sonu
  - ek16#15 1861 Gaeta (Otranto kaydı). Osmanlı ile ilgisi zayıf, `dis` doğru görünüyor.
- **Diğer `dis`:**
  - p0044#2 1556 Astarhan (gövde Osmanlı 1569 seferi)
  - ek8#1 1509 Diu (Memlük-Osmanlı Kızıldeniz arka planı)
  - ek8#13 1835 Hâil Reşîdî
  - ek20#9 1887 Harar
- **`ic` ama Osmanlı değil** (PAKET-KAPSAM §4): ek20#0 1326 Eşrefoğulları sonu · ek20#2 1366 Karamanoğlu Konya.
  - Beylik bağlamıdır. Davranışta `ic` = kapsamsız olduğu için fark yok, dokunulmadı.

## 3 · İSYAN KALEMLERİ (`olaylar_ek10.js` + bağlı dosyalar, M-3870)

### 3.1 Günlerin kaynak taraması
- **Okunan:**
  - TDV `eflak` · `bogdan` · `erdel` (gövde)
  - A.-M. Crăciun, "Tratatele lui Sigismund Báthory cu Țara Românească și Moldova (1595): o comparație", *Crisia* LIII, Muzeul Țării Crișurilor, Oradea 2023. PDF metin katmanı `pypdf` ile okundu.
  - PAKET-ISYAN'ın History of Transylvania I s.118-119 okuması. HoT'yi ben yeniden okumadım.
- **5 Ekim 1594:** hiçbir akademik kaynakta bulunamadı.
  - Yalnız Vikipedi "Holy League (1594)" maddesinde, Zsigmond'un katılışı olarak geçiyor. Tek dayanak olamaz.
  - Crăciun'da Boğdan'ın resmî geçişi **16 Ağustos 1594**, Eflak'ın katılışı ise "aynı yılın sonbaharı".
- **13 Kasım 1594:** akademik kaynakta bulunamadı.
  - Yalnız Vikipedi ve popüler siteler veriyor (historia.ro · descopera.ro · okul siteleri).
  - HoT "November", TDV `bogdan` "1594 yılı sonlarında".
- Crăciun'un kaynakçasındaki C. D. Giurescu, *Istoria României în date* (2003) gün verebilir. **Erişilemedi, okunmadı.**

### 3.2 Uygulanan (M-3870 hükmü: t maddenin kendi olayının kaynaklı tarihi; `kesinlik:"yil"` ile ay-gün taşıyan t yazılmaz)
- **Madde 1594-10-05 → `t:"1594-08-28"`** (gün, kesinlik alanı yok = gün):
  - Madde artık kendi günlü olayını, **Erdel'in kopuşunu** anlatıyor (HoT 28 Ağustos 1594).
  - Başlık: "Üç voyvodalığın birden ayaklanması — Erdel, Eflak ve Boğdan Kutsal İttifak'a giriyor" → "Üç voyvodalığın ayaklanması başlıyor — Erdel Kutsal İttifak'a geçti, Osmanlı yanlısı beyler tutuklandı".
  - `gun:"28 Ağustos 1594"`.
  - `d`'deki sıra düzeltildi. Eskisi "önce Erdel, ardından Eflak ile Boğdan" diyordu. Yenisi: Boğdan 16 Ağustos belgesi · Erdel 28 Ağustos · Eflak sonbahar.
  - Gerekçe `ic_not_gun`da.
  - ⚠️ `d`'deki "Karar 28 Ocak 1595'te Prag'da imzalanan antlaşmayla resmîleşti" cümlesi **sınanmadı**, olduğu gibi duruyor.
- **Madde 1594-11-13 → `t:"1594-11-01"`, `kesinlik:"ay"`, `gun:"Kasım 1594"`:**
  - p0037 emsali.
  - İsyan penceresi `isy-eflak-1594`/`isy-bogdan-1594` f:1594-11-01, yani madde pencerenin içinde.
  - YYYY-01-01 yazılsaydı pencerenin dışına düşerdi (§4 pencere şartı).
- **Madde 1595-10-01:**
  - `kesinlik:"ay"` eklendi (TDV `yergogu` "1595 Ekiminde").
  - `ic_not_d` bayattı ("harita hâlâ tâbi renkte, veriye işlenmedi"). Güncellendi: tâbi rengi bilerek korunuyor (C2), üstüne `isyan_tarama.js` taraması biniyor; pencereler yazıldı.
- **Dosya başı yorumu:** eski "literatürden gün" iddialarının sınandığı ve bulunamadığı notu eklendi. Eski metin tarihçe olarak duruyor.

- **M-3872 eki:**
  - İki maddenin `kaynak` alanına HoT yazıldı:
    - 08-28: `bogdan + History of Transylvania I s.118-119 + Crăciun, Crisia LIII (2023)`
    - 11-01: `eflak · bogdan + HoT (Kasım)`
  - Vikipedi ve popüler site günleri `ic_not_gun`da "KAYNAKSIZ, SİLİNDİ" diye damgalandı.
  - Sonrasında denetim yeniden koşuldu: `node --check` temiz · eşleşme 5/5 · A2-BAG HATA 0 · `denetle.py` çıktısı bir önceki koşuyla birebir.

### 3.3 Bağlı dizgiler (aynı tur)
```
isyan_tarama.js maddeler[]  { t:"1594-08-28", b:"Üç voyvodalığın ayaklanması başlıyor" }
                            { t:"1594-11-01", b:"Bükreş ayaklanması" }
ekokuma_statu.js  satır 68 · 80 · 100   olay "1594-10-05" → "1594-08-28"
yer_yama.js       satır 389              t + b yeni başlık
savaslar.js       satır 240 · 242        Eflak / Boğdan ayaklanması t "1594-11-13" → "1594-11-01" (madde ile aynı gün, M-3870)
```

**Ölçüm:**
- `isyan_eslesme.js` (t birebir + b öneki): önce 5/5 · sonra **5/5**.
- `node denetim/ARAC-ISY-OLCUM-0913.js` ⑥:
  - 1594-08-28 ✓ o gün taralı: yalnız `isy-erdel-1594`
  - 1594-11-01 ✓ üçü de taralı
  - 1595-01-01 · 08-23 · 10-01 ✓

## 4 · YAN BULGU — Nikarya
`olaylar_ek16.js` Moskova-Litvanya Mütarekesi 1503 `yer` alanından **"Nikarya (İkarya)" çıkarıldı**.
- Kayıt bir Ege adası (37,6°K 26,15°D).
- Madde Çernigov-Seversk bölgesini anlatıyor.
- 1503-04-02 kırılmasındaki 12 yerleşimin arasında da yok. Kesin yapıştırma hatası.
- 🟡 **Dokunulmadı, şüpheli:** aynı `yer` listesinde **Kiev** ve **Poltava** var. Madde gövdesi yalnız Çernigov · Novgorod-Seversk · Starodub · Bryansk'ı sayıyor.
  - Kiev'in 1503'te Moskova'ya geçtiği söylenmiyor, 1503 kırılmasında da yok.
  - Kaynak okunmadı ⇒ sahibine.

## 5 · BULUNAMAYAN / OKUNMAYAN
- 5 Ekim 1594 ve 13 Kasım 1594 günleri: akademik kaynakta **bulunamadı** (§3.1).
- L. Margetić, "Cetinski sabori u 1527.", *Senjski zbornik* 17 (1990): künye bulundu, **okunmadı**.
- Samuel'in *Interim Report*'u: **gövdesi okunmadı**.
  - Gün raporun resmî dönem başlığından alındı (Yale/HathiTrust/WorldCat künyesi).
  - UNISPAL ve archive.org sayfaları metin vermedi.
- Bihaç'ın 1527 kısa Osmanlı idaresinin bitişi: TDV'de yok. Tek kaynak TDV.
- Giurescu, *Istoria României în date*: erişilemedi.
- Arama sonuçlarında görünen Vikipedi, fandom, novosti.rs ve historia.ro sayfaları **dayanak alınmadı**.

## 6 · DENETİM — ÖNCE / SONRA
```
node --check        yazılan 14 dosyanın 14'ü TEMİZ
py arac/denetle.py  önce (koşu 10 sonrası taban): SONUÇ temiz · 2 ✓ 528/0 · 2s ✓ 1331 · 101 AÇIK · 357 · 2i ✓ 62/3 · 2t ✓ 15 · mükerrer 0
                    sonra: SONUÇ temiz · 2 ✓ 528/0 · 2s ✓ 101 AÇIK · 2i ✓ 3 · 2t ✓ 15 · mükerrer 0 · EXIT 0
                    çıktı diff'i: TEK satır — "1372 kronoloji maddesi" → "1378"
node denetim/ARAC-A2-BAG-0913.js --hepsi   önce 551/551 · HATA 0 · UYARI 141   sonra AYNI (çıktı diff'i BOŞ)
git diff --stat data/   13 dosya · +37 −31  (+ yeni olaylar_p0050.js)
```
`denetle.py`'nin `s.kesinlik BILINEN_ALANLAR'da yok` uyarısı (Vidin · Kızıkermen yerleşimleri) önceki çıktıda da vardı. Bu paketle ilgisi yok.

## 7 · KOORDİNATÖRE
- **index.html bağlama satırı** (`olaylar_p0049.js` satır 1015'in altına):
  ```html
  <script src="data/olaylar_p0050.js?v=r8232"></script>
  ```
  Bağlanmadan canlı değil (D099). `denetle.py` glob'la bugün okuyor.
- **Commit:** `git add` yeni dosya için şart (`data/olaylar_p0050.js`).
- **Koşu sonrası yerleşim yaması:** §1.3 (Dubrovnik 1814-01-28 · Bihaç TDV dönemleri, bitişsiz).
- **Emre'ye:** §2.1 bağlam sorusu (13 `dis` · 2 `ic`) · §4 Kiev/Poltava.
