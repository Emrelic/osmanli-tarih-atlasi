# PARTİ 0075 — 48 madde · dokuz bloğa bölündü (21 Eylül 2026)

Kaynak: `ClaudEmre/kutu/giden/parti-emrelic-0075/PARTI.md` (görseller aynı
klasörde, `H-NNNN-N.png`). 🔴 **Görsel metne göre kabaca otuz kat pahalıdır**
— yalnız metnin yetmediği maddede aç.

## 🔴 HERKESE — üç kural, istisnasız

**① KİLİT.** Şu an tam koşu sürüyor: **`data/` ve `arac/` DONMUŞTUR.**
Araştır, ölç, kararını yaz — ama o dizinlere YAZMA ve COMMİTLEME. Çıktını
`denetim/<BLOK>-0075.md` (ya da `.json`) altına koy. Kilit kalkınca
1.MURAT tahtaya "dosya senin" yazacak; uygulama ondan sonra.
Sebebi ölçüldü: 20 Eylül gecesi koşan bir sınav, paylaşılan bir dosyanın
commit'iyle 21. dakikasında öldü.

**② ÜSLUP — Emre'nin 0075/H-0007 hükmü, BÜTÜN metinleri bağlar.**
> *"başlığın içinde 'Emre'nin merakı' filan diyorsun, son okuyucuyu
> ilgilendirmeyen böyle bir söylem yapmamalısın. **bir daha benden Emre diye
> bahsetme.**"*
Yerine kullanılacak kalıplar (Emre'nin kendi önerileri):
`tarihseverler belki merak eder` · `akla gelen bir soru` · `şu konuda bir
tartışma olabilir` · `merak edilen bir mesele`.
Ve kaynağa dayanmayan yorum **"sayfanın yorumlaması"** diye damgalanır —
kaynaklı bilgiyle aynı cümlede eritilmez.
⚠️ Bu kural yalnız yeni yazılana değil, **var olana da** uygulanır (bkz. blok ③).

**③ KAYNAK.** TDV İslâm Ansiklopedisi birincil; kapsamadığı yerde akademik
kaynak `kaynak:` alanına AÇIKÇA yazılır. Vikipedi tek dayanak olamaz.
**Atlas referans değildir** — atlasın kendi günü/sınırı/koordinatı dayanak
sayılmaz. Bulamadığına "yok" deme, **`bulunamadı`** yaz.

## Haberleşme (her blokta aynı)
- Tek kanal **tahta**: `py arac/tahta.py yaz --kim "<ADIN>" --kime "1.MURAT" --mesaj "$(cat <dosya>)"`
- Bekçi: Bash `run_in_background` + `py arac/tahta_bekci.py --kim "<ADIN>" --cik`
- Ekrana rapor YAZMA, `send_message` KULLANMA. Bir teslim TEK mesajdır.
- Teslim üç şey taşır: ① ne ölçtüm (sayıyla) ② ne bulamadım ③ ne istiyorum.
- Aksaklık beklemez: şartname yanlışsa, sayı beklenenden çok farklıysa, iş
  yetkini aşıyorsa **hemen** yaz.
- İş bitince bekçini kendin öldür (TaskStop).

---

## ① EKOKUMA-KURUM-0075 — 9 madde · kurumlar ve modernleşme
**Dosyan:** `data/ekokuma_p75a.js` (YENİ dosya, `window.EKOKUMA_P75A`).
Var olan `ekokuma*.js` dosyalarına DOKUNMA — üç ek okuma bloğu eşzamanlı
çalışıyor, aynı dosyaya yazarsanız biriniz ötekini ezer. `index.html`
satırını 1.MURAT ekleyecek (yeni veri dosyası ile satırı AYNI commit'te
gitmeli, yoksa yayın o dosya için 404 verir — 21 Eylül'de oldu).

- `H-0006` ilk düzenli nüfus sayımı: niçin ihtiyaç duyuldu · Avrupa örnekleri
  · kim ve nereler sayıldı · rakamlar nasıl bulundu
- `H-0008` Takvîm-i Vekāyi: resmî gazete nedir · hangi modern gerekliliğe
  doğdu · ondan önce bu işi hangi kurum görüyordu · işlevleri · nasıl çalışır
- `H-0009` gazetecilik nasıl doğdu · klasik zamanda bu misyonu hangi yapı
  karşılıyordu · ilk Osmanlı gazeteleri ve gazetecileri
- `H-0016` Feshâne: Osmanlı'daki ilk sanayi atölyesi/fabrika kuruluşları
- `H-0027` klasik devlet yapısı (sadaret · defterdarlık · kazaskerlik ·
  nişancılık) ve Maliye Nezâreti ile ne değişti — yüksek bürokrasi nasıl
  şekillendi
- `H-0028` Meclis-i Vâlâ-yı Ahkâm-ı Adliyye modern hangi kuruma denk gelir ·
  öncesinde yapı neydi
- `H-0036` kâime: kâğıt para/banknot nedir · dünyadaki örnekleri · nasıl işler
- `H-0043` Şirket-i Hayriyye öncesi Boğaz'ın iki yakası ve Sur içi-Beyoğlu
  yolculuğu nasıldı · **Galata Köprüsü ne zaman açıldı** · **Tünel**
- `H-0047` dış borç: klasik dönemde dış borç diye bir şey var mıydı, yoksa
  bu modern zaman meselesi mi

## ② EKOKUMA-SAVAS-0075 — 7 madde · savaş, donanma, sürgün
**Dosyan:** `data/ekokuma_p75b.js` (YENİ, `window.EKOKUMA_P75B`).

- `H-0031` Nizip niçin kaybedildi — hata neydi
- `H-0032` donanmanın İskenderiye'ye teslimi: koca donanma nasıl âsi bir
  valinin eline teslim edilir · **Osmanlı donanmasının başına gelen en büyük
  felaketler** kartı
- `H-0034` Ahmed Fevzi Paşa'nın şahsiyeti · Koca Hüsrev Paşa donanmayı
  Ruslara niçin versin, böyle bir ihtimal gerçekten var mıydı — **tartışma
  ek okuması** (iki tarafı da yaz, hüküm verme)
- `H-0044` Kırım Savaşı: batılı devletlerle ittifak · kültürel hayattaki yeri
  · Florence Nightingale · dış borçlar
- `H-0045` Kırım cepheleri: Sivastopol çıkarması, yarımada muharebeleri
- `H-0046` 🔴 Emre'nin sorusu, dört vakayla: Sinop 1853 · Çeşme 1770 ·
  Navarin 1827 · İnebahtı 1571 — *"bu donanma niçin bu kadar yakılmaya
  müsait?"* Kartın hükmü KAYNAKLI olmalı; ortak sebep bulunamıyorsa
  `bulunamadı` yaz, uydurma bir tez kurma.
- `H-0026` Rusların Soçi ve Tuapse'yi alması · **Çerkes sürgünü ve
  Anadolu'ya göç**

## ③ EKOKUMA-TOPLUM-0075 — 8 madde · siyaset, toplum + ÜSLUP TEMİZLİĞİ
**Dosyan:** `data/ekokuma_p75c.js` (YENİ, `window.EKOKUMA_P75C`) **+ H-0007
için var olan kartlarda düzeltme** (o kısmı `denetim/EKOKUMA-USLUP-0075.json`
olarak öner, uygulamayı kilit kalkınca yaparsın).

- `H-0007` 🔴 **ÜSLUP TEMİZLİĞİ** — yukarıdaki kural ②. Bütün ek okuma ve
  kronoloji metinlerini tara: "Emre", "Emre'nin merakı", "geliştirici notu"
  gibi son okuyucuyu ilgilendirmeyen her ifade. Kaç kartta geçtiğini SAY,
  her biri için önerilen yeni cümleyi yaz. (21 Eylül'de 137 antlaşma
  maddesinin 71'inde benzer sızıntı ölçülmüştü — sınıf tanıdık.)
- `H-0002` fes: fes nedir · niçin resmî başlık oldu · dönemin tepkileri ·
  kıyafet devrimi · **fes öncesi başlıklar** (sarık, külah, kavuk, kalpak,
  serpuş) hangi kültüre ait, sarığın ve kavuğun dönemindeki algısı neydi
- `H-0030` Balta Limanı Ticaret Antlaşması: sebebi, sonucu, getirdiği ve
  götürdüğü
- `H-0035` Tanzimat Fermanı: maddeleri · önemi · sebep ve sonuçları ·
  hukuktaki, edebiyattaki, idaredeki, bilim-teknikteki, sosyal hayattaki
  etkileri
- `H-0038` Londra Boğazlar Sözleşmesi: boğazların kapalı olması kimin işine
  gelir · Rusya, Osmanlı ve batılı devletlerin menfaati · boğazlar meselesi
  tarihçe · kim açık kim kapalı ister, stratejik plan nedir
- `H-0040` Yemen: Osmanlı için önemi · hangi dönemde hangi politika · ne
  zaman elden çıktı, ne zaman geri alındı · **I. Dünya Savaşı'nda kendi has
  topraklarını koruyamazken Yemen'de niçin çarpıştı**
- `H-0041` 1848 İhtilalleri: Avrupa'da ne yaşandı · Osmanlı nerede durdu ·
  nasıl etkilendi
- `H-0042` Ba'lebek'te Harfûş ailesi: yüzyıllarca süren yerel hâkimiyetin
  kaynağı neydi

## ④ MISIR-SEFER-0075 — 6 madde · İbrahim Paşa nereleri aldı
**Dosyan (kilit kalkınca):** `data/yerlesimler*.js` içindeki ilgili kayıtlar
+ `data/olaylar*.js`. **Şimdilik yalnız** `denetim/MISIR-SEFER-0075.json`:
her yer için `{yer, bugünkü kayıt, kaynağın dediği, öneri, kaynak}`.

🔴 **Ters yön kuralı:** bir sınır kayması önerirken **iki ucu da ölç** —
düzeltme hatayı öbür tarafa taşıyabilir. "Devletin yıkılışı ≠ o yerin fethi."

- `H-0013` Maraş · Antep · Kilis alındı mı · Erzin · İskenderun · Azez
  alınmadı mı · Adana · Tarsus alındı mı (görsel var)
- `H-0014` Konya'ya girdiği söyleniyor ama Urfa da alınmış görünüyor —
  doğru mu · Konya ve Urfa niçin kopuk eksklav gibi duruyor
- `H-0015` Konya'ya ilerlerken Mersin · Ulukışla · Karapınar · Silifke
  alınarak mı geçildi · Urfa'ya giderken Birecik · Suruç · Cerablus ·
  ayrıca Erzin · İskenderun · Azez · Yumurtalık
- `H-0019` Han Yunus: Mısır ordusu Suriye'yi istila ederken burayı atlamış
  görünüyor — hata mı
- `H-0025` Mısır'a verilen valilikler: Suriye · Filistin · Adana kesin —
  **Urfa dahil mi** · Yumurtalık · Maraş · Antep · Halep · Kilis · Erzin ·
  Payas · Dörtyol dahil mi
- `H-0010` 🔴 **YENİ KURAL ÖNERİSİ:** bir valilik/voyvodalık/bağlı beylik
  isyan ettiğinde harita o bölgeyi Osmanlı kırmızısından **bir tık açık**
  renkle göstersin (vasal açık kırmızısı gibi) ve Mısır ilerlemesi o renk
  üzerinden okunsun. Sen **şemayı ve ölçütü** öner (isyan hangi alanla
  kodlanacak, hangi tarihte başlayıp bitecek); rengi 1.MURAT ölçecek.

## ⑤ GOSTERIM-0075 — 5 madde · üst üste binme ve boş görünen toprak
**Dosyan:** teşhis `denetim/GOSTERIM-0075.md`; kod önerisi `js/` içinse
yamayı da yaz ama kilit kalkmadan commitleme.

🔴 **ÖNCE ŞUNU OKU, yoksa 40 dakika boşa gider:** gövde çakışması `kd:`
alanıyla DÜŞMEZ ve **koşu İSTEMEZ**. Motor `kd:`yi okumuyor (ölçüldü:
`uret_petek.py`de `kd` geçen satır 0). Kusur `donemler.js` +
`devletler_harita.js` gövdelerindedir. Bir oturum tam bu yanlış anlamayla
koşu istedi.

- `H-0011` haritanın üst üste binmesi (görsel)
- `H-0024` 🔴 asıl iş: **üst üste binme niçin oluyor, önleyici kodu yaz.**
  Emre'nin ölçütü: *"renkler üst üste binmemeli, uç uca gelmeli — ne boşluk
  kalmalı ne iki katman olmalı."* Önce SEBEBİ ölç (kaç gövde, kaç gün, ne
  kadar alan), sonra çare öner.
- `H-0039` II. Erzurum Antlaşması maddesinde gösterim bozukluğu
- `H-0017` Yergöğü ve İbrail doğusundaki boş arazi açık yeşil görünüyor.
  ⚠️ **Ölçüldü ve şikâyetin teşhisi yanlış çıkmıştı:** o yeşil sahipsiz
  değil, **Rusya** — piksel `#a6bb8f` = `rusya #4f7d4f` × 0,44 opaklık
  (yumuşak kip sabiti `js/app.js:13472`). Kusur veride değil okunabilirlikte.
  Senin işin bu teşhisi o iki kutuda DOĞRULAMAK (sahipsiz hücre sayısı) ve
  başka bir sebep varsa bulmak. Maddenin Silistre kısmı ZATEN doğru:
  antlaşma toprağı geri verdi ama işgal tazminat ödenene kadar sürdü
  (`data/olaylar_ek.js:72`ye 21 Eylül'de yazıldı).
- `H-0022` iki toprağın boş görünmesinin sebebi (iki görsel) — aynı sınıf mı,
  yoksa gerçekten sahipsiz mi: SAY.

## ⑥ SEFER-OK-0075 — 5 madde · oklar
**Dosyan:** `js/` ok katmanı + `data/savaslar.js`/sefer verisi.
📌 Ok katmanının bugünkü hâli 0070 partisinde kuruldu; kodu **oku**, o
oturumu arama — taze bağlamla çalışmak Emre'nin kararıdır (21 Eylül).

- `H-0001` **tahliye oku / geri çekilme oku** — YENİ ok türü. Mora'dan
  Girit'e çekilen ok. Bir ülkenin bölgeyi tahliye etmesi, çekilmesi ya da
  seferden dönmesi bu okla gösterilecek.
- `H-0023` Rusların Silistre'yi boşaltması — tahliye oku
- `H-0037` Mısır ordusunun Suriye ve Çukurova'yı boşaltması — tahliye oku
- `H-0012` sefer oku **kademeli** ilerlemeli: bugün tek ok bütün seferi
  gösteriyor; Akkâ → Şam → Halep → Adana diye maddenin içeriğine göre
  adım adım hareket etmeli
- `H-0033` 🔴 **deniz seferleri karadan geçmemeli.** Ok denizin üzerinden,
  gerekirse kıvrılarak gitsin. Kara maskesi motorda var
  (`veri-kaynak/motor_kara.geojson` — ama o ÇIKTIDIR, girdi değil).

## ⑦ KRONO-YER-0075 — 2 madde · noktasız kronoloji maddeleri
**Dosyan:** `denetim/KRONO-YER-0075.json` (uygulama kilit kalkınca).

- `H-0020` Redif-i Asâkir-i Mansûre maddesinin haritada noktası yok
- `H-0021` 🔴 sistematik: **noktası işaretlenmemiş bütün kronoloji
  maddelerini tespit et**, konusunu oku, konusuyla ilgili noktayı işaretle.
  Nokta yoksa ve madde devletin bütününü ilgilendiriyorsa: ya İstanbul
  merkezi işaretlensin ya da imparatorluk toprakları tüm ekrana sığdırılsın.
  Önce SAY (kaç madde, hangi sınıf), sonra öner.

## ⑧ SINIR-STATU-0075 — 5 madde · D kalite sınır ve özerk statü
**Dosyan:** `denetim/SINIR-STATU-0075.md` (uygulama kilit kalkınca).

- `H-0003` bu dönemde İsviçre'nin sınırları **D kalite** belli mi — belliyse
  renkler ona göre ayarlanmalı (görsel)
- `H-0004` aynı soru Hollanda için: buradaki çizgiler o dönemin D kategorisi
  sınır çizgileri mi (görsel)
- `H-0005` Sırbistan'a özerklik fermanı — **Belgrad bunun içinde mi?**
  Haritada Belgrad özerk bölgenin DIŞINDA görünüyor. Özerk devletin sınırı
  ne olmalı, teyit et (görsel)
- `H-0018` Lübnan Emirliği: bu tarihte hâlâ özerk/vasal mıydı, merkezî
  idareye bağlı değil miydi, haritada niçin böyle görünüyor (görsel).
  Ek okuma kısmını ③'e devret — sen **statüyü** ölç.
- `H-0048` Sisam: bu devirde nasıl bir yönetim vardı — özerk/vasal renk
  atanmış, doğru mu (iki görsel; ikinci görseldeki gösterim bozukluğunu
  ⑤'e bildir)

## ⑨ 1.MURAT'ta kalan — 1 madde
- `H-0029` Mısır idaresinin açık kırmızısı bir tık daha açılacak
  (`arac/renkler.py` — ölçüm `arac/renk_olc.py` ile, ΔE eşiğiyle birlikte)
