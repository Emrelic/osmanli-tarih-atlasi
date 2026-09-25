# MOTOR-LEGO-0925 — koşu niçin 19 saat: lego'yu öldüren ÜÇ kilit

**Oturum:** MOTOR-LEGO-0925 · **Koordinatör:** YILDIRIM BAYEZIT · 25 Eylül 2026
**Durum:** statik kısım BİTTİ · ④ bit denkliği ve ⑥ kutu sınavı koşu 15 bitince (M-5172 ⑤/⑨)
**Motor koduna dokunulmadı.** Yama: `denetim/MOTOR-LEGO-0925-yama.diff` (UYGULANMADI,
`git apply --check` temiz).

---

## Emre'nin sorusunun kısa cevabı

> *"5 bölgede, 3 zamanda değişiklik yapılsa yalnız o parçayı söküp takamıyor muyuz?"*

**Kod bunu yapabiliyor, ama üç ayrı kilit yüzünden bir kez bile yapmadı:**

| # | Kilit | Etkisi | Çaresi |
|---|---|---|---|
| K1 | Kalıcı kullanıcı ortamında `MOTOR_PARALEL_KAPALI=1` | En pahalı katman (`govde`, koşunun %78'i) **hiç yazılmadı**; süreç işçisi ve DEVAM da kapalı | değişkeni kaldırmak (Emre'nin kararı) |
| K2 | Tuz her koşuda değişiyor | ÇALIŞAN katmanlar bile koşular arasında isabet almıyor (koşu 14: col 0/549 · kusat 0/2437 · osm 10/579) | yama: geometri katmanlarının tuzundan `renkler.py` + `girdi.py` çıkar |
| K3 | İki ayrı önbellek dosyası | koşu 14 `C:\atlas-onbellek`, koşu 15 `C:\atlas\_motor_onbellek` | tek yol seçilmeli (karar) |

Kilitler açılırsa ölçülen isabet (ağırlıkça, **üst sınır**, aşağıdaki §②):
**sahip değişikliği ~%94 · yeni nokta ~%68 (en kötü turda %25) · büyük hasat (373 nokta) %4,6.**
Yani Emre'nin örneğinde 13,5 saatlik aşama kabaca **~1 saate** (sahip değişikliği) ya da
**~4-5 saate** (yeni nokta) iner. 373 noktalık bir hasatta lego hiçbir şey kazandırmaz.

---

## ① NİÇİN ATEŞLENMİYOR — ölçüldü, üç bağımsız yerden

**Öngörü (ölçümden önce):** şartnamedeki adaylardan en olası olanı "işçi süreçte `_ONB`
farklı kuruluyor" sanmıştım. **ÇÜRÜDÜ:** hiç işçi süreç yoktu (`MOTOR_SUREC_ISCI=1`),
sebep hiçbir aday değildi.

1. **Kalıcı değişken:** `[Environment]::GetEnvironmentVariable('MOTOR_PARALEL_KAPALI','User')` → `1`.
2. **Koşan süreç:** koşu 15 (pid 4908, `C:\atlas-kosu15`) `psutil.environ()` →
   `MOTOR_PARALEL_KAPALI=1`. Başlatma komut satırında YOK ⇒ mirastan
   (`denetim/ARAC-LEGO-surec-env.py`).
3. **Kod yolu:** bu bayrak `uret_petek.py:6672`deki ESKİ SIRALI döngüyü seçer. O blok bit
   denkliğinin "sınama tabanı" olarak BİLEREK dokunulmadan bırakılmıştır ve içinde
   `_ONB.oku/yaz("govde")` **yoktur**. `:512` ayrıca `_SUREC_ISCI=1`, `_DEVAM=False` yapar.
4. **Log taraması:** 88 koşu logunda `[PARALEL] FAZ 1` ya da `[SÜREÇ]` satırı basan koşu: **0**.
   ⚠️ Bu 0 henüz TEK YÖNLÜ (M-5172 ⑥, `C13`): dizginin paralel açık koşuda gerçekten
   basıldığı kutuda gösterilmedi. Kod `:6753`te koşulsuz `print` ediyor (-B doğruladı);
   kutu sınavı koşu 15 bitince.
