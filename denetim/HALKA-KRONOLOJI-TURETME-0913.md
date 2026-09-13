# KRONOLOJİDEN KAYNAKLI HALKA TÜRETME · HALKA-KRONOLOJI · 13 Eylül 2026

> ÖNGÖRÜ BÖLÜMÜ — ÖLÇÜMDEN ÖNCE YAZILDI (D022). Aşağıdaki bölümler ölçümden sonra eklenecek.

## ⓪ ÖNGÖRÜ (ölçümden önce, 13 Eylül 2026 ~17:40)
```
Ö1  kurallar (a)-(e) birlikte uygulanınca aday → tanıklık verimi DÜŞÜK: 721 aday
    (kategori + yer_id tek + kaynak + başlıkta fiil) içinden %20-40 → ~150-300 tanıklık.
    Sebep: çekirdek (olaylar*) başlıkları devleti ADIYLA anmıyor ("X'in fethi").
Ö2  örneklem isabeti (elle okuma): başlık yolu %92-97 · gövde (d) cümle yolu %80-90 ·
    toplam ~%88. ⇒ ilk koşuda %95 TUTMAZ; kural en az bir kez sıkılaştırılacak.
Ö3  en sık yanlış cinsleri: (i) kazanan yerine KAYBEDEN devletin seçilmesi (Türkçe hâl eki),
    (ii) şehir yerine BÖLGE/DEVLET adı (X Hanlığı), (iii) madde tarihi ≠ cümledeki olay tarihi.
Ö4  aralık (aynı kaynak iki uç) ≤10 kayıt.
Ö5  mazereti olabilecek öngörü: Ö2'nin sayısı elle okumanın ölçütüne bağlı — ölçüt aşağıda
    yazılı olarak sabitlenir (madde metni o yerin o tarihte o devlete geçtiğini/elinde olduğunu
    AÇIKÇA söylüyor mu; kesinlik doğru mu), sonradan gevşetilmez.
```

> ÖLÇÜM BÖLÜMLERİ — öngörüden SONRA yazıldı.

```
YAZILAN   data/kaynakli_halka_kronoloji.js (77 kayıt · 🤖 üretilmiş) · bu rapor ·
          denetim/ARAC-HALKA-KRONOLOJI-{YUKLE,ENVANTER,TURET,HUKUM,KIYAS}-0913.js
OKUNAN    data/olaylar*.js · data/kronoloji*.js (index.html sırasıyla) · data/devletler.js · data/savaslar.js ·
          yerleşim havuzu (YALNIZ ad çözümü + `tur:bolge`; dönemler yalnız ④ kıyasında)
DOKUNULMAYAN  js/app.js (listeye satırı HALKA-TIKLAMA ekledi, M-3797) · olaylar/kronoloji/yerleşim/motor/künye
COMMIT    YOK
```

## ① ENVANTER (`ARAC-HALKA-KRONOLOJI-ENVANTER-0913.js`)
```
dosya   82 (index.html'den sökülen liste) · çekirdek olaylar* 40 · kuyruk kronoloji* 42
madde   6193 · çekirdek 1355 · kuyruk 4838
```
| alan | ölçüm |
|---|---|
| `k` (çekirdek) | fetih 272 · kayip 170 · antlasma 112 · idari 30 · kurulus 25 · sefer 10 · kusatma 9 · vassal 6 · kazanc 6 |
| `tur` (kuyruk) | antlasma 319 · toprak-kazanc 237 · kurulus 216 · toprak-kayip 184 · son 148 · isgal 66 · fetih 33 · birlesme 25 · toprak 24 · vassal 17 · sefer 12 · kusatma 6 · yikilis 5 · tabiiyet 3 · itaat 1 |
| `etiket` | toprak-kazanc 636 · toprak-kayip 616 (+ `toprak-kaybi` 5 yazımı) · antlasma 440 · toprak 136 · isgal 65 · kusatma 53 · kayip 43 · fetih 31 · tabiiyet 17 · sefer 14 · vassal 12 · yagma 7 · akin 6 |
| `yer_id` | tek yerleşime çözülen 4862 · boş 1114 · alan yok 211 · çözülmeyen 6 (Girit ×4 · Boğaziçi ×2) · çoklu 0 |
| `yer_kon` | 590 · 585'i `yer_id`siz |
| `yer` (serbest metin) | 1326 |
| `kaynak` çekirdek | yalın slug 1226 · bulunamadı 75 · metin 37 · yok 13 · ölçülemedi 2 · atlas/veri atfı 2 |
| `kaynak` kuyruk | metin 2776 · yalın slug 1023 · bulunamadı 654 · atlas/veri atfı 378 · ölçülemedi 7 |
| `kapsam_genis` | 542 |
| `ic_not_*` | gun 37 · d 412 · b 0 · atlas/hizalama/devralma anan 58 |
| açık devlet alanı | `devlet` 132 (YALNIZ `kronoloji_almanya.js`) · `kunye` dolu 47 · `fethedilen` 15 · `kaybedilen` 4 · `statu_dogrudan` 13 · `statu_vasal` 12 |
| `t` biçimi | YYYY-MM-DD 3379 · YYYY-01-01 2071 · YYYY-MM-01 722 · YYYY-MM 21 · `gun` alanı 1306 |
| künye gömülü kronolojisi | 639 künye · 606'sında · 2423 madde · kaynaklı 245 · **yer alanı 0** |
| `savaslar.js` | SAVASLAR 171 (galip 87 · kuşatma+galip 19) · ANTLASMALAR 41 (`topraklar` metni 41) · SEFERLER 62 · **kaynak alanı 0** |

