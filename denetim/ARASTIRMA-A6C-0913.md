# PAKET-A6C · ARAŞTIRMA — Doğu · Arap · renk/taralı alan · 13 Eylül 2026

Oturum: PAKET-A6C (işçi) → 1.MURAT · Sevk: `denetim/OLCUM-PAKET-SINIF-0913.md` §A6c (8 madde)
Yazılan: bu rapor · `denetim/YAMA-A6C-0913.json` · aletler `denetim/ARAC-A6C-OLC-0913.js` ·
`ARAC-A6C-DEVIR-0913.js` · `ARAC-A6C-BOSLUK-0913.js` · `ARAC-A6C-TDV-0913.py`.
Proje verisine/koduna **dokunulmadı** (koşu 10 donuk). Commit yok.

## 0 · Taban ve uyarılar

```
yerleşim evreni   arac/girdi.py GIRDI_DOSYALARI → 79 dosya · 3818 nokta (aletin kendi okuması)
devirler.js       DEVIRLER_KAYNAK_OZET = sha256(data/donemler.js) = 9190d194…  ⇒ BAYAT DEĞİL
e53c86a           HEAD'in atası (git merge-base --is-ancestor ✓) · yayın r7487
görsellerin günü  parti-0035 damga 2026-08-26 16:16 · parti-0033 damga 2026-08-24 13:50
                  ⇒ İKİ PARTİ DE e53c86a (27 Ağu), ok101 (2 Eyl) ve koşu 8/9'dan ÖNCE
```
⚠️ **Önceki hüküm var:** `denetim/HUKUM-PAKET-0035.json` (2 Eyl) bu yedi maddenin hepsine
hüküm vermiş. Bu rapor onu **tekrar etmiyor, sınıyor**: 3 maddede hükmü genişletiyorum
(H-0020 · H-0063 · H-0076), 1 maddede kaynağı ilk kez okudum (H-0058), 1 madde bugünkü
FERHAT PAŞA paketlerine devredilmiş durumda (H-0088).

⚠️ **Ölçüm sınırı:** noktaların **dönem kaydını** ölçtüm, çizilen geometriyi (petek) değil —
H-0019'daki "boyanır mı" cevabı nokta-mesafesi üzerinden, **çizim ölçülmedi**.

---

## 1 · `0035/H-0020` — İstanbul Mukasemenamesi (24 Haziran 1724): Şirvan enklavı

**HÜKÜM: veri kısmen doğru · enklav BUGÜN DE ÜRETİLİYOR · kimlik ve gün ÇEK.**

Önceki hüküm *"enklav bugünkü veriyle üretilemiyor"* diyordu — ama **1730-01-01** kesitini
ölçmüştü. Emre'nin görseli **1724-06-24**. O günü ölçtüm:
```
1724-06-24   Şamahı OSMANLI (d:1723-08-01→1735-06-19)          ← TEK Osmanlı noktası
             Şeki · Kabala · Ereş · Gence · Berde   safevi (d: 1725-09-12'de başlıyor)
             Kuba · Şâbüran                          safevi (1724-35 boyunca HİÇ Osmanlı değil)
             Bakü · Salyan · Derbend                 rusya
1727-01-01   Şamahı · Şeki · Kabala · Ereş · Gence · Berde OSMANLI ⇒ enklav KAPANMIŞ
1733-06-01   aynı; Salyan safevi'ye dönmüş (1732-01-21)
```
⇒ Emre'nin gördüğü enklav **gerçek bir veri durumunun** görüntüsü: 24 Haziran 1724'te
Şirvan'da yalnız Şamahı Osmanlı sayılıyor. Antlaşma **paylaşımı** tarif ediyor, atlas
**fiilî tasarrufu** boyar (`D030`): Revan 1724 · Tebriz 28 Temmuz 1725 · Gence/Şeki 1725.

**Kaynak (TDV `sirvan`, 200, gövde okundu):**
> "Osmanlılar, Kasım 1722'de Ruslar'a ültimatom verip çekilmelerini isterken Hacı Dâvud'un
> Şirvan üzerindeki hâkimiyetini tanıdılar. Hacı Dâvud, Kırım hanı gibi vasal bir hükümdar oldu."

