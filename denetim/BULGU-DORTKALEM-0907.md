# BULGU — DÖRT KALEM · 0907

**Oturum:** DORT-KALEM-0907 · `local_a6f8263a-6b20-402f-9873-fa068acf6e26`
**Şartname:** `oturumlar/DORT-KALEM-0907.md` · hüküm M-3140
**Cins:** ÖLÇÜM + ÖNERİ. Veri yazılmadı, `data/`+`arac/` DONUK (koşu 8).

---

## ⓪ TESLİM — ÜÇLÜ KURALLA (`§7.1④`), DÖRT KALEM

| kalem | ÖLÇTÜM | BULAMADIM | İSTİYORUM |
|---|---|---|---|
| ① Zapolya | künye yok ✓ · **28 dönem** `macaristan` künyesini aşıyor | `1570` TDV `erdel`de **0 cümle** | künye kararı — **ama 1541-1570 aralığı ÇÜRÜDÜ** |
| ② Boğdan | tarif edilen blok **veride YOK** · gerçek blok **1456→1878** | — | kalemin **yeniden tarifi** |
| ③ Faysal | kırılma **VAR: 31 yerleşim** · çekirdekte madde **YOK** | — | madde uygulansın (yazıldı) |
| ④ Mısır ordusu | 3 ✓ · `isg:` **247/247 kimlik taşıyor**, `v:` **hiç** | — | `isg:`e taşınsın (öneri yazıldı) |

🔴 **Şartnamenin `§6` öncül damgalarından ÜÇÜ çürüdü, biri doğrulandı.**

---

## ① ZAPOLYA — künye yokluğu DOĞRU, ama **TARİH ARALIĞI ÇÜRÜDÜ**

**🟢 ÖLÇTÜM (senin damgan doğruydu):** `devletler.js`te Zapolya / Doğu Macar
künyesi **YOK**. Aday adlar tarandı; en yakın olanlar:
```
macaristan            1000-01-01 → 1526-08-29   (Mohaç'ta biter)
macaristan-habsburg   1526-08-29 → 1918-11-16
erdel                 1570-01-01 → 1711-04-30
orta-macar-kralligi   1682-09-16 → 1688-01-17
```

**🔴 VE VERİ O BOŞLUĞU `macaristan`ı UZATARAK DOLDURMUŞ:**
```
`macaristan` veride 60 dönem · 59 yerleşim
künyeyi AŞAN: 28 dönem
   14'ü 1526-09-01'de biter (3 gün taşma — 400 günlük tolerans yutuyor)
   🔴 gerçek aşımlar:  Peçuy 1543-07-21 · Estergon 1543-08-10 ·
      İstolni Belgrad 1543-08-10 · Kalocsa 1541-08-29 · Temeşvar 1552-07-27
      → künyeden 15-26 YIL sonra
denetle.4c bunların 15'ini görüyor (400 gün üstü olanlar)
```
📌 Bu tarihler **Osmanlı fetih günleridir** (Estergon ve İstolni Belgrad 1543,
Peçuy 1543, Temeşvar 1552) — yani veri modeli doğru bir şey yapıyor: o
topraklar 1526-1543 arası Macar kalmıştı. **Kusur modelde değil, kimlikte:**
kullanılabilecek bir künye olmadığı için ölmüş bir künye uzatılmış.

### 🔴 DEVRALDIĞIM ARALIK — TDV İKİ UCUNU DA ÇÜRÜTTÜ
```
devraldığım   "1541-1570 Doğu Macar Krallığı"
TDV `budin`   «asilzadelerden bir kısmı Macar Krallığı'na János Szapolyai'yi
               (10 KASIM 1526), diğer kısmı … Ferdinand'ı (17 Aralık 1526)
               seçmişti»
              «1527 Ağustosunda Buda'yı ele geçiren Ferdinand'a karşı János
               Szapolyai Sultan Süleyman'dan yardım istedi … kale ile şehri
               Szapolyai'ye bıraktı»
TDV `erdel`   «Böylece 1541'DE ERDEL Osmanlılar'a bağlı HARAÇGÜZÂR
               STATÜSÜNDE BİR VOYVODALIK haline geldi»
              `1570` → **0 CÜMLE** · `Speyer` → **0 CÜMLE**
```
⇒ **BAŞLANGIÇ:** Szapolyai **10 Kasım 1526**'da kral seçildi — 1541 değil.
⇒ **1541** başka bir olay: Budin Osmanlı eyaleti oldu **ve Erdel tâbi
voyvodalık** haline geldi.
⇒ **1570:** TDV `erdel` bu tarihi **hiç anmıyor** ⇒ `bulunamadı`.

