# P84-ROTUS-TASARIM-1006b · Harita rötuşu — Emre'nin üç kararına göre güncel tasarım

Oturum: P84-ROTUS-TASARIM-1006 (devam) · 6 Ekim 2026 · görevi veren: UMIT İRTİBAT
Önceki: `denetim/P84-ROTUS-TASARIM-1006.md §1`. Bu belge oradaki §1'in YERİNE geçer;
§2-§3 (aday ölçümleri, H-0016) geçerliliğini korur.
**Kod YOK.** Dört motor tuzu dosyasına dokunulmadı. Tek yeni ölçüm: İbrail koridoru
ters yön sınavı (§5). Yayın geometrisi (1 Eki) + `girdi.yukle()` kullanıldı.

---

## 0. EMRE'NİN KARARLARI — ve tasarıma ne getirdikleri
| karar (UMIT İRTİBAT aktarımı) | tasarıma etkisi |
|---|---|
| ① *"rötuş için kullanıcının haritada doğrudan çizdiği bir miktar olsun; maksat iki bağlantısız toprağı birbirine GÖRSEL olarak bağlamak, ama tarihî, coğrafî ve siyasî gerçeklere çok aykırı olmamalı"* | Rötuşun **tek türü BAĞLANTI**: aynı sahibin iki kopuk parçasını birleştiren, kullanıcının çizdiği poligon. "Toprak vermek" ya da "silmek" türleri YOK |
| ② *"rötuş öbür görünüme (A) de uygulanacak"* | Rötuş bir **görünüm** değil bir **kayıt**tır. Her görünüm onu okur |
| ③ *"kapsam tamamen kullanıcıda: kullanıcı teklif eder, Claude aykırı mı kontrol eder; aykırılık yoksa UYGULAR, aykırıysa aykırılığı kullanıcıya belirtir"* | Sabit bir alan tavanı ŞART değil. Sınırı **kontrol yordamı** çizer (§2). Claude'un hükmü kayda girer |

⚠️ **Önceki tasarımdan değişen iki şey:**
(a) "Emre sırası" (① kaynak ② veri ③ rötuş) korunuyor ama artık KONTROLÜN İÇİNDE: kaynak
araziyi `kimden`e veriyorsa hüküm AYKIRI; `kime`ye veriyorsa hüküm "VERİ İLE ÇÖZÜLÜR".
(b) Önerdiğim 500 km² tavanı KALKTI ③. Yerine alan bir ORAN sorusu oldu (§2, K8), mutlak
bir sınır değil. Nihaî ölçek kullanıcının.

---

## 1. ÇİZİMİN ALINMASI VE SAKLANMASI

### 1.1 Arayüzde "Rötuş teklif et" kipi (`app.js`, UMIT'in dosyası)
Site statik, yazacağı bir sunucu yok. Çizim bu yüzden bir **teklif DOSYASI** üretir, veri
değil.
1. Kullanıcı o günde haritada tıklayarak poligon çizer (çift tıkla kapanır). MapLibre
   üstünde ince bir çizim katmanı yeter; harici kütüphane şart değil.
2. Arayüz çizimin altını **kendisi okur** (`queryRenderedFeatures` + gövde
   kimlikleri). Doldurduğu alanlar: gün, poligonun değdiği gövdeler (`kime` adayları),
   poligonun altındaki sahipler (`kimden` adayları), görünüm (A/B).
3. Kullanıcı tek satır not yazar ("İbrail'i Eflak'a bağla").
4. Çıktı `rotus-teklif-<gün>-<saat>.json` (indirme ya da panoya kopyalama). Kullanıcı
   bunu parti dosyasına H-maddesi olarak ekler. Bugünkü `PARTI.md` + görsel akışının
   aynısıdır: görselin yanında artık makine okunur bir çizim de gelir.
📌 Ekran görüntüsü yerine **koordinat** gelir. Bugün her H-maddesinde ilk iş "görselin
günü ne" ölçümü (H-0013 · H-0016 · H-0018'de yaptım). Teklif dosyası bu ölçümü sıfırlar.

