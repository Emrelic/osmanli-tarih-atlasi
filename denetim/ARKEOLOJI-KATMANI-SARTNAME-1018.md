# ARKEOLOJİ KATMANI — ŞARTNAME (MÖ 12000 → MÖ 3000)

Sevk: Emre, 18 Ekim 2026 (`oturumlar/KARAR-EMRE-1018-ONCE1281-B-TIPI.md` §3) · yazan: yan oturum (`distracted-carson-626369`)
Ölçüm ağacı: `origin/main` @ `1b453cac6` · pilot verisi YALNIZ dalda `claude/distracted-carson-626369`.
(Dosya adı görevde `ŞARTNAME` idi; `Ş` harfi dosya-kilit kancasını (`kilit_kanca.py`) UnicodeEncodeError ile düşürdüğü için ASCII `SARTNAME` yazıldı — ayrı bulgu, §10.)
Okuma sırası: §1 ölçüm → §2-§8 kurallar (her biri «dosya + madde») → §9 uygulama listesi → §10 pilot → §11 Emre kararları.

---

## §1 ÖLÇÜM — bugün atlasta MÖ ve arkeoloji için ne var

| Soru | Ölçüm | Nasıl |
|---|---|---|
| `oturumlar/UFUK-ACILISI-1010.md` §0 «MÖ'ye dair atlasta tek harita günü yok» | Harita günü yok DOĞRU, ama «MÖ kayıt 0» 🔴 **ESKİ**: `devletler.js`te **166 künyenin `f:`si negatif** (en eski `misir-erken-hanedan` MÖ 3100 = `-3099`); künyelere gömülü `kronoloji:[{ t:"-…` maddesi **824**; `devletler.js`te negatif tarih dizgisi **1120** | `grep` + `scratchpad/olc.py` |
| MÖ **olay** (`olaylar*.js`) | **0** | regex `["']-dddd-dd-dd` |
| MÖ **yerleşim** (`yerlesimler*.js`) | **0** | aynı |
| MÖ savaş / kişi / padişah | 0 / 0 / 0 | aynı |
| `sehir_tarihce_osm.js` (motor/site okumaz) | **1162** negatif tarih, ama `nicelik:"arkeolojik"` kaydı **0** | `grep` |
| Sümer paketi (`denetim/NOKTA-SUMER-1010.diff` + `-B10.diff`) | 🔴 **UYGULANMAMIŞ**: `data/`da «Girsu» **0**; 13+9 nokta, `kur:`/`bit:` negatif, `s:` boş | `grep Girsu data/*.js` |
| Şemada arkeoloji alanı | **VAR ama yalnız `sehir_tarihce` şemasında:** `ilk.nicelik ∈ {kurulus, ilk_anilis, arkeolojik}` + `ark:{t,gun,kesinlik,kaynak}` (`VERI-YAPISI.md:918-928`, `arac/sehir_tarihce.py:16`). **Kronoloji (`olaylar*.js`) ve `yerlesimler*.js` şemasında arkeoloji alanı YOK** | okuma |
| `kesinlik` | `gun·ay·yil·onyil·yuzyil·belirsiz`, skaler ya da `{f,t}` (`VERI-YAPISI.md:263-275,400-423`); arayüz okuyucusu `js/app.js:75-132`. **«binyıl» yok** | okuma |
| `ic_not` ailesi | olayda `ic_not_d/_gun/_b` (kullanıcıya GÖSTERİLMEZ, `VERI-YAPISI.md:339`); tarihçede `ic_not`; yerleşimde `neden:` | okuma |
| Tarih biçimi | `arac/gun.py` / `js/gun.js` **1-6 hane** yıl kabul eder (`-12154-01-01` geçerli). **`arac/sehir_tarihce.py` `TARIH` regex'i 4 haneliydi** ⇒ MÖ ≥ 10000 «biçim ihlali» veriyordu (K1, dalda düzeltildi) | koşturuldu |
| **`denetle.py` MÖ olay görünce** | 🔴 **ÇÖKER** (Python traceback, çıkış 1): `denetle.py:4434` `_gun_no` → `date(int(p[0])…)`; negatif tarihte `p[0]==''` ⇒ `ValueError` (çağrı `mukerrer_maddeler`, `:4695`). Kapı `ÖLÇÜLEMEDİ`(2) VERMİYOR, çöküyor. Pilot olay dosyası kaldırılınca taban **çıkış 2** (yalnız Değişmez 8 `devletler_harita.js YOK`, ana/taze ağaçta beklenen) | iki koşu (§10) |
| `arac/gun.py negatif_yil_kapisi` | `denetle.py:48` `import gun as _gun` var, ama kapı **çağrılmıyor** (`grep` = yalnız tanım). `uret_petek.py`de `GUN_SAYACI = True` **yok** | `grep` |

