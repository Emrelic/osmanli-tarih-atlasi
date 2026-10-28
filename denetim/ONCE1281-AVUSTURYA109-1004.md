# ONCE1281-AVUSTURYA109-1004 — 109 noktanın tek günde (1918-11-11) el değiştirmesi

Oturum: ONCE1281-MOTOR-UFUK-1004 · 5 Ekim 2026 · görev: YILDIRIM BAYEZIT (send_message)
Önceki: [`ONCE1281-KUNYE-GUNU-1004.md`](ONCE1281-KUNYE-GUNU-1004.md) §3 ⚪ (en büyük şüpheli grup).
**Veriye yazılmadı.**

## 0. Evren (`girdi.yukle()`, HEAD `87e9f851`)

`s:` dönemi `d: avusturya`, `t: 1918-11-11` olan **109 nokta**; 1918-11-11'deki halef (atlas):
`yugoslavya` 39 · `macaristan-naiplik` 23 · `cekoslovakya` 19 · `sirbistan-kralligi` 16 ·
`romanya-kralligi` 8 · `polonya` 3 · `italya` 1. Liste: scratchpad `avus109.json`.
`avusturya` künyesinin `t`'si = 1918-11-11 ⇒ hepsi künye gününü devralmış (KUNYE-GUNU sınıfı).

## 1. Yöntem

Nokta başına: ① halefin (ya da ulusal konseyinin / ordusunun) BU YERİ fiilen ele aldığı gün,
② hukukî devir belgesi (Saint-Germain 1919 / Trianon 1920 / Rapallo 1920), ③ atlasın halefi doğru mu.
Kova: KAYNAKLI (yer için gün/ay) · KABA (yalnız dönem/bölge) · BULUNAMADI. Kaynak araştırmasını bir
alt ajan yaptı (WebFetch YOK, ham metin); alıntıların bir örneklemini kendim açacağım.
Değişmez 2 borcu ayrıca ölçülecek: yeni her gün için `olaylar*.js` + `kronoloji_sinir*.js`
evreninde madde VAR mı, ve madde YERİ anıyor mu (`D261`).

## 2. ÖNGÖRÜ — ölçümden ÖNCE yazıldı

