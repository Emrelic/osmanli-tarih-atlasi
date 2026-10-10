# KASA-SUSAN-1010 — ⓐ kovası (Mljet sınıfı): ilanın SUSTUĞU dilimlerde hata oranı — örneklem + doğrulama

Görev: YILDIRIM BAYEZIT (hüküm ④: "ⓐ'yı ilan taramasıyla bulamazsın … evren ilanın KAPSAMADIĞI aralıklar … tohumu ve tabaka
tanımını ölçümden ÖNCE dondur (D271)") · KASA · salt okuma.

## Evren (ölçüldü — `girdi`, @ 6294a232; birim DİLİM)
- **İlan deseni:** araştırılmadı · bulunamadı/bulunamadi · doğrulanamadı · kaynağı yok · komşu emsal. Kayıt `neden/not/kaynak`
  + dilim `kaynak` cümlelerinde aranır.
- **"Kapsanan" tanımı:** ilan cümlelerinde geçen bir 4 haneli yıl, dilimin [f, t] yılları içinde.
- Dilim: `s/d/v`; `isg` ve `__BOSLUK__` hariç; f < 1281 hariç.
- **S1 (ⓐ evreni):** ilanlı kayıtlarda, ilanın HİÇBİR yılının düşmediği dilimler ⇒ **2919 DİLİM / 988 KAYIT**.
- **S2 (kontrol):** HİÇ ilanı olmayan kayıtların dilimleri ⇒ **13.104 DİLİM / 3147 KAYIT**.
- Not: ilanlı kayıt sayısı 988 > ZAYIF42/BAYAT'taki 857. Bu tanım dilim `kaynak:` ilanlarını da sayıyor (orada yalnız
  kayıt düzeyi).

## Örneklem (DONDURULDU — tohum `random.Random(1010)`, karıştır, kayıt başına EN ÇOK 1 dilim, her tabakadan 15)
| # | kayıt | dosya | dilim | aralık | sahip |
|---|---|---|---|---|---|
| S1-01 | Solnok (Szolnok) | yerlesimler.js | s[2] | 1918-11-11 → 1923-10-29 | macaristan-naiplik |
| S1-02 | Mavinga | yerlesimler_afrika2.js | s[1] | 1902-01-01 → 1923-10-29 | portekiz |
| S1-03 | Kopal (Kapal) | yerlesimler_ortaasya3.js | s[4] | 1847-01-01 → 1917-03-15 | rusya |
| S1-04 | Sarâb | yerlesimler.js | s[3] | 1408-04-13 → 1468-04-01 | karakoyunlu |
| S1-05 | Kita | yerlesimler_afrika2.js | s[0] | 1881-01-01 → 1923-10-29 | fransa-cumhuriyet |
| S1-06 | Gbarnga | yerlesimler_afrika2.js | s[0] | 1822-04-25 → 1923-10-29 | liberya |
| S1-07 | Mattagami House | yerlesimler_kamerika.js | s[0] | 1794-01-01 → 1867-07-01 | ingiliz-kuzey-amerika |
| S1-08 | Meşkinşehr (Hiyav) | yerlesimler_kalite4.js | s[7] | 1747-06-20 → 1794-01-01 | zend |
| S1-09 | Makhalak’auri | yerlesimler_sinir_kuzey.js | d[0] | 1578-08-09 → 1878-03-03 | OSMANLI-d |
| S1-10 | Parras | yerlesimler_kamerika.js | s[0] | 1598-01-01 → 1821-09-27 | yeni-ispanya |
| S1-11 | Elmina (São Jorge da Mina) | yerlesimler_e9353f.js | s[1] | 1637-01-01 → 1872-01-01 | hollanda |
| S1-12 | Fort Confidence (Büyük Ayı Gölü) | yerlesimler_kamerika.js | s[0] | 1837-01-01 → 1867-07-01 | ingiliz-kuzey-amerika |
| S1-13 | Tengyue (Tengchong) | yerlesimler_a78_asya.js | s[9] | 1873-08-02 → 1912-02-12 | qing-hanedani |
| S1-14 | Karpuzlu (Yenikarpuzlu) | yerlesimler_sinir_kuzey.js | s[1] | 1402-07-28 → 1410-02-13 | suleyman-celebi |
| S1-15 | Huambo (Wambu) | yerlesimler_afrika2.js | s[0] | 1700-01-01 → 1902-01-01 | ovimbundu |
| S2-01 | Aral kuzeyi | yerlesimler_ortaasya2.js | s[4] | 1917-11-07 → 1923-10-29 | sovyet-rusya |
| S2-02 | Kerak | yerlesimler.js | d[0] | 1517-01-01 → 1918-01-01 | OSMANLI-d |
| S2-03 | Yüksekova (Gever) | yerlesimler_ek26.js | s[4] | 1920-04-23 → 1923-10-29 | tbmm-turkiye |
| S2-04 | Mitla | yerlesimler_amerika.js | s[2] | 1535-04-17 → 1821-09-27 | yeni-ispanya |
| S2-05 | Bodø | yerlesimler_ek8.js | s[1] | 1537-01-01 → 1814-01-14 | danimarka |
| S2-06 | Setúbal | yerlesimler_avrupa.js | s[1] | 1581-04-16 → 1640-12-01 | ispanya |
| S2-07 | Uçturfan (Uç Turfan) | yerlesimler_ortaasya3.js | s[1] | 1347-01-01 → 1514-01-01 | mogulistan |
| S2-08 | Maraş | yerlesimler.js | v[1] | 1832-07-29 → 1841-02-25 | misir-kavalali |
| S2-09 | Tralee | yerlesimler_avrupa.js | s[1] | 1603-03-30 → 1922-12-06 | ingiltere |
| S2-10 | Ûicu (Uiju) | yerlesimler_asya.js | s[0] | 1281-01-01 → 1392-07-17 | goryeo |
| S2-11 | Cerciş (Zarzis) | yerlesimler_afrika.js | v[1] | 1881-05-12 → 1923-10-29 | tunus-beyligi-fransiz |
| S2-12 | Forte Príncipe da Beira | yerlesimler_amerika3.js | s[1] | 1822-09-07 → 1889-11-15 | brezilya-imparatorlugu |
| S2-13 | Dir'iye (Necid) | yerlesimler.js | s[1] | 1824-06-01 → 1891-01-01 | suud-ikinci |
| S2-14 | Attock | yerlesimler_asya.js | s[3] | 1813-07-13 → 1849-03-29 | sih-imparatorlugu |
| S2-15 | Holmogorı | yerlesimler_h2_rusya.js | s[2] | 1547-01-16 → 1917-03-15 | rusya |

