# BULGU — UYGULAMA-3 (parti-emrelic-0034'ün 32 kalemi)

Oturum: HAZIR KITA SONNET 94 / UYGULAMA-3 (önceki adım: TASNİF-F) · Koordinatör: ORHANGAZİ
Girdi: `denetim/BULGU-TASNIF-F.md`'deki 26 kümeye-git + 1 uygulanmamış + 5 yeni iş = 32 kalem.
Çıktı: `data/yer_yama_uyg3.js` (window.YER_YAMA_UYG3, 2 kayıt) · `denetim/HUKUM-UYGULAMA-3.json` (3 kalem).
🔒 Koşu 2 koşuyor bilgisiyle çalıştım — `arac/*.py`ye DOKUNMADIM, yalnız `data/*.js` yazdım.

## ÖNCE İSTENEN ÖLÇÜM — 26 "kümeye giden"in kaçı GERÇEKTEN başka oturumda?

```
BAŞKA OTURUM GERÇEKTEN ÜSTÜNDE (dokunmadım)     1   (H-0016 → FERHAT PAŞA 1590, TESLİM ETTİ)
BEN UYGULADIM (kök bulundu, yama yazıldı)        1   (H-0002)
BENİM UYGULAYABİLECEĞİM AMA YENİ NOKTA — DEVİR   2   (H-0001 · H-0005'in Abadan yarısı)
ARAŞTIRMA GENİŞLİĞİ GEREKTİRİYOR, TEK NOKTA DEĞİL 1  (H-0036)
GERÇEKTEN SAHİPSİZ, İÇERİK — DOSYAM DEĞİL        20  (aşağıda ①)
TASARIM KARARI GEREKTİRİYOR, VERİ YAZILAMAZ      3   (H-0011/17/23 — gurcistan)
BAŞKA OTURUMUN DOSYASINA MUHTAÇ                  2   (H-0022/40 — js/app.js, ARAYÜZ'ün)
MOTOR KİLİTLİ (Koşu 2) + DOSYAM DEĞİL            1   (H-0028)
```

**Cevap: senin "kümeler eridi" ölçümün DOĞRU ama benim 26'mın çoğu (20/26, içerik) o erimeye
DAHİL DEĞİLDİ** — icerik-talebi kümesi 38→3 düşerken benim 20 maddemin HİÇBİRİ ekokuma.js/
merak.js'e girmemiş (grep ile yeniden doğrulandı). Yani erimiş olan 35 kalem BAŞKA
paketlerdendi, benimkiler hâlâ duruyor. Aşağıda ① bunun ayrıntısı ve bir SORU var.

---

## ① 🔴 UYGULAYAMADIM — İÇERİK 20 madde, dosya sahipliği çelişkisi (AKSAKLIK, cevap bekliyorum)

H-0013·0014·0018·0021·0024·0026·0027·0029·0030·0031·0032·0033·0034·0035·0038·0039·0041·0042·0043·0044
(Sokollu, Akçe Krizi, Kanije, III. Mehmed, I. Ahmed, I. Mustafa×2, II. Osman, IV. Murad×2,
Hezarfen/Lagari/Evliya, Deli İbrahim, Kemankeş, Kâtip Çelebi, Merzifonlu, Hafız Osman,
Sultanahmet Camii, Kuyucu Murad, "barışın önemi") — **hepsi hâlâ ekokuma.js/merak.js'te YOK**
(grep tekrar koşuldu, sıfır eşleşme).

**Neden yazmadım:** doğru hedef dosyalar (`data/ekokuma.js`, `data/merak.js`) benim
`DOSYAN` listemde YOK — yalnız `data/yer_yama_uyg3.js` verildi, ki o bir COĞRAFİ yama
şeması (`ad`+`d:`/`s:` patch), ek-okuma kartı taşıyamaz (yanlış şemaya yazmak `§7`'nin
"YENİ YAZILAN DENETİM ... zorlanamaz" ailesinin veri tarafı olurdu). Bu dosyalar KRONOLOJİ
İÇERİK oturumunun sahipliğinde ve şu an "aktif" bilgisiyle çalışıyordum (kendi TASNİF-F
raporumdan) — ama icerik-talebi kümesi 38→3'e düşerken bu 20 kalemin hiçbiri işlenmemiş,
yani ya o oturum bunları hiç görmedi ya da öncelik sırası başka yerdeydi.

**SORU (bekletmeden soruyorum, §7.1⑥):** ekokuma.js/merak.js'e ben mi yazayım (dosya
devri gerekir, ad alanı zaten `EKOKUMA`/`MERAK` sabit) yoksa KRONOLOJİ İÇERİK'e mi
yönlendireyim? İkisi de olmadan bu 20 kalem "sahipsiz" kalmaya devam eder.

---

## ② 🟢 UYGULANDI — H-0002 (Halepçe enklav görünümü), kök bulundu

