# KUNYE-DUNYA-0929 — dünya künye denetimi (29 Eylül 2026)

Ölçen: `py -X utf8 denetim/ARAC-KUNYE-DUNYA-0929.py` (yeniden koşturulabilir)
Ham liste (kardeş paketler bunu okur): `denetim/KUNYE-DUNYA-0929.json`
TDV sınaması: `py -X utf8 denetim/ARAC-KUNYE-DUNYA-0929.py --tdv slug:anahtar …`
`data/`e YAZILMADI. Evren: `devletler.js` 678 künye · kronoloji 128 dosya / 7.165 madde
(`olaylar*` + `kronoloji*`; `kronoloji_sinir_guney_g8.js` yüklenmiyor, ayrıca işaretli).

---

## Kardeş paket bu dosyayı nasıl okur

*"Bosna-Hersek kronolojisi yazacağım; hangi künyeleri kullanabilirim?"* →
`kunye.<id>`: `ad · f · t · sinif · bolge · madde_sayisi · ad_gecen · sitede_gorunen ·
harita_pencere · supheli · not_`. Örnek: `bosna-kralligi` 1377-1463 · madde 0 · ad geçişi 19 ·
panelde 6 · haritada 15 pencere → künye sağlam, ama maddesi bölge dosyasında künyesiz duruyor.
**`supheli:true` olan künyeye madde yazmadan önce `supheli_omur`daki satırı oku.**
**Yeni künye istemeden önce `esanlam`a bak:** aradığın yapının künyesi başka yazımla var olabilir.

---

## ① ENVANTER — 678 künye

| Sınıf (ad + `tur`) | sayı | | Sınıf | sayı |
|---|---|---|---|---|
| krallık | 155 | | beylik | 35 |
| devlet (sınıfsız) | 95 | | imparatorluk | 29 |
| sultanlık | 59 | | knezlik/voyvodalık/prenslik/despotluk | 22 |
| cumhuriyet | 57 | | hanlık | 20 |
| halk/konfederasyon/kabile | 43 | | dukalık | 16 |
| sömürge/manda/işgal | 40 | | şehir devleti | 8 |
| hanedan | 39+4 | | eyalet/ocak | 6 |
| emirlik | 37 | | şehzadelik 4 · isyan 2 · diğer 5 | |

Sınıf **addan** okundu (ad sözcüğü: "…Krallığı", "…oğulları", "…Emirliği"), bulunamazsa
`tur` alanına düşüldü. `tur`'a tek başına güvenilmez:

- `tur` alanı **46 künyede yok** (`irak-kralligi`, `misir-sultanligi`, `mekke-serifligi`, `orta-macar-kralligi` …).
- `tur` değerlerinin **6'sı** dosya başındaki beyanda yok: `emirlik` 7 · `eyalet` 2 · `mutasarriflik` · `federasyon` · `ulke` · `gecici-hukumet`.
- `bolge` "KAPALI SÖZLÜK" ama **13 künye `orta-amerika-karayip`** diyor (sözlükte `orta-amerika` var; 5 künye onu kullanıyor). İki ad, bir bölge.
- `tur` ile ad **10 künyede** çelişiyor; çoğu zararsız (`lehistan` cumhuriyet/birlik, `buhara` hanlık/emirlik, `isvicre` cumhuriyet/konfederasyon). Adlandırmada tutarsızlık bu üçü.

## ② KRONOLOJİSİZ KÜNYE — eşleme yöntemi ve sonuç

`devlet:` alanıyla eşleme **484** künyeyi boş gösteriyor (koordinatörün sayısı teyit edildi) ve
yanlıştır. Kurulan eşleme dört katmanlıdır (her madde birden çok künyeye gidebilir):

| Katman | Ne okur | Güç |
|---|---|---|
| K1 kimlik alanı | `devlet · devlet2 · devletler[] · kunye[] · taraflar[]` | kesin |
| K2 etiket | `etiket[]` içinde birebir künye id'si | kesin |
| K3 dosya + pencere | `kronoloji_<x>.js` → elle kurulan aday künyeler (`DOSYA_ADAYLARI`, 31 dosya); madde, `t`'si künyenin `[f,t]` penceresine düşen adaya gider | kesin |
| K4 ad geçişi | künye adının çekirdeği `b`/`d` metninde geçiyor **ve** madde künye penceresinde | ZAYIF — ayrı sayılır |

`madde_sayisi = |K1∪K2∪K3|`. Bölge dosyaları (anadolu, balkan, arabistan, orta_asya, guney_asya,
dogu_afrika, kuzeyafrika, italya_sehir, iran_ardillari, hindistan, cin, japonya…) K3'e alınmadı:
bu dosyalarda devlet, dosya adından okunamaz.