🔴 `fethedilen`/`kaybedilen`/`statu_*` **harita senkron alanlarıdır**, tanık değildir: `olaylar_ek5.js` Koron maddesi (16 Ağustos 1715) `fethedilen:["Ayamavra"]` taşıyor. Türetmede KULLANILMADI.
🔴 Künye kronolojisi (yer alanı yok ⇒ (a) geçemez) ve `savaslar.js` (kaynak alanı yok ⇒ (c) geçemez) **türetmeye girmedi.**

## ② KURAL (son hâli · `ARAC-HALKA-KRONOLOJI-TURET-0913.js`)
Aday: `k` ∈ {fetih, kayip, vassal, kazanc, antlasma} ya da `tur`/`etiket` toprak kategorisi. Tanıklık için BEŞİ birden:
```
(a) TEK YER   yer_id havuzda tek kayıt, `tur:bolge` değil (S23); ANA adı (parantez dışı, S11) tanıklık
              cümleciğinde geçer; ad bir devlet/bölge/antlaşma/coğrafya kelimesinin parçası değil
              (Hanlığı · gölü · havzası · merkezli · Antlaşması …, S4); yalnız bulunma hâlinde değil
              (Kiel'de imzalanan, S14); "ve"li bir ad dizisinin parçası değil (S10); cümlecikte başka
              havuz yerleşimi yok; `kapsam_genis` madde dışarıda
(b) AÇIK DEVLET  kazanan cümlecikte ADIYLA ve hâl ekiyle: X'e geçti/teslim/bırakıldı/kaybı · X tarafından ·
              X hâkimiyetine/idaresine · X ordusu/kuvvetleri + etken fiil. Ayrılma hâli = kaybeden;
              "X hâkimiyetine son" = kaybeden (S2); nesne hâlinde ordu özne değil (S3); datif + sıfat-fiil
              ("Venedik'e bırakılan") önceki durum (S22). Kişi adı, dosya adı, `k:fetih` geleneği YOK.
              Ad → künye id eşlemesi sözlükle + tarih penceresiyle TEK aday; tek değilse atla. `tur` YAZILMAZ (S1)
(c) KAYNAK    dolu; bulunamadı/ölçülemedi/okunmadı değil; herhangi bir yerinde `.js`/`data/`/uyarlandı/
              devralındı/hizalandı yok (S6); "standart …/el kitabı" gibi adsız değil; "ikincil özet" değil (S18)
(d) HASSASİYET `gun` metninden (gün · ay · yıl), yoksa `t` biçiminden; GÜN EKLENMEZ. ATLA: gun/t çelişkisi ·
              gun iki yıla yayılıyor · "dolayı/civarı/sonları" (S7) · metinde madde yılını uç alan yıl
              aralığı (1518-19, S15) · "izleyen yıllarda" (S16) · gün "…zaferiyle birlikte/…sırasında"
              başka olaya bağlı (S13) · gövdedeki gün cümleciği yer+ele geçirme anlatmıyor (S19).
              YILA İNDİR: ic_not atlas/hizalama · kaynak "GÜN DOĞRULANMADI" · "birkaç gün / yalnız yıl
              verir" (S16b) · `gun` yok, t YYYY-MM-01 ve metin ayı anmıyor (S21)
(e) FİİL      alındı/fethedildi/ilhak/terk/devir/teslim/geçti; olumsuz (alamadı · kuşatmayı kaldırdı ·
              başarısız · akın · yağma · kurtardı · kâğıt üzerinde · görevlendirdi) YOK; cümlecikte başka
              yıl YOK; başlık tahliye/çekilme DEĞİL (S12); savaş/sefer maddesi başlıkta "sefer" DEĞİL (S20)
ARALIK        aynı yer + aynı devlet + AYNI kaynak anahtarlı sonraki madde o devletin kaybını açıkça
              yazıyorsa ve arada başka tanıklık yoksa. Yoksa NOKTA.
```
S1–S23 her biri kaynak koddaki yorumda **hangi örneklem kaydının** doğurduğuyla yazılı.

