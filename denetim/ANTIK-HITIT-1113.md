# ANTIK-HITIT-1113 — Hititler: kronoloji × harita × kaynak (EMRELİC, 13 Kasım 2026)

Dal: `emrelic-1113-antik-hitit`. Konvansiyon: Bryce, *The Kingdom of the Hittites*, 2. bs., OUP 2005 (PDF metni bu oturumda okundu; orta kronoloji — Babil 1595, Tutankhamun 1327, II. Ramses 1279). Ağır araç (denetle/renk_olc/denetle_yayin) KOŞMADI; yalnız `girdi.yukle`, Değişmez 2 yakınlık sorgusu, `node --check`, `paketle`, `surum_damgala`.

## 1. Ölçüm

| Konu | Önce | Sonra |
|---|---|---|
| Hitit künyesi (`hitit`, -1649/-1179) f | Bryce Hattusili I 1650 ⇒ uyumlu | değişmedi |
| Hitit künyesi t | -1179; kaynaklar ayrışık (aşağıda) | değişmedi, çelişki ic_not'ta beyanlı |
| `hitit.kronoloji` mükerrer/çelişkili madde | Babil -1586/-1594, antlaşma -1258/-1257, Suppiluliuma I -1354/-1343, Telipinu -1524/-1459 | her biri TEK madde, Bryce'a hizalı |
| Hitit çağı s: dönemi taşıyan yerleşim | Hattuşa, Gordion (hitit), Ugarit | + Cerablus/Karkamış (yeni-hitit -1179→-0716) |
| Hitit/Hattuşa/Gordion/Ugarit s: kırılmalarında ±30 gün madde | var (olaylar*: arkeoloji + antik_yakin_dogu) | var; Cerablus -1179 için yeni madde eklendi |
| Cerablus yeni-hitit -1179 kırılması | dönem yok | dönem + madde (Değişmez 2 açığı açılmadı: yakınlık ölçümü ile) |

## 2. Bulgular

1. `hitit` künyesi inline kronolojisi, iki mükerrer künyenin birleştirilmesinden (DUNYA-1102) çelişkili yıllar taşıyordu. Bryce tablosuna göre düzeltildi (Suppiluliuma I 1350; Mursili II 1321; Muwattalli II 1295-1272; Hattusili III antlaşması Kasım/Aralık 1259 Mısır nüshası; Tudhaliya IV 1237; Telipinu 1525-1500).
2. worldhistory'den gelen "Telipinu c.1460'ta Huzziya'yı devirdi" maddesi Bryce ile çelişiyordu (Telipinu 1525-1500) ve atlasın kendi -1524 maddesinin içinde de çelişiyordu: SİLİNDİ.
3. -1499 "Eski Krallık biter" maddesi yanlıştı: Bryce Eski/Yeni Krallık ayrımını Tudhaliya I/II'de (c.1400) yapar; Telipinu sonrası Hantili II vd. sürer. tur `son` → `hukumdar`.
4. Hitit sonu (t): Bryce s.344 "12. yüzyılın çok erken yılları" der, yıl vermez; II. Suppiluliuma "1207–" açık uçlu. worldhistory 1190; olaylar_antik_yakin_dogu.js -1179; Hattuşa/Gordion s: -1199; TDV "1440-1200" (imparatorluk devri). Inline son madde -1189 → -1199 (Hattuşa s: ucu ve arkeoloji maddesi ile hizalı; "Kaşkalar yaktı" yargısı kaldırıldı — Bryce soru işareti koyar). Künye t=-1179 DEĞİŞMEDİ (karar Emre'de).
5. Mısır–Hitit antlaşması: TDV "Mısır" m.ö. 1270, Bryce/Shaw konvansiyonu 1259. `kronoloji_sinir_antik3_1024.js` -1269 maddesi iki kaynağı beyan ediyor; hitit -1258 maddesi Bryce'a yazıldı. TDV esas kuralı gereği çelişki bu iki yerde açık duruyor.
6. Yeni Hitit: künye f=-1179 YIL değil künye hizası; Bryce hiyeroglif metinleri "c.1100-700" tarihler. Kuzi-Teşub'un Malatya-Karkamış-Emar alanı Bryce s.349-350.

## 3. Yapılan düzeltmeler (dosya)

- `data/devletler.js`: `hitit` (kronoloji + ic_not), `yeni-hitit` ic_not.
- `data/yerlesimler_ek25.js`: Cerablus s: başına `yeni-hitit` -1179 → -0716 (t Sargon II 717 = -0716; yeni-asur ile bitişik).
- `data/kronoloji_sinir_antik_hitit.js` (YENİ, `KRONOLOJI_SINIR_ANTIK_HITIT`, paket_09'a `paketle ekle`): Cerablus -1179 maddesi.
- `data/paket_05/09/14.js`, `paket_kunye.json`, `index.html` damga: `paketle yenile` + `surum_damgala`.

## 4. Yapılmayanlar / ölçülemeyenler

- Karkamış, Halep (Yamhad -1799/-1599, Hitit denetimi), Tarsus/Adana (Kizzuwatna -1499/-1399), Malatya/Melid için Hitit-çağı s: dönemleri YAZILMADI: Suriye seferleri ve Kizzuwatna ilhakı için Bryce yıl vermiyor (ilhak "belirsiz bir noktada"); Melid'in Sargon'a düşüşü 719/712 ikincil kaynaklarda çelişkili. Dönemsiz yerler en yakın peteğe emilir (Anadolu iç kesimi Hattuşa/Gordion petekleri ile Hitit boyalı görünür; Arzawa, Kaşka, Hayaşa ayrı gösterilmez — noktaları yok).
- Mitanni, Kizzuwatna, Yamhad, Hayaşa-Azzi, Hamat için yerleşim s: dönemi yok (haritada görünmezler); Kaneş/Kültepe, Alaca Höyük, Alalakh, Kadeş yerleşim noktası YOK (olaylar odak_yer yedeği ile Kayseri/Humus). Yeni yerleşim noktası mükerrer/koordinat tanığı gerektirir; yazılmadı.
- `olaylar_antik_yakin_dogu.js` satır 114 (Suppiluliuma I -1354, Livius 1355) Bryce'ın 1350'sinden 5 yıl farklı; çeviri anahtarı kırılacağı için DOKUNULMADI (öneri: -1349).
- `Gordion hitit` dönemi: Bryce Gordion'u Hitit devleti içinde saymaz (Kealhofer: "disengagement"); Frig oturumunun alanı, dokunulmadı.
- ÇEVİRİ: yeni madde `ceviri.py` eşitliği için diğer dillerde yok (tavan borcu). Ağır araçlar (denetle, renk_olc, ceviri.py) koşturulmadı.

## 5. Emre'ye sorular

1. Künye t=-1179 → -1199 (Bryce "12. yy başı", Hattuşa s: ile hizalı) çekilsin mi? (yeni-hitit f ve hayasa-azzi t birlikte)
2. Kizzuwatna/Yamhad/Mitanni için hakemli bir ilhak-yılı kaynağı (Beal, Klengel, Hawkins CHLI) bulunup Tarsus/Halep s: dönemleri yazılsın mı?
