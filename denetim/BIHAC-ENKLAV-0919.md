# BIHAC-ENKLAV-0069 — H-0002 · Bihaç 1804-02-14'te neden kopuk görünüyor

19 Eylül 2026 · işçi BIHAC-ENKLAV-0069 · şartname `oturumlar/DALGA-0069.md`

## Hüküm
**Yayındaki harita yanlış; girdi verisi 17 Eylül'de zaten düzeltilmiş, düzeltme henüz yayına inmedi.**
Emre'nin sorusunun cevabı: aradaki topraklar 1804'te Osmanlı'dan kopuk DEĞİLDİ.

## 1. Tarihî gerçek (TDV)
- TDV `bihac` (HTTP 200, gövde 13.8 bin karakter, doğru madde): "Karlofça Antlaşması'nın (1699)
  ardından Bihaç ve çevresi Osmanlılar'ın elinde kaldı, ancak Bihke sancağı kaldırılarak Bosna
  sancağına bağlandı." Bihke sancağı şehirleri: Bihaç, Donji Kamengrad, Ripaç, Cazin, Buzim,
  Ostrovica, **Bosanska Krupa**. Fransızlar 1809'da (Viyana, 4 Ekim 1809) Osmanlı'ya komşu oldu;
  Avusturya Bihaç'ı 18 Eylül 1878'de aldı.
- TDV `zistovi-antlasmasi` (200): barış "status quo ante bellum" esasında; ayrıca "Bosna'nın Unna
  suyu arkasında yer alan Hırvatlık arazisi" Avusturya'ya bırakıldı. Yani Una'nın BATISI
  (Cetin/Drežnik yöresi) gitti; Una doğusundaki Krupa–Novi–Dubica hattı Osmanlı'ya döndü.
- Ölü slug: `bihke`, `bosna`, `karlofca-antlasmasi` → 302 (kullanılmadı).

