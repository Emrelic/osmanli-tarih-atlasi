# 🔴🔴 SÜZGEÇ GÖRÜNÜR ELER, İZDÜŞÜM SESSİZ KIRPAR — ve bir aletin

> **Vaka anlatısı — `CLAUDE.md §11`den çıkarıldı (BUDAMA-0907).**
> Kuralın kendisi ve hükmü `CLAUDE.md §11`de **kalmıştır**;
> burada duran, o kuralı doğuran VAKADIR.
> Eski konum: `CLAUDE.md` satır **0** · 1150 token

---

- 🔴🔴 **SÜZGEÇ GÖRÜNÜR ELER, İZDÜŞÜM SESSİZ KIRPAR — ve bir aletin
  hangisini yaptığı sorulmadan alan kapsaması ölçülemez.**
  *(5 Eylül 2026 · `KÜRE GÖRÜNÜM` · `_kademe_uygula.py`)*

  `kur` vakası bir **süzgeç** kusuruydu: kayıt eleniyordu ama `atlanan`a
  düşüyordu, yani **görünürdü**. Kardeş alette aynı soru soruldu ve
  mekanizma başka çıktı:
```js
// _kademe_uygula.py, node izdüşümü (satır 32-34)
A.map(r => ({ad: r.yerlesim, eski:(r.mevcut||{}).k,
             yeni:(r.oneri||{}).k, olcut:r.olcut}))
```
  ⇒ Kayıt **TUTULUYOR**, öteki bütün alanları **atılıyor**, ve hiçbir
  yere iz düşmüyor. Süzgeç bir kaydı kaybeder ve söyler; izdüşüm bir
  **alanı** kaybeder ve **söylemez.**

  🔴 **VE BEDELİ ÖLÇÜLDÜ — düşen alan `Değişmez 3`ün alanı:**
```
kademe.js  38 kayıt · `k` + `m` + `donem` taşıyor
öneri.k == canlı k    38/38   ⇒ `k` yarısı ZATEN İNMİŞ
öneri.m  canlıdan FARKLI  24/38 · ve 24'ünde de canlı `m` NULL
canlıda bulunamayan       0/38 ⇒ hepsi MEVCUT kayıt
```
  Ve 24'ü tahmin değil **ölçülmüş**: *"1593 Tebriz eyaleti liva listesi
  ÖLÇÜLDÜ (Tebriz · Sulduz · Dizmar · Merâga…)"* · `kaynak: TDV tebriz` ·
  `güven: GEREKÇELİ`. `CLAUDE.md` `Değişmez 3`ü *"henüz sağlanmıyor, 359
  çift"* diye kaydediyor; burada 24'ü için **kaynaklı bir merkez duruyor
  ve inmiyor.**

  🔴 **İKİ KAPI, VE BU SEFER İKİ AYRI ALETTE:**
```
KAPI A  `_kademe_uygula.py` izdüşümü yalnız `.k` alıyor
        ⇒ `oneri.m` Python'a HİÇ ULAŞMAZ
KAPI B  `_sahiplik_uygula.py` `m`yi ZATEN taşıyabiliyor (SKALER_ALANLAR)
        ama node süzgeci `r.ad !== undefined` istiyor; bu kayıtlar
        `ad` değil **`yerlesim`** taşıyor ⇒ 38/38 SÜZGEÇTE ELENİYOR
```
  ⇒ ***Alanın bir SAHİBİ var, ama o alete bu kayıtlar ULAŞMIYOR; ulaşan
  alet ise alanı OKUMUYOR.***

  📌 **VE ASIL DERS: BAŞARILI YARIM, BAŞARISIZ YARIMI ÖRTÜYOR.**
  `k` yarısı 38/38 indiği için dosya *"uygulandı"* görünüyor; `m` yarısı
  0/38 indi ve **hiçbir yerde iz yok** — çünkü aletin raporu
  (`uygulandi`/`zaten-boyle`/`atlanan`) `m`den hiç söz etmiyor, zira `m`
  hiç **sorulmadı**. Bir tamamlanma kontrolü `k` üzerinden **%100** der.
  🟢 Sınav ölçütü: ***alet SÜZGEÇ mi İZDÜŞÜM mü yapıyor?***

  🟢 **VE ÖLÇEN OTURUM BİR ADAYI YAYINLAMADAN ÇÜRÜTTÜ:**
  `data/yer_yama_kademe_zincir.js` (17 kayıt) sabit listede yoktu ve
  *"17 kayıt görünmez"* gibi duruyordu. Ölçüldü — **çürüdü**: dosya adı
  *"kademe"* diyor ama içeriği bir `m:` yaması (`ad` + `m` + `kaynak`),
  ve doğru sahibi `_sahiplik_uygula.py`; kuru koşu iniyor, 17'sinde de
  fark 0.
  📌 *"Bir glob bir ad sözleşmesidir"* dersinin **aynası**: orada ad
  dosyayı yanlış **alete** teslim ediyordu, burada ad **ölçümü** yanlış
  kola yolluyor — ve sevki yazan koordinatör de aynı ada aldanmıştı.