⇒ **Hüküm:** MÖ **künye/kronoloji (devletler.js içinde) sahada**, MÖ **yerleşim/olay dosyaları yok**. Arkeoloji için eksik olan veri değil, **şema, orta nokta kuralı, denetim ve arayüz**dür.

---

## §2 ALAN ADLARI — «arkeoloji etiketi»

### 2.1 Kronoloji maddesi (`data/olaylar_*.js`)
```js
{ t:"-9528-01-01",                       // ORTA NOKTA, astronomik (MÖ 9529 = -9528)
  k:"kurulus", etiket:["arkeoloji"],     // etiket → arayüz süzgeci (§6)
  kaynak_turu:"arkeoloji",               // 🆕 "arkeoloji" | "yazili"; alan yoksa "yazili"
  aralik:{ bas:"-9744-01-01", son:"-9313-01-01", guven:"95.4", tur:"kalibre-14C" },   // 🆕 §3
  kesinlik:"yuzyil",                     // §3.4 tablosundan TÜRETİLİR
  gun:"MÖ 9745–9314 arası (orta nokta MÖ 9529)",   // insan-okunur; gun.py çapraz denetler
  b:"…", yer:"…", d:"…", kaynak:"…tam atıf: yayın + lab no + aralık…",
  ic_not_d:"ARALIK→ORTA NOKTA: …beyan…" }
```
`etiket` süzgeç içindir («bu madde arkeolojik»); `kaynak_turu` kuralları tetikler (aralık zorunluluğu, denetim §8). İkisi birlikte yazılır.

`aralik` alt alanları:

| alan | değer | anlamı |
|---|---|---|
| `bas`, `son` | astronomik ISO | kaynağın iki ucu; MÖ N verildiyse `-(N-1)`; `bas` daha eski |
| `guven` | `"95.4"`, `"68.2"`, `"toplam"`, `"belirsiz"` | kaynağın verdiği düzey; verilmediyse `"belirsiz"` (uydurulmaz) |
| `tur` | `kalibre-14C` · `ham-14C` · `tabaka-donem` · `donem-toplami` · `yerlesim-suresi` · `tipolojik` · `termolum` | tarihin NASIL elde edildiği; §3.2 hangisinde orta nokta alınır |

Tek değer veren kaynak («yaklaşık MÖ 7100»): `aralik` yazılmaz; `ic_not_d`'de «TEK DEĞER» beyanı zorunlu; `kesinlik` en az `yuzyil`.

