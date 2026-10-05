// ======================================================================
// AVRUPA-SINIR-0077 — Avusturya-Macaristan ardıl dilimlerinde NOKTASIZ toprak
// şartname: oturumlar/AVRUPA-SINIR-0077.md · koordinatör hükmü M-5219 (A) · 27 Eylül 2026
// AD ALANI (§7): data/yerlesimler_p77_avrupa.js → window.YERLESIMLER_P77_AVRUPA
// BAĞLAMA (koordinatör): arac/girdi_listesi.py GIRDI_DOSYALARI + index.html satırı
//   — bu dosyayı yazan oturum BAĞLAMADI (motor tuzu, CLAUDE.md §9.1).
//
// NİÇİN (ölçüm: koşu 15 gövdesi, 1923-09-01, nokta-içinde sorgusu):
//   Maribor → avusturya-cumhuriyet (olması gereken yugoslavya; 40 km'de nokta yok,
//     Graz peteği emiyor) · Eisenstadt → macaristan-naiplik (olması gereken
//     avusturya-cumhuriyet 1921-11-13'ten; Burgenland'da nokta yok, Sopron emiyor).
//   Rapor: denetim/AVRUPA-SINIR-0077.md
//
// ZİNCİR: 1918 sonrası geçişler KAYNAKTAN. 1526-08-29 kırılması bir el değiştirme
// DEĞİL, künye sınırıdır (`habsburg` künyesi harita:"avusturya" 1526-08-29'da
// başlar; öncesi Habsburg babalık toprakları `almanya` = Kutsal Roma).
// 1918-11-11 = `habsburg` künyesinin t: günü DEVRALINDI (kaynak günü farklıysa
// kaydın kaynak alanında yazılı).
// 🔴 YAZILMAYANLAR: Oberwart, Güssing (güney Burgenland devir günü yalnız Vikipedi
// türevlerinde bulundu — §4 gereği nokta yazılmadı) · Rijeka (Rapallo md. 4 Fiume
// Serbest Devleti — künyesi YOK, açılmadı) · Salzburg (koşu 15'te zaten doğru boyalı).
// ======================================================================