## Hata ölçütü (DONDURULDU)
- **DOĞRU:** kabul edilir, şehir (ya da bölge, beyanlı) adlı kaynak, sahibi dilim boyunca destekliyor. Uçlar hassasiyet
  payı içinde: `-01-01` uç = YIL payı; gün yazılmış uç = ±30 gün; `kesinlik` alanı varsa onun payı.
- **YANLIŞ-SAHİP:** kaynak dilimin ≥ 1 yılında başka sahip ya da statü gösteriyor (doğrudan↔tâbi dahil).
- **YANLIŞ-UÇ:** bir uç kaynağa göre payından fazla kayık (yıl uçta ≥ 1 yıl; gün uçta > 30 gün).
- **ÖLÇÜLEMEDİ:** kabul edilir tanık bulunamadı. Vikipedi yalnız ipucu.
- Kaynak öncelik: İslâm dünyası TDV; başka yerde akademik/resmî ansiklopedi (HE, HLS, Britannica imzalı, Iranica, LZMK,
  resmî kurum). Tanık birebir alıntı + URL.

## 0. ÖNGÖRÜ (doğrulamadan ÖNCE — ayrı commit)
- **S1 YANLIŞ (sahip + uç): 4 ± 3 / 15.** S2 YANLIŞ: **3 ± 2 / 15**.
- ÖLÇÜLEMEDİ her tabakada **3 ± 2** (Afrika / Kuzey Amerika iç noktaları ağır).
- **S1 − S2 ≥ 2** (ilanın sustuğu yer kontrolden belirgin riskli): **%35**. n = 15 iki tabakayı ayırt etmeye
  yetmeyebilir ⇒ "ayırt edilemedi" **%60**.
- YANLIŞ'ların çoğu UÇ (sahip değil): **%65**.

