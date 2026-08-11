# RENK DENİZ — İlerleme

## ADIM 1 — deniz rengini bul, ölç (BİTTİ)

**Deniz rengi kaynağı:** `js/app.js` — iki bağımsız yerde aynı hex:
- satır 567: `"zemin"` katmanı (MapLibre `background`, en altta)
- satır 604: `"g-gol"` katmanı (göl/deniz dolgusu, `fill-opacity: 1`)

İkisi de `#a8c8dc`, opaklık 1.0 (opak — blend gerekmiyor, deniz zaten saf hâliyle
ekranda).

**Ölçüm:** 327 kimliğin tamamı `renk_olc.py`'nin var olan `gorunen()` (ülke
rengi kendi opaklığında karaya bindirilmiş hâliyle) fonksiyonuyla denize karşı
ΔE (CIE76, Lab) ile ölçüldü.

```
ΔE < 10  →  12 kimlik
ΔE < 12  →  24 kimlik
ΔE < 15  →  38 kimlik   ← seçilen tanı eşiği (gerekçe aşağıda)
ΔE < 18  →  49 kimlik
ΔE < 20  →  70 kimlik
```

**Eşik seçimi — ΔE < 15, gerekçe:** `renk_olc.py`'de karadan (altlık `#e8dfc8`)
ayrışma eşiği zaten `DE_ALTLIK = 15`. Kara ve deniz atlasın iki EVRENSEL
zemini — her ikisi de her karede var, ikisine karşı görünürlük ölçütü simetrik
olmalı. Daha gevşek olamaz (brifingin kendi notu): deniz her gövdenin her
kenarında.

**Emre'nin adıyla andığı ikisi:**
```
delhi-sultanligi   ΔE_deniz 18,74   hex #00acc1 — turkmen · kavalali ·
                    ingiliz-hindistani · ingiliz-malaya ile PAYLAŞIMLI (5 kimlik)
almanya (Kutsal Roma/Almanya)  ΔE_deniz 13,43
```

**🔴 Bulgu — ölçüm ile çıkarım ayrı satır:**
Ölçüm: Delhi grubu (ΔE 18,74) salt ΔE'ye göre 38 kimlikten DAHA İYİ görünüyor
— strict ΔE<15 eşiğinin dışında kalıyor.
Çıkarım: Emre'nin onu yine de "gözü kanatıyor" diye işaret etmesinin sebebi
muhtemelen PARLAKLIK (L*) yakınlığı — ΔE toplam mesafeyi ölçüyor ama:
```
deniz L* 78,9
Delhi grubu L* 76,3  (fark 2,6)   ton farkı 52°
almanya   L* 80,7  (fark 1,8)   ton farkı 31,5°
```
İkisi de parlaklıkta denizle neredeyse özdeş; büyük mavi zeminin içinde "aynı
açıklıkta bir leke" gibi okunuyor, ton farklı olsa bile.

**Karar (koordinatöre bildirildi, onay bekleniyor/paralel ilerleniyor):**
Eşik ΔE<15 (38 kimlik) + Delhi grubu (5 kimlik, ayrı gerekçeyle) = **43 kimlik,
38 hex-değişim noktası** (bazıları paylaşımlı hex taşıyor, birlikte taşınacak).

## KOORDİNATÖR KARARI — DAL 2 (2026-08-12, gün ortası)

