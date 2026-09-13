# PAKET-A1 · ARAYÜZ — 13 madde teslim raporu

> PAKET-A1 · 13 Eylül 2026 · 1.MURAT sevki · kaynak: `denetim/OLCUM-PAKET-SINIF-0913.md` §A1
> Yazılan dosyalar: `js/app.js` · `js/suzgec.js` · `css/style.css` · ölçüm aletleri `denetim/ARAC-A1-*-0913.js` · bu rapor.
> **Commit YOK** (koordinatör atar). `index.html` · `data/*` · motor dosyalarına DOKUNULMADI. `data/ittifaklar.js` YAZILMADI.
> `node --check js/app.js` ve `node --check js/suzgec.js` her düzenlemeden sonra koşuldu: temiz.
> 🔴 **GÖRSEL DOĞRULAMA YAPILMADI.** Tarayıcıda site açılmadı (koşu 10 sürüyor; 038e686'daki aynı engel). Aşağıdaki bütün ölçümler node ile gerçek `data/*.js` + gerçek `app.js`/`suzgec.js` kodu üzerinden.
> ⚠️ Sürüm damgası (`surum_damgala.py`) koşulmadı: `suzgec.js` değişti; damga yükselmezse önbellekli eski `suzgec.js` ile toprak kutucuğu **hiç çıkmaz** (bilerek böyle korundu, bkz. H-0003).

## Özet

| madde | durum |
|---|---|
| `0042/H-0040` · `H-0041` portre | 🟢 KOD — zaman koruması + unvan listesi + `;` ayracı |
| `0042/H-0023` · `H-0024` · `H-0026` uzak zoom savaş işareti | 🟢 KOD — çarpışan işaret silinmiyor, küçük simgeye iniyor |
| `0031/H-0005` · `0030/H-0001` koyu kırmızı | 🟢 ZATEN İNMİŞ (2 Eylül, opaklık 1) + M-2104'ün istediği KAYIT yazıldı |
| `0042/H-0035` · `H-0036` Timur okları | 🟡 ÖLÇÜLDÜ, kod değişikliği gerekmedi — dört ok da pencerede; ekranda görülmedi |
| `0021/H-0030` Eflak seferi | 🟠 VERİ EKSİK — arayüz işi yok; A4 (`savaslar.js`) + A3 (kronoloji) kalemi |
| `0042/H-0003` yalnız toprak değişimi | 🟢 KOD — süzgeç + oynatma/⏮⏭ süzülmüşü atlıyor |
| `0027/H-0006` · `0023/H-0003` Kutsal İttifak | 🔵 PLAN (kod yok) — veri kaynaklı araştırma bekliyor |

**Sayı:** 13 maddenin **8'i kodla kapandı** (5 madde yeni kod + 2 madde kayıt + H-0003), **2'si ölçüldü** (Timur), **1'i devredildi** (Eflak), **2'si plan** (ittifak).

---

## 1 · `0042/H-0040` + `H-0041` — yanlış padişah portresi

**Ne yapıldı**
- `js/app.js:7046-7047` · `padisahEslesmesi(ad, gi)`: isteğe bağlı madde günü `gi`. Aday padişahın saltanatı `[başı − 30 yıl, sonu + 3 yıl]` dışındaysa **atlanır, sıradaki adaşa bakılır** (ilk eşleşmede `null` dönmüyor).
- `js/app.js:7033` · `PADISAH_OLAMAZ`e `şah · emîr · emir · şeyh · mirza · mîrzâ` eklendi.
- `js/app.js:7271` ve `:7331` · iki çağrı yeri `o.gi` geçiriyor ve `kisiler`i `/[,;]/` ile bölüyor.

**Ölçüm** — `node denetim/ARAC-A1-PORTRE-0913.js` (6195 madde, 1228'i `kisiler` taşıyor, `vefat_id` yok):
```
portre eşleşen     534 (önce) → 525 (sonra)
anakronik eşleşme   38 (önce, kaba ölçüt: tarih < saltanat−40y ya da > saltanat sonu)
```
Değişenler (hepsi tek tek okundu):
```
🟢 DÜZELDİ
  Emîr Süleyman (Çelebi) ×10 (1402-1411)  Kanunî → portre yok / aynı maddedeki Çelebi Mehmed
  Sultan Ahmed Celâyirî 1411 (H-0040)     I. Ahmed → yok   (arada "Şah Mehmed" I. Mehmed'e tutuyordu → unvan listesi)
  Şeyh Ahmed Han 1502 · Ahmed Bey 1837    I. Ahmed → yok
  Murad Bey 1537 Klis · 1798 Piramitler   I. Murad → yok
  Mustafa Bey 1635 · Mustafa Çelebi 1421  I. Mustafa → yok / II. Murad (aynı maddede adı geçen)
  II. Osman 1618 · 1621                   Osman Gazi → II. Osman
  III. Osman 1755                         Osman Gazi → III. Osman
  Şehzade Mehmed (III. Mehmed) 1582       I. Mehmed → III. Mehmed
  "Köprülü Mehmed Paşa; …" 1656           I. Mehmed → yok   (`;` ayraç değildi)
  "Vânî Mehmed Efendi; IV. Mehmed" ×2     I. Mehmed → IV. Mehmed
🟢 YENİ DOĞRU EŞLEŞME (`;` ayracı sayesinde): IV. Mehmed ×3 · II. Süleyman · II. Mustafa ×2
🟡 YAN ETKİ: 1520 "Şeyh Hamdullah'ın vefatı" — II. Bayezid portresi düştü (ölümünden 8 yıl sonra; madde padişah hakkında değil).
```
⚠️ 45 yıllık pencere denendi ve **fazla geniş** çıktı (1537 "Murad Bey" → III. Murad, d. 1546); 30'a indirildi, kod yorumunda yazılı.

**Emre'nin bakacağı yer:** 1411 "Bağdat'ın Karakoyunlu eline geçişi" · 1411-02-17 "Emîr Süleyman'ın ölümü" · 1755 Nuruosmaniye maddesi (III. Osman portresi).

## 2 · `0042/H-0023` · `H-0024` · `H-0026` — uzak zoomda kaybolan savaş işareti

**Kök:** `savasGuncelle` çakışma elemesi şehir etiketiyle çarpışan işareti `mk.remove()` ile **siliyordu**; uzak zoomda neredeyse her işaret çarpışıyor. (Zoom sınıfları `#harita.uzak/.cok-uzak` işareti silmiyordu — silen bu elemeydi.)

**Ne yapıldı**
- `js/app.js:3223-3246` · çarpışan işaret silinmiyor; iç elemana `sv-sade` sınıfı biniyor. Sınıf her geçişte önce kaldırılıyor ki ölçüm tam boyla yapılsın. Odaktaki muharebe eskisi gibi hiç dokunulmuyor.
- `css/style.css:2262-2263` · `.sv-sade`: ad etiketi gizli, simge `scale(0.72)` (`.cok-uzak` ile aynı ölçek).

**Ölçüm:** yapılamadı (DOM kutusu ölçümü tarayıcı ister). Ödünleşme: küçük simgeler birbirinin ve şehir noktalarının üstüne binebilir — Niğbolu 1396 vakası (p3/H-0002) yalnız **ad etiketi** için çözülmüş kalıyor, simge için değil.

**Emre'nin bakacağı yer:** Savra (1385) · Frenkyazısı · Bileca maddelerinde z≈4-5'e uzaklaş: ⚔ küçük simge kalmalı, adı gizlenmeli. Niğbolu 1396'da simge-şehir üst üste binmesi tekrar görünüyorsa söylesin.

## 3 · `0031/H-0005` + `0030/H-0001` — koyu kırmızı

**Ölçüm:** (b) çaresi — üç dolgunun `fill-opacity: 1` olması — **2 Eylül'de (ARAYUZ-0902) zaten inmiş** (`js/app.js:1316-1335`). İki ekran görüntüsü de o tarihten önce (24 Ağu / 0030). Koyu kırmızı = 0.44 mavi + 0.68 kırmızı alfa harmanıydı.

**Ne yapıldı:** `js/app.js:1327-1334` · M-2104 hükmünün istediği kayıt yazıldı: *"(c) DOĞRUSUYDU, (b) ile 0031/H-0019 ÖRTÜLDÜ"* — opaklık iki sahiplik iddiasını (Değişmez 3 "nokta-içinde" çakışması) **çözmüyor**, üstteki Osmanlı sessizce kazanıyor; yumuşak kipte (`SIYASI_KIP.yumusak`) harman bilerek geri geliyor.

**Yapılmadı:** (c) — çakışan sahipliklerin veride çözülmesi. Veri/motor işi, bu paketin değil.

**Emre'nin bakacağı yer:** 1324-01-01 İmralı maddesi (Gemlik-Bursa) ve 1396-10-01 Vidin maddesi (Sırbistan) — koyu ton kalmamalı. Yalnız "yumuşak" siyasî kipte görülürse kasıtlı.

## 4 · `0042/H-0035` + `H-0036` — Timur seferleri kesikli oklarla

**Ölçüm** — `node denetim/ARAC-A1-TIMUR-0913.js` (app.js'in `olaylar` evreni: `OLAYLAR*`, 1350 madde; `seferGuncelle` kırpması 038e686 Seçenek B dahil):
```
sefer                               görünür pencere           gün  okun göründüğü madde (B öncesi)
Timur'un Sivas seferi (1400)        1400-07-17 → 1401-01-01   168  1  (1)
Timur'un yürüyüşü (1402)            1402-07-17 → 1402-09-15    60  4  (1)   Ankara · bölünme · Saruhan · Emîr Süleyman
Timur'un İzmir seferi (1402)        1402-09-15 → 1402-12-20    96  2  (2)   beyliklerin kurulması · İzmir
Timur'un Anadolu'dan çekilişi 1403  1403-05-23 → 1403-09-01   101  2  (1)   Selanik iadesi · Gelibolu antlaşması
```
⇒ **Dört okun dördü de kayıtlı ve kronolojiyle pencerede.** Seçenek B yürüyüş okunu 1 → 4 maddeye çıkarmış. Kesikli çizgi `sefer-cizgi-<tur>` katmanlarında (`app.js:1718+`). Kod değişikliği yapılmadı.

**Açık kalan (veri, A3):** çekilme okunun penceresinde **Timur'un kendisiyle ilgili madde yok** — `OLAYLAR*`de 1403-03-15 / 1403-08-01'e düşen bir çekilme maddesi bulunamadı (0031/H-0013 notu `olaylar_ek5.js:53` diyor; bugünkü evrende o gün yok). Ok, Süleyman Çelebi'nin Bizans maddelerinde görünüyor. Çare A3: "Timur Anadolu'dan çekildi" maddesi (kaynaklı gün).

**Görsel doğrulama YAPILMADI.** *"Eskiden vardı"* şikâyeti koşudan önceki bir yayına ait olabilir; ölçüm yayındaki veride değil çalışma kopyasında.

**Emre'nin bakacağı yer:** 1402-07-28 Ankara Savaşı maddesi (yürüyüş oku) · 1402-12-14 İzmir maddesi.

## 5 · `0021/H-0030` — Eflak seferi işareti + üç voyvodalık

**Ölçüm:** ekran görüntüsü 1595-08-23 "Kalûgerân Muharebesi — Koca Sinan Paşa'nın Eflak seferi". `data/savaslar.js`te:
```
SAVASLAR  "Kalûgerân/Kalugaren/Călugăreni" kaydı   YOK (koordinatlı işaret çıkamaz)
SEFERLER  1595 Eflak seferi kaydı                   YOK (ok çıkamaz)
Eflak geçen kayıtlar: Rovine 1395 · 1821 Eflak İsyanı · antlaşma hükümleri
```
⇒ Arayüzde eksik bir şey yok: `savasIsaretleri` ve `seferler` kayıt olsa çizer (tür `isyan` → 🔥 simgesi zaten var, `SAVAS_TUR_SIMGE`).

**Koordinatöre devir listesi (yazılmadı, dosyalar bende değil):**
- **A4 `data/savaslar.js`:** ① Kalûgerân Muharebesi (1595-08-23, `tur:"meydan"`, koordinat) ② Koca Sinan Paşa'nın Eflak seferi `SEFERLER` kaydı (Tuna geçişi → Kalûgerân → Bükreş/Tırgovişte → Yergöğü çekilişi) ③ 1594 üç voyvodalık ayaklanması için üç `tur:"isyan"` işareti (Eflak · Boğdan · Erdel başkentleri) — gün/koordinat **kaynaktan**, TDV `mihai` / `eflak` / `koca-sinan-pasa` slugları ÖNCE HTTP ile sınanmalı (§4 ölü slug tuzağı, bu turda sınanmadı).
- **A3 kronoloji:** ayaklanmanın başlangıç maddesi ve voyvodaların saldırdığı kaleler (Emre: *"önemli birkaç kronolojiyi de ekleyebiliriz"*).

## 6 · `0042/H-0003` — yalnız toprak kazanç/kayıp maddelerini oynat

**Tasarım:** etiketten (`k:fetih/kayip`) değil, **haritanın çizdiği dönem sınırlarından** türetildi. Her Osmanlı dönem sınırına (`donemler[i].fi`, i ≥ 1) en yakın madde, fark ≤ 30 gün ise "toprak maddesi" (Değişmez 2'nin kuralı); aynı günün öteki maddeleri de işaretlenir.

**Ne yapıldı**
- `js/suzgec.js:289-338` · `toprakIndeksleri(maddeGunleri, kirilmaGunleri, pencere)` — DOM'suz, dışa aktarıldı (window + module).
- `js/app.js:4979-4995` · `toprakSecim`, `toprakIsaret()` (tembel, bir kez), `suzulduMu(i)`; `suzgecUygula` konu VE toprak koşulu.
- `js/app.js:5026` · URL'de `toprak=1` taşınıyor (konu süzgeciyle aynı paylaşılabilirlik kuralı).
- `js/app.js:5082-5105` · Konu süzgeci kutusunun altında "Yalnız toprak değişimi" kutucuğu + sayı; `toprakIndeksleri` yoksa kutucuk çıkmaz.
- 🔴 **DAVRANIŞ DEĞİŞİKLİĞİ:** `js/app.js:7929` (olay-olay oynatma), `:9664` (⏮), `:9674` (⏭) artık **süzülmüş maddeyi atlıyor.** Ölçüldü: önceden atlamıyordu — konu süzgeci yalnız listeyi gizliyor, oynatma yine her maddeye uğruyordu. Bu, konu süzgecinin davranışını da değiştirir (süzülmüş maddeye artık adım adım gidilmez).
- `css/style.css:1913` · ayırıcı çizgili satır.

**Ölçüm** — `node denetim/ARAC-A1-TOPRAK-0913.js`:
```
madde 1350 · DONEMLER 521 · kırılma günü 520 · maddeli 520 · maddesiz 0
   (§1.5 "Değişmez 2: 520 kırılma, 0 açık" ile BİREBİR — bağımsız çapraz sınav)
toprak maddesi                525 / 1350
k:fetih|kayip taşıyan         442 → bunların 360'ı işaretli
işaretli ama k başka          165   ← etiketten türetilseydi KAÇACAKTI
sınav: İstanbul 1453-05-29 İŞARETLİ · Mohaç 1526-08-29 İŞARETLİ
```
⚠️ **Kapsam:** yalnız Osmanlı gövdesi (`DONEMLER` o/v). Yabancı devletlerin kendi el değiştirmeleri yok. `donemler.js` üretilmiş dosya — koşu 10 yayınlanınca sayılar değişir, kod değişmez.
⚠️ Zaman akışı kipinde (günlük) süzgeç yalnız işaret yakmayı etkilemiyor — o kip zaten maddeye adım atmıyor.

**Emre'nin bakacağı yer:** Kronoloji başlığındaki "⛭ Konu süzgeci" → en altta "Yalnız toprak değişimi" → işaretle → olay olay oynat; 1300-1330 arası yalnız fetih maddelerine uğramalı.

## 7 · `0027/H-0006` + `0023/H-0003` — Kutsal İttifak rozetleri (PLAN, kod yok)

**Niçin yarım kod yazılmadı:** çizimin tek eksik parçası **veri** ve veri kaynak ister. `ITTIFAK-TASARIM.md §⑤.3`: Linz 1684-03-05 ve Rusya'nın 1686 katılımı tasarım örneği, **kaynaksız**. §4 "atlas referans değildir" gereği `taraf:` dizilerinden türetmek yasak (Bulgu 2: Hünkâr İskelesi aynı alanda müttefik). Bu turda kaynak araştırması yapılmadı.

**Plan — sıra bağlayıcı:**
1. **VERİ (kronoloji/araştırma oturumu, arayüzü beklemez):** `data/ittifaklar.js` → `window.ITTIFAKLAR`. İlk kayıt `kutsal-ittifak-1684` (ikincisi `kutsal-ittifak-1571`, üyeleri ayrı). Alanlar: `id · ad · f · t · uye[] · uye_katilim{} · hedef[] · rozet · renk · kaynak · not`. `uye` `devletler.js` **id**'si; `kaynak` TDV (`karlofca` · `viyana-kusatmasi` · `mora`) ya da akademik — HTTP ile sınanmış slug. `index.html`e script satırı (bende).
2. **KÖPRÜ:** `harita(u) = künye[u].harita || u` (Bulgu 5: `habsburg → avusturya`); köprüsüz ① öngörüsü 6 değil 3 ip verir — `console.warn` ile SAYILIP basılacak.
3. **ARAYÜZ (bende, veri inince, ~150 satır):**
   - `ittifakKur()` — `seferler` kaynağının yanına `ittifak` geojson kaynağı + `ittifak-ip` (line, `line-dasharray [2,3]`, `["get","renk"]`) katmanı; rozetler `maplibregl.Marker` `.ittifak-rozet` (`sefer-rozet` kardeşi).
   - `ittifakGuncelle(t)` — `guncelle()` içinde **yalnız `di !== aktifDonem` dalında** (dönem başına; kare başına hesap YOK, öngörü ⑤ = 0 ms). Çapa `DEVLET_HARITA[].dnm[o dönem].c` (koordinatör kararı açık: `c` mi `baskent` mi — tasarım `c` öneriyor).
   - Yay: kuadratik Bézier, kontrol noktası kiriş ortasından dik `k ∈ {0, ±0.5, ±1 … ±12}°`, `hedef` gövdesini (Osmanlı → `donemler[di].o ∪ .v`) **kesmeyen ilk küçük** `k`. Kesişim testi: kutu ön-süzgeci + parça-parça kesişim (turf yok, saf JS). Çözülemeyen ip ÇİZİLMEZ ve konsola yazılır.
   - **0023/H-0003 tek seferlik vurgu:** ittifakın `f` gününe gelinince rozetlere `odakParla` (CSS, var olan keyframe) 3 çevrim — kare bütçesine dokunmaz. Elektriklenen ip (`line-dasharray` kaydırma) **ölçülmeden girmez** (tasarım §⑤.1).
4. **ÖNGÖRÜ (uygulamadan önce, tasarım §⑦):** 1684-1699 penceresinde 6 ip · ≈%33 bükülü · 0 çözülemeyen · dönem başına < 100 ms · kare başına 0 ms.

**Koordinatöre karar soruları:** ① `data/ittifaklar.js` araştırmasını kim yazar (A3 mü ayrı oturum mu) ② rozet çapası `dnm[].c` mi `baskent` mi ③ ışıltı animasyonu bu dalgada mı.

---

## Aletler (salt okuma, tekrar koşulabilir)
```
node denetim/ARAC-A1-PORTRE-0913.js           portre eşleşmesi: eski/yeni fark listesi
node denetim/ARAC-A1-TIMUR-0913.js            Timur ok pencereleri ve göründüğü maddeler
node denetim/ARAC-A1-TOPRAK-0913.js [--liste] toprak süzgeci sayıları + iki sınav
```
⚠️ `ARAC-A1-PORTRE`in "ESKİ" sütunu **şimdiki** `PADISAH_OLAMAZ` ile koşar (yalnız tarih ve `;` farkını gösterir); yukarıdaki 534 → 525 değişiklik öncesi ilk koşudan.
