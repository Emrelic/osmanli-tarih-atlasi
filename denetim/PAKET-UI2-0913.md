# PAKET-UI2 · arayüz teslim raporu

> PAKET-UI2 · 13 Eylül 2026 · 1.MURAT sevki · kaynaklar: `parti-emrelic-0035` (H-0030, H-0097) · `parti-emrelic-0048` (H-0002, H-0003, H-0005, H-0013) · Emre'nin 13 Eylül kararları (1-3)
> Yazılan dosyalar: `js/app.js` · `js/suzgec.js` · `css/style.css` · aletler `denetim/ARAC-UI2-*-0913.*` · bu rapor. `index.html`e dokunmak GEREKMEDİ.
> **Commit YOK.** `data/*`, `arac/*` ve üretilmiş dosyalara dokunulmadı (koşu 10). `CEVAP.json` okunmadı, yazılmadı.
> `node --check js/app.js` ve `js/suzgec.js` her düzenlemeden sonra koşuldu: temiz.
> 🟡 **GÖRSEL DOĞRULAMA YAPILMADI, ekran görüntüsü yok.** `atlas` sunucusu (8777) açıldı ama Browser pane gizliydi: harita (`haritaHazir`) 60 sn içinde hazır olmadı, ekran görüntüsü zaman aşımına uğradı (D118). Bunun yerine **tarayıcıda gerçek sayfa kodu + gerçek veriyle JS/DOM sınaması** yapıldı. Aşağıda "tarayıcı" diye geçen sonuçlar bunlar.
> ⚠️ Sürüm damgası basılmadı (koşu zinciri basacak). `suzgec.js` değişti: tarayıcı eski `suzgec.js`i önbellekten verirse antlaşma kutusu *"js/suzgec.js eski sürüm (önbellek)"* yazar, halka kırpması devre dışı kalır (eski davranış). Sessiz değil.

## Özet

| madde | durum |
|---|---|
| Karar 1 · `0035/H-0030` ek okuma akordeonu | 🟢 KOD + tarayıcıda sınandı |
| Karar 2 · `0035/H-0097` taralı desen yalnız işgal | 🟢 KOD, devir taraması kapalı. `isg:`/`isgal-*` dokunulmadı |
| Karar 3 · antlaşma öncesi/sonrası, farklar yanıp söner | 🟢 TASARIM + KOD + ölçüm (117 madde) + tarayıcıda sınandı (Karlofça) |
| `0048/H-0003` · `H-0005` iç notlar gizli | 🟢 KOD: ek okuma kartları korundu, maddeler zaten korunuyordu (ölçüldü) + veri devri |
| `0048/H-0013` halka şehir el değiştirince kalıyor | 🟢 KOD (iki kural) + ölçüm + tarayıcı. 1 çelişki veri kalemi |
| `0048/H-0002` (arayüz kısmı) üç voyvodalık odağı | 🟢 KOD (`odak_kimlik`) + 🔵 VERİ ALANI kronoloji işçisine (tam metin aşağıda) |
| Yükleyiciye 3 ad | 🟢 KOD + `denetle_yayin.py` ayrıştırıcısıyla sınandı |

---

## 1 · Karar 1 / `0035/H-0030` · Ek okuma akordeonu

**Ne yapıldı**
- `js/app.js:8064`: `ekOkumaButonlariGuncelle` artık buton değil **kart başına satır** topluyor. Tür döngüsü ve "kart YOKSA satır da yok" kuralı aynen duruyor. Ulaşılamayan eski buton gövdesi silindi.
- `js/app.js:8115` `ekAkordeonKur`: `#ob-detay`in önüne bir kez "📄 Açıklama" satırı ekler. Bu satır ek okuma yoksa gizli durur. Her kart için bir başlık düğmesi (tür etiketi + soru/başlık) ve boş bir gövde kurar.
- `js/app.js:8163` `_ekAkordeonAc(i)`:
  - Tıklanan satır açılır, ötekiler kapanır.
  - Ek okuma açıkken ana açıklama **iki satıra küçülür** (`.ek-ak-kucuk`). Küçülmüş açıklamaya ya da "Açıklama" satırına tıklayınca açıklama geri açılır.
  - Kart gövdesi **ilk açılışta** çizilir (tembel). Zincir bağlantıları eskisi gibi pencerede açılır.
