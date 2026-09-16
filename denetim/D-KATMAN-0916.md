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
gerekmiyor. Tahtadan istenecek (bkz. §8).

## 3. Şema — İLK TUR (16 Eylül 19:00, kategori bazlı) — §5'te sinif bazlı ikinci tura genişledi

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
`js/d_katman.js` bu gerçek alanlara göre yeniden yazıldı. `kategori` üç görsel biçime ayrıldı (bu tasarım
§9'da sinif bazlı DÖRT biçime genişledi — aşağıdaki §4 hâlâ geçerli, yalnız görsel biçim §9'da değişti).
`kategori:"D-YOK"` (hat:null) tamamen elenir — şema md.3 "bu kutuda D çizilmez, A/B geçerli kalır" diyor.

## 4. Doğrulama (İLK TUR — kategori bazlı, yalnız D1'in 15 kaydı; §7 TÜM 161 kayıtla ikinci turu sınadı)

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

## 5. A-F ALTI KADEME — 16 Eylül akşamı genişleme (GERIYE-SARMA-0916.md)

Emre aynı akşam A-D dört kademeyi **A-F altı kademeye** genişletti (`oturumlar/GORUNUM-ABCD-0916.md`
en üst bölüm, BAĞLAYICI) ve program `oturumlar/GERIYE-SARMA-0916.md`ye taşındı (1923'ten geriye,
G1/G2/G3… dalgalarıyla sarılıyor). D-KATMAN satırı yeniden verildi:

```
D  FİİLÎ kesin sınır — koordinatı belli, HUKUKEN GEÇERSİZ (işgal/ateşkes hattı, tanınmamış devlet)
E  HUKUKÎ kesin sınır — barış antlaşması/protokol (ESKİ "D" = BU)
F  E + uluslararası tanınma (Milletler Cemiyeti / büyük devletler)
```
İki görünüm: **HUKUKÎ** = `F>E>C` (D hiç gösterilmez) · **FİİLÎ** = `D>F>E>C`.
Veri alanı `sinif: "F"|"E"|"D"|"C"|"YOK"`; eski `kategori` GEÇİŞ DÖNEMİ için eşlenir: `D→E` (F kanıtı
D-KUNYE'nin tanınma tablosundan — `denetim/TANINMA-1923-0916.json`, henüz YOK — gelene kadar hep E) ·
`fiili→D` · `C→C` · `D-YOK→YOK`.

`js/d_katman.js` bu eşlemeyi `_dEtkinSinif(k)`te uyguluyor (`k.sinif` varsa onu, yoksa `k.kategori`den
türetiyor) — **16 Eylül 19:40 itibarıyla 5 aile dosyasının (161 kayıt) HİÇBİRİNDE `sinif` alanı yok**,
yani şu an TÜM okuma bu geri düşme yoluyla oluyor; bir bölge oturumu `sinif` yazınca kod değişmeden
o alan öne geçer.

**ÖNCELİK (F>E>C / D>F>E>C) — bir tasarım YANLIŞ ÇIKTI, düzeltildi (bkz. §10).** İlk deneme "aynı
`taraflar` (sırasız) + aynı gün aktif ⇒ grup, grupta yalnız en yüksek sınıf kalır" kuralıyla düşük
öncelikli kaydı VERİDEN SİLİYORDU; tarayıcıda sınanınca gerçek bir veri kaybı ortaya çıktı ve tasarım
değiştirildi. **Şu anki davranış:** öncelik hiçbir kaydı ELEMEZ — yalnız MapLibre layer EKLEME SIRASINI
(bu nedenle ÇİZİM/z-sıra) belirler (`_dKatmaniKur`: C→E→F→D). Geometrik olarak çakışan iki hat olursa
(bugün örneği yok) üsttekinin sınıfı görünür; hiçbiri veriden düşmez. **D-KUNYE/1.MURAT'a açık soru:**
gerçek bir hukukî/fiilî SAPMASI (aynı segment, iki sınıf, ikisi de gösterilmek isteniyor ama üst üste
biniyor) ortaya çıktığında, hangisinin GÖRSEL olarak üstte kalacağını seçmek için ayrı bir alan (örn.
`parca_grubu` ya da `sapma_of:"<id>"`) şemaya eklenmeli mi?

## 6. Görünüm anahtarı — kendi MapLibre kontrolü, app.js'e dokunmadan

`harita.addControl(new _DGorunumKontrolu(), "top-right")` ile iki düğme ("D: Hukukî" / "D: Fiilî")
eklendi — köşe boştaydı (`top-left`te yalnız `NavigationControl` var, `top-right` kontrol edildi, boş).
Tıklanan görünüm `_dGorunum`u değiştirip `_dSinirGuncelle`yi zorluyor. UI'dan HİÇBİR satır istemedi.

## 7. Doğrulama

🟢 **Mantık, TÜM 5 aile dosyasına (169 kayıt) karşı node'da VE tarayıcıda sınandı** (düzeltmeden
SONRAKİ hâliyle, §10):
```
kategori dağılımı        D:68 · D-YOK:80 · fiili:2 · C:19
1923-08-01 [HUKUKÎ]      80 aktif  (beklenen = tüm D/C, tarih penceresine göre) ✓
1923-08-01 [FİİLÎ]       84 aktif  (+4 = eski kategori:fiili kayıtları, TAMAMI) ✓
her iki görünümde de "beklenen == ölçüm" eşitliği doğrulandı (bastırma YOK garantisi) ✓
d1923-tr-sy-bati (kaba/C, Hatay parçası) HER İKİ görünümde de VAR ✓ (bkz. §10 — önceki turda SİLİNİYORDU)
tr-gr-1/tr-gr-2 (çok-parçalı, aynı taraflar) ikisi de kaldı ✓
Irak (eski kategori:fiili) HUKUKÎ'de YOK, FİİLÎ'de sinif:D ile VAR ✓
D-YOK hiçbir görünümde çizilmiyor ✓
```
🟢 **Tarayıcıda da sınandı** (yerel önizleme, index.html'e GEÇİCİ script satırları eklenip sonra HEAD'e
geri alındı, commit edilmedi): harita altlığı bu ortamda yüklenmiyor (§4) ama `_dAktifKayitlar` /
`_dSinirGuncelle` / `_DGorunumKontrolu` fonksiyonları GERÇEK sayfa/DOM'da hatasız çalıştı; kontrol
2 doğru etiketli düğme üretti. Yalnız MapLibre'nin kendi görsel çizimi (tile'lar) doğrulanamadı.

