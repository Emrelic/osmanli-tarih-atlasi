# BULGU — KADEME K0 · `k:` alanı KAÇ SORUYA cevap veriyor

**KADEME K0** · 27 Ağustos 2026 · ORHANGAZİ sevkiyle
**Hiçbir veri yazılmadı.** Şartname *"önce çelişkiyi ölç ve bana yaz"* diyordu;
bu rapor o ölçümdür.

---

## 0. HÜKÜM — tek cümle

> **`k:` bir alan, İKİ EKSEN taşıyor** — ve bu, `CLAUDE.md §3`teki **`m:`
> vakasının kardeşi**, tahmin değil **ölçüm**. Belgedeki *"0 = kademesiz
> (yabancı şehir)"* satırı **veriyle çelişiyor** ve **belge yanlış, veri değil.**

---

## 1. ÖLÇÜM — üç sayı çelişkiyi kuruyor

```
                 TOPLAM   OSMANLI olmuş   HİÇ olmamış   kasitli_bosluk
        k0         1363             45          1126             197
        k1          200              6           175              20
        k2          203             65           134               4
        k3          327            254            72               4
        k4          513            509             4               1
```

### ① 385 yabancı nokta kademe TAŞIYOR
`k1` örnekleri: **Londra · Paris · Napoli · Isfahan · Meşhed · Timbuktu ·
Fas · Merakeş · Astrahan · Maskat · Gondar · Erdebil**
⇒ Bunlar Osmanlı sancak merkezi **olamaz**. Demek ki `k:` burada
**idarî kademe değil, ÖNEM derecesi** anlamında kullanılmış.

### ② Ve ters yönde 40 nokta: Osmanlı olmuş, hâlâ `k0`
Otranto · Ahar (Karadağ) · Sarâb · Miyâne · Nihâvend · Kasr-ı Şîrîn ·
Burûcird · Salyan · Kuba · **Kassa · Eperjes · Tokaj** · Knin · Klis ·
Herseknovi · Bihaç · Zagem · Kordofan · Nyala · Kutum …
⇒ **Bunlar GERÇEK EKSİK.** (Şartname 45 diyordu; `kasitli_bosluk` ayrılınca
ölçüm **40**.)

---

## 2. 🔴 ASIL KANIT — motor `k:`yi İKİ AYRI İŞ İÇİN OKUYOR

```python
# arac/uret_petek.py:763
TAVAN_KM = {1: 700, 2: 420, 3: 280, 4: 140, 0: 280}
# :940   R = TAVAN_KM.get(y.get("k") or 0, TAVAN_KM[0])   ← HER noktaya yarıçap
# :690   if y["k"] in (1, 2):                             ← k12_merkez (idarî)
# :702   k3/k4 bir k1/k2 merkeze BAĞLANMALI (idarî zincir)
```

🔴 **`k0`ın yarıçapı VAR ve `k3` ile AYNI: 280 km.**
Yani `k0` *"kademesiz"* değil, **gerçek bir tavan kademesi**. Belgedeki tarif
motorun davranışını anlatmıyor.

**İki eksen açıkça ayrışıyor:**
```
EKSEN A · ÖNEM / TAVAN     TAVAN_KM'yi besler · HERKESTE anlamlı
                            (Londra'nın da bir yarıçapı olmalı)
EKSEN B · İDARÎ KADEME      eyalet/sancak/kaza · YALNIZ Osmanlı'da anlamlı
                            zinciri `m:` taşır — 745 kayıtta dolu,
                            bunların yalnız 9'u yabancı
```
Ölçüm bu ayrımı doğruluyor: yabancı `k1/k2` olan **332** noktanın yalnız
**2'sinde** `m:` var. Yani yabancıda `k:` yazılıyor ama idarî zincir
kurulmuyor — çünkü **orada idarî kademe diye bir şey yok**, yazılan şey önem.

---

## 3. `kd:` — zamanlı alan da AYNI İKİLİĞİ taşıyor

