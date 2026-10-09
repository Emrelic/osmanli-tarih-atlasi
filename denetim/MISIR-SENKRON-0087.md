# MISIR-SENKRON-0087 — paket 0087: H-0007 · H-0008/9 · H-0010 · H-0011 · H-0012

Makine UMIT · ağaç `C:\atlas-misir` (temel `origin/makine/umit` d16c2b0f) · 9 Ekim 2026
İki diff, ikisi de UYGULANMADI; ağaçta uygulanıp ölçüldü, sonra geri alındı. Commit yok.

## 0. Mekanizma — "animasyon oynamıyor" neyi ölçüyor (ölçüldü, kod okundu)
`js/app.js:10968` `antlasmaFarkiHesapla`: madde açılınca el değiştirme sahnesi yalnız
**[madde günü, Osmanlı kronolojisinde (`olaylar`) bir SONRAKİ maddenin günü − 1]** aralığındaki
sahip değişimini oynatır (en çok 365 gün). 1516-17 Mısır seferi kronolojisi çok sık (maddeler 1-3 gün arayla)
⇒ **kırılma maddenin günüyle aynı ya da 1-2 gün sonrası değilse sahne BOŞ kalır.** Değişmez 2'nin
±30 günü bunu yakalamaz: Süveyş 24 gün, Kahire 22 gün ayrıktı, ikisi de "senkron" sayılıyordu.
⇒ Dördünde de kusur **arayüz değil VERİ**: nokta günü ile madde günü ayrık.

## 1. Madde madde

| # | madde (dosya) | nokta kırılması (önce) | Δ | teşhis | çare |
|---|---|---|---|---|---|
| **H-0007** | 1515-01-01 Nusaybin ve Cizre-Mardin… (`olaylar_ek8`) | Nusaybin · Cizre · Silopi · Cibri `d` **1515-09-19** | 261 g | **madde yanlış** | **SİL** (mükerrer) |
| **H-0008 = H-0009** | 1517-01-22 Süveyş'in alınışı (`olaylar_ek5` + `kronoloji_misir` kopyası) | Süveyş **1517-02-15** | 24 g | **ikisi de** | nokta → 01-24, madde → 01-24 |
| **H-0010** | 1516-12-29 Kudüs'e geliş (`olaylar_ek5`) | Kudüs **1516-10-01** (ay) | −89 g | **kusur YOK** | değişiklik yok |
| **H-0011** | 1517-01-02 Gazze'ye giriş (`olaylar_ek5`) | Gazze · Han Yûnus **1516-12-21** | −12 g | **madde etiketi yanlış** | `toprak-kazanc` kalkar + metin |
| **H-0012** | 1517-01-24 Kahire'ye ilk giriş (`olaylar_ek5`, `kronoloji_misir`) | Kahire **1517-02-15** | 22 g | **nokta yanlış** | Kahire (+3 bağlı nokta) → 01-24 |

