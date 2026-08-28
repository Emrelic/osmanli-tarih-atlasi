<!-- DURUM: OLCULDU ¦ 2026-08-28 ¦ TASNİF-D ¦ paketler 0027·0028·0029·0030·0031 -->
# BULGU — TASNİF-D (29 madde)

**Oturum:** TASNİF-D (`local` — bu oturum) · **Şartname:** `oturumlar/TASNIF-BOLUM.md` +
`oturumlar/TASNIF.md` + `oturumlar/ORTAK-PAKET-KURALLARI.md`
**Paketler:** `parti-emrelic-0027 · 0028 · 0029 · 0030 · 0031` — kesişme yok.
**Veriye/motora/arayüze YAZILMADI.** Yalnız ölçtüm, sınıfladım. `CEVAP.json`a
ve başka oturumların `HUKUM-*.json` dosyalarına dokunmadım.

---

## ① SAYIYLA

```
29 madde → 🟢 kapanmış 8  ·  🟠 çare ilan edildi ama uygulanmadı 8  ·
           🔵 kümeye git 12  ·  🔴 yeni iş 1
```
🟢 kovası `denetim/HUKUM-TASNIF-D.json`e yazıldı (yedi kelimelik hüküm
sözlüğüyle: `cozuldu` 1 · `zaten-dogru` 2 · `tekrar` 5). Bu dosya kalan 21
maddeyi taşıyor.

📌 **Hiçbir madde sıfırdan araştırılmadı** — her birinde önce `git log` /
`tahta.json` / var olan `denetim/BULGU-*.md` dosyaları tarandı; çoğunda
zaten bir ölçüm ve teşhis vardı, benim işim onu doğrulamak ve doğru kovaya
koymaktı. İki istisna: 0030/H-0018'in gerçek bölgesini (Kayseri-Sivas-Elbistan
mı, Teke/Antalya mı — iki ayrı kaynak çelişiyordu) ve 0031/H-0002'nin görsel
niteliğini (işgal örtüsü mü geometri bozukluğu mu) kendim H-0018-1.png ve
H-0002-1.png görsellerini açarak ölçtüm.

---

## ② 🟠 ÇARE İLAN EDİLDİ AMA UYGULANMADI — 8 madde

### 0029/H-0002 — Sivrihisar'ın yanlış "germiyan" ataması
SONNET HAZIR KITA 77 (tahta M-1181) tam reçete yazdı: Sivrihisar'ın
1300-1354 arası `germiyan` kaydı TDV'nin İKİ bağımsız maddesiyle (`sivrihisar`,
`karamanogullari`) çelişiyor — muhtemelen Ankara'nın tarihinden sehven
kopyalanmış. Doğru desen (Selçuklu→Karaman→Timurlu(Fetret)→Karaman→Osmanlı
zigzagı) JS nesnesi olarak hazır ama üç gün TDV'de bulunamadı (yuvarlak tarih
ya da kardeş kayıttan ödünç gerekiyor — koordinatör kararı). `data/yerlesimler.js`
Sivrihisar kaydına henüz işlenmedi.

### 0029/H-0007 — Boğaz ızgara çözünürlüğü (genel dispatch)
`denetim/BULGU-MOTOR-SU.md` (MOTOR EPOK, 24 Ağu): kök bulundu — motor
0,05° (~5,5 km) ızgarada karar veriyor, İstanbul Boğazı 0,7 km olduğu için
ızgaraya sığmıyor (Çanakkale 1,3 km + geniş ağız olduğu için görülüyor). Dört
çare adayı (Ⓐ ızgara inceltme · Ⓑ elle boğaz kesiği · Ⓒ hücre-alanı sorgusu ·
Ⓓ ayrı su katmanı) maliyetleriyle yazıldı, öneri Ⓒ — **hiçbiri `arac/uret_petek.py`ye
uygulanmadı.** Saroz kısmı (0030/H-0007) bu teoriyle açıklanamıyor, ayrı kaldı.

### 0030/H-0002 — İstanbul Boğazı enklavı (aynı kök, yukarıdaki)
Bkz. 0029/H-0007. Aynı `BULGU-MOTOR-SU.md` bu maddeyi doğrudan kapsıyor.

### 0030/H-0003 — İttifak rozeti gösterimi
`denetim/ITTIFAK-TASARIM.md` (commit d9b255e, 24 Ağu): tam ölçüm + tasarım +
maliyet teslim edildi. Altyapının üçte ikisi zaten vardı (rozet kavramı,
ittifak glifi, koridor düğüm-kenar ağı); geometri sınandı (Kutsal İttifak
1690 kesitinde 6 çiftin 2'si düz hatla karşı tarafı kesiyor, "yay" ile
çözülüyor, maliyet donem başına ~75ms — kabul edilebilir). **KOD YAZILMADI.**
Dört karar sorusu koordinatöre açık: (1) hangi ittifaklar yazılsın (2) rozet
çapası gövde-merkezi mi başkent mi (3) `taraf:` alanının dizi/string tip
çakışması düzeltilsin mi (4) ışıltı animasyonu bu turda mı. `js/app.js`
(ARAYÜZ oturumunun dosyası) henüz dokunulmadı.

