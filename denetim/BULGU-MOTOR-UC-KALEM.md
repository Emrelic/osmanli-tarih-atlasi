# MOTOR ÜÇ KALEM — yazım, sınav, ÖNGÖRÜ

**Oturum:** MOTOR ÜÇ KALEM (eski ad: ÇÖL BOYAMA) · **28 Ağustos 2026**
**Yazılan:** `arac/uret_petek.py` · **Dokunulmayan:** `renkler.py` · `girdi.py`
· `data/*` · `js/*`
🔴 **Koşuyu başlatmadım** — koordinatörün işi.

---

## 1. NE YAZILDI

### ① TAVAN_KM
```python
ESKİ  {1: 700, 2: 420, 3: 280, 4: 140, 0: 280}
YENİ  {1: 400, 2: 400, 3: 200, 4: 100, 0: 280}
```
Eski satır **silinmedi**, yorumda duruyor; k0 istisnasının gerekçesi
(Viyana · Venedik · Kiev) yazıldı.

### ③ ÇÖLDE EŞİK 4 → 8
`COL_PUAN_ESIK = 8` · `_col_icinde(j)` (önbellekli) · kapıda
`_esik = 8 if çölde else 4`. **Karne basılıyor:**
```
🏜 ÇÖL EŞİĞİ (4 → 8): N petek-gün ÇÖLDE TAKILDI · M çölde GEÇTİ · K nokta ölçüldü
```
📌 Sayaç şart: bu sayı **sıfır çıkarsa kural hiç ateşlememiş** demektir ve
o da bir bulgudur.

### B1 — 🟢 ZATEN VARDI, EKSİK YASAĞI EKLENDİ
`delikleri_doldur` iç adacıkları zaten dolduruyor ve `kasitli_bosluk`
muafiyeti içinde. **Yeniden yazılmadı.** Eklenen tek şey `sahip_ix=`
parametresi: halkanın içinde **bu devlete ait olmayan** yerleşim varsa
halka dolmaz. Üç çağrı yerine bağlandı.
⚠️ Ölçüt bilerek geniş: nokta o gün sahipsiz olsa bile halka korunur.
**Asimetri:** yanlış doldurmak başka devletin toprağını yutar ve geri
alınamaz; doldurmamak yalnız bugünkü davranışı sürdürür.

### B2 · B3 — YENİ (`gosterim_duzelt`)
```
B2  ana kütleye ≤800 km · KARASAL · arası boş → köprüyle bağla
B3  kapama artığından koridor adayı; d > w ise DİBİ doldur, AĞZI bırak
```
🔴 **Kapatma anahtarı: `MOTOR_B23_KAPALI=1`.** Sebebi risk asimetrisi — bu
iki kural **geometri üretiyor** (yeni toprak), ötekiler yalnız var olanı
sınıflıyor. Ve `gosterim_duzelt` patlarsa koşuyu öldürmüyor, uyarı basıp
geçiyor.

---

## 2. 🔴 SINAV ÜÇ KUSUR BULDU — ÜÇÜ DE BENİM KODUMDA

Sınav motoru koşturmadan yapıldı: blok `uret_petek.py`den **metin olarak**
alınıp izole ad alanında, **yayındaki gerçek Osmanlı gövdeleriyle**
çalıştırıldı (1600-06-15 · 1821-08-19).

| tur | kusur | belirti | çare |
|---|---|---|---|
| 1 | `KARA.buffer()` **döngü içinde** | sınav 10 dk'yı aştı | `prep(KARA)` + `covers` |
| 2 | 🔴 **ölçüt tersti** | `SIĞ bırakıldı = 1` | derinlik = `hausdorff(c, ağız)` |
| 3 | `disari.buffer()` bileşen başına (849×) | 65,8 sn | tampon `ağız`a + 2 km sadeleştirme |

### 2.1 İkinci kusur — ve niçin yalnız SAYAÇ onu ele verdi

