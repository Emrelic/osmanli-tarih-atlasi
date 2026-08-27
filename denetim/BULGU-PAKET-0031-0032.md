# BULGU — PAKET 0031-0032 · PAKET 0031-0032 oturumu (27 Ağustos 2026)

Kaynak paketler: `ClaudEmre\kutu\giden\parti-emrelic-0031` (22 madde, 24 Ağu 03:22)
ve `parti-emrelic-0032` (16 madde, 24 Ağu 11:07). Yayın şu an r3410, koşu 03:13'te
başladı (~06:45 bitecek) — koşu bitmeden verilen hükümler o günkü YAYINLANMIŞ
haritaya değil, bugünkü VERİYE göredir; koşu bitince yeniden gözden geçirilmeli.

Hüküm sözlüğü `oturumlar/PAKET-TASNIF.md §③`teki yedi kelimedir.

---

## ZATEN ÇÖZÜLMÜŞ — git log'da doğrulandı

### 0031/H-0015 — celayirli Sultan Ahmed maddesinde I. Ahmed portresi
**HÜKÜM: cozuldu**
GEREKÇE: `e17bdea` ("PORTRE AD CAKISMASI — 'PASA' BIR PADISAH UNVANI DEGILDIR,
0031/H-0015", 24 Ağu 10:43) — OPUS HAZIR KITA 84'ün 6064 maddelik taramasında
hipotez çürüdü ama Emre'nin bildirdiği kayıt o gün TEMİZ ölçüldü: "Celâyirli
Sultan Ahmed" / "Sultan Ahmed Celâyirî" eşleşmesi artık YOK.

### 0032/H-0008 — Merak butonu konu içeriğini basmıyor
**HÜKÜM: cozuldu**
GEREKÇE: `0775e1f` ("MERAK BUTONU ARTIK SORUYU BASIYOR, 0032/H-0008", 24 Ağu
20:59) — `kisa` alanı zaten doluydu (14/14), kusur alan seçimindeydi (`kisa`
yerine `soru` basılmalıydı); düzeltildi.

---

## ZATEN TEŞHİS EDİLMİŞ (SONNET HAZIR KITA 72, `denetim/BULGU-RENK-0031.md`, 24 Ağu) — UYGULANMADI

### 0031/H-0005 — "bu koyu kırmızı bölge hata mı?" (Vidin ilhakı, 1396-10-01)
**HÜKÜM: sirada**
NİÇİN: gerçek kusur, ama motor düzeltmesi gerekiyor (benim/bu oturumun yetkisi
dışı — `arac/uret_petek.py` yalnız Oturum 0 çalıştırır). `denetim/BULGU-RENK-0031.md`
canlı motorda nokta-içinde testiyle doğruladı: aynı Sırbistan parçası
(merkez [22.5677,43.1133]) 1388'de Osmanlı gövdesinin DIŞINDAYKEN 1396'da
İÇİNDE — 0030/H-0001 ile BİREBİR aynı mekanizma (devletler_harita.js ↔
donemler.js senkronsuzluğu). Ayrıca dünya çapında taranmış: 46 devlet,
550 devlet-dönem etkileniyor, 13'ü oran≥%10 (görsel olarak bariz).

### 0031/H-0017 — Gürcistan/Karakoyunlu rengi aynı mı?
**HÜKÜM: zaten-dogru**
GEREKÇE: `denetim/BULGU-RENK-0031.md` ΔE ölçtü — gurcistan #e020b0 ↔
karakoyunlu #e018e0 ΔE=25,69 (558 km), gurcistan ↔ iran #cc1664 ΔE=37,06
(339 km) — ikisi de eşiğin (12) 2-3 katı üstünde, PALET ÇAKIŞMASI DEĞİL.
Üç ayrı kimlik, üç farklı hex. Estetik not (isteğe bağlı, renk önerilmedi
çünkü `renkler.py` üretim koşusunda parmak izleniyor): üçü de aynı
magenta/pembe ailesinde, gözle ayırt etmek zor olabilir — bu bir SONRAKİ
palet turunun isteğe bağlı iyileştirme notu, kusur değil.

### 0031/H-0002 — "kırmızı harita renk örtüşmelerinin kalitesini artıralım" (Epir kıyısı, 1386-01-01)
**HÜKÜM: olculecek**
NE ÖLÇÜLECEK: `denetim/BULGU-RENK-0031.md` görseldeki taralı/çizgili şekli
incelemiş ama KESİNLEŞTİREMEMİŞ — işgal örtüsü mü (19. yy'a özgü, 1386'da
beklenmez) yoksa sefer/hareket güzergâhı oku mu belli değil. Canlı motorda
o günü (1386-01-01, Preveze/Vonitsa bbox) ayrıca sorgulamak gerekiyor.
İstek de kendisi belirsiz ("kaliteyi artıralım" — belirli kusur işaret
etmiyor); ısrarlıysa daha yakın zumlu/spesifik koordinatlı yeni görsel
istenmeli.

---

## GRUP 1 — TİMUR/FETRET DEVRİ (pkg31, 7 madde) — tamamlandı

### H-0003 — "Timur Bağdad'ı zaptetti ama haritada görünmüyor"
**HÜKÜM: sirada**
NİÇİN: `data/yerlesimler.js:681` Bağdat kaydı 1335-1411 arası KESİNTİSİZ tek
`celayirli` dönemi — hiç `timurlu` alt-dönemi yok. Kronoloji maddeleri
(1393-08-29, 1401-01-01, `yer_id:"Bağdat"` ikisinde de var) doğru ama
Bağdat'ın kendi `s:` zincirinde karşılığı yok. TDV kaynaklı hazır bir öneri
zaten var (`oturumlar/OTURUM-13-ANADOLU.md §2`: 1401→1405 `timurlu`
eklenmeli) — yalnız uygulanması bekliyor, bu tur salt-okuma.

### H-0004 — "Timur devleti bu bölgeleri alamamış mı, oturum görevlendir"
**HÜKÜM: sirada**
NİÇİN: kullanıcının kendi metni zaten "ayrı bir oturum görevlendir, detaylı
baksın" diyor — geniş kapsamlı araştırma talebi, görsel bu triyaj oturumunun
erişiminde değildi (proje dizini dışında), hedef coğrafya belirlenemedi.

### H-0008 — "Timur'un 1. ve 2. Bağdad işgali maddelerinde harita gösterimi yok"
**HÜKÜM: tekrar** (→ H-0003)
GEREKÇE: birebir aynı kök sebep — Bağdat'ın `s:` zincirinde `timurlu` dönemi
yok; iki kronoloji maddesinin ikisi de `yer_id:"Bağdat"` taşıyor, eksik olan
harita-madde bağlantısı değil Bağdat'ın kendi sahiplik verisi.

### H-0010 — "Ankara Savaşı sonrası topraklar hâlâ Osmanlı kırmızısı"
**HÜKÜM: tekrar** (→ 0031/H-0005, `denetim/BULGU-RENK-0031.md`)
GEREKÇE: veri katmanı DOĞRU (germiyan/saruhan `devletler.js`'te doğru
tarihli yeniden-kuruluş kayıtlı) ama SONNET HAZIR KITA 72'nin 24 Ağustos'ta
ayrı ölçtüğü "TİMURLU RESTORASYONU DESENİ" birebir bu görüntüyü açıklıyor:
yayınlanan haritada germiyan (1425-06-01→1429-02-01, 34.011 km², **oran
%100**) ve saruhan (1402-08-17→1416-09-01, 3.927 km², **oran %100**)
dönemlerinin TAMAMI Osmanlı'nın çizilen gövdesiyle çakışıyor — motor toprağı
hiç bırakmamış gibi davranıyor. Zaten MOTOR'a devredilmiş, henüz düzeltme
commit'i yok.

### H-0011 — "Timur İzmir seferi güzergâhı kesikli çizgiyle gösterilsin"
**HÜKÜM: zaten-dogru**
GEREKÇE: `data/savaslar.js:552-554` kaydı zaten var (`tur:"kusatma"`,
`yol:[...]`), `js/app.js` bu tür kayıtları `line-dasharray` ile zaten
render ediyor — istenen özellik zaten mevcut.

### H-0012 — "İzmir seferi kesikli çizgisi kronoloji maddesiyle senkron değil"
**HÜKÜM: cozuldu**
GEREKÇE: `js/app.js:2606-2618` yorumunda madde adıyla anılıyor — "sabit +45
gün" kırpma hatası (61 sefer okunun tümünü etkileyen sistemik kusur) kök
sebep olarak bulunmuş, `82aa96e` (24 Ağustos 20:51) ile veri-türetilmiş
kırpma mantığına geçilerek düzeltilmiş, hâlâ HEAD'de canlı.

### H-0013 — "Timur'un Anadolu'dan çekilmesi çizgiyle gösterilsin"
**HÜKÜM: zaten-dogru**
GEREKÇE: `data/savaslar.js:555-557` kaydı zaten var (`tur:"cekilme"`,
f:1403-03-15→t:1403-08-01), kronoloji maddesiyle (`olaylar_ek5.js:53`,
aynı tarih) zaten örtüşüyor; H-0012'nin düzelttiği genel kırpma mekanizması
bu kayda da otomatik uygulanıyor.

**Ölçülmedi:** H-0004'ün hedef coğrafyası (görsele bu oturumdan erişilemedi);
H-0010'un motor-seviyesi kök sebebi (`uret_petek.py`'nin hangi satırı) —
`BULGU-RENK-0031.md`'nin de itiraf ettiği bir "ölçmedim", 4,5 saatlik motor
yeniden-koşusu gerektiriyor.

