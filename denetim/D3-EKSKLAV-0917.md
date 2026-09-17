# D3-EKSKLAV-0917 — DALGA-0064 enklav/eksklav teyidi (D3-AVRUPA-ORTA)

Maddeler: H-0002 · H-0003 · H-0005 · H-0008 · H-0010 · yama `denetim/YAMA-0064-BALKAN.json` ·
alet `denetim/ARAC-EKSKLAV-0917.py` · ölçüm `denetim/OLCUM-EKSKLAV-0917.json`.
Yerleşim dosyalarına YAZILMADI.

## 1. Alet — H-0010'un "önce ölç" adımı

`ARAC-EKSKLAV-0917.py --gun G --devlet D --kutu … [--yama Y] [--donemler]`
- Sahiplik `denetle.degismez7` ile aynı (d/v → OSMANLI, s → kimlik; isg sahipliği değiştirmez).
- Komşuluk: o gün var olan bütün noktaların Delaunay üçgenlemesi (petek komşuluğunun ikizi), kenar ≤ 400 km.
  `degismez7`nin 150 km "bağlı" eşiği bu soruyu sormaz: Bihaç–Banaluka 104 km'dir, eşik ikisini bağlı sayar,
  harita ise aradaki petek başkasınınsa kopuk çizer.
- Her kopuk parça için ana gövdeye en kısa yol ve yol üstündeki başka sahipli noktalar ("aradaki") basılır.
- `--yama` kalemlerin `uygula` alanını bellekte uygular, ÖNCE/SONRA verir. `--donemler` canlı çıktıya (data/donemler.js) bakar.
- Yaklaşıklamadır: kara maskesi, nehir/dağ yaslanması yok.

**İki yön sınaması (D010):** Novi'nin eski kaydı (1699 sonrası avusturya) bellekte geri kurulunca alet
1737-08-04'te `KOPUK: Bihaç · arada Bosna Novi'si sahip=avusturya` basıyor. Bugünkü veriyle kopuk parça 0.
Balkan kutusunda (40,5-48,5K · 13-30D) 1690-1800 arası 15 kesitte başka Osmanlı kopuk parçası 0.

## 2. Madde madde

| madde | hüküm (H-0010) | ne ölçüldü |
|---|---|---|
| H-0003 Bihaç enklavı (1737) | **B1 — veri hatası, çoğu zaten düzeldi** | Canlı harita KOSU 12; orada Novi (petek #1860) Osmanlı değil. Novi kaydı 55a5b28 (bugün 15:04) ile d:1556→1908 oldu → KOSU 13+ ile kapanır. Kalan hata: Bosna Dubiçası 1699'dan sonra hep Avusturya yazılmış; Karlofça metni ters okunmuş (kalem 1). Güçlendirme: Krupa kalesi yeni nokta (kalem 4). |
| H-0003 "koyu halka" | — | UI-HARİTA'nın ölçeceği lejant sorusu (H-0012 ile aynı); bu yamada yok. |
| H-0008 Bihaç (1739) | B1 | Aynı sebep (Novi). |
| H-0008 Knin Avusturya'da mı | **A — hayır, Venedik'te; kayıt doğru** | HE: 1522-05-29 Osmanlı · 1688-09-11 Venedik · 1797 sonrası Habsburg. Kayıt birebir. |
| H-0008 Bosna Novi Avusturya'da mı | **B1 — hayır, Osmanlı'da; kayıt düzeldi** | HE Novi Grad: Avusturya yalnız 1691–1703 ve 1788–95. 1788-91 işgali eksik (kalem 2). |
| H-0005 Semendire enklavı (1738-08 → 1739-09) | **B4 — kaynak koridordan söz etmiyor** | Alet: arada YALNIZ Jagodina. Semendire günü TDV'ye dayanıyor (Ağustos 1738). Jagodina/Paraćin/Ćuprija için gün **bulunamadı**. Şık A (öneri): Jagodina'yı Semendire günüyle katmak (kalem 5, karar bekliyor). Kragujevac, Çaçak, Belgrad, Böğürdelen, Turnu Severin 1739'a kadar Avusturya: doğru (Sırp Ansiklopedisi'ndeki ilçe listesi + Belgrad barışı). |
| H-0002 taralı şerit (1737-08-04) | **A — işgal gerçek, günler kaba** | Niş'in Avusturya işgali (TDV nis). Kayıt 07-01 → 10-01; öneri 07-27 (Sırp Ansiklopedisi) → 10-16 (mevcut madde) (kalem 6). |

## 3. Kaynaklar
TDV `semendire` · `nis` · `mahmud-i--osmanli` · `pasarofca-antlasmasi` (gövdeler okundu) ·
Srpska enciklopedija "Austro-turski ratovi" (V. S. Dabić) · Hrvatska enciklopedija (Kozarska Dubica, Hrvatska Dubica,
Novi Grad, Hrvatska Kostajnica, Jasenovac, Bosanska Krupa, Prijedor, Knin) · E. Korić, *Prilozi za orijentalnu
filologiju* 65 (2016) · Royal Collection Trust RCIN 734105.f (1788 Mechel baskısı, Dubica 26 Ağustos 1788).
Vikipedi yalnız arama ipucu olarak görüldü; hiçbir hükme dayanak yapılmadı.

## 4. Bulunamadı / açık
- Jagodina · Paraćin · Ćuprija · Požarevac'ın 1737-39'da Osmanlı'ya dönüş günü.
- Jasenovac'ın Avusturya'ya geçiş günü (HE: muhtemelen 1716-18).
- Karlofça devri sapmaları (Dubica 1687–1701, Novi 1691–1703, Kostajnica 1687) yalnız yıl düzeyinde; kalem 3'te karar bekliyor.
- Dubica/Novi hukukî iadesi 1791-08-04; fiilî boşaltma 1795–97 (HE). Yama hukukî günü kullandı.
- Pasarofça şeridinde Dubica için HE fiilî 1716–41 diyor, yama Brod'un TDV günlerini (1718-07-21 · 1739-09-28) kullandı.
- `denetim/HAZIRLIK-BOSNA-NOKTA-0911.json` Karlofça metnini tersine okumuş ("garnizonlar çekilecek" = Osmanlı'ya kalır). Aynı okuma Jasenovaç kaydında da duruyor. Noktanın yakası (sol) Avusturya'yı doğruluyor, ama kaynağı yanlış cümle.
