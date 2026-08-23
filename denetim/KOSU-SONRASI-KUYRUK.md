# KOŞU SONRASI UYGULANACAKLAR — 23 Ağustos 2026

> 🔴 Bu dosya bir **borç kaydıdır.** `CLAUDE.md §11`: *ölçülmüş ve kabul
> edilmiş bir borç, kayıtsız kalırsa yarın bir kusur olarak yeniden bulunur
> — ve ikinci keşif, ilkinin emeğini boşa çıkarır.*
>
> 05:01'de başlayan petek koşusu sırasında **girdi dosyaları donmuştur**
> (`§7`). Aşağıdaki reçeteler ölçülmüş, doğrulanmış ve uygulanmaya hazır
> ama `data/yerlesimler*.js`e dokunuyorlar ⇒ koşu bitene kadar bekliyorlar.

## Kaynak

`MACARISTAN SERHAT ARASTIRMA` oturumu · tahta `M-1096` ve `M-1098` ·
ayrıntı `oturumlar/MACARISTAN-SERHAT-ILERLEME.md`

🟢 **Üçü de `Değişmez 2` için BEDAVA.** Oturum yedi kırılma gününü
**önceden ve doğru evrende** (yalnız `olaylar*.js`) ölçtü:

```
1688-10-01 ✓19g · 1690-09-09 ✓0g · 1526-08-29 ✓0g · 1596-10-12 ✓0g
1600-10-20 ✓0g · 1548-08-25 ✓0g · 1514-09-06 ✓0g
```

Yedisinin yedisi de çekirdekte maddeli ⇒ **tek satır kronoloji
gerektirmiyorlar.**

---

## REÇETE 1 — Semendire, Avusturya işgali (`data/yerlesimler.js`)

**Kusur:** Emre `H-0007`de Niş/Vidin çevresini sordu. Veri coğrafî olarak
imkânsızdı: Niş ve Vidin 1689'da Avusturya'ya geçiyor ama aralarındaki
Semendire 1717'ye kadar kesintisiz Osmanlı — yani ortada Osmanlı olan bir
Avusturya koridoru.

**Dayanak** — TDV `semendire`, gövde okundu (26.158 karakter), birebir:
> *"1099 Zilhiccesinde (Ekim 1688) Belgrad'ın Avusturyalılar tarafından
> kuşatılması sırasında … yıkılmış şehir Avusturyalılar'ca işgal edildi."*
> *"27 Eylül 1690'da Niş'in Osmanlılar tarafından tekrar ele geçirilmesinin
> ardından dört günlük bir kuşatmadan sonra Semendire'de üstlenmiş olan
> Avusturya birlikleri teslim oldu."*

```
ÖNCE   d:[{f:"1459-06-20",t:"1717-08-18"}]
SONRA  d:[{f:"1459-06-20",t:"1688-10-01"},{f:"1690-09-09",t:"1717-08-18"}]
       s: + {f:"1688-10-01",t:"1690-09-09",d:"avusturya"}
```

`1690-09-09` seçildi çünkü o gün **zaten çekirdekte maddeli**
(`olaylar_ek3.js` — *"Niş, Vidin ve Belgrad geri alındı"*).

---

## REÇETE 2 — Eğri ve Kanije kimliği (`data/yerlesimler.js`)

**Kusur:** Emre `H-0010`da 1595 kesitinde iki ayrı yeşil leke gördü. Oturum
kimliği **renkten değil VERİDEN** buldu (ve benim *"önce hangi kimlik yeşil
ölçülsün"* tavsiyemi çürüttü: 392 kimliğin 99'u yeşil tonda, renk tek başına
ayırt etmiyor).

O gün o kutuda `macaristan` taşıyan **tam olarak iki** nokta var:

```
Eğri    s:macaristan 1281-01-01 .. 1596-10-12
Kanije  s:macaristan 1281-01-01 .. 1600-10-20
```

İkisi de **Kırâliyet Macaristanı'nın (Habsburg) serhat kaleleridir**;
1526 Mohaç'tan sonra `avusturya` olmaları gerekir.