190 kayıtta dolu; **180'i hiç Osmanlı olmamış**. İçeriği okununca ikilik
görünüyor:
```
YABANCI   Viyana  k:0  kd:[{1526-08-29 → 1918-11-11, k:1, m:null}]
          Venedik k:0  kd:[{1281 → 1797-05-12, k:1, m:null}]
          ⇒ "bu şehir şu tarihler arasında BAŞKENT/ÖNEMLİ" · m: BOŞ
OSMANLI   Akkirman k:3 kd:[{1484 → 1593, k:3, m:"Silistre"},
                          {1593 → 1812, k:3, m:"Özi"}]
          ⇒ "bu şehir şu tarihte ŞU SANCAĞA bağlı" · m: DOLU
```
📌 Yani `kd:` **zamanlı** olmasıyla doğru yönde bir alan, ama o da iki ekseni
birden taşıyor — farkı `m:`in dolu olup olmaması yapıyor.

---

## 4. 🔴 VE BİR ÇAKIŞMA — Emre'nin İKİ İSTEĞİ TERS YÖNDE

```
İSTEK ①  "200 km tavanı"        → gövdelerin erişimini KISALT
İSTEK ②  "k0'ları bertaraf et"  → k0'a k1/k2 vermek TAVANI UZATIR
```
Sayıyla:
```
k0 → k2 yapmak    tavan 280 → 420 km   (+%50)
k0 → k1 yapmak    tavan 280 → 700 km   (+%150)
k0 → k4 yapmak    tavan 280 → 140 km   (−%50)
```
⇒ **1126 yabancı `k0`a idarî görünümlü bir kademe yazmak, aynı gün alınan
"200 km tavanı" kararının tersine çalışır.** Hangi yöne gidileceği bir VERİ
işi değil, bir **KARAR**.
⚠️ Alan etkisini **ölçmedim** — TAVAN_KM bir *kırpma*, benim 200 km aracım bir
*boyama* yarıçapı; ikisi aynı şey değil ve doğru ölçüm motoru ister.

---

## 5. ÖNERİM — üç kalem, ikisi hemen, biri karara bağlı

### 🟢 A · 40 Osmanlı `k0` — HEMEN yapılabilir
Küçük, kesin, kaynaklanabilir. TDV'den idarî statü okunup `k2`/`k3`/`k4`
yazılır. Bu **gerçek eksiktir** ve iki eksen tartışmasından bağımsızdır.

### 🟢 B · 197 `kasitli_bosluk` — DOKUNULMAZ
Sahiplik taşımıyor, idarî kademesi yok, önem derecesi de yok.
📌 **Raporda yazıyorum ki bir daha bakılmasın.**

### 🟡 C · 1126 yabancı `k0` — ÖNCE BELGE, SONRA ÖLÇÜT
1. **`VERI-YAPISI.md:32` düzeltilsin** — `k:` "idarî kademe" değil,
   **"önem/tavan derecesi"**; idarî bağ `m:`/`kd:.m` eksenindedir.
   *(Belgeyi ben yazmıyorum — kök `*.md` bana kapalı, öneriyorum.)*