---

## GRUP 2 — BEYLİKLER (Akkoyunlu/Karakoyunlu/Germiyan) — tamamlandı

### H-0014 (pkg31) — Akkoyunlu/Karakoyunlu toprak-kronoloji örtüşmesi
**HÜKÜM: sirada**
NİÇİN: karakoyunlu 132 dönem/127 nokta TUTARLI (0 taşma), ama akkoyunlu 161
dönem/143 noktanın **27'si** devletin kendi ömrünün (t:1514-01-01) dışına
taşıyor (Iğdır örneği: tek blok 1281→1534, 253 yıl). 🟢 EN ÖNEMLİ BULGU:
**bir düzeltme yaması zaten hazır ama bağlı değil** — `data/yerlesimler_kafkas_duzeltme.js`
(21 Ağustos, 19 kayıt, TDV ile sınanmış, Iğdır'ı doğru zincire ayırıyor)
`girdi.py`nin `GIRDI_DOSYALARI`sında YOK; kendi başlığına göre `sirvansah`
künyesine renk eksikliği yüzünden bekletiliyor. Ayrıca AYNI kusur sınıfının
Mardin/Diyarbakır kümesi (Ceylanpınar, Nusaybin, Silopi, Malikiye —
`yerlesimler_ek25.js`) hiç ele alınmamış.

### H-0017 (pkg31) — Gürcistan/Karakoyunlu renk
**HÜKÜM: zaten-dogru** (bağımsız ikinci ölçüm de doğruladı, bkz. yukarıdaki
"ZATEN TEŞHİS EDİLMİŞ" bölümü) — ΔE 25,69/37,06, teknik çakışma yok.

### H-0019 (pkg31) — Germiyanoğulları Eğirdir'de neden görünüyor
**HÜKÜM: olculecek**
NE ÖLÇÜLECEK: Eğirdir'in kendi kaydı (`yerlesimler.js:1527`) hiç `germiyan`
dönemi taşımıyor (selçuklu→hamid→doğrudan Osmanlı→...), 80 km çevresindeki
7 nokta da germiyan taşımıyor, en yakın germiyan noktası (Afyon) 102 km
uzakta — klasik §2 emilme (yakın nokta yokluğu) burada ZAYIF açıklama.
Asıl sebep ya canlı motorun petek render davranışında (motor koşturulmalı,
bu tur ölçülemedi) ya da `m:` alanının CLAUDE.md §3 Değişmez-3'te zaten
belgelenen mekân/idari-eksen karışıklığında olabilir.

### pkg32/H-0002 — Karakoyunlu çöküş maddesi: odak + renk
**Renk kısmı → tekrar** (H-0017'ye bakınız, aynı ΔE ölçümü).
**Odak kısmı → senin-kararin**
GEREKÇE: `yer_kon:[39.1,40.4]` TDV'nin "Bingöl-Kiğı arası Sancak mevkii"
ifadesine BİREBİR sadık (WebFetch ile doğrulandı) — konuma dokunulmamalı.
Ama o koordinatın 60-133 km çevresi zaten "akkoyunlu" boyalı (Cihan Şah,
Uzun Hasan'a saldırıp geri çekilirken Akkoyunlu sınır bölgesinde pusuya
düşürüldü — tarihsel olarak savunulabilir). "Düzeltilecek kusur mu, doğru
ama beklentiye aykırı mı" kararı Emre'nin zevkine/yorumuna bağlı.

### pkg32/H-0003 — Uzun Hasan'ın Karakoyunlu'ya son vermesi: olay mahalli
**HÜKÜM: olculecek**
NE ÖLÇÜLECEK: madde yalnız `yer_id:"Tebriz"` taşıyor; TDV'nin kendisi
KESİN savaş mahalli vermiyor (yalnız Hasan Ali'nin sonraki kaçış yönünü
— Gence-Berde/Hemedan — belirtiyor), yani "Tebriz" sembolik olabilir.
Ayrıca veri tarihi (1468-04-01) TDV'nin verdiği tarihten (Temmuz 1468) ~3
ay farklı — standart akademik kaynaktan (Encyclopaedia Iranica vb.) daha
kesin yer/tarih aranmalı.

---

## GRUP 4 — pkg32 TARİHİ/HARİTA (6 madde) — tamamlandı

Not: bu 6 madde ZATEN önceki oturumlarca (OPUS HAZIR KITA 82,
`denetim/BULGU-0032-VERI.md`, 24 Ağustos) derinlemesine ölçülmüş ve çoğu
düzeltilmiş; ajan bunu git log + dosya okumasıyla BAĞIMSIZ doğruladı.

### H-0001 — Dubrovnik haraca bağlanırken İşkodra/Trebinye/Kotor durumu
**HÜKÜM: zaten-dogru**
GEREKÇE: İşkodra `s:venedik 1281→1479`, Trebinye `s:bosna 1281→1466`, Kotor
Osmanlı dönemi HİÇ YOK (1281-1797 sırbistan→macaristan→venedik) — üçü de
Dubrovnik'in haraca bağlandığı her olası tarihten (1459-03-07, `8404688`
ile TDV'ye göre düzeltilmiş) SONRA Osmanlı'ya geçiyor. Teyit istendiği gibi
doğrulandı. *(Ayrı, bu maddenin dışında bir açık kalem: İşkodra'nın
1281-1396 Venedik atfı 115 yıl fazla ölçülmüş, `yer_yama_p32.js`'te öneri
var ama uygulanmamış.)*

### H-0004 — Arzila'da yanıp sönen simge yanmıyor
**HÜKÜM: cozuldu**
GEREKÇE: `js/app.js:5934-5946`, kod içinde "0032/H-0004" diye işaretli —
art arda aynı yerdeki iki maddede ikincisinin animasyon tetiğini hiç
çağırmaması kök sebep bulunup düzeltilmiş, committed.

### H-0005 — Racova/Vaslui Bozgunu, zoom geride iken işaret görünmüyor
**HÜKÜM: cozuldu**
GEREKÇE: `js/app.js:5379-5417`, commit `be8ba85` (24 Ağu 21:32) — zaman
akışı kipinde işaretin hiç tetiklenmediği "dördüncü sessiz dal" kapatıldı;
`.odak-parlama` zaten zoom'dan bağımsız sabit boyutlu.

### H-0006 — Kırım Osmanlı egemenliğine katıldığında toprakları
**HÜKÜM: zaten-dogru**
GEREKÇE: yarımadada 14 nokta — 8'i doğrudan (Kefe·Sudak·Mankup·Balaklava·
Yalta·Aluşta·Kerç·İnkirman), 6'sı tâbi (Bahçesaray·Akmescid·Karasubazar·
Eski Kırım·Gözleve·Or Kapı), TDV'nin `kirim` maddesindeki doğrudan/tâbi
ayrımıyla gün hassasiyetinde (1475-06-06) birebir örtüşüyor.

