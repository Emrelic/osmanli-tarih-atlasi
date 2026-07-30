# Oturum 4 → Merkez — Düzeltme listesi

**Kapsam:** hatalar 15 İran ekseni — md.8 (Ferhat Paşa Antlaşması), md.11
(Kasr-ı Şirin sınırları), md.6 (Lahsa/Katîf karasal kopukluk).
Artı: önceki turdan devreden Şehrizor/Süleymaniye ölçümleri.

**Ben `data/yerlesimler.js`'e YAZMADIM.** Aşağıdaki satırlar uygulanmak üzere
merkeze teslim edilmiştir.

**Biçim:** `kayıt | mevcut değer | önerilen değer | TDV slug | gerekçe`

**Slug kuralı:** bu dosyada geçen her slug `<title>` ile sınandı. Yönlendirme
tuzağı (OGRENILENLER §20) için ölü çıkan her slug ayrıca TDV aramasında
denendi — `nihavend` → `nihavend--iran` ve `kasr-i-sirin-antlasmasi` →
`kasrisirin-antlasmasi` tam bu şekilde bulundu.

---

# 🔴 ÖNCE: BEŞ ÖLÜ SLUG ŞU ANDA VERİDE KULLANILIYOR

Bu, md.8'i araştırırken çıktı ve tek başına en acil bulgu. İran ekseninin
kronoloji maddelerinin yarısı **var olmayan TDV maddelerine** bağlanıyor;
kullanıcı bağlantıya tıkladığında arama sayfasına düşüyor.

| Ölü slug | Kullanan kayıt | Önerilen | Doğrulama |
|---|---|---|---|
| `ferhad-pasa-antlasmasi` | **1588-01-01** "Karabağ ve Gence'nin ilhakı"<br>**1590-03-21** "Ferhad Paşa Antlaşması" | `ferhad-pasa` | CANLI. TDV'de antlaşmanın müstakil maddesi **yok**; hükümler yer maddelerinden toplanıyor. `ferhad-pasa` maddesi antlaşmayı anıyor: *"Safevî elçilik heyetiyle İstanbul'a dönerek 1590 Osmanlı-Safevî anlaşmasının yapılmasında rol oynadı."* Alternatif/ek: `luristan` (aşağıda). |
| `kasr-i-sirin-antlasmasi` | **1639-05-17** "Kasr-ı Şirin Antlaşması" | **`kasrisirin-antlasmasi`** | CANLI. Tam da aradığımız madde — başlığı "KASRIŞÎRİN ANTLAŞMASI", tarifi *"Osmanlılar'la Safevîler arasında 1639'da imzalanan ve bugünkü Türkiye-İran doğu sınırını belirleyen antlaşma."* Tire konumu farklı, o kadar. |
| `cildir-savasi` | **1578-08-09** "Çıldır Zaferi" | `cildir-eyaleti` | CANLI. Savaşın müstakil maddesi yok; aramada çıkan tek doğrudan slug bu. (`ahiska` da savaşı anıyor: *"Ahıska atabegleri, Lala Mustafa Paşa'nın Çıldır Savaşı (1578) sonunda Osmanlı idaresine girdiler."*) |
| `mesaleler-savasi` | **1583-05-09** "Meşaleler Savaşı" | `sirvan` | CANLI. Savaşın müstakil maddesi yok. ŞİRVAN maddesi olayı anlatıyor: *"Osmanlılar harekete geçerek 1583'te Meşâle Savaşı neticesinde bölgede tamamıyla hâkimiyet kurmayı başardı."* |
| `ozdemiroglu-osman-pasa` | **1585-09-25** "Tebriz'in fethi" | `tebriz` | CANLI. ⚠️ `ozdemiroglu` ve `ozdemiroglu osman pasa` aramaları **hiç sonuç vermedi** — bu isimle bir madde bulunamadı. Kaydın konusu Tebriz'in fethi olduğu için `tebriz` doğru kaynaktır. |

---

# md.8 — FERHAT PAŞA ANTLAŞMASI

## 8.0 Antlaşmanın TDV'deki adı ve dayanağı

TDV'de **müstakil maddesi yok.** Toprak hükmünü açıkça yazan madde LURİSTAN'dır
ve antlaşmayı **"İstanbul antlaşması"** diye anar:

> *"Bir ara 998'de (1590) İstanbul'da yapılan antlaşmaya göre Osmanlı idaresine
> bağlanan Luristan'ı Şah I. Abbas Safevîler'e tam olarak bağladı (1603)."*
> — TDV **LURİSTAN** (`luristan`, CANLI)

İkinci dayanak KARABAĞ:

> *"1590 antlaşmasıyla Osmanlı Devleti'nin **Yukarı Azerbaycan**'daki
> hâkimiyetini tanıyan Safevîler 1603'te karşı saldırılar sonucunda bölgeyi
> yeniden ele geçirdiler."* — TDV **KARABAĞ** (`karabag`, CANLI)

Üçüncüsü ŞİRVAN:

> *"1590 antlaşması bu durumu kesin hale getirdi ve Safevîler bölgedeki Osmanlı
> hâkimiyetini tanıdı. Osmanlı idaresinde Şirvan iki eyalete ayrıldı. Kuzeyde
> merkezi Demirkapı/Derbend olan Derbend eyaleti, güneyde merkezi Şemâhî olan
> Şemâhî eyaleti kuruldu. Şemâhî eyaleti on beş, Derbend yedi sancağa ayrıldı.
> Şah Abbas 1607'de bölgeyi yeniden Safevî idaresine kattı."*
> — TDV **ŞİRVAN** (`sirvan`, CANLI)

## 8.1 🔴 KULLANICININ İDDİASI — NİHAVEND ve URMİYE: **İKİSİ DE DOĞRU**

Kullanıcı *"Ferhat Paşa Antlaşması sonucunda Nihavend ve Urmiye tarafları da
Osmanlı'ya verilmiş olmalı"* dedi. Şehir şehir ölçtüm:

### NİHÂVEND → veride ZATEN VAR, ama başlangıç tarihi ~1,5 yıl geç

**⚠️ Kendi ilk ölçümümü düzeltiyorum:** "Nihavend kaydı yok" diye aradım,
diakritik yüzünden ıskaladım. Kayıt **`Nihâvend`** adıyla var ve Osmanlı:

| kayıt | mevcut değer | önerilen değer | TDV slug | gerekçe |
|---|---|---|---|---|
| Nihâvend | `d: 1590-03-21 > 1603-10-21` | **karar merkezde** — ya `1588-01-01 > 1603-10-21`, ya olduğu gibi kalıp ayrı kronoloji maddesi | `nihavend--iran` | TDV: *"Bağdat Valisi Cigalazâde Sinan Paşa **996 (1588) yılı sonlarında** Nihâvend üzerine yürüyüp şehri ele geçirdi ve burada bir kale inşa ettirdi… Bu dönemde Nihâvend bir **Osmanlı beylerbeyiliği** haline getirildi. 1590 … müzakerelerde Nihâvend üzerinde uzun tartışmalar yapıldı ve neticede **şehir Osmanlı idaresinde kaldı**. Şah I. Abbas **1603**'te şehri ele geçirdi."* Yani fetih 1588 sonu, antlaşma yalnız teyit etti. Bitiş tarihi (1603-10-21) **doğru**. |

