# IRAN-KAFKAS-0082 — CEVAP (parti-emrelic-0082 · 12 madde · 30 Eylül 2026)

> İşçi: IRAN-KAFKAS-0082 (opus). **Hiçbir `data/` dosyasına dokunulmadı**, hepsi hüküm.
> `denetle.py` koşturulmadı: veri değişmedi, ölçecek bir şey yok (ORTAK §6).
> Bekçi kurulamadı (çıkış 3, RAM-DARBOGAZI ilanı); tekrar denenmedi.

## 0 · Özet

| # | Konu | Hüküm |
|---|---|---|
| H-0006 | Şamahı 1722 eksklavı | ✔ dogru |
| H-0007 | Nahçıvan·Culfa·Ordubad arası topraklar | ✔ dogru (+ 2 yan bulgu) |
| H-0008 | Revan 1724 — Kliçatak·Norapat cebi | ▷ kosu-bekliyor (0081'de karar VAR, uygulanmamış) |
| H-0009 | Tebriz 1725 — Serdeşt | ◔ olculemedi |
| H-0010 | Gence 1725 — beş Safevî adası | ✗ hatali (karma, alt hükümler aşağıda) |
| H-0011 | Kuba·Şâbüran 1725 | ? emre-karari |
| H-0012 | Hekimoğlu 1731 — Tebriz adası | ✗ hatali (Urmiye eksik) |
| H-0030 | Basra 1776 — Abadan·Fav | ◔ olculemedi |
| H-0075 | Türkmençay kesik çizgisi | ✗ hatali (Culfa · Lenkeran · madde metni) |
| H-0093 | Iğdır boş arazi | ✗ hatali (Iğdır·Beri yanlış sahip) |
| H-0094 | Iğdır Rusya'da görünüyor | ✗ hatali (kök = H-0093) |
| H-0095 | Kırmızı hat — Hulo·Iğdır | ✗ hatali (Iğdır) · Hulo ✔ |

**Dağılım:** 2 ✔ · 6 ✗ · 2 ◔ · 1 ▷ · 1 ? · 0 ∅.

**En ağır bulgu (H-0093/94/95):** `Iğdır` ve `Beri` 1534 → **1878 kesintisiz Osmanlı** yazılmış.
TDV `igdir--sehir`: Iğdır **Revan eyaletinin Aralık kazasıydı**, 1736'da Revan'la birlikte
İran'a geçti, **1827'de Rus işgali, Rus Surmalu sancağı 1828-1917**. Yani 1604-1724 ve
1735-1828 arası Safevî/İran, 1828-1917 Rus olmalıydı. 🔴 **Çakışma:** bekleyen
`denetim/SAFEVI-DOGU-0081-uygula.py` aynı iki kayda dokunuyor (başlangıcı 1534-06-01'e
çekiyor ama 1878 bitişini KORUYOR). İkisi birlikte uygulanmalı — bkz. §H-0093.

## Ölçüm aletleri (hepsi salt okur)
| Alet | Ne yapar |
|---|---|
| `denetim/ARAC-IRAN-KAFKAS-0082-OLC.py` | gün + kutu → her yerleşimin sahibi (motorla aynı öncelik: `d:`→OSMANLI, `v:`→TABI, sonra `s:`; `uret_petek.py:6176-6181`) |
| `denetim/ARAC-IRAN-KAFKAS-0082-KAYIT.py` | adı verilen kayıtların dönemleri |
| `denetim/ARAC-IRAN-KAFKAS-0082-ADA.py` | ada adayı: sahibi en yakın 4 komşusunun hepsinden farklı olan nokta |
| `denetim/ARAC-IRAN-KAFKAS-0082-SINIR.js` | o gün geçerli sınır çizgileri (`d_sinirlar*.js`, `hukuki_sinirlar.js`) |
| `denetim/ARAC-IRAN-KAFKAS-0082-GOVDE.py` | yabancı gövde (`devletler_harita.js`) noktayı kapsıyor mu — akışla, RAM'e yüklemeden |
| `denetim/ARAC-IRAN-KAFKAS-0082-TDV.py` · `-ARA.py` · `-OKU.py` | TDV çek (302'yi TAKİP ETMEZ) · ara · oku |

📌 **TDV arama tuzağı (yeni):** `/arama/?q=` sayfası sonuçları JS ile yüklüyor, düz HTML'de
**hiç madde linki yok** — "0 sonuç" okumak yanlış olur. Çalışan uç:
`/ajax_search_auto.php?sp=m&=ac&q=<kelime>` (başlık) · `sp=t` (içerik), `Referer` başlığıyla.
Böyle bulundu: `igdir` slug'ı **302 (ölü)**, doğrusu **`igdir--sehir`**.

Ada taraması (36-42,5 K · 42-50,5 D), gün başına aday: 1590-06-01 **2** · 1724-08-15 **4** ·
1724-10-04 **6** · 1725-07-29 **7** · 1725-09-13 **7** · 1726-06-01 **7** · 1733-01-01 **4** ·
1833-02-20 **1**. Kalıcı üç ada: Norapat · Şeyh Salû-yi Ulyâ · Rāzhān (1724-1730); Kotur ve
Serdeşt 1724/25-1730. (Kutaisi/Derbend adaları tâbi/Rus — gerçek, kusur değil.)

---

## H-0006 — Kasım-Aralık 1722 · Şamahı · ✔ dogru

**Soru:** Şamahı gerçekten Osmanlı'ya geçti mi, yoksa ana topraktan kopuk eksklav hatası mı?

**Ölçtüm (1722-12-15):** Şamahı `v:` 1722-11-01 → 1735-06-19, *"Şirvan (Şemâhî) Hanlığı —
Hacı Dâvud (tâbi)"*. Osmanlı'nın o gün en yakın toprağı Kars/Ahılkelek; aradaki Tiflis
`gurcistan`, Gence·Şeki·Kabala·Ereş `safevi`. Tiflis `d:` 1723-06-15, Gence·Şeki·Kabala·Ereş
`d:` 1725-09-12.

**Kaynak — TDV `sirvan`:** *"Osmanlılar, Kasım 1722'de Ruslar'a ültimatom verip çekilmelerini
isterken Hacı Dâvud'un Şirvan üzerindeki hâkimiyetini tanıdılar. Hacı Dâvud, Kırım hanı
gibi vasal bir hükümdar oldu."* Osmanlı ordusu bölgeye ancak 1723 baharında Tiflis üzerinden
girdi (madde `olaylar_p0060.js:20`'nin kendi metni de böyle söylüyor).

**Hüküm:** Şamahı **fethedilmedi, tâbi oldu.** Kopukluk gerçek: 1722 sonunda Osmanlı ile
Şirvan arasında Gürcistan ve Safevî Gence-Karabağ vardı; köprü 1723 (Tiflis) ve 1725 (Gence)
ile kuruldu. Eksklav tarihî durumdur, harita doğru. Şamahı açık-tâbi rengiyle çiziliyor, koyu
Osmanlı rengiyle değil. Bu da doğru.

⚠️ **Eksik olan:** Hacı Dâvud'un ülkesi yalnız Şamahı peteği değildi. TDV aynı cümlede
*"1719 ve 1721'de **Kuba** ve Şemâhî şehirlerini ele geçirip yağmaladı"* diyor. Kuba ve
Şâbüran'ın rengi → H-0011.

**Yan bulgu (dokunulmadı):** Gîlân'dan Rus çekilmesi: atlas Reşt·Enzeli·Lâhîcan'ı
`rusya` → **1732-09-02** yapıyor. TDV `gilan` ise *"Ruslar **1734**'te Gîlân'dan çekildikten
sonra"* diyor. TDV esas ⇒ bitiş günü **? emre-karari** (1732 Reşt antlaşması mı, TDV'nin
1734 fiilî çekilmesi mi).

---

## H-0007 — 1724-08-11 · Nahçıvan·Culfa·Ordubad · ✔ dogru (+ yan bulgular)

**Soru:** Şerur · Mâku · Şeyh Salu-yı Ulya · Kotur · Hoy · Merend alınmadan mı Nahçıvan,
Culfa ve Ordubad alındı?

**Ölçtüm:** Nahçıvan·Culfa·Ordubad `d:` **1724-08-11**. Aradakiler: Şerur·Mâku `d:`
**1724-10-03** (Revan günü) · Hoy **1724-09-28** · Merend **1725-07-28** (Tebriz günü) ·
Kotur ve Şeyh Salû-yi Ulyâ **hiç** (1724-1735 arası `safevi`).

**Kaynak:** Nahçıvan'ın günü kaynaklı: Yörük & Valiyev 2016 s.20 (Aktepe 1970):
*"Nahçivan ve Ordubad ise 11 Ağustos 1724"*. Revan'ın düşüşü 3 Ekim 1724 (Bilgili 2016,
BOA MD 132). TDV `revan`: *"üç aylık bir muhasara sonunda Revan'ı aldılar"*, yani kuşatma
Temmuz 1724'te başladı. Osmanlı ordusu o sırada Revan ovasındaydı ve Nahçıvan kuşatma sürerken
teslim oldu.

**Hüküm:** Sıra tarihî olarak doğru. Nahçıvan Revan'dan ~2 ay önce alındı. Revan kuşatması
sürdükçe Aras vadisi (Şerur) sahada Osmanlı ordusunun elindeydi. Atlas ise bu yerleri kale
teslim gününe (Revan 3 Ekim) bağlıyor. Bu, atlasın kale/antlaşma günü modelidir: 11 Ağustos
ile 3 Ekim arasındaki ~50 günlük "atlama" o modelin görünümü, kusur değil. Kotur ve Şeyh Salu
ise gerçek boşluk → H-0010.

**Yan bulgu 1 · madde ↔ harita çelişkisi (✗, dokunulmadı):** `olaylar_ek6.js:25` (1730-08-12)
*"Tebriz, **Nahçıvan**, Hemedan … kaybı"* diyor. Ama Nahçıvan `d:` **1735-06-19**'a kadar
sürüyor (TDV `nahcivan`: *"1724-1735 yıllarında Osmanlı idaresinde kaldı"*). Culfa ve Ordubad
ise **1730-08-12**'de bitiyor. İkisi birden doğru olamaz. TDV esas: Nahçıvan 1735 doğru,
maddenin metnindeki "Nahçıvan" yanlış. Culfa ve Ordubad Nahçıvan hanlığının parçası
(TDV `nahcivan`: *"Nahcıvan ve Ordubâd olmak üzere iki ana idarî birim"*, TD 699'da
*Culha* Nahçıvan livası kazası). ⇒ **? emre-karari:**
Ⓐ Culfa·Ordubad bitişi Nahçıvan'la aynı (1735-06-19), madde metninden "Nahçıvan" çıkar.
Ⓑ Olduğu gibi kalsın, ayrışma kayda yazılsın. **Önerim Ⓐ.** Tek dayanak TDV `nahcivan`,
ama bu bölgeden şehre taşıma sayılır (D208). Onun için kararı sana bırakıyorum.

**Yan bulgu 2 · TDV `hoy` çelişkisi (?):** TDV `hoy`: *"Hoy tekrar Osmanlı hâkimiyeti altına
girdi (1724) ve on beş yıl kadar … 1739'da tekrar İranlılar'ın eline geçti."* Atlasta Hoy
**1730-08-12**'de bitiyor. TDV `tebriz` de Tebriz için *"1736 antlaşmasıyla"* diyor, atlas
1732-01-08. Kaynağın kendi içinde gerilim var (1730 Nâdir taarruzu genelde kabul edilir).
**? emre-karari**, ben seçmiyorum.

---

## H-0008 — 1724-10-03 · Revan · ▷ kosu-bekliyor

**Soru:** Kliçatak · Norapat · Kotur · Şeyh Salu-yı Ulya ele geçmeden mi Revan alındı?

**Ölçtüm (1724-10-04):** Kliçatak (40.464, 43.733) ve Norapat (40.142, 44.033)
`safevi`. Çevrelerindeki Gümrü·Eçmiyadzin·Revan·Iğdır·Beri OSMANLI. Norapat ADA aracında ada
çıkıyor (komşular Eçmiyadzin 22 km · Iğdır 25 km · Beri 31 km · Revan 41 km). Aynı delik
1590-06-01'de de var (1583-1604 penceresi).

**Kaynak / geçmiş:** Bu kusur **zaten hükme bağlandı:** `denetim/SAFEVI-DOGU-0081.md`
H-0045: *"Kliçatak · Norapat — HATA (bayat kopya) · U"*. Dönemler Gümrü/Eçmiyadzin'den
birebir kopyalanmış, kopyada Osmanlı pencereleri düşmüş. Emre'nin H-0045 kararıyla iki
pencere eklenmiş: 1583-09-13→1604-06-08 ve 1724-10-03→1735-10-03.
Uygulayıcı: `denetim/SAFEVI-DOGU-0081-uygula.py` (commit 6165543d). **Veride henüz YOK**
(`yerlesimler_sinir_kuzey.js`e o commit'ten sonra dokunulmamış).

**Hüküm:** Kusur gerçek ve kararı verilmiş, uygulaması bekliyor ⇒ ▷. Kotur ve Şeyh Salu
→ H-0010.

---

## H-0009 — 1725-07-28 · Tebriz · Serdeşt · ◔ olculemedi

**Soru:** Serdeşt Tebriz'le eşzamanlı fethedilmedi mi?

**Ölçtüm:** Serdeşt (36.16, 45.48) 1725-1735 `safevi`, hiç `d:` yok. Komşuları: Bâne ve Sakkız
`d:` **1723-11-10** (Bilgili 2016 dn.88, TD 1066 Pâne/Sakîz livası) · Mahabad `d:`
**1725-07-28** (Bilgili 2016 s.119, TD 909 Sovukbulak). ADA aracı: 1725-07-29'dan 1730'a kadar
**ada** (Bâne 41 km · Şehrizor 67 km · Sakkız 71 km · Mahabad 71 km, hepsi OSMANLI).

**Kaynak:** TDV'de Serdeşt maddesi yok. Başlık araması 0 sonuç verdi. İçerik araması 5 madde
getirdi (beytusi · haci-kadir-i-kuyi · muderris-abdulkerim · ruzbeyani · seccadi-alaeddin),
hepsi biyografi. 1720'lerdeki statü **bulunamadı**. `KAFKAS-KORFEZ-0081.md` H-0046 da 1590
penceresi için aynı sonuca vardı: *"Serdeşt/Sakkız Mukri bölgesidir ve Erdelân'a ait olduğu
da ayrıca kaynak ister"*.

**Hüküm:** ◔. Ada gerçek ve göze batıyor, ama Serdeşt'in hangi livaya bağlandığını gösteren
kaynak yok. **Seçenekler (Emre):** Ⓐ örtülü `d:` 1725-07-28→1730-08-12, "örtülü — dayanak:
Mahabad (TD 909)". 17 Eylül K5 kalıbıdır ve Mahabad'ın günü **kendi kaynağından** değil
Merâga'dan geliyor ⇒ bu **zincirleme devralma**, yasak. Ⓑ Bâne'nin kaynaklı penceresi
1723-11-10→1732-01-10: Bâne'nin günü de Senendec'ten (komşu) ⇒ aynı sorun. Ⓒ Bırak, ada
kalsın, okunacak kaynak Bilgili 2016'nın TD 909/1066 liva listeleri. **Önerim Ⓒ**: kaynak
okunmadan iki yol da zincir kuralını çiğniyor.

---

## H-0010 — 1725-09-12 · Gence · beş Safevî adası · ✗ hatali (karma)

**Soru:** Bütün batı Azerbaycan alındı, geride Kliçatak · Norapat · Şeyh Salu-yı Ulya · Kotur
· Serdeşt kaldı. Akıbetleri ne?

**Ölçtüm (1725-09-13):** ADA aracı 7 aday verdi. Beşi Emre'nin saydıkları, altıncısı
**Rāzhān** (37.383, 44.867 · k=4, Urmiye'nin 26 km'si, 1724-1730 `safevi`, görselde
Balıklı yanındaki "SAFEVİ İRAN" etiketi). Yedincisi Kutaisi (tâbi, gerçek).

| Nokta | Hüküm | Gerekçe |
|---|---|---|
| Kliçatak · Norapat | ✗ · ▷ | = H-0008, 0081 kararı var, uygulayıcı bekliyor |
| Kotur (38.475, 44.396) | ◔ | 17 Eylül **K10: "Kotur BEKLER"**. Doğusundaki Hoy'un günü (1724-09-28) kaynaksız, zincirleme devralma yasak. Bugün de Hoy kaydında `kaynak` alanı YOK. TDV `hoy` yalnız yıl veriyor ("1724"). TDV `maku` Kotur'u yalnız 1639 Kasr-ı Şîrîn yıkım şartında anıyor. Durum değişmedi. |
| Şeyh Salû-yi Ulyâ (38.993, 44.200) | ? emre-karari | Şeyhrumi'ye 8 km, Mâku'ya ~30 km. Mâku `d:` 1724-10-03, ama o gün de **komşudan** (Revan) ⇒ Şeyh Salu'yu Mâku'ya bağlamak zincir olur. Ⓐ **Revan'a doğrudan** bağla ("örtülü — dayanak Revan", Gümrü K5 kalıbı: tek halka) · Ⓑ bırak. Kaynağı **bulunamadı**. |
| Serdeşt | ◔ | = H-0009 |
| Rāzhān (Emre saymadı) | ? emre-karari | Urmiye `d:` 1724-01-01 (TDV `urmiye` yıl) · Ⓐ örtülü Urmiye (tek halka, Urmiye'nin yılı KENDİ kaynağından) · Ⓑ bırak |

**Hüküm:** ✗. İki kusur kaynaklı ve kararı verilmiş (Kliçatak·Norapat). Üçü ◔/? (kaynak
yok, zincir kuralı engelliyor). Ek olarak **Sero** (37.728, 44.643 · k=4) aynı durumda,
ama çevresi karışık olduğu için ADA'da çıkmadı.

---

## H-0011 — 1725-09-12 · Kuba · Şâbüran · ? emre-karari

**Soru:** Sefer sonunda Kuba ve Şâbüran kimde kaldı?

**Ölçtüm:** Kuba (41.360, 48.516) ve Şâbüran (41.21, 48.98) **1538→1736 `safevi`**. Şamahı
`v:` Hacı Dâvud · Kabala·Ereş·Şeki `d:` 1725-09-12 · Derbend·Bakü·Salyan `rusya`.

**Kaynak:**
- TDV `sirvan`: Hacı Dâvud *"1719 ve 1721'de **Kuba** ve Şemâhî şehirlerini ele geçirip
  yağmaladı"* · İstanbul Muahedesi 1724 ile *"Osmanlı Devleti … **Şirvan'ın merkezî kesimiyle
  birlikte Şemâhî**'yi de aldı. Bakü ile beraber **Şirvan'ın sahil kesiminin Ruslar'da**
  kalması Şirvan'ı ilk defa siyasî bakımdan böldü."*
- TDV `derbend--dagistan`: 1723 Petersburg antlaşmasıyla *"Derbend, Bakü ve Hazar
  denizinin güney kıyılarının büyük bölümü"* Rusya'ya.
- Kuba ve Şâbüran için şehir düzeyinde cümle **bulunamadı** (TDV `kuba` slug'ı **302**).

**Hüküm:** Kaynağın iki cümlesi de 1725'te Kuba/Şâbüran'ı **Safevî** göstermiyor. Şâbüran
kıyıya ~10 km, "sahil kesimi" (Rus) okumasına uyuyor. Kuba Hacı Dâvud'un 1719-21'de aldığı
şehir. Ama "yağmaladı" ile "elinde tuttu" aynı şey değil, ve sahil/merkez ayrımı şehir
listesi vermiyor (bölgeden şehre taşıma, D208). **Seçenekler:**
Ⓐ Kuba → Şamahı'nın `v:`si (Hacı Dâvud, 1722-11-01→), Şâbüran → `rusya` (Derbend/Bakü ile,
1722-09-03/1723-08-06→1735-03-21) · Ⓑ ikisi de Hacı Dâvud `v:` · Ⓒ bırak (safevi). Ⓐ ve Ⓑ
bölge cümlesinden şehre taşıma. Ⓒ ise kaynağın ima ettiğine ters. **Kararı sana
bırakıyorum.** Kesin okuma için Aktepe 1970 (*1720-1724 Osmanlı-İran münasebetleri*) ya da
1727 hudut tahriri gerekiyor.

---

## H-0012 — 1731-11-15 · Hekimoğlu Tebriz'i aldı · ✗ hatali (Urmiye eksik)

**Soru:** Tebriz ile Osmanlı toprağı arasını almadan mı Tebriz alındı?

**Ölçtüm (1731-11-15):** Tebriz `d:` 1731-11-15→1732-01-08, tek başına ada. Urmiye·Selmâs·Hoy·
Merend·Merâga 1730-08-12'den sonra `safevi`.

**Kaynak:**
- TDV `hekimoglu-ali-pasa`: *"Ali Paşa da Erzurum valiliğiyle Revan bölgesi seraskerliğine
  getirildi (Aralık 1730). **Önce Rûmiye'yi (Urmiye), ardından da** 15 Cemâziyelevvel
  1144'te (15 Kasım 1731) boşaltılan Tebriz'i alan Ali Paşa …"*
- TDV `urmiye`: *"Nâdir Şah 1729'da bölgeyi zaptettiyse de Hekimoğlu Ali Paşa ve Rüstem Paşa
  bir ay süren şiddetli bir kuşatmanın ardından Urmiye'yi ele geçirdiler (**1730**)."*
- **Maddenin kendi metni** (`olaylar_p0917kosu13.js:50`): *"aynı harekâtta Urmiye de
  alınmıştı"*. Yani madde söylüyor, harita göstermiyor.

**Hüküm:** ✗. Urmiye'nin 1730/31 geri alınışı haritada yok. Önerilen düzeltme:
Urmiye `d:` **1731-11-15 → 1732-01-08** (bitiş Tebriz'le aynı, G3-A6C-ANTLASMA). Başlangıç
**Tebriz günü, gün değil ÜST SINIR**. Kaynak Urmiye'nin *önce* alındığını söylüyor, gününü
vermiyor. Pencere Aralık 1730 (atama) ile 15 Kasım 1731 arası. En kaba **güvenli** gün,
Urmiye'nin kesinlikle Osmanlı olduğu ilk gün, yani 15 Kasım 1731 (D213). Kayda şu yazılır:
*"Urmiye bu günden ÖNCE alındı (TDV hekimoglu-ali-pasa 'önce Rûmiye'), gün bilinmiyor"*.
⚠️ TDV `urmiye` ise **1730** diyor: iki TDV maddesi ayrışıyor, ayrışma kayda yazılmalı.
Değişmez 2 açısından sorun yok: 1731-11-15 maddesi zaten var ve Urmiye'yi anıyor.

**Kalan ada:** Urmiye eklense de Tebriz ile Urmiye arasında Urmiye Gölü ve Selmâs·Hoy·Merend
kalıyor. Bunlar için 1731 kaynağı **bulunamadı** (Hoy için TDV'nin 1739 cümlesi → H-0007 yan
bulgu 2).

---

## H-0030 — 1776-04-16 · Basra İran işgalinde · ◔ olculemedi

**Soru:** Basra işgal edilirken Abadan, Fav ve Kürne ne oldu? Osmanlı arazisi pas geçilmiş
gibi görünüyor.

**Ölçtüm (1776-04-16):** Basra `s:zend` 1776-04-16→1779-04-01 · Kürne·Abâdân·Fâv·Ammâre
`d:` OSMANLI · Havîza·Ahvaz·Şüşter `zend` · Muhammere o gün **sahipsiz** (kaydında 1776'yı
kapsayan dönem yok, kent henüz kurulmamış; delik değil, çizilmiyor).

**Kaynak:**
- TDV `basra`: *"Şehir 1775-1779 yılları arasında Sâdık Han tarafından zaptedildiyse de
  tekrar geri alındı."* Yalnız ŞEHİR, çevre için tek kelime yok.
- TDV `abadan`: *"Uzun süre Osmanlı hâkimiyetinde kalan Abadan, 1847 Erzurum Antlaşması ile
  İran'a geçmiştir."* 1776-79 penceresini ayrıca anmıyor.
- Fâv ve Kürne: TDV'de 1776 cümlesi **bulunamadı**.

**Hüküm:** ◔. Atlas TDV ile çelişmiyor, ama "çelişmiyor" "doğru" demek değil: kaynak çevreyi
hiç söylemiyor. Görüntünün açıklaması coğrafya: Zend ordusu doğudan, Huzistan (Havîza) ve
Şattülarap üzerinden geldi. Petekte Abadan, Basra ile İran toprağı arasına düşen bir
**Osmanlı adası** oluyor ve "pas geçme" görünümü buradan çıkıyor. Okunacak kaynak TDV
`basra`nın kendi kaynakçasında: **Sâlih Muhammed el-Abîd, "Baṣra fî senevâti'l-miḥne
(1775-1779)", el-Mevrid XIV/3 (1985)** · Perry, *Karim Khan Zand*. Değişiklik önermiyorum.

---

## H-0075 — 1828-02-22 · Türkmençay kesik çizgisi · ✗ hatali

**Soru:** Kesik çizgi Türkmençay'ın çizgisiyse renk ona dayanmalı. Çizginin manası ne?

**Çizginin kimliği (ölçüldü):** `data/d_sinirlar_komsu.js` → `g4-rus-ir-DEGISTI-aras-talis`
· taraflar rusya/kacar · 1828-02-22 → 1893-06-08 · **sınıf C** · geometri *"Natural Earth
10m admin-0 (bugünkü sınır)"*. Soldaki dikey kesik çizgi ise `d1794-osm-kacar-kerden`
(Osmanlı–Kaçar, C, yine bugünkü sınır vekili). **C = "belge kaba"**: antlaşma çizgiyi
tarif ediyor, koordinatı bugünkü sınırdan ödünç. Motor rengi C çizgisine **yaslamaz**,
Değişmez 8a da C/YOK hatlarını muaf tutuyor. Renk ile çizginin ayrışması tasarımın
sonucu. Renk noktaların sahibinden gelir.

**Ölçtüm (1828-02-23), çizginin iki yakası:**
| Nokta | Atlas | Doğrusu | Kaynak |
|---|---|---|---|
| Şerur · Nahçıvan · Ordubad (Aras kuzeyi) | rusya | rusya ✔ | TDV `nahcivan`: hanlık 1828'de Rusya'ya |
| **Culfa** (38.955, 45.630: Aras'ın **kuzey** yakası, Nahçıvan tarafı) | **kacar** (1794→1923) | **rusya 1828-02-22** | TDV `nahcivan`: *Culha* Nahçıvan livası kazası (TD 699) · TDV `azerbaycan`: *"Aras nehrinin çizdiği sınırın kuzeyindeki parçası … Rusya'ya"* |
| Mâku · Hoy · Merend · Ahar (güney) | kacar | kacar ✔ | |
| **Lenkeran** | kacar → **1828**-02-22 rusya | rusya **1813** | TDV `talis-hanligi`: *"1 Ocak 1813'te Lenkeran'ı aldı; … Gülistan Antlaşması ile Taliş Hanlığı'nın büyük kısmı Ruslar'ın eline geçti"* · *"Türkmençay … 4. maddesine göre Lenkeran Hanlığı Ruslar'da **kaldı**"* |
| **Astara** (38.4292, 48.8728) | rusya 1828→ | ◔ | Koordinat Astara çayının **güney** (İran) yakasındaki Astara'ya düşüyor. Azerbaycan Astara'sı ~38.456 K. Hangi Astara kastedildi **ölçülemedi**. |

**Hüküm:** ✗, üç düzeltme:
1. **Culfa** `s:` kacar 1794-01-01→**1828-02-22**, sonra rusya → rusya-gecici → sovyet-rusya
   (Ordubad zinciriyle aynı). Kırılma günü Türkmençay maddesiyle aynı gün (`olaylar_ek7.js:211`),
   Değişmez 2 sorunu yok. ⚠️ Bölgeden şehre taşıma: TDV şehri adıyla Nahçıvan livasına
   sayıyor, Aras cümlesi coğrafî. Bayrak halkasına YAZILMAZ, `s:`'ye yazılabilir.
2. **Lenkeran** → **? emre-karari:** Ⓐ rusya **1813-10-24** (Gülistan; atlasta Gence'nin Rus
   günüyle aynı kural, madde `kronoloji_iran.js:286` var, ama o dosya Değişmez 2 evreninde
   değil) · Ⓑ 1813-01-01 (TDV'deki fetih günü, madde yok). 1826-27 İran dönüşü (TDV:
   *"Ruslar'ın Lenkeran'dan çekilmesini sağladı … İran birlikleri de 1827'de buradan
   ayrıldı"*) gün vermiyor, yazılmaz, fark bildirilir. **Önerim Ⓐ.**
3. **Madde metni** `olaylar_ek7.js:211`: *"Revan ve **Talış'ın Rusya'ya geçişi**"* TDV'ye ters
   (Talış 1813'te geçti, 1828'de "kaldı"). Önerilen başlık: *"Türkmençay Antlaşması: Revan ve
   Nahçıvan'ın Rusya'ya geçişi"*.
4. Astara: koordinatın kimliği ◔ (hangi yaka?), karar Emre'nin.

---

## H-0093 — 1833-02-20 · Iğdır'da boş arazi · ✗ hatali

**Soru:** Iğdır bölümünde yerleşimsiz boş arazi var, Rusya görünüyor, teyit edip giderelim.

**Ölçtüm (1833-02-20):** Iğdır (39.920, 44.045) ve Beri (39.917, 44.250) **OSMANLI**.
Sebep: ikisinin de `d:` **1534-01-01 → 1878-03-03** tek pencere, sonra `s:rusya`. Bu zincir
Kars'ın zinciri (Arpaçay·Küçükperveli de aynı). Kuzeydeki Norapat·Eçmiyadzin·Revan
**rusya**. Görseldeki yeşil kama, Aras'ın kuzeyindeki Rus peteklerinin (Norapat) Iğdır
ovasına sarkan ucu. Iğdır ile Digor (43.41 D) arasında Aras güney yakasında **hiç nokta
yok**: Tuzluca/Kulp, Kağızman, Aralık veride **yok** (ad araması: 0).

**Kaynak — TDV `igdir--sehir`** (`igdir` slug'ı **302**, ölü):
- *"Nihayet III. Murad'ın Revan'ın fethiyle sonuçlanan seferi esnasında Iğdır Kalesi ve
  önündeki Sürmeli Çukur **1583** yılında kesin olarak Osmanlı hâkimiyetine girmiş oldu.
  Revan'ın Osmanlı topraklarına katılmasından sonra Iğdır **Revan eyaletinin Aralık kazası**
  içinde yer alıyordu."*
- *"İstanbul Antlaşması'yla (1736) Revan eyaleti İran'a bırakılınca bu eyalet içinde bulunan
  Iğdır da Osmanlı sınırları dışında kaldı. **1827 yılında Ruslar'ın bu toprakları işgali
  neticesinde Iğdır Rusya yönetimindeki Surmalu (Sürmeli) sancağı içinde yer aldı.**"*
- *"Rus işgali döneminde (**1828-1917**)"* · *"3 Aralık 1920 tarihinde imzalanan Gümrü
  Antlaşması ile Türkiye sınırları içine alındı."*

**Hüküm:** ✗. Iğdır ve Beri **Kars'a değil Revan'a** bağlı. 1604'ten sonra atlasın gösterdiği
Osmanlılık yanlış. Önerilen zincir, Revan'ın kaynaklı zincirinin aynısı (ikisi de Revan
eyaleti; tek halka, zincir değil):
```
(başlangıç 0081 uygulayıcısına bırakılır: d: 1534-06-01 →)
d:  … → 1604-06-08                         Revan'ın kaybı (TDV revan)
s:  safevi   1604-06-08 → 1635-08-08
d:  1635-08-08 → 1636-04-01                Revan (IV. Murad)
s:  safevi   1636-04-01 → 1724-10-03
d:  1724-10-03 → 1735-10-03                Revan (Bilgili 2016 · TDV nadir-sah--iran)
s:  safevi   1735-10-03 → 1736-03-08 · afsar → 1747-06-20 · zend → 1794-01-01 ·
    kacar → 1828-02-22 · rusya → 1917-03-15 · rusya-gecici-hukumet → 1917-11-07
```
Kayda şu yazılır: *"TDV igdir--sehir: Revan eyaleti Aralık kazası · 1736 İran · 1827 Rus
işgali, Surmalu sancağı 1828-1917 · pencere günleri Revan kaydından (tek halka)"*.

🔴 **KOORDİNATÖRE ÇAKIŞMA UYARISI:** `denetim/SAFEVI-DOGU-0081-uygula.py` (bekliyor) Iğdır'ı
ve Beri'yi `d: 1534-06-01 → 1878-03-03` yapıyor, yani yanlış bitişi **yeniden yazıyor**. Önce
0081 (başlangıç), sonra bu zincir uygulanmalı. Ya da 0081'in Iğdır/Beri satırı bitişi
1604-06-08 olacak biçimde düzeltilmeli. Sıra ters olursa 0081 bu düzeltmeyi ezer.

**İki uç ölçüldü (D206):** Düzeltme Iğdır ovasını Rusya'ya verir. Güneyde Doğubayazıt
(39.548) OSMANLI kalır. Iğdır–Doğubayazıt orta çizgisi ~39.73 K, yani Ağrı Dağı sırtı
civarı. Surmalu–Bayezid sınırının bu sırt olduğu **beklenen ama kaynağı okunmamış**
(bulunamadı); uç en azından doğru yöne gider. Batıda Digor–Iğdır orta çizgisi
~43.73 D. **Tuzluca/Kulp (≈43.66 D, koordinat ölçülmedi) bu çizginin Osmanlı yakasına
düşer.** Kulp'un Surmalu'ya bağlı olduğu genel bilgidir ama **kaynağı okunmadı**. Doğruysa
noktasızlık hatası öbür yöne taşınır. Bu yüzden Tuzluca noktası önerildi
(`IRAN-KAFKAS-0082-YERLESIM-ONERI.md`), yoksa uç yarım düzelir.

**Yan bulgu (1917-1923, dokunulmadı):** Iğdır `sovyet-rusya` 1917-11-07 → **1921-10-13**.
TDV: *"1918-1919 yıllarında Ermeni çetelerinin etkili olduğu Iğdır, 3 Aralık 1920 … Gümrü
Antlaşması ile Türkiye sınırları içine alındı."* Atlasın 1918 (Batum), 1918-20 (Ermenistan)
ve 1920 (Türkiye) aşamaları eksik. Revan kaydındaki `ermenistan-demokratik-cumhuriyeti`
zinciri örnek alınabilir. **? emre-karari** (1923 kolunun işi).

---

## H-0094 — 1833-02-20 · Iğdır neden Rusya tarafında · ✗ hatali (kök = H-0093)

**Ölçtüm:** Veride Iğdır 1833'te **OSMANLI**, ama görselde nokta yeşil kamanın içinde
duruyor. Motor çıktısını ölçmeye çalıştım: `ARAC-IRAN-KAFKAS-0082-GOVDE.py`, yani
`devletler_harita.js` `rusya` dönemi 1833-01-01→1834-01-01, 525 parça. Iğdır dışarıda
çıktı, ama **Revan ve Tiflis de dışarıda** çıktı (Moskova içeride). Demek ki Kafkas yeşili bu
gövdeden değil `donemler.js`in yabancı petek katmanından geliyor, ve onu çözmedim ⇒
**görselin yeşilinin hangi petekten geldiği ölçülemedi.**

**Hüküm:** ✗. Soru "Iğdır neden Rusya'da görünüyor", ama kaynağa göre 1833'te Iğdır
**gerçekten Rusya'daydı** (TDV: 1827 işgal, Surmalu sancağı 1828-1917). Yanlış olan, verinin
onu Osmanlı yazması. H-0093 düzeltmesi uygulanınca yeşil kama tarihî olarak doğru bölgeye,
yani Iğdır ovasının tamamına yayılır.

---

## H-0095 — 1833-02-20 · "Bu kırmızı hat ne hattı" · ✗ hatali (Iğdır) · Hulo ✔

**Çizgilerin kimliği (ölçüldü, `ARAC-…-SINIR.js 1833-02-20`):**
| Çizgi | Ne |
|---|---|
| Yeşil kenarlı koyu hat, Posof → Arpaçay → Aras | `d1829-osm-rus-1` (41.09-41.59 K) + `d1829-osm-rus-2` (40.13-41.13 K) · **Edirne 1829** · 1829-09-14 → 1878-07-13 · **sınıf E** (hukukî kesin) · geometri bugünkü sınır, *"'değişmedi' dayanağına bağlı"* |
| Bordo zikzak | O günün **Osmanlı gövdesinin dış kenarı**, yani peteklerden türeyen boyama sınırı. Antlaşma çizgisi değil. |

Görselde iki çizginin ayrıldığı yerler (Posof-Ahılkelek arası çıkıntı · Arpaçay'ın
güneyinde Iğdır kaması), petek boyamasının E hattını aştığı yerler. Bu tam **Değişmez 8a**
sınıfı: şehir bölgesi ülke sınırını aşamaz, motor çıktısını ölçer.

**Noktaların ölçümü:** Hulo (Acara) 41.645/42.310 **OSMANLI** · Makhalak'auri 41.567/42.417
**OSMANLI** · Posof · Saylıca OSMANLI · Ahıska · Zazalo · Ts'q'altbila **rusya** (1829-09-14).
Acara 1878'e kadar Osmanlı'ydı ⇒ Hulo ve Makhalak'auri ✔ **doğru**, Emre'nin şüphesi yerinde
ve veri de öyle diyor. Iğdır ✗ (= H-0093). Bordo çizginin E hattından sapması
▷ kosu-bekliyor: 8a defterinde ölçülür, veri düzeltmesi koşudan sonra görünür.

**Yan bulgu:** Hulo·Posof·Şavşat·Artvin·Saylıca `d:` **1878-03-03**'te (Ayastefanos) bitiyor,
ama Batum **1878-07-13**'te (Berlin). Acara'nın iç kısmının Batum'dan 4 ay önce Rusya'ya
geçmesi tutarsız: Ayastefanos imzası fiilî devir değildir. Acara'nın teslim günü için
kaynak okumadım (**bulunamadı**). **? emre-karari** (Kars-Batum 1878 kolunun işi).

---

## Emre'ye düşen kararlar (tek yerde)

| # | Karar | Seçenekler · önerim |
|---|---|---|
| E1 | Culfa·Ordubad 1730 ↔ Nahçıvan 1735 (H-0007) | Ⓐ 1735'e hizala + madde metni **(önerim)** · Ⓑ bırak |
| E2 | TDV `hoy` 1739 · TDV `tebriz` 1736 ↔ atlas 1730/1732 (H-0007) | bildirildi, seçmiyorum |
| E3 | Gîlân Rus çekilişi 1732 ↔ TDV 1734 (H-0006) | bildirildi, seçmiyorum |
| E4 | Serdeşt (H-0009) | Ⓒ kaynak okunana dek bırak **(önerim)** |
| E5 | Şeyh Salu · Rāzhān örtülü tek halka (H-0010) | Ⓐ Revan'a / Urmiye'ye bağla · Ⓑ bırak (öneri yok) |
| E6 | Kuba · Şâbüran (H-0011) | Ⓐ Kuba tâbi + Şâbüran Rus · Ⓑ ikisi tâbi · Ⓒ bırak (öneri yok) |
| E7 | Lenkeran Rus günü (H-0075) | Ⓐ 1813-10-24 **(önerim)** · Ⓑ 1813-01-01 |
| E8 | Astara koordinatı hangi yaka (H-0075) | ölçülmeli |
| E9 | Iğdır 1917-1923 (H-0093) | 1923 koluna |
| E10 | Acara 1878-03-03 ↔ Batum 1878-07-13 (H-0095) | Kars-Batum koluna |

## Uygulamaya hazır (kaynaklı, karar gerektirmeyen)
1. **Iğdır · Beri** zinciri (H-0093), 0081 uygulayıcısıyla **sıralı**.
2. **Urmiye** `d:` 1731-11-15 → 1732-01-08 (H-0012).
3. **Culfa** rusya 1828-02-22 (H-0075).
4. `olaylar_ek7.js:211` başlığı (H-0075).
5. Kliçatak·Norapat: zaten `SAFEVI-DOGU-0081-uygula.py`de.
6. Nokta önerileri → `denetim/IRAN-KAFKAS-0082-YERLESIM-ONERI.md` (koordinatlar ÖLÇÜLMEDİ).