5. **Canlı tutarlılık:** koşu 15 gövde aşamasının 6. saatinde veritabanında (salt okunur,
   `ARAC-LEGO-sayim.py`) `dolgu` son yazım 10:04 — `_dolgu_kumesi` FAZ 1 içinden çağrılıyor
   ⇒ önbellek açık ve döngü canlı — ama `govde` **0 satır**.
6. **Alet sınavı (`B9`):** `ARAC-LEGO-alet-sinav.py` geçici dosyada `govde` yaz → oku →
   ikinci bağlantıdan oku → bit denkliği → kapalı önbellek (negatif çapa): **7/7 geçti**,
   HEAD sürümüyle. Kusur alette değil.
7. **Kökeni:** M-3330 (11 Eylül 02:59) — iş parçacığı yolu "~14× yavaş" bulunup sıralıya
   dönüldü. Değişkeni kimin, hangi komutla kalıcı yazdığı **bulunamadı** (M-5172 ⑧: aranmıyor).
   📌 Not: o "14× yavaş" ölçümü gövde aşamasından ÖNCEKİ bir aşamada alınmış
   (`motor_kara` 107. dk); bayrak o aşamaya dokunmuyor. Yavaşlığın sebebi bu yol
   olmayabilir. **Doğrulanmadı.**

**Sonuç:** 18-19 Eylül'de yazılan gövde önbelleği, süreç işçisi ve DEVAM üretimde
**bir kez bile çalışmadı.** "🧱 ÖNBELLEK: AÇIK" satırı bunu söylemiyordu.

## ①b İKİNCİ KİLİT — tuz her koşuda değişiyor (M-5173'ün (a)'sı, burada kök sebebiyle)

| Koşu | Tuz | Veritabanı |
|---|---|---|
| koşu 14 (20 Eyl) | 22742ea1 | `C:\atlas-onbellek` |
| kosu5 (21 Eyl) | 7c843c40 | `…OneDrive…\_motor_onbellek` |
| kosu6 (22 Eyl) | 169495a2 | `…OneDrive…\_motor_onbellek` (= bugünkü `C:\atlas\_motor_onbellek`) |
| koşu 15 (25 Eyl) | 0e8e7049 | `C:\atlas\_motor_onbellek` |

`ARAC-LEGO-tuz.py`: 18-25 Eylül'de tuzu değiştiren **19 commit** — `renkler.py` 8 ·
`uret_petek.py` 7 · `girdi.py` 4 · `motor_onbellek.py` 1 (dosya başına; bir commit birden
çok dosyaya dokunabilir). Sınıf: ANLAMLI 17 · yalnız HEX 1 · yalnız YORUM 1.
⇒ "yorum/renk değişikliğini tuzdan ayıkla" çaresi **yalnız 2/19 kazandırır — önerilmedi.**

**Asıl bulgu — `ARAC-LEGO-zincir.py` (AST):** gövde hesap zinciri 30 işlev / 91 modül adı,
serbest kenar zinciri 9 işlev / 25 ad. **İkisinde de `BOYALAR`, `_HARITA_ALT`, renk YOK.**
Okunan tek veri `YERLER` (+ `MOTOR_YURUYUS` bayrağı); o da anahtarın içinde (konum ·
`kasitli_bosluk` · `bos` · aktif üyelik · petek WKB). ⇒ `renkler.py`nin ve `girdi.py`nin
bu katmanlara etkisi ZATEN anahtarın içeriğinden geçiyor; tuzda olmaları yalnız fazladan
bayatlık üretiyor.

**Somut vaka:** koşu 6 ile koşu 15'in `uret_petek.py` özeti **AYNI** (`c90fa6c8…`,
`data/donemler.js` URETIM_IZI ile karşılaştırıldı) ve veritabanı AYNI dosya. Tuz yalnız
`renkler.py` + `girdi.py` yüzünden ayrıldı. Yamayla koşu 15 osm/sb/govde katmanlarında
koşu 6'nın kayıtlarını okuyabilirdi (ama bkz. §②: koşu 6→15 veri farkı zaten büyük).

