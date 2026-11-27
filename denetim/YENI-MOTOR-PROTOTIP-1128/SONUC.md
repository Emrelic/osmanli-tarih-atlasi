# YENİ MOTOR PROTOTİPİ — SONUÇ (28 Kasım 2026, EMRELİC)

İş tanımı: `denetim/KOSU-SORUSTURMA-1127/DEVIR-YENI-MOTOR-PROTOTIP-1127.md` (dal `motor-b-dolgu-yerel-1127`).
Kurallar: aynı klasörde `YENI-MOTOR-KURALLARI-TASLAK-1127.md` (K1–K13).
Ölçüm: makine EMRELİC, ağaç `origin/main` `9b61452fe` üstünde açılmış worktree, dal `yeni-motor-prototip-1128`.

**Bu üretim kodu değildir.** Soru tek: 13 kural doğru haritayı veriyor mu? Karar Emre'nin gözünde.

## Bu klasörde ne var

| Dosya | Ne |
|---|---|
| `prototip.py` | Tek betik. `py denetim/YENI-MOTOR-PROTOTIP-1128/prototip.py` altı senaryoyu koşturur; `--sinama` kural sınamasını çizer. |
| `<kutu>-<gün>-eski-yeni.png` (6 adet) | Solda yayındaki harita, sağda yeni harita. |
| `<kutu>-<gün>-katman.png` (6 adet) | Yeni haritada hangi toprak hangi kuraldan geldi: çekirdek / şerit / deniz şeridi / delik. |
| `sinama-kurallar.png` | Gerçek yerleşim yok; çöle elle konmuş 7 uydurma kaynakla kuralların sınaması. |
| `olcum.json`, `sinama-olcum.json` | Aşağıdaki sayıların ham hâli. |

Eski haritayı açmak için (betik ister): `py arac/kodla.py coz-c data data/devletler_harita.js` ve
`py arac/kodla.py coz-c data data/donemler.js donem`.

## ① Ne ölçtüm

**Eğim VAR.** Yükseklik verisi bu makinede bulundu (`C:\atlas\veri-kaynak\yukseklik\etopo2022_30s_dunya.tif`);
hesap eğimli yapıldı (çarpan 0,005; sürtünme medyanı Anadolu kutusunda 1,095, Mısır kutusunda 1,111).

**Kural sınaması** (`sinama-kurallar.png`) — dört beklenti, dördü de tuttu:

| Sahne | Ölçülen | Beklenen | Sonuç |
|---|---|---|---|
| A–B, iki ayrı devlet, arası 14,9 gün | iki 5 günlük daire tam şeritle birleşti, sınır ortadan geçti | şerit olmalı | tuttu |
| C–D, arası 30,2 gün | ikisi de 5 günde kaldı, ortası boş | şerit olmamalı | tuttu |
| E, yalnız, denize 8,1 gün | denize dil çıkmadı | dil olmamalı | tuttu |
| F ve G, komşu, denize 7,0 ve 6,6 gün | ikisinden denize şerit çıktı | deniz şeridi olmalı | tuttu |

**Boyalı alan** (kutu içi, kara hücreleri, 0,05° ızgara; yüzde = kutudaki karanın payı):

| Kutu | Gün | Eski km² | Yeni km² | Eski | Yeni |
|---|---|---|---|---|---|
| Anadolu–Balkanlar (kara 2.602.123 km²) | 1300-06-15 | 2.554.477 | 2.590.389 | %98,2 | %99,5 |
| | 1550-06-15 | 2.537.336 | 2.577.685 | %97,5 | %99,1 |
| | 1760-03-11 | 2.569.330 | 2.599.833 | %98,7 | %99,9 |
| Mısır–Arabistan (kara 7.631.236 km²) | 1300-06-15 | 4.996.440 | 6.348.836 | %65,5 | %83,2 |
| | 1550-06-15 | 4.951.759 | 6.184.604 | %64,9 | %81,0 |
| | 1760-03-11 | 5.433.397 | 6.910.311 | %71,2 | %90,6 |

