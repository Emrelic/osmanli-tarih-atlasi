# ARAŞTIRMA-GÜRCÜ-0912 — KITA 16 · H-0010 (Kartli+Kaheti künyesi) ve H-0007(a) (Gürcistan-Karakoyunlu)

**Oturum:** KITA 16 · **Görev:** M-3592 İŞ⑤ · **Tarih:** 2026-09-12

## Öngörü (D022 — ölçümden ÖNCE tahtaya yazıldı, M-3594)

> "gurcistan 16 donem + imereti 1 donem, Kartli'nin 1490 bolunmesinden sonraki
> bosluk beklenen bosluk ~1490-1762 (Kartli+Kaheti'nin Rusya'ya
> baglanmasina/birlesmesine kadar) araligi, yani iki kunyenin penceresi
> kabaca 1490'dan 1762/1801'e kadar surecek diye tahmin ediyorum"

Ölçüm sonucu: **tuttu** — pencere tam 1490-01-01 → 1762-01-01 çıktı (aşağıda ①).
Tek fark: 1801 değil 1762'de kapanıyor, çünkü 1762-1801 arası zaten mevcut
`gurcistan` künyesinin kendi kronolojisinde (birleşme sonrası) kapsanıyor —
bunu öngörürken "1762/1801" diye iki ihtimal bırakmıştım, ölçüm 1762'yi
doğruladı.

---

## ① PENCERE ÖLÇÜMÜ — "gürcistan 16 dönem" nereye dağılıyor?

`data/yerlesimler*.js` içinde `d:"gurcistan"` kullanan **16 dönemin tamamı**
tek tek okundu (grep + Read, coğrafî sınıflama elle yapıldı):

| Yerleşim | Koordinat | `gurcistan` dönemi | Sınıf |
|---|---|---|---|
| Tiflis | 41.72K/44.78D | 1281→1801-09-12 | **KARTLI ÇEKİRDEK** |
| Zagem (Kaheti) | 41.70K/45.78D | 1281→1801-09-12 (+ v: 1578-1606 tâbi) | **KAHETİ ÇEKİRDEK** |
| Kutaisi | 42.27K/42.70D | 1281→**1490** (sonrası zaten `imereti`) | İmereti'nin kendi dönemi, DOKUNULMAYACAK |
| Sohum | 43.00K/41.02D | 1281→1578-08-09 | Abhazya kıyısı — SINIR, kapsam dışı |
| Batum | 41.64K/41.64D | 1281→1578-08-09 | Acara kıyısı — SINIR |
| Ahıska | 41.64K/42.99D | 1281→1578-08-01 | Samtskhe(Meskheti) — SINIR |
| Şavşat, Posof, Hanak, Hulo (ek26) | Erzurum sınırı | 1281→1551-01-01 | Samtskhe/Acara — SINIR |
| Artvin, Hopa, Sarp (ek27) | Erzurum sınırı | 1281→1551-01-01 | Samtskhe/Acara — SINIR |
| Borçka, Sarıkamış, Ahılkelek (ek28) | Erzurum/Kars sınırı | 1281→1551/1534 | Samtskhe(Meskheti)/Çıldır — SINIR |

