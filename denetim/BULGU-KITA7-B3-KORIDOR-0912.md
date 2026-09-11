# BULGU — KITA 7: B3 KORİDOR (12 Eylül 2026)

> Sevk: 1.MURAT, "🟢 KOŞU BİTTİ — `arac/` ARTIK AÇIK ... B'nin üç
> parçasından ②'si senin." Zemin: `denetim/YAMA-B3-LOG-0911.py`.
> Öngörü: `denetim/ONGORU-KITA7-B3-KORIDOR-0912.json` — D022 itirafıyla,
> kısmen ölçümden sonra yazıldı, damgalandı.

---

## ① YAMA UYGULANDI — `arac/uret_petek.py`, YALNIZ bu dosya

🔓 Delegasyon gereği (`"sen yaz ve commit'le, ama YALNIZ arac/uret_petek.py
ve YALNIZ bu yama. Başka satıra dokunma."`) üç blok eklendi:

```
① _B3_KALAN_IHLAL = []          — global liste, _B23_SAYAC bloğunun altına
② _b3_koridor_kirp() içi        — "kb"/"yerlesim" muafiyet dallarını
                                  BİRLEŞTİRİP her kaydı isim+km²+HER İKİ
                                  genişlik tanımıyla (w_der VE agiz.length/2)
                                  ve bir ayrışma bayrağıyla loglayan blok
③ yeni print bloğu               — mevcut "🧩 B3 KORİDOR:" satırının altına,
                                  isimli/km² döküm + ayrışma sayacı
```
`git diff --stat -- arac/uret_petek.py`: **55 ekleme, 5 çıkarma** — yalnız
bu üç blok. `py -m py_compile`: SYNTAX OK. **Karar sadece VERİDE
görünürlük ekliyor, mevcut B3 kararını (hangi bileşen doldurulur/bırakılır)
DEĞİŞTİRMİYOR** — `YAMA-B3-LOG-0911.py §④`'ün kendi garantisi.

---

## ② İKİ TANIM DA KAYDEDİLDİ

```python
w_der = 2.0 * c.area / c.length            # KOD — gövde ortalaması
agiz_genislik = agiz.length / 2.0          # EMRE — ağzın kendisi
_ayrisiyor = (d_der > w_der) != (d_der > agiz_genislik)
```
Her `_B3_KALAN_IHLAL` kaydı artık: `(isim, km2, derinlik_km,
genislik_km_govde, sebep, genislik_km_agiz, ayrisiyor_mu)`.

---

## ③ ÖLÇÜM — pilot kutu, depo DIŞINDA (20 saatlik tam koşu AÇILMADI)

**İlk deneme (v1) ÇÜRÜTÜLDÜ, kendim tarafımdan.** `agiz`ı düz bir dikey
çizginin kesişimiyle yaklaşıklıyordu ve gerçek `disari`/`disari_kenar`/
`kapat()` zincirini taşımıyordu — kontrol vakasında (40 birimlik bilinen
ağız) `agiz-genişlik=0.1` gibi apaçık yanlış bir sayı üretti. **Bu sonuç
KULLANILMADI, raporlanmadı, silindi.**

**İkinci deneme (v2, `denetim/ARAC-KITA7-B3-PILOT-0912.py`)** —
`arac/uret_petek.py`nin GERÇEK `kapat()` (satır 1264-1277) ve `temiz()`
(satır 86-91) fonksiyonlarını BİREBİR kopyaladı (motoru import etmeden —
motoru import etmek bütün `YERLESIMLER`i yüklemeyi gerektirir, bu test
için gereksiz ağır), gerçek `B3_KAPAMA_DER=0.45` sabitini kullandı, ve
`_b3_koridor_kirp()`in `disari`/`disari_kenar`/`agiz`/`w_der`/`d_der`
ölçüm zincirini SATIR SATIR aynı sırayla uyguladı. Test şekli B3'ün
GERÇEKTEN gördüğü sınıfla (bir gövdenin kenarından içeri giren, `kapat()`
tarafından doldurulacak bir NOTCH/kanal) birebir eşleşiyor — B3, dışarı
çıkan bir çıkıntı değil, `aday = k.difference(g)` yani kapatma adayı olan
bir İÇ ÇUKUR üzerinde çalışıyor.

**Ölçüm (300 rastgele sentetik kanal, ağız/gövde/derinlik B3_KAPAMA_DER
~50 km ölçeğinde rastgele):**
```
denenen kanal                          300
kapanmayan (KAPAMA_DER bu ölçekte yetersiz, test dışı)   26
ölçülebilen bileşen (ağız bulundu)     331   (bazı kanallar birden
                                              fazla parçaya bölündü)
🔴 AYRIŞAN (kod ile Emre'nin kuralı FARKLI karar verir)   78   (%23,6)
ikisi de "DOLDUR" dedi                 166
ikisi de "SIĞ/BIRAK" dedi              87
```

