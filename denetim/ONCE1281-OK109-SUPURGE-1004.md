# ONCE1281-OK109-SUPURGE-1004 — `olaylar_ok109.js`'in kaç maddesi atlastan türetilmiş?

Oturum: ONCE1281-MOTOR-UFUK-1004 · 5 Ekim 2026 · görev: YILDIRIM BAYEZIT (send_message)
Önceki: [`ONCE1281-AVUSTURYA109-1004.md`](ONCE1281-AVUSTURYA109-1004.md) §6 — `OLAYLAR_OK109[4]` TÜRETİLMİŞ.
**Veriye yazılmadı.**

## 0. Yöntem — ölçümden ÖNCE sabitlendi

- Evren: `data/olaylar_ok109.js`'in TAMAMI (node `vm` ile yüklenir; örneklem YOK).
- İmza üçlüsü, ayrı ayrı: ① `ic_not_*` alanlarında "atlas" / "harita" / "eski ifade" · ② `d`/`b`
  metninde haritayı anlatan dil ("harita … gösterir", "haritaya giriyor", "tek güne toplar",
  "atlas …") · ③ `kaynak:` açılır, `t` gününü taşıyan cümle okunur — o günü BU olay için mi
  söylüyor (D211 ⑧). Hüküm: üçünden biri kesinse TÜRETİLMİŞ; ③ açılamazsa ⚪.