ve: *"1719 ve 1721'de Kuba ve Şemâhî şehirlerini ele geçirip…"* · *"Şirvan'ın sahil kesiminin
Ruslar'da kalması"* · Hacı Dâvud'un yerine Surhay Han getirildi (yıl verilmiyor).

**Kusurlar (sayıyla):**
```
① KİMLİK   Şamahı d: (DOĞRUDAN) — TDV "vasal hükümdar" diyor ⇒ v: (tâbi) olmalı
② GÜN      1723-08-01 — dayandığı madde olaylar_ek5.js:517 `gun:"1723"` (YIL) ⇒ sahte kesinlik;
           TDV tanımayı "Kasım 1722"ye koyuyor
③ KUBA     Hacı Dâvud 1719'da Kuba'yı almış; 1722 tanıması "Şirvan" diyor, Kuba'yı ADIYLA
           anmıyor ⇒ Kuba'nın 1722-28 durumu BULUNAMADI (bölge→şehir çıkarımı yapılmadı)
④ KAYNAK İÇİ ÇELİŞKİ (§4⑥)  TDV `sirvan` antlaşmaya "24 Haziran 1724" diyor, TDV `nahcivan`
           "Şevval 1136 (Temmuz 1724)". Madde 24 Haziran — sirvan'la uyumlu; BİLDİRİYORUM.
⑤ TDV `sirvan` "1722'de Ruslar Şemâhî'yi zaptettiler" diyor — akademik anlatıda Rus seferi
           Derbend'de durur. Kontrol edilmedi, ÖLÇMEDİM; veride Şamahı'ya rusya yazılmamış.
```
**Öneri:** yama yok (kimlik + gün iki kararı birlikte ister). `YAMA-A6C` → `C-0020` ÇEK.

---

## 2 · `0035/H-0037` — Basra işgalinde (1776-79) Fâv Osmanlı'da mı kaldı

**HÜKÜM: veri dokunulmaz · Fâv'a özel kaynak BULUNAMADI** (önceki hüküm teyit, kaynak genişletildi).

```
Basra  s:zend 1776-04-16→1779-04-01 · d: öncesi/sonrası
Fâv    d:1546-01-01→1914-11-22 KESİNTİSİZ      Kürne  d:1546→1914 KESİNTİSİZ
```
- TDV `basra`: *"Şehir 1775-1779 yılları arasında Sâdık Han tarafından zaptedildiyse de tekrar
  geri alındı."* Fâv yalnız 1951 "Fâv İskelesi" olarak geçiyor.
- Encyclopaedia Iranica, BASRA: *"Basra was blockaded and finally forced to surrender in
  1190/1776 and a Persian garrison was installed. But the Zands, like the Ottomans, found it
  impossible to control the town without the backing of the Montafeq tribe…"*
- Iranica, KARIM KHAN ZAND (J. R. Perry): Zand valisi *"defeat in an ambush by the Arab tribe of
  the Montafeq in June 1778"*.
- Iranica, IRAQ v: *"occupied Basra in Rabiʿ I 1190/April 1776 after a long siege"*.

⇒ Üç kaynak da işgali **şehirle** sınırlı anlatıyor; Fâv'ı ya da aşağı Şattülarap'ı Zand
tasarrufunda sayan cümle **yok.** Veriyi çürüten kaynak yok, doğrulayan da yok.
⚪ ÖLÇÜLEMEDİ: Fâv'ın 18. yüzyılda bir yerleşim olarak varlığı (TDV yalnız 20. yy'da anıyor).
📌 Emre'ye cevap: *"Kaynaklar Zend işgalini Basra şehriyle anlatıyor; Fâv için ayrı bir kayıt
yok, o yüzden harita Fâv'ı değiştirmiyor — bu bir doğrulama değil, kaynağın sessizliği."*

---

## 3 · `0035/H-0039` — Bahreyn fatihinin rengine neden boyanmıyor

