# ROMA-ANADOLU-1113 — Roma eyalet-bazlı zincir, Anadolu turu

Tarih: 13 Kasım 2026 · Dal: `emrelic-1113-roma-anadolu` (`emrelic-1113-roma-dogu-akdeniz` tepesinden) · Yazan: EMRELIC alt ajanı.
Ağır araç (tam denetle, renk_olc, denetle_yayin, ceviri) KOŞTURULMADI. Yapılan: `node --check`, `girdi.yukle` ölçümü (çakışma / sıfır uzunluk / BOYALAR kimlik betiği), `paketle yenile` + `surum_damgala` + `paketle sina` (TAZE).

## 1. Ölçüm (önce → sonra)
Ölçüm yeri: bu worktree, 5628 yerleşim; bbox lat 35.8–42.2 / lon 25.5–44.5; ölçüt: MS 150-01-01'de `s:` dönemi olmayan ya da `__BOSLUK__` olan yerleşim.

| Ölçüt | Önce | Sonra |
|---|---|---|
| bbox'ta MS 150 dönemsiz/`__BOSLUK__` | 421 (417 dönemsiz + 4 BOŞLUK) | 386 |
| Doldurulan yerleşim | — | 35 |
| Yeni kronoloji maddesi (`data/kronoloji_sinir_antik_roma.js`) | 48 | 71 (+23) |
| Yeni dönemlerde çakışma / sıfır uzunluk / bilinmeyen kimlik | — | 0 (betikle, sayısal tarih karşılaştırmasıyla) |

Kalan 386'nın büyük kısmı Anadolu dışı (Kuzey Irak/Ermenistan/Suriye kuzeyi: bbox doğuya taşar), Roma çağında var olmayan ortaçağ yerleşimleri (kale/köy/kasaba), Neolitik höyükler ve eyalet/bölge kayıtlarıdır; kırılımı ölçülmedi.

## 2. Eyalet başına
Eyalet yılı hepsinde: TDV İslâm Ansiklopedisi «Anadolu» md. (islamansiklopedisi.org.tr/anadolu, 13.11.2026 okundu; yalnız yıl, gün teyitsiz). Varlık tanığı: Pleiades (pleiades.stoa.org/places/<id>; Mitchell ve ark.; toplu CSV dökümü 13.11.2026, Roman dönem anahtarı + yaş aralığı). Zincir: roma-cumhuriyeti/roma-imp → bizans 395-01-17 (künye konvansiyonu) → mevcut ilk dilime bağlanır (ufuk sınırı 1000/1281 ise sürekli Bizans) ya da 1071-01-01'de biter + beyanlı boşluk (TDV «Malazgirt Savaşı»: 1071, yalnız yıl).

| Eyalet | İlhak (kaynak) | Doldurulan | Madde |
|---|---|---|---|
| Asia | -0128 (MÖ 129, TDV «Provincia Asia; m.ö. 129»; Pleiades Sardis: 133 vasiyet) | 13: Manisa, İzmir, Aydın, Alaşehir, Akhisar, Milas, Balat (Miletos), Datça (Knidos), Ayasuluk (Efes), Edremit, Lapseki, Sart, Kuşadası | 3 (ilhak, 395, 1071) |
| Bithynia (Pontus) | -0073 (MÖ 74, TDV); Karadeniz Ereğli -0062 (MÖ 63 «Pontus-Bitinya») | 6: Bursa, İznik, Mudanya, Gemlik, Bolu, Karadeniz Ereğli | 4 |
| Galatia | -0024 (MÖ 25, TDV) | 5: Konya, Yalvaç, Uluborlu, Eğirdir, Beyşehir | 3 |
| Cappadocia | 0017 (TDV) | 1: Aksaray | 2 |
| Lycia et Pamphylia | 0043 (TDV «Lidya-Pamfilya», Likya-Pamfilya kastı) | 4: Antalya, Kaş, Fethiye, Patara | 3 |
| Pontus Polemoniacus | 0063 (TDV «Trabzon»: Nero, 63) | 3: Trabzon, Giresun, Rize | 2 |
| Cilicia Pedias | -0062 (MÖ 63, TDV); Arap 637 (TDV Tarsus 16/637); Bizans 965 (TDV Tarsus 354/965); Tarsus 1082 (TDV, Süleyman Şah) | 3: Tarsus, Adana, Misis | 6 |

