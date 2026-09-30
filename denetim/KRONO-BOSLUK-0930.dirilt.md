# KRONO-BOSLUK-0930 · DİRİLT — 2084 uyuyan maddenin künyeye bağlanması

Oturum: KRONO-BOSLUK-OLC-0930 · 30 Eylül 2026 · koordinatör: YILDIRIM BAYEZIT. Tam veri: `denetim/KRONO-BOSLUK-0930.dirilt.json`.

## 0. Kapılar

```
① node --check              önce 15/15 ✓ · sonra 15/15 ✓
③ bağlanan madde            0 → 1698 madde / 2084  (1703 madde×künye eklemesi, benzetim)
④ ezilen künye              26 → 26   (26'sı BUGÜNKÜ durum, bu işin eklediği: 0 — aşağıya bak)
② eşlenemeyen taraf kimliği 48 → 48   (bu iş eşlenemeyen kimlik EKLEMEDİ; 15 değil 48 — aşağıya bak)
   aynı künye+aynı gün çakışması (mükerrer riski) 0
```
🔴 **Ama site bugün 0 madde fazla gösteriyor.** Eklediğim tek şey her maddeye `taraflar:[…]` alanı; değişkenler hâlâ `KRONOLOJI_<BÖLGE>` adını taşıyor ve `derinKronolojiBindir` onları yine eşleyemiyor. Bağlanma, değişken `KRONOLOJI_COK_<BÖLGE>` olduğu an gerçekleşir — ③'teki sayı o adla koşturulmuş BENZETİMdir (`app.js:14208-14290` mantığı birebir). Adı değiştirmek benim yetkimde değildi, sebebi §2.

## 1. A mı B mi — ölçüm

15 dosyanın **hiçbiri tek künyeli değil** ⇒ B yolu (`KRONOLOJI_ID_OZEL`) **0/15**. En dar dosya `kronoloji_sirbistan.js` bile 5 künyeye dağılıyor. Yol A.

| dosya | madde | atanan | künye (madde) |
|---|---:|---:|---|
| `kronoloji_anadolu.js` | 281 | 253 | `selcuklu` 83 · `karaman` 45 · `artuklu` 41 · `dulkadir` 33 · `kilikya-ermeni` 27 · `aydin` 24 |
| `kronoloji_arabistan.js` | 60 | 43 | `yemen-zeydi` 24 · `umman` 19 |
| `kronoloji_balkan.js` | 177 | 125 | `yunanistan` 48 · `karadag` 32 · `bosna-kralligi` 16 · `zeta` 11 · `bulgar-carligi` 7 · `bulgaristan-prensligi` 6 · `bulgaristan-kralligi` 5 |
| `kronoloji_dogu_afrika.js` | 218 | 190 | `habesistan` 76 · `adal` 28 · `svahili-sehirleri` 28 · `somali` 28 · `buganda` 19 · `evfat` 9 · `makdisu-sultanligi` 2 |
| `kronoloji_iran_ardillari.js` | 155 | 108 | `ilhanli` 41 · `serbedariler` 20 · `celayirli` 17 · `muzafferi` 14 · `kert` 10 · `incu` 4 · `lur-i-buzurg` 1 · `lur-i-kucek` 1 |
| `kronoloji_italya_sehir.js` | 186 | 170 | `cenova` 111 · `ferrara` 36 · `siena` 23 |
| `kronoloji_kuzeyafrika.js` | 83 | 65 | `merini` 20 · `sadi` 18 · `zeyyani` 12 · `hafsi` 9 · `trablusgarp-ocagi` 6 |
| `kronoloji_orta_asya.js` | 205 | 136 | `kazak-hanligi` 43 · `kazan` 28 · `sibir-hanligi` 19 · `nogay` 12 · `yakub-beg` 10 · `turkmen` 10 · `mogulistan` 6 · `astarhan` 4 · `cungar` 3 · `yarkent-hanligi` 2 |
| `kronoloji_ozbek.js` | 73 | 61 | `buhara` 34 · `hive` 16 · `hokand` 11 |
| `kronoloji_sirbistan.js` | 35 | 16 | `sirbistan-prensligi` 7 · `sirbistan-eyaleti` 4 · `sirp-despotlugu` 2 · `sirbistan-kralligi` 2 · `sirbistan-nemanjic` 1 |
| `kronoloji_cin.js` | 136 | 124 | `qing-hanedani` 64 · `ming-hanedani` 42 · `yuan-hanedani` 11 · `cin-cumhuriyeti` 8 |
| `kronoloji_misir.js` | 120 | 111 | `misir-kavalali` 83 · `misir-eyaleti` 27 · `misir-sultanligi` 1 |
| `kronoloji_japonya.js` | 71 | 62 | `meiji-japonya` 25 · `edo-bakufu` 19 · `muromachi` 8 · `azuchi-momoyama` 8 · `kamakura` 2 |
| `kronoloji_hindistan.js` | 131 | 101 | `babur-imparatorlugu` 56 · `delhi-sultanligi` 22 · `maratha` 4 · `meysur` 4 · `behmeni` 3 · `golkonda` 3 · `bicapur` 2 · `ahmednagar` 2 · `gucerat-sultanligi` 2 · `bengal-sultanligi` 2 · `sih-imparatorlugu` 2 · `malva-sultanligi` 1 · `sind` 1 |
| `kronoloji_guney_asya.js` | 153 | 133 | `racput` 33 · `sind` 28 · `nepal` 28 · `travankur` 18 · `babur-imparatorlugu` 17 · `manipur` 16 · `ladak` 10 · `delhi-sultanligi` 1 · `meysur` 1 |

