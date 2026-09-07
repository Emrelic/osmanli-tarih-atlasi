# VASSAL GÖRÜNÜM — 0907

| alan | değer |
|---|---|
| **AD** | VASSAL-GORUNUM-0907 |
| **MODEL** | Opus |
| **DİZİN** | `C:\Users\emrem\OneDrive\Desktop\TARİH COĞRAFYA SİTESİ` |
| **ClaudEmre** | çalıştırma |

---

## ① İŞİN ÖZÜ — bugün ölçülmüş bir BOŞLUĞU kapatıyorsun

Emre'nin **tâbi devlet görünümü** isteği bir yıldır açık. Bugün niçin
açık kaldığı ölçüldü, ve sebep veri değil **gösterim yolu**:

```
v: dönemleri     429 · statu 421 · kid 291 · k 373
uret_petek.py    `vl` çapası ÜRETİYOR (k · statu · nokta) — 4826/4844
js/app.js        `v:` dönem `statu`sunu ve `kid`ini HİÇ OKUMUYOR
denetle.py       HİÇ OKUMUYOR
```
🔴 ⇒ **Alan var, dolu, geçerli — ve okuyan yok.** `CLAUDE.md §11`in
*"bir ders veriye SERBEST METİN olarak inerse inmiş sayılmaz"*
dersinin **alan** yüzü: `grep` *"var"* der, motor *"yok"* der.

**Senin işin:** `js/app.js`te o okuma yolunu **yazmak ve SINAMAK.**

---

## ② 🔴 EN ÖNEMLİ KISIT — VERİ HENÜZ YOK, ve bu bir ENGEL DEĞİL

```
`vl` çapası bugün SABAH `uret_petek.py`ye yazıldı
KOŞU 8 onu ŞU AN üretiyor (11:17'de başladı, ~16 saat)
⇒ bugünkü `data/donemler.js`te `vl` YOK. Koşu 8'inkinde OLACAK.
```
⇒ **Kodu ŞİMDİ yaz, SENTETİK bir fikstürle sına, YAYINLAMA.**
Koşu inince gerçek veriyle bir kez daha koşulur ve yayına girer.

📌 Ve bu tam olarak `C13`ün **ATEŞLEME** ayağıdır: gerçek veride o
durum yoksa dal **zorlanarak** sınanır. Bu proje bugün o disiplinin
değerini ölçtü — bir `instanceof` kusuru **yalnız zorlanmış fikstürde**
göründü, gerçek veri onu asla gösteremezdi.

🔴 **Fikstürün gerçek şemayı taşımalı, TAHMİN ETTİĞİNİ değil.**
`uret_petek.py:4826-4850` aralığını **oku** ve `vl`in tam biçimini
oradan al. Kayıt biçimini hatırlamaya çalışmak, bu projede yedi kez
ısırdı.

---

## ③ NE YAPILACAK

```
① `uret_petek.py`nin `vl` çapasını OKU — alanları, tipleri, ne zaman
   yazılıp ne zaman yazılmadığı (`_dn is None` dalı var)
② `js/app.js`te tâbi gövdenin etiketini `vl`den KUR
③ `statu` değerini göster — bugün TEK DEĞER var (`vassal` 421) ama
   sözlük genişleyecek; kodun **bilinmeyen bir değeri** gördüğünde
   ÇÖKMEMESİ ve SESSİZCE YUTMAMASI gerekiyor: bilinmeyen değer
   GÖRÜNÜR biçimde ele alınır
④ C13 DÖRT AYAK — hepsi koşulur:
      GEÇME      `vl` yokken (BUGÜNKÜ veri) sayfa NORMAL açılıyor mu
      ATEŞLEME   sentetik `vl` ile etiket ÇIKIYOR mu · her dal ayrı
      GİRDİ      gerçek `donemler.js`ten okuma yolu koşuldu mu
      ÇIKTI      aletin cevabını DOĞRU YERDEN okuduğunu göster
```

