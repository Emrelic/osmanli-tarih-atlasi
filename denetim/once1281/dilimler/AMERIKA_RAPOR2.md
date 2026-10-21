# AMERIKA tur 2 raporu (web doğrulama)

Web erişimi vardı (Bash+curl, WebSearch). Okunan tam metinler: Martin & Grube *Chronicle of the Maya Kings and Queens* (2008; archive.org OCR), Moseley *The Incas and Their Ancestors* (2001; archive.org OCR), Redmond & Spencer 1992 (UNAM PDF), Sievert & Rogers 2011 (Smithsonian Contributions to Anthropology 49), Nigra ve ark. 2014 (Chincha, Backdirt), Joyce 2016 (Tututepec), Price & Arneborg 2018 (JONA), Diehl (FAMSI Körfez), Guiterman ve ark. 2016 (PNAS, PMC4747737), Inomata ve ark. 2017 (PNAS, PMC5307461), Cahokia (PLoS ONE 2025, PMC12494245; PNAS 2019, PMC6431169), Teotihuacan kronolojisi (PLoS ONE 2016, PMC4988673), Chachapoya genetiği (PMC7774974), Hirth/Xochicalco (Cambridge Core özeti).

## 1. Sayılar
| Dilim | Kayıt | okundu | kismen-okundu | taslak | eksik | var | var-f-t-farkli | var-kisa |
|---|---|---|---|---|---|---|---|---|
| A | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| B | 4 | 0 | 2 | 2 | 1 | 2 | 1 | 0 |
| C | 15 | 3 | 10 | 2 | 8 | 3 | 4 | 0 |
| D | 23 | 2 | 12 | 9 | 13 | 6 | 3 | 1 |
| E | 14 | 0 | 6 | 8 | 9 | 1 | 4 | 0 |
| Toplam | 56 | 5 | 30 | 21 | 31 | 12 | 12 | 1 |

70 kayıttan başladı: 16 ELENEN'e taşındı, 2 eklendi (Ek' Balam, Ceibal) → 56. `okundu` yalnız çift teyitli ya da birincil metinden birebir okunan 5 kayıt (Caracol, Copán, Dos Pilas, Ceibal, Spiro). `kismen-okundu` = kaynak f ya da t'den birini destekliyor, öteki uç ya da tür doğrulanmadı.

## 2. Ulaşılamayan / bulunamayan
- Kısıtlı (ödünç) archive.org nüshaları: Silverman & Isbell *Handbook of South American Archaeology*, Pauketat *Cahokia*, Cambridge History of the Native Peoples of the Americas, Rouse *The Tainos*, Davies *The Toltecs*, Smith *The Aztecs* — tam metin yok (aşmaya çalışılmadı).
- Cloudflare/403: UNESCO WHC, eScholarship (Mann & Fields 1997), tDAR, Britannica, UNAM Antropología PDF; Leiden repozitoryumu bağlantı hatası; Seshat zaman aşımı; Sharer & Traxler yerine bulunan archive.org «Ancient Maya» nüshası Morley'in 1946 tarihli eski kitabı (kullanılmadı).
- Hiç akademik kaynak okunamayan 21 taslak: Cuicuilco, Kaminaljuyú, Zenú, Manteño, Cobá, Cacaxtla, Cholula, Mixtek/Tilantongo, Chorotega, Coclé, Tairona, Toltek, Etowah, Moundville, Natchez, Muisca, Taíno, Culhuacán, Tenayuca, Azcapotzalco, La Venta. Bunların `ic_not`unda ne denendiği ve WebSearch özeti ile bulunan (OKUNMAMIŞ) ipuçları yazılı. Not: Toltek için Healan'ın Cambridge özeti yalnız «Early Postclassic» der, Tula özel bölümü girişi erişilemedi.
- Martin & Grube OCR'ı gürültülü: Palenque (K'uk' Bahlam I, «10 March 431»), Ek' Balam (770-840, ilk rakam «?70») sayfa görüntüsü ile teyit edilmeli; Tikal 869 gün hassasiyeti (atlasta 08-13) kaynakta yok.
- Gregoryen/Jülyen: Maya gün tarihleri (Copán 426-09-05, Quiriguá 426-09-08) kaynağın verdiği gün; takvim türü kaynakta belirtilmiyor (Mayacılık normu: GMT 584283, Jülyen) — atlasın convention'ına göre çevrilmeli.

## 3. Kararlar / yapılanlar
- ELENEN (16): Poverty Point, Chavín, Paracas, Recuay, Pukara, Nazca, San Agustín, Quimbaya, Marajoara, Cotzumalguapa, Huastek, San José Mogote, Tumaco-La Tolita, Haudenosaunee, İnuit, Chachapoya. Gerekçeler `AMERIKA_ELENEN.json`da.
- Kuzco Krallığı: 1281 ÖNCESİ kaynak BULUNDU (Moseley 2001: Killke Cuzco «genç señorío», MS ~1200'de Chokepukio ile konfedere, İnka gelişimi MS ~1000 sonrası). Elenmedi; tür `seflik` (señorío).
- Haudenosaunee: 1142 tarihi yalnız Mann & Fields 1997'ye (eclipse) dayanıyor, Henige 1999 eleştirir (iki makalenin künyesi CrossRef ile doğrulandı, metinleri okunamadı); akademik okul 15. yy. → ELENEN (kapsam dışı).
- Mükerrer çiftler ve f/t/tür düzeltme adayları `AMERIKA_REF.json`da: tikal-mutul kalsın, monte-alban-zapotek kalsın, tiwanaku kalsın (t≈1100), chimu kalsın.
- Önemli bulgu: Monte Albán — Redmond & Spencer 1992'ye göre MÖ 500-100 devlet öncesi; devlet MÖ ~100 (Faz II). Künye f=-0499 «şehir kuruluşu»dur.
- Tür sözlüğü: `seflik` kayıtlarda kaldı; Moseley/Sievert&Rogers akademik karşılığı `señorío`/`chiefdom`. Önerilen `tur_yeni`ler REF'te.
- Polity niteliği zayıf kalan taslaklar (ELENEN adayı ama kaynak okunamadığı için taşınmadı): Cuicuilco, Cobá, Cholula, Cacaxtla, Manteño, Chorotega, Coclé, Zenú, Tenayuca, Natchez, El Tajín (kismen), San Lorenzo/La Venta (kültür künyesi `olmek` ile çakışır).

## 4. İstekler
- Ana oturum: 21 taslağın doğrulaması için ödünç kitaplara erişim (Handbook of South American Archaeology, Cambridge History of the Native Peoples, Smith *Aztec Archaeology*, Pauketat) ya da UMIT'ten erişim.
- Karar: Olmek merkezleri (San Lorenzo, La Venta) `olmek` kültür künyesinin altına mı yoksa ayrı şeflik olarak mı; Karayipler için bölge kodu hâlâ yok (Taíno `orta-amerika`).
- Karar: Mississippian ve Pueblo sistemleri (atlasta `devlet`) `seflik` olarak sınıflandırılsın mı (Sievert&Rogers, PNAS 2016 dili)?
- Mükerrerlerin birleştirilmesi ve Monte Albán f düzeltmesi için ana oturum onayı.