**16 = 1 (Tiflis) + 1 (Zagem) + 1 (Kutaisi'nin 1490 öncesi payı) + 13 sınır
yerleşimi.** Sayı triyajdaki "16 dönem" ile birebir uyuşuyor — tam tarama.

🔴 **HÜKÜM: `kartli` ve `kaheti` künyesi yalnız Tiflis ve Zagem'i ilgilendiriyor.**
Sınırdaki 13 yerleşim (Abhazya, Acara, Samtskhe-Meskheti) tarihsel olarak
Kartli **da** Kaheti **de** değil — bunlar ayrı atabeglik/beylik
coğrafyalarıydı (Samtskhe atabekliği, sonra Çıldır Eyaleti — `CLAUDE.md`
zaten `cildir-eyaleti` TDV slug'ını bu bölge için kaydediyor). Onları
`kartli`/`kaheti`'ye dahil etmek YENİ bir yanlış atıf üretirdi (bkz.
`CLAUDE.md §3.5.-1`, hafsi/fizan vakasıyla aynı sınıf). ⇒ Bu görevin
kapsamına **girmiyorlar**, ayrı bir künye (`samtskhe`/`cildir` benzeri)
başka bir işin konusu.

---

## ② TDV ve akademik kaynak taraması

**HTTP taraması** (§4 yöntemi):

| slug | kod | durum |
|---|---|---|
| `gurcistan` | 200 | CANLI — mevcut künyenin kaynağı |
| `tiflis` | 200 | CANLI (denenmedi ayrıca, `gurcistan` yeterliydi) |
| `kartli` | 302 | ÖLÜ |
| `kaheti` | 302 | ÖLÜ |
| `gurcu` | 302 | ÖLÜ |
| `bagratlilar` | 302 | ÖLÜ |
| `kartli-kraligi`, `kaheti-kraligi`, `gurcistan-kralligi` | 302 | ÖLÜ (denendi, adres tahmini boşa) |

⇒ **TANECİKLİK boşluğu** (`CLAUDE.md §4`): TDV Kafkasya'yı madde düzeyinde
kapsıyor ama Kartli/Kaheti'yi AYRI maddelerle değil, tek `gurcistan`
şemsiyesi altında anlatıyor. Kural gereği bu, standart akademik kaynağın
meşru olduğu bir boşluk — kaynak açıkça yazılacak, TDV diye gösterilmeyecek.

### TDV `gurcistan` — WebFetch ile çıkarılan alıntılar

> "Gürcistan'ın 1490'larda 'Kartliya, Kahetya, İmeretiya'ya" bölündüğü"
> (mevcut `gurcistan` künyesinin kendi kronolojisiyle birebir: 1490-01-01
> bölünme)

> "24 Ağustos'ta Tiflis şehrini savaşsız ele geçirdiler (1578)"

> "II. Teymuraz'ın ölümünden sonra 1762 yılında Irakli, Kartli ve Kahet'i
> bir idare altında birleştirdi"

> "Rus Çarı I. Pavel, 1800'de Kartli ve Kahet çarlığını feshedip 12 Eylül
> 1801 tarihli emirle Rusya'nın bir eyaleti ilân ederek" ilhak etti.

Bunların hepsi zaten mevcut `gurcistan` künyesinin kronolojisinde var —
YENİ bilgi değil, doğrulama.

Zagem kaydının kendi `neden`/`kaynak` alanında (KITA 16'dan önce, M-3045'te
sınanmış) TDV'den birebir alıntı zaten duruyor:

> "Kahet yöneticileri … haraca bağlandılar. Kahet ülkesi ocaklık olarak …
> Alexandre'a bırakıldı." (1578-08-09)

Bu alıntı **daha önce sınanmış** (M-3045: "gerekçe doğru, m:Tiflis doğru")
— tekrar sınamadım, olduğu gibi devraldım (D104: bir cümle taşınırken
kaynağını da taşır).

### 🟡 Encyclopaedia Iranica — DÜŞÜK GÜVENLİ NOT

`iranicaonline.org` WebFetch'e **403 Forbidden** döndürdü (dört ayrı sayfa,
dört ayrı deneme — `web.archive.org` da erişilemedi). Yalnız **WebSearch'ün
kendi özetlediği snippet'lere** ulaşabildim — bu, gövdeyi doğrudan okumaktan
**daha zayıf bir dayanak** (D075: aynı damga farklı dayanak gücü). Şu bilgiyi
taşıyorum ama **DOĞRULAYAMADIM**:

- "Kakheti also became a kingdom from 1465" — TDV'nin tek tarihli (1490)
  anlatısından FARKLI, daha kademeli bir kopuş öneriyor.
- "From 1484 to 1762 Kartli was a distinct political entity mostly
  dominated by Persia."
- Amasya Antlaşması (1555): "Kartli, Kakheti, and eastern Samtskhe fell
  into the Persian sphere... Imereti and western Samtskhe into the
  Ottoman" — bu TDV'nin "1555-05-29 Osmanlı-Safevî nüfuz bölgelerine
  bölündü" cümlesiyle UYUMLU, yalnız ayrıntı ekliyor.
- 1744: Nadir Şah, Teymuraz'ı Kartli kralı, oğlu Erekle'yi Kaheti kralı
  taçlandırdı (iki ayrı taç, henüz birleşmemiş).
- 1762: "Erekle succeeded his father as King of Kartli" — TDV'nin "II.
  Teymuraz'ın ölümü/İrakli birleştirdi" cümlesiyle AYNI olayı anlatıyor,
  çelişmiyor.

