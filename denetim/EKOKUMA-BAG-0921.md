# EKOKUMA-BAG-0921 — bağı kopuk ek okuma kartları
**21 Eylül 2026 · şartname `oturumlar/GECE-0921.md` §EKOKUMA-BAG-0921 · sevk M-4875**
Öngörü (ölçümden ÖNCE yazıldı, değiştirilmedi): [`EKOKUMA-BAG-0921-ONGORU.md`](EKOKUMA-BAG-0921-ONGORU.md)

---

## 0. DEVRALINAN SAYI DOĞRULANDI — VE TUTMADI

Şartname "🔴 ÖNCE bu ölçümü KENDİN DOĞRULA" dedi. Doğruladım; üç ayrı sayı çıktı:

| kaynak | A (ilgili) | B (sınırda) | C (temassız) | toplam |
|---|---|---|---|---|
| M-4875 (koordinatörün ilettiği) | 1607 | 526 | 84 | **2217** |
| `EKO-ILGI-0073.md` §2 tablosu | 1581 | 498 | 84 | 2163 |
| **kendi koşum** (21 Eyl 01:5x, `ARAC-EKO-ILGI-0073.js`) | **1636** | **530** | **85** | **2251** |

- M-4875'in sayısı kendi içinde tutmuyor: 1607+526+84 = **2217**, ama aynı mesaj toplamı
  2163 diyor. İlk iki sayı bir ara koşudan alınmış.
- Rapordan (20 Eyl 22:52) benim koşuma kadar veri BÜYÜDÜ: 627 → **637 kart**,
  2163 → **2251 çift**. Sebep, gece başka oturumların yeni ek okuma dosyaları yazması.
