# KASA-CHABOT-SINOD-1010 — Synodicon Orientale piskoposluk listelerinde Sümer kutusu şehirleri + Râşidîn ardılı

Görev: YILDIRIM BAYEZIT (SASANI kararı (c)(d)) · Araştırmacı: KASA · `data/` DONUK.
İki iş:
- **(A)** J.-B. Chabot, *Synodicon Orientale* (Paris 1902; archive.org OCR). Kutudaki BÜTÜN şehirler için yıllı sinod
  imzası taranır (410 · 420 · 424 · 486 · 497 · 544 · 554 · 576 · 585 · 605 · 612 …). Sinod imzası = Sâsânî kilise
  teşkilâtında şehrin piskoposluğu, yıllı ⇒ Y. Şehir ↔ Süryani ad özdeşliği **kaynakta** (Chabot dizini) yazılı
  olmalı; ajan/benim çıkarımım kabul edilmez (§6.2, Dēr dersi).
- **(B)** SASANI (c) şartı: Medâin/Huzistan ucunun ARDILI Râşidîn halifeliği — künyesi devletler.js'te var mı
  (TARANIR), yoksa adıyla bildirilir ve `__BOSLUK__` yazılır.

## 0. ÖNGÖRÜ (ölçümden ÖNCE, 2026-10-10)
**(A)**
- Chabot OCR'si archive.org'da tam metin olarak **erişilebilir (%85)**.
- Kutudaki 10 var noktadan (Susa hariç) sinod imzası bulunacak: **2 ± 1**.
  - Nippur %60 (Streck izi; Süryani "Nippur/Nuffar").
  - Kutha %35 ("Kūṯā").
  - Uruk/Orchoe %10 (4. yy terk).
  - Kiş, Borsippa, Dilbat, Sippar, Eridu, Larsa, İsin, Dēr: her biri ≤%15. Sâsânî piskoposlukları büyük
    merkezlerde (Kaşkar, Hîre, Perat d-Maişan, Beth Lapat), tell'lerde değil.
- Bağlı pay %24,3 → **%30-40** (Nippur tek başına +411 yıl ⇒ ~%36).
**(B)**
- Râşidîn künyesi devletler.js'te **VAR (%70)**: `hulefa-i-rasidin` / `rasidin` benzeri; ÜMEYYE'den önceki
  İslâm künyeleri atlasın TDV çekirdeğinde olmalı.
- Varsa f'si **632** (Hz. Ebû Bekir) ⇒ 637 ucuna ardıl olur, delik açılmaz. Yoksa `__BOSLUK__` 637 → Emevî f (661).

## 1. ÖLÇÜM

### 1.1 (A) Chabot taraması
- Kaynak: archive.org `ChabotSynodiconOrientale`, `chabot synodicon orientale_djvu.txt` (1.955.723 bayt OCR).
- Taranan: metin + dizin. Kutudaki şehirler ve Süryani/Fransızca varyantları: Nippur/Nuffar/Nifar · Kouta/Kūṯā ·
  Borsippa · Sippar · Ourak/Warka/Orkhoi · Dilbat · Eridu · Larsa/Dalasar · Isin · Kiš · Beit Daraye/Bedreh.
**Sonuç: Susa dışında hiçbir kutu şehri piskoposluk olarak geçmiyor.**
| şehir | Chabot'ta | hüküm |
|---|---|---|
| Nippur | yok (OCR varyantlarıyla da) | bulunamadı. Streck'in "8. Jh." izi Chabot'un sinod listelerinde YOK |
| Kutha | yok | bulunamadı |
| Uruk | "Isaac, évêque d'Ourak et de Kaskar" (s. 516-518) — **775** sinodu (Halife "Mohammed", el-Mehdî) | ⑧ **Uruk DEĞİL**: Kaşkar piskoposunun geleneksel İncil unvanı (Erek). Chabot dizini: "Ourak … Les ruines s'appellent aujourd'hui Warka" — yalnız ad açıklaması. Ayrıca pencere sonrası ve Uruk 4. yy'da terk edilmiş |
| Larsa | dizin "Dalasar … En réalité, elle doit l'être avec Larsa, dont les ruines sont au lieu aujourd'hui appelé Senkereh" | ⑧ İncil adının (Gen. 14) özdeşleştirmesi, piskoposluk DEĞİL |
| Ur | dizin "Our(kasdim) … à l'endroit appelé Mouqayyar" | ⑧ aynı (İncil adı) |
| Dēr | "Beit Daraye … arabe [Bādarāyā]; auj. **Bedreh**, à 150 kilom. environ à l'est de Bagdad" · piskoposlar 424 · 486 · 497 · 544 · 554 · 585 · 605 | 🔴 Chabot özdeşliği **Bedreh** (modern Badra) ile kuruyor, **Dēr/Tell Aqar ile DEĞİL**. İkinci adım (Dēr = Badra yakınındaki Tell Aqar) için kaynak bu turda YOK (RlA 1938 "Die Lage ist noch unbekannt") ⇒ iki adımlı zincirin ikinci halkası kaynaksız ⇒ **ALINMADI**. Ayrıca §6.2: modern kasaba ≠ tell |
| Kiş · Borsippa · Sippar · Dilbat · Eridu · İsin | yok | bulunamadı |
⚠️ Sâsânî Mezopotamya piskoposlukları büyük merkezlerde: Kaşkar · Hîrta (Hîre) · Perat d-Maišān · Beth Lapat.
Kutunun tell'leri bu ağda yok. Öngördüğüm desen doğru, büyüklüğü yanlış.