### 2.2 Yerleşim
- `sehir_tarihce_*.js`: şema hazır — `ilk.nicelik:"arkeolojik"` + `ark:{…}`. Ek: `ilk.kaynak_turu:"arkeoloji"`.
- `yerlesimler*.js` (motor girdisi): `kur:` = orta nokta (Şırnak kalıbı, `VERI-YAPISI.md:454-466`: görünme için ALT SINIR, kuruluş iddiası değil) + **`kaynak_turu:"arkeoloji"`** + **`aralik:{…}`** (`kur:` için; `bit:` için `aralik_bit`). `neden:`de «kur: KURULUŞ DEĞİL, İLK TARİHLİ KANIT» + atıf.
- 🔴 Alanlar `arac/girdi.py BILINEN_ALANLAR`'a eklenmeden yazılmaz (bugün aynı sınıftan 4 uyarı var). `girdi.py` motor tuzunda (**motor dondurma**) ⇒ HAVVA koşusu bitene kadar `main`e girmez; o güne dek pilot `sehir_tarihce` şemasında (motor okumaz) yaşar.

### 2.3 Künye (`data/devletler.js`)
Natufiyen/PPNA gibi yapılar polity değil; «devlet gibi göstermek uydurma sınır üretir» (`YOL-HARITASI.md:97-102`). ⇒ künyeye **`kultur:true`** + `kaynak_turu:"arkeoloji"`; `f`/`t` §3 kuralıyla; boya **desenli** (§5.4). Yeni `tur` değeri gerekmez.

---

## §3 ARALIK → ORTA NOKTA KURALI

Emre'nin kararı (`KARAR-EMRE-1018 §3`): «MÖ 4000–3500 gibi aralıkta ORTA NOKTA». Aşağısı onu uygulanabilir kılar; §3.2 ve §3.1(yuvarlama) kararın sınırını çiziyor → Emre onayı (§11).

### 3.1 Formül
- Girdi: kaynağın MÖ sayıları `A ≥ B` (4000, 3500). **MÖ sayısıyla çalış, sonra çevir.**
- `orta_MÖ = ⌊(A+B)/2⌋` — yarım yıl çıkarsa **daha geç yıla** (küçük MÖ sayısı): kaynağın söylemediğinden erken görünmeyiz (Şırnak kalıbıyla aynı yön). Örnek: 4000–3500 → MÖ 3750.
- `t = −(orta_MÖ − 1)` → `"-3749-01-01"`. **Ay-gün hep `-01-01`** (uydurma gün yok); gün-yok bilgisi `kesinlik` ile söylenir.
- Yıl 5-6 hane olabilir (`-9528`, `-12154`). **Hiçbir okuyucu 4 hane varsaymaz.**
- İki uç + orta nokta **üçü de** yazılır: `aralik.bas/son`, `t`, `gun` metni, `ic_not_d` cümlesi. Biri eksikse denetim reddeder (§8).

### 3.2 Hangi aralığa orta nokta uygulanır — hangisine uygulanmaz
| Kaynak ne diyor | Aralığın anlamı | Kural |
|---|---|---|
| «Olay/başlangıç MÖ 4000–3500 arasında» (kalibre 14C yüzde 95,4; Bayes modeli; «kuruluş MÖ 2700±») | **oluş zamanı belirsizliği** | ✅ ORTA NOKTA |
| «Evre IV-IVA tarihleri 9300–8700» (PPND *toplam*); «yerleşim MÖ 7000–5700 arası» | **sürenin kendisi** | ❌ orta nokta ALINMAZ → `t` = en eski uç (**alt sınır**), `bit` = en geç uç; `aralik.tur` = `donem-toplami`/`yerlesim-suresi` |
| Tek değer «yaklaşık MÖ 7100» | belirsizlik verilmemiş | `t` = değer, `aralik` yok, `kesinlik ≥ yuzyil`, beyan |
| İki kaynak çelişir (Harappa 3700 / >3500 / 3300; Mehrgarh pre-7000 / 5200–4900) | kaynaklar ARASI belirsizlik | **Tek kaynak seçilir** (gerekçe `ic_not_d`), seçilen kaynağın KENDİ aralığı kullanılır; iki ölçümün ortası alınmaz (hiçbir ölçüm değildir) |
| Yalnız ham 14C | kalibrasyon yok | ❌ YAZILMAZ / `tur:"ham-14C"` + ÖLÇÜLEMEDİ. Kalibrasyon (IntCal) bu atlasın işi değil |
| Kalibre mi ham mı belirsiz (Jiahu 1999 özeti) | belirsiz | yazılır, `guven:"belirsiz"` + beyan |

