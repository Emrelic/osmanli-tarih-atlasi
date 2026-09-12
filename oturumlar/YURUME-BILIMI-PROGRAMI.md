# YÜRÜME BİLİMİ PROGRAMI — üç oturum, tek hedef

> **Emre'nin beyanı, 12 Eylül 2026:**
> *"Eğimde hız nasıl olur, rampada nasıl olur, dağda nasıl olur — bunu
> bilimsel veriler ile araştırarak ekleyelim… Bir insan dağı nasıl çıkar,
> hangi yükseklik hangi eğim hangi yatay mesafe nasıl katedilir, kaç saat
> sürer, kaç gün alır. Dağı tırmanmak mı geçitten geçmek mi?"*
> *"1000 metre rakıma 1000 metre mesafe ile çıkmak ile 1000 metre rakıma
> 4000 metre mesafe ile çıkmak aynı şey değildir."*
> *"Topografyadaki verilerimizi zenginleştirebilir miyiz — dağ tepe katman
> katman irili ufaklı yumurta kartonu gibi…"*

Bu program üç oturuma bölünmüştür. **Hepsi aynı hedefe çalışır:** motorun
maliyet fonksiyonunu uydurulmuş sabitlerden kurtarıp **ölçülmüş ampirik
veriye** oturtmak.

---

## 0. 🔴 KAYNAK KURALI — ve bir çelişkinin çözümü

Emre *"dağcılık forumlarına ya da bilimsel olan yerlere bak"* dedi. Ama
`CLAUDE.md §4`ün kırmızı çizgisi **forumu açıkça yasaklıyor**:

```
🔴 KULLANILMAZ  forum · blog · içerik çiftliği · kaynaksız derleme site ·
                yapay zekâ üretimi metin · "tarih sayfası" tipi popüler site
```

**Çelişki çözülmüştür ve çözüm Emre'nin AMACINA hizmet eder:** istediği şey
gerçek ampirik yürüyüş verisi, ve onu forumlardan **daha iyi** veren
kaynaklar var:

```
🟢 KABUL — bu programda kullanılacak
   · hakemli literatür: en-az-maliyet yolu (least-cost path) arkeolojisi,
     hareket ekolojisi, spor fizyolojisi
   · Tobler (1993) · Naismith (1892) + Langmuir düzeltmeleri · Munter
     yöntemi · Minetti ve ark. metabolik maliyet ölçümleri
   · DAĞCILIK KURUMLARI: Alpine Club / DAV / BMC / SAC yayınları, resmî
     rehber kitapları, kurtarma ekibi zaman standartları
   · ASKERÎ SAHRA TALİMNAMELERİ (tarihî ve modern) — günlük yürüyüş hızı
   · TARİHÎ KAYNAK: menzilnâmeler, kervan güzergâh süreleri, ordu yürüyüş
     kayıtları  ⭐ bu proje için EN DEĞERLİSİ, çünkü DOĞRU ÇAĞIN verisi
🔴 KULLANILMAZ
   · forum gönderisi · kişisel blog · Strava/AllTrails kullanıcı ortalaması
     (kaynaksız, seçilim yanlı) · YZ üretimi özet
🟡 Vikipedi — yalnız "hangi formüle bakayım" sorusu için, TEK DAYANAK DEĞİL
```

⚠️ **Ve her sayı `kaynak:` ile yazılır.** Kaynağı yazılmayan bir hız değeri,
kaynağı olmayan bir hız değerinden ayırt edilemez.
⚠️ `D112`: bir kaynağın MARKASI onun provenansı değildir — aynı alan adı
bugün hem imzalı madde hem YZ üretimi özet sunuyor.

---

## 1. 🟢 KALİBRASYON HEDEFİ — Emre'nin kendi dört sayısı

Bu, programın en değerli girdisidir: **uydurulmamış bir ölçüt kümesi.**
Emre bir yerleşimden dört yöne menzil tarif etti (bütçe: 5 gün × 8 saat):

```
GÜNEY  düz ova                              → 200 km
BATI   50 km + NEHİR + devam                → ~100 km  (nehir ≈100 km bedeli)
DOĞU   rampa                                → ~100 km
KUZEY  dağ (40 km yatay / 2000 m yükselti)  → 40-50 km
```

Bugünkü modellerin bu hedefe karşı ölçümü (koordinatör, 12 Eylül):
```
                    hedef        Tobler + ortalanmış DEM
güney  düz          200 km       200 km   ✓
batı   nehirli      ~100 km      100 km   ✓ (bedel elle konarak)
doğu   rampa        ~100 km      151 km   🟡 fazla cömert
kuzey  dağ          40-50 km      70 km   🔴 DAĞ CEZASI ZAYIF
```
🔴 **Ve 2000 m / 40 km sorusunun cevabı ÖLÇÜLDÜ ve şaşırtıcı:** ortalama
eğim %5 (2,9°) çıkıyor ve Tobler bunu düz yoldan yalnızca **%19 yavaş**
sayıyor. Sebep: 2.000 m'yi 40 km'ye yayınca **hafif bir rampa** oluyor.
Gerçek dağ inip çıkarak gidilir; yerel eğim %20-40 olur:
```
yerel eğim %20 → 1,3 gün   ·   %30 → 1,6 gün   ·   %40 → 2,1 gün
```
⇒ ***Dağı zorlaştıran şey ORTALAMA eğim değil, HÜCRE İÇİNDEKİ DALGALANMA.***
Ve bugünkü `Resampling.average` tam o dalgalanmayı siliyor.

