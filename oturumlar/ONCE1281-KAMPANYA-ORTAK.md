# 1281 ÖNCESİ KAMPANYASI — ORTAK ŞARTNAME (30 Eylül 2026)

*Koordinatör: YILDIRIM BAYEZIT. Kendi bölgen ve dosya adın sana gelen
mesajdadır. Bu dosya sekiz oturumun ORTAK kurallarıdır.*

Emre'nin emri (30 Eylül): *"1281 öncesi kronolojileri ve devlet dizinlerini de
toplayalım — öncelikle 1281 öncesi dünyadaki tüm devletleri listele, araştır,
devletler dizinine ekle, sonra bu devletlerin kronolojilerini yapalım. Ayrıca
1281'den önceki tarihlerdeki yerleşim yerlerinin listesini de çıkarman lazım."*

---

## 0 · KUŞAK — 1000-01-01 → 1281-01-01 (bu turda YALNIZ bu)

Kapsam "1281 öncesinin tamamı" değil, **1281'e KOMŞU kuşaktır.** Sebebi
`CLAUDE.md §6`: kapsam genişlemesi kademelidir ve pencere yoğunluk sağlanmadan
açılmaz. MÖ 12000'e kadarki daha eski kuşaklar **aynı kalıpla** sonra gelir —
senin ürettiğin dosya o kuşakların şablonudur.

```
f:  1000-01-01 ile 1281-01-01 arasında YAŞAYAN her devlet  →  senin kapsamında
    (1281'de hâlâ yaşayanlar DA dahil — künyesi varsa GENİŞLETİLİR, yenisi açılmaz)
```

🔴 **Haritada bugün GÖRÜNMEZ ve bu bir kusur değildir.** Ölçüldü (bugün,
`KAPSAM-1945-OLC-0930`): motorun ufku `arac/girdi.py:705`
`UFUK=("1281-01-01","1923-10-29")` ve `js/app.js:90` `BITIS`. Pencereyi geriye
açmak motor değişikliğidir ⇒ **tuz değişir ⇒ tam yeniden inşa koşusu**
(`CLAUDE.md §9.1`). O koşu bir kez koşacak ve bütün kuşakları birlikte
taşıyacak. **Senin işin veriyi o koşuya HAZIR etmek.** "Görünmüyor" diye
düzeltme arama.

---

## 1 · 🔴 İKİ ADIM, BU SIRAYLA — ters çevirirsen işin GÖRÜNMEZ olur

```
① KÜNYE  →  denetim/ONCE1281-<BÖLGE>-KUNYE.json     (ÖNERİ — sen devletler.js'e YAZMAZSIN)
② KRONO  →  data/kronoloji_cok_once1281_<bölge>.js   (senin dosyan, sen yazarsın)
```

**Niçin künye önce:** kronoloji maddesi künyeye `taraflar:` alanındaki
**kimlik** üzerinden bağlanır. Künyesi olmayan kimliğe yazılan madde yüklenir,
sayılır, **ama hiçbir yerde görünmez.** Bugün tam bu ölçüldü: 15 bölgesel
`KRONOLOJI_*` dosyasında **2084 madde yazılmış, yüklenmiş, HİÇBİR künyeye
bağlanmamış** (`denetim/KRONO-BOSLUK-0930.md §1`). Aynı hatayı tekrarlamayın.

### `data/devletler.js`e SEN YAZMAZSIN
Tek sahibi var (`CLAUDE.md §7`) ve sekiz oturum aynı dosyaya yazarsa
birbirini ezer. Sen **tam künye kaydını** JSON olarak önerirsin, koordinatör
sırayla birleştirir. Önerin şu alanları TAŞIMALI, eksiği geri döner:

```json
{ "id": "buyuk-selcuklu", "ad": "Büyük Selçuklu Devleti",
  "f": "1040-05-23", "t": "1194-01-01",
  "harita": "<var olan bir boya anahtarı ya da null — §3>",
  "bolge": "İran · Irak · Horasan",
  "kaynak": "TDV: selcuklular (SELÇUKLULAR)",
  "ic_not_f": "Dandanakan 23 Mayıs 1040 — TDV 'selcuklular' maddesi",
  "kronoloji": [ … 2-5 iskelet madde … ] }
```

🔴 **Var olan künyeyi TEKRAR AÇMA.** Yazmadan önce `data/devletler.js`i
**TARA** (`id` ve `ad` üzerinden, tahmin etme — `CLAUDE.md §3.5`). Ömrü
1281'e sarkan devletlerin künyesi ÇOĞU ZAMAN VARDIR ve yapılacak şey
`f:`ini geriye ÇEKMEKtir; bunu da öneri olarak yazarsın (`"islem": "genislet"`).
Her kayıtta `"islem"` alanı olsun: `"yeni"` · `"genislet"` · `"dokunmadim"`.

---

## 2 · 🔴 KRONOLOJİ DOSYASININ DESENİ — BUGÜN ÖLÇÜLDÜ, uydurma

