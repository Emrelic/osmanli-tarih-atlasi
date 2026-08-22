# DOĞU AFRİKA KRONOLOJİ — ilerleme defteri

**Oturum:** DOĞU AFRİKA KRONOLOJİ (açılış adı: OPUS HAZIR KITA 55) · Opus
**Görev:** tahta **M-1055** (KOORDINATOR → OPUS HAZIR KITA 55, 22 Ağu 2026 21:26)
**Dosyalarım:** `data/kronoloji_dogu_afrika.js` → `window.KRONOLOJI_DOGU_AFRIKA`
· bu defter
**Şartname:** `oturumlar/KRONOLOJI-SARTNAME.md` (236 satır, baştan sona okundu)

---

## 1. AÇILIŞ ÖLÇÜMÜ — koordinatörün altı künyesi BİREBİR tuttu

`node` ile `data/devletler.js` eval edildi (431 künye, regex DEĞİL):

| künye | f → t | ömür | dizin | koordinatör |
|---|---|---|---|---|
| `habesistan` | 1270-01-01 → 1923-10-29 | 653 | 9 | 653 · 9 ✓ |
| `adal` | 1415-01-01 → 1887-01-06 | 472 | 4 | 472 · 4 ✓ |
| `svahili-sehirleri` | 1000-01-01 → 1698-12-13 | 698 | 3 | 698 · 3 ✓ |
| `somali` | 1500-01-01 → 1923-10-29 | 423 | 4 | 423 · 4 ✓ |
| `kaffa-kralligi` | 1390-01-01 → 1897-09-10 | 507 | 2 | 507 · 2 ✓ |
| `buganda` | 1300-01-01 → 1923-10-29 | 623 | 2 | 623 · 2 ✓ |

**Altı sayının altısı da tuttu. Taban ayrışması YOK.**

## 2. BULGU — koordinatörün listesi ZİNCİRİN İKİNCİ YARISIYDI

`bolge:"dogu-afrika"` alanında **altı değil ON ÜÇ** künye var. Listede
olmayan yedisi ölçüldü:

```
evfat               1285-01-01 → 1415-01-01   dizin 3   ← adal'ın SELEFİ
makdisu-sultanligi  1281-01-01 → 1500-01-01   dizin 3   ← somali'nin SELEFİ
cimma-sultanligi    1830-01-01 → 1923-10-29   dizin 2
sidamo-kralliklari  1281-01-01 → 1897-01-01   dizin 1
vollayta-kralligi   1281-01-01 → 1894-01-17   dizin 1
merina (Madagaskar) 1787-01-01 → 1897-02-28   dizin 4
umman-zengibar      1698-01-01 → 1923-10-29   dizin 4
```