🔴 **GEÇME AYAĞI BU KALEMDE EN ÖNEMLİSİ:** bugünkü `donemler.js`te
`vl` **yok**, ve senin kodun bugün canlı yayında koşacak. `vl`
yokluğunda sayfa **açılmaya devam etmeli.** Bu proje bir kez
`duygu:"notr"` yüzünden siteyi **tamamen ölü** yayınladı ve
`denetle.py` TEMİZ diyordu.

---

## ④ DOSYALARIN — ve komşun

```
🟢 SENİN         js/app.js · css/style.css
                 denetim/SINAV-VASSAL-GORUNUM-0907.* · _fikstur/
                 oturumlar/VASSAL-GORUNUM-0907.md
🔴 SENİN DEĞİL   data/* · arac/* · index.html
```
⚠️ **`index.html` `GECIS-SURE-0907`de** (geometri `fetch`+JSON diff'i,
onaylandı, inişi koşu 8'e kilitli). Ona dokunma; kesişme sezersen
**tahtadan doğrudan yaz** (`§7.1③` yatay mesaj serbest).
🔒 `data/` ve `arac/uret_petek.py · renkler.py · girdi.py` **DONUK** —
**okumak serbest**, yazmak koşuyu ÖLDÜRÜR.

**Ad alanı:** `window.<AD>` gerektirmiyor.

---

## ⑤ ÖNCÜL DAMGALARI
```
🟢 ÖLÇTÜM      js/app.js `v:` dönem `statu`sunu okumuyor
               (`statu_dogrudan`/`statu_vasal` KRONOLOJİ alanlarıdır,
                BAŞKA ŞEY — karıştırma)
🟢 ÖLÇTÜM      v: 429 dönem · statu 421 · kid 291 · k 373
🟢 ÖLÇTÜM      bugünkü donemler.js'te `vl` YOK
🟡 DEVRALDIM   `uret_petek.py:4826` ve `:4844` satır numaraları —
               başka bir oturumdan, DOĞRULAMADIM. Dosyayı kendin aç.
⚪ ÖLÇMEDİM    `vl` çapasının koşu 8 çıktısında GERÇEKTEN üretilip
               üretilmeyeceği — koşu bitmeden bilinemez
```

---

## ⑥ HABERLEŞME
```
py arac/tahta.py yaz --kim "VASSAL-GORUNUM-0907" --kime "1.MURAT" --mesaj "..."
```
Açılınca · kalem kalem · soru gelince **hemen** · bitince **sayıyla.**
🔴 Kritik mesajı `oturumlar/tahta.json`dan **geri oku** (`§7.1⑤b`).
🔴 **Aksaklık beklemez** (`§7.1⑥`).
⚠️ **Kendi pencerene yazmak = hiç cevap vermemek.**

🟢 **VE BİR ŞEY DAHA — bugün öğrenildi:** bir sevk ya da düzeltme senin
**kendi ölçümünle çelişiyorsa UYGULAMA** — ölç, yaz, bildir. Bugün bir
oturum koordinatörün *"DUR, sayın yanlış"* uyarısına uymadı ve **haklı
çıktı** (uysaydı 50 dönemlik mükerrer iş olurdu).
⚠️ Şartı: **uymamak SESSİZ OLAMAZ.**

---

## ⑦ KABUL ÖLÇÜTÜ
```
① GEÇME ayağı: `vl` YOKKEN sayfa normal açılıyor — KANITIYLA
② ATEŞLEME: sentetik fikstürle etiket çıkıyor — her dal AYRI
③ bilinmeyen `statu` değeri: ne çöküyor ne SESSİZCE yutuluyor
④ YAYINLANMADI — koşu 8 bitmeden yayına girmez
```
⚠️ *"Kod yazıldı"* kabul ölçütü **değildir**; *"sınandı"* ölçüttür. Bu
proje o farkı defalarca ölçtü.

---

## ⑧ İLERLEME
Bu dosyanın altına yaz. Kendi dosyanı commit edebilirsin — **pathspec
ZORUNLU**, `git add -A` / `git add .` **ASLA** (git index 20+ oturum
arasında paylaşılıyor).
⚠️ Commit teslim değildir; **teslim mesajdır.**

---

## İLERLEME NOTLARI
