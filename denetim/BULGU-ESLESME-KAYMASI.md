# BULGU — EŞLEŞME KAYMASI

> **Oturum:** OPUS HAZIR KITA 81 (`local_a98266dd-82d1-485e-be14-d71ed9567f96`)
> **Görev:** koordinatör (OSMANGAZİ), 24 Ağustos 2026 — Emre'nin 12:20 bulgusu
> **Yetki:** YALNIZ RAPOR. `data/` `arac/` `js/` hiçbirine yazılmadı.
>
> Emre'nin sözü (birebir):
> *"düzmece mustafa ayaklanmasi diyor kronojide. haritada aydinogullari
> beyliginin yenidne kurulmasi gorunuyor. **IYI BAK**"*

---

## 0. HÜKÜM — tek cümlede

**Harita doğru çiziyor, kronoloji doğru yazıyor, ve ikisi birbirini
tutmuyor: toprak değişimi verisi `1421-08-15`'te, onu anlatan madde
`1422-01-01`'de — arada 139 gün var.** O 139 günün başında, aynı güne
denk gelen alakasız bir madde duruyor (*Düzmece Mustafa ayaklanması*) ve
kullanıcı değişimi **onun altında** görüyor.

🔴 **Ve asıl bulgu bu değil.** Bu kusur **daha önce teşhis edildi**, çaresi
**uygulandı**, ve **kapanmadı** — çünkü çare yanlış uca yapıldı (§4).

---

## 1. MEKANİZMA — koordinatörün üç adayı, üçü de ayrıldı

### (a) YERLEŞİM VERİSİ — ✅ **KANITLANDI, tek sebep bu**

`arac/girdi.py` havuzu (2606 nokta / 55 dosya) — `node`/`import` ile
ayrıştırıldı, `grep` ile tahmin edilmedi:

```
1421-08-15 gününde kırılması olan kayıt : 8
16 kırılma ucu (8 × OSMANLI bitişi + 8 × aydin başlangıcı)

Ayasuluk (Selçuk) · Aydın · Birgi · Kuşadası · Söke · Tire · Çeşme · İzmir
    hepsi:  OSMANLI 1415-06-01 → 1421-08-15
            aydin   1421-08-15 → 1425-06-01
```

Yani **1421-08-15 günü sekiz petek birden Osmanlı'dan çıkıp Aydınoğulları'na
geçiyor.** Emre 166. maddede (`1421-08-15`, *Düzmece Mustafa ayaklanması*)
durduğunda harita **o günün verisini** çiziyor — kusursuz çalışarak.

⇒ Gördüğü şey bir çizim hatası değil, **verinin kendisi**.

### (b) ETİKET — ✅ elendi, çünkü (a)'nın **sonucu**

`data/devletler.js` → `aydin` künyesi `harita:"aydin"`, `f:1308-01-01`,
`t:1425-06-01`. Etiket, gövde nereye çizilirse oraya düşer. Havuzda
`aydin` kimliği taşıyan **23 dönem** var ve 1421'de açılan **sekizi**
yukarıdakiler. ⇒ Etiket bağımsız bir sebep değil, (a)'nın görünen yüzü.

### (c) KIRPMA (`oncesiSonrasiKirp`) — ✅ elendi, **iki ayrı gerekçeyle**

1. Koordinatörün bugünkü değişikliği **yayında değil** — Emre'nin gördüğü
   bu olamaz (koordinatörün kendi beyanı, eleme olarak kaydedildi).
2. 🔴 **Daha güçlüsü:** kırpmaya **ihtiyaç yok.** Kırpma "bir sonraki
   hâli önceden göstermek"tir; burada **o günün kendi hâli zaten
   Aydınoğulları.** Veri 1421-08-15'te değişiyor, Emre 1421-08-15'te
   duruyor. Açıklamak için hiçbir çizim hilesine gerek kalmıyor.

📌 (c)'yi elemek için koordinatörün beyanı **tek başına yetmezdi** —
"yayında değil" bir başkasının ölçümü. İkinci gerekçe veriden geliyor ve
kimseye bağlı değil.

---

