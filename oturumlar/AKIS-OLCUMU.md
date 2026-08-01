# AKIŞ ÖLÇÜMÜ — organizasyonun kendisi sayıldı

**Ölçen:** TAKİPÇİ (T) · **An:** 2026-07-31 15:11 · **Kapsam:** bugün (00:00–15:11)
**Yöntem:** yalnız DOSYA izleri — git zaman damgaları (`git log --format="%h %ci %s"`),
dosya mtime'ları (`stat -c "%y %n"`), uygulanma grep'leri. Mesaj/oturum içi beyan
kullanılmadı; K'nın beyanları ayrıca işaretlendi. **Tahmin yazılmadı; ölçülemeyen
"ölçemedim" diye yazıldı.**

---

## 1) OTURUM BOŞTA KALMA — ölçülen şey "dosya sessizliği"dir

⚠️ **Sınır:** oturumun "boştayım" dediği anı dosyalar taşımıyor; ölçülebilen,
organın sahip olduğu dosyaların **son değişme anı**. Çalışıp yazmayan oturum ile
boş oturum bu ölçüde ayırt edilemez. K'nın andığı saatler (YAMACI 07:32, BALKAN
07:35) oturum panelinden — **dosyadan doğrulayamadım.**

Komut: `stat -c "%y %n" oturumlar/*.md | sort -r` (an: 15:11)

| Organ | Son dosya izi | Sessizlik | Not |
|---|---|---|---|
| A3 (O14) | 15:02 `OTURUM-14-BATI-SAHRA.md` | 9 dk | aktif |
| A5 | 14:51 `ARABISTAN-DUZELTMELER.md` | 20 dk | aktif |
| COĞRAFYA | 14:49 `COGRAFYA-HATLAR.md` | 22 dk | aktif |
| T | 14:03 `TAKIPCI-ILERLEME.md` | (bu ölçüm) | — |
| KAYNAK | 13:42 `KAYNAK-DENETIMI.md` | 1 sa 29 dk | |
| D (O2) | 13:53 commit `fea52ad` (denetle_statu F) | 1 sa 18 dk | rapor mtime eski, iz commit'te |
| **A2 (O11)** | **10:33** `OTURUM-11-BALKAN.md` | **4 sa 38 dk** | teslimi bekleyen +15 yerleşimlik paketi var (aşağıda §4) |
| A4/O13 | 10:20 | 4 sa 51 dk | |
| U2 (O3) | 09:58 | 5 sa 13 dk | |
| U3 (O10) | 01:58 | 13 sa 13 dk | dün geceden beri iz yok |
| **YAMACI** | **HİÇ DOSYA İZİ YOK** | ölçülemez | `grep -ril yamaci oturumlar/` = 0. Tanımı "K'nın yükünü azaltmak" olan organın dosya sisteminde tek satır izi yok — K'nın "07:32'den beri boş" beyanı doğrulanamıyor ama İZ SIFIR olması kendi başına bulgu |

## 2) KİLİT ALTINDA GEÇEN SÜRE

Komut: `git log --format="%h %ci %s" -- data/donemler.js` + üretim dosyası mtime'ları.

**Ölçülebilen üretim uçları (donemler.js = koşu SONU):**

| Koşu | Bitiş kanıtı | Başlangıç | Süre |
|---|---|---|---|
| gece | commit `1b20355` **02:45** | ölçemedim (bolgeler.js damgası sonraki koşuyla ezilmiş) | — |
| öğlen | donemler.js mtime **13:57** → `a148161` 14:01 (r217 kara-kısıtlı Voronoi) | ölçemedim; commit akışındaki boşluk **10:37 → 13:05** kilit dönemini imliyor | ≤ ~2 sa 30 dk (üst sınır) |
| **üçüncü (!)** | **bitmemiş olabilir**: bolgeler.js **14:41** + devletler_harita.js **14:56**, ama donemler.js hâlâ 13:57 | 14:40 civarı | 15:11 itibarıyla **donemler yazılmamış** — ya koşu sürüyor ya `devletler_harita`'yı ayrı üretici yazdı (043eaa9 "vektör katmanı"). **Ayırt edemedim** |

