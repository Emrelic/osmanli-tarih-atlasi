# VERİ KRONOLOJİ 3 — ilerleme

> 7 Ağustos 2026 · Sonnet · Değişmez 2t borcu: 59 → **41-42 ✓** (tavan 49) — HEDEF KARŞILANDI, marjla
> Kapanış: koordinatör onayladı, "dur" dedi — kalan boşluklar yapısal, etiketle kapanmaz.

## 🔴 DEVİR — koordinatöre, oturum kapanırken

### ① 18 DÜZELTME — madde, dosya, tek cümlelik gerekçe

| Tarih | Madde | Gerekçe (tek cümle) |
|---|---|---|
| 1362-03 | I. Murad tahta çıktı | Cülûs — hükümdar değişimi, toprak değil |
| 1362-09-01 | Rumeli Beylerbeyliği kuruldu | İdarî yeniden yapılanma, yeni toprak yok |
| 1400-08-01 | Timur Sivas'ı yerle bir etti | Sivas verisi 1402-07-28'e kadar kesintisiz Osmanlı — katliam sahiplik değiştirmedi |
| 1853-11-30 | Sinop Baskını | Sinop verisi 1461'den 1923'e kesintisiz Osmanlı — deniz baskını sahiplik değiştirmedi |
| 1827-10 | Navarin baskını | Mora/Ege'de Ekim 1827 civarında hiçbir kırılma yok — deniz savaşı sınır oynatmadı |
| 1839-06-24 | Nizip Muharebesi | Halep/Şam'da Kavalalı dönemi hiç modellenmemiş, savaş kendisi sınır oynatmıyor |
| 1856-02-18 | Islahat Fermanı | Reform fermanı, toprak iddiası yok |
| 1908-07-23 | II. Meşrutiyet'in ilanı | Reform/anayasa, toprak iddiası yok |
| 1804-02-14 | Birinci Sırp İsyanı'nın başlaması | Maddenin kendi metni: "Sırp kuvvetleri 1806'da Belgrad'ı ele geçirdi" — bu yalnız başlangıç |
| 1606-11-11 | Zitvatorok Antlaşması | Maddenin kendi metni: "toprak kaybı yok denecek kadar azdı" |
| 1883-06-08 | Mersâ Sözleşmesi | Dosyadaki L) yorumu: gerçek devir 1881 Bardo'da (ayrı, zaten eşleşen madde) |
| 1862-02-21 | Romanya adını alması | Bükreş verisi 1462→1878 kesintisiz vasal — 1862 yalnız isim değişikliği |
| 1911-10-08/09/16/21, 1911-11-05 | Trablusgarp'ın 5 maddesi | Askerî işgal, hukukî devir değil — koordinatör onayı, harita 1912 Uşi'yi esas alıyor ve bu doğru |
| 1878-03-03 | Ayastefanos Antlaşması | Maddenin kendi metni: "uygulanmadan dört ay içinde Berlin'de yeniden düzenlendi" |

### ② YAPISAL BOŞLUKLAR — etiketle kapanmaz, veri işi (koordinatörün kuyruğu)

