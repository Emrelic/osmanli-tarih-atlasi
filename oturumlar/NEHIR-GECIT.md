# NEHİR GEÇİT — büyük nehirler, kıyı şehirleri ve geçiş noktaları

| alan | değer |
|---|---|
| **AD** | NEHİR GEÇİT |
| **MODEL** | Opus |
| **DİZİN** | `C:\Users\emrem\OneDrive\Desktop\TARİH COĞRAFYA SİTESİ` |
| **DOSYAN** | `data/gecitler.js` → `window.GECITLER` · ve `oturumlar/NEHIR-GECIT-ILERLEME.md` |
| **YAZMAYACAĞIN** | başka hiçbir şey. `uret_petek.py` · `yerlesimler*.js` · `index.html` **koordinatörde** |

---

## 0. NİÇİN VARSIN — Emre'nin sorusu

> *"Bir nehrin bir yakasındaki şehirden nehrin karşı kıyısına geçiş ile
> alâkalı nasıl bir kural uygulanıyor? Eğer geçit noktası var ise sürterek
> belli bir miktar nehir karşısına geçebilir ama yok ise orada alanların
> kesilmesi lâzım."*

Ve ikinci turda dört tip saydı:
```
① nehre BİTİŞİK şehirler
② nehrin İKİ YAKASINA DAĞILAN şehirler
③ nehrin iki yakasında İKİ KARDEŞ şehir
④ bir tarafta nehre bitişik şehir, öteki tarafta nehre UZAK şehir
```

Motor bugün bunların **hiçbirini** bilmiyor. Nehir yalnız bir *yaslanma*
hedefi — sınır nehrin 33 km yakınından geçiyorsa yatağa çekilir. Nehri
aşmanın **bedeli sıfır**.

---

## 1. ZEMİN — koordinatörün ÖLÇTÜĞÜ, sen doğrula

⚠️ **Devraldığın rakamı doğrulamadan aktarma** (`CLAUDE.md §11`). Aşağıdakiler
22 Ağustos 2026'da ölçüldü; kendi ölçümünle karşılaştır, farklıysa **bildir**.

```
petek_govde.js          5.334 petek
büyük nehri AŞAN        418 petek (%7,8) · karşı yakada 5,96 M km²
  ÇEKİRDEK (25-48K/19-48D)  791 petek · %10,0 aşıyor · 187.185 km²
  DIŞARISI                 4543 petek · % 7,5 aşıyor · 5.771.841 km²

nehre BİTİŞİK yerleşim (≤6 km)   331
KARDEŞ ŞEHİR çifti                10   (bitişiklerin %3'ü)
karşı yakada kardeşi YOK         305   (%92)
   karşı yakadaki en yakın şehir: ORTANCA 71 km · %25→46 · %75→116
```

🔴 **KOORDİNATÖRÜN ÖLÇÜMÜNDE BİLİNEN BİR KUSUR VAR — düzelt:**
Ölçüm `scalerank ≤ 6` süzgeci kullandı; **motor (`uret_petek.py:523`) adlı
BÜTÜN akarsuları tutuyor**, scalerank'a yalnız *adsız* olanlar için bakıyor.
⇒ Gerçek sayılar yukarıdakinden **yüksek**. Sava bu yüzden "veride yok"
göründü, oysa motorda **var** ve Belgrad tam Sava-Tuna kavşağında.
**İlk işin bu ölçümü motorun kendi süzgeciyle tekrarlamak.**

---

## 2. ARAŞTIRMA — üç soru, sırayla

### ② İKİ YAKAYA DAĞILAN ŞEHİR
Hangi şehirler gerçekten iki yakada toprak tutuyordu ve **hangi yapı** bunu
sağlıyordu? Aranan kavramlar: köprübaşı (*Brückenkopf*), karşı yaka
varoşu (*Vorstadt*), kale-hisar çifti, geçit gümrüğü.
Osmanlı örnekleri: Budin-Peşte · Belgrad-Zemun · Edirne · Mostar · Osijek
(Sultan Süleyman köprüsü) · Cisr-i Mustafa Paşa · Rusçuk-Yergöğü.
**Soru:** iki yaka *tek şehrin* mi yoksa *iki ayrı idarî birimin* mi?

