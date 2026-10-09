# SAHIPLIK-UYGULA-KUSUR-1008 — `_sahiplik_uygula.py`nin üç kusuru (K1 · K2 · K3) + geri okuma

Temel: `origin/makine/umit` `88cc2f3c` (yama `fedae6ce` üstünde de `git apply --check` temiz; aradaki
fark yalnız `arac/denetle.py`) · worktree `C:\atlas-sahip` · girdi 93 dosya / 4.300 kayıt.
Kaynak bulgu: `denetim/ZAMAN-Z5-1008.md` ④-2 · yama `denetim/ZAMAN-Z5-1008-yer_yama_1923_1945.js`.
Teslim: `denetim/SAHIPLIK-UYGULA-KUSUR-1008.diff` (yalnız `arac/_sahiplik_uygula.py`, LF, CR 0) ·
sınav `denetim/ARAC-SAHIPLIK-UYGULA-SINAV-1008.py` · bu rapor. **Veri inmedi; gerçek veriye `--yaz` YOK.**

## ① ÖNGÖRÜ — ölçümden ÖNCE yazıldı (8 Ekim 2026)

Evren: Z5 yaması TEK BAŞINA (öteki `yer_yama*.js` glob dışında), geçici worktree, `--yaz`,
sonra `girdi._cevir` ile kayıt kayıt geri okuma.

| soru | öngörü | ÖLÇÜM (9 Ekim) |
|---|---|---|
| yamasız araç: yama kaydı | 3.519 | 3.519 ✓ |
| yamasız araç: "uygulandi" | 3.489 · "veride-yok" 28 · çıkış **0** | 3.489 · 28 · çıkış 0 ✓ — ama özet **2 kaydı hiç saymıyor** (3.489+28 = 3.517 ≠ 3.519; aşağıda) |
| yamasız araç: geri okumada İNMEYEN `s:` | **33** = 28 JSON + 5 | **33** = 28 K1 + 5 K2 ✓ |
| bu 5'in araç çıktısındaki hâli | hepsi "İNEN" listesinde | ✗ **3'ü** (Honolulu · Antananarivo · İmâdiye) "uygulandı" dendi; Taraz · Sayram `mukerrer-anahtar` ile atlandı — öngörü (ve Z5 raporu) yanlıştı |
| K3: `not:` dolu, beyan inmeyen | 707 | 707/707 ✓ (bkz. ② K3 notu) |
| kök sebep K2 | aralık `ad:` satırından başlıyor | ✓ Honolulu/Antananarivo/İmâdiye için doğru; Taraz/Sayram için YANLIŞ — onlarda mükerrer `s:` **zaten veride** |
| kök sebep K1 (ek) | AD_RX dışında ALAN_RX · SKALER_RX · ARALIK_RX · mukerrer da kör | ✓ (koddan; yama hepsini düzeltti) |
| yamalı araç | 3.519 uygulandı · geri okuma 3.519/3.519 · not eklenen 707 · çıkış 0 | ✓ birebir |
| gerileme | 33 ∪ K3 dışı her kayıt birebir; hedefsiz dosyalar bayt bayt | ✓ 3.561 kayıt fark 0 · 78 dosya bayt fark 0 |

## ② NE ÖLÇTÜM

### 33 kayıt — ADIYLA (yamasız araç `88cc2f3c`, gerçek koşu, geri okumayla)

**K1 — 28 kayıt, JSON biçimli (`{"ad":…}`), araç "veride YOK — yeni nokta" dedi:**
- `yerlesimler_sinir_guney.js` (12): Babū · Balıklı · Cibri (Güçlü) · Cumai (Birlikköy) · Gōrabī ·
  Jadlā’ · Kilise · Mercihamis (Yurtbağı) · Qaţţīnah · **Sincan** · Tirwānīsh · Ḩīmū
- `yerlesimler_sinir_kuzey.js` (16): Beri · Karpuzlu (Yenikarpuzlu) · Kliçatak (Suser) ·
  Küfkaynapınarı (Azatlı) · Küçükperveli · Makhalak’auri · Malak Dervent (Lalkovo) · Murvaneti ·
  Norapat · Saylıca · Stérna · Ts’q’altbila · Távri · Uluköy (Akçadam) · Umur Fakih (Fakia) · Zazalo

**K2 — 5 kayıt, iki ayrı alt sınıf:**
- **K2a — araç "UYGULANDI" dedi, yama ÖLDÜ (3):** Honolulu · Antananarivo (`yerlesimler_4ff22b.js`) ·
  İmâdiye (Amêdî) (`yerlesimler_ok109.js`). Kök: `{` `ad:`dan bir ÜST satırda ⇒ `ad: "…",`
  satırının dengesi 0 ⇒ kayıt aralığı TEK satır ⇒ `s:` "yok" sanılıp `ad:`ın ardına eklendi, eski `s:`
  aşağıda kaldı ⇒ JS/`girdi` SONUNCUYU (eskiyi) okur. Koşudan sonra üçünde de iki `s` anahtarı ölçüldü.