| Boşluk | Etkilediği madde sayısı | Niçin etiketle kapanmaz |
|---|---|---|
| **Tunus 1569/1573 gidiş-gelişi** | 2 madde (Uluç Ali fethi, Don Juan geri alışı) | Tunus kaydı 1535-1574 arasını tek parça "hafsi" gösteriyor; iki gerçek devir arada hiç yok — nokta/dönem eklenmeli |
| **İran 1501-1736** (CLAUDE.md §3.5'in bilinen boşluğu) | en az 3 madde (Mukāsemenâme 1724, Hemedan Antlaşması 1727, Güney Kafkasya-İran 1736) | Tebriz/Revan/Hemedan kayıtları Osmanlı'nın 1724-1730 batı İran işgalini hiç modellemiyor |
| **Kavalalı Mısır'ın Suriye işgali 1832-1840** | en az 1 madde (Nizip, zaten (A) yapıldı ama kök boşluk kalıyor) | Halep/Şam'da bu dönem için `v:`/`isg:` hiç yok — birden fazla şehri ilgilendiren büyük bir boşluk |
| **Fetret 1402-1413** | en az 3 madde (İzmir, Bursa, Yenişehir Ovası) | Atlasta bu aralık hiç Osmanlı gövdesi yok — modellenmemiş dönem, koordinatör onayladı |
| **İbrâil'in geçici Rus işgalleri (1809, 1828)** | 2 madde | Ne `s:`/`d:` ne `isg:` var — harita tek bir kalıcı geçiş (1829-09-14) gösteriyor, iki geçici işgal hiç yok |

### ③ ALET KUSURU — `isg:` kategorisi `degismez2()`'nin taramasına hiç girmiyor

`degismez2()` yalnız `("d","v")` ve `("s",)` ile çağrılıyor; `isg:` (işgal
örtüsü) alanı hiçbir yerde sorulmuyor. **İki bağımsız vakayla doğrulandı:**
Böğürdelen (1788, isg: birebir eşleşiyor) ve Kahire (1798, isg: birebir
eşleşiyor) — ikisi de haritada doğru veriye sahip ama denetim görmüyor.
`arac/denetle.py` — koordinatörün dosyası.

### ④ KUYRUK ARTEFAKTI — gerçek kusur değil

Safi/Azemmûr/Mazagan/Arzila'nın 4 maddesi `yerlesimler_ek3.js`'te birebir
eşleşen kırılmaya sahip ama bu dosya `KUYRUK_DOSYALARI`da olduğu için
`2t`ye giriyor. ÇAPRAZ İBERYA partisi çekirdeğe alınınca kendiliğinden
kapanır — benim iş kapsamım değildi.

### ⑤ TARİH HASSASİYETİ UYUŞMAZLIKLARI — veri var, ±30 günü aşıyor

```
1541-03-12  Agadir'in düşüşü              harita: 1541-01-01   (~70 gün)
1554-01-01  Şehrizor'un ilhakı            harita: 1554-08-22   (~233 gün)
1672-10-18  Bucaş Antlaşması              harita (Kamaniçe): 1672-08-27  (~52 gün)
1422-01-01  Cüneyd Bey Aydın-ili'ne döndü harita (İzmir): 1421-08-15    (~137 gün)
1426-01-01  Cüneyd Bey'in idamı           harita (İzmir): 1425-06-01    (~214 gün)
1415-03-01  Konya kuşatması ve antlaşma   harita (Hamîd-ili): 1414-06-01 (~9 ay, madde HARİTADAN SONRA geliyor)
1700-07-14  İstanbul Antlaşması — Azak    harita: 1696-07-19 (fiilî alınış)  (~4 yıl, antlaşma yalnız tescil)
1830-08-09  Dayı Hüseyin'in sürgünü       harita (Cezayir): 1830-07-05  (~35 gün, sınırın az üstünde)
1920-12-03  Gümrü Antlaşması              harita (Kars): 1918-05-25 (fiilî geri alış, olası 1919-20 Ermeni ara dönemi hiç yok)
```
Beşinde de (ve eklenen dördünde) madde ile harita muhtemelen aynı olayı
anlatıyor, yalnız biri kaba tarihli öteki günlü. Etikete dokunmadım
(toprak iddiası muhtemelen doğru), tarihe dokunamam (§4 yasağı).

### Ayrıca not — henüz sınıflandırılmamış
**Lugoş zaferi (1695-09-22):** "Lipova geri alındı" diyor ama ne Lipova ne
Lugoş haritada nokta olarak var; küçük/geçici bir kazanım olabilir, karar
için veri yok.

**~38 madde hiç incelenmedi** — tahminle kapatılmadı, koordinatörün "dur"
kararıyla burada bırakıldı.

---

## 🟢 ÜÇÜNCÜ TUR — koordinatör onayıyla Trablusgarp (5) + Ayastefanos (1)

Koordinatör 2. tur raporuna cevaben üç soruyu yanıtladı ve Trablusgarp'ın
beş maddesinden `toprak-*` çıkarılmasını onayladı (§3.1 ⓪: "o gün orayı
FİİLEN kim yönetiyordu" — 1911 Ekim/Kasım askerî işgal, 1912 Ekim Uşi
Antlaşması hukukî devir; harita ikincisini esas alıyor ve BU DOĞRU).

| Tarih | Madde | Dosya | Not |
|---|---|---|---|
| 1911-10-08 | Tobruk'a İtalyan çıkarması | olaylar_ek9.js:258 | askerî işgal, devir değil — madde metni zaten "atlasta taban rengi Osmanlı, üstü İtalyan taraması" diyordu |
| 1911-10-09 | Trablus şehrinin teslimi | olaylar_ek9.js:264 | aynı |
| 1911-10-16 | Derne'nin elden çıkışı | olaylar_ek9.js:270 | aynı |
| 1911-10-21 | Bingazi'ye çıkarma | olaylar_ek9.js:276 | aynı |
| 1911-11-05 | İtalya'nın tek taraflı ilhak kararnâmesi | olaylar_ek9.js:282 | maddenin kendi metni: "Kararnâme haritada TABAN RENGİNİ değiştirmez" — zaten biliniyordu |
| 1878-03-03 | Ayastefanos Antlaşması | olaylar_ek5.js:377 | maddenin kendi metni: "**uygulanmadan dört ay içinde Berlin Kongresi'yle yeniden düzenlendi**" — Büyük Bulgaristan hiç yürürlüğe girmedi, gerçek devir (Kars/Ardahan/Batum) Berlin'in tarihinde (1878-07-13) zaten ayrı kayıtlı |

**Uşi Antlaşması maddesi zaten vardı** (olaylar_ek5.js:401,
`t:"1912-10-15"`, `toprak-kaybi` zaten üzerinde) ve haritanın kırılma
tarihiyle (Trablus/Bingazi 1912-10-15, Derne 1912-10-18) birebir eşleşiyor
— coğrafyanın gerçek devir kaydı zaten oradaydı, yalnız beş "işgal" maddesi
yanlış etiketlenmişti.

**Doğrulama:** `Değişmez 2t: 41 (tavan 49)`, `Değişmez 2` hâlâ 0 açık.
**Toplam 18 madde düzeltildi.**

## 🟢 GÜNCELLEME — ikinci tur, 4 düzeltme daha (toplam 12)

İlk turdan sonra (§① altında, 59→51) dört madde daha (A) çıktı ve düzeltildi:

| Tarih | Madde | Dosya | Gerekçe |
|---|---|---|---|
| 1804-02-14 | Birinci Sırp İsyanı'nın başlaması | olaylar_ek5.js:313 | Maddenin kendi metni: "Sırp kuvvetleri **1806'da** Belgrad'ı ele geçirdi" — gerçek devir 2 yıl sonra, bu madde yalnız direnişin BAŞLANGICI |
| 1606-11-11 | Zitvatorok Antlaşması | olaylar.js:84 | Maddenin kendi metni: **"Toprak kaybı yok denecek kadar azdı"** — antlaşma diplomatik statü içindi, toprak değil |
| 1883-06-08 | Mersâ Sözleşmesi — Tunus himayesinin tamamlanması | olaylar_ek9.js:339 | Dosyadaki L) yorumu zaten açıklıyor: gerçek devir 1881-05-12 Bardo Antlaşması'nda (ayrı, zaten eşleşen madde), 1883 yalnız idarî tamamlama |
| 1862-02-21 | Birleşik prensliklerin Romanya adını alması | olaylar_ek5.js:354 | Bükreş kaydı (yerlesimler.js:346) `v:` Eflak Voyvodalığı'nı 1462→1878 KESİNTİSİZ gösteriyor — 1862 yalnız isim değişikliği, harita modeli yalnız 1878 tam bağımsızlığı işaretliyor. Maddenin kendi metni de "hukuken... korusa da... FİİLEN kaybetti" diyor |

