# KRON-MINOS-OLMEK-1112 — Minos, Miken, Olmek: kronoloji × harita × kaynak

Tarih: 12 Kasım 2026 · ağaç: `claude/compassionate-ritchie-41bdf7` (origin/main'e göre taze değil, yalnız veri OKUNDU; veri dosyası değiştirilmedi, denetle/paketle koşmadı).

## Kapsam (grep ile bulunan)
- Künye: `data/devletler.js` — `minos` (satır 19580, f -1899 / t -1449), `miken` (19587, f -1399 / t -1099), `olmek` (20677, f -1199 / t -0399).
- Künye içi `kronoloji:` maddeleri: minos 4 (−1899 ×2, −1699 ×2) + −1449; miken 4 (−1399, −1299, −1199, −1099); olmek 4 (−1199, −0899, −0599, −0399).
- Dış maddeler: `olaylar_antik_akdeniz.js` 168 (Miken sarayları ~−1199), 169 (Minos sarayları/Knossos ~−1449); `olaylar_arkeoloji_d2/d3-anadolu-ege.js` (Thera −1612 ve −1583, `olay_taraf.js` ile minos'a bağlı); `olaylar_arkeoloji_amerika.js` (La Venta −0799, San Lorenzo −1399).
- Yerleşim: Knossos (`yerlesimler_once1281_yt_avrupa.js:239`, s: minos −1899…−1449); Mikene ve Pylos (aynı dosya 88-92: `s:[]`, `bos:"veri-yok"`); San Lorenzo ve La Venta (`yerlesimler_mo_amerika.js:7-8`). `d:"miken"` yazan yerleşim **bulunamadı**. (Tiryns/Teb ayrıca aranmadı: "miken|mycen" grep'inde çıkmadı.)
- Konvansiyon: astronomik yıl (MÖ N = −(N−1)); üç künyede de tutarlı. Antik konvansiyon kuralı (Shaw/Bryce vb.) Ege/Orta Amerika için yazılı değil; Minos künyesi LM IB sonunu hem "yüksek kronoloji 1525-1490" hem t=1450 (alçak) ile birlikte taşıyor → **bir künyede iki konvansiyon** (Bulgu M2).

## MINOS

**M1 — t=−1449 ile ozet ve ic_not çelişir; Knossos sonrası delik.** Künye `ozet`: "son yıkım MÖ ~1350-1380", `ic_not`: "Knossos sarayı MÖ 1450'de bitmez; Miken denetiminde LM II-IIIA'da sürer (yıkım c. 1350 ya da c. 1200)". Madde −1449 (olaylar_antik_akdeniz:169) ise "Knossos'ta Miken denetimi başladı" der. Harita: Knossos `s` −1449'da biter; Miken künyesi −1399'da başlar ve Knossos'a hiç bağlı değil → **−1449…−1399 arası ve sonrası Knossos sahipsiz/boş** (Değişmez 1 adayı; ölçmedim). Bu çelişkiyi tarih kaynağı çözmüyor: Knossos Linear B arşivinin tarihi LM IIIA2 mi LM IIIB mi tartışmalı (arama: Langohr UCLouvain; Knossos sunumu UW; sonuç "kesin değil"). ⇒ Beyanlı bırak; iki ucun hangisinin harita ucu olduğu karar gerektirir.

**M2 — Konvansiyon karışık.** Kaynak alanı "yüksek kronoloji LM IB sonu c. 1525-1490" diyor, t ise ~1450 (düşük/konvansiyonel). Thera iki ayrı madde: −1612 (d2, radyokarbon yüksek) ve −1583 (d3, Manning 2022 Bayes) — **aynı olay, iki tarih, ikisi de minos'a bağlı**. Kural: bir devletin uçları aynı konvansiyonda; diğer kronolojiler yalnız `ic_not`ta. Şu an uçlar (f=1900, t=1450) ve Thera (1612/1583) farklı konvansiyonlarda; −1612/−1583 çiftinin `ic_not`ta birbirini beyan ettiğini görmedim.

**M3 — Kaynak okunmamış.** Künye `kaynak`: Housley vd. 1999 "tam metin okunmadı", Manning 2006 "dolaylı aktarım", Treccani "çekilemedi". Ben de bu turda Minos için üçüncü bir bağımsız kaynak doğrulayamadım (arama Miken/Olmek'e harcandı). Yan maddeler (−1899 ikinci satır, −1699 ikinci satır) smarthistory/geotour/viva-pressbooks/efa.gr'ye dayanıyor — TDV değil, tek başına akademik değil (Oxford Companion/CODA yanında yardımcı olarak kalabilir; tek dayanak olamaz).

## MİKEN

**K1 — t=−1099 ile künye türü ("saray devletleri") uyuşmaz.** ic_not zaten iki görüşü beyan ediyor (t=−1199 saray çöküşü · t=−1099 kültür sonu), t değiştirilmemiş. Bu turda teyit: Cline 2014 / Dickinson 1994'e dayanan ikincil özetler (Dartmouth Aegean Prehistory; Jung, OEAW "Synchronizing the Destructions of the Mycenaean Palaces"; Ariadne Pylos tartışması) saray yıkımlarını LH IIIB sonu/IIIC başı (~1200) verir; **Pylos tek yıl değil**: Godart ~1250 (IIIB1) vs ~1200 (IIIC erken). Yani −1199 "onyıl" kesinliği doğru; −1099 saray-sonrası evrenin sonu. Kaynak türü: yabancı akademik (üçü bağımsız yayın) → çelişen bulgu **üç bağımsız kaynakla teyitli**, ama sayfa metinleri bu turda tam okunmadı (arama özeti).

**K2 — f=−1399 yalnız saray dönemi; Knossos'ta Miken 1450'den.** M1 ile aynı delik. Şaft mezarlar (~1600) künyede beyanlı dışarıda; tutarlı. Madde −1399 "Tiryns/Argos'ta saray mimarisi" yalnız worldhistory.org kaynaklı; −1299 aynı (yasak tek dayanak).

**K3 — Harita Miken'i hiç boyamaz.** Mikene ve Pylos `s:[]`; `d:"miken"` yok. Madde −1199'un `ic_not_d`i "Atlasta Mikene/Pylos/Tiryns yerleşimi yok (YER-EKSIK)" der — **bayat**, yerleşimler artık var (veri-yok). "Kronoloji ile harita birbirini doğrulamalı" ilkesi Miken için sağlanmıyor. Değişmez 2 evreninde (olaylar_*) madde var, `s:` kırılması yok → ölçüt "kırılma varsa madde" yönünde ihlal değil, ama harita boş.

## OLMEK

**O1 — Künye f ile yerleşim kur'u ayrışır.** Künye f=−1199 (San Lorenzo yükselişi, FAMSI); San Lorenzo yerleşim `kur`=−1399 ve `s` −1399…−1199 `__BOSLUK__` (beyanlı, "kültür dışı"); amerika.js maddesi −1399 "San Lorenzo başlar". Arama teyidi: San Lorenzo ana evresi ~1150/1200–900 (Cambridge 2016 özeti: 1200–1000/900; Berkeley arf011 Coe: 1150–900); 1400–1200 yalnız San Andrés/Molina evresi (San Lorenzo'ya ait değil, kalibre kıyas) → **künye −1199 kaynaklı; −1399 "ilk tarihli kanıt" olarak beyanlı** (zaten not'ta yazılı). Çelişki yok, ama −1399 maddesi "başlar" diyor (kuruluş gibi okunur) — metin yumuşatılabilir.

**O2 — La Venta başlangıcı üç ayrı yerde üç farklı: −1199/−0899/−0799.** Künye madde −0899: "San Lorenzo tahrip, La Venta başa geçti (MÖ ~900; bazı kaynaklar ~950)"; La Venta yerleşim s: −0799…−0399 (Šprajc vd. 2023); amerika.js maddesi −0799 "La Venta başlar". FAMSI "La Venta ca. 1000-400"; Bernal Faz I 1300-900 (eski, kalibre değil). Harita sonucu: San Lorenzo `bit` −0999, La Venta `s` −0799 → **−0999…−0799 arası Olmek hiçbir yerleşimde görünmez** (yalnız iki nokta, kültür; boya sorunu değil ama okunan madde −0899 haritayla uyuşmaz). 

**O3 — Yasak tek dayanak.** Künye maddeleri −1199, −0899, −0399 yalnız worldhistory.org timeline (Vikipedi gibi popüler/içerik sitesi sınıfı); künye düzeyinde FAMSI'ye çevrilmiş, maddeler çevrilmemiş. Powis 2011 (PNAS) 403 → okunmadı; bu turda alternatif akademik kaynak: Cambridge 2016 excerpt (Olmec, Early Olmec 1200–1000/900), Berkeley arf011 (Coe), Šprajc 2023 (La Venta). Maddeler bunlarla değiştirilebilir.

## Ölçülmeyenler
Değişmez 1/2/3/8 ölçülmedi (denetle yasak). Knossos'un −1449 sonrası sahipsizliği kodla değil okumayla çıkarıldı. Tiryns/Teb yerleşimi varlığı bakılmadı. Kaynak sayfaları tam metin açılmadı; teyit "arama özeti + künyedeki beyan" düzeyinde.

## Karar gereken (öneri ile)
1. **Knossos −1449 sonrası (M1/K2):** Önerim: Knossos `s`ye −1449…−1099 için `d:"miken"` ekle, `kesinlik` yüzyıl, `kaynak` "Linear B Knossos, tarih LM II–IIIB tartışmalı (Langohr; Driessen)" beyanlı yaklaşıklık; Miken f'yi −1449'a çekme (yok), Knossos'u Miken künyesinin "ömür dışı" parçası olarak künye genişletme kararına bağla. Alternatif: Knossos'u `__BOSLUK__` beyanlı bırak. (Künye dışı ömre yazmak "künye aşımı" sınıflaması ister: aynı polity sürüyorsa künyeyi GENİŞLET → miken f=−1449 ve Minos t=−1449'u böl.)
2. **Miken t (K1):** Önerim −1199'a indir (saray devleti), −1099 `ic_not`ta "kültür ucu" kalsın; LH IIIC maddesi −1099 korunur.
3. **Miken harita (K3):** Mikene, Pylos (ve gerekirse Tiryns, Teb) için `s: miken` −1399…−1199 yaz; `ic_not_d` bayat cümleyi sil.
4. **Thera çifti (M2):** Önerim tek konvansiyon: −1612 (radyokarbon yüksek) ve −1583 (Manning 2022) maddelerini biri diğerine "iki tarihleme" olarak bağla; künye uçları konvansiyonuna uygun tek `ic_not`.
5. **La Venta (O2):** Önerim La Venta `s` f=−0899 (madde ve FAMSI "ca. 1000") — San Lorenzo `bit` −0999'a yakın; ya da madde −0899'u −0799 yap. Hangisi Emre kararı.
6. **O3 + M3:** worldhistory.org/smarthistory/geotour-yalnız maddeleri Oxford/Cambridge/Berkeley kaynaklarıyla değiştirme turu aç (bu rapor adayları verdi).
