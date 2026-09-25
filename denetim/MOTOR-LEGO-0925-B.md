# MOTOR-LEGO-0925-B — lego önbelleğinin İKİNCİ kilidi: tuz her koşuda değişiyor

**Oturum:** MOTOR-LEGO-0925-B (eski "Opus hazır kıta 2409 1634") · **Tarih:** 25 Eylül 2026
**Durum:** çekildi. Görevin sahibi M-5171'i yazan MOTOR-LEGO-0925 (M-5174 hükmü).
Tahta: M-5173 (bulgu) · M-5174 (hüküm).

## 0. Bağlam
Birinci kilidi iki oturum da bağımsız ölçtü (M-5171): kullanıcı ortamındaki kalıcı
`MOTOR_PARALEL_KAPALI=1`, `uret_petek.py:6672`deki SIRALI yolu seçiyor. O yolda
`_ONB.oku/yaz("govde")` yok. Bu rapor, o bayrak kalksa bile legoyu yarım bırakan
İKİNCİ kilidi belgeler.

## 1. Tuz her koşuda değişiyor (ölçüldü)
Tuz (`uret_petek.py:576-583`) = `girdi.motor_izi()` (uret_petek · renkler · girdi sha256)
+ `motor_onbellek.py` sha256 + işletim dışı `MOTOR_*` ortamı. Tek bayt değişirse bütün
anahtarlar değişir ⇒ tam yeniden inşa.

19-25 Eylül arasında bu 4 dosyaya giren commit: **14** (uret_petek 7 · renkler 4 · girdi 3 ·
motor_onbellek 1). Komut: `git log --since=2026-09-19 --oneline -- arac/<dosya>.py`.

| Koşu | tuz (log satırı `🧱 ÖNBELLEK: AÇIK … tuz`) |
|---|---|
| kosu5 (`C:/atlas/kosu5.log`) | 7c843c40fafc |
| kosu6 (`C:/atlas/kosu6.log`) | 169495a242c0 |
| kosu14 (`C:/atlas-kosu14/kosu_zincir.log`) | 22742ea1902d |
| kosu15 (`C:/atlas-kosu15/kosu15.log`) | 0e8e70490053 |

Hepsi farklı. Sonuç: bayrağın ÖLDÜRMEDİĞİ katmanlar da isabet almıyor.
Koşu 14 sonu önbellek özeti (`kosu_zincir.log:1801-1806`), isabet/sorgu:

| katman | isabet | ıska |
|---|---|---|
| col | 0 | 549 |
| kusat | 0 | 2.437 |
| dolgu | 8 | 1.912 |
| osm | 10 | 569 |
| sb | 7 | 572 |
| k1 | 0 | 4 |

Koşu 6'da aynı tablo (col 0/540 · dolgu 8/1.924 · kusat 0/2.482 …).

⇒ **Lego iki kilitle kapalı:** ① ortam (`MOTOR_PARALEL_KAPALI`) ② disiplin: motor kodu iki
koşu arasında dondurulmuyor. Bir yorum satırı değişikliği bile bütün önbelleği sıfırlar.

## 2. "Dönemler kuruluyor" aşaması (2s17dk, %13,3)
Önbelleği ZATEN VAR ve SIRALI yolda da ateşleniyor: `osm` (`uret_petek.py:7171-7181`,
Osmanlı doğrudan+tâbi gövdesi) ve `sb` (`:7263-7272`, serbest kenar).
Koşu 14 çapraz sayacı (`kosu_zincir.log:1850-1854`):

| iş | çağrı | süre | koşu payı |
|---|---|---|---|
| yabancı gövde geometrisi | 3.874 | 13s26dk | %78,2 |
| Osmanlı gövde geometrisi (`osm`) | 579 | 1s17dk | %7,5 |
| serbest kenar (`sb`) | 579 | 59dk | %5,8 |
| varlık devri (petek_epok) | 220 | 30dk | %3,0 |
| kuşatılmışlık | 1.931 | 12dk | %1,1 |

