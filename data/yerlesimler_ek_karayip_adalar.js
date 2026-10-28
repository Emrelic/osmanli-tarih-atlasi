// =============================================================================
// KARAYİP ADALARI — Küba ve Hispaniola kolonyal şehirleri (adalar-karayipler, 28 Ekim 2026)
// =============================================================================
// Ad alanı: window.YERLESIMLER_EK_KARAYIP_ADALAR
// KAYNAK GÜCÜ (dürüstlük beyanı): bu oturumda yalnız Britannica / UNESCO WHC / Cubanet
// özetlerine erişildi; TDV–akademik basamaklar (Pérez 1995, Moya Pons, Rouse 1992)
// sayfa gövdesiyle OKUNAMADI. Bu yüzden her kayıt YIL hassasiyetli ve
// "[yalnız yıl teyitli; gün teyitsiz]" notludur. Gün kaynakları EcuRed/gazete olduğundan
// (akademik değil) kullanılmadı.
// Zincir, aynı adadaki mevcut noktalarla (Havana, Baracoa, Santo Domingo) bire bir aynıdır;
// kırılma günleri onların kronoloji maddelerine dayanır (Değişmez 2).
window.YERLESIMLER_EK_KARAYIP_ADALAR = [

{ ad:"Bayamo", tur:"sehir", lat:20.3792, lon:-76.6433, g:1, k:3, kur:"1513-01-01",
  kesinlik:"yil",
  s:[{f:"1513-01-01",t:"1898-12-10",d:"ispanya"},
     {f:"1898-12-10",t:"1902-05-20",d:"abd"},
     {f:"1902-05-20",t:"2000-12-31",d:"kuba-cumhuriyeti"}],
  kaynak:"Cubanet 'Cuba: de las primeras siete villas…' (İspanyolca, gazete; akademik değil) — Velázquez'in 2. villası, 1513. [yalnız yıl teyitli; gün teyitsiz] Akademik teyit BULUNAMADI; ilk yer ve 1515 taşınması tartışmalı.",
  not:"kur: yıl; ilk yerleşim yeri bugünkü Bayamo olmayabilir (Guacanayabo kıyısı iddiası)." },

{ ad:"Trinidad (Küba)", tur:"sehir", lat:21.8022, lon:-79.9847, g:1, k:3, kur:"1514-01-01",
  kesinlik:"yil",
  s:[{f:"1514-01-01",t:"1898-12-10",d:"ispanya"},
     {f:"1898-12-10",t:"1902-05-20",d:"abd"},
     {f:"1902-05-20",t:"2000-12-31",d:"kuba-cumhuriyeti"}],
  kaynak:"Encyclopaedia Britannica 'Trinidad, Cuba' (İngilizce): 1514, Diego Velázquez; UNESCO WHC 460 'Trinidad and the Valley de los Ingenios'. [yalnız yıl teyitli; gün teyitsiz — 23 Aralık 1514 yalnız Vikipedi-türevi özetlerde]",
  not:"Trinidad (Mojos) ve Trinidad adası ile karıştırılmasın." },

{ ad:"Matanzas (Küba)", tur:"liman", lat:23.0411, lon:-81.5775, g:1, k:3, kur:"1693-01-01",
  kesinlik:"yil",
  s:[{f:"1693-01-01",t:"1898-12-10",d:"ispanya"},
     {f:"1898-12-10",t:"1902-05-20",d:"abd"},
     {f:"1902-05-20",t:"2000-12-31",d:"kuba-cumhuriyeti"}],
  kaynak:"Encyclopaedia Britannica 'Matanzas' (İngilizce): şehir 1693'te kuruldu; körfez 1508'den beri biliniyordu. [yalnız yıl teyitli; gün teyitsiz]",
  not:"kur: şehrin kuruluşu; körfez İspanyol bilgisi 1508 öncesidir ama yerleşim yoktu." },

{ ad:"Cienfuegos", tur:"liman", lat:22.1461, lon:-80.4364, g:1, k:3, kur:"1819-01-01",
  kesinlik:"yil",
  s:[{f:"1819-01-01",t:"1898-12-10",d:"ispanya"},
     {f:"1898-12-10",t:"1902-05-20",d:"abd"},
     {f:"1902-05-20",t:"2000-12-31",d:"kuba-cumhuriyeti"}],
  kaynak:"UNESCO WHC 1202 'Urban Historic Centre of Cienfuegos' (İngilizce): 1819'da kuruldu, ilk yerleşimciler çoğunlukla Fransız kökenli (Bordeaux, Louisiana). [yalnız yıl teyitli; gün teyitsiz]",
  not:"" },

{ ad:"Santiago de los Caballeros", tur:"sehir", lat:19.4517, lon:-70.697, g:1, k:3, kur:"1495-01-01",
  kesinlik:"yil",
  s:[{f:"1495-01-01",t:"1795-07-22",d:"ispanya"},
     {f:"1795-07-22",t:"1809-07-09",d:"fransa-cumhuriyet"},
     {f:"1809-07-09",t:"1822-02-09",d:"ispanya"},
     {f:"1822-02-09",t:"1844-02-27",d:"haiti"},
     {f:"1844-02-27",t:"1861-03-18",d:"dominik-cumhuriyeti"},
     {f:"1861-03-18",t:"1865-03-03",d:"ispanya"},
     {f:"1865-03-03",t:"2000-12-31",d:"dominik-cumhuriyeti"}],
  kaynak:"El Caribe (Santo Domingo gazetesi, İspanyolca; akademik değil): 'Primer Santiago de América', 1495 (Colón, Yaque del Norte kıyısında kale). [yalnız yıl teyitli; gün teyitsiz] Akademik teyit BULUNAMADI.",
  not:"Konum bugünkü şehirdir; 1495 kalesi ve 1504/1515 Jacagua'ya taşınması farklı yerdedir (kaynaklar taşınma yılında çelişir). 1562 depremi sonrası bugünkü yer. Kuruluş KONUM-YAKLAŞIK." },

// --- 29 Ekim 2026: gece turu — noktasız adalar (Jaragua kalıbı: bos + kasitli_bosluk, s kalıcı yönetimle başlar) ---
// Kırılma maddeleri: data/kronoloji_sinir_karayip_adalar.js

{ ad:"George Town (Cayman)", tur:"sehir", lat:19.2866, lon:-81.3744, g:1, k:0,
  kasitli_bosluk:true, bos:"insansiz",
  neden:"Cayman Adaları 1670'e dek kalıcı iskânsızdı; ada, anakara/Jamaika peteğine emilmesin diye nokta tutulur. Atlas noktası adayı temsil eder (George Town kuruluşu 18. yy, kaynak bulunamadı).",
  s:[{f:"1000-01-01", t:"1670-07-08", d:"__BOSLUK__", kaynak:"BOŞLUK BEYANI (kaynak: bulunamadı): bu noktanın 1670-07-08 tarihinden önceki sahibi atlasta kaynakla yazılı DEĞİL; kayıttaki kasitli_bosluk / bos / neden beyanı geçerlidir, toprak komşu peteğe itilmez. f 1000-01-01 UFUK SINIR İŞARETİDİR (uydurma başlangıç değil); t = bu kaydın ilk kaynaklı dönemi."},
     {f:"1670-07-08",t:"2000-12-31",d:"ingiltere"}],
  kaynak:"bulunamadı (akademik teyit bekliyor) — dayanak: 1670 Madrid Antlaşması (kronoloji_sinir_karayip_adalar.js).",
  not:"1670 egemenlik tanındı günüdür, kalıcı yerleşim günü DEĞİL. Jamaika bağımlılığı (1863-1962) modellenmedi." },

{ ad:"Scarborough (Tobago)", tur:"liman", lat:11.1833, lon:-60.7333, g:1, k:0,
  kasitli_bosluk:true, bos:"kabile",
  neden:"Tobago 1814'e dek Kalinago/Hollanda/Kurland/Fransız/İngiliz arasında defalarca el değiştirdi; modellenmedi. Kalıcı İngiliz yönetimi 1814-05-30.",
  s:[{f:"1000-01-01", t:"1814-05-30", d:"__BOSLUK__", kaynak:"BOŞLUK BEYANI (kaynak: bulunamadı): bu noktanın 1814-05-30 tarihinden önceki sahibi atlasta kaynakla yazılı DEĞİL; kayıttaki kasitli_bosluk / bos / neden beyanı geçerlidir, toprak komşu peteğe itilmez. f 1000-01-01 UFUK SINIR İŞARETİDİR (uydurma başlangıç değil); t = bu kaydın ilk kaynaklı dönemi."},
     {f:"1814-05-30",t:"1889-01-01",d:"ingiltere"},
     {f:"1889-01-01",t:"1958-01-03",d:"trinidad-tobago-ingiliz"},
     {f:"1958-01-03",t:"1962-05-31",d:"bati-hint-federasyonu"},
     {f:"1962-05-31",t:"1962-08-31",d:"trinidad-tobago-ingiliz"},
     {f:"1962-08-31",t:"2000-12-31",d:"trinidad-tobago"}],
  kaynak:"bulunamadı (akademik teyit bekliyor) — kırılma maddeleri kronoloji_sinir_karayip_adalar.js.",
  not:"[yalnız yıl teyitli; gün teyitsiz] 1889." },

{ ad:"Puerto Baquerizo Moreno (San Cristóbal, Galápagos)", tur:"liman", lat:-0.9019, lon:-89.6119, g:1, k:0,
  kasitli_bosluk:true, bos:"insansiz",
  neden:"Galápagos 1832'e dek insansız/korsan uğrağıydı; Ekvador ilhakından önce sahibi yoktu. Atlas noktası adaları temsil eder (kapsam beyanı).",
  s:[{f:"1000-01-01", t:"1832-02-12", d:"__BOSLUK__", kaynak:"BOŞLUK BEYANI (kaynak: bulunamadı): bu noktanın 1832-02-12 tarihinden önceki sahibi atlasta kaynakla yazılı DEĞİL; kayıttaki kasitli_bosluk / bos / neden beyanı geçerlidir, toprak komşu peteğe itilmez. f 1000-01-01 UFUK SINIR İŞARETİDİR (uydurma başlangıç değil); t = bu kaydın ilk kaynaklı dönemi."},
     {f:"1832-02-12",t:"2000-12-31",d:"ekvador-cumhuriyeti"}],
  kaynak:"bulunamadı (akademik teyit bekliyor) — kırılma maddesi kronoloji_sinir_karayip_adalar.js; gün standart anlatı, sayfa okunamadı.",
  not:"Ekvador devletinin kuruluşu (1830) bu noktaya ait değildir." },

{ ad:"San Juan Bautista (Juan Fernández)", tur:"liman", lat:-33.6316, lon:-78.8794, g:0, k:0,
  kasitli_bosluk:true, bos:"insansiz",
  neden:"Juan Fernández Adaları 1750'ye dek insansızdı (1574 keşfi, kalıcı iskân yok). Anakara Şili peteğine emilmesin diye nokta tutulur.",
  s:[{f:"1000-01-01", t:"1750-01-01", d:"__BOSLUK__", kaynak:"BOŞLUK BEYANI (kaynak: bulunamadı): bu noktanın 1750-01-01 tarihinden önceki sahibi atlasta kaynakla yazılı DEĞİL; kayıttaki kasitli_bosluk / bos / neden beyanı geçerlidir, toprak komşu peteğe itilmez. f 1000-01-01 UFUK SINIR İŞARETİDİR (uydurma başlangıç değil); t = bu kaydın ilk kaynaklı dönemi."},
     {f:"1750-01-01",t:"1818-02-12",d:"ispanya"},
     {f:"1818-02-12",t:"2000-12-31",d:"sili-cumhuriyeti"}],
  kaynak:"bulunamadı (akademik teyit bekliyor) — [yalnız yıl teyitli; gün teyitsiz]. 1818-02-12 Şili bağımsızlık ilanı Castro (Chiloé) zinciriyle aynı.",
  not:"Chiloé 1826'ya dek İspanyol kaldı (Castro zincirinde 1818 yazıyor — AÇIK KALEM: Chiloé'nin Şili'ye katılışı Ocak 1826 Tantauco Antlaşması). Bu noktada 1818 Castro ile hizalı bırakıldı." },

];
