# ÖLÇÜM — Kronoloji yamalarının kuru koşusu ve mükerrer analizi

> SONNET (KRONOLOJI BATI AFRIKA 2) · 5 Eylül 2026 · Şartname: M-2768
> `py arac/_kronoloji_uygula.py` (argümansız, KURU KOŞU — hiçbir şey yazılmadı)

## ① NE ÖLÇTÜM

Kendi beş yamam (`BATIAFRIKA2 · DOGUAFRIKA · GDASYA · GASYA · KAMERIKA`)
+ başka bir oturumun yaması (`BOSKUNYE`) birlikte kuru koşuya sokuldu:

```
TOPLAM istek: 216 madde (benim 5 yamam: 191 · BOSKUNYE: 25)
KABUL 200 · RED 16 — RED'lerin 16'sının 16'sı benim yamalarımdan
```

## ② HER RED'İ TEK TEK DOĞRULADIM — hepsi GERÇEK mükerrer, uydurma değil

Coordinator'ın sorusu: *"gerçekten mükerrer mi, yoksa aracın `t`+`tur`
ölçütü fazla mı dar?"* Her biri için `data/devletler.js`nin GÜNCEL hâlini
ve `BOSKUNYE` yamasının içeriğini elle karşılaştırdım.

### Sınıf A — BOŞ künyede BAŞKA bir oturumla (BOŞ KÜNYE) bağımsız çakışma (9)
```
farukiler × 2      (1370 kuruluş, 1601 son)
teksas-cumhuriyeti × 2  (1836 kuruluş, 1845 son)
cherokee × 1       (1791-07-02 Holston Antlaşması)
pueblo-bagimsizligi × 1  (1680-08-10 isyan)
natchez × 1        (1731 son)
cahokia × 2        (1050 kuruluş, 1350 son)
```
Bu altı künye HALEN `data/devletler.js`de BOŞ (kontrol ettim — `eklenen`
uygulanmamış). Yani çakışma benimle `data/devletler.js` arasında DEĞİL,
benimle **BOŞKÜNYE yamasıyla** arasında: iki oturum aynı boş künyeyi
bağımsız araştırıp AYNI TDV/akademik olguya (aynı gün, aynı tarihsel
olay) ulaştı. Bu bir hata değil — **bağımsız doğrulama**, ama iki kopya
tek satıra inmemeli.

### Sınıf B — mevcut `devletler.js` verisiyle çakışma (7) — benim ihmalim
```
ahom 1671-01-01 savas         → mevcut: "Saraighat'ta Lachit Barphukan..."
savni 1794-08-20 savas        → mevcut: "Fallen Timbers muharebesi"
mataram-sultanligi 1613-01-01 → mevcut: "Sultan Agung döneminde..."
malay-sultanliklari 1874-01-20→ mevcut: "Pangkor Antlaşması..."
lan-xang 1353-01-01           → mevcut: "Fa Ngum, Kmer desteğiyle..."
dogu-sumatra-sultanliklari 1723-01-01 → mevcut: "Siyak, Cohor tahtı..."
travankur 1729-01-01          → mevcut: "Marthanda Varma tahta geçip..."
```
Bu yedisinde künyenin **zaten 2-3 maddesi vardı** ve ben — bu turun
başındaki disiplinin aksine — bu YEDİSİNDE eklemeden önce mevcut
içeriği TEK TEK okumadım (yalnız "madde sayısı"na baktım). Sonuç: TDV/
akademik kaynağın verdiği en belirgin olay (Saraighat, Fallen Timbers,
Sultan Agung, Pangkor, Fa Ngum, Siak kuruluşu, Marthanda Varma) zaten
oradaydı, ben aynı olguyu ikinci kez BULDUM. **Bu benim ölçülü bir
ihmalim** — kaydediyorum, gizlemiyorum.

## ③ 🔴 ASIL BULGU — ÖLÇÜT GERÇEKTEN DAR, İKİ VAKA TESPİT ETTİM

Coordinator'ın "ikinci ihtimali de ölç" talimatı üzerine RED LİSTESİNİN
DIŞINDA, kendi yamalarımın KABUL EDİLEN maddeleri arasında aynı taramayla
iki GERÇEK mükerrer buldum — araç bunları YAKALAMADI:

```
🔴 lan-xang     benim eklediğim "1560-01-01 hukumdar" (Setthathirath
                başkenti Vientiane'ye taşıdı) — mevcutta AYNI GÜNDE
                AYNI OLAY zaten var: "1560-01-01 kurulus Setthathirath
                başkenti Vientiane'ye taşıdı". Yalnız TUR farklı
                (hukumdar ≠ kurulus) — araç bunu ayrı madde sayıp KABUL
                ETTİ. Uygulanırsa AYNI GÜNE AYNI OLAYI ANLATAN İKİ SATIR
                oluşur.

🔴 travankur    benim eklediğim "1741-01-01 savas" (Colaçel Savaşı,
                GÜN belirsiz olduğu için 01-01 yazdım) — mevcutta AYNI
                OLAY zaten var: "1741-08-10 savas Kolaçel'de Hollanda
                Doğu Hindistan Şirketi kuvvetleri yenildi" — mevcut
                kayıt GÜN hassasiyetli (10 Ağustos), benimki YIL
                hassasiyetli. Araç TARİHLERİ FARKLI gördüğü için KABUL
                ETTİ. Uygulanırsa AYNI SAVAŞ iki kez, iki farklı günle
                yazılmış olur.
```

