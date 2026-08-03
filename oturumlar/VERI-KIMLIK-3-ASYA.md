# VERİ KİMLİK 3 — Asya'nın 98 adsız kimliği

**Model: Opus.**

📌 *VERİ KİMLİK 2 kapatıldı; bu onun devamı değil,
yeni ve bağımsız bir görevdir. Eski oturumun kuyruğu bitmişti.* Kaynak taraması ve künye yazımı; her kimlik için tarih,
başkent ve özet kararı gerekiyor.

## 🔴 AÇILIŞ — yalnız bunlar

```
① bu dosya (baştan sona)
② CLAUDE.md  §4 kaynak kuralı · §7 dosya sahipliği
③ ONCELIK.md §2 altı bütçe kuralı · §4 halkalar
```
⚠️ **`/claudemre-basla` ÇALIŞTIRMA** — o koordinatör komutudur
(`ORGANIZASYON §17`). Senin açılışın bu dosyadır.

## 🔴 DURUM DAMGASI

```
BAŞLARKEN   py <ClaudEmre>/kutu/ekip.py "<proje>" "VERİ KİMLİK 3" calisiyor "not"
SORU VARSA  ...aynı komut... soru "cevap bekleyen soru"     🔴 kutuda KIRMIZI
BİTİNCE     ...aynı komut... hazir "teslim ettim"
```
`<ClaudEmre>` = `~/OneDrive/Desktop/ClaudEmre`
📌 Damgasız oturum kutuda "sessiz" görünür ve unutulur. Bu bir kez oldu:
iki paket, 47 madde, günlerce bekledi.

## 🔴 YAZMA YETKİN

```
data/devletler.js       ← künyeler (senin dosyan)
arac/renkler.py         ← BOYALAR sözlüğü (senin dosyan, bu iş için)
```

⚠️ **Başka hiçbir dosyaya yazma.** `yerlesimler*.js`e dokunma — orada
`d:` değerleri zaten doğru yazılmış, sorun onların **karşılığının
olmaması**.
⚠️ `devletler.js` **CRLF** satır sonlu, bozma.
⚠️ Commit ve push **yalnız Oturum 0'dan.** Bitince "hazır" de.
🔴 **`arac/uret_petek.py` ÇALIŞTIRMA.** Koşuyu yalnız Oturum 0 tetikler.

---

## PROBLEM — ölçüldü

r690 koşusunda Asya kutuya girdi. Veri geldi, **kimlikler gelmedi**:

```
kosu_47aa386.log:  631 UYARI · 98 AYRI KİMLİK
                   "UYARI boya: <yerleşim> bilinmeyen devlet kimliği '<id>'"
```

Bu kimliklerin `devletler.js`te künyesi **ve** `renkler.py`de boyası
yok. Sonucu: **motor onları boyayamıyor** — o topraklar haritada
komşusunun rengine düşüyor ya da boş kalıyor.

