# D237 — Şehir bölgesi ülke sınırını aşamaz (Değişmez 8)

**Slogan:** D hattı DOĞRU çizilmiş olabilir; onu aşan şey motorun gövdesidir. Kural
hattı değil GÖVDEYİ sorgular, tavanla girer, çıktıyı ölçtüğünü açıkça söyler.

## Vaka (27 Eylül 2026, DEGISMEZ-0086)
Emre H-0069: *"türkiye bulgaristan sınırı D kalite belirlenmiş ama bu sınırı geçen aşan
şehir bölgeleri var, bu olamaz."* H-0086: *"… düzeltelim ve genel kural olarak yazalım."*
`AVRUPA-SINIR-0077` ölçtü: 1920-04-23'te `d1920-tbmm-bg` hattını 10 petek aşıyor (Edirne
TR→BG 20 km); ayrıca `BOLGELER` Edirne k1 poligonunun ~21.958 km²'si Bulgar gövdesinde.
Hatların kendisinde kusur yoktu — gövde hatta yaslanmıyordu.

## Kural nasıl kuruldu
- **Tek kural, iki soru, iki tavan.** 8a PETEK × D HATTI (kök: A katmanı, nokta) ·
  8b BÖLGE × GÖVDE (kök: bölge poligonu zamansız). Tek sayıda biri iner öbürü çıkar.
- **Tavanla girildi** (8a 1611 · 8b 83, koşu 15 gövdesi). Sıfırla girilseydi `denetle.py`
  yayını bloke ederdi. Tavan dondurmadır; artış ihlal, iniş "TAVAN GEVŞEK".
- **Defter (2t kalıbı):** tavanın evreni o günün hat kümesidir. Yeni D hattının taşması
  "YENİ KAPSAM" kovasında adıyla basılır — ham gövde D hattını tanımadığı için ölçülen
  (hat, gün)ların %94'ünde taşma var; her doğru D eklemesi aksi hâlde yayını durdururdu.
- **Muafiyetler yazılı:** eksklav (hatta değmeyen parça) · menderes (iki yakanın şeridi
  çakışan yer) · `__BOSLUK__` · tâbi (8b) · çöl/dolgu (gövdesiz) · `isg:` (motor okumaz).
  C/YOK hatları ayrı kovada (belge kaba / çizilmez) — sayılır, ihlal değildir.

## İki tuzak — ikisi de yaşandı
1. **Şartnamenin negatif kontrolü ters okunmuştu.** "be-lu %0" LU yanında DOĞRU sahibin
   oranıydı, yani yan TAMAMEN taşmış. Temiz sanılan vaka ateşleme vakasıydı. Negatif
   kontrol başka yerden kuruldu: fr-de'nin Almanya→Fransa yanı + yapay yaslı hat.
   *Yüzde okunurken payının ne olduğu sorulur.*
2. **Öngörüler çürüdü, kayda geçti:** 8a ~600 dedim, 1611 çıktı (C dahil 3058); 8b ~8 dedim,
   83 çıktı. İlk sürüm 8 dk sürdü (öngörü ≤ 90 sn) — vektörleştirilince 66 sn.

## Bu soru motor ÇIKTISINI ölçer
Öteki değişmezler girdiyi okur; 8 `devletler_harita.js`/`donemler.js`/`bolgeler.js`i
okur. Veri düzeltmesinin etkisi ancak bir sonraki koşudan sonra görünür; satır gövde
damgasını basar. Tarayıcı yaslaması (`js/d_katman.js`, E/F) ekrandaki DOLGUYU düzeltir,
ham gövde çizgisini düzeltmez — Emre'nin gördüğü de gövde parçası çizgisiydi.

Ayrıntı ve sayılar: `denetim/DEGISMEZ-0086.md` · sınav `denetim/DEGISMEZ-0086-sinav.py`.
