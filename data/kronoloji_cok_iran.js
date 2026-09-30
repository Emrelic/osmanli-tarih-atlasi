// -*- coding: utf-8 -*-
// =====================================================================
// İRAN — çok künyeli kronoloji (KRONO-DOGU-ISLAM-0929, 29 Eylül 2026)
// =====================================================================
// window.KRONOLOJI_COK_IRAN — şartname oturumlar/KRONO-DOGU-ISLAM-0929.md
// + oturumlar/KRONO-DUNYA-0929-ORTAK.md §4.1: KRONOLOJI_<ÜLKE> adı künyeye bağlanmıyor
// ya da künyenin kendi maddelerini eziyor ⇒ ÇOK KÜNYELİ yol. app.js cokTarafliKronolojiEkle
// her maddeyi `devletler[]`deki HER künyeye EKLER (ezmez; t+b mükerrerini atar).
//
// 🔴 KAPSAM: yalnız SENKRON-DEFTER-0929'un `net_olay_adayi` listesinde, TDV'nin DOĞRULADIĞI ve
// mevcut 157 kronoloji/olay dosyasında o künyenin gözünden YAZILMAMIŞ olaylar. Taranan ve
// YAZILMAYAN adaylar gerekçeleriyle denetim/KRONO-DOGU-ISLAM-0929.md'de (harita kusuru olanlar
// -YERLESIM-ONERI.md'de). Madde uydurulmadı: kaynak gün vermiyorsa t = YYYY-01-01 ve `gun:` beyanı.
//
// Künye id'leri data/devletler.js'ten OKUNDU: celayirli (1340-1431) · timurlu (1370-1507) ·
// safevi (1501-1736) · gilan-kiya (1371-1592). Her madde olayın geçtiği gün VAR OLAN yapıya bağlı.
// =====================================================================
window.KRONOLOJI_COK_IRAN = [

{ t:"1386-01-01", b:"Timur'un \"üç yıllık seferi\" başladı — Celâyirliler Azerbaycan'ı Timur'a kaptırdı", gun:"H. 788 / 1386 — yıl hassasiyeti · TDV `timur` ve `celayirliler` gün/ay vermiyor",
  devlet:"celayirli", devletler:["celayirli","timurlu"], tur:"toprak-kayip", onem:5, dunya:2, kapsam:"dis",
  etiket:["savas","toprak-kayip","konu-askeri","konu-siyasi"], yer_id:"Tebriz",
  d:"Timur 788 (1386) yılında İran'a yürüyerek Mâzenderan, Luristan ve Gürcistan üzerinden Azerbaycan'a girdi ve Karabağ'a ulaştı. Celâyirli Sultan Ahmed'in elindeki Tebriz ile Azerbaycan-Arrân-Ermenistan hattı bu seferle Timurlu hâkimiyetine geçti; Celâyirli devleti Irak'a (Bağdat) çekildi. Azerbaycan'ın el değiştirmesi, Altın Orda hanı Toktamış ile Timur arasındaki büyük çatışmanın da fitilini ateşledi.",
  ic_not_d:"Aynı olay çekirdekte Osmanlı kronolojisi için olaylar_ek5.js 1386-01-01'de duruyor; Celâyirli künyesinin kendi kronolojisinde (kronoloji_iran_ardillari.js) 1386 Azerbaycan kaybı YOKTU. SENKRON-DEFTER grup #10: 30 yerleşim celayirli→timurlu 1386-01-01.",
  kaynak:"TDV `timur` (\"788'de (1386) buraya yürüdü. 'Üç yıllık sefer' diye anılan (1386-1388) bu harekât sırasında … Azerbaycan'a giderek Karabağ'a ulaştı\") · TDV `celayirliler` (Timur'un Kuzey İran ile Ermenistan'ı ele geçirmesinin Ahmed Celâyir'i Memlüklere sığınmaya mecbur ettiği)" },

{ t:"1592-01-01", b:"Şah Abbas Gîlân'ı ilhak etti — Kârkiyâ hânedanı sona erdi", gun:"H. 1000 / 1592 — yıl hassasiyeti · TDV `gilan` ve `lahican` gün/ay vermiyor",
  devlet:"safevi", devletler:["safevi","gilan-kiya"], tur:"toprak-kazanc", onem:3, dunya:1, kapsam:"ic",
  etiket:["toprak-kazanc","merkezilesme","konu-siyasi","konu-askeri"], yer_id:"Lâhîcan",
  d:"XVI. yüzyıl başından beri Safevîlere tâbi olan Lâhîcan merkezli Kârkiyâ seyyidlerinin son emîri Ahmed Han, Osmanlı-Safevî savaşı sırasında Lâhîcan'ın Osmanlılara verilmesi yönünde faaliyet gösterince Şah I. Abbas'ın tepkisini çekti. 1590 barışından sonra saraya çağrıldığı hâlde gitmeyen Ahmed Han'a karşı Şah Abbas ordusuyla Gîlân'a girip bölgenin tamamını doğrudan Safevî idaresine aldı. Bu ilhak, Abbas'ın mahallî emirlikleri tasfiye ederek merkezî otoriteyi güçlendirme siyasetinin ilk halkalarındandır.",
  ic_not_d:"SENKRON-DEFTER grup #40: Bender Enzeli ve Lâhîcan gilan-kiya→safevi 1592-01-01. Mevcut İran/Safevî kronolojilerinde 1592 Gîlân ilhakı YOKTU (kronoloji_iran.js yalnız ipek tekelinde Gîlân'ı anıyor).",
  kaynak:"TDV `gilan` (\"Safevî Hükümdarı I. Şah Abbas 1592'de bölgeyi hâkimiyeti altına aldı\") · TDV `lahican` (seyyidlerin \"1000 (1592) yılına kadar\" yönetimi ve Ahmed Han'ın tutumu) · TDV `abbas-i` (Gîlân, Mâzenderan … mahallî emirliklere son verdiği)" }

];