`uret_petek.py`nin 7 commit'inden 3'ü (5c374722 · 31c4b983 · 8f5aa574) gövde zincirine
**hiç dokunmadı** — katman başına KOD tuzu bunları da kurtarırdı. **Önerilmedi:** AST
körlüğü (`globals()`, dolaylı çağrı) sessiz bayat sonuç riski taşır. Sonraki adım olarak
kayıtlı.

## ② ATEŞLENSEYDİ NE KAZANIRDIK — `ARAC-LEGO-etki.py`

Anahtar VEKİLLE yeniden kuruldu (motor koşturulmadan): üyeler + çevre kutusundaki bütün
noktalar (konum · bayraklar · aktif mi). Körlükleri (petek WKB yok · dmax=0 · dolgu yok)
hepsi isabeti **FAZLA** sayar ⇒ **rakamlar üst sınırdır.** Ağırlık = |aktif|
(motorun ETA ağırlığı, süreyle R²=0,96). Sağlama: aynı girdi → %100 isabet ✓.

| Senaryo | Gövde isabeti | Ağırlıkça isabet | Yeniden hesap |
|---|---|---|---|
| **Gerçek:** koşu 6 → koşu 15 girdisi (+373 nokta, 604→608 boya) | 1.070 / 4.954 (%21,6) | **%4,6** | %95,4 |
| **Emre ① SAHİP:** 5 bölge × 3 zamanda `s:` sahibi değişir (5 tur) | %94,9-96,9 | **ort %93,8** (91,8-95,0) | ~%6 |
| **Emre ② NOKTA:** 5 bölgeye birer yeni nokta (5 tur) | %64,6-83,9 | **ort %67,5** (24,7-81,8) | ~%33 |

Koşu 6 girdisi git'ten yeniden kuruldu: damgadaki 89 dosyanın **88'i bit bit** tuttu;
`yerlesimler_amerika.js`in o sürümü **bulunamadı** (commit edilmemiş) — Amerika farkı biraz
şişik olabilir.

**Yapısal sınır — isabeti öldüren şey KUTU:** anahtarın "çevre"si gövdenin BÜTÜN kutusu
± R (≥ ~6-7°) içindeki her yerleşimi taşır. Rusya, İngiltere, Osmanlı gibi dev gövdelerin
kutusu yarım dünyadır ⇒ o kutuya düşen TEK yeni nokta o devletin BÜTÜN dönemlerini
bayatlatır. NOKTA tur 2'de Osmanlı ağırlıkça isabeti %11,8'e düştü (bir nokta Osmanlı
kutusuna girdi ⇒ Dönemler aşamasının tamamı yeniden). Sahip değişikliği ise zamanda yerel
kalır (anahtar tarih taşımıyor, yalnız aktif küme) ⇒ %94.
⇒ Gerçek lego için **sonraki adım:** anahtarı gövde yerine PARÇA/KAROya bölmek.
Tasarım işi, bu görevin kalemi değil.

**Süre karşılığı (koşu 14 bilançosu):** gövde 13s29dk (%78,5) · Osmanlı gövdesi 1s17dk ·
serbest kenar 59dk. İsabette de kalan yük: `petek_epok` 220 çağrı / 30 dk (günlük ezberli)
+ anahtar özeti ⇒ küçük. Kaba karşılık: sahip değişikliğinde gövde aşaması ~13,5s → ~1s;
yeni noktada ~4-5s; büyük hasatta kazanç yok.

## ③ "Dönemler kuruluyor" (2s17dk, %13,3)

Önbelleği VAR (`osm` + `sb`) ve sıralı yolda da ateşleniyor — K1 onu etkilemiyor.
Onu öldüren yalnız K2 (tuz). **Kod değişikliği önerilmedi** (M-5175 ③); yamanın geometri
tuzu `osm` ve `sb`yi de kapsıyor, ayrı bir iş gerekmiyor. `sb` zinciri de renk okumuyor
(AST, yukarıda).

