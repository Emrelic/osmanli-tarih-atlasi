# TÜR SÖZLÜĞÜ — `data/devletler.js` `tur:` alanının envanteri

Sevk: 1.MURAT (koordinatör) · 11 Eylül 2026 · SONNET (TÜR SÖZLÜĞÜ)
`data/` donuk, hiçbir yazma yapılmadı — yalnız ölçüldü.

---

## ⚠️ ÖNCE BİR TUZAK — `tur:` bu dosyada İKİ AYRI ŞEYİ anlatıyor

`data/devletler.js`de `tur:` alanı **iki farklı seviyede, iki farklı
sözlükle** kullanılıyor ve isim aynı olduğu için birbirine karışabilir
(`§11 D124` sınıfı):

```
① ÜST SEVİYE — devletin KENDİSİNİN türü        ("kraliyet mi cumhuriyet mi")
② `kronoloji:[{t:...,tur:...}]` — EMBEDDED olay türü ("kuruluş mu savaş mı")
```

İlk ham grep'im (`tur:"[^"]*"` — tüm dosya) **ikisini birden** saydı ve 37
farklı değer çıkardı; **yalnız ①'i** (kaydın hemen başında, `id:`/`ad:`den
sonra gelen) ayrıştırınca gerçek envanter ortaya çıktı. Aşağıdaki her şey
YALNIZ ①'dir — Emre'nin sorduğu "devlet türü" budur.

---

## ① MEVCUT SÖZLÜK — kendim saydım, belgeye güvenmedim

```
627  toplam devlet künyesi
601  tur: taşıyan (19 farklı değer)
 26  tur: HİÇ TAŞIMAYAN (aşağıda §⑤)
```

| değer | sayı | | değer | sayı |
|---|---|---|---|---|
| devlet | 187 | | prenslik | 17 |
| krallik | 138 | | hanlik | 17 |
| sultanlik | 52 | | gecici-isgal | 17 |
| cumhuriyet | 49 | | dukalik | 15 |
| beylik | 34 | | sehzadelik | 4 |
| hanedanlik | 29 | | emirlik | 4 |
| imparatorluk | 28 | | ocaklik | 3 |
| | | | isyan | 3 |
| | | | ulke, kralik, gecici-hukumet, federasyon | 1'er |

**19 değer** — koordinatörün andığı "18" ölçümü büyük ihtimalle `kralik`
(bkz. §③) yazım hatasını `krallik` ile birleştirip saymış, ya da bu 26
alansız kaydı hiç görmemiş. Kendi ölçümüm 19'dur.

---

## ② `sam-eyaleti` · `bagdat` · `habes-eyaleti` · `cildir-eyaleti` — HİÇBİRİ KÜNYE DEĞİL

Dördü de `data/devletler.js`de `id:` olarak **YOK.** Taradım:
`habes-eyaleti` yalnız yerleşim kayıtlarında bir `kaynak:"habes-eyaleti"`
**TDV ATIF SLUGU** olarak geçiyor (bkz. `data/kademe_4ff22b.js`) — Osmanlı
Habeş Eyaleti hakkındaki bir TDV maddesine işaret ediyor, kendisi bir
devlet künyesi DEĞİL. Diğer üçü hiç geçmiyor.

⇒ **"Bu türe girmesi gereken başka künye var mı?" sorusunun cevabı: HAYIR,
çünkü aday künyelerin HİÇBİRİ ŞU AN VAR OLMUYOR.** `eyalet` tamamen YENİ
bir değer olacak VE Mısır/Sırbistan künyeleri de (mevcut `misir`/
`sirbistan` bulunamadı — yalnız `misir-kavalali`, `misir-sultanligi`,
`misir-kralligi`, `sirbistan-nemanjic`, `sirbistan-prensligi`,
`sirbistan-kralligi` var, hiçbiri saf Osmanlı-eyalet dönemini
kapsamıyor) muhtemelen **yepyeni künye kayıtları** olarak açılacak, var
olan birini relabel etmek DEĞİL. M-3357'nin "ayrı künye açılacak" sözü
bunu zaten doğruluyor.