**Yeni haritada toprak hangi kuraldan geldi** (km²):

| Kutu · gün | Çekirdek (K6) | Şerit (K7) | Deniz şeridi (K8) | Delik (K9) | Boyamayan kaynağın toprağı | Kıyı cebi (boyanmadı) |
|---|---|---|---|---|---|---|
| Anadolu 1300 | 2.576.124 | 14.144 | 75 | 46 | 9.444 | 504 |
| Anadolu 1550 | 2.563.420 | 14.144 | 75 | 46 | 22.148 | 643 |
| Anadolu 1760 | 2.586.449 | 13.263 | 75 | 46 | 0 | 643 |
| Mısır 1300 | 4.943.954 | 1.363.856 | 32.951 | 8.075 | 452.280 | 1.839 |
| Mısır 1550 | 4.932.339 | 1.202.874 | 40.209 | 9.182 | 466.618 | 1.720 |
| Mısır 1760 | 5.386.085 | 1.470.434 | 39.799 | 13.993 | 130.311 | 1.140 |

Okuması: Anadolu–Balkanlar'da yerleşim o kadar sık ki toprağın %99'u zaten çekirdektir; şerit, deniz ve delik
kuralları orada neredeyse hiç iş görmüyor. Çöl kutusunda ise yeni toprağın tamamına yakını şeritten geliyor
(1,2–1,5 milyon km²).

**En çok değişen devletler** (yeni − eski, km²; tam liste `olcum.json`):

- Anadolu 1300: Memlûk +13.523 · İlhanlı +12.533 · Altın Orda +8.923 · Macaristan +7.999 · Gürcistan −3.445 ·
  Sırbistan −3.243 · Trabzon +2.317 · Ahaya −2.127. (Bosna iki satırda görünüyor, −39.166 ve +33.536: eski koşudan
  bu yana künye kimliği değişmiş; kural farkı değil, veri farkı.)
- Anadolu 1550: Osmanlı +29.436 · Osmanlı tâbi −9.355 · Kabartay +8.936 · Kartli +3.667 · Gürcistan +2.114 ·
  Nogay +1.137 · Erdel +1.130 · Safevî +985 · Macaristan +822 · Venedik +756.
- Anadolu 1760: Osmanlı +20.706 · Kartli +3.667 · Rusya +1.722 · Zaporojye −1.659 · Megrelya +1.568 ·
  Macaristan +1.038 · Afşâr +1.029 · Osmanlı tâbi +1.004 · Revan +690 · Napoli +491.
- Mısır 1300: Memlûk +384.693 · Nebhânîler +217.072 · Nûbe +199.861 · İlhanlı +189.281 · Zeydî +117.269 ·
  Resûlîler +89.182 · Usfûrîler +74.992 · Dâcû +49.079 · Habeşistan +21.042 · Kutluğhanlılar +10.325.
- Mısır 1550: Osmanlı +475.513 · Func +199.861 · Osmanlı tâbi +180.308 · Kesîrî +82.456 (eskide 0) ·
  Nebhânîler +77.528 · Habeşistan +55.581 · Zeydî +52.493 · Safevî +52.076 · Tunciler +49.079 · Adal +7.331.
- Mısır 1760: Osmanlı +375.981 · Umman +206.113 · Func +199.861 · Kesîrî +146.312 · Osmanlı tâbi +130.315 ·
  I. Suûdî +124.905 · Benî Hâlid +96.931 · Zeydî +57.768 · Zend +53.650 · Dârfûr +49.079.

**Kaynak sayıları** (hesap penceresinde, yani kutu + her yöne 8°):

| Kutu · gün | Boyayan kaynak | bunların k:4'ü | Boyamayan kaynak | Sahnede olmayan | Veri borcu |
|---|---|---|---|---|---|
| Anadolu 1300 | 1.238 | 492 | 28 | 571 | 0 |
| Anadolu 1550 | 1.322 | 518 | 18 | 497 | 0 |
| Anadolu 1760 | 1.386 | 541 | 4 | 447 | 0 |
| Mısır 1300 | 931 | 425 | 78 | 498 | 0 |
| Mısır 1550 | 1.020 | 443 | 25 | 462 | 0 |
| Mısır 1760 | 1.071 | 454 | 4 | 432 | 0 |

