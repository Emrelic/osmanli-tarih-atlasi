# NEGATIF-YIL-OLCUM-1010 — Sümer noktaları NEGATİF-YIL-B olmadan FAZ 2'de inebilir mi?

Görev: YILDIRIM BAYEZIT (10 Ekim 2026, KUNYE-SUMER-7-1010 teslimine cevap ⑥) · işçi: EMRELIC, Opus ·
`data/` + `arac/` DONUK — yama YAZILMAZ, ölçülür. Ayrı worktree `C:\atlas-wt-negyil` (dal `makine/emrelic-kunye-2`).

## 0. ÖNGÖRÜ (ölçümden ÖNCE yazıldı; sonradan DOKUNULMADI)
Test girdisi: NOKTA-SUMER-1010'un yarım iş kopyası (`C:\atlas-nokta-sumer`, `yerlesimler_nokta_ortadogu_0917.js`):
`s:[] d:[]`, `kur:` negatif ya da yok, `bit:` negatif (`-1599`, `-0999`, `-0329`, `-2949`) ya da ÜÇ HANELİ pozitif
(`0750`, `0640`, `0499`, `0300` — dört haneli yazılmış).
- ② `denetle.pad("-0538-01-01")` dokunmadan döner; `gun_no("-0538-01-01")` **ValueError ile ÇÖKER** (%90).
- ④ Yıl 0: `gun_no("0000-01-01")` ÇÖKER (`date` MINYEAR=1) (%95) · `"-0001-01-01"` ÇÖKER (%95) · `"0001-01-01"` doğru.
  `gun.py` üçünü de doğru sayıya çevirir (%95).
- ③ Gerçek yollar, Sümer noktaları veriye girince:
  - `girdi.yukle` ÇÖKMEZ (%80) — tarih dizgisini yalnız taşır.
  - `denetle.py` bütünü ÇÖKMEZ (%60): noktalar `s:/d:` taşımıyor, `kur/bit` çoğu yerde POZİTİF tarihle dizgi
    kıyasına giriyor ve `"-"` (0x2D) < `"0"..."9"` ⇒ negatif↔pozitif dizgi sırası TESADÜFEN DOĞRU.
  - SESSİZ YANLIŞ en olası yer: negatif↔negatif dizgi kıyası (`kur:"-2699"` ↔ `bit:"-1599"`: dizgide
    `"-2" > "-1"` ⇒ kur > bit, TERS) — `kur ≥ bit` soran bir denetim varsa YANLIŞ ALARM ya da sessiz eleme (%40).
  - `odak_cozum.js` / `suzgec.js` (node): NEGATIF-YIL-A indiği için negatif yılı doğru ayrıştırır (%70).
- ⑤ `NEGATIF-YIL-1010-B-v2.diff` bugünkü `origin/main`e `apply --check` TEMİZ (%60); ②'nin çöken yollarını kapatır (%85).
- ⑥ HÜKÜM öngörüsü: **EVET, şartlı** (%55) — noktalar `s:`siz ve `bit:` ufuktan önce ⇒ çöken `gun_no` yollarına
  ULAŞMAZ; ama bu, NOKTA-SUMER'in ayrıca bildirdiği motor deliğinden (sahipsiz petek devri) bağımsızdır.

## ⑥ HÜKÜM — **EVET, ŞARTLI** (ölçüme dayanarak)
Sümer noktaları NEGATIF-YIL-B olmadan FAZ 2'de **inebilir**, ama **YALNIZ** bugünkü NOKTA-SUMER biçimiyle:
`s:[] d:[]` (v/isg yok), negatif yıl yalnız `kur:`/`bit:`'te. **Tek bir negatif uçlu dönem (`s/d/v/isg`) bile
inerse `denetle.py` BÜTÜNÜYLE çöker** (s3) ⇒ o andan itibaren B ön şarttır.
- Dayanak 1 (s1/s2): Sümer noktaları (+künye v2) eklenince `denetle.py --ayrinti` 12.273 satır, tabanla fark
  YALNIZ yerleşim sayısı (4300 → 4322) · çıkış 2 (üçünde de yalnız D8 dosyası) · `odak_olc` %100, çökme yok.