| Ölçüm | sayı |
|---|---|
| K1∪K2∪K3 = 0 madde | **392** künye |
| — bunlardan metinde adı da geçmeyen (gerçekten boş) | **203** |
| — adı bölge dosyalarında geçen (madde VAR, künyeye BAĞLI DEĞİL) | 189 |
| 392'den haritada `s:`/`isg:` penceresi olan | **345** (harita toprak değiştiriyor, künyenin maddesi yok) |
| 392'nin bölgesi | K.Amerika 49 · B.Afrika 44 · **Anadolu 34** · GD Asya 29 · G.Asya 29 · D.Afrika 24 · **Arabistan 22** · **Balkan 18** · … |

**Sitenin gerçekte gösterdiği** (`app.js:13516` ve `13572`'nin aynası; M-5396 ile birebir örtüşür):

- 27 dosya künyeye bağlanıyor.
- **15 dosya bağlanmıyor: 2.084 madde görünmüyor.** Bunlar anadolu 281 · dogu_afrika 218 · orta_asya 205 · italya_sehir 186 · balkan 177 · iran_ardillari 155 · guney_asya 153 · cin 136 · hindistan 131 · misir 120 · kuzeyafrika 83 · ozbek 73 · japonya 71 · arabistan 60 · sirbistan 35.
- **27 künyenin kendi maddeleri eziliyor.**
- Panelde **0 madde** gösteren künye 4 tane: `buhara-halk-cumhuriyeti` · `harezm-halk-cumhuriyeti` · `hail-ibn-ali` · `luksemburg-hollanda-birligi`.
- Öteki 674 künyenin paneli **künyenin kendi taslak listesiyle** dolu. Bu listeler 1-15 madde arası, çoğu 2-6.

⇒ **Osmanlı çevresindeki "boşluk" büyük ölçüde BAĞLAMA eksiğidir, yazım eksiği değildir.**
Karaman, Aydın, Eretna, Dulkadir, Eflak, Bosna, Mora'nın maddeleri `kronoloji_anadolu/balkan.js`
içinde künyesiz duruyor (ad geçişi: Karaman 18 · Aydın 15 · Eretna 12 · Dulkadir 12 · Eflak 41 ·
Bosna 19 · Mora 19). Bu durum KRONO-BAGLAMA-0929'yu ilgilendiriyor. Kardeş paket bu künyelere
**yeni madde yazmadan önce** o dosyaları taramalıdır, yoksa mükerrer madde çıkar.

**Pencere dışı madde** (K3 dosyasında hiçbir aday künyenin penceresine düşmeyen): 13 dosyada 53 madde.
Hayalet işareti olarak `mekanik_supheler`e yazıldı. Hüküm için bkz. ④: Karakoyunlu 1469, Katalan 1388,
Varşova 1807, Hollanda 1568-79, Polonya 1295-1308. Kırım 1784-92 (Kuban hanları) ve Safevî 1750-73
(nominal III. İsmail) künye kusuru DEĞİL; madde, künyenin ölümünden sonraki olayı anlatıyor.

## ③ EKSİK DEVLET — 46 aday

**Ölçüt:** 1281-1923 arasında Osmanlı ile **doğrudan temas** (sınır, tâbilik, savaş, antlaşma) +
künyesi YOK + dayanağı var. Dayanak TDV cümlesi (yönlenme izlenmeden çekildi, 302 = ölü slug)
ya da atlasın kendi kronolojisinde adının geçmesidir. Taranan 7.165 maddede künyesiz 111 tekil yapı
adı çıktı; eşanlamlar elendi.

- Öncelik: **1 komşu: 21 · 2 tâbi: 16 · 4 öteki: 9.** Öncelik 3'te (Anadolu/Balkan beyliği) **yeni aday çıkmadı**: Karesi'den Çemişgezek'e Anadolu beylikleri künyede var.
- Kaynak: **27'sinde TDV cümlesi ya da canlı slug var · 11'i `bulunamadı`** (slug tutmadı, uydurulmadı).

| Küme | Adaylar |
|---|---|
| Balkan / Ege (1) | Dobruca Despotluğu · Aka (Achaea) Prensliği · Epir (Yanya) Despotluğu · Sicilya Krallığı |
| Balkan / Ege (2) | Vidin Çarlığı · Midilli Gattilusio · Sakız Maonası · Doğu Macar Krallığı* |
| Kafkasya (1) | Kafkas İmâmeti · Karabağ · Gence · Şeki · Bakü · Nahçıvan · Revan · Şirvan · Derbent hanlıkları · Kartli (Kartli-Kaheti) · Erdelan |
| Kafkasya (2) | Samtshe (Ahıska) Atabegliği · Megrelya · Abhazya |
| 1917-1920 (1) | Ukrayna Halk Cumhuriyeti · Dağlılar Cumhuriyeti · Cenûb-i Garbî Kafkas · Aras Türk Cumhuriyeti |
| Bozkır | Kalmuk Hanlığı (1) · Kazak Hetmanlığı (2) |
| Osmanlı içi yarı özerk (2) | Bitlis · Hakkâri · Cizre-Bohtan · Soran · Baban · Behdinan · Bağdat Memlükleri · Zâhir el-Ömer |
| Yemen | Tâhirîler (1) · Resûlîler (4) |
| Öteki (4) | Ligurya · Batav · Lombardiya-Venedik · Oyrat · Moldova DC · Kurland · İlorin · Hannover/Württemberg/Vestfalya |

\* Doğu Macar Krallığı muhtemelen yeni künye DEĞİL, `erdel`'in genişletilmesidir (④).

⚠️ "Osmanlı içi yarı özerk" kümesi bir **karar** ister. Bu toprak haritada zaten OSMANLI.
Künye açılırsa kronoloji yazılabilir, ama haritada tâbi (`v:`) modeli kurulmazsa künye görünmez.
Hüküm koordinatörde.

**Eşanlam (EKSİK DEĞİL, 15 ad).** Künyesi var, kronolojide başka yazımla geçiyor (D215):

| Kronolojideki ad | Künye id'si |
|---|---|
| Ceneviz | `cenova` |
| Astrahan | `astarhan` |
| Kokand | `hokand` |
| Vedây | `vaday` |
| Hârizm | `harezm-halk-cumhuriyeti` |
| Zengibar | `umman-zengibar` |
| Kilve | `svahili-sehirleri` |
| Kâşgar Hanlığı | `yakub-beg` |
| Neopatras | `katalan` |
| Egeopelagos | `naksa-dukaligi` |

Tam liste JSON'da (`esanlam`).

## ④ ÖMRÜ ŞÜPHELİ — 26 künye

İlk iş sınıflandırmadır (D205), düzeltme değil. `data/devletler.js`e dokunulmadı.

| id | alan | künye | dayanak | sınıf |
|---|---|---|---|---|
| **erdel** | f | 1570 | TDV `erdel`: 1541'de haraçgüzar voyvodalık | **② GENİŞLET** |
| **mekke-serifligi** | t | 1919-01-10 | TDV `mekke`: emirlik unvanı 8 Mayıs 1919'da kaldırıldı | gün |
| **trablusgarp-ocagi** | t | 1911 | TDV `trablusgarp`: Karamanlı 1711-1835; 1835'te merkeze bağlandı | **① KISALT** (v:kid 1835 sonrası OSMANLI'ya → yerleşim önerisi, koşu ister) |
| **sirbistan-nemanjic** | t | 1402 | TDV `sirbistan`: Nemanjić 1166-1371 | **③ ARDIL** (1371-1402 Lazarević) |
| karakoyunlu | t | 1469-01-01 | kendi maddesi: Hasan Ali 1469-04-01'de öldü | ② |
| katalan | t | 1388-01-01 | kendi maddesi: Akropolis 1388-05-02'de düştü | ② |
| kumuk-samhalligi | f/t | 1578-1607 | TDV `kumuklar`: 1867'ye kadar Rus hâkimiyeti | ② (uçlar ölçülemedi) |
| kaheti-kralligi | f/t | 1578-1606 | bulunamadı | ②? — pencere bir sefer penceresi gibi |
| varsova-dukaligi | f | 1807-07-22 | kendi maddesi 1807-07-07 (Tilsit) | gün (15 gün) |
| kuveyt ↔ sabah-emirligi | — | 1752 / 1795-1914 | TDV `kuveyt` | **mükerrer** |
| katar ↔ sani-emirligi | — | 1868 / 1871-1913 | TDV `katar`: 1868 | **mükerrer** |
| sadi ↔ fas | — | 1511-1659 / 1549-1923 "Sâdî/Alevî" | TDV `sadiler`: 1549 | **mükerrer** (1549-1659) |
| zeta ↔ crnojevic-zetasi | t | 1514 / 1482-1499 | kendi künyesi | **mükerrer/örtüşme** |
| hollanda | f/t | 1581-1923 "Cumhuriyet" | TDV `hollanda`: Batav Cumhuriyeti 1795 | ③ |
| almanya | f/t | 962-1923 | kendi maddeleri (Vestfalya, Weimar) | ③ (1806-1871 Almanya devleti yok) |
| milano-dukaligi | t | 1859 | kendi maddeleri (Ambrosian, Lombardiya-Venedik) | ①/③ |
| napoli | kapsam | 1282- "İki Sicilya" | TDV `sicilya` | ③ (Sicilya 1282-1816 ayrı taç) |
| polonya-erken | f | 1320 | kendi maddeleri 1295-1308 | ③? |
| arma | f/t | 1750-1760 | TDV `tinbuktu`: 1750 arma yönetimi aldı | ölçülemedi |
| eyyubi-hisnikeyfa | t | 1462 | TDV gövdesi boilerplate (tuzak ④) | ölçülemedi |
| hurmuz-sultanligi | t | 1514 | bulunamadı | ②? |
| konstantin-beyligi | t | 1844 | bulunamadı | ölçülemedi |
| sirbistan-prensligi | f | 1804 | bu oturumda çekilmedi | ölçülemedi → KRONO-BALKAN-B |
| yunanistan | f | 1821 "Krallık" | bu oturumda çekilmedi | ölçülemedi → KRONO-BALKAN-D |
| aiz | f/t | 1918-1920 | bulunamadı | ölçülemedi |
| kacar | t | 1925-01-01 | — | gün (site ufku dışında) |