- 📌 Ölçüm sırasında evren yine değişti: koşumun ortasında **`data/ekokuma_antlasma6.js`
  diske geldi** (EKO-ILGI-0073 §8.3'ün "dizide var, diskte yok" açık kalemi kapanmış) ve
  tek başına **+31 çift** getirdi. Bu yüzden aşağıdaki her sayı **anıyla** verilir.

📌 **Ö1 kısmen tuttu:** B (470–530 dedim → 530) ve C (70–95 dedim → 85) aralıkta,
A (1560–1620 dedim → 1636) **aralığın dışında**.

---

## 1. YAPILAN İŞ — 85 temassız bağın tek tek çözümü

### Sınıflandırma (D205: önce sınıflandır, sonra düzelt)

85 çift, 37 ayrı kart. Hepsi tek tek okundu.

| sınıf | çift | ne yapıldı |
|---|---|---|
| **① MIKNATIS** — bağ ayırt edicisiz, aynı günü paylaşan ilgisiz maddelere de düşüyor; kartın doğru hedefi **aynı bağda A kovasında zaten var** | **47** | **DÜZELTİLDİ** — bağa ayırt edici eklendi (13 kart) |
| **② SAHİPSİZ** — bağın düştüğü hiçbir madde kartla ilgili değil, o günde hedef madde YOK | **4** | **DÜZELTİLDİ** — bağ en yakın anlamlı maddeye taşındı (1 kart, Emre'nin izni) |
| **③ ÇIPLAK `t:` bağı** — `ANTLASMALAR` kaydının ayırt edicisi yok, gün paylaşılıyor | **1** | **DÜZELTİLDİ** — kayda `olay:` alanı eklendi |
| **④ ALETİN HAKSIZ ŞÜPHESİ** — ilgi meşru, kelime örtüşmesi yok | **33** | **DOKUNULMADI** (aşağıda §2) |

### ① MIKNATIS — 13 kart, ayırt edici eklendi
Alet: `denetim/ARAC-EKOKUMA-BAG-0921-YAMA1.py`. Her ayırt edici, o bağın **A-hedefinin
başlığında geçtiği doğrulanarak** seçildi (`_ekBagEslesir` ayırt ediciyi maddenin `b`
alanında arar, `_ekNorm` Türkçe harf/aksan/kesme işaretini düzleştirir).

| kart | bağ | → | düşen ilgisiz madde |
|---|---|---|---|
| `hanedan-evlilik-cariyelik-nikahi` | `1534-01-01` | `…\|Hürrem` | 5 (Brezilya kaptanlıkları, Bitlis, Matrakçı…) |
| `osmanli-ingiliz-ticaret-mekanizmasi-1580` | `1580-01-01` | `…\|İngiliz` | 4 |
| `hat-sanati-sheyh-hamdullah-hafiz-osman` | `1520-01-01` · `1695-01-01` | `…\|Hamdullah` · `…\|Hâfız Osman` | 7 (Sind'deki Ergun hânedanı dahil) |
| `dunya-hurmuz-bogazi-onemi` | `1414-01-01` | `…\|Hürmüz` | 5 |
| `tartisma-evliya-celebi-guvenilirlik` | `1632-01-01` | `…\|Evliya Çelebi` | 6 (Tâc Mahal dahil) |
| `tartisma-candarli-halil-pasa-idami` | `1453-06-01` | `…\|Çandarlı` | 2 |
| `magazin-ipsir-mustafa-pasa-deyyus` | `1648-05-01` | `…\|Varvar` | 2 |
| `teknik-kesfuzzunun-katib-celebi` | `1633-01-01` | `…\|Kâtib Çelebi` | 2 |
| `kimdir-katib-celebi` | `1633-01-01` | `…\|Kâtib Çelebi` | 2 |
| `teknik-dogu-afrika-eyaletleri-idari-yapi` | `1557-01-01` · `1559-01-01` | `…\|Habeş` ×2 | 10 |
| `kimdir-itri` | `1711-01-01` | `…\|Itrî` | 6 |
| `tartisma-padisahlar-hac-gitmemesi` | `1622-05-20` | `…\|Genç Osman` | 1 |
| `zimmi-cizye-millet-duzeni` | `1453-05-29` | `…\|İstanbul` | 1 |

### ② SAHİPSİZ — `tutun-yasagi-kaldirilmasi`
Tek bağı `1609-01-01`di ve dört maddeye düşüyordu: *Rus kuvvetlerinin Kasım şehrini
zaptı* · *Ulster Plantasyonu* · *Lope de Vega'nın manifestosu* · *Mombasa sultanının
ölümü*. **Dördü de ilgisiz; kronolojide 1609 tütün fermanı maddesi YOK.**
Emre'nin izni (*"sahipsiz kalırsa en yakın anlamlı maddeye"*) kullanıldı: kartın kendi
`sonuc` alanı zaten 1633 IV. Murad yasağını anlatıyor ve o madde kronolojide **var**
(`data/olaylar_ek7.js:74`, `t:"1633-10-01"`). Bağ `"1633-10-01|tütün"` oldu.
Kart artık **A kovasında, tek ve doğru maddede** çıkıyor.
🟡 Açık kalem: **1609 ilk tütün fermanı maddesi** kronolojide yok (§5).

### ③ `ANTLASMALAR#Mondros Mütarekesi`
EKO-ILGI-0073 §8.4'ün bildirdiği kusur: `ANTLASMALAR` kayıtlarının `olay:` alanı yok,
yalnız `t:` ile bağlanıyorlar, bu yüzden ayırt edici eklenemiyor — **ölçtüm, eklenebiliyor.**
`ekKartBagliMi` `tur`suz kayıtta ÖNCE `kart.olay`a bakar ve aynı günü taşıyan `t:`
devreder. `data/savaslar.js:489` kaydına `olay:["1918-10-30|Mondros"]` eklendi.
Sonuç: kart **5 → 3** maddede çıkıyor; düşenler *"Polonyalılar Krakov'da yönetimi ele
geçirdi"* (C) ve *"Avusturya Cumhuriyeti'nin kuruluşu"* (**aletin YANLIŞ A'sı** — kart
gerçekten oraya ait değildi). Kalan üçü Mondros maddeleri.

### Ölçülen sonuç (sınav: aynı alet, aynı evren, önce/sonra)

| | önce | YAMA1 sonrası | Mondros sonrası |
|---|---|---|---|
| bağ↔madde çifti | 2251 | 2196 | 2225 (antlasma6 +31) |
| A — ilgili | 1636 | 1638 | 1668 |
| B — sınırda | 530 | 520 | 520 |
| **C — temassız** | **85** | **38** | **37** |
| öksüz bağ | 13 | 12 | 12 |

🔴 **Şartnamenin şartı — "değiştirdiğin her bağı yükleyip kartın gerçekten göründüğünü
doğrula" — 14 kartın 14'ünde tek tek koşuldu: kart KAYBOLAN YOK, A-hedefi düşen YOK.**
Altı `data/ekokuma*.js` + `savaslar.js` `node --check`ten geçti.

---

## 2. KALAN 37 ÇİFT — ALET YANILIYOR, VERİ DEĞİL

Kalan 37'nin **33'ü aletin haksız şüphesi**. Sebep tek ve ölçülebilir: **aynı olay
kronolojide birden çok madde olarak duruyor** (çekirdek `OLAYLAR*` + her devletin kendi
`KRONOLOJI_*` kuyruğu). Kart doğru güne bağlı; ikizlerden kelime örtüşmesi tutan A/B'ye,
tutmayan C'ye düşüyor.

Örnekler (hepsi meşru, dokunulmadı):
- `bakis-polonya` ↔ `1683-09-12|Viyana` — **4 C**: *"II. Viyana Kuşatması bozgunu"*,
  *"Viyana'nın kurtarılması — Kahlenberg"*, *"Murad Giray… katıldı"*, *"II. Viyana
  bozgunu Karadağ-Osmanlı ilişkisinin dönüm noktası"*. Beşincisi (A) Sobieski maddesi.
- `filhelenizm-bati-yunan-sevgisi` ↔ Navarin: **5 maddenin 4'ü A, biri C** — aynı savaş.
- `hristiyan-tebaa-zorlama-mi` ↔ `1453-05-29`: 8 maddenin 7'si C, hepsi İstanbul'un fethi.
- `bakis-sirp`, `bakis-rus`, `bakis-arabistan`, `statu-fas`, `statu-terim-*` — aynı kalıp.

### İKİZ MADDE ölçümü (alet: `ARAC-EKOKUMA-BAG-0921-IKIZ.js`)

| ölçü | sayı |
|---|---|
| evren | **7160 madde** (1731 çekirdek + 5429 kuyruk) · 4583 ayrı gün |
| 2+ madde taşıyan gün | **1195 gün · 3772 madde** |
| **ikiz gün** (başlıkta 2+ ortak içerik kelimesi) | **401 gün · 959 madde (%13,4)** |
| bunun çekirdek↔kuyruk ÇAPRAZ olanı | **216 gün** |

Uç örnek: `1402-07-28` Ankara Savaşı **9 madde**; `1453-05-29` **7 madde**;
`1396-09-25` Niğbolu **5 madde**.

🔴 **HÜKÜM DEĞİL, BEYAN:** bunların çoğu **kasıtlıdır** — `KRONOLOJI_*` seçilen devletin
kendi kronolojisidir, aynı savaş her katılımcının çizgisinde ayrı bir maddedir. Ama
**güne bağlanan bir kart bu ayrımı bilmez** ve hepsine birden düşer. ⇒ C kovasının kalanı
bir VERİ kusuru değil, bağ çözünürlüğünün tasarım sınırıdır. Hüküm 1.MURAT/Emre'nin.

### Kalan 4 gerçek şüpheli (hüküm bekleyen, düzeltmedim)
`tabi-devlet-vassallik` (2 bağ, ikisi de A değil) · `statu-fas` (4 bağ, A yok) ·
`bakis-sirp` · `bakis-rus`. Dördü de **konusuna doğru bağlı**; A'ya çıkamamalarının
sebebi kart adının maddede geçmemesi. Kalem gerektirmez, yalnız aletin kör noktası.

---

## 3. ŞARTNAMENİN İKİNCİ SORUSU — 526 (bugün 520) "sınırda" çiftin sebebi

Soru: *"kaçının sebebi YIL HASSASİYETİ, kaçının KONU UZAKLIĞI — ikisini AYIR, sayıyla ver."*

**Cevap: yıl hassasiyeti B'nin sebebi DEĞİL — payı %5,4.** Ölçüm iki kademede yapıldı
(`ARAC-EKOKUMA-BAG-0921-AYIR.js` + `-AYIR2.js`).

### Üç kova, toplamı 520

| sebep | ölçüt | çift | % |
|---|---|---|---|
| **① YIL / AY HASSASİYETİ** | bağın günü `YYYY-01-01`, `YYYY-AA` ya da yalnız yıl | **28** | **5,4** |
| **② ORTAK-GÜN SIÇRAMASI** | bağ TAM GÜN, ama aynı bağda kartın A-hedefi de var ⇒ bu çift yan ürün, çözünürlük işi | **130** | **25,0** |
| **③ KONU UZAKLIĞI** | bağ TAM GÜN ve o bağda kartın A-hedefi YOK ⇒ gerçek konu kusuru, **insan okur** | **362** | **69,6** |

Kıyas: A kovasında kaba bağ oranı **%7,3** — yani B'deki %5,4 A'dakinden bile DÜŞÜK.
Kaba bağ B'ye düşmenin sebebi olsaydı bunun tersi olurdu.

**⇒ İKİNCİ KOVA (hüküm bekleyen): ③'ün 362 çifti** — 41'i, kartın başka hiç A bağı
olmayan kartlardan geliyor (bağ kaldırılırsa kart SAHİPSİZ kalır, önce yeni hedef gerekir).
① ve ②'nin 158 çifti hüküm istemez: ayırt edici ekleyerek mekanik olarak çözülür.

📌 **Ö3 YANLIŞ ÇIKTI.** "B'nin %10–20'si yıl hassasiyeti" demiştim, **%5,4** çıktı; ve
kalanı toptan "konu uzaklığı" sanmıştım — oysa dörtte biri ortak-gün sıçraması.
📌 **Ö2 tuttu** (C'nin %49,4'ü yıl damgasıydı; %45–60 demiştim).
📌 **Ö4 tuttu** (C'nin 63/85'i kuyruk maddesindeydi).
📌 **Ö5 tuttu** (47 düzeltmenin 47'si ayırt edici ekleyerek oldu, yeni madde isteyen 1).

---

## 4. DEĞİŞEN DOSYALAR (yazıldı, COMMİTLENMEDİ — koordinatörün)

```
data/ekokuma.js            zimmi-cizye-millet-duzeni : 1453-05-29 → |İstanbul
data/ekokuma_toplum.js     hanedan-evlilik · osmanli-ingiliz-1580 · hat-sanati (2 bağ)
                           · tutun-yasagi-kaldirilmasi : 1609-01-01 → 1633-10-01|tütün (TAŞINDI)
data/ekokuma_dunya.js      dunya-hurmuz-bogazi-onemi : 1414-01-01 → |Hürmüz
data/ekokuma_vezir.js      evliya-celebi · candarli-halil · ipsir-deyyus
data/ekokuma_rivayet.js    kesfuzzunun · kimdir-katib-celebi · dogu-afrika (2 bağ) · kimdir-itri
data/ekokuma_padisah.js    tartisma-padisahlar-hac-gitmemesi : 1622-05-20 → |Genç Osman
data/savaslar.js           ANTLASMALAR Mondros kaydına olay:["1918-10-30|Mondros"] (satır 489)
```
Kendi dosyalarım (adıyla commitlendi):
`denetim/EKOKUMA-BAG-0921.md` · `-ONGORU.md` · `-HAM.json` · `-HAM2.json` · `-HAM3.json` ·
`ARAC-EKOKUMA-BAG-0921-YAMA1.py` · `-AYIR.js` · `-AYIR2.js` · `-IKIZ.js`

---

## 5. AÇIK KALEMLER — benim kalemim değil

1. **1609 tütün fermanı maddesi YOK.** `tutun-yasagi-kaldirilmasi` kartı şimdilik 1633
   IV. Murad yasağına bağlı. İstenen: 1609 ilk yasak fermanı maddesi (TDV `tutun`).
   O madde yazılırsa kartın bağına `"1609-…|tütün"` geri eklenir. `data/olaylar*.js`.
2. **B kovasının 362 "konu uzaklığı" çifti hüküm bekliyor** (§3 ③). Okuma listesi:
   `node denetim/ARAC-EKO-ILGI-0073-LISTE.js B`. 41'i sahipsiz kalma riski taşıyor.
3. **İkiz madde çözünürlüğü** (§2): 401 ikiz gün · 959 madde. Karar gerekiyor —
   kart güne mi bağlanmaya devam etsin, yoksa `olay:` bağı madde KİMLİĞİNE mi çevrilsin?
   Bugünkü ayırt edici mekanizması ikizleri ayıramıyor (başlıkları da benziyor).
4. **`data/ekokuma_antlasma6.js` geldi** — EKO-ILGI-0073 §8.3'ün açık kalemi kapanmış
   görünüyor; 31 yeni çift, **C'ye hiç düşmedi**. Kim yazdıysa teslimi bende görünmüyor.
5. Kategori/tür tartışması (46 kart, `kultur-sanat`) — şartname gereği **DOKUNULMADI**.

## 6. NE BULAMADIM
- **`denetle.py` koşusu** — §7'ye bakınız (bellek).
- B kovasının 520 çiftinin tamamı okunmadı; **sınıflandırıldı** (§3), tek tek hüküm
  verilmedi. Şartname de ikinci kovayı koordinatöre bırakıyordu.
- 1609 tütün fermanının GÜNÜ — TDV `tutun` maddesine bakılmadı (yeni madde yazmak benim
  kalemim değil; gün araması o oturumun işi).
