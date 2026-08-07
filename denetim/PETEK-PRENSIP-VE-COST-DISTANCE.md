# 🗺 PETEK PRENSİPLERİ — denetimi, ve COST-DISTANCE analizi

> 7 Ağustos 2026 · Emre'nin iki sorusu:
> ① *"Petekler bu coğrafî engellere yaslanıyor mu, yoksa o yapı yokmuş gibi mi
> çizilmiş?"* ② *"Voronoi'yi cost-distance ile donatsak nasıl olur — bedel,
> süre, token, denge?"*
> **Bütün sayılar `r918`'in ÜRETİLMİŞ peteklerinden ölçüldü** (`petek_govde.js`,
> 1800 gövde), Voronoi tahmininden değil.

---

# BÖLÜM 1 — PRENSİPLERİN DENETİMİ

## 1.1 Emre'nin beş prensibi ve motorun bugünkü karşılığı

| # | prensip | motorda karşılığı | durum |
|---|---|---|---|
| **P1** | Deniz/göl kıyısında biter, ötesine geçmez; kıyıyı komşularla bölüşür | kara maskesi + 305 göl çıkarması | 🟢 **yapısal olarak sağlanıyor** |
| **P2** | Arada engel yoksa **kardeş payı** — tam ortadan | saf Voronoi | 🟢 **tanımı gereği sağlanıyor** |
| **P3** | Arada **dağ** varsa sınır **sırttan** geçer | `dogal_hatta_yasla`, 0,35° ≈ 39 km yarıçapla **çekme** | 🔴 **yama, kural değil** |
| **P4** | Arada **nehir** varsa sınır **nehri** kullanır | aynı fonksiyon, 0,30° ≈ 33 km | 🔴 **yama, kural değil** |
| **P5** | Yerleşim **nehrin üstünde** ve iki yakada ise sınır nehir **değildir** | `KORUMA_PAYI = 0,06` — yaslamayı iptal eder | 🟡 **vardır ama dolaylı** |

⚠️ **P3 ve P4 motorda KURAL olarak yok.** Sınır önce **kuş uçuşu** çizilir
(dağı, nehri hiç bilmez), **sonra** yakınındaki doğal hatta çekilir. Yarıçap
dışındaki engel **hiç görülmez.**

📌 Ve P5 bir prensip olarak değil, **bir kazadan sonra** doğdu: Estergon ve
Solnok'un petekleri yaslama yüzünden **sıfır alana çökmüştü** (`uret_petek.py:572`).
Bugünkü koşuda **123 yaslama iptal edildi, 40 yerleşim korundu** — yani yama
ayda bir kere değil, **her koşuda 123 kez** devreye giriyor.

## 1.2 🔴 ÖLÇÜM — Emre haklı, ve oran %50

```
petek alanı          adet    İHLAL    oran
A  < 20.000 km²      1135      422     37%     ← YOĞUN bölge
B  20-100 bin         500      326     65%
C  100-500 bin        157      139     89%
D  > 500 bin            8        8    100%
──────────────────────────────────────────
TOPLAM               1800      895     50%
```
**İhlal ölçütü:** peteğin **kenarından değil İÇİNDEN** (2 km içeri çekilmiş
gövdeden) **25 km'den uzun** bir büyük nehir ya da dağ sırtı geçiyor.

**Ayrıntı:**
```
P4 nehir içeriden geçiyor    365 / 1800  (%20,3)
   yerleşim nehre 15 km'den UZAK (P5 muafiyeti YOK)   183
P3 sırt içeriden geçiyor     705 / 1800  (%39,2)
```

**En büyük ihlaller:**
```
2048 km nehir · Yakutsk       yerleşim nehre  155 km      2651 km sırt · Banda Neira
1488 km nehir · Zaşiversk                      23 km      2405 km sırt · Bonga (Kaffa)
1017 km nehir · Ust-Tsilma                    390 km      1845 km sırt · Jigansk
 906 km nehir · Nyala                        1873 km      1521 km sırt · Perm
 810 km nehir · Agadez                        751 km      1141 km sırt · Tibesti
```

## 1.3 🔴 VE ORANIN İKİ AYRI SEBEBİ VAR — bu ayrım planı belirliyor

Oranın alandan alana yükselmesi (%37 → %65 → %89 → %100) **iki etkiyi üst
üste bindiriyor** ve ikisinin çaresi farklı:

```
SEYREKLİK   Büyük petek = etrafında rakip nokta YOK. Yakutsk 2000 km boyunca
            tek nokta; hangi algoritma olursa olsun o toprağı O alır.
            ⇒ COST-DISTANCE BUNU ÇÖZMEZ. Çaresi NOKTA EKLEMEK.

ALGORİTMA   Yoğun bölgede (A kovası, 1135 petek) oran YİNE DE %37.
            Bu peteklerin GERÇEK komşusu var, aralarında dağ/nehir var,
            ve sınır yine de ortadan geçiyor.
            ⇒ COST-DISTANCE TAM BUNU ÇÖZER.
```