B3'ün derinliği önce `d = çevre/2 − w` idi. İnce bir dilimde çevre alana
göre büyüktür ⇒ `çevre/2` **her zaman** `w`yi geçer. O formül **derinliği
değil inceliği** ölçüyordu:

```
İLK BİÇİM   dolduruldu 848 · SIĞ BIRAKILDI   1
DÜZELTİLMİŞ dolduruldu 213 · SIĞ BIRAKILDI 767
```
⇒ Kural, Emre'nin **açıkça korunmasını istediği** sığ girintileri de
dolduruyordu — yani **amacının tersini** yapıyordu.
🔴 **Ve alan artışı (+%1,19) makul göründüğü için sayıya bakarak
anlaşılmazdı.** Onu ele veren tek şey `SIĞ = 1` sayacıydı — şartnamenin
*"kapatılmayanı da say ve bas"* maddesi.

### 2.2 Sınavın son hâli

```
① GEÇME YOLU   kusursuz daire 302.950 → 302.950 km²  (fark %0,000)  ✓
② ATEŞLEME 1600-06-15  177 parça · 5.696.132 → 5.745.827  (+%0,87)  5,0 sn
      B2: birleşti 3 · DENİZ yasağı 167 · uzak 6 · yerleşim 0
      B3: dolduruldu 213 · SIĞ 767 · KAPALI DELİK 15 · yerleşim 0 · kb 0
② ATEŞLEME 1821-08-19  127 parça · 2.120.400 → 2.144.167  (+%1,12)  1,7 sn
      B2: birleşti 2 · deniz 116 · uzak 8
      B3: dolduruldu 107 · SIĞ 399 · KAPALI DELİK 11
```
**Maliyet: 65,8 → 14,0 → 5,0 sn** (aynı sonuçlarla).

---

## 3. 🔴 DEVRALDIĞIM ÖLÇÜM ÇÜRÜDÜ — TABAN DEĞİŞTİ

Şartname *"~8 nokta / 1243 etkilenir"* diyordu. Koordinatör 28 Ağustos'ta
bildirdi: **1128 kademe kaydı asıl veriye indi**, k dağılımı değişti.
O ölçüm **başka bir evrende** yapılmıştı. Yeniden ölçtüm:

```
EVREN 2607 nokta · 56 girdi dosyası
k0 236 · k1 258 · k2 206 · k3 1235 · k4 672
```

| kademe | nokta | medyan komşu | ESKİ tavan · çarpan | YENİ tavan · çarpan | fark |
|---|---|---|---|---|---|
| k1 | 258 | 85 km | 700 · 1 | 400 · 3 | +2 |
| k2 | 206 | 68 km | 420 · 1 | 400 · 1 | 0 |
| k3 | 1235 | 67 km | 280 · 1 | 200 · 9 | **+8** |
| k4 | 672 | 43 km | 140 · 4 | 100 · 14 | **+10** |
| k0 | 236 | **167 km** | 280 · 14 | 280 · 14 | 0 |
| **TOPLAM** | 2607 | | **21** | **41** | **+20** |

📌 **k0'ın medyan komşusu 167 km** — ötekilerin iki-dört katı. k0'ı 280'de
tutma kararı bu sayıyla haklı çıkıyor: k0 noktaları zaten seyrek olanlar.

⚠️ Ölçüt yaklaşık: `en yakın komşu / 2 > tavan`. Motor yöne duyarlı (A1b) ve
sürtünmeli mesafe kullanıyor ⇒ **"bağlar" hükmü güçlü, "bağlamaz" zayıf.**

---

## 4. ÖNGÖRÜ — KOŞUDAN ÖNCE, mazeretli/mazeretsiz AYRI

### 🔴 MAZERETİ YOK — tutmazsa bir varsayımım yanlış demektir