## ④ TERS YÖN — bit denkliği: **YAPILMADI, ERTELENDİ**

Kutu koşusu ~3,5 GB ister; koşu 15 çalışırken boş RAM ~2,8 GB. M-5172 ④ onayladı.
Koşu 15 bitince: (a) paralel AÇIK kutu koşusu — `[PARALEL] FAZ 1` loga düşüyor mu
(`C13`) · (b) aynı kutu önbellekli iki kez: 2. koşuda `govde` isabeti > 0 ve çıktı
sha256'sı 1. koşuyla aynı · (c) önbelleksiz sıralı taban ile kıyas. -B'nin
`ARAC-LEGO-0925-bit.py` sürücüsü devralınacak (taze worktree'ye DEM kopyalanmalı — `D235`).
⚠️ Yamayı uygulamadan önce (b) yamalı motorla da koşmalı.

## YAMA — `denetim/MOTOR-LEGO-0925-yama.diff` (UYGULANMADI)

1. **Katmanlar adıyla** (M-5172 ⑦): açılışta `CANLI: … · ÖLÜ: govde` satırı;
   `MOTOR_PARALEL_KAPALI=1` ise `🔴🔴 govde katmanı ÖLÜ — koşunun ~%78'i isabet
   almayacak` uyarısı.
2. **Tuz geçen koşudan farklı mı** (M-5175 ③): `motor_onbellek.py`ye `tuz_karsilastir()`
   — önbellek dosyasında `meta` tablosu, bir önceki koşunun tuz PARÇALARINI saklar;
   açılışta "tuz FARKLI (değişen: motor:renkler.py, …) ⇒ bu koşu isabet ALMAYACAK" ya da
   "önceki kayıt YOK" basar. İki yönde sınandı (`ARAC-LEGO-alet-sinav.py`, 5/5).
3. **Geometri tuzu (K2):** `govde · osm · sb` ayrı bir `Onbellek` örneğiyle (`_ONB_GEO`,
   aynı dosya) yazılır/okunur; tuzunda `renkler.py` ve `girdi.py` YOK. Bütün `_ONB.*("govde"|
   "osm"|"sb")` çağrıları çevrildi (9 değişim, her biri tam 1 eşleşme; kalan 0). Özet iki
   örneği de basar.
   ⚠️ Yama `uret_petek.py` + `motor_onbellek.py`ye dokunur ⇒ uygulandığı an tuz değişir
   (ilk koşu yine soğuk). Koşu 15 SÜRERKEN UYGULANMAZ.

**Yamada OLMAYANLAR (karar):**
- K1: kalıcı değişkeni kaldırmak — Emre (M-5172 ③).
- K3: tek önbellek yolu — `kos_ve_yayinla.py` `C:\atlas-onbellek` veriyor, motorun
  varsayılanı `<kök>/_motor_onbellek`; koşu 15 elle ikincisiyle başlatıldı. Biri seçilmeli.
- Kutu/karo anahtarı (§② yapısal sınır) — tasarım işi.

## Bulunamayanlar
- Kalıcı değişkenin kaynağı (komut/oturum) — `bulunamadı`.
- Koşu 6 girdisinden `yerlesimler_amerika.js` sürümü — `bulunamadı`.
- M-3330'daki "14× yavaş"ın gerçek sebebi — **ölçülmedi.**

## Aletler (hepsi salt okur; motoru koşturmaz)
`ARAC-LEGO-sayim.py` (katman satırları) · `-surec-env.py` (koşan sürecin MOTOR_* ortamı) ·
`-tahta-ara.py` · `-tuz.py` (tuz commit sınıfı) · `-zincir.py` (AST çağrı zinciri) ·
`-etki.py` (isabet vekili) · `-alet-sinav.py` (B9 + yama sınavı, geçici dosyada).