> **Önerim: yerleşim kaydını DEĞİŞTİRME.** TDV "1588 yılı **sonlarında**" diyor;
> `1588-01-01` yazmak onu Ocak'a taşır ve OGRENILENLER §8'in yasakladığı
> uydurulmuş kesinlik olur. Bunun yerine **1588 fethine ayrı bir kronoloji
> maddesi** yazılsın — kullanıcının istediği "adım adım" zaten budur.
> Not: `nihavend` ÖLÜ, doğru slug **`nihavend--iran`** (yönlendirme tuzağı).

### URMİYE → 🔴 GERÇEK EKSİK. Osmanlı dönemi HİÇ YOK, TDV **ÜÇ** dönem veriyor

| kayıt | mevcut değer | önerilen değer | TDV slug | gerekçe |
|---|---|---|---|---|
| Urmiye | `d:` **hiç yok** — 1281-1501 iran, 1501-1736 safevi, 1736-1923 iran | **`d:` eklenmeli, 3 dönem** (aşağıda) | `urmiye` | TDV üç ayrı Osmanlı dönemi veriyor, veride sıfırı var. |

TDV **URMİYE** (`urmiye`, CANLI), üç dönem:

1. *"Safevîler'in hâkimiyetine giren Urmiye **XVI. yüzyılın sonlarında kısa bir
   süre Osmanlı egemenliğine geçtiyse de Şah I. Abbas tarafından yeniden Safevî
   Devleti'ne bağlandı**."*
   → **Önerilen: `{f:"1585-09-25", t:"1603-10-21"}`**
   Gün TDV'den değil, **doğrulanmış komşudan** alındı (OGRENILENLER §8):
   Merâga (37,4 N 46,2 D — Urmiye'ye ~95 km) `1585-09-25 > 1603-10-21`; aynı
   kaydı Ahar, Sarâb, Miyâne de taşıyor. Kayıt yorumuna **"tarih Merâga'dan
   alındı, TDV yalnız 'XVI. yüzyıl sonları' diyor"** notu düşülmeli.
2. *"Urmiye … **1724 yılında** bir defa daha Osmanlı hâkimiyetine girdi. Nâdir
   Şah **1729**'da bölgeyi zaptettiyse de Hekimoğlu Ali Paşa ve Rüstem Paşa bir
   ay süren şiddetli bir kuşatmanın ardından Urmiye'yi ele geçirdiler (**1730**)."*
   → **Önerilen: `{f:"1724-01-01", t:"1729-01-01"}` + `{f:"1730-01-01", t:"1736-03-08"}`**
   ⚠️ Üç tarihin de **günü yok**; TDV yalnız yıl veriyor. CLAUDE.md §4'ün
   `YYYY-01-01` sözleşmesi uygulandı. Bitiş için komşu Merâga `1730-08-12`
   kullanılabilir — **karar merkezde.**
3. *"Urmiye **1906** yılında Osmanlılar'ın … eline geçti… I. Dünya Savaşı
   sırasında Osmanlı ordusu ile Rus ordusu arasında **pek çok defa el değiştirdi**.
   Osmanlı ordusu … **Aralık 1918**'de Urmiye'den ayrılmak zorunda kaldı."*
   → **YAZILMASIN.** "Pek çok defa el değiştirdi" tek bir dönem olarak
   yazılamaz; TDV gün vermiyor. **Kaynak yeterli değil, uydurmadım.**

## 8.2 🔴 AYNI SINIFTAN İKİNCİ EKSİK — HOY

Kullanıcı sormadı ama Urmiye'yi ararken çıktı ve aynı kusur:

| kayıt | mevcut değer | önerilen değer | TDV slug | gerekçe |
|---|---|---|---|---|
| Hoy | `d:` **hiç yok** | **2 dönem eklenmeli** | `hoy` | TDV: *"**1578-1590 Osmanlı-Safevî savaşlarının başlarında** … Hoy yeniden Osmanlı hâkimiyeti altına girdi. **Tebriz'e bağlı bir sancak merkezi** haline getirilerek … 1585'te bu sancağın beyi Şahkuluoğulları'ndan Alâeddin Bey idi. Ayrıca … Hoy'da **Ferhad Paşa tarafından bir kale yaptırılmıştı**. **1603'te Şah I. Abbas'ın eline geçen Hoy**, Nasuh Paşa antlaşması ile (1612) İran'a terkedildi… **III. Ahmed döneminde Hoy tekrar Osmanlı hâkimiyeti altına girdi (1724)** ve on beş yıl kadar … **1739**'da tekrar İranlılar'ın eline geçti."* |

→ Önerilen: `{f:"1585-09-25", t:"1603-10-21"}` (komşu Tebriz/Merâga'dan gün) ve
`{f:"1724-01-01", t:"1739-01-01"}` (TDV yıl veriyor, gün yok).
Hoy'un **Osmanlı sancağı** olduğu ve **kalesini Ferhad Paşa'nın yaptırdığı**
TDV'de açıkça yazıyor — antlaşmanın adını taşıyan paşa oraya kale yaptırmışsa
şehir Osmanlı'dadır.

## 8.3 🟡 ÖLÇÜLDÜ ama KAYNAK YETMEDİ — 4 komşu nokta

1595-06-15 kesitinde Tebriz Osmanlı, çevresindeki şu noktalar Safevî:

| kayıt | mevcut | durum |
|---|---|---|
| Merend (38,4 N 45,8 D) | `d:` yok | ⚠️ `merend` slug'ı **ÖLÜ**, TDV maddesi yok. **Kaynak yok.** Hoy maddesi Merend'i yalnız kale kapısı tarifinde anıyor. |
| Selmâs / Dilman (38,2 N 44,8 D) | `d:` yok | ⚠️ `selmas` **ÖLÜ**. **Kaynak yok.** |
| Mâku (39,3 N 44,5 D) | `d:` yok | `maku` CANLI ama metnini çekmedim. **Sıradaki turda.** |
| Culfa (39,0 N 45,6 D) | `d:` yok | Nahçıvan (Osmanlı 1585-1603) ile Merend arasında. Kaynak taranmadı. |

**Uydurmadım.** Hoy ve Urmiye Osmanlı olunca bu dördü Tebriz sancağının içinde
bir Safevî cebi gibi kalıyor; muhtemelen onlar da Osmanlı'ydı — ama TDV'den
doğrulayamadığım için düzeltme yazmıyorum.

## 8.4 Adım adım fetih zinciri — kronoloji karşılığı ÖLÇÜLDÜ

Kullanıcı *"adım adım ele geçen yerlerin kronolojisini gözden geçir"* dedi.
Ölçüm: **zincir büyük ölçüde TAM.** 1578-1590 arasındaki her harita kırılmasının
maddesi var:

| Tarih | Kronoloji maddesi | Haritada karşılığı | Uyum |
|---|---|---|---|
| 1578-08-09 | Çıldır Zaferi | Ahıska, Tiflis, Batum, Sohum · Zagem tâbi | ✓ |
| 1578-11-01 | Şirvan'ın fethi: Şamahı | Şamahı, Kabala, Ereş, Salyan, Şâbüran, Mahmudâbâd, Şeki | ✓ |
| 1583-01-01 | Demirkapı (Derbend) | Derbend | ✓ |
| 1583-05-09 | Meşaleler Savaşı | — (teyit maddesi) | ✓ |
| 1583-06-01 | Revan'ın fethi | Revan | ✓ |
| 1583-08-01 | Bakü'nün alınışı | Bakü | ✓ |
| 1585-01-01 | Nahçıvan ve Ordubad | Nahçıvan, Ordubad | ✓ |
| 1585-09-25 | Tebriz'in fethi | Tebriz, Merâga, Ahar, Sarâb, Miyâne | ✓ |
| 1588-01-01 | Karabağ ve Gence'nin ilhakı | Gence, Berde | ✓ |
| 1590-03-21 | Ferhad Paşa Antlaşması | Hemedan, Kirmanşah, Luristan, Nihâvend, Burûcird | ✓ |

**Eksik olan tek adım: 1588 sonunda Nihâvend'in fethi** (§8.1). Yazılması gereken
madde — Oturum 7'ye:

```js
{ t:"1588-01-01", k:"fetih", etiket:["toprak-kazanc","savas"],
  b:"Nihâvend'in fethi — Zagros'un ötesinde bir beylerbeyilik",
  gun:"1588", yer:"Nihâvend",
  kisiler:"Cigalazâde Sinan Paşa, Şah I. Abbas",
  d:"Bağdat Valisi Cigalazâde Sinan Paşa Nihâvend üzerine yürüyerek şehri ele geçirdi ve burada bir kale inşa ettirdi. Şah I. Abbas şehri geri almak için uğraştıysa da bozguna uğrayarak çekildi; Sinan Paşa kaleyi toplarla takviye etti. Nihâvend bir Osmanlı beylerbeyiliği haline getirildi ve iki yıl sonraki barış görüşmelerinde üzerinde uzun tartışmalar yapıldıktan sonra Osmanlı idaresinde kaldı.",
  kaynak:"nihavend--iran" }
```
⚠️ `gun:"1588"` — TDV "996 (1588) yılı sonlarında" diyor, **gün yok.**
`t:"1588-01-01"` CLAUDE.md §4 sözleşmesidir, ay iddiası değildir.

## 8.5 Ölçülen tarih tutarsızlığı — Gence/Karabağ bitişi

| kayıt | mevcut | TDV | not |
|---|---|---|---|
| Gence, Berde (Karabağ) | `d: … > 1606-01-01` | KARABAĞ: *"Safevîler **1603**'te karşı saldırılar sonucunda bölgeyi yeniden ele geçirdiler"* | 3 yıllık fark. Mevcut veri "1606 Tiflis ve Gence'nin kaybı" maddesiyle uyumlu; TDV Karabağ'ı 1603'e koyuyor. **Karar merkezde** — Gence şehri 1606'ya kadar dayanmış, Karabağ kırı 1603'te düşmüş olabilir; ikisi çelişmez. Düzeltme yazmıyorum. |

---

# md.11 — KASR-I ŞİRİN SINIRLARI

**Doğru slug: `kasrisirin-antlasmasi`** (mevcut veride kullanılan
`kasr-i-sirin-antlasmasi` **ÖLÜ** — bkz. baştaki tablo).

## 11.1 🔴 "MİLİM MİLİM" SORUSUNUN CEVABI — KAYNAĞIN KENDİSİ VERİYOR

Kullanıcı *"milim milim doğrula"* dedi. Bunu hedge etmeye gerek yok, çünkü
**TDV maddesinin kendisi çizginin çizilmediğini sayıyla söylüyor:**

> *"İki devlet arasındaki sınırın uzunluğu **2185 km.** olmakla beraber, bunun
> sadece Ağrı dağı ile Şattülarap arasındaki **1296 kilometrelik kısmında
> ihtilâf mevcuttu**."* — TDV **KASRIŞÎRİN ANTLAŞMASI**

Yani sınırın **%59'u antlaşma imzalanırken ihtilâflıydı** ve öyle kaldı; mesele
1746 Kerden, 1823 ve 1847 Erzurum antlaşmalarıyla tekrar tekrar ele alındı.
1639'da çizgi düzeyinde bir sınır **yoktur** — antlaşma bölge ve şehir düzeyinde
konuşur.

> **Merkeze:** kullanıcıya verilecek cevap budur. "Milim milim doğrulayamadık"
> değil — **"1639'da milim yoktu, kaynağın kendisi 1296 km'lik kısmın ihtilâflı
> kaldığını yazıyor."** Bu bir eksiklik itirafı değil, ölçülmüş bir tarihî olgudur.

## 11.2 Antlaşmanın toprak hükmü — ŞEHİR ŞEHİR DOĞRULANDI, HEPSİ ✅

> *"Antlaşmaya göre Irâk-ı Arab denilen **Bağdat, Basra ve Şehrizor** bölgesi
> Osmanlılar'da kalmış, **Revan** ise Safevîler'e bırakılmıştır. Ayrıca
> Safevîler'in gerek Irak'a gerekse **Kars, Ahıska ve Van**'a tecavüzleri
> önlenmiştir."*

1640-06-15 kesitinde veriyi tek tek ölçtüm:

| Şehir | Antlaşma ne diyor | Veri ne diyor | Uyum |
|---|---|---|---|
| Bağdat | Osmanlı | `d: 1638-12-24 > 1917-03-11` | ✅ |
| Basra | Osmanlı | `d: 1546-01-01 > 1776-04-16` | ✅ |
| Şehrizor | Osmanlı | `d: 1638-12-25 > 1918-10-30` | ✅ |
| Revan | Safevî | `d:` 1636-04-01'de bitmiş → Safevî | ✅ |
| Kars | Osmanlı | `d: 1534-06-01 > 1878-07-13` | ✅ |
| Ahıska | Osmanlı | `d: 1578-08-01 > 1829-09-14` | ✅ |
| Van | Osmanlı | `d: 1548-08-25 > 1923-10-29` | ✅ |

**Yedi hükmün yedisi de haritada doğru.** Kasr-ı Şirin sınırında düzeltilecek
bir şey bulamadım.

## 11.3 Antlaşmanın tarihi — mevcut kayıt DOĞRU

Mevcut kayıt `t:"1639-05-17"`. TDV: *"11 Muharrem 1049'da (**14 Mayıs 1639**)
başlayan ve üç gün devam eden müzakerelerden sonra 14 Muharrem'de (**17 Mayıs**)
antlaşma imzalandı."* ✅ Doğru.

Ek bilgi (madde metni zenginleştirilmek istenirse): antlaşma **Zühâb**'da
imzalandığı için kaynaklarda **Zühâb Antlaşması** diye de geçer; IV. Murad
İstanbul'a hareket etmiş olduğu için metin Temmuz 1639'da İstanbul'a götürülmüş
ve **Kasım 1639 sonunda** kesin tasdik edilmiştir. Ayrıca Osmanlı barış teklifini
reddederken **Kars'ın İran'a verilmesi** istenmiş, Kemankeş Kara Mustafa Paşa
reddetmiştir.

---

# md.6 — LAHSA ve KATÎF: KARASAL KOPUKLUK

## 6.1 ÖLÇÜM — kopukluk **350,3 km**, yani GERÇEK

Oturum 2'nin kuralı: **100 km üstü = gerçek tarihî sıçrama, 100 km altı = hata.**

1600-06-15 kesitinde Basra grubu ile Körfez grubu arasındaki **en yakın iki
Osmanlı noktası**:

```
Fâv (29,976 N 48,472 D)  ←→  Cübeyl (26,998 N 49,641 D)   =  350,3 km
```

Diğer ölçümler: Basra↔Cübeyl 430,2 km · Basra↔Katîf 489,2 km ·
Basra↔Lahsa 596,8 km · Katîf↔Lahsa 136,5 km · Cübeyl↔Katîf 59,9 km.

**Basra ile Cübeyl arasında hiçbir Osmanlı noktası yok** — o kesitte 467 Osmanlı
noktası içinde aradaki koridorda duran tek nokta **Kuveyt**, o da 1281-1716
arası **sahipsiz** (Değişmez 1'in 34 kasten boş noktasından biri).

> ⚠️ **Merkeze not:** mesajında "Basra bölgesinde 91,42 km'lik bir kara boşluğu"
> dedin. `denetim/BITISIKLIK-2026-07-30.md`'de Basra o rakamla değil, **C
> kategorisinde — "uzak kara sıçraması (33) — tarihsel, geometri değil"**
> başlığı altında geçiyor. Benim ölçtüğüm mesafe **350,3 km.** 91,42 km başka
> bir bileşene ait olmalı.

## 6.2 CEVAP: **gerçek tarihî durum, hata değil** — ve TDV bunu açıklıyor

TDV **LAHSÂ** (`lahsa`, CANLI):

> *"Âl-i Ecved'in elinde iken **Portekiz tehlikesinin baş göstermesi üzerine**
> Osmanlı Devleti tarafından hâkimiyet altına alınarak **Basra beylerbeyiliğine
> bağlandı (1547)**. Muhtemelen **1553'ten sonra beylerbeyiliğe yükseltilen**
> Lahsâ'da … **Benî Hâlid** kabilesinden Âl-i Hamîd kışlıyor ve sâlyâne olarak
> 200.000 akçe alıyordu. **Aslında Benî Hâlid kabilesi Osmanlı hâkimiyeti
> öncesinde de Lahsâ'nın hâkimiydi.**"*

TDV Lahsâ'yı *"bir **vahalar bölgesi**"* diye tanımlıyor. TDV **KATÎF**
(`katif`, CANLI) idarî bağı doğruluyor:

> *"Önceleri Arabistan yarımadasında bulunması dolayısıyla Mekke şeriflerine
> bağlı olan Katîf bölgenin diğer kesimleri gibi sonradan **Basra ve Bağdat'a
> bağlandı**."* · *"Katîf **1555**'te yeni kurulan **Lahsâ (Ahsâ) eyaletine**
> bağlandı."*

**Sonuç — kullanıcıya verilecek cevap:**
Kopukluk **tarihî gerçekliktir**, "aradaki parça fethedilememiş" değildir.
Lahsâ bir **vaha kümesidir**; Basra ile arasındaki kıyı şeridi kalıcı yerleşimi
olmayan çöldür ve **Benî Hâlid** aşiretinin sahasıydı. Osmanlı oraya **kıyıdan,
Portekiz tehdidine karşı** girdi ve idarî bağı **deniz ve Basra üzerinden**
kurdu — önce Basra beylerbeyiliğine bağladı (1547), sonra Lahsâ'yı ayrı bir
beylerbeyilik yaptı (1553 sonrası). Yani **idarî olarak bağlı, coğrafî olarak
kopuk** — haritanın gösterdiği tam olarak budur ve doğrudur.

## 6.3 🟡 ANCAK — aynı bölgede İKİ AYRI kusur ölçüldü

Kopukluk doğru, ama Katîf/Lahsa kayıtları eksik:

| kayıt | mevcut değer | önerilen değer | TDV slug | gerekçe |
|---|---|---|---|---|
| Katîf, Cübeyl, Ukayr, Lahsa | `d:` ikinci dönem **`1871-04-20`** başlıyor | **`1871-06-05`** | `katif` | TDV: *"Nihayet **5 Haziran 1871**'de Osmanlı kuvvetleri Suûdî Emîri Suûd b. Faysal'ı itaat altına…"* Verideki 1871-04-20 TDV'den gelmiyor; 46 gün erken. |
| Katîf, Lahsa | 1795-1871 kesintisiz **`suud`** | **iki Osmanlı/Mısır dönemi eksik** | `katif` | TDV: *"İbrâhim Paşa, **1818**'de Hicaz'da emniyeti sağladıktan sonra bütün Bahreyn bölgesine hâkim oldu… Katîf **Medine'ye bağlandı**. Fakat Suûdîler, **1830**'da Hüfûf ve Katîf'i ele geçirerek…"* ve *"Mısır kuvvetleri Lahsâ ve Katîf'i yeniden Osmanlılar'a bağladılar (**1840**). Ancak Suûdîler **iki yıl geçmeden** bölgeye tekrar hâkim oldular."* → eksik dönemler: **1818-1830** ve **1840-1842**. |

⚠️ Bu ikinci satırın günü yok (TDV yalnız yıl veriyor: 1818, 1830, 1840, "iki
yıl geçmeden"). `YYYY-01-01` sözleşmesiyle yazılabilir ama **1842 tarihi
"iki yıl geçmeden"den türetilmiş bir çıkarımdır**, TDV onu açıkça yazmıyor.
**Karar merkezde.**

📌 Bu bulgu **A bloğunun md.34 ve md.35'iyle doğrudan bağlantılıdır** (Asîr'in
doğrudan idareye alınması, Lahsa'nın hangi kısmı merkeze bağlı). A bloğunu
yazarken buradan devam edeceğim.

---

# EK — Önceki turdan devreden üç ölçüm (uygulanmadı)

Bunlar geçen tur ölçülüp `scratchpad/yama_sehrizor.py` içinde hazırlanmıştı;
yeni kural gereği uygulanmadı, düzeltme satırına çevrildi.

| kayıt | mevcut değer | önerilen değer | TDV slug | gerekçe |
|---|---|---|---|---|
| Şehrizor | `lat 35.560 · lon 45.430` | `lat 35.280 · lon 45.500` | `sehrizor` | Mevcut koordinat Süleymaniye'nin üstüne düşüyor; tarihî Şehrizor ovası güneydoğuda. |
| **Süleymaniye** | **kayıt YOK** | yeni kayıt: `lat 35.556 · lon 45.435`, `kur:"1784-01-01"`, `k:3`, `m:"Şehrizor"`, Osmanlı `1554-08-22 > 1918-10-30` | `sehrizor` | Şehir 1784'te kuruldu. Osmanlı dönemi **Bağdat'tan değil Şehrizor'dan** alınmalı — Şehrizor eyaletinin merkezi oldu. |
| Erbil, Kifri, Tuz Hurmatu, Halepçe | `d:` bitiş **`1917-03-11`** | **`1918-10-30`** | `erbil` | 1917-03-11 **Bağdat'ın** İngiliz işgali tarihi. Bu dört yerleşim Musul cephesindedir ve Mondros'a (1918-10-30) kadar Osmanlı'da kalmıştır. Şehrizor zaten 1918-10-30 taşıyor — dördü onunla tutarsız. |

---

# Özet

| # | Konu | Sonuç |
|---|---|---|
| 🔴 | **5 ölü slug veride aktif** | `ferhad-pasa-antlasmasi` · `kasr-i-sirin-antlasmasi` · `cildir-savasi` · `mesaleler-savasi` · `ozdemiroglu-osman-pasa` — hepsine canlı karşılık önerildi |
| md.8 | Nihavend iddiası | **DOĞRU** — kayıt var, fetih 1588 sonu; ayrı kronoloji maddesi önerildi |
| md.8 | Urmiye iddiası | **DOĞRU ve GERÇEK EKSİK** — Osmanlı dönemi hiç yok, TDV üç dönem veriyor |
| md.8 | Hoy | **AYNI KUSUR** — Osmanlı sancağıydı, kalesini Ferhad Paşa yaptırdı, veride `d:` yok |
| md.8 | Merend · Selmâs · Mâku · Culfa | 🟡 **kaynak yok** — slug'lar ölü, uydurulmadı |
| md.8 | Fetih zinciri 1578-1590 | **10 adımın 10'u maddeli** — eksik yalnız 1588 Nihâvend |
| md.11 | Kasr-ı Şirin toprak hükmü | **7 şehrin 7'si de haritada DOĞRU** — düzeltme yok |
| md.11 | "Milim milim" | Kaynak cevabı veriyor: sınır 2185 km, **1296 km'si ihtilâflı kaldı**; 1639'da çizgi yok |
| md.6 | Lahsa/Katîf kopukluğu | **GERÇEK** — 350,3 km, çöl + vaha; idarî bağ Basra üzerinden. Hata değil |
| md.6 | Katîf tarihleri | 🟡 1871-04-20 → **1871-06-05**; 1818-1830 ve 1840-1842 dönemleri eksik |
| ek | Şehrizor · Süleymaniye · Musul cephesi | önceki turdan, uygulanmayı bekliyor |

**A bloğu (Arabistan/Yemen/Hicaz — md.1, 20, 24, 25, 34, 35, 53) hâlâ açık.**
md.6 araştırması Katîf/Lahsa üzerinden oraya değdi; sıradaki tur oradan devam.

---
---

# hatalar 16 — İRAN / KAFKAS / ARABİSTAN EKSENİ (6 madde)

Ölçüm tarihi 2026-07-31. `data/yerlesimler.js`'e **yazılmadı.**
Bu bölümdeki her slug `<title>` ile sınandı.

**Bu turda ölü çıkan slug'lar:** `hemedan-antlasmasi` · `zendiler` · `nadir-sah` ·
`suud` · `abaza`. **Canlı:** `hemedan` · `kerim-han-zend` · `basra` · `anapa` ·
`sohum` · `vehhabilik` · `mekke` · `medine` · `taif` · `gurcistan` · `iran`.

---

## md.2 — HEMEDAN ANTLAŞMASI (1727): "Urmiye, Nahçıvan Osmanlı'ya geçmedi mi?"

### Kullanıcının iddiası: **YARISI DOĞRU**

| Şehir | Kullanıcı ne diyor | Veri ne diyor | Hüküm |
|---|---|---|---|
| **Nahçıvan** | Osmanlı'ya geçmeliydi | `d: 1725-01-01 > 1730-08-12` | ✅ **ZATEN DOĞRU** — 1728'de Osmanlı |
| **Urmiye** | Osmanlı'ya geçmeliydi | `d:` **hiç yok** | 🔴 **HAKLI, EKSİK** |

Urmiye eksiği bu turda **ikinci kez ve bağımsız olarak** doğrulandı: hatalar 15
md.8'de TDV URMİYE maddesinden (*"1724 yılında bir defa daha Osmanlı hâkimiyetine
girdi"*), şimdi de antlaşma hükmünden. Düzeltme satırı bu dosyanın §8.1'inde.

### Antlaşmanın toprak hükmü — TDV

⚠️ `hemedan-antlasmasi` **ÖLÜ**, TDV'de antlaşmanın müstakil maddesi yok. Hükmü
veren madde **İRAN** (`iran`, CANLI):

> *"İran'daki karışıklığı fırsat bilen Ruslar 1723'te Derbend ve Bakü'yü ele
> geçirmişlerdi. Kısa bir süre sonra da Osmanlılar Azerbaycan'a girdiler.
> **1727'de Osmanlılar'la anlaşmaya mecbur kalan Eşref Han İran Kürdistanı'nı,
> Azerbaycan, Karabağ ve Gürcistan'ı onlara bıraktı.**"*

⚠️ Kaynak **bölge düzeyinde** konuşuyor — dört bölge adı veriyor, şehir listesi
vermiyor. "Milim milim" burada da mümkün değil; ama bölge adları verildiği için
**hangi şehrin hangi bölgede olduğu** üzerinden şehir şehir ölçtüm.

### 1728-06-15 kesiti — girintili çıkıntılılık GERÇEK, 11 nokta eksik

| Antlaşma bölgesi | Veride Osmanlı | Veride **hâlâ safevi** — eksik |
|---|---|---|
| **Azerbaycan** | Tebriz, Merâga, Ahar, Sarâb, Miyâne, Nahçıvan, Ordubad | 🔴 **Urmiye, Hoy, Selmâs, Merend, Culfa, Mâku** (6) |
| **İran Kürdistanı** (Ardalan) | — | 🔴 **Sakkız, Senendec (Sine), Merîvan, Bîcâr, Mîyandoab** (5) |
| **Karabağ** | Gence, Berde, Şeki | 🟡 Şuşa — ama şehir **1752'de kuruldu**, 1728'de yoktu; muhtemelen sorun değil |
| **Gürcistan** | Tiflis | Zagem (Kaheti) `gurcistan` — vasal krallık, çelişki sayılmayabilir |

**Kullanıcının gördüğü "girintili çıkıntılı" görüntünün sebebi budur.** Osmanlı
Tebriz'in kuzeybatısında Hoy-Merend-Selmâs-Mâku-Culfa-Urmiye'den oluşan bir
Safevî kaması, güneyinde de Sakkız-Sine-Merîvan-Bîcâr'dan oluşan ikinci bir kama
duruyor. İkisi de antlaşma metnine göre Osmanlı olmalıydı.

### Düzeltme satırları

| kayıt | mevcut | önerilen | slug | gerekçe |
|---|---|---|---|---|
| Urmiye | `d:` yok | `{f:"1724-01-01", t:"1729-01-01"}` + `{f:"1730-01-01", t:"1736-03-08"}` | `urmiye` | TDV URMİYE: 1724 Osmanlı, 1729 Nâdir, 1730 Hekimoğlu Ali Paşa geri aldı. **Gün yok**, `YYYY-01-01` sözleşmesi. |
| Hoy | `d:` yok | `{f:"1724-01-01", t:"1739-01-01"}` | `hoy` | TDV HOY: *"III. Ahmed döneminde Hoy tekrar Osmanlı hâkimiyeti altına girdi (1724) ve **on beş yıl kadar** … 1739'da tekrar İranlılar'ın eline geçti."* |
| Selmâs, Merend, Culfa, Mâku | `d:` yok | — | — | 🟡 `selmas`, `merend` **ÖLÜ**; `maku` canlı ama metni çekilmedi. Antlaşma "Azerbaycan" diyor, bu dördü Azerbaycan'dadır — **ama şehir düzeyinde doğrulanmadan yazmıyorum.** |
| Sakkız, Senendec, Merîvan, Bîcâr, Mîyandoab | `d:` yok | — | — | 🟡 Antlaşma "İran Kürdistanı" diyor, beşi de oradadır. **Şehir düzeyinde TDV doğrulaması yapılmadı — kaynak yok.** |

> **Merkeze:** bu dokuz nokta için gereken şey ek araştırma değil, **bir karar**:
> antlaşmanın bölge adı ("Azerbaycan", "İran Kürdistanı") şehir düzeyine
> genişletilerek mi uygulanacak, yoksa her şehir ayrı ayrı TDV'de mi aranacak?
> Birincisi hızlı ama çıkarımdır; ikincisi doğru ama beş slug'ın ikisi ölü.
> **Ben çıkarımla veri yazmadım.**

---

## md.1 — ŞİRVAN/GÜRCİSTAN 1723 ENKLAVI

### Ölçüm — 1724-06-15 kesiti

O tarihte Osmanlı olan **22** nokta var ve Kafkasya'da yalnız **ikisi**:
**Tiflis** (41,7 N 44,8 D) ve **Şamahı** (40,6 N 48,6 D).

Aradaki her şey Osmanlı değil:
- **safevi:** Gence, Revan, Nahçıvan, Kabala, Ereş, Şâbüran, Şeki, Berde, Ordubad, Kuba
- **rusya:** Bakü, Derbend, Mahmudâbâd, Salyan

**Tiflis ↔ Şamahı arası ≈ 330 km** ve arada 14 yabancı nokta var. Yani Şamahı
gerçekten **enklav** — kullanıcı doğru görmüş.

### Ama bu bir HATA DEĞİL — sıralama meselesi

Oturum 2'nin kuralı "100 km üstü = gerçek sıçrama" der; burada mesele mesafe
değil **takvim**. Veride aradaki şehirler Osmanlı'ya **Şamahı'dan sonra** geçiyor:

| yerleşim | Osmanlı'ya geçiş |
|---|---|
| Şamahı | **1723-08-01** |
| Revan | 1724-09-28 |
| Nahçıvan | 1725-01-01 |
| Tebriz | 1725-08-04 |
| Gence, Berde, Şeki, Ereş, Kabala | 1725-09-12 |

TDV **İRAN**: *"Ruslar **1723**'te Derbend ve Bakü'yü ele geçirmişlerdi. **Kısa
bir süre sonra da** Osmanlılar Azerbaycan'a girdiler."* → giriş 1723 sonrası ve
**kademelidir.**

**Hüküm: harita 1724'te DOĞRU, enklav gerçek ve geçicidir.**
Kullanıcıya cevap: *"1724 yazında gerçekten öyleydi — Şamahı 1723 Ağustos'unda
alınmıştı, aradaki şehirler 1724 sonu ile 1725 Eylülü arasında alındı. 1725
sonunda boşluk kapanıyor."*

🟡 **Tek kusur:** Şamahı'nın `1723-08-01` tarihi ayın 1'i — gün belirsizliği
işareti. TDV dayanağı bu turda taranmadı; `sirvan` maddesinden teyit edilmeli.

---

## md.4 — BASRA'NIN İRAN İŞGALİ

### Ölçüm — 1777-06-15

| kayıt | durum | Basra'ya uzaklık |
|---|---|---|
| **Basra** (30,5 N 47,8 D) | `s: iran` (1776-04-16 → 1779-04-01) | — |
| Kürne | **OSMANLI** | **64,6 km** |
| Fâv | **OSMANLI** | **88,8 km** |
| Nâsıriye, Semâve, Ammâre | **OSMANLI** | daha uzak |

**Tek bir nokta** İran'a geçiyor, çevresindeki dördü Osmanlı kalıyor. İki komşu
da **100 km'nin altında** — Oturum 2'nin kuralına göre şüpheli bölge.

### Cevap: 🔴 **`isg:` örtüsü kullanılmalı — merkezin sezgisi doğru**

Kerim Han Zend'in yaptığı **fetih değil işgaldir**: Osmanlı nominal hakkını hiç
bırakmadı, üç yıl sonra şehir geri alındı. TDV BASRA'nın kaynakçası dönemi
adlandırırken bile **"Baṣra fî senevâti'l-miḥne (1775-1779)"** — *"Basra'nın
mihnet yılları"* — diyor; hânedan değişimi değil, bir sıkıntı dönemi.

| kayıt | mevcut değer | önerilen değer | slug | gerekçe |
|---|---|---|---|---|
| Basra | `d:` 1776-04-16'da kesiliyor, `s:[{f:"1776-04-16", t:"1779-04-01", d:"iran"}]` | **`d:` kesintisiz `1546-01-01 > 1914-11-22` olsun; işgal `isg:[{f:"1776-04-16", t:"1779-04-01", d:"iran"}]` yazılsın** | `kerim-han-zend`, `basra` | Nominal sahip Osmanlı kalır → 64,6 km'lik sahte kopukluk kapanır, petek deliği açılmaz; tarama İran'ı gösterir. Bosna örneğiyle aynı desen. |

⚠️ **İşgalin kapsamı** — kullanıcı *"verilen toprak parçası bu kadar küçük
olabilir mi"* diye soruyor. Ölçüm: veride yalnız Basra noktası etkileniyor, yani
harita işgali **şehirle sınırlı** gösteriyor. Kerim Han'ın harekâtı da bir şehir
kuşatmasıydı; Kürne ve Fâv'ın elde kalması makuldür. **Ama bunu TDV'den şehir
şehir doğrulamadım** — `kerim-han-zend` maddesi (CANLI) çekilmedi. Sıradaki tur.

🟡 **Tarih notu:** veri `1776-04-16` diyor, TDV kaynakçası dönemi **1775**-1779
diye anıyor. Kuşatma 1775'te başlayıp şehir 1776'da düşmüş olabilir — çelişki
olmayabilir, **doğrulanmadı.**

---

## md.5 — "BU ÜÇGEN"

**Ekran görüntüsü bende yok, konumu kesinleştiremedim.** Ama md.4'ün hemen
ardından geldiği için en güçlü aday şudur ve ölçtüm:

**Basra'nın peteği, 1776-1779 arasında çevresinde İran rengine boyanan tek nokta
olduğu için, Kürne (64,6 km kuzeybatı) ve Fâv (88,8 km güneydoğu) peteklerinin
arasına sıkışan bir kama oluşturuyor.** Şattülarap'ın başında, üç Osmanlı
komşusunun tam ortasında duran bir Voronoi hücresi geometrik olarak üçgen görünür.

Doğruysa **md.4'ün çözümü md.5'i de çözer**: `isg:` örtüsüne geçilince Basra
nominal olarak Osmanlı kalır, kama kaybolur, yerine tarama deseni gelir.

⚠️ **Bu bir hipotezdir, ölçülmüş teşhis değildir.** Kullanıcıdan ekran
görüntüsünün **tarihi ve yaklaşık konumu** istenirse kesinleştirebilirim.

---

## md.8 — VEHHÂBÎLER: MÜKERRER MADDE **BULUNDU** + HİCAZ'DAKİ OSMANLI PARÇASI

### A) Mükerrer madde — İKİSİNİN TAM METNİ (Oturum 2'nin girdisi)

**BİRİNCİ MADDE**
```js
{ t:"1803-05-15", k:"kayip", etiket:["ayaklanma","toprak-kaybi"],
  b:"Vehhâbîlerin Mekke ve Tâif'i ele geçirmesi",
  gun:"1803", yer:"Mekke ve Tâif, Hicaz",
  kisiler:"Suûd b. Abdülazîz, Şerif Gālib, III. Selim",
  d:"Önce Tâif'i alan Vehhâbî kuvvetleri, ardından Mekke'ye girerek türbeleri yıktı ve kendi anlayışlarına göre bir düzen kurdu; Şerif Gālib Cidde'ye çekilmek zorunda kaldı. Haremeyn'in hâmisi sıfatını taşıyan Osmanlı padişahı için bu, saltanatın meşruiyetini doğrudan sarsan bir darbeydi. Hac yollarının kapanması bütün İslâm dünyasında yankılandı ve İstanbul'u Mısır valisi Mehmed Ali'den askerî yardım istemeye mecbur bıraktı. Aynı tarihte elden çıkan diğer yerleşimler: Tâif.",
  kaynak:"vehhabilik" }
```

**İKİNCİ MADDE**
```js
{ t:"1806-02-01", k:"kayip", etiket:["toprak-kaybi","ayaklanma"],
  b:"Mekke'nin Vehhâbîlere kaybı",
  gun:"1806", yer:"Mekke, Hicaz",
  kisiler:"Suûd b. Abdülazîz, III. Selim",
  d:"Necid'de doğan Vehhâbî hareketi Suûd b. Abdülazîz döneminde Hicaz'a yöneldi; Tâif ve Medine'den sonra Mekke de teslim alındı. Türbeler yıkıldı, Osmanlı adına okunan hutbe kaldırıldı ve Şam ile Kahire'den gelen hac kafilelerinin yolu kesildi. Haremeyn'in hâmisi sıfatı padişahın meşruiyetinin temel dayanaklarından biri olduğu için bu kayıp, toprak kaybının ötesinde ağır bir siyasî darbe oldu; geri alınması yedi yıl sürecek ve Kavalalı Mehmed Ali Paşa'nın ordusuyla mümkün olacaktı.",
  kaynak:"vehhabilik" }
```

### Neden Oturum 2'nin mükerrer denetimi kaçırdı

Denetim ölçütü **±400 gün + Türkçe kök benzerliği, eşik 0,34**. Bu çift ölçütün
**ikisini birden** aşıyor:

1. **Aralık 1023 gün** — 400 günlük pencerenin iki buçuk katı.
2. **Başlıklar kök düzeyinde benzemiyor:** *"Vehhâbîlerin Mekke ve Tâif'i ele
   geçirmesi"* ↔ *"Mekke'nin Vehhâbîlere kaybı"*. Ortak kök yalnız **mekke** +
   **vehhâbî**; "ele geçirme" ile "kayıp" **zıt** kelimeler, benzerlik skorunu
   yukarı değil aşağı çekiyor.

> **Öneri (Oturum 2'ye):** mükerrer denetimine **`yer:` + `k:` üzerinden ikinci
> bir geçiş** eklensin. Bu çiftte `yer:` "Mekke" ve `k:` "kayip" **birebir
> aynı**. Aynı yer + aynı tür + aynı karşı taraf, başlık hiç benzemese bile
> mükerrer adayıdır. Pencere de 400 günden geniş olmalı.

### Hangisi doğru — TDV ne diyor

> *"1801'de Kerbelâ'ya gerçekleştirilen baskının ardından **1803-1805 yılları
> arasında Tâif, Mekke ve Medine ele geçirildi**."* — TDV **VEHHÂBÎLİK**

TDV **tek bir 1803-1805 penceresi** veriyor ve sırayı **Tâif → Mekke → Medine**
diye yazıyor. **1806'da ayrı bir Mekke fethi TDV'de YOK.**

**Sonuç: 1806-02-01 kaydı fazladır.** Üstelik `d:` metni *"Tâif ve Medine'den
sonra Mekke de teslim alındı"* diyerek TDV'nin sırasını da ters çeviriyor.

### 🔴 Haritanın kendisi bu çelişkiyi taşıyor — "iki kez aksiyon"un sebebi

| kayıt | `suud` dönemi başlangıcı |
|---|---|
| **Tâif** | **1803-05-15** |
| **Medine** | **1805-07-01** |
| **Mekke** | **1806-02-01** |

**1803-05-15 maddesinin başlığı "Mekke ve Tâif'i ele geçirmesi" ama o tarihte
haritada yalnız Tâif el değiştiriyor.** Mekke üç yıl sonra hareket ediyor.
Kullanıcının *"iki ayrı madde var ve haritada iki kez farklı yerlerde aksiyon
oluyor"* dediği şey tam olarak budur — ve **haklıdır.**

### Düzeltme satırları

| kayıt | mevcut değer | önerilen değer | slug | gerekçe |
|---|---|---|---|---|
| **kronoloji 1806-02-01** | "Mekke'nin Vehhâbîlere kaybı" | **SİL** | `vehhabilik` | TDV 1806'da ayrı bir Mekke fethi tanımıyor; 1803-05-15 kaydı olayı zaten anlatıyor. |
| **Mekke** | `v:` bitiş / `s: suud` başlangıç **1806-02-01** | **1803-05-15** (Tâif ile aynı gün) | `vehhabilik` | 1803-05-15 maddesinin hem başlığı hem metni Mekke'yi o tarihe koyuyor; harita ona uymuyor. Düzeltilince "iki kez aksiyon" tek aksiyona iner. |
| kronoloji 1803-05-15 | `t:"1803-05-15"` ama `gun:"1803"` | **karar merkezde** | `vehhabilik` | `t:` gün iddia ediyor, `gun:` alanı "1803" diyerek günün bilinmediğini itiraf ediyor. TDV yalnız "1803-1805 yılları arasında" diyor. İki alan birbiriyle çelişiyor. |
| kronoloji 1805-07-01 (Medine) | `t:"1805-07-01"` ama `gun:"1805"` | aynı kusur | `vehhabilik` | Aynı sınıf. |

### B) "Mekke, Medine, Tâif alındıktan sonra kalan ufak Osmanlı toprağı"
### → **CİDDE. Ve DOĞRU.** *(hatalar 11 md.1'in ikinci yarısı da budur)*

1808-06-15 kesiti, Hicaz:

```
suud    : Mekke, Medine, Tâif, Yenbu, Dir'iye, Riyad, Necid, Lahsa, Katîf, Cübeyl…
OSMANLI : Cidde (21,5 N 39,2 D)   ← kullanıcının gördüğü ufak parça
```

**Cidde ↔ Mekke = 68,9 km** — yani 100 km'nin altında bir kopukluk, Oturum 2'nin
kuralına göre "hata" sınıfına düşüyor. **Ama gerçektir:** Vehhâbîler Cidde'yi hiç
alamadı, Şerif Gālib oraya çekilip tutundu. Bunu projenin kendi kronoloji maddesi
de yazıyor: *"Şerif Gālib **Cidde'ye çekilmek zorunda kaldı**"* (1803-05-15
kaydının `d:` metni).

> 🔴 **Oturum 2'ye: bu, 100 km kuralının ölçülmüş bir KARŞI ÖRNEĞİDİR.**
> 68,9 km'lik kopukluk burada hata değil, kuşatılmış bir liman şehridir.
> Kural *"100 km altı = hata"* değil, ***"100 km altı = incelenmeli"*** diye
> yumuşatılmalı; **deniz erişimi olan noktalar muaf tutulmalı.** Cidde
> Kızıldeniz'den Osmanlı donanmasıyla besleniyordu — karadan bitişik olması
> gerekmiyor.

**Kullanıcıya cevap:** *"Bozukluk değil. O parça Cidde'dir. Vehhâbîler Mekke,
Medine ve Tâif'i aldı ama Cidde'yi alamadı; Şerif Gālib orada tutundu ve şehir
1813'e kadar Osmanlı elinde kaldı."*

---

## md.9 — SOHUM / ANAPA

### Cevap: **HATA DEĞİL, TARİHEN DOĞRU**

| kayıt | veri | 1815'te |
|---|---|---|
| Sohum | `d: 1578-08-09 > 1810-07-01`, sonra `rusya` | **Rusya'da** |
| Anapa | `d: 1781-01-01 > 1829-09-14`, sonra `rusya` | **Osmanlı'da** |

Kullanıcının gördüğü doğrudur ve sebebi bellidir: **Bükreş Antlaşması'nda (1812)
Kafkasya sınırı Kuban nehri olarak teyit edildi.** Anapa Kuban'ın batısındadır,
Sohum ise çok güneyde, Abhazya kıyısındadır. Anapa ancak **1829 Edirne
Antlaşması'yla** kalıcı olarak Rusya'ya geçti — veri bunu `1829-09-14` ile doğru
yazmış.

### 🟡 Ama Anapa'nın kaydı fazla sade — bir geçici işgal eksik

Veride Anapa **1781'den 1829'a kesintisiz Osmanlı.** TDV bunu bozan, **gün gün
tarihlenmiş** bir dönem veriyor:

> *"Savaş süresince Ruslar tarafından üç defa kuşatılan Anapa üçüncü kuşatma
> sonunda **26 Temmuz 1791**'de işgal edildi. Ancak **Yaş Antlaşması ile (10 Ocak
> 1792)** Kafkasya'da eski sınırlar kabul edildiğinden Osmanlı Devleti'ne geri
> verildi."* — TDV **ANAPA** (`anapa`, CANLI)

| kayıt | mevcut değer | önerilen değer | slug | gerekçe |
|---|---|---|---|---|
| Anapa | `d: 1781-01-01 > 1829-09-14` (kesintisiz) | `d:` ikiye bölünsün: `1781-01-01 > 1791-07-26` ve `1792-01-10 > 1829-09-14`; arası `s: rusya` **veya** `isg: rusya` | `anapa` | TDV iki tarihi de gün gün veriyor. `isg:` tercih edilirse Yaş'la iade edildiği için nominal sahiplik hiç değişmemiş sayılır — md.4'le aynı desen. |

⚠️ **1807 işgali DOĞRULANAMADI.** Mesajında "1807'de yine Rus, 1812'de iade"
dedin; TDV **ANAPA** maddesinde **"1807" hiç geçmiyor** (arattım, sonuç yok).
1791-1792 dönemi doğrulandı, **1807-1812 doğrulanmadı — uydurmadım.** Kaynağın
varsa bildir; yoksa sıradaki turda başka maddeden aranmalı.

---

# hatalar 16 — Özet

| # | Konu | Sonuç |
|---|---|---|
| md.2 | Urmiye / Nahçıvan | **Nahçıvan zaten doğru** · **Urmiye eksik, kullanıcı haklı** · ayrıca 9 nokta daha bölge hükmüne göre eksik (**karar bekliyor**) |
| md.1 | Şirvan 1723 enklavı | ✅ **Harita DOĞRU** — Şamahı 1723-08, aradakiler 1724 sonu–1725 Eylül; enklav gerçek ve geçici |
| md.4 | Basra işgali | 🔴 **`isg:` örtüsüne geçilmeli** — işgal, fetih değil; 64,6 km'lik sahte kopukluğu kapatır |
| md.5 | "Üçgen" | 🟡 **hipotez:** Basra'nın 1776-1779 İran peteği. md.4 çözülürse kendiliğinden kapanır. **Ekran görüntüsü gerek** |
| md.8 | Mükerrer Vehhâbî maddesi | 🔴 **BULUNDU** — 1806-02-01 fazla, silinmeli; Mekke'nin harita tarihi 1803-05-15 olmalı. İki metnin tamamı yukarıda |
| md.8 | Kalan Osmanlı toprağı | ✅ **CİDDE, ve DOĞRU** — Vehhâbîler alamadı *(hatalar 11 md.1'in ikinci yarısı da bu)* |
| md.9 | Sohum / Anapa | ✅ **TARİHEN DOĞRU** — Kuban sınırı. 🟡 1791-1792 Rus işgali eksik (TDV gün gün veriyor) |

**Oturum 2'ye iki girdi:**
1. Mükerrer denetimine `yer:` + `k:` üzerinden ikinci geçiş eklensin, pencere
   400 günden geniş olsun. (Vehhâbî çifti 1023 gün aralıklı ve başlıkları zıt.)
2. **Cidde, 100 km kuralının karşı örneğidir** — deniz erişimi olan noktalar
   muaf tutulmalı.