- **Kör nokta ölçüsü (asıl sayı):** her madde için `denetle.degismez2` (d/v) ve 2s zinciri
  (`yer_sarti=True` → `kapsam_disi` → `yil_temsili_ayir`) madde evrenden ÇIKARILARAK yeniden
  koşturulur (bellekte, `denetle`'nin gerçek işlevleri). Çıkarınca AÇIK düşen kırılma sayısı =
  o maddenin "senkron ✓" verdiği kırılma sayısı. Ayrıca türetilmişlerin HEPSİ birlikte çıkarılır.
- Karl'ın çekilişi (koordinatör hükmü: 11 Kasım kalır, TDV farkı beyan) için beyan notu taslağı yazılır.

## 1. ÖNGÖRÜ — dosyayı taramadan ÖNCE

- Dosyada **9 madde** (ilk commit "dokuz madde"); türetilmiş **3–5**. [4] kesin; [5] (Karl 18 Kasım)
  türetilmiş DEĞİL (TDV'ye sadık, gün kaynaklı) ama metninde "haritada görünen" dili var — ② imzasını
  taşıyabilir, ③'ten geçer.
- Kör nokta: [4] çıkarılınca **~109 kırılma** açılır (hepsi `avusturya → halef` 1918-11-11); öteki
  türetilmişler birkaç ila birkaç düzine. Toplam **~120-150 kırılma**.
- Mekanizma: parti maddeleri haritadaki toplu kırılma günlerini "olay" olarak yazmış — her biri bir
  künye ucunun ya da toplu bir `s:` kırılmasının gününe oturtulmuş.
- ⚠️ Kapsam dışı etkisi: Orta Avrupa noktaları Osmanlı küresine yakınsa açılan kırılmalar KAPSAM
  İÇİ düşer (gerçek açık); uzaksa kapsam dışı kovasına gider ve 2s AÇIK sayısı daha az artar.

## 2. Ölçüm — HEAD baş `928d4348` / son `79e28e64` (araya başka commit'ler girdi; `data/olaylar*` ve `arac/denetle.py` ölçümle değişmedi — ölçüm betikleri baş ve sonu basıyor)

### 2.1 Dosya: **11 madde** (öngörü 9 — ilk commit "dokuz madde", sonra 2 eklenmiş)

| # | t | başlık (kısa) | ① `ic_not` imzası | ② harita dili | ③ `t` olayın kendi günü mü | HÜKÜM |
|---|---|---|---|---|---|---|
| 0 | 1918-10-28 | Çekoslovakya bağımsızlık ilânı | "eski ifade: Atlasta … on iki yerleşimi 1918-11-11'de haritaya girer" | var | ✅ (28 Ekim gerçek ilan) | GERÇEK (harita farkını DÜRÜSTÇE yazıyor) |
| 1 | 1918-10-30 | Avusturya Cumhuriyeti kuruluşu | "atlasın … esas alması önerilen tarih" | — | ✅ TDV `avusturya` | GERÇEK |
| 2 | 1918-10-31 | Pat Çiçeği Devrimi | açıklayıcı (`macaristan-naiplik`) | — | ✅ | GERÇEK |
| 3 | 1918-11-03 | Villa Giusti | "eski ifade: Atlasta Trento ve Trieste" | "Haritada Trento ve Trieste bu gün … geçer" | ✅ TDV: "Avusturya 3 Kasım'da … silâhları bıraktı" | GERÇEK (toprak cümlesi atlastan ama gerçekle örtüşüyor) |
| **4** | 1918-11-11 | ardıl devletlere geçiş | "eski ifade: … seksen dokuz yerleşim Avusturya kimliğinden çıkar" | "Harita bu gün … tek güne toplar" | ❌ kaynağı 11 Kasım'ı ALMANYA için söylüyor | 🔴 **TÜRETİLMİŞ** |
| 5 | 1918-11-18 | Karl'ın çekilişi | "eski ifade: — atlas ikincisini boyar" | "haritada görünen" | ✅ TDV `avusturya` 18 Kasım (Parlament Österreich 11 Kasım — §3) | GERÇEK (çelişkili gün) |
| 6 | 1918-12-01 | SHS Krallığı + Büyük Romanya | "eski ifade: Atlasta otuz yerleşim Sırbistan Krallığı'ndan Yugoslavya'ya geçer" | "Haritada … geçer" | ✅ 1 Aralık gerçek | GERÇEK |
| 7 | 1919-09-10 | Saint-Germain | — | "Haritadaki devir bir yıl önce olmuştu" | ✅ | GERÇEK |
| 8 | 1920-06-04 | Trianon | "eski ifade: Atlasta Macaristan Naipliği'nin yirmi yerleşimi" | "Haritada … görünür" | ✅ | GERÇEK |
| **9** | 1919-06-28 | Versailles — Alsas-Loren Fransa'ya döndü | "eski ifade: Atlasta bu gün" | "Haritada bu gün Strazburg, Metz, Colmar ve Mulhouse Almanya'dan Fransa'ya geçer" | ⚠️ antlaşmanın günü gerçek, ama **toprak devri iddiası** kaynakta YOK — kaydın kendi `kaynak:`'ı: *"Dört şehrin el değiştirmesi atlasın KENDİ verisinden okunmuştur (1919-06-28'de almanya → fransa-cumhuriyet, 4 kayıt)"* | 🔴 **TÜRETİLMİŞ (toprak iddiası)** — Alsas-Loren Kasım 1918'den beri Fransız işgalinde, hukukî devir antlaşmanın YÜRÜRLÜĞÜ (10 Ocak 1920); imza günü bir devir günü DEĞİL (genel bilgi, kaynak açmadım) |
| 10 | 1919-11-27 | Neuilly | "eski ifade: Atlasta bu devrin karşılığı" | haritanın Mayıs 1920'de değiştiğini DÜRÜSTÇE yazıyor | ✅ | GERÇEK |

🔴 **Türetilmiş: 2** (#4 tam; #9 toprak iddiası — kendi kaynak alanı itiraf ediyor). ① imzası ("eski ifade:
Atlasta …") **9/11** maddede var ama bu tek başına türetme DEĞİL: partinin bütün maddeleri haritayı anlatan
cümleleri sonradan yeniden yazmış; tarihlerin 9'u olayın kendi günü.

### 2.2 KÖR NOKTA — bu maddeler kaç kırılmaya "senkron ✓" veriyor?

Karşı-olgusal: her madde (tek tek, #4+#9 birlikte, 11'i birden) evrenden çıkarılıp `denetle.degismez2`
(d/v) ve 2s zinciri (`yer_sarti` → `kapsam_disi` → `yil_temsili_ayir`) bellekte yeniden koşturuldu.
**Makinenin sınavı:** alakasız tek bir madde ile → Değişmez 2 **623/623**, 2s **1711/1711** açık (makine
çalışıyor). ⚠️ Boş madde listesiyle sınav GEÇERSİZ: `degismez2` `if not ol:` dalında farkı 0 yazıyor
(`denetle.py:1554`) — "madde yok" = "hepsi kapalı". Bir tuzak; kayıt olsun.

| çıkarılan | Değişmez 2 açık | 2s açık-ham | 2s AÇIK |
|---|---|---|---|
| her biri tek tek (11 koşu) | +0 | +0 | +0 |
| #4 + #9 | +0 | +0 | +0 |
| **dosyanın tamamı (11)** | **+0** | **+0** | **+0** |

🔴 **Cevap: 0 kırılma.** Türetilmiş maddeler kapıyı TAŞIMIYOR — çünkü kapı onlara MUHTAÇ değil:
1918-11-11'in 109 kırılmasını ok109 DIŞINDAKİ maddeler de kapatıyor: **"1918-11-12 Avusturya Cumhuriyeti'nin
ilânı" (sessiz_borc_0919) 109'un 109'unu**, "Villa Giusti Ateşkesi — Güney Tirol" 24'ünü, "SHS Krallığı kuruldu —
Yunanistan'ın kuzey sınırı" 39'unu, "Karadağ Sırbistan'la birleşti" 16'sını … Ok109 çıkarılınca YALNIZ ok109
ile kapanan nokta: **0**.

### 2.3 Asıl kör nokta — TARAF kolu (ölçüldü, bütün 2s)

Yukarıdaki maddeler 109 noktayı YERİNİ anarak değil, ESKİ SAHİBİN adını ("Avusturya") anarak kapatıyor
(`_2s_tarafi_aniyor`). Bu kolu bütün 2s'de ölçtüm (`denetle`'nin kendi `_2s_yeri_aniyor` / `_2s_tarafi_aniyor`
işlevleri, aynı ±30 gün penceresi):

| kapalı 2s kırılması (yer × gün) | **3160** |
|---|---|
| ⤷ en az bir madde YERİ anıyor | 1558 |
| ⤷ **YALNIZ TARAF ile** kapanıyor — hiçbir madde yeri anmıyor | **1602 (%51)** |

En büyük yalnız-taraf kümeleri: 1920 `→ tbmm-turkiye` 214 · 1736 `safevi → afsar` 129 · 1747 `afsar → zend` 127 ·
1867 `ingiliz-kuzey-amerika → kanada` 124 · 1889 Brezilya imparatorluk → cumhuriyet 92 · 1340 `ilhanli →
celayirli` 64 · 1410 `suleyman-celebi → musa-celebi` 53 …
⚠️ Taraf kolu bir KUSUR değil, `D261`'in bilerek kurduğu kural (rejim değişiminde bütün noktalar aynı olayla
el değiştirir — 1736 Nadir'in tahta çıkışı gibi). Ama ölçtüğü şey **"o gün o DEVLETİN bir olayı var"**dır,
**"bu YER o gün el değiştirdi"** değil. ⇒ Değişmez 2s'nin "kapalı" hükmünün **yarısı yer düzeyinde
doğrulanmamıştır**. Avusturya-109'un künye gününden devralınmış sahte günü (KUNYE-GUNU sınıfı) tam bu yarıda
saklanıyor: türetilmiş madde silinse de "Avusturya" adını anan herhangi bir yakın madde onu kapatır.

## 3. Karl'ın çekilişi — beyan notu taslağı (koordinatör hükmü: 11 Kasım KALIR)

`olaylar_ok109.js` #5'e (`t: 1918-11-18`) ya da ilgili kayda eklenecek `ic_not`/`kaynak` beyanı:
> "TDV `avusturya` imparatorun devlet işlerinden çekilişini **18 Kasım** diye verir; Avusturya Parlamentosu
> (parlament.gv.at, 'Geburt der Republik') **11 Kasım 1918** der. Avusturya anayasa hukuku olayında kurumun
> kendi kaydı esas alınmıştır (§4'ün TDV önceliği 'İslâm dünyası, Osmanlı ve komşuları' içindir)."
⚠️ #5'in `t`'si 18 Kasım; hüküm 11 Kasım ⇒ #5 ya 11 Kasım'a çekilmeli ya da kaldırılmalı (aynı olay
`kronoloji_habsburg.js` ve `olaylar_sessiz_borc_0919.js`'te 11/12 Kasım'da zaten var — üç madde, aynı olay).

## 4. Öngörü × ölçüm

| öngörü | ölçüm | |
|---|---|---|
| 9 madde | 11 | ❌ |
| türetilmiş 3–5 | **2** | ❌ az |
| [5] ② imzası taşır, ③'ten geçer | ✅ aynen | ✅ |
| [4] çıkarılınca ~109 kırılma açılır, toplam ~120-150 | **0** | ❌ TAMAMEN yanlış — kapı bu maddelere muhtaç değil; körlük TARAF kolunda |
| ÖNGÖRÜLMEYEN | 2s kapanışlarının %51'i yer anılmadan, yalnız taraf adıyla | |

## 5. Öneri (karar koordinatörde)

1. #4 ve #9'un düzeltilmesi (ya da silinmesi) **kapıyı değiştirmez** (Δ 0) — yani güvenle yapılabilir; ama
   kapıyı "doğru" yapmaz.
2. Asıl iş: 2s'nin taraf kolunun yer düzeyinde ne ölçtüğü — `denetle.py` sahibinin kalemi. Öneri: raporda
   "kapalı (yer)" ile "kapalı (yalnız taraf)" AYRI satır olsun; ikincisi tavanlı bir borç gibi izlensin.
3. Karl beyanı (§3) + aynı olayın üç maddede tekrarı.

## 6. UYGULAMA — `denetim/ONCE1281-OK109-UYGULA-1004.diff` (78 satır · `apply --check` 0)

Berlin usulü: worktree (HEAD `395b2207`) → `denetle` ÖNCE → yama → `denetle` SONRA → iki yönlü karşı-olgusal
sınav YAMALI ve YAMASIZ ağaçta → `git diff --output` → ana ağaçta `apply --check` → worktree kaldırıldı.
Dosyalar: `data/olaylar_ok109.js` (16+/24−) · `data/olaylar_sessiz_borc_0919.js` (1 satır).

### A) #4 — ÖNERİ: KALDIR + gerçek ama maddesiz tek günü EKLE (bölmek de, 3 Kasım'a çekmek de mükerrer üretir)
- **3 Kasım'a çekmek** = #3 Villa Giusti (1918-11-03, aynı kaynak cümlesi) ile MÜKERRER.
- **Gerçek günlere bölmek:** 28 Ekim (#0 VAR), 30 Ekim (#1 VAR), 31 Ekim (#2 VAR), 3 Kasım (#3 VAR),
  1 Aralık (#6 VAR) — **maddesi OLMAYAN tek gerçek gün 29 Ekim** (Hırvat Saboru / Država SHS; Bosna 1 Kasım).
  ⇒ Bölmek = #4'ü kaldırıp YALNIZ 29 Ekim maddesini eklemek. Yaptığım budur.
- **Yeni madde** `t: 1918-10-29` "Sloven-Hırvat-Sırp Devleti'nin ilânı — Hırvat Saboru Habsburg bağlarını kopardı",
  `odak_yer: Zagreb · Ljubljana · Saraybosna` (üçü de yerleşim olarak VAR, ölçüldü). Dört kaynak, **dördünü de
  bu oturumda açtım**: Hrvatska enciklopedija "Država SHS" ve "Zagreb" · Zgodovinski arhiv Ljubljana · BiH
  Parlamentosu (alıntılar maddenin `kaynak:`'ında).
- **İz SİLİNMEDİ (koordinatör şartı), TAŞINDI:** yeni maddenin `ic_not_turetilmis` alanı #4'ün eski başlığını,
  kaynağını ve `ic_not_d`'sini AYNEN taşıyor + "TÜRETİLMİŞ bulundu ve kaldırıldı (5 Ekim 2026; D207, D211 ⑧,
  D260)" notu. ⚠️ Koordinatör "tek madde kalsın" seçerse alternatif: #4 yerinde, `t` → 1918-11-03 — ama #3
  ile mükerrer olur; önermiyorum.

### B) #9 Versailles — gerçek devir günü KAYNAKTAN bulundu
Versailles Antlaşması **md. 51** (Yale Avalon Project — açtım): *"The territories which were ceded to Germany …
are restored to French sovereignty **as from the date of the Armistice of November 11, 1918**."*
⇒ Alsas-Loren'in hukukî devri **1918-11-11** (geriye dönük); 1919-06-28 imza günü devir günü DEĞİL.
- Madde: başlık "… Alsas-Loren'in Fransa'ya iadesi hukuka geçti"; `d`'deki "Haritada bu gün … Fransa'ya geçer"
  cümlesi md. 51'in hükmüyle değiştirildi; `kaynak:` başına md. 51 alıntısı; `ic_not_turetilmis` eski cümleyi
  ve "atlasın KENDİ verisinden okunmuştur" itirafını taşıyor; eski `ic_not_d` ("eski ifade: Atlasta bu gün")
  DOKUNULMADI.
- 🔴 **Veri kalemi (diff DIŞI, `yerlesimler*` sizde):** 4 yerleşim (Strazburg, Metz, Colmar, Mulhouse)
  `almanya → fransa-cumhuriyet` kırılması 1919-06-28 → **1918-11-11** önerisi. Fiilî giriş günleri (Fransız
  birliklerinin Kasım 1918'deki girişleri) şehir başına **bulunamadı** (kaynak açmadım).
- Yan gözlem: `denetle` mükerrer listesinde yeni başlık **"1920-01-10 Versay Antlaşması yürürlüğe girdi —
  Alsas-Lo…"** maddesiyle çift oldu (önek ölçütü, ihlal değil) — evrende Versay'ın Alsas'ı anan ikinci bir
  maddesi ZATEN varmış.

### C) #5 kaldırıldı + TDV beyanı yaşayan maddeye
`olaylar_ok109.js` #5 (1918-11-18 Karl, TDV) KALDIRILDI. `olaylar_sessiz_borc_0919.js` 1918-11-12 maddesine
`ic_not_kaynak`: *"TDV avusturya … 18 Kasım diye verir … Parlament Österreich 11 Kasım 1918 der. Avusturya
anayasa hukuku olayında kurumun kendi kaydı esas alınmıştır — §4'ün TDV önceliği 'İslâm dünyası, Osmanlı ve
komşuları' içindir (koordinatör hükmü, 5 Ekim 2026). Aynı olayı 18 Kasım'a koyan olaylar_ok109.js maddesi
mükerrer olduğu için kaldırıldı."*

### D) İKİ YÖNLÜ SINAV — aynı ağaçta YAMALI ve YAMASIZ (girdi/denetle o ağacın kendisinden)

| | madde | Değişmez 2 | 2s kırılma | 2s açık-ham | **2s AÇIK** | kapsam dışı | yıl-borç |
|---|---|---|---|---|---|---|---|
| YAMASIZ | 2170 | 623 / **0** | 1711 | 1145 | **189** | 792 | 164 |
| **YAMALI** | 2169 | 623 / **0** | 1711 | 1145 | **189** | 792 | 164 |
| YAMALI, kalan ok109 (10) de çıkarılınca | 2159 | 623 / 0 | 1711 | 1145 | 189 | 792 | 164 |
| **makine sınavı** (tek alakasız madde) | 1 | 623 / **623** | 1711 | **1711** | 639 | 795 | 277 |

⇒ **Δ = 0** (yamadan önce ve sonra); düzenek çalışıyor (alakasız madde → her şey açılıyor).
**Taraf kolu (koordinatörün kapıdan okuyacağı sayılarla karşılaştırma için):** iki ağaçta da kapalı **3160** ·
yer **1558** · yalnız taraf **1602** — yama bu sayıları değiştirmiyor.

`denetle.py` çıktısı ÖNCE ↔ SONRA (çıkış ikisinde de 2 — worktree'de üretilmiş dosya yok, Değişmez 8
ölçülemedi): değişen satırlar YALNIZ — madde 2170 → 2169 · mükerrer şüpheli çift **113 → 112** · ZAYIF çift
107 → 108 · ÖNEK çift 19 → 20 (bilgi). **Hiçbir değişmez satırı değişmedi** (2t dahil: kırılmasız #5 gitti,
yeni 29 Ekim geldi).
