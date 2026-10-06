# HANAK — D8a'nın +1'i bugünün verisinden GELMİYOR (ölçüm, 6 Ekim 2026)

**Soru:** UMIT'in ağacında kapı `8a ✗ 1509 (tavan 1508)` verdi ve ihlali adıyla bastı:
`8a YENİ d1829-osm-rus-1|1829-09-14|sol|Hanak`. Bu +1'i bugünün hangi değişikliği
üretti?

> ⚠️ **Benim ilk hipotezim (Saarbrücken) ÇÜRÜTÜLDÜ** — kapının kendi çıktısı Hanak
> diyordu. Bu belge o çürütmenin devamıdır, teyidi değil.

## Ölçüm — üç mekanizma, üçü de ELENDİ

| # | mekanizma | ölçüm | sonuç |
|---|---|---|---|
| ① | Hanak'ın **kendi kaydı** değişti mi | `yerlesimler_ek26.js`, `e634fdad~1` ↔ HEAD, kaydın TAMAMI | **BİREBİR AYNI** |
| ② | Hanak'a **yama** var mı | `grep -l Hanak data/yer_yama*.js` | **YOK** (0 dosya) |
| ③ | `d1829-osm-rus-1` **hattı** değişti mi | `data/d_sinirlar.js`e bugün dokunan commit | **SIFIR commit** |
| ④ | Hanak'ın **peteğini oynatacak komşu** | bugünün 9 yerleşim dosyasındaki lat/lon taşıyan 79 +/- satırı, Hanak'a (41.230/42.855) mesafe | **60 km içinde SIFIR** |

④'ün evreni ADIYLA yazılı: bugün yerleşim dosyalarında `lat:`+`lon:` taşıyan **79**
eklenen/silinen satır tarandı, en yakını 60 km'den uzak. Boş küme her öngörüyü
doğrular — bu yüzden evreni yazıyorum: küme boş değildi, **79 adaydan hiçbiri yakın
değildi.**

Hanak'ın `s:` zinciri (bugünkü hâli, değişmemiş):
`1281→1551 gurcistan` · `1551→1878 osmanli` · `1878→1917 rusya` ·
`1917-03→1917-11 rusya-gecici-hukumet` · `1917-11→1921-10 sovyet-rusya` ·
`1921-10→1923-10 tbmm-turkiye`. 1829'da Osmanlı — hattın doğu yakası.

## Hüküm: **+1'in bugünkü veride SEBEBİ YOK** — ama bu "sebep yok" demek değildir

🔴 **Ve şunu ölçemediğimi açıkça yazıyorum:** EMRELIC ağacında `devletler_harita.js`
diskte olmadığı için Değişmez 8 **ÖLÇÜLEMEDİ** (kapı çıkış 2). Yani "+1 bugünden
gelmiyor" ölçülmüştür; "+1 bayat gövde eseridir" **HİPOTEZDİR**, ölçülmedi.
İkisini aynı cümleye koymak, ölçülmemiş olanı ölçülmüş göstermek olurdu.

Geriye iki açıklama kalıyor ve ikisi de KOŞU 21'i bekler:
1. **Bayat gövde eseri** — D8 motorun ÇIKTISINI ölçer; eldeki gövde KOŞU 20'nin.
   Taze gövdede ihlal KAYBOLURSA sebep buydu.
2. **Önceden var olan, tavandan sonra görünür hâle gelmiş veri kusuru** — taze
   gövdede ihlal KALIRSA sebep budur ve Hanak'ın 1551-1878 Osmanlı kolu ile 1829
   hattının ilişkisi veri olarak incelenir.

## KOŞU 21 SONRASI SINAV — tek ölçüm iki sebebi ayırır

```
taze gövdede 8a ihlali:
   KAYBOLDU  ⇒ bayat gövde eseriydi · tavan 1508'de kalır, kalem kapanır
   KALDI     ⇒ VERİ kusuru · Hanak adıyla parti maddesi olur, tavan OLÇÜMLE oynar
```
⚠️ Hangisi çıkarsa çıksın tavan **ölçümü izler** (§3.4(0)): 1509 görünce "tavanı 1509
yap" denmez; önce hangi sebep olduğu ölçülür.

