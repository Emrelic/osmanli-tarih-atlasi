# ORTAAV (Orta + Doğu Avrupa) — 1281 öncesi devlet listesi raporu

Üretim: `scratchpad/uret_ortaav.py` (tuple tablosu -> JSON). Dosyalar: `ORTAAV_A.json` … `ORTAAV_E.json`.

## 1. Sayılar
| Dilim | Kayıt | okundu | taslak | eksik | var | var-kisa | ardil-var | var-f-t-farkli |
|---|---|---|---|---|---|---|---|---|
| A (MÖ 12000–3001) | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| B (MÖ 3000–501) | 5 | 0 | 5 | 5 | 0 | 0 | 0 | 0 |
| C (MÖ 500–MS 499) | 27 | 0 | 27 | 17 | 0 | 4 | 6 | 0 |
| D (MS 500–999) | 24 | 0 | 24 | 21 | 0 | 1 | 2 | 0 |
| E (MS 1000–1280) | 30 | 0 | 30 | 23 | 1 | 4 | 2 | 0 |
| **Toplam** | **86** | **0** | **86** | **66** | 1 | 9 | 10 | 0 |

**Hiçbir kayıt `okundu` değildir.** Bu oturumda web'e çıkılmadı; bütün tarihler hafızadandır, hepsi
`dogrulama:"taslak"`, `kaynak:[]` (uydurma künye yazılmadı). Her kaydın `ic_not` sonunda "Aday kaynak"
(doğrulama için açılacak eser/madde) yazılıdır. Gün hassasiyetli yazılan birkaç tarih (Brandenburg
11 Haziran 1157, Avusturya 17 Eylül 1156, Moskova 16 Ocak 1547) hafızadandır; kesinlik alanı `gun`
olsa da doğrulanmadı.

Mevcut atlasa eşleme: 66 yeni (eksik); 9 `var-kisa` (künye genişletilmeli: iskit krallığı Kırım evresi,
vizigot/dogu-got öncülleri, thuringia, bohemya f=870, avusturya-dukaligi f=976, saksonya f=968,
stiriya); 10 `ardil-var`; 1 `var`.

## 2. Bulamadıklarım / sığ kalan yerler
- **A dilimi boş**: MÖ 3000 öncesinde Orta/Doğu Avrupa'da belgeli siyasî birim yok (Cucuteni–Trypillia,
  Varna vb. kültür, hariç).
- **Hiçbir kaynak okunmadı** (TDV, Brill's New Pauly, Lexikon des Mittelalters, Pleiades, PVL, Jordanes
  vb. aday olarak yazıldı). Tüm tarihlerin doğrulaması yapılmalı.
- **Roma eyaletleri bilerek yok** (Raetia, Noricum, Pannonia, Dacia, Germania Inferior/Superior,
  Moesia): bağımsızlaşmadıkları için `roma-imp` içinde; Dacia Traiana (106–271) için tek kayıt
  istenirse ana oturum karar versin. Galya İmparatorluğu (260–274) BATIAV.
- **Sığ**: (a) Kutsal Roma içi piskoposluk/manastır prensliği — Mainz, Köln, Trier, Bremen, Würzburg,
  Bamberg, Passau, Regensburg, Augsburg, Konstanz, Trient, Aquileia, Brixen, Basel, St. Gallen, Fulda
  eklenmedi (yalnız Ermland, Dorpat, Ösel-Wiek, Kurland); (b) küçük kontluklar/dukalıklar (Holstein,
  Oldenburg, Lippe, Berg, Jülich, Kleve, Hohenzollern, Görz, Cilli, Lausitz Markı, Carniola, Opole,
  Kuyavia, Sandomierz, Łęczyca-Sieradz); (c) Rurikid alt knezlikler (Vitebsk, Minsk, Gorodno,
  Novgorod-Seversk, Kursk, Pronsk, Pereyaslavl-Zalessky, Dmitrov, Uglich, Kostroma, Rostov alt
  kolları); (d) Baltık: Jersika, Koknese, Tālava, Zemgale, Kuronya, Sudovya, Prusya boyları (devlet
  değil kabile; kararsız eklenmedi); (e) kabile birlikleri: Poliyan, Severyan, Vyatiç, Radimiç, Krivich;
  (f) Sinds/Meotlar, Nymphaion, Phanagoria dışındaki Karadeniz polisleri (BALKAN/Bosporos ile
  sınırı belirsiz); (g) Mordva/Burtas/Merya/Meşçera/Çud/Ves; (h) Önceki Hallstatt/La Tène
  prensliklerinden yalnız Heuneburg (Hohenasperg, Mont Lassois BATIAV); (i) Hun-sonrası Avrupa
  Hun kalıntıları, Akatzir, Kangar; (j) Orta Avrupa Kelt oppida-devletleri (Taurisci, Vindelici,
  Raeti, Cotini).
- **Çakışma/çelişki**: `teuton-sovalyeleri` (dogu-avrupa) ile `teuton-devleti` (orta-avrupa) aynı
  polity'nin çift künyesi; birleştirilmeli. `stiriya-dukaligi` t=1192 şüpheli (Dukalık 1180–1918).
  `almanya` t=1945 çok uzun, 962–1806 olarak da beyan; ana oturum karar versin. `polonya-erken`
  1138–1320 parçalanmayı ayrı dukalıklarla (Krakov, Büyük Polonya, Pomerelya) örtüştürür.
  Burgund (Worms) ve Frizya (`frizya-ozgurlugu` bati-avrupa), Lüksemburg (`luksemburg-kontlugu` var)
  BATIAV ile sınırdadır.
- Bölge değeri: Frizya, Burgund, Lüksemburg `bati-avrupa` (mevcut atlas kuralı); kendi kayıtlarımda
  Doğu Avrupa'ya `dogu-avrupa` yazdım (Macar Etelköz, Karadeniz polisleri, Baltık, Rus knezlikleri).

## 3. Ana oturumdan istediğim
1. **Doğrulama turu**: öncelik sırası — (i) Bavyera, Saksonya Dükalığı, Brandenburg, Meissen, Avusturya
   Markı, Moskova, Bohemya (`oncelik: cekirdek` olanlar); (ii) Hun sonrası Tuna krallıkları (Rugi,
   Heruli, Skiri, Gepid, Lombard Pannonia) — Eugippius, Jordanes, Prokopios; (iii) Baltık Slav
   (Obotrit/Veleti/Hevelli) — Helmold, Thietmar; (iv) Rus knezlikleri — PVL / Hypatian.
2. **WebFetch / WebSearch ile ikinci tur** için ayrı ajan(lar) önerim: "Kutsal Roma ana dukalık,
   mark, piskoposluk listesi" ve "Rurikid knezlikler ağacı" (Martin, *Medieval Russia*; Cambridge
   History of Russia I) iki ayrı oturum.
3. Karar: Roma eyaletlerinin ve Karolenj alt-krallıklarının (Bavyera 788–907 gibi) künye alınıp
   alınmayacağı; Piast bölünme dönemi dukalıklarının tek `polonya-erken` içinde mi ayrı mı olacağı.
4. Kuruluş tarihi sorusu: "Heuneburg", "Lugii", "Bastarnae", "Kimmer" gibi arkeolojik/gevşek birimler
   Emre'nin kriterine (siyasî birim) uyuyor mu? `oncelik: kucuk` işaretlendi; istenmezse düşürülür.
