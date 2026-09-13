# PAKET-KRON2 · KRONOLOJİ — TESLİM · 13 Eylül 2026

```
OTURUM   PAKET-KRON2 (1.MURAT sevki + üç ek: PAKET-EK2 §4 · PAKET-EK1 §4a · UI2 odak_kimlik)
DOSYALAR data/olaylar*.js · data/kronoloji*.js · data/merak.js — başka hiçbir dosyaya yazılmadı
KAYNAK   TDV gövdeleri ARAC-A6A-TDV-0913.py ile çekilip OKUNDU (47 slug: 42 canlı · 5 ölü — rumeli-hisari · kirim-savasi ·
         sinop-baskini · osman-pasa-topal · hayreddin-mimar)
COMMIT   YOK · CEVAP.json dokunulmadı
```

## 0 · DENETİM ÖNCE → SONRA (`py arac/denetle.py --ayrinti`)

| ölçüt | önce | sonra |
|---|---|---|
| Değişmez 1 | 3818 · 324 sahipsiz | **aynı** |
| Değişmez 2 | 528 kırılma · 0 açık | **528 · 0** |
| Değişmez 2s | 1331 · 101 AÇIK · 357 KAPSAM DIŞI | **1331 · 101 · 357** |
| Değişmez 2i | 62 · 3 açık | **62 · 3** |
| Değişmez 2t | 15 (tavan 42) | **15** |
| mükerrer şüpheli çift | 0 (zayıf 52) | **0 (zayıf 52)** |
| savaş senkronu | 165/173 | **165/173** |
| SONUÇ | temiz | **temiz** |

Madde düzeyi (`denetim/ARAC-KRON2-ANLIK-0913.js kiyas`): 6210 madde · **değişen 185** (çekirdek 75 · kuyruk 110) ·
**`t` değişen 0** · dosya başına madde sayısı farkı 0. Ek okuma/merak bağları (`ARAC-A2-BAG-0913.js --hepsi`): **551/551 · HATA 0**.

---

## 1 · Okur alanlarındaki üretim notları → `ic_not_*` (0048/H-0005 · H-0012 + genel kural)

**Ölçüm** (`ARAC-KRON2-META-TARA-0913.js`, 84 dosya · 6210 madde; desen şartnameden + ikinci turda `yer_id` · "tercihtir" · "esas alındı" · "Ölçmedim" genişletmesi):
```
                          aday alan   aday madde   SERT meta kalıbı taşıyan alan (yer_id · TARİH HAKKINDA · gün vermez · YYYY ·
                                                    veriye işlen · Oturum N · Ölçmedim · esas alındı · devletler.js · künye · petek …)
ÖNCE (ilk desen)             347         325
ÖNCE (genişletilmiş)         385         363        117 alan / 110 madde
SONRA                        237         224          0
ic_not_* taşıyan madde     d 417 → 574 · gun 51 → 94 · b 3 → 5
```
Kalan 237 adayın hepsi okundu ve **kural gereği kaldı** (K3/K4/K5 aşağıda).