### 1.2 `data/rotus.js` şeması → `window.ROTUS` — YALNIZ ONAYLI kayıtlar
```js
{ id:"R-0001",
  ad:"İbrail–Eflak bağlantısı",
  tur:"baglanti",                         // tek tür (karar ①)
  kime:"eflak",                           // birleştirilen gövdenin kimliği
  kimden:[{d:"bogdan", km2:19.6}],        // poligonun altındaki sahipler, ölçülmüş
  f:"1359-01-01", t:"1420-01-01",         // kopukluk penceresi — gövde dönem sınırları (K2)
  geo:[[27.80,44.83],[27.89,44.83],[27.89,44.80],[27.80,44.80]],   // kullanıcının çizimi, AYNEN
  teklif:{kim:"Emre", h:"0084/H-0018", gun:"2026-10-06", dosya:"rotus-teklif-….json"},
  kontrol:{kim:"<Claude oturumu>", gun:"…", hukum:"uygun",
           sorular:{K1:"…",K2:"…", … ,K9:"…"}},       // her sorunun ÖLÇÜMÜ + sonucu
  kaynak:"TDV ibrail · TDV eflak · TDV bogdan — sınır cümlesi YOK (aranan: Milkov, Seret, Fokşan)" }
```
- `§3.4(5)`in üçlüsü alan oldu: **ne değişti** (`kime/kimden/geo/f/t`), **niçin**
  (`teklif` + `kontrol.sorular`), **kim karar verdi** (`teklif.kim` + `kontrol.kim`).
- `geo` kullanıcının çizdiği hâlidir; Claude onu **değiştirmez**. Daraltma ya da
  genişletme önerisi kullanıcıya döner (§3), kullanıcı yeniden çizer. ⇒ Kayıttaki
  poligonun sahibi her zaman kullanıcıdır.
- **Reddedilen teklif `data/`ya GİRMEZ:** ölü girdi yasağı. Reddedilenler
  `denetim/ROTUS-DEFTERI.md`ye yazılır (id · teklif · hüküm · gerekçe). Aynı teklif
  ikinci kez gelirse önce oraya bakılır (mükerrer kapısı).
- Dosya sahibi: **öneri koordinatör** (`data/`). Karar ③ "Claude uygular" dediği için
  hangi oturumun yazacağı açık soru (§7).

---

## 2. CLAUDE'UN KONTROL YORDAMI — dokuz soru, sırayla, her biri ÖLÇÜMLE
Her soru `ölçüm` + `sonuç` (geçti / AYKIRI / VERİ / ÖLÇÜLEMEDİ) olarak kayda girer.
Biri AYKIRI ise hüküm AYKIRI'dır. Ama yordam durmaz, **bütün** aykırılıklar listelenir:
kullanıcı tek turda hepsini görsün.

