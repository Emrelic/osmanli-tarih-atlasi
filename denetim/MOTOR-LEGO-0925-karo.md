# MOTOR-LEGO-0925 · KARO TASARIMI — gövdeyi karolara bölmek mümkün mü?

**Emir:** M-5178 ⑥ · **Tarih:** 25 Eylül 2026 · **Kod yazılmadı, yama hazırlanmadı** — tasarım + ölçüm.
**Aletler:** `denetim/ARAC-LEGO-karo-olc.py` (gövde adımlarının süresi) ·
`denetim/ARAC-LEGO-karo-puan.py` (puan adımının içi + karo sınavı) ·
`denetim/ARAC-LEGO-etki.py --yalniz-uye` (anahtar vekili). Üçü de motoru KOŞTURMAZ; gövde
adımlarını `uret_petek.py`den **AST ile birebir** çekip gerçek geometride koşturur
(petekler: koşu 6'nın `petek_govde.js`i, kara: `motor_kara.geojson`, yerleşim: koşu 6 girdisi).

---

## Kısa cevap

1. **Gövdenin TAMAMINI karo karo hesaplayıp birleştirmek: HAYIR — sonucu değiştirir.**
   Zincirin üç adımı yerel değil (B1 delik doldurma, B2 enklav, B3 koridor). Bu yol burada biter.
2. **Ama ölçüm asıl darboğazı başka yerde buldu:** gövde süresinin **%70'i puan bölgesi**
   (`_puan_bolgesi`), onun da **%96'sı ızgara puanlaması**. Bu adım tamamen yerel: her karo
   yalnız 400 km yakınındaki noktalarla puanlanınca maske **12/12 gövdede BİT BİT aynı**
   çıkıyor, süre **431 sn → 5,7 sn** (~75×). Önbellek istemiyor, her koşuya (soğuk koşuya
   da) yarıyor, bugünkü sıralı yola da (`:6715`) uygulanabilir.
3. Kaba karşılık: yabancı gövde aşaması **~13,5 saat → ~4,5 saat**, koşu ~17-19 s → ~8-10 s
   (örnek küçük, aşağıda belirsizlik).

"Karo" fikrinin doğru yeri gövde değil, **puan ızgarası**: geometriyi değil HESABI kırpar.

---

## ① Gövde karo karo hesaplanıp birleştirilebilir mi? — HAYIR

`_yabanci_govde_hesap` sırası: U birleşim → K kapama (0,15°) → B1 delik doldurma →
B2 enklav → B3 koridor → ∩KARA → P puan kesişimi. Adım adım yerellik:

| Adım | Yerel mi | Gerekçe (kod) |
|---|---|---|
| U `unary_union` | küme olarak evet · **WKB olarak hayır** | birleşim sırası/gruplaması köşe dizisini değiştirir |
| K `kapat` | evet, 2×0,15° hale ile | morfolojik kapama yarıçapla sınırlı |
| **B1** `delikleri_doldur` | **HAYIR** | "iç halka" kavramı globaldir: bir delik karo sınırını aşabilir; yabancı yerleşim sınavı BÜTÜN halkaya bakar (`:2914-2934`) |
| **B2** `_b2_enklav_birlestir` | **HAYIR** | "ana" = gövdenin DÜNYADAKİ en büyük parçası (`:3078-3079`); karoda ana farklı çıkar ⇒ farklı köprüler |
| **B3** `_b3_koridor_kirp` | **HAYIR** (bileşen ölçekli) | 0,45° kapama + bileşen başına Hausdorff derinliği; bileşen karo aşar |
| KR ∩KARA | evet | noktasal kesişim |
| P puan | **evet**, 400 km hale ile | ızgara hücresinin puanı yalnız ≤400 km'deki noktalara bağlı |

Deney (P poligonu, 10° karo): karolar ayrı poligonlaştırılıp birleştirilince geometri
**aynı** (simetrik fark / alan = 0), ama **WKB 0/12 aynı**. Bit denkliği şartı (`C13`,
önbellek ilkesi "okunan = hesaplanan") karo birleştirmesini dışarıda bırakıyor.
⇒ **Gövde düzeyinde karo tasarımı biter.** Parça (bağlı bileşen) düzeyinde önbellek de
B2 yüzünden tutmaz: bir bileşenin büyüklüğü değişince "ana" değişir.

## ② Süre nereye gidiyor — ölçüldü (`ARAC-LEGO-karo-olc.py`)

Örnek: 20 gövde, **|aktif| ağırlığıyla orantılı** seçildi (motorun süre vekili, R²=0,96),
toplam 426 sn:

| Adım | sn | pay |
|---|---|---|
| U birleşim | 5,0 | %1,2 |
| K kapama | 20,1 | %4,7 |
| B1 delik | 1,2 | %0,3 |
| B2 enklav | 2,3 | %0,5 |
| **B3 koridor** | 59,2 | **%13,9** |
| KR ∩KARA | 38,0 | %8,9 |
| **P puan** | 300,6 | **%70,5** |

En pahalı gövdeler İngiltere (1888: 118 sn, bunun 100 sn'si P) ve Rusya. Global adımlar
(B1+B2) **%0,8** ⇒ "global kısım pahalı mı" sorusunun cevabı **hayır**, pahalı olan yerel kısım.

## ③ Puan adımının içi (`ARAC-LEGO-karo-puan.py`, 12 gövde, ağırlıklı örnek)

- **Ölçüm geçerliliği:** zamanlı kopyanın çıktısı motorun `_puan_bolgesi`yle **WKB bit
  bit aynı: 12/12.**
- Orijinal 451,6 sn = ızgara puanı **431,3 sn (%96)** + poligonlaştırma 15,7 sn (%4).
- **Niçin pahalı:** motor HER noktayı devletin BÜTÜN penceresi üzerinde hesaplıyor.
  İngiltere 1909: pencere 5508×2433 hücre (13,4 M) × 279 nokta; Rusya 1830: 7149×834 × 400.
  Oysa bir nokta yalnız ≤400 km'deki hücrelere puan verir (halka 200→4 · 300→2 · 400→1,
  ötesi 0).
- **Karo + hale (10° karo, 400 km + 1 hücre hale):** her karo yalnız hale içindeki noktalarla
  puanlandı → maske **12/12 BİT BİT aynı** (`np.array_equal`), süre **5,7 sn** (431 → 5,7).
  Maske aynı olduğu için poligonlaştırmayı bugünkü GLOBAL hâliyle yapmak çıktıyı bit bit
  korur (poligonlaştırma maskenin deterministik işlevi).
- **Niçin kesin (ters yön):** hale dışındaki bir nokta için hücre–nokta uzaklığı
  `|Δlon|·111,32·cos(φ_hücre) ≥ |Δlon|·111,32·cos(φ_max) > 400 km` ⇒ o nokta hücreye 0 puan
  verirdi. `int16` toplama sıra bağımsız; dahil edilen noktaların hücre başına float
  hesabı aynı formülle, eleman eleman. Ölçüm ile gerekçe aynı yeri gösteriyor.

### Önerilen biçim — karo değil, NOKTA BAŞINA ALT PENCERE
Karo boyutu seçmeye gerek yok: her nokta yalnız kendi 400 km kutusunun dilimine (`_p[j0:j1,
i0:i1]`) eklenir. Karo ayıklamasının en ince hâlidir, parametresizdir ve karo sınırında
nokta tekrarı yoktur. **Ölçülmedi** (ölçülen 10° karo); uygulamadan önce aynı alet (maske
eşitliği + süre) ile sınanmalı. Karo gerekirse boyut ölçütü: karo kenarı ≫ hale (400 km ≈
3,6° enlemde) olmalı ki hale tekrarı küçük kalsın; 10° bunu sağlıyor.

## ④ Kazanç — kaba, belirsizliğiyle

P %70,5 × (5,7 + 15,7)/446,9 ≈ **%3,4**'e iner ⇒ gövde süresi ≈ %29,5 + %3,4 = **%33**
⇒ yabancı gövde aşaması (koşu 14: 13s29dk) **≈ 4,5 saat**; koşu ~17-19 s → **~8-10 s** (kazanç ~9 saat).
**Belirsizlik:** adım payları 20 gövdelik örnekten, puan içi 12 gövdeden (ağırlıklı ama
küçük). Taban petekler zamansız (epok devri yok). Kutu koşusuyla doğrulanmadan yayın
saatine çevrilmemeli.

## ⑤ Önbellek anahtarıyla ilişkisi — ayrı bir `puan` katmanı?

Puan yalnız aktif noktaların KONUMUNU okur (petek, çevre, tarih yok). Anahtarı "yalnız üye
konumları" olsaydı isabet (vekil, ağırlıkça, `ARAC-LEGO-etki.py --yalniz-uye`):

| Senaryo | gövde anahtarı (bugün) | yalnız-üye anahtarı |
|---|---|---|
| Emre ① SAHİP (5 bölge × 3 zaman) | %93,8 | %93,8 |
| Emre ② NOKTA (5 yeni nokta) | %67,5 | **%94,1** |
| Gerçek koşu 6 → 15 (+373 nokta) | %4,6 | **%16,5** |

⇒ Çevre kutusunu atmak NOKTA senaryosunu kurtarıyor. **Ama önce ③:** ayıklamadan sonra
puan gövde süresinin ~%3'ü olur ve onu önbelleğe almanın kazancı ~%3'e düşer. Sıra:
**③ ayıklama (kesin, önbelleksiz, her koşu) → sonra** kalan %30'luk kısım için gövde önbelleği
(K1+K2 açılınca). Ayrı `puan` katmanı ③'ten sonra gereksiz; önerilmedi.

## ⑥ Maliyet sorusu (karo sayısı × anahtar × sqlite)

- ③ önbellek kullanmıyor ⇒ **sqlite yükü sıfır**, anahtar sayısı değişmiyor.
- Gövde karo önbelleği (reddedildi): bugün 3.874 gövde çağrısı; 10° karoya bölünse dev
  gövdeler (İngiltere pencere ~275°×120° ⇒ ~330 karo) yüzlerce kayda bölünür. Kaba:
  ~10⁵-10⁶ kayıt/koşu. Sonucu değiştirdiği için bu maliyet hesaplanmadı. **Ölçülmedi.**

## ⑦ Sıradaki darboğazlar (③'ten sonra)

B3 %13,9 → ③'ten sonra gövde süresinin **~%42'si** · KR %8,9 → ~%27 · K %4,7 → ~%14.
B3'ün pahası bütün gövdeye uygulanan 0,45° kapama; bileşen ölçekli olduğu için karo
ayıklaması KESİN değil. **Ayrı ölçüm işi, tasarlanmadı.**

## ⑧ YUK-BOLME'nin bulgusuyla ilişkisi (M-5181)

"Çıktı havuzunun %76'sı tek seferlik halka" **çıktı boyutu** sorunudur (her dönem gövde
baştan yazılıyor, Voronoi sınırı milim oynayınca halka eşitliği tutmuyor). Karo ayıklaması
çıktıya dokunmaz (maske ve geometri bit bit aynı) ⇒ o sorunu **ne çözer ne bozar.** Gövde
karo önbelleği (reddedildi) ortak halka paylaşımı getirebilirdi ama bit denkliğini bozduğu
için dışarıda. İki iş ayrı kalmalı.

## Bulunamayan / ölçülmeyen
- Nokta başına alt pencere biçiminin süresi — **ölçülmedi** (10° karo ölçüldü).
- Osmanlı gövdesi (`_osm_govde_hesap`) adım payları — ölçülmedi. Puan orada ÇAĞRILMIYOR
  (`grep _puan_bolgesi(` → yalnız `:6349` ve `:6715`, ikisi de yabancı gövde).
- Epok devrinin (`petek_epok`) adım paylarına etkisi — taban petekler zamansız.