- Dayanak 2 (s3): Uruk'a 2 negatif `s:` dilimi ⇒ `degismez1b` → `gun_no` (`denetle.py:1491` → `:1230`)
  `ValueError: year -53 is out of range` ⇒ **Değişmez 1b'den sonraki HİÇBİR denetim koşmuyor** (7.063 satırda kesildi).
- Dayanak 3 (s4 = s3 + B-v2): çökme YOK, ve B o boşluğu **DOĞRU** yakaladı: `Uruk -0330-10-22 → -0311-01-01 (6646 gün)`
  — gün sayısı `gun.py` ile bağımsız doğrulandı (6646).
⚠️ "İnebilir" ≠ "sağlam": aşağıdaki §③'teki sessiz yanlışlar (B'siz) Sümer noktalarında ŞİMDİDEN mevcut, yalnız
bugün hiçbir HÜKÜM veren yoldan geçmiyorlar. Önerim: FAZ 2'ye bir koşul — `denetle.py`ye değil inişe —
*"negatif uçlu dönem = 0"* (aşağıda ⓐ); ihlali B inene kadar iniş engeli.
⚠️ Bu hüküm NOKTA-SUMER'in motor deliği (M-5897, sahipsiz petek devri, ~62.400 km²) sorusunu CEVAPLAMAZ.