`js/app.js`te **iki** bağlayıcı var ve ikisi farklı çalışır:

| desen | nasıl bağlanır | senin için |
|---|---|---|
| `window.KRONOLOJI_<ID>` | `<ID>`.toLowerCase() **TEK künye id'sine** eşlenir (`_`→`-` geri düşüşü var) | ❌ **KULLANMA** — `KRONOLOJI_BALKAN` tam bu yüzden düştü, `balkan` künyesi yok |
| `window.KRONOLOJI_COK_<KONU>` | her maddenin `taraflar[]` (yoksa `devletler[]`, yoksa `devlet`) listesindeki **HER** künyeye EKLER | ✅ **BUNU KULLAN** |

Doğrulanmış yer: `js/app.js:14264` `cokTarafliKronolojiEkle`, regex
`^KRONOLOJI_(SINIR|COK)_[A-Z0-9_]+$`. Ekler, **ezmez**; aynı `t`+`b` ikinci
kez eklenmez; eşlenemeyen taraf kimliğini **sayıp konsola basar** (sessizce
düşürmez — kapı bu yüzden çalışıyor).

```js
// data/kronoloji_cok_once1281_anadolu.js
window.KRONOLOJI_COK_ONCE1281_ANADOLU = [
  { t:"1071-08-26", k:"savas", b:"Malazgirt Savaşı",
    gun:"26 Ağustos 1071", yer:"Malazgirt", kisiler:"Sultan Alparslan",
    d:"paragraf — olayın anlatısı",
    kaynak:"TDV: malazgirt-savasi (MALAZGİRT SAVAŞI)",
    taraflar:["buyuk-selcuklu","bizans"],
    etiket:["toprak-kazanc","konu-askeri"] },
];
```

⚠️ Değişken adın **başka hiçbir dosyada geçmemeli** — yazmadan önce `data/`
altında ara ve teslimde "0" diye bildir (`CLAUDE.md §7`, ad alanı kuralı).
⚠️ `index.html`e **DOKUNMA.** Bağlamayı koordinatör yapar (§6).

---

## 3 · BOYA — `harita:` anahtarı uydurulmaz

`CLAUDE.md §8`: `s:[{d:"..."}]` içindeki kimlik `arac/renkler.py`nin
`BOYALAR` sözlüğünde tanımlı DEĞİLSE **bölge boyanmaz.** Sen `renkler.py`ye
**dokunmazsın** (tuzda — `§9.1`). Yapacağın: künye önerine ya var olan bir
boya anahtarını yazarsın (`"harita": "selcuklu"` gibi, `renkler.py`de VAR
olduğunu doğrulayarak) ya da `"harita": null` + `"boya_gerekli": true`
yazarsın. Koordinatör boya kalemini tek listede toplayıp tam inşa koşusuna
bindirir.

---

## 4 · KAYNAK — `CLAUDE.md §4`, kısaltmasız

- **İslâm dünyası, Osmanlı ve komşuları: TDV BİRİNCİL** · çelişirse TDV esas.
- TDV'nin kapsamadığı coğrafya/tanecikte **akademik kaynak meşrudur** ve
  `kaynak:` alanına **ADIYLA** yazılır. 1281 öncesi Çin/Japonya/Amerika/
  Afrika-içi için TDV birincil OLAMAZ — bu normaldir, kaynağını adıyla yaz.
- 🔴 **KIRMIZI ÇİZGİ:** forum · blog · içerik çiftliği · kaynaksız derleme ·
  **YZ üretimi metin** · popüler tarih sitesi **KULLANILMAZ.**
  **Vikipedi tek dayanak olamaz.**
- **Kaynak gizlenmez;** bulunamadıysa `bulunamadı` yazılır — bu bir SONUÇTUR.
- 🔴 **ALINTI UYDURMA.** Ölçülmüş vaka: bir dış model *"TDV'den alıntı"*
  dediği cümlelerin çoğu TDV'de **birebir yoktu.** Açtığın sayfadan
  kelimesi kelimesine kopyala; açamadıysan `açılamadı` yaz.
- **TDV tuzakları** (§4): ölü slug **302** verir · `000` taşıma arızasıdır,
  ölü DEĞİL · canlı slug yanlış madde olabilir · boilerplate gövde
  "çekilemedi" demektir, "yok" değil · **TDV olay değil YER-KİŞİ
  ansiklopedisidir** — olay slug'ı ölüyse olayın geçtiği YERE ya da başındaki
  KİŞİYE bak. Arama: `islamansiklopedisi.org.tr/arama/?q=<kelime>`

🔴 **TARİH UYDURMA** (`CLAUDE.md §4`, `D210`): gün bilinmiyorsa
`YYYY-01-01` · **yıl bilinmiyorsa YIL DA YAZILMAZ.** Künyenin `f:`/`t:`
günü bir KAYNAK DEĞİLDİR. 1281 öncesinde çoğu tarih yıl hassasiyetindedir —
bu bir kusur değil, **ölçümün kendisidir**; `gun:` alanına *"(TDV yıl verir)"*
yaz ve `ic_not_t` ile hassasiyeti beyan et.

