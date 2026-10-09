# GUN-SAYACI-C0-1009 — gün sayacı ikizi (`arac/gun.py` + `js/gun.js`) + sınav

Oturum: GUN-SAYACI-C0-1009 (UMIT) · 9 Ekim 2026 · ağaç `C:\atlas-c0` @ `origin/makine/umit` `208b4bf2`
Tasarım: `GUN-SAYACI-TASARIM-1009.md` (koordinatör onayı). **Kapsam yalnız C0:** C1/C2 (denetle, app.js) ve
C3 (motor tuzu) dosyalarına DOKUNULMADI. Commit yok.

## Teslim
`GUN-SAYACI-C0-1009.diff`: **4 YENİ dosya**, 559 satır, LF (CR 0). Temiz bir ağaçta (`208b4bf2`) `git apply --check`
temiz; uygulanınca sınav **52/52**.
| dosya | ne | tüketici |
|---|---|---|
| `arac/gun.py` | `gun · dizgi · yil · yil_yazi · parcala · gun_sayisi · artik_mi · ay_uzunlugu` + `capraz_denetim/capraz_kapi` + `motor_sayacli_mi/negatif_yil_kapisi` | yok (C1 bağlar) |
| `js/gun.js` | `GUN.gun · dizgi · yil · yilYazi · parcala · gunSayisi · artikMi · ayUzunlugu` (tarayıcıda `window.GUN`, node'da `module.exports`) | yok (C2 bağlar; `index.html`e satır C2'de) |
| `denetim/ARAC-GUN-SAYACI-C0-SINAV-1009.py` | sınav, A-F bölümleri | — |
| `denetim/ARAC-GUN-SAYACI-C0-SINAV-1009.js` | node eşi (`ikiz` · `yamasiz` · `evren` kipleri) | sınav çağırır |
⚠️ Tuz dosyası değil, motor tuzu değişmez. `index.html`e dokunulmadı: `js/gun.js` yayında yüklenmiyor, davranış değişmez.
İsim farkı bilinçli: Python `yil_yazi`, JS `yilYazi` (iki dilin adlandırma alışkanlığı; app.js'te camelCase).

## Sınav sonucu — 52/52 (iki yönde)
| bölüm | ne sınandı | sonuç |
|---|---|---|
| **A yamasız kol** (GERÇEK koşu) | app.js `gunIdx('-2999-01-01')` | **65683 → yıl 2149** (kusur var) · yeni: −2999 |
| | `Date.UTC` 0001-0099 | **36.159 / 36.159 gün kayık** |
| | `denetle._gun_farki` negatifte | **None** · yeni: 1.563.239 gün (bağımsız hesap = yıl uzunlukları toplamı) |
| | `denetle.gun_no` negatifte | **ValueError** ("year -299 is out of range") |
| | dizgi sırası (Py ve JS) | `-0499 < -1199 < -2999 < 0000 < 1281 < 330` (YANLIŞ) · sayıyla doğru |
| **B ikiz** | MÖ 3000 → 9999-12-31, **4.747.787 gün**, her gün `z\|dizgi\|yıl` sha256 | **birebir** (`94e534989d93f7d3…`) · gidiş-dönüş 0 hata (iki dil) |
| | sınırlar (−2999 · −0001-12-31 · 0000 · 0000-02-29 · 0001 · 0099/0100 · 1281 · 1582-10-04/15 · 1923 · 1945 · 9999-12-31) · biçim varyantları · geçersizler | Py ↔ JS aynı |
| | 908 ≡ 0908 ≡ +000908 · "1453" = 1453-01-01 · MÖ 3000 = −2999 ≡ −002999 · 0 yılı artık · 1582-10-04→15 = 11 gün (Jülyen sıçraması YOK) · `yil_yazi` · dizgi hassasiyetleri | ✓ |
| **C gerileme** | **7.404 ayrık tarih dizgisi** (4.300 yerleşim s/d/v/isg/kd/kur/bit + künye f/t + 71 betiğin bütün kronolojisi, eval hatası 0) | okunamayan **0** · `gun == gun_no − 719163` **fark 0** · `gun == app.js gunIdx` **fark 0** · JS == Py **fark 0** |
| **D geçersiz** | `""` · `1923-13-01` · `abc` · `1281-02-30` · `1900-02-29` · `1453/05/29` · `1453-5-1` · `1453-05-00` · tip None/int/float | hepsi **fırlatıyor** (Py `ValueError`/`TypeError`, JS `RangeError`/`TypeError`) |
| **E çapraz kapı** | tutarlı (`-2999` ↔ "MÖ 3000" · `-2111` ↔ "M.Ö. 2112 civarı" · MS · hicrî yıl içeren MS metni) | **çıkış 0** |
| | 1 yıl kayık (`-3000` ↔ "MÖ 3000") · metinsiz MÖ · MS tarih + MÖ metin · okunamayan tarih | **çıkış 1** (dördü de) |
| **F geçici kapı** | bugünkü `uret_petek.py` | **sayaçsız** (işaret yok) |
| | uydurma MÖ kayıt + bugünkü motor | **ÖLÇÜLEMEDİ** |
| | negatif yok · motor sayaçlı | TAMAM · TAMAM |
| | okunamayan tarih | ÖLÇÜLEMEDİ |
| | işaret biçimi: `GUN_SAYACI = True` satır başında → sayaçlı; yorumda / girintili / `False` → sayaçsız | ✓ |
| | **bugünkü yerleşim verisi** | kapıdan GEÇİYOR (negatif yıl 0) |
**Sınavın kendisi de sınandı (mutasyon):** JS ikizinde ① artık yıl kuralı bozuldu (400 kuralı silindi) → sınav
**çıkış 1** (node `RangeError: -2800-02-29`) · ② negatif yıl bir kaydırıldı → **çıkış 1** (A1' ✗). İkisinde de
geri alındı, dosya yedekle birebir.

## Bulgu — eski okuyucunun okuyamadığı tarih
Gerileme evreninde bugünkü `gun_no`'nun ÇÖKTÜĞÜ dizgi **0** (yıl-yalnız `"1453"` biçimi veride yok). Yeni
sayacın sözleşmesi bu biçimi de kabul ediyor. Bugünkü veriye ek bir okuma yükü getirmiyor.

## 🔴 Kural tablosu — `VERI-YAPISI.md` eşleme tablosunun kaynağı
| tarihsel yazım | veride (dizgi) | astronomik yıl | gün sayısı (1970-01-01 = 0) | `yil_yazi` |
|---|---|---|---|---|
| MÖ 3000, 1 Ocak | `-2999-01-01` | −2999 | −1.814.890 | MÖ 3000 |
| MÖ 1200, 15 Haziran | `-1199-06-15` | −1199 | −1.157.288 | MÖ 1200 |
| MÖ 2, 31 Aralık | `-0001-12-31` | −1 | −719.529 | MÖ 2 |
| **MÖ 1** | `0000-01-01` | **0** | −719.528 | MÖ 1 |
| MS 1 | `0001-01-01` | 1 | −719.162 | 1 |
| MS 330, 11 Mayıs | `0330-05-11` ≡ `330-05-11` | 330 | aynı sayı | 330 |
| MS 908, 1 Mart | `0908-03-01` ≡ `908-03-01` ≡ `+000908-03-01` | 908 | −387.828 | 908 |
| 1453 (yıl hassasiyetli) | `1453` | 1453 | = `1453-01-01` | 1453 |
| ISO 8601 genişletilmiş | `-002999-01-01` | −2999 | `-2999-01-01` ile aynı | MÖ 3000 |
Kurallar: ① **0 yılı VAR**: MÖ n ⇒ yıl `1 − n`. **MÖ 3000 için `-3000` YAZILMAZ** (o MÖ 3001'dir). ② Ay/gün iki
hane, aralıkta (29 Şubat yalnız artık yılda: astronomik yıl 4'e bölünür, 100'e bölünüp 400'e bölünmeyen hariç;
**0 ve −4 artık**). ③ Takvim proleptik Gregoryen. Kaynak Jülyen ise çevrilmeden yazılan gün sapar (1281'de 7, MÖ
3000'de 24 gün; ölçüm TASARIM §②). Bu bir veri alanı sorusudur, sayaç çevirmez. ④ Yıl ≤ 0 olan her kayıtta
insan okunur metin **ZORUNLU** (`gun:"MÖ 3000"` ya da `M.Ö. 3000`). Metin sayıyla çelişirse ya da yoksa
`capraz_kapi` çıkış 1 verir. ⑤ Geçersiz tarih yazılamaz: okuyucu FIRLATIR, "None/boş" ile geçilmez.

## Geçici kapının BAĞLANMASI — öneri (C1'de bağlanır, C0 yalnız işlevi verdi)
- **Yer: `denetle.py`nin `OLCULEMEDI_KOVA`sı.** `§3`ün üç çıkış kodlu kapısı zaten "ölçülemeyen soru TEMİZ
  DEĞİLDİR" diyor ve adıyla listeliyor. Kapı:
  `gun.negatif_yil_kapisi(<bütün tarih alanları>, gun.motor_sayacli_mi("arac/uret_petek.py"))` →
  `"OLCULEMEDI"` ise kovaya **adıyla** düşer, çıkış 2.
  Evren: yerleşim (`girdi.yukle`) + künye + kronoloji. MÖ künye ya da madde de motoru etkiler mi? Motor künye
  `f/t`sini okumaz (TARAMA) ama arayüz okur ⇒ evren üçü birden.
- **Neden `denetle_yayin.py` değil:** yayın kapısı `denetle.py`yi zaten çağırıyor. İki yerde sormak, kuralın iki
  kopyasını doğurur.
- **İşaretin sözleşmesi (C3'e not):** motor sayaca geçtiği commit'te `uret_petek.py`ye satır başında
  `GUN_SAYACI = True` koyar. Kapı kendiliğinden açılır. İşaret tuz dosyasında olduğu için yalnız tam inşa
  commit'iyle gelebilir; erken konamaz. Bu bilinçli bir tasarım.
- **Çapraz denetim kapısı** (`gun.capraz_kapi`) de aynı commit'te `denetle.py`ye bağlanır. Bağlandığı evren:
  `gun` alanı ya da yıl ≤ 0 olan her kayıt. Çıkış 1 (ihlal), ÖLÇÜLEMEDİ değil.

## BULAMADIM / ÖLÇMEDİM
- Hız: Python sayacı 4,75 M günü (dizgi + gidiş-dönüş + sha) birkaç saniyede geçti, ayrı ölçülmedi. Motorun 4 saatlik
  koşusunda yükleme sınırında bir kez çevirmek, kıyas başına ek maliyet getirmez (tasarım).
- `gun:` metninin bugünkü alan adı ve biçim çeşitliliği (MS kayıtlarda) çapraz kapı için tarandı mı: hayır. Kapı
  yalnız MÖ'ye bakıyor, MS kayıtlarda yanlış alarm üretmesi beklenmez. C1'de bütün evrende bir kez koşturulup
  sayı yazılmalı.