**Emre'nin "yumurta kartonu" tarifi bunun tam karşılığıdır** — ve bu, üç
işten `R3`ün varlık sebebi.

---

## 2. İŞ BÖLÜMÜ

### `R1` — YÜRÜME VE TIRMANMA BİLİMİ  → oturum **KITA 9**
Çıktı: `denetim/ARASTIRMA-YURUME-0912.md` + `denetim/VERI-YURUME-0912.json`

```
① DÜZ ARAZİ günlük menzil — ve KİM yürüyor?
   tek yürüyücü · kervan · yüklü ordu · süvari  → DÖRDÜ AYRI SAYI
   ⚠️ atlas TASARRUF boyar, sefer değil (D030) — hangisi "bölge sirayeti"
     için doğru özne? Bunu SOR, kendi başına seçme.
② EĞİM–HIZ EĞRİSİ  yokuş yukarı VE yokuş aşağı ayrı
   Tobler · Naismith+Langmuir · Munter · Minetti metabolik maliyet
   ⇒ hangisi hangi eğim bandında geçerli? SINIRLARINI yaz.
③ TIRMANMA HIZI  m/saat cinsinden (dağcılıkta standart ölçü ~300-400 m/saat)
   ve eğim arttıkça NEREDE yürüyüş biter tırmanış başlar?
④ 🔑 GEÇİT mi TIRMANIŞ mı — Emre'nin asıl sorusu
   2000 m'lik bir kütleyi 1200 m'lik bir geçitten dolaşmak ile zirveden
   geçmek arasındaki zaman farkı. Ve DOLANMA mesafesi ne kadar uzarsa
   geçit yine de kârlı kalır? (bir eşik oranı çıkar)
⑤ YÜKSEKLİK CEZASI  ince hava · kar sınırı · mevsimlik kapanma
⑥ 🔴 Emre'nin üç örneğini SAYIYLA cevapla:
   "1000 m yatay, hiç inip çıkmadan"  ·  "1000 m rakıma 1000 m mesafeyle"
   ·  "1000 m rakıma 4000 m mesafeyle"  → üç ayrı süre
⑦ TARİHÎ ÇAPRAZ KONTROL ⭐ — menzilnâme / kervan / ordu yürüyüş kayıtları.
   Modern spor fizyolojisi 21. yüzyıl insanını ölçüyor; bizim öznemiz
   16. yüzyılda yürüyor. İki kaynak ayrışırsa TARİHÎ olanı esas al ve
   farkı BİLDİR.
```

### `R2` — NEHİR GEÇİŞİNİN BEDELİ  → oturum **KITA 10**
Çıktı: `denetim/ARASTIRMA-NEHIR-0912.md` + `denetim/VERI-NEHIR-0912.json`

```
① SINIFLANDIRMA — hangi nehir hangi bedelle geçilir?
   genişlik · debi · akıntı · yatak derinliği · mevsim
   ⇒ Emre'nin biçimi doğru: bedel "kaç km'ye tekabül eden zaman" cinsinden
     yazılacak (o "100 km" dedi; SEN ölç, onaylama).
② 🔑 GEÇİT (ford) BELİRLEYİCİ — bir nehir her yerinden geçilmez.
   Tarihî geçit yerleri, köprüler, sığlıklar. Bir geçidin varlığı bedeli
   NE KADAR düşürür?
   ⚠️ Bu, motorun bugünkü davranışından KÖKTEN farklı bir şey söylüyor:
     nehir bir DUVAR değil, ÜZERİNDE DELİKLER olan bir duvar.
③ MEVSİM — taşkın döneminde kapalı, yazın kuru. Atlas GÜN hassasiyetinde;
   mevsimlik bir bedel İFADE EDİLEBİLİR Mİ? (muhtemelen hayır — o zaman
   ORTALAMA mı, EN KÖTÜ hâl mi? Gerekçesiyle öner.)
④ VERİYE BAĞLANMA — `veri-kaynak` Natural Earth nehirleri `scalerank`
   taşıyor ve motor `<= 5.0` kapısını zaten kullanıyor (`uret_petek.py:629`).
   `scalerank` → genişlik/debi eşlemesi yapılabilir mi? ÖLÇ.
   🔴 Uydurma: scalerank bir BÜYÜKLÜK SIRASI, debi değil. Ne olduğunu
     Natural Earth'ün KENDİ belgesinden oku.
⑤ TARİHÎ ÇAPRAZ KONTROL ⭐ — bir ordunun Tuna'yı / Fırat'ı geçmesi kaç gün
   sürdü? Kaynaklarda somut vakalar var ve bunlar en iyi kalibrasyon.
```