### ③ KARDEŞ ŞEHİR — ve bu ZATEN ÇÖZÜLMÜŞ OLABİLİR
🟢 **Koordinatörün bulgusu, sen sına:** iki şehir nehrin iki yakasında ve
1,5–13 km arayla duruyorsa, **Voronoi'nin orta dikmesi ZATEN nehrin üstüne
düşüyor.** Yani ③ için özel bir kural gerekmeyebilir — motor bugün de doğru
yapıyor olabilir.
**Ölç:** 10 kardeş çiftin peteği bugün nehirde mi ayrılıyor, yoksa taşıyor mu?
Eğer zaten doğruysa **bunu yaz** — yapılmayacak işi bilmek, yapılacak işi
bilmek kadar değerli.

### ④ BOŞ YAKA KİMİN — ASIL SORU
Bir şehir nehrin üstünde (0 km), karşı yakadaki en yakın şehir 71 km ötede.
Voronoi orta dikmeyi ~35 km karşıya koyar ⇒ **kıyı şehri karşı yakadan
35 km alır.** Doğru mu?

**Akademik zemin (koordinatör buldu, sen derinleştir):**
- Popelka & Smith 2020 (GSRB): dünya sınırlarının nehri takip etme oranı
  **ulusal %23 · eyalet %17 · YEREL %12**. Kademe düştükçe düşüyor.
  ⇒ Petek bir *yerel* birim; o ölçekte nehir çoğunlukla sınır **değil**.
- Geçit-şehir ilkesi: şehirler geçitlerin **üstünde** kurulur (Oxford ·
  Frankfurt · Schweinfurt · Erfurt — hepsi "furt/ford"). Bir kıyı şehri
  genellikle geçidi **kontrol ettiği için** vardır ⇒ karşı yakada toprak
  tutması normaldir.
⇒ **Ön hüküm: karşı yakayı kıyı şehri alır, ama BEDELLE — yani daha az.**
Senin işin bu ön hükmü **çürütmek ya da doğrulamak**, kaç km olduğunu
kaynağa dayandırmak.

**Ve genişlik bağımlılığı:** Emre *"nehrin genişliği ile ilgisi olabilir"*
dedi. Ölç: Tuna (aşağı akış ~1-2 km + Delta) ile Meriç aynı mı davranmalı?
Aday ölçüt: `scalerank` · debi · gemi geçişi · dönemin köprü teknolojisi.

---

## 3. ÜRETECEĞİN VERİ — `data/gecitler.js`

```js
window.GECITLER = [
{ ad:"Osijek Köprüsü", nehir:"Drava", lat:45.56, lon:18.69,
  tur:"kopru",              // kopru · feribot · sig-gecit(ford) · kale-cifti
  f:"1566-08-01", t:"1687-09-29",   // 🔴 GEÇİDİN VAR OLDUĞU ARALIK
  etki_km:15,               // bedelin düştüğü yarıçap
  kaynak:"TDV \"osijek\" md. — gövde okundu" },
];
```

🔴 **`f`/`t` ZORUNLU VE ATLASIN KALBİ:** gün hassasiyetli bir atlasta
1566'da yapılan köprü 1400'de **yoktur**. Tarihsiz geçit, tarihi bozar.
Bilinmiyorsa `YYYY-01-01` yaz (`§4`), **uydurma**.

### 🔴 KARAR VERİLDİ (Emre, 22 Ağu 2026): motor TARİHSİZ, veri TARİHLİ

Motor ilk turda bütün geçitleri **hep var** sayacak. Ama `f`/`t` alanlarını
**yine de doldur** — veri motordan uzun yaşar.