- **K2b — veride ZATEN mükerrer `s:` (2):** Taraz (Evliya-Ata) · Sayram (İsficâb)
  (`yerlesimler_ok107.js`): ikinci `"s":[…]` `kaynak:`tan sonra, tırnaklı — eski aracın K2a kusurunun
  önceki bir koşudan bıraktığı iz (ölçülmedi, biçimden çıkarım). Eski araç bunları
  `mukerrer-anahtar` ile atladı (doğru) ama **özet satırında bu kovayı basmıyordu**
  (`mukerrer-anahtar` · `kapsam-daraldi` · `*-dolu` sabit listede yoktu) ⇒ özet 3.517 kayıt hesap
  veriyor, 2'si görünmüyor.

**K3 — 707 kayıt:** Z5 üreticisi (`ARAC-ZAMAN-Z5-OLC-1008.py:308`) bu 707 kayda `not:`u
**HİÇ KOYMADI** ("uygulayıcı ezmez" diye) ⇒ Z5 yaması tek başına K3'ü sınayamaz. Sınav, aynı A
beyanını o 707 kayda ekleyerek ölçtü: yamasız araç 707/707'de beyanı indirmedi ("not: ZATEN DOLU"
satırı 706 — 1'i K1/K2'deki 33'ün içinde, o kayda hiç ulaşılmadı). Yamalıda 707 eklendi, 0 ezildi.

### Yama (`arac/_sahiplik_uygula.py`, +502/−114)
1. **K1:** tek anahtar deseni `_anahtar_rx` (`ad:` | `"ad":`) → `AD_RX` · `ALAN_RX` · `SKALER_RX` ·
   `SKALER_NULL_RX` · `mukerrer_alanlar`; `ARALIK_RX` `{"f":…,"t":…}`yi de okur (yoksa
   kapsam-daralma koruması JSON kayıtta kördü); dizge-dışı sınaması tırnaklı anahtarı tanır
   (`_disarida`). JSON kayda JSON üslûbunda yazılır (`deger_yaz`/`metin_yaz`/`anahtar_yaz`);
   tırnaksız kayıt ESKİ biçimle birebir (gerileme G1/G2).
   ⚠️ Ek bulgu: `_bayat_yama_kapi.dilim` `(?<![\w"])s:` — JSON kayıtta diziyi GÖRMEZ, kapı soruyu
   sormadan "taze" derdi. Kapı dosyasına dokunulmadı; uygulayıcı kapıya JSON kaydın TIRNAKSIZ
   görünümünü veriyor (`_tirnaksiz`, yalnız kapının girdisi).
2. **K2:** kayıt aralığı `ad:` satırından değil, dizinin ÜST SEVİYE `{…}` nesnesinden (dosya bir kez
   maskelenir; yorumdaki/iç nesnedeki `ad:` kayıt sayılmaz) ⇒ mevcut `s:` YERİNDE değişir.
   K2b için `olu_kopyalari_sil`: üst seviyede iki kez yazılmış alanın SONUNCUSU (canlı) kalır,
   öncekiler silinir, adıyla basılır ("MÜKERRER ANAHTAR TEKİLLENDİ"); silinemezse eski koruma
   kaydı yine atlar. Satırı paylaşan iki kayıt "SATIR PAYLAŞIMLI" ile atlanır (bugün 0).
3. **K3:** `not:` EZİLMEZ, EKLENİR: `eski + " · " + yeni`; eski metin ham korunur; yeni beyan
   eskinin içinde zaten varsa eklenmez (tekrar koşu ikilemesin). `kaynak/bos/neden/kur` DEĞİŞMEDİ.
4. **TANIMA (D225):** aracın gördüğü kayıt kümesi, `girdi.oku_dosya`nın gördüğüyle dosya dosya
   karşılaştırılır; görülemeyen kayıt ADIYLA basılır; yamada geçiyorsa "veride-yok" değil
   **"🔴 TANINMADI"** ⇒ **çıkış 4**. GIRDI_DOSYALARI'nda olup diskte olmayan dosya da basılır.
   Özet artık her sayaç kovasını basar. (Bugün: 4.300/4.300 kayıt görülüyor.)
