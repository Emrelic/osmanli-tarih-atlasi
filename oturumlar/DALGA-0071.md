# DALGA-0071 — paket 0071 (14 madde) · 20 Eylül 2026 · 1.MURAT

Metin: `ClaudEmre/kutu/giden/parti-emrelic-0071/PARTI.json` · görsel: aynı klasör `H-0002-1.png`.
Açılış ve haberleşme: **CLAUDE.md §7.1–7.2** (tahta tek kanal · bekçi `--cik` · ekrana durum yazısı YOK ·
teslim TEK mesaj · iş bitince bekçiyi öldür). Kaynak: TDV birincil · yalnız akademik · Vikipedi tek
dayanak değil · tarih uydurma · atlas referans değil. Paylaşılan dosyayı işçi COMMİTLEMEZ.
Bağlam: paket 0071 baştan sona **1806–1810 Osmanlı-Rus savaşı ve III. Selim–II. Mahmud geçişi**
etrafında; üç iş bölüğüne ayrıldı.

## 1 · EKO-1806 (Opus) — savaşın sebebi + gerici ayaklanmalar + IV. Mustafa (H-0001 · H-0005 · H-0006)
- **H-0001:** 1806-12 savaşı niçin çıktı, Rusya'nın amacı ve bahanesi neydi. Çekirdek olay
  23 Kasım 1806'da Rus ordusunun savaş ilan edilmeden Dinyester'i geçmesi. Tilsit, Memleketeyn
  voyvodalarının azli, Boğazlar ve Fransız etkisi bağlamıyla. Kaynak: TDV (`rusya`, `eflak`,
  `bogdan`, `selim-iii`) + akademik.
- **H-0005:** yenileşme hareketlerine karşı çıkan ayaklanmaları TOPLU anlatan ek okuma: Kabakçı
  Mustafa (1807), Patrona Halil (1730), 31 Mart (1909), Genç Osman vakası (1622) ve kaynakta
  karşılığı olan benzerleri. 🔴 "Gerici" nitelemesini kendi sesinle kullanma; her ayaklanmanın
  gerekçesini kaynağın söylediği kadar aktar, değer hükmünü okuyucuya bırak.
- **H-0006:** IV. Mustafa'nın şahsiyeti; tarihçiler onu nasıl değerlendiriyor (sevilen mi, tepki
  çeken mi) — karşıt görüşleri künyesiyle yan yana koy.
Çıktı: `data/ekokuma_1806.js` (window.EKOKUMA_1806). index.html/app.js listesine SEN ekleme; teslimde öner.

## 2 · EKO-ALEMDAR (Opus) — Alemdar vakası · âyanlar · direnememe (H-0008 · H-0009 · H-0010 · H-0011 · H-0014)
- **H-0008:** 28 Temmuz 1808 kargaşası — III. Selim'in katli, II. Mahmud'un nasıl kurtarıldığı.
- **H-0009:** Alemdar Mustafa Paşa'nın şahsiyeti.
- **H-0010:** **âyanlar** — hangi âyan nereyi tutuyordu (liste), âyanlık bir isyan mı, özerklik mi,
  yozlaşmış valilik mi; göreve padişah mı getiriyordu, hanedan gibi mi geçiyordu. Sened-i İttifak
  (7 Ekim 1808) bağlamıyla. 🔴 Liste kaynaklı olacak; künyesi olmayan âyan yazılmaz.
- **H-0011:** Alemdar vakası ve ölümü; II. Mahmud'un bu olaydaki tavrı — tartışma türü kart,
  karşıt yorumlar künyesiyle.
- **H-0014:** Osmanlı Ruslara niçin direnemedi — ordu, teknik, teçhizat, lojistik, iç karışıklık;
  tartışma türü, tek sebebe indirgeme YOK.
Çıktı: `data/ekokuma_alemdar.js` (window.EKOKUMA_ALEMDAR).

## 3 · ISGAL-1806 (Opus) — Eflak-Boğdan işgali · İmereti · Sohum (H-0002 · H-0012 · H-0013)
- **H-0002:** Rusların Eflak ve Boğdan işgalinde işgal edilen topraklar haritada doğru mu; Emre
  "arada kopukluklar var" diyor (görsel H-0002-1.png). ÖLÇ: o tarihlerde hangi yerleşim hangi
  `isg:`/`s:` kaydıyla çizili; Rus ilerleyişini kaynakla tarihle (Hotin, Bender, Akkirman, Bükreş
  25 Aralık 1806, Yaş…). Kopukluk veri eksikliği mi, nokta yokluğu mu, tarih hatası mı — sınıflandır.
  Napolyon'un Mısır'ı vakası emsal: `denetim/NAPOLYON-MISIR-0070.md` (işgal tek bloğa sıkışmıştı).
  Yama öner, veriyi teslimden sonra onayla yaz.
- **H-0012:** 20 Şubat 1810 İmereti'nin ilhakıyla Osmanlı'nın Soçi–Anapa–Çerkezistan kara bağlantısı
  kesildi mi? Haritadan ÖLÇ (o tarihte sahiplik zinciri) + kaynakla doğrula; cevabı sayıyla ver.
- **H-0013:** Sohum'un Ruslara geçişinde el değiştirme animasyonu OYNAMIYOR — kusuru bul.
  `js/anim_dili.js` + `denetim/ELE-GECIRME-ANIM-0070.md` (bağ yolu: yer_id · yer · komşu · başlık;
  "sessiz" kovası 148 madde). Sebep veri tarafındaysa (madde bağı yok/yanlış gün) onu bildir;
  kod tarafındaysa ELE-GECIRME-ANIM-0070 ile tahtadan eşleş, iki oturum aynı yere yazmasın.

## Oklar (H-0003 · H-0004 · H-0007) — SEFER-OK-0070'e verildi
Ayrı sevk (M-47xx): İngiliz donanmasının güzergâhı KESİKLİ çizgi (deniz harekâtı), Reşid 1807 olay
yerinin iki kez yanıp sönmesi, Alemdar'ın Rusçuk→İstanbul yürüyüşü ve **yurt içi harekâtlarda da ok
standardı** (Hareket Ordusu, Edirne Vakası benzerleri).
