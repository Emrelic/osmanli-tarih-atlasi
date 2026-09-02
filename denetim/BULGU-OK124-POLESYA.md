# BULGU — POLESYA / SEYREK TOHUM · OPUS HAZIR KITA 124

> **Remit:** 1.MURAT, M-2214 + M-2232. *"Bu boşluğa nokta koymayı hangi
> akademik kaynak destekliyor? Önce boşluk GERÇEK mi ölç, sonra kaynak ara.
> Bulursan raporla, YAZMA. Bulamazsan 'bulunamadı' bir SONUÇTUR."*
>
> **Nokta YAZILMADI.** `data/yerlesimler_ok124.js` hiç açılmadı — veri
> dosyası remitten çıkarıldı (M-2214) ve o karardan önce de yazmamıştım.
>
> Taban: 2663 nokta · 69 girdi dosyası (`girdi.GIRDI_DOSYALARI`) ·
> 2 Eylül 2026, 16:0x–17:0x.

---

## ⓪ ÖZET — üç cümle

1. Devraldığım öncülün **beş kaleminden dördü çürüdü**: Batı Polesya
   boşluğu benim ölçümümden önce kapanmış (262,0 km → **81,3 km**).
2. Boşluk **yok olmadı, YER DEĞİŞTİRDİ** — batı kapandı, **Doğu Polesya**
   (aşağı Pripyat) açık kaldı: 189,6 km.
3. 🔴 Ve asıl bulgu aranmıyordu: boşluğun orada **zararlı** olmasının
   sebebi nokta eksikliği değil, **`litvanya-buyuk-dukalik` künyesinin
   kendi çekirdeğinde hiç kullanılmaması.**

---

## ① DEVRALINAN ÖNCÜL — YENİDEN ÖLÇÜLDÜ, DEVRALINMADI

Kaynak: `denetim/HUKUM-OK110.json`, `parti-emrelic-0014/H-0005`.
Aynı koordinatlarda bugün yeniden ölçtüm.

| ölçülen nokta | devralınan | **bugün** | damga |
|---|---|---|---|
| en büyük boşluk 52,19K/24,87D | 262,0 km | **81,3 km** | 🔴 ÇÜRÜDÜ |
| Brest 52,098/23,686 | 183,3 km | **0,1 km** | 🔴 ÇÜRÜDÜ — nokta VAR |
| Pinsk 52,121/26,100 | 221,1 km | **0,7 km** | 🔴 ÇÜRÜDÜ — nokta VAR |
| Slonim 53,087/25,322 | 173,7 km | **118,8 km** | 🔴 ÇÜRÜDÜ (küçüldü) |
| Novogrudok 53,600/25,828 | 118,7 km | **118,8 km** | 🟢 TUTTU |
| ham kutuda nokta | 17 | **24** | 🔴 ÇÜRÜDÜ |

**SEBEP ÖLÇÜLDÜ, TAHMİN DEĞİL:** `data/yerlesimler_p0037.js` (15 kayıt,
commit `5a6abbe`) içinde `Brest-Litovsk` (52,097/23,688) ve `Pinsk`
(52,115/26,103) var. Batı Polesya OK110'un ölçümünden **sonra** kapandı.

📌 **Ölçüm o gün doğruydu, bugün bayat.** Bu bir hata raporu değil, bir
*tarih* raporu. Aynı gün üçüncü vaka (Trakya · Uzunyayla · Polesya) ve
üçünü de işçi oturumlar yakaladı, hiçbirini denetim betiği yakalamadı.

---

## ② BOŞLUK NEREDE — kutu DARALTILDI

Ham kutu `50,99–59,07K / 18,37–30,58D` Baltık'tan Ukrayna'ya uzanıyordu ve
**"Polesya" adını hak etmiyordu.** Daralttığım çekirdek (Pripyat havzası):

```
51,3–53,4K / 23,0–30,0D     çekirdekte 3 nokta:
                            Białystok · Brest-Litovsk · Pinsk
izgara ortalaması            90,2 km
>150 km hücre                229 / 1562
en büyük boşluk              189,6 km   52,40K 28,90D
```

🔴 **VE BURADA BİR YÖNTEM AYRIMI VAR — ikisi farklı şey ölçüyor:**

```
NOKTA-NOKTAYA en yakın komşu   koordinatörün ölçümü: 171,7 km (Minsk→Vilnius)
IZGARA (0,1°) en yakın komşu   benim ölçümüm:        189,6 km (52,40/28,90)
```

