# 🔴 A–F ALTI KADEME — Emre'nin kararı, 16 Eylül 2026 akşamı
Bu bölüm aşağıdaki C, D ve "Öncelik" bölümlerinin yerini alır.

```
A  5 günlük sürtünmeli yaya yürüyüşü, 16 yön (22,5°), ilk varan kazanır. Dağ/rampa yavaşlatır,
   nehir niteliğine göre keser ya da geçide yönlendirir, deniz/körfez geçilmez (boğaz fonksiyonu ayrı)
B  A + dolgu: boşluk · aynı devletin parçaları arasındaki BOŞ toprak · derin koridor · sahipsiz toprağın paylaşımı.
   GERÇEK enklav asla kapatılmaz (aşağıdaki ENKLAV KURALI)
C  belgeli KABA sınır (antlaşma metni büyük şehir/bölge sayar)
D  FİİLÎ (de facto) KESİN sınır: koordinatı belli ama hukuken geçersiz (ordu işgali, ateşkes hattı,
   tanınmamış devlet — bugünkü KKTC). ESKİ "D" bu DEĞİLDİ
E  HUKUKÎ kesin sınır: barış antlaşması / sınır protokolüyle iki devlet arasında kararlaştırılmış.
   ESKİ "D" = BU
F  E + uluslararası tanınma (öteki devletler / Milletler Cemiyeti kabul ediyor)
```

**İki katman:**
- HUKUKÎ görünüm: `F > E > C > (A|B)`
- FİİLÎ görünüm: `D > F > E > C > (A|B)`. Fiilî sapma yoksa hukukî hat fiilî hattır.

**Veri alanı:** her hat kaydına `sinif: "F"|"E"|"D"|"C"|"YOK"` eklenir. Eski `kategori` eşlemesi:
- `D → E` (F kanıtı varsa F)
- `fiili → D` (koordinat kesinse); kaba ise `YOK` + not
- `C → C`
- `D-YOK → YOK`

`data/d_sinirlar*.js` dosya adları TARİHÎDİR, değiştirilmez; bağlayıcı olan `sinif` alanıdır.

**Kural:** E/F değişikliği YALNIZ barış antlaşması ya da sınır protokolüyle olur. Antlaşmadan önceki işgal
veya el koyma D'dir (koordinat kesinse); değilse A/B.
Program: `oturumlar/GERIYE-SARMA-0916.md`.

---

# A · B · C · D GÖRÜNÜMLERİ — Emre'nin kararı, 16 Eylül 2026 (BAĞLAYICI)

`GORUNUM-ABC-0910.md`nin yerini alır. Oradaki "A = bugünkü motor" tanımı **geçersizdir.**

## A — SÜRTÜNMELİ YÜRÜYÜŞ HARİTASI (motorun TEMELİ)

Her yerleşimden her yöne **5 günlük yürüyüş** bütçesiyle bir yaya çıkar; ulaşabildiği
boş toprağı o yerleşime yazar.

- Düz ovada bütçe ≈ **200 km**'ye yeter.
- Dağ / rampa / sıradağ yürüyüşü yavaşlatır; bütçe dağda tükenebilir (sınır orada biter).
- Nehir bir **geçiş bedeli** öder: küçük dere az, Tuna / Fırat gibi büyük nehir çok —
  bütçenin tamamını yiyebilir (sınır nehirde biter). **Geçit / köprü** noktasında bedel düşüktür.
- Deniz geçilmez.
- **İki yerleşim aynı toprağa uzanıyorsa hangisinin yayası bir noktaya ÖNCE varırsa o nokta onundur**
  (çok kaynaklı Dijkstra, eşit-bedel çizgisi = sınır). Örnek: X'ten 50 km sonra sıradağ, Y dağın
  öbür yanında 200 km ötede → X dağın eteğinde tükenir, Y 150 km gelir; bölge bedele göre bölünür.
  X Tuna kıyısında, Y 200 km öte ama düz ise → Tuna'nın bu yakası Y'nin.
- Hiçbir yayanın 5 günde ulaşamadığı toprak **boş** kalır.