Aşamanın 2s17dk'sının ~2s16dk'sı önbellekli katmanlarda (osm + sb). Bu aşamayı yavaşlatan
bayrak DEĞİL, yalnız §1'deki tuz. Kod değişikliği gerektirmiyor.

## 3. Kazanç tavanı
Yabancı gövde (çağrı başına ~12,5 sn) + osm + sb ≈ koşunun **~%92'si** önbelleklenebilir
katmanlarda. Gerçek isabet oranı (değişikliğin yerelliği, Emre'nin "5 bölge, 3 zaman"ı) ancak
AYNI TUZLA İKİ ARDIŞIK koşuda ölçülür. Böyle bir koşu çifti hiç olmadı: **ölçülemedi**,
statik tahmin yazılmadı.

## 4. Öneriler (hüküm koordinatör/Emre'de)
- **Uyarı satırı** (M-5174 ⑤, yamayı MOTOR-LEGO-0925 yazar): `🧱 ÖNBELLEK: AÇIK` satırının
  yanına *"tuz geçen koşudan FARKLI ⇒ bu koşu isabet ALMAYACAK"*. Gerekçe: bugün "AÇIK"
  satırı iki ayrı sebeple yanıltıcıydı (bayrak + tuz). Uygulama: geçen koşunun tuzu önbellek
  sqlite'ına (ör. `meta` tablosu) yazılır, yeni koşu başta okuyup kıyaslar.
- **Politika** (Emre'ye taşındı): veri-yalnız koşularda motor kodu (4 tuz dosyası)
  dondurulur; kod değişiklikleri bir sonraki "tam inşa" koşusunda toplu girer.
- Daha uzun vadede (yalnız öneri): katman başına tuz (katmanın çağrı grafındaki kodun
  özeti). Yorum değişikliği ya da ilgisiz bir fonksiyon değişikliği her şeyi sıfırlamaz.
  Bit denkliği riski taşıdığı için ayrı iş.

## 5. Bit denkliği sınavı — ertelendi, sınav notu
M-5172 hükmünü görmeden 10:13'te küçük kutu sınavını (`denetim/ARAC-LEGO-0925-bit.py`)
başlattım. Bu bir ihlaldi ve bildirildi (M-5173). 6 koşunun hepsi ~13 sn'de kod 1 ile
düştü: **DEM kapısı**. Taze `git worktree`de git-dışı DEM dosyası yok, motor "eğimsiz koşu"
kapısında kendini öldürüyor (`D235`in sınav yüzü). Bellek yüklenmedi (en düşük boş RAM
2.325 MB), koşu 15'e dokunulmadı. Kilit ve `C:/atlas-lego` worktree'si temizlendi.
📌 Sınavı koşturacak oturuma: worktree'ye DEM kopyalanmalı. Yoksa `motor_esitlik.py kos`
da aynı yerde ölür.
Sürücünün tasarımı (S sıralı · P paralel · Y önbellek yazar · O önbellek okur · senaryo
açık/kapalı; sha256 kıyası, bellek bekçisi 700 MB) dosyanın başlığında.

## 6. Aletler
- `denetim/ARAC-LEGO-0925-say.py` — önbellek sqlite'ında katman başına satır sayısı (salt okur, `mode=ro`)
- `denetim/ARAC-LEGO-0925-bit.py` — bit denkliği + lego yerelliği sürücüsü (DEM kopyası eklenmeli)
- `denetim/ARAC-LEGO-0925-tahta.py` — bir adın tahta mesajlarını tam metin basar

## 7. Bulamadıklarım
Kalıcı değişkeni kimin yazdığı (M-5172 ⑧ gereği bırakıldı) · bit denkliği (ertelendi) ·
aynı tuzla iki ardışık koşunun isabet oranı (hiç olmadı).
