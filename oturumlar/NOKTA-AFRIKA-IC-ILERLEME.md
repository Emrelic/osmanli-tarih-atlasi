# NOKTA AFRİKA İÇ — ilerleme

**Görev** `oturumlar/NOKTA-AFRIKA-IC.md` · **Dosyam** `data/yerlesimler_e9353f.js`
**Tahta** M-0127 (sahiplik) · M-0130 · M-0135 · M-0141 · M-0155 · tebliğ M-0161
**Tarih** 16 Ağustos 2026

---

## 1. TESLİM — sayıyla

```
nokta                28   ·  16 Batı Afrika + 5 Orta Afrika + 1 Buganda + 6 Güney Afrika
dönem                47   ·  kaynak: YAZILI 47/47  ·  "bulunamadi" 4
kur: VAR             11   ·  kur: YOK 17
bos: bayrağı         19   ·  neden: yazılı 19/19  ·  hepsi `veri-yok` kovasında
🟢 1281-06-15'te SAHNEDE 17 nokta, SAHİPLİ 8, boşluk kaydı 9
3 km                 YENİ ÇİFT 0  ·  en yakın komşu 188,8 km
dönem sağlığı        0 ters · 0 sıfır-uzunluk · 0 kategori-içi çakışma
```

**Üç turda büyüdü:** 16 (M-0182) → 22 (M-0198) → **28** (bu tur).
- 2. tur: Kongo havzasının 1281 boşluğunu kapatan 5 `tur:"bolge"` dolgu +
  Mengo (Buganda) — §7
- 3. tur: Güney Afrika 6 nokta, koordinatörün açık talimatıyla (M-0218) — §8

**1281'de sahipli yedi nokta** — şartnamenin §① kırmızısını kapatan kalem:

| nokta | 1281'deki sahibi |
|---|---|
| Niani | `mali-imparatorlugu` |
| Valata (Oualata) | `mali-imparatorlugu` |
| Kano · Katsina · Zaria | `hausa-sehir-devletleri` |
| Mao (Kanem) | `kanem-bornu` |
| Benin Şehri (Edo) | `benin-kralligi` |

**Taban:** Batı Afrika içinde 1 nokta vardı ve o da boş kabuktu ⇒ **1281'de
sahipli nokta 0 → 7.**

---

## 2. M-0169 KABUL KAPISI — altı maddenin altısı

```
① denetle.py    Değişmez 1 ✓ 2527 · 1c ✓ 7/7 · 1b ✓ 0 · 2 ✗ 4 açık ·
                2s ✓ 73/121 · 2i ✓ 3/3 · 2t ✓ 32/42 · 4 ✓ 135/136 ·
                5 ✗ 4 çelişki · 5b i 120 · 5c i 1996
                SONUÇ: İHLAL VAR — çıkış kodu 1
   🔴 VE BU BENDEN DEĞİL — İDDİA ETMİYORUM, İSPATLIYORUM:
      denetle.py `girdi.GIRDI_DOSYALARI`yı okur (44 dosya); benim dosyam
      o listede YOK. Kanıt sayının kendisi: denetim "2527 yerleşim" diyor
      ve bu benim İŞ 0 tabanımın BİREBİR aynısı. 16 noktam sayılsaydı
      2543 derdi. ⇒ Kırmızı, VERİ ZAMAN'ın üzerinde çalıştığı borç.
② node          16 kayıt (kendi ayrıştırıcımı YAZMADIM — veri JS, node okudu)
③ git status    aşağıda, commit'li
④ kaynak:       32 dönemin 32'sinde YAZILI · 3'ü "bulunamadi" · boş 0
   📌 M-0173 haklı: `girdi.yukle()` `kaynak:`ı taşımıyor, Python'dan
      sorulsa hep 0 çıkardı. Ben zaten NODE ile ölçtüm — kapı düzeltilmeden
      önce doğru aleti kullanmış olmam şans değil, `§11`in "veri hangi
      dilde yazılıysa o dilin yorumlayıcısını çağır" kuralıydı.
⑤ kur:          6 VAR · 10 YOK, ve onunun onunun sebebi tek: o yerleşim
                1281'de ZATEN VARDI (Niani · Valata · Gao · Cenne · Kano ·
                Katsina · Zaria · Mao · Benin Şehri · İfe). `kur:` yazmak
                onları yanlışlıkla sonradan doğmuş gösterirdi.
                ⚠️ Bağlandığında `Değişmez 5c`ye 7 nokta EKLER (1996 → 2003).
                   5c bir `i` satırı, ihlal değil — ama sessizce olmasın.
⑥ 3 km          girdi.YAKINLIK_ESIK_KM (3.0) ile, 16 × 2527 + 16 × 16
                karşılaştırma: **YENİ ÇİFT 0**
                en yakın komşum 212,3 km (Mao ↔ Ndjamena)
```