## 2. NİÇİN HİÇBİR DENETİM ÖTMEDİ

`Değişmez 2` şunu sorar: *"her kırılmanın ±30 gün içinde bir kronoloji
maddesi var mı?"*

```
kırılma 1421-08-15
en yakın madde : "Düzmece Mustafa ayaklanması"  → mesafe 0 gün
⇒ Değişmez 2 : ✅ TEMİZ
```

**Denetim doğru çalıştı ve yanlış soruyu sordu.** Sorduğu *"bir madde var
mı"*; sormadığı *"DOĞRU madde mi"*. Bir kırılma, aynı güne düşen
**herhangi** bir maddeye yapışabilir ve denetim yine temiz der.

⇒ `CLAUDE.md`'nin *"denetim var ≠ o soruyu soruyor"* ailesinin yeni üyesi.
Ve `YAPILACAKLAR.md`'deki **`denetle_iddia.py`** şartnamesinin tam
tersi yönü: orası *"maddenin kırılması var mı"* diye soruyor, burada
gereken *"kırılmanın DOĞRU maddesi mi"*.

---

## 3. HANGİ TARİH DOĞRU — TDV ölçümü

`§4` yöntemiyle: HTTP kodu **ve** içerik okuması.

| slug | kod | sonuç |
|---|---|---|
| `aydinogullari` | 200 | ✅ doğru madde, **karar verici** |
| `cuneyd-bey` | 200 | ✅ doğru madde (İzmiroğlu Cüneyd) |
| `murad-ii` | 200 | ✅ doğru madde |
| `izmir` | 200 | ✅ doğru madde |
| `mustafa-celebi` | 200 | 🔴 **YANLIŞ MADDE** — açtığı kişi **Kanûnî'nin oğlu Şehzade Mustafa (ö. 1553)**. `§4②` tuzağının yeni vakası: kod 200, başlık doğru görünüyor, madde başka yüzyıl. |
| `duzmece-mustafa` | — | 🔴 **ÖLÜ** — arama sayfasına düşüyor (37 sonuç) |

**TDV `aydinogullari`, birebir:**
> *"Sultan II. Murad ona Aydın-ili'ni vaad ederek bu ittifaktan ayırmış,
> Cüneyd Bey de tekrar beyliğin başına geçmiştir **(1422)**."*

**TDV `murad-ii`, birebir:** Düzmece Mustafa'nın Gelibolu'ya çıkışı
**"Ramazan 824 / Eylül 1421"**.

### Ölçüm ile çıkarım — ayrı satırlar

**ÖLÇTÜĞÜM:** TDV, Cüneyd'in beyliğin başına geçişini **1422** diye
veriyor; gün ve ay vermiyor. Verideki `1421-08-15` **hiçbir kaynakta
geçmiyor** ve **166. maddenin tarihiyle birebir aynı**.

**BUNDAN ÇIKARDIĞIM:** Veri tarihi araştırılarak değil, **komşu maddeden
kopyalanarak** yazılmış. Üç işaret: (i) sekiz kaydın sekizi de tam olarak
aynı günü taşıyor, (ii) o gün bir başka maddenin günü, (iii) kayıtlarda
bu tarihi destekleyen `kaynak:` yok. ⚠️ Bu bir **çıkarım**, kopyalama
eyleminin kendisini ölçmedim.

📌 **Ve 166. maddenin kendi tarihi de sorgulanabilir:** TDV Mustafa'nın
çıkışını **Ramazan 824 = 30 Ağustos – 28 Eylül 1421** diye veriyor;
maddedeki `1421-08-15` bu aralıktan **önce**. Maddenin `gun:` alanı zaten
*"1421-1422"* diyor, yani gün hassasiyeti **iddia edilmiyor**. Bunu
**ölçtüm, düzeltme önermiyorum** — 166 benim konum değil, ama bir sonraki
oturum onu bulduğunda "yeni kusur" sanmasın diye kaydediyorum.

---

## 4. 🔴🔴 ASIL BULGU — BU KUSUR DAHA ÖNCE TEŞHİS EDİLDİ, ÇARESİ UYGULANDI, KAPANMADI