⇒ **Gerçek hedef: A kovasındaki 422 petek.** Cost-distance'ın kazandıracağı
şey bu; kalan 473 ihlal seyreklikten ve **nokta ekleyerek** kapanır.

## 1.4 Denetim aracı — `arac/denetle_petek.py` (yazılacak)

Yukarıdaki ölçüm bir kereye mahsus değil, **nöbetçi** olmalı:
```
P1  petek kara maskesinin dışına taştı mı            (bugün 0 — koru)
P3  içinden >25 km sırt geçen petek                   tavan: A kovası için
P4  içinden >25 km nehir geçen petek                  ölçülür, sonra konur
P5  yaslaması iptal edilen kenar sayısı               bugün 123 — İZLE
```
⚠️ Ve `C13` gereği **her dalı sahte girdiyle ateşlenerek** sınanacak.

📌 **Ve bu aracı yazarken bugün bir kez daha aynı tuzağa düştüm:**
`PARCA[j]`yi tek halka sandım, oysa poligon (halka listesi). Sonuç:
**1800 peteğin 1800'ü boş çıktı ve ölçüm "0 ihlal" diyecekti.** Betiğin
`bos petek: 1800` sayacı bağırdığı için yakalandı — `renk_cikti` vakasının
aynısı, aynı gün, üçüncü kez.

---

# BÖLÜM 2 — COST-DISTANCE ANALİZİ

## 2.1 Emre haklı mı? **Evet, ve literatürde adı var**

> *"Şimdiki Voronoi meselesi çok şematik ve topografik gerçeklere pek dayanmıyor."*

**Doğru.** Voronoi'nin tanımı *"kuş uçuşu en yakın merkez"*tir; topografyayı
**tanım gereği** bilmez. Ölçüm bunu doğruladı: yoğun bölgede bile %37.

**Akademik çerçeve:**

| model | ne der | bizdeki durum |
|---|---|---|
| **Thiessen/Voronoi poligonu** | kuş uçuşu en yakın merkez | 🟢 **bugünkü modelimiz** |
| **XTENT** (Renfrew & Level 1979) | merkez **büyüklüğüne** göre ağırlıklı; büyük şehir geniş alan | 🔴 `g:` alanı var ama **kullanılmıyor** |
| **Site catchment** (Vita-Finzi & Higgs 1970) | yerleşimin fiilen kullandığı alan (yürüme yarıçapı) | — |
| **Cost-distance / cost allocation** | mesafe km değil **yürüyüş maliyeti**; her arazi bir **sürtünme** katsayısı taşır | 🔴 **istenen model** |
| **Tobler'in yürüyüş fonksiyonu** (1993) | eğime göre yürüme hızı — sürtünmenin sayısal karşılığı | — |
| **Least-cost path** | iki nokta arası en ucuz güzergâh (yol/geçit modelleme) | — |

⇒ Emre'nin saydığı beş prensip, cost-distance'ta **ayrı ayrı kodlanmaz —
sürtünme haritasından KENDİLİĞİNDEN çıkar.**

## 2.2 🟢 EN ÖNEMLİ BULGU: altyapı ZATEN VAR

`uret_petek.py:987-1013` şu anda şunu yapıyor:
```python
# Çok kaynaklı Dijkstra, YALNIZ kara hücreleri üzerinden
_nd = _d + math.hypot(_dx * _di, _KVDY * _dj)      # ← maliyet = SAF MESAFE
```
**0,05° ızgara · çok kaynaklı Dijkstra · gerçek km · 8 komşu · heapq** —
cost-distance'ın **tam iskeleti**. Eksik olan tek şey **sürtünme çarpanı**:
```python
_nd = _d + math.hypot(...) * SURTUNME[_k]          # ← eklenecek tek şey
```

⚠️ **AMA bir şey daha var ve asıl maliyet orada.** Kodun kendi yorumu
(`satır 918`):
> *"IZGARA YALNIZ SAHİPLİĞE KARAR VERİR, SINIR ÇİZMEZ. Sınır yine
> Voronoi'den gelir; bu yüzden ızgaranın kabalığı haritaya YANSIMAZ.
> Aksi hâlde çözümün kendisi yeni bir 'cetvel' kusuru üretirdi."*

⇒ Sürtünmenin **görünmesi** için ızgaranın **sınır da çizmesi** gerekir. Ve o
zaman ızgara kabalığı (0,05° ≈ 5,5 km) **doğrudan haritaya yansır.**

## 2.3 BEDEL — ölçülmüş tahmin

### Hesap
```
BOLGE kutusu      lon -25..146 (171°) · lat -11..82 (93°)
0,05° ızgara      3.420 × 1.860 =  6,4 M hücre   ·  kara ~%30 → ~1,9 M
0,02° ızgara      8.550 × 4.650 = 39,8 M hücre   ·  kara ~%30 → 11,9 M
```

