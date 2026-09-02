# BULGU — Değişmez 1c: sahipsiz VE BELGESİZ 7 kayıt

**Oturum:** SONNET HAZIR KITA 123 · **Tarih:** 2 Eylül 2026
**Görev:** koordinatör (1.MURAT) sevki, M-2281 — "yedisini adıyla çıkar;
belgesizlik gerçek mi, yoksa belge BAŞKA DOSYADA mı (Timbuktu vakası)?"
**Yetki:** yalnız ÖLÇÜM/RAPOR. Veriye ve motora yazılmadı (`§7`, koşu CANLI).

---

## 0. ÖNCE SAYI — devralınmadı, ölçüldü

```
py arac/denetle.py --ayrinti
  2663 yerleşim, 219 sahipsiz (beklenen 219)   ✓
  Değişmez 1c ✓  sahipsiz ve BELGESİZ: 7 (tavan 7) — belgeli 212
```
Tavan (7) ve M-2281'deki yedi ad **birebir tutuyor** — devralınan sayı
ÇÜRÜMEDİ. Yedisi:

```
Agadez · Darfur · Hadramut · Ndjamena · Ogaden · Somali çölü · Timbuktu
```

⚠️ **Bu yedi ad, `arac/denetle.py:238` içindeki 15 Ağustos yorumuyla da
BİREBİR aynı** — yani üç haftadır hiç değişmemiş. Aynı yorumdaki 24 Ağustos
tarihli bir başka listede (`§1` altında) bunlara **6 kayıt daha** eklenmişti
(İfe, Upemba, Malebo, Kasai, Ubangi-Uele, Mapungubwe — `denetim/BULGU-BOSLUK-CINSI.md`,
bkz. §1 altında); **o altısı artık BELGELİ** (bugünkü 1c listesinde yok) —
demek ki aradan geçen sürede birileri onları kapattı, yalnız bu yedisi kaldı.

---

## 1. SONUÇ ÖZETİ — hepsi "belge BAŞKA DOSYADA", ama derece farklı

**Hiçbiri "hiç araştırılmamış boşluk" değil.** Yedisinin yedisi için de
18 gün önce (**14 Ağustos 2026**, `oturumlar/VERI-COL-BAYRAK-ILERLEME.md`)
somut dönem/kaynak araştırması **YAPILMIŞ** ve bir VERİ oturumuna
**devredilmiş**, ama devir hiç işlenmemiş. Ölçtüğüm şey — bugünkü veri
kaydı ile o araştırma notunun karşılaştırması:

| Ad | Bugünkü kayıt (yerlesimler.js) | Araştırma VAR MI | Künye VAR MI (devletler.js) |
|---|---|---|---|
| **Timbuktu** | `s:`+`kaynak:` UYGULANMIŞ, `bos:`/`neden:` DÜŞMÜŞ | 🟢 VAR, kaynaklı, TDV okunmuş | ✓ (mali-imparatorlugu · songhay-imparatorlugu · fas) |
| **Darfur** | çıplak (`d:[]`, hiçbir alan yok) | 🟢 VAR (Wikipedia+Britannica) | ✓ `darfur` zaten devletler.js'de |
| **Ogaden** | çıplak, `kabile` bayrağı yazılıp SONRA GERİ ALINMIŞ | 🟢 VAR (İfat→Adal, 260 yıl) | ✓ `adal` var; `ifat` YOK |
| **Ndjamena** | çıplak | 🟡 KISMİ — devlet adı biliniyor (Kanem-Bornu/Bagirmi), sınır belirsiz, "ikinci tur ister" | ✓ `kanem-bornu` var |
| **Agadez** | çıplak | 🟢 VAR (4 dönemli zincir önerilmiş) | 🔴 YOK — `agadez-sultanligi`/Aïr künyesi hiç açılmamış |
| **Hadramut** | çıplak | 🟢 VAR (Kathiri/Kuaytî iki-sultanlık deseni) | 🔴 YOK — `kathiri`/`kuayti` künyesi hiç açılmamış |
| **Somali çölü** | çıplak, `kabile` bayrağı yazılıp SONRA GERİ ALINMIŞ | 🟡 KISMİ — Ajuran Sultanlığı biliniyor ama bu NOKTAnın Ajuran çekirdeğinde mi çevresinde mi olduğu netleşmemiş | ✓ `somali` var |