```
①  B1/B2/B3 kusursuz gövdeye DOKUNMAZ: geçme yolu %0,000 ölçüldü.
   Koşuda `gosterim_duzelt atlandi` uyarısı BASILMAMALI.
②  B3 sığ girintileri BIRAKIR: koşu karnesinde SIĞ/dolduruldu ≥ 2 olmalı
   (sınavda 767/213 = 3,6 ve 399/107 = 3,7).
③  DENİZ AŞIRI hiçbir enklav birleşmez: `b2_deniz` sayacı yüksek olmalı
   (sınavda 167 ve 116).
④  ÇÖL EŞİĞİ karnesi SIFIR OLMAMALI. Sıfırsa kural hiç ateşlememiştir.
⑤  TAVAN: yeni tavanın bağladığı fazladan nokta 20 civarı; yüzlerce değil.
⑥  🔴 OSMANLI DOĞRUDAN + TÂBİ TOPLAMI ~AYNI KALMALI (±%2).
   Sebebi ölçüldü: tavan daralmasının büyük kısmı OSMANLI DÜNYASININ
   DIŞINDA — en çok daralan üç nokta Lapaha (Tonga, en yakın komşu
   4.948 km!) · Perth · Cape Town. Osmanlı çekirdeğinde komşular 40-85 km
   ötede ve tavan zaten devreye girmiyor.
   ⚠️ Tutmazsa mazeret aramam: `TABI` kademesi tam bu sınavla geçti
   (27 Ağu: doğrudan −475.231 · tâbi +492.583 · TOPLAM +17.352 = %0,38).
```

### 🟡 MAZERETİ VAR — ölçüm yaklaşık, sapması açıklanabilir

```
⑦  Tavan daralmasının ÜST SINIRI 2.592.498 km² (bağlı 41 noktanın tavan
   alanları toplamı: 9.622.126 → 7.029.628, %26,9).
   MAZERET: gerçek hücre kara maskesiyle ve komşularla kesiliyor; ayrıca
   serbest kalan toprak DOLGU KAPISINA gidip geri boyanabiliyor.
   ⇒ Gerçek daralma bunun ÇOK ALTINDA çıkmalı. Üstünde çıkarsa tavanın
     alanı koruma kuralı çalışmıyor demektir.
⑧  Osmanlı gövdesi B2/B3 yüzünden kesitte ~%0,9-1,2 BÜYÜR.
   MAZERET: iki kesitten türetildi; 519 dönemin tamamı ölçülmedi.
⑨  Koşuya eklenen süre ~40-60 dk (5,0 sn × ~500 Osmanlı dönemi + daha
   küçük yabancı gövdeler).
   MAZERET: yabancı gövdelerin boyutu ölçülmedi.
```

### ⚠️ ÜÇÜNÜN BİRBİRİNE ETKİSİ — ters yönlere çekiyorlar

```
① tavanları kısar        → boşluk ARTAR
② B2/B3 boşluğu doldurur → boşluk AZALIR
③ çöl eşiği yükselir     → çölde doldurma ZORLAŞIR
```
🔴 **Öngörüm: net etki ÇÖLDE DARALMA, ÇÖL DIŞINDA ~NÖTR.** Çünkü ① ve ③
aynı yöne (daraltma) çalışıyor ve ikisi de çölde yoğunlaşıyor; ② ise
gövdenin içindeki koridorları kapatıyor, yani **zaten boyalı olanın
çevresinde** iş görüyor.
⚠️ Bu bir çıkarım, ölçüm değil — üçünü birlikte ölçmenin tek yolu koşu.

---

## 5. NE ÖLÇMEDİM

1. **Üçünün birlikte etkisi** — ayrı ayrı ölçüldü, birlikte ölçülmedi.
2. **Yabancı gövdelerde B2/B3 maliyeti** — yalnız Osmanlı gövdesi ölçüldü.
3. **519 dönemin tamamı** — iki kesit.
4. **B1'in yeni yasağının ateşlemesi** — sınavda `sahip_ix=None` geçildiği
   için o dal **hiç koşulmadı**. Koşuda `_B1_SAYAC` bunu gösterecek.
5. **`girdi.py:_cevir` düzeltmesinin etkisi** — koordinatör bildirdi,
   ölçmedim.