---
Ölçen: YILDIRIM BAYEZIT (koordinatör, EMRELIC) · dayanak: UMIT'in kapı çıktısı

---

# 🔴 DÜZELTME (6 Ekim gecesi, LAB ölçtü) — YUKARIDAKİ HÜKÜM ÇÜRÜDÜ

Yukarıdaki *"+1'in bugünkü veride SEBEBİ YOK"* hükmü **YANLIŞTIR.** Belgeyi silmiyorum,
çünkü hatanın mekanizması kendi başına bir derstir.

## LAB'in ölçümü — aynı geometri, iki veri hâli
```
600e2d00  site damgalı ESKİ geometri (0ef2d3e2, uret_petek 8b6aaea5)  →  8a = 1508
2fe8ada7  AYNI geometri, DEĞİŞMİŞ veri                                →  8a = 1509  ✗
```
⇒ Geometri SABİT, veri DEĞİŞTİ, sayı OYNADI. **Tetikleyen VERİDİR.**

🔴 **VE BU PARAGRAFIN İLK HÂLİ DE FAZLA İLERİ GİTTİ — LAB onu da düzeltti:**
İlk yazdığım iki cümle *"Sebep VERİDİR, bayat gövde DEĞİL"* ve *"yeni geometri bunu
kaldırmayacak"*. İkisi de eksik:
1. İkilik yanlış kuruldu. Ölçülen şey **ESKİ geometri × YENİ veri** — karışık gövde.
   Lugos 1918 Romanya kaydıyla çizilmiş, ama veri onu 1920-06-04'e dek Macaristan yapıyor.
   Tetikleyen veri, **ama ölçüm karışık gövdede yapıldı**; "bayat gövde hiç rol oynamadı"
   denemez.
2. *"Yeni geometri bunu kaldırmayacak"* **KANITLANMADI.** KOŞU 21 Lugos'u YENİ kaydıyla
   çizecek; taşma ve etiket DEĞİŞEBİLİR. Doğru hüküm: **koşu sonrası yeni geometriyle
   yeniden ölç, sonucu ÖNCEDEN YAZMA.**
📌 Ve bunun kendisi bir ders: yukarıda *"okumamı doğrulamadım"* diye kendimi düzelttiğim
paragrafın **hemen altında** doğrulanmamış bir hüküm daha yazdım. **Bir hatayı yazmak,
aynı türden ikincisini yapmaya engel değildir.**