- KAYNAKLI **~55** · KABA **~35** · BULUNAMADI **~20** (109'da).
- Kaynaklı/kaba gün bulunanların **~%90'ı 1918-11-11'den FARKLI** — fiilî devir 28 Ekim (Prag,
  Çekoslovakya), 29 Ekim (Zagreb/Ljubljana, SHS), 31 Ekim–1 Kasım (Krakov, Lviv çatışması),
  3 Kasım (Trieste), Kasım (Bukovina 28 Kasım), 1 Aralık (Transilvanya/Alba Iulia; Yugoslavya
  krallığı), 1919 başı (Bratislava 1 Ocak 1919; Transilvanya kasabaları Aralık 1918–Nisan 1919).
  1918-11-11 ile örtüşen: **≤5**.
- Ayrı günler: **6-10** farklı gün. Değişmez 2 evreninde bunların **yarısından azı** için madde var;
  YERİ ADIYLA anan madde **çok az** (bölge düzeyi maddeler).
- Halef şüphesi: `macaristan-naiplik` 23 ve `sirbistan-kralligi` 16 kovaları — Macaristan'daki
  noktaların 1918'de "avusturya"dan Macaristan'a "geçmesi" kimlik modelinin bir ürünü (Macar
  krallığı Avusturya'nın parçası değil, ortağıydı); Banat/Bačka'da Sırbistan ↔ Romanya ↔
  Macaristan çekişmesi bekliyorum.

## 3. Ölçüm

Nokta başına sonuç, alıntı, URL, işgal bilgisi: **[`ONCE1281-AVUSTURYA109-1004-noktalar.json`](ONCE1281-AVUSTURYA109-1004-noktalar.json)**
(109 kayıt; alanlar `ad · halef_atlas · halef_dogru · kova · fiili_gun · kaba_tarih · hukuki · kaynak ·
alinti · isgal · not_`). Araştırma: alt ajan (Opus; WebFetch YOK, urllib ham metin).
**Benim doğrulamam (kaynağı kendim açtım):** Zagreb — Hrvatska enciklopedija *"a 29. X. 1918. Hrvatski je
sabor raskinuo sve državnopravne veze s Austro-Ugarskom Monarhijom"* ✅ · Bosna-Hersek (21 nokta) —
BiH Parlamentosu *"Do 1. novembra 1918. … Austro-Ugarska monarhija je istog dana predala vlast ovom
vijeću"* ✅ · Kraków (krakow.pl) — bana boş gövde döndü, **açamadım** ⚪.

### 3.1 TEK SAYI

| kova | nokta | ne demek |
|---|---|---|
| 🟢 **KAYNAKLI** (yer için gün/ay) | **22** | Prag 28.X · Zagreb, Ljubljana, Hradec Králové, České Budějovice 29.X · Kraków, Budin, Peşte 31.X · Maribor 1.XI · Split 2.XI · Zadar 4.XI (İtalya) · Knin 7.XI · Lviv 22.XI · Brașov 7.XII · Cluj 24.XII · Košice 29.XII · Satu Mare 19.IV.1919 · Oradea 20.IV.1919 · Timișoara 3.VIII.1919 · Brno, Olomouc, Bratislava yalnız ay |
| 🟡 KABA (bölge/ülke günü, yer adı kaynakta yok) | **75** | Hırvatistan-Slavonya-Dalmaçya 29.X (17) · Macaristan 31.X (21) · Bosna-Hersek 1.XI (21) · … |
| ⚪ BULUNAMADI | **12** | Slovakya'nın Trenčín, Nitra, Nové Zámky, Komárno günleri yalnız sk.wikipedia'da … |

🔴 **Koordinatörün sorusu: 109 noktanın 22'si için yer düzeyinde KAYNAKLI devir günü var; 75'i için
bölge düzeyinde kaba gün; 12'si bulunamadı.**
🔴 **1918-11-11 ile örtüşen: 0.** Hiçbir kaynak bu 109 yerden birinin değişimini 11 Kasım'a
tarihlemiyor — ne yer ne bölge düzeyinde. 1918-11-11 tamamen `avusturya` künyesinden devralınmış.

### 3.2 Değişmez 2 borcu — simülasyonla ÖLÇÜLDÜ

`denetle.degismez2 / kapsam_disi / yil_temsili_ayir` modül olarak çağrıldı; önerilen günler bellekte
uygulandı (gün olan 85 nokta: KAYNAKLI 19 + KABA 66; ay/yıl düzeyindeki 24 atlandı), diske yazılmadı.

| | Değişmez 2 | 2s kırılma | **2s AÇIK** | kapsam dışı |
|---|---|---|---|---|
| BUGÜN | 623 / 0 | 1711 | **189** | 792 |
| ÖNERİ | 623 / 0 | 1725 | **191** | 792 |

⇒ 15 ayrı yeni gün; **13'ü mevcut maddelerle kapanıyor**. `±30 gün` ve yer şartını sağlayanlar:
1918-10-28 "Çekoslovakya'nın bağımsızlık ilânı", 1918-12-01 "Sırp-Hırvat-Sloven Krallığı ile Büyük
Romanya'nın…", 1918-11-03 "Villa Giusti" … **Madde BORCU: 2 kırılma** — Satu Mare (1919-04-19) ve Oradea
(1919-04-20): Romen ordusunun Kuzey Erdel/Partium'a ilerleyişi (Nisan 1919) için madde YOK; en yakın
"madde" Kars'ın İngiliz işgali (alâkasız).
⚠️ Döngü uyarısı (`D260`): evrende bir **"1918-11-11 Avusturya-Macaristan mirasının ardıl devletlere
geçişi"** maddesi var — bugünkü 109 kırılmayı "senkron" yapan madde bu. Kırılmanın kendisi künye
gününden devralındığı için, bu madde büyük olasılıkla haritayı doğrulamıyor, haritayı tekrarlıyor.
Ölçmedim (maddenin kaynağına bakmadım).

### 3.3 🔴 Atlasın HALEFİ yanlış — 30 nokta (gün sorusundan BAĞIMSIZ)

| atlas halefi | nokta | doğrusu (alt ajan; kaynaklı) |
|---|---|---|
| `sirbistan-kralligi` | **16** — Bosna-Hersek noktaları | Bosna Sırbistan'a değil **Država SHS'e (1.XI.1918)**, sonra **Kraljevstvo SHS'e (1.XII.1918)** geçti. Atlas kendi içinde de tutarsız: 5 Bosna noktası `yugoslavya`. |
| `yugoslavya` | 6 | **Zadar → İtalya** (işgal 4.XI.1918, Rapallo 1920) · **Hvar, Korčula, Vis, Mljet** 1918-21 İtalyan işgali · (+1) |
| `cekoslovakya` | 4 | **Uzhhorod, Mukacheve** 1919'a kadar Macar idaresi · **Broumov, Jeseník** önce Deutschböhmen/Sudetenland |
| `polonya` | 2 | **Lviv** 1-22.XI.1918 Batı Ukrayna HC ↔ Polonya savaşı · **Yazlovets** Temmuz 1919'a kadar BUHC |
| `romanya-kralligi` | 1 | **Timișoara** önce Sırp, sonra Fransız işgali; Romanya'ya 3.VIII.1919 |
| `macaristan-naiplik` | 1 (+ hepsinde ad sorunu) | **Eisenstadt** 1921 Burgenland ile Avusturya'ya — atlasta yok · `macaristan-naiplik` (Krallık naipliği 1920) 1918-1920 için ANAKRONİK |

Ayrıca işgal örtüsü (`isg:`) atlasta bu yerlerin HİÇBİRİNDE yok; kaynakta 13 nokta için işgal var:
Pécs/Baranya Sırp işgali 14.XI.1918 – 22.VIII.1921 (MNL Baranya; Hornyák 2018 15.XI diyor — çelişki
notta), Szigetvár 18/19.XI.1918, Šibenik 6.XI.1918 – 12.VI.1921, Knin 19.XII.1918 – 4.IV.1921 …

### 3.4 Kaynak niteliği uyarıları (alt ajan)
Timișoara (Ziua de Vest, belediye kararına atıfla) ve Brașov (Adevărul; 7 ve 10 Aralık birlikte geçiyor)
**basına** dayanıyor · Košice bir müze tarihçisi röportajı · Saint-Germain/Trianon günleri genel bilgi,
alıntılanmadı · erişilemeyen: 1914-1918-online (bot doğrulaması), Hrčak (418), PWN ve Broumov tezi (429).

## 4. Öneriler (uygulama koordinatörde)

1. **Atlas düzeltmesinin modeli kararı önce:** `s:` de jure sahiplik. Fiilî devir (Ekim-Aralık 1918) mı
   yazılacak, hukukî devir (Saint-Germain 1920 / Trianon 1921) mı? Fiilî gün yazılırsa ara dönem
   `isg:` ile değil `s:` ile gösterilir. Bu, proje genelinde bir model kararı (Emre).
2. **Hemen yapılabilir, gün sorusundan bağımsız:** 16 Bosna noktasının halefi `sirbistan-kralligi` →
   SHS (künye var mı ölçmedim; `yugoslavya` 1.XII.1918 ise arada Država SHS dönemi için künye gerekebilir).
3. **Madde borcu 2:** Romen ordusunun Partium'a girişi (Nisan 1919) — kaynakla madde yazılmalı.
4. **`isg:` borcu 13 nokta:** Baranya Sırp işgali, Dalmaçya İtalyan işgali … ayrı kalem.
5. **Döngü kontrolü:** "1918-11-11 ardıl devletlere geçiş" maddesinin kaynağı açılmalı (`D260`).

## 5. Öngörü × ölçüm

| öngörü | ölçüm | |
|---|---|---|
| KAYNAKLI ~55 · KABA ~35 · BULUNAMADI ~20 | **22 · 75 · 12** | ❌ yer düzeyi gün beklediğimden az, bölge günü fazla |
| bulunanların ~%90'ı 1918-11-11'den farklı · örtüşen ≤5 | **%100 farklı · 0** | ✅ (daha keskin) |
| 6-10 ayrı gün | **15** | ❌ |
| yarısından azı için madde var · yeri anan çok az | 15 günün **13'ü** kapanıyor, borç 2 | ❌ evren beklediğimden dolu |
| halef şüphesi `macaristan-naiplik` ve Banat | doğrulandı ama en büyük halef hatası **Bosna (16, `sirbistan-kralligi`)** — öngörmedim | yarım |

## 6. ⑤ — "1918-11-11 ardıl devletlere geçiş" maddesi türetilmiş mi? (5 Ekim 2026)

### ÖNGÖRÜ — maddeyi açmadan ÖNCE
- **🔴 TÜRETİLMİŞ** bekliyorum. Bakacağım izler, sırayla: ① `ic_not_d` / `ic_not_*` alanında
  "haritaya" ya da "eski ifade" (D260 imzası) ② `d` metninde "Aynı tarihte … yerler/yerleşimler: …"
  liste son eki ③ `kaynak:` alanı: boş / `bulunamadı` / atlası ya da künyeyi gösteriyor mu, yoksa
  11 Kasım'ı TARİHLEYEN bağımsız bir cümle mi ④ maddenin dosyası ve yazıldığı commit — kırılmalarla
  aynı commit/partiye mi girmiş.
- Neden: 1918-11-11 hiçbir kaynakta 109 yerin günü değil (§3.1, 0 örtüşme); bu günü taşıyan tek
  bağımsız olay I. Karl'ın 11 Kasım bildirisi (Avusturya'daki yönetimden çekilme) — ardıl devletlere
  "geçiş" değil. Madde başlığı bir DEVİR anlatıyorsa kaynakla değil künyeyle yazılmıştır.
- Olası sonuç: madde bağımsız bir kaynak (ör. Karl'ın çekilmesi) gösteriyorsa 🟢 değil **karma**:
  kaynak gerçek ama 11 Kasım'ı başka bir olay için söylüyor (D211 ⑧ — rakamı taşıyan cümle neyi
  tarihliyor).

### ÖLÇÜM — ⑤ (maddeyi açtım; HEAD `2b8cad2e` baş = son)

Madde: **`data/olaylar_ok109.js` · `OLAYLAR_OK109[4]`** · `t: "1918-11-11"` · b: *"Avusturya-Macaristan
mirasının ardıl devletlere geçişi — altı devlet haritaya giriyor"* · `kaynak: "birinci-dunya-savasi"` ·
ilk girişi `0b32b45b` (2 Eylül 2026, "KRONOLOJI ok109 — AVUSTURYA-MACARISTAN'IN DAGILISI, dokuz madde").

🔴 **HÜKÜM: TÜRETİLMİŞ.** Dört iz, dördü de kaydın kendisinde:
1. **Kaynağı 11 Kasım'ı BAŞKA bir olay için söylüyor** (D211 ⑧). TDV `birinci-dunya-savasi` (açtım):
   *"Yenilgiyi kabul eden Avusturya 3 Kasım'da, Almanya da 11 Kasım'da silâhları bıraktılar."* — 11 Kasım
   ALMANYA'nın mütarekesi; Avusturya'nınki 3 Kasım; ardıl devletlere geçiş yok.
2. **Metin haritayı anlatıyor, tarihi değil:** *"Harita bu gün imparatorluk mirasının toplu devrini
   gösterir … harita bu ilanların toprak üzerindeki karşılığını tek güne toplar."*
3. **`ic_not_d` atlas sayıyor** (D260 imzası): *"eski ifade: Bu gün atlasta imparatorluk mirasının toplu
   devrini gösterir: **seksen dokuz yerleşim Avusturya kimliğinden çıkar**"* — maddenin eski hâli
   kırılmaların SAYISINI yazıyordu (bugün 109).
4. **Kendi metni gerçek günleri veriyor ve `t`'siyle çelişiyor:** *"Devrin kendisi tek bir günde olmadı —
   Çekoslovakya 28 Ekim'de, Avusturya Cumhuriyeti 30 Ekim'de, Macaristan halk cumhuriyeti 31 Ekim'de ilân
   edilmişti"* — madde, yanlış olduğunu bildiği bir günü haritaya uydurmak için yazılmış.
⇒ 109 kırılmanın "senkron ✓"u **kendi kendini doğrulama**dır: kırılma künyeden, madde kırılmadan.
Değişmez 2 bu kalemde hiçbir şey ölçmüyor. D260'ın (b) alt sınıfı GERÇEKLEŞMİŞ.

**Yan bulgu — komşu madde TDV ile tutarlı, ama başka kaynakla çelişiyor (D211 ⑥):** `OLAYLAR_OK109[5]`
`t: 1918-11-18` "İmparator Karl'ın çekilişi" — TDV `avusturya` (açtım): *"İmparatorun 18 Kasım'da devlet
işlerinden çekildiğini açıklamasıyla imparatorlukla birlikte hânedan da tarihe karışmış oldu."* — madde
TDV'ye sadık. Ama `olaylar_sessiz_borc_0919.js` (Parlament Österreich): *"11. November 1918: Kaiser Karl I.
erklärt sich … bereit, auf eine Teilhabe an den Regierungsgeschäften zu verzichten"* ve
`kronoloji_habsburg.js` aynı olayı 1918-11-11'e koyuyor. Aynı olay iki maddede iki gün; TDV 18, Avusturya
Parlamentosu 11 diyor. §4 "çelişirse TDV esastır" — ama Avusturya'nın kendi parlamentosu Avusturya iç
olayında birincil; HÜKÜM koordinatörde.

## 7. ② — Bosna 16 halef: `devletler.js` TARANDI (`girdi.oku_devletler()`)

| künye | `f` → `t` |
|---|---|
| `yugoslavya` "Sırp-Hırvat-Sloven Krallığı (SHS)" | **1918-12-01** → 1945-09-02 |
| Država SHS (Sloven-Hırvat-Sırp Devleti) | **YOK** (id/ad taraması: `shs`, `sloven`, `hırvat`, `yugoslav`, `drzava` — yalnız yukarıdaki + `hirvatistan-bagimsiz` 1941, `hirvatistan-kralligi` 925-1102, `bosna-*`) |

Bugünkü iki biçim, İKİSİ DE yanlış:
| biçim | nokta | sorun |
|---|---|---|
| `avusturya →1918-11-11 → sirbistan-kralligi →1918-12-01 → yugoslavya` | 16 Bosna | Bosna Sırbistan'a hiç geçmedi |
| `avusturya →1918-11-11 → yugoslavya` | 4 Bosna (Bosanska Dubica, Bosanski Novi, Bosanski Brod, Bosanska Krupa; alt ajan 5 dedi, süzgecim 4 buldu) + **35 Hırvatistan/Dalmaçya/Slovenya** | `yugoslavya` künyesi 1918-12-01'de doğuyor ⇒ **39 dönem künyenin doğumundan 20 gün ÖNCE** başlıyor (Değişmez 4d'nin "beklenen 324"ünün içinde, beyansız) |

