# SEFER-OK-0070 — harekât okları (paket 0070 · H-0006)

Oturum: SEFER-OK-0070 (Opus) · 20 Eylül 2026 · koordinatör 1.MURAT
Şartname: `oturumlar/DALGA-0070.md` §3 · Emre'nin tam metni:
`ClaudEmre/kutu/giden/parti-emrelic-0070/PARTI.json` → H-0006
Ölçüm aletleri: `denetim/ARAC-SEFER-OK-0070.js` (veri evreni) ·
`denetim/ARAC-SEFER-OK-SINAV-0070.js` (tarayıcı sınavı) ·
ham çıktı `denetim/OLCUM-SEFER-OK-0070.json`

---

## 0. Emre'nin isteğinin altı şartı ve bugünkü hâli

| # | Şart (H-0006) | 20 Eylül sabahı | Teslimden sonra |
|---|---|---|---|
| ① | kaynak = **kalın yuvarlak nokta** | YOK | ✓ `sefer-kaynak` katmanı |
| ② | ince ok gövdesi güzergâha sadık | ✓ vardı (114 kayıt) | ✓ (değişmedi) |
| ③ | ok başı en ileri noktada | ✓ vardı (DOM marker + glif) | ✓ (animasyonda da döner) |
| ④ | renk = **işgal eden devletin koyu tonu** | taraf bazlı 2 sabit renk | ✓ `devlet:`ten türetilir |
| ⑤ | gövde tarama çizgisinin **≥3 katı** | 1.6–2.6 px — **İHLAL** | ✓ 7–9 px |
| ⑥ | ok **ilerler**, varışta bölge yanıp söner | animasyon YOK | ✓ ok fazı; yanıp sönme ELE-GECIRME-ANIM-0070'te |

---

## 1. ÖLÇÜM — veri evreni

`node denetim/ARAC-SEFER-OK-0070.js` · evren **index.html'in yüklediği 250 data
dosyası** (taklit değil: dosyalar sırayla çalıştırılıp `window` okunuyor).

| Ölçüm | Sayı |
|---|---|
| Ok kaydı (`SEFERLER*`) | **114** · 6 ad alanı |
| Yolu olmayan / iki noktadan kısa kayıt | **0** |
| Desene uymadığı için sessizce elenen ad alanı | **0** |
| Nokta sayısı: 2 nokta · 3–5 · 6+ | 31 · 49 · 34 |
| `devlet:` alanı yazılı | **25** / 114 |
| `renk:` alanı yazılı | 58 / 114 |
| Tür dağılımı | sefer 66 · kuşatma 16 · deniz 12 · çekilme 9 · isyan 5 · akın 3 · seyahat 2 · teslim 1 |
| Yıl aralığı | 1303 – 1922 |
| **Mükerrer ok** (aynı uçlar + aynı gün, iki dosyada) | **1** — "Abdülaziz'in Avrupa seyahati (1867)" hem `SEFERLER` hem `SEFERLER_P0037`'de |

### Kapsam — "bütün savaş/sefer/işgal/harekât maddelerine ok" ne kadar uzak?

Harekât maddesi tanımı (alette açık yazılı, tartışılabilsin diye):
`k:` ∈ {savas, fetih, kusatma, sefer, isyan, isgal, akin} **ya da**
`etiket:` ∈ {savas, toprak-kazanc, toprak-kayip, isyan, isgal}.

| Ölçüm | Sayı |
|---|---|
| Kronoloji maddesi (olaylar + kronoloji kuyruğu) | 7035 |
| **Harekât maddesi** | **2209** |
| Gününde ok VERİSİ olan (±15 gün, yalnız tarih ölçütü) | 332 (%15) |
| **Güzergâh yok kovası** | **1877 (%85)** |
| Kovanın yüzyıl dağılımı | 19.yy 345 · 16.yy 310 · 15.yy 281 · 18.yy 236 · 14.yy 235 · 17.yy 223 · 20.yy 193 · 13.yy 45 · öncesi 9 |

🔴 **332 bir ÜST SINIRDIR, başarı değil:** ölçüt yalnız TARİH çakışması. Aynı
gün başka bir cephedeki ok da "var" sayıldı; coğrafî doğrulama yapılmadı.
Gerçek eşleşme bundan düşüktür — bu satır "ok kapsaması %15'ten iyi olamaz"
demektir, "%15'i doğrudur" demez.

