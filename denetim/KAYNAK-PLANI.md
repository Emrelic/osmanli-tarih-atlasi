# KAYNAK PLANI — altı kısıt ölçüldü, darboğaz sıralandı, beş hafta planlandı

> **Yazan:** KAYNAK PLANLAMACISI (Opus, çapraz/analist oturum)
> **Ölçüm günü:** 10 Ağustos 2026 · **Kapsam:** 27 Temmuz – 10 Ağustos (15 gün)
> **Haddim:** ÖLÇER ve PLANLARIM, **uygulamam.** Bu belgedeki hiçbir öneri
> uygulanmadı; hepsi Emre'nin ya da koordinatörün kararıdır.

---

## 🔴 TEK CÜMLELİK SONUÇ

> **Ödediğimizin %89'u yazdığımız şey değil, yazarken tekrar tekrar
> OKUDUĞUMUZ şey. "Az token ile çok iş" daha az YAZMAK değil, daha az
> TEKRAR OKUMAK demek — ve bu ölçüldü, tahmin edilmedi.**

Emre'nin çelişki sandığı iki cümle (*"limitin tamamını tüket"* + *"az tokenle
çok iş"*) **aynı yöne çekiyor**: bağlam israfını kesmek, aynı haftalık limitle
kat kat fazla iş demek.

---

# A) ALTI KISIT — TABLO

| # | kısıt | bugünkü değer | sınır | %doluluk | büyüme hızı | hüküm |
|---|---|---|---|---|---|---|
| ① | **TOKEN** | 3,295 mlr girdi-eşdeğeri / 15 gün | ~1,17 mlr/hafta *(türetme)* | **~%59+** | 220 mln/gün | 🔴 **GERÇEK KISIT** |
| ② | **DİSK** | 0,88 GB (depo+ağaç) | 930,6 GB sürücü | **%0,09** | 40 MiB/gün | 🟢 kısıt değil |
| ③ | **İNTERNET** ↑ | ~7 MiB/gün itme | — | — | sabit | 🟢 kısıt değil |
| ③b | **İNTERNET** ↓ | **11,37 MB / ziyaret** | 100 GB/ay Pages | %0,01 | — | 🟡 mobil veride sorun |
| ④ | **GITHUB** | en büyük dosya 22,56 MiB | 50 MiB uyarı | **%45,1** | ~0,15 MiB/koşu | 🟡 izle |
| ④b | **PAGES derleme** | **tepe 20/saat** *(vekil)* | **10/saat** yumuşak | **%200** | — | 🔴 **AŞILDI** |
| ⑤ | **İŞLEMCİ** | 0,99 / 8 çekirdek | 8 çekirdek | %12,4 | — | 🟡 tek iş parçacığı |
| ⑤b | **RAM** | tepe 5,29 GB | 11,9 GB | **%44,5** | — | 🟡 2. üretim imkânsız |
| ⑥ | **İNSAN** | 9 kalem bekliyor | ~17 kalem/gün *(ölçüldü)* | — | 2 parti 29 saattir açık | 🔴 **EN SERT** |

### ⚠️ DÖRDÜNCÜ KOVA — ÖLÇÜLEMEYENLER (`temiz` DEĞİL)

| kalem | niçin ölçülemedi | ne yapıldı |
|---|---|---|
| **Haftalık limit tavanı** | Anthropic sayacını hiçbir aletle okuyamıyorum | Emre beyanından **türetildi**, `±%15`ten geniş bant, ayrı satır |
| **Emre'nin gerçek kapasitesi** | "yıllık izindeyim ama işler çıkıyor" — takvim yok | geçmiş cevap hızından **vekil** çıkarıldı (`B13`) |
| **Gerçek push sayısı** | git yerelde push günlüğü tutmuyor | `origin/main` reflog **vekil** olarak kullanıldı; gerçek sayı ≤ ölçülen |
| **OneDrive'ın gelecekteki davranışı** | süreç ölü, niyeti bilinemez | "bugün pasif, risk askıda" damgası |
| **Boşa giden koşuların CPU'su** | eski koşuların günlükleri üzerine yazılmış | sayı belgeden (`7`), süre ortalamadan (`76,4 dk`) — **hesap, ölçüm değil** |

---

