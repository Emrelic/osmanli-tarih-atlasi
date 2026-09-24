// =====================================================================
// A-AFRIKA-0078 — 1923'Ü BİTİRME KAMPANYASI, A KATMANI, AFRİKA KOLU
// (24 Eylül 2026 · koordinatör YILDIRIM BAYEZIT · şartname oturumlar/BITIR-1923-0078.md §3.2)
//
// AD ALANI (§7): data/yerlesimler_a78_afrika.js → window.YERLESIMLER_A78_AFRIKA
// 🔴 arac/girdi.py GIRDI_DOSYALARI'na ve index.html'e BAĞLI DEĞİL — koordinatör bağlar (§4).
//
// NİÇİN: 1923-09-01 ölçümü (0,5° kara ızgarası, en yakın canlı nokta ≤200 km):
//   Sahra 15–33K/17B–25D bloklarının ~20'si TAMAMEN noktasız (Moritanya kuzeyi, Rio de Oro,
//   Büyük Erg); Gambiya'da 11 hücrenin 7'si fransa'ya emiliyor (kolonide 2 nokta, ikisi ağızda).
//
// 🔴 kur: ÜST SINIRDIR (NOKTA-AFRIKA-0917 · Dingiray emsali): "bu tarihte ZATEN vardı ve
//   sahibi kaynakla belli". Kuruluş günü DEĞİL. Öncesindeki sömürge-öncesi zincir (Adrar
//   emirliği, Hassânîler, Merînîler…) kaynak YIL vermediği için YAZILMADI — uydurma
//   (D210) yerine boş bıraktım; FAZ 2 (geriye tarama) borcudur, her kaydın not:unda adıyla.
// 🔴 Tarihler: kaynak yalnız YIL veriyorsa YYYY-01-01 + kesinlik:"yil"; ay/gün metinde.
// =====================================================================