- Başlıkta `kisa` alanı YOK, `soru` var. 0032/H-0008 kuralı `_ekSatirBasligi`nda korunuyor.
- `css/style.css:1608-1638`: akordeon stilleri, `aria-expanded` okları.

**Ölçüm (tarayıcı, gerçek veri):** sınanan madde 1389-06-15 I. Kosova (3 kart: Merak · Tartışma · Savaşın Hikâyesi).
```
satır 3 · ana başlık görünür ✓
2. satır tık → 2. açık, 1. kapalı ✓ · açıklama küçüldü ✓ · gövde 3047 karakter
1. satır tık → 1. açık, 2. kapandı ✓
"Açıklama" tık → açıklama tam, satırlar kapalı ✓
```

**Emre'nin bakacağı yer:** 1389-06-15 I. Kosova Savaşı maddesi ve 1740-05-30 Kapitülasyonlar maddesi (H-0030 ekranı). Satırlara sırayla tıklayınca açıklama küçülmeli, tek satır açık kalmalı.
🟡 Açık soru: mobilde gövdenin azami yüksekliği `46vh`. Gözle ayarlanacak.

## 2 · Karar 2 / `0035/H-0097` · Taralı desen yalnız işgalde

**Kök:** antlaşma devirleri `devir-dolgu` katmanında çapraz taralı çiziliyordu (`data/devirler.js`, üretici `uret_devirler.py`, e53c86a). Ölçüt *"Osmanlı gövdesi @ savaş başı ∩ alıcı gövdesi @ antlaşma"* idi. Bu ölçüt savaş boyunca el değiştiren her yeri topluyor. H-0099'daki Bükreş'te Azak ve Çehrin vakası bundan.

**Ne yapıldı**
- `js/app.js:3313` `DEVIR_TARAMA_ACIK = false`. `devirGuncelle` bir kez kaynağı boşaltıp devir lejantını gizliyor, sonra kare başına tek karşılaştırmayla dönüyor.
- Kod ve veri silinmedi, geri açmak tek bayrak. `data/devirler.js` ve üreticisine DOKUNULMADI (koşu 10).
- İşgal taraması (`isgalGuncelle`, `isgal-dolgu`, `isg:` örtüsü) **aynen duruyor.**

**Ölçüm (tarayıcı):** Karlofça maddesinde `#devir-lejant` `display:none` ✓.

**Emre'nin bakacağı yer:** 1699-01-26 Karlofça, 1812-05-28 Bükreş ve 1810-09-26 Rusçuk maddeleri. Hiçbir antlaşmada taralı alan olmamalı. İbrail gibi işgal taraması olan yerler kalmalı.
⚠️ Rusçuk'un "işgal mi, taralı mı" sorusu (H-0097'nin ilk yarısı) bir VERİ kararı (`isg:` kaydı), arayüz değil.

## 3 · Karar 3 · Antlaşma öncesi/sonrası görünümü