`data/olaylar_ek11.js`, maddenin **hemen üstündeki yorum bloğu** (birebir):

> *"Kullanıcı haritada Aydınoğulları'nın Düzmece Mustafa ayaklanması
> sırasında Osmanlı idaresinden çıktığını gördü ve 'eğer gerçekse
> kronolojide görünmesi lazım' dedi. Ölçüm doğruladı: `yerlesimler.js`
> **sekiz kayıtta** `aydin` dönemini geri açıyor, ama o kırılmayı
> açıklayan tek madde 'Düzmece Mustafa ayaklanması' ve içinde
> Aydınoğulları HİÇ geçmiyor. İki madde o boşluğu kapatır."*

Ve `oturumlar/OTURUM-13-ANADOLU.md` tablosunda **aynı satır** duruyor:

```
1421-08-15 | Düzmece Mustafa ayaklanması | Osmanlı → aydin |
           ⚠️ madde Aydın'ı hiç anmıyor (§4)
```

⇒ **Emre bu şikâyeti İKİNCİ KEZ yapıyor.** Teşhis doğruydu, sekiz kayıt
sayısı bile birebir tutuyor. Çare olarak **iki madde yazıldı** — ve
`1422-01-01` ile `1426-01-01` tarihlerine kondu.

### Niçin kapanmadı — ve buradan çıkan kural

```
KIRILMA        1421-08-15
YAZILAN MADDE  1422-01-01     → 139 gün ötede
±30 GÜN PENCERESİ dışında ⇒ o madde o kırılmaya HİÇ SEÇİLEMEZ
ekranda görünen madde DEĞİŞMEDİ
```

> 🔴 **Bir kırılmaya madde YAZMAK, o kırılmayı o maddeye BAĞLAMAZ.
> Bağlayan şey TARİHTİR.**
> `Değişmez 2` *"madde var mı"* diye sorduğu için, madde yazmak **denetimi
> susturur ama ekranı değiştirmez.** Çare doğru teşhise verildi ve
> **yanlış uca** uygulandı: eksik olan madde değil, **hizaydı.**

