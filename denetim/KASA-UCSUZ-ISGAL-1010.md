# KASA-UCSUZ-ISGAL-1010 — teyit edilmiş ama uçsuz 4 dilim için SON uç arama (+ Thonon ve Görice şartları)

Görev: YILDIRIM BAYEZIT (YENI5 hükmü (d) ① ②) · Araştırmacı: KASA · `data/` DONUK · salt okuma · `main` 14bb94b9.

## A. Thonon şartı (①) — ÖLÇÜLDÜ
- `bern` künyesi YOK; `isvicre` VAR (1291-08-01 → 1945).
- **Atlasın kendi emsali:** Bern'in 1536'da Savoya'dan aldığı Vaud'un merkezi **Lozan** atlasta
  `savoya 1281-1536 · isvicre 1536-01-01 →`. Yani atlas Bern'in tâbi toprağını ZATEN `isvicre` olarak yazıyor
  (D205 ②, "yapı var, adı başka"). Thonon (Chablais) aynı 1536 Bern seferiyle alındı (HLS "Thonon").
- ⇒ **Thonon 1536 → 1567 `d:isvicre`** emsalle tutarlı; ayrı `bern` künyesi gerekmez. (Lozan ile aynı sınıf; hüküm
  senin, ama emsal ölçüldü.)
- 🔴 **Yan bulgu (aynı taramada):** **Cenevre** atlasta `almanya 1281-1536 · isvicre 1536-01-01 → 1923`. Cenevre
  Konfederasyona ancak 1815'te kanton olarak girdi; 1798-1813 Fransız ilhakı (Léman departmanı merkezi) yazılı değil.
  Bu turda kaynak OKUNMADI — aday, kanıt değil.

## B. Görice şartı ((b) — `v:fransa`nın dayandığı `d:`) — ÖLÇÜLDÜ
- Görice'nin bugünkü `s:` dilimi `arnavutluk-bagimsiz 1912-11-28 → 1923-10-29`; künye `arnavutluk-bagimsiz`
  "Arnavutluk Prensliği (Bağımsız)" **f 1912-11-28 → t 1939-04-07** ⇒ 1916-1918'i KAPSIYOR (§3.5 hayalet yok).
- ⇒ Senin iki dilimli hükmün künye açısından yazılabilir: **1916-10 → 1918-02-16 `d:arnavutluk-bagimsiz` +
  `v:fransa-cumhuriyet`** · **1918-02-16 → 1920-05-24 `isg:fransa-cumhuriyet`**. Arnavutluk'un 1916-18 statüsünün
  tartışmalı olduğu `ic_not`a (künye kesintisiz yazılmış; bu bir modelleme kararı, ölçüm değil).

## 0. ÖNGÖRÜ (uç arama, ölçümden ÖNCE — ayrı commit)
Kalibrasyon (koordinatör): uç/tanık bulunabilirliği bu gece İKİ oturumda sistematik FAZLA tahmin edildi (YENI5: 2
öngördüm, 4 çıktı uçsuz). Tabanı oradan alıyorum.
| # | dilim | aranan uç | bulunma olasılığım |
|---|---|---|---|
| U1 | Alaşehir `aydin` (1403/05 →) | Aydınoğlu'nun Alaşehir'i kaybı / Osmanlı'ya geçiş (şehir adlı) | %35 (TDV `alasehir` 1402 sonrasında yalnız Cüneyd'i anıyor; beylik ilhakı 1425 bölge düzeyi) |
| U2 | Bayburt Rus 1829 | Rusların Bayburt'tan çekilişi (Edirne 14 Eylül 1829 sonrası) | %40 (askerî tarih monografı gerekir) |
| U3 | Aosta Fransız 1798-99 | Fransızların Aosta'dan çıkışı (1799 Avusturya-Rus seferi) | %35 (Henry'de olay var, ay yok) |
| U4 | Klagenfurt Fransız 1809 | Fransızların Klagenfurt'tan çıkışı (Schönbrunn 14 Ekim 1809 sonrası) | %30 (Graz'ın günü var, Klagenfurt'unki aranıp bulunamadı) |
- **Beklenen bulunan: 1 (aralık 0-2).** Yazılabilir hâle gelen de 1.
- Bulunanların hassasiyeti: ay düzeyi (%60), gün (%25), yalnız yıl (%15).
- Yan bulgu (aranan uçtan başka bir dönem): **≥ 1** (%55 — bu gece her kaynak açılışında çıktı ama artık az kalem).