⇒ **Belgesizlik GERÇEK DEĞİL — belge iki dosyada duruyor ve hiçbiri
yerlesimler.js'e inmemiş:**
1. `oturumlar/VERI-COL-BAYRAK-ILERLEME.md` (14 Ağustos) — dönem/kaynak önerisi, 7/7
2. `data/yer_yama_ok107.js` (2 Eylül) — yalnız Timbuktu için, TAM alan kümesiyle
   (`s:`, `kaynak:`, `bos:`, `neden:`, `not:`) ama `_sahiplik_uygula.py`nin
   O ANKİ hâli `bos:`/`neden:`/`not:` YAZMIYORDU — yarısı indi, yarısı düştü.

---

## 2. TİMBUKTU — Değişmez 1c'nin KENDİ ölçtüğü örnek, hâlâ AÇIK

`arac/denetle.py`nin 2 Eylül tarihli yorumu Timbuktu'yu **çözülmüş** gibi
anlatıyor ("`bos`/`neden`/`not` EKLENDİ, Timbuktu vakası") — ama bu yalnız
**`_sahiplik_uygula.py`nin bu üç alanı artık DESTEKLEDİĞİ** anlamına
geliyor, Timbuktu kaydının fiilen GÜNCELLENDİĞİ anlamına gelmiyor. Ölçtüm:

```
data/yer_yama_ok107.js:146   bos:"veri-yok", neden:"kunye-yok — ...", not:"H-0013 ..."
data/yerlesimler.js:866      { ad:"Timbuktu", kaynak:"tinbuktu", s:[...3 dönem...],
                                tur:"sehir", lat:16.775, lon:-3.009, g:0, k:1, d:[] }
                              ⚠️ bos:/neden:/not: YOK
```
`s:`/`kaynak:` alanları uygulanmış (muhtemelen alan-desteği eklenmeden
ÖNCEKİ bir `--yaz` koşusunda), `bos:`/`neden:`/`not:` hiç uygulanmamış.
**Çare: `arac/_sahiplik_uygula.py --yaz` yeniden koşturulmalı** (kilitli
üçlüye — `uret_petek.py`/`girdi.py`/`renkler.py` — dokunmuyor, koşuyu
ÖLDÜRMEZ) — ya da `bos:`/`neden:`/`not:` elle Timbuktu kaydına eklenmeli.
**Bunu ÖLÇTÜM, UYGULAMADIM** — düzeltme yetkim yok (`§7`, ÖLÇÜM oturumuyum).

---

## 3. DARFUR — künye VAR, kayıt ÇIPLAK, dönem zinciri HAZIR BEKLİYOR

```
data/yerlesimler.js:1068   { ad:"Darfur", tur:"bolge", lat:13.50, lon:24.00,
                              g:0, k:0, d:[] }   — hiçbir alan yok
data/devletler.js:1573     { id:"darfur", ad:"Dârfûr Sultanlığı (Keira Hanedanı)", ... }
```
`oturumlar/VERI-COL-BAYRAK-ILERLEME.md` önerisi: `darfur` 1603→1874 ·
Türk-Mısır/Kavalalı 1874→1898 · `darfur` yeniden (Ali Dinar) 1898→1916.
**Künye zaten var, dönem zinciri önerilmiş, tek eksik yazım.**

⚠️ **Kademe (idarî tier) yaması ayrı bir konu — KARIŞTIRILMASIN:**
`data/kademe_d48240.js:820` Darfur için `kademe_uygulanmaz:true` +
`neden:"Sultanlığın BAŞKENTİ El-Fâşir ayrı bir kayıt..."` taşıyor, ama bu
**sahiplik (Değişmez 1c) beyanı DEĞİL** — kademe atama sözleşmesinin
`neden:` alanını kullanıyor, farklı bir soruya cevap veriyor. İlk taramamda
bunu bir "belge" adayı sandım, içeriği okuyunca **alakasız çıktı** —
kayıt ediyorum ki bir sonraki oturum aynı yanlış eşleşmeye düşmesin.

---

## 4. AGADEZ ve HADRAMUT — dönem ÖNERİLMİŞ ama künye HİÇ AÇILMAMIŞ