**EK TUR (KASA kararları, aynı gün):**
- **1071 yeniden sınıflama:** ilk turda yazılan 16 beyanlı 1071 boşluğundan **11'i kıyı/liman şehri** olduğundan kaldırıldı: İzmir, Milas, Balat, Datça, Bursa, İznik, Antalya, Kaş, Fethiye, Patara → Bizans mevcut sonraki dilimin başına kadar **uzatıldı** (10 yerleşim; 1261-07-25 / 1281-01-01 / 1078 / 1207-03-05; Patara'da kaydın `bit` ufku 1281). Adana → TDV «Misis»: Süleyman Şah 1083 (Bizans 965-1083, boşluk 1083-1184, yeni 1083 maddesi). İç Anadolu'da 1071 eşiği kaldı (5): Konya, Yalvaç, Uluborlu, Eğirdir, Beyşehir. 4 kıyı 1071 maddesi silindi. Kıyıda Bizans uzatması Türk/Haçlı/Latin/İznik el değişimlerini yazmaz (beyanlı); bu, şehre özgü TDV fetih yıllarının ayrı işidir.
- **Likya MS 43:** TDV «Lidya-Pamfilya» yazım hatası KASA kararıyla kabul (ic_not'ta). İkinci kaynak denendi, **teyit edilemedi**: Cassius Dio 60.17 (lexundria.com) Lykialıların köleleştirilip Pamphylia idaresine bağlanışını anlatır ama yıl vermez; Suetonius Claud. 25.3 yıl vermez; Stadiasmus Patarensis / Q. Veranius (43-48) yalnız ikincil özetlerde görüldü; Austriaca makale PDF'i okunamadı. TDV yılı esas, beyanlı.
- **Frigya:** yalnız **Kütahya** (Kotiaion): TDV Kütahya «MÖ I. – MS IV. yüzyıllarda Roma hâkimiyeti» → -0099 (yüzyıl başı kabulü, beyanlı) → imp → bizans 395 → 1000. Eskişehir, Uşak, Dinar, Akşehir **yazılmadı**: TDV Roma yılı vermiyor (Eskişehir/Frigya maddeleri), Cicero Pro Flacco kesitinden Asia eşlemesi çıkarılamadı, Uşak (Temenouthyrai) Pleiades ilk tanığı MÖ 30.
- **Paflagonya:** yalnız **Çankırı** (Gangra): TDV Çankırı «önce Galatya, sonra Paflagonya» (yıl yok) → Galatia MÖ 25 (beyanlı) → bizans 395 → 1071 (TDV Çankırı: Malazgirt'ten sonra Türklerin eline geçti; iç şehir) → boşluk 1129. Bartın/Zonguldak (Pleiades ilk tanık MÖ 30), Kastamonu/Safranbolu/Amasra (Pleiades eşleşmesi yok) yazılmadı; TDV Paflagonya maddesi tam metin vermedi.
- Sonuç: bbox 386 → **384**; toplam doldurulan 37; yeni madde 23 → 25 (dosyada toplam 73; −4 kıyı 1071, +1 Adana 1083, +2 Kütahya, +3 Çankırı: ilhak/395/1071).

Abi merkez (kaynakta «ABİ MERKEZ: … zincir X'ten devralındı», BEYANLI YAKLAŞIKLIK): Asia→Efes, Bithynia→İzmit, Galatia→Ankara, Cappadocia→Kayseri, Lycia→Patara, Pontus→Trabzon, Cilicia→Tarsus. 395 payı şehre özgü tanıklı değil (Doğu payı kabulü, beyanlı).
Diocletianus bölünmesi (293/297) eyalet bölünmesidir, sahip değiştirmez: ayrı kırılma yazılmadı. Bu bir karar; Değişmez 2 evrenine girmez.

## 3. Atlananlar ve nedeni
- **Pleiades ilk tanığı MÖ 30 olanlar** (ilhaktan önce varlık tanığı yok): Tire (Thyaira), Birgi (Dios Hieron), Isparta (Baris), Finike (Phoinix), Karamürsel (Prainetos).
- **Phrygia kentleri** (Kütahya/Kotiaion, Eskişehir/Dorylaion, Uşak/Temenouthyrai, Dinar/Apameia): Asia'ya geçiş yılı (MÖ 133/129, 116 Mithridates, 85 Sulla) ve Galatia payı belirsiz; eyalet-içi tarih okunmadı. Akşehir (Philomelion, Galatia/Phrygia Paroreios?) aynı nedenle.
- **Paphlagonia** (Çankırı/Gangra, Bartın, Zonguldak): TDV Anadolu Paflagonya için Roma yılı vermez (Galatia'ya MÖ 6/5 bilgisi okunmadı). **Pontus Galaticus** (Amasya, Zile, Sivas, Tokat, Ünye, Samsun): Galatia/Kapadokya/Bithynia et Pontus payı ve Polemon dönemi okunmadı.
- **Cilicia Tracheia** (Silifke, Alanya, Mersin): MS 72 ilhakı (Antiokhos IV) okunmadı. **Commagene/Syria** (Maraş, Samsat, Münbiç, Birecik, Gaziantep…): Syria kümesi (MS 72) ayrı iş. **Armenia Minor, Eski Malatya (Melitene)**: Strabon 12.1.4 okunmadı; Armenia Major (Erzurum, Erzincan, Van) Roma sahipliği kısa/değişken, yazılmadı. **Mezopotamya** (Harran, Nusaybin, Diyarbakır): ayrı eyalet kümesi.
- Pleiades eşleşmesi >3 km ya da yalnızca «Hellenistic-republican» dönemli (Çanakkale/Abydos 5,2 km, Balıkesir/Hadrianoutherai Hadrianus kuruluşu, Ayvalık, Söke, Muğla, Kırkağaç, Soma, İnegöl, Kandıra).
- Edremit/Thebe, Kuşadası/Pygela, Lapseki/Lampsakos gibi «BAtlas cited» kayıtlarda Roma tanığı yalnız Pleiades zaman anahtarıdır; kentin Roma kasabası olarak niteliği okunmadı.

## 4. Ölçülemeyenler / riskler
1. Tam `denetle.py` (Değişmez 2/2s/3/8) ve çeviri eşitliği ölçülmedi. 23 yeni madde yalnız Türkçe ⇒ `ceviri.py` tavanı kapıda yükselebilir (sonradan raporlanır). Değişmez 2s eşleşmesi tarih birimindedir (her kırılma gününde `yer`'inde en az bir kırılan yerleşimi anan madde var); kapıda doğrulanmalı.
2. 1071-01-01 kırılması Malazgirt'in şehir fethi olmadığı hâlde «bölgesel çözülme eşiği» olarak alındı (BEYANLI). 16 yerleşimde (14 + Patara + Adana) Bizans sürekliliği 1071'e kadar, sonrası beyanlı boşluk; şehre özgü Türk fetih yılı (TDV şehir maddeleri) ayrı iş. İzmir/Bursa/Antalya gibi kayıtlarda mevcut ilk dilim (1261/1207) boşluğu kapatır.
3. 17 yerleşimde (Manisa, Aydın, Alaşehir, Akhisar, Ayasuluk, Edremit, Lapseki, Kuşadası, Sart, Bolu, Mudanya, Gemlik, Ereğli, Aksaray, Trabzon, Giresun, Rize; Misis ayrıca 1000'e bağlandı) Bizans, mevcut kaydın ufuk sınırına (1000/1281) kadar sürekli yazıldı: Sâsânî 611-628, Arap akınları ve 1071 sonrası Türk ilerlemesi okunmadı; mevcut kayıtlar (örn. Ayasuluk 1071 boşluğu) kendi dilimlerinde sürer.
4. Misis: TDV «Misis» md. Bizans geri alışı için 15 Temmuz 965 günü verir; yazılan uç 965-01-01 (Tarsus TDV yılı). Adana için TDV Misis 1083 Selçuklu fethini anar; Adana 1071 + boşluk kalmıştır.
5. Doğu Akdeniz dalındaki bir hata ya da çakışma aranmadı; bu dal o dalın üstüne kuruludur.
6. Eksik nokta önerisi: yeni yerleşim noktası açılmadı. Roma çağında kritik ama atlasta noktası olmayan kentler (Nikomedia=İzmit mevcut; Ankyra mevcut; Pergamon mevcut; Kyzikos, Perge, Aspendos, Side, Pessinus, Tavium, Sebasteia, Nikopolis, Kommagene Zeugma) ayrı nokta işidir (Değişmez 1 kesitleri 1285'ten başlar).

## 5. Karar soruları
1. TDV Anadolu «43'te Lidya-Pamfilya»: Likya-Pamfilya kastı kabulü (yazım hatası) uygun mu?
2. Bizans sürekliliği için 1071 «Malazgirt eşiği» yaklaşımı kabul mü, yoksa şehir başına Türk fetih yılı (TDV) mi beklensin?
3. Phrygia / Paphlagonia / Pontus Galaticus / Cilicia Tracheia / Commagene için akademik eyalet-içi kaynak (Magie, Mitchell, CAH X-XI) tam metin erişimi olan makinede devam edilsin mi?
