# ÖLÇÜM — HASSASİYET UYUMSUZLUĞU ORANI · ㉑ KOL · OPUS HAZIR KITA 124

> **HÜKÜM VERMEDİM, SAYDIM.** Hiçbir günü *"yanlış"* ilan etmiyorum —
> beyanla veri arasındaki **mesafeyi** ölçtüm. Bir günü yanlış ilan etmek
> kaynağa dönmeyi gerektirir ve bu kalem onu istemiyor.
>
> `data/` ve `arac/` donuk; dokunulmadı. Evren `denetim/DAYANAK-*.json`.
> 7 Eylül 2026.

---

## ⓪ ÖZET — VE **TEK BİR ORAN VERİLEMEZ**

Sevk *"o oranı ölç"* diyor. Ölçtüm, ve dürüst cevap şu: **payda üçe
bölünüyor ve hassasiyet sorusu üçünden yalnız birine sorulabilir.**

```
ham kayıt                                    252
🔵 BEKLEYEN İŞ (`kalan_gunler`) — paydaya GİRMEZ   104
────────────────────────────────────────────────────
PAYDA — dayanaklandırılmış gün                148
   🟢 DIŞ kaynak gösteriyor      92  (%62,2)  ← soru YALNIZ buna sorulabilir
   🔵 dayanak ATLASIN KENDİ İÇİNDE 33  (%22,3) ← remitte YOK, dördüncü sınıf
   ⚫ `bulunamadı` beyanı         23  (%15,5)  ← karşılaştırılacak kaynak yok
```

🔴 **104'ü paydaya koymak *"hassasiyet uyumsuzluğu %X"* diye bir sayı
üretirdi ve o sayı yanlış olurdu** — ölçtüğü şey hassasiyet değil, **işin
ne kadarının yapıldığı** olurdu.

---

## ① 🔴 REMİTTE OLMAYAN DÖRDÜNCÜ SINIF: **DAYANAK ATLASIN KENDİ İÇİNDE**

Sevk üç kova veriyor (🟢 gün · 🟡 yıl/ay · 🔴 başka gün). Örneklem
okurken dördüncüsü çıktı ve **33 kayıt (%22,3)** taşıyor:

```
damga  "DAYANAK_ATLASIN_ICINDE_VERI_ONU_KULLANMIYOR"
dayanak `devletler.js` künyesi (f:/t:) · `data/olaylar_ek9.js:99` ·
        `kunye_capraz` alanı
```

⇒ Bu kayıtlarda **karşılaştırılacak dış hassasiyet YOK.** Onlara *"kaynak
kaba mı"* diye sormak, **soruyu yanlış nesneye sormaktır** — ve 🟡 sayarsak
*"kaynak yıl veriyor"* diye **yanlış** raporlanırlar.

📌 Ve `DAYANAK-ASYA-0907.json`ın kendi `_MANSET`i bunu zaten yazmış:
> *"Kovanın en büyük kazancı dışarıdan getirilen kaynak değil, **İÇERİDE
> ZATEN DURAN** dayanağın ölçülmesi oldu."*

⚠️ Bu bir kusur **değil** — `§4`ün *"künyenin `f:`/`t:` günü bir KAYNAK
DEĞİLDİR"* kuralıyla birlikte okunmalı: künyeyi dayanak göstermek dış
kaynak yerine geçmez, **ama bir çelişki de değildir.** Sınıflandırılması
gerekir, hükmü Emre'nin.

---

## ② ÖLÇÜLEN ORAN — iki bağımsız aletle, ve **ayrıştılar**

### Alet A — külliyatın KENDİ BEYANI (güvenilir, ama ALT SINIR)

Bu külliyat kendi hassasiyetini işaretliyor (`hassasiyet:` alanı ·
*"GÜN DOĞRULANMADI"* damgası). Bir beyanı saymak, bir metni ayrıştırmaktan
güvenilir — **beyan yazanın hükmüdür, benim tahminim değil.**

```
🟡 "kaynak GÜNÜ vermiyor" diye KENDİ BEYAN EDEN   15 / 148  (%10,1)
🟢 "günün dayanağı / birebir" beyanı taşıyan      17 / 148  (%11,5)
⚪ hassasiyet beyanı HİÇ taşımayan               116 / 148  (%78,4)
```

