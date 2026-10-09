# EEK-BALKAN-1009 — paket 0085/H-0022 · Dubrovnik · Kotor · Herseknovi · Trebinye · Mostar

Yöntem: `oturumlar/EEK-PROTOKOL.md`. Ağaç `C:\atlas-eekb` (detached `origin/main` = `1edf7f9a`,
KRONO-SENKRON Mostar yarısı İNMİŞ: Mostar 1466, Trebinye 1466).

## 0. ÖNGÖRÜ — ölçümden ÖNCE yazıldı (2026-10-09)
Tek bilinen (ölçüm değil, okuma): `devletler.js` künyesi `dubrovnik` f 700 t 1808-01-31,
`boya_gerekli:true`, kronolojide 1365 "haraç/himaye" kalemi; `hersek` t 1482-01-01.
- **Dubrovnik:** Osmanlı tâbiliği noktada `v:` ile DEĞİL ya hiç modellenmemiş ya da `s:dubrovnik`
  ile; `boya_gerekli:true` ⇒ kimlik BOYALAR'da yok ⇒ petek ya sahipsiz/komşuya emilmiş ya da
  boyasız görünüyor. Öngörü (~%55): Dubrovnik `s:dubrovnik` tek dönem, BOYASIZ; "eksklav" görünümü
  komşu Konavle/Ston noktalarının yokluğundan değil Hersek/Osmanlı noktalarının çevrelemesinden.
  Haraç günü veride 1365 (TDV dubrovnik) ya da 1458; TDV'nin asıl tâbilik yılı 1458 civarı olmalı.
  Sınıf: ① (gerçek ayrı polity — Dubrovnik Osmanlı'ya hiç ilhak edilmedi, haraçgüzar kaldı) ~%70.
- **Kotor:** `s: venedik` 1420 → 1797 civarı; Osmanlı'ya hiç geçmedi ⇒ ① gerçek Venedik eksklavı ~%75.
- **Herseknovi:** `s: hersek → OSMANLI 1482` (veride Hersek'in son kalesi). TDV herseknovi 302 (ölü,
  KRONO-SENKRON ölçtü). 1538-39 Venedik ara işgali veride YOK olabilir ⇒ ayrı kalem (kapsam notu).
  Sınıf: ② daha önce/aynı kampanya ile alındı — veri doğru ~%60.
- **Trebinye / Mostar:** 1466 (yeni) — ② doğru; Dubrovnik'in çevresi 1466-1482 Osmanlı + Hersek
  karışık; Dubrovnik "eksklav" görünümü 1482 sonrası Osmanlı içinde kalan ayrı polity ⇒ ① BEYAN.

> **Öngörü sınavı:** Dubrovnik ① TUTTU, ama "noktada `s:dubrovnik`, BOYASIZ" öngörüm YANLIŞ: Dubrovnik
> `v:` (tâbi, `kid:dubrovnik`) 1459-03-07→1806-05-27 ile modelli, öncesi `s:macaristan`. Kotor ① TUTTU.
> Herseknovi "② veri doğru" dedim — YARI: fetih yılı doğru (1482), ama 1463-1482 dilimi HAYALET `bosna`
> (öngörmediğim kusur; Herseknovi'nin `s:`i hiç `hersek` değilmiş). Öngörmediğim asıl bulgu: **Mliyet (Mljet)
> 1281-1797 `venedik` YANLIŞ** — ada 1410-1808 Dubrovnik toprağıydı ve Ston/Pelješac'ın peteği ona emiliyor.

## 1. NE ÖLÇTÜM
Evren: `girdi.yukle()` 93 dosya, 4300 nokta; sahip = isg > d (OSMANLI) > s > v (tâbi). Künyeler
`devletler.js` TARANDI: `dubrovnik` f 700 t 1808-01-31 **`boya_gerekli:true`** (BOYALAR'da YOK) · `hersek`
1435-1482 (boya #24c6d8) · `bosna-kralligi` (harita `bosna`) t **1463-05-01** · `venedik` t 1797-05-12.

Dubrovnik çevresi (≤115 km), o günün sahibi:
```
                1440        1459-03-07   1466-01-01   1482-01-01   1500
Dubrovnik       macaristan  TÂBİ(dubr.)  TÂBİ         TÂBİ         TÂBİ
Trebinye 22km   bosna       hersek       OSMANLI      OSMANLI      OSMANLI
Herseknovi 43   bosna       bosna(!)     bosna(!)     OSMANLI      OSMANLI
Mliyet 48       venedik     venedik      venedik      venedik      venedik     ← yanlış (1410+ Dubrovnik)
Kotor 61        venedik     venedik      venedik      venedik      venedik
Mostar 80       bosna       hersek       OSMANLI      OSMANLI      OSMANLI
Podgorica 99    sirbistan   OSMANLI      OSMANLI      OSMANLI      OSMANLI
```
Noktasız yerlerin emildiği nokta (yaklaşık Voronoi = en yakın nokta): **Ston → Mliyet 17 km** · Orebić
(Pelješac ucu) → Korçula 23 km · Cavtat/Konavle → Dubrovnik 13 km · Slano → Dubrovnik 23 km · Neum →
Mliyet 20 km · Sutorina → Herseknovi 4 km · Blagaj → Mostar 11 km.

## 2. YER YER KARAR

### Dubrovnik — **① GERÇEKTEN ATLANDI (eksklav yapı DOĞRU)** · Emre'nin sorusuna cevap: EVET, eksklavdı
- 1459-03-07'de (veride tâbilik günü) Dubrovnik Osmanlı-tâbi rengindedir; 115 km içindeki tek Osmanlı noktası
  Podgorica (99 km); arada Hersek (Trebinye, Mostar) ve `bosna` (Herseknovi) var ⇒ haritada ayrık.
  1466-01-01'de Trebinye düşünce Osmanlı gövdesine bitişir.
- Tarihî olarak doğru: haraçgüzârlık TOPRAK bağı değil ahidnâme bağıdır. TDV `dubrovnik` (200):
  «Dubrovnik kaynaklarına göre 1365 tarihli olan bu ahidnâme ile Dubrovnik Osmanlılar'ın haraçgüzârı oluyor»
  · «7 Mart 1459'da verilen yeni bir ahidnâme ile … yıllık haraç 1500 filori olarak hükme bağlandı». 1365'te
  Osmanlı Adriyatik'ten yüzlerce km uzaktaydı — tâbilik bitişiklik olmadan başladı.
- Çare: hiçbir şey yazılmaz, eksklav BEYAN edilir. Veri günü 1459-03-07 TDV'de adıyla var; maddesi
  `olaylar_ek2` aynı gün.
- ⚠️ Karar sende (diff yok): (a) TDV tâbiliği 1365'ten başlatıyor ("Dubrovnik kaynaklarına göre" kaydıyla) ve
  1390/1408/1414/1430/1445 ahidnâmelerini sayıyor; atlas 1459'u (günlü ahidnâme) seçmiş. 1365'e çekmek
  1358-1459 `macaristan` dilimiyle çatışır — MODEL kararıdır. (b) `dubrovnik` künyesi BOYASIZ (beyanlı borç):
  1358-1459 Dubrovnik `macaristan` rengiyle **Macar adası** görünür (Değişmez 7: "1358-02-18 Dubrovnik →
  macaristan 163 km ada"). Cumhuriyetin kendi rengi motor işidir (`renkler.py`, tam inşa).

### Kotor — **① GERÇEKTEN ATLANDI (Venedik eksklavı DOĞRU)**
- `s:` sirbistan → macaristan 1371 → **venedik 1420-01-01 → 1797-10-17**. Hiç Osmanlı olmadı.
- TDV `kotor` **302**; TDV `dalmacya` Kotor'u yalnız eser listesinde anıyor ⇒ TDV'de sahiplik **bulunamadı**.
  Akademik: LZMK `kotor` (enciklopedija.hr): «Nakon kratkoga razdoblja neovisnosti (1391–1420) … grad se
  predao Mletačkoj Republici, pod čijom je upravom ostao sve do njezina pada 1797»; Osmanlı kuşatmaları 1537,
  1657 (alınamadı). Veri kaynağa uyuyor. Çare: BEYAN.
- Yan not (kapsam dışı): `venedik` künyesi 1797-05-12'de bitiyor, Kotor/Dalmaçya noktaları 1797-10-17'ye dek
  `venedik` — bilinen 4c ailesi.

### Herseknovi — fetih **② DOĞRU (1482)**; 1463-1482 kimliği HAYALET ⇒ D205 sınıf ③ (ardıl künye)
- `s: bosna 1382-01-01 → 1482-01-01`, `d: 1482-01-01 → 1687-09-30`. `bosna-kralligi` 1463-05-01'de bitiyor ⇒
  **+18,7 yıl aşım** (denetle 4c listesinde adıyla). Trebinye/Mostar'daki aynı hayalet KRONO-SENKRON'da
  `hersek`e çevrilmişti; Herseknovi kalmıştı.
- Kaynak: TDV `herseknovi` **302** · TDV `bosna-hersek` (200): «buranın diğer bir kısım toprakları ise 1482
  başlarında fethedilerek sancağa katılmıştı» · TDV `hersekzade-ahmed-pasa` (200): «1459'da Herseg-Novi'de
  (Kastel Nuovo) doğdu … Stjepan Vukčić-Kosača'nın küçük oğludur» · LZMK `herceg-novi`: «U doba Stjepana
  Vukčića Kosače grad se po njem nazivao »hercegov novi grad«» · «Godine 1483. zaposjeli su ga … Osmanlije»
  (⚠️ TDV 1482 / LZMK 1483 — TDV esas, çelişki kayda yazıldı).
- D205: ③ ardıl yapı — Bosna Krallığı öldü, Novi Kosača'nın elindeydi; `hersek` künyesi (1435-1482) pencereyi
  TUTUYOR; kısaltmak delik açardı. Çare: `bosna 1382→1448 · hersek 1448→1482`. ⚠️ **1448 ÇIKARIMDIR**:
  Novi'nin Kosača'ya geçiş yılını adıyla veren kaynak bulunamadı; 1448 = komşu Trebinye/Mostar kayıtlarının
  Herceg unvanı yılı (EB1911) — kayıtta yazılı.
- EEK açısından: 1466-01-01 → 1482-01-01 Herseknovi, Osmanlı Trebinye, Venedik Kotor ve tâbi Dubrovnik
  arasında **yalnız kalmış Hersek kalıntısıdır ⇒ ①** (TDV: Hersek'in «diğer bir kısım toprakları» 1482 başında
  alındı). Düzeltmeden sonra bu ada doğru kimlikle (`hersek`) çizilir; önce hayalet `bosna` rengindeydi.
- Kapsam dışı: TDV `dalmacya` «son olarak da 1686'da Castelnuovo'yu aldılar»; veri ve LZMK 1687 (veri
  1687-09-30). Çelişki BİLDİRİLDİ, dokunulmadı.

### Trebinye — **② DAHA ÖNCE ALINDI (1466), veri doğru** (KRONO-SENKRON-1008 üstüne; yeniden ölçülmedi)
- TDV `trebinye`: «1466'da Trebinye hemen hemen bütün Hersek bölgesiyle birlikte Osmanlılar tarafından ele
  geçirildi». Dubrovnik'in eksklavlığını bitiren nokta budur (1466-01-01'den sonra kara komşusu Osmanlı).

### Mostar — **② DAHA ÖNCE ALINDI (1466, aralığın alt ucu), veri doğru** (KRONO-SENKRON-1008)
- TDV `mostar`: «1466-1468'de Blagaj, Osmanlılar tarafından fethedildikten az önce Mostar da zaptedilmiş
  olmalıdır»; 1468-69 tahriri üst sınır. Blagaj noktasız, Mostar'a (11 km) emiliyor ⇒ paket kendiliğinden
  doğru. Bilinen 8b borcu (Saraybosna bölgesi 1448-1466 Hersek'i örtüyor) motor işi, değişmedi.

### Mliyet (Mljet) — iki uç ölçümünden (D206) çıktı: **④ PAKET — Dubrovnik ile birlikte yazılmalı**
- Veride `venedik 1281 → 1797-10-17 · avusturya → 1806-02-01 · fransa 1806-02-01 → …`. LZMK `mljet`: «God.
  1410. Mljet je konačno potpao pod vlast Dubrovačke Republike, u sastavu koje je ostao sve do njezine
  propasti 1808» · «Nakon propasti Dubrovačke Republike Mljet je bio pod francuskom upravom». TDV `dubrovnik`
  Mljet'i anmıyor (bulunamadı). LZMK `ston`: «1333., zajedno s Pelješcem, došlo u posjed Dubrovačke
  Republike» — Ston noktasız ve Mliyet'e emildiği için Ston + Pelješac kökü de Venedik boyanıyordu ⇒
  Dubrovnik toprağı haritada olduğundan KÜÇÜK.
- Çare: Dubrovnik zinciri AYNEN (paket): `venedik → 1358-02-18 · macaristan → 1459-03-07 · v tâbi(kid
  dubrovnik) → 1806-05-27 · fransa → 1813-01-01 (eski uç)`. ⚠️ **1358-1410 ÇIKARIMDIR** (LZMK yalnız «u XIV.
  st. … jačao dubrovački utjecaj» ve 1410 «konačno»); kayıtta yazılı. 1358-02-18 günü komşudan: Dubrovnik ·
  LZMK Zadarski mir (aynı olay, 48 km; zincirleme yok).

## 3. NE BULAMADIM
- TDV `raguza`, `kotor`, `herseknovi`, `bosna` **302**; TDV `hersek` 200 ama gövdesi Kosača dukalığını
  anlatmıyor. Hersek dukalığının Osmanlı'ya TÂBİLİĞİ için TDV cümlesi bulunamadı ⇒ Hersek'e `v:` önerilmedi.
- Herseknovi'nin Kosača'ya geçiş yılı; Mliyet'in 1358-1410 sahibi.
- Emre'nin görseli (322×288) bu makinede yok; metinle yürüdüm.
- Değişmez 7 733→732: kaybolan enklavın ADI ölçülmedi.

## 4. KAPI — `PYTHONHASHSEED=0 py arac/denetle.py` (ağaç 1edf7f9a, D8 girdileri YOK)
```
taban                 : çıkış 2 (yalnız D8 ÖLÇÜLEMEDİ: devletler_harita.js yok) · ihlal 0
yalnız KOORD diff'i   : çıkış 1 — 2s 184 → 186 AÇIK ✗ (Mliyet 1459-03-07 ve 1806-05-27 kırılmaları;
                        aynı gündeki Dubrovnik maddeleri Mliyet'i anmıyor)
KOORD + KRONO         : çıkış 2 (tabanla aynı kova, ihlal 0)
  2   624/0 → 624/0 · 2s 1721/184 AÇIK/791/166 → 1721/184/791/166 (AÇIK kümesi ADIYLA AYNI)
  2sk kapalı 4186 → 4188 (YER +2) · yalnız-taraf 2250 → 2250 · 2i 1 · 2t 13 · 1 309 · 4 0 · 4d 324
  4c  127 → 126 (Herseknovi hayaleti düştü) ⇒ BEKLENEN_ASAN 127 → 126 AYNI COMMIT'te (§3.4-3)
  7   733 → 732 (🧊 bloke etmez; beklenen 731)
```
⚠️ Taban çıktısında önbellekten bir 8a/8b/8k bloğu da basıldı ("gövde 2026-10-09 14:42"), sonrakinde
basılmadı; iki koşuda da hüküm "Değişmez 8 ÖLÇÜLEMEDİ" ⇒ D8 karşılaştırılamadı.
Öngörü notu: diff ölçümden sonra doğdu; KOORD tek başına 2s'yi kıracağını ÖNGÖRMEDİM — ölçüm gösterdi.

## 5. NE İSTİYORUM
1. `EEK-BALKAN-1009-KOORD.diff` + `EEK-BALKAN-1009-KRONO.diff` **aynı commit'te** + `BEKLENEN_ASAN`
   127 → 126. İkisi de `git apply --check --cached` ve worktree'de TEMİZ (taban 1edf7f9a, LF).
2. Dubrovnik ve Kotor: diff yok, eksklav BEYAN (bu rapor beyandır).
3. Karar sende (diff yok): (a) tâbilik 1365 mi 1459 mu · (b) `dubrovnik` künyesine boya (tam inşa) ·
   (c) Ston ve Orebić (Pelješac) noktası — LZMK `ston` 1333 · (d) 1699/1718 Neum ve Sutorina Osmanlı
   koridorları noktasız: Neum Mliyet'e, Sutorina Herseknovi'ye (1687+ venedik) emiliyor — ayrı `*eek` adayı.
4. Veri koşusu yeter (motor tuzuna dokunulmadı).

## Dosyalar
- `denetim/EEK-BALKAN-1009.md` (bu rapor)
- `denetim/EEK-BALKAN-1009-KOORD.diff` — `data/yerlesimler.js` (Mliyet) · `data/yerlesimler_ek.js` (Herseknovi)
- `denetim/EEK-BALKAN-1009-KRONO.diff` — `data/olaylar_ek2.js` (1459-03-07) · `data/olaylar_ek6.js`
  (1806-05-27); yalnız `yer:` · `d:` · `ic_not_d` · `kaynak:`; `t:`/`b:`/`yer_id` değişmedi.
