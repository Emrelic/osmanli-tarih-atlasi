# BULGU — PAKET 0033-0034 (Gece Nöbeti Tasnifi)

**Oturum:** PAKET 0033-0034 · sevk: ORHANGAZİ · 27 Ağustos 2026, gece
**Kapsam:** `parti-emrelic-0033` (21 madde) + `parti-emrelic-0034` (45 madde) = 66 madde
**Şartname:** `oturumlar/PAKET-TASNIF.md`

> ⚠️ Bu gece paralel olarak GECE①/GECE② (Taralı Alan Kök, Değişmez 7 Enklav,
> Çöl Boyama, Hoy yaması) işleri de bitti ve bir üretim koşusu 03:13'te
> başladı (~06:45 bitecek). Aşağıdaki "cozuldu" işaretli maddelerin BİR
> KISMI veriye zaten girdi ama **yayına henüz girmedi** — koşu bitene
> kadar canlı harita eski (r3410) kalır. Bu bir kusur değil GECİKME
> (`OGRENILENLER` — "çıktı girdinin bir tur gerisindedir").

---

## ÖZET — SAYIYLA

```
66 madde okundu · 9 görsel açıldı (30'dan fazlası metinden çözüldü)
cozuldu        : 6   (bu gece giderildi, koşu bekliyor VEYA önceki oturumdan)
zaten-dogru    : 11  (veri/harita zaten doğru, şikayet yanlış varsayıma dayanıyor)
tekrar         : 3   (aynı soru daha önce soruldu/kapandı, referans verildi)
sirada         : 34  (gerçek iş; 22'si "ek okuma/magazin" İÇERİK TALEBİ)
olculecek      : 6   (görsel/veri yetmedi, ayrı ölçüm gerekiyor)
senin-kararin  : 0
gerçek kusur (yeni, bu oturumda bulunan) : 1  → H-0001 (0033) Erzincan tarihi
```

---

# PARTİ 0033 — 21 madde

## H-0001 — Kemah Safevilere mi aitti, enklav görünüyor
**Hüküm: GERÇEK KUSUR (yeni)**

Görsel (1502-01-01) Kemah'ı, çevresi (Erzincan · Şebinkarahisar · Kelkit ·
Trabzon) koyu "Osmanlı" renginde iken küçük bir Safevî adası olarak
gösteriyor. Veri sorgulandı (`girdi.yukle()`):

```
Kemah        s: akkoyunlu ...→1502-01-01 → safevi →1515-05-19 → OSMANLI
Erzincan     d: 1473-08-11 → 1923-10-29   ("savaş", yani Otlukbeli)
Şebinkarahisar d: 1473-08-11 → 1923-10-29  (aynı)
Kelkit       d: 1473-08-11 → 1923-10-29    (aynı)
```

TDV okundu (gövde, `§4`):
```
erzincan  : "1473 Otlukbeli sonrası AKKOYUNLU sınırları içinde kaldı ·
             1500-1512 Safevî Şah İsmail hakimiyeti (Nûr Ali Halife vali) ·
             1514 Çaldıran seferi sırasında SAVAŞSIZ Osmanlı'ya girdi."
kemah     : "1473-1510'lar Akkoyunlu, sonra Safevî · 1515 Bıyıklı Mehmed
             Paşa kuşatmasıyla Osmanlı'ya geçti." (atlasla uyumlu)
sebinkarahisar : "1473 Otlukbeli'de FATİH bizzat aldı, ARADA SAFEVÎ YOK."
             (atlasla uyumlu — Şebinkarahisar'ın 1473 tarihi DOĞRU)
```