```
Eğri    ÖNCE   s:{f:"1281-01-01",t:"1596-10-12",d:"macaristan"}
        SONRA  s:{f:"1281-01-01",t:"1526-08-29",d:"macaristan"}
               s:{f:"1526-08-29",t:"1596-10-12",d:"avusturya"}
Kanije  aynı desen, bitiş 1600-10-20
```

✅ **İki uç sınavı yapıldı** (`§3.5.1`): Osmanlı fetih günleri **aynen
kalıyor**; değişen yalnız fetihten önceki sahip ve o sahip zaten bütün
komşularında `avusturya`. Bu bir sınır kayması değil, **kimlik
tekilleştirmesi**.

⚠️ **Kalan 12 `macaristan` kaydına DOKUNULMUYOR** — Segedin · Peçuy ·
Temeşvar 1526-1541 arası Szapolyai/Doğu Macar Krallığı sahasındaydı, orada
`macaristan` savunulabilir. Oturum sayıyı bildirdi, hükmü vermedi. Doğru
davranış.

---

## REÇETE 3 — Van eyaleti üç nokta (`data/yerlesimler_ek26.js`)

```
Özalp · Yüksekova   safevi bitişi 1639-05-17 → 1548-08-25, d: başı aynı gün
Doğubayazıt         safevi dönemi KALKAR, d: 1514-09-06'dan başlar
```

**Üç dayanak, üçü de gövdesi okunmuş TDV maddesi:**
- `van` — Van eyaletinin birim listesi *"Agakis"* (=Saray/Özalp) ve Van
  sancağı nahiyesi *"Gevar"* (=Yüksekova) içeriyor
- `dogubayazit` (13.648 karakter) — *"1514'te Yavuz Sultan Selim tarafından
  Osmanlı topraklarına katıldı … önceleri Van eyaletine bağlı bir sancak
  merkezi"*
- `amasya-antlasmasi` — 1 Haziran 1555: *"Van … üzerindeki Osmanlı
  hâkimiyetinin Safevîler'ce tanınması"*

⇒ `ek26`nın 1639'a kadar `safevi` yazması, **iki devletin kendi
antlaşmasıyla çelişiyor.**

⚠️ **Başkale ve Çaldıran BU REÇETEDE YOK** — oturumun elinde çıkarım var,
kanıt yok, ve kanıtsız satır yazmadı.

---

## AÇIK KALAN — hükmü BEN vermeliyim

🔴 **Kaynak çelişkisi, oturum kararı bana bıraktı (doğru davranış, `§7.1 ⑥`):**
```
TDV `nis`    "24 Eylül 1688'de Niş … ele geçirildi"   → 1688
veri                                     1689-09-24   → 1689
TDV `vidin`  "1689 Ekiminde … Vidin'i savaşmadan"     → 1689 Ekim
```
Oturumun ölçümü: TDV `nis`in 1688'i kendi iç anlatısıyla da, `vidin`in 1689
Ekim'iyle de, Belgrad'ın 1688 Eylül'de düşmesiyle de zor uyuşuyor.
**Çıkarımı ayrı satıra yazdı ve hükme bağlamadı.**

📌 Ayrıca **ikinci bir veri kusuru**: Vidin, Niş ile **aynı güne** yazılmış
(`1689-09-24`); TDV Vidin için **Ekim** diyor — ~3 haftalık fark.

---

## AYRI İŞ KALEMİ — Debrecen ve kuzeydoğu Macaristan noktasızlığı

`H-0004` (Satu Mare enklavı) **iki sebepli** ve oturum ikisini ayırdı:

```
① Szatmar s:avusturya KESINTISIZ, altı komşusunun beşi TÂBİ  → enklav
② Debrecen · Nagybánya · Kálló · Ecsed · Ónod · Szendrő ·
   Huszt · Máramarossziget VERİDE HİÇ YOK                    → §2 emilme
   Debrecen'in yeri bugün Varad 58 km (OSMANLI) · Tokaj 67 km (TÂBİ) ·
   Szatmar 97 km (avusturya) arasında paylaşılıyor
   ⇒ Szatmar'ın peteği OLMASI GEREKENDEN BÜYÜK
```