### 3.3 Güven düzeyi
Kaynak birkaç düzey veriyorsa **en geniş** (yüzde 95/95,4) kullanılır — dar düzey şişirilmiş kesinlik üretir. Yalnız dar düzey varsa onu yaz ve `ic_not_d`'e «yalnız 68,2 okundu» düş (pilot: Ain Mallaha).

### 3.4 `kesinlik` türetimi (yarı genişlik `h = |A−B|/2`)
| `h` | `kesinlik` | arayüz |
|---|---|---|
| ≤ 5 yıl | `yil` | «MÖ 3750» (`yil` için «~» yok, `VERI-YAPISI.md:276`) |
| 6–50 | `onyil` | «~MÖ 4556» |
| 51–500 | `yuzyil` | «~MÖ 9529» |
| > 500 | `binyil` (🆕, K5) | «MÖ 4. binyıl» |
Tek değerli («yaklaşık») kayıt `yuzyil`'den ince yazılamaz.

### 3.5 Ufuk dışı (MÖ 12000'den eski)
Orta nokta ufuktan eski çıkabilir (pilot: Ain Mallaha MÖ 12155). Kayıt **tutulur, tarih aynen yazılır**; harita `f`'i `max(f, UFUK)` olur, arayüz `ufuk-disi` işaretini kullanır (`js/app.js:116 ufukDisiIsaretle`). Ufku sessizce kaydırmak yasak (Emre kararı: §11-4).

### 3.6 Orta noktanın sınırı kullanıcıya görünür olmak zorunda
Orta nokta tahmindir, ölçüm değil; harita tek gün gösterdiği için «tam o gün» sanılabilir. Bu yüzden (a) `~` + `kesinlik` her zaman görünür, (b) madde detayında «MÖ 9745–9314 arası; haritaya orta nokta konur» satırı **kullanıcıya gösterilir** (`aralik` varsa arayüz kendisi yazar; `ic_not_d` gizli kalır).

### 3.7 Takvim
Jülyen/Gregoryen farkı MÖ arkeolojik tarihte uygulanmaz (kalibre yıllar «cal BC» takvim yılıdır). `ic_not_d`'e yazılmaz.

---

## §4 `kesinlik` İLE ARAYÜZ GÖSTERİMİ

`js/app.js:75-132` `kesinlik`i zaten okuyor. MÖ için:
1. `gun` metni varsa **aynen** gösterilir (`olayTarihYazi`: `o.gun || …`). Pilot maddeleri `gun` taşır.
2. `gun` yoksa üretim: `~MÖ N` (`onyil`+), `MÖ N` (`yil`), `MÖ N–M arası` (`aralik` varsa), `MÖ 4. binyıl` (`binyil`). `N = 1 − yıl`.
3. **Rozet** `⛏`/«arkeoloji» satır başında — `etiket:["arkeoloji"]`den (süzgeçle tek kaynak).
4. Zaman çubuğunda MÖ gün seçilince «MÖ 9529» (gün/ay YOK; `kesinlik ≥ yil` iken ay-gün gösterilmez).
5. Sınav: `tarih→yazı` için 12 satırlık tablo sınavı (K6).

---

## §5 BÖLGE BOYAMA — mevcut motor modeline uygun öneri

**Motor (CLAUDE.md «Petek motoru»):** her yerleşimin çevresindeki toprak onun peteğidir (Voronoi); noktasız bölge **en yakın peteğe emilir, onun sahibiyle boyanır**. Motor girdisi **nokta**; poligon girdisi okunmadı (`girdi.py GIRDI_DOSYALARI` nokta listeleri) ve motor dondurmada (`uret_petek.py`, `renkler.py`, `girdi.py`).