| # | soru | nasıl ölçülür | AYKIRI / VERİ ne zaman |
|---|---|---|---|
| **K1** | Poligonun bağladığı iki parça **aynı sahipte** mi? | gövde dönem kaydında (`DEVLET_HARITA` / `DONEMLER`) poligonun değdiği bileşenler | farklı sahip ⇒ AYKIRI: bu bağlantı değil ilhak |
| **K2** | Gerçekten **kopuk** mu, hangi pencerede? | bileşen sayısı dönem dönem. `f/t` = kopukluğun ilk ve son dönem sınırı | zaten bağlı ⇒ AYKIRI (ölü doğar). `f/t` Claude ÖLÇER, kullanıcı yazmaz |
| **K3** | Aradaki toprağın **sahibi kim**? | poligon ∩ o günkü gövdeler + petek sahipleri (`petek_govde`) | yalnız sahipsiz ⇒ en hafif · başka devlet ⇒ K4-K7 zorunlu |
| **K4** | Poligonda **yerleşim noktası** var mı? | `girdi.yukle()` · `[f,t)` boyunca `kime` olmayan sahipli nokta | var ⇒ AYKIRI: bir şehri el değiştirmek rötuş değil SAHİPLİK (veri) |
| **K5** | **Kaynak** ne diyor? | TDV birincil (§4) + `kaynakli_halka_*.js`. Ara bölgenin o tarihteki sahibi | kaynak `kimden` diyor ⇒ AYKIRI (tarihî gerçek) · `kime` diyor ⇒ **VERİ İLE ÇÖZÜLÜR** (nokta/dönem önerilir, rötuş yapılmaz) · sessiz ⇒ geçti · aranmadı ⇒ ÖLÇÜLEMEDİ (hüküm ASKIDA) |
| **K6** | **Coğrafya**: bağlantı neyi aşıyor? | poligon × KARA · NE nehirleri · `yukseklik/` sırt | açık denizi köprülüyor ⇒ AYKIRI · kaynaklı sınır nehrini aşıyor ⇒ AYKIRI · ana sıradağ sırtı ⇒ uyarı |
| **K7** | **Siyaset**: pencerede iki taraf arasında olay var mı? | kronoloji `[f,t)` içinde `kime` ve `kimden` birlikte geçen madde · C (hukukî hat) kaydı | antlaşma/hat o araziyi `kimden`e veriyor ⇒ AYKIRI (C > R) · savaş maddesi ⇒ uyarı |
| **K8** | **Ters yön (D206)** ve **oran** | `kimden` gövdesinden poligon çıkınca bileşen sayısı artıyor mu (yeni enklav) · alan/kopukluk mesafesi · alan/`kimden` gövdesi | yeni enklav doğuyor ⇒ AYKIRI ("sorun taşınıyor") · koridor kopukluğun çok ötesine taşıyor ⇒ uyarı |
| **K9** | Başka **rötuşla** ya da C ile **çakışma** | `ROTUS` + C kayıtları | çakışma ⇒ AYKIRI |

📌 **"Çok aykırı olmamalı" (karar ①) ölçüte nasıl döndü:** K4 ve K5'in AYKIRI'sı
pazarlıksızdır (bir şehri ya da belgelenmiş bir sahipliği değiştirir). K6-K8 uyarıları
kullanıcının takdirine sunulur. Karar ③ kapsamı kullanıcıya veriyor, ama aykırılığı
ADIYLA bilerek seçmesi şartıyla.

---

## 3. "AYKIRI" HÜKMÜ KULLANICIYA NASIL DÖNER
Tek mesaj, H-maddesine cevap olarak (parti cevabı akışı), şu biçimde:
```
R-teklif <id> · <ad> · HÜKÜM: AYKIRI | VERİ İLE ÇÖZÜLÜR | UYGUN | ASKIDA
  aykırılıklar (her biri soru no + ölçüm):
    K8  poligon Boğdan gövdesinin güney ucunu (480 km² @27,80/44,66) koparıp YENİ bir
        Boğdan enklavı yapıyor — sorun İbrail'den Boğdan'a taşınıyor.
  uyarılar: …
  ÖNERİ (kullanıcı yeniden çizer, Claude çizmez):
    ① poligonu güney uca kadar uzat (≈500 km², Boğdan'ın ucu da Eflak'a geçer — K5 o
       zaman bu daha büyük alan için sorulur)  ② ya da …
```
- **UYGUN** ⇒ Claude kaydı `data/rotus.js`e yazar (karar ③ "uygular") ve
  `denetle.py` R'yi koşturur (§4). Cevap: "R-0001 uygulandı, yayın rNN".
- **VERİ İLE ÇÖZÜLÜR** ⇒ rötuş YAPILMAZ. Cevap kaynak cümlesini ve önerilen veri
  düzeltmesini taşır (ör. Şehirköy 1443: Pirot `s:` günü). Emre'nin sırası ②.
- **ASKIDA** ⇒ ölçülemeyen soru ADIYLA basılır (çoğunlukla K5: kaynak aranmadı).
  Hüküm verilmez; "ölçülemedi ≠ temiz".

---