İkisi de öteki beşten farklı: `oturumlar/VERI-COL-BAYRAK-ILERLEME.md`
somut dönem/kaynak öneriyor, **ama `data/devletler.js`'de bu devletlerin
künyesi yok**:

```
Agadez     önerilen: agadez-sultanligi 1405→1500→1591→1906→1920(Fransız)
           devletler.js'de "agadez"/"air" arayan HİÇBİR kayıt YOK
Hadramut   önerilen: Kathiri 1395→~1858 · Kesîrî-Kuaytî 1858→1918 (İKİ sultanlık AYNI ANDA)
           devletler.js'de "kathiri"/"kuayti" arayan HİÇBİR kayıt YOK
```
⇒ Bu ikisinde eksik olan yalnız bir `_sahiplik_uygula.py --yaz` koşusu
DEĞİL — önce `data/devletler.js`ye yeni künye(ler) açılması gerekiyor.
**Bu, "belge var" hükmünü GEÇERSİZ kılmıyor** (araştırma yapılmış,
kaynaklı) ama uygulanma sırası öbür beşten bir adım geridedir.

---

## 5. OGADEN ve SOMALİ ÇÖLÜ — bayrak YAZILIP GERİ ALINMIŞ, künye VAR

`VERI-COL-BAYRAK-ILERLEME.md`'nin 14 Ağustos EK bölümü şunu anlatıyor:
oturum önce ikisine de `kabile` bayrağı yazmış, sonra kendi ölçümüyle
**geri almış** — çünkü ikisinin de üstünde gerçek devlet dönemleri var
(Ogaden: İfat + 1415-1577 Adal, ~260 yıl; Somali çölü: Ajuran Sultanlığı,
13.-17. yy). Bugünkü kayıtlar bunu doğruluyor — **ikisi de çıplak, ne
bayrak ne dönem var**, yani geri alma gerçekten uygulanmış:

```
data/yerlesimler.js:1125   { ad:"Somali çölü", tur:"bolge", ..., d:[] }
data/yerlesimler.js:1126   { ad:"Ogaden", tur:"bolge", ..., d:[] }
```
Ogaden için künye (`adal`) devletler.js'de var; `ifat` yok. Somali çölü
için künye (`somali`) var. Somali çölü'nün KESİN sınırı ("Ajuran'ın
nehir-vadisi çekirdeğinde mi çevresinde mi") 14 Ağustos'ta **netleşmemiş**
bırakılmış — bu tek gerçek "araştırma eksik" kalemi bu yedi içinde.

---

## 6. NDJAMENA — en sağlam belgeli AMA en az netleşmiş