⇒ **Erzincan'ın `d:` başlangıcı 41 yıl erken.** TDV açıkça Akkoyunlu →
Safevî (1500-1512) → Osmanlı (1514, savaşsız) sırası veriyor; veri
Otlukbeli'yi (1473) doğrudan Osmanlı ilhakı sanmış — oysa Otlukbeli bir
SAVAŞ ZAFERİdir, tüm bölgenin ilhakı değil (Şebinkarahisar ayrı, orada
gerçekten ilhak olmuş; Erzincan'da olmamış). Kemah'ın "enklav" görünmesinin
KÖKÜ bu: Kemah doğru tarihte Safevî'ye geçiyor ama komşusu Erzincan yanlışlıkla
41 yıl önceden Osmanlı görünüyor, aradaki fark bir "delik" gibi kalıyor.

**Düzeltme önerisi (uygulamadım, `data/*.js` benim dosyam değil):**
```
Erzincan  s: ...→1473-08-11 akkoyunlu (DEĞİŞMEDİ)
          + yeni pencere: 1473-08-11 → ~1500-01-01  akkoyunlu (SÜRER)
          + yeni pencere: ~1500-01-01 → 1514-XX-XX  safevi
          d: 1514-XX-XX → 1923-10-29  (y: yok — TDV "savaşsız" diyor)
```
🔴 Kesin Osmanlı'ya geçiş GÜNÜ TDV'de belirsiz ("Çaldıran seferi sırasında"
— Çaldıran savaşı 23 Ağustos 1514). Atlasın kendi `Çaldıran` (şehir) kaydı
Safevî'ye 1514-09-06'da geçiyor; Nahçıvan/Ahar zinciri 1585 kullanıyor
farklı bir olay. **Öneri: Erzincan'ın Osmanlı'ya geçiş günü Çaldıran savaşı
sonrası (1514-08-23'ten hemen sonra, örn. 1514-09-01) olarak yazılsın —
TDV "savaşsız" diyor, `y:` alanı boş bırakılmalı.**

Kelkit'in Şebinkarahisar ile aynı günü paylaşması (`1473-08-11`) TDV ile
tek başına doğrulanamadı (TDV'de Kelkit maddesi yetersiz) ama coğrafî
olarak Şebinkarahisar'a çok yakın ve aynı sancak — muhtemelen doğru,
**ölçmedim, kesin değil**.

📌 **Aynı kalıp başka yerde tekrarlanmış olabilir mi?** Ölçmedim — `1473-08-11`
tarihini taşıyan yalnız bu üç kayıt var (grep ile doğrulandı), yani kalıp
YAYGIN DEĞİL, izole bir hata.

---

## H-0002 — Bu boşluğun sebebi
**Hüküm: sirada** (gerçek iş, kimlik hazır, veri eksik)

Görsel 1502-03-01, 45.84–48.33N / 46.14–47.63E (aşağı İdil/Astrahan
civarı — başlık "Kırım Hanlığı'nın yükselişi" kronoloji bağlamı, ama harita
kutusu Kırım'da DEĞİL, Hazar'ın kuzeybatısında). Bu kutuda yalnız **1 nokta**
var (`Yenotayevsk`, kur:1741 — yani 1502'de henüz yok). Boşluk gerçek: bu
bölge 1502'de Altın Orda'nın dağılmasından sonra **Astarhan Hanlığı**
toprağıdır ve atlasta yerleşim noktası yok.

**Zaten kayıtlı borç bulundu** — `data/devletler.js:2133` (astarhan-hanligi
özeti) şunu diyor: *"Harita alanı eklendi; eksik olan yalnız renk
(BOYALAR'da yok) ve yerleşimler noktalarının `d:` değeri."* Yani kimlik
(devlet dizini kaydı) VAR, ama hiçbir yerleşim noktası ona `s:` ile
bağlanmamış → bölge boyanmıyor. Aynı borç `yerlesimler_ek22.js:77`'de de
(Parti 22, 7 Ağustos) not düşülmüş.

⇒ **H-0009 ile AYNI SINIFTAN** (aşağı bak) — steppe/hanlık bölgesinde
nokta yoğunluğu eksik. Öneri: bir nokta partisi Astarhan Hanlığı çekirdeğine
(Astrahan şehri + 2-3 komşu) ve rengine odaklanmalı.

---

## H-0003 — İran'daki benekli yapı, Akkoyunlu enklavları, etiketsiz benekler
**Hüküm: sirada** (zaten teşhis edilmiş, koordinat araştırması bekliyor)

Bu soru bu gece **başka bir oturum tarafından TAM olarak cevaplanmış**:
`denetim/BULGU-ENKLAV-SORGU.md` EK bölümü (İran Koridoru, H-0089 sevkiyle):
> *"Merağa · Miyandoab · Sulduz · Dizmâr · Sarukurgân · Saidâbâd — TDV
> 1593'te Tebriz eyaletinin livâları sayıyor, VERİDE HİÇ KAYIT YOK ⇒
> Emre'nin gördüğü 'kırmızı dil'/benek BURADAN doğuyor (nokta olmayan
> bölge en yakın peteğe emiliyor, §2)."*

Yani "İran diye görünen ama etiketi olmayan benekler" = bu altı nokta
eksikliği. Koordinat araştırması `data/yer_yama_iran.js`'te hazırlık
aşamasında (bkz GECE② raporu). **Hoy bu gece düzeltildi** (Osmanlı dönemi
1585-1603 eklendi), altısı hâlâ eksik — bu 0033-H-0003 ve 0034-H-0001
(tekrar, aşağı bak) için ortak açık kalem.

---

## H-0004 — Akkoyunlu'nun koca ülkesi bir sonraki maddede düşmüş, ne olacak
**Hüküm: zaten-dogru**

Necef · Bağdat · Kerbelâ · Musul · Çaldıran · Iğdır · Gümrü · Başkale ·
Erbil · Dizful(yok) · Basra · Ahvaz · Halepçe'nin hepsi sorgulandı: hepsi
`s:` dizisinde Akkoyunlu'dan **Safevî'ye doğru tarihte geçiyor**
(1508 Necef/Bağdat/Erbil/Halepçe/Musul-benzeri · 1514 Çaldıran/Başkale ·
1534 Iğdır/Gümrü'ye kadar akkoyunlu-sonrası-safevi zinciri · 1546 Basra).
"Koca yeşil ülke" ekranda kalmıyor — her şehir kendi tarihinde devralınıyor.
Şah İsmail'in Diyarbekir seferiyle Akkoyunlu'nun SON merkezleri düşmesi ile
bu şehirlerin Safevî'ye geçişi **aynı tarihsel pencerede** (1501-1508) ve
tutarlı.

---

## H-0005 — Bağdat'ın Safeviye geçişi ile bir sürü benek kalktı, gerçek mi
**Hüküm: zaten-dogru**

H-0004 ile aynı veri kümesi: Bağdat'ın (ve komşularının) Akkoyunlu→Safevî
geçişi (1508) TDV'nin bilinen kronolojisiyle (Şah İsmail'in Irak-ı Arab
seferi) uyumlu. "Beneklerin kalkması" arızi bir görsel yan etki değil,
**doğru bir düzeltmenin doğal sonucu** — aynı `s:` zincirini paylaşan
komşu kayıtlar aynı anda tutarlı hale geliyor.

---

## H-0006, H-0007, H-0008, H-0010 — Çağatay/Kazak/Sibir/Kandehar "yuvarlak alan", dağa-tepeye dayanmıyor
**Hüküm: sirada** (bilinen kısıt — nokta yoğunluğu)

Dördü de aynı kalıp: bozkır/uzak coğrafyalarda **tek nokta** (veya çok
seyrek nokta) çevresinde neredeyse dairesel bir petek oluşuyor, çünkü
Voronoi sınırını komşu bir noktayla paylaşmıyor ve topografya yaslaması
(dağ/nehir) yalnız yakınında GERÇEK bir sırt/nehir varsa iş görüyor.
Bu, `CLAUDE.md §2`'nin bilinen davranışı — "noktası olmayan bölge en yakın
peteğe emilir" kuralının **tersi belirtisi**: nokta VAR ama TEK, o yüzden
petek doğal sınır bulamıyor.

Emre'nin kendi H-0010 metni zaten doğru çerçeveyi çiziyor: *"bu tip
yerlerde dağlık alanlarda eğer tarihi kayıtlar var ise yerleşim yerlerinin
sayısı artırılabilir... ama kayıt yok ise ellemeyelim."* ⇒ Çare VERİ
(Orta Asya/Sibirya hanlıklarına ek yerleşim noktası), motor değil. Kayıt
bulunursa eklenir; bulunamazsa görünüm KALIR ve bu bir hata sayılmaz.
**Öneri: bir "bozkır nokta yoğunluğu" partisi** (Çağatay/Kazak/Sibir/
Kandehar merkezleri) açılmalı.

---

## H-0009 — Bu bölgedeki boş alanlarda hiç devlet otoritesi yok mu (Nogay Ordası ↔ Buhara Hanlığı arası)
**Hüküm: sirada** (Emre'nin kendi önerisi: oturum görevlendir)

Görsel (1509-09-14, 38-49.6N/49.6-61.3E): Nogay Ordası (turuncu, kuzey) ile
Buhara Hanlığı (mor, güney) arasında **kocaman beyaz/boş bir şerit** —
Aral Gölü/Üstyurt Platosu/Kızılkum civarı, hiçbir devlet rengi yok.
H-0002 ile AYNI COĞRAFİ AİLEDEN (steppe/hanlık nokta eksikliği) ama farklı
bölge. Bu, kasıtlı bir "sahipsiz" kaydı DEĞİL (Değişmez 1'in bilinen 214
kaydı arasında yok) — muhtemelen basit nokta eksikliği. **Emre'nin kendi
önerisi doğru: dedicated bir oturum (örn. "NOKTA BOZKIR-2" ya da "ARAL-ÜSTYURT")
görevlendirilmeli**, Hive/Ürgenç Hanlığı ve Karakalpak bölgesi de dahil
edilerek.

---

## H-0011 — Piri Reis + ek okuma/magazin (İÇERİK TALEBİ)
**Hüküm: sirada** — kusur değil, içerik talebi. Şartname §④ kovası:
Ek okuma/kimdir/magazin başlıkları bir sonraki İÇERİK partisine.

---

## H-0012 — Pergelle çölde alan çizdirirken batı tarafında cetvelle düz çizgi
**Hüküm: zaten-dogru**

Bu, harita PENCERESİNİN (BOLGE kutusu, `uret_petek.py`) kenarıdır —
`CLAUDE.md §6`: "Kutu yalnız kapsanan bölge için ve kademe kademe açılır."
Petek pencerenin dışına taşamayacağı için dairesel bir petek pencere
sınırına çarpınca düz kesilir. Bu bir veri hatası değil, **kapsam
genişledikçe kendiliğinden kalkacak** bir sınır çizgisi.
⚠️ Hangi devletin/görselin tam olarak bu olduğunu görselden kesin
ayıramadım (0033'te H-0012 ve H-0021 çok benzer görseller içeriyor) —
**eğer bahsedilen Libya/Fizan bölgesiyse H-0021'e bakınız (ayrı, daha
büyük bir kusur orada var).**

---

## H-0013 — Güneybatıdaki küçük boyamanın sebebi (Songhay/Ümmürrebi)
**Hüküm: olculecek**

Görsel (1513-09-01, Songhay İmparatorluğu) devasa bir "pergel" dairesi
gösteriyor (H-0006/7/8/10 ailesinden — tek nokta, geniş boş bölge). Ama
metin özellikle *"güney batısındaki KÜÇÜK boyama"*dan bahsediyor; görselin
sol-alt köşesinde ayrı, küçük bir yeşil parça var ama sıkıştırılmış
görüntüde net ayırt edilemedi. **Ölçmedim** — canlı haritada 1513-09-01,
yaklaşık 13.9-18.3N/2.2-1.8W civarını daha büyük zoom'da açıp o küçük
parçanın hangi yerleşime ait olduğu tespit edilmeli.

---

## H-0014 — Kanem-Bornu sınırları ayrı kopuk bölge (birleşik değil)
**Hüküm: sirada** (nokta yoğunluğu — ölçüldü, kesin teşhis)

Veri sorgulandı: Kanem-Bornu İmparatorluğu'nun atlasta **yalnızca 2
noktası var**: `Mao (Kanem)` (13.996,15.313) ve `Birni N'gazargamu`
(12.35,10.683) — aralarında **~500 km**. Görsel bunu birebir doğruluyor:
iki ayrı "pergel" dairesi, aralarında ince bir şerit. Bu, imparatorluğun
gerçekten kopuk olmasından değil, **iki nokta arasının açık olmasından**
kaynaklanıyor. **Öneri: Çad Gölü çevresine (başkent Njimi, ya da bilinen
başka bir Kanem-Bornu yerleşimi) 1-2 ara nokta eklenmeli** — bu tek başına
görseli birleştirir.

---

## H-0015, H-0016 — Nusaybin/Derik/Silopi Osmanlı'ya katılmış ama kronoloji maddesi yok, enklav; önceki topraklar alınmış mı
**Hüküm: muhtemelen zaten-dogru — tam ölçülmedi**

Üçü de veri: `s: akkoyunlu →1515-01-01→ d: OSMANLI` (Nusaybin, Derik/Malikiye,
Silopi) — üçü AYNI GÜNÜ paylaşıyor, yani muhtemelen tek bir sefer/olayın
parçası (1514 Çaldıran sonrası bölgesel teslim dalgası, `§3.5` "bölgesel
teslim gecikmeleri aylar mertebesinde meşrudur" kuralına uygun bir kalıp).
`Değişmez 7` (Enklav Sorgusu, bu gece koşuyor) listesinde bu üç kaydın adı
**yok** — yani bileşen testi bunları "ada" saymamış (komşularıyla
bağlantılı, >5 bileşen). Bu, enklav olmadıklarının dolaylı kanıtı.
🔴 **Ölçmedim:** Değişmez 2 (kronoloji senkronu) bu üçünün `1515-01-01`
kırılmasını AYRI bir madde ile mi karşılıyor yoksa yalnız genel "Anadolu'nun
doğusu fethedildi" gibi geniş bir maddeyle mi — kırılma toplam sayıya
(515, 0 açık) dahilse teknik olarak "maddeli" sayılır ama H-0015'in şikayeti
muhtemelen *"bu üç yer adıyla anılan özel bir madde istiyorum"* anlamında.
**Öneri: sirada — üç şehir için (ya da bölgesel tek madde olarak) özel bir
kronoloji maddesi yazılsın, en azından `yer_id` bağlantısıyla.**

---

## H-0017 — Üçgen bölge kuzeye yönelen (Tiflis?), Kafkas dağlarını nasıl aşıyor
**Hüküm: sirada** (nokta yoğunluğu — Kafkas kuzey yamacı)

Görsel (1515-01-01) "GÜRCİSTAN" (pembe) etiketinin Kafkas sırtının hem
güneyinde (Tiflis, Zagem/Kaheti) hem KUZEYİNDE (Kabartay'a doğru dar bir
üçgen) uzandığını gösteriyor. Veri: `gurcistan` kimliği TEK, KESİNTİSİZ bir
`s:` bloğu (1281-1801) — Kartli/Kaheti/İmereti/Samtskhe gibi tarihsel alt
krallıklara BÖLÜNMEMİŞ. Kafkas sırtının kuzey yamacında (Osetya/Çerkes
bölgesi) hiç yerleşim noktası olmadığı için Gürcistan'a bağlı en yakın
nokta (muhtemelen Tiflis ya da Ahıska) dağı "atlayarak" o boşluğu dolduruyor
— klasik §2 emilmesi, ama bu kez bir SIRADAĞ'ı atlayarak.

**Öneri: sirada** — (a) Kafkas kuzey yamacına (Osetya geçitleri civarı)
nokta eklenmeli, VEYA (b) `gurcistan` kimliği zaman içinde alt-krallıklara
bölünmeli (KAFKAS KRONOLOJİ oturumlarının kapsamına giren daha büyük bir
tasarım kararı — bkz H-0011/H-0017/H-0023, 0034).

---

## H-0018 — Tebriz harekâtı güzergâhı (Yavuz Sultan Selim) kronolojik sıralansın
**Hüküm: sirada** — Emre'nin kendi isteği: "bunu araştıracak oturum aç
gerekirse." Bu, tek bir veri düzeltmesi değil, **çok kaynaklı bir kronoloji
araştırması** (Çaldıran seferi güzergâhı: hangi kale ne zaman düştü/pas
geçildi). Mevcut TİMURLU/SAFEVİ KRONOLOJİ tarzı dedicated bir oturuma
uygun kapsam. **Öneri: "ÇALDIRAN SEFERİ GÜZERGAHI" adıyla ayrı bir oturum
açılsın.**

---

## H-0019 — Bu arada hiç yerleşim yok, bölge boyanacak mı
**Hüküm: olculecek**

Görsel (1517-07-12, Tebük-Medine civarı) çerçevede AÇIKÇA boş/uncoloured
bir alan göstermiyor — Hicaz bölgesi (koyu kırmızı/pembe) dolu görünüyor.
Muhtemelen kastedilen, kadrajın sağındaki açık bej/kum rengi iç çöl
(Nefûd benzeri) — bu `Değişmez 1`in bilinen 214 kasıtlı-sahipsiz kaydından
biri olabilir (Sahra/Rub'ul Hâlî tipi). **Ölçmedim — hangi koordinatın
kastedildiği net değil, canlı haritada aynı tarih/koordinatta tekrar
bakılmalı.**

---

## H-0020 — Portekizliler Bahreyn'i almış ama harita boyanmamış
**Hüküm: sirada** (gerçek eksik)

Veri: `Manama (Bahreyn)` tek kayıt taşıyor: `s: 1861-05-31→1923 ingiltere`.
**1521-1602 Portekiz, 1602-1717 Safevî/Hürmüz vassalı, 1717-1783 Umman/
Yarub hanedanı, 1783'ten Utub/Âl Halîfe** — bu dört yüzyıllık zincirin
TAMAMI eksik. Bu bir tasarım kararı değil, **araştırılmamış bir kayıt**.
**Öneri: TDV `bahreyn` maddesi okunup zincir yazılsın** (dedicated araştırma,
tek oturumluk küçük bir iş).

---

## H-0021 — Çalu/Gat/Murzuk/Zilla civarında büyük toprağın anlamsız boyanması
**Hüküm: sirada** (KAYITLI BORÇ — bu gece ölçüldü, motor kararı Emre'de bekliyor)

Bu, bu geceki **ÇÖL BOYAMA** dosyasıyla (`denetim/BULGU-COL-BOYAMA.md`)
BİREBİR aynı kusur — Libya kümesi (Fizan/Murzuk, Serîr, Nûbe/Libya çölü
vb.), toplam **568.531 km²** (Emre'nin G1-G5 kutularının geri kalanı,
Sudan tarafı G1 bu gece kapatıldı — Meşra er-Rek yaması). Kök teşhis edildi
(`GECE① §③` / `M-1320`): dolgu kapısı `v:` (tâbi) noktalardan puan
topluyor ama kazananı hep "OSMANLI" (doğrudan) yazıyor; motora bir
"tâbi kademesi" eklenmesi gerekiyor. **Bu bir VERİ hatası değil MOTOR
hatası** ve `arac/uret_petek.py` benim dosyam değil. Karar Emre'de
bekliyor (üç seçenek M-1320'de sunuldu: tâbi kademesi / dolgu kademesi /
dokunma). **Duplicate: 0034-H-0028 aynı kusur, aynı bölge.**

---

# PARTİ 0034 — 45 madde

## H-0001 — Üç İran beneği
**Hüküm: tekrar** — 0033-H-0003 ile AYNI soru, aynı cevap (İran koridoru
kayıp noktalar: Merağa/Miyandoab/Sulduz/Dizmâr/Sarukurgân/Saidâbâd).
Bkz `denetim/BULGU-ENKLAV-SORGU.md` EK bölümü.

## H-0002 — Halepçe'nin enklav görünmesi
**Hüküm: olculecek**

Halepçe verisi Necef/Bağdat/Musul/Erbil bloğuyla AYNI tarihte hareket
ediyor (1508 Safevî, 1534-1623 Osmanlı, 1638-1917 Osmanlı) ve H-0007/8'in
görsellerinde (1554-08-22) **Şehrizor ile aynı koyu/Osmanlı blokta,
kopuk değil** görünüyor. Ama H-0002'nin kendi görseli açılmadı — hangi
TARİHTE enklav göründüğü net değil. **Ölçmedim.** Muhtemelen zaten-doğru
ama teyit için kendi görseli (veya canlı harita, belirtilen tarihte)
açılmalı.

## H-0003, H-0004 — Renk çakışması (dünya geneli, iki renk üst üste)
**Hüküm: cozuldu**

Bu gece (`7b92b47` "UC RENK GERILEMESI KAPATILDI" + `1999259`
"gilan-kiya↔muzafferi KAPATILDI") **dünya geneli** taranıp kapatıldı:
`renk_olc` tam koşu sonucu **0 görünmez · 0 ÇAKIŞMA · 0 aynı-hex**. H-0004'ün
istediği "dünya genelinde tespit eden oturum" zaten VAR (`arac/renk_olc.py`)
ve her veri değişikliğinden sonra koşuluyor (`CLAUDE.md §9`). Yayına
girmesi koşuyu (03:13-06:45) bekliyor — kayıtlı gecikme, kusur değil.

## H-0005 — Basra alınmış, Abadan/Hüveyze/Ahvaz alınmamış mı
**Hüküm: zaten-dogru (kısmen) + olculecek (Abadan/Hüveyze)**

`Ahvaz`: veride HİÇBİR ZAMAN `d:` (Osmanlı) yok, sürekli Safevî→Afşar→
Zend→Kaçar — bu **tarihsel olarak doğru**: Ahvaz (Arabistan/Huzistan
bölgesi) Osmanlı'nın değil, Basra'nın komşusu olarak hep İran'a bağlı
kaldı. `Basra`: `d: 1546-1776 (vassal) · 1779-1914 (doğrudan)` — doğru.
**"Abadan" ve "Hüveyze" atlasta hiç yok** (0 kayıt) — bunlar gerçekten
eksik mi yoksa zaten kapsam dışı mı **ölçmedim**; Hüveyze tarihsel olarak
bağımsız bir Arap emirliğiydi (Müşa'şa'iyye), ayrı bir kimlik gerektirebilir.

## H-0006 — Van fethedilmiş, Özalp/Başkale/Çaldıran fethedilmemiş mi
**Hüküm: cozuldu** (önceki oturumdan — FERHAD PAŞA HATTI)

`data/yerlesimler_ek_ferhadpasa.js` tam bunu araştırmış: Van+Özalp
`1548-08-25` (Van'ın fethi), Başkale/Kotur/Mahmudi/Çölemerik/Bargiri
`1639-05-17` (Kasr-ı Şirin) — TDV `van`/`hakkari`/`maku` maddeleriyle
doğrulanmış, veri BUNU YANSITIYOR (kendi sorgumla teyit ettim: Başkale ve
Çaldıran(şehir) ikisi de `s: safevi →1639-05-17→ d: OSMANLI`). Sınır
bölgesi 91 yıl boyunca gerçekten ikiye bölünmüş durumda kaldı — bu bir
hata değil, tarihsel gerçek.

## H-0007, H-0008 — Şehrizor ilhak edildi mi, hangi madde doğru
**Hüküm: zaten-dogru**

İki görsel İKİ FARKLI TARİH: 1554-01-01 (ilhaktan 8 ay ÖNCE, hâlâ Safevî/
açık renk) ve 1554-08-22 (tam ilhak günü, Osmanlı/koyu renk). Veri:
`Şehrizor d: 1554-08-22→1623-11-28, sonra 1638-12-25→1918`. İki madde
("ilhakı ve eyalet kurulması" / "fethi — Zalm Kalesi'nin alınışı") ÇELİŞMİYOR,
aynı fetih sürecinin iki farklı anını (öncesi/kendisi) anlatıyor. Aradaki
1623-1638 Safevî dönemi (yeniden kayıp) de veride var — "daha önce ilhak
şimdi alındı" ifadesi muhtemelen bu İKİNCİ fethi (1638) işaret ediyor,
o da doğru.

## H-0009 — Olayın harita gösterimi yok, yaprak kıpırdamıyor
**Hüküm: olculecek** — görsel açılmadı, hangi "olay/yaprak animasyonu"
kastedildiği net değil (muhtemelen bir savaş/sefer okunun ekranda
hareketlenmemesi). **Ölçmedim.**

## H-0010 — Anlaşma maddelerine "antlaşma metni" butonu (İÇERİK/ARAYÜZ TALEBİ)
**Hüküm: sirada** — kusur değil, standart bir arayüz özelliği talebi.
Oturum 1 (yazılım/arayüz) kapsamına girer.

## H-0011, H-0017, H-0023 — Gürcistan iki parça / müstakil mi / Tiflis-Gence kaybı sonrası
**Hüküm: sirada** (H-0017/0033 ile birleşik — tasarım sorusu)

Üçü de aynı kökten: `gurcistan` kimliği TEK ve KESİNTİSİZ (1281-1801),
tarihsel Kartli/Kaheti/İmereti/Samtskhe bölünmesini modellemiyor. Bu,
"iki parça görünme" (H-0011), "müstakil mi" (H-0017) ve "Tiflis/Gence
kaybı sonrası ne oldu" (H-0023) sorularının HEPSİNİN kökü. Motor/veri
hatası değil, **bir modelleme sadeleştirmesi** — KAFKAS KRONOLOJİ
oturumlarının kapsamına giren daha büyük bir karar (Gürcistan'ı alt
krallıklara bölmek mi, tek kimlik olarak mı bırakmak). **Öneri: sirada,
koordinatör kararı gerektirir** (senin-kararin sınırında ama gerekçeli iş
listesi net, o yüzden sirada).

## H-0012 — Macaristan Budin ilhakı sonrası Kanije/Yanıkkale/Eğri'nin akıbeti
**Hüküm: zaten-dogru**

Üçü de veri: Ottoman kaybından sonra DOĞRUDAN `avusturya`'ya geçiyor
(Kanije 1690, Eğri 1687, Yanıkkale 1598) — müstakil/vassal/özerk bir ara
dönem YOK, çünkü bu üç kale gerçekten Habsburg ordusunca yeniden fethedilip
doğrudan Kraliyet Macaristanı'na bağlandı (Erdel'in aksine). Bu tarihsel
olarak doğru bir basitleştirme.

## H-0013, H-0018, H-0021, H-0024, H-0026, H-0027, H-0029…H-0035, H-0038…H-0044 — Ek okuma/magazin/kimdir/tartışma (İÇERİK TALEBİ, 22 madde)
**Hüküm: sirada** — hepsi kusur DEĞİL, İÇERİK/ARAYÜZ genişletme talebi
(Sokollu, Akçe krizi, Kanije savunması, 3. Mehmet, madde başlıkları için
standart "ek okuma" başlık seti, Kuyucu Murad Paşa, Sultanahmet Camii,
1. Ahmet Ekberiyet, 1. Mustafa culüsü/hali, 2. Osman, 4. Murat, Hezarfen/
Lagari/Evliya Çelebi, Deli İbrahim, Katip Çelebi, Kemankeş Mustafa Paşa,
Merzifonlu Kara Mustafa Paşa, Hafız Osman hat sanatı). H-0026 zaten
standart bir "ek okuma" başlık listesi TANIMLIYOR (ek okumalar/merak/
kimdir/magazin/bilimsel-teknik/dış ülke yankıları/şok haberler/tartışma/
sebep-sonuç) — bu liste tek yerde standartlaştırılıp koordinatöre
iletilmeli, sonra İÇERİK oturumuna devredilmeli.

## H-0014 — Büyük Akçe Krizi / Tağşiş, Yeni Dünya gümüşü (İÇERİK TALEBİ)
**Hüküm: sirada** — H-0013/18/... grubuyla aynı kova.

## H-0015 — Şerur/Doğubeyazıt/Maku/Çaldıran/Özalp/Hoy/Merend/Culfa fethedilmeden Nahçıvan/Ordubat fethedilmiş olabilir mi
**Hüküm: cozuldu (ana soru) + sirada (kalan küçük borç)**

Bu, bu geceki **Değişmez 7 Enklav Sorgusu**'nun tam vakası (`denetim/
BULGU-ENKLAV-SORGU.md` EK). Veri: Nahçıvan gerçekten Osmanlı dönemleri
taşıyor (1585-1603, 1725-1730) ve TDV ile doğrulanmış; Hoy/Merend/Culfa/
Şerur/Mâku kesintisiz Safevî kalıyor (Hoy bu gece kısmen düzeltildi: artık
1585-1603 Osmanlı dönemi VAR). ⇒ Bu bir veri hatası değil, **Osmanlı'nın
sefer güzergâhında yalnız düğüm noktalarını (Revan/Nahçıvan/Tebriz)
tutup aradaki köyleri idari olarak devralmaması** — TDV'nin kendi
metniyle doğrulanmış meşru bir "koridor" deseni.
Kalan açık: `Ordubat` atlasta HİÇ YOK (0 kayıt) — küçük bir nokta eksiği,
**sirada**. Ayrıca Merağa/Miyandoab/Sulduz altılısı da hâlâ eksik
(0033-H-0003 ile aynı, tekrar sayılabilir).

## H-0016 — Ferhat Paşa Antlaşması'na göre toprakları teyit et
**Hüküm: sirada** (kısmen yapılmış, kapsam genişletilmeli)

`data/yerlesimler_ek_ferhadpasa.js` Van eyaletinin DOĞU sancaklarını
(Mahmudi/Kotur/Çölemerik/Bargiri) doğruladı ama kendi notunda diyor ki:
*"Van eyaletinin BATI sancakları (Adilcevaz·Ahlat·Müküs·Hizan) da eksik
ölçüldü ama KAPSAM DIŞI, koordinatöre bildirildi, buraya yazılmadı."*
Ayrıca 1590 antlaşmasının Şirvan/Karabağ/Gence/Tebriz tarafı hiç
taranmadı. **Öneri: sirada, "Ferhat Paşa Antlaşması TAM sınır taraması"
adıyla ayrı ve daha geniş bir oturum.**

## H-0019, H-0025 — Bu şehirler kime aitmiş / Özalp-Başkale çevresi kronoloji
**Hüküm: H-0025 cozuldu (Ferhat Paşa Hattı, bkz H-0006) · H-0019 olculecek**

H-0019'un görseli açılmadı, hangi şehirler kastedildiği net değil —
**ölçmedim.**

## H-0020 — Deli Hasan ayaklanması, kronoloji maddesi yok
**Hüküm: sirada**

`olaylar_ek5.js:217` ("Karayazıcı Abdülhalim ayaklanması") Deli Hasan'ı
YALNIZ bir yan cümlede anıyor: *"hareketi kardeşi Deli Hasan sürdürmüştür."*
Deli Hasan'ın kendi devamı/bastırılması (1603 affı, Bosna beylerbeyiliği)
için AYRI bir madde yok. Haritada ayrı bir "Deli Hasan" bölgesi/işareti
varsa (görsel açılmadı, ölçmedim) bu onun karşılıksız kalan kısmı olabilir.
**Öneri: sirada — Deli Hasan'ın kendi adıyla bir madde eklensin.**

## H-0022, H-0040 — Kronoloji maddelerine göre "ek okuma" başlıkları otomatik önerilsin (ARAYÜZ/İÇERİK TASARIMI)
**Hüküm: sirada** — bu, H-0013 grubunun genelleştirilmiş/otomatikleştirilmiş
hali; ayrı bir tasarım kararı gerektiriyor (madde içeriğine göre 1-5 başlık
öner). Oturum 1 + İÇERİK ortak kapsamı.

## H-0028 — Sahra'da anlamsız fazladan boyanan yerler (Gat/Zilla/Sebha/El Katrun/Calu/Ecdabiye/Tobruk)
**Hüküm: sirada — DUPLICATE 0033-H-0021**

Birebir aynı kusur, aynı Libya kümesi (`denetim/BULGU-COL-BOYAMA.md`).
Motor kararı (tâbi kademesi) Emre'de bekliyor.

## H-0036 — Bu bölgede bu yılda yerleşim olarak sadece bu kayıtlılar mı var
**Hüküm: olculecek** — görsel açılmadı, hangi bölge/tarih kastedildiği net
değil. **Ölçmedim.**

## H-0037 — Harita Kasr-ı Şirin (yazımda "Aksarı Şirin") Antlaşması'na uygun mu
**Hüküm: zaten-dogru (kısmen doğrulandı, tam tarama yapılmadı)**

Kasr-ı Şirin/Zuhab (1639) sınırının en azından Van eyaleti doğu ucu
(Başkale/Kotur/Mahmudi/Çölemerik, `1639-05-17`) ve Şehrizor/Bağdat hattı
(`1638-12-25`/`1638-12-24`) veride doğru tarihlerle işlenmiş — FERHAD PAŞA
HATTI ve devletler.js kayıtlarıyla tutarlı. **Ölçmedim:** sınırın TAMAMI
(Zagros hattı boyunca bütün noktalar) tek tek taranmadı; bu ayrı ve daha
kapsamlı bir doğrulama gerektirir.

## H-0045 — Satu Mare hangi devlete ait, enklav gibi kalmış
**Hüküm: tekrar**

Bu soru daha önce (`H-0004`, önceki bir paket) soruldu ve araştırıldı.
`data/yerlesimler_ek_macaristan.js:254-280` açık bir SADELEŞTİRME kararı
kaydediyor: *"Szatmár 17. yüzyılda Erdel ile Habsburg arasında birkaç kez
el değiştirdi (Partium). Kardeş kayıtların hiçbiri bu ara dönemleri
modellemiyor, ben de modellemedim. Eksik, ama YANLIŞ DEĞİL."* TDV
`satmar`/`sakmar` ölü slug, doğrulanabilir kaynak bulunamadı. Nokta,
Osmanlı'nın Szatmár'ı yanlışlıkla emmesini (Varad'dan 108 km) önlemek
için VAR — kendi amacını karşılıyor. **Bu kabul edilmiş bir borç,
"kayıtsız" değil zaten kayıtlı** — koordinatör isterse Orta Macar
dönemini eklemeye karar verebilir (`senin-kararin` sınırında).

---

# BAYAT ÇIKANLAR — ayrı liste

Hiçbir madde "bayat, zaten düzeltilmiş ve şikayet artık geçersiz" olarak
çürümedi — ama H-0007/H-0008 (0034) ve kısmen H-0001 (0033) **kısmen bayat
sayılabilir**: ekran görüntüleri farklı tarihlerde alınmış ve aralarında
gerçek bir çelişki yok, yalnız zamanlama farkı var (yukarıda "zaten-dogru"
olarak işaretlendi, ayrı bir "bayat" kovası açmadım çünkü kusur hiç yoktu).

---

# GERÇEK KUSURLAR — önem sırasıyla

1. **0033-H-0001 — Erzincan'ın Osmanlı tarihi 41 yıl erken** (1473→olması
   gereken ~1514). TDV ile doğrulandı. **Haritayı bozan tek YENİ kusur bu
   oturumda bulundu.** `data/yerlesimler.js` (ya da Erzincan'ın bulunduğu
   dosya) düzeltilmeli — ben dosyaya dokunmadım (`§7`, Oturum 0'ın işi).
2. **0033-H-0021 / 0034-H-0028 — Libya çöl boyaması (568.531 km²)** —
   zaten teşhis edilmiş, kayıtlı borç, motor kararı Emre'de bekliyor.
   Yeni bir kusur değil ama HENÜZ KAPANMAMIŞ, önemli.
3. **0034-H-0020 — Bahreyn'in 1521-1783 arası siyasi zinciri tamamen eksik.**

---

# ÖLÇMEDİKLERİM — açıkça

- Görseli AÇILMAYAN maddeler: 0033-H-0002(kısmen, koordinat sorgulandı ama
  görsel tekrar bakılmadı) · 0034-H-0009, H-0019, H-0036 — bunlar için
  net hüküm veremedim, "olculecek" işaretledim.
- 0033-H-0006/7/8/10 kümesinde HANGİ tarihi kaynakların (varsa) ek nokta
  sağlayabileceğini TDV'den taramadım — yalnız kalıbı teşhis ettim.
- Değişmez 7 (Enklav Sorgusu) listesinde Nusaybin/Derik/Silopi'nin GERÇEKTEN
  yer almadığını kendi gözümle listeyi çalıştırıp DOĞRULAMADIM — raporun
  metnine (Tebriz/Niş-Vidin/Belgrad dışında isim geçmiyor) dayandım.
- H-0037 (Kasr-ı Şirin) için sınırın TAMAMINI tek tek taramadım, yalnız
  zaten bilinen üç-dört noktayı çapraz kontrol ettim.
- Kelkit'in `1473-08-11` tarihini TDV'den müstakil doğrulayamadım (madde
  yetersiz) — Şebinkarahisar'a yakınlığından "muhtemelen doğru" dedim,
  kesin değil.

---

**Teslim:** 66/66 madde okundu · 9 görsel + TDV (3 madde: Erzincan, Kemah,
Şebinkarahisar) doğrudan araştırıldı · geri kalanı metin + canlı veri
sorgusuyla (`girdi.yukle()`) çözüldü. `CEVAP.json`a dokunulmadı.
