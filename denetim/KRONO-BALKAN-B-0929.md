# KRONO-BALKAN-B-0929 — TESLİM RAPORU (Batı Balkanlar)

29 Eylül 2026 · şartname `oturumlar/KRONO-BALKAN-B-0929.md` · ORTAK §4.1 (M-5396) ve
künye hükmü (M-5416) uygulandı.

## ① Ölçtüm

**Yazılan: 103 madde, 4 dosya** — hepsi `window.KRONOLOJI_COK_*` yolunda, her madde
`devlet:`/`devletler:` ile künyeye bağlı (künyeyi ezmez, ekler).

| Dosya | Madde | Künyeli (bugün bağlanır) | Önerilen künyeli (künye açılınca bağlanır) |
|---|---|---|---|
| `data/kronoloji_cok_sirbistan.js` | 36 | 36 | — |
| `data/kronoloji_cok_arnavut.js` | 31 | 21 | 10 (`iskodra-pasaligi` 3 · `arnavutluk-osmanli` 7) |
| `data/kronoloji_cok_bosna.js` | 28 | 14 | 14 (`bosna-eyaleti`) |
| `data/kronoloji_cok_karadag.js` | 8 | 8 | — |

Künye dağılımı: sirbistan-prensligi 22 · bosna-eyaleti 14* · arnavutluk-iskenderbey 11 ·
habsburg 10 · karadag 8 · arnavutluk-osmanli 7* · venedik 6 · arnavutluk-bagimsiz 6 ·
bosna-isgal 5 · sirbistan-nemanjic 4 · sirbistan-eyaleti 4 · iskodra-pasaligi 3* ·
sirp-despotlugu 3 · diğer 1-2'şer (* = önerilen, henüz yok).

**Kaynak:** TDV birincil — atıf yapılan 19 madde gövdesi okundu ve önbelleklendi
(`denetim/KRONO-BALKAN-B-0929-tdv-onbellek/`): sirbistan · semendire · belgrad · nis ·
serez · bosna-hersek · bosna-eyaleti · saraybosna · gazi-husrev-bey · karadag · arnavutluk ·
iskender-bey · kruya · ilbasan · avlonya · tiran · iskodra · prizren · mustafa-pasa-busatli. TDV'nin susduğu XIX. yüzyıl iç siyaseti (Sırp anayasaları, hanedan değişimleri,
Karadağ Senato/Danilo, 1879-80 Plav-Ülgün, 1913 İşkodra teslimi) için akademik el kitapları
adıyla: Petrovich 1976 · Fine 1987 · Jelavich 1983 · Malcolm 1994 · Roberts 2007 ·
Vickers 1995 · Banac 1984. **Sayfa numarası yazılmadı** — doğrulanmamış sayfa atfı
uydurma olurdu; eser adı yazıldı.
Gün bilinmeyen 53 maddede `YYYY-01-01` + `gun:` açıklaması (§4).

**Denetim:**
- `node --check` 4/4 ✓
- `py arac/denetle_kronoloji.py`: 4 dosyanın 4'ü **✓ temiz** (toplam 39 ihlal başka dosyalarda).
  `yer_id`'ler tam yerleşim adıyla (denetim tam ad ister, app.js ikisini de çözer).
