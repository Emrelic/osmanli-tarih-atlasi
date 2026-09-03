# BULGU — SİBİRYA + URAL ve UZAK DOĞU SİBİRYA · 3 Eylül 2026

**Oturum:** DUNYA-SIBIRYA-0903 (Opus) · koordinatör **1.MURAT HÜDAVENDİGAR**
**Kutu:** 50-78K / 55-180D — `Sibirya+Ural` (50-78K/55-145D) + `Uzak Doğu Sibirya` (50-73K/145-180D)
**Tur cinsi:** ARAŞTIRMA — `data/` altına **yazılmadı**, `arac/` altına **yazılmadı**.
Koşu canlıydı (PID 1268); `CLAUDE.md §7`e göre ikisi de donmuş kabul edildi.
**Dosya sahipliği:** yalnız bu dosya.

---

## 0. TESLİM — SAYIYLA

```
AÇIK hücre (2° ızgara, tavan 200 km)      338   (275 + 63)
  doğrulanmış 80 adayla kapanacak         133   (%39,3)
  KAPANMADAN kalan                        205   (~4,28 M km²)

aday yerleşim toplamı                      80
  🟢 hakemli/akademik kaynak OKUNDU        38
  🟡 ansiklopedik/resmî kaynak okundu      23   (ilk tur 17)
  ⚪ kaynak BULUNAMADI — doğrulanmadı      19   (ilk tur 25)

beyan bölgesi önerisi (10 zon)            205 hücrenin tamamı
çürüyen MEVCUT kayıt hükmü                  3  (+1 kısmî, +2 usul)
```
> ⚠️ **BU BLOK İKİ TURUN TOPLAMIDIR.** Aşağıdaki §3 tabloları **birinci
> turun** fotoğrafıdır ve 16 kalemde bayattır; güncel kademeler **§D**'de
> ve `denetim/SIBIRYA-0903-adaylar.json`dadır. Çelişkide **JSON kazanır.**
> Üçüncü çürüyen hüküm (`Buryat toprakları` ömür kapısı ihlali) **§A**'dadır.

🔴 **Ve asıl bulgu bir sayı değil bir FARK:** ilk aday listem 96 noktaydı ve
`338 → 140` veriyordu. Kuruluş tarihleri ölçülünce **16 aday 1923'ten SONRA
kurulmuş** çıktı (Tura 1924 · Vanavara 1932 · Baykit · Igarka 1929 · Susuman
1936 · Batagay 1939 · Saskılah · Gıda · Ust-Port · Dikson · Seymçan · Çirinda
· Jilinda · Ekonda · Tomtor · Tazovsk) ve listeden **düştü.**

> **Kapanmayan 205 hücrenin 65'i, ancak 1923'ten SONRA kurulmuş bir
> yerleşimle kapanabilirdi.** Yani orayı kapatmak, atlasın zaman ufkunun
> dışından bir nokta getirmek olurdu.
> ⇒ Emre'nin hükmünün (*"YOK İSE UYDURACAK HALİMİZ YOK. DEVASA BOŞLUKLAR
> OLACAKSA OLSUN"*) bu bölgede **ölçülmüş** karşılığı budur.

---

## 1. ÖLÇÜM — taban ve yöntem

**Devraldığım öncül TUTTU.** Şartnamedeki sayıları kendim ölçtüm, birebir:

| bölge | kara | AÇIK | % |
|---|---|---|---|
| Sibirya+Ural | 515 | **275** | 53,4 |
| Uzak Doğu Sibirya | 97 | **63** | 64,9 |