### 0030/H-0010 — Çorlu/Lüleburgaz + Yeniçeri Ocağı aynı gün
SONNET HAZIR KITA 78 (M-1191) ölçtü: iki bağımsız madde (toprak + kurumsal)
aynı günde (1362-06-01) çakışıyor. Yeniçeri Ocağı'nın TDV'ye göre kesin günü
yok ("kademeli süreç") — birkaç ay kaydırmak çakışmayı azaltır ama TAM çözüm
(her maddenin ayrı ayrı oynatılması) bir ARAYÜZ/`js/app.js` değişikliği
gerektiriyor. Ne veri kaydırması ne arayüz değişikliği uygulandı.

### 0031/H-0003 — Bağdat'ın eksik timurlu alt-dönemi
`oturumlar/OTURUM-13-ANADOLU.md` SS2'de TDV kaynaklı hazır bir öneri var:
1401→1405 arası `timurlu` eklenmeli. Yalnız `data/yerlesimler.js`e yazılması
bekliyor — salt-okuma bir öneri, uygulanmadı. (0031/H-0008 aynı kökten,
`tekrar` olarak kapatıldım — bkz HUKUM-TASNIF-D.json.)

### 0031/H-0014 — Akkoyunlu'nun ömür-dışı dönemleri
161 dönem/143 noktanın 27'si Akkoyunlu'nun kendi ömrünün (t:1514) dışına
taşıyor. Hazır bir düzeltme yaması var: `data/yerlesimler_kafkas_duzeltme.js`
(21 Ağustos, 19 kayıt, TDV ile sınanmış) ama `arac/girdi.py`'ye HENÜZ
BAĞLANMADI. Koordinatör daha önce ölçtü: bekletme gerekçesi (şirvanşah renk
eksikliği) geçersiz çıktı, "yayından sonraki ilk veri kalemi" olarak zaten
sıraya alınmış — yani çare biliniyor ve planlı, sadece henüz uygulanmadı.

### 0031/H-0016 — Şeyh Bedreddin isyanı simgesinin yanlış koordinatı
`data/savaslar.js:331` `lat:41.10,lon:26.60` kullanıyor — gerçek kronoloji
konumu (Serez) yerine ~250 km doğuda, Emre'nin "Meriç civarı" dediği yerde.
Sembol `sure:400` gün ekranda kaldığı için sonraki maddeye geçilene kadar
yanlış yerde görünüyor. Tek satırlık koordinat düzeltmesi net ve hazır,
uygulanmadı.

---

## ③ 🔵 KÜMEYE GİT — 12 madde

### emilme kümesi (§2 — nokta yoğunluğu eksikliği)

**0028/H-0001** — Kırım bozkırı, 1504-01-01, 47,19-47,96K/32,10-33,64D
kutusunda 0 nokta (ARABISTAN KRONOLOJİ ölçtü, M-1108). En yakın 4 aday
117-149 km, üçü `yerlesimler_ek_bozkir.js`in zaten belgelediği iki
boşluktan (Yedisan, Kuban-Stavropol) FARKLI, dördüncü bir boşluk gibi
görünüyor ama canlı haritada nasıl çizildiği (boş delik mi geçerli geniş
hücre mi) teyit edilemedi (Browser penceresi açılamamış). H-0001-1.png
büyütülüp bakılmalı; gerçekten boşsa `ek_bozkir.js`e aynı yöntemle
dördüncü bir dolgu noktası eklenebilir.

**0028/H-0007** — Kuzey Afrika/Sahra çölü nokta yoğunluğu ailesi. VERİ
SAHİPLİK zaten aynı aileyi ölçüp `HUKUM-VERI-SAHIPLIK.json`da "tekrar"
diye işaretlemiş (Kirenaika/Batı Mısır çölü kutusunda 18 nokta var ama
hepsi kıyı şeridinde, orta şerit tamamen noktasız). Ayrı bir "Sahra nokta
yoğunluğu artırma" projesi gerektiriyor, tek maddelik yama değil.

**0030/H-0013** — Selanik/Üsküp seyrek tohum. SONNET HAZIR KITA 78 ölçtü
(M-1191): Üsküp'ün 100 km çevresinde yalnız 2 nokta (Anadolu ortalamasının
3-4 katı seyrek). Aday şehirler var (Kumanova·Kalkandelen·Üstrumca·İştip·
Köprülü·Kırçova·Kratova) ama tam tarihsel araştırma (kuruluş/dönem/TDV
kaynak) YAPILMADI — ayrı bir NOKTA-EKLEME araştırma turu gerekiyor.