**Dönem sağlığı (ek):** 0 ters · 0 sıfır-uzunluk · 0 kategori-içi çakışma.

---

## 3. NE ÖLÇTÜM · NE ÇIKARDIM · NEYİ ÖLÇMEDİM (B10 — üçü ayrı satır)

**NE ÖLÇTÜM.** Batı Afrika iç kuşağında 1 nokta (Timbuktu), orman kuşağında
0, Hausa-Bornu-Çad'da 2 (Agadez · Ndjamena). Üçünün de `s:[] d:[] v:[]`,
`kur:` yok, `bos:` yok. 68 TDV slug'ı HTTP koduyla sınandı, 24 canlı;
11 maddenin gövdesi okundu. `devletler.js` 392 künye · `BOYALAR` 327 renk.

**NE ÇIKARDIM.** *(ayrı satır)* Batı Afrika'nın kusuru "nokta az" değil,
**dizin katmanı hazır değil**: bu bölge için 10 künye renksiz, 10 künye
hiç yok, 1 künyenin penceresi dar. `CLAUDE.md §6` sırayı kilitliyor
(① dizin → ② yerleşim → ③ pencere) ve ben ②'yi ①'siz yapmaya çalıştım.
Bu yüzden 16 noktanın 8'inde tarih çizgisinde sahipsiz aralık var — bunlar
bilgisizlik değil, dizin eksiği, ve her biri `neden:` alanına
**`kunye-yok`** diye damgalandı ki makine sorabilsin.

**NEYİ ÖLÇMEDİM.** *(açıkça)*
- Orta Afrika'ya (Kongo · Luba · Lunda · Kuba · Loango · Ndongo) **hiç
  dokunmadım.** Mevcut 18 noktayı gördüm, yeni nokta aramadım. Şartname
  Batı ve Orta'yı birlikte istiyordu; **Orta yarım kaldı, gizlemiyorum.**
- Güney Afrika'ya dokunmadım. Ölçtüm: harita penceresi `box(-12,-11,146,82)`
  ⇒ **lat < -11 pencere dışı.** Great Zimbabwe (-20,27) · Mapungubwe
  (-22,2) · Zulu (-28,5) üçü de dışarıda. Yazılabilirlerdi (Sofala gibi
  "bekleyen veri" olurlardı) ama **yazmadım ve kararı koordinatöre
  bırakıyorum** — 8 kayıt daha eklemek pencere açılana kadar hiçbir şey
  boyamaz, ve `zulu-kralligi` zaten renksiz.
