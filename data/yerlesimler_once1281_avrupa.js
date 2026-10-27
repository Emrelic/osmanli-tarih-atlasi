// ======================================================================
// ONCE1281-YERLESIM-AVRUPA2 — 1281 öncesi künyelerin merkez yerleşimleri (18 Ekim 2026)
// AD ALANI: data/yerlesimler_once1281_avrupa.js → window.YERLESIMLER_ONCE1281_AVRUPA
// BAĞLAMA: arac/girdi_listesi.py GIRDI_DOSYALARI + index.html satırı
//
// KAPSAM: Como, Meissen, Salzburg. (Baden-Baden: mevcut düğüm yerlesimler_nokta2.js, orada 1000-1112 almanya + 1112 baden yazıldı.
//   Eğriboz: mevcut düğüm yerlesimler.js, dosya başka oturumda kilitli — YAPILMADI, rapora bakınız.)
// YAPILMADI: Saluzzo — künye saluzzo-markizligi `arac/renkler.py` BOYALAR'da yok ve
//   `harita:` ile yönlendirilecek benzer bir boya yok; BOYALAR'a yazmak motor tuzu
//   dosyasına dokunmaktır (yasak). Boyanmayan kimlikle s: yazmak haritada delik açar.
//
// ÖNCEKİ DÖNEM İLKESİ: nokta, künye öncesinde HOŞ DEĞİL — Mark Meissen, Baden-Baden
//   (Ufgau) ve Como Reich/Regnum Italicum içindeydi (almanya), Eğriboz Bizans'taydı;
//   yoksa nokta 1000-1112/1123 arası delik açardı (1281 öncesinde komşu nokta yok).
// SONRAKİ DÖNEM: künye bittiği günden sonrası, atlasın aynı tarihî birimdeki komşu
//   zincirinden (Milano, Stuttgart/Dresden, Linz) EMSALLE alınmıştır; kırılma günleri
//   birebir aynıdır ⇒ aynı kronoloji maddeleri kapatır. Her kayıtta kaynak alanında.
// KOORDİNAT: GeoNames (geonames.org) yerleşim girdisi — atlasın kendisi dayanak DEĞİL.
// ======================================================================

