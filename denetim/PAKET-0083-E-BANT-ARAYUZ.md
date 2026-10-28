# PAKET-0083-E-BANT-ARAYUZ — 5/7/10 günlük bant, arayüz yarısı (H-0013)

Teslim: GLM1 · 5 Ekim 2026 · koordinatör: YILDIRIM BAYEZIT
Ürün: **`denetim/ARAYUZ-BANT-TAM-1005.diff`** (js/app.js · 5 hunk · UYGULANMADI —
motor yamasıyla aynı koşuda inecek, şartname §E). `css/style.css` değişmedi —
bütün değişiklik katman/paint düzeyinde, CSS'e iş düşmedi.

---

## 1. ÖLÇÜM — sayılar

### 1.1 Tabanın GERÇEK opaklığı (şartname: "tahmin etme, app.js'ten oku")
**Sabit bir sayı YOK — taban DINAMİK**, `SIYASI_KIP` sözlüğü iki kipte dört değeri
değiştiriyor (`app.js:15665-15684`, `siyasiKipUygula` — "yumuşak" düğmesi
`katmanSeciciKur.uygula` içinden çağırıyor):

| Katman | sert kip | yumuşak kip |
|---|---|---|
| `devlet-dolgu` | 1 | **0.44** |
| `vassal-dolgu` | 1 | 0.60 |
| `himaye-dolgu` | 1 | 0.60 |
| `osmanli-dolgu` | 1 | 0.68 |
| `ufuk-bant-alan` | 1 (sözlükte DEĞİLDİ → hep 1) | — |

Koyuluğun iki katmanı: ① bant katmanı sözlükte olmadığı için yumuşak kipte
taban 0.44 çizerken bant 1.0 çiziyordu — aynı renk %56 daha koyu; ② bant
z sıra gereği tabanın ALTINDAYDI ve ikisi üst üste binince alfa TOPLANIYORDU
(yumuşakta örtüşen toprakta 0.44 taban + 1.0 bant → çift koyu). H-0013'teki
"ekstra koyu bölgeler" ölçüme göre tam bu ikisi.

### 1.2 `#8e0b22` geri düşüşü — kaç bant kaydında renk YOK?
`data/ufuk_bantlari_ust.js` (1 Ekim 03:23, 5,67 MB) `window.UFUK_BANT` satırı
JSON olarak ayrıştırıldı; `DOLGU_RENK` tabanı (`app.js:497-498`:
`{OSMANLI} ∪ DEVLET_HARITA kayıtları`) `data/devletler_harita.js`'ten okundu:

```
bant                    3  (ad "<=5" 40.0 saat · "5-7" 56.0 · "7-10" 80.0)
dnm kaydı           12.397  · benzersiz kimlik 585
OSMANLI kaydı        1.626  (617 + 561 + 448)  — meşru #8e0b22, kusur değil
DEVLET_HARITA kaydı    584  · renkli 584/584 (renksiz künye 0)
DOLGU_RENK tabanı      585  (= 584 + OSMANLI)
🔴 RENKSİZ bant kaydı   0/12.397  → %0,0  (geri düşüş HİÇ atmıyordu)
```

### 1.3 Bantta görevli (vassal) kimlik var mı? — İKİNCİ ÖLÇÜM, öngörü çürüdü
```
eflak 6 kayıt · bogdan 3 · kirim 5  → toplam 14/12.397 (%0,11)
erdel 0 · kirim-hanligi 0 · moldova 0 · cerkezler 0
```
Bunlar `DEVLET_HARITA`'da renklidir → bantta KENDİ renkleriyle çizilirler;
tabanda ise `vassal-dolgu` #8e0b22 + 0.60 çizer. Bant sözleşmesi "kim ulaştı"
olduğundan bunlar bantta yabancı sayılır (bkz. §4 karar).