Beyan edenler:
```
1368-04-01 · 1644-10-01 · 1735-08-31 · 1767-04-07 · 1797-05-12 ·
1815-06-09 · 1648-10-24 · 1866-10-03 · 1878-07-13 · 1882-09-07 ·
1901-09-02 · 1903-01-10 · 1916-05-23 · 1917-03-15 · 1918-11-11
```

⚠️ **ALT SINIR, çünkü beyan eksik olabilir** — işaretlemeyi unutan kayıt
görünmez.

### Alet B — metinden tarih hassasiyeti çıkarma (**GÜVENİLMEZ ÇIKTI**)

Regex ön taraması 11 kayıt işaretledi. **Elle okudum — 7'si yanlış
pozitif:**

```
1917-12-06  «Parliament adopted the Declaration on 6 December»  -> gün VAR
            (31 Aralık AYRI olay: Sovyet tanıması, kayıt AYIRIYOR)
1821-09-27  «entró triunfante … el 27 de septiembre de 1821»     -> gün VAR
            (28 Eylül ELENMİŞ aday: Acta imzası, kayıt AYIRIYOR)
1880-09-01  «From and after the first day of September, 1880»    -> gün VAR
            (31 Temmuz emirnamenin İMZA günü, atlas YÜRÜRLÜK gününü alıyor)
1830-09-27  «Sept. 27, 1830»                                     -> gün VAR
            (15 Eylül GÖRÜŞMELERİN başlangıcı)
1814-01-14  «on 14th January 1814»                               -> gün VAR
            🔴 benim regexim "14th" SIRA SAYISINI TANIMADI — ALET KUSURU
```

🔴 **Alet B hassasiyeti değil YAZIM BİÇİMİNİ ölçüyor.** İngilizce sıra
sayısı (`14th January`), yazıyla sayı (`tenth day of December`), İspanyolca
(`27 de septiembre`) — üçünü de kaçırıyor ya da yanlış sınıflıyor.

📌 Bu, projenin kendi kuralının doğrulanması: ***`⚪`/`🟡` ayrımı
otomatikleştirilemez; otomatikleşebilen tek kova `🔴` (yokluk), çünkü ölçüt
yorum değil VARLIK.*** Alet B'yi yazdım, koşturdum, **çürüttüm** — ve
çürütmesi bir kayıp değil, sınırın ölçülmesi.

---

## ③ ELLE OKUNMUŞ ÖRNEKLEM — Ⓐ kovası

⚪ 116'nın hepsi ölçülemez değil. İkiye ayırdım:

```
⚪Ⓐ alıntı VAR, beyan yok   65   -> OKUNARAK ölçülebilir (UCUZ)
⚪Ⓑ alıntı YOK, yalnız slug 54   -> KAYNAĞA DÖNMEK gerekir (PAHALI)
```

Ⓐ'dan **19 kayıtlık örneklem** (dosya başına tavan 5 — çarpıklık önlemi:
PAYLAŞILAN tek başına Ⓐ'nın yarısı) okundu:

```
🟢 kaynak GÜN veriyor    ~7   Treaty 6 «23rd day of August … 1876» ·
                              Paris «tenth day of December … 1898» ·
                              Confederation «1 July 1867» · Choctaw ·
                              «30 Mayıs 1913 Londra»
🟡 kaynak YIL/AY veriyor ~7   «Mart 1917'de» (atlas 15 Mart) ·
                              «settled them in Malta in 1530» ·
                              Kamen *Spain 1469-1714* (gün yok) ·
                              British Columbia: gövde YILI veriyor,
                              GÜN yalnız arama özetinde
🔴 kaynak BAŞKA GÜN       1   🔴 1752-04-23 — alıntı «23 MART 1752»,
                              atlas 23 NİSAN. Ay farkı.
                              Kayıt bunu KENDİ işaretlemiş:
                              damga `AY_SUPHELI_GUN_VE_YIL_DOGRULANDI`
⚪ ölçülemedi            ~4   dayanak künye içi ya da `bulunamadı`
```

