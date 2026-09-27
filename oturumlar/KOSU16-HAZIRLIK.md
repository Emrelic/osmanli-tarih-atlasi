# KOŞU 16 — TAM İNŞA hazırlığı

> Emre, 27 Eylül 2026: *"tam inşa koşusunu hazırla."*
> `CLAUDE.md §9.1 ②`: biriken motor yamaları **tek seferde** girer, tuz bir kez
> değişir, o koşu zaten sıfırdan inşa eder.

## 1. Girecek motor yamaları — ÜÇÜ DE SINANDI

| yama | dosya | satır | ne yapıyor |
|---|---|---|---|
| `MOTOR-LEGO-0925-yama.diff` | `motor_onbellek.py` +21 · `uret_petek.py` +58/−9 | 79 | `tuz_karsilastir()`: tuzun değiştiğini **koşunun BAŞINDA** söyler + geometri katmanına renk/girdi içermeyen ayrı tuz |
| `MOTOR-LEGO-0925-ayikla.diff` | `uret_petek.py` +32/−3 | 35 | puan ızgarası ayıklaması — her nokta yalnız kendi alt penceresine yazar |
| `P13B-UYGULANMADI-Y6Y7-0914.patch` | `uret_petek.py` +125/−8 | 133 | `serbest_sadelestir()`: serbest kenar parçalı/dişli çıkıyor (153 köşe, min segment 0,31 km ⇒ ekranda diken) |

**Ölçülen doğrulama (bu hazırlıkta yapıldı, devralınmadı):**
```
git apply --check   üçü de TEMİZ (tek tek)
C:/atlas-yamasinav  üçü ARDIŞIK uygulandı → çakışma YOK
py_compile          uret_petek.py + motor_onbellek.py DERLENDİ
```
🔴 Tek tek temiz olmak **birlikte** temiz olmayı ispatlamaz — üçü de
`uret_petek.py`ye dokunuyor. Bu yüzden ayrı bir worktree'de sırayla uygulandı.

⏳ **Bit denkliği sınavı koşuyor:** `py denetim/ARAC-LEGO-ayikla-sinav.py
C:/atlas-yamasinav/arac/uret_petek.py` — HEAD'in `_puan_bolgesi`si AST ile
çekilip yamalıyla WKB düzeyinde karşılaştırılıyor. **Sonuç gelmeden koşu
BAŞLAMAZ.** (MOTOR-LEGO-0925 274/274 bildirmişti; devralmıyorum, yeniden
koşturuyorum — `B10`.)

### Girmeyecekler ve sebebi
- `H-0039` (üç Rusya rengi, `renkler.py`) — **henüz yama olarak yazılmadı.**
  Bu koşuya yetişmezse bir sonrakine kalır; tek başına dokunmak yasak (§9.1 ①).
- `YUK-BOLME-0925.patch` — `git apply --check` ÇAKIŞIYOR, ve K=24 havuz %24
  küçüldüğü için zaten yeniden ölçülmeli. Koşudan SONRA.
- `TASLAK-YAMA-TOBLER-0912` (taslak) · `YAMA-B3-UYGULANMIS-0912` (adı
  "UYGULANMIŞ") · `YAMA-DENETLE-*-0905` — dördü de çakışıyor, bu koşunun
  konusu değil.
- `DEGISMEZ-0086-durum_tablosu.diff` — `durum_tablosu.py` TUZDA DEĞİL,
  koşudan bağımsız uygulanır.

## 2. 🔴 ASIL DARBOĞAZ: koşu ANLIK GÖRÜNTÜ alır

Koşu başladığı anda `data/`nin fotoğrafını çeker. O ana kadar inmemiş her
veri **bir sonraki koşuyu bekler.** Bugün dört kolun teslim ettiği veri
yamaları HENÜZ UYGULANMADI (oturumların izin katmanı yazmalarını engelledi,
uygulama koordinatörde):