### `R3` — TOPOGRAFYA ZENGİNLEŞTİRME  → oturum **KITA 11**
Çıktı: `denetim/ARASTIRMA-TOPOGRAFYA-0912.md` + `denetim/ARAC-TRI-0912.py`

```
BUGÜNKÜ HÂL — ölçüldü:
   DEM      veri-kaynak/yukseklik/etopo2022_30s_*.tif   (30 yay-sn ≈ 926 m)
   ızgara   KV_ADIM 0,05° = 5.566 m
   işlem    Resampling.average  ← 🔴 hem zirveyi hem GEÇİDİ siliyor
   sonuç    her hücre TEK sayı: ortalama yükseklik

① 🔑 HÜCRE İÇİ İSTATİSTİK — ızgarayı BÜYÜTMEDEN (0,025° 83 M hücre olur,
   bu makineye sığmaz). Her 5,6 km hücre ~36 alt-hücre içeriyor:
      z_min · z_max · z_ort · z_std · EN ALÇAK GEÇİŞ KOTU
② ARAZİ PÜRÜZLÜLÜĞÜ — Emre'nin "yumurta kartonu" tarifinin ölçüsü.
   Standart aletler VAR, uydurmaya gerek yok:
      TRI (Terrain Ruggedness Index, Riley 1999)
      VRM (Vector Ruggedness Measure, Sappington 2007)
   ⇒ Hangisi bizim ölçeğimize uygun? Gerekçesiyle seç.
③ GEÇİT BULMA — bir sırt hattında en alçak eyer noktası (saddle/col).
   Bu, `R1④`ün (geçit mi tırmanış mı) veri ayağıdır.
④ DAHA İYİ DEM GEREKİR Mİ? SRTM 30 m dünya için ~1 TB — HAYIR.
   Ama 30s'in İÇİNDEN istatistik çıkarmak bedava. ÖLÇ: 30s içinde
   hücre başına gerçek dalgalanma ne kadar? Yeterli mi?
⑤ BELLEK BÜTÇESİ 🔴 — bu makine 12 GB ve koşu 9'da takasa girdi.
   Her yeni hücre dizisi 20,9 M × 4 bayt = 84 MB. Kaç dizi ekliyorsun,
   toplam kaç MB? ÖLÇ ve RAPORLA. Sığmıyorsa söyle.
```

---

## 3. 🔴 ÜÇÜ İÇİN ORTAK KURALLAR

```
① MOTORA YAZMAYIN — `arac/uret_petek.py` 1.MURAT'ta. Siz VERİ ve ÖLÇÜM
   üretirsiniz; maliyet fonksiyonunu KITA 6 (Ⓐ) birleştirir.
② HER SAYI KAYNAKLI — `kaynak:` alanı zorunlu. Bulunamazsa `bulunamadı`,
   ölçülemezse `ölçülemedi`, okunmadıysa `okumadım` — ÜÇÜ AYRI (D107).
③ ÇIKTI MAKİNE OKUNUR OLSUN — `.json` dosyası KITA 6'nın girdisi olacak.
   Tek bir serbest metin raporu YETMEZ (D046: bir ders veriye serbest metin
   olarak inerse, inmiş sayılmaz).
④ D022 ÖNGÖRÜNÜ ÖNCEDEN YAZ ve commit'le.
⑤ YENİ DOSYA: önce `git log --oneline -1 -- <dosya>` BOŞ mu; yazdıktan
   sonra `py <dosya>` / `node -e eval` ile AYRIŞTIRILABİLİR mi. Bu gece
   bir dosya tam bu yüzden çöktü ve ölü olduğu için çökmesi GÖRÜNMÜYORDU.
⑥ TESLİM TAHTAYA (`M-3550`) — kısa özet + dosya yolu. `send_message`
   yalnız işi durduran engel için.
⑦ COMMIT: yalnız `denetim/` altındaki KENDİ dosyalarınız, ADIYLA, hem
   `add` hem `commit` pathspec'iyle. Dizin pathspec'i YASAK (`§7`).
```

## 4. NİÇİN BU İŞ DEĞERLİ — tek cümle

Bugün motorun maliyet fonksiyonundaki her sayı **uydurulmuş**:
`EGIM_CARPANI = 0,005` kalibrasyonla bulunmuş, `TAVAN_KM = 200` bir
tercih, nehir bedeli **hiç yok**. Bu program onların yerine **ölçülmüş,
kaynaklı, tarihî veriye dayanan** sayılar koyuyor — ve Emre'nin dört
sayısı onların sınavı olacak.
