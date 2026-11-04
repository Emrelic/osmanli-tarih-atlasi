# KASA-YER — YER-1104'ün KASA'ya teslim özeti

Ölçen: LAB SALI · 4 Kasım 2026 · `kasa_yer.py` (dal lab-1104-yer7; yer7 turu: kalan 13 KAYNAK-GEREK — Macar 3 MKL + TDV Erdel, Barcs Magyar Rendészet 2021, Thânesâr TDV kısmen, antik 6 Oxford (EMRELİC okuması), Nazilli/Gediz bulunamadı; ⑤ düzeltme önerileri. yer6 turu: 26 KAYNAK-GEREK sahipten 13'ü TDV ve bölge ansiklopedileriyle kaynaklandı — Hrvatska enciklopedija: Bileća, Slankamen; kalan 13 satırda denenen kaynak yazılı; Rumkale TDV tarifi + GeoNames ile konumlandı, İtil 'konum bilinmiyor'). Evren: kronolojinin `yer` alanında geçen, atlas yerleşimiyle eşleşmeyen 1.247 ad (`yer_sinifla.py`). EKSİK sınıfının **421 adının tamamı** işlendi (anılma sırasıyla, DUR listesi hariç; parti 1-3: 1-150, parti 4: 151-300, parti 5: 301-421).

**EMRELİC kararı (4 Kasım 2026):** olay maddesinde geçen ad o yılda var olan gerçek bir kasabaysa YERLEŞİM'dir ve ②'ye eklenir (Yanbolu, Nizip, Kumanova, Zenta, Thapsus, Pharsalus…); yalnız ova, geçit, tepe, ırmak, ordugâh gibi olay yerleri petek olmaz (③).

Zincir: mükerrer (normalleştirilmiş ad + 3 km) → Pleiades (antik) / TDV tarifi + GeoNames (İslâm dünyası) / CHGIS (Çin) / GeoNames beyanlı (öteki) → olay yeri ayrımı. **OSM dayanak değildir; yanlış nokta eksik noktadan kötüdür** — doğrulanmayan aday koordinatsız kalır. Yerleşim dosyalarına yazılmadı; uygulama KASA'nındır.

**Sayılar:** YAZIM eşlemesi 130 · eklenecek nokta 100 · olay yeri / yapı 102. Ayrıntı dosyaları: YAZIM.md, EKSIK-ADAY.md, TDV-KONUM.md, PLEIADES.md, KONUM4.md, KONUM5.md. Konumu doğrulanamayan yerleşim 6 (④).

## EMRELİC düzeltmesi: Stonehenge · Amada · Semna

- **Stonehenge → OLAY YERİ/YAPI:** anıt — Pleiades 509089189 placeTypes: cultural-landscape, archaeological-site, monument. Petek değil.
- **Amada → OLAY YERİ/YAPI:** tapınak — Pleiades 683591498 'Temple of Amada', placeTypes: temple-2 (III. Thutmose'un Amon-Re tapınağı). Yerleşim değil: maddenin (II. Amenhotep steli) toprağını Napata/Elefantin taşır. Petek değil.
- **Semne → YERLEŞİM (beyanlı):** Mısır sınır kalesi — Pleiades 795856 'Semna', placeTypes: fort. Orta Krallık garnizon kalesi (III. Sesostris steli kalenin kendisinde): EMRELİC kuralıyla yerleşim sayılır, BEYAN: 'kale-yerleşim (garnizon), sivil kasaba değil'. Pleiades konumu DARMC kaynaklı, hassasiyet 'unknown' — KASA haritada II. Şelale batı yakasıyla doğrular.

## ① YAZIM eşlemeleri — atlasta başka adla var (yeni nokta DEĞİL)

KASA: kronoloji maddesine hedefin `yer_id`'sini yazar ya da hedef kayda eş ad ekler. DOĞRULA satırları gözle onay ister.

| kronolojideki ad | anılma | atlas kaydı | güven | ölçüt |
|---|---|---|---|---|
| Budapeşte | 13 | Peşte | YÜKSEK | yer_sinifla (eş-ad / yazım oranı) |
| Endican | 9 | Andican | YÜKSEK | yer_sinifla (eş-ad / yazım oranı) |
| Ekbatana | 7 | Hemedan | YÜKSEK | yer_sinifla (eş-ad / yazım oranı) |
| Pergamon | 5 | Bergama | YÜKSEK | yer_sinifla (eş-ad / yazım oranı) |
| Sardes | 5 | Sart | YÜKSEK | yer_sinifla (eş-ad / yazım oranı) |
| Ktesifon | 3 | Ktesiphon | YÜKSEK | yer_sinifla (eş-ad / yazım oranı) |
| Syrakusai | 3 | Sirakuza | YÜKSEK | yer_sinifla (eş-ad / yazım oranı) |
| Tell al-ʿUbaid | 2 | Tell al-Ubaid | YÜKSEK | yer_sinifla (eş-ad / yazım oranı) |
| Diyarbekir | 2 | Diyarbakır | YÜKSEK | yer_sinifla (eş-ad / yazım oranı) |
| Szigetvár | 2 | Zigetvar | YÜKSEK | yer_sinifla (eş-ad / yazım oranı) |
| Aleşki | 2 | Aleşki Seçi | DOĞRULA | yer_sinifla (eş-ad / yazım oranı) |
| Kahire önü | 1 | Kahire | YÜKSEK | yer_sinifla (eş-ad / yazım oranı) |
| Yanya gölü | 1 | Yanya | YÜKSEK | yer_sinifla (eş-ad / yazım oranı) |
| Menzile gölü | 1 | Menzile | YÜKSEK | yer_sinifla (eş-ad / yazım oranı) |
| Süveyş berzahı | 1 | Süveyş | YÜKSEK | yer_sinifla (eş-ad / yazım oranı) |
| Thessalonike | 1 | Selanik | YÜKSEK | yer_sinifla (eş-ad / yazım oranı) |
| Thebai | 1 | İstefe (Tebai) | DOĞRULA | yer_sinifla (eş-ad / yazım oranı) |
| Thebai (Boiotia) | 1 | İstefe (Tebai) | DOĞRULA | yer_sinifla (eş-ad / yazım oranı) |
| Bizantion | 1 | İstanbul | YÜKSEK | yer_sinifla (eş-ad / yazım oranı) |
| Selinus | 1 | Selinous (Selinunte) | DOĞRULA | yer_sinifla (eş-ad / yazım oranı) |
| Megara | 1 | Megara Hyblaia (Megara Hyblaea) | DOĞRULA | yer_sinifla (eş-ad / yazım oranı) |
| Seleukeia Pieria | 1 | Seleukeia | YÜKSEK | yer_sinifla (eş-ad / yazım oranı) |
| Ekbatana (Hamedan) | 1 | Hemedan | YÜKSEK | yer_sinifla (eş-ad / yazım oranı) |
| Lothagam North Pillar Site | 1 | Lothagam North | DOĞRULA | yer_sinifla (eş-ad / yazım oranı) |
| Mal'ta | 1 | Malta | DOĞRULA | yer_sinifla (eş-ad / yazım oranı) |
| Irkutsk Oblast | 1 | İrkutsk | YÜKSEK | yer_sinifla (eş-ad / yazım oranı) |
| Carthago | 1 | Cartago (Kosta Rika) | DOĞRULA | yer_sinifla (eş-ad / yazım oranı) |
| Hallan Çemi Tepesi | 1 | Hallan Çemi | DOĞRULA | yer_sinifla (eş-ad / yazım oranı) |
| Tirol | 1 | Tirol Kalesi (Tirolo) | DOĞRULA | yer_sinifla (eş-ad / yazım oranı) |
| Aricia (Latium) | 1 | Arica | DOĞRULA | yer_sinifla (eş-ad / yazım oranı) |
| Ebukır koyu | 1 | Ebûkîr | YÜKSEK | yer_sinifla (eş-ad / yazım oranı) |
| İstanbul surları | 1 | İstanbul | YÜKSEK | yer_sinifla (eş-ad / yazım oranı) |
| Necid güneybatısı | 1 | Dir'iye (Necid) | YÜKSEK | yer_sinifla (eş-ad / yazım oranı) |
| Sevâkin ardalanı | 1 | Sevâkin | YÜKSEK | yer_sinifla (eş-ad / yazım oranı) |
| Tilsit | 1 | Tişît (Tichitt) | DOĞRULA | yer_sinifla (eş-ad / yazım oranı) |
| Belen Geçidi | 1 | Belén | YÜKSEK | yer_sinifla (eş-ad / yazım oranı) |
| Konya Ereğlisi (Aktepe) ordugâhı | 1 | Konya | YÜKSEK | yer_sinifla (eş-ad / yazım oranı) |
| Kasrılkebir | 1 | Kasrülkebîr | DOĞRULA | yer_sinifla (eş-ad / yazım oranı) |
| Belgrad yakınları | 1 | Belgrad | YÜKSEK | yer_sinifla (eş-ad / yazım oranı) |
| Kazvin yakınları | 1 | Kazvin | YÜKSEK | yer_sinifla (eş-ad / yazım oranı) |
| Rusçuk karşısı | 1 | Rusçuk | YÜKSEK | yer_sinifla (eş-ad / yazım oranı) |
| Oltenitsa | 1 | Oltenița | DOĞRULA | yer_sinifla (eş-ad / yazım oranı) |
| Port Said | 1 | Portsaid | DOĞRULA | yer_sinifla (eş-ad / yazım oranı) |
| Süveyş Kanalı | 1 | Süveyş | YÜKSEK | yer_sinifla (eş-ad / yazım oranı) |
| Güneybatı Arabistan | 1 | Avustralya İç Kesimi (Güney — Nullarbor/Güneybatı) | YÜKSEK | yer_sinifla (eş-ad / yazım oranı) |
| Bursa yakınları | 1 | Yenişehir (Bursa) | YÜKSEK | yer_sinifla (eş-ad / yazım oranı) |
| İstanbul tersaneleri | 1 | İstanbul | YÜKSEK | yer_sinifla (eş-ad / yazım oranı) |
| Cibali | 1 | Cibâl | DOĞRULA | yer_sinifla (eş-ad / yazım oranı) |
| Talış (Lenkeran-Astara) | 1 | Talmis | DOĞRULA | yer_sinifla (eş-ad / yazım oranı) |
| Şarkıyye | 1 | Bilbîs (Şarkiye) | DOĞRULA | yer_sinifla (eş-ad / yazım oranı) |
| Hartum karşısı | 1 | Hartum | YÜKSEK | yer_sinifla (eş-ad / yazım oranı) |
| Mersâ (La Marsa) | 1 | Mersâ Matruh | DOĞRULA | yer_sinifla (eş-ad / yazım oranı) |
| Ozark yaylası | 1 | Springfield (Missouri, Ozark) | YÜKSEK | yer_sinifla (eş-ad / yazım oranı) |
| Milyâne | 1 | Miyâne | DOĞRULA | yer_sinifla (eş-ad / yazım oranı) |
| Dihistan | 1 | Dihistan ovası (Meşhed-i Misriyân) | DOĞRULA | yer_sinifla (eş-ad / yazım oranı) |
| İznik yöresi | 1 | İznik | YÜKSEK | yer_sinifla (eş-ad / yazım oranı) |
| Niksar yolu | 1 | Niksar | YÜKSEK | yer_sinifla (eş-ad / yazım oranı) |
| Eskişehir yöresi | 1 | Eskişehir | YÜKSEK | yer_sinifla (eş-ad / yazım oranı) |
| Samsun yöreleri | 1 | Samsun | YÜKSEK | yer_sinifla (eş-ad / yazım oranı) |
| Yedisan | 1 | Yedisan bozkırı | DOĞRULA | yer_sinifla (eş-ad / yazım oranı) |
| Orkapı (Perekop) | 1 | Or Kapı (Ferahkirman) | DOĞRULA | yer_sinifla (eş-ad / yazım oranı) |
| Arabat oku | 1 | Arabat | YÜKSEK | yer_sinifla (eş-ad / yazım oranı) |
| Pelusium | 5 | Feremâ (yeni nokta değil) | YÜKSEK | eksik_aday (Pleiades ≤ 1 km ya da elle) |
| Karkemiş | 5 | Cerablus (yakın ama ayrı höyük — KASA karar) (yeni nokta değil) | DOĞRULA | eksik_aday (Pleiades ≤ 1 km ya da elle) |
| Ix-Xagħra | 2 | Xagħra (Brochtorff Çemberi) (yeni nokta değil) | YÜKSEK | eksik_aday (Pleiades ≤ 1 km ya da elle) |
| Nekhen | 2 | Hierakonpolis HK11C (Naqada IC-IIB iskan) (0.0 km) (Pleiades noktası atlas kaydına ≤ 1 km — aynı yer) | YÜKSEK | eksik_aday (Pleiades ≤ 1 km ya da elle) |
| Tell Mureybet (Mureybit) | 2 | Mureybet (0.0 km) (Pleiades noktası atlas kaydına ≤ 1 km — aynı yer) | YÜKSEK | eksik_aday (Pleiades ≤ 1 km ya da elle) |
| Tell Abu Hureyra | 2 | Ebu Hureyre (Abu Hureyra) (0.7 km) (Pleiades noktası atlas kaydına ≤ 1 km — aynı yer) | YÜKSEK | eksik_aday (Pleiades ≤ 1 km ya da elle) |
| Hüfûf | 1 | Lahsa (yeni nokta değil) | YÜKSEK | eksik_aday (Pleiades ≤ 1 km ya da elle) |
| Cirta (Konstantine) | 1 | Konstantin (yeni nokta değil) | YÜKSEK | eksik_aday (Pleiades ≤ 1 km ya da elle) |
| Ambrakia | 1 | Arta (0.8 km) (Pleiades noktası atlas kaydına ≤ 1 km — aynı yer) | YÜKSEK | eksik_aday (Pleiades ≤ 1 km ya da elle) |
| Cirta | 1 | Konstantin (0.4 km) (Pleiades noktası atlas kaydına ≤ 1 km — aynı yer) | YÜKSEK | eksik_aday (Pleiades ≤ 1 km ya da elle) |
| Beneventum (Samnium) | 1 | Benevento (0.3 km) (Pleiades noktası atlas kaydına ≤ 1 km — aynı yer) | YÜKSEK | eksik_aday (Pleiades ≤ 1 km ya da elle) |
| Teb | 3 | Uksur (Luksor) (2.6 km) | YÜKSEK | pleiades_tur (Pleiades ≤ 3 km) |
| Efes | 3 | Ayasuluk (Selçuk) (2.7 km) | YÜKSEK | pleiades_tur (Pleiades ≤ 3 km) |
| Elefantin | 2 | Asvan (1.0 km) | YÜKSEK | pleiades_tur (Pleiades ≤ 3 km) |
| Qalʿat Sherqat | 2 | Aşşur (0.4 km) | YÜKSEK | pleiades_tur (Pleiades ≤ 3 km) |
| Lysimakheia (Gelibolu Yarımadası) | 1 | Bolayır (1.8 km) | YÜKSEK | pleiades_tur (Pleiades ≤ 3 km) |
| Baktra | 1 | Belh (1.2 km) | YÜKSEK | pleiades_tur (Pleiades ≤ 3 km) |
| Halikarnassos | 1 | Bodrum (0.7 km) | YÜKSEK | pleiades_tur (Pleiades ≤ 3 km) |
| Teb (Boiotia) | 1 | İstefe (Tebai) (0.3 km) | YÜKSEK | pleiades_tur (Pleiades ≤ 3 km) |
| Nisibis | 1 | Nusaybin (1.1 km) | YÜKSEK | pleiades_tur (Pleiades ≤ 3 km) |
| Khalkedon | 1 | Kadıköy (1.0 km) | YÜKSEK | pleiades_tur (Pleiades ≤ 3 km) |
| Lysimakheia (Trakya kıyısı) | 1 | Bolayır (1.8 km) | YÜKSEK | pleiades_tur (Pleiades ≤ 3 km) |
| Milet | 1 | Balat (Palatia) (2.2 km) | YÜKSEK | pleiades_tur (Pleiades ≤ 3 km) |
| Ragai | 1 | Rey (0.0 km) | YÜKSEK | pleiades_tur (Pleiades ≤ 3 km) |
| Aşkelon | 1 | Askalân (0.0 km) | YÜKSEK | pleiades_tur (Pleiades ≤ 3 km) |
| Hisarlık | 1 | Truva yöresi (Tevfikiye) (0.1 km) | YÜKSEK | pleiades_tur (Pleiades ≤ 3 km) |
| Qart-ḥadašt | 1 | Kartaca (Carthage) (0.1 km) | YÜKSEK | pleiades_tur (Pleiades ≤ 3 km) |
| Alexandreia | 1 | İskenderiye (1.7 km) | YÜKSEK | pleiades_tur (Pleiades ≤ 3 km) |
| Marakanda | 1 | Semerkant (2,5 km) | DOĞRULA | eksik_aday Pleiades noktası ≤ 3 km (yeniden ölçüldü) |
| Emesa | 1 | Humus (1,2 km) | DOĞRULA | eksik_aday Pleiades noktası ≤ 3 km (yeniden ölçüldü) |
| Hippo Regius (Numidia) | 1 | Annaba (2,4 km) | DOĞRULA | eksik_aday Pleiades noktası ≤ 3 km (yeniden ölçüldü) |
| Philae (Birinci Şelale) | 1 | Philae — ② eklenecek noktayla aynı yer (Pleiades 786089), tek nokta | DOĞRULA | eksik_aday Pleiades noktası ≤ 3 km (yeniden ölçüldü) |
| Tell Tweini (Gibala) | 1 | Cebele (Jablah) (1,5 km) | DOĞRULA | eksik_aday Pleiades noktası ≤ 3 km (yeniden ölçüldü) |
| Alexandria | 1 | İskenderiye | YÜKSEK | konum4 (elle / ≤ 3 km) |
| Ninua | 1 | Ninova | YÜKSEK | konum4 (elle / ≤ 3 km) |
| Nīnawā | 1 | Ninova | YÜKSEK | konum4 (elle / ≤ 3 km) |
| Jebel Barkal | 1 | Merevî | DOĞRULA | konum4 (elle / ≤ 3 km) |
| Buda | 1 | Aquincum-Óbuda-Pest | DOĞRULA | konum4 (elle / ≤ 3 km) |
| Kerkyra | 1 | Korfu | YÜKSEK | konum4 (elle / ≤ 3 km) |
| Khalkis (Euboia) | 1 | Eğriboz | YÜKSEK | konum4 (elle / ≤ 3 km) |
| Rhegion | 1 | Reggio Calabria | YÜKSEK | konum4 (elle / ≤ 3 km) |
| Korkyra | 1 | Korfu | YÜKSEK | konum4 (elle / ≤ 3 km) |
| Gadir | 1 | Cádiz | YÜKSEK | konum4 (elle / ≤ 3 km) |
| Kût | 1 | Kût el-Amâre | YÜKSEK | konum4 (elle / ≤ 3 km) |
| Morača ile Ribnica'nın kavuştuğu yer | 1 | Podgorica | YÜKSEK | konum4 (elle / ≤ 3 km) |
| Parkan | 1 | Estergon | DOĞRULA | konum4 (elle / ≤ 3 km) |
| Halil | 1 | Hebron | YÜKSEK | konum4 (elle / ≤ 3 km) |
| Serav (Serâb) | 1 | Sarâb | DOĞRULA | konum4 (elle / ≤ 3 km) |
| Sirem | 1 | Varadin (Petrovaradin) | DOĞRULA | konum4 (elle / ≤ 3 km) |
| Uşi (Ouchy) | 1 | Lozan | YÜKSEK | konum4 (elle / ≤ 3 km) |
| Sèvres | 1 | Sevr | YÜKSEK | konum5 (elle / ≤ 3 km) |
| Tagdempt | 1 | Tâhert (Tiaret) | DOĞRULA | konum5 (elle / ≤ 3 km) |
| Ümmüdurman (Omdurman) | 1 | Ümmü Dermân | DOĞRULA | konum5 (elle / ≤ 3 km) |
| Meksiko | 1 | Tenochtitlan (Mexico City) | YÜKSEK | konum5 (elle / ≤ 3 km) |
| Rey şehri | 1 | Rey | YÜKSEK | konum5 (elle / ≤ 3 km) |
| Berdesîr (Kirman'ın kuzey merkezi) | 1 | Kirman | DOĞRULA | konum5 (elle / ≤ 3 km) |
| Dânişmendli şehirleri: Kayseri | 1 | Kayseri | YÜKSEK | konum5 (elle / ≤ 3 km) |
| Tinmellel | 1 | Tinmel (Tin Mal) | YÜKSEK | konum5 (elle / ≤ 3 km) |
| Selâ (Salé) | 1 | Selâ | YÜKSEK | konum5 (elle / ≤ 3 km) |
| Talas | 1 | Taraz (Evliya-Ata) | YÜKSEK | konum5 (elle / ≤ 3 km) |
| Şâş | 1 | Taşkent | YÜKSEK | konum5 (elle / ≤ 3 km) |
| Yanbolu | 1 | Yanbolu (Yambol) | YÜKSEK | konum5 (elle / ≤ 3 km) |
| Eski Hırsova | 1 | Hırsova (Hârșova) | YÜKSEK | konum5 (elle / ≤ 3 km) |
| Kalafat | 1 | Calafat | DOĞRULA | konum5 (elle / ≤ 3 km) |
| Çortomlık burnu | 1 | Çortomlık Seçi | DOĞRULA | konum5 (elle / ≤ 3 km) |
| Szászsebes | 1 | Szászsebes (Sebeş) | YÜKSEK | konum5 (elle / ≤ 3 km) |
| Karánsebes | 1 | Karánşebeş (Caransebeş) | YÜKSEK | konum5 (elle / ≤ 3 km) |
| Kraków | 1 | Krakov | DOĞRULA | konum5 (elle / ≤ 3 km) |

## ② Eklenecek noktalar — atlasta 3 km içinde nokta yok

İlk sahip = maddenin tarihindeki sahip, maddenin ya da TDV'nin kaynağıyla. 'künye' sütunu: sahip kimliği devletler.js'te var mı, tarih künyenin f/t'si içinde mi (ölçüldü). KAYNAK-GEREK satırlarında sahip bir adaydır — KASA kaynakla teyit etmeden `s:` yazmamalı.

| ad | koordinat (lat, lon) | koordinat dayanağı | ilk sahip | tarih | sahip zinciri | sahip kaynağı | güven | künye | parti |
|---|---|---|---|---|---|---|---|---|---|
| Karlofça | 45.20278, 19.93361 | beyanlı konum (GeoNames; ad + ülke maddeyle tutuyor) — Sremski Karlovci (alt adlar arasında Karlofça), Sırbistan, Voyvodina · https://www.ge | OSMANLI | 1521-08 | Macar kalesi → Osmanlı (927 Ramazan / Ağustos 1521, Belgrad'ın fethi sırasında Sirem kaleleriyle) → Avusturya 1687 (yıl) → 1699-01-26 antlaşmayla resmen Avusturya'ya | TDV «Karlofça» (DİA 24, s. 504) | KAYNAKLI (ay/yıl) | d: OSMANLI | parti 1-3 (TDV-KONUM) |
| Arad | 46.18333, 21.31667 | beyanlı konum (GeoNames; ad + ülke maddeyle tutuyor) — Arad, Romanya, Arad ili merkezi · https://www.geonames.org/686254/arad.html | macaristan-habsburg | 1849-08-13 | vár 1177'de ilk anılır → 1551-1688 Osmanlı ('a törökök kezén volt') → Habsburg → 1849'da honvéd ordusu altı aylık kuşatmadan sonra kaleyi aldı → Világos teslimi (13.8.1849) sonrası Habsburg; 6.10.1849 Arad şehitleri. 1848-49 Macar ihtilâl hükûmetinin künyesi devletler.js'te YOK | MKL «Arad» | KAYNAKLI (yıl) — ihtilâl dönemi KÜNYE GEREK | künye içinde (1526-12-17 → 1918-11-16) | parti 1-3 (TDV-KONUM) |
| Nukuʻalofa | -21.13667, -175.20111 | beyanlı konum (GeoNames; ad + ülke maddeyle tutuyor) — Nuku'alofa, Tonga başkenti · https://www.geonames.org/4032402/nuku-alofa.html | tonga-kralligi | 1893-02-18 | Tonga Krallığı başkenti | madde kaynağı (Britannica; Wood-Ellem 1999) | KAYNAKLI (madde) | künye içinde (1845-12-04 → ) | parti 1-3 (TDV-KONUM) |
| Otrar | 42.91333, 68.34361 | beyanlı konum (GeoNames; ad + ülke maddeyle tutuyor) — Otrar (Otyrar), Kazakistan, Türkistan ili — yerleşim; antik höyük (Otyrar-tobe) yakın | harizmsah | 1218-01-01 | Hârizmşahlar → Moğol (mogol-imparatorlugu) 1219 sonu (TDV: 'Otrar, Sığnak ve Hucend… düştü') | TDV «Hârizmşahlar» | KAYNAKLI (yıl) | künye içinde (1097-01-01 → 1231-01-01) | parti 1-3 (TDV-KONUM) |
| Çayeli | 41.08583, 40.72194 | beyanlı konum (GeoNames; ad + ülke maddeyle tutuyor) — Çayeli (Mapavri), Türkiye, Rize · https://www.geonames.org/749502/cayeli.html | OSMANLI | 1916-03-08 | Osmanlı (Rize sancağı) → Rus işgali 1916-03-08 → Osmanlı 1918-03-02; ABİ MERKEZ: Rize — madde kaynağı Çaykıran 2021 (Askerî Tarih Araştırmaları Dergisi) Rize'yi tarihler | Çaykıran 2021 (madde) + ABİ MERKEZ beyanı | BEYANLI YAKLAŞIKLIK | d: OSMANLI | parti 1-3 (TDV-KONUM) |
| Bucaş | 49.06222, 25.39472 | beyanlı konum (GeoNames; ad + ülke maddeyle tutuyor) — Buchach (Bucac), Ukrayna, Ternopil · https://www.geonames.org/711348/buchach.html | lehistan | 1672-10-18 | Lehistan palankası; Osmanlı 3 Ekim 1672'de kuşattı, antlaşmada 'Podolya ülkesi dışında' olduğu için Lehistan'a iade edildi, yeniçeriler kaleden çıktı | TDV «Bucaş Antlaşması» | KAYNAKLI | künye içinde (1569-07-01 → 1795-10-24) | parti 1-3 (TDV-KONUM) |
| Küçük Kaynarca | 43.99278, 27.50694 | beyanlı konum (GeoNames; ad + ülke maddeyle tutuyor) — Kaynardzha, Bulgaristan, Silistre · https://www.geonames.org/730504/kaynardzha.html | OSMANLI | 1774-07-21 | Silistre yöresi köyü; ABİ MERKEZ: Silistre | TDV «Küçük Kaynarca Antlaşması» (madde) | BEYANLI YAKLAŞIKLIK (köyün zinciri Silistre'den) | d: OSMANLI | parti 1-3 (TDV-KONUM) |
| Sevr | 48.82278, 2.21750 | beyanlı konum (GeoNames; ad + ülke maddeyle tutuyor) — Sèvres (alt ad Sevr), Fransa, Hauts-de-Seine (ilk sorgu Deux-Sèvres/Niort verdi — ell | fransa-cumhuriyet | 1920-08-10 | Fransa (III. Cumhuriyet); antlaşma günü TDV «Sevr Antlaşması» — madde t 1920-04 ay hassasiyetinde, KASA gününü düzeltmeli | TDV «Sevr Antlaşması» | KAYNAKLI (ülke dışı nokta) | künye içinde (1792-09-22 → ) | parti 1-3 (TDV-KONUM) |
| Tepedelen | 40.29583, 20.01917 | beyanlı konum (GeoNames; ad + ülke maddeyle tutuyor) — Tepelenë, Arnavutluk · https://www.geonames.org/781443/tepelene.html | OSMANLI | 1820-03-01 | Osmanlı Yanya paşalığı (Tepedelenli Ali Paşa'nın memleketi) | TDV «Tepedelenli Ali Paşa» (K. Beydilli) | KAYNAKLI (madde) | d: OSMANLI | parti 1-3 (TDV-KONUM) |
| Karánşebeş (Caransebeş) | 45.41667, 22.21667 | beyanlı konum (GeoNames; ad + ülke maddeyle tutuyor) — Caransebeş, Romanya, Caraș-Severin · https://www.geonames.org/682729/caransebes.html | OSMANLI | 1552-08-01 | 1552 Temeşvar seferinde fethedildi (öncesi Macar/Habsburg — KAYNAK-GEREK) | TDV «Tımışvar» (madde) | KAYNAKLI (ay; öncül sahip KAYNAK-GEREK) | d: OSMANLI | parti 1-3 (TDV-KONUM) |
| Kalhu (Nimrud) | 36.10086, 43.32946 | Pleiades https://pleiades.stoa.org/places/57783830 (Kalhu Archive 17) | orta-asur | -1259-01-01 | I. Şalmaneser kurdu (13. yy ortası) → 'In 883 bc, under Ashurnasirpal II, it became the Assyrian capital' (yeni-asur) → yıkım 'In 614–612 bce, Nimrud,…' (bit: -0611 = MÖ 612, BEYAN: kaynak 614-612 aralığı, tek yıl teyit edilmedi) | Concise Oxford Dictionary of Archaeology, 3. bs. 2021, «Nimrud»; Oxford Encyclopedia of Archaeology in the Near East, 2011 (yıkım) (Oxford, EMRELİC okuması — yalnız alıntı); Livius | KAYNAKLI (bit: aralık beyanlı) | künye içinde (-1362-01-01 → -0910-01-01) | antik tur (PLEIADES) |
| Nikopolis (Doğu Pontus) | 40.14856, 38.14353 | Pleiades https://pleiades.stoa.org/places/857248 (Nicopolis) | roma-cumhuriyeti | -0065-01-01 | Pompeius'un Mithridates'e zaferinin yerinde kurduğu şehir | Plutarkhos, Pompeius 32-36; Appianos, Mithridatika 97-100 (madde) | KAYNAKLI (yıl) | künye içinde (-0508-01-01 → -0026-01-16) | antik tur (PLEIADES) |
| Sikyon | 37.98449, 22.70941 | Pleiades https://pleiades.stoa.org/places/807215246 (Ancient Stadium of Sikyon) | akhaia-birligi | -0250-01-01 | Sikyon tiranlığı → Aratos Akhaia Birliği'ne kattı | Polybios 2.43; Plutarkhos, Aratos 4-9 | KAYNAKLI (yıl; öncül tiranlık künyesi yok) | künye içinde (-0279-01-01 → -0145-01-01) | antik tur (PLEIADES) |
| Argos | 37.63041, 22.72167 | Pleiades https://pleiades.stoa.org/places/84693646 (Ancient Agora of Argos) | antigonid-makedonya | -0271-01-01 | bağımsız polis; 323 sonrası Makedon (Antigonos Gonatas) denetimi → 'In 229 bce Argos entered the Achaean League' (akhaia-birligi). Denetim ilhak değil: KASA v: düşünmeli | Oxford Encyclopedia of Ancient Greece and Rome; OCD4 «Aratus (2)» (Oxford, EMRELİC okuması — çift) | KAYNAKLI (aralık) — denetim/ilhak ayrımı beyanlı | künye içinde (-0275-01-01 → -0167-01-01) | antik tur (PLEIADES) |
| Ithome (Messene) | 37.17784, 21.91891 | Pleiades https://pleiades.stoa.org/places/596063692 (Theatre of Messene) | — | -0369-01-01 | Messene kuruldu, bağımsız Messenia (Teb himayesi) — devletler.js'te Messenia künyesi yok | Diodoros 15.66; Pausanias 4.26-27; Cartledge 2002 | KAYNAKLI, KÜNYE YOK | — | antik tur (PLEIADES) |
| Eleusis (Attika) | 38.03974, 23.53847 | Pleiades https://pleiades.stoa.org/places/915090919 ("Gymnasium" at Eleusis) | atina-demokrasisi | -0504-01-01 | Attika demi | Herodotos 5.74-76 | KAYNAKLI (yıl) | künye içinde (-0507-01-01 → -0337-01-01) | antik tur (PLEIADES) |
| Philae | 24.02526, 32.88414 | Pleiades https://pleiades.stoa.org/places/786089 (Philae) | roma-cumhuriyeti | -0028-01-01 | Ptolemaios sonrası Roma Mısır'ı (prefekt Gallus); roma-imp künyesi -0026'da başlar | Cassius Dio 51.17; Strabon (madde) | KAYNAKLI (yıl) | künye içinde (-0508-01-01 → -0026-01-16) | antik tur (PLEIADES) |
| Beth-Shean | 32.50128, 35.50164 | Pleiades https://pleiades.stoa.org/places/719634078 (Roman theater of Scythopolis) | misir-yeni-krallik | -1293-01-01 | I. Seti'nin Kenan seferi; Mısır garnizon şehri | Breasted, ARE c.3 §§ 80-156 (madde) | KAYNAKLI (yıl) | künye içinde (-1549-01-01 → -1068-01-01) | antik tur (PLEIADES) |
| Akhetaton | 27.64410, 30.89818 | Pleiades https://pleiades.stoa.org/places/149576487 (Amarna) | misir-yeni-krallik | -1347-01-01 | IV. Amenhotep'in yeni başkenti (kur); terk tarihi KAYNAK-GEREK (bit:) | Shaw 2000; Murnane-Van Siclen (madde) | KAYNAKLI (kur yılı) | künye içinde (-1549-01-01 → -1068-01-01) | antik tur (PLEIADES) |
| Semne | 21.50019, 30.96716 | Pleiades https://pleiades.stoa.org/places/795856 (Semna) | misir-orta-krallik | -1866-01-01 | III. Sesostris'in II. Şelale sınır kalesi | Breasted, ARE c.1 § 652 (madde) | KAYNAKLI (yıl) · BEYAN: kale-yerleşim (garnizon), sivil kasaba değil | künye içinde (-2054-01-01 → -1649-01-01) | antik tur (PLEIADES) |
| Lakiş | 31.56552, 34.84919 | Pleiades https://pleiades.stoa.org/places/687951 (Lachish) | yahuda | -0700-01-01 | Yahuda şehri → Sennacherib aldı (yeni-asur) | Livius «Assyria»; Luckenbill (madde) | KAYNAKLI (yıl) | künye içinde (-0929-01-01 → -0585-01-01) | antik tur (PLEIADES) |
| Kaneş (Kültepe) | 38.85006, 35.63763 | Pleiades https://pleiades.stoa.org/places/58129442 (Kaneš) | — | -1899-01-01 | Kaneş şehir devleti (Aşşur karumu -1899) → -1749 Kuşşara kralı Anitta'nın başkenti — künye yok (hitit künyesi sonra) | Veenhof & Eidem 2008 (OBO 160/5); Bryce 2005 s. 55-57 | KAYNAKLI, KÜNYE YOK | — | parti 1-3 (Pleiades) |
| Plataia | 38.22108, 23.27354 | Pleiades https://pleiades.stoa.org/places/541063 (Plataea) | — | -0478-01-01 | Boiotia'da Atina müttefiki polis — künye yok | Herodotos 9.58-70; Thukydides 2.1-2 | KAYNAKLI, KÜNYE YOK | — | parti 1-3 (Pleiades) |
| Thapsus (Tunus kıyısı) | 35.62137, 11.04271 | Pleiades https://pleiades.stoa.org/places/324827 (Thapsus) | roma-cumhuriyeti | -0045-01-01 | savaş MÖ 46 (Oxford Companion to Classical Literature); şehrin sahiplik zinciri okunmadı (Oxford tam metni abonelikte kilitli) | Bellum Africum 79-86; Oxford (EMRELİC okuması) | KAYNAKLI (savaş yılı); sahip zinciri BEYANLI | künye içinde (-0508-01-01 → -0026-01-16) | parti 1-3 (Pleiades — olay maddesindeki kasaba) |
| Pharsalus (Tesalya) | 39.28850, 22.38785 | Pleiades https://pleiades.stoa.org/places/541042 (Pharsalus) | roma-cumhuriyeti | -0047-01-01 | Tesalya kenti, MÖ 6. yy'dan Phthiotis'te baskın (OCD4, Helly); savaş MÖ 48 — Makedon/Roma yılları okunmadı (Oxford tam metni kilitli) | OCD4 «Pharsalus» (Oxford, EMRELİC okuması) | KAYNAKLI (ilk sahip polis, savaş yılı); Roma bağı BEYANLI | künye içinde (-0508-01-01 → -0026-01-16) | parti 1-3 (Pleiades — olay maddesindeki kasaba) |
| Alesia (Burgonya) | 47.53662, 4.50388 | Pleiades https://pleiades.stoa.org/places/177434 (Alesia) · oppidum | — | -0051-01-01 | Mandubii oppidumu (Galya) → Roma (Caesar) — künye yok | Caesar, Bellum Gallicum 7.68-89 | KAYNAKLI, KÜNYE YOK | — | parti 1-3 (Pleiades — olay maddesindeki kasaba) |
| Bibracte (Galya) | 46.92583, 4.03559 | Pleiades https://pleiades.stoa.org/places/177473 (Bibracte) · oppidum | — | -0057-01-01 | Aedui oppidumu — künye yok | Caesar, Bellum Gallicum 1.23 | KAYNAKLI, KÜNYE YOK | — | parti 1-3 (Pleiades — olay maddesindeki kasaba) |
| Utica | 37.05257, 10.05729 | Pleiades https://pleiades.stoa.org/places/907258690 (Roman theater at Utica) · BEYAN: Pleiades kaydı Utica tiyatrosu (907258690) — şehrin iç | kartaca | -0148-01-01 | Kartaca müttefik şehri → -149 Roma'ya teslim oldu | Appianos, Punika 75 (madde) | KAYNAKLI (yıl) | künye içinde (-0813-01-01 → -0145-01-01) | parti 1-3 (Pleiades) |
| Kimiata | 40.99420, 33.67864 | Pleiades https://pleiades.stoa.org/places/844982 (Kimiata) | pontus | -0301-01-01 | Mithridates Ktistes'in Paphlagonia'daki üssü | Strabon 12.3.41 (madde) | KAYNAKLI (yıl) — KÜNYE AŞIMI: pontus -0280'de başlıyor; aynı polity (Ktistes) → kural: künyeyi GENİŞLET, KASA kaynakla | **künye dışı** (-0280-01-01 → -0062-01-01) | parti 1-3 (Pleiades) |
| Tiryns | 37.59928, 22.79999 | Pleiades https://pleiades.stoa.org/places/570740 (Tiryns) | miken | -1199-01-01 | Miken saray merkezi → -1199 yıkım, saray sonrası yerel topluluk | Cline 2014; Dickinson 1994 | KAYNAKLI (yıl) | künye içinde (-1399-01-01 → -1099-01-01) | parti 1-3 (Pleiades) |
| Nola (Kampanya) | 40.92682, 14.52454 | Pleiades https://pleiades.stoa.org/places/961707395 (Temple of Divus Augustus (Nola)) · BEYAN: Pleiades kaydı Divus Augustus tapınağı (96170 | roma-imp | 0014-08-19 | Augustus'un öldüğü şehir | Suetonius, Divus Augustus 100; Tacitus, Annales 1.5 | KAYNAKLI | künye içinde (-0026-01-16 → 0395-01-17) | parti 1-3 (Pleiades) |
| Viminacium | 44.73801, 21.22003 | Pleiades https://pleiades.stoa.org/places/227495941 (Roman amphitheater at Viminacium) · BEYAN: Pleiades kaydı Viminacium amfitiyatrosu (227 | bizans | 0441-01-01 | Moesia (Doğu Roma) → 441 Hun (hun-avrupa) | Priskos fr. 2, 5 (Blockley) | KAYNAKLI (yıl) | künye içinde (0330-05-11 → 1453-05-29) | parti 1-3 (Pleiades) |
| Pselkis | 23.19571, 32.74935 | Pleiades https://pleiades.stoa.org/places/795846 (Pselchis) | kush-krallik | -0022-01-01 | Kush → Roma (Petronius aldı) | Strabon 17.1.53-54 | KAYNAKLI (yıl) | künye içinde (-0749-01-01 → 0349-01-01) | parti 1-3 (Pleiades) |
| Naukratis | 30.90051, 30.59193 | Pleiades https://pleiades.stoa.org/places/727169 (Naucratis) | ptolemai | -0168-01-01 | Ptolemaios Mısır'ı (Yunan ticaret şehri) | Polybios 28.20 | KAYNAKLI (yıl) | künye içinde (-0322-06-10 → -0029-08-01) | parti 1-3 (Pleiades) |
| Mareia | 30.99482, 29.65639 | Pleiades https://pleiades.stoa.org/places/727153 (Mareia?/Philoxenite) | ahamenis-misir | -0459-01-01 | Ahameniş Mısır'ı sınır kalesi (İnaros isyanı) | Thukydides 1.104 | KAYNAKLI (yıl) | künye içinde (-0524-01-01 → -0403-01-01) | parti 1-3 (Pleiades) |
| Momemphis | 30.79506, 30.60050 | Pleiades https://pleiades.stoa.org/places/727165 (Momemphis) | sait-26-hanedan | -0569-01-01 | Apries-Amasis savaşı | Herodotos 2.161-169 | KAYNAKLI (yıl) | künye içinde (-0663-01-01 → -0524-01-01) | parti 1-3 (Pleiades) |
| İpsos (Frigya) | 38.85619, 30.54921 | Pleiades https://pleiades.stoa.org/places/609415 (Ipsos) | antigonos-krallik | -0300-01-01 | Antigonos'un Frigya'sı; 'Antigonus the One-eyed was defeated and killed by Lysimachus and Seleucus I in 301 bc' (OCD «Ipsus», Lazenby) → ardıl: Frigya Lysimakhos'a (beyanlı, açıkça okunmadı), 'Later Seleucus gained Asia Minor' (Oxford Bible Atlas; MÖ 281 Kurupedion beyanlı) | OCD «Ipsus» (J. F. Lazenby); Oxford Bible Atlas (Oxford, EMRELİC okuması — yalnız alıntı); Diodoros 20.107-113 | KAYNAKLI (ilk sahip, savaş yılı); ardıl BEYANLI | künye içinde (-0305-01-01 → -0282-01-01) | parti 1-3 (Pleiades — olay maddesindeki kasaba) |
| Opis | 33.18440, 44.70150 | Pleiades https://pleiades.stoa.org/places/894056 (Opis) | yeni-babil | -0538-01-01 | Babil (Nabonid) → Pers (Kyros) | Nabonid Kroniği (ABC 7) iii.12-14, Grayson 1975 | KAYNAKLI (yıl) | künye içinde (-0625-01-01 → -0538-10-12) | parti 1-3 (Pleiades — olay maddesindeki kasaba) |
| Musasir | 36.83944, 44.30333 | Pleiades https://pleiades.stoa.org/places/126728263 (Muṣaṣir) | urartu | -0713-01-01 | Hasanlu'nun batısında Urartu yerleşimi; II. Sargon yağması (madde -714) Oxford'da doğrulanmadı | Oxford Encyclopedia of Archaeology in the Near East (EMRELİC okuması); Livius «Urartu» | KAYNAKLI (aidiyet); yıl Livius | künye içinde (-0859-01-01 → -0589-01-01) | parti 1-3 (Pleiades) |
| Klimonas | 34.71255, 33.13374 | Pleiades https://pleiades.stoa.org/places/13818292 (Klimonas) | — | -9149-01-01 | Kıbrıs Erken Aseramik Neolitik köyü — devlet öncesi, künye yok | Vigne vd. 2012, PNAS 109(22) | KAYNAKLI (14C), KÜNYE YOK | — | parti 1-3 (Pleiades) |
| Burzahom (Burzahama) | 34.16735, 74.87704 | GeoNames https://www.geonames.org/1429703 (Burzahom köyü, Srinagar) — Pleiades kapsamı dışı; höyük köyün yanında, BEYANLI KONUM | — | -2899-01-01 | Keşmir Neolitiği — devlet öncesi; künye yok | Dwivedi vd. 2025, Sci Rep (madde) | KAYNAKLI, KÜNYE YOK | — | parti 4 (GeoNames) |
| Bhirrana (Bhirdana) | 29.55468, 75.54796 | Pleiades https://pleiades.stoa.org/places/897851371 (Bhirrana) | — | -6433-01-01 | en eski tabaka (Hakra çanak çömleği evresi) — devlet öncesi; erken-harappa künyesi -3199'da başlar, o güne dek sahipsiz kültür noktası | Sarkar vd. 2016, Sci Rep 6:26555 (madde) | KAYNAKLI (14C), KÜNYE YOK | — | parti 4 (Pleiades) |
| Szászsebes (Sebeş) | 45.95646, 23.57100 | GeoNames https://www.geonames.org/667526 (Sebeş, Romanya, Alba) — Pleiades 207436 ile 0,4 km tutuyor | dogu-macar-kralligi | 1540-07-22 | Erdel Sakson şehri (1203'te var) — Szapolyai 'Osmanlı himayesine girince Osmanlı desteğiyle Macar ve Erdel kralı oldu'; 1540 ölümünden sonra 1541'de Erdel haraçgüzâr voyvodalık. Sahip bölge düzeyinden (Erdel) | MKL «Szászsebes»; TDV «Erdel» | BEYANLI YAKLAŞIKLIK (zincir Erdel'den) | künye içinde (1526-08-29 → 1541-08-29) | parti 4 (GeoNames) |
| Elea (Lucania) | 40.16050, 15.15616 | Pleiades https://pleiades.stoa.org/places/452488 (Velia/Elea, settlement) | — | -0544-01-01 | Fokaia sürgünlerinin kurduğu bağımsız polis — künye yok | Herodotos 1.167; Strabon 6.1.1 | KAYNAKLI, KÜNYE YOK | — | parti 4 (Pleiades) |
| Kirrha | 38.42958, 22.44555 | Pleiades https://pleiades.stoa.org/places/540868 (Kirra) | — | -0594-01-01 | Birinci Kutsal Savaş'ta yıkıldı → bit: -0594 (kur: KAYNAK-GEREK) | Aischines 3.107-113; Parker 2002 | KAYNAKLI (bitiş) | — | parti 4 (Pleiades) |
| Olbia | 46.69239, 31.90586 | Pleiades https://pleiades.stoa.org/places/226546 (Borysthenes/Olbia) | — | -0646-01-01 | Milet kolonisi, bağımsız polis — künye yok | Eusebios; Hansen & Nielsen 2004 | KAYNAKLI, KÜNYE YOK | — | parti 4 (Pleiades) |
| Lokroi (Bruttium) | 38.22630, 16.24434 | Pleiades https://pleiades.stoa.org/places/452369 (Lokroi Epizephyrioi) | — | -0672-01-01 | Lokris kolonisi, bağımsız polis — künye yok | Strabon 6.1.7; Eusebios | KAYNAKLI, KÜNYE YOK | — | parti 4 (Pleiades) |
| Babaeski | 41.42809, 27.09660 | GeoNames https://www.geonames.org/751371 (Babaeski ilçe merkezi) · TDV tarifi: Lüleburgaz-Edirne yolu üstü | OSMANLI | 1360-01-01 | Bizans → Osmanlı (I. Murad'ın Edirne kuşatması öncesi; yıl) | TDV «Murad I», «Lüleburgaz» (madde) | KAYNAKLI (yıl) | d: OSMANLI | parti 4 (GeoNames) |
| Dömeke | 39.12722, 22.30028 | GeoNames https://www.geonames.org/263000 (Domokos) | yunanistan | 1897-05-17 | Osmanlı Tesalya kasabası (Dömeke) → 1881 Tesalya Yunan Krallığı'na → 1897 savaşında kısa Osmanlı idaresi | TDV «Tesalya», «Yenişehir» | KAYNAKLI (1881 yıl) | künye içinde (1821-03-25 → 1973-06-01) | parti 4 (GeoNames — olay maddesindeki kasaba) |
| Bileća | 42.87645, 18.42967 | GeoNames https://www.geonames.org/3204161 | bosna-kralligi | 1388-08-27 | ilk anılma 1387; 1388'de yakınında Bosna komutanı Vlatko Vuković Osmanlıları yendi → 1391 knez Pavle Radinović → 1430'lar Kosača → 1465 Osmanlı | Hrvatska enciklopedija «Bileća» (LZMK) | KAYNAKLI | künye içinde (1180-01-01 → 1463-05-01) | parti 4 (GeoNames — olay maddesindeki kasaba) |
| Kumanova | 42.13279, 21.71585 | GeoNames https://www.geonames.org/788886 (Kumanovo) | OSMANLI | 1912-10-23 | Osmanlı → Sırbistan (Kumanova savaşı) | madde | KAYNAKLI (madde) | d: OSMANLI | parti 4 (GeoNames — olay maddesindeki kasaba) |
| Osnabrück | 52.27411, 8.05056 | GeoNames https://www.geonames.org/2856883 | almanya | 1648-10-24 | Osnabrück Prens-Piskoposluğu (Kutsal Roma) | TDV «Almanya» (madde) | KAYNAKLI | künye içinde (0962-02-02 → 1945-06-05) | parti 4 (GeoNames) |
| Salankamen | 45.14249, 20.25765 | GeoNames https://www.geonames.org/785529 (Stari Slankamen) | OSMANLI | 1691-08-19 | Macar kalesi → 1521 Osmanlı (Srem sancağı) → 19.8.1691 savaştan sonra Habsburg (Askerî Sınır) | Hrvatska enciklopedija «Slankamen»; TDV «Srem» (XVI. yy. Osmanlı kasabası) | KAYNAKLI (gün) | d: OSMANLI | parti 4 (GeoNames — olay maddesindeki kasaba) |
| Zenta | 45.92750, 20.07722 | GeoNames https://www.geonames.org/785965 (Senta) | habsburg | 1697-09-08 | Habsburg tarafında kasaba-kale (1686'dan çarpışma alanı) → 8 Eylül 1697 Osmanlı zaptetti → 11 Eylül bozgun, Habsburg; ilk anılma 1216 (Szintarev) | TDV «Zenta» (E. Afyoncu) | KAYNAKLI (gün) | künye içinde (1282-12-27 → 1918-11-12) | parti 4 (GeoNames — olay maddesindeki kasaba) |
| Missolonghi | 38.37138, 21.43151 | GeoNames https://www.geonames.org/257186 (Messolonghi) | OSMANLI | 1826-04-22 | 1821 isyanıyla Yunan isyancılar → 1826-04-22 Osmanlı aldı → 1829 Yunan (KAYNAK-GEREK) | TDV «Reşid Mehmed Paşa» (madde) | KAYNAKLI (düşüş günü) | d: OSMANLI | parti 4 (GeoNames) |
| Nizip | 37.00972, 37.79417 | GeoNames https://www.geonames.org/303798 | OSMANLI | 1839-06-24 | Nizip Muharebesi; kasaba Osmanlı (Mısır ordusu karşısında) | madde | KAYNAKLI (madde) | d: OSMANLI | parti 4 (GeoNames — olay maddesindeki kasaba) |
| Yanbolu (Yambol) | 42.48243, 26.50006 | GeoNames https://www.geonames.org/725578 | OSMANLI | 1410-02-13 | Bulgar kalesi → Osmanlı fethi 1373 (TDV: 'ikinci tarihin daha doğru olma ihtimali yüksek'; eski görüş 766/1365) → 1410 fetret savaşı Osmanlı içi. ÇELİŞKİ: kronolojideki 1369 maddesi (Timurtaş) TDV'nin iki tarihinden de farklı | TDV «Yanbolu» | KAYNAKLI (yıl) — fetih yılı çelişkisi beyanlı | d: OSMANLI | parti 4 (GeoNames — olay maddesindeki kasaba) |
| Drivasto | 42.12306, 19.59139 | GeoNames https://www.geonames.org/3185761 (Drisht, Arnavutluk, İşkodra) — Drivasto = Drisht (TDV «Arnavutluk»da Leş ve Draç'la birlikte anıl | venedik | 1478-01-01 | Venedik (1390'lar, yerli beylerden) → Osmanlı 1478 (yıl; Akçahisar, Leş, Jabyak ile) | TDV «Arnavutluk» | KAYNAKLI (yıl) | künye içinde (0697-01-01 → 1797-05-12) | parti 4 (GeoNames) |
| Sen Gotar | 46.95261, 16.27358 | GeoNames https://www.geonames.org/3044669 (Szentgotthárd) | macaristan-habsburg | 1664-08-01 | 1184 III. Béla'nın Sistersiyen manastırı → 1532 ya da önce boşaldı → 1605 bir Avusturya başkomutanı Bocskai hayduklarından korkup kiliseyi havaya uçurdu (Habsburg tarafı sınır yeri) → 1734 manastır yeniden. 1664'te yerleşimin nüfusu MKL'de yok | MKL «Szentgotthárd» | KAYNAKLI (Habsburg tarafı) — 1664 nüfus teyitsiz | künye içinde (1526-12-17 → 1918-11-16) | parti 4 (GeoNames — olay maddesindeki kasaba) |
| Vasvár | 47.04928, 16.79954 | GeoNames https://www.geonames.org/3043033 | macaristan-habsburg | 1664-08-09 | Habsburg Macaristan'ı (Vas ili) | TDV «Vasvar Antlaşması» (madde) | KAYNAKLI | künye içinde (1526-12-17 → 1918-11-16) | parti 4 (GeoNames) |
| Versec | 45.11667, 21.30361 | GeoNames https://www.geonames.org/784136 (Vršac, Sırbistan) | OSMANLI | 1552-07-27 | Temeşvar'dan gönderilen kuvvetler tuttu (Güney Banat palankaları) | Bánlaky, A magyar nemzet hadtörténelme (MEK 09477) (madde) | KAYNAKLI | d: OSMANLI | parti 4 (GeoNames) |
| Facset | 45.85000, 22.18333 | GeoNames https://www.geonames.org/678490 (Făget, Romanya, Timiş — Bacău'daki eş ad değil) | OSMANLI | 1552-07-27 | aynı madde (Versec, Facset, Mehádia, Csákóvár…) | Bánlaky (madde) | KAYNAKLI | d: OSMANLI | parti 4 (GeoNames) |
| Mehádia | 44.90083, 22.36694 | GeoNames https://www.geonames.org/673619 (Mehadia, Romanya, Caraş-Severin) | OSMANLI | 1552-07-27 | aynı madde | Bánlaky (madde) | KAYNAKLI | d: OSMANLI | parti 4 (GeoNames) |
| Csákóvár | 45.50806, 21.12861 | GeoNames https://www.geonames.org/681971 (Ciacova, Romanya, Timiş) | OSMANLI | 1552-07-27 | aynı madde | Bánlaky (madde) | KAYNAKLI | d: OSMANLI | parti 4 (GeoNames) |
| Hisarcık (Grocka) | 44.67152, 20.71648 | GeoNames https://www.geonames.org/790132 (Grocka) | habsburg | 1739-07-22 | Pasarofça (1718) ile Belgrad ve havalisi Avusturya'ya → 1739 Osmanlı; savaş 'Hisarcık Boğazı'nda 22 Temmuz' (TDV Hacı İvaz Paşa). ABİ MERKEZ: Belgrad | TDV «Pasarofça Antlaşması», «Hacı İvaz Paşa» | BEYANLI YAKLAŞIKLIK (zincir Belgrad'dan) | künye içinde (1282-12-27 → 1918-11-12) | parti 4 (GeoNames — olay maddesindeki kasaba) |
| Kozluca | 43.33058, 27.59908 | GeoNames https://www.geonames.org/726591 (Suvorovo; GeoNames alt adı Kozludzha) | OSMANLI | 1774-06-25 | Osmanlı (Varna-Şumnu arası) | madde | KAYNAKLI (madde) | d: OSMANLI | parti 4 (GeoNames — olay maddesindeki kasaba) |
| Fethülislâm | 44.61147, 22.60955 | GeoNames https://www.geonames.org/789485 (Kladovo) · TDV «Sırbistan», «Semendire»: 'Fethülislâm (Kladovo)' | OSMANLI | 1867-04-18 | Osmanlı kalesi → 1867-04-18 garnizon çekildi, Sırbistan Prensliği'ne (sirbistan-prensligi) | TDV «Sırbistan» (madde) | KAYNAKLI (kur KAYNAK-GEREK) | d: OSMANLI | parti 4 (GeoNames) |
| Ayastefanos (Yeşilköy) | 40.95900, 28.82240 | GeoNames https://www.geonames.org/737563 (Yeşilköy, Bakırköy, İstanbul) | OSMANLI | 1878-03-03 | İstanbul'un batısında köy; ABİ MERKEZ: İstanbul | TDV «Ayastefanos Antlaşması» (madde) | BEYANLI YAKLAŞIKLIK (zincir İstanbul'dan) | d: OSMANLI | parti 4 (GeoNames) |
| Novigrad | 47.90852, 19.04806 | GeoNames https://www.geonames.org/3047356 (Nógrád köyü; Novigrad = Nógrád kalesi, Vác kuzeyi) | OSMANLI | 1544-09-01 | Budin'in kuzey savunma kuşağı (1544 seferi; ay) | TDV «Budin» (madde) | KAYNAKLI (ay) | d: OSMANLI | parti 4 (GeoNames) |
| Kailua-Kona | 19.64016, -155.99912 | GeoNames https://www.geonames.org/5847504 | hawaii-kralligi | 1819-11-01 | Hawaii Krallığı (Kamehameha sarayı) | madde | KAYNAKLI (madde) | künye içinde (1795-01-01 → 1893-01-17) | parti 5 (GeoNames) |
| Tellülkebîr | 30.54323, 31.78504 | GeoNames https://www.geonames.org/359710 (At Tall al Kabīr) | misir-kavalali | 1882-09-13 | Hidiv Mısır'ı → İngiliz işgali | madde | KAYNAKLI (madde) | künye içinde (1805-07-03 → 1914-12-18) | parti 5 (GeoNames) |
| Îmbâbe | 30.07625, 31.20666 | GeoNames https://www.geonames.org/355549 (Imbābah, Gize) | misir-eyaleti | 1798-07-21 | Osmanlı Mısır'ı (Memlük beyleri) → Fransız (fransiz-misir-seferi) | madde | KAYNAKLI (madde) | künye içinde (1517-04-13 → 1805-07-03) | parti 5 (GeoNames) |
| Fontainebleau | 48.40908, 2.70177 | GeoNames https://www.geonames.org/3018074 | fransa | 1762-11-03 | Fransa Krallığı | madde | KAYNAKLI (madde) | künye içinde (0987-07-03 → 1792-09-22) | parti 5 (GeoNames) |
| Saint-Germain-en-Laye | 48.89643, 2.09040 | GeoNames https://www.geonames.org/2979783 | fransa-cumhuriyet | 1919-09-10 | Fransa (III. Cumhuriyet) | madde | KAYNAKLI (madde) | künye içinde (1792-09-22 → ) | parti 5 (GeoNames) |
| Versailles | 48.80359, 2.13424 | GeoNames https://www.geonames.org/2969679 | fransa-cumhuriyet | 1919-06-28 | Fransa (III. Cumhuriyet) | madde | KAYNAKLI (madde) | künye içinde (1792-09-22 → ) | parti 5 (GeoNames) |
| Neuilly-sur-Seine | 48.88460, 2.26965 | GeoNames https://www.geonames.org/2990611 | fransa-cumhuriyet | 1919-11-27 | Fransa (III. Cumhuriyet) | madde | KAYNAKLI (madde) | künye içinde (1792-09-22 → ) | parti 5 (GeoNames) |
| Barcs | 45.96000, 17.45861 | GeoNames https://www.geonames.org/3055368 | macaristan-naiplik | 1921-08-20 | Sırp (SHS) işgali → 17.8.1921 Sırp çekilişi başladı → 20.8.1921 öğle Macar jandarması girdi, saat 17'de askerî devir teslim | Ernyes M., Magyar Rendészet 2021/1, 141-154, DOI 10.32577/mr.2021.1.10 (madde kaynağı) | KAYNAKLI (gün) | künye içinde (1918-11-16 → 1946-02-01) | parti 5 (GeoNames) |
| Selâ | 34.05310, -6.79846 | GeoNames https://www.geonames.org/2537763 (Salé, Fas) | muvahhidler | 1163-05-16 | Muvahhid şehri → 1248-04-26 Merînî (merini) | madde (TDV) | KAYNAKLI (madde) | künye içinde (1130-01-01 → 1269-01-01) | parti 5 (GeoNames) |
| Cezîretülhadrâ (Algeciras) | 36.13326, -5.45051 | GeoNames https://www.geonames.org/2522013 (Algeciras) | sevilla-abbadiler | 1086-06-30 | Hammûdîler → 450/1058 Abbâdîler (Sevilla) ele geçirdi → 1086 Murâbıtlar'a (murabitlar) bırakıldı | TDV «Hammûdîler» | KAYNAKLI (hicrî yıl) | künye içinde (1023-01-01 → 1091-01-01) | parti 5 (GeoNames) |
| Thânesâr | 29.97323, 76.83214 | GeoNames https://www.geonames.org/1254657 (Thanesar, Haryana) | — | 1014-07-02 | 'Onuncu seferini Thânesâr şehrine yapan Mahmud … tapınak ve putu tahrip ettirdi (405/1014-15)' — akın, fetih değil; sonra Gazneli elinde → 'Hânsî, Thânesâr, Nagarkot … geri aldılar' (435/1043-44, Hint racaları). 1014'teki Hindu sahibi TDV'de yok | TDV «Mahmûd-ı Gaznevî», «Mevdûd b. Mes‘ûd-i Gaznevî» | KAYNAK-GEREK (1014 sahibi; zincir kısmen TDV) | — | parti 5 (GeoNames) |
| Somnât (Sûmenât) | 20.88808, 70.40129 | GeoNames https://www.geonames.org/1255818 (Somnāth, Gucerat — Verāval'in 4 km doğusu) | caulukya | 1026-01-08 | Gazneli Mahmud 'Zilkade 416'da (8 Ocak 1026) Somnât Kalesi'ni fethetti' (geçici) — öncül sahip Çaulukya KAYNAK-GEREK | TDV «Mahmûd-ı Gaznevî», «Gazneliler» | KAYNAKLI (fetih günü); öncül KAYNAK-GEREK | künye içinde (0942-01-01 → 1297-01-01) | parti 5 (GeoNames) |
| Misilmeri | 38.03183, 13.44795 | GeoNames https://www.geonames.org/2524126 | sicilya-emirligi | 1068-01-01 | Palermo yolu üstünde; ABİ MERKEZ: Palermo — müslüman emîrlerde, 1072'de I. Ruggero Palermo'yu aldı (sicilya-kralligi) | TDV «Sicilya» (Palermo 1072) | BEYANLI YAKLAŞIKLIK (zincir Palermo'dan) | künye içinde (0947-01-01 → 1091-01-01) | parti 5 (GeoNames) |
| Rânye | 21.25040, 42.84751 | GeoNames https://www.geonames.org/12546009 (Ranyah; GeoNames idare 'Asir' yazıyor — BEYANLI KONUM) | misir-kavalali | 1816-01-01 | Mısır (Kavalalı) garnizonu çekildi → Necid | madde | KAYNAKLI (madde) | künye içinde (1805-07-03 → 1914-12-18) | parti 5 (GeoNames) |
| Menfûha | 24.60050, 46.72722 | GeoNames https://www.geonames.org/104433 (Manfūḩah — bugün Riyad'ın semti, 1819'da ayrı kasaba) | misir-kavalali | 1819-08-13 | Dir'iye sonrası Mısır garnizonu | madde | KAYNAKLI (madde) | künye içinde (1805-07-03 → 1914-12-18) | parti 5 (GeoNames) |
| Oskol | 51.30250, 37.84613 | GeoNames https://www.geonames.org/487928 (Stary Oskol) | rusya | 1596-01-01 | Moskova Çarlığı'nın bozkır garnizonu (kuruluş 1593 — KAYNAK-GEREK) | madde | KAYNAKLI (madde) | künye içinde (1547-01-16 → 1917-03-15) | parti 5 (GeoNames) |
| Altınköprü | 35.75344, 44.14727 | GeoNames https://www.geonames.org/98979 (Āltūn Kawbrī, Kerkük) | safevi | 1625-01-01 | Bağdat'ın düşüşünden sonra 'Kerkük ve Musul şahın kumandanlarından Kāsım Han tarafından zaptedildi' → Hâfız Ahmed Paşa Musul'u geri aldı. ABİ MERKEZ: Kerkük-Musul arası yol kasabası | TDV «Hâfız Ahmed Paşa» | BEYANLI YAKLAŞIKLIK (zincir Kerkük/Musul'dan) | künye içinde (1501-07-01 → 1736-03-08) | parti 5 (GeoNames) |
| Kırkağaç | 39.10638, 27.66925 | GeoNames https://www.geonames.org/307623 | OSMANLI | 1920-06-22 | Osmanlı → Yunan işgali (yaz taarruzu) | madde | KAYNAKLI (madde) | d: OSMANLI | parti 5 (GeoNames) |
| Nazilli | 37.91631, 28.32225 | GeoNames https://www.geonames.org/303873 | OSMANLI | 1920-06-22 | 1919'da Aydın-Nazilli cephesinde Kuva-yı Milliye'nin sivil direniş merkezi (3 kongre: Ağustos, Eylül, 6 Ekim 1919) — 1920 işgaline girip girmediği bu kaynakta yok | TDV «Aydın»; BELGİ Dergisi 2019, DOI 10.33431/belgi.559464 | KAYNAK-GEREK (1920 işgali) — DergiPark araması insan doğrulaması istedi (aşılmadı); TR Dizin API'sinde 6 sorgu sonuçsuz | d: OSMANLI | parti 5 (GeoNames) |
| Gediz | 38.99389, 29.39131 | GeoNames https://www.geonames.org/314716 (Gediz, Kütahya) | OSMANLI | 1920-08-29 | Kütahya sancağının kazası (1520'den) — 1920 işgali TDV'de ve TR Dizin'de bulunamadı | TDV «Kütahya» | KAYNAK-GEREK (1920 işgali) — TR Dizin API 3 sorgu sonuçsuz | d: OSMANLI | parti 5 (GeoNames) |
| Oltu | 40.53944, 41.98722 | GeoNames https://www.geonames.org/741160 | safevi | 1534-01-01 | Safevî → Osmanlı (Pasin, Şüregel, Oltu kaleleri) | madde | KAYNAKLI (yıl) | künye içinde (1501-07-01 → 1736-03-08) | parti 5 (GeoNames) |
| Adakale | 44.71667, 22.45000 | GeoNames https://www.geonames.org/686694 (Ada Kaleh — 1970'te baraj gölü altında kaldı; tarihî konum) | habsburg | 1738-08-17 | Avusturya → Osmanlı | madde | KAYNAKLI (madde) | künye içinde (1282-12-27 → 1918-11-12) | parti 5 (GeoNames) |
| Mozdok (Terek boyu) | 43.73976, 44.65157 | GeoNames https://www.geonames.org/524736 | rusya | 1763-01-01 | Rusya'nın kurduğu kale-kasaba (kur) | madde | KAYNAKLI (yıl) | künye içinde (1547-01-16 → 1917-03-15) | parti 5 (GeoNames) |
| Fokşani (Focşani) | 45.70000, 27.18333 | GeoNames https://www.geonames.org/678015 | OSMANLI | 1789-08-01 | 'Fokşani kasabası' (1772 barış görüşmeleri); '1 Ağustos 1789'da Fokşan'da' bozgun — Eflak-Boğdan sınırı, tâbi beylik (v:) hangisi KAYNAK-GEREK | TDV «Vâsıf Ahmed Efendi», «Yûsuf Paşa, Koca» | KAYNAKLI (gün); v: KAYNAK-GEREK | d: OSMANLI | parti 5 (GeoNames) |
| Maçin | 45.24371, 28.13564 | GeoNames https://www.geonames.org/674230 (Măcin) | OSMANLI | 1791-07-09 | Osmanlı Tuna kalesi | madde | KAYNAKLI (madde) | d: OSMANLI | parti 5 (GeoNames) |
| Pazar | 41.18019, 40.88663 | GeoNames https://www.geonames.org/740675 (Pazar, Rize) | OSMANLI | 1916-03-08 | Osmanlı → Rus işgali; ABİ MERKEZ: Rize (Çaykıran 2021) | madde + ABİ MERKEZ | BEYANLI YAKLAŞIKLIK | d: OSMANLI | parti 5 (GeoNames) |
| Kızılrubat | 33.82112, 44.41145 | GeoNames https://www.geonames.org/387368 (As Sa‘dīyah — Osmanlı Kızılrubat'ı, Diyala) | OSMANLI | 1917-12-06 | Osmanlı → İngiliz hattı (Hânekîn ile) | madde | KAYNAKLI (madde) | d: OSMANLI | parti 5 (GeoNames) |
| Gerger | 38.02807, 39.03418 | GeoNames https://www.geonames.org/324126 (Gerger ilçe merkezi — tarihî Gerger kalesi Fırat kıyısında, birkaç km doğuda; BEYANLI KONUM) | memluk | 1467-01-01 | Şehsuvar Bey 'Memlükler'in elindeki Besni, Gerger, Birecik ve Rumkale şehirlerini de zaptetti' → dulkadir | TDV «Dulkadıroğulları» | KAYNAKLI (yıl) | künye içinde (1250-01-01 → 1517-04-13) | parti 5 (GeoNames) |
| Rumkale | 37.27091, 37.83824 | GeoNames https://www.geonames.org/7619098 (Rum Kalesi, castle) · TDV tarifi: 'Fırat üzerinde inşa edilmiş Rumkale' («Fırat») — kale-şehir; H | memluk | 1467-01-01 | Fırat üzerinde kale-şehir; Memlük → Şehsuvar Bey zaptetti (dulkadir). Sonraki dönemde kaza merkezi Halfeti'ye (TDV «Rıtl»: 'Rumkale'ninki (Halfeti)') | TDV «Dulkadıroğulları», «Fırat» | KAYNAKLI (yıl) | künye içinde (1250-01-01 → 1517-04-13) | parti 5 (GeoNames) |
| Kadirli | 37.37389, 36.09611 | GeoNames https://www.geonames.org/310892 | dulkadir | 1471-01-01 | Şehsuvar Bey'in üssü → 1471 ilkbaharı 'Yeşbek, Kadirli ve Kozan'dan Dulkadırlılar'ı çıkardı' → memluk | TDV «Dulkadıroğulları» | KAYNAKLI (yıl/mevsim) | künye içinde (1337-01-01 → 1522-01-01) | parti 5 (GeoNames) |
| Blagay | 43.25892, 17.88815 | GeoNames https://www.geonames.org/3203970 (Blagaj, Mostar yöresi — kuzeydeki eş adlılar değil) | hersek | 1448-01-01 | Stjepan Vukčić-Kosača'nın merkezi | madde | KAYNAKLI (madde) | künye içinde (1435-01-01 → 1482-01-01) | parti 5 (GeoNames) |

## ③ Olay yerleri ve yapılar — petek DEĞİL (kronoloji odağı olarak kalır)

Savaş alanı, ova, geçit, anıt, tapınak ve ada kalesi petek noktası olursa çevresindeki toprağı yanlış sahibe dağıtır.

| ad | sınıf | not | madde |
|---|---|---|---|
| Çamurlu | OLAY YERİ | 1413 Çamurlu Savaşı (Bulgaristan, Samokov yöresi) | 1413-07 — Çelebi Mehmed birliği yeniden kurdu |
| Dumlupınar | OLAY YERİ | Büyük Taarruz / Başkomutan Meydan Muharebesi | 1922-09-09 — Büyük Taarruz ve İzmir'in kurtuluşu |
| İnönü | OLAY YERİ | İnönü muharebeleri | 1921-01-10 — Birinci İnönü Muharebesi: düzenli ordunun ilk zaferi |
| Karaburun | OLAY YERİ | Börklüce Mustafa isyanı, Karaburun yarımadası | 1416-05-01 — Şeyh Bedreddin isyanı |
| Otlukbeli | OLAY YERİ | 1473 savaşı | 1473-08-11 — Otlukbeli Savaşı |
| Mercidabık | OLAY YERİ | 1516 savaşı | 1516-08-24 — Mercidabık Zaferi |
| Ridaniye | OLAY YERİ | 1517 savaşı | 1517-01-22 — Ridaniye — Mısır'ın fethi ve hilâfet |
| Haçova (Mezőkeresztes) | OLAY YERİ | 1596 meydan muharebesi | 1596-10-26 — Haçova Meydan Muharebesi |
| Granbosa (Gramvousa) | KALE/YAPI | ada kalesi | 1692-01-01 — Granbosa Kalesi'nin fethi — Girit'in Venedik'te kalan kayalık kaleleri |
| Spinalonga | KALE/YAPI | ada kalesi | 1715-01-01 — Suda ve Spinalonga kalelerinin fethi — Girit'te son Venedik izinin sil |
| Pandeleimon Manastırı | KALE/YAPI | Yanya gölü adasında manastır | 1822-02-14 — Tepedelenli Ali Paşa'nın öldürülmesi — Yanya kuşatmasının sonu |
| Kynoskephalai (Tesalya) | OLAY YERİ | antik savaş yeri | -0196-01-01 — Kynoskephalai: Roma V. Philippos'u yendi; Makedonya Yunanistan'dan çek |
| Leuktra (Boiotia) | OLAY YERİ | antik savaş yeri | -0370-01-01 — Leuktra: Teb ordusu Spartalıları yendi; Sparta kara üstünlüğünü yitird |
| Sybota (Epiros kıyısı) | OLAY YERİ | antik savaş yeri | -0432-01-01 — Sybota: Korint–Korkyra savaşı Atina'yı müdahaleye çekti |
| Eltekeh | OLAY YERİ | antik savaş yeri | -0700-01-01 — Sennakerib Yehuda seferinde Kush-Mısır ordusuyla Eltekeh'te karşılaştı |
| Kunaksa | OLAY YERİ | antik savaş yeri | -0400-01-01 — Kunaksa Savaşı: Genç Kyros ağabeyi II. Artakserkses'e yenildi ve öldü |
| Suda | KOORDİNAT REDDEDİLDİ | Pleiades 'Meta Sudans'ı (Roma'da çeşme) verdi; madde Girit'teki Suda kalesi — koordinat yok | 1715-01-01 — Suda ve Spinalonga kalelerinin fethi — Girit'te son Venedik izinin sil |
| Nemrut | OLAY YERİ/YAPI | Nemrut Dağı hierothesionu (I. Antiokhos'un anıt mezarı) — Pleiades 658544, anıt; petek değil | -0069-01-01 — I. Antiokhos Theos Kommagene tahtına çıktı |
| Leukopetra | KOORDİNAT REDDEDİLDİ | Pleiades Reggio yakınındaki Leucopetra'yı verdi; madde -146 Korint Isthmos'u savaşı — OLAY YERİ, koordinat yok | -0145-01-01 — Akhaia Savaşı: Akhaia Birliği Roma'ya yenildi, birlikler dağıtıldı |
| Herakleia | KOORDİNAT REDDEDİLDİ | Pleiades Hvar'daki Herakleia'yı verdi; madde Pyrrhos'un Lucania Herakleia'sı — koordinat yok | -0279-01-01 — Pyrrhos Tarent'in yardımına İtalya'ya geçti; Herakleia'da Romalıları y |
| Thermopylai | OLAY YERİ/YAPI | geçit (-480 savaşı) — Pleiades 541140 | -0479-01-01 — Kserkses Hellespontos'u aştı; Thermopylai ve Atina'nın alınışı |
| Stonehenge | OLAY YERİ/YAPI | anıt — Pleiades 509089189 placeTypes: cultural-landscape, archaeological-site, monument. Petek değil. | -2871-01-01 — Stonehenge (Aşama 1: hendek ve set): başlar |
| Amada | OLAY YERİ/YAPI | tapınak — Pleiades 683591498 'Temple of Amada', placeTypes: temple-2 (III. Thutmose'un Amon-Re tapınağı). Yerleşim değil: maddenin (II. Amenhotep steli) toprağını Napata/Elefantin taşır. Petek değil. | -1424-01-01 — II. Amenhotep Nubya'da Napata'ya ulaştı ve güney sınır steli dikti: Mı |
| Marchfeld | OLAY YERİ | Kressenbrunn savaşı ovası | 1260-07-12 — Kressenbrunn (Groißenbrunn) Savaşı: II. Ottokar Macarları yendi, Béla  |
| Majtény | OLAY YERİ | Kuruc ordusunun teslim yeri (Majtény ovası) | 1711-04-29 — Szatmár Barışı — Rákóczi hürriyet savaşı sona erdi, Erdel Habsburg ida |
| Világos (Şiria) | OLAY YERİ | 1849 Macar teslimi (Şiria köyü, Arad ili) | 1849-08-13 — Világos'ta Macar ordusu Ruslara teslim oldu — Macar Devrimi bastırıldı |
| Buda (Matthias Kilisesi) | SEMT/YAPI | şehir içi semt, yapı ya da meydan — maddenin şehri taşır | 1867-06-08 — Franz Joseph ve Elisabeth Buda'da Macaristan kralı ve kraliçesi olarak |
| Thyrea (Kynouria) | OLAY YERİ | antik savaş (Champions) | -0545-01-01 — Thyrea (Champions) Savaşı: Sparta Argos'u yendi, Kynouria Sparta'ya ka |
| Hysiai (Argolis) | OLAY YERİ | antik savaş (Pleiades 570306 Hysiai) | -0668-01-01 — Hysiai Savaşı: Argos Pheidon yönetiminde Sparta'yı yendi |
| Kuleli Burgaz (Pythion) | KALE/YAPI | kale (Dimetoka yöresi) — KALE/YAPI | 1361-01-01 — Dimetoka'nın alınışı — Meriç vadisinin açılması |
| İzladi geçidi | OLAY YERİ | 1443 geçit savaşı | 1443-11-24 — İzladi bozgunu — 'Uzun Sefer' |
| Galata sırtları | SEMT/YAPI | şehir içi semt, yapı ya da meydan — maddenin şehri taşır | 1453-04-22 — Gemiler karadan Haliç'e indirildi |
| Kalûgerân (Călugăreni) | OLAY YERİ | 1595 savaşı (Eflak) | 1595-08-23 — Kalûgerân Muharebesi — Koca Sinan Paşa'nın Eflak seferi |
| Neajlov bataklığı | OLAY YERİ | 1595 savaşı alanı | 1595-08-23 — Kalûgerân Muharebesi — Koca Sinan Paşa'nın Eflak seferi |
| Şıpka Geçidi | OLAY YERİ | 1877 geçit savaşı | 1877-07-19 — Şıpka Geçidi'nin tahliyesi — Balkan hattının yarılması |
| Erzurum-Aziziye tabyaları | OLAY YERİ | 1877 tabya savaşı (Erzurum) | 1877-11-18 — Kars'ın düşüşü — Doğu cephesinin çözülmesi ve Aziziye tabyaları |
| Hodidjed | KALE/YAPI | eski Saraybosna kalesi (Vrhbosna) — KALE/YAPI | 1448-01-01 — Saray ovasının ilhakı — Bosna içindeki Osmanlı ucunun kurulması |
| İpsili (Sisam karşısı) | OLAY YERİ | Cüneyd Bey'in sığındığı kale | 1426-01-01 — Cüneyd Bey ve ailesinin idamı — Aydınoğulları Beyliği'nin sonu |
| Fethâbâd | OLAY YERİ | Nâdir Şah'ın öldürüldüğü ordugâh (Kuçan yöresi) | 1747-06-20 — Nâdir Şah'ın öldürülmesi — Afşar hâkimiyetinin dağılışı |
| Eyüp | SEMT/YAPI | şehir içi semt, yapı ya da meydan — maddenin şehri taşır | 1580-01-01 — Zal Mahmud Paşa Camii'nin tamamlanması |
| Galatasaray | SEMT/YAPI | şehir içi semt, yapı ya da meydan — maddenin şehri taşır | 1839-05-14 — Tıp okulunun Mekteb-i Tıbbiyye-i Adliyye-i Şâhâne adını alması |
| Kasımpaşa-Şişli arası | SEMT/YAPI | şehir içi semt, yapı ya da meydan — maddenin şehri taşır | 1453-06-01 — Fatih Sultan Mehmed'in Okmeydanı'nı okçulara tahsis etmesi |
| Kadırga | SEMT/YAPI | şehir içi semt, yapı ya da meydan — maddenin şehri taşır | 1833-06-01 — Feshâne-i Âmire'nin kuruluşu |
| Tahtakale | SEMT/YAPI | şehir içi semt, yapı ya da meydan — maddenin şehri taşır | 1554-06-01 — İstanbul'da ilk kahvehanelerin açılması |
| Sarayburnu | SEMT/YAPI | şehir içi semt, yapı ya da meydan — maddenin şehri taşır | 1478-09-01 — Topkapı Sarayı'na taşınıldı |
| Tophane sırtları | SEMT/YAPI | şehir içi semt, yapı ya da meydan — maddenin şehri taşır | 1577-01-01 — İstanbul Rasathanesi kuruldu |
| Kosmidion | OLAY YERİ | 1410 savaşı (İstanbul surları dışı) | 1410-06-15 — Kosmidion Savaşı |
| Akropolis | SEMT/YAPI | şehir içi semt, yapı ya da meydan — maddenin şehri taşır | 1687-09-26 — Atina'nın kaybı ve Parthenon patlaması |
| Ulaş | OLAY YERİ | 1696 savaşı (Bega/Ulaş suyu) | 1696-08-27 — Ulaş (Olaşin) zaferi |
| Safra geçidi | OLAY YERİ | 1812 geçit savaşı (Hicaz) | 1812-01-01 — Safra-Cedîde boğazında ilk bozgun |
| Bisel | OLAY YERİ | 1815 savaşı (Hicaz) | 1815-01-20 — Bisel Muharebesi: Suûdî kuvvetleri bozguna uğradı |
| Hünkâr İskelesi | SEMT/YAPI | şehir içi semt, yapı ya da meydan — maddenin şehri taşır | 1833-07-08 — Hünkâr İskelesi Antlaşması |
| Koyunhisar | OLAY YERİ | 1302 Bapheus savaşı — yeri tartışmalı | 1302-07-27 — Koyunhisar (Bapheus) Savaşı — Bizans ordusuna karşı ilk büyük zafer |
| İnceğiz | OLAY YERİ | 1412 savaşı | 1412-10-01 — İnceğiz Savaşı — Çelebi Mehmed'in ilk Rumeli yenilgisi |
| Castel Capuana | SEMT/YAPI | şehir içi semt, yapı ya da meydan — maddenin şehri taşır | 1495-02-25 — Cem Sultan'ın ölümü — on dört yıllık rehinenin sonu |
| Dede Garkın sahrası | OLAY YERİ | 1516 savaşı (Koçhisar) | 1516-05-01 — Koçhisar (Kızıltepe) Savaşı — Kara Han'ın yenilgisi |
| Gökmeydan | SEMT/YAPI | şehir içi semt, yapı ya da meydan — maddenin şehri taşır | 1516-08-29 — Halep Gökmeydan'da Abbâsî Halifesi III. Mütevekkil ile görüşme |
| Terrûce | OLAY YERİ | Tomanbay'ın yakalandığı yer (Buhayre) | 1517-03-30 — Son Memlük sultanı Tomanbay'ın Terrûce'de yakalanması |
| Bâbüzüveyle | SEMT/YAPI | şehir içi semt, yapı ya da meydan — maddenin şehri taşır | 1517-04-13 — Tomanbay'ın Bâbüzüveyle'de idamı ve Memlük Devleti'nin sonu |
| Kerden | OLAY YERİ | TDV: 'bir ordugâhta imzalanan Kerden Antlaşması' — ordugâh, konum belirsiz | 1746-09-04 — Kerden Antlaşması — Osmanlı-İran savaşlarının sonu |
| Aynalıkavak Kasrı | SEMT/YAPI | şehir içi semt, yapı ya da meydan — maddenin şehri taşır | 1779-03-10 — Aynalıkavak Tenkihnâmesi — Kırım üzerine geçici uzlaşma |
| Maçka | SEMT/YAPI | şehir içi semt, yapı ya da meydan — maddenin şehri taşır | 1834-07-01 — Mekteb-i Harbiye'nin Maçka Kışlası'nda kurulması |
| Baltalimanı | SEMT/YAPI | şehir içi semt, yapı ya da meydan — maddenin şehri taşır | 1849-05-01 — Baltalimanı Sözleşmesi: Eflak ve Boğdan'da ortak Osmanlı-Rus himayesi |
| Çarşıkapı | SEMT/YAPI | şehir içi semt, yapı ya da meydan — maddenin şehri taşır | 1913-06-11 — Sadrazam Mahmud Şevket Paşa'nın İstanbul'da suikastle öldürülmesi |
| Abalar köyü | OLAY YERİ | II. Bayezid'in öldüğü yer (Çorlu yolu) | 1512-06-10 — II. Bayezid'in Dimetoka yolunda ölümü |
| Yedikule | SEMT/YAPI | şehir içi semt, yapı ya da meydan — maddenin şehri taşır | 1622-05-20 — Genç Osman'ın yeniçeriler tarafından katledilmesi (Hâile-i Osmâniye) |
| Tersane-i Amire | SEMT/YAPI | şehir içi semt, yapı ya da meydan — maddenin şehri taşır | 1645-04-01 — Girit Seferi'nin divanda kararlaştırılması ve donanmanın yola çıkışı |
| Sultanahmet Meydanı | SEMT/YAPI | şehir içi semt, yapı ya da meydan — maddenin şehri taşır | 1656-03-04 — Çınar Vak'ası (Vak'a-i Vakvakiye) |
| Yavuz Selim | SEMT/YAPI | şehir içi semt, yapı ya da meydan — maddenin şehri taşır | 1727-07-01 — İbrahim Müteferrika'ya matbaa kurma izni |
| Tersane | SEMT/YAPI | şehir içi semt, yapı ya da meydan — maddenin şehri taşır | 1772-10-01 — Baron de Tott öncülüğünde kısa ömürlü topçuluk okulu denemesi |
| Sîdî Ferruc | OLAY YERİ | 1830 Fransız çıkarma yeri (Cezayir kıyısı) | 1830-06-14 — Sîdî Ferruc çıkarması — Fransız ordusu Cezayir toprağında |
| Gedikpaşa Tiyatrosu | SEMT/YAPI | şehir içi semt, yapı ya da meydan — maddenin şehri taşır | 1873-04-01 — "Vatan yahut Silistre" sahnelendi, Nâmık Kemal sürgüne gönderildi |
| Serdrûd (Tebriz yakınları) | OLAY YERİ | 1408 savaşı | 1408-04-13 — Serdrûd zaferi: Tebriz ve Azerbaycan Karakoyunlu'ya geçti |
| Mugan Sahrası | OLAY YERİ | Nâdir'in tahta çıktığı sahra | 1736-03-08 — Nadir Şah'ın Mugan Sahrası'nda tahta çıkışı: Safevî hanedanının fiilen |
| Menevâşî | OLAY YERİ | 1874 savaşı (Darfur) | 1874-11-02 — Darfur Sultanlığı'nın Mısır'a ilhakı — Zübeyr Paşa El-Fâşir'e girdi |
| Şeykan | OLAY YERİ | 1883 savaşı (orman) | 1883-11-05 — Şeykan bozgunu — Hicks Paşa ordusunun yok edilişi |
| Pul-i Şikeste | OLAY YERİ | 1618 savaşı (köprü) | 1618-09-10 — Serav (Pul-i Şikeste) bozgunu — Halil Paşa'nın İran seferi |
| Dücum | OLAY YERİ | 1733 savaşı (Sâmerrâ yöresi) | 1733-07-19 — Topal Osman Paşa Nâdir'i Dücum'da yendi — Bağdat kuşatması kalktı |
| Kağaverd mevkii | OLAY YERİ | 1745 savaşı | 1745-08-21 — Kağaverd bozgunu — Yeğen Mehmed Paşa'nın ordusu dağıldı |
| Tophane | SEMT/YAPI | şehir içi semt, yapı ya da meydan — maddenin şehri taşır | 1826-04-08 — Nusretiye Camii inşaatının tamamlanması |
| Trianon (Versailles) | SEMT/YAPI | şehir içi semt, yapı ya da meydan — maddenin şehri taşır | 1920-06-04 — Trianon Antlaşması — Macaristan toprağının üçte ikisini kaybetti |
| Cebelimesâr | KALE/YAPI | Yemen'de dağ kalesi — KALE/YAPI | 1047-01-01 — Ali es-Suleyhî Cebelimesâr'ı alarak isyan etti, Suleyhî hanedanı kurul |
| Katvân (Siriderya ötesi) | OLAY YERİ | sınır sahrası | 0996-01-25 — Sebük Tegin aracılığıyla yapılan anlaşmayla Siriderya sahası Katvân'a  |
| Kûhek (Semerkant'a yaklaşık 42 km) | OLAY YERİ | 1003 savaşı (tepe/ırmak) | 1003-08-03 — Selçuk Bey'in oğlu Arslan Yabgu'nun Oğuzlar'ı Sâmânî İsmâil'le birlikt |
| Şahdiz (Dizkûh) | KALE/YAPI | İsfahan yöresi Bâtınî kalesi — KALE/YAPI | 1107-01-01 — Muhammed Tapar İsfahan civarındaki Şahdiz (Dizkûh) Kalesi'ni zaptedip  |
| Karasu | OLAY YERİ | 1204 savaşı (ırmak) | 1204-01-01 — Gurlu Şehâbeddin Hârizm'e gelip Karasu'da Hârizm ordusunu yendi ve Gür |
| İlâmış sahrası | OLAY YERİ | 1210 savaşı | 1210-01-01 — Alâeddin Muhammed İlâmış sahrasında Karahıtay ordusunu yendi, Endican  |
| Yassıçimen | OLAY YERİ | 1230 savaşı | 1230-01-01 — Celâleddin Anadolu Selçuklu Sultanı I. Alâeddin Keykubad'a Yassıçimen' |
| Montaperti | OLAY YERİ | 1260 savaşı (tepe) | 1260-01-01 — Montaperti Muharebesi: Manfred'in Ghibellin müttefikleri Toskana Guelf |
| Vâdiilekke (Guadalete) veya Barbate kıyısı | OLAY YERİ | 711 savaşı (ırmak) | 0711-07-26 — Târık b. Ziyâd Vizigot ordusunu ağır yenilgiye uğrattı |
| Merciuyûn (Mercayoun) | OLAY YERİ | 1179 savaşı (vadi) | 1179-06-09 — Selâhaddin Merciuyûn'da Haçlılar'a karşı zafer kazandı |
| Altunkale | KALE/YAPI | Ahıska kalesi — KALE/YAPI (konum teyitsiz) | 1578-08-09 — Ahıska atabegliğinin Osmanlı idaresine girmesi — Altunkale, Hırtıs ve  |
| Hırtıs | KALE/YAPI | Ahıska kalesi (Khertvisi) — KALE/YAPI | 1578-08-09 — Ahıska atabegliğinin Osmanlı idaresine girmesi — Altunkale, Hırtıs ve  |
| Gruž | SEMT/YAPI | şehir içi semt, yapı ya da meydan — maddenin şehri taşır | 1814-01-28 — Dubrovnik'te Fransız idaresinin sonu — eski Osmanlı haraçgüzârı şehre  |
| Gülanber | KALE/YAPI | Şehrizor kalesi — KALE/YAPI (konum teyitsiz) | 1630-03-16 — Hüsrev Paşa'nın Şehrizor'da Gülanber Kalesi'ni yeniden kurması — Şehri |
| Stavuçani | OLAY YERİ | 1739 savaşı (köy kenarı) | 1739-08-28 — Stavuçani yenilgisi ve Hotin'in Ruslara teslimi (1736-1739 Osmanlı-Rus |
| Aslıhanlar | OLAY YERİ | 1921 savaşı (köy kenarı) | 1921-04-07 — Afyon'un geri alınışı — Aslıhanlar muharebeleri |
| Kocatepe | OLAY YERİ | 1922 taarruz tepesi | 1922-08-26 — Büyük Taarruz başladı |
| Şüregel | KALE/YAPI | Kars yöresi kalesi — KALE/YAPI (konum teyitsiz) | 1534-01-01 — Pasin, Şüregel ve Oltu kaleleri Safevîlerden alındı — Erzurum-Kars ara |
| Nâdir'in karargâhı | OLAY YERİ | ordugâh | 1734-05-31 — Nâdir'in Rus elçisi Golitsın'a tehdidi: Hazar eyaletleri ve Derbend ve |
| Ordugâh | OLAY YERİ | ordugâh | 1789-06-07 — Koca Yûsuf Paşa'nın sadâretten azli |
| Boza suyu | OLAY YERİ | 1789 Rimnik savaşı (ırmak) | 1789-09-22 — Rimnik (Boze) bozgunu |

## ④ Konumu doğrulanamayan yerleşimler — koordinat yok (yanlış nokta eksik noktadan kötü)

Parti 1-3'ün koordinatsız antik adayları PLEIADES.md ve TDV-KONUM.md'dedir; burada parti 4-5.

| ad | neden | madde |
|---|---|---|
| Ounjougou | Pleiades kapsamı dışı (Mali, tarihöncesi); koordinat yok | -9249-01-01 — Ounjougou (Ravin de la Mouche) - Afrika'nin en eski seramigi: Afrika'n |
| Berezan | Pleiades 'Borysthenes' kaydını Olbia ile birleştiriyor; Berezan adası yerleşimi ayrı kayıt bulunamadı — madde Olbia noktasıyla taşınır, koordinat yok | -0646-01-01 — Olbia/Berezan, Miletos tarafından kuruldu |
| Dara | Darfur'daki Dara kalesi-kasabası; GeoNames yalnız kaba 'locality' (12,2 / 25,33) ve aynı adlı başka yerler verdi; TDV'de tarif yok — yanlış nokta riskli, koordinat yok | 1883-12-23 — Darfur'un Mehdî kuvvetlerine geçişi — Slatin Paşa'nın teslimi |
| Deyrülâkūl (Bağdat'a 50 mil) | TDV tarifi: 'Dicle nehri kıyısında', 'Nûmâniye yakınında', 'Bağdat'a 50 mil' («Saffârîler», «Mütenebbî», «Muvaffak») — GeoNames'te kayıt yok; tarif tek noktaya yetmiyor, koordinat yok | 0876-04-01 — Ya'kūb b. Leys Bağdat yakınında Deyrülâkūl'de Abbâsî kuvvetlerine ilk  |
| Ferâve | TDV tarifi: Horasan'da, 'Merv, Serahs ve Ferâve arasındaki topraklar', Nesâ-Bâverd ile anılır («Çağrı Bey», «Selçuklular») — ribatın kalıntı yeri GeoNames'te bulunamadı, koordinat yok | 1035-08-01 — Mesud barış yaptı: Dihistan Çağrı Bey'e, Nesâ Tuğrul Bey'e, Ferâve Mûs |
| İtil (İdil ağzı) | Hazar başkenti; TDV'de konum tarifi yok, arkeolojik yeri kesinleşmedi → KONUM BİLİNMİYOR (EMRELİC kararı) | 0732-01-01 — Mervân b. Muhammed’in seferiyle «yeni Hazar başşehri» İtil (İdil ağzı) |

## ⑤ Kronoloji düzeltme önerileri (KASA uygular)

| madde | öneri |
|---|---|
| data/olaylar_p0055.js — 1369-01-01 'Timurtaş Bey … Kızılcaağaç Yenicesi (Elhova) ve Yanbolu'yu aldı' | EMRELİC kararı: Yanbolu'nun Osmanlı fethi TDV «Yanbolu» esas → **1373** (eski görüş 766/1365). 1369 maddesi TDV «Murad I» ('herhalde 1369 bahar ve yazı') ve «Timurtaş Paşa» (1367-1369) ile Elhova için kalır; 'Yanbolu' maddenin `b`/`yer` alanından çıkarılır ve 1373-01-01 kesinlik:yil ayrı madde yazılır (ic_not: TDV yanbolu 1373 / 1365 + TDV murad-i 1369 — çelişki beyanı). Yanbolu noktasının Osmanlı kırılması 1373-01-01 (Değişmez 2 bu maddeyle kapanır). |
| Kalhu (Nimrud) -0878-01-01 'II. Aşşurnasirpal Kalhu'yu başkent yaptı' | Oxford (Concise Oxford Dict. of Archaeology 2021): 'In 883 bc … Assyrian capital' → madde -0882-01-01 olmalı (astronomik yıl). EMRELİC okuması arama alıntısıdır; KASA tam maddeyi okuyabilirse çift teyit. |