| yama | boyut | durum |
|---|---|---|
| `NOKTA-ORTADOGU-0077-YAMA.json` + `-yama.py` | 97 KB · 68 öneri | A + B1 ONAYLI · B2/C/D `§4` şartına bağlı |
| `DUNYA-0079-yama.txt` | 10,2 KB | A (ABD-Meksika 16 nokta) · B (Boğdan/Eflak) · C (Moskova künyesi) |
| `AVRUPA-SINIR-0077-yama.txt` | 3,3 KB | Zadar · Padova/Verona · Milano künyesi |
| ASYA-0079 `__BOSLUK__` önerisi | 3 nokta | ONAYLANDI, yamaya dönüşmedi |
| `yerlesimler_p77_kafkas.js` | bağlanmadı | ÖNCE 20 kronoloji maddesi gerekiyor |

⇒ **KARAR NOKTASI:**
```
(a) ŞİMDİ koş   → ~1 saatte başlar, yukarıdaki veri bir sonraki koşuya kalır
(b) VERİYİ AL   → yamalar uygulanır, sonra koşulur; koşu birkaç saat gecikir
                  ama bugünün bütün işi TEK koşuda iner
```
**Önerim (b).** Gerekçe aritmetik: koşu ~8-18 saat sürüyor; yamaları
uygulamak 1-2 saat. (a)'yı seçmek, bugün ölçülen onlarca düzeltmeyi yarına
bırakmaktır ve ikinci bir tam koşu gerektirir.

## 3. Süre beklentisi — ARİTMETİK, ölçüm DEĞİL

```
koşu 15    gövde 14s38dk / toplam 18s01dk    (%81,3)
ölçüm      gövde süresinin %70'i puan ızgarası (MOTOR-LEGO-0925-karo.md)
ayıklama   o kısımda 29× (274/274 bit aynı)
⇒ kaba    10,2 sa → ~21 dk ·  gövde ~4,7 sa ·  TOPLAM ~7-8 saat
```
🔴 **Bu bir öngörüdür, ölçüm değil** — ölçümden önce yazıldığı için
sapması anlamlı olacak. Ve gövde önbelleği BU koşuda ilk kez yazılacağı için
bu koşu isabet ALMAZ; kazanç bir SONRAKİ koşuda görülür.

## 4. Worktree kontrol listesi (`D235` — 8 saniyede ölen koşu)

`git worktree` İZLENEN dosyaları taşır, `.gitignore`dakileri TAŞIMAZ.
Koşu 15 bu yüzden 8 saniyede "EGIM DEM YOK" diyerek öldü. Worktree
kurulduktan sonra **koşudan ÖNCE** sert bağ kurulacak (kopya değil):
```
veri-kaynak/yukseklik/etopo2022_30s_dunya.tif     597 MB
veri-kaynak/yukseklik/etopo2022_30s_atlas.tif     183 MB
veri-kaynak/viabundus/Viabundus-1.3-Edges.geojson  46 MB
veri-kaynak/viabundus/Town_Outlines…               2,2 MB
veri-kaynak/…/CSV.zip                              25 MB
```
Sınama: `ls -la <worktree>/veri-kaynak/yukseklik/*.tif` — boyut 0 ya da
dosya yoksa koşu başlatılmaz.

## 5. Koşu protokolü (`§7`)

```
① Tahtaya "BEN BAŞLATIYORUM · tam inşa · ~8 sa" + 60 sn bekle
② İlgili kollara duyur: data/ ve arac/ DONDU (nokta atışı, HERKES değil)
③ MOTOR_PARALEL_KAPALI YOK olduğu doğrulanmalı — sıralı yolda gövde
   önbelleği HİÇ YOK (ölçüldü: 6672'den itibaren `_ONB` geçen satır 0)
④ Worktree'de koş, `nohup`/arka plan, koşu nöbetçisi 60 dk'da bir canlılık
⑤ Bitince: denetle.py → uret_devirler.py → denetle_yayin.py → damga → yayın
```

## 6. Emre'den beklenen tek karar

**(a) şimdi mi koşayım, (b) önce veriyi mi alayım?** Önerim (b).
Onun dışında hazırlık tamam: yamalar sınandı, süre öngörüsü yazıldı,
worktree listesi hazır.
