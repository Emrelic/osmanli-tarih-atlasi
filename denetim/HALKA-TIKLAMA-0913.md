# HALKA TIKLAMA — HALKA-TIKLAMA · 13 Eylül 2026

```
GÖREV    1.MURAT sevki: ⑧ açıkken şehre tıklayınca kaynak tanıklığı ULAŞMIYOR
YAZILAN  js/app.js · css/style.css · bu rapor
DOKUNULMAYAN  data/ · arac/ · motor · index.html
COMMIT   YOK
```

## ① KÖK SEBEP — ölçüldü, sevkteki teşhisten FARKLI
Sevkte şöyle deniyordu: "Şehir işaretçisi DOM elemanı, tıklamayı alıyor ve Yerleşim Kronolojileri'ni açıyor."
Ölçüm şunu gösterdi:
```
işaretçinin kendi click dinleyicisi   YOK (grep)
tıklamayı alan                        harita.on("click") genel ters sorgu (T-0126)
o dinleyici                           dizinDoldur("yerlesimler"); if (_yerlesimAc) _yerlesimAc(b.y)
_yerlesimAc                           yalnız detay() İÇİNDE atanıyordu → ilk tıklamada null
ölçüm (1595-06-15, Tebriz tıklandı)   typeof _yerlesimAc → null · dizinde "Bütün yerleşimler (3818)" LİSTESİ
```
Yani sorunun iki katmanı vardı. İlki: haritadaki şehir tıklaması o şehri hiç açmıyor, yalnızca listeyi açıyordu. Bu önceden var olan bir hataydı ve halka işinden bağımsızdı. İkincisi: kaynak bloğu hiçbir yerde gösterilmiyordu.

## ② DEĞİŞİKLİKLER (satır numaraları düzenlemeden sonraki hâl)
| iş | yer |
|---|---|
| `_yerlesimAc = detay;` sekme doldurulunca atanıyor | app.js **6278** (`dizinDoldur` › `yerlesimler` dalı, `ciz("")`dan önce) |
| Şehir görünümünün en üstüne kaynak bloğu | app.js **6190-6196** (`detay(y)` içinde, başlığın hemen altında) |
| `_khYerTaniklari(yer)`: ⑧ kapalıysa ya da dosya yüklenmediyse boş liste döner | app.js **5801** |
| `_khBlokHtml(liste, baslikAd)`: popup ve şehir görünümü aynı HTML'i kullanır; ÇELİŞKİ başlığı buradan gelir | app.js **5812** |
| `_khPopupAc`: kanvas popup'ı; `_khSonPopup` değişkenini tutar | app.js **5839** |
| `kaynakliHalkaSehirBlogu(yerAdi)`: `.kh-blok` elemanı; aynı yer için açık popup varsa kapatır | app.js **5856** |
| `_khGunYazi` | app.js **5870** |
| Çift gösterim engeli. Genel tıklama `ev.originalEvent._khYerlesim` bayrağını koyar; halka katmanı aynı yer için popup açmaz. Sıra ters olursa şehir bloğu popup'ı kapatır | app.js **4055** · **2061-2067** |
| `_KH_GOCMUS_C_KAYITLARI = ["ferhad-pasa-istanbul-1590"]` · `_khCNoktaSuzgeci()`. ⑧ açıkken `hukuki-sinir-nokta` katmanına süzgeç konur, kapalıyken süzgeç kaldırılır. Veri silinmedi | app.js **5888-5894** · `kaynakliHalkaAc` **5895** |
| Lejant satırı `#lejant-halka`. Görünürlüğü `el.hidden` ile `kaynakliHalkaAc` yönetir | app.js **2003-2006** |
| Liste ek: `"kaynakli_halka_kronoloji"` (koordinatör isteği, HALKA-KRONOLOJI M-3796) | app.js **5578** |
| 🟡 Yan hata düzeltmesi: aktif C kaydı kalmayınca `hukuki-sinir-nokta` kaynağı boşaltılmıyordu, kırmızı noktalar ekranda kalıyordu | app.js **5526-5529** (`_hukukiSinirGuncelle`) |
| CSS `.kh-blok` (popup stilinin eşi) · `#lejant-halka[hidden]` · `.lj-halka` | style.css **2418-2455** |

## ③ SINAVLAR
Ortam: gerçek tarayıcı, `arac/sunucu.py` :8777, `r7487`, haritaHazir=true. Tıklamalar gerçek fare tıklamasıydı (computer left_click).