🔴 **ÇELİŞKİ BİLDİRİMİ (§7.1⑥ — bekletmeden):** TDV tek tarihli bir
üçe-bölünme (1490) anlatırken Iranica'nın snippet'i kademeli bir kopuş
(Kaheti 1465, Kartli 1484) öneriyor. **D073 gereği önce ikisinin aynı şeyi
mi anlattığını sordum**: TDV "üç krallığa VE beş beyliğe" bölünmeyi TEK bir
resmî/siyasî kırılma anı olarak anlatıyor olabilir, Iranica ise fiilî
ayrışmanın YILLAR içinde kademeli olduğunu anlatıyor olabilir — bu iki
cümle AYNI olayın değil, İKİ FARKLI OLGUNUN (resmî bölünme vs. fiilî
ayrışma) anlatımı olabilir, yani belki hiç çelişmiyorlar. **Ölçemedim,
KARAR KOORDİNATÖRDE.** Aşağıdaki künye taslağında TUTARLILIK gerekçesiyle
**1490-01-01** kullandım (mevcut `gurcistan`/`imereti` künyeleri zaten bu
tarihi kullanıyor) — Iranica'nın 1465/1484'ü yalnız `ozet` alanına dipnot
olarak düştüm, `f:` alanına YAZMADIM.

---

## ③ H-0007(a) — "Bu tarihte Gürcistan Karakoyunlulara mı bağlıydı?"

**CEVAP: HAYIR.** İki TDV maddesi de bağımsız okundu ve ikisi de aynı
sonuca varıyor:

**TDV `karakoyunlular`:**
> "Cihan Şah, hükümdarlığının ilk dış seferini Gürcistan üzerine yaparak
> başarıyla sonuçlandırdı" (844/1440)
> "Bu ülkeye 849'da (1445) bir defa daha yürüdü."
> "Kür boylarında yapılan savaşta müttefikler [Gürcü Kralı Köstendil +
> Şirvanşah + Şeki hâkimi, Kara Yûsuf'a karşı ittifak kurmuş] ağır bir
> yenilgiye uğradı (815/1412)."

**TDV `gurcistan`:**
> "Karakoyunlu Kara Yûsuf 815'te (1412-13) Gürcistan'a gelerek bazı yerleri
> tahrip etti."
> "Karakoyunlu Cihan Şah 848'de (1444) Ahıska'ya bir akın yaptı."
> **"Haraç, tâbiyet veya bağlılık hakkında açık bir belirtim yoktur."**

⇒ Gürcistan Karakoyunlulara üç ayrı seferde (1412, 1440, 1444/1445) maruz
kaldı ve 1412'de bizzat Kara Yûsuf'a karşı bir **koalisyona öncülük etti**
(yani müttefik/düşman, tâbi değil). Hiçbir TDV cümlesi haraç veya tâbiyet
söylemiyor — tam tersine 1412'deki ittifak Gürcistan'ın Karakoyunlu'ya karşı
**bağımsız bir taraf** olarak davrandığını gösteriyor. §4 gereği TDV esas
alındı, ikinci bir kaynak aranmadı (iki TDV maddesi birbirini doğruluyor,
D073'ün "aynı yerden mi bahsediyor" testini geçiyor — ikisi de aynı üç
seferi anlatıyor).