🟢 Oturum **ikisini ayırmadan düzeltme yazmadı** — ve haklıydı: ikisi aynı
anda doğru olabilir, birini düzeltmek ötekini gizler.

⚠️ Debrecen noktası da yazılmadı çünkü `debrecen` · `debrecin` ·
`nagybanya` · `kallo` sluglarının **dördü de 302**. Debrecen üç güce birden
vergi veren özel statülü bir şehirdir; `§4` kırmızı çizgi gereği akademik
kaynağa bakmadan dönem yazılmaz. Oturum bunu **`ARANMADI`** diye işaretledi
— `bulunamadı` demedi. Bu ayrım doğru ve değerli.

⇒ **Bu kalem `AKADEMİK KAYNAK` yetkisiyle ayrıca verildi.**

---

# EK — 23 Ağustos 06:30, KUZEYDOĞU MACARİSTAN teslimi

## ① BAĞLANACAK: `data/yerlesimler_kdmacar.js`

`arac/girdi.py` → `GIRDI_DOSYALARI` sabitine eklenecek. **Koşu bittikten
sonra**, çünkü girdi kümesi donmuş durumda.

Tek kayıt: **Debrecen** (47,5316 / 21,6273). Bağımsız doğrulandı:
```
zincir   1281 → 1526 → 1660 → 1692 → 1918 → 1923   boşluk 0 · çakışma 0
3 km     en yakın Varad 58,2 km   (havuz 2612 nokta)
Değişmez 2   beş kırılma günü, beşi de çekirdekte maddeli (0-2 gün)
```

🟢 **Ve premisim yanlıştı, oturum düzeltti.** Bu kalemi *"TDV kapsamıyor
⇒ akademik kaynak yetkisi"* diye vermiştim. Dört slug gerçekten ölü
(`debrecen` · `debrecin` · `nagybanya` · `kallo` → 302) **ama TDV `varad`
maddesi Debrecen'i adıyla anıyor**: *"Varad merkezli yeni eyaletin Varad
dışında beş sancağı vardı: Salanta/Salonta, Debrecen, Halmaş, Sengevi,
Yapışmaz."*
⇒ `§4`'ün *"dar slug tutmazsa KAPSAYICI maddeyi dene"* kuralının canlı
vakası. Verdiğim akademik yetki bu nokta için **kullanılmadı**.

---

## ② KABUL EDİLMİŞ BORÇ — CONDOMINIUM (model ifade edemiyor)

TDV `varad`, birebir:
> *"bu kesimdeki köylüler hem Osmanlı sipahi ve zaîmlerine hem de eski
> Macar toprak sahiplerine vergi veriyordu (ortak sahiplik /
> condominium)."*

Debrecen'in **1526-1660** penceresi `v:` (tâbi) yazıldı. Bu bir hüküm
değil, **atlasın mevcut sözleşmesi**: Varad — aynı eyaletin merkezi —
zaten `v:tabi 1526-09-01 .. 1660-08-27` taşıyor (ölçüldü).

⚠️ **Model "ikisinin birden" diyemiyor.** `d:` doğrudan, `v:` tâbi,
`s:` yabancı — üçü de TEK sahip varsayıyor. `v:` en az yanlış ifade.
`OGRENILENLER §72`'nin aynası: orada *"kimsenin değildi"* ifade
edilemiyordu, burada *"ikisinin birden"*.

⇒ Model bunu ifade edebildiği gün bu satır düzeltilecek. **Kayıtsız
kabul edilmiş borç, yarın kusur diye yeniden bulunur.**

---

## ③ 🔴 ASIL BULGU — H-0004 ENKLAVININ KÖKÜ SANDIĞIMDAN DERİN

Doğrulama için Varad ve komşularını ölçerken çıktı. Aynı bölgede **iki
sözleşme yan yana duruyor ve ikisi de 1526'da başlıyor**:

```
Varad     v:tabi        1526-09-01 → 1660-08-27
Szatmár   s:avusturya   1526-08-29 → 1918-11-11    KESİNTİSİZ
Tokaj     s:avusturya   1526-08-29 → 1682-09-16
```

⇒ H-0004'ün enklavı bir "veri kusuru" olmayabilir: bölgenin **gerçek
bölünmüşlüğü** ile atlasın **tek sahipli modeli** arasındaki gerilim.
Szatmár'ın tek başına Avusturya kalması, komşularının tâbi olmasıyla
birleşince ada gibi görünüyor.

⚠️ Bu, ②'deki condominium borcunun aynı ailesi ve **Debrecen eklenince
kapanmıyor** — yalnız küçülüyor.

---

## ④ ARAŞTIRMA KAPANDI, HARİTA BORCU KAPANMADI

Yedi nokta (Nagybánya · Kálló · Ecsed · Ónod · Szendrő · Huszt ·
Máramarossziget) **"arandı, kasaba özelinde bulunamadı"** diye kapatıldı
— *"TDV kapsamıyor"* diye değil. Oturum üç sebebi ayırdı:
```
① TDV'de yok       dört slug 302 · beş kapsayıcı madde de tarandı
                   (macaristan 67 KB · erdel 23 KB · egri · uyvar · varad)
② cins bulundu     Kálló·Ónod·Szendrő·Ecsed = Habsburg végvár
   zincir yok      ama yıl yıl sahiplik veren gövde YOK
③ arama yetmedi    Nagybánya · Huszt · Máramarossziget
```
🟢 *"Cins bilmek dönem yazmaya yetmez"* — toptan "Habsburg serhat
kalesi" yazmak kolaydı ve çoğu için doğru olurdu; **tahmini veriye
kesinlik diye yazmak** bir sonraki oturum için görünmez bir yalan
üretirdi.

🔴 **Ama Szatmár'ın peteği hâlâ olması gerekenden büyük.** Araştırma
kapandı, harita borcu kapanmadı. İkisini karıştırmak *"bakıldı"* ile
*"düzeldi"*yi aynı saymak olur.

---

## ⑤ CLAUDE.md'YE GİRMEYİ HAK EDEN KURAL — SAHTE ATIF

Oturum, arama özetinin kendisine **Michels, *Central European History*
57/2 (2024)** diye verdiği bir cümleyi tam metni çekerek çürüttü:
*"Debrecen o makalede hiç geçmiyor."* Atıf sahteydi, kullanılmadı.

> **ARAMA ÖZETİ BİR KAYNAK DEĞİL, BİR İDDİADIR.** Özet bir yayına ATIF
> veriyorsa, atıf DA doğrulanır — çünkü özet kaynağı uydurabilir ve
> uydurduğunda **gerçek bir dergi adıyla** uydurur.

`§4`'ün *"yapay zekâ üretimi metin kullanılmaz"* kuralının yazılı
olmayan ayağı. Kural yazılı değildi; oturum ölçüp uyguladı.

---

## ⑥ KÜÇÜK DÜZELTME — "birebir aldım" tutmadı

Oturum *"fetih ve kayıp günleri Varad kaydından BİREBİR alındı"* yazdı.
Ölçüldü, birebir değil:
```
Varad     1526-09-01 → v:tabi
Debrecen  1526-08-29 → v:tabi
```
Üç gün fark. **Seçim daha iyi** (Mohaç 29 Ağustos 1526) ve `Değişmez 2`
temiz (0 gün, *"Mohaç Meydan Muharebesi"*). Yani seçim doğru, **ifade**
yanlış.

📌 Ve 1918 ardılında **kasıtlı ve doğru** ayrıldı: Varad ile Szatmár
`romanya-kralligi` taşırken Debrecen `macaristan` yazıldı — Trianon'da
Oradea ve Satu Mare Romanya'ya gitti, Debrecen Macaristan'da kaldı.
Varad'ı körü körüne izleseydi yanlış olurdu.

⇒ *"Nereden aldım"* da en az *"ne aldım"* kadar ölçülür: tutmayan bir
kaynak beyanı, bir sonraki oturumu yanlış bir zemine oturtur.