K'nın "iki koşu ≈ 90 dk" beyanı ölçümle çelişmiyor ama başlangıç damgaları
olmadığından bağımsız doğrulanamadı. 📌 **Öneri (ölçüm altyapısı):** `uret_petek.py`
koşu BAŞINDA bir `data/.uretim-basladi` damgası bıraksın — kilit süresi ancak o
zaman gerçekten ölçülür; bugün yalnız bitişler ölçülebiliyor.

**Kilit sırasında "teslim edilmiş ama uygulanamamış" paketler** (teslim damgası
< 13:57 < uygulama):
A2/O11 Eflak kümesi (10:16) · A4/O13 raporları (10:20) · A5 blokları (sabah
teslim — bkz. §4 sınırı) · A3 11-48/49 araştırması (13:50). **≥ 4 organ**, K'nın
saydığıyla uyumlu.

## 3) MESAJ ÇAKIŞMASI — belgeli sayım

Tanım (K): iki taraf birbirinden habersiz karar verdi, biri geri çekildi = 1.
**Dosya kanıtıyla sayabildiklerim (bugün + dün gecesi):**

| # | Çakışma | Kanıt | Kaybedilen iş |
|---|---|---|---|
| 1 | 16-08: O4 "1806 maddesini sil" ↔ A5 "mükerrer değil, şehir iki kez düştü" | OTURUM-4-DUZELTMELER ↔ ARABISTAN §A.0 | bir hüküm iptal + KONTROL iki kez güncellendi |
| 2 | `isg:` şeması: K devir mesajında `y:` yazdı ↔ O14 `girdi.py`'den çürüttü | OTURUM-14-DUZELTMELER §0a | bir yazışma turu; yanlış şemayla uygulansaydı üretici okuyamayacaktı |
| 3 | Annaba/Bicâye: K "v: zaten 1830'da bitiyor" ↔ O14 ölçtü: dördü de anakronik | OTURUM-14-DUZELTMELER §16b | bir yazışma turu |
| 4 | Kırım kalibrasyonu: O16 32,5 ↔ O13 62,8 | dört düzeltme commit'i: `162b835` · `dc9d87f` · `e8f0649` · `df18f0d` | **en pahalısı** — dört commit'lik düzeltme zinciri + Kırım işi hâlâ bloke |
| 5 | `y:"vassal"` kaldırma: A5 önerdi ↔ D ölçtü (arayüz 🤝 çiziyor), A5 geri çekti | ARABISTAN §F.4 + K mesajı | bir öneri iptali; 11-34 satırı iki kez yazıldı |