**Öneri: poligon DEĞİL — «bölge temsilci noktası» + geniş petek.**
1. **Yeri biliniyor** (Göbekli Tepe, Çatalhöyük, Harappa): normal yerleşim noktası, sahip = kültür künyesi (§2.3).
2. **Yeri bilinmiyor, bölgesi biliniyor** (Emre: «bölge boyanır»): `tur:"bolge"` (mevcut dolgu türü, `VERI-YAPISI.md:139`) **temsilci nokta** = bölgenin coğrafi merkezi + `konum_kesinlik:"bolge"` + `neden:` «BÖLGE TEMSİLCİSİ: yer bilinmiyor, <bölge> kaynakta». Çevresinde başka nokta yoksa peteği geniştir — «geniş petek» motorun doğal sonucu, ek mantık gerekmez.
3. 🔴 **Uydurma sınır tehlikesi:** MÖ 12000'de nokta sayısı onlarla ölçülür; petek tüm kıtayı kaplar ⇒ «Neolitik kültür sınırı Karadeniz'e kadar» görüntüsü. Önlem: **MÖ katmanında petek yarıçap tavanı** (sürtünmeli yürüyüş: `KARAR-EMRE-1018 §1` 5/7/10 gün); tavanı aşan toprak `__BOSLUK__` kalır ve **«kültürsüz» değil «veri yok»** (`bos:"veri-yok"`, `MIMARI.md §6`). Tavan değeri Emre (§11-3).
4. **Boya:** kültür künyeleri için `renkler.py BOYALAR`'a **desenli/şeffaf ton** (tarama); düz devlet rengiyle karışmasın. Yeni `harita:` anahtarları (`natufiyen`, `ppna-levant`, …) ⇒ `renkler.py` motor tuzu ⇒ HAVVA koşusu sonrası (K8).
5. Reddedilen alternatif: poligon girdisi — motor işi + poligonun kendisi uydurma sınır.

---

## §6 ARAYÜZ — arkeoloji etiketi süzgeci

Örüntü hazır: `?sehirkron=0` + ⚙ Ayarlar kutusu (`js/app.js:8277-8286,8468`; `VERI-YAPISI.md:333`).
1. `etiket:["arkeoloji"]` için **«Arkeoloji maddeleri»** kutusu (`?arkeoloji=0`, `localStorage.arkeolojiGizli`); varsayılan açık.
2. Harita katman anahtarı (`index.html:188` `data-katman` örüntüsü): **«Arkeolojik kültürler»** (desenli boya) aç/kapa.
3. Satır rozeti + `~` tarih (§4); rozete tıklayınca **yalnız arkeolojik** liste.
4. Süzgeç yalnız GÖRÜNÜMÜ etkiler; veri ve Değişmez 2 etkilenmez.
5. `kaynak_turu:"yazili"` MÖ maddeleri (Ksenophon, Herodot) rozetsiz: **arkeoloji ≠ MÖ**.

---

## §7 14 000 YILLIK ZAMAN ÇUBUĞU — çağ bölmeli kaydırıcı

Sorun (`YOL-HARITASI.md:116-122`): doğrusal gün çubuğunda son 226 yıl %1,6; bugünkü 1281-1923 (≈235 000 gün) çubuğun tamamı, MÖ 12000'e uzanınca ≈5,1 milyon gün.

**Öneri: parçalı doğrusal çubuk** — konum `u∈[0,1]` → dilim → dilimde doğrusal gün. Çekirdek payı bugünkü çözünürlüğe yakın tutulur:

