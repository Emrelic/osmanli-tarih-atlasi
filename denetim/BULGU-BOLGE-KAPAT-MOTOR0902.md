# BULGU — BÖLGE `kapat()` YARIÇAPI ÖLÇÜLDÜ

**MOTOR-0902 · 2 Eylül 2026 · öngörü: `denetim/ONGORU-BOLGE-KAPAT.md` (M-2151, ölçümden ÖNCE damgalı)**

🔴 **MOTORA DOKUNULMADI.** Koşu (PID 27596) sürerken yapıldı; `uret_petek.py`
yalnız **salt okunur** açıldı (`ast`), çalıştırılmadı. Ölçüm üretilmiş
çıktılar üzerinde koştu.

---

## 0. ÖNCE KENDİ ÖNGÖRÜMÜN ÇÜRÜYENİ — ① TUTMADI

Öngörü ①: *"r=0,15°'te bölge yaslanması %2,0–%3,2 bandında"* (OK107: %2,6).
**Ölçüm: %4,0.** Bandın dışında.

Kendi kuralımı yazmıştım: *"bandın TAMAMEN dışına çıkarsa mazeret YOK —
hattım yanlış demektir ve ②-⑤'i raporlamam."* O yüzden **önce hattı
sınadım**, tabloyu yayımlamadan.

### Hat sınavı — aynı ölçütü YAYINDAKİ çıktılara uyguladım
```
                              BENİM HATTIM              OK107
① yayındaki bolgeler.js   19.540 örnek · N%2,1 · S%2,5   22.727 · N%0,4 · S%2,2
② yayındaki petek_govde   282.521 örnek · N%1,5 · S%3,3  66.823 · N%1,1 · S%4,3
```
```
🟢 TUTAN    petek NEHİR  %1,5 ↔ %1,1     · SIRT ikisi de aynı mertebede
🔴 TUTMAYAN bölge NEHİR  %2,1 ↔ %0,4     · beş kat
```
**Ve topoğrafya kümem motorun kendi loguyla BİREBİR:** göl 705=705 ·
baraj 135=135 · **nehir 293=293** · dağ sırası 275=275. (İlk turda 291
çıkmıştı; sebebi `uret_petek.py:564`teki `BUYUK_SADE |= {...}` satırını
kaçırmamdı — eksik iki parça rastgele değil **Büyük Menderes ile
Kızılırmak**'tı. Düzeltildi.)

### ⚠️ SEBEBİ TAM AÇIKLAYAMIYORUM — ve "açıklayamadım" diye yazıyorum
İki aday var, **ikisini de ÖLÇMEDİM**:
```
① OK107'nin ölçtüğü bolgeler.js BAŞKA BİR KOŞUDAN. Bugünkü dosya TAVAN 200
   koşusunun (11:50) çıktısı; o koşunun bolgeler.js'i bende YOK.
② OK107'nin PETEK tabanı kendi beyanıyla KISMÎ: "petek örneklemi ilk
   600/6392" — yani dünya değil, havuzun ilk dilimi. Yani onların
   %5,4 ↔ %2,6 çiftinin kendisi de like-for-like olmayabilir.
```
⇒ **Mutlak kalibrasyonum DOĞRULANMADI.** Aşağıdaki tablo bu damgayla
okunmalı.

---

## 1. TABLO — üç yarıçap, AYNI hat · AYNI petek · AYNI örnekleme

```
 yarıçap |   örnek | NEHİR | SIRT | TOPLAM | parça | parçası ARTAN bölge
---------|---------|-------|------|--------|-------|--------------------
0,15 bugün|  24.032 |  %1,8 | %2,3 |  %4,0  |  293  |         0
0,05      |  26.333 |  %1,7 | %2,1 |  %3,7  |  287  |         2
0,00      |  29.540 |  %1,5 | %1,8 |  %3,3  |  296  |         7
```

### 🔴 VE ORAN YANILTIYOR — MUTLAK SAYIYA BAKIN
```
 yarıçap |  örnek | nehir | sırt | nehir+sırt (MUTLAK)
---------|--------|-------|------|--------------------
0,15     | 24.032 |  428  | 541  |       969
0,05     | 26.333 |  440  | 543  |       983
0,00     | 29.540 |  456  | 525  |       981
```
**Yaslanan köşe sayısı DEĞİŞMİYOR: 969 → 983 → 981 (%±1,4).**
Değişen **payda**: 24.032 → 29.540 (**+5.508 köşe, +%23**).

⇒ Yarıçap küçülünce doğan **5.508 yeni köşenin yalnız 12'si** topoğrafya
üzerinde. Yani ***`kapat()` yaslanmayı SİLMİYOR — topoğrafik OLMAYAN
kıvrımı siliyor.*** Oran düşüyor çünkü payda şişiyor.

---

## 2. ÖNGÖRÜLERİN HESABI

```
① hat doğrulaması  🔴 ÇÜRÜDÜ   %4,0, band %2,0-3,2 dışı — mazeret YOKTU, kabul
② yaslanma ARTAR   🔴 ÇÜRÜDÜ   AZALDI (%4,0→%3,3). "MAZERET YOK" yazmıştım.
                               Muhakemem (kapat salt ekleyici) DOĞRUYDU ama
                               ORANIN PAYDASINI hesaba katmamıştım.
③ r=0 → %3,5-5,0   🔴 ÇÜRÜDÜ   %3,3 — bandın hemen altında (mazereti VARdı)
④ parça ARTAR      🟢 TUTTU    parçası artan bölge 0 → 2 → 7
⑤ 0,05 orta yol    🔴 ÇÜRÜDÜ   kazanç YOK (oran düşük, mutlak sabit), bedel VAR
```
📌 **Beş öngörünün dördü çürüdü ve bilgiyi çürüyenler taşıdı.** Özellikle
②: yanlış çıkması, oranın **payda duyarlı** olduğunu görmemi sağladı — tablo
yalnız yüzdeyle okunsaydı tam ters hüküm verilecekti.

---

## 3. 🔴 ASIL BULGU — OK107'NİN KENDİ İŞARETLEDİĞİ VARSAYIM SINANDI VE TUTMADI

OK107 şöyle yazmıştı ve **eksiğini kendisi bildirmişti**:
> *"`kapat(0,15°)` + `delikleri_doldur()` **içbükey ayrıntıyı doldurur** — ve
> nehir kıvrımı tam olarak içbükey ayrıntıdır."*
> ⚠️ ölçmediklerinde: *"`kapat()` hipotezini deneyle sınamadım, **koddan
> çıkardım**."*

**Sınandı. Hipotez tutmuyor:**
```
kapama TAMAMEN kaldırıldığında (r=0,00) bile
   bölge yaslanması  %3,3
   petek yaslanması  %4,8 (benim hattım) / %5,4 (OK107)
⇒ kapama SIFIRLANSA DA bölge, peteğin yaslanmasına ULAŞMIYOR.
```
⇒ **Kayıp `kapat()`tan gelmiyor.** Sebep **yapısal**: bölge, peteklerin
BİRLEŞİMİDİR ve birleşim **iç petek sınırlarını yok eder** — oysa yaslanmayı
taşıyan kenarların çoğu tam o iç sınırlardır (komşu peteklerin nehir/sırta
oturmuş ortak kenarları). Dış kabuk zaten çoğunlukla kıyı ve Voronoi
kenarıdır.

📌 Bu, `§11`in ***"ölçüm doğru, çıkarım yanlış"*** sınıfı: OK107'nin
**%5,4 → %2,6 ölçümü doğru**, `kapat()`a **atfetmesi** sınanmamıştı — ve
sınanınca tutmadı. Kendisi zaten "çıkarım yaptım" diye işaretlemişti;
işaretlediği yer tam da kırılan yer çıktı.

---

## 4. HÜKÜM

```
🔴 YARIÇAP KÜÇÜLTME YANLIŞ — öneri (a) UYGULANMAMALI
   kazanç : YOK   (mutlak yaslanma 969 → 981, gürültü mertebesinde)
   bedel  : VAR   (parçası artan bölge 0 → 2 → 7; Kahire 11→15, Trablus 1→3,
                   Bingazi 2→4, İstanbul 4→5, Medine 12→13, Murzuk, Hartum)
```
Ve bu, **OK107'nin kendi önceden yazdığı sınavının** verdiği hükümdür:
> *"kopuk bölge parçası sayısı birlikte ölçülmeli; **ikincisi artıyorsa (a)
> yanlıştır**."*

🟢 Koordinatörün *"(b) eğilimliyim, (a) değil"* sezgisi **ölçümle
desteklendi** — ama (b)'nin kendisi (yalnız gerçekten kopuk parçalara kapama
uygulamak) **bu ölçümde sınanmadı**; ayrı bir iştir.