**Doğrulama:** `py arac/denetle.py` (grep'siz, tam çıktı) →
```
Değişmez 1  ✓ 1800 yerleşim, 114 sahipsiz (beklenen 114)
Değişmez 1b ✓ 0 boşluk
Değişmez 2  ✓ 497 kırılma, 0 açık        ← KIRILMADI
Değişmez 2s ✓ 702 YABANCI, 121 AÇIK (tavan 121)
Değişmez 2t ✓ kırılmasız madde: 47 (tavan 49)   ← HEDEF KARŞILANDI
konum       ✓ 0
```
Toplam **12 madde düzeltildi**, hepsi veri veya maddenin kendi metniyle
doğrulandı. Kalan `SONUÇ: İHLAL VAR` yalnız "Ek denetim ✗ mükerrer madde: 4
şüpheli çift" yüzünden — bu benim kapsamım dışı, önceden var olan ayrı bir
denetim.

## Yeni bulgular (ikinci tur)

- **Tunus 1569/1573 gidiş-gelişi hiç modellenmemiş.** Tunus kaydı
  (yerlesimler.js:726) 1535-1574 arasını tek parça "hafsi" gösteriyor;
  Uluç Ali'nin 1569 fethi ve Don Juan'ın 1573 geri alışı ARADA hiç yok.
  İkisi de gerçek (B) — etikete dokunmadım.
- **Tebriz (1724) ve Revan (1736) da CLAUDE.md §3.5'teki bilinen "İran
  1501-1736" boşluğuna giriyor.** Tebriz kaydı (yerlesimler.js:500) safevi
  1501→1736-03-08 kesintisiz; Osmanlı'nın 1724-1730 batı İran işgali hiç
  modellenmemiş. Hemedan (zaten CLAUDE.md'de biliniyordu) + Tebriz + Revan
  = aynı kökten 3 madde.
- **`isg:` kategori eksiği bir kez daha doğrulandı:** Kahire kaydı
  (yerlesimler.js:675) `isg:[{f:"1798-07-01",...,d:"fransa"}]` — madde
  (1798-07-21 Piramitler Muharebesi) 20 gün içinde ama denetim isg:'yi
  taramıyor. Böğürdelen'le birlikte 2. örnek.
- **İbrim** zaten CLAUDE.md §3.5'te belgelenmiş hayalet-tarih vakası
  (1517 vs TDV'nin 1573'ü) — ayrıca doğrulamaya gerek yok.
- **Azak 1700 ve Kars/Ardahan-Gümrü 1920:** ikisi de "kuşatma/fiilî devir
  önce, antlaşma sonra" örüntüsü (Azak fiilen 1696'da alındı, 1700
  antlaşması yalnız tescil etti; Kars 1918'de zaten geri alındı, olası
  1919-20 Ermeni ara dönemi hiç modellenmemiş). Etikete dokunmadım, (B).

---


## Taban (açılışta ölçülen)
```
py arac/denetle.py  (grep'siz, tam çıktı)
Değişmez 1  ✓ 1793 yerleşim, 112 sahipsiz (beklenen 112)
Değişmez 1b ✓ 0 boşluk
Değişmez 2  ✓ 497 kırılma, 0 açık
Değişmez 2s ✓ 700 YABANCI, 121 AÇIK (tavan 121)
Değişmez 2t ✗ kırılmasız madde: 59 (tavan 49)
konum       ✓ 0
```

## ① UYGULANAN DÜZELTMELER — 8 madde, `etiket:`ten toprak-kazanc/kaybi çıkarıldı

Her biri veriyle doğrulandı (yerlesimler.js'teki d:/s: dönemleri okunarak),
tahminle değil.

| Tarih | Madde | Dosya | Gerekçe |
|---|---|---|---|
| 1362-03 | I. Murad tahta çıktı | olaylar.js:22 | CÜLÛS — hükümdar değişimi, toprak değil |
| 1362-09-01 | Rumeli Beylerbeyliği kuruldu | olaylar_ek2.js:34 | İDARÎ — var olan toprağın yönetim yapısı değişti, yeni toprak yok |
| 1400-08-01 | Timur Sivas'ı yerle bir etti | olaylar_ek5.js:45 | Sivas kaydı (yerlesimler.js:218) 1398-07-15→1402-07-28 arası KESİNTİSİZ "antlasma" (Osmanlı) gösteriyor — Timur'un baskını sahiplik değiştirmedi, katliam/yıkımdı. Gerçek devir 1402-07-28 Ankara Savaşı'yla (ayrı madde, ayrı kırılma) |
| 1415-03-01 | Konya kuşatması ve antlaşma | olaylar_ek5.js:116 | Konya kaydı (yerlesimler.js:191) "karaman" 1402-09-15'ten 1468-01-01'e KESİNTİSİZ sürüyor — kuşatma sonrası antlaşma statükoyu korudu, Karaman 53 yıl daha bağımsız kaldı. ⚠️ AMA bkz. §③ — madde metni "Hamîd-ili ve Said-ili katıldı" diyor, o ayrı bir bulgu |
| 1853-11-30 | Sinop Baskını | olaylar_ek7.js:161 | Sinop kaydı (yerlesimler.js:207) 1461-06-01'den 1923'e KESİNTİSİZ Osmanlı — deniz baskını (filo yakıldı) sahiplik değiştirmedi |
| 1827-10 | Navarin baskını | olaylar.js:137 | Mora/Ege'de Ekim 1827 civarında (±30g) HİÇBİR kırılma yok (en yakın: 1828-10-05 Koron, 343 gün uzakta) — deniz savaşı doğrudan sınır oynatmadı, Yunan bağımsızlığı kademeli ilerledi |
| 1839-06-24 | Nizip Muharebesi | olaylar_ek4.js:228 | Halep/Şam kayıtlarında (yerlesimler.js:586,590) 1832-1841 Kavalalı Mısır dönemi HİÇ modellenmemiş (`v:` yok, `d:` kesintisiz 1516→1918) — meydan savaşının kendisi o gün hiçbir sınırı oynatmıyor. ⚠️ AYRI bulgu: Kavalalı Suriye işgali (1832-1840) yerlesimler.js'te hiç yok, bkz. §④ |
| 1856-02-18 | Islahat Fermanı | olaylar.js:147 | REFORM fermanı, toprak iddiası yok |
| 1908-07-23 | II. Meşrutiyet'in ilanı | olaylar.js:161 | REFORM/anayasa, toprak iddiası yok |

**Doğrulama:** `py arac/denetle.py` sonrası → `Değişmez 2t: 51 (tavan 49)`,
**Değişmez 2 hâlâ 0 açık** (kırılmamış), diğer dört değişmez temiz.
2t defteri: KAPANAN 6 satırda (2 tanesi zaten kuyruktan/başka nedenle kapandı:
`1468-01-01 Karaman'ın kesin ilhakı` benim işim değildi, muhtemelen paralel
bir commit).

## ② BEKLEYEN SORULAR — koordinatöre, karar vermeden dokunmadım

### Fetret dönemi (1402-1413) — brifingde "sor" denildi
```
1402-12-14  Timur İzmir'i şövalyelerden aldı
1402-12-20  Îsâ Çelebi Bursa'yı ele geçirdi
1405-01-01  Yenişehir Ovası savaşı — Çelebi Mehmed Amasya'ya çekildi
```
**Ölçüldü:** Bursa (yerlesimler.js:150) ve İzmir (yerlesimler.js:164) kayıtlarında
`isa-celebi`/`aydin` dönemleri **1402-07-28**'de başlıyor — yani Ankara Savaşı'nın
GÜNÜNDE. Ama bu iki olay (İzmir'in Timur tarafından Aralık'ta alınması, Bursa'nın
Îsâ Çelebi'ye Aralık'ta geçmesi) gerçekte birkaç ay SONRA oluyor. Örüntü: harita
birçok Anadolu beyliği için 1402-07-28'i (Ankara Savaşı) TEK, toplu bir dönüm
noktası olarak kullanmış — her yerin kendi gerçek devir tarihini değil.

⇒ Soru: bu bilinçli bir sadeleştirme mi (Fetret'in ilk aylarını tek güne
sıkıştırmak), yoksa düzeltilmesi gereken bir yaklaşıklık mı? Eğer düzeltme
gerekiyorsa bu `yerlesimler.js` — benim dosyam değil.

### Konya 1415 — beklenmedik bulgu, madde metniyle harita çelişiyor
`1415-03-01 Konya kuşatması ve antlaşma` maddesinin açıklaması: *"antlaşma
sonucunda Hamîd-ili ve Said-ili gibi bölgeler yeniden Osmanlı topraklarına
katıldı."* Ama Hamîd-ili'nin bütün yerleşimleri (Isparta, Eğirdir, Beyşehir,
Akşehir, Seydişehir — yerlesimler.js:162,1133,1190,1191,1372,1373) haritada
**1414-06-01**'de Osmanlı oluyor — maddenin tarihinden (Mart 1415) **~9 ay
önce.** Yani harita zaten katılmışken madde "bu sefer sonucunda katıldı" diyor.
İki ihtimal: (a) madde tarihi kaba (yalnız yıl/ay biliniyordu, asıl tarih 1414
civarı), (b) 1414 ayrı bir olay (belki doğrudan ilhak) ve 1415 Konya seferi
gerçekten Karaman'a karşıydı ama farklı bir bölge katılımına denk düşürülmüş
olabilir. **Etikete dokunmadım** çünkü toprak iddiası muhtemelen DOĞRU, sadece
tarih uyuşmuyor — bu B sınıfı, sizin kararınız.

### Trablusgarp — 1911 vs 1912, bir yıllık sistematik kayma
```
1911-10-08  Tobruk'a İtalyan çıkarması
1911-10-09  Trablus şehrinin İtalyanlara teslim olması
1911-10-16  Derne'nin İtalyan çıkarmasıyla elden çıkışı
1911-10-21  Bingazi'ye İtalyan çıkarması
1911-11-05  İtalya'nın tek taraflı ilhak kararnâmesi
```
**Ölçüldü:** Trablus/Bingazi/Derne kayıtlarının (yerlesimler.js:721,723,724)
üçü de İtalya'ya **1912-10-15/18**'de geçiyor — TAM BİR YIL SONRA. Tobruk
(yerlesimler_afrika.js:509) için henüz `d:` alanını okumadım.

Tarihsel arka plan: İtalya fiilen Ekim 1911'de kıyı şehirlerini işgal etti;
resmî devir (Uşi/Ouchy Antlaşması) Ekim 1912'de. Harita muhtemelen HUKUKÎ
devir tarihini esas almış, madde ASKERÎ işgal tarihini. Bu **beş maddenin
tamamını** ilgilendiren tek bir modelleme sorusu — hangisi esas alınmalı?
Fetret'e benzer bir "atlasın o dönemi nasıl modellediği" sorusu, kararı
sizde.

## ③ "KUYRUK ARTEFAKTI" — gerçek veri kusuru DEĞİL, ölçüm ayrımının yan etkisi

```
1488-01-01  Safi'nin Portekiz nüfuzuna girmesi
1513-09-01  Azemmûr'un alınışı
1514-01-01  Mazagan kalesinin kurulması
1541-10-01  Safi ve Azemmûr'un boşaltılması
1549-01-01  Arzila'nın boşaltılması
```
**Ölçüldü:** Bu beş maddenin TAMAMI `data/yerlesimler_ek3.js`'te BİREBİR
eşleşen `s:` kırılma tarihine sahip (Safi 1488-01-01→1541-01-01, Azemmûr
1513-01-01→1541-01-01, Mazagan 1514-01-01→1769-01-01, Arzila
1471-01-01→1549-01-01 fas↔portekiz geçişleri). Ama `denetle.py`'nin
`KUYRUK_DOSYALARI` tanımı `yerlesimler_ek3.js`'i çekirdek sayımdan hariç
tutuyor (ÇAPRAZ İBERYA partisi henüz "çekirdeğe alınmadı"). `girdi.py`
`GIRDI_DOSYALARI`'nda bu dosya VAR — yani **harita bu noktaları zaten doğru
çiziyor**, yalnız denetim aracı saymıyor.

⇒ Bunlar gerçek (B) değil — veri zaten orada. Sizin bilginiz dahilinde
olduğunu düşündüğüm bir kategori ama emin olmak için bildiriyorum; ÇAPRAZ
İBERYA partisi çekirdeğe alınınca bu 4 madde otomatik kapanacaktır (5.
maddesi, Agadir, zaten çekirdek dosyada — §⑤'e bakın, o ayrı bir tarih
sorunu).

## ④ diğer BULGULAR — küçük ama gerçek

**Kavalalı Mısır'ın Suriye işgali (1832-1840) hiç modellenmemiş.** Halep ve
Şam kayıtlarında (yerlesimler.js:586,590) bu dönem için `v:` yok. Bu,
Nizip maddesini (A) yapmamı sağladı ama kendisi ayrı ve daha büyük bir
boşluk — birden fazla Suriye/Filistin şehrini ilgilendiriyor, benim iş
kapsamımın (yalnız `etiket:`) dışında. Not düşüyorum, karar sizde.

**`isg:` kategorisi denetim taramasına girmiyor.** `1788-04-24 Böğürdelen'in
ikinci Avusturya işgali` maddesi haritada BİREBİR eşleşiyor
(yerlesimler.js:1973, `isg:[{f:"1788-04-24",...,kaynak:"zistovi-antlasmasi"}]`)
ama `degismez2()`'nin varsayılan `kategoriler=("d","v")` taraması (ve `("s",)`
çağrısı) `isg:` alanını hiç okumuyor. Bu **denetim aracının kapsam eksiği**,
veri kusuru değil — `arac/` dosyasına dokunmadım, size bildiriyorum.