---

## ③ SÖZLÜK NEREDE TANIMLI — dokümante ama DENETLENMİYOR

`VERI-YAPISI.md`'de `data/devletler.js` şema tablosu `tur` alanını
`bolge`yle **AYNI GÖRSEL BİÇİMDE** (`\|`-ayraçlı liste) tarif ediyor:

```
tur | imparatorluk | krallik | prenslik | dukalik | cumhuriyet | hanlik |
      beylik | devlet | sultanlik | ocaklik | hanedanlik | isyan |
      gecici-isgal                                          (13 değer)
```

⚠️ **AMA `bolge` satırı "Kapalı sözlük" diye AÇIKÇA etiketli, `tur` satırı
DEĞİL.** Ve ölçüm bu farkı doğruluyor: gerçek veride **19** değer var,
belgede **13** — `sehzadelik`, `emirlik`, `ulke`, `kralik`,
`gecici-hukumet`, `federasyon` belgeye hiç GİRMEMİŞ. `kralik` ayrıca
**`krallik`nin YAZIM HATASI** (`kongre-polonyasi` künyesi, tek kayıt).

`arac/denetle.py` `tur:` alanını yalnız RAPOR ÇIKTISINDA kullanıyor
(satır 3383, 3768, 3910) — hiçbir yerde bir değer listesiyle
KARŞILAŞTIRMIYOR, yani **hatalı/yeni bir `tur:` değeri denetimi hiç
ötürmez.**

⇒ **CEVAP: `tur:` SERBEST METİN, kapalı bir şema DEĞİL.** "Eklemek" bir
MUTABAKATTIR — VERI-YAPISI.md tablosuna satır eklemek gerekir, ama bunu
zorlayan hiçbir alet yok; nitekim 6 değer zaten belgesiz sızmış ve kimse
fark etmemiş.

---

## ④ 🔴🔴 TÜKETİCİ — VE BURADA GERÇEK BİR SESSİZ KAYIP BULUNDU

`js/app.js` üst seviye `tur:`u yalnız **bir yerde** anlamlı biçimde
okuyor — "Devletler dizini" sekmesi (satır 5158-5171):

```js
var DEVLET_TUR_ADI = { imparatorluk:"İmparatorluklar", ... };  // 13 anahtar
var dgruplar = {};
(window.DEVLETLER||[]).forEach(d => (dgruplar[d.tur]=dgruplar[d.tur]||[]).push(d));
Object.keys(DEVLET_TUR_ADI).forEach(tur => {         // 🔴 DEVLET_TUR_ADI'NIN
  if (!dgruplar[tur]) return;                        //    ANAHTARLARINDA GEZER,
  baslik(...); dgruplar[tur].forEach(...);            //    dgruplar'ınkinde DEĞİL
});
```

**`dgruplar` her `tur:` değeri için otomatik bir kova açar (hata vermez)
— ama render döngüsü yalnız `DEVLET_TUR_ADI`'nin 13 SABİT anahtarını
gezer.** `dgruplar`da olup `DEVLET_TUR_ADI`da OLMAYAN bir grup **hiçbir
zaman ekrana basılmaz.** Bu SESSİZ — hata yok, konsol uyarısı yok, dizin
sekmesi sadece o kayıtları hiç göstermez.

📌 **Ve bu YENİ bir hata sınıfı değil — dosyanın kendi yorumu (satır
5155-5157) `sehzadelik`in AYNI ŞEKİLDE kaybolduğunu ve düzeltildiğini
kaydediyor.** ⇒ Bu, o dersin ÖĞRENİLMEDİĞİNİN kanıtı: aynı sınıf hata
**şu an, bu ölçümde, 6 değerde daha** tekrar ediyor.