🔴 **Veride madde↔ok bağı YOK.** 114 kaydın hiçbiri kronoloji maddesine `id`
ile bağlı değil. Animasyon fazı bu yüzden iki ölçütle eşleştiriyor (tarih ±15
gün · okun ucu maddenin yerine ≤400 km). Kalıcı çözüm bir veri alanıdır
(`olay:` / `madde:`), ama o ayrı bir sevk: 114 kaydın her birine elle madde
kimliği yazmak bu oturumun kalemini aşar.

---

## 2. ÖLÇÜM — gösterim (tarayıcı)

### 2.1 Kalınlık kuralı nasıl sayıya çevrildi
Tarama desenleri app.js'in kendi üreticilerinden okundu (tahmin YOK):

| Desen | Karo | Şerit | Ekrandaki **dik** genişlik |
|---|---|---|---|
| işgal — işgalci şeridi | 8×8 | 5 px | 5/√2 = **3.54 px** |
| işgal — nominal sahip şeridi | 8×8 | 3 px | 3/√2 = **2.12 px** |
| devir | 8×8 | 4/4 px | 4/√2 = **2.83 px** |

Ölçüt olarak **ince şerit (2.12 px)** alındı — algıda "tarama çizgisi" odur.
3 katı = **6.36 px**. Yeni tablo en ince türde bile 7 px veriyor, seferde 9 px.
Katı okuyuş (işgalci şeridinin 3 katı = 10.6 px) istenirse tek iş
`HAREKET` tablosundaki sayıları 1.2 ile çarpmaktır; desen otomatik uyar
(`line-dasharray` birimi çizgi genişliğidir, `_dsn()` bunu telafi ediyor —
kesik ritmi eski ekran uzunluğunda kalır).

### 2.2 Ok, anlattığı olayın altında kalıyordu (ölçülmüş kusur)
Yığın sırası (20 Eylül sabahı): `sefer-cizgi-*` 29–38 · `devir-dolgu` 39 ·
`isgal-dolgu` 41 · `isyan-dolgu` 43. Yani 1798 Mısır'ında **Fransız işgali
taraması (opaklık 0.85) Napolyon'un okunu örtüyordu**. Kalınlık kuralı
okunurluk içindir; örtülen çizgi kalınlaşsa da görünmez.
Düzeltme: sefer katmanları ilk `symbol` katmanının ALTINA taşınıyor
(dolguların üstünde, şehir yazılarının altında). Sınavdan sonra:
`sefer-cizgi-sefer` 48 · `sefer-kaynak` 57 · `isgal-dolgu` 31 · ilk symbol 64.

### 2.3 Tarayıcı sınavı — nasıl koşturuldu
İlk sınav uygulamanın tarayıcı panosunda yapıldı; **pano gizlenince
`document.hidden=true` oldu, Chrome rAF'i durdurdu, MapLibre hiç render
etmedi** (`isStyleLoaded()` false, katman 0). "Ölçemedim"in sebebi ölçüldü:
kusur atlasta değil, gizli sekmede. Bu yüzden sınav headless Chrome'a taşındı
(`denetim/ARAC-SEFER-OK-SINAV-0070.js`, CDP üzerinden, bağımlılık yok).

