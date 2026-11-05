# RENK-1103: renk ölçümü ve önerisi

Ölçüm ağacı: worktree dalı `worktree-agent-a974788a637ff2c4a`, taban `origin/main` = `01d545bdb376` (HEAD `01d545bdb376`). Makine: laptop/UMIT tarafı, `py`. Hiçbir `arac/` motor dosyasına, `data/`ya yazılmadı.

Araçlar bu dizinde: `renk_oneri.py` (öneri üretici + doğrulayıcı), `kunye_boya_eslesme.py` (c), `renk_olc_cikti.txt` (ham `py arac/renk_olc.py` çıktısı), `renk_oneri.json` (uygulanabilir), `renk_oneri_ham.json` (ayrıntı).

## 1. Özet sayılar

| Ölçü | Değer |
|---|---|
| `renk_olc.py` çıkış kodu | **0** (kod hiçbir sayıya bağlı değil; sonuç satırı 🔴) |
| Taban (renk_olc ham, koordinatörün sayısı) | Voronoi çakışan **64** · yakın-ama-değmeyen **248** (tavan `KADEMELI_IHLAL_TAVANI`=72) · aynı-anahtar örtüşen **162** · aynı-hex **2** · görünmez **0** |
| Yönlendirilmiş evren (motorun gerçekten çizdiği, bkz. §3) | Voronoi çakışan **73** · yakın-ama-değmeyen **266** · künye-penceresi ek **13** |
| `renk_bekleyen.md` dosyaları | 12 dosya, 12'si de "Yok" (aşağıda §2) |
| Boyasız künye (motor anahtarı yok) | **32** (`boya_gerekli:true` olan 26) |
| Önerilen renk (toplam) | **289** = {'DEGISIM': 219, 'YENI-ANAHTAR (kunye boyasiz)': 32, 'YENI-ANAHTAR (ayni-anahtar bolunmesi)': 38} |
| Öneri sebep dağılımı | {'komsu-cakisma': 190, 'boyasiz-kunye': 32, 'ayni-anahtar-bolunme': 38, 'su-yakin': 22, 'artik-cakisma-2.tur': 7} |
| Öneriden SONRA eşik altı (ΔE<12) Voronoi çakışan | **0** |
| Öneriden SONRA yakın-ama-değmeyen | **1** (+ künye penceresi 1) |
| Öneriden SONRA gerçek aynı-anahtar örtüşme (motor) | **0** (renk_olc'un `harita:` bazlı sayısı 162) |
| Öneriden SONRA aynı-hex çakışma | **0** · su yakın **0** · altlıktan ayrışmayan **0** |
| Önerilen renklerin kendi ΔE_min'i, kapı evreni (Voronoi ∪ <600 km) | <12: **0**, 12-15: **51**, ≥15: **238** |
| Önerilen renklerin kendi ΔE_min'i, 1500 km ayna evreni | <12: **55** (ayna uyarıdır, kapı değil; öneri öncesi aynada da var), ≥12: **234** |

## 2. a) renk bekleyen künyeler

`denetim/DUNYA-1102/*/renk_bekleyen.md`: 12 dosya (afrika-500-1800, asya-1000-1800, asya-1800-2000-afrika-antik, asya-500-1000, asya-mo3500-500, asya-mo500-ms500, avrupa-1000-1500, avrupa-1500-1800, avrupa-1800-2000, avrupa-500-1000, avrupa-mo3500-500, avrupa-mo500-ms500) hepsi "Yok: yeni künye eklenmedi" diyor. `afrika-1800-2000`, `amerika-*`, `okyanusya-*`, `ikinci-gecis-kunye` dizinlerinde `renk_bekleyen.md` YOK (yalnız `bekleyen.md`/`ajan_sonuclari.json`). Yani **raporlardan toplanan renk bekleyen künye = 0**; gerçek liste dosya raporlarından değil `devletler.js` ↔ `BOYALAR` eşlemesinden çıkıyor: **32 boyasız künye** (`kunye_boya_eslesme.md` §1a), bunların 26'sı `boya_gerekli:true`. Hepsi için §5 tablosunda renk var.

Ham renk_olc çıktısı: `renk_olc_cikti.txt`. Koordinatörün 248 / tavan 72 bilgisi **doğrulandı** (tam 248; tavan 72 aşılmış, çıkış kodu etkilenmiyor).

## 3. Bulgu: renk_olc'un kör noktası (yönlendirme)

Motor (`uret_petek.py` ~1111-1148) `s:[{d}]` kimliği `BOYALAR`'da yoksa künyenin `harita:` anahtarına düşürür (**83** kimlik). `renk_olc.komsuluk()` ise ham `d`yi okur; bu kimlikleri hiç görmez. Ölçüm yönlendirilmiş veriyle tekrarlanınca Voronoi çakışan 64 → 73, yakın-ama-değmeyen 248 → 266 oldu. Öneriler yönlendirilmiş (gerçek çizilen) evren üzerinde hesaplandı. Düzeltme `renk_olc.py`'ye girmeli (bu işin kapsamı dışı: motor dondurma değil ama koordinatör kararı).

Ayrıca **ayni_anahtar** 162 çift alarmı: `harita:` ortak ama kayıt `id`si zaten `BOYALAR`'da ise motor `harita`yı hiç kullanmaz. Yanlış alarm: **1**, gerçek (motorun aynı kimliğe düşürdüğü): **161** çift → **38** kayıt kendi `BOYALAR` girişini alırsa ayrışır (kayıt `id`si BOYALAR'a eklenir; motor A' kuralıyla `s.d`=id'yi doğrudan bulur, veri değişmez).

Tarih karşılaştırması: `renk_olc.py` ISO tarihleri DİZE olarak kıyaslıyor (`fa < tb`). İki MÖ (negatif) yıl arasında dize sırası kronolojik sıranın tersidir (`'-0500' > '-0100'`). Bu raporun çözücüsü sayısal sıra kullandı; renk_olc'un MÖ-MÖ eşzamanlılık kararları bu yüzden yanlış olabilir (ÖLÇÜLEMEDİ: kaç çiftte, kapsam dışı).

## 4. Ölçüt ve yöntem

