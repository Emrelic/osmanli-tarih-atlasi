# 96 · Fransa Krallığı + Napolyon İmparatorluğu — TOP100-1103 denetimi
Ölçüm: UMIT, worktree umit-1103-top100, origin/main 01d545bdb, 4 Kasım 2026 (ölçer: top100_olc.py; salt okuma)

## Özet
- Künye: 2 asıl (`fransa` 987-07-03→1792-09-22, `fransa-cumhuriyet` 1792-09-22→pencere ucu) + öncül `bati-francia` (843→987-07-03, 33'te). **Napolyon İmparatorluğu için AYRI KÜNYE YOK** (`--ara napolyon/fransiz/imparator`: yalnız uydu/sefer künyeleri — `italya-napolyon`, `danzig-serbest-sehri-1807`, `fransiz-misir-seferi`, `malta-fransiz`, `roma-cumhuriyeti-1798`, `ren-konfederasyonu` 0 yerleşim); I. İmparatorluk (1804-05-18 → 1814) ve Yüz Gün `fransa-cumhuriyet`in içinde, yalnız künye kronolojisinde.
- Açık kırılma: `fransa` **98** (25'i 1534 öncesi, 71'i 1534-1792 sömürge/Yeni Fransa+Hint, 2'si 1793-1860) · `fransa-cumhuriyet` **100** (41 · 1793-1860, 48 · 1861-1922, 11 · 1923+). Toplam 198; "yalnız otomatik maddeyle kapanan": 0. Ölçerin ⚠ "harita anahtarı" uyarısı bu üç künyede ÇIKMADI.
- Eksik madde: Değişmez 2 evreninde ~55 önerilen satır (aşağıda 28'i ayrıntılı); evrende **Waterloo, Yüz Gün, Napolyon'un feragati, 1804 imparatorluk, 1830, 1848, 1852, 1870 yok** (yalnız künye içi).
- En ağır 3 bulgu: (1) Napolyon İmparatorluğu ve Yüz Gün haritada ayrı yok; Napolyon'un düşüş günleri (1814-04-06/11, 1815-03-20, 06-18 Waterloo — TDV günü, 06-22, 07-08) Değişmez 2 evreninde bulunmuyor. (2) `fransa` f 0987-07-03 gününün ikinci akademik kaynağı yok; "Noyon'da seçilip taç giyer" cümlesi seçim (Senlis, ~1 Haziran) ile kutsama (Noyon, 3 Temmuz)'u karıştırıyor. (3) 1792-09-21/22: künye ve `olaylar_ek15.js:44` 22 Eylül (TDV esas), `kronoloji_sinir_nokta2.js:51` 21 Eylül — çelişki beyan edilmemiş; ek olarak 1923-10-29 eski ufuk izi: Tabarka.

## a) Künye eşleme
| id | ad | f | t | durum |
|---|---|---|---|---|
| bati-francia | Batı Francia | 0843-01-01 | 0987-07-03 | öncül, 33-frank'ta; t = `fransa` f ile bitişik ✔ |
| fransa | Fransa Krallığı | 0987-07-03 | 1792-09-22 | var; 142 yerleşim; en geniş 1725: 100 |
| fransa-cumhuriyet | Fransa (1792 sonrası — Cumhuriyet/İmparatorluk/Restorasyon/II. Cumhuriyet/II. İmparatorluk/III. Cumhuriyet) | 1792-09-22 | — (pencere ucu) | var; 460 yerleşim; en geniş 1922: 293 |
| (YOK) Birinci Fransız İmparatorluğu | — | 1804-05-18 | 1814-04-06/11 (+Yüz Gün 1815-03-20→06-22) | **EKSİK evre**; `fransa-cumhuriyet` içinde |
| vichy-fransasi | Fransız Devleti (Vichy) | 1940-07-10 | 1944-08-20 | var; `fransa-cumhuriyet` ile çakışma kasıtlı mı bkz. d) |
| italya-napolyon / ren-konfederasyonu / danzig-serbest-sehri-1807 / varsova-dukaligi | uydular | 1797-07-09 / 1806-07-12 / 1807-07-09 / (devletler.js:2946) | 1814-04-16 / 1813-10-19 / 1814-02-04 / — | `ren-konfederasyonu` 0 yerleşim (haritada görünmüyor) |
| fransiz-misir-seferi, malta-fransiz, roma-cumhuriyeti-1798 | sefer/himaye | 1798 | 1801/1800/1799 | var |
Alt/yan: 20+ sömürge künyesi (Fransız Hindistanı, Louisiana, Saint-Domingue, Cezayir, AOF/AEF…) bu devletin sınırı dışında.

## b) f/t ve evreler
| uç | atlas | kaynak 1 | kaynak 2 | hüküm | önerilen |
|---|---|---|---|---|---|
| fransa f | 0987-07-03 | Larousse (ansiklopedi): Adalbéron «sacre le nouveau roi à Noyon le 3 juillet 987»; Senlis meclisi 1 Haziran 987 (arama özeti; Larousse akademik hakemli değil) | Fordham Medieval Sourcebook/Richer: taç Noyon'da 1 Haziran'a bağlanıyor (çelişki); Britannica 'Hugh Capet' künyede (403, okunamadı). TDV `fransa`: 987 günü VERMİYOR | GÜN KISMEN DOĞRU: 3 Temmuz = kutsama (sacre); seçim Senlis'te ~1 Haziran. Künye kronolojisi «Noyon'da kral seçilip taç giyer» iki olayı birleştiriyor. 2 bağımsız akademik kaynak BULUNAMADI | `ic_not_f`: "3 Temmuz 987 sacre (Noyon); seçim Senlis ~1 Haziran; Richer çelişkisi"; ikinci kaynak için Erişilemeyen. `bati-francia` t aynı gün olduğundan ikisi birlikte değişir |
| fransa t / fransa-cumhuriyet f | 1792-09-22 | TDV `fransa`: «22 Eylül'de de cumhuriyet ilân edildi» (WebFetch, 4 Kas 2026) | Larousse 'Convention nationale': kraliyetin kaldırılması + Cumhuriyet 21 Eylül, 22 Eylül = "An I" tarih kararı (Danton). Aynı bilgi başka kaynaklarda 22 | **ÇELİŞKİ (kaynaklar arası)**: 21 Eylül kaldırma kararı, 22 Eylül cumhuriyetin ilanı/An I. TDV esas (CLAUDE.md) → 22 doğru. İç tutarsızlık: `kronoloji_sinir_nokta2.js:51` 1792-09-21 «Konvansiyon krallığı kaldırdı, Cumhuriyet kuruldu» | künye değişmez; `ic_not_t` çelişki beyanı (TDV 22 ↔ Larousse 21 kaldırma/22 An I); nokta2:51 b'sini "krallık kaldırıldı (21 Eylül); Cumhuriyet 22 Eylül" yap |
| Napolyon imp. f | 1804-05-18 (künye maddesi) | künye: Britannica 'Napoleon I' (okunamadı, 403). TDV `fransa`: yalnız yıl — «imparatorluk dönemi başladı (1804-1814)» | arama: Archontology + Napoleon.org-benzeri sayfalar «18 May 1804 senatus-consulte 28 floréal XII»; taç giyme 2 Aralık 1804 | DOĞRU (Senato kararı); 2 akademik bağımsız kaynak teyidi tamam değil | evrene madde (aşağıda) |
| Napolyon düşüşü | künyede YOK (1814-05-03 Restorasyon var) | TDV `fransa`: «Waterloo'da yaşadığı yenilgiyle sona erince (18 Haziran 1815)» | arama özetleri: feragat 6 Nisan 1814 (belge) / 11 Nisan 1814 (Fontainebleau Antlaşması); 20 Mart 1815 Paris'e dönüş; 22 Haziran 1815 ikinci feragat; 8 Temmuz Louis XVIII | künye 1814-05-03 "Paris'e giriş" ✔ (Restorasyon) ama İMPARATORLUĞUN SONU ve Yüz Gün hiç yok | madde öner (c) |
| 1830-08-09 / 1848-02-24 / 1852-12-02 / 1870-09-04 | künye kronolojisi | TDV `fransa`: 1830 yıl; «24-25 Şubat 1848»; «2 Aralık 1852»; «4 Eylül 1870» | — | 1848 (24-25 Şub), 1852, 1870 TDV ile uyumlu ✔; 1830 yalnız yıl (atlas 08-09 künyede, 2. kaynak ARANACAK) | evren dışı (künye içi) — evrene taşı |
| 1940-07-10 | künye | OH france (künyede) | — | atlas tarafı kaynaklı | — |
| t (pencere) | — | `fransa-cumhuriyet` t YOK, pencere ucu 2000 | | doğru (devlet sürüyor) | — |

Evre kontrolü ("künye aşımında sınıflandır"): devlet ölmedi, rejim değişti ⇒ tek künye kuralı korunmuş (CLAUDE.md/`devletler.js:898-903` kararı). Ancak 1804-1815 haritada 185 yerleşimle (1812) en geniş imparatorluk dönemi; uydu/bağımlı devletler ayrı künyede, çekirdek aynı renkte → **Napolyon İmparatorluğu'nu ayrı künye yapmak** (öneri; renkler.py BOYALAR = tuz ⇒ Emre onayı) veya en azından künye `ic_not` ile "I. İmparatorluk 1804-05-18..1814, Yüz Gün 1815-03-20..07-08" beyanı.

## c) Kronoloji
Var olanlar (Değişmez 2 evreni):
- 1789-07-14 Bastille — `data/olaylar_ek19.js:12`. 1792-09-22 Birinci Cumhuriyet — `data/olaylar_ek15.js:44` (gun "22 Eylül 1792" ✔ TDV). 1792-09-21 — `data/kronoloji_sinir_nokta2.js:51` (bkz. b).
- 1798-06-12 Malta, 1798-07-01 Mısır işgali — `data/olaylar.js:143,145` (TDV: «1 Temmuz 1798» ✔ aynı gün). 1799-05-20 Akkâ — `olaylar_ek5.js:324`. 1802-06-25 Osmanlı-Fransız Paris barışı — `olaylar_ek5.js:327`. 1798-09-09 Osmanlı savaş ilanı — `olaylar_ek5.js:323`. 1536 kapitülasyon — künye ozet'inde, evrende 18 Şubat 1536 (TDV) aranmadı.
- 1797-05-12 Venedik'in sonu — `olaylar_napolyon_italya_1028.js:13`; 1797-10-17 Campo Formio — `olaylar_ek16.js:134`; 1801-02-09 Lunéville — `kronoloji_sinir_avrupa_bati.js:190`; 1805-12-26 Pressburg — `olaylar_napolyon_italya_1028.js:45`; 1809-05-17 papalık ilhakı — `olaylar_napolyon_italya_1028.js:47`; 1809-10-14 Schönbrunn — `olaylar_avmac_b_1029.js:76`; 1814-04-11 Fontainebleau (Parma) — `olaylar_napolyon_italya_1028.js:48`; 1814-04-16 İtalya Krallığı çöküşü — `olaylar_napolyon_italya_1028.js:49`; 1815-06-09 Viyana Nihai Senedi — `olaylar_ek16.js:304`; 1802-03-25 Amiens — `olaylar_ek16.js:376`.
- 1552-01-01 Toul/Verdun (yıl) — `olaylar_fransa_kontrol_1027.js:17`; 1861-02-02 Menton — `olaylar_fransa_kontrol_1027.js:54`; 1648-10-24 Vestfalya — `olaylar_ek20.js:333`'ün komşu satırlarında (Fransa Alsace).
- Evren DIŞI (yalnız künye içi): `fransa` 12 madde (Hugues Capet 987-07-03, Bouvines 1214-07-27, Crécy 1346-08-26, Orléans 1429-05-08, Castillon 1453-07-17, Pavia 1525-02-24, Nantes 1598-04-13, Vestfalya, Fontainebleau Fermanı 1685-10-18, Bastille, 1792-08-10, 1792-09-22, Mısır 1798-07-01) — `devletler.js:883-895`; `fransa-cumhuriyet`: 1804-05-18, 1814-05-03, 1830-08-09, 1848-02-24, 1852-12-02, 1870-09-04, 1881-05-12 Bardo, 1940-07-10 Vichy… — `devletler.js:909-917`.

Eksikler — önerilen satırlar (kaynak "ARANACAK" = bu turda kaynakta DOĞRULANMADI; gün atlas s: kaydında ya da kamuya yerleşik bilgi; çıkarım değil, uygulanmadan önce okunmalı):
```
{ t:"1804-05-18", b:"Napolyon senatus-consulte ile Fransızların İmparatoru ilan edildi (I. İmparatorluk)", tur:"hukumdar", yer_id:"Paris", kaynak:"künye devletler.js:910 · TDV fransa: yalnız yıl 1804; Archontology 'Napoléon Ier' (28 floréal an XII). ARANACAK: 2. akademik" }
{ t:"1804-12-02", b:"Notre-Dame'da Napolyon'un taç giyme töreni (Papa VII. Pius)", tur:"hukumdar", yer_id:"Paris", kaynak:"künye ozet notu; ARANACAK" }
{ t:"1814-04-11", b:"Fontainebleau Antlaşması: Napolyon feragat etti, Elba'ya sürüldü (feragat belgesi 6 Nisan)", tur:"hukumdar", yer_id:"Paris", kaynak:"arama özetleri (Fontainebleau 11 Nisan 1814; feragat belgesi 6 Nisan); ARANACAK: Napoleon.org/Cambridge" }
{ t:"1815-03-20", b:"Yüz Gün: Napolyon Elba'dan dönüp Paris'e girdi", tur:"hukumdar", yer_id:"Paris", kaynak:"arama özetleri: 20 Mart 1815; ARANACAK" }
{ t:"1815-06-18", b:"Waterloo Muharebesi: Napolyon yenildi, I. İmparatorluk sona erdi", tur:"savas", yer_id:"Paris", kaynak:"TDV fransa: «Waterloo'da yaşadığı yenilgiyle sona erince (18 Haziran 1815)» ✔; ikinci kaynak ARANACAK" }
{ t:"1815-07-08", b:"II. Restorasyon: XVIII. Louis Paris'e döndü", tur:"hukumdar", yer_id:"Paris", kaynak:"arama özeti: 8 Temmuz 1815; ARANACAK" }
{ t:"1830-08-09", b:"Temmuz Monarşisi: Louis Philippe tahta çıktı", yer_id:"Paris", kaynak:"künye devletler.js:912 (gün künyede kaynaksız); TDV fransa: yalnız yıl 1830 — gün ARANACAK" }
{ t:"1848-02-24", b:"II. Cumhuriyet ilan edildi (24-25 Şubat)", yer_id:"Paris", kaynak:"TDV fransa: «(24-25 Şubat 1848)» ✔" }
{ t:"1852-12-02", b:"III. Napolyon imparator ilan etti (II. İmparatorluk)", yer_id:"Paris", kaynak:"TDV fransa: «2 Aralık 1852» ✔" }
{ t:"1870-09-04", b:"III. Cumhuriyet ilan edildi", yer_id:"Paris", kaynak:"TDV fransa: «4 Eylül 1870» ✔" }
{ t:"1871-05-10", b:"Frankfurt Barışı: Alsas (Strazburg, Mulhouse, Colmar) ve Loren'in büyük bölümü (Metz) Almanya'ya geçti", yer_id:"Strazburg", kaynak:"ARANACAK (Digithèque MJP 'traité de Francfort'); gün atlas s: ile aynı. 32/95 ile çift yazma YAPMA: tek madde `yer_id` listesi" }
{ t:"1804-01-01", b:"Haiti bağımsızlığı ilan edildi (Saint-Domingue sona erdi)", yer_id:"Jaragua (Taino cacicazgosu)", kaynak:"ARANACAK" }
{ t:"1659-11-07", b:"Pireneler Antlaşması: Artois (Arras) ve Roussillon (Perpignan) Fransa'ya geçti", yer_id:"Arras", kaynak:"ARANACAK (atlas s: ile aynı gün)" }
{ t:"1493-01-19", b:"Barselona Antlaşması: Roussillon (Perpignan) Aragon'a iade edildi", yer_id:"Perpignan", kaynak:"ARANACAK" }
{ t:"1347-08-03", b:"Calais İngiltere'ye teslim oldu (Yüzyıl Savaşları)", yer_id:"Calais", kaynak:"ARANACAK" }
{ t:"1558-01-07", b:"Guise Dükü Calais'yi İngilizlerden aldı", yer_id:"Calais", kaynak:"ARANACAK" }
```
Not: Satırlardaki "ARANACAK" günleri atlas yerleşim s: kayıtlarıyla çakışıyor ama atlas referans değildir; TDV/Treccani/Cambridge okunmadan madde yazılmaz.

## d) Harita uyumu
**`fransa` (98 açık)** dağılım: 25 (<1534: ufuk işareti 1000-01-01, Yüzyıl Savaşları Normandiya/Aquitaine/Calais) · 71 (1534-1792: Yeni Fransa, Karayip, Hint, Afrika sömürge kuruluşları; Aachen/Nijmegen/Ryswick sınır değişimleri) · 2 (1793). En önemli 15:
| gün | yerleşimler | öneri |
|---|---|---|
| 1000-01-01 | Auxerre, Dijon, Paris, Senlis | UFUK SINIR İŞARETİ (`s:` f=1000-01-01 edinim günü değil); madde yazma, yıl-işareti beyanı yeter |
| 1347-08-03 | Calais | madde (Yüzyıl Savaşları, c) |
| 1417-09-04 / 1418-09-29 / 1419-01-19 | Caen / Cherbourg / Rouen | "İngiliz Normandiya'sı" 3 madde; kaynak ARANACAK |
| 1429-07-10 / 07-16 | Troyes / Reims | Reims'te Charles VII'nin kutsanışı 17 Temmuz 1429; 07-16 giriş — ARANACAK |
| 1449-10-29 · 1450-06-24 · 1450-08-12 · 1451-06-30 · 1451-08-20 | Rouen, Caen, Cherbourg, Bordeaux, Bayonne | Normandiya/Guyenne'in geri alınışı; `olaylar`ta Formigny (1450-04) ve Castillon (künye 1453-07-17) var, bu günler 70-119 gün uzak ⇒ 5 madde |
| 1463-01-01 · 1493-01-19 | Perpignan | Roussillon (Bayonne 1462 / Barselona 1493) |
| 1532-08-13 | Brest, Nantes, Quimper, Rennes | Bretagne birliği fermanı (Vannes, Ağustos 1532); ARANACAK |
| 1552-04-18 · 1558-01-07 | Metz · Calais | Metz'e giriş; Calais'nin geri alınışı |
| 1608-07-03 · 1642-05-17 | Quebec · Montreal | sömürge kuruluşları (Champlain, Maisonneuve) |
| 1659-11-07 | Arras, Perpignan | Pireneler Antlaşması |
| 1697-09-20 / 1697-10-30 | Jaragua (Saint-Domingue) kaybı / Freiburg | Ryswick: evrende madde var (`yer_id` Lüksemburg/Mons/Ypres) ⇒ `odak_yer`/`kapsam_genis:true` ekle; 30 Ekim ayrı ikinci imza |
| 1699-04-08 · 1718-01-01 · 1713-01-01 | Biloxi · New Orleans · Louisbourg | Louisiana kuruluşları (`louisiana` künyesi f 1682-04-09); gün 1 Ocak = yıl-işareti |
| 1762-11-03 · 1763-02-10 | Louisiana/New Orleans · Chequamegon vb. | Fontainebleau (madde var) ve Paris 1763 (madde var, yer_id farklı) ⇒ `odak_yer` |
| 1746-09-21 · 1749-08-21 · 1757-03-23 · 1761-01-16/04-05 | Madras / Çandernagor / Pondişeri / Cinci | Hint savaşları (Madras 21 Eylül 1746 Fransız fethi ✔ atlas s:) madde yok |
| 1793-06-10 / 08-23 | Çandernagor / Pondişeri | Devrim Savaşları'nda İngiliz zaptı |
**`fransa-cumhuriyet` (100 açık):** 41 (1793-1860: Napolyon dönemi şehirleri [Pisa, Siena, Perugia, Elba, Kotor], Cezayir fetihleri 1830-1855 [Muaskar 1841, Tilimsan 1842, Batna 1844, Cilfe 1852…], Nice/Savoy 14 Haziran 1860 ✔ (evrende Torino 1860 maddesi var mı: ARANACAK)) · 48 (1861-1922: Batı/Orta Afrika, Madagaskar 1896-97, Suriye 1918-10 [Rakka, Trablus, Mersin], Kamerun 1916, Togo 1914) · 11 (1923+: 1960-08 sekiz bağımsızlık, 1977-06-27 Cibuti, 1940-08-02 Alsas-Loren, 1950 Kerguelen). Ayrıntı için en önemli 15:
| gün | yerleşimler | öneri |
|---|---|---|
| 1797-05-12 | Belluno, Feltre | madde var (`olaylar_napolyon_italya_1028.js:13`), yer_id "Venedik" ⇒ `odak_yer` ekle (97 ile aynı) |
| 1797-07-09 | Bolonya, Ravenna, Rimini | Cisalpin kuruluşu maddesi var, `odak_yer` |
| 1798-06-12 / 1800-09-05 | Gozo, Mdina | madde var, `odak_yer` |
| 1804-01-01 | Jaragua | Haiti bağımsızlığı maddesi YOK |
| 1807-12-10 | Pisa, Siena | madde var (Etrurya), `odak_yer` |
| 1809-05-17 / 07-09 | Perugia / Santo Domingo | madde var / Santo Domingo'nun İspanya'ya dönüşü 9 Temmuz 1809 maddesi YOK |
| 1813-11-30 · 1814-09-01 · 1815-06-09 | Hollanda / Toskana / Maastricht, Orbetello, Piombino | madde var (yer_id farklı) ⇒ `odak_yer` |
| 1816-12-04 | Pondişeri, Çandernagor | Fransız Hint kuruluşlarının iadesi (Pondichéry'yi İngiltere 1816'da iade): madde YOK |
| 1830-07-05 ve Cezayir 1841-1855 | Muaskar, Tilimsan, Batna, Cilfe, Nder | Cezayir künyesi `cezayir-fransiz` 1830-07-05; yerleşim s: günleri maddesiz |
| 1860-06-14 | Annemasse, Chambéry, Nice | Torino Antlaşması 24 Mart 1860 / ilhak 14 Haziran — ikisi de ARANACAK |
| 1871-05-10 | Colmar, Metz, Mulhouse, Strazburg | Frankfurt Barışı maddesi YOK (c) |
| 1881-05-12 | (Tunus) | künyede Bardo; evren dışı ⇒ evrene taşı |
| 1883-1914 | Afrika/Hint-Çin kuruluşları (~35 satır) | Berlin Konferansı 1885, AOF 1895-06-16, AEF 1910-01-15 vb. kuruluş künyeleri var; yerleşim günleri için kaynaklı tek kayıt `kaynakli_halka_*.js` yöntemi |
| 1918-10-08 / 10-13 / 10-26 / 10-30 | Deyrülkamer, Sûr, Trablusşam, Rakka, Mersin… | `oeta-bati-fransiz` (1918-10-08) künyesi var; madde `olaylar_ek5.js:464` Kasım; Ekim yerleşim günleri maddesiz |
| 1922-07-20 | Kamerun | Milletler Cemiyeti B mandası 20 Temmuz 1922 maddesi var (31 g) — `odak_yer` |
| 1940-08-02 | Colmar, Metz, Mulhouse | Alsas-Loren ilhakı: madde var (Wagner/Bürckel), `odak_yer` |
| 1960-08-03…17 | 7 bağımsızlık | madde var (`kronoloji_sinir_halef_1923_2000.js`) |
**Çakışma:** `vichy-fransasi` (1940-07-10→1944-08-20) ile `fransa-cumhuriyet` künyeleri paralel; Vichy yerleşim sahipliği `fransa-cumhuriyet`ten ayrılıyor mu ölçülmedi (ayrı denetim konusu).
**En geniş yıl sahiplik (`fransa` 1725: 100 yerleşim; `fransa-cumhuriyet` 1812: 185, 1922: 293):** Paris, Rouen, Reims, Bordeaux, Lyon… Fransa'nın tarihsel çekirdeği ✔; 1725'te Louisiana ve Kanada yerleşimleri `fransa` (doğru); 1812 sayımında Napolyon İmparatorluğu doğrudan ilhak yerleri (Hollanda, Ren sol yakası, Roma, Toskana, İliryalı eyaletler) `fransa-cumhuriyet` boyalı ⇒ **beyan**: "ilhak edilmiş (doğrudan) topraklar ile uydu (italya-napolyon, varsova-dukaligi…) ayrı" — doğru kurgu, ama imparatorluk adı haritada anılmıyor.
**1923-10-29 eski ufuk izi** (EK-1923-ufuk.md): `yerlesimler_afrika.js:366` **Tabarka** `isg:[{f:"1881-05-12",t:"1923-10-29",d:"fransa-cumhuriyet"}]` — Tunus himayesi 1956'ya dek sürerken Fransız idare ucu 1923-10-29'da kesilmiş; sonrası boş. Yerleşim sahipliği değişmediği için `t`'yi 1956-03-20 (Tunus bağımsızlığı) ya da ilgili devir günü yap — kaynak ARANACAK.

## Önerilen düzeltmeler (KASA için)
1. `data/devletler.js` `fransa`: `ic_not_f` (3 Temmuz 987 sacre; Senlis ~1 Haziran; Richer çelişkisi) ve künye kronoloji b'si "Hugues Capet Senlis'te kral seçildi; 3 Temmuz 987'de Noyon'da kutsandı".
2. `fransa` `ic_not_t`: TDV 22 Eylül ↔ Larousse 21 Eylül (kaldırma) / 22 (An I); `data/kronoloji_sinir_nokta2.js:51` b metnini ayır.
3. Yeni madde dosyası `data/olaylar_fransa_napolyon_1104.js`: 1804-05-18, 1804-12-02, 1814-04-11, 1815-03-20, 1815-06-18, 1815-07-08 (+ 1830, 1848-02-24, 1852-12-02, 1870-09-04, 1871-05-10, 1804-01-01 Haiti) — kaynaklar madde satırında; ikinci kaynak ARANACAK olanlar önce kaynağa bağlanmalı.
4. Napolyon İmparatorluğu için ayrı künye (`fransa-imparatorlugu-1`, 1804-05-18 → 1814-04-11, Yüz Gün ayrı dilim) KARARI Emre'de (renkler.py BOYALAR tuz işi); alternatif beyan: `fransa-cumhuriyet` `ic_not`.
5. "Madde var, yer_id tutmuyor" ≈ 40 satır (Venedik 1797-05-12, Cisalpin 1797-07-09, Malta, Etrurya 1807-12-10, Pressburg/Schönbrunn, 1815-06-09, Kamerun 1922-07-20, Alsas-Loren 1940-08-02, 1960 bağımsızlıkları): ilgili maddelere `odak_yer` ya da `kapsam_genis:true` (ölçer alâkalı sayacak).
6. `yerlesimler_afrika.js:366` Tabarka `isg:` t düzeltmesi (eski ufuk izi).
7. Sömürge kuruluş günleri (Quebec 1608-07-03, Montreal 1642-05-17, Pondişeri 1674, New Orleans 1718, Dakar 1857-05-25 …): her biri için kaynaklı tek madde; kaynak bulunmadan "1 Ocak" yıl-işareti kalmalı.

## Erişilemeyen kaynaklar
- Britannica 'Hugh Capet' / 'Napoleon I' (403, künye kaynağı) — sorular: 987 kutsama günü; 1804-05-18 Senato kararı.
- F. Lot, *Les derniers Carolingiens* / *Études sur le règne de Hugues Capet* (archive.org) — soru: Senlis seçimi 1 Haziran mı, Noyon kutsama 3 Temmuz mu.
- *The Cambridge Medieval History* vol. III 'France under Hugh Capet' — aynı soru.
- Napoleon.org 'chronology' ve *Cambridge Modern History* vol. IX — 1814-04-06/11 feragat, 1815-03-20, 06-22, 07-08 günleri.
- JSTOR: R. Postgate / Hampson 'The Convention' makaleleri — 21/22 Eylül 1792 ilan ayrımı; Assemblée nationale 'Archives parlementaires' tom. 52 s.70-72 (21-22 Sept 1792).
- Treaty of Frankfurt (10 Mayıs 1871) metni (Digithèque MJP) — soru: devir günü ve kapsam (Metz, Colmar).
- Treccani 'Guerra dei cent'anni' / Cambridge *Hundred Years War* — Normandiya ve Guyenne'in 1417-1451 günleri.
