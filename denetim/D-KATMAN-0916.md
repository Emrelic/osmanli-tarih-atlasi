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

## 3. Şema — TEYİT EDİLMEDİ, D1-TURKIYE'nin ilanı bekleniyor

`D-1923-0916.md` madde 1: D şeması `data/hukuki_sinirlar.js` (C) şemasından türetilecek; D1-TURKIYE
bunu `denetim/SEMA-D-0916.md`de yayınlayıp tahtaya ilan edecek. Bu ilan henüz (16 Eylül 18:50 itibarıyla)
YOK. `js/d_katman.js` şu alan adlarını **C'den türeterek TAHMİN ETTİ** (kesinleşmedi):
```
kayit.taraflar[]           (C ile aynı — devletler.js kimlikleri, şartnamede AÇIKÇA yazıyor)
kayit.f / kayit.t           (C ile aynı — şartnamede AÇIKÇA "geçerlilik f/t")
kayit.hat.nokta_dizisi[]    (C'den türetildi — {lon,lat} ya da [lon,lat], İKİSİ de kabul ediliyor)
kayit.dayanak               (C'nin `kayit.kaynak`sının D karşılığı — şartnamede "her parçanın dayanağı")
kayit.kesinlik              (şartnamede AÇIKÇA "kesinlik (km)")
```
Katman kurulumu (kaynak/layer/tıklama, §2) şemadan BAĞIMSIZ ve KALICI. Yalnız `_dNoktaDizisi` ve
`_dDayanakMetni` fonksiyonları şema ilan edilince gözden geçirilecek — kod bu ikisine izole edildi,
değişiklik tek noktadan yapılabilecek.

## 4. Bekleyen

- 🔴 D1-TURKIYE'nin `SEMA-D-0916.md` ilanı (tahtada HERKES'e).
- 🔴 UI'ya tahtadan: `index.html`ye `js/d_katman.js` script satırı (bkz. §2).
- 🟡 En az bir D kaydı (`window.D_SINIRLAR`) yazılınca gerçek veriyle sınama (tarayıcıda görsel doğrulama,
  `<when_to_verify>` gereği).

## 5. Görsel tasarım

C: kesik siyah çizgi (#1a1a1a, dasharray 2/1.3). D: düz (kesiksiz), kalın (3px), koyu lacivert
(#0a2f5c) — D > C önceliği görsel olarak da ayırt edilsin diye ("daha kesin/ayrıntılı" izlenimi).
Tıklanınca popup: kayıt id + dayanak metni + kesinlik (km). Dolgu YOK — şartname yalnız "D çizgisini
çizer" diyor, C'deki taraf boyama mantığı burada YOK.