İkisi de doğru. Ama nokta-noktaya ölçüm **boş ALANI göremez** — yalnız var
olan noktalar arasındaki mesafeyi görür. Bir bölgede hiç nokta yoksa orada
ölçülecek "aralık" da yoktur. ⇒ **Doğu Polesya deliği, nokta-noktaya
ölçümde görünmez.**

---

## ③ 🔴 ASIL SORU — BOŞLUK YANLIŞ BOYA ÜRETİYOR MU?

*"Boşluk var"* tek başına bir kusur değildir. `CLAUDE.md §2`: noktasız
bölge en yakın peteğe emilir **ve o peteğin sahibiyle boyanır.** ⇒ emen
noktalar aynı devlete aitse **görünür hata YOKTUR.**

Bunu kimse sormamıştı. On iki kesitte, en yakın üç noktanın sahibi:

| yer | en yakın üç | **çelişen kesit** |
|---|---|---|
| **Doğu Polesya 52,40/28,90** | Minsk 190 · Çernigov 192 · Pinsk 193 km | 🔴 **9 / 12** |
| Gomel/Reçitsa 52,40/30,00 | Çernigov 134 · Kiev 220 · Novgorod-Seversk 227 | 4 / 12 |
| Aşağı Pripyat 52,30/28,00 | Pinsk 131 · Minsk 181 · Rivne 223 | 2 / 12 |
| **Novogrudok 53,60/25,83** | Minsk 119 · Vilnius 126 · Grodno 132 | **2 / 12** |
| **Slonim 53,09/25,32** | Grodno 118 · Pinsk 121 · Białystok 144 | **1 / 12** |

**⇒ HÜKÜM, ve remitime karşı çıkıyor:** bana verilen **Minsk–Vilnius
hattı** (Novogrudok · Slonim) boşluğun **en zararsız** olduğu yer —
1–2/12. Oraya nokta yazmak haritada neredeyse hiçbir şeyi değiştirmez,
çünkü en yakın üç nokta zaten **aynı fikirde** (`lehistan` boyunca).

Zararın gerçekten olduğu yer **Doğu Polesya**: 9/12. Ve mesafeler
190/192/193 km — **neredeyse eşit**, yani emilme sınırı rastgele ve
boyanan renk Minsk ile Çernigov arasında keyfî olarak seçiliyor.

---

## ④ 🔴🔴 YAN BULGU — ARANMIYORDU, VE NOKTA EKSİKLİĞİNDEN AĞIR

③'teki 9/12 çelişkiye bakarken sebebini aradım. **Nokta eksikliği değil.**

```
`litvanya-buyuk-dukalik` KULLANAN kayıt: 8 — ve 8'inin 8'i DOĞU FETHİ
   Smolensk 1281→1514 · Bryansk 1356→1500 · Çernigov · Novgorod-Seversk ·
   Putivl · Hluhiv · Kursk · Orel      (hepsi 1362→1503, hepsi >31°D)

GDL ÇEKİRDEK KUTUSU 51,5–56,5K / 23,0–31,0D — 12 nokta
   `litvanya-buyuk-dukalik` kullanan :  0
   `lehistan` kullanan               : 11
   Vilnius · Kaunas · Minsk · Grodno · Polotsk · Vitebsk ·
   Brest-Litovsk · Pinsk · Białystok · Šiauliai   →  hepsi `lehistan`
```

**Sınav — bu kasıtlı bir şemsiye sadeleştirme mi?**
Şemsiye olsaydı kimlik **hiçbir yerde** kullanılmazdı. Oysa **aynı çağda**
kullanılıyor:

```
Kursk    1362–1503  ->  litvanya-buyuk-dukalik
Vilnius  1362–1503  ->  lehistan          ← ve Vilnius O DEVLETİN BAŞKENTİ
```

⇒ Şemsiye değil, **veri kendi kendisiyle çelişiyor.** Bunu yorumlamadım,
saydım.

**Görsel sonucu** `CLAUDE.md §3.5`teki Safevî vakasının birebir aynası —
orada koca bir `iran` ve Van'ın doğusunda avuç kadar `safevi` vardı;
burada koca bir `lehistan` ve doğuda avuç kadar `litvanya-buyuk-dukalik`.
**Litvanya Büyük Dükalığı haritada çekirdeksiz görünüyor:** fethettiği
yerler kendi renginde, **anayurdu ve başkenti başka devletin renginde.**