2. **Ölçüt önerim** (Emre'ye taşınmak üzere), önem ekseninde:
```
k1  bir devletin BAŞKENTİ ya da imparatorluk merkezi        (Londra · Isfahan)
k2  eyalet/bölge merkezi, büyük liman, ticaret merkezi      (Urmiye · Yezd)
k3  sancak/vilayet düzeyinde şehir                          (Kum · Merend)
k4  kasaba · kale · menzil                                  (küçük yerleşim)
```
   ⚠️ Bu ölçüt **zamansızdır** ve sorun orada: Budin 1541-1686 eyalet merkezi,
   öncesi krallık başkenti. Zamanlı karşılığı `kd:` — ama 190 kayıtta dolu.
   ⇒ **Doğru sıra: önce `kd:` yaygınlaştırılsın, sonra `k:` ondan türetilsin.**
   Tersi yapılırsa 1126 kayda zamansız bir değer yazılır ve `Değişmez 3`ün
   359 çiftlik borcuna benzer yeni bir borç doğar.

### 🔴 YAPMAYACAĞIM
1126 kayda uydurma ölçütle kademe yazmak. Şartname zaten öyle diyor:
*"Uydurma bir ölçütle 1318 kayıt yazmak, boş bırakmaktan kötüdür."*

---

## 6. Ölçmediklerim

- **Tavan değişiminin km² etkisi ölçülmedi** (motor gerekir).
- **40 Osmanlı `k0`ın TDV'den idarî statüsü okunmadı** — bu bir sonraki adım.
- `kd:` taşıyan 190 kaydın tamamı okunmadı; **6 örnek** okundu.
- Şartname `45` diyordu, ölçüm **40** — farkın `kasitli_bosluk` ayrımından mı
  yoksa başka bir süzgeçten mi geldiğini **ölçmedim**.

---

# BÖLÜM II — KALEM A TESLİM: 40 Osmanlı `k0`

Şartnamenin ① maddesi eksen tartışmasından bağımsızdı, ona başlandı ve bitti.
**Teslim: `data/yer_yama_kademe.js` → `window.YER_YAMA_KADEME`, 35 kayıt.**

## 7. Önce şu ölçüldü: bu yama HARİTAYI DEĞİŞTİRİR Mİ?

**Hayır — ve bu varsayım değil, iki ayrı ölçüm.**

### ① Tavan hiçbirinde bağlamıyor
`TAVAN_KM[k0] = 280 km`. Bir Voronoi hücresinin yarıçapı kabaca *(en yakın
komşu ÷ 2)* kadardır; tavan ancak bundan **küçükse** bağlar.
```
40 kaydın 40'ında  (en yakın komşu ÷ 2) < 280 km
en tenha nokta     Tîne (Dârfûr) — en yakın komşu 189 km ⇒ yarıçap 94 km
TAVANIN BAĞLADIĞI NOKTA: 0 / 40
```
⇒ Kademe değişse de **petek aynı kalır.**

### ② Motorun kendi yorumu da bunu söylüyor
`uret_petek.py:680`:
> *"Kademe uyarısının bedeli kozmetik (bölge sınırı çizilmiyor, **toprak
> boyaması etkilenmiyor**)"*

### ③ Değişen tek şey: `data/bolgeler.js`
`uret_petek.py:3285` → `if not (y["d"] or y["v"]) or not y["k"]: continue`
🔴 **`k0` bir nokta bölge katmanına HİÇ girmiyor.** Kademe verilince
merkezinin bölge poligonuna **üye** olur ve o poligon büyür. Bu, istenen
davranıştır — ama **bilinerek** olmalı, o yüzden yazıyorum.

## 8. 🔴 VE BİR ZORUNLULUK: `k:` TEK BAŞINA YAZILAMAZ

`uret_petek.py:702` k3/k4 için `m:` zincirinin bir k1/k2 merkeze kapanmasını
şart koşuyor; kapanmazsa `UYARI kademe` öter ve `:706`daki **"beklenen 0"**
sayacı bozulur.
```
40 kaydın 39'unda  m: BOŞ    (yalnız Sina güneyi'nde m:"Kahire" var)
```
⇒ **`k:` ile `m:` BİRLİKTE yazıldı.** 35 önerinin 35'i, *yama uygulanmış
varsayılarak* `k12_merkez()` (satır 684) **birebir taklit edilerek** sınandı:
**35/35 zincir kapanıyor, 0 red.**
📌 Bu, `§11`in *"bir aracın verdiği reçete, uygulanınca KENDİ TESTİNİ geçmek
zorundadır"* kuralının uygulanmış hâli — reçete üretilmeden önce sınandı.

## 9. 35 kayıt — küme küme