5. **GERİ OKUMA:** yazılacak metin önce BELLEKTE motorun okuyucusuyla (`girdi._cevir`, sonuncu
   anahtar kazanır = JS) yeniden ayrıştırılır: hedef kaydın her yazılan alanı = beklenen değer,
   hedefin öteki alanları ve dokunulmayan HER kayıt birebir, kayıt sayısı/sırası aynı. Tutmazsa
   **hiçbir dosya yazılmaz, çıkış 4**. Yazımdan sonra aynısı DİSKTEN; tutmazsa çıkış 4 ve
   "UYGULANDI" basılmaz. Diske yazılan, bellekte doğrulanan metnin kendisidir.
6. `--yama-glob <regex>` (sınav için; öntanımlı `^yer_yama.*\.js$`) · `SAHIPLIK_SINAV_BOZ` sınav
   kancası (yalnız ikinci yön sınavı için yapay mükerrer anahtar ekler). Çıkış kodları dosya başında.

### Sınav — `py denetim/ARAC-SAHIPLIK-UYGULA-SINAV-1008.py` → **14/14 GEÇTİ, çıkış 0** (~40 dk, kapı `git log -L` ×2)
HEAD'den geçici worktree, bütün `yer_yama*.js` dışarıda, yalnız Z5 yaması (+K3 beyanı).

| | soru | sonuç |
|---|---|---|
| A1 | yamasız araç 33 kaydı düşürdü (28 K1 + 5 K2) | ✓ 33 |
| A2 | düşürdüğü K2 kayıtlarına "uygulandı" dedi, çıkış 0 | ✓ 3 kayıt, çıkış 0 |
| A3 | dolu `not:`lu kayıtlara beyanı indirmedi | ✓ 707/707 |
| B1–B6 | yamalı: çıkış 0 · 33'ün hepsi indi · `not:` her kayda indi · 0 ezilme · diskten geri okuma ✓ · hedeflerde mükerrer `s` kalmadı (araçtan BAĞIMSIZ tarayıcıyla) | ✓ |
| G1 | 33 ∪ K3 dışı kayıtlar alan sırası dahil birebir | ✓ 3.561 kayıt, fark 0 |
| G2 | hedef kayıt taşımayan dosyalar bayt bayt | ✓ 78 dosya, fark 0 |
| G3 | K3 kayıtlarında `not:` dışında alan değişmedi | ✓ 0 |
| C1–C2 | ikinci yön: yapay mükerrer `s` (Sincan) ⇒ çıkış 4, Sincan adıyla DOĞRULANAMADI, hiçbir dosya yazılmadı | ✓ |

📌 **Geri okuma kapısı kendi yazarını yakaladı (gerçek vaka):** yamanın ilk sürümü `--yaz`
bloğunda düzenlemeyi İKİ KEZ uyguluyordu. Bellek sınavı geçti (doğru metin), diske giden metin
bozuktu; DİSKTEN geri okuma **1.832 kayıt / 31 dosya DOĞRULANAMADI** dedi, çıkış 4, "UYGULANDI"
basılmadı (geçici worktree'de, gerçek veride değil). Düzeltme: diske bellekte doğrulanan metnin
kendisi yazılır. Sınavın ikinci koşusu 14/14.

## ③ NE BULAMADIM
- Bugünkü korpus (103 `yer_yama*.js`) ile tam koşunun sonucu **ölçülmedi** — dosya başı uyarısı
  gereği (174 kayıt geri alınır) koşturulmadı; sınav yalnız Z5 yamasıyla.
- `denetle.py` koşulmadı (şartname ⑤: veri inmez).
- Taraz/Sayram'daki ölü ikinci `s:`nin hangi koşudan kaldığı (git geçmişi) araştırılmadı.

## ④ NE İSTİYORUM
1. Diff'i koordinatör indirsin (`git apply denetim/SAHIPLIK-UYGULA-KUSUR-1008.diff`). Motor tuzuna
   (uret_petek · renkler · girdi · motor_onbellek) dokunmuyor.
2. **Z5 yaması yeniden üretilsin**: üretici 707 kayda `not:`u bilerek koymadı; uygulayıcı artık
   ekliyor ⇒ `A_not_dolu_beyan_inmez` dalı kaldırılıp beyan o 707 kayda da yazılmalı (önerim) —
   yoksa beyan veriye hiç inmez.
3. `ZAMAN-Z5-1008.md` ④-2'deki "5 kayıt uygulandı dedi" cümlesi düzeltilmeli: 3'ü (K2a) dedi, 2'si
   (K2b, veride zaten mükerrer) sessizce atlandı.
4. `_bayat_yama_kapi.dilim` JSON kaydı görmüyor — uygulayıcı tarafında örtüldü; kapının kendisi
   ayrı kalem olarak düzeltilsin mi (önerim: evet, tırnaklı anahtarı da tanısın + iki yönlü sınav)?