### Sıradaki iş, eğer `§③` gerçekten isteniyorsa
Yaslanma bölge katmanına **`kapat()` ayarıyla** geri gelmez. Gelmesi için
bölge sınırının **kendisinin** topoğrafyaya yaslanması gerekir — yani petek
için koşan yaslama, bölge kabuğuna **ayrıca** uygulanmalı. Bu bir **ayar
değişikliği değil, yeni bir aşamadır** ve maliyetini **ÖLÇMEDİM**.

---

## 5. ÖLÇMEDİKLERİM — açıkça
```
· mutlak kalibrasyonum doğrulanmadı (§0) — tablo DİFERANSİYEL olarak geçerli,
  MUTLAK değer olarak OK107'nin sayısıyla kıyaslanamaz
· üyelik eşleşmesi: 16 ad eşleşmedi (Yenikale · Darende · el-Ulâ · Medâin-i
  Sâlih · el-Vech · Hayber · İmâdiye · Sa'de …). Sebep: bolgeler.js 11:50
  koşusundan, petek tabanı 10:30 koşusundan; arada nokta eklenmiş.
  Öngörüm "0 bekliyorum" idi, TUTMADI. 16/812 petek (%2) — hükmü
  değiştirecek mertebede değil ama SIFIR da değil.
· `delikleri_doldur` muafiyet ağacı BUGÜNKÜ yerleşimden (2663) kuruldu,
  petek tabanı 10:30'dan (2624). Üç yarıçapta AYNI olduğu için kıyası
  bozmaz, mutlak değeri az miktarda kaydırabilir.
· öneri (b) sınanmadı
· toplam parça sayısı (293/287/296) MONOTON DEĞİL — KARA kırpmasının kıyı
  kırıntıları gürültü üretiyor. O yüzden hükmü "parçası ARTAN bölge"
  sayısına dayandırdım (0/2/7, monoton).
```