| küme | sayı | kademe | merkez |
|---|---|---|---|
| Dalmaçya–Bosna | 5 | Klis **k2** · Bihaç **k2** · Knin k3 · Sin k4 · Herseknovi k4 | Klis · Mostar |
| Orta Macar (Thököly, tâbi 1682-85) | 6 | Kassa **k2** · Eperjes · Tokaj · Ungvár · Munkács · Fülek k4 | Kassa |
| İran–Kafkasya | 10 | Salyan · Kuba · Tarki · Zagem k3 · ötekiler k4 | Tebriz · Hemedan · Şamahı · Derbend · Şehrizor · Şeki · Tiflis |
| Sudan–Dârfûr (Mısır idaresi 1874-83) | 13 | hepsi k4 | El-Fâşir · Sevâkin |
| İtalya | 1 | Otranto k4 | Yanya |

**Kademe:** k2 = 3 · k3 = 5 · k4 = 27
**Güven:** KESİN 2 · GEREKÇELİ 23 · HÜKÜM 10

### En sağlam ikisi — TDV kademeyi ADIYLA söylüyor
```
Klis   "Fetihten hemen sonra Klis sancak ve kaza merkezi yapıldı."
Bihaç  "1865'te yeniden sancak merkezi haline getirildi."
```

### İki idarî taksim doğrudan kaynaktan çıktı
```
TDV tebriz   1593 Tebriz eyaleti livâları: Tebriz · Suldus · Dizmâr ·
             Merâga · Sarukurgân · Saîdâbâd · Alîk
             ⇒ Ahar · Sarâb · Miyâne bu listede YOK ⇒ livâ altı ⇒ k4
TDV sirvan   "Şirvan iki eyalete ayrıldı. Kuzeyde merkezi Demirkapı/Derbend
             olan Derbend eyaleti, güneyde merkezi Şemâhî olan Şemâhî
             eyaleti. Şemâhî on beş, Derbend yedi sancağa ayrıldı."
             ⇒ Salyan → Şamahı · Kuba → Derbend
```

## 10. 🔴 5 KAYIT KASTEN DIŞARIDA — `tur:"bolge"`

**Boğaziçi (Rumeli yakası) · Cebel Merre · Kordofan · Saroz kuzey kıyısı ·
Sina güneyi**

Bunlar **yerleşim değil, dolgu bölge noktalarıdır.** Bir bölgeye "sancak
kademesi" vermek **kategori hatası** olur. Beşi de k0 kalıyor ve tavan
beşinde de gevşek olduğu için haritada hiçbir şey değişmiyor.

🟡 **Ama Kordofan bir SORU:** TDV `kordofan` maddesi onu gerçek bir idarî
birim olarak anlatıyor (*"bölgenin merkezi ... Ubeyyid"*), yani **kademesi
olması savunulabilir.** Kaydımız bir *bölge dolgusu* olduğu için yazmadım.
⇒ **Koordinatöre soru: `tur:"bolge"` kayıtlarına kademe verilecek mi?**
Kendi başıma karar vermedim.

## 11. TDV tuzakları — bu turda ölçülenler

```
① ÖLÜ SLUG (302)     knin · sinj · herseknovi · kosice · kassa · tokoli ·
                     ungvar · munkacs · otranto · serab · miyane ·
                     kasri-sirin · salyan · kuba · tarki · zagem · nyala
② CANLI, YANLIŞ MADDE  🔴 `ahar` 200 döndü — açılan madde **âhâr**
                     (hattatlıkta kâğıt terbiyesi, müellif Uğur Derman).
                     Şehir maddesi DEĞİL. `ordu`/`saray`/`cin` deseninin
                     BEŞİNCİ vakası.
                     🔴 `sina` 200 döndü — açılan madde **SÎNÂ** (dinî/
                     Kur'ânî konu, müellif Mustafa Sinanoğlu). ALTINCI vaka.
④ BOİLERPLATE GÖVDE  `hersek` (2378 bayt) · `sennar` (2434 bayt) — madde
                     var ama içerik gelmedi ⇒ "TDV'de yok" DEMEDİM,
                     "çekilemedi" yazdım.
🟢 KAPSAYICI MADDE    dar slug tutmayınca genel madde denendi ve TUTTU:
                     klis · bihac · dalmacya · macaristan · erdel · varad ·
                     tebriz · sirvan · luristan · hemedan · gurcistan ·
                     darfur · kordofan · italya · gedik-ahmed-pasa
```
📌 Ve `§4 TANECİKLİK boşluğu` bu turda 13 kayıtta yaşandı: TDV Dârfûr'u
**kapsıyor** ama Burâm · Cenîne · Kutum gibi **kasabaları adıyla saymıyor.**
Kural gereği bu meşru — ve `kaynak:` alanında **açıkça** yazıldı.

