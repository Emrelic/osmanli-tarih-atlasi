# DALGA-0070 — paket 0070 (10 madde) · 20 Eylül 2026 · 1.MURAT

Görseller: `ClaudEmre/kutu/giden/parti-emrelic-0070/H-00NN-1.png` · metin: aynı klasör `PARTI.json`
(madde metni TAM olarak orada; görsel yalnız gerekince açılır).
Açılış ve haberleşme: **CLAUDE.md §7.1–7.2** — tahta tek kanal · bekçi `--cik` (Bash arka plan) ·
ekrana durum yazısı YOK · teslim TEK mesaj (① ölçtüm ② bulamadım ③ istiyorum + dosya listesi) ·
iş bitince bekçiyi öldür.
Kaynak: TDV birincil · yalnız akademik · Vikipedi tek dayanak değil · tarih uydurma · atlas referans değil.
Commit: `data/`, `js/`, `index.html`, `arac/` PAYLAŞILAN — işçi commit DENEMEZ, teslimde dosyaları sayar,
1.MURAT commitler. Kendi `denetim/<AD>-*.md` raporunu adıyla commitleyebilir (`git add -A` YASAK).
🔴 Koşu 14 bitti ve yayınlandı (r9454). Motor ana dalda. Yeni koşuyu YALNIZ 1.MURAT başlatır —
hiçbir oturum `uret_petek.py` / `kos_ve_yayinla.py` koşturmaz.

## 1 · SINIR-DIS-0070 — sınır boyundaki ışınsal dişler (H-0003 · H-0004)
Emre iki ekran görüntüsünde aynı kusuru gösteriyor: sahiplik sınırının dış kenarında **güneş ışını
gibi üçgen dişler** (Bağdat–Şam çölü hattı ve Mısır–Sina hattı). İş ÖNCE ÖLÇÜM:
1. Dişlerin kaynağı hangi aşama — çöl tavanı (300 km) · "noktasız bölge en yakın peteğe emilir" ·
   yürüyüş (16 yön) ızgarası · sadeleştirme? Koşunun kendi logundan ve çıktı geometrisinden ÖLÇ
   (`C:/atlas-kosu14/uretim_canli.log` durmakta, `data/donemler.js` canlı çıktı).
2. Diş uzunluğu ve açı dağılımını say (kaç poligon, kaç km); aynı desen başka bölgelerde var mı.
3. Sınıflandır: motor kusuru mu, çözünürlük mü, kasıtlı tavan davranışı mı.
4. Çare ÖNER (uygulama ayrı sevk): kenar yumuşatma · tavan geometrisi · ızgara sıklığı — her
   önerinin maliyeti (koşu süresine etkisi) tahmini yazılır. `uret_petek.py`yi DEĞİŞTİRME.
Çıktı: `denetim/SINIR-DIS-0070.md` (+ ölçüm betiği `denetim/ARAC-SINIR-DIS-0070.py`).

## 2 · ELE-GECIRME-ANIM-0070 — toprak el değiştirme animasyonu (H-0008 · H-0007 · H-0005)
Emre'nin istediği STANDART davranış (bütün devletler, bütün tarihler):
- Kronoloji maddesine geçilince harita olay bölgesine **odaklanır** (uçuş/ani kipte; pasif kipte bu
  adım atlanır — sanki olmuş sayılır).
- Ele geçirilen bölge önce KOYU renkte **iki kez yanıp söner**, üçüncüde ele geçiren devletin rengine
  bürünür.
- H-0007: olay alanı yanıp sönen simgeyle gösterilir. H-0005: deniz muharebesi noktası **deniz savaşı
  simgesiyle** işaretlenir (Ebukır 1798-08-01; madde `data/olaylar_ebukir_0919.js`de).
Önce KEŞİF: app.js'te bugün ne var (odak/uçuş kipi, `obGoster`, işgal taraması, simge katmanı) —
yeni mekanizma İCAT ETME, var olanı kullan (D023). Tek tek maddeye elle bayrak koymak YASAK: kural
madde türünden/etiketinden türetilmeli. Tarayıcıda GERÇEK veriyle sınanır (mock yok).
Çıktı: `js/*.js` (+ gerekiyorsa `css/style.css`) · `denetim/ELE-GECIRME-ANIM-0070.md`.