- **ΔE**: `renk_olc.py`'nin kullandığı **CIE76** (Lab öklit), `gorunen()` = %44 opaklıkla altlık `#e8dfc8`e bindirilmiş renk; komşu eşiği `DE_KOMSU=12`, altlık `DE_ALTLIK=15`. İstenen CIEDE2000 karar ölçütü yapılmadı çünkü kapıyı koyan araç CIE76 (karar o kapıya göre); bilgi için her kayda `dE2000_en_yakin_sonra` yazıldı.
- **Hedef (kısıt merdiveni)**: kapı evreninde (Voronoi ∪ <600 km) ΔE ≥ 13 ZORUNLU (eşik 12 + 1 pay); 1500 km ayna evreninde önce ≥15, sonra 13.5, 12, 10, 8, 6, 4, 2, 0; olmazsa kapıda 12.3. Her kaydın hangi basamakta çözüldüğü `renk_oneri.json` `secim_merdiveni`.
- **Engel evreni**: Voronoi komşuları ∪ 1500 km içinde eşzamanlı (nokta düzeyinde, MÖ-doğru sayısal tarih) ∪ verisiz kimlikler için aynı bölge+pencere örtüşmesi ∪ Osmanlı ikilisi. (`renk_olc` kapısı 600 km; ayna 1500 km.)
- **Sabit kısıtlar** (yeni renk için): altlıktan ΔE≥16; bindirilmiş L*≥59.5 (`ACIKLIK_TABANI_L`=59); ham hex ↔ `#c4dcea` ≥19.5 (`SU_ESIK_DE`=18); denizle DAL1 ΔE≥19 ve DAL2 elenmiş; iki kabartma tonundan ΔE≥15.5; hex tekil.
- **Seçim**: mevcut kimlik için eski renge **en yakın** (en küçük değişiklik) aday; ardıl/akraba kanıtı olan için akraba tonuna (Lab hue) en yakın; kanıtsız yeni kimlik için paletin ortancasına en uygun (`uyum`).
- **Kapsama**: çakışma grafiği (Voronoi ∪ yakın ∪ künye-penceresi çiftleri) açgözlü en küçük düğüm kapsamasıyla çözüldü; maliyet = 1 + 0.02·nokta_sayısı + 40 (PAYLASIM'da beyanlı grup üyesi). Osmanlı ikilisine çakışan taraf zorunlu hedef.

## 5. Hanedan / ardıl kanıtı (tahmin değil)

`devletler.js`'te ardıl/öncül/hanedan için YAPISAL alan **yok** (alan sayımı: `denetim/RENK-1103/alan_say.py`). Kullanılan kanıtlar:
1. **Yapısal**: ortak `harita:` anahtarı (ayni-anahtar bölünmesi alan kayıtları anahtarın rengine ton olarak yakın tutuldu).
2. **Metinsel**: `ozet`/`ad` içinde açıkça geçen ardıl/devir ilişkisi; her kayıt `akraba_kanit` alanında alıntısıyla yazıldı. Kanıtı olmayan kimlik tonu serbest bırakıldı.
Akraba kanıtı taşıyan öneri sayısı: **55**.
Ton ailesi ölçümü (`ton_ailesi_olc.py`, Lab hue farkı yeni renk ↔ akraba): medyan **0.5°**, ≤30°: **39**, 30-60°: **2**, >60°: **14** (toplam 55). 60°'yi aşanların neredeyse hepsi `ingiltere` ailesi (ortak `harita:` anahtarı olan ~16 koloni): ingiltere bölgesindeki komşuların tamamı aynı turuncu ailede ΔE≥13 payını bırakmadığı için bu kayıtlarda ΔE kısıtı ton ailesinden önce geldi. İstenirse bu 16 kayıt tek tek elle tonlanabilir.

## 6. c) Künye-boya eşlemesi
Ayrıntı: `kunye_boya_eslesme.md`.

- devletler_js_kayit: **2279**
- BOYALAR_kimlik: **2187**
- kunye_harita_alani_yok: **1922**
- kunye_harita_yok_ama_id_BOYALARda: **1890**
- kunye_harita_yok_ve_id_BOYALARda_yok: **32**
- kunye_harita_var: **357**
- kunye_harita_var_ama_anahtar_BOYALARda_yok: **0**
- kunye_motor_anahtari_yok_BOYASIZ: **32**
- boya_gerekli_isaretli: **508**
- boya_gerekli_ve_BOYASIZ: **26**
- boya_gerekli_ama_artik_boyali_isaret_bayat: **482**
- BOYALAR_yetim_kunyesiz: **3**
- yerlesim_s_d_ayri_kimlik: **1722**
- s_d_BOYALARda_yok: **84**
- s_d_BOYALARda_yok_ama_harita_ile_yonlenen: **83**
- s_d_GERCEKTEN_boyasiz_(__BOSLUK__ haric): **0**
- s_d_BOSLUK_donem: **683**
- s_d_kunyede_yok_ve_BOYALARda_yok: **1**

## 7. Uygulama notu (renkler.py'ye tek partide)

`renk_oneri.json` kayıt biçimi: `{kimlik: {ad, tur, eski (dosyadaki literal hex), eski_calisma_zamani (açıklık tabanı yükseltmesinden sonraki, varsa), yeni, sebep[], gerekce, dE_min_once, dE_min_sonra, komsu, dE2000_en_yakin_sonra, akraba, akraba_kanit}}`.
- `tur=DEGISIM`: `BOYALAR[kimlik]` satırının hex'i `yeni` ile değişir.
- `tur=YENI-ANAHTAR (...)`: `BOYALAR`'a `"kimlik": ("ad", "yeni")` satırı EKLENİR. Ayni-anahtar bölünmesinde kayıt `id`si ile eklendiği için veri/`harita:` değişmez.
- Uygulamadan sonra: `py arac/renk_olc.py` (hedef: Voronoi çakışan ve yakın-ama-değmeyen 0), `renkler.py` `PAYLASIM` beyanı bozulan gruplar için uyarı verebilir (grup üyesi recolor edildiyse).
- renkler.py motor tuzundadır; uygulama HAVVA'da koşu **bitmeden** yapılmamalı, sonraki tam inşa koşusuna girer.

## 8. Kalanlar ve sınırlar

- **Kalan 1 'yakın-ama-değmeyen' = renk_olc MÖ tarih hatasının yanlış alarmı**: `natufiyen` (-12649..-9549) ↔ `part` (-0249..0224). `renk_olc` ISO tarihleri dize kıyaslıyor; `'-12649' < '0224'` ve `'-0249' < '-9549'` dize olarak doğru ⇒ 'eşzamanlı' sanıyor, gerçekte 9000+ yıl ayrı. Renk önerisiyle kapanmaz; `renk_olc.py`'de tarih kıyası sayısal olmalı (bu işin kapsamı dışı, koordinatör kararı).
- Kapı evreninde 13'ün altında kalan öneri: ingiltere 12.1 (12 eşiğinin üstünde).
- 'Künye penceresi' çiftleri (veride henüz eşzamanlı olmayan, künyesi örtüşenler) da kapsama alındı. Öneriden sonra kalan: ingiltere ↔ macaristan ΔE 8.59 (375 km). (ingiltere çok komşulu olduğundan 12'yi geçen tek renk bulunamıyor; borçtur, ihlal değil: veride henüz eşzamanlı değiller.)
- Kalan 'yakın-ama-değmeyen' (tam liste): natufiyen ↔ part ΔE 6.28
- Boyasız 32 künyenin yerleşim noktası YOK ⇒ renk_olc bunları ölçemez ('ölçülemedi'); onlar için engel evreni aynı bölge + künye penceresi (en kötü hâl) alındı. Gerçek komşuluk nokta partisi inince `renk_olc` ile yeniden sınanmalı.
- **Değişimin büyüklüğü** (`DEGISIM` 219 kayıt, eski→yeni ΔE): medyan **17.2**, >30: **43**, >60: **10**. En büyük sıçramalar (gözle kontrol önerilir): ahaya-prinkepsligi 104.1 (#242ad8→#72fc00), gattilusio 92.3 (#f14a71→#06fc06), tunus-benihorasan 84.8 (#f17ff0→#a2fc0c), cemisgezek-beyligi 81.9 (#24c6d2→#fc00e4), brixen-piskoposlugu 78.1 (#977ca7→#00fc0c), murabitlar 75.8 (#6cd224→#9072fc), flandre 72.5 (#9e649a→#6cf006), papalik 71.4 (#2a4b1e→#2a0cfc), tunus-beyligi-fransiz 66.5 (#54d224→#c096f0), kanosa-hanedani 65.2 (#1bc9b4→#002afc). Sebep: komşuluğu doymuş bölgelerde (Avrupa, Doğu Akdeniz, Britanya kolonileri) eski tona yakın ve 13'ü geçen boş renk kalmıyor. `ingiltere` (Britanya) #7e3d8f→#fc7200 de bunlardan: kapı evreninde 12.1'e ancak ulaştı, koordinatör bu tek kaydı elle gözden geçirmeli.
- Aday ızgara 6'lık adımlı (79 507 ham renk), hex tekil; ince ayar yok.
- Öneriler birlikte çözüldü ve bellekte uygulanıp `renk_olc` fonksiyonlarıyla (komsuluk, yakin_renk, ayni_hex, deniz, kabartma) yeniden ölçüldü (`renk_oneri.py` G bölümü); bu ölçüm sonuç satırlarının kaynağıdır.

## 9. Tablo: öneriler

| kimlik | tür | eski | yeni | ΔE önce | ΔE sonra | sebep | en yakın komşu (sonra) |
|---|---|---|---|---|---|---|---|
| abbasi | DEGISIM | #7ecc24 | #a8fc00 | 3.47 | 15.17 | komsu-cakisma | venedik (sonra) |
| afrasiyabiler | YENI-ANAHTAR | - | #d86c2a | - | 27.17 | boyasiz-kunye | OSMANLI tâbi (sonra) |
| agadez-sultanligi | DEGISIM | #243cd2 | #2a2a42 | 4.47 | 15.14 | komsu-cakisma | tuareg-air (sonra) |
| ahaya-prinkepsligi | DEGISIM | #242ad8 | #72fc00 | 4.08 | 8.22 | komsu-cakisma | polonya-erken (sonra) |
| ahlatsahlar | DEGISIM | #24ccd8 | #72c0a2 | 1.44 | 15.21 | komsu-cakisma | artuklu (sonra) |
| aiz | DEGISIM | #00897b | #00723c | 7.7 | 15.14 | komsu-cakisma | mahra-sultanligi (sonra) |
| alamut-nizari | DEGISIM | #d82478 | #fc0066 | 2.4 | 15.1 | komsu-cakisma | eyyubi (sonra) |
| albarracin | DEGISIM | #b7629b | #662484 | 4.73 | 10.03 | komsu-cakisma | schwaben-dukaligi (sonra) |
| alessandria-komunu | DEGISIM | #c75f75 | #f04e00 | 2.49 | 9.39 | komsu-cakisma | ingiltere (sonra) |
| alevi-devleti-lazkiye | YENI-ANAHTAR | - | #a25a54 | - | 18.86 | boyasiz-kunye | OSMANLI tâbi (sonra) |
| alman-dogu-afrikasi | DEGISIM | #76e693 | #1e5a0c | 8.05 | 15.01 | komsu-cakisma | buganda (sonra) |
| amerikan-filipinleri | YENI-ANAHTAR | - | #c612fc | - | 15.02 | ayni-anahtar-bolunme | abd (sonra) |
| anjou-kontlugu | DEGISIM | #cc2a24 | #f01800 | 9.37 | 15.06 | komsu-cakisma | baden (sonra) |
| annazi | DEGISIM | #54d824 | #96d21e | 0.98 | 15.01 | komsu-cakisma | buveyhi (sonra) |
| antigonos | DEGISIM | #94ddfb | #60aea2 | 25.73 | 15.48 | su-yakin | antigonos-krallik (sonra) |
| arles-kralligi | DEGISIM | #a7a0d1 | #787e6c | 6.27 | 15.5 | komsu-cakisma | ivrea-markizligi (sonra) |
| asti-komunu | DEGISIM | #15a1b6 | #fcc006 | 3.14 | 13.0 | komsu-cakisma | macaristan (sonra) |
| ata-pueblo | DEGISIM | #24d86c | #30d85a | 11.06 | 15.23 | komsu-cakisma | spiro (sonra) |
| azerbaycan-milli-hukumeti | YENI-ANAHTAR | - | #d8722a | - | 28.77 | boyasiz-kunye | OSMANLI tâbi (sonra) |
| baban-emirligi | YENI-ANAHTAR | - | #d87e2a | - | 28.4 | boyasiz-kunye | celili-musul (sonra) |
| badajoz-aftasiler | DEGISIM | #f28fd6 | #fc4e6c | 5.92 | 15.01 | komsu-cakisma | maine-kontlugu (sonra) |
| baekje-restorasyon | DEGISIM | #8ee693 | #6ccc54 | 5.96 | 15.56 | komsu-cakisma | yamato (sonra) |
| bali-warmadewa | DEGISIM | #24d848 | #12cc78 | 1.36 | 15.05 | komsu-cakisma | kediri (sonra) |
| bati-avustralya | YENI-ANAHTAR | - | #ba1eb4 | - | 28.63 | ayni-anahtar-bolunme | OSMANLI tâbi (sonra) |
| bavendi | DEGISIM | #5424d8 | #b406f6 | 0.93 | 15.09 | komsu-cakisma | ahmedili (sonra) |
| bavyera | DEGISIM | #df3f48 | #fc1200 | 5.87 | 13.59 | komsu-cakisma | brandenburg-prusya (sonra) |
| belcika-kongo | YENI-ANAHTAR | - | #7e3666 | - | 15.32 | ayni-anahtar-bolunme | OSMANLI tâbi (sonra) |
| birlesik-arap-cumhuriyeti | DEGISIM | #9c24d8 | #ae18fc | 5.05 | 15.21 | komsu-cakisma | tbmm-turkiye (sonra) |
| birlesik-iyon-adalari | DEGISIM | #0be5b2 | #067218 | 5.86 | 15.08 | komsu-cakisma | karadag (sonra) |
| bitinya | DEGISIM | #94ddfb | #6c8a78 | 11.73 | 15.05 | su-yakin | bergama (sonra) |
| bizans | DEGISIM | #0f0f5d | #1e2a6c | 11.23 | 10.06 | komsu-cakisma | hollanda-kontlugu (sonra) |
| bizans-katepanlik-italya | DEGISIM | #c077a5 | #a242a2 | 7.78 | 15.02 | komsu-cakisma | aversa-kontlugu (sonra) |
| bohemya | DEGISIM | #49b0db | #6c6690 | 5.67 | 10.3 | komsu-cakisma | ancona-cumhuriyeti (sonra) |
| bohemya-moravya-protektorasi | YENI-ANAHTAR | - | #5a72fc | - | 15.07 | ayni-anahtar-bolunme | danimarka (sonra) |
| bohtan-emirligi | YENI-ANAHTAR | - | #d8842a | - | 30.08 | boyasiz-kunye | celili-musul (sonra) |
| bologna-komunu | DEGISIM | #af7b37 | #5a8a00 | 5.66 | 10.59 | komsu-cakisma | luksemburg-kontlugu (sonra) |
| bosna | DEGISIM | #0a0381 | #4e1e2a | 4.32 | 10.4 | komsu-cakisma | altinorda (sonra) |
| bosna-sirp-cumhuriyeti | DEGISIM | #c624a2 | #fc12ae | 9.67 | 15.43 | komsu-cakisma | bosna-hersek (sonra) |
| brandenburg-prusya | DEGISIM | #f7abe6 | #fc480c | 5.23 | 12.17 | komsu-cakisma | piombino (sonra) |
| bremen-sehri | DEGISIM | #94dbfa | #1eccde | 12.18 | 15.18 | su-yakin | erdel (sonra) |
| brixen-piskoposlugu | DEGISIM | #977ca7 | #00fc0c | 4.52 | 14.6 | komsu-cakisma | epir-despotlugu (sonra) |
| bulgar-carligi | DEGISIM | #62bbb0 | #fc6cfc | 5.14 | 8.23 | komsu-cakisma | provence-kontlugu (sonra) |
| bulgaristan-kralligi | DEGISIM | #e997b7 | #366c00 | 4.83 | 12.07 | komsu-cakisma | isvec (sonra) |
| bulgaristan-prensligi | DEGISIM | #58a652 | #126c0c | 7.62 | 15.04 | komsu-cakisma | rusya (sonra) |
| buyuk-polonya-dukaligi | DEGISIM | #2ca444 | #006c00 | 9.95 | 6.09 | komsu-cakisma | piza (sonra) |
| buyuk-selcuklu | DEGISIM | #24d87e | #004800 | 0.68 | 15.16 | komsu-cakisma | karmati (sonra) |
| cebel-durzi-devleti | YENI-ANAHTAR | - | #cc421e | - | 16.48 | boyasiz-kunye | buyuk-lubnan-devleti (sonra) |
| cekya | DEGISIM | #24bacc | #b490ae | 9.4 | 15.03 | komsu-cakisma | luksemburg (sonra) |
| cemisgezek-beyligi | DEGISIM | #24c6d2 | #fc00e4 | 2.68 | 15.27 | komsu-cakisma | karakoyunlu (sonra) |
| cenevre-cumhuriyeti | DEGISIM | #b77208 | #fc72f6 | 6.01 | 15.14 | komsu-cakisma | moravya-markgraflik (sonra) |
| cenub-i-garbi-kafkas | DEGISIM | #4ce69b | #36d272 | 10.8 | 15.26 | komsu-cakisma | gurcistan-demokratik-cumhuriyeti (sonra) |
| cezayir-fransiz | YENI-ANAHTAR | - | #0c66fc | - | 48.26 | ayni-anahtar-bolunme | OSMANLI tâbi (sonra) |
| chamba | DEGISIM | #1ca4f3 | #7800f0 | 0.0 | 15.31 | komsu-cakisma | karahitay (sonra) |
| cizre-botan | DEGISIM | #cc249c | #fc1272 | 6.36 | 15.1 | komsu-cakisma | kazak-hanligi (sonra) |
| cizre-emirligi | YENI-ANAHTAR | - | #d88a2a | - | 35.34 | boyasiz-kunye | OSMANLI tâbi (sonra) |
| cremona-komunu | DEGISIM | #399eb5 | #123036 | 3.91 | 10.08 | komsu-cakisma | hollanda-kontlugu (sonra) |
| cubukogullari | DEGISIM | #24d890 | #00de6c | 2.81 | 15.08 | komsu-cakisma | caka-beyligi (sonra) |
| dali-kralligi | DEGISIM | #2442d8 | #481e8a | 1.97 | 15.15 | komsu-cakisma | tien-le-hanedani (sonra) |
| dauphine-viennois | DEGISIM | #be684b | #fc1e06 | 6.93 | 15.38 | komsu-cakisma | alessandria-komunu (sonra) |
| dilmacogullari | DEGISIM | #24d85a | #00fc1e | 8.32 | 15.2 | komsu-cakisma | irak-selcuklu (sonra) |
| dogu-slavonya-untaes | DEGISIM | #c02496 | #66185a | 8.97 | 8.12 | komsu-cakisma | isvicre (sonra) |
| dos-pilas-petexbatun | DEGISIM | #6a8757 | #785a1e | 4.1 | 15.05 | komsu-cakisma | cholula (sonra) |
| duklja | DEGISIM | #c77bca | #846cfc | 7.15 | 8.11 | komsu-cakisma | tirol-kontlugu (sonra) |
| dulkadir | DEGISIM | #00838f | #004e72 | 7.69 | 12.2 | komsu-cakisma | sirbistan (sonra) |
| epir-despotlugu | DEGISIM | #24d2d8 | #06cc12 | 2.68 | 12.28 | komsu-cakisma | monako (sonra) |
| ermenistan-cumhuriyeti | DEGISIM | #24cc48 | #00ea66 | 9.92 | 15.54 | komsu-cakisma | irak-kralligi (sonra) |
| etrusk-sehir-devletleri | DEGISIM | #6c75e6 | #6c60f0 | 9.84 | 15.15 | komsu-cakisma | roma-imp (sonra) |
| euboea-negroponte | YENI-ANAHTAR | - | #de9cfc | - | 5.09 | ayni-anahtar-bolunme | muvahhidler (sonra) |
| fatimi | DEGISIM | #84a21e | #4e4200 | 6.98 | 15.16 | komsu-cakisma | ivrea-markizligi (sonra) |
| federe-olmayan-malay-devletleri | YENI-ANAHTAR | - | #f09c00 | - | 13.38 | ayni-anahtar-bolunme | ingiltere (sonra) |
| filistin-pentapolis | DEGISIM | #94ddfb | #48b4ae | 21.0 | 15.05 | su-yakin | fenike-sehirleri (sonra) |
| flandre | DEGISIM | #9e649a | #6cf006 | 4.73 | 8.02 | komsu-cakisma | polonya-erken (sonra) |
| fransiz-bati-afrika | YENI-ANAHTAR | - | #424e6c | - | 15.26 | ayni-anahtar-bolunme | fransa-cumhuriyet (sonra) |
| fransiz-ekvator-afrikasi | YENI-ANAHTAR | - | #0036fc | - | 23.14 | ayni-anahtar-bolunme | bamum (sonra) |
| gassani | DEGISIM | #94ddfb | #5ab4a8 | 23.68 | 15.24 | su-yakin | palmira (sonra) |
| gattilusio | DEGISIM | #f14a71 | #06fc06 | 6.45 | 15.2 | komsu-cakisma | epir-despotlugu (sonra) |
| gazneli | DEGISIM | #3624d8 | #004ef0 | 0.9 | 15.01 | komsu-cakisma | kerait (sonra) |
| gelre-dukaligi | DEGISIM | #2cc5fd | #0060fc | 7.25 | 9.56 | komsu-cakisma | tirol-kontlugu (sonra) |
| gence-hanligi | DEGISIM | #32a85f | #187206 | 6.21 | 15.02 | komsu-cakisma | karabag-hanligi (sonra) |
| gojoseon | YENI-ANAHTAR | - | #003666 | - | 15.08 | boyasiz-kunye | wei-devleti-zhou (sonra) |
| granada-ziriler | DEGISIM | #f685b2 | #6c1e06 | 6.84 | 12.26 | komsu-cakisma | normandiya (sonra) |
| greko-baktria | DEGISIM | #94ddfb | #5ac0b4 | 15.16 | 19.06 | su-yakin | yahya-donemleri (sonra) |
| guarani-misyonlari | DEGISIM | #94ddfb | #3cc6c6 | 18.71 | 15.09 | su-yakin | hollanda-brezilyasi (sonra) |
| guney-avustralya | YENI-ANAHTAR | - | #fc0ce4 | - | 43.88 | ayni-anahtar-bolunme | OSMANLI tâbi (sonra) |
| guney-osetya | DEGISIM | #2accd8 | #249ca2 | 8.34 | 15.43 | komsu-cakisma | sovyet-rusya (sonra) |
| guneybati-afrika-mandasi | YENI-ANAHTAR | - | #d89cea | - | 24.14 | ayni-anahtar-bolunme | ingiliz-svaziland (sonra) |
| gurlu | DEGISIM | #36d824 | #548400 | 0.92 | 15.01 | komsu-cakisma | kamag-mogol (sonra) |
| habsburg | DEGISIM | #198ab4 | #2412fc | 4.5 | 2.37 | komsu-cakisma | papalik (sonra) |
| hafsi | DEGISIM | #84bd51 | #1e9c72 | 2.33 | 10.18 | komsu-cakisma | milanoduka (sonra) |
| hainaut-kontlugu | DEGISIM | #d1d859 | #306000 | 1.95 | 8.81 | komsu-cakisma | piza (sonra) |
| halep-devleti | YENI-ANAHTAR | - | #a8605a | - | 19.48 | boyasiz-kunye | OSMANLI tâbi (sonra) |
| hammadiler | DEGISIM | #d26024 | #fc5400 | 4.22 | 15.02 | komsu-cakisma | barselona-kontlugu (sonra) |
| hannover | DEGISIM | #b5c66e | #303c3c | 8.71 | 13.35 | komsu-cakisma | saksonya (sonra) |
| hariphunchai | DEGISIM | #24d878 | #004e00 | 4.63 | 15.49 | komsu-cakisma | yuan-hanedani (sonra) |
| herodes-krallik | DEGISIM | #8fdefa | #5ac6ba | 46.89 | 39.03 | su-yakin | nabatiye (sonra) |
| hersek | DEGISIM | #24c6d8 | #00c6f6 | 8.1 | 15.17 | komsu-cakisma | sirp-despotlugu (sonra) |
| hessen-landgrafligi | DEGISIM | #94dbfa | #609690 | 9.22 | 13.76 | su-yakin | magdeburg-basepiskoposlugu (sonra) |
| hicaz-kralligi | DEGISIM | #3fb996 | #007842 | 7.91 | 15.3 | komsu-cakisma | filistin-mandasi (sonra) |
| hirvatistan-bagimsiz | DEGISIM | #348668 | #244212 | 7.33 | 15.22 | komsu-cakisma | italya (sonra) |
| hollanda-kontlugu | DEGISIM | #1eb4c6 | #003c66 | 3.14 | 10.06 | komsu-cakisma | bizans (sonra) |
| hou-liang-lu-guang | YENI-ANAHTAR | - | #de2496 | - | 16.93 | boyasiz-kunye | sonraki-qin (sonra) |
| hou-liang-xi-liang | DEGISIM | #33a09a | #00b4a2 | 6.47 | 15.19 | komsu-cakisma | kuzey-zhou (sonra) |
| hurmuz-sultanligi | DEGISIM | #24d2ba | #009c96 | 8.82 | 15.13 | komsu-cakisma | portekiz (sonra) |
| idrisi | DEGISIM | #7d6ce0 | #6c48de | 5.33 | 15.07 | komsu-cakisma | ifraniler-tilimsan (sonra) |
| inalogullari | DEGISIM | #24d824 | #60900c | 1.81 | 15.11 | komsu-cakisma | begteginli (sonra) |
| ingiliz-altin-kiyisi | YENI-ANAHTAR | - | #fc069c | - | 15.78 | ayni-anahtar-bolunme | dagbon (sonra) |
| ingiliz-becuanaland | YENI-ANAHTAR | - | #fc7efc | - | 30.74 | ayni-anahtar-bolunme | OSMANLI tâbi (sonra) |
| ingiliz-burma | YENI-ANAHTAR | - | #06fc00 | - | 17.1 | ayni-anahtar-bolunme | ingiliz-malaya (sonra) |
| ingiliz-guney-rodezya | YENI-ANAHTAR | - | #545478 | - | 5.57 | ayni-anahtar-bolunme | kongo-serbest-devleti (sonra) |
| ingiliz-kenya-kolonisi | YENI-ANAHTAR | - | #9600d2 | - | 42.46 | ayni-anahtar-bolunme | OSMANLI tâbi (sonra) |
| ingiliz-kuzey-rodezya | YENI-ANAHTAR | - | #5400fc | - | 16.15 | ayni-anahtar-bolunme | ovimbundu (sonra) |
| ingiliz-mezopotamya-idaresi | YENI-ANAHTAR | - | #6cc666 | - | 54.06 | boyasiz-kunye | OSMANLI tâbi (sonra) |
| ingiliz-nijerya | YENI-ANAHTAR | - | #9672f6 | - | 15.27 | ayni-anahtar-bolunme | fransiz-togo (sonra) |
| ingiliz-nyasaland | YENI-ANAHTAR | - | #5a129c | - | 29.84 | ayni-anahtar-bolunme | OSMANLI tâbi (sonra) |
| ingiliz-siyera-leon | YENI-ANAHTAR | - | #f03c9c | - | 19.55 | ayni-anahtar-bolunme | OSMANLI tâbi (sonra) |
| ingiliz-tanca | YENI-ANAHTAR | - | #b418ae | - | 28.45 | boyasiz-kunye | OSMANLI tâbi (sonra) |
| ingiltere | DEGISIM | #7e3d8f | #fc7200 | 6.54 | 8.59 | komsu-cakisma | macaristan (sonra) |
| irak-sam-islam-devleti | YENI-ANAHTAR | - | #d8902a | - | 37.01 | boyasiz-kunye | OSMANLI tâbi (sonra) |
| isin | DEGISIM | #94ddfb | #54c6ba | 18.22 | 15.11 | su-yakin | esnunna (sonra) |
| iskenderun-sancagi-ozel-idare | YENI-ANAHTAR | - | #d2c018 | - | 22.82 | boyasiz-kunye | buyuk-lubnan-devleti (sonra) |
| ispanyol-halkulvad | YENI-ANAHTAR | - | #9636a8 | - | 15.22 | boyasiz-kunye | zeyyani (sonra) |
| ispanyol-oran-1 | YENI-ANAHTAR | - | #9c3cae | - | 15.31 | boyasiz-kunye | zeyyani (sonra) |
| ispanyol-oran-2 | YENI-ANAHTAR | - | #b430c0 | - | 27.76 | boyasiz-kunye | tunus-ocagi (sonra) |
| isvec | DEGISIM | #48eac3 | #007e12 | 7.29 | 10.18 | komsu-cakisma | karadag (sonra) |
| isvicre | DEGISIM | #eda2ae | #66308a | 4.16 | 8.12 | komsu-cakisma | dogu-slavonya-untaes (sonra) |
| italya-napolyon | DEGISIM | #3f8f8a | #2aa29c | 7.56 | 11.8 | komsu-cakisma | schleswig-holstein (sonra) |
| italyan-dogu-afrikasi | YENI-ANAHTAR | - | #0c4200 | - | 15.39 | ayni-anahtar-bolunme | suudi-arabistan (sonra) |
| italyan-somali | YENI-ANAHTAR | - | #001efc | - | 15.23 | ayni-anahtar-bolunme | kesiri-sultanligi (sonra) |
| itilaf-emaneti | DEGISIM | #b0863a | #3c3c00 | 9.25 | 15.47 | komsu-cakisma | bulgaristan-kralligi (sonra) |
| ivrea-markizligi | DEGISIM | #678c45 | #063c1e | 6.97 | 15.16 | komsu-cakisma | fatimi (sonra) |
| japon-kore | YENI-ANAHTAR | - | #003c42 | - | 16.29 | ayni-anahtar-bolunme | rusya-gecici-hukumet (sonra) |
| japon-tayvani | YENI-ANAHTAR | - | #00d87e | - | 15.23 | ayni-anahtar-bolunme | meiji-japonya (sonra) |
| kabartay | DEGISIM | #0c5a84 | #606600 | 9.6 | 15.02 | komsu-cakisma | gence-hanligi (sonra) |
| kabis-emirligi | DEGISIM | #39c3bf | #728a8a | 5.76 | 8.53 | komsu-cakisma | saluzzo (sonra) |
| kafkas-arnavutlugu-krallik | YENI-ANAHTAR | - | #d8962a | - | 34.14 | boyasiz-kunye | iberya-kartli (sonra) |
| kaheti-hereti-kralligi | YENI-ANAHTAR | - | #48d206 | - | 24.54 | boyasiz-kunye | lori-kralligi (sonra) |
| kaheti-kralligi | DEGISIM | #5ad224 | #8afc1e | 8.39 | 15.05 | komsu-cakisma | turkmen (sonra) |
| kakuyi | DEGISIM | #4e24d8 | #7e6cf6 | 0.92 | 15.21 | komsu-cakisma | ukayli (sonra) |
| kalacuri-ratnapura | DEGISIM | #3fbf99 | #fcba06 | 6.88 | 15.45 | komsu-cakisma | launggyet (sonra) |
| kanada | DEGISIM | #24d2c6 | #0ca290 | 7.3 | 15.02 | komsu-cakisma | portekiz (sonra) |
| kanosa-hanedani | DEGISIM | #1bc9b4 | #002afc | 3.27 | 13.04 | komsu-cakisma | papalik (sonra) |
| kanva | DEGISIM | #94ddfb | #5abaae | 17.26 | 15.85 | su-yakin | indo-grek (sonra) |
| kasim | DEGISIM | #fa78a4 | #fc425a | 6.23 | 15.06 | komsu-cakisma | kazak-hanligi (sonra) |
| kerma | DEGISIM | #94ddfb | #6cc0ae | 21.0 | 19.17 | su-yakin | misir-yeni-krallik (sonra) |
| kibris-ingiliz-ussler | DEGISIM | #4ea81e | #726012 | 11.9 | 15.13 | komsu-cakisma | suudi-arabistan (sonra) |
| kibris-krallik | DEGISIM | #846cdd | #721e6c | 8.6 | 15.06 | komsu-cakisma | lusignan (sonra) |
| kibris-turk-federe-devleti | DEGISIM | #24cc42 | #00c04e | 8.69 | 15.07 | komsu-cakisma | irak-kralligi (sonra) |
| kktc | DEGISIM | #7824cc | #662a9c | 1.7 | 15.05 | komsu-cakisma | tbmm-turkiye (sonra) |
| koch-bihar | YENI-ANAHTAR | - | #f6f606 | - | 15.39 | boyasiz-kunye | kolhapur (sonra) |
| kolcak-omsk-hukumeti | YENI-ANAHTAR | - | #d8a82a | - | 43.76 | boyasiz-kunye | OSMANLI tâbi (sonra) |
| kongo-serbest-devleti | DEGISIM | #94ddfb | #6c669c | 12.97 | 15.2 | su-yakin | alman-kamerun (sonra) |
| kosova-golge-cumhuriyeti | DEGISIM | #1818de | #2a12fc | 6.14 | 15.19 | komsu-cakisma | san-marino (sonra) |
| kosta-rika-cumhuriyeti | DEGISIM | #3f7fb8 | #5a6096 | 10.28 | 15.07 | komsu-cakisma | belize (sonra) |
| kuzey-bolgesi-sa | YENI-ANAHTAR | - | #a25424 | - | 15.22 | ayni-anahtar-bolunme | avustralya (sonra) |
| langkasuka | DEGISIM | #66d82a | #84fc24 | 10.41 | 15.04 | komsu-cakisma | srivijaya (sonra) |
| launggyet | DEGISIM | #b4a645 | #fc8406 | 10.27 | 15.41 | komsu-cakisma | buton (sonra) |
| liang-guney | DEGISIM | #adc8fd | #de9cb4 | 4.13 | 15.45 | komsu-cakisma | tuyuhun (sonra) |
| liege-piskoposlugu | DEGISIM | #d4adf9 | #78068a | 7.4 | 10.07 | komsu-cakisma | modena (sonra) |
| ligurya-cumhuriyeti | DEGISIM | #f14a71 | #8a0066 | 6.45 | 13.14 | komsu-cakisma | salzburg-baspiskoposlugu (sonra) |
| ljubljana-ili | DEGISIM | #df3f48 | #f00624 | 5.81 | 15.14 | komsu-cakisma | macaristan-naiplik (sonra) |
| lorraine-dukaligi | DEGISIM | #7d7f4e | #fc005a | 8.42 | 8.38 | komsu-cakisma | lucca-cumhuriyeti (sonra) |
| lucca-cumhuriyeti | DEGISIM | #cc24b4 | #fc0c84 | 4.24 | 8.21 | komsu-cakisma | foix-kontlugu (sonra) |
| luksemburg-dukaligi | DEGISIM | #f8c054 | #fc0c00 | 7.31 | 15.19 | komsu-cakisma | brandenburg-prusya (sonra) |
| luksemburg-hollanda-birligi | DEGISIM | #b0e15c | #eafc66 | 10.88 | 15.19 | komsu-cakisma | avusturya (sonra) |
| macaristan | DEGISIM | #20d880 | #fc9000 | 0.68 | 7.22 | komsu-cakisma | nogay (sonra) |
| magdeburg-basepiskoposlugu | DEGISIM | #fe953f | #8a785a | 6.87 | 11.26 | komsu-cakisma | ceneviz (sonra) |
| maitraka | DEGISIM | #17def8 | #6cc690 | 6.08 | 15.36 | komsu-cakisma | kalabhra (sonra) |
| makao-portekiz | YENI-ANAHTAR | - | #128490 | - | 15.35 | ayni-anahtar-bolunme | meiji-japonya (sonra) |
| malaga-hammudiler | DEGISIM | #b9b552 | #f0a824 | 5.32 | 15.29 | komsu-cakisma | niebla (sonra) |
| malaya-birligi | YENI-ANAHTAR | - | #0cfc06 | - | 15.67 | ayni-anahtar-bolunme | ingiliz-malaya (sonra) |
| manica | DEGISIM | #d224c0 | #de00cc | 2.83 | 15.02 | komsu-cakisma | mapungubwe (sonra) |
| megrelya-prensligi | DEGISIM | #ccc624 | #f64e00 | 5.5 | 15.43 | komsu-cakisma | kafkas-imamligi (sonra) |
| mervani | DEGISIM | #d2b424 | #f0de12 | 1.75 | 15.08 | komsu-cakisma | danismendli (sonra) |
| mikronezya-federe-devletleri | DEGISIM | #24ccba | #1290a2 | 6.12 | 15.02 | komsu-cakisma | sovyet-rusya (sonra) |
| milano-dukaligi | DEGISIM | #cda54f | #fcc000 | 6.09 | 12.86 | komsu-cakisma | livonya-tarikati (sonra) |
| milanoduka | DEGISIM | #515d9c | #006042 | 6.39 | 8.22 | komsu-cakisma | bretanya (sonra) |
| misir-28-30-hanedan | DEGISIM | #94ddfb | #6cbaa8 | 29.38 | 19.27 | su-yakin | kush-krallik (sonra) |
| misir-gazze-idaresi | YENI-ANAHTAR | - | #54c6b4 | - | 33.77 | boyasiz-kunye | lubnan-cumhuriyeti (sonra) |
| modena-komunu | DEGISIM | #9581e3 | #062aea | 4.7 | 11.02 | komsu-cakisma | toulouse (sonra) |
| moldova | DEGISIM | #2436cc | #3c3c5a | 7.37 | 15.07 | komsu-cakisma | fransa-cumhuriyet (sonra) |
| moriori | DEGISIM | #94ddfb | #66c6b4 | 23.92 | 15.34 | su-yakin | tahiti (sonra) |
| multan-emirligi | DEGISIM | #de5b98 | #8a488a | 6.39 | 15.0 | komsu-cakisma | tomara (sonra) |
| muntefik-basra | YENI-ANAHTAR | - | #d8ae2a | - | 45.46 | boyasiz-kunye | OSMANLI tâbi (sonra) |
| murabitlar | DEGISIM | #6cd224 | #9072fc | 2.67 | 9.36 | komsu-cakisma | tirol-kontlugu (sonra) |
| musafiri | DEGISIM | #5ad824 | #068a06 | 0.98 | 15.05 | komsu-cakisma | hamdani-halep (sonra) |
| muvahhidler | DEGISIM | #c024d2 | #d27ede | 3.74 | 13.74 | komsu-cakisma | murabitlar (sonra) |
| nahcivan-hanligi | DEGISIM | #5ae9c3 | #2accd2 | 4.62 | 15.07 | komsu-cakisma | revan-hanligi (sonra) |
| naksa-dukaligi | DEGISIM | #126ca2 | #4800fc | 6.43 | 6.62 | komsu-cakisma | papalik (sonra) |
| natufiyen | DEGISIM | #c97d7a | #cc7e7e | 22.3 | 22.12 | komsu-cakisma | OSMANLI tâbi (sonra) |
| nauru-vesayeti | YENI-ANAHTAR | - | #604230 | - | 23.62 | ayni-anahtar-bolunme | OSMANLI tâbi (sonra) |
| neustria | DEGISIM | #b162b4 | #722466 | 8.77 | 11.85 | komsu-cakisma | spoleto-dukaligi (sonra) |
| nikaragua-cumhuriyeti | DEGISIM | #7a5cc4 | #7e54c0 | 8.88 | 15.21 | komsu-cakisma | kosta-rika-cumhuriyeti (sonra) |
| nizari-suriye | DEGISIM | #7582b6 | #5a6c6c | 7.55 | 15.01 | komsu-cakisma | boriler (sonra) |
| nkore | DEGISIM | #24deae | #6c906c | 7.48 | 15.1 | komsu-cakisma | alman-dogu-afrikasi (sonra) |
| normandiya | DEGISIM | #e0c96d | #a81e00 | 5.11 | 12.26 | komsu-cakisma | granada-ziriler (sonra) |
| norvec-1814 | DEGISIM | #a36675 | #8a789c | 8.65 | 15.13 | komsu-cakisma | macaristan-habsburg (sonra) |
| oeta-bati-fransiz | YENI-ANAHTAR | - | #ae6660 | - | 20.11 | boyasiz-kunye | OSMANLI tâbi (sonra) |
| oeta-guney | YENI-ANAHTAR | - | #4ec0ae | - | 49.89 | boyasiz-kunye | OSMANLI tâbi (sonra) |
| oniki-ada-italyan | YENI-ANAHTAR | - | #66fc00 | - | 16.1 | ayni-anahtar-bolunme | vatikan (sonra) |
| orkney-kontlugu | DEGISIM | #82d8a4 | #00d25a | 11.26 | 15.23 | komsu-cakisma | izlanda-norvec-danimarka (sonra) |
| ozak | DEGISIM | #189046 | #ba90a8 | 11.8 | 15.28 | komsu-cakisma | luksemburg (sonra) |
| padova-komunu | DEGISIM | #b16f76 | #00c6cc | 1.42 | 13.89 | komsu-cakisma | piacenza-komunu (sonra) |
| papalik | DEGISIM | #2a4b1e | #2a0cfc | 4.32 | 2.37 | komsu-cakisma | habsburg (sonra) |
| partenopea-cumhuriyeti | DEGISIM | #9364b8 | #78364e | 6.54 | 15.05 | komsu-cakisma | hannover (sonra) |
| pereyaslavl-knezligi | DEGISIM | #94ddfb | #1ed2d2 | 15.34 | 15.22 | su-yakin | galicya-volhinya (sonra) |
| piza | DEGISIM | #2ac9a8 | #00600c | 3.27 | 6.09 | komsu-cakisma | buyuk-polonya-dukaligi (sonra) |
| polonya-erken | DEGISIM | #6cea0c | #a2fc06 | 9.05 | 8.02 | komsu-cakisma | flandre (sonra) |
| polonya-genel-hukumeti | YENI-ANAHTAR | - | #e406e4 | - | 15.11 | ayni-anahtar-bolunme | finlandiya-demokratik-cumhuriyeti (sonra) |
| polonya-naiplik-kralligi | YENI-ANAHTAR | - | #fc3012 | - | 22.99 | boyasiz-kunye | OSMANLI tâbi (sonra) |
| portekiz-angola | YENI-ANAHTAR | - | #78fc00 | - | 15.29 | ayni-anahtar-bolunme | nri (sonra) |
| portekiz-gine | YENI-ANAHTAR | - | #2a4860 | - | 15.51 | ayni-anahtar-bolunme | fransa-cumhuriyet (sonra) |
| portekiz-hindistani-goa | YENI-ANAHTAR | - | #00d89c | - | 15.3 | ayni-anahtar-bolunme | racput (sonra) |
| portekiz-mozambik | YENI-ANAHTAR | - | #00fc00 | - | 15.37 | ayni-anahtar-bolunme | rozvi (sonra) |
| provence-kontlugu | DEGISIM | #cc24c6 | #f04efc | 1.41 | 8.23 | komsu-cakisma | bulgar-carligi (sonra) |
| queensland | YENI-ANAHTAR | - | #482418 | - | 21.38 | ayni-anahtar-bolunme | OSMANLI tâbi (sonra) |
| revvadi | DEGISIM | #48d824 | #36f600 | 0.95 | 15.09 | komsu-cakisma | samani (sonra) |
| rostov-knezligi | DEGISIM | #32a85f | #06cc84 | 5.71 | 15.17 | komsu-cakisma | bogdan (sonra) |
| sakiz-maona | DEGISIM | #68ec93 | #063612 | 7.72 | 8.61 | komsu-cakisma | burhaneddin (sonra) |
| saksonya | DEGISIM | #6c9c18 | #303600 | 6.09 | 8.91 | komsu-cakisma | ceneviz (sonra) |
| salgurlu | DEGISIM | #5a24d8 | #c078fc | 0.94 | 15.02 | komsu-cakisma | cagatay (sonra) |
| saluzzo | DEGISIM | #9c5a1e | #66a28a | 5.66 | 8.53 | komsu-cakisma | kabis-emirligi (sonra) |
| salzburg-baspiskoposlugu | DEGISIM | #f6360c | #ba0096 | 5.86 | 6.25 | komsu-cakisma | mora-despotlugu (sonra) |
| sam-devleti | YENI-ANAHTAR | - | #9c544e | - | 18.28 | boyasiz-kunye | OSMANLI tâbi (sonra) |
| san-devletleri | DEGISIM | #0f5d48 | #f6ba00 | 7.42 | 15.17 | komsu-cakisma | fransa (sonra) |
| schleswig-holstein | DEGISIM | #03a6ff | #00667e | 9.23 | 10.46 | komsu-cakisma | roma-cumhuriyeti-1798 (sonra) |
| schwaben-dukaligi | DEGISIM | #d84278 | #362a9c | 1.77 | 10.03 | komsu-cakisma | albarracin (sonra) |
| seki-hanligi | DEGISIM | #94dbfa | #6c788a | 14.43 | 15.35 | su-yakin | benihalid (sonra) |
| selinous | DEGISIM | #94dbfa | #0078d2 | 13.89 | 15.22 | su-yakin | megara-hyblaia (sonra) |
| septinsular | DEGISIM | #4d82a8 | #005472 | 4.96 | 15.01 | komsu-cakisma | sirbistan-prensligi (sonra) |
| singapur-kolonisi | YENI-ANAHTAR | - | #188a24 | - | 15.57 | ayni-anahtar-bolunme | sarawak-brooke (sonra) |
| sirbistan-kralligi | DEGISIM | #9d7e1f | #c6f000 | 7.46 | 15.17 | komsu-cakisma | avusturya-cumhuriyet (sonra) |
| sirp-krajina-cumhuriyeti | DEGISIM | #ae48d8 | #fc8a8a | 6.37 | 15.27 | komsu-cakisma | malta (sonra) |
| sirvansah | DEGISIM | #d2cc24 | #fc4e00 | 4.13 | 10.05 | komsu-cakisma | haciemir (sonra) |
| sistan-mihribani | YENI-ANAHTAR | - | #d8cc2a | - | 19.08 | boyasiz-kunye | yezd-atabegligi (sonra) |
| slovakya-cumhuriyeti | DEGISIM | #d86624 | #fce400 | 8.18 | 15.95 | komsu-cakisma | salo-cumhuriyeti (sonra) |
| spoleto-dukaligi | DEGISIM | #9195e8 | #4e243c | 1.96 | 10.35 | komsu-cakisma | burgonya (sonra) |
| strathclyde | DEGISIM | #fb6acc | #f62aa2 | 3.7 | 15.06 | komsu-cakisma | maine-kontlugu (sonra) |
| sunik-kralligi | YENI-ANAHTAR | - | #96de24 | - | 25.01 | boyasiz-kunye | lori-kralligi (sonra) |
| suriye-arap-cumhuriyeti | DEGISIM | #24de1e | #18fc2a | 7.52 | 15.03 | komsu-cakisma | irak-kralligi (sonra) |
| suriye-selcuklu | DEGISIM | #24d884 | #009036 | 1.4 | 15.11 | komsu-cakisma | caka-beyligi (sonra) |
| suud-ikinci | DEGISIM | #c67747 | #a82a00 | 6.87 | 15.15 | komsu-cakisma | hail-ibn-ali (sonra) |
| suudi-arabistan | DEGISIM | #9a8812 | #4e7e06 | 7.13 | 15.13 | komsu-cakisma | kibris-ingiliz-ussler (sonra) |
| tahiti | DEGISIM | #24d8ae | #00d2d2 | 5.14 | 15.17 | komsu-cakisma | meksika (sonra) |
| tang | DEGISIM | #6ebffc | #004e6c | 3.19 | 15.48 | komsu-cakisma | hamsavati-pegu (sonra) |
| tebai-11-hanedan | DEGISIM | #94ddfb | #48bab4 | 31.84 | 21.69 | su-yakin | kerma-erken (sonra) |
| teuton-devleti | DEGISIM | #cc24cc | #ea2aba | 1.41 | 7.18 | komsu-cakisma | salzburg-baspiskoposlugu (sonra) |
| thuringia-landgrafligi | DEGISIM | #f04766 | #8a6c60 | 7.06 | 12.14 | komsu-cakisma | ceneviz (sonra) |
| tikal-mutul | DEGISIM | #d585fc | #fc90cc | 4.98 | 15.28 | komsu-cakisma | uxmal (sonra) |
| tilantongo-mixtek | DEGISIM | #8ad82a | #b4fc1e | 5.24 | 15.12 | komsu-cakisma | azcapotzalco-tepanek (sonra) |
| tirol-kontlugu | DEGISIM | #c0db73 | #4e6cfc | 6.34 | 8.11 | komsu-cakisma | duklja (sonra) |
| tohar-yabgu | DEGISIM | #6fd9ca | #06d2c6 | 4.98 | 15.57 | komsu-cakisma | harsha (sonra) |
| toledo-zunnunler | DEGISIM | #8ee88a | #06d884 | 9.63 | 15.23 | komsu-cakisma | napoli-dukaligi (sonra) |
| tortosa-lleida | DEGISIM | #279264 | #06cccc | 3.56 | 15.14 | komsu-cakisma | irlanda (sonra) |
| toskana-markizligi | DEGISIM | #bf8f27 | #4e8a06 | 2.63 | 10.06 | komsu-cakisma | northumbria (sonra) |
| toulouse | DEGISIM | #6382c8 | #0054fc | 2.31 | 10.19 | komsu-cakisma | tirol-kontlugu (sonra) |
| travankur | DEGISIM | #723cc6 | #1860fc | 11.34 | 15.03 | komsu-cakisma | golkonda (sonra) |
| trinh-lordlari | YENI-ANAHTAR | - | #9cfc06 | - | 15.9 | boyasiz-kunye | le-hanedani (sonra) |
| tripura-manikya | YENI-ANAHTAR | - | #f6fc06 | - | 16.34 | boyasiz-kunye | kolhapur (sonra) |
| tunus | DEGISIM | #fe953f | #724e00 | 7.72 | 15.66 | komsu-cakisma | andorra (sonra) |
| tunus-benihorasan | DEGISIM | #f17ff0 | #a2fc0c | 4.85 | 15.03 | komsu-cakisma | ziriler (sonra) |
| tunus-beyligi-fransiz | DEGISIM | #54d224 | #c096f0 | 0.98 | 15.39 | komsu-cakisma | libya-fransiz-fizan (sonra) |
| tunus-ocagi | DEGISIM | #08867d | #c696cc | 5.09 | 13.55 | komsu-cakisma | toskana (sonra) |
| turk-misir-sudani | DEGISIM | #94dbfa | #6c8a8a | 16.26 | 15.35 | su-yakin | beja-krallik (sonra) |
| ukrayna | DEGISIM | #d22a24 | #fc0c1e | 1.74 | 15.06 | komsu-cakisma | macaristan-naiplik (sonra) |
| unmik-kosova | DEGISIM | #cc24a2 | #f60ca8 | 9.49 | 15.47 | komsu-cakisma | belcika (sonra) |
| uruk-erken-hanedan | DEGISIM | #94ddfb | #5aaea2 | 23.43 | 15.44 | su-yakin | umma-erken-hanedan (sonra) |
| utrecht-piskoposlugu | DEGISIM | #9ea4f6 | #de72fc | 2.35 | 10.86 | komsu-cakisma | aragon (sonra) |
| van-diemens-land | YENI-ANAHTAR | - | #f0a248 | - | 15.11 | ayni-anahtar-bolunme | ingiltere (sonra) |
| veligosti-damala-baronluk | DEGISIM | #96794f | #606c24 | 7.69 | 12.14 | komsu-cakisma | ceneviz (sonra) |
| vietnam-dc | DEGISIM | #d82424 | #de181e | 11.71 | 15.0 | komsu-cakisma | fransiz-cinhindi (sonra) |
| viktorya-kolonisi | YENI-ANAHTAR | - | #d23600 | - | 15.22 | ayni-anahtar-bolunme | ingiltere (sonra) |
| visconti | DEGISIM | #ccb424 | #f6c000 | 4.76 | 10.67 | komsu-cakisma | aydin (sonra) |
| waterford-norse | DEGISIM | #d1d056 | #e49cba | 1.95 | 15.05 | komsu-cakisma | endulus-emevi (sonra) |
| wessex | DEGISIM | #58e9ca | #90c600 | 8.92 | 15.25 | komsu-cakisma | powys (sonra) |
| xi-liang-li-gao | YENI-ANAHTAR | - | #96de2a | - | 16.39 | boyasiz-kunye | kuzey-wei (sonra) |
| xiazhou-dangxiang | DEGISIM | #4ca0d5 | #0cb4cc | 5.47 | 15.6 | komsu-cakisma | gansu-uygur (sonra) |
| xochicalco | DEGISIM | #94ddfb | #0c90a8 | 16.94 | 15.05 | su-yakin | copan (sonra) |
| yemen-zeydi | DEGISIM | #9ec97a | #00fc3c | 6.24 | 15.18 | komsu-cakisma | somaliland-1960 (sonra) |
| yeni-zelanda | DEGISIM | #d828c0 | #ea24b4 | 10.6 | 15.1 | komsu-cakisma | abd (sonra) |
| yezd-atabegligi | DEGISIM | #c6d824 | #fcfc00 | 1.1 | 15.22 | komsu-cakisma | abbasi (sonra) |
| yunanistan-gecici-demokratik-hukumet | DEGISIM | #cc8a24 | #a24800 | 5.17 | 15.13 | komsu-cakisma | arnavutluk-halk-cumhuriyeti (sonra) |
| zeta | DEGISIM | #6624d2 | #de00f0 | 9.33 | 15.1 | komsu-cakisma | san-marino (sonra) |
| kuzey-borneo | DEGISIM | #cb7d04 | #c08400 | 12.5 | 15.06 | artik-cakisma-2.tur | ingiltere (sonra) |
| somali-cumhuriyeti | DEGISIM | #d87824 | #a25406 | 12.24 | 15.31 | artik-cakisma-2.tur | umman-zengibar (sonra) |
| andorra | DEGISIM | #de9018 | #962a00 | 5.7 | 8.06 | artik-cakisma-2.tur | fiume-serbest-devleti (sonra) |
| piombino | DEGISIM | #d86c24 | #de662a | 6.87 | 10.29 | artik-cakisma-2.tur | navarra (sonra) |
| satavahana | DEGISIM | #4090c0 | #126c96 | 19.32 | 21.46 | artik-cakisma-2.tur | indo-grek (sonra) |
| botsvana | DEGISIM | #d87e24 | #a8722a | 12.32 | 15.14 | artik-cakisma-2.tur | rodezya-udi (sonra) |
| part | DEGISIM | #cd5456 | #a85a66 | 9.78 | 15.11 | artik-cakisma-2.tur | roma-cumhuriyeti (sonra) |