### 🔴 VE BİR YAN BULGU — `erdel` KÜNYESİ 29 YIL GEÇ AÇILIYOR OLABİLİR
TDV Erdel'in voyvodalık hâline gelişini **1541**'e koyuyor; künye
**1570-01-01**'de açılıyor. Bu benim kalemim değil ama kaydediliyor.

🔴 **HÜKÜM VERMİYORUM.** Künye açmak 28 dönemi ve iki kimliği bağlar; ve
şartnamenin verdiği aralık çürüdüğü için **doğru aralık ayrıca kararlaştırılmalı**
(1526-11-10 → 1541? → 1570? üçü de savunulabilir ve üçü farklı şey boyar).
`§3.5.0`: ardıl künye açmadan önce penceresinin ne kapatacağı ölçülür.

---

## ② BOĞDAN — 🔴 KALEMİN TARİFİ VERİYLE UYUŞMUYOR

**Şartname:** *"veride Boğdan `1856-03-30 → 1878-07-13` TEK BLOK"*

**ÖLÇÜM:**
```
`bogdan` kimliği veride: 14 dönem · 14 yerleşim
   bitiş günleri: {1456-06-01: 14}   ← HEPSİ 1456'da biter
   1859-01-24'ten sonra biten: 0
   `1856-03-30` `bogdan`da: 0
```
⇒ Tarif edilen blok **`bogdan` kimliğinde HİÇ YOK.**

**GERÇEK YAPI (Yaş ve Bükreş zincirleri):**
```
Yaş     s:bogdan 1281-01-01 → 1456-06-01
        v: "Boğdan Voyvodalığı"  1456-06-01 → 1878-07-13   ← 422 YILLIK TEK BLOK
        s:romanya 1878-07-13 → 1881-03-26 → romanya-kralligi
Bükreş  s:eflak 1281-01-01 → 1462-06-01
        v: "Eflak Voyvodalığı"   1462-06-01 → 1878-07-13   ← aynı
```
⇒ Blok **var ama `v:` katmanında ve 1456'da başlıyor**, 1856'da değil. Ve yine
`k:` alanında **serbest metin** — kalem ④'ün birebir aynı yapısal eksiği.

**🟡 `1859-01-24` — künyelerde ZATEN İŞLENMİŞ, veride KISMEN:**
```
bogdan künye 1359-01-01 → 1859-01-24     ✓
eflak  künye 1330-01-01 → 1859-01-24     ✓
romanya künye f: 1859-01-24              ✓
veride kırılma VAR: eflak t ×2 · romanya f ×2   ← ama Yaş/Bükreş'te DEĞİL
```
🔴 ⇒ Atlas **kendi içinde tutarsız**: bazı yerleşimler 1859-01-24'te kırılıyor,
**iki başkent kırılmıyor** ve `v:` bloğu 1878'e kadar sürüyor.

🔴 **HÜKÜM VERMİYORUM, KALEMİ YENİDEN TARİF EDİYORUM.** Gerçek soru
*"1856 bloğunu 1859'da böl"* değil:
```
① `v:` bloğu 1456→1878 · bölünme noktası 1859-01-24 künyelerde ZATEN var
② ama `v:` kimlik taşıyamıyor ⇒ bölsen bile "Romanya" ifade edilemez
③ ve kırılma bazı kayıtlarda inmiş, iki başkentte inmemiş — ÖNCE O
   TUTARSIZLIK sayılmalı (kaç kayıt kırılıyor, kaç kayıt kırılmıyor)
```
⚠️ Ve `1859-01-24` tarihini **kaynağa sormadım** — künyelerin üçünde birden
duruyor olması onu *atlas içinde tutarlı* yapar, **kaynaklı yapmaz.**
Damga: **`okumadım`**, `bulunamadı` değil.

---

## ③ FAYSAL — 🟢 KALEM KAPANDI, MADDE YAZILDI

⚪ *"ölçmedim"* damgan kapandı:
```
kırılma VAR:  s:ingiltere t: ×31  →  s:irak-kralligi f: ×31   (31 yerleşim)
künye `irak-kralligi` f: 1921-08-23 — veriyle BİREBİR
çekirdekte ±30 gün: 1 madde, ve o da 21 gün ötede «Sakarya Meydan Muharebesi»
```
🔴 Bu, `Değişmez 2`yi doğuran vakanın ta kendisi: *"değişim, o güne rastgele
denk gelen ALAKASIZ bir maddenin altında belirir."* 31 yerleşim el değiştiriyor.

🟢 **KAYNAK — TDV `faysal-i` (7.800 kar, kesilmedi), gün ADIYLA:**
> *"Faysal'ın krallığı Arap Devlet Konseyi tarafından onaylandıktan sonra bir
> referandum yapılarak pekiştirildi ve **Faysal 23 Ağustos 1921 tarihinde
> tahta çıktı.**"*

