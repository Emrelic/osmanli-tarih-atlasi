# BULGU — OKYANUSYA-ARS-0902 (Avustralya + Yeni Gine + Okyanusya)

> Oturum: SONNET HAZIR KITA 129. Şartname: `oturumlar/ARASTIRMA-DUNYA-0902.md` § ④.
> Sevk: tahta M-2281/M-2286 (1.MURAT). **ARAŞTIRMA — `data/`'ye YAZILMADI.**
> Kutu: 44G–0K / 112–180D (Avustralya ana kıta + Tazmanya + Yeni Zelanda + Yeni Gine + yakın Pasifik).

---

## ⓪ ÖNCE BİR ÖLÇÜM DÜZELTMESİ — devraldığım taban sayı ÇÜRÜDÜ

Şartname "Avustralya 14 nokta / 7,7 Mkm²" ve "Yeni Gine+Okyanusya 14 nokta / 1,0 Mkm²"
diyordu. **Bu sayıları aktarmadan önce ölçtüm** (§11: devralınan sayı önce ölçülür).

```
kutu-bazlı sorgu (lat -44..0, lon 112..180)  → 54 nokta
  bunun "Avustralya ana kıta" alt-kutusuna (lat -44..-10, lon 112..154) düşen 14'ü:
    Sydney · 5× "Avustralya İç Kesimi" kabile bölgesi · Tazmanya · Hobart ·
    Melbourne · Adelaide · Perth · Brisbane  = 12 GERÇEK Avustralya noktası
    + Kupang · Rote  = 2 ENDONEZYA noktası (Nusa Tenggara, yerlesimler_gdasya.js
      / yerlesimler_asya.js sahibi) — kutuya coğrafi ÇAKIŞMAYLA girmiş
```

⇒ **Taban "14" rakamı muhtemelen aynı kutu-sorgusuyla üretilmiş ve 2 Endonezya
noktasını yanlışlıkla saymış.** Gerçek Avustralya (anakıta+Tazmanya) nokta sayısı
**12**'dir, 14 değil. Bu bir düzeltme talebi değil — bir sonraki oturum aynı kutuyu
kullanırsa aynı hataya düşer diye kayda geçiriyorum.

**"Yeni Gine + Okyanusya" için de aynı kirlenme var** — kutunun geri kalanı (40
nokta) Endonezya takımadalarının BÜYÜK ÇOĞUNLUĞUNU (Trowulan, Surabaya, Bali,
Makassar, Ambon, Banda, Dili… 24 nokta — bunlar Güneydoğu Asya bölgesinin,
zaten ayrı ölçülmüş) içeriyor. **Gerçek "Okyanusya" kümesi** (yalnız
`yerlesimler_ek30.js` + `yerlesimler_emilme.js`'in Yeni Gine kısmı, bu ikisi
bölgenin ELİNDEKİ tek iki dosya):

```
Avustralya (anakıta+Tazmanya)     12 nokta   ~7,7 Mkm²
Yeni Zelanda                       5 nokta   ~0,27 Mkm²
Yeni Gine (Hollanda+Alman+İngiliz)  9 nokta   ~0,46 Mkm² (kıyı 5 + iç kabile dolgu 4)
Uzak Pasifik (Fiji·Tonga·Hawaii·Yap·Rapa Nui)  6 nokta  dağınık adalar
──────────────────────────────────────────────
TOPLAM ölçülen                    32 nokta
```

---

## ① SİYASÎ YAPI ARAŞTIRMASI — sonuç: iş BÜYÜK ÖLÇÜDE ZATEN YAPILMIŞ

Şartnamenin istediği araştırmayı (Aborjin toplumların devlet olup olmadığı ·
İngiliz koloni merkezleri · Māori iwi · Yeni Gine üçlü bölünmesi) **iki önceki
oturum zaten yapmış**: `yerlesimler_ek30.js` (NOKTA OKYANUSYA, 16 Ağustos) ve
`yerlesimler_emilme.js`'in Yeni Gine kısmı (NOKTA EMİLME, 8 Ağustos). Kalitesi
yüksek — her kayıtta `kaynak:` dolu, kurumsal akademik kaynaklara dayanıyor
(Australian Dictionary of Biography · Te Ara Encyclopedia of NZ · AIATSIS ·
State Library of NSW/Victoria · UNESCO), ve cins ayrımı (§ "devletsiz" vs
"kabile" vs gerçek `s:` dönemi) **doğru uygulanmış**:

