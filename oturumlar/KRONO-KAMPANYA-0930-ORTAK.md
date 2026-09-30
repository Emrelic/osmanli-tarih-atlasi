# KRONOLOJİ KAMPANYASI — ORTAK ŞARTNAME (30 Eylül 2026)

*Koordinatör: YILDIRIM BAYEZIT. Bu dosya on oturumun ORTAK kurallarıdır;
kendi bölgen, kendi dosya adın ve kendi payın sana gelen mesajdadır.*

---

## 0 · NİÇİN BU KAMPANYA VAR — bugün ölçüldü

```
KÜNYE 704 · kronolojisi OLAN 356  ⇒  348 KÜNYENİN HİÇ KRONOLOJİSİ YOK  (%49,4)
toplam kronoloji maddesi 8.026
yüzyıl dağılımı: 1200→284 · 1300→913 · 1400→1027 · 1500→1333
                 1600→899 · 1700→983 · 1800→1621 · 1900→900
t: TAM 1923-10-29 olan künye 90  ← D210: PENCERE UCU işareti, ÖLÇÜM DEĞİL
```

`CLAUDE.md §1`: *"Amaç kronoloji ile haritanın birbirini doğrulaması — bir
madde okunduğunda haritada tam o değişim görünmeli."* Kronolojisi olmayan
348 devlet o doğrulamaya **hiç girmiyor**. Atlasın yarısı sessiz.

Emre'nin kararı: **① sessiz künyelerin kronolojisi yazılacak ② harita
1945'e uzatılacak.** Haritadaki etkisi bir petek koşusu ister; koşu
sonraya kalıyor ama **veri bugün hazır olacak** ve tek koşuya binecek.

---

## 1 · 🔴 DOSYA SAHİPLİĞİ — çakışırsanız birbirinizi EZERSİNİZ

`CLAUDE.md §7`: *"Bölme ölçütü DOSYADIR; her dosyanın tek sahibi var."*
On oturum aynı anda çalışıyor.

- **Her oturum KENDİ YENİ DOSYASINI yazar.** Adı mesajında verildi.
  Var olan bir kronoloji dosyasına **EKLEME YAPMAZSIN.**
- `data/devletler.js`in **tek sahibi `KUNYE-1945-0930`**. Künye açılması
  ya da genişletilmesi gerekiyorsa **sen yazmazsın** — tahtaya
  `--kime "KUNYE-1945-0930"` yazarsın (yatay mesaj serbest, §7.1 ③).
- `arac/` · `js/` · `css/` · `index.html` · `oturumlar/` → **YALNIZ OKU.**
- `git add` / `commit` / `push` **YASAK.** Koordinatör commitler.

## 2 · AD ALANI — dosya verirken değişken adı da verilir

`data/<ad>.js` → `window.<AD>` (büyük harf, tire yerine alt çizgi).
`CLAUDE.md §7`: *"Ayrı dosya ≠ ayrı ad alanı… Süzgeç tanımadığını sessizce
elemez, sayıp basar."* Küresel adın **başka hiçbir dosyada geçmemeli** —
yazmadan önce `data/` altında ara ve doğrula.

## 3 · ŞEMA — `VERI-YAPISI.md` ŞART, ama en sık ihlal edilenler burada

```js
{ t:"1526-08-29", k:"savas", b:"tek satırlık başlık",
  gun:"29 Ağustos 1526",  yer:"Mohaç",  kisiler:"Kanûnî Sultan Süleyman",
  d:"paragraf — olayın anlatısı",
  kaynak:"<TDV slug ya da akademik kaynak ADIYLA>",
  devlet:"<devletler.js'teki GERÇEK id>",
  etiket:["toprak-kazanc","konu-askeri"], yer_id:"Mohaç" }
```

🔴 **GÜN YAZ, AY YAZMA.** `CLAUDE.md §8`: ay hassasiyetli `t:"1526-08"`
ayın 1'ine genişler ve gün hassasiyetli yerleşim değişimlerinden **ÖNCE**
sıralanır ⇒ **senkron bozulur.** Gün bilinmiyorsa `t:"YYYY-01-01"` yaz ve
`gun:` alanına *"(TDV yıl verir)"* koy. **Yıl bilinmiyorsa YIL DA YAZMA.**

🔴 `devlet:` alanına **`data/devletler.js`teki gerçek `id`** yazılır
(`aceh` değil `ace-sultanligi`). Kimliği **TARA**, tahmin etme. Yoksa
`KUNYE-1945-0930`a yaz; sen açmazsın.

⚠️ `ic_not_*` alanları **kullanıcıya HİÇ gösterilmez** — editör notudur.
Şüpheni, çeliştiğin kaynağı, ölçemediğini oraya yaz; metne taşıma.

## 4 · 🔴 KAYNAK KURALI — bu kampanyanın en kritik yeri

`CLAUDE.md §4`:
- **İslâm dünyası, Osmanlı ve komşuları: TDV İslâm Ansiklopedisi
  BİRİNCİL** (islamansiklopedisi.org.tr). Çelişirse **TDV esastır.**
- TDV'nin kapsamadığı coğrafya/tanecikte akademik kaynak meşrudur ve
  `kaynak:` alanına **ADIYLA** yazılır.