| Sınav | Sonuç |
|---|---|
| `sefer-cizgi-sefer` genişliği | **9 px** (en ince tür 7 px ≥ 6.36) |
| Katman sırası (sefer > işgal, symbol altında) | ✓ 48/57 > 31, ilk symbol 64 |
| Durağan çizim (1798-07-20, Mısır) | 4 özellik = 2 çizgi + **2 kaynak noktası** |
| "ok" fazı — Napolyon'un Mısır'ı işgali | `dondu:true` · `bitti:true` · kısmi yol 5→15 nokta (**ilerliyor**) |
| Faz bitince temizlik | anim kaynağı boş ✓ · gizleme kalkmış ✓ |
| **Güzergâhsız madde** (Bursa'nın fethi 1326) | `dondu:false` — **ok UYDURULMADI** ✓ |
| Ortak sahne (`ANIM.sahnele` ile) | faz kayıtlı ✓ · ok fazı çizdi ✓ |

---

## 3. YAPILAN İŞ

| Dosya | Ne değişti |
|---|---|
| `js/app.js` (yalnız SEFER/HAREKET blokları) | `HAREKET` kalınlıkları 1.6–2.6 → 7–9 px + `_dsn()` desen telafisi · `sefer-kaynak` circle katmanı · `_seferRengiCoz()` tembel devlet rengi (koyu ton) · `_seferKatmanSirasi()` · `SEFER_ANIM_GIZLI` sözleşmesi |
| `js/sefer_ok.js` **(YENİ)** | "ok" animasyon fazı. Ad alanı: `window.SEFER_OK_FAZ` (+ `ANIM.kayitOl("ok", …)` ile sıralayıcıya kaydolur) |
| `denetim/ARAC-SEFER-OK-0070.js` **(YENİ)** | veri evreni ölçümü |
| `denetim/ARAC-SEFER-OK-SINAV-0070.js` **(YENİ)** | headless tarayıcı sınavı |
| `denetim/OLCUM-SEFER-OK-0070.json` **(YENİ)** | ham ölçüm + 1877 maddelik güzergâhsız kovası |

**index.html'e BAĞLANMADI** (paylaşılan dosya — koordinatör ekler):
`<script src="js/sefer_ok.js?v=rNNNN"></script>`
Sıra serbest: `anim_dili.js`ten önce de sonra da kaydolur (ikisi de sınandı).

### Ortak animasyon dili (ELE-GECIRME-ANIM-0070 ile uzlaşma, M-4701/M-4703)
`odak/flyTo → faz "ok" (BENDE) → faz "vurus" (KOYU ton ×2) → faz "cozul"`.
Sözleşme: `fn(olay, bitti)` · ok yoksa `false` döner, sahne "vurus"tan başlar ·
`bitti()` çağrılmazsa 2400 ms tavanla geçilir. Pasif kipte sahne atlanır.
Koyulaştırıcı **tek**: `app.js:koyuTon` (ikinci kopya yazılmadı).

---

## 4. BULAMADIKLARIM / AÇIK BORÇ

1. **1877 harekât maddesinde güzergâh verisi YOK** (%85). Bu bir kod işi değil
   kaynak işidir: her sefer için çıkış günü + adı geçen istasyonlar + koordinat
   gerekir. Ok uydurulmadı.
2. **Madde↔ok bağı veride yok** — eşleşme tarih+yakınlıkla kuruluyor
   (yukarıda §1). Yanlış eşleşme riski: aynı gün aynı bölgede iki harekât.
   Ölçülen örnek: "Napolyon'un Mısır'ı işgali" (1798-07-01) maddesi, ucu
   İskenderiye olan **deniz** okunu seçiyor — bu doğru, ama doğruluğu
   VERİDEN değil mesafeden geliyor.
3. **Mükerrer ok 1 adet** (Abdülaziz 1867, iki dosyada) — harita aynı oku iki
   kez çiziyor. Hangi dosyanın eleneceği veri sahibinin kararı; DOKUNMADIM.
   (0068 teslimi Akkâ yürüyüşü/çekilişi için aynı kusuru bildirmişti; bu
   ölçüm aynı uçlar+aynı gün ölçütüyle yalnız bu birini yakalıyor.)
4. `taraf:` alanı 56 kayıtta boş, 56'sında "dusman", 2'sinde "osmanli" —
   yani okların yarısı taraf bilgisi olmadan varsayılan koyu kahveye düşüyor.
   `devlet:` yazılmadıkça renk kuralı (④) onlarda çalışmaz.

---

## 5. ÖNERİ (karar Emre'nin / koordinatörün)

1. **Kalınlık okuyuşu:** ince şerit (bugünkü, 7–9 px) mi, işgalci şeridi
   (10.6 px taban) mi? Tek satırlık değişiklik.
2. **Güzergâh borcunun sırası:** kova yüzyıl yüzyıl ölçüldü. En verimli giriş
   `k:"sefer"` (13 madde) ve `k:"kusatma"` (10 madde) — küçük, tanımlı,
   kaynağı belli kümeler. Sonra 19. yy (345) değil **16. yy (310)** önerilir:
   seferler adlandırılmış ve TDV kapsaması yüksek.
3. **Madde↔ok bağı için veri alanı** (`olay:` ya da karşılıklı `sefer_id:`) —
   yeni sefer partileri bu alanla yazılırsa eşleşme mesafeden değil veriden
   gelir. Şema kararı `VERI-YAPISI.md` sahibinindir.
4. **Mükerrer okun temizliği** ayrı sevk (veri dosyası sahibi kim ise).