Kardeş paketlere en çok dokunan dört satır: **erdel** (TUNA, ORTA-AVRUPA), **trablusgarp-ocagi**
(MAGRIB), **sirbistan-nemanjic** (BALKAN-B), **mükerrer Kuveyt/Katar** (DOĞU-İSLÂM kapsamı dışı,
Arabistan).

## ⑤ SESSİZ BORÇ — renksiz 14 ve ters yön

**Renksiz gerçek sessiz 14** (§1.5 ile birebir):

| Grup | Künyeler |
|---|---|
| Amerika | `aleut` · `arua` · `charrua` · `guarani-misyonlari` · `ranquel` |
| Balkan / Ege | `crnojevic-zetasi` · `girit-devleti` · `kibris-ingiliz` · `oniki-ada-italyan` |
| Kuzey Avrupa | `luksemburg-hollanda-birligi` · `norvec-isvec-birligi` |
| Arabistan | `sabah-emirligi` · `sani-emirligi` |
| Bozkır | `kasim` |

`sabah-emirligi`, `sani-emirligi` ve `crnojevic-zetasi` ④'teki mükerrer künyelerdir. Sessiz
olmaları büyük olasılıkla bundandır: haritada öteki künye çalışıyor.

**Ters yön** (haritada kullanılıp künyesi olmayan kimlik): **0** (`dizinsiz_harita_kimligi`). Kapsam `s:` ve `isg:`.

