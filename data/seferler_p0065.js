// -*- coding: utf-8 -*-
// SEFERLER_P0065 — SEFER-1768 oturumu, 17 Eylül 2026 · DALGA-0065 (D1-TURKIYE · D2-KOMSU) + DALGA-0066 (H-0001 · H-0002)
// Konu: 1768-1774 Osmanlı-Rus Savaşı'nda Rus ordularının geldiği yollar.
//
// OKUYUCU: js/app.js seferKayitlariniTopla() — /^SEFERLER(_[A-Za-z0-9_]+)?$/ desenine uyan window anahtarlarını toplar.
//   ⚠️ Dosya index.html'de <script> satırı ister; o satır UI'nindir (bu dosya onu YAZMAZ).
// ŞEMA: data/savaslar.js SEFERLER ile aynı (ad · tur · sonuc · taraf · renk · f · t · yol) + PAKET-RUS geleneği
//   (id · tarih_hassasiyet · kaynak · kesinlik) + 🆕 devlet: harekâtı yapan devletin kimliği (renkler.py anahtarı).
//   sonuc Osmanlı gözünden (dosya geleneği).
// RENK: "sefer okları devlet rengiyle" kuralı (paket 0065 H-0010). renk = rusya dolgusunun (#4f7d4f) aynı tonunun
//   koyusu #276727 (HSL 120°, %45, %28) — dolgu üstünde okunabilsin diye aynı renk değil aynı ton. app.js bugün
//   `devlet` alanını OKUMUYOR; kural app.js'e girince renk oradan türetilebilir, `renk` o zaman silinebilir.
// TARİHLER GREGORYEN. Rus kaynaklarının Jülyen günleri +11 ile çevrildi (18. yy · D110).
//   "AY" damgalı günler ayın 1'ine KODLANMIŞTIR — gün kaynakta YOK. "ALT SINIR" = Jülyen ayın ilk gününün Gregoryen karşılığı.
// İSTASYONLAR yalnız kaynakta ADI GEÇEN yerler; aradaki yol çizilmedi (iki istasyon arası düz hat).
// KOORDİNAT: GeoNames allCountries (yerel kopya) ve OpenStreetMap — atlas yerleşim noktası KULLANILMADI.
//   GeoNames: Kyiv 703448 · Kropyvnytskyi (Yelisavetgrad) 705812 · Bender 618577 · Perekop 697729 · Henichesk 708878 ·
//   Arabat oku 713236 · Feodosiya (Kefe) 709161 · Kerch 706524 · Taman 484670 · Molochna ırmağı 700845
//   OSM: Starokostiantyniv rel/3353648 · Minkivtsi node/337583231 (data/savaslar.js'teki değer) ·
//   Arabat kalesi way/266004143 · Yenikale kalesi way/173200689
//
// KAYNAKLAR
//   [ESBE-TVR] ЭСБЕ «Турецкие войны России», «Ход военных действий» 2) «Первая Турецкая война Екатерины II (1768—1774)»
//              — ru.wikisource.org/wiki/ЭСБЕ/Турецкие_войны_России (vikiteks ham metni okundu)
//   [VE-PAN]   Военная энциклопедия (Сытин), «Панин, Петр Иванович, граф» — ru.wikisource.org/wiki/ВЭ/ВТ/Панин,_Петр_Иванович,_граф
//   [VE-PER]   Военная энциклопедия, «Перекоп» — ru.wikisource.org/wiki/ВЭ/ВТ/Перекоп
//              ⚠️ maddede "В 1777 г." yazıyor; bağlam 1771'i gösteriyor (kumandan Dolgorukov, "Миних'in ilk
//              denemesinden 35 yıl sonra" = 1736+35). Dizgi hatası sayıldı.
//   [VE-ARA]   Военная энциклопедия, «Арабатская коса» — ru.wikisource.org/wiki/ВЭ/ВТ/Арабатская_коса
//   [RBS-DOL]  Русский биографический словарь, «Долгоруков-Крымский, Василий Михайлович»
//   [RBS-SCH]  Русский биографический словарь, «Щербатов, Федор Федорович»
//   [ESBE-DOL] ЭСБЕ «Долгоруковы» 20) Василий Михайлович — ⚠️ Orkapı'ya "4 июля", Kefe'ye "29 июля" diyor;
//              VE-PER ve RBS-DOL Orkapı'yı 14 Haziran (Jülyen) veriyor. Bu maddenin günleri KULLANILMADI.
//   [KASH]     Kashirin V. B., «Днестровский поход генерала князя А. М. Голицына в 1769 г.», Славяноведение 2024/1, с. 5-30
//   TDV: hotin · kamanice · kirim · mustafa-iii · bucak
//
// YAZILMAYANLAR (bulunamadı / kaynak adsız)
//   · Dolgorukov ordusunun toplanma yeri "речка Маячка" (RBS-DOL, 25 Mayıs J) — GeoNames'te bu adda 3 yerleşim + 2 ırmak
//     var, kaynak hangisi olduğunu söylemiyor ⇒ ok Orkapı'dan başlar
//   · Berg'in 1770 ilk yürüyüşü "с границы Украйны" (VE-PER) — çıkış noktası adsız
//   · Panin'in Vıs ırmağındaki toplanma yeri (VE-PAN "у Выси") ve Kodıma ırmağındaki konağı (ESBE-TVR "на р. Кодыме")
//     — ırmak adı var, nokta yok; ok Yelisavetgrad'dan Bender'e düz çizildi
//   · Kefe'nin düşüş günü — ESBE-TVR yalnız "вслед за тем"; TDV mustafa-iii "Temmuz 1771" (AY kullanıldı)
//   · Gözleve (Kozlov) kolunun güzergâhı ve günü — ESBE-TVR ve VE yalnız "1771"
//   · Zaporojye Kazaklarının Kırım seferindeki AYRI rolü — ESBE «Запорожская Сечь» ve VE «Запорожская Сечь» yalnız
//     1769-74 savaşına Rus tarafında katıldıklarını söylüyor; ayrı bir kol ya da güzergâh bulunamadı
window.SEFERLER_P0065 = [
{ id:"p0065-golitsin-toplanma-1769", ad:"Golitsın ordusunun Kiev'den Podolya'ya yürüyüşü (1769)", tur:"sefer", sonuc:"belirsiz", taraf:"dusman", devlet:"rusya", renk:"#276727",
  f:"1769-04-01", t:"1769-04-25",
  tarih_hassasiyet:"f: AY (ESBE-TVR 'В конце марта' Jülyen ⇒ Gregoryen Nisan başı — gün yok) · t: GÜN (Dinyester harekâtının başı, 14 Nisan Jülyen; savaslar.js rus-golitsin-hotin-1769 ile aynı uç)",
  kaynak:"ESBE-TVR: \"главная, под начальством кн. Голицына (ок. 65 тыс.), собиралась у Киева\" · \"В конце марта войска главной армия стали сосредоточиваться у Старо-Константинова\" · KASH: \"главные силы 1-й армии А. М. Голицына сосредотачивались в лагере у деревень Минковцы и Антоновка в 40 км к северо-востоку от Каменца-Подольского\" · kamanice (TDV): \"Karlofça Antlaşması'ndan sonra Kamaniçe 1793'e kadar Polonya-Litvanya ittifakında kaldı\" — yol baştan sona Lehistan toprağından geçiyor",
  kesinlik:"Kiev toplanma noktası şehir merkezi; Kiev'den çıkış günü bulunamadı",
  yol:[[30.5238,50.45466],[27.20879,49.75616],[27.106,48.853]] },
{ id:"p0065-panin-bender-1770", ad:"Panin ordusunun Yelisavetgrad'dan Yedisan bozkırı üzerinden Bender'e yürüyüşü (1770)", tur:"sefer", sonuc:"yenilgi", taraf:"dusman", devlet:"rusya", renk:"#276727",
  f:"1770-03-01", t:"1770-09-27",
  tarih_hassasiyet:"f: AY (VE-PAN 'в мрт. 1770 г. выступает' Jülyen; Gregoryen 12 Mart–11 Nisan arası — gün yok) · t: GÜN (Bender'in alınışı, 16 Eylül Jülyen; ESBE-TVR) — ÇELİŞKİ: VE-PAN hücumu 15 Eylül Jülyen veriyor",
  kaynak:"VE-PAN: \"Имея в виду дальн. поход армии из Елисаветград. провинции к Бендерам через степи, со множеством опас. переправ\" · \"в мрт. 1770 г. выступает с армией к Бендерам, в мае сосредоточивает ее у Выси\" · \"Только в сер. июля наша армия подошла к Бендерам\" · ESBE-TVR: \"главные силы 2-й армии в начале июня перешли через Буг и расположились на р. Кодыме\" · \"16 сентября он овладел Бендерами\" · ЭСБЕ «Кодыма»: \"Некогда К. вместе с рекой Мокрым Ягорлыком составляли северную границу пустынной Очаковской степи\" · ЭСБЕ «Балта»: Kodıma'nın öbür yakasındaki Balta \"принадлежала Турции\" · kirim (TDV): \"Kırım hanına ait Balta şehri\"",
  kesinlik:"iki uç arası düz hat; kaynak Vıs ve Kodıma ırmaklarını ve Bug geçişini adlandırıyor ama nokta vermiyor. Yelisavetgrad noktası 'Yelisavetgrad ili'nin temsilî noktasıdır (kale şehri)",
  yol:[[32.26618,48.50834],[29.47671,46.83158]] },
{ id:"p0065-berg-orkapi-1770", ad:"Berg kolunun Moloçna'dan Orkapı önüne yürüyüşü (1770)", tur:"sefer", sonuc:"zafer", taraf:"dusman", devlet:"rusya", renk:"#276727",
  f:"1770-09-19", t:"1770-10-04",
  tarih_hassasiyet:"f: GÜN (Moloçna'dan çıkış, 8 Eylül Jülyen) · t: GÜN (Orkapı'ya bir konak mesafede konaklama, 23 Eylül Jülyen); 27 Eylül Jülyen'de (8 Ekim) Moloçna'ya geri döndü",
  kaynak:"VE-PER: \"Панин, следуя весной 1770 г. с гл. силами 2-ой армии к Бендерам, приказал ген.-пор-ку Бергу с его к-сом (ок. 4 т.) выдвинуться с границы Украйны к П. для пресечения сообщений между Крымом и Кинбурном\" · \"получив же вторичное приказание Панина идти к П., выступил 8 снт. и 23-го расположился в переходе от него, на Кинбурнской дороге\" · \"Бескормица и на этот раз вынудила Берга отступить, и 27-го он двинулся обратно к Молочн. Водам\" · ESBE-TVR (1769 için): \"экспедиция ген. Берга в Крым не имела успеха: трава в степи выгорела\"",
  kesinlik:"Moloçna noktası ırmağın GeoNames noktasıdır (kaynak 'Молочные Воды' diyor, konak yeri adsız); varış Orkapı'nın bir konak berisindedir, ok Orkapı'da biter. sonuc 'zafer' = Kırım/Osmanlı tarafı hattı tuttu, Rus kolu çekildi",
  yol:[[35.30735,46.70167],[33.69283,46.16056]] },
{ id:"p0065-dolgorukov-kirim-1771", ad:"Dolgorukov ordusunun Orkapı'dan Kefe'ye yürüyüşü — Kırım'ın istilâsı (1771)", tur:"sefer", sonuc:"yenilgi", taraf:"dusman", devlet:"rusya", renk:"#276727",
  f:"1771-06-26", t:"1771-07-01",
  tarih_hassasiyet:"f: GÜN (Orkapı garnizonunun teslimi, 15 Haziran Jülyen; hat 14 Haziran Jülyen'de alındı, ordu 17 Haziran Jülyen'de Kırım'a yürüdü) · t: AY (TDV mustafa-iii 'Temmuz 1771' — Kefe'nin günü bulunamadı)",
  kaynak:"RBS-DOL: \"25 мая его армия собралась на речке Маячке и 14-го июня овладела укрепленною линиею у Перекопа\" · \"при Кафе решительную победу над 95 тыс. татаро-турецкою армиею и одним этим успехом принудил к сдаче городов: Арабат, Козлов, Еникале, Керчь и Балаклаву\" · VE-PER: \"12 июня она подошла к П.\" · \"15 июня г-зон крепостцы сдался. Устроив в П. магазины, Долгоруков 17-го двинулся в Крым\" · ESBE-TVR: \"в конце июня овладел Перекопом, а вслед за тем русские войска заняли Кафу (Феодосия) и Козлов (Евпатория)\" · kirim (TDV): \"1771'de Prens Dolgorukov idaresinde Kırım yarımadasını istilâ ettiler\" · mustafa-iii (TDV): \"Rus kuvvetlerinin Memleketeyn'i ve Kırım'ı istilâ etmesi (Temmuz 1771)\" — ÇELİŞKİ: ESBE-DOL Orkapı'yı \"4 июля\", Kefe'yi \"29 июля\" veriyor (kullanılmadı)",
  kesinlik:"iki uç arası düz hat; Orkapı-Kefe arasında kaynakta ara durak yok",
  yol:[[33.69283,46.16056],[35.38153,45.03199]] },
{ id:"p0065-scherbatov-arabat-1771", ad:"Şçerbatov kolunun Geniçesk'ten Arabat okuyla Arabat kalesine yürüyüşü (1771)", tur:"sefer", sonuc:"yenilgi", taraf:"dusman", devlet:"rusya", renk:"#276727",
  f:"1771-06-24", t:"1771-06-29",
  tarih_hassasiyet:"f: GÜN (Geniçesk boğazının köprüyle geçilişi, 13 Haziran Jülyen; VE-ARA) · t: GÜN (Arabat'ın alınışı, 18 Haziran Jülyen; RBS-SCH — VE-ARA varışı 17 Haziran akşamı veriyor)",
  kaynak:"VE-ARA: \"В 1771 г., в турецкую войну, кн. Щербатову было приказано вторгнуться в Крым через А. косу\" · \"13 июня кн. Щербатов переправился через Генический пролив по мосту (50 саж. дл.) из лодок, доставленных флотом, а на другой день направился вдоль косы к креп. А. Пройдя 100 вер. и сделав в последний день (17 июня) переход в 44 вер., он подошел к А. вечером\" · RBS-SCH: \"следуя скорым маршем через Ганишскую косу, внезапно приблизился к крепости и 18 июня занял ее\" · ESBE-TVR: \"отряд кн. Щербатова, наступавший от Геническа по Арабатской косе, и Азовская флотилия, предводимая Сенявиным\"",
  kesinlik:"orta nokta Arabat okunun GeoNames noktası (kaynakta 'вдоль косы'); Arabat kalesi OSM way/266004143",
  yol:[[34.80861,46.16824],[35.00992,45.69587],[35.47869,45.29564]] },
{ id:"p0065-scherbatov-kerc-1771", ad:"Şçerbatov kolunun Arabat'tan Kerç, Yenikale ve Taman'a yürüyüşü (1771)", tur:"sefer", sonuc:"yenilgi", taraf:"dusman", devlet:"rusya", renk:"#276727",
  f:"1771-06-29", t:"1771-07-12",
  tarih_hassasiyet:"f: BAĞLI UÇ (Arabat'ın alınışı; çıkış günü bulunamadı) · t: ALT SINIR (RBS-SCH 'В июле' Jülyen ⇒ Gregoryen 12 Temmuz–11 Ağustos; gün YOK, ok en erken olası günde biter)",
  kaynak:"RBS-SCH: \"В июле того же года он, после некоторого сопротивления, занял Керчь, Еникале и Тамань\" · ЭСБЕ «Керчь»: \"Русские вновь овладели К. в 1771 г.\" · VE «Керчь»: \"В 1771 г. К. завоевали русские и, по Кучук-Кайнарджийск. миру, К. и Еникале перешли во владение России\"",
  kesinlik:"istasyon sırası kaynaktaki sayım sırasıdır (Kerç · Yenikale · Taman); sırayla yürüdüğü AYRICA yazılmıyor. Yenikale→Taman boğaz geçişidir",
  yol:[[35.47869,45.29564],[36.47542,45.35675],[36.6045,45.35099],[36.71609,45.2117]] }
];
