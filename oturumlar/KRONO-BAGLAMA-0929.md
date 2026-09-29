# KRONO-BAGLAMA-0929 — şartname

> 🔴 ÖNCE OKU: `CLAUDE.md` + [`oturumlar/KRONO-DUNYA-0929-ORTAK.md`](KRONO-DUNYA-0929-ORTAK.md) (özellikle **§4.1**)
> Dalga 1 · model Opus · **BU PAKET PLANIN EN DEĞERLİSİ**

## Niçin bu paket sonradan açıldı

Emre 12 paketlik bir "eksik kronolojiyi doldur" seferberliği istedi. Dağıtımın
ilk dakikasında `KRONO-BALKAN-B-0929` bir aksaklık bildirdi; doğruladım ve
**yazılmış 2.314 kronoloji maddesinin sitede görünmediği** ortaya çıktı.

📌 **2.314 maddeyi görünür kılmak, 2.314 yeni madde yazmaktan ucuzdur.**
Bu yüzden bu paket ötekilerin önüne geçti (`CLAUDE.md §3.1` darboğaz önce).

## 🔴 Ölçülmüş iki kusur — canlı yayında, kodun KENDİ uyarısıyla

`https://emrelic.github.io/osmanli-tarih-atlasi/` tarayıcı konsolu:

**① EŞLENEMEYEN — 15 dosya / ~2.092 madde yüklü ama HİÇBİR künyeye bağlı değil**
```
anadolu 281 · dogu_afrika 218 · orta_asya 205 · balkan 186 · italya_sehir 186 ·
iran_ardillari 155 · guney_asya 153 · cin 136 · hindistan 131 · misir 119 ·
kuzeyafrika 83 · ozbek 73 · japonya 71 · arabistan 60 · sirbistan 35
```
**② EZİLEN — 27 künyenin kendi 222 maddesi dosyayla DEĞİŞTİRİLİYOR**
```
bizans 15 · rusya 15 · habsburg 14 · gurcistan 13 · lehistan 12 · macaristan 12 ·
akkoyunlu 12 · venedik 11 · safevi 11 · memluk 10 · kirim 10 · karakoyunlu 10 ·
timurlu 10 · altinorda 5 · almanya 5 · ispanya 5 · fransa 3 · isvec 3 · … (27 künye)
```

**Sebep** — `js/app.js:13519 derinKronolojiBindir`:
`KRONOLOJI_<X>` → künye id `X.toLowerCase()` (`_`→`-` geri düşüşü). Künye yoksa
bağlanmaz; varsa **`=` ile EZER** (`app.js:13549`).
**Tek tüketici yolu `DEVLETLER[].kronoloji`dir** (`app.js:13960 · 14000 · 14185`) —
yani bağlanmayan bir dosyanın maddesine **başka hiçbir yoldan erişilemez.** Bunu
ben doğruladım; başka bir görünürlük yolu **bulunamadı.**

🔴 **Ve kapı bunu SORMUYOR:** `arac/denetle_yayin.py` yalnız `KRONOLOJI_` önekine
bakıyor, künye eşleşmesini sormuyor ⇒ kusur iki haftadır sessiz.
(`CLAUDE.md §11`: *"Denetim var ≠ o soruyu soruyor."*)

## 🔴 Dosya sahipliği — BUNLARIN DIŞINA YAZMA

| Dosya | Niçin senin |
|---|---|
| `js/app.js` | iki IIFE: `derinKronolojiBindir` (:13519) ve `cokTarafliKronolojiEkle` (:13573). Başka aktif paket app.js'e dokunmuyor — teyit ettim |
| `denetim/ARAC-KRONO-BAGLAMA-0929-KAPI.py` | kapı denetimi — AYRI dosya |
| `denetim/KRONO-BAGLAMA-0929.md` · `.json` | raporun + ham eşleme tablosu |
| `denetim/ARAC-KRONO-BAGLAMA-0929-UYGULA.py` | uygulayıcın (kuru koşu VARSAYILAN) |

🔴 **`arac/denetle_yayin.py`ye DOKUNMA** — o yayın kapısıdır, bende. Denetimini
ayrı dosyaya yaz, ben bağlarım.
🔴 **`data/devletler.js`e DOKUNMA** — `KUNYE-DUNYA-0929` üzerinde çalışıyor.
🔴 `data/kronoloji_*.js` dosyalarına **ancak ③'teki karar onaylandıktan sonra**
dokun; önce ÖLÇ ve ÖNER.

## İş — dört adım, sırayla

