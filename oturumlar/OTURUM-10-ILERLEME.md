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

---

## EK 5 — hatalar 15: Viyana/Budin (md.2) ve Küns (md.4) (2026-07-30)

### md.2 — ÖLÇÜLDÜ: aynı kök, Katalan (hatalar 12 md.3) ile BİREBİR AYNI mekanizma

Kayıt: `Viyana seferi (1529)`, `f:"1529-05-10"`, `t:"1529-10-16"`,
`yol` Budapeşte koordinatını (`[19.04,47.5]`) doğrudan içeriyor.
Kronolojideki "Budin'in alınıp Zapolya'ya verilmesi" maddesi
(`olaylar_ek5.js`, `t:"1529-09-08"`) bu aralığın TAM İÇİNDE — çünkü
Kanunî'nin Viyana seferi tarihsel olarak gerçekten Budin'den geçti (yeniden
ele geçirip Zapolya'ya verdi), sonra Viyana'ya yürüdü. Tek kayıt hem
Budin uğrağını hem Viyana kuşatmasını kapsıyor.

**(a) Tarih hatası DEĞİL** — f/t doğru, kampanyanın gerçek başlangıç/bitiş
günleri.
**(b) "60-365 gün" penceresi de DEĞİL** — o mekanizma (`sonrakiOlayaKadar`,
`js/app.js` satır 699-707) yalnız SAVASLAR'ın `⚔` nokta işaretlerinde
çalışıyor. SEFERLER okları TAMAMEN AYRI bir pencere kullanıyor:
`fi:gunIdx(s.f)`, `ti:gunIdx(s.t)+45` (satır 959) — yalnız kaydın KENDİ
f/t'sine bağlı, "bir sonraki madde"yle hiç ilgisi yok, geriye hiç taşmıyor.

**İki soruna da (md.2 ve hatalar 12 md.3) TEK VE AYNI CEVAP**: SEFERLER
tablosundaki bazı kayıtlar birden çok aylık/çok durak'lı GERÇEK
kampanyaları tek bir okla temsil ediyor (Katalan 1303-1305, Viyana 1529
İstanbul→Budin→Viyana). Bu kayıtların f/t aralığı doğru ve pencere
mekanizması doğru çalışıyor; sorun şu ki aralık içinde kalan ARA
kronoloji maddeleri (Sakarya seferi 1304, Budin 1529-09-08) o okun
kendi konusuyla YÜZEYSEL olarak alakasız görünüyor, kullanıcı "bu ok
neden burada" diye şaşırıyor. **Genel bir ayar hatası yok** — tek tek
düzeltilecek bir pencere parametresi de yok, çünkü mekanizma zaten
doğru çalışıyor. Var olan çözüm (ok ucundaki `ad` etiketi, `js/app.js`
satır 952-955'teki yorum) bu karışıklığı azaltmak için zaten eklenmiş;
yetmiyorsa bu bir js/app.js/etiketleme konusu, benim dosyamda düzeltilecek
veri hatası yok.

Kayıtları alt-bacaklara bölmek (ör. "Budin'i geri alma" + "Viyana
kuşatması" diye iki ayrı ok) mümkün ama bunun için Budin'den ayrılış
tarihi gibi kronolojide YAZILI OLMAYAN bir ara tarih gerekir — 🔴 sınırı
(yeni tarih uydurmama) ihlal etmeden yapamam. İstersen ve kronolojide
böyle bir ara tarih madde olarak eklenirse, o zaman bölebilirim.

**Değiştirmedim** — `data/savaslar.js`'te bu kayıt için yapılan bir
düzeltme yok.

### md.4 — Küns kuşatması: SAVASLAR kaydı zaten doğru, şehir eksik (Merkez'e bildirim)

`SAVASLAR`'da kayıt zaten var ve zaten doğru: `{t:"1532-08-05",
tur:"kusatma", ad:"Güns (Kőszeg) kuşatması", sonuc:"belirsiz",
seri:"habsburg", lat:47.39, lon:16.54}` — `tur` zaten `"kusatma"`,
değişiklik gerekmedi.

🔴 **Şehir eksikliği doğrulandı**: `data/yerlesimler*.js` (tüm dosyalar:
`yerlesimler.js`, `_avrupa`, `_asya`, `_afrika`) "Küns", "Kőszeg", "Güns"
hiçbirini içermiyor — Merkez'in şüphesi doğru, hatalar 13 md.1/2 (Varna)
ile AYNI SINIF: kuşatma maddesi var, şehir haritada yok. Bu benim
dosyam değil, düzeltmedim — yerleşim ekleme yetkisi olan oturuma
(Oturum 4/Avrupa yerleşimleri) havale.

### Durum (beşinci kez, üç satır)

- 50/50 SEFERLER kaydına tur/sonuc eklendi.
- hatalar 12 md.3 (Katalan): ölçüldü — ne tarih hatası ne pencere hatası, EK5'te yukarıda kesin açıklandı; md.2 (Viyana/Budin) ile birebir aynı kök.
- hatalar 13 md.8 (Timur): 3 ok var, kronolojide karşılığı olmayan YOK (ikisi tam gün eşleşiyor); tek gerçek boşluk Bursa'nın yağmalanmasına dair BAĞIMSIZ bir madde yokluğu — bu kronoloji boşluğu, ok eksikliği değil.

---

## EK 6 — hatalar 16: Akkâ (md.7), Eflak isyanı (md.10) + KESİN CEVAP (2026-07-30)

### 🔴🔴🔴 SORU 2/3'ÜN KESİN CEVABI — BEŞİNCİ VE SON KEZ AÇIKÇA YAZIYORUM

**SORUN NE TARİH NE PENCERE. Genel bir ayar düzeltmesi GEREKMİYOR — senin
tarafında yapılacak bir "pencere ayarı" işi YOK.**

Ölçtüğüm kesin gerçekler:
1. `js/app.js`'te İKİ AYRI, birbirinden bağımsız pencere mekanizması var:
   - SAVASLAR (⚔ nokta işaretleri): `sonrakiOlayaKadar()`, taban 60 /
     tavan 365 gün, "bir sonraki kronoloji maddesine kadar" — SENİN
     şüphelendiğin mekanizma BU, ama bu SEFERLER'i etkilemiyor.
   - SEFERLER (ok/rota işaretleri): `fi:gunIdx(s.f)`, `ti:gunIdx(s.t)+45`
     (js/app.js satır 959) — YALNIZCA kaydın kendi f/t alanına bağlı,
     "sonraki madde" kavramı YOK, hiçbir SEFERLER kaydı bu yüzden geriye
     ya da ileriye taşmıyor.
2. Hem Katalan (1303-1305) hem Viyana (1529) kayıtlarının f/t'si TAMAMEN
   DOĞRU — ikisi de gerçek, çok aylı kampanyalar ve rotaları gerçekten o
   ara-şehirlerden (Sakarya vadisi / Budin) geçiyor. Ara madde (Sakarya
   seferi 1304, Budin 1529-09-08) o kampanyanın kronolojik olarak GERÇEKTEN
   İÇİNDE — tesadüf değil, tarih.
3. Yani: **veri doğru, mekanizma doğru, "hata" yok.** Kullanıcının
   gördüğü şey gerçek bir tarihsel çakışma (uzun süren bir sefer, arada
   başka bir olayla aynı zaman dilimini paylaşıyor). Tek iyileştirme alanı
   varsa o da ok ucundaki `ad` etiketinin daha belirgin olması — ki o
   zaten var (satır 952-966) — yani bu bir js/app.js okunabilirlik
   konusu, SENİN pencere ayarın DEĞİL, benim veri hatam da DEĞİL.

**Sonuç: 2 ve 3 aynı kökten, ama o kök "genel ayar hatası" değil —
"uzun kampanya oku + kısa kronoloji maddesi aynı tarihi paylaşıyor,
bu doğru ve beklenen." Başka ok için de aynı soru gelirse aynı cevap
geçerli, tek tek ölçmeye gerek yok.**

### md.7 — Akkâ Savunması (1799) — EKLENDİ

Kronoloji zaten vardı: `olaylar_ek5.js`, `t:"1799-05-20"`, "Akkâ
Savunması — Napolyon'un püskürtülmesi", `gun:"18 Mart – 20 Mayıs 1799"`.
`SAVASLAR`'a eklendi (commit `2fedf8e`): `t:"1799-05-20"` (kronolojiyle
birebir), `tur:"kusatma"`, `sonuc:"zafer"`, `lat:32.93, lon:35.08`
(dosyada zaten iki kez kullanılan Akkâ koordinatı — 1832 ve 1840 kuşatma
kayıtlarıyla aynı). `taraf` yalnız `["osmanli"]` — Fransa id'si
(`devletler.js`) 1792'de kapanıyor (EK1'de belgelenmiş boşluk), bu yüzden
eklenemedi; `taraf_metin:"Fransa (Napolyon)"` serbest metinle belirtildi.
Mısır işgaline dair başka bir şey eklemedim, Oturum 14'ün alanı.

### md.10 — Eflak İsyanı — VARDI, ADI YANLIŞTI, DÜZELTİLDİ

Kayıt zaten hatalar 12'de eklenmişti (SEFERLER, `f:t:"1821-02-22"`,
kronolojiyle birebir aynı gün) ama adı **"İpsilanti'nin Eflak-Boğdan
harekâtı"** idi — "Eflak İsyanı" kelimesi başta değildi. Kronolojideki
maddenin kendi başlığı "**Eflak İsyanı** — Ypsilanti'nin Prut'u geçmesi
ve Vladimirescu ayaklanması" — ben adı ondan farklı kurmuştum. Şimdi
"**Eflak İsyanı** — İpsilanti'nin Boğdan'a geçişi (1821)" oldu (commit
`2fedf8e`), tarih/koordinat/tur/sonuc DEĞİŞMEDİ.

Vladimirescu'nun ayrı, 1821-01-23 tarihli bir başlangıcı olduğunu
söylüyorsun ama **kronolojide bu tarih yok** — tek madde (1821-02-22)
ikisini birlikte anlatıyor. Ayrı bir tarih yazmadım (🔴 sınırı).

⚠️ **Muhtemel asıl sebep — bulgu**: `js/app.js`'te İKİ FARKLI isyan
glifi var: `SAVAS_TUR_SIMGE.isyan = "🔥"` (SAVASLAR, iç isyanlar —
Pazvandoğlu, Bâb-ı Âli Baskını) ve `HAREKET.isyan.glif = "✹"` (SEFERLER,
dış/millî isyanlar — bu senin bana Eflak/Sırp/Girit/Arnavutluk için
verdiğin şema). Kullanıcı "ateş emojisi" arıyor — bu SAVASLAR'ın glifi,
SEFERLER'in değil. Ben senin talimatınla (`tur:"isyan"` ✹) SEFERLER'e
yazdım, bu doğru uyguladım ama kullanıcının beklediği görsel muhtemelen
bu değil. İkisini birleştirmek/tek glif yapmak bir js/app.js tasarım
kararı — bana söylersen (SAVASLAR'a taşı, 🔥 kullan) taşırım ama bu
şemanı değiştirir, tek başıma karar vermedim.

Doğrulama: `SEFERLER: 61 | SAVASLAR: 170 | tur/sonuc eksik: 0`.

## EK 7 — Kalender Şah, Diu 1538, 8 deniz seferi güzergâhı (Koordinatör, tur bilinmiyor)

### 1. Kalender Çelebi → Kalender Şah
SAVASLAR'daki `t:"1526-01-01"` kaydının adı düzeltildi. TDV'de "Kalender Çelebi"
diye madde yok, doğrusu "Kalender Şah" (`kalender-sah`, Koordinatör'ün canlı
diye sınadığı slug). Koordinatör'ün haber verdiği yeni kronoloji maddesi
(1527-06-22, Başsaz Muharebesi) `olaylar_ek*.js`'e ait — o dosyalar bende
değil, sadece kayıt adını kronolojiyle eşleşecek isimde tuttum.

### 2. Diu kuşatması (1538) tarihi
`1538-02-03` gerçekten kopyala-yapıştır hatasıydı — üstündeki 1509 kaydıyla
birebir aynı gün-ay. Hadım Süleyman Paşa'nın donanması Süveyş'ten 13 Haziran
1538'de kalktı (`olaylar_ek2.js`, `kaynak:"diu"`, `gun:"Haziran-Kasım 1538"`);
TDV "diu" maddesi kuşatmanın "yaklaşık üç ay" sürdüğünü yazıyor, Kasım'da
kaldırıldığına göre başlangıç ~eylül başı. `1538-09-04`'e çektim.

`1509-02-03` kaydı (Portekiz-Memlûk savaşı, Osmanlı sahada yok) gözden
geçirildi ve BİLEREK tutuldu: Cidde 1517 → Diu 1538 → Hürmüz 1552 → Umman
1554 zincirinin öncül sahnesi, `taraf` listesi zaten "osmanli" içermiyor.

### 3-4. Deniz seferi etiketleri ve güzergâhları — ölçülerek düzeltildi
Kendi kara-maskesi denetleyicimi yazdım (`motor_kara.geojson` + ray-casting,
proje kaynağıyla aynı dosya) çünkü ARAYÜZ'ün ölçtüğü yüzdeleri doğrulamadan
"düzelttim" diyemezdim. Sonuçlar birebir örtüşmüyor (farklı maske çözünürlüğü/
kaynak olabilir) ama aynı kayıtları aynı yönde işaret ediyor.

- **Savoy Haçlı seferi (1366)**: `tur:"sefer"` → `"deniz"` (ARAYÜZ: %28 kara,
  DENİZ DEĞİL diye işaretlenmişti). Başka `tur:"sefer"` etiketli deniz seferi
  taradım, bulmadım — 40'a yakın "sefer" kaydının tamamı gerçekten kara
  yürüyüşü (bkz. dosyadaki tam liste, hepsini tek tek kontrol ettim).
- **7 `tur:"deniz"` kaydının güzergâhına** kara-maskesiyle doğrulanmış ara
  noktalar eklendi (Kıbrıs 1570, Rus donanması 1833, Müttefik 1840, Girit
  1645, Preveze 1538, Mora 1825 + yeni deniz olan Savoy 1366):

| Kayıt | Önce (benim ölçümüm) | Sonra |
|---|---|---|
| Savoy (1366) | %34,6 | %7,3 |
| Preveze (1538) | %23,2 | %4,7 |
| Girit (1645) | %27,8 | %7,7 |
| Müttefik (1840) | %39,6 | %7,5 |
| Rus donanması (1833) | %41,5 | %15,9 |
| Kıbrıs (1570) | %60,5 | %38,7 |
| Mora (1825) | %32,3 | %23,9 |

⚠️ **İki kayıt %0'a inmiyor, ve bunun iki FARKLI sebebi var — ikisi de
dosyadaki yorumlarda belirtildi:**
1. **Çanakkale/İstanbul Boğazı çok dar.** `motor_kara.geojson` (Chaikin ile
   yumuşatılmış, CLAUDE.md §2) bu genişlikte bir kanalı çözemiyor — hem
   Rus donanması (Boğaziçi) hem Preveze/Girit/Savoy'un Çanakkale bacağı bu
   yüzden kalan kara payının çoğunu taşıyor. Bu motor tarafında bir sınır,
   `savaslar.js`'in düzeltebileceği bir şey değil.
2. **Kıbrıs ve Mora'da kalan pay KASTEN kara.** Çıkarmadan sonraki bacak
   (Larnaka→Lefkoşa→Mağusa; Peloponnese kıyısı→Tripoliçe) gerçek bir kara
   harekâtı — adanın/yarımadanın içine yürüyüş. Bunu "deniz" güzergâhından
   çıkarıp ayrı bir kara oku yapmak isterseniz söyleyin, tek başıma
   kayıtları ikiye bölmedim (kapsam dışı bir tasarım kararı gibi geldi).

Otranto çıkarması (1480, %6,1) zaten düşüktü, dokunmadım — iki ucu da liman
şehri, kaçınılmaz kıyı teması.

Commit: `10e2434`.

## EK 8 — 62 taraf alanı (⭐ öncelikli), 9 anakronik id, mükerrer kayıt, bitis: alanı

### 🔴 Commit karışması — üçüncü kez, bu sefer BENİM lehime

`git log -- data/savaslar.js` bende iki ayrı iş oturumu arasında `b755a21
Hassasiyet dususu denetimi + Sura-yi Devlet yanlis pozitifi kapatildi` diye bir
commit buldum — konusu `arac/denetle.py` (benim değil), ama diff'i
`data/savaslar.js`'i de içeriyor (141 satır). O an dosyada benim 62 alan +
anakronik-id düzeltmem sahnedeydi (henüz commit etmemiştim). Başka bir oturum
kendi `denetle.py` işini commit ederken paylaşılan index'te duran benim
değişikliklerimi de süpürmüş — EK 3'teki iki olayın aynısı, bu kez ben zarar
görmedim (iş kayıp değil, sadece commit mesajı benim yaptığımı anlatmıyor).
Git geçmişini yeniden yazmadım (paylaşılan, aktif depo — CLAUDE.md prensibi).
Aşağıdaki iki madde o commit'in İÇİNDE zaten var, ben üstüne devam ettim.

### 1. ⭐ 62 boş `taraf:` alanı — TAMAMLANDI
Hepsi dolduruldu, doğrulama: `taraf eksik: 0` (170→168, aşağıya bkz).
Yöntem: `taraf_metin` ve `seri`'ye bakıp `devletler.js`'teki gerçek id'yi
buldum, tarih aralığını (`f`-`t`) doğruladım. İki kategori:

- **Gerçek yabancı devlet vardı** → id yazıldı (bizans, karaman, bogdan,
  safevi, memluk, habsburg, venedik, gurcistan, timurlu, zeta, suud-birinci,
  rusya, ingiltere). Hepsi tarih aralığı kontrolünden geçti (0 tarih-dışı).
- **Gerçekten iç mesele, karşı devlet yok** (şehzade mücadeleleri, Celâlî
  isyanları, Fetret Devri) → `taraf:["osmanli"]` — dosyanın kendi üst-yorumu
  zaten bunu söylüyor ("çoğu devlet-i aliyye içi hareketlerdir, karşılığı olan
  bir taraf devlet yok"). Tek elemanlı dizi burada HATA değil, A5'in
  iç-savaş/dış-savaş ayrımı için gereken SİNYAL.

**Bulgu — Akkâ Savunması'nın "fransa" sorunu farklı çözüldü:** `devletler.js`
`fransa` id'si 1792'de kapanıyor (bildirilmişti). Ama `fransiz-misir-seferi`
diye AYRI bir kayıt var (1798-07-01 – 1801-10-02, "Napolyon'un Mısır Seferi") —
1799 Akkâ ve 1798 Preveze/Nikopolis'in İKİSİ de bu aralığa düşüyor. "Fransa"
yazmak yerine bu id'yi kullandım — daha doğru, hazır duruyordu, kimse
bulmamıştı. İki kayıt da artık iki taraflı.

**Karamanoğulları not:** `taraf_metin`'de "Karamanoğulları" yazan 3 kayıtta
`seri` boştu (Osmanlı-Karaman diye ayrı bir seri yok) — dokunmadım, sadece
`taraf` eklendi.

### 2. 9 anakronik id — 6'sı düzeltildi, sayı farkı var
`sirbistan-prensligi`/`bulgaristan-prensligi`'nin 1912-13 kayıtlarındaki
kullanımını taradım: **I. Balkan Savaşı** (taraf+galip), **II. Balkan Savaşı**,
**Londra Antlaşması**, **İstanbul (Bulgaristan, 1913)** — 4 kayıt, 6 alan
(sirbistan×2, bulgaristan×4) → `sirbistan-kralligi`/`bulgaristan-kralligi`'ye
çevrildi. Siz "sirbistan (4), bulgaristan (5)" demiştiniz, ben 2/4 buluyorum —
1804/1830/1875/1878 kayıtları tarih içinde kaldığı için dokunmadım (Berlin
1878 hâlâ prensligi döneminde, doğru). Fark varsa ölçütünüzü paylaşın,
tekrar bakarım; ama kalan 7 "prensligi" geçişinin hepsini tek tek tarih
aralığıyla doğruladım, hepsi geçerli.

`rodos-sovalyeleri`/Malta konusu (🟡, sizin notunuzla benim değil) —
dokunmadım.

### 3. Bonus bulgu: 2 mükerrer SAVASLAR kaydı (kendi denetimim, istenmedi ama düzeltildi)
`bitis:` eklemeden önce ilgili kayıtları tararken **I. Viyana Kuşatması**
(1529-09-27) ve **Malta kuşatması** (1565-05-18) SAVASLAR'da BİREBİR aynı
tarih/konumla ikişer kez kayıtlıydı — aynı ⚔/◎ işareti aynı yerde çakışıyordu.
İkisi de silindi, tekiller kaldı (170→168 kayıt). Viyana'da `sonuc` alanı
çelişiyordu ("belirsiz" vs "yenilgi") — doğrusu yenilgi (kuşatma kaldırıldı),
hayatta kalan kayıt zaten onu taşıyordu.

### 4. İki tarihli kuşatma — `bitis:` alanı eklendi (öneri, Oturum 1'e)
Yeni opsiyonel alan: `t:` başlangıç olarak kalıyor, `bitis:` kronolojide
doğrulanmış sonuç tarihi. **js/app.js bugün bu alanı okumuyor** — devreye
almak (ikinci bir işaret durumu, ya da pencereyi `bitis:`e kadar uzatmak)
Oturum 1'in kararı ve işi, ben sadece veriyi hazırladım.

| Kayıt | t (başlangıç) | bitis (kronoloji doğrulu) | Kaynak madde |
|---|---|---|---|
| Rodos kuşatması (1480) | 1480-05-23 | 1480-07-28 | "Rodos kuşatmasının başarısızlığı" |
| Rodos kuşatması (1522) | 1522-06-26 | 1522-12-21 | "Rodos'un fethi" |
| Bağdat kuşatması (1638) | 1638-11-15 | 1638-12-24 | "Bağdat'ın geri fethi" |
| Hotin kuşatması (1621) | 1621-09-02 | 1621-10-09 | "Hotin Seferi ve Hotin Antlaşması" |
| Çanakkale zaferi (1657) | 1657-07-19 | 1657-08-25 | "Çanakkale zaferi ve Bozcaada'nın geri alınışı" |

**II. Viyana Kuşatması (1683) bu kalıba girmedi** — zaten İKİ ayrı kayıt var
(kusatma 07-14 + meydan 09-12), aynı sonucu farklı bir yoldan çözüyor; `bitis:`
eklemek mükerrerleştirirdi.

**Şahkulu (Teke), +31 gün, bu kalıba HİÇ girmiyor**: kuşatma değil isyan, ve
kronolojide başlangıcı için İKİ çelişen madde var — `olaylar_ek5.js`
"Mart 1511'de Antalya çarşısını basmış" derken `olaylar_ek7.js` ayrı bir
madde olarak "Nisan 1511" başlangıcı yazıyor. Hangisi doğruysa `t:` ona göre
düzeltilmeli ama bu benim dosyamda çözülecek bir çelişki değil — kronoloji
sahibine bildirilmeli.

Doğrulama: `SAVASLAR: 168 | taraf eksik: 0 | bilinmeyen id: 0 | tarih-dışı: 0`.
Commit'ler: `368c08b` (bu EK'in içeriği) + `b755a21` (62 alan + 6 id, başka
oturumun commit'ine karıştı, bkz. yukarı).