window.YERLESIMLER_P77_AVRUPA = [

{ ad:"Maribor (Marburg)", tur:"sehir", lat:46.5558, lon:15.6459, g:2, k:0,
  s:[{f:"1281-01-01",t:"1526-08-29",d:"almanya"},{f:"1526-08-29",t:"1918-11-11",d:"avusturya"},{f:"1918-11-11",t:"1923-10-29",d:"yugoslavya"}],
  kaynak:"Koordinat: GeoNames 3195506 (46.5558, 15.6459). 1276/1282: AEIOU Österreich-Lexikon 'Steiermark/Geschichte' — 'der Böhmenkönig musste 1276 Österreich und die Steiermark an den neuen deutschen König Rudolf von Habsburg übergeben, der 1282 seine Söhne … damit belehnte' (⇒ 1281'de Kutsal Roma/Habsburg = almanya). 1918: gov.si (Slovenya Hükûmeti, 1 Haz 2019) — 'November 1, 1918, Rudolf Maister … declared the city of Maribor a Yugoslav territory' · hukukî devir AEIOU aynı madde: 'Durch den Friedensvertrag von Saint-Germain (1919) kam die Untersteiermark … mit den Städten Marburg an der Drau … an das Königreich der Serben, Kroaten und Slowenen'. 🔴 GÜN FARKI BİLDİRİLİR: kaynak 1918-11-01 diyor; alan 1918-11-11 (habsburg künyesi t:) — 1-11 Kasım arası için künye YOK (SHS Devleti künyesi yok). `yugoslavya` künyesi 1918-12-01'de başlar ⇒ 20 günlük künye aşımı, Ljubljana/Zagreb kayıtlarıyla aynı sınıf (D205 ②: aynı polity — SHS Devleti → Krallık; künye genişletme adayı, koordinatöre)." },

{ ad:"Eisenstadt (Kismarton)", tur:"sehir", lat:47.8457, lon:16.5233, g:2, k:0,
  s:[{f:"1281-01-01",t:"1526-08-29",d:"macaristan"},{f:"1526-08-29",t:"1918-11-11",d:"macaristan-habsburg",kaynak:"TDV macaristan (Géza Dávid): '1867'de iki ülke arasında bir uzlaşma meydana geldi. Avusturya-Macaristan monarşisi ortaya çıktı'; Trianon (4 Haziran 1920) Macaristan'ın kaybı, arazi 'Hırvatistan hariç' sayılır. Nokta Macar tacı (Transleithania) toprağı — iç taksimat için akademik alıntı: bulunamadı (denetim/ONCE1281-MACAR-TAC-1004.md). Önceki yazım `avusturya` (Habsburg Avusturya) idi."},{f:"1918-11-11",t:"1920-06-04",d:"macaristan-naiplik",kaynak:"F8 (Emre, 5 Eki 2026): de jure devir Trianon imza gününde — TDV birinci-dunya-savasi: '4 Haziran 1920'de Macaristan ile Trianon … antlaşmaları imzalandı' · Burgenland Trianon md. 27 sınır hattıyla devredildi (FOROST 19200604-1; Eisenstadt/Kismarton adı metinde GEÇMEZ)"},{f:"1920-06-04",t:"1923-10-29",d:"avusturya-cumhuriyet",kaynak:"F8: de jure Trianon (1920-06-04) — fiilî devir 1921-11-13 aşağıdaki isg: ile"}],
  isg:[{f:"1920-06-04",t:"1921-11-13",d:"macaristan-naiplik",kaynak:"F8 ters vaka: hukukî devirden sonra fiilî Macar tutuşu (Freischärler, 28 Ağustos 1921 Landnahme denemesi başarısız) · bitiş BÖLGE günü: milak.at 'Als am 13. November 1921 mit Zustimmung der Alliierten Kommission das Bundesheer in das Burgenland einrückte' · BMI Öffentliche Sicherheit 7-8/2021 (Schlag 2001): 'Die Interalliierte Generalkommission genehmigte am 11. November 1921 offiziell den Einmarsch … Zwei Tage später wurde mit der neuerlichen Landnahme begonnen' · Eisenstadt'a özgü gün: bulunamadı"}],
  kaynak:"Koordinat: GeoNames 2780190 (47.8457, 16.5233). Macar tacı toprağı: AEIOU 'Burgenland/Geschichte'. 1921: AEIOU aynı madde — 'Im Friedensvertrag von Saint-Germain (1919) wurde das Land … Österreich zugesprochen, das es aber nach bewaffnetem Widerstand ungarischer Freischärler erst 1921 mit Hilfe von Gendarmerie und Heer übernehmen konnte' · GÜN: Theresianische Militärakademie (milak.at, 'Das Gefecht von Kirchschlag') — 'Als am 13. November 1921 mit Zustimmung der Alliierten Kommission das Bundesheer in das Burgenland einrückte'. 🔴 Gün BÖLGE günüdür (Bundesheer'in Burgenland'a girişi); Eisenstadt'a varış günü şehir taneciğinde ayrıca doğrulanmadı. 🔴 BİLİNEN EKSİK: AEIOU 'In den Friedensverträgen von Ödenburg (1463) und Pressburg (1491) kamen einige westungarische Herrschaften an die Habsburger … erst 1647 wurden diese Gebiete wieder an Ungarn reinkorporiert' — Eisenstadt'ın bunlardan biri olduğu şehir taneciğinde okunmadı ⇒ 1463/1491–1526 almanya penceresi YAZILMADI. 1918-11-11 habsburg künyesi t: günü; macaristan-naiplik künyesi 1918-11-16'da başlar ⇒ 5 günlük aşım (Sopron kaydıyla aynı sınıf), bildirildi." }

];