## 4. A ve B GÖRÜNÜMÜ — MOTOR MU, ARAYÜZ MÜ?
| | MOTOR (önbellek SONRASI adım) | ARAYÜZ (`app.js` çizimde uygular) |
|---|---|---|
| ilk kurulum | motor tuzu ⇒ **TAM İNŞA** | koşusuz, yalnız yayın |
| yeni rötuş eklemek | her seferinde **veri koşusu** (önbellekli de olsa saatler + HAVVA sırası) | dosya + sürüm damgası ⇒ **dakikalar** |
| A ve B görünümü (karar ②) | her görünüm ayrı üretilirse her ürüne ayrı uygulanır | çizim anında hangi görünüm seçiliyse ona. **Tek kod, iki görünüm** |
| `denetle.py` görür mü | evet, çıktıda | **ancak `denetle.py` aynı dosyayı okursa** |
| `uret_devirler.py` · `BOLGELER` · D8 | rötuşlu görür | rötuşsuz görür ⇒ **iki gerçek** riski |
| doğa | geometriyi değiştirir | görüntüyü değiştirir. Karar ① tam bunu diyor: *"GÖRSEL olarak bağlamak"* |

**ÖNERİM: ARAYÜZ + ORTAK ÇÖZÜCÜ.** Bu, ilk tasarımdaki "motor" önerimin
**geri alınmasıdır**: ③ kullanıcıya hızlı bir döngü veriyor, ① ise rötuşu görsel
diye tanımlıyor.
- Rötuşu uygulayan TEK işlev `arac/rotus_coz.js`te yazılır: `kime ∪= geo`,
  `kimden −= geo`, o dönemin gövdesinde, `[f,t)` içinde. `app.js` onu tarayıcıda
  çağırır. `denetle.py` ise **node ile AYNI dosyayı** çağırır. Öncülü
  `arac/odak_cozum.js` (§9): Python kopyası iki yerde "yanlış temiz" verdiği için
  denetim, gerçek JS işlevlerini node'da koşturuyor. Aynı dersi baştan uygulamak.
- "İki gerçek" riski **beyan edilerek** kabul edilir: rötuş sahiplik değildir, devir
  katmanı (`devirler.js`) ve bölge sınırları onu görmemelidir. D8b ise rötuşsuz
  ölçmelidir, çünkü rötuş bir sınırı hukuken taşımaz. Bu bir KUSUR değil TANIM olarak
  yazılır.
- Kapatma: arayüzde "rötuşları göster" anahtarı (varsayılan AÇIK). Kapalıyken ham
  gövde görünür. Rötuşlu ve rötuşsuz hâl böylece **yan yana** görülür.
- Motor tuzuna **hiç dokunulmaz.** Bu akşamki koşuyla ve önbellek kuralıyla (`§9.1`)
  çatışma sıfır.

---

## 5. ÖRNEK KAYIT — İbrail (H-0018), BÜTÜN YORDAM ÖLÇÜMLE
Teklif varsayımsaldır: Emre henüz çizmedi. Poligonu ben, ölçülmüş en dar noktaya
kurdum. Kullanıcının çizeceği poligonun yerine geçmez, yalnız yordamın nasıl
işlediğini gösterir.

**Teklif (varsayımsal):** "İbrail'i Eflak ana gövdesine bağla" · gün 1400-06-01 ·
poligon: ana gövde–İbrail en kısa doğrusu (27,816/44,816 → 27,872/44,812, **4,4 km**)
boyunca ~3 km genişlikte şerit, **19,6 km²**.