⚠️ **Bu bir ORAN DEĞİL, bir TAHMİN** — 19'luk örneklem küçük bir oranı
ayırt edemez, ve sınıflandırma benim **okumam**, kaydın beyanı değil.
Birkaçı sınırda (bir künye atfının 🔵 mi ⚪ mı olduğu tartışılabilir).

---

## ④ 🔴 SINIFIN EN DEĞERLİ ÜYESİ — ve ⑲'un bulduğuyla aynı desen

⑲ `1918-10-26` bulmuş (TDV `halep` *"27 Ekim 1918"*, 1 gün fark). Ben
ikisini daha buldum:

| atlas | kaynak | fark | sınıf |
|---|---|---|---|
| `1752-04-23` | «23 **Mart** 1752» | 1 ay | 🔴 başka gün |
| `1916-05-23` | «6 **Kasım** 1916'da öldürüldü» | ~5,5 ay | 🔴 başka gün |
| `1918-10-30` | TDV: *"1918"* + *"5 Mart 1919"* | gün YOK | 🟡 |

🔴 **Ve `1752-04-23` ile `1916-05-23`ün ortak yanı:** ikisi de **gün
sayısı AYNI** (23), ay farklı. Bu bir **tesadüf olabilir** — iki vaka bir
desen kurmaz ve **ölçmedim**. Ama bir sonraki oturum için not: eğer bir
veri girişi *"gün doğru, ay kaydı"* biçiminde bir hata sınıfıysa, gün
sayısının korunması onun imzası olurdu.

⚠️ **Hüküm vermiyorum.** İkisi de kaynağa dönmeyi gerektirir; ben yalnız
**mesafeyi** ölçtüm.

---

## ⑤ KÜNYE TARAFIYLA YAN YANA — Emre'ye tam tablo

Sevk *"`§4` bunu künye tarafında zaten ölçmüş, ikisini yan yana koymak
Emre'ye tam tabloyu verir"* diyor. Yan yana:

| | evren | gün taşıyor ama kaynak **desteklemiyor** |
|---|---|---|
| **KÜNYE** (`§4`, 4 Eylül) | 591 künye | **147** — gün var, `kaynak` *"bulunamadı"* ile başlıyor |
| **DAYANAK** (bu ölçüm) | 148 gün · dış kaynaklı **92** | **15 beyanlı** + Ⓐ örnekleminde ~%37 |

🔴 **AMA İKİSİ AYNI ŞEYİ ÖLÇMÜYOR ve toplanamazlar:**
```
KÜNYE tarafı   ölçüt: `kaynak` alanı "bulunamadı" DİYOR MU     (VARLIK)
DAYANAK tarafı ölçüt: alıntının HASSASİYETİ atlası taşıyor mu  (YORUM)
```
Birincisi otomatik sayılabilir, ikincisi **sayılamaz** (②'de ölçüldü:
7/11 yanlış pozitif). ⇒ Yan yana koymak **meşru**, toplamak değil.

📌 Ve `§4`ün 147'lik ölçümü kendi paydasını da düzeltmişti (161 → 147,
`1923-10-29` pencere işaretleri elenerek). Aynı disiplin burada payda
ayrımında uygulandı (252 → 148 → 92).

---

## ⑥ FİYAT ETİKETİ — bu borcu kapatmanın maliyeti

| kova | kayıt | ne gerekiyor |
|---|---|---|
| 🟡 beyanlı | 15 | kaynağa dön, günü ara — ya da `§4` gereği tarihi **kabalaştır** |
| ⚪Ⓐ alıntı var | 65 | **okumak yeter**, kaynağa dönmek gerekmez — ucuz |
| ⚪Ⓑ alıntı yok | 54 | kaynağa dönmek gerekir — pahalı |
| 🔵 atlas içi | 33 | kaynak işi değil, **sınıflandırma kararı** |
| ⚫ bulunamadı | 23 | kayıtlı borç, yeni iş değil |

🟢 **En ucuz kazanç Ⓐ'da:** 65 kaydın alıntısı **zaten yazılı**, yalnız
hassasiyet damgası konmamış. Bir oturum onları okuyup damgalayabilir ve
**kaynağa hiç dönmeden** ölçümü %62'den %106'ya çıkarır.

---

## ⑦ ÖLÇMEDİKLERİM — damgalarıyla

