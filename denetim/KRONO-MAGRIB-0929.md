# KRONO-MAGRIB-0929 — rapor (Libya · Tunus · Cezayir · Fas)

> 29 Eylül 2026 · Dalga 1 · şartname `oturumlar/KRONO-MAGRIB-0929.md` + ORTAK §4.1 (M-5396).
> Ekler: `-DUZELTME.md` (mevcut kayıt kusurları) · `-YERLESIM-ONERI.md` (harita önerileri
> + ocak kademesi sorusu) · `-KUNYE.md` (1 künye önerisi).

---

## 1. Ölçülen başlangıç
- Dört ülkenin kendi kronoloji dosyası YOKTU. Mağrib'i anan 474 madde 140 dosyaya dağılmıştı;
  en zayıf dönemler: Tunus 1574-1881 (dayılar, Murâdîler, Hüseynîler — 17. yy'da 4, 18. yy'da
  4 madde), Cezayir 16-18. yy iç tarihi, Libya Karamanlı dönemi, Fas Alevî dönemi.
- 🔴 **`kronoloji_kuzeyafrika.js` (83 madde) sitede GÖRÜNMÜYOR:** `KRONOLOJI_KUZEYAFRIKA` →
  "kuzeyafrika" künyesi yok (M-5392'de bildirdim; M-5396'daki 15 dosyadan biri, onarım
  KRONO-BAGLAMA'da).
- 🔴 Şartnamedeki `KRONOLOJI_<ÜLKE>` adları bağlanmıyordu (üçünün künyesi yok, `fas` ise
  künyenin 7 maddesini EZERDİ) → ORTAK §4.1 yolu kullanıldı: `KRONOLOJI_COK_<ÜLKE>` + her
  maddede `taraflar:[künye id]`.

## 2. `kronoloji_kuzeyafrika.js` — 83 maddenin sınıflandırması (TAŞIMA ÖNERİSİ, taşımadım)
| dilim (dosyadaki sıra) | ülke | önerilen künye (`taraflar`) | not |
|---|---|---|---|
| 0-22 Merînîler (1196-1465) | FAS | `merini` | 8·9·10·12·13·20 Tilimsan'da geçer ama Merînî bakışıdır — `zeyyani` EKLENMESİN (A6 mükerrer) |
| 23-44 Sâdîler (1511-1659) | FAS | `sadi` | 36-37 (1591 Tondibi) `fas` künyesinde de var → yalnız `sadi` |
| 45-55 Hafsîler (1229-1574) | TUNUS | `hafsi` | 55 (1574 kesin fetih) + `tunus-ocagi` olabilir; gün sorunu DÜZELTME B1 |
| 56-70 Zeyyânîler (1235-1554) | CEZAYİR | `zeyyani` | 65-70 (1511-1554) + `cezayir-ocagi` ikinci taraf olabilir |
| 71-78 Trablusgarp (1551-1911-10-09) | LİBYA | `trablusgarp-ocagi` | 73 ve 76 gün düzeltmesi (B3/B4) |
| 79-82 (1911-10-16 → 1912-10-18) | LİBYA | `italya` | `trablusgarp-ocagi` künyesi 1911-10-09'da bitiyor → pencere dışı |
**Öneri:** dosya taşınmasın, YERİNDE `KRONOLOJI_COK_KUZEYAFRIKA`ya çevrilip her maddeye yukarıdaki
`taraflar` eklensin (tek dosya, tek düzenleme, mükerrer riski yok). Benim dört dosyam bu 83
maddeyi TEKRARLAMIYOR; taşıma yapılırsa da çakışmaz. Taşımadan önce DÜZELTME A1-A7
(alıntı olmayan alıntılar, 5 `kapsam_genis` + odaksız, çift `yer_id` anahtarı) düzeltilmeli.

## 3. Yazılanlar — 231 madde, dört dosya
| dosya | global | madde | künye dağılımı | `yer_id` / odak | günlü |
|---|---|---|---|---|---|
| `data/kronoloji_cok_tunus.js` | `KRONOLOJI_COK_TUNUS` | 73 | tunus-ocagi 50 · hafsi 13 · tunus-beyligi-fransiz 10 · (+cezayir-ocagi 6) | 70 / 3 | 21 |
| `data/kronoloji_cok_libya.js` | `KRONOLOJI_COK_LIBYA` | 58 | trablusgarp-ocagi 36 · senusi 20 · italya 12 · (+ingiltere, abd, fransa…) · trablus-cumhuriyeti 1 (önerilen) | 51 / 7 | 20 |
| `data/kronoloji_cok_fas.js` | `KRONOLOJI_COK_FAS` | 53 | fas 42 · sadi 7 · merini 5 | 37 / 16 | 18 |
| `data/kronoloji_cok_cezayir.js` | `KRONOLOJI_COK_CEZAYIR` | 47 | cezayir-ocagi 33 · cezayir-fransiz 13 · abdulkadir 5 | 44 / 3 | 6 |
Yüzyıl dağılımı: 16. yy öncesi 11 · 16. yy 42 · 17. yy 30 · 18. yy 33 · 19. yy 74 · 20. yy
(≤1923) 41 — en büyük
boşluk olan Osmanlı ocakları dönemi (1574-1830) ağırlıklı dolduruldu.

**Kaynak disiplini:**
- Yalnız TDV İslâm Ansiklopedisi (Mağrib'de birincil, `CLAUDE.md §4`) — 98 TDV madde gövdesi
  çekildi (HTTP 200), ölü slug'lar (302) listelendi.
- `kaynak:` alanındaki her tırnaklı ifade TDV gövdesinde **karakter karakter** arandı:
  **231/231 bulundu**.
- Yıl bilinmiyorsa madde yazılmadı; gün bilinmiyorsa `YYYY-01-01` + `gun:` açıklaması.
- TDV'nin iki maddesi birbirini tutmuyorsa `celiski:` alanına iki alıntı: 22 madde.
- Yöntem: dört paralel Opus taslak ajanı TDV önbelleğinden taslak yazdı; ben alıntıları,
  `yer_id`'yi, künye penceresini, `tur` sözlüğünü mekanik olarak denetledim ve bütün külliyata
  (olaylar* · kronoloji* · savaslar* · 678 künyenin kendi maddeleri) mükerrer taraması yaptım.
  Taramada çıkan 2 mükerrer (1516 Oruç Reis ↔ `cezayir-ocagi` künyesi, 1513 künyesiz)
  çıkarıldı; 1837 Tafna ve 1847 teslim `abdulkadir` künyesinde zaten olduğu için oradan ayrıldı.

**Odak:** 231 maddenin 202'si `yer_id` ile, 29'u `odak_yer`/`odak_kimlik` ile konumlu;
**ODAKSIZ 0, kırık atıf 0** (`odak_olc.py`). `kapsam_genis` hiç kullanılmadı. Olay yeri TDV'de
şehirle verilmeyenlerde `odak_yer` bölge temsilidir ve `ic_not_d:`de beyanlıdır.

## 4. Harita senkronu
- **(a) haritada kırılma VAR, maddesi yoktu → yazıldı:** 1681 Mamûra (İspanya→Fas) ·
  1684 Tanca (İngiltere→Fas; gün farkı 35, Y4-p) · 1483/84 Tıtvân · 1833 Tilimsan · 1842
  Tilimsan · 1534/1535/1540 Annaba · 1526/1533 Konstantin · 1659 Cezayir ağalar · 1603
  Trablusgarp dayılar · 1631 Tunus Murâdîler · 1810 Gadâmis · 1875 Gât · 1914 Fizan ·
  1915/1916 Sellûm. (Son sekizi haritada HENÜZ kırılma değil — Y4 önerileriyle birlikte düşünülmeli.)
- **(a) ama TDV'de tarih YOK → yazılamadı:** 1833 Mustaganem · 1839 Cicel · 1844-03-04 yedi
  yerleşim · 1852 Ağvât/Gardâye/Cilfe · 1854 Vargla · 1764 Sûvayra · 1769 Mazagan (gün) ·
  1916 Cabo Juby · Fas'ın Sudan paşalığının sonu. Akademik kaynakla kapatılabilir.
- **(b) tarihte değişim var, haritada yok → `-YERLESIM-ONERI.md`:** Y1 ocak kademesi (soru) ·
  Y2 Tunus `kid` eksik · Y3 Fas 1912 himayesi (soru) · Y4 on sekiz gün/sahip düzeltmesi
  (Annaba Hafsî+İspanyol 1535-40 · Konstantin 1526-27 · Safi/Azemmûr sahibi `sadi` · Tıtvân
  1860-62 · Gât 1875 · Fizan 1914 · Sellûm 1915-16 …).
- ⚠️ **SENKRON KÖRLÜĞÜ (SENKRON-DEFTER M-5398):** `denetle.py` evreni yalnız `olaylar*` +
  `kronoloji_sinir*`; `kronoloji_cok_*.js` EVRENDE DEĞİL. Bu dört dosya 2s sayısını
  DÜŞÜRMEZ — ama 2t'yi (kırılmasız madde) de ARTIRMAZ. Hüküm koordinatörde.

## 5. Denetim
- `node --check` × 4 ✓
- `py arac/odak_olc.py`: dört dosyada ODAKSIZ 0 · BEYANLI 0 · kırık atıf 0 (tek kırık atıf
  `kronoloji_dogu_afrika.js` 1897 'Ogaden' — benim değil, önceden var).
- `py arac/denetle.py`: **SONUÇ: temiz**.
- Bilinen tek "kusur": `taraflar:["trablus-cumhuriyeti"]` künyesi yok — KASITLI (M-5416 kural 3,
  `-KUNYE.md`); app.js bunu sayıp konsola basar, madde kaybolmaz.

## 6. Bulunamadı (özet; ayrıntı taslakların BULUNAMADI listelerinden)
TDV'de yok ya da tarihsiz: 1682-88 ve 1783-84 Cezayir bombardımanları · 1775 O'Reilly çıkarması ·
1815 ABD-Cezayir · 1786 ABD-Fas antlaşması · Sakızlı Mehmed Paşa'nın valilik tarihi · İspanyol
himayesinin (1912) günü · Tunus'ta Osmanlı hukukî iddiasının bittiği tarih · Selâ korsan
cumhuriyetinin yılı. Ölü slug'lar: mustaganem · cicel · agvat · biskra · tuggurt · vergle ·
salih-reis · mehdiye · kabis · tabarka · bardo · gadames · gat · kufra · misrata · suveyre ·
mazagan · sefsaven … (tam liste taslak dosyalarında). TDV arama sayfası JS ile yüklendiği için
`/arama/?q=` sonuç döndürmüyor — slug keşfi tahminle yapıldı; "yok" demeden en az 3 yazım denendi.
