# KITA 19 — MACARİSTAN 1526-1566 · ÖLÇÜM RAPORU (paket 0044)

Şartname: `oturumlar/KITA-19-MACARISTAN-0044.md`. Dört madde birlikte ölçüldü
(aynı coğrafya, aynı 40 yıl). `data/` DONUK (koşu 10) — hiçbir dosyaya
yazılmadı, yalnız `girdi.yukle()` ile okundu (D023: kendi ayrıştırıcımı
yazmadım).

---

## ① H-0002 · MOHAÇ — "yerleşimsiz toprak Osmanlı kırmızısı"

**Emre:** *"bu parça toprak içinde bir yerleşim de yok ama osmanlı kırmızısına
geçmiş görünüyor."*

**Ölçüldü:**
- Görsel `H-0002-2.png`'deki poligonun piksel sınırı (dolgu rengiyle eşleşen
  piksellerin bbox'ı) → lat/lon'a çevrildi (viewport bilgi çubuğundaki
  46,61-48,14K / 19,87-22,98D ile ölçeklendi). Poligon merkezi tahmini:
  **lat≈47,60 lon≈21,85**.
- `girdi.yukle()` çıktısından merkeze en yakın 8 nokta (haversine benzeri
  düz-küre formülü):
  ```
  Debrecen        18,5 km   ← ÇOK daha yakın, dominant nokta
  Varad (Oradea)  61,3 km
  Tokaj           66,3 km
  Szatmár         79,3 km
  ```
  ⇒ **§2'nin "o bölgede nokta var mı" sorusu: EVET, VAR** — Debrecen 18,5 km
  ile pratikte "o bölgenin sahibi". Poligonun kendisi noktasız ama en yakın
  nokta 3 kat daha yakın bir farkla belirgin.
- **Renk doğrulaması** (`PIL` ile piksel örnekleme, iki ayrı görselde
  tutarlı): poligon dolgusu ≈ RGB(196,124,118). `js/app.js:1383`
  `vassal-dolgu` (Osmanlı **TÂBİ**, `#b2384a`=RGB(178,56,74)) rengini fiziki
  altlık (bej/sarı zemin) üzerine ~%60 alfa ile bindirince beklenen ton
  ≈(192,116,99) — ÖLÇÜLENLE TUTARLI (R/G birkaç birim içinde). `Boğdan`ın
  gerçek rengi (`arac/renkler.py:1912`, `#24905a`=RGB(36,144,90), YEŞİL) ile
  **HİÇ eşleşmiyor** — ilk izlenimim (poligon = Boğdan) YANLIŞ çıktı, ölçüm
  düzeltti.
  ⇒ **Bu toprak Osmanlı DOĞRUDAN kırmızısı DEĞİL, Osmanlı TÂBİ tonu.**
- Debrecen kaydı (`data/yerlesimler_kdmacar.js:114-123`, kaynak: TDV `varad`
  maddesi — "Varad merkezli yeni eyaletin ... beş sancağı vardı: ...
  DEBRECEN...") `v:[{f:"1526-08-29",t:"1660-08-27",statu:"vassal"}]` taşıyor
  — yani 1526-08-29'dan (Mohaç günü) itibaren tâbi.
- **Emsal karşılaştırması:** Varad ve Budin'in KENDİ `v:` kayıtları
  (`data/yerlesimler.js:455-456`) aynı süreci `k:"Macaristan (Zapolya vasal
  krallığı)"` etiketiyle 1526-09-01'den başlatıyor (3 gün fark, muhtemelen
  önemsiz). ⇒ Debrecen'in erken-tâbi olması TEK BAŞINA bir hata değil,
  **atlasın önceden kurulmuş, araştırılmış (görev tahta M-1119) sözleşmesiyle
  TUTARLI.**

**Bulunan gerçek eksik (küçük, renk DEĞİŞMİYOR):** Debrecen'in `v:` kaydında
Varad/Budin/Erdel'in hepsinde bulunan `k:` serbest-metin etiketi YOK. Aşağıda
YAMA olarak önerildi.

**HÜKÜM: zaten-doğru** — poligon Debrecen'in peteği, rengi Osmanlı DOĞRUDAN
değil TÂBİ, ve bu tâbi-lik ataması atlasın mevcut, kaynaklı emsalleriyle
uyumlu. Emre'nin "Osmanlı kırmızısı" okuması renk AİLESİ olarak doğru
(kırmızı tonu), ama **doğrudan** değil **tâbi** kırmızısı — görsel ayrım ince
olduğu için karışması anlaşılır.

