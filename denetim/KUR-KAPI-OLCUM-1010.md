# KUR-KAPI-OLCUM-1010 — "dönem `f`si noktanın `kur:`undan ÖNCE başlıyor mu"

UMIT ölçüm işçisi · 10 Ekim 2026 · YALNIZ ÖLÇÜM (kapı yazılmadı, commit/push yok, stash yok, C:\atlas'a yazılmadı).
Taban: `main` `f0b6fd50` (geçici worktree) ve aynı taban + `denetim/SAHIPLIK-KAPSAM-1010.diff` (yalnız `arac/` hunk'ları;
`denetim/` hunk'ı f0b6fd50'ya uymadı: `ARAC-SAHIPLIK-BAYAT-TABAN-SINAV-1009.py:19` — diff `d50ddbed` tabanlı, beyanında yazılı).
Bağımsız ölçüm: `girdi.yukle()` (93 dosya, 4300 kayıt) + `arac/gun.py` `gun()` (sayısal gün, proleptik Gregoryen, astronomik yıl).
Geçici worktree'ler kaldırıldı.

---

## Koordinatörün çerçevesi: iki yer, iki ayrı cevap

| yer | rolü | bu soruyu soruyor mu |
|---|---|---|
| `arac/denetle.py` **Değişmez 5 (5a)** | DENETLEYİCİ — veriye SONRADAN sorar | **EVET, ama kısmen** (aşağıda 5 boşluk ADIYLA) |
| `arac/_sahiplik_uygula.py` | YAZICI — yamayı veriye yazar | **HAYIR, hiç sormaz.** `kur` yalnız `SKALER_KORUNAN` listesinde (`:762` main) — "doluysa EZME". Yazılacak dönemin `f`si ile kaydın `kur:`u hiçbir yerde karşılaştırılmıyor (main'de de, KAPSAM diff'inde de; `grep kur` ölçüldü). |

---

## ① Değişmez 5 bu soruyu tam soruyor mu? — HAYIR, beş boşluk

Kod: `denetle.py` `degismez5()` `:3120` (main), çağrı `:6996`, gün farkı `_gun_farki()` `:2714`, tolerans `HAYALET_TOLERANS_GUN = 400` `:2628`.

Ne yapıyor: her kaydın `d`/`s`/`v` dönemlerinin `f`lerini toplar, **dizgi** sıralar, en erkeğini (`ilk`) alır;
`kur:` varsa `g = _gun_farki(kur, ilk)`; `g > 400` gün ise ihlal (5a) — `devir_beyani` + öncekilerde `kaynak:` yoksa muaf.
Evren: `girdi.yukle()` = `GIRDI_DOSYALARI`nın HEPSİ (93 dosya). 5a'da tarih penceresi süzgeci YOK ⇒ **1281 öncesi (Z6) dönemler 5a evreninde.**
`f == kur` ⇒ g = 0 ⇒ ihlal DEĞİL (doğru; bugün 1450 dönem tam `f == kur`).

Boşluklar:

| # | boşluk | kanıt |
|---|---|---|
| B1 | **MÖ / 0 yılı KÖR (dizgi + `datetime`).** `_gun_farki` tarihi `split("-")` + `datetime.date` ile okur: `"-2999-01-01"` → `int("")` → hata → **None** → `g is not None` şartı düşer ⇒ **sessizce TEMİZ**. Yıl 0 da `date` MINYEAR=1 yüzünden None. Ayrıca `donemler.sort()` DİZGİ sıralar (negatif yılda `ilk` yanlış seçilir), 5b/5c eşikleri dizgi kıyası (`ilk > "1381-01-01"`, `ilk <= "1281-12-31"`). | sentetik, iki yön (aşağıda) |
| B2 | **None ÖLÇÜLEMEDİ kovasına düşmüyor.** Ayrıştırılamayan `kur:`/`f` (negatif, bozuk) ne ihlal ne ölçülemedi — iz bırakmadan geçer. §3 "Ölçülemeyen soru TEMİZ DEĞİLDİR" / `OLCULEMEDI_KOVA` kuralına aykırı. Bugün veride negatif/3 haneli `f` **0**, bozuk `kur:` **0** (gun.py ile 1477/1477 ayrıştı) ⇒ bugün ısırmıyor, MÖ verisi gelince ısırır. | |
| B3 | **`isg:` evrende YOK** (yalnız `("d","s","v")`). Var olmayan yer işgal de edilemez. Bugün `kur:`dan önce başlayan `isg:` dönemi **0** ⇒ bugün sayıyı değiştirmiyor. | sentetik: kur 1686 / isg f 1636 ⇒ denetle temiz, gun.py ihlal |
| B4 | **400 günlük tolerans** "önce başlıyor mu" sorusunu "13 aydan fazla önce mi"ye çeviriyor. Bugün tolerans altında **4 nokta** (aşağıda ADIYLA); 3'ü hassasiyet artefaktı, **1'i (Berezov) gerçek 1 yıllık çelişki** olabilir. | sentetik: kur 1686-01-01 / f 1685-06-01 ⇒ denetle temiz |
| B5 | `kur:` YOKSA soru sorulamaz — doğru, ama sayı tek kovada değil. Ayrıntı ① ek: 5c. | |

**Sentetik — `denetle.degismez5()` doğrudan, iki yönde (koordinatörün istediği):**

| kur | dönem f | alan | beklenen | denetle | gun.py | `_gun_farki` |
|---|---|---|---|---|---|---|
| -2999-01-01 | -3100-01-01 | s | İHLAL | **temiz ✗ KÖR** | İHLAL | None |
| -3100-01-01 | -2999-01-01 | s | temiz | temiz | temiz | None (doğru sonuç TESADÜF) |
| 0000-06-01 | -0001-01-01 | s | İHLAL | **temiz ✗ KÖR** | İHLAL | None |
| 0950-01-01 | 0900-01-01 | s | İHLAL | İHLAL | İHLAL | 18262 |
| 950 (3 hane) | 0900-01-01 | s | İHLAL | İHLAL | İHLAL | 18262 |
| 1686-01-01 | 1636-01-01 | s | İHLAL | İHLAL | İHLAL | 18263 |
| 1686-01-01 | 1636-01-01 | isg | İHLAL | **temiz (B3)** | İHLAL | 18263 |
| 1686-01-01 | 1685-06-01 | s | önce ama 214 g | **temiz (B4)** | İHLAL | 214 |
| 1686-01-01 | 1686-01-01 | s | temiz | temiz | temiz | 0 |

⇒ İkinci yönün "temiz"i İKİ YÖN SINAVI DEĞİLDİR: araç her iki MÖ girdisinde de None alıp susuyor. Çare zaten var: `arac/gun.py` (`gun()` geçersizde FIRLATIR — docstring'i bu kusuru adıyla anıyor: *"eski `denetle._gun_farki` negatif yılda None dönüyordu"*).

### ① ek — "5c 2449" nedir (ADIYLA sınıflama)

Kod: `degismez5()` `else` dalı (kur: YOK). Ölçüt, sırayla:
- **5b** (149): `kur:` yok ve `ilk > "1381-01-01"` (dizgi) — *borç listesi*, çıkış kodunu etkilemez.
- **5c** (2449): `kur:` yok **ve** `tur != "bolge"` **ve** `kasitli_bosluk` yok **ve** `ilk <= "1281-12-31"` (dizgi) — *borç listesi*, çıkış kodunu etkilemez.

5c **muaf DEĞİL** (muaf yalnız 5a-muaf, `devir_beyani`, 2 kayıt), **ihlal DEĞİL**, **kapsam dışı DEĞİL**:
bu sorunun diliyle **ÖLÇÜLEMEDİ**dir — `kur:` olmadığı için "dönem kur'dan önce mi" sorulamaz. Ama araç onu "i" (bilgi) satırı olarak basar, `OLCULEMEDI_KOVA`ya koymaz ve çıkışı 2 yapmaz.

4300 kaydın tam dökümü (her kayıt tek kovada, toplam 4300 ✓):

| kova | sayı | bu soru için |
|---|---|---|
| `kur:` VAR | 1477 | ÖLÇÜLÜR |
| 5c — kur yok, ilk dönem ≤1281, şehir/liman/kale… | 2449 | ölçülemedi |
| 5b — kur yok, ilk dönem >1381 | 149 | ölçülemedi |
| kur yok, d/s/v dönemi HİÇ yok | 148 | soru boş (dönem yok) |
| kur yok, `tur:"bolge"` (5c dışı) | 76 | ölçülemedi (bölge kurulmaz — gerekçeli) |
| kur yok, `kasitli_bosluk` (5c dışı) | 1 | ölçülemedi |
| kur yok, ilk dönem 1282..1381 (hiçbir kovada) | 0 | — |

5c'nin içi: tür `sehir` 1456 · `liman` 472 · `kale` 418 · `kasaba` 65 · `koy` 36 · `konfederasyon` 1 · `vaha` 1;
ilk dönem `1281-01-01`de 2369, **1281'den önce (Z6 ufku) 80**; en büyük dosyalar `yerlesimler.js` 732 · `_asya` 258 · `_avrupa` 236.
⚠️ Başlığı "1281'de ZATEN SAHİPLİ" — 80 kayıt artık 1281'den ÖNCE sahipli; başlık Z6'dan sonra eksik anlatıyor (sayıyı değiştirmiyor).

---

## ② Bugünkü gerçek ihlal sayısı (bağımsız, sayısal gün)

`kur:`lu 1477 kaydın her `d`/`s`/`v`/`isg` dönemi, `gun(f) < gun(kur)`:

| eşik | nokta | dönem |
|---|---|---|
| kesin `f < kur` (0 gün) | **6** | 19 (d 4 · s 15 · isg 0 · v 0) |
| > 30 gün | 6 | |
| > 400 gün (denetle eşiği) | 2 | — ikisi de `devir_beyani` MUAF |

ADIYLA:
- **Uzunköprü** (`yerlesimler_ek24.js`, kur 1443-01-01) — bizans 1281'den, 7 dönem önce · **5a-muaf** (beyan) — denetle ile AYNI.
- **Çanakkale** (`yerlesimler.js`, kur 1452-01-01) — bizans 1281'den, 8 dönem önce · **5a-muaf** (beyan) — denetle ile AYNI.
- **Berezov** (`yerlesimler_ek9.js`) — kur 1593-01-01 · `s` rusya f 1592-01-01 · **366 gün** önce. İkisi de yıl hassasiyetli ⇒ **gerçek 1 yıllık çelişki**; tolerans (B4) yutuyor.
- **Yakutsk** (`_ek9`) — kur 1632-10-05 · rusya f 1632-01-01 · 278 g — f yıl hassasiyetli, kur gün: hassasiyet artefaktı (aynı yıl).
- **Selenginsk** (`_ek13`) — kur 1665-09-27 · rusya f 1665-01-01 · 269 g — aynı sınıf.
- **Olyokminsk** (`_ek9`) — kur 1635-07-27 · rusya f 1635-01-01 · 207 g — aynı sınıf.

Hüküm: **denetle "0 çelişki" DOĞRU** kendi ölçütüyle (>400 g, beyansız). Fark ADIYLA: 4 nokta tolerans altında
(3 hassasiyet artefaktı, 1 Berezov olası gerçek çelişki); 2 nokta beyanlı muaf. MÖ/0 yılı verisi bugün **0** olduğu için
B1 bugün sayıyı DEĞİŞTİRMİYOR. Denetle'nin kendi koşusu (f0b6fd50 worktree): `Değişmez 5 ✓ 0` · `5a-muaf ✓ 2` · `5b 149` · `5c 2449`
(çıkış 2 — sebep D8 `devletler_harita.js YOK`, taze ağaç, D5 ile ilgisiz).

**Z6 (1281 öncesi) dönemler:** 5a evreninde (pencere süzgeci yok; `_gun_farki` 1000+ yılı doğru okur).
`f < 1281-01-01` dönem: **143**; bunlardan `kur:`lu kayda ait: **1** — `Lapaha (Muʻa)` `s` tui-tonga-imparatorlugu f 1220-01-01, kur 1220-01-01 (eşit ⇒ ihlal değil).
⇒ "kur 1281'den sonra olup Z6 ile 1281 öncesi dönem almış nokta": **0**.

---

## ③ Eksik kapı nerede — ve Mergen sentetik sınavı

**Sınav:** `Mergen (Nenjiang)` bugün `kur:1686-01-01`, `s: qing 1686→1912, cin-cum 1912→1923`
(`yerlesimler_nokta_asya_0917.js`). Geçici kopyada sentetik yama `data/yer_yama_zzsent_kur.js`:
`s: qing 1636-05-15→1912-02-12 …` + **`taban: {s: bugünkü değer}`** (taze ama yanlış beyan), `--yama-glob '^yer_yama_zzsent_kur\.js$'`.

| ağaç | anahtar sırası | kuru koşu | `--yaz` | yazıldı mı | sonra `denetle` |
|---|---|---|---|---|---|
| main f0b6fd50 | `{d,f,t}` (Mergen'in özgün biçimi) | çıkış 0, **ATLANDI** "KAPSAM DARALDI 1686→1923" — TESADÜFEN korudu (eski desen `{d,f,t}`yi göremiyor) | — | hayır | — |
| main f0b6fd50 | `{f,t,d}` | çıkış 0, **uygulandı**, taban TAZE, geri alma TAZE | çıkış 0 | **EVET** — kayıt `s:` qing 1636 oldu, `kur:1686` yerinde | `degismez5`: **1 çelişki** Mergen 49,6 yıl |
| main + KAPSAM-1010 | `{d,f,t}` | çıkış 0, **uygulandı** (yalnız "2s zayıf gün" UYARISI) | çıkış 0 | **EVET** | tam `denetle.py`: **`Değişmez 5 ✗ 1 çelişki`** · Mergen kur:1686 ilk dönem 1636-05-15 · **çıkış 1** (temiz tabanda 2 idi) |

⇒ **Yazıcı yazıyor, denetleyici SONRADAN yakalıyor.** KAPSAM diff'i sıra körlüğünü kapattığı için Mergen artık TESADÜFEN bile korunmuyor
(eskide `{d,f,t}` tesadüfi kalkandı). Taban kapısı soruyu SORMAZ (tabanı bugünkü değerle karşılaştırır, `kur:`la değil) ve
geri alma kapısı da sormaz ⇒ `taban:` beyanı doğru yazılmış yanlış bir genişleme hiçbir yazıcı kapısına takılmaz.

**Cevap:** eksik kapı **`_sahiplik_uygula.py`de (yazmadan önce)**. Denetle'de sonradan yakalama bugün VAR ve çalışıyor
(1636 gibi >400 g farkta); ama yakalama veri diske yazıldıktan sonradır ve B1–B4 boşlukları (MÖ, isg, <400 g) yazıcıdan geçeni denetleyicinin de kaçırmasına izin verir.

**Öneri (yazılmadı):**
1. `_sahiplik_uygula.py`: yazılacak her `d/s/v/isg` dönemi için `gun.gun(f) < gun.gun(kur)` (kaydın bugünkü `kur:`u; yama `kur:` da getiriyorsa ve kayıtta boşsa o) ⇒ **yazma, ayrı kova** (`kur-oncesi`, BAYAT ailesi gibi çıkış 2), ADIYLA bas. Ayrıştırılamazsa çıkış 3. `devir_beyani` taşıyan kayıt denetle'nin iki kilidiyle (beyan metni + öncekilerde `kaynak:` yok) muaf. Toleransı yazıcıya taşıma — yazıcıda 0 gün olmalı, hassasiyet artefaktı (Yakutsk sınıfı) beyanla geçmeli. Yama kayda yeni `kur:` getirip mevcut erken dönemleri "kur öncesi" yapıyorsa da aynı soru sorulur (bu yön sentetik sınanmadı).
2. `denetle.py` Değişmez 5: `_gun_farki` yerine `gun.gun` (B1); ayrıştırılamayan `kur`/`f` ⇒ `OLCULEMEDI_KOVA` adıyla (B2); `isg` evrene (B3, bugün +0); `donemler.sort()` sayısal anahtarla, 5b/5c eşikleri `gun()` ile. Tolerans (B4) kararı koordinatörün: Berezov'u görünür kılmak için ya eşik düşer ya tolerans altı ayrı "i" kovası basılır (bugün 4 nokta). 5c'yi bu sorunun `ölçülemedi` kovası olarak adıyla basmak (bilgi satırı değil) ayrı hüküm.
3. Sınav: yukarıdaki 9 satırlık sentetik tablo iki yönde (MÖ satırları dahil) + Mergen `--yaz` vakası her iki anahtar sırasında.

---

YENİ DOSYALAR: `denetim/KUR-KAPI-OLCUM-1010.md` (bu dosya). Ölçüm betiği scratchpad'de (`olc.py`), repoya girmedi.
