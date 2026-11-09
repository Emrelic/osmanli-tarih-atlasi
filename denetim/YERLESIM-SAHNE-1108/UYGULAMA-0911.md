# YERLESIM-SAHNE-1108 — UYGULAMA (9 Kasım 2026)

EMRELİC CUMA talimatı: OZET.md'deki kalanı uygula (1.715 jeton aday · 416 BOŞLUK · 10 kronik seyrek hücre).

## 1. Jeton adayları — asıl bulgu: "eksik yerleşim" değil, **ad bağımsızlığı** sorunu
- 1.500 adayın (ilk liste) bulanık eşleşmeyle yalnız 16'sı atlasta aynı adla var; (`olc_7_aday_suz.js`, m7_*.tsv).
- En çok anılan 38 gerçek-yer adayı 3 araştırma ajanına verildi (A antik/Batı 12 · B Asya 16 · C modern 7).
  **A'nın 12'sinden 9'u atlasta başka adla zaten var:** Ekbatana=Hemedan, Pergamon=Bergama, Massalia=Marsilya,
  Sardes=Sart, Ktesifon=Ktesiphon, Karkemiş=Cerablus, Pelusium=Feremâ, Teb=Uksur, Efes≈Ayasuluk; Berdea=Berde (Karabağ).
  **B'nin 16'sından 7'si zaten var:** Kannauj=Kannauc, Seogyeong=Pyongyang, Youzhou=Pekin, Weizhou=Daming, Shuofang=Xiazhou,
  Suvarnapura=Sonepur, Vyadhapura=Angkor Borei. **C'den Silvan=Meyyâfârikīn.** Heian-kyō=Kyoto, Jiangdu=Yangzhou, Addis Ababa=Addis,
  Ulanbator=Urga, Polonnaruva=Polonnaruwa de alias.
- ⇒ Jeton adaylarının çoğu **yeni yerleşim işi değil, alias (ad eşleme) işi**. Bölge/devlet/ırmak adları (Horasan, Wessex, Champa, Tuna…) zaten yerleşim değil.
- **EMRE KARARI GEREKEN:** alias tasarımı (ör. `ad_esanlam.js` 25 çiftlik araç girdisini veriye taşımak ya da yerleşime `diger_ad:[]` alanı; motor/`adKonumBul` etkisi). Ben tasarlamadım.
- Zinciri eksik MEVCUT kayıtlar (araştırma önerdi, uygulanmadı — mevcut kayıt düzenlemesi ayrı iş): Feremâ (s boş), Uksur (yalnız 1799+),
  Cerablus (-1344→-0716), Ayasuluk (1000 öncesi), Suvarnapura/Sonepur (s boş). Öneri dilimler `cikti/arastirma/arastirma_A.json`, `_B.json`.

## 2. Uygulanan: `data/yerlesimler_sahne1108.js` — 11 yeni yerleşim
Süzgeç (`uygula_yeni.py`): güven yüksek|orta · atlasta yok (ad+50 km, 3 km komşu) · zincir kesintisiz, t:null/≥2000'de biter · d ∈ devletler.js ∩ BOYALAR.
Kabul: Canberra, Leticia, Managua · Andong, Sangju, Uljin (Kore hücresi) · Consuegra (La Mancha) · Autun, Chalon-sur-Saône, Beaune, Mâcon (Burgonya).
Her kaynak alanı **"KAYNAK OKUNMADI/teyit bekliyor"** damgalıdır: araştırma ajanları TDV/akademik kaynak okumadı (Kore: Goryeosa/Sillok okundu;
İspanya/Burgonya: yalnız es/fr.wikipedia — "Vikipedi tek dayanak olamaz" ihlali, beyanlı). Yaklaşık `kur` yazılmadı (kuralı: yıl bilinmiyorsa yazılmaz); sahne zincir başından.
Reddedilen (güven düşük/zincir kesik): Kaneş, Tel İfrîn, Beykend, Tiran (zincir 1946'da bitiyor), Urambo (1919'da bitiyor), Yeongju, Yecheon,
Ciudad Real, Almagro, Alcázar de San Juan, Cluny, Transilvanya dörtlüsü (Târgu Mureş, Bistrița, Mediaș, Reghin; d romanya-halk BOYALAR'da yok, 1526-51 kesik).
Tam dökümü: `py -X utf8 uygula_yeni.py <arastirma_dizini> <veri.json>`.

## 3. 10 kronik seyrek hücre — ölçüt incelendi
`olc_5.py` ölçütü *görecelidir* (hücre ≤ komşu ortalamasının %20'si): Ankara hücresi (Ankara+Kırıkkale) gibi içinde şehir olan hücreler de "seyrek" çıkıyor.
Gerçek boşluk 4: Kore 36-38N/128-130E, La Mancha 38-40N/4W-2W, Burgonya 46-48N/4-6E, Transilvanya 46-48N/24-26E → 1. ve 2. satırlara göre kısmen dolduruldu
(Kore 3 · La Mancha 1 · Burgonya 4 · Transilvanya 0). Kalan 6 hücre meşru seyrek (Afar çölü, Batı Mısır çölü, Sudan semi-arid, Orta Atlas, Eritre dağ/çöl, Ankara hücresi dolu).
**Aşağıda kalan iş:** Transilvanya dörtlüsü (Erdel zincirini `romanya-kralligi` boya anahtarıyla yeniden yaz), Ciudad Real/Almagro/Alcázar, Yeongju/Yecheon — akademik kaynakla.

## 4. 416 BOŞLUK'lu madde
Kendi başına işlenmedi: YERLESIM-HIJYEN-1108 oturumu `bosluk_sahipsiz` 39 + `donemler_arasi_bosluk` 2 + `donemsiz` 2 kalemini KALAN.md'de sahiplendi
(Boşluk merdiveni, Sonnet alt ajan). 416'nın çoğu `__BOSLUK__` *dönemi içindeki* madde (mağara/antik) — her biri kaynaklı Boşluk merdiveni ister; toplu uygulanamaz.

## Yeniden koşturma
`node onbellek.js <veri.json>` → `node olc_7_aday_suz.js <veri.json> cikti` · `py -X utf8 -I olc_5.py <veri.json> <cikti> ../../veri-kaynak` · `sonda.js` / `sonda_hucre.js` (yardımcı).