| # | Dilim | Süre | Çubuk payı | 1000 px'te | Adım |
|---|---|---|---|---|---|
| A | MÖ 12000 – MÖ 3000 (arkeoloji) | 9000 y | %6 | 150 y/px | 100 yıl |
| B | MÖ 3000 – MÖ 600 | 2400 y | %6 | 40 y/px | 10 yıl |
| C | MÖ 600 – MS 1000 | 1600 y | %8 | 20 y/px | 5 yıl |
| D | MS 1000 – 1281 | 281 y | %6 | 4,7 y/px | 1 yıl |
| E | **1281 – 1923 (çekirdek)** | 642 y | **%62** | 1,0 y/px (bugün 0,64; ~%62'si korunur) | gün |
| F | 1923 – 2026 | 103 y | %12 | 0,86 y/px | gün |

Kurallar: (1) pay tablosu **tek yerde**, `UFUK`/`VERI_UFKU`'ndan türer (`js/app.js:170-180`: ufuk tarihi ikinci kez yazılmaz). (2) Dilim sınırında görünür tik + çağ adı; üstte **5 çağ düğmesi** (Arkeoloji · Antik · Orta Çağ · Osmanlı · Modern). (3) ←/→ dilim içi, Shift+←/→ dilim atla. (4) A-B'de gün/ay göstergesi gizli. (5) Oynatma çarpanı dilime göre (A: 1 tık = 100 yıl; E: 1 gün) — tek çarpan A'da haritayı saniyede binlerce yıl atlatır. (6) Reddedilen: logaritmik çubuk (Osmanlı ile Modern'i ezer, geçişte süreksizlik).
Yer: `js/app.js` (~`:174`), `js/gun.js` (**`cubukPozisyon(gun)` / `gunDenCubuk(u)`**), `index.html` çağ düğmeleri, `css/style.css`.

---

## §8 DEĞİŞMEZ 2'NİN MÖ EVRENİNE UYGULANIŞI

Ölçüt (CLAUDE.md): «her `d:`/`v:` kırılmasının ±30 gün içinde kronoloji maddesi.» **Gevşetilmez.**
1. Arkeolojik kırılma (`kur:`, `bit:`, `s:` sınırı) ile maddesi **aynı orta noktayı** taşır (ikisi aynı `aralik`ten üretilir) ⇒ fark **0 gün**; ±30 pencere MÖ'de de durur ama 0 beklenir, 30 «uyarı»dır.
2. Mevcut «YIL-TEMSİLÎ BORÇ» kovası (`denetle` çıktısı 277) bu kırılmaları KAPSAMAZ — orta nokta aralıktan türetilmiştir; yeni kova açılmaz.
3. **Yeni denetim «Değişmez 2a»** (`arac/arkeoloji_denetle.py`, K3):
   - `kaynak_turu:"arkeoloji"` ⇒ `aralik` **ya da** `ic_not_d`'de «TEK DEĞER» beyanı;
   - `aralik` varsa `t == orta(bas,son)` (§3.1);
   - `kesinlik` ≥ §3.4 tablosu (kaynaktan ince kesinlik yasağı, `VERI-YAPISI.md:275`);
   - `gun` metni ↔ `t` (`gun.py` MÖ çapraz denetimi, var);
   - `tur ∈ {donem-toplami, yerlesim-suresi}` ⇒ `t == bas`;
   - `tur:"ham-14C"` ⇒ ÖLÇÜLEMEDİ.
4. Çıkış 0 temiz · 1 ihlal · 2 ölçülemedi (2 temiz değil).
5. **Önkoşul (benim işim DEĞİL — `mo-sayac`/C3):** `denetle.py:4434 _gun_no` negatif tarih çöküşü giderilmeli ve `negatif_yil_kapisi` gerçekten çağrılmalı.

---

## §9 UYGULAMA MADDELERİ

