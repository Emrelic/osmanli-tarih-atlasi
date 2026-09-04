# TESPİH — 4 Eylül 2026

> Sıra `FAYDA ÷ EMEK`e göre. Kalem kapandıkça işaretlenir; ertesi gün
> **buradan** devam edilir. 20 dakikalık uyandırıcı (`cron fb6be0f1`)
> her turda bu dosyayı okur.

## 🔒 GÜNÜN KISITI
```
KOŞU 4 · 00:48:18 başladı · PID 12656 · 9,5+ saat · CPU 33.500 sn (CANLI)
⚠️ log satırı 01:44'te donmuş GÖRÜNÜYOR — motor tamponu, ölüm değil.
   Ölçüm işlemden yapılır, logdan değil.
⚠️ İlk tahmin ~07:45'ti, AŞILDI. Yeni tahmin verilmiyor: tahmin logdan
   geliyordu, log bayat.
DONMUŞ : data/*  ·  arac/uret_petek.py · renkler.py · girdi.py
SERBEST: js/app.js · css/style.css · index.html · denetim/* · oturumlar/*
```

---

## ✅ BUGÜN KAPANANLAR

| # | iş | commit |
|---|---|---|
| 1 | Siyasî katman coğrafyayı örtüyordu → **KİP SEÇİMİ** (⑤ Yumuşak renk) | `932d4cf` · r5589 YAYINDA |
| 2 | 1923-10-29'da yalnız Türkiye görünüyordu | `00975a8` |
| 3 | Katman seçici haritadan butonların içine | `00975a8` |
| 4 | **OWTRAD toplamaya girdi** — kenar 121→295 · bileşen 4→**1** | `e0b0e82` |