### 1.4 Gizlenecek katmanlar — sayım
Bant tabanın yerine geçince gizlenecek siyasî ZEMİN katmanı **11**:
`devlet-dolgu · devlet-cizgi · imparatorluk-hale · vassal-serit-dis ·
vassal-dolgu · himaye-serit-dis · himaye-dolgu · osmanli-dolgu ·
osmanli-cizgi · himaye-serit-ic · hukuki-sinir-dolgu`.
Kalır (tanıklık/işaret): `hukuki-sinir-hat` (C çizgisi), işgal/isyan/halka
katmanları, Ⓑ `dolgu-b-*`, serbest kenarlar, etiketler.
`imparatorluk-hale` tip `line` — imparatorluğun 5 günlük dış hattı; bant
açıkken yanıltıcı olurdu, gizlendi (isim/etiket kaybı YOK).
`devlet-odak-vurgu` bilerek LİSTEDE DEĞİL: odaç vurgusu etkileşim işaretidir,
coğrafya değil (5 günlük hattı bandın üstünde kalır — küçük, bilinir).
Bu 11 katmanın görünürlüğünü bugün `katmanSeciciKur.uygula` (siyasî kovası,
`data-katman="siyasi"` — index.html:140) yönetiyor; başka `setLayoutProperty`
yok (grep ölçümü).

---

## 2. ÖNGÖRÜLER — ölçümden ÖNCE yazıldı, sonuçları

| # | Öngörü (sayı + mekanizma) | Sonuç |
|---|---|---|
| Ö1 | Taban ~0.60-0.75 sabit sayıdır (tek paint değeri) | 🔴 **ÇÜRÜNDÜ** — dinamik sert/yumuşak kipi var; yumuşakta 0.44-0.68 arası dört değer |
| Ö2 | Bant kayıtlarının %5-15'i renksizdir (eski koşulardan düşenler olur) | 🔴 **ÇÜRÜNDÜ** — %0,0 (0/12.397); üretim zaten DOLGU_RENK evreninden yazıyor |
| Ö3 | Koyu yaylar ayrı bir bant katmanının opaklığındandır; seçim muhtemelen `setFilter`'dır; çözüm bandı tabanın yerine koymak | 🟡 **KISMEN** — ayrı katman ✓, yön ✓; ama seçim `setFilter` değil döngü+imza (`ufukGuncelle`) |

Öğünülecek bir tutuş yok; ikisi de veriyle değil sezgiyle kurulmuştu.

---

## 3. DEĞİŞİKLİK — `ARAYUZ-BANT-TAM-1005.diff` (5 hunk, uygulanmadı)