🔴 **GÜN YAZ, AY YAZMA** (`CLAUDE.md §8`): ay hassasiyetli `t:"1071-08"`
ayın 1'ine genişler ve gün hassasiyetli yerleşim değişimlerinden **ÖNCE**
sıralanır ⇒ **senkron bozulur.** Ay biliniyor gün bilinmiyorsa
`t:"YYYY-01-01"` + `gun:"Ağustos 1071 (gün bilinmiyor)"`.

⚠️ `ic_not_*` alanları kullanıcıya **HİÇ gösterilmez** — editör notudur.
Şüpheni, çeliştiğin kaynağı, ölçemediğini oraya yaz; metne taşıma.

---

## 5 · KAÇ TANE — sayı değil KIRILMA

- Künye: bölgende 1000-1281 arasında yaşamış **her** devlet. Eksik bırakma,
  ama küçük beylik/şehir devletini de **uydurmayla doldurma** — kaynağı
  olmayan yapıyı `denetim/`deki raporunun "bulunamadı" bölümüne yaz.
- Kronoloji: künye başına **en az 3, en çok 15.** Mutlaka olması gerekenler:
  **kuruluş · toprak kazanç/kayıp · hanedan değişimi · yıkılış.** Süs olay yok.
- Künye kaydının İÇİNDEKİ `kronoloji:` maddelerini dosyada **TEKRARLAMA**
  (mükerrer). Ölçüldü: 346 künyenin 343'ünde künye-içi iskelet **var**,
  medyan 3 madde. Senin dosyan o iskeleti **etlendirir**, kopyalamaz.

---

## 6 · KENDİ İŞİNİ SINA — teslimden ÖNCE, üç kapı

```bash
node --check data/kronoloji_cok_once1281_<bölge>.js        # ① ŞART
```
② **taraf kimliği kapısı** — kendi yazdığın her `taraflar[]` kimliği ya
`data/devletler.js`te VAR ya da **senin künye önerinde** var. Say ve teslimde
yaz: "eşlenemeyen taraf: 0". Eşlenemeyen varsa o madde **görünmez**.
③ **küresel ad** — değişken adın `data/` altında başka dosyada geçiyor mu (0).

🔴 **ÜÇ YAZIM BİÇİMİ** (`dersler/D240`): bu depoda `{ t:"…" }` çıplak ·
`{"t": "…"}` JSON tırnaklı · **dizgi İÇİNDE kod alıntısı** bir arada yaşıyor.
Yalnız birini arayan kalıp **sessizce "0" der.** Bugün bir araç 419 maddeyi
246 saydı. **0 bulursan evreninin kaç eleman olduğunu da bas** — evren 0 ise
sonuç "temiz" değil `ölçülemedi`.

⚠️ Türkçe karşılaştırmada `lower()` KULLANMA — `"İ".lower()` iki kod noktası
verir, `casefold()` de çözmez → `denetim/ARAC-NORMAL-0903.py`.

⚠️ `py arac/denetle.py` **ÇALIŞTIRMA** — tepesi 2,4 GB, sekiz oturum
çalışıyor. Koordinatör hepiniz bitince TEK SEFER koşturur.

⚠️ `git add` / `commit` / `push` **YASAK.** Koordinatör commitler.
`arac/` · `js/` · `css/` · `index.html` · `oturumlar/` → **YALNIZ OKU.**

---

## 7 · HABERLEŞME — `CLAUDE.md §7.1`

Tek kanal tahta; koordinatörün ekranına YAZILMAZ.
```bash
py arac/tahta.py yaz --kim "<ADIN>" --kime "YILDIRIM BAYEZIT" --mesaj-dosya <dosya>
```
Uzun ya da Türkçe metni komut satırına gömme — `Write` ile dosyaya yaz,
`--mesaj-dosya` ile ver, sonra `tahta.json`dan **geri oku.** "Yazdım" teslim
kanıtı değildir.

**BEKÇİ:** `py arac/tahta_bekci.py --kim "<ADIN>" --cik --ara 45`
(Bash `run_in_background`, Monitor DEĞİL). Kaynak kapısı AÇIK.

**ARA TESLİM İSTENİYOR:** künye önerin (adım ①) biter bitmez **beklemeden**
tahtaya yaz — koordinatör birleştirmeye o anda başlar, sen kronolojiye
geçersin. İki adımı tek teslimde biriktirme.

**TESLİM — üçlü kural** (§7.1 ④): ① ne ölçtüm (sayıyla) ② ne bulamadım
(`bulunamadı` bir sonuçtur) ③ ne istiyorum. + ürettiğin dosyalar.
Sonuna tek satır: **"bekçimi öldüreyim mi?"**

**AKSAKLIK BEKLEMEZ** (§7.1 ⑥): künye çakışıyorsa · kaynaklar çelişiyorsa ·
sayı beklenenden çok farklıysa · iş çok uzayacaksa → **hemen yaz.**
