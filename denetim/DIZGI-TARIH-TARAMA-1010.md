# DIZGI-TARIH-TARAMA-1010 — tarih DİZGİ kıyasının dördüncüsü (ve fazlası) var mı?

Oturum: DIZGI-TARIH-TARAMA-1010 (UMIT, hazır kıta) · 10 Ekim 2026 · model **Opus** · görev: UMIT İRTİBAT.
**Taban: `origin/main` `a51430cc`** (ayrı worktree `C:\atlas-dizgi`, detached; tarama `37770b31`te başladı,
origin ilerleyince taşındı — aradaki fark yalnız `oturumlar/PAKET-1010-UMIT.md`, `arac/` · `js/` aynı).
YALNIZ ÖLÇÜM. Düzeltme yok · commit/push/stash yok · `C:\atlas`a yazılmadı · `uret_petek.py` ne koşturuldu
ne ithal edildi (AST + okuma). Ayrıntılı satır satır liste: `DIZGI-TARIH-TARAMA-1010.json` (227 site + 23 kanıt).

## CEVAP — evet, dördüncüsü var; en tehlikelisi iki tane
| # | yer | sınıf | ne olur (MÖ girdi) | kanıt |
|---|---|---|---|---|
| **4** | `js/suzgec.js` `sahipAnahtari` :422 · `isgalAnahtari` :553 · `aktifVAdi` :614 | **AÇIK-SESSIZ** | `p.f <= gs < p.t` düz dizgi ⇒ MÖ pencerede **sahipsiz der** (`""`, doğrusu `"s:ahameni"`) | J1 J2 J3 |
| **5** | `arac/_sahiplik_uygula.py` `maddesi_var` :181-205 (+ :166 gün kümesi regex'i) | **AÇIK-SESSIZ** | `^\d{4}` regex'i MÖ kırılma gününü "ay/yıl hassasiyeti, sorma" sayıp **True** (madde VAR) döner; MÖ maddeler gün kümesine **hiç girmez** | K1 K1b |

- **4 neden en tehlikeli:** `suzgec.js` haritanın sahiplik yüklemi. Tüketicileri: harita süzgeci, kamera odağı
  (`app.js:13648`, `:9224`), kart sahibi (`:10113`), ve **`arac/odak_cozum.js:239` — YAYIN KAPISININ odak
  nöbetçisi.** MÖ maddede odak kimliği sayısı 0 çıkar ⇒ kapı "odaksız" sayar ya da kamera OSMANLI kutusuna
  düşer (`CLAUDE.md §9`: odaksızlıktan KÖTÜ). `NEGATIF-YIL-1010-A` (İNDİ) `app.js`'i `GUN`'a geçirdi, `gs`
  artık doğru `"-0400-01-01"` dizgisi — ama karşı uç `y.s[].f` düz dizgi ve kıyas `suzgec.js`te: **A ona
  dokunmadı.**
- **5 neden en tehlikeli:** YAZICI (denetle_yayin `yer_yama` → `_sahiplik_uygula`). NOKTA-SUMER tam bu yoldan
  yazılacak; her MÖ kırılma "maddesi var" geçer ⇒ Değişmez 2 yazıcıda **susar**. `SAHIPLIK-KUR-KAPI-1010.diff`
  bu işlevi ÖRTMÜYOR (yalnız kur kapısı, hunk'ları :34 · :1152+ ). Ayrıca sınır kıyası `gun <= "1281-01-01"`
  MÖ'de dizgide de True (doğru sıra) ⇒ regex düzelse bile MÖ günü **"atlasın sınırı"** diye muaf kalır.
  📌 Dizgi dışı ama aynı satırda: 1281/1923 sınırları `UFUK 1000-1945`e göre BAYAT (1000-1281 ve 1923-1945
  kırılmaları da muaf geçiyor) — ölçmedim, yalnız okudum.

## KURAL — ölçüldü (K5 · K5b · J1b): dizgi kıyası NE ZAMAN kırılır
İyi biçimli (`[-]YYYY-AA-GG`, 4 hane) dizgide: **tek taraf negatif → DOĞRU** (`'-' < '0'`), **iki taraf negatif,
farklı yıl → TERS**, dolgusuz 3 hane → YANLIŞ. Yani **pozitif SABİT bir günle** (ANTLAŞMA günü, KESIT, 1281,
`acilis` günü) kıyaslayan site MÖ veride de doğrudur; **sorgu günü MÖ olabilen** site kırılır.
Bu ayrım 142 sitenin ZARARSIZ, 27'sinin AÇIK çıkmasının ana sebebi.

## SAYILAR
Evren: `arac/*.py` **153** dosya (B'nin taradığı 6'sı hariç: uret_petek · girdi · motor_onbellek · renkler ·
denetle · renk_olc) — AST taint (`ARAC-MOTOR-TARIH-TARAMA-1008.py`, dosya listesi env ile genişletildi) **206
site** · `js/*.js` 12 + `arac/*.js` 7 — elle grep **21 satır**. ⇒ **227 site:**
```
ZARARSIZ      142   tarih değil · pozitif sabitle kıyas · liste dilimi · ölü kod · tahta damgası
KAPANACAK-B    57   işlenen girdi.yukle/oku_devletler/olaylari_yukle'den ⇒ B-v2 Tarih'i kapatır
                    🔴 B İNMEDİ (gun.py'de `class Tarih` YOK) ⇒ BUGÜN bunlar da AÇIK-SESSIZ
AÇIK-SESSIZ    27   hiçbir diff kapatmıyor (12 dosya)
AÇIK-COKER      1   yüksek sesle (rotus.js regex reddi)
```
Diff durumu (`a51430cc`): **A İNDİ** (app.js'te 11 `NEGATIF-YIL-1010-A` damgası) · **B-v2 İNMEDİ** (yalnız
sınav dosyası `397c00c6`le girdi; kod yok — motor yaması, tam inşa partisini bekliyor) · **D5-GUN-v3 İNMEDİ**
(`apply --check` temiz) · **SAHIPLIK-KUR-KAPI İNMEDİ** (`kur-oncesi` 0; önce KAPSAM-v2 ister).

## AÇIK — hepsi, adıyla (sentetik kanıt koşturuldu)
| site | çağıran | MÖ / yıl 0 / 3 hane | bugün tetik? | kanıt |
|---|---|---|---|---|
| `js/suzgec.js:422/553/614` (yukarıda **4**) | süzgeç · kamera · kart · **odak_cozum.js (yayın kapısı)** | sessiz `""` | hayır (veride MÖ yok) · **SUMER inince EVET** | J1-J3 |
| `js/suzgec.js:431 gunKaydir` | suzgec :523 :686 · app.js :11360 :11361 :11991 (antlaşma farkı) | `'-0330-10-18'` → **`"0000-06-09"`** çöp | hayır (antlaşmalar pozitif) | J4 (yıl 50 DOĞRU: J4b) |
| `js/suzgec.js:582 kademeKumesi` | app.js :11364 | `L.t >= basGun` dizgi | hayır | K5 |
| `arac/_sahiplik_uygula.py:181 maddesi_var` (+:166 :174) (yukarıda **5**) | denetle_yayin `yer_yama` (YAZICI) | sessiz True | hayır · **NOKTA-SUMER yazımında EVET** | K1 K1b K1c |
| `arac/denetle_anakronizm.py:316 savas_taraflari` | elle koşturulan denetim | `len(t)==10` MÖ tam günü (11 kr) eler, `(t+"-01-01")[:10]` ⇒ `"-0550-03-1"`: gün 15→1 (**14 gün kayar**) | hayır (savaş taraf kaydı MÖ yok) | K3 · `gun_no` kendisi DOĞRU (K3b) |
| `arac/denetle_eslesme.py:668 _b_kimlik` | B defteri | `kayit[0][:4]` ⇒ MÖ 330-339 hepsi `"-033"` ⇒ **iki madde tek anahtar** (docstring'in "yıl ayırıyor" varsayımı kırılır) | hayır | K4 |
| `arac/_kronoloji_uygula.py:332/337` | `_bayat_uygula` · `_kunye_uygula` (YAZICI) | aynı `[:4]` deseni ⇒ sahte "aynı yıl" şüphesi / kaçan eşleşme | hayır · **KRONO-SUMER yazımında EVET** | K4 deseni |
| `arac/odak_olc.py:539` | denetle_yayin (yayın kapısı) | `veri_disi` dökümü `x["t"]`ye göre dizgi ⇒ MÖ satırlar TERS **basılır** (sayı etkilenmez) | ZAMAN-GENİŞ devirleri varsa | K6 |
| `arac/dolgu.py:1080 _kesitler` (bağımsız kip) | elle | üretilmiş JS düz dizgi ⇒ MÖ kesitler TERS, `bitis=tarihler[n]` **f > t kayıt** üretir. Motor kipi (`kosudan`, `MOTOR_B_DOLGU=1`, varsayılan KAPALI) B inerse kapanır | hayır | K6 |
| `arac/denetle_bosluk.py:214 yabanci_govdeler · :303 osmanli_govde` | elle | üretilmiş `dnm` düz dizgi × sorgu günü | sorgu günü MÖ ise | K5 |
| `arac/_alan_kaybi_sinavi.py:88` · `_enklav_kara.py:62` | tek kullanımlık | üretilmiş veri düz dizgi | hayır | K5 |
| `js/app.js:9515 _yerlesimSerit` | yer kartı şeridi | `Object.keys(uc).sort()` ⇒ **sıra TERS** + `sahip()` dizgi | hayır | J6 |
| `js/app.js:10120 _yaSahip` | kart metni | isg dizgi | hayır | J1 deseni |
| `js/app.js:9759/9760` dizin ilk/son · `:9806` yer kartı dönem listesi · `:16587 derinAdimlari` | gösterim | dizgi sıralama | hayır | K6 |
| `js/app.js:15186 tarihMetniAyristir` | "tarihe git" kutusu | `Date.UTC(yil…)` yıl 0-99 → **`"50"` → 1950** (sessiz) · yıl < 1 YÜKSEK SESLE reddedilir (MÖ girilemez) | UFUK 1000+ iken etkisiz · SUMER ufku açınca EVET | J5 J5b |
| `js/rotus.js:37` GUN regex (→ :54, :128) | rötuş | **AÇIK-COKER/yüksek sesle:** MÖ rötuş "f biçimi YYYY-AA-GG değil" diye REDDEDİLİR, uygulanmaz, denetle adıyla sayar | hayır (MÖ rötuş yok) | J7 |

## KAPANACAK-B (57) — B-v2 inerse kapanır, İNMEDEN AÇIK-SESSIZ
`denetle_statu` (16) · `denetle_tabiyet` (6) · `denetle_eslesme:155` · `nicin_bos` (5) · `maliyet` (4) ·
`puan_alani` · `calu_deney` · `bosluk_haritasi` · `altyapi_durum` · `kutu_olc` · `_sinir_envanteri` ·
`_sinir_hassasiyet` · `_yer_ara` · `_bolge_sahip` · `_kategori_cakisma` · `_paket_olc` · `denetle_bosluk:288` ·
**`uret_devirler.py:267/275 isgalleri_uret`** — bu sonuncusu KOŞU BORU HATTINDA (`kosu_yayin ②`):
`q["f"] <= f < q["t"]` negatif-negatifte yanlış ⇒ işgal örtüsünün `sahipRenk`i (tâbi/doğrudan) yanlış seçilir.
⚠️ B'nin `Tarih`i kıyası kapatır ama **dilim + `int()`'i kapatmaz**: `denetle_statu.py:520` yüzyıl dağılımı
`int(g[:4])//100+1` MÖ 330'u **"0. yy"** basar (K2) — Tarih'in dilimi düz `str` döner. Bunu AÇIK sayın.

## ZARARSIZ — gerekçe aileleri (142)
tarama `TARIH_DEGIL`/`DOGRU` (94) · pozitif sabitle kıyas: `1281/1923/1912/1921` sınırları, `ANTLASMALAR`
(`uret_devirler:346-362`), `KESIT` (`renk_cikti:182`), `kodla:625` açılış günü — K5b · liste dilimi/sıralaması
(tarih değil) · `uret_donemler.py` ÖLÜ BETİK · `bekleyen_topla:66` · `durum_tahtasi:93` tahta saat damgası ·
`app.js:3886` (pencereler AYRIK, ilk eşleşen döner ⇒ sıra sonucu değiştirmez) · `app.js:16089` (önce `gi`) ·
`zaman.js:32 yilGun` (ÖLÜ, çağıran 0 — ama yıl 0-99 kusurunu taşıyor, J8) · `zaman.js:31 gunYil` DOĞRU (J8b) ·
`data/kimlikler.js:79 bizans f:"330-05-11"` — **bugün veride dolgusuz 3 hane**, ama dosya EMEKLİ, kimse okumuyor.

## ① ÖLÇTÜM
- 227 site sınıflandı: ZARARSIZ 142 · KAPANACAK-B 57 · **AÇIK-SESSIZ 27** (12 dosya) · AÇIK-COKER 1.
- 23 sentetik kanıt (Python 11 `K*` · node 12 `J*`), işlevler GERÇEK kaynaktan AST/metin ile çıkarıldı;
  `suzgec.js` ve `gun.js` gerçekten `require` edildi.
- Bugünkü veri (`girdi.yukle` + `oku_devletler`): MÖ tarih **0**, dolgusuz 3 hane **0**, dolgulu `0xxx`
  96 künye f · 109 kronoloji t · 1 yerleşim (İstanbul 0330) ⇒ **bugün hiçbir AÇIK tetiklenmiyor**;
  hepsi NOKTA-SUMER / KUNYE-SUMER / KRONO-SUMER inince tetiklenir.
## ② BULAMADIM / ÖLÇMEDİM
- KASA dikiş kapısı UMIT'te yok (KASA'da) — taranmadı.
- JS için AST taint yok; JS elle grep (desenler: dizgi `< > <= >=` .f/.t/.kur, sort, Date/Date.UTC, slice(0,4),
  split("-")) — desen dışı bir kıyas kaçmış olabilir.
- Python taint tohumları `f t kur bit go devir_beyani` + tarih biçimli sabit; `tarih`/`gun` anahtarlı alanları
  ayrıca grep'ledim (yalnız `odak_olc:539` çıktı). AÇIK'ları B uygulanmış ağaçta koşturmadım (B motor yaması).
- `KAPANACAK-B` 57 sitenin her birinde işlenenin `Tarih` kaldığı (ara dönüşümle düz `str`e düşmediği)
  site site izlenmedi — dosya düzeyinde veri kaynağıyla sınıflandı (B'nin kendi araç envanterinin yöntemi).
## ③ İSTİYORUM / ÖNERİYORUM
1. **`suzgec.js` (4) A'nın devamı olarak:** kıyaslar `GUN.gun()` ile (A'nın `gunIdx` deseni) — ya da
   yükleyicide `fi/ti` tamsayı alanı. `odak_cozum.js` `suzgec.js`in GERÇEK işlevlerini çağırdığı için kapı
   kendiliğinden düzelir. KUNYE-SUMER-7 yayına inmeden önce.
2. **`_sahiplik_uygula.maddesi_var` (5):** regex → `gun.gun()`, `_sayi` → `gun.gun()`, kronoloji gün kümesi
   regex'i `-?\d{4}`; sınır sabitleri `girdi.UFUK`'tan. NOKTA-SUMER yazımından ÖNCE.
3. `[:4]` yıl anahtarı ailesi (`denetle_eslesme:668` · `_kronoloji_uygula:332/337` · `denetle_statu:520`) →
   `gun.yil(gun.gun(t))`. B'nin `Tarih`i bunları KAPATMAZ.
4. B-v2'nin inişi bu raporun 57 sitesini kapatır; inene kadar onlar da AÇIK — öncelik koordinatörde.

YENİ DOSYALAR: `C:\atlas-umit\denetim\DIZGI-TARIH-TARAMA-1010.md` · `C:\atlas-umit\denetim\DIZGI-TARIH-TARAMA-1010.json`
(ikisi de commitlenmedi; `C:\atlas-umit` git ağacı değilse yalnız disk). Tarama ve kanıt betikleri oturum
scratchpad'inde (repo'ya girmedi).