**Uygulanan kurallar** (`denetim/ARAC-KRON2-TABLO-0913.py` başlığında, her kayıt birini taşır — `denetim/KRON2-DUZENLE-0913.json`):
```
K1  TARİH KODLAMA NOTU → ic_not     98 kayıt  "TDV yıl verir, gün vermez" · "ay/gün kaynaklarda geçmiyor" · "YYYY-01-01" ·
                                               "§4 gereği" · "madde X'e bağlandı, bir tercihtir" · "atlas ufku yüzünden bu güne kondu"
     + tarih bir YER TUTUCU ise okura DÖNEM adı `gun` alanına yazıldı (25 madde: "Uzun Hasan devri", "XV. yüzyıl sonları",
       "921 (1515) yılı sonları" …). Kaynakta yıl VARSA gun eklenmedi (app.js YYYY-01-01'i zaten yalnız yıl yazıyor).
K2  VERİ/HARİTA ÜRETİM NOTU → ic_not 79 kayıt  yer_id · uçuş hedefi · "atlasta yerleşim olarak kayıtlı değil" · petek ·
                                               "veriye işlenmedi" · "gösterilmelidir / bağlanmalıdır" · "Atlas bu kaydı önce … taşıyordu" ·
                                               Oturum 14 / Denetim / devletler.js / künye atfı · "Ölçmedim … bu oturumda" ·
                                               "TDV bu coğrafyayı kapsamamaktadır; X esas alındı"
K2b yalnız "yer_id:" öneki düştü      13 kayıt  konum açıklaması okur için değerli ("Haldigâtî geçidi Udeypûr'un kuzeyindedir")
K3  KALDI                                        okura haritada ne gördüğünü anlatan cümle ("haritada Mısır tâbi tona geçer"),
                                               "atlasın açılışında/kapanışında" çerçevesi, tarihyazımı belirsizliği
                                               ("kaynaklar 1488 ile 1508 arasında değişir", "rivayet doğrulanamadı")
K4  KALDI (kapsam dışı, sayıldı)                 başlık/metindeki 🔴⚠️📌 süsleri — meta not taşımıyorsa (27 alan)
K5  YANLIŞ POZİTİF                               denetlemek · koşul · kırılma · Atlas Okyanusu/Dağları · anatomi atlası · meclis oturumu
```
**Emre'nin iki örneği:** Ekim 1595 Yergöğü maddesinin "Haritada bu dönemin üç voyvodalığı hâlâ tâbi renkte…" cümlesi `ic_not_d`de ·
Deli Hasan (H-0012) "TDV yalnız yıl veriyor, ay/gün belirtmiyor." `ic_not_d`de — **ve bu not YANLIŞ çıktı** (PAKET-EK2: TDV `mehmed-iii`
"Şevval 1011 / Mart 1603"); iç nota düzeltme eklendi, okura `gun:"Şevval 1011 (Mart 1603)"`.
Cümleler dilbilgisi korunarak kesildi (ör. Cerbe: "; haritada toprak değişimi ikincisine bağlanmalıdır, çünkü ada" → "; ada").

## 2 · PAKET-A2 §4b — 14 kaynak çelişkisi (hepsi gövdeyle doğrulandı)

| # | madde | yapılan | t |
|---|---|---|---|
| 1 | 1480-08-11 Otranto çıkarması (ek) | "~800 kılıçtan geçirildi" olgu cümlesi → direnen ileri gelenlerin bir kısmı idam, bir kısmı esir; 800 kilise geleneği, TDV abartı/propaganda diyor · kaynak `otranto-seferi · gedik-ahmed-pasa` · kuyruk `kronoloji_italya` "kısa süreli katliam" da düzeldi | korundu |
| 2 | 1481-09-10 Otranto'nun geri alınması (kuyruk) | kaynak "gün doğrulanmadı" → **DOĞRULANDI** (`bayezid-ii` 10 Eylül 1481) | — |
| 3 | 1478 Topkapı (ek7) | "1459'da başlayan" TDV'de yok → kitâbe 883 (1478), başlangıç muhtemelen 1465 | korundu |
| 4 | 1452-08-31 Rumeli Hisarı (ek) | ölü `rumeli-hisari` → `rumelihisari` · "dört ay" → "dört beş ay" · gun "Receb 856 (Temmuz-Ağustos 1452)" | öneri 1 |
| 5 | 1505 Beyazıt Camii (ek14) | mimar tartışması (Hayreddin · Kemâleddin · Yâkub Şah) · gun "906 – 14 Cemâziyelevvel 911 (1500 – 13 Ekim 1505)" · kisiler · kaynak | öneri 2 |
| 6 | 1541-08-29 Budin (olaylar + habsburg kaynak) | gun "Ağustos-Eylül 1541 (26 Ağustos varış, 2 Eylül giriş)"; 29 Ağustos TDV'de yok ama çürütülmedi | öneri 3 (ölçülemedi) |
| 7 | 1596-10 Haçova (olaylar) | iç not: §8 ihlali + TDV 25/26 ↔ cigalazade 23-25 Ekim | öneri 4 → 1596-10-26 |
| 8 | 1877-07-19 Plevne (ek5) | kaynak `gazi-osman-pasa · plevne-muharebeleri`; TDV 7/8/18 Temmuz ↔ madde 19/20/30: **üçünde de tam 12 gün** = Rumî/Jülyen farkı olası | korundu |
| 9 | 1853-11-30 Sinop (ek7) | "yedi cami" → "yedi mescid"; TDV `sinop` baskını "1854 başları" diyor — not | korundu |
| 10 | 1876-06-04 Abdülaziz (ek7) | yer Çırağan → **Fer‘iye**; d: doktor raporu müphem, gazeteler intihar, 1881 tahkikatı cinayet kanaati | korundu |
| 11 | 1590-03-21 Ferhad Paşa (ek2 + gurcistan + iran) | gun "998 (1590)" ×3 · Haydar Mirza 18 Ocak 1590 · ölü `ferhad-pasa-antlasmasi` kaynakları düzeldi | öneri 5 (ölçülemedi; 1590-01-01 D147=1 sahte kapanış) |
| 12 | 1700-07-14 İstanbul Antl. (ek5) | kaynak `karlofca · rusya · mustafa-ii`; 14 ↔ 13 Temmuz iç ayrışma notu | korundu |
| 13 | Mondros (savaslar.js) | **başka sahip** — İtalya TDV gövdesinde 0 eşleşme | öneri 8 |
| 14 | 1770-07-06 Çeşme (olaylar) | "Baltık'tan … Cebelitarık üzerinden" → TDV diliyle "İngilizlerin desteğiyle Akdeniz'e açılan" | — |