### H-0007 — Akdere (Valea Albă) Zaferi, zoom out'ta işaretlenmemiş
**HÜKÜM: cozuldu** (H-0005 ile aynı kök, `be8ba85`)
GEREKÇE: ana şikâyet aynı commit'te kapandı. *(Ayrı küçük bulgu: kamera
odağı Suçava'da, savaş ikonu Războieni/Akdere'de ~55 km uzakta —
`yer_yama_p32.js`'te öneri var, uygulanmamış ama asıl şikâyeti etkilemiyor.)*

### H-0016 — Bu boşluğun sebebi ne (görsel: 1493, Bug-Dinyester arası step)
**HÜKÜM: sirada**
NİÇİN: klasik §2 emilme — 2632 noktanın taraması gösterdi ki kutunun
İÇİNDE sıfır nokta var, en yakın nokta (Zaporojye Seçi) 143 km uzakta.
Kusur kodda değil veri yoğunluğunda; TDV/akademik kaynaklı yeni nokta
araştırması gerektiriyor (Oturum 4 yetkisi), bu turun kapsamı dışı.

**Ölçülmedi:** hiçbir görsel tarayıcıda canlı haritada açılıp doğrulanmadı
(salt-okuma); H-0004/H-0005/H-0007 kod düzeltmelerinin fiilen render
edildiği test edilmedi.

