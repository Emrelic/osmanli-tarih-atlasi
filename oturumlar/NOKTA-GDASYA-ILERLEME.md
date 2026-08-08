# NOKTA GDASYA — ilerleme günlüğü

## AÇILIŞ

Açıldım, `oturumlar/NOKTA-GDASYA.md` şartnamesini okudum. `data/yerlesimler_gdasya.js` bende.

**İlk ölçüm (11 alt kutu, `girdi.yukle()` ile TÜM canlı külliyat üzerinden):**
```
Birmanya            12
Siyam                8
Kamboçya-Laos        4
Vietnam             14
Malaya               2
Sumatra             11
Java                 8
Borneo               2
Sulawesi             2
Filipinler           4
Moluk-Küçük Sunda    9
─────────────────────
TOPLAM               76
```

🔴 İki aksaklık bildirildi ve ikisi de koordinatör tarafından çözüldü:
1. Sayı farkı (97 vs 76) — koordinatör kabul etti, benim 76'm (11 sıkı alt kutu) taban alındı.
2. `data/yerlesimler_gdasya.js` `arac/girdi.py`nin `GIRDI_DOSYALARI`sına EKLİ DEĞİLDİ — kusur koordinatördeydi, kendi kuralını kendi ihlal etmişti. Koordinatör düzeltti: dosya açıldı, girdi.py 32→33, index.html bağlandı. Doğrulandı: `girdi.yukle()` artık dosyamı okuyor.

## KİMLİK ENVANTERİ — RENK 2'nin taraması + kendi doğrulamam

RENK 2, `devletler.js`teki `bolge:"guneydogu-asya"` alanını GERÇEKTEN tarayarak
**55 künye, 55'i renkli+künyeli** buldu (benim ilk 32 kontrolüm kümenin
~%40'ıydı — ders alındı, bundan sonra `bolge:` alanını tarayarak doğrulayacağım,
ezberimden değil). Kendi taramamla doğruladım: `node` ile `devletler.js`
`bolge==='guneydogu-asya'` filtresi → 55 kayıt, `py` ile `renkler.BOYALAR`
karşılaştırması → 55/55 renkli. Tam liste ve f/t tarihleri elimde, referans
olarak kullanıyorum.

**Düzeltilen 4 yanlış transliterasyon** (RENK 2'nin bulduğu, benim henüz
hatalı kullanmadığım ama not ettiğim): `aceh`→`ace-sultanligi`,
`gowa`→`gova-makassar`, `dai-viet`→hanedan-özel künye (le/mac/tran/ho/tay-son),
`pattani`→`malay-sultanliklari`. Hepsini doğru kullanıyorum.

## İKİ GERÇEK BOŞLUK — KARARLARIM VE GEREKÇEM

**① Trịnh Beyleri (Đàng Ngoài, Kuzey Vietnam 1558-1802) — künye yok.**
KARAR: **`le-hanedani`** kullanıyorum (Kuzey Vietnam/Hanoi noktalarında,
1558-1789 arası). GEREKÇE: Trịnh beyleri kendi hanedan adlarını hiç ilan
etmediler — hukuken taht boyunca Lê imparatorlarının adına, onların
"koruyucusu" sıfatıyla yönettiler (Nguyễn beyleri ise Güney'de 1802'de
kendi Nguyễn hanedanını KURDU, bu yüzden `nguyen-beyligi`→`nguyen-hanedani`
geçişi doğru). `le-hanedani`nin kendi künye ömrü (1428-1789) zaten bu
yorumla uyumlu — devletler.js bunu aynı şekilde tanımlamış. Ayrı bir
"Trịnh" künyesi İSTEMİYORUM, önerm iyorum da değil — le-hanedani yeterli
ve tutarlı.

