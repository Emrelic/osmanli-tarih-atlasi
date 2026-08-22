# KUZEY AFRİKA KRONOLOJİ — ilerleme

Koordinatör: OSMANGAZİ. Dosya: `data/kronoloji_kuzeyafrika.js` →
`window.KRONOLOJI_KUZEYAFRIKA`. Beş künye: `merini` · `sadi` (Fas'ın
1549-1659 hanedan katmanı) · `hafsi` · `zeyyani` · `trablusgarp-ocagi`.

## İLK TUR — 22 Ağustos 2026

### ① madde sayısı
0 → **83 madde**. Beş künye arası dağılım: Merînî 24 · Sâdî 22 ·
Hafsî 12 · Zeyyânî 16 · Trablusgarp Ocağı 11 (sınırlar tam kesin değil,
bazı olaylar iki künyeyi birden ilgilendiriyor — bkz. çapraz referanslı
1337/1348/1358/1360 Tilimsan olayları).
Ömür/madde oranı düşük çıkıyor (ör. Merînî 353 yıl / 24 madde ≈ 0,07/yıl,
ölçüt 1,9/yıl'ın çok altında) — kaynağın TDV'nin tek maddesinden
**verdiği** kadarı bu; §1'in kuralı gereği zorlanmadı.

### ② konu dağılımı — 🔴 DENGESİZ, açıkça bildiriyorum
```
askeri/siyasi/toprak/antlaşma/isyan/hükümdar/hanedan   69/83  (%83)
idari                                                    4/83  (%5)
bilim + din                                              4/83  (%5)
kültür (mimari)                                          4/83  (%5)
ekonomi                                                  2/83  (%2)
sosyal                                                   0/83  (%0)
```
Hedef karışım (§2) 40/15/15/15/10/5 idi; bu tur **klasik siyasi-askeri
ağırlıklı hata** ile yazıldı — TDV'nin hanedan maddeleri doğası gereği
siyasi/askeri anlatı yoğun, ben de ilk turda ona bağlı kaldım. Sosyal
madde SIFIR — sonraki tur özellikle Amazigh/Berberî kimliği, veba/kıtlık,
tarım-kervan ticareti, sûfî tarikatları (özellikle Fas'ta önemli),
medrese ağının genişliği gibi eksenlere yönelecek.

### ③ onem/dunya dağılımı
```
onem   5:33 · 4:19 · 3:21 · 2:10 · 1:0
dunya  4:9  · 3:18 · 2:33 · 1:23
```
dunya:5 hiç verilmedi (bölge dışını değiştiren tek olay yok, en yükseği
Vâdilmehâzin/Tondibi/Tunus'un el değiştirmeleri — 4). Bu dosya dunya
değerlerini İLK KEZ atıyor; `data/olaylar*.js` ve `savaslar.js` ile
ÇAPRAZ KONTROL EDİLMEDİ.

### ④ kapsam
ic: 26 · dis: 57

### ⑤ yer_id
Dolu: 59/83. Boş: 24/83 — sebep VAR (uydurma değil), üçü ayrı sınıf:
```
① yerleşim veri tabanında YOK  (14 madde)
   Sûs bölgesi · Sicilmâse · Selâ · Fâzâz · Vâdilmehâzin/Ksar el-Kebir
   (1578 savaş alanı — ÖNEMLİ EKSİK) · Meknas/Miknas (Mevlây İsmâil
   başkenti, bu turda hiç kullanılmadı ama gelecek turda kritik) ·
   Safi · Azemmûr · Bâdis · Kasrüssagīr
② İMPARATORLUK ÇAPINDA / kişiye bağlı, yer belirsiz  (7 madde)
   hanedan içi taht kavgaları, ölümler, ordu reformu gibi maddeler
③ ⚠️ ÖZEL UYARI — "Derna dağları" (Muhammed eş-Şeyh'in 1557 ölümü)
   atlasın DERNE (Libya) noktasıyla KARIŞTIRILMASIN diye BİLEREK
   yer_id:"" bırakıldı; TDV'deki yer Fas içinde bir dağlık, Libya'daki
   Derne değil.
```
🔴 En kritik eksik **Vâdilmehâzin/Ksar el-Kebir** — 1578'in kendisi bu
coğrafyanın en önemli tek savaşı ve haritada işaretlenemiyor. Nokta
yazılırsa iyi olur.

### ⑥ kaynak
83/83 dolu, `bulunamadı` diyen: 0. Kaynak seti: TDV `meriniler` ·
`sadiler` · `tunus` · `tilimsan` · `trablusgarp` · `trablusgarp-savasi`.
Vikipedi kullanılmadı. 3 madde TDV'nin yalnız "X devrinde" dediği (kesin
gün vermediği) olaylar için yaklaşık tarih kullandı ve bunu kaynak
alanında açıkça belirtti (Osmanlı model ordu reformu · Kasrü'l-bedî'
Sarayı · Avrupa ticaret ilişkileri — üçü de Ahmed el-Mansûr dönemi).
1 madde (ABD-Trablus 1805 antlaşma günü) TDV'de yok, Amerikan
tarihyazımından alındı — **doğrulanmalı**, açıkça işaretlendi.

### ⑦ NEYİ BULAMADIM
- `sadiler` künyesi kayıp DEĞİLDİ — `devletler.js`de `id:"sadi"` olarak
  zaten kayıtlı, TDV `sadiler` maddesine kaynak olarak zaten bağlı.
- Fas'ın **Alevî (Filalî) dönemi** (1659-1912, Mevlây İsmâil dahil) TDV
  `mevlay-ismail` ve `fas` maddeleri WebFetch zaman aşımı yüzünden
  (araç tarafı, tekrarlanan hata) bu turda ÇEKİLEMEDİ — sadece
  `devletler.js`teki mevcut 3 olayla (1664/1672/1844/1912) sınırlı
  kaldı, bu dosyaya hiç eklenmedi. **Sonraki turun öncelikli konusu.**
- Vâdilmehâzin savaş alanı ve Meknas için yerleşim noktası yok (yukarıda).
- dunya değerleri diğer dosyalarla çapraz kontrol edilmedi.

### ⑧ commit · kapı
```
node --check data/kronoloji_kuzeyafrika.js   → 0 (temiz)
py arac/denetle_kronoloji.py                 → "kuzeyafrika.js  83 madde  ✓ temiz"
                                                 (1 mükerrer bulundu, düzeltildi)
```
`index.html`e bağlanması gereken dosya: `data/kronoloji_kuzeyafrika.js`
→ `window.KRONOLOJI_KUZEYAFRIKA`. Bağlamayı koordinatör yapacak.
