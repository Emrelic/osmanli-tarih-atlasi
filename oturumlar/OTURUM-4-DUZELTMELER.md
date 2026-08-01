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

---
---

# DOĞU (A4) → Koordinatör — BASRA `y:` kararı, iki tarih, hayalet nokta listesi

Ölçüm 2026-07-31. `data/` altına **dokunulmadı.**
Kaynak: TDV **BASRA** (`basra`, CANLI, Osmanlı Dönemi bölümü — Yusuf Halaçoğlu)
ve TDV **KERİM HAN ZEND** (`kerim-han-zend`, CANLI — Rıza Kurtuluş, 2022).

---

## 1) 🔴 BASRA `y:` — KARAR: **`y:"savas"`**

### TDV iki anlatı vermiyor — bir DİZİ veriyor

Koordinatörün aktardığı iki alıntı rakip anlatılar değil, **aynı zincirin iki ayrı
halkası.** Maddenin tamamını okuyunca sıra şu:

| # | Tarih | Olay | Kademe |
|---|---|---|---|
| 1 | **1534** | *"Basra Kanûnî Sultan Süleyman'ın 1534 yılında Bağdat'ı aldığı sırada Osmanlı idaresine girdi. Kanûnî Bağdat'ta iken Basra hâkimi olan Râşid b. Megāmis bizzat gelerek itaatini bildirdi"* | itaat |
| 2 | **1538** | *"oğlu Mâni'i ve veziri Mîr Mehmed'i Edirne'de bulunan padişaha göndererek şehrin anahtarlarını teslim etti… Kanûnî de kendisi adına **hutbe okutulması ve sikke kestirilmesi şartıyla** Basra şehri ve çevresini **vilâyet adı altında Râşid'e iltizam etti**."* Ayrıca *"1538'den itibaren Basra'da basılan paralar üzerinde Kanûnî'nin adı görülmektedir."* | **tâbi / iltizam** |
| 3 | ~1540'lar | Râşid'in oğlu Mâni' yerini Benû Amman Şeyhi Yahyâ'ya bıraktı, *"Şeyh Yahyâ Osmanlı yönetimine **karşı tavır aldı**"* | **kopuş** |
| 4 | **26 Aralık 1545** | *"Bağdat Beylerbeyi **Ayas Paşa** Basra'nın alınmasına memur edildi. Ayas Paşa Musul sancak beyi Mehmed Bey'i **120 gemiyle** Fırat üzerinden harekete geçirdi, kendisi de karadan hareket ederek **müdafileri tesirsiz hale getirdi** ve 26 Aralık 1545'te Basra'ya girdi."* Bilâl Mehmed Paşa *"1 milyon akçe sâlyâne ile Basra'ya **ilk beylerbeyi** tayin edildi."* | **doğrudan idare, savaşla** |
| 5 | **1555** | *"Amasya Muahedesi ile bu durum İran tarafından da kabul edilmiş ve böylece Basra'nın hukuken Osmanlı Devleti'ne bağlılığı kesinlik kazanmıştır."* | teyit |

### Karar

Veride tartışma konusu olan dönem **`d:` (doğrudan idare) ve 1546-01-01'de
başlıyor** — yani zincirin **4. halkasını** modelliyor. O halka bir **askerî
harekâttır**: 120 gemi, karadan kuşatma, müdafilerin tesirsiz hale getirilmesi,
ardından ilk beylerbeyinin tayini.

> ## `y:"vassal"` → **`y:"savas"`**

`ilhak` **doğru değildir**: ilhak (Râşid'in kendi ayağıyla gelip anahtarları
teslim etmesi) 1538'de oldu ve **bozuldu**; 1545'teki şey yeniden fetihtir.

### ⚠️ Ama `y:"vassal"` yazan kişi hata yapmamış — EKSİK BİR DÖNEMİ işaret ediyor

`vassal` kelimesi oraya boşuna girmemiş: zincirin 2. halkası **gerçekten
tâbiliktir** (hutbe + sikke + iltizam = ders kitabı tâbilik). Sorun `y:`
alanının değeri değil, **o tâbiliğin veride hiç bulunmaması.**

```
veri:  s: safevi  1508-01-01 > 1546-01-01     ← Basra 1546'ya kadar SAFEVÎ
TDV :  "Basra ... 1534 yılında ... Osmanlı idaresine girdi"
       "1538'den itibaren Basra'da basılan paralar üzerinde Kanûnî'nin adı görülmektedir"
```

**12 yıllık bir çelişki.** Basra 1534-1545 arası haritada Safevî boyanıyor, oysa
TDV'ye göre Osmanlı tâbisiydi ve **Kanûnî adına sikke kesiyordu.**

| kayıt | mevcut değer | önerilen değer | slug | gerekçe |
|---|---|---|---|---|
| Basra | `s:[{f:"1508-01-01", t:"1546-01-01", d:"safevi"}]` | `s:` safevi dönemi **1534-12-04**'te bitsin; araya **`v:[{f:"1534-12-04", t:"1545-12-26", y:"ilhak"}]`** girsin | `basra` | TDV 1534'te Osmanlı idaresine girdiğini, 1538'den itibaren Kanûnî adına sikke kesildiğini yazıyor. `y:"ilhak"` — Râşid *"bizzat gelerek itaatini bildirdi"*, savaş yok. |

⚠️ **Başlangıç günü TDV'de yok** — madde yalnız "1534" diyor. `1534-12-04`
**doğrulanmış komşudan** alındı (OGRENILENLER §8): TDV *"Bağdat'ı aldığı sırada"*
diyor, Bağdat'ın veri tarihi `1534-12-04`. Kayıt yorumuna **"tarih Bağdat'tan
alındı, TDV yalnız '1534' diyor"** notu düşülmeli. **Karar merkezde** — bu ayrı
bir kalem, `y:` kararının parçası değil; istersen ayrı ele al.

---

## 2) İKİ TARİH ÇELİŞKİSİ

### 2a) Fetih: `1546-01-01` → **`1545-12-26`** ✅ net

TDV günü açıkça veriyor: *"…ve **26 Aralık 1545**'te Basra'ya girdi."*

| kayıt | mevcut | önerilen | slug |
|---|---|---|---|
| Basra `d:` başlangıcı | `1546-01-01` | **`1545-12-26`** | `basra` |

Verideki `1546-01-01` klasik "yıl biliniyor, gün bilinmiyor" damgası — ama gün
**biliniyor**, sadece bir yıl ileri yuvarlanmış. 6 günlük fark önemsiz görünür,
**ama yıl sınırını atlıyor**: harita fethi 1545'te değil 1546'da gösteriyor.

### 2b) İran işgali: 🔴 **koordinatörün çerçevesi düzeltilmeli — yıl DOĞRU**

Koordinatör *"veri 1776-04-16 ↔ TDV 1775-1779"* diye özetlemiş. Ölçtüm:
**"1775-1779" TDV'nin anlatısı değil, BASRA maddesinin kaynakçasındaki bir
makale başlığı** — Sâlih Muhammed el-Abîd, *"Baṣra fî senevâti'l-miḥne
(1775-1779)"*, yani "Basra'nın mihnet yılları". Bir bunalım devrinin akademik
çerçevesi; fethin tarihi değil.

TDV'nin **anlatı** metni **KERİM HAN ZEND** maddesindedir ve yılı net verir:

> *"**1776'da** Kerim Han'ın kardeşi **Sâdık Han** Basra'yı ele geçirdi. Bunun
> üzerine aynı yıl İran'a karşı savaş ilân edildi. 1777 Nisan-Mayıs aylarında bir
> Osmanlı kuvveti İran'a girip Sâdık Han'ı bozguna uğrattı… **Basra ise ancak
> Kerim Han'ın vefatından sonra yeniden Osmanlı idaresine alınabildi. 13 Safer
> 1193'te (2 Mart 1779)** attan düşerek öldüğünde…"*

**Sonuç: verideki 1776 ve 1779 YILLARI doğru. Yalnız GÜNLER kaynaksız.**

Yan düzeltme: şehri alan **Kerim Han değil, kardeşi Sâdık Han**'dır.

| kayıt | mevcut | önerilen | gerekçe |
|---|---|---|---|
| işgal başlangıcı | `1776-04-16` | **`1776-01-01`** | Yıl TDV'de var, **gün yok**. Kuralın uygulanacağı yer burası. |
| işgal bitişi | `1779-04-01` | **`1779-04-01` KALSIN** (ya da `1779-03-02`) | ⬇️ aşağıya bak |

### ⚠️ Kuralın kırıldığı yer — bitiş tarihine `YYYY-01-01` UYGULANMAMALI

Koordinatörün kuralı ("uydurma günü yıl başına indir") başlangıç için doğru, ama
**bitiş için burada yeni bir hata üretir**:

```
TDV: Basra "ancak Kerim Han'ın vefatından SONRA" geri alındı
     Kerim Han'ın ölümü: 2 Mart 1779   ← TDV bunu GÜN GÜN veriyor
kural uygulanırsa: 1779-01-01
                   ↑ Kerim Han'ın ölümünden İKİ AY ÖNCE — TDV'ye açıkça aykırı
```

> 🔴 **Genel kural önerisi:** `YYYY-01-01`'e indirme, **kaynak olayı yıl içinde
> bir güne göre kısıtlamıyorsa** güvenlidir. Kısıtlıyorsa (*"X'ten sonra"*,
> *"Y'nin ardından"*) yıl başı **kanıtlanabilir biçimde yanlıştır** ve uydurma
> günü bir uydurmayla değiştirmiş oluruz. Böyle durumlarda **kaynağın verdiği
> çıpaya** yaslanmalı — burada `1779-03-02`.
>
> Bu, ARABİSTAN'ın 1849 Yemen'de bulduğu tuzağın **ayna görüntüsüdür**: orada
> uydurma gün başka bir maddenin gerçek gününe çarpıyordu; burada uydurma günün
> "düzeltilmesi" kaynağın kendisine çarpıyor.

**Önerim:** başlangıç `1776-01-01`; bitiş `1779-04-01` olduğu gibi kalsın ve
kayıt yorumuna *"gün kaynaksız; TDV yalnız 'Kerim Han'ın vefatından (2 Mart 1779)
sonra' diyor"* notu düşülsün. Alternatif `1779-03-02` — **karar merkezde.**

📌 Hatırlatma: bu kayıt için asıl önerim hâlâ **`isg:` örtüsüne geçilmesidir**
(hatalar 16 md.4). İşgal olarak yazılırsa nominal sahip Osmanlı kalır, Kürne
(64,6 km) ve Fâv (88,8 km) ile arasındaki sahte kopukluk kapanır.

---

## 3) ~~🔴 HAYALET NOKTA — DOĞU BÖLGESİ TAM LİSTESİ~~ ❌ **GERİ ÇEKİLDİ**

