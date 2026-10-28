# KASA-ARDIL-1923-1004 — 4 ardıl eşlemesini kaynağa bağlama (YALNIZ ÖLÇÜM)

KASA · 4 Ekim 2026 · koordinatörün görevi: 429 noktayı kapatan 4 ADAY ardıl eşlemesi için geçiş günü (kaynağın tam cümlesi), D205 sınıfı (aynı polity mi, yeni yapı mı) ve kacar↔iran boşluğu.
Yalnız web okuması yapıldı (TDV ham HTML, Iranica, Avalon, Office of the Historian). Künyeler `origin/main:data/devletler.js`'ten **yalnız okundu**. `data/`'ya yazılmadı, ağır betik koşturulmadı.

## HÜKÜM (ölçtüm)
| # | eşleme | nokta | geçiş günü | kaynak | GÜN hassas? | D205 |
|---|---|---|---|---|---|---|
| ① | tbmm-turkiye → turkiye-cumhuriyeti | 263 | **1923-10-29** | **TDV `turkiye`** (birincil) | 🟢 EVET | kaynaklar **ayrışıyor**, ağırlık **aynı devlet, yönetim şekli değişti** (aşağıda) |
| ② | kacar → iran | 108 | kacar sonu **1925-10-31** · iran başı **1925-12-12** | Iranica (son) · TDV `riza-sah-pehlevi` + Iranica (baş) | 🟡 iki uç da gün hassas, AMA TDV **kendi içinde üç farklı tarih** veriyor ve Iranica ile çelişiyor | hanedan değişimi; anayasa maddeleri değiştirilerek taç devredildi (Iranica) ⇒ **aynı devlet**; atlas hanedanları ayrı künye tutuyor (Emre 7 Ağustos kararı) |
| ③ | almanya → almanya-muttefik-isgali | 38 | **1945-06-05** | Avalon wwii/ger01 | 🟢 EVET | ③ ayrı künye **doğru**: kaynak "ilhak değil" diyor ⇒ işgal (gecici-isgal) |
| ④ | suud-ucuncu → suudi-arabistan | 20 | **1932-09-18** (kararname) | Office of the Historian (TDV yalnız YIL) | 🟢 EVET (TDV dışı birincil) | kaynaklar **ad değişikliği** diyor ⇒ **aynı polity** (② sınıfı). Atlasta iki künye var, çareler **ters** |

- **Gün hassasiyetinde, çelişkisiz kaynaklı: 3 eşleme (①③④) = 263 + 38 + 20 = 321 nokta.**
- **②: gün hassas kaynak var, ama birincil TDV ile çelişiyor ⇒ hüküm sende (108 nokta).**
- **Yan bulgu (kritik yol):** `arac/` içinde **9 yerde** `1923-10-29` pencere ucu olarak sabit yazılı. Pencere 1945'e uzayınca ①'in gerçek kırılması ve 1923 sonrası **bütün** kırılmalar Değişmez 2'den muaf kalacak (aşağıda).

## ① TBMM → TÜRKİYE CUMHURİYETİ
- **Gün (TDV `turkiye`, tam cümle):** "İşgal kuvvetlerinin İstanbul'u terketmesinin ardından başşehri Ankara, yönetim şekli cumhuriyet olan yeni devlet ilân edildi (29 Ekim 1923)."
- **Pencere ucu mu, ölçüm mü? İKİSİ BİRDEN, ve bu ayırt edilebilir:**
  - **Ölçüm:** `turkiye-cumhuriyeti f:1923-10-29` TDV'nin gün hassas cümlesine dayanıyor. Künyenin `kronoloji` maddesi de aynı günde ve kaynaklı ("Cumhuriyet ilan edildi", kaynak: TDV turkiye). `tbmm-turkiye`'nin `ic_not_t`'si de açıkça "GERÇEK BİTİŞ, pencere ucu DEĞİL" diyor.
  - **Pencere ucu:** atlasın kapanış sınırı aynı gün. `arac/_sahiplik_uygula.py:133`: "`1923-10-29` bir kırılma değil atlasın KAPANIŞ SINIRI; her dönemin son `t:`si odur."
  - ⇒ Ufuk, Cumhuriyet'in ilanına **denk getirilmiş**. Nokta dönemlerinde `t:1923-10-29` iki anlam taşıyor: `s:tbmm-turkiye` olan dönemlerde gerçek bitiş, öteki künyelerde (ufuk sonrası da süren) **sınır işareti**. **Ayırt etme ölçütü:** künyenin `t:`si `1923-10-29` ve `ic_not_t` "GERÇEK BİTİŞ" diyorsa ölçümdür. Künye ufuktan sonra da sürüyorsa sınır işaretidir.