```
⚪ ÖLÇMEDİM    Ⓐ'nın 65'inin tamamını — 19'luk örneklem okudum, ORAN DEĞİL
⚪ ÖLÇMEDİM    Ⓑ'nin 54'ünü — kaynağa dönmek gerekiyor, bu kalemin işi değil
⚪ ÖLÇMEDİM    🔵 33 kaydın atlas-içi dayanağının DOĞRU olup olmadığını —
               yalnız DIŞ KAYNAK OLMADIĞINI saydım
🔴 HÜKÜM VERMEDİM  hiçbir günü "yanlış" ilan etmedim; `1752-04-23` ve
               `1916-05-23` için bile yalnız MESAFEYİ yazdım
🔴 ÖLÇMEDİM    "gün sayısı korunuyor, ay kayıyor" desenini — iki vaka gördüm,
               iki vaka desen kurmaz
⚪ ÖLÇÜLEMEDİ  1598-08-20 — ön taramam alıntıda bulamadığım tarihler
               işaretledi; kaydın gövdesinde bulamadım, ALETİMİN kusuru olabilir
```

## ⑧ ALETLER

```
scratchpad/_h1.py  evrenin YAPISINI döker (alan adı varsayma yasağı)
scratchpad/_h2.py  dayanak kayıtlarını toplar, alan kümesini sayar
scratchpad/_h3.py  🔴 regex ön taraması — ÇÜRÜDÜ, 7/11 yanlış pozitif
scratchpad/_h4.py  PAYDAYI ayırır (`kalan_gunler` elenir) + tam metin döker
scratchpad/_h5.py  🟢 külliyatın KENDİ BEYANINI sayar — güvenilir alet
scratchpad/_h6.py  ⚪ kovasını Ⓐ/Ⓑ diye ayırır (okunabilir / kaynağa dön)
scratchpad/_h7.py  Ⓐ'dan dosya-tavanlı örneklem çeker
scratchpad/_h8.py  🔵 dördüncü sınıfı (atlas içi dayanak) sayar
```

🔴 **`_h3.py`nin çürümesi bu kalemin en değerli çıktısı.** Bir hassasiyet
ölçümünü otomatikleştirmek **mümkün görünüyor** ve değil: alet tarihin
*hassasiyetini* değil *yazım biçimini* ölçüyor. Bir sonraki oturum aynı
regexi yazmaya kalkarsa, `_h3.py` onu durdursun — ve `_h5.py` (beyan
sayımı) doğru yolu göstersin.

---

# ㉔ EK — ⚪Ⓐ KOVASININ TAMAMI OKUNDU (67 kayıt)

> Sevk: *"65'in tamamını oku ve damgala; Alet B'yi KULLANMA, ELLE oku."*
> Uyuldu — **hiçbir sınıflandırma regexle yapılmadı**, 67 kaydın 67'si
> alıntısıyla birlikte okundu. `_h9.py` yalnız METNİ hazırladı, damgayı
> koymadı.

## ⓪ 🔴 ÖNCE TABAN: EVREN BEN ÖLÇERKEN DEĞİŞTİ

Sevk *"65"* diyor, ben *"65"* ölçmüştüm. Bugün aynı betik **67** dedi.
Betik değişmedi — **veri değişti**:

```
DAYANAK-ASYA-0907.json    01:17  23.701 bayt  →  01:33:50  38.899 bayt
DAYANAK-AVRUPA-0907.json  01:03   9.759 bayt  →  01:33:55  13.923 bayt
PAYDA   148 → 153     ·     Ⓐ   65 → 67     ·     beyanlı  29 → 32
```

Ve bunu bir **JSON ayrıştırma hatası** ele verdi: `DAYANAK-ASYA` bir an
geçersiz JSON döndü — başka bir oturumun **yarı-yazımını** okumuşum.
Saniyeler sonra geçerliydi.

📌 İki ders, ikisi de projede yazılı:
- *"Bir aracın çökmesi, yanlış cevap vermesinden İYİDİR."* Sessizce eksik
  okusaydım 67 yerine 65'i ölçer ve farkı **hiç görmezdim**.
- `§7`in *"koşu sürerken girdi donuktur"* kuralının **ölçüm** yüzü: benim
  paydam da bir koşunun girdisiydi ve **donuk değildi.**

