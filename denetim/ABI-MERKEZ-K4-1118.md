# ABİ MERKEZ — 4. derece (`k:4`) yerleşimlerin bağlanması · 18 Kasım 2026

**Makine:** EMRELİC · **Dal:** `claude/abi-merkez-k4-9f4f01` (origin'e itildi, `main`e itilmedi; birleştirme KASA'da)
**Ölçüm ağacı:** worktree `affectionate-sanderson-6b5b66`, taban `2c47a1d22` (origin/main ile fark 0, 18 Kasım).
**Görev:** Emre'nin 18 Kasım kararı. Merkez kuralı (`_merkez_disi`) kalkmadan önce her k:4 yerleşime, toprak el değiştirirken birlikte hareket ettiği k≤3 "abi merkez" atanacak.

## Özet sayılar

| karar | sayı | ne yapıldı |
|---|---:|---|
| **BAĞLI** (mevcut `m:` zinciri k1-3 merkeze kapanıyor) | **586** | dokunulmadı; 219'u işaretli (aşağıda) |
| **YENİ BAĞLANAN** | **85** | `m:` + kayıt düzeyi `kaynak:` notu yazıldı |
| · 2 günden yakın (Emre: "kesin bağlanır") | 65 | |
| · 2-5 gün, coğrafî birliktelik | 20 | BEYANLI YAKLAŞIKLIK |
| · (bunların 3'ü eşleşmeyen `m:"Lutsk"` düzeltmesi: Kovel, Volodymyr-Volynskyi, Rivne) | | |
| **BELİRSİZ** | **99** | yazılmadı |
| · deniz/ulaşılamaz (ada, uzak kale) | 22 | |
| · 2-5 gün ama iki aday yakın | 35 | |
| · 2-5 gün ama en yakınla sahiplik uyumu < %90 | 14 | |
| · en yakın merkez 5 günden uzak | 28 | |
| **k:3'e YÜKSELTME ÖNERİSİ** (TDV: kendi başına kaza ya da sancak merkezi) | **53** | önerildi, veriye **yazılmadı** (37 kaza + 16 sancak) |

Toplam 770 = 586 + 85 + 99. Yükseltme önerisi bu üç kovanın içindedir (51'i BAĞLI, 2'si YENİ).
Sonra: `m:`siz k:4 180 → **98** (98'i BELİRSİZ; 99. BELİRSİZ Lošinj, `m:` k:4 olan Cres'e gidiyor), eşleşmeyen `m:` 3 → **0**.

## Yöntem

1. **Liste:** `girdi.yukle()` → 5649 nokta, k1-3 merkez 2148, k0 2731, **k4 770**. (Görev metnindeki dağılımla aynı.)
2. **Mevcut bağ (a):** `m:` zinciri izlendi. 586 → k1-3'e kapanıyor (k2 477 · k1 82 · k3 27); 180 `m:` yok; 3 `m:` hiçbir kayıt adına eşleşmiyor (`"Lutsk"` ↔ kayıt adı `"Lutsk (Łuck)"`); 1 zincir k:4'te bitiyor (Lošinj → Cres). `kd:` taşıyan k4: 152, bunların 4'ünde k:3 dönemi var. Kayıt düzeyi `kaynak:` taşıyan k4: 275.
3. **En yakın iki merkez (b):** kuş uçuşu en yakın 6 k1-3 merkez; sonra bunların ilk 5'i ve `m:` merkezi için **DEM yürüyüşü**: `arac/maliyet.py` `surtunme_dem` (ETOPO 2022 30″, eğim çarpanı, nehir bedeli, deniz geçilmez) + `maliyet_mesafe_np`, 0,03° ızgara, 10°'lik karolar + 3,5° pay. Birim motorunkiyle aynı: **1 gün = 8 saat × 5,04 km/saat = 40,3 km-eşdeğeri** (`uret_petek.py:1210,1558`). Koşu 2,5 saat (770 nokta, 60 karo).
   ⚠️ Bu motorun kendi yürüyüşü DEĞİLDİR; aynı birimle yapılmış prototip ölçümüdür. Karo/pay dışında kalan merkez "ölçülmedi" sayıldı.
4. **Sahiplik uyumu:** k4 ile aday merkez, 1281-1923 arası 5 yılda bir (129 gün) örnek günde, ikisi de sahipliyken sahibi aynı mı. Bu kaynak değildir, atlasın kendi tutarlılığıdır; yalnız iki aday arasında seçimde ve uyarıda kullanıldı.
5. **Karar kuralı** (Emre'nin ölçütü + benim işletmem — ikincisi tartışmaya açık):
   - Mevcut `m:` zinciri k1-3'e kapanıyorsa → BAĞLI (idarî bağ; dokunulmadı).
   - Yoksa en yakın (yürüyüşle) merkez **< 2 gün** → YENİ, o merkeze. *Benim eklemem:* en yakınla uyum < %90 ve 2 gün içinde uyumu ≥ %90 olan başka merkez varsa o seçildi (3 vaka: İshakçı → Babadağı, Şeyh Salû-yi Ulyâ → Mâku, Kılkış → Yenice-i Vardar).
   - **2-5 gün** → kaynak taranmadıysa coğrafî birliktelik: ikinci aday en az **1 gün** daha uzak VE uyum ≥ %90 ise YENİ (BEYANLI YAKLAŞIKLIK); değilse BELİRSİZ. ("1 gün" ve "%90" eşikleri benimdir, Emre'nin değil.)
   - **> 5 gün** ya da ölçülemedi → BELİRSİZ.
6. **Kaynak:** Osmanlı dönemi olan 251 k:4 şehir/kasaba için TDV taraması (3 Sonnet alt ajanı, WebFetch). TDV curl'e 403, WebFetch'e ~40 istekten sonra 429/503 verdi ⇒ **136 satır taranamadı**. Sonuç: KAZA 37 · SANCAK 16 · NAHİYE/KÖY 3 · BELİRSİZ 9 · BULUNAMADI 50 · TARANMADI 136.
   ⚠️ WebFetch sayfayı küçük modelle özetliyor; alıntılar birebir değil. "BULUNAMADI" çoğu zaman "o yazımla madde açılmadı" demek (Elmalı, İnegöl, Keşan gibi maddesi olması beklenen yerler var) — "TDV'de yok" diye okunmamalı.

## Veriye yazılan

85 kayıt, 23 dosya (`data/yerlesimler*.js`). Her birine:
- `m:"<abi merkez>"` (k:4'ün hemen ardına; `m:null` olan 12 kayıtta null'un yerine; eşleşmeyen 3 `"Lutsk"` → `"Lutsk (Łuck)"`)
- kayıt düzeyi `kaynak:` (varsa sonuna ` · ` ile eklendi): `ABİ MERKEZ: <merkez> — <kural>; DEM yürüyüşü X gün (...), ikinci aday Y Z gün; kaynakta idarî bağ bulunamadı. BEYANLI YAKLAŞIKLIK (denetim/ABI-MERKEZ-K4-1118.md)`
- `girdi.yukle()` ile geri okundu: 85/85 `m:` doğru, 85/85 `kaynak:` notu içeriyor. (Râbiğ'de düzenleyici kayıt düzeyindeki ikinci `kaynak:`ı kaçırdı, ikinci anahtar notu ezecekti — elle düzeltildi, yeniden doğrulandı.)
- `k:` hiçbir kayıtta değiştirilmedi. `kd:` yazılmadı (tarihli bağ değişimi kaynakta bulunmadı; uydurulmadı).
- Motor dosyalarına (`uret_petek`/`renkler`/`girdi`/`motor_onbellek`) dokunulmadı; koşu başlatılmadı. `paketle yenile`/`surum_damgala` koşturulmadı (yazma makinesi; KASA birleştirirken yapar).

**`py arac/denetle.py`:** önce **0** (temiz) · sonra ****0** (temiz; Değişmez 1: 210 sahipsiz = beklenen, Değişmez 2: 0 açık)**.
`Sayaç · m:/egemen uyuşmazlığı` (Değişmez 3, tavansız şema borcu): önce 586 · sonra **603** (+17; bu dalda yalnız `m:`/`kaynak:` değiştiği için artış yeni bağlardan geliyor: k4 ile abi merkezin sahibi bazı ölçüm günlerinde ayrışıyor. İhlal değil, tavansız borç sayacı; Ek C1'deki uyum sütunu adayları gösterir. Hangi 17 olduğu kayıt kayıt ayrıştırılmadı).

## BAĞLI 586 içindeki işaretler — ileride bakılmalı

- `m:` merkezine yürüyüş: <2 gün 100 · 2-5 gün 214 · >5 gün 109 · ölçülmedi (kutu dışı/ulaşılamaz) 163.
- **73** kayıtta `m:` merkezi 5 günden uzak (ya da ölçülemedi) ama 2 günden yakın başka bir k1-3 merkez var. `m:` idarî bağ olduğu için değiştirilmedi; motor ileride toprağı `m:`ye devrederse bu 73'te toprak uzak merkezin kaderini izler.
- **170** kayıtta k4 ile `m:` merkezinin sahiplik zinciri < %90 uyuşuyor. Emre'nin korktuğu durum tam bu: abi merkez başka devlete geçiyor, küçük yer geçmiyor (ya da tersi). Ya gerçek sınır vakası (kale, eksklav) ya da veri hatası. Ek C3'te tek tek.
- TDV'nin verdiği bağ ile `m:` bazen ayrışıyor (örnek: Adapazarı `m:"İstanbul"`, TDV: İzmit sancağı; Bergama `m:"İzmir"`, TDV: Hudâvendigâr/Saruhan; Safranbolu `m:"Ankara"`, TDV: Bolu sancağı). Ek A'da **kalın** işaretli. Teyitsiz özetten geldiği için düzeltilmedi.

## 3./4. derece ayrımı

`ALTYAPI-DORT-MADDE.md:105-106` tanımı: **k:3 = kaza/kale**, **k:4 = köy/nahiye** ("bunlara bölge ATANMAMALI"). TDV taraması, k:4 işaretli 251 Osmanlı şehir/kasabasının en az **53**'ünün kendi başına kadılık/kaza (37) ya da sancak (16) merkezi olduğunu söylüyor. Taranabilenlerin (115) **%46'sı**. Taranmayan 136'da oran benzerse 4. derece listesinde ~110-120 kaza merkezi daha olabilir (tahmin, ölçülmedi).
⇒ Emre'nin gözlemi ("kaynaklarda geçen yer çoğunlukla 3. derece merkezdir") ölçümle destekleniyor: **k:4 etiketi Osmanlı şehirlerinde büyük ölçüde kaza merkezlerini de kapsıyor.**
Zamanla değişenler (`kd:` ister): Milas (1390-92 sancak → kaza), Drama (kaza → 1864 sancak), Kırşehir, Çorum, Akşehir, Burdur, Osmaniye, Ferecik (1884'ten nahiye), Karapınar (1868 bucak), Birgi (XIX. yy nahiye).
**k:3'e yükseltme veriye yazılmadı.** Sebep: (1) alıntılar özetten geldi, teyit gerekir; (2) `k` motorda menzil/ağırlık belirliyor (`BULGU-KADEME-K0.md`: k3 280 km, k4 140 km) — 53 noktanın yükselmesi haritayı değiştirir, Emre'nin kararı.
Liste: Ek A.

## ① Ne ölçtüm
- 770 k:4 noktanın hepsi için mevcut bağ, en yakın 6 k1-3 merkez (kuş uçuşu), ilk 5 + `m:` için DEM yürüyüş günü, sahiplik uyumu.
- Karar: 586 bağlı · 85 yeni bağlandı (65 kesin <2 gün + 20 beyanlı 2-5 gün) · 99 belirsiz · 53 k3'e yükseltme önerisi.
- TDV: 251 Osmanlı şehir/kasabadan 115'i okundu: 37 kaza, 16 sancak, 3 nahiye/köy.
- `denetle.py`: önce 0, sonra **0** (temiz; Değişmez 1: 210 sahipsiz = beklenen, Değişmez 2: 0 açık).

## ② Ne bulamadım
- TDV hız sınırı: **136/251 satır taranamadı** (Kuzey Afrika, Irak, Mısır, Doğu Anadolu ağırlıklı). 50 "bulunamadı"nın bir kısmı yazım/slug kaynaklı.
- Osmanlı dışı k4 (Rusya, Çin, Hindistan, Kuzey Avrupa ~250 nokta) için kaynak taraması yapılmadı; kararları yalnız coğrafî.
- Tarihli bağ değişimi (zamanlı `kd:`) için kaynaklı tarih bulunmadı; hiç `kd:` yazılmadı.
- 22 ada/ulaşılamaz nokta (Malta, Elba, Sokotra, Hürmüz, Dalmaçya adaları, Atlantik adaları): yürüyüş ölçütü denizde çalışmıyor. Deniz bağı için ayrı ölçüt gerek.
- Yürüyüş motorun kendi `_yr_*` hattıyla değil prototip aletle ölçüldü; sınırdaki (1,8-2,2 gün) 10-15 vaka motorda öbür tarafa düşebilir.

## ③ Ne istiyorum (önerimle)
1. **Dalı birleştir** (`claude/abi-merkez-k4-9f4f01`): 85 bağ, yalnız `m:` + `kaynak:`; motor tuzuna dokunmuyor. KASA birleştirirken `paketle yenile` + `surum_damgala`.
2. **k:3 yükseltmesi:** öneri — önce Ek A'daki 53'ü insan gözüyle TDV'den teyit et (özet alıntı), sonra tek commit'te `k:3` (zamanla değişen ~10 kayıt `kd:` ile). Koşudan önce Emre onayı (menzil değişir).
3. **TDV'nin kalan 136 satırı:** hız sınırı yüzünden yavaş, tek seri tarama (dakikada 2-3 istek) — gece işi. Öneri: UMIT'te bir oturum.
4. **170 uyumsuz `m:`**: abi merkez kuralı motora inmeden önce taranmalı; yoksa kural devreye girince bu noktaların toprağı yanlış devlete gider. Öneri: ayrı oturum, önce uyumu en düşük 30.
5. **Ada ölçütü:** 22 ada için "deniz yoluyla en yakın merkez" mi, "ada kendi merkezidir (k:3)" mı — Emre kararı.
6. Eşikler (2-5 günde "ikinci aday ≥ 1 gün uzak", "uyum ≥ %90") benim işletmemdir; Emre farklı isterse karar tablosu `karar.py` ile yeniden üretilir.


## Ek A — k:3'e yükseltme önerileri (TDV: kendi başına kaza ya da sancak merkezi)

Alıntılar WebFetch özetinden geldi; veriye işlenmeden önce madde metninden teyit gerekir. `m:` sütunu atlastaki bugünkü bağdır; TDV'nin verdiği bağla ayrıştığı yerler **kalın**.

| ad | atlas kararı | TDV | tarih | TDV'ye göre bağlı | atlas `m:` | kaynak |
|---|---|---|---|---|---|---|
| Adapazarı | BAGLI | KAZA | 1852 | İzmit sancağı | **İstanbul** | https://islamansiklopedisi.org.tr/adapazari |
| Bergama | BAGLI | KAZA | conquest muhtemelen 1341 sonrası; XVI. yy 120 köy; 1868-1873 Saruhan sancağı (Aydın eyaleti); 1875 İzmir | Hudâvendigâr sancağı | **İzmir** | https://islamansiklopedisi.org.tr/bergama |
| Ereğli (Konya) | BAGLI | KAZA | 1502 ve XVI. yy sonu kayıtları | Konya sancağı (Karaman eyaleti) | Konya | https://islamansiklopedisi.org.tr/eregli |
| Silifke | BAGLI | SANCAK | ~1483'ten kalıcı Osmanlı hâkimiyeti; 1555 tahririnde İçel beyi Silifke'de; 1671 sancak beyi Silifke'de; XVIII-XIX. yy Ermenek ve Mut da merkez olmuş; "Silifke kazası" XVI. yy defterlerinde | İçel sancağı (merkez Silifke), Karaman vilayeti | **Konya** | https://islamansiklopedisi.org.tr/silifke |
| Osmaniye | BAGLI | KAZA | 1865 kaza; 1891-92 Cebelibozkurt sancağı içinde; 1908'de Cebelibereket sancağı merkezi | Payas sancağı (1865); Cebelibozkurt (1891-92); 1908 sancak merkezi | **Adana** | https://islamansiklopedisi.org.tr/osmaniye |
| Nevşehir (Muşkara) | BAGLI | KAZA | 1725'ten kaza merkezi (kadı Ürgüp'ten taşındı); 1518'de Ürgüp kazası köyü | Niğde sancağı | **Konya** | https://islamansiklopedisi.org.tr/nevsehir |
| Ürgüp | BAGLI | KAZA | 1518'den Cumhuriyet'e | Niğde sancağı (Karaman/Konya eyaleti) | Konya | https://islamansiklopedisi.org.tr/urgup |
| Safranbolu | BAGLI | KAZA | ~1423 Osmanlı hâkimiyeti; ~1519 tahrirde Taraklıborlu (merkez Borlu) | Bolu sancağı | **Ankara** | https://islamansiklopedisi.org.tr/safranbolu |
| Ordu (Bayramlı) | BAGLI | KAZA | 1455 "vilâyet-i Bayramlu"; 1547 İskefsir/Bayramlu/Bazarsuyu kazaları; 1604 "kazâ-i Bayramlu nâm-ı dîger Ordu"; 1876 Trabzon sancağı; müstakil sancak ancak 1920 | 1547 Şarkîkarahisar sancağı; 1876 Trabzon sancağı | Trabzon | https://islamansiklopedisi.org.tr/ordu--sehir |
| Lüleburgaz | BAGLI | KAZA | 1530 (tahrir); XVII. yy | Vize sancağı (1530); Kırkkilise sancağı (XVII. yy) | **Edirne** | https://islamansiklopedisi.org.tr/luleburgaz |
| Eski Zağra (Stara Zagora) | BAGLI | KAZA | XVI. yy'dan XIX. yy'a | Edirne'ye bağlı (Rumeli eyaleti); XVIII. yy kısaca Sofya, sonra Filibe; sancak adı maddede açık değil | Sofya | https://islamansiklopedisi.org.tr/eski-zagra |
| Tatarpazarcığı | BAGLI | KAZA | 1530 muhasebe defteri; 1869'da kaza | sancak maddede yok | **Sofya** | https://islamansiklopedisi.org.tr/tatarpazarcigi |
| Köstendil | BAGLI | SANCAK | 1395'te sancak yapıldı (1517 tahriri: sancakta 8 şehir) | Köstendil sancağı (doğrudan Osmanlı) | **Sofya** | https://islamansiklopedisi.org.tr/kostendil |
| Nevrokop (Gotse Delçev) | BAGLI | KAZA | 1445 defteri; 1900'de kaza sürüyor | Serez sancağı | **Selanik** | https://islamansiklopedisi.org.tr/nevrekop |
| Drama | BAGLI | KAZA | 1383 (Eylül) - 1864 kaza (XVI. yy başı 30 akçelik kadılık); 1864-1913 sancak (Selânik vilayeti); 1867 Serez ile birleşik, 1873 yeniden müstakil | Rumeli beylerbeyiliği Paşa sancağı; sonra Selânik sancağı; 1864'ten sancak merkezi | **Selanik** | https://islamansiklopedisi.org.tr/drama |
| Kırklareli | BAGLI | KAZA | fetih 1361 dolayı; XVII. yy'da Kırkkilise sancağı merkezi; Tanzimat sonrası sancak merkezi (Edirne vilayeti) | Rumeli eyaleti Vize sancağı (kaza dönemi) | **Edirne** | https://islamansiklopedisi.org.tr/kirklareli |
| Tırnova | BAGLI | KAZA | 1393-1878 kaza; sonra (tarihsiz, 1869 salnamesinde 453 köylü) sancak merkezi, Tuna vilayeti | Niğbolu sancağı | **Sofya** | https://islamansiklopedisi.org.tr/tirnova--bulgaristan |
| Ohri | BAGLI | SANCAK | tarih yok (sancak beyi 1406 kaydı) | sancak adı maddede yok | **Üsküp** | https://islamansiklopedisi.org.tr/ohri |
| Berat | BAGLI | SANCAK | 1431-1432 (Avlonya sancağı merkezi); sonra tarihsiz: Berat sancağı merkezi | Avlonya sancağı (Rumeli eyaleti); sonra Yanya vilayetine bağlı Berat sancağı | Yanya | https://islamansiklopedisi.org.tr/berat--arnavutluk |
| Deyrizor | BAGLI | SANCAK | 1855-1869 nahiye; 1870'te Zor sancağı merkezi; 1877-1882 Halep'e bağlı; 1882-83 müstakil | Halep vilayeti | Halep | https://islamansiklopedisi.org.tr/deyrizor |
| Elbistan | BAGLI | KAZA | 1399 sefer (Dulkadıroğluna bırakıldı); 1521'den doğrudan Osmanlı; 1540 ve 1563 tahrirleri | Halep beylerbeyiliği; sonra Dulkadır beylerbeyiliği (sancak adı verilmiyor) | **Maraş** | https://islamansiklopedisi.org.tr/elbistan |
| Ferecik (Feres) | BAGLI | KAZA | 1358-1912 (kaza merkezi); 1875-1878 Edirne sancağı; 1884 sonrası nahiye | Edirne sancağı (1875-78); 1884 sonrası Dedeağaç sancağına bağlı nahiye | Edirne | https://islamansiklopedisi.org.tr/ferecik |
| Biga | BAGLI | SANCAK | XVI-XVII. yy sancak merkezi; XIX. yy'da kaza merkezi | Biga sancağı (Kaptanpaşa eyaleti) | **Bursa** | https://islamansiklopedisi.org.tr/biga--canakkale |
| Beyşehir | BAGLI | SANCAK | II. Bayezid dönemi sancak merkezi; XVI. yy; XVII. yy ortası kaza | Karaman eyaleti | **Konya** | https://islamansiklopedisi.org.tr/beysehir |
| Sivrihisar | BAGLI | KAZA | 1530'da kaza kaydı; XVII-XIX. yy | Hudâvendigâr sancağı (XIX. yy sonu Ankara vilayeti; 1915'te Eskişehir) | Ankara | https://islamansiklopedisi.org.tr/sivrihisar |
| Kırşehir | BAGLI | SANCAK | 1554 müstakil sancak (Karaman eyaleti); 1526 Bozok sancağına bağlı kaza; 1867 Niğde sancağına bağlı kaza; sonra yeniden sancak (Ankara vilayeti) | Bozok sancağı (1526); Karaman eyaleti (1554); Niğde sancağı (1867); Ankara vilayeti | Ankara | https://islamansiklopedisi.org.tr/kirsehir |
| Çorum | BAGLI | SANCAK | 1521 Rum (Sivas) eyaletinde sancak; XVIII. yy Sivas eyaleti; 1831-1836 Ankara sancağına bağlı kaza; 1836 yeniden sancak; 1856 Bozok sancağına bağlı kaza; 1893 yeniden sancak | Rum (Sivas) eyaleti | **Ankara** | https://islamansiklopedisi.org.tr/corum |
| Çankırı | BAGLI | SANCAK | 1521 tahrir kaydı | Anadolu eyaleti | **Ankara** | https://islamansiklopedisi.org.tr/cankiri |
| Seydişehir | BAGLI | KAZA | 1481 (886) tahriri; 1476 tahriri Karaman kazaları arasında | Beyşehir livâsı | **Konya** | https://islamansiklopedisi.org.tr/seydisehir |
| Akşehir | BAGLI | SANCAK | 1525'ten Karaman eyaletine bağlı sancak (merkez kaza + İshaklı, Çimenili, Ilgın, Belviran, Aladağ); XVII-XVIII. yy sancak; XIX. yy ortası Konya'ya bağlı kaza (Cuinet) | Karaman eyaleti | **Konya** | https://islamansiklopedisi.org.tr/aksehir |
| Merzifon | BAGLI | KAZA | XVI. yy başı; Merzifonâbâd kazası XVII. yy-1880 | Amasya'ya bağlı (sancak adı açık değil) | **Sivas** | https://islamansiklopedisi.org.tr/merzifon |
| Birgi | BAGLI | KAZA | XV.-XIX. yy; XIX. yy ikinci yarısında nahiye | Aydın sancağı | **İzmir** | https://islamansiklopedisi.org.tr/birgi |
| Tire | BAGLI | SANCAK | 1423 Aydın sancağının merkezi (Anadolu beylerbeyiliği); 1528-29 tahririnde 98 köylü kaza merkezi; 1867 sonrası İzmir sancağına bağlı | Aydın sancağı (merkez) | **İzmir** | https://islamansiklopedisi.org.tr/tire |
| Ayasuluk (Selçuk) | BAGLI | KAZA | ~1475 tahrir; XVI. yy ikinci yarısına kadar Aydın sancağında | Aydın sancağı; sonra Sığla sancağı (Kaptanpaşa eyaleti) | **İzmir** | https://islamansiklopedisi.org.tr/ayasuluk |
| Milas | BAGLI | SANCAK | 1390-1392 dolayı Menteşe sancağı merkezi; sonra Muğla merkez, Milas kaza (1562'de Peçin kazasıyla birleştirildi) | Menteşe sancağı | **Muğla** | https://islamansiklopedisi.org.tr/milas |
| Uşak | BAGLI | KAZA | 1429'dan; 1520 tahriri kaza merkezi | Kütahya sancağı | Kütahya | https://islamansiklopedisi.org.tr/usak |
| Alaşehir | BAGLI | KAZA | 1391 fetih; Fatih döneminde İnegöl ve Sart nahiyeleri; 1867'de Saruhan (Manisa) sancağına nakil | Aydın sancağı | **Kütahya** | https://islamansiklopedisi.org.tr/alasehir |
| Burdur | BAGLI | KAZA | 1391'den; XIX. yy'da Burdur sancağı merkezi (yıl yok) | Hamîd sancağı (merkezi Isparta), Anadolu eyaleti; sonra Burdur sancağı (Konya vilayeti) | **Kütahya** | https://islamansiklopedisi.org.tr/burdur |
| Bolu | BAGLI | SANCAK | XVI. yy (1519 tahriri) Bolu sancağı Anadolu eyaletinde; 1692'ye kadar Anadolu eyaleti, 1692'den voyvodalık, 1825 muhassıllık, 1864'te Kastamonu vilayetine bağlı mutasarrıflık | Anadolu eyaleti (sancak merkezi) | **Ankara** | https://islamansiklopedisi.org.tr/bolu |
| Tikrit | BAGLI | SANCAK | XVI-XVII. yy (Musul eyaletine bağlı 1592; Rakka eyaleti XVII. yy; Musul 1717-1730) | Bağdat eyaletinden ayrıldı; Musul/Rakka eyaleti | Bağdat | https://islamansiklopedisi.org.tr/tikrit |
| Arapkir | BAGLI | SANCAK | 1525-1527 civarı (Kanûnî'nin ilk yılları) | Diyarbekir eyaleti (1834'e kadar Rum/Sivas eyaleti, 1847 Ma'mûretülazîz sancağı) | **Malatya** | https://islamansiklopedisi.org.tr/arapkir |
| Podgorica | BAGLI | KAZA | 1479 sonrası İşkodra sancağına dahil; XIX. yy (1873 Manastır salnamesi) kaza | İşkodra sancağı | İşkodra | https://islamansiklopedisi.org.tr/podgorica |
| İskeçe | BAGLI | KAZA | 1872'den kaza merkezi (öncesinde Yenice-i Karasu merkezdi) | Drama sancağı (1847 tanığı); Yenice-i Karasu kazasının parçası | **Selanik** | https://islamansiklopedisi.org.tr/iskece |
| Arhavi | BAGLI | KAZA | tarih yok (taksimat döneminde) | Trabzon livası | Trabzon | https://islamansiklopedisi.org.tr/arhavi (Lazlar ve Trabzon maddeleri dolaylı) |
| Karapınar | BAGLI | KAZA | 1855 kaza; 1868 bucak; 1873 sonrası yeniden kaza | sancak maddede yok (1868'de Ereğli kazasına bağlı bucak) | **Karaman** | https://islamansiklopedisi.org.tr/karapinar |
| Tosya | BAGLI | KAZA | XVI. yy; 1869'da Çankırı sancağından Kastamonu'ya bağlandı | Çankırı sancağı (XVI. yy) | **Kastamonu** | https://islamansiklopedisi.org.tr/tosya |
| Hacıoğlupazarcığı (Dobrich) | BAGLI | KAZA | 1569-70 nahiye merkezi; 1873 kaza merkezi (1518-1530 Varna kazasında köy) | Silistre sancağı | Silistre | https://islamansiklopedisi.org.tr/hacioglupazarcigi |
| Valjevo | BAGLI | KAZA | 1660 (Evliya Çelebi kaydı) | Semendire sancağı | **Belgrad** | https://islamansiklopedisi.org.tr/valyeva |
| İvranye (Vranje) | BAGLI | KAZA | 1455 fethinden; 1530'da 321 köy; 1864 Niş sancağı (Tuna vilayeti); 1874 Prizren vilayeti | Ilıca-Köstendil sancağı | **Sofya** | https://islamansiklopedisi.org.tr/ivranye |
| Leskofça (Leskovac) | BAGLI | KAZA | 1454-1878 (önce nahiye) | Alacahisar sancağı | **Sofya** | https://islamansiklopedisi.org.tr/leskofca |
| Lofça (Loveč) | BAGLI | KAZA | 1393 (fetih; Bulgar tarihyazımında 1474) ; tahrirler 1479, 1516, 1545, 1580 | Niğbolu sancağı | **Sofya** | https://islamansiklopedisi.org.tr/lofca |
| Doyran | YENI | KAZA |  | Köstendil sancağı (XIX. yy'da Selânik vilayeti) | Ustrumca (Strumica) (yeni) | https://islamansiklopedisi.org.tr/doyran |
| Gevgili (Gevgelija) | YENI | KAZA | 1864'te Avrathisar kazasının kuzey parçasından Gevgili kazası | sancak maddede yok (Selânik vilayeti) | Ustrumca (Strumica) (yeni) | https://islamansiklopedisi.org.tr/gevgili |

## Ek B — TDV taramasının öteki sonuçları (251 Osmanlı dönemli k:4 şehir/kasaba)

| ad | TDV kararı | not |
|---|---|---|
| Yenişehir (Bursa) | TARANMADI |  |
| İnegöl | BULUNAMADI | yer maddesi yok (yalnız İshak Paşa Külliyesi) |
| Akyazı | BULUNAMADI |  |
| Kandıra | BULUNAMADI | TDV'de Kandıra maddesi yok; yalnız Akça Koca vb. maddelerde geçiyor |
| Söke | TARANMADI |  |
| Bozüyük | BULUNAMADI | TDV'de Bozüyük maddesi yok; aramada yalnız Kasım Paşa Külliyesi (XVI. yy ilk yarı) |
| Ermeni Derbendi | TARANMADI |  |
| Pazaryeri | BULUNAMADI | TDV'de Pazaryeri (Bilecik) maddesi yok; yalnız Bilecik vb. maddelerde geçiyor |
| Karabük | NAHIYE/KOY | Kastamonu merkez sancağı; Safranbolu kazası Aktaş nahiyesi Safranbolu’ya bağlı köyler arasında yer alan |
| Eski Malatya (Battalgazi) | TARANMADI | Aramada Kayseri, Malatya, Ulucami maddelerinde geçiyor; Malatya maddesi açılmadı |
| Çorlu | BULUNAMADI | TDV'de Çorlu şehir maddesi yok (aramada yalnız Çorlulu Ali Paşa vb. kişi/yapı maddeleri) |
| Malkara | BULUNAMADI |  |
| Keşan | BULUNAMADI | yer maddesi yok (yalnız Hersekzâde Ahmed Paşa Camii) |
| İpsala | BULUNAMADI | TDV'de İpsala maddesi yok; yalnız Gelibolu maddesinde bir sancağa bağlandığı (sancak adı/yüzyıl snippet'te belirsiz) ve Evrenosoğulları maddesinde 1361 fethi geçiyor |
| Arta | TARANMADI |  |
| Vostitsa (Aigion) | BULUNAMADI | madde başlığı yok (Mora, Balyabadra maddelerinde geçiyor; okunmadı) |
| Kalavrita (Kalavryta) | TARANMADI |  |
| Damala (Troizen) | BULUNAMADI | madde yok (Gaziantep maddesinde ilgisiz 'dama') |
| Methana | TARANMADI |  |
| Kranidi | TARANMADI |  |
| İstefe (Tebai) | TARANMADI |  |
| Livadya | TARANMADI |  |
| Amman | BELIRSIZ | Osmanlı sınırlarına dahil madde kaza/sancak statüsü vermiyor |
| Cetinje | BELIRSIZ | 1692’de Osmanlı kuvvetleri Çetine’yi tahrip etti. (idari statü yok) |
| Kesendire (Kassandra) | BULUNAMADI | madde yok (Kasandra yazımı aranmadı) |
| Humus | TARANMADI |  |
| Domaniç | TARANMADI |  |
| Gebze | BULUNAMADI | TDV'de Gebze başlıklı madde yok (arama: Kanuni Köprüsü, Çoban Mustafa Paşa Külliyesi, Malkoçoğlu Türbesi) |
| Kirmasti (M.Kemalpaşa) | TARANMADI | Kirmastî maddesi yalnız âlim; Mustafakemalpaşa maddesi 429 (hız sınırı) yüzünden açılamadı |
| Mihaliç (Karacabey) | BULUNAMADI |  |
| Medea (Titteri) | BULUNAMADI | yer maddesi yok (Cezayir maddesi içerik geçişi) |
| Setif | BULUNAMADI | madde başlığı yok; yalnız içerik geçişleri (Cezayir vb.) |
| Çarşamba | BULUNAMADI |  |
| Kalocsa | BULUNAMADI | TDV başlık aramasında madde yok |
| Uluborlu | TARANMADI |  |
| Eğirdir | BULUNAMADI | TDV'de "egirdir" başlığı yok (ğ'li yazımla ayrı arama yapılmadı) |
| Yalvaç | BULUNAMADI | yer maddesi yok (yalnız Yalvaçlı İbrâhim Efendi) |
| Elmalı | BULUNAMADI | yer maddesi yok (yalnız Elmalı Bendi, Elmalılı Hamdi vb.) |
| Devrek | BULUNAMADI | madde başlığı yok; yalnız içerik geçişleri |
| Ahar (Karadağ) | TARANMADI | TDV hız sınırı (429) |
| Sarâb | TARANMADI |  |
| Miyâne | TARANMADI | /miyane 429 verdi |
| Nihâvend | TARANMADI |  |
| Sâmerrâ | TARANMADI |  |
| Kûfe | NAHIYE/KOY | Kerbelâ sancağı, Necef kazası Kerbelâ sancağının Necef kazasına bağlı bir nahiye merkezi durumundaydı |
| Vâsıt | TARANMADI |  |
| Kût el-Amâre | TARANMADI | TDV hız sınırı (429) |
| Kifri | TARANMADI | TDV hız sınırı (429) |
| Hânekîn | TARANMADI |  |
| Tuz Hurmatu | TARANMADI |  |
| Halepçe | BELIRSIZ | Kendi maddesi yok. Süleymaniye maddesi snippet'i "Kazanın merkezi bugün Halepçe diye bilinen kasabadır" (hangi kaza olduğu görülmedi); Pîremerd maddesinde 1883 Halepçe Emlâk-i Hümâyun kâtipliği; Süley |
| Akra | TARANMADI | TDV hız sınırı (429) |
| Duhok | TARANMADI | TDV hız sınırı (429) |
| Zaho | BELIRSIZ | Kendi maddesi yok. Musul maddesi snippet'i: Zaho Musul sancaklarından biri olarak geçiyor ve ayrı bir snippet'te kaza listesinde (Akra, Zibar, Dıhok, Zaho...) sayılıyor; Haydarîzâde İbrâhim Efendi mad |
| Telafer | TARANMADI | /telafer 503 ve 429 verdi |
| Sincar | TARANMADI |  |
| Âne | TARANMADI | TDV hız sınırı (429) |
| Hît | TARANMADI |  |
| Fellûce | TARANMADI |  |
| Ramâdi | TARANMADI |  |
| Dîvâniye | TARANMADI |  |
| Semâve | TARANMADI |  |
| Nâsıriye | TARANMADI |  |
| Ammâre | TARANMADI | TDV hız sınırı (429) |
| Kürne | TARANMADI |  |
| Hısn-ı Mansûr (Adıyaman) | TARANMADI |  |
| Çemişgezek | TARANMADI | /cemisgezek 429 (hız sınırı) verdi |
| Siverek | TARANMADI | TDV hız sınırı (429) |
| Kragujevac | BULUNAMADI | TDV araması yalnız ÖZİÇE ve SIRBİSTAN verdi; Öziçe maddesi Kragujevac'ı idari birim olarak anlatmıyor |
| Tedmür (Palmyra) | TARANMADI |  |
| Kırcaali | NAHIYE/KOY | Hasköy kazası (1870'te Filibe sancağı) 1302 (1885) tarihli irâde-i seniyye ile Hasköy'den ayrıldı |
| Dessûk | TARANMADI |  |
| Kafrüşşeyh | TARANMADI | TDV hız sınırı (429) |
| Tanta | TARANMADI |  |
| Benhâ (Kalyûbiye) | TARANMADI |  |
| Mît Gamr | TARANMADI | TDV hız sınırı (429) |
| Menzile | TARANMADI |  |
| Fâkûs | TARANMADI |  |
| Atfîh | TARANMADI | TDV hız sınırı (429) |
| Behnesâ | TARANMADI | TDV hız sınırı (429) |
| Mellevî | TARANMADI |  |
| Deyrût | TARANMADI |  |
| Tahtâ | TARANMADI |  |
| Ahmîm | TARANMADI |  |
| Ferşût | TARANMADI | TDV hız sınırı (429) |
| Kûs | TARANMADI | TDV hız sınırı (429) |
| Uksur (Luksor) | TARANMADI |  |
| Esna | TARANMADI |  |
| Edfû | TARANMADI |  |
| Kûm Ombo | TARANMADI |  |
| Mâtir (Mateur) | TARANMADI |  |
| Bâce (Béja) | BELIRSIZ | Tunus Beylerbeyiliği Bâce de Tunus Beylerbeyiliği'nin idaresine girmiş oldu (1534); kaza/sancak statüsü yazılı değil |
| Cendûbe | BULUNAMADI | madde başlığı yok |
| Nâbil (Nabeul) | BULUNAMADI | madde başlığı yok |
| Zağvân | TARANMADI |  |
| Kasrayn | TARANMADI |  |
| Tozer | TARANMADI | TDV hız sınırı (429) |
| Nefta | TARANMADI |  |
| Medenîn | TARANMADI |  |
| Tatavin | TARANMADI | TDV hız sınırı (429) |
| Bin Gerdân | TARANMADI |  |
| Zâviye | TARANMADI |  |
| Nâlût | TARANMADI | TDV hız sınırı (429) |
| Yefren | TARANMADI | TDV hız sınırı (429) |
| Mızde | TARANMADI |  |
| Zilten | TARANMADI |  |
| Benî Velîd | TARANMADI |  |
| Ecdâbiye | TARANMADI |  |
| Merc | TARANMADI | TDV hız sınırı (429) |
| Beyzâ (Kirene) | TARANMADI |  |
| Blida | TARANMADI |  |
| Miliana | TARANMADI |  |
| Şelif | TARANMADI |  |
| Muaskar | BULUNAMADI | TDV'de "Muaskar" başlığı yok (alternatif yazımlar Mâsker/Mascara denenmedi) |
| Ayn Temûşent | TARANMADI |  |
| Nedrûme | BULUNAMADI | TDV başlık aramasında madde yok |
| Mîle | TARANMADI |  |
| Kalme (Guelma) | TARANMADI |  |
| Sûk Ahrâs | BULUNAMADI | madde başlığı yok |
| Tebesse | TARANMADI |  |
| Batna | TARANMADI |  |
| Berc Bû Areric | TARANMADI |  |
| Mesîle | TARANMADI |  |
| Bû Sa'âde | BULUNAMADI | TDV başlık aramasında madde yok |
| Ağvât | TARANMADI | TDV hız sınırı (429) |
| Gardâye | TARANMADI |  |
| Tokar | TARANMADI |  |
| Sinkat | TARANMADI | TDV hız sınırı (429) |
| Ğadâmis | TARANMADI |  |
| Gât | TARANMADI |  |
| Cağbûb | TARANMADI |  |
| Sebha | TARANMADI |  |
| Ubârî | TARANMADI | TDV hız sınırı (429) |
| Beykoz | BELIRSIZ |  |
| Diyadin | BELIRSIZ | Kendi maddesi yok. Ağrı maddesi snippet'inde kaza olarak anılıyor ve Bayazıt sancağı yerleri arasında sayılıyor; tarih verilmiyor; Ağrı maddesi açılıp doğrulanmadı Bayazıt sancağının Bayazıt, Diyadin, |
| Eleşkirt | TARANMADI |  |
| Erzin | TARANMADI | TDV hız sınırı (429) |
| Borçka | BULUNAMADI | TDV'de Borçka maddesi yok; Çay maddesinde "Borçka Kazasında", Gürcistan maddesinde 1479 fethi geçiyor (idari statü verilmiyor) |
| İshaklı | TARANMADI |  |
| Ilgın | BULUNAMADI | yer maddesi yok (yalnız Lala Mustafa Paşa Külliyesi) |
| Ulukışla | BULUNAMADI | TDV'de Ulukışla maddesi yok; yalnız Öküz Mehmed Paşa Külliyesi (XVII. yy) |
| Kelkit | BULUNAMADI | yer maddesi yok (yalnız Tâceddînoğulları) |
| Aşkale | BULUNAMADI | TDV'de Aşkale maddesi yok; Erzurum maddesinde düzenleme sonrası Erzurum'a bağlı yerler arasında sayılıyor |
| Yagodina (Jagodina) | BULUNAMADI |  |
| Praviște (Eleftheroupoli) | BULUNAMADI | madde yok (Praviçte/Pravişte yazımları aranmadı) |
| Lanzaka (Lagkadas) | BULUNAMADI | TDV'de "lanzaka" için madde başlığı yok (Langaza/Lagkadas yazımları denenmedi) |
| Pasarofça (Požarevac) | BULUNAMADI | yalnız Pasarofça Antlaşması maddesi var, yer maddesi yok |
| Ćuprija | BULUNAMADI | madde yok (Osmanlı adı Parakin aranmadı) |
| Rudnik | BULUNAMADI | madde başlığı yok; yalnız içerik geçişleri |
| Kurşunlu (Kuršumlija) | BULUNAMADI | TDV araması yalnız Kurşunlu Han (Manisa) ve Kurşunlu Külliyesi (Eskişehir) verdi; Kuršumlija maddesi yok |
| Ürküp (Prokuplje) | BULUNAMADI |  |
| Zara | BULUNAMADI | TDV'de Zara (Sivas) maddesi yok (arama 23 madde, yalnız Zaragoza vb.; ikinci sayfa bakılmadı) |
| İmranlı | TARANMADI | TDV hız sınırı (429) |
| Refahiye | TARANMADI |  |
| Margiliç (Margariti) | TARANMADI |  |
| Ayasaranda (Sarandë) | TARANMADI |  |
| İgumenitsa (Gomenice) | TARANMADI |  |
| Filat (Filiates) | BULUNAMADI | madde başlığı yok |
| Çatalca | BULUNAMADI | yer maddesi yok (yalnız Çatalcalı kişi maddeleri, Ferhad Paşa Camii) |
| Hayyâ | TARANMADI |  |
| Derûdeb | TARANMADI |  |
| Tîzî Vezzû (Kabiliye) | TARANMADI |  |
| Tâhert (Tiaret) | BELIRSIZ | Tilimsân'ın alınmasından sonra Osmanlı egemenliği Tâhert, Tilimsân'ın alınmasından itibaren Osmanlı egemenliğine girdi; kaza/sancak statüsü yazılı değil |
| Cilfe (Djelfa) | TARANMADI |  |
| Vargla (Ouargla) | TARANMADI | TDV hız sınırı (429) |
| el-Vâdî (Sûf) | TARANMADI |  |
| Hanşele (Khenchela) | BULUNAMADI | TDV başlık aramasında madde yok |
| Aynı Beydâ | TARANMADI |  |
| Testûr | TARANMADI |  |
| Ğar Dimâv | TARANMADI |  |
| Mekter (Maktar) | TARANMADI |  |
| Sübaytıla | TARANMADI |  |
| Sîdî Bû Zeyd | BULUNAMADI | madde başlığı yok |
| Metlâvî | TARANMADI |  |
| Kıbillî (Nefzâve) | TARANMADI |  |
| Dûz | TARANMADI | TDV hız sınırı (429) |
| Terhûne | TARANMADI | TDV hız sınırı (429) |
| Kabâv (Nefûse) | TARANMADI |  |
| Sinâvin | TARANMADI |  |
| Derc (Derj) | TARANMADI |  |
| Tâverğa | TARANMADI | TDV hız sınırı (429) |
| Vaddân (Cufre) | TARANMADI |  |
| Nûfiliye | TARANMADI |  |
| Tırgan (Traghan) | TARANMADI |  |
| Zevîle (Zawila) | TARANMADI | TDV hız sınırı (429) |
| el-Katrûn | TARANMADI | TDV hız sınırı (429) |
| Elafonisos (Cervi) | TARANMADI | TDV hız sınırı (429) / süre |
| Şemdinli (Şemdinni) | TARANMADI |  |
| el-Ulâ | TARANMADI |  |
| Mat (Mati) | BULUNAMADI | TDV'de "mat" arama sayfası döndü; Mat/Mati başlıklı madde yok (yalnız slug denendi, başlık araması yapılmadı) |
| İmâdiye (Amêdî) | TARANMADI |  |
| Şırnak | TARANMADI | TDV hız sınırı (429) |
| Darende | TARANMADI |  |
| Midyat | BULUNAMADI | yer maddesi yok (Hasankeyf: 'Midyat'a bağlı nahiye merkezi' notu) |
| Bedir | TARANMADI | TDV hız sınırı (429) |
| Kılkış (Avrathisar) | BELIRSIZ | maddede yok merkezi Kilkis olan (1523'ten beri kazanın… (cümle kesik) |
| Gürün | TARANMADI | TDV hız sınırı (429) |
| Gemerek | BULUNAMADI | TDV'de Gemerek maddesi yok; Sivas, Yozgat, Çapanoğulları, Dulkadıroğulları maddelerinde geçiyor |

## Ek C — 770 k:4 noktanın tek tek kararı

Sütunlar: abi merkez (yeni bağda seçilen; bağlıda `m:` zinciri) · DEM yürüyüşü gün · kuş uçuşu km · sahiplik uyumu = 1281-1923 arası 5 yılda bir örnek günden ikisinin de sahipli olduğu günlerde sahip aynı olan / toplam.


### C1 — YENİ BAĞLANAN (veriye `m:` + `kaynak:` yazıldı) — 85

| ad | dosya | abi merkez / en yakın | ikinci aday | gerekçe |
|---|---|---|---|---|
| Pag (Pago) | yerlesimler.js | Zadar (Zara) (k1, 1.0 g, 41.9 km · uyum 128/129) | Gospić (k3, 1.2 g, 29.6 km · uyum 12/129) | <2 gün |
| Bempûr | yerlesimler.js | Hâş (k3, 4.1 g, 136.2 km · uyum 129/129) | Çâhbahâr (k3, 6.7 g, 212.9 km · uyum 129/129) | 2-5 gün, coğrafî birliktelik (ikinci aday ≥1 gün uzak, sahiplik uyumu ≥%90) |
| Hazârasp | yerlesimler.js | Yeni Ürgenç (k1, 1.1 g, 44.5 km · uyum 56/56) | Hîve (k1, 1.4 g, 59.4 km · uyum 129/129) | <2 gün |
| Mazagan (El Jadida) | yerlesimler_ek3.js | Azemmûr (k3, 0.3 g, 15.7 km · uyum 84/129) | Dârülbeyzâ (Anfa) (k3, 2.8 g, 92.1 km · uyum 78/129) | <2 gün · ⚠ abi merkezle sahiplik uyumu %65 |
| Metemma | yerlesimler_afrika.js | Gondar (k1, 4.9 g, 148.0 km · uyum 129/129) | Debârek (k3, 6.5 g, 190.4 km · uyum 129/129) | 2-5 gün, coğrafî birliktelik (ikinci aday ≥1 gün uzak, sahiplik uyumu ≥%90) |
| Vrana (Urana) | yerlesimler_ek.js | Zadar (Zara) (k1, 0.8 g, 32.4 km · uyum 96/129) | Şibenik (Sebenico) (k3, 0.8 g, 36.3 km · uyum 87/129) | <2 gün |
| Nadin | yerlesimler_ek.js | Zadar (Zara) (k1, 0.4 g, 22.0 km · uyum 96/129) | Şibenik (Sebenico) (k3, 1.2 g, 49.4 km · uyum 87/129) | <2 gün |
| Caernarfon | yerlesimler_avrupa.js | Harlech (k3, 0.9 g, 32.9 km · uyum 127/128) | Aberystwyth (k3, 2.6 g, 81.7 km · uyum 127/129) | <2 gün |
| Hämeenlinna | yerlesimler_avrupa.js | Tampere (k3, 1.8 g, 67.4 km · uyum 129/129) | Helsinki (k1, 2.3 g, 95.5 km · uyum 75/75) | <2 gün |
| Koil (Aligarh) | yerlesimler_asya.js | Mathura (k3, 1.3 g, 60.9 km · uyum 126/129) | Agra (k1, 1.9 g, 80.5 km · uyum 75/129) | <2 gün |
| Sirhind | yerlesimler_asya.js | Ludhiyana (k3, 1.4 g, 58.0 km · uyum 81/89) | Câlandhar (Jalandhar) (k3, 2.8 g, 108.4 km · uyum 128/129) | <2 gün |
| Attock | yerlesimler_asya.js | Râvalpindi (k3, 1.7 g, 66.4 km · uyum 59/69) | Peşâver (k3, 2.4 g, 77.1 km · uyum 65/69) | <2 gün |
| Çampâner | yerlesimler_asya.js | Baroda (Vadodara) (k2, 1.0 g, 41.7 km · uyum 73/129) | Broaç (Bharuch) (k3, 2.5 g, 102.4 km · uyum 101/129) | <2 gün · ⚠ abi merkezle sahiplik uyumu %57 |
| Mungîr (Monghyr) | yerlesimler_asya.js | Bhâgalpûr (k3, 1.3 g, 53.2 km · uyum 129/129) | Patna (Azîmâbâd) (k1, 3.7 g, 136.4 km · uyum 96/129) | <2 gün |
| Raygad | yerlesimler_asya.js | Pûne (Poona) (k2, 1.6 g, 54.2 km · uyum 120/129) | Çaul (Chaul) (k3, 1.9 g, 65.9 km · uyum 85/129) | <2 gün |
| Trichinopoly (Tiruchirappalli) | yerlesimler_asya.js | Tancûr (Thanjavur) (k1, 1.1 g, 47.5 km · uyum 102/129) | Madurai (k1, 3.0 g, 115.7 km · uyum 129/129) | <2 gün |
| Vellor (Vellore) | yerlesimler_asya.js | Arkot (Arcot) (k2, 0.4 g, 20.4 km · uyum 120/129) | Cinci (Gingee) (k1, 2.0 g, 79.3 km · uyum 87/129) | <2 gün |
| Xuzhou | yerlesimler_asya.js | Qufu (k3, 4.0 g, 157.2 km · uyum 129/129) | Hefei (k3, 6.7 g, 265.4 km · uyum 129/129) | 2-5 gün, coğrafî birliktelik (ikinci aday ≥1 gün uzak, sahiplik uyumu ≥%90) |
| Liaoyang | yerlesimler_asya.js | Mukden (Şenyang) (k1, 1.5 g, 63.6 km · uyum 129/129) | Lüşun (Port Arthur) (k3, 8.9 g, 320.1 km · uyum 124/129) | <2 gün |
| Gyantse | yerlesimler_asya.js | Şigatse (k1, 2.9 g, 78.6 km · uyum 129/129) | Lhasa (k1, 8.0 g, 171.3 km · uyum 129/129) | 2-5 gün, coğrafî birliktelik (ikinci aday ≥1 gün uzak, sahiplik uyumu ≥%90) |
| Tongguan | yerlesimler_asya.js | Xi'an (Chang'an) (k2, 3.8 g, 123.0 km · uyum 129/129) | Luoyang (k3, 6.3 g, 199.6 km · uyum 129/129) | 2-5 gün, coğrafî birliktelik (ikinci aday ≥1 gün uzak, sahiplik uyumu ≥%90) |
| Odawara | yerlesimler_asya.js | Kamakura (k2, 1.1 g, 36.7 km · uyum 129/129) | Edo (Tokyo) (k1, 1.7 g, 68.2 km · uyum 93/93) | <2 gün |
| Gifu | yerlesimler_asya.js | Nagoya (k3, 0.6 g, 30.1 km · uyum 63/63) | Fukui (k3, 2.8 g, 86.4 km · uyum 70/70) | <2 gün |
| Himeji | yerlesimler_asya.js | Okayama (k3, 2.0 g, 72.4 km · uyum 129/129) | Osaka (k2, 2.2 g, 75.8 km · uyum 127/129) | <2 gün |
| Hirosaki | yerlesimler_asya.js | Morioka (k3, 3.8 g, 116.3 km · uyum 63/63) | Sendai (k3, 8.2 g, 262.3 km · uyum 63/63) | 2-5 gün, coğrafî birliktelik (ikinci aday ≥1 gün uzak, sahiplik uyumu ≥%90) |
| Ganghwa | yerlesimler_asya.js | Kaesong (k2, 0.6 g, 25.7 km · uyum 129/129) | İnçon (Incheon) (k3, 0.8 g, 37.6 km · uyum 129/129) | <2 gün |
| Ûicu (Uiju) | yerlesimler_asya.js | Pyongyang (k3, 4.7 g, 163.6 km · uyum 129/129) | Mukden (Şenyang) (k1, 6.1 g, 205.6 km · uyum 0/129) | 2-5 gün, coğrafî birliktelik (ikinci aday ≥1 gün uzak, sahiplik uyumu ≥%90) |
| Savonlinna | yerlesimler_ek7.js | Joensuu (k3, 2.5 g, 80.4 km · uyum 129/129) | Mikkeli (k3, 4.3 g, 92.3 km · uyum 129/129) | 2-5 gün, coğrafî birliktelik (ikinci aday ≥1 gün uzak, sahiplik uyumu ≥%90) |
| Kola | yerlesimler_ek8.js | Petsamo (Peçenga) (k3, 3.4 g, 102.9 km · uyum 128/129) | Kandalakşa (k3, 5.5 g, 193.9 km · uyum 129/129) | 2-5 gün, coğrafî birliktelik (ikinci aday ≥1 gün uzak, sahiplik uyumu ≥%90) |
| Cizzah | yerlesimler_ek14.js | Semerkant (k2, 2.8 g, 90.0 km · uyum 129/129) | Hucend (k3, 4.5 g, 152.5 km · uyum 115/129) | 2-5 gün, coğrafî birliktelik (ikinci aday ≥1 gün uzak, sahiplik uyumu ≥%90) |
| Putivl | yerlesimler_ek17.js | Hluhiv (k3, 0.8 g, 38.2 km · uyum 129/129) | Novgorod-Seversk (k3, 1.9 g, 83.8 km · uyum 100/129) | <2 gün |
| Belgorod | yerlesimler_ek17.js | Harkov (k3, 1.7 g, 71.5 km · uyum 54/54) | Çuguyev (k3, 2.1 g, 85.4 km · uyum 57/57) | <2 gün |
| Simbirsk | yerlesimler_ek17.js | Buinsk (k3, 1.8 g, 72.5 km · uyum 129/129) | Kazan (k1, 4.8 g, 170.6 km · uyum 129/129) | <2 gün |
| Syzran | yerlesimler_ek22.js | Hvalınsk (k3, 2.0 g, 76.7 km · uyum 74/74) | Volsk (k3, 3.9 g, 143.0 km · uyum 47/47) | 2-5 gün, coğrafî birliktelik (ikinci aday ≥1 gün uzak, sahiplik uyumu ≥%90) |
| Somorja (Šamorín) | yerlesimler_ek29.js | Bratislava (k3, 0.5 g, 19.8 km · uyum 129/129) | Uyvar (k3, 1.4 g, 63.7 km · uyum 125/129) | <2 gün |
| İshaklı | yerlesimler_ek29.js | Karahisâr-ı Sâhib (Afyon) (k3, 1.8 g, 65.9 km · uyum 102/129) | Konya (k2, 4.1 g, 132.3 km · uyum 98/129) | <2 gün |
| Aşkale | yerlesimler_ek29.js | Erzurum (k2, 1.4 g, 48.9 km · uyum 123/129) | Bayburt (k3, 1.9 g, 54.6 km · uyum 110/129) | <2 gün |
| Silivri | yerlesimler_ek29.js | Vize (k3, 1.6 g, 68.1 km · uyum 122/129) | İstanbul (k1, 1.9 g, 61.9 km · uyum 129/129) | <2 gün |
| İshakçı (Isaccea) | yerlesimler_ek29.js | Babadağı (Babadag) (k3, 1.2 g, 47.1 km · uyum 121/129) | İbrail (k3, 1.0 g, 38.2 km · uyum 70/111) | <2 gün; en yakın İbrail ile sahiplik uyumu %63, 2 gün içindeki Babadağı (Babadag) seçildi |
| Floci (Târgu de Floci) | yerlesimler_ek29.js | İbrail (k3, 1.6 g, 65.6 km · uyum 41/99) | Silistre (k2, 1.9 g, 78.2 km · uyum 2/99) | <2 gün · ⚠ abi merkezle sahiplik uyumu %41 |
| Yagodina (Jagodina) | yerlesimler_ek29.js | Alacahisar (Kruševac) (k3, 1.2 g, 44.5 km · uyum 113/129) | Orašac (Aranđelovac) (k3, 1.8 g, 66.7 km · uyum 41/41) | <2 gün |
| Praviște (Eleftheroupoli) | yerlesimler_ek29.js | Serez (k3, 1.9 g, 62.3 km · uyum 122/129) | Gümülcine (k3, 3.3 g, 99.7 km · uyum 113/119) | <2 gün |
| Lanzaka (Lagkadas) | yerlesimler_ek29.js | Selanik (k2, 0.4 g, 16.0 km · uyum 124/129) | Yenice-i Vardar (k3, 1.6 g, 55.8 km · uyum 107/107) | <2 gün |
| Debârve | yerlesimler_h2_afrika.js | Asmara (k2, 0.7 g, 28.7 km · uyum 129/129) | Adi Kuala (k3, 1.2 g, 46.8 km · uyum 129/129) | <2 gün |
| Mekdelâ | yerlesimler_h2_afrika.js | Dese (k3, 1.5 g, 42.9 km · uyum 129/129) | Völdiya (k3, 2.5 g, 53.6 km · uyum 129/129) | <2 gün |
| Eski Ladoga | yerlesimler_h2_rusya.js | Tihvin (k3, 2.0 g, 78.7 km · uyum 129/129) | St. Petersburg (k3, 3.2 g, 109.6 km · uyum 44/44) | 2-5 gün, coğrafî birliktelik (ikinci aday ≥1 gün uzak, sahiplik uyumu ≥%90) |
| Oreşek (Nöteborg) | yerlesimler_h2_rusya.js | St. Petersburg (k3, 1.0 g, 39.3 km · uyum 44/44) | Novgorod (k1, 3.9 g, 160.0 km · uyum 111/129) | <2 gün |
| Kirillov | yerlesimler_h2_rusya.js | Belozersk (k3, 1.1 g, 38.3 km · uyum 105/105) | Vologda (k3, 3.1 g, 111.1 km · uyum 105/105) | <2 gün |
| Kungur | yerlesimler_h2_rusya.js | Perm (k3, 1.9 g, 76.8 km · uyum 40/40) | Sarapul (k3, 6.4 g, 218.3 km · uyum 55/55) | <2 gün |
| Kaşira | yerlesimler_h2_rusya.js | Tula (k3, 1.9 g, 80.0 km · uyum 81/129) | Ryazan (k1, 2.8 g, 103.6 km · uyum 81/129) | <2 gün · ⚠ abi merkezle sahiplik uyumu %63 |
| Sergiyev Posad | yerlesimler_h2_rusya.js | Dmitrov (k3, 0.9 g, 38.1 km · uyum 117/117) | Moskova (k1, 1.6 g, 70.1 km · uyum 117/117) | <2 gün |
| Sviyajsk | yerlesimler_h2_rusya.js | Kazan (k1, 0.9 g, 28.1 km · uyum 75/75) | Buinsk (k3, 2.4 g, 92.7 km · uyum 75/75) | <2 gün |
| Tetyuşi | yerlesimler_h2_rusya.js | Buinsk (k3, 0.9 g, 35.0 km · uyum 69/69) | Kazan (k1, 2.6 g, 96.8 km · uyum 69/69) | <2 gün |
| Kozmodemyansk | yerlesimler_h2_rusya.js | Çeboksarı (k3, 1.5 g, 47.7 km · uyum 68/68) | Nijniy Novgorod (k3, 4.9 g, 162.0 km · uyum 68/68) | <2 gün |
| Tsarevokokşaysk (Yoşkar-Ola) | yerlesimler_h2_rusya.js | Çeboksarı (k3, 1.6 g, 67.6 km · uyum 68/68) | Kazan (k1, 3.2 g, 120.3 km · uyum 68/68) | <2 gün |
| Menzelinsk | yerlesimler_h2_rusya.js | Yelabuga (k3, 2.0 g, 65.2 km · uyum 68/68) | Sarapul (k3, 3.2 g, 93.6 km · uyum 66/66) | <2 gün |
| Birsk | yerlesimler_h2_rusya.js | Ufa (k1, 2.2 g, 80.2 km · uyum 52/52) | Sarapul (k3, 4.6 g, 159.8 km · uyum 52/52) | 2-5 gün, coğrafî birliktelik (ikinci aday ≥1 gün uzak, sahiplik uyumu ≥%90) |
| Çernıy Yar | yerlesimler_h2_rusya.js | Tsaritsyn (k3, 4.3 g, 137.7 km · uyum 59/59) | Beldjamen (k3, 5.4 g, 145.7 km · uyum 59/59) | 2-5 gün, coğrafî birliktelik (ikinci aday ≥1 gün uzak, sahiplik uyumu ≥%90) |
| Stavropol (Volga) | yerlesimler_h2_rusya.js | Bulgar (Bolgar) (k3, 4.3 g, 165.5 km · uyum 37/37) | Çistopol (k3, 5.7 g, 221.0 km · uyum 37/37) | 2-5 gün, coğrafî birliktelik (ikinci aday ≥1 gün uzak, sahiplik uyumu ≥%90) |
| Baturin | yerlesimler_h2_rusya.js | Novgorod-Seversk (k3, 1.8 g, 76.5 km · uyum 106/129) | Hluhiv (k3, 2.2 g, 81.0 km · uyum 77/129) | <2 gün |
| Mamûra (Mehdiye) | yerlesimler_h2_kuzeyafrika.js | Rabat (k3, 0.7 g, 30.2 km · uyum 116/129) | Kasrülkebîr (k3, 2.7 g, 109.0 km · uyum 116/129) | <2 gün |
| Abalak | yerlesimler_ek31.js | Tobolsk (İsker) (k1, 0.5 g, 21.3 km · uyum 129/129) | Tümen (Çimgi-Tura) (k1, 6.1 g, 212.2 km · uyum 129/129) | <2 gün |
| Kızıl-Tura | yerlesimler_ek31.js | Tobolsk (İsker) (k1, 4.9 g, 180.9 km · uyum 129/129) | Petropavlovsk (Kızılcar) (k3, 8.7 g, 338.9 km · uyum 64/129) | 2-5 gün, coğrafî birliktelik (ikinci aday ≥1 gün uzak, sahiplik uyumu ≥%90) |
| Bacirge (Esendere) | yerlesimler_sinir_dogu.js | Yüksekova (Gever) (k3, 1.1 g, 31.4 km · uyum 129/129) | Urmiye (k2, 1.4 g, 45.4 km · uyum 46/129) | <2 gün |
| Sero | yerlesimler_sinir_dogu.js | Urmiye (k2, 1.2 g, 42.9 km · uyum 123/129) | Yüksekova (Gever) (k3, 1.3 g, 35.5 km · uyum 44/129) | <2 gün |
| Şemdinli (Şemdinni) | yerlesimler_sinir_dogu.js | Yüksekova (Gever) (k3, 1.3 g, 39.0 km · uyum 129/129) | Urmiye (k2, 2.2 g, 52.2 km · uyum 46/129) | <2 gün |
| Rāzhān | yerlesimler_sinir_dogu.js | Urmiye (k2, 0.8 g, 26.4 km · uyum 125/129) | Yüksekova (Gever) (k3, 2.2 g, 55.1 km · uyum 46/129) | <2 gün |
| Şeyhrumi (Yücelen) | yerlesimler_sinir_dogu.js | Çaldıran (k3, 0.6 g, 26.9 km · uyum 129/129) | Özalp (Saray) (k3, 0.9 g, 35.3 km · uyum 129/129) | <2 gün |
| Şeyh Salû-yi Ulyâ | yerlesimler_sinir_dogu.js | Mâku (k3, 1.6 g, 43.2 km · uyum 121/129) | Çaldıran (k3, 0.7 g, 30.3 km · uyum 60/129) | <2 gün; en yakın Çaldıran ile sahiplik uyumu %47, 2 gün içindeki Mâku seçildi |
| Kızıkermen (Gazi Kerman) | yerlesimler_ok106.js | Herson (k3, 1.7 g, 65.3 km · uyum 29/29) | Nikolayev (Mikolayiv) (k2, 2.7 g, 109.4 km · uyum 28/28) | <2 gün |
| Aralsk (Aral) | yerlesimler_ortaasya3.js | Kazalinsk (Kazalı) (k3, 3.0 g, 120.3 km · uyum 4/4) | Irgiz (Irgız) (k3, 5.0 g, 204.0 km · uyum 4/4) | 2-5 gün, coğrafî birliktelik (ikinci aday ≥1 gün uzak, sahiplik uyumu ≥%90) |
| Bedir | yerlesimler_ok107.js | Yenbu (k3, 2.1 g, 81.6 km · uyum 129/129) | Medine (k2, 3.7 g, 113.5 km · uyum 56/129) | 2-5 gün, coğrafî birliktelik (ikinci aday ≥1 gün uzak, sahiplik uyumu ≥%90) |
| Râbiğ | yerlesimler_ok107.js | Cidde (k3, 3.6 g, 140.5 km · uyum 129/129) | Mekke (k2, 4.6 g, 173.5 km · uyum 54/129) | 2-5 gün, coğrafî birliktelik (ikinci aday ≥1 gün uzak, sahiplik uyumu ≥%90) |
| Doyran | yerlesimler_ok107.js | Ustrumca (Strumica) (k3, 0.8 g, 28.9 km · uyum 128/129) | Yenice-i Vardar (k3, 1.4 g, 50.9 km · uyum 104/107) | <2 gün |
| Gevgili (Gevgelija) | yerlesimler_ok107.js | Ustrumca (Strumica) (k3, 1.0 g, 34.7 km · uyum 122/129) | Yenice-i Vardar (k3, 1.0 g, 40.2 km · uyum 105/107) | <2 gün |
| Kılkış (Avrathisar) | yerlesimler_ok107.js | Yenice-i Vardar (k3, 1.2 g, 45.4 km · uyum 107/107) | Selanik (k2, 1.0 g, 39.8 km · uyum 115/129) | <2 gün; en yakın Selanik ile sahiplik uyumu %89, 2 gün içindeki Yenice-i Vardar seçildi |
| Kaniv (Kanev) | yerlesimler_ukrayna_0916.js | Çerkasi (Cherkasy) (k3, 1.5 g, 54.5 km · uyum 129/129) | Bila Tserkva (Belaya Tserkov) (k3, 2.4 g, 96.4 km · uyum 129/129) | <2 gün |
| Fastov (Fastiv) | yerlesimler_ukrayna_0916.js | Bila Tserkva (Belaya Tserkov) (k3, 0.8 g, 35.0 km · uyum 129/129) | Kiev (k3, 1.4 g, 59.9 km · uyum 83/129) | <2 gün |
| Lovozero (Luyavr) | yerlesimler_p0037.js | Kandalakşa (k3, 4.9 g, 145.5 km · uyum 129/129) | Petsamo (Peçenga) (k3, 7.1 g, 230.1 km · uyum 128/129) | 2-5 gün, coğrafî birliktelik (ikinci aday ≥1 gün uzak, sahiplik uyumu ≥%90) |
| Białystok | yerlesimler_p0037.js | Grodno (k3, 1.8 g, 74.9 km · uyum 126/129) | Brest-Litovsk (k3, 3.0 g, 120.4 km · uyum 126/129) | <2 gün |
| Kovel | yerlesimler_p0037.js | Lutsk (Łuck) (k3, 1.6 g, 67.7 km · uyum 129/129) | Brest-Litovsk (k3, 3.1 g, 120.9 km · uyum 117/129) | <2 gün · eski m:"Lutsk" eşleşmiyordu |
| Volodymyr-Volynskyi (Włodzimierz) | yerlesimler_p0037.js | Lutsk (Łuck) (k3, 1.8 g, 71.4 km · uyum 129/129) | Lvov (k3, 3.0 g, 114.1 km · uyum 55/129) | <2 gün · eski m:"Lutsk" eşleşmiyordu |
| Rivne (Równe) | yerlesimler_p0037.js | Lutsk (Łuck) (k3, 1.7 g, 66.8 km · uyum 129/129) | Kostantinov (Starokostiantyniv) (k3, 2.9 g, 118.1 km · uyum 70/71) | <2 gün · eski m:"Lutsk" eşleşmiyordu |
| Goryeong (Daegaya) | yerlesimler_dogu_500_1281.js | Taegu (Daegu) (k3, 1.1 g, 33.8 km · uyum 129/129) | Sangju (Sangju, 尙州) (k3, 2.4 g, 76.3 km · uyum 129/129) | <2 gün |
| Wadhwan (Vardhamana) | yerlesimler_dogu_500_1281.js | Dholka (k3, 1.9 g, 77.9 km · uyum 115/129) | Ahmedâbâd (k2, 2.5 g, 97.9 km · uyum 92/103) | <2 gün |

### C2 — BELİRSİZ (yazılmadı) — 99

| ad | dosya | abi merkez / en yakın | ikinci aday | gerekçe |
|---|---|---|---|---|
| Malta | yerlesimler.js | — | — | 5 aday merkeze yürüyüş ölçülemedi / ulaşılamaz |
| Krk (Veglia) | yerlesimler.js | Karlovac (k3, 3.3 g, 86.3 km · uyum 3/69) | Trieste (k3, 3.4 g, 92.0 km · uyum 23/129) | 2-5 gün; ikinci aday Trieste de yakın (3.4 gün) |
| Cres (Cherso) | yerlesimler.js | — | — | 5 aday merkeze yürüyüş ölçülemedi / ulaşılamaz |
| Lošinj (Lussino) | yerlesimler.js | — | — | 5 aday merkeze yürüyüş ölçülemedi / ulaşılamaz · mevcut m:"Cres (Cherso)" (k:4, zincir kapanmıyor) |
| Rab (Arbe) | yerlesimler.js | Cetin (Cetingrad) (k3, 5.0 g, 86.5 km · uyum 12/129) | Drežnik (Drežnik Grad) (k3, 5.2 g, 73.7 km · uyum 12/129) | 2-5 gün; ikinci aday Drežnik (Drežnik Grad) de yakın (5.2 gün) |
| Uzunada (Dugi Otok) | yerlesimler.js | — | — | 5 aday merkeze yürüyüş ölçülemedi / ulaşılamaz |
| Brakya (Brač) | yerlesimler.js | Mostar (k3, 4.3 g, 94.3 km · uyum 3/94) | Klis (k2, 5.4 g, 28.1 km · uyum 67/129) | 2-5 gün; en yakınla sahiplik uyumu %3 |
| Hvar (Lesina) | yerlesimler.js | Mostar (k3, 3.2 g, 92.1 km · uyum 3/94) | Klis (k2, 4.3 g, 46.3 km · uyum 67/129) | 2-5 gün; en yakınla sahiplik uyumu %3 |
| Korçula (Kurzola) | yerlesimler.js | Mostar (k3, 3.9 g, 85.8 km · uyum 3/94) | Dubrovnik (k3, 4.4 g, 102.6 km · uyum 51/129) | 2-5 gün; ikinci aday Dubrovnik de yakın (4.4 gün) |
| Vis (Lissa) | yerlesimler.js | — | — | 5 aday merkeze yürüyüş ölçülemedi / ulaşılamaz |
| Mliyet (Mljet) | yerlesimler.js | — | — | 5 aday merkeze yürüyüş ölçülemedi / ulaşılamaz |
| Pantelerya | yerlesimler.js | — | — | 5 aday merkeze yürüyüş ölçülemedi / ulaşılamaz |
| Elba | yerlesimler.js | — | — | 5 aday merkeze yürüyüş ölçülemedi / ulaşılamaz |
| Hürmüz Adası | yerlesimler.js | — | — | 5 aday merkeze yürüyüş ölçülemedi / ulaşılamaz |
| Kişm (Qeshm) | yerlesimler.js | — | — | 5 aday merkeze yürüyüş ölçülemedi / ulaşılamaz |
| Kiş (Kish) | yerlesimler.js | — | — | 5 aday merkeze yürüyüş ölçülemedi / ulaşılamaz |
| Sokotra | yerlesimler.js | — | — | 5 aday merkeze yürüyüş ölçülemedi / ulaşılamaz |
| Masira | yerlesimler.js | — | — | 5 aday merkeze yürüyüş ölçülemedi / ulaşılamaz |
| Kasr-ı Şîrîn | yerlesimler.js | Şehrizor (k2, 3.8 g, 117.1 km · uyum 56/129) | Kerkük (k3, 4.3 g, 151.5 km · uyum 56/129) | 2-5 gün; ikinci aday Kerkük de yakın (4.3 gün) |
| Kelât-ı Nâdirî | yerlesimler.js | Tûs (k3, 2.2 g, 58.9 km · uyum 129/129) | Meşhed (k1, 2.8 g, 77.5 km · uyum 129/129) | 2-5 gün; ikinci aday Meşhed de yakın (2.8 gün) |
| Aktöbe | yerlesimler_ortaasya2.js | Irgiz (Irgız) (k3, 10.0 g, 350.6 km · uyum 11/11) | Sterlitamak (k3, 10.6 g, 381.8 km · uyum 11/11) | en yakın merkez 10.0 gün (>5) |
| Berwick-upon-Tweed | yerlesimler_avrupa.js | Edinburg (k1, 2.4 g, 76.8 km · uyum 61/129) | Newcastle (k3, 2.4 g, 91.6 km · uyum 118/129) | 2-5 gün; ikinci aday Newcastle de yakın (2.4 gün) |
| Cebelitarık (Gibraltar) | yerlesimler_avrupa.js | Ronda (k3, 2.2 g, 69.1 km · uyum 68/129) | Cádiz (k3, 2.9 g, 94.3 km · uyum 53/129) | 2-5 gün; ikinci aday Cádiz de yakın (2.9 gün) |
| Viipuri (Vyborg) | yerlesimler_avrupa.js | St. Petersburg (k3, 3.4 g, 123.8 km · uyum 18/44) | Mikkeli (k3, 3.7 g, 133.8 km · uyum 111/129) | 2-5 gün; ikinci aday Mikkeli de yakın (3.7 gün) |
| Hisâr-ı Fîrûze | yerlesimler_asya.js | Pânipat (k3, 3.1 g, 124.7 km · uyum 110/114) | Delhi (k1, 4.0 g, 156.2 km · uyum 77/114) | 2-5 gün; ikinci aday Delhi de yakın (4.0 gün) |
| Caysalmer | yerlesimler_asya.js | Codhpûr (Jodhpur) (k1, 5.9 g, 221.0 km · uyum 87/93) | Şikârpûr (k3, 6.9 g, 252.7 km · uyum 0/61) | en yakın merkez 5.9 gün (>5) |
| Gvalyar (Gwalior) | yerlesimler_asya.js | Etâve (Etawah) (k3, 2.8 g, 103.6 km · uyum 65/129) | Agra (k1, 2.9 g, 108.2 km · uyum 47/129) | 2-5 gün; ikinci aday Agra de yakın (2.9 gün) |
| Raycur (Raichur) | yerlesimler_asya.js | Kurnûl (Kurnool) (k3, 2.3 g, 84.3 km · uyum 98/129) | Vijayanagara (Hampi) (k1, 3.3 g, 136.3 km · uyum 56/118) | 2-5 gün; en yakınla sahiplik uyumu %76 |
| Kalgan (Zhangjiakou) | yerlesimler_asya.js | Pekin (Hanbalık) (k1, 5.2 g, 164.4 km · uyum 99/99) | Baoding (k3, 7.7 g, 221.5 km · uyum 99/99) | en yakın merkez 5.2 gün (>5) |
| Datong | yerlesimler_asya.js | Hohhot (Kuku-hoto) (k3, 5.0 g, 156.5 km · uyum 56/69) | Taiyuan (k3, 7.8 g, 254.0 km · uyum 129/129) | 2-5 gün; en yakınla sahiplik uyumu %81 |
| Anqing | yerlesimler_asya.js | Jiujiang (k3, 3.8 g, 134.5 km · uyum 128/129) | Hefei (k3, 3.8 g, 147.1 km · uyum 127/129) | 2-5 gün; ikinci aday Hefei de yakın (3.8 gün) |
| Jingzhou | yerlesimler_asya.js | Wuchang (Wuhan) (k3, 5.4 g, 207.1 km · uyum 129/129) | Changsha (k2, 6.9 g, 247.2 km · uyum 127/129) | en yakın merkez 5.4 gün (>5) |
| Xiangyang | yerlesimler_asya.js | Wuchang (Wuhan) (k3, 7.4 g, 264.7 km · uyum 129/129) | Luoyang (k3, 9.1 g, 296.9 km · uyum 129/129) | en yakın merkez 7.4 gün (>5) |
| Zhangye (Ganzhou) | yerlesimler_asya.js | Ejin (Hara-Hoto) (k3, 9.2 g, 340.7 km · uyum 74/129) | Xining (k3, 10.0 g, 282.4 km · uyum 111/129) | en yakın merkez 9.2 gün (>5) |
| Ciyayuguan (Jiayuguan) | yerlesimler_asya.js | Ejin (Hara-Hoto) (k3, 9.1 g, 335.0 km · uyum 56/110) | Dunhuang (k3, 9.3 g, 311.8 km · uyum 71/110) | en yakın merkez 9.1 gün (>5) |
| Yinchuan (Ningxia) | yerlesimler_asya.js | Xiazhou (Tongwancheng) (k3, 6.6 g, 235.2 km) | Yan'an (k3, 10.6 g, 357.2 km · uyum 129/129) | en yakın merkez 6.6 gün (>5) |
| Ningguta | yerlesimler_asya.js | Cilin (Jilin) (k3, 7.8 g, 240.3 km · uyum 50/50) | Harbin (k3, 8.7 g, 281.8 km · uyum 5/5) | en yakın merkez 7.8 gün (>5) |
| Aigun | yerlesimler_asya.js | — | — | 5 aday merkeze yürüyüş ölçülemedi / ulaşılamaz |
| Uliastay | yerlesimler_asya.js | Gobi-Altay (Yösönbulag) (k3, 5.0 g, 159.0 km · uyum 2/38) | Mörön (Hövsgöl) (k3, 11.6 g, 321.8 km · uyum 2/38) | en yakın merkez 5.0 gün (>5) |
| Kobdo (Hovd) | yerlesimler_asya.js | Altay (Şara Sume) (k3, 11.1 g, 263.0 km · uyum 56/129) | Gobi-Altay (Yösönbulag) (k3, 12.7 g, 394.0 km · uyum 72/129) | en yakın merkez 11.1 gün (>5) |
| Şanhayguan | yerlesimler_asya.js | Cehol (Chengde) (k3, 6.0 g, 187.5 km · uyum 44/44) | Tiencin (Tianjin) (k3, 7.1 g, 242.1 km · uyum 104/104) | en yakın merkez 6.0 gün (>5) |
| Qiqihar | yerlesimler_asya.js | Harbin (k3, 7.0 g, 264.3 km · uyum 5/5) | Cilin (Jilin) (k3, 11.4 g, 441.9 km · uyum 47/47) | en yakın merkez 7.0 gün (>5) |
| Kumamoto | yerlesimler_asya.js | Hakata (Fukuoka) (k3, 2.6 g, 92.1 km · uyum 129/129) | Funai (Ōita) (k3, 3.2 g, 97.4 km · uyum 129/129) | 2-5 gün; ikinci aday Funai (Ōita) de yakın (3.2 gün) |
| Aizu-Wakamatsu | yerlesimler_asya.js | Niigata (k3, 3.4 g, 91.6 km · uyum 129/129) | Sendai (k3, 4.0 g, 119.3 km · uyum 65/65) | 2-5 gün; ikinci aday Sendai de yakın (4.0 gün) |
| Kyongsong (Gyeongseong) | yerlesimler_asya.js | Hamhung (k3, 9.5 g, 253.5 km · uyum 98/98) | Wonsan (k3, 11.9 g, 326.2 km · uyum 98/98) | en yakın merkez 9.5 gün (>5) |
| Prome (Pyay) | yerlesimler_asya.js | Sandoway (Thandwe) (k3, 3.2 g, 98.5 km · uyum 22/129) | Toungoo (k1, 3.5 g, 129.5 km · uyum 122/129) | 2-5 gün; ikinci aday Toungoo de yakın (3.5 gün) |
| Lạng Sơn | yerlesimler_asya.js | Bac Giang (k3, 2.4 g, 87.8 km · uyum 129/129) | Cao Bằng (k2, 3.1 g, 104.3 km · uyum 112/129) | 2-5 gün; ikinci aday Cao Bằng de yakın (3.1 gün) |
| Lappeenranta | yerlesimler_ek7.js | Mikkeli (k3, 2.4 g, 85.4 km · uyum 115/129) | St. Petersburg (k3, 4.8 g, 171.8 km · uyum 14/44) | 2-5 gün; en yakınla sahiplik uyumu %89 |
| Cēsis (Wenden) | yerlesimler_ek7.js | Riga (k1, 2.2 g, 81.4 km · uyum 116/129) | Pärnu (k3, 3.2 g, 128.1 km · uyum 128/129) | 2-5 gün; en yakınla sahiplik uyumu %90 |
| Daugavpils (Dünaburg) | yerlesimler_ek7.js | Vilnius (k1, 4.0 g, 154.4 km · uyum 73/129) | Polotsk (k3, 4.2 g, 147.7 km · uyum 72/129) | 2-5 gün; ikinci aday Polotsk de yakın (4.2 gün) |
| Vardø | yerlesimler_ek8.js | İnari (k3, 7.0 g, 225.3 km · uyum 0/129) | Petsamo (Peçenga) (k3, 7.2 g, 91.4 km · uyum 0/129) | en yakın merkez 7.0 gün (>5) |
| Pustozersk | yerlesimler_ek8.js | Ust-Tsilma (k3, 5.9 g, 232.9 km · uyum 85/85) | — | en yakın merkez 5.9 gün (>5) |
| Hisar | yerlesimler_ek14.js | Külâb (Kulob) (k3, 4.8 g, 127.2 km · uyum 129/129) | Termez (k3, 5.2 g, 182.5 km · uyum 129/129) | 2-5 gün; ikinci aday Termez de yakın (5.2 gün) |
| Almatı (Vernıy) | yerlesimler_ek14.js | Balasagun (Ak-Beşim) (k2, 5.4 g, 144.4 km · uyum 121/129) | Kopal (Kapal) (k3, 9.2 g, 271.1 km · uyum 129/129) | en yakın merkez 5.4 gün (>5) |
| Çimkent | yerlesimler_ek15.js | Taşkent (k1, 3.1 g, 115.0 km · uyum 81/129) | Türkistan (Yesi) (k3, 4.0 g, 155.1 km · uyum 129/129) | 2-5 gün; ikinci aday Türkistan (Yesi) de yakın (4.0 gün) |
| Tambov | yerlesimler_ek17.js | Voronej (k3, 5.4 g, 193.9 km · uyum 119/129) | Ryazan (k1, 6.0 g, 240.3 km · uyum 58/129) | en yakın merkez 5.4 gün (>5) |
| Penza | yerlesimler_ek17.js | Temnikov (k3, 5.2 g, 197.5 km · uyum 61/129) | Saratov (k3, 5.3 g, 198.4 km · uyum 52/67) | en yakın merkez 5.2 gün (>5) |
| Zaysan | yerlesimler_ek20.js | Çöçek (Tarbagatay) (k3, 5.6 g, 163.7 km · uyum 117/129) | Altay (Şara Sume) (k3, 7.6 g, 248.0 km · uyum 117/129) | en yakın merkez 5.6 gün (>5) |
| Borisoglebsk | yerlesimler_ek22.js | Voronej (k3, 5.5 g, 203.7 km · uyum 84/129) | Ostrogojsk (k3, 6.3 g, 218.0 km · uyum 52/54) | en yakın merkez 5.5 gün (>5) |
| Kamışin | yerlesimler_ek22.js | Beldjamen (k3, 3.3 g, 127.3 km · uyum 111/129) | Yeni Saray (Tsarev) (k1, 4.0 g, 155.3 km · uyum 111/129) | 2-5 gün; ikinci aday Yeni Saray (Tsarev) de yakın (4.0 gün) |
| Petrovsk (Saratov) | yerlesimler_ek22.js | Saratov (k3, 2.5 g, 98.0 km · uyum 67/67) | Ukek (Uvek) (k3, 2.6 g, 102.0 km · uyum 121/129) | 2-5 gün; ikinci aday Ukek (Uvek) de yakın (2.6 gün) |
| Samara | yerlesimler_ek22.js | Hvalınsk (k3, 5.5 g, 158.4 km · uyum 74/74) | Bulgar (Bolgar) (k3, 5.7 g, 210.8 km · uyum 106/129) | en yakın merkez 5.5 gün (>5) |
| Taleh | yerlesimler_h2_afrika.js | Garove (k3, 2.0 g, 83.1 km · uyum 88/129) | Lasanod (k3, 3.6 g, 138.2 km · uyum 129/129) | 2-5 gün; en yakınla sahiplik uyumu %68 |
| Olonets | yerlesimler_h2_rusya.js | Petrozavodsk (k3, 3.2 g, 116.5 km · uyum 44/44) | Tihvin (k3, 3.9 g, 151.3 km · uyum 55/55) | 2-5 gün; ikinci aday Tihvin de yakın (3.9 gün) |
| Solovki (Solovetsky) | yerlesimler_h2_rusya.js | — | — | 5 aday merkeze yürüyüş ölçülemedi / ulaşılamaz |
| Velikiye Luki | yerlesimler_h2_rusya.js | Vitebsk (k3, 3.4 g, 129.0 km · uyum 30/129) | Polotsk (k3, 3.9 g, 143.7 km · uyum 30/129) | 2-5 gün; ikinci aday Polotsk de yakın (3.9 gün) |
| Kolomna | yerlesimler_h2_rusya.js | Ryazan (k1, 2.4 g, 79.5 km · uyum 85/129) | Moskova (k1, 3.0 g, 105.2 km · uyum 125/129) | 2-5 gün; ikinci aday Moskova de yakın (3.0 gün) |
| Serpuhov | yerlesimler_h2_rusya.js | Tula (k3, 2.2 g, 81.5 km · uyum 81/129) | Moskova (k1, 2.3 g, 94.5 km · uyum 126/129) | 2-5 gün; ikinci aday Moskova de yakın (2.3 gün) |
| Mojaysk | yerlesimler_h2_rusya.js | Kaluga (k3, 2.8 g, 111.5 km · uyum 120/129) | Moskova (k1, 2.8 g, 104.2 km · uyum 124/129) | 2-5 gün; ikinci aday Moskova de yakın (2.8 gün) |
| Volokolamsk | yerlesimler_h2_rusya.js | Tver (k1, 2.3 g, 91.5 km · uyum 88/129) | Dmitrov (k3, 2.9 g, 102.7 km · uyum 129/129) | 2-5 gün; ikinci aday Dmitrov de yakın (2.9 gün) |
| Alatır | yerlesimler_h2_rusya.js | Buinsk (k3, 3.1 g, 110.3 km · uyum 74/74) | Çeboksarı (k3, 4.1 g, 151.5 km · uyum 74/74) | 2-5 gün; ikinci aday Çeboksarı de yakın (4.1 gün) |
| Yenotayevsk | yerlesimler_h2_rusya.js | — | — | 5 aday merkeze yürüyüş ölçülemedi / ulaşılamaz |
| Krasnıy Yar | yerlesimler_h2_rusya.js | — | — | 5 aday merkeze yürüyüş ölçülemedi / ulaşılamaz |
| Uralsk (Yayık) | yerlesimler_h2_rusya.js | Volsk (k3, 8.1 g, 290.9 km · uyum 47/47) | Hvalınsk (k3, 9.2 g, 266.4 km · uyum 56/74) | en yakın merkez 8.1 gün (>5) |
| İlek | yerlesimler_h2_rusya.js | Sterlitamak (k3, 8.0 g, 291.8 km · uyum 32/32) | Buğulma (k3, 9.2 g, 337.7 km · uyum 37/37) | en yakın merkez 8.0 gün (>5) |
| Orenburg | yerlesimler_h2_rusya.js | Sterlitamak (k3, 5.7 g, 215.1 km · uyum 32/32) | Ufa (k1, 8.9 g, 335.7 km · uyum 36/36) | en yakın merkez 5.7 gün (>5) |
| Orsk | yerlesimler_h2_rusya.js | Irgiz (Irgız) (k3, 8.9 g, 350.5 km · uyum 15/38) | Sterlitamak (k3, 9.3 g, 320.5 km · uyum 32/32) | en yakın merkez 8.9 gün (>5) |
| Buzuluk | yerlesimler_h2_rusya.js | Buğulma (k3, 5.2 g, 198.0 km · uyum 38/38) | Sterlitamak (k3, 7.8 g, 263.3 km · uyum 32/32) | en yakın merkez 5.2 gün (>5) |
| Bâdis (Peñón de Vélez) | yerlesimler_h2_kuzeyafrika.js | Şefşâven (k3, 4.0 g, 88.1 km · uyum 19/91) | Tâze (Taza) (k3, 4.0 g, 110.4 km · uyum 57/129) | 2-5 gün; ikinci aday Tâze (Taza) de yakın (4.0 gün) |
| el-Hüseyme (Alhucemas) | yerlesimler_h2_kuzeyafrika.js | Melîle (Melilla) (k3, 3.6 g, 90.4 km · uyum 94/129) | Tâze (Taza) (k3, 4.3 g, 115.6 km · uyum 79/129) | 2-5 gün; ikinci aday Tâze (Taza) de yakın (4.3 gün) |
| Ket Ostrogu (Ketsk) | yerlesimler_sibirya.js | — | — | 5 aday merkeze yürüyüş ölçülemedi / ulaşılamaz |
| Narva | yerlesimler_ek11.js | St. Petersburg (k3, 3.9 g, 135.6 km · uyum 39/44) | Tartu (Dorpat) (k3, 4.0 g, 139.4 km · uyum 107/129) | 2-5 gün; ikinci aday Tartu (Dorpat) de yakın (4.0 gün) |
| Elmina (São Jorge da Mina) | yerlesimler_e9353f.js | Kumasi (k1, 4.8 g, 181.1 km · uyum 5/45) | Abomey (k1, 12.2 g, 437.5 km · uyum 0/60) | 2-5 gün; en yakınla sahiplik uyumu %11 |
| Yelisavetgrad (Aziz Yelizaveta Kalesi) | yerlesimler_ok106.js | Çerkasi (Cherkasy) (k3, 2.6 g, 105.0 km · uyum 26/34) | Kremençuk (k3, 2.9 g, 105.5 km · uyum 34/34) | 2-5 gün; ikinci aday Kremençuk de yakın (2.9 gün) |
| Sayram (İsficâb) | yerlesimler_ok107.js | Taşkent (k1, 3.3 g, 118.1 km · uyum 81/129) | Türkistan (Yesi) (k3, 4.5 g, 167.5 km · uyum 129/129) | 2-5 gün; en yakınla sahiplik uyumu %63 |
| Bilma | yerlesimler_ok107.js | — | — | 5 aday merkeze yürüyüş ölçülemedi / ulaşılamaz |
| Zamantı (Pınarbaşı) | yerlesimler_anadolu_0914.js | Kayseri (k3, 2.1 g, 64.5 km · uyum 98/129) | Sivas (k2, 4.0 g, 132.2 km · uyum 95/129) | 2-5 gün; en yakınla sahiplik uyumu %76 |
| Mesudiye (Milas) | yerlesimler_anadolu_0914.js | Karahisâr-ı Şarkî (Şebinkarahisar) (k2, 2.2 g, 58.6 km · uyum 90/129) | Sivas (k2, 4.0 g, 102.3 km · uyum 99/129) | 2-5 gün; en yakınla sahiplik uyumu %70 |
| Gölköy (Habsamana) | yerlesimler_anadolu_0914.js | Karahisâr-ı Şarkî (Şebinkarahisar) (k2, 3.2 g, 81.5 km · uyum 90/129) | Tokat (k3, 4.3 g, 99.2 km · uyum 99/129) | 2-5 gün; en yakınla sahiplik uyumu %70 |
| Göksun | yerlesimler_anadolu_0914.js | Maraş (k2, 2.7 g, 62.9 km · uyum 116/129) | Kayseri (k3, 4.3 g, 119.1 km · uyum 94/129) | 2-5 gün; en yakınla sahiplik uyumu %90 |
| Gürün | yerlesimler_anadolu_0914.js | Malatya (k3, 3.6 g, 101.3 km · uyum 17/17) | Sivas (k2, 3.6 g, 116.5 km · uyum 92/129) | 2-5 gün; ikinci aday Sivas de yakın (3.6 gün) |
| Gemerek | yerlesimler_anadolu_0914.js | Kayseri (k3, 2.0 g, 71.9 km · uyum 95/129) | Sivas (k2, 3.1 g, 102.4 km · uyum 92/129) | 2-5 gün; en yakınla sahiplik uyumu %74 |
| Reşadiye (İskefsir) | yerlesimler_anadolu_0914.js | Tokat (k3, 2.4 g, 67.0 km · uyum 99/129) | Sivas (k2, 2.7 g, 76.6 km · uyum 99/129) | 2-5 gün; ikinci aday Sivas de yakın (2.7 gün) |
| Varzuga | yerlesimler_p0037.js | Ponoy (k3, 6.3 g, 213.3 km · uyum 129/129) | Kandalakşa (k3, 6.4 g, 203.1 km · uyum 129/129) | en yakın merkez 6.3 gün (>5) |
| Pinsk | yerlesimler_p0037.js | Lutsk (Łuck) (k3, 4.0 g, 161.5 km · uyum 117/129) | Brest-Litovsk (k3, 4.3 g, 165.2 km · uyum 129/129) | 2-5 gün; ikinci aday Brest-Litovsk de yakın (4.3 gün) |
| Jindo | yerlesimler_dogu_500_1281.js | Concu (Jeonju) (k3, 4.7 g, 169.9 km · uyum 129/129) | Sabi (Buyeo) (k3, 5.5 g, 208.0 km · uyum 129/129) | 2-5 gün; ikinci aday Sabi (Buyeo) de yakın (5.5 gün) |
| Valverde (El Hierro) | yerlesimler_ek_atlantik_adalar.js | — | — | 5 aday merkeze yürüyüş ölçülemedi / ulaşılamaz |
| Edinburgh of the Seven Seas (Tristan da Cunha) | yerlesimler_ek_atlantik_adalar.js | — | — | 5 aday merkeze yürüyüş ölçülemedi / ulaşılamaz |
| Jan Mayen (Olonkinbyen) | yerlesimler_ek_atlantik_adalar.js | — | — | 5 aday merkeze yürüyüş ölçülemedi / ulaşılamaz |

### C3 — BAĞLI (mevcut `m:` zinciri k≤3 merkeze kapanıyor; dokunulmadı) — 586

| ad | dosya | `m:` zinciri | `m:`e yürüyüş | `m:` ile uyum | en yakın merkez | işaret |
|---|---|---|---|---|---|---|
| Yenişehir (Bursa) | yerlesimler.js | Bursa | 1.5 g | 120/125 | İznik (k3, 0.4 g, 19.5 km · uyum 119/125) |  |
| İnegöl | yerlesimler.js | Bursa | 1.4 g | 124/129 | İznik (k3, 1.3 g, 42.7 km · uyum 123/129) |  |
| Aydos Kalesi | yerlesimler.js | Bursa | 5.1 g | 128/129 | Üsküdar (k3, 0.5 g, 21.3 km · uyum 129/129) | m: merkezi >5 gün, Üsküdar <2 gün |
| Geyve | yerlesimler.js | Bursa | 4.0 g | 125/129 | İznik (k3, 1.9 g, 48.8 km · uyum 124/129) |  |
| Köprühisar (Yenişehir) | yerlesimler.js | Bursa | 1.5 g | 124/129 | İznik (k3, 0.9 g, 29.1 km · uyum 123/129) |  |
| Marmaracık | yerlesimler.js | Bursa | 1.8 g | 125/129 | İznik (k3, 0.3 g, 14.7 km · uyum 124/129) |  |
| Akhisar (Pamukova) | yerlesimler.js | Bursa | 3.3 g | 125/129 | İznik (k3, 1.2 g, 37.4 km · uyum 124/129) |  |
| Mekece | yerlesimler.js | Bursa | 4.0 g | 125/129 | İzmit (k3, 1.5 g, 35.6 km · uyum 122/129) |  |
| Kestel | yerlesimler.js | Bursa | 0.2 g | 125/129 | Bursa (k1, 0.2 g, 9.7 km · uyum 125/129) |  |
| Ulubat | yerlesimler.js | Bursa | 1.1 g | 127/129 | Mudanya (k3, 0.9 g, 34.6 km · uyum 126/129) |  |
| Harmankaya | yerlesimler.js | Bursa | 3.0 g | 127/129 | Söğüt (k1, 0.5 g, 19.4 km · uyum 122/129) |  |
| Akyazı | yerlesimler.js | İstanbul | 4.4 g | 103/129 | İzmit (k3, 1.9 g, 60.2 km · uyum 126/129) | m: ile sahiplik uyumu %80 |
| İmralı Adası | yerlesimler.js | Bursa | ulasilmaz | 129/129 | — |  |
| Kandıra | yerlesimler.js | İstanbul | 2.8 g | 103/129 | İzmit (k3, 0.9 g, 39.5 km · uyum 126/129) | m: ile sahiplik uyumu %80 |
| Yalova | yerlesimler.js | Bursa | 1.9 g | 129/129 | Gemlik (Kios) (k3, 0.7 g, 26.2 km · uyum 129/129) |  |
| Karamürsel | yerlesimler.js | Bursa | 2.6 g | 129/129 | İznik (k3, 1.0 g, 30.4 km · uyum 128/129) |  |
| Armutlu | yerlesimler.js | Bursa | 2.2 g | 129/129 | Gemlik (Kios) (k3, 1.1 g, 29.1 km · uyum 129/129) |  |
| Otranto | yerlesimler.js | Yanya | ölçülmedi | 1/129 | Lecce (k3, 0.8 g, 35.6 km · uyum 128/129) | m: merkezi >5 gün, Lecce <2 gün; m: ile sahiplik uyumu %1 |
| Enez | yerlesimler.js | Edirne | 3.4 g | 109/129 | Meriç (İpsala kuzeyi) (k3, 1.7 g, 59.6 km · uyum 109/129) | m: ile sahiplik uyumu %84 |
| Datça | yerlesimler.js | Muğla | 3.2 g | 129/129 | Muğla (k2, 3.2 g, 81.1 km · uyum 129/129) |  |
| Marmaris | yerlesimler.js | Muğla | 1.4 g | 129/129 | Muğla (k2, 1.4 g, 40.8 km · uyum 129/129) |  |
| Fethiye (Makri) | yerlesimler.js | Muğla | 3.6 g | 129/129 | Muğla (k2, 3.6 g, 94.1 km · uyum 129/129) |  |
| Kuşadası | yerlesimler.js | İzmir | 1.9 g | 113/129 | Aydın (k3, 1.6 g, 51.0 km · uyum 117/129) | m: ile sahiplik uyumu %88 |
| Söke | yerlesimler.js | İzmir | 2.3 g | 113/129 | Aydın (k3, 1.3 g, 39.4 km · uyum 120/129) | m: ile sahiplik uyumu %88 |
| Bozüyük | yerlesimler.js | Bursa | 3.3 g | 120/129 | Söğüt (k1, 0.3 g, 17.5 km · uyum 129/129) |  |
| Ermeni Derbendi | yerlesimler.js | Bursa | 3.0 g | 120/129 | Söğüt (k1, 0.5 g, 19.8 km · uyum 129/129) |  |
| Pazaryeri | yerlesimler.js | Bursa | 2.7 g | 120/129 | Söğüt (k1, 0.7 g, 24.5 km · uyum 129/129) |  |
| Bilecik | yerlesimler.js | Bursa | 2.9 g | 123/128 | Söğüt (k1, 0.5 g, 22.0 km · uyum 125/128) |  |
| Adapazarı | yerlesimler.js | İstanbul | 3.7 g | 75/75 | İzmit (k3, 1.2 g, 41.0 km · uyum 75/75) |  |
| Bergama | yerlesimler.js | İzmir | 2.4 g | 106/129 | Manisa (k3, 1.9 g, 60.4 km · uyum 109/129) | m: ile sahiplik uyumu %82 |
| Çeşme | yerlesimler.js | İzmir | 2.6 g | 117/129 | İzmir (k2, 2.6 g, 72.3 km · uyum 117/129) |  |
| Ereğli (Konya) | yerlesimler.js | Konya | 3.7 g | 116/129 | Niğde (k3, 1.9 g, 75.1 km · uyum 111/129) | m: ile sahiplik uyumu %90 |
| Anamur | yerlesimler.js | Antalya | 8.1 g | 91/129 | Alanya (k3, 3.8 g, 91.7 km · uyum 91/129) | m: ile sahiplik uyumu %71 |
| Silifke | yerlesimler.js | Konya | 6.7 g | 114/129 | Mersin (k3, 3.1 g, 82.8 km · uyum 50/51) | m: ile sahiplik uyumu %88 |
| Zonguldak | yerlesimler.js | Kastamonu | 5.8 g | 5/5 | Kastamonu (k3, 5.8 g, 166.4 km · uyum 5/5) |  |
| Osmaniye | yerlesimler.js | Adana | 2.4 g | 12/12 | Dörtyol (k3, 0.8 g, 25.6 km · uyum 12/12) |  |
| Nevşehir (Muşkara) | yerlesimler.js | Konya | ölçülmedi | 119/129 | Aksaray (k3, 1.8 g, 65.5 km · uyum 123/129) | m: merkezi >5 gün, Aksaray <2 gün |
| Ürgüp | yerlesimler.js | Konya | ölçülmedi | 112/129 | Kayseri (k3, 1.7 g, 50.7 km · uyum 120/129) | m: merkezi >5 gün, Kayseri <2 gün; m: ile sahiplik uyumu %87 |
| Karabük | yerlesimler.js | Kastamonu | 3.4 g | 5/5 | Kastamonu (k3, 3.4 g, 98.3 km · uyum 5/5) |  |
| Amasra | yerlesimler.js | Ankara | 7.4 g | 93/129 | Kastamonu (k3, 4.3 g, 123.0 km · uyum 93/129) | m: ile sahiplik uyumu %72 |
| Bartın | yerlesimler.js | Ankara | 7.0 g | 97/129 | Kastamonu (k3, 4.3 g, 123.3 km · uyum 123/129) | m: ile sahiplik uyumu %75 |
| Safranbolu | yerlesimler.js | Ankara | 5.2 g | 97/129 | Kastamonu (k3, 3.2 g, 91.6 km · uyum 123/129) | m: ile sahiplik uyumu %75 |
| Giresun | yerlesimler.js | Trabzon | 5.2 g | 129/129 | Karahisâr-ı Şarkî (Şebinkarahisar) (k2, 2.7 g, 70.1 km · uyum 90/129) |  |
| Ordu (Bayramlı) | yerlesimler.js | Trabzon | 7.2 g | 106/129 | Karahisâr-ı Şarkî (Şebinkarahisar) (k2, 3.7 g, 90.7 km · uyum 90/129) | m: ile sahiplik uyumu %82 |
| Ünye | yerlesimler.js | Trabzon | 9.2 g | 106/129 | Samsun (k3, 2.7 g, 81.6 km · uyum 99/129) | m: ile sahiplik uyumu %82 |
| Rize | yerlesimler.js | Trabzon | 3.1 g | 129/129 | Trabzon (k2, 3.1 g, 67.2 km · uyum 129/129) |  |
| Ardahan | yerlesimler.js | Erzurum | ölçülmedi | 88/129 | Hanak (k3, 0.5 g, 18.4 km · uyum 75/129) | m: merkezi >5 gün, Hanak <2 gün; m: ile sahiplik uyumu %68 |
| Eski Malatya (Battalgazi) | yerlesimler.js | Malatya | 0.0 g | 17/17 | Malatya (k3, 0.0 g, 8.1 km · uyum 17/17) |  |
| Çorlu | yerlesimler.js | Edirne | 3.2 g | 129/129 | Vize (k3, 1.1 g, 46.1 km · uyum 117/129) |  |
| Lüleburgaz | yerlesimler.js | Edirne | 1.9 g | 129/129 | Vize (k3, 1.0 g, 38.6 km · uyum 117/129) |  |
| Malkara | yerlesimler.js | Edirne | 2.4 g | 129/129 | Uzunköprü (k3, 1.1 g, 45.7 km · uyum 96/96) |  |
| Keşan | yerlesimler.js | Edirne | 2.4 g | 129/129 | Meriç (İpsala kuzeyi) (k3, 1.0 g, 42.1 km · uyum 129/129) |  |
| İpsala | yerlesimler.js | Edirne | 2.3 g | 129/129 | Meriç (İpsala kuzeyi) (k3, 0.7 g, 31.0 km · uyum 129/129) |  |
| Kilitbahir | yerlesimler.js | Edirne | ölçülmedi | 92/92 | Çanakkale (k3, 0.0 g, 4.2 km · uyum 92/92) | m: merkezi >5 gün, Çanakkale <2 gün |
| Çirmen | yerlesimler.js | Edirne | 0.8 g | 127/129 | Mustafapaşa (Svilengrad) (k3, 0.0 g, 5.2 km · uyum 128/129) |  |
| Eski Zağra (Stara Zagora) | yerlesimler.js | Sofya | ölçülmedi | 122/129 | Klokotnitsa (k3, 1.3 g, 49.5 km · uyum 129/129) | m: merkezi >5 gün, Klokotnitsa <2 gün |
| Tatarpazarcığı | yerlesimler.js | Sofya | 3.2 g | 85/90 | Filibe (k3, 0.8 g, 34.8 km · uyum 90/90) |  |
| İhtiman | yerlesimler.js | Sofya | 1.5 g | 127/129 | Sofya (k2, 1.5 g, 50.2 km · uyum 127/129) |  |
| Köstendil | yerlesimler.js | Sofya | 2.8 g | 125/129 | İştip (Štip) (k3, 2.7 g, 72.5 km · uyum 101/129) |  |
| Petriç | yerlesimler.js | Selanik | 3.6 g | 113/129 | Ustrumca (Strumica) (k3, 1.5 g, 46.9 km · uyum 122/129) | m: ile sahiplik uyumu %88 |
| Nevrokop (Gotse Delçev) | yerlesimler.js | Selanik | 4.8 g | 113/129 | Serez (k3, 2.3 g, 56.1 km · uyum 119/129) | m: ile sahiplik uyumu %88 |
| Drama | yerlesimler.js | Selanik | 3.9 g | 102/116 | Serez (k3, 1.6 g, 51.0 km · uyum 108/116) | m: ile sahiplik uyumu %88 |
| Çimpe | yerlesimler.js | Edirne | ölçülmedi | 126/129 | Gelibolu (k3, 0.1 g, 11.2 km · uyum 129/129) | m: merkezi >5 gün, Gelibolu <2 gün |
| Dimetoka | yerlesimler.js | Edirne | 0.8 g | 127/129 | Orestiada (Kumçiftliği) (k3, 0.3 g, 17.5 km · uyum 129/129) |  |
| Kırklareli | yerlesimler.js | Edirne | 1.4 g | 127/129 | Kofçaz (k3, 0.6 g, 22.7 km · uyum 129/129) |  |
| Tekirdağ | yerlesimler.js | Edirne | 2.9 g | 129/129 | Vize (k3, 1.8 g, 68.9 km · uyum 117/129) |  |
| Tırnova | yerlesimler.js | Sofya | ölçülmedi | 127/129 | Gabrovo (k3, 0.9 g, 34.2 km · uyum 129/129) | m: merkezi >5 gün, Gabrovo <2 gün |
| Kavala | yerlesimler.js | Selanik | 4.6 g | 124/129 | Serez (k3, 2.2 g, 74.4 km · uyum 122/129) |  |
| Ohri | yerlesimler.js | Üsküp | 4.7 g | 117/129 | Manastır (k3, 1.6 g, 45.7 km · uyum 129/129) |  |
| Arta | yerlesimler.js | Yanya | 1.8 g | 111/129 | Yanya (k2, 1.8 g, 57.3 km · uyum 111/129) | m: ile sahiplik uyumu %86 |
| Vostitsa (Aigion) | yerlesimler.js | Mora (Tripoliçe) | 3.5 g | 92/93 | İnebahtı (k3, 1.1 g, 27.6 km · uyum 80/93) |  |
| Kalavrita (Kalavryta) | yerlesimler.js | Mora (Tripoliçe) | 2.4 g | 92/93 | Balyabadra (Patras) (k3, 1.4 g, 40.5 km · uyum 93/93) |  |
| Damala (Troizen) | yerlesimler.js | Mora (Tripoliçe) | 3.3 g | 128/129 | Anabolu (Nauplion) (k3, 1.6 g, 48.0 km · uyum 76/129) |  |
| Methana | yerlesimler.js | Mora (Tripoliçe) | 3.7 g | 128/129 | Anabolu (Nauplion) (k3, 2.2 g, 51.2 km · uyum 76/129) |  |
| Ermiyoni (Hermione) | yerlesimler.js | Mora (Tripoliçe) | 3.2 g | 128/129 | Anabolu (Nauplion) (k3, 1.6 g, 44.3 km · uyum 76/129) |  |
| Kranidi | yerlesimler.js | Mora (Tripoliçe) | 3.2 g | 128/129 | Anabolu (Nauplion) (k3, 1.5 g, 38.1 km · uyum 76/129) |  |
| İstefe (Tebai) | yerlesimler.js | Atina | 1.7 g | 128/129 | Eğriboz (k3, 0.7 g, 29.3 km · uyum 89/129) |  |
| Livadya | yerlesimler.js | Atina | 3.1 g | 128/129 | Eğriboz (k3, 1.9 g, 63.5 km · uyum 89/129) |  |
| İzdin (Lamia) | yerlesimler.js | Yanya | 6.4 g | 83/129 | Yenişehir (Larissa) (k3, 2.6 g, 82.3 km · uyum 98/129) | m: ile sahiplik uyumu %64 |
| İlbasan (Elbasan) | yerlesimler.js | İşkodra | 4.0 g | 89/92 | Akçahisar (Kruja) (k3, 1.6 g, 50.3 km · uyum 89/92) |  |
| Berat | yerlesimler.js | Yanya | 5.3 g | 102/129 | Avlonya (k3, 1.6 g, 47.3 km · uyum 128/129) | m: merkezi >5 gün, Avlonya <2 gün; m: ile sahiplik uyumu %79 |
| Belgrad Kalesi (Kalemegdan) | yerlesimler.js | Belgrad | 0.0 g | 111/129 | Belgrad (k2, 0.0 g, 0.8 km · uyum 111/129) | m: ile sahiplik uyumu %86 |
| Çernovitz (Çernivtsi) | yerlesimler.js | Yaş | 4.9 g | 100/129 | Hotin (k3, 1.2 g, 47.8 km · uyum 72/129) | m: ile sahiplik uyumu %78 |
| Roman | yerlesimler.js | Yaş | 1.6 g | 129/129 | Yaş (k2, 1.6 g, 57.1 km · uyum 129/129) |  |
| Birlad (Bârlad) | yerlesimler.js | Yaş | 2.8 g | 129/129 | İbrail (k3, 2.8 g, 109.5 km · uyum 34/111) |  |
| Kalas (Galatz) | yerlesimler.js | Yaş | ölçülmedi | 96/96 | İbrail (k3, 0.3 g, 18.6 km · uyum 34/96) | m: merkezi >5 gün, İbrail <2 gün |
| Semadirek | yerlesimler.js | Edirne | ölçülmedi | 93/129 | — | m: ile sahiplik uyumu %72 |
| Taşoz | yerlesimler.js | Selanik | ulasilmaz | 92/129 | — | m: ile sahiplik uyumu %71 |
| İmroz | yerlesimler.js | Edirne | ölçülmedi | 110/129 | — | m: ile sahiplik uyumu %85 |
| Sisam | yerlesimler.js | İzmir | 3.8 g | 71/129 | Aydın (k3, 3.0 g, 76.6 km · uyum 71/129) | m: ile sahiplik uyumu %55 |
| Andros | yerlesimler.js | İzmir | ölçülmedi | 53/129 | — | m: ile sahiplik uyumu %41 |
| Çuha Adası (Kythira) | yerlesimler.js | Mora (Tripoliçe) | ulasilmaz | 18/129 | — | m: ile sahiplik uyumu %14 |
| İskiros (Skyros) | yerlesimler.js | Selanik | ulasilmaz | 83/129 | — | m: ile sahiplik uyumu %64 |
| İskopelos | yerlesimler.js | Selanik | ulasilmaz | 83/129 | — | m: ile sahiplik uyumu %64 |
| İstendil (Tinos) | yerlesimler.js | Rodos | ölçülmedi | 23/129 | — | m: ile sahiplik uyumu %18 |
| Nikarya (İkarya) | yerlesimler.js | İzmir | ulasilmaz | 80/129 | — | m: ile sahiplik uyumu %62 |
| Santorini | yerlesimler.js | Kandiye (Girit) | ulasilmaz | 34/129 | — | m: ile sahiplik uyumu %26 |
| Karpatos | yerlesimler.js | Rodos | ulasilmaz | 77/129 | — | m: ile sahiplik uyumu %60 |
| Tebük | yerlesimler.js | Medine | ölçülmedi | 49/129 | Gazze (k3, 11.7 g, 401.9 km · uyum 127/129) | m: ile sahiplik uyumu %38 |
| Maan | yerlesimler.js | Kudüs | 6.8 g | 127/129 | Gazze (k3, 6.2 g, 189.6 km · uyum 127/129) |  |
| Moha | yerlesimler.js | Sana | ölçülmedi | 122/129 | Zebîd (k3, 2.5 g, 97.8 km · uyum 77/129) |  |
| Kunfüze (el-Kunfüze) | yerlesimler.js | Sana | ölçülmedi | 9/32 | Ebha (Asir) (k3, 6.2 g, 181.4 km · uyum 10/32) | m: ile sahiplik uyumu %28 |
| İbrim | yerlesimler.js | Kahire | ölçülmedi | 129/129 | Asvan (k3, 5.1 g, 184.5 km · uyum 129/129) |  |
| Amman | yerlesimler.js | Şam | 4.9 g | 127/129 | Şam (k2, 4.9 g, 177.3 km · uyum 127/129) |  |
| Kerak | yerlesimler.js | Kudüs | 8.4 g | 127/129 | Gazze (k3, 7.7 g, 122.9 km · uyum 127/129) |  |
| Deyrizor | yerlesimler.js | Halep | 8.0 g | 17/18 | Rakka (k3, 3.5 g, 123.4 km · uyum 18/18) |  |
| Süveyş | yerlesimler.js | Kahire | 3.5 g | 129/129 | Bilbîs (Şarkiye) (k3, 2.9 g, 106.5 km · uyum 129/129) |  |
| Sfaks | yerlesimler.js | Tunus | ölçülmedi | 128/129 | Kayrevan (k3, 3.1 g, 120.6 km · uyum 129/129) |  |
| Annaba | yerlesimler.js | Cezayir | ölçülmedi | 76/129 | Konstantin (k3, 3.8 g, 118.8 km · uyum 125/129) | m: ile sahiplik uyumu %59 |
| Bicâye | yerlesimler.js | Cezayir | 6.1 g | 73/129 | Konstantin (k3, 5.9 g, 145.9 km · uyum 119/129) | m: ile sahiplik uyumu %57 |
| Cetinje | yerlesimler.js | İşkodra | 2.0 g | 40/88 | Kotor (Cattaro) (k3, 0.4 g, 12.5 km · uyum 1/88) | m: ile sahiplik uyumu %45 |
| Yanıkkale (Győr) | yerlesimler.js | Aquincum-Óbuda-Pest | 3.0 g | 98/129 | Komárom (Komárno) (k3, 0.9 g, 37.7 km · uyum 127/129) | m: ile sahiplik uyumu %76 |
| Yanova (Ineu) | yerlesimler.js | Temeşvar | 2.2 g | 108/129 | Világos (Şiria) (k3, 0.3 g, 21.5 km · uyum 112/129) | m: ile sahiplik uyumu %84 |
| İsmail | yerlesimler.js | Silistre | ölçülmedi | 56/129 | Kili (k3, 0.9 g, 35.8 km · uyum 117/129) | m: merkezi >5 gün, Kili <2 gün; m: ile sahiplik uyumu %43 |
| Çehrin (Çigirin) | yerlesimler.js | Kamaniçe | ölçülmedi | 95/129 | Çerkasi (Cherkasy) (k3, 1.4 g, 59.9 km · uyum 123/129) | m: merkezi >5 gün, Çerkasi (Cherkasy) <2 gün; m: ile sahiplik uyumu %74 |
| Ayamavra (Lefkada) | yerlesimler.js | Yanya | 3.7 g | 44/129 | Aydonat (Paramythia) (k3, 3.0 g, 84.3 km · uyum 44/129) | m: ile sahiplik uyumu %34 |
| Parga | yerlesimler.js | Yanya | 2.1 g | 37/129 | Aydonat (Paramythia) (k3, 0.5 g, 21.6 km · uyum 45/129) | m: ile sahiplik uyumu %29 |
| Vonitsa | yerlesimler.js | Yanya | 2.9 g | 98/129 | Aydonat (Paramythia) (k3, 2.3 g, 69.1 km · uyum 106/129) | m: ile sahiplik uyumu %76 |
| Preveze | yerlesimler.js | Yanya | 2.5 g | 98/126 | Aydonat (Paramythia) (k3, 1.9 g, 59.7 km · uyum 103/126) | m: ile sahiplik uyumu %78 |
| Koron | yerlesimler.js | Mora (Tripoliçe) | 3.2 g | 82/129 | Modon (k3, 0.6 g, 22.2 km · uyum 128/129) | m: ile sahiplik uyumu %64 |
| Cerbe (Djerba) | yerlesimler.js | Tunus | ölçülmedi | 117/129 | Gabes (k3, 2.3 g, 70.6 km · uyum 116/129) |  |
| Elbistan | yerlesimler.js | Maraş | 3.6 g | 117/129 | Malatya (k3, 3.4 g, 100.9 km · uyum 17/17) |  |
| Tâif | yerlesimler.js | Mekke | 2.4 g | 129/129 | Mekke (k2, 2.4 g, 71.2 km · uyum 129/129) |  |
| Aynaroz (Athos) | yerlesimler.js | Selanik | 4.3 g | 122/129 | Selanik (k2, 4.3 g, 118.1 km · uyum 122/129) |  |
| Kesendire (Kassandra) | yerlesimler.js | Selanik | ulasilmaz | 122/129 | — |  |
| Ferecik (Feres) | yerlesimler.js | Edirne | 2.5 g | 127/129 | Dedeağaç (Alexandroupoli) (k3, 0.6 g, 25.6 km · uyum 11/11) |  |
| Biga | yerlesimler.js | Bursa | ölçülmedi | 120/129 | Gelibolu (k3, 1.7 g, 53.4 km · uyum 115/129) | m: merkezi >5 gün, Gelibolu <2 gün |
| Kemah | yerlesimler.js | Erzurum | ölçülmedi | 106/129 | Erzincan (k3, 1.8 g, 43.0 km · uyum 129/129) | m: merkezi >5 gün, Erzincan <2 gün; m: ile sahiplik uyumu %82 |
| Humus | yerlesimler.js | Şam | 4.9 g | 129/129 | Hama (k3, 1.0 g, 44.9 km · uyum 125/129) |  |
| Han Yûnus | yerlesimler.js | Kudüs | 3.0 g | 129/129 | Gazze (k3, 0.5 g, 24.0 km · uyum 129/129) |  |
| Reşîd (Rosetta) | yerlesimler.js | Kahire | 4.4 g | 129/129 | Demenhûr (Damanhur) (k3, 0.9 g, 40.9 km · uyum 129/129) |  |
| Beyşehir | yerlesimler.js | Konya | 2.4 g | 94/129 | Konya (k2, 2.4 g, 71.0 km · uyum 94/129) | m: ile sahiplik uyumu %73 |
| Niksar | yerlesimler.js | Sivas | 3.5 g | 119/129 | Tokat (k3, 1.8 g, 45.8 km · uyum 119/129) |  |
| Sivrihisar | yerlesimler.js | Ankara | 4.0 g | 114/129 | Eskişehir (k3, 2.8 g, 94.3 km · uyum 114/129) | m: ile sahiplik uyumu %88 |
| Kırşehir | yerlesimler.js | Ankara | 5.2 g | 102/129 | Aksaray (k3, 2.8 g, 87.2 km · uyum 106/129) | m: ile sahiplik uyumu %79 |
| Çorum | yerlesimler.js | Ankara | 6.6 g | 105/114 | Amasya (k3, 2.5 g, 75.0 km · uyum 114/114) |  |
| Çankırı | yerlesimler.js | Ankara | 3.2 g | 112/129 | Ankara (k2, 3.2 g, 98.3 km · uyum 112/129) | m: ile sahiplik uyumu %87 |
| Domaniç | yerlesimler.js | Bursa | 2.8 g | 120/129 | Kütahya (k2, 1.4 g, 52.9 km · uyum 104/129) |  |
| Kulacahisar | yerlesimler.js | Bursa | 1.6 g | 121/129 | Bursa (k1, 1.6 g, 37.0 km · uyum 121/129) |  |
| Karacahisar | yerlesimler.js | Kütahya | 1.4 g | 104/129 | Eskişehir (k3, 0.0 g, 7.1 km · uyum 127/129) | m: ile sahiplik uyumu %81 |
| Yarhisar | yerlesimler.js | Bursa | 2.0 g | 124/129 | İznik (k3, 0.6 g, 20.5 km · uyum 123/129) |  |
| Dimbos | yerlesimler.js | Bursa | 0.9 g | 125/129 | Bursa (k1, 0.9 g, 23.5 km · uyum 125/129) |  |
| Kite (Kete) | yerlesimler.js | Bursa | 0.5 g | 125/129 | Bursa (k1, 0.5 g, 18.3 km · uyum 125/129) |  |
| Lefke (Osmaneli) | yerlesimler.js | Bursa | 3.0 g | 125/129 | İznik (k3, 1.0 g, 26.1 km · uyum 124/129) |  |
| Leblebicihisar | yerlesimler.js | Bursa | 3.3 g | 125/129 | Söğüt (k1, 1.2 g, 42.5 km · uyum 124/129) |  |
| Karaçepüş | yerlesimler.js | Bursa | ölçülmedi | 125/129 | Söğüt (k1, 1.8 g, 51.2 km · uyum 124/129) | m: merkezi >5 gün, Söğüt <2 gün |
| Karatigin | yerlesimler.js | Bursa | 2.3 g | 125/129 | İznik (k3, 0.0 g, 5.1 km · uyum 124/129) |  |
| Absu (Hypsu) | yerlesimler.js | Bursa | 3.5 g | 125/129 | Söğüt (k1, 1.5 g, 47.0 km · uyum 124/129) |  |
| Adranos (Orhaneli) | yerlesimler.js | Bursa | 1.2 g | 129/129 | Bursa (k1, 1.2 g, 32.1 km · uyum 129/129) |  |
| Pelekanon (Eskihisar) | yerlesimler.js | İstanbul | 1.3 g | 104/129 | Üsküdar (k3, 1.2 g, 42.6 km · uyum 129/129) | m: ile sahiplik uyumu %81 |
| Gebze | yerlesimler.js | İstanbul | 1.3 g | 104/129 | İzmit (k3, 1.1 g, 41.2 km · uyum 127/129) | m: ile sahiplik uyumu %81 |
| Hereke | yerlesimler.js | İstanbul | 1.7 g | 104/129 | İzmit (k3, 0.7 g, 26.1 km · uyum 127/129) | m: ile sahiplik uyumu %81 |
| Samandıra | yerlesimler.js | İstanbul | 0.4 g | 104/129 | Üsküdar (k3, 0.3 g, 16.6 km · uyum 129/129) | m: ile sahiplik uyumu %81 |
| Kirmasti (M.Kemalpaşa) | yerlesimler.js | Bursa | 1.7 g | 127/129 | Mudanya (k3, 1.5 g, 55.0 km · uyum 126/129) |  |
| Mihaliç (Karacabey) | yerlesimler.js | Bursa | 1.5 g | 127/129 | Mudanya (k3, 1.3 g, 47.7 km · uyum 126/129) |  |
| Köstence | yerlesimler.js | Silistre | 3.0 g | 99/129 | Babadağı (Babadag) (k3, 2.1 g, 80.2 km · uyum 121/129) | m: ile sahiplik uyumu %77 |
| Anadolu Hisarı | yerlesimler.js | İstanbul | 0.0 g | 94/106 | Üsküdar (k3, 0.0 g, 7.8 km · uyum 106/106) | m: ile sahiplik uyumu %89 |
| Gölyazı (Apollonia) | yerlesimler.js | Bursa | 0.9 g | 127/129 | Mudanya (k3, 0.7 g, 29.9 km · uyum 126/129) |  |
| Rumeli Hisarı | yerlesimler.js | İstanbul | 0.0 g | 94/94 | Üsküdar (k3, 0.0 g, 7.9 km · uyum 94/94) |  |
| Harput (Elazığ) | yerlesimler.js | Diyarbakır | 4.1 g | 93/129 | Hozat (k3, 1.6 g, 43.9 km · uyum 15/15) | m: ile sahiplik uyumu %72 |
| Şerşel (Cherchell) | yerlesimler.js | Cezayir | 2.4 g | 129/129 | Cezayir (k2, 2.4 g, 79.2 km · uyum 129/129) |  |
| Medea (Titteri) | yerlesimler.js | Cezayir | 2.1 g | 129/129 | Cezayir (k2, 2.1 g, 60.9 km · uyum 129/129) |  |
| Setif | yerlesimler.js | Cezayir | 7.4 g | 127/129 | Konstantin (k3, 3.3 g, 109.9 km · uyum 80/129) |  |
| Biskra | yerlesimler.js | Cezayir | 9.7 g | 119/129 | Konstantin (k3, 6.1 g, 186.8 km · uyum 73/129) |  |
| Tuggurt | yerlesimler.js | Cezayir | ölçülmedi | 117/129 | Kafsa (k3, 8.1 g, 291.9 km · uyum 49/129) |  |
| Seydişehir | yerlesimler.js | Konya | 2.5 g | 94/129 | Konya (k2, 2.5 g, 75.7 km · uyum 94/129) | m: ile sahiplik uyumu %73 |
| Akşehir | yerlesimler.js | Konya | 3.6 g | 98/129 | Karahisâr-ı Sâhib (Afyon) (k3, 2.5 g, 88.5 km · uyum 102/129) | m: ile sahiplik uyumu %76 |
| Terme | yerlesimler.js | Sivas | 6.3 g | 119/129 | Samsun (k3, 1.7 g, 54.7 km · uyum 119/129) | m: merkezi >5 gün, Samsun <2 gün |
| Çarşamba | yerlesimler.js | Sivas | 6.3 g | 119/129 | Samsun (k3, 1.0 g, 34.5 km · uyum 119/129) | m: merkezi >5 gün, Samsun <2 gün |
| Bolayır | yerlesimler.js | Edirne | 3.9 g | 126/129 | Gelibolu (k3, 0.2 g, 14.9 km · uyum 129/129) |  |
| Maydos (Eceabat) | yerlesimler.js | Edirne | ölçülmedi | 126/129 | Çanakkale (k3, 0.0 g, 7.0 km · uyum 94/94) | m: merkezi >5 gün, Çanakkale <2 gün |
| Osmancık | yerlesimler.js | Sivas | 8.4 g | 127/129 | Amasya (k3, 3.3 g, 94.5 km · uyum 129/129) |  |
| Merzifon | yerlesimler.js | Sivas | 6.5 g | 127/129 | Amasya (k3, 1.1 g, 40.1 km · uyum 129/129) | m: merkezi >5 gün, Amasya <2 gün |
| Ladik (Amasya) | yerlesimler.js | Sivas | 6.1 g | 127/129 | Amasya (k3, 1.2 g, 29.7 km · uyum 129/129) | m: merkezi >5 gün, Amasya <2 gün |
| Mohaç | yerlesimler.js | Aquincum-Óbuda-Pest | ölçülmedi | 126/129 | Peçuy (k3, 0.9 g, 36.6 km · uyum 126/129) | m: merkezi >5 gün, Peçuy <2 gün |
| Baç (Bács) | yerlesimler.js | Aquincum-Óbuda-Pest | ölçülmedi | 125/129 | Ösek (Osijek) (k3, 1.3 g, 48.2 km · uyum 129/129) | m: merkezi >5 gün, Ösek (Osijek) <2 gün |
| Kalocsa | yerlesimler.js | Aquincum-Óbuda-Pest | 2.7 g | 126/129 | İstolni Belgrad (k3, 2.3 g, 85.8 km · uyum 126/129) |  |
| Şimontorna | yerlesimler.js | Aquincum-Óbuda-Pest | 2.3 g | 126/129 | İstolni Belgrad (k3, 1.2 g, 50.1 km · uyum 126/129) |  |
| Hatvan | yerlesimler.js | Aquincum-Óbuda-Pest | 1.4 g | 126/129 | Peşte (k3, 1.3 g, 50.4 km · uyum 126/129) |  |
| Vaç (Vác) | yerlesimler.js | Aquincum-Óbuda-Pest | 0.7 g | 125/129 | Peşte (k3, 0.6 g, 31.9 km · uyum 125/129) |  |
| Paros | yerlesimler.js | Rodos | ölçülmedi | 53/129 | — | m: ile sahiplik uyumu %41 |
| Değirmenlik (Milos) | yerlesimler.js | Rodos | ölçülmedi | 53/129 | — | m: ile sahiplik uyumu %41 |
| Kimolos (Argentiera) | yerlesimler.js | Rodos | ölçülmedi | 53/129 | — | m: ile sahiplik uyumu %41 |
| Murted (Kea) | yerlesimler.js | Rodos | ölçülmedi | 53/129 | — | m: ile sahiplik uyumu %41 |
| Termiye (Kythnos) | yerlesimler.js | Rodos | ölçülmedi | 53/129 | — | m: ile sahiplik uyumu %41 |
| Koçbaba (Serifos) | yerlesimler.js | Rodos | ölçülmedi | 53/129 | — | m: ile sahiplik uyumu %41 |
| Sifnos (Yavuzca) | yerlesimler.js | Rodos | ölçülmedi | 53/129 | — | m: ile sahiplik uyumu %41 |
| Sire (Syros) | yerlesimler.js | Rodos | ölçülmedi | 53/129 | — | m: ile sahiplik uyumu %41 |
| Mikonos | yerlesimler.js | Rodos | ölçülmedi | 53/129 | — | m: ile sahiplik uyumu %41 |
| Nio (İos) | yerlesimler.js | Rodos | ölçülmedi | 53/129 | — | m: ile sahiplik uyumu %41 |
| Yamurgi (Amorgos) | yerlesimler.js | Rodos | ulasilmaz | 53/129 | — | m: ile sahiplik uyumu %41 |
| Namfi (Anafi) | yerlesimler.js | Kandiye (Girit) | ulasilmaz | 91/129 | — | m: ile sahiplik uyumu %71 |
| Folegandros | yerlesimler.js | Kandiye (Girit) | ulasilmaz | 91/129 | — | m: ile sahiplik uyumu %71 |
| Kelemez (Kalimnos) | yerlesimler.js | Rodos | ulasilmaz | 129/129 | — |  |
| İleryoz (Leros) | yerlesimler.js | Rodos | ulasilmaz | 129/129 | — |  |
| Sömbeki (Simi) | yerlesimler.js | Rodos | ulasilmaz | 129/129 | — |  |
| İncirli (Nisiros) | yerlesimler.js | Rodos | ulasilmaz | 129/129 | — |  |
| İlyaki (Tilos) | yerlesimler.js | Rodos | ulasilmaz | 129/129 | — |  |
| Herke (Halki) | yerlesimler.js | Rodos | ulasilmaz | 129/129 | — |  |
| Batnoz (Patmos) | yerlesimler.js | Rodos | ulasilmaz | 97/129 | — | m: ile sahiplik uyumu %75 |
| İstanbulya (Astipalya) | yerlesimler.js | Rodos | ulasilmaz | 77/129 | — | m: ile sahiplik uyumu %60 |
| Kaşot (Kasos) | yerlesimler.js | Rodos | ulasilmaz | 77/129 | — | m: ile sahiplik uyumu %60 |
| Fornoz (Fourni) | yerlesimler.js | İzmir | ulasilmaz | 80/129 | — | m: ile sahiplik uyumu %62 |
| İpsara (Psara) | yerlesimler.js | İzmir | ulasilmaz | 71/129 | — | m: ile sahiplik uyumu %55 |
| Bozbaba (Ay Strati) | yerlesimler.js | Selanik | ulasilmaz | 110/129 | — | m: ile sahiplik uyumu %85 |
| İskiathos | yerlesimler.js | Selanik | ulasilmaz | 83/129 | — | m: ile sahiplik uyumu %64 |
| Alonisos | yerlesimler.js | Selanik | ulasilmaz | 83/129 | — | m: ile sahiplik uyumu %64 |
| Marmara Adası | yerlesimler.js | Edirne | ulasilmaz | 110/129 | — | m: ile sahiplik uyumu %85 |
| Kulluk (Salamis) | yerlesimler.js | Atina | 0.6 g | 128/129 | Atina (k2, 0.6 g, 22.5 km · uyum 128/129) |  |
| Egina (Aegina) | yerlesimler.js | Atina | ulasilmaz | 76/129 | — | m: ile sahiplik uyumu %59 |
| Çamlıca (Hidra) | yerlesimler.js | Mora (Tripoliçe) | 4.1 g | 123/129 | Anabolu (Nauplion) (k3, 2.4 g, 64.8 km · uyum 71/129) |  |
| Kefalonya | yerlesimler.js | Yanya | ulasilmaz | 6/129 | — | m: ile sahiplik uyumu %5 |
| İthaki | yerlesimler.js | Yanya | ulasilmaz | 6/129 | — | m: ile sahiplik uyumu %5 |
| Zaklise (Zakynthos) | yerlesimler.js | Yanya | ulasilmaz | 3/129 | — | m: ile sahiplik uyumu %2 |
| Lastovo (Lagosta) | yerlesimler.js | Dubrovnik | ulasilmaz | 128/129 | — |  |
| Kerkene (Kerkennah) | yerlesimler.js | Tunus | ölçülmedi | 128/129 | — |  |
| Dahlak | yerlesimler.js | Sevâkin | ölçülmedi | 65/129 | — | m: ile sahiplik uyumu %50 |
| Ferasan (Farasan) | yerlesimler.js | Sana | ulasilmaz | 121/129 | — |  |
| Kemeran (Kamaran) | yerlesimler.js | Sana | ulasilmaz | 120/129 | — |  |
| Girne (Kyrenia) | yerlesimler.js | Lefkoşa | 0.4 g | 129/129 | Lefkoşa (k2, 0.4 g, 19.0 km · uyum 129/129) |  |
| Baf (Paphos) | yerlesimler.js | Lefkoşa | 3.6 g | 129/129 | Lefkoşa (k2, 3.6 g, 96.0 km · uyum 129/129) |  |
| Limasol | yerlesimler.js | Lefkoşa | 2.1 g | 129/129 | Lefkoşa (k2, 2.1 g, 60.0 km · uyum 129/129) |  |
| Tuzla (Larnaka) | yerlesimler.js | Lefkoşa | 0.9 g | 129/129 | Lefkoşa (k2, 0.9 g, 37.4 km · uyum 129/129) |  |
| İsfakiye (Sfakia) | yerlesimler.js | Kandiye (Girit) | 3.9 g | 129/129 | Girit (Resmo) (k3, 1.6 g, 36.4 km · uyum 125/129) |  |
| Sitiye (Sitia) | yerlesimler.js | Kandiye (Girit) | 4.2 g | 129/129 | Kandiye (Girit) (k2, 4.2 g, 89.4 km · uyum 129/129) |  |
| Lindos | yerlesimler.js | Rodos | 1.3 g | 129/129 | Rodos (k2, 1.3 g, 41.0 km · uyum 129/129) |  |
| Molova (Molyvos) | yerlesimler.js | İzmir | ulasilmaz | 101/129 | Midilli (k3, 1.4 g, 43.3 km · uyum 129/129) | m: merkezi >5 gün, Midilli <2 gün; m: ile sahiplik uyumu %78 |
| Karistos (Kızılhisar) | yerlesimler.js | Mora (Tripoliçe) | 9.6 g | 84/129 | Eğriboz (k3, 3.6 g, 86.7 km · uyum 91/129) | m: ile sahiplik uyumu %65 |
| Birgi | yerlesimler.js | İzmir | 2.7 g | 113/129 | Aydın (k3, 1.7 g, 50.0 km · uyum 120/129) | m: ile sahiplik uyumu %88 |
| Tire | yerlesimler.js | İzmir | 1.8 g | 113/129 | Aydın (k3, 1.1 g, 28.7 km · uyum 120/129) | m: ile sahiplik uyumu %88 |
| Ayasuluk (Selçuk) | yerlesimler.js | İzmir | 1.6 g | 113/129 | Aydın (k3, 1.3 g, 43.1 km · uyum 120/129) | m: ile sahiplik uyumu %88 |
| Milas | yerlesimler.js | Muğla | 1.9 g | 129/129 | Bodrum (k3, 1.3 g, 44.3 km · uyum 80/129) |  |
| Balat (Palatia) | yerlesimler.js | Muğla | 3.6 g | 129/129 | Aydın (k3, 2.0 g, 62.0 km · uyum 103/129) |  |
| Simav | yerlesimler.js | Kütahya | 3.4 g | 129/129 | Kütahya (k2, 3.4 g, 94.1 km · uyum 129/129) |  |
| Tavşanlı | yerlesimler.js | Kütahya | 1.2 g | 129/129 | Kütahya (k2, 1.2 g, 44.3 km · uyum 129/129) |  |
| Emet (Eğrigöz) | yerlesimler.js | Kütahya | 2.0 g | 129/129 | Kütahya (k2, 2.0 g, 62.9 km · uyum 129/129) |  |
| Uşak | yerlesimler.js | Kütahya | 3.3 g | 127/129 | Karahisâr-ı Sâhib (Afyon) (k3, 3.1 g, 98.8 km · uyum 117/129) |  |
| Alaşehir | yerlesimler.js | Kütahya | 5.7 g | 123/129 | Denizli (k3, 2.8 g, 80.9 km · uyum 111/129) |  |
| Uluborlu | yerlesimler.js | Kütahya | 5.2 g | 106/129 | Isparta (k3, 1.2 g, 36.7 km · uyum 129/129) | m: merkezi >5 gün, Isparta <2 gün; m: ile sahiplik uyumu %82 |
| Eğirdir | yerlesimler.js | Kütahya | 6.6 g | 106/129 | Isparta (k3, 0.9 g, 28.6 km · uyum 129/129) | m: merkezi >5 gün, Isparta <2 gün; m: ile sahiplik uyumu %82 |
| Burdur | yerlesimler.js | Kütahya | ölçülmedi | 102/125 | Isparta (k3, 0.7 g, 23.8 km · uyum 125/125) | m: merkezi >5 gün, Isparta <2 gün; m: ile sahiplik uyumu %82 |
| Yalvaç | yerlesimler.js | Kütahya | 4.9 g | 108/129 | Karahisâr-ı Sâhib (Afyon) (k3, 2.6 g, 76.0 km · uyum 102/129) | m: ile sahiplik uyumu %84 |
| Eflani | yerlesimler.js | Ankara | 5.7 g | 97/129 | Kastamonu (k3, 2.2 g, 69.1 km · uyum 123/129) | m: ile sahiplik uyumu %75 |
| Ermenek | yerlesimler.js | Konya | 4.5 g | 116/129 | Karaman (k3, 2.5 g, 66.8 km · uyum 129/129) | m: ile sahiplik uyumu %90 |
| Edremit | yerlesimler.js | Bursa | ölçülmedi | 120/129 | Balıkesir (k3, 2.3 g, 74.1 km · uyum 118/118) |  |
| Erdek | yerlesimler.js | Bursa | 3.5 g | 120/129 | Balıkesir (k3, 2.8 g, 83.8 km · uyum 118/118) |  |
| Erciş | yerlesimler.js | Van | 2.9 g | 1/1 | Bargiri (Muradiye) (k3, 1.3 g, 35.4 km · uyum 129/129) |  |
| Finike | yerlesimler.js | Antalya | 3.5 g | 129/129 | Antalya (k2, 3.5 g, 82.1 km · uyum 129/129) |  |
| Kaş (Antiphellos) | yerlesimler.js | Antalya | 6.0 g | 129/129 | Antalya (k2, 6.0 g, 121.9 km · uyum 129/129) |  |
| Elmalı | yerlesimler.js | Antalya | 3.0 g | 129/129 | Antalya (k2, 3.0 g, 71.8 km · uyum 129/129) |  |
| Bolu | yerlesimler.js | Ankara | 5.1 g | 103/129 | İzmit (k3, 5.0 g, 142.5 km · uyum 112/129) | m: ile sahiplik uyumu %80 |
| Konurapa (Düzce) | yerlesimler.js | Ankara | 6.5 g | 103/129 | İzmit (k3, 3.4 g, 105.3 km · uyum 112/129) | m: ile sahiplik uyumu %80 |
| Mudurnu | yerlesimler.js | Ankara | 5.5 g | 103/129 | Söğüt (k1, 3.5 g, 100.7 km · uyum 109/129) | m: ile sahiplik uyumu %80 |
| Karadeniz Ereğli | yerlesimler.js | Ankara | 6.9 g | 95/129 | İzmit (k3, 5.0 g, 138.6 km · uyum 101/129) | m: ile sahiplik uyumu %74 |
| Devrek | yerlesimler.js | Ankara | 5.8 g | 95/129 | Kastamonu (k3, 5.6 g, 153.4 km · uyum 123/129) | m: ile sahiplik uyumu %74 |
| Akçakoca | yerlesimler.js | Ankara | 7.1 g | 95/129 | İzmit (k3, 3.5 g, 107.7 km · uyum 101/129) | m: ile sahiplik uyumu %74 |
| Ayvalık | yerlesimler.js | Bursa | ölçülmedi | 120/129 | Manisa (k3, 3.0 g, 100.9 km · uyum 109/129) |  |
| Ahar (Karadağ) | yerlesimler.js | Tebriz | 2.9 g | 125/129 | Meşkinşehr (Hiyav) (k3, 1.7 g, 53.9 km · uyum 123/129) |  |
| Sarâb | yerlesimler.js | Tebriz | 3.5 g | 125/129 | Meşkinşehr (Hiyav) (k3, 2.0 g, 52.6 km · uyum 126/129) |  |
| Miyâne | yerlesimler.js | Tebriz | 4.7 g | 122/129 | Halhâl (k3, 3.1 g, 75.2 km · uyum 126/129) |  |
| Nihâvend | yerlesimler.js | Hemedan | 3.0 g | 116/129 | Hemedan (k2, 3.0 g, 68.9 km · uyum 116/129) | m: ile sahiplik uyumu %90 |
| Sâmerrâ | yerlesimler.js | Bağdat | 2.5 g | 128/129 | Bağdat (k2, 2.5 g, 105.6 km · uyum 128/129) |  |
| Tikrit | yerlesimler.js | Bağdat | 3.9 g | 128/129 | Kerkük (k3, 2.8 g, 115.8 km · uyum 126/129) |  |
| Kûfe | yerlesimler.js | Bağdat | ölçülmedi | 128/129 | Necef (k3, 0.1 g, 8.9 km · uyum 129/129) | m: merkezi >5 gün, Necef <2 gün |
| Vâsıt | yerlesimler.js | Bağdat | 6.0 g | 128/129 | Hille (k3, 4.8 g, 177.9 km · uyum 129/129) |  |
| Kût el-Amâre | yerlesimler.js | Bağdat | 4.2 g | 128/129 | Hille (k3, 3.1 g, 129.9 km · uyum 129/129) |  |
| Kifri | yerlesimler.js | Şehrizor | 3.4 g | 126/129 | Kerkük (k3, 2.7 g, 101.2 km · uyum 126/129) |  |
| Hânekîn | yerlesimler.js | Bağdat | 3.5 g | 128/129 | Bağdat (k2, 3.5 g, 147.2 km · uyum 128/129) |  |
| Tuz Hurmatu | yerlesimler.js | Şehrizor | 3.2 g | 126/129 | Kerkük (k3, 1.7 g, 68.9 km · uyum 126/129) |  |
| Halepçe | yerlesimler.js | Şehrizor | 1.9 g | 127/129 | Merîvan (k3, 1.6 g, 42.0 km · uyum 51/129) |  |
| Rewândiz | yerlesimler.js | Musul | 4.0 g | 129/129 | Erbil (k3, 2.0 g, 65.9 km · uyum 126/129) |  |
| Akra | yerlesimler.js | Musul | 2.2 g | 129/129 | Erbil (k3, 1.6 g, 62.1 km · uyum 126/129) |  |
| Duhok | yerlesimler.js | Musul | 1.5 g | 129/129 | Musul (k2, 1.5 g, 60.0 km · uyum 129/129) |  |
| Zaho | yerlesimler.js | Musul | 2.8 g | 129/129 | Silopi (k3, 0.6 g, 21.9 km · uyum 117/129) |  |
| Telafer | yerlesimler.js | Musul | 1.6 g | 129/129 | Musul (k2, 1.6 g, 61.0 km · uyum 129/129) |  |
| Sincar | yerlesimler.js | Musul | 3.2 g | 129/129 | Nusaybin (k3, 2.8 g, 102.3 km · uyum 94/129) |  |
| Âne | yerlesimler.js | Bağdat | 7.0 g | 128/129 | Musul (k2, 6.2 g, 234.8 km · uyum 123/129) |  |
| Hît | yerlesimler.js | Bağdat | 3.8 g | 128/129 | Bağdat (k2, 3.8 g, 146.5 km · uyum 128/129) |  |
| Fellûce | yerlesimler.js | Bağdat | 1.2 g | 128/129 | Bağdat (k2, 1.2 g, 53.6 km · uyum 128/129) |  |
| Ramâdi | yerlesimler.js | Bağdat | 2.6 g | 11/11 | Bağdat (k2, 2.6 g, 98.4 km · uyum 11/11) |  |
| Dîvâniye | yerlesimler.js | Bağdat | 4.3 g | 128/129 | Necef (k3, 1.7 g, 57.6 km · uyum 129/129) |  |
| Semâve | yerlesimler.js | Basra | 6.8 g | 84/86 | Necef (k3, 3.1 g, 118.6 km · uyum 123/129) |  |
| Nâsıriye | yerlesimler.js | Basra | 4.2 g | 11/11 | Eski Basra (Zübeyr) (k2, 4.1 g, 156.1 km) |  |
| Ammâre | yerlesimler.js | Basra | 4.0 g | 44/45 | Havîza (k3, 2.6 g, 97.7 km · uyum 0/45) |  |
| Kürne | yerlesimler.js | Basra | 1.6 g | 84/86 | Basra (k2, 1.6 g, 64.6 km · uyum 84/86) |  |
| Fâv | yerlesimler.js | Basra | 2.0 g | 85/86 | Abâdân (k3, 1.1 g, 43.5 km · uyum 90/129) |  |
| Burûcird | yerlesimler.js | Hemedan | 3.7 g | 118/129 | Luristan (k3, 2.1 g, 58.5 km · uyum 102/129) |  |
| Ukayr (Uceyr) | yerlesimler.js | Basra | ölçülmedi | 37/86 | Lahsa (k3, 1.7 g, 69.5 km · uyum 129/129) | m: merkezi >5 gün, Lahsa <2 gün; m: ile sahiplik uyumu %43 |
| Cübeyl | yerlesimler.js | Basra | ölçülmedi | 37/86 | Katîf (k3, 1.2 g, 60.0 km · uyum 129/129) | m: merkezi >5 gün, Katîf <2 gün; m: ile sahiplik uyumu %43 |
| Buraydâ (Kasîm) | yerlesimler.js | Medine | ölçülmedi | 3/36 | Hâil (k1, 7.1 g, 261.5 km · uyum 11/29) | m: ile sahiplik uyumu %8 |
| Uneyze | yerlesimler.js | Medine | ölçülmedi | 3/36 | Hâil (k1, 7.5 g, 278.9 km · uyum 11/29) | m: ile sahiplik uyumu %8 |
| Şakrâ | yerlesimler.js | Medine | ölçülmedi | 3/36 | Dir'iye (Necid) (k3, 4.0 g, 144.8 km · uyum 36/36) | m: ile sahiplik uyumu %8 |
| Kanina | yerlesimler.js | Avlonya | 0.0 g | 129/129 | Avlonya (k3, 0.0 g, 5.2 km · uyum 129/129) |  |
| Oreoi (İstiaia) | yerlesimler.js | Eğriboz | 3.0 g | 91/129 | Eğriboz (k3, 3.0 g, 70.1 km · uyum 91/129) | m: ile sahiplik uyumu %71 |
| Divriği | yerlesimler.js | Malatya | 3.9 g | 17/17 | Sivas (k2, 3.5 g, 103.6 km · uyum 101/129) |  |
| Arapkir | yerlesimler.js | Malatya | 2.5 g | 17/17 | Malatya (k3, 2.5 g, 77.8 km · uyum 17/17) |  |
| Hısn-ı Mansûr (Adıyaman) | yerlesimler.js | Malatya | 2.6 g | 17/17 | Suruç (k3, 2.6 g, 88.7 km · uyum 128/129) |  |
| Behisni (Besni) | yerlesimler.js | Malatya | 3.5 g | 17/17 | Birecik (k3, 2.5 g, 75.1 km · uyum 126/129) |  |
| Kâhta | yerlesimler.js | Malatya | 2.8 g | 17/17 | Malatya (k3, 2.8 g, 68.3 km · uyum 17/17) |  |
| Çemişgezek | yerlesimler.js | Diyarbakır | 6.0 g | 101/129 | Hozat (k3, 0.9 g, 27.0 km · uyum 15/15) | m: merkezi >5 gün, Hozat <2 gün; m: ile sahiplik uyumu %78 |
| Palu | yerlesimler.js | Diyarbakır | 3.2 g | 93/129 | Bingöl (Çapakçur) (k3, 2.1 g, 53.2 km · uyum 104/129) | m: ile sahiplik uyumu %72 |
| Siverek | yerlesimler.js | Urfa | 2.1 g | 128/129 | Urfa (k3, 2.1 g, 80.7 km · uyum 128/129) |  |
| Kragujevac | yerlesimler.js | Belgrad | 2.6 g | 100/129 | Orašac (Aranđelovac) (k3, 1.0 g, 43.7 km · uyum 41/41) | m: ile sahiplik uyumu %78 |
| Çaçak | yerlesimler.js | Belgrad | 2.8 g | 100/129 | Takova (Takovo) (k3, 0.3 g, 17.2 km · uyum 129/129) | m: ile sahiplik uyumu %78 |
| Piteşti | yerlesimler.js | Bükreş | 3.0 g | 129/129 | Tırgovişte (k3, 1.2 g, 47.0 km · uyum 129/129) |  |
| Slatina | yerlesimler.js | Bükreş | 3.5 g | 129/129 | Krayova (Craiova) (k3, 1.4 g, 47.1 km · uyum 125/129) |  |
| Buzău | yerlesimler.js | Bükreş | 2.5 g | 129/129 | İbrail (k3, 2.3 g, 91.6 km · uyum 53/111) |  |
| Rimnik-i Sârat (Râmnicu Sărat) | yerlesimler.js | Bükreş | 3.4 g | 129/129 | İbrail (k3, 1.8 g, 72.8 km · uyum 53/111) |  |
| Tırgu Jiu | yerlesimler.js | Bükreş | ölçülmedi | 125/129 | Krayova (Craiova) (k3, 2.4 g, 88.6 km · uyum 129/129) |  |
| Rimnik (Râmnicu Vâlcea) | yerlesimler.js | Bükreş | 4.4 g | 125/129 | Krayova (Craiova) (k3, 2.5 g, 97.7 km · uyum 129/129) |  |
| Turnu Severin | yerlesimler.js | Bükreş | ölçülmedi | 125/129 | Vidin (k3, 2.2 g, 73.3 km · uyum 0/129) |  |
| Kımpulung (Câmpulung) | yerlesimler.js | Bükreş | 3.5 g | 129/129 | Tırgovişte (k3, 1.5 g, 50.1 km · uyum 129/129) |  |
| Soroka (Soroca) | yerlesimler.js | Yaş | 3.4 g | 108/129 | Braslav (Bratslav) (k3, 2.1 g, 87.8 km · uyum 26/105) | m: ile sahiplik uyumu %84 |
| Orhei | yerlesimler.js | Yaş | 2.9 g | 108/129 | Bender (k3, 2.1 g, 79.1 km · uyum 74/129) | m: ile sahiplik uyumu %84 |
| Podgorica | yerlesimler.js | İşkodra | 1.2 g | 96/129 | İşkodra (k2, 1.2 g, 46.3 km · uyum 96/129) | m: ile sahiplik uyumu %74 |
| Böğürdelen (Šabac) | yerlesimler.js | Belgrad | 1.7 g | 98/129 | Dimitrofça (Sremska Mitrovica) (k3, 0.4 g, 26.0 km · uyum 85/129) | m: ile sahiplik uyumu %76 |
| Livno (İhlevne) | yerlesimler.js | Saraybosna | 4.4 g | 91/93 | Klis (k2, 1.8 g, 49.4 km · uyum 25/129) |  |
| Srebrenik | yerlesimler.js | Saraybosna | 3.1 g | 82/93 | Tuzla (Bosna) (k3, 0.5 g, 23.8 km · uyum 82/93) | m: ile sahiplik uyumu %88 |
| Yergöğü (Giurgiu) | yerlesimler.js | Sofya | ölçülmedi | 78/129 | Rusçuk (k3, 0.0 g, 5.3 km · uyum 78/129) | m: merkezi >5 gün, Rusçuk <2 gün; m: ile sahiplik uyumu %60 |
| Gözleve (Kezlev) | yerlesimler_kirim.js | Bahçesaray | 1.9 g | 84/84 | Akmescid (k3, 1.9 g, 63.6 km · uyum 105/105) |  |
| Or Kapı (Ferahkirman) | yerlesimler_kirim.js | Bahçesaray | 3.9 g | 84/84 | Herson (k3, 2.6 g, 98.2 km · uyum 28/29) |  |
| Balaklava (Cembalo) | yerlesimler_kirim.js | Kefe | ölçülmedi | 113/129 | Akyar (Sivastopol) (k3, 0.2 g, 14.0 km · uyum 28/28) | m: merkezi >5 gün, Akyar (Sivastopol) <2 gün; m: ile sahiplik uyumu %88 |
| Yalta | yerlesimler_kirim.js | Kefe | 4.9 g | 90/129 | Bahçesaray (k2, 1.3 g, 37.5 km · uyum 30/84) | m: ile sahiplik uyumu %70 |
| Aluşta | yerlesimler_kirim.js | Kefe | 3.5 g | 90/129 | Akmescid (k3, 1.3 g, 39.2 km · uyum 30/105) | m: ile sahiplik uyumu %70 |
| Tedmür (Palmyra) | yerlesimler_seyrek.js | Şam | 6.3 g | 129/129 | Hama (k3, 4.5 g, 153.2 km · uyum 125/129) |  |
| İskeçe | yerlesimler_seyrek.js | Selanik | 6.5 g | 120/129 | Gümülcine (k3, 1.2 g, 43.3 km · uyum 117/119) | m: merkezi >5 gün, Gümülcine <2 gün |
| Kırcaali | yerlesimler_seyrek.js | Edirne | 3.0 g | 86/88 | Klokotnitsa (k3, 1.1 g, 39.5 km · uyum 81/88) |  |
| Karabiga | yerlesimler_seyrek.js | Biga | 0.4 g | 129/129 | Gelibolu (k3, 1.8 g, 53.9 km · uyum 115/129) |  |
| İnkirman (Kalamita) | yerlesimler_ek2.js | Mankup | 0.4 g | 129/129 | Akyar (Sivastopol) (k3, 0.0 g, 6.4 km · uyum 28/28) |  |
| Mersa'l-Kebîr | yerlesimler_ek3.js | Oran | 0.0 g | 129/129 | Oran (k3, 0.0 g, 7.5 km · uyum 129/129) |  |
| Dessûk | yerlesimler_afrika.js | Kahire | 3.4 g | 129/129 | Demenhûr (Damanhur) (k3, 0.3 g, 20.3 km · uyum 129/129) |  |
| Kafrüşşeyh | yerlesimler_afrika.js | Kahire | ölçülmedi | 129/129 | Mahalletülkübrâ (k3, 0.5 g, 26.9 km · uyum 129/129) | m: merkezi >5 gün, Mahalletülkübrâ <2 gün |
| Bürüllüs (Baltîm) | yerlesimler_afrika.js | Kahire | ölçülmedi | 129/129 | — |  |
| Tanta | yerlesimler_afrika.js | Kahire | 2.2 g | 129/129 | Mahalletülkübrâ (k3, 0.4 g, 26.0 km · uyum 129/129) |  |
| Benhâ (Kalyûbiye) | yerlesimler_afrika.js | Kahire | 1.1 g | 129/129 | Şibînülkûm (Menûfiye) (k3, 0.3 g, 19.2 km · uyum 129/129) |  |
| Mît Gamr | yerlesimler_afrika.js | Kahire | 1.9 g | 129/129 | Mahalletülkübrâ (k3, 0.5 g, 29.4 km · uyum 129/129) |  |
| Menzile | yerlesimler_afrika.js | Kahire | ulasilmaz | 129/129 | — |  |
| Fâkûs | yerlesimler_afrika.js | Kahire | 2.3 g | 129/129 | Bilbîs (Şarkiye) (k3, 0.8 g, 41.1 km · uyum 129/129) |  |
| Sâlihiyye | yerlesimler_afrika.js | Kahire | 2.8 g | 129/129 | Bilbîs (Şarkiye) (k3, 1.4 g, 58.0 km · uyum 129/129) |  |
| Ebûkîr | yerlesimler_afrika.js | Kahire | ulasilmaz | 129/129 | İskenderiye (k3, 0.5 g, 18.8 km · uyum 129/129) | m: merkezi >5 gün, İskenderiye <2 gün |
| Portsaid | yerlesimler_afrika.js | Kahire | ulasilmaz | 13/13 | — |  |
| İsmâiliye | yerlesimler_afrika.js | Kahire | 3.1 g | 12/12 | Bilbîs (Şarkiye) (k3, 1.8 g, 70.2 km · uyum 12/12) |  |
| Katye | yerlesimler_afrika.js | Kahire | 4.6 g | 129/129 | Bilbîs (Şarkiye) (k3, 3.3 g, 117.5 km · uyum 129/129) |  |
| El-Arîş | yerlesimler_afrika.js | Kahire | ölçülmedi | 129/129 | Gazze (k3, 2.0 g, 75.7 km · uyum 106/129) | m: merkezi >5 gün, Gazze <2 gün |
| Mersâ Matruh | yerlesimler_afrika.js | Kahire | 11.4 g | 129/129 | Demenhûr (Damanhur) (k3, 8.9 g, 309.9 km · uyum 129/129) |  |
| Sellûm | yerlesimler_afrika.js | Kahire | ölçülmedi | 129/129 | Derne (k3, 7.6 g, 274.5 km · uyum 38/129) |  |
| Atfîh | yerlesimler_afrika.js | Kahire | 1.9 g | 129/129 | Benî Süveyf (k3, 1.1 g, 40.3 km · uyum 85/85) |  |
| Behnesâ | yerlesimler_afrika.js | Kahire | ölçülmedi | 129/129 | Minye (k3, 1.1 g, 48.4 km · uyum 129/129) | m: merkezi >5 gün, Minye <2 gün |
| Mellevî | yerlesimler_afrika.js | Kahire | ölçülmedi | 129/129 | Minye (k3, 0.8 g, 42.9 km · uyum 129/129) | m: merkezi >5 gün, Minye <2 gün |
| Deyrût | yerlesimler_afrika.js | Kahire | ölçülmedi | 129/129 | Minye (k3, 1.3 g, 62.1 km · uyum 129/129) | m: merkezi >5 gün, Minye <2 gün |
| Tahtâ | yerlesimler_afrika.js | Kahire | ölçülmedi | 129/129 | Asyut (k3, 1.2 g, 55.8 km · uyum 129/129) | m: merkezi >5 gün, Asyut <2 gün |
| Ahmîm | yerlesimler_afrika.js | Kahire | ölçülmedi | 129/129 | Cirge (Girga) (k3, 0.6 g, 28.9 km · uyum 106/106) | m: merkezi >5 gün, Cirge (Girga) <2 gün |
| Ferşût | yerlesimler_afrika.js | Kahire | ölçülmedi | 129/129 | Cirge (Girga) (k3, 1.0 g, 41.7 km · uyum 106/106) | m: merkezi >5 gün, Cirge (Girga) <2 gün |
| Kûs | yerlesimler_afrika.js | Kahire | ölçülmedi | 129/129 | Kına (k3, 0.7 g, 28.1 km · uyum 129/129) | m: merkezi >5 gün, Kına <2 gün |
| Uksur (Luksor) | yerlesimler_afrika.js | Kahire | ölçülmedi | 129/129 | Kına (k3, 1.4 g, 53.6 km · uyum 129/129) | m: merkezi >5 gün, Kına <2 gün |
| Esna | yerlesimler_afrika.js | Kahire | ölçülmedi | 129/129 | Kına (k3, 2.8 g, 98.3 km · uyum 129/129) |  |
| Edfû | yerlesimler_afrika.js | Kahire | ölçülmedi | 129/129 | Asvan (k3, 2.5 g, 99.0 km · uyum 129/129) |  |
| Kûm Ombo | yerlesimler_afrika.js | Kahire | ölçülmedi | 129/129 | Asvan (k3, 1.0 g, 43.3 km · uyum 129/129) | m: merkezi >5 gün, Asvan <2 gün |
| Kusayr | yerlesimler_afrika.js | Kahire | ölçülmedi | 129/129 | Kına (k3, 4.5 g, 156.7 km · uyum 129/129) |  |
| Sefâce | yerlesimler_afrika.js | Kahire | 13.7 g | 129/129 | Kına (k3, 4.0 g, 136.8 km · uyum 129/129) |  |
| Ebû Ramâd (Şalâtîn) | yerlesimler_afrika.js | Kahire | ölçülmedi | 121/129 | Asvan (k3, 8.3 g, 295.3 km · uyum 121/129) |  |
| Tûr (Sînâ) | yerlesimler_afrika.js | Kahire | 10.3 g | 129/129 | Kahire (k2, 10.3 g, 306.5 km · uyum 129/129) |  |
| Vâdî Halfâ | yerlesimler_afrika.js | Kahire | ölçülmedi | 17/22 | Dongola (k3, 8.2 g, 307.1 km · uyum 18/22) | m: ile sahiplik uyumu %77 |
| Halkulvâdî | yerlesimler_afrika.js | Tunus | 0.1 g | 121/129 | Kartaca (Carthage) (k2, 0.0 g, 4.2 km · uyum 60/129) |  |
| Mâtir (Mateur) | yerlesimler_afrika.js | Tunus | 1.5 g | 128/129 | Benzert (Bizerte) (k3, 0.8 g, 31.4 km · uyum 126/129) |  |
| Tabarka | yerlesimler_afrika.js | Tunus | 4.0 g | 89/129 | Kef (k3, 2.8 g, 87.0 km · uyum 89/129) | m: ile sahiplik uyumu %69 |
| Bâce (Béja) | yerlesimler_afrika.js | Tunus | 2.6 g | 128/129 | Kef (k3, 2.2 g, 75.5 km · uyum 129/129) |  |
| Cendûbe | yerlesimler_afrika.js | Tunus | 3.7 g | 128/129 | Kef (k3, 1.0 g, 37.0 km · uyum 129/129) |  |
| Nâbil (Nabeul) | yerlesimler_afrika.js | Tunus | 1.7 g | 128/129 | Tunus (k2, 1.7 g, 63.0 km · uyum 128/129) |  |
| Kelîbiye | yerlesimler_afrika.js | Tunus | 2.4 g | 128/129 | Tunus (k2, 2.4 g, 81.6 km · uyum 128/129) |  |
| Zağvân | yerlesimler_afrika.js | Tunus | 1.1 g | 128/129 | Tunus (k2, 1.1 g, 44.4 km · uyum 128/129) |  |
| Munastır | yerlesimler_afrika.js | Tunus | 4.0 g | 128/129 | Sûse (k3, 0.5 g, 17.8 km · uyum 129/129) |  |
| Mehdiye | yerlesimler_afrika.js | Tunus | 4.7 g | 128/129 | Sûse (k3, 1.2 g, 52.4 km · uyum 129/129) |  |
| Kasrayn | yerlesimler_afrika.js | Tunus | 6.4 g | 128/129 | Kafsa (k3, 2.2 g, 82.7 km · uyum 129/129) |  |
| Tozer | yerlesimler_afrika.js | Tunus | 10.8 g | 128/129 | Kafsa (k3, 2.2 g, 82.1 km · uyum 129/129) |  |
| Nefta | yerlesimler_afrika.js | Tunus | 11.5 g | 128/129 | Kafsa (k3, 2.9 g, 103.6 km · uyum 129/129) |  |
| Medenîn | yerlesimler_afrika.js | Tunus | ölçülmedi | 128/129 | Gabes (k3, 1.7 g, 69.8 km · uyum 129/129) | m: merkezi >5 gün, Gabes <2 gün |
| Tatavin | yerlesimler_afrika.js | Tunus | ölçülmedi | 128/129 | Gabes (k3, 3.0 g, 110.8 km · uyum 129/129) |  |
| Cerciş (Zarzis) | yerlesimler_afrika.js | Tunus | ölçülmedi | 128/129 | Gabes (k3, 2.9 g, 102.9 km · uyum 129/129) |  |
| Bin Gerdân | yerlesimler_afrika.js | Tunus | ölçülmedi | 128/129 | Gabes (k3, 3.5 g, 133.0 km · uyum 129/129) |  |
| Zâviye | yerlesimler_afrika.js | Trablus | 1.2 g | 120/129 | Trablus (k2, 1.2 g, 46.0 km · uyum 120/129) |  |
| Zuvâre | yerlesimler_afrika.js | Trablus | 3.1 g | 120/129 | Trablus (k2, 3.1 g, 103.7 km · uyum 120/129) |  |
| Nâlût | yerlesimler_afrika.js | Trablus | 6.6 g | 120/129 | Garyân (k3, 5.6 g, 195.2 km · uyum 129/129) |  |
| Yefren | yerlesimler_afrika.js | Trablus | 3.0 g | 98/107 | Garyân (k3, 1.6 g, 47.9 km · uyum 107/107) |  |
| Mızde | yerlesimler_afrika.js | Trablus | 4.4 g | 120/129 | Garyân (k3, 2.1 g, 80.4 km · uyum 129/129) |  |
| Hums (Lebde) | yerlesimler_afrika.js | Trablus | 2.9 g | 6/6 | Misrata (k3, 2.3 g, 83.6 km · uyum 6/6) |  |
| Zilten | yerlesimler_afrika.js | Trablus | 3.9 g | 120/129 | Misrata (k3, 1.2 g, 50.2 km · uyum 129/129) |  |
| Benî Velîd | yerlesimler_afrika.js | Trablus | 3.9 g | 120/129 | Garyân (k3, 3.0 g, 102.6 km · uyum 129/129) |  |
| Sirte | yerlesimler_afrika.js | Trablus | 10.6 g | 120/129 | Misrata (k3, 6.1 g, 192.6 km · uyum 129/129) |  |
| Ecdâbiye | yerlesimler_afrika.js | Bingazi | 3.8 g | 74/74 | Bingazi (k2, 3.8 g, 152.3 km · uyum 74/74) |  |
| Merc | yerlesimler_afrika.js | Bingazi | 2.3 g | 74/74 | Bingazi (k2, 2.3 g, 83.2 km · uyum 74/74) |  |
| Beyzâ (Kirene) | yerlesimler_afrika.js | Bingazi | 5.5 g | 74/74 | Derne (k3, 2.0 g, 73.4 km · uyum 74/74) |  |
| Tobruk | yerlesimler_afrika.js | Bingazi | 9.9 g | 74/74 | Derne (k3, 4.3 g, 146.8 km · uyum 74/74) |  |
| Blida | yerlesimler_afrika.js | Cezayir | 0.9 g | 129/129 | Cezayir (k2, 0.9 g, 37.6 km · uyum 129/129) |  |
| Miliana | yerlesimler_afrika.js | Cezayir | 2.9 g | 129/129 | Cezayir (k2, 2.9 g, 89.4 km · uyum 129/129) |  |
| Dellîs | yerlesimler_afrika.js | Cezayir | 2.4 g | 126/129 | Cezayir (k2, 2.4 g, 78.1 km · uyum 126/129) |  |
| Tenes | yerlesimler_afrika.js | Cezayir | 5.5 g | 126/129 | Mustagānim (k3, 4.1 g, 126.8 km · uyum 120/129) |  |
| Şelif | yerlesimler_afrika.js | Cezayir | 5.3 g | 126/129 | Mustagānim (k3, 3.3 g, 115.0 km · uyum 120/129) |  |
| Muaskar | yerlesimler_afrika.js | Cezayir | ölçülmedi | 120/129 | Mustagānim (k3, 1.8 g, 59.7 km · uyum 128/129) | m: merkezi >5 gün, Mustagānim <2 gün |
| Sîdî Bel Abbès | yerlesimler_afrika.js | Cezayir | ölçülmedi | 16/16 | Oran (k3, 1.6 g, 56.2 km · uyum 16/16) | m: merkezi >5 gün, Oran <2 gün |
| Ayn Temûşent | yerlesimler_afrika.js | Cezayir | ölçülmedi | 119/129 | Tilimsan (k3, 1.5 g, 49.0 km · uyum 123/129) | m: merkezi >5 gün, Tilimsan <2 gün |
| Nedrûme | yerlesimler_afrika.js | Cezayir | ölçülmedi | 119/129 | Vecde (Oujda) (k3, 1.0 g, 39.2 km · uyum 0/129) | m: merkezi >5 gün, Vecde (Oujda) <2 gün |
| Cicel | yerlesimler_afrika.js | Cezayir | 9.7 g | 127/129 | Konstantin (k3, 3.3 g, 91.3 km · uyum 80/129) |  |
| Kolo | yerlesimler_afrika.js | Cezayir | 12.5 g | 127/129 | Konstantin (k3, 2.2 g, 70.8 km · uyum 80/129) |  |
| Sikikde | yerlesimler_afrika.js | Cezayir | 12.8 g | 76/129 | Konstantin (k3, 1.9 g, 62.7 km · uyum 127/129) | m: merkezi >5 gün, Konstantin <2 gün; m: ile sahiplik uyumu %59 |
| Mîle | yerlesimler_afrika.js | Cezayir | 10.3 g | 127/129 | Konstantin (k3, 1.1 g, 32.8 km · uyum 80/129) | m: merkezi >5 gün, Konstantin <2 gün |
| Kalme (Guelma) | yerlesimler_afrika.js | Cezayir | ölçülmedi | 127/129 | Konstantin (k3, 2.4 g, 73.5 km · uyum 80/129) |  |
| Sûk Ahrâs | yerlesimler_afrika.js | Cezayir | ölçülmedi | 75/129 | Kef (k3, 2.2 g, 68.8 km · uyum 98/129) | m: ile sahiplik uyumu %58 |
| Tebesse | yerlesimler_afrika.js | Cezayir | ölçülmedi | 126/129 | Kef (k3, 3.0 g, 100.5 km · uyum 47/129) |  |
| Batna | yerlesimler_afrika.js | Cezayir | 10.5 g | 126/129 | Konstantin (k3, 2.9 g, 98.3 km · uyum 79/129) |  |
| Berc Bû Areric | yerlesimler_afrika.js | Cezayir | 5.8 g | 127/129 | Konstantin (k3, 4.9 g, 169.6 km · uyum 80/129) |  |
| Mesîle | yerlesimler_afrika.js | Cezayir | 5.7 g | 126/129 | Cezayir (k2, 5.7 g, 177.0 km · uyum 126/129) |  |
| Bû Sa'âde | yerlesimler_afrika.js | Cezayir | 6.1 g | 119/129 | Cezayir (k2, 6.1 g, 198.9 km · uyum 119/129) |  |
| Ağvât | yerlesimler_afrika.js | Cezayir | 10.0 g | 96/108 | Cezayir (k2, 10.0 g, 329.2 km · uyum 96/108) | m: ile sahiplik uyumu %89 |
| Gardâye | yerlesimler_afrika.js | Cezayir | ölçülmedi | 117/129 | Tîmîmûn (Gûrâre) (k3, 12.5 g, 487.6 km · uyum 5/129) |  |
| Arkîko | yerlesimler_afrika.js | Sevâkin | ölçülmedi | 69/129 | Masavva (k3, 0.0 g, 7.5 km · uyum 69/129) | m: merkezi >5 gün, Masavva <2 gün; m: ile sahiplik uyumu %53 |
| Halâib | yerlesimler_afrika.js | Sevâkin | 10.2 g | 120/129 | Bûr Sûdân (k3, 8.5 g, 295.6 km · uyum 0/3) |  |
| Akīk | yerlesimler_afrika.js | Sevâkin | 3.5 g | 125/129 | Sevâkin (k2, 3.5 g, 133.8 km · uyum 125/129) |  |
| Tokar | yerlesimler_afrika.js | Sevâkin | 2.3 g | 124/129 | Sevâkin (k2, 2.3 g, 86.4 km · uyum 124/129) |  |
| Sinkat | yerlesimler_afrika.js | Sevâkin | 1.9 g | 124/129 | Sevâkin (k2, 1.9 g, 60.7 km · uyum 124/129) |  |
| Kerene | yerlesimler_afrika.js | Sevâkin | ölçülmedi | 10/129 | Ağordat (k3, 2.0 g, 65.4 km · uyum 127/129) | m: merkezi >5 gün, Ağordat <2 gün; m: ile sahiplik uyumu %8 |
| Kerma | yerlesimler_afrika.js | Hartum | ölçülmedi | 44/45 | Dongola (k3, 1.0 g, 48.4 km · uyum 129/129) | m: merkezi >5 gün, Dongola <2 gün |
| Debbe | yerlesimler_afrika.js | Hartum | 8.9 g | 44/45 | Dongola (k3, 3.4 g, 133.7 km · uyum 129/129) |  |
| Merevî | yerlesimler_afrika.js | Hartum | 9.3 g | 44/45 | Dongola (k3, 4.2 g, 160.5 km · uyum 129/129) |  |
| Ebû Hamed | yerlesimler_afrika.js | Hartum | ölçülmedi | 44/45 | Berber (k3, 4.8 g, 182.9 km · uyum 129/129) |  |
| Ed-Düveym | yerlesimler_afrika.js | Hartum | 4.3 g | 45/45 | Vad Medenî (k3, 3.4 g, 135.6 km · uyum 129/129) |  |
| Kosti | yerlesimler_afrika.js | Hartum | 6.5 g | 45/45 | Sennar (k3, 3.1 g, 111.6 km · uyum 129/129) |  |
| Kadârif | yerlesimler_afrika.js | Hartum | ölçülmedi | 45/45 | Tesseney (k3, 4.7 g, 182.3 km · uyum 0/129) |  |
| Rusayris | yerlesimler_afrika.js | Hartum | ölçülmedi | 45/45 | Sennar (k3, 5.4 g, 205.9 km · uyum 129/129) |  |
| Fâzûğlî | yerlesimler_afrika.js | Hartum | ölçülmedi | 45/45 | İncibara (k3, 7.6 g, 237.2 km · uyum 0/129) |  |
| Bâra | yerlesimler_afrika.js | Hartum | 8.1 g | 45/45 | Kordofan (Ubeyyid) (k3, 1.4 g, 59.7 km · uyum 25/25) | m: merkezi >5 gün, Kordofan (Ubeyyid) <2 gün |
| Nühûd | yerlesimler_afrika.js | Hartum | ölçülmedi | 37/45 | Kordofan (Ubeyyid) (k3, 5.4 g, 201.0 km · uyum 20/25) | m: ile sahiplik uyumu %82 |
| Ğadâmis | yerlesimler_afrika.js | Trablus | 12.5 g | 120/129 | Garyân (k3, 11.2 g, 404.9 km · uyum 129/129) |  |
| Gât | yerlesimler_afrika.js | Murzuk (Fizan) | 11.0 g | 129/129 | Murzuk (Fizan) (k2, 11.0 g, 390.6 km · uyum 129/129) |  |
| Cağbûb | yerlesimler_afrika.js | Bingazi | ölçülmedi | 14/14 | Derne (k3, 10.1 g, 380.9 km · uyum 14/14) |  |
| Nyala | yerlesimler_afrika.js | El-Fâşir | 4.9 g | 26/26 | El-Fâşir (k1, 4.9 g, 183.3 km · uyum 26/26) |  |
| Cenîne | yerlesimler_afrika.js | El-Fâşir | 8.4 g | 26/26 | El-Fâşir (k1, 8.4 g, 314.9 km · uyum 26/26) |  |
| Hârice (Vâhât) | yerlesimler_afrika.js | Kahire | ölçülmedi | 129/129 | Cirge (Girga) (k3, 4.5 g, 167.9 km · uyum 106/106) |  |
| Dâhile | yerlesimler_afrika.js | Kahire | ölçülmedi | 129/129 | Asyut (k3, 7.9 g, 289.4 km · uyum 129/129) |  |
| Ferâfire | yerlesimler_afrika.js | Kahire | 12.5 g | 129/129 | Minye (k3, 8.1 g, 298.2 km · uyum 129/129) |  |
| Bahriye (Bâvîtî) | yerlesimler_afrika.js | Kahire | 8.1 g | 129/129 | Minye (k3, 4.9 g, 186.9 km · uyum 129/129) |  |
| Sokna | yerlesimler_afrika.js | Trablus | ölçülmedi | 69/129 | Misrata (k3, 10.0 g, 374.3 km · uyum 69/129) | m: ile sahiplik uyumu %53 |
| Câlû | yerlesimler_afrika.js | Bingazi | 9.8 g | 69/74 | Bingazi (k2, 9.8 g, 371.5 km · uyum 69/74) |  |
| Sebha | yerlesimler_afrika.js | Murzuk (Fizan) | 3.5 g | 129/129 | Murzuk (Fizan) (k2, 3.5 g, 134.5 km · uyum 129/129) |  |
| Ubârî | yerlesimler_afrika.js | Murzuk (Fizan) | 3.6 g | 129/129 | Murzuk (Fizan) (k2, 3.6 g, 136.3 km · uyum 129/129) |  |
| Eperjes (Prešov) | yerlesimler_ek.js | Kassa (Košice) | 0.7 g | 129/129 | Kassa (Košice) (k2, 0.7 g, 31.8 km · uyum 129/129) |  |
| Tokaj | yerlesimler_ek.js | Kassa (Košice) | 1.9 g | 127/129 | Debrecen (k3, 1.8 g, 67.2 km · uyum 98/129) |  |
| Sin (Sinj) | yerlesimler_ek.js | Klis | 0.4 g | 116/129 | Klis (k2, 0.4 g, 18.8 km · uyum 116/129) | m: ile sahiplik uyumu %90 |
| Herseknovi (Herceg Novi) | yerlesimler_ek.js | Mostar | ölçülmedi | 46/94 | Kotor (Cattaro) (k3, 0.5 g, 19.2 km · uyum 47/108) | m: merkezi >5 gün, Kotor (Cattaro) <2 gün; m: ile sahiplik uyumu %49 |
| Behramkale (Assos) | yerlesimler_ek23.js | Bursa | ölçülmedi | 120/129 | Çanakkale (k3, 2.2 g, 73.4 km · uyum 94/94) |  |
| Beykoz | yerlesimler_ek23.js | İstanbul | 0.1 g | 117/129 | Üsküdar (k3, 0.1 g, 13.3 km · uyum 116/129) |  |
| Şarköy | yerlesimler_ek23.js | Edirne | 3.4 g | 129/129 | Gelibolu (k3, 1.3 g, 44.1 km · uyum 126/129) |  |
| Diyadin | yerlesimler_ek26.js | Erzurum | ölçülmedi | 11/11 | Doğubayazıt (k3, 1.0 g, 35.4 km · uyum 11/11) | m: merkezi >5 gün, Doğubayazıt <2 gün |
| Eleşkirt | yerlesimler_ek26.js | Erzurum | 4.3 g | 11/11 | Karakilise (Karaköse, Ağrı) (k3, 0.8 g, 33.4 km · uyum 11/11) |  |
| Erzin | yerlesimler_ek28.js | Adana | 2.4 g | 80/129 | Dörtyol (k3, 0.2 g, 12.4 km · uyum 129/129) | m: ile sahiplik uyumu %62 |
| Yumurtalık | yerlesimler_ek28.js | Adana | 1.4 g | 80/129 | Adana (k2, 1.4 g, 48.6 km · uyum 80/129) | m: ile sahiplik uyumu %62 |
| Arhavi | yerlesimler_ek28.js | Trabzon | ölçülmedi | 129/129 | Hopa (k3, 0.2 g, 10.1 km · uyum 75/129) | m: merkezi >5 gün, Hopa <2 gün |
| Borçka | yerlesimler_ek28.js | Erzurum | ölçülmedi | 67/129 | Artvin (k3, 0.6 g, 21.2 km · uyum 129/129) | m: merkezi >5 gün, Artvin <2 gün; m: ile sahiplik uyumu %52 |
| Ilgın | yerlesimler_ek29.js | Konya | 2.1 g | 129/129 | Konya (k2, 2.1 g, 68.0 km · uyum 129/129) |  |
| Karapınar | yerlesimler_ek29.js | Karaman | 1.5 g | 129/129 | Karaman (k3, 1.5 g, 66.5 km · uyum 129/129) |  |
| Ulukışla | yerlesimler_ek29.js | Niğde | 1.4 g | 129/129 | Niğde (k3, 1.4 g, 49.7 km · uyum 129/129) |  |
| Tosya | yerlesimler_ek29.js | Kastamonu | 1.7 g | 129/129 | Kastamonu (k3, 1.7 g, 45.8 km · uyum 129/129) |  |
| Kelkit | yerlesimler_ek29.js | Erzincan | 1.6 g | 107/129 | Gümüşhane (k2, 1.5 g, 37.2 km · uyum 102/129) | m: ile sahiplik uyumu %83 |
| Hacıoğlupazarcığı (Dobrich) | yerlesimler_ek29.js | Silistre | 1.8 g | 81/81 | Varna (k3, 1.0 g, 39.7 km · uyum 79/81) |  |
| Kişinev (Chișinău) | yerlesimler_ek29.js | Yaş | 3.0 g | 80/101 | Bender (k3, 1.3 g, 51.0 km · uyum 46/101) | m: ile sahiplik uyumu %79 |
| Bălți | yerlesimler_ek29.js | Yaş | 1.9 g | 108/129 | Yaş (k2, 1.9 g, 71.7 km · uyum 108/129) | m: ile sahiplik uyumu %84 |
| Botoşani | yerlesimler_ek29.js | Yaş | 2.6 g | 129/129 | Suçava (Suceava) (k3, 0.8 g, 34.0 km · uyum 100/129) |  |
| Dorohoi | yerlesimler_ek29.js | Yaş | 3.4 g | 129/129 | Suçava (Suceava) (k3, 0.8 g, 38.0 km · uyum 100/129) |  |
| Pasarofça (Požarevac) | yerlesimler_ek29.js | Belgrad | 1.9 g | 100/129 | Semendire (k3, 0.6 g, 20.9 km · uyum 129/129) | m: ile sahiplik uyumu %78 |
| Valjevo | yerlesimler_ek29.js | Belgrad | 2.0 g | 100/129 | Takova (Takovo) (k3, 1.4 g, 46.9 km · uyum 129/129) | m: ile sahiplik uyumu %78 |
| Ćuprija | yerlesimler_ek29.js | Belgrad | 3.5 g | 100/129 | Alacahisar (Kruševac) (k3, 1.1 g, 38.8 km · uyum 113/129) | m: ile sahiplik uyumu %78 |
| Rudnik | yerlesimler_ek29.js | Belgrad | 2.1 g | 100/129 | Takova (Takovo) (k3, 0.2 g, 13.8 km · uyum 129/129) | m: ile sahiplik uyumu %78 |
| İvranye (Vranje) | yerlesimler_ek29.js | Sofya | 4.2 g | 88/129 | Priştine (k3, 2.1 g, 61.7 km · uyum 106/116) | m: ile sahiplik uyumu %68 |
| Leskofça (Leskovac) | yerlesimler_ek29.js | Sofya | 4.2 g | 90/129 | Niş (k3, 1.1 g, 36.2 km · uyum 121/129) | m: ile sahiplik uyumu %70 |
| Kurşunlu (Kuršumlija) | yerlesimler_ek29.js | Sofya | ölçülmedi | 89/129 | Kosova Ovası (Kosovo Polje) (k3, 1.3 g, 49.3 km · uyum 118/129) | m: merkezi >5 gün, Kosova Ovası (Kosovo Polje) <2 gün; m: ile sahiplik uyumu %69 |
| Ürküp (Prokuplje) | yerlesimler_ek29.js | Sofya | ölçülmedi | 89/129 | Niş (k3, 0.8 g, 26.8 km · uyum 120/129) | m: merkezi >5 gün, Niş <2 gün; m: ile sahiplik uyumu %69 |
| Bar (Antivari) | yerlesimler_ek29.js | İşkodra | 1.2 g | 91/129 | İşkodra (k2, 1.2 g, 31.3 km · uyum 91/129) | m: ile sahiplik uyumu %71 |
| Lofça (Loveč) | yerlesimler_ek29.js | Sofya | 4.2 g | 127/129 | Plevne (k3, 0.7 g, 32.8 km · uyum 129/129) |  |
| Ziştovi (Svishtov) | yerlesimler_ek29.js | Sofya | ölçülmedi | 128/129 | Niğbolu (k3, 1.0 g, 38.1 km · uyum 128/129) | m: merkezi >5 gün, Niğbolu <2 gün |
| Zara | yerlesimler_ek29.js | Sivas | 2.0 g | 129/129 | Sivas (k2, 2.0 g, 65.7 km · uyum 129/129) |  |
| İmranlı | yerlesimler_ek29.js | Sivas | 2.9 g | 129/129 | Karahisâr-ı Şarkî (Şebinkarahisar) (k2, 2.1 g, 52.9 km · uyum 114/129) |  |
| Refahiye | yerlesimler_ek29.js | Erzincan | 2.5 g | 129/129 | Karahisâr-ı Şarkî (Şebinkarahisar) (k2, 2.0 g, 52.3 km · uyum 110/129) |  |
| Margiliç (Margariti) | yerlesimler_epir.js | Yanya | 1.6 g | 121/129 | Aydonat (Paramythia) (k3, 0.1 g, 12.6 km · uyum 129/129) |  |
| Butrint (Butrinto) | yerlesimler_epir.js | Yanya | 2.7 g | 36/129 | Delvine (k3, 0.5 g, 23.7 km · uyum 46/129) | m: ile sahiplik uyumu %28 |
| Hımara (Himarë) | yerlesimler_epir.js | Avlonya | 1.9 g | 129/129 | Ergiri (Ergirikasrı) (k3, 1.5 g, 33.7 km · uyum 103/118) |  |
| Ayasaranda (Sarandë) | yerlesimler_epir.js | Delvine | 0.2 g | 129/129 | Delvine (k3, 0.2 g, 11.5 km · uyum 129/129) |  |
| Souli (Sûli) | yerlesimler_epir.js | Yanya | 1.1 g | 121/129 | Aydonat (Paramythia) (k3, 0.3 g, 10.2 km · uyum 129/129) |  |
| İgumenitsa (Gomenice) | yerlesimler_epir.js | Yanya | 2.2 g | 121/129 | Aydonat (Paramythia) (k3, 0.7 g, 22.0 km · uyum 129/129) |  |
| Filat (Filiates) | yerlesimler_epir.js | Yanya | 1.7 g | 121/129 | Aydonat (Paramythia) (k3, 0.6 g, 23.0 km · uyum 129/129) |  |
| Çatalca | yerlesimler_serhat.js | İstanbul | 1.3 g | 129/129 | İstanbul (k1, 1.3 g, 46.1 km · uyum 129/129) |  |
| Delgo (Sükkût) | yerlesimler_h2_afrika.js | Hartum | ölçülmedi | 44/45 | Dongola (k3, 2.7 g, 106.8 km · uyum 129/129) |  |
| Abrî (Mahas) | yerlesimler_h2_afrika.js | Hartum | ölçülmedi | 44/45 | Dongola (k3, 4.8 g, 182.3 km · uyum 129/129) |  |
| Kortî | yerlesimler_h2_afrika.js | Hartum | 8.4 g | 44/45 | Dongola (k3, 4.1 g, 165.7 km · uyum 129/129) |  |
| Ed-Dâmer | yerlesimler_h2_afrika.js | Hartum | 7.5 g | 29/30 | Berber (k3, 1.0 g, 46.7 km · uyum 30/30) | m: merkezi >5 gün, Berber <2 gün |
| Kabûşiyye | yerlesimler_h2_afrika.js | Hartum | 5.4 g | 44/45 | Şendî (k3, 0.9 g, 40.0 km · uyum 128/129) | m: merkezi >5 gün, Şendî <2 gün |
| Sincâ | yerlesimler_h2_afrika.js | Hartum | 7.8 g | 8/8 | Sennar (k3, 1.4 g, 56.7 km · uyum 8/8) | m: merkezi >5 gün, Sennar <2 gün |
| Müsellemiyye | yerlesimler_h2_afrika.js | Hartum | 3.7 g | 45/45 | Vad Medenî (k3, 0.3 g, 20.9 km · uyum 129/129) |  |
| Rufâa | yerlesimler_h2_afrika.js | Hartum | 3.0 g | 45/45 | Vad Medenî (k3, 1.1 g, 43.9 km · uyum 129/129) |  |
| El-Kavâ | yerlesimler_h2_afrika.js | Hartum | 4.7 g | 45/45 | Sennar (k3, 3.2 g, 122.5 km · uyum 129/129) |  |
| Cebeleyn | yerlesimler_h2_afrika.js | Hartum | 8.2 g | 45/45 | Sennar (k3, 3.4 g, 137.0 km · uyum 129/129) |  |
| Kurmuk | yerlesimler_h2_afrika.js | Hartum | ölçülmedi | 45/45 | Sennar (k3, 8.3 g, 311.5 km · uyum 129/129) |  |
| Er-Rahad | yerlesimler_h2_afrika.js | Hartum | 9.8 g | 45/45 | Kordofan (Ubeyyid) (k3, 1.6 g, 70.3 km · uyum 25/25) | m: merkezi >5 gün, Kordofan (Ubeyyid) <2 gün |
| Ümmü Rüvâbe | yerlesimler_h2_afrika.js | Hartum | 8.6 g | 45/45 | Kordofan (Ubeyyid) (k3, 2.9 g, 112.8 km · uyum 25/25) |  |
| Sodirî | yerlesimler_h2_afrika.js | Hartum | 10.7 g | 45/45 | Kordofan (Ubeyyid) (k3, 4.6 g, 183.4 km · uyum 25/25) |  |
| Dilling | yerlesimler_h2_afrika.js | Hartum | 12.9 g | 45/45 | Kordofan (Ubeyyid) (k3, 3.6 g, 140.5 km · uyum 25/25) |  |
| Kâdûglî | yerlesimler_h2_afrika.js | Hartum | ölçülmedi | 45/45 | Kordofan (Ubeyyid) (k3, 6.6 g, 248.1 km · uyum 25/25) |  |
| Talodi | yerlesimler_h2_afrika.js | Hartum | ölçülmedi | 45/45 | Kordofan (Ubeyyid) (k3, 7.6 g, 284.5 km · uyum 25/25) |  |
| Ebû Zabed | yerlesimler_h2_afrika.js | Hartum | 12.8 g | 45/45 | Kordofan (Ubeyyid) (k3, 3.4 g, 140.2 km · uyum 25/25) |  |
| Muglad | yerlesimler_h2_afrika.js | Hartum | ölçülmedi | 45/45 | Kordofan (Ubeyyid) (k3, 9.3 g, 361.2 km · uyum 25/25) |  |
| Bâbanûsa | yerlesimler_h2_afrika.js | Hartum | ölçülmedi | 45/45 | Kordofan (Ubeyyid) (k3, 8.7 g, 332.7 km · uyum 25/25) |  |
| Ğubeyş | yerlesimler_h2_afrika.js | Hartum | ölçülmedi | 45/45 | El-Fâşir (k1, 7.1 g, 275.4 km · uyum 7/26) |  |
| Kutum | yerlesimler_h2_afrika.js | El-Fâşir | 2.6 g | 26/26 | El-Fâşir (k1, 2.6 g, 97.8 km · uyum 26/26) |  |
| Kebkâbiye | yerlesimler_h2_afrika.js | El-Fâşir | 3.6 g | 26/26 | El-Fâşir (k1, 3.6 g, 137.0 km · uyum 26/26) |  |
| Zâlincî | yerlesimler_h2_afrika.js | El-Fâşir | 6.3 g | 26/26 | El-Fâşir (k1, 6.3 g, 217.7 km · uyum 26/26) |  |
| Ed-Da'în | yerlesimler_h2_afrika.js | El-Fâşir | 6.7 g | 26/26 | El-Fâşir (k1, 6.7 g, 255.8 km · uyum 26/26) |  |
| Burâm | yerlesimler_h2_afrika.js | El-Fâşir | 7.9 g | 26/26 | El-Fâşir (k1, 7.9 g, 312.0 km · uyum 26/26) |  |
| Ümmü Keddâde | yerlesimler_h2_afrika.js | El-Fâşir | 3.8 g | 26/26 | El-Fâşir (k1, 3.8 g, 145.1 km · uyum 26/26) |  |
| Tîne (Dârfûr) | yerlesimler_h2_afrika.js | El-Fâşir | 8.1 g | 26/26 | El-Fâşir (k1, 8.1 g, 299.2 km · uyum 26/26) |  |
| Hayyâ | yerlesimler_h2_afrika.js | Sevâkin | 3.8 g | 125/129 | Sevâkin (k2, 3.8 g, 133.1 km · uyum 125/129) |  |
| Trinkitât | yerlesimler_h2_afrika.js | Sevâkin | 1.9 g | 125/129 | Sevâkin (k2, 1.9 g, 61.0 km · uyum 125/129) |  |
| Muhammed Kol | yerlesimler_h2_afrika.js | Sevâkin | 5.4 g | 125/129 | Bûr Sûdân (k3, 3.7 g, 135.5 km · uyum 3/3) |  |
| Şereyk | yerlesimler_h2_afrika.js | Hartum | 10.7 g | 44/45 | Berber (k3, 2.5 g, 91.1 km · uyum 129/129) |  |
| Kerreri | yerlesimler_h2_afrika.js | Hartum | 1.0 g | 45/45 | Ümmü Dermân (k3, 0.4 g, 20.6 km · uyum 129/129) |  |
| El-Menâkıl | yerlesimler_h2_afrika.js | Hartum | 3.9 g | 45/45 | Vad Medenî (k3, 1.5 g, 62.3 km · uyum 129/129) |  |
| Ed-Damazîn | yerlesimler_h2_afrika.js | Hartum | ölçülmedi | 45/45 | Sennar (k3, 5.5 g, 212.1 km · uyum 129/129) |  |
| Tendelti | yerlesimler_h2_afrika.js | Hartum | 7.6 g | 45/45 | Kordofan (Ubeyyid) (k3, 4.5 g, 180.0 km · uyum 25/25) |  |
| Ümmü Bedr | yerlesimler_h2_afrika.js | Hartum | ölçülmedi | 45/45 | Kordofan (Ubeyyid) (k3, 7.4 g, 275.0 km · uyum 25/25) |  |
| Derûdeb | yerlesimler_h2_afrika.js | Sevâkin | 6.1 g | 125/129 | Kesela (k3, 6.0 g, 235.8 km · uyum 5/17) |  |
| Mellît | yerlesimler_h2_afrika.js | El-Fâşir | 1.5 g | 26/26 | El-Fâşir (k1, 1.5 g, 60.6 km · uyum 26/26) |  |
| Şa'riyye | yerlesimler_h2_afrika.js | El-Fâşir | 1.9 g | 26/26 | El-Fâşir (k1, 1.9 g, 81.6 km · uyum 26/26) |  |
| Radom | yerlesimler_h2_afrika.js | El-Fâşir | ölçülmedi | 26/26 | — |  |
| Tîzî Vezzû (Kabiliye) | yerlesimler_h2_kuzeyafrika.js | Cezayir | 2.7 g | 123/129 | Cezayir (k2, 2.7 g, 88.3 km · uyum 123/129) |  |
| Akbû (Benî Abbâs) | yerlesimler_h2_kuzeyafrika.js | Cezayir | 4.7 g | 123/129 | Cezayir (k2, 4.7 g, 135.6 km · uyum 123/129) |  |
| Tâhert (Tiaret) | yerlesimler_h2_kuzeyafrika.js | Cezayir | 6.9 g | 120/129 | Mustagānim (k3, 4.0 g, 127.8 km · uyum 128/129) |  |
| Cilfe (Djelfa) | yerlesimler_h2_kuzeyafrika.js | Cezayir | 7.2 g | 124/129 | Cezayir (k2, 7.2 g, 232.3 km · uyum 124/129) |  |
| Vargla (Ouargla) | yerlesimler_h2_kuzeyafrika.js | Cezayir | ölçülmedi | 117/129 | Kafsa (k3, 11.3 g, 424.0 km · uyum 49/129) |  |
| el-Vâdî (Sûf) | yerlesimler_h2_kuzeyafrika.js | Cezayir | 14.8 g | 117/129 | Kafsa (k3, 5.9 g, 212.7 km · uyum 49/129) |  |
| Hanşele (Khenchela) | yerlesimler_h2_kuzeyafrika.js | Cezayir | ölçülmedi | 75/129 | Konstantin (k3, 3.2 g, 113.9 km · uyum 126/129) | m: ile sahiplik uyumu %58 |
| Aynı Beydâ | yerlesimler_h2_kuzeyafrika.js | Cezayir | ölçülmedi | 126/129 | Konstantin (k3, 2.7 g, 94.4 km · uyum 79/129) |  |
| Ğâru'l-Melh (Porto Farina) | yerlesimler_h2_kuzeyafrika.js | Tunus | 1.1 g | 128/129 | Benzert (Bizerte) (k3, 0.9 g, 31.5 km · uyum 126/129) |  |
| Testûr | yerlesimler_h2_kuzeyafrika.js | Tunus | 2.0 g | 128/129 | Tunus (k2, 2.0 g, 71.3 km · uyum 128/129) |  |
| Ğar Dimâv | yerlesimler_h2_kuzeyafrika.js | Tunus | 4.8 g | 128/129 | Kef (k3, 1.1 g, 39.1 km · uyum 129/129) |  |
| Mekter (Maktar) | yerlesimler_h2_kuzeyafrika.js | Tunus | 4.0 g | 128/129 | Kef (k3, 1.7 g, 57.2 km · uyum 129/129) |  |
| Sübaytıla | yerlesimler_h2_kuzeyafrika.js | Tunus | 5.8 g | 128/129 | Kafsa (k3, 2.6 g, 95.3 km · uyum 129/129) |  |
| Sîdî Bû Zeyd | yerlesimler_h2_kuzeyafrika.js | Tunus | 5.9 g | 128/129 | Kafsa (k3, 2.3 g, 93.6 km · uyum 129/129) |  |
| Metlâvî | yerlesimler_h2_kuzeyafrika.js | Tunus | 9.4 g | 128/129 | Kafsa (k3, 0.9 g, 37.2 km · uyum 129/129) | m: merkezi >5 gün, Kafsa <2 gün |
| Kıbillî (Nefzâve) | yerlesimler_h2_kuzeyafrika.js | Tunus | 10.3 g | 128/129 | Kafsa (k3, 2.2 g, 82.1 km · uyum 129/129) |  |
| Dûz | yerlesimler_h2_kuzeyafrika.js | Tunus | 10.8 g | 128/129 | Kafsa (k3, 2.9 g, 109.0 km · uyum 129/129) |  |
| Terhûne | yerlesimler_h2_kuzeyafrika.js | Trablus | 1.7 g | 120/129 | Trablus (k2, 1.7 g, 66.0 km · uyum 120/129) |  |
| Kabâv (Nefûse) | yerlesimler_h2_kuzeyafrika.js | Trablus | 4.1 g | 120/129 | Garyân (k3, 2.8 g, 96.3 km · uyum 129/129) |  |
| Sinâvin | yerlesimler_h2_kuzeyafrika.js | Trablus | 8.7 g | 120/129 | Garyân (k3, 7.3 g, 262.3 km · uyum 129/129) |  |
| Derc (Derj) | yerlesimler_h2_kuzeyafrika.js | Trablus | 10.6 g | 120/129 | Garyân (k3, 8.9 g, 332.7 km · uyum 129/129) |  |
| Tâverğa | yerlesimler_h2_kuzeyafrika.js | Trablus | 5.6 g | 120/129 | Misrata (k3, 0.9 g, 41.7 km · uyum 129/129) | m: merkezi >5 gün, Misrata <2 gün |
| Vaddân (Cufre) | yerlesimler_h2_kuzeyafrika.js | Trablus | ölçülmedi | 69/129 | Misrata (k3, 10.0 g, 371.9 km · uyum 69/129) | m: ile sahiplik uyumu %53 |
| Zilla (Zella) | yerlesimler_h2_kuzeyafrika.js | Trablus | ölçülmedi | 69/129 | Murzuk (Fizan) (k2, 12.1 g, 462.7 km · uyum 129/129) | m: ile sahiplik uyumu %53 |
| Nûfiliye | yerlesimler_h2_kuzeyafrika.js | Trablus | ölçülmedi | 120/129 | Misrata (k3, 9.9 g, 326.6 km · uyum 129/129) |  |
| Merâde | yerlesimler_h2_kuzeyafrika.js | Bingazi | 9.0 g | 69/74 | Bingazi (k2, 9.0 g, 331.6 km · uyum 69/74) |  |
| Tulmeyse | yerlesimler_h2_kuzeyafrika.js | Bingazi | 3.0 g | 74/74 | Bingazi (k2, 3.0 g, 106.2 km · uyum 74/74) |  |
| Ayn el-Ğazâle (Bomba) | yerlesimler_h2_kuzeyafrika.js | Bingazi | 8.3 g | 74/74 | Derne (k3, 1.4 g, 54.3 km · uyum 129/129) | m: merkezi >5 gün, Derne <2 gün |
| Tırgan (Traghan) | yerlesimler_h2_kuzeyafrika.js | Murzuk (Fizan) | 1.4 g | 129/129 | Murzuk (Fizan) (k2, 1.4 g, 59.9 km · uyum 129/129) |  |
| Zevîle (Zawila) | yerlesimler_h2_kuzeyafrika.js | Murzuk (Fizan) | 3.1 g | 129/129 | Murzuk (Fizan) (k2, 3.1 g, 122.6 km · uyum 129/129) |  |
| el-Katrûn | yerlesimler_h2_kuzeyafrika.js | Murzuk (Fizan) | 3.3 g | 123/129 | Murzuk (Fizan) (k2, 3.3 g, 133.2 km · uyum 123/129) |  |
| Paksos (Paxos) | yerlesimler_ek_adalar.js | Yanya | ulasilmaz | 2/129 | — | m: ile sahiplik uyumu %2 |
| Elafonisos (Cervi) | yerlesimler_ek_adalar.js | Mora (Tripoliçe) | 4.3 g | 128/129 | Mora (Tripoliçe) (k2, 4.3 g, 125.0 km · uyum 128/129) |  |
| Fülek (Fiľakovo) | yerlesimler_ek_macaristan.js | Kassa (Košice) | 3.4 g | 129/129 | Eğri (k3, 1.5 g, 58.2 km · uyum 110/129) |  |
| Ungvár (Uzhhorod) | yerlesimler_ek_macaristan.js | Kassa (Košice) | 2.1 g | 129/129 | Kassa (Košice) (k2, 2.1 g, 77.4 km · uyum 129/129) |  |
| Munkács (Mukacheve) | yerlesimler_ek_macaristan.js | Kassa (Košice) | 3.1 g | 128/129 | Szatmár (Satu Mare) (k3, 1.9 g, 73.6 km · uyum 114/129) |  |
| el-Ulâ | yerlesimler_ok101.js | Medine | 8.7 g | 49/129 | Medine (k2, 8.7 g, 293.4 km · uyum 49/129) | m: ile sahiplik uyumu %38 |
| Medâin-i Sâlih (el-Hicr) | yerlesimler_ok101.js | Medine | 9.2 g | 49/129 | Medine (k2, 9.2 g, 307.4 km · uyum 49/129) | m: ile sahiplik uyumu %38 |
| el-Vech | yerlesimler_ok101.js | Medine | 11.4 g | 49/129 | Yenbu (k3, 8.0 g, 287.8 km · uyum 122/129) | m: ile sahiplik uyumu %38 |
| Hayber | yerlesimler_ok101.js | Medine | 4.0 g | 129/129 | Medine (k2, 4.0 g, 140.5 km · uyum 129/129) |  |
| Mat (Mati) | yerlesimler_ok104.js | İşkodra | 2.1 g | 91/129 | Akçahisar (Kruja) (k3, 0.8 g, 21.2 km · uyum 114/129) | m: ile sahiplik uyumu %71 |
| Şehâre | yerlesimler_ok104.js | Sana | 3.9 g | 112/129 | Sa'de (k3, 2.9 g, 84.4 km · uyum 129/129) | m: ile sahiplik uyumu %87 |
| Kevkebân | yerlesimler_ok104.js | Sana | 1.0 g | 10/129 | Sana (k2, 1.0 g, 34.7 km · uyum 10/129) | m: ile sahiplik uyumu %8 |
| Yenikale | yerlesimler_ok106.js | Kefe | 2.9 g | 42/44 | Kerç (k3, 0.1 g, 10.4 km · uyum 44/44) |  |
| İmâdiye (Amêdî) | yerlesimler_ok109.js | Musul | 3.0 g | 129/129 | Çölemerik (Hakkâri) (k3, 2.8 g, 58.2 km · uyum 95/115) |  |
| Şırnak | yerlesimler_ok109.js | Bitlis | ölçülmedi | 7/7 | Cizre (k3, 1.0 g, 31.1 km · uyum 7/7) | m: merkezi >5 gün, Cizre <2 gün |
| Darende | yerlesimler_ok110.js | Maraş | 4.9 g | 115/129 | Malatya (k3, 2.7 g, 75.9 km · uyum 17/17) | m: ile sahiplik uyumu %89 |
| Midyat | yerlesimler_ok107.js | Mardin | 1.5 g | 129/129 | Hasankeyf (k3, 0.8 g, 33.1 km · uyum 92/129) |  |
| Sîva (Siwa) | yerlesimler_p0043libya.js | Kahire | ölçülmedi | 129/129 | — |  |
| Ayaş | yerlesimler_anadolu_0914.js | Ankara | 1.4 g | 104/104 | Ankara (k2, 1.4 g, 44.8 km · uyum 104/104) |  |
| Kahul (Cahul) | yerlesimler_p0037.js | Yaş | 4.2 g | 113/129 | İbrail (k3, 2.0 g, 72.8 km · uyum 21/111) | m: ile sahiplik uyumu %88 |
| Bolgrad (Bolhrad) | yerlesimler_p0037.js | Yaş | ölçülmedi | 6/21 | Kili (k3, 1.5 g, 57.3 km · uyum 21/21) | m: merkezi >5 gün, Kili <2 gün; m: ile sahiplik uyumu %29 |
| Chełm (Kholm) | yerlesimler_p0037.js | Lublin | 1.6 g | 117/129 | Lublin (k3, 1.6 g, 64.1 km · uyum 117/129) |  |
| Zamość | yerlesimler_p0037.js | Lublin | 1.9 g | 69/69 | Lublin (k3, 1.9 g, 75.7 km · uyum 69/69) |  |
| Ston | yerlesimler_once1281_yt_avrupa.js | Dubrovnik | 1.5 g | 118/129 | Dubrovnik (k3, 1.5 g, 38.1 km · uyum 118/129) |  |
