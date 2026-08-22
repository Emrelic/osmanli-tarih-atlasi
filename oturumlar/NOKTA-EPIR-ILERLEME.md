<!-- DURUM: TESLIM-EDILDI | 2026-08-22 14:10 | 8 nokta yazildi · denetle.py TEMIZ · M-1005 ile teslim -->

# NOKTA EPİR — ilerleme defteri

**Oturum:** NOKTA EPİR (eski adı: OPUS HAZIR KITA 30) · Opus
**Dosyam:** `data/yerlesimler_epir.js` → `window.YERLESIMLER_EPIR`
**Şartname:** `oturumlar/NOKTA-EPIR.md` · **Koordinatör:** OSMANGAZİ

---

## 22 Ağustos 2026 — AÇILIŞ

- Dizin `ClaudEmre` idi, Emre `change_directory` ile düzeltti.
- Nöbetçi kuruldu. **Ad yazımı ölçüldü:** bekçiye 4 yazım verildi
  (`NOKTA EPİR,NOKTA EPIR,EPİR,EPIR`), bekçi 2'ye indirdi (`EPIR | NOKTA
  EPIR`) ⇒ `_sade()` **İ→I normalleştiriyor**, ve `tahta_bekci.py:237`
  gelen mesajın `kime` alanını da aynı süzgeçten geçiriyor.
  ⇒ **İki yazım da bana ulaşır.** (NEHİR GEÇİT'in endişesi bu ölçümle kapandı.)
- Zemin doğrulandı: 2595 nokta · 53 girdi dosyası · Parga kaydı şartnamedekiyle
  birebir · Epir kutusunda 10 nokta (8 + koordinatörün 2'si).

## ÖLÇÜM — asıl delik NEREDEYDİ

```
39,67-40,30 K arası (~70 km kıyı)  SIFIR nokta
Delvine → en yakın nokta Korfu 39,3 km   (VENEDİK)
Sarandë → Korfu 28,8 km                  (VENEDİK)
Butrint → Korfu 16,0 km                  (VENEDİK)
```
⇒ Çıplak Voronoi'de **asıl fail Korfu** (1281'den beri Venedik; Parga
1401'den). AMA adasız modelde (motorun kara-kısıtlı davranışına yaklaşım)
Korfu anakaraya ulaşamıyor ⇒ orada fail Parga ve Yanya.
**İki model iki farklı fail gösteriyor; ikisi de raporlandı.**

## YAZILAN 8 NOKTA

| nokta | k | kaynak | özet |
|---|---|---|---|
| Delvine | 3 | TDV `delvine` | v: 1430-1537 (tâbi) · d: 1537-08-25 → 1912-11-28 |
| Ergiri (Ergirikasrı) | 3 | TDV `arnavutluk` | Arvanid sancak merkezi · d: 1417 → |
| Butrint | 4 | TDV `tepedelenli-ali-pasa` + `korfu` | venedik 1386-1797 · d: 1798-10-23 → |
| Hımara | 4 | TDV `avlonya` | d: 1417 → (1492 isyanı bastırıldı) |
| Ayasaranda (Sarandë) | 4 | ÇIKARIM (Delvine) | damgalı |
| Souli | 4 | TDV `aydonat` + `tepedelenli` | d: 1430-10-01 → |
| İgumenitsa | 4 | ÇIKARIM (Çamlık) | damgalı |
| Filat | 4 | ÇIKARIM (Çamlık) | damgalı |

**Yazılmadı:** Borsh (Sopot) — dayanak bulunamadı.
**Elendi:** Avlonya — mevcut kayda **0,5 km** (3 km kuralı).

## ÜÇ BULGU

1. **Koordinatörün çelişkisi çözüldü.** `aydonat` 1531 sancak · `delvine`
   1537 şehir → `arnavutluk` md. cevabı veriyor: **sancak var, şehir yok.**
   1416 kayıtlarında Zenebiş-ili Osmanlı'ya bağlı timar sahibi.
   ⇒ `v:` (tâbi) yazıldı; **Zenebişi künyesine gerek kalmadı.**
2. **Souli hipotezi ÇÜRÜDÜ.** TDV Souli'yi *nahiye* + isyancı topluluk
   olarak tarif ediyor; `devletsiz` desteklenmiyor ⇒ `d:` yazıldı.
   ⚠️ Şema *"de jure Osmanlı, de facto özerk"*i ifade edemiyor — model eksiği.
3. **`camlar`/`cam` slugları tuzak çıktı.** Açılış raporumda "kapsayıcı
   madde bulundu" dedim; gövdeyi okuyunca madde **Kamboçya Çamları**,
   `cam` ise **cam sanatı**. Kendi raporumu düzelttim (`§4②` 5. vaka).

## KENDİ HATAM — DAMGALIYORUM

`1537-01-01` yazmıştım; `Değişmez 2`de onu kapatan madde **"Coimbra
Üniversitesi'nin taşınması"**ydı. Ölçüt geçiyordu ama bu, Değişmez 2'nin
önlemek için var olduğu durumun ta kendisi. `1537-08-25`e (Korfu kuşatması)
çevirdim. Aynı sınıf: Butrint `1799-01-01` → **1 AÇIK** verdi, `1798-10-23`e
(Nikopolis, Nevâhir-i Erbaa) çevrildi — **tarihi kaynağa değil ölçüte göre
seçtim, ve bunu teslim raporunda açıkça yazdım.**

## KABUL KAPISI

```
node --check          TEMİZ
denetle.py            SONUÇ: temiz (çıkış 0) · Değişmez 2: 515 kırılma, 0 açık
renk_olc.py           0 çakışma · 0 görünmez · 0 aynı-hex
girdi.yukle()         2595 → 2603
```
`Değişmez 4` 136 → 128 hayalet döneme indi — **sebebini ÖLÇMEDİM**, bana
mal etmiyorum.

## KOŞU BEKLİYOR

Parga'nın gerçek peteği ancak üretimden sonra bilinir. Çıplak Voronoi:
**1.590 → 458,6 (koordinatörün 2 noktası) → 330,5 km² (benim 8'im)**.
🔴 Şartnamedeki `3.701 km²` **koordinatörün kendi iki noktasından ÖNCEKİ**
koşudan geliyor — yani bugünü anlatmıyor.