### H-0007 — Nusaybin (D205 sınıfı değil; mükerrer + sahte gün)
- TDV `nusaybin`: *"921 (1515) yılı sonlarında Osmanlı topraklarına katıldı."* 921 h. = **15 Şubat 1515 – 4 Şubat 1516**.
  Madde `t:1515-01-01` **920 yılına düşüyor** — yıl-temsilî gün olayın yılının DIŞINDA (D210'un tersi: "temsilî" gün olaydan ÖNCE).
- Maddenin kendi `ic_not_etiket`i zaten *"olaylar_ok107 1515-09-19 … GÜNLÜ anlatıyor … bu madde onun yıl düzeyli mükerreri"* diyor;
  toprak-kazanc daha önce kaldırılmış ama madde Osmanlı kronolojisinde açık kalmış ⇒ Emre bunu açınca harita 261 gün boyunca değişmiyor.
- ⇒ **Öneri A (diff'te):** madde SİLİNİR; Nusaybin/Derik/Silopi/Cizre değişimini `olaylar_ok107` 1515-09-19 maddesi taşır (metni Cizre'yi de anıyor).
  **Öneri B (diff'te değil):** t → 1515-09-19 — ama aynı gün aynı olayın iki maddesi doğar; önermiyorum.
- 📌 **Bildirim:** ok107 maddesinin `gun:"10 Şâban 921 / 19 Eylül 1515"` + `kaynak:"nusaybin"` — TDV `nusaybin` bu günü VERMİYOR;
  gün Âmid'in teslimidir (`olaylar_ek5` 1515-09-19, kaynak `selim-i`). §4 komşu günü şartlı serbest ama kayda **"gün komşudan: Âmid · TDV selim-i"** yazılmamış.
  Noktaların `d` dönemlerinde de kaynak yok. Ayrı kalem (bu diff'e girmedi).
- Mardin: `d` 1517-05-01 ↔ `olaylar_ek13` 1517-05-01 *"Mardin kalesinin teslimi"* — **senkron** (TDV mardin "1516 sonlarında (veya Mayıs 1517)"). H-0007'nin "Cizre-Mardin" ifadesi Mardin şehrini değil çevresini anlatıyor.
- EEK-DOGU-1008 ile çakışma YOK: o rapor Cizre'nin **1467-1469** karakoyunlu adasını inceledi; bu kalem **1515**.

### H-0008/H-0009 — Süveyş (tek cevap)
- TDV `suveys` (HTTP 200, gövde 11.485 kr okundu): 1517 fethine **gün vermiyor** — en erken Osmanlı idarî tarihi 1560/1568. Maddenin `kaynak:"suveys"`
  dayanağı "Ridâniye zaferiyle birlikte" cümlesini TAŞIMIYOR.
- Nokta 02-15'e bilerek çekilmişti: `yer_yama_ok101.js` (H-0053) *"kıyı başkentten önce düşemez"* — Süveyş/Tûr/Sina güneyi `m:Kahire`, Kahire'nin günüyle hizalı.
  **Süveyş'i 01-22'ye geri almak o düzeltmeyi TERS çevirirdi (D206)** — yapılmadı.
- ⇒ Çare Kahire'nin gününden geçer (H-0012): Kahire 01-24'e inince bağlı üç nokta da 01-24'e iner, **madde 01-22 → 01-24** (aynı gün Kahire maddesiyle).
  Sahne penceresi [01-24, 01-26] (sonraki madde 01-27 Tomanbay baskını) ⇒ Süveyş + Kahire değişimi oynar. Gün **ÇIKARIM**, `ic_not_t`de beyanlı.

### H-0010 — Kudüs: veri DOĞRU, Emre'nin gözlemi tarihî gerçeği gösteriyor
- TDV `kudus`: *"Ancak Kudüs, padişahın gelişinden önce muhtemelen Ekim 1516’da Osmanlı yönetimine girmişti"* ⇒ nokta `d.f 1516-10-01` (kesinlik ay, kaynaklı).
- El değiştirme maddesi VAR: `olaylar_p0917kosu13` 1516-10-01 *"Kudüs ve Filistin şehirlerinin Osmanlı yönetimine girişi"* (index.html yüklüyor).
- 29 Aralık maddesi padişahın **ziyaretidir**; `toprak-kazanc` etiketi yok, metni *"Mercidâbık sonrası Osmanlı yönetimine direnmeden geçmiş olan Kudüs'e"* diye başlıyor.
  ⇒ **Değişiklik önerilmedi.** Emre'ye cevap: "harita doğru; Kudüs'ün geçişi Ekim 1516 maddesindedir."

### H-0011 — Gazze: veri savunulabilir, madde yanıltıcı
- Nokta `d.f 1516-12-21` = Hanyûnus çatışması (TDV ridaniye-savasi: *"Burada yapılan çatışmada (26 Zilkade 922 / 21 Aralık 1516) Gazâlî yenilgiye uğrayıp Kahire’ye döndü"*);
  `olaylar_ek5` 1516-12-21 Hanyûnus maddesi `toprak-kazanc`, yer_id Gazze ⇒ senkron.
- TDV selim-i: *"Padişah 8 Zilhicce 922’de (2 Ocak 1517) Gazze’ye girdi ve Sinan Paşa ile buluştu."* ⇒ şehir padişah gelmeden önce öncü kuvvetteydi.
- Kusur: 2 Ocak maddesi `toprak-kazanc` etiketi taşıyor ve metni el değiştirmeyi anmıyor ⇒ Emre haklı olarak "toprak bu gün değişmeli" okuyor.
  **Çare:** etiket kalkar, metne *"Hanyûnus'ta … (21 Aralık 1516) sonra Gazze öncü kuvvetin elindeydi"* cümlesi eklenir.
- ⚠️ **Çelişki bildirimi:** TDV `gazze` yalnız yıl veriyor ve Memlük idaresini *"Mısır’ın Osmanlılar tarafından fethine kadar (1517)"* sürdürüyor.
  Yıl düzeyinde 1516-12-21 ile çelişir görünüyor; selim-i + ridaniye'nin günlü anlatısı esas alındı. "Öncü kuvvetin elindeydi" bir ÇIKARIMDIR (kaynak: Sinan Paşa'nın Gazze'de beklemesi).
- Gazze ve Han Yûnus `d` dönemleri **KAYNAKSIZDI** → KOORD diff'te `kaynak:` beyanı eklendi ("gün komşudan: Hanyûnus çatışması · TDV ridaniye-savasi" + gazze çelişkisi).

### H-0012 — Kahire: nokta yanlış günü taşıyor
- Nokta `d.f 1517-02-15`, `y:savas` = **padişahın merasimle girişi**; bu el değiştirme değil.
  TDV selim-i: *"24 Ocak’ta Osmanlı birlikleri Kahire’ye girerken kendisi emniyet gerekçesiyle dışarıda ordugâhında bekledi."*
  TDV ridaniye-savasi: *"Savaşın ertesi günü Osmanlı ordularının Kahire’ye girişine izin verildi."* … 27-28 Ocak baskını, üç gün sokak çatışması,
  *"Böylece Kahire’de Osmanlı kontrolü sağlanmış oldu"* (o günün tarihi YOK) … *"Yavuz Sultan Selim de asayiş sağlandıktan sonra 23 Muharrem’de (15 Şubat) Kahire’ye girdi."*
- ⇒ **Kahire d.f + memluk s.t: 02-15 → 01-24** (Osmanlı birliklerinin girişi; fiilî kontrol). Seçenek: kontrolün kesinleştiği ~31 Ocak — kaynakta gün yok, yazılmadı.
- Bağlı noktalar (`m:Kahire`, H-0053 hizalaması): **Süveyş · Tûr (Sînâ) · Sina güneyi** aynı güne iner, `kaynak:` "gün komşudan: Kahire 1517-01-24 · TDV selim-i … ÇIKARIM".
- 15 Şubat maddesinden `toprak-kazanc` kalkar (artık kırılma günü değil; aksi hâlde Emre aynı şikâyeti o madde için yazar).
- H-0053 ilkesi korunur: Kızıldeniz kıyısı Kahire'den önce düşmüyor (Kusayr/Sefâce 04-13'te kalıyor, dokunulmadı).

## 2. Öngörü (ölçümden ÖNCE) ↔ ölçüm
| soru | öngörü | ölçüm | |
|---|---|---|---|
| D1 sahipsiz | 309 | 309 | ✓ |
| D2 açık | 0 | 0 (624 kırılma) | ✓ |
| 2s yabancı açık | değişmez | 185 (tavan 185) | ✓ |
| 2t kırılmasız madde | değişmez (Kahire kırılması 02-15 maddesine 22 g) | 13 (tavan 13) | ✓ |
| kronoloji madde | −1 | 2207 → 2206 | ✓ |
| odak | −1, kırık atıf 0 | OLAYLAR 1785 → 1784 · ek8 36 → 35 · ODAKSIZ/→yabancı/kırık değişmedi · çıkış 0 | ✓ |
| `kaynaksız s:` | −2 (Gazze/Han Yûnus) | 1912 → 1912 | ✗ **öngörü yanlıştı:** eklenen kaynak `d:` dönemine; kapı `s:` sayar. `d:` kaynaksızlığı bu kapının sorusu değil |
| — | — | ZAYIF çift (aynı kişi ±3 gün) 81 → 82 | bilgi satırı, ihlal DEĞİL: Süveyş 01-24 ↔ Ridâniye 01-22 |
`denetle.py` önce **2** / sonra **2** — ikisinde de yalnız D8 ölçülemedi (`devletler_harita.js` taze ağaçta yok). `Değişmez`/`Ek denetim` satırları birebir aynı.
Sahne penceresi (elle, app.js mantığıyla): Kahire ve Süveyş 01-24 maddeleri → [01-24, 01-26] kırılmayı İÇERİR; ok107 1515-09-19 → Nusaybin/Cizre/Silopi İÇERİR.
**Tarayıcıda oynatılarak ÖLÇÜLMEDİ** (UMIT ağacında `donemler.js`/harita üretilmiş değil; motor koşusu gerekir).

## 3. Diff'ler ve dosya sahipleri
| diff | dosya | değişiklik | sahibi |
|---|---|---|---|
| `MISIR-SENKRON-0087-KOORD.diff` | `data/yerlesimler.js` · `data/yerlesimler_afrika.js` | Kahire · Süveyş · Sina güneyi · Tûr (Sînâ): 1517-02-15 → 01-24 (s.t + d.f) + d `kaynak:` · Gazze · Han Yûnus: d `kaynak:` | **koordinatör** (§7) · **motor koşusu ister** (nokta günü) |
| `MISIR-SENKRON-0087-KRONO.diff` | `data/olaylar_ek5.js` · `data/kronoloji_misir.js` · `data/olaylar_ek8.js` | Süveyş maddesi t 01-22 → 01-24 (2 kopya) + metin · Gazze 01-02 ve Kahire 02-15 maddelerinden `toprak-kazanc` · ek8 1515-01-01 maddesi SİLİNDİ | `olaylar*` kronoloji çekirdeği — sahibi şartnamede yazılı DEĞİL, son yazan commit'ler koordinatörün `UYGULA`ları ⇒ **koordinatör** varsaydım |
⚠️ **İki diff BİRLİKTE iner** — yalnız KRONO inerse Süveyş maddesi 01-24'te, nokta 02-15'te kalır (Δ 22 g, D2 geçer ama sahne yine boş).
`git apply --check` ikisi de temiz · LF (CR 0) · `motor tuzu` dosyalarına dokunulmadı.
⚠️ `olaylar_ek8.js` ağaçta CRLF çıkıyor (autocrlf); ilk yamam tek CR bıraktı, HEAD'den LF olarak yeniden üretildi — diff 16 satır silme.

## 4. Bulamadıklarım
- Süveyş, Tûr, Sina güneyi'nin kendi teslim günü (TDV suveys gün vermiyor; kusayr slug'ı ölü — H-0053 ölçümü).
- Kahire'de Osmanlı kontrolünün kesinleştiği gün (TDV "üç gün" diyor, tarih vermiyor).
- Gazze şehrinin kendi teslim günü (Hanyûnus komşu günüdür).
- Nusaybin'in kendi günü (TDV "921 sonları").