`data/yer_yama_uyg3.js` yazıldı (2 kayıt: Şehrizor + Halepçe). Özet: Şehrizor bölgesi
Kanûnî'nin 1535 Irakeyn Seferi'yle Osmanlı oldu (TDV `sehrizor`, gövde okundu), 1550'de
Bige Bey'in ölümüyle Safevî'ye döndü, 1554'te (veride zaten kayıtlı) yeniden alındı.
Veride bu İLK dönem (1535-1550) hiç yoktu; Halepçe'nin kendi 1534-12-04 kaydı bu ilk
fethi zaten taşıyordu ama sancak merkezi Şehrizor'un kaydı taşımıyordu — 20 yıllık
uyumsuzluk enklav görüntüsünü doğuruyordu. İkisine de aynı üç dönemli desen (1535-1550
Osmanlı · 1550-1554 Safevî · 1554-1623 Osmanlı) yazıldı. Ayrıntı: `data/yer_yama_uyg3.js`
kod içi yorumu, kaynak satır satır orada.

🔴 **Yan etki — bilgi amaçlı, hüküm dosyasına yazıldı ama dokunmadım:** bu, PAKET 0033-0034
oturumunun `zaten-dogru` diye kapattığı H-0007/H-0008'i teknik olarak yeniden açıyor —
görüntü çelişkisi konusunda o hüküm doğruydu, yalnız altındaki verinin eksikliğini hiç
ölçmemişti. `denetim/HUKUM-UYGULAMA-3.json`da not düşüldü, o iki maddenin kendi kapanmış
durumuna dokunmadım (başkasının hükmünü ezmek yerine ayrı not).

⚠️ **Değişmez 2 riski:** yeni `1550-01-01` kırılma günü için külliyatta özel bir madde
YOK — TDV yalnız yıl veriyor (ay/gün belirsiz). Bu KOORDİNATÖRE bildiriliyor; kronoloji
maddesi yazımı benim dosyam değil.

---

## ③ 🟢 UYGULANMIŞ (başka oturum) — H-0016, mükerrer atama YAPMA

FERHAT PAŞA 1590 oturumu 28 Ağustos'ta teslim etti (tahta M-1436, M-1443):
`data/yer_yama_ferhatpasa.js` → 16 yer araştırıldı, 4 kesin (Culfa, Urmiye, Sohum, Zencan)
+ Kutaisi yazıldı, 7'si "bulunamadı" diye dürüstçe kapandı. H-0016'nın istediği "TAM sınır
taraması, geniş oturum" karşılandı — kalıntı (Gence/Karabağ, Van'ın batı sancakları) küçük
ve ayrı bir kalem, ama "hiç taranmadı" durumu artık geçerli değil. **Dokunmadım, dosyası
onun.**

---

## ④ 🟡 YENİ NOKTA — DEVREDİLİYOR, yer_yama'ya yazılmadı (sınav ①: kayıt yok)

| madde | yer | `_yer_ara.py` | karar |
|---|---|---|---|
| H-0001 | Ordubat | **0 kayıt** (55 dosya tarandı) | YENİ NOKTA — koordinatöre |
| H-0005 | Abadan | **0 kayıt** (55 dosya tarandı) | YENİ NOKTA — koordinatöre |

H-0005'in öteki yarısı (Havîza/Hüveyze) zaten VAR ve zincir doğru (hiçbir zaman `d:`
taşımıyor, TDV ile tutarlı) — bu kısım için patch GEREKMİYOR, kapatılabilir. **H-0019
aynı coğrafyayı (Ahvaz/Dizfûl/Şüşter/Havîza, 1602-01-01 görseli) soruyor — H-0005 ile
birleştirildi, ayrı iş değil.**

---

## ⑤ 🟡 ARAŞTIRMA GENİŞLİĞİ — H-0036, tek nokta değil, kapsam kararı gerekiyor