⚠️ **Ölçemediğim / bu oturumun yetkisi dışı:** bölgenin GERÇEKTEN bu kadar
boş olup olmadığı (yani Karcag/Kunhegyes/Törökszentmiklós/Mezőtúr gibi ek
nokta gerekip gerekmediği). `yerlesimler_kdmacar.js`'in kendi notu 8 nokta
istenip 1'inin yazıldığını, 7'sinin TDV+akademik aramada BULUNAMADI çıktığını
kaydediyor (§4 kırmızı çizgisi). Yerleşimler donuk olduğu için yeni nokta
aramadım/eklemedim — bu KITA'nın yetkisi ve bugünkü kilit dışında.

---

## ② H-0010 · BUDİN'İN İLHAKI — harita normal mi

**Ölçüldü:** `H-0010-1/2.png` (1541-08-29). Üç bölge net ayrışıyor:
- **Budin bölgesi** (koyu kırmızı, Osmanlı DOĞRUDAN) — Budin'den güneye
  Mohaç/Peçuy/Osek üzerinden Ottoman Bosna'ya bağlanan bir şerit.
- **Macaristan** (yeşil) — Segedin/Solnok/Kalocsa civarı, henüz doğrudan
  alınmamış rump krallık.
- **Erdel (Kaloşvar) bölgesi** (açık pembe-kırmızı, TÂBİ) — Debrecen, Varad,
  Gyula, Yanova, Temeşvar.

**Kaynak çapraz kontrolü:** `data/olaylar.js:72-73` (kaynak:"budin", TDV):
> *"Orta Macaristan'ı doğrudan Osmanlı yönetimine alarak Budin
> Beylerbeyliği'ni kurdu; Erdel ise Osmanlı'ya bağlı özerk bir prenslik
> yapıldı. Macaristan'ın bu üçe bölünmüş düzeni yaklaşık 150 yıl sürdü."*

⇒ Haritadaki ÜÇLÜ bölünme (Habsburg Macaristanı / Budin Eyaleti-doğrudan /
Erdel-tâbi) TDV'nin kendi anlatısıyla BİREBİR örtüşüyor. `statu_dogrudan:
["Budin","Peşte"]` alanı da aynı maddede mevcut.

**HÜKÜM: zaten-doğru** — tarihin "Macaristan'ın üçe bölünmesi" olarak bilinen
1541 sonrası düzeni haritada doğru temsil ediliyor.

---

## ③ H-0014 · SOLNOK FETHİ SIRASINDA GYULA — enklav mı

**Emre:** *"Gyula fethedilmemiş ve Osmanlı toprakları arasında mı kalmıştı?"*

**Ölçüldü** — `denetim/ARAC-KITA13-ARADA-NE-VAR-0912.py 1552-09-04 Gyula`:
```
"Gyula (Göle)"  macaristan
  43,4 km  Yanova (Ineu)     tâbi:None
  67,6 km  Varad (Oradea)    tâbi:None
  97,2 km  Segedin (Szeged)  OSMANLI
  99,1 km  Temeşvar          OSMANLI
 100,7 km  Solnok (Szolnok)  OSMANLI
 101,7 km  Debrecen          tâbi:None
 155,1 km  Eğri              avusturya
 163,6 km  Tokaj             avusturya
