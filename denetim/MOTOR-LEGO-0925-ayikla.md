# MOTOR-LEGO-0925 · PUAN IZGARASI AYIKLAMASI — yama + sınav

**Emir:** M-5185 ④ · **Yama:** `denetim/MOTOR-LEGO-0925-ayikla.diff` — **UYGULANMADI**
(`git apply --check` temiz; `MOTOR-LEGO-0925-yama.diff` ile birlikte de temiz).
**Öngörü:** `denetim/MOTOR-LEGO-0925-ayikla-ongoru.md` — ölçümden ÖNCE commit edildi (`e67d1de2`, 11:09:59).
**Sınav:** `denetim/ARAC-LEGO-ayikla-sinav.py` (yamanın KENDİ kodunu motorun asıl işleviyle kıyaslar).

---

## Sonuç

| | eşsiz küme | motorla WKB bit bit aynı | süre | hız |
|---|---|---|---|---|
| REF — motorun bugünkü `_puan_bolgesi` | 274 | — | 9.111,8 sn | 1× |
| **B — yama (nokta başına alt pencere)** | 274 | **274/274** | **319,3 sn** | **29×** |
| A — 10° karo + 400 km hale | 274 | 274/274 | 364,2 sn | 25× |

Sınıf başına fark (B · A): KUTUP 40 → 0 · 0 · TARİH 35 → 0 · 0 · BOŞLUK 35 → 0 · 0 ·
KENAR 25 → 0 · 0 · AĞIR 12 → 0 · 0 · RASTGELE 150 → 0 · 0.

**Seçilen biçim B:** hem hızlı (A'dan %12 az süre), hem parametresiz (karo boyutu yok),
hem de kodu daha kısa (tek döngü, dilim).

## Negatif çapa (`C13`) — sınavın dişi var mı

Kasten bozuk bir B: φ noktanın KENDİ enleminden alınıyor (satır aralığının en büyük
|enleminden değil) ve ±1 hücre payı yok. Yalnız KUTUP sınıfında koşturuldu:
**37/40 gövdede FARK**, çıkış kodu 1 (sovyet-rusya 1917-18, rusya 1824, ingiltere 1873-1914 …).
Aynı kümelerde A 40/40 aynı kaldı. ⇒ Sınav, öngörüde "en olası kusur yeri" dediğim hatayı
yakalıyor. 0 fark bir ölçümdür, temenni değil.

## Örneklem — neyi niçin seçtim

Evren: **koşu 15 girdisi** (üretimin koşacağı veri): 4.294 nokta · 4.359 gövde ·
**4.117 eşsiz aktif küme** (puan yalnız aktif kümenin konumlarını okur ⇒ aynı küme aynı
sonuç; tekrarlar sayılmadı). Petek gerekmiyor.

| Sınıf | Tanım | Evrende | Seçilen | Nasıl |
|---|---|---|---|---|
| KUTUP | üye |enlem| > 60° | 682 | 40 | en yüksek enlemli 10 + 30 rastgele |
| TARİH | üye |boylam| > 170° ya da pencere > 180° | 664 | 35 | en pahalı 5 + 30 rastgele |
| BOŞLUK | en yakın üye komşusu > 400 km | 1.864 | 35 | en pahalı 5 + 30 rastgele |
| KENAR | pencere ızgara sınırıyla kırpılıyor | 196 | 25 | en yüksek enlemli 5 + 20 rastgele |
| AĞIR | tahminî maliyet (hücre × nokta) en yüksek | — | 12 | en pahalı 12 |
| RASTGELE | eşsiz kümelerden düzgün | 4.117 | 150 | tohum 925 |

Kümeler kesişiyor (bir gövde birden çok sınıfta olabilir): toplam **274 eşsiz küme**.
Öngörüdeki üç risk sınıfı (kutup · tarih çizgisi · geniş boşluk) ayrıca ve en uç
örnekleriyle içeriliyor. Ağır ve rastgele sınıflar, sırasıyla pahalı ve küçük gövdeleri
temsil ediyor.

## Öngörü ↔ ölçüm

| Öngörü | Ölçüm | Hüküm |
|---|---|---|
| Hiçbir sınıfta bit farkı yok (A ve B) | 274/274 · 274/274 | ✅ tuttu |
| En olası kusur yeri kutup (φ seçimi) | bozuk φ ⇒ kutupta 37/40 fark | ✅ tuttu (negatif çapa) |
| Tarih çizgisi: motor sarmıyor, ayıklama da sarmazsa fark yok | TARİH 35 → 0 | ✅ tuttu |
| A hızı 50-100× | **25×** | ❌ **ÇÜRÜDÜ.** 75× yalnız ızgara maskesinin süresiydi; bütün işlevde poligonlaştırma (~%4, ayıklanmıyor) ve karo döngüsü var |
| B ≥ A hız | 29× > 25× | ✅ tuttu |

## Kazanç — yeniden hesap

P (koşu 14 örneği %70,5) 29× hızlanırsa ≈ %2,4 ⇒ gövde süresi %29,5 + %2,4 ≈ **%32**
⇒ yabancı gövde aşaması 13s29dk → **~4,3 saat**; koşu ~17-19 s → **~8-10 s**.
Adım payları hâlâ 20 gövdelik örnekten; kutu koşusu kesinleştirir.

## Yama — ne değişiyor (35 satır, tek işlev)

`arac/uret_petek.py` `_puan_bolgesi`: her nokta için satır aralığı `|Δenlem|·110,574 < _r`
(±1 hücre), sütun aralığı satır aralığının EN BÜYÜK |enleminin| kosinüsüyle (±1 hücre;
kutba dayanırsa bütün satır); dilimler tam dizilerin dilimi; `_p[j0:j1, i0:i1] += _k`.
Kesinliğin üç şartı ve "boylam sarılmaz" notu kodun yorumunda yazılı.
⚠️ `uret_petek.py` tuzda ⇒ uygulandığı an önbellek tuzu değişir. **Koşu 15 sürerken
uygulanmaz.** İki yama (tuz + ayıklama) aynı anda uygulanırsa tek tuz değişimi olur.

## Ölçülmeyen / sınır
- Sınav maskeyi ve puan poligonunu kıyaslıyor; gövdenin geri kalanı (P ∩ gövde) aynı
  girdiden aynı işlemle geçtiği için değişmez — kutu koşusunun sha256 kıyası bunu uçtan
  uca doğrulayacak.
- 4.117 eşsiz kümenin 274'ü sınandı (%6,7); tam evren ~9 saat REF süresi ister. Kutu koşusu
  + ilk üretim koşusunun `denetle.py`/sha256 kıyası ikinci kapı.
- Tarih çizgisinde motorun puanı SARMAMASI (iki yaka birbirine puan vermiyor) ayrı bir
  motor sorusu; bu yama onu değiştirmiyor, yalnız not edildi.
  ⚠️ **GÖRÜLMÜŞ BORÇ, gerileme değil** (M-5187 ④): 180° boylamı çevresinde puan sarılmadığı
  için Çukotka · Alaska · Fiji gövdelerinde yamadan ÖNCE de bir kusur olabilir (yakadaki
  noktanın puanı öbür yakaya geçmiyor ⇒ kesici kapı orada gövdeyi fazla kesebilir).
  Ölçülmedi. Koordinatör `YAPILACAKLAR.md`ye aldı.
