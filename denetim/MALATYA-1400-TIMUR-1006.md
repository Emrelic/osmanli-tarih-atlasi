# MALATYA-1400-TIMUR-1006 — Malatya · Darende · Elbistan 1395-1410

Görev: UMIT İRTİBAT (P84-TIMUR-SAHIPLIK-1006 yan bulgusu 1-2). Makine UMIT · ağaç
`C:\atlas-p84-malatya` (detached, `origin/makine/umit` @ `b2d4c2ff`). **YALNIZ ÖLÇÜM VE
ÖNERİ** — iki diff UYGULANMADI. TDV gövdeleri 6 Ekim 2026'da çekildi:
`denetim/MALATYA-1400-TIMUR-1006-tdv/*.txt` (ilk satır = URL; `timur.txt` P84'ten kopya,
yeniden çekilmedi). Metne çevirme: `denetim/ARAC-MALATYA-METIN-1006.py`. Diff üretimi:
`denetim/ARAC-MALATYA-DIFF-URET-1006.py` (yalnız kendi ağacımda, `git checkout --` ile geri
alındı). Görsel AÇILMADI (soru metinle cevaplanabildi).

## 0. ÖNGÖRÜ — ölçümden ÖNCE yazıldı
- **Sayı:** 3 yerleşimde **2-4 kusur**: ① Malatya Osmanlı penceresi 1402-07-28 yerine 1400'de
  bitmeli · ② Malatya 1402 sonrası `memluk` yerine `dulkadir` (TDV-TARIH 11b ile aynı) ·
  ③ Darende ve/veya Elbistan 1398-1401 `dulkadir` kodu TDV ile ÇELİŞMEZ.
- **Mekanizma:** atlas Osmanlı kayıplarını toptan Ankara (1402-07-28) gününe bağlamış;
  Timur'un 1400 Fırat yolu (Sivas → Elbistan → Malatya) ayrı kırılma olarak kodlanmamış.
  Timur zaptı geçici işgal (`isg:`), kalıcı ardıl Dulkadır.
- **Gün:** TDV 1400 için gün/ay vermeyecek ⇒ yıl hassasiyeti.

**Karşılaştırma (ölçümden sonra):** sayı TUTTU (2 kesin kusur + 1 tek-kaynak bulgusu, Elbistan
negatif). Mekanizma ① TUTTU; ② YARI ÇÜRÜDÜ — "1402-1516 tamamı dulkadir" TDV'ye göre de
fazla (bkz. §3.2); "Timur zaptı `isg:`" ÇÜRÜDÜ — süresi kaynakta yok, kodlanamaz (§3.3).
Gün öngörüsü TUTTU.

## 1. Mükerrer kapısı (ölçüldü — HÜKÜM arandı, ad değil)
- `TDV-TARIH.md` §11b (Malatya: memluk 1281→1315 · **1402-1516 → dulkadir** · d: 1516-07-28)
  ve `BULGU-VERI-ACIK.md:43` `TDV-K11b` (durum: `veri`, AÇIK). 1281→1315 kısmı veride
  UYGULANMIŞ (ilhanli 1281-1315); **1402-1516 dulkadir UYGULANMAMIŞ**, 1516 günü
  uygulanmamış. 11b **1399-1402 Osmanlı penceresini sorgulamıyor** ⇒ bu kalemin ① maddesi
  yeni; ② maddesi 11b'nin devamıdır ve 11b'yi DARALTIR (§3.2).
- `KRONO-DOGU-ISLAM-0929-YERLESIM-ONERI.md:14` #4 (Arapkir · Behisni · Hısn-ı Mansûr · Kâhta,
  "ölçülemedi") — aynı TDV cümlesini anıyor, Malatya'nın kendisi için hüküm YOK.
- `UMIT-W49b-P3-1d-malatya-1006.diff` — yalnız `tdv-malatya`→`malatya` slug düzeltmesi
  (1315 maddesi), bu kalemle kesişmiyor. Okundu.
- `P84-TIMUR-SAHIPLIK-1006.md` §1 yan bulgu 1-2 — bu kalemin kaynağı.
⇒ DUR gerekmedi.