## 12. Bu bölümde ölçmediklerim

- **Bölge poligonlarının ne kadar büyüyeceği ölçülmedi** — motor gerekir.
- `HUKUM` güvenli 10 kaydın hiçbiri için **ikinci bir akademik kaynak
  aranmadı**; TDV susunca tarihsel bağlamdan hüküm verildi ve **öyle
  damgalandı.**
- Otranto'nun 11 aylık dönemde sancak yapılıp yapılmadığı **bulunamadı.**
- `tur:"bolge"` 5 kaydın kademe alması gerekip gerekmediğine **karar
  vermedim** — koordinatöre soru olarak bıraktım.

---

# BÖLÜM III — DÜZELTME: 35 → 38, ve kusur BENDEYDİ

Bölüm II'de *"45 ↔ 40 farkının kaynağını **ölçmedim**"* diye yazmıştım.
Ölçtüm — **ve kendi çıkarımım çürüdü.**

## 13. Yanlış çıkarım

Bölüm I'de şöyle yazmıştım:
> *"③ TERS ÇELİŞKİ: Osmanlı olmuş ama k0 kalmış = 40 (sen 45 demiştin;
> farkı **`kasitli_bosluk` ayırınca** 40 çıkıyor)"*

**Ölçüm:**
```
k0 + Osmanlı, süzgeçsiz              45
  − kasitli_bosluk                   45   ← HİÇ ELEMEDİ
  − kasitli_bosluk VE bos            40
```
⇒ Farkı yapan `kasitli_bosluk` **değil**, `bos:` alanı. Sayı (40) doğruydu,
**sebebi yanlış söyledim.** `§11`: *"ölçtüğüm şu, çıkardığım şu"* — ben
ikisini tek cümlede birleştirmiştim ve çıkarım, ölçümün güvenilirliğini
ödünç almıştı.

## 14. 🔴 Ve yanlış çıkarımın ARDINDA GERÇEK BİR KAYIP VARDI

Elenen 5 kaydın hepsi `bos:"devletsiz"` · `neden:"1744 öncesi Necid'de
merkezî devlet denetimi yoktu"` · ve hepsinin **tek bir `v:` dönemi var:**
`1818-09-09 → 1824-06-01`, `k:"Mısır (İbrâhim Paşa)"`.

```
Nefud çölü        tur:"bolge"   → elenmesi DOĞRU
Necid içi         tur:"bolge"   → elenmesi DOĞRU
Buraydâ (Kasîm)   tur:"sehir"   → 🔴 GERÇEK KASABA, elenmesi YANLIŞ
Uneyze            tur:"sehir"   → 🔴 GERÇEK KASABA
Şakrâ             tur:"sehir"   → 🔴 GERÇEK KASABA
```
Süzgecim `bos:` taşıyan **her** kaydı "yerleşim değil" saydı. Oysa `bos:`
o noktanın **bir dönem sahipsiz olduğunu** söylüyor, **kasaba olmadığını
değil.** ⇒ *"Ölçüm doğru, evren dar"* — bu turda **kendi aletimde.**

## 15. Çare: üreteç artık EVRENİ de sınıyor

Sayıyı düzeltmek yetmezdi; aynı hata bir daha olabilirdi. Üretece bir
kapsama sınavı kondu:
```
EVREN: k0+Osmanlı 45 = bolge 7 + tabloda 38 + KAPSANMAYAN 0
```
Kapsanmayan bir kayıt kalırsa **adıyla basılıyor**, ayrıca `BOLGE_DISI`
listesindeki her ad gerçekten `tur:"bolge"` mi diye denetleniyor.
📌 `§11`in *"bir denetimin KAPSAMI, doğruluğundan ayrı ölçülür"* kuralı.