⚠️ **ÖLÇMEDİĞİM ŞEYLER — açıkça yazıyorum:**
- Bu 11 kaydın `lehistan` zincirinin **kim tarafından, hangi commit'te**
  yazıldığına **bakmadım.**
- Doğru kırılma günlerini (Krewo 1385 · Lublin 1569-07-01) **önermiyorum**;
  ölçmedim, kaynağa sormadım.
- Bunun `Değişmez 2s`ye kaç yeni kırılma ekleyeceğini **ölçmedim.**
- Künyenin `f`/`t` penceresini **okumadım** — kimlik `data/devletler.js`te
  var ve `renkler.py`de rengi var, o kadarını ölçtüm.

---

## ⑤ KAYNAK TARAMASI

### TDV — KENDİM ÖLÇTÜM (HTTP kodu), devralmadım

```
🔴 302 ÖLÜ   litvanya · belarus · beyaz-rusya · lehistan-litvanya ·
             novgorod · kirim-hanligi
🟢 200 CANLI lehistan · polonya · ukrayna · rusya · lipkalar
```

OK110'un *"`litvanya` slugu ölü"* hükmü **TUTTU** — ama devralmadım, ölçtüm.

**Kapsayıcı maddelerin gövdesini açtım** (`§4`: dar slug tutmazsa
kapsayıcıyı dene — ve HTTP 200 *"doğru madde"* demek değildir):

| slug | gövde | Polesya taneciği |
|---|---|---|
| `polonya` | 86.843 karakter | Litvanya 21× · Brest 1× · Vilna 9× · "bataklık" 1× |
| `lipkalar` | 13.533 karakter | Litvanya 9× · Vilnius 4× · Grodno 1× |
| `lehistan` | **2.306 karakter** | hiçbiri |

**Novogrudok · Slonim · Turov · Mozyr · Gomel · Aşmyani · Maladzyeçna ·
Barysaw: üç maddenin hiçbirinde GEÇMİYOR.**

⇒ **HÜKÜM: bu bir COĞRAFÎ boşluk değil, TANECİKLİK boşluğu** (`§4`).
TDV bölgeyi **künye düzeyinde görüyor** (Litvanya 21 kez anılıyor), ama
**kasaba taneciğinde susuyor** — `kirman` (57 KB) ve `yezd` (61 KB)
vakasının aynısı. `§4`ün hükmü gereği standart akademik kaynak
**meşrudur**, şartı `kaynak:` alanına açıkça yazmak.

### Akademik — VARLIĞI doğrulandı, GÖVDESİ OKUNAMADI