Adlandırılmış istisna ("Delhi'yi ayrıca ekleyeceğim") koordinatör tarafından
ÖLÇÜLEBİLİR KURALA çevrildi:
```
DAL 1   ΔE_deniz < 15                    (benim gerekçem: DE_ALTLIK zaten 15)
DAL 2   |ΔL*| < 4  VE  ΔE_deniz < 20     (benim L* bulgumun kural hâli)
```
Ölçüldü: DAL1 38 · DAL2 ek 18 · birleşim **56** (≤60 tavanı geçmedi, uygulandı).
Delhi grubu (turkmen/kavalali/delhi-sultanligi/ingiliz-hindistani/ingiliz-malaya,
#00acc1, ΔL*=2,65) DAL 2'ye KENDİLİĞİNDEN düştü — artık adla değil kuralla
yakalanıyor, doğrulandı. Almanya zaten DAL 1'deydi (ΔE 13,43).

## İLK DENEME İPTAL EDİLDİ (kayıt için — koordinatör "sessizce atma" dedi)

38-kimlik hedefli ilk çözücü koşusu (yalnız DAL1, adım-6 ızgara) ~4+ dakika
arka planda çalıştı ve TAMAMLANDI (0 çözülemeyen) ama sonuçları KULLANILMADI:
kapsam DAL2 ile 56'ya çıkınca hedef kümesi değişti, o koşu ESKİ 43 kimlik
(38+Delhi-adıyla) üzerineydi. Ayrıca o koşuda seçilen renkler `uyum()`
(palete-en-yakın tercih) yüzünden hep AYNI yeşil/mor köşeye yığılıyordu
(#2ad22a, #2ad230, #2ad236, #2ad23c… — art arda 15+ farklı kimlik neredeyse
AYNI görünürdü). Bu şartnamede yoktu, ben fark ettim ve ikinci (nihai)
çözücüye KÜRESEL ÇEŞİTLİLİK şartı ekledim: her yeni renk, o turda ATANMIŞ
TÜM renklerden de ΔE≥12 olmalı (yalnız kendi Voronoi/1500km engelinden değil).
Gerekçe koda yazıldı (`renk_deniz_final.py` betiğinde, bkz. aşağıdaki dosya).

## ADIM 2 — düzelt (BİTTİ)

Yöntem: `renk_olc.py`'nin primitiflerini (h2r/bind/lab/dE/gorunen/ton/uyum/
komsuluk/engel_kumesi) İÇE AKTARDIM, kendim yeniden yazmadım. Üstüne yeni
filtreler eklendi (scratchpad çözücüde, `renk_olc.py`de DEĞİL — o yalnız
sabitleri/ölçütü taşıyor):
- ΔE(aday, deniz) ≥ 20 (DE_DENIZ_GENIS — tanı eşiğinin üstünde güvenlik payı)
- ton(aday) ∉ [15°, 35°] — Osmanlı'ya ayrılmış kırmızı şerit (renkler.py'nin
  kendi belgelenmiş kuralı, `letonya`/`kaffa` yorumlarında yazılı)
- KÜRESEL ÇEŞİTLİLİK: yeni renk, bu turda atanmış TÜM renklerden ΔE≥12

Engel kümesi: `engel_kumesi()` (1500 km "AYNA", künye penceresi) — Voronoi
komşuluğundan daha geniş, çünkü 44 hex-grubu (56 kimlik) BİRDEN değişti.

Sıralama: en çok kısıtlı (engel kümesi en büyük) grup ÖNCE çözüldü (klasik
graf-renklendirme sezgisi). En büyük engel: turkmen/delhi grubu (132),
fransa (137), almanya (111), macaristan (103), babur/darfur (101).

**SONUÇ: 44/44 grup çözüldü, 0 ÇÖZÜLEMEYEN.** Küresel çeşitlilik doğrulaması
(56 yeni renk BİRBİRİNE karşı, yalnız kendi engeline değil): hepsi ΔE≥12,
temiz. `deniz_secim_final.json` artefaktı scratchpad'de.

`arac/renkler.py`ye YAZILDI: 56 kimlik satırı (script ile, elle sed/heredoc
DEĞİL — CLAUDE.md §11) + 3 PAYLAŞIM beyanı güncellendi (hex-anahtar değişti,
üye listesi ve bağ AYNI kaldı):
```
#6ba0a0 → #a828d8   (8 üye: zeyyani/abd/ayutthaya/edo-bakufu/kamakura/
                     maratha/muromachi/siyam-chakri)
#00acc1 → #20d820   (5 üye: turkmen/kavalali/DELHİ SULTANLIĞI/
                     ingiliz-hindistani/ingiliz-malaya)
#0288d1 → #2820d8   (2 üye: darfur/babur-imparatorlugu)
```
`almanya` (Kutsal Roma/Almanya) tekil: #16c6fe → #78d028.