Kırım Hanlığı Bozkırı / Don Kazak Ordası (1637-06-18 görseli). Azak kontrol edildi —
`d:`/`s:` zinciri görselle birebir tutarlı (`don-kazak` 1637-06-18→1642-02-26). Belirli,
adı bilinen eksik bir yerleşim BULAMADIM (H-0036'nın kendi metni de "gerekirse
araştırılsın" diyor, kesin bir yer adı vermiyor). Bu, tek satırlık bir yama değil,
0033-H-0006/07/08'in istediği türden bir **"bozkır nokta partisi"** araştırma oturumu
gerektiriyor — devrediyorum, yer_yama'ya yazmadım.

---

## ⑥ 🔴 TASARIM KARARI GEREKİYOR — uygulanamaz, veri yazılamaz

**H-0011 · H-0017 · H-0023 (gurcistan tek kimlik).** İki seçenek somutlaştırıldı, Emre'nin
kararı gerekiyor:
```
A) Kartli/Kaheti/İmereti/Samtskhe alt-kimliklere BÖLÜNSÜN — devletler.js'e 3-4 yeni kimlik,
   yerlesimler'deki gurcistan noktaları alt-kimliklere dağıtılır. Büyük iş, doğru çözüm.
B) Tek kimlik KALSIN, kuzey Kafkas koridoruna 1-2 nokta eklenip "iki parça" görünümü
   düzeltilsin. Küçük iş, yarım çözüm (Tiflis/Gence sonrası aidiyet sorusu H-0023 açık kalır).
```
Veri yazmadan önce bu kararı bekliyorum.

**H-0022 · H-0040 (+ H-0026'nın standart kısmı) — ek-okuma taksonomisi.** Emre kendi
metninde standardı ZATEN dikte etmiş (9 kategori); karar beklemiyor, **kodlama** bekliyor.
Ölçtüm: `js/app.js` `EKOKUMA_TUR` sözlüğünde yalnız 4 tür var (sebep-sonuc, magazin, merak,
antlasma); **5 tür hiç yok** (kimdir, bilimsel-teknik, dış-ülke-yankıları, şok-haberler,
tartışma). `js/app.js` ARAYÜZ oturumunun dosyası, ben dokunamam. → ARAYÜZ'e devredilmeli
(önce tür eklensin, SONRA İçerik kart yazsın — sıra önemli, tanınmayan tür buton üretmiyor).

---

## ⑦ 🟠 DEĞİŞMEDİ — H-0028, motor kilitli + dosyam değil

Libya çöl boyaması. ÇÖL BOYAMA oturumunun çare/öngörüsü hâlâ `arac/uret_petek.py`ye
işlenmemiş (tahta M-1340/M-1341'den beri değişiklik yok). Koşu 2 sürerken zaten
`arac/*.py` yazılamaz; koşu bitse bile bu benim dosyam değil. Durum SABİT: hâlâ 🟠.

---

## SAYIYLA — 32 kalem

```
🟢 uygulandı / kapandı        3   (H-0002 · H-0016 · Havîza-yarısı/H-0005)
🟡 devredildi (yeni nokta)    2   (H-0001 · Abadan/H-0005)
🟡 devredildi (araştırma)     1   (H-0036)
🔴 karar bekliyor              3   (H-0011 · H-0017 · H-0023 — bir karar, 3 kayıt)
🔴 başka dosyaya muhtaç        2   (H-0022 · H-0040)
🔴 uygulanamadı, SORU açık    20   (içerik — yukarı ①)
🟠 değişmedi                   1   (H-0028)
```

Bekçim açık, cevap/sonraki iş bekliyorum.

---

## PARTİ-EMRELİC-0038 — H-0002 · H-0006 (29 Ağustos, M-1532'de alındı)

### H-0002 — Necef'in batısı/güneybatısı "gereksiz fazla boyama"

Görsel (1642-02-25, Necef çevresi): Necef'in Osmanlı (koyu kırmızı) gövdesi batıya/
güneybatıya, boş çöle doğru geniş bir alan kaplıyor.

**ÖLÇÜM:** Necef (31,996K 44,315D) çevresindeki 28-33K/39-45,5D kutusunu taradım
(`girdi.yukle()`, 2609 nokta tabanı) — kutuda yalnız İKİ kayıt var: Kerbelâ (kendi
şehri, Necef'le aynı desen) ve **Nefud Çölü** (28,300K 41,000D, `tur:bolge`,
1281-1744 arası **hiçbir `s:` yok** — yani KASITLI BOŞLUK, çöl dolgu noktası, tıpkı
Sahra/Rub'ul Hâlî'deki gibi). Necef'ten Nefud Çölü'ne mesafe **~520 km**.

⇒ **KÖK SEBEP: EMİLME** (ORHANGAZİ'nin üç ihtimalinden biri) — Necef'in en yakın
"devletsiz" dolgu noktası 520 km ötede; aradaki bütün çöl (Suriye Çölü'nün Irak
tarafı) daha yakın bir dolgu noktası olmadığı için Necef'in peteğine emiliyor ve
Osmanlı boyanıyor. **Bu, `H-0028`'in (parti-emrelic-0034, Libya çöl boyaması)
BİREBİR AYNI SINIFI** — ÇÖL BOYAMA oturumunun zaten teşhis ettiği "dolgu kapısı hep
en yakın sahipliye puan veriyor" mekanizması, farklı bir çölde.

⇒ **ÇARE İKİ YOLDAN BİRİ:** (a) Necef-Nefud arasına 1-2 yeni "devletsiz" dolgu
noktası eklensin (YENİ NOKTA, benim yer_yama'ma yazamam, koordinatöre devrediyorum)
(b) ÇÖL BOYAMA'nın motor çaresi (dolgu kapısına TABİ kademesi) uygulanınca bu bölge
de KENDİLİĞİNDEN düzelir — yani `H-0028` çözülürse `H-0002` de büyük ölçüde çözülür.
**Öncelik önerim: (b), çünkü tek bir motor düzeltmesi hem Libya hem burayı kapatır.**

### H-0006 — "koridor ve enklavlar Osmanlı mı, en son durum ne oldu"

**ÖLÇÜM (`git log`, `_yer_ara.py`, dosya taraması):** Bu soru zaten iki ayrı oturumda
araştırılmıştı:
```
DEĞİŞMEZ 7 ENKLAV   → data/yer_yama_iran.js (Hoy, Miyandoab — TDV'den kesin)
FERHAT PAŞA 1590    → data/yer_yama_ferhatpasa.js (Culfa, Urmiye, Sohum, Zencan,
                       Kutaisi — 4 kesin + 1; 7 yer 'bulunamadı' diye dürüstçe kapandı)
```
🟠 **AMA İKİSİ DE HENÜZ YAYINDA DEĞİL.** `girdi.GIRDI_DOSYALARI`yı kontrol ettim —
`yer_yama_*.js` dosyalarının HİÇBİRİ bu listede yok, yani motor onları OKUMUYOR.
Bunlar `arac/yama_uygula.js` ile `yerlesimler*.js`e işlenip bir KOŞU'dan geçmeden
haritada görünmezler. Koordinatörün kendi mesajları (M-1512/M-1523) bu birleştirmeyi
ve koşuyu ZATEN sıraya koymuş durumda ("32+ kaydı işleyeceğim, sonra koşu").

⇒ **HÜKÜM: "ölçüldü ama uygulanmadı" — 🟠, ama İHMAL DEĞİL, ZATEN KUYRUKTA.**
Görseldeki üç ayrı "SAFEVİ İRAN" etiketi (Kars/Iğdır yakını · Nahçıvan/Culfa yakını ·
Tebriz/Urmiye yakını) — ortadaki ve sağdaki kısmen bu bekleyen yamalarla düzelecek
(Culfa, Urmiye Osmanlı olacak); Kars/Iğdır yakınındaki etiket ayrı, bu paketin
kapsamı dışında, ayrıca bakılmalı.

**ÖNERİ:** koşu bitip yayınlandıktan SONRA bu madde yeniden görsellenip teyit
edilsin — bugün "uygulanmadı" demek yarın da öyle kalacağı anlamına gelmiyor.

---

## GECE PARTİSİ — KRONOLOJİ kovası, son 9 madde (30 Ağustos, `oturumlar/GECE-KRONOLOJI.md`)

Çıktı: `data/olaylar_ek22.js` → `window.OLAYLAR_EK22` (1 kayıt, commit f0b546f).

### YAZILDI — 1 madde

**0036/H-0012** (Şammar/Hâil hikâyesi kronolojide yok) — `olaylar_ek22.js`e yazıldı:
"Şammar (Reşîdî) Emirliği'nin kuruluşu" (1835-01-01, kaynak: TDV `residiler`,
slug canlı doğrulandı). 🔴 **YAN BULGU:** `devletler.js`'in künyesi f:1835 diyor
(10 Ağustos'ta 1836'dan düzeltilmiş) ama Hâil'in KENDİ yerleşim kaydı hâlâ
`s:1836-01-01→...sammar` — iki dosya 1 yıl uyuşmuyor. Benim yeni maddem 1835'i
kullandığı için yerleşim düzeltilmeden Değişmez 2 ~365 gün açık kalabilir.
**Yerlesimler dosyası benim değil — koordinatöre bildiriliyor, Hâil'in `s:`
başlangıcı 1835-01-01'e çekilmeli.**

Bu madde ayrıca **0035/H-0079**'u da kısmen cevaplıyor (aşağıda).

### ÖLÇÜLDÜ, YAZMAYA GEREK YOK — 4 madde (zaten doğru modellenmiş)

**0035/H-0062** ("bu maddenin Osmanlı açısından önemi ne") — görsel açıldı: madde
"Demak Sultanlığı'nın Majapahit'i yıkması" (1527, Cava). Ölçtüm: `olaylar_ek16.js`
kaydında **`kapsam_genis:true` ZATEN VAR** — proje bunun için tam olarak bu alanı
tasarlamış (dünya-bağlamı maddesi, Ottoman toprak değişimi değil). Mekanizma
doğru çalışıyor; UI'da bu bayrağın kullanıcıya nasıl görünür kılınacağı ayrı bir
arayüz sorusu olabilir ama VERİ eksiği yok.

**0035/H-0065** (İbrim/Nübye maddesi harita değişikliği doğurmuyor) — ölçtüm:
`olaylar_ek5.js:460` "İbrim ve Nübye sınırının güneye taşınması" (1555) zaten
Mısır beylerbeyiliğinin İÇİNDEKİ bir sınır kaydırması; başlangıç ve bitişte
bölge zaten aynı renkte (Osmanlı) olduğu için görsel değişiklik BEKLENMİYOR —
bu bir kusur değil, olayın doğasının doğru yansıması.

**0035/H-0079** (Hail Vehhâbî/Suûdî hareketine dahil mi, Nefud'ta niye boyalı) —
İKİ soru, ikisi de cevaplandı: ① Hâil TARİHEN Vehhâbî/Suûdî hareketinin
**rakibiydi** (Şammar/Reşîdî emirliği, yeni yazdığım madde bunu anlatıyor),
1921'e kadar Suûdî DEĞİLDİ. ② Nefud çölünün "gereksiz boyanması" zaten bilinen
bir emilme deseni — `denetim/BULGU-VERI-SAHIPLIK.md` bunu H-0001/H-0011/H-0064/
H-0079 ailesi olarak işaretlemiş, `data/yer_yama_emilme.js`'de nokta önerisi
ZATEN VAR. Benim işim değil, VERİ SAHİPLİK'in kapsamında, mükerrer değil.

**0037/H-0001** (Besarabya'nın güneyi haritada kıpırtı vermiyor) — ölçtüm:
`olaylar_ek5.js:346` "Paris Antlaşması" maddesi zaten "Besarabya'nın güneyi
Boğdan'a verildi" diyor VE coğrafi tarafı `yer_yama_uyg1.js`e (İsmail kaydı,
1856-03-30/1878-07-13 sınırlı `v:` Boğdan Voyvodalığı) başka bir oturumca ZATEN
yazılmış (GECE-KRONOLOJI.md notu). Kronoloji tarafında eksik yok.

### ÖLÇÜLDÜ, TEK-ALAN ÖNERİ — koordinatöre (benim dosyam değil)

**0037/H-0004** ("bu olayın haritadaki yerini işaretlemeli") — görsel açıldı:
madde "Cebel-i Lübnan'da Dürzî-Mârûnî iç savaşı ve Şam olayları" (`olaylar_ek5.js:350`).
Ölçtüm: **`yer_id` ALANI YOK** (yalnız `yer:"Cebel-i Lübnan, Şam"` var, metin —
harita işaretleyemiyor). Şam (`_yer_ara.py`: 33,513K 36,292D) yerleşim olarak
VAR ve olaylar Temmuz'da Şam'a sıçradığı için oraya bağlanabilir.
**ÖNERİ (uygulamadım, `olaylar_ek5.js` benim dosyam değil):** `yer_id:"Şam"`
eklensin — tek satır, en ucuz kazanç.

### ARAŞTIRILDI, SAVAŞLAR.JS GEREKTİRİYOR — benim dosyam değil, bulgularımla devrediyorum

**0035/H-0095** (Alemdar Mustafa Paşa'nın İstanbul'a yürüyüşü, ok/güzergah) —
TDV `alemdar-mustafa-pasa` okundu: yürüyüş **Edirne**'den başladı (mütareke
sırasında ordu orada), İstanbul'a **19 Temmuz 1808**'de ulaştı (mevcut kronoloji
maddesiyle — `olaylar_ek7.js:136` — birebir uyumlu). TDV kesin çıkış GÜNÜNÜ
vermiyor. Rota basit (Edirne→İstanbul, ~230 km), `tur:"sefer"` altyapısı hazır.
**Yazmadım — `data/savaslar.js` benim dosyam değil** (GECE-KRONOLOJI.md "yaz,
yalnız kendi dosyana" diyor). Koordinatöre/ilgili oturuma: `f` için TDV günü
yok, açıkça "tahminî" işaretlenerek yazılmalı.

**0037/H-0006** (Abdülaziz'in Avrupa seyahati, tam güzergah) — TDV `abdulaziz`
yalnız ANA HATLARI veriyor: 21 Haziran 1867 İstanbul'dan çıkış, Fransa+İngiltere
esas durak, "bu arada" Belçika/Prusya/Avusturya, 7 Ağustos 1867 İstanbul'a
dönüş — **liman/şehir sırası ve ara tarihler TDV'de YOK.**
🔴 Popüler web kaynakları (fikriyat, tarihistan, yeniakit vb.) ayrıntılı bir
rota veriyor (Napoli/Messina→Toulon→Paris 10 gün→Dover/Calais→Brüksel 24 Tem→
Koblenz 25 Tem→Viyana 28 Tem→dönüşte Budapeşte→Varna→İstanbul) AMA bunlar
**`CLAUDE.md §4`'ün kırmızı çizgisinin dışında** ("tarih sayfası" tipi popüler
site, akademik değil) — **kaynak olarak KULLANMADIM.**
**SONUÇ: `kaynak:"bulunamadı"` — TDV bu taneciği (günlük rota) kapsamıyor,
akademik/birincil bir kaynak (ör. konuyla ilgili basılı bir çalışma) gerekiyor.**
Emre isterse bu popüler rotayı "doğrulanmamış taslak" olarak kabul edip
kaynağını AÇIKÇA öyle işaretleyerek yazdırabilir — karar koordinatörün/Emre'nin.

### ARAŞTIRILDI, EMRE'NİN VARSAYIMI ÇÜRÜYOR OLABİLİR

**0038/H-0007** (Kasr-ı Şirin İran savaşında Osmanlı'ya geçmiş olmalı) — ölçtüm:
kasabanın kendi yerleşim kaydı (`_yer_ara.py`) **hiçbir zaman 1639'da Osmanlı
olmuyor** — safevi zinciri 1503-1736 kesintisiz sürüyor, yalnız 1723-1730
arası kısa bir Osmanlı işgali var (muhtemelen Nadir Şah kaosu döneminin
gerçek bir fethi, ayrı olay). TDV `kasrisirin-antlasmasi` (doğru slug —
`kasr-i-sirin-antlasmasi` ÖLÜ, ilk denemem yanıldı) gövdesi antlaşmanın
Bağdat/Basra/Şehrizor'u Osmanlı'da, Revan'ı Safevî'de bıraktığını söylüyor ama
**Kasr-ı Şirin KASABASININ kendisinin hangi tarafta kaldığını belirtmiyor.**
Modern coğrafya (bugünkü Kirmanşah/İran sınırları içinde) ve antlaşmanın
"görüşme yeri" oluşu, kasabanın SAFEVÎ tarafında kaldığını düşündürüyor —
yani **mevcut veri muhtemelen ZATEN DOĞRU**, Emre'nin varsayımının aksine.
**PATCH YAZMADIM** — İran/Türk kaynaklarından ek doğrulama olmadan tarafı
değiştirmek yeni bir hata üretebilir. Emre'nin izni ("en yakın merkezin el
değiştirmesine bağlanabilir, eğer teyit edersen") burada TEYİT EDEMEDİĞİM için
kullanılmadı.

### SAYIYLA

```
9 madde  →  🟢 1 yazıldı (+1 yan bulgu bildirimi) · 4 zaten doğru ·
            1 tek-alan öneri · 2 savaşlar.js'e devredildi (araştırmalı) ·
            1 Emre'nin varsayımı muhtemelen yanlış (patch YAZILMADI)
```

---

## GECE PARTİSİ — DEVİR: VERİ SAHİPLİK-2'nin VERİ 3/3 kovası (M-1718)

Şartname: `oturumlar/GECE-VERI.md`, son 10 madde. Çıktı: `data/yer_yama_gece_v3.js`
→ `window.YER_YAMA_GECE_V3` (2 kayıt). Ayrıca devraldığım açık borç: `data/yer_yama_emilme2.js`
Ahtapolu/Rezve/İğneada kayıtları p19'un lehine ÇIKARILDI (dosya artık boş, gerekçe
dosya içi yorumda).

⚠️ **2 madde VERİ kovasına AİT DEĞİL** — `kasa-0010/H-0002` ve `kasa-0012/H-0001`
ClaudEmre'nin mesaj kutusu/UI tasarımıyla ilgili (renk kodu = "sıra kimde",
mesaj saat/tarihi), atlas coğrafi verisiyle alakasız. Regex çıkarımı yanılmış —
koordinatöre AYRICA bildiriliyor, yer_yama formatına zorlanmadı.

### YAZILDI — 1 madde

**0037/H-0008** (Rusya Eflak/Boğdan işgali taralı gösterilmeli) — Bükreş ve
Yaş'a (iki başkent, en görünür noktalar) `isg:` eklendi: 1806-1812 (bitiş
1812-05-28, sınır kalelerindeki mevcut desenle hizalı) ve 1828-1834 (TDV
`eflak`/`bogdan`, ikisi de gövde okunarak). 1848-49 işgali KAPSAM DIŞI
bırakıldı — TDV kesin tarih vermiyor, tahmin üretmedim.
🔴 **DAHA GENİŞ, AÇIK KALAN BORÇ:** VERİ SAHİPLİK'in `denetim/kume/olculdu.md`
(H-0097/H-0100) ölçtüğü dokuz Tuna kalesi (Rusçuk·Silistre·Bender·İsmail·Vidin·
Niğbolu·Yergöğü·Turnu Severin — hepsi aynı 1806-1812 işgalinde) hâlâ `isg:`
taşımıyor; tarihleri TDV'den doğrulanmadığı için YAZMADIM, benim 10 maddemin
dışında ama koordinatöre bildiriliyor.

### ÇÖZÜLDÜ (dosya devri) — Ahtapolu/Rezve/İğneada

`yer_yama_emilme2.js`'in üç kaydı `yer_yama_p19.js`'inkiyle çakışıyordu.
Ölçtüm: emilme2'nin `s:` dizisi 1281-1361 "bizans" açılışını VE 1913 sonrası
kapanışı TAŞIMIYOR — uygulansaydı (field-level replace) üç yerleşim iki ayrı
pencerede sahipsiz kalırdı. p19'unki TAM. emilme2'den üç kayıt çıkarıldı,
gerekçe dosya içinde.

### ÖLÇÜLDÜ, PATCH GEREKMİYOR — 2 madde

**0034/H-0005** (Abadan/Hüveyze) — bu maddeyi TASNİF-F/UYGULAMA-3'ün ilk
turunda zaten işlemiştim (M-1466): Havîza'nın zinciri doğru, Abadan 0 kayıt
(YENİ NOKTA, koordinat+d:+kaynak önerisi zaten koordinatörde). Tekrar
ölçmedim, mükerrer olmasın diye eski bulguya atıf yapıyorum.

**0035/H-0037** (Basra İran işgaline uğramış, Fâv da mı) — ölçtüm: Fâv'ın `d:`
zinciri **1546-01-01'den 1914-11-22'ye KESİNTİSİZ Osmanlı** — Basra'nın
1776-79 Zend arasını hiç paylaşmıyor. Harita "Osmanlı'da gibi görünüyor" diyen
şikâyet zaten DOĞRU görüyordu, veri de doğru — patch gerekmiyor.

### ÖLÇÜLDÜ, MOTOR/GÖRSEL SORUSU — benim dosyam değil

**0035/H-0076** (Derbent/Şirvan/Şamahı/Ereş/Kabala/Gümrü/Çaldıran/Başkale
taralı tutarsızlığı) — ölçtüm: bu sekiz yerin **HİÇBİRİNDE `isg:` alanı YOK**
(grep sıfır sonuç). ⇒ Kullanıcının gördüğü "taralı" desen `isg:` işgal
örtüsünden GELMİYOR — ya `DEVIRLER` (dönem) katmanı ya da CLAUDE.md'de
belgelenmiş bir motor dikişi (Nystad Antlaşması vakasındaki gibi, iki
komşu gövdenin Chaikin-yumuşatılmış sınırının tam örtüşmemesi). Canlı
haritada görsel doğrulama ve MOTOR tarafı gerekiyor — devrediyorum.

**0035/H-0080** (Hotin Ruslar nereden geldi — Boğdan/Lehistan/Kırım bozkırı) —
ölçtüm: Hotin'in SAHİPLİK zinciri zaten doğru ve net (v:Boğdan tâbi 1456-1713 →
d:Osmanlı → s:rusya 1769-74 → d:Osmanlı → s:rusya 1812-). Sorulan şey
MÜTTEFİK ORDUNUN GÜZERGAHI — `savaslar.js` konusu, benim dosyam değil.

**0037/H-0005** (Büyük Çerkes Sürgünü doruk noktası, "bu parça neden boş") —
görsel küçük ve net değil; sahil noktaları (Soçi, Tuapse, Anapa, Maykop/
Çerkezya) ölçtüm, hepsi 1829-09-14'ten itibaren doğru biçimde `rusya` —
"boş" görünen kısım muhtemelen İÇ YAYLA (nokta yoğunluğu düşük dağlık bölge,
H-0001/H-0011/H-0064/H-0079 ailesiyle AYNI SINIF emilme). Kesin teşhis için
canlı haritada görsel doğrulama gerekiyor, tek başıma kutu koordinatlarını
görselden güvenilir okuyamadım.

### ARAŞTIRILDI, EMRE'NİN VARSAYIMI YİNE BELİRSİZ ÇIKTI

**0038/H-0005** (Eçmiyazin ve Gümrü, İran savaşında Osmanlı'ya geçmiş olmalı) —
bu "ÜÇÜNCÜ TEMAS" (VERİ SAHİPLİK iki kez daha bakmış). Ölçtüm: Gümrü'nün
zinciri hiç Osmanlı olmuyor (akkoyunlu→safevi→afsar→zend→kacar→rusya 1828).
Eçmiyazin (Üçkilise/Vağarşapat/Eçmiadzin — dört adı da denendim) **0 kayıt**,
YENİ NOKTA. TDV `revan` (gövde okundu): 1724-1730 Osmanlı işgali sırasında
Revan alındı ama metin Gümrü'yü ya da Eçmiyazin'i AÇIKÇA anmıyor — ne teyit
ne çürütme. Kasr-ı Şirin'deki gibi PATCH YAZMADIM — teyit edemedim.

### SAYIYLA

```
10 madde  →  🟢 1 yazıldı (isg: Bükreş+Yaş) · 1 dosya-devri çözüldü
             (emilme2→p19) · 2 patch gerekmiyor (zaten doğru) ·
             3 motor/görsel/savaşlar.js'e devredildi ·
             1 hâlâ belirsiz (teyit edilemedi) · 2 VERİ kovasına ait değil
``` — koordinatörün "0034 sende, 11 madde" ölçümüne cevap

Koordinatör gece M-1446'yı görmemiş ("tahta uyandırmıyor" sorunu, bende değil) ve
kendi ölçümüyle 11 madde saydı. O 11'i kendi listemle eşleştirdim:
```
H-0001 · H-0005(Abadan) · H-0007 · H-0008 · H-0011 · H-0017 · H-0022 · H-0023 ·
H-0028 · H-0036 · H-0040
```
Durumları:

**KAPANDI (M-1446'dan beri değişti) — 2:** H-0007 · H-0008. Dün "yeniden açıldı, bilgi
amaçlı" diye not düşmüştüm; asıl kök sebep (Şehrizor'un 1535-1550 penceresi) zaten
`data/yer_yama_uyg3.js`'e yazılmıştı — yani ikisi de ARTIK KAPALI, ek iş gerekmedi.
`denetim/HUKUM-UYGULAMA-3.json` güncellendi.

**YENİ NOKTA, ARTIK TAM HAZIR ÖNERİYLE devrediyorum — 2 (H-0001 · H-0005/Abadan):**
Dün yalnız "0 kayıt, devret" demiştim; bu sabah TDV'den kaynaklı, yapıştırılmaya hazır
öneriler çıkardım (senin Birecik/Prizren örneğin gibi):

```
Ordubad (Ordubat)
  konum: ~38,9K 46,03D (yaklaşık — Nahçıvan'ın GD'sunda, Aras vadisi; harita ile
         doğrulanmalı, TDV koordinat vermiyor)
  d: [{f:"1585-01-01", t:"1603-10-21"}, {f:"1725-01-01", t:"1730-08-12"}]
  kaynak: data/olaylar_ek8.js (kaynak:"nahcivan") — "Aras vadisi boyunca güneydoğuya
          inen kuvvetler Nahçıvan ile Ordubad'ı Osmanlı idaresine bağladı ... Şah
          Abbas 1603'te Nahçıvan'ı geri alacaktı." Ordubad Nahçıvan'la AYNI olayda,
          AYNI cümlede fethediliyor — chain NAHÇIVAN'IN kendi d: zinciriyle BİREBİR
          eşleşiyor (1585-1603, 1725-1730). Nahçıvan sancağının bir kazası.
  ⚠️ Kendi TDV maddesi yok (nahcivan makalesinde geçiyor, ayrı madde değil) —
     taneciklik boşluğu, kaynak açıkça yazıldı.

Abadan
  konum: ~30,35K 48,28D (yaklaşık — Basra'nın hemen güneyinde, Şattülarap ağzı;
         TDV koordinat vermiyor, harita ile doğrulanmalı)
  d: [{f:"1546-01-01", t:"1847-01-01"}]  ⚠️ GÜN BELİRSİZ, ikisi de yıl-başı
  kaynak: TDV `abadan` (gövde okundu) — "Uzun süre Osmanlı hâkimiyetinde kalan
          Abadan ... 1847 Erzurum Antlaşması ile İran'a geçmiştir." Başlangıç günü
          TDV'de yok; Basra'nın kendi d: başlangıcıyla (1546-01-01) aynı alındığı
          varsayıldı — ikisi aynı bölge, aynı sefer (Basra'nın 1546 ilhakı). 1847
          için TDV yalnız yıl veriyor; "İkinci Erzurum Antlaşması" 31 Mayıs 1847
          olarak yaygın bilinir ama bu TDV DIŞI/hatırlanan bir tarih — DOĞRULANMADAN
          yazılmasın, ben 1847-01-01 (yıl-başı) öneriyorum.
```

**HÂLÂ AYNI DURUMDA (M-1446'dan beri değişmedi) — 6:** H-0011 · H-0017 · H-0023
(gurcistan, Emre kararı bekliyor — iki seçenek raporda yukarıda) · H-0022 · H-0040
(taksonomi, js/app.js ARAYÜZ'ün dosyası) · H-0036 (bozkır araştırması, tek nokta değil).

**DURUM DEĞİŞTİ — 1:** H-0028 (Libya çöl). Dün "motor kilitli" dedim; şimdi kilit
kalktı (r3753 yayınlandı, 07:00) AMA `arac/uret_petek.py` hâlâ benim dosyam değil
(ÇÖL BOYAMA ya da Oturum 0'ın işi, `§7`). Kilidin kalkması onu BENİM
uygulayabileceğim hâle getirmiyor — yalnız ARTIK UYGULANABİLİR durumda olduğunu
bildiriyorum.

⇒ **Elimde gerçekten "benim yapabileceğim ve henüz yapmadığım" bir kalem KALMADI** —
kalan 9 madde (H-0011/17/22/23/28/36/40 + 2 new-point önerisi) ya karar/dosya-devri
ya da araştırma-genişliği gerektiriyor, hepsi yukarıda somut önerilerle koordinatöre
teslim edildi.
