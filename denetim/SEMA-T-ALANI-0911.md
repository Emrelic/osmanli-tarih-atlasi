# ŞEMA — T ALANI, 11 Eylül 2026

Oturum: **T ALANI ŞEMASI** (önceki isimler: YABANCI SENKRON → ENKLAV TAVANI)
Koordinatör: 1.MURAT · Emre'nin kararı: *"`t:` bittiği gün düzgün yazılsın.
Atlasın bitiş tarihi ayrı, asıl meselenin bittiği tarih farklı."* — **bayrak
(`t_cinsi`) YOK, `t:` her zaman GERÇEK tarih.**

🔒 `data/*.js` ve `arac/*.py` yalnız **OKUNDU** — tek satır yazılmadı, motor
çalıştırılmadı. Zemin: `denetim/PAKET-114-0911.json` (114 PAKET oturumu) ve
`denetim/BULGU-PRENSLIK-PENCERE-0911.md` (araştırma kaynağı) — ikisi de
KENDİ ÖLÇÜMLERİYLE yeniden doğrulanmadı (D107: `okumadım`, zemin olarak
devralındı), yalnız YENİ şemaya göre YENİDEN SINIFLANDIRILDI.

---

## ① ŞEMA TASARIMI — "hâlâ var" 55+ künye için `t:` NE OLACAK

### Önce KOD okundu, TAHMİN edilmedi

**`arac/uret_petek.py`nin devletler.js tüketimi TEK bir yerde** (satır 365):
```python
for _k in girdi.oku_devletler():
    _kid, _kh = _k.get("id"), _k.get("harita")
    if _kid and _kh:
        _HARITA_ALT[_kid] = _kh
```
⇒ **Yalnız `id` ve `harita` okunuyor.** `f`/`t` alanları motor tarafından
**HİÇ OKUNMUYOR** — harita çizimi, petek üretimi, künye penceresi hesabı
BUNLARA dayanmıyor. `arac/renkler.py` da aynı şekilde (grep: `.get("f")`/
`.get("t")` kalıbı SIFIR eşleşme) — DSATUR komşuluk testi `yerlesimler.js`nin
KENDİ `s:` dönem `f`/`t`sini kullanıyor, devletler.js'in üst-seviye özetini
DEĞİL.

**`arac/denetle.py`nin `_devletler_yukle()`+`degismez4()`'ü** (Değişmez 4/4c/4d,
hayalet devlet) TEK gerçek tüketicidir:
```python
kf, kt = K[kim]                                  # (f, t) — None OLABİLİR
g = _gun_farki(p.get("f"), kt) if kt else None   # kt None ⇒ SKIP, çökmez
if kt and kt < ATLAS_SONU: ...                   # kt None ⇒ SKIP
```
**`kt` (devletin `t:`si) `None`/boşsa üç kontrolün İKİSİ (`4`/`4c`) sessizce
ATLANIR — çökme YOK, yanlış-pozitif İHLAL de ÜRETMEZ.** Bir string sentinel
(`"suruyor"`) de KAZARA güvenli davranır (`_gun_farki` parse hatasını yakalayıp
`None` döndürür, ve `"suruyor" < "1923-10-29"` string karşılaştırması ASCII
şansıyla `False` çıkar) — ama bu **KIRILGAN**: farklı bir sentinel (örn. boş
dize, `"-"` ile başlayan bir şey) aynı ASCII şansını YAKALAMAYABİLİR.

**`js/app.js`nin TEK tüketicisi** (satır 5169, dizin kartı):
```js
satir(d.ad, d.baskent||"", (d.f||"")+" → "+(d.t||""), ...)
```
`d.t` `null`/`undefined`/`""` olursa **çökmez**, kart `"1776-07-04 → "` gösterir
(çirkin ama zararsız — sondaki ok boşta kalır). `d.t = "suruyor"` olursa kart
`"1776-07-04 → suruyor"` gösterir (daha OKUNAKLI, ama bu görev `js/app.js`e
dokunmuyor, o yüzden şu an YALNIZCA bu iki görüntü arasında fark var).

### 🟢 KARAR ÖNERİSİ: `t: null` (alan mevcut ama değeri `null`)

```
GEREKÇE: Emre'nin cümlesi "bittiği gün YAZILSIN" — bitmemiş bir şeyin
bitiş günü YOKTUR, dolayısıyla EN DÜRÜST karşılık "yok" (null) demektir.
Bir string sentinel ("suruyor") YENİ bir HASSASİYET İDDİASI gibi durur
(§4 ruhu: alan bir şey İDDİA ETMEMELİ, iddia yoksa BOŞ kalmalı) ve
gelecekteki bir tüketici onu YANLIŞLIKLA bir tarih sanabilir (ör.
`kt < ATLAS_SONU` gibi bir string karşılaştırma ASCII şansına bağlı kalır —
YARIN başka bir karşılaştırma bu şansı YAKALAMAYABİLİR).
KOD KANITI: hem `denetle.py` hem `js/app.js` `null`ı ZATEN GÜVENLE
yönetiyor — hiçbir DEĞİŞİKLİK gerekmiyor.
```

