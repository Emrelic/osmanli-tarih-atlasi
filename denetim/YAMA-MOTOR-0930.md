# YAMA-MOTOR-0930 — bekleyen motor yamalarının tazeliği + yeni yamalar

*30 Eylül 2026 · işçi: YAMA-MOTOR-0930 · koordinatör: YILDIRIM BAYEZIT*
*Tuzdaki dört dosyaya (`uret_petek.py` · `renkler.py` · `girdi.py` · `motor_onbellek.py`)
YAZILMADI. `git status --short arac/`: yalnız `denetle.py` M (başkasının, bana ait değil).*

## 🔴 TEK SATIR HÜKÜM
**Tam inşa koşusuna 2 yama biniyor:** `YAMA-MOTOR-0930-boyalar.diff` +
`YAMA-MOTOR-0930-epok-yorum.diff`. İkisi birlikte `git apply --check` TEMİZ.
Eski altı "bayat" yamanın **altısı da ZATEN İNMİŞ.** Hiçbiri koşuya binmez.

---

## GÖREV ① — bekleyen `denetim/*.diff` (11 dosya)

İki ayrı ölçüm yapıldı: (a) `git apply --check` hem ileri hem ters (`-R`) yönde,
(b) içerik ölçümü `denetim/ARAC-YAMA-MOTOR-0930-TAZELIK.py`: yamanın `+` satırlarının
kaçı bugünkü dosyada VAR, `-` satırlarının kaçı hâlâ DURUYOR.

| Yama | Dosya | ileri | ters (-R) | içerik | HÜKÜM |
|---|---|---|---|---|---|
| GOVDE-CAKISMA-0079-yama | uret_petek | RED | **TEMİZ** | +104/104 · −0 | **bayat — İNMİŞ** |
| MOTOR-LEGO-0925-yama | uret_petek + motor_onbellek | RED | **TEMİZ** | +58/58 · +20/20 · −0 | **bayat — İNMİŞ** |
| MOTOR-LEGO-0925-ayikla | uret_petek | RED | **TEMİZ** | +32/32 · −0 | **bayat — İNMİŞ** |
| KORIDOR-0081-girdi | girdi | RED | **TEMİZ** | +9/9 | **bayat — İNMİŞ** |
| YAMA-B3-UYGULANMIS-0912 | uret_petek | RED | TEMİZ (çalışma ağacı)¹ | +55/55 · −1/2 | **bayat — İNMİŞ** (`_B3_KALAN_IHLAL` `uret_petek.py:3104`) |
| ACILIS-ANIM-0081-yon | css/style.css | RED | RED | +1/2² | **bayat — İNMİŞ** (`css/style.css:3082` `360px`) |
| BOGAZ-OLCUM-0081-yama | uret_petek | RED | **TEMİZ** | +61/61 | **bayat — İNMİŞ** (`55dfa2b5`) |
| DEGISMEZ-0086-durum_tablosu | arac/durum_tablosu.py | **TEMİZ** | — | +0/4 | **HAZIR, uygulanmamış** — tuz DIŞI, koşu beklemez |
| TASLAK-YAMA-TOBLER-0912 | uret_petek | geçersiz³ | — | +1/17 | **taslak, uygulanmamış** — karar bekliyor |
| YAMA-DENETLE-ISG-0905 | arac/denetle.py | bozuk (satır 19) | — | +0/13 · −5/5 duruyor | **uygulanmamış** — tuz DIŞI, yeniden üretilmeli |
| YAMA-DENETLE-HARITA-0905 | arac/denetle.py | bozuk (satır 54) | — | +15/51 | **kısmen inmiş** — tuz DIŞI |

¹ `git apply --cached -R` RED, çalışma ağacında `-R` TEMİZ. Dosya BOM'lu ve CRLF'li
(`efbbbf`), fark satır sonu kaynaklı; içerik ölçümü 55/55 ⇒ uygulanmış.
² Yorum satırı taşınmamış, asıl satır (`360px 50%`) dosyada; `−` satırı (`-360px`) YOK.
³ Başında düz metin başlığı var, `@@` satırları satır numarası taşımıyor; tarif, yama değil.
`uret_petek.py`de `math.exp(-3.5` **0** ⇒ Tobler uygulanmamış. Menzil/Tobler kararı Emre'nin
(`oturumlar/MENZIL-KARARLARI-0912.md`), koşuya bindirilmez.