- **D205: aynı polity mi?** Kaynaklar ayrışıyor:
  - TDV `turkiye`: "yönetim şekli cumhuriyet olan **yeni devlet** ilân edildi" ⇒ yeni yapı okuması.
  - TDV `turkiye-buyuk-millet-meclisi` (İhsan Güneş): "Millî Mücadele'yi yöneten ve **Türkiye Cumhuriyeti Devleti'ni kuran** yasama organı" · "Türkiye Büyük Millet Meclisi çatısı altında işgalci güçleri yurttan atıp **bağımsız yeni Türkiye Devleti'ni kurdular**" (yani devlet 1920–1923 arasında kuruldu) · "23 Nisan 1920'de, ileride ilân edilecek olan Türkiye Cumhuriyeti'nin kurucu organı halinde teşekkül".
  - ⇒ İkinci madde devleti TBMM'nin kurduğunu, 29 Ekim'in **yönetim şeklini** ilan ettiğini söylüyor. Ağırlık **aynı devlet** okumasında. Ama TDV `turkiye`'nin "yeni devlet" ifadesi de var. **Karar senin.** Atlasın iki künyesi ve `[[ardıl]]` bağı her iki okumayı taşıyor.
- **Değişmez 2:** kırılma 1923-10-29, madde 1923-10-29 (turkiye-cumhuriyeti kronoloji) ⇒ ±30 gün içinde ✅. Sıra kuralı (madde önce/aynı gün) ✅.

## ② KAÇAR → İRAN — 11 aylık boşluğun açıklaması
**Künyeler:** `kacar t:1925-01-01` (ic not: YIL hassasiyeti, TDV `kacarlar` yalnız "1925") · `iran f:1925-12-12`.

**Kaynaklar:**
1. **Iranica 'AḤMAD SHAH QĀJĀR'** (M. J. Sheikh-ol-Islami, Vol. I, Fasc. 6, 1984; güncelleme 2018): "On 31 October 1925, the Majlis approved a bill deposing the Qajars and entrusting the provisional government to Reżā Khan. Eighty deputies voted in favor of the bill, twenty abstained, and only five opposed it. On December 12, a special constituent assembly modified articles 36, 37, 38, and 40 of the constitution and by a vote of 257 to 3 conferred the crown on Reżā Shah and his male heirs."
2. **TDV `riza-sah-pehlevi`** (Rıza Kurtuluş): "31 Ocak 1924 tarihinde meclis, Avrupa'da bulunan Ahmed Şah'ı gıyabında tahttan indirerek Kaçar hânedanına son verdi. 12 Aralık 1925 tarihinde Rızâ Han'ın meclis tarafından 'şehinşah' ilân edilmesiyle Pehlevî hânedanı kuruldu…"
3. **TDV `kacarlar`** (Faruk Sümer): "…meclise Ahmed Şah'ı hal'ettirip kendisini şah seçtirdi ve böylece Kaçar hânedanı sona ermiş oldu (1925)." Hükümdar listesi: "Ahmed Şah 1327-1344 (1909-1925)".
4. **TDV `iran`**: "**1923 yılında** Ahmed Şah'ı tahttan indiren Rızâ Şah Pehlevî Aralık 1925'te kendini şah ilân etti."