## 8. Bekleyen

- 🔴 UI'ya tahtadan: `index.html`ye İKİ satır — `<script src="data/d_sinirlar*.js">` (D1-TURKIYE +
  D2-KOMSU + D3-AVRUPA-ORTA + D4-ORTADOGU + D5-ASYA'nın verisi de henüz index.html'e bağlı DEĞİL,
  beş dosyanın hiçbiri) ve `<script src="js/d_katman.js">`, `js/app.js`ten SONRA.
- 🟡 Görsel doğrulama — bu oturumun ortamında harita altlığı yüklenmedi (§7), erişimi olan bir ortamda
  tekrarlanmalı.
- 🟡 §5/§10'daki açık soru D-KUNYE/1.MURAT'a sorulacak: gerçek bir sapma (aynı segment, iki sınıf)
  şemada nasıl işaretlenecek?
- 🟢 D2-KOMSU/D3-AVRUPA-BATI/D4-AFRIKA/D5-AMERIKA/D5-OKYANUSYA vb. veri yazdıkça otomatik okunur
  (`_D_AILELER` listesi), kod değişmez. Bir kayıt `sinif` yazınca `kategori` geri düşmesi otomatik devre dışı kalır.

## 10. Bulunan ve düzeltilen kusur — öncelik kuralı SESSİZCE veri siliyordu

İlk `sinif` tasarımı (§5) önceliği "aynı `taraflar` + aynı gün aktif ⇒ grup, yalnız en yüksek sınıf
kalır" diye uyguluyordu. Tarayıcıda GERÇEK veriyle (D1'in tam 15 kaydı) sınayınca (yalnız node değil,
bu sefer canlı DOM'da) ölçülen sayı beklenenden 1 eksik çıktı: **hukukî görünüm 10 (beklenen 11),
fiilî görünüm 11 (beklenen 12).** Sebep bulundu: `d1923-tr-sy-dogu` (sinif E) ve `d1923-tr-sy-bati`
(sinif C, Hatay/İskenderun parçası) AYNI `taraflar`ı (`tbmm-turkiye`, `suriye-lubnan-mandasi`) taşıyor
ama sınırın İKİ AYRI COĞRAFİ PARÇASI — taraflar eşleşmesi bunu "aynı segmentin iki alternatif sınıfı"
sanıp `tr-sy-bati`yi HER İKİ görünümde de sessizce siliyordu.

⇒ **Bu, D089'un canlı bir vakası:** "veri modelinin ifade edemediği bir ilişkiyi (aynı fiziksel segment)
ifade edebildiği bir ilişkiye (aynı taraflar) çevirmek yaklaşıklama değil, başka bir iddiadır." Şema bu
ilişkiyi taşımadığı için bastırma YAPILAMAZ — yapılırsa yanlış kayıtları siler. Çare: öncelik artık HİÇBİR
kaydı elemiyor, yalnız `_dKatmaniKur`daki layer ekleme sırasını (C→E→F→D, çizim z-sırası) belirliyor —
gerçek bir geometrik çakışma olursa üsttekinin sınıfı görünür, ama hiçbir kayıt veriden düşmez. Düzeltme
sonrası aynı testte `tr-sy-bati` her iki görünümde de VAR (§7). Açık soru §5/§8'e taşındı.

## 9. Görsel tasarım (güncel — sinif bazlı)

Dört sınıf da AYNI renk (#0a2f5c, koyu lacivert — C katmanının #1a1a1a siyah kesikli hattından AYIRT
edilsin diye), çizgi biçimi güven/statü seviyesini taşıyor:
```
sinif:"F"   düz (kesiksiz), 3.5px, opaklık 1      — hukukî + uluslararası tanınmış, en yüksek güven
sinif:"E"   uzun kesik [6,2], 2.8px, opaklık 1     — hukukî, tanınma kanıtı henüz yok
sinif:"D"   sık kesik [1,2], 2.5px, opaklık 0.75   — fiilî/de facto, hukuken geçersiz
sinif:"C"   orta kesik [2,2], 2.2px, opaklık 0.85  — belge kaba (2 nokta/cetvel)
sinif:"YOK" ÇİZİLMEZ                               — A/B geçerli
```
Dört ayrı MapLibre `line` layer'ı, TEK kaynak (`d-sinir-hat`), her biri `sinif` alanına filtre
(`line-dasharray` MapLibre'de veri-güdümlü ifade almıyor, sabit dizi gerekiyor — bu yüzden layer
başına ayrı). Tıklanınca popup: kayıt id + sınıf etiketi + uzunluk_km + kesinlik_km + ilk 2 dayanak
(ad, tarih, alıntı). Dolgu YOK — şartname yalnız "sınıf başına ayırt edici çizgi" istiyor, C'deki taraf
boyama mantığı burada yok.