> # ❌ BU BÖLÜM GEÇERSİZ — 2026-07-31'de geri çekildi
>
> **"Hayalet nokta" diye bir sorun yok. Motor `kur:`/`bit:`i 30 Temmuz'dan beri
> okuyor** (`b781c2c` — *"Motor kur:/bit: okuyor — 1,7 milyon km²lik hayalet
> toprak düzeltmesi"*).
>
> **Kodda doğruladım** (rapora değil, koda baktım):
> `arac/uret_petek.py:903-908`
> ```python
> def devir_kumesi(g):
>     """g tarihinde SAHNEDE OLMAYAN ama veride SAHİBİ YAZILI yerleşimler."""
>     return frozenset(
>         i for i, y in enumerate(YERLER)
>         if ((y.get("kur") and y["kur"] > g) or (y.get("bit") and y["bit"] <= g))
>         and _sahipli(y, g))
> ```
> Yani motor tam olarak benim "hayalet" dediğim kümeyi hesaplıyor ve o noktaları
> **sahneden çıkarıp** paylarını o gün var olan komşulara dağıtıyor
> (`uret_petek.py:1149`, `1202-1206`).
>
> **Hatanın kaynağı benim ölçüm yöntemimdi:** sahipliği `data/yerlesimler.js`'ten
> okudum, yani **verinin ne yazdığını** ölçtüm. Oysa soru **motorun ne çizdiğiydi.**
> Veride Nâsıriye'nin 1600'de `d:osmanli` yazması **doğrudur**; motor onu o gün
> haritaya koymuyor. İki ayrı şeyi ölçüp birini diğerinin yerine koydum.
>
> **Aşağıdaki 10 satırlık liste ve "motor sonrası sınama ölçütleri" tablosu
> KULLANILMAMALIDIR.** Kayıtlara dokunmamış olmam tek isabetli tarafıydı.
>
> ⚠️ Bir tespit ayakta kalıyor, çünkü kaynağı bu ölçüm değildi:
> **Şuşa 1752'de kuruldu**, dolayısıyla hatalar 16 md.2'de "1728'de Karabağ'da
> Osmanlı olmalı mıydı?" sorusuna verdiğim **hayır** cevabı geçerlidir — ve
> motorun `devir_kumesi`'i zaten Şuşa'yı 1728'de sahneye almıyor.
>
> **Kendime ders:** bir alanın ya da motorun *davranışı* hakkında hüküm
> vereceksem `YAPILACAKLAR.md`'ye veya başka bir oturumun raporuna değil,
> **koda** bakmalıyım. Bu turda üç oturum aynı bayat satıra dayanarak yanlış
> teşhis koydu; ben dördüncüsü olmayayım diye artık ölçümün kaynağını da
> yazıyorum: *ne okudum, nereden okudum.*

<details>
<summary>Geçersiz bölümün aslı (kayıt için saklandı, kullanılmayacak)</summary>


Kapsam: `lon 38-58 · lat 23-45` (Irak + İran + Kafkasya + Körfez) = **205 nokta**.
`kur:` taşıyan: **15**. Bunların **10'u kuruluşundan önce toprak boyuyor.**

⚠️ **Kayıtlara dokunmadım** — kök sebep motorda (`kur:`/`bit:` okunmuyor).
Bu liste motor borcu kapandıktan sonra **doğrulama listesi** olarak kullanılacak.

### Hayalet olanlar (10) — `kur:` > ilk boyama

| # | yerleşim | `kur:` | ilk boyadığı tarih | o tarihteki sahip | hayalet süre |
|---|---|---|---|---|---|
| 1 | **Ramâdi** | 1869-01-01 | 1281-01-01 | ilhanli | **588 yıl** |
| 2 | **Nâsıriye** | 1869-01-01 | 1281-01-01 | ilhanli | **588 yıl** |
| 3 | **Muhammere** | 1812-01-01 | 1281-01-01 | ilhanli | **531 yıl** |
| 4 | **Erâk (Sultânâbâd)** | 1808-01-01 | 1281-01-01 | ilhanli | **527 yıl** |
| 5 | **Şuşa** | 1752-01-01 | 1281-01-01 | ilhanli | **471 yıl** |
| 6 | **Buşehr** | 1734-01-01 | 1281-01-01 | ilhanli | **453 yıl** |
| 7 | **Senendec (Sine)** | 1636-01-01 | 1281-01-01 | ilhanli | **355 yıl** |
| 8 | **Bender Abbas (Gamrûn)** | 1622-05-01 | 1281-01-01 | ilhanli | **341 yıl** |
| 9 | **Ferahâbâd** | 1611-01-01 | 1281-01-01 | ilhanli | **330 yıl** |
| 10 | **Sultâniye** | 1305-01-01 | 1281-01-01 | ilhanli | **24 yıl** |

**Desen tek ve keskin:** onunun da ilk boyaması `1281-01-01` ve sahibi `ilhanli`.
Yani bu noktalara **projenin standart 1281 başlangıçlı zincir şablonu** uygulanmış,
`kur:` alanı sonradan eklenmiş ve zincirin başı hiç kırpılmamış. Elle tek tek
yapılmış bir hata değil, **şablonun sistematik yan etkisi** — bu yüzden motor
düzeltmesi doğru çözümdür, kayıt düzeltmesi değil.

### Hayalet OLMAYANLAR (5) — doğru yazılmış, karşılaştırma için

| yerleşim | `kur:` | ilk boyama | not |
|---|---|---|---|
| Vladikavkaz | 1784-01-01 | 1784-01-01 | ✅ birebir |
| Kuveyt | 1716-01-01 | 1716-01-01 | ✅ birebir |
| Krasnovodsk | 1869-01-01 | 1869-01-01 | ✅ birebir |
| Doha (Katar) | 1825-01-01 | 1871-01-01 | ✅ kuruluştan **46 yıl sonra** boyuyor — güvenli taraf |
| Abu Dabi | 1761-01-01 | 1820-01-08 | ✅ kuruluştan **59 yıl sonra** — güvenli taraf |

Bu beşi geç kuruluşlu ve zincirleri **`kur:` tarihinden başlatılmış**. Yani doğru
desen veride zaten var; onunda uygulanmamış.

### `bit:` — doğuda **0 kayıt**

`lon 38-58 · lat 23-45` kutusunda `bit:` taşıyan hiçbir nokta yok. Yani
"ölümünden sonra boyayan" ters sınıf bu bölgede **mevcut değil**; motor borcu
kapandığında doğuda yalnız `kur:` tarafı sınanacak.

### Motor düzelince beklenen davranış — sınama ölçütü

| yerleşim | motor `kur:` okuduğunda | sınanacak tarih |
|---|---|---|
| Ramâdi, Nâsıriye | 1869 öncesi **boyamamalı** | 1600-06-15 · 1800-06-15 |
| Muhammere | 1812 öncesi boyamamalı | 1600-06-15 · 1750-06-15 |
| Erâk | 1808 öncesi boyamamalı | 1750-06-15 |
| Şuşa | 1752 öncesi boyamamalı | 1595-06-15 · **1728-06-15** |
| Buşehr | 1734 öncesi boyamamalı | 1600-06-15 · 1728-06-15 |
| Senendec | 1636 öncesi boyamamalı | 1595-06-15 |
| Bender Abbas | 1622-05 öncesi boyamamalı | 1595-06-15 |
| Ferahâbâd | 1611 öncesi boyamamalı | 1595-06-15 |
| Sultâniye | 1305 öncesi boyamamalı | 1290-06-15 |

📌 **Şuşa'ya ayrıca dikkat:** hatalar 16 md.2'de Şuşa'yı "1728'de Karabağ'da
Osmanlı olmalı mıydı?" diye sorup **hayır** demiştim, gerekçem şehrin 1752'de
kurulmuş olmasıydı. Bu liste o gerekçeyi doğruluyor — **ve aynı zamanda Şuşa'nın
1728 haritasında hiç görünmemesi gerektiğini** gösteriyor. Motor borcu kapanınca
o nokta kendiliğinden düşecek.

</details>

---

## DOĞU (A4) — bu turun özeti

| # | Kalem | Karar |
|---|---|---|
| 1 | Basra `y:` | **`y:"savas"` — kararımı koruyorum.** `vassal`ın yeni tanımıyla (*edinim biçimi*) yeniden baktım; `d:` dönemi **1545 harekâtından 6 gün sonra** başlıyor, yani onun edinimi harekâttır. Gerekçe §1'de genişletildi |
| 1b | Basra'nın eksik tâbiliği | 🔴 **Yeni bulgu:** 1534-1545 arası veride `safevi`, TDV'ye göre Osmanlı tâbisi ve Kanûnî adına sikke kesiyor. `v:` dönemi eklenmeli. **Karar merkezde** |
| 2a | Fetih tarihi | `1546-01-01` → **`1545-12-26`** (TDV günü veriyor; mevcut değer yıl sınırını atlıyor) |
| 2b | İran işgali | **Yıl doğru** — "1775-1779" TDV'nin anlatısı değil, kaynakçadaki makale başlığı. TDV KERİM HAN ZEND **1776** diyor. Başlangıç günü kaynaksız → `1776-01-01`. **Bitişe kural uygulanmamalı** (aşağı bak) |
| 2c | ⚠️ Kural düzeltmesi | `YYYY-01-01`'e indirme, kaynak olayı yıl içinde bir çıpaya bağlıyorsa **yeni hata üretir**. Basra'nın geri alınışı TDV'ye göre **2 Mart 1779'dan sonra**; `1779-01-01` kanıtlanabilir biçimde yanlış olurdu |
| 3 | ~~Hayalet nokta~~ | ❌ **GERİ ÇEKİLDİ.** Sorun yok — motor `kur:`/`bit:`i `b781c2c`'den beri okuyor, `devir_kumesi()` o noktaları sahneden çıkarıyor (`uret_petek.py:903`). **Ben veriyi ölçtüm, oysa soru motorun ne çizdiğiydi.** Liste kullanılmamalı |

---

## 📌 EK — `y:"vassal"` tanımı geldikten sonra Basra kararının yeniden sınanması

Koordinatör `y:"vassal"` = **"tâbiyet/itaat yoluyla EDİNİM"** diye tanımladı ve
`js/app.js:782-785`'te değerin tanınıp tanınmadığını kodda doğruladım — tanınıyor:

```js
var YONTEM_SIMGE = {
  savas: "⚔", kusatma: "♜", antlasma: "📜",
  vassal: "🤝", ilhak: "🗝", miras: "👑"
};
```

Yani `vassal` geçerli bir `y:` değeri; ilk mesajdaki "geçersiz" nitelemesi
yanlışmış. **Buna rağmen Basra için kararım değişmiyor**, çünkü tanım soruyu
şuna indirgiyor: *"bu `d:` dönemi NASIL edinildi?"*

```
d: dönemi başlangıcı   1546-01-01   (önerim: 1545-12-26)
Ayas Paşa'nın girişi   1545-12-26
                       ↑ altı gün. Dönem harekâtın ertesinde başlıyor.
```

Râşid b. Megāmis'in *"bizzat gelerek itaatini bildirmesi"* **1534/1538**'dir ve o
edinim **1545'ten önce bozulmuştur** — TDV: Şeyh Yahyâ *"Osmanlı yönetimine karşı
tavır aldı."* 1545'teki şey bir itaat kabulü değil, kaybedilmiş bir yerin geri
alınmasıdır: *"Bağdat Beylerbeyi Ayas Paşa Basra'nın **alınmasına memur edildi**…
Musul sancak beyi Mehmed Bey'i **120 gemiyle** Fırat üzerinden harekete geçirdi,
kendisi de karadan hareket ederek **müdafileri tesirsiz hale getirdi**."*

⚠️ **İki halka ikinci kez birbirine karıştı** — bunu ilk raporda da işaretlemiştim.
`vassal` (1538 itaati) ile `savas` (1545 harekâtı) rakip okumalar değil, **arka
arkaya gelen iki ayrı edinimdir** ve aralarında bir **kayıp** vardır.

**Üç seçenek karşısında:**

| değer | uygun mu | gerekçe |
|---|---|---|
| `savas` | ✅ **evet** | 120 gemi, karadan harekât, müdafilerin tesirsiz hale getirilmesi, ardından ilk beylerbeyinin tayini |
| `vassal` | ❌ bu dönem için hayır | İtaat 1538'de oldu ve bozuldu; 1545'te teslim olan bir tâbi yok |
| `ilhak` | ❌ hayır | 🗝 kansız katılımı anlatır; TDV askerî harekât tarif ediyor |
| `kusatma` | ❌ hayır | TDV "kuşatma" demiyor; *"girdi"* diyor |

### Ve `vassal` kelimesi boşa yazılmamış — asıl yeri şurası

Yeni tanım, ilk raporda §1b olarak bildirdiğim bulguyu **çürütmüyor, güçlendiriyor**:
1534-1545 arası Basra veride `safevi` görünüyor, oysa TDV'ye göre Osmanlı tâbisi
ve **1538'den itibaren Kanûnî adına sikke kesiyor.** Eksik olan dönem tam da
`y:"vassal"`ın ders kitabı örneği:

```js
v: [{ f:"1534-12-04", t:"1545-12-26", y:"vassal" }]
```

Yani kayıttaki `vassal` kelimesi **gerçek bir olayın fosili** — yanlış gözde
duruyor. `d:`'den `v:`'ye taşınırsa hem alan doğru yere oturur hem 12 yıllık
tarih boşluğu kapanır.

⚠️ `1534-12-04` günü TDV'de **yok** (madde yalnız "1534" diyor); Bağdat'ın veri
tarihinden alındı, kayıt yorumuna not düşülmeli. **Karar merkezde.**

---
---

# ARAŞTIRMA DOĞU → Koordinatör — VLADİKAVKAZ

# ✅ CEVAP: `kasitli_bosluk: true` — **yüksek güven**, "belirsiz" değil

Ölçüm 2026-07-31. `data/`ya yazılmadı.

**Kaynaklar** (üçü de `<title>` ile CANLI doğrulandı):
**TDV OSETLER** (`osetler`) · **TDV KABARTAYLAR** (`kabartaylar`) ·
**TDV KAFKASYA** (`kafkasya`).

⚠️ **Yönlendirme tuzağı bu soruda belirleyici oldu.** Denediğim ilk slug'ların
dokuzu ölü çıktı — `kabartay`, `terek`, `daryal`, `vladikavkaz`, `osetya`,
`cerkes`, `kirim-hanligi`, `alan-osetler`, `kuzey-kafkasya`. "TDV'de Kafkasya
kabileleri yok" diye kapatsaydım soruyu cevapsız bırakacaktım. TDV aramasıyla
doğru adlar bulundu: **`kabartaylar`** · **`osetler`** · **`cerkezler`**
(hepsi çoğul). Asıl maddeler bunlar ve ikisi soruyu doğrudan cevaplıyor.

---

## Soru 1 — 1784 öncesi Terek yukarı havzasında fiilî devlet otoritesi var mıydı?

# **HAYIR.** Kabile bölgesiydi.

TDV **OSETLER**, dört ayrı cümlede:

> **(a)** *"Bundan dolayı **Osetler'in kontrolündeki** Daryal Geçidi'ne
> müslümanlar Dâr-ı Alan adını vermiştir."*
> → Geçit bir devletin değil, **Osetlerin** kontrolünde.

> **(b)** *"Moğol istilâsına uğrayan, uzun yıllar **Çerkezler'e vergi vermek
> zorunda kalan** Osetler'in tarihinde önemli bir dönüm noktasını **Küçük
> Kaynarca Antlaşması ile Rus hâkimiyetine girmeleri** oluşturur."*
> → 1774 öncesi tek bağ **vergi**; ve "dönüm noktası" olarak anılan şey
> 1774'tür. Yani ondan önce Oset bölgesi hiçbir devletin idaresinde değil.

> **(c)** *"Böylece Osetler bu dönemde **Vladikafkas çevresine yayılma imkânı
> elde ettiler**…"*
> → 🔴 Osetler **Vladikavkaz çevresine ancak 1774'ten SONRA yayılabilmiş.**
> 1784 öncesi orada yerleşik bir halk otoritesi bile yok, devlet otoritesi
> bir yana.

> **(d)** *"Ruslar, 1784'te Terek ırmağının doğduğu yerde Vladikafkas'ı kurdular
> ve **bölgeyi ilhak etmek yolunda önemli bir adım attılar**."*
> → Kuruluş, ilhakın kendisi değil **ilhaka doğru bir adım**. Kaynak bölgenin
> o tarihte henüz ilhak edilmemiş olduğunu açıkça söylüyor.

**Kabartay beyleri · Gürcistan · Kırım · İran — dördü de elenir.** TDV bu
bölgeyi anlatırken hiçbirini idareci olarak anmıyor; andığı tek ilişki
Çerkezlere ödenen **vergidir**, ki bu idare değil haraçtır.

---

## Soru 2 — Kabartay'ın statüsü; Vladikavkaz'ın toprağı ona sayılır mı?

# **HAYIR** — ve gerekçe beklediğimden güçlü çıktı.

TDV **KABARTAYLAR**:

> *"**Belgrad Antlaşması (1739)** Kabartaylar'ın yaşadığı bölgeyi **tarafsız bir
> ülke haline getirince** Osmanlı Devleti ile Rusya arasında bir **tampon bölge**
> haline geldiler. Bunun ardından **Küçük Kaynarca Antlaşması (1774)**
> Kabartaylar'ı Rusya ile birleştirdi."*

🔴 **1739-1774 arası Kabartay'ın kendisi antlaşmayla tarafsız ilân edilmiş bir
tampon bölgedir** — yani hiçbir devletin toprağı değildir. Kendisi devletsizken
100 km ötedeki dağlık bir vadiye egemenlik devredemez.

Ayrıca Kabartay'ın **kendi yurdu ova**dır: *"Orta Kafkasya'daki **Terek ve Kuma
nehirlerinin kollarının suladığı geniş bölgede** yaşayan Kabartaylar…"* —
Vladikavkaz ise Daryal boğazının dağ ağzındadır. Oset-Kabartay ilişkisi de
toprak idaresi değil, OSETLER maddesindeki **vergi** ilişkisidir.

> **Sonuç:** Kabartay ne 1739-1774 arası (tarafsız tampon), ne öncesinde
> (Osetlerden yalnız vergi alan komşu) Vladikavkaz'ın toprağını taşıyabilir.

---

## Soru 3 — Daryal geçidi kimin elindeydi; geçidi tutmak toprağı yönetmek miydi?

# Geçit **Osetlerin** elindeydi. Ve tutmak yönetmek değildi — geçit zaten geçilmiyordu.

> *"**Osetler'in kontrolündeki** Daryal Geçidi'ne müslümanlar Dâr-ı Alan adını
> vermiştir."* (Alanlar = Osetlerin ataları.)

Devletlerin geçitle teması **anlık ve geçici**:
> *"735-736 yıllarında Emevî kumandanlarından Mervân b. Muhammed'in… Kafkasya
> seferinde Osetler'le de savaştığı, **bir aralık** Daryal Geçidi'ni ele
> geçirdiği bilinmektedir."*
> → VIII. yüzyılda, "bir aralık". Bir sefer epizodu, idare değil.

🔴 **Ve asıl belirleyici cümle:**
> *"Osmanlı casuslarının raporlarına göre **ulaşıma pek elverişli olmayan geçit
> 1783'lerde yapılan tamir ve inşa çalışmalarıyla asker sevkedilebilecek hale
> getirildi**."*

**1783'e kadar geçitten asker geçirilemiyordu.** Asker geçiremediğiniz bir
boğazın çevresindeki dağlık araziyi yönetiyor olamazsınız. Geçit, 1784'ten önce
bir **idare mevkii** değil, bir **engel**di; Ruslar onu önce inşaatla açtılar,
ertesi yıl kaleyi kurdular. Sıra bile bunu söylüyor: **yol (1783) → kale (1784)
→ ilhak (sonra).**

### Karşı sınama: 1784'ten sonra bile otorite kurulamadı

> *"Ruslar'ın kontrol çabaları ve **halktan vergi istemeleri Osetler'in
> direnişiyle karşılaştı**. İsyan Osetya'nın Tagaur bölgesinde ortaya çıktı,
> liderliğini de Dudariko Ahmedov üstlendi. Ancak Ahmedov **1802 Temmuzunda**
> Ruslar karşısında yenilgiye uğradı… **1804'te isyan yeniden başladı.**"*

Kaleyi kurmuş, yolu açmış, ordusu olan bir imparatorluk **yirmi yıl** vergi
toplayamıyor. 1784 öncesinde bir devletin oraya fiilî otorite kurmuş olması
bu tabloyla bağdaşmaz.

---

## Motorun ölçümü neden %62,8 çıktı — ve bu neden tutarlı

Peteğin çevresinin yalnız %62,8'inin tek sahiple ortak olması bir **kusur
işareti değil, teşhisin kendisi.** Vladikavkaz'ın çevresi 1784 öncesinde
gerçekten çok taraflı bir kabile kuşağıdır: kuzeybatıda Kabartay (1739-1774
tarafsız tampon), güneyde Gürcistan, doğuda Çeçen-İnguş vadileri, ortada
vergi veren ama geçidi kendi tutan Osetler. **Tek bir sahibe %90 oranında
yaslanmaması, tek bir sahibi olmadığı içindir.**

> Yani otomatik eşiğin altında kalması, elle konan "kasıtlı" etiketini
> **çürütmüyor — doğruluyor.** Motorun kendi etiketine düşük güven notu düşmesi
> ihtiyatlıydı; kaynak o güveni yükseltiyor.

---

## 📌 YAN BULGU — sorulmadı ama aynı kaynaktan çıktı ve veriyle çelişiyor

| kayıt | mevcut değer | TDV ne diyor | slug |
|---|---|---|---|
| **Kabartay (Nalçik)** | `s: kirim` **1281-01-01 → 1774-07-21**, sonra `rusya` | *"**Belgrad Antlaşması (1739)** Kabartaylar'ın yaşadığı bölgeyi **tarafsız bir ülke haline getirince** … **tampon bölge** haline geldiler."* Ayrıca daha önce: *"Osmanlılar Kabartaylar'ı önce **himayeleri**, sonra da **doğrudan yönetimleri** altına aldılar."* | `kabartaylar` |

İki ayrı sorun:
1. **1739-1774 arası `kirim` yazılamaz** — antlaşmayla tarafsız ilân edilmiş bir
   bölge hiçbir devletin toprağı değildir. Bu pencere **sahipsiz** olmalı, yani
   Kabartay da Vladikavkaz'la aynı sınıftan bir **kasıtlı boşluk** adayıdır.
2. TDV, 1739 öncesi Kabartay üzerindeki hâkimiyeti **Kırım'a değil doğrudan
   Osmanlı'ya** atfediyor ("himaye" sonra "doğrudan yönetim"). `kirim` savunulabilir
   (Kırım Osmanlı tâbisidir) ama TDV'nin ifadesiyle birebir örtüşmüyor.

⚠️ Bu benim sorum değildi ve **ölçümünü tamamlamadım** — tarihleri gün gün
çıkarmadım. Ayrı bir kalem olarak işaretliyorum; istersen sıradaki turda ölçerim.
Vladikavkaz kararını **etkilemiyor**: Kabartay 1739-1774 tarafsızsa da,
öncesinde Osmanlı/Kırım tâbisiyse de, Vladikavkaz'ın dağlık toprağını
taşımıyor (Soru 2).

---

# ÖZET

```
kasitli_bosluk: true
```

| soru | cevap | dayanak |
|---|---|---|
| 1 · Fiilî devlet otoritesi? | **Yok.** Kabile bölgesi | OSETLER: geçit "Osetler'in kontrolünde"; tek bağ Çerkezlere **vergi**; dönüm noktası **1774** |
| 2 · Kabartay'ın toprağı sayılır mı? | **Hayır** | KABARTAYLAR: 1739-1774 **tarafsız tampon bölge**; kendi yurdu **ova**; Osetlerle ilişki vergi |
| 3 · Daryal kimin? Tutmak yönetmek mi? | **Osetlerin.** Hayır | OSETLER: 1783'e kadar geçit **"asker sevkedilemez"** hâlde; 1784 kuruluşu "**ilhak yolunda bir adım**"; 1802-1804 isyanları |

**Güven: yüksek.** "Belirsiz" demiyorum — kaynak dördü de (Kabartay, Gürcistan,
Kırım, İran) elemekle kalmıyor, bölgenin 1784'te bile henüz ilhak edilmemiş
olduğunu açıkça yazıyor. `true` hem ihtiyatlı taraf hem doğru taraf.

---
---

# ARAŞTIRMA DOĞU → Koordinatör — YENİ ÜRGENÇ · KRASNOVODSK + emsal kararı

Ölçüm 2026-07-31. `data/`ya yazılmadı.

```
Vladikavkaz    kasitli_bosluk: true    (önceki turda verildi, DEĞİŞMEDİ — aşağıda sınandı)
Yeni Ürgenç    kasitli_bosluk: false
Krasnovodsk    kasitli_bosluk: false
```

---

# 🔴 ÖNCE: ÜÇÜNCÜ TUZAK ÇEŞİDİ — `<title>` DOĞRULAMASI YETMİYOR

Bu turda yeni bir tuzak ölçtüm ve **doğrudan bu soruyu cevapsız bırakabilirdi.**

| slug | `<title>` | gövde |
|---|---|---|
| `urgenc` | **"ÜRGENÇ - TDV İslâm Ansiklopedisi"** ✅ | 🔴 **BOŞ** — yalnız altbilgi metni |
| `harezm` | **"HÂREZM - TDV İslâm Ansiklopedisi"** ✅ | 🔴 **BOŞ** — çapraz gönderme kabuğu |
| `harizm` | "HÂRİZM - TDV İslâm Ansiklopedisi" | ✅ tam madde |

`urgenc` ve `harezm` **HTTP 200 döndürüyor, `<title>` doğru madde adını taşıyor,
"Arama - TDV" değil** — yani CLAUDE.md §4'ün ölü-slug sınamasını **geçiyorlar.**
Ama gövdede madde metni yok; bunlar `bk. HÂRİZM` tipi **çapraz gönderme
kabuklarıdır.** `slugpar.py` ikisini de CANLI işaretledi.

> **Şu ana kadar üç tuzak var:**
> 1. **Ölü slug** — `<title>` = "Arama - TDV…" (CLAUDE.md §4)
> 2. **Yönlendirme** — başka maddeye gider (OGRENILENLER §20)
> 3. 🆕 **Boş kabuk** — `<title>` doğru, **gövde yok**
>
> **Önerdiğim ölçüt:** slug doğrulaması `<title>`e ek olarak gövdede
> **`Kopyalama metni`** damgasını arasın. Gerçek maddelerin hepsinde var,
> kabuklarda yok. Tek satırlık bir kontrol:
> ```python
> canli = (not baslik.startswith('Arama')) and ('Kopyalama metni' in gövde)
> ```
> Bunu `slugpar.py`'ye ekledim; araç sahibi Oturum 6 kalıcı hale getirebilir.

---

# 1) YENİ ÜRGENÇ · `kur:1646` → **`kasitli_bosluk: false`**

## Cevap: 1646 öncesi orası çöl DEĞİL, sulanan Hârizm vahasının GÖBEĞİ

Sorunun doğru sorulduğunu teyit edeyim — mesele "Hîve yönetiyor muydu" değil,
"su var mıydı". TDV **HÂRİZM** (`harizm`, CANLI, gövdeli) iki cümleyle kapatıyor:

> **(a) Şehrin nereye kurulduğu:**
> *"1645'ten sonra Ürgenç ve Kâs, **Hîve'nin kuzeydoğusunda** Yeni Ürgenç ve
> Yeni Kâs adlarıyla yeniden kuruldu."*

Veriyle birebir örtüşüyor: Hîve (41,378 K · 60,364 D) → Yeni Ürgenç
(41,550 K · 60,633 D) = **kuzeydoğu, 29 km.** Şehir çöle değil, **başşehrin
yanı başına** kurulmuş.

> **(b) Oranın ne olduğu:**
> *"Kırgız bozkırları ile Kızılkum çölünü sağında, Üstyurt düzlüğü ile Karakum
> çöllerini solunda bırakarak Aral gölüne doğru **bir yelpaze şeklinde açılan
> Amuderya**, bölge halkı için **geniş kum denizleri arasında bir hayat kaynağı**
> olmuştur… **Nehirden sulanan arazi** tahıl ve pamuk üretimiyle bağcılık için
> çok elverişlidir."*

Ve TDV'nin Ortaçağ Hârizm şehir listesi bu 29 km'lik şeridi tıka basa dolduruyor:
*"Kâs, Gürgenç, Hîve, **Hezâresb**, Dergân, Berkan, Kerder, Zemahşer, Cigerbend,
Sedver, Kerderânhâs, Zerdûh…"* — **Hezâresb = veri kaydındaki Hazârasp**, Yeni
Ürgenç'e 44 km. Yani nokta, **ikisi de 1281'den beri kesintisiz sahipli** iki
ortaçağ vaha şehrinin tam arasında duruyor.

## Nehir hikâyesi kararı çürütmüyor — tersine çeviriyor

> *"Amuderya'nın **1576'da mecrasını değiştirip Hazar denizi yerine Aral gölüne
> dökülmesi**…"* · Seyfi Çelebi bunu *"Hârizm için umumi bir felâket"* sayıyor.

Suyun **gittiği** yer Aral'dır; Hîve-Hazârasp şeridi Amuderya'nın Aral'a giden
aşağı mecrasındadır. Yani 1576 değişimi bu şeridi **kurutmadı**, susuz kalan
**kuzeybatıdaki eski Gürgenç**'tir — veride **Köhne Ürgenç (Gürgenç)**, Yeni
Ürgenç'e **151 km** uzakta ve zaten ayrı bir kayıt. Halk kuruyan kuzeybatıdan
sulanan güneydoğuya taşındı; "yeni şehir" yeni bir **toprak** değil, aynı vahada
yeni bir **yerleşim**dir.

## %49,1 kararsızlığının sebebi bulundu — ve zararsız

Peteğin çevresi iki komşu arasında bölünüyor: **Hîve 29 km · Hazârasp 44 km.**
Hiçbiri %90'a ulaşamıyor. **Ama ikisinin sahiplik zinciri BİREBİR AYNI:**

```
Hîve      : cagatay 1281→1379 · timurlu 1379→1502 · buhara 1502→1512 · hive 1512→1740 · iran 1740→1747 · hive 1747→1920
Hazârasp  : cagatay 1281→1379 · timurlu 1379→1502 · buhara 1502→1512 · hive 1512→1740 · iran 1740→1747 · hive 1747→1920
```

> **Kararsızlık "hangi devlet" değil, "hangi komşu" sorusundadır — ve iki komşu
> aynı cevabı veriyor.** Devir hangisine yapılırsa yapılsın boyanacak renk
> aynıdır. Ölçüm eşiği burada güvenle göz ardı edilebilir.

---

# 2) KRASNOVODSK · `kur:1869` → **`kasitli_bosluk: false`**

## Cevap: fiilî otorite vardı ve veri onu ZATEN yazmış — 64 km ötede

TDV **MANGIŞLAK** (`mangislak`, CANLI):

> *"XVI. yüzyılın başında Hârizm'de kurulan **Hîve Hanlığı Mangışlak'ı da kendine
> bağlamayı başardı.** Mangışlak Türkmenleri'nin **ancak bir asır sonra nisbeten
> bağımsızlıklarını kazanabildiği**… görülmektedir."*

🔴 **Bu cümle, verideki mevcut zincirin birebir kaynağıdır.** Krasnovodsk'un en
yakın komşusu **Çeleken (64 km)** ve ondan sonraki **Garabogaz (174 km)**, ikisi de:

```
altinorda 1281→1502 · buhara 1502→1512 · hive 1512→1600 · turkmen 1600→1869 · rusya 1869→
                                          ↑                 ↑
                          "XVI. yy başı Hîve bağladı"   "ancak bir asır sonra
                                                         nisbeten bağımsızlık"
```

Yani Hazar doğu kıyısının 1869 öncesi sahipliği bu projede **zaten ölçülmüş,
kaynaklanmış ve yazılmış.** Krasnovodsk'u kasıtlı boşluk yapmak, projenin 64 km
ötede savunduğu sahipliğin ortasına **delik açmak** olur.

Noktanın kendisi de meskûn kuşakta. TDV **TÜRKMENLER** (`turkmenler`, CANLI):
> *"**Hazar denizinin doğu kıyısında** ve Mangışlak'ın güneyindeki **Balhan
> dağları yöresinde Ersarı oymağı** bulunuyordu."*

Krasnovodsk (40,02 K · 52,96 D) tam olarak Balhan/Balkan dağları yöresi, Hazar
doğu kıyısı, Mangışlak'ın güneyidir. **Boş kıyı değil, Ersarı yurdudur.**

## Ve evet — sorduğun nokta seyrekliği burada VAR (BALKAN vakasının aynısı)

```
Krasnovodsk → Çeleken          64 km
            → Garabogaz       174 km
            → Uzboy           217 km   (SAHİPSİZ)
            → Üstyurt batı    ~259 km  (SAHİPSİZ)
```

Bir komşu 64 km'de, sonraki **174 km'de**. Petek hem **meskûn kıyı şeridini** hem
**iç çölü** temsil etmek zorunda kalıyor. %62,8 buradan geliyor: sınırın bir
kısmı Çeleken'le (turkmen/hive zinciri), bir kısmı **SAHİPSİZ çöl noktalarıyla**
(Uzboy, Üstyurt, Karakum) ortak.

> **Yani kararsızlık "sahip kim" değil, "kıyı mı çöl mü" sorusundadır.**
> Ve cevap: nokta **kıyıdadır** — Rus donanma üssü olarak seçilmesinin sebebi de
> budur. `false` verildiğinde iç çöl yine boş kalır, çünkü Uzboy · Karakum ·
> Üstyurt kendi petekleriyle orayı zaten tutuyor. **Taşma riski sınırlı.**

⚠️ **Tek çekincem:** kıyı şeridini daha iyi temsil edecek bir ara nokta olsaydı
(Krasnovodsk ile Garabogaz arasındaki 174 km'ye), devir çok daha temiz olurdu.
Bu bir **veri seyrekliği** kalemidir, karar kalemi değil — ayrıca not ediyorum.

---

# 3) 🔴 EMSAL KARARI — göçebe boy bölgesi "yönetilen toprak" sayılır mı?

## Cevap: **soru yanlış eksende sorulmuş.** Ayrım göçebe/yerleşik değil, **meskûn/gayrimeskûn**.

Ve bunu ben icat etmiyorum — **veri bu kararı zaten vermiş**, üstelik aynı kutunun
içinde iki farklı şekilde, ve ikisi de tutarlı:

### A) Meskûn boy bölgesi → SAHİP YAZILIR, boyun kendi kimliğiyle

| yerleşim | dönem | kimlik |
|---|---|---|
| Çeleken · Garabogaz | 1600→1869 | **`turkmen`** |
| Dihistan · Nesâ · Ebîverd | 1860→1881 | **`turkmen`** |
| Merv | 1860→1884 | **`turkmen`** |
| Kabartay (Nalçik) | 1281→1774 | `kirim` |
| Lahsa · Katîf · Cübeyl · Ukayr | 1670→1795 | **`benihalid`** |
| Necid · Riyad · Dir'iye · Şakrâ | 1744→1818 | **`suud`** · 1891→1902 **`sammar`** |

Proje göçebe/kabile konfederasyonlarına **kendi devlet kimliğini vermiş** ve
toprağı onlara yazmış. `turkmen`, `benihalid`, `suud`, `sammar` — dördü de
yerleşik-devlet değil, dördü de sahip olarak kabul edilmiş.

### B) Gayrimeskûn çöl/bozkır → SAHİPSİZ

Uzboy · Karakum · Üstyurt (batı) · Üstyurt (doğu) · Rub'ul Hâlî kuzeyi ·
Nefud çölü · Hâil · Necid içi (1744 öncesi) · Hadramut · Mukalla.

### Ölçüt bu:

> ## Toprakta **insan** var mıydı, ve o insanların **adı konmuş bir siyasî çatısı** var mıydı?
> - **İkisi de evet** → sahip yazılır; gerekirse boyun kendi kimliği açılır (`turkmen` gibi).
>   Yerleşik olması gerekmez. Göçebelik sahipsizlik değildir.
> - **İnsan yok** (çöl içi, buzul, yüksek dağ) → `kasitli_bosluk: true`.
> - **İnsan var ama siyasî çatı yok / antlaşmayla tarafsız** → `true`.
>   Vladikavkaz ve 1739-1774 Kabartay bu üçüncü halde.

### Doğrulama: emsal, kaynağa çarpıyor mu?

Koordinatörün andığı **Kızılarvat** emsali (Kopet Dağ vaha şeridi
`iran/safevi/…`, `turkmen` ancak 1860'ta) bu ölçütle **tam tutarlı** — ve
TDV **TÜRKMENLER** 1860 tarihinin *neden* orada olduğunu da veriyor:

> *"Teke başbuğu Kuşid Han… **1860'ta toplarla mücehhez Kaçar ordusuna karşı
> parlak bir zafer kazandı.**"*

Yani `1860-01-01` keyfî değil; Kaçar idaresinin fiilen kırıldığı yıl. Aynı
madde 1881'i de veriyor: *"Ruslar **1881**'de Türkmen elini imparatorluklarına
kattılar"* — verideki `1881-01-30`'un karşılığı. **Emsal kaynaklı, uydurma değil.**
⇒ Vaha şeridi için de Hazar kıyısı için de aynı ölçüt işliyor: fiilî otorite
kimdeyse o yazılıyor, kimsede değilse boş kalıyor.

---

# 4) Emsali kendi önceki kararıma uyguladım — VLADİKAVKAZ sınandı

Dürüst olmak gerekirse bu emsal, önceki turda verdiğim `true`yu **çürütebilirdi**:
Osetler de bir boydur, boy bölgesi sahipli sayılıyorsa Vladikavkaz da sahipli
olmalıydı. Sınadım — **çürütmüyor, keskinleştiriyor:**

> TDV **OSETLER**: *"Böylece Osetler bu dönemde **Vladikafkas çevresine yayılma
> imkânı elde ettiler**"* — ve bu, **Küçük Kaynarca'dan (1774) sonrası** için
> söyleniyor.

Yani **o noktada 1774 öncesinde Osetler bile oturmuyordu.** Vladikavkaz A
maddesine (meskûn boy bölgesi) değil, **B maddesine** (insan yok) düşüyor.
Ayrıca 1739-1774 arası tek komşusu Kabartay antlaşmayla **tarafsız** ilân
edilmişti — üçüncü hal.

> `true` kararı **ayakta**, ve artık "kaynak dördünü de elemiyor" gibi olumsuz
> bir gerekçeye değil, **olumlu bir ölçüte** dayanıyor: orada o tarihte kimse
> yaşamıyordu.

---

# ÖZET

| yerleşim | karar | TDV künyesi | tek cümle |
|---|---|---|---|
| **Vladikavkaz** `kur:1784` | **`true`** | OSETLER (`osetler`) · KABARTAYLAR (`kabartaylar`) | Osetler oraya **1774'ten sonra** yayıldı; 1783'e kadar geçitten asker bile geçmiyordu, tek komşusu 1739-1774 tarafsız tampondu |
| **Yeni Ürgenç** `kur:1646` | **`false`** | HÂRİZM (`harizm`) | *"Hîve'nin kuzeydoğusunda"* kuruldu — 29 km; sulanan vahanın göbeği, çöl değil; iki komşusunun zinciri **birebir aynı** olduğu için devir riski sıfır |
| **Krasnovodsk** `kur:1869` | **`false`** | MANGIŞLAK (`mangislak`) · TÜRKMENLER (`turkmenler`) | Hîve XVI. yy başında Mangışlak'ı bağladı, Türkmenler bir asır sonra bağımsızlaştı — **verideki `hive 1512→1600 · turkmen 1600→1869` zinciri bu maddenin birebir karşılığı**; nokta Ersarı yurdunda |

**Emsal:** göçebelik sahipsizlik değildir. Ölçüt **meskûn mu + adı konmuş siyasî
çatısı var mı**. Proje bunu zaten uyguluyor (`turkmen` · `benihalid` · `suud` ·
`sammar`), ben yalnız kuralı yazıya döktüm.

**Yan kalemler:**
- 🆕 **Üçüncü slug tuzağı** (boş kabuk) — `Kopyalama metni` damgası ölçütü, Oturum 6'ya
- 🟡 **Veri seyrekliği:** Krasnovodsk ↔ Garabogaz arası **174 km**, ara nokta yok
- 🟡 Önceki turdan devreden: **Kabartay (Nalçik)** 1739-1774 `kirim` yazılı ama
  TDV'ye göre **tarafsız tampon** — ölçümü tamamlanmadı

---
---

# YER DİZİNİ (U4) → DOĞU (A4) — üç çözülmemiş `yer:` değeri

Ölçüm 2026-07-31. `data/`ya yazılmadı. Üçü **aynı sınıftan değil**:

```
Kût     → nokta VAR ("Kût el-Amâre"). Ad tutarsızlığı, eksik nokta değil.
Serav   → nokta VAR ("Sarâb").        Ad tutarsızlığı, eksik nokta değil.
Çıldır  → 🔴 nokta YOK ve GEREKİYOR.   Harita 27 yıl yanlış boyuyor.
```

Tarama tüm yerleşim dosyalarında yapıldı (`yerlesimler.js` + afrika + avrupa +
asya + ortaasya2 = **1555 kayıt**).

---

## 1) Kût → **eksik nokta değil, üç dosyada üç ayrı yazım**

Kayıt var: **`Kût el-Amâre`** — `yerlesimler.js`, 32,5125 K · 45,8189 D.
Eşleşme başarısız çünkü `yer:` alanı **"Kût, Irak"** yazıyor; virgülden ayrılınca
"Kût" kalıyor ve bu, "Kût el-Amâre"nin **öneki**, tam eşleşmesi değil.

Aynı yer projede **üç ayrı adla** geçiyor — asıl bulgu bu:

| dosya | yazım |
|---|---|
| `data/yerlesimler.js` | **Kût el-Amâre** |
| `data/olaylar*.js` → `yer:` | **Kût, Irak** (1916-04-29 "Kûtülamâre Zaferi") |
| `data/savaslar.js` → `ad:` | **Kûtülamâre** |
| **TDV** (`kutulamare`, ✅ CANLI) | **KÛTÜL'AMÂRE** |

**Önerim:** TDV'nin biçimine hizalansın.

| kayıt | mevcut | önerilen | slug |
|---|---|---|---|
| `olaylar` 1916-04-29 `yer:` | `"Kût, Irak"` | `"Kûtülamâre, Irak"` | `kutulamare` |
| `yerlesimler.js` `ad:` | `"Kût el-Amâre"` | `"Kûtülamâre"` — ⚠️ **karar merkezde**, ad değişimi `m:` alanlarını ve dizinleri kırabilir; yalnız `yer:`i düzeltmek de yeter | `kutulamare` |

⚠️ **Bu bir "eksik nokta" değil, ölçüm yönteminin ürettiği yanlış pozitiftir.**
Tarayıcıya **önek eşleşmesi** eklenirse bu sınıf kendiliğinden düşer.

---

## 2) Serav → **eksik nokta değil, parantez içi ayrıştırılamamış**

Kayıt var: **`Sarâb`** — `yerlesimler.js`, 37,9408 K · 47,5364 D.
`yer:` alanı **"Serav (Serâb), Azerbaycan"** yazıyor. Virgülden ayrılınca
"Serav (Serâb)" kalıyor; parantez sökülmediği için "Sarâb"a ulaşamıyor.

📌 **Kaydı yazan kişi zaten aynı yer olduğunu biliyordu** — parantez içine ikinci
yazımı bunun için koymuş. Ayrıştırıcı parantezi görmüyor, o kadar.

Üç yazım aynı şehirdir: **Serav ~ Serâb ~ Sarâb** (Doğu Azerbaycan, Tebriz ile
Erdebil arasında). 1618-09-26 **Serav Antlaşması** bu şehirde imzalandı ve
verideki `Sarâb` kaydı o tarihte Safevî'de — tutarlı (`d:` dönemleri
1585-1603 ve 1725-1730, 1618 ikisinin arasında).

⚠️ **TDV doğrulaması YAPILAMADI:** `serav` · `sarab` · `serab` **üçü de ÖLÜ.**
Şehrin TDV maddesi yok. Kimlik tespiti coğrafya ve projenin kendi kaydına
dayanıyor, TDV'ye değil — **bunu böyle işaretliyorum.**

| kayıt | mevcut | önerilen | kaynak |
|---|---|---|---|
| `olaylar` 1618-09-26 `yer:` | `"Serav (Serâb), Azerbaycan"` | `"Sarâb, Azerbaycan"` | 🟡 TDV maddesi yok; veri içi kimlik |

**Alternatif ve daha iyi çözüm:** ayrıştırıcı parantez içeriğini **ikinci aday**
olarak denesin. O zaman `yer:` metni bozulmadan çözülür ve okuyucu her iki
yazımı da görmeye devam eder. Bu sınıf tek başına birkaç kayıt daha kurtarabilir.

---

## 3) 🔴 Çıldır → **GERÇEK EKSİK. Ve harita 1551-1578 arası yanlış boyuyor.**

### Bölge kararı: **üstleniyorum.** Çıldır eyaleti Ahıska merkezlidir ve Ahıska,
Kars, Ardahan, Batum zaten benim ölçüm kutumda.

### İlk ölçüm "nokta gerekmiyor" diyordu — TDV bunu çürüttü

Salt mesafeye baksaydım kapatacaktım:

```
Çıldır (41,133 K · 43,133 D) → Ardahan  36,2 km   OSM 1551-01-01 → 1878-07-13
                             → Ahıska   58,0 km   OSM 1578-08-01 → 1829-09-14
                             → Kars     59,1 km   OSM 1534-06-01 → 1878-07-13
```

Ardahan 36 km ötede ve **"1551-01-01 Ardahan ve Çıldır havzasının alınması"**
maddesiyle aynı tarihi taşıyor. Yani görünüşte Çıldır'ın toprağı Ardahan'ın
peteğinde doğru renkle duruyor. **Öyle değilmiş.**

TDV **ÇILDIR EYALETİ** (`cildir-eyaleti`, ✅ CANLI):

> *"**1551'de** ise Erzurum Beylerbeyi İskender Paşa **Ardanuç ve Ardahan
> yöresini alarak** Ahılkelek ve Ahıska civarına kadar ilerledi. Böylece Atabeglik
> toprakları **Çıldır bölgesine kadar** Osmanlı hâkimiyetine girmiş oldu.
> **Buna karşılık Çıldır, Ahılkelek ve Tümük** Osmanlılar'dan yüz çevirip Şah
> Tahmasb'ın safına geçen **II. Keyhusrev'in elindeydi.**"*

> *"**1574**'teki Kaheti seferinden dönüşü sırasında, [Şah Tahmasb] Hırtıs,
> **Çıldır**, Ahıska, Posof bölgelerini … alıp … **Mahmud Han'a vermişti.**"*

> *"**9 Ağustos 1578**'de Osmanlı kuvvetlerinin galibiyetiyle sonuçlanan Çıldır
> Savaşı'nın hemen ardından Atabeg ülkesinin geri kalan kısımlarının fethi
> tamamlanmış oldu."*

### 🔴 Sonuç: 1551'de alınan **Ardahan'dır, Çıldır DEĞİL**

Kaynak bunu *"buna karşılık"* diye açıkça karşıtlık kurarak söylüyor. Çıldır
1551'de Osmanlı dışında kaldı ve ancak **1578-08-09**'da alındı — **27 yıllık
fark.** Ardahan'ın peteği bugün Çıldır'ın toprağını yutuyor ve onu **1551'den
itibaren Osmanlı boyuyor.** Bu tam olarak CLAUDE.md §2'nin tarif ettiği hata,
üstelik TDV'den gün gün tarihlenmiş hâli.

### Önerilen kayıt

| kayıt | mevcut | önerilen | slug | gerekçe |
|---|---|---|---|---|
| **Çıldır** | **YOK** | yeni nokta (aşağıda) | `cildir-eyaleti` | 1551-1578 arası Ardahan'ın peteğine emiliyor ve yanlış renkte |

```js
{ ad:"Çıldır", tur:"kale", lat:41.133, lon:43.133, g:0, k:0, m:"Ahıska",
  s:[{f:"1281-01-01", t:"1574-01-01", d:"gurcistan"},
     {f:"1574-01-01", t:"1578-08-09", d:"safevi"},
     {f:"1878-07-13", t:"1918-05-25", d:"rusya"}],
  d:[{f:"1578-08-09", t:"1878-07-13"}, {f:"1918-05-25", t:"1923-10-29"}] }
```

**Her alanın dayanağı ayrı ayrı:**

| alan | dayanak | güven |
|---|---|---|
| `1578-08-09` Osmanlı başlangıcı | TDV: *"9 Ağustos 1578'de … Çıldır Savaşı"* — **gün gün** | ✅ yüksek |
| `1281-1574 gurcistan` | TDV: *"Safevî nüfuzu altındaki **Atabeg meliklerinin** elinde"*; Atabeglik (Samtshe) Gürcü. Ardahan · Kars · Ahıska da 1281'den fetihe kadar `gurcistan` | ✅ komşularla tutarlı |
| `1574-1578 safevi` | TDV: Şah Tahmasb 1574'te alıp Mahmud Han'a verdi. ⚠️ **gün yok**, `YYYY-01-01` sözleşmesi | 🟡 yıl sağlam, gün yok |
| `1878-07-13` / `1918-05-25` | ⚠️ **TDV'den DEĞİL** — Ardahan'dan alındı (36 km, aynı sancak). Çıldır bugün Ardahan ilidir | 🟡 komşudan çıkarım, kayıt yorumuna not düşülmeli |
| `lat/lon` | ⚠️ **TDV koordinat vermiyor.** Çıldır ilçe merkezi | 🟡 |
| `m:"Ahıska"` | TDV: Çıldır eyaletinin merkezi Ahıska | ✅ |

⚠️ Mükerrer sınaması yapıldı: **3 km içinde başka nokta yok** (en yakın Ardahan
36,2 km) — CLAUDE.md §11 kuralı sağlanıyor.

### 🔴 Ve aynı kaynaktan çıkan İKİNCİ kusur — mevcut madde yanlış

```js
{ t:"1551-01-01", b:"Ardahan ve Çıldır havzasının alınması", yer:"Ardahan, Çıldır" }
```

TDV'ye göre 1551'de alınan **Ardanuç ve Ardahan**'dır; Çıldır o tarihte
Keyhusrev'in elindeydi. **Maddenin başlığı ve `yer:` alanı Çıldır'ı yanlış
tarihe yazıyor** — ve büyük ihtimalle Çıldır noktasının hiç açılmamış olmasının
sebebi de bu: madde "alındı" dediği için kimse ayrı bir zaman çizgisine
ihtiyaç duymamış.

| kayıt | mevcut | önerilen | slug |
|---|---|---|---|
| `olaylar` 1551-01-01 `b:` | "Ardahan ve **Çıldır** havzasının alınması" | "**Ardanuç ve Ardahan** yöresinin alınması" | `cildir-eyaleti` |
| aynı kayıt `yer:` | `"Ardahan, Çıldır"` | `"Ardahan, Ardanuç"` | " |

Çıldır'ın alınışı zaten **1578-08-09 "Çıldır Zaferi"** maddesinde var; oraya
ait olması gereken şey oradadır.

### 🟡 Yan bulgu — Ahıska'da muhtemelen aynı boşluk

TDV, 1574'te Şah Tahmasb'ın **Ahıska'yı da** Mahmud Han'a verdiğini yazıyor.
Veride Ahıska `1281-01-01 → 1578-08-01 gurcistan`, yani **1574-1578 Safevî
dönemi yok.** Ayrıca Ahıska'nın Osmanlı başlangıcı `1578-08-01`, TDV'nin verdiği
Çıldır Savaşı tarihi ise `1578-08-09` — **8 gün önce.**

⚠️ **Ölçümünü tamamlamadım**, ayrı kalem olarak işaretliyorum. Çıldır kararını
etkilemiyor.

---

# ÖZET

| yer | hüküm | iş |
|---|---|---|
| **Kût** | ✅ nokta var (`Kût el-Amâre`) — **yanlış pozitif** | `yer:` → `"Kûtülamâre, Irak"`; TDV `kutulamare` CANLI. Tarayıcıya **önek eşleşmesi** eklenirse bu sınıf düşer |
| **Serav** | ✅ nokta var (`Sarâb`) — **yanlış pozitif** | `yer:` → `"Sarâb, Azerbaycan"`; ⚠️ TDV maddesi **yok** (`serav`/`sarab`/`serab` üçü de ölü). Tarayıcıya **parantez ayrıştırması** eklenirse bu sınıf düşer |
| **Çıldır** | 🔴 **gerçek eksik, nokta gerekiyor** | Harita 1551-1578 arası Çıldır'ı yanlış boyuyor (Ardahan'ın peteğinden). Kayıt önerisi + `1551-01-01` maddesinin başlık düzeltmesi yukarıda |

📌 **Yöntem notu YER DİZİNİ'ne:** üç adayın **ikisi ölçüm yönteminin ürünüydü.**
Tarayıcıya iki kural eklenirse çözülme oranı ölçüm yapmadan yükselir:
1. **önek eşleşmesi** (`Kût` → `Kût el-Amâre`)
2. **parantez içeriğini ikinci aday say** (`Serav (Serâb)` → `Serâb` → `Sarâb`)

Kalan gerçek eksikleri bana yollamaya devam et — üçte biri bile gerçek çıksa
değer, çünkü Çıldır vakası 27 yıllık bir boyama hatasıydı ve hiçbir denetim
görmüyordu (Değişmez 1 delik arar, bu **fazla** boyama).

---

## ⚠️ EK — ARABİSTAN'ın uyarısı Çıldır önerisine uygulandı (Değişmez 2 sınaması)

Uyarı yerinde geldi. Önerdiğim kaydın **dört kırılmasını** kronolojiye karşı
ölçtüm; **üçü temiz, biri açık.**

| kırılma | tip | en yakın madde | fark | durum |
|---|---|---|---|---|
| **1578-08-09** | `d:` Osmanlı başlangıcı | **"Çıldır Zaferi — doğu savaşı başladı"** | **0 gün** | ✅ |
| **1878-07-13** | `d:` bitiş → `rusya` | "Berlin Antlaşması" | **0 gün** | ✅ |
| **1918-05-25** | `d:` yeniden | "Elviye-i Selâse: Kars ve Ardahan'ın geri alınışı" | **0 gün** | ✅ |
| **1574-01-01** | `s:` gurcistan → safevi | "Tunus'un kesin fethi" | **236 gün** | 🔴 **AÇIK** |

### Kevkebân vakasının aynısı ÇIKMADI — ama başka bir şey çıktı

ARABİSTAN'ın uyardığı kusur (madde tarihi ≠ gerçek el değiştirme) Çıldır'da
**yok**: TDV *"9 Ağustos 1578"* diyor, mevcut madde `1578-08-09`, **fark sıfır.**

Açık olan, benim **eklemeyi önerdiğim** 1574 dönemi. Ve iki kat sinsi:
`s:` → `s:` geçişi olduğu için **Değişmez 2'nin ölçüm komutu bunu HİÇ GÖRMEZ**
(daha önce Gülistan 1813 vakasında bildirdiğim kör nokta). Yani denetim temiz
raporlarken kullanıcı, Çıldır'ın renk değiştirdiği gün listede
**"Tunus'un kesin fethi"** görecekti.

### Önerim: 1574 dönemini YAZMA — `gurcistan` 1578-08-09'a kadar sürsün

```js
s:[{f:"1281-01-01", t:"1578-08-09", d:"gurcistan"},
   {f:"1878-07-13", t:"1918-05-25", d:"rusya"}]
d:[{f:"1578-08-09", t:"1878-07-13"}, {f:"1918-05-25", t:"1923-10-29"}]
```

Üç gerekçe:
1. **Tarih gün düzeyinde yok** — TDV yalnız "1574" diyor; `1574-01-01`
   sözleşmedir, iddia değil.
2. **Olay zaten sınır içi bir el değişimi.** TDV, 1574 öncesini de *"**Safevî
   nüfuzu altındaki** Atabeg melikleri"* diye tarif ediyor; Şah Tahmasb'ın
   Çıldır'ı alıp yerli Varaza Bey'in müslüman olan oğlu **Mahmud Han**'a vermesi
   bir devletten devlete devirden çok **aynı nüfuz alanı içinde yönetici
   değişimi**. `gurcistan` → `safevi` yazmak olanı abartır.
3. **Bir madde açmadan yazılırsa denetimin göremediği bir delik açılır.**
   Kapsam disiplini de bunu destekliyor: 1574'te Osmanlı toprağı değişmiyor,
   yani bu olay Osmanlı kronolojisinin konusu değil.

**Alternatif (karar merkezde):** 1574 dönemi illâ yazılacaksa **önce maddesi
yazılmalı** — ama o madde Osmanlı'nın taraf olmadığı bir Safevî-Gürcü
işlemini anlatacağı için kapsam dışı kalır. Ben yazmamayı öneriyorum;
nüansı **kayıt yorumuna** düşmek yeterli:
`// 1574'te Şah Tahmasb Çıldır'ı alıp Mahmud Han'a verdi (TDV cildir-eyaleti);
// Safevî nüfuzu 1574 öncesinde de vardı, ayrı dönem açılmadı.`

---

### 🔴 Ama aynı sınamada MEVCUT bir kayıtta ARABİSTAN'ın tarif ettiği kusur çıktı

**Ahıska'nın Osmanlı başlangıcı `1578-08-01`.** TDV ÇILDIR EYALETİ ise Çıldır
Savaşı'nı **9 Ağustos 1578**'e koyuyor ve *"savaşın **hemen ardından** Atabeg
ülkesinin geri kalan kısımlarının fethi tamamlanmış oldu"* diyor.

> Yani veride **Ahıska, onu Osmanlı'ya kazandıran savaştan sekiz gün ÖNCE**
> Osmanlı oluyor. Nedensellik ters.

Değişmez 2 bunu yakalamaz — 1578-08-01'e 8 gün mesafede "Çıldır Zaferi" maddesi
var, ölçüt sağlanıyor. Ama **sıralama yanlış**: kullanıcı zaman çubuğunu
ilerletince önce Ahıska'nın rengi değişiyor, sonra onu açıklayan madde geliyor.

| kayıt | mevcut | önerilen | slug |
|---|---|---|---|
| Ahıska `d:` başlangıcı | `1578-08-01` | **`1578-08-09`** (Batum · Tiflis · Sohum ile aynı gün) | `cildir-eyaleti` |

📌 Destekleyici: Batum, Tiflis ve Sohum zaten **`1578-08-09`** taşıyor. Ahıska
tek başına 8 gün erken duruyor — büyük ihtimalle "Ağustos 1578" bilgisinin
ayın 1'ine yuvarlanmasından. **Düzeltilirse hem TDV'ye hem komşularına uyar.**

⚠️ Önceki raporumda Ahıska için ayrı bir kalem daha bırakmıştım (1574-1578
Safevî dönemi). Bu ikisi **aynı kayda** dokunuyor, birlikte ele alınmalı — ve
1574 için verdiğim karar (yazma) Ahıska için de geçerlidir.

---
---

# DOĞU (A4) → Koordinatör — İran doğusu · Afganistan · Sind · Doğu Türkistan

# 🔴 SAHİPLİK YAZMADIM — ÇÜNKÜ 17 NOKTANIN 16'SININ ZİNCİRİ ZATEN YAZILI

Ölçüm 2026-07-31. `data/`ya yazılmadı.

Verdiğin 17 noktayı **beş yerleşim dosyasının hepsinde** (1555 kayıt) taradım.
Ölçümün ("41'i hiç sahiplik kaydı taşımıyor") **canlı dosya kümesine karşı
doğru** — ama sebebi kayıtların yazılmamış olması değil:

| nokta | dosya | zincir |
|---|---|---|
| Nesâ · Ebîverd · Merv | **`yerlesimler.js`** ✅ CANLI | ilhanli→iran→timurlu→safevi→iran→**turkmen 1860**→**rusya 1881/1884** — tam |
| Karakum | `yerlesimler.js` ✅ CANLI | **kasten boş** (çöl; Uzboy · Üstyurt ile aynı sınıf) |
| Aşkabad | `yerlesimler_ortaasya2.js` ⚠️ merge dışı | `kur:1881-01-30` → rusya |
| Kâbil · Gazne · Kandehar · Peşâver · Attock · Multan · Şikârpûr · Karaçi · Tatta · Haydarâbâd · Kaşgar · Yarkent | **`yerlesimler_asya.js`** ⚠️ merge dışı | **hepsi tam zincirli** |

Örnek — Kandehar, senin "defalarca el değiştirdi" dediği kayıt, **zaten yazılmış**:
```
cagatay 1281 → timurlu 1370 → babur 1522-09-06 → safevi 1537 → babur 1595
→ safevi 1622-06-22 → babur 1638 → safevi 1649-02-22 → iran 1709-04-21
→ afgan-durrani 1747-06-20 → afganistan 1826
```
Sekiz el değiştirme, altısı **gün hassasiyetinde**. Oturum 13 bu işi yapmış.

> **Ben bu 14 kaydı yeniden yazsaydım Oturum 13'ün dosyasıyla çakışacaktım** —
> KOORDINASYON.md §1'in tam olarak yasakladığı şey. Onun yerine **neden
> görünmediklerini** ölçtüm.

---

## Üç somut engel — üçü de KODDA doğrulandı (rapora değil koda baktım)

### 1) `GIRDI_DOSYALARI` — `arac/girdi.py:108`

```python
GIRDI_DOSYALARI = [
    "yerlesimler.js",           # çekirdek — Osmanlı ve komşuları
    ...
```
`yerlesimler_asya.js` **listede yok.** Ve `girdi.py`'nin kendi yorumu (satır
21-24) sebebini zaten yazmış:

> *"data/yerlesimler_asya.js  344 nokta — **98 devlet kimliği renkler.py'de YOK**,
> tamamı **62°D'nin doğusunda**, harita penceresi dışı"*

### 2) `renkler.py` — benim 17 noktamın istediği **14 kimliğin 14'ü de tanımsız**

Ölçtüm:

| tanımsız (14) | tanımlı (8) |
|---|---|
| `babur-imparatorlugu` · `afgan-durrani` · `afganistan` · `sih-imparatorlugu` · `ingiliz-hindistani` · `delhi-sultanligi` · `multan-langah` · `sind` · `mogulistan` · `yarkent-hanligi` · `cungar` · `qing-hanedani` · `yakub-beg` · `cin-cumhuriyeti` | `cagatay` · `timurlu` · `safevi` · `iran` · `buhara` · `turkmen` · `rusya` · `ingiltere` |

Kimliği tanımsız nokta **boyanmaz** — dosya merge edilse bile bölge renksiz
delik olur. DSATUR dengesi Oturum 16'nın işi; ben renk atamıyorum.

### 3) `BOLGE = box(-12, 1.5, 62, 62)` — `arac/uret_petek.py:43`

17 noktanın **12'si 62°D'nin doğusunda** (Kandehar 65,71 → Yarkent 77,24).
Pencere açılmadan çizilmezler.