### Kimlik nereden çıkarıldı (köşeli önek sorusu)

- **`d:` köşeli öneki** yalnız 3 dosyada var: `guney_asya` 153/153 · `hindistan` 131/131 · `japonya` 71/71 (+`ozbek` 2). Önek `/` ile bölünür (`[Racput — Mevâr / Bâbürlü]` → `racput` + `babur-imparatorlugu`), `→` geçiş demektir (`[Kamakura → Kenmu]` → pencereyle seçilir). Önekten çıkan kimlik AÇIK taraftır.
- **Mevcut `kunye:` alanı** (hindistan 11 · misir 30 · sirbistan 7 · ozbek 2) AÇIK taraf olarak alındı — `cokTarafliKronolojiEkle` `kunye`yi OKUMAZ, o yüzden bunlar da bugün bağlı değildi.
- **Bölüm başlığı** (öteki 11 dosya): dosyaların hepsi künye künye bölümlere ayrılmış (`// ═══ KARAMANOĞULLARI (1256-1487) ═══`, `/* TUR 2 — FERRARA / ESTE DEVLETİ (künye `ferrara`) */`). Madde sırası bir dize/yorum farkında tarayıcıyla bölüme eşlendi ve sayı dizi uzunluğuyla SINANDI (15/15 birebir). `cin` ve `misir`de bölüm yok: hanedan künyelerinin pencereleri (Yuan · Ming · Qing · Çin Cumhuriyeti; Mısır Eyaleti · Kavalalı · Sultanlık · Krallık) ayrık olduğundan tarih seçer; örtüşen günlerde metindeki ad seçer (Kuzey Yuan / Güney Ming yalnız adı geçerse aday).
- **Her atamada künye penceresi ŞART** (`f ≤ t ≤ t_künye`, `pad()`li). Pencere dışı madde BAĞLANMADI. Pencere birden çok adayı tutuyor ve metin ayırmıyorsa BAĞLANMADI.
- Doğrulama: yazılan her dosya yeniden değerlendirildi; `taraflar` dışında her madde özgünüyle JSON-birebir eşit, `taraflar` plana birebir eşit, atanmayanda alan yok. `git diff --numstat`: 1698 satır değişti = 1698 eklenen alan, başka satır yok.

## 2. 🔴 Adı DEĞİŞTİRMEDİM — değiştirmek yayın kapısını kırardı

`arac/denetle_kronoloji.py:147`: `beklenen = "KRONOLOJI_" + dosya_adı[10:-3].upper()` — değişken adı DOSYA ADINDAN türetilir ve uymazsa ihlal sayılır. Bu denetim `arac/kosu_yayin.py:157` `⑥b kronoloji şeması` adımında koşar. `kronoloji_balkan.js` içinde `KRONOLOJI_COK_BALKAN` yazmak = ⑥b'de 15 ihlal. İki çare, ikisi de senin/sahibinin elinde:

```
S1  DOSYAYI YENİDEN ADLANDIR   kronoloji_balkan.js → kronoloji_cok_balkan.js  +  değişken KRONOLOJI_COK_BALKAN
    denetle_kronoloji'nin beklentisi kendiliğinden tutar (kronoloji_cok_fas.js emsali)
    gerekir: git mv ×15 · data/paket_kunye.json kaynak yolları · paketle.py yenile
    arac/ dokunulmaz, app.js dokunulmaz, index.html dokunulmaz (site paketten okur)
S2  YALNIZ DEĞİŞKEN ADI + denetle_kronoloji.py:147'ye KRONOLOJI_COK_ takma adı kabulü
    arac/ değişir (sahibi sen); motor tuzuna GİRMEZ (tuz: uret_petek · renkler · girdi · motor_onbellek)
```
Önerim **S1**: araç kodu değişmez, emsali var, ad içeriği doğru anlatır. Değişken satırı değişimi tek satırdır (her dosyada `window.KRONOLOJI_<X> = [`), hazırım — dosya adıyla birlikte aynı elde yapılmalı.

