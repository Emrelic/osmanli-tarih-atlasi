# data/yerlesimler.js KUYRUĞU — 14 Kasım 2026 (koşu inişinden SONRA tek commit'le uygulanacak)

Hazırlayan: alt ajan (Sonnet 5.5), worktree `agent-a0a46cb7340f77613`, taban `d6fa0146c`.
Hiçbir `data/*.js` dosyasına dokunulmadı; `py arac/denetle.py` koşturulmadı (ölçümler dosya okumasıyla yapıldı, "denetle temiz" iddiası YOKTUR).
Satır numaraları `data/yerlesimler.js` içindedir (bu taban commit'te); koşu inişinden sonra kayabilir — uygularken `ad:` ile ara.

Okuma notu: kayıtlar uzun satırlardır; "MEVCUT" bölümleri yapıyı (f/t/d/kesinlik) tam, `kaynak:` metnini kısaltarak (`[…]`) verir; "ÖNERİLEN" bölümleri uygulanabilir nesneyi verir. Kayıt içi `ic_not` ayrı alan değildir; atlas bu kayıtlarda iç notu `kaynak:` içine ` · ic_not: …` diye yazıyor, öneriler de öyle.

Uygulama sınıfları: **UYGULA** (yerlesimler.js içinde, kuyruğa girer) · **SERBEST** (başka dosya, yerlesimler.js kuyruğunda DEĞİL) · **ÖNERİ YOK** (kaynak aranacak).

---

## 1. Lugos (Lugoj) — `data/yerlesimler.js:617-633`

**Bulgu: istenen düzeltme bu kayıtta ZATEN yapılmış.** `1688-06-01` ucunun iki yanı da `kesinlik` "ay":
- `s:` (satır 620): `{f:"1688-06-01",t:"1689-01-01",d:"macaristan-habsburg",kesinlik:{f:"ay",t:"yil"},kaynak:"B 0017/1443 (1688 seferi): Lippa'dan (TDV lipova: 12-22 Haziran 1688) sonra Veterani 'ellenállás nélkül foglalta el Lugost', ardından 'június végén' Karánsebes — AY · t: 1688'den sonrası için Habsburg tanıklığı yok"}`
- `d:` (satır 629): `{f:"1658-08-30",t:"1688-06-01",kesinlik:{f:"gun",t:"ay"},kaynak:"B 0016/1302: 'Jenővel elveszett Lugos ve Karánsebes' · TDV yanova: … · GÜN KOMŞUDAN: Yanova (Jenő) · TDV yanova '30 Ağustos 1658' teslim — …"}`

**Karánşebeş'te "yapılan düzeltme"yi bulamadım:** `data/yerlesimler_zincir64.js:44-46` (Karánşebeş (Caransebeş)) hâlâ `{f:"1688-06-01",t:"1695-09-01",d:"macaristan-habsburg",kaynak:"gün komşudan: Lugoj 1688-06-01 …"}` ve `d:` `{f:"1658-08-30",t:"1688-06-01",…}` — ikisinde de `kesinlik` YOK. HEAD (`d6fa0146c`) ve `origin/main` (`81b566fc5`) ikisinde de böyle; düzeltme ya yayımlanmamış bir dalda ya da henüz yapılmamış. Karánşebeş dosyası yerlesimler.js DEĞİL → **dosyası: `data/yerlesimler_zincir64.js`, SERBEST** (aşağıda 1-B).

### 1-A. Lugos: önerilen değişiklik (yalnız `ic_not` beyanı; tarih/kesinlik DEĞİŞMEZ)
Satır 620 `kaynak:` sonuna ekle:
` · ic_not: 1688-06-01 AYIN 1'i yalnız ay işaretidir (kesinlik ay; Lippa emsali: data/yerlesimler_ek_macaristan.js 1551-10-01). Sıra kaynaklı: Lippa 22 Haziran 1688'de teslim oldu (TDV lipova '12-22 Haziran 1688'), Lugos ONDAN SONRA alındı, Karánsebes 'június végén' (B 0017/1443) ⇒ gerçek devir günü 22-30 Haziran 1688 aralığında, gün kaynakta YOK; 06-01 ucu Lippa'dan 21 gün ÖNCE görünür, kullanıcıya 'Haziran 1688' (ay) gösterilir.`
Satır 629 `kaynak:` sonuna aynı cümlenin kısa hâli: ` · ic_not: t 1688-06-01 ay işaretidir; gerçek gün Lippa'dan (1688-06-22) sonra, Haziran 1688.`

Kaynaklar:
- Bánlaky József, *A magyar nemzet hadtörténelme* (MEK 09477), cilt 17, s. 1443 (1688 seferi; kayıttaki atıf, bu oturumda ham metni YENİDEN OKUNMADI — mevcut kayıt atfına dayanır).
- TDV İslâm Ansiklopedisi, «Lipova» (Lippa teslimi 12-22 Haziran 1688; kayıtta ve `olaylar_ek5.js:621` maddesinde 22 Haziran alınmış; bu oturumda ham metni okunmadı, kayıt atfı).
Okunmadı: Bánlaky ham sayfası.

**İki uç ölçümü:** Öncül `d:` t=1688-06-01 = ardıl `s:` f=1688-06-01 → bitişik, çakışma/boşluk YOK. Ardıl `s:` t=1689-01-01 = sonraki `__BOSLUK__` f=1689-01-01 → bitişik. Künye `macaristan-habsburg` f 1526-12-17 · t 1918-11-16 (devletler.js:776) → içinde. ±30 gün kronoloji (Değişmez 2 evreni): `olaylar_ek5.js:621` t=1688-06-22 (Lippa teslimi, +21 gün) → VAR. Değişiklik yalnız metin olduğundan ölçüm sonucu değişmez.

Kalan belirsizlik: Lugos'un kendi teslim günü (Haziran 1688 sonu) kaynakta yok. Çift teyit yok.
Öneri sınıfı: UYGULA (yalnız iki `kaynak:` eki; tarih değişmez).

### 1-B. Karánşebeş (Caransebeş) — `data/yerlesimler_zincir64.js:44-46` — **dosyası: yerlesimler_zincir64.js, SERBEST**
Önerilen (yerlesimler.js kuyruğuna GİRMEZ, ayrı elden): `s:` `{f:"1688-06-01",t:"1695-09-01",d:"macaristan-habsburg",kesinlik:{f:"ay",t:"ay"},kaynak:"… (mevcut metin) · ic_not: Bánlaky 0017/1443 'június végén' (Haziran sonu 1688) — AY; ayın 1'i ay işaretidir; gün komşudan DEĞİL (Lugoj ayını paylaşır)"}` ve `d:` `{f:"1658-08-30",t:"1688-06-01",kesinlik:{f:"gun",t:"ay"},…}`. Not: Karánşebeş için kaynak Lugos'tan ZATEN daha geç (Haziran sonu); `t` ucu "ay" doğru.

---

## 2. Yanova (Ineu) — `data/yerlesimler.js:1540`

**Bulgu 1 — `s:` listesindeki "atlama" gerçek bir delik DEĞİL:** 1556-03-12 → 1693 arası `v:` ve `d:` ile örtülü (aşağıda ölçüm). Delik yok; ama kayıtta iki GERÇEK kusur var: (a) **TDV yanova 1693 ucunu GÜN veriyor, kayıt yıl tabanı yazmış;** (b) 1556-03-12 / 1551-07-26 günleri Yanova'nın kendi kaynağı değil, Erdel zincirinden (MTA History of Transylvania) — "gün komşudan" beyanı eksik.

MEVCUT (yapı; `kaynak:` kısaltılmış):
```
s:[ {f:"1281-01-01",t:"1526-11-10",d:"macaristan",kaynak:"BALKAN-MACAR-0081 …"},
    {f:"1551-07-26",t:"1556-03-12",d:"macaristan-habsburg",kesinlik:{f:"gun",t:"gun"},kaynak:"POSTIT-86: ABİ MERKEZ: Erdel (Kaloşvar) … MTA HoT s.102 … BEYANLI YAKLAŞIKLIK"},
    {f:"1693-01-01",t:"1918-11-16",d:"macaristan-habsburg",kaynak:"TDV macaristan (Géza Dávid) … […]"}, {1918-11-16 naiplik}, {1920-06-04 romanya-kralligi} … ],
v:[ {f:"1526-11-10",t:"1541-08-29",k:"Macaristan (Zapolya vasal krallığı)",statu:"vassal",…},
    {f:"1541-08-29",t:"1551-07-26",k:"Erdel Prensliği",statu:"vassal",kid:"erdel"},
    {f:"1556-03-12",t:"1566-07-25",k:"Erdel Prensliği",statu:"vassal",kid:"erdel"},
    {f:"1595-10-22",t:"1658-08-27",k:"Erdel Prensliği",statu:"vassal",kid:"erdel",kaynak:"POSTIT-86: f: TDV yanova '22 Ekim 1595'te işgal edildi' … BEYANLI YAKLAŞIKLIK"} ],
d:[ {f:"1566-07-25",t:"1595-10-22",kaynak:"POSTIT-86: TDV yanova … 25 Temmuz … 22 Ekim 1595 …"},
    {f:"1658-08-27",t:"1693-01-01",y:"kusatma"} ]
```
Kesintisizlik ölçümü (sahiplik = s ∪ v ∪ d): …1526-11-10 s → v 1526-11-10→1541-08-29 → v 1541-08-29→1551-07-26 → s 1551-07-26→1556-03-12 → v 1556-03-12→1566-07-25 → d 1566-07-25→1595-10-22 → v 1595-10-22→1658-08-27 → d 1658-08-27→1693-01-01 → s 1693-01-01→… Uçlar tam bitişik, boşluk/çakışma YOK. Erdel dönemi (1541-1551, 1556-1566, 1595-1658) ve 1566 Osmanlı dönemi (25 Temmuz 1566 Pertev Paşa) kayıtta ZATEN yazılı. Eksik değil.

**Düzeltme (UYGULA)** — TDV yanova (Mihai Maxim, 2013): «27 Mayıs 1693'te Habsburg askerleri burayı aldı» ve `olaylar_ek6.js:84` maddesi t=**1693-05-27** (kayıp). Mevcut 1693-01-01 ucu madde ile 146 gün uzak (Değişmez 2'nin ±30 günü dışında — bugünkü sapmanın kaynağı olabilir; ölçülmedi, denetle koşmadım).
ÖNERİLEN:
```
d:[ {f:"1566-07-25",t:"1595-10-22", …(DEĞİŞMEZ)},
    {f:"1658-08-27",t:"1693-05-27",y:"kusatma",kesinlik:{f:"gun",t:"gun"},kaynak:"t: TDV yanova (Mihai Maxim, 2013): «27 Mayıs 1693’te Habsburg askerleri burayı aldı» — GÜN · f: olaylar_ek5.js:256 (1658-08-27; TDV yanova yalnız '1 Zilhicce 1068’de (30 Ağustos 1658) Yanova Kalesi ovasına gelmişti' der — varış günü, düşüş günü DEĞİL; f ucu mevcut kayıt kararıdır, gün doğrulanmadı) · ic_not: f ucu kaynak aranacak"} ],
s:[ … {f:"1693-05-27",t:"1918-11-16",d:"macaristan-habsburg",kesinlik:{f:"gun"},kaynak:"f: TDV yanova (Maxim 2013) 27 Mayıs 1693 · t: … (mevcut TDV macaristan metni aynen korunur)"} … ]
```
ve 1551-07-26 / 1556-03-12 ucu için `kaynak:`a ekle: ` · ic_not: gün komşudan: Erdel (MTA History of Transylvania s.102 '26 Temmuz 1551 / 12 Mart 1556' — Erdel zincirinde kaynaklı); Yanova'nın KENDİ teslim günü kaynakta yok; zincirleme devralma değildir (Erdel günü kendi kaynağına dayanıyor)`.