`arac/renk_olc.py`ye eklendi (koordinatör izniyle — döngüsel import gerekçesiyle
renkler.py'ye konamazdı):
- `_deniz_oku()`: deniz rengini `js/app.js`ten OKUR (sabit yazılmadı), "zemin"
  ve "g-gol" katmanlarını çapraz doğrular, ayrışırsa/opak değilse SystemExit
- `DENIZ_HEX`/`DENIZ`/`DENIZ_LAB`, `DE_DENIZ=15` · `DL_DENIZ=4` ·
  `DE_DENIZ_GENIS=20` sabitleri, gerekçeleriyle
- `deniz_ihlal()` fonksiyonu — DAL1/DAL2/birleşim döndürür
- `denetle()`'ye YENİ bir rapor bloğu ("DENİZLE KARIŞAN") — "ALTLIKTAN
  AYRIŞMAYAN" bloğunun simetriği, ÇIKIŞ KODUNU ETKİLEMEZ (bilgi amaçlı,
  `_opaklik_dogrula`/`_paylasim_dogrula` ile aynı gerekçe)

## DENETİM SONUCU (`py arac/renk_olc.py`, tam koşu)

```
canlı veri 2362 nokta · 327 kimlik
ALTLIKTAN AYRIŞMAYAN        0 kimlik
DENİZLE KARIŞAN             0 (DAL1 0 · DAL2 ek 0 · birleşim 0)   ← YENİ blok, TEMİZ
KOMŞUSUYLA ÇAKIŞAN          0 çift
AYNI ANAHTAR ÖRTÜŞEN        0 çift
AYNI HEX ÇAKIŞAN            0 çift
YAKIN AMA DEĞMEYEN          7 ihlal (PRE-EXISTING, benim 56 kimlikle İLGİSİZ:
                             hollanda↔sardinya · ceneviz↔teke · eflak↔teodoro ·
                             ramazanoglu↔sovalye · aydin↔sirbistan ·
                             musa-celebi↔napoli · avusturya↔siena —
                             tavan 72'nin çok altında, benim scope'umda değil)
PAYLAŞIM self-check          sessiz (UYARI yok — 3 beyan güncellemesi tutarlı)
OPAKLIK self-check           sessiz (UYARI yok)
```

## İKİNCİ GEÇİŞ (sıra etkisi)

Klasik "aynı hedefi ikinci kez çöz" yerine DAHA GÜÇLÜ bir doğrulama yapıldı:
`denetle()` komşuluğu TAZE hesapladı (üretim sırasında kullanılan 1500km
"ayna" engel kümelerinden BAĞIMSIZ, gerçek Voronoi + gün-bazlı örtüşme) ve
YAZILMIŞ NİHAİ paleti sıfırdan ölçtü — 0 çakışma. Bu, üretim-zamanlı engel
kümelerinin gerçek dünyada da tuttuğunun bağımsız kanıtı. Ayrıca solve
sırasında 56 yeni rengin BİRBİRİNE karşı (yalnız kendi engeline değil)
küresel ΔE≥12 doğrulaması da ayrıca yapıldı ve temiz çıktı.
**ÇÖZÜLEMEYEN 0 — cins sınıflandırması (tercih/yapı/sıra) gerekmiyor.**

## BİTİŞ ÖLÇÜTÜ

```
✅ deniz rengi ÖLÇÜLDÜ (#a8c8dc) ve nereden geldiği yazıldı (js/app.js,
   "zemin" + "g-gol", iki bağımsız yer, aynı hex)
✅ BOYALAR'ın tamamı (327) denize karşı ölçüldü — DAL1 38 · DAL2 ek 18 · 56
✅ düzeltilenler: 56 kimlik (44 hex-değişim noktası) · hepsi listeli
   (`deniz_secim_final.json`) · yeni ΔE'ler denetimde TEMİZ
✅ çözülemeyen YOK (44/44 çözüldü)
✅ renk_olc.py TEMİZ — 0 görünmez · 0 çakışma · 0 aynı-hex · DENİZLE KARIŞAN 0
✅ Delhi Sultanlığı (#00acc1→#20d820, DAL2, ΔL*=2,65) ve Kutsal Roma Germen/
   Almanya (#16c6fe→#78d028, DAL1, ΔE=13,43) ADIYLA yukarıda
```

## TESLİM — commit YAPMADIM

`arac/renkler.py` ve `arac/renk_olc.py` DEĞİŞTİRİLDİ ama commit EDİLMEDİ —
proje kuralı: commit yalnız Oturum 0'dan, benim tek istisnam kendi bu
ilerleme dosyam. Koordinatöre TESLİM mesajı gönderildi.