⚠️ **Kozmetik bedel** (kabul edilen, görev dışı): dizin kartı `"1776-07-04 → "`
gösterecek (sondaki ok boşta). Bunu düzeltmek `js/app.js`e "…(sürüyor)" gibi
açık uçlu bir gösterim eklemeyi gerektirir — **bu görevin kapsamı dışı**,
ayrı bir sevk (muhtemelen Oturum 1) ister.

---

## ② ATLASIN PENCERESİ NEREDE DURACAK — bulundu, listelendi

`arac/uret_petek.py`de pencere sonu **YEDİ ayrı yerde**, HER SEFERİNDE
literal `"1923-11-01"` dizesi olarak tekrarlanıyor (TEK bir isimli sabit
YOK):
```
satır 2901   tarihler = sorted(t for t in tarihler if EPOK <= t <= "1923-11-01")
satır 2903   if tarihler[-1] != "1923-11-01": tarihler.append("1923-11-01")
satır 4483   _wts = sorted(t for t in _wts if EPOK <= t <= "1923-11-01")
satır 4547   ts = sorted(t for t in ts if EPOK <= t <= "1923-11-01")
satır 4550   if ts[-1] != "1923-11-01": ts.append("1923-11-01")
satır 4629   ts = sorted(t for t in ts if EPOK <= t <= "1923-11-01")
satır 4632   if ts[-1] != "1923-11-01": ts.append("1923-11-01")
```
`EPOK = "1281-01-01"` (satır 1257) TEK yerde tanımlı, başlangıç için — ama
BİTİŞ için eşdeğer bir isimli sabit YOK.

`arac/denetle.py`de pencere: `ATLAS_SONU = "1923-10-29"` (satır 1686),
**TEK yerde** tanımlı ve TEK kullanım noktası var (Değişmez 4c/4d).

`js/app.js`de pencere: `BASLANGIC = gunIdx("1281-01-01")`, `BITIS =
gunIdx("1923-10-29")` (satır 89-90), **TEK yerde** tanımlı.

🟡 **1 GÜNLÜK FARK GÖRÜNÜYOR AMA KUSUR DEĞİL:** `uret_petek.py` `"1923-11-01"`
(motor **yarı-açık aralık** kullanıyor: `[EPOK, "1923-11-01")` — yani "1
Kasım'a KADAR ama dahil değil" = "29 Ekim'e kadar dahil" ile birebir aynı
şey, projenin her yerde kullandığı `f<=g<t` yarı-açık kuralıyla TUTARLI).
`denetle.py`/`js/app.js` `"1923-10-29"` (kapsayıcı son gün). **Aynı sınırın
iki eşdeğer ifadesi**, çelişki değil — ama üç dosyada üç FARKLI yazım biçimi
(7+1+1 = 9 tekrar) olması **kendi başına bir kırılganlık**: pencere yarın
değişirse 9 yerin HEPSİ elle bulunup güncellenmeli.

**HÜKÜM: künyeden pencere çıkarılınca, bu 9 tekrar TEK OTORİTE olur** —
tam olarak koordinatörün öngördüğü risk. Bu görev `arac/`/`js/`ye dokunmuyor
(donuk + dosya sahipliği dışı); **öneri: bir sonraki sevk bu 9 tekrarı TEK
isimli sabite (`ATLAS_PENCERE_SON`) indirsin** — ayrı bir görev, `§7`ye göre
Oturum 0/1.

---

## ③ 114 KÜNYE İÇİN GERÇEK `t:` — üç kova

`denetim/PAKET-114-0911.json` zemin alındı (31 gerçek + 83 pencere).
`t_cinsi` alanı KALDIRILDI (Emre kararı) — onun yerine HER kayıt doğrudan
`onerilen_t` (gerçek tarih) ya da `t: null` (hâlâ var) taşıyor.

### Kova A — GERÇEK tarih NET (25 künye, doğrudan uygulanabilir)