**`t` hiçbir maddede değişmedi:** her çelişkili günün bir ek okuma/merak/savaslar.js bağı var (D181) ya da harita kırılması; öneriler
`denetim/YAMA-KRON2-0913.json` (16 kalem, her birinde D147 ③ ölçümü ve "birlikte değişmeli" bağ listesi).

## 3 · PAKET-A2 §4a — merak.js bağ kusurları: **8/8 + 2 şüpheli**

`1490-01-01|Kaheti` · `1606-01-01|Tiflis` · `1381-01-01|Germiyan` ×2 · `1473-01-01|Silifke` · `1477-01-01|Kanunnâme` · `1352-01-01|kapitülasyon` ·
`1402-08-01|Şehzade` + şüpheliler `1381-06-01|Hamîd` · `1444-08-01|Semendire` (kart metni o maddeleri anlatıyor).
Sonra: 551/551 · bu 10 uyarının 9'u kalktı; `1490-01-01|Kaheti` 2 maddeye düşüyor ve **ikisi aynı olay** (ek20 + kronoloji_gurcistan).

## 4 · 0048/H-0002 odak alanı — **eklendi**
1.MURAT UI2'nin isteğini iletti: `olaylar_ek10.js` 1594-10-05 "Üç voyvodalığın birden ayaklanması" → `odak_kimlik:["eflak","bogdan","erdel"]`
(üç id `devletler.js`te var; `kapsam_genis:true` korundu). Tahtada UI2'den KRON2'ye doğrudan mesaj yok (ölçüldü).

## 5 · 1.MURAT eki — PAKET-EK2 §4: **9/9** (hepsi gövdeyle doğrulandı)
```
Alaçayır 1608-08-05     gun "26 Rebîülâhir 1017 (9 Ağustos 1608)" (kalenderoglu-mehmed) · "kuyulara doldurma" → RİVAYET  · öneri 9
Oruç ovası 1607-10-23   gun "23-24 Ekim 1607 (asıl savaş 24)" (kuyucu · canbolatogullari · ahmed-i)                   · öneri 10
Kanije savunması 1601   "iki bin kişilik garnizon" → 9000 kişilik kuvvet · "hileleriyle" çıktı · gun 9-10 Eylül – 17-18 Kasım
Kanije fethi 1600       gun "11-13 Rebîülâhir 1009 (20-22 Ekim 1600)" (kanije ↔ tiryaki/mehmed-iii) · habsburg kaynağı  · öneri 14
Deli Hasan 1603         gun "Şevval 1011 (Mart 1603)" — önceki iç not düzeltildi; t kaba düzeyde kaldı (§4)
Karayazıcı 1599         "hutbe okuttu" → "Halim Şah" unvanı + tuğralı fermanlar, Urfa Kasım 1599                    · öneri 12 (t→1599-01-01, D147=0)
Kozluca 1774-06-20      gun "25 Haziran 1774" (kucuk-kaynarca-antlasmasi)                                         · öneri 11
Vasvár (kuyruk) 1664-08-10  gun "16 Muharrem 1075 (9 Ağustos 1664)" + kaynak (10 Ağustos çeviri hatası)            · öneri 13
```
## 6 · 1.MURAT eki — PAKET-EK1 §4a: **4/4**
```
1578-08-04 Vâdisseyl    başlık "…Fas'ın Osmanlı himayesine girmesi" → "…Osmanlı desteğindeki Abdülmelik Portekiz ordusunu imha etti";
                        son cümle TDV fas diliyle (elçi/hediye teatisi, hediye krizi) · kaynak fas · murad-iii
1373-05-01 Bizans       başlık "…vasallığına girişi" → "Vasal Bizans: V. Yoannis I. Murad'ın ordusunda (1371 Çirmen zaferinin sonucu)";
                        d: vasallık 1371 sonrası, 1373 = Andronikos–Savcı isyanı (sefer yeri bizans ↔ murad-i ayrışıyor, yazılmadı)
1553 Şehzade Mustafa    gun "27 Şevval 960 (6 Ekim 1553)" · kaynak mustafa-celebi                                 · öneri 15
1513 Şehzade Ahmed      gun "8 Safer 919 (15 Nisan 1513)…" + d TDV'ye göre · 🔴 aynı olay ek5 1513-04-01'de ikinci madde · öneri 16
```
Başlık değişikliklerinin bağları ölçüldü: `ekokuma_statu` iki günü de **ayırıcısız** bağlıyor → kopmadı (551/551).

