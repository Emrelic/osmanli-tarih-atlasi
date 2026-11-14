# YERLESIMLER-JS KUYRUĞU EK4 — Yunan 1821 (KASA, 14 Kasım 2026)

Dayanak: `denetim/HAKEM-YUNAN-1821-1114.md` (Beaton 2021, Akyay ABAD 2022, Erman MUTAD 2021, Karidis RAN 2022; Feyzioğlu TTK 2024; TDV Yunanistan: önce Eflak-Boğdan, ardından Mora).

## Karar
- "Yunan İsyanı başladı" (olaylar.js:150) `1821-03-25` → **`1821-03-06`** (Prut geçişi, Eflak-Boğdan).
- Mora ayrı madde: **`1821-04-02`** (Kalavrita; 21 Mart Jülyen). Kalamata 04-04 ve Mani 03-29 not düşülür.
- 25 Mart (Jülyen) = 06 Nisan: yalnız anma notu, olay değil.
- Mora'daki 19 yerleşim kırılması (`1821-03-25`) → **`1821-04-02`**. Eflak-Boğdan Yunan yerleşimi değildir.
- `ic_not`: Mora için teyitsiz çelişki (Feyzioğlu: Argos 17 Mart). Mora tek gün değil, 17-24 Mart Jülyen kümesi.

## data/yerlesimler.js (17 satır) — KOŞU İNİŞİNDEN SONRA
Atina, Mora (Tripoliçe), Modon, Balyabadra (Patras), Anabolu (Nauplion), Vostitsa (Aigion), Kalavrita (Kalavryta), Damala (Troizen), Methana, Ermiyoni (Hermione), Kranidi, İstefe (Tebai), Livadya, Kulluk (Salamis), Egina (Aegina), Çamlıca (Hidra) + yorum satırı: `1821-03-25` → `1821-04-02`.
Satır numaraları taze ölçülmeli (`grep -n "1821-03-25" data/yerlesimler.js`).

## Yerlesimler.js DIŞI (şimdi yazılabilir)
- `data/yerlesimler_ek_adalar.js` (3), `data/yerlesimler_zincir64.js` (4, Atina d ucu dahil): aynı değişiklik.
- `data/olaylar.js:150`, `data/savaslar.js:411` ve `:501` (`savas_basi`), çeviri anahtarları (`ceviri_*_olay_*.js` `OLAYLAR:1821-03-25:*`, `olay_taraf.js`) birlikte taşınır.
- Değişmez 2: yeni Mora maddesi (04-02) kırılmaların ±30 günündedir; Prut maddesi (03-06) Mora kırılmasına 27 gün uzak ama Mora maddesi karşılar.

Durum: YAZILMADI. Yerlesimler.js kısmı koşu inişinden sonra tek commit'te.