**HÜKÜM: O GÜN HAKLIYDI · BUGÜN ÇÖZÜLMÜŞ** (önceki hüküm bağımsız ölçümle teyit).

```
görsel damgası öncesi commit   e6684fc (24 Ağu) · 19e8274 (25 Ağu)
   Manama: bos:"devletsiz" · s:[{1861-05-31→1923 ingiltere}] ⇒ 1861'e kadar SAHİPSİZ
bugün
   Manama s: cebri 1417 · portekiz 1521 · safevi 1602 · umman 1717 · zend 1753 ·
             bahreyn 1783-01-01→1861-05-31 · ingiltere 1861
   renkler.py BOYALAR "bahreyn" #4a48be ✓
   devletler_harita.js DEVLET_HARITA bahreyn dnm [1783-01-01→1861-05-31, 3 parça] ✓
   aynı dosyada zend 1753→1783 · umman 1717→1753 pencereleri de VAR
```
⇒ Emre'nin *"önceki maddelerde de aynı şey"* sözü de aynı kökten: bütün zincir eksikti.
TDV `bahreyn`: *"Bahreyn 1783 yılında Utûb kabilesinden Âl-i Halîfe'nin hâkimiyetine girdi"*
(YIL) ⇒ `1783-01-01` doğru kodlama. Görseldeki gün tam 1783-01-01 (kırılma günü).
⚪ ÖLÇMEDİM: zend 1753 / umman 1717 günlerinin kaynağı.
⚠️ Halka önerisi YOK: kaynak "Bahreyn" (adalar) diyor, Manama'yı adıyla anmıyor (`VERI-YAPISI` halka kuralı ①).

---

## 4 · `0035/H-0058` — Kaheti ve Tarki vassal renginde

**HÜKÜM: veri doğru · kaynak ilk kez okundu · bir yan kusur.**

```
1598-04-09  Zagem (Kaheti)  v:1578-08-09→1606-01-01 "Kaheti krallığı (tâbi)" · s:gurcistan
            Tarki (Tarku)   v:1578-11-01→1607-01-01 "Kumuk şamhallığı (tâbi)"
```
- TDV `gurcistan` (200, okundu): *"Tiflis'in fethinden sonra İmeret ve Kahet yöneticileri
  Osmanlılar'a itaatlerini bildirdiler; her yıl otuz yük ipek … vermek üzere haraca bağlandılar.
  Kahet ülkesi ocaklık olarak buranın eski hâkimi Alexandre'a bırakıldı."*
- TDV `dagistan` (200): *"Dağıstan 1578-1606 yılları arasında Osmanlı hâkimiyeti altında kaldı."*
- TDV `kumuklar` (200): Osmanlı **desteğini** anlatıyor, tâbiiyet cümlesi **yok** ⇒ Tarki'nin
  tâbi statüsü bölge (Dağıstan) düzeyinde destekli, şamhallık adıyla BULUNAMADI.

📌 Emre'ye cevap: **Kaheti evet** — Gürcü krallığı, 1578'den sonra Osmanlı'ya haraçgüzar
(ocaklık). **Tarki Gürcistan değil**: Dağıstan'daki Kumuk Şamhallığı'nın merkezi; 1578-1606
Dağıstan Osmanlı hâkimiyetindeydi. İkisi de tâbi tonunda — veri bunu çiziyor.