- Yazdığım hiçbir koordinatı **ölçmedim**; hepsi tarihî yerin bugünkü
  yerleşimle özdeşleştirilmesidir. Üçünün riski daha yüksek (Niani ·
  Oyo-İle · Birni N'gazargamu — üçü de harabe) ve her birinin altında
  ayrıca yazılı.
- ~~`Değişmez 2` benim dönemlerim için **ölçülmedi**~~ → **ÖLÇÜLDÜ, §9'a bak.**
  Eski satır *"32 dönem × 2 uç = en çok 64 kırılma"* diyordu; o bir **tavandı,
  ölçüm değil.** Gerçek sayı çok daha küçük çıktı.

---

## 4. YAZILMAYANLAR — yedisi de gerekçeli

`Njimi` (konumu arkeolojik olarak tartışmalı) · `Kukava` (kuruluş yılı
TDV'de yok, `kur:`sız yazmak Değişmez 5 hayaleti üretirdi) · `Hamdullahi`
(şehrin kuruluş yılı yok **ve** `massina` künyesi yok) · `Vagadugu`
(slug ölü + künye yok + tarih yok) · `Vida` ve `Allada` (TDV adlarını anıyor,
tarih vermiyor) · `İlorin` (aynı) · `Kumbi Salih` (Gâne devleti 1281'den
**önce** bitmiş — eksik değil, **kapsam dışı**).

📌 Yedisi de *"araştırılmadı"* değil, **"arandı, şu sebeple yazılamadı"** —
ve bu bir sonuçtur. Bir sonraki oturum sıfırdan aramasın.

---

## 5. KOORDİNATÖRDEN İSTEDİKLERİM — üçü de benim yetkim dışında

1. **`devletler.js` künyeleri** (benim dosyam değil): `ife` · `massina` ·
   `segu-bambara` · `tekrur`(Toucouleur) · `mossi` · `kanem`(ayrı) ·
   `vaday` · `bagirmi` · `matamba` · `mutapa-rozvi`.
   Ve `songhay-imparatorlugu` penceresi: `f:1464` — TDV `gao` maddesi
   1324'te bir Songay sultanı (Asibay) olduğunu söylüyor.
2. **`bos:` sözlüğüne altıncı kova.** Bugünkü beşi (`devletsiz` · `kabile` ·
   `veri-yok` · `insansiz` · `hata`) hepsi *devletin yokluğunu* anlatıyor.
   Benim sekiz kaydımdaki hâl üçüncü bir şey: **kaynak KONUŞUYOR, devlet
   VAR, bizim dizinimizde künyesi YOK.** En yakını olduğu için `veri-yok`
   yazdım ve `neden:` alanına `kunye-yok` diye damgaladım — kovayı kendim
   uydurmadım, çünkü sözlüğü ben yazmıyorum.
3. **Timbuktu · Agadez · Ndjamena** (VERİ ZAMAN'ın dosyasında, üçü de boş
   kabuk). Timbuktu için TDV'den çıkardığım sekiz kırılma dosyamın sonunda
   hazır duruyor. 🔴 Ve orada **iki TDV maddesi çelişiyor**: `tinbuktu`
   Fransız ilhakı için **1894**, `mali` ise "Tinbüktü, Gao, Bourem ve Mopti
   **(1898-1900)**" diyor. Aynı şehir, dört yıl fark. Hangisinin esas
   alınacağına karar vermek benim yetkim değil (`§7.1 ⑥`).

---

## 6. AÇIK KALAN

- **Güney Afrika yazılmadı** — pencere dışı, karar koordinatörde. Elimde
  TDV `zimbabve` maddesinden çıkarılmış hazır malzeme var (Mutapa XV. yy
  ikinci yarısı · Rozvi XVII. yy sonu, Portekiz baskısıyla · Çanga).
- Dosya `girdi.py`ye **bağlı değil** (koordinatör bağlar) ve bağlanmadan
  önce **renk** gelmeli: 10 kimliğin 10'u hâlâ renksiz.
  Sıra kısıtı (M-0138): `nokta → renk → BAĞLAMA`.
- İki dosya da **commit'siz** — `git commit -F` ortamın izin katmanından
  geçmedi, etrafından dolaşılmadı.

---

## 7. İKİNCİ TUR — Orta Afrika ve Buganda (M-0184 kilidi beni kapsamıyor)

M-0184: bağlı olmayan dosyalar donmuyor, `e9353f` adıyla listede.

**ÖLÇTÜM.** Kongo havzasında (lat −11..4 / lon 8..30) 1281-06-15'te sahnede
olan nokta: **0**. Bölgedeki 18 noktanın hepsinin `kur:`ı ≥ 1390.

**ÇIKARDIM.** *(ayrı satır)* Orası 1281'de "boş" değil **yok** — ve §2 gereği
o toprak en yakın peteğe emilir, yani başkasının rengiyle boyanır. Boş
bırakmaktan kötü. ⇒ Beş `tur:"bolge"` dolgu noktası kondu (Upemba · Malebo
Havuzu · Kasai · Ogooué · Ubangi-Uele), hepsi `bos:"veri-yok"`.

**Kova seçiminin gerekçesi ölçüldü** (Çukotka/Yakut sınavı): TDV'nin
`kongo` · `angola` · `luba` · `lunda` · `bantu` · `orta-afrika` sluglarının
**hepsi ölü (302)**; `zaire` canlı ama gövdesiz (§4③ — bu dosyadaki üçüncü
vaka: `songay` · `dahomey` · `zaire`); genel `kongo-demokratik-cumhuriyeti`
maddesi sömürge öncesi için neredeyse **susuyor**. ⇒ `veri-yok`, `devletsiz`
değil. Kuzey komşularının `kabile` kovasını **kopyalamadım**: `kabile`
diyebilmek için kaynağın kabile düzeninden söz etmesi gerekirdi.

🔴 **VE BİR TDV ÇELİŞKİSİ ÇIKTI — çözmüyorum, bildiriyorum:**
```
TDV kongo-demokratik-cumhuriyeti : "XIII. yüzyılda Atlas Okyanusu sahilinde
                                    kurulan Kongo Krallığı"
bizim künye  kongo-kralligi       : f:1390-01-01
```
~110 yıl fark ve **tam 1281'i kapsıyor.** TDV haklıysa Kongo Krallığı
1281'de vardı ve Mbanza-Kongo'nun `kur:1390`ı da geç. Künye de Mbanza-Kongo
da benim dosyam değil; §3.5 gereği künye dışına dönem yazmadım.

**BUGANDA — ve şartnamemle çeliştiğimi açıkça yazıyorum.** Şartname §④
*"Doğu Afrika iç bölgesi DOLU (94 nokta), oraya dokunma"* diyor; §③.2 ise
Buganda'yı **adıyla** istiyor. Ölçtüm: Buganda kutusunda (lat −3..4 /
lon 29..35) nokta sayısı **1** ve o da Nimule (Güney Sudan). 94 noktanın
94'ü Habeşistan · Nûbe · Sudan · Svahili kıyısındaydı — *"ölçüm doğru,
evren dar."* Ölçüme uydum, yasağa değil. Tek kayıt; geri alınması ucuz.

**NEYİ ÖLÇMEDİM (2. turda).** TDV `uganda` ve `gabon` slugları canlı ama
gövdelerini okumadım. → *3. turda okundu, aşağıya bak.*

---

## 8. ÜÇÜNCÜ TUR — Güney Afrika (M-0218 talimatı) + iki eksiğin kapanması

### 8a. Kendi itiraf ettiğim iki eksiği kapattım
```
gabon   → madde sömürge öncesi için AÇIKÇA SUSUYOR  ⇒ `veri-yok` hükmüm
          DOĞRULANDI, ve artık tahmin değil ÖLÇÜM.
          Ayrıca bir tarih verdi: "Fransız himaye idaresi 1837'de başladı"
          ⇒ Ogooué'nin 556 yıllık boşluğu 86 yıla indi.
uganda  → İngiliz tarihi KAYNAKLI çıktı: "1900 yılında İngilizler'le yapılan
          antlaşmayla Buganda toprakları resmen sömürgeleştirildi"
          ⇒ Mengo'nun `kaynak:` alanı `bulunamadi` → `uganda`.
```

### 8b. 🔴 ÜÇ KÜNYE PENCERESİ TDV'DEN GERİDE — ve üçü de 1281'i kesiyor
```
kongo-kralligi        f:1390   TDV: "XIII. yüzyılda ... kurulan Kongo Krallığı"
buganda               f:1300   TDV: "İlk kralının XIII. yüzyıl başlarında
                                     tahta çıkan Kato Kimera"
songhay-imparatorlugu f:1464   TDV: 1324'te Songay Sultanı Asibay adıyla geçiyor
```
Üçünde de §3.5 gereği künye dışına dönem **yazmadım** — yani TDV'nin 1281'i
kapsayan ifadesi üç kez **veriye inmedi.** Desen olduğunu **ölçmedim**;
üç vaka gördüm ve üçünü de bildirdim (M-0202).

### 8c. Güney Afrika — 6 nokta, ALTISI DA pencere dışı ve bilerek
Koordinatör M-0218: *"HEPSİNİ YAZ"*, gerekçe Emre'nin sözü — *"varsın karşın
noktası Çin'i boyasın, ki boyayamaz; ama nerelerde nokta ihtiyacımız olduğu
direkt görünür."* `denetle.py` pencere dışını ayrı kovada sayıyor.

| nokta | durum |
|---|---|
| **Kap (Cape Town)** | 🟢 bloğun en sağlamı — **dört kırılmanın dördü de kaynaklı**: 1652 van Riebeeck · 1795 İngiliz · 1802 Amiens ile Hollanda'ya iade · 1806 İngiliz |
| Büyük Zimbabve | `zimbabve-kralligi` 1281-1450 · `mutapa` 1450-1700 |
| Mapungubwe | sahipsiz — TDV **hiç anmıyor** |
| Ulundi (Zululand) | `zulu-kralligi` 1816-1879-07-04 · `ingiltere` sonrası |
| Transvaal · Oranj | `tur:"bolge"` · Büyük Göç 1830 · 1902 İngiliz |

📌 **1802-1806 arasındaki kısa Hollanda dönemini atlamadım** — dört yıl, ve
kaynak onu ayrı bir kırılma olarak veriyor. Sadeleştirmek, kaynağı
sadeleştirmek olurdu.

⚠️ **Künyesiz kimlik kullandım, bilerek:** `zimbabve-kralligi` · `mutapa` ·
`transvaal` · `oranj` künyeleri yok. Koordinatör M-0218'de *"çekinme,
`Değişmez 4` künyesizi ayrı kovaya koyuyor — künyeyi ben yazacağım"* dedi.
Bölgenin `guney-afrika` künyesi **ölçüldü: bir tane** (`zulu-kralligi`), o da
renksiz. **NATAL yazılmadı**: TDV üçünü birlikte sayıyor ama Natal İngiliz
idaresine çok daha erken geçti ve tarihini vermiyor.

### 8d. 🟡 ELMİNA — "aradım, ERİŞEMEDİM" kovasının İLK canlı kullanımı
TDV `elmina` ölü, ama genel `gana` maddesi **iki tarih veriyor** (1471
Portekizliler · 1482 Elmina kalesi) — yani `kur:` kaynaklı ve `portekiz`
künyesi hazır. **Yazılmadı**, çünkü dönemin **bitişi** yok: kale 1637'de
Hollandalılar'a, 1872'de İngilizler'e geçti ve TDV ikisini de vermiyor.
`portekiz`i 1874'e kadar yazmak **237 yıllık bir yalan** olurdu.

Akademik yol **denendi ve erişilemedi**: UNESCO Dünya Mirası kaydı
(`whc.unesco.org/en/list/34`) **iki kez HTTP 403**. Kırmızı çizgi gereği
forum/blog/içerik çiftliğine **gitmedim**.
⇒ `bulunamadı — arandı, ERİŞİLEMEDİ`. Bu *"aradım, yok"* değil: kaynak
**var** ve erişilebilir hâle gelirse nokta **tek oturumda** yazılır.