### ① KAPI (ilk iş, en ucuz, en kalıcı)
`denetim/ARAC-KRONO-BAGLAMA-0929-KAPI.py`: her `KRONOLOJI_*` globalinin bir
künyeye bağlandığını sınar; bağlanmayanı ve ezileni **adıyla ve madde sayısıyla**
basar, ihlalde çıkış kodu 1 verir.
🔴 **`app.js`in mantığını KOPYALAMA — ÇALIŞTIR.** Projenin kendi dersi bu
(`CLAUDE.md §9`: `odak_cozum.js` node ile koşar çünkü Python kopyası iki yerde
"yanlış temiz" vermişti; ve 29 Eylül'de GLM aynı dersi kapsama ölçümünde yaşadı —
regex %7,2 dedi, dosyayı çalıştıran port %16,1 buldu).
⇒ node + `vm` ile `data/*.js` ve `js/app.js`in ilgili bölümünü yükle.
🔴 **Kapıyı İKİ YÖNDE sına** (`CLAUDE.md §11`): bilerek bozuk bir global ekle,
ötmesini gör; kaldır, susmasını gör. Ötmediği kanıtlanmayan kapı çalışmıyor sayılır.

### ② EZME RİSKİNİ ÖLÇ — çare belli değil, ÖNCE SAYI
`=` yerine "birleştir" yapmak 222 maddeyi kurtarır **ama mükerrer üretebilir.**
`cokTarafliKronolojiEkle` mükerreri `t === t && b === b` ile atıyor — bu **tam
dizgi** eşitliğidir; künyedeki "Karlofça Antlaşması" ile dosyadaki "Karlofça
Antlaşması imzalandı" **atlanmaz, iki kez görünür.**
⇒ Ölç: 222 maddenin kaçının aynı `t`sinde dosyada bir madde var, ve o çiftlerin
`b` metinleri ne kadar yakın? Sayıyı ver, sonra çare öner. Seçenekler:
```
(a) birleştir + t eşitliğinde b benzerliği eşiği   → kaç mükerrer kalır?
(b) birleştir, mükerreri işaretle, hüküm koordinatörde
(c) künye maddelerini dosyalara TAŞI, künye alanını boşalt  → tek kaynak
```
🔴 **Hüküm verme, seçenekleri sayıyla sun** (`§7.1 ④`).

### ③ 15 EŞLENEMEYEN DOSYA — mekanizma + eşleme tablosu
Çare `ORTAK.md §4.1`de: `KRONOLOJI_COK_<X>` adı + madde başına
`devlet:"<künye id>"` / `devletler:[…]`. Bu yol **EZMEZ, EKLER**, `t+b` ile
mükerreri atar — `app.js:13573`te zaten var ve sınanmış.

Senden istenen:
- Her dosya için **hangi künyeler** (id ile, `devletler.js`ten okunarak).
- Madde başına künye atfı: **kesin olanları** doldur, **belirsizleri belirsiz
  bırak** ve SAY. 🔴 2.092 maddeye tek tek tarihî hüküm vermek bir oturumun işi
  değildir — otomatik atfedilebilenleri (dosyada `devlet:` alanı olan 723 kayıt ·
  başlığında künye adı geçen · `etiket:` içinde künye id'si olan) ayır; kalanı
  **sayıyla** bildir, listesini ver.
- `denetim/ARAC-KRONO-BAGLAMA-0929-UYGULA.py`: **kuru koşu VARSAYILAN**, her
  değişiklik için `count==1` eşleşme kanıtı, `--uygula` ile yazar.
- ⚠️ `anadolu` (281) ve `balkan` (186) muhtemelen ONLARCA künyeye dağılacak —
  en zoru bunlar. İşi bunlarla BAŞLATMA; kolay ve tek künyeli olanlarla
  (`japonya` 71 · `cin` 136 · `misir` 119 · `sirbistan` 35) başla ki mekanizma
  küçük bir kümede kanıtlansın.

### ④ DOĞRULA — tarayıcıda, konsolda
Uygulamadan sonra sayfayı yükle ve konsolu oku: `"eşlenemedi"` ve
`"KRONOLOJİ EZİLDİ"` uyarıları **azalmalı**, `"çok taraflı kronoloji — N madde,
M künyeye eklendi"` satırı **artmalı**. Öncesi/sonrası sayıları raporuna yaz.
🔴 A/B karşılaştırmasında **çalışma zamanında değişen globalleri hariç tut** —
29 Eylül'de 5 tanesi (`ISARETCI_KUTUK`, `OLAY_YERI`, `KURE_ACIK`,
`KURE_ONCEKI_MINZOOM`, `BOSLUK_HALKALARI`) yanlış "fark var" verdirdi.

## 🔴 Öngörü — ölçmeden ÖNCE yaz
Raporunun başına: **222 ezilen maddenin kaçı dosyadaki bir maddenin mükerreri
çıkacak?** ve **2.092 maddenin kaçına künye atfı OTOMATİK yapılabilecek?**
Sonra ölç, tuttu mu yaz. Tutmadıysa niçin tutmadığı daha değerlidir.

## Teslim
Tek tahta mesajı, üçlü kural + rapor yolu + commit. Sonuna: **"bekçimi öldüreyim mi?"**
⏱️ ① (kapı) ve ② (ezme sayısı) çıkar çıkmaz **ara mesaj at** — beş kardeş paket
şu anda dosya yazıyor, kararın onları etkiliyor.