### Tasarım (önce yazıldı, sonra ölçüldü)
```
① HANGİ MADDE     k:"antlasma" ∪ (ANTLASMALAR eşleşmesi ∧ başlıkta "antlaşma")
② PENCERE          [madde günü , bir sonraki maddeden bir gün önce]   tavan 365 gün
                   (Değişmez 2 mantığı: sonraki maddenin günündeki kırılma ONUNDUR)
③ FARK             penceredeki İLK sınır gününde (gün−1 → gün), TARAFLARDAN birine dokunan
                   yerleşim el değiştirmeleri. Sahiplik haritanın kuralıyla: d > v > s.
                   Taraflar = osmanli + ANTLASMALAR.taraf + metinde adı geçen künyeler
④ ÇİZİM            değişen yerleşimin motor peteği → dolgu "öncesi sahibi" ↔ "sonrası sahibi"
                   rengi arasında 3 kez yanıp söner, altın kesik kenar kalır
⑤ BÜTÇE            hesap MADDE AÇILIŞINDA bir kez; kare başına 0 iş (yalnız 7 setPaintProperty)
```
- Yeni geometri ya da elle koordinat YOK. Fark `YERLESIMLER` d/v/s dönemlerinden, çizim `data/petek_govde.js`ten (motorun kendi petekleri).
- 🔴 **Taraf süzgeci ölçümle doğdu.** Süzgeçsiz ilk koşuda (`ARAC-UI2-OLCUM`/`FARK` ilk sürüm) antlaşmalarda alakasız yerler yanıp sönüyordu:
  - 1533 İstanbul Antlaşması → İnka→İspanya
  - 1352 Ceneviz kapitülasyonu → Kilikya→Ramazanoğlu
  - 1606 Zitvatorok → 1607'deki Safevî geri alışı
- 🔴 **İlk ad eşleştiricisi de ölçümle düzeltildi.** "5+ harfte önek yeter" kuralıyla `kazan` künyesi "kazandı"da, `dene` "denemesi"nde tutuyordu. Artık tam kelime eşleşiyor. Kesme işaretli ek ve -li/-ler yapım eki kabul.
- 🔴 **Madde seçimi:** ANTLASMALAR eşleşmesi TEK BAŞINA alınmadı. "Prut Zaferi", "Kozluca Bozgunu" ve "Hisarcık Zaferi" (k:savas) aynı 60 günlük pencereye düşüyordu.

### Kod
- `js/suzgec.js:340-470` (DOM'suz, node'da da koşar): `sahipAnahtari` · `gunKaydir` · `sinirIndeksi` · `sgNorm` · `kunyeCekirdek` · `antlasmaTaraflari:410` · `sahipIlgiliMi` · `antlasmaFarki:437` · `sahipKimlikte:454` · `aktifVAdi`. Dışa aktarım listesi genişledi.
- `js/app.js:7493-7680`:
  - Kararlar: `ANT_FARK` · `antlasmaMaddesiMi:7499` · `antlasmaFarkiHesapla:7519`.
  - Çizim ve animasyon: `antlasmaFarkiTemizle` · `_antlasmaHal` · `antlasmaFarkiKirp` · `_antlasmaYukle`.
  - Geometri: `_petekGovdeYukle:7582`. Bu, `data/petek_govde.js`i ilk antlaşma açılışında bir kez tembel yükler; bekleyen kuyruğu var, hata sessiz değil.
  - Kutu: `antlasmaFarkiGoster:7604`.
- `js/app.js:7439`: `obGoster`, "Antlaşma hükmü" kutusundan sonra antlaşma kutusunu çağırıyor. Düğmeler: ◀ Öncesi (gün) · Sonrası (gün) ▶ · ↻ Yakıp söndür · ⌖ Farka odaklan.
- `js/app.js:1780`: `antlasma-fark` kaynağı + `-dolgu`/`-cizgi` katmanları, işgal katmanlarının üstünde.
- `js/app.js:11277`: katman seçici "Siyasî" kovasına `antlasma-fark` eklendi. Önce konsolda "SINIFLANMAMIŞ 8 katman" yazıyordu.
- `js/app.js:6713`: tarih pencereden çıkınca fark temizlenir (kırpma sırasında dokunulmaz). `js/app.js:7024`: panel kapatılınca temizlenir.
- `css/style.css:1640-1648`: kutu düğmeleri.

### Ölçüm — `node denetim/ARAC-UI2-FARK-0913.js --liste` (app.js'in çağırdığı AYNI `suzgec.js` fonksiyonları)
```
antlaşma evreni 117 (k:antlasma 113 + 4)
aynı gün değişim 54 · pencerede ilk kırılma 3 · DEĞİŞİM YOK 60
değişen yerleşim 422 · peteği bulunamayan 5
madde başına medyan 7 ms · azami 16 ms · sınır indeksi (bir kez) 33-41 ms
```

