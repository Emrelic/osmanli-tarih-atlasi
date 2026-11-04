# KUNYE-1105 — Amur ölçümünden künye soruları (UMIT OLCUM §36): ortak egemenlik ve yerel halklar

LAB SALI · `lab-1104-kunye` · 5 Kasım 2026 · **ÖNERİ, veriye dokunulmadı.** Ölçüm: origin/main `data/devletler.js` (2265 künye), yerleşim dosyalarındaki `bos:` değerleri.

## 1. Ortak / tarafsız bölge — atlasta emsal var mı?

**Ölçüm: emsal VAR; atlas kondominyumları ayrı künye olarak tutuyor.**

| künye | ad | f → t | tur |
|---|---|---|---|
| `yeni-hebridler-kondominyumu` | Yeni Hebridler Anglo-Fransız Kondominyumu | 1906-10-20 → 1980-07-30 | devlet |
| `ingiliz-sudani` | İngiliz Sudanı (Anglo-Mısır Kondominyumu) | 1899-01-19 → 1956-01-01 | gecici-isgal (⚠ tür yanlış görünüyor) |
| `andorra` | Andorra Eş-Prensliği | 1278-09-08 → (süren) | prenslik |
| `samoa-kralligi` | Samoa Krallığı (Berlin Senedi, üçlü gözetim) | 1889-01-01 → 1900-04-17 | krallik |
| `tanca-bolgesi` / `tanca-uluslararasi-bolge` | Tanca Uluslararası Bölgesi | 1923/1924 → 1956-10-29 | statu-bolgesi (⚠ mükerrer, SINIF-SUPHE) |

Ayrıca `kasitli_bosluk:true` 355 yerleşimde; `bos:` değerleri: veri-yok 520 · devletsiz 171 · **kabile 156** · insansız 13 · hata 6 · çöl 1.

**Öneri (vaka vaka):**
- **Sahalin 1855-02-07 → 1875-05-07** (Şimoda md.2 "bölünmez", Rus-Japon ortak kullanım): gerçek bir **ortak egemenlik** → kondominyum künyesi adayı (Yeni Hebridler emsali), ör. `sahalin-rus-japon-ortak`. Eksi: yeni künye `arac/renkler.py` BOYALAR'a girmeden boyanmaz → renkler.py **motor tuzu** (tam koşu, HAVVA). Bir sonraki planlı koşuya kadar **beyanlı `__BOSLUK__`** (UMIT'in yazdığı) yerinde; künye o koşuyla birlikte açılır.
- **Ussuri kıyısı 1858-05-28 → 1860-11-14** (Aigun md.1 "ortak mülk", Pekin 1860'a dek): aynı sınıf → kondominyum künyesi adayı (`ussuri-cin-rus-ortak`), aynı motor tuzu şartıyla; o zamana dek beyanlı boşluk.
- **Uda havzası 1689-09-06 → 1858** (Nerçinsk'te sınırlanmadan bırakılan bölge): ortak egemenlik DEĞİL, **belirsiz/sınırlanmamış** bölge; fiilî devlet denetimi yok → künye açılmaz; **`bos:"devletsiz"` + `neden:` beyanı** (171 emsal). Qing iddiası `neden`e yazılır.
- Not: `ingiliz-sudani` künyesinin `tur:"gecici-isgal"` değeri kondominyum için yanlış görünüyor (`tur:"kondominyum"` gibi bir değer şemada yok; VERI-YAPISI `tur` listesine eklenmesi Emre kararı).

## 2. Ainu, Daur, Nivkh — yerel halklar

**Ölçüm:** atlasta Ainu / Daur / Nivkh (Gilyak) / Evenk / Yakut / Buryat / Çukçi künyesi **YOK**. Halk-adı künyeleri başka bölgelerde var (Tiv, Kaonde-Ila, Yupik, Zuni … — SINIF-SUPHE.md §"Halk / arkeolojik kültür", karar Emre'de). Halk alanları için asıl emsal **`bos:"kabile"` (156 yerleşim)** + `neden:` beyanıdır (örn. Tibesti: 'Toubou aşiret konfederasyonlarının denetimindeydi').

**Öneri:**
- **Nivkh, Sahalin/Amur ağzı Ainu:** devlet değil → künye açılmaz; Qing/Rus/Japon fiilî denetimi dışında kalan dönemlerde **`bos:"kabile"` + `neden`** ("Nivkh/Ainu topluluklarının alanı; Qing haraç ilişkisi …").
- **Daur:** 17. yy ortasından Qing sancak (banner) sistemine bağlı → çoğu dönemde **Qing sahipliği** (`s: qing-hanedani`), kabile boşluğu değil; 1640'lar öncesi ve Rus–Qing çatışma yılları için `bos:"kabile"`.
- **Hokkaido Ainu (Ezo):** Matsumae han'ın ticaret tekeli/hakimiyeti ile Ainu toprakları ayrılmalı: Matsumae noktaları Japon (`edo-bakufu`), iç Ezo `bos:"kabile"` (1869 Kaitakushi'ye dek).
- Bu öneri SINIF-SUPHE.md'deki **"halk künyesi mi, kabile alanı mı?" (soru 1)** kararına bağlıdır; Emre "halk = künye değil" derse mevcut halk künyeleri (Tiv, Yupik …) de aynı `bos:"kabile"` sınıfına çevrilir.
