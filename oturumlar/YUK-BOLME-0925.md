# YUK-BOLME-0925 — sayfa yükünü ZAMANA göre böl (158 MB → ilk açılışta ~3 MB)

**Koordinatör:** YILDIRIM BAYEZIT · **Açılış:** 25 Eylül 2026
**Model:** Opus · **Kanal:** yalnız tahta (`py arac/tahta.py yaz --kim "YUK-BOLME-0925"`)

---

## 0. 🔴 KOŞU SÜRÜYOR — `arac/uret_petek.py`ye DOKUNMA

`C:/atlas-kosu15`te koşu 15 çalışıyor (~19 saat). `uret_petek.py`,
`renkler.py`, `girdi.py`, `motor_onbellek.py` önbelleğin TUZUNU kurar;
birine dokunmak koşu 15'in inşa ettiği önbelleği çöpe atar.
⇒ Bu görevde **TASARLA ve ÖLÇ; çıktı yazıcısına yamayı HAZIRLA ama UYGULAMA.**
`js/app.js` ve `index.html` üzerinde çalışabilirsin (koşu onları okumaz) — ama
oraya da yalnız **koşu bitince** commit'lenecek bir dal hâlinde hazırla; ne
yaptığını teslim mesajında açıkça söyle.

## 1. EMRE'NİN SORUSU

> *"Sayfayı rahatlatmak için yükü bölebiliriz. Tüm parçayı 12 ya da 20 parçaya
> bölsek, mesela 30 sene aralıklar ile veya toplam 30 maddelik kronoloji
> olaylarını kapsayacak şekilde bölsek mi?"*

## 2. ÖLÇÜLDÜ — devral, yeniden ölçme (ama ③'ü DOĞRULA)

### ① Yük nerede: iki dosya, ve içlerinde İKİ DEĞİŞKEN
```
data/devletler_harita.js   71,6 MB     data/donemler.js   59,7 MB
   DEVLET_PARCALAR  69,2 MB  96,6%        PARCALAR   58,2 MB  97,5%
   DEVLET_HARITA     1,8 MB   2,5%        DONEMLER    0,9 MB   1,5%
   DEVLET_PARCA_HALKA 0,7 MB  0,9%        SERBEST     0,4 MB   0,7%
                                          PETEKLER    0,1 MB   0,2%
```
🔴 **Hüküm buradan çıkıyor: 131 MB'ın 127,4 MB'ı İKİ GEOMETRİ HAVUZU.**
Zaman dizini (`DONEMLER` + `DEVLET_HARITA`) toplam **2,7 MB** — yani
"hangi gün hangi parçalar" bilgisi ZATEN küçük. Bölünecek olan dizin DEĞİL,
**havuz.**

### ② Yapı zaten buna uygun kurulmuş (dosyaların kendi başlıkları)
- *"PETEKLER bir kez tanımlanır; DONEMLER yalnızca eklenen/çıkan petek
  indekslerini tutar."*
- *"dnm[].g, DEVLET_PARCALAR havuzuna indekstir (js/app.js çözer)."*
⇒ Dizin küçük ve indeksli; havuz büyük ve indeksle çağrılıyor. **Tembel
yüklemenin bütün şartları hazır.**

### ③ Zaman dağılımı (DONEMLER'in `f:` yılına göre, 590 kayıt) — SEN DOĞRULA
```
1250-1299   4  0,7%      1600-1649  26   4,4%
1300-1349  20  3,4%      1650-1699  62  10,5%
1350-1399  43  7,3%      1700-1749  43   7,3%
1400-1449  24  4,1%      1750-1799  13   2,2%
1450-1499  46  7,8%      1800-1849  71  12,0%
1500-1549  81 13,7%      1850-1899  40   6,8%
1550-1599  51  8,6%      1900-1949  66  11,2%
```
⚠️ Bu **kayıt sayısı**, BAYT değil. Bir dönem kaydının taşıdığı geometri
ağırlığı bambaşka olabilir (Rusya'nın bir dönemi ile Ragusa'nınki aynı
satır, çok farklı bayt). **İşin ilk adımı: bayt cinsinden dağılımı ölçmek.**

## 3. HÜKÜM — ve Emre'nin iki önerisinin ikisi de kısmen doğru