## 1. ÖLÇÜM (30 DİLİM, kör doğrulama: üç okuyucu tabakayı BİLMEDEN; G-numarası karıştırılmış, tohum 7)
Okuyucular: `scratchpad/susan_sonuc1..3.md` (birebir alıntı + URL).
**KENDİM doğruladım (TDV, curl birebir):** Suûdîler (G11) · Kahramanmaraş (G12) · Kerek (G19) · Zendler (G05) · Süleyman
Çelebi (G09) · Acara (G10) · Karakoyunlular (G23). TDV dışı tanıklar (Encykorea, UNAM, DCB, Tengchong kültür bürosu,
Coahuila, SNL, Brockhaus) okuyucudan.

### 1.1 Yargı kuralları (atlas semantiği — üçüncü partiyi görmeden önce yazıldı, okuyucuların genel okumasını düzeltir)
- **R1:** aynı künye içinde rejim değişimi sahip hatası DEĞİL. Portekiz Krallığı → Cumhuriyet: `portekiz` 1097-1945 ·
  ACS kolonisi → Liberya Cumhuriyeti: `liberya` künyesi 1822-04-25'ten.
- **R2:** Osmanlı DIŞI metbûluk/himaye sahip hatası DEĞİL — atlas onu `not:` ile yazar, `v:` yalnız Osmanlı'ya göre.
  Cihan Şah ↔ Şâhruh · Pencap ↔ İngiliz himayesi 1846-49.
- **R3:** zeâmet/timar tutan yerel aile `v` DEĞİL (tahrir ölçütü, koordinatör hükmü). Kerek'in Mecâlî zaîmliği.
- ⑥ işaretliler yoruma açık (gerekçe tabloda).