| Hunk | Yer | Ne |
|---|---|---|
| 1 | `ufukGuncelle` önü | Yeni `UFUK_TABAN_KATMANLAR` (11) + `ufukTabanDegistir(gizle, zorla)`: bant açılınca tabanı gizler, kapanınca GERİ GETİRİR. Eşik koruması her-zaman-adımı çağrılarını bedava yapar; geri getirme kör "visible" yazmaz, **siyasî kutusuna sorar** (kutu kapalıysa kapalı kalır — "iki denetim, biri sessizce kazanır" tuzına karşı) |
| 1 | `ufukGuncelle` gövde | 🔴 SÖZLEŞME: `if (b.gun <= 5 || b.gun > ufukGun)` → **`if (b.gun !== ufukGun)`** — yalnız SEÇİLEN günün TAM haritası çizilir (7 seçince 7'nin tam bölgesi). Erken çıkış dalına savunmacı `ufukTabanDegistir(false)` |
| 2 | `ufukSeciciKur.uygula` | `ufukTabanDegistir(ac)` — segment düğmesi tek denetleyici kalır (radyo `data-katman` taşımaz) |
| 3 | katman tanımı üstü yorum | ESKİ gerekçe ("bant A'nın altında güvencedir, A opak kalmalı") yeni sözleşmeye göre YENİLENDİ; `beforeId` çıpası aynen durur (bant etiketlerin/tanıklıkların altında kalmaya devam eder) |
| 4 | `SIYASI_KIP` | `ufuk-bant-alan` sözlüğe girdi: **sert 1 · yumuşak `["match",["get","kim"],"OSMANLI",0.68,0.44]`** — bant tabanın değerlerini taşır ("aynı renk olmalı"); `setPaintProperty` ifadeyi sayı gibi kabul eder |
| 5 | `katmanSeciciKur.uygula` sonu | `ufukTabanDegistir(ufukAcik() && ufukGun > 5, true)` — bant açıkken Siyasî kutusu çevrilirse A geri GELMESİN; `styledata` geç yüklenen katmanları da iyileştirir |

## 4. KARARLAR (hüküm)

1. **Opaklık eşitleme = SIYASI_KIP üyeliği** (hunk 4). Tek başına `fill-opacity`
   sabitlemek yumuşak kipte yine yanlış olurdu; tabanın gerçek değeri kipe bağlı.
2. **`#8e0b22` geri düşüşü KALIR.** Gerekçe: ölçülen %0,0 — düşüş bugün hiç
   atmıyor; Emre'nin gördüğü kırmızı yaylar 1.626 meşru OSMANLI kaydı +
   §1.1'deki çift koyuluktu. Kaldırılırsa ileride renksiz bir kimlik SESSİZ
   delik açar; kalırsa görünür kırmızı BAYRAK olur (veri tarafı düzeltilir).
   Asıl çözüm veri tarafında (renk üretimi) — arayüz tek başına çözmeli de değil.
3. **Taban değiştirme, üstüne ekleme yok** (hunk 1-2): Emre'nin "7 seçince
   parametresi 7 olan yürüyüşün bölgeleri" tanımının birebir karşılığı.
4. **Vassal 14 kaydı** bilinen sınır olarak kalır: bantta kendi renkleri + 0.44.
   Daha ince eşleme istenirse bant kayıtlarına `cins` taşınmalı — motor/tasarım
   kararı, bu diff'in kapsamı dışı.

## 5. SINIRLAR / etkileşimler (uygulayan bilirse)
- **İki yama aynı koşuda inmezse**: yalnız ARAYÜZ + ESKİ (halkalı) bant verisi →
  taban gizli + halka çizilir → içte delik görünür (şartname zaten söylüyor;
  sıralama koordinatörün).
- Ⓑ DOLGU (`dolgu-b-*`) açıksa bant ÜSTÜNDE çizilmeye devam eder — ayrı veri,
  ayrı konu, bilinçli dokunulmadı.
- Etiketler (devlet adları) 5 günlük konumlarından kalır — okunabilirlik için
  bilinçli; 7/10 güne göre etiket taşımak ayrı bir görünüm işidir.
- Ölçüm 1 Ekim disk verisiyle yapıldı; motor yaması inince bant verisi
  değişecek — kimlik evreni (585) ve OSMANLI payı büyük ölçüde aynı kalması
  beklenir ama SAYILAR YENİDEN ÖLÇÜLMELİ (§1.5 "bayat tablo" kuralı).

## 6. SINAV — iki yön
```
node --check  (yamalı tam metin)   → GECTI
git apply --check                   → TEMIZ (js/app.js)
git apply --check --reverse        → RED (doğru: yama ileri yönlü)
diff kapsamı                       → yalnız js/app.js (tek dosya)
```

## 7. TESLİM (üçlü kural)
① **Ne ölçtüm**: taban opaklığı dinamik (sert 1 · yumuşak 0.44/0.60/0.60/0.68;
bant katmanı kipten yoksun → hep 1) · bant 3 kayıt/12.397 dnm/585 kimlik ·
renksiz 0 (%0,0) · OSMANLI 1.626 · vassal 14 kayıt · gizlenecek zemin katmanı 11 ·
diff 5 hunk, `node --check` + `git apply --check` temiz, `--reverse` reddi.
② **Ne bulamadım**: renksiz bant kaydı YOK (ölçüldü, bulunamadı = sonuç);
bu oturumda oturum adını değiştirme aracı YOK (set_session_title ölçülemedi —
koordinatörün istediği "PAKET-0083-E-BANT-ARAYUZ" adına çevirme benden yapılamıyor);
tarayıcıda GÖRSEL doğrulama yapılmadı (yerel sunucu 8765 listedi ama iki yama
aynı koşuda inmeden görsel beklenen tablo vermez — ölçülemedi denemez, YAPILMADI).
③ **Ne istiyorum**: diff'i MOTOR yamasıyla AYNI tam-inşa koşusunda uygula;
sonra (isteğe bağlı, ayrı iş) bant etiket/kenar görünümü kararı Emre'ye sorulur.
⚠️ Bekçi KURULMADI (şartname §0); js/app.js, css/style.css, data/*, arac/*'a
yazılmadı — yalnız `denetim/ARAYUZ-BANT-TAM-1005.diff` + bu rapor.
