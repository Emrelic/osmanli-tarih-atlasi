// =====================================================================
// 1923 SINIRLARI — Hadramut nokta açılımı: Şibâm + Şihr (YENİ) + Mükellâ (DÜZELTME)
// Kaynak: TDV madde "hadramut" (raw HTML, 5 Eylül 2026 taraması)
// Sevk: M-2867 — "kunye bolmesi noktasiz anlamsiz, AC"
// Oturum: 1923 SINIRLARI · local_372203f2-6e71-46d2-af5e-563a5c7eca60
//
// ⚠️ denetim/'e YAZILDI (data/ kilitli, koşu 5b canlı).
// 🔴 Şibâm ve Şihr YENİ NOKTA — mevcut kayıt YOK, uygulayıcıya İNMEZ,
//    koordinatör tarafından ELLE `data/yerlesimler_*.js`e eklenecek
//    (bu gece 48 nokta aynı durumda — M-2867).
// 🟡 Mükellâ YENİ DEĞİL — 3km sınavı onu mevcut "Mukalla" noktasına
//    (data/yerlesimler.js:1001, 1.06 km) BAĞLADI. Bu bir DÜZELTME
//    önerisidir, yeni nokta değil — ayrıntı aşağıda.
// =====================================================================

window.YER_YAMA_HADRAMUT_NOKTA = [

// ── Şibâm — Kesîrî çekirdeği (içeride) — YENİ NOKTA · ELLE ──
// TDV 'hadramut': "1888'de ... İngilizler iç bölgeleri Kesîrîler'e
// bıraktılar. Böylece Şibâm, Sayvan ve Terîm şehirleri Kesîrîler'de
// kaldı." M-2867'nin kendi kategorisi: Kesîrî çekirdeği, 1915-1919
// Osmanlı örtüsü BU NOKTAYA YAZILMAZ (yalnız Kuaytî'nin Şihr'i için).
{ ad:"Şibâm (Hadramut)",
  tur:"yerlesim",
  lat:15.9260, lon:48.6285,
  kasitli_bosluk:true, bos:"veri-yok",
  neden:"1450 ÖNCESİ ARAŞTIRILMADI — TDV genel Hadramut anlatısı Râşidî (1009-1300) · Eyyûbî (1180-1224) · Resûlî (1229-1454) · Tâhirî (15. yy) hânedanlarını sayıyor ama hiçbiri Şibâm'a ÖZGÜ net bir tarih vermiyor (yalnız 'Şibâm'da Benî Deggâr' ve 'Âl-i Nu'mân Şibâm'a hâkim oldu' gibi isimler var, GÜNSÜZ). Bu yüzden 1450 öncesi 'bulunamadı' değil 'ölçülmedi' — ayrı bir araştırma turu gerektirir.",
  s:[{f:"1450-01-01",t:"1923-10-29",d:"kesiri-sultanligi"}],
  kaynak:"TDV, madde: hadramut (CANLI, raw HTML) — bkz. denetim/YAMA-KUNYE-AIR-HADRAMUT-0905.json kesiri-sultanligi künyesi. 3km sınavı: en yakın nokta mevcut genel 'Hadramut' noktası (49,3 km) — MÜKERRER DEĞİL." },

// ── Şihr — Kuaytî kıyısı, 1915-1919 Osmanlı örtülü — YENİ NOKTA · ELLE ──
// TDV 'hadramut': "1881 sonunda Şihr ve Mükellâ dahil bütün Hadramut
// sahilini ele geçirdiler ... 1888'de ... himaye antlaşması." VE:
// "Kuaytîler'in idaresinde bulunan Şibâm ile Şihr 1919 yılına kadar
// Osmanlı hâkimiyetinde kaldı" — v: kullanıldı (TDV 'nominal' diyor,
// isg: değil, M-2867 hükmü).
{ ad:"Şihr (Hadramut)",
  tur:"liman",
  lat:14.7415, lon:49.6041,
  kasitli_bosluk:true, bos:"kabile",
  neden:"1881 ÖNCESİ Yâfiî kabilesine bağlı Ehlü'l-Bereyk yönetimindeydi (TDV: '19. yüzyıla gelindiğinde Yâfiî kabilesine bağlı Ehlü'l-Bereyk Şihr ... yönetmekteydi'; '1658-59'dan itibaren Yâfiîler ... Şihr'de hüküm sürmeye devam ettiler'). Kaynak KONUŞUYOR (klan/kabile yapısı tarif ediyor) ama Yâfiî'nin kendi künyesi projede YOK — bu yüzden 'devletsiz' değil 'kabile'.",
  s:[{f:"1881-01-01",t:"1923-10-29",d:"kuayti-sultanligi"}],
  isg:[{f:"1888-01-01",t:"1923-10-29",d:"ingiltere"}],
  v:[{f:"1915-01-01",t:"1919-01-01",k:"Osmanlı hâkimiyeti (NOMİNAL — TDV: '1915'te Hadramut şeyhleriyle ... Ali Said Paşa arasında imzalanan mukavelenâmede ... Kuaytîler'in idaresinde bulunan Şibâm ile Şihr 1919 yılına kadar Osmanlı hâkimiyetinde kaldı')"}],
  kaynak:"TDV, madde: hadramut (CANLI, raw HTML) — bkz. denetim/YAMA-KUNYE-AIR-HADRAMUT-0905.json kuayti-sultanligi künyesi. 3km sınavı: en yakın nokta mevcut 'Mukalla' (56,5 km) — MÜKERRER DEĞİL." }

];