| # | Madde | Dosya | Bağımlılık / not |
|---|---|---|---|
| K1 | `TARIH` regex 4→4-6 hane | `arac/sehir_tarihce.py:14` | ✅ dalda yapıldı (1 satır). `denetle.py`'de başka `\d{4}` tarih regex'i taranmalı |
| K2 | `kaynak_turu`/`aralik` alanları + sözlük | `VERI-YAPISI.md` (olay + yerleşim + künye), `arac/girdi.py BILINEN_ALANLAR` | `girdi.py` motor tuzu ⇒ HAVVA koşusu sonrası; önce yalnız VERI-YAPISI.md |
| K3 | Değişmez 2a (§8.3) | yeni `arac/arkeoloji_denetle.py`; `denetle.py` çağırır | K2'den sonra; iki yönlü sınav (iyi örnek + 6 bozuk) |
| K4 | `_gun_no` çöküşü + `negatif_yil_kapisi` bağlantısı | `arac/denetle.py:4434,4695` | **mo-sayac (C3)**; MÖ olay inmeden şart |
| K5 | `kesinlik:"binyil"` | `VERI-YAPISI.md:273`, `js/app.js kesinlikBirimi`, `sehir_tarihce.py KESINLIK`, `denetle` | K2 ile aynı commit |
| K6 | Arayüz: `gun`/`~MÖ` gösterimi, rozet, süzgeç | `js/app.js:75-132,8277-8286`, `index.html:188`, `css/style.css` | arayüz oturumu; tablo sınavı |
| K7 | Çağ bölmeli çubuk | `js/app.js ~170-180`, `js/gun.js`, `index.html`, `css/style.css` | en büyük arayüz işi |
| K8 | Kültür künyeleri + desenli boya + petek tavanı | `data/devletler.js`, `arac/renkler.py`, `uret_petek.py` | 🔴 motor tuzu: HAVVA koşusu sonrası; tavan Emre |
| K9 | Sümer paketi (13+9 nokta) | `denetim/NOKTA-SUMER-1010.diff` → `data/yerlesimler_nokta_ortadogu_0917.js` | **K4 inmeden İNMEZ** |
| K10 | Pilotu genişlet | yeni `data/olaylar_arkeoloji_*.js`, `data/sehir_tarihce_arkeoloji_*.js` | her kayıt §3 + kaynak kuralı |

Sıra (`KARAR-EMRE-1018 §4`): K2 → K3 → K1 → (K4) → K10 dalda birikir → K4 sonrası push → K6 → K7 → K8/K9 HAVVA sonrası.

---

## §10 PİLOT ÖZETİ (ayrıntı: `denetim/ARKEOLOJI-PILOT-RAPOR-1018.md`)
14 kronoloji maddesi + 7 yerleşim, hepsi §3 kuralıyla; **yalnız dalda** (`data/olaylar_arkeoloji_pilot.js`, `data/sehir_tarihce_arkeoloji.js`). `sehir_tarihce.py denetle`: çıkış 0, ihlal 0. `denetle.py` MÖ olayla: **çöküş** (§1). Veri `main`e itilmedi.
Ayrı bulgu: `ŞARTNAME` dosya adı `kilit_kanca.py`'yi UnicodeEncodeError ile düşürüyor (Türkçe karakterli adlarda kilit okunamıyor ⇒ yazma ENGELLENİYOR) — kancaya `errors="replace"`/UTF-8 çıktı gerekir (bu şartnamenin dışı).

## §11 EMRE'DEN İSTENEN KARARLAR
1. §3.2: **dönem-toplamı aralığına orta nokta uygulanmaz** (Jericho 9300–8700, Jiahu 7000–5700; ilk uç alınır). Kararınızın bu yorumu doğru mu?
2. §3.1: yarım yıl **daha geç** yıla yuvarlansın mı?
3. §5.3: MÖ katmanında petek yarıçap tavanı kaç gün/km?
4. §3.5: ufuk dışı (MÖ 12155) ufka kenetlensin mi, ufuk MÖ 12200'e mi genişlesin?
5. §7: çekirdek (1281-1923) çubuk payı %62 yeterli mi?