🔴 **4'ün TARAYICI DOĞRULAMASI BORÇ.** Mantık `app.js`'ten kesilen GERÇEK
kodla, gerçek veriyle sınandı (9 kalemin 9'u tuttu) — ama canlı sayfada
`isStyleLoaded()` hiç `true` olmadı (koşu + üç oturum makineyi doyurdu).
`C13④` (çıktıyı doğru yerden okuduğunu göster) **koşulmadı**; "doğrulandı"
diye yazılmayacak.

---

## ⏳ SEVK EDİLDİ — 4 Eylül, üç oturum

| oturum | kimlik | küme | şartname |
|---|---|---|---|
| KRONOLOJİ ORTA AMERİKA | OPUS HAZIR KITA 125 (346 K) | 13 künye · 8'i %0 | `KRONOLOJI-ORTAAMERIKA-0904.md` |
| KRONOLOJİ GÜNEY AMERİKA | OPUS HAZIR KITA 126 (402 K) | 25 künye · 18'i boş | `KRONOLOJI-GUNEYAMERIKA-0904.md` |
| KRONOLOJİ AFRİKA GÖVDE | OPUS HAZIR KITA 127 (527 K) | 69 künye · iskelet | `KRONOLOJI-BATIAFRIKA-0904.md` |

Üçü de **yalnız** `denetim/KRONOLOJI-<AD>-0904.json` yamasına yazar;
`data/devletler.js`ye DOKUNMAZ (koşu sürüyor + tek dosya = sessiz veri kaybı).

🔴 **VE BURADA BİR PLAN ÇÜRÜDÜ, ÖLÇÜMLE.** İlk niyet bölge oturumlarını
(Afrika · Gamerika · Kamerika · Okyanusya · Sibirya) uyandırmaktı — Emre'nin
*"o konuda çalışmış oturumlara iş verebilirsin"* izniyle. Ama izin **şartlıydı**
(*"eğer daha doğru, hızlı, tasarruflu olacaksa"*) ve şart ölçülünce sağlanmadı:
```
Dünya-Afrika-0903     970 K   🔴 ÖNCE YAZ — diskte OLMAYAN iş var
Dünya-Gamerika-0903   944 K   🔴 EMEKLİ ET
Prusya                865 K   🔴 EMEKLİ ET
Sibirya-0903          794 K   🔴 EMEKLİ ET
DUNYA-KAMERIKA-0903   783 K   🟡 "kalan işi TAZE işçiye vermek DAHA UCUZ"
Dünya-Okyanusya       713 K   🔴 EMEKLİ ET
OPUS HAZIR KITA 125   346 K   ← seçilen
```
Bir mesaj bağlamın **tamamını** yeniden taşır ⇒ 944 K'lık oturumu uyandırmak
346 K'lıktan ~3 kat pahalı. Bölge oturumlarının öğrendiği zaten `denetim/`
altında yazılı.

---

## 🔵 SIRA

| # | iş | keskinlik | hedef | niçin bu sırada |
|---|---|---|---|---|
| 5 | **Koşu bitince yayın zinciri** | — | — | `denetle.py` → `renk_olc.py` → `durum_tablosu.py --yaz` → `surum_damgala.py` → push |
| 6 | ✅ `serbest-hale` · `serbest-cekirdek` — **DÜZELTİLDİ** `61f6f60` · katman 39, ikisi de VAR | %100 | %100 | 🔴 MapLibre ifade hatası (4 konsol hatası) ⇒ **"serbest" topraklar haritada hiç çizilmiyor.** `js/app.js` SERBEST, küçük iş, görünür etki |
| 7 | `KRONOLOJI_*` 18 küresel karşılıksız | %0 | %90 | 🔴 Yüklü kronoloji VAR, hiçbir künyeye bağlanmıyor: `cin · hindistan · japonya · misir · ozbek · anadolu · arabistan · sirbistan · balkan · orta_asya · guney_asya · dogu_afrika · kuzeyafrika · italya_sehir · iran_ardillari · atina_dukaligi · naksa_dukaligi · rodos_sovalyeleri`. **Veri zaten var, adres yanlış** — en ucuz kronoloji kazancı |
| 8 | `tur` sözlük kayması | %0 | %100 | `toprak-kayip` 105 · `kayip` 7 · `toprak` 2 — aynı cinsin üç yazımı; `ic-savas` diye bir tür YOK (en yakını `bolunme` 70). Ölçüt aracını yanıltıyor |
| 9 | Kronoloji dalga 2 — Okyanusya · Sibirya-bozkır · Orta Asya | %0 | %80 | 5 + 8 + 14 künye · şartname yazılacak |
| 10 | Kronoloji dalga 2 — Avrupa boşlukları | %0 | %80 | `kuzey-avrupa` 7 künye kuruluş **%43** · `bati-avrupa` son %45 · `orta-avrupa` son %55 · `dogu-avrupa` son %61 |
| 11 | **Emre görev ①**: dizin TAMLIK denetimi | %0 | %85 | *"1281-1923 arası tüm devletlerin var olup olmadığı"* — bu kronoloji dolumundan AYRI iş: eksik KÜNYE aramak |
| 12 | **Emre görev ③**: tenha bölgelerde ŞEHİR | %0 | %80 | *"devletler şehirler kronolojiler"* — şehir ayağı yerleşim noktası işi, `§2` emilme kuralına bağlı |
| 13 | **Emre (K)**: küresel görünüm planı | %10 | %70 | maplibre-gl 4.7.1'de `setProjection` YOK, v5 gerekli. `setTerrain` VAR. Risk: 37 katman + 9 sefer katmanı + 481 DOM işaretçisi v5'te sınanmadı |

---

## 🔴 YENİ BULGU — YANLIŞ HASSASİYET, 161 künye

*(4 Eylül · bir işçi oturumun reddinden doğdu)*

KRONOLOJİ ORTA AMERİKA, `purepecha-imparatorlugu` için `son` maddesi
yazmayı **reddetti** — ve gerekçesi bir tek künyeden büyük çıktı:

```
künye        t:1530-02-14        ← GÜN hassasiyeti
akademik     1529                ← bir yıl fark
künyenin KENDİ kaynak alanı:
   "bulunamadı — … Tarihin dayanağı DURUYOR: f:/t: BAĞLI VERİNİN
    kullandığı aralığa HİZALANDI. Akademik kaynak ARANACAK."
```
⇒ Gün hassasiyeti bir **ölçüm** değil, bir **hizalama**.

**TARANDI — tek vaka değil:**
```
591 künyenin 161'i  gün hassasiyetli tarih taşıyor VE `kaynak` alanı
                    LİTERAL olarak "bulunamadı" ile BAŞLIYOR
novgorod 1478-01-15 · pskov 1510-01-13 · tver 1485-09-12
moskova 1547-01-16 · litvanya 1569-07-01 · cenova 1797-06-14
imereti 1810-02-20 · kilikya-ermeni 1375-04-14 …
```

> 🔴 **PAYDA DÜZELTİLDİ 4 Eylül — 161 DEĞİL 147.** `KRONOLOJİ ORTA AMERİKA`
> örneklemi çekerken gördü, koordinatör bağımsız doğruladı (tam **14**
> künye): bunlar kümeye **yalnız `1923-10-29`** yüzünden girmiş, ve o
> atlasın **pencere sonu** — bir gün iddiası değil.
> `cimma-sultanligi · somali · buganda · umman-zengibar · haiti · racput ·
> manipur · nepal · travankur · san-devletleri · cohor-sultanligi ·
> tidore-sultanligi · bharatpur-cat · cunagadh`
> ⇒ Gerçek küme **147**, *"yalnız geometride"* kovası **97**.
>
> 📌 Ve aynı tuzak bugün **ÜÇ ayrı ölçümde** çıktı: istatistik sınavında
> taban şişti (29. gün 109 kez) · kronoloji çapraz kontrolünde eşleşmelerin
> çoğu `1923-10-29` çıktı · ve burada paydada. ⇒ ***Pencere uçları bir
> ÖLÇÜM DEĞERİ değil, bir SINIR İŞARETİDİR; her sayımda ayrıca elenir.***
>
> 🟢 **VE ÖLÇÜLDÜ — çürüme oranı ≈ 0:** 97'den `random.Random(20260904)`
> ile çekilen 20 künyede **gün doğrulandı 6 · yıl/ay doğrulandı 7 ·
> ölçülemedi 7 · ÇÜRÜYEN 0**. Altısı birincil belgeden (Pontotoc Creek
> 1832-10-20 · Greenville 1795-08-03 · Estonya 1918-02-24 …).
> ⚠️ Sınırı: 20'lik örneklem küçük bir oranı ayırt edemez. *"Sıfır çürüme"*
> = **"oran düşük"**, *"oran sıfır"* DEĞİL.
> ⇒ Hüküm: **97 künye SÜPÜRÜLMEYECEK.** Kova bir borç değil, bir kayıt.

⚠️ **Ve hüküm dikkatli verilmeli: bunların çoğu muhtemelen DOĞRU.**
Moskova `1547-01-16` IV. İvan'ın taç giymesidir. Kusur *yanlışlık* değil,
**yanlış HASSASİYET**: gün yazmak *"bu günü biliyorum"* demektir, oysa
aynı kaydın `kaynak` alanı *"bilmiyorum"* diyor. İkisi yan yana duruyor ve
**gün, kaynağın yokluğunu ÖRTÜYOR.**

📌 Bu, `§11`in *"yuvarlak tarih yalnız yanlış değildir — çelişkiyi de
saklar"* dersinin **AYNASI**. Orada yuvarlaklık bir boşluğu 21 aydan iki
aya indirip gizliyordu; burada **sahte kesinlik** bir dayanaksızlığı
gizliyor. İkisi de aynı aileden: *hassasiyet yalnız doğruluk değil,
GÖRÜNÜRLÜK meselesidir.*

🔜 **İŞ DEĞİL, HENÜZ ÖLÇÜM.** Yapılacak olan üç kova ayırmak:
```
① kaynak VAR ama künyeye yazılmamış    → yaz, kapan
② gün gerçekten biliniyor              → kaynağı bul
③ gün HİZALAMA ürünü                   → `YYYY-01-01`e ÇEK
```
⚠️ ③ bir veri değişikliğidir ve `Değişmez 2` senkronunu etkileyebilir —
koşudan sonra, ölçülerek.

## 🔴 AÇIK BORÇLAR — iş değil, KAYIT

```
① OWTRAD tarayıcı doğrulaması   node ile sınandı, TARAYICIDA değil (yukarıda)
② renkler.py OPAKLIK denetimi   `"fill-opacity": 0.44` DİZGİSİNİ arıyor;
                                yumuşak değerler artık SIYASI_KIP sözlüğünde
                                ⇒ uyarı SERT kipte DOĞRU, YUMUŞAK kipte YANLIŞ
                                🔒 renkler.py DONMUŞ — koşu bitince
③ Suceava ↔ Suçava  4,15 km     OWTRAD'ın KENDİ `hal:"supheli"` damgası;
                                birleştirilmedi, konsolda ADIYLA basılıyor.
                                KARAR bekliyor: aynı şehir mi?
④ koridor 7 kenar hâlâ atlanıyor  ucu koordinatsız düğüm
⑤ VERI_SINIRI uyuşmazlığı        js (-180,-60,180,85) ↔ altlık
                                 (-176.2,-45.5,180.0,81.8)
⑥ `s.kesinlik` alanı             BILINEN_ALANLAR'da yok (2 kayıt)
⑦ EMEKLİLİK                      9 oturum emekli edilmeli · 1 iş bölünmeli
                                 🔴 Dünya-Afrika-0903 ÖNCE DEVİR RAPORU
                                 vermeli (970 K, diskte olmayan iş var)
```

## ÜRETEÇ ÖNERİLERİ — Emre'nin onayını bekliyor
```
T-0126  Ters sorgu: haritaya tıklayınca o noktanın TAM zaman çizgisi
T-0127  Kırılma vurgusu: madde tıklanınca o gün DEĞİŞEN yerler parlasın
T-0128  Belirsizlik görselleştirmesi (YYYY-01-01 kesinlik taşımıyor)
onay:   py <ClaudEmre>/kutu/tespih.py --onayla T-0126
```

```
✅ bitti   ⏳ sürüyor   🔵 sırada   ⚪ bekletildi
```
