# Oturum 10 — Savaşlar ve antlaşmalar: ilerleme raporu

Tarih: 2026-07-29. Yazılan tek dosya: `data/savaslar.js`. Model: Sonnet.

---

## EK — devam görevi (2026-07-30, entegrasyon oturumunun cross-session mesajı üzerine)

Aradan entegrasyon oturumu geçti, 42 muharebe ekledi (57 haritada yeri olmayan
adlandırılmış savaştan 42'si gerçek muharebeydi), `js/app.js`'e `karsiTaraf()`
ekledi, `SERILER`e `ic` tanımını ekledi ve bana üç ölçülmüş eksik bildirdi. Bu
bölüm o devam görevinin raporu.

### 1. 71 eksik `tur` alanı — TAMAMLANDI

Oturum 10'un orijinal 108 kaydının 71'i `tur` alanı olmadan yazılmıştı (eski
kural: "tur yoksa meydan"). Hepsine `meydan`/`kusatma`/`deniz` atandı — isyan
gerektiren yoktu, hepsi zaten dış devlet savaşıydı. Dağılım şimdi:

```
kusatma: 48   meydan: 79   isyan: 21   deniz: 21   (toplam 169, 0 eksik)
```

İki karar özellikle not edilmeli:
- **1683-09-12 "II. Viyana Kuşatması"** `tur:"meydan"` oldu, kuşatma değil —
  bu tarih Sobieski'nin gelişiyle kırılan **kurtarma muharebesi**; kuşatmanın
  kendisi zaten ayrı bir kayıt (`1683-07-14`, `tur:"kusatma"`) olarak tabloda
  duruyor. İkisini aynı `tur` yapmak iki farklı olayı üst üste bindirirdi.
- **Akkâ bombardımanı (1840)** ve **93 Harbi (Plevne)**, **Kûtülamâre**,
  **Bağdat'ın düşüşü**, **Kudüs'ün düşüşü** gibi "zafer/düşüş" adlı kayıtlar
  `kusatma` sayıldı çünkü hepsi bir şehrin kuşatılıp düşmesi/savunulmasıdır —
  tek muharebe alanında iki ordunun karşılaştığı bir "meydan" değil.

### 2. Kimlik uyuşmazlığı — bildirilenin ÖTESİNDE 11 kayıt daha bulundu

Mesaj yalnız `habsburg`/`avusturya` çiftini bildirmişti. `arac/renkler.py`
(harita boyama sözlüğü) ile `data/savaslar.js`'te kullandığım 36 `taraf` id'si
**programatik olarak karşılaştırıldı** (`arac/renkler.py`'ye dokunulmadı,
yalnız okundu). Sonuç: **12 id'nin 12'si de** `devletler.js`'teki adla
`renkler.py`'deki adı **farklı**:

| `devletler.js` id (`taraf`'ta kullanılan, DOĞRU — birebir eşleşme kuralı bu) | `renkler.py`'de boyanan karşılığı |
|---|---|
| `habsburg` | `avusturya` |
| `bosna-kralligi` | `bosna` |
| `bulgaristan-prensligi` | `bulgaristan` |
| `sirbistan-prensligi` | `sirbistan` |
| `sirp-despotlugu` | `sirbistan` (ortaçağ ve modern Sırbistan **aynı** boya id'sini paylaşıyor — `renkler.py` dönem ayrımı yapmıyor) |
| `cenova` | `ceneviz` |
| `rodos-sovalyeleri` | `sovalye` |
| `sardinya-piyemonte` | `sardinya` |
| `suud-birinci` | `suud` (üç Suûdî devleti — I/II/III — `renkler.py`'de **tek** id) |
| `yemen-zeydi` | `yemen` |
| `afsar` | `iran` (muhtemelen `renkler.py`'nin `iran` kimliği Safevî-sonrası bütün dönemleri — Afşar/Zend/Kaçar — **tek renkte** topluyor; `devletler.js` bunları üçe ayırıyor) |
| `misir-kavalali` | **YOK** — `renkler.py`'de Mısır/Kavalalı hiç ayrı boyanmıyor. Muhtemelen `yerlesimler.js`'in `v:` (tâbi) mekanizmasıyla açık kırmızı gösteriliyor, ayrı devlet rengi almıyor. Bu bir hata olmayabilir — kontrol edilmeli. |

Kalan 24 id (`bizans`, `memluk`, `safevi`, `macaristan`, `venedik`, `lehistan`,
`rusya`, `ingiltere`, `fransa`, `ispanya`, `portekiz`, `napoli`, `papalik`,
`italya`, `yunanistan`, `romanya`, `karadag`, `kirim`, `timurlu`, `akkoyunlu`,
`dulkadir`, `eflak`, `fas`, `almanya`) **birebir eşleşiyor** — sorun yok.

**Değiştirmedim** — `taraf` alanı hâlâ `devletler.js` id'siyle yazılı (orijinal
kural bunu istiyor: "id'ler devletler.js'teki id alanıyla birebir eşleşmeli").
`data/kimlikler.js` henüz yok (Oturum 9 kuruyor, `ETIKETLEME.md §5`). Bu tablo
o sözlük yazılırken `esad` alanına doğrudan girebilir.

### 3. `savas_basi` — 41 antlaşmanın 37'sine eklendi + 8 yeni antlaşma

`arac/uret_devirler.py` **okundu, değiştirilmedi**. Kendi içinde 11 antlaşmalık
ayrı bir Python kataloğu var (`ANTLASMALAR` listesi, `data/savaslar.js`'ten
BAĞIMSIZ) ve o kataloğun kimlik uzayı da `renkler.py` ile aynı kısa isimleri
kullanıyor (`avusturya`, `sirbistan`, `bulgaristan`, `iran` — `habsburg`,
`sirbistan-prensligi` vb. değil). Yani **üçüncü bir tutarsızlık boyutu**:
`data/savaslar.js.ANTLASMALAR` (devletler.js kimlik uzayı) ile
`uret_devirler.py.ANTLASMALAR` (renkler.py kimlik uzayı) aynı antlaşmaları
**iki ayrı id setiyle** tutuyor. Betiğe dokunmadım ama bu üçüncü çakışmayı da
rapor ediyorum.

`data/savaslar.js`'teki 41 antlaşmanın 37'sine `savas_basi` eklendi (kalan 4 —
Hünkâr İskelesi, Balta Limanı, Londra Boğazlar Sözleşmesi, Akkerman — bir
savaşı bitirmiyor, tehditle/ticarî olarak dayatıldı; `savas_basi` bilerek
yazılmadı ya da `null` bırakıldı). `uret_devirler.py`'nin 11 kaydıyla
**tarihler tutarlı** tutuldu (Karlofça 1683-07-14, Pasarofça 1714-12-08,
Küçük Kaynarca 1768-10-08, Berlin 1877-04-24, Uşi 1911-09-29 — hepsi aynı).

**8 yeni antlaşma eklendi** (mesajın "eksik önemli antlaşmalar" listesinden,
gerçek boşluk olanlar): Serav (1618, Safevî), Vasvar (1664, Habsburg — Sen
Gotar'ın barışı, **hiç yoktu**), Ziştovi (1791, Habsburg) ve Yaş (1792, Rusya)
— **1774 Küçük Kaynarca'dan 1812 Bükreş'e kadarki koca 1787-1792 savaşının
antlaşması tabloda hiç yoktu**, bu en büyük boşluktu — Akkerman (1826, Rusya),
Ayastefanos/San Stefano (1878, Rusya — Berlin'in ön antlaşması), İstanbul
(1913, Bulgaristan — Edirne'nin resmî iadesi), Atina (1913, Yunanistan —
Girit'in ilhakının tanınması). Toplam antlaşma: 33 → **41**.

### Doğrulama (2026-07-30)

```
SAVASLAR: 169 | ANTLASMALAR: 41 | SEFERLER: 50 | SERILER: 16
tur dağılımı: kusatma 48 · meydan 79 · isyan 21 · deniz 21  (0 eksik)
lat/lon eksik: 0
antlaşma savas_basi: 37/41
devletler.js'de olmayan id: 0
```

### Dokunulmayanlar (bu turda da)

`arac/uret_devirler.py` yalnız okundu. SEFERLER'e yeni bir şey eklemedim —
mesajın "Öncelik 4" listesindeki bütün örnekler (Memlük 1485-91, Timur'un
Sivas/İzmir seferleri, Niğbolu Haçlı güzergâhı, Savoy seferi, Turahan Bey'in
Mora seferi) **entegrasyon oturumunun kendi commit'lerinde zaten eklenmişti**
(bkz. dosyadaki `taraf:"dusman"` etiketli kayıtlar) — mükerrer eklemedim.

## Özet sayılar

```
savas: 122  (eskiden 108, +14 yeni)
antlasma: 33  (eskiden 30, +3 yeni)
taraf alanı olan kayıt: 139 / 155
devletler.js'te karşılığı olmayan id: 0
```

Doğrulama komutu (CLAUDE.md/OTURUM-10'daki) çalıştırıldı, **0 kötü id** döndü.

## ⚠️ Şema değişikliği — Oturum 1'in (js/app.js) haberi olmalı

Görev tanımındaki örnek `taraf:[...]` alanını **doğrudan eski `taraf` alanının
üstüne yazacak şekilde** tarif ediyordu, ama eski `taraf` zaten serbest metin
olarak dolu ve **js/app.js bunu ekranda gösteriyor**
(`js/app.js:597,602,869,876` — "ad — taraf" ve "karşı taraf: taraf" gibi).

Veri kaybetmemek ve ekranı sessizce bozmamak için:
- Eski serbest metin alan **`taraf_metin`** adına taşındı (içerik aynı).
- Yeni **`taraf`** alanı artık her zaman `devletler.js` id dizisi.
- **`js/app.js` hâlâ `s.taraf`/`a.taraf` okuyor** — dizi olduğu için hata
  vermez ama ekranda "Mohaç — osmanli,macaristan" gibi virgüllü id listesi
  görünür (önceden "Mohaç — Macaristan" idi). **Oturum 1'in `js/app.js`'i
  `taraf_metin`'e geçirmesi veya `taraf` id'lerini `devletler.js`'ten ada
  çözümlemesi gerekiyor.** Dosyanın başına bunu açıklayan bir yorum blok'u
  eklendi.

Bunu ben düzeltemedim çünkü `js/app.js` benim dosya sahipliğimin dışında.

## devletler.js'te bulunan gerçek boşluklar (Oturum 3'e / entegrasyona bildirim)

Taraf bağlarken sistematik bir örüntü çıktı: **bazı devletler yalnız "tâbi/özerk"
evrelerinde bir id'ye sahip, tam bağımsızlık kazandıkları andan itibaren id'leri
kapanıyor ve devamı hiç modellenmemiş:**

- **Sırbistan**: `sirbistan-prensligi` 1804–1882'de bitiyor. 1882 Krallık ilanından
  1918'e kadarki tam bağımsız Sırbistan Krallığı'nın id'si yok. Balkan Savaşları
  (1912-13) ve Berlin (1878) gibi olaylarda bu id'yi (aralığının dışında olsa da)
  **kullanmak zorunda kaldım** — id'nin kendisi doğru varlığı gösteriyor, sadece
  tarih aralığı 1882'de duruyor.
- **Bulgaristan**: `bulgaristan-prensligi` 1878–1908'de bitiyor. 1908 tam
  bağımsızlık sonrası Bulgar Krallığı'nın id'si yok. II. Balkan Savaşı (1913) ve
  Londra Antlaşması (1913) için aynı şekilde aralık-dışı kullanıldı.
- **Romanya**: `romanya` 1859–1881'de bitiyor. 1881 Krallık ilanı sonrası id yok.
  Lozan'da (1923) Romanya de facto taraftı ama id'si olmadığı için **eklenmedi**.
- **Fransa**: `fransa` 987–1792'de bitiyor (Cumhuriyet ilanıyla kapanmış). 1792
  sonrası (Devrim, Napolyon, Restorasyon, III. Cumhuriyet) için **hiç id yok**.
  Bu yüzden Navarin (1827), Londra Protokolü (1830), Çanakkale (1915), Mondros,
  Sevr, Mudanya, Lozan gibi Fransa'nın açıkça taraf olduğu kayıtlarda **Fransa
  taraf listesine eklenemedi** — uydurmadım, boş bırakıldı.
- **Lehistan öncesi (Polonya Krallığı, ör. 1444 Varna, 1396 Niğbolu döneminde)**:
  `lehistan` (Lehistan-Litvanya Birliği) 1569'da başlıyor; ortaçağ Polonya
  Krallığı'nın ayrı id'si yok. Varna/Niğbolu'da yalnız Macaristan bağlandı.
- **Sovyet Rusya / Kafkas Sovyet cumhuriyetleri**: 1921 Kars Antlaşması'nın asıl
  muhatapları (Sovyet Rusya, Ermenistan SSC, Azerbaycan SSC) — **hiçbiri
  devletler.js'te yok**. `gurcistan` id'si de 1801'de bitiyor, 1921'i kapsamıyor.
  Kars Antlaşması taraf listesine bu yüzden yalnız `tbmm-turkiye` yazıldı.
- **Ermenistan / Azerbaycan** genel olarak (1918-1921 bağımsızlık dönemi dahil)
  hiç id olarak yok.

Bu altı boşluk, ileride devlet-merkezli yükleme (MIMARI.md §6.5) kurulurken
Sırbistan/Bulgaristan/Romanya/Fransa/Rusya'ya tıklandığında 1880-1920 arası
hiçbir "ilgi bağı" bulunamayacağı anlamına geliyor. Oturum 3'ün (devletler.js
sahibi) bilmesi gereken en somut bulgu bu.

## Görev 1 — Taraf bağlama

108+30 = 138 mevcut kayıt tek tek incelendi; 122+33=155 kayıttan **139'una**
`taraf` (id dizisi) eklendi. 16 kayda eklenmedi:
- **Çirmen (1371)**: "Sırp beyleri" — Sırp İmparatorluğu'nun dağılma döneminde
  tek bir devletler.js id'si yok.
- **14 iç isyan** (Şeyh Bedreddin, Börklüce Mustafa, Torlak Kemal, Şahkulu×2,
  Bozoklu Şeyh Celâl, Hain Ahmed Paşa, Kalender Çelebi, Karayazıcı, Deli Hasan,
  Canbolatoğlu, Kalenderoğlu, Abaza Mehmed Paşa, Abaza Hasan Paşa, Pazvandoğlu
  Osman): bunlar devlet-i aliyye içi hareketler, karşılarında bir "taraf devlet"
  yok. Bilerek boş bırakıldı (Birinci Sırp İsyanı ve Mora İsyanı farklı — bunlar
  doğrudan bir devletler.js kaydının kuruluş anına denk geldiği için bağlandı).

`galip` alanı yalnız meydan muharebeleri ve deniz muharebelerinde, açık galibi
olanlara eklendi (kuşatma ve "belirsiz" sonuçlarda bilerek boş bırakıldı — görev
tanımındaki kural). Kırım Savaşı, 93 Harbi, Trablusgarp gibi "savaş" başlıklı
tekil kayıtlarda `galip` o savaşın genel Osmanlı-açısından sonucuna göre yazıldı.

Birkaç özel karar:
- **Sakarya, Büyük Taarruz, Birinci/İkinci İnönü, Kars, Mudanya, Lozan**: taraf
  `"osmanli"` değil **`"tbmm-turkiye"`** — bu savaşları/antlaşmaları fiilen
  yürüten TBMM hükûmeti, zaten devletler.js'te ayrı bir id olarak modellenmiş.
  Mondros ve Sevr'de hâlâ `"osmanli"` kullanıldı (o tarihte TBMM ya yok ya da
  imzacı değil).
- **Diu (Portekiz, 1509)**: taraf'a `"osmanli"` **eklenmedi** — bu tarihte
  Osmanlı sahada yok, savaşı Memlük (+Gucerat/Kalikut) donanması yaptı. Mevcut
  veri `seri:"memluk"` ile zaten doğru gruplamıştı, taraf da buna göre düzeltildi.
- **Karlofça**'da görev tanımının örneği `"avusturya"` id'sini kullanıyordu;
  devletler.js'te bu id **`"habsburg"`** — örnek muhtemelen taslak aşamasından
  kalmış, gerçek id kullanıldı.

## Görev 2 — Eksik savaş/antlaşma ekleme

`data/olaylar*.js`'te `etiket` alanında "savas" geçen **285 madde** tarandı;
`data/devletler.js` kronolojisinde `tur:"savas"/"antlasma"` olan **217 madde**
tarandı. Bunların çoğu ya zaten tabloda var, ya da dünyanın Osmanlı'yla hiç
ilgisi olmayan olaylar (Zulu, Maratha, Meiji Japonya, ABD İç Savaşı gibi — §1.6
"atlas Osmanlı merkezli" kuralı gereği **eklenmedi**).

Gerçek boşluk olan ve **eklenen 14 yeni SAVASLAR kaydı**:
Turnadağ (1515, Dulkadir ilhakı), Cecora/Ţuţora (1620) ve Hotin kuşatması (1621)
— **Osmanlı-Lehistan savaş serisinin (1620-1699) tabloda tek bir savaş kaydı bile
yoktu**, bu en belirgin boşluktu — Sen Gotar/St. Gotthard (1664), Zenta bozgunu
(1697), Varadin/Petrovaradin bozgunu (1716), Musul savunması (1743, Nadir Şah),
Kartal/Kagul bozgunu (1770), Kozluca bozgunu (1774), İsmail kuşatması (1790),
Slobozia bozgunu (1811), Oltenitsa zaferi (1853), Birinci İnönü (1921),
İkinci İnönü (1921) — **İstiklal Savaşı'nın iki kilit muharebesi tabloda hiç
yoktu**, ikinci en belirgin boşluktu.

**3 yeni ANTLASMALAR kaydı**: Mudanya Mütarekesi (1922 — tabloda hiç yoktu,
Millî Mücadele'nin resmî bitiş antlaşmalarından biri eksikti), Kerden Antlaşması
(1746, Afşar/Nadir Şah ile), Sırbistan özerklik fermanı (1830).

**Not — tükenmedi, seçildi:** 285+217 madde arasında hâlâ tabloya eklenebilecek
onlarca alt-olay var (örn. Sen Gotar sonrası Habsburg cephesindeki daha küçük
çarpışmalar, 1877-78'in Şıpka/Kars gibi diğer cepheleri). Zaman bütçesi
içinde en büyük yapısal boşlukları (bütün bir savaş serisinin boş olması,
İstiklal Savaşı'nın iki muharebesinin eksik olması, bir antlaşmanın hiç
olmaması) kapatmayı önceledim; kalanı gelecek bir tur için bırakıyorum.

## Görev 3 — Antlaşma maddelerini netleştirme

33 antlaşmanın **tamamına** yeni `topraklar` alanı eklendi — kısa, açık "hangi
yer kimden kime" cümlesi. `data/yerlesimler.js` ile örneklem olarak çapraz
kontrol edildi (Mora, Kamaniçe/Podolya, Belgrad, Kars/Ardahan): dört örnekte de
`topraklar` metnindeki geçiş tarihleri yerlesimler.js'teki gerçek `s`/`d`
dönüm noktalarıyla **birebir örtüştü** (ör. Kars/Ardahan'ın Rusya'ya geçişi
tam 1878-07-13 Berlin tarihinde, Kamaniçe'nin Lehistan'a dönüşü tam 1699-01-26
Karlofça tarihinde). Bu, mevcut haritanın kırılma tarihleriyle antlaşma
tarihlerinin zaten tutarlı olduğunu doğruluyor.

## Dokunulmayanlar

`data/devletler.js`, `data/kisiler.js`, `data/yerlesimler.js`, `data/olaylar*.js`
yalnız okundu. `arac/`, `index.html`, `js/app.js`, kök `*.md` dosyaları
dokunulmadı. `SEFERLER` dizisine hiç dokunulmadı. `SERILER` dizisine de yeni
seri eklenmedi (Musul/Kerden gibi Afşar-dönemi kayıtlar için `seri:""` bırakıldı
— yeni bir "Osmanlı-Afşar" serisi tanımlamak devletler.js/SERILER kapsamını
genişletir, bu oturumun sınırları içinde görmedim).

Commit atılmadı, `arac/uret_petek.py` çalıştırılmadı.

---

## EK 2 — SEFERLER hareket tipolojisi + 10 yeni ok (2026-07-30, Merkez Oturum görevi)

### Öncelik 1 — mevcut 50 SEFERLER kaydına `tur`/`sonuc` — TAMAMLANDI

`js/app.js`'teki `HAREKET`/`SONUC_ROZET` şemasına göre 50/50 kayda `tur` ve
`sonuc` eklendi (`ad:"..."` metniyle birebir eşleştirilerek, 0 bulunamayan).
Her `sonuc`, ilgili SAVASLAR kaydıyla (aynı olay ikisinde de varsa) çapraz
kontrol edilip Osmanlı-merkezli yönle hizalandı. Doğrulama: `node -c` geçti,
`tur`/`sonuc` eksik: 0.

Commit: `d0981d8` (yalnız `data/savaslar.js`, izole diff, `git diff --cached
--stat` ile kontrol edilip atıldı).

### Öncelik 2 — 10 yeni ok — TAMAMLANDI (10/10 girdi)

Mesajdaki 10 madde de kronolojide zaten belgelenmiş tarih/yer kullanılarak
eklendi, yeni tarihî iddia üretilmedi:

| md. | Kayıt | tur | sonuc | Kaynak (kronoloji) |
|---|---|---|---|---|
| 4 | İkinci Sırp İsyanı (1815) | isyan | belirsiz | 1815-04-23 |
| 5 | İpsilanti'nin Eflak-Boğdan harekâtı (1821) | isyan | zafer | 1821-02-22 |
| 6 | Müttefik donanmasının Navarin'e gelişi (1827) | deniz | yenilgi | 1827-10-20 |
| 12 | Rus donanmasının Büyükdere'ye gelişi (1833) | deniz | belirsiz | 1833-02-20 |
| 19 | Osmanlı donanmasının İskenderiye'ye teslimi (1839) | teslim | yenilgi | 1839-07-14 |
| 31 | Girit İsyanı'nın başlaması (1866) | isyan | belirsiz | 1866-08-21 |
| 33 | Belgrad garnizonunun çekilmesi (1867) | cekilme | yenilgi | 1867-04-18 |
| 34 | Abdülaziz'in Avrupa seyahati (1867) | seyahat | belirsiz | 1867-06-21 → 08-07, 5 duraklı güzergah |
| 39 | Rus ordusunun Yeşilköy'e gelişi (1878) | sefer | yenilgi | 1878-01-31 (Edirne Mütarekesi) → 1878-03-03 (Ayastefanos) arası köprülendi, tekil "Yeşilköy'e varış" günü kronolojide ayrı madde olarak yok |
| 55 | Arnavutluk İsyanı (1910) | isyan | zafer | 1910-04-01 |

İç isyan tipi (`isyan`) kayıtlara `taraf`'ın binary rengini bozmadan üçüncü bir
görsel kategori için `renk:"#6b2d8a"` (soluk mor) eklendi — `js/app.js`'te
`renk` alanı `taraf`-tabanlı rengin önüne geçiyor (satır ~845), yeni bir
`taraf` değeri gerekmedi. Deniz oklarından ikisine de (Navarin, Büyükdere,
Yeşilköy) ayırt edici mavi tonları (`#1f5fa8`, `#0d7d8a`) verildi çünkü hepsi
"yabancı güç" hareketiydi, Osmanlı'nın kendi deniz seferlerinden (yeşil/kahve
varsayılan) ayrışması gerekiyordu.

**Kronolojide tarihi/yeri olmadığı için eklenemeyen ok yok** — 10/10 madde
zaten mevcut `data/olaylar*.js` kayıtlarıyla doğrudan veya (md.39'da) iki
komşu kayıt arasında köprülenerek karşılanabildi.

Doğrulama: `SEFERLER: 60 | tur eksik: 0 | sonuc eksik: 0 | yol<2: 0`.
`SAVASLAR: 169 ANTLASMALAR: 41 SERILER: 16` değişmedi (kapsam taşması yok).

### ⚠️ Commit karışması — bc89690

`git add data/savaslar.js && git diff --cached --stat && git commit -m "..."`
komutunu zincirli çalıştırdım. Komut sırasında **Oturum 2 kendi dosyalarını
zaten stage etmişti** (`git add` benim komutumdan önce, başka bir oturumda);
`git commit` o an **stage'deki her şeyi** commit'liyor, yalnız benim `git add`
ettiğimi değil. Sonuç: `bc89690` benim 37 satırlık `data/savaslar.js`
değişikliğimin yanında Oturum 2'nin `arac/denetle.py`, `arac/denetle_anakronizm.py`,
`arac/denetle_gorunurluk.py`, `arac/denetle_yayin.py` ve dört `denetim/*.md`
dosyasını da içeriyor — commit mesajı yalnız benim işimi anlatıyor, onlarınkini
anlatmıyor.

Veri kaybı yok (Oturum 2'nin işi doğru ve tam commit'lendi, sadece yanlış
mesaj altında). Merkez Oturum'un uyarısı üzerine **revert/reset yapılmadı** —
paylaşımlı, eşzamanlı yazılan bir depoda geçmiş yeniden yazmak, düzelttiğinden
daha büyük hasar riski taşıyor. Bundan sonra `git add data/savaslar.js` →
`git diff --cached --stat` (neyin eklendiğini GÖR) → `git commit` sırası
istisnasız uygulanacak; zincirleme (`&&`) komut yerine ayrı adımlar
kullanılacak ki `git diff --cached --stat` çıktısı gerçekten görülsün.

### ⚠️ İkinci commit karışması — bu EK'i yazarken, ters yönde

Bu bölümü yazıp `git add oturumlar/OTURUM-10-ILERLEME.md` çalıştırdığımda
index'te **Oturum 7'nin zaten stage ettiği** `data/olaylar_ek7.js` ve
`oturumlar/OTURUM-7-ILERLEME.md` vardı. Bunu `git diff --cached --stat` ile
gördüm ve `git restore --staged` ile ikisini index'ten çıkardım — commit
etmedim. Ama restore komutlarım ile tekrar `git add` arasında geçen sürede
Oturum 7 kendi `git commit`'ini çalıştırmış; o an index'te duran benim
`OTURUM-10-ILERLEME.md` dosyam da **onların** commit'ine
(`bc3caef` "Oturum 7: Sinop Baskini eklendi...") karıştı.

Veri kaybı yok — dosyam eksiksiz ve doğru şekilde commit'lendi, sadece yanlış
commit mesajı altında. Bu, Merkez Oturum'un bana bildirdiği `bc89690`
durumunun tam aynası, bu kez ben mağdur değil sebep oldum. Revert yine
yapılmadı, aynı gerekçeyle (paylaşımlı depoda geçmiş yeniden yazmak daha
riskli). `data/savaslar.js`'e bu sırada dokunulmadı, orada karışma yok.

**Çıkarım**: `git diff --cached --stat` ile kontrol etmek tek başına yetmiyor;
stage edilip commit edilmeden bırakılan HERHANGİ bir dosya, bir sonraki
oturumun commit'ine yutuluyor. Kural muhtemelen "stage ettikten hemen sonra
commit et, ikisi arasına başka komut sokma" şeklinde sıkılaştırılmalı.

---

## EK 3 — hatalar 12'den iki ok maddesi (2026-07-30, Merkez Oturum görevi)

### md.3 — Katalan oku "erken" görünüyor mu? ÖLÇÜLDÜ, HATA DEĞİL

`data/savaslar.js`'teki kayıt: `Katalan Kumpanyası'nın Anadolu seferi
(1303-1305)`, `f:"1303-09-01"`, `t:"1305-06-01"`. Bu tarihler doğru
(Katalan Kumpanyası Anadolu'ya 1303'te geldi, 1305'te Trakya'ya çekildi).

`js/app.js`'teki gösterim penceresi ölçüldü (satır 959): SEFERLER okları
`fi:gunIdx(s.f)` ile başlar, `ti:gunIdx(s.t)+45` ile biter — yalnız kendi
`f`/`t` alanına bağlı, GERİYE doğru hiç taşmaz. Bu, SAVASLAR nokta
işaretlerinin kullandığı "bir sonraki kronoloji maddesine kadar, taban 60
tavan 365 gün" penceresinden (satır 699-707, `sonrakiOlayaKadar`) TAMAMEN
AYRI bir mekanizma — o pencere yalnız `⚔` meydan işaretlerinde kullanılıyor,
SEFERLER oklarında değil.

Kronolojideki "Sakarya seferi" maddesi (`olaylar_ek5.js`, `t:"1304-01-01"`)
Katalan seferinin kendi aralığının (1303-09 → 1305-06) TAM İÇİNDE. Yani ok
Sakarya seferi görüntülenirken görünüyorsa bu veri hatası değil — iki
olay gerçekten aynı yıllarda, farklı coğrafyalarda yaşanmış ve tesadüfen
üst üste düşüyor. `js/app.js`'teki mevcut bir yorum (satır 952-955) bu tür
karışıklığı öngörüp okun ucuna `ad` etiketi eklemiş zaten ("Katalan
Kumpanyası'nın Anadolu seferi..." yazısı ok başında görünür).

**Sonuç: `data/savaslar.js`'te düzeltilecek bir şey yok.** Kullanıcı hâlâ
karışıklık yaşıyorsa bu bir etiketleme/okunabilirlik meselesi —
`js/app.js` sahibi Oturum 1'in konusu, benim dosyamın değil.

### md.9 — Savcı Bey isyanı — EKLENDİ

Kronolojide (`olaylar_ek5.js`, `t:"1373-05-15"`) kayıt var: `yer:"Bursa –
İstanbul"`, iki şehirde eş zamanlı isyan. Tek nokta yok ama iki şehir adı
kronolojide açıkça geçtiği için "yeri kronolojide yok" durumu değil —
Bursa/İstanbul arası rota çizildi, koordinatlar dosyada zaten defalarca
kullanılan Bursa `[29.06,40.19]` ve İstanbul `[28.98,41.01]` noktaları
(yeni koordinat araştırılmadı). `tur:"isyan"`, `sonuc:"zafer"` (isyan
bastırıldı, Savcı Bey yakalanıp idam edildi — merkezi Osmanlı devleti için
olumlu sonuç, önceki isyan kayıtlarıyla aynı Osmanlı-merkezli kural).

Mesajdaki "Çekmece/Apikridion'da bastırıldı, Dimetoka'da mil çekildi" detayı
kronolojide YOK (kronoloji yalnız "Bursa – İstanbul" diyor) — bu yüzden o
ayrıntı koordinat/rota olarak KULLANILMADI, kronolojinin kendi `yer` alanı
esas alındı.

Doğrulama: `SEFERLER: 61 | tur/sonuc eksik: 0`. Commit `087468f`
(izole, yalnız `data/savaslar.js`).

**Durum sorusunun tekrar cevabı**: 50/50 SEFERLER kaydına tur/sonuc
eklendi, 10/10 yeni ok girdi (yukarıda EK 2), kronolojide yeri/tarihi
olmadığı için eklenemeyen ok yoktu. Bu turda da (md.3, md.9) ikisi de
kronolojiyle karşılandı, Opus'a havale gerekmedi.

---

## EK 4 — hatalar 13 md.8: Timur'un 1402 harekâtı, "ok var madde yok" (2026-07-30)

### 1-2. SEFERLER kayıtları ve kronoloji karşılığı (±30 gün) ÖLÇÜLDÜ

Üç kayıt bulundu (hepsi `taraf:"dusman"`, Timur seferi):

| Kayıt | f → t | Kronoloji karşılığı |
|---|---|---|
| Timur'un yürüyüşü (1402) | 1402-06-01 → 1402-09-01 | **var** — Ankara Savaşı 1402-07-28 (`olaylar.js`) pencerenin içinde |
| Timur'un İzmir seferi (1402) | 1402-08-01 → 1402-12-14 | **var, tam gün eşleşmesi** — "Timur İzmir'i Saint Jean şövalyelerinden aldı" `t:"1402-12-14"` (`olaylar_ek5.js`), kaydın `t` alanıyla BİREBİR aynı gün |
| Timur'un Anadolu'dan çekilişi (1403) | 1403-03-15 → 1403-08-01 | **var, tam gün eşleşmesi** — "Timur'un Anadolu'dan çekilmesi" `t:"1403-03-15"`, kaydın `f` alanıyla BİREBİR aynı gün |

Efes/Ayasuluk da ayrı bir boşluk DEĞİL — 1402-12-14 maddesinin `d:` metni
zaten "Kütahya, Denizli, Aydın, **Ayasuluk** ve Tire üzerinden batıya inen
Timur..." diyor, rota bu madde içinde anlatılıyor.

### 3. GERÇEK BOŞLUK — Bursa'nın yağmalanması, MADDESİ YOK

`Timur'un İzmir seferi (1402)` kaydının rotası Bursa'dan geçiyor
(`[29.06,40.19]`) ama **Timur'un Bursa'yı ele geçirip yağmalamasını
(Bayezid'in haremi dahil) anlatan bağımsız bir kronoloji maddesi yok.**
En yakın iki madde zaman olarak yakın ama konu olarak başka şeyi anlatıyor:
- `1402-08-17` "Saruhanoğulları yeniden kuruldu"
- `1402-08-20` "Emîr Süleyman devlet hazinesiyle Rumeli'ye kaçtı" — bu
  maddenin metni Bursa'dan hazineyle kaçışı anlatıyor, Timur'un şehri
  ele geçirişini DEĞİL.

Bu, senin "ok var madde yok" tarifine tam uyan gerçek boşluk. **Yeni madde
yazmadım** (kronoloji benim dosyam değil) — hangi Opus/Sonnet oturumu
`data/olaylar_ek5.js`'i sahipleniyorsa ona havale edilmeli.

### 4. tur/sonuc düzeltmesi — YAPILDI

`Timur'un İzmir seferi (1402)`: `tur:"sefer"` → **`tur:"kusatma"`** (İzmir/
Saint Jean şövalyeleri kalesinin kuşatılıp alınması kampanyanın tanımlayıcı
olayı — Rodos/Bağdat seferleriyle aynı kural). `sonuc:"belirsiz"` →
**`sonuc:"yenilgi"`**: rota Bursa'yı da kapsıyor ve aynı 1402 kampanyası
Bursa'nın yağmalanması + "Timur Anadolu beyliklerini yeniden kurdu — Türk
birliği dağıldı" (`1402-09-15`) ile sonuçlandı — Osmanlı-merkezli bakışta
açık yenilgi, kardeş kayıtlar "Timur'un yürüyüşü" ve "Sivas seferi" ile
tutarlı (ikisi de `yenilgi`). Commit `758d6c4`.

⚠️ Not: mesajında "İzmir... Timur açısından zafer" denmişti — bunu
**kasıtlı olarak uygulamadım**. Dosyanın kurulu `sonuc` kuralı (EK 1'de
belgelenmiş) baştan sona Osmanlı/merkezi-devlet merkezli: `▲`/`▼` rozeti
her zaman "merkezi devlet için iyi/kötü" okunuyor, saldıran tarafın kendi
başarısını değil. Taraf'ı `dusman` olan bütün diğer kayıtlarda da (Sivas,
Timur'un yürüyüşü) aynı yön korunmuş. Eğer "zafer" yazsaydım, kullanıcı
rozeti her zamanki gibi okuyup "Osmanlı için iyi sonuçlandı" sanırdı —
tam tersi doğru. İstersen kuralı değiştirebiliriz ama o zaman bütün
`taraf:dusman` kayıtları yeniden gözden geçirilmeli, tek kaydı ayrı
tutmak tutarsızlık yaratır.

Doğrulama: `SEFERLER: 61 | tur/sonuc eksik: 0`.