🔴 **Aksaklık (M-5395 ile bildirildi):** `durum_tablosu.katman_evreni()` paketlemeden sonra kör.
`index.html`in `src`'lerinden okuduğu için sınır 0 · kronoloji 4 · savaş 0 · kişi 0 dosya görüyor
(olması gereken 13 · 128 · 2 · 1). Kör hâliyle "renksiz gerçek sessiz" **29** çıkıyor; 15'i sahte.
Bu betik canlı kümeyi `index src ∪ data/paket_kunye.json kaynak`tan kuruyor ve 14'ü buluyor.
`§1.5` bir sonraki `--yaz`'da 29 yazar.

---

## ② bulunamadı · ölçülemedi

- 11 eksik adayda ve 6 şüpheli künyede TDV slug'ı tutmadı. Bunlar `bulunamadı` / `ölçülemedi`
  olarak işaretlendi. **Tarih uydurulmadı:** eksik adaylara ömür yalnız kaynak verdiyse yazıldı
  (Vidin, Resûlîler, Bakü).
- K4 (ad geçişi) Türkçe sıradan sözcüklere takılıyor. `ordu` (Hacıemîr), `kasim` (ay adı) ve
  `kazan` ("kazandı") durduruldu; başkaları kalmış olabilir. K4 bu yüzden `madde_sayisi`'na katılmadı.
- `DOSYA_ADAYLARI` eşlemesi **elle** kuruldu (31 dosya). Hangi dosyanın hangi künye soyunu
  taşıdığı dosya içeriğinden okundu; ayrıntısı betikte.
- TDV aramasında 6 iplikle 50 istekten yaklaşık yarısı 503 döndü (hız sınırı). Betik 2 iplik ve yeniden deneme ile çalışıyor.