1° ızgarada: 2066/**1120** (%54,2) + 377/**229** (%60,7) = **1349** açık hücre.

- maske: `veri-kaynak/ne_10m_land.geojson` (**`motor_kara.geojson` DEĞİL** —
  o motorun çıktısıdır ve zaten tavanla biçimlenmiştir)
- bağlı nokta: 2731 (`arac/girdi.py` `GIRDI_DOSYALARI`)
- ölçüt: bir kara hücresinin en yakın noktası > 200 km (`TAVAN_KM`)

🔴 **Açık kütle TEK PARÇA.** 1° hücreleri bitişiklik kümelemesine sokunca
1349'un **1329'u tek bir blob** çıktı (~7,3 M km²); geri kalan 20 hücre 8 küçük
parça. ⇒ *Kümeleme bu bölgede iş görmez; dekompozisyon coğrafî olmak zorunda.*
Bu yüzden aşağıdaki bütün bölümler **coğrafî zon** üzerinden kurulu.

**Kutumda hâlihazırda 76 nokta var** ve **10'u beyan noktası** (Yakut
toprakları · Çukotka merkezi · Koryak toprakları · Kamçatka İtelmen · Kolıma
Yukagir · Doğu Sibirya kıyısı · Penjina havzası · Buryat toprakları · Baraba
bozkırı · Kazak bozkırı). Hiçbiri mükerrer yazılmadı.

---

## 2. 🔴 ARAÇ BULGUSU — `_dunya_bosluk.py`'nin BÖLGE kutuları KESİŞİYOR

`BOLGE` tanımları dört yerde örtüşüyor; **aynı hücre merkezi birden çok bölgeye
sayılıyor** (228 hücre merkezi):

| kesişen çift | hücre | kara | **AÇIK** |
|---|---|---|---|
| Kuzey Amerika ∩ Orta Amerika+Karayip | 145 | 31 | 2 |
| Anadolu+Levant+İran ∩ Avrupa | 35 | 18 | 0 |
| Güneydoğu Asya ∩ Yeni Gine+Okyanusya | 25 | 8 | 5 |
| **Moğolistan+Tibet ∩ Sibirya+Ural** | 23 | 23 | **10** |

⇒ Benim 275'imin **10'u** aynı anda Moğolistan+Tibet'in listesindeydi
(51K şeridi · 74-118D).
🟢 **Koordinatör hükmü (M-2365):** sınır **50K**'de, o 10 hücre **benim**.

⚠️ **Ve `Doğu Asya ∩ Sibirya+Ural` örtüşmüyor — ama sebebi tasarım değil
TESADÜF.** Kutular kâğıtta kesişiyor (50-54K/92-145D); örtüşmemelerinin tek
sebebi **ızgara fazlarının farklı olması** (bölge alt sınırı + ADIM/2: biri
19,21,23… öteki 51,53…). Bir gün `ADIM` değişirse ya da bir kutu kenarı
oynarsa **kendiliğinden çift sayım doğar** ve hiçbir denetim ötmez.
📌 `CLAUDE.md §11`: *"bir aletin evreni değişince, alet değişmeden sessizce
yanılır."*

---

## 3. ADAY YERLEŞİMLER — 80 kalem, kaynak kademesiyle

**Kaynak kademesi:**
```
🟢 A  hakemli akademik makale / üniversite yayını / birincil kaynak neşri — GÖVDE OKUNDU
🟡 B  ansiklopedik · resmî · bölgesel kaynak — gövde okundu, hakemli DEĞİL
⚪ C  KAYNAK BULUNAMADI — tarih benim ön bilgim, bu turda DOĞRULANMADI
```
🔴 ⚪ kademesindeki hiçbir kayıt, kaynağı bulunmadan veriye yazılmamalıdır
(`§4`: *"kaynağı yazılmayan bilgi, kaynağı olmayan bilgiden ayırt edilemez"*).

### A) Güney Ural — Zauralye bozkırı
| aday | K | D | tarih | kad | kaynak |
|---|---|---|---|---|---|
| Çelyabinsk | 55,16 | 61,40 | **2 Eylül 1736** | 🟢 | Mazaev 2014 |
| Troitsk | 54,09 | 61,56 | 1743 (Uy hattı 1739-43) | 🟡 | Başkurt Ans. · Uy hattı |
| Kurgan | 55,45 | 65,34 | **1662** | 🟢 | Mazaev 2014 |
| Zlatoust | 55,17 | 59,67 | **1754** | 🟢 | Mazaev 2014 |
| Dalmatovo | 56,25 | 62,94 | **1644** | 🟢 | Mazaev 2014 |
| Kamışlov | 56,85 | 62,71 | **1668** | 🟢 | Mazaev 2014 |
| Yalutorovsk | 56,66 | 66,31 | **1639** | 🟢 | Mazaev 2014 |
| Şadrinsk | 56,09 | 63,63 | 1662 | ⚪ | doğrulanmadı |
| Kustanay | 53,21 | 63,62 | 1879 | ⚪ | doğrulanmadı |

### B) Orta ve Kuzey Ural
| aday | K | D | tarih | kad | kaynak |
|---|---|---|---|---|---|
| Verhoturye | 58,86 | 60,80 | **1598** | 🟢 | Mazaev 2014 |
| Turinsk | 58,05 | 63,70 | **1600** | 🟢 | Mazaev 2014 |
| Irbit | 57,68 | 63,06 | **1631** | 🟢 | Mazaev 2014 |
| Yekaterinburg | 56,84 | 60,61 | **1723** | 🟢 | Mazaev 2014 |
| Nijniy Tagil | 57,92 | 59,97 | **1722** | 🟢 | Mazaev 2014 |
| **Pelım ostrogu** | **59,60** | **63,05** | 1593 | 🟡 | ⚠️ aşağıya bak |
| Ivdel | 60,69 | 60,42 | 1831 | ⚪ | doğrulanmadı |
| Lyapin (Saranpaul) | 64,27 | 60,90 | Kunovat-Lyapin knezliği, XV. yy | ⚪ | koordinat da doğrulanmadı |

> 🔴 **PELIM KOORDİNAT TUZAĞI.** İlk listemde Pelım'ı **61,02K/61,98D**
> yazmıştım — orası **Sverdlovsk oblastındaki modern Pelım kasabası** (XX. yy).
> 1593 tarihli **Pelım ostrogu** Tavda-Pelım kavşağındadır, ~**59,6K/63,0D**.
> **İkisi arası 169 km.** Modern koordinat yazılsaydı 1593 tarihi 340 yıl
> yanlış bir yere düşerdi. ⚠️ Bu koordinat hâlâ ⚪ — nihai değeri
> doğrulanmalı.

### C) Yugra · Yamal · Taz
| aday | K | D | tarih | kad | kaynak |
|---|---|---|---|---|---|
| **Nadım gorodok** | ~65,90 | ~72,70 | **XII. yy sonu → 1731** | 🟢 | Kardash kazıları, dendrokronoloji |
| Samarovo (Hantı-Mansiysk) | 61,00 | 69,00 | 1637 yam | ⚪ | doğrulanmadı |
| Demyanskoye | 59,60 | 69,28 | 1637 yam | ⚪ | doğrulanmadı |
| Voykar gorodok | 65,85 | 64,00 | Obdorsk knezliği şehri | ⚪ | koordinat doğrulanmadı |
| Habarovo (Yugorsk Şarı) | 69,63 | 60,45 | Pomor-Nenets ticaret noktası | ⚪ | doğrulanmadı |

> 🟢 **NADIM GORODOK BU TURUN EN DEĞERLİ TEK KALEMİ.** Rus ostrogu değil
> **yerli** (Hantı / tundra ve orman Nenets) müstahkem kasabası; **XII. yüzyıl
> sonunda kurulmuş ve 1731'e kadar yaşamış** — yani atlasın **bütün** 1281-1731
> aralığını kapsıyor. Tarih tahminî değil: ağaç halkalarının yaşayan en yaşlı
> ağaçların halka dizisiyle karşılaştırılmasıyla kurulmuş. 6 açık hücre kapatır.
> ⚠️ Koordinatı hâlâ **±**: kaynak *"Nadım şehrinden 60 km, nehir ağzından 32
> km"* diyor; nehir ağzı ~66,0K civarı. **Yazmadan önce kesinleştirilmeli.**

### D) Ob-Yenisey ortası
| aday | K | D | tarih | kad | kaynak |
|---|---|---|---|---|---|
| Narım | 58,36 | 81,58 | 1596/1598 | 🟡 | Ketsk ostrogu araştırması |
| Laryak (Vah) | 61,10 | 80,25 | — | ⚪ | bulunamadı |
| Kolıvan (Çaus) | 55,31 | 82,74 | 1713 | ⚪ | doğrulanmadı |
| Açinsk | 56,27 | 90,50 | 1641 | ⚪ | doğrulanmadı |
| Kansk | 56,20 | 95,71 | 1636 | ⚪ | doğrulanmadı |

### E) Sayan · Hakasya · Tuva — 🟢 kimlik zinciri de çıktı
| aday | K | D | tarih | kad | kaynak |
|---|---|---|---|---|---|
| **Abakan ostrogu** | 53,72 | 91,44 | **1707** | 🟢 | Hakasya şehirleri makalesi |
| **Sayansk ostrogu** | ~52,85 | ~91,90 | **1709** | 🟢 | aynı |
| Minusinsk | 53,71 | 91,69 | 1739 / 1822 | ⚪ | doğrulanmadı |
| **Belotsarsk (Kızıl)** | 51,72 | 94,44 | **1914** | 🟢 | TDV `tuva` |
| Samagaltay | 50,60 | 95,02 | — | ⚪ | bulunamadı |

🔴 **Ve bu bölgenin `s:` zinciri kaynaktan ÇIKTI — kimlik işi, nokta işi kadar
önemli:**
```
… → 1703   Yenisey Kırgızları (Hongoray)
1703       CUNGARLAR Kırgızları TOPLUCA SÜRDÜ — bölge boşaldı,
           yerine Kaçin (kuzeyden) · Motor-Koybal (doğudan) ·
           Sagay (Tomsk yaylasından) · Beltir (güneyden) doldu
1707/1709  Abakan ve Sayan ostroglarıyla RUSYA — "Hakasya'nın Rusya'ya
           katılma tarihi 1707 ya da 1709 sayılabilir"
```
**Tuva ayrı bir zincir (TDV `tuva`, gövde okundu):**
```
1207        Cengiz Han bütün bölgeyi aldı
1717-1911   Çin'deki Mançu kökenli Ch'ing İmparatorluğu
1883-1885   Mançu hâkimiyetine karşı büyük ayaklanma
1914-1921   Çarlık Rusyası idaresi
14 Ağu 1921 Tuva Halk Cumhuriyeti
```
⚠️ **1911-1914 arası TDV'de boş.** Uydurmadım; **ölçmedim.**

### F) Altay — hepsi ⚪
| aday | K | D | kad |
|---|---|---|---|
| Onguday | 50,75 | 86,15 | ⚪ |
| Ust-Koksa (Uymon) | 50,27 | 85,61 | ⚪ |
| Koş-Agaç | 50,02 | 88,67 | ⚪ |

🔴 **Ve Altay'da ayrı bir kimlik sorusu var, ölçülmedi:** XVIII. yy Altaylıları
*"çift haraçlı"* (двоеданцы) — hem Cungarlara hem Ruslara ödüyorlardı. Atlasın
veri modeli bunu ifade edebiliyor mu? **Bilmiyorum, sormadım.**

### G) Baykal ve Baykalötesi — 🟢 tam zincir tek makaleden
| aday | K | D | tarih | kad |
|---|---|---|---|---|
| Verhneangarsk ostrogu | 55,80 | 109,60 | **1647** | 🟢 |
| Barguzin | 53,62 | 109,65 | **1648** | 🟢 |
| Bauntovsk | 55,18 | 113,00 | **1652** | 🟢 |
| Irgen | ~51,80 | ~112,30 | **1654** | 🟢 |
| Telembinsk | ~52,50 | ~113,90 | **1658** | 🟢 |
| Kabansk | 52,05 | 106,65 | **1660** | 🟢 |
| İlyinsk | 51,95 | 107,20 | **1660** | 🟢 |
| Verhneudinsk (Udinsk zimovyesi) | 51,83 | 107,60 | **1665** | 🟢 |
| Nijneudinsk / Balagansk / Verholensk / Çita / Sretensk / Bodaybo / Vitim / Çara | | | | ⚪ |

Kaynak: *"Присоединение Бурятии к России"* (cyberleninka) — Verhneangarsk 1647
ve Barguzin 1648 ile başlayan zincir; Ust-Prorvinsk 1653, Nerçinsk 1656,
Selenginsk 1665 de aynı listede.
⚠️ Irgen ve Telembinsk'in koordinatları **benim tahminim** — makale nehir adı
veriyor, koordinat vermiyor.

### H) Yakutya
| aday | K | D | tarih | kad | kaynak |
|---|---|---|---|---|---|
| Uyandina (Nijneindigirsk) zimovyesi | ~68,35 | ~145,60 | **1638** | 🟢 | Zuev kroniği |
| Podşiversk | ~66,45 | ~143,30 | **1636** | 🟢 | Zuev kroniği |
| **Ust-Olenyok zimovyesi** | ~72,90 | ~119,80 | **1633** | 🟡 | ⚠️ aşağıya bak |
| Amga (Amginskaya sloboda) | 60,90 | 131,98 | **1652** | 🟡 | ⚠️ aşağıya bak |
| Suntar / Nyurba / Ust-Maya / Nelkan | | | — | ⚪ | bulunamadı |

> 🔴 **OLENYOK KOORDİNAT TUZAĞI — Pelım'ın aynısı, 558 km.** Kaynak
> *"1633'te Rebrov nehrin AĞZINDA Olenyok zimovyesini kurdu"* diyor. Nehrin
> ağzı **72,9K/119,8D**; benim ilk listemdeki `Olenyok` ise **68,5K/112,4D**
> (modern kasaba, nehrin ortası). **İkisi arası 558 km.** Aynı adın iki ayrı
> yeri — `§11` Varat/Varad ailesinin coğrafî yüzü.
>
> 🔴 **AMGA — "kuruldu" ≠ "yaşadı".** 1652'de kurulan Amginskaya sloboda
> **1661'e gelindiğinde ortadan kalkmıştı** (*"их поля вскоре были заброшены,
> так что к 1661 г. от амгинского земледельческого поселения ничего не
> осталось"*). Sürekli bir nokta gibi yazılırsa **9 yıllık bir yerleşim 271
> yıl boyanır.** Yeniden iskânın tarihi **ölçülmedi.**

### I) Kolıma ve Çukotka — 🟢 Zuev
| aday | K | D | tarih | kad |
|---|---|---|---|---|
| Alazeya ostrogu | ~68,50 | ~154,50 | **1642** | 🟢 |
| Srednekolımsk | 67,46 | 153,72 | **1643/1644** | 🟢 |
| Nijnekolımsk (B. Anyuy kavşağı) | 68,53 | 160,90 | **1644** | 🟢 |
| Ostrovnoye (Anyuy panayırı) | ~68,10 | ~164,10 | **1794** (1848'de taşındı) | 🟢 |
| Verhnekolımsk | 65,44 | 150,90 | 1647 | 🟡 |
| Markovo | 64,68 | 170,42 | 1840'lar (1866 telgraf seferi) | 🟡 |

> 🟢 **ANYUY PANAYIRI YERİ DEĞİŞTİ ve bu bir nokta değil ÜÇ noktadır:**
> önce Angarka kolundaki Angarskaya kalesi → **1794**'te Büyük Anyuy'da bir ada
> (Nijnekolımsk'ten 200 verst) → **1848 sonrası** Küçük Anyuy sol kıyısı.
> (Karikh 2008, Vestnik TGU.)

### J) Ohotsk kıyısı ve Kamçatka — 🟢 Zuev'in tamamı
| aday | K | D | tarih | kad |
|---|---|---|---|---|
| Tauysk | ~59,60 | ~149,20 | **1652** (Motıkley 1648) | 🟢 |
| Yama zimovyesi | ~59,40 | ~154,20 | **1692** | 🟢 |
| Gijiga zimovyesi | 61,98 | 160,35 | **1651** · kale 1752 | 🟢/🟡 |
| Penjinsk ostrogu | ~62,50 | ~165,50 | **1709** | 🟢 |
| Nijnekamçatsk | 56,28 | 162,00 | **1697** | 🟢 |
| Verhnekamçatsk | 54,75 | 158,90 | **1698** | 🟢 |
| Bolşeretsk | 52,43 | 156,42 | **1704** | 🟢 |
| Olyutorsk (Arhangelsk) | ~60,00 | ~166,50 | **1714** | 🟢 |
| Tigil | 57,80 | 158,67 | — | ⚪ |

### K) Taymır
| aday | K | D | tarih | kad |
|---|---|---|---|---|
| Voloçanka (Voloçanı ysk. zimovyesi) | 70,98 | 94,53 | **1643** | 🟡 |
| Dudinka ikinci nokta (Ust-Port hattı) | 69,68 | 84,35 | — | ⚪ |
| Hantayka zimovyesi | 68,35 | 90,90 | — | ⚪ |

Taymır'ın su yolu kaynakta adım adım yazılı ve **hepsi bir nokta zinciridir**:
*Yenisey → Dudinka → Pyasina volok → Dudıpta → Avam → Voloçanka volok → Heta →
Hatanga.* Hatanga **1626** (atlasta VAR), Dudinka **1667** (atlasta VAR),
Voloçanka **1643** (atlasta YOK).

### L) Amur — 🔴 burada asıl mesele nokta değil KİMLİK
| aday | K | D | not | kad |
|---|---|---|---|---|
| Sofiysk (Amur) | ~52,25 | ~133,90 | 1858 sonrası | ⚪ |
| Tugur | 53,75 | 136,75 | — | ⚪ |
| Zeya ağzı (Mançu yerleşimi) | ~53,74 | ~127,27 | Nerçinsk sonrası | ⚪ |

```
1689-08-27  NERÇİNSK — sınır Argun ve Stanovoy sırtı; Rusya Albazin'i
            KAYBETTİ ve bütün Priamurye'den ÇEKİLDİ
1689-1858   Priamurye ÇİN (Ç'ing)
1858        AYGUN — Rusya Priamurye'yi ALDI
```
⚠️ **Bunu ölçmedim ama sormak zorundayım:** atlasta Albazin (53,38/124,09) ve
Zeya-Bureya kuşağı **1689-1858 arası hangi kimlikle boyanıyor?** Nerçinsk
sonrası Rus kalırsa **169 yıllık bir hayalet** doğar — `§3.5`in tam vakası,
ters yönde.

---

## 4. BEYAN BÖLGELERİ — kapanmayan 205 hücrenin cinsi

Her zon için sınav uygulandı: **kaynak KONUŞUYOR mu, SUSUYOR mu?**

| # | zon | hücre | ~km² | önerilen cins | dayanak |
|---|---|---|---|---|---|
| 1 | Aşağı Tunguska platosu (Evenkiya) | 55 | 1.195.436 | **kabile** ⚠️ | aşağıya bak |
| 2 | Yana-İndigirka-Kolıma yaylası | 34 | 727.184 | kabile | Zuev: Yukagir/Even yasak çevresi |
| 3 | Taymır + Putorana | 32 | 435.195 | kabile (+ uç: insansız) | Nganasan konsolidasyonu XVII-XVIII |
| 4 | Aldan-Stanovoy | 16 | 428.731 | kabile | Even/Evenk |
| 5 | Kuzey Ural + Yamal batısı | 14 | 289.720 | kabile | tundra Nenets |
| 6 | Vilyuy-Olenyok yukarısı | 10 | 177.415 | kabile | Yakut uruğları (TDV) |
| 7 | Çukotka | 10 | 196.599 | **devletsiz** 🟢 | Zuev — aşağıda |
| 8 | Vasyugan + orta Ob bataklığı | 7 | 184.248 | ⚪ ölçülemedi | Hantı/Selkup — aranmadı |
| 9 | Altay-Sayan-Baykal kuşağı | 6 | 184.374 | ⚪ ölçülemedi | ⚠️ nokta işi olabilir |
| 10 | Kamçatka-Koryak | 1 | 25.521 | kabile | Zuev — aşağıda |
| — | zon dışı dağınık | 20 | 435.019 | karışık | 20 hücre tek tek listeli (§6) |

🟢 **ÇUKOTKA — kaynak AÇIKÇA konuşuyor, ve `devletsiz` hükmü DOĞRULANDI:**
> *"чукчи, формально объявленные российскими подданными в 1789 г., сохранили
> свою фактическую независимость до 1920-х гг."*
> (Zuev, *Русско-аборигенные отношения…*, Sibirskaya Zaimka / NSU)

⇒ Atlastaki `Çukotka merkezi` ve `Anadır (Anadyrsk)` kayıtları (`devletsiz`)
**bu kaynakla ayrıca desteklenmiş oldu.** Kayıtlar zaten 1764 terkini ve
haraçsızlığı biliyordu; ben yeni bir şey bulmadım, **var olanı akademik bir
kaynağa bağladım.**

⚠️ **① numaralı zonun cinsi bir ÇELİŞKİ taşıyor ve tek başıma kapatmadım.**
Evenkiya için `kabile` öneriyorum, ama atlastaki `Essey` kaydı **aynı
coğrafyayı** `devletsiz` diye beyan ediyor (*"1630 öncesi Evenk/Saha toprağı,
devletsiz. Aşağı Tunguska platosu ile aynı sınıf"*). İkisi aynı anda doğru
olamaz:
```
devletsiz   "burada devlet yoktu, VE yerleşim de yok" — toprağı komşuya KATILABİLİR
kabile      "devlet değil ama SAHİPSİZ DE DEĞİL"      — sınırı geçirgen, katılmaz
```
📌 Ve emsal ortada: `Yakut toprakları` tam bu gerekçeyle **veri-yok → kabile**
diye düzeltilmişti. Evenkler de uruğ/klan örgütlü, yasak ödeyen, adları
kaynakta geçen bir halk. **Karar koordinatörün** — ben çelişkiyi ölçtüm,
hükmü vermedim.

---

## 5. 🔴 ÇÜRÜYEN MEVCUT KAYIT HÜKÜMLERİ

Kutumdaki beş beyan kaydının gerekçesi *"TDV'de madde YOK; **akademik literatür
aranmadı**"* diyor. **Ben aradım.** İkisinde kaynak KONUŞUYOR.

### ① `Kamçatka (İtelmen toprakları)` — `veri-yok` ÇÜRÜDÜ 🔴
`data/yerlesimler_ek31.js` · 55,000K/158,500D
Mevcut gerekçe: *"İtelmen için TDV ARANDI (16 Ağu): madde YOK… **Akademik
literatür aranmadı.**"*

**Aranan literatür konuşuyor — hem de doğrudan siyasî örgütlenme üzerine.**
Krashenninikov, *Описание земли Камчатки* (1755; birincil kaynak neşri):
> *"До покорения российскому владению ительмены жили в совершенной вольности;
> **не имели никаких над собой начальников, не подвергались никаким законам.**
> …впрочем было между ними равенство, никто никем повелевать не мог"*

Ve **yerleşim VARDI**: müstahkem *острожки* — hendekli, şarampolulu köyler;
Krashenninikov'un kendi sayımında Şantal ostrogunda ~120 kişi.

⇒ *"Bilmiyoruz"* değil. **Devlet yoktu ve yerleşim vardı** — bu, sözlükteki
`devletsiz-yerlesim` tanımının kelimesi kelimesine karşılığı:
*"yerleşim VAR ama merkezî bir devlete bağlı değil… Toprağı komşu devlete
KATILMAZ; hakkı saklıdır."*
🔴 **BU SATIRIN İLK HÂLİ YANLIŞTI — kendi önerimi düzeltiyorum.**
> ~~*"ÖNERİ: `veri-yok` → `devletsiz-yerlesim`"*~~

`devletsiz-yerlesim` **yazılmaz, TÜRETİLİR** (`uret_bosluk.py:120`):
```python
if c == "devletsiz" and y.get("tur") != "bolge":
    c = "devletsiz-yerlesim"
```
🟡 **DOĞRU ÖNERİ — ve İKİ ALAN BİRLİKTE değişmeli:**
```
bugünkü hâl   tur:"bolge" · bos:"veri-yok"
doğru hâl     tur: "bolge" DEĞİL   ·   bos:"devletsiz"
```
🔴 **Yalnız `bos:` düzeltilirse tuzak kapanır:** `tur:"bolge"` kalır, türetme
çalışmaz, cins **`devletsiz`** olur — ve o cinsin tanımı *"toprağı KOMŞUSUNA
KATILABİLİR"*. Yani İtelmen toprağı Rusya'ya erkenden katılır: **çürütülmek
istenen şeyin tam tersi.**
⚠️ Ve iki alan da `_sahiplik_uygula.py`nin kümesinde YOK ⇒ yama **yarım
inebilir**, ve yarım inen hâli hiç inmemiş hâlinden kötüdür. Hükmü ben
uygulamadım.

### ② `Koryak toprakları` — `veri-yok` ÇÜRÜDÜ 🔴
`data/yerlesimler_sibirya.js` · 62,000K/166,000D
Mevcut gerekçe: *"kaynak Koryakların Rusya'ya tâbilik/haraç ilişkisini
netleştirmiyor"*

**Zuev tam o ilişkiyi netleştiriyor:**
> yasak durumu *"son derece istikrarsızdı — düzensiz, önemsiz ve keyfî
> miktarlarda ödendi, ve Koryakların bir kısmı, muhtemelen önemli bir kısmı,
> **yasağı hiç ödemedi**"*; İtelmen ve Koryaklar *"ancak XVIII. yüzyılın
> ortasına doğru «yatıştırılabildi»"*

Ve toplumsal yapıyı da ikiye ayırıyor: tundra **çavçu** (ren göçebeleri) ·
kıyı **nımılan** (köylüler).
🟡 **ÖNERİ: iç yayla noktası için `veri-yok` → `kabile`.**
(Kıyı şeridi ayrı ele alınmalı: orada yerleşim var ⇒ `devletsiz-yerlesim`.)

### ③ `Kolıma havzası (Yukagir)` ve `Doğu Sibirya kıyısı (Çuvan-Yukagir)` — ⚪ KISMÎ
Zuev'in kroniği bölgede **1638-1644 arası altı zimovye** sayıyor (Uyandina ·
Podşiversk · Alazeya · Kolıma · Nijnekolımsk · Srednekolımsk) — yani coğrafya
**susmuyor.** Ama okuduğum makale **Yukagirleri odak almıyor** (*"Yukagirler ve
Evenler komşu gruplar olarak anılıyor, makalenin odağı değiller"*).
⇒ **Cins hükmünü DEĞİŞTİRMİYORUM. Bu kalem `ölçülemedi` — AÇIK kalır.**
`ölçülemedi` ≠ `çürüdü` ≠ `temiz`.

### ④ `Penjina havzası (kuzey Koryak)` — ⚠️ AD ile YER uyuşmuyor
`data/yerlesimler_ek31.js` · 61,1723K/156,4398D
Kaydın kendi gerekçesi yeri **doğru** tarif ediyor: *"Kamçatka boynu ile Koryak
yaylası arasındaki şerit"*. Ama **adı** Penjina havzasını gösteriyor ve
Penjina nehri ağzı oradan **486 km** uzakta (ölçüldü).
⇒ Kusur veride değil **adda**. Bir sonraki oturum bu adı okuyup Penjina'ya
nokta koymaya kalkarsa yanlış yere koyar.

### ⑤ `Selenginsk` ile `Buryat toprakları` **aynı dönem için farklı şey söylüyor**
```
Selenginsk (51,10/106,60)  bos:"veri-yok" — "1665 öncesi Buryat/Halha sınır
                           bozkırı; HANGİ TARAFTA OLDUĞU TANIMSIZDI"
Buryat toprakları (53,00/110,00)  s:[1281-1631 kuzey-yuan → 1631 rusya]
                           yani TANIMLI
aralarındaki mesafe        314 km (ölçüldü)
```
İkisi de 1281-1665 aralığını kapsıyor ve biri *"tanımsız"* öteki *"kuzey-yuan"*
diyor. **Hangisinin doğru olduğunu ölçmedim** — çelişkiyi bildiriyorum.

---

## 6. ÖLÇMEDİKLERİM — açıkça

```
⚪ 25 adayın kaynağı BULUNAMADI (§3'te ⚪ ile işaretli) — hiçbiri veriye
   yazılmaya hazır değil
⚪ Vasyugan bataklığı (7 hücre) ve Altay-Sayan-Baykal kuşağı (6 hücre) için
   cins ARANMADI
⚪ Yukagir siyasî örgütlenmesi — Zuev'in makalesi odak almıyor, ayrı kaynak
   arandı ama BULUNAMADI
⚪ Tuva 1911-1914 arası — TDV boş bırakıyor, ben de bıraktım
⚪ Altay "çift haraçlılık" (двоеданство) — veri modeli bunu ifade edebiliyor mu,
   SORMADIM
⚪ Amur'un 1689-1858 arası atlastaki kimliği — ÖLÇMEDİM, soru olarak bıraktım
⚪ Nadım gorodok · Irgen · Telembinsk · Alazeya · Uyandina · Podşiversk ·
   Ust-Olenyok · Tauysk · Yama · Penjinsk · Olyutorsk · Sayansk koordinatları
   YAKLAŞIKTIR — kaynak nehir adı veriyor, koordinat vermiyor
⚪ `_baglama_onsinav.py` KOŞULMADI — yazılacak dosya yok, sınanacak şey yok
⚪ 3 km mükerrer sınavı bu adaylar için KOŞULMADI (nokta kolu açılınca şart)
```

**Zon dışı kalan 20 dağınık hücre** (§4 tablosunun son satırı) — tek tek:
```
51K: 66D 124D 136D 138D      61K: 124D 126D 170D 172D
63K: 82D 84D 86D             65K: 84D
71K: 144D 146D 148D 150D 152D 156D
73K: 126D 128D
```
Bunların 51K/136-138D ikilisi **aşağı Amur sol kıyısı** (Sofiysk adayı bir
kısmını kapatıyor), 71K/144-156D altılısı **Doğu Sibirya Denizi kıyı şeridi**.

---

## 7. 🔴 UYGULAMA UYARILARI — nokta kolu açılırsa

1. **`bos:` ve `neden:` alanları `_sahiplik_uygula.py` ile İNMEZ.**
   `ALAN_RX` = `d · s · v · isg`, `SKALER_ALANLAR` = `m · kaynak`. `bos:` ve
   `neden:` **hiçbir kümede yok** — Timbuktu vakasında yamanın `s:` ve
   `kaynak:` kısmı indi, `bos:`/`neden:` **sessizce düştü.** Bu bölümdeki
   bütün beyan önerileri o araçla uygulanırsa **cinsleri kaybolur** ve
   hücreler *"beyansız delik"* sayılır.
2. **Kuruluş tarihi 1923'ten sonra olan hiçbir aday yazılmaz.** Bu turda 16
   aday tam bu sınavda düştü.
3. **Koordinat, adın değil KAYNAĞIN gösterdiği yerdir.** Pelım 169 km,
   Olenyok 558 km — ikisi de aynı adın iki ayrı yeri.
4. **"Kuruldu" ≠ "yaşadı".** Amga 1652'de kuruldu, **1661'de yoktu.**
5. **Ad alanı:** dosya `data/yerlesimler_sibirya0903.js` ise değişken
   `window.YERLESIMLER_SIBIRYA0903` olmalı (`§7`: *"ayrı dosya vermek ayrı ad
   alanı vermek DEĞİLDİR"*).

---

## KAYNAKLAR — gövdesi okunanlar

**TDV İslâm Ansiklopedisi** (HTTP 200, gövde okundu)
- `sibir-hanligi` — Çimga-Tura · Sibir (İsker) · Kızıl-Tura · Karaçin ·
  Taşatkan · Abalak · Tarhankale; *"Tura, Tobul ve İşim nehirleri arasındaki
  topraklar… İrtiş civarı ile Baraba bozkırları"*; başkent nakli, 1581 Sibir'in
  düşüşü, 1593-1604 fethin tamamlanışı
- `yakutlar` — uruğ/toyon/ulu toyon yapısı; **25 Eylül 1632** Lena Kalesi;
  1638 Butalski ostrogu; **1641** Yakutsk kazası
- `tuva` — 1207 · 1717-1911 Ç'ing · 1883-85 ayaklanma · 1914-21 Rusya ·
  14 Ağustos 1921 Tuva Halk Cumhuriyeti
- 🔴 ÖLÜ (302): `sibirya` · `tobolsk` · `cukcalar` · `samoyed` · `evenkler` ·
  `buryatlar` · `altaylilar` · `hakaslar`
  ⇒ TDV bu bölgeyi **künye taneciğinde bile** ancak kısmen görüyor; kasaba
  taneciğinde hiç görmüyor. `§4`in *"TANECİKLİK boşluğu"* maddesi geçerli.

**Hakemli / akademik (gövde okundu)**
- Мазаев А.Г., *Формирование и развитие системы расселения Урала (XVII-XIX
  вв.)*, Академический вестник УралНИИпроект РААСН, 2014 — cyberleninka
- Зуев А.С., *Русские остроги на крайнем Северо-Востоке Сибири…* ve
  *Хроника присоединения крайнего Северо-Востока Сибири к России* ve
  *Русско-аборигенные отношения…* — Сибирская Заимка (ISSN 2308-4073),
  aslı: Новосибирский гос. университет, 2002
- Карих Е.В., *Анюйская ярмарка во второй половине XIX – начале XX в.*,
  Вестник Томского гос. университета, 2008 — cyberleninka
- *Присоединение Бурятии к России: геополитические сценарии трансграничья
  в XVII-XIX вв.* — cyberleninka
- *О результатах исследования архитектурно-пространственного развития
  городов Хакасии* — cyberleninka
- Майничева А.Ю., Курилов В.Н., *Первые русские остроги в Сибири: освоение
  пространства*, Сибирская Заимка, 2001
- Кардаш О.В., Надымский городok kazıları (dendrokronolojik tarihleme) —
  Северная археология / dissercat özeti
- Крашенинников С.П., *Описание земли Камчатки* (1755) — Викитека neşri

**Ansiklopedik / resmî / bölgesel (🟡 — hakemli değil)**
Taymır Dolgan-Nenets belediye tarihçesi (Hatanga 1626 · Voloçanka 1643 ·
Dudinka 1667) · Vilyuysk 1634 · Verhnekolımsk 1647 · Gijiginsk 1752 ·
Markovo · Obdorsk 1595 / Mangazeya 1601 · Ketsk 1602 / Narım 1596

**🔴 ERİŞİLEMEYEN kaynaklar — denendi, olmadı**
```
bigenc.ru / bre.ruwiki.ru   200 döner, gövde BOİLERPLATE (§4④ tuzağı)
old.bigenc.ru               301 → bigenc.ru köküne, madde GELMEZ
archive.org Forsyth 1992    ödünç kısıtlı, tam metin YOK
Никитин Н.И. PDF            WebFetch metin ÇIKARAMADI (boş döndü)
yamalarchaeology.ru         DNS ÇÖZÜLMEDİ
```
📌 Bunlar *"kaynak yok"* demek değil, *"bu turda alınamadı"* demektir
(`§4④`: canlı adres + alınamayan gövde ⇒ hüküm **"çekilemedi"**, "yok" değil).

---
---

# 🔴 İKİNCİ TUR — 3 Eylül öğleden sonra

> Koordinatörün beş kararı (M-2410 · M-2413 · M-2414 · M-2425 · M-2431) ve üç
> soruma verdiği cevap (M-2440) alındıktan sonra yapılan ölçümler.
> **Yukarıdaki bölümler bu bölümle ÇELİŞİRSE bu bölüm kazanır.**

## A) 🔴🔴 ÖMÜR KAPISI İHLALİ — 87,7 YILLIK HAYALET, ve TAM BİR KAYIT

Koordinatörün (c) sorusunu (Selenginsk ↔ Buryat çelişkisi) ölçerken kimlik
kapısının **③. ayağına** takıldım:
```
kuzey-yuan künyesi        f:"1368-09-14"   t:"1691-05-30"
Buryat toprakları kaydı   s:[{f:"1281-01-01", t:"1631-01-01", d:"kuzey-yuan"}]
                               ↑ künye DOĞMADAN 87,7 YIL ÖNCE
```
**Evren tarandı: 19 `kuzey-yuan` döneminin 18'i temiz. İHLAL EDEN TEK KAYIT
budur, ve bu kutudadır.**

🟢 **Çaresi zaten veride ve uç uca oturuyor:**
```
yuan-hanedani   f:"1271-01-01"  t:"1368-09-14"  ⟶  kuzey-yuan f:"1368-09-14"

ÖNERİ  s:[{f:"1281-01-01", t:"1368-09-14", d:"yuan-hanedani"},
          {f:"1368-09-14", t:"1631-01-01", d:"kuzey-yuan"}, …]
```
⚠️ **Damga:** ihlal **ÖLÇÜLDÜ** (kesin). `yuan-hanedani`nin yerine konması künye
ömrü bakımından kusursuz, ama *"Yuan'ın Lingbei eyaleti Selenge havzasını
kapsıyordu"* önermesini **KAYNAKLA DOĞRULAMADIM.**

📌 `§3.5`in hayalet devlet dersinin **ters yönü**: orada devlet **öldükten
sonra** boyanıyordu, burada **doğmadan önce.**

## B) SELENGİNSK ↔ BURYAT — kaynak KONUŞUYOR, `veri-yok` ÇÜRÜDÜ

Sınav uygulandı: *Kuzey Yuan / Halha, Selenge havzasında fiilî tasarruf kurmuş
mu?* Kaynak (cyberleninka, Buryat tarihi makaleleri) **üç ayrı cümleyle**
konuşuyor:
```
"Хоринцы находились в даннической зависимости от ЦЭЦЭН-ХАНА и были его
 подданными, выставляя для монгольского хана вспомогательное войско и
 выполняя его задания."
"Селенгинские буряты и хори-буряты в то время мало отличались от монголов Халхи."
"В среднем течении реки Селенги … были расселены монгольские группы ТАБАНГУТОВ."
```
⇒ Tâbilik soyut değil: **yardımcı asker veriliyor, görev yapılıyor**, ve orta
Selenge'ye Moğol grupları **iskân edilmiş.** `veri-yok` ("kaynak SUSUYOR") bu
havza için **yanlıştır.**

⚠️ **`§3.5.1` — iki uç da ölçüldü, bedeli yazılıyor:**
```
kimliği Selenginsk'e YAYMAK   350 yıllık delik kapanır
                              BEDEL: Setsen Han TÂBİLİĞİ, doğrudan tasarruf
                              DEĞİL. `s:` mi `v:` mi olduğu ÖLÇÜLMEDİ; ve
                              `halha` künyesi de YOK.
`veri-yok`u BURYAT'a YAYMAK   350 yıllık gövde SİLİNİR, ve kaynak onu
                              desteklemiyor ⇒ BU SEÇENEK ÇÜRÜK.
```

## C) 🟢 KÜNYE ÖNERİSİ — HONGORAY (Yenisey Kırgızları)

M-2414③ ölçütü (*teritoryal siyasî yapı + DATABLE bitiş*) **net karşılanıyor.**
Kaynak: **Чертиков М.А., «Этнополитическая ситуация на территории Хонгорая
XVII – начале XVIII в.», Вестник Томского гос. университета, 2009**
(cyberleninka, gövde okundu) + Hakasya şehirleri makalesi.

```
id       hongoray            (alternatif: yenisey-kirgiz)
ad       Hongoray (Yenisey Kırgızları)
tur      beylikler birliği   — dört BEYLİK ULUSU, tek başkent YOK
f        1281-01-01   ⚠️ ATLAS UFKU, kuruluş DEĞİL. "kuruluş" diye yazılmamalı
t        1703-01-01   🔴 kaynak "ЛЕТОМ 1703 г." (1703 YAZI) diyor; §4'ün
                        "gün bilinmiyorsa YYYY-01-01" kuralı uygulandı
uluslar  Altısar · İsar (Ezer) · Altır · Tuba — her birinin kendi Kırgız
         alt-etnik çekirdeği
toprak   Hakas-Minusinsk havzası
```
**Kronoloji maddeleri (üçü de kaynaklı):**
```
1703 yazı  Cungar hanı Tsevang Rabdan Hongoray nüfusunun BÜYÜK KISMINI
           (15-20 BİN kişi) Cungarya'ya sürdü. Sebep RUS BASKISI DEĞİL:
           "главной причиной … явилась нависшая над Саяно-Алтайским
            регионом ЦИНСКАЯ ВОЕННАЯ УГРОЗА" — han Kırgızların Ç'ing
           kumandanlarına geçmesinden korkuyordu. Sürgün Hongoray'ı
           bağımsız siyasî yapı olarak ORTADAN KALDIRDI.
1707       Abakan ostrogu; Hakas beyleri surları dibinde Rus tâbiiyeti yemini
1709       Sayan ostrogu — "Hakasya'nın Rusya'ya katılma tarihi 1707 ya da 1709"
```
🔴 **ARA PENCERE — ayrı bir kalem:** 1703 sürgünü ile 1707 ostrogu arasında
havza **boşaldı** ve dört grup doldurdu (Kaçin kuzeyden · Motor-Koybal
doğudan · Sagay Tomsk yaylasından · Beltir güneyden). Bu aralık ne `hongoray`
ne `rusya` — **pencere beyanı** gerektirebilir.

## D) İKİNCİ KAYNAK TURU — ⚪ 25 → 19, ve ÜÇ YENİ TUZAK

`denetim/SIBIRYA-0903-adaylar.json` güncellendi. **Kademe dağılımı: A 38 ·
B 23 · C 19** (önceki tur: A 38 · B 17 · C 25).

**Kaynaklanan 16 kalem:** Açinsk 1641 · Kansk 1636 · Minusinsk 1739 ·
Nijneudinsk 1648-10-01 (Pokrov günü) · Balagansk 1654 (Mayıs-Haziran) ·
Verholensk 1641 · Çita 1653 (İngoda zimovyesi) · Şadrinsk 1662 · Bodaybo 1864 ·
Ust-Maya 1844 · Nelkan 1844 · Suntar 1740 · Tigil 1747 · Tugur 1653 ·
Ust-Koksa (Uymon) 1720'ler · Onguday 1891.

### 🔴 VE ÜÇ YENİ TUZAK ÇIKTI — üçü de yazılmadan yakalandı

**① AÇİNSK — koordinat AKADEMİK OLARAK TARTIŞMALI.**
Skobelev & Çurikov (Vestnik NGU, 2010) tam bu soruyu tartışıyor ve ilk (1641)
ostrogun **modern Açinsk'te olmadığını** savunuyor: *"острог был поставлен
значительно севернее, в Ачинской ясачной волости"*, Çulım (eski İyus) kıyısında,
modern **Balahta** civarında (~55,4/91,6). Benim koordinatım (56,27/90,50)
**modern şehir** — aradaki fark ~120 km.
⇒ Tarih 🟢, koordinat **KARAR BEKLİYOR.**

**② SOFİYSK — AD ÇAKIŞMASI, iki ayrı yer.**
```
Muravyov'un TEMMUZ 1858'de Cay burnunda kurdurduğu Sofiysk  → AŞAĞI Amur ~52,3/139,9
benim adayım                                                → 52,25/133,90
```
İkincisi **başka bir Sofiysk** (Bureya altın sahası). Aşağı Amur'daki zaten
Nikolayevsk'in kapsamında. ⇒ Aday **ÇÖZÜLMEDİ**, hangi Sofiysk olduğu
belirlenmeden yazılmamalı.

**③ ZEYA — ADI YANLIŞTI, düzeltildi.**
İlk listemde `Zeya ağzı (Mançu yerleşimi)` diye geçiyordu. Zeya'nın **ağzı**
Blagoveşçensk'tedir (50,28/127,53); 53,74/127,27 **Zeya şehridir** ve 1879'da
Yukarı Amur altın şirketinin aktarma noktası **Zeyskiy Sklad** olarak kurulmuştur.
⇒ Ad ve olay düzeltildi; nokta yerinde kaldı.

📌 Üçü de `§11`in Varat/Varad ailesinden ve bu turda **beşinci-altıncı-yedinci**
vakalar (öncekiler: Pelım 169 km · Olenyok 558 km · Penjina 486 km).
***Bu kutuda ad ile yer arasındaki mesafe, bu turun en sık hata sınıfıdır.***

## E) KOORDİNATÖRÜN CEVAPLARI — devraldıklarım, ve NE ÖLÇMEDİĞİM

```
(b) AMUR       🟢 kaygım ÇÜRÜDÜ. Albazin · Blagoveşçensk · Aigun'un
               `qing-hanedani` dönemleri veride DURUYOR (1689-09-06 → 1858-05-28).
               ⚠️ BU ÖLÇÜM KOORDİNATÖRÜNDÜR, benim değil — kendi ölçümüm
               diye yazmıyorum.
               ⚪ Udskoy ostrogu (1679→1917 kesintisiz `rusya`, Ç'ing dönemi yok)
               istisnası ikimizde de ÖLÇÜLMEDİ.
(a) EVENKİYA   🟢 `kabile` hükmü verildi; `Essey` koordinatörde hizalanacak.
               Ve beyanlar KALICI değil PENCERELİ yazılacak.
```

## F) BU TURUN AÇIK KALEMLERİ
```
⚪ 19 aday hâlâ kaynaksız: Kustanay · Ivdel · Lyapin · Voykar · Samarovo ·
   Demyanskoye · Habarovo · Laryak · Kolıvan (Çaus) · Samagaltay · Koş-Agaç ·
   Vitim · Çara · Sretensk · Nyurba · Hantayka zimovyesi · Dudinka ikinci
   nokta · Sofiysk (ad çakışması) · Zeya ağzı Mançu yerleşimi
⚪ Açinsk'in 1641 koordinatı — akademik tartışma AÇIK
⚪ Selenginsk için `s:` mi `v:` mi — ölçülmedi; `halha` künyesi de YOK
⚪ Yuan'ın Lingbei eyaletinin Selenge havzasını kapsayıp kapsamadığı
⚪ Udskoy ostrogu / Uda havzasının Nerçinsk'teki statüsü
```