⇒ Aşağıdaki 67, **01:34 anlık görüntüsüdür.** Sayı yine kayabilir.

## ① ÖNGÖRÜ ÖLÇÜME KARŞI — dördü de bantta, ama nokta tahmini kaydı

Öngörü ölçümden **önce** yazıldı (`scratchpad/ongoru_65.md`, damgalı):

| damga | öngörü (nokta) | bant | **ölçüm (67)** | sonuç |
|---|---|---|---|---|
| 🟢 kaynak GÜN veriyor | 24 | 18–30 | **29** | 🟢 TUTTU (üst uç) |
| 🟡 kaynak YIL/AY | 24 | 18–30 | **19** | 🟢 TUTTU (alt uç) |
| 🔴 BAŞKA GÜN | 3 | 1–6 | **1** | 🟢 TUTTU (alt uç) |
| ⚪ çıkarılamıyor | 14 | 8–20 | **18** | 🟢 TUTTU |

🟡 **Nokta tahminim yanlıştı ve MAZERETİ ÖNCEDEN YAZILMIŞTI:** 🟢 ile 🟡'yi
**eşit** (24/24) tahmin etmiştim, ölçüm **29/19** verdi. Mazeret metni
aynen şunu diyordu:
> *"örneklem dosya-tavanlıydı … `KAMERIKA`yı az temsil etti … dosyalar
> arası dağılım farklıysa bant kayabilir ve bu MAZERETTİR."*

Ölçüm mazereti **doğruladı**:
```
KAMERIKA Ⓐ = 19 kayıt · 🟢 16 · 🟡 3     → %84 🟢
   çünkü 19'un çoğu BİRİNCİL ANTLAŞMA METNİ ve onlar günü
   harfiyle yazar: «the tenth day of December» · «third day of August»
örneklemim KAMERIKA'dan yalnız 5 çekmişti (tavan)
```
⇒ Sapmanın yönü **kaynak CİNSİNDEN** geliyor: birincil belge günü verir,
ansiklopedi maddesi yıl verir. Bu bir dosya özelliği değil **tür**
özelliği.

🔴 **Ve `🔴 BAŞKA GÜN` için "mazeret YOK" demiştim.** 3 tahmin ettim,
**1** çıktı — bant içinde ama alt uçta. Mazeretim yok ve aramıyorum:
tahminim yüksekti.

## ② SAYIM — 67 kayıt, elle okundu

```
🟢 kaynak GÜN veriyor        29   (%43,3)
🟡 kaynak YIL/AY veriyor     19   (%28,4)
🔴 kaynak BAŞKA GÜN veriyor   1   (%1,5)
⚪ alıntıdan çıkarılamıyor    18   (%26,9)
```

### 🟢 29 — kaynak günü veriyor (örnekler)
```
1783-09-03  «Done at Paris, this third day of September … eighty-three»
1898-12-10  «Done in duplicate at Paris, the tenth day of December …»
1848-02-02  «… CONCLUDED AT GUADALUPE HIDALGO, FEBRUARY 2, 1848»
1867-07-01  «1 July 1867, the date of the creation of the Dominion»
1821-09-27  «entró triunfante … el 27 de septiembre de 1821»
1867-10-18  «On the afternoon of October 18, 1867 …»
1402-07-28  TDV `timur`: «1402 (28 Temmuz): Ankara'da … zafer»
1919-06-28  TDV: «28 Haziran'da Almanya ile Versailles»
1701-01-18  Clark, *Iron Kingdom* — 18 Ocak 1701 Königsberg taç giyme
1917-11-07  TDV `kirim`: «7 Kasım 1917'de Bolşevikler'in Petrograd'da…»
```