**Yan kusur — Tiflis/Zagem günü:**
```
veri   Tiflis d.f 1578-08-09 · Zagem v.f 1578-08-09   (Çıldır Savaşı günü)
TDV    tiflis:    "24 Ağustos'ta Tiflis'e ulaştı ve boşaltılmış kaleyi ele geçirdi"
       gurcistan: "24 Ağustos'ta Tiflis şehrini savaşsız ele geçirdiler" · Kahet itaati
                  "Tiflis'in fethinden SONRA"
```
⇒ Tiflis 15 gün erken; Zagem'in tâbiiyeti Tiflis'ten önce başlayamaz. YAMA-A6C `P-0058-a/b`.
⚠️ `devletler.js kaheti-kralligi f:1578-08-09` aynı günü taşıyor (künye dosyası, B1'e bilgi).
⚠️ Yan: Tarki `s: iran 1281-1501 · safevi 1501-1736` — Şamhallık'ın Safevî'ye ait sayılması
ölçülmedi; `data/yer_yama_zend_kacar.js` bu kaydı zaten tutuyor (orada bakılmalı).

---

## 5 · `0035/H-0063` — Herseknovi işgal altında görünüyor, maddesi yok

**HÜKÜM: VERİ YANLIŞ (iki uç da yıl-yuvarlak) · bitiş günü KAYNAKLI bulundu · başlangıç günü BULUNAMADI.**

Görsel: 1538-01-01 · z8 · Boka Kotorska. Taralı alan = Herseknovi `isg`.
```
Herseknovi  d:1482-01-01→1687-09-30 · isg:{f:"1538-01-01", t:"1539-01-01", d:"ispanya", kaynak:"dalmacya"}
kronoloji   Castelnuovo/Nova/Herseknovi 1538-39 maddesi: 0 (olaylar* · kronoloji* · savaslar.js tarandı)
```
Önceki hüküm: *"gerçek günler bulunamadı — TDV `herseknovi` 302, `hersek` gövdesinde yok."*
**Bu tur kapsayıcı KİŞİ maddesinden bulundu** (`§4` "olay slug'ı ölü ⇒ başındaki kişiye bak"):

- **TDV `barbaros-hayreddin-pasa`** (200, okundu):
  > "Bu arada Doria tarafından daha önce ele geçirilen Adriyatik kıyısındaki Nova da
  > (Castelnuova) kolaylıkla geri alındı (10 Ağustos 1539)."
- **Museo del Ejército** (İspanya Kara Kuvvetleri resmî müzesi, Sitio de Castelnuovo sayfası):
  kuşatma *"between the 18th of July and the 7th of August of 1539"*, son saldırı *"DAY 7 OF
  AUGUST OF 1539"*; 1538 alınışı için yalnız *"taken by troops of the Spanish Tercios the year before"*.
- ⚠️ **Kaynak çelişkisi (bildiriyorum, taraf seçmiyorum):** TDV 10 Ağustos · Museo 7 Ağustos 1539.
  `§4`: TDV esastır ⇒ öneri 10 Ağustos, fark `not`ta.
- Başlangıç: akademik kaynakta gün/ay **BULUNAMADI.** Popüler siteler "Ekim 1538 sonu" diyor —
  🔴 kullanılmadı. TDV bibliyografyasındaki **C. H. Imber, "The Costs of Naval Warfare: the Account
  of Hayreddin Barbarossa's Hercez Novi Campaign in 1539", Archivum Ottomanicum IV (1972), 203-216**
  aranacak kaynaktır (erişilmedi).

**Kusur:** `f:1538-01-01` Preveze'den (savaslar.js `1538-09-28`; TDV: Doria "25 Eylül 1538'de
harekete geçti") **~9 ay önce** — görseldeki taralı alanın 1538-01-01'de çıkmasının sebebi budur.
Ama `§4` yıl biliniyorsa `YYYY-01-01` der; ay/gün kaynağı yok ⇒ **f'yi bugün değiştiren bir
yama yazılamaz**, yalnız bitiş düzelir.

**Öneri (YAMA-A6C `P-0063`):** `isg.t 1539-01-01 → 1539-08-10` + aynı gün kronoloji maddesi
(A3 sahibine metin hazır, `M-0063-1`). 🔴 **İkisi birlikte iner** — madde olmadan t kayarsa
`Değişmez 2i` bir açık kazanır (tavan 3, bugün 3). Başlangıç maddesi `M-0063-2` "1538 · gün
bilinmiyor" olarak `1538-01-01`e yazılabilir (Emre'nin *"maddesi yok"* sorusunu kapatır,
hassasiyeti metinde taşır).

---

## 6 · `0035/H-0076` — Ahmed Paşa Antlaşması taralı alan tutarsızlığı

