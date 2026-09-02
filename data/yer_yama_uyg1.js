// -*- coding: utf-8 -*-
// YER_YAMA_UYG1 -- UYGULAMA-1 oturumu, TASNİF-D'nin kendi 🟠 kovasından
// UYGULANMAYA HAZIR bulduğu iki kayıt. `d:` ve `s:` alanları, o kaydın
// data/yerlesimler.js'teki TAM VE NİHAİ dizileridir (koordinatörün dosyasına
// birebir yapıştırılabilir hâlde) -- kısmi delta değil, bütün alanın son hâli.
// Bu dosyanın kendisi girdi.py'ye BAĞLANMAMIŞTIR, motoru beslemez, yalnız
// aktarım/kayıt dosyasıdır.
//
// 🔴 İKİSİ DE Değişmez-2 SINANDI: her yeni kırılma günü çekirdekte
// (data/olaylar*.js) ±0 gün farkla ZATEN maddeli -- yeni kronoloji
// maddesi gerekmiyor.
//
// 🟡 Sivrihisar TAM DEĞİL -- yalnız 1402-1413 (Timur/Karaman) parçası
// düzeltildi. 1300-1354 "germiyan" parçası da TDV ile çelişiyor ama üç
// günü (1356/1362/1363) çekirdekte ±30 gün içinde maddesiz -- uygulanırsa
// YENİ açık kırılma üretir, o yüzden BU TUR DOKUNULMADI. Ayrıntı: `not:` alanı.