**Belgeli toplam: 5.** K'nın saydığı `aiz` · `Sevâkin` · `Konya tarihi`
çakışmalarının dosya kanıtını **bulamadım** (aiz ve Sevâkin bende A5'in KENDİ
şüphe→çözüm döngüsü olarak görünüyor, iki taraflı çakışma değil; "Konya" hiçbir
raporda geçmiyor) — ya mesaj katmanında yaşandılar ya ben göremiyorum.
📌 K'nın teşhisi ölçümle uyuşuyor: beşinin beşi de **kararın dosyaya değil mesaja
yazıldığı** anlarda doğdu (`ORGANIZASYON Karar 2` ihlali — K'nın kendi tespiti).

## 4) KARAR → UYGULAMA GECİKMESİ

Komut: teslim = rapor commit'i/mtime; uygulama = veri commit'i; doğrulama = grep.

**Uygulanmış çiftler:**

| Hüküm | Teslim | Uygulama | Gecikme |
|---|---|---|---|
| Girit `v:` Mısır (O14 §16d) | `90d4d01` 02:03 | `732663b` **02:09** | **6 dk** — gece modu: hüküm ve uygulama art arda |
| A5 Yemen-Körfez blokları | ILERLEME beyanı 13:57 *(bölümler sabah yazıldı ama dosyada bölüm-zaman damgası YOK — sabah anını ölçemedim; K "≈4 saat" diyor, doğrulayamıyorum)* | `38fb595` 14:10 · `54346f2` 14:21 | kilit açılışından **13-24 dk** |
| Mısır 1882 `isg:` (O14 §1) | 30 Tem 22:30 (DUZELTMELER mtime sınıfı) | `fef4924` **14:27** | **~16 saat** |
| 3-10 hakem kararı → KONTROL işleme (T) | `6e42bbf` 13:53 | 14:02 (KONTROL mtime) | 9 dk |

**Teslim edilmiş, 15:11 itibarıyla UYGULANMAMIŞ (grep = 0):**

| Paket | Teslim | Bekleme | Grep kanıtı |
|---|---|---|---|
| O11 §15 Eflak 10 kaydı | `3bd7b12` 10:16 | **≥ 4 sa 55 dk** | `Krayova` yerlesimler'de 0 |
| O11 #31 Şumadya (Kragujevac·Çaçak) | `997c462` 02:51 | **≥ 12 sa 20 dk** | 0 |
| O11 #33 Şarkî Rumeli 4 kaydı | `997c462` 02:51 | ≥ 12 sa 20 dk | 0 |
| O11 #13-16 Kili/Akkirman/İnebahtı tarihleri | 02:51 | ≥ 12 sa | `1484-07-15` yerleşimlerde 0 (madde tarafı ek10'da VAR — **yarım uygulanmış**, Değişmez 2 riski) |
| O11 #3 Varna `g:2` | 30 Tem gece | ≥ 16 sa | Varna hâlâ `g:0` |
| `ek5` 1501-01-01 mükerrerinin silinmesi | `d2aeddc` 02:56 | ≥ 12 sa 15 dk | madde duruyor (ek5 satır ~98) |
| Napolyon `isg:` örtüsü (16-06) | `c7ce502` 09:56 "kesinleşti" | ≥ 5 sa 15 dk | `1798-07-01` yerleşimlerde 0 |
| Daân maddesi (U1) | 14:51 | 20 dk | 0 — taze, doğal |

**Karşılaştırma (sağlıklı ↔ bozuk):** aynı K, gece 02:03→02:09'da 6 dakikada
uyguladı; gündüz kuyruğunda Balkan paketi 5-12+ saattir bekliyor. Fark oturum
hızı değil **kuyruk düzeni**: bugün K önce A5+denetim+üretim dalgasını işledi,
Balkan dalgası hiç sıraya giremedi. Kilit 13:57'de kalktı ama Balkan yine
uygulanmadı — yani bugünkü darboğaz **kilit değil, tek elden uygulama kuyruğu.**

---

## ÖZET — dört sayının bugünkü değeri

```
1) dosya sessizliği     : A2 4:38 · A4 4:51 · U2 5:13 · U3 13:13 · YAMACI iz yok
2) kilit                : bitişler 02:45 ve 13:57; süreler ÖLÇÜLEMEZ (başlangıç
                          damgası yok — .uretim-basladi önerildi); kilitte ≥4 paket bekledi
3) mesaj çakışması      : belgeli 5 (en pahalı: Kırım, 4 düzeltme commit'i)
4) karar→uygulama       : uygulanan 6 dk – 16 sa; BEKLEYEN 8 paket, en eskisi ≥16 sa
                          (Varna g:2) · en riskli: Kili yarım uygulanmış durumda
```

**Kullanıcının sorusunun ölçülmüş cevabı:** hayır, maksimum hızda değiliz —
darboğaz üretim kilidi ya da oturum hızları değil, **K'nın tek elden uygulama
kuyruğu** (8 paket birikmiş) + kararların dosya yerine mesajla dağıtılması
(5 çakışma).

## SIKLIK ÖNERİSİ

Bu ölçümün maliyeti ~15 dk ve komutları hazır (`git log --format · stat · grep`).
**Günlük değil, DALGA SONU öneriyorum** (her uygulama dalgası kapandığında +
her üretim koşusundan sonra): günlük ölçüm çoğu gün aynı sayıyı verir, dalga
sonu ölçümü ise "bu dalgada ne birikti"yi yakalar. §4'ün "uygulanmamışlar"
tablosu ise **her K oturum açılışında** koşulmaya değer — üç grep, iki dakika,
ve Kili gibi yarım-uygulanmış riskleri anında gösteriyor.
