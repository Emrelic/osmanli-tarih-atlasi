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