**BUGÜN DİZİNDE GÖRÜNMEYEN 11 DEVLET KÜNYESİ** (tur: `DEVLET_TUR_ADI`da
yok):
```
emirlik (4)         bundu · liptako · adamava · afganistan
isyan (3)            san-fan · dashun · taiping
gecici-hukumet (1)   garbi-trakya
federasyon (1)       transkafkasya
ulke (1)             izlanda
kralik (1, yazım hatası) kongre-polonyasi
```

🔴 **VE BUNUN SONUCU: `eyalet` eklendiğinde, `js/app.js`teki
`DEVLET_TUR_ADI`ya da AYRICA eklenmezse, Mısır/Sırbistan'ın yeni eyalet
künyeleri de bu 11'in yanına, GÖRÜNMEZ hâlde katılır.** İki dosyaya
BİRDEN dokunmak şart — yalnız `data/devletler.js` yetmez (`§7` ad alanı
dersinin bir başka yüzü: aynı kavram iki dosyada, biri güncellenip öteki
unutulursa veri "var" ama "görünmez" olur).

⚠️ `arac/uret_petek.py`, `arac/renkler.py`, `arac/denetle.py` — üçü de bu
üst-seviye `tur:`u OKUMUYOR (tarandı, sıfır eşleşme). Motor/renk/denetim
etkilenmiyor, yalnız dizin UI'ı.

---

## ⑤ `tur:` TAŞIMAYAN 26 KÜNYE — kusur mu, meşru mu?

**Kusur — 26'sının 26'sı da, isimlerinden KENDİ TÜRLERİ zaten çıkarılabiliyor:**

```
6  -kralligi (Irak, Mısır, Orta Macar, Kaheti, ...)      → krallik
5  -sultanligi/-emirligi karışık (Mısır, Ürdün, Agadez, Kesîrî, Kuaytî, Sânî, Sabah)
                                                            → sultanlik/emirlik
3  Manda idaresi (Suriye-Lübnan, Filistin)                → yeni bir tip mi
   gerekir, yoksa gecici-isgal mi — KARAR gerekiyor
3  Halk Cumhuriyeti (Tannu Tuva, Harezm, Buhara)           → cumhuriyet
   (Sovyet-güdümlü olduğu ozet'te zaten yazılı)
3  Guyana (İngiliz/Hollanda/Fransız kolonisi)              → belirsiz, yeni
   bir kategori gerekebilir ("koloni"?)
2  -beyligi/-prensligi/-sancagi (Konstantin Beyliği,
   Dejanović Prensliği, Arvanid Sancağı, Crnojević Zetası) → beylik/prenslik/?
1  Şamhallık (Kumuk) → hanlik'e mi beylik'e mi yakın, belirsiz
```

⇒ Bunların **hiçbiri** kasıtlı bir tasarım kararı gibi görünmüyor — hepsi
1918-sonrası manda/himaye kümesi VE 15.-17. yy Kafkasya/Balkan yerel
güçleri kümesinde yoğunlaşıyor, yani muhtemelen **iki ayrı oturumun**
`tur:` alanını doldurmayı unuttuğu iki ayrı yazım turu. **Denetim adayı**
olarak kaydediyorum ama BEN düzeltmiyorum — kapsamım bu değildi.

---

## ÖZET SAYILAR

```
627  toplam devlet künyesi
 19  gerçek tur: değeri (belgede 13 yazıyor — 6 eksik + 1 yazım hatası)
 26  tur: hiç taşımıyor (hepsi isminden çıkarılabilir bir tür taşıyor)
 11  devlet künyesi BUGÜN dizin UI'ında GÖRÜNMÜYOR (tur değeri app.js
     DEVLET_TUR_ADI sözlüğünde yok) — eyalet eklenirken AYNI hataya
     düşülebilir
  0  sam-eyaleti/bagdat/habes-eyaleti/cildir-eyaleti — hiçbiri künye
     değil, eyalet için aday havuzu YOK, Mısır/Sırbistan yeni kayıt
```