İki ayrı rapor (`denetim/BULGU-BOSLUK-CINSI.md` §5, 24 Ağustos ve
`VERI-COL-BAYRAK-ILERLEME.md`, 14 Ağustos) bağımsız olarak aynı noktaya
varmış: Ndjamena **kesinlikle** sahipsiz görünmemeli (TDV `bornu` maddesi
bölgeyi doğrudan tarif ediyor, coğrafî konum iki lobun arasında ve
Kanem-Bornu ile Bagirmi'nin sınır bölgesinde), ama **hangi devletin hangi
tarihte** sınırı taşıdığı iki oturumun ikisinde de "ikinci tur ister"
diye açık bırakılmış. Künye (`kanem-bornu`) var. **Bu, yedi içinde
dönem zincirinin en az olgunlaştığı kayıt.**

---

## 7. KAYNAK KALİTESİ UYARISI — ölçtüm, düzeltmedim

`VERI-COL-BAYRAK-ILERLEME.md`'deki kaynaklar `CLAUDE.md §4`ün 9 Ağustos
kırmızı çizgisinden (araştırma tarihi 14 Ağustos, yani kural ZATEN
yürürlükteydi) **önce belirlenmiş bir alışkanlıkla** yazılmış:
Agadez/Timbuktu/Darfur/Hadramut/Ogaden önerilerinin dayanağı **Wikipedia
ve Britannica** — `§4`nin *"Vikipedi TEK DAYANAK DEĞİL"* kuralına aykırı.
Britannica genel bir ansiklopedidir, kırmızı çizgideki 🟢 KABUL listesine
(Cambridge History, üniversite yayını, hakemli makale, alan el kitabı,
birincil kaynak neşri) birebir girmiyor.

⇒ **Bu yedi kayıt veriye inmeden önce kaynakları TDV/akademik ölçütle
yeniden doğrulanmalı** — özellikle Agadez ve Darfur İslâmî sultanlıklar
olduğu için TDV'de madde OLMA ihtimali yüksek (`§4`nin "dar slug
tutmazsa kapsayıcı maddeyi dene" kuralı burada devreye girer). **Bunu
ÖLÇMEDİM** — TDV slug taraması bu görevin kapsamı dışında, ayrı bir
araştırma turu gerektirir.

---

## 8. RAPOR — üç parçalı

**① NE ÖLÇTÜM (sayıyla):**
- 2663 yerleşim, 219 sahipsiz, 7'si belgesiz (Değişmez 1c ✓, tavan 7) —
  liste devralınan sevkle birebir tutuyor.
- Yedisinin yedisi için de 14 Ağustos 2026 tarihli bir araştırma notu
  (`oturumlar/VERI-COL-BAYRAK-ILERLEME.md`) VAR; hiçbiri veriye
  UYGULANMAMIŞ.
- Timbuktu için AYRICA 2 Eylül tarihli tam alanlı bir yama
  (`data/yer_yama_ok107.js`) var; `s:`/`kaynak:` uygulanmış,
  `bos:`/`neden:`/`not:` düşmüş (araç o an desteklemiyordu, şimdi
  destekliyor ama kayıt güncellenmedi).
- 5/7 için devlet künyesi zaten `devletler.js`de var (Timbuktu, Darfur,
  Ogaden→adal, Ndjamena→kanem-bornu, Somali çölü→somali).
- 2/7 için künye YOK (Agadez→agadez-sultanligi, Hadramut→kathiri/kuayti).

**② NEYİ BULAMADIM:**
- Somali çölü'nün ve Ndjamena'nın **kesin coğrafî/zaman sınırı**
  `bulunamadı` — 14/24 Ağustos raporlarının ikisi de bunu açıkça
  "ikinci tur ister" diye bırakmış, ben de netleştirmedim (kapsam dışı,
  bu bir ÖLÇÜM görevi).
- Bu yedi önerinin TDV'de karşılığı olup olmadığını **ölçmedim** — ayrı
  bir slug taraması gerektirir.
- Kademe yamalarındaki (`kademe_d48240.js`, `kademe_4ff22b.js`)
  `neden:` alanlarının sahiplikle bir ilgisi olup olmadığını kontrol
  ettim (Darfur, Hadramut) — **yok**, ayrı bir sözleşme.

**③ NE İSTİYORUM:**
Bu yedi kayıt için **düzeltme benim yetkimde değil** (`§7`). Önerim:
1. Timbuktu — `_sahiplik_uygula.py --yaz` yeniden koştur (artık
   `bos`/`neden`/`not` destekliyor); tek satırlık kazanım.
2. Darfur, Ogaden, Somali çölü, Ndjamena — künye zaten var; dönem
   zincirini `VERI-COL-BAYRAK-ILERLEME.md`den alıp **önce TDV/akademik
   kaynakla yeniden doğrulayacak**, sonra yazacak bir VERİ oturumuna
   devredilmeli (Somali çölü ve Ndjamena'nın sınırı belirsiz kaldığı
   için bu ikisi "ikinci tur" araştırma da isteyebilir).
3. Agadez, Hadramut — önce `data/devletler.js`ye künye açılmalı
   (agadez-sultanligi; kathiri + kuayti — Hadramut'ta AYNI ANDA İKİ
   sultanlık olduğu için tek künye yetmeyebilir), sonra dönem yazılmalı.

**Kova (⑤ üç damga):** hepsi **TUTTU** — devralınan "7" sayısı ve adları
çürümedi, ama devralınan "belgesiz" hükmü **ÇÜRÜDÜ**: hiçbiri gerçekten
araştırılmamış değil, yedisi de bir yerde belgeli ve teslim edilmemiş.
**ÖLÇÜLEMEDİ** kovası: TDV karşılığı, Somali çölü/Ndjamena'nın kesin
sınırı.

✅ İŞİM BİTTİ — boştayım, yeni iş bekliyorum.
