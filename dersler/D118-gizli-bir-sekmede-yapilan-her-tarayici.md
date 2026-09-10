# GİZLİ BİR SEKMEDE YAPILAN HER TARAYICI ÖLÇÜMÜ «YOK» DER — VE «YOK» BİR SONUÇ SANILIR.

> Kimlik `D118` · `CLAUDE.md §11` dizininden taşındı (10 Eylül 2026 budaması).
> Slogan orada, vaka burada.

---

- 🔴 **GİZLİ BİR SEKMEDE YAPILAN HER TARAYICI ÖLÇÜMÜ «YOK» DER — VE «YOK»
  BİR SONUÇ SANILIR.** *(4 Eylül 2026 · aynı günün DÖRDÜNCÜ vakası)*

  `serbest-*` katmanları düzeltildikten sonra doğrulama yapıldı ve alet
  ısrarla *"katman YOK"* dedi. Yayındaki sürüm de aynı şeyi dedi ⇒ bir an
  *"haritayı ben kırdım"* hükmü verilmek üzereydi. Gerçek sebep tek satır:
```
document.visibilityState === "hidden"
```
  Browser paneli gizliydi. **MapLibre gizli belgede çizim yapmaz; çizim
  olmayınca `load` ateşlemez; `load` ateşlemeyince hiçbir katman eklenmez.**
```
gizliyken   isStyleLoaded() false · getStyle() undefined · getLayer() null
            harita.loaded() false · katman sayısı 2 (yalnız başlangıç stili)
görünürken  katman 39 · devlet-dolgu VAR · serbest-hale VAR
```
  ⇒ Bütün o *"katman yok"* ölçümleri **bir artefakttı**, ve hiçbiri hata
  vermedi — dördü de **temiz bir sayı** üretti.

  🟢 **KURAL: bir tarayıcı ölçümü almadan önce `document.visibilityState`
  sorulur.** *"hidden"* ise render'a bağlı her ölçüm (`isStyleLoaded` ·
  `getStyle` · `getLayer` · `loaded` · ekran görüntüsü) **`ölçülemedi`**
  kovasına girer — **`YOK` değil.** Ekran görüntüsü almak çizimi zorlar ve
  paneli görünür kılar; ölçümden önce bir kare almak en ucuz çaredir.

  ⚠️ **VE KONSOL TAMPONU GEZİNMEDE TEMİZLENMİYOR.** Düzeltmeden sonra aynı
  dört hata satırı hâlâ görünüyordu ve bir an *"düzelmedi"* sanıldı. Hüküm
  sonunda **katmanın kendisinden** verildi: geçersiz bir paint ifadesiyle
  katman HİÇ oluşmaz, oysa katman vardı ve yeni ifadeyi taşıyordu.
  ⇒ ***Bir kusurun kaybolduğunu, kusurun İZİNDEN değil KONUSUNDAN ölç.***

  📌 Ve bu, `§11`in *"doğru kapıya gidip yanlış yerden dinlemek"* ailesinin
  bir günde **dördüncü** vakası: `konum_denetimi`in dönüşü · tahtanın `kim`
  alanı · `renk_olc`un `gorunen()`i · ve bu. Dördünün ortak deseni tek:
  **alet hata vermedi, temiz bir sayı üretti.**