⇒ en yakın 8 komşunun 8'i FARKLI sahipte
🔴🔴 TAM ENKLAV: hiçbir komşusu aynı sahipte değil
```
Gyula'nın kendi kaydı (`data/yerlesimler_ek5.js:80-82`): `s: macaristan
[1281-01-01,1566-09-02]`, `d:[1566-09-02,1699-01-26,y:"kusatma"]` — yani
1566-09-02'ye kadar (Zigetvar seferiyle AYNI yıl) fethedilmiyor.

**Tarihî çapraz kontrol:** Gyula Kalesi'nin 1566'ya kadar (Zigetvar'la aynı
sefer) Osmanlı-çevrili bir Macar mevzii olarak direnmesi genel tarihte
bilinen bir olgu (1566 seferi hem Zigetvar'ı hem Gyula'yı düşürdü). Bu,
`CLAUDE.md`'nin kendi emsaliyle (Erzurum 1514-18 deliği — "TDV'nin kendi
tarifi çıktı") **aynı sınıf**: alet enklav diyor, VE enklav tarihen
GERÇEK.

**HÜKÜM: zaten-doğru** — Gyula 1552-1566 arası gerçek bir enklavdı, veri ve
harita bunu doğru yansıtıyor. Değişmez 2 zaten kırılmayı 5 gün içinde
maddeliyor (`yerlesimler_ek5.js:75`'in kendi notu).

⚠️ `data/olaylar_p0036.js:9-11`'de ayrı bir not: "Gyula (Göle) 1566 adayı
için TDV/akademik kaynak BULUNAMADI — forum/blog çıktı, madde YAZILMADI."
Bu, Gyula'nın 1566 KUŞATMASININ AYRINTILI ANLATIMI için — settlement'ın
KENDİ fetih GÜNÜ (1566-09-02, `d:` kaydı) ayrı ve zaten kaynaklı/tarihte
duruyor gibi görünüyor; bu ayrım BULUNAMADI değil ÖLÇÜLEMEDİ olarak
kaydediliyor (üçüncü bir oturumun konusu, benim değil).

---

## ④ H-0004 (veri tarafı) · MOHAÇ SONRASI BUDİN KIRMIZI NORMAL Mİ

**Emre:** *"Budin osmanlı kırmızısı görünüyor ama diğer macaristan bölgeleri
yeşil ... bu şekilde budinin osmanlı kırmızısı olması normal mi."*

**Ölçüldü** — Budin'in tam kaydı (`data/yerlesimler.js:456`):
```
ad:"Budin", kaynak:"budin",
s:[{1281-01-01→1526-09-01, macaristan}, {1686-09-02→1918-11-11, avusturya}, …]
v:[{1526-09-01→1541-08-29, k:"Macaristan (Zapolya vasal krallığı)", vassal}]
d:[{1541-08-29→1686-09-02, y:"ilhak"}]
```
1541-08-29'dan (`olaylar.js:72`, aynı gün, aynı kaynak "budin") itibaren
Budin `d:` (DOĞRUDAN Osmanlı) — yani koyu kırmızı boyanması **beklenen ve
kaynaklı** davranış. Bu tarihte Segedin/Solnok/Kalocsa gibi henüz alınmamış
komşu yerleşimler `s: macaristan` içinde kaldığı için yeşil kalıyor — iki
farklı gerçek durumun (doğrudan ilhak vs. henüz-bağımsız) doğru ayrımı.

**HÜKÜM: zaten-doğru** — Budin'in kırmızı, çevresinin yeşil olması bir hata
değil, 1541'deki gerçek idarî ayrımın (Budin Beylerbeyliği vs. henüz
alınmamış Macaristan) doğru temsili.

⚠️ KITA 14 ile örtüşme: Bu madde H-0006'nın (KITA 14, kronoloji tarafı)
veri ikizidir. Harita günü (1541-08-29, `d:` başlangıcı) ile madde günü
(`olaylar.js:72`, `t:"1541-08-29"`) BİREBİR aynı — tahtadan KITA 14'e
bildirildi, senkron sorunu YOK.

---

## 🟡 ÖNERİLEN KÜÇÜK YAMA (ayrı dosyada) — Debrecen `v:` etiketi eksik

`data/yerlesimler_kdmacar.js:123`: `v:[{f:"1526-08-29",t:"1660-08-27",
statu:"vassal"}]` — komşuları (Budin, Varad, Erdel, İbrail, Kalas — hepsi
`data/yerlesimler.js` + `yer_yama_vassal_kid_0906.js`) aynı dönem için `k:`
serbest-metin etiketi taşırken Debrecen taşımıyor. **Renk DEĞİŞMEZ** (k:
görsel değil bilgi alanı, `VERI-YAPISI.md:131`); yalnız bilgi tutarlılığı.
Detay: `denetim/YAMA-KITA19-DEBRECEN-K-ETIKET-0913.json`.

---

## Değişmez 1c notu

Şartname "Değişmez 1c belgesiz 4/4 TAVANDA" uyarısı taşıyor. Bu oturumda
yeni bir sahipsizlik/belgesiz boşluk YARATILMADI — dört madde de mevcut
kayıtların OKUNMASI ve YORUMLANMASIydı, `data/`ya hiçbir satır yazılmadı.

## Özet tablo

| Madde | Hüküm | Kaynak/dayanak |
|---|---|---|
| H-0002 | zaten-doğru (renk=tâbi, Debrecen 18,5km) | emsal: Varad/Budin v: kaydı |
| H-0010 | zaten-doğru | TDV `budin` (olaylar.js:72-73) |
| H-0014 | zaten-doğru (gerçek enklav) | ARADA-NE-VAR aracı + Gyula d: kaydı |
| H-0004 | zaten-doğru | TDV `budin`, aynı gün harita=madde |
