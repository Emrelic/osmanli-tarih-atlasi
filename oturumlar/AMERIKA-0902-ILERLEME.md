# AMERIKA-0902 — ilerleme

**Oturum kimliği:** `local_648a2ba8-8964-4c23-af18-5d556a398519`
**Dosyam:** `data/yerlesimler_amerika3.js` · ad alanı `window.YERLESIMLER_AMERIKA3`
**Kutum:** Batı yarıküre 56G-72K / 170B-34B
**Koordinatör:** 1.MURAT HÜDAVENDİGAR

---

## ⓪ ÖZET — 25 kayıt, iki ölçülmüş yalan kapatıldı

| | önce | sonra |
|---|---|---|
| Kuzey Meksika, 1870'te `abd` boyanan ızgara hücresi | **15 / 25** | **3 / 25** (üçü de Teksas — DOĞRU) |
| Manaus çevresi (2G,60B) | Berbice 958 km → 1870 `ingiltere` | Manaus 124 km → `brezilya` |
| Batı Amazon (5G,65B) | Ollantaytambo 1216 km → 1870 `peru` | Barcelos 503 km → `brezilya` |
| Batı Amazon (8G,65B) | Cusco 978 km → 1870 `peru` | Fte. Príncipe da Beira 495 km → `brezilya` |
| Mato Grosso (16G,56B) | Sucre 1038 km → 1870 `bolivya` | Cuiabá 46 km → `brezilya` |

---

## ① ŞARTNAMENİN ÖNCÜLÜ ÇÜRÜDÜ — hiç nokta yazmadan durdum (M-2158)

Şartname dört kalem sayıyor ve eksik sandığı şehirleri **adıyla** listeliyordu.
Türkçe/diakritik normalleştiriciyle ölçtüm (ASCII araması `Cusco`·`Belém`·
`Mérida`yı kaçırırdı):

```
1 AND          11/11 ZATEN VAR      2 BREZİLYA      8/8  ZATEN VAR
3 KUZEY AM     13/15 ZATEN VAR      4 MEZOAMERİKA   3/6  ZATEN VAR
```
~41 hedefin ~35'i atlasta vardı. Sebebi `git log`da: commit `91e3d1c`
*"AMERIKA 134 NOKTA"*, `yerlesimler_amerika.js` son dokunuş 29 Ağustos —
**önceki bir Amerika oturumu o işi zaten yapmış.**

Şartnamenin kalem ① öncülü de çürüdü: *"Huamanga TEK başına ve And'ın
tamamını emiyor olabilir"* — hayır. `_amerika2.js` 2 kayıtlık bir artık
dosya; asıl And işi `_amerika.js` içinde ve orada **35 nokta** var.

⇒ Uygulasaydım Cusco'nun yanına Cusco yazacaktım: `CLAUDE.md §11`
Varat/Varad tuzağı **~35 kez**. `§7.1 ⑥` gereği işi bitirmeyi beklemeden
bildirdim.

📌 Ve şartnamenin **sıralaması da** ters çıktı: kalem ① *"AND — EN ÇOK HATA
BURADA"* diyordu; ölçüm And'ı **anakaranın en iyi kaplı bölgesi** buldu
(225 km ort). En kötü yerler şartnamede **hiç geçmiyordu.**

---

## ② ADAY LİSTESİ ELLE DEĞİL ÖLÇÜMLE KURULDU (M-2161)

Natural Earth kara maskesi · 0,5° ızgara · **17.963 kara hücresi** · her
hücrenin en yakın yerleşime uzaklığı.

🔴 **Ham "en büyük delik" sıralaması İŞE YARAMADI:** ilk 60'ın 60'ı Kanada
Arktiği (3013 km) — ve orası Emre'nin kuralınca **meşru boş**. Bölgelere
ayırmak gerekti:

```
BÖLGE                          hücre  ort km  >400km
Pampa + Patagonya                821     715     551
Amazon havzası                  2063     711    1607
ABD Batı (Great Basin)           536     651     365
Brezilya içi (Cerrado-Caatinga) 1278     547     825
Kuzey Meksika                    476     464     296
ABD Büyük Ovalar                1933     452     962
And + Altiplano                 1185     225     120   ← ANAKARANIN EN İYİSİ
```