---

# 🔴 KULLANICININ ŞİKÂYETİNİN GERÇEK SEBEBİ — ölçüldü, ve nokta eksikliği DEĞİL

*"İran'ın yarısı görünmemesi gözü kanatıyor."* Ölçüm:

```
En doğudaki CANLI nokta : Zerenc (Sîstan)  61,86°D
BOLGE kutusunun doğu sınırı :               62,00°D
İran'ın gerçek doğu sınırı  :             ~63,3°D
```

> **Pencere hiçbir canlı noktayı dışarıda bırakmıyor — son noktanın 0,14° doğusunda
> GEOMETRİYİ KESİYOR.** İran, gerçek sınırına 1,3° kala **cetvelle çizilmiş dik bir
> meridyen boyunca** kırpılıyor; Sîstan-Belûcistan çıkıntısı tamamen dışarıda kalıyor.

Ve İran'ın doğusu **nokta bakımından fakir değil**:

```
lon 55-63 · lat 25-36  →  22 canlı nokta, sahiplik kaydı BOŞ olan: 0
(Kirman, Bem, Bîrcend, Kâin, Zerenc, Çâhbahâr, Bempûr, Hâş, Cîruft, Sircân…)
```

> **Sonuç: İran için çözüm nokta eklemek değil, `BOLGE` kutusunun doğu kenarını
> açmaktır.** ~64°D'ye çekmek İran'ın tamamını kapatır ve **hiçbir yeni kimlik
> gerektirmez** — o 22 noktanın hepsi `ilhanli/iran/timurlu/safevi` taşıyor,
> dördü de `renkler.py`'de tanımlı.