window.YERLESIMLER_A78_AFRIKA = [

// ── RİO DE ORO / BATI SAHRA KIYISI — İspanya'nın 1923'teki üç fiilî noktası ──────────────
{ ad:"Villa Cisneros (Dahla)", tur:"liman", lat:23.694, lon:-15.943, g:0, k:0, kur:"1884-01-01",
  neden:"A-AFRIKA-0078: Rio de Oro 1923'te noktasızdı (en yakın nokta Butilimit 698 km); ne_10m SAH (Batı Sahra) 137 hücrenin %88'i BOŞ. İspanya'nın bölgedeki ilk ve 1923'e kadar süren merkezi.",
  not:"kur ÜST SINIR: Blanco Vázquez 'Kasım 1884' (Bonelli seferi, Berlin Konferansı'yla eşzamanlı) — ay metinde, alan YIL. TDV bati-sahra [44] bağımsız teyit: Batı Sahrâlılar 1884, 1887, 1894'te 'Dahle… İspanyol merkezlerine' saldırdı (1884'te merkez VAR). Sömürge öncesi yerleşim YOK (İspanyol kuruluşu). 1884→1923 kesintisiz İspanyol: aynı makale 'presencia colonial… únicamente se mantuvo… en tres puestos de la costa: Villa Cisneros, Cabo Juby y La Agüera'.",
  kaynak:"L. Blanco Vázquez, 'Tras los pasos del coronel Bens. Los restos de la presencia colonial española en la costa del Sáhara: Villa Cisneros, Cabo Juby y La Agüera', Anejos de Nailos 4 (2018), 143-163 (PDF gövdesi okundu) · TDV 'Batı Sahrâ' (200, gövde okundu, cümle 44) · koordinat OSM Nominatim city=Dakhla (boundary, 23.6941,-15.9431)",
  s:[{f:"1884-01-01",t:"1923-10-29",d:"ispanya",kesinlik:"yil"}] },

{ ad:"La Agüera (La Güera)", tur:"liman", lat:20.833, lon:-17.089, g:0, k:0, kur:"1920-01-01",
  neden:"A-AFRIKA-0078: Cabo Blanco yarımadasının batı yarısı (1900 Fransız-İspanyol paylaşımı) 1923'te İspanyol; en yakın nokta Butilimit 443 km.",
  not:"kur ÜST SINIR: Blanco Vázquez — 1884 Bonelli kulübesi ('Medina Gatell') 'se abandonó casi de inmediato… El lugar permaneció abandonado hasta finales de 1920', Bens 'ocupó oficialmente para España la mitad oeste de Cabo Blanco… factoría pesquera y un destacamento militar permanente… La Agüera'. 'Finales de 1920' ⇒ YIL; 1920-01-01 kuruluştan ~11 ay ÖNCEYE düşer (atlas YYYY-01-01 kuralı, D210) — fark bildirildi. Port-Étienne'e ~9 km: 3 km kuralı geçer, AMA iki nokta aynı yarımadanın iki yakasında ve petek sınırı 1900 paylaşım hattına yakın olmalı — sınır kolu E hattı yazarsa yaslama onu düzeltir.",
  kaynak:"L. Blanco Vázquez, Anejos de Nailos 4 (2018), 143-163 (PDF okundu) · koordinat OSM Nominatim 'Lagouira' (20.8333,-17.0891)",
  s:[{f:"1920-01-01",t:"1923-10-29",d:"ispanya",kesinlik:"yil"}] },

{ ad:"Cabo Juby (Tarfaya)", tur:"liman", lat:27.940, lon:-12.925, g:0, k:0, kur:"1916-01-01",
  neden:"A-AFRIKA-0078: Dra'nın güneyi, 27°40' paralelinin kuzeyi — 1912 İspanyol-Fransız antlaşmasıyla İspanyol Fas himayesinin GÜNEY BÖLGESİ; en yakın nokta Ğulmîm 304 km.",
  not:"kur ÜST SINIR: Blanco Vázquez — 1912 antlaşmasından sonra 'habrían de pasar cuatro años hasta que el gobierno español se decidiese a ocupar Cabo Juby, siendo el encargado de hacerlo en 1916… Bens, por medio de un desembarco pacífico'. YIL (ay/gün kaynakta yok; 1914 girişimi iptal edilmiş). ÖNCESİ YAZILMADI: aynı makale Mackenzie'nin İngiliz ticarethanesini (1879 civarı, 1895 Fas'a satış) anar — bir ticaret istasyonunun egemenlik sayılıp sayılmayacağı TAHRİR ÖLÇÜTÜ sorusu, FAZ 2 borcu. ⚠️ Kimlik `ispanya`: 'İspanyol Fas himayesi' ayrı künye DEĞİL (devletler.js tarandı: yok).",
  kaynak:"L. Blanco Vázquez, Anejos de Nailos 4 (2018), 143-163 (PDF okundu) · koordinat OSM Nominatim 'Tarfaya' (27.9401,-12.9250)",
  s:[{f:"1916-01-01",t:"1923-10-29",d:"ispanya",kesinlik:"yil"}] },

// ── MORİTANYA KUZEYİ — Fransız ────────────────────────────────────────────────────────
{ ad:"Port-Étienne (Nouadhibou)", tur:"liman", lat:20.913, lon:-17.050, g:0, k:0, kur:"1904-01-01",
  neden:"A-AFRIKA-0078: Cabo Blanco yarımadasının doğu (Fransız) yarısı; en yakın nokta Butilimit 449 km. ne_10m MRT 1350 hücrenin %45'i BOŞ.",
  not:"kur ÜST SINIR: BnF yetki kaydı 'Port-Etienne (Dakhlet Nouadhibou, Mauritanie; 1904-1960)' — adın geçerlilik aralığı 1904'ten. Yaygın '1907 kuruluş' (15 Ağustos 1907 Roume adlandırması) YALNIZ kırmızı çizgideki sitelerde okundu ⇒ KULLANILMADI; iki tarih ÇELİŞMİYOR, 1904 daha erken ÜST SINIR. Blanco Vázquez yarımadanın 1900 paylaşımını teyit eder ('para España la mitad occidental y para Francia la oriental'). Sömürge öncesi yerleşim YOK.",
  kaynak:"BnF data.bnf.fr/16551871 (yetki kaydı, okundu) · L. Blanco Vázquez, Anejos de Nailos 4 (2018) (PDF okundu) · koordinat OSM Nominatim 'Nouadhibou' (20.9127,-17.0503)",
  s:[{f:"1904-01-01",t:"1923-10-29",d:"fransa-cumhuriyet",kesinlik:"yil"}] },

{ ad:"Atâr (Adrar)", tur:"sehir", lat:20.518, lon:-13.054, g:0, k:0, kur:"1909-01-01",
  neden:"A-AFRIKA-0078: Adrar emirliğinin siyasî merkezi; en yakın nokta Râşid (Tagant) 242 km — Adrar platosu noktasızdı.",
  not:"kur ÜST SINIR: Bonte 1984 — 'L'émirat de l'Adrar après la conquête coloniale… (1909-1932)'; fetih 1909, ardından Fransız HİMAYESİ altında emirlik sürüyor. TAHRİR ÖLÇÜTÜ: Adrar 'cercle' olarak Fransız idaresine bağlandı (TDV sinkit [57]: 'Fransa sömürge idaresi… Adrar bölgesinin merkezi olarak Atâr'ı belirlemişti') ⇒ s:, isg: DEĞİL. ⚠️ Bonte'nin epigrafı 'le 22 janvier 1908, peu après la prise d'Atar' der — başlığındaki 1909 ile ÇELİŞİR (dizgi/OCR hatası olabilir); başlık + gövde 1909 ⇒ 1909 yazıldı, çelişki bildirildi. Yaygın '9 Ocak 1909' günü yalnız ikincil/kırmızı çizgi sitelerde okundu (Gouraud'nun Gallica günlüğü CAPTCHA arkasında) ⇒ YIL. ÖNCESİ (Adrar emirliği → moritanya-emirlikleri) YIL vermeyen kaynaklar yüzünden YAZILMADI — FAZ 2.",
  kaynak:"P. Bonte, 'L'émirat de l'Adrar après la conquête coloniale et la dissidence de l'émir Sidi Ahmed (1909-1932)', Journal des Africanistes 54/2 (1984), 5-30, persee.fr/doc/jafr_0399-0346_1984_num_54_2_2066 (ilk sayfa okundu) · TDV 'Şinkīt' (A. Kavas, 2010; gövde okundu, cümle 57-59) · koordinat OSM Nominatim 'Atar' (20.5182,-13.0544)",
  s:[{f:"1909-01-01",t:"1923-10-29",d:"fransa-cumhuriyet",kesinlik:"yil"}] },

{ ad:"Şinkît (Chinguetti)", tur:"sehir", lat:20.463, lon:-12.366, g:0, k:0, kur:"1909-01-01",
  neden:"A-AFRIKA-0078: TDV'nin 'Bilâdüşinkît'in merkezi' dediği şehir, Adrar platosu; en yakın nokta Râşid (Tagant) 198 km. Atâr'a ~73 km (3 km kuralı geçer).",
  not:"kur ÜST SINIR — şehir ÇOK daha eski: TDV 'ilk defa 160 (776) veya 165 (781)… ikinci defa 660 (1262)… kurulduğu da söylenmektedir'; 'XIII. yüzyılın ortalarından XV. yüzyılın ortalarına kadar Merînîler'in yönetimi altında', sonra Hassânîler, 'daha ziyade Adrar emîrlerinin hâkimiyetinde'. Bu zincirin HİÇBİR geçişine kaynak YIL vermiyor ⇒ D210 gereği yazılmadı, FAZ 2 borcu (1281-1909). Fransız dilimi: Adrar'ın fethi 1909 (Bonte). ⚠️ TDV çelişkisi: '1907'de Şinkît merkez yapıldı' der — Fransızlar Adrar'a 1909'da girdi (Bonte); 1907 fetihten ÖNCE. TDV §4 gereği birincil, AMA cümle bir idarî planı mı fiilî merkezi mi tarihliyor okunamıyor; fetih tarihi olarak Bonte alındı, çelişki bildirildi.",
  kaynak:"TDV 'Şinkīt' (A. Kavas, 2010; 200, gövde okundu, cümle 6-59) · P. Bonte, Journal des Africanistes 54/2 (1984) persee.fr (ilk sayfa okundu) · koordinat OSM Nominatim 'Chinguetti' (20.4634,-12.3665)",
  s:[{f:"1909-01-01",t:"1923-10-29",d:"fransa-cumhuriyet",kesinlik:"yil"}] },

// ── BÜYÜK ERG — Cezayir Sahrası ──────────────────────────────────────────────────────
{ ad:"el-Menîa (El Goléa)", tur:"kale", lat:30.584, lon:2.883, g:0, k:0, kur:"1900-01-01",
  neden:"A-AFRIKA-0078: Doğu ve Batı Büyük Erg arası vaha-ksar ('Sahra'nın kilitleri'nden); en yakın nokta Gardâye 226 km, Vargla 278 km — 29-31K/1-7D blokları noktasızdı.",
  not:"kur ÜST SINIR: Annales de Géographie 1900 (Ocak 1900 In Salah harekâtı) — 'Aussitôt la nouvelle connue, 200 hommes furent envoyés d'El Goléa' ⇒ Ocak 1900'de El Goléa'da Fransız garnizonu VAR; aynı metin 'Fort Mac-Mahon'u 'avant-postes extrêmes de notre occupation' sayar. Yaygın '1891 işgali' akademik gövdeden okunamadı (Cairn 'El Goléa, emblème du Sahara' 403) ⇒ güvenli üst sınır 1900 alındı; 1891 doğrulanırsa kur geri çekilir. Ksar çok daha eski (BnF Essentiels: 1888-89 Deporter fotoğrafı, 'ancien ksar') — öncesi FAZ 2.",
  kaynak:"'La France dans le Sahara. L'occupation d'In Salah. La mission Foureau-Lamy', Annales de Géographie IX/44 (1900), persee.fr/doc/geo_0003-4010_1900_num_9_44_6223 (gövde okundu, cümle 20 ve 36) · BnF Essentiels 'Le Ksar d'El-Goléa' (okundu) · koordinat OSM Nominatim 'El Ménia' (30.5837,2.8831)",
  s:[{f:"1900-01-01",t:"1923-10-29",d:"fransa-cumhuriyet",kesinlik:"yil"}] },

// ── GAMBİYA — BİLEREK NOKTA YOK ─────────────────────────────────────────────────────
// Georgetown (MacCarthy adası, Britannica: 'founded in 1823 by Captain Alexander Grant')
// yazıldı, ölçüldü ve GERİ ÇEKİLDİ. Yaklaşık ölçüm (izotrop en yakın nokta + E/F hattının
// 100 km yaslama şeridi, d_katman.js _D_YASLA_KM), 12,3–14,3K · 17–13,3B, 0,05°:
//   yaslamasız: GMB doğru %42 → %94 AMA SEN doğru %65 → %24 (Georgetown'un peteği Senegal'e taşar)
//   yaslamalı : GMB zaten %100 (d1923-senegal-gambiya E hattı 207 hücreyi düzeltiyor);
//               Georgetown eklenince GNB doğru %100 → %51, GIN %100 → %84 — Gine-Bissau/Gine
//               ile Gambiya arasında E hattı YOK, taşmayı düzelten bir şey yok.
// ⇒ Yaslama çalışıyorsa nokta ZARARLI, çalışmıyorsa Senegal/Kazamans'a karşı-ağırlık gerekir
//   (Ziguinchor · Sedhiou · Kolda · Tambakunda — bölgede bugün HİÇ nokta yok) ve o da
//   Gine-Bissau'yu bozar (2 nokta: Cacheu, Bissau). Hüküm tarayıcıda 1923-09-01 görüntüsüyle.

];