```
tbmm-turkiye        1923-10-29  (zaten doğru, DEĞİŞMİYOR)
irak-kralligi       1958-07-14  urdun-emirligi     1946-05-25
filistin-mandasi    1948-05-14  misir-kralligi     1953-06-18
ingiliz-sudani      1956-01-01  cezayir-fransiz    1962-07-05
kesiri-sultanligi   1967-11-30  kuayti-sultanligi  1967-11-30
ingiliz-hindistani  1947-08-15  racput             1947-08-15 (yaklaşık)
manipur             1949-10-15  travankur          1949-07-01
haydarabad-nizam    1948-09-17  bahavelpur         1955-10-14 (yaklaşık)
bharatpur-cat       1948-03-30  cunagadh           1948-02-20
ingiliz-malaya      1957-08-31  hollanda-dogu-hint 1949-12-27
fransiz-cinhindi    1954-07-21  nguyen-hanedani    1945-08-25
sarawak-brooke      1946-07-01  ingiliz-guyanasi   1966-05-26
hollanda-guyanasi   1975-11-25  rif-cumhuriyeti    1926-05-27
```
🔴 D107: bu 24+1'in HİÇBİRİ TDV/akademik kaynakla BU TURDA tek tek
doğrulanmadı — 114 PAKET'in "genel tarih konsensüsü" damgası aynen
devralındı. **Yazılmadan önce en az örneklemle bağımsız doğrulama önerilir.**