# B) DARBOĞAZ SIRASI — hangisi ÖNCE bitecek

```
1. İNSAN      ⛔ ZATEN BİTMİŞ DURUMDA — 9 kalem bekliyor, 2'si 29 saattir
2. TOKEN      🔴 bu hafta ~%59+ dolu · tarihsel hızda haftalık tavan AŞILIR
3. PAGES      🔴 tek AŞILAN kota: 20/saat ölçüldü, sınır 10/saat
4. İŞLEMCİ    🟡 duvar saati kısıtı: 76,4 dk/koşu · uyku 3 saat yiyebiliyor
5. RAM        🟡 5,29 GB tepe · 11,9 GB toplam ⇒ paralel üretim imkânsız
6. GITHUB dosya 🟡 22,56/50 MiB · bu hızla uyarı eşiğine ~15 ay
7. İNTERNET   🟢 6 ay sonra bile sorun değil
8. DİSK       🟢 6 ay sonra ~7,8 GB · sürücünün %0,8'i
```

### Tarih tahminleri
```
İNSAN      bugün           9 kalem bekliyor, biriktiği için ölçüm anında BİTMİŞ
TOKEN      Perşembe 13/8   bu haftanın kalan %41'i ~481 mln eşdeğer =
                           tarihsel hızda ~2,2 gün, bu haftanın hızıyla ~3,5 gün
PAGES      her yoğun gün   1 ve 2 Ağustos'ta ikişer kez aşıldı
dosya 50MB  ~Kasım 2027    22,56 MiB · koşu başına ~+0,15 MiB · yaklaşık 180 koşu
depo 1 GB   🟢 KAPANDI     gc sonrası 73 MiB; eski hızla bile ~4 ay değil ~3 yıl
```

⚠️ **`.git` darboğazı BUGÜN KAPANDI ve ben yapmadım.** Otomatik `gc`
17:02:01'de kendiliğinden ateşledi: **623 MiB → 73 MiB.** Sabah yazdığım
simülasyon 77,54 MiB demişti, gerçek 71,81 MiB çıktı — **tahmin %8 kötümser,
yön doğru.** `BEKLEYENLER.md`deki *"Depo `.git` 622 MB / 1 GB"* karar maddesi
**artık geçersiz.**

---

# C) ÇARE — her darboğaz için: ne · kazanç · maliyet · geri alınabilir mi

## Ç1 🔴 KOORDİNATÖR OTURUMUNU PERİYODİK YENİLE — en büyük tek kazanç

**Sorun (ölçüldü):** `2ad1685f` = koordinatör oturumu. **16.601 çağrı ·
1,185 milyar girdi-eşdeğeri · bütün tüketimin %36'sı · tepe bağlam 998.001.**

**Sebep:** bağlam oturum içinde büyüyor ve her çağrı onu **baştan sona**
yeniden okuyor:
```
çağrı 1-10     65.189 token okundu      ← taban (CLAUDE.md + sistem + araçlar)
çağrı 400+    472.501 token okundu      ← tabanın 7,25 KATI
47.517 çağrının 29.336'sı (%61,7) 400'den sonra
```

**Eşik hesabı** — yeniden başlatma maliyeti vs devam etme maliyeti:
```
YENİDEN BAŞLATMA  taban yazma 65.189 × 2      = 130.378
                  + yeniden yönelme ~10 çağrı ≈ 310.000
                                       TOPLAM ≈ 450.000 eşdeğer (tek sefer)

DEVAM ETME        çağrı başına fazladan okuma = (bağlam − 100K) × 0,1

⇒ başabaş: (bağlam − 100.000) × 0,1 × kalan_çağrı > 450.000
   bağlam 250K  →  30 çağrı sonra kârlı
   bağlam 400K  →  15 çağrı sonra kârlı
   bağlam 600K  →   9 çağrı sonra kârlı
```
Koordinatör günde ~1.100 çağrı yapıyor ⇒ **kalan çağrı her zaman eşikten
büyük.**

> ## 🎯 ÖLÇÜT — koordinatör oturumu ne zaman yenilenir
> ```
> BİRİNCİL   bağlam 250.000 tokene ULAŞINCA     ← doğrudan faturalanan büyüklük
> İKİNCİL    ~125 çağrı (bağlam görünmüyorsa)   ← 250K'ya denk gelen çağrı sayısı
> SERT TAVAN 400.000 — buranın üstüne HİÇ çıkma
> ```
> **"Ara sıra" değil: 250.000 token.**

