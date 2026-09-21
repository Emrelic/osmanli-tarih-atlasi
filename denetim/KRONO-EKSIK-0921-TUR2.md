# KRONO-EKSIK-0921 — TUR 2 (1.MURAT hükmü M-4911)

Tur 1 raporu: [`KRONO-EKSIK-0921.md`](KRONO-EKSIK-0921.md).
Bu tur iki hükmü uygular: **(a)** Mühendishâne-i Berrî'nin kaynaksız günü ·
**(b)** 198'lik kovadan ilk 20 madde için aday ad listesi.

---

## 🔴 TUR 1'DEKİ BİR SAYIYI DÜZELTİYORUM

Tur 1 raporu *"rozet var ama tarihle çelişiyor: 99/99 TUTUYOR, YÖN-TERS 0"*
diyordu. **Doğrusu 98/99 · YÖN-TERS 1.** Sebep veri değil, benim aletimdeki
üçüncü bir kural kusuru — aşağıda "Kova anlamları" başlığında.

---

## (a) Mühendishâne-i Berrî-i Hümâyun — günün düzeltilmesi

### Ne değişti

`data/olaylar_ek5.js` (açılış maddesi):

| alan | önce | sonra |
|---|---|---|
| `t` | `"1795-06-15"` | `"1795-09-01"` |
| `kesinlik` | (yok) | `"ay"` |
| `gun` | `"1795"` | `"Safer 1210 / Eylül 1795"` |
| `kaynak` | `"muhendishane-i-berri-i-humayun"` | aynı slug + TDV gövdesinden **birebir üç alıntı** |
| `ic_not_gun` | (yok) | düzeltmenin gerekçesi, D210/D213 atfı, taranan yerler |

TDV `muhendishane-i-berri-i-humayun` gövdesi, birebir:
*"Mühendis yetiştirmek üzere 1795 yılında açılan mektep."* ·
*"5 Zilhicce 1207'de (14 Temmuz 1793) başlanmış ve Safer 1210'da (Eylül 1795)
tamamlanmıştır."* · *"1210'da (1795) Hasköy'de açılmıştır."*
⇒ Kaynak **haziran demiyor**; en ince değer **Safer 1210 = Eylül 1795**.
Açılış için gün YOK ⇒ ay hassasiyeti + `kesinlik:"ay"` (D213: `YYYY-MM-01`
biçimi tek başına "ayın 1'i" ile "ay biliniyor"u ayırt edemez).

### "1795-06-15" kalıbının TAM taraması

`data/` · `js/` · `arac/` · `index.html` altında **4 yer**:

| yer | ne | yapıldı |
|---|---|---|
| `data/olaylar_ek5.js:304` | maddenin kendisi | **taşındı** |
| `data/yer_yama.js:318` | yer_id yama defteri — anahtarı **dosya + t + b (ÜÇÜ BİRDEN)** | **anahtar güncellendi** (yoksa defter sessizce bayatlardı) |
| `data/olaylar_ek7.js:132` | yorum (silinmiş mükerrere işaretçi) | güncellendi |
| `data/olaylar_kronoeksik_0921.js:8` | kendi başlık yorumum | güncellendi |

**EK OKUMA BAĞI YOKTU** — bu, sevkte özellikle sorulan noktaydı.
`data/ekokuma*.js` içinde Mühendishâne-i Berrî'yi anan üç kart var
(`ekokuma_kurum2.js`), ama üçü de **`1795-01-01`e** bağlı, `1795-06-15`e
değil. Yani taşıma hiçbir kartı düşürmedi. ⚠️ Ayrı bir kalem olarak not:
o kartların bağlandığı `1795-01-01` gününde bir kronoloji maddesi olup
olmadığını BU oturum ölçmedi — EKOKUMA-BAG-0921'in kalemi.

### denetle.py — ÖNCE / SONRA

| ölçüt | ÖNCE | SONRA |
|---|---|---|
| Değişmez 2 | 590 kırılma, 0 açık | **590 kırılma, 0 açık** |
| Değişmez 2s | 1419 yabancı · 178 AÇIK (tavan 195) · 589 kapsam dışı · 151 yıl-temsilî | **birebir aynı** |
| Değişmez 2i | 129 işgal, 1 açık (tavan 3) | **birebir aynı** |
| Değişmez 2t | kırılmasız madde 11 (tavan 42) | **11** |
| SONUÇ | temiz | **temiz** |