📌 **Koordinatörün "altı BAYAT" ölçümü doğru, çıkarımı değil:** altısı `git apply --check`
ile reddediliyor çünkü **zaten uygulanmışlar.** Ters yönde temiz çıkmaları bunun delili.
`BOGAZ-OLCUM-0081` vakasıyla aynı sınıf (bayat görünen = inmiş). ⇒ Bu altısı `denetim/`den
**silinebilir ya da `-INDI` ekiyle yeniden adlandırılabilir**; yoksa bir sonraki ölçen
tekrar "bayat" der. (Silmedim: dosyalar benim değil.)

---

## GÖREV ② — `ACIK-BIRLESIK-0930.json` motor maddeleri (12 madde: 7 renkler · 5 uret_petek)

| # | madde | dosya | HÜKÜM | yama |
|---|---|---|---|---|
| 114 | Kaheti boyasız (0081 · H-0001) | renkler | **yama yazıldı** — `kaheti-kralligi` BOYALAR'a | boyalar.diff |
| 188 | `ferrara` etiketi eski (0082) | renkler | **yama yazıldı** — etiket = künye adı `Este Devleti (Ferrara / Modena)` | boyalar.diff |
| 211 | `danimarka: Danimarka-Norveç` (0082 · H-0079) | renkler | **yama yazıldı** — `Danimarka Krallığı` (künye 1814'ten sonrasını da kapsıyor) | boyalar.diff |
| 33 | karakoyunlu ↔ gurcistan ikisi de macenta | renkler | **yazılmadı** — `--oner` karakoyunlu'ya yine **#e41ee4** (macenta, ton 333°) verdi. Araç ΔE ölçer, "farklı ton" ölçütü yok ⇒ Emre'nin şikâyetini çözmez. Elle ton seçimi + Emre'nin gözü gerekiyor | — |
| 93 | misir-kavalali rengi (0075 · H-0029) | renkler | **atladım** — notu "H-0010 ile birlikte", H-0010 `senin-kararin` (renk tonu Emre'nin kararı) | — |
| 24 | "Osmanlı kırmızısı yalnız odak devlete" politikası | renkler | **motor yaması değil** — istenen `renk_olc.py`de zorlayan denetim (tuz dışı); ② kısmı Mersin kronolojisi (veri) | — |
| 32 | Ankara timurlu → Süleyman Çelebi günü | renkler | **motor yaması değil** — renkler.py yalnız atıf; iş TDV araştırması + `yerlesimler.js` | — |
| 1 · 16 | boş çölün Osmanlı kırmızısına emilmesi | uret_petek | **yazılmadı — tasarım işi**: çare `oturumlar/GORUNUM-ABCD-0916.md` A/B; belgenin kendisi "Durum: tasarım aşaması" diyor. B "ayrı dolgu katmanı" ister ⇒ `js/app.js` de değişir (UFUK-DUGME'de, dokunulmaz) | — |
| 19 · 23 | kara-kara sınırında sürtünme yok (Tuna · Kafkas sırtı) | uret_petek | **yazılmadı — motor kararı**: `uret_petek.py` "kesin geometri geçerli — dokunma" kapısını açmak bütün kara sınırlarını değiştirir; ölçüm koşusu olmadan diff yazılmaz. 23'ün ikinci yarısı veri araştırması | — |
| 168 | 0,05° ızgara basamakları | uret_petek | **yazılmadı — motor kararı**: `KV_ADIM` çözünürlüğü (MIMARI §2.9) bellek/süre bedelli; ölçülmeden yama yazmak körlemesine olur | — |

⇒ 12 maddenin **3'ü yamaya çevrildi** · 2'si motor maddesi değil · 1'i Emre kararına bağlı ·
1'i elle ton seçimi istiyor · **5 uret_petek maddesinin 5'i de diff boyutunda değil**, tasarım ya da
ölçüm koşusu gerektiriyor (ayrı bir motor oturumu önerim).

### BOYA kalemleri — ONCE1281 oturumlarının `boya_gerekli` listesi
`denetim/ARAC-YAMA-MOTOR-0930-BOYA.py` ölçtü (5 künye dosyası, 131 farklı kimlik `boya_gerekli:true`):
```
künyesi devletler.js'te VAR, BOYALAR'da YOK     92   → yamaya alındı
künyesi devletler.js'te YOK                      39   → ALINMADI (40 satır, urfa-kontlugu iki dosyada) (renkli-künyesiz = §1.5 ihlali)
   ANADOLU 10 (ani-bagratli · kars-vanand · vaspurakan · lori · seddadiler×2 · derbent ·
   urfa-kontlugu · antakya-prinkepsligi · filaretos) · ORTADOGU 30 (abbasi · fatimi · eyyubi … )
boya_gerekli:false (zaten BOYALAR'da)            15
```
Koordinatörün "18+13" tahmini **131**'e çıktı (oturumlar hâlâ yazıyor).
⚠️ **Aynı devlet iki yazımla:** `antakya-prinkepsligi` (ANADOLU) ↔ `antakya-prinkipsligi`
(ORTADOGU); `urfa-kontlugu` iki dosyada. Künye inmeden önce KUNYE-1945'e sorulmalı (tek id).

**Renk:** `py arac/renk_olc.py --oner` 94 kimliği BİRLİKTE çözdü → `denetim/oneri-20260930-222016.txt`.
🟡 **DÜŞÜK GÜVEN, araç kendisi söyledi:** 94'ün 93'ü "komşusu ölçülemeyen kimlik" (hiçbiri
`girdi.py`nin okuduğu verilerde `s:`/`isg:` taşımıyor) ⇒ öneri yalnız altlık + Osmanlı + "aynı
bölge" varsayımına dayanıyor. Sonuç: palet doygun ve ardışık (#24d830 · #24d836 · #24d83c …),
en yakın engel çoğunda ΔE 12,1-12,8 (eşik 12). **Bugün DELİK AÇMIYORLAR**; yama, noktalar
indiğinde delik açılmasın diye önceden taşınıyor. Noktalar inince `renk_olc.py` ile
**YENİDEN çözülmeli** — bloğun başına bu uyarı yazıldı.

---

## GÖREV ③ — bayat epok yorumu (`uret_petek.py:4659`)
Ölçüm `denetim/ARAC-YAMA-MOTOR-0930-EPOK.py` (girdi.yukle() evreni, bugün):
```
nokta 4296 · kur: 1669 (744 farklı gün) · bit: 19 (17 farklı gün) · farklı sınır günü 752
bedel: /c/atlas-kosu18/kosu18.log:1467  varlık devri (petek_epok) 236 çağrı · 54dk 33sn · %21,9
```
Koordinatörün sayıları (4283 · 1677 · 19 · 753) biraz eski veriye ait; yama bugünküyle yazıldı.
Yorum düzeltildi ve sayının niçin buraya yeniden elle yazılmaması gerektiği eklendi (+8 satır,
yalnız yorum). ⚠️ Aynı blokta `:4655` "441 kırılma" da muhtemelen bayat; ölçmedim.

---

## ÜRETİLEN YAMALAR
| dosya | hedef | `git apply --check` | kapattığı |
|---|---|---|---|
| `denetim/YAMA-MOTOR-0930-boyalar.diff` | renkler.py (+93 kimlik, 2 etiket) | **TEMİZ** | #114 · #188 · #211 · ONCE1281 boya 92 |
| `denetim/YAMA-MOTOR-0930-epok-yorum.diff` | uret_petek.py (yalnız yorum) | **TEMİZ** | Görev ③ |
İkisi birlikte de TEMİZ. Yamalı `renkler.py` kopyası import edildi: BOYALAR 608 → **701**,
açılış denetimlerinde YENİ uyarı yok (üç uyarı önceden de vardı: `#d24824` paylaşımı ·
açıklık tabanı 18 kimlik · ikinci geçiş 2 kimlik).

## BULUNAMADI / ÖLÇÜLEMEDİ
- `--dogrula`nın SON DOĞRULAMA'sı koşturulmadı: yamalı renkler için ayrı ağaç gerekirdi ve
  komşuluk zaten 0 olduğundan bilgi vermezdi.
- Karakoyunlu için macenta dışı bir ton: araç bu ölçütü taşımıyor, elle seçmedim.
- H-0079'un tam metni `KAPAT-0081-82-0930`te yok, yalnız atıf var; etiket künye adına göre seçildi.
