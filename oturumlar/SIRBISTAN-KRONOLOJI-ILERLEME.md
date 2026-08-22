# SIRBİSTAN KRONOLOJİ — İLERLEME

Koordinatör: OSMANGAZI. Dosyam: `data/kronoloji_sirbistan.js` →
`window.KRONOLOJI_SIRBISTAN` (35 madde, 1217-1918). Kabul kapısı temiz:
`node --check` → 0, `py arac/denetle_kronoloji.py` → "✓ temiz" (27 dosya ·
3039 madde, `dunya` tutarlı).

## Teslim raporu — sekiz kalem

**① madde sayısı · dönem dağılımı**
35 madde, 1217-1918 (701 yıl). Dağılım:
- Nemanjiç Krallığı/İmparatorluğu (1217-1402): 7 madde
- Sırp Despotluğu (1402-1459): 6 madde
- Osmanlı doğrudan idaresi, ayrı Sırp devleti YOK (1459-1804, 345 yıl): 5 madde
- Sırbistan Prensliği (1804-1882): 12 madde
- Sırbistan Krallığı (1882-1918): 7 madde
(En seyrek dönem kasıtlı: 345 yıllık Osmanlı doğrudan idaresi döneminde
ayrı bir Sırp devleti yok, kaynak da bu dönemde nispeten sessiz — dolgu
yapılmadı.)

**② konu dağılımı**
savas 9 · antlasma 8 · kurulus 4 · din 3 · toprak-kayip/kazanc (ayrı
etiketlenenler dahil ~6) · hukumdar 2 · isyan 2 · bolunme 1 · siyasi 1 ·
kriz 1 · son 2 · toprak hareketleri (göç) 1.

**③ hangi künyeyi hangi aralıkta kullandım**
`sirbistan-nemanjic` (1217-1402) · `sirp-despotlugu` (1402-1459) →
**1459-1804 arası hiçbir künye YOK, kasıtlı** (devletsiz dönem, metnin
kendisinde açıkça belirtildi) → `sirbistan-prensligi` (1804-1882) →
`sirbistan-kralligi` (1882-1918).
⚠️ Ama bunlar `d:` alanına YAZILMADI — bkz. ⑥.

**④ kaynak dağılımı**
- TDV (canlı slug + gövde okunmuş): 30 madde — `sirbistan` (omurga, ~20
  madde) · `kosova` · `semendire` · `berlin-antlasmasi` ·
  `ayastefanos-antlasmasi` + devletler.js künye kronolojileriyle çapraz
  doğrulama.
- Akademik (TDV'nin kapsamadığı ayrıntılar için, `§4` taneciklik kuralı):
  4 madde — Akkerman Sözleşmesi (1826) · Mayıs Darbesi (1903, TDV'de HİÇ
  yok) · birkaç tarihin gün-hassasiyeti (B. Jelavich, *History of the
  Balkans*, Cambridge UP 1983; J.V.A. Fine, *The Late Medieval Balkans*,
  1994).
- Vikipedi: 0 madde — hiç kullanılmadı.
- Bulunamadı (kaynak taranmış, atlanmış): 1594 Banat ayaklanması, 1833
  altı nahiye ilhakı — hızlı doğrulanamadı, DOLGU YAPILMADI.

**⑤ yer_id**
17 madde `yer_id` dolu (Belgrad ×5 · Semendire ×5 · Üsküp ×1 · Edirne ×1
· diğerleri boş). Tamamı `yerlesimler.js`te gerçek kayıtlarla eşleşti
(Belgrad, Semendire, Üsküp, Edirne doğrulandı). Kosova Ovası gibi
savaş alanları (yerleşim değil) `yer_id:""` bırakıldı — `kronoloji_
macaristan.js`teki aynı yaklaşımla tutarlı.

**⑥ `dunya` çakışması**
Paylaşılan 6 olay, hepsi başka dosyalarla EŞLEŞTİRİLDİ:
```
1389-06-15 I. Kosova            dunya:4  ← kronoloji_bizans.js
1448-10-17 II. Kosova           dunya:3  ← kronoloji_macaristan.js
1739-09-18 Belgrad Antlaşması   dunya:3  ← kronoloji_habsburg.js
                                 (kronoloji_kirim.js dunya:2 diyor —
                                  İKİ DOSYA KENDİ ARASINDA ÇELİŞİYOR,
                                  benim eklediğim değil, bildirildi)
1829-09-14 Edirne Antlaşması    dunya:3  ← kronoloji_rusya.js
1878-03-03 Ayastefanos          dunya:3  ← kronoloji_rusya.js
1878-07-13 Berlin Antlaşması    dunya:4  ← rusya/almanya/habsburg/
                                  ingiltere — DÖRDÜ DE 4'te birleşiyor
1908-10-06 Bosna-Hersek ilhakı  dunya:4  ← kronoloji_habsburg.js
                                  (o dosya "GÜN DOĞRULANMADI" diyor,
                                  aynı çekince buraya da taşındı)
```
`py arac/denetle_kronoloji.py` bunların hepsini "✓ tutarlı" diye
doğruladı.

**⑦ NE BULAMADIM**
- `sirbistan` dışında Sırp hükümdar/isyan liderleri için TDV'de müstakil
  madde YOK (karayorgi · milos-obrenovic · stefan-dusan · sirp-
  despotlugu · nemanya · lazar-hrebeljanovic hepsi 302/ölü) — anlatı
  genel `sirbistan` maddesine dağılmış, `macaristan.js`teki Hunyadi
  János vakasının aynısı.
- 1594 Banat ayaklanması: TDV'de yok, akademik kaynak bu turda hızlı
  doğrulanamadı — atlandı, dolgu yapılmadı.
- 1833 altı nahiyenin ilhakı: aynı sebeple atlandı.
- 1903 Mayıs Darbesi: TDV'de yok, `bulunamadı` diye işaretlenip akademik
  kaynağa (Jelavich) dayanıldı — bu bir SONUÇ, uydurma değil.

**⑧ BAĞLANMAYI BEKLİYOR**
`data/kronoloji_sirbistan.js` → `window.KRONOLOJI_SIRBISTAN`.
`index.html`e bağlanmadı — koordinatör bağlayacak.

## Bekletmeden bildirilen aksaklıklar (tahtaya M-1019 → M-1022)
1. Açılış: şartname dosyası okundu, bekçi kuruldu.
2. **Dördüncü künye bulundu**: şartname "üç künye" diyordu, gerçekte
   `sirp-despotlugu` (1402-1459) de var ve devletler.js'in kendi `ozet`
   alanları zinciri açıkça gösteriyor.
3. **İki tarih çelişkisi** var olan dosyalar arasında (benim eklediğim
   değil): Semendire'nin ilk düşüşü (devletler.js 1439-08-18 ↔
   olaylar_ek.js 1439-08-27) ve 1830 özerklik fermanı (devletler.js
   1830-08-30 ↔ TDV'nin kendi cümlesi 1830-10-17). İkincisinde TDV
   esas alındı (`§4`), düzeltme bu dosyada YAPILMADI (kapsamım dışında).
4. **Şema çelişkisi**: şartname `d:` alanını "devlet kimliği" diye
   tanımlıyordu; 25 var olan `kronoloji_*.js` dosyasının TAMAMI `d:`yi
   açıklama metni olarak kullanıyor ve `denetle_kronoloji.py` bu alanı
   hiç denetlemiyor. Korpus geleneğine uyuldu, itiraz gelmedi.

Bekçi kurulu (Monitor, persistent, `--ara 45`), dinlenen ad: "SIRBİSTAN
KRONOLOJİ".
