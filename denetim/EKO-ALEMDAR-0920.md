# EKO-ALEMDAR — paket 0071 §2 raporu (20 Eylül 2026)

Oturum: EKO-ALEMDAR (Opus, `local_e5665449-529a-4602-964d-231f4d9af0ba`) ·
şartname `oturumlar/DALGA-0071.md` §2 (H-0008 · H-0009 · H-0010 · H-0011 · H-0014) ·
çıktı `data/ekokuma_alemdar.js` (`window.EKOKUMA_ALEMDAR`).

## 1 · ALEMDAR'IN ÖLÜM GÜNÜ — yetki M-4758 (1.MURAT), ÖNGÖRÜ ÖNCE YAZILDI

**Bulgu.** `data/olaylar_ek2.js` kaydı `t:"1808-11-15"` · `gun:"15 Kasım 1808"` ·
`b:"Alemdar Mustafa Paşa'nın ölümü"`. Gövdesi açılan **üç** bağımsız künye ölümü
**16 Kasım 1808**'e veriyor:

1. TDV `alemdar-mustafa-pasa` (Kemal Beydilli, 1989): "15 Kasım 1808 gecesi başlayan
   ayaklanma neticesinde Alemdar Bâbıâli'de basıldı… cephaneliği ateşe vererek yüzlerce
   yeniçeri zorbasıyla birlikte kendisi de öldü (16 Kasım 1808)."
2. TDV `ayan` (Özcan Mert, 1991): "16 Kasım 1808'de çıkan bu ayaklanmada Alemdar Mustafa
   Paşa hayatını kaybetti."
3. TDV `sened-i-ittifak` (Ali Akyıldız, 2009): "senedin mimarı Alemdar Mustafa Paşa öldüğü
   için (16 Kasım 1808)".
4. Akademik: Meral Bayrak (Ferlibaş), "Alemdar Mustafa Paşa'nın Muhallefatı", *Türk Kültürü
   İncelemeleri Dergisi* 21 (2009), s. 65 ("16 Kasım 1808'de cephaneliği…") ve s. 78
   ("28 Temmuz ile 16 Kasım 1808 tarihleri arasında sadrazam olan Alemdar Mustafa Paşa").

