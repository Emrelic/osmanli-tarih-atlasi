# BULGU — OPUS HAZIR KITA 128 · `kaynak` AYRIŞAN KAYITLAR

> Sevk: `1.MURAT` · M-2245 · Dosya: bu.
> **VERİYE YAZILMADI.** `arac/*.py` yalnız OKUNDU (koşu PID 27596 canlı).
> Araç kuru koşuldu: `YAZ = "--yaz" in sys.argv` (`_sahiplik_uygula.py:59`)
> — bayrak verilmedi, `"(kuru koşu — hiçbir dosya yazılmadı)"` basıldı.

---

## ① KAÇ — **1 kayıt.** Ve sevkin iki sayısı bende farklı çıktı

```
🟡 1 adda YALNIZ `kaynak` ayrışıyor — veri İNECEK, kaynak YAZILMAYACAK
     Mîyandoab      yer_yama_iran.js  vs  yer_yama_uyg2.js
```

**Sevkin öncülü vs benim ölçümüm** (`§7.1 ⑤` — devraldığımı doğrulamadan
aktarmadım):

| | sevk (`ÖLÇTÜM` damgalı) | benim koşum |
|---|---|---|
| `uygulandi` | 83 → **137** | **113** |
| `cakisma` | 28 → **0** | **8** |
| `kaynak_ayrisan` | *"ÖLÇMEDİM"* | **1** |

**ÖLÇTÜĞÜM:** yukarıdaki üç sayı, kuru koşudan.
**ÇIKARDIĞIM (ölçüm değil):** aradaki fark muhtemelen zaman — OK109 bugün
altı yama dosyasında kayıt yoruma çevirdi, PAKET-0035 dört kayıt yazdı, ve
taban `2677 benzersiz ad / 69 dosya`ya çıktı. **Hangi commit'in hangi sayıyı
oynattığını ÖLÇMEDİM.**
⚠️ Sevkteki `cakisma 0` bugün **8**. Bu sayıya dayanan bir karar varsa
yeniden ölçülmeli.

---

## ② NE — çelişen iki değer, veride ŞU AN ne var, ve adresler canlı mı

### Kayıt (bağlı veri, `data/yerlesimler.js`)

```
Mîyandoab  36,9694 / 46,1028 · k:3
  s: ilhanli → celayirli → timurlu → karakoyunlu → akkoyunlu →
     safevi 1501-07-01→1736-03-08 → afsar → zend → kacar
  d: 1585-09-25 → 1603-10-21          ← Osmanlı dönemi
  kaynak: ⛔ ALAN HİÇ YOK
```

⇒ Sevkteki teşhis **TUTTU**: veri inmiş (`d:` yerinde), **adres inmemiş.**

### Çelişen iki değer

```
A · yer_yama_iran.js
  "TDV `tebriz` — 1593 idarî taksimi gövdesi okundu: Tebriz eyaleti livâları
   arasında Merâga, Merâga'nın nahiyeleri arasında \"Miyândûvab\".
   TDV `meraga`: şehir 993 (1585) yılında Osmanlılar'ın eline geçti,
   Osmanlı sisteminde SANCAK."

B · yer_yama_uyg2.js
  "TDV tebriz, meraga (data/yer_yama_iran.js'te 27 Ağustos'ta zaten
   araştırılmıştı, uygulanmamıştı)"
```

### Adresler — HTTP + gövde

```
tebriz      200   gövde 71.946 kar. (etiketsiz)   🟢 GERÇEK MADDE
meraga      200   gövde 59.197 kar. (etiketsiz)   🟢 GERÇEK MADDE
miyandoab   302   ÖLÜ          miyanduab  302  ÖLÜ          maraga  302  ÖLÜ
```
📌 Kasabanın **müstakil maddesi yok** ⇒ `§4`in **TANECİKLİK boşluğu**, coğrafî
boşluk değil. Ve kapsayıcı madde bir **YER** maddesi (`tebriz`) — 553 slug
taramasının ölçtüğü desenle uyumlu.
⚠️ Gövdeler boilerplate **değil**: OK109'un uyardığı eşik (~2-3 KB) çok
üstünde.

---

## ③ HANGİSİ DOĞRU — **A kazanır**, ve gövdeye sorularak doğrulandı

### Önce kendi varsayımım ÇÜRÜDÜ

*"`kaynak:` bir slug olmalı, ikisi de düzyazı ⇒ ikisi de kuraldışı"*
diye başladım. **Ölçtüm, yanlıştı:**

```
bağlı veride `kaynak:` alanı olan kayıt →  SLUG biçimli 26  ·  DÜZYAZI 181
```
Düzyazı **baskın biçim (%87)**, kuraldışı değil. Varsayımımı rapora
yazsaydım iki adayı da haksız yere eleyecektim.

### 🔴 VE İLK GÖVDE ARAMAM YANLIŞ NEGATİF VERDİ — beşinci eksen beni ısırdı

`tebriz` gövdesinde `yandu`/`yando` aradım → **0 sonuç**, yani *"patch'in
iddiası gövdede YOK"* diye hüküm verecektim. **Yanlıştı:** kelime
**`Miyandûvab`** biçiminde geçiyor ve aksanlı `û` düz aramayı öldürüyor.
Aksan-normalleştirilmiş arama ile **bulundu**:

> "…Suldus, Dizmâr (Sendyan, Gerger), **Merâga (Seracû, Leylân, Egertû,
> Kavdûl, Miyandûvab, Ahtacî-yi Ulyâ, Ahtacî-yi Suğrâ)**, Sarukurgân …
> **livâ ve nahiyelerinden** oluşuyordu."

⇒ A'nın `tebriz` iddiası **BİREBİR TUTTU**: Miyandûvab, Merâga livâsının
nahiyesi, Tebriz eyaletinde.
📌 Bu, sevkin saydığı **③ SLUG YAZIMI / ⑤ NOKTALAMA** ekseninin aynısı, bu
sefer **aksan** ekseninde — ve *kaynağa değil, kendi arama aletime* düştü.

### A'nın `meraga` iddiası da tuttu — **ama EKSİK**

TDV `meraga` gövdesi:

> "Osmanlı-Safevî savaşlarında **941 (1534)** ve **993 (1585)** yıllarında
> **iki defa** Osmanlılar'ın eline geçen şehir bir süre de bu devlete bağlı
> kaldı. III. Murad dönemine ait mücmel tapu tahrir defterinde **sancak
> (livâ)** olarak geçtiği…"

```
A'nın yazdığı   "993 (1585) yılında Osmanlılar'ın eline geçti … SANCAK"
kaynağın dediği "941 (1534) VE 993 (1585) — İKİ DEFA"
```
⇒ A **doğru ama eksik**: 1534 fethini düşürmüş.

### Hüküm

**A (`yer_yama_iran.js`) kazanır.** Gerekçe **kaynak çelişkisi değil**:
ikisi de aynı iki maddeyi gösteriyor, yani **kaynakta anlaşmazlık YOK**.
Ayrım biçimde:

```
A  kaynağın KENDİSİNİ taşıyor — hangi madde, hangi gövde, hangi cümle
B  YAMA SÜRECİNİ anlatıyor — "zaten araştırılmıştı, uygulanmamıştı"
```
B'nin parantezi bir **kaynak beyanı değil, bir süreç notu**; yeri `not:`,
`kaynak:` değil. `kaynak:` alanına süreç notu yazmak, `§4`ün *"kaynağı
yazılmayan bilgi, kaynağı olmayan bilgiden ayırt edilemez"* kuralını
biçimsel olarak sağlar ama **izlenemez** kılar.

---

## ④ REÇETE — uygulama koordinatörde, KAYIT BAZINDA

⚠️ Sevkteki `t:`/`b:` alanlarını kayıt konumlandırıcı olarak okudum; bu
çatışma bir **skaler alanda** (`kaynak`), tarihli bir dönemde değil — o
yüzden dönem uçları yerine **kaydın adını** anahtar veriyorum.

```
dosya   : data/yerlesimler.js
ad      : Mîyandoab            (36,9694 / 46,1028 — koordinatla teyit)
alan    : kaynak
eski    : ⛔ ALAN YOK
yeni    : TDV `tebriz` — gövde okundu: Tebriz eyaleti livâları arasında
          Merâga, Merâga'nın nahiyeleri arasında "Miyandûvab".
          TDV `meraga` — gövde okundu: şehir Osmanlı-Safevî savaşlarında
          941 (1534) ve 993 (1585) yıllarında İKİ DEFA Osmanlılar'ın eline
          geçti; III. Murad devri tahririnde sancak (livâ).
          Kasabanın müstakil TDV maddesi YOK (miyandoab · miyanduab · maraga
          hepsi 302) — §4 TANECİKLİK boşluğu, kapsayıcı madde `tebriz`.
yol     : ① kuru koşu → çatışan tek ad  ② iki yamanın değerleri okundu
          ③ tebriz + meraga HTTP 200, gövdeler çekildi (72K / 59K kar.)
          ④ AKSAN-NORMALLEŞTİRİLMİŞ arama — düz "yandu" araması YANLIŞ
             NEGATİF verdi, `Miyandûvab` ancak normalleştirince bulundu
kaybeden: yer_yama_uyg2.js — değeri bir süreç notu, kaynak beyanı değil.
          SİLİNMESİN, `not:`e taşınabilir.
```

---

## ⑤ YAN BULGU — kaynak, veride OLMAYAN bir Osmanlı dönemi söylüyor

TDV `meraga` **iki** Osmanlı fethi sayıyor (1534 ve 1585); veride **tek**
`d:` bloğu var (`1585-09-25 → 1603-10-21`). 941 (1534) dönemi **yok**.

**ÖLÇTÜĞÜM:** kaynağın iki fetih dediği, verinin bir dönem taşıdığı.
**ÖLÇMEDİM:** 1534'ün kasıtlı mı bırakıldığı · komşu kayıtlarda (Merâga,
Tebriz) karşılığı olup olmadığı · yazılırsa `Değişmez 2`de yeni bir kırılma
günü doğup doğmayacağı.
⇒ Bu benim kalemim **değil** ve reçeteye **koymadım**; bir veri kararıdır.
`ÖLÇÜLEMEDİ` kovasında, *"temiz"* diye YAZMIYORUM.