⚠️ **Paket bayat:** 15 kaynak dosya değişti ⇒ `py arac/paketle.py sina` şimdi BAYAT der (yayın kapısı). Site paketten okuduğu için S1/S2'den bağımsız olarak `paketle.py yenile` şart. `index.html`e dokunmaz; ama `UFUK-DUGME-0930`ın yayınıyla aynı pakete düşer — sıralamayı sen ver.

## 3. Ezme nöbetçisi — 26 ezilen künye BUGÜNÜN durumu

Benzetim bugünkü siteyi de koşturdu: `derinKronolojiBindir` şu an **26 künyenin** kendi kronolojisini `=` ile değiştiriyor (konsolda `🔴 KRONOLOJİ EZİLDİ` basıyor). Bu işin öncesi ve sonrası aynı 26 ⇒ **bu iş 0 ezme ekledi.** 15 dosyanın hiçbirinin adı bir künye kimliğine düşmüyor (ve S1'de `_COK_` önekiyle zaten tek-künye desenine giremez). 26'nın listesi JSON `benzetim.once.ezilen`de: `akkoyunlu`, `almanya`, `altinorda`, `atina-dukaligi`, `bizans`, `fransa`, `gurcistan`, `habsburg`, `hollanda`, `ingiltere`, `iran`, `ispanya`, `isvec`, `karakoyunlu`, `katalan`, `kirim`, `lehistan`, `macaristan`, `memluk`, `naksa-dukaligi`, `portekiz`, `rodos-sovalyeleri`, `rusya`, `safevi`, `timurlu`, `venedik`.

Önceki raporumdaki "künye-içi ile birebir (t+b) örtüşme 16": `cokTarafliKronolojiEkle` aynı `t`+`b`yi zaten eklemiyor — zararsız. Asıl risk başkasıydı ve ölçüldü: **aynı künyede aynı gün ama başka başlıkla** yazılmış 255 (madde, künye) çifti. Örnek: `karadag 1918-11-26` "Podgorica Meclisi Sırbistan'la birleşmeyi oyladı — Kara…" ↔ künyede "Podgorica Meclisi Sırbistan'la birleşmeyi oyladı; Karad…". Bağlasaydım künye panelinde aynı olay iki kez görünürdü. Başlık benzerliği güvenilir ayırıcı değil ("Bağımsızlık ilan edildi — Ferdinand…" ↔ "Bulgaristan bağımsızlığını ilan etti…" = 0,17), o yüzden **aynı gün = bağlama** kuralı uygulandı: 255 çift düştü, 245 madde hiç atanmadı. Liste JSON `mukerrer_atlanan`; çoğunda bölge dosyasının maddesi künyedekinden ZENGİN — künye sahibinin iskelet maddeyi zengin olanla değiştirmesi ayrı bir iş.

## 4. Atanmayan 386 madde — sebep sebep

```
mükerrer-riski           245
pencere-dışı             83
bölümün-künyesi-yok      48
önek-künyesiz            7
belirsiz                 3
```
- **mükerrer-riski 245** — §3.
- **pencere-dışı 83** — madde künyenin `f`/`t`'sinin dışında. İki tür: (a) künye günü ile kronolojinin günü çelişiyor — `kazan` künye `t:1552-10-02`, madde "Kazan'ın düşüşü" 1552-10-15 · `astarhan` t:1556-01-01, madde 1556-06-02 · `zeyyani` f:1236, madde "hanedanını kurdu" 1235 · `trablusgarp-ocagi` t:1911-10-09, Uşi 1912-10-18 · `serbedariler` f:1337-09-09, doğuş 1337-03-13; (b) devletten sonrası/öncesi (Kazak Hanlığı 1847 sonrası 11 madde · Oyrat/İdil Kalmuk 11 madde `cungar` 1634-1758 dışı · Nogay göçleri). (a) künye düzeltmesi (`KUNYE-1945-0930`, §4 'künye günü kaynak değildir'), (b) ardıl/yeni künye işidir. Liste JSON `atanmayan`.
- **bölümün-künyesi-yok 48** — dosyanın kendisi künyesiz yazdığını beyan ediyor: Osmanlı Bulgaristan'ı 1396-1878 (13) · Çobanlılar/Toga Timurlular/kukla ilhanlar fetreti (19, dosya: "künye açıldığı gün hazır dururlar") · Kırgızlar (8, "kirgiz künyesi YOKTUR") · Orta Asya kültür kesiti (6) · Özbek 'Osmanlı ile temas' (2).
- **önek-künyesiz 7** — `[Sûrî]` (Sûrî künyesi yok) · `[bölge — …]` önekli kesit maddeleri.
- **belirsiz 3** — Timur Luristan'da (Büzürg mü Küçek mi) · Âfâk Hoca 1678 (Moğulistan/Yarkent) · Wuchang 1911-10-10 (Qing/Cumhuriyet, pencereler örtüşüyor).

## 5. Eşlenemeyen taraf kimliği — 15 değil 48

Önceki raporum her dosyada ilk rastlananı yazmıştı (15). Bütün `KRONOLOJI_(SINIR|COK)_*` dosyaları tarandığında künyesi olmayan taraf kimliği **48**; bu iş bunlara 0 ekledi (atadığım her kimlik `devletler.js`te var). `KUNYE-1945-0930` için tam liste (kimlik: madde):

`buyuk-selcuklu`:36, `gazneli`:20, `muvahhidler`:17, `harizmsah`:16, `osmanli`:15, `irak-selcuklu`:14, `gurlu`:11, `ildenizli`:11, `murabitlar`:10, `bati-karahanli`:10, `karahitay`:8, `salgurlu`:8, `karahanli`:7, `kakuyi`:7, `kirman-selcuklu`:7, `alamut-nizari`:7, `ahmedili`:7, `ziriler`:6, `bavendi`:6, `annazi`:6, `buveyhi`:6, `kipcak`:6, `hammadiler`:5, `heian-japonya`:5, `revvadi`:5, `ziyari`:5, `dogu-karahanli`:5, `bati-xia`:4, `ly-hanedani`:4, `liao-hanedani`:4, `suriye-selcuklu`:4, `idil-bulgar`:3, `badusbani`:3, `tien-le-hanedani`:2, `sakya`:2, `musafiri`:2, `trablus-cumhuriyeti`:1, `tekrur-kralligi`:1, `mapungubwe`:1, `dongxia`:1, `dali-kralligi`:1, `oshu-fujiwara`:1, `srivijaya`:1, `kahuripan`:1, `guge`:1, `samani`:1, `kunduz-hanligi`:1, `kuca-hocalari`:1

## 6. Kim kazandı

Benzetimde madde kazanan künye **81**; bunların **34**'ü önceki raporun 346 'ince' listesinde. İlk 25:

| künye | + madde | ince listede |
|---|---:|---|
| `cenova` | 107 | — |
| `misir-kavalali` | 83 | — |
| `selcuklu` | 80 | ✓ sıra 156 |
| `habesistan` | 76 | — |
| `babur-imparatorlugu` | 73 | — |
| `qing-hanedani` | 64 | — |
| `yunanistan` | 47 | — |
| `karaman` | 44 | ✓ sıra 53 |
| `kazak-hanligi` | 43 | — |
| `ilhanli` | 41 | ✓ sıra 3 |
| `artuklu` | 41 | ✓ sıra 46 |
| `ming-hanedani` | 41 | — |
| `ferrara` | 36 | — |
| `buhara` | 34 | — |
| `racput` | 33 | ✓ sıra 17 |
| `dulkadir` | 31 | — |
| `karadag` | 31 | — |
| `sind` | 29 | — |
| `adal` | 28 | — |
| `kazan` | 28 | ✓ sıra 95 |
| `somali` | 28 | — |
| `svahili-sehirleri` | 28 | — |
| `nepal` | 28 | — |
| `misir-eyaleti` | 27 | ✓ sıra 321 |
| `kilikya-ermeni` | 26 | ✓ sıra 237 |

## 7. Dokunulan dosyalar

Yalnız `data/kronoloji_{anadolu,arabistan,balkan,cin,dogu_afrika,guney_asya,hindistan,iran_ardillari,italya_sehir,japonya,kuzeyafrika,misir,orta_asya,ozbek,sirbistan}.js` — her maddenin açılış `{`inin arkasına ` taraflar:[…],` eklendi. `js/` · `index.html` · `devletler.js` · `arac/`: okundu, yazılmadı. `denetle.py` koşturulmadı. Commit yok.