window.YERLESIMLER_ONCE1281_AVRUPA = [
{ ad:"Como", tur:"sehir", lat:45.8082, lon:9.0832, g:1, k:0, d:[],
  s:[{f:"1000-01-01",t:"1001-01-01",d:"almanya",kaynak:"BEYAN: künye como-komunu f=1001-01-01 YÜZYIL hassasiyetli yer tutucudur (Treccani «Como»: komün «verso lo scorcio del sec. XI»). Öncesi Regnum Italicum = Reich (962'den beri Kutsal Roma, künye almanya f=0962-02-02); Como'nun kendi kaynaklı sahibi bulunamadı"},
     {f:"1001-01-01",t:"1335-01-01",d:"como-komunu",kesinlik:{f:"yuzyil",t:"yil"},kaynak:"künye como-komunu · Enciclopedia Italiana (Treccani) «Como»: komün «verso lo scorcio del sec. XI» kuruldu (f YÜZYIL, yıl yazılmadı); «venti anni dopo (1335) Como passò in dominio di Azzone Visconti» (t YIL). Piskoposluk hakları ile komün yönetimi tek etikette (künye beyanı)"},
     {f:"1335-01-01",t:"1395-05-11",d:"visconti",kesinlik:{f:"yil"},kaynak:"Treccani «Como»: «una parentesi di dominio visconteo (1335-1402)» · Gian Galeazzo'nun dük unvanı 11 Mayıs 1395 (Milano zinciri, DBI) — kırılma günü Milano zincirinden: gün komşudan"},
     {f:"1395-05-11",t:"1535-11-01",d:"milanoduka",kaynak:"Treccani «Como»: «Nel 1451 Como entrò a far parte, definitivamente, dello Stato milanese» (YIL). BEYAN: 1408'de Rusca ailesinin şehirde signoria kurması (Treccani) ve 1402-1451 çekişmesi tek etikette milanoduka — kaynakta Rusca dönemi için ayrı devlet kimliği yok. Zincir Milano'dan devralındı (1395-05-11, 1535-11-01 Milano zinciri)"},
     {f:"1535-11-01",t:"1714-03-07",d:"ispanya",enklav:true,kaynak:"ENKLAV BEYANI (Milano emsali, KUTU-H7-1015): İspanya tacının Fransa ötesindeki Lombardiya mülkü · zincir Milano'dan devralındı; Treccani «Como» 1535'i anmıyor, dönem başı bu kaynakla doğrulanmadı"},
     {f:"1714-03-07",t:"1859-06-04",d:"avusturya",kaynak:"Zincir Milano'dan devralındı (Rastatt 1714). Treccani «Como»: «nel 1859 venne conquistata dalle truppe di Garibaldi agli Austriaci e riunita poi al regno d'Italia» — Como'nun kendi günü kaynakta YIL; kırılma günü Milano'dan: gün komşudan"},
     {f:"1859-06-04",t:"1861-03-17",d:"sardinya",kaynak:"Zincir Milano'dan devralındı; Treccani «Como» 1859"},
     {f:"1861-03-17",t:"1946-06-18",d:"italya",kaynak:"Zincir Milano'dan devralındı; Treccani «Como»: «riunita poi al regno d'Italia»"},
     {f:"1946-06-18",t:"2000-12-31",d:"italya-cumhuriyeti",kaynak:"Britannica: Italy; referandum 2 Haziran 1946, cumhuriyet 18 Haziran 1946 (Milano emsali)"}],
  kaynak:"koordinat: GeoNames «Como» (45.8082, 9.0832) · künye como-komunu baskent Como · Valtellina/Chiavenna/Lugano düğümleri ZATEN bu künyeye bağlı (POSTIT-44); Como'nun kendisi noktasızdı" },
{ ad:"Meissen", tur:"sehir", lat:51.1616, lon:13.4737, g:1, k:0, d:[],
  s:[{f:"1000-01-01",t:"1123-01-01",d:"almanya",kaynak:"Mark Meißen Reich'in sınır markıydı: Sächsische Biografie (ISGV) «Konrad I. von Meißen»: «Nach dem Tod Heinrichs II. von Eilenburg 1123 … gab [Lothar] die Mark Meißen an Konrad» — mark kral/imparator tarafından verilen Reichslehen; Wettin öncesi marggraflar (Eilenburg) Reich vasalı. Künye saksonya f=1123"},
     {f:"1123-01-01",t:"1918-11-13",d:"saksonya",kesinlik:{f:"yil"},kaynak:"künye saksonya (başkent Meissen → Wittenberg → Dresden): SäBi «Konrad I. von Meißen» (1123, YIL) · SäBi Friedrich August III.: «Am 13.11.1918 verzichtete der König … auf den sächsischen Thron». BEYAN: 1485 Leipzig bölünmesinden sonra Meissen Albertin kolda; künye tek polity (Wettin) olarak tutulur"},
     {f:"1918-11-13",t:"1945-06-05",d:"almanya",kaynak:"künye saksonya t=1918-11-13 sonrası; Dresden emsali (almanya 1945-06-05'e dek, künye almanya t)"},
     {f:"1945-06-05",t:"1949-10-07",d:"almanya-muttefik-isgali",kaynak:"Britannica 'Allied occupation of Germany'; Office of the Historian — Sovyet işgal bölgesi (Dresden emsali)"},
     {f:"1949-10-07",t:"1990-10-03",d:"almanya-demokratik-cumhuriyeti",kaynak:"Britannica 'East Germany' (kuruluş 7 Ekim 1949, katılım 3 Ekim 1990) — Dresden emsali"},
     {f:"1990-10-03",t:"2000-12-31",d:"almanya-birlesik",kaynak:"Britannica 'German reunification' 1990-10-03"}],
  kaynak:"koordinat: GeoNames «Meissen» (51.16158, 13.47370; Albrechtsburg/Burgberg aynı yerleşimde) · künye saksonya baskent Meissen" },
{ ad:"Salzburg", tur:"sehir", lat:47.7994, lon:13.0440, g:1, k:0, d:[],
  s:[{f:"1000-01-01",t:"1803-02-25",d:"salzburg-prens-basepiskoposlugu",kaynak:"künye salzburg-prens-basepiskoposlugu (f=1000 PENCERE, t=1803-02-25 Reichsdeputationshauptschluss; baskent Salzburg) — künye ic_not_f"},
     {f:"1803-02-25",t:"1805-12-26",d:"almanya",kaynak:"Historisches Lexikon Bayerns «Salzburg, Erzstift: Territorium und Verwaltung»: fürsterzstift 1803 aufgehoben, Kurfürstentum Salzburg; Regent «Ferdinand von Österreich-Toskana (reg. als Kurfürst 1803-1805)». BEYAN: Kurfürstentum Reich üyesi (künye yok) → almanya; Habsburg-Toskana hanedanı ama Avusturya arazisi değil"},
     {f:"1805-12-26",t:"1809-10-14",d:"avusturya",kaynak:"HLB «Salzburg, Erzstift…»: «Ab 1805 … zum Kaisertum Österreich» · kırılma günü Pressburg 1805-12-26 (kronoloji_sinir_avrupa_orta; gün komşudan)"},
     {f:"1809-10-14",t:"1816-04-14",d:"almanya",kaynak:"HLB «Salzachkreis (1810-1816)»: «Nach dem österreichischen Verzicht auf Salzburg … im Frieden von Schönbrunn vom 14. Oktober 1809 … bekam Bayern mit dem Vertrag von Paris vom 28. Februar 1810 diese Gebiete»; HLB «Salzburg, Erzstift…»: «1810 von Bayern in Besitz genommen». BEYAN: 1809-10-14'te Fransa'ya feragat, Bavyera 1810 → bavyera=almanya tek etiket (Innsbruck 1805-1814 emsali); 1809-10/1810 Fransız yönetimi ayrı gösterilmedi"},
     {f:"1816-04-14",t:"1918-11-12",d:"avusturya",kaynak:"HLB «Salzachkreis (1810-1816)»: Münchner Vertrag 14. April 1816 — Bayern trat «das Innviertel … sowie das Fürstentum Salzburg» ab (Rupertiwinkel hariç). Karşılıklı fiilî teslim 1 Mayıs 1816 (kronoloji_sinir_avrupa_orta); gün sözleşme günü"},
     {f:"1918-11-12",t:"1938-03-13",d:"avusturya-cumhuriyet",kaynak:"Linz emsali (Yukarı Avusturya merkezi, aynı zincir)"},
     {f:"1938-03-13",t:"1945-04-27",d:"almanya",kaynak:"Linz emsali: Encyclopaedia Britannica ilgili ülke/tarih maddesi; Office of the Historian, Milestones"},
     {f:"1945-04-27",t:"2000-12-31",d:"avusturya-ikinci-cumhuriyet",kaynak:"Linz emsali: Encyclopaedia Britannica ilgili ülke/tarih maddesi; Office of the Historian, Milestones; Library of Congress Country Studies"}],
  kaynak:"koordinat: GeoNames «Salzburg» (47.7994, 13.0440) · künye salzburg-prens-basepiskoposlugu baskent Salzburg" },
];