📌 Bu, `uret_petek.py:912`'deki "SERBEST KENAR" notunun tarif ettiği şikâyetin
(hatalar 15 md.17, *"çölde cetvelle çizilmiş sınır"*) **aynı sınıfı** — orada
sahipli/sahipsiz kenarıydı, burada pencere kenarı.

## Önerdiğim sıra (CLAUDE.md §6'nın üç adımına uygun)

| adım | iş | kimlik gerekir mi | kazanç |
|---|---|---|---|
| **1** | `BOLGE` doğu kenarı **62 → 64** | ❌ **hayır** | **İran'ın tamamı** kapanır; kullanıcının şikâyeti biter |
| **2** | `renkler.py`'ye 14 kimlik (Oturum 16) | ✅ | — |
| **3** | `yerlesimler_asya.js`'i `GIRDI_DOSYALARI`'na al + `BOLGE` **64 → 78** | — | **Afganistan · Sind · Doğu Türkistan** açılır |

⚠️ **Adım 1 tek başına yapılabilir ve risksizdir.** Adım 3'ü adım 2'den önce
yapmak, `girdi.py`'nin uyardığı "renksiz delik" hâlini üretir.

---

# 📌 SANA DÜŞEN TEK GERÇEK ARAŞTIRMA SORUSU: KAŞGAR'IN OSMANLI BAĞI