### 1.2 Sonuç tablosu (DONDURULMUŞ ölçüt)
| # | kayıt · dilim | yargı | tanık / gerekçe |
|---|---|---|---|
| S1-01 | Solnok · macaristan-naiplik 1918-11 → 1923 | DOĞRU | MNL: Romen işgali 1919 < 1 yıl (isg) |
| S1-02 | Mavinga · portekiz 1902 → 1923 | ÖLÇÜLEMEDİ (R1) | Mavinga'ya özgü 1902 tanığı yok |
| S1-03 | Kopal · rusya 1847 → 1917 | DOĞRU | SDU Bülteni 2020: kale 1847 (⚠️ başka makale 1845) |
| S1-04 | Sarâb · karakoyunlu 1408-04-13 → 1468-04-01 | **YANLIŞ-UÇ** | TDV Karakoyunlular *"Zilhicce 872 / Temmuz 1468"* — t ~3 ay erken; başı birebir (Serdrûd 13 Nisan 1408). Cihan Şah'ın Şâhruh'a tâbiliği R2 |
| S1-05 | Kita · fransa 1881 → 1923 | DOĞRU | Gallieni 1885: 1880 antlaşması, 1881 kale |
| S1-06 | Gbarnga · liberya 1822 → 1923 | DOĞRU (R1) | — |
| S1-07 | Mattagami House · ingiliz-k-amerika 1794 → 1867 | ÖLÇÜLEMEDİ | kaynaklar 404; ⚠️ koordinat Mattagami Gölü ile uyuşmuyor (49,7 ↔ ~47,9) |
| S1-08 | Meşkinşehr · zend 1747-06-20 → 1794 | **YANLIŞ-SAHİP** | TDV Zendler *"Kerim Han, 1751 yılının ilk aylarında … yönetimi ele alarak"* · künye `zend` f **1751**-01-01 ⇒ dilim künyeyi 4 yıl ÖNCE başlatıyor |
| S1-09 | Makhalak'auri · `d` 1578-08-09 → 1878 | **YANLIŞ-UÇ** ⑥ | TDV Acara *"Acara'nın fethi 1535'te gerçekleşti"* · 1568-74 Erzurum sancak listesinde — f ~43 yıl geç (bölge hükmü; okuyucu: "bir ara Gürcüler'in eline geçti", süre yok) |
| S1-10 | Parras · yeni-ispanya 1598 → 1821-09-27 | **YANLIŞ-UÇ** ⑥ | Coahuila'da Arredondo 3 Temmuz 1821'de bağımsızlık ilan etti — t ~85 gün geç (künye ucu ödünç) |
| S1-11 | Elmina · hollanda 1637 → 1872 | DOĞRU | Atlas of Mutual Heritage *"1637-1872"* |
| S1-12 | Fort Confidence · ingiliz-k-amerika 1837 → 1867-07-01 | **YANLIŞ-UÇ** | Canadian Encyclopedia: Rupert's Land/NWT Kanada'ya **15 Temmuz 1870** — t 3 yıl erken |
| S1-13 | Tengyue · qing 1873 → 1912-02-12 | **YANLIŞ-UÇ** | Tengchong kültür bürosu: ayaklanma **27 Ekim 1911** — t 3,5 ay geç (künye ucu ödünç) |
| S1-14 | Karpuzlu · süleyman-çelebi 1402-07-28 → 1410-02-13 | **YANLIŞ-UÇ** | TDV *"13 Şubat 1410'da Yanbolu'da yenilmesine rağmen daha sonra Mûsâ'yı Haziran 1410 tarihine kadar iki defa yenilgiye uğrattı … (17 Şubat 1411) Edirne'ye âni bir"* — t ~1 yıl erken |
| S1-15 | Huambo · ovimbundu 1700 → 1902 | **YANLIŞ-SAHİP** (bölge) | Skoggard: Portekiz 1890 Bié, 1896 Mbailundu — Wambu'ya özgü gün yok |
| S2-01 | Aral kuzeyi · sovyet 1917-11 → 1923 | ÖLÇÜLEMEDİ | Alaş Orda Turgay şubesi 1920'ye dek; nokta oblastı belirsiz |
| S2-02 | Kerak · `d` 1517 → 1918 | **YANLIŞ-SAHİP** | TDV Kerek *"İbrâhim Paşa kaleyi ele geçirince … (1834)"* — Mısır dönemi (1831/34-1840) yok; komşu Suriye kayıtlarının `v misir-kavalali` dilimi Kerek'te eksik. Zaîmlik R3 |
| S2-03 | Yüksekova · tbmm 1920 → 1923 | DOĞRU | TÜBA (Selvi) |
| S2-04 | Mitla · yeni-ispanya 1535 → 1821 | **YANLIŞ-SAHİP** ⑥ | UNAM (Ibarra): Morelos isyancıları Oaxaca'yı 25.11.1812 → 03.1814 tuttu (bölge; iç isyan — künyesiz güç ⇒ yoruma açık) |
| S2-05 | Bodø · danimarka 1537 → 1814 | DOĞRU | SNL |
| S2-06 | Setúbal · ispanya 1581 → 1640 | DOĞRU | Rev. Port. de História + Savunma Bak. (şahsi birlik ⇒ künye seçimi) |
| S2-07 | Uçturfan · moğulistan 1347 → 1514 | ÖLÇÜLEMEDİ | TDV şehri anmıyor |
| S2-08 | Maraş · `v` misir-kavalali 1832-07-29 → 1841-02-25 | **YANLIŞ-UÇ** ⑥ | TDV Kahramanmaraş *"Maraş 1833'te Kavalalı İbrâhim Paşa'nın işgaline uğradı ve on dokuz aya yakın onun idaresinde kaldı"* ↔ veri ~8,5 yıl (Kütahya/Londra ölçüsü). TDV birincil ⇒ çelişki yazılır |
| S2-09 | Tralee · ingiltere 1603 → 1922 | ÖLÇÜLEMEDİ | DIB/Britannica 403 (ipucu: Konfederasyon 1642-53) |
| S2-10 | Ûicu · goryeo 1281 → 1392 | **YANLIŞ-SAHİP** | Encykorea: Yuan'ın Dongnyeong-bu'su 1269-1290 ⇒ 1281-1290 Goryeo değil |
| S2-11 | Cerciş · `v` tunus 1881 → 1923 | ÖLÇÜLEMEDİ | t (1923-10-29 ↔ Lozan) tanıksız |
| S2-12 | Forte Príncipe da Beira · brezilya 1822 → 1889 | ÖLÇÜLEMEDİ | ipucu: Mato Grosso'ya haber Ocak 1823 |
| S2-13 | Dir'iye · suud-ikinci 1824 → 1891 | **YANLIŞ-SAHİP** | TDV Suûdîler *"Faysal b. Türkî'yi yakalayıp Mısır'a sevketti (1837); yerine … Hâlid b. Suûd'u gönderdi. 1840'ta Londra protokolüyle Mısır kuvvetlerinin Necid … çekilmesi"* — Mısır işgali (isg) eksik |
| S2-14 | Attock · sih 1813 → 1849 | DOĞRU (R2) | İngiliz himayesi 1846-49 = not: |
| S2-15 | Holmogorı · rusya 1547 → 1917 | DOĞRU | Brockhaus-Efron |