- "Veri borcu" (sahnede ama sahibi o gün bilinmeyen yer) bu altı senaryoda **sıfır**: sahnedeki her yerin ya bir
  devleti ya da `__BOSLUK__` dönemi var.
- Komşu kaynak çiftleri: Anadolu'da 3.048–3.372 çiftin yalnız 2'si 20 günden uzak; Mısır'da 2.428–2.582 çiftin
  30–32'si 20 günden uzak.
- Deniz kuralı: denize 10 gün içindeki kaynakların 62–82'si komşusuz olduğu için şerit almadı
  (Anadolu 76 / 81 / 82, Mısır 62 / 67 / 67).
- Delik kuralı: Anadolu'da 4–5, Mısır'da 12–16 delik doldu.
- Antlaşma hattı: 1300 ve 1550'de iki kutuda da o gün geçerli hat **yok**; 1760'ta tek hat var
  (`d1751-osm-zend-kerden`, Osmanlı–Zend, 528 geçilmez adım). Yeni sınır bu hattın tam üstüne oturdu;
  eski haritada hattan taşan parçalar var (resimde Van'ın doğusu).

**Süre ve bellek:** altı senaryo toplam **123 saniye** (statik katman ve eski harita önbellekteyken); senaryo
başına 17–24 sn (hesabın kendisi 10–13 sn, bunun 0,3–0,7 saniyesi ana yürüyüş, kalanı şeritler; gerisi çizim).
Tepe bellek 651 MB. Önbelleksiz ilk koşuda ek olarak: statik katman (kara, eğim, nehir, boğaz yasağı) kutu başına
12 sn, eski haritanın okunması 6 sn ve tepe bellek 2.112 MB; eski haritayı paketten açmak (`kodla.py coz-c`) 105 sn.

**Sınırın nehre oturması (açık konu b) — sayıyla:** farklı devletli komşu hücre çiftlerinin kaçı bir nehri kesiyor?

| Kutu · gün | Eski | Yeni |
|---|---|---|
| Anadolu 1300 | 1.225 / 10.444 = %11,7 | 1.270 / 10.146 = %12,5 |
| Anadolu 1550 | 796 / 6.193 = %12,9 | 868 / 6.355 = %13,7 |
| Anadolu 1760 | 944 / 6.460 = %14,6 | 1.080 / 6.354 = %17,0 |

Yani eski "yaslama" olmadan da sınırın nehir üstünde kalan payı düşmedi, biraz arttı. Sınırı: bu ölçüm 5 km'lik
hücreyle yapıldı; eski haritanın nehri yüz metre hassasiyetle izleyip izlemediğini bu sayı göstermez.

## Açık konuların cevabı (resimden)

**(a) Şeritlerin birleşimi ortada boşluk ya da dar dil bırakıyor mu?** Sık yerleşimde hayır. Çölde üç tür artık kalıyor:
① üç şeridin ortasında kalan üçgen boşluklar — tek devletle çevriliyse delik kuralı kapatıyor (Mısır 1550
katman resminde Suriye çölündeki pembe üçgen, 40°D 32,5°K); iki devletin arasında kalıyorsa **kapanmıyor**;
② şeridin bittiği yerde düz, cetvelle çizilmiş gibi kenarlar (Mısır'ın Batı Çölü, Rub'ülhâlî kenarı);
③ boyamayan kaynağın (gri) çevresinde halka biçiminde boş toprak (Necid). Dar dil görmedim.

**(b) Sınır nehre/sırta "yaslama" olmadan ne kadar oturuyor?** Nehre oturuyor: Tuna boyunca Eflak–Osmanlı sınırı
iki haritada da nehrin üstünde; sayı yukarıda. Fark biçimde: yeni sınır köşeli ve basamaklı (5 km'lik hücre),
eski sınır yumuşatılmış. Dağ sırtı için sayı üretmedim; resimde Batı Anadolu beylik sınırları iki haritada
neredeyse aynı yerde.

**(c) Tek şehirden denize dil çıkıyor mu?** Çıkmıyor (sınamada E; gerçek veride 62–82 kaynak). Ama iki komşu
birlikte ulaşınca çıkan deniz şeridi küçük ve parçalı (Mısır kutusunda 33–40 bin km²); kıyıda şeritlerin arasında
"kıyı cebi" kalıyor (1.140–1.839 km², katman resminde açık sarı). Bunlar dar yorumda boyanmadı.

**(d) Çöl kutusunda görünüm.** Boşluk belirgin biçimde azaldı (%65–71 → %81–91). Arabistan'ın içi ve Mısır'ın Batı
Çölü'nün bir kısmı şeritle doldu; 1760'ta Rub'ülhâlî Umman, Suûdî, Kesîrî ve Zeydî arasında bölüşüldü, ortada tek
boşluk kaldı. Kalan boşluklar: Necid'in `__BOSLUK__` şehirlerinin çevresi (1300 ve 1550) ve Libya çölü.

**Beklemediğim bulgu — `k:4`ün kaynak olması (K3) haritayı şeritten çok değiştiriyor.** Boyayan kaynakların
%39–46'sı `k:4`. Etkisini ayrıca ölçtüm (1550, `k:4`ler kaynak sayılmadan aynı hesap; betikte `PROTOTIP_K4SIZ=1`):

| Kutu, 1550 | `k:4` kaynak | `k:4` kaynak değil |
|---|---|---|
| Anadolu — çekirdek / şerit / toplam boyalı | 2.563.420 / 14.144 / 2.577.685 | 2.448.501 / 118.583 / 2.568.422 |
| Mısır — çekirdek / şerit / toplam boyalı | 4.932.339 / 1.202.874 / 6.184.604 | 3.434.633 / 1.804.373 / 5.314.742 |

Anadolu'da toplam neredeyse aynı kalıyor (boşluğu bu kez şerit kapatıyor); çöl kutusunda `k:4`ler 870 bin km²
ekliyor. Yani abi-merkez verisi gelince çöl haritası bu resimlerden farklı çıkabilir.

## Kural taslağında belirsiz bulduğum yerler — seçtiğim yorum (Emre'ye soru)

1. **K7 + K10, duvarın iki yanı.** Antlaşma hattı geçilmezse iki yakadaki kaynak arasında "yol" yoktur; harfiyen
   uygulayınca hattın iki yanında boş bant kalır. Seçtiğim: hattın iki yanındaki kaynaklar **komşu sayılır**, şerit
   her iki yakada hatta kadar dolar, hattı kimse geçemez. *Doğru mu?*
2. **K7, boyamayan kaynak.** Bir devlet şehri ile boyamayan bir kaynak (`__BOSLUK__` şehri, aşiret) arası ≤ 20 gün
   ise şerit kurulur; devletin yarısı boyanır, öteki yarı boş kalır. Yani devlet toprağı boyamayan kaynağın
   sınırına kadar uzar. *Böyle mi olsun, yoksa şerit yalnız iki devlet şehri arasında mı kurulsun?*
3. **K8, "en az iki komşu kaynak".** Seçtiğim: kaynağın, kendisine ≤ 20 gün uzakta ve denize ≤ 10 günde ulaşan en
   az bir komşusu olmalı. Deniz yolu kaynağın **kendi** hücrelerindeki en yakın kıyıya çizilir.
4. **K9, denize değen cep.** "Tamamen tek devletin toprağıyla çevrili" sözünü dar okudum: denize değen boşluk delik
   değildir, dolmaz (göl sayılmaz, göle değen dolar). Bunlar katman resminde "kıyı cebi" diye ayrı renkte.
   *Tek devlet + deniz arasında kalan cep de dolsun mu?*
5. **K9, Osmanlı doğrudan + tâbi** tek devlet sayıldı (ikisinin arasındaki delik dolar).
6. **K2, tarihsiz aşiret.** Kabile/devletsiz noktaların "kaynak yılı −25…+50" penceresi veride yok (`kur:`/`bit:`
   yazılmamış). K1'e göre sahiplik kaydı ve `kur:`u olmayan yer sahnede değildir; bu noktaları sahneye almadım,
   resimde × ile gösterdim (Anadolu kutusunda 1, Mısır kutusunda 20 nokta). Tarihlenince çölde boş kalan alan büyür.
7. **K2, öteki boşluk türleri.** `__BOSLUK__` dönemi, `kasitli_bosluk` ve `bos: insansiz` → boyamayan kaynak;
   `__YOK__` dönemi → sahnede değil; `__BILINMIYOR__` ve `bos: veri-yok` → kaynak değil (veri borcu).
8. **K3, `k:4`.** Abi-merkez verisi olmadığı için her `k:4` kendi yazılı sahibiyle kaynak oldu.
9. **K10.** O gün geçerli her C/D/E/F hattı herkes için duvar. Eski kuraldaki gibi, bir tarafı o gün Osmanlı'ya
   tâbi olan hat yok sayıldı.
10. **Aynı hücreye düşen farklı sahipli iki kaynak** (senaryo başına 1 vaka): ikincisi boş komşu hücreye alındı.

## Prototipte eksik olanlar

- **K11 (geçit listesi) yok.** Su, eski boğaz yasağı + kıstak köprüsüyle geçilmiyor; yerleşimsiz ada boyanmıyor.
- **K12 yok:** himaye gövdesi, alt künye, parça kaydı çizilmedi; Osmanlı doğrudan/tâbi ayrımı renkte var.
- **K13 yok:** her gün baştan hesaplandı.
- **Daireler sekizgen.** Yürüyüş 8 komşulu ızgarada; 5 günlük "daire" sekizgen çıkıyor (sınama resminde açık).
  Eski motorda 16 komşulu seçenek var; yeni motorda karar gerekir.
- **Sınır basamaklı.** Yeni harita 0,05° hücreyle çizildi; yumuşatma ve sadeleştirme yok. Kıyı ince maskeden alındı.
- **Karşılaştırma tabanı.** Sol resim Koşu 39'un 5 günlük bandıdır; eski B dolgusunun bitmiş çıktısı yok. Yani
  "eski A" ile "yeni tek yapı" karşılaştırılıyor. Eski koşunun girdisi bugünkü veriden geride (Bosna, Kesîrî).

## ② Ne bulamadım / ne ölçmedim

- Duvar kuralı tek hatta sınandı (Kerden 1751). Osmanlı'nın taraf olduğu yoğun hat bölgesi (1699 sonrası
  Macaristan, 1878 sonrası Balkanlar) bu üç günde yok; yorum 1 orada görülmeli.
- `denetle.py` değişmezleri (1, 2, 3, 8) koşturulmadı: prototip motorun çıktı dosyalarını üretmiyor.
- Dağ sırtına oturma için sayı yok; yalnız göz.
- Aşiret penceresinin (yorum 6) etkisi ölçülmedi; veri yok.
- 16 komşulu yürüyüşle farkı ölçmedim.

## ③ Ne istiyorum

1. Resimlere bakıp karar: kural seti genel olarak "evet bu" mu? Özellikle çöl kutusu.
2. Yukarıdaki dört soruya cevap: yorum 1 (duvarın iki yanı), yorum 2 (boyamayan kaynakla şerit),
   yorum 4 (kıyı cebi dolsun mu), yorum 6 (tarihsiz aşiret).
3. Önerim: bir sonraki adımda aynı betikle 1700 ve 1900 günlerini Balkan kutusunda koşturmak (duvar kuralını
   yoğun hat bölgesinde görmek) ve 16 komşulu yürüyüşü denemek. İkisi de bu betikte küçük değişiklik.
