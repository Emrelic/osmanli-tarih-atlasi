# C0–C3 GÜN SAYACI — durum, yama ve uygulama (18 Ekim 2026)

Soru (Emre): *"MÖ tarihlerin motor tarafından hesaplanabilmesi düzenlemesi ne aşamada?"*
Ağaç: `origin/main 1b453cac6` üstünde ayrı worktree. **Motor koşturulmadı.**

## ① ÖLÇÜM — main'de ne var (yamadan ÖNCE)

| Kalem | main'de | Kanıt |
|---|---|---|
| **C0** `arac/gun.py` + `js/gun.js` + sınavlar | **VAR** | `index.html:2030` `<script src="js/gun.js">`; `py denetim/ARAC-GUN-SAYACI-C0-SINAV-1009.py` 50/52 (A4 ve C3 BAYAT, aşağıda) |
| **C2** `app.js` `gunIdx` → `GUN` | **VAR (kısmen)** | `gunIdx/idxTarih` sayaçta. AMA ham dizgi kıyası kalmıştı: **14 yer** (`p.f <= gs`, `.sort()` ×3 …) |
| **C1** `denetle.py` | **KISMEN** | yalnız `gun_no` `gun.py`ye devrediyordu. `_gun_farki` (datetime → MÖ'de `None`), `_gun_no` (`date`), ~50 dizgi kıyası, `int(x[:4])` kesimleri ve **kapı çağrısı YOKTU** |
| **C3** `uret_petek.py` | **YOK** | `GUN_SAYACI` işareti 0 · `gun.py` import eden motor 0 · dizgi kıyası **55 AST sitesi** (eski belge "~10" diyordu) · `datetime.date` 1 (`KESIT_SON`) |
| `gun.py`yi import eden | `denetle.py` (yalnız `gun_no`) · `odak_cozum.js` | `negatif_yil_kapisi`/`capraz_kapi` çağıranı **0** = çağıranı olmayan kapı |

`UFUK-ACILISI-1010.md` sayıları yeniden ölçüldü:
- "~10 dizgi kıyası" → **55** (AST taraması, `denetim/ARAC-C3-DIZGI-KIYAS-TARAMA-1018.py`). Eski sayı grep kalıbıydı; `kur/bit`, `min/max/sorted`, sentinel ve `bisect` kapsam dışıydı.
- "`datetime.date` 1" → doğru (`KESIT_SON`), ama sentinel `"0000"` (= **MÖ 1!**) SINIR-KISIT açık-başlangıç olarak 4 yerde duruyordu — MÖ hattını sessizce "öncesi" sayardı.
- Veri: 3.148 ayrık dönem/kur/bit tarihi, **0 negatif, 0 üç haneli yıl** → yama bugünkü veride davranış-nötr (4 haneli pozitif 300.000 çiftte dizgi sırası ≡ gün sırası, 0 fark).
- `denetle` eski/yeni çıktısı satır satır **aynı** (tek fark yeni "Negatif yıl kapısı" satırı; ikisi de çıkış 2 = D8 worktree'de ölçülemez, beklenen).

## ② NE YAZILDI

**main'e girebilir (tuz dışı):**
- `arac/denetle.py` — C1: `gn()` önbellekli sayaç; ~55 dizgi kıyası/sıralama/min/max sayaca; `_gun_farki`/`_gun_no`/`_d8_gun_once`/FETRET/`artir`/`int(df[:4])` `date` aritmetiği kalktı (geçersiz tarih **fırlatır**, `None` dönmez); sentinel `"0000"`→`"-9999"`; **kapı bağlandı:** `negatif_yil_kapisi_calistir(Y, O)` — veride yıl ≤ 0 + motor işaretsiz ⇒ `OLCULEMEDI_KOVA` ⇒ çıkış 2.
- `js/app.js`, `js/gelistirici.js` — C2 kalanı: 14 ham dizgi kıyası/sıralama `gunIdx`/`GUN.gun`a (`_yerlesimSerit` `.sort()` dahil).
- `denetim/ARAC-GUN-SAYACI-C0-SINAV-1009.py` — A3/A4/F0/F1: "kusur var" kontrolleri düzeltme sonrası halleriyle (F0 artık bilgi, F1 `False` ile kapı mantığını sınar → motor yamalı/yamasız her iki halde geçer).
- Araçlar: `ARAC-C3-DIZGI-KIYAS-TARAMA-1018.py` (AST), `ARAC-C1C3-SINAV-1018.py` (33 madde), yama betikleri (`ARAC-C1-*`, `ARAC-C2-*`, `ARAC-C3-YAMA-UYGULA-1018.py` — yamalar yeniden üretilebilir).

**main'e GİRMEZ (tuz — HAVVA'da KOŞU 27 sürerken):** `denetim/C3-GUN-SAYACI-1018.diff` (`arac/uret_petek.py`, 426 satır):
`GUN_SAYACI = True` işareti · `gn()/gsirala()` · `KESIT_SON` `datetime`siz · 55 sitenin tamamı sayaca (dönem kıyası, `EPOK/KESIT_SON` penceresi, `kur/bit`, sıralamalar, `bisect(key=gn)`, min/max, uç eşitlikleri, sentinel) · AST taraması **55 → 0**.

## ③ İKİ YÖNLÜ SINAV (`py denetim/ARAC-C1C3-SINAV-1018.py` → 33/33, yamasız VE yamalı ağaçta)
Motor koşturulmaz; `_sahipli` gibi işlev kaynaktan `ast` ile çıkarılıp çalıştırılır.
- **Evet, ters sıralı/MÖ dönem eski yolda SESSİZ sahipsizlik üretir:** `[-2999-01-01, -0499-01-01)` içinde `-1499-06-15` → eski `_sahipli` **False** (dönem var, yerleşim sahipsiz); yamalı **True**. Aynı: üç haneli yıl `900-01-01` dönemi 1000'de eski False. (S1/S1'/S2/S2')
- `denetle`: geçerli MÖ dönem "ters" sanılmaz, gerçek ters/sıfır uzunluk yakalanır, eski dizgi kıyası geçerli MÖ dönemi "ters" sanırdı (D5–D5''').
- Kapı: negatif+sayaçsız ⇒ ÖLÇÜLEMEDİ; sayaçlı ⇒ TAMAM; MS verisi yanlış alarm vermez; `denetle` kapıyı gerçekten çağırır (K1–K3').
- Tarama aracı kendini yoklar: eski motor/eski denetle'de ihlal (55/64), yamalıda 0 (T1/T2).

## ④ UYGULAMA SIRASI (tuz yaması)
1. KOŞU 27 bitince, HAVVA/Emre: `git apply denetim/C3-GUN-SAYACI-1018.diff` (main `1b453cac6`te `--check` temiz) — ya da `py denetim/ARAC-C3-YAMA-UYGULA-1018.py` (aynı sonucu üretir, eşleşme sayısı doğrular).
2. `py denetim/ARAC-C1C3-SINAV-1018.py` (33/33) + `py denetim/ARAC-C3-DIZGI-KIYAS-TARAMA-1018.py` (0 şüpheli) + `py arac/denetle.py` (kapı satırı "motor SAYAÇLI").
3. Tuz değişir ⇒ **tam inşa** (7-8 sa). Bu inşa UFUK açılışıyla (`girdi.py`, ayrı tuz) aynı koşuya bindirilirse tek ödeme olur.
4. Sümer/MÖ veri inişi ANCAK 1'den sonra (kapı aksi hâlde zaten ÖLÇÜLEMEDİ der).

## ② NE BULAMADIM / AÇIK
- **Motoru koşturamadım:** 55 sitenin çıktısını bit-bit karşılaştırmak ancak tam inşada olur. Kanıtlarım: davranış-nötr veri ölçümü (yukarı), işlev düzeyi sınav, AST taraması. Üç hassas nokta inşa sonrası bakılmalı: (a) `sorted(...)`→`gsirala` eşit günün farklı yazımında (`"1453"` ≡ `"1453-01-01"`) tie-break'i dizgiyle sabit (davranış aynı), (b) `bisect_right(key=gn)` Python ≥ 3.10 ister (3.13.5 var), (c) `OLCU_KESIT` etiketinde `[:10]` dilimi MÖ'de bozulur (yalnız teşhis satırı, sabitler MS).
- **`girdi.py` (tuz) AST taramasından muaf bırakıldı:** tarih kıyası içerip içermediğine bakmadım — UFUK açılışı onu zaten değiştirecek; o commit'te `ARAC-C3-DIZGI-KIYAS-TARAMA-1018.py arac/girdi.py` koşturulmalı.
- **Değişmez 1/2/3 MÖ'yi ÖRNEKLEMİYOR:** `degismez1` kesitleri 1285–1920 yıl listesi; UFUK açılınca kesit/kırılma evreni de genişlemeli. Sayaç artık MÖ'yi doğru karşılaştırır, ama "sahipsizlik yok" MÖ için henüz **sorulmuyor** (ölçülemedi ≠ temiz).
- **Stale yama:** `denetim/NEGATIF-YIL-1010-B-v2.diff` (`Tarih(str)` alt sınıfı yaklaşımı; `girdi.py`yi de sarar) main'e **uygulanmamış ve artık UYGULANMIYOR** (`denetle.py:41`, `girdi.py:738` çakışıyor) ve main'deki `ARAC-NEGATIF-YIL-B-SINAV-1010.py` `gun.Tarih` import ederek **ImportError ile ölüyor** (hiçbir kapı çağırmıyor). Bu yamayla rakip: ikisi birlikte inmez. Önerim: bu rapordaki açık-sayaç yaklaşımı (kıyas gn() ile görünür, AST taramasıyla ispatlanabilir; sarmal tip yok). B-v2 emekliye ayrılsın.
- `ARAC-GUN-SAYACI-C0-SINAV` C3 maddesi (`gun() == gunIdx`) main'de de bayat-kırmızı (50/52): harness `-0003…-0019` yıl dizgilerinde eski Date.UTC okuyor; bu işte dokunmadım (takip).

## ③ NE İSTİYORUM
1. **Emre/HAVVA:** KOŞU 27 sonrası `C3-GUN-SAYACI-1018.diff` uygulansın (tuz onayı sizde), ardından tam inşa UFUK açılışıyla birleşsin.
2. **Emre kararı:** `NEGATIF-YIL-1010-B-v2.diff` + bozuk `ARAC-NEGATIF-YIL-B-SINAV-1010.py` emekli edilsin mi (önerim evet).
3. UFUK açılışı oturumu: `degismez1` kesit listesini ve `girdi.py` taramasını kapsama alsın.

## EK (18 Ekim, akşam) — yama main'e ALINDI
KOŞU 27 17 Ekim 03:35'te bitti ve yayınlandı; aktif koşu olmadığından motor dondurma kuralı engel olmaktan çıktı. Emre "ne gerekiyorsa yap, koşuyu bu gece koşturacağım" dedi. C3 yaması uygulandı (+ gun.py motor tuzuna eklendi), main'e `--tuz-onay` ile itilir. UFUK AÇILMADI (MÖ veri yok; girdi.py ayrı karar). Gece koşusu = yamanın ilk gerçek sınavı: ilk MS çıktısı eskisiyle aynı olmalı (renk_olc, odak_olc).