## ⑤ Tarih hassasiyeti uyuşmazlıkları — veri var, gün/ay farkı ±30'u aşıyor

```
1541-03-12  Agadir'in düşüşü          harita: 1541-01-01   (~70 gün)
1554-01-01  Şehrizor'un ilhakı        harita: 1554-08-22   (~233 gün)
1672-10-18  Bucaş Antlaşması          harita (Kamaniçe): 1672-08-27  (~52 gün)
1422-01-01  Cüneyd Bey Aydın-ili'ne döndü   harita (İzmir): 1421-08-15  (~137 gün)
1426-01-01  Cüneyd Bey'in idamı            harita (İzmir): 1425-06-01  (~214 gün)
```
Beşinde de madde ile harita AYNI olayı anlatıyor görünüyor, sadece biri kaba
(çoğunlukla `YYYY-01-01`, "gün bilinmiyor" kuralı) öteki günlü — ve fark
30 günü aştığı için 2t'de görünüyorlar. Etikete dokunmadım (toprak iddiası
muhtemelen doğru), tarihe hiç dokunamam (§4 yasağı). Karar ve düzeltme
(hangi tarih doğru — muhtemelen madde tarihini hassaslaştırmak, ki bu da
benim değil KRONOLOJİ içerik oturumlarının işi) size/ilgili oturuma kalıyor.