| sınav | sonuç |
|---|---|
| `node --check js/app.js` | ✓ |
| **(a)** 1595-06-15 · ⑧ AÇIK · Tebriz noktasına (275,246) tıklandı | ✓ Dizin **Tebriz** detayını açtı. `.kh-blok[data-kh-yer=Tebriz]` metni: "Osmanlı Devleti doğrudan TR · 25 Eylül 1585 → 21 Ekim 1603 · **TDV İslâm Ansiklopedisi, «Tebriz»** · ¶ [53-54] · [58] · slug: tebriz · alıntı". Ekran görüntüsünde de görüldü. Kanvas popup sayısı 0, yani çift gösterim yok |
| halka / lejant / süzgeç | ✓ `KHALKA.cizilen` 13 · `#lejant-halka` görüntüsü `flex` · süzgeç kurulu |
| **(b)** ⑧ AÇIK · 1595-06-15 | ✓ Ekranda çizilen Ferhat noktası **0**. Kaynakta 15 özellik var; veri yerinde duruyor |
| **(b)** ⑧ AÇIK · 1700-06-15 | ✓ Ekranda Karlofça noktaları: `karlofca-lehistan-1699: Bar (Podolya)` ve `Suçava`. Kaynakta 3 Karlofça kaydından 6 özellik var |
| **(c)** ⑧ KAPALI · 1595-06-15 | ✓ Süzgeç `null`. Ekranda Ferhat noktası 8 (Mâku · Hoy · Şerur · Mîyandoab · Merâga · Ordubad · Nahçıvan · Tebriz); ekran görüntüsünde kırmızı daireler döndü. `KHALKA.cizilen` 0 · lejant görüntüsü `none` |
| **(c)** ⑧ KAPALI · Tebriz tıklaması | ✓ Tebriz detayı açıldı · `.kh-blok` **0**. Açılan tek popup, eski `hukuki-sinir-nokta` popup'ı; önceki davranış korunuyor |
| ÇELİŞKİ | ✓ Yalnızca tarayıcıda geçici `window.KAYNAKLI_HALKA_SINAVGECICI` kaydı eklendi (Tebriz · safevi). Blok başlığı "⚠ ÇELİŞKİ — bu tarihte 2 devlet: Osmanlı Devleti · Safevî Devleti (İran)" oldu, 2 kayıt görüntülendi. Kayıt silindi; havuz yeniden 53, çizilen 13 |
| İşaretçisi olmayan yer (`yer_kon`) | ✓ Geçici kayıt `@40,50.5` ile `_khPopupAc` popup'ı açtı ve içerik doğruydu. Kayıt silindi |
| Konsol | 2 hata. İkisi de `data/kaynakli_halka_kronoloji.js` 404: dosya henüz yazılmadı, yükleyici `onerror` ile sessizce geçiyor |

## ④ ÖLÇEMEDİKLERİM (D107)
```
ÖLÇÜLEMEDİ  yer_kon halkasına GERÇEK FARE tıklaması. Veride yer_kon kaydı YOK (53/53 `yer`);
            popup yolu yalnız fonksiyon çağrısıyla sınandı, katman click olayıyla sınanmadı.
ÖLÇÜLEMEDİ  Halka katmanının click olayı genel tıklamadan ÖNCE mi SONRA mı geliyor.
            Tebriz tıklamasında popup 0 çıktı. Bu, bayrağın çalıştığı anlamına da gelebilir,
            katmanın hiç tetiklenmediği anlamına da. İki sıra için de koruma var (§②).
            Sırayı ayrıca ölçmedim.
DAVRANIŞ    Şehir görünümü açıkken tarih değişirse blok YENİLENMEZ; tıklama anının tarihini
            gösterir ve bunu "Tarih: …" satırında yazar. Yeniden tıklayınca güncellenir.
ETKİ        _yerlesimAc düzeltmesi ⑧'den BAĞIMSIZ olarak bütün harita tıklamalarını değiştirir:
            eskiden liste açılıyordu, artık en yakın şehrin detayı açılıyor. Kodun kendi
            yorumunun niyeti buydu (T-0126).
TARAYICI    Sınavdan sonra ⑧ KAPALI bırakıldı (önizleme tarayıcısının localStorage halkaAc="0").
```