| örnek | sonuç |
|---|---|
| Karlofça 1699-01-26 | aynı gün 13 yer: Osmanlı→Avusturya 6 · →Lehistan 5 · →Venedik 2 |
| Kasr-ı Şirin 1639 | 5 yer: Safevî→Osmanlı 3 · Osmanlı→Safevî 2 |
| Berlin 1878 | 45 yer |
| Lozan 1923 | 23 yer: →İtalya 13 · →Yunanistan 10 |
| Nystad 1721 | İsveç→Rusya 7 |
| Zitvatorok 1606 · İstanbul 1533 · Vasvar 1664 | **değişim yok** |

**Tarayıcı (Karlofça):** kutu metni *"Aynı gün · 13 yerleşim bölgesi el değiştirdi: Osmanlı → Habsburg Avusturya 6 · Osmanlı → Lehistan-Litvanya Birliği 5 · Osmanlı → Venedik Cumhuriyeti 2 · 5 bölgenin peteği yok, çizilmedi"*. `petek_govde.js` yüklendi (3808 gövde = 3808 PETEKLER, boş 1) · çizilen fark 8 poligon.

### Açık kalemler (yazılmadı, bilgi için)
- 🟡 **"Değişim yok" 60 madde.** Kutu bunu dürüstçe yazıyor: *"antlaşma var olan durumu tanımış olabilir ya da toprak değişimi bu güne işlenmemiş olabilir"*. Hangisi olduğunu arayüz UYDURMAZ. İstenirse ikinci kip mümkün: ANTLASMALAR'a kaynaklı bir `savas_basi_t` günü yazılır, "savaş başı → antlaşma" net farkı aynı fonksiyonla çizilir. Bu veri işi. Eski taralı ölçütün hatası (Azak/Çehrin) tam buydu, o yüzden taraf süzgeciyle birlikte düşünülmeli.
- 🟡 **Karlofça'da 5 peteksiz yerleşim** (Kostayniçe · Bosna Dubiçası · Bosna Novi'si · Jasenovaç · Bosna Brod'u). `YERLESIMLER` 3818 − `PETEKLER` 3808 = 10 yerleşim son koşudan sonra eklenmiş. Koşu 10 yayınlanınca kendiliğinden çizilir, kod değişmez.
- ⚠️ `petek_govde.js` **ZAMANSIZ** taban geometridir (kendi başlığında yazıyor). Vurgu için yeterli, sınır iddiası değil. Dosya 6,5 MB; başlığındaki "1,4 MB" bayat. Yalnız ilk antlaşma açılışında iner.
- ⚠️ Yanıp sönme 1600 ms gecikmeyle başlıyor ki uçuş ve mevcut bütün-harita kırpmasıyla çakışmasın. Bu değer **ölçülmedi, gözle ayarlanacak.** ↻ düğmesi tekrar oynatır.
- ⚠️ Kapsam: yalnız Osmanlı kronolojisi paneli (`obGoster`). Devlet kronolojisi sekmesindeki (`KRONOLOJI_*`) maddelerde yok.

**Emre'nin bakacağı yer:**
1. 1699-01-26 Karlofça maddesini aç. ~1,6 sn sonra el değiştiren bölgeler kırmızı ↔ Avusturya/Lehistan/Venedik renginde 3 kez yanıp sönmeli, altın kesik kenar kalmalı. "◀ Öncesi" ve "Sonrası ▶" düğmeleri hâli sabitlemeli. "⌖ Farka odaklan" haritayı o bölgelere çerçevelemeli.
2. 1639-05-17 Kasr-ı Şirin (iki yönlü değişim).
3. 1606-11-11 Zitvatorok ("değişim yok" metni).

## 4 · `0048/H-0003` · `H-0005` · Son kullanıcıya iç notlar gösterilmez