🔴 **VE ASIL SINAV YOĞUNLUK DEĞİL:** `CLAUDE.md §2`yi her deliğe uyguladım —
*o boşluğu bugün kim boyuyor?* **Düşük yoğunluk kusur değildir; kusur YANLIŞ
SAHİPTİR.** Kuzey Meksika kutusunda (22-32K/118-97B) atlasta **toplam 1
nokta** vardı (San Antonio, ve o Teksas'ta) ⇒ Chihuahua 683 km öteden
Acoma Pueblo'dan emilip 1870'te **ABD** boyanıyordu.

---

## ③ YAZILANLAR — 25 kayıt

**① Kuzey Meksika (13):** Zacatecas 1546-09-08 · Durango 1563-07-08 ·
Saltillo 1577-07-25 · Monterrey 1596-09-20 · Chihuahua 1709-10-12 ·
Parral 1631 · Monclova 1689 · Culiacán 1531 · Álamos 1682 · Arizpe 1646 ·
Pitic/Hermosillo 1700 · Loreto (Baja) 1697-10-25 · San Vicente Ferrer 1780-08-27
Zincir `yeni-ispanya → meksika`. **`abd` hiçbirine yazılmadı** (hepsi 1848
sınırının güneyi).

**② Brezilya içi + Amazon (12):** Manaus 1669 · Santarém 1661 · Óbidos 1697 ·
Tabatinga 1766 · Barcelos 1758 · Macapá 1758 · Cuiabá 1719-04-08 ·
Vila Bela 1752-03-19 · Fte. Príncipe da Beira 1776-06-20 · Vila Boa de
Goiás 1727 · Oeiras 1712 · São Cristóvão 1590
Zincir `portekiz-brezilyasi → brezilya-imparatorlugu → brezilya-cumhuriyeti`.

**Kaynaklar** (`§4` — TDV `amerika` maddesi HTTP 200 çekildi, 74.729 karakter
gövdesi okundu ve *"Chihuahua"* kelimesi metinde **hiç geçmiyor** ⇒ coğrafî
değil **TANECİKLİK** boşluğu, `kirman`/`yezd` vakasının aynısı, akademik
kaynak meşru): Peter Gerhard *The North Frontier of New Spain* (Princeton
1982) · David J. Weber *The Spanish Frontier in North America* (Yale 1992) ·
John Hemming *Amazon Frontier* (Harvard) · C. R. Boxer *The Golden Age of
Brazil* (California 1962) · Stuart Schwartz *Sugar Plantations* (Cambridge
1985). **Her kaydın `kaynak:` alanı DOLU.**

### YAZILMAYANLAR — ve niçin
```
Recife          Olinda'ya 5,5 km — 3 km sınavını teknik geçer, harita
                faydası ~sıfır, mükerrer riski yüksek. Olinda temsil ediyor.
Santa Bárbara   Parral'a 21 km — aynı sebep.
Tikal           1281 ÖNCESİ terk edilmiş; yazmak ANAKRONİZM olurdu.
                Üstelik Petén zaten kaplı: Nojpetén 31 km.
Lakota          nearest "Büyük Ovalar (orta kesim)" 185 km ve altı tarihte de
                sahipsiz ⇒ zaten `kasitli_bosluk`. DOKUNMADIM.
Acre·Roraima·   yerleşim yok ⇒ nokta yok. Emre'nin hükmü.
yukarı Xingu
```

---

## ④ SINAVLAR

```
node --check                    TEMİZ
_baglama_onsinav.py             KIRMIZI: 0 · 25 kayıt · ad çakışması 0
                                en yakın komşu 176 km · alanlar hepsi BİLİNEN
                                ad alanı YERLESIMLER_AMERIKA3 ✓
kimlik (§3.5 + §8)              32 aday kimliğin 32'si devletler.js'te VE
                                renkler.py BOYALAR'da ⇒ RENK BORCU YOK
```

### 🔴 Dosyam bağlı olmadığı için `denetle.py` ONU GÖRMÜYOR
Hiçbir nöbetçi ona bakmıyordu. Kendi nöbetçimi yazdım (6 kural: `kur`/ilk
dönem · süreklilik · sıfır-ters dönem · 1923'e varış · **hayalet künye ömrü** ·
`kaynak` dolu) ve `C13`ün iki yolunu da zorladım:
```
GEÇME     kusursuz kayıt → TEMİZ ✓
ATEŞLEME  9 dalın 9'u ZORLA ateşletildi → 9/9 ÖTTÜ ✓
gerçek dosya (25 kayıt) → altı dalın altısından da TEMİZ
```
🟢 **Ve ateşleme sınavı gerçek bir kusur buldu — alette değil BENİM
SINAVIMDA:** ilk *"kusursuz"* fixture'ım `meksika`yı 1700'den yazıyordu,
oysa künye 1821-09-27'de başlıyor. Nöbetçi `HAYALET-ERKEN` diye öttü ve
**haklıydı.** Geçme yolunu sınamasaydım aletin doğru çalıştığını
**sanacaktım.**

---

## ⑤ 2s BORCUM — `denetle.py:441` kuralı

> *"`s:` yazan her parti, beklenen `2s` değişimini de önceden yazar."*

⚠️ **Bu kuralı geç uyguladım** — yazdıktan sonra ölçtüm, önce değil. Kayda
geçiyorum.

```
ürettiğim benzersiz kırılma günü      28
  ±30 günde çekirdek maddesi VAR       3
  AÇIK                                25
  bunların ÇEKİRDEKTE zaten olanı     10
  🔴 2s GERÇEK ARTIŞ                  15      70 → 85   (tavan 121)
```

🔴 **VE İLK ÖLÇÜMÜM YANLIŞTI — 13 demiştim.** `KUYRUK_DOSYALARI`nı elle
kopyalamış ve **5** dosya saymıştım; gerçek liste **15**. Yani doğru soruyu
**yanlış evrende** ölçtüm — `denetle.py:455`in birebir uyardığı tuzak, ve
başka yerde ondan kaçınırken buraya düştüm. Düzeltmeyi elle değil
**Python'un kendi `ast` ayrıştırıcısıyla** yaptım (`§11`: veri bir dilde
yazılıysa o dilin yorumlayıcısını çağır).