⚠️ **D162 kontrolü yapıldı:** cümleler tek başına, yan cümle riski taşımayan
kısa özne-yüklem yapısında ("Kara Yûsuf … tahrip etti", "Cihan Şah … akın
yaptı") — yanlış ayrıştırma riski düşük.

---

## ④ Künye taslaklarının PENCERE SINAVI

`CLAUDE.md §3.5.0`: *"ardıl künyenin var olması, yazılabilir olduğu anlamına
gelmez — penceresi de tutmalı."*

```
Tiflis (Kartli)  mevcut:    1281 ───────── gurcistan ───────── 1801-09-12 → rusya
                 önerilen:  1281 → 1490 (gurcistan) → 1762 (kartli) → 1801-09-12 (gurcistan) → rusya
Zagem (Kaheti)   mevcut:    1281 ───────── gurcistan ───────── 1801-09-12 → rusya
                 önerilen:  1281 → 1490 (gurcistan) → 1762 (kaheti) → 1801-09-12 (gurcistan) → rusya
```

Sınav sonucu: **BOŞLUK YOK, ÇAKIŞMA YOK.**
- 1490-01-01 ve 1762-01-01 uçları hem `kartli`/`kaheti`de hem mevcut
  `gurcistan` kronolojisinde (bölünme/birleşme kayıtları) **birebir aynı
  gün** — sandviç tam oturuyor (bkz. `PAKET-KUNYE-0911.json`'daki "TAM
  SANDVİÇ" testiyle aynı yöntem).
- 1762-1801 arasını YENİ bir künyeye gerek kalmadan mevcut `gurcistan`
  üstleniyor (kendi kronolojisi zaten bu aralığı — Georgievsk 1783,
  ilhak 1801 — anlatıyor).
- `imereti` (1490-1810, Kutaisi) ile coğrafî kesişim yok — ayrı nokta.
- 13 sınır yerleşimi (②) kapsam dışı bırakıldığı için onlarda hiçbir
  değişiklik ÖNERİLMİYOR.

⚠️ **Bu sınav yalnız KAĞIT ÜZERİNDE.** Gerçek `s:` değişikliğini
(Tiflis/Zagem'in 1490-1762 diliminin `gurcistan`'dan `kartli`/`kaheti`'ye
çevrilmesi) BEN UYGULAMADIM — görev tanımım yalnız 3 dosyayı sayıyordu
(`YAMA-KARTLI-KAHETI-0912.json` · bu dosya · ilerleme notu),
`data/yerlesimler.js` bunların içinde yok. Önerilen `s:` dizileri YAMA
dosyasında **öneri** olarak duruyor, uygulaması ayrı bir iş.

---

## ⑤ Renk önerisi + ΔE ölçümü (renkler.py'ye YAZILMADI)

Komşu/aile renkleri (`arac/renkler.py`'den okundu):

```
gurcistan    #e020b0   karakoyunlu  #e018e0   safevi      #a56cab
imereti      #deea90   akkoyunlu    #48ae48   sirvansah   #d2cc24
altlık       #e8dfc8
```

Aday: **kartli `#b5651d`** (toprak/sienna tonu) · **kaheti `#2a7f9e`**
(petrol mavisi — bağ/İpek Yolu vahası imgesinden ayrışsın diye soğuk ton
seçildi). CIE76/CIE94 ile elle hesaplandı (renk_olc.py'nin kendi çift kurma
mantığı ÇALIŞTIRILMADI, bu bir PROXY — `arac/` KİTA 16'ya kapalı değildi ama
petek koşusu sürerken `data/`/`arac/` dondurulmuş olabilir, ölçmedim,
temkinli davrandım):

| | vs gurcistan | vs imereti | vs safevi | vs karakoyunlu | vs akkoyunlu | vs sirvansah | vs altlık |
|---|---|---|---|---|---|---|---|
| **kartli** | ΔE76 96,2 / ΔE94 50,0 | 60,0 / 45,7 | 76,0 / 40,0 | 121,1 / 61,5 | 78,8 / 43,3 | 56,8 / 38,2 | 61,1 / 40,8 |
| **kaheti** | 94,1 / 58,6 | 77,6 / 61,0 | 48,0 / 33,1 | 106,0 / 62,6 | 76,9 / 51,0 | 103,7 / 71,4 | 55,2 / 47,1 |

kartli↔kaheti: ΔE76 85,9 / ΔE94 43,9.

Eşikler (`renk_olc.py` başlığı): komşudan ΔE≥12, altlıktan ΔE≥15 — **iki
aday da her iki metrikte, her karşılaştırmada eşiğin kat kat üstünde.**
Gerçek Voronoi-komşu testi yalnız bir petek koşusundan sonra
`py arac/renk_olc.py` ile yapılabilir (bu proxy'nin kendi sınırı).

---

## ⑥ Öngörü karnesi

| # | öngörü | sonuç |
|---|---|---|
| 1 | Boşluk ~1490-1762/1801 arası olacak | **TUTTU** — tam 1490-01-01→1762-01-01 |
| 2 | Yalnız 2 künye yeterli olacak (üçüncü/dördüncü gerekmeyecek) | **TUTTU** — Tiflis+Zagem dışındaki 13 kayıt ayrı bir sınıf (Samtskhe/Acara/Abhazya), bu görevin kapsamına girmiyor |
| 3 (yazılmamıştı, ölçüm sırasında çıktı) | TDV Kartli/Kaheti'yi ayrı maddelerle anlatır | **ÇÜRÜDÜ** — ikisi de 302, taneciklik boşluğu |

---

## ⑦ Sınırlamalar / bulunamadı (D107)

- **BULUNAMADI:** Kaheti'nin 1606-1744 arası iç tarihi (Safevî'nin yeniden
  kontrolü, Şah Abbas'ın 1614-1616 seferleri gibi bilinen olaylar TDV
  `gurcistan` maddesinde bu ayrıntıda geçmiyor, ayrıca aranmadı — kapsam
  dışına bırakıldı).
- **ÖLÇÜLEMEDİ:** Iranica sayfalarının tam gövdesi (403 Forbidden, dört
  deneme) — yalnız WebSearch snippet'i kullanılabildi, DÜŞÜK GÜVENLİ
  olarak işaretlendi (②).
- **ÖLÇÜLEMEDİ:** Gerçek Voronoi-komşu ΔE testi (yalnız proxy yapıldı, ⑤).
- **UYGULANMADI:** Tiflis/Zagem'in `s:` dizilerinin gerçek düzenlenmesi
  (görev kapsamı dışında, ④'te açıklandı).
