# KRONO-ORNEKLEM-1004 — kronoloji çekirdeğinin doğruluk örneklemi

Oturum: KRONO-DOGRULUK-ORNEKLEM-1004 · 4 Ekim 2026 · görev: YILDIRIM BAYEZIT (send_message)
**Veriye yazılmadı, düzeltme yapılmadı.**

## 0. Evren ve seçim — ÖLÇÜMDEN ÖNCE DONDURULDU

- Evren: `data/olaylar*.js` — **75 dosya · 1761 madde** (node `vm` ile gerçek JS
  değerlendirmesi; dosyalar ada göre sıralı, dosya içi sıra korunarak tek liste).
  `kronoloji*.js` (kuyruk) bu turda DIŞARIDA.
  ⚠️ Sevkteki "8575 madde" bu evrenin değil, kuyruk dâhil bütün kronolojinin sayısı
  olmalı; çekirdek 1761'dir.
- Seçim: Python `random.seed(1004)` · `random.sample(range(1761), 25)` · sıralı.
  İndisler: `124 217 309 384 429 699 862 1042 1105 1255 1266 1305 1332 1370 1419 1434
  1464 1472 1574 1582 1587 1657 1700 1730 1743`
  Betik: scratchpad `dok.js` (döküm) + `sec.py` (seçim) — yeniden üretilebilir.

| # | dosya | t | başlık | kaynak (kısa) |
|---|---|---|---|---|
| 124 | olaylar_2s_0919.js | 1580-04-10 | Zamość'ın kuruluş belgesi | Zamość Devlet Arşivi |
| 217 | olaylar_amerika_0920.js | 1541-02-12 | Santiago del Nuevo Extremo kuruldu | Pocock 1967 |
| 309 | olaylar_ek.js | 1305-06-01 | Katalan birliklerinin Anadolu seferi | `bizans` |
| 384 | olaylar_ek12.js | 1846-11-11 | Krakov Serbest Şehri kaldırıldı | EB1911 + Hertslet |
| 429 | olaylar_ek14.js | 1580-01-01 | Zal Mahmud Paşa Camii tamamlandı | `zal-mahmud-pasa-kulliyesi` |
| 699 | olaylar_ek3.js | 1409-02-01 | Musa Çelebi Rumeli'ye geçti | `musa-celebi` |
| 862 | olaylar_ek5.js | 1451-02-18 | II. Murad'ın vefatı, II. Mehmed'in 2. cülûsu | `mehmed-ii` |
| 1042 | olaylar_ek5.js | 1799-05-20 | Akkâ Savunması | `cezzar-ahmed-pasa` |
| 1105 | olaylar_ek5.js | 1878-01-31 | Edirne Mütarekesi | `ayastefanos-antlasmasi` |
| 1255 | olaylar_ek6.js | 1885-01-26 | Hartum'un düşüşü | `sudan` |
| 1266 | olaylar_ek6.js | 1920-05-27 | Gümülcine'nin işgali | `gumulcine` |
| 1305 | olaylar_ek7.js | 1622-05-20 | Genç Osman'ın katli | `osman-ii` |
| 1332 | olaylar_ek7.js | 1721-03-21 | Mehmed Efendi'nin XV. Louis'ce kabulü | `yirmisekiz-celebi-mehmed-efendi` |
| 1370 | olaylar_ek7.js | 1834-07-08 | Redif teşkilatı kuruldu | `redif--ordu` |
| 1419 | olaylar_ek8.js | 1468-01-01 | Kâsım Han'ın ölümü, Danyal'ın cülûsu | `kasim-hanligi` |
| 1434 | olaylar_ek9.js | 1844-01-01 | Nedrûme'nin Fransız denetimine geçişi | `tilimsan` |
| 1464 | olaylar_ilirya_0072.js | 1813-01-01 | Avusturya İlirya'yı geri aldı | LZMK (4 madde) |
| 1472 | olaylar_kamerika.js | 1829-01-01 | Fort Pitt kuruldu | `bulunamadı` |
| 1574 | olaylar_p0057.js | 1919-05-11 | İtalyanların GB Anadolu kıyılarına çıkışı | `bodrum` · `sevr-antlasmasi` |
| 1582 | olaylar_p0057.js | 1920-07-20 | Yunanların Doğu Trakya'yı işgali | `milli-mucadele` · `kirklareli` · `edirne` |
| 1587 | olaylar_p0057.js | 1921-03-28 | Türk kuvvetlerinin Batum'u boşaltması | `batum` |
| 1657 | olaylar_p0068b.js | 1789-01-01 | Akkirman'ın Ruslarca alınması | `akkirman` |
| 1700 | olaylar_p0917dunya.js | 1916-03-08 | Rize'nin Rus işgali | `rize` · Çaykıran 2021 |
| 1730 | olaylar_p0917kosu13.js | 1789-11-14 | Bender'in Potemkin'e teslimi | ESBE (2 madde) |
| 1743 | olaylar_p0917taraf.js | 1892-01-01 | 1892 Tunus-Trablusgarp sınır düzenlemesi | IBS 121 |

## 1. ÖNGÖRÜ — ölçümden ÖNCE yazıldı

- **25'te 🔴 4 hata (aralık 2–6) · ⚪ 4 ölçülemedi · ✅ ~17.**
- Mekanizmalar, beklenen ağırlık sırasıyla:
  1. **③ kaynak desteği zayıf** — slug maddenin GENEL konusunu (kişi/yer) gösteriyor ama
     tarihi taşıyan cümle başka bir şeyi tarihliyor (`D211 ⑧`). Özellikle `t`'si gün
     hassasiyetli ama kaynağı geniş bir yer/kişi maddesi olanlar (ör. 1266 `gumulcine`,
     1587 `batum`, 1105 `ayastefanos-antlasmasi`).
  2. **① sahte gün hassasiyeti** — `YYYY-06-01` / `YYYY-02-01` gibi "ayın 1'i" kodları
     (309, 699): kaynak yıl/mevsim veriyor, alan ay taşıyor (`D213`).
  3. **② birleşik olay** — tek maddeye iki olay sığdırılıp `t` birine bağlanmış
     (862 vefat+cülûs, 1574 üç işgal).
- Örüntü öngörüsü: hatalar **eski `olaylar_ek*.js` (TDV slug-only kaynak)** dosyalarında
  yoğunlaşır; yeni paketler (`p0057`, `p0917*`, `2s_*`) AYNEN alıntı taşıdığı için daha temiz.

## 2. Ölçüm

(aşağıda — madde madde)
