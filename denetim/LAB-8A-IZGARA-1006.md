# LAB-8A-IZGARA-1006 — "parça alanı" gerçek alan mı, ızgara mı?

**Tek satır hüküm:** "Parça alanı 1 895 364 km²" **ızgaradan türetilmiş** (4 km² × 2 km ızgara örneği), gerçek alan değil. Gerçek `d.area` **1 893 467,3 km²**; ızgara onu **+1 896,7 km² (+%0,100)** şişiriyor. Aynı geometride yalnız ızgara başlangıcı kaydırılınca toplam **4 708 km² (%0,25)** oynuyor. ⇒ Kapı ölçüsü **ızgara alanı değil, `d.area` olmalı.** O kodda zaten hesaplanıyor (parça eşiği onu kullanıyor), kuantize değil, üç gövdede birebir aynı.

**Gövde:** `2fe8ada77`, site damgalı geometri (`0ef2d3e2`). Araç: scratchpad klonunda `denetle.py` kopyası. Ek kayıt: parçanın `d.area`sı ve geometrisi (WKB). Kopya silindi, `arac/` dokunulmadı, klon temiz.
**Doğrulama:** her parça için D8'in kendi ızgarası (başlangıç `bounds + 1 km`) yeniden üretildi ve kaydedilen örnek sayısıyla **1101/1101 birebir** tuttu (`assert`). Liste: `LAB-8A-IZGARA-1006.tsv`.

## ① Ölçüm

### 1. Kaynağı
Benim `LAB-8A-ESIK`te "parça alanı" dediğim sayı `4 × len(örnekler)`, yani **ızgara sayımı**. `d.area` kodda yalnız parça eşiği için kullanılıyor (`if d.area < D8_ALAN_8A`), hiçbir yerde toplanmıyor/basılmıyor. Koordinatörün sorusunun cevabı: **ızgaradan türetiliyor.**

### 2. Izgara ↔ gerçek (1101 parça)

| | km² |
|---|---|
| ızgara toplamı | 1 895 364 |
| gerçek `d.area` toplamı | 1 893 467,3 |
| **fark** | **+1 896,7 (+%0,100)** |

- **Yön var, sistematik ve yukarı:** ızgara > gerçek 629 parça, < 472, = 0. Parça başı fark medyan +1,6 km², ortalama +1,72, en kötü −74,0 / +43,7.
- **Küçük parçalar en çok şişer:** <20 km² olan 80 parçada ortalama oran **+%13**. |oran| > %10 olan 115 parça, > %50 olan 15.
  - Örnek: Gadsden 630,0 → 556.
  - Örnek: Liberya-Fildişi 8 012,3 → 8 056.

### 3. Kuantizasyon gürültüsü: aynı geometri, ızgara başlangıcı kaydırılıyor

7 başlangıç (D8'in kendisi (1,1) dahil; (0,5,0,5) … (1,75,1,25) … (0,01,0,01)):

- toplam **1 891 220 … 1 895 928 km²**, aralık **4 708 km² (%0,25)**;
- parça başı aralık medyan **28 km²**, en çok **176 km²**.
- ⚠️ (0,0) başlangıcı **dejenere**: örnekler kutu kenarına düşüyor, kenar noktaları `contains` dışı kalıyor. Toplam 1 882 304 (−%0,7). Ölçüme katılmadı, ama kodun başlangıcı `bounds`a bağlı olduğu için bu kenar etkisinin varlığını bilmek gerekir.

### 4. "Birebir aynı" ne demekti?

- Gerçek `d.area` 600e2d00 ve 2fe8ada77'de **birebir aynı** (1 893 467,3089… tam eşit, parça parça).
- Izgara toplamı da aynıydı. Ama bu **kuantizasyonun bir farkı yutması değil**: girdi geometri **bayt bayt aynı** (aynı site damgası), ızgara da deterministik bir fonksiyon. Aynı girdi ⇒ aynı çıktı. Koordinatörün korktuğu "aynı ızgaraya düşme" bu vakada geçerli değil, çünkü düşecek bir fark yoktu.
- **AMA ileriye dönük tehlike gerçek:** ızgara başlangıcı parçanın `bounds`una bağlı. Geometride küçük bir değişiklik (yeni koşu) `bounds`u kaydırırsa ızgara da kayar. Gerçek alanda hiçbir şey değişmeden ızgara alanı bu ölçümdeki gürültü bandı kadar (%0,25 toplam, parça başı medyan 28 km²) oynayabilir.

## ② Bulamadım

- Yeni koşunun geometrisi gelince `bounds` kaymasının gerçek dağılımı. Bugün ölçülebilen tek şey teorik ofset bandı.
- `d.area`nın kendisi izdüşüm düzleminde (hat başına yerel `_d8_izdusum`). Bu düzlemin gerçek küre alanına göre sapması ölçülmedi. Kapı karşılaştırması aynı izdüşümle yapıldığı sürece tutarlıdır.

## ③ Öneri (yazmadım)

1. **`8a-alan` = Σ `d.area`** (1 893 467 km²), ızgara toplamı DEĞİL. Kuantize değil, eşiğin parça testiyle aynı ölçüyü kullanır, ofset gürültüsü sıfır.
2. Izgara yalnız **etiketleme** için kalsın (zaten tek işi bu).
3. Tavan hassasiyeti bilinerek konacaksa: `d.area` ile oynama yalnız geometriden gelir. Izgara alanıyla konarsa en az **±%0,25** gürültü bandı tavanın içine **bilerek** yazılmalı.