Kaynaklar: TDV «Yanova» (Mihai Maxim, 2013) — özet aracıyla okundu (1552 Ağustos/Temmuz nahiye fetihleri, 1566-07-25, 1595-10-22, 1658-08-30 varış, 1693-05-27), ham metin tırnağı elle doğrulanmadı; MTA *History of Transylvania* I s.102 (kayıt atfı, okunmadı).

İki uç ölçümü (yeni): d t=1693-05-27 = s f=1693-05-27 → bitişik. Öncül d f 1658-08-27 = v t (değişmez). Künye `macaristan-habsburg` 1526-12-17→1918-11-16 içinde. ±30 gün: 1693-05-27 `olaylar_ek6.js:84` → tam gün; 1566-07-25 `olaylar_p0036.js:42`; 1595-10-22 `olaylar_p0036.js:47`; 1551-07-26 `olaylar_senkron_0930.js:112`; 1556-03-12 `olaylar_senkron_0930.js:123` → hepsi VAR.

**EK BULGU (kuyruğa girmez, Emre'ye bilgi):** TDV yanova'nın 30 Ağustos 1658 cümlesi VARIŞ günüdür («ovasına gelmişti»); Lugos `d:` f=1658-08-30 (satır 629) kaynağında bu «teslim» diye okunmuş. Yanova'nın düşüş günü ve `olaylar_ek5.js:256` 1658-08-27 (varıştan 3 gün ÖNCE) çelişir. **Öneri yok: Yanova/Lugos/Karánşebeş 1658 devri için kaynak aranacak** (Bánlaky B 0016/1302 ham sayfası okunmalı).
Öneri sınıfı: UYGULA (1693 ucu) + 1551/1556 `ic_not`; 1658 ucu ÖNERİ YOK.

---

## 3. Modon (Methoni) — `data/yerlesimler.js:498`

MEVCUT:
```
kd:[{f:"1281-01-01",t:"1500-08-10",k:0,m:null},{f:"1500-08-10",t:"1686-06-01",k:3,m:"Mora (Tripoliçe)"},{f:"1686-06-01",t:"1715-08-01",k:0,m:null},{f:"1715-08-01",t:"1821-03-25",k:3,m:"Mora (Tripoliçe)"}],
s:[ … {f:"1209-01-01",t:"1500-08-10",d:"venedik",…},
    {f:"1686-06-01",t:"1715-08-01",d:"venedik",eksklav:true,kaynak:"ENKLAV BEYANI KUTU-H7-1015 … TDV mora: '1095 (1684) ile 1097 (1686) yılları arasındaki savaşlar sırasında Francesco Morosini …' · … (şehir şehir giriş-çıkış günleri bu beyanla doğrulanmadı)"},
    {f:"1821-03-25",t:"1973-06-01",d:"yunanistan",…} … ]
```
`1686-06-01` kaynaksız ay tabanıdır (kayıt kendisi "giriş günleri doğrulanmadı" diyor); `olaylar_ek6.js:68` maddesi 1686-07-10.

**Bulunan gün: 7 Temmuz 1686.** Kaynaklar:
1. Finlay, *The History of Greece under Othoman and Venetian Domination* (1856; 2005 yeniden basım), s. 215-216 — «Methoni (Modon) followed on 7 July, after an effective bombardment destroyed the fort's walls» — **dolaylı okundu** (New World Encyclopedia «Morean War» dn. 6 atfı üzerinden; Finlay'ın kendi sayfası okunmadı).
2. Pinzelli, Antonio Jansic ve Modon kalesi makalesi (Ca' Foscari / tabedizioni.it, Venedik; yazar-yıl-sayfa **okunmadı**, dosya 10 MB sınırını aştı): arama özetine göre Morosini filosu Modon önüne 21 Haziran'da demirledi, siper 1 Temmuz'da açıldı — 7 Temmuz ile uyumlu, teslim gününü bu oturumda DOĞRULAMADI.
3. TDV «Modon»: yalnız «1097'de (1686) tekrar Venedikliler'in eline geçince» — YIL, gün yok; 7 Temmuz'la ÇELİŞMEZ.
4. Setton, *Venice, Austria, and the Turks in the Seventeenth Century* (1991): **okunmadı** (yalnız içindekiler görüldü).
Çift teyit sağlanamadı → gün tek (ve dolaylı) akademik okumaya dayanıyor; kural gereği `ic_not`ta beyan edilir. Vikipedi türevi sayfalar (7 Temmuz'u tekrarlayan) dayanak sayılmadı.

ÖNERİLEN (A — tercih):
```
kd:[{f:"1281-01-01",t:"1500-08-10",k:0,m:null},{f:"1500-08-10",t:"1686-07-07",k:3,m:"Mora (Tripoliçe)"},{f:"1686-07-07",t:"1715-08-01",k:0,m:null},{f:"1715-08-01",t:"1821-03-25",k:3,m:"Mora (Tripoliçe)"}],
s:[ … {f:"1686-07-07",t:"1715-08-01",d:"venedik",eksklav:true,kesinlik:{f:"gun"},kaynak:"(mevcut ENKLAV BEYANI + TDV mora metni aynen korunur) · f: Finlay, History of Greece under Othoman and Venetian Domination (1856) s.215-216: Modon 7 Temmuz 1686 (dolaylı okundu, NWE «Morean War» dn.6) — GÜN; TDV modon/mora yalnız YIL (1686), çelişmez · ic_not: önceki 1686-06-01 kaynaksız ay tabanıydı; Pinzelli (Ca' Foscari) siper açılışı 1 Temmuz 1686, filo 21 Haziran — arama özeti, okunmadı; Setton okunmadı; çift teyit YOK — gün tek akademik okumaya dayanır"}, … ]
```
(B — gün onaylanmazsa geri-düşüş): `f:"1686-07-01"`, `kesinlik:{f:"ay"}`, `kaynak` sonuna ` · ic_not: Temmuz 1686 (ay) — TDV mora yıl; gün 7 Temmuz (Finlay, tek dolaylı okuma) beyanlı, onaylanmadı`; kd ve s'de `1686-07-01`.

İki uç ölçümü: öncül Osmanlı dilimi (kd[1] t) = ardıl Venedik f (aynı gün) → bitişik; Venedik t 1715-08-01 değişmez. Künye `venedik` f 0697-01-01 · t 1797-05-12 → içinde. ±30 gün: `olaylar_ek6.js:68` 1686-07-10 (yeni uca +3 gün) → VAR. (**SERBEST not, yerlesimler.js DIŞI:** aynı madde ve `gun:"10 Temmuz 1686"` metni 7 Temmuz'a taşınmalı ki kırılma ve madde birlikte kalsın; ayrıca çeviri eşitliği: değişen madde bütün aktif dillerde yenilenmeli.) Madde 10 Temmuz'da kalırsa Değişmez 2 yine geçer (3 gün), ama kayıt/madde 3 gün ayrışır.

Kalan belirsizlik: Finlay ham sayfası, Pinzelli ham metni, Setton okunmalı; Modon'un 4 Temmuz/7 Temmuz ayrımı (teslim müzakeresi vs. kalenin boşaltılması) kaynakta ayrışabilir.
Öneri sınıfı: UYGULA (A) — düşük güvenle; B geri-düşüş.

---

## 4. Erciş ve Eski Van (Tuşpa) — `data/yerlesimler.js:1989-1990` ve `:359`

**Bulgu: kayıtlar, görevde söylenenin TERSİNE, ZATEN doğru dönem uçlarını taşıyor; çelişki yok.**
- Eski Van (satır 359): `{f:"1502-01-01",t:"1534-06-23",d:"safevi"}` · `d:` Osmanlı `{f:"1534-06-23",t:"1535-09-22"…}` · `{f:"1535-09-22",t:"1548-08-24",d:"safevi",…}` · `d:` `{f:"1548-08-24",t:"1918-04-02",y:"kusatma"}`.
- Erciş (satır 1989-1990): s safevi 1502→1534-06-23; d 1534-06-23→1535-09-22; s safevi 1535-09-22→1548-08-24; d 1548-08-24→1920-04-23.
- **1547 Bayezid maddesi (`olaylar_ek6.js:43`, t 1547-01-01) kayıtlarla ÇELİŞMİYOR:** başlığı «(Van ve Erciş 1535'te zaten Safevîydi)» ve gövdesi Van/Erciş'in 22 Eylül 1535'te Safevî'ye döndüğünü açıkça söylüyor; Kaya 2017'nin «Bayezid 1547'de Van ve Erciş ile birlikte» cümlesinin yalnız BAYEZİD için tek tanık olduğunu belirtiyor. Yani 1547'de Van/Erciş Safevî — kayıtla uyumlu. «1535'te hâlâ Safevî» ifadesi de uyumlu: 1534-06-23'ten 1535-09-22'ye Osmanlı, sonra 1548'e Safevî.
- **Van'ın Osmanlı'ya geçişi 1548:** TDV «Van» (Orhan Kılıç, 2012) — özet aracıyla okundu: Kanûnî otağını 15 Ağustos 1548'de Van ovasına kurdu, on gün kuşatıldıktan sonra kale 24 Ağustos 1548'de fethedildi; «Vastan, Erciş, Adilcevaz ve Ahlat tekrar Osmanlılar'ın eline geçti». ⇒ Van **ve Erciş** 1548-08-24 doğrulanır (Erciş için ADIYLA, mevcut kaydın «Erciş'e adıyla tarihli geçiş bulunamadı (TDV'de ercis maddesi YOK)» cümlesi artık YANLIŞ: TDV `van` Erciş'i adıyla sayıyor).

Değişiklikler:

**4-A. Erciş f ucu (1534-06-23 → 1534-06-14), UYGULA.** TDV «Van» (Kılıç 2012; özet aracıyla): İbrahim Paşa'nın Han Süvarbey menziline ulaştığı **14 Haziran 1534**'te «Ahlat, Adilcevaz, Erciş ve Amuk kalelerinin teslim olduğu» haberi ona ulaştı. Mevcut 23 Haziran Van/Toprakkale/Avnik/Bayezid için Dündar Aydın–Kaya «razı olma» günü (Erciş'i anmaz). Erciş için ADIYLA gün 14 Haziran (haber günü ⇒ teslim en geç o gün — ÜST SINIR).
ÖNERİLEN (Erciş):
```
s:[ …, {f:"1502-01-01",t:"1534-06-14",d:"safevi"}, {f:"1535-09-22",t:"1548-08-24",d:"safevi", kaynak:"(mevcut metin korunur) · ic_not: Erciş'in Safevî'ye dönüş günü ADIYLA yok; 22 Eylül 1535 Van'dan (Karataş 2025 + olaylar_ek6.js:42); TDV irakeyn-seferi Elkas Mirza'nın 23 Eylül 1535 sonrası Erciş'e yöneldiğini ve Osmanlı yardımıyla geri çekildiğini söyler, TDV van 'Safevî idaresi 1536 başı' — Erciş için 1535-09-22…1536 başı aralığı BEYANLI"} … ],
d:[ {f:"1534-06-14",t:"1535-09-22",kesinlik:{f:"gun",t:"gun"},kaynak:"f: TDV van (Orhan Kılıç, 2012) 14 Haziran 1534 'Ahlat, Adilcevaz, Erciş ve Amuk kalelerinin teslim olduğu' haberi (teslim en geç o gün; özet aracıyla okundu, ham tırnak doğrulanmadı) · (mevcut Kaya 2017/Aydın 23 Haziran notu korunur: Van/Toprakkale/Avnik/Bayezid için; Erciş'i anmaz) · t: Van'dan 22 Eylül 1535 …"},
    {f:"1548-08-24",t:"1920-04-23",kesinlik:{f:"gun"},kaynak:"f: TDV van (Kılıç 2012): 24 Ağustos 1548 Van fethi; 'Vastan, Erciş, Adilcevaz ve Ahlat tekrar Osmanlılar'ın eline geçti' — Erciş ADIYLA"} ]
```
**4-B. Eski Van (Tuşpa): tarih ucu DEĞİŞMEZ** (1534-06-23 Van için Kaya/Aydın günü doğru). Yalnız `1535-09-22` safevi dilimine `ic_not` ekle (TDV van: «Safevî idaresi 1536 başı»; TDV irakeyn: Tahmasb kış boyunca Van'ı kuşattı, «Şah Tahmasb'ın eline geçen Van» ifadesi tarihsiz — 22 Eylül 1535 Karataş 2025 günüdür, TDV 'ay-yıl' belirsizliği 1535-Eylül…1536-baş) — zaten mevcut metinde kısmen var, çelişki beyanı tamamlanır.

İki uç ölçümü (Erciş): safevi t=1534-06-14 = d f=1534-06-14 → bitişik; d t=1535-09-22 = safevi f → bitişik; 1548-08-24 bitişik. Künye `safevi` 1501-07-01→1736-03-08 içinde; `osmanli` künyesi kapsıyor. ±30 gün: 1534-06-14 ↔ `olaylar_ek6.js:41` (06-23, 9 gün) VAR; 1535-09-22 `olaylar_ek6.js:42` VAR; 1548-08-24 `olaylar_ek5.js:501` VAR.
Kalan belirsizlik: Erciş'in 1535 sonrası Safevî'ye geçiş günü ADIYLA yok; Karataş 2025 ham metni okunmadı (kayıt atfı).
Öneri sınıfı: UYGULA (Erciş 14 Haziran + ic_not'lar). Eski Van: yalnız ic_not.

---

## 5. Hürmüz Adası, Kişm, Esterâbâd

### 5-A. Hürmüz Adası — `data/yerlesimler.js:1896-1902` · Kişm (Qeshm) — `:1903-1906`
MEVCUT (iki kayıtta aynı): `{f:"1281-01-01",t:"1510-12-02",d:"hurmuz-sultanligi"},{f:"1510-12-02",t:"1515-04-01",d:"safevi",kaynak:"DEVRALMA (DUNYA-1102 D adımı (c), 3 Kasım 2026): … «Portekiz, Hürmüz Boğazı kıyılarındaki hâkimiyetini tamamladı» (1515-04-01) … BEYANLI: olayın kaynağıdır, yerleşim tanıklığı değil"},{f:"1515-04-01",t:"1622-04-23",d:"portekiz"}, {1622-04-23→1736-03-08 safevi …}…`
Safevî 1510-12-02→1515-04-01 diliminin tek dayanağı **bir kapanış maddesi (1515-04-01 Portekiz)**; 1510-12-02 ucunun kaynağı ise Merv Savaşı günü (`olaylar_ek11.js:150`), Hürmüz'le ilgisi yok. **Hürmüz/Kişm'in 1510-1515 arasında Safevî toprağı olduğuna dair KAYNAK BULUNAMADI:** TDV «Hürmüz (İran)»: adayı Portekiz 1514'te aldı ve 108 yıl elinde tuttu, Şah Abbas 1622'de geri aldı — Safevî'yi 1510-1515 sahibi olarak anmaz. `devletler.js:9527` künye özeti (TDV'ye dayalı) sultanın «İran'a tâbi» olduğunu söyler (tâbilik, sahiplik değil). Künye kronolojisi: 1507-10-10 Albuquerque antlaşması (Hürmüz halkı Manuel'in hâkimiyetini tanıdı, yılda 15.000 eşrefî haraç — Iranica «Albuquerque»), 1508-02 Portekiz adadan ayrıldı. Albuquerque 1515'te (21 Şubat çıkış; kale 1 Nisan 1515 — arama özetleri, Iranica 403 verdi, okunamadı) adayı yeniden aldı ve 1622'ye dek koruyucu (himaye) altında tuttu; İran hükümdarları Hürmüz'ü vasal saydı (Iranica, arama özeti).

ÖNERİLEN (UYGULA, A seçeneği; Hürmüz ve Kişm için AYNI):
```
s:[ {f:"1281-01-01",t:"1515-04-01",d:"hurmuz-sultanligi",kesinlik:{t:"gun"},kaynak:"TDV hurmuz--iran: Hürmüz Sultanlığı (künye hurmuz-sultanligi) · BEYAN (Portekiz bağımlılığı, sahiplik DEĞİL — s: dönemi bağımsız-tâbi sultanlık olarak kalır; v: yalnız Osmanlı tâbiliğidir): 10 Ekim 1507 Albuquerque antlaşması (Hürmüz Manuel'in hâkimiyetini tanıdı, yılda 15.000 eşrefî haraç — Encyclopaedia Iranica «Albuquerque, Alfonso de», künye kronolojisi devletler.js:9527+) → Şubat 1508'de Portekiz adadan ayrıldı, bağımlılık fiilen askıda; 1515'te Albuquerque adayı yeniden aldı (TDV hurmuz--iran '1514'te aldığı' yılını verir; 1 Nisan 1515 kale günü — olaylar_2s_0918.js:67). 1510-12-02 SAFEVÎ DÖNEMİ KALDIRILDI: bu ucun tek dayanağı Merv Savaşı günüydü (Hürmüz'e ilişkin kaynak YOK); Safevî yalnız üst-hükümdar iddiası (TDV 'İran'a tâbi'; Iranica: İran hükümdarları Hürmüz'ü vasal sayar) — ic_not: künye t 1514-01-01 (TDV yıl) ile bu uç (1515-04-01 gün) 15 ay ayrışır; TDV yılı (1514) ile Portekiz kaynakları (1515) çelişkisi çözülmedi, Iranica/Boxer/Setton ham metni OKUNMADI"},
    {f:"1515-04-01",t:"1622-04-23",d:"portekiz",kesinlik:{f:"gun"},kaynak:"olaylar_2s_0918.js:67 (1515-04-01) · TDV hurmuz--iran: 'Portekiz'in 1514'te aldığı ada … 108 yıl' ve Şah Abbas 1622 · ic_not: Hürmüz kralı Portekiz vasalı olarak sürdü, atlas sahiplik = kale/himaye (Portekiz)"},
    {f:"1622-04-23",t:"1736-03-08",d:"safevi", …(DEĞİŞMEZ)} … ]
```
**ÖN KOŞUL (SERBEST, devletler.js — yerlesimler.js kuyruğunda DEĞİL):** künye `hurmuz-sultanligi` t=1514-01-01 → s dilimi 1515-04-01'e uzanınca 15 ay AŞIM. Sınıflama: devlet ölmedi, aynı polity (Hürmüz kralı Portekiz vasalı olarak 1622'ye kadar sürdü) → künye t GENİŞLETİLİR (1514-01-01 → 1515-04-01) veya (B seçeneği) s: `hurmuz-sultanligi` t=1514-01-01 + `portekiz` f=1514-01-01 yazılır, ama o zaman 1514-01-01'de ±30 gün Değişmez 2 maddesi YOK (künye içi `kronoloji:` Değişmez 2 evreninde değil) → B için `olaylar_*.js`'a «Portekiz Hürmüz'ü aldı (1514, TDV)» maddesi yazılmalı. A, mevcut 1515-04-01 maddesini kullandığı için önerilir. Karar KASA/Emre'nin: TDV (1514) ↔ Boxer/Iranica (1515) hakemli çelişki, kaynaklar okunamadı.

İki uç ölçümü (Hürmüz ve Kişm): öncül 1281-01-01 ucu değişmez; yeni hurmuz t=1515-04-01 = portekiz f → bitişik (eski safevî dilimi çıktı, çakışma yok); portekiz t=1622-04-23 = safevi f bitişik. Künye `portekiz` 1097-01-01→… içinde; `safevi` 1622-04-23 içinde (1501-07-01→1736-03-08); `hurmuz-sultanligi` → yukarıdaki AŞIM. ±30: 1515-04-01 `olaylar_2s_0918.js:67` VAR (yeni uç tam gün); 1622-04-23 mevcut. 1510-12-02 artık Hürmüz/Kişm sınırı OLMAZ (Merv maddesi bu iki yerleşimin Değişmez 2 tanığı olmaktan çıkar).
Kalan belirsizlik: 1507-1515 arası fiilî Portekiz/Safevî üst-hükümdarlığı arasındaki denge; Iranica ham metni (403), Boxer, Setton okunmadı.
Öneri sınıfı: UYGULA (Safevî diliminin kaldırılması + beyan) — künye aşımı ön koşuluyla.

**EK BULGU (aynı kusur, kuyruğa girmez):** `Kiş (Kish)` `:1907-1910`: `{f:"1281-01-01",t:"1508-01-01",d:"hurmuz-sultanligi"},{f:"1508-01-01",t:"1736-03-08",d:"safevi"}` — Safevî dilimi «Bağdat'ın Safevî'ye geçişi (1508-01-01)» maddesinden devralma; Kiş/Hürmüz için kaynak YOK. **Öneri yok: kaynak aranacak** (Kiş'in 1508-1622 sahibi).

### 5-B. Esterâbâd (Gürgân) — `data/yerlesimler.js:2238`
MEVCUT (ilgili dilimler): `…{f:"1386-01-01",t:"1507-05-01",d:"timurlu",…},{f:"1507-05-01",t:"1510-12-02",d:"mazenderan-marasi",kaynak:"DEVRALMA (DUNYA-1102 …) «Zünnûn Argun'un ölümüyle Timurlu Kandehar valiliği sona erdi» (1507-05-01) …"},{f:"1510-12-02",t:"1736-03-08",d:"safevi"},{f:"1736-03-08",t:"1747-06-20",d:"afsar"}…` (`safevi` diliminde `kaynak`/`kesinlik` YOK).
**Kaynak (bulundu):** TDV «Esterâbâd» (Tahsin Yazıcı, 1995, c.11, s. 437-438) — özet aracıyla okundu: «Bir ara Özbekler'in egemenliği altına giren Esterâbâd, 1510'da Safevî Hükümdarı Şah İsmâil tarafından ele geçirildi.» ⇒ Safevî geçişi **1510, YIL**; gün YOK. Merv Savaşı (2 Aralık 1510, `olaylar_ek11.js:150`) bir gün kaynağı DEĞİL, yalnız yıl-içi bir tahmin: Esterâbâd'ın Merv'den önce mi sonra mı alındığı kaynakta yok. `1507-05-01` Mar'aşî dilimi başlangıcı ise Kandehar maddesinden devralma (Esterâbâd'la ilgisi kaynaksız); TDV'ye göre arada «bir ara Özbek egemenliği» var — Özbek dönemi atlasta YAZILI DEĞİL.
ÖNERİLEN (UYGULA):
```
{f:"1510-12-02",t:"1736-03-08",d:"safevi",kesinlik:{f:"yil"},kaynak:"f: TDV esterabad (Tahsin Yazıcı, 1995, c.11 s.437-438): «Bir ara Özbekler'in egemenliği altına giren Esterâbâd, 1510'da Safevî Hükümdarı Şah İsmâil tarafından ele geçirildi.» — YIL [yalnız yıl teyitli; gün teyitsiz]; 12-02 Merv Savaşı günüdür (olaylar_ek11.js:150) ve sınıra bağlı ±30 gün tanığı olduğu için gün olarak KORUNDU (teyit-kampanyası kuralı), Esterâbâd'a özgü gün DEĞİLDİR · ic_not: TDV 'bir ara Özbek egemenliği' diyor; atlasın 1507-05-01→1510-12-02 mazenderan-marasi dilimi Özbek dönemini kapsamıyor (BEYANLI YAKLAŞIKLIK, Kandehar maddesinden devralma) — Özbek dönemi için tarih/kaynak aranacak"}
```
İki uç ölçümü: öncül t=1510-12-02 = ardıl f → bitişik; ardıl t=1736-03-08 = afsar f → bitişik. Künye `safevi` 1501-07-01→1736-03-08 içinde; `mazenderan-marasi` 1359-01-01→1596-01-01 içinde. ±30: Merv `olaylar_ek11.js:150` (tam gün) VAR — ama Merv maddesi bu yerleşime konu olarak bağlı DEĞİL, sayaç tanığıdır.
Kalan belirsizlik: Şah İsmâil'in Esterâbâd'ı alış günü; Özbek egemenliği dönemi (Şeybânî 1509-1510?) — **öneri yok: kaynak aranacak** (Iranica «Astarābād» 403 verdi, okunamadı).
Öneri sınıfı: UYGULA (yalnız kesinlik/kaynak; tarih değişmez) + Özbek dönemi ÖNERİ YOK.

---

## 6. Kasîm (Buraydâ, Uneyze) ve Suûd zinciri 1902-01-15

**Kaynak:** Kasîm 13 Nisan 1906'ya dek Reşîdî (`sammar`):
- TDV «Reşîdîler» (özet aracıyla, İngilizce özet olarak okundu; Türkçe tırnak DOĞRULANMADI): İbn Suûd Riyad'ı 1902'de, Kasîm'i 1906'da aldı, Reşîdîler ağırlıklı olarak Hâil'e sıkıştı.
- TDV «Abdülazîz b. Abdurrahman» (Hulusi Yavuz): Ocak 1902'de Riyad'ı aldı; «1906'da İbnü'r-Reşîd'in emîrini mağlûp edip öldürdü» — YIL; 13 Nisan günü bu oturumda ham tırnakla DOĞRULANMADI (özet aracı yıl verdi); gün `olaylar_2s_1019.js:452-464` maddesinde (t:1906-04-13, kaynak: TDV abdulaziz-b-suud AYNEN «13 Nisan 1906’da … mağlûp ederek öldürdü») yazılı — kayıt atfı.
- Not (okunmadı/dayanak değil): Vikipedi türevi sayfalar Ravzatü Muhanna'yı 12 Nisan 1906 verir (TDV 13 Nisan esas; çelişki `ic_not`ta beyan) ve 1904-1906 arası Osmanlı-Reşîdî birliklerinin Kasîm'de kaldığını (Şinâne 29 Eylül 1904) söyler — bu, Kasîm'in 1904'te kısmen Suûd'a geçmiş olabileceğini düşündürür; akademik kaynakla (Lorimer, Gazetteer; Vassiliev) doğrulanmadı ⇒ 1906-04-13 TDV'nin tanıkladığı kesin uçtur, ara dönem YAZILMAZ.

**Etkilenen yerleşimler** (yerlesimler*.js'te `suud-ucuncu` f=1902-01-15 olan 12 kayıt tarandı):

| Yerleşim | Dosya:satır | Sonuç |
|---|---|---|
| Buraydâ (Kasîm) | yerlesimler.js:2278 | **HATALI** → 1906-04-13 |
| Uneyze | yerlesimler.js:2279 | **HATALI** → 1906-04-13 |
| Şakrâ | yerlesimler.js:2280 | Kasîm DEĞİL (Veşm/Washm, 25.239N 45.253E); 1902 ucu için kaynak yok → **ÖNERİ YOK: kaynak aranacak** |
| Dir'iye (Necid) | yerlesimler.js:910 | DOĞRU (Riyad'a komşu, 1902-01-15 Riyad günü) |
| Riyad | yerlesimler.js:1195 | DOĞRU (1902-01-15 Riyad'ın alınışı; `olaylar_ek7.js:214`) |
| Necid içi | yerlesimler.js:1409 | DOĞRU (varsayılan Riyad yakını) — bölge yerleşimi, kaynak yok, değişmez |
| Menfûha | yerlesimler_zincir64.js:190 | DOĞRU, **SERBEST** (Riyad semti) |
| Dilem (Harc), Havta, Leylâ | yerlesimler_nokta_ortadogu_0917.js:22,27,32 | DOĞRU (Lorimer I/1145: Havta 1902'de Abdülazîz'e katıldı, kayıt atfı), **SERBEST** |
Hâil (1315) ve Nefud çölü (1399) `suud-ucuncu` 1902 zinciri taşımıyor.

### 6-A. Buraydâ (Kasîm) — satır 2278 ve 6-B. Uneyze — satır 2279 (AYNI düzeltme)
MEVCUT: `s:[{f:"1744-01-01",t:"1818-09-09",d:"suud-birinci"},{f:"1824-06-01",t:"1891-01-01",d:"suud-ikinci"},{f:"1891-01-01",t:"1902-01-15",d:"sammar"},{f:"1902-01-15",t:"1932-09-18",d:"suud-ucuncu"},{f:"1932-09-18",t:"2000-12-31",d:"suudi-arabistan",kaynak:"DEVRALMA …"}]`
ÖNERİLEN:
```
{f:"1891-01-01",t:"1906-04-13",d:"sammar",kesinlik:{t:"gun"},kaynak:"t: TDV abdulaziz-b-suud (Hulusi Yavuz) 1906'da İbnü'r-Reşîd'in emîrini yenip öldürdü; gün: olaylar_2s_1019.js:452-464 maddesi 13 Nisan 1906 (TDV AYNEN alıntısı kayıt atfı) · TDV residiler (özet): Kasîm 1906'da Suûd'a geçti, Reşîdîler Hâil'e sıkıştı · ic_not: Vikipedi türevleri Ravzatü Muhanna'yı 12 Nisan 1906 verir (dayanak değil, TDV 13 Nisan esas); 1904-1906 Osmanlı-Reşîdî birliklerinin Kasîm'de kalması akademik kaynakla OKUNMADI, ara dönem yazılmadı"},
{f:"1906-04-13",t:"1932-09-18",d:"suud-ucuncu",kesinlik:{f:"gun"},kaynak:"f: TDV abdulaziz-b-suud + TDV residiler (Kasîm 1906), gün olaylar_2s_1019.js:452-464 · ic_not: künye suud-ucuncu f 1902-01-15 (Riyad) ≤ bu uç — künye içinde; Buraydâ/Uneyze'nin bu gün mü, bir gün öncesi mi/sonrası mı el değiştirdiği (TDV olay yeri Ravzatü Muhanna, Kasîm) kaynakla ayrılmadı; maddenin yer: alanı «Buraydâ (Kasîm), Uneyze» der"}
```
İki uç ölçümü: öncül `sammar` f=1891-01-01 (DEĞİŞMEZ; künye `sammar` f 1835-01-01 · t 1921-11-02 içinde) t=1906-04-13 = ardıl `suud-ucuncu` f → bitişik; `suud-ucuncu` künye f 1902-01-15 ≤ 1906-04-13, t 1932-09-18 = sonraki `suudi-arabistan` f bitişik (değişmez). ±30 gün: `olaylar_2s_1019.js:452` t=1906-04-13, `yer_id:"Buraydâ (Kasîm)"`, `yer:` «Buraydâ (Kasîm), Uneyze» → tam gün VAR (iki yerleşim için de). Sonuç: bugünkü 1902-01-15 ucu bu iki yerleşim için 4 yıl 3 ay erken.
Kalan belirsizlik: 1891-01-01 (`sammar` f) künye/Müleyde 1891-01-24 maddesiyle zaten ayrışık (bu görev kapsamı dışı, değişmedi). Yer-yer (Uneyze) fiilî el değiştirme günü ayrı kaynaklanmadı.
Öneri sınıfı: UYGULA (Buraydâ, Uneyze).
**Not (Şakrâ):** `:2280` Washm; `suud-ucuncu` 1902-01-15 ucu yalnız Riyad zincirinden devralınmış görünür. Washm/Sudayr'ın 1902-1904 arasında Reşîdî'den mi Suûd'a mı geçtiği kaynakla bulunamadı ⇒ **öneri yok: kaynak aranacak** (Lorimer, Gazetteer of the Persian Gulf, Oman and Central Arabia, Washm/Shaqra maddeleri okunmalı).

---

## 7. Zaria (Zazzau)

**Dosyası: `data/yerlesimler_e9353f.js:256-261` (aynı kayıt `data/yer_yama_1923_1945.js:3539`'da yama kopyası; yerlesimler.js'te YOK) → SERBEST; yerlesimler.js kuyruğuna GİRMEZ.**
MEVCUT: `s:[{f:"1281-01-01",t:"1806-01-01",d:"hausa-sehir-devletleri",kaynak:"sokoto"},{f:"1806-01-01",t:"1903-01-01",d:"sokoto",kaynak:"TDV osman-b-fudi: '1806’da Zaria ele geçirildi' — YIL · KRONO-2S-3 19 Eyl 2026"},{f:"1903-01-01",t:"1960-10-01",d:"ingiltere",kaynak:"sokoto"},{f:"1960-10-01",t:"2000-12-31",d:"nijerya",…}]`
**Kaynak (bulundu):**
- *Encyclopaedia Britannica*, 11. baskı (1911), «Zaria» (Wikisource üzerinden okundu): «In March 1902 the province was taken under British administrative control.» «He was deposed in the autumn of 1902.» — AY (Mart 1902); emir (Kwasau/Muhammad) 1902 sonbaharında görevden alındı.
- Johnston'a dayalı Lugard özeti (webpulaaku.site hasJohnston ch23 — arama özeti, **okunmadı**): Zaria Emiri'nin Lugard'dan Kontagora emiri İbrahim'e karşı yardım istemesi bağımlılığın kabulü sayıldı, şehir dışına garnizon yerleştirildi, Kwasau Eylül 1902'de gözaltına alınıp uzaklaştırıldı.
- ABU Zaria tezi, «A History of Birnin Zaria from 1350–1902» (kubanni.abu.edu.ng, 2007; **okunmadı**, arama özeti): İngiliz kontrolü 1902.
- Lugard, *Annual Report 1902, Northern Nigeria* (dawodu.com): sunucu 500 verdi, **okunmadı**.
Sokoto'nun siyasî sonu Burmi 27 Temmuz 1903 (`olaylar_2s_0919.js:380`); Sokoto Muharebesi 15 Mart 1903 Zaria'nın devrinden BAĞIMSIZDIR: Zaria 1903'ten ÖNCE İngiliz idaresine girmiştir.
**Doğrulama:** görevdeki «Zaria Mart 1902'de İngiliz'e geçti» cümlesi ve EB 1911 uyumlu. Mevcut `t:1903-01-01` yıl tabanı ≈10 ay geç ve kaynaksız (kaydın kaynağı `sokoto` madde adı).
ÖNERİLEN (yerlesimler_e9353f.js ve aynı kayıt yer_yama_1923_1945.js:3539'da, SERBEST):
```
{f:"1806-01-01",t:"1902-03-01",d:"sokoto",kesinlik:{f:"yil",t:"ay"},kaynak:"f: TDV osman-b-fudi '1806’da Zaria ele geçirildi' — YIL · t: Encyclopaedia Britannica (11. baskı, 1911) «Zaria»: 'In March 1902 the province was taken under British administrative control' — AY (ayın 1'i ay işaretidir) · ic_not: gün YOK; Lugard garnizonu/Resident (Johnston-Lugard özeti, okunmadı) ve emirin 1902 Eylül-sonbahar görevden alınması ayrı olaydır"},
{f:"1902-03-01",t:"1960-10-01",d:"ingiltere",kesinlik:{f:"ay"},kaynak:"f: Encyclopaedia Britannica (1911) «Zaria» Mart 1902 İngiliz idari denetimi — AY · ic_not: Sokoto Halifeliği'nin siyasî sonu Burmi 1903-07-27 (künye sokoto t) Zaria'dan sonradır; Zaria kronolojisi 1903-01-01 değil 1902-03"}
```
Ek (SERBEST, olaylar_*.js): yeni kronoloji maddesi gerekir — **«Zaria İngiliz idaresine girdi» t=1902-03-01 kesinlik "ay"** (±30 gün `olaylar_*.js`'te Zaria/Sokoto maddesi YOK: ölçüm 1901-1903 arasında Zaria, Kano, Sokoto için yalnız `olaylar_2s_0919.js:380` Burmi ve `:474` Adamava bulundu) — yoksa Değişmez 2 yeni sınırı yakalar. Madde bütün aktif dillerde yazılmalı (çeviri eşitliği).
İki uç ölçümü (öneri): öncül `sokoto` t=1902-03-01 = ardıl `ingiltere` f → bitişik; `sokoto` künye f 1804-01-01 · t 1903-07-27 içinde (KISALTMA, aşım yok); `ingiltere` künye f 0927-01-01 içinde (Not: kayıt zinciri `ingiltere` id'sini kullanıyor; `ingiliz-nijerya` künyesi f 1861-01-01 ayrı id — mevcut örüntü korundu). ±30: ŞU AN YOK ⇒ yeni madde şart. Komşu: `Kano` (`yerlesimler_e9353f.js:237-240`) aynı `1903-01-01` yıl tabanını taşıyor (Kano 3 Şubat 1903) — AYNI kusur, bu görevde ayrı kaynak aranmadı: **öneri yok: kaynak aranacak**.
Kalan belirsizlik: Mart 1902 içi gün; TDV sokoto/zarya ham metni bu oturumda okunamadı (TDV'de Zaria için ayrı slug sonuçlanmadı).
Öneri sınıfı: **SERBEST** (dosyası: yerlesimler_e9353f.js + yer_yama_1923_1945.js:3539; olaylar_*.js'e yeni madde).

---

## ÖZET TABLO

| # | Yerleşim | Dosya | Sınıf | Öneri | Güven / kalan |
|---|---|---|---|---|---|
| 1 | Lugos (Lugoj) | yerlesimler.js:617-633 | UYGULA (yalnız `ic_not`) | `kesinlik` zaten "ay" (f/t); tarih DEĞİŞMEZ; Lippa sıralama beyanı eklenir | Haziran 1688 gün yok |
| 1-B | Karánşebeş | yerlesimler_zincir64.js:44-46 | **SERBEST** | `kesinlik:{f:"ay",t:"ay"}` ekle; "yapılan düzeltme" HEAD/origin/main'de YOK | gün yok |
| 2 | Yanova (Ineu) | yerlesimler.js:1540 | UYGULA | `s:` boşluğu YOK (v/d örtülü); d t / s f 1693-01-01 → **1693-05-27** (TDV Maxim 2013); 1551/1556 günleri "komşudan: Erdel" | 1658 düşüş günü ÖNERİ YOK (TDV 30 Ağustos = varış) |
| 3 | Modon | yerlesimler.js:498 | UYGULA (düşük güven) | kd + Venedik f 1686-06-01 → **1686-07-07** (Finlay, dolaylı); B: Temmuz 1686 ay | tek dolaylı kaynak; Setton/Pinzelli okunmadı; madde 07-10 SERBEST |
| 4 | Erciş | yerlesimler.js:1989-1990 | UYGULA | Dönem uçları ZATEN doğru; Erciş f 1534-06-23 → **06-14** (TDV van adıyla) + ic_not | 1535 sonrası Erciş günü Van'dan |
| 4 | Eski Van (Tuşpa) | yerlesimler.js:359 | UYGULA (yalnız `ic_not`) | uçlar DEĞİŞMEZ; 1547 Bayezid maddesi ÇELİŞMİYOR | — |
| 5 | Hürmüz Adası | yerlesimler.js:1896 | UYGULA | 1510-12-02→1515-04-01 **Safevî KALDIR** → hurmuz-sultanligi 1515-04-01'e kadar + Portekiz bağımlılığı beyanı (1507-10-10 haraç, 1515) | künye t 1514 aşımı (devletler.js, SERBEST); TDV 1514 ↔ 1515 hakem; Iranica/Boxer okunmadı |
| 5 | Kişm (Qeshm) | yerlesimler.js:1903 | UYGULA | Hürmüz ile aynı | aynı |
| 5 | Esterâbâd | yerlesimler.js:2238 | UYGULA | Safevî 1510 YIL (TDV Yazıcı 1995): `kesinlik:{f:"yil"}` + kaynak, gün Merv'den korunur; Özbek dönemi ÖNERİ YOK | gün yok |
| 5 | Kiş (ek bulgu) | yerlesimler.js:1907 | ÖNERİ YOK | Safevî 1508-01-01 Bağdat maddesinden devralma, Kiş kaynağı yok | kaynak aranacak |
| 6 | Buraydâ (Kasîm) | yerlesimler.js:2278 | UYGULA | `sammar` t + `suud-ucuncu` f 1902-01-15 → **1906-04-13** | gün TDV alıntısı kayıt atfı; 12 Nisan çelişkisi beyanlı |
| 6 | Uneyze | yerlesimler.js:2279 | UYGULA | aynı | aynı |
| 6 | Şakrâ | yerlesimler.js:2280 | ÖNERİ YOK | Kasîm değil (Washm); kaynak aranacak | — |
| 6 | Dir'iye / Riyad / Necid içi | :910/:1195/:1409 | DEĞİŞMEZ | 1902-01-15 doğru | — |
| 6 | Menfûha, Dilem, Havta, Leylâ | zincir64 / nokta_ortadogu | DEĞİŞMEZ (SERBEST) | 1902 doğru | — |
| 7 | Zaria (Zazzau) | **yerlesimler_e9353f.js:256** (+ yer_yama_1923_1945.js:3539) | **SERBEST** | sokoto t / ingiltere f 1903-01-01 → **1902-03-01 (ay)** (EB 1911); yeni madde şart | gün yok; Kano aynı kusur |

Uygulama notları (koşu inişi sonrası):
1. Kuyruğa giren kayıtlar: Lugos, Yanova, Modon, Erciş, Eski Van, Hürmüz, Kişm, Esterâbâd, Buraydâ, Uneyze.
2. Değişen tarihler kronoloji ile bire bir örtüşür (ölçüm yukarıda): Modon için madde 07-10→07-07 taşınmalı (SERBEST); Hürmüz/Kişm için künye aşımı kararı (SERBEST) ön koşuldur.
3. Uygulamadan sonra `py arac/denetle.py`, `py arac/paketle.py yenile`, `py arac/surum_damgala.py`; D2 sapma azalması beklenir (Yanova 1693, Kasîm 1902→1906, Hürmüz/Kişm Merv ucunun kalkması) — ÖLÇÜLMEDİ.
4. Tavan değişimi gerekirse (`BEKLENEN_*`) kaynağı raporlanır; Değişmez 2 ölçütü gevşetilmez.

---

# YERLESIMLER-JS-KUYRUK-1114

Bu dosya data/yerlesimler.js icin bekleyen duzeltmeleri toplar (yerlesimler.js "yayin bayat" duvari yuzunden bu dalda yazilmaz). Asagida TAKVIM bolumu umit-1113-takvim2 dalindan eklenmistir; baska bolum eklenmisse dokunulmaz.

## TAKVIM (TAKVIM-PARTISI-1114, Julyen -> Gregoryen)

Kural: CLAUDE.md "Julyen/Gregoryen siniri". Ana kronoloji maddeleri bu dalda tasindi (11-13 gun < +-30 gun, Degismez 2 bozulmaz); asagidaki yerlesim kirilmalari kaynagi ayni Julyen gun oldugundan AYNI gune tasinmalidir. Bicim: yerlesim | mevcut gun | yeni gun | madde | kaynak.

Not: devletler.js septinsular kunyesi (f:"1800-03-21" ve ic olay t:"1800-03-21") ayni gun tasinmali; yerlesimler.js ile BIRLIKTE uygulanmali, yoksa yerlesimin septinsular donemi kunye f'sinden once baslar (kunye asimi).

| yerlesim | mevcut gun | yeni gun | madde | kaynak |
|---|---|---|---|---|
| Çuha Adası (Kythira) s/kd: fransa-cumhuriyet t | 1800-03-21 | 1800-04-02 | Yedi Ada Cumhuriyeti kuruldu (olaylar_ek17) | Noradounghian II n.11 "21 mars 1800 (8 Zilkade 1214)" Julyen; hakemli karar: olaylar_ek17 ic_not_gun |
| Çuha Adası (Kythira) s: septinsular f | 1800-03-21 | 1800-04-02 | aynı | aynı |
| Korfu s: fransa-cumhuriyet t | 1800-03-21 | 1800-04-02 | aynı | aynı |
| Korfu s: septinsular f | 1800-03-21 | 1800-04-02 | aynı | aynı |
| Ayamavra (Lefkada) s: fransa-cumhuriyet t | 1800-03-21 | 1800-04-02 | aynı | aynı |
| Ayamavra (Lefkada) s: septinsular f | 1800-03-21 | 1800-04-02 | aynı | aynı |
| Kefalonya s: fransa-cumhuriyet t | 1800-03-21 | 1800-04-02 | aynı | aynı |
| Kefalonya s: septinsular f | 1800-03-21 | 1800-04-02 | aynı | aynı |
| İthaki s: fransa-cumhuriyet t | 1800-03-21 | 1800-04-02 | aynı | aynı |
| İthaki s: septinsular f | 1800-03-21 | 1800-04-02 | aynı | aynı |
| Zaklise (Zakynthos) s: fransa-cumhuriyet t | 1800-03-21 | 1800-04-02 | aynı | aynı |
| Zaklise (Zakynthos) s: septinsular f | 1800-03-21 | 1800-04-02 | aynı | aynı |
| (devletler.js septinsular künye) f | 1800-03-21 | 1800-04-02 | aynı | aynı (yerlesimler.js ile birlikte) |
| (devletler.js septinsular iç olay) t | 1800-03-21 | 1800-04-02 | aynı | aynı (yerlesimler.js ile birlikte) |

Paksos kaydi (yerlesimler_ek_adalar.js) bu dalda tasindi.

| yerlesim | mevcut gun | yeni gun | madde | kaynak |
|---|---|---|---|---|
| Novgorod (yerlesimler.js satir 1289) s: rusya f ({f:"1617-02-27",t:"1917-03-15",d:"rusya"}; onceki isvec parcasinin t'si de ayni gun) | 1617-02-27 | 1617-03-09 | Stolbova/Stolbovo Antlasmasi (olaylar_ek16 x2, kronoloji_isvec) | prlib.ru/history/619081 "27 февраля (9 марта) 1617 г." (Julyen 27 Subat = 9 Mart G); Yam, Koporye (yerlesimler_ek29.js) ve Oresek (yerlesimler_h2_rusya.js) bu dalda tasindi |

Not: yer_yama_1923_1945.js (KARANTINA, aktive edilmiyor) icindeki Oresek 1617-02-27 kirilmasina dokunulmadi.