- 🔴 **KIRMIZI ÇİZGİ — kullanılmaz:** forum · blog · içerik çiftliği ·
  kaynaksız derleme · **YZ üretimi metin** · popüler tarih sitesi.
  **Vikipedi TEK DAYANAK OLAMAZ.**
- **Kaynak gizlenmez;** bulunamadıysa `bulunamadı` yazılır — bu bir SONUÇTUR.
- **Atlas referans DEĞİL, mamul üründür:** atlasın kendi kaydı, künye günü,
  komşu kaydın günü DAYANAK OLAMAZ.

🔴 **ALINTI UYDURMA.** Bu projede ölçülmüş bir vaka var: bir dış model
*"TDV'den alıntı"* diye verdiği cümlelerin çoğu TDV'de **birebir yoktu.**
Alıntı yazacaksan **gerçekten açtığın sayfadan kelimesi kelimesine**
kopyala; açamadıysan `açılamadı` yaz.

**TDV tuzakları** (§4): ölü slug **HTTP 302** verir · `000` taşıma
arızasıdır, ölü DEĞİL · canlı slug yanlış madde olabilir (`ordu` →
`ordu--sehir`) · boilerplate gövde "çekilemedi" demektir, "yok" değil ·
**TDV olay değil YER-KİŞİ ansiklopedisidir** — olay slug'ı ölüyse olayın
geçtiği YERE ya da başındaki KİŞİYE bak. Arama:
`https://islamansiklopedisi.org.tr/arama/?q=<kelime>`

## 5 · KAÇ MADDE, NE KADAR DERİN

Hedef: **her künye için en az 3, en çok 15 madde.** Ölçüt sayı değil
**kırılma**: bir devletin kuruluşu · toprak kazanç/kaybı · hanedan
değişimi · yıkılışı mutlaka olmalı. Süs olay yazma.

🔴 **Değişmez 2'yi HATIRLA:** her `d:`/`v:` toprak kırılmasının ±30 gün
içinde bir kronoloji maddesi olmalı. Yazdığın maddeler bu boşlukları
kapatıyorsa **iki kat değerli** — künyenin `f:`/`t:` günlerine ve haritada
o devletin sahiplik dönemlerine bakıp **kırılma günlerini önceliklendir.**

## 6 · KENDİ İŞİNİ SINA — teslimden önce

```bash
node --check data/<kendi dosyan>.js          # ŞART
```
Ve şunları KENDİN say, teslimde yaz: kaç madde · kaç künyeye dokundu ·
kaçında gün var kaçında yıl · kaç maddede `bulunamadı` · küresel adın
başka dosyada geçiyor mu (0 olmalı).

🔴 **ÜÇ YAZIM BİÇİMİ** (ders `dersler/D240`): bu depoda
`{ t:"…" }` çıplak · `{"t": "…"}` JSON tırnaklı · **dizgi İÇİNDE kod
alıntısı** bir arada yaşıyor. Var olan veriyi tararken yalnız birini
arayan kalıp **sessizce "0" der.** Bugün bir araç 419 maddeyi 246 saydı,
bir başkası 42 kimliği uydurdu. **0 bulursan evreninin kaç eleman
olduğunu da bas** — evren 0 ise sonuç "temiz" değil `ölçülemedi`.

⚠️ Türkçe karşılaştırmada `lower()` KULLANMA — `"İ".lower()` iki kod
noktası verir, `casefold()` de çözmez → `denetim/ARAC-NORMAL-0903.py`.

⚠️ `py arac/denetle.py` **ÇALIŞTIRMA** — tepesi 2,4 GB ve on oturum
çalışıyor. Koordinatör hepiniz bitince TEK SEFER koşturacak.

## 7 · HABERLEŞME — `CLAUDE.md §7.1`

Tek kanal tahta. Koordinatörün ekranına YAZILMAZ.
```bash
py arac/tahta.py yaz --kim "<ADIN>" --kime "YILDIRIM BAYEZIT" --mesaj "..."
```
Uzun ya da Türkçe metni komut satırına GÖMME — `Write` ile dosyaya yaz,
`--mesaj-dosya <dosya>` ile ver, sonra `tahta.json`dan **geri oku**.
"Yazdım" teslim kanıtı değildir.

**TESLİM — üçlü kural:** ① ne ölçtüm (sayıyla) ② ne bulamadım
(`bulunamadı` bir sonuçtur) ③ ne istiyorum. + ürettiğin dosyalar.
Sonuna tek satır: **"bekçimi öldüreyim mi?"**

**AKSAKLIK BEKLEMEZ** (§7.1 ⑥): künye eksikse · kaynaklar çelişiyorsa ·
sayı beklenenden çok farklıysa · iş çok uzayacaksa → **hemen yaz.**

**BEKÇİ:** kaynak kapısı AÇIK.
`py arac/tahta_bekci.py --kim "<ADIN>" --cik --ara 45`

## 8 · İŞ BİTİNCE DOSYAN NASIL CANLANIR

Sen `index.html`e **dokunmazsın.** Koordinatör üç kapıdan geçirip bağlar:
① `node --check` ② küresel ad çakışması ③ künye atfı (her `devlet:`
kimliği `devletler.js`te var mı). Üçünü geçen dosya `paketle.py ekle` ile
pakete girer ve yayınlanır. **Geçmeyen dosya bağlanmaz** — o yüzden §6'daki
kendi sınavını atlama.