## 3 · SEFER-OK-0070 — harekât okları (H-0006)
Bütün sefer/harekât/işgal maddelerinde ordunun güzergâhını gösteren **ince ok**: kaynak nokta kalın
yuvarlak, ok gövdesi güzergâha kabataslak sadık, ok başı en ileri noktada; renk işgal eden devletin
renginin KOYU tonu; ok gövdesi, taralı işgal deseninin çizgilerinden en az 3 kat kalın. Ok hedefe
varınca bölge taralı işgal gösterimiyle iki kez yanıp söner (2. maddeyle AYNI standart — o oturumla
tahtadan eşleş, iki ayrı animasyon dili çıkmasın).
Mevcut iş: `data/seferler_p0068.js` (SEFER-1768 teslimi) + oradaki ok çizimi. Önce onu ÖLÇ, sonra
genelleştir. Güzergâh verisi olmayan sefer için ok UYDURULMAZ — "güzergâh yok" kovası raporlanır.
Çıktı: `js/*.js` · `data/seferler_*.js` (yeni dosya açarsan adı + window değişkeni teslimde) ·
`denetim/SEFER-OK-0070.md`.

## 4 · EKOKUMA-SIMGE-0070 — ek okuma kategorisi + Mehmed Ali ek okuması (H-0001 · H-0009)
H-0001: ek okuma satırlarında **kategori simgesi** (satır başında), üstüne gelince kategori adı
(ör. "teknik-bilimsel ek okuma") ipucu olarak görünür; simgenin yanında maddenin BAŞLIĞI durur.
Ayrıca Campo Formio ek okumalarının içeriği kategorisiyle uyuşmuyor — ölç, uyuşmayanları listele,
kategorisi yanlışsa düzelt (metni yeniden yazma, kategori/etiket düzelt).
H-0009: **13 Mayıs 1805 Kahire ulemâsının Mehmed Ali'yi vali ilan etmesi** olayının Mısır tarih
anlatısındaki yeri — yeni ek okuma kartı (`data/ekokuma_*.js`, tür seçimini gerekçelendir).
Kaynak TDV (`mehmed-ali-pasa`, `misir`) + akademik; alıntı yalnız gerçekten açılan gövdeden.
Çıktı: `js/app.js` (yalnız ek okuma satırı çizimi) · `data/ekokuma_*.js` · `denetim/EKOKUMA-SIMGE-0070.md`.

## 5 · NAPOLYON-MISIR-0070 — işgal toprakları doğru mu (H-0002)
Soru: Napolyon'un Mısır'ı işgalinde işgal edilen topraklar haritada doğru mu (görsel H-0002-1.png,
1798-07-21 kesiti). ÖLÇ: hangi yerleşimler o tarihte hangi sahiple/işgalle çizili, kaynakla (TDV
`misir`, `napolyon`, akademik) karşılaştır; Fransız denetiminin fiilen nereye ulaştığını tarihle
sınırla (Kahire 22 Temmuz 1798; Yukarı Mısır ve Sina ayrı tarihler). Yanlışsa `isg:`/`s:` yaması öner.
Çıktı: `denetim/YAMA-NAPOLYON-MISIR-0070.json` + `denetim/NAPOLYON-MISIR-0070.md`. Veriyi ancak
yaman onaylanınca yazarsın (teslimde sor).

## 6 · TERIM-STANDART-0070 — işgal · fetih · ilhak · istilâ · harekât (H-0010)
Emre: "gösterimde karmaşa var; geçici toprak ele geçirmeye işgal, kalıcıya fetih desek ve haritada
ayrı gösterşek — süre ölçütü de olmalı." İŞ: kavram seti ve GÖSTERİM STANDARDI ÖNERİSİ hazırla.
1. Bugünkü kullanımı ÖLÇ: veride hangi terim kaç kayıtta (`tur:`, etiketler, `isg:` alanı), hangi
   gösterimle eşleşiyor (taralı · koyu renk · renk değişimi · ok).
2. Tanım öner: her terim için ölçülebilir ayraç (süre eşiği · hukukî tanınma · antlaşma) ve hangi
   veri alanıyla ifade edileceği. Kaynak: TDV ilgili maddeler + akademik tanım; keyfî tanım YASAK.
3. Gösterim eşlemesi öner (2 ve 3 numaralı işlerin animasyon diliyle çakışmasın).
4. Kararı EMRE verir: teslim seçenekli olsun (A/B/C), her birinin veri maliyeti yazılsın.
Çıktı: `denetim/TERIM-STANDART-0070.md` (öneri) — veri/kod DEĞİŞTİRME.