**Doğrusu KAYNAKTAN** (Hrvatska enciklopedija, "Država Slovenaca, Hrvata i Srba" — açtım):
*"Obuhvaća razdoblje od objave Deklaracije Narodnoga vijeća SHS 19. X. 1918., odn. zaključaka Hrvatskoga
sabora 29. X. 1918. do proglašenja Kraljevstva Srba, Hrvata i Slovenaca u Beogradu 1. XII. 1918."* — ve
kapsamı: *"… u Hrvatskoj i Slavoniji s Rijekom, u Dalmaciji, Bosni i Hercegovini, Istri, Trstu, Kranjskoj,
… Bačkoj, Banatu, Baranji …"*. Bosna için devir günü: BiH Parlamentosu, 1.XI.1918 (§3).

**D205 sınıfı:** aşım değil, **kimlik yok** ⇒ ③'e (ardıl künye) en yakın: **künye AÇILMALI**.
Öneri (Emre kalemi, F6 emsali): `drzava-shs` · "Sloven-Hırvat-Sırp Devleti (Država SHS)" · `f: 1918-10-29`
(Sabor kararı; Narodno vijeće bildirisi 19.X) · `t: 1918-12-01` · `bolge: balkanlar` · kaynak HE yukarıdaki
cümle. Sonra 16 + 4 Bosna noktası `avusturya →1918-11-01 → drzava-shs →1918-12-01 → yugoslavya`; 35 Hırvat/
Sloven/Dalmaçya noktası `→1918-10-29 → drzava-shs →1918-12-01 → yugoslavya` (İtalyan işgali altındakiler hariç
— §3.3, ④'e bağlı). Künye inmeden **diff hazırlamadım** (künyesi olmayan kimlik boyanmaz, §8).

## 8. ③ — Madde borcu 2: hazır madde metinleri (kaynaklar AÇILDI ve TUTTU)

Değişmez 2 evrenine (öneri: `olaylar*.js` yeni bir dosya ya da `olaylar_ok109.js`'in sonu — dosya sahibi
koordinatör). Her biri yeri ADIYLA anıyor (`D261`).
```js
{ t:"1919-04-19", k:"siyaset", kapsam:"dis", etiket:["siyaset","konu-siyasi","konu-askeri"],
  b:"Romen ordusu Satu Mare'ye girdi — Macar Sovyet Cumhuriyeti idaresinin sonu",
  gun:"19 Nisan 1919", yer:"Szatmár (Satu Mare)", yer_id:"Szatmár (Satu Mare)",
  d:"21 Mart 1919'da Macaristan'da ilân edilen Sovyet Cumhuriyeti'nin Satu Mare'deki idaresi, Romen ordusunun 19 Nisan 1919'da (Paskalya Cumartesisi) şehre girmesiyle sona erdi; şehirde Romen idaresi kuruldu.",
  kaynak:"Muzeul Județean Satu Mare, '100 de ani de la eliberarea Sătmarului și instaurarea administrației românești' (muzeusm.ro): 'Republica Sfaturilor din Ungaria … (21 martie-19 aprilie 1919)' · 'La 19 aprilie 1919, în sâmbăta de Paște, dr. Ilie Carol Barbul … a întâmpinat Armata Română' — kurumsal kaynak (il müzesi); TDV kapsamı dışı" },
{ t:"1919-04-20", k:"siyaset", kapsam:"dis", etiket:["siyaset","konu-siyasi","konu-askeri"],
  b:"Romen ordusu Oradea'ya girdi — General Traian Moșoiu",
  gun:"20 Nisan 1919", yer:"Varad (Oradea)", yer_id:"Varad (Oradea)",
  d:"Romen birlikleri General Traian Moșoiu komutasında 20 Nisan 1919'da Oradea'ya girdi; şehirde Romen idaresi başladı.",
  kaynak:"Primăria Municipiului Oradea, 'Programul zilei de 20 aprilie — 105 ani de la eliberarea orașului Oradea' (oradea.ro): 'intrarea trupelor române în Oradea, la 20 aprilie 1919, în frunte cu generalul Traian Moșoiu' — kurumsal kaynak (belediye); TDV kapsamı dışı" },
```
⚠️ Bu iki madde yalnız kırılma 1919-04-19/20'ye ÇEKİLİRSE gerekir (①, model kararı). Ve iki yer için
**1918-11 → 1919-04 arasının sahibi** de sorulmalı: kaynak 21.III–19.IV.1919 Macar Sovyet idaresi diyor ⇒
Avusturya'dan doğrudan Romanya'ya değil, arada Macaristan (Károlyi → Sovyet) var.