**Ölçüm**
```
data/*.js ic_not alan adları (rapor anında):  ic_not_d 574 · ic_not_gun 102 · ic_not 24 · ic_not_b 3
   (işin başında: 418 · 52 · 1 · 3 — veri işçileri taşıyor)
js/*.js bu adları okuyan satır: 0
```
- **Maddeler** (`obGoster`, `js/app.js` `obGoster`) yalnız adıyla seçilen alanları basıyor (gun · b · yer · k · d · kisiler · kaynak). `ic_not_*` oraya giremez, genel alan dökümü yok (grep: `Object.keys(o)`/`for in` 0). Kod değişikliği gerekmedi.
- **Ek okuma kartları:** `ekKartHtml`in son çare dalı "yazı taşıyan alanları döker". Oraya ileride bir `ic_not` sızmasın diye:
  - `js/app.js:8088` `_icNotAyikla`, `/^ic_not(_|$)/` adlı alanları iç içe nesnelerde de atar.
  - `js/app.js:8200` her kart çizilmeden önce ayıklanıyor.
- **Tarayıcı sınaması (gerçek kartlar):** statu/hanedan/kadin/celali dosyaları dahil 178 kart. 21 kart `ic_not` taşıyor (hepsi üst seviye). **HTML'e sızan: 0.** Sentetik sınav (`ic_not` + `sanatci.ic_not_hayat`): sızan 0, görünür metin var ✓.
- Halka bloğu (`_khBlokHtml`) de alanları adıyla basıyor (`k.not` kullanıcıya yönelik). `ic_not` basılmıyor.

**Veri devri (ben yazmadım):**
- H-0005 ekranındaki madde `Ekim 1595 · Eflak'tan çekiliş ve Yergöğü baskını`. `d` metninin son cümlesi site-yapım notu: *"Haritada bu dönemin üç voyvodalığı hâlâ tâbi renkte görünüyor — ayaklanma yıllarının toprak karşılığı henüz veriye işlenmedi."* Bu cümle `ic_not_d`ye taşınmalı.
- H-0003 kartındaki *"Peirce'in kitabının tam metni okunmadı … D107 gereği 'okumadım' diye ayrıca damgalanır"* cümlesi `ic_not`a taşınmalı.

**Emre'nin bakacağı yer:** veri işçileri taşıdıktan sonra Ekim 1595 maddesi ve "Kadınlar Saltanatı" terim kartı.

## 5 · `0048/H-0013` · Halka şehir el değiştirince kalıyor

**Ölçüm (1603-10-21, H-0013 ekranının günü)**
- O gün aktif 14 halka vardı. Sorunlu olan `fp-nahcivan-1603`. Bu kayıt **tek tarihli ve yıl hassasiyetli** ("1603'te Osmanlı"). Pencere kuralı onu 1 Ocak–31 Aralık boyunca çiziyordu. Harita ise Nahçıvan'ı 1603-10-21'de Safevî'ye veriyor.
- `fp-hoy-1603` / `fp-meraga-1603` (Safevî) tersi: yılbaşından beri Safevî halkası vardı, oysa harita onları o gün Osmanlı gösteriyordu.

**Tasarım kararı (iki kural) — `js/app.js:5840-5905`**
- **① Nokta tanıklığı haritayla kırpılır** (`_khKirpikPencere:5858`).
  - Yalnız `tarih` kayıtları, ay/yıl/onyıl/yüzyıl hassasiyetinde.
  - Birim penceresi içinde harita o yerleşimi kaydın devletine verdiği dilimlerin **ilk başından son sonuna** daralır.
  - Harita pencere boyunca o devleti HİÇ göstermiyorsa **kırpılmaz**. Bu bir çelişkidir ve §4 "bayrak" kuralı gereği görünür kalmalı.
  - Aralık (`f`/`t`) tanıklıkları kırpılmaz, iki uçları kaynaktan geliyor.
  - Kırpma bir tarih iddiası değil, yalnız çizim penceresi. Kaynak bloğundaki tarih yine kaynağınki.