25 açığın **22'si KURULUŞ günü** — yani "el değiştirme" değil "doğuş".
`degismez2` bu ayrımı bilmiyor, her dönem ucunu kırılma sayıyor.

**ÖNERİM (karar koordinatörün):** dosya `KUYRUK_DOSYALARI`na alınsın.
Emsal var ve aynı sınıf: Portekiz-Fas partisi (8 maddesiz yabancı kırılma)
ve Moğolistan (`_ek19`/`_ek21`) böyle çözüldü — *"tavanı yukarı çekmek
yerine yeni parti kendi sayacıyla raporlanır; kronoloji yazılınca satır
SİLİNİR = külliyata kabul."* Alternatif 85/121 ile çekirdeğe almaktır;
tavanın altında ama borcu görünmez kılar.

---

## ⑥ BAŞKASININ DOSYASINDA BULDUĞUM — dokunmadım, bildirdim

`data/yerlesimler_amerika.js` · Compostela: `s:[{f:"1531-01-01",…,
d:"yeni-ispanya"}]` — o künye `devletler.js`te **1535-04-17**'de başlıyor
⇒ ~4 yıl 3 aylık **hayalet** (`§3.5`). Benim Culiacán kaydım bu tuzağa
düşmüyor: 1531-1535 arası `ispanya`ya yazıldı.
⚠️ Aynı desen o dosyanın başka erken kayıtlarında da olabilir — **taramadım,
ölçmedim.**

---

## ⑦ AÇIK KALEMLER

```
KALEM C (Güney Konisi)   ONAY BEKLİYOR — Pampa içi 1600-1800 `ispanya`
                         boyanıyor (İspanya orayı hiç denetlemedi, Çöl
                         Seferi 1879) · Tierra del Fuego 1809 km öteden
                         `mapuche` boyanıyor (orası Selk'nam/Yámana).
                         Çoğu kayıt NOKTA değil BOŞLUK CİNSİ olacağı için
                         koordinatörün hükmünü istedim.
ABD Batı                 Great Basin/Oregon 1800'de `yeni-ispanya`
                         boyanıyor — İspanya Columbia yaylasını hiç
                         denetlemedi. Aynı sınıf, aynı hüküm gerekli.
Hollanda Brezilyası      1630-1654 hiçbir kayda yazılmadı: işgalin yerleşim
                         bazında başlangıç/bitiş GÜNÜNÜ ölçemedim.
                         `bulunamadı` diyorum, uydurmuyorum.
```

---

## ⑧ DURUM

**Dosyam bu hâliyle HAZIR.** Bağlamadım — `arac/girdi.py` koordinatörün
(`§7`: üretim koşarken `arac/*.py` değişirse koşu ölür).
⏳ **BEKLİYORUM:** kalem C hükmü · 2s kova kararı (kuyruk mu çekirdek mi) ·
1.MURAT'tan · bir sonraki turda tekrar soracağım.
