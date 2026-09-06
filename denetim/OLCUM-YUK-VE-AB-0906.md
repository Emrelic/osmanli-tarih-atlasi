# SİTE YÜKÜ ve A/B — İKİ SORU, TEK ÇÖZÜM

> **1.MURAT (Oturum 0) · 6 Eylül 2026 · ÖLÇÜM.**
> Emre iki şey sordu: *"Ⓑ'yi ölç, ek süreyi ve çıktı boyutunu rakamla
> getir"* ve *"siteyi görüntülerken donma yavaşlık takılma olmamalı…
> bunu engelleyen yapılar var mı?"*
> Ölçüm ikisinin **aynı kökten** geldiğini gösterdi.

---

## ① 🔴 BUGÜNKÜ YÜK — 105 MB, 184 SCRIPT

```
tarayıcıya inen dosya : 180   ·   <script> etiketi : 184
TOPLAM                : 104,93 MB
```
| MB | dosya |
|---|---|
| **53,74** | `data/devletler_harita.js` |
| **31,99** | `data/donemler.js` |
| **10,54** | `data/altlik.js` |
| 0,77 | `data/devletler.js` |
| 0,46 | `js/app.js` |

```
GEOMETRİ (koşunun ürettiği)      96,64 MB   (%92)
ÖTEKİ (yerleşim·kronoloji·dizin)  8,29 MB   (%8)
```

## ② 🔴 VE ASIL DARBOĞAZ İNDİRME DEĞİL — **AYRIŞTIRMA**

Node'da ölçüldü (tarayıcı benzer ya da daha yavaş):
```
devletler_harita.js   →  5.472 ms  ayrıştırma
donemler.js           →  3.678 ms
                         ─────────
yalnız bu ikisi          ~9,2 SANİYE saf JS ayrıştırma
```
Bunlar **`<script>` etiketiyle** yükleniyor, yani tarayıcı 105 MB'ı
**JavaScript kaynak kodu** olarak ayrıştırıyor — ana iş parçacığında,
bloke ederek. Emre'nin gördüğü donma budur.

**İçerik ölçüldü:**
```
DEVLET_PARCALAR      53.100 öğe        DEVLET_PARCA_HALKA  48.064
PETEKLER              3.805            PARCALAR             4.274
DONEMLER                537            DEVLET_HARITA          541
```
🔴 **Ve harita bir seferde TEK BİR TARİHİ gösteriyor.** 541 devletin
53.100 parçası **hepsi birden** belleğe alınıyor; ekranda o an kullanılan
pay bunun küçük bir kesri.

---

## ③ Ⓑ'NİN İKİ SAYISI

**ÇIKTI BOYUTU — ölçüldü:**
```
B sürümü YALNIZ geometriyi ikizler      +96,64 MB
ikisi BİRLİKTE inerse                   201,57 MB
TEMBEL yüklenirse (tek sürüm)           104,93 MB   ← DEĞİŞİKLİK YOK
```
⇒ **Emre'nin "iki versiyon yük olarak durmasın" şartı bir tercih değil,
bir ZORUNLULUK.** Birlikte indirmek yükü **iki katına** çıkarır.

**EK SÜRE — ölçülmedi, ama ÜST SINIRI biliniyor ve küçük:**
`uret_petek.py:4540-4541`de A ve B sürümleri **aynı noktada elde
duruyor**:
```python
g = delikleri_doldur(kapat(g), sahip_ix=aktif)   # B1  → A sürümü buradan
g = gosterim_duzelt(g, aktif)                    # B2+B3
```
B sürümü `kapat(g)`, A sürümü düzeltilmiş hâl. ⇒ **Geometri YENİDEN
HESAPLANMIYOR**; ek maliyet yalnızca ikinci bir dosya kümesini
**yazmak** — 97 MB'lık bir I/O, dakikalar mertebesinde, 16-20 saatlik
koşunun yanında ihmal edilebilir.
⚠️ Kesin saniyeyi **ölçmedim**; ölçmenin tek yolu değişikliği yapıp
koşturmak, ve motor şu an donuk (koşu 7b sürüyor).

---

## ④ 🟢 İKİ SORU AYNI ÇÖZÜME ÇIKIYOR

Emre'nin *"switch ile sürüm değişsin, ikisi birden yük olmasın"* isteği
ile *"donma olmasın"* isteği **aynı değişikliği** gerektiriyor:

```
BUGÜN     geometri <script> ile, 184 etiket, JS KAYNAĞI olarak ayrıştırılıyor
ÇÖZÜM     geometri <script>ten ÇIKAR, fetch() ile JSON olarak İSTENDİĞİNDE insin
```
Bunun üç kazancı birden var:
```
🟢 A/B ANAHTARI mümkün olur — hangi sürüm seçiliyse O inecek
🟢 AYRIŞTIRMA hızlanır — `JSON.parse` yerel koddur, JS kaynak
   ayrıştırmasından tipik olarak KAT KAT hızlı
🟢 BLOKE KALKAR — fetch asenkron; harita önce açılır, geometri sonra iner
```

## ⑤ ÖLÇÜLMÜŞ İKİNCİ KADEME — tarihe göre bölme
`DEVLET_PARCALAR` 53.100 öğe ve harita tek tarih gösteriyor. Geometri
**dönem aralıklarına** bölünürse (örn. yüzyıl başına bir dosya) açılışta
inen pay bir kesre düşer.
⚠️ Bölmenin **doğru ekseni ölçülmedi**: tarih mi, bölge mi, zoom mu?
Yanlış eksende bölmek her tarih değişiminde yeni bir indirme doğurur ve
**oynatmayı bugünkünden yavaşlatır.**

## ⑥ ÖLÇMEDİĞİM
- `altlik.js` (10,54 MB) ayrıştırma süresi.
- Kronoloji **oynatılırken** ne oluyor: veri zaten bellekteyse
  yavaşlık ayrıştırmada değil **yeniden çizimde**dir. Bu ayrı bir ölçüm
  ve tarayıcıda yapılmalı (koşu CPU'yu paylaşırken anlamlı çıkmaz).
- `gzip` etkisi: GitHub Pages metni sıkıştırarak sunar ⇒ **indirme**
  105 MB'ın altında. Ama **ayrıştırma** sıkıştırılmamış boyut üzerinden
  olur; yani gzip donmayı çözmez.
