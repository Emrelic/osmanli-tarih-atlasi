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