🔴 İlk ikisi **zincirin halkası**: `evfat` 1415'te biter, `adal` 1415'te
başlar (İfat, Adal'ın doğrudan selefidir). `makdisu-sultanligi` 1500'de
biter, `somali` 1500'de başlar. Kapsam dışı bırakılsalardı anlatıda delik
açılacaktı.

**KARARIM (M-1065'te bildirildi, itiraz gelmedi):**
- **KAPSANDI (11 künye):** altı künye + `evfat` + `makdisu-sultanligi` +
  `cimma-sultanligi` + `sidamo-kralliklari` + `vollayta-kralligi`
- **KAPSANMADI, gerekçeli:** `umman-zengibar` (ARABISTAN KRONOLOJİ'nin
  `umman` zincirinin Afrika ucu — iki oturum aynı olaya yazarsa ayrışan
  `dunya` doğar) · `merina` (Madagaskar, kıta dışı ada, anakara zinciriyle
  olay paylaşmıyor)

## 3. ÖRTÜŞME ÖLÇÜMÜ — `dunya` puanları DEVRALINDI

48 dosya (`olaylar*.js` + `kronoloji_*.js`, **4471 madde**) node ile eval
edilip sıkı desenle tarandı: Doğu Afrika/Kızıldeniz sahnesine değen
**102 madde zaten vardı.** Puanları yeniden uydurmadım, kullandım:

```
1505-07-24  Kilve yağması            dunya:2   kronoloji_portekiz.js
1505-08-14  Mombasa yağması          dunya:2   kronoloji_portekiz.js
1541-04-10  Cristóvão da Gama        dunya:2   kronoloji_portekiz.js
1543-02-21  Ahmed Gran'ın ölümü      dunya:3   kronoloji_portekiz.js
1896-03-01  Adva                     dunya:3   kronoloji_italya.js
1372/1438/1441 Habeş-Memlük          dunya:2   kronoloji_memluk.js
```

`kronoloji_dogu_afrika.js` diye bir dosya YOKTU — örtüşen DOSYA yok,
benimki sıfırdan.

## 4. TDV SLUG TARAMASI — 50+28 slug HTTP koduyla sınandı

**🟢 CANLI ve GÖVDESİ OKUNDU (15):** `etiyopya` · `habes-eyaleti` ·
`harar` · `evfat` · `zeyla` · `ahmed-el-mucahid` · `makdisu` · `somali` ·
`kilve` · `mombasa` · `zengibar` · `uganda` · `masavva` · `dehlek` ·
`berbera`
Ayrıca canlı: `nube` · `sennar` · `func` · `sudan` · `darfur` ·
`mozambik` · `afrika` · `mogadisu` · `cibuti` · `eritre` · `kenya` ·
`tanzanya` · `ruanda` · `nil` · `osman-pasa-ozdemiroglu`

**🔴 ÖLÜ (302) — ölçüldü, varsayılmadı:** `habes` · `adal` · `sevakin` ·
`ibrim` · `kaffa` · `buganda` · `malindi` · `sofala` · `gondar` ·
`aksum` · `oromo` · `galla` · `menelik` · `tevodros` · `dahlak` ·
`ozdemir-pasa` · `ifat` · `zencibar` · `kilwa` · `hobyo` · `ecuran` ·
`geledi` · `aussa` · `adva`/`adwa` · `bogos` · `kasala` · `sofala--sehir`

**§4'ün "ARA, varsayma" kuralı iki kez işe yaradı:**
- `dahlak` ölü → **`dehlek` canlı**
- `ozdemir-pasa` ölü → **`osman-pasa-ozdemiroglu` canlı**

**YÖNLENDİRME maddesi tuzağı (§4 ② ile ③ arası bir alt-sınıf):**
`habesistan` HTTP 200 döner ama gövdesi yalnız *"bk. ETİYOPYA"*dır;
`ahmed-gran` da öyle, gerçek gövde `ahmed-el-mucahid`tedir.
⇒ **200 + doğru başlık + BOŞ gövde ≠ madde var.**

**🔴 VE BİR YÖNTEM DERSİ:** ilk turda `WebFetch` kullandım; özetleyici
model **tarihleri bozdu** (Ezana'nın 4. yüzyıldaki vaftizini *"1320"*,
Zû Nüvâs'ın 523'ünü *"1523"* yazdı). ⇒ Gövdeleri `curl` ile çekip
**ham metni kendim okudum**. `§4`ün *"GÖVDEYİ OKU"* kuralı, aracın
özetini okumakla sağlanmıyor.

## 5. 🔴 İKİ TDV MADDESİ ÇELİŞTİ — hüküm verildi, gizlenmedi

| konu | `masavva` / `harar` | seçilen | gerekçe |
|---|---|---|---|
| Masavva'ın fethi | 2 Nisan 1557 / 12 Nisan 1557 | **1557-04-02** | `masavva` maddesi **hicrî karşılığını** veriyor: "2 Cemâziyelâhir 964" |
| Harar maslahatgüzarlığı | `harar` 1911 / `etiyopya` 1912 | **1911** | ihtisas maddesi esas |

## 6. TESLİM — sekiz kalem, SAYIYLA

```
① madde        0 → 218 · aralık 1270-1923 · 11 künye
② konu         askerî-siyasî 145 (%67) · idarî-hukukî-malî 42 (%19)
               kültür-sanat-mimarî 12 (%6) · sosyal-dinî 9 (%4)
               iktisadî 10 (%5) · BİLİM-TEKNOLOJİ 0 (%0)  🔴 EKSİK
③ onem         5:103 · 4:56 · 3:42 · 2:17 · 1:0
   dunya        4:4 · 3:32 · 2:101 · 1:81 · 5:0
④ kapsam       iç 78 · dış 140
⑤ yer_id       DOLU 170 · BOŞ 48 · kapsam_genis 0
⑥ kaynak       DOLU 218/218 · TDV dayanaklı 212 · akademik 7 ·
               "bulunamadı" 1 · Vikipedi 0
⑦ bulamadıklarım — aşağıda §7
⑧ node --check 0 · denetle_kronoloji.py: 42 dosya 4838 madde,
   kronoloji_dogu_afrika.js ✓ TEMİZ
```

**Kabul kapısı İKİ YÖNDE sınandı** (`CLAUDE.md §11` C13):
- **ateşleme:** 6 kasten bozuk kayıt → **7 hata sınıfı öttü**
  (tarih biçimi · boş kaynak · puan aralığı · havuzda olmayan `yer_id` ·
  kapsam · boş etiket · mükerrer)
- **geçme:** gerçek 218 kayıt → **0 hata**

## 7. NEYİ BULAMADIM / NEYİ ÖLÇMEDİM — açıkça

**a) `yer_id` BOŞ olan 48 madde** — atlasta karşılığı olmayan yerler.
Koordinatörün nokta yazdırması gereken en önemlileri:
```
🔴 Adva (Adwa)   1896 SAVAŞ ALANI — en önemli eksik
   Debârvâ       Habeş Eyaleti'nin üç garnizon merkezinden biri (5 madde)
   Arkiko        Masavva'ın yanındaki liman (3 madde)
   Dehlek adası  (3 madde)
   Aussa · Şimbra Kure · Wayna Daga · Enderta · Addi Karro ·
   Şeleneko · Vebi nehri · Fatagar · Toro · Obock (Ubûk)
```
Geri kalan 48'in çoğu hükümdar/diplomasi maddesi olup yeri gerçekten
belirsiz ya da imparatorluk çapındadır.

**b) 🔴 KONU DENGESİ BOZUK — açıkça bildiriyorum.** Hedef %40 askerî
iken ölçüm **%67**; **bilim-teknoloji sıfır.** Sebebi kısmen kaynak:
TDV'nin bu coğrafyaya ait maddeleri ağırlıkla siyasî-askerî anlatı
taşıyor. Ama bu bir mazeret değil — sonraki turun **birinci önceliği**
budur: Habeş kilise edebiyatı ve Ge'ez yazması geleneği, Gondar mimarî
okulu, Harar medreseleri ve kahve, Svahili mercan-taşı mimarisi ve
Sevâhilî dilinin doğuşu, Kilve sikke darbı, Buganda klan düzeni.