### 🟡 19 — kaynak YIL/AY veriyor, atlas GÜN taşıyor
```
1368-04-01  TDV: «1368 yılında yerini Ming sülâlesine bıraktı»        YIL
1644-10-01  TDV: «Ch'ing hânedanı devrinde (1644-1911)»               YIL
1526-08-29  TDV: «1526 Mohaç Meydan Savaşı»                           YIL
1530-03-24  TDV `malta`: «settled them in Malta in 1530»              YIL
1589-07-02  Volgograd Devlet Ü.: «considered to be founded in 1589»   YIL
1590-07-12  «founded in the summer of 1590»                      YIL+MEVSİM
1743-04-30  Britannica: «moved to its present site in 1743»           YIL
1502-03-01  TDV `altin-orda`: damga YIL_DOGRULANDI_GUN_BULUNAMADI     YIL
1551-05-24  UNESCO: damga AY_DOGRULANDI_GUN_BULUNAMADI                 AY
1516-01-23  Kamen, *Spain 1469-1714* — künye var, gün beyanı YOK        —
1685-10-15  Kontler (2002), s. 166 — sayfa var, gün beyanı YOK          —
1871-01-18  «standart ders kitabı bilgisi»                             —
1829-09-14  «Antlaşmanın tam tarihi TDV'de YOK» (kayıt kendi diyor)     —
1552-10-02  Cambridge History of Russia — «bölüm günü VERMİYOR»         —
1535-04-17  gövde YILI veriyor, gün yalnız ARAMA ÖZETİNDE
1858-08-02  gövde YILI veriyor, gün yalnız ARAMA ÖZETİNDE
1899-06-21  «at the several dates mentioned therein, in the year … 1899»
1663-09-24  TDV `avusturya` günü vermiyor; gün `savaslar.js`ten
1918-10-30  TDV `yemen`: «1918» + «5 Mart 1919»
```

### 🔴 1 — kaynak BAŞKA GÜN veriyor
```
1752-04-23   alıntı «Ava'nın düşüşü … 23 MART 1752»   ⇒ atlas 23 NİSAN
             fark: 1 AY (gün sayısı AYNI)
             📌 kayıt bunu KENDİ işaretlemiş: AY_SUPHELI_GUN_VE_YIL_DOGRULANDI
```

### ⚪ 18 — alıntıdan çıkarılamıyor
İkiye ayrılıyor ve **çareleri farklı**:
```
⚪a dayanak ATLASIN KENDİ İÇİNDE  13   `data/olaylar_ek4.js:265` ·
    `devletler.js` embedded kronoloji · «Mısır perspektifine uyarlandı»
    ⇒ kaynak işi DEĞİL, 🔵 sınıfının kararı
⚪b kaynak GERÇEKTEN yok           5   `bulunamadı` beyanı (1911-04-12 ·
    1916-09-01 · 1636-04-17) ya da yalnız slug (`hotin` · `darfur`)
```

## ③ 🔴 İKİ SELF-DÜZELTME — örneklemim iki kaydı YANLIŞ okumuştu

Tam okuma, 19'luk örneklemdeki **iki hatamı** buldu:

```
1598-08-20  örneklemde ⚪ ("alıntı yok") → GERÇEKTE 🟢
            TDV `kucum-han`: «20 Ağustos'ta çar birliklerine karşı
            giriştiği bu SON SAVAŞTA da mağlûp olan Küçüm…»
            ⇒ ve bu, `_h3` ön taramamın «4 Ağustos 1598» diye
              işaretlediği kaydın ta kendisi: 4 Ağustos HAREKÂTIN
              BAŞLANGICI, 20 Ağustos SAVAŞ. Atlas doğru günü almış.
1917-03-15  örneklemde 🟡 («Mart 1917'de») → GERÇEKTE 🟢
            kaynak.alinti: «On 15 March 1917 (according to the western
            calendar) Tsar Nicholas II abdicated from the Russian throne»
            🔴 SEBEP: örneklem betiğim KISALTILMIŞ bir alan basmıştı;
            ben ilk cümleyi okuyup hüküm verdim, ikinci alanı görmedim.
```

📌 **İkisi de aynı kökten: KIRPILMIŞ ÇIKTIYA BAKIP HÜKÜM VERMEK.** Bu,
bugün bu oturumda **üçüncü** vakası — `denetle.py`yi `tail -60` ile
kırpmıştım, `_h7` alan kırpmıştı, ve şimdi ikisi de aynı sınıf.
⇒ `§11`: *"kırpılmış bir çıktı da bir ölçüm değildir."* Kural yazılıydı,
ben üç kez ihlal ettim, ve üçünde de **kendim yakaladım** — ama ancak
tam okuma yaptığımda.

## ④ 🔴 BAŞKA GÜN SINIFI — külliyat çapında bilinen üç vaka

