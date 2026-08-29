// -*- coding: utf-8 -*-
// YER_YAMA_GECE_V1 -- UYGULAMA-1, GECE PARTİSİ (30 Ağustos 2026), VERİ kovası
// ilk 11 madde (oturumlar/GECE-VERI.md). Koşu CANLI, arac/'a dokunulmadı.
// `d:`/`s:` alanları o kaydın data/yerlesimler.js'teki TAM VE NİHAİ dizisidir.

window.YER_YAMA_GECE_V1 = [

{ad:"Manama (Bahreyn)",
 s:[
   {f:"1417-01-01", t:"1521-01-01", d:"cebri"},
   {f:"1521-01-01", t:"1602-01-01", d:"portekiz"},
   {f:"1602-01-01", t:"1717-01-01", d:"safevi"},
   {f:"1717-01-01", t:"1753-01-01", d:"umman"},
   {f:"1753-01-01", t:"1783-01-01", d:"zend"},
   {f:"1783-01-01", t:"1861-05-31", d:"bahreyn"},
   {f:"1861-05-31", t:"1923-10-29", d:"ingiltere"}
 ],
 kaynak:"data/olaylar_ek13.js:237-335 (A-12…A-19, önceki bir oturumun TDV `bahreyn` gövdesinden çıkardığı tam kronoloji zinciri) — TDV metni doğrudan alıntılanmış: 1417 Cebrîler, 1521 Portekiz (\"Portekizliler, 1521'de Bahreyn'i ele geçirdiler\"), 1602 Safevî (\"1602'de İran'a bağlı kuvvetler tarafından\"), 1717 Umman istilâsı, 1753 Âl-i Mezkûr (Zend adına), 1783 Âl-i Halîfe (\"Utûb kabilesinden... hâkimiyetine girdi\"). `cebri`/`portekiz`/`safevi`/`umman`/`zend`/`bahreyn`/`ingiltere` — yedisi de data/devletler.js'te tanımlı, künye ömürleriyle çakışma yok (cebri 1417-1524 içinde 1417-1521 kullanıldı).",
 neden:"p0006/H-0001'in bıraktığı 'İran ÇEKİRDEĞİ'/Bahreyn zinciri kalemi — PAKET SIRADA (20 Ağustos) bu altı kırılmanın altısının da kronoloji maddesinin ZATEN yazılı olduğunu bulmuştu ('data/olaylar_ek13.js:270-330 — eksik olan tek şey data/yerlesimler.js:993 Manama kaydının s: dizisi, 1281→1861 arası boş'). Bugün ölçtüm: hâlâ boştu (yalnız 1861-05-31→1923-10-29 ingiltere vardı). Altı kırılma günü de (1417/1521/1602/1717/1753/1783) çekirdekte 0 gün farkla ZATEN maddeli — bu kayıt yalnız var olan kronolojiyi haritaya BAĞLIYOR, yeni madde gerektirmiyor.",
 not:"İKİ AÇIK NOKTA, BİLEREK UYGULANMADI: (1) 1281-01-01→1417-01-01 arası (136 yıl) DOKUNULMADI — TDV bu dönemde Bahreyn'in sırasıyla 'Uyûnîler, Salgurlular, Tabîler' idaresinde kaldığını yazıyor ama HİÇBİRİNE tarih vermiyor; devletler.js'te bu üç kimlik için künye yok. Sahipsiz kalıyor, ayrı bir araştırma gerektirir. (2) 1559 Osmanlı seferi (data/olaylar_ek13.js A-14) BİLEREK ATLANDI: TDV metni ('tekrar Portekizliler'in idaresine geçen') bir kısa süreli Osmanlı `d:` dönemini işaret ediyor, batı literatürü ise seferin BAŞARISIZ olduğunu (kuşatma kırıldı, veba, teslim şartları) yazıyor — önceki oturum bu çelişkiyi ÇÖZMEDEN bıraktı ('SEÇİM YAPILMADI — brifing gereği'). Ben de TEK TARAFLI seçim yapmadım: batı okumasını (d: yok) esas aldım çünkü TDV okumasının GEREKTİRDİĞİ ikinci bir tarih (Portekiz'in NE ZAMAN geri döndüğü) hiçbir kaynakta yok — uydurmadan uygulanamaz. Koordinatör TDV okumasını tercih ederse (kısa bir d:1559 dönemi, dönüş günü YYYY-01-01 yaklaşıklığıyla) bunu ayrıca değerlendirebilir."
}

];