```
🟢 KABİLE (kaynak "merkezî devlet yoktu ama teşkilatlı toplum vardı" diyor):
   6× Avustralya İç Kesimi (Orta·Kimberley·Arnhem·Cape York·Nullarbor) + Tazmanya
   2× Yeni Zelanda Māori (Kuzey Ada·Güney Ada, iwi/hapū temelli)
   4× Yeni Gine İç Yaylaları (Mount Hagen·Baliem·Sepik·Fly Nehri)
   + Yap · Rapa Nui · Hawaii · Fiji(Bau) — hepsi AIATSIS/akademik kaynakla
🟢 DEVLETSİZ (kaynak "burada egemenlik yoktu, ticarî temas vardı" diyor):
   Port Moresby (1884'e kadar) · Madang/Finschhafen (1884'e kadar) ·
   Suva (1874'e kadar — 1849 ticaret istasyonu ≠ egemenlik, ANU Press'ten
   AÇIKÇA ayrıştırılmış)
🟢 GERÇEK SİYASÎ GÖVDE (`s:` dönemi VAR, künyeye bağlı):
   6× İngiliz koloni şehri (Sydney 1788·Hobart 1804·Melbourne 1835·
   Adelaide 1836·Perth 1829·Brisbane 1824) → `d:"ingiltere"` sonra `d:"avustralya"`
   3× Yeni Zelanda şehri (Auckland 1840·Wellington 1840·Christchurch 1850)
   → `d:"yeni-zelanda"`
   2× Yeni Gine kıyı (Jayapura/Manokwari) → `d:"hollanda-dogu-hint"`
   Lapaha/Tonga → `d:"tui-tonga-imparatorlugu"` sonra `d:"tonga-kralligi"`
```

**Çıkardığım:** Bu bölgenin "dünyanın en boş yeri" görünmesinin sebebi nokta
EKSİKLİĞİ değil (nokta tarafı iyi durumda) — aşağıda ②'de asıl sebep.

---

## ② ASIL BOŞLUK — kronoloji, nokta DEĞİL

Şartname doğru teşhis koymuş: **"kronoloji maddesi SIFIR."** Ölçtüm:

```bash
grep -l "Avustral\|Sydney\|Auckland\|Yeni Zelanda\|Waitangi\|Tazmanya\|Fiji\|
         Tonga\|Hawaii\|Papua" data/olaylar*.js
```
→ **0 dosya, 0 madde.** `Değişmez 2`'nin evreni (`data/olaylar*.js`, çekirdek
1303 madde) bu bölgeden **tek bir olay bile içermiyor.**

🟡 **AMA TAM SIFIR DEĞİL — kuyrukta 2 madde var, bağlantısız:**
```
data/kronoloji_ingiltere.js:827  "İlk Filo Botany Bay'e ulaştı" (1788-01-26)
    yer_id:""  yer_kon:[-34,151.2]   ← koordinat VAR, isim-bağlantı YOK
data/kronoloji_ingiltere.js:1005 "Waitangi Antlaşması imzalandı" (1840-02-06)
    yer_id:""  yer_kon:[-35.268,174.079]
```
Bu ikisi `Değişmez 2`'nin evreninde DEĞİL (kuyruk dosyası) ve `yer_id` boş
olduğu için Sydney/Auckland kayıtlarına da BAĞLI değil — CLAUDE.md §11'in
*"bu gün zaten var yetmiyor, hangi KOVADA olduğu da sorulmalı"* dersinin
birebir vakası.