### Huni (son koşu)
```
6193 madde → toprak kategorisi 1813 → yer_id tek + bölge değil 1470 → (c) kaynak 1087
→ (d) + madde düzeyi 923 → (a)(b)(e) cümlecik sınavı 77
```
Başlıca ret: yer adı cümlecikte yok 447 · kazanan devlet açık değil 181 · kaynak atlas/veri atfı 161 ·
yer_kon var yer_id yok 154 · bulunamadı/ölçülemedi 124 · kapsam_genis 98 · fiil yok 94 · adsız kaynak 88 ·
ad dizisi 67 · gövde günü ele geçirme değil 49 · bölge temsil noktası 19.

## ③ İSABET — elle okuma (`ARAC-HALKA-KRONOLOJI-HUKUM-0913.js`; mulberry32 tohum 20260913)
| tur | havuz | n | yanlış | isabet | ne öğretti |
|---|---|---|---|---|---|
| 1 | 111 | 50 | 12 | **%76,0** | kazanan ters (3) · bölge/antlaşma yeri (4) · "dolayı" · otomatik tâbi · başka olayın günü |
| 2 | 92 | 50 | 9 | **%82,0** | varış günü · yıl aralığı · "izleyen yıllarda" · bulunma hâli · görevlendirme · ikincil özet |
| 3 | 84 | 50 | 4 | **%92,0** | sefer/yağma · ayın 1'ine kodlanmış ay (2) · S19 kaçağı |
| 4 | 80 | **80 (SAYIM)** | 1 | **%98,8** | sıfat-fiil datifi + bölge adlı nokta (Mora) |
| **5 (SON)** | **77** | 50 | 0 | **%100** | — |

- **77 kaydın 77'si** tur 4 sayımında elle okundu ve doğru bulundu. Önceki turlarda yanlış olup kimliği korunan 4 kaydın düzeltmesi **veride sınandı** (Zaklise `tur` yok · Âmid ve Kandehar yıl · Anabolu yıl).
- ⚠️ **AYAR SIZINTISI:** kural tur 1-4 hükümleriyle sıkılaştırıldı. Tur 1-3 örneklemlerinde 99 benzersiz kayıt görüldü. Son 77'nin yalnız **10'u** ayar sırasında hiç örnekleme girmedi (Ankara 1354 · Amasya 1393 · Estergon 1595 · Kanije 1690 · Sohum 1810 · Selânik 1423 · Bağdat 1638 · Enez 1456 · Tilimsan 1358 · Vidin 1689): **10/10 doğru**. Ayardan bağımsız tek ölçüm bu, ve n=10 küçük bir hata oranını ayırt edemez.
- **%95 kapısı:** tur 4 sayımı (%98,8) ve son örneklem (%100) üstünde. Dosya bu kapıdan sonra yazıldı.
- Ölçüt hep **madde metnine** karşıydı. Kaynak gövdesi OKUNMADI: bu isabet **"madde doğru okundu"** demektir, **"madde doğru"** demek değildir.

Şüphe notu (yanlış sayılmadı):
- `kr-tunus-osmanli-1534`: gün madde gövdesinde desteklenmiyor.
- `kr-derbend-osmanli-1583`: TDV 1578 ile başlangıç farkı.
- `kr-batum-osmanli-1479`: "Acaristan (Batum ve çevresi)".
- `kr-mekke-suud-birinci-1806`: "Vehhâbîler" → `suud-birinci` eşlemesi.