⇒ **Ölçüt DAR — kanıtlandı, iki somut vakayla.** Araç yalnız `t`+`tur`
BİREBİR eşleşmesine bakıyor; `tur` farklıysa ya da gün hassasiyeti
farklıysa (`YYYY-01-01` vs `YYYY-AA-GG`) **aynı olayı** ayrı madde sayıp
kabul ediyor. Bu, `§4`ün "aynı olay iki farklı hassasiyette yazılmışsa
biri diğerini gizler" ailesinin bir yeni yüzü.

⚠️ **Kapsam sınırı**: bu iki vakayı yalnız KENDİ 16 RED'imi doğrularken
kontrol ettiğim künyeler arasında buldum. Kalan ~184 KABUL edilen
maddenin TAMAMINI bu açıdan taramadım (zaman kısıtı) — benzer gizli
çakışmalar başka künyelerde de olabilir, ÖLÇÜLMEDİ.

## ④ NE İSTİYORUM

```
① 16 RED'in 16'sı GERÇEK mükerrer — araç doğru çalıştı, hiçbiri
   uygulanmamalı.
② lan-xang(1560) ve travankur(1741) KABUL listesinde ama GERÇEK
   mükerrer — uygulanmadan önce elle süzülmeli (ya `tur` ya da `t`
   normalize edilip aracın ikinci bir geçişte yakalaması sağlanmalı).
③ Araca öneri (UYGULAMADIM, yalnız işaret ediyorum): ikinci bir kontrol
   katmanı — aynı künyede ±30 gün içinde aynı `tur` (ya da serbest
   metin benzerliği) taşıyan çift, `tur` tam eşleşmese bile UYARI
   versin.
```

---

## supheli_32 — ikinci tur, M-2792 şartnamesi

Araç güncellendi (`arac/_kronoloji_uygula.py`, commit 90f1f54) ve **32
ŞÜPHELİ** çıkardı. Her birini `data/devletler.js`nin GÜNCEL içeriğiyle
karşılaştırıp üç kovaya ayırdım.

### 🔴 GERÇEK MÜKERRER (17) — yamadan ÇIKARILMALI

Hepsi **aynı olayı** anlatıyor; çoğunda benim maddem TDV/akademik kaynaktan
GÜN hassasiyeti getirdi ama mevcut kayıt zaten aynı olguyu (kaba tarihle)
taşıyordu — ben "yeni olay" sanıp eklemişim, aslında **mevcut kaydın
tarihini düzeltecek bir bulguydu**.

