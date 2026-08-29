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
edilsin — bugün "uygulanmadı" demek yarın da öyle kalacağı anlamına gelmiyor. — koordinatörün "0034 sende, 11 madde" ölçümüne cevap

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