### Öngörü sınavı
```
Ö1 150-300 tanıklık        ÇÜRÜDÜ — 77 (aralığın altında; yer adı cümlecikte yok 447 · devlet adsız 181)
Ö2 ilk koşu ~%88, %95 tutmaz  YARISI TUTTU — %95 tutmadı; ama %76, öngörünün de altında
Ö3 üç yanlış cinsi          TUTTU — üçü de çıktı; öngörülmeyen: varış günü, sıfat-fiil datifi, ayın 1'i
Ö4 aralık ≤10               TUTTU — 0
```

## ④ ÜRETİLEN — `data/kaynakli_halka_kronoloji.js`
```
77 kayıt · hepsi NOKTA (aralık 0) · tur 0 · kesinlik yıl 36 · ay 15 · gün 26 ·
başlık yolu 52 · gövde yolu 25 · çekirdek 47 · kuyruk 30
kaynak.alinti = madde cümleciği · alinti_ozet:true · alinti_kaynagi:"kronoloji maddesi (b|d)" ·
rapor = dosya · t · b
```
**Aralık neden 0:** aynı kaynak anahtarını taşıyan sonraki bir kayıp maddesi, kaybı kazananı adıyla birlikte tüm kuralları geçerek yazan tek bir çift oluşturmadı.

**Sınav** (`ARAC-HALKA-SINA-0913.js`, uyarlama GEREKMEDİ — app.js listesinde dosya var):
- Havuz 130 (ferhatpasa 50 · tekil 3 · kronoloji 77) · **0 hata · 0 uyarı**. 77 `yer` tek yerleşime çözülüyor, 20 `devlet` künyede ya da `osmanli`, renk gri değil.
- İki yönlü sınav 6/6 · pencere birim sınavı 5/5.
- Kesit 1595-06-15: 13 halka, önceki sayı değişmedi. 1516-09-01: Trablusşam. 1686-09-15: Anabolu.

### Devlet (20)
osmanli 27 · venedik 9 · habsburg 6 · italya 4 · memluk 4 · rusya 4 · safevi 4 · karakoyunlu 3 · ispanya 2 · macaristan 2 · merini 2 · selcuklu 2 · babur-imparatorlugu 1 · bizans 1 · bulgaristan-kralligi 1 · dulkadir 1 · ingiltere 1 · ming-hanedani 1 · qing-hanedani 1 · suud-birinci 1

### Bölge (devletin künye `bolge`i)
(osmanli, künyesiz) 27 · italya 13 · orta-avrupa 8 · iran 7 · dogu-avrupa 4 · misir-sudan 4 · anadolu 3 · balkanlar 2 · dogu-asya 2 · iberya 2 · kuzey-afrika 2 · arabistan 1 · bati-avrupa 1 · guney-asya 1

### Yüzyıl
13. yy 2 · 14. 10 · 15. 16 · 16. 13 · 17. 18 · 18. 8 · 19. 5 · 20. 5

⚠️ **"Tüm dünyaya yayılma" bu kuralla GERÇEKLEŞMEDİ.**
- Ölçüldü: 77'nin **73'ü (%94,8)** 10-50°K / 10°B-65°D kutusunda, yani Akdeniz, Balkanlar, Orta Doğu, Kafkasya, İran ve Kuzey Afrika. Dışarıda yalnız Pekin ×2 ile Kandehar ×2 var.
- Amerika, Sahra altı Afrika, Okyanusya ve Güneydoğu Asya: 0.
- Kazanan Osmanlı 27. Çekirdek dosyalardan gelen Osmanlı dışı kazanan 32; bunlar Osmanlı'nın kayıplarıdır.
- Sebep kuralın kendisi: kuyruk maddelerinin çoğu devleti adıyla anmıyor ya da yalnız `yer_kon` taşıyor. Aday 1813 → 77.

