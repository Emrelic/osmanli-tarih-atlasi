# ALBÜM — D-KATMAN, DALGA-0059 madde 1 (arayüz) · 17 Eylül 2026

Görev: `oturumlar/DALGA-0059.md` D-KATMAN satırı · 1.MURAT'ın ek talimatı: *"kronoloji maddesinde
'Albüm' ek okuma satırı. GORSEL_MADDE'de o maddeye olay ile bağlı birden çok görsel varsa albüm
olarak göster (padişah resim albümünün deseni, app.js ~5070). Veri D4-AFRIKA'dan (Levnî) gelecek."*

## 1. Tasarım

Yeni dosya: [js/album.js](../js/album.js). Padişah deseni AYNEN kullanıldı — `app.js:5069
portreAlbumuAc(p)`nin doldurduğu `#portre-albumu-pencere`/`#portre-albumu-baslik`/
`#portre-albumu-icerik` penceresi **yeniden kullanıldı** (yeni bir modal icat edilmedi, D023);
kapatma/arkaplan-tıklama davranışı app.js'te zaten GENEL (padişaha özel değil), dokunulmadan
çalışıyor.

**Görsel toplama mantığı `maddeGorseliniGuncelle` (app.js:8344, inline küçük kartları basan
fonksiyon) İLE BİREBİR AYNI** — `_ekBagEslesir` (olay bağı eşleştirme) ve
`_gorselLisansGosterilebilirMi` (PD ailesi/CC0 lisans süzgeci) app.js'in KENDİ global
fonksiyonları, tekrar yazılmadı. `tur`dan bağımsız: "madde"/"portre"/"albüm" hepsi
`gorseller || [kayit]` ile aynı yoldan geçiyor — tıpkı padişah deseninin yaptığı gibi. "Birden
çok" şartı literal: **≥2 lisanslı/geçerli görsel** varsa düğme çıkar.

**Neden inline kartların YERİNE değil, YANINA:** `maddeGorseliniGuncelle` zaten TÜM eşleşen
görselleri `#ob-madde-gorsel`e küçük kart olarak basıyor (var olan davranış, dokunulmadı).
Albüm, padişah portresinin yanındaki "tıkla, büyük galeri aç" düğmesiyle AYNI ek katman —
D4-AFRIKA'nın üreteceği 8-15'lik Levnî seçkisi gibi kalabalık setlerde kullanıcıya inline
kalabalık yerine tek bir büyük galeri sunuyor.

**Akordeon (`#ob-ekokuma-butonlar`, `ekAkordeonKur`) BİLEREK kullanılmadı.** İncelendi
(app.js:8688-8906): `_ekAkordeonAc(i)` satırları **DOM POZİSYONUNA** göre indeksliyor
(`kutu.querySelectorAll(".ek-ak-satir")`), dışarıdan satır eklemek bu iç duruma (hangi satır
"açık", `gov.hidden` toggling) risk taşırdı — sınamadan güvenli olduğunu iddia etmek yanlış
olurdu. Bunun yerine antlaşma haritası düğmesiyle AYNI, daha önce kanıtlanmış konteynere
(`#ob-ozel`) basit bir düğme eklendi.

**Tembel yükleme bekleniyor** — `GORSEL_MADDE`, `ekOkumaMerakYukle`nin (app.js:8499) async
çektiği dosyalardan biri; `maddeGorseliniGuncelle`/`ekOkumaButonlariGuncelle`nin AYNI bekleme
deseni tekrarlandı: veri henüz gelmemişse `ekOkumaMerakYukle`ye kaydolunur, gelince (hâlâ AYNI
maddedeysek — `aktifOlay === o`) yeniden denenir.

## 2. Doğrulama — tarayıcıda, GERÇEK veriyle (Hünernâme albümü)

D4-AFRIKA'nın Levnî verisi henüz gelmedi (YAMA dosyası 1.MURAT'ı bekliyor); `data/gorsel_madde.js`
içinde ZATEN gerçek bir `tur:"albüm"` kaydı vardı (`1578-01-02-hunername-albumu`, 4 minyatür,
hepsi PD-old) — mock veri UYDURMAK yerine bu gerçek kayıtla sınandı:

```
madde: "III. Murad'ın Hünernâme'nin yazılması için ferman vermesi"
düğme: "🖼️ Albüm — 4 görsel"                                          ✓ doğru sayı
tıklanınca: pencere açıldı, 4 kart, doğru başlık/eser/sanatçı/yıl/     ✓
            kaynak linki/lisans metni
kapat düğmesi: pencereyi doğru kapattı (app.js'in KENDİ handler'ı)     ✓
inline kartlar (#ob-madde-gorsel): ETKİLENMEDİ, hâlâ 4 kart var        ✓ (çakışma yok)
NEGATİF test: tek/sıfır görselli bir madde (Ahî Evran) açıldı,
              düğme ÇIKMADI                                            ✓
hata YOK
```

## 3. Bekleyen

- 🔴 UI'ya tahtadan: `index.html`ye `js/app.js`ten SONRA `<script src="js/album.js">` satırı
  (D-KATMAN'ın öteki üç modülüyle — d_katman.js, antlasma_harita.js — AYNI ricanın devamı,
  hâlâ hiçbiri bağlı değil).
- 🟢 D4-AFRIKA'nın Levnî verisi (`denetim/YAMA-0059-GORSEL.json`) `data/gorsel_madde.js`'e
  inince KOD DEĞİŞMEDEN çalışır — `tur:"albüm"`, ≥2 `gorseller[]`, `olay:["1720-..|Levnî"]`
  deseniyle zaten uyumlu (aynı şema, gerçek Hünernâme kaydıyla sınandı).
