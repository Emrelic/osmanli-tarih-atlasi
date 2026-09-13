// -*- coding: utf-8 -*-
// KÖRFEZ 1602 — H-0007 ve H-0021 ölçümü (parti-emrelic-0021)
// ---------------------------------------------------------------------------
// H-0007: "Safevîlerin Bahreyn'i Portekizlilerden alması haritada yansıtılmıyor
//          (1602)"
// H-0021: "Bahreyn'de hiç toprak parçası var mıydı, oradaki kırmızılık garip
//          bir bozukluk gibi görünüyor" (H-0021-1.png, 1577-01-01 kesiti)
//
// ÖLÇÜM (py arac/nicin_bos.py, gün 1602-01-01, yarıçap 300 km):
//   Manama (Bahreyn) noktasının kendi peteği SAHİPSİZ (bos:"devletsiz",
//   kasitli_bosluk=hayır — dosya data/yerlesimler.js:981, BU OTURUM
//   DOKUNMADI). Yani ada adasının kendisi kırmızı DEĞİL, boş/gri.
//
//   Asıl kırmızılık KATAR YARIMADASI'ndan geliyor — CLAUDE.md §2 EMİLME:
//   yarımadanın hiçbir noktası yok (Doha yalnız kur:"1825-01-01"den sonra
//   var), bu yüzden yarımadanın büyük kısmı en yakın sahipli noktaya
//   (Ukayr/Uceyr, Lahsa Eyaleti — OSMANLI, d: vassal 1550-1670) emiliyor:
//     26.228,50.586 (Manama'nın kendisi)   0.0 km   sahipsiz  → boş (doğru)
//     25.300,51.200 (yarımada iç orta)   106.6 km   Ukayr     → KIRMIZI (YANLIŞ)
//     25.285,51.531 (Doha'nın 1825 öncesi konumu) 138.5 km   Ukayr     → KIRMIZI (YANLIŞ)
//     25.700,51.200 (yarımada kuzeyi)     99.2 km   Manama    → boş (sahipsiz ama en azından kırmızı değil)
//   Lahsa Eyaleti'nin (1550-1670 Osmanlı vassal) idaresi kıyı şeridiyle
//   sınırlıydı; Katar yarımadasının o dönemde merkezî bir idare kaydı yok
//   (ilk somut bağ 1868/1871 Osmanlı-Katar kazâsı — data/yerlesimler.js:982
//   Doha kaydındaki v:"Sânî emirliği" 1871'den başlıyor). Yarımadayı 1550'den
//   itibaren Osmanlı kırmızısına boyamak tarihen yanlış.
//
// ÇARE — tek DOLGU noktası (bkz. data/yerlesimler.js:1011 "SAHİPSİZ BÖLGE
// NOKTALARI" / "Nefud çölü" emsali): yarımadanın Ukayr'a emilen iç kesimine
// bir nokta konur, hiçbir zaman sahiplendirilmez, yalnız Ukayr peteğinin
// yarımadayı yutmasını keser. 3 km mükerrer kontrolü yapıldı — en yakın
// mevcut nokta Doha (Katar), 59.5 km ötede.
//
// H-0007 ile İLGİLİ AYRI BULGU (bu dosyaya YAZILMADI, çünkü Manama'nın kaydı
// data/yerlesimler.js'te ve bu oturumun dosyası DEĞİL — raporla bildirildi):
//   TDV `bahreyn` maddesi (2026-08-20 doğrulandı, HTTP 200, içerik okundu):
//   "XVI. yüzyılın başlarında ... Portekizliler, 1521'de Bahreyn'i ele
//   geçirdiler ... 1602'de İran'a bağlı kuvvetler tarafından dışarı
//   çıkarılmalarına kadar onların idaresinde kaldı." Yani Manama'nın bugünkü
//   "bos:'devletsiz', s:[{f:'1861-05-31',...,d:'ingiltere'}]" kaydı 1521-1602
//   Portekiz ve 1602'den sonraki Safevî dönemini HİÇ taşımıyor; kayıt
//   Necid/körfez şeyhlikleri şablonunu (1744/19. yy öncesi = devletsiz)
//   Bahreyn'e de uygulamış görünüyor, oysa Bahreyn'in kaynaklarda AÇIKÇA
//   KONUŞAN, isimli iki hükümdarı var (Portekiz, sonra Safevî — d:"safevi"
//   ve d:"portekiz" ikisi de data/devletler.js'te tanımlı ve tarih
//   aralıkları 1602'yi kapsıyor). Düzeltme önerisi koordinatöre bildirildi,
//   BU DOSYADAN uygulanmadı.
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// 🔴 14 EYLÜL 2026 — P06-ARAP (YAMA-0048 Y4 uygulandı, H-0011 "Doha 1602 Safevî mi")
// Yukarıdaki "ilk somut bağ 1868/1871 · 1550'den itibaren Osmanlı boyamak
// tarihen yanlış" hükmü TDV `katar` ile ÇÜRÜDÜ (gövde 14.09.2026 okundu):
//   "önce Lahsâ beylerbeyiliğini, arkasından da Katar sancağını kurarak
//    buraya idareciler tayin etti (1559)" · doğrudan idare "yarım kalmış",
//   ama yarımada "tartışmasız biçimde Osmanlı hâkimiyetindeki topraklar
//   içinde" (Benî Müsellem mahallî idarecileri üzerinden) ⇒ v: tâbi.
// Dolgu artık 1559-1670 arası sahiplidir; ölçüm ve gerekçe vakası duruyor.
// Bitiş: TDV `katar` 1559'dan 1776'ya atlıyor (gün/yıl YOK). TDV `riyad`:
// Lahsâ beylerbeyileri yerine Benî Hâlid'in hüküm sürmesi "XVII. yüzyılın
// ikinci yarısı" ⇒ yüzyıl-yarısı hassasiyeti. 1670-01-01 Lahsa/Ukayr/Katîf
// kayıtlarının benihalid geçişiyle hizalandı; o YILIN kendi kaynağı
// BULUNAMADI (kronoloji_arabistan 1670 maddesi de TDV'de yok diyor) —
// §4 şartlı komşu ① TAM karşılanmıyor, rapor: denetim/P06-ARAP-0914.md.
// ---------------------------------------------------------------------------
window.YERLESIMLER_EK_KORFEZ = [
{ ad:"Katar Yarımadası (iç, dolgu)", tur:"bolge", lat:25.40, lon:50.95, g:0, k:0,
  bos:"devletsiz",
  neden:"Katar yarımadasının bu iç kesiminde nokta yoktu ve komşu Ukayr (Uceyr) peteğine emiliyordu (H-0021, py arac/nicin_bos.py --lat 25.3 --lon 51.2 --gun 1602-01-01: 106.6 km, OSMANLI, tavan YETİŞİR). Bu nokta peteğin nerede biteceğini belirleyen bir DOLGUDUR. 1559-1670 arası Osmanlı'ya tâbi: TDV katar — Lahsâ beylerbeyiliği ve ardından Katar sancağı (1559); doğrudan idare yarım kaldı, hâkimiyet Benî Müsellem mahallî idarecileri üzerinden. 1559 öncesi ve 1670 sonrası (1868/1871 Osmanlı-Katar kazâsına kadar, Doha kaydı) sahipsizlik KASITLI HÜKÜM DEĞİL: bağlılık bulunamadı (TDV katar 1559'dan 1776'ya atlıyor). 1670 bitişi Lahsa/Ukayr benihalid geçişiyle hizalı; TDV riyad bu değişimi yalnız 'XVII. yüzyılın ikinci yarısı' diye veriyor, yılın kendi kaynağı bulunamadı.",
  d:[], s:[],
  v:[{ f:"1559-01-01", t:"1670-01-01", k:"Katar (Benî Müsellem) — Lahsâ beylerbeyiliğine bağlı", statu:"vassal",
       kaynak:"TDV katar: 'Katar sancağını kurarak buraya idareciler tayin etti (1559)' · 'tartışmasız biçimde Osmanlı hâkimiyetindeki topraklar içinde' — bitiş: TDV riyad 'XVII. yüzyılın ikinci yarısı', yıl Lahsa kaydına hizalı (kaynağı bulunamadı)" }] },
];
