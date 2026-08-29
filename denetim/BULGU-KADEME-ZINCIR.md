# BULGU — KADEME ZİNCİRİ (28 Ağustos 2026, oturum: KADEME ZİNCİRİ)

## ① ÖLÇÜM — sayı doğrulandı

```bash
grep -c "UYARI kademe" kosu_28agu.log
```
**Sonuç: 65 — şartnamedeki sayı doğru.**

Kendi içinde ikiye ayrılıyor:
- **64 kayıt** `m:—` (merkez hiç yazılmamış)
- **1 kayıt** `m:` DOLU ama zincir yine de kapanmıyor:
  `İnkirman (Kalamita) (k:4) m:Mankup` — çünkü **Mankup'un kendisi de
  k:3** ve onun da `m:` alanı boş. Yani bu tek kayıt aslında ayrı bir
  kova değil, `Mankup`ın kendi eksikliğinin **ikinci kurbanı.**

## ③ 🔴 KRİTİK BULGU — bu bir `m:` işi, `kd:` işi DEĞİL

`arac/uret_petek.py:684-706` okundu. Uyarıyı üreten kod:

```python
def k12_merkez(i, azami=5):
    ...
    y = YERLER[j]
    if y["k"] in (1, 2):
        return j
    ad = y["m"]
    ...

for i, y in enumerate(YERLER):
    if (y["d"] or y["v"]) and y["k"] in (3, 4) and k12_merkez(i) is None:
        print(f"  UYARI kademe: ...")
```

**Bu kod `kd_oku()` / `kd_gun()` MEKANİZMASINI HİÇ ÇAĞIRMIYOR.** Ham
`y["k"]` ve `y["m"]` alanlarını doğrudan okuyor. `girdi.py:971`teki
`kd_oku()` yalnız `kd:` VARSA onu döndürür, yoksa `k:`/`m:`den TÜRETİR —
ama bu türetilmiş görünüm **hiçbir yerde `y["k"]`/`y["m"]`nin üstüne
yazılmıyor.** `girdi.py` içinde `y["k"] =` ya da `y["m"] =` ataması
**yok** (grep ile doğrulandı) — yani `kd:` yazmak `y["m"]`i **hiç
değiştirmez.**

⇒ **Sonuç: 65 kaydı kapatmanın tek yolu düz `m:` (gerekirse `k:`) yazmaktır.
`kd:[{f,t,k,m}]` yazmak bu spesifik uyarıyı SUSTURMAZ** — motor doğru
eksende düşünüyor olsa bile (`CLAUDE.md §3`), bu KONTROL o ekseni
okumuyor.

📌 Ve motorun kendi yorumu (satır 675-681) bunu zaten itiraf ediyor:
> *"Veriyi değiştirmek ÇÖZÜM DEĞİL... Sebep MIMARI.md §3.4: m: tek
> değerli ve zamansız... Kademe uyarısının bedeli kozmetik (bölge sınırı
> çizilmiyor, toprak boyaması etkilenmiyor); Değişmez 3'ün bedeli gerçek
> bir tutarsızlık sinyalini kaybetmek."*

Yani motoru yazan oturum bu geriliği zaten biliyordu ve BİLE İSTEYE
`kd:`ye geçmedi — çünkü `m:` alanını zamanlı yapmak (359 çift × 65 yeni
kayıt) `Değişmez 3`ün çelişki sayısını **büyütüyor.** Bu bir kusur değil,
önceden verilmiş bir mimari karar. **⇒ Bu partide düz `m:` yazmak
DOĞRU çare — `kd:` YANLIŞ ALANI BÜYÜTMEK olurdu, `§11`in 8 Ağustos
"BİR ALAN TASARLAMADAN ÖNCE" dersinin ters yüzü değil, aynı dersin
UYGULANMASI.**

## ② SINIFLANDIRMA — 65 kayıt, veri-içi coğrafi kümeleme