| # | ölçüm (yayın geometrisi + bugünkü veri) | sonuç |
|---|---|---|
| K1 | iki parça da `eflak` (ana ~72-76 bin km² · İbrail 2.201 km²) | geçti |
| K2 | İbrail ayrı bileşen: `eflak` dönemleri 1330→1420→1427→1448→1450→1456→**1462-06-01**, beşinin beşinde. Ölçülen dönem `1330-01-01→1420-01-01` | geçti · `f/t` = `1330-01-01 → 1462-06-01` (dönem sınırları; 1448-1456 dönemlerinde bileşen 4 — ayrıca bakılmalı) |
| K3 | şeridin **19,6 / 19,6 km²**'si `bogdan` gövdesi (Kalas peteği; kama 44,53-45,70K, kutuda 4.910 km²) | başka devlet ⇒ K4-K7 zorunlu |
| K4 | şeritte yerleşim noktası: **0** | geçti |
| K5 | TDV önbellek (`eflak`·`bogdan`·`ibrail`·`romanya`·`erdel`): Eflak–Boğdan sınır cümlesi **yok**. TDV `ibrail` yalnız İbrail'i Eflak'a, Kalas'ı Boğdan'a veriyor (tuz kuralı cümlesi). Canlı arama ("Milkov", "Seret", "Fokşan") **yapılmadı** | **ÖLÇÜLEMEDİ** ⇒ hüküm ASKIDA. Kaynak sınırı Siret/Milkov'a koyarsa hüküm "VERİ İLE ÇÖZÜLÜR" olur (Bărăgan'a Eflak noktası) |
| K6 | şerit kara üstünde, açık deniz yok. Siret `ne_10m_rivers`te YOK ⇒ nehir aşımı ölçülemedi | geçti / ölçülemedi |
| K7 | kronoloji taranmadı (bu belgede ölçülmedi) | ÖLÇÜLEMEDİ |
| **K8** | şerit çıkınca `bogdan` kaması **2 parçaya** bölünüyor: güneyde **480 km² @27,80/44,66 kopuyor** = YENİ Boğdan enklavı | **AYKIRI** |
| K9 | başka rötuş/C kaydı yok | geçti |

**HÜKÜM: AYKIRI (K8) + ASKIDA (K5, K7).** Kullanıcıya dönecek mesaj §3'teki
örnektir.
📌 Bu örnek tasarımın asıl gerekçesini kendisi gösteriyor: **göze en doğal gelen
çizim (en dar noktadan kısa bir köprü), sorunu komşuya taşıyor.** K8 olmasaydı rötuş,
İbrail adasını kapatıp bir Boğdan adası açacaktı. Bunu ancak çizimden sonra ölçmek
yakalar.

**Uygun olsaydı kayıt** (biçim örneği; `kontrol.hukum` bugün "uygun" DEĞİL):
```js
{ id:"R-0001", ad:"İbrail–Eflak bağlantısı", tur:"baglanti",
  kime:"eflak", kimden:[{d:"bogdan", km2:19.6}],
  f:"1330-01-01", t:"1462-06-01",
  geo:[/* kullanıcının çizimi */],
  teklif:{kim:"Emre", h:"0084/H-0018", gun:"…", dosya:"rotus-teklif-….json"},
  kontrol:{kim:"P84-ROTUS-TASARIM-1006", gun:"2026-10-06", hukum:"aykiri",
           sorular:{K1:"geçti · iki parça eflak", K2:"geçti · 1330→1462 kopuk",
                    K3:"bogdan 19,6/19,6 km²", K4:"geçti · 0 nokta",
                    K5:"ÖLÇÜLEMEDİ · canlı TDV aranmadı", K6:"geçti · Siret ölçülemedi",
                    K7:"ÖLÇÜLEMEDİ", K8:"AYKIRI · bogdan 480 km² @27,80/44,66 kopuyor",
                    K9:"geçti"}},
  kaynak:"TDV ibrail/eflak/bogdan (önbellek) — sınır cümlesi yok" }
```
⇒ Bu kayıt AYKIRI olduğu için `data/rotus.js`e değil `denetim/ROTUS-DEFTERI.md`ye
gider.

**Karşı örnek (kısa) — Şehirköy 1412-01-01→1413-07-05:** K5 AYKIRI. TDV *"1412'de Sırp
Despotu Stefan Lazareviç tarafından alındı ve Mûsâ Çelebi'nin saldırısına karşı
savunuldu"*. Niş o sırada Musa'da. Enklav belgeli, bağlantı tarihî gerçeğe aykırı.
**Şehirköy 1443→1444:** K5 "VERİ İLE ÇÖZÜLÜR" (TDV: Segedin'in ardından iade; Pirot
`s:` günü düzeltilir).

---