### 1.3 Sayım (birim DİLİM)
```
             DOĞRU  YANLIŞ-SAHİP  YANLIŞ-UÇ  ÖLÇÜLEMEDİ   YANLIŞ / ölçülen
S1 (ⓐ)        5         2            6          2        8 / 13 = %62
S2 (kontrol)  5         4            1          5        5 / 10 = %50
toplam       10         6            7          7       13 / 23 = %57   (⑥ yoruma açıklar çıkarılırsa 9/19 = %47)
```
- S1 − S2 farkı (%62 ↔ %50, n 13 / 10): **AYIRT EDİLEMEDİ.** Fisher tek yönlü p ≈ 0,4 (kaba) ⇒ "ilanın sustuğu yer
  daha riskli" ne doğrulandı ne çürütüldü.
- 🔴 **Asıl bulgu — tabanın kendisi:** dondurulmuş ölçütle (±30 gün / yıl) rastgele bir dilimin yaklaşık **yarısı** bir
  yerinden kusurlu. ⑥'lar çıkınca bile %47. Hata ilanlı-ilansız ayrımına bağlı değil, ATLAS GENELİNDE.
- **Hata deseni (UÇ'ların çoğu):** **ÖDÜNÇ UÇ** — dilim ucu, sahibin KÜNYE ucundan (devlet düzeyi olaydan) alınmış; yerel
  olay farklı gün.
  - Tengyue → Qing künye sonu 1912-02-12 (yerel 1911-10-27).
  - Parras → Yeni İspanya künye sonu 1821-09-27 (Coahuila 1821-07-03).
  - Fort Confidence → 1867 Konfederasyonu (Rupert's Land 1870).
  - Meşkinşehr → 1747 Nâdir'in ölümü (Zend künyesi 1751).
  - Cizre ölçümündeki 1515-09-19 (Âmid'in günü) ve 1502-03-01 (çekirdek madde) ile **AYNI SINIF**: gün başka bir yerden
    / başka bir düzeyden geliyor.
  - ⇒ Mekanik aday: ucu, sahibinin künye `f/t`'sine EŞİT olan dilimler. Kendisi hata değil ama YEREL tanığı yoksa ödünç.
- **Sahip hatalarının deseni:** EKSİK ARA DÖNEM — Mısır 1831-40 (Kerek, Dir'iye), Yuan 1269-90 (Ûicu), Zend öncesi
  anarşi (Meşkinşehr). Uçsuz-işgal / atlanmış-ara sınıfı.

## 2. Öngörü ↔ ölçüm
```
S1 YANLIŞ 4 ± 3 / 15     ✗ 8 (üst sınır 7)
S2 YANLIŞ 3 ± 2 / 15     ✓ 5 (sınırda)
ÖLÇÜLEMEDİ 3 ± 2 her biri ✓ S1 2 · S2 5 (sınırda)
S1 − S2 ≥ 2  %35          ham 8−5 = 3 ✓, ama oranlar ayırt edilemiyor ⇒ "ayırt edilemedi" %60 ✓
YANLIŞ'ın çoğu UÇ %65     ✗ 7/13 = %54 (S1'de UÇ, S2'de SAHİP ağır)
```
**Ders:** taban hata oranını ~%20 sandım; ölçüldü ~%50. Öngörüm "ilanlı kayıtların sustuğu yer riskli" çerçevesine
odaklıydı ve kontrolün de bu kadar kusurlu olabileceğini fiyatlamadı. Kontrol tabakası olmasaydı S1'in %62'si "ilanın
sustuğu yer çok riskli" diye okunacaktı. Kontrol, bulguyu "atlas genelinde yüksek hata" diye düzeltti.
