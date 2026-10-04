# SONRA1923-HAYALET-1004 — dönem, sahibinin künye ömrünün DIŞINA taşıyor: boyut + denetimin körlüğü

Görev: YILDIRIM BAYEZIT, 4 Ekim 2026 (send_message). Yalnız ölçüm; veriye yazılmadı.
Ortam: her betik başında/sonunda `git rev-parse HEAD` + ilgili dosyalarda yerel değişiklik basıldı.
```
hayalet.py   HEAD başta 82de7461… · sonda 82de7461… · devletler.js/yerlesimler*/girdi.py/denetle.py yerel değişiklik YOK
hayalet2.py  HEAD başta 00ba9cb5… · sonda 00ba9cb5…   (arada başka oturumların commit'i; iki koşu AYNI sayıları verdi: 127/324/5)
```

## 1. HÜKÜM

### ② "NİÇİN 4c/4d GÖRMÜYOR" — 🔴 GÖRÜYOR. Kör olan DURUM satırı.
Kod okundu (`arac/denetle.py:2427-2561 degismez4`, `:5160-5261` basım) ve **gerçek işlev çağrıldı**:
```
denetle.degismez4(Y):  hayalet 5 · 4c asan 127 (tavan 127) · 4d once 324 (tavan 324) · künyesiz 0
Elba, Seringapatam, Meysûr, Bangalor, Mandu, Uccayn, Asâyita, Sohum  →  8/8 4c listesinde VAR
```
- 4c dalı (`:2546-2550`): `kt < ATLAS_SONU` ve `dönem.t − künye.t > 400 gün` ⇒ `asan`. Elba
  (piombino, künye 1548, dönem 1923'e) bu koşulu 375 yıl farkla geçiyor ve **sayılıyor**.
- Durum satırı (`:5162-5164`): `"✓" if n4c <= BEKLENEN_ASAN`. Ölçüm **127**, tavan **127**
  (`:2281`) ⇒ **✓**. 4d aynı: 324 = 324 (`:2382`).
- ⇒ Kusur **sayılıyor ama TAVANA GÖMÜLÜ.** Tavanın kendi yorumu bunu açıkça söylüyor:
  *"Tavan bir DOĞRULUK BEYANI değil, bir BORÇ DAMGASIDIR"* (`:2240`). Yani denetim kaçırmıyor;
  **borç olarak dondurulmuş** ve dondurulmuş borç "✓" basıyor.

### 🔴 ASIL KÖRLÜK — ölçüldü, ikisi kodda
1. **Tavan SAYIDIR, LİSTE DEĞİL.** `BEKLENEN_ASAN = 127` bir tamsayı. Bir hayalet düzeltilirken
   başka bir yerde yenisi doğarsa sayı 127'de kalır ⇒ **YENİ hayalet sessizce ✓ alır.** Proje bu
   dersi odak kapısında zaten öğrendi (`CLAUDE.md §9`: *"bilinen borç `ODAK-TAVAN.json`
   `bilinen_kusur` LİSTESİNDE adıyla — sayı değil liste: borç kapanırken yenisi yerine geçemez"*);
   4c/4d'ye uygulanmamış. 📌 Öneri (uygulanmadı, `denetle.py` benim değil): 4c/4d tavanını
   `(nokta, kimlik, f)` listesine çevir.
2. **`v:` (tâbi) katmanı HİÇ TARANMIYOR** (`:2480-2481` yalnız `s:` + `isg:`). Kendi taramamda
   `v:`: kimliği olan dönemlerde taşma **0**, ama **78 `v:` dönemi `kid`'siz** (ör. Tabarka) ⇒
   künyeye bağlanamıyor, **ölçülemedi**. Bu kova denetimde hiç görünmüyor.
3. (Tasarım, kusur değil) 400 günlük tolerans (`:2128`) — 13 aydan kısa taşmalar sayılmıyor;
   sayısı ölçülmedi.

### ① TAM TARAMA — boyut (`s:` + `isg:` + `v:`, `girdi.yukle()` + denetle'nin kendi künye çözümü)
```
kova                              dönem   nokta   dönem-yılı   büyüklük (<5 · 5-50 · ≥50 yıl)
→ İLERİ taşma (4c, ölü devlet)     127     124       2.900     28 · 82 · 17
← GERİ taşma  (4d, doğmamış)       324     317      15.829    193 · 39 · 92
↔ iki yönlü   (4c ∩ 4d)              5       5     (ikisinde de sayılı — toplanmaz)
⛔ TAMAMEN DIŞARIDA (hayalet)         5       5          —      hepsi `iran` kimliği; dönem künyeden 415-424 yıl ÖNCE bitiyor
⚪ ölçülemedi (`v:` kid'siz)          78       —          —
BİRLEŞİK taşan nokta                        418  (4298'in %9,7'si)
```
Kendi taramam denetle ile mutabık: 122 yalnız-ileri + 5 iki yönlü = **127** (4c) · 319 yalnız-geri
+ 5 = **324** (4d) · 5 tamamen dışarıda = hayalet. Hiçbir `isg:` dönemi taşmıyor.

📌 `ONCE1281-SEKIL`in bağımsız bulgusu (103 nokta, adal 37 · napoli 24 · somali 21) **bu tablonun
4d satırıyla AYNI SINIF ve aynı sayılar** (benim ölçümüm: adal 36+1 iki yönlü · napoli 24 · somali 21).
İki oturum aynı borcu iki uçtan gördü; denetim ise onu 324'lük tavanda tutuyor.

## 2. İleri taşma (4c) — "bugün yanlış boyanan toprak" — en ağır 15 kimlik
Dönem-yılı = taşma yılı × dönem. Bu kova **ölü bir devletin boyası** demektir; çaresi `§3.5`
①/③ (kısalt ya da ardıl — kısaltmak delik açabilir).
```
  376  piombino            1 dönem · en büyük 375,8 yıl   (Elba → 1923)
  373  meysur              3 · 124,5                      (Mysore, Seringapatam, Bangalor)
  276  maratha             4 · 105,4                      (Mandu, Uccayn …)
  241  macaristan         14 · 40,0                       (künye 1526 Mohaç; Habsburg Macaristanı?)
  224  pagan              14 · 16,0
  204  singhasari          4 · 51,0
  177  filipin-racaliklari 6 · 63,5
  168  artuklu             3 · 56,0
  131  ilhanli            12 · 18,0
  126  kazak-hanligi       6 · 21,0
  115  malaka-sultanligi   7 · 16,4
   57  mataram-sultanligi  1 · 56,5
   48  bengal-sultanligi   3 · 16,0
   47  benihalid           4 · 11,7
   40  yuan-hanedani       3 · 13,3
```
17 dönem ≥ 50 yıl — bunlar "teslim gecikmesi" olamaz; kimlik yanlış (ardıl yazılmamış).

## 3. Geri taşma (4d) — ilk 15 kimlik
Bu kova çoğu zaman **künyenin `f:`si dar** demektir (`denetle.py:2309`: *"çare: çoğu zaman künyeyi
GENİŞLET"*) — yani boya büyük olasılıkla doğru, künye eksik. Ama ≥50 yıllık 92 dönem ayrıca
sınıflandırılmalı (`§3.5`: önce SINIFLANDIRMA).
```
 4958  adal               37 dönem · en büyük 134,0 yıl   (künye 1415; dönemler 1281'den)
 4599  somali             21 · 219,0                      (künye 1500)
 1748  umman              18 · 113,0                      (künye 1624)
 1211  sardinya            3 · 439,6   ← tek kimlikte 440 yıl
  467  zend              132 · 3,5     (sayıca en büyük, büyüklükçe küçük — TEK karar × 132 kayıt)
  466  meysur              3 · 195,9   (iki yönlü)
  324  arnavutluk          2 · 162,0
  278  aztek-imparatorlugu 3 · 147,0
  253  sih-imparatorlugu   7 · 37,2
  218  kaffa               2 · 109,0
  176  sulu-sultanligi     1 · 176,0
  157  inka-imparatorlugu  1 · 157,0
  148  ryukyu              1 · 148,0
   88  kuzey-yuan          1 · 87,7
   87  brunei-sultanligi   1 · 87,0
```

## 4. ⛔ Tamamen dışarıda (5) — kimlik çakışması şüphesi
Tarki, Ağraham burnu, Derbend (1281-1501/1509), Dihistan ovası, Kızılarvat (1507-1510):
`s:{d:"iran"}` ⇒ `iran` **id'si** olan künye **1925-12-12**'de başlıyor ⇒ dönem 415-424 yıl
önce bitiyor. Kimlik çözümünde `id` kazanır (`:2489`), `harita:` sonra bakılır — bu noktalar
muhtemelen bir `harita:"iran"` boya anahtarını (Safevi/Akkoyunlu/İlhanlı ailesi?) kastediyor ama
1925 İran künyesine düşüyor. **Ölçmedim, şüphe.** `BEKLENEN_HAYALET` tavanında (5) donuk.

## 5. Öngörü (bu görev için yazılmadı — düzeltme)
Bu turda ölçümden önce öngörü YAZMADIM (sevk istemedi ama protokol istiyor). Örtük varsayımım
koordinatörünkiyle aynıydı: "4c/4d bunları kaçırıyor" — **yanlış çıktı**; görüyor, tavan gömüyor.

## 6. Sınırlar
- `d:` (Osmanlı doğrudan) katmanının künyesi yok ⇒ taranmadı (çekirdek).
- 400 günden kısa taşmalar sayılmadı (denetle ile aynı tolerans, bilerek).
- "Hangisi gerçekten yanlış boya" sınıflandırması yapılmadı — 4d'nin çoğu künye genişletmesi,
  4c'nin ≥50 yıllıkları kimlik hatası olası; her biri `§3.5` ile tek tek sınıflanmalı.
- Betikler scratchpad'de (`hayalet.py`, `hayalet2.py`); veri dosyalarına dokunmadı, koşu sırasında
  yalnız okundu.