| iş | maliyet |
|---|---|
| **Sürtünme çarpanı** (Dijkstra'ya) | ⚪ **hemen hemen sıfır** — bir çarpma. Dijkstra aynı |
| **Sürtünme rasteri kurmak** | 🟡 6,4 M hücreye nehir/sırt/çöl/bataklık damgalamak — **~5-15 dk/koşu**, hazırlanmış geometri + toplu işlemle |
| **Sınırı ızgaradan çizmek** (0,05°) | 🟡 kontur çıkarma + vektörleştirme + Chaikin — **~5-10 dk** · ⚠️ **5,5 km merdiven** riski |
| **0,02°'ye inmek** (merdiveni gizlemek) | 🔴 **6× hücre · ~640 MB bellek · Dijkstra ~6× süre** ⇒ koşu **40 dk → 2-3 saat** |
| **Prototip** (tek bölge, ölçüm) | 🟢 **1 oturum · 2-4 saat · orta token** |
| **Tam entegrasyon** | 🔴 **2-3 oturum · birkaç gün** |

### Token maliyeti
```
PROTOTİP    orta — kod yazma + ölçüm, araştırma az (literatür bu belgede)
ENTEGRASYON YÜKSEK — her değişmezin yeniden kalibrasyonu, her ihlalin
            ayrı ayrı incelenmesi, ve kaçınılmaz birkaç tur geri alma
```

## 2.4 🔴 DENGE — evet, CİDDİ biçimde bozulur

Bu, kararın **en ağır** tarafı ve açıkça söylenmeli:

**Cost-distance'a geçmek, atlastaki HER km²'yi değiştirir.** Ve bugünkü
bütün kalibrasyonlar **Voronoi çıktısına göre** ayarlandı:
```
Değişmez 1   BEKLENEN_SAHIPSIZ = 114        ← petek şekline bağlı
Değişmez 2s  tavan 121                       ← kırılma günleri aynı kalır ama
Değişmez 3   359 `m:` uyuşmazlığı            ← bölge sınırları değişir
KORUMA_PAYI  0,06 · 123 iptal                ← YAMA GEREKSİZLEŞİR (iyi haber)
benek/enklav düzeltmeleri                    ← YENİDEN ÖLÇÜLMELİ
Estergon/Solnok sıfır alan vakası            ← kendiliğinden çözülür (iyi haber)
renk_cikti 759 değen çift                    ← TAMAMEN değişir
```
⚠️ **Ve kullanıcının gözle doğruladığı her şey yeniden doğrulanmalı.** Bugüne
kadar kapatılan görsel şikâyetlerin bir kısmı **yeniden açılabilir.**

📌 Buna karşılık **iki yama tamamen ortadan kalkar**: `dogal_hatta_yasla`
(yaslama) ve `KORUMA_PAYI` (yaslamanın kazasını önleyen yama). Yani kod
**küçülür**, ve *"yamanın yaması"* katmanı silinir.

## 2.5 KARARIM — önce PROTOTİP, körlemesine geçiş YOK

```
① PROTOTİP (öneri: sıradaki büyük iş)
   Tek bölge — Anadolu + Balkanlar, ~300 nokta, 1500-06-15 kesiti.
   Sürtünme: ova 1 · orman 3 (veri yoksa atla) · bataklık 5 · yayla 4 ·
             dağ 8 · nehir GEÇİŞİ 10 · deniz ∞
   ÇIKTI: yan yana iki harita + ŞU SAYILAR
       · P3/P4 ihlali:  bugün %37 (A kovası) → cost-distance'ta kaç?
       · kaç petek alanı >%20 değişti
       · gözle: Toros · Balkan · Tuna · Fırat sınırları düzeldi mi
   ⚠️ HİÇBİR ÜRETİM DOSYASINA YAZMAZ. Ayrı çıktı, ayrı karşılaştırma.

② KARAR — prototipin sayısına bakarak
   ihlal %37 → %10'un altına düşüyorsa   ⇒ geçmeye DEĞER
   %25'in üstünde kalıyorsa               ⇒ sorun algoritma değil SEYREKLİK,
                                             çare NOKTA EKLEMEK — ve o iş
                                             zaten tespihte

③ GEÇİŞ (yalnız ② olumluysa) — ve kademeli:
   önce sahiplik (bugünkü gibi), sonra SINIR, sonra ızgara inceltme
```

⚠️ **Ve bir uyarı, `ONCELIK.md` adına:** bu iş **çekirdeğe yakın** ve
**büyük**. Bugün ölçülen 895 ihlalin **473'ü seyreklikten** — yani
cost-distance'tan bağımsız olarak **nokta eklemekle** kapanır. Nokta ekleme
hem daha ucuz hem de cost-distance'ı da **iyileştirir** (rakipsiz merkez her
iki modelde de her şeyi alır).

📌 **Yani sıralama şu olabilir:** önce seyrek bölgelere nokta (ucuz, kesin
kazanç, cost-distance'a da hazırlık) → sonra prototip → sonra karar.