**HÜKÜM: Emre'nin üç gözlemi e53c86a ile ÇÖZÜLDÜ (teyit) · AMA BUGÜNKÜ TARAMADA YENİ BİR KUSUR VAR: Nahçıvan · Ordubad · Hoy.**

**e53c86a yürürlükte mi — EVET, ölçüldü:** HEAD'in atası; `devirler.js` son üretim a8feb8d
(koşu 9, 12 Eyl); özet = diskteki `donemler.js` sha256 ⇒ bayat değil.

**Bugünkü tarama (ARAC-A6C-DEVIR, nokta-içinde-çokgen):**
```
Ahmed Paşa Antlaşması t:1732-01-10 · savas_basi:1730-08-01 · alıcı yalnız `safevi` · 6 parça
 parça 0  Tebriz · Nahçıvan · Merâga · Hoy · Ahar · Sarâb · Miyâne · Ordubad   (8 nokta)
 parça 3  Hemedan · Kirmanşah · Nihâvend · Kasr-ı Şîrîn                        (4 nokta)
 parça 1,2,4,5  NOKTASIZ şeritler (en yakın: Özalp/Kotur · Bacirge/Sero · Eçmiyadzin · Ahılkelek)
Mısır · Kızıldeniz · Derbend · Gümrü · Çaldıran · Başkale   TARALI DEĞİL ✓
Şamahı · Ereş · Kabala · Şeki                              TARALI DEĞİL ✓ (Osmanlı'da kaldılar)
```
📌 Önceki hüküm "9 parça" diyordu; bugün 6 — koşu 9 çıktısı. Noktasız dört şerit bir **petek
yeniden bölüşüm artefaktı** (komşu sahiplik değişince sınır kayıyor): MOTOR sınıfı, küçük.

**Emre'ye cevap — "Şirvan verilmemiş gibi taranmamış":** doğru, **verilmedi.**
- TDV `revan`: *"1732'de imzalanan, ancak kısa süren anlaşma ile Revan'ın Osmanlı toprağı içinde kaldığı tescil edildi."*
- Iranica, NĀDER SHAH: *"a peace agreement that allowed the Ottomans to retain these lands, while returning Tabriz"*.
- TDV `hemedan`: *"10 Receb 1144'te (8 Ocak 1732) yapılan barış antlaşması ile Hemedan tekrar İran'a bırakıldı."*
- TDV `kirmansah`: Nâdir 1729-30'da aldı, *"1732, 1736 antlaşmaları ile İran'da kaldı."*

**🔴 YENİ KUSUR — Aras'ın KUZEYİ iade edilmiş gibi taranıyor:**
```
Nahçıvan  d:1725-01-01→1730-08-12 · sonra safevi  ⇒ TARALI (iade edilmiş görünüyor)
   TDV nahcivan: "Nahcıvan da Nahcıvan sancağının merkezi olarak 1724-1735 yıllarında
                  Osmanlı idaresinde kaldı."
Ordubad   aynı kalıp (Nahçıvan'ın kopyası) · TDV `ordubad` 302 ⇒ kendi kaynağı YOK
Hoy       d:1724-09-28→1730-08-12 ⇒ TARALI
   TDV hoy: "III. Ahmed döneminde Hoy tekrar Osmanlı hâkimiyeti altına girdi (1724) ve on beş
             yıl kadar Osmanlılar'ın yönetiminde kaldıktan sonra 1739'da tekrar İranlılar'ın eline geçti."
```
⇒ Veri, Nâdir'in **1730 karşı taarruzunu** (Tebriz'de TDV'yle doğru) Aras'ın kuzeyine de
yaymış; Iranica'ya göre Tahmasb'ın 1731 seferinde Osmanlılar kaybedilen toprakların çoğunu
**geri almış** ve antlaşma onları Osmanlı'da bırakmış.
- `P-0076-a` Nahçıvan `d.t 1730-08-12 → 1735-06-19` — **ÇEK**: uç TDV'den YIL (1735); gün Revan'ın
  Baghavard maddesinden (olaylar_ek6.js:85, TDV `revan` "Haziran 1735") ⇒ `§4` komşu şartı ①
  **kısmen** (komşunun AY'ı kaynaklı, GÜN'ü değil). 1730-31 arası kısa bir Safevî dönemi olup
  olmadığı **BULUNAMADI**.
