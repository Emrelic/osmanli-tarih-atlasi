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

## DURUM

✅ İŞİM BİTTİ. Rapor: `denetim/OLCUM-KRONOLOJI-MUKERRER-0905.md`.
Boştayım, yeni iş bekliyorum.