## HATAMIN MEKANİZMASI — ikisi birden
**① Yarıçap gerekçesiz seçildi.** ④'te "60 km içinde SIFIR" yazdım. **60 km bir SINIR
değil, bir TAHMİNDİ.** Voronoi'de bir peteğin menzili nokta YOĞUNLUĞUNA bağlıdır;
Kafkas/Doğu Anadolu gibi seyrek bir bölgede peteği 100+ km'deki bir nokta pekâlâ
oynatır. Yarıçabı veriden (ör. Hanak'ın gerçek petek komşularından) türetmedim.
> **Ders: yarıçapı veriden TÜRETMEDEN kullanılan "yakınlık" ölçümü bir ELEME DEĞİLDİR.**
> Boş kümeyi kanıt sanmamak için evreni yazmıştım (79 aday satır) — ama **evreni
> yazmak, YANLIŞ SEÇİLMİŞ bir evreni doğru yapmaz.** İkinci sigorta ilkinin yerine geçmez.

**② Evren yanlış aralığa kuruldu.** Bütün ölçümlerimi *"bugün (2026-10-06 00:00'dan beri)
dokunulan"* commit'lere kurdum. Sorulması gereken aralık `600e2d00..2fe8ada7`ydi ve o
aynı şey değil.

**③ Ve okumamı doğrulamadım.** UMIT'in kapısı `8a YENİ d1829-osm-rus-1|1829-09-14|sol|Hanak`
bastı; ben "YENİ" kelimesini *"bu birim yeni eklendi"* diye okudum ve **o okumayı hiç
sınamadım** — listenin ilk satırı da olabilirdi. Bir ihlal satırını teşhis diye okumak,
`§11`in *"ölçüm doğru, çıkarım yanlış"* ailesi.

## AYAKTA KALAN
- Hanak'ın kaydı `e634fdad~1` ↔ HEAD **BİREBİR AYNI** (bu ölçüm doğru ve hâlâ geçerli).
- `yer_yama*.js`te Hanak **YOK** (geçerli).
- `data/d_sinirlar.js`e 6 Ekim'de **SIFIR commit** (geçerli).
⇒ Yani +1 Hanak'ın KENDİ kaydından ya da hattından gelmiyor. Ama bu, "+1 veriden
gelmiyor" demek DEĞİL: komşuluk üzerinden gelmiş olabilir ve benim komşuluk taramam
yetersizdi.

## AÇIK — LAB'e verilen ölçüm (`LAB-8A-KIMLIK-1006`)
```
(a) 1509'un YENİ birimi Hanak mı, başka bir birim mi?  (kapı çıktısı DOĞRULANACAK)
(b) O birimi hangi commit üretti?  600e2d00..2fe8ada7 ikili arama
    ⚠️ Tekil commit `git log`u YETMEZ: LAB zaten ölçtü, 17 geçiş bir MERGE'ün KENDİ
       değişikliğiydi ve dosya başına `git log` onları bulamıyor. Aynı tuzak burada da var.
```
Bu kapanmadan 8a tavanı oynatılmayacak (§3.4(0): sebebi bilinmeyen sayı tavan olmaz).

---

# 🟢 KAPANDI — SEBEP **LUGOS**, HANAK DEĞİL (LAB ölçtü, `LAB-8A-KIMLIK-1006`)

## Ölçüm
Her commit'in **kendi `denetle.py`siyle** `degismez8()` + `d8_sayac()` doğrudan çağrıldı,
salt okunur (`defter yaz=False`), tam denetimle aynı sayıyı veriyor. Aralıkta D8 kodu,
`d_sinirlar`, `bolgeler.js` ve 0086 defteri **DEĞİŞMEMİŞ** — yalnız girdi değişti.

```
GERÇEK FARK (600e2d00 → 2fe8ada7)
  GİREN   Saarbrücken · Orsova · Tırgu Jiu
  ÇIKAN   Trier · Lugos
  b48276ac7  SAARBRÜCKEN NOKTASI  Trier→Saarbrücken, aynı hat, 63 km, etiket takası  NET 0
  8b95eeb63  BANAT-TRIANON+LUGOS  Lugos ÇIKTI · Orsova (114 km) + Tırgu Jiu (129 km)  NET +1
```
`yerlesimler.js`te `8b95eeb63`ün değiştirdiği **TEK kayıt Lugos**: `romanya 1918-01-01` →
`macaristan-habsburg ..1918-11-11` · `macaristan-naiplik ..1920-06-04` · `romanya`;
artı `isg romanya 1919-07-22..1920-06-04`. Dosya ayrıştırmasıyla doğrulandı (yalnız
`yerlesimler.js` → 1509; olaylar → 1508; Klagenfurt/Mustafapaşa → 1508).

## 🔴 HANAK HİÇ DEĞİŞMEMİŞ — ve "YENİ" kelimesini yanlış okumuşum
Hanak'ın **6 birimi** `600e2d00` ve `2fe8ada7`de BİREBİR aynı. Kapının bastığı
`8a YENİ … Hanak` satırı `ic − defter["a"]`, yani **ESKİ DEFTERE göre fark** —
`600e2d00`a göre değil. Sıralı listenin ilk satırı olduğu için göze çarpıyor
(Posof, Gümrü, Şeyhrumi de o listede). ⇒ Bir ihlal satırını "yeni birim" sanmak,
kapının **hangi tabana göre** fark aldığını okumamaktı.

## 🟢 60 KM DERSİ EMPİRİK OLARAK DOĞRULANDI
Etkilenen iki şehir **114 km** ve **129 km** uzakta. Benim gerekçesiz seçtiğim 60 km
yarıçapı, sebebi **tam olarak dışarıda bırakıyordu**. Ders artık varsayım değil ölçüm:
> **Petek/atıf menzili nokta yoğunluğundan türetilir; sabit bir yarıçap eleme yapmaz.**

**Mekanizma (LAB):** D8'in yer etiketi, ızgara örneğine o gün **karşı tarafın EN YAKIN
yerleşimini** atayan atıf dizininden gelir ve **dizin `isg:` OKUMAZ**. Lugos 1920-03-31'de
Romanya ağacından çıkınca birimi 114/129 km'deki iki şehre geçti.

## AÇIK KALAN — üçü de adıyla
1. 🔴 **Alan 612 → 1692 km²** oldu. Saf etiket bölünmesi alanı KORURDU. Tırgu Jiu'nun
   +1080 km²'sinin önceden niçin sayılmadığı **ÖLÇÜLMEDİ** ⇒ +1 daha büyük bir değişimi
   gizliyor olabilir.
2. **Atıf dizininin `isg:` okumaması** tasarım mı kusur mu — cevaplanmadı.
   ⚠️ LAB kendi sınamasının GEÇERSİZ olduğunu da yazdı: `_d8_sahip`i bellekte `isg`
   okuyacak şekilde yamadı, sonuç değişmedi — **ama etiket `_d8_sahip`ten gelmiyor**,
   yani yama ilgili yola hiç dokunmadı. Çürütme DEĞİL; *"isg sayılsa da olurdu"*
   çıkarılamaz. (Bir sınavın sonuç vermemesi, sınavın o soruyu sorduğunu göstermez.)
3. **de jure atıf × "fiili" hat** (`d1920-hu-ro-fiili`) aynı günde karşılaştırılıyor —
   tasarım mı kusur mu, yöntem sorusu.

## KOŞU 21 SONRASI — tek ölçüm, sonucu ÖNCEDEN YAZILMAZ
LAB aynı salt okunur betiği yeni geometriyle ~1 dk'da koşturacak ve `8a` ile bu hat-gününü
yeniden ölçecek. **Beklenti yazılmıyor:** KOŞU 21 Lugos'u yeni kaydıyla çizecek, taşma ve
etiket değişebilir. Tavan ancak o ölçümden sonra oynatılır (§3.4(0)).

---

# 🟢 NİHAÎ CEVAP — +1'i NE VERİ NE BAYAT GÖVDE, **SAYAÇ TANIMI** ÜRETTİ

`LAB-8A-ALAN-1006` + benim kod ölçümüm. Bu, bu belgedeki **dördüncü ve son** hükümdür;
önceki üçü sırayla Saarbrücken → Hanak → "veri" idi ve üçü de eksikti.

## Ölçüm — geometri hiç değişmedi
```
600e2d00   ham parça 1637 · taşma 1.895.260 km² · 8a sayacı 1508 · çok parçalı anahtar 118
2fe8ada7   ham parça 1637 · taşma 1.895.260 km² · 8a sayacı 1509 · çok parçalı anahtar 117
```
**Ham parça aynı, taşma alanı BİREBİR aynı, sayaç +1.** Lugoj'un `s:` düzeltmesi taşmayı
değiştirmedi; o taşmanın **etiketini** böldü: tek anahtar (Lugos 612 + Lugos 1080) →
iki anahtar (Orsova 612 + Tırgu Jiu 1080). Alanlar ve derinlikler birebir aynı.

⚠️ Ve LAB'in bana bildirdiği *"alan 612 → 1692 km²"* rakamı **LAB'in kendi ölçüm
hatasıydı** — ayrıntıyı `{anahtar: parça}` sözlüğünde topluyordu, Lugos'un aynı anahtarlı
iki parçasından sonuncusu öncekini EZDİ ve 1080 km² görünmez oldu. Kendisi buldu ve
geri geldi. Teşhisi aynen alınıyor:
> **Tekilleştiren anahtarla toplanan ayrıntı, tekilleştirileni GİZLER.**
📌 Bu, benim *"defter farkı = yeni birim"* hatamla **aynı ailedir**: ikisi de
toplayıcının/karşılaştırıcının KENDİ TANIMINI okumamak. Aynı gece, iki ayrı oturum,
aynı sınıf — ders adayı.

## KÖK SEBEP (ben kodda ölçtüm): beyan ile kod ayrışmış
`denetle.py:5447` → anahtar `hat|gün|yan|yer`.
`yer` nereden geliyor (`:5388-5399`): `A = agac(karsi_ad, gun)` ile **KARŞI YAKANIN**
ağacı kurulur, ızgara örneğine `query_nearest` ile karşı yakanın **en yakın yerleşimi**
atanır. ⇒ **`yer` = TAŞILAN yerleşim, TAŞAN DEĞİL.**
Oysa Değişmez 8'i getiren commit (`595e9947`) birimi *"≥5 km **taşan yerleşim**"* diye
tarif ediyor. **Tavan, tanımın adını koyduğu birimi hiç ölçmüyor.** Anahtar
fonksiyonunda tek satır yorum yok; gerekçe kodda, commit mesajında ve `D237`de YOK.

## SONUÇ — bu belgedeki hüküm zinciri ve her adımın niçin eksik olduğu
| # | hüküm | niçin eksikti |
|---|---|---|
| ① | sebep **Saarbrücken** | kapı çıktısı Hanak diyordu — hipotez, ölçüm değildi |
| ② | sebep **Hanak** | kapının `ic − defter["a"]` farkını "yeni birim" sandım |
| ③ | sebep **VERİ** (bayat gövde değil) | ikilik yanlış kuruldu; ölçüm karışık gövdede |
| ④ | sebep **SAYAÇ TANIMI** | geometri hiç değişmemiş; ham parça ve alan BİREBİR aynı |
📌 Dördü de "ölçüm doğru, çıkarım yanlış" ailesindendi ve her biri **bir önceki ölçümün
evrenini genişletince** çürüdü. Tek ortak kusur: **ölçtüğüm şeyin TANIMINI sormamak.**

## AÇIK — ikisi de sıraya girdi
1. **Emre'nin kararı** (`SABAH-1004 ㉘`): ihlal etikete duyarsız ölçüye mi bağlanacak (A),
   birim tanıma mı uydurulacak (B), olduğu gibi mi kalacak (C)? Önerim (A).
2. ✅ **ÖLÇÜLDÜ** (`LAB-8A-KIRILGANLIK-1006`): üst sınır **+970** — tek bir etiket
   şehrinin karşı yakadan çıkması 1509 anahtarın **743'ünü** böler (tek parçalı 1392'den
   672 ⇒ +878 · çok parçalı 117'den 71 ⇒ +92). **Sayacın oynama potansiyeli, kendi
   toplamının ~%64'ü.**
   🔴 **Benim "+128" tahminim YANLIŞ EVRENDEYDİ:** yalnız çok parçalı anahtarların
   bölünebileceğini varsaymıştım. Tek parçalı bir anahtar da bölünüyor, çünkü etiket
   şehri çıkınca o parçanın örnekleri İKİNCİ en yakına gider ve farklı örnekler farklı
   şehirlere düşer. **Parça bölünmeden anahtar bölünebiliyor.**
   ⇒ Bu, bu belgedeki aynı kusurun **beşinci** tekrarı: evreni mekanizmadan değil
   kolay varsayımdan kurmak (60 km · defter farkı · "yeni geometri kaldırmaz" ·
   sayaç tanımı · şimdi bu).
   📌 Ve etiketin "anlamsızlığı" da ölçü oldu: etiket şehri ↔ parça uzaklığı **medyan
   61 km**, 378 anahtarda >100 km, 31'inde >200 km (Lugos 163-251 km). `yer` bir KONUM
   bilgisi değil, bir **komşuluk artefaktı**.
3. **LAB ölçüyor:** birleşme yönü (**−n**) — tavanın bir ihlali yanlış SUSTURMA kolu.
   Saarbrücken takası o yönün canlı olduğunu gösteriyor ama sayısı yok.
🔴 **8a tavanı bunlar kapanmadan OYNATILMAYACAK.**