**VE AYRIŞMANIN YÖNÜ — sekiz örneğin sekizi de AYNI YÖNDE:**
```
kod = DOLDUR   ·   Emre'nin kuralı = BIRAK
```
Ters yön (kod SIĞ derken Emre DOLDUR derdi) 331 bileşenin **hiçbirinde**
görülmedi. Bu, `denetim/BULGU-KORIDOR-AGZI-0911.md §2`'nin el yapımı
dogbone örnekleriyle bulduğu TEK YÖNLÜLÜK bulgusunu — artık rastgele,
gerçek `kapat()` zinciriyle kurulmuş 331 bileşenlik bir örneklemde —
**doğruluyor ve genişletiyor**: ayrışma nadir bir kenar durumu değil,
bu ölçekte kurulan koridorların **yaklaşık dörtte birinde** oluşuyor.

⚠️ **Sınırları, açıkça:**
```
① SENTETİK — düz kenarlı yamuk kanallar. Gerçek B3 bileşenleri
   Voronoi hücrelerinin ve kıyı/nehir yaslamasının ürettiği DÜZENSİZ,
   eğri kenarlı şekiller — gerçek üretimdeki sıklık bundan FARKLI olabilir.
② "Kaç km²" sorusu ÖLÇÜLEMEDİ (D107 damgası, bulunamadı DEĞİL,
   ölçülemedi): bu agregat (`_B3_KALAN_IHLAL` toplam km²) YENİ bir
   çıktı — hiçbir geçmiş logda yok, ve sentetik pilotun kendi km²
   sayıları (keyfi seçilmiş derece ölçeğinde) gerçek yerleşim
   dağılımını YANSITMIYOR. Güvenilir bir km² sayısı ya tam üretim
   koşusundan (yasak, 20 saat) ya da sınırlı-coğrafya gerçek bir motor
   koşusundan (bu görevin kapsamı dışında — ayrı bir mühendislik işi,
   `BOLGE` kutusunu daraltıp `girdi.py`yi o alt kümeye kısıtlamak
   gerekir) gelebilir.
③ "Kaç koridor" (SAYI, km² değil) sorusu ise MEVCUT bir ölçümle
   cevaplanabilir, çünkü bu yama saf EKLEMEDİR ve mevcut kararı
   DEĞİŞTİRMEZ: `kosu_3eylul_2.log:1943`
   `🧩 B3 KORİDOR: ... 3081 yerleşimli · 17 k.boşluk` ⇒ **3098
   petek-gün** (b3_yerlesim+b3_kb toplamı) — bu, yamanın
   `_B3_KALAN_IHLAL` listesinin TOPLAM KAYIT sayısıyla (isimsiz/km²'siz
   hâliyle) örtüşmesi beklenir. 🔴 AMA D129 uyarısı: bu taban 3 Eylül
   2026'nın yerleşim tabanına (o günkü petek sayısı) göre ölçüldü;
   bugünün tabanı (12 Eylül) farklıysa sayı KAYMIŞ olabilir — kesin
   sayı ancak yeni bir tam koşuyla doğrulanır.
```

---

## ④ HÜKÜM — Emre'nin kuralı bugünkü kodla UYGULANIYOR MU?

**HAYIR, TAM OLARAK DEĞİL.** Kod, "derinlik ağzın genişliğini geçemez"
kuralını `d_der <= w_der` (satır 1664) ile uyguluyor — burada `w_der`
AĞZIN DEĞİL GÖVDENİN ortalama genişliğidir (`2*alan/çevre`). Bu, Emre'nin
kastettiği ölçütün bir YAKLAŞIKLAMASI, kendisi değil. ③'teki ölçüm bu
yaklaşıklamanın **~%24 oranında** yanlış karara vardığını, ve HER
SEFERİNDE aynı yönde yanıldığını gösteriyor: **kod, ağzı geniş/gövdesi
dar koridorları yanlışlıkla DOLDURUYOR** — Emre'nin kuralına göre bunlar
SIĞ sayılıp bırakılmalıydı. Bu, `BULGU-KORIDOR-AGZI-0911.md §2`'nin
tarif ettiği SESSİZ hata sınıfı: kullanıcı bir "uzun ince şerit haritada
kaldı" şikâyeti göremez, çünkü hata görünür bir kalıntı bırakmıyor —
tam tersine, olması gereken bir boşluğu/suyu sessizce karaya çeviriyor.

**DÜZELTME ÖNERİSİ:**
```python
# satır 1652'de zaten hesaplanıyor:
agiz = temiz(c.intersection(disari_kenar))
w_der = 2.0 * c.area / c.length
try:
    agiz_genislik = agiz.length / 2.0     # 🟢 YENİ — ek geometrik işlem YOK
except Exception:
    agiz_genislik = w_der                 # güvenli varsayılan: eski davranış
...
if d_der <= agiz_genislik:                # 🔴 satır 1664 — w_der YERİNE
    _B23_SAYAC["b3_sig"] += 1
    continue
```
**Maliyet: SIFIRA yakın.** `agiz` zaten belleğe alınmış durumda (satır
1652), yalnız `.length` okunuyor — `hausdorff_distance` gibi pahalı bir
işlem eklenmiyor. `denetim/BULGU-KORIDOR-AGZI-0911.md §3`'ün ölçtüğü gibi
maliyet "uygulanamaz" değil, ucuz ve uygulanabilir.