**Hiçbir sayı oynamadı.** Beklenen buydu ama ölçülmeden söylenemezdi:
madde `k:"bilim"`, haritada kırılma karşılığı yok, dolayısıyla ne Değişmez 2
penceresinden bir kırılma düşürdü ne de 2t kovasına girdi.

### 🔴 ARADA ÇIKAN ALET DERSİ — `node --check` ile `denetle.py` aynı dili okumuyor

Yazdığım metinlerde kesme işaretini `\'` diye kaçırmıştım. `node --check`
**geçti** (geçerli JS). `denetle.py` ise JS'i JSON'a çevirip okuyor ve JSON'da
`\'` geçersiz bir kaçıştır:

```
json.decoder.JSONDecodeError: Invalid \escape: line 291 column 872
```

Yani sözdizimi denetimim temizdi ve veri yine de okunamıyordu.
⇒ **Yeni veri yazınca ikisi de koşulur; birinin temizi ötekini temiz yapmaz.**
Düzeltildi (çift tırnaklı JS dizgesinde kesme işaretinin kaçışa ihtiyacı yok).

---

## (b) Aday ad listesi — ilk 20 madde

Alet: [`ARAC-KRONO-EKSIK-ADAY-0921.py`](ARAC-KRONO-EKSIK-ADAY-0921.py)
Çıktı: [`KRONO-EKSIK-ADAY-0921.md`](KRONO-EKSIK-ADAY-0921.md) (senin üstünde
evet/hayır diyeceğin tablo) + `KRONO-EKSIK-ADAY-0921.json`.

### Kova ve sıra

Kova: dört rozet alanının hiçbirini taşımayan **+ BAŞLIĞINDA** el-değiştirme
fiili geçen maddeler — gerçek boyut **198** (evren 1736 madde).
Sıra **`t` artan** (dosya sırası değil: dosya sırası anlatı taşımaz ve
tekrarlanabilir değil). İşlenen: ilk **20**.

### Sonuç

| ölçüm | sayı |
|---|---|
| işlenen madde | 20 |
| üretilen aday (madde × ad çifti) | **113** |
| bunlardan **GÜÇLÜ** (adı maddenin metninde de geçiyor) | **57** |
| **zayıf** (yalnız tarih tuttu, metinde adı yok) | 56 |
| aday bulunamayan madde | **0** |

Ortalama madde başına 5,7 aday / 2,9 güçlü aday. **Elemenin asıl yükü "zayıf"
kovasında:** 1304 Sakarya seferi maddesinde Baroda · Broaç · Diu · Kanbâyet ·
Patan · Sûrat · Çampâner çıkıyor — hepsi Gucerat'ta, hepsi aynı gün `racput`
kırılması taşıyor, hiçbirinin maddeyle ilgisi yok. Bu tam da
`js/app.js:3343`ün anlattığı "739 alâkasız tarih" sınıfıdır; makinenin
seçmemesinin sebebi budur.

### Üç süzgeç, üçü de ayrı raporlanıyor

