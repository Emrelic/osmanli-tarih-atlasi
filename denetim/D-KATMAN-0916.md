# D-KATMAN — arayüz katmanı (1923 D sınırları) · 16 Eylül 2026

Koordinatör: 1.MURAT. Görev tanımı: `oturumlar/D-1923-0916.md` "DÜNYA KADROSU" tablosu, D-KATMAN satırı.
Kurallar: `CLAUDE.md` §7 · `oturumlar/GORUNUM-ABCD-0916.md` §D · `oturumlar/DALGA-0052.md` §0.

## 1. Bulgu — belge yanlışı

`GORUNUM-ABCD-0916.md` §C ve `D-1923-0916.md`nin D-KATMAN satırı "`js/c_katman.js`" diye bir dosyadan
söz ediyor. **Böyle bir dosya yok.** C katmanı (`window.HUKUKI_SINIRLAR`'ı çizen mantık) `js/app.js`
içine gömülü, satır 5847-6230 ("🆕 C ÇİZİM KATMANI" yorumu, `SEMA-C-0911.md` §8). Kaynak/katman
kurulumu `harita.on("load", ...)` içinde (app.js:1509-1554), güncelleme `_hukukiSinirGuncelle(gun)`
fonksiyonu, çağrı noktası `guncelle()` içinde tek satır (app.js:7261).
⇒ 1.MURAT'a tahtadan (M-4062) bildirildi, belgelerin düzeltilmesi istendi.

## 2. Tasarım kararı — app.js/index.html'e dokunmadan entegrasyon

`§7` gereği `js/app.js` ve `index.html` ARAYÜZ (UI) oturumunun dosyası; D-KATMAN bunlara yazamaz.
C'nin kendisi app.js'e gömülüyken, D-KATMAN şartnamesi `js/d_katman.js`'i **YENİ, AYRI dosya**
istiyor. İki entegrasyon noktası app.js'e dokunmadan çözüldü:

1. **Katman kurulumu** — `d_katman.js` kendi `harita.on("load", _dKatmaniKur)` dinleyicisini ekliyor.
   MapLibre "load" olayı birden fazla dinleyiciyi destekler (app.js kendisi de ikinci bir örnek:
   app.js:7533, `tuvalOlc/baslikDamgala` için). `harita` üst seviyede `var harita = new maplibregl.Map(...)`
   olarak tanımlı (app.js:1054) — IIFE'siz dosya, gerçek global; script sırası `app.js` → `d_katman.js`
   olduğu sürece `harita` zaten mevcuttur.
2. **Canlı güncelleme** — app.js'in `guncelle()` fonksiyonu (üst seviye, gerçek global) monkey-patch
   ile sarılıyor: eski `guncelle` çağrıldıktan sonra `_dSinirGuncelle(suanki)` da çalışıyor. C'nin
   kullandığı tek-satır çağrı deseni (`if (haritaHazir) _hukukiSinirGuncelle(suanki);`, app.js:7261)
   burada app.js'e satır eklemek yerine sarmalamayla taklit edildi.

**UI'dan istenen TEK satır:** `index.html`ye `js/app.js`ten SONRA (satır 1356'dan sonra) bir
`<script src="js/d_katman.js?v=rNNNN"></script>` eklemesi. Başka hiçbir dosyaya dokunulması
gerekmiyor. Tahtadan istenecek (bkz. §4).

## 3. Şema — İLAN EDİLDİ (16 Eylül 19:00), kod GERÇEK alanlara göre yazıldı

D1-TURKIYE `denetim/SEMA-D-0916.md`yi yayınladı ve `data/d_sinirlar.js` (15 kayıt) ile birlikte teslim
etti (commit d5cc7bc). İlk taslağımdaki tahminler (`hat.nokta_dizisi`, tekil `dayanak` string/obje,
`kesinlik`) YANLIŞ çıktı — gerçek şema:
```
kayit.taraflar[]      ✓ tahminle aynı
kayit.f / kayit.t      ✓ tahminle aynı
kayit.hat               düz [[lon,lat], ...] — .nokta_dizisi YOK (tahmin yanlıştı, düzeltildi)
kayit.kategori          "D" | "C" | "fiili" | "D-YOK"  — TAHMİN ETMEMİŞTİM, sonradan öğrenildi
kayit.dayanak[]         DİZİ, her öge {ad, madde, tarih, tur, kaynak|url, sayfa, alinti} — tekil değil
kayit.kesinlik_km       ("kesinlik" değil — "_km" soneki var)
kayit.uzunluk_km, kayit.kutu (yalnız D-YOK'ta), kayit.degisti, kayit.tahdit, kayit.kiyas_atlas — kullanılmadı
```
`js/d_katman.js` bu gerçek alanlara göre yeniden yazıldı. `kategori` üç görsel biçime ayrıldı (§5).
`kategori:"D-YOK"` (hat:null) tamamen elenir — şema md.3 "bu kutuda D çizilmez, A/B geçerli kalır" diyor.