## 16. Eklenen üç kayıt

| yerleşim | k | m | dayanak |
|---|---|---|---|
| Buraydâ (Kasîm) | 4 | Medine | TDV necid + medine |
| Uneyze | 4 | Medine | aynı |
| Şakrâ | 4 | Medine | aynı |

**Kaynak zinciri:**
```
TDV necid   "Necd-i Hicâzî Kasîm, Cebelişemmer, Veşm, Mahmel ve Südeyr..."
            ⇒ Kasîm ve Veşm adlı alt bölgeler VAR; TDV bu KASABALARA
              kademe VERMİYOR
TDV medine  "İbrâhim Paşa'yı Medine'ye ve Kuzey Arabistan taraflarına
             gönderdi" · "Dir'iye'yi ele geçirdiğinde (Eylül 1818) önde
             gelen Vehhâbî liderleri Medine'de teşhir edildi"
            ⇒ seferin idarî çıpası MEDİNE
```
⚠️ **Riyad kasten seçilmedi:** k1 ve daha yakın (155-326 km), ama TDV riyad
*"Abdullah **1824'te** aldığı ... Riyad'ı idare merkezi yaptı"* diyor — yani
Riyad merkez olduğunda bu dönem **bitiyor.** Çağdaş çıpa Medine'dir.
📌 `§3.5`in *hayalet devlet* dersinin merkez tarafı: bir merkezi, **merkez
olmadığı tarihte** çıpa yapmak aynı hatadır.

**Slug sınavı:** `burayda` · `kasim` · `kasim--bolge` · `uneyze` · `unayza` ·
`sakra` · `diriyye` → **hepsi 302, ÖLÜ.** Canlı: `necid` · `riyad` ·
`medine` · `diriye`.

## 17. Güncel teslim

```
data/yer_yama_kademe.js → window.YER_YAMA_KADEME
38 kayıt · k2=3 · k3=5 · k4=30
güven: KESİN 2 · GEREKÇELİ 26 · HÜKÜM 10
sınav: 38/38 geçti · 0 red · KAPSANMAYAN 0
node ile ayrıştırıldı: 38 kayıt, tek ad alanı
```
Tavan sınavı üç yeni kayıtta da gevşek (yarıçap 15 · 15 · 41 km ≪ 280)
⇒ **45/45 · harita boyaması değişmiyor** hükmü ayakta.

---

# BÖLÜM IV — KALEM ②: 1140 yabancı `k0`

Emre'nin kararı üzerine (*"k0 bırakmayacak şekilde ve Osmanlı'ya öncelik
vererek sıra ile bitir"*). **Teslim: `data/yer_yama_kademe2.js` →
`window.YER_YAMA_KADEME2`, 1091 kayıt.**

## 18. 🔴 ÖNCE TABAN YENİDEN ÖLÇÜLDÜ — VE KAYMIŞTI

Koşu bitti, `data/*.js` serbest kaldı. `§11`: *"bir dosya bağlandığı gün,
o veriye bakan BÜTÜN ölçüm aletlerinin tabanı yeniden doğrulanır."*
```
                   ölçüm (17:19)   ölçüm (17:55)
kasitli_bosluk           197            178      −19
kalem ② evreni          1126           1140      +14
girdi dosyası             53             55       +2
```
⇒ Şartnameye yazdığım **1126 bayatlamıştı.** Doğru sayı **1140**.
🟢 Ve kalem ①'in 38 kaydı denetlendi: **kayıp 0 · artık k0 olmayan 0** —
yama hâlâ geçerli.

## 19. ÖLÇÜT — ve niçin `k2` HİÇ KULLANILMADI

Emre üç şart koydu: *kaynaklı olsun · uydurma, emin değilsen k3 · zaman
boyutunu not et.* Ölçüt buna göre kuruldu:

| kademe | ölçüt | sayı | dayanak |
|---|---|---|---|
| **k1** | künyenin `baskent` alanı noktayı **adıyla** gösteriyor, ya da `kd:`te `k:1` zaten beyan edilmiş | **58** | `data/devletler.js` |
| **k4** | `tur:"kale"` ve başkent değil | **129** | veri alanı |
| **k3** | öteki hepsi | **904** | *"emin değilsen k3"* |
| — | `tur:"bolge"` | 49 | **dokunulmadı** |

🔴 **`k2` kasten kullanılmadı.** *"Eyalet/bölge merkezi"* için veride
**kaynaklı bir işaret yok**; uydurmak yerine k3 yazıldı. Emre'nin kendi
kuralı: *"az vermek çok vermekten iyi."*

🟢 **Ve ölçütün en değerli yanı: `baskent` alanı ZATEN VARDI.** 431 künyenin
430'unda dolu. Yeni bir alan icat etmeye, yeni bir kaynak taramasına gerek
kalmadı — `§11`in *"bir alan tasarlamadan önce var olup olmadığını ölç"*
kuralı bu sefer **ilk hamlede** uygulandı.

## 20. 🟢 HARİTA ETKİSİ — EMRE'NİN BEKLEDİĞİNDEN KÜÇÜK

Emre *"varsın bazı şehirlere kademe puanı verilince 200 km veya 400 km'ye
çıksın, önemli değil"* dedi — yani genişlemeyi **göze aldı.** Ölçüm şunu
söylüyor:

```
k3 = 280 km = k0'ın BUGÜNKÜ tavanı  ⇒ 904 kayıtta GEOMETRİK OLARAK
                                       HİÇBİR ŞEY DEĞİŞMEZ
k1 = 700 km · 58 nokta              ⇒ tavan HİÇBİRİNDE bağlamıyor
                                       (hepsi yoğun bölgede)  DEĞİŞEN: 0
k4 = 140 km · 129 nokta             ⇒ DEĞİŞEN: 4, ve dördü de KÜÇÜLÜYOR
```
**HÜCRESİ DEĞİŞEN TOPLAM: 4 / 1091**
```
Almatı (Vernıy)      en yakın 365 km ⇒ yarıçap 183 → 140
Sokotra              345 → 172 → 140
Yinchuan (Ningxia)   343 → 172 → 140
Ket Ostrogu (Ketsk)  324 → 162 → 140
```
⇒ ***Hiçbir şey ÇIKMIYOR; yalnız dört kale KÜÇÜLÜYOR*** — ve küçülme,
Emre'nin 200 km işinde istediği yönün ta kendisi.
📌 Yani `k0`ı bertaraf etmek ile 200 km tavanı **çakışmıyormuş.** Bölüm
I'de bildirdiğim çakışma **gerçekti** (k0→k2 yapılsaydı +%50 olacaktı) —
ama **kaynaklı ölçüt k2 üretmediği için** çakışma doğmadı.

## 21. ⚠️ KAÇIRMA ORANI — açıkça yazıyorum

```
künyelerdeki farklı başkent adı           455
hiçbir noktayla eşleşmeyen                166   (%36)
  bulanık arandı                           19
    ELLE ONAYLANDI                          9
    REDDEDİLDİ                             10
  kalan gerçek kaçırma                    147
```
**Reddedilen 10'un 5'i BAŞKA ŞEHİRDİ** — bulanık eşleşmenin sessiz yanlış
ürettiğinin canlı kanıtı:
```
erivan ≈ Merîvan          ras ≈ Krasnovodsk       sis ≈ Cēsis (Wenden)
dhar ≈ Câlandhar          afyonkarahisar ≈ Hisar
```
Ötekiler: `addis ababa` (nokta yok) · `brunei bölgesi` (künye *"kesin merkez
standart kaynakta belirtilmemiş"* diyor — **kaynak bilmediğini söylüyor,
ben de yazmadım**) · üçü mükerrer.