### 1.2 (B) Râşidîn ardılı — devletler.js TARANDI (main 5ba57827)
```
hulefa-yi-rasidin   f 0632-01-01  t 0661-01-01  "Hulefâ-yi Râşidîn Devri (Medine Hilâfeti)"   kaynak TDV hulefa-yi-rasidin (yıl)
emevi               f 0661-01-01  t 0750-08-05  "Emevî Hilâfeti"
abbasi              f 0749-11-28  t 1258-02-10
```
⇒ **Ardıl VAR.** Medâin ucu (0637-03-04) ve Huzistan ucu (0640) `hulefa-yi-rasidin` penceresinin İÇİNDE ⇒ uç
ardıl halkayla birlikte iner, **delik açılmaz** (SASANI (c) şartı karşılanıyor). Kutha `hulefa-yi-rasidin`
0637-03-04 → … ; Susa 0640 → … (ardıl halkanın kaynağı bölge cümlesi; şehir adlı DEĞİL, beyan).
🔴 **Yan bulgu — hicrî tuzak, iki künye daha:**
- **`emevi` f 0661-01-01:** künyenin KENDİ `kaynak:` alanı "TDV: emeviler: '41 yılı Rebîülevvel ayının sonlarında
  (Temmuz 661)'" diyor. 41 AH = 661-05-07 … 662-04-25 ⇒ **0661-01-01 kaynağın DIŞINDA** (yaklaşık 6 ay erken).
  Öneri: f ≈ Temmuz 661 (Rebîülevvel 41 sonu; `ay`).
- **`hulefa-yi-rasidin` f 0632-01-01:** 11 AH = 632-03-29 … 633-03-17; Hz. Peygamber'in vefatı 12 Rebîülevvel 11 ≈
  632-06-07 (tabular, Jülyen). ⇒ 0632-01-01 hicrî 11'in de, hilâfetin başının da DIŞINDA.
  ⚠️ TDV `hulefa-yi-rasidin` cümlesi bu turda ÇEKİLMEDİ ⇒ gün önerisi yok, yalnız işaret.
- Râşidîn t / Emevî f aynı yanlış günde (0661-01-01) ⇒ birbirine bitişik ama ikisi de kaynak dışı. Düzeltme ikisini
  BİRLİKTE kaydırmalı (Değişmez 1).

### 1.3 Sayılar ve öngörü
```
(A) sinod imzası bulunan kutu şehri (Susa hariç)   öngörü 2 ± 1   ölçüm 0   ✗
    Nippur %60                                                   yok        ✗
    Kutha %35                                                    yok        ✓ (olasılık yönü)
    "piskoposluklar büyük merkezlerde, tell'lerde değil"         ✓
    bağlı pay %24,3 → %30-40                                     %24,3 değişmedi ✗
(B) Râşidîn künyesi VAR %70                                      VAR ✓
    f 632, delik açılmaz                                         ✓ (ama f 0632-01-01 hicrî dışı)
```
Ders: SASANI turunda koordinatörle birlikte "imparatorluk iyi belgeli ⇒ şehir de iyi belgeli" diye ölçek karıştırmıştık.
Bu tur onun **kaynak sınıfı** versiyonu: "piskoposluk listesi şehir adı verir" doğru, ama yalnız piskoposluk olan
şehirler için. Kutunun tell'leri Sâsânî döneminde ya terk edilmiş ya köy.

## 2. ③ İSTİYORUM
a) **Uç + ardıl birlikte (SASANI (c) şartı karşılandı):**
   - Kutha `sasani` → 0637-03-04, ardından `hulefa-yi-rasidin`.
   - Susa `sasani` → 0640, ardından `hulefa-yi-rasidin`.
   - Kaynak alanına: "bölge cümlesi, şehir adı geçmiyor".
b) **İki künyede hicrî tuzak (beşinci ve altıncı vaka):**
   - `emevi` f 0661-01-01 → ~0661-07 (künyenin kendi kaynağı "Temmuz 661").
   - `hulefa-yi-rasidin` f 0632-01-01 → hicrî 11 içi (TDV cümlesi çekilip gün belirlenmeli).
   - Râşidîn t ile Emevî f birlikte kaydırılmalı.
   - Önerim: devletler.js'te `kaynak:`ında hicrî yıl taşıyan TÜM künyelerin f/t'si için toplu kesişim taraması.
     Tuzak bu gece altı kez çıktı, istisna değil desen.
c) **Dēr:** Beit Daraye = Bedreh (Chabot). Dēr ↔ Badra/Tell Aqar için kaynaklı ikinci adım bulunursa 7 yıllı sinod
   imzası (424-605) Dēr'e iki adımlı halka olarak girer. Hedefli tek bir arama yeterli (örn. RlA "Tell ʿAqar" ya da
   güncel Dēr yayınları).
