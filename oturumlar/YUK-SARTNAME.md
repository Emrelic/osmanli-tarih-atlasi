# YÜK — sitenin açılışı niçin yavaş, çaresi ne

> Emre, 4 Ağustos 2026: *"SİTENİN AÇILMASI BİRAZ YAVAŞ SANKİ ÇOK MU YÜKLÜ OLDU BU"*
> Koordinatör ölçtü. ⚠️ Bu dosya **şartnamedir, kod değildir.**

---

## ① ÖLÇÜM — açılışta ne iniyor

`index.html` 41 betiği **eager** (hepsi, peşin) yüklüyor:

```
data/devletler_harita.js    37,9 MB   ┐
data/donemler.js            25,6 MB   ┘  ikisi = %92,6
data/altlik.js               4,2 MB
kalan 38 dosya               2,5 MB
────────────────────────────────────
TOPLAM                      70,2 MB      gzip'li tele ~18 MB iner
```

### Ağırlık dosyalarda DEĞİL, iki havuzda

```
donemler.js          PARCALAR          25,2 MB   %98,3
                     DONEMLER             304 KB   %1,2   ← 496 dönemin TAMAMI
devletler_harita.js  DEVLET_PARCALAR   37,4 MB   %98,6
                     DEVLET_HARITA        546 KB   %1,4   ← 228 devletin TAMAMI
```

🟢 **Künye, delta zinciri, sınır kutusu, petek listesi — hepsi 984 KB.**
🔴 **Geometri havuzları — 62,5 MB.**

### Asıl maliyet indirme değil, BELLEK
4,1 milyon koordinat çifti JS dizisi olarak kuruluyor. V8'de her `[lon,lat]`
≈ 85 bayt ⇒ **~350 MB heap.** Telefonda sekme öldürme sınırına yakın.

---

## ② ÇARE — ölçülmüş kazançlarıyla

| | iş | kazanç | kalite kaybı | sahip |
|---|---|---|---|---|
| **A** | havuzları dönem başına indir | 62,5 MB → **2,0 MB · 32×** | yok | MOTOR + ARAYÜZ |
| **B** | uzak coğrafyanın geometrisini seyrelt | dönem başına 1,8 MB'ın bir kısmı | ⚠️ **kasıtlı**, K4 | MOTOR |
| **C** | tekrar eden halkaları havuzla | 5,1 MB | **yok** | MOTOR |
| **D** | ardışık aynı noktaları sil | 1,9 MB | **yok** | MOTOR |

### 🔴 A'nın mümkün olduğu ÖLÇÜLDÜ — ve bir tuzağı var

`js/app.js:157` aktif petek listesini **delta zinciriyle** kuruyor:
dönem N'in durumu 1..N-1'e bağlı. ⇒ **Bir dönemi tek başına yükleyemezsin.**

🟢 Ama zincirin tamamı (`e`, `c` alanları) o **984 KB'ın içinde.** Geometri
(`o`, `v`, `g`) zincire hiç girmiyor. Bölme çizgisi tam oraya düşüyor:

```
PEŞİN  (~1 MB)   DONEMLER · DEVLET_HARITA · PETEKLER · SERBEST · damga
                 ⇒ zaman çizgisi, dizin, sınır kutusu, uçuş kipi ÇALIŞIR
GECİKMELİ        PARCALAR · DEVLET_PARCALAR — dönem değişince o dönemin
                 dilimi çekilir, önbelleğe alınır, komşu dönem önden çekilir
```

### Dönem başına gerçekte ne gerekiyor — ölçüldü
```
             toplam     Osmanlı    yabancı
en küçük    1.809 KB       3 KB   1.806 KB    1334-01-01
ORTANCA     2.030 KB     198 KB   1.832 KB    1547-02-01
en büyük    2.181 KB     234 KB   1.947 KB    1690-09-09
```

⚠️ **Dönem başına dilimleme YETMEZ, çünkü dilimler örtüşüyor:** dönem
başına yükün toplamı 71,5 MB, havuzun kendisi 25,1 MB ⇒ her halka ortalama
**2,8 dönemde** kullanılıyor. ⇒ Dilim dosyaları üretilirse 495 × 2 MB ≈ 1 GB
disk eder. **Doğrusu:** havuzu sabit boyutlu bloklara böl, dönem hangi
bloklara dokunuyorsa onları çek, tarayıcı önbelleği örtüşmeyi zaten yer.

### 🔴 B — ölçümün asıl söylediği şey
Bir dönemin ağırlığının **%90'ı yabancı sınırlar** (1.832 / 2.030 KB).
`ONCELIK.md` K4'e göre o coğrafyanın çoğu **kademe 2-3**; hedefi %82,5.
⇒ Atlas ağırlığının onda dokuzunu, tavanı zaten alçak olan bir işe ödüyor.
📌 Uzak devletlerin halkalarını Douglas-Peucker ile seyreltmek K3'ün
"ötesi israftır" hükmünün **doğrudan uygulaması** — kalite kaybı değil,
**kademe düzeltmesi.** Ne kadar seyreltilebileceği ÖLÇÜLMELİ, tahmin edilmemeli.

### C ve D — bedava, ölçüldü
```
donemler.js           5.609 halkanın 2.493'ü BİREBİR TEKRAR
devletler_harita.js  22.042 halkanın 5.143'ü BİREBİR TEKRAR   ⇒ 5,1 MB
her iki dosyada 145.000 nokta (%3,5) bir öncekiyle AYNI       ⇒ 1,9 MB
```
📌 C zaten çözülmüş bir problem: `DEVLET_PARCALAR` **havuz + indeks**
deseniyle duruyor. Aynı desen halkaların kendisine uygulanmamış, o kadar.

---

## ③ SIRA — K9 (Pareto) ile

```
1. D  ardışık nokta temizliği     en ucuz, %0 risk, bugün biter
2. C  halka havuzlama             ucuz, %0 risk
3. B  uzak coğrafya seyreltme     ÖNCE ÖLÇ: ne kadar seyrelirse ne kadar kazanır
4. A  gecikmeli yükleme           en büyük kazanç, en büyük iş, iki oturum
```
⚠️ **A'yı C ve D'den ÖNCE yapma.** C+D havuzu küçültür; A'nın blok
bölmesi küçülmüş havuza göre kurulmalı, yoksa iş iki kere yapılır.

## ④ SINAMA ÖLÇÜTÜ
```
① açılışta inen toplam bayt        70,2 MB → ölç ve yaz
② ilk boyalı harita kaç saniyede   önce/sonra, aynı makine
③ heap (Chrome görev yöneticisi)   ~350 MB → ölç ve yaz
④ dönem değiştirince takılma var mı — gecikmeli yüklemenin bedeli budur
⑤ denetle_yayin.py hâlâ TEMİZ mi   — URETIM_IZI zinciri kırılmamalı
```

⚠️ **Değişmezler pazarlık dışı:** C ve D geometriyi **değiştirmez**, yalnız
tekrarı siler. B geometriyi **değiştirir** ⇒ Değişmez 1/1b (sahipsiz alan ·
iç boşluk) B'den sonra yeniden koşulmalı; seyreltme iki halkayı ayırırsa
boşluk açar.