## Önce üç düzeltme — sorunun kendisinde

| senin verdiğin | TDV ne diyor |
|---|---|
| "Yâkub **Bey**" | **Yâkub Han** |
| "**1873**'te tâbiiyet arz etti" | **1870** — anlaşma ve elçi aynı yıl |
| "hutbe Osmanlı adına okundu" | doğru, ama **1872**'den itibaren |

🔴 **VE BİR TUZAK:** `yakub-bey` slug'ı **CANLI, gövdesi dolu** — ama madde
**Germiyanoğlu Yâkub Bey**'i (ö. 1340 civarı, Kütahya) anlatıyor. Kaşgar'la
alâkası yok. Bu, **dördüncü tuzak çeşidi**: slug canlı, gövde gerçek, **konu
yanlış**. `<title>` de "YÂKUB BEY" yazdığı için hiçbir otomatik sınama yakalamaz.
**Tek çare gövdeyi okumak.** Doğru kaynak: **`kasgar`** maddesi.

## TDV **KÂŞGAR** (`kasgar`, ✅ CANLI, Keith Hitchins 2022)

> *"Yâkub Han **1870**'te Hindistan'daki İngiliz idaresiyle anlaştı ve … bir
> Kâşgar devleti kurulması ve **bu devletin Osmanlılar'a tâbi olması** konusunda
> mutabakata vardı. **Aynı yıl İstanbul'a gelen Kâşgar elçisi** büyük bir ilgiyle
> karşılandı ve Yâkub Han'a **birinci rütbeden nişân-ı Osmânî ile kılıç ve alem
> gönderildi**. **1872'den itibaren** Yâkub Han'ın hâkim olduğu Kâşgar'da ve diğer
> yerlerde **hutbeler Padişah Abdülaziz adına okundu**; **1875**'ten itibaren de
> Kâşgar emirliğinin **babadan oğula geçmesi kabul edildi**. Fakat bu girişimler,
> **1877**'de Yâkub Han'ın ölümü üzerine Çinliler'in Kâşgar'ı istilâ etmesiyle
> yarım kaldı."*