window.YER_YAMA_UYG1 = [

// 🔴 Bağdat BURADAN ÇIKARILDI (30 Ağustos) — UYGULAMA-ERKEN ile çakışma
// yatay ölçülüp çözüldü (tahta M-1667, M-1668): TDV `bagdat` "iki defa
// işgal edildi" (1393 VE 1401) diyor, ben yalnız 1401'i saymışım — ERKEN
// haklıydı. Nihai birleşik kayıt artık data/yer_yama_erken.js'te
// (commit 540a222): erken'in s: (1393+1401 iki işgal) + benim d: (açıkça
// yazdığım 1534-1623/1638-1917 dönemleri). Mükerrer kayıt bırakmıyorum.

{ad:"Sivrihisar",
 s:[
   {f:"1281-01-01", t:"1300-01-01", d:"selcuklu"},
   {f:"1300-01-01", t:"1354-08-01", d:"germiyan"},
   {f:"1402-07-28", t:"1402-09-15", d:"timurlu"},
   {f:"1402-09-15", t:"1413-07-05", d:"karaman"}
 ],
 d:[
   {f:"1354-08-01", t:"1402-07-28"},
   {f:"1413-07-05", t:"1923-10-29"}
 ],
 kaynak:"TDV `sivrihisar` — gövdesi okundu (SONNET HAZIR KITA 77, tahta M-1181): \"Timur, Sivrihisar'ı Kırşehir ve Beypazarı ile birlikte Karamanoğulları'na verdi.\" TDV `karamanogullari` (bağımsız 2. madde) teyit ediyor: \"Timur Karamanlı ülkesini Kayseri, Kırşehir, Sivrihisar ve Beyşehir'le birlikte Alâeddin Bey'in oğullarına vermişti.\" Kardeş kayıtlar Kırşehir (yerlesimler.js:1288) ve Beyşehir (yerlesimler.js:1284) aynı 1402 dağıtımını zaten `karaman` taşıyor — Sivrihisar tek tutarsız kardeşti.",
 neden:"p0029/H-0002 — Sivrihisar'ın 1402-1413 arası 'timurlu→süleyman-çelebi→mehmed-çelebi' (Osmanlı Fetret şehzadeleri) ataması TDV'nin iki bağımsız maddesiyle çelişiyor. DEĞİŞEN: eski s: {1402-07-28→1404-03-01 timurlu},{1404-03-01→1411-02-17 suleyman-celebi},{1411-02-17→1413-07-05 mehmed-celebi} → yeni {1402-07-28→1402-09-15 timurlu},{1402-09-15→1413-07-05 karaman}. selcuklu/germiyan (1281-1354) ve d: dizisi DOKUNULMADI.",
 not:"selcuklu→germiyan (1300-1354) parçası da TDV ile çelişiyor (TDV: 1356 Orhan fethi → 1362 Karaman geri aldı → 1363 Murad I geri aldı, yani 1281-1300 arası SELÇUKLU DEĞİL Karaman-öncesi bir şey ve 1300-1354 arası GERMİYAN DEĞİL bu zigzag) ama üç günün (1356-01-01/1362-01-01/1363-01-01) yalnız 1363-01-01 çekirdekte 0 gün farkla maddeli; 1356 en yakın maddeden 366 gün, 1362 ise 59 gün uzakta. Bu üçlü uygulanırsa İKİ YENİ açık kırılma (Değişmez 2 ihlali) üretir — bu yüzden BU TUR yazılmadı. KRONOLOJİ İÇERİK'e devrediyorum: 1356 ve 1362 için ±30 gün içine düşecek bir madde yazılırsa (ya da TDV'den daha kesin bir gün bulunursa) bu parça da tamamlanabilir.",
 gun_dogrulama:"1402-07-28, 1402-09-15, 1413-07-05 — üçü de data/olaylar*.js'te 0 gün farkla zaten maddeli (Ankara Savaşı · Timur Anadolu beyliklerini yeniden kurdu · Çamurlu Savaşı); Kırşehir/Beyşehir kardeş kayıtlarının da kullandığı standart Fetret sınırları, YENİ kırılma değil."
}

,

{ad:"İsmail",
 s:[
   {f:"1281-01-01", t:"1456-06-01", d:"bogdan"},
   {f:"1790-12-22", t:"1792-01-10", d:"rusya"},
   {f:"1812-05-28", t:"1856-03-30", d:"rusya"},
   {f:"1878-07-13", t:"1923-10-29", d:"rusya"}
 ],
 v:[
   {f:"1456-06-01", t:"1538-09-01", k:"Boğdan Voyvodalığı"},
   {f:"1856-03-30", t:"1878-07-13", k:"Boğdan Voyvodalığı (Cenûbî Besarabya — Paris Antlaşması'yla Boğdan'a geri verildi, Berlin Antlaşması'yla tekrar Rusya'ya)"}
 ],
 d:[
   {f:"1538-09-01", t:"1790-12-22", y:"kusatma"},
   {f:"1792-01-10", t:"1812-05-28", y:"antlasma"}
 ],
 kaynak:"TDV `bogdan` — gövdesi okundu (WebFetch, 2026-08-29): \"Rusya Kahul (Cahul), İsmâil Kalesi ve Bolgrad'ı Boğdan'a geri verdi\" (1856 Paris Antlaşması) ... \"Berlin Antlaşması ile Besarabya'nın üç vilâyeti tekrar Rusya'ya verilmiş\" (1878), Boğdan'a karşılık Dobruca verildi.",
 neden:"p0037/H-0001 (ORHANGAZİ, tahta M-1460) — İsmail'in s: zinciri 1812-05-28→1923-10-29 arasını KESİNTİSİZ `rusya` gösteriyordu; 1856-1878 arası Cenûbî Besarabya (Kahul·Bolgrad·İsmail) Paris Antlaşması'yla Boğdan'a (Osmanlı vassalı) verilmiş, Berlin Antlaşması'yla geri alınmıştı — bu ARADA KALAN dönem veride hiç yoktu. Osmanlı'nın KENDİSİNE değil VASSALINA geçtiği için `s:` değil `v:` (tâbi, açık kırmızı) olarak eklendi — kaydın kendi 1456-1538 v: döneminin AYNI deseni.",
 gun_dogrulama:"1856-03-30: data/olaylar*.js'te '1856-03-30 Paris Antlaşması: Kırım Savaşı'nın sonu...' maddesi 0 gün farkla ZATEN var. 1878-07-13: '1878-07-13 Berlin Antlaşması' maddesi 0 gün farkla ZATEN var. İkisi de yeni kırılma değil.",
 not:"Kahul (Cahul) ve Bolgrad (Bolhrad) AYNI olayın parçası ama data/yerlesimler*.js'te KAYIT YOK (py arac/_yer_ara.py ile sınandı: 'Kahul'·'Cahul'·'Kagul'·'Bolgrad'·'Bolgrado' hepsi 0 eşleşme) — İKİSİ DE YENİ NOKTA, yer_yama'ya yazılmadı, koordinatöre DEVREDİLİYOR. Yaklaşık koordinat (doğrulanmadı, yalnız yönlendirme için): Kahul/Cahul ~45,90K/28,19D · Bolgrad/Bolhrad ~45,67K/28,61D. İkisi de eklenirse İsmail'le AYNI s:/v: deseni (bogdan → Boğdan Voyvodalığı → rusya → Boğdan Voyvodalığı(1856-1878) → rusya) uygulanabilir; kuruluş tarihleri ve önceki dönemleri (1281'den itibaren) TDV ile ayrıca sınanmalı, ben yalnız İsmail'i sınadım."
},

// 🔴 BİRLEŞİMLE DÜŞTÜ — SİLİNMEDİ, YORUMA ÇEVRİLDİ (kayıt korunur)
//    hüküm  : denetim/YAMA-CAKISMA.md · M-2116 (1.MURAT)
//    kazanan: data/yer_yama_birlesim_1murat.js — İKİ yamanın farklı
//             katmanları orada TEK kayıtta birleştirildi (c8e535f)
//    uygulayan: OPUS HAZIR KITA 109 · 2 Eylül 2026 · sevk M-2134
//    ⚠️ Bu kaydın katkısı KAYBOLMADI: birleşim kaydı hem `d:` hem
//       `s:` taşıyor ve ölçülerek doğrulandı.
//       Hükmün yanlış olduğunu düşünen KOORDİNATÖRE yazsın.
// {ad:"Kars",
//  s:[
//    {f:"1281-01-01", t:"1534-06-01", d:"gurcistan"},
//    {f:"1877-11-18", t:"1918-05-25", d:"rusya"}
//  ],
//  d:[
//    {f:"1534-06-01", t:"1877-11-18"},
//    {f:"1918-05-25", t:"1923-10-29"}
//  ],
//  kaynak:"TDV `doksanuc-harbi` — gövdesi okundu (WebFetch, 2026-08-29): \"General Lazarov'un idaresindeki kuvvetler ... 18 Kasım'da Kars'ı ele geçirdiler.\" (1877). Eski kayıt 1878-07-13'e (Berlin Antlaşması, resmî devir günü) kadar Osmanlı gösteriyordu — oysa şehir FİİLEN 8 ay önce, kuşatmayla düşmüştü.",
//  neden:"p0037/H-0009 (ORHANGAZİ, tahta M-1460/M-1494) — Kars'ın düşüşü kronoloji panelinde VAR ('Kars'ın düşüşü — Doğu cephesinin çözülmesi ve Aziziye tabyaları', 1877-11-18, olaylar_ek*.js) ama haritada karşılığı yoktu, çünkü veri Berlin Antlaşması gününü (siyasi devir) kullanıyordu, fiilî düşüş gününü değil. ⚠️ ORHANGAZİ'nin uyardığı 'tek başına düzeltilirse enklav' riski ÖLÇÜLDÜ ve GERÇEK DEĞİL: Ardahan da AYNI turda 1877-05-17'ye çekildi (aşağıda), böylece iki nokta birlikte ve tutarlı hareket ediyor. Batum'a DOKUNULMADI — TDV `doksanuc-harbi` Batum'un savaş sırasında ele geçirildiğini hiç yazmıyor, yalnız Berlin Antlaşması'yla (1878-07-13) devredildiğini biliyoruz; yani Batum'un mevcut kaydı zaten DOĞRU. Kars+Ardahan'ın 1877'de düşüp Batum'un 1878'e kadar dayanması TARİHEN GERÇEK bir örtüşme (Rus kuşatmasına direnen liman kalesi), sahte enklav değil.",
//  gun_dogrulama:"1877-11-18: data/olaylar*.js'te 'Kars'ın düşüşü — Doğu cephesinin çözülmesi ve Aziziye tabyaları' 0 gün farkla ZATEN maddeli — bu YENİ bir kırılma değil, var olan bir maddenin haritaya BAĞLANMASI."
// },

// 🔴 BİRLEŞİMLE DÜŞTÜ — SİLİNMEDİ, YORUMA ÇEVRİLDİ (kayıt korunur)
//    hüküm  : denetim/YAMA-CAKISMA.md · M-2116 (1.MURAT)
//    kazanan: data/yer_yama_birlesim_1murat.js — İKİ yamanın farklı
//             katmanları orada TEK kayıtta birleştirildi (c8e535f)
//    uygulayan: OPUS HAZIR KITA 109 · 2 Eylül 2026 · sevk M-2134
//    ⚠️ Bu kaydın katkısı KAYBOLMADI: birleşim kaydı hem `d:` hem
//       `s:` taşıyor ve ölçülerek doğrulandı.
//       Hükmün yanlış olduğunu düşünen KOORDİNATÖRE yazsın.
// {ad:"Ardahan",
//  s:[
//    {f:"1281-01-01", t:"1551-01-01", d:"gurcistan"},
//    {f:"1877-05-17", t:"1918-05-25", d:"rusya"}
//  ],
//  d:[
//    {f:"1551-01-01", t:"1877-05-17"},
//    {f:"1918-05-25", t:"1923-10-29"}
//  ],
//  kaynak:"TDV `doksanuc-harbi` gövdesi okundu ama gün VERMİYOR ('General Melikof'un idare ettiği kuvvetler ... Ardahan'a girdiler', tarihsiz). Gün için AKADEMİK kaynağa çıkıldı (§4 kırmızı çizgi): W.E.D. Allen & Paul Muratoff, *Caucasian Battlefields* (Cambridge University Press, 1953) — bu kampanyanın standart askerî tarih referansı — Ardahan'ın düşüşünü 17 Mayıs 1877 olarak verir; tarih ayrıca güncel ikincil literatürde (ör. 'Battle of Ardahan' genel kaynakları) bağımsız doğrulanmış görünüyor. TDV bu GÜNÜ vermiyor ama olayın 1877'de, savaşın erken safhasında olduğunu doğruluyor — çelişki yok, yalnız TANECİKLİK farkı (§4).",
//  neden:"p0037/H-0009 — Kars'ı tek başına düzeltmek Ardahan hâlâ 1878'e bağlıyken sahte bir enklav doğuracaktı (ORHANGAZİ'nin uyarısı); Ardahan da aynı savaşın aynı türde kalemi olduğu için BİRLİKTE düzeltildi.",
//  gun_dogrulama:"1877-05-17: çekirdekte en yakın madde 'Rusya'nın savaş ilânı — Doksanüç Harbi'nin başlaması' (1877-04-24), 23 gün fark — ±30 gün içinde, Değişmez 2 için yeterli, yeni madde gerekmiyor."
// }

];
