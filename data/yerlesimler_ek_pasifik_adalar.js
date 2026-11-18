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
     {f:"1899-10-12",t:"1914-10-01",d:"almanya"},{f:"1914-10-01",t:"1947-07-18",d:"meiji-japonya",kaynak:"DEVRALMA (DUNYA-1102 D adımı (c), 3 Kasım 2026): dönemin kapanış kırılmasını anlatan kronoloji maddesi «Eski Japon manda adalari (Saipan, Pohnpei, Jaluit) ABD yonetiminde BM Pasifik Adalari Vesayet Bolgesi oldu» (1947-07-18, taraf kolu) kaynağı — UN Security Council Resolution 21 (1947); UN Trusteeship Council, Trust Territory of the Pacific Islands (un.org/en/events/trusteeshipcouncil); Office of the Historian · BEYANLI: olayın kaynağıdır, yerleşim tanıklığı değil"},{f:"1947-07-18",t:"1981-01-01",d:"pasifik-adalari-vesayet-toprak",kaynak:"BM vesayeti 1947-07-18"},{f:"1981-01-01",t:"2000-12-31",d:"palau",kaynak:"palau künyesi f 1981-01-01; Proclamation 6726 (59 FR 49777)"}] },

// 🔁 MÜKERRER BİRLEŞTİRME (ASIRET-DEVLETSIZ-DERLEME-1118, 18 Kasım 2026): burada duran
// "Port Vila (Efate)" kaydı (bos:"veri-yok", 1000-2000 __BOSLUK__) yerlesimler_a78_okyanusya.js
// "Port Vila" kaydıyla AYNI koordinattaydı (-17.7334,168.3273; 0 km) ve onunla ÇELİŞİYORDU:
// orada vanuatu-topluluklari → yeni-hebridler-kondominyumu → vanuatu zinciri kaynaklı yazılı.
// "künye YOK" gerekçesi bayattı. Kayıt kaldırıldı; 1906 Sözleşmesi kaynağı a78 kaydının ic_not'una taşındı.

];