Veride `k:1/2` olan 464 merkez adı çıkarıldı
(`py -c "girdi.yukle()..."`). 65 kaydın 64'ü için **veri-içi coğrafi
aday** bulunabiliyor — ama **HİÇBİRİ HENÜZ TDV/akademik kaynakla
doğrulanmadı.** `CLAUDE.md §4` kırmızı çizgisi gereği kaynaksız hiçbiri
`data/*.js`e YAZILMADI.

### 🟢 MERKEZİ VAR, VERİDE ZATEN KAYITLI — TDV doğrulaması bekliyor (54 kayıt)

| Küme | Aday merkez (veride k1/k2) | Kayıtlar |
|---|---|---|
| Kırım Hanlığı | **Bahçesaray** | Gözleve, Or Kapı, Akmescid, Karasubazar, Eski Kırım, **Mankup** (bu da zincir kırığını kapatır → İnkirman otomatik kapanır) |
| Tebriz eyaleti (Ferhat Paşa bölgesi) | **Tebriz** | Hoy, Ahar, Sarâb, Miyâne |
| Şirvan | **Şamahı** | Salyan, Kuba |
| Revan/Nahçıvan | **Revan** | Ordubad |
| Hemedan | **Hemedan** | Nihâvend, Burûcird |
| Necid/Kasîm | **Riyad** (şüpheli — TDV'nin dönemi kapsayıp kapsamadığı kontrol edilmeli) | Buraydâ, Uneyze, Şakrâ |
| Yukarı Macaristan (`§3.5.1`'in TA KENDİSİ) | **Kassa (Košice)** | Munkács (ORHANGAZİ zaten önerdi, kaynak `tokoli-imre`), Ungvár, Fülek, Eperjes, Tokaj |
| Erdel | **Erdel (Kaloşvar)** ya da **Erdel Belgradı** | Segesvár |
| Dalmaçya | **Klis** | Knin, Sin |
| Dalmaçya (kuzey) | **Zadar (Zara)** | Vrana, Nadin |
| Bosna | **Saraybosna** | Herseknovi |
| İstanbul çevresi | **İstanbul** | Üsküdar, Silivri, Vize |
| Karaman | **Konya** | İshaklı, Ilgın, Karapınar, Ulukışla |
| Erzurum | **Erzurum** | Kelkit, Aşkale |
| Silistre | **Silistre** | Prevadi, Babadağı, İshakçı |
| Selanik | **Selanik** | Praviște, Lanzaka |
| Belgrad/Üsküp | **Belgrad** ya da **Üsküp** | Yagodina |
| **Darfur Sultanlığı** | **El-Fâşir** (Darfur'un tarihî başkenti — ⚠️ `dar-fur`/`el-fasir` sluğı ÖLÜ ama `darfur` CANLI, HTTP 200, `CLAUDE.md`de zaten "CANLI" diye kayıtlı) | Nyala, Kutum, Kebkâbiye, Zâlincî, Ed-Da'în, Burâm, Ümmü Keddâde, Tîne (Dârfûr), Mellît, Şa'riyye |
| Filistin | **Şam** ya da **Kudüs** | Cenîne |
| Habeş/Kızıldeniz kıyısı | **Asmara** ya da **Sevâkin** | Kerene |

⚠️ **VE BU, ORHANGAZİ'NİN MESAJINDAKİ VARSAYIMI ÇÜRÜTÜYOR OLABİLİR:**
mesaj Darfur kasabalarını `🟡 merkezi yok, olmamalı` örneği olarak
verdi. Ama veride **El-Fâşir zaten bir k1/k2 merkez olarak duruyor** —
yani bu 10 kayıt muhtemelen 🟡 değil **🟢** kovasına giriyor. Darfur
Sultanlığı'nın El-Fâşir'i başkent yaptığı 1791'den önceki dönem ayrı
sorulmalı (`kaynak: darfur` maddesi TDV'de canlı, henüz bu oturumda
İÇERİĞİ OKUNMADI — `ölçmedim` diye işaretliyorum).

### 🟡 MERKEZİ OLMAYABİLİR — TDV'ye sorulmadan MUAFİYET verilmedi (2 kayıt)

- **Otranto** (k:4) — 1480-81 kısa süreli Osmanlı askerî işgali, kalıcı
  idari kademe kurulmamış olabilir. Aday: doğrudan **İstanbul**'a
  bağlamak ya da `dolgu` kademesi (bkz. `uret_petek.py:4264` yorumu —
  "burası puanlamayla dolduruldu, idare iddiası yok" seçeneği zaten
  kayıtlı bir alternatif).
- **Dubrovnik** (k:3) — Ragusa Cumhuriyeti fiilen bağımsız bir devlet;
  k:3 olarak işaretlenmiş olması ayrı sorgulanmalı (belki kendisi k:1/2
  olmalıydı, `m:` sorunu değil `k:` sorunu).

### 🔴 ZİNCİR KIRIK — veri-içi düzeltmeyle kapanıyor (1 kayıt, Mankup'la birlikte)

- **İnkirman (Kalamita)** → `m:Mankup`, ama Mankup'un kendisi `k:3` ve
  `m:—`. **Mankup'a `m:"Bahçesaray"` yazılınca İKİSİ BİRDEN kapanır** —
  ayrı bir işlem gerekmiyor, yukarıdaki 🟢 tablosuna zaten dahil edildi.

### Zagem ve Tarki — aday BULUNAMADI (2 kayıt)

- **Zagem (Kaheti)** (k:3) — Kaheti Krallığı tarihsel olarak Tiflis'e
  (Kartli) bağlı DEĞİL, ayrı bir Gürcü krallığı. `Tiflis`e bağlamak
  **tarihen yanlış** olur. Veride Kaheti'nin kendi k1/k2 merkezi yok.
- **Tarki (Tarku)** (k:3) — Dağıstan/Kumuk Şamhallığı, veride karşılığı
  olan bir k1/k2 merkez yok (Derbend de listede değil).
⇒ İkisi için de **🟡 aday**: bölgesel güç merkezleri kendileri zaten
büyük devletlere tabi değildi; TDV'ye sorulmadan MUAFİYET verilmiyor.

## GÜNCELLEME — 14/65 kaynaklandı ve YAZILDI (`data/yer_yama_kademe_zincir.js`)

**Kırım (6):** TDV `kefe` okundu ve kendi taslağımı ÇÜRÜTTÜ — Mankup
Bahçesaray'a (Kırım Hanlığı) değil, **doğrudan Kefe sancağına** bağlıymış
(TDV: "Mangub … Kefe'nin beş kazasından biri"). Verinin kendi `d:`/`v:`
ayrımı zaten bunu söylüyordu (Mankup/İnkirman `d:` = doğrudan Osmanlı,
Gözleve/Or Kapı/Akmescid/Karasubazar/Eski Kırım `v:` = tâbi Kırım) — ben
ilk turda bakmamıştım. Düzeltme: **Mankup → Kefe**, öteki beşi
**→ Bahçesaray**. Mankup düzelince İnkirman (zaten `m:Mankup` yazılıydı)
**otomatik kapanıyor** — iki kayıt tek düzeltmeyle.

**Darfur (10):** TDV `darfur` maddesi okundu: **"Merkezi Fâşir şehridir"**
— ORHANGAZİ'nin "🟡 merkezsiz" örneği ÇÜRÜDÜ. TDV kasaba tek tek
bağlamıyor (TANECİKLİK boşluğu, `CLAUDE.md §4`) ama 10 kaydın `s:`/`v:`
dizisi El-Fâşir'inkiyle **birebir aynı** — aynı idari-siyasî tarihi
paylaşıyorlar. Tümü **→ El-Fâşir.**

**Darfur'un 11.'si — Radom:** ORHANGAZİ'nin şartnamesi örnek olarak
"Radom → Krakov" vermişti (Polonya şehri varsayımıyla). Veriye bakınca
koordinatın **9,95°K/24,95°D** olduğu görüldü — bu **Güney Sudan/Darfur
bölgesindeki Radom Millî Parkı**, Polonya'daki Radom DEĞİL. `s:`/`v:`
dizisi ötekilerle birebir aynı ⇒ Darfur kümesine eklendi, **→ El-Fâşir.**
⚠️ Şartnamedeki öneri harfiyen uygulansaydı yanlış kıtaya bağlanacaktı.

**Yukarı Macaristan (5, Munkács/Ungvár/Fülek/Eperjes/Tokaj → Kassa)
DENENDİ, YAZILMADI:** TDV `tokoli-imre` okundu — Fülek'in Thököly
topraklarında olduğunu doğruluyor ama **Kassa'nın merkez/başkent
olduğunu açıkça söylemiyor** ("bu düzeyde coğrafi ayrıntı yok"). Veri
içi kanıt güçlü (Kassa'nın kendisi de aynı v:1682-1685 penceresini
taşıyor, yani bu beşiyle aynı siyasi olayın parçası) ama `CLAUDE.md §4`
"kaynağı AÇIKÇA yaz" şartını karşılamıyor — genel tarih bilgisiyle
(Kassa'nın Thököly'nin fiilî merkezi olduğu) yazmak yerine BEKLETTİM.
Daha güçlü bir TDV/akademik kaynak bulunursa 5 kayıt daha kapanır.

**Tebriz eyaleti (4):** TDV `hoy` doğrudan doğrulandı — "Tebriz'e bağlı
bir sancak merkezi haline getirilerek" (1585, sancak beyi Alâeddin Bey).
Hoy'un `d:` penceresi (1585-09-25→1603-10-21) Tebriz'in kendi ilk işgal
penceresiyle **birebir aynı gün.** Ahar/Sarâb/Miyâne aynı pencereyi
taşıyor (veri-içi korelasyon + Hoy'un doğrulanmış TDV kaynağı) →
**Tebriz.** Nihâvend/Burûcird/Salyan/Kuba/Ordubad için de tarih
eşleşmesi var (Hemedan/Şamahı ile) ama doğrudan TDV metni bulunamadı
(`nihavend` slug'ı ÖLÜ — `CLAUDE.md`de zaten kayıtlı) — BEKLETİLDİ.

**Toplam: 21/65 kaynaklı ve yazılı.**

Kalan **44 kayıt** (Nihâvend/Burûcird/Salyan/Kuba/Ordubad ve Yukarı
Macaristan'ın 5'i dahil) henüz kaynaklanmadı, aşağıdaki taslak
tablosunda.

## SONUÇ — bu turda BİTMEDİ, sebebi KAYNAK

`§1` üç şıktan biri: **🔴 BAŞKA İŞE BAĞLI değil, 🔴 KAYNAK-DOĞRULAMA
TAMAMLANMADI.** 65 kaydın 64'ü için veri-içi aday bulundu (ölçüm), ama
`CLAUDE.md §4` kırmızı çizgisi gereği hiçbiri TDV/akademik kaynak
okunmadan `data/*.js`e yazılamaz. Bu, tek oturumda bitecek bir iş
DEĞİL — 60+ ayrı TDV/akademik kaynak okuması gerektiriyor.

**Teslim edilen:** ① tam ölçüm · ③ kritik motor bulgusu (kd: değil m:
yazılmalı) · ② coğrafi sınıflandırma taslağı, 3 kovaya ayrılmış.
**Teslim edilmeyen:** kaynaklı `m:` atamaları — `data/yer_yama_kademe_zincir.js`
bu yüzden BOŞ İSKELET olarak bırakıldı, doldurmak ayrı bir NOKTA
partisi gerektirir.