**Kazanç (hesaplandı):**
```
bugünkü ortalama okuma  472K/çağrı  →  250K tavanıyla ~150K/çağrı
16.601 çağrı × 32K eşdeğer tasarruf              = 531 mln eşdeğer
133 yeniden başlatma × 450K maliyet              =  60 mln eşdeğer
                                    NET KAZANÇ   ≈ 471 mln eşdeğer
                                    = 15 günün %14,3'ü ≈ $2.300 API karşılığı
                                    ≈ HAFTALIK LİMİTİN %40'I
```
**Maliyet:** her yenilemede yeniden yönelme (BEKLEYENLER.md + git log + durum).
**Geri alınabilir mi:** 🟢 evet, bir alışkanlık; hiçbir dosya değişmiyor.

### Ç1b — koordinatörün işini İKİ CİNSE AYIR
Koordinatörün kendi tespiti (ve ölçüm onu destekliyor):
```
BAĞLAM İSTEYEN    karar vermek · çelişki görmek · geçmişe atıf
BAĞLAM İSTEMEYEN  şartname yazmak · commit · dosya bağlamak · rapor iletmek
```
İkincisi **taze bir oturuma** taşınabilir ve aynı işi **1/70 maliyetle** yapar.
📌 Bugün yazılan **8 şartname** bunun canlı örneği: hiçbiri 998K bağlam
gerektirmiyordu, ama hepsi onu ödedi.

## Ç2 🔴 UYKUYU KAPAT — üretim koşusundan önce

**Sorun (ölçüldü, koşu 7):**
```
duvar saati 283,8 dk · işlemci 99,1 dk · oran 0,349
KAYIP 184,7 dk = 3 saat 05 dk = duvar saatinin %65'i
```
📌 **Motor bunu kendi yakalamış**: `kosu7.log` içinde
`⚠️ duvar ≫ işlemci: UYKU ya da REKABET` satırı var. Alet doğru ötüyor,
kimse dinlemiyor.

**Kazanç:** koşu 76,4 dk'da biter, 284 dk'da değil ⇒ **günde 1 yerine 3-4
üretim.** Yayın hızı 3 katına çıkar.
**Maliyet:** sıfır (bir güç ayarı).
**Geri alınabilir mi:** 🟢 evet, anında.

## Ç3 🟡 PAGES DERLEME HIZINI DÜŞÜR — tek aşılan kota

**Ölçüm:** `origin/main` reflog'unda **tepe 20 güncelleme/saat** (1 Ağu 17:00,
2 Ağu 12:00). Resmî yumuşak sınır **10 derleme/saat**.
⚠️ `B13`: reflog güncellemesi ≈ push ama birebir değil; gerçek push sayısı
**20'den az olabilir.** "Ölçüldü" değil, **"kuvvetli vekil"** damgalı.

**Çare:** yayına giden commit'leri **toplu** it (`git push` seyrek, commit sık).
`.github/workflows` yok ⇒ klasik dal yayını ⇒ her push bir derleme.
**Kazanç:** kotanın altına inilir; GitHub'ın kısma riski kalkar.
**Maliyet:** yayın gecikmesi birkaç dakika artar.
**Geri alınabilir mi:** 🟢 evet.

## Ç4 🟡 YAYINDAN ÖLÜ YÜKÜ AYIR — 54,61 MB