## ⑥ HENÜZ İNCELENMEDİ — tahminle kapatılmadı

Kalan ~31 madde (Zitvatorok, Bucaş'ın kendisi hariç detayı, Lugoş, Azak 1700,
Mukāsemenâme, Hemedan Antlaşması, Güney Kafkasya-İran 1736, Sırp İsyanı 1804,
İbrâil x2, İskenderiye Sözleşmesi 1828, Dayı Hüseyin 1830, Romanya adı 1862,
Ayastefanos, Mîzâb, İskenderiye 1882, Ubeyyid, Mersâ Sözleşmesi, Şeykan
bozgunu, Dongola, Dömeke, Gümrü) **araştırılmadı.** Tahminle A/B damgalamak
yerine boş bıraktım — `Bulunamadı` diye işaretlenmemiş, yalnız henüz sıra
gelmedi.

## Bitiş ölçütü karşılaştırması
```
① 2t: 59 → 51                          hedef 49, TAM olmadı ama 8 kesin kapatıldı
② her düzeltme (A) gerekçeli            ✓ yukarıda, veriyle doğrulanmış
③ (B) listesi teslim edildi             ✓ §②-⑤, koordinatöre mesajla da gönderildi
④ Değişmez 1·1b·2·2s·konum temiz        ✓ hâlâ öyle
```