---

## GRUP 3 — OSMANLI SINIR OLAYLARI (pkg31, 9 madde) — tamamlandı, TÜM PAKET BİTTİ

### H-0001 — Macaristan toprağı (görsel 1386, Dubrovnik/Kotor kıyısı)
**HÜKÜM: zaten-dogru**
GEREKÇE: Dubrovnik `s:macaristan 1358→1459`, Kotor `s:macaristan 1371→1420`
— 1358 Zadar Antlaşması ile uyumlu, 1386'da ikisi de doğru macaristan.
*(Ayrı, ölçülemeyen soru: ekranda o an "Timur'un üç yıllık seferi" metni
seçiliyken kamera neden bu bölgeye odaklandı — canlı gezinme testi
gerektiriyor, bu madde onu sormuyor.)*

### 🔴🔴 H-0007 — Orhan Gazi/Ceneviz kapitülasyonu maddesinde Mersin Osmanlı boyalı
**HÜKÜM: sirada** — YENİ, İLK KEZ ÖLÇÜLEN GERÇEK VERİ HATASI
NİÇİN: `data/yerlesimler_ek27.js:51` Mersin `d:[{f:"1352-01-01",...}]` —
yani 1352'den itibaren DOĞRUDAN Osmanlı. Orhan Gazi döneminde (1326-1362)
Osmanlı Mersin'e HİÇ ulaşmamıştı. Ve 1352-01-01 tarihi rastgele değil:
`devletler.js`'te **Ramazanoğulları'nın kuruluş tarihiyle birebir aynı**
(merkezi Adana, Mersin'in bitişiği) — muhtemelen "Ramazanoğulları kuruldu"
ile "Osmanlı'ya geçti" karıştırılmış bir veri hatası. Ayrıca Kilikya Ermeni
Krallığı'nın gerçek sonu 1375-04-14 (`devletler.js:1081`), kayıt onu 23 yıl
erken bitiriyor. `CLAUDE.md §3.5.1`in "Osmanlı fazla mı görünüyor" ailesinden
somut bir vaka — kaynak: TDV `ramazanogullari`/`kilikya-ermeni`, düzeltme
Oturum 4'e (yerlesimler_ek27.js sahibi) atanmalı.

### H-0006 — Vidin ilhakı/Niğbolu Seferi aynı anda + kronoloji pas geçiliyor
**HÜKÜM: cozuldu**
GEREKÇE: koordinatörün kendi teşhis ettiği "SESSIZ ADIM" kökü (`07c33b2`,
24 Ağu 03:46 — `_varista()` konumsuz dalda hiç çağrılmıyordu), Emre'nin
"panel" kararıyla `82aa96e`de (24 Ağu 20:51) `js/app.js:5891-5925`'e indi.

### H-0009 — Mardin'in peteği neden sivri
**HÜKÜM: zaten-dogru**
GEREKÇE: en yakın komşu Nusaybin 49,9 km, 40 km yarıçapta hiç nokta yok —
sivri/köşeli şekil bu seyrekliğin doğal sonucu (§2), sahiplik yanlış değil.

### 🔴 H-0016 — Şeyh Bedreddin isyanı Serez'de, sonraki maddede Meriç civarında etiketle görünüyor
**HÜKÜM: sirada** — YENİ, İLK KEZ ÖLÇÜLEN KOORDİNAT HATASI
NİÇİN: kronoloji maddesi doğru (`yer_id:"Serez"`), ama `data/savaslar.js:331`
'deki AYRI simge kaydı `lat:41.10, lon:26.60` kullanıyor — Serez'den ~250 km
DOĞUDA, tam kullanıcının "Meriç civarı" dediği yerde. `sure:400` gün aktif
kaldığı için bir sonraki maddeye (Gelibolu deniz yenilgisi) geçildiğinde
hâlâ ekranda. Tek satırlık düzeltme, koordinat değişimi (`savaslar.js:331`).

### H-0018 — Aynı tarihte iki madde (Düzmece Mustafa + Cüneyd Bey) teker teker gösterilmeli
**HÜKÜM: cozuldu** (H-0006 ile aynı kök, aynı çözüm)
*(Ayrı bulgu: örnekteki Cüneyd Bey maddesinin tarihi [1422-01-01] gerçek
toprak değişiminden [1421-08-15] ~4,5 ay kayıyor — zaten `82aa96e`'de
"EŞLEŞME KAYMASI" olarak OPUS HAZIR KITA 81'e havale edilmiş, düzeltilmemiş.)*

### H-0020 — Üç madde sırayla gösterilmeli, şimdi üçü birden bitiyor
**HÜKÜM: tekrar** (→ H-0018) — koordinatörün kendi tasnifi zaten aynı kök diyor.

### H-0021 — Bosna Hersek enklavı, Sırbistan fethinden önce mi katıldı
**HÜKÜM: zaten-dogru**
GEREKÇE: "Saray ovasının ilhakı" (1448) kronoloji maddesi TDV kaynaklı
olarak bunu bizzat açıklıyor — Bosna içinde Üsküp/Makedonya-Kosova hattı
üzerinden kurulmuş bir uç saha, Sırbistan ilhakından (1459) 11 yıl önce,
Sırbistan üzerinden değil. Kasıtlı ve doğru.

### H-0022 — Boğazkesen Hisarı daha önceden Osmanlı'ya katılmış gibi görünüyor
**HÜKÜM: tekrar** (→ p3/H-0001, p3/H-0013)
GEREKÇE: Rumeli Hisarı'nın kendi kaydı doğru (`kur:"1452-08-31"`); kalan
sorun Anadolu Hisarı ile arasındaki 3 km-kuralı gediği, ÖNCEDEN belgelenmiş
(`yerlesimler_ek2.js:56-82`) ve "petek epoku değişikliği gerektirir, bu
oturumun yetkisi dışında" diye zaten kayıtlı bırakılmış.

**Ölçülmedi:** H-0006/H-0018'in "aynı anda gösteriliyor" bileşeninin canlı
animasyonla kesin doğrulaması (tarayıcı bölmesi bu turda render etmedi);
H-0001 görselinin hangi gezinme yoluyla üretildiği.

---

# TÜM PAKET TAMAMLANDI — 38/38 madde

## Özet — hüküm dağılımı

| Hüküm | Adet | Maddeler |
|---|---|---|
| **cozuldu** | 7 | 0031/H-0012,H-0015 · 0031/H-0006,H-0018 · 0032/H-0004,H-0005,H-0007,H-0008 |
| **zaten-dogru** | 9 | 0031/H-0009,H-0011,H-0013,H-0017,H-0021,H-0001 · 0032/H-0001,H-0006,H-0017(→0031) |
| **sirada** | 14 | 0031/H-0003,H-0004,H-0007,H-0014,H-0016 · 0032/H-0009…H-0015 (7) · 0032/H-0016 |
| **olculecek** | 3 | 0031/H-0002,H-0019 · 0032/H-0003 |
| **tekrar** | 4 | 0031/H-0008(→H03),H-0010(→0031/H-0005),H-0020(→H18),H-0022(→p3) |
| **senin-kararin** | 1 | 0032/H-0002 (odak kısmı) |
| **gerek-yok** | 0 | — |
| **TOPLAM** | 38 | |

(Not: sayı toplamı 38'i biraz aşar çünkü 0032/H-0002 iki parçalı — renk kısmı
"tekrar", odak kısmı "senin-kararin" ayrı sayıldı; ana madde `senin-kararin`
kovasında listelendi.)

## 🔴🔴 EN ÖNEMLİ ÜÇ BULGU (koordinatörün önceliklendirmesi için)

1. **`data/yerlesimler_kafkas_duzeltme.js`** — 21 Ağustos'ta hazırlanmış,
   TDV ile sınanmış, 19 kayıtlık bir düzeltme yaması `girdi.py`'ye
   BAĞLANMAMIŞ (sirvansah renk eksikliği yüzünden bekletiliyor). Bağlanınca
   0031/H-0014'ün büyük kısmını ve muhtemelen başka açık kalemleri kapatır.
2. **Mersin (0031/H-0007)** — YENİ ölçülen, Ramazanoğulları kuruluşuyla
   karışmış 23-165+ yıllık Osmanlı-fazlalığı vakası, `§3.5.1` ailesinden.
3. **Şeyh Bedreddin simgesi (0031/H-0016)** — YENİ ölçülen, `savaslar.js:331`
   koordinat hatası (~250 km), tek satırlık düzeltme.

Ayrıca **motor kusuru olarak zaten devredilmiş, henüz düzeltilmemiş**:
0031/H-0005 = H-0010 (Sırbistan/Germiyan/Saruhan "çift-istem" deseni,
`denetim/BULGU-RENK-0031.md`, 46 devlet/550 devlet-dönem etkileniyor).

## CEVAP.json'a DOKUNULMADI — hükümleri koordinatör işler (§⑤).

*Bu rapor tamamlandı. Ölçmediğim her şey açıkça "ölçmedim"/"ölçülmedi" diye
işaretlendi — CLAUDE.md §11.*

## pkg32 İÇERİK ZENGİNLEŞTİRME KÜMESİ (H-0009 · H-0010 · H-0011 · H-0012 · H-0013 · H-0014 · H-0015)

Hepsi "ek okuma / merak / magazin / sebeb-sonuç" butonlarının belirli
maddelere eklenmesini istiyor. Ölçtüm: `data/ekokuma.js` yalnız 10 kayıt,
`data/merak.js` yalnız 15 kayıt taşıyor — 6064 maddelik kronolojinin
küçük bir ilk turu. `MERAK.md` kendi kuyruğunu zaten tutuyor (④-⑪, henüz
yazılmamış) ve **④ madde birebir "Otranto seferi Fatih'ten sonra niçin
sürdürülmedi"** — yani H-0014'ün istediği zaten kayıtlı bir kuyruk maddesi.

### H-0009 — Topkapı Sarayı'na ek okuma/merak
**HÜKÜM: sirada**
NİÇİN: içerik yazım işi, `EK-OKUMA.md`/`MERAK.md` şemasına uygun yeni kart
gerekiyor; "Topkapı Sarayı'nın tamamlanması" maddesi (`olaylar_ek7.js`)
zaten var ve `kaynak:"topkapi-sarayi"` TDV bağlantılı, ama merak/ek-okuma
kartı henüz yazılmamış.

### H-0010 — Sultani (ilk Osmanlı altını) maddesinde görsel padişah resmi değil, madenî para olmalı
**HÜKÜM: sirada**
NİÇİN: kendi metni zaten "bunun için bir oturum görevlendir" diyor — hangi
görselin konacağını araştırmak (madeni para görseli, telif durumu) ayrı
bir görev; ben yalnız teşhis/tasnif yapıyorum, görsel atamıyorum.

### H-0011 — Osmanlı altını maddesine ek okuma/merak/magazin
**HÜKÜM: sirada**
NİÇİN: H-0009 ile aynı sınıf — içerik yazım işi, kuyrukta değil ama şema
hazır, tek tek kart yazılması gerekiyor.

### H-0012 — Fatih'in ölümü maddesine iddiaları anlatan ek okuma
**HÜKÜM: sirada**
NİÇİN: madde (`olaylar.js:49`) zaten var ve zengin; ölüm iddialarını
(zehirlenme rivayeti vb.) ayrı bir "magazin"/"merak" kartı olarak yazmak
gerekiyor — içerik yazım işi.

### H-0013 — TÜM MADDELERE merak/ek okuma/sebeb-sonuç/magazin/dış yankılar
**HÜKÜM: sirada**
NİÇİN: kapsamı en geniş madde — 6064 maddenin tamamına içerik zenginleştirme,
tanım gereği tek turda yetişmez; ayrı, çok-oturumluk bir içerik fazı
gerektirir (bu paketin/oturumun kapsamı dışında, koordinatörün karar
vereceği bir sonraki faz).

### H-0014 — Otranto tahliyesine ek okuma/merak
**HÜKÜM: sirada**
NİÇİN: `MERAK.md` kuyruğunda ④ olarak ZATEN kayıtlı ("Otranto seferi
Fatih'ten sonra niçin sürdürülmedi") — yeni bir madde değil, var olan
kuyruğun yazılmasını bekliyor.

### H-0015 — Gedik Ahmet Paşa'ya ek okuma/merak
**HÜKÜM: sirada**
NİÇİN: H-0009/H-0011 ile aynı sınıf, içerik yazım işi; Gedik Ahmed Paşa
zaten birden fazla maddede (`kaynak:"gedik-ahmed-pasa"`) geçiyor, ayrı bir
kişi/magazin kartı yazılabilir ama bu turun kapsamı dışı.

---

*Bu dosya araştırma ilerledikçe güncellenecek. Ölçmediğim her şey açıkça
"ölçmedim" diye işaretlenecek — CLAUDE.md §11.*