## 6. `denetle.py` — "DEĞİŞMEZ R" bu modelde ne sorar
`data/rotus.js`teki her kayıt bir **LİSTE** girdisidir (`§3.4(5)`): kullanıcı çizimi +
Claude onayı. Kapı her koşuda, her yayında şunları sorar. Rötuş arayüzde uygulandığı
için **yeniden üretilen geometri** rötuşun altını her koşuda değiştirebilir; kontrol
bu yüzden bir kez değil SÜREKLİDİR.
| | soru | çıkış |
|---|---|---|
| R1 şema | `id ad tur kime kimden f t geo teklif.kim kontrol.kim kontrol.hukum kontrol.sorular(K1-K9) kaynak` dolu mu | eksik ⇒ 1 |
| R2 hüküm | `kontrol.hukum == "uygun"` mu (aykırı/askıda/veri `data/`da duramaz) | 1 |
| R3 **canlılık** | güncel geometride, `rotus_coz.js` UYGULANMADAN, `kime` `[f,t)` boyunca hâlâ kopuk mu (K2'nin yeniden koşusu) | bağlıysa ⇒ **ÖLÜ ⇒ 1**. Ör. Şehirköy verisi düzelince bir Şehirköy rötuşu ölür ve kapı onu söker |
| R4 nokta | poligonda `[f,t)` boyunca `kime` olmayan sahipli yerleşim var mı (K4'ün yeniden koşusu, veri değişir) | var ⇒ 1 |
| R5 ters yön | `kimden` uygulamadan sonra yeni bileşen kazanıyor mu (K8'in yeniden koşusu) | ⇒ 1 |
| R6 kaynak | poligon alanına düşen bir `kaynakli_halka_*` tanıklığı ya da C hattı `kimden` lehine mi (K5/K7'nin makine okunur kısmı) | ⇒ 1 |
| R7 pencere | `f/t` güncel gövde dönem sınırlarına oturuyor mu | kaydıysa ⇒ 1. Koşu dönem sınırını oynattıysa rötuş yeniden ölçülür |
| R8 çakışma | iki rötuş ya da rötuş × C çakışıyor mu | ⇒ 1 |
| R9 bayatlık | geometri (`URETIM_IZI`) okunamıyor ya da node yok | **2 ÖLÇÜLEMEDİ**, `OLCULEMEDI_KOVA`ya ADIYLA |
Hükümde liste basılır: `R-0001 İbrail–Eflak bağlantısı · 1330→1462 · eflak ⇐ bogdan
19,6 km² · CANLI`. Sayı tavanı YOK: rötuşun sayısı kullanıcıya ait (karar ③), kapının
işi her birinin hâlâ geçerli olduğunu sormak.
**Sınav (iki yön):** ① geçerli rötuş ⇒ temiz ② zaten bağlı parçaları "bağlayan" rötuş
⇒ R3 öter ③ poligona sahipli nokta konmuş ⇒ R4 öter ④ İbrail şeridi (yukarıdaki) ⇒
R5 öter ⑤ `hukum:"askida"` ⇒ R2 öter ⑥ geometri dosyası yok ⇒ 2.

---

## 7. AÇIK SORULAR — koordinatör / Emre
1. `data/rotus.js`i hangi oturum yazar? Karar ③ "Claude uygular" diyor. Öneri:
   koordinatör yazar, kontrolü bir işçi yapar (`§7` sahipliği korunur).
2. Teklif dosyası parti akışına mı girsin (H-maddesi eki), ayrı bir kutuya mı?
3. Arayüzdeki "rötuşları göster" varsayılanı: AÇIK mı (öneri), KAPALI mı?
4. K6-K8 **uyarıları** kullanıcı onayıyla geçebilir mi? (öneri: EVET; AYKIRI'lar geçemez)

## 8. DAYANAK ÖLÇÜMLER
- İbrail (bu belge, yeni): `p84_ib.py` (scratchpad). Eflak dönemi `1330-01-01→1420-01-01`,
  Boğdan dönemi `1359-01-01→1448-01-01`. En yakın ana–İbrail noktaları
  27,816/44,816 – 27,872/44,812 (~4,4 km). Kama `bogdan` 4.910 km², sınırları
  27,55-28,60D · 44,53-45,70K. Şerit 19,6 km² → Boğdan 2 parça, kopan 480 km² @27,80/44,66.
  Şeritte nokta 0.
- Öteki sayılar: `denetim/P84-ROTUS-TASARIM-1006.md §2-§3`.