- `py arac/odak_olc.py`: 4 dosyada **kırık atıf 0 · ODAKSIZ 0** (103 maddenin 69'u KONUMLU,
  34'ü `odak_yer` ile KUTULU — `odak_yer` kamera içindir, olay yeri iddiası değildir).
  ⚠️ Küresel ODAKSIZ sayısı 500 (tavan 485) — artış bu paketten DEĞİL (bu 4 dosya 0 katkı);
  başka yeni `kronoloji_cok_*` dosyalarından (ör. `cok_1dunya_A` 97).
- `py arac/denetle.py`: **SONUÇ: temiz.**
- Mükerrer taraması: 90 aday × 7.482 kayıt (±400 gün, anahtar kelime) + künyelerin kendi
  kronolojileri + `kronoloji_balkan.js`. Künyede/`kronoloji_balkan.js`te/çekirdekte olan
  maddeler yazılmadı (ör. 1443-11-28 isyan, 1468 ölüm, 1852 Danilo, 1912-11-28, Wied
  gelişi, Lushnjë). Bilerek iki istisna, `ic_not_d`de beyanlı: 1718 Pasarofça ve 1812
  Bükreş (çekirdekte Osmanlı gözüyle; burada Sırp hükmü) · 1478 Kruya (gün çelişkisi).

**İlk iş — Sırbistan özerklik fermanı:** TDV `sirbistan` **17 Ekim 1830** diyor; cümle
ayrıştırıldı, aynı belge. 30 Ağustos ve 8 Kasım için kaynak bulunamadı; `olaylar_ek.js`
8 Kasım'ı yazıp kaynak olarak TDV `sirbistan`ı gösteriyor — gösterdiği kaynak 17 Ekim diyor.
Ayrıntı + öneri: `-DUZELTME.md` §1, harita: `-YERLESIM-ONERI.md` §1.

## ② Bulamadım

- 30 Ağustos 1830 ve 8 Kasım 1830 günlerinin kaynağı.
- Tuzla (1460) ve Trebinye (1466) Osmanlı'ya geçiş günleri — TDV vermiyor.
- Novo Brdo'nun düşüşü (1455) — TDV'de bulunamadı, yazılmadı.
- Buşatlı Mustafa Paşa'nın İşkodra'yı teslim günü (1831 sonbaharı).
- TDV'de ölü slug (302): milos-obrenovic · karayorgi · kara-yorgi · busatlilar ·
  prizren-cemiyeti · ismail-kemal(-bey) · balkan-savaslari · cetine · ulgun · berat
  (Berat: `berat` 302, bilgi `iskender-bey`den okundu).
- Karadağ için TDV `karadag`ı `kronoloji_balkan.js` zaten tüketmiş; yeni Karadağ maddeleri
  yalnız akademik kaynaklı (8 madde, bilerek az).

## ③ İstiyorum / öneriyorum

1. **Künye aç** (M-5416 kural 3): `bosna-eyaleti` · `iskodra-pasaligi` · `arnavutluk-osmanli`
   — id, ad, f/t, D205 sınıfı, kaynak ve bağladığı madde sayısı: `-KUNYE.md` §2.
   Açılınca 24 madde kendiliğinden bağlanır; dosyaya dokunmak gerekmez.
2. **Düzeltmeler** (`-DUZELTME.md`): §1 özerklik fermanı 1830-10-17 (çekirdek + savaslar +
   künye) · §2 Semendire 1439-08-27 (künye + `kronoloji_sirbistan.js`) · §3 Kruya 06-16 ·
   §4 Hersek ilhakı çekirdekte 1483→1482 · §5 Wied künye metni "Ekim"→"Eylül" · §6 TDV'nin
   kendi içindeki üç çelişki · §7 `kronoloji_balkan.js` 1912-10-08 üçlü mükerrer.
3. **Harita önerileri** (`-YERLESIM-ONERI.md`): Kragujevac/Çaçak/Yagodina 1830-11-08 →
   1830-10-17 (çekirdekle BİRLİKTE) · Serez 1345-01-01 → 1345-09-25 · Akçahisar 06-15 → 06-16.
4. **`index.html` + `arac/paketle.py`**: dört dosya bağlanmayı bekliyor.
5. **Evren kararı** (SENKRON-DEFTER M-5398 ile aynı soru): `kronoloji_cok_*` Değişmez 2
   evreninde değil — 1919-08-12 Prekmurje maddesi haritadaki açık kırılmayı içerikte kapatıyor
   ama kapı görmüyor.
6. **`dunya` ayrışması (yatay, KRONO-TUNA):** 1812-05-28 Bükreş — `cok_romanya` 2, `rusya` ve
   `cok_sirbistan` 3. Benim maddem çoğunluğa (3) çekildi.