**Ölçüm:**
```
yayınlanan (git'te izlenen)   99,76 MiB · 441 dosya
tarayıcının İSTEDİĞİ          45,28 MiB ·  68 dosya
🔴 HİÇ İSTENMEYEN             54,61 MiB · 373 dosya = yayının %54,7'si
en büyüğü: veri-kaynak/ (43 MiB Natural Earth) — motorun GİRDİSİ
```
**Çare seçenekleri** (ölçüldü, karar Emre'nin):
| seçenek | kazanç | maliyet | geri alınabilir |
|---|---|---|---|
| `veri-kaynak/`i ayrı dala al | yayın 99,8 → 57 MiB | her üretimde dal değişimi | 🟢 evet |
| Git LFS | depo küçülür | LFS kotası, kurulum | 🟡 zor |
| **dokunma** | 0 | 0 — Pages sınırının %10'undayız | 🟢 — |

📌 **Önerim: ŞİMDİLİK DOKUNMA.** Pages tavanı 1 GB, biz %10'dayız; kazanç
gerçek ama **darboğaz değil.** `FAYDA ÷ EMEK` bunu 4. sıraya koyuyor.

## Ç5 🟡 `gc.auto` KARARI

Otomatik gc bugün **üretim koşusu sürerken** ateşledi (17:02, koşu 12:52'den
beri açık). Zarar vermedi ama **zamanlamayı git seçti, biz değil.**
| seçenek | kazanç | maliyet | geri alınabilir |
|---|---|---|---|
| `git config gc.auto 0` + üretimden sonra elle | zamanlamayı biz seçeriz | unutulursa gevşek nesne birikir | 🟢 evet |
| bırak | 0 iş | ~2 haftada bir rastgele anda 4-6 dk | 🟢 — |

⚠️ **`git gc` geçmişi YENİDEN YAZMAZ** — commit kimlikleri, dallar, geçmiş
aynen kalır; yalnız diskteki depolanma biçimi değişir. `filter-branch`/`bfg`
DEĞİLDİR, şartnamedeki *"geçmişi yeniden yazma"* yasağına girmez.

## Ç6 🔴 İNSAN KISITI — plan bunu AŞMAMALI

**Ölçüm — Emre'nin gerçek çıktı hızı:**
```
FAZ 1 (docx)   18 parti · 29 Tem 22:14 → 1 Ağu 00:58 = 50,7 saat
               ⇒ 2,8 saatte bir parti · sonra 9 GÜN SESSİZLİK
FAZ 2 (kutu)   13 parti · 116 görsel madde · 2 Ağu → 9 Ağu (7 gün)
               ⇒ ~16,6 madde/gün · ~1,9 parti/gün
```
**Cevap gecikmesi:**
```
en hızlı   parti-0001    4 dakika
tipik      4-14 saat
en yavaş   parti-0007    3 gün 17 saat  (4 Ağu 02:24 → 7 Ağu 19:10)
AÇIK       parti-emrelic-0011 (9 Ağu 12:44) · parti-kasa-0010 (9 Ağu 14:01)
           ⇒ ~29 saattir cevapsız
```
**Şu an bekleyen:** 3 ekran görüntüsü + 6 karar = **9 kalem.**

> ## 🎯 PLAN ÖLÇÜTÜ — haftada en çok **6 KARAR**
> Ölçülen kapasite ~17 madde/gün ama o **görsel doğrulama** (hızlı, mekanik).
> **KARAR** başka bir şey: 8 Ağustos'tan beri 6 karar birikti ve **hiçbiri
> kapanmadı.** ⇒ Emre'nin karar kapasitesi **haftada ~6** ve şu an **doludur.**
> **Plan yeni karar SORMADAN ÖNCE eskileri kapatmalı.**

⚠️ Ve iki yönlü: 18 parti hepsi 3 günde geldi, sonra 9 gün hiç. **Emre'nin
kapasitesi düz değil, DALGALI.** Plan bir hafta boyunca eşit dağıtılmış
karar beklerse çöker.

---

# D) BEŞ HAFTALIK PLAN

## D.0 — Bütçe

```
haftalık tavan   ≈ 1,17 milyar girdi-eşdeğeri   (türetme, ±%15'ten geniş)
5 haftalık toplam ≈ 5,87 milyar                  (~$28.500 API karşılığı)
tarihsel hız      220 mln/gün ⇒ haftada 1,54 milyar = TAVANI %31 AŞAR
bu haftanın hızı  139 mln/gün ⇒ haftada 0,97 milyar = tavanın %83'ü ✓
```
🔴 **Tarihsel hızla gidersek Perşembe'yi göremeyiz.** Bu haftanın hızıyla
sığıyoruz — ama **payda dar.** Ç1 (oturum yenileme) uygulanırsa **aynı limitle
%40 daha fazla iş** çıkar. *Plan bunun üzerine kuruldu.*

⚠️ **Reset Perşembe 00:00.** 2026 takviminde: 13 Ağu · 20 Ağu · 27 Ağu ·
3 Eyl · 10 Eyl. Haftalar bu sınırlara göre numaralandı.

## D.1 — Sıralama ölçütü: `FAYDA ÷ EMEK`, `HEDEF−KESKİNLİK` değil

**Darboğazı açan küçük iş, büyük ama kendini bitiren işten ÖNCE gelir.**

| iş | fayda | emek | **oran** | sıra |
|---|---|---|---|---|
| Uyku ayarını kapat | 3 saat/koşu | 1 dk | **∞** | 1 |
| Koordinatör 250K'da yenilensin | %40 limit | alışkanlık | **çok yüksek** | 2 |
| Bekleyen 9 kalemi kapat | insan kısıtını açar | Emre 1 oturum | **yüksek** | 3 |
| Push'ları topla (Pages) | kota altına iner | alışkanlık | **yüksek** | 4 |
| `gc.auto` kararı | zamanlama kontrolü | 1 komut | orta | 5 |
| Ölü yükü yayından ayır | 54,6 MB | dal yönetimi | **düşük** (darboğaz değil) | 6 |

## D.2 — Hafta hafta

> ⚠️ **HADDİM UYARISI:** Ben **kaynak** planlamacısıyım, **içerik** değil.
> Aşağıdaki haftaların **şekli** (kaç üretim, kaç oturum, ne zaman Emre
> gerekiyor) benim ölçümümden çıkıyor. **Hangi coğrafya/hangi kalem** sorusunun
> otoritesi `ONCELIK.md` ve `YAPILACAKLAR.md`; oraya karışmıyorum.
> İçerik yerlerini `«…»` ile boş bıraktım — koordinatör doldurur.

### HAFTA 0 — kalan 2 gün (11-12 Ağustos) · bütçe ~481 mln (%41)
**Tema: DARBOĞAZ AÇMA. Yeni iş açma, açık olanı kapat.**
```
□ Uyku ayarı kapatılsın                          Emre · 1 dk · Ç2
□ Koordinatör 250K eşiğini uygulamaya başlasın   koordinatör · Ç1
□ BEKLEYEN 9 KALEM KAPATILSIN                    Emre · 1 oturum · Ç6
   3 ekran görüntüsü + 6 karar (T-0103·T-0104·T-0105·PROJEKSİYON·durum/·depo)
   📌 depo maddesi ARTIK GEÇERSİZ — gc kapattı, listeden düşür
□ Koşu 7 yayınlansın (r1119)                     koordinatör
□ Push'lar toplansın                             koordinatör · Ç3
```
**Niçin yeni iş yok:** bütçenin %59'u gitti, insan kısıtı **dolu**. Yeni iş
açmak, açılmış işlerin cevapsız kalmasına eklenir.

### HAFTA 1 — 13-19 Ağustos · bütçe 1,17 milyar
**Tema: YENİ RİTMİN SINANMASI. Ölçüt: aynı limitle daha fazla iş çıkıyor mu?**
```
□ 3 işçi oturum + koordinatör (§7 tavanı: aynı anda en çok 3)
□ 2 üretim koşusu (uyku kapalı ⇒ 76 dk × 2, aynı gün mümkün)
□ Emre'den en çok 6 KARAR                        Ç6 tavanı
□ 🔴 HAFTA SONU ÖLÇÜM: bu belgedeki betiği yeniden koştur
     olc_token2.py → hafta tüketimi · bağlam eğrisi değişti mi?
     ÖNGÖRÜ (şimdi yazıyorum, sonra değil):
       çağrı başına ortalama okuma  472K → 250K altına iner
       haftalık eşdeğer             0,97 mlr → 0,70 mlr civarı
       ⇒ TUTMAZSA Ç1 çalışmıyor demektir, plan revize edilir
□ İçerik: «koordinatör doldurur — ONCELIK.md sırasından»
```

### HAFTA 2 — 20-26 Ağustos · bütçe 1,17 milyar
**Tema: TAM HIZ. Ritim oturduysa en pahalı işler burada.**
```
□ 3 işçi + koordinatör · 3-4 üretim koşusu
□ Emre'den en çok 6 karar
□ Hafta ortası ölçüm (Pazar değil Çarşamba — düzeltme şansı kalsın)
□ İçerik: «en büyük kalem buraya — bütçe en tazeyken»
```

### HAFTA 3 — 27 Ağustos - 2 Eylül · bütçe 1,17 milyar
**Tema: DERİNLEŞME + ilk BAKIM.**
```
□ 3 işçi + koordinatör · 3-4 üretim
□ 🔧 BAKIM: `git gc` (kararı Ç5'e göre) · `renk_olc.py` · `denetle_yayin.py`
□ Emre'den en çok 6 karar
□ İçerik: «…»
```

### HAFTA 4 — 3-9 Eylül · bütçe 1,17 milyar
**Tema: KAPATMA. Yeni cephe açma, açık olanı bitir.**
```
□ Yarım kalan bütün partiler kapansın
□ Bekleyen karar sayısı SIFIRA insin
□ Son büyük üretim koşusu + yayın
□ İçerik: «…»
```

### HAFTA 5 — 10-16 Eylül · bütçe 1,17 milyar
**Tema: PAY VE DEVİR. "Suyu kesilen sabunlu adam" olmama haftası.**
```
□ Belgeler tazelensin (CLAUDE.md §1.5 · DURUM.md · OGRENILENLER.md)
□ 🔴 Bu belgenin ÖLÇÜMLERİ YENİDEN KOŞULSUN — 5 haftada ne değişti
□ Yayın kapısı temiz · sürüm damgası güncel
□ Emre'ye teslim: neresi bitti, neresi eksik, sıradaki ne
```

## D.3 — Beş haftanın değişmez kuralları

```
① BAĞLAM TAVANI    koordinatör 250K'da yenilenir · sert tavan 400K
② İNSAN TAVANI     haftada en çok 6 KARAR · yeni sormadan önce eskiyi kapat
③ UYKU             üretim koşusundan önce kapalı — istisnasız
④ EŞZAMANLILIK     en çok 3 oturum (§7) · RAM 5,29 GB tepe ⇒ TEK üretim
⑤ PUSH             toplu it · saatte 10'u geçme (Pages)
⑥ HAFTA SONU       ölçümü yeniden koştur, ÖNGÖRÜYÜ ÖNCE YAZ (`B`: sonra
                   yazılan beklenti hiçbir zaman yanlış çıkmaz, öğretmez)
```

---

# E) İSRAF LİSTESİ — ölçülmüş geçmiş israf

> 📌 *"Gelecekteki israfı ancak geçmişteki ölçülmüş israf önler."*

| # | kalem | ölçülen büyüklük | kök sebep | önlenir mi |
|---|---|---|---|---|
| **1** | 🔴 **Koordinatör oturumunun bağlam vergisi** | **1,185 milyar eşdeğer · tüketimin %36'sı** · net kurtarılabilir **~471 mln (%14,3)** | oturum hiç yenilenmedi, bağlam 998K'ya çıktı | 🟢 **EVET — Ç1** |
| **2** | Uyku, koşu 7'yi dondurdu | **184,7 dk** (3 sa 05 dk) duvar saati | güç ayarı | 🟢 evet — Ç2 |
| **3** | Depo hiç paketlenmedi | **550 MiB** disk, 14 gün boyunca | `gc` 1126 commit boyunca hiç koşmadı | 🟢 **KAPANDI** (bugün 17:02) |
| **4** | Boşa giden üretim koşuları | **7 koşu × 76,4 dk ≈ 8,9 SAAT** *(sayı belgeden, süre ortalamadan — hesap)* | girdi koşu sırasında değişti | 🟡 kısmen — `motor_izi` artık her aşamada bakıyor |
| **5** | Yayında ölü yük | **54,61 MB · 373 dosya** her clone'da iniyor | motor girdisi yayınla aynı depoda | 🟡 evet ama darboğaz değil |
| **6** | `CEVAP.md` + `CEVAP.json` ikilemesi | 18 dosya / 13 parti · 136 KB | aynı içerik iki biçimde | 🟢 evet, ucuz |
| **7** | `?v=rNNNN` damgası tam önbellek iptali | ziyaret başına **11,37 MB** yeniden iner | damga her dosyaya uygulanıyor | 🟡 yalnız değişen dosyalara uygulanabilir |
| **8** | Bayat belge → yanlış şartname | 4 Ağu'da **6 sayı birden** · 10 Ağu'da **4 sayı** | elle yazılan tablolar | 🟢 `durum_tablosu.py` yazıldı |

## E.1 — İsrafın dizilimi: **görünürden görünmeze**
```
③ depo 550 MiB        disk doluluğu · GÖRÜNÜR (du ile bakılır)
② uyku 184,7 dk       saate bakınca anlaşılır · motor UYARDI, kimse bakmadı
⑤ ölü yük 54,6 MB     kimse bakmıyor ama ölçülebilir
① bağlam 1,185 mlr    🔴 HİÇ GÖRÜNMÜYORDU — 15 gün boyunca kimse ölçmedi
                         ve en büyüğü ODUR
```
📌 **Ve ders bu:** en büyük israf, en görünmez olandı. Disk 740 GB boş
diye kimse endişelenmiyordu — doğruydu. Endişelenilmesi gereken şeyin
**sayacı hiç okunmamıştı**, oysa `~/.claude/projects/*.jsonl` içinde
**baştan beri duruyordu.**

---

# F) BİTİŞ ÖLÇÜTÜ — teslim raporu

```
ALTI KISITTAN BEŞİ ÖLÇÜLDÜ, BİRİ TÜRETİLDİ:
  ① TOKEN     ✓ ölçüldü (aletin kendi sayacı) — TAVANI türetildi (Emre beyanı)
  ② DİSK      ✓ ölçüldü
  ③ İNTERNET  ✓ ölçüldü (canlı yayından tel boyutu dâhil)
  ④ GITHUB    ✓ ölçüldü + resmî belgeden doğrulandı
  ⑤ İŞLEMCİ   ✓ ölçüldü (koşan sürecin üstünde)
  ⑥ İNSAN     ✓ ölçüldü (parti zaman damgalarından) — kapasitesi VEKİL

EN YAKIN DUVAR   İNSAN (bugün, 9 kalem) · sonra TOKEN (~2-3,5 gün)
EN BÜYÜK KAZANÇ  koordinatör oturumunu 250K'da yenilemek
                 = 471 mln eşdeğer = haftalık limitin %40'ı
MALİYETİ         bir alışkanlık · sıfır dosya değişikliği · geri alınabilir
```

## F.1 — Doğrulanmış öngörü (bu belgenin kendi sınavı)
Sabah **ölçümden önce** yazdım, akşam gerçekleşti:
```
öngörü  "6205/6700 = %92,6 · gc BUGÜN-YARIN kendiliğinden ateşler"
        "paketlense 77,54 MiB · kazanç ~545 MiB"
ölçüm   17:02:01'de ateşledi · 71,81 MiB · kazanç 550 MiB
        ⇒ zaman TUTTU · büyüklük %8 KÖTÜMSER (iyi taraf)
```
📌 Ve bir öngörü **çürüdü**, o daha değerli: *"token ölçülemez, tahmin
aralığı vereceğim"* dedim. **Yanlıştı** — ölçülebiliyormuş, ve o ölçüm
bu belgenin en büyük bulgusunu verdi.

---

## G) KULLANILAN ALETLER (yeniden koşturmak için)

```
scratchpad/olc_token.py     ham token toplamı (67 oturum dökümü)
scratchpad/olc_token2.py    modele/haftaya göre + dolar + pay dağılımı
scratchpad/olc_baglam.py    bağlam büyüme eğrisi + oturum başı maliyet
scratchpad/olc_indirme.py   ziyaret başına indirme + ölü yayın yükü
```
⚠️ Bunlar **scratchpad'de**, depoda değil — `arac/`a yazmak haddim değildi.
Kalıcı olmaları isteniyorsa koordinatör taşır. **Hepsi salt-okuma.**

**Kaynaklar (§4 kırmızı çizgi — forum/blog kullanılmadı):**
- `docs.github.com/en/pages/getting-started-with-github-pages/github-pages-limits`
- `docs.github.com/en/repositories/working-with-files/managing-large-files/about-large-files-on-github`
- `api.github.com/repos/Emrelic/osmanli-tarih-atlasi` (depo boyutu)
- Fiyat çarpanları: `claude-api` becerisi, 2026-06-24 damgalı tablo