## 2. ÖLÇÜM — zincirler 1395-1410 (`girdi.yukle()`, P84 aracı `--zincir`)

| yerleşim | dosya:satır | 1395-1410 zinciri | kaynak alanı |
|---|---|---|---|
| **Malatya** | `data/yerlesimler.js:256` | `s:memluk` 1338-01-01→**1399-09-01** · `d:` 1399-09-01→**1402-07-28** (`y:savas`) · `s:memluk` 1402-07-28→1516-08-24 · `kd` k:0 penceresi 1402-07-28'de yeniden açılıyor | `kaynak:` yalnız 1315/1338 için; 1399-1516 KAYNAKSIZ |
| **Elbistan** | `data/yerlesimler.js:1443` | `s:dulkadir` **1384-01-01→1522-01-01** kesintisiz · Osmanlı yok · `isg:` yok | `s:` kaynaklı (TDV `elbistan`, YAMA-0052B-NOKTA #5) |
| **Darende** | `data/yerlesimler_ok110.js:59` | `s:dulkadir` **1338-01-01→1522-01-01** kesintisiz · Osmanlı yok | 1338-1522 için kaynak alanı YOK |
| (bağlam) Arapkir · Kâhta | `yerlesimler.js:2285` · `:2288` | Malatya ile aynı: d: 1399-09-01→1402-07-28 · memluk →1516 | kaynaksız |
| (bağlam) Divriği | `yerlesimler.js:2284` | d: 1398-01-01→**1401-01-01** · memluk →1516 | TDV `divrigi` (P84'te doğrulandı) |

Kronoloji (Değişmez 2 evreni): `data/olaylar_ek.js:44` `t:"1399-09-01"` "Malatya'nın alınışı"
(`gun:"1399"`, `kaynak:"ankara-savasi"`). Malatya'nın 1402-07-28 kırılması Ankara
maddesiyle örtülüyor. **1400 için Malatya/Elbistan maddesi YOK**; `olaylar_ek5.js:45`
"Timur Sivas'ı yerle bir etti" (`t:"1400-08-01"`, `gun:"Ağustos 1400"`, `kaynak:"sivas"` —
TDV `sivas` gövdesi yalnız "(1400)" diyor, AY gövdede YOK ⇒ komşu günü olarak DEVRALINAMAZ,
`CLAUDE.md §4` şartı ① sağlanmıyor).

## 3. KAYNAK — TDV, birebir (rakamı taşıyan cümle ve neyi tarihlediği)

### 3.1 Malatya — Osmanlı 1399, Timur 1400, ardından Dulkadır
`malatya`:
- "Malatya ilk olarak 1399’da Yıldırım Bayezid tarafından Osmanlı hâkimiyeti altına
  alındıysa da bu uzun süreli olmadı." → **1399 = Osmanlı alışı**.
- "Yıldırım Bayezid, Malatya’yı Dulkadıroğlu Nasreddin Mehmed’e bırakarak Bursa’ya
  dönmüştü." → yıl YOK; 1399-1400 arası Malatya'nın fiilî idaresi Dulkadıroğlu'nda.
- "1400’de Anadolu’ya giren Timur, önce Sivas ve Elbistan’ı işgal etti, daha sonra
  Malatya’ya yöneldi." → **1400 Timur'un Anadolu'ya GİRİŞİNİ tarihler**; Malatya'nın düşüşü
  aynı seferin devamı, ayrı yıl verilmiyor (aynı yıl okunur, ay YOK).
- "Malatya ve çevresi yağmalandı, şehrin idaresi Timur’un yanında bulunan Karayülük Osman’a
  bırakıldı (İbn Tağrîberdî, XII, 218, 265)." → yıl YOK.
- "Timur’un Malatya’dan ayrılmasının ardından Dulkadıroğulları buraya tekrar hâkim oldu."
  → yıl YOK.

`timur`: "1399-1400 yılı kışını Karabağ’da geçirdikten sonra Bingöl’e ulaştı." ⇒ 1400
olayı yılın başında DEĞİL; `1400-01-01` yalnız yıl işaretidir (`§4` kuralı), gerçek tarih
bundan sonra. Sivas'ın teslimi TDV `sivas`ta "(1400)" — ay yok.

### 3.2 Malatya — 1402 sonrası: tamamen Dulkadır DEĞİL
`malatya`: "XIV. yüzyılın ilk yarısından itibaren Malatya ve civarı Dulkadıroğulları ile
Memlükler arasında mücadele alanı haline geldi; bazan Memlük valileri, bazan da Dulkadır
beyleri tarafından yönetildi." · "Bu dönemden itibaren Malatya, Dulkadır topraklarının bir
kısmını teşkil etmesi sebebiyle Osmanlı-Memlük çıkar çatışmalarının odak noktası haline
geldi."
`dulkadirogullari`: "1421’de Memlük Sultanı Şeyh’in ölümü üzerine Suriye’de çıkan
karışıklıktan faydalanan Nasreddin Bey’in yeğeni İbrâhim oğlu Tuğrak Malatya’yı zaptetti."
⇒ 1421'de Malatya Dulkadır'ın **elinde değildi** ki zaptedilsin — kimin elinde olduğunu
cümle SÖYLEMİYOR (Memlük olduğu çıkarımdır, tırnağa girmez). Ayrıca aynı maddede Cem
olayından sonra "Memlükler’in elinde bulunan Malatya’yı kuşattı" geçiyor (1480'ler).
⇒ **TDV-TARIH 11b'nin "1402-1516 → dulkadir" önerisi TDV'ye göre de fazladır**: nöbetleşme
var, devir yılları kaynakta YOK. 11b'nin bu maddesi olduğu gibi uygulanırsa yeni bir
kaynaksız kesinlik doğar.

### 3.3 Elbistan — atlas DOĞRU (negatif bulgu)
`elbistan`: "Elbistan’a yönelik ilk Osmanlı harekâtı 1399 yılında Yıldırım Bayezid
tarafından gerçekleştirildi; ancak bölge Osmanlı topraklarına katılmayarak Dulkadıroğlu
Nâsırüddin Mehmed’e bırakıldı." · "Bundan bir yıl sonra Timur Elbistan ve yöresini tahrip
etti." · "Bu tarihten itibaren bölge Osmanlılar’la Memlükler arasındaki nüfuz mücadelesine
sahne oldu."
`dulkadirogullari`: "Nihayet Osmanlı Padişahı Yıldırım Bayezid duruma müdahale ederek 1399
yazında Sadaka’yı Elbistan’dan sürüp beyliğin başına Nasreddin Mehmed Bey’i getirdi." ·
"Sivas’ın düşmesinden sonra Timur, oğlu Şâhruh Mirza’yı Mehmed Bey’den intikam almak için
Elbistan’a yolladığı gibi ertesi yıl Suriye seferinden dönüşte Halep civarında Tedmür
yakınlarında kışlayan Dulkadır Türkmenleri üzerine baskın yaptırdı."
⇒ Elbistan 1399'da **açıkça Osmanlı'ya katılmadı**; atlasın kesintisiz `dulkadir`i TDV ile
uyumlu. Timur'un 1400 tahribi bir **akın/tahrip**, sahiplik değişimi değil; süresi yok ⇒
`isg:` için pencere kurulamaz. ⚠️ TDV kendi içinde ayrışıyor: `malatya` ve `bayezid-i`
Elbistan'ı Bayezid'in "ele geçirdiği" yerler arasında sayıyor — `elbistan`'ın açık cümlesi
("Osmanlı topraklarına katılmayarak") daha dar ve doğrudan; taraf seçilmiyor, bildiriliyor.
Bayezid'in kurduğu Dulkadır yönetimini Osmanlı **tâbiliği** (`v:`) saymak çıkarımdır
(TDV "tâbi" demiyor) ⇒ ÖNERİLMEDİ.

### 3.4 Darende — tek kaynak, bitiş bulunamadı
- TDV'de `darende` maddesi **YOK** (6 Ekim 2026): `darende` → **302**; `darende-kasabasi`,
  `darende-ilcesi` → 302; başlık araması (`/arama/?q=darende`, `&p=m`) yalnız
  `mehmed-pasa-darendeli`, `izzet-mehmed-pasa-darendeli` döndürüyor (ilk sayfa ~10 sonuç,
  sayfa sayısı basılmıyor); tam metin (`&p=t`) aday: `anadolu`, `besni`, `danismendliler`,
  `divrigi` … — yalnız `divrigi` okundu.
- `divrigi`: "… Yıldırım Bayezid 1398’de Sivas, Malatya, Besni (Behisni), Darende ve
  Divriği’yi iki ay muhasaradan sonra Osmanlı topraklarına kattı." → **1398 = Darende'nin
  Osmanlı'ya katılışı** (Malatya ile aynı cümle).
- `timur`: "… 1399’da Memlük sultanının vefatı üzerine Fırat bölgesine inerek Malatya,
  Dârende ve Divriği’yi işgal etmesi …" → 1399.
- `malatya`: Darende'yi Bayezid'in aldığı yerler arasında sayıyor (yıl cümlede yok).
- Darende'nin Osmanlı'dan ÇIKIŞI: **bulunamadı** (hiçbir okunan gövdede cümle yok).
⇒ Atlas Darende'yi 1398/1399-? arası `dulkadir` gösteriyor; üç TDV maddesi Bayezid'in
aldığını söylüyor. Ama Malatya örneğinde aynı "Osmanlı topraklarına kattı" cümlesinin
arkasında Dulkadır idaresi çıktı (§3.1) ve Elbistan'da açıkça "katılmayarak" var — Darende
hangisi, **ölçülemedi**. Ayrıca bitiş yılı yok ⇒ `d:` penceresi uydurmadan yazılamaz.
Atlasın Darende kaydının kendisi kaynaksız (çelişki ilan etmek için iki kaynak yok —
`OLCUM-KITA §4`). **Hüküm: kusur ADAYI, düzeltme önerilmez.**

📌 TDV kendiyle çelişiyor (P84'te de bildirildi, burada tekrar ölçüldü): Bayezid'in Fırat
seferi `divrigi`de **1398**, `malatya`/`timur`/`elbistan`/`dulkadirogullari`da **1399**.

## 4. FARK + ÖNERİ (UYGULANMADI)

| # | yer | atlas | TDV | sınıf | öneri |
|---|---|---|---|---|---|
| 1 | Malatya Osmanlı bitişi | d: →**1402-07-28** | Timur **1400**'de aldı, sonra Dulkadır | kusur · `s:`/`d:` sahiplik | `d:` bitişi **1400-01-01** (yıl hassasiyeti) |
| 2 | Malatya 1400-1402 sahibi | `memluk` (1402'den) / Osmanlı (1400-1402) | "Dulkadıroğulları buraya tekrar hâkim oldu" | ③ ardıl yapı | `s:dulkadir` 1400-01-01→1402-07-28; **bitiş KAYNAKSIZ** (atlasın eski sınırı) — kayda yazıldı |
| 3 | Timur/Karayülük ara dönemi | yok | var, süresiz | geçici zapt | **kodlanmaz** (pencere yok); kronoloji maddesinde anılır |
| 4 | Malatya 1402-1516 | `memluk` kesintisiz | Memlük/Dulkadır nöbetleşmesi, yıl YOK; 1421 Tuğrak zaptı | kaynaksız | dokunulmaz; 11b'nin "tamamı dulkadir"i UYGULANMAMALI (§3.2) — kayda kaynaksızlık beyanı koordinatörün kararı |
| 5 | Elbistan | dulkadir 1384-1522 | 1399 "katılmayarak", 1400 Timur tahribi | **atlas DOĞRU** | yok |
| 6 | Darende | dulkadir 1338-1522 | 1398/1399 Bayezid "kattı"; çıkış bulunamadı | aday | yok — kaynak işi (Darende'nin 1400-1402 durumu) |

Tarih: `1400-01-01` CLAUDE.md §4 kuralıyla (gün yok ⇒ YYYY-01-01). ⚠️ Bu tarih olayın
gerçek gününden **önce**dir (TDV `timur`: Timur 1399-1400 kışı Karabağ'da) — bu yüzden
Osmanlı penceresi gerçekte birkaç ay daha uzun; kayıt ve madde bunu açıkça yazıyor.
Alternatif (Sivas maddesinin `1400-08-01`ini devralmak) `§4` "komşu günü" şartını
sağlamıyor: Sivas'ın AYI kendi kaynağında (TDV `sivas`) yok.

### Diff'ler (temel `origin/makine/umit` @ `b2d4c2ff`, LF, `git apply --check` temiz)
- `denetim/MALATYA-1400-TIMUR-1006-KOORD.diff` — `data/yerlesimler.js:256` (KOORDİNATÖR):
  `d:` 1399-09-01→**1400-01-01** · yeni `s:{f:"1400-01-01",t:"1402-07-28",d:"dulkadir",kaynak:…}`
  · `kd` k:0 penceresi 1402-07-28 → **1400-01-01** (Değişmez 3 ölçümü için).
  `dulkadir` künyesi `f:1337-01-01 t:1522-01-01` (`devletler.js:464`) — pencere uygun,
  hayalet yok. Boya: `harita:"dulkadir"` (Elbistan/Darende zaten boyanıyor).
- `denetim/MALATYA-1400-TIMUR-1006.diff` — `data/olaylar_ek.js` (UMIT partisi): 1 madde
  `t:"1400-01-01"` "Timur Malatya'yı aldı — şehir Dulkadıroğulları'na geçti", `yer_id:"Malatya"`,
  `kaynak:"malatya (TDV …)"`, `gun:` yıl hassasiyeti beyanı. Değişmez 2 için ŞART: yeni
  `d:` kırılması (1400-01-01) bu maddeyle örtülür. **İki diff BİRLİKTE uygulanmalı.**

## 5. DENETİM — iki diff kendi ağacımda uygulanıp `denetle.py` koşturuldu, sonra geri alındı
(`git checkout --`; `git status --short data/` boş). Önce/sonra, aynı ağaçta:

| ölçü | önce | sonra |
|---|---|---|
| çıkış kodu | **2** | **2** — ikisinde de tek sebep: Değişmez 8 ÖLÇÜLEMEDİ (`devletler_harita.js YOK` — taze ağaçta üretilmiş dosya yok). **D8 bu öneri için ölçülmedi** (motor çıktısı ister) |
| D1 sahipsiz | 309 / 309 | 309 / 309 ✓ |
| D2 Osmanlı senkronu | 623 kırılma, 0 açık | **624** kırılma, **0 açık** ✓ (yeni 1400-01-01 kırılması yeni maddeyle örtüldü) |
| D2s · D2i · D2t | 186/189 · 1/1 · 13/13 | değişmedi ✓ |
| D4 hayalet | 0 | 0 ✓ (`dulkadir` künye penceresi içinde) |
| Sayaç `m:`/egemen | 485 | **489 (+4)** |
| D3z zamanlı (`kd:`) | 53 | **58 (+5)** |

**+4 / +5'in mekanizması (ölçüldü, 1401-06-01):** `m:"Malatya"` taşıyan dört yerleşim —
**Arapkir · Kâhta · Behisni (Besni) · Hısn-ı Mansûr** (`yerlesimler.js:2285-2288`) — öneriden
sonra 1400-1402 arasında Osmanlı kalıyor ama merkezleri Malatya artık Dulkadır ⇒ dört
`m:` uyuşmazlığı; `kd:` tarafında beşinci Divriği (1400'de Osmanlı, `m:"Malatya"`).
Bu bir HATA DEĞİL, önerinin GÖSTERDİĞİ şeydir: dört komşunun 1400-1402 Osmanlı penceresi de
aynı kaynaksız "Ankara sınırı"dır. TDV `bayezid-i` Behisni ve Kâhta'yı, `divrigi` Besni'yi
Bayezid'in aldıkları arasında sayıyor; **Timur'dan sonra kimde kaldıkları hiçbir okunan
gövdede YOK** ⇒ ölçülemedi, düzeltme önerilmedi. (Sayaç tavansız ve "veri kusuru DEĞİL"
diye basılıyor; yine de koordinatörün göreceği bir artıştır.)
