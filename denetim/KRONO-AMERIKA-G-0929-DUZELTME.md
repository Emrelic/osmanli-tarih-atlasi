# KRONO-AMERIKA-G-0929 — DÜZELTME önerileri (hüküm koordinatörde; hiçbir mevcut veri değiştirilmedi)

Kaynak dürüstlüğü: aşağıdaki günler standart tarihyazımından (Lynch 1986 · Bethell CHLA · Whigham 2002 · Sater 1986 ·
Rock 1987) — **sayfa numarası doğrulanmadı**. Uygulamadan önce birincil/akademik ikinci okuma önerilir.

## 1. `data/devletler.js` gömülü künye kronolojisinde YIL-DÜZEYİNDE/HATALI günler (olay doğru, gün `-01-01`)
| Künye | Mevcut kayıt | Önerilen gün | Not |
|---|---|---|---|
| gran-kolombiya | `1819-01-01` Boyaca Muharebesi | **1819-08-07** | Boyacá |
| gran-kolombiya | `1821-01-01` Cucuta kurucu kongresi | **1821-05-06** (açılış) · anayasa **1821-08-30** | ay/gün ayrı iki olay |
| arjantin-cumhuriyeti | `1810-05-01` Mayis Devrimi | **1810-05-25** | `kronoloji_ispanya.js` zaten 1810-05-25 diyor |
| arjantin-cumhuriyeti | `1816-01-01` Tucuman kongresi | **1816-07-09** | benim madde `ispanyol-peru`ya bağlı |
| bolivya-cumhuriyeti | `1825-01-01` Bolivya olusumu | **1825-08-06** | 🔴 kırılma kapısını açık tutuyor (5 yerleşim) |
| bolivya-cumhuriyeti | `1873-01-01` Peru–Bolivya gizli ittifak | **1873-02-06** | |
| bolivya-cumhuriyeti | `1874-01-01` Şili–Bolivya antlaşma | **1874-08-06** | Sucre (Lindsay–Corral) |
| bolivya-cumhuriyeti | `1884-01-01` Mütareke | **1884-04-04** | Valparaíso Mütarekesi |
| bolivya-cumhuriyeti | `1904-01-01` 1904 antlaşması | **1904-10-20** | |
| uruguay-cumhuriyeti | `1828-01-01` Uruguay kuruldu | **1828-08-27** | Ön Barış Antlaşması |
| uruguay-cumhuriyeti | `1843-01-01` Guerra Grande kuşatma | **1843-02-16** | kuşatmanın başlangıcı |
| ekvador-cumhuriyeti | `1830-01-01` Ayrılış | **1830-05-13** | Quito meclisi |
| venezuela-cumhuriyeti | `1829-01-01` Ayrılış | **1829-11-26 / 1830-01-13** | 🟡 künyenin KENDİ `f:`ı 1830-01-13 iken çizgisinde 1829-01-01 kaydı var (pencere ÖNCESİ) |
| brezilya-imparatorlugu | `1831-01-01` I. Pedro "indirildi" | **1831-04-07** (feragat, oğlu lehine) | "indirildi" ifadesi de yanlış |
| paraguay-cumhuriyeti | `1870-01-01` Solano López öldü | **1870-03-01** | AYNI künyede `1870-03-01` toprak-kayıp kaydı da var — iki kayıt aynı olay |
| ispanyol-peru | `1780-01-01` "Túpac Amaru II isyanı **bastırıldı**" | başlangıç **1780-11-04**, idam **1781-05-18**, isyan 1783'e dek | 🔴 olgusal hata: 1780'de başladı, bastırılması 1781–83 |

## 2. Diğer dosyalar
- `data/kronoloji_portekiz.js` (+ künye `portekiz-brezilyasi`): `1549-01-01` Tomé de Sousa Salvador → **1549-03-29** (varış ve kuruluş).
- Salvador'un atlas kuruluş günü de 1549-03-29 (ledger 1549-03-29 ✓ — künye/kronoloji yıl düzeyinde kalmış).

## 3. Atlas (yerleşim) günü ↔ kaynak farkı (atlas düzelir — CLAUDE.md §4)
| Yerleşim | Atlas günü | Kaynak günü (doğrulanmadı) | Not |
|---|---|---|---|
| Oruro | `1606-01-01` (yıl temsilî) | 1606-11-01 | yıl doğru |
| Trujillo (Peru) | `1534-11-01` | 1534-12-06 / 1535-03-05 (kaynaklar farklı) | ölçülemedi — hüküm vermiyorum |
| Sucre (La Plata) | `1538-11-30` | 1538 (gün kaynaklara göre değişir) | ölçülemedi |

## 4. `ispanyol-peru` künye penceresi (D205 sınıf ②)
`t:"1824-12-09"` (Ayacucho) ama: Charcas/Bolivya 1825-08-06'ya, Chiloé 1826-01-15'e, Callao 1826-01-23'e kadar
haritada aynı künyeyle boyalı olabilir ⇒ 1824-12-09 sonrası pencere boşluğu. **Ölçmedim** (petek koşusu görmedim);
`bolivya-cumhuriyeti` f:1825-08-06 künyesi ile ispanyol-peru arasında 8 aylık boşluk kağıt üstünde var.

## 5. Tek ölçülemeyen devir
`1888-07-13 bolivya→şili` (San Pedro de Atacama, Tocopilla): benim kaynağım Valparaíso Mütarekesi'ni 1884-04-04, kesin
antlaşmayı 1904-10-20 veriyor; **1888'de böyle bir olay bilmiyorum** ⇒ atlas günü kaynak gerektiriyor (`ölçülemedi`).