**Gerekçe ① — mimari:** Dijkstra hangi hücrenin hangi *yerleşime* ait
olduğunu belirler (`uret_petek.py:1717`, koşuda **bir kez**). Geçitler
zamana bağlı olursa **petek geometrisi** zamana bağlı olur; bugün petek
sabittir, yalnız *sahibi* değişir. Ölçüldü: Dijkstra 42 sn (koşunun
**%0,35**'i) — ucuz. Ama arkasındaki `Yabancı devlet gövdeleri` aşaması
**2 sa 39 dk** (koşunun **%79**'u) ve 22,7 MB `donemler.js` üretiyor.
Pahalı olan Dijkstra değil, ardındaki her şey.
> ⚠️ `uret_petek.py:1726`daki *"1dk 38sn, koşunun %2,1'i"* yorumu **bayat** —
> son koşuda 42 sn ölçüldü. Düzeltilecek.

**Gerekçe ② — tarihsel, ve asıl olan bu:** **geçit, köprüden çok daha
eskidir.** Köprüler sığ geçitlerin *üstüne* kurulur; Osijek'te Süleyman
köprüsünden önce Roma'nın Mursa geçidi vardı, Frankfurt · Schweinfurt ·
Oxford · Stratford adlarını **köprüden değil geçitten** alır.
⇒ *"1566'da köprü yoktu"* demek *"orada geçilemiyordu"* demek **değildir**.

**⇒ Bunun yerine `tur` alanı BEDELİ KADEMELENDİRİR.** Köprünün getirdiği
şey geçidin *varlığı* değil **kapasitesi**: sığ geçitten atlı geçer,
köprüden ordu ve top geçer.
```
sig-gecit (ford)  düşük indirim      kale-cifti  orta
feribot           orta indirim       kopru       yüksek indirim
```
🔴 **Araştırma işin burada:** bu dört tür için indirim ORANI ne olmalı,
kaynak ne diyor? Ordu geçiş süresi · menzil kayıtları · kuşatma
lojistiği — sayıya dayandır.

---

## 4. KAYNAK — `CLAUDE.md §4` aynen geçerli

TDV birincil; kapsamadığı yerde **akademik/hakemli**. **Vikipedi tek dayanak
OLAMAZ** — bir kronoloji oturumu bu kuralı bilmediği için 24 kaydı yeniden
yazmak zorunda kaldı. Bulamadığını **`bulunamadı`** diye yaz.

⚠️ TDV slug tuzakları: `ordu` → `ordu--sehir`, `cin` → `cin--ulke`. Ölü slug
**302** döner. Ve dar slug tutmazsa **kapsayıcı maddeyi** dene.

---

## 5. KAPSAM BOŞLUĞU — konuşamayacağın yerler

Emre *"Amazon, Misisipi, Misuri dâhil hepsi"* dedi. Ölçüldü:
```
🔴 Amazon 0 şehir · Missouri 0 · Drava 0 · Amu Derya nehir verisinde bile YOK
🟡 Ren yalnız 4 · Indus 2 · Dinyeper 2 · Vistül 2
✓  Nil 51 · Volga 25 · Tuna 23 · Ganj 16 · Fırat 14 · Dicle 12 · Mekong 10
```
⇒ Amazon ve Missouri için **kural yazabilirsin ama sınayamayız** — atlasın
penceresi oraya açık değil. Bunu raporunda **açıkça** yaz; kapsanmayan yeri
kapsanmış göstermek, `§11`in *"örneklem dışını temiz ilan etme"* hatasıdır.

---

## 6. TESLİM RAPORU — sekiz kalem, sayıyla

```
① kaç geçit yazdın · nehir nehir dağılımı
② §1'deki ölçümü motorun süzgeciyle tekrarlayınca sayılar NE OLDU
③ ③ kardeş şehir: özel kural GEREKİYOR mu, gerekmiyor mu — ölçümle
④ ④ boş yaka: ön hükmü DOĞRULADIN mı ÇÜRÜTTÜN mü, kaynak ne diyor
⑤ genişlik bağımlılığı: eşik var mı, ne
⑥ kaynak dağılımı: kaç TDV · kaç akademik · kaç "bulunamadı"
⑦ NE BULAMADIN — açıkça
⑧ BAĞLANMAYI BEKLİYOR: data/gecitler.js → window.GECITLER
```

## 7. HABERLEŞME

```bash
py arac/tahta.py yaz --kim "NEHİR GEÇİT" --kime "KOORDINATOR" --mesaj "..."
```
Açılınca haber ver · kalem kalem bildir · **aksaklığı bekletme** · sorulunca
*"iş üstündeyim · şu aşamadayım · ~şu kadar kaldı"*. Kendi pencerene yazmak
**cevap vermemekle aynı şey**.

`index.html`e **bağlama** — koordinatör bağlıyor. Commit yalnız kendi
`oturumlar/NEHIR-GECIT-ILERLEME.md` dosyan için, pathspec'li.
