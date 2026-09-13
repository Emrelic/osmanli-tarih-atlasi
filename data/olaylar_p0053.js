// =====================================================================
// PAKET 0053 — UYGULA-BAGDAT KRONOLOJİ (14 Eylül 2026, 1.MURAT sevki)
// Araştırma: denetim/ARASTIRMA-BAGDAT-0914.md · yama: denetim/YAMA-BAGDAT-0914.json (M1-M3)
// Uygulama raporu: denetim/UYGULA-BAGDAT-0914.md
//
// NİÇİN: YAMA-BAGDAT E (Musul 1624-1625 Safevî dilimi) ve B (Şehrizor 1630
// Osmanlı dönüşü) yerleşim yamaları üç yeni harita kırılması doğurur
// (1624-01-01 · 1625-01-01 · 1630-03-16). Bu dosya o geçişleri KENDİ
// maddeleriyle yazar; yoksa Değişmez 2 açılır.
//
// 🔴 TARİH KAYNAKTAN (CLAUDE.md §4 "ATLAS REFERANS DEĞİLDİR"). M1 ve M2
//   YIL hassasiyetlidir: TDV gün vermiyor ⇒ YYYY-01-01 + kesinlik:"yil".
// 🔴 KAYNAK ÇELİŞKİSİ (bildirildi, taraf seçilmedi): Kerkük'ün Safevî'den
//   geri alınışını TDV musul--irak 1035 (1625), TDV kerkuk 1039 (1630)
//   veriyor. M2 metni bunu açıkça söyler.
// TAKVİM: hicrî yıllar TDV'nin kendi milâdî karşılıklarıyla yazıldı.
// AD ALANI (§7): data/olaylar_p0053.js → window.OLAYLAR_P0053
// 🔴 index.html satırı BAĞLI DEĞİL (koordinatör ekler) — bağlanmadan CANLI
//   DEĞİLDİR (D099). denetle.py olaylar*.js glob'uyla okur.
// =====================================================================