---

## 7 · Aletler (`denetim/`)
```
ARAC-KRON2-META-TARA-0913.js    okur alanı meta adayı tarayıcı (çekirdek+kuyruk, ayrı window)
ARAC-KRON2-META-GOSTER-0913.js  adayın eşleşen cümleleri · ARAC-KRON2-META-TAM-0913.js tam metin
ARAC-KRON2-TABLO-0913.py        kural etiketli düzenleme tablosu → KRON2-DUZENLE-0913.json (245 kayıt)
ARAC-KRON2-UYGULA-0913.py       uygulayıcı: b-öneki ile NESNE bulur, eski metni YALNIZ o nesnede arar; `d:` ve `"d":` ikisini de tanır
                                (arac/ic_not_uygula.py'nin PAKET-A3 B8 kör noktası burada yok); kuru koşu varsayılan
ARAC-KRON2-TAMIR-0913.py        yinelenen ic_not_* anahtarlarını birleştirir
ARAC-KRON2-ANLIK-0913.js        önce/sonra madde anlık görüntüsü + kelime kaybı sınavı
ARAC-KRON2-GOVDE-ARA-0913.py    çekilmiş TDV gövdesinde satır kırığından bağımsız bağlamlı arama
KRON2-DUZENLE-EK-0913.json (10) · KRON2-DUZENLE-EK1-0913.json (10) · YAMA-KRON2-0913.json (16 öneri)
```
🔴 **Kendi aletimin kusuru — yakalandı, onarıldı, kayıp yok.** İlk uygulayıcı bir kayıtta aynı `ic_not_*` hedefine iki not
(eski değer + gerekçe) gidince ikisini ayrı değişiklik yaptı: alan varsa aynı aralık iki kez değişti → **ek7 sözdizimi bozuldu**
(`node --check` yakaladı); alan yoksa anahtar iki kez eklendi → **12 madde** (JS'de ilk not SESSİZCE ezilirdi). Kuru koşu bunu
göremezdi (yalnız "tamam" sayıyor). Onarım: uygulayıcı notları hedef başına birleştiriyor · ek7 elle · 12 grup TAMIR ile birleşti
(beklenen 12 = iki notlu `ata` kayıt sayısı, birebir) · sonra tarama 0. Kelime kaybı sınavı: kalan 4 "kayıp?" yalnız bağlaç
(ama · çünkü · ancak · alarak). 📌 `ic_not_uygula.py` de aynı maddeye iki alan taşırken bu sınavdan geçmeli.

## 8 · Ölçülemeyen / sınırlar (D107)
- **Tarayıcıda canlı SINANMADI** — yeni `gun` metinlerinin ve odak kutusunun ekranda nasıl göründüğü gözle bakılmadı.
- **Akademik kaynak OKUNMADI:** Budin 29 Ağustos · Ferhad Paşa imza günü · Sinop 30 Kasım 1853 · Plevne takvim açıklaması · Kozluca
  Jülyen/Gregoryen · Çeşme Baltık çıkışı (Anderson). Hepsi iç notta "ölçülmedi" diye yazılı.
- **K3'te kalan 47 "haritada…" cümlesinin haritayla gerçekten uyuştuğu ÖLÇÜLMEDİ** (ör. "haritada otuz yedi yerleşim el değiştirir").
- `data/merak.js` kart metinlerindeki "⚠️ … BULUNAMADI" cümleleri (canakkale · galata) madde değil kart — kalem 1 kapsamına alınmadı.
- `kara-ahmed-pasa` gövdesi okunmadı (öneri 15'teki 5↔6 Ekim takvim notu o maddenin kendi atfına dayanıyor).
- D147 ③ yalnız önerilen günler için ölçüldü; `t` değişmediği için veride sahte kapanış doğmadı (2s listeleri aynı sayılar).