**Karar (M-4758'in iki seçeneğinden ikincisi): TEK MADDE, günü 1808-11-16.**
Gerekçe: açılan hiçbir kaynak 15 Kasım gecesini ADIYLA ayrı bir olay olarak anmıyor —
dördü de tek bir vakanın iki ucu olarak yazıyor ("15 Kasım gecesi başlayan ayaklanma …
16 Kasım'da öldü"). Kaynağın ayırmadığı bir olayı ikiye bölmek, haritada karşılığı
olmayan ikinci bir kronoloji maddesi (Değişmez 2t borcu) üretirdi. Ayaklanmanın
başlangıcı kaydın `d:` metnine yazıldı.

**ÖNGÖRÜ (denetimden ÖNCE yazıldı · sınav anı: düzeltmeden hemen sonra `py arac/denetle.py`).**
Taban ölçüm (aynı komut, değişiklikten ÖNCE, bu oturumda koşturuldu):
Değişmez 2 = 587 kırılma / **0 açık** · 2s = 1418 kırılma / **180 AÇIK** (tavan 195) ·
2i = 130 kırılma / **1 açık** (tavan 3) · 2t = kırılmasız madde **1** (tavan 42) ·
SONUÇ: temiz.
Öngörüm: **dört sayının dördü de aynı kalır**, çünkü ① madde ±30 günlük pencerenin
içinde yalnız 1 gün kaydırılıyor, ② yeni madde EKLENMİYOR, ③ hiçbir `d:`/`v:`/`isg:`
kırılmasına dokunulmuyor. Bir sayı değişirse öngörü yanlıştır ve bildirilir.

**ÖLÇÜM (düzeltmeden sonra, aynı komut; çıkış kodu 0).**
Değişmez 2 = **589** kırılma / **0 açık** · 2s = **1417** kırılma / **178 AÇIK** (tavan 195) ·
2i = 130 / **1 açık** · 2t = kırılmasız madde **1** · SONUÇ: **temiz**.

**ÖNGÖRÜ TAM TUTMADI — ve sebebi ölçüldü.** Beklediğim "dört sayı da aynı" değil;
kırılma sayıları oynadı (587→589 · 2s'de 1418→1417 ve 180→178). Bir kronoloji maddesinin
gününü bir gün kaydırmak `d:`/`v:`/`isg:` KIRILMA SAYISINI değiştiremez, dolayısıyla delta
benim değişikliğimden gelemez. Sebep: iki koşu ARASINDA başka oturumlar girdi verisini
değiştirmiş — taban HAREKETLİ bir tabandı. Ders: eşzamanlı oturumların olduğu bir depoda
"önce/sonra" kıyası ancak aynı çalışma kopyasında ve girdi dosyaları donmuşken kurulur.

🔴 **ATIF DÜZELTMESİ (tahta M-4769, TARIH-SUPHE-0920'nin yatay ölçümü).** Deltayı ilk
raporumda ISGAL-1806'nın işgal kalemine bağlamıştım; DAYANAĞIM YALNIZCA DOSYA DAMGASIYDI
(`data/yerlesimler*.js` dosyaları iki koşu arasında yazılmış görünüyordu) — yani bir
korelasyon, ölçüm değil. TARIH-SUPHE-0920 yalıtılmış ölçümle deltanın KENDİ yamasından
geldiğini gösterdi: 6 Dulkadır kaydını 1515-06-13'ten 1522-01-01'e, Segedin'i
1543-08-10'dan 1543-01-01'e taşımış; d/v kovasına iki YENİ GÜN girmiş (+2), s kovasından
1515-06-13 tamamen düşmüş (-1), 180→178 AÇIK düşüşü de yeni yazdığı iki maddenin (1522-01-01
Dulkadır · 1543-01-01 Segedin) kapattığı günler. **Mekanizmayı kendim doğruladım:**
`arac/denetle.py:1423` satırı `kir.setdefault(d, …)` — sözlüğün anahtarı YALNIZ TARİH,
dolayısıyla "Değişmez 2 · N kırılma" sayacı kırılma değil **kırılma GÜNÜ** sayar; bir
kaydın gününü taşımak bu sayacı artırabilir de azaltabilir de. Yeni günlerin kronolojide
karşılığı da görüldü (`1522-01-01 Maraş merkezli Osmanlı eyaleti kuruldu`). ⇒ Doğru atıf
TARIH-SUPHE-0920'dir; benim ilk atfım ölçülmemiş bir çıkarımdı ve yanlıştı. Değişmeyen
sonuç: benim düzeltmemin etkileyebileceği büyüklükler (açık sayısı 0, kırılmasız madde 1)
aynı kaldı, tavanlar aşılmadı, sonuç temiz.
**Benim değişikliğimin etkileyebileceği büyüklükler değişmedi:** açık sayısı 0'da kaldı,
kırılmasız madde 1'de kaldı, tavanların hiçbiri aşılmadı, sonuç temiz. 2s'deki 180→178
iyileşme de benim değil, o oturumun kazancı.

**YAN ETKİ — BAŞKA OTURUMUN DOSYASI, DOKUNULMADI.** Gün dizgisi ek okuma bağlarında
TAM EŞİTLİK arar (`app.js _ekBagEslesir`, D099). `1808-11-15` dizgisini taşıyan üç yer:
- `data/ekokuma_alemdar.js` — BENİM dosyam, `1808-11-16` yapıldı (kart sınandı, tutuyor).
- `data/ekokuma_yenilesme.js` · kart `matbaa-kesintili-tarihi-1747-1826` ·
  `olay:["1727-07-05|matbaası","1808-11-15|Alemdar","1826-06|Hayriyye"]` → bu bağ artık
  **hiçbir maddeye tutmuyor**, kart o maddede SESSİZCE görünmez oldu. Önerilen tek
  değişiklik: `"1808-11-15|Alemdar"` → `"1808-11-16|Alemdar"`. Dosya benim değil, YAZMADIM.
- `data/yer_yama.js` — uygulanmış bir yama ÖNERİ kaydı (kaydın kendisinde `yer_id`
  zaten var), canlı bağ değil; kayıt tarihî belge olarak olduğu gibi bırakıldı.

## 2 · KARTLAR

Altı kart · `data/ekokuma_alemdar.js` · `window.EKOKUMA_ALEMDAR`
(ad `app.js _ekHavuz()`in `/^EKOKUMA(_[A-Z0-9]+)?$/` süzgecine uyuyor — sınandı).

| # | id | tür | madde | bağ | metin |
|---|---|---|---|---|---|
| 1 | `alemdar-28-temmuz-1808-kargasa` | sebep-sonuc | H-0008 | 1808-07-28 (×2) | 28 Temmuz 1808 kargaşası: III. Selim'in katli, Mahmud'un damdan kaçırılması |
| 2 | `alemdar-mustafa-pasa-sahsiyet` | kimdir | H-0009 | 1808-07-28 · 1808-11-16 | Alemdar'ın şahsiyeti, gücünün maddî temeli |
| 3 | `ayan-hangi-aile-nereyi-tutuyordu` | kimdir | H-0010 | 1808-10-07 | 16 künyeli âyan ailesi/kişisi ve bölgeleri |
| 4 | `ayanlik-isyan-mi-ozerklik-mi` | tartisma | H-0010 | 1808-10-07 | isyan mı · özerklik/ortaklık mı · yozlaşmış valilik mi + göreve kim getiriyordu |
| 5 | `alemdar-vakasi-mahmudun-tavri` | tartisma | H-0011 | 1808-11-16 | II. Mahmud kurtarabilir miydi, istedi mi — üç okuma |
| 6 | `ruslara-niye-direnilemedi-1806-1812` | tartisma | H-0014 | 1810-07-01 · 1810-09-26 | beş sebep, tek sebebe indirgemeden; altıncısı (teknik üstünlük) ölçülemedi |

**BAĞ SINAVI.** `app.js _ekBagEslesir` + `_ekNorm` mantığı birebir kopyalanıp 8 bağın
tamamı gerçek kronoloji maddelerine karşı koşturuldu: **8/8 bağ TAM 1 maddeye** tutuyor
(sıfır da, birden fazla da değil).

**GÖSTERİCİ SINAVI (D045/D099 ailesi — "veri doğru, gösterici alanı okumuyor").**
`js/app.js`in GERÇEK `ekKartHtml` fonksiyonu (+`_icNotMu`, `_icNotAyikla`,
`kesinlikRozeti`, `_maddeliMetniHtmle`, `_tartismaVarMi`, `ekEsc`) kaynaktan kesilip node
içinde koşturuldu, altı kart da basıldı. Sonuç: her kartta `baslik`/`sebep.b`+`sonuc.b`,
`ozet`, `metin`, `surec`, `bag`, `kaynak` alanlarının **hepsi BASILDI**; `ic_not`
hiçbirinde **SIZMADI**. Basılan düz metin: 4.781-8.136 karakter/kart.
⚠️ Kartların görünmesi için `js/app.js` · `_EKOKUMA_DOSYA_ADLARI` listesine
`"ekokuma_alemdar",` satırı GEREKİYOR; şartname (DALGA-0071 §2: "app.js listesine ve
index.html'e SEN ekleme — teslimde öner") gereği bu oturum O DOSYAYA DOKUNMADI.

## 2.5 · KAYNAKLARIN ÇELİŞTİĞİ NOKTALAR (hepsi kartların iç notunda da duruyor)

1. **Alemdar'ın ölüm günü:** 15 Kasım (atlasın eski kaydı) ↔ **16 Kasım 1808** (TDV ×3 +
   Bayrak 2009). Düzeltildi (§1).
2. **Ayaklanmanın BAŞLANGIÇ günü — TDV kendi içinde üç gün veriyor:**
   `alemdar-mustafa-pasa` "15 Kasım 1808 gecesi başlayan", `yeniceri` "14 Kasım 1808'de
   başlayan büyük isyan", `sekban-i-cedid` Bâbıâli baskınını doğrudan 16 Kasım'a koyuyor.
   Hiçbir yere YAZILMADI, kart bunu açıkça söylüyor.
3. **III. Selim'in hal'i:** `alemdar-mustafa-pasa` "19 Mayıs 1807" ↔ `mustafa-iv` +
   `mahmud-ii--osmanli` + `kabakci-isyani` "29 Mayıs 1807 (21 Rebîülevvel 1222)" — üçe bir.
   Kart 1807 hal' gününü hiç yazmadı (o kayıt bu oturumun kalemi değil).
4. **Kabakçı Mustafa'yı kim öldürdü:** TDV "Pınarhisar âyanı Ali Ağa" ↔ Bayrak 2009 (not 11)
   TSMA E.1826/1;3'e dayanarak "Serezli İsmail Bey'in oğlu", ama aynı notta "tüm eserlerde
   ve iki BOA belgesinde" Pınarhisar âyanı Hacı Ali'nin geçtiğini de kaydediyor; gün olarak
   17 Temmuz 1808 veriyor. Kart faili TDV'ye göre yazdı, GÜNÜ yazmadı.
5. **"Alemdar" lakabının kaynağı:** TDV "Tirsinikli'nin bayraktarlığını yapmış olmasından"
   ↔ Bayrak 2009, s. 63 "1768-74 Osmanlı-Rus Savaşı'nda bayraktar olarak görev yaptığı
   için" — TDV'nin doğum yılı (1765) ikincisiyle bağdaşmıyor. ÖLÇÜLEMEDİ.
6. **Sadâret süresi:** "dört ay" (`alemdar-mustafa-pasa`, `mahmud-ii--osmanli`) ↔ "üç ay
   kadar" (`mustafa-iv`) ↔ 28 Temmuz-16 Kasım 1808 (Bayrak 2009) = 3 ay 19 gün.
7. 🔴 **YENİ ATLAS BULGUSU — BAŞKA OTURUMUN DOSYASI, DOKUNULMADI.**
   `data/olaylar_ek6.js` Sohum'un düşüşünü `t:"1810-07-01"` · `gun:"Temmuz 1810"` (ay
   hassasiyeti) olarak tutuyor. TDV `sohum` maddesi GÜN veriyor: *"Sohum Kalesi bu sırada
   yeterli askerî destek sağlanamadığından 11 Temmuz 1810'da Ruslar'ın eline geçti"*
   (dayanağı Aydın, s. 99-101). Kayıt keskinleştirilecekse `t:"1810-07-11"` olmalı ve
   6 numaralı kartın `1810-07-01|Sohum` bağı da aynı anda güncellenmeli (bağ TAM EŞİTLİK
   arar — D099). Hüküm koordinatörde.

## 3 · KAYNAK DEFTERİ — gövdesi BU OTURUMDA açılan künyeler

TDV: `alemdar-mustafa-pasa` · `selim-iii` · `mustafa-iv` · `kabakci-isyani` ·
`mahmud-ii--osmanli` · `cevri-kalfa-mektebi` · `ayan` · `sened-i-ittifak` ·
`tepedelenli-ali-pasa` · `pazvandoglu-osman` · `karaosmanogullari` · `capanogullari` ·
`tirsiniklioglu-ismail-aga` · `ramiz-abdullah-pasa` · `sekban-i-cedid` · `yeniceri` ·
`ruscuk` · `sohum` · `azmzadeler` · `tuzcuogullari` · `kozanogullari` ·
`cezzar-ahmed-pasa` · `kavalali-mehmed-ali-pasa` · `nizam-i-cedid`.
Akademik tam metin (PDF indirildi ve okundu), beşi:
1. Meral Bayrak (Ferlibaş), "Alemdar Mustafa Paşa'nın Muhallefatı", *Türk Kültürü
   İncelemeleri Dergisi* 21 (2009), 63-120.
2. Nurbike Ceylan, "Cevri Kalfa ve Mektebi", *İnsan ve Sosyal Bilimler Dergisi* 2/2 (2019),
   331-347.
3. Nagehan Üstündağ Özdemir, "Ayanlık Kurumunun Gelişimi ve Anadolu ile Balkan
   Coğrafyasındaki Farklılıkları Üzerine Bir Değerlendirme", *Current Research in Social
   Sciences* 4/1 (2018), 29-38.
4. Hümeyra Bostan, [Ali Yaycıoglu, *Partners of the Empire* değerlendirmesi], *Dîvân:
   Disiplinlerarası Çalışmalar Dergisi* 22/42 (2017), 154-159.
5. Emre Karakaya, "Safranbolu Şer'iyye Sicil Defterine Göre 1806-1812 Osmanlı-Rus Savaşı
   Sefer Organizasyonunda Safranbolu Kazasının Katkısı Üzerine Bir Değerlendirme",
   *KÜLLİYAT Osmanlı Araştırmaları Dergisi* 11 (2020), 107-117.

**AÇILAMAYAN, borç olarak bırakılan (kartların iç notunda da yazılı):** Uzunçarşılı'nın
1942 Alemdar monografisi · K. Arapyan, *Rusçuk Ayanı Mustafa Paşa* · Ali Yaycıoğlu'nun
kitabının kendisi (tezi Bostan 2017'den AKTARIM olarak işaretlendi, D073) · Virginia Aksan,
*Kuşatılmış Bir İmparatorluk: Osmanlı Harpleri 1700-1870* · Mehmet Mert Sunar'ın 1806-1812
seferberliği makalesi · Câbî Ömer Efendi, Şânîzâde ve Georg Oğulukyan'ın rûznâmesi gibi
birinci elden tanıklıklar. Son ikisi H-0011'in (padişahın o geceki tavrı) asıl muhatabıdır;
kart bu yüzden hüküm vermiyor.

**ÖLÜ SLUG (HTTP 302 — §4 TDV tuzağı ①):** `mahmud-ii` · `kabakci-mustafa` ·
`cevri-kalfa` · `cevri-usta` · `caniklizadeler` · `canikli-ali-pasa` · `babanzadeler` ·
`baban` · `menemencioglu` · `tekeliogullari` · `katibogullari` · `zennecizadeler` ·
`muderriszadeler` · `bushatli` · `busatlilar` · `bukres-antlasmasi` · `kadi-abdurrahman-pasa` ·
`mutegallibe`. Doğruları bulunanlar: `mahmud-ii--osmanli`, `kabakci-isyani`.