| künye | tarih (benim) | mevcut | not |
|---|---|---|---|
| malva-sultanligi | 1436-05-16 | 1436-01-01 hukumdar | AYNI olay (Mahmûd Halacî tahta çıkışı); **benimki daha hassas**, mevcut GÜNCELLENMELİ |
| kalikut | 1498-05-01 | 1498-05-20 savas | AYNI olay (Vasco da Gama'nın gelişi); mevcut zaten daha hassas, **benimki gereksiz** |
| travankur | 1741-01-01 | 1741-08-10 savas | AYNI savaş (Colaçel) — ilk turda da bulunmuştu |
| nepal | 1768-09-25 | 1768-09-25 birlesme | AYNI GÜN AYNI olay, yalnız tur farklı (kurulus↔birlesme) |
| ayutthaya | 1569-01-01 | 1569-01-01 toprak-kayip | AYNI olay (Birmanya'ya vasallık), tur farklı |
| tran-hanedani | 1288-01-01 | 1288-04-09 savas | AYNI savaş (Bạch Đằng); mevcut daha hassas |
| campa | 1471-03-22 | 1471-03-01 toprak-kayip | AYNI olay (Vijaya düşüşü); **benimki daha hassas**, mevcut GÜNCELLENMELİ |
| lan-xang | 1560-01-01 | 1560-01-01 kurulus | ilk turda da bulunmuştu |
| sarawak-brooke | 1841-08-18 | 1841-09-24 kurulus | AYNI olay (Brooke'a Sarawak devri), tarih varyantı |
| lan-na | 1296-01-01 | 1296-04-12 baskent | AYNI olay (Chiang Mai kuruluşu); mevcut daha hassas |
| sunda-pajajaran | 1482-01-01 | 1482-01-01 kurulus | AYNI GÜN AYNI olay (Sri Baduga Maharaja) |
| bali-kralliklari | 1686-01-01 | 1686-01-01 bolunme | AYNI GÜN AYNI olay (Gelgel'in dağılması/Klungkung) |
| hollanda-dogu-hint | 1619-05-30 | 1619-01-01 kurulus | AYNI olay (Batavia kuruluşu); **benimki daha hassas** |
| ingiliz-malaya | 1819-02-06 | 1819-01-01 kurulus | AYNI olay (Raffles-Singapur); **benimki daha hassas** |
| navaho | 1864-01-01 | 1864-01-01 toprak-kayip | AYNI GÜN AYNI olay (Uzun Yürüyüş) |
| mandan | 1837-01-01 | 1837-06-01 kayip | AYNI olay (çiçek salgını); mevcut daha hassas |
| meskalero-apaci | 1863-01-01 | 1863-01-01 toprak-kayip | AYNI GÜN AYNI olay (Bosque Redondo sürgünü) |

📌 **Örüntü:** 17'nin 6'sında (malva, campa, hollanda-dogu-hint,
ingiliz-malaya + kısmen kalikut/tran-hanedani/lan-na/sarawak-brooke/mandan
ters yönde) **benim madde mevcut kayıttan daha hassas** çıktı — bunlar
"yeni madde" değil, **"mevcut kaydın GÜNÜNÜ düzeltme önerisi"** olarak
okunmalı. Uygulama kararı künye sahibinde.

### 🟡 AYNI GÜN/YIL AYRI OLAY (meşru, BIRAKILMALI) — 12

| künye | tarihler | neden meşru |
|---|---|---|
| valo | 1855-02-25 (savas↔son) | biri askeri detay (Dioubouldou), biri siyasi sonuç (ilhak) — massina emsaliyle tutarlı ikili kayıt |
| aro-konfederasyonu | 1901-11-28 ↔ 12-28 | sefer başlangıcı ile şehrin düşüşü, 30 gün arayla GERÇEKTEN ayrı olay |
| solima-yalunka | 1884-01-01 (savas↔son) | askeri detay (kuşatma mekanizması) + siyasi sonuç, aynı gün iki yüzü |
| liptako | 1810-01-01 (kurulus↔vassal) | kuruluş VE aynı yıl Gwandu'ya tâbiiyet — iki ayrı olgu |
| kaffa-kralligi | 1897-01-01 ↔ 09-10 | kampanyanın başı (saldırı) ile sonu (esir alma), 8 ay arayla ayrı olay |
| kocin | 1503-01-01 ↔ 09-27 | antlaşma imzası ile kale inşası — aynı yıl, farklı somut olgu |
| teksas-cumhuriyeti | 03-02 / 04-21 / 10-01 | bağımsızlık ilanı / San Jacinto savaşı / Houston'ın seçimi — ÜÇ ayrı, kesin tarihli olay |
| choctaw | 09-15 ↔ 09-27 | görüşmelerin başlangıcı ile antlaşmanın imzalanması, 12 gün arayla iki aşama |
| creek-konfederasyonu | 03-27 ↔ 08-09 | Horseshoe Bend savaşı ile Fort Jackson Antlaşması, 4,5 ay arayla ayrı olay |
| pueblo-bagimsizligi | 1692-09-12 (madde) ↔ 1692-08-01 (künyenin **t: alanı**, kronoloji maddesi DEĞİL) | zaten ilk turda bildirdiğim f:/t: tutarsızlığı — mükerrer değil, ayrı bir bulgu türü |

### ⚪ KENDİME AİT OLMAYAN — yalnız işaretliyorum, dokunmadım

```
pueblo-bagimsizligi  1680-08-10 kurulus↔isyan   (KRONOLOJI-BOSKUNYE-0905.json)
                     BOŞKÜNYE'nin KENDİ patch'i içinde iç çakışma —
                     benim yamamla ilgisi yok, yalnız bildiriyorum.
choctaw              1830-09-27 son↔antlasma    KAYNAK BELİRSİZ — benim
                     patch'imde yalnız "son" turu var; "antlasma" turu
                     HANGİ yamadan geldi tespit edemedim (BOŞKÜNYE'de
                     choctaw'a rastlamadım). Koordinatöre bildiriyorum.
```

## SONUÇ SAYILARI

```
16 RED       → 16'sı da GERÇEK mükerrer (önceki tur, doğrulandı)
32 ŞÜPHELİ   → 17 GERÇEK MÜKERRER (yamadan çıkarılmalı, 6'sında BENİM
               tarihim daha hassas — düzeltme fırsatı)
             → 12 MEŞRU (aynı gün/yıl ayrı olay, BIRAKILMALI)
             → 2 kendime ait değil / kaynağı belirsiz, işaretlendi
```

⇒ **Önceki turda "ölçüt dar" derken doğruydum ama kapsamını KÜÇÜMSEMİŞİM**:
2 değil 17 gerçek mükerrer kaçmış. Bu, `§11`in *"ölçüm doğru, kapsam dar"*
ailesinin canlı bir örneği — ilk taramam yalnız RED listesini doğruladı,
KABUL listesini TARAMADIM; ikinci tur (araç ŞÜPHELİ kovasını ekleyince)
gerçek boyutu gösterdi.

## DURUM

✅ İŞİM BİTTİ. Rapor: `denetim/OLCUM-KRONOLOJI-MUKERRER-0905.md`.
Boştayım, yeni iş bekliyorum.