**c) ÖLÇMEDİM (yaptığımı iddia etmiyorum):**
- `savaslar.js` ile **çapraz kontrol YAPILMADI**.
- `kaffa-kralligi` · `sidamo` · `vollayta` · `cimma` için TDV
  **TANECİKLİK BOŞLUĞU** var (`CLAUDE.md §4`): TDV Etiyopya'yı görüyor
  ama bu krallıklar özelinde konuşmuyor — `etiyopya` gövdesinde bu adlar
  **hiç geçmiyor** (grep, sıfır sonuç). O beş madde akademik kaynağa
  dayandırıldı ve `kaynak:` alanında **açıkça işaretlendi**
  (Pankhurst, *The Ethiopian Borderlands*; Bahru Zewde, *A History of
  Modern Ethiopia 1855-1974* — ikincisi TDV `harar` bibliyografyasında da
  anılıyor). Bölüm **kasten kısa** tutuldu: sayıya ulaşmak için dolgu
  yazılmadı (`KRONOLOJI-SARTNAME §1`).
- `1543-02-22`, `1577-01-02`, `1415-01-02` gibi **aynı güne düşen ikinci
  maddeler** için gün ayrımı yapay değil, kaynak aynı yılı veriyor;
  saat/gün ayrımını UYDURMADIM, `-01-02` biçimi **sıralama** içindir.

**d) BENİM AÇMADIĞIM, AMA ÖLÇTÜĞÜM BİR KUSUR:**
`denetle_kronoloji.py` bir `dunya` ayrışması bildiriyor ve **bana ait
değil**:
```
1827-10-20 Navarin Deniz Savaşı   4→kronoloji_balkan.js · 3→kronoloji_fransa.js
```
Benim dosyam bu olayı **hiç taşımıyor**; bildiriyorum, dokunmuyorum.

## 8. BAĞLANMAYI BEKLİYOR

```
data/kronoloji_dogu_afrika.js  →  window.KRONOLOJI_DOGU_AFRIKA
```
`index.html`e **BAĞLAMADIM** — koordinatörün işi (`KRONOLOJI-SARTNAME §5`).
`data/devletler.js`e **DOKUNMADIM**; oradaki 24 gömülü olayın hepsi bu
dosyanın içine alındı ve TDV gövdesiyle doğrulandı.