⇒ Kullanıcının `p4/H-0010` maddesi (*"Hazar doğusundaki büyük coğrafya
genel olarak boş görünüyor"*) tam bunun görünen yüzü.

## SIRA — uyarı sayısına göre DEĞİL, SAHNEYE göre

⚠️ En çok uyarı veren `cin-cumhuriyeti` (85) **1912 sonrası**; atlasın
son on yılında sahnede. Oysa `sur-hanedani` (32) **1550 kesitinde**
Hindistan'ın yarısını tutuyor. Uyarı sayısı önem sırası değildir.

**Ölçüldü — 1550-06-15 kesitinde sahnede olan adsız kimlikler:**
```
sur-hanedani        32 nokta   ← EN BÜYÜK TEK BOŞLUK
gucerat-sultanligi   7
racput               6
ahmednagar           5 · golkonda 5 · nayak-devletleri 5
yarkent-hanligi      4 · tibet 4 · demak 4
orissa               3 · bicapur 3 · kuzey-yuan 3
```

### PARTİ 1 — 1550 kesiti (12 kimlik, ~80 nokta)
Yukarıdaki liste. **Bunlar bitince harita 1550'de bütünleşir** ve etki
tek koşuda görülür. Önce bu.

### PARTİ 2 — Hindistan geri kalanı (~25 kimlik)
`bengal-sultanligi` · `bengal-nevabligi` · `bicapur` · `avad` ·
`haydarabad-nizam` · `cavnpur-sultanligi` · `malva-sultanligi` ·
`madurai-sultanligi` · `gucerat-sultanligi` · `karnatik` · `sind` ·
`kesmir` · `cammu-kesmir` · `kakatiya` · `pandya` · `hoysala` ·
`yadava` · `orissa` · `gond-kralliklari` · `ahom` · `manipur` ·
`arakan` · `afgan-durrani` · `afganistan`

### PARTİ 3 — Doğu ve Güneydoğu Asya (~35 kimlik)
`guney-ming` · `dashun` · `san-fan` · `tungning` · `taiping` ·
`cin-cumhuriyeti` · `kenmu` · `azuchi-momoyama` · `pagan` ·
`hanthawaddy` · `ava` · `tonburi` · `campa` · `tran-hanedani` ·
`ho-hanedani` · `mac-hanedani` · `tay-son` · `nguyen-beyligi` ·
`angkor-kmer` · `laos-kralliklari` · `singhasari` · `demak` ·
`malay-sultanliklari` · `ternate-sultanligi` · `fransiz-cinhindi` …

### PARTİ 4 — Orta Asya ve kuzey (~10)
`kuzey-yuan` · `mogolistan` · `mogulistan` · `yarkent-hanligi` ·
`tibet` …
⚠️ `mogolistan` ve `mogulistan` **ayrı yazılmış — ölç.** İkisi aynı
kurumsa tek kimlik olmalı; ayrıysa fark künyede açıklanmalı. (Bu tam
`YASALAR B11`in vakası: aynı kuruma iki kimlik vermek.)

---

## HER KİMLİK İÇİN — iki dosya, iki iş

### ① `data/devletler.js` künyesi
```javascript
{ id:"sur-hanedani", ad:"Sûrîler (Sûr Hânedanı)", tur:"devlet",
  bolge:"hindistan", f:"1540-05-17", t:"1556-11-05",
  baskent:"Delhi", harita:"sur-hanedani",
  ozet:"…175 karakter civarı, Kural ⓪…  (kaynak: TDV, madde: suriler)",
  kronoloji:[ { t:"…", tur:"kurulus", b:"…" }, … ] }
```
⚠️ `ozet` ortancası **175 karakter** — ölçüldü. Uzun yazma.
⚠️ `harita:` alanı bir **denetim köprüsüdür**, boyama yolu DEĞİLDİR.
Motor doğrudan `BOYALAR[d]`e bakar (`uret_petek.py:272`). Yani künye
yazmak tek başına **boyamaz** — renk de gerekir.

### ② `arac/renkler.py` boyası
```python
"sur-hanedani": ("Sûrîler", "#xxxxxx"),
```
🔴 **Renk TAHMİNLE seçilmez, ÖLÇÜLÜR:**
```
py arac/renk_olc.py
```
Eşikler: altlıktan (#e8dfc8) **ΔE ≥ 15** · eşzamanlı komşudan **ΔE ≥ 12**.
Bugünkü taban: **10 görünmez · 56 çakışma · 0 aynı-hex.**
⚠️ **Bu sayılar ARTMAMALI.** Artıyorsa rengi değiştir, yeniden ölç.
📌 Bugün bir örnek yaşandı: `nebhani` için `#8e44ad` seçildi, `ilhanli`ya
ΔE 11,2 çıktı (eşik 12), `#a0326b` ile değiştirildi. Ölçüm yapılmasaydı
görünmeyecekti.

---

## KAYNAK KURALI

**TDV asıldır.** Hindistan ve Güneydoğu Asya için TDV maddeleri vardır:
`suriler` · `gucerat` · `bicapur` · `golkonda` · `ahmednagar` ·
`bengal` · `kesmir` · `arakan` · `campa` · `malaka` · `demak`…

⚠️ **TDV'de karşılığı olmayan kimlikler var** (Japonya, Çin hanedanları,
Angkor, Laos). Onlar için:
```
· akademik referans eserler kullanılabilir
· Wikipedia TEK BAŞINA kaynak DEĞİLDİR
· kaynak bulunamıyorsa künye YAZILMAZ — "kaynak bulunamadı" diye
  raporda belirtilir ve o kimlik kuyrukta kalır
```
📌 Negatif sonuç da sonuçtur. Uydurulmuş tarih, boş kalmış kimlikten
zararlıdır.

---

## TESLİMAT

`oturumlar/VERI-KIMLIK-3-ILERLEME.md` dosyasına:
- yazılan künyeler: `id` · tarih aralığı · kaynak (TDV madde adı)
- verilen renkler: `id` · hex · **`renk_olc.py` sonucu** (görünmez /
  çakışma / aynı-hex sayıları, öncesi-sonrası)
- **yazılmayan** kimlikler ve **niçin** (kaynak yok / iki kimlik aynı
  kurum / karar gerekiyor)
- 🔴 kullanıcıya sorulacak varsa: `ekip.py … soru "…"` ile damgala

## BİTİŞ ÖLÇÜTÜ

```
PARTİ 1 bitti sayılır  ⟺  12 kimliğin künyesi VE boyası var
                       ⟺  renk_olc.py: görünmez ≤10 · çakışma ≤56
                       ⟺  1550 kesitinde adsız kimlik kalmadı
```
Sonraki koşuda `kosu_*.log`daki uyarı sayısı **631'den düşmüş** olmalı;
düşmüyorsa iş görünmemiş demektir (`YASALAR F5`).
