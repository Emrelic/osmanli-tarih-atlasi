// ======================================================================
// ADALAR-PASIFIK (28-29 Ekim 2026) — Pasifik adaları: yeni noktalar
// Yalnız BOYALAR'da bulunan kimlikler kullanıldı (renkler.py'ye dokunulmadı).
// Kaynağı akademik/kurumsal olmayan polity EKLENMEDİ (bkz. pasifik-adalari-final.md).
// ======================================================================

window.YERLESIMLER_EK_PASIFIK_ADALAR = [

// Koror: 29 Ekim 2026 — yerlesimler_halef_1946.js'teki "Koror" (7.3467,134.4801; 0.55 km) ile BİRLEŞTİRİLDİ
// (mükerrer: aynı yer, 3 km altı). Ad ve kara-içi koordinat eski kayıttan, dönemler bu kayıttan.
{ ad:"Koror", tur:"liman", lat:7.3467, lon:134.4801, g:1, k:1,
  kasitli_bosluk:true, bos:"veri-yok",
  neden:"1899 öncesi Palau için atlasta künye yok (Palau şeflikleri; İspanyol hâkimiyeti fiilî değildi); kaynak gün vermiyor.",
  kaynak:"Koordinat: GeoNames-sınıfı gazetteer değeri, 3 hane (~1 km; eski 'Koror' kaydından devralındı, canlı GeoNames doğrulaması BORÇ; önceki 7.3419,134.4790 kara maskesi dışındaydı). Almanya: F.X. Hezel, Micronesian Seminar, 'Spanish Capuchins in the Carolines': \"On October 12, 1899, the German flag was raised over Ponape, bringing to an end the thirteen year period of Spanish sovereignty in the Carolines.\" ⚠️ GÜN KOMŞUDAN: Kolonia (Pohnpei) kaydı; Palau'ya özgü devir günü bulunamadı — Carolines'in tamamı için söylenmiş cümle, Palau'ya özgü doğrulama yok [yalnız yıl teyitli; gün teyitsiz]. Japonya: 1914 Ekim (Kolonia/Garapan kayıtlarıyla aynı AY hassasiyeti, 1914-10-01 kodlanır; Palau'ya özgü gün bulunamadı). BM vesayeti: 1947-07-18 (BM GK, TTPI). Palau: 1981-01-01 özerk hükûmet (atlas `palau` künyesi), Compact 1994-10-01 (Clinton, Proclamation 6726, 59 FR 49777; govinfo.gov/content/pkg/FR-1994-09-29/html/94-24346.htm).",
  s:[{f:"1000-01-01", t:"1899-10-12", d:"__BOSLUK__", kaynak:"BOŞLUK BEYANI (kaynak: bulunamadı): bu noktanın 1899-10-12 tarihinden önceki sahibi atlasta kaynakla yazılı DEĞİL; kayıttaki kasitli_bosluk / bos / neden beyanı geçerlidir, toprak komşu peteğe itilmez. f 1000-01-01 UFUK SINIR İŞARETİDİR (uydurma başlangıç değil); t = bu kaydın ilk kaynaklı dönemi."},
     {f:"1899-10-12",t:"1914-10-01",d:"almanya"},{f:"1914-10-01",t:"1947-07-18",d:"meiji-japonya"},{f:"1947-07-18",t:"1981-01-01",d:"pasifik-adalari-vesayet-toprak",kaynak:"BM vesayeti 1947-07-18"},{f:"1981-01-01",t:"2000-12-31",d:"palau",kaynak:"palau künyesi f 1981-01-01; Proclamation 6726 (59 FR 49777)"}] },

{ ad:"Port Vila (Efate)", tur:"liman", lat:-17.7334, lon:168.3273, g:1, k:1,
  kasitli_bosluk:true, bos:"veri-yok",
  neden:"Yeni Hebridler (Anglo-Fransız Kondominyumu, 1906-1980) ve Vanuatu (1980-) için atlasta künye ve BOYALAR anahtarı YOK; ada Nouméa/Tulagi peteğine emilmesin diye beyanlı boşluk. Künye + boya kimliği Emre kararı (tuz).",
  kaynak:"Convention between the UK and France respecting the New Hebrides, imza 20 Ekim 1906, onay belgeleri değişimi 9 Ocak 1907 (UK Treaty Series 1907 No. 3, treaties.fcdo.gov.uk/data/Library2/pdf/1907-TS0003.pdf) — yürürlük günü belirsiz, künye f kararı bekliyor. Bağımsızlık 30 Temmuz 1980: birincil belge (UNTS/Anayasa) bulunamadı, yalnız ikincil kaynak. 1906 öncesi: kaynak aranmadı [taranmadı].",
  d:[], s:[{f:"1000-01-01", t:"2000-12-31", d:"__BOSLUK__", kaynak:"BOŞLUK BEYANI (kaynak: bulunamadı): Port Vila için atlasta künye ve BOYALAR anahtarı YOK (Yeni Hebridler Kondominyumu 1906-1980 ve Vanuatu 1980-); bu noktanın hiçbir dönemi için kaynaklı sahip yazılı DEĞİL. Kayıttaki kasitli_bosluk / bos / neden beyanı geçerlidir, ada komşu peteğe itilmez. Künye + boya kimliği Emre kararı (tuz) bekliyor. f 1000-01-01 UFUK SINIR İŞARETİDİR, t = 2000-12-31 atlas sonu; her ikisi de uydurma tarih değil, beyan sınırıdır."}] },

];