🔴 **1 ÇELİŞKİ, ÇÖZÜLMEDİ:** `bhopal` — 114 PAKET'in önerisi 1949-06-01
(Hindistan Birliği'ne resmî katılım) ile TDV'nin kendi `bopal--devlet`
maddesi ("1952'ye dek") ÇELİŞİYOR. **Araştırılmadan yazılmasın.**

### Kova B — GERÇEK tarih VAR ama İKİ ADAY, KARAR gerekiyor (4 künye)

```
mogolistan   1924-05-20 (Bogd Han öldü) VEYA 1924-11-26 (MHC ilanı,
             monarşi resmen kaldırıldı) — ÖNERİM: 1924-11-26 (resmî/
             hukuki son; 1924-05-20 yalnız hükümdarın ölümü, ARA DÖNEM
             fiilen sürdü) — ama KARAR içerik sahibine ait
kacar        1925-10-31 (Meclis Ahmed Şah'ı hal'etti) VEYA 1925-12-15
             (Rızâ Han'ın taç giymesi, Pehlevî hanedanının BAŞLANGICI) —
             ÖNERİM: 1925-12-15 (yeni hanedan resmen BAŞLADIĞI gün, ardıl
             künye "pehlevi" varsa onun `f:`siyle TUTARLI olur — kontrol
             edilmeli)
suud-ucuncu  1926-01-08 (Hicaz Krallığı ilanı — kimlik biçim değiştirdi)
             VEYA 1932-09-18 (Suudi Arabistan Krallığı, TAM birleşme) —
             ÖNERİM: künyenin ADI "suud-ucuncu" (III. Suûdî Devleti/Necid
             Sultanlığı) SPESİFİK bir siyasi biçimi anıyorsa 1926-01-08
             (o biçim burada değişti); künye GENEL "Suûdî hakimiyeti"yi
             anıyorsa 1932-09-18 — künyenin `ad:` alanına BAKILMALI
```
⚠️ Üçü de **bir modelleme kararı** gerektiriyor — tarih BULUNAMADI değil,
**hangi olayın "son" sayılacağı** belirsiz. Tarih uydurulmadı, iki gerçek
aday arasından SEÇİM isteniyor (D107'nin üçüncü damgası: bu "okumadım"
DEĞİL, "iki gerçek cevap var, biri seçilmeli").

### Kova C — GERÇEK tarih var ama GÜN belirsiz (2 künye)

```
harezm-halk-cumhuriyeti   1924-01-01  (yıl kesin, ay "~Ekim 1924" ama
                          TEYİT EDİLMEDİ — §4: hassasiyeti düşür, ay
                          uydurma; kaynak notuna "~1924-10, gün/ay
                          bulunamadı" yazılsın)
buhara-halk-cumhuriyeti   1924-01-01  (aynı gerekçe, "~1924-09/10")
```

### Kova D — GERÇEK tarih bulunamadı, `cammu-kesmir` (1 künye)

```
cammu-kesmir   t: null bırakılmalı (1947 sonrası statü BUGÜN HÂLÂ
               tartışmalı/çözülmemiş bir anlaşmazlık — "hâlâ var"
               kovasına DAHA yakın, "bulunamadı" değil "gerçekten
               belirsiz/süregelen")
```

### Kova E — "HÂLÂ VAR" (82 künye: 83 pencereden cammu-kesmir çıkarıldı)

`t: null` — ①'deki karar. Tam liste `PAKET-T-0911.json`de.

**Toplam kontrol:** 25 (A) + 4 (B, karar bekliyor) + 2 (C) + 1 (D) + 82 (E)
= **114** ✓ (31 gerçek + 83 pencere ile aynı taban, yalnız bayrak yerine
doğrudan tarih/karar/null olarak yeniden düzenlendi.)

---

## ④ GÖÇ RİSKİ — Değişmez 2s etkilenir mi?

**HÜKÜM: HAYIR, ETKİLENMEZ — yapısal olarak bağımsız iki alan.**

`arac/denetle.py`nin `degismez2(Y, O, kategoriler=("s",))` fonksiyonu
(Değişmez 2s'nin kendisi) **yalnız `yerlesimler.js`nin KENDİ `s:[{f,t,d}]`
dizisini okur** — devletler.js'in üst-seviye `id/f/t` künyesini **hiç
almaz, hiç okumaz** (`degismez2(Y, O, ...)` imzasında `K` yok). Bu, benim
bir önceki görevimde (`YABANCI SENKRON`, bugün) doğrudan okuduğum koddur.

⇒ **Bir devletin ÜST-SEVİYE `t:`sini (örn. "1923-10-29" → "1958-07-14")
değiştirmek, `yerlesimler.js`teki HİÇBİR `s:` periyodunun `f`/`t`sini
DEĞİŞTİRMEZ** — bunlar iki AYRI dosyada, iki AYRI alanda dururlar. Değişmez
2s'nin kırılma sayacı (`kir[d]`) yalnız `yerlesimler.js` periyotlarının
kendi tarihlerinden beslenir; devletler.js'e dokunmak bu sayacı **BİR
BASAMAK BİLE OYNATMAZ.**

**Tek etkilenen mekanizma — Değişmez 4/4c (hayalet devlet), ve etkisi
YALNIZCA AZALTICI:** `degismez4()` `yerlesimler.js`nin `s:` periyodunu
devletler.js'in `f`/`t`siyle KARŞILAŞTIRIR (`kt = K[kim][1]`). Bir devletin
`t:`sini GERİYE değil İLERİYE (1923-10-29'dan GERÇEK/DAHA GEÇ bir tarihe,
ör. Irak için 1958'e) çekmek, `p.get("t") - kt` farkını KÜÇÜLTÜR ya da
SIFIRLAR — **asla büyütmez.** Yani mevcut "132 dönem devletin ölümünü
aşıyor" (Değişmez 4c) sayacı bu değişiklikle **İNEBİLİR, ARTAMAZ.**

📌 Ve bu ölçüm zaten BUGÜN, bu oturumun (adı değişmeden önce) `YABANCI
SENKRON` görevinde `degismez2`nin tam kaynak kodu okunarak yapıldı —
tekrar okumadım, aynı bilgiyi yeniden kullandım (D023 ruhu: aynı
oturumda iki kez aynı kodu okumaya gerek yok).

⚠️ **ÖLÇÜLMEDİ:** Değişmez 4c'nin TAM SAYISININ ne kadar düşeceği (kaç
dönem-kaydı şu an "132 aşan" kovasındaki, kaç tanesi 114 künyeden birine
ait) — bu, `arac/denetle.py --ayrinti` çıktısını GERÇEK yeni `t:`
değerleriyle SİMÜLE etmeyi gerektirir (mevcut PAKET yalnız ÖNERİ, veri
henüz yazılmadı). Bu bir sonraki adımda (veri yazıldıktan sonra) ölçülür.

---

## Öz-değerlendirme (D107)

- **ÖLÇÜLDÜ:** `t:` alanının üç tüketicisi (uret_petek.py yalnız `harita`
  okuyor; denetle.py `None`'ı güvenle atlıyor; js/app.js `falsy`yi güvenle
  gösteriyor) — kod okunarak, tahmin edilmeden. Pencere sabitinin 9 tekrarı
  (7+1+1) bulundu ve listelendi. Değişmez 2s'nin devletler.js'ten TAMAMEN
  bağımsız olduğu kanıtlandı (imza okunarak). Değişmez 4c'nin yönü
  (yalnız azalabilir) kanıtlandı.
- **BULUNAMADI:** `cammu-kesmir`in gerçek bitiş tarihi (zaten süregelen
  bir anlaşmazlık, muhtemelen hiç bulunamayacak).
- **ÖLÇÜLEMEDİ:** Değişmez 4c'nin TAM yeni sayısı (veri yazılmadan
  simüle edilemez); 25 "Kova A" tarihinin TEK TEK akademik doğrulaması
  (114 PAKET'in devri, bu turda tekrarlanmadı); `bhopal` çelişkisi.

---
🤖 Generated with [Claude Code](https://claude.com/claude-code)