**Ölçüm:**
- **TDV kendi içinde ÜÇ farklı tarih veriyor:** 1923 (`iran`) · 31 Ocak 1924 (`riza-sah-pehlevi`) · 1925 (`kacarlar`). Künyenin ozet'i yalnız ikisini kaydetmiş; `iran` maddesindeki 1923 **yeni**.
- **Iranica 31 Ekim 1925** diyor ve oy sayısı veriyor (80/20/5). Bu tarih, TDV `kacarlar`'ın yılıyla (1925) ve Ahmed Şah'ın saltanat sonu 1344 H ile (1344 H, Temmuz 1925'te başlıyor) **uyumlu**. TDV'nin 1923 ve 1924 tarihleri ise bu ikisiyle **uyumsuz**.
- **12 Aralık 1925** (iran f:) TDV ve Iranica'da **aynı** ⇒ sağlam.

**11 aylık boşluk:**
- Boşluğun **asıl sebebi künyenin YIL hassasiyeti**: `1925-01-01`, "1925 içinde bir gün" demek. Gerçek bir 11 aylık sahipsizlik yok.
- Iranica'ya göre **gerçek aralık 42 gün** (31 Ekim → 12 Aralık 1925). Bu sürede devlet yok olmadı: "entrusting the provisional government to Reżā Khan", yani hanedansız **geçici hükümet** dönemi.
- **Seçenekler (karar senin; veri işi):**
  - (a) `kacar t:1925-10-31` (Iranica) yazılır, 42 günlük geçici hükümet aralığı **beyanlı boşluk** olur.
  - (b) `iran f:1925-10-31` yazılır ve geçici hükümet Pehlevî künyesine katılır. Bu durumda "Rızâ Han'ın geçici hükümeti" künyenin başı sayılır; kaynak buna izin veriyor ama "kuruluş" demiyor.
  - (c) TDV birincil kural gereği Iranica'yı kabul etmezsen ⇒ D210 gereği yıl hassasiyeti kalır, boşluk beyan edilir.
  - ⚠️ Her üç seçenekte de TDV `riza-sah-pehlevi`'nin 31 Ocak 1924 tarihi **çelişen kaynak** olarak kayıtta kalmalı.
- **D205:** Iranica tacın "anayasanın 36, 37, 38 ve 40. maddeleri değiştirilerek" devredildiğini söylüyor ⇒ **aynı anayasal devlet**, hanedan değişimi. Atlas hanedanları ayrı künye tutuyor (Emre'nin 7 Ağustos kararı, `iran` künyesinin üstündeki not). Bu tasarım kararı benim ölçüm alanımın dışında.

## ③ ALMANYA → MÜTTEFİK İŞGALİ
- **Gün (Avalon wwii/ger01):** başlık "Declaration Regarding the Defeat of Germany and the Assumption of Supreme Authority by Allied Powers; June 5, 1945" · "The Governments of the United States of America, the Union of Soviet Socialist Republics and the United Kingdom, and the Provisional Government of the French Republic, hereby assume supreme authority with respect to Germany" · "BERLIN, GERMANY, June 5, 1945."
- **D205 (aynı belge):** "The assumption, for the purposes stated above, of the said authority and powers does not affect the annexation of Germany." ⇒ ilhak yok, devlet ortadan kalkmış sayılmıyor, otorite **işgal** ile üstleniliyor. Atlasın `tur:"gecici-isgal"` künyesi kaynağa uygun.
- **Boşluk yok:** `almanya t:1945-06-05` = `almanya-muttefik-isgali f:1945-06-05`. Künye kronolojisinde 8 Mayıs 1945 teslim maddesi de kaynaklı (Avalon gs11).
- `almanya-muttefik-isgali t:1945-09-02` pencere ucu (ic_not_t beyanlı).

## ④ III. SUÛDÎ DEVLETİ → SUUDİ ARABİSTAN
- **Gün (Office of the Historian, history.state.gov/countries/saudi-arabia):** "The name of the state was changed to the Kingdom of Saudi Arabia by a decree of September 18, 1932."
- **TDV yalnız YIL veriyor:**
  - `abdulaziz-b-suud`: "1932'de ülkenin adı Suudi Arabistan Krallığı oldu."
  - `suudi-arabistan`: "Aynı yıl İngiltere'nin kendisini resmen tanıması üzerine Abdülazîz b. Suûd unvanını Suudi Arabistan kralı şekline dönüştürdü."
  - `vehhabilik`: "1932'de Suudi Arabistan Krallığı'nın ilân edilmesiyle…"
  - `suudiler`: "1932'de resmen bugünkü Suudi Arabistan'ı kurmayı başardı."
- ⚠️ **Kararname günü ↔ ilan günü:** web araması özetleri kararnamenin (No. 2716) 18 Eylül'de çıktığını, ilanın ise **23 Eylül 1932**'de Mekke'de yapıldığını söylüyor (Suudi millî günü). Bu bilgi Vikipedi/Saudipedia düzeyinde, **dayanak değil**; Berkeley lawcat kaydı 403 verdi. Atlas kararname gününü (18 Eylül) kullanıyor ve birincil kaynak o günü veriyor.
- **D205:** dört kaynağın dördü de **ad / unvan değişikliği** diyor ("the name of the state was changed", "ülkenin adı … oldu", "unvanını … dönüştürdü") ⇒ **aynı polity** (② genişlet sınıfı). Atlasta iki ayrı künye var (③ ardıl). Koordinatörün uyarısındaki gibi çareler ters: aynı polity ise ardıl eşlemesi yerine `suud-ucuncu`'nun genişletilmesi tutarlı olur. **Karar senin.** Bu, nokta sayısını değiştirmiyor (20 nokta iki durumda da kapanıyor), yalnız künye yapısını değiştiriyor.

## YAN BULGU — `1923-10-29` sabiti (pencere uzayınca kör nokta)
`origin/main:arac/` içinde pencere ucu **9 yerde** sabit yazılı:
```
arac/_odunc_capraz_sh110.py:125   f >= "1923-10-29"
arac/_odunc_tarih.py:143          f >= "1923-10-29"
arac/_sahiplik_uygula.py:136      d >= "1923-10-29": continue
arac/_sahiplik_uygula.py:143      gun >= "1923-10-29"
arac/_yer_eslesme_ok102.py:163    d >= "1923-10-29"
arac/denetle.py:1525              d >= "1923-10-29"
arac/denetle.py:3135              f >= "1923-10-29"
arac/denetle_eslesme.py:169       dt >= "1923-10-29"
arac/denetle_statu.py:292         g >= "1923-10-29"
```
- Kampanyanın amacı 1923 sonrasını yayınlamak. Pencere 1945-09-02'ye uzayınca bu süzgeçler:
  - (i) ①'in **gerçek** kırılmasını (1923-10-29) sınır sayıp muaf tutar;
  - (ii) 1923 sonrasındaki **bütün** kırılmaları (1925, 1932, 1945) Değişmez 2'nin dışında bırakır.
- ⇒ 429 noktanın hepsi denetimden **geçer görünür ama denetlenmemiş olur**. Okuma yaptım, ölçmedim; düzeltme senin (araç dosyası, veri değil).

## ① NE ÖLÇTÜM · ② NE BULAMADIM · ③ NE İSTİYORUM
- ① **4 eşlemenin 3'ü (①③④ = 321 nokta) gün hassasiyetinde, çelişkisiz kaynaklı:**
  - ① TDV `turkiye` 29 Ekim 1923;
  - ③ Avalon 5 Haziran 1945;
  - ④ Office of the Historian 18 Eylül 1932.
  ② (108 nokta) iki uçta da gün hassas: Iranica 31 Ekim 1925 / 12 Aralık 1925. AMA TDV kendi içinde 1923, 31 Ocak 1924 ve 1925 diyor. 11 aylık boşluk yıl hassasiyetinden geliyor; Iranica'ya göre gerçek aralık 42 günlük **geçici hükümet** dönemi. `1923-10-29` hem ölçüm (TDV) hem pencere ucu; araçlar 9 yerde onu sınır diye muaf tutuyor.
- ② Bulamadıklarım:
  - ④ için TDV'de gün;
  - 23 Eylül 1932 ilanı için birincil kaynak (Berkeley 403);
  - TDV'nin 31 Ocak 1924 ve 1923 tarihlerinin dayanağı.
- ③ İstediklerim:
  - (a) ②'de Iranica'nın gün hassas 31 Ekim 1925'i TDV'nin çelişkili tarihlerine karşı kabul mü? Kabulse 42 gün beyanlı boşluk mu (seçenek a), Pehlevî künyesine katma mı (b)?
  - (b) ① ve ④ için D205: kaynaklar ①'de aynı devlet (ağırlıklı), ④'te açıkça aynı polity (ad değişikliği) diyor. Künye yapısı korunsun mu?
  - (c) 9 yerdeki `1923-10-29` sabiti pencere uzamadan önce ele alınsın mı?

Kaynaklar: TDV İslâm Ansiklopedisi `turkiye`, `turkiye-buyuk-millet-meclisi`, `kacarlar`, `riza-sah-pehlevi`, `iran`, `suudi-arabistan`, `abdulaziz-b-suud`, `suudiler`, `vehhabilik` · *Encyclopaedia Iranica* 'AḤMAD SHAH QĀJĀR' · Avalon Project wwii/ger01 · Office of the Historian, 'Saudi Arabia' · `origin/main:data/devletler.js` ve `arac/` (yalnız okundu).
