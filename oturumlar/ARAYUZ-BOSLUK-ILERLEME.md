<!-- DURUM: BİTTİ ¦ 2026-08-15 ¦ boşluğun cinsi ekrana çıktı -->
# ARAYÜZ BOŞLUK CİNSİ — İLERLEME / TESLİM

## ① ÖLÇTÜM

Yazılan dosyalar: `js/app.js` (+65 satır), `css/style.css` (+83 satır).
`index.html`'e dokunmadım (brifing zaten hazır olduğunu söylüyordu, doğruladım).

`node --check js/app.js` → **temiz.**

Tarayıcıda doğrulama iki aşamalı oldu, ikisi de gerekli:

**① Sayfayı `py -m http.server 8899` ile açtım** (`.claude/launch.json`'daki
`atlas` yapılandırması). `data/bos_alanlar.js` dahil bütün veri dosyaları
200 döndü (`preview_logs` ile ölçtüm).

**② `harita.on("load", ...)` HİÇ ATEŞLENMEDİ** — bu sandbox tarayıcısı
`server.arcgisonline.com`'a (raster altlık kaynağı) çıkamıyor, MapLibre
`load` olayı tile isteği tamamlanmadan hiç fırlamıyor. `harita.loaded()`
15+ saniye sonra hâlâ `false`, `devlet-dolgu` gibi `load` içinde eklenen
hiçbir katman yoktu. **Bu ortamın kısıtı — kodun kusuru değil**: gerçek
yayında bu satır aylardır çalışıyor, sandbox'ın internete çıkışı yok.

⇒ Kodu **doğrudan sayfa bağlamında elle çalıştırarak** doğruladım (aynı
kod, `harita` nesnesi zaten vardı, `load` beklemeden marker eklenebiliyor):
```
kacBenek: 34   kacSoru: 9      (192 kayıttan 34+9=43; 149 = 132+9+8 atlandı)
```
Ve tek tek:
- `.bosluk-benek` computed style: `radial-gradient(...)`, `filter: blur(2px)`,
  `border-radius: 50%`, `30x30px` — kenar YOK, benek/doku.
- `.bosluk-soru` computed style: `border: 1px dashed`, `::after content: "?"`.
- Bir benek elemanına `.click()` → popup HTML:
  `<b>Asosa</b><br><i>aşiret / konfederasyon denetimi</i><p>Beni Şengûl
  şeyhlikleri — kimlik yok; sınır 1902'de çizildi...</p>` — **`neden:` metni
  doğru geliyor.**
- Lejant swatch'ları (`.lejant i.bosluk-benek-ornek` / `-soru-ornek`) sahte
  bir `.lejant` kutusu içinde test edildi: ikisi de doğru CSS'i aldı.
- Lejant metni `BOS_CINSLER`den okunuyor, kopyalanmadı: "aşiret /
  konfederasyon denetimi" ve "veri yok" `BOS_CINSLER.kabile.ad` /
  `BOS_CINSLER["veri-yok"].ad`'dan geliyor.

## ② ÇIKARDIĞIM

Ölçtüğüm: kod mantığı doğru çalışıyor, sayılar (34/9/149) `CLAUDE.md`/
brifing tablosuyla birebir uyuyor, popup ve lejant içerikleri doğru.
**Çıkardığım:** gerçek internet erişimli bir tarayıcıda (GitHub Pages
yayınında ya da normal masaüstü Chrome'da) bu değişiklik **çalışacak** —
ama bunu **bu oturumda BİZZAT ekran görüntüsüyle göremedim**, çünkü sandbox
tarayıcısı raster altlığa çıkamadı. `⑥ ekran görüntüsü: Hoggar ile
Rub'ul Hâlî ayırt ediliyor` maddesini **ölçmedim** — kodun bunu yapacağını
işlevsel testle gösterdim, gözle görmedim.

## ③ BİTİŞ ÖLÇÜTÜ

```
① 34 `kabile` kaydı ekranda benekli görünüyor         ✓ ölçüldü (işlevsel test)
② lejantta bir satır var                               ✓ (iki satır: benek + soru)
③ tıklanınca `neden:` okunuyor                          ✓ ölçüldü (popup HTML)
④ `veri-yok` (9 kayıt) ayrı gösterimde                  ✓ ölçüldü
⑤ `devletsiz`/`insansiz` bugünkü gibi BOŞ kaldı         ✓ ölçüldü (149 atlandı)
⑥ ekran görüntüsü: Hoggar ile Rub'ul Hâlî AYIRT EDİLİYOR ⚠️ ÖLÇMEDİM — sandbox
   internete çıkamadığı için gerçek harita render'ı görülemedi. Kod aynı,
   risk düşük, ama görsel doğrulama BEKLEMEDE. Gerçek tarayıcıda/yayında bir
   ekran görüntüsü alınması öneri olarak koordinatöre bildirildi.
```

## ④ TASARIM KARARLARI (kısaca)

- Renk `#9d6e2c` (toprak/deri tonu) — Osmanlı `#8e0b22`, tâbi `#b2384a`,
  kuşatma sarısı `#b8860b` ile ÇAKIŞMIYOR.
- `yaricap_km` hepsinde `null` olduğu için **ALAN değil İŞARET** çizildi:
  sabit 30px'lik DOM marker (`maplibregl.Marker`), GL `circle` katmanı değil.
  Böylece "kaynaksız yarıçap uydurmamak" ilkesi otomatik korunuyor.
- Popup: `maplibregl.Popup` (proje ilk kez kullandı, CDN'den zaten yüklü).
- Zaman boyutu YOK — kayıtlar zamansız, her tarihte aynı çiziliyor. Bu
  ANAKRONİZM kod içine YORUM olarak da yazıldı (`js/app.js`, `boslukKur`
  öncesi) ki bir sonraki oturum kusur diye yeniden keşfetmemiş olsun.

## ⑤ YASAKLARIMA UYDUM
`data/**`, `arac/**`, `index.html` — hiçbirine dokunmadım. Kaçış içeren
hiçbir metin kabuktan geçmedi (Write → dosya; bash yalnız `node --check` ve
`git diff --stat` gibi zararsız komutlar için kullanıldı).