⚠️ **Uygulamadan önceki şart** (aynı belgenin §5②'si ve §3'ün kendi
uyarısı): `agiz.length/2.0` yalnız `agiz` TEK PARÇA ve şerit-benzeri iken
güvenilir; çok parçalı veya çok köşeli ağızlarda formül bozulabilir. Bu
YAMA (③'teki ölçüm) bunu sentetik, düzenli kenarlı şekillerle sınadı;
**gerçek üretim verisiyle (koşu 10) ayrıca sınanmadan** üretim kararı
olarak GÜVENİLMEMELİ — önerilen sıra: önce bu görevin yaması (isim/km²/
her iki tanım) bir koşuda çalışsın, GERÇEK verideki ayrışma oranı ve
`agiz` parça sayısı dağılımı ölçülsün, SONRA satır 1664 değiştirilsin.

---

## ⑤ D129 — `denetle.py`'nin koridor tavanları hâlâ geçerli mi?

`arac/denetle.py` içinde `B3_KAPAMA_DER`, `w_der`, `agiz`,
`_B3_KALAN_IHLAL`, `b3_dolduruldu`, `b3_sig`, `b3_kapali` adlarının
HİÇBİRİNE referans **bulunamadı** (tarandı, D107 damgası: bulunamadı).
En yakın aday `denetle.py:2359-2442`'deki `"A-koridor" (≤300 km) /
"B-bilinmiyor" (300-800) / "C-hakiki" (>800)` kovası — ama bu BAŞKA BİR
mekanizmayı ölçüyor: KOPUK GÖVDE (bir yerleşimin ana kütleden AYRI bir
parça olarak çizilmesi, `B2_ENKLAV_KM=800` köprüleme eşiğiyle ilişkili),
B3'ün TEK bir gövdenin kendi kıyı çentiğini doldurup doldurmama kararıyla
İLGİSİZ. B3, bir gövdeyi başka bir gövdeden AYIRMIYOR/BİRLEŞTİRMİYOR;
yalnızca aynı gövdenin bir iç çentiğini doldurup doldurmadığına karar
veriyor.

**⇒ HÜKÜM: bugün B3'ün karar ölçütüne (w_der/agiz) BAĞLI hiçbir
`denetle.py` tavanı YOK, dolayısıyla bugün YENİDEN TÜRETİLECEK bir eşik
DE YOK.**

🔴 **AMA D129'un asıl uyarısı ileriye dönük:** eğer ④'teki düzeltme
(`w_der` → `agiz_genislik`) uygulanırsa, `_B23_SAYAC["b3_dolduruldu"]`
sayısı **azalacak** (③'ün ölçtüğü ~%24'lük dilim artık DOLDUR yerine
BIRAK diyecek) ve B3'ün ürettiği toplam kara alanı (km²) buna bağlı
olarak **düşecek**. Bugün bu sayılara bağlı bir `denetle.py` tavanı
olmadığı için hiçbir şey KIRILMIYOR — ama **birileri ileride
`_B3_KALAN_IHLAL`in km² toplamına ya da `b3_dolduruldu` sayısına dayanan
YENİ bir tavan yazarsa, o tavan MUTLAKA düzeltme SONRASI (agiz_genislik
kriterli) bir koşudan türetilmeli, kosu_3eylul_2.log'un (3081/17,
w_der kriterli) tabanından DEĞİL.** Bu, D129'un tam kendisi: taban
(karar kriteri) değişirse, o tabana göre kurulacak her yeni tavan da
YENİDEN türetilmelidir — bugün için bir düzeltme gerektirmiyor, çünkü
öyle bir tavan HENÜZ yazılmadı, ama YARIN yazılacak birine bir UYARI
NOTU olarak burada kayıtlı.

---

## Teslim özeti

```
① yama uygulandı VE commit edildi (yalnız arac/uret_petek.py, 55+/5-)
② iki tanım (w_der, agiz.length/2) + ayrışma bayrağı loglamaya EKLENDİ
③ pilot ölçüm: 331 sentetik bileşen · %23,6 ayrışma · TEK YÖNLÜ
   (kod=DOLDUR/Emre=BIRAK) · km² sorusu ÖLÇÜLEMEDİ (gerçek koşu gerekir) ·
   koridor SAYISI mevcut ölçümden (3098, kosu_3eylul_2.log) tahmin edildi,
   D129 kaydıyla (taban 3 Eylül'e ait, bugün doğrulanmadı)
④ hüküm: kural TAM uygulanmıyor — w_der yaklaşıklaması ~%24 oranında,
   HER ZAMAN AYNI YÖNDE (fazla doldurma) yanılıyor. Düzeltme: satır
   1664'te w_der yerine agiz_genislik = agiz.length/2.0, maliyet ~0,
   ama üretim verisiyle sınanmadan uygulanmamalı
⑤ D129: bugün B3'e bağlı hiçbir denetle.py tavanı YOK (bulunamadı) —
   yeniden türetilecek bir şey de yok, ama gelecekte böyle bir tavan
   yazılırsa hangi taban üzerine kurulacağı burada kayıtlı
```