⇒ Madde yazıldı: **`denetim/YAMA-DORTKALEM-KRONOLOJI-0907.json`**
🔴 ÇEKİRDEĞE (`data/olaylar_ek*.js`) — `kronoloji*.js`e DEĞİL.

---

## ④ MISIR ORDUSU — 🟢 KALEM KAPANDI, KARAR `isg:`

3 sayın **doğrulandı** (Kütahya · Konya · Karaman). Karar **iki bağımsız ayaktan**:

**AYAK 1 — ŞEMA (ölçüldü):**
```
isg:  f 247 · t 247 · d 247 · kaynak 152     ← d: 247/247, HEPSİ kimlik taşıyor
v:    f 429 · t 429 · k 373 · statu 421 · kid 291 · enklav 1   ← d: HİÇ YOK
```
🔴 Mevcut kayıt kimliği `k:` alanına **serbest metin** yazmış
(`"Mısır ordusu (işgal)"`) — çünkü `v:` onu taşıyamıyor. Etiketin kendisi
zaten *"(işgal)"* diyor.
`misir-kavalali` künyesi **1805-07-03 → 1914-12-18** pencereyi kapsıyor 🟢

**AYAK 2 — KAYNAĞIN YÜKLEMİ (TDV `kavalali-mehmed-ali-pasa`, 27.321 kar):**
> *"Konya üzerine **hareket eden** İbrâhim Paşa kumandasındaki Mısır birlikleri…"*
> *"**Kütahya'da bulunan** İbrâhim Paşa'ya gönderildi (30 Mart 1833)"*
> *"**Adana'nın** İbrâhim Paşa'ya **muhassıllık olarak verilmesine** razı oldu"*

⇒ Üçüncü alıntı ayrımı kesinleştiriyor: bir **tasarruf devri gerçekten oldu —
ama Adana için**, Konya/Kütahya için değil. Konya ve Kütahya **işgal edildi ve
boşaltıldı** (`t: 1833-06-30`).

⇒ Öneri: **`denetim/YAMA-DORTKALEM-ISG-0907.json`**
⚫ Ve `.js` yaması YAZMADIM: `_sahiplik_uygula.py`nin bir dönemi `v:`den
**çıkarıp** `isg:`e taşıyabildiğini **ölçmedim**; alet dönem EKLİYOR, silmek
ayrı iş. Ölçmeden yazsaydım aynı pencerede **iki örtü** doğabilirdi.

---

## ⑤ İKİ KALEMİN ORTAK KÖKÜ — ve o bir ŞEMA EKSİĞİ

② ve ④ **aynı şeyin iki yüzü**: `v:` katmanı kimlik taşıyamıyor, ve iki ayrı
yerde kimlik `k:` alanına **serbest metin** olarak sıkıştırılmış:
```
"Boğdan Voyvodalığı"      ← 422 yıllık blok
"Mısır ordusu (işgal)"    ← 7 aylık işgal
```
📌 `§11`in 5 Eylül ölçümü (*"`v:` dönemlerinin kimlik alanı yok — 423 dönem"*)
bugün **429**; ve bu iki kalem onun **görünen sonuçları.** Şemayı düzeltmek
benim kalemim değil, ama iki kalemin de niçin var olduğunu o açıklıyor.

---

## ⑥ NE ÖLÇMEDİM — `ölçmedim` diye yazıyorum

```
⚫ `1859-01-24`ün KAYNAĞI — künyelerde tutarlı, ama kaynağa SORULMADI (`okumadım`)
⚫ ②'de kaç kayıt 1859-01-24'te kırılıyor / kaç kayıt kırılmıyor — SAYILMADI
⚫ `_sahiplik_uygula.py`nin `v:`→`isg:` TAŞIMA yeteneği
⚫ ③'ün maddesinin `Değişmez 2s` sayacını kaça indireceği
⚫ `erdel` künyesinin 1570 yerine 1541'de açılıp açılmayacağı — kalemim DEĞİL
⚫ `yer_id: "Bağdat"` atlasta var mı — uygulayan kontrol etsin
```

## ⑦ KOMUTLAR / DOSYALAR

```
denetim/YAMA-DORTKALEM-KRONOLOJI-0907.json   kalem ③ — madde, kaynaklı
denetim/YAMA-DORTKALEM-ISG-0907.json         kalem ④ — v: → isg:, iki ayaklı
denetim/BULGU-DORTKALEM-0907.md              bu dosya
```
Gövde çekimi için bugün kurduğum `denetim/ARAC-KAYNAK-DENETIM-0907.py`in
`govde_cek`i kullanıldı — **yeniden yazılmadı**, ve gövdeler kesilmedi.