🔴 **EŞİT YIL İLE BÖLME.** 30 yıllık dilimler dağılımı takip etmiyor:
1750-1799 (%2,2) ile 1500-1549 (%13,7) arasında **altı kat** var. Eşit yıl,
eşit olmayan dosyalar verir.
🔴 **KRONOLOJİ MADDE SAYISI İLE DE BÖLME.** Kronoloji maddesi ile harita
geometrisi ağırlığı aynı şey değil — bir madde sınır değiştirmeyebilir,
başka bir madde yüz peteği el değiştirebilir.
🟢 **ÖLÇÜT: EŞİT BAYT.** Dilim sınırları dönem kenarlarına oturtulur, ama
dilimin BOYUTU hedefe göre seçilir. Hedef ~**1,5 MB gzip / dilim**.
📌 Emre'nin "12 mi 20 mi" sezgisi doğru büyüklükte: 35 MB gzip ÷ 1,5 ≈ **20**
dilim çıkıyor, ve onun "toplam 30 maddelik" önerisi de (590 ÷ 30 ≈ 20) aynı
sayıya varıyor. **İki önerisi aslında aynı sayı** — ama doğru gerekçeyle.
Kesin sayıyı ÖLÇÜM söyleyecek; 12-24 aralığı bekleniyor.

## 4. SENDEN İSTENEN

### ① BAYT DAĞILIMINI ÖLÇ
Her parça hangi dönemlerde kullanılıyor, her dilim kaç bayt çeker?
⚠️ **Bir parça birden çok dönemde kullanılır** (durağan sınırlar). Üç kova ölç:
`ORTAK` (çok dilimde geçen) · `DİLİME ÖZEL` · `TEK SEFERLİK`. ORTAK havuz
büyükse bölmenin kazancı düşer — **bunu ölçmeden dilim sayısı seçme.**

### ② İLK AÇILIŞ NEYİ GEREKTİRİYOR
Site 1281'de açılıyor. 1281 için gereken parça kümesi kaç MB? **Asıl kazanç
bu sayıda:** bugün tarayıcı 1281'i görmek için 35 MB gzip indiriyor.

### ③ TASARIM — üç soruyu cevapla
- dosya düzeni: `data/parcalar_01.js` … + hep yüklenen `parcalar_ortak.js`?
- `js/app.js` dilimi NE ZAMAN ister (zaman çubuğu oynarken), komşu dilimi
  önden çeker mi, indirirken kullanıcı ne görür?
- `index.html` bugün hepsini `<script>` ile yüklüyor — tembel yükleme
  `fetch`+`eval` mi, dinamik `<script>` mi? **Sunucu/derleme YOK** (§1):
  çare düz JS olmalı, paketleyici gerektirmemeli.

### ④ TERS YÖN — `C13`
Bölme **doğruluğu bozmamalı**: zaman çubuğu hızla sürüklendiğinde eksik
dilim yüzünden harita YANLIŞ görünebilir mi? Yanlış harita, yavaş
haritadan kötüdür. Bir dilim inmemişse ne çizilir — boş mu, eski mi, bekleme
mi? Cevabını yaz.

### ⑤ ⚠️ ÖLÇME BİTMEDEN KOD YAZMA
Bu iş bir **tasarım** işi; uygulaması koşu 15'ten sonra. Rapor ve yama hazır
olsun, uygulama emri koordinatörden gelir.

## 5. TESLİM — TEK tahta mesajı (§7.1 ④)
① ne ölçtüm (sayıyla) ② ne bulamadım ③ ne istiyorum (seçenekliyse önerinle).
Rapor: `denetim/YUK-BOLME-0925.md` · ölçüm betikleri `denetim/ARAC-YUK-*.py`.
Commit pathspec'li; `git add -A` ve dizin pathspec'i YASAK (§7).

## 6. ARAÇ KURALLARI (§11)
`py` (not `python`) · bash backtick YASAK · heredoc YASAK · `py -c` içinde
Türkçe YASAK ⇒ `Write` + `py <yol>` · `git commit -F <dosya>` ·
`sys.stdout.reconfigure(encoding="utf-8", errors="replace")`.
⚠️ 60-70 MB'lık JS dosyalarını `Read` ile AÇMA — bağlamını yakar. Akış hâlinde
oku (`io.open` + parça parça), ölçümü betiğe yaptır.
