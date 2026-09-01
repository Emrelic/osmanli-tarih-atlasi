# OPUS HAZIR KITA 107 — parti-emrelic-0033

**Koordinatör:** 1.MURAT HÜDAVENDİGAR · **Şartname:** tahta M-1903 · **Açılış:** 1 Eylül 2026
**Kimlik:** `local_fe942ee1-5107-4075-8242-0e1a199e7709`

## TESLİM: 10 → 3

| madde | hüküm | dayanak |
|---|---|---|
| H-0006 Çağatay yuvarlak | `zaten-dogru` | yay %8 · tavan yaslamadan SONRA (uret_petek.py:1849) |
| H-0007 Kazak yuvarlak | `zaten-dogru` | yay %16 · Almatı k=4 → %100 yay |
| H-0008 Sibir yuvarlak | `zaten-dogru` | yay %19 · Ket Ostrogu k=4 → %100 yay |
| H-0009 Aral boş alan | `zaten-dogru` | 4 çekirdek nokta `bos:"kabile"` + aşiret adı YAZILI |
| H-0010 Kandehar pergel | `zaten-dogru` | yay **%0** — tavan değil, komşusuzluk |
| H-0013 Songhay küçük boyama | **`cozuldu`** | Timbuktu s/d/v ÜÇÜ DE BOŞ → yama yazıldı |
| H-0015 Nusaybin/Derik/Silopi | **`cozuldu`** | d:1515-01-01 → 1515-09-19 + kronoloji maddesi |
| H-0014 Kanem-Bornu kopuk | **AÇIK** | görselde 3 parça, benzetimimle üretilemedi (göl yok) |
| H-0018 Tebriz güzergâhı | **AÇIK** | 1 madde yazıldı; güzergâh günleri + 8 nokta gerek |
| H-0019 Hicaz boşluğu | **`senin-kararin`** | kutuda 3 nokta, 241 km boşluk; 4 TDV slug canlı |

## YAZDIĞIM DOSYALAR — **COMMIT KOORDİNATÖRDE**

```
data/yer_yama_ok107.js  → window.YER_YAMA_OK107  4 kayıt
    Nusaybin · Silopi · Malikiye (Derik) · Timbuktu
    🔴 BAĞLANMAZ, UYGULANIR:  py arac/_sahiplik_uygula.py --yaz
    kuru koşu: dördü de yolunu buldu (ek25 ×3, yerlesimler.js ×1)
data/olaylar_ok107.js   → window.OLAYLAR_OK107   2 madde
    1515-09-19 Nusaybin/Derik/Silopi'nin katılması
    1514-09-15 Tebriz'den çekiliş
    index.html'e bağlanmalı — bende değil
```

## ÖLÇÜM ALETLERİ (scratchpad, kalıcı değil)
`olc107b.py` yay oranı · `olc107c/d/e.py` ızgara benzetimi · `olc107f.py`
Değişmez 2 kesişimi · `olc107j.py` eksik merkez taraması · `tdv_oku.py` TDV gövde

## ÇÜRÜYEN İKİ HİPOTEZ — kendi ölçümümle
1. *"A ailesi bayat olabilir, tavan sonradan indi."* → **YANLIŞ.** Tavan
   12 Ağustos, bozkır dosyaları 30 Tem–20 Ağu; parti 24 Ağustos. Hepsi ÖNCE.
2. *"En yakın komşu / 2 vs tavan"* metriği → **YANLIŞ.** "42'de 1 tavana
   dayanıyor" dedi. Voronoi hücresi tek yarıçaplı değil; doğru metrik yön yön.

## PAKETTEN ÇIKAN GENEL DERS
**`Değişmez 2` "±30 günde madde var mı" diye soruyor, "madde BU DEĞİŞİM
HAKKINDA MI" diye sormuyor.** Üç vaka ölçüldü:
```
Nusaybin+Silopi+Derik 1515-01-01 → "Tersâne-i Âmire'nin taşınması"
Tebriz 1514-09-15 (ÇIKIŞ)        → Tebriz'e GİRİŞ maddesi
Diyarbakır 1515-09-10            → +3 gün "Marignano Savaşı (Milano)"
```
Denetim TEMİZ diyor, kullanıcı haklı olarak şikâyet ediyor. Önerilen nöbetçi:
kırılan yerleşimin adı/`yer_id`si o günün maddesinde geçiyor mu?

## PAKET DIŞI BULGULAR
- **Gerekçesiz sahipsiz 7 nokta:** Timbuktu · Ndjamena · Agadez · Darfur ·
  Hadramut · Ogaden · Somali çölü (`bos:`/`neden:` alanı YOK).
  Timbuktu'yu bu partide kapattım; altısı duruyor.
- **Akkoyunlu hayaleti:** künye t=1514-01-01, 18 nokta aşıyor, en uzunu
  **20 yıl** (Arpaçay · Digor · Iğdır · Gümrü · Eçmiyadzin → 1534).
  Genel: `zend` 132 · `mehdi` 51 · `venedik` 31 · `memluk` 29 kayıt aşıyor.
- **Eksik merkezler:** Almalık · Otrar · Sığnak · Taraz · Sayram · Balasagun ·
  Cizre · Siirt · Hasankeyf · Midyat · Njimi · Kukawa · Hayber · Vâdilkurâ ·
  Bedir · Akabe · Tercan · Bayburt · Ahlat · Adilcevaz · Sultaniye.
- **TDV tuzağı, canlı vaka:** `timbuktu` 200 + doğru başlık + **boş gövde**;
  doğru slug Türkçe yazımıyla **`tinbuktu`** (16.562 karakter, tarih dolu).