- Ordubad: 🔴 **yama YOK** — gününü Nahçıvan'dan almak, Nahçıvan'ın da devralınmış gününe
  yaslanmak = zincirleme devralma (`§4` YASAK). Açık kalem.
- Hoy: 🔴 **yama YOK** — TDV `hoy` 1739, TDV `revan` Nâdir'in 1735'te Revan-Gence-Tiflis'i
  aldığını söylüyor; iki madde uyumsuz (§4⑥). Açık kalem.
- ⚠️ KITA 29 `B2 Nahçıvan 1586 BEKLET` aynı KAYDIN başka penceresi — çakışmaz ama `D166` gereği
  sıraya konmalı.

**Kaynak çelişkileri (bildiriyorum):**
```
Tebriz iadesi  Iranica NĀDER SHAH: 1732'de "returning Tabriz" ↔ TDV tebriz: "1736 antlaşmasıyla İran'a bırakıldı"
Tebriz 1731    TDV tebriz + hekimoglu-ali-pasa: 15 Kasım 1731 Hekimoğlu geri aldı ↔ veride 1731-11-15 penceresi YOK
Tebriz 1725    TDV tebriz: 28 Temmuz 1725 ↔ veri d.f 1725-08-04
Antlaşma günü  TDV hemedan: 8 Ocak 1732 ↔ veri/devirler/madde 1732-01-10
```

---

## 7 · `0035/H-0088` — Osmanlı içinde farklı kırmızı ve "SAFEVÎ İRAN" yazan bölgeler

**HÜKÜM: HATA — BUGÜNKÜ FERHAT PAŞA PAKETLERİNE DEVREDİLMİŞ · veri henüz inmemiş.**