Sevk *"🔴 çıkanları AYRI listele"* dedi. Ⓐ'da **1** çıktı; ötekiler
başka kovalardan:

| gün | kaynak ne diyor | fark | kim buldu |
|---|---|---|---|
| `1918-10-26` | TDV `halep`: «27 Ekim 1918» | 1 gün | ⑲ |
| `1752-04-23` | «23 Mart 1752» | 1 ay | bu ölçüm (Ⓐ) |
| `1916-05-23` | «6 Kasım 1916'da öldürüldü» | ~5,5 ay | bu ölçüm (beyanlı kova) |

🟡 **Ve önceki turda yazdığım *"gün korunuyor, ay kayıyor"* gözlemi ZAYIFLADI:**
üçüncü vaka (`1918-10-26` ↔ 27 Ekim) **gün sayısını korumuyor.** İki
vakada desen vardı, üçüncüsü onu bozdu.
⇒ Desen **kurulmadı** ve kurulmamalı: 3 vaka bir imza değil. Önceki
turda *"iki vaka desen kurmaz"* demiştim; üçüncü vaka onu **doğruladı.**

## ⑤ SAYIM SONRASI TABLO — Ⓐ artık ölçüldü

```
PAYDA (dayanaklandırılmış gün)          153
   beyanlı (zaten ölçülüydü)             32
   ⚪Ⓐ — BU TURDA ÖLÇÜLDÜ                 67   🟢29 · 🟡19 · 🔴1 · ⚪18
   ⚪Ⓑ alıntı yok (kaynağa dönmeli)       54   ← ölçülmedi, sıradaki
────────────────────────────────────────────
ÖLÇÜLMÜŞ ORAN   32 + 67 = 99 / 153 = %64,7      (öncesi %20,9)
```

🟢 **Ve bu, kaynağa HİÇ DÖNMEDEN yapıldı** — sevkin *"en ucuz kazanç"*
teşhisi tuttu.

⚠️ **`%106'ya çıkarır` demiştim, çıkmadı — %64,7.** Sebep: o hesabı
`beyanlı 15 + Ⓐ 65` üzerinden yapmıştım (payda 92, dış kaynaklı). Doğru
payda **153** (bütün dayanaklandırılmış günler) ve `Ⓑ 54` hâlâ ölçülmemiş.
⇒ **Kendi fiyat etiketimdeki oran yanlıştı**; ölçüm onu düzeltti.

## ⑥ BU EKTE ÖLÇMEDİKLERİM

```
⚪ ÖLÇMEDİM    Ⓑ'nin 54'ünü — kaynağa dönmek gerekiyor, bu kalemin işi değil
⚪ ÖLÇMEDİM    🟢 29'un kaynak KALİTESİNİ — yalnız HASSASİYETİ ölçtüm.
               (`1832-03-24` ve `1791-07-02` günü veriyor ama damgaları
                `🟡 ARAMA-OZETI`; gövde açılmamış. Ayrı soru, ayrı kalem.)
⚪ ÖLÇMEDİM    ⚪a'nın 13 atlas-içi dayanağının DOĞRU olup olmadığını
🔴 HÜKÜM VERMEDİM  `1752-04-23` dâhil hiçbir günü "yanlış" ilan etmedim
⚠️ TABAN OYNAK  67 sayısı 01:34 anlık görüntüsü; iki dosya ben ölçerken
               büyüdü ve yine büyüyebilir
```

## ⑦ İKİ BÖLÜMLEME BİRBİRİNİ KESİYOR — karıştırılmasın

Bu dosyada **iki ayrı bölümleme** var ve **aynı taksonomi değiller**:

```
BÖLÜMLEME 1 (`_h6`)  beyanlı 32 · Ⓐ 67 · Ⓑ 54      ölçüt: BEYAN ve ALINTI VAR MI
BÖLÜMLEME 2 (`_h8`)  🔵 33 · ⚫ 23 · dış 92         ölçüt: DAYANAK NEREDE
```

Bir kayıt **ikisinde de** yer alır: Ⓐ'daki 13 kayıt aynı zamanda 🔵
(atlas içi). ⇒ **Sayılar toplanmaz**, ve iki tabloyu yan yana koyup
"toplam" almak yanlış olur.