- **② Sonraki tanıklık kazanır** (`_khAktifler:5887`). Aynı yer için başka devleti gösteren ve daha geç başlamış bir tanıklık o gün başlamışsa eskisi çizilmez. Emre'nin *"Safevî yeşiline dönmeli — kaynaklarda geçiyorsa"* isteğinin kodu bu. Veri uydurulmuyor.
- Önbellek: kırpılmış pencere kayıt başına bir kez hesaplanıyor, havuz büyüyünce yenileniyor.

**Ölçüm — `node denetim/ARAC-UI2-FARK-0913.js` §④ + tarayıcı**
```
halka havuzu 189 · nokta tanıklığı 172 · haritayla KIRPILAN 41 · haritayla HİÇ örtüşmeyen 26 (çelişki, tam pencere)
fp-nahcivan-1603  1603-01-01→1604-01-01  ⇒  1603-01-01→1603-10-21   (tarayıcı: 10-20 aktif, 10-21 YOK ✓)
fp-hoy-1603       1603-01-01→1604-01-01  ⇒  1603-10-21→1604-01-01   ✓
kural ② çeyrek-kesit örneklemi 1281-1923: çelişen 0 (bugünkü veride vaka yok; veri büyüyünce devreye girer)
```

**Koordinatöre / veri kalemleri (yazılmadı):**
- 🔴 **`fp-maku-tdv` (Mâku, aralık, Osmanlı) 1603-10-21'de dolgu Safevî.** Kırpılmaz, çünkü aralık kaynaklı. Ekranda kırmızı halka Safevî dolgu üstünde kalacak. Ya atlas (Mâku'nun dönemi) ya tanıklığın `t`si kaynağa göre düzeltilmeli.
- 🟡 **`fp-hemedan-1590` kırpması şüpheli:** harita Hemedan'ı 1590-03-21'den **sonra** Osmanlı göstermiyor (kırpma 1590-01-01→03-21 verdi). O gün Ferhad Paşa Antlaşması'nın günü. Atlas kontrolü önerilir (`nihavend`/`luristan` aynı gün Osmanlı'ya geçiyor, Hemedan ters yönde).
- Kırpılan 41 kaydın listesi: `node denetim/ARAC-UI2-FARK-0913.js` §④.

**Emre'nin bakacağı yer:** ⑧ halkalar açık, 1603-10-20 ve 1603-10-21 arasında gidip gel. Nahçıvan'ın kırmızı halkası 21'inde kalkmalı, Hoy/Merâga Safevî halkası 21'inde gelmeli. Mâku'nun kırmızısı kalacak (yukarıdaki veri kalemi).

## 6 · `0048/H-0002` (arayüz kısmı) · Üç voyvodalık odağı

**Kök (ölçüldü):**
- Madde `data/olaylar_ek10.js` 1594-10-05 *"Üç voyvodalığın birden ayaklanması…"*: `kapsam_genis:true`, `yer_id`/`yer_kon` yok. Konumsuz dal imparatorluk sınırına (`donemler[di].b`) çerçeveliyordu (ekranda "imparatorluk görünümüne geçildi").
- İkinci kusur da bulundu: `odak_kutu_kaynak` yalnız **konumlu** dalda okunuyordu, konumsuz maddede hiç okunmuyordu.