Görseller (1590-03-21): Kasr-ı Şîrîn kaması · Gümrü kaması. "SAFEVÎ İRAN" etiketi = o petek
`safevi` gövdesi. Bugünkü veri:
```
Kasr-ı Şîrîn  s:safevi 1503→1736 · d: yalnız 1723-10-01→1730-08-12   ⇒ 1590'da SAFEVİ kaması
Gümrü         s:safevi 1501→1736 · d: YOK                            ⇒ 1590'da SAFEVİ kaması
Eçmiyadzin    aynı                                                     ⇒ Revan'ın 19 km'sinde kama
   (Hânekîn d:1534-1623 · Kirmanşah d:1590-1603 · Revan d:1583-1604 · Kars/Arpaçay/Digor/Iğdır d:1534-1878)
```
Bugün açılmış kararlar (ben yazmadım, yinelemedim):
```
Kasr-ı Şîrîn  YAMA-0047-FERHATPASA-BATI A0047-1 · BIRLESIK G-KASRISIRIN
Gümrü         SEHIR-MATRISI O-GUMRU "örtülü Osmanlı" — Emre 13 Eyl 4. tur kararı
Eçmiyadzin    YAMA-KITA29 B1 (Revan başı 1583-09-13)
toplu         YAMA-FERHATPASA-BIRLESIK-0913.json (c3149fd) — koşu sonrası iniş
```
🟢 TDV `revan` bağımsız teyit: *"Revan 991 Ramazanı başlarında (Eylül 1583 ortaları) Osmanlılar
tarafından kontrol altına alındı"* ⇒ veri Revan `d.f 1583-06-01` üç ay erken (KITA 29 C1 bunu düzeltiyor).
🟢 TDV `kars`: 1534'te *"Pasin, Şüregel, Oltu gibi kalelerin"* alınışı · 1579 Lala Mustafa · 1604 Şah Abbas.
⚠️ **ÖLÇMEDİĞİM ve sorduğum:** birleşik yama Gümrü/Eçmiyadzin için **1724-1735** penceresini de
kapsıyor mu? Revan `d:1724-09-28→1735-06-19` taşırken ikisi `safevi` ⇒ **aynı kama 1724-35'te de var.**
⚪ "Farklı kırmızı ton" = safevi (#a56cab) gövdesinin üstündeki bölge/kademe tonu olduğunu
DÜŞÜNÜYORUM, ÖLÇMEDİM (app.js çizim sırası okunmadı).

---

## 8 · `0033/H-0019` — Tebük-Medine arasında yerleşim yok mu

**HÜKÜM: O GÜN NOKTASIZLIK · BUGÜN BÜYÜK ÖLÇÜDE KAPANMIŞ (ok101) · bir kaynaklı nokta önerisi.**

Görsel 1517-07-12, damga 24 Ağu. `yerlesimler_ok101.js` (el-Vech · el-Ulâ · Medâin-i Sâlih ·
Hayber) **2 Eylül'de** eklendi (13188d0) ⇒ görselde yoktu.
```
bugün 1517-07-12  Tebük d · el-Vech d · el-Ulâ d · Medâin-i Sâlih d · Yenbu d · Bedir d
                  Medine v (Mekke Şerifliği) · Hayber v · Teymâ SAHİPSİZ (1836'ya kadar)
Tebük → Medâin-i Sâlih hattı, 10 km adımla en uzak nokta-mesafesi  111,7 km @ 27,588K 37,260D
A1 yarıçap tavanı 200 km ⇒ hat bugün BOYANABİLİR (çizim ÖLÇÜLMEDİ)
```
**Nokta önerisi — Ahdar (P-0019-a, ÇEK):**
- TDV `ahdar` (200, okundu): *"Tebük'ün 70 km. güneyinde Hicaz demiryolu üzerindedir … Daha sonra
  yapılan küçük bir kalenin içinde kalan bu mescid … Bu kaleye Kanûnî Sultan Süleyman zamanında
  önemli bazı ilâvelerde bulunulmuştur (1531). İslâm'ın ilk devirlerinden beri Şam yönünden hacca
  gidenlerin … konaklama yeri."*
- Koordinat: GeoNames *Qal'at al Akhdar*, fort, 28°05'K 37°09'D → **28,0833 · 37,15**.
  Tebük'e **66,3 km** (TDV "70 km" ile uyumlu). 3 km sınavı: en yakın Tebük 66,3 · Teymâ 146,0 ⇒ GEÇER.
- Zincir: Tebük kaydıyla aynı (memluk →1517-07-06 · d 1517-07-06→1918-01-01). ⚠️ `§4` komşu şartı
  ①: **Tebük'ün 1517-07-06 gününün kendi kaynağını ÖLÇMEDİM** ⇒ ÇEK.
- Halka önerisi YOK: "Kanûnî zamanında ilâveler" bir yapı kaydı; sahiplik **çıkarımdır** (kural ①).

**Önerilmeyenler:**
```
Dârülhamrâ   GeoNames "abandoned railroad station" 27,34 · 37,79 — kaynak yalnız İSTASYON (1906+);
             1517 menzili olarak kaynakta BULUNAMADI ⇒ önerilmedi
Muazzam      GeoNames'te yok · TDV `muazzam` 302 ⇒ BULUNAMADI
```
📌 Koridor/durak kısmı `0035/H-0054` (B) — bu rapor yalnız noktasızlık tarafını kapatır.

---

## 9 · Halka (BAYRAK) önerileri — 12 kayıt, şema `VERI-YAPISI.md`

Hepsi `YAMA-A6C-0913.json` → `halka_onerileri`. Dosya adı önerisi:
`data/kaynakli_halka_a6c.js` → `window.KAYNAKLI_HALKA_A6C` (yazmadım; `app.js` listesine satır gerekir).
```
Herseknovi  osmanli 1539-08-10 gun  TDV barbaros · (ikinci kayıt: Museo del Ejército 1539-08-07, çelişki notu)
Tiflis      osmanli 1578-08-24 gun  TDV tiflis
Revan       osmanli 1583-09    ay   TDV revan   · Revan osmanli 1732 yil TDV revan ("toprağı içinde kaldığı tescil")
Nahçıvan    osmanli 1724→1735  yil  TDV nahcivan (tek kaynak, iki uç)
Hoy         osmanli 1724       yil  TDV hoy
Tebriz      osmanli 1725-07-28 gun · 1731-11-15 gun  TDV tebriz
Hemedan     osmanli 1724-08-31 gun · safevi 1732-01-08 gun  TDV hemedan
Basra       zend    1776-04    ay   Iranica IRAQ v
```
**Reddedilen halka adayları:** Bahreyn/Manama (adalar adı) · Kaheti/Zagem ("Kahet ülkesi") ·
Tarki (Dağıstan bölge cümlesi) · Şamahı ("Şirvan" hâkimiyeti) · Ahdar/Tebük (yapı kaydı).

## 10 · Özet tablo

| madde | hüküm | yama | açık kalan |
|---|---|---|---|
| 0035/H-0020 | enklav 1724-06-24'te gerçek; Şamahı d→v + gün | ÇEK C-0020 | Kuba 1722-28 bulunamadı |
| 0035/H-0037 | veri dokunulmaz | — | Fâv'a özel kaynak bulunamadı |
| 0035/H-0039 | o gün eksik, bugün çözülmüş | — | zend/umman günleri ölçülmedi |
| 0035/H-0058 | veri doğru, kaynak okundu | P-0058-a/b (Tiflis/Zagem 08-09→08-24) | Kumuk tâbiiyeti adıyla bulunamadı |
| 0035/H-0063 | veri yanlış | P-0063 isg.t→1539-08-10 + M-0063-1/2 | f günü bulunamadı (Imber 1972) |
| 0035/H-0076 | e53c86a yürürlükte; yeni kusur | P-0076-a Nahçıvan (ÇEK) | Ordubad · Hoy · Tebriz çelişkileri |
| 0035/H-0088 | FERHAT PAŞA paketlerinde | — (devredildi) | 1724-35 Gümrü/Eçmiyadzin kaması? |
| 0033/H-0019 | ok101 ile kapanmış | P-0019-a Ahdar (ÇEK) | Dârülhamrâ/Muazzam bulunamadı |

## Kaynaklar (dış)
- [Encyclopaedia Iranica — BASRA](https://www.iranicaonline.org/articles/basra/)
- [Encyclopaedia Iranica — KARIM KHAN ZAND (J. R. Perry)](https://www.iranicaonline.org/articles/karim-khan-zand/)
- [Encyclopaedia Iranica — IRAQ v. Afsharids to the end of the Qajars](https://www.iranicaonline.org/articles/iraq-v-afsharids-to-the-end-of-the-qajars/)
- [Encyclopaedia Iranica — NĀDER SHAH](https://www.iranicaonline.org/articles/nader-shah/)
- [Encyclopaedia Iranica — BOUNDARIES i](https://www.iranicaonline.org/articles/boundaries-i/) (1590 yalnız genel; Zohâb/Kasr-ı Şîrîn 1590 için bir şey vermedi)
- [Museo del Ejército — Sitio de Castelnuovo](https://ejercito.defensa.gob.es/museo/HECHOS_HISTORICOS/HECHOS_HISTORICOS/08.07_SITIO_DE_CASTELNUOVO_POR_EL_IMPERIO_OTOMANO.html)
- [GeoNames — akhdar (SA)](https://www.geonames.org/search.html?q=akhdar&country=SA) · [hamra (SA)](https://www.geonames.org/search.html?q=hamra&country=SA)
- TDV (hepsi HTTP 200 + gövde okundu): sirvan · basra · bahreyn · kumuklar · dagistan · gurcistan ·
  tiflis · barbaros-hayreddin-pasa · hemedan · kirmansah · revan · nahcivan · hoy · tebriz ·
  hekimoglu-ali-pasa · kars · cildir-eyaleti · luristan · ahdar · tebuk · kerim-han-zend
- TDV ölü (302): haci-davud · herseknovi · hersek-nova · nova · gumru · kasr-i-sirin · fav · muazzam ·
  ordubad · tarku · kaheti · zend · nadir-sah · istanbul-antlasmasi · semahi · kuba · medain-i-salih · el-ula · vech