| kaynak | durum |
|---|---|
| Martin, J., *Medieval Russia, 980–1584*, 2. bs., Cambridge UP, Cambridge Medieval Textbooks, ISBN 9780521859165, DOI 10.1017/CBO9780511811074 | 🟢 var · içindekiler okundu — **Turov/Pinsk/batı Rus prenslikleri bölüm başlıklarında GEÇMİYOR** |
| Rowell, S.C., *Lithuania Ascending: A Pagan Empire within East-Central Europe, 1295–1345*, Cambridge UP, 1994 | 🟢 var (*The Medieval Review*, Indiana Univ. ScholarWorks) · **kapsamı 1295–1345**, atlasın 1281–1923 penceresinin küçük bir dilimi |
| Gieysztor, A., "The Kingdom of Poland and the Grand Duchy of Lithuania, 1370–1506", *The New Cambridge Medieval History*, ed. C. Allmand, Cambridge UP, 1998, s. 727–747, DOI 10.1017/CHOL9780521382960.036 | 🟢 künye doğrulandı · **gövde erişim duvarının arkasında** ⚠️ cilt numarası çelişkili geldi (sayfa "vol. 1" dedi, DOI ve editör NCMH **VII**'yi gösteriyor) — **ÇÖZMEDİM** |
| Kiaupa · Kiaupienė · Kuncevičius, *The History of Lithuania Before 1795*, Vilnius 2000 | 🟢 var · gövde okunmadı |
| *Journal of Archaeological Science: Reports* — Polesia erken ortaçağ ksilolojisi, S2352409X20300432 | 🔴 **HTTP 403** — okunamadı |

### 🔴 DAMGA: `bulunamadı` DEĞİL — `ÖLÇÜLEMEDİ`

```
BULUNAMADI    arandı, YOK               → kalem KAPANIR
ÖLÇÜLEMEDİ    var ama gövdesi alınamadı → kalem AÇIK KALIR
```

Bölgeyi kapsayan **akademik kaynak VARDIR** — yani *"bu coğrafya için
akademik kaynak yok"* demek **yanlış olur.** Ama gövdelerini okuyamadığım
için **tek bir kasaba için tek bir tarih öneremiyorum.** İkisi ayrı
şeydir ve ayrı damgalanmalıdır.

⚠️ Ve `§4`ün kendi tuzağı burada da geçerli: bir kitabın *var olması*, o
kitabın *o tarihi vermesi* demek değildir. Martin'in içindekiler listesi
tam bunu gösterdi — Cambridge kitabı var, ama Turov/Pinsk bölüm
başlıklarında yok.

---

## ⑥ NE İSTİYORUM

**① ÖNCELİK İTİRAZI (`YASALAR G8`).** Bana verilen Minsk–Vilnius hattı
ölçtüğüm en **zararsız** boşluk (1–2/12). Doğu Polesya 9/12. Nokta bütçesi
harcanacaksa **oraya** harcanmalı. *Kararı sen ver — ben ölçtüm ve
itirazımı yazdım, hattı kendim değiştirmedim.*

**② ④'ÜN SEVKİ.** `litvanya-buyuk-dukalik` bulgusu **benim dosyam değil**
(`data/yerlesimler*.js` + `devletler.js`) ve **nokta işi de değil** — 11
mevcut kaydın `s:` zinciri. Bunu bir **künye/kimlik** kalemi olarak sevk
et. Kimin dosyası olduğunu **ben belirlemem.**
⚠️ Ve dokunulursa `Değişmez 2s`ye **yeni kırılma günleri** doğacak
(Krewo 1385 / Lublin 1569) — bunu **ölçmedim**, ölçen kişi
`denetle.py` tavanını da baksın.

**③ KAYNAK KOLU.** Gövdeye erişim gerekiyor. Bende yok. Kurumsal erişimi
olan bir yol açılırsa Gieysztor (NCMH) ve Kiaupa gövdeleri Doğu
Polesya'nın idarî taneciğini (*pavet* / vaivodalık merkezleri) verebilir —
**verir demiyorum, VEREBİLİR diyorum, ölçmedim.**

**④ Emre'nin bağlayıcı ilkesi hatırlatması:** *"Yerleşim varsa nokta
konur. Yoksa uyduracak hâlimiz yok. Devasa boşluklar olacaksa olsun."*
Pripyat bataklığı Avrupa'nın en büyük sulak alanıdır ve **seyrek
yerleşimli olması tarihen beklenen bir şeydir.** Ama bunu **ölçmedim** —
boşluğun *meşru* olup olmadığını söyleyemem, yalnız *zararlı* olduğunu
(9/12) ölçtüm. İkisi ayrı sorudur.

---

## ⑦ KULLANDIĞIM ALETLER — bir sonraki oturum için

```
arac/_yer_ara.py            "bu kayıt var mı" — TEK doğru cevap
scratchpad/_polesya_olc.py  ham kutu · izgara · en büyük boşluk
scratchpad/_polesya_2.py    devralınan sayıların AYNI NOKTADA yeniden ölçümü
scratchpad/_polesya_3.py    🔴 "boşluk yanlış boya üretiyor mu" — YENİ SORU
scratchpad/_litvanya.py     bir kimliğin çekirdek/çevre dağılımı
```

🔴 **`_polesya_3.py` bu kalemin en değerli aletidir** ve projede benzeri
yoktu: *"kaç km boşluk"* sorusunu *"bu boşluk yanlış mı boyanıyor"*
sorusuna çeviriyor. Boşluk ölçen her kalem onu koşturmalı — çünkü büyük
ama zararsız boşluklar (Slonim 118 km, 1/12) ile küçük ama zararlı
boşluklar (Gomel 134 km, 4/12) **yalnız bu ölçümle ayrılıyor.**

⚠️ **Sınırı:** yalnız **en yakın üç** noktayı kuruyor ve **12 kesit**
bakıyor. Dördüncü nokta ya da başka bir gün çelişki üretebilir —
**ölçmedim.**