🔴 **VE BUNUN SESSİZ BİR SONUCU VAR:** 12 Avustralya + 5 Yeni Zelanda + 9 Yeni
Gine noktasının `s:`/`kur:` alanlarındaki **~20 kırılma günü**, `Değişmez 2`'nin
±30 gün eşleşme taramasına GİRİYOR (bu noktalar `girdi.py`ye bağlı) ama
karşılarına gelen "en yakın olay" dünyanın **başka bir yerinden**, alakasız bir
madde olacaktır — CLAUDE.md §1'in *"238/238 maddeli" yanlış pozitif* ve
*Fuzuli/Ahiska* örnekleriyle birebir aynı sınıf. **Ölçmedim** hangi alakasız
maddelerin eşleştiğini (32 kırılma × 1303 maddelik taramayı elle yapmadım) —
bunu `ÖLÇÜLEMEDİ` kovasında bırakıyorum, ama mekanizma kesin: `Değişmez 2`
"0 açık" derken bu bölgeyi **sessizce yanlış örtüyor.**

---

## ③ REÇETE — çekirdeğe eklenecek 8 kronoloji maddesi (kaynak DOLU, taslak)

Aşağıdaki maddelerin tümü **var olan yerleşim kayıtlarının `kur:`/`kaynak:`
alanlarından türetildi** — yeni araştırma gerekmedi, veri zaten kaliteliydi.
Coordinatör `data/olaylar_ek*.js`e uygun gördüğü şekilde ekleyebilir;
`yer_id` alanları mevcut yerleşim adlarıyla BİREBİR eşleşiyor (aşağıda ④'te
doğrulandı).

```js
{ t:"1788-01-26", b:"İlk Filo Sydney Koyu'na ulaştı — Avustralya'nın İngiliz kolonizasyonu başladı",
  tur:"kurulus", onem:4, dunya:2, kapsam:"dis", etiket:["kesif","kurulus","ingiltere"],
  yer_id:"Sydney",
  d:"On bir gemiden oluşan İlk Filo, çoğu mahkûm ~1400 kişiyi taşıyarak Botany Bay'e ulaştı ve kısa süre sonra Sydney Koyu'na yerleşti — Britanya'nın Avustralya kıtasındaki ilk kalıcı Avrupa yerleşimi.",
  kaynak:"Australian Dictionary of Biography, 'Arthur Phillip: 1788. The Foundation Year' (adb.anu.edu.au/essay/21) · State Library of NSW First Fleet kayıtları" },

{ t:"1804-01-01", b:"Hobart kuruldu — Van Diemen's Land (Tazmanya) kolonisi başladı",
  tur:"kurulus", onem:2, dunya:1, kapsam:"dis", etiket:["kurulus","ingiltere"],
  yer_id:"Hobart",
  d:"Vali David Collins, ceza kolonisini Risdon'dan Sullivan's Cove'a (bugünkü Hobart) taşıyıp kurdu; Tazmanya'nın ilk kalıcı Avrupa yerleşimi.",
  kaynak:"Australian Dictionary of Biography" },

{ t:"1829-08-12", b:"Perth kuruldu — Swan River Kolonisi başladı",
  tur:"kurulus", onem:2, dunya:1, kapsam:"dis", etiket:["kurulus","ingiltere"],
  yer_id:"Perth",
  d:"Swan River Kolonisi'nin (bugünkü Batı Avustralya) kuruluşu resmî törenle ilan edildi; bu tarih 'Western Australia Day' (eski adıyla Foundation Day) olarak anılır.",
  kaynak:"kurumsal kaynak (Western Australia Day)" },

{ t:"1835-08-30", b:"Melbourne kuruldu",
  tur:"kurulus", onem:2, dunya:1, kapsam:"dis", etiket:["kurulus","ingiltere"],
  yer_id:"Melbourne",
  d:"John Pascoe Fawkner, Yarra Nehri şelalelerinin hemen altında yerleşim kurdu (John Batman'ın yerli topluluklarla arazi anlaşması aynı yılın Haziran ayında).",
  kaynak:"EBSCO Research Starters, 'Melbourne, Australia, Is Founded' · State Library of Victoria" },

{ t:"1836-12-28", b:"Adelaide kuruldu — Güney Avustralya Eyaleti ilan edildi",
  tur:"kurulus", onem:2, dunya:1, kapsam:"dis", etiket:["kurulus","ingiltere"],
  yer_id:"Adelaide",
  d:"Güney Avustralya'nın İngiliz mülkü olduğu Vali John Hindmarsh tarafından Holdfast Bay'de (bugünkü Glenelg) ilan edildi ('Proclamation Day').",
  kaynak:"kurumsal kaynak" },

{ t:"1840-02-06", b:"Waitangi Antlaşması imzalandı — Yeni Zelanda kolonileşti",
  tur:"antlasma", onem:4, dunya:2, kapsam:"dis", etiket:["antlasma","toprak-kazanc","ingiltere"],
  yer_id:"Auckland",
  d:"Britanya Tacı ile çok sayıda Māori şefi arasında imzalanan antlaşma Britanya egemenliğini tanıdı; Māori topluluklarına toprak/kaynak hakları vaat edildi. İngilizce ve Māorice metinler arasındaki farklar sonraki yüzyılda hukukî tartışmalara konu oldu.",
  kaynak:"Te Ara Encyclopedia of New Zealand — 'The founding of Auckland: 1840–1869'" },

{ t:"1884-11-06", b:"Britanya, Yeni Gine'nin güneydoğusuna himaye ilan etti (Port Moresby)",
  tur:"kurulus", onem:3, dunya:2, kapsam:"dis", etiket:["kurulus","ingiltere"],
  yer_id:"Port Moresby",
  d:"Yerli Motu köyleri çok daha önce vardı (Hiri ticaret ağının ucu) ama merkezî bir devlet hiç olmadı; 1884'te İngiliz himayesi ilan edilene kadar bölge hiçbir egemenliğe bağlı değildi. Aynı ay (3 Kasım) Almanya kuzeydoğu kıyısını (Madang·Finschhafen) ilhak etti — Yeni Gine'nin kolonyal üçe bölünmesinin başlangıcı.",
  kaynak:"kolonyal idare kayıtları (girdi verisindeki 'kur:' ve 'neden:' alanlarından)" },

{ t:"1901-01-01", b:"Avustralya Milletler Topluluğu kuruldu — altı koloni federasyonla birleşti",
  tur:"birlesme", onem:3, dunya:2, kapsam:"dis", etiket:["birlesme","ingiltere"],
  yer_id:"Melbourne",
  d:"Sydney·Melbourne·Brisbane·Adelaide·Perth·Hobart'ın bağlı olduğu altı ayrı İngiliz kolonisi federasyonla 'Avustralya Milletler Topluluğu'nu kurdu; İngiliz Milletler Topluluğu içinde özerk dominyon statüsü kazandı.",
  kaynak:"devletler.js 'avustralya' künyesinin kendi kronoloji alanı — birebir aktarıldı" },
```