## 2. Ölçüm — aradaki boşluğu kim boyuyor
Yöntem: 0,1° ızgara, her hücreye en yakın (1804-02-14'te var olan) yerleşimin sahibi.
Bu **düz Voronoi yaklaşımıdır**, motor değildir (k ağırlığı, yaslanma yok) — motor koşusu
yasak olduğu için gerçek petek Koşu 14 çıktısında doğrulanmalıdır.

| Girdi | Bihaç–Banaluka arası | Aradaki hücreleri boyayan |
|---|---|---|
| **Koşu 12 tabanı `710b3ad`** (bugünkü yayın r8939) | KOPUK — lat 44,6–45,1 · lon 16,0–16,9'da Avusturya kaması | Bosna Novi'si 33 · Bosna Brod'u 16 · Bosna Dubiçası 10 hücre, üçü de `s: avusturya 1699-01-26 → 1918-11-11` |
| **Bugünkü girdi (HEAD)** | BİTİŞİK — lat 44,5–45,1 boyunca bütün satırlar Osmanlı | yok (Kostajnica/Jasenovac yalnız Sava kıyısındaki 45,2+ satırında) |

Koşu 12 tabanındaki kayıtlar: Novi `d: 1556→1699-01-26` ardından Avusturya; Dubica aynı;
**Krupa noktası YOK**. Bugünkü girdide Novi `d: 1556→1908-10-05` (Karlofça metni "on the part
of Bosnia" · TDV karlofca · bosna-hersek), Dubica `d: 1739-09-28→1908-10-05` (+`isg` 1788–1791),
Krupa `d: 1565→1908-10-05` (HE Bosanska Krupa; not: "Bihaç eksklavının ikinci bağı").
Düzeltmeyi getiren commitler: `55a5b28` KOSU13-YAMA (17 Eyl 15:04) · `9b92117` KOSU13 OTOBÜSÜ
(17 Eyl 19:46). Koşu 14 worktree'si (`1d2a43f`) `9b92117`yi İÇERİYOR, `yerlesimler_ek29.js`'te
Krupa var.

`py arac/denetle.py` (HEAD, çıkış 0): **Değişmez 7 ✓ 667 sorgusuz enklav (beklenen 667)** —
değişiklik yok; `--ayrinti` listesinde 1804 için Bihaç adası YOK (tek Bihaç satırı 1878-09-18
işgal kaydı, ayrı konu).

## 3. Sınıflandırma
- **Asıl sebep: sahip/tarih yanlış** (Novi, Dubica, Brod 1699'dan sonra Avusturya yazılmış) +
  **nokta eksik** (Krupa). Motor sebebi değil.
- **Durum: VERİDE KAPANMIŞ, YAYINDA AÇIK.** Yeni yama gerekmedi → `denetim/YAMA-BIHAC-0919.json`
  YAZILMADI (boş yama üretilmedi). Koşu 14 yayına inince 1804 haritasında kapanmalı.

## 4. Yan bulgular (bu maddenin kapsamı dışı, sahipsiz — öneri)
Ters yön kuralı gereği iki uç da ölçüldü; ikisi de NOKTASIZLIK kaynaklı:
- **Osmanlı eksik:** Knin (`avusturya`) peteği Bosna Krajina'sının güneybatısını boyuyor —
  lat 44,0–44,4 · lon 15,5–16,6 (Kulen Vakuf, Bosanski Petrovac, Drvar yöresi; ızgarada 41 hücre).
  TDV `bihac`a göre Ripaç/Kamengrad Osmanlı sancağındaydı. Bu yörede Osmanlı noktası yok.
- **Osmanlı fazla:** Lika (Udbina, Korenica, Gospić yöresi; lat 44,5–44,8 · lon 15,5–15,8) Bihaç
  peteğine düşüyor; 1699'dan beri Avusturya Askerî Sınırı. Lika'da nokta yok.
- **Una batısı:** Ziştovi ile Avusturya'ya geçen Cetin/Drežnik noktasız → Bihaç peteğinde kalıyor.
Üçü için de koordinat + kaynaklı yeni nokta paketi gerekir (§6: önce yoğunluk).

## Değişen dosya (1. tur)
Yalnız bu rapor. Veri dosyasına dokunulmadı.

## 5. İkinci tur — §4'ün kaynaklı nokta paketi (1.MURAT sevki)
Yama: `denetim/YAMA-BIHAC-NOKTA-0919.json` · uygulandı: `data/yerlesimler_ek29.js` (+5 nokta),
YENİ `data/olaylar_p0069.js` (`window.OLAYLAR_P0069`, 9 madde, index.html'e bağlı DEĞİL).

| Nokta | Kalem | Osmanlı | Kaynak |
|---|---|---|---|
| Ostrovica (Kulen Vakuf) | a | 1523 → 1908 (isg 1878-09-18) | USK Kültür Mirası Enstitüsü · HE |
| Udbina | b | 1527-05 (ay) → 1689 | HE udbina · TDV kirka |
| Gospić | b | 1527 → 1689 | HE gospic |
| Cetin (Cetingrad) | c | 1636–38 · 1670 → 1791-08-04 (isg 1790) | HE cetingrad · Korić 2016 · TDV zistovi |
| Drežnik (Drežnik Grad) | c | 1592 → 1791-08-04 (isg 1788) | HE dreznik-grad · Korić 2016 |

1804-02-14 ızgarası (düz Voronoi): Lika (lon 15,5–15,9 · lat 44,3–44,6) ve Una batısı
(Cetin/Drežnik) artık Avusturya; Bihaç–Banaluka bağı korunuyor; Knin'in Bosna'ya taşan
payı 41 → 30 hücre.

`denetle.py` farkı (yalnız bu paket): Değişmez 1 3916→3921, sahipsiz 299→299 · Değişmez 2
579→587, **0 açık** · 2s açık 13→13 · 2i açık 1→1 · Değişmez 7 **667→667**.

Açık kalanlar: (a)'nın güney yarısı (Grahovo/Drvar/Petrovac) — Osmanlı dönemi için kaynak
**bulunamadı** (HE maddeleri sessiz, TDV'de madde yok) · Drežnik HE 1788 ↔ Korić 1790
çelişkisi · modellenmeyen kısa aralıklar (Drežnik 1578/1683/1697–99, Cetin 1809/1813) ·
1809–1813 Fransız İlirya dönemi atlasın bu kesiminde hiç yok.