**Onaylanan 9:** Yeni Ürgenç · Ryazan · Johor · Samudra Pasai ·
Kilwa Kisiwani · Çerkask (Razdory) · Tümen (Çimgi-Tura) · Edinburg ·
Lüksemburg — dokuzu da künye kimliğiyle **teyit edildi.**

📌 Kalan 147 kaçırma çoğunlukla ya noktası olmayan şehirler (Canberra ·
Bogota · Austin) ya da Osmanlı kayıtları (kapsam dışı). **Ve kaçırmanın
bedeli sıfır: kaçırılan başkent k3 kalır, k3 = k0 = 280 km.**

## 22. 🟡 EMRE'NİN ÜÇÜNCÜ ŞARTI — ZAMAN ÇAKIŞMASI, AYRI LİSTE

*"Cezayir/Budin/Kahire Osmanlı'da eyalet merkezi, öncesinde başkent.
Çakışanları AYRI listele."* Ölçüldü — **ve çakışma bu kümede değil,
OSMANLI kümesinde:**
```
kalem ② evreninde kd: kademesi zamanla değişen:  0
bütün veride nokta-künye çakışması:            101 çift · 74 FARKLI NOKTA
   🔴 ÖRTÜŞÜYOR                  49
   ÖNCE başkent, SONRA Osmanlı   35
   ÖNCE Osmanlı, SONRA başkent   17
```
**Emre'nin saydığı örnekler birebir çıktı:**
```
Cezayir  k2  cezayir-ocagi 1516-1830 ↔ osm 1519-1830        ÖRTÜŞÜYOR
Bağdat   k2  celayirli 1340-1431     ↔ osm 1534-1917        ÖNCE başkent
Belgrad  k2  sirp-despotlugu 1402-59 ↔ osm 1521-1878        ÖNCE başkent
         k2  sirbistan-kralligi 1882 ↔ osm ...1878          SONRA başkent
Atina    k2  atina-dukaligi 1205-1458 ↔ osm 1456-1833       ÖRTÜŞÜYOR
Bükreş   k2  eflak 1330-1859          ↔ osm 1462-1878       ÖRTÜŞÜYOR
```
⇒ **74 noktanın `k:` alanı iki farklı gerçeği aynı anda söylemek zorunda.**
Zamanlı karşılığı `kd:` ve o yalnız 190 kayıtta dolu. **Bu ayrı bir iştir,
dokunmadım** — liste `scratchpad/k2_zaman.json`da, istenirse teslim ederim.

## 23. 🔴 YAN BULGU — İSKOÇYA HİÇ BOYANMIYOR

`Edinburg` doğrulanırken çıktı:
```
künye  iskocya   843-01-01 .. 1707-05-01   baskent: "Scone → Edinburgh"
nokta  Edinburg  s: kimlikleri → YALNIZ `ingiltere`
```
⇒ İskoçya künyesi **864 yıl** yaşıyor ve haritada **hiç görünmüyor**;
Edinburg 1707 öncesinde de İngiltere boyanıyor. `§3.5`teki *hayalet devlet*
sınıfının **ters yüzü**: orada var olmayan devlet boyanıyordu, burada
**var olan devlet hiç boyanmıyor.**
⚠️ Kaç künyenin daha bu durumda olduğunu **ölçmedim** — bir kalem iş, ve
`Değişmez 4`ün göremediği sınıf. İstenirse ölçerim.

## 24. Bu bölümde ölçmediklerim

- **k2 hiç atanmadı** — kaynaklı işaret yok. Bir *"büyük liman / bölge
  merkezi"* ölçütü kurulabilir mi, **ölçmedim.**
- 147 gerçek kaçırmanın kaçının atlasta noktası olduğu **tek tek
  bakılmadı.**
- 74 zaman çakışmasının **hiçbiri düzeltilmedi** — ayrı iş.
- İskoçya gibi *"künyesi var, hiç boyanmayan"* devletlerin **sayısı
  ölçülmedi.**
- 904 `k3` kaydının hiçbiri için **ayrı kaynak okunmadı** — varsayılan
  kademe olduğu `kaynak:` alanında **açıkça** yazıyor.