1. **ZAMAN** — yerleşimin sahiplik kırılması maddenin gününe ±30 gün
   (Değişmez 2'nin penceresi). `s`/`d`/`v`/`isg` kovalarının **hepsi** okunur.
2. **YÖN** — kırılma kazanç mı kayıp mı; önerilen alan buradan türer.
3. **METİN** — ad maddenin `b`/`d`/`yer` metninde geçiyor mu → GÜÇLÜ/zayıf.
   🔴 Metin **tek başına yeterli sayılmaz**: ①'i geçmeyen ad listeye hiç girmez.

Tabloda her aday için **penceredeki bütün kırılmalar** yazılı
(`d:f +0 · s:t→bizans +0` gibi) — tek "en yakın kırılma" yanıltır.

---

## 🔴 KOVA ANLAMLARI — üçüncü kural kusuru ve gerçek bir bulgu

Aday üreticisinin ilk koşumu **bütün Osmanlı fetihlerini `kaybedilen` diye
önerdi**. Sebep: "f = kazanç" düz kuralı. Kovaların anlamı şudur ve atlas
**Osmanlı çerçevelidir**:

| kova | ne | başlaması | bitmesi |
|---|---|---|---|
| `d` | DOĞRUDAN Osmanlı idaresi | KAZANÇ | KAYIP |
| `s` | YABANCI devletin dönemi | **KAYIP** | **KAZANÇ** |
| `isg` | İŞGAL | KAYIP | KAZANÇ |
| `v` | TÂBİLİK | statü ekseni (`statu_vasal`) | — |

1288 Karacahisar'da Bizans dönemi (`s`) biterken Osmanlı dönemi (`d`) başlar,
**ikisi aynı gündedir**; "en yakın kırılma" seçilirken liste sırası `s`yi öne
alıyordu. Kusur veride değil kuraldaydı.

**Bu kusur Tur 1'in ROZET2 aletinde de vardı ama MASKELİYDİ:** orada `any()`
soruluyor, tipik fetih gününde her iki yönde de kırılma bulunduğu için hangi
kuralla bakılırsa bakılsın pencere doluydu. Kural düzeltilince tam tarama
**yeni ve gerçek bir bulgu** verdi:

> **1482-01-01 · "Crnojeviç Zetası'nın tâbiiyeti ve Cetinje'nin merkez oluşu"
> · `fethedilen:["Cetinje"]` → olması gereken `statu_vasal:["Cetinje"]`**
>
> Maddenin kendi `k:` alanı zaten **`vassal`**, kendi `d:` metni *"haraca
> bağlanarak iç işlerinde serbest kaldı"* diyor, yerleşim kaydında o gün
> başlayan kırılma `v:f→zeta`. Yani üç kaynak da tâbilik diyor, rozet
> **fetih** rengiyle çıkıyor. Bu, `js/app.js:3343`ün *"Yayça 1463'te
> Osmanlı'ya geçmiş gibi okunurdu"* diye adlandırdığı sınıfın ta kendisi.
> `data/olaylar_ek10.js:117` · tek kelimelik düzeltme. **UYGULAMADIM** —
> rozet alanlarına yazmak senin hükmünde (M-4911b).

Ayrıca **sınav da düzeltildi**: sınav kuralı ikinci kez yazıyordu, yani
ölçümdeki düzeltme sınava yansımayacaktı ve "5/5 geçti" diyerek düzeltilmemiş
bir aleti onaylayacaktı. Artık sınav **aynı fonksiyonu çağırıyor**.
`--sina` → **5/5 geçti**.

### Rozet çelişki tablosu — düzeltilmiş hâl

| hâl | Tur 1 (kusurlu kural) | Tur 2 (düzeltilmiş) |
|---|---|---|
| TUTUYOR | 99 | **98** |
| YÖN-TERS | 0 | **1** (Cetinje) |
| ÖLÜ AD | 0 | 0 |
| UZAK | 0 | 0 |

---

## Değişen / eklenen dosyalar

| dosya | durum | commit |
|---|---|---|
| `data/olaylar_ek5.js` | 1 kayıt (t · kesinlik · gun · kaynak · ic_not_gun) | paylaşılan — **1.MURAT** |
| `data/yer_yama.js` | 1 kayıt (`t` anahtarı) | paylaşılan — **1.MURAT** |
| `data/olaylar_ek7.js` | 1 YORUM satırı | paylaşılan — **1.MURAT** |
| `data/olaylar_kronoeksik_0921.js` | 1 YORUM satırı | paylaşılan — **1.MURAT** |
| `denetim/KRONO-EKSIK-0921-TUR2.md` | YENİ (bu rapor) | KRONO-EKSIK-0921 |
| `denetim/ARAC-KRONO-EKSIK-ADAY-0921.py` | YENİ | KRONO-EKSIK-0921 |
| `denetim/KRONO-EKSIK-ADAY-0921.md` · `.json` | YENİ (aday tablosu) | KRONO-EKSIK-0921 |
| `denetim/ARAC-KRONO-EKSIK-ROZET2-0921.py` | yön kuralı düzeltildi + sınav tek kaynağa bağlandı | KRONO-EKSIK-0921 |
| `denetim/KRONO-EKSIK-ROZET2-0921.json` | yeniden üretildi (98/1) | KRONO-EKSIK-0921 |

## Tekrar koşum

```bash
py denetim/ARAC-KRONO-EKSIK-ADAY-0921.py --adet 20
py denetim/ARAC-KRONO-EKSIK-ROZET2-0921.py --sina
py denetim/ARAC-KRONO-EKSIK-ROZET2-0921.py
py arac/denetle.py
```
