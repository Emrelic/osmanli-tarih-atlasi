# KASA-SUMER-KUR-1010 — MÖ noktalarının `kur:` borcu

Görev: YILDIRIM BAYEZIT (Dēr kararı sonrası · MIMARI §5 MÖ kuralı: "var olmayan nokta yoğunluk
sayılmaz") · Araştırmacı: KASA · `data/` DONUK — öneri yazılır.
Kapsam: KASA-SUMER-NOKTA-1010'un 15 yeni sitesi + Susa + Dēr (KASA-DER-1010). Bilgi için
SUMER-KUNYE'nin 10 sitesinin Pleiades en erken tasdiki de verilir (o sitelerin `kur:` hükmü
SUMER-KUNYE kıtasınındır).
Kural: her site için en erken TASDİK (dönem + kaynak) → `kur:` önerisi · `kesinlik` "onyil"
ya da daha kaba · türetilmişse `ic_not:"🔴 TÜRETİLMİŞ, ÖLÇÜM DEĞİL"` · bulunamazsa
`bulunamadı` ve site MÖ 3000'den beri var SAYILMAYA DEVAM EDER (beyan).
Astronomik yıl: MÖ N ↔ `-(N−1)`.

## 0. ÖNGÖRÜ (ölçümden ÖNCE, 2026-10-10)
**Kaynak:** neredeyse tamamen Pleiades tasdik etiketleri + açıklamaları (TDV MÖ siteleri
kapsamıyor; DergiPark'ta site-bazında kuruluş cümlesi seyrek).
**Sınıflar (17 site):**
- **A — MÖ 3000'den ÖNCE tasdikli** (Ubeyd/Uruk/Kalkolitik etiketi) ⇒ `kur:` gereksiz,
  MÖ 3000 varsayımı DOĞRU: **4 ± 1** (Girsu · Eşnunna · Tutub · Susa; belki Ubaid).
- **B — Erken Hanedanlar (~MÖ 2900-2350) ilk tasdik** ⇒ `kur:` ≈ ED başı, `onyil`/`yuzyil`:
  **4 ± 1** (Kisurra · Dilbat · Marad (açıklamada "ca. 2700") · Opis hariç).
- **C — ilk tasdik MÖ 2. binyıl ya da sonrası** ⇒ MÖ 3000 varsayımı YANLIŞ olabilir, `kur:`
  ileri çekilmeli: **5 ± 2** (Bad-tibira "old-babylonian" · Kutha "2nd-millennium" · Durum
  "neo-assyrian" · Dēr "archaic" · Nina/Sippar/Dilbat'ın yalnız archaic/classical etiketleri).
- **D — `bulunamadı`** (etiketsiz ya da yalnız "modern"): **2 ± 1**.
⚠️ Beklediğim en büyük sorun: **Pleiades'in tasdik etiketi bir YOKLUK kanıtı değil** —
Sippar ya da Nina'nın yalnız "archaic" etiketli olması, o sitelerin MÖ 3. binyılda OLMADIĞI
anlamına gelmez, yalnız Pleiades'in o dönemi KAYDETMEDİĞİ anlamına gelir (⑦: "okuyamadım"
belge hakkında bir şey söylemez). ⇒ C sınıfının en az yarısı aslında "kaynak eksik", "site
yok" değil — `kur:` önerisi ile "bulunamadı" arasındaki seçimi bu belirleyecek.
**Pleiades dönem sözlüğü** (HTTP 500 idi): yeniden denenecek; açılmazsa dönem yıl aralıkları
`bulunamadı` ve yalnız etiket adı yazılır.

## 1. ÖLÇÜM (2026-10-10)

### 1.0 Kaynak ve yöntem
- **Pleiades tasdik etiketleri** (her yerin `locations[].attestations` + `names[].attestations`)
  ve **Pleiades açıklamaları** (adlı yazarlı; KASA-SUMER-NOKTA §1.2'de birebir).
- **Dönem yıl aralıkları** Pleiades zaman dönemi sözlüğünden ÇEKİLDİ (HTML sayfası 200; JSON
  ucu hâlâ 500) — https://pleiades.stoa.org/vocabularies/time-periods:
```
Ubaid period in Mesopotamia            6500–3800 BC   [[-6500,-3800]]
Chalcolithic Mesopotamia               6200–3750 BC
Ubaid-Early Dynastic II Mesopotamia    5500–2600 BC
Uruk Mesopotamia                       4000–2950 BC   "Protoliterate Mesopotamia"
3rd Millennium BC                      3000–2000 BC
Early Dynastic Mesopotamia             2950–2350 BC
Akkadian-Ur III Mesopotamia            2335–2000 BC   "Akkadian—Neo-Sumerian"
Old Babylonian/Assyrian Mesopotamia    2000–1600 BC
2nd Millennium BCE                     2000–1000 BC
Later 2nd Millennium BC Mesopotamia    1600–1000 BC   "Middle Assyrian/Middle Babylonian/Kassite"
Early 1st Millennium BC Mesopotamia    1000–720 BC    "Period as defined by Jamie Novotny"
Neo-Assyrian/Babylonian Middle East    720–540 BC
Archaic (Greco-Roman)                  750–550 BC     ⚠️ YUNAN-ROMA dönemi
Classical (Greco-Roman)                550–330 BC     ⚠️ YUNAN-ROMA dönemi
```
- 🔴 **Ayrım (öngörüde uyardığım, ölçümle doğrulandı):** "archaic / classical / hellenistic"
  etiketleri **Yunan-Roma dünyası** dönemleridir ve Mezopotamya sitelerine **Barrington Atlas**
  (Yunan-Roma dünyası atlası) kapsamından gelir. Yalnız bu etiketleri taşıyan bir site için
  "en erken tasdik MÖ 750" demek, **atlasın kapsamını sitenin yaşı sanmak** olur. ⇒ Bu
  etiketler `kur:` için KULLANILMADI; yalnız Mezopotamya (ME) dönemi etiketleri sayıldı.
- Okul: Pleiades dönem aralıkları kronoloji okulunu ADIYLA söylemiyor; Akkad-Ur III başı 2335
  ve Eski Babil sonu 1600 **orta kronolojiyle uyumlu** (HUKUM §3-c) — beyan.

### 1.1 Öngörü sınavı
```
sınıf                                   öngörü     ölçüm
A  MÖ 3000'den ÖNCE tasdikli            4 ± 1      5 (Girsu · Tutub · Susa · Eşnunna · Tell al-Ubaid) — TUTTU
A' tasdik "3. binyıl" (3000-2000)       —          2 (Isin · Zabalam) — öngörmediğim ara sınıf
B  Erken Hanedanlar / Akkad ilk tasdik  4 ± 1      4 (Kisurra · Marad · Dilbat · Borsippa) — TUTTU
C  MÖ 2. binyıl ya da sonrası           5 ± 2      4 (Bad-tibira · Kutha · Tell al-Lahm · Dēr) — TUTTU
D  bulunamadı                           2 ± 1      2 (Sippar · Nina) — TUTTU
"C'nin yarısı aslında kaynak eksik"     ≥ yarısı   Sippar · Nina · Dēr yalnız GR etiketli ⇒ ÜÇÜ de
                                                   "kaynak eksik", "site yok" DEĞİL — TUTTU
🆕 yoğunluk kesitlerinde çekirdek       (öngörülmedi)  her kesitte AÇ — bkz. 1.3
```

### 1.2 `kur:` önerileri — 17 site (15 yeni + Susa + Dēr)
| site | en erken ME tasdiki (Pleiades) | `kur:` önerisi (MÖ ↔ astr.) | `kesinlik` | sınıf · not |
|---|---|---|---|---|
| Girsu | ubaid (6500-3800) | **YAZILMAZ** — MÖ 3000 varsayımı tasdikle DOĞRU | — | A |
| Tutub (Khafajah) | chalcolithic (6200-3750) | YAZILMAZ | — | A |
| Susa | chalcolithic (6200-3750) | YAZILMAZ | — | A (Elam, kenar) |
| Eşnunna | uruk (4000-2950) | YAZILMAZ | — | A |
| Tell al-Ubaid | uruk (4000-2950) | YAZILMAZ | — | A (yalnız "uruk" etiketi; sonrası tasdiksiz — `t:`/terk sorusu ayrı) |
| Isin | 3rd-millennium-bc (3000-2000) | YAZILMAZ | — | A' — tasdik BİNYIL çözünürlüğünde; MÖ 3000 varsayımıyla ÇELİŞMİYOR ama DOĞRULANMIYOR. Açıklama: "founded as late as the Early Dynastic Period, possibly already in the Ubaid period" (yılsız) |
| Zabalam | 3rd-millennium-bc (3000-2000) | YAZILMAZ | — | A' — aynı |
| Kisurra | early-dynastic (2950-2350) + açıklama "established in the Early Dynastic II period (ca. 2700 BCE)" | **MÖ 2700 ↔ `-2699`** | `onyil` | B · 🔴 TÜRETİLMİŞ, ÖLÇÜM DEĞİL ("ca.") — dönem etiketi 2950 verir, açıklama 2700 der; açıklama SİTEYE ÖZGÜ olduğu için esas |
| Marad | ME etiketi yalnız neo-assyrian (720-540) · açıklama "established in the Early Dynastic Period (ca. 2700 BC)" + "Eigikalama, is attested from the Old Akkadian Period" | **MÖ 2700 ↔ `-2699`** | `onyil` | B · 🔴 TÜRETİLMİŞ — etiket ile açıklama 2.000 yıl AYRIŞIYOR; açıklama (adlı yazarlı, RLAss'a dayalı) esas, etiket eksik |
| Dilbat | ME etiketi YOK (yalnız GR) · açıklama "going back to the city’s founding in the Early Dynastic Period, ca. 2700 BC" | **MÖ 2700 ↔ `-2699`** | `onyil` | B · 🔴 TÜRETİLMİŞ — aynı desen |
| Borsippa | akkadian-ur-iii (2335-2000) | **MÖ 2335 ↔ `-2334`** | `yuzyil` | B · 🔴 TÜRETİLMİŞ — dönem BAŞI; site dönemin içinde herhangi bir yılda tasdikli olabilir ⇒ `yuzyil` |
| Bad-tibira | old-babylonian (2000-1600) | **MÖ 2000 ↔ `-1999`** | `yuzyil` | C · 🔴 TÜRETİLMİŞ. ⚠️ Açıklama: Sümer Kral Listesi'ndeki "Tufan öncesi beş kentten biri" — EFSANE, tasdik değil; ama literatürde ED'den bilindiği muhtemel ⇒ "kaynak eksik" adayı |
| Kutha | 2nd-millennium / old-babylonian (2000-) | **MÖ 2000 ↔ `-1999`** | `yuzyil` | C · 🔴 TÜRETİLMİŞ |
| Tell al-Lahm (Durum?) | neo-assyrian (720-540) | **MÖ 720 ↔ `-0719`** | `yuzyil` | C · 🔴 TÜRETİLMİŞ; kimliği bile "probably" |
| Dēr | ME etiketi YOK (yalnız GR) · Pekşen 2021: II. Sargon dönemi (MÖ 1. binyıl) | **MÖ 750 ↔ `-0749`** (koordinatör kararı, KASA-DER) | `yuzyil` | C · 🔴 TÜRETİLMİŞ — Pleiades "archaic" alt sınırı; GR etiketi olduğu için 1.0'daki uyarı burada da geçerli: bu bir ALT SINIR, kuruluş değil |
| Sippar | ME etiketi YOK (yalnız GR) | **`bulunamadı`** | — | D · MÖ 3000'den beri var SAYILMAYA DEVAM EDER — **beyan**. Sippar literatürde çok eski bir kent; burada kaynaklı tasdik açılmadı |
| Nina (Tell Zurghul) | ME etiketi YOK (yalnız GR) | **`bulunamadı`** | — | D · aynı beyan |

**SUMER-KUNYE'nin 10 sitesi (bilgi — hüküm o kıtanın):** hepsi **A sınıfı**, MÖ 3000
varsayımı tasdikle DOĞRU — Uruk · Ur · Kiş · Nippur · Larsa (chalcolithic, 6200-) · Eridu ·
Umma (ubaid, 6500-) · Şuruppak (ubaid-ED II, 5500-) · Adab (uruk, 4000-) · Lagaş
(3rd-millennium, A'). ⇒ Bu 10'un `kur:` borcu YOK.

### 1.3 Yoğunluk kesitleri — `kur:` önerileri uygulanınca çekirdek hâlâ AÇ mı?
motor_kara · 0,05° hücre merkezi · R=6371,0088 · çekirdek 3584 hücre · Ç1 her kesitte VAR
(`tur:"bolge"`, zamandan bağımsız). "BUL=var": Sippar+Nina MÖ 3000'den beri sayılır (motorun
bugünkü davranışı); "BUL=yok": temkinli, sayılmaz.
```
kesit     BUL=var: nokta  p95    azamî   BUL=yok: nokta  p95    azamî   kova
MÖ 3000   20              118,7  177,7   18              118,7  177,7   AÇ
MÖ 2700   23              111,4  177,7   21              111,4  177,7   AÇ
MÖ 2335   24              111,4  177,7   22              111,4  177,7   AÇ
MÖ 2000   26              111,4  177,7   24              111,4  177,7   AÇ
MÖ 1000   26              111,4  177,7   24              111,4  177,7   AÇ
MÖ 601    28              111,4  177,7   26              111,4  177,7   AÇ
```
⇒ **Çekirdek, `kur:` borcu ödendiğinde de HER kesitte AÇ** — en zor an MÖ 3000 (p95 118,7;
Kisurra/Marad/Dilbat/Borsippa henüz yok), eşiğin 31 km altında.
⇒ **Sippar ve Nina'nın `bulunamadı` olması kapıyı ETKİLEMİYOR** (iki modda aynı p95) — yani
bu iki sitenin kaynaksız "MÖ 3000'den beri var" sayılması yoğunluk sonucunu ŞİŞİRMİYOR. Bu,
"var olmayan nokta yoğunluk sayılmaz" kuralının bu kutuda **ihlal edilmediğinin** ölçümü.
⚠️ Kesitler Ç1'e dayanıyor; Ç1 olmadan MÖ 3000 kesiti ölçülmedi (Ç1 koordinatör kararıyla kalıcı).

## 2. ③ İSTİYORUM
a) 1.2'deki 8 `kur:` önerisini onayla (Kisurra · Marad · Dilbat → `-2699` onyil; Borsippa
   `-2334`; Bad-tibira · Kutha `-1999`; Tell al-Lahm `-0719`; Dēr `-0749` — hepsi yuzyil/onyil,
   hepsi TÜRETİLMİŞ beyanlı). 9 site `kur:`suz (5 A + 2 A' + 2 D beyanlı).
b) **Kural önerisi:** Pleiades'in Yunan-Roma dönem etiketleri (archaic/classical/hellenistic)
   Mezopotamya ve Mısır sitelerinde `kur:` kaynağı SAYILMASIN — Barrington Atlas kapsamıdır.
   Dēr'in `-0749`'u bu kurala istisna: orada GR etiketi Pekşen'in Yeni Asur tanıklığıyla örtüşüyor.
c) Marad ve Dilbat'ta Pleiades'in KENDİ etiketi ile açıklaması ~2.000 yıl ayrışıyor (etiket
   neo-assyrian/yok, açıklama ED). Açıklamayı esas aldım (siteye özgü, adlı yazarlı). Onay?
d) Sippar · Nina · Bad-tibira · Kutha için akademik ikinci tur (MÖ 3. binyıl tasdiki) — kapıyı
   etkilemiyor (1.3), yani ÖNCELİKSİZ. İster misin?