## 1. ÖLÇÜM
Taban `origin/main` `d8ce10af` (+ yalnız `denetim/` commit'lerim). Senaryolar ayrı worktree'lerde, AYNI ANDA:
```
taban  origin/main
s1     + Sümer noktaları (C:\atlas-nokta-sumer yarım iş kopyası, sha256 74d5a867…, 22 nokta)
s2     s1 + KUNYE-SUMER-7-1010-v2.diff
s3     s2 + Uruk'a 2 negatif s: dilimi (ahameni -0538→-0330-10-22 · selefki -0311→-0140-07-03; arada BİLEREK boşluk)
s4     s3 + NEGATIF-YIL-1010-B-v2 (sınav dosyası HARİÇ, bkz. ⑤)
s5     taban + NEGATIF-YIL-1010-B-v2 (sınav dosyası HARİÇ)
```
Betikler (scratchpad, depoya girmedi): `neg_birim.py` · `neg_node.js` · `neg_yukle.py` · `dilim_ekle.py`.

### ② `pad` / `gun_no` — ÇAĞRILARAK (docstring'e güvenilmedi)
| işlev (satır) | `-0538-01-01` | `-0001-01-01` | `0000-01-01` | `0001-01-01` | sınıf |
|---|---|---|---|---|---|
| `pad` (1207) | dokunmadan döner | aynı | aynı | aynı | doğru (tasarım) |
| `gun_no` (1226) | **ValueError** "year -53 is out of range" @1230 | **ValueError** "year 0" | **ValueError** "year 0" | 1 ✓ | **ÇÖKER** — mesaj YANILTICI (-53 ≠ -538: `s[0:4]` keser) |
| `_gun_no` (4274) | **ValueError** "invalid literal for int(): ''" @4276 | aynı | **ValueError** "year 0" | 1 ✓ | **ÇÖKER** |
| `_gun_farki` (2719) | **None** | **None** | **None** | (0001,0000-12-31) **None** | 🔴 **SESSİZ** — `None` dönen denetim ihlali GÖRMEZ |
| `_d8_gun_once` (5160) | **None** | **None** | **None** | **OverflowError** @5165 | 🔴 SESSİZ (negatif) + ÇÖKER (0001) |
`gun.py` yedi girdinin yedisini doğru sayıya çevirdi (yıl 0 dahil); `gun_no`nun beklenen ordinal'i `gun.py + 719163`
ile hesaplandı ve B yamalı ağaçta **birebir** çıktı.

### ③ Evren — her yol için ÇÖKER / SESSİZ YANLIŞ / DOĞRU (B'siz)
| yol | negatif yıl gelirse | FAZ 2 biçiminde (s:[] , kur/bit) ulaşılıyor mu |
|---|---|---|
| `girdi.yukle` | çökmez; tarihi **düz `str`** taşır | evet — 4322 yüklendi |
| ↳ negatif↔negatif `str` kıyası | 🔴 **SESSİZ YANLIŞ**: Bad-tibira `kur -1999 < bit -1599` → False · Marad `-2699 < -0029` → False · Kisurra aynı (`neg_yukle.py`) | değer var, ama hüküm veren tüketici bulunamadı ↓ |
| ↳ negatif↔pozitif `str` kıyası | DOĞRU (tesadüfen: `"-"` 0x2D < `"0"`) — `-1599 < 1000` ✓ · `0750 < 1000` ✓ | evet — D1 `kur/bit` süzgeci (1246/1253, 1295) doğru |
| `denetle.degismez1b` (1491) | **ÇÖKER** (gun_no) — bütün denetle düşer | hayır (dönem yok) |
| `denetle` 5a hayalet (3168) | 🔴 SESSİZ: `_gun_farki(kur, ilk)` None ⇒ `if g is not None` atlar | hayır (dönem yok ⇒ `continue`) |
| `denetle` dönem `sort()` (3166) | 🔴 SESSİZ: negatif dizgi sırası ters ⇒ "ilk dönem" yanlış | hayır |
| `uret_petek.py:5429/5553` `_epok_gun` → `_kusatilmis(g)` | 🔴 SESSİZ YANLIŞ: negatif epokta `kur > g`/`bit <= g` negatif↔negatif | **EVET** — ama yalnız tanı çıktısı (`kuşatılmışlık devri` satırı/`BEKLENMEDİK`); geometri ufuk-içi pozitif günlerle kıyaslıyor ⇒ etkilenmez. Motor koşturulmadı, kaynaktan okundu |
| `odak_olc.py` / `odak_cozum.js` | çökmez; künyenin 16 yeni kronoloji maddesi (negatif `t` dahil) %100 çözüldü | evet |
| `js/gun.js` · `app.js gunIdx` · `d_katman.js:593` | DOĞRU (NEGATIF-YIL-A inmiş) | evet |
| `js/suzgec.js gunKaydir` (431) | 🔴 **SESSİZ YANLIŞ**: `-0538-01-01 −1` → `"0000-09-30"` (doğrusu `-0539-12-31`) · `-0001`/`0000` → `"00-1-12-31"` (geçersiz dizgi) | hayır (yalnız d/v/s sınır günlerinde) |
| `js/suzgec.js sahipAnahtari` (422) | 🔴 **SESSİZ YANLIŞ**: akkad `-2699→-1599`, gün `-2000` ⇒ `""` (doğrusu `s:akkad`) | hayır (dönem yok) |

### ④ Yıl 0 üçlüsü
`-0001` ↔ `0000` ↔ `0001`: `gun.py`/`gun.js` üçü de doğru (-719893 · -719528 · -719162) · `gun_no` ilk ikisinde çöker ·
`_d8_gun_once` ilk ikisinde **None**, `0001`de **OverflowError** · `suzgec.gunKaydir` ilk ikisinde **`"00-1-12-31"`**.
Dizgi sırası üçlü içinde tesadüfen DOĞRU (`"-0001" < "0000" < "0001"`); bozulma iki NEGATİF arasında.

### ⑤ `NEGATIF-YIL-1010-B-v2.diff`
- `git apply --check` bugünkü `main`e: **REDDEDİLDİ** — `denetim/ARAC-NEGATIF-YIL-B-SINAV-1010.py: already exists`.
  `main`deki sürüm (`397c00c6` ile inmiş) diff'tekinden FARKLI (14.791 ↔ 15.113 karakter).
  Sınav dosyası hariç (`--exclude`) kalan 5 dosya (`denetle.py` · `girdi.py` · `gun.py` · `motor_esitlik.py` ·
  `uret_petek.py`) **TEMİZ**. `gun.py`de `class Tarih` bugün **0** ⇒ B'nin kodu İNMEMİŞ.
- ②'yi KAPATIYOR mu: **EVET, 5/5 yol** (s4/s5 `neg_birim.py`): `gun_no`, `_gun_no`, `_gun_farki` (−30 · 1 · −1),
  `_d8_gun_once` (`-0539-12-31` … `0000-12-31`) — yıl 0 dahil. Yükleyici `Tarih` sarıyor ⇒ ③'ün negatif↔negatif
  kıyasları doğru (Bad-tibira/Marad/Kisurra True). s3'ün çökmesi s4'te YOK.
- **KAPATMADIKLARI (ADIYLA):**
  ⓐ `js/suzgec.js` — `gunKaydir` + `sahipAnahtari` (B Python kolu; A'nın diff'i de bu dosyaya dokunmuyor ⇒ İKİ
     YAMANIN DA DIŞINDA). Negatif `s:` dilimi yayına inerse tarayıcıda sessiz yanlış.
  ⓑ B'nin kendi sınavı VERİYE BAĞLI: bugünkü veride **67/67** (s5), Sümer noktaları varken **65/67** (s4) —
     düşen ikisi ⓪ "Tarih sırası == sözlük sırası (bugünkü veri)" ⇒ negatif tarih girdiği an ZORUNLU kırmızı.
     Sınav kusuru değil sınav VARSAYIMI; noktalarla birlikte iner­se yanlış alarm verir.
  ⓒ B'nin raporu kendisi söylüyor: `gun.py` motor tuzuna (`MOTOR_IZ_DOSYALARI`) girmeli — ölçmedim, aktarıyorum.

### Öngörü sınavı
```
                                  öngörü                ölçüm
gun_no negatifte çöker            %90                   ✓ (ValueError, mesajı yanıltıcı)
yıl 0 çöker / gun.py doğru        %95 / %95             ✓ / ✓
girdi.yukle çökmez                %80                   ✓
denetle bütünü çökmez (FAZ 2)     %60                   ✓ (s1/s2) — ama tek dilimle çöker (s3)
neg↔neg sessiz yanlış             %40                   ✓ VAR (yükleyici str) — hüküm veren tüketici yok
odak/suzgec negatifi doğru        %70                   ✗ YARI: odak ✓, suzgec ✗ (A dokunmamış)
B apply --check temiz             %60                   ✗ (sınav dosyası çakışıyor; kod temiz)
B ②'yi kapatır                    %85                   ✓ 5/5
HÜKÜM EVET şartlı                 %55                   ✓
🆕 öngörmediğim: _gun_farki/_d8_gun_once negatifte ÇÖKMÜYOR, None dönüyor (sessiz) · B sınavı veriye bağlı
```

## 3. İSTİYORUM
- ⓐ FAZ 2 iniş koşulu: Sümer noktaları **`s/d/v/isg` dönemsiz** iner; negatif uçlu dönem sayısı = 0 (bir satırlık
  ölçüm: yükleyiciden `f/t` `-` ile başlayan dönem sayısı). Künye bağlama (KASA §1.2 zincirleri) **B'den sonra**.
- ⓑ B iniş paketine üç ek: `--exclude` ile sınav dosyası çakışmasının çözümü (hangi sürüm esas?) · sınavın ⓪
  iki sorusunun negatif tarihleri dışlayacak biçimde yeniden yazılması · `js/suzgec.js` için ayrı kalem (A/B dışı).