## `v:` mi `s:` mi — **öneri: `v:` (tâbi), 1872-01-01'den**

Projenin `v:` ölçütü CLAUDE.md §3'te Boğdan · Kırım · Erdel üzerinden tarif
ediliyor; bugün senin yazdığın `y:"vassal"` tanımı da (*"tâbiyet/itaat yoluyla
edinim"*) aynı yere bakıyor. Kaşgar dört ölçütten **üçünü** karşılıyor:

| tâbilik ölçütü | Kaşgar | dayanak |
|---|---|---|
| **Hutbe padişah adına** | ✅ 1872'den | TDV, birebir |
| **Tevcih / hilat / alem** | ✅ nişân-ı Osmânî + **kılıç ve alem** | TDV, birebir |
| **Veraset Bâbıâli'ce tanınıyor** | ✅ 1875'ten | TDV, birebir |
| Sikke · vergi · asker · muhafız | ❌ TDV anmıyor | — |

Üstelik TDV **"tâbi" kelimesini kendisi kullanıyor.** `s:"yakub-beg"` bırakmak
bu üç somut bağı görünmez kılar.

| kayıt | mevcut | önerilen | slug |
|---|---|---|---|
| **Kaşgar** · **Yarkent** | `s: yakub-beg 1864-06-04 → 1877-12-17` | `s: yakub-beg` **1864-06-04 → 1872-01-01**, ardından **`v:[{f:"1872-01-01", t:"1877-12-17", y:"vassal"}]`** | `kasgar` |

⚠️ **1872-01-01'in günü TDV'de yok** — madde "1872'den itibaren" diyor.
`YYYY-01-01` sözleşmesi. **1870'i değil 1872'yi seçmemin sebebi:** 1870
anlaşma ve elçi yılıdır; projenin `v:` ölçütü olan **hutbe** 1872'de başlıyor.

⚠️ **Karşı görüş (senin kararın):** Boğdan ve Kırım'da vergi, asker ve fiilî
Osmanlı idarî varlığı vardı; Kaşgar 4500 km uzakta, bitişik değil, ve bağ
diplomatik-sembolik kaldı. `v:` yazılırsa harita orayı **açık Osmanlı tonunda**
boyar. Ben `v:`yi öneriyorum çünkü ölçüt hutbe+tevcihtir ve ikisi de var; ama
"sembolik bağ toprak boyamaz" denirse **`s:` kalsın, kronoloji maddesiyle
anlatılsın** da savunulabilir.

## Kronoloji karşılığı — **eksik, madde borcu var**

`1872-01-01` ve `1877-12-17` kırılmalarının maddesi **yok** (Kaşgar/Yarkent
`s:`→`s:` olduğu için Değişmez 2 de görmüyor — bildiğin kör nokta). `v:` kararı
verilirse **1872 kırılması `v:` olur ve denetime görünür hale gelir**, o yüzden
maddesi şart. Hazır metin:

```js
{ t:"1872-01-01", k:"vassal", etiket:["diplomasi","ittifak"],
  b:"Kâşgar'ın Osmanlı tâbiiyetine girmesi — hutbe Abdülaziz adına",
  gun:"1872", yer:"Kâşgar, Yarkent",
  kisiler:"Yâkub Han, Sultan Abdülaziz",
  d:"Doğu Türkistan'da Çin idaresine karşı ayaklanarak bir İslâm devleti kuran Yâkub Han, 1870'te kurduğu devletin Osmanlılar'a tâbi olması konusunda mutabakata vardı; aynı yıl İstanbul'a gelen Kâşgar elçisi kabul edildi ve Yâkub Han'a birinci rütbeden nişân-ı Osmânî ile kılıç ve alem gönderildi. Bu tarihten itibaren Kâşgar'da ve hâkimiyeti altındaki diğer yerlerde hutbeler Padişah Abdülaziz adına okundu; 1875'te emirliğin babadan oğula geçmesi de kabul edildi. Osmanlı Devleti'nin doğuda ulaştığı en uzak tâbiyet bağıdır.",
  kaynak:"kasgar" }
```
```js
{ t:"1877-12-17", k:"kayip", etiket:["toprak-kaybi"],
  b:"Kâşgar'ın Çin istilâsı — doğudaki tâbiyet bağının kopuşu",
  gun:"1877", yer:"Kâşgar, Yarkent",
  kisiler:"Yâkub Han",
  d:"Yâkub Han'ın ölümü üzerine Çin kuvvetleri Kâşgar'ı istilâ etti ve beş yıl süren Osmanlı tâbiiyeti sona erdi. Çin yönetimi 1884'te bölgede Doğu Türkistan (Sinkiang) vilâyetini kurdu.",
  kaynak:"kasgar" }
```
⚠️ İkisinin de **günü TDV'de yok** (madde yalnız 1872 ve 1877 diyor). Verideki
`1877-12-17` günü TDV'den gelmiyor — **kaynağı bulunmalı ya da yıla indirilmeli.**

---

# ATLADIKLARIM — açıkça yazıyorum

| konu | neden |
|---|---|
| Kandehar'ın 8 el değiştirmesine madde yazmak | Kayıtlar zaten var ama **hiçbiri haritada çizilmiyor** (dosya merge dışı). Madde yazmak, görünmeyen bir kırılmaya borç ödemek olur — **önce adım 2-3.** Merge kararı verilince madde paketini yazarım |
| Sind zinciri (Kalhora · Talpur) | `kalhora` ve `talpur` slug'ları **ÖLÜ**; `sind` CANLI ama okumadım. Mevcut kayıt `sind` kimliğiyle 1701-1843'ü tek dönemde topluyor — hanedan ayrımı yok. **Kaynak taranmadı** |
| Horasan'ın Hîve-Buhara çekişmesi | Nesâ/Ebîverd/Merv canlı ve zincirli; **1860 turkmen** tarihinin dayanağını önceki turda TDV TÜRKMENLER'den doğrulamıştım (Kuşid Han'ın Kaçar ordusunu yenmesi). Ek iş görmedim |
| `nesa` · `kabil` · `tatta` · `yarkent` · `durraniler` · `hotakiler` · `nadir-sah-afsar` · `kalhora` · `talpur` | **9 slug ÖLÜ.** `dogu-turkistan` **boş kabuk**. Bu bölge TDV'de yer maddesi olarak zayıf |

**Vladikavkaz** — `kasitli_bosluk: true` cevabını **iki tur önce verdim**
(TDV OSETLER + KABARTAYLAR künyeleriyle), geçen tur da Orta Asya emsaliyle
yeniden sınayıp doğruladım. Aynı dosyada, "ARAŞTIRMA DOĞU — VLADİKAVKAZ"
başlığı altında. Açık kalan bir şey varsa neyi kastettiğini yaz.

---

# ÖZET

| # | Bulgu |
|---|---|
| 1 | 🔴 **17 noktanın 16'sının zinciri zaten yazılı** (Kandehar'ınki 8 el değiştirmeli, 6'sı gün hassasiyetinde). Yeniden yazmadım — Oturum 13'ün dosyasıyla çakışırdı |
| 2 | Engel üç tane, üçü de kodda doğrulandı: `GIRDI_DOSYALARI` (girdi.py:108) · **14 tanımsız kimlik** (renkler.py) · `BOLGE` 62°D (uret_petek.py:43) |
| 3 | 🔴 **Kullanıcının şikâyetinin sebebi nokta eksikliği değil:** en doğudaki canlı nokta **61,86°D**, pencere **62,00**, İran'ın sınırı **~63,3**. Geometri son noktanın 0,14° doğusunda cetvelle kesiliyor |
| 4 | ✅ **`BOLGE`'yi 62 → 64 yapmak İran'ı tek başına kapatır ve YENİ KİMLİK GEREKTİRMEZ** — o 22 noktanın hepsi tanımlı kimlik taşıyor. En ucuz kazanç bu |
| 5 | **Kaşgar:** `v:` öneriyorum, **1872-01-01**'den (hutbe + nişân/kılıç/alem + veraset tanınması). İki kronoloji maddesi hazır. Senin "1873/Yâkub Bey" bilgin TDV'de **1870-1872/Yâkub Han** |
| 6 | 🆕 **Dördüncü tuzak:** `yakub-bey` slug'ı canlı ve gövdeli ama **Germiyanoğlu** Yâkub Bey'i anlatıyor. `<title>` bile "YÂKUB BEY" diyor — otomatik sınama yakalayamaz, **gövde okunmalı** |
