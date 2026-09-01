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

---

# İKİNCİ İŞ — NOKTA PARTİSİ (commit 221fc83)
`data/yerlesimler_ok107.js` · 20 aday → **14 yazıldı**, 6 yazılmadı.
Kapı: ad çakışması 0 · 3 km 0 · Değişmez 2 `d:` açık 0 · dönem bozuk 0 ·
beyanlı sahipsiz pencere 2 (Cizre 7,7 yıl · Hasankeyf 181 yıl).
Kapı üç kusurumu yakaladı (Cizre 116 yıllık hayalet · Siirt 31 yıl ·
"Vâdilkurâ" yerine **Ulâ**) ve bir kusuru kendi aletimindi (künye
penceresini düz string karşılaştırıyordum: `"1902-01-01" < "962-02-02"`
sözlükte doğru, takvimde yanlış → 6 sahte alarm).

# ÜÇÜNCÜ İŞ — RENKLİ-KÜNYESİZ NÖBETÇİSİ
`arac/denetle_renk_kunye_ok107.py`

**Sorduğu soru** — `§8`in bugüne kadar sorulmamış TERS yönü:
```
RENGİ VAR · KÜNYESİ YOK · `harita:` takma adı DEĞİL · VE VERİDE KULLANILIYOR
```
Böyle bir kimlik **çizilir ama dizinde görünmez**, ve `Değişmez 4` onun
ömrünü denetleyemez (`f`/`t` yok) — yani `§3.5` hayalet taraması üstünden
atlar.

**İlk koşusu, gerçek veride:**
```
BOYALAR 401 · künye id 432 · `harita:` takma 237
🔴 İHLAL 4 : apaci-ovalar · komanci · farukiler · panama-cumhuriyeti
🟢 ÖLÜ RENK 0
çıkış kodu 1
```

**C13 — beş dal, ikisi ZORLANARAK** (`--sina`, 5/5 geçti):
| dal | nasıl |
|---|---|
| ① GEÇME | gerçek veride temiz hâl YOK ⇒ **sahte evrenle zorlandı** |
| ② ATEŞLEME | gerçek veride 4 yetim var, kendiliğinden koşuyor |
| ③ ÖLÜ RENK | ayrı kova — ihlal değil, **bekleyen** ihlal |
| ④ TAKMA AD | `harita:` hedefi SESSİZ kalmalı |
| ④b | süzgeç KAPATILIP sahte alarmın **doğduğu** gösterildi |

**🔴 KOŞU SIRASINDA `arac/` ALTINA YAZMANIN GÜVENLİ OLDUĞUNU ÖLÇTÜM,
VARSAYMADIM:** `girdi.motor_izi()` yalnız üç dosyayı parmak izliyor
(`uret_petek.py` · `renkler.py` · `girdi.py`); `parmak_izi()` ise
`GIRDI_DOSYALARI` + göl. Yeni bir `arac/*.py` ikisinde de YOK.
Ayrıca `renkler.py` içe aktarılıyor — dosyaya **yazmadığı** ölçüldü
(`open(...,"w")` · `.write(` · `json.dump` · `os.replace` = 0 eşleşme).

**🔴 VE SINIFIN 17 GÜNLÜK BİR VAKASI KAYITLIYMIŞ.** `data/devletler.js`
5190. satır:
> *"Dört uzak coğrafya dosyası girdi.py'ye bağlanınca 6 kimlik dizinsiz
> kaldı. Beşi burada; altıncısı (panama-cumhuriyeti) sahibinde ölçülüyor."*

16 Ağustos'ta yazılmış. Bugün 2 Eylül ve `panama-cumhuriyeti` hâlâ yok.
⇒ Kusur bilinmiyordu değil — **bilinen bir borç, nöbetçisi olmadığı için
17 gün açık kaldı.** Bu nöbetçi olsaydı ertesi gün öterdi.
📌 `§11`: *"kabul edilmiş borç kayıtsız kalırsa yarın kusur diye yeniden
bulunur"* — burada kayıt VARDI, **soran yoktu.**