**② Srivijaya 1281-1288 boşluğu (`srivijaya` künyesi yok, `palembang-sultanligi`
1288 sonrasını devralıyor).**
KARAR: Bu boşluk **atlas seviyesinde zaten kapalı** — `palembang-sultanligi`
künyesinin kendi `f` alanı **1281-01-01**, yani atlasın kendi başlangıç
tarihiyle BİREBİR aynı (gerçek tarihsel devir 1288'de olsa da). Bu,
`devletler.js`i yazan oturumun BİLEREK yaptığı bir seçim gibi görünüyor —
atlas zaten 1281'den başladığı için 1281-1288 arası Srivijaya'yı ayrıca
modellemeye gerek duymamışlar. Ben de Sumatra/Palembang bölgesi
noktalarımda **`palembang-sultanligi`yi 1281-01-01'den başlatıyorum**,
ayrı bir `srivijaya` kimliği YAZMIYORUM/istemiyorum.

## ALT BÖLGE RAPORLARI

### 🟢 BİRMANYA — TAMAMLANDI, 9 nokta

Kırılma günleri **sıfır borçla** tasarlandı — hepsi `yerlesimler_asya.js`teki
mevcut Myanmar noktalarından (Pagan/Toungoo/Ava/Prome/Pegu/Rangun) ÖLÇÜLEN,
zaten canlı veride var olan geçiş tarihleri. **Yeni gün AÇILMADI.**

```
Pathein (Bassein)   16.78,94.73   pagan→hanthawaddy→toungoo→hanthawaddy→konbaung→ingiliz-hindistani
Thaton               16.92,97.37   (aynı zincir, delta)
Bhamo                24.27,97.23   pagan→ava→toungoo→konbaung→ingiliz-hindistani (iç kesim zinciri)
Shwebo               22.57,95.70   ava→toungoo→konbaung(KURULUŞ YERİ, 1752)→ingiliz-hindistani
Taungdwingyi         20.01,95.40   iç kesim zinciri
Myingyan             21.46,95.38   iç kesim zinciri
Yenangyaung          20.47,94.87   iç kesim zinciri
Katha                24.19,96.33   iç kesim zinciri
Meiktila             20.87,95.86   iç kesim zinciri
```

**DOĞRULAMA** (`girdi.yukle()` TÜM canlı külliyat + `renkler.BOYALAR`):
```
yazılan nokta          : 9
3 km mükerrer           : 0
renksiz kimlik           : 0 (kullanılan 6 kimlik: pagan, hanthawaddy,
                          toungoo, ava, konbaung, ingiliz-hindistani —
                          hepsi 55'lik envanterde)
dönem sorunu (boşluk/    : 0
çakışma/ters/sıfır)
açılan YENİ kırılma günü : 0 — hepsi mevcut günlerin tekrar kullanımı
```

**Birmanya yoğunluk:** 12 → 21 nokta (bölgesel, bilgi amaçlı).
**Genel GDASYA yoğunluğu:** 76 → 85 nokta / 23,3 mn km² ⇒ **3,3 → 3,65**.

Devam ediyorum: Siyam.

### 🟢 SİYAM — TAMAMLANDI, 8 nokta

Kırılma günleri yine SIFIR BORÇLA — `yerlesimler_asya.js`teki mevcut
Ayutthaya/Sukhothai/Chiang Mai/Nakhon Si Thammarat noktalarından ölçülen
tarihler tekrar kullanıldı (1569-08-08/1584-05-03 Toungoo arası, 1774-01-15
Siyam'ın Lanna'yı geri alışı — hepsi zaten canlı veride).

```
Lopburi              14.80,100.62   sukhothai→ayutthaya→(1569 Toungoo arası)→ayutthaya→tonburi→siyam-chakri
Phitsanulok          16.82,100.26   aynı zincir
Nakhon Ratchasima    14.97,102.10   sukhothai→ayutthaya→tonburi→siyam-chakri
Songkhla              7.21,100.60   aynı zincir
Phuket (Thalang)      7.89, 98.40   aynı zincir
Chiang Rai           19.91, 99.83   lan-na→toungoo→konbaung→siyam-chakri (Chiang Mai'nin birebir aynısı)
Chanthaburi          12.61,102.10   sukhothai→ayutthaya→tonburi→siyam-chakri
Nan                  18.78,100.77   lan-na→toungoo→konbaung→siyam-chakri
```

DOĞRULAMA: yazılan 8, 3km mükerrer 0, renksiz kimlik 0, dönem sorunu 0,
açılan yeni kırılma günü 0. Toplam GDASYA: 85→93 nokta, yoğunluk 3,65→3,99.

Devam: Kamboçya-Laos.

## KOORDİNATÖR DÜZELTMELERİ — kabul edildi, işlendi

① Birmanya kabul edildi ("sıfır borç tasarlaman en değerli yan").
② `srivijaya` diye künye hiç yokmuş (koordinatör kendi kendine düzeltti) —
benim asıl kararım (`palembang-sultanligi` f=1281 zaten atlas başlangıcıyla
aynı, künyeyi izlemek doğru) TESADÜFEN değil GERÇEKTEN doğruymuş,
koordinatör ölçüp doğruladı.
③ 🔴 ÖNEMLİ DÜZELTME — Vietnam'a başlamadan ÖNCE geldi, henüz hiç Vietnam
noktası yazmamıştım: **1281-1428 arası Kuzey Vietnam `le-hanedani` DEĞİL.**
Doğru zincir: `tran-hanedani`(1225-1400) → `ho-hanedani`(1400-1407) →
**Ming Çin işgali (1407-1428, "Dördüncü Kuzey Egemenliği")** → `le-hanedani`
(1428-1789). Ming işgali için henüz kimlik kararı vermedim — `ming-hanedani`
kullanmayı düşünüyorum (Vietnam bu dönemde fiilen Ming eyaleti/Giao Chỉ
idi) ama YAZMADAN ÖNCE bunu ayrıca teyit edeceğim.
④ Bilgi notu alındı (palembang-sultanligi'nin 378 yıllık "battaniye" olması
— benim işim değil, ekstra iş çıkmadı).

## ALT BÖLGE RAPORLARI (devam)

### 🟢 KAMBOÇYA-LAOS — TAMAMLANDI, 6 nokta

```
Kratie          12.49,106.02   angkor-kmer→kamboc-kralligi→fransiz-cinhindi
Kampot          10.61,104.18   aynı zincir
Pursat          12.53,103.92   angkor-kmer→kamboc-kralligi→siyam-chakri(1795-1907, Battambang'ın
                                aynısı)→fransiz-cinhindi
Kompong Cham    12.00,105.46   angkor-kmer→kamboc-kralligi→fransiz-cinhindi
Xieng Khouang   19.45,103.15   lan-xang→laos-kralliklari→fransiz-cinhindi
Savannakhet     16.56,104.75   aynı Laos zinciri
```
Tarihler `yerlesimler_asya.js`teki Angkor/Battambang/Phnom Penh/Vientiane
noktalarından ölçüldü — sıfır borç.

DOĞRULAMA: yazılan 6, 3km mükerrer 0, renksiz kimlik 0, dönem sorunu 0,
açılan yeni kırılma günü 0. Toplam GDASYA: 93→99 nokta (23 GDASYA dosyasında,
Kamboçya-Laos bölgesel toplamı ayrı), yoğunluk 3,99→4,25.

Devam: Vietnam (③'teki Ming-işgali kimliğini teyit ederek).