📌 Bu, projenin *"ölçüm doğru, çıkarım yanlış"* ailesinin çare tarafı:
teşhis (*"maddesi yok"*) doğruydu, ama kusurun **mekanizması** (*"tarih
uyuşmuyor"*) hiç sorulmadı.

### İkinci uç zaten kayıtlıydı — ve o da kapanmadı

1426 maddesinin kendi metninde, bir önceki oturumun eliyle:

> *"⚠️ haritadaki **1425-06-01 kırılması ikisinden de erkendir**"*

⇒ Aynı kaydın **iki ucu da** kaymış: başlangıç 139 gün, bitiş 214 gün.
Ve bu, bir `.js` dosyasının **yorumuna** yazılmış — yani **makinenin
göremeyeceği yere.** `CLAUDE.md`'nin kusur sınıfı ⑪'in birebir vakası:
*doğru öğrenilmiş bir ders, `if` ile sorulamayacak bir yere yazılmış.*
Kayıt vardı, **veri yoktu**; o yüzden bugün yeniden bulundu.

---

## 5. SINIF BÜYÜKLÜĞÜ — tek vaka mı, sınıf mı? **SINIF.**

### Ölçütü açıkça yazıyorum, çünkü "kayma" sezgisel bir kelime

Bir kırılma için:
① en yakın madde ±30 gün içinde (⇒ `Değişmez 2` TEMİZ diyor) ·
② o yerleşimi **adıyla anan** en az bir madde var ·
③ en yakın madde o kümenin **içinde değil**.

```
havuz 2606 yerleşim · 1226 madde · 8461 kırılma

GENİŞ ÖLÇÜT (①②③)                                     1746
  🔴 BU SAYI KULLANILMAZ — kendim çürüttüm, aşağıda
DAR ÖLÇÜT  (aynı gün + doğru madde 30–730 gün ötede)      48 kırılma / 31 vaka
  bunlardan doğru maddesi kırılmadan SONRA gelen           24
```

🔴 **İlk ölçümüm fazla genişti ve bunu kendim yakaladım.** 1746 sayısı
`İlhanlı Devleti'nin dağılması`nın Revan · Gence · Bağdat kırılmasını
açıklamasını da "kayma" sayıyordu — oysa o **meşru**: madde şehri anmıyor
ama olayın **gerçek sebebi** o. Ayırt edici şart, doğru maddenin
**yakında ama en yakın olmaması**. ⇒ *Ölçüm doğruydu, evren genişti.*

⚠️ **48 de bir İHLAL sayısı değil, ADAY sayısıdır.** İçinde meşru vakalar
var (`1402-07-28 Ankara Savaşı` 9 yerleşimin kırılmasını gerçekten
açıklar). Araştırılıp **doğrulanan** vaka sayısı bugün **1** (Aydın-ili).

### "SONRA" kovası — Emre'nin şikâyetinin birebir biçimi

Kullanıcı madde N'i okurken, madde N+k'nın olayını görüyor:

| yerleşim | kırılma | EKRANDA görünen | ASLINDA anlatan | fark |
|---|---|---|---|---|
| **İzmir · Birgi · Tire** | 1421-08-15 | Düzmece Mustafa ayaklanması | **Cüneyd Bey Aydın-ili'nin başına döndü** | **+139 g** |
| Arzila (Asilah) | 1471-01-01 | Alanya, Anamur, Silifke'nin ilhakı | Arzila'nın Portekiz tarafından alınışı | +235 g |
| Azemmûr | 1513-01-01 | Sin (Sinj) Kalesi'nin fethi | Azemmûr'un alınışı | +243 g |
| Şendî | 1821-06-14 | Sennâr Sultanlığı teslim oldu | Şendî'de İsmâil Paşa'nın öldürülmesi | +497 g |
| Annaba | 1830-07-05 | Cezayir'in Fransız işgali | Annaba'nın (Bône) işgali | +605 g |
| İskenderiye | 1805-07-03 | Mısır valiliği fermanı | İngiliz Fraser seferi İskenderiye'ye çıktı | +622 g |
| Semendire | 1717-08-18 | Belgrad'ın ikinci kez kaybı | Pasarofça Antlaşması | +337 g |
| Kırklareli | 1913-07-21 | Edirne'nin geri alınışı | İstanbul Antlaşması | +70 g |

📌 **Arzila · Azemmûr · Annaba · Şendî dördü Aydın'la aynı desende:**
kırılma günü **bambaşka bir yerin** maddesine düşüyor, o şehri **adıyla
anan ve tam o el değiştirmeyi anlatan** madde ise aylar sonra. Bunlar
araştırılmadı — **aday olarak** bırakıyorum.

---

## 6. ÇARE ÖNERİSİ — uygulamadım, tarif ediyorum

### ✅ BAŞLANGIÇ UCU — kaynak net, öneri net

Sekiz kaydın `1421-08-15` sınırı **`1422-01-01`**'e çekilsin:

```
Ayasuluk (Selçuk) · Aydın · Birgi · Kuşadası · Söke · Tire · Çeşme · İzmir
    d:  … → 1421-08-15      ⇒   … → 1422-01-01
    s:  aydin 1421-08-15 →  ⇒   aydin 1422-01-01 →
```

**Niçin veri taşınıyor, madde değil:** TDV **1422** diyor; madde
`1422-01-01` zaten TDV'ye uygun (`§4`: gün bilinmiyorsa `YYYY-01-01`) ve
`gun:` alanında *"1422 (ay ve gün kaynakta yok)"* diye **dürüstçe**
yazıyor. Kaynaksız olan **veri tarafı**.

**İki uç da ölçüldü (`§3.5.1`):** iki sınır birlikte kaydığı için ne
boşluk ne çakışma doğuyor; Osmanlı dönemi 139 gün uzuyor ve bu TDV ile
uyumlu (Cüneyd 1421'de Mustafa'nın yanındadır, Aydın-ili'ni **1422'de**
alır). ⚠️ 8 kayıt × 2 uç = **16 düzenleme**; `replace(eski, yeni, 1)`
**kullanılmasın** (`§11`), sonra `denetle.py`.

⚠️ **Ve bu düzeltme haritada bir sonraki petek koşusunda görünür** — veri
ile çıktı arasında bir tur gecikme var. Gecikme kayıtsız kalırsa kusurdan
ayırt edilemez; bu satır onun kaydıdır.

### 🔴 BİTİŞ UCU — KARAR VERMİYORUM, KAYNAKLAR ÇELİŞİYOR

`§7.1 ⑥`: *"kaynaklar çelişiyorsa hangisini seçeceğine sen karar verme."*

```
veri                    1425-06-01
TDV aydinogullari       829 (1425-26)
TDV cuneyd-bey          1426
TDV murad-ii            1425 — Akhisar/Gülnas yenilgisi
TDV izmir               "II. Murad 1424'te şehri kesin olarak zaptetti"   ← DÖRDÜNCÜ tarih
madde (olaylar_ek11)    1426-01-01
```

⇒ **Dört ayrı tarih, dördü de TDV.** Üstelik `izmir` maddesinin **1424**'ü,
şehir bazında ötekilerden ayrı bir olayı (İzmir'in zaptı ≠ Cüneyd'in
idamı) anlatıyor olabilir. Bu, **tek bir kırılma gününe indirilemez** —
muhtemelen **iki ayrı kırılma** gerekiyor. Koordinatörün hükmüne
bırakıyorum.

---

## 7. ÖNERİ — denetime yeni bir dal (yazmadım, `arac/` benim değil)

`Değişmez 2`ye kardeş bir soru:

```
her kırılma için:
  A = en yakın madde
  S = o yerleşimi ADIYLA anan maddeler
  eğer S boş değil ve A ∉ S ve S'nin en yakını 30 < d ≤ 730 gün ise
      → EŞLEŞME KAYMASI ADAYI
```

Bugünkü veride: **48 aday / 31 vaka.** İlk sürüm **rapor etsin, ihlal
saymasın** — içinde meşru vakalar var. Tavan sonra konur.

🔴 **Ve `C13`:** bu dal yazılırsa **iki yönde de** sınanmalı. Ateşleme
yolu bugün kolay (48 gerçek aday var); zorlanması gereken **geçme yolu**:
eşik `730 → 0` çekilip 0 aday üretmesi görülmeli. Aksi hâlde temiz veriyi
de kirli sayabilir.

---

## 8. ÖLÇTÜKLERİM ve ÖLÇMEDİKLERİM

**ÖLÇÜLDÜ:** havuz 2606/55 · 1226 madde/19 anahtar · 165-166-167 sırası
(koordinatörün tarayıcı ölçümüyle **birebir tuttu**, devralmadan
doğruladım) · 1421-08-15'te 8 kayıt/16 kırılma ucu · `aydin` kimliğinin
23 dönemi · sınıf 48/31/24 · altı TDV slug'ı (ikisi tuzak çıktı) ·
`devletler.js` `aydin` künyesi · `olaylar_ek11.js` yorum bloğu ·
`OTURUM-13-ANADOLU.md` tablosu.

**ÖLÇÜLMEDİ (açıkça yazıyorum):**
- Verinin 166. maddeden **kopyalandığı** — çıkarım, eylem ölçülmedi.
- 48 adayın **47'si** araştırılmadı; yalnız Aydın-ili doğrulandı.
- 166. maddenin `1421-08-15` tarihinin doğru olup olmadığı — TDV Eylül
  1421 diyor, ama maddeyi düzeltmek benim yetkimde değil.
- Yayındaki haritanın hangi koşudan geldiği — Emre'nin görseli elimde
  yok, `N / TOPLAM başlık` sayısını okuyamadım. **Şikâyetin bayat olup
  olmadığını bu yolla ölçemedim**; ama `git log --oneline -40` bu kusura
  dair **hiçbir düzeltme göstermiyor** (son 40 commit'in tamamı tahta
  trafiği), ve veri **bugün de** 1421-08-15 diyor ⇒ şikâyet **GEÇERLİ**.