**Ne yapıldı**
- `js/app.js:8860` `maddeOdakKutusu(o)`: tek çözücü, iki dal da okuyor (`:9055` konumlu, `:8932` konumsuz).
  - `odak_kutu_kaynak`: eski davranış aynen.
  - YENİ `odak_kimlik`: madde gününde sahibi (d/v/s; tâbi `kid` ya da kid'siz `v:` adının künye çekirdeği) bu kimliklerden biri olan atlas yerleşimlerinin kutusu, +0,35° pay. En az 2 yerleşim şart. Kurulamazsa konsola yazar.
- Konumsuz dalda kutu varsa `kapsam_genis` olmasa da uçar. Metin *"Bu olayın tek bir nokta yeri yok — ilgili bölgeye odaklanıldı."* olur.

**Ölçüm (node + tarayıcı, aynı sonuç)**
```
bugünkü madde (alan yok)          → null (imparatorluk görünümü sürüyor)
odak_kimlik:["eflak","bogdan","erdel"] → 24 yerleşim · kutu [21.39, 43.98, 29.17, 48.86]
   tabi:eflak 11 · tabi:bogdan 10 · kid'siz "Erdel Prensliği" 3
```

**🔵 KRONOLOJİ İŞÇİSİNE — tam veri alanı (ben yazmadım):**
```
dosya : data/olaylar_ek10.js
madde : { t:"1594-10-05", k:"siyaset", b:"Üç voyvodalığın birden ayaklanması — Erdel, Eflak ve Boğdan Kutsal İttifak'a giriyor", … }
EKLE  : odak_kimlik:["eflak","bogdan","erdel"]
KORU  : kapsam_genis:true  (nokta yok beyanı doğru; odak kutusu ondan bağımsız)
```
Alan her maddede kullanılabilir. Değerler `devletler.js` **id**'si olmalı (tahmin edilen id değil, §3.5.-1). `osmanli` tâbiler dahil Osmanlı gövdesi demek.

**Emre'nin bakacağı yer:** veri inince 1594-10-05 maddesi. Kamera Erdel + Eflak + Boğdan'ı çerçevelemeli.
📌 Emre'nin aynı maddedeki "isyan süresince bu topraklar ayrı renkte mi gösterilmeli" sorusu bir VERİ/karar sorusu, arayüz işi değil. Tartışılmadı.

## 7 · Yükleyici · 3 yeni ek okuma dosyası

- `js/app.js:7824-7826`: `_EKOKUMA_DOSYA_ADLARI`e `"ekokuma_hanedan"` · `"ekokuma_statu"` · `"ekokuma_celali"` eklendi.
- **Eksik dosya toleransı:** `onerror` → `_bulunmayan++`, konsola *"N/M dosya yüklendi (K henüz yok, normal)"* basılır, satır çıkmaz. Kod okundu, değişmedi.
- **Ayrıştırıcı sınaması** — `py denetim/ARAC-UI2-YUKLEYICI-0913.py`. Bu alet `denetle_yayin.py`nin iki regex'ini dosyanın kendisinde doğrulayıp app.js'e uyguluyor:
```
yol kurucusu app.js'te: True · _EKOKUMA_DOSYA_ADLARI 17 ad
ekokuma_hanedan / ekokuma_statu / ekokuma_celali → ayrıştırıcı okuyor: EVET (üçü)
```
- İşin başında `ekokuma_statu` diskte yoktu. Rapor anında üçü de diskte (veri işçileri yazdı) ve tarayıcıda yüklenip kartları sınandı (§4).

---

## Aletler (salt okuma, tekrar koşulabilir)
```
node denetim/ARAC-UI2-FARK-0913.js [--liste]   antlaşma farkı (117) · H-0002 odak · halka kırpması/çelişki
node denetim/ARAC-UI2-OLCUM-0913.js            ilk ölçüm: k değerleri, süzgeçsiz fark (tasarımı çürüten sayı)
py   denetim/ARAC-UI2-YUKLEYICI-0913.py        _EKOKUMA_DOSYA_ADLARI ↔ denetle_yayin.py ayrıştırıcısı
node denetim/ARAC-UI2-YAMA-APP-0913.js         (UYGULANDI, tekrar koşma — eşleşme bulamayıp çıkar)
node denetim/ARAC-UI2-YAMA-APP2-0913.js        (UYGULANDI, tekrar koşma)
```
⚠️ `ARAC-UI2-OLCUM` `YERLESIMLER`i birleştirmiyor (795 kayıt). Yalnız ilk k/etiket ölçümü için geçerli. Yerleşim ve fark sayıları için `ARAC-UI2-FARK` kullanılmalı (3818, index.html birleştirmesi yapılıyor).