🔴 Bu kural **kara–kara sınırları için de** geçerlidir. Bugünkü motor Dijkstra sonucunu
yalnız düz hat denizi kestiğinde kullanıyor, kara sınırını Voronoi + 200 km tavanla çiziyor —
bu Emre'nin istediği değildir; bir mühendislik ara adımıydı ve KALDIRILACAK.

## B — A'NIN TEMİZLENMİŞ HALİ

A haritası üzerine: boşluk kapatma · enklav birleştirme · koridor doldurma/sığlaştırma ·
iki devlet arasındaki boş araziyi paylaştırma. Amaç delik deşik / benekli görüntüyü kaldırmak.
A ÜRETİLİR, B ondan TÜRETİLİR; ikisi de saklanır, arayüzde **anahtarla** seçilir.

### 🔴 B'NİN ÜRETİM BİÇİMİ — Emre'nin kararı (16 Eylül, aynı gün): TEK KOŞU, AYRI DOLGU KATMANI

A ile B iki ayrı koşu DEĞİLDİR. Motor tek koşuda:
```
① A gövdelerini üretir (sürtünmeli yürüyüş) — dokunulmamış hâliyle yazar
② aynı koşuda A'nın boşluk · enklav · koridor · sahipsiz arazisini hesaplar ve bunları
   DEVLETLERE BÖLÜŞTÜRÜLMÜŞ "B dolgu parçaları" olarak AYRI bir çıktıya yazar
   (her parça: devlet kimliği · tarih aralığı · geometri · dolgu cinsi)
③ arayüz: "B görünümü" anahtarı açıksa dolgu parçaları A'nın üstüne O DEVLETİN rengiyle
   çizilir; kapalıysa çizilmez → A ile B arasında geçiş anlık, yeni koşu gerekmez
```
### 🔴 ENKLAV KURALI — Emre'nin düzeltmesi (16 Eylül, aynı gün)

~~Enklav birleştirme bir parçanın sahibini değiştiriyorsa dolgu onu ana devletin rengiyle örter.~~ YANLIŞ.

"Enklav" burada: bir devletin ana toprağına bağlı olmayan kopuk parçası (teknik adı dış
parça/exclave; aynı parça, içinde kaldığı devlet açısından enklavdır).
```
ARADA BAŞKA DEVLETİN ŞEHRİ / BÖLGESİ / BEYLİĞİ VAR   → parça GERÇEK · ASLA örtülmez, birleştirilmez
                                                       (aradaki kaydın doğruluğu ayrıca araştırılabilir:
                                                        yanlışsa VERİ düzeltilir, doğruysa dokunulmaz)
ARADAKİ TOPRAK YALNIZ BOŞ (kimseye yazılmamış)         → B dolgusu o boşluğu doldurup parçayı ana
                                                       toprağa bağlayabilir
```
B dolgusu hiçbir devletin A'daki toprağını ÖRTMEZ; yalnız BOŞ araziyi doldurur.
Birleştirmenin başka bir devletin toprağından geçmesi gerekiyorsa birleştirme YAPILMAZ ve
parça "incelenecek" diye raporlanır (HARITA-VERI işi).

## C — BELGELİ SINIR

Bir bölgede sınır antlaşma/belge ile belirlenmişse o bölgede A ve B **söz konusu edilmez**:
belgede ne yazıyorsa o çizilir. Belge kaba olabilir (Kasr-ı Şirin, Karlofça gibi büyük
bölgelerden söz eden metinler). Bugün `js/c_katman.js` + `data/hukuki_sinirlar.js` ile
harita üstünde katman olarak var.

## D — KESİN KOORDİNATLI SINIR

Her köyün, tepenin, akarsuyun hangi tarafta kaldığının koordinatla belirlendiği ayrıntılı
sınır (sınır komisyonu haritaları, protokoller). Veri ve teknoloji varsa D, C'nin yerini alır.
Durum: **tasarım aşaması** — önce hangi belgelerde bu ayrıntı var, ölçülecek.

## Öncelik (en kaba seviyeden ince seviyeye)

`D > C > (A ya da B)` — bir bölgede üst seviye varsa alttakiler o bölgede çizilmez.
A ile B bir sıra değil bir SEÇİMDİR (kullanıcının anahtarı); B atlanabilir. B kapalıyken benekli
görünen bir bölge, tarih ilerleyip bir antlaşma geldiğinde doğrudan C'ye geçer.