window.OLAYLAR_P0053 = [

// ── M1 · 1624 · Musul ve Kerkük Safevî eline geçti ─────────────────────
{ t:"1624-01-01", kesinlik:"yil", k:"kayip", kapsam:"ic", etiket:["toprak-kayip","savas","konu-askeri"],
  b:"Musul ve Kerkük'ün Safevî eline geçmesi — Bağdat'ın düşüşünün ardından",
  gun:"1033 (1623-24) — kaynak gün vermiyor",
  yer:"Musul, Kerkük", yer_id:"Musul",
  kisiler:"Şah Abbas, Karçakay Han, Çerkez Ahmed Paşa, Kāsım Han, Sipahi Küçük Ahmed",
  d:"Bekir Subaşı isyanıyla başlayan olaylar sonunda Bağdat'ı ele geçiren Şah Abbas, kumandanı Karçakay Han'ı kuvvetleriyle Musul ve Kerkük üzerine gönderdi. Musul Valisi Çerkez Ahmed Paşa şehri birkaç gün savunabildi; Kerkük gibi Musul da İran hâkimiyetine geçti ve valiliğe Kāsım Han getirildi. Hâfız Ahmed Paşa'nın öncü kuvvetine kumanda eden Sipahi Küçük Ahmed Musul önünde görününce Kāsım Han şehri bırakıp Bağdat'a çekildi, fakat Şah Abbas'ın karşı harekâtıyla Musul 1624'te yeniden Safevîlerin eline geçti.",
  ic_not_gun:"TDV musul--irak: «şehir tekrar Safevîler'in eline geçti (1033/1624)». Hicrî 1033 = 25 Ekim 1623 – 13 Ekim 1624; ilk alış 28 Kasım 1623 Bağdat teslimiNDEN SONRA. Gün yok ⇒ 1624-01-01 + kesinlik:'yil' (§4). 1624 içindeki iki el değiştirmenin günleri kaynakta yok, maddeye tek madde olarak yazıldı.",
  ic_not_d:"🔴 KARŞI: TDV abbas-i «Şah Abbas Musul, Kerkük ve Van'ı da almak istedi, fakat muvaffak olamadı» — cümle 1623-1629 saltanat ÖZETİNDE duruyor (ARAS-BAGDAT M-3906/M-3908 ayrıştırması: kalıcı tutamamayı anlatıyor). TDV hafiz-ahmed-pasa ayrıca «Kerkük ve Musul şahın kumandanlarından Kāsım Han tarafından zaptedildi» diyor. Üçüncü kaynak: Remzi Kılıç, Türk Kültürü XXXIX/460 (2001) ss.479-493 (ARAS-BAGDAT okudu).",
  kaynak:"musul--irak · hafiz-ahmed-pasa · kerkuk + Remzi Kılıç, Türk Kültürü XXXIX/460 (2001), ss. 479-493" },

// ── M2 · 1625 · Hâfız Ahmed Paşa seferi, Musul ve Kerkük havalisi ──────
{ t:"1625-01-01", kesinlik:"yil", k:"fetih", kapsam:"ic", etiket:["toprak-kazanc","savas","konu-askeri"],
  b:"Musul'un Safevîlerden kurtarılması — Hâfız Ahmed Paşa'nın Bağdat seferi",
  gun:"1035 (1625) — ordu eylül başında Musul'a vardı; gün yok",
  yer:"Musul, Kerkük, Altınköprü", yer_id:"Musul",
  kisiler:"Hâfız Ahmed Paşa, Çerkez Hasan Paşa",
  d:"IV. Murad, Vezîriâzam Hâfız Ahmed Paşa kumandasındaki orduyu Bağdat üzerine gönderdi. Ordu Diyarbekir civarındayken Altınköprü'de toplanan İran taraftarlarını Karaman Beylerbeyi Çerkez Hasan'ın öncü kuvveti Kerkük'e kadar kovaladı ve Kerkük de dahil bölgeyi kontrol altına aldı; Safevîler Musul'u bu defa da uzun süre elde tutamadı. Hâfız Ahmed Paşa eylül başında önce Musul'a, ardından Kerkük'e vardı ve 13 Kasım 1625'te Bağdat'ı kuşattı; kuşatma sonuçsuz kaldı ve Bağdat Safevî elinde kaldı. TDV'nin Kerkük maddesi ise şehrin Safevîlerden geri alınışını 1630'a, Hüsrev Paşa'ya bağlar.",
  ic_not_gun:"TDV musul--irak: «IV. Murad, 1035'te (1625) … Hâfız Ahmed Paşa kumandasındaki Osmanlı kuvvetlerini Bağdat'a sevketti» — yıl sevkin cümlesine bağlı, Kerkük'ün denetim altına alınması aynı seferin öncü harekâtı. TDV hafiz-ahmed-pasa: «eylül başlarında oradan hareketle önce Musul'a, ardından Kerkük'e vardı (1625)». Gün yok ⇒ 1625-01-01 + kesinlik:'yil'.",
  ic_not_d:"🔴 KAYNAK ÇELİŞKİSİ, TARAF SEÇİLMEDİ: TDV kerkuk «1033'te (1624) Bağdat'ı alan Safevîler Kerkük'ü ele geçirdilerse de Hüsrev Paşa tarafından 1039'da (1630) geri alındı». Kılıç 2001 1627'de «Kerkük Beylerbeyisi Bostan Paşa» anıyor (1625 yanlısı İŞARET). Bu yüzden madde yer_id'si Musul; Kerkük'ün atlas dönemi YAMA-BAGDAT D bekletildi (denetim/UYGULA-BAGDAT-0914.md).",
  kaynak:"musul--irak · hafiz-ahmed-pasa · kerkuk + Remzi Kılıç, Türk Kültürü XXXIX/460 (2001)" },

// ── M3 · 16 Mart 1630 · Şehrizor'da Gülanber'in yeniden kuruluşu ───────
{ t:"1630-03-16", k:"fetih", kapsam:"ic", etiket:["toprak-kazanc","savas","konu-askeri"],
  b:"Hüsrev Paşa'nın Şehrizor'da Gülanber Kalesi'ni yeniden kurması — Şehrizor beylerbeyiliği",
  gun:"16 Mart 1630",
  yer:"Gülanber, Şehrizor", yer_id:"Şehrizor",
  kisiler:"Boşnak Hüsrev Paşa, Arnavud Mustafa Paşa",
  d:"Bağdat seferine çıkan Sadrazam Hüsrev Paşa, şiddetli yağışlar yüzünden Musul'da uzun süre kaldıktan sonra Şehrizor'a yöneldi. Şah Abbas'ın istilâsında onun emriyle yıktırılmış olan Gülanber Kalesi'nin yeniden inşasına başlandı; Şehrizor tekrar beylerbeyilik merkezi yapıldı ve kaleye Arnavud Mustafa Paşa beylerbeyi olarak bırakıldı. Hüsrev Paşa bölgedeki aşiretleri itaat altına aldı, Mihriban Kalesi'ni ele geçirdi ve 5 Mayıs 1630'da bu kale yakınında Safevî ordusuna ağır kayıplar verdirdi.",
  ic_not_gun:"Yıl TDV sehrizor: «Gülanber Kalesi, Hüsrev Paşa zamanında yeniden inşa edildi (1630)». GÜN: Remzi Kılıç, Türk Kültürü XXXIX/460 (2001) ss.479-493 «16 Mart 1630da Şehrizorda Gülanber Kalesi'nin inşaatına başlanmıştır» — makaleyi ARAS-BAGDAT okudu; UYGULA-BAGDAT yeniden OKUYAMADI (remzikilic.com erişilemedi, HTTP 000). 5 Mayıs 1630: TDV murad-iv «22 Ramazan 1039'da (5 Mayıs 1630)».",
  ic_not_d:"TDV murad-iv: Hüsrev Paşa «Şehrizol Kalesi'ni (Gülanber) tamir ettirdi, bölgedeki aşiretleri itaat altına aldı. Mihriban Kalesi'ni de ele geçirdikten sonra …». Beylerbeyi adı (Arnavud Mustafa Paşa) yalnız Kılıç 2001'den. 🟡 1630 SONRASI: Zâlim Kalesi'nin yeniden İran'a geçtiği (H. Koç, Evliya Çelebi C.4 s.348 aktarımı) TARİHSİZ — maddeye yazılmadı, atlasa da işlenmedi.",
  kaynak:"sehrizor · murad-iv + Remzi Kılıç, Türk Kültürü XXXIX/460 (2001), ss. 479-493" }

];
