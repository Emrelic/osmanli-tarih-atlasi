# BOLGE IBERYA — adım 3-6: harita uyumu, yerleşim kronolojisi, renk, enklav (UMIT 1115c)

Hepsi bu ağaçta (taban c317d2d85 + bu dal), `arac/girdi.yukle()` ile ölçüldü; İber kutusu lat 35,9-43,9 / lon -9,6-3,5 = **105 yerleşim**.

## Adım 3 — harita uyumu (yerleşimlerin sahipleri)
- 42 künyeden **6'sında hiç yerleşim penceresi yok**: cebelitarik-ingiliz, valensiya-kralligi, sobrarbe-ribagorza, pallars, denia, balear-tavaif (K6). Bu turda yeni 3 künye de eklendi (45 künye), pencereleri K3'te.
- **İç savaş sahipliği ayrılmamış 29 yerleşim** (atlasta `ispanya` 1936-07-18 → 2000-12-31 kesintisiz): Granada, İbiza, Toledo, León, San Sebastián, Cuenca, Kurtuba, Jaén, Murcia, Cartagena, Cádiz, Vigo, Málaga, Ronda, Almería, Girona, Alicante, Motril, Mojácar, Dénia, Tortosa, Huelva, Vic, Astorga, Zamora, Simancas, Barbastro, Algeciras, Consuegra. GEC «el Divuit de Juliol» (okundu) Cádiz ve Córdoba'nın Sevilla'yı izlediğini, San Sebastián/Málaga/Madrid/Barselona'da ayaklanmanın başarısız olduğunu söyler; her şehrin gün-gün el değiştirmesi bu turda okunmadı. Bu bir HARİTA UYUMU ihlalidir (iç savaşta Milliyetçi şehirler `ispanya` boyalı); düzeltme gün kaynağı gerektirir.
- Sevilla 1248: pencere günü 1248-01-01, kaynaklı gün 1248-11-23 (K1). Kurtuba 1228-01-01→1236-01-01 `__BOSLUK__` beyanlı boşluk (gün bulunamadı, K2).
- Madde-yer eşlemesi: `py arac/odak_olc.py` **ÇÖZÜLMEYEN ODAK ATFI: 0** (bu dalda, yeni sınır maddesi dahil). Önceki taban (KASA birleşimi) da 0'dı.

## Adım 4 — yerleşim kronolojisi
- İber kutusunda 8 yerleşimin hiç penceresi yok: Ainsa, Sort, Lusitania, Baetica, Gallaecia, Cangas, Endülüs, İspanya (bölge/harabe adları; `bos:"veri-yok"`).
- `__BOSLUK__` **144 dilim** (Cezayir/Bayonne/Narbonne/Béziers/Carcassonne dahil; kutu içi başka bölgelere ait). En yaygın: 0476-09-04→0507-01-01 (Batı Roma sonrası) ve 0750-08-05→0756-05-15 (Emevî sonrası) her ikisi de beyanlı; en uzunları 1031→1281 (Ronda, Huelva, Faro, Lagos, Setúbal, Almuñécar, Uclés, Sagunto, Arjona, Santarém, Écija, Talavera, Consuegra, Dénia) ve 0711→1281 (A Coruña, Vigo, Braga, Jaca, Soria).
- 1000-1199 dilimi sahip dağılımı K7'de. Hiçbir boşluk bu turda doldurulmadı (TDV `nibla` slug'ı açılmadı).
- Mayorka (Palma) 0900-1229 pencere yok (ilk pencere aragon 1229-12-31); Dénia 1014-1076 ve Palma için kaynaklı TDV künyeleri (denia, balear-tavaif) hazır (K6).

## Adım 5 — renk
`py arac/renk_olc.py` KOŞMADI (renkler.py ve palet veriden türediği için yeni künye `harita:` ile mevcut `ispanya`/`portekiz` rengini alır; BOYALAR'a yeni anahtar EKLENMEDİ). Ayrıntı: RENK-ONERI-1115c-iberya.md.

## Adım 6 — enklav/eksklav
- Cebelitarık (İngiliz 1704/1713): atlasta pencere var (ingiltere 1704-08-04→) fakat künye `cebelitarik-ingiliz` pencere almıyor (K6.2); İspanya içinde eksklav, Değişmez 8 (şehir bölgesi ülke sınırını aşamaz) denetle sonucunda ölçülemez (ana ağaçta "ölçülemedi", çıkış 2 olası).
- Andorra (1278-09-08 künye, pencere 1: Andorra la Vella) tek noktalı eksklav; Ceuta/Melilla, Olivenza (Portekiz→İspanya 1801), Llívia (Fransa içinde İspanyol eksklavı, Pireneler Antlaşması 1659): atlasta karşılığı OKUNMADI/ölçülmedi.
- Portekiz Brezilyası, Goa vb. başka bölge künyeleri (Hint/Amerika bölgelerinde).
