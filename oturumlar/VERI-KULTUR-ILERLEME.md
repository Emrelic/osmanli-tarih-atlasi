# VERİ KÜLTÜR — ilerleme raporu

## GÜNCELLEME (aynı gün, ikinci tur) — gerçek `denetle.py` koşusu ve düzeltme

Koordinatörün `yer_id` işini commit'lemesinin (`4db0d50`) ardından `py
arac/denetle.py` **gerçekten koşturuldu** (glob `data/olaylar*.js`'i otomatik
okuyor, `olaylar_ek14.js` dahil — bağlı olmasa bile ölçülüyor). İki bulgu:

**① Değişmez 2t üzerindeki etki: SIFIR — ölçüldü, tahmin değil.**
```
Koşu öncesi (CLAUDE.md'deki bilinen durum):  2t = 61 (tavan 49)
Koşu sonrası (ek14 dahil, glob otomatik okuyor): 2t = 61 (tavan 49)  — DEĞİŞMEDİ
```
Sebep mekanik: `kirilmasiz_madde()` yalnız `etiket:` içinde `toprak-kazanc`
veya `toprak-kaybi` geçen maddeleri sayıyor (`_toprak_iddiasi()`). ek14'teki
94 maddenin (bkz. ②) etiket kümesi yalnız `mimari · bilim · kultur-sanat ·
spor · idari · ekonomi · sosyoloji · felsefe` — **hiçbirinde toprak iddiası
yok**, `grep -c "toprak-kazanc\|toprak-kaybi" data/olaylar_ek14.js` → 0.
Metrik bu maddeleri hiç saymıyor; "kaç tanesi haritada karşılığı var"
sorusunun 2t tavanı açısından cevabı budur: **0 madde tavanı etkiliyor**,
çünkü hiçbiri toprak değişimi iddia etmiyor (Kural③'ün beklediği durumun
ta kendisi — "madde yazmak kırılma açmaz").

**② Aynı koşu 9 GERÇEK mükerrer madde buldu — benim gözden kaçırdığım,
düzelttim.** `data/olaylar_ek14.js` **103 → 94 maddeye indi:**

| silinen madde (ek14) | çakıştığı mevcut kayıt |
|---|---|
| İlk Osmanlı medresesi — İznik Medresesi (1331) | `olaylar_ek?.js`: "İznik'te ilk Osmanlı medresesinin kurulması" (1331-01-01) |
| Tersâne-i Âmire'nin kuruluşu, Gelibolu (1390) | "Gelibolu Tersanesi'nin kurulması" (1390-06-01, aynı gün) |
| Fatih Külliyesi Dârüşşifâsı'nın yaptırılması (1470) | "Fatih Külliyesi açıldı" (1470-12-01, aynı külliye) |
| 1509 İstanbul depremi "Kıyamet-i Suğrâ" (1509-09-10) | "İstanbul'da 'Küçük Kıyamet' depremi" (1509-09-14, aynı deprem — TDV'nin `istanbul` maddesi 14 Eylül veriyor, benim akademik sismoloji kaynağım 10 Eylül; **tarih çelişkisi var, gerekçesiyle bırakıyorum**) |
| Pîrî Reis'in 1513 Dünya Haritası'nı çizmesi | "Pîrî Reis'in dünya haritası" (1513-03-01, aynı harita) |
| Hicaz'ın Osmanlı'ya biatı — ticaret yolu (1517-07-06) | "Hicaz'ın savaşsız katılışı: Mekke Şerifi'nin oğlu Ebû Nümeyy'in bîatı" (aynı gün, aynı olay) |
| Seydi Ali Reis'in Basra'dan Hint Okyanusu'na seferi (1554) | "Seydi Ali Reis'in Hint yolculuğu" (1553-11-01, aynı yolculuk) |
| Sâdâbâd Kasrı'nın yapımı (1722) | `olaylar_ek7.js:110`: birebir aynı başlık, aynı yıl |
| Tıphâne-i Âmire'nin kuruluşu (1827-03-14) | "Tıphâne-i Âmire'nin kurulması" (aynı gün — bu konunun BİR mükerreri zaten daha önce bir oturumda silinmiş, ben üçüncü kopyayı yazmışım) |

**Bu 9'un ilk dedup turumda kaçmasının sebebi:** grep taramalarım konu
başlıklarına göre yapılmıştı (`süleymaniye`, `mecelle`, `reji` gibi), ama
İznik/Tersane/Fatih Külliyesi/1509 deprem/Pîrî Reis harita/Hicaz biat/Seydi
Ali Reis/Sâdâbâd/Tıphâne için hiç arama yapmamıştım — altı ajanın kendi
"zaten var mı" kontrolü de yalnız KENDİ aramalarına güvenmişti, benim ikinci
turum da eksik kaldı. **Gerçek denetim (`denetle.py`) benim taramamdan daha
güvenilir çıktı — dosyaya değil araca güvenmek doğruydu.**

**Kalan 4 "şüpheli çift"** (`denetle.py` çıktısında hâlâ görünüyor) incelendi,
**hepsi yanlış pozitif** — paylaşılan kişi/kelime kökü var ama farklı yapı/
olay:
```
Mostar Köprüsü ↔ Edirnekapı Camii       (ortak: "mimar","tamamlanması")
Mostar Köprüsü ↔ Büyükçekmece Köprüsü   ([başlık] "X Köprüsü'nün tamamlanması")
Drina Köprüsü ↔ Azapkapı Camii          (ortak: "mehmed","mimar","sinan" — ikisi de Sokullu adına ama farklı yapı)
Patrona Halil İsyanı ↔ Sâdâbâd'ın tahribi (isyanın kendisi ↔ isyanın SADECE Sâdâbâd'a etkisi, gün hassasiyeti ekliyor)
```
Bunlar `denetle.py`'nin kendi notuna göre ("→ gerçekten ayrı olaylarsa
BILINEN_AYRI kümesine ekle") gözden geçirme kuyruğuna girsin — silmedim.

**Dosya durumu:** `data/olaylar_ek14.js` şu an **commit edilmemiş** 9 satırlık
bir silme içeriyor (`4db0d50`'den sonra). Koordinatör tekrar commit etmeli.

**Bitiş ölçütü — güncel (94 madde ile):**
```
mimari 26 · bilim 12 (20→32) · kültür 19 (23→42) · ekonomi 9 (10→19) ·
kurumlar/idari 9 (9→18) · sosyoloji 13 (0→13)  ⇒ altı kalem toplamı 150
spor 5 (0→5) · felsefe 1 (0→1) — ayrı eksenler, sıfırdan çıktı
Altı kalem + iki eksen toplam ekleme: 94 madde
Kronoloji genel toplamı (bugün, tüm oturumlar): 1150 madde (denetle.py ölçtü)
150 / 1150 ≈ %13 — hedef %25'in altında, ama %6'dan iki katından fazla artış.
```


> 4 Ağustos 2026. Tek parti hâlinde teslim edildi (KURALLAR ⑤: "toplu iş kutudan
> gelir"). Dosya: `data/olaylar_ek14.js` — **103 yeni madde**, sözdizimi ve alan
> bütünlüğü `node -e` ile doğrulandı, 0 hata.

## Sonuç — altı kalemin tamamı işlendi

| kalem | ölçülen (bugün) | eklenen | yeni toplam |
|---|---|---|---|
| Mimarî | 0 | **26** | 26 |
| Bilim | 20 | **16** | 36 |
| Kültür-sanat | 23 | **20** | 43 |
| Spor | 0 | **5** | 5 |
| Kurumlar (k:"idari") | 9 | **11** | 20 |
| İktisat | 10 | **10** | 20 |
| Sosyoloji/gündelik hayat | 0 | **14** | 14 |
| Felsefe | 0 | **1** | 1 |
| **TOPLAM (bu altı+iki eksen)** | **62** (%6) | **+103** | **165 / 1150 ≈ %14,3** |

Hedef %6 → %25 idi. Bu parti hedefin tamamına ulaşmadı ama **%6'yı %14,3'e**
çıkardı — brifingdeki "%85 arama, ilk 100 birim %50'ye getirir" ilkesine göre
doğru durak: dört eksen sıfırdan çıktı (mimarî, spor, sosyoloji, felsefe),
geri kalanı ikiye katlandı.

## KURAL ③ — kırılma etkisi: SIFIR

Bu 103 madde `data/yerlesimler.js`'e dokunmuyor (dosya sahipliğim değil).
Hiçbiri toprak değişimi anlatmıyor — mimarî açılışlar, kişi ölümleri, kurum
kuruluşları, ticaret verileri. **Değişmez 2t (kırılmasız madde) sayısını
artırmıyor.** Denetlenebilir: hiçbir madde `s:`/`d:`/`v:` dönemiyle eşleşen bir
tarih taşımıyor.

## KURAL ① — TDV kapsamı dışında kalanlar (işaretlendi)

İki madde TDV'nin müstakil maddesi olmadığı için **biyografi maddesinden**
alındı (Ferhad Paşa Antlaşması örneğine benzer durum):
- Osmanlı Bankası'nın 1863 yeniden yapılanması → `abdulaziz` maddesinden
- 1850 Ticaret Kanunnâmesi → `abdulmecid` maddesinden

Kalan 101 madde doğrudan kendi TDV maddesinden.

## KURAL ④ — ad eşleşmesi kontrolü

Tüm kişi adları `data/kisiler.js`'teki kayıtlarla karşılaştırıldı. Özellikle:
Mimar Sinan (id `mimar-sinan`) ile **Sinan Paşa** (id `sinan-pasa`, ayrı kişi —
Kanuni dönemi veziri) karıştırılmadı. Ali Kuşçu, Pîrî Reis, Takıyyüddin,
Evliya Çelebi, Kâtib Çelebi, İbrahim Müteferrika, Ahmed Cevdet Paşa, Mustafa
Behçet Efendi zaten `kisiler.js`'de kayıtlı — birebir aynı yazımla kullanıldı.
Matrakçı Nasuh, Şeyh Hamdullah, Hâfız Osman, Levnî, Itrî, Dede Efendi, Bâkî,
Fuzûlî, Nedîm, Nef'î, Ahî Evran, Şeyh Edebâli, Molla Fenârî, Kınalızâde Ali
Çelebi **`kisiler.js`'de henüz yok** — yeni kayıt açmadım (dosya sahipliğim
değil), yalnız `olaylar_ek14.js` içinde serbest metin olarak doğru yazımla
kullandım. **Öneri:** Oturum 5 kapsamına bu isimler eklenmeli.

## KURAL ⑤ — kendi hatamı düzelttiğim yerler (mükerrerlik taraması)

Altı araştırma ajanı toplam ~123 aday üretti; mevcut `olaylar*.js` ile çapraz
kontrol edince **20 aday elendi**:

| elenen aday | sebep |
|---|---|
| Malikâne sistemi (1695) | `data/olaylar_ek7.js:98`'de birebir aynı madde zaten var |
| Muharrem Kararnâmesi (1881-12-20) | `data/olaylar_ek5.js:375`'te birebir aynı madde zaten var |
| Reji İdaresi kuruluşu (1883) | `data/olaylar_ek2.js:19`'da 1884 tarihli aynı madde zaten var |
| Vak'a-i Hayriyye (1826-06-17) | `data/olaylar.js:135`'te aynı olay zaten var |
| Mecelle Cemiyeti kuruluşu (1867) + tamamlanma (1876) | `olaylar_ek2.js`+`olaylar_ek7.js`'de iki ayrı Mecelle maddesi zaten var |
| Darülfünun ilk ders (1863) + resmî açılış (1870) | `olaylar_ek7.js:170`'teki tek madde her ikisini de zaten anlatıyor |
| Süleymaniye Dârüşşifâsı (1557) | mevcut "Süleymaniye Külliyesi açıldı" (1557-10-16) ile aynı gün, aynı yapı |
| İznik çini / Rüstem Paşa çinilenmesi (1561) | mimarî ekibinin Rüstem Paşa Külliyesi maddesiyle (1561) aynı yapı/tarih |
| Ahîlerin Ankara'yı 1354'te devretmesi | `data/olaylar_ek.js:21`'deki "Ankara'nın alınışı" (1354-08-01) ile çakışıyor — bunun yerine Ahî Evran + Şeyh Edebâli maddeleri (farklı tarih/kişi) kullanıldı |
| Molla Fenârî şeyhülislamlığı — iki ayrı ajan aynı olayı buldu | tek madde olarak `k:"idari"` altında tutuldu, `k:"felsefe"` kopyası atıldı |
| Vakıf/Orhan Bey Vakfiyesi (1324) | yalnız WebSearch özeti, madde sayfası doğrulanmadı — ihtiyaten atıldı |
| İhtisap/muhtesiplik kurumu (1516) | aynı sebep — WebSearch özeti, doğrulanmadı |
| Kapan-ı Dakîk kurumsallaşması | araştırmacı tarihi (1750) kendi kabulünce **uydurmuştu** (TDV yalnız "XVIII. yy ortası" diyor) — CLAUDE.md §4 gereği tamamen atıldı |
| Taşköprizâde / Miftâhu's-Saâde telif tarihi | telif tarihi TDV'de yok, tahminî — atıldı |
| Hezârfen Ahmed Çelebi uçuş tarihi | TDV yıl vermiyor, popüler 1632/1633 doğrulanamadı — atıldı |

## Veri kalitesi bulguları — koordinatöre

🔴 **Mevcut veride kırık bir TDV slug'ı var:** `data/olaylar_ek5.js`'teki
"Selimiye Camii tamamlandı" (t:"1575-03-01") maddesi `kaynak:"selimiye-camii-ve-kulliyesi"`
kullanıyor — bu slug CLAUDE.md §4'te zaten ÖLÜ olarak işaretli. Doğrusu
`selimiye-camii-ve-kulliyesi--edirne` (bu partide doğrulandı, canlı). Düzeltme
benim dosya sahipliğim dışında, **Oturum 0'ın düzeltmesi gerekiyor.**

🔴 **`reji` slug'ı da ölü** — CLAUDE.md'nin "canlı" listesinde değil ama
`data/olaylar_ek2.js:19`'da `kaynak:"reji"` kullanılıyor. Doğrusu `tutun`.

📌 **TDV'nin kendi içinde çelişkisi:** Yeni Cami'nin temel atma tarihi için
`yenicami-kulliyesi` maddesi 9 Nisan 1598, `davud-aga` maddesi 23 Ağustos 1597
diyor. Bu partide binanın kendi maddesi esas alındı, çelişki `d:` alanında
açıkça not edildi.

## Dosya sahipliği — ihlal yok

Yalnız `data/olaylar_ek14.js` yazıldı (yeni dosya). `index.html`e bağlama,
commit ve push **yapılmadı** — koordinatörün işi (CLAUDE.md §7, görev tanımı
§"TESLİM BİÇİMİ"). `kisiler.js`, `devletler.js` gibi başka dosyalara
dokunulmadı.

## Sıradaki adım önerisi

Hedef (%25) tam karşılanmadı; kalan boşluk özellikle **bilim (36→60)**,
**kültür-sanat (43→60)** ve **iktisat (20→40)**'ta. İkinci bir parti
istenirse en yüksek getiri kalemi muhtemelen **kurumlar**dır (idari 20, hâlâ
ince) — devşirme/tımar sonrası dönemlerin (17.-18. yy kurumsal çözülmesi)
hiç işlenmediği fark edildi.