## ⑤ ÇELİŞKİ — DÜZELTİLECEK ADAYI (düzeltme YAPILMADI) (`ARAC-HALKA-KRONOLOJI-KIYAS-0913.js`)
### Tohum halkalarıyla (ferhatpasa · tekil)
- Aynı yer, örtüşen pencere, farklı devlet: **0**.
- Aynı yerde 5 ilişki. Revan 1636 ve Tebriz 1535 Safevî, Osmanlı halkalarıyla örtüşmüyor: sıralı el değiştirme. Tiflis 1723, 1578-1603 halkasından ayrı dönem.
- 🟡 **Derbend:** kronoloji maddesi `olaylar_ek5.js` "1583 … Osmanlı idaresine alındı" diyor. Tohum TDV «Derbend» 5 Ekim 1578 bağlılık. Aynı devlet, başlangıç 5 yıl farklı. **Kronoloji maddesi adayı.**

### Atlas dolgusuyla — tanıklık penceresinin son günü (atlas referans değildir; liste yalnız aday)
14 / 77 uyuşmazlık: **gerçek 11** · gün farkı ≤30 1 (Kandiye: teslim 6 Eylül 1669, atlas 27 Eylül tahliye) · atlas penceresi öncesi 2 (Âmid 1240 · Harput 1234).

| yer | tanıklık | atlas o gün | madde |
|---|---|---|---|
| Trablus | italya 9 Ekim 1911 | osmanli (d →1912-10-15) | olaylar_ek9 — madde kendisi "üstü İtalyan taraması" istiyor |
| Derne | italya 16 Ekim 1911 | osmanli (d →1912-10-18) | kronoloji_kuzeyafrika |
| Bingazi | italya 21 Ekim 1911 | osmanli | kronoloji_kuzeyafrika |
| Kayseri | memluk 1419 | osmanli (d 1419-01-01→) | kronoloji_anadolu "Memlük kuvvetleri işgal etti" |
| Kayseri | dulkadir 1437 | osmanli (d 1419→1920 kesintisiz) | kronoloji_anadolu "Dulkadırlılar tarafından alındı" |
| Erzincan | karakoyunlu 1450 | akkoyunlu (s 1410→1502) | kronoloji_karakoyunlu |
| Maraş | memluk 1381 | dulkadir (s 1337→1515) | kronoloji_anadolu "üç yıl Memlük idaresinde" |
| Batum | osmanli 1479 | gurcistan (s 1281→1578-08-09) | kronoloji_gurcistan (şüphe notlu) |
| Tilimsan | merini 1337 | zeyyani (s 1281→1552 kesintisiz) | kronoloji_kuzeyafrika |
| Tilimsan | merini 1358 | zeyyani | kronoloji_kuzeyafrika |
| Kandehar | babur-imparatorlugu 1545 | safevi (s 1537→1595) | kronoloji_safevi (Iranica KANDAHAR) |

⚠️ Bu 11 satır **iki uçlu** okunmalı (§3.5.1). Atlas bu yerleri kısa ara dönemleri yutarak boyuyor olabilir (Kayseri 1419-1437, Tilimsan 1337-48 ve 1358-59, Maraş 1381-84). Ama madde de yanlış olabilir: kaynak gövdesi okunmadı. Yama yazmadan önce her birinin kaynağı okunmalı.

## ⑥ YAPILMAYANLAR
- Kaynak gövdeleri okunmadı; alıntılar madde metni (D104 · D107 "okumadım").
- Künye gömülü kronolojisi (2423) ve `savaslar.js` türetilmedi (yer alanı yok · kaynak alanı yok). Yer adını metinden eşlemek (a)'yı gevşetir.
- **Osmanlı geleneği:** çekirdekte "X'in fethi" gibi devleti adıyla anmayan başlıklar (b) gereği alınmadı. Bu, "kazanan devlet açık değil" 181 retin önemli kısmı. Açılması koordinatör/Emre kararıdır; açılırsa ayrı örneklem ister.
- `yer_kon`-yalnız 154 madde: cümlede eşlenecek ad yok, alınmadı.
- Aralık 0; tâbi türü hiç yazılmadı (S1).
- Görsel sınav (halkanın ekranda çizimi) yapılmadı. `denetle_yayin.py` koşulmadı (üretim aktif).
- İsabetin ayardan bağımsız ölçümü n=10. Yeni bir tohumla, kural dondurulmuş hâlde bağımsız bir örneklem, veri büyüdükçe tekrar koşulmalı.
- Sözlükte künyesi bulunamayan iki ad düşürüldü: `seybani`/`ozbek` → `seybaniler` künyesi yok.