## 4. Doğrulama

🟢 **Mantık, gerçek veriyle node'da sınandı** (`_dAktifKayitlar` + `_dDayanakSatirlari`, D1'in 15
kaydına karşı): 1923-08-01'de 12/15 aktif (3 `D-YOK` doğru elendi: küçük Ağrı/Kotur/Bacirge 1932-37
değişiklikleri) · 1923-10-29'da (kapanış günü) 0/15 aktif — yarı-açık aralık (`gün < t`) doğru çalışıyor,
D061/D195'in "açık uç BİTİŞE kadar" kuralıyla tutarlı · popup metni (dayanak birleştirme) doğru üretiliyor.

🟡 **Tarayıcıda GÖRSEL doğrulama YAPILAMADI.** `index.html`ye GEÇİCİ olarak iki `<script>` satırı eklenip
(`data/d_sinirlar.js` + `js/d_katman.js`) yerel önizleme sunucusunda (`py arac/sunucu.py`) denendi, SONRA
index.html HEAD'e geri alındı (commit edilmedi, `git diff` temiz doğrulandı). Sonuç: harita altlığı
(`server.arcgisonline.com` raster kaynağı) bu ortamda hiç yüklenmedi — MapLibre'nin "load" olayı
ateşlenmedi, `harita.loaded()` dakikalarca `false` kaldı (muhtemelen bu oturumun dış ağ erişimi kısıtlı;
`git push`un `github.com`a da "Could not resolve host" vermesiyle AYNI sınıf bir kısıt). `_dKatmaniKur()`
elle çağrılınca MapLibre kendi hata mesajını verdi: **"Style is not done loading."** — kendi try/catch'im
bunu YAKALADI ve `console.error` ile bildirdi, geri kalan hiçbir şeyi bozmadı (C katmanının aynı savunma
deseni). ⇒ Bu, KODUN "load" öncesi çağrılmaması gerektiğinin doğrudan kanıtı — tasarım (§2 madde 1)
doğru. Gerçek görsel doğrulama, altlığın yüklenebildiği bir ortamda (ya da UI script satırını ekleyip
Emre'nin kendi tarayıcısında) tekrar denenmeli.

## 5. Bekleyen

- 🔴 UI'ya tahtadan: `index.html`ye İKİ satır — `<script src="data/d_sinirlar.js">` (D1-TURKIYE'nin
  verisi de henüz index.html'e bağlı DEĞİL) ve `<script src="js/d_katman.js">`, `js/app.js`ten SONRA.
- 🟡 Görsel doğrulama — bu oturumun ortamında harita altlığı yüklenmedi (§4), erişimi olan bir ortamda
  tekrarlanmalı.
- 🟢 D2-KOMSU/D3-AVRUPA-* vb. veri yazdıkça otomatik okunur (`_D_AILELER` listesi), kod değişmez.

## 6. Görsel tasarım

Üçü de aynı renk (#0a2f5c, koyu lacivert — C'nin #1a1a1a siyah kesikli hattından AYIRT edilsin diye),
kategoriye göre çizgi biçimi farklı (güven seviyesini taşır):
```
kategori:"D"      düz (kesiksiz), 3px          — koordinatlı, en yüksek güven
kategori:"C"      kısa kesik [3,1.5], 2.5px     — belge kaba (2 nokta/cetvel)
kategori:"fiili"  seyrek kesik [1,2], opaklık 0.7 — hukukî hat yok, bugünkü çizgi VEKİL
kategori:"D-YOK"  ÇİZİLMEZ (hat:null)            — bu kutuda D yok, A/B geçerli
```
Üç ayrı MapLibre `line` layer'ı, TEK kaynak (`d-sinir-hat`), her biri `kategori` alanına filtre —
`line-dasharray` MapLibre'de veri-güdümlü ifade almadığı için (sabit dizi gerekiyor). Tıklanınca popup:
kayıt id + kategori etiketi + uzunluk_km + kesinlik_km + ilk 2 dayanak (ad, tarih, alıntı). Dolgu YOK —
şartname yalnız "D çizgisini çizer" diyor (D-1923-0916.md, D-KATMAN satırı), C'deki taraf boyama mantığı
burada yok. `kategori:"fiili"`nin biçimi SEMA-D-0916.md §4 madde 1'in ÖNERİSİ (kesik çizgi) uygulanarak
seçildi — henüz UI/Emre onayı YOK, açık soru olarak kaldı.