**0030/H-0018** — Kayseri-Sivas-Elbistan arası boş üçgen. MOTOR (M-1202)
ölçtü: kutuda SIFIR nokta, Ordu/Mardin ile aynı ailede, NOKTA oturumuna
havale edilmiş. ⚠️ **Kendi ölçtüm:** `denetim/BULGU-BAYAT-TARAMA.md`nin
"bunu 3a36b65/Teke-Antalya ile karıştırma" uyarısı YANLIŞ ALARMDI —
H-0018-1.png'nin künyesi `38,19-38,97K / 36,17-36,64D` diyor, bu tam
Kayseri-Sivas bölgesi (Antalya ~30,7°E/36,9°K'da, uyuşmuyor); görselin alt
yazısındaki "Teke ilinin ilhakı" kronoloji BAŞLIĞI o anki OLAY metniydi,
haritanın GÖSTERDİĞİ bölge değil (`CLAUDE.md`'nin "kronoloji başlığı ile
harita bölgesi karışmasın" dersinin bir vakası daha). MOTOR'un teşhisi
DOĞRU, NOKTA oturumuna sevk zaten uygun.

### cizim-geometri kümesi (motor/petek geometri soruları)

**0030/H-0001** — Bizans mavisi üzerinde koyu kırmızı (1324, Gemlik/İznik).
SONNET HAZIR KITA 72 ölçtü (`BULGU-ANADOLU2-0030.js`): `data/yerlesimler.js`
kaydının kendisi temiz, kusur `devletler_harita.js` (yabancı devlet peteği)
ile `donemler.js` (Osmanlı/tâbi peteği) aynı günde BAĞIMSIZ Voronoi sınırı
üretmesinde — iki üretim hattı aynı tesellasyonu paylaşmıyor gibi. **0031/H-0005
BİREBİR AYNI KÖK** ve orada büyük ölçekte doğrulanmış (`BULGU-RENK-0031.md`:
46 devlet / 550 devlet-dönem çifti etkileniyor, medyan oran düşük ama 13
kayıt ≥%10, 2'si %100). Motor düzeyinde bir soru, yalnız Oturum 0 çözebilir.

**0030/H-0007** — Çimpe/Saroz'un kuzeyi denizin öbür yakasından boyanıyor.
`BULGU-MOTOR-SU.md`: boğaz-ızgara teorisiyle AÇIKLANAMIYOR (Saroz ızgarada
%43 su hücresiyle apaçık görünüyor). En güçlü aday — `uret_petek.py`nin
"tohum→parça düz hattı tamamen karadaysa Voronoi kalır" süzgeci — ÖLÇÜLMEDİ.
Sıradaki iş: Çimpe→Saroz-kuzeyi düz hattının bu süzgeci tetikleyip
tetiklemediğini ölçmek (MOTOR EPOK'un kendi önerisi).

**0030/H-0017** — Niş yanında "sahipsiz" görünen Sırbistan toprağı.
`BULGU-ANADOLU2-0030.js`: kutuda gerçekten 0 yerleşim var (Emre haklı) ama
emen nokta EN YAKINI değil — en yakın Osmanlı noktası (Niş, 0,71°) yerine
iki kat uzaktaki Piriştine (Sırbistan, 1,48°) bu bölgeyi sahipleniyor.
"ŞÜPHELİ" diye damgalandı, kesin motor kusuru kanıtlanamadı (bölgede gerçek
sırt yaslaması — Stara Planina — bu farkı açıklayabilir). MOTOR/uret_petek.py
tanıdık bir oturum Niş-Kostendil-Sofya-Pristine dörtgenini incelemeli.

**0031/H-0002** — Preveze/Vonitsa yakınında "kırık" (kum saati/bowtie
biçimli) mavi taralı bölge, 1386-01-01. **Kendi ölçtüm** (H-0002-1.png
açıldı): şekil BİZANS içinde, kendini kesen bir poligon gibi görünüyor —
klasik bir Voronoi/petek kendiliğinden-kesişme (self-intersection) belirtisi
olabilir, işgal örtüsü YOK burada (renk taralı ama `isg:` deseni değil,
motor geometrisi). Motor tanıdık bir oturum ölçmeli: bu bölgede petek kenarı
kendini kesiyor mu.

**0031/H-0005** — 0030/H-0001 ile birebir aynı motor çift-istem kusuru
(yukarıda anlatıldı), `BULGU-RENK-0031.md`de canlı ölçümle doğrulanmış.
Düzeltme `arac/uret_petek.py` motoruna dokunmayı gerektiriyor, yalnız
Oturum 0 yapabilir.

**0031/H-0019** — Germiyan eğri/köşeli planı. MOTOR ölçtü (M-1202): 8
noktayla yoğunluk yeterli görünüyor, tek sivri uç yok, muhtemelen normal
çok-köşeli Voronoi — ama görselde tarih damgası olmadığı için kusur
ÖLÇÜLEMEDİ (doğrulanamadı da çürütülemedi de). Alternatif aday: `m:`/`k:`
alanlarının `CLAUDE.md §3 Değişmez-3`te belgelenen mekân/idari-eksen
karışıklığı. İkisi de bu turun kapsamı dışında bırakıldı — tarihli bir
görselle motor tekrar koşulmalı.

### sahiplik-teyidi kümesi

**0031/H-0004** — 1393-08-29 kesitinde İran'ın parçalanmış görünümü (iki
ayrı "İRAN" poligonu + Karkiya/Gilan, Mar'aşi/Mazenderan, Timurlu Valiliği
ayrı renkte). **Kendi ölçtüm** (H-0004-1.png açıldı — önceki oturum
erişemediği için görev tanımlayamamıştı, ben görebildim): bölge net —
Hemedan-Tahran-Kazvin-İsfahan-Gilan-Mazenderan kuşağı. Bu, `CLAUDE.md §11`de
ZATEN belgelenmiş "İran'ın 1335-1340 fetret dönemi" boşluğuyla aynı aile
(Ebû Saîd'in 1335 ölümüyle İlhanlı'nın fiilen bitmesi ile ardılların gerçek
başlangıçları arasındaki model boşluğu — `OGRENILENLER §72`). Sahiplik-teyidi
oturumuna: bu kesitte hangi bölgenin hangi ardıla ait olduğu TDV ile
tek tek doğrulanmalı; sıfırdan başlamadan önce mevcut "İran hayaleti" bulgu
dosyalarına (İran 50→7 borç kaydı) bakılmalı.

### icerik-talebi kümesi

**0030/H-0014** — "Yabancı devlet haberleri Osmanlı kronolojisine hangi
kuralla sızıyor?" SONNET HAZIR KITA 73 tam ölçtü (M-1190): `ek-dunya-esik`
ayarı GERÇEK ve ÇALIŞIYOR ama YALNIZ kullanıcının EK olarak seçtiği ikinci/
üçüncü devlet için geçerli — ODAK'ın (Osmanlı) kendi 1226 maddesi HİÇBİR
filtreden geçmiyor, hangi yabancı olayın dahil edileceği tamamen içeriği
yazan oturumun editoryal takdiri, kodlanmış bir kural YOK. Ayrıca kısmi
taramada iki somut dünya-tarihi boşluğu bulundu (Fransız İhtilali/Bastil,
Kolomb'un yolculuğu — müstakil madde yok) ama tam tarama yapılmadı (günler
sürer). İki ayrı iş: (a) bu editoryal serbestlik istenen tasarım mı yoksa
kural mı konmalı — koordinatör/Emre kararı, (b) dünya tarihi kilometre
taşları için ayrı bir tarama+ekleme turu.

---

## ④ 🔴 YENİ İŞ — 1 madde

### 0031/H-0007 — Mersin'in yanlış kuruluş tarihi + Kilikya Ermeni Krallığı'nın erken kesilen sonu
YENİ ölçülen gerçek veri hatası: `Mersin d: 1352-01-01`'den başlıyor ama
Orhan Gazi döneminde (1326-1362) Osmanlı Mersin'e hiç ulaşmamıştı — 1352
tarihi, Ramazanoğulları'nın kuruluş tarihiyle (Adana merkezli) birebir aynı,
muhtemelen kimlik karışıklığı. Ayrıca Kilikya Ermeni Krallığı'nın gerçek
sonu (TDV: 1375-04-14) veride 23 yıl erken kesiliyor. Kaynak: TDV
`ramazanogullari` · `kilikya-ermeni`. Düzeltme Oturum 4'e (yerleşim
araştırma) ait — henüz bir prescription/reçete yazılmadı, yalnız teşhis var;
bu yüzden 🟠 değil 🔴: bir sonraki adım tam bir düzeltme taslağı hazırlamak.

---

## ⑤ ÖLÇMEDİĞİM / AÇIKÇA BIRAKTIĞIM

```
0031/H-0002    poligonun GERÇEKTEN kendini kesip kesmediğini node/turf ile
               DOĞRULAMADIM — yalnız görsel gözlemle "aday" dedim.
0031/H-0004    hangi ardılın hangi TDV maddesiyle doğrulanacağını tek tek
               taramadım — kapsam çok geniş, sahiplik-teyidi oturumunun işi.
0030/H-0014    Fransız İhtilali/Kolomb dışında başka dünya-tarihi boşluğu
               olup olmadığını taramadım (SONNET HAZIR KITA 73 zaten
               "günler sürer" demişti, ben de sürdürmedim).
```