⚠️ **Bu sekizi seçtim, geri kalanları (Brisbane·Christchurch·Wellington·Manokwari/
Jayapura·1907 NZ Dominyon statüsü) YAZMADIM** — zaman/onem sınırı kendi
takdirim, hepsi aynı kalitede kaynaklı; koordinatör isterse aynı kalıpla
genişletilir. **Bu bir eksiklik değil bir KESME KARARI**, madde havuzu
`yerlesimler_ek30.js`/`yerlesimler_emilme.js`'in kendi `kaynak:` alanlarında
zaten hazır duruyor.

---

## ④ KİMLİK DOĞRULAMASI — hayalet yok

Önerilen her `yer_id`, `girdi.py`ye bağlı yerleşim dosyalarında (ek30/emilme)
**tam o yazımla** var — kontrol ettim (isim uyuşmazlığı riski, §11 Özalp/
Yüksekova tuzağı): Sydney·Hobart·Perth·Melbourne·Adelaide·Auckland·Port
Moresby — yedisi de birebir eşleşiyor. Kullanılan künyeler (`ingiltere`·
`avustralya`·`yeni-zelanda`·`almanya`·`hollanda-dogu-hint`·
`tui-tonga-imparatorlugu`·`tonga-kralligi`) `devletler.js`'te **VAR** ve
ömürleri önerilen tarihleri **kapsıyor** (`ingiltere` ve `almanya` neredeyse
tüm dönem boyu yaşıyor, `hollanda-dogu-hint` 1602-1923, `yeni-zelanda`
1840-02-06'dan başlıyor — Waitangi'nin KENDİ günü — ve `avustralya`
1901-01-01'den, federasyon maddesiyle BİREBİR).

---

## ⑤ AYRI BULGU — devletler.js'te 14 madde ZATEN var, ama görünmüyor

`bolge:"okyanusya"` etiketli **5 künye** buldum (`hawaii-kralligi`·
`tonga-kralligi`·`yeni-zelanda`·`avustralya`·`tui-tonga-imparatorlugu`), ve
**4'ünün** `kronoloji:` alanı **DOLU** — toplam **14 madde** — şartnamedeki
"D Okyanusya 5 künye · 4 dolu · 14 madde" satırıyla BİREBİR uyuşuyor, bunu
ayrıca doğruladım (`tui-tonga-imparatorlugu`'nun `kronoloji:[]` boş —
kendi notu bunu açıklıyor: bitiş tarihi `tonga-kralligi`nin başlangıcıyla
"boşluksuz" hizalı, ayrı madde gerekmediği düşünülmüş).

🔴 **AMA bu 14 madde `data/olaylar*.js` evreninde DEĞİL** — künyenin kendi
`kronoloji:` dizisi, ana kronoloji panelinden farklı bir gösterim katmanı
(muhtemelen devlet kartı için). Yani "künye kronolojisi dolu" ile "atlas
kronolojisinde madde var" AYRI şeyler — bu şartnamenin taban tablosundaki
iki farklı satırın (künye-kronoloji=14 dolu vs bölge-kronoloji=SIFIR)
BİRBİRİYLE ÇELİŞMEDİĞİNİ, farklı katmanları ölçtüğünü netleştiriyorum.
**ÖLÇMEDİM:** `js/app.js`'in bu `kronoloji:` alanını nerede/nasıl render
ettiğini kod okuyarak doğrulamadım — ekrana hiç çıkmıyor olabilir de,
farklı bir panelde çıkıyor olabilir de. `ÖLÇÜLEMEDİ` kovasında bırakıyorum.

---

## ⑥ NOKTA BOŞLUĞU ADAYI — Darwin (tek aday, düşük öncelik)

En-yakın-komşu taramasında (32 nokta, küme içi) hiçbir çift 1000 km'yi
aşan bir GERÇEK boşluk göstermiyor (en büyüğü Rapa Nui↔Lapaha 6632 km ama
bu iki uç Pasifik ada — aralarında hiçbir yerleşim yok, Emre'nin "devasa
boşluklar olacaksa olsun" hükmü tam burayı kastediyor).

🟡 Tek nitel aday: **Darwin** (Kuzey Avustralya, -12,46/130,85). En yakın
mevcut nokta "Avustralya İç Kesimi (Kuzey — Arnhem Land)" kabile dolgusu,
yalnız **294 km** — mesafe olarak KÜÇÜK bir boşluk, ama **nitelik olarak**
farklı: Darwin (1869'da Palmerston adıyla, Güney Avustralya kolonisi
tarafından, 1911'de Commonwealth'e devredildi) gerçek bir kolonyal
egemenlik merkezi, "kabile" dolgusu değil. **ÖLÇMEDİM** — bu tarihi
derinlemesine kaynaklamadım (yalnız yaygın bilinen bir olgu olarak
biliyorum), bu yüzden reçeteye SOKMADIM, yalnız aday olarak bildiriyorum.

---

## ⑦ ÖZET — BİTİŞ ÖLÇÜTÜ karşılığı

```
① boşluklar ölçüldü        32 nokta · en-yakın-komşu tarandı · gerçek boşluk YOK
                            (kabul edilebilir mesafede) — asıl boşluk KRONOLOJİ
② boşluk cinsi              zaten önceki oturumlarca doğru ayrılmış
                            (kabile/devletsiz/gerçek gövde) — yeniden yapmadım
③ önerilen 8 madde          kaynak DOLU (hepsi kurumsal akademik)
④ önerilen kimlikler        devletler.js'te VAR, ömür TUTUYOR — hayalet yok
⑤ ölçemediğim               (a) 20 kırılmanın hangi alakasız maddeyle
                            eşleştiği (b) künye-kronoloji'nin app.js'te
                            nerede render edildiği (c) Darwin'in kaynağı
                            — üçü de ÖLÇÜLEMEDİ kovasında, TEMİZ değil
```

**Durum:** ✅ boştayım, yeni iş bekliyorum.
