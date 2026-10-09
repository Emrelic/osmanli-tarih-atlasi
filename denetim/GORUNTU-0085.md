# GORUNTU-0085 — parti-emrelic-0085: H-0011 · H-0014 · H-0015

Oturum: GORUNTU-0085 (UMIT) · 9 Ekim 2026 · görev: UMIT İRTİBAT · ağaç `C:\atlas-gor85` @ `origin/main` 6865cc87
Yatay: GORUNTU-0087 (local_bbd00111) aynı sınıfı ölçüyor — haber verildi, kendi bulgum aşağıda.

## ① ÖNGÖRÜ — KOORD diff'i ölçülmeden ÖNCE
`GORUNTU-0085-KOORD.diff` iki kimlik düzeltmesi yapar (tarih uçlarına dokunmaz, yalnız `d:`):
- `Luristan` (33.487, 48.356 — Hürremâbâd) 1353-01-01→1424-01-01 `lur-i-buzurg` → `lur-i-kucek`, ve 1424-01-01'de bitişik `lur-i-kucek` dönemiyle BİRLEŞİR (tek dönem 1353→1508).
- `Zagros içi` (31.50, 50.50, dolgu bölge noktası) 1340-01-01→1410-01-01 `celayirli` → `lur-i-buzurg`.
Beklenen: D1 sahipsiz 309 → 309 · D2 623/0 değişmez (Osmanlı yok) · 2s kırılma −1 (Luristan 1424 birleşmesi) ve AÇIK ±1 içinde (taraf adı değişen 1340 / 1410 kırılmaları başka maddeyle kapanıyorsa değişmez) · 4c/4d: `lur-i-kucek` künyesi 1184→1597, `lur-i-buzurg` 1155→1424 ⇒ pencere aşımı 0.
Harita (koşu sonrası): H-0015-1'deki Celâyirli adası Lur-i Büzürg rengine döner (Zagros içi), H-0015-2'deki "Lur-i Büzürg" adası Lur-i Küçük adı/rengine döner. Ada OLMAYI bırakmaz (komşular 1387/1393'ten itibaren `timurlu`) — §④.

### Öngörü değerlendirmesi (ölçüm: `py arac/denetle.py`, önce/sonra, aynı ağaç)
- D1 309 → 309 ✓ · D2 627/0 → 627/0 ✓ · 2i 171/1 ✓ · 2t 13 ✓ · 4c 126 · 4d 324 · 4s 5 ✓ (pencere aşımı 0) · D7 737 (önce de 737) · 2sk birebir.
- 2s: kırılma 1727 → **1727** ✗ (öngörü −1 idi: `kir` GÜNE göre anahtarlı, 1424-01-01 başka noktalarda da kırılma ⇒ gün kovası kalır) · AÇIK 184 → 184 ✓ · **YIL-TEMSİLÎ BORÇ 167 → 166** (öngörmediğim, iyileşme yönü: Luristan'ın 1424-01-01 sahte el değiştirmesi bir yıl-temsilî birimdi). Bu borcun `BEKLENEN_*` tavanı yok (grep 0).
- Çıkış kodu önce de sonra da **2**: D8 ÖLÇÜLEMEDİ — `devletler_harita.js` taze ağaçta yok (üretilmiş, gitignore'lu). Bu işin kusuru değil; D8 bu diff için ölçülmedi.

## ② NE ÖLÇTÜM
Yöntem: görseller açıldı (H-0011-1 · H-0014-1 · H-0015-1..5, 7 dosya). Gün ve yer görselden ve verideki madde başlığından okundu; yerel sunucuda (`py -m http.server 8795`, `origin/main`) GERÇEK `index.html` headless Chrome ile aynı güne/yere açıldı (`ARAC-SEFER-OKU-GORSEL-0087.js` kalıbı, sahne listesi değiştirildi; görüntüler scratchpad'de `GOR85-*.png`). Uygulama içi tarayıcı panesi gizliyken harita yüklenmedi (requestAnimationFrame) — bu yüzden headless. Sahiplik `arac/girdi.py yukle()` ile (motorun okuduğu dosyalar), kaynak TDV gövdesinden birebir.

### H-0011 · "bu zikzak yapı neden oluşuyor" — sınıf: **MOTOR GEOMETRİSİ (+ nokta seyrekliği)**
- **Yer/gün:** Sivas'ın batısı, Tokat-Sivas arası. Kırmızı = Çelebi Mehmed (Amasya), bej = "Timurlu valiliği" (`renkler.py:1933`; Sivas 1408'e kadar Timurlu valisi Mezid Bey), camgöbeği = Dulkadiroğulları. 1403-01-01 · 1405-01-01 · 1407-01-01'de z8'de **birebir yeniden üretildi** (`GOR85-z8-h11-z8-1405.png`).
- **Noktalar (1405-01-01, 35.0-38.2E × 38.6-40.6N):** yalnız 9 — Tokat (mehmed-celebi) · Sivas (timurlu) · Niksar (taceddin) · Mesudiye · Reşadiye (haciemir) · Divriği (memluk) · Kayseri (karaman) · Zamantı · Gürün (dulkadir). **Tokat ile Sivas arasında ve Sivas'ın batısında HİÇ nokta yok** (Zile · Yıldızeli · Şarkışla · Bozok/Yozgat · Kangal yok).
- **Mekanizma:** temel harita (A) "sürtünmeli yürüyüş" haritasıdır (`index.html:152`). Hücreler kara ızgarasında **eğim sürtünmeli çok kaynaklı Dijkstra** sahipliğinden kurulur (`uret_petek.py:1138-1160`; sürtünme `surt = 1 + EGIM_CARPANI × |∇z|` `:1308`, `EGIM_CARPANI = 0.005` `:671`; ızgara `KV_ADIM = 0.05°` `:1208`; sadeleştirme `YURUYUS_SADE = 0.05°` = 1 hücre `:1166`). İki tohum uzak olunca aradaki geniş bölgede iki taraftan yürüme bedeli birbirine çok yakındır; vadi boyunca ucuz, sırtta pahalı yürüyüş eşit-maliyet cephesini **parmak parmak** vadilere sokar.
- **Ölçek kanıtı:** z8 görüntüsünde dişler 15-30 px enli, 100-200 px boyunda (1 px ≈ 0,0029°) ⇒ **0,04-0,09° enli (1-2 ızgara hücresi), 0,3-0,6° (30-50 km) boyunda.** 1-2 hücre enli bir şekil ızgara ölçeğinde bir artefakttır; `YURUYUS_SADE` (1 hücre) onu silemez. Tokat-Sivas'ın düz Voronoi açıortayı tek bir doğru olurdu; ekrandaki kıvrımlı parmaklar Voronoi değil Dijkstra cephesidir.
- ⚠️ `HARITA-0076 §3` (H-0075 Doğubayazıt) *"sivrilik sürtünmeli yürüyüşten değil, Voronoi kenarından"* demişti — o ölçüm **yürüyüş temel haritaya girmeden önceydi** (yürüyüş Koşu 17b'de açıldı, `index.html:1740` yorumu). O hüküm bu sınıfa taşınamaz. Aynı partideki H-0003 (Iğdır/Doğubayazıt "sivri çıkıntılar") büyük olasılıkla aynı kök — GORUNTU-0087'nin kalemi, ölçmedim.
- **Çare (iki yol, ikisi de koşu ister):**
  (a) VERİ — Tokat-Sivas-Kayseri üçgenine kaynaklı noktalar (Zile · Yıldızeli · Şarkışla · Bozok · Kangal); eşit-maliyet bölgesi daralır, dişler kısalır. 1402-1408 sahiplikleri kaynakla kurulmalı — **bulunamadı**, bu oturumda araştırılmadı.
  (b) MOTOR (tuzlu, C3) — Dijkstra sahiplik ızgarasına poligonlaştırmadan ÖNCE 3×3 çoğunluk süzgeci (1-2 tur) ya da `YURUYUS_SADE` ≥ 0,10°. **Öngörü:** 1-2 hücre enli parmaklar kaybolur, ≥3 hücre enli gerçek çıkıntılar kalır; kıyı ve 1-2 hücrelik gerçek kara parçalarında kayıp riski ⇒ süzgeç kara maskesinin içinde ve yalnız İKİ farklı sahip arasındaki sınır hücrelerinde uygulanmalı. Ölçüt: z8 H-0011 penceresinde diş sayısı 5 → 0-1; D1 ve Değişmez 8a/8b önce/sonra.

### H-0014 · Ankara–Bursa kopukluğu, Sivrihisar — sınıf: **VERİ DOĞRU (kopukluk tarihe uygun) · KAYNAK ÇELİŞKİSİ (Ankara'nın geçiş yılı)**
- **Yer/gün:** 1405-01-01 civarı ("Yenişehir Ovası savaşı" işaretli; `savaslar.js` t 1405-01-01). Yeniden üretildi (`GOR85-once-h14-ankara-1405-0101.png`).
- **Veri (1405-01-01):** Eskişehir'e kadar 16 nokta `suleyman-celebi` · **Sivrihisar `karaman` (1402-09-15→1413-07-05)** · Mudurnu `candar` · Ankara `suleyman-celebi` (1404-03-01→1411-02-17). Eskişehir (30.52E) ile Ankara (32.86E) arasında ~200 km'de yalnız Sivrihisar ve Mudurnu var; **Beypazarı · Nallıhan · Polatlı · Mihalıççık noktası YOK.**
- **Sivrihisar Karaman'da — TDV DOĞRULUYOR** (`sivrihisar`, HTTP 200): *"Ankara Savaşı’nın ardından Anadolu’daki beyliklere topraklarını iade eden Timur, Sivrihisar’ı Kırşehir ve Beypazarı ile birlikte Karamanoğulları’na verdi. Şehzadeler arası mücadeleler sırasında Süleyman Çelebi tarafından muhasara edildiyse de alınamadı."* ⇒ Bursa ile Ankara arasında Sivrihisar VE Beypazarı Karaman'dı; Ankara Süleyman'ın elindeyken **eksklav olması tarihe uygun.** Kopukluk hata değil.
- 🔴 **Ankara'nın 1404-1406 sahibi iki TDV maddesinde ÇELİŞİYOR** (§4 tuzak ⑥ — hüküm vermiyorum):
  - `suleyman-celebi-emir` (verinin dayanağı): *"Hatta Ankara’nın onun kontrolü altında bulunduğu, Cüneyd Bey’in yönettiği Aydın ilinin de ona tâbi olduğu anlaşılır."* (Mart 1404 bağlamında; "anlaşılır" bir çıkarım)
  - `ankara`: *"Timur’un Anadolu’dan çekilmesiyle Amasya’da hüküm süren Çelebi Mehmed’in hâkimiyetine girdi."* · *"1406’da Süleyman Çelebi Ankara önlerine gelerek kaleyi muhasara altına aldı. Kale muhafızı Yâkub Bey bir müddet dayandı, ancak Vezîriâzam Çandarlı Ali Paşa’nın bir hilesi sonucu kaleyi Süleyman Çelebi’ye teslim etti."*
  ⇒ `ankara` esas alınırsa Ankara 1404-03-01→1406 `mehmed-celebi` olur (o aralıkta Çelebi Mehmed gövdesine bitişik, eksklav DEĞİL); 1406'nın günü yok (yıl). Karar koordinatörde.
- **Veri eksiği:** Beypazarı noktası yok — TDV `sivrihisar` onun da Karaman'a verildiğini söylüyor; nokta eklenirse Karaman kuşağı haritada doğru görünür. `beypazari` slugu 302 (ölü); koordinat ve dönem zinciri kurulmadı → öneri.

### H-0015 · "küçük hâkimiyetçikler" (5 görsel) — sınıf: **VERİ** (kimlik + Timur dönemi boşluğu)
Gün 1405-01-01'de beşi de yeniden üretildi (`GOR85-once-h15-iran-1405-0101.png`). Her ada tek ya da birkaç noktanın hücresi:

| görsel | ada | nokta(lar) · veri | TDV (birebir) | hüküm |
|---|---|---|---|---|
| H-0015-1 | güney "CELÂYİRLİLER" | `Zagros içi` (31.50, 50.50, `tur:"bolge"` dolgu) `celayirli` 1340→1410, kaynaksız | `luristan`: *"Luristan’ın güneydoğusunda Lur-ı Büzürg (1155-1424)"*; `celayirliler` Celâyirli sahasını Azerbaycan · Irak · Irâk-ı Acem olarak verir, Zagros içini anmaz | ❌ kimlik yanlış → `lur-i-buzurg` (**KOORD diff**) |
| H-0015-2 | "LUR-İ BÜZÜRG (HEZARASPÎLER)" | `Luristan` (33.487, 48.356 = Hürremâbâd) `lur-i-buzurg` 1353→1424, kaynaksız | aynı madde: *"kuzey ve batısında Lur-ı Kûçek"* · *"merkezi Hürremâbâd"* | ❌ kimlik yanlış → `lur-i-kucek` (**KOORD diff**) |
| H-0015-3 | "MAR'AŞÎ (MAZENDERAN)" | Âmül · Sârî · Bârfurûş · Eşref `mazenderan-marasi` 1359→1596 kesintisiz, kaynaksız | `marasiler`: *"8 Zilhicce 794 (26 Ekim 1392) tarihinde teslim olmak zorunda kaldılar"* · *"Sârî’yi Kiyâ Efrâsiyâb’ın oğlu İskender Şeyhî’ye verdi"* · *"Mar‘aşîler’den bazıları Timur’un ölümünden (1405) sonra … Mâzenderan’a geri döndülerse de"* | ❌ 1392-10-26'dan itibaren Timur boşluğu eksik. Dönüş günü **bulunamadı** ⇒ diff YAZILMADI (D210) |
| H-0015-4 | "KÂR-KİYÂ (GÎLÂN)" | Bender Enzeli · Lâhîcan · Reşt `gilan-kiya` 1371→1592 | `gilan`da Timur dönemine dair veriyle çelişen cümle bulunamadı | ✅ ada makul (tâbi yerel hânedan) — derin sınanmadı |
| H-0015-5 | Cizre yanı "CELÂYİRLİLER" | Cizre · Siirt · Cibri `celayirli` 1353→1431; Musul · Zaho · Duhok · İmâdiye · Akra · Erbil · Sincar · Telafer 1340→1411 — hepsi kaynaksız | `celayirliler`: *"Timur’un bu tarihten başlayarak … 1393’ten itibaren de Bağdat, Diyarbekir ve el-Cezîre bölgelerini ele geçirmesi"* · *"ancak Timur’un 1405’te ölümünden sonra tekrar Bağdat’a hâkim olabildi"* | ❌ 1393-1405 Timur dönemi zincirde yok. Şehir şehir gün **bulunamadı** (D208: bölge cümlesi şehir tanıklığı değil) ⇒ diff YAZILMADI |

- **Desen:** komşu Huzistan/Lur noktaları (Dizfûl · Şüşter · Ahvaz · Behbehân … 1393; Nihâvend · Burûcird 1387) `timurlu`ya geçiyor, adalar geçmiyor ⇒ adalar 1393-1405 Timur boşluğunu kaçırmış kaynaksız zincirler. Ama komşu zincirler de **kaynaksız** (Behbehân, Râmhürmüz, Dizfûl'de `kaynak` alanı yok) ⇒ §4 komşu günü devralma şartı tutmuyor; Timur penceresi devralınarak YAZILMADI.
- **Yan bulgu:** 1405-01-01'de İran penceresinde (44-58E × 27-38.5N) 12 nokta SAHİPSİZ (Erâk · Senendec · Bâne · Mahabad · Serdeşt · Bîcâr · Buşehr · Bender Abbas · Kuveyt · Muhammere · Nâsıriye · Ferahâbâd); Değişmez 1'in beklenen 309'u içinde mi tek tek bakmadım (Bîcâr bilinçli: kur 1801).

## ③ NE BULAMADIM
- Mar'aşîlerin Mâzenderan'a dönüş günü/yılı (TDV yalnız "1405 sonrası").
- el-Cezîre/Musul şehirlerinin Timur'a geçiş ve Celâyirli'ye dönüş günleri.
- Lur-ı Büzürg/Lur-ı Kûçek için Timur döneminin tarihleri (TDV: "bir müddet").
- Beypazarı · Zile · Yıldızeli · Şarkışla · Bozok noktalarının kaynaklı dönem zincirleri.
- Ankara 1404-1406: iki TDV maddesi çelişiyor; üçüncü kaynak aranmadı.
- GORUNTU-0087'den cevap gelmedi (mesaj kuyrukta); H-0003 ile ortak kök onların ölçümüyle doğrulanmalı.

## ④ NE İSTİYORUM
1. `GORUNTU-0085-KOORD.diff` (UYGULANMADI; `data/yerlesimler.js`, koordinatör dosyası): Luristan → `lur-i-kucek` (1353-1508 tek dönem) · Zagros içi 1340-1410 → `lur-i-buzurg`. Ölçüldü: denetle'de tek fark 2s YIL-TEMSİLÎ 167 → 166. Harita etkisi koşudan sonra.
2. H-0011: motor çaresi (b) C3 tam inşa koşusuna yama (3×3 çoğunluk süzgeci, iki sahip arası sınır hücrelerinde) — öngörü ve ölçüt yukarıda. Kalıcı çare (a) nokta yoğunluğu, ayrı araştırma kalemi.
3. H-0014: Ankara 1404-1406 için kaynak kararı. Emre'ye cevap: **Sivrihisar Osmanlı'da değildi (Karaman); Ankara Süleyman'ın elindeyken eksklavdı — harita bu açıdan doğru.** Tartışmalı olan Ankara'nın Süleyman'a geçiş yılı (1404 mü 1406 mı).
4. H-0015: Mar'aşî (1392-10-26'dan itibaren) ve el-Cezîre/Musul Celâyirli zincirleri için Timur penceresi araştırması (Iranica / akademik kaynak, gün aranmalı) — ayrı kalem.

## Dosya listesi (`C:\atlas-umit\denetim\`e kopyalandı; commit/push YOK)
- `denetim/GORUNTU-0085.md` — bu rapor
- `denetim/GORUNTU-0085-KOORD.diff` — `data/yerlesimler.js` 2 satır, UYGULANMADI, CR 0
- Görüntüler ve aletler scratchpad'de (`gor85/GOR85-*.png`, `gor85.js`, `gor85b.js`); paket görselleri açık depoya KOPYALANMADI.