// =====================================================================
// 🔴 AYRI BULGU — Mükellâ (Mukalla) MEVCUT nokta, DÜZELTME gerektiriyor
// =====================================================================
// 3km sınavı Mükellâ'yı YENİ nokta olarak DEĞİL, data/yerlesimler.js:1001
// "Mukalla" (14.5329,49.1248) kaydına 1,06 km mesafeyle BAĞLADI — aynı
// yer. O kayıt BUGÜN şöyle:
//
//   bos:"devletsiz", neden:"Körfez şeyhliklerinde 19. yy'daki İngiliz
//   himaye antlaşmalarına kadar merkezî devlet denetimi kaydı yok..."
//   s:[{f:"1888-01-01",t:"1923-10-29",d:"ingiltere"}]
//
// 🔴🔴 İKİ AYRI SORUN VAR:
// ① "devletsiz" (1888 öncesi merkezî denetim YOK) YANLIŞ — TDV: Kuaytî
//    1881 SONUNDA Mükellâ dahil kıyının tamamını ELE GEÇİRDİ. 1881-1888
//    arası devletsiz değil, KUAYTÎ YÖNETİMİNDE (İngiliz himayesi henüz
//    yok, ama merkezî bir devlet VARDI).
// ② s:"ingiltere" (1888'den itibaren DOĞRUDAN İngiliz sahipliği) —
//    M-2784'ün himaye/ilhak emsaliyle (Bahreyn·Katar·Kuveyt·Buganda)
//    AYNI HATA: TDV "himaye antlaşması" diyor, "ilhak" DEMİYOR. Kuaytî
//    kendi iç idaresini 1923'te de sürdürüyordu — bu ilhak değil himaye.
//
// ⇒ ÖNERİLEN DÜZELTME (uygulanmadı, kaynak: TDV hadramut, bkz. yukarı):
//   s:[{f:"1881-01-01",t:"1923-10-29",d:"kuayti-sultanligi"}]
//   isg:[{f:"1888-01-01",t:"1923-10-29",d:"ingiltere"}]
//   v:[{f:"1915-01-01",t:"1919-01-01",k:"Osmanlı hâkimiyeti (NOMİNAL — bkz. Şihr kaydı; TDV cümlesi Mükellâ'yı AÇIKÇA ANMIYOR, Kuaytî kıyı yönetiminin parçası olarak ÇIKARIM yapıldı, bu açıkça işaretlenmiştir)"}]
//   bos: VE neden: SİLİNMELİ (artık "devletsiz" geçerli değil)
//
// 🔴 UYGULAYICI KISITI: _sahiplik_uygula.py SKALER_ALANLAR (bos/neden)
// yalnız BOŞSA doldurur, VAR OLANI ASLA SİLMEZ/EZMEZ (kaynak ile aynı
// sözleşme). Yani mevcut "bos:devletsiz" ve "neden:" alanları OTOMATİK
// SİLİNEMEZ — bu satırlar ELLE (koordinatör tarafından) temizlenmeli.
// Yalnız s:/isg:/v: dizileri (CATISABILIR alanları) otomatik uygulanabilir,
// ama onlar da eldeki "d:[]" boş olduğu için çakışma sınavından geçer mi
// ÖLÇÜLMEDİ — merge öncesi ayrıca sınanmalı.
// =====================================================================
