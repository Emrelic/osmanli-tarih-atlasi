# NEGATIF-YIL-1010-B — negatif yıl: AYRIŞTIRMA (③) + SIRALAMA (④), Python/motor kolu

Oturum: NEGATIF-YIL-1010-B (UMIT) · 10 Ekim 2026 · model Opus · şartname `KAMPANYA-SUMER-2000.md §5` ⓷⓸
Ağaç: `C:\atlas-umit-negB` @ `origin/main` **`f0b6fd50`** (ayrı worktree, detached). `C:\atlas` da `f0b6fd50`'daydı
(geride değil). Teslim sırasında `origin/main` **`b3fd8874`**'e ilerledi; aradaki `arac/` farkı yalnız `odak_cozum.js` +
`tahta.py` (dokunduğum dosyalar DEĞİL) ⇒ yama `b3fd8874`'te de `apply --check` temiz.
**Motor koşturulmadı.** Commit/push/stash yok. `C:\atlas`'a yazılmadı. Tuz dosyalarına (`girdi.py`, `uret_petek.py`)
YALNIZ kendi worktree'mde dokunuldu; yama `denetim/*.diff` olarak bekliyor (`§9.1②`).

## HÜKÜM — beş cümle
1. **Yaklaşım: siteleri tek tek değil, SINIRI değiştirdim.** `gun.py`ye `Tarih(str)` eklendi: dizgi AYNEN kalır
   (`==`, `hash`, dilim, JSON, f-dizgi, pickle), yalnız `<` `<=` `>` `>=` **gün sayısıyla** kıyaslar (eşit günde
   sözlük kırılımı ⇒ bugünkü sıra birebir). Tarih okunduğu yerde bir kez sarılır: `girdi.yukle` (s/d/v/isg/kd
   f·t, kur·bit·go) · `girdi.oku_devletler` (f·t, kronoloji t) · `girdi.oku_goller` · `UFUK`/`VERI_UFKU` ·
   `denetle.olaylari_yukle` (madde t) · `denetle._devletler_yukle`. Python düz `str` ile kıyasta alt sınıfın
   yansıtılmış işlecini ÖNCE çağırır ⇒ `"1281-01-01" <= t` de sayıyla.
2. **Ayrıştırma (③): veri okuyan `fromisoformat`/`date()` sitesi 8 → 0** (AST kapısı, iki yönde: yamasız ağaçta 6
   izinsiz + 2 izinli yedek, yamalıda 0). Motorun tek sitesi `KESIT_SON` (`uret_petek.py:2908`) gün sayacına geçti.
3. **Sıralama (④): motor 77 sitenin 50'si sıra/kıyas** — **50'si KAPANDI** (işlenenlerden en az biri yükleyiciden
   `Tarih`), 2'si AÇIK (`uret_petek.py:8426` teşhis satırı, gösterim), 13 eşitlik değişmedi, 11 tarih değil.
   Araçlarda 152 site: 62 KAPANDI · 14 DEĞİŞTİ · 17 KISMEN (D8 üretilmiş gövde + rötuş, sarılmadı) · 2 YÜKSEK SESLE ·
   1 AÇIK (gösterim) · 56 değişmedi/tarih değil. Hepsi ADIYLA aşağıda.
4. **Mevcut veride sonuç değişmedi:** `denetle.py --ayrinti` önce/sonra **BİREBİR** (12.271 satır, `cmp` eşit, çıkış
   2 = D8 ölçülemedi, beklenen) · `renk_olc.py` BİREBİR · `odak_olc.py` BİREBİR. Sınav **67/67**, iki mutasyonda ötüyor.
5. **🔴 Bir aksaklık (⑥):** `gun.py` artık motorun bağımlılığı ⇒ **tuz listesine girmeli** (`MOTOR_IZ_DOSYALARI`,
   TUZ-DORT yaması). Girmezse `gun.py` değişince önbellek bayatlamaz. Kanıtı TUZ-DORT sınavı verdi: üç yama birlikte
   uygulanınca o sınav motor dosyalarını geçici dizine kopyalıyor, `gun.py` kopyalanmıyor ⇒ `ModuleNotFoundError` ⇒
   **2/13 ölçülemedi**. Benim yamam o dosyaya dokunmuyor (başka oturumun yaması) — ③'te öneri.

---

## ⓷ ENVANTER 1 — `fromisoformat` · `date(...)` · `strptime` · `toordinal` (grep + AST)
Satır numaraları `f0b6fd50` tabanıdır.
| dosya:satır | işlev | çağrı | okuduğu | DURUM |
|---|---|---|---|---|
| `uret_petek.py:2908` | modül (`KESIT_SON`) | `_dt.date.fromisoformat(girdi.UFUK[1])` | **VERİ** (ufuk) | **DEĞİŞTİ** → `_gun.Tarih(_gun.dizgi(_gun.gun(UFUK[1]) + 3))` = `1945-09-05` aynı |
| `uret_petek.py:281 · 342 · 424` | — | `_dt.datetime.now()` | saat damgası | değişmedi (sabit/damga) |
| `denetle.py:1225` | `gun_no` | `date(y, a, g).toordinal()` | **VERİ** | **DEĞİŞTİ** → `_gun.gun(tam(pad(s))) + 719163` (ordinal aynı; C0: 7.404 dizgide fark 0) |
| `denetle.py:2332` | `kapsam_disi` (FETRET yedeği) | `datetime.date(yy,mm,dd) + timedelta` | **VERİ** | **DEĞİŞTİ** → `_gun.dizgi(_gun.gun(g) ± n)`; ayrıca `:2323` `(g+"-01-01")[:10]` negatifte 11 haneyi kesiyordu → negatif dalı gün sayacı |
| `denetle.py:2720` | `_gun_farki.ay` | `_d(int(p[0]), …)` | **VERİ** | **DEĞİŞTİ** → önce `_gun.gun(a) - _gun.gun(b)`; okuyamazsa ESKİ yol (gevşek `"1453-5"` biçimi aynen; `None` sözleşmesi C1'in kararı, dokunulmadı). MÖ: `-1.563.239` (eskiden **None**) |
| `denetle.py:3701` | `degismez7.artir` | `date(int(p[0]),…) + timedelta` | **VERİ** | **DEĞİŞTİ (yalnız negatif dal)** → `_gun.dizgi(_gun.gun(g)+n)`; pozitif yıl ESKİ yol (ay-hassasiyetli `"1453-05"` bugün `g`yi aynen döndürüyor — bu korunmalıydı) |
| `denetle.py:4271` | `_gun_no` | `date(…).toordinal()` | **VERİ** | **DEĞİŞTİ** → `_gun.gun(t) + 719163` |
| `denetle.py:5160` | `_d8_gun_once` | `date.fromisoformat(pad(g))` | **VERİ** | **DEĞİŞTİ** → `_gun.Tarih(_gun.dizgi(_gun.gun(pad(g)) - 1))` |
| `denetle.py:6039` | tavan geçmişi kaydı (`T["gecmis"]`) | `date.today()` | bugünün damgası | değişmedi |
| `denetle.py:6182` | `zincir_kaynagi_rapor` | `date.fromisoformat(pad(s/b))` ×2 | **VERİ** | **DEĞİŞTİ** → `_gun.gun(pad(s)) - _gun.gun(pad(b))` |
| `motor_esitlik.py:305` | `SENARYO_KANCA._s_kaydir` (motora enjekte edilen METİN) | `_dt_s.date.fromisoformat(_g)` | **VERİ** (sınav senaryosu) | **DEĞİŞTİ** → `_gun.Tarih(_gun.dizgi(_gun.gun(_g)+_n))` (motor ad alanında `_gun` artık var). ⚠️ AST kapısı bunu GÖREMEZ — dizgi içinde kod |
| `motor_esitlik.py:386 · 437 · 453` · `donanim.py:91` · `olcut.py:424` | — | `datetime.now()` | damga | değişmedi |
| `bekleyen_topla.py:66` · `durum_tahtasi.py:93` | — | `strptime(damga)` | tahta saat damgası (MS 2026) | değişmedi — tarih VERİSİ değil |
| `denetle.py:1298` (tarama dışı, elle bulundu) | `degismez1_kapsam` | `int(df[:4])` + `"%04d-06-15"` | **VERİ** (ufuk devirleri) | **DEĞİŞTİ** → `_gun.yil(_gun.gun(df))` + `_gun.gun_sayisi(yıl,6,15)` (`"%04d" % -5` = `"-005"` geçersizdi) |
| `denetle.py:3191 · 3197` | `degismez5` | `int(VERI_UFKU[0][:4])` · `VERI_UFKU[0][:4]+"-12-31"` | **VERİ** (ufuk) | **DEĞİŞTİ** → `_gun.yil(…)` + `gun_sayisi` |
⇒ veri okuyan **10 site değişti** (8'i AST kapısının sınıfı + `motor_esitlik` metni + `[:4]` ailesinden 3). Sabit/damga okuyan 11 site değişmedi.

## ⓸ ENVANTER 2 — dizgi tarih kıyası/sıralaması (AST taint: `ARAC-MOTOR-TARIH-TARAMA-1008.py`, motor + `--ek`)
Kovalar taramanındır (sessizce yanlış = dolgusuz/negatif vektörde sözlük sırası ≠ gün sırası). DURUM benimdir:
**KAPANDI** = işlenenlerden en az biri yükleyiciden gelen `Tarih` (motor sitelerinde her işlenen elle izlendi:
`tarihler`/`ts`/`_wts` kümeleri d/v/s dönem uçlarından + `EPOK`/`KESIT_SON`; `DEVLET_KAYIT.dnm` ve `donemler` bu
kümelerin elemanlarından; `OLCU_KESIT` düz sabit ama karşı uç `Tarih`). Araç sitelerinde köken yükleyiciye göre
sınıflandı (Y = `girdi.yukle`, künye = `oku_devletler`/`_devletler_yukle`, madde = `olaylari_yukle`).

### MOTOR (tuz: uret_petek.py + girdi.py) — 77 site

| dosya:satır | işlev | tür | ifade | tarama kovası | DURUM |
|---|---|---|---|---|---|
| `girdi.py:687` | kd_gun | KARSIL/sira | `p.get("f", "") <= gun < p.get("t", "9999")` | SESSIZCE_YANLIS | KAPANDI — işlenen yükleyiciden `Tarih` (sıra gün sayısıyla) |
| `girdi.py:760` | ufuk_devirleri | KARSIL/sira | `UFUK[0] < VERI_UFKU[0]` | DOGRU | DEĞİŞMEDİ — eşitlik/`in`: Tarih `==`/hash dizgiyle AYNI |
| `girdi.py:762` | ufuk_devirleri | KARSIL/sira | `VERI_UFKU[1] < UFUK[1]` | DOGRU | DEĞİŞMEDİ — eşitlik/`in`: Tarih `==`/hash dizgiyle AYNI |
| `girdi.py:781` | oku_goller | KARSIL/sira | `gf >= UFUK[1]` | SESSIZCE_YANLIS | KAPANDI — işlenen yükleyiciden `Tarih` (sıra gün sayısıyla) |
| `girdi.py:781` | oku_goller | KARSIL/sira | `gt <= UFUK[0]` | SESSIZCE_YANLIS | KAPANDI — işlenen yükleyiciden `Tarih` (sıra gün sayısıyla) |
| `girdi.py:785` | oku_goller | KARSIL/sira | `gf > UFUK[0]` | SESSIZCE_YANLIS | KAPANDI — işlenen yükleyiciden `Tarih` (sıra gün sayısıyla) |
| `girdi.py:785` | oku_goller | KARSIL/sira | `gt < UFUK[1]` | SESSIZCE_YANLIS | KAPANDI — işlenen yükleyiciden `Tarih` (sıra gün sayısıyla) |
| `girdi.py:786` | oku_goller | KARSIL/sira | `gf > UFUK[0]` | SESSIZCE_YANLIS | KAPANDI — işlenen yükleyiciden `Tarih` (sıra gün sayısıyla) |
| `girdi.py:787` | oku_goller | KARSIL/sira | `gt < UFUK[1]` | SESSIZCE_YANLIS | KAPANDI — işlenen yükleyiciden `Tarih` (sıra gün sayısıyla) |
| `uret_petek.py:2908` | <modul> | AYRIST/fromisoformat | `_dt.date.fromisoformat(girdi.UFUK[1])` | COKUYOR | DEĞİŞTİ → `_gun.dizgi(_gun.gun(UFUK[1]) + 3)` (Tarih) |
| `uret_petek.py:4576` | <modul> | SIRALA/sorted | `sorted(t for t in tarihler if EPOK <= t <= KESIT_SON)` | SESSIZCE_YANLIS | KAPANDI — işlenen yükleyiciden `Tarih` (sıra gün sayısıyla) |
| `uret_petek.py:4576` | <modul> | KARSIL/sira | `EPOK <= t <= KESIT_SON` | SESSIZCE_YANLIS | KAPANDI — işlenen yükleyiciden `Tarih` (sıra gün sayısıyla) |
| `uret_petek.py:4577` | <modul> | KARSIL/esitlik | `tarihler[0] != EPOK` | DOGRU | DEĞİŞMEDİ — eşitlik/`in`: Tarih `==`/hash dizgiyle AYNI |
| `uret_petek.py:4578` | <modul> | KARSIL/esitlik | `tarihler[-1] != KESIT_SON` | DOGRU | DEĞİŞMEDİ — eşitlik/`in`: Tarih `==`/hash dizgiyle AYNI |
| `uret_petek.py:4807` | _sahipli | KARSIL/sira | `p["f"] <= g < p["t"]` | SESSIZCE_YANLIS | KAPANDI — işlenen yükleyiciden `Tarih` (sıra gün sayısıyla) |
| `uret_petek.py:4926` | _kusatilmis | KARSIL/esitlik | `g in _KUS_ONBELLEK` | DOGRU | DEĞİŞMEDİ — eşitlik/`in`: Tarih `==`/hash dizgiyle AYNI |
| `uret_petek.py:4933` | _kusatilmis | KARSIL/sira | `y["kur"] > g` | SESSIZCE_YANLIS | KAPANDI — işlenen yükleyiciden `Tarih` (sıra gün sayısıyla) |
| `uret_petek.py:4933` | _kusatilmis | KARSIL/sira | `y["bit"] <= g` | SESSIZCE_YANLIS | KAPANDI — işlenen yükleyiciden `Tarih` (sıra gün sayısıyla) |
| `uret_petek.py:4951` | _kusatilmis | KARSIL/sira | `yj["kur"] > g` | SESSIZCE_YANLIS | KAPANDI — işlenen yükleyiciden `Tarih` (sıra gün sayısıyla) |
| `uret_petek.py:4951` | _kusatilmis | KARSIL/sira | `yj["bit"] <= g` | SESSIZCE_YANLIS | KAPANDI — işlenen yükleyiciden `Tarih` (sıra gün sayısıyla) |
| `uret_petek.py:4987` | _kusatilmis | KARSIL/sira | `yj["kur"] > g` | SESSIZCE_YANLIS | KAPANDI — işlenen yükleyiciden `Tarih` (sıra gün sayısıyla) |
| `uret_petek.py:4987` | _kusatilmis | KARSIL/sira | `yj["bit"] <= g` | SESSIZCE_YANLIS | KAPANDI — işlenen yükleyiciden `Tarih` (sıra gün sayısıyla) |
| `uret_petek.py:5025` | devir_kumesi | KARSIL/sira | `y["kur"] > g` | SESSIZCE_YANLIS | KAPANDI — işlenen yükleyiciden `Tarih` (sıra gün sayısıyla) |
| `uret_petek.py:5025` | devir_kumesi | KARSIL/sira | `y["bit"] <= g` | SESSIZCE_YANLIS | KAPANDI — işlenen yükleyiciden `Tarih` (sıra gün sayısıyla) |
| `uret_petek.py:5429` | <modul> | SIRALA/sorted | `sorted({y["kur"] for y in YERLER if y.get("kur")} \| {y["bit"] for y in` | SESSIZCE_YANLIS | KAPANDI — işlenen yükleyiciden `Tarih` (sıra gün sayısıyla) |
| `uret_petek.py:5557` | <modul> | SIRALA/sorted | `sorted({a for _, a in _kus_kayit})` | TARIH_DEGIL | TARİH DEĞİL (tarama) |
| `uret_petek.py:5561` | <modul> | KARSIL/esitlik | `a == _ad` | TARIH_DEGIL | TARİH DEĞİL (tarama) |
| `uret_petek.py:5565` | <modul> | KARSIL/esitlik | `_ad in _KUS_BEKLENEN` | TARIH_DEGIL | TARİH DEĞİL (tarama) |
| `uret_petek.py:5734` | don_kose_kur | SIRALA/sort[key] | `rs.sort(key=lambda x: x[1])` | SESSIZCE_YANLIS | KAPANDI — işlenen yükleyiciden `Tarih` (sıra gün sayısıyla) |
| `uret_petek.py:5739` | don_kose_kur | KARSIL/sira | `fk >= ti` | SESSIZCE_YANLIS | KAPANDI — işlenen yükleyiciden `Tarih` (sıra gün sayısıyla) |
| `uret_petek.py:5741` | don_kose_kur | KARSIL/esitlik | `sk != si` | TARIH_DEGIL | TARİH DEĞİL (tarama) |
| `uret_petek.py:5744` | don_kose_kur | KARSIL/esitlik | `q in out` | TARIH_DEGIL | TARİH DEĞİL (tarama) |
| `uret_petek.py:5882` | <modul> | SIRALA/min | `min(dn["f"] for dn in ara)` | SESSIZCE_YANLIS | KAPANDI — işlenen yükleyiciden `Tarih` (sıra gün sayısıyla) |
| `uret_petek.py:5882` | <modul> | SIRALA/max | `max(dn["t"] for dn in ara)` | SESSIZCE_YANLIS | KAPANDI — işlenen yükleyiciden `Tarih` (sıra gün sayısıyla) |
| `uret_petek.py:5983` | _eski_yabanci_taban | KARSIL/sira | `_p["f"] <= _g < _p["t"]` | SESSIZCE_YANLIS | KAPANDI — işlenen yükleyiciden `Tarih` (sıra gün sayısıyla) |
| `uret_petek.py:6335` | _dolgu_kumesi | KARSIL/esitlik | `a in _DOLGU_ONBELLEK` | DOGRU | DEĞİŞMEDİ — eşitlik/`in`: Tarih `==`/hash dizgiyle AYNI |
| `uret_petek.py:6359` | _dolgu_kumesi | KARSIL/sira | `dn["f"] <= a < dn["t"]` | SESSIZCE_YANLIS | KAPANDI — işlenen yükleyiciden `Tarih` (sıra gün sayısıyla) |
| `uret_petek.py:6363` | _dolgu_kumesi | KARSIL/sira | `sp["f"] <= a < sp["t"]` | SESSIZCE_YANLIS | KAPANDI — işlenen yükleyiciden `Tarih` (sıra gün sayısıyla) |
| `uret_petek.py:6407` | _dolgu_kumesi | KARSIL/sira | `y["kur"] > a` | SESSIZCE_YANLIS | KAPANDI — işlenen yükleyiciden `Tarih` (sıra gün sayısıyla) |
| `uret_petek.py:6408` | _dolgu_kumesi | KARSIL/sira | `y["bit"] <= a` | SESSIZCE_YANLIS | KAPANDI — işlenen yükleyiciden `Tarih` (sıra gün sayısıyla) |
| `uret_petek.py:6604` | _osm_aktif | KARSIL/sira | `dn["f"] <= a < dn["t"]` | SESSIZCE_YANLIS | KAPANDI — işlenen yükleyiciden `Tarih` (sıra gün sayısıyla) |
| `uret_petek.py:6605` | _osm_aktif | KARSIL/sira | `dn["f"] <= a < dn["t"]` | SESSIZCE_YANLIS | KAPANDI — işlenen yükleyiciden `Tarih` (sıra gün sayısıyla) |
| `uret_petek.py:6642` | <modul> | SIRALA/sorted | `sorted(t for t in _wts if EPOK <= t <= KESIT_SON)` | SESSIZCE_YANLIS | KAPANDI — işlenen yükleyiciden `Tarih` (sıra gün sayısıyla) |
| `uret_petek.py:6642` | <modul> | KARSIL/sira | `EPOK <= t <= KESIT_SON` | SESSIZCE_YANLIS | KAPANDI — işlenen yükleyiciden `Tarih` (sıra gün sayısıyla) |
| `uret_petek.py:6644` | <modul> | KARSIL/esitlik | `_wts[0] != EPOK` | DOGRU | DEĞİŞMEDİ — eşitlik/`in`: Tarih `==`/hash dizgiyle AYNI |
| `uret_petek.py:6650` | <modul> | KARSIL/sira | `sp["f"] <= _wa < sp["t"]` | SESSIZCE_YANLIS | KAPANDI — işlenen yükleyiciden `Tarih` (sıra gün sayısıyla) |
| `uret_petek.py:6743` | _gun_sahipleri | KARSIL/sira | `sp["f"] <= a < sp["t"]` | SESSIZCE_YANLIS | KAPANDI — işlenen yükleyiciden `Tarih` (sıra gün sayısıyla) |
| `uret_petek.py:6896` | _yabanci_devlet_faz1 | SIRALA/sorted | `sorted(t for t in ts if EPOK <= t <= KESIT_SON)` | SESSIZCE_YANLIS | KAPANDI — işlenen yükleyiciden `Tarih` (sıra gün sayısıyla) |
| `uret_petek.py:6896` | _yabanci_devlet_faz1 | KARSIL/sira | `EPOK <= t <= KESIT_SON` | SESSIZCE_YANLIS | KAPANDI — işlenen yükleyiciden `Tarih` (sıra gün sayısıyla) |
| `uret_petek.py:6898` | _yabanci_devlet_faz1 | KARSIL/esitlik | `ts[0] != EPOK` | DOGRU | DEĞİŞMEDİ — eşitlik/`in`: Tarih `==`/hash dizgiyle AYNI |
| `uret_petek.py:6899` | _yabanci_devlet_faz1 | KARSIL/esitlik | `ts[-1] != KESIT_SON` | DOGRU | DEĞİŞMEDİ — eşitlik/`in`: Tarih `==`/hash dizgiyle AYNI |
| `uret_petek.py:6909` | _yabanci_devlet_faz1 | KARSIL/sira | `sp["f"] <= a < sp["t"]` | SESSIZCE_YANLIS | KAPANDI — işlenen yükleyiciden `Tarih` (sıra gün sayısıyla) |
| `uret_petek.py:7112` | <modul> | KARSIL/esitlik | `"ak" in h` | TARIH_DEGIL | TARİH DEĞİL (tarama) |
| `uret_petek.py:7164` | <modul> | SIRALA/sorted | `sorted(t for t in ts if EPOK <= t <= KESIT_SON)` | SESSIZCE_YANLIS | KAPANDI — işlenen yükleyiciden `Tarih` (sıra gün sayısıyla) |
| `uret_petek.py:7164` | <modul> | KARSIL/sira | `EPOK <= t <= KESIT_SON` | SESSIZCE_YANLIS | KAPANDI — işlenen yükleyiciden `Tarih` (sıra gün sayısıyla) |
| `uret_petek.py:7166` | <modul> | KARSIL/esitlik | `ts[0] != EPOK` | DOGRU | DEĞİŞMEDİ — eşitlik/`in`: Tarih `==`/hash dizgiyle AYNI |
| `uret_petek.py:7167` | <modul> | KARSIL/esitlik | `ts[-1] != KESIT_SON` | DOGRU | DEĞİŞMEDİ — eşitlik/`in`: Tarih `==`/hash dizgiyle AYNI |
| `uret_petek.py:7175` | <modul> | KARSIL/sira | `sp["f"] <= a < sp["t"]` | SESSIZCE_YANLIS | KAPANDI — işlenen yükleyiciden `Tarih` (sıra gün sayısıyla) |
| `uret_petek.py:7398` | himaye_gruplari | KARSIL/sira | `p["f"] <= a < p["t"]` | SESSIZCE_YANLIS | KAPANDI — işlenen yükleyiciden `Tarih` (sıra gün sayısıyla) |
| `uret_petek.py:7569` | <modul> | KARSIL/sira | `dn["f"] <= _a < dn["t"]` | SESSIZCE_YANLIS | KAPANDI — işlenen yükleyiciden `Tarih` (sıra gün sayısıyla) |
| `uret_petek.py:7571` | <modul> | KARSIL/sira | `dn["f"] <= _a < dn["t"]` | SESSIZCE_YANLIS | KAPANDI — işlenen yükleyiciden `Tarih` (sıra gün sayısıyla) |
| `uret_petek.py:7586` | <modul> | KARSIL/sira | `dn["f"] <= a < dn["t"]` | SESSIZCE_YANLIS | KAPANDI — işlenen yükleyiciden `Tarih` (sıra gün sayısıyla) |
| `uret_petek.py:7589` | <modul> | KARSIL/sira | `dn["f"] <= a < dn["t"]` | SESSIZCE_YANLIS | KAPANDI — işlenen yükleyiciden `Tarih` (sıra gün sayısıyla) |
| `uret_petek.py:7633` | <modul> | KARSIL/esitlik | `dn["f"] == a` | DOGRU | DEĞİŞMEDİ — eşitlik/`in`: Tarih `==`/hash dizgiyle AYNI |
| `uret_petek.py:7635` | <modul> | KARSIL/esitlik | `dn["t"] == a` | DOGRU | DEĞİŞMEDİ — eşitlik/`in`: Tarih `==`/hash dizgiyle AYNI |
| `uret_petek.py:7711` | <modul> | KARSIL/sira | `p["f"] <= a < p["t"]` | SESSIZCE_YANLIS | KAPANDI — işlenen yükleyiciden `Tarih` (sıra gün sayısıyla) |
| `uret_petek.py:7747` | <modul> | KARSIL/sira | `p["f"] <= a < p["t"]` | SESSIZCE_YANLIS | KAPANDI — işlenen yükleyiciden `Tarih` (sıra gün sayısıyla) |
| `uret_petek.py:8310` | _yabanci_g | KARSIL/sira | `p["f"] <= g < p["t"]` | SESSIZCE_YANLIS | KAPANDI — işlenen yükleyiciden `Tarih` (sıra gün sayısıyla) |
| `uret_petek.py:8320` | _alan_g | KARSIL/sira | `d["f"] <= g < d["t"]` | SESSIZCE_YANLIS | KAPANDI — işlenen yükleyiciden `Tarih` (sıra gün sayısıyla) |
| `uret_petek.py:8370` | <modul> | KARSIL/esitlik | `_esk is None` | TARIH_DEGIL | TARİH DEĞİL (tarama) |
| `uret_petek.py:8412` | <modul> | SIRALA/max[key] | `max(_oyn, key=lambda x: abs(x[1]))` | TARIH_DEGIL | TARİH DEĞİL (tarama) |
| `uret_petek.py:8418` | <modul> | KARSIL/esitlik | `"(yabancı)" not in x[0]` | TARIH_DEGIL | TARİH DEĞİL (tarama) |
| `uret_petek.py:8426` | <modul> | KARSIL/sira | `g < _oyn[0][0][:10]` | SESSIZCE_YANLIS | AÇIK — teşhis satırı: `OLCU_KESIT` sabiti ↔ f-dizgi DİLİMİ (`[:10]`), ikisi de düz; MÖ'de dilim bozuk. Gösterim, sahiplik değil |
| `uret_petek.py:8426` | <modul> | DILIM/dilim | `_oyn[0][0][:10]` | SESSIZCE_YANLIS | AÇIK — teşhis satırı: `OLCU_KESIT` sabiti ↔ f-dizgi DİLİMİ (`[:10]`), ikisi de düz; MÖ'de dilim bozuk. Gösterim, sahiplik değil |
| `uret_petek.py:8485` | <modul> | DILIM/dilim | `donemler[:3]` | TARIH_DEGIL | TARİH DEĞİL (tarama) |
| `uret_petek.py:8485` | <modul> | DILIM/dilim | `donemler[-3:]` | TARIH_DEGIL | TARİH DEĞİL (tarama) |
| `uret_petek.py:8496` | <modul> | KARSIL/sira | `"1830-01-01" <= d["f"] <= "1842-12-31"` | SESSIZCE_YANLIS | KAPANDI — işlenen yükleyiciden `Tarih` (sıra gün sayısıyla) |

Özet: AÇIK 2 · DEĞİŞMEDİ 13 · DEĞİŞTİ 1 · KAPANDI 50 · TARİH 11

### ARAÇLAR (denetle.py + renk_olc.py) — 152 site

| dosya:satır | işlev | tür | ifade | tarama kovası | DURUM |
|---|---|---|---|---|---|
| `denetle.py:50` | kirilma_disi | KARSIL/sira | `g < UFUK[0]` | SESSIZCE_YANLIS | KAPANDI — işlenen yükleyiciden `Tarih` (sıra gün sayısıyla) |
| `denetle.py:50` | kirilma_disi | KARSIL/sira | `g > UFUK[1]` | SESSIZCE_YANLIS | KAPANDI — işlenen yükleyiciden `Tarih` (sıra gün sayısıyla) |
| `denetle.py:50` | kirilma_disi | KARSIL/esitlik | `g in UFUK_DAMGASI` | DOGRU | DEĞİŞMEDİ — eşitlik/`in`: Tarih `==`/hash dizgiyle AYNI |
| `denetle.py:1213` | pad | KARSIL/esitlik | `s[0] == "-"` | DOGRU | DEĞİŞMEDİ — eşitlik/`in`: Tarih `==`/hash dizgiyle AYNI |
| `denetle.py:1223` | gun_no | DILIM/int(dilim) | `int(s[0:4])` | COKUYOR | DEĞİŞTİ → `gun_no` = `_gun.gun(..) + 719163` |
| `denetle.py:1223` | gun_no | DILIM/int(dilim) | `int(s[5:7])` | COKUYOR | DEĞİŞTİ → `gun_no` = `_gun.gun(..) + 719163` |
| `denetle.py:1224` | gun_no | DILIM/int(dilim) | `int(s[8:10])` | COKUYOR | DEĞİŞTİ → `gun_no` (aynı) |
| `denetle.py:1231` | ir | KARSIL/sira | `p["f"] <= g < p["t"]` | SESSIZCE_YANLIS | KAPANDI — işlenen yükleyiciden `Tarih` (sıra gün sayısıyla) |
| `denetle.py:1242` | degismez1 | KARSIL/sira | `kur > g` | SESSIZCE_YANLIS | KAPANDI — işlenen yükleyiciden `Tarih` (sıra gün sayısıyla) |
| `denetle.py:1249` | degismez1 | KARSIL/sira | `bit <= g` | SESSIZCE_YANLIS | KAPANDI — işlenen yükleyiciden `Tarih` (sıra gün sayısıyla) |
| `denetle.py:1278` | dok | KARSIL/sira | `p["f"] < t` | SESSIZCE_YANLIS | KAPANDI — işlenen yükleyiciden `Tarih` (sıra gün sayısıyla) |
| `denetle.py:1278` | dok | KARSIL/sira | `p["t"] > f` | SESSIZCE_YANLIS | KAPANDI — işlenen yükleyiciden `Tarih` (sıra gün sayısıyla) |
| `denetle.py:1281` | ir | KARSIL/sira | `p["f"] <= g < p["t"]` | SESSIZCE_YANLIS | KAPANDI — işlenen yükleyiciden `Tarih` (sıra gün sayısıyla) |
| `denetle.py:1290` | degismez1_kapsam | KARSIL/sira | `y["kur"] > g` | SESSIZCE_YANLIS | KAPANDI — işlenen yükleyiciden `Tarih` (sıra gün sayısıyla) |
| `denetle.py:1291` | degismez1_kapsam | KARSIL/sira | `y["bit"] <= g` | SESSIZCE_YANLIS | KAPANDI — işlenen yükleyiciden `Tarih` (sıra gün sayısıyla) |
| `denetle.py:1472` | degismez1b | SIRALA/sort | `araliklar.sort()` | SESSIZCE_YANLIS | KAPANDI — işlenen yükleyiciden `Tarih` (sıra gün sayısıyla) |
| `denetle.py:1475` | degismez1b | DILIM/dilim | `araliklar[1:]` | TARIH_DEGIL | TARİH DEĞİL (tarama) |
| `denetle.py:1476` | degismez1b | KARSIL/sira | `f <= birlesik[-1][1]` | SESSIZCE_YANLIS | KAPANDI — işlenen yükleyiciden `Tarih` (sıra gün sayısıyla) |
| `denetle.py:1477` | degismez1b | SIRALA/max | `max(birlesik[-1][1], t)` | SESSIZCE_YANLIS | KAPANDI — işlenen yükleyiciden `Tarih` (sıra gün sayısıyla) |
| `denetle.py:1484` | degismez1b | KARSIL/sira | `bit <= bas` | SESSIZCE_YANLIS | KAPANDI — işlenen yükleyiciden `Tarih` (sıra gün sayısıyla) |
| `denetle.py:1488` | degismez1b | SIRALA/sort | `bulunan.sort(reverse=True)` | SESSIZCE_YANLIS | KAPANDI — işlenen yükleyiciden `Tarih` (sıra gün sayısıyla) |
| `denetle.py:1950` | degismez2 | KARSIL/esitlik | `tip == "kazanc"` | DOGRU | DEĞİŞMEDİ — eşitlik/`in`: Tarih `==`/hash dizgiyle AYNI |
| `denetle.py:2034` | degismez2 | KARSIL/esitlik | `str(d)[4:] == "-01-01"` | DOGRU | DEĞİŞMEDİ — eşitlik/`in`: Tarih `==`/hash dizgiyle AYNI |
| `denetle.py:2297` | _osmanli_kure | KARSIL/esitlik | `g in _onbellek` | DOGRU | DEĞİŞMEDİ — eşitlik/`in`: Tarih `==`/hash dizgiyle AYNI |
| `denetle.py:2302` | _osmanli_kure | KARSIL/sira | `p["f"] <= g < p["t"]` | SESSIZCE_YANLIS | KAPANDI — işlenen yükleyiciden `Tarih` (sıra gün sayısıyla) |
| `denetle.py:2323` | kapsam_disi | DILIM/dilim | `(g + "-01-01")[:10]` | SESSIZCE_YANLIS | DEĞİŞTİ → negatifte `_gun.dizgi(_gun.gun(g))` (`[:10]` 11 haneyi keserdi) |
| `denetle.py:2329` | kapsam_disi | DILIM/int(dilim) | `int(g[:4])` | COKUYOR | DEĞİŞTİ → `_gun.dizgi(_gun.gun(g) ± n)` |
| `denetle.py:2329` | kapsam_disi | DILIM/int(dilim) | `int(g[5:7])` | COKUYOR | DEĞİŞTİ → `_gun.dizgi(_gun.gun(g) ± n)` |
| `denetle.py:2329` | kapsam_disi | DILIM/int(dilim) | `int(g[8:10])` | COKUYOR | DEĞİŞTİ → `_gun.dizgi(_gun.gun(g) ± n)` |
| `denetle.py:2344` | kapsam_disi | KARSIL/esitlik | `a in ix` | DOGRU | DEĞİŞMEDİ — eşitlik/`in`: Tarih `==`/hash dizgiyle AYNI |
| `denetle.py:2376` | yil_temsili_ayir | KARSIL/esitlik | `str(k[0])[4:] == "-01-01"` | DOGRU | DEĞİŞMEDİ — eşitlik/`in`: Tarih `==`/hash dizgiyle AYNI |
| `denetle.py:2377` | yil_temsili_ayir | KARSIL/esitlik | `str(k[0])[4:] != "-01-01"` | DOGRU | DEĞİŞMEDİ — eşitlik/`in`: Tarih `==`/hash dizgiyle AYNI |
| `denetle.py:2486` | durum | KARSIL/sira | `p["f"] <= g < p["t"]` | SESSIZCE_YANLIS | KAPANDI — işlenen yükleyiciden `Tarih` (sıra gün sayısıyla) |
| `denetle.py:2489` | durum | KARSIL/sira | `p["f"] <= g < p["t"]` | SESSIZCE_YANLIS | KAPANDI — işlenen yükleyiciden `Tarih` (sıra gün sayısıyla) |
| `denetle.py:2492` | durum | KARSIL/sira | `p["f"] <= g < p["t"]` | SESSIZCE_YANLIS | KAPANDI — işlenen yükleyiciden `Tarih` (sıra gün sayısıyla) |
| `denetle.py:2718` | ay | AYRIST/split('-') | `(s or "").split("-")` | DOGRU | DEĞİŞMEDİ — eşitlik/`in`: Tarih `==`/hash dizgiyle AYNI |
| `denetle.py:2955` | degismez4 | KARSIL/esitlik | `K is None` | TARIH_DEGIL | TARİH DEĞİL (tarama) |
| `denetle.py:2990` | degismez4 | KARSIL/esitlik | `kim in K` | DOGRU | DEĞİŞMEDİ — eşitlik/`in`: Tarih `==`/hash dizgiyle AYNI |
| `denetle.py:3047` | degismez4 | KARSIL/sira | `pad(kt) < ATLAS_SONU` | SESSIZCE_YANLIS | KAPANDI — işlenen yükleyiciden `Tarih` (sıra gün sayısıyla) |
| `denetle.py:3057` | degismez4 | KARSIL/sira | `pad(kf) > ATLAS_BASI` | SESSIZCE_YANLIS | KAPANDI — işlenen yükleyiciden `Tarih` (sıra gün sayısıyla) |
| `denetle.py:3161` | degismez5 | SIRALA/sort | `donemler.sort()` | SESSIZCE_YANLIS | KAPANDI — işlenen yükleyiciden `Tarih` (sıra gün sayısıyla) |
| `denetle.py:3191` | degismez5 | KARSIL/sira | `ilk > "%04d-01-01" % (int(VERI_UFKU[0][:4]) + SUPHE_ESIK_YIL)` | SESSIZCE_YANLIS | DEĞİŞTİ → `_gun.yil(_gun.gun(VERI_UFKU[0]))` |
| `denetle.py:3191` | degismez5 | DILIM/int(dilim) | `int(VERI_UFKU[0][:4])` | COKUYOR | DEĞİŞTİ → `_gun.yil(_gun.gun(VERI_UFKU[0]))` |
| `denetle.py:3197` | degismez5 | KARSIL/sira | `ilk <= VERI_UFKU[0][:4] + "-12-31"` | SESSIZCE_YANLIS | DEĞİŞTİ → `_gun.dizgi(_gun.gun_sayisi(yıl, 12, 31))` |
| `denetle.py:3197` | degismez5 | DILIM/dilim | `VERI_UFKU[0][:4]` | SESSIZCE_YANLIS | DEĞİŞTİ → `_gun.dizgi(_gun.gun_sayisi(yıl, 12, 31))` |
| `denetle.py:3204` | degismez5 | SIRALA/sort[key] | `suphe.sort(key=lambda r: r[1])` | SESSIZCE_YANLIS | KAPANDI — işlenen yükleyiciden `Tarih` (sıra gün sayısıyla) |
| `denetle.py:3205` | degismez5 | SIRALA/sort[key] | `kursuz.sort(key=lambda r: (r[4], r[0]))` | SESSIZCE_YANLIS | KAPANDI — işlenen yükleyiciden `Tarih` (sıra gün sayısıyla) |
| `denetle.py:3206` | degismez5 | SIRALA/sort | `muaf.sort()` | SESSIZCE_YANLIS | KAPANDI — işlenen yükleyiciden `Tarih` (sıra gün sayısıyla) |
| `denetle.py:3669` | sahip_dj | KARSIL/sira | `f <= g < t` | SESSIZCE_YANLIS | KAPANDI — işlenen yükleyiciden `Tarih` (sıra gün sayısıyla) |
| `denetle.py:3676` | sahip | KARSIL/sira | `f <= g < t` | SESSIZCE_YANLIS | KAPANDI — işlenen yükleyiciden `Tarih` (sıra gün sayısıyla) |
| `denetle.py:3699` | artir | AYRIST/split('-') | `g.split("-")` | DOGRU | DEĞİŞMEDİ — eşitlik/`in`: Tarih `==`/hash dizgiyle AYNI |
| `denetle.py:3725` | sor | KARSIL/esitlik | `kim(j, f) == s` | DOGRU | DEĞİŞMEDİ — eşitlik/`in`: Tarih `==`/hash dizgiyle AYNI |
| `denetle.py:3730` | sor | KARSIL/sira | `t <= g1` | SESSIZCE_YANLIS | KAPANDI — işlenen yükleyiciden `Tarih` (sıra gün sayısıyla) |
| `denetle.py:3732` | sor | KARSIL/esitlik | `kendi(i, g1) != s` | DOGRU | DEĞİŞMEDİ — eşitlik/`in`: Tarih `==`/hash dizgiyle AYNI |
| `denetle.py:3738` | sor | KARSIL/esitlik | `kim(j, f) != s` | DOGRU | DEĞİŞMEDİ — eşitlik/`in`: Tarih `==`/hash dizgiyle AYNI |
| `denetle.py:3799` | durum | KARSIL/sira | `p["f"] <= g < p["t"]` | SESSIZCE_YANLIS | KAPANDI — işlenen yükleyiciden `Tarih` (sıra gün sayısıyla) |
| `denetle.py:3802` | durum | KARSIL/sira | `p["f"] <= g < p["t"]` | SESSIZCE_YANLIS | KAPANDI — işlenen yükleyiciden `Tarih` (sıra gün sayısıyla) |
| `denetle.py:3805` | durum | KARSIL/sira | `p["f"] <= g < p["t"]` | SESSIZCE_YANLIS | KAPANDI — işlenen yükleyiciden `Tarih` (sıra gün sayısıyla) |
| `denetle.py:4270` | _gun_no | AYRIST/split('-') | `(t + "-01-01").split("-")` | DOGRU | DEĞİŞMEDİ — eşitlik/`in`: Tarih `==`/hash dizgiyle AYNI |
| `denetle.py:4410` | onek_olcutu | SIRALA/sorted[key] | `sorted(O, key=lambda o: o["t"])` | SESSIZCE_YANLIS | KAPANDI — işlenen yükleyiciden `Tarih` (sıra gün sayısıyla) |
| `denetle.py:4429` | onek_olcutu | SIRALA/sorted | `sorted(out, reverse=True)` | SESSIZCE_YANLIS | KAPANDI — işlenen yükleyiciden `Tarih` (sıra gün sayısıyla) |
| `denetle.py:4479` | hassasiyet_dususu | SIRALA/sort | `yakin.sort()` | SESSIZCE_YANLIS | KAPANDI — işlenen yükleyiciden `Tarih` (sıra gün sayısıyla) |
| `denetle.py:4482` | hassasiyet_dususu | DILIM/dilim | `b[:40]` | TARIH_DEGIL | TARİH DEĞİL (tarama) |
| `denetle.py:4529` | mukerrer_maddeler | SIRALA/sorted[key] | `sorted(O, key=lambda o: o["t"])` | SESSIZCE_YANLIS | KAPANDI — işlenen yükleyiciden `Tarih` (sıra gün sayısıyla) |
| `denetle.py:4565` | mukerrer_maddeler | DILIM/dilim | `S[i]["t"][:4]` | SESSIZCE_YANLIS | AÇIK — gösterim: `t[:4]` yıl dilimi (MÖ'de "-299"); sıra değil |
| `denetle.py:4794` | orusuyor | KARSIL/sira | `a["f"] < b["t"]` | SESSIZCE_YANLIS | KAPANDI — işlenen yükleyiciden `Tarih` (sıra gün sayısıyla) |
| `denetle.py:4794` | orusuyor | KARSIL/sira | `b["f"] < a["t"]` | SESSIZCE_YANLIS | KAPANDI — işlenen yükleyiciden `Tarih` (sıra gün sayısıyla) |
| `denetle.py:4809` | donem_sagligi | KARSIL/esitlik | `f == t` | DOGRU | DEĞİŞMEDİ — eşitlik/`in`: Tarih `==`/hash dizgiyle AYNI |
| `denetle.py:4811` | donem_sagligi | KARSIL/sira | `f > t` | SESSIZCE_YANLIS | KAPANDI — işlenen yükleyiciden `Tarih` (sıra gün sayısıyla) |
| `denetle.py:4813` | donem_sagligi | SIRALA/sorted[key] | `sorted((p for p in donemler if p.get("f") and p.get("t")), key=lambda ` | SESSIZCE_YANLIS | KAPANDI — işlenen yükleyiciden `Tarih` (sıra gün sayısıyla) |
| `denetle.py:5160` | _d8_gun_once | AYRIST/fromisoformat | `date.fromisoformat(pad(g))` | COKUYOR | DEĞİŞTİ → `_gun.dizgi(_gun.gun(pad(g)) - 1)` |
| `denetle.py:5174` | _d8_gunler | SIRALA/sorted | `sorted(g for g in gunler if g and g < f_)` | SESSIZCE_YANLIS | KISMEN — D8: üretilmiş gövde (`donemler.js`/`devletler_harita.js`) SARILMADI; UMIT'te D8 ÖLÇÜLEMEDİ |
| `denetle.py:5174` | _d8_gunler | KARSIL/sira | `g < f_` | SESSIZCE_YANLIS | KISMEN — D8: üretilmiş gövde (`donemler.js`/`devletler_harita.js`) SARILMADI; UMIT'te D8 ÖLÇÜLEMEDİ |
| `denetle.py:5175` | _d8_gunler | SIRALA/sorted | `sorted(g for g in gunler if g and g >= f_)` | SESSIZCE_YANLIS | KISMEN — D8 (aynı) |
| `denetle.py:5175` | _d8_gunler | KARSIL/sira | `g >= f_` | SESSIZCE_YANLIS | KISMEN — D8 (aynı) |
| `denetle.py:5342` | _d8_sahip | KARSIL/sira | `(p.get("f") or "0000") <= gun < (p.get("t") or "9999")` | SESSIZCE_YANLIS | KAPANDI — işlenen yükleyiciden `Tarih` (sıra gün sayısıyla) |
| `denetle.py:5345` | _d8_sahip | KARSIL/sira | `(p.get("f") or "0000") <= gun < (p.get("t") or "9999")` | SESSIZCE_YANLIS | KAPANDI — işlenen yükleyiciden `Tarih` (sıra gün sayısıyla) |
| `denetle.py:5348` | _d8_sahip | KARSIL/sira | `(p.get("f") or "0000") <= gun < (p.get("t") or "9999")` | SESSIZCE_YANLIS | KAPANDI — işlenen yükleyiciden `Tarih` (sıra gün sayısıyla) |
| `denetle.py:5411` | agac | KARSIL/esitlik | `k not in _agac` | DOGRU | DEĞİŞMEDİ — eşitlik/`in`: Tarih `==`/hash dizgiyle AYNI |
| `denetle.py:5412` | agac | KARSIL/sira | `a[3] <= gun < a[4]` | SESSIZCE_YANLIS | KISMEN — D8 `_D8Govde.kay` dizgileri sarılmadı ("0000"/"9999" bekçili) |
| `denetle.py:5540` | degismez8 | SIRALA/sorted | `sorted(_dusen + _olcul)` | SESSIZCE_YANLIS | KISMEN — D8 (aynı) |
| `denetle.py:6077` | ic | KARSIL/sira | `(p.get("f") or "0000") <= gun < (p.get("t") or "9999")` | SESSIZCE_YANLIS | KAPANDI — işlenen yükleyiciden `Tarih` (sıra gün sayısıyla) |
| `denetle.py:6106` | zincir_kopya_karsilastir | KARSIL/sira | `f < u < t` | SESSIZCE_YANLIS | YÜKSEK SESLE — `zincir_kaynagi.pencere` `len(u)==10` şartı negatifi BOZUK BEYAN basar |
| `denetle.py:6108` | zincir_kopya_karsilastir | SIRALA/sorted | `sorted(kes)` | SESSIZCE_YANLIS | YÜKSEK SESLE — (aynı) |
| `denetle.py:6110` | zincir_kopya_karsilastir | DILIM/dilim | `kes[1:]` | TARIH_DEGIL | TARİH DEĞİL (tarama) |
| `denetle.py:6182` | zincir_kaynagi_rapor | AYRIST/fromisoformat | `date.fromisoformat(pad(s))` | COKUYOR | DEĞİŞTİ → `_gun.gun(pad(s)) - _gun.gun(pad(b))` |
| `denetle.py:6182` | zincir_kaynagi_rapor | AYRIST/fromisoformat | `date.fromisoformat(pad(b))` | COKUYOR | DEĞİŞTİ → `_gun.gun(pad(s)) - _gun.gun(pad(b))` |
| `denetle.py:6290` | _rotus_sinir_gunleri | SIRALA/sorted | `sorted({f} \| {df for df, dt in uclar if f < df < t})` | SESSIZCE_YANLIS | KISMEN — rötuş kaydı (`rotus_coz.js` çıktısı) sarılmadı; karşı uç yerleşimden Tarih |
| `denetle.py:6290` | _rotus_sinir_gunleri | KARSIL/sira | `f < df < t` | SESSIZCE_YANLIS | KISMEN — rötuş kaydı (`rotus_coz.js` çıktısı) sarılmadı; karşı uç yerleşimden Tarih |
| `denetle.py:6352` | degismez_r | KARSIL/esitlik | `f not in bas` | DOGRU | DEĞİŞMEDİ — eşitlik/`in`: Tarih `==`/hash dizgiyle AYNI |
| `denetle.py:6355` | degismez_r | KARSIL/esitlik | `t not in son` | DOGRU | DEĞİŞMEDİ — eşitlik/`in`: Tarih `==`/hash dizgiyle AYNI |
| `denetle.py:6420` | degismez_r | KARSIL/sira | `df < t` | SESSIZCE_YANLIS | KISMEN — rötuş (aynı) |
| `denetle.py:6420` | degismez_r | KARSIL/sira | `f < dt` | SESSIZCE_YANLIS | KISMEN — rötuş (aynı) |
| `denetle.py:6420` | degismez_r | KARSIL/esitlik | `sahip != k["kime"]` | DOGRU | KISMEN — rötuş (aynı) |
| `denetle.py:6422` | degismez_r | SIRALA/max | `max(df, f)` | SESSIZCE_YANLIS | KISMEN — rötuş (aynı) |
| `denetle.py:6422` | degismez_r | SIRALA/min | `min(dt, t)` | SESSIZCE_YANLIS | KISMEN — rötuş (aynı) |
| `denetle.py:6431` | degismez_r | KARSIL/sira | `hf <= t` | SESSIZCE_YANLIS | KISMEN — rötuş (aynı) |
| `denetle.py:6431` | degismez_r | KARSIL/sira | `f <= ht` | SESSIZCE_YANLIS | KISMEN — rötuş (aynı) |
| `denetle.py:6442` | degismez_r | KARSIL/sira | `a["f"] < b["t"]` | SESSIZCE_YANLIS | KISMEN — rötuş ↔ rötuş: İKİSİ DE düz ⇒ AÇIK |
| `denetle.py:6442` | degismez_r | KARSIL/sira | `b["f"] < a["t"]` | SESSIZCE_YANLIS | KISMEN — rötuş ↔ rötuş: İKİSİ DE düz ⇒ AÇIK |
| `denetle.py:6586` | main | KARSIL/esitlik | `(b[1], b[2], b[3]) not in BEYAN_EDILEN_BOSLUK` | DOGRU | DEĞİŞMEDİ — eşitlik/`in`: Tarih `==`/hash dizgiyle AYNI |
| `denetle.py:6588` | main | KARSIL/esitlik | `(b[1], b[2], b[3]) in BEYAN_EDILEN_BOSLUK` | DOGRU | DEĞİŞMEDİ — eşitlik/`in`: Tarih `==`/hash dizgiyle AYNI |
| `denetle.py:6600` | main | SIRALA/sorted | `sorted(BEYAN_EDILEN_BOSLUK)` | SESSIZCE_YANLIS | SABİT — `BEYAN_EDILEN_BOSLUK` kod içi liste |
| `denetle.py:6601` | main | KARSIL/esitlik | `ad + " " + bas not in _kalan` | DOGRU | DEĞİŞMEDİ — eşitlik/`in`: Tarih `==`/hash dizgiyle AYNI |
| `denetle.py:6605` | main | DILIM/dilim | `_beyanli[:5]` | TARIH_DEGIL | TARİH DEĞİL (tarama) |
| `denetle.py:6607` | main | DILIM/dilim | `bosluk[:15]` | TARIH_DEGIL | TARİH DEĞİL (tarama) |
| `denetle.py:6718` | main | DILIM/dilim | `sorted(disi_s, key=lambda x: -x[5])[:10]` | SESSIZCE_YANLIS | TARİH DEĞİL — liste dilimi |
| `denetle.py:6718` | main | SIRALA/sorted[key] | `sorted(disi_s, key=lambda x: -x[5])` | TARIH_DEGIL | TARİH DEĞİL — liste dilimi |
| `denetle.py:6719` | main | DILIM/dilim | `r[2][:2]` | TARIH_DEGIL | TARİH DEĞİL (tarama) |
| `denetle.py:6729` | main | DILIM/dilim | `acik_i[:5]` | TARIH_DEGIL | TARİH DEĞİL (tarama) |
| `denetle.py:6730` | main | DILIM/dilim | `adlar[:3]` | TARIH_DEGIL | TARİH DEĞİL (tarama) |
| `denetle.py:6731` | main | DILIM/dilim | `baslik[:34]` | TARIH_DEGIL | TARİH DEĞİL (tarama) |
| `denetle.py:6736` | main | DILIM/dilim | `sorted(acik_s, key=lambda r: -len(r[2]))[:8]` | TARIH_DEGIL | TARİH DEĞİL (tarama) |
| `denetle.py:6736` | main | SIRALA/sorted[key] | `sorted(acik_s, key=lambda r: -len(r[2]))` | TARIH_DEGIL | TARİH DEĞİL (tarama) |
| `denetle.py:6737` | main | DILIM/dilim | `adlar[:3]` | TARIH_DEGIL | TARİH DEĞİL (tarama) |
| `denetle.py:6738` | main | DILIM/dilim | `baslik[:38]` | TARIH_DEGIL | TARİH DEĞİL (tarama) |
| `denetle.py:6822` | main | KARSIL/esitlik | `gercek_kd == 0` | DOGRU | DEĞİŞMEDİ — eşitlik/`in`: Tarih `==`/hash dizgiyle AYNI |
| `denetle.py:6853` | main | DILIM/dilim | `hayalet[:12]` | TARIH_DEGIL | TARİH DEĞİL (tarama) |
| `denetle.py:6878` | main | SIRALA/max | `max(d[1], _yil)` | SESSIZCE_YANLIS | TARİH DEĞİL — `_yil` float yıl farkı (yanlış pozitif) |
| `denetle.py:6920` | main | SIRALA/max | `max(d[1], _yil)` | SESSIZCE_YANLIS | TARİH DEĞİL — (aynı) |
| `denetle.py:7013` | main | DILIM/dilim | `muaf5[:6]` | TARIH_DEGIL | TARİH DEĞİL (tarama) |
| `denetle.py:7015` | main | DILIM/dilim | `beyan[:60]` | TARIH_DEGIL | TARİH DEĞİL (tarama) |
| `denetle.py:7016` | main | DILIM/dilim | `celiski[:12]` | TARIH_DEGIL | TARİH DEĞİL (tarama) |
| `denetle.py:7028` | main | DILIM/dilim | `suphe[:10]` | SESSIZCE_YANLIS | TARİH DEĞİL — liste dilimi |
| `denetle.py:7170` | main | KARSIL/esitlik | `r[4] == "başlık"` | DOGRU | DEĞİŞMEDİ — eşitlik/`in`: Tarih `==`/hash dizgiyle AYNI |
| `denetle.py:7221` | main | DILIM/dilim | `mk[:20]` | TARIH_DEGIL | TARİH DEĞİL (tarama) |
| `denetle.py:7243` | main | DILIM/dilim | `onek[:6]` | TARIH_DEGIL | TARİH DEĞİL (tarama) |
| `denetle.py:7244` | main | DILIM/dilim | `b1[:44]` | TARIH_DEGIL | TARİH DEĞİL (tarama) |
| `denetle.py:7245` | main | DILIM/dilim | `b2[:44]` | TARIH_DEGIL | TARİH DEĞİL (tarama) |
| `denetle.py:7283` | main | SIRALA/sorted[key] | `sorted(ayk, key=lambda r: -abs(r[3]))` | TARIH_DEGIL | TARİH DEĞİL (tarama) |
| `denetle.py:7284` | main | DILIM/dilim | `ad[:30]` | TARIH_DEGIL | TARİH DEĞİL (tarama) |
| `denetle.py:7284` | main | DILIM/dilim | `b[:34]` | TARIH_DEGIL | TARİH DEĞİL (tarama) |
| `denetle.py:7293` | main | SIRALA/sorted[key] | `sorted(dusen, key=lambda r: -abs(r[4]))` | TARIH_DEGIL | TARİH DEĞİL (tarama) |
| `renk_olc.py:389` | ayni_anahtar | SIRALA/sorted[key] | `sorted(kayitlar, key=lambda x: x["f"])` | SESSIZCE_YANLIS | KAPANDI — işlenen yükleyiciden `Tarih` (sıra gün sayısıyla) |
| `renk_olc.py:390` | ayni_anahtar | KARSIL/sira | `a["f"] < b["t"]` | SESSIZCE_YANLIS | KAPANDI — işlenen yükleyiciden `Tarih` (sıra gün sayısıyla) |
| `renk_olc.py:390` | ayni_anahtar | KARSIL/sira | `b["f"] < a["t"]` | SESSIZCE_YANLIS | KAPANDI — işlenen yükleyiciden `Tarih` (sıra gün sayısıyla) |
| `renk_olc.py:442` | ayni_hex | SIRALA/min | `min(eski[0], f)` | SESSIZCE_YANLIS | KAPANDI — işlenen yükleyiciden `Tarih` (sıra gün sayısıyla) |
| `renk_olc.py:442` | ayni_hex | SIRALA/max | `max(eski[1], t)` | SESSIZCE_YANLIS | KAPANDI — işlenen yükleyiciden `Tarih` (sıra gün sayısıyla) |
| `renk_olc.py:536` | yakin_renk | SIRALA/min | `min(e[0], f)` | SESSIZCE_YANLIS | KAPANDI — işlenen yükleyiciden `Tarih` (sıra gün sayısıyla) |
| `renk_olc.py:536` | yakin_renk | SIRALA/max | `max(e[1], t)` | SESSIZCE_YANLIS | KAPANDI — işlenen yükleyiciden `Tarih` (sıra gün sayısıyla) |
| `renk_olc.py:545` | yakin_renk | SIRALA/min | `min(dv["f"], e[0])` | SESSIZCE_YANLIS | KAPANDI — işlenen yükleyiciden `Tarih` (sıra gün sayısıyla) |
| `renk_olc.py:545` | yakin_renk | SIRALA/max | `max(dv["t"], e[1])` | SESSIZCE_YANLIS | KAPANDI — işlenen yükleyiciden `Tarih` (sıra gün sayısıyla) |
| `renk_olc.py:621` | _cie_evreni | SIRALA/min | `min(e[0], f)` | SESSIZCE_YANLIS | KAPANDI — işlenen yükleyiciden `Tarih` (sıra gün sayısıyla) |
| `renk_olc.py:621` | _cie_evreni | SIRALA/max | `max(e[1], t)` | SESSIZCE_YANLIS | KAPANDI — işlenen yükleyiciden `Tarih` (sıra gün sayısıyla) |
| `renk_olc.py:629` | _cie_evreni | SIRALA/min | `min(dv["f"], e[0])` | SESSIZCE_YANLIS | KAPANDI — işlenen yükleyiciden `Tarih` (sıra gün sayısıyla) |
| `renk_olc.py:629` | _cie_evreni | SIRALA/max | `max(dv["t"], e[1])` | SESSIZCE_YANLIS | KAPANDI — işlenen yükleyiciden `Tarih` (sıra gün sayısıyla) |
| `renk_olc.py:885` | denetle | SIRALA/max | `max(a["f"], b["f"])` | SESSIZCE_YANLIS | KAPANDI — işlenen yükleyiciden `Tarih` (sıra gün sayısıyla) |
| `renk_olc.py:885` | denetle | SIRALA/min | `min(a["t"], b["t"])` | SESSIZCE_YANLIS | KAPANDI — işlenen yükleyiciden `Tarih` (sıra gün sayısıyla) |
| `renk_olc.py:1002` | engel_kumesi | SIRALA/min | `min(e[0], f)` | SESSIZCE_YANLIS | KAPANDI — işlenen yükleyiciden `Tarih` (sıra gün sayısıyla) |
| `renk_olc.py:1002` | engel_kumesi | SIRALA/max | `max(e[1], t)` | SESSIZCE_YANLIS | KAPANDI — işlenen yükleyiciden `Tarih` (sıra gün sayısıyla) |
| `renk_olc.py:1013` | engel_kumesi | SIRALA/min | `min(dv["f"], e[0])` | SESSIZCE_YANLIS | KAPANDI — işlenen yükleyiciden `Tarih` (sıra gün sayısıyla) |
| `renk_olc.py:1013` | engel_kumesi | SIRALA/max | `max(dv["t"], e[1])` | SESSIZCE_YANLIS | KAPANDI — işlenen yükleyiciden `Tarih` (sıra gün sayısıyla) |

Özet: AÇIK 1 · DEĞİŞMEDİ 24 · DEĞİŞTİ 14 · KAPANDI 62 · KISMEN 17 · SABİT 1 · TARİH 31 · YÜKSEK 2

---

## NEDEN SINIR, NEDEN SİTE SİTE DEĞİL — tasarımdan sapma, gerekçesiyle
`GUN-SAYACI-TASARIM-1009 §②` paralel int alanları (`fg/tg`) + 59 motor sitesinin elle çevrilmesini öneriyordu (C3).
Bu yama aynı sözleşmeyi (sıra = gün sayısı, dizgi alanı değişmez, geçersiz tarih fırlatır) **alt sınıfla** kuruyor:
| ölçüt | paralel alan (tasarım) | `Tarih(str)` (bu yama) |
|---|---|---|
| tuz dosyalarında değişen satır | ~59 motor sitesi + yükleyici | `girdi.py` +23 · `uret_petek.py` +4/−2 |
| bekleyen motor yamalarıyla çatışma | 59 sitenin bir kısmı C3'ün işlevlerinde | **yok** — üç sırada da temiz (aşağıda) |
| taramanın KAÇIRDIĞI site | düz dizgi kıyasında kalır, sessiz | işlenen yükleyiciden geliyorsa yine sayıyla |
| kör nokta | taşınmamış site | **iki DÜZ dizgi** arası kıyas (sarılmamış kaynak) — envanterde ADIYLA: motor 1, araç 17+1 |
| maliyet | int kıyas | Python düzeyinde işleç: ölçüldü `Tarih<Tarih` **0,79 µs** · `"lit"<=Tarih` **0,52 µs** · düz `str<str` **0,04 µs** (1M kıyas) |
⚠️ **Motor süresine etkisi ÖLÇÜLMEDİ** (motor koşturulmaz). Kaba üst sınır: kıyas sayısı × ~0,7 µs; 10⁸ kıyas ≈ 70 sn,
10⁹ ≈ 12 dk (7-8 saatlik tam inşada). `denetle.py` (aynı yükleyici, yüzlerce bin kıyas) önce **160 sn** · sonra **133 sn** —
fark ölçüm gürültüsü içinde. Tam inşada log süresi önceki koşuyla kıyaslanmalı (HAVVA).
📌 Bu bir koordinatör kararıdır: C3 yine paralel alanla yapılmak istenirse bu yama araç/ayrıştırma kısmıyla
(denetle + KESIT_SON) tek başına da işler; `Tarih` sarması geri alınabilir, `gun.py`deki sınıf tüketicisiz kalır.

## SINAV — `denetim/ARAC-NEGATIF-YIL-B-SINAV-1010.py` · **67/67** (çıkış 0)
| bölüm | iki yön | sonuç |
|---|---|---|
| ③ ayrıştırma | ESKİ `fromisoformat("-2999-01-01")` / `("0000-01-01")` **ValueError** · `int("-2999"[0:4])` = **−299** (öter) · YENİ: MÖ 3000 · MÖ 1200 · MÖ 500 · MÖ 2 · **0 (=MÖ 1)** · MS 1 · 1000 · 1281 · 1923 · 1945 hepsi okunur, gidiş-dönüş aynı · `yil_yazi`: −2999↔"MÖ 3000", 0↔"MÖ 1", 1↔"1" | ✓ |
| ③ bozuk | `""` · `1453/05/29` · `1923-13-01` · `1281-02-30` · `-2999-02-30` · `1453-5-1` · `abc` · `-3000-1-1` · `1453-05-29T00:00` · None · int → **FIRLATIR**; `tarihle()` alan adıyla | ✓ |
| ④ sıra | ESKİ: `"-2999" < "-0001"` False · `sorted(dizgi)` YANLIŞ (öter) · YENİ: `sorted/min/max` gün sırası · 100 çift × 4 işleç tam tablo 0 hata · `Tarih↔düz dizgi` iki yönde · aynı gün farklı hassasiyet (`"1526-08" < "1526-08-01"` sözlükle aynı) · `""`/`"~"` bekçileri sözlüğe düşer · `"9999"` üst bekçi · `==`/hash/küme · JSON + pickle | ✓ |
| ⓪ geriye uyum | bugünkü verinin **3.462 ayrık tarihi**: yükleyici hepsini sardı · `sorted(Tarih)` == `sorted(dizgi)` · **200.000 rastgele çift** Tarih kıyası == sözlük kıyası (0 fark) · UFUK/VERI_UFKU değeri aynı | ✓ |
| Ⓜ motor (GERÇEK metin, AST'ten çıkarılıp çalıştırıldı) | `KESIT_SON` ataması tek, `fromisoformat` yok; ufuk sonu 1945-09-02 → **1945-09-05** (aynı) · −2999-12-30 → −2998-01-02 · −0001-12-30 → **0000-01-02** (YIL 0) · ESKİ ifade MÖ'de ValueError · kırılma bloğu (`sorted(t … EPOK <= t <= KESIT_SON)` + iki uç): düz dizgiyle YANLIŞ sıra, `Tarih`le doğru · `_alan_g(MÖ 2001)`: düz → `(None, None)` (öter), `Tarih` → dönem 1 | ✓ |
| Ⓖ girdi | `kd_gun` gerçek işlev: MÖ 2001 → `(2,'Ur')`, MÖ 1000 → `(0,None)`; sarılmamışta dönemi BULAMAZ (öter) · bozuk tarih reddi | ✓ |
| Ⓓ denetle | `gun_no` negatif = gün+719163 · bugünkü biçimlerde `date().toordinal()` ile aynı (`1453-05-29` · `1453-05` · `330-05-11`) · bozukta fırlatır · `_gun_farki` MÖ = −1.563.239 (None değil) · gevşek `1453-5` eski yolla aynı · `_gun_no('-0499')` · `_d8_gun_once`: −2999-01-01 → −3000-12-31, 0001-01-01 → **0000-12-31** · bozukta None · madde `t` sarıldı, okunamayan 0 | ✓ |
| Ⓔ envanter kapısı (AST, takma ad dahil: `from datetime import date as _d`) | yamalı **0** izinsiz · İZİN listesi CANLI (ölü istisna yok, `§3.4-5`) · `--envanter <yamasız ağaç>` → **6 izinsiz, çıkış 1** (öter) | ✓ |
**Sınavın sınavı (mutasyon, geri alındı, `cmp` aynı):** ① `Tarih.__lt__` sözlüğe döndürüldü → **çıkış 1**, 8 soru ✗
(sorted, min/max, çift tablosu, motor kırılma, `_alan_g`, `kd_gun`…) ② `tarihle()` boşa çıkarıldı → **çıkış 1**, 3 ✗
(`yükleyici sardı 0/3462` dahil).

## DENETLE ÖNCE / SONRA — `PYTHONHASHSEED=0 py arac/denetle.py --ayrinti`
| | önce (`f0b6fd50` + yalnız `gun.py`'ye eklenmiş TÜKETİCİSİZ sınıf) | sonra (tam yama) |
|---|---|---|
| çıkış | 2 (D8 ÖLÇÜLEMEDİ: `devletler_harita.js` yok — UMIT'te beklenen) | 2 (aynı) |
| çıktı | 12.271 satır | **`cmp` BİREBİR** (iki kez: ⓷ yamasından sonra ve `[:4]` düzeltmesinden sonra) |
| `renk_olc.py` | çıkış 0 | çıkış 0 · **BİREBİR** (temiz ikinci worktree `f0b6fd50` ile) |
| `odak_olc.py` | çıkış 0 | çıkış 0 · **BİREBİR** |
⚠️ D8 burada ÖLÇÜLEMEDİ ⇒ D8 yolundaki iki değişiklik (`_d8_gun_once`, `_D8Govde` dokunulmadı) gövdeli bir makinede
(HAVVA/LAB) önce/sonra karşılaştırılmalı. `_d8_gun_once` değişikliği sınavda birim düzeyinde sınandı.

## BEKLEYEN MOTOR YAMALARIYLA UYUM — temiz ağaç `b3fd8874` (güncel `origin/main`)
| sıra | sonuç |
|---|---|
| NEG tek başına `apply --check` | ✓ (`f0b6fd50`'da da ✓) |
| C3-YURUYUS → TUZ-DORT → NEG | ✓ temiz |
| NEG → C3 → TUZ | ✓ temiz |
| TUZ → NEG → C3 | ✓ temiz |
| TUZ+NEG üstünde `ARAC-C3-YURUYUS-SUZGEC-SINAV-1009.py --hiz` | **187 ✓ · 0 ✗**, çıkış 0 |
| TUZ+NEG üstünde `ARAC-NEGATIF-YIL-B-SINAV-1010.py` | 67/67 |
| TUZ tek başına `ARAC-TUZ-DORT-DOSYA-SINAV-1010.py` | 24/24 |
| 🔴 TUZ+NEG üstünde aynı TUZ sınavı | **2/13 ✗ — (b)(c)(d) ÖLÇÜLEMEDİ**: sınav motor dosyalarını geçici dizine kopyalıyor, `gun.py` yok ⇒ `girdi.py:47 import gun` → `ModuleNotFoundError`. Metin uyumu temiz, **anlam uyumu değil**: `gun.py` tuza girmeli (③) |

---

## ① ÖLÇTÜM
- Envanter: motor **77** site (sıra/kıyas 50 → KAPANDI 50 · AÇIK 2 · eşitlik 13 · tarih değil 11 · ayrıştırma 1 değişti);
  araç **152** site (KAPANDI 62 · DEĞİŞTİ 14 · KISMEN 17 · YÜKSEK SESLE 2 · AÇIK 1 · değişmedi 24 · tarih değil 31 · sabit 1).
- Ayrıştırma: veri okuyan `fromisoformat`/`date()` **8 → 0** (+ `motor_esitlik` metni + 3 `[:4]` sitesi); damga okuyan 11 dokunulmadı.
- Bugünkü veri: 3.462 ayrık tarih, 35.098 yerleşim dönem ucu sarıldı, okunamayan **0**, madde `t` okunamayan **0**.
- `denetle --ayrinti` · `renk_olc` · `odak_olc`: önce/sonra **BİREBİR**. Sınav **67/67**, iki mutasyonda öter.
- Uyum: üç sırada `apply` temiz; C3 sınavı 187/0; TUZ sınavı birlikte 2/13 ölçülemedi (`gun.py` tuzda değil).
- Kıyas maliyeti: `Tarih` ~0,5-0,8 µs/kıyas vs düz 0,04 µs.

## ② BULAMADIM / ÖLÇMEDİM
- **Motorun gerçek davranışı ve süresi** — motor koşturulmadı (yasak). Çıktının bayt eşitliği C3 tam inşasında `motor_esitlik.py`
  ile önceki koşuya karşı ölçülmeli; MÖ verisi yokken AYNI beklenir (⓪ sınavı: bugünkü 3.462 tarihte sıra birebir).
- **D8 önce/sonra** — UMIT'te `devletler_harita.js` yok, D8 ÖLÇÜLEMEDİ.
- **Sarılmayan kaynaklar** (düz dizgi ↔ düz dizgi kıyası negatifte TERS kalır, envanterde ADIYLA): D8'in okuduğu üretilmiş
  gövde (`donemler.js`/`devletler_harita.js`, `_D8Govde.kay`) · rötuş kayıtları (`rotus_coz.js` çıktısı;
  `degismez_r` `:6442` rötuş↔rötuş) · `uret_petek.py:8426` teşhis satırı (`OLCU_KESIT` ↔ f-dizgi dilimi). Hepsi bugün 0 negatif.
- **Gösterim dilimleri** (`t[:4]`, `[:10]`): `denetle.py:4565`, `:1311`, `uret_petek.py:8426` — MÖ'de "-299" basar. Sıra değil
  gösterim (tasarımda C2/"yalnız gösterim" sınıfı); `yil_yazi` ile çevrilmesi 0xxx dolgulu metni değiştirir, dokunmadım.
- AST kapısı **dizgi içindeki kodu** (`motor_esitlik.SENARYO_KANCA`) göremez — o site elle bulundu ve değişti.
- Taint taraması `kirilma_disi`, `degismez1` gibi sitelerde köken analizini AST'le değil yükleyiciye göre yaptım (araç
  tarafı); motor tarafında her işlenen elle izlendi.

## ③ İSTİYORUM / ÖNERİYORUM
1. 🔴 **`gun.py` motor tuzuna** (koordinatör + TUZ-DORT sahibi): `MOTOR_IZ_DOSYALARI`'na `gun.py` eklenmeli — `Tarih`in sıra
   anlamı motor çıktısını belirliyor; eklenmezse `gun.py` değişince önbellek bayatlamaz ve `motor_izi_dogrula` koşu
   sırasındaki değişikliği görmez. Bu TUZ sınavının `c3` (= "dört motor dosyası") ölçütünü ve `CLAUDE.md §9.1`
   "dört dosya" cümlesini **beşe** çıkarır ⇒ **aynı motor partisinde, aynı commit'te** (`§3.4-2`). Yamamda bu satır YOK
   (başka oturumun dosyası).
2. Motor partisi sırası: üç yama da birbirinden bağımsız uygulanıyor; önerim **TUZ → NEG → C3** + (1)'deki tek satır.
3. Tasarım kararı (koordinatör): C3 için `Tarih` sınırı mı, paralel `fg/tg` alanları mı — yukarıdaki tablo. Bu yama
   ilkini kuruyor; ikincisi seçilirse `Tarih` sarması geri alınır, ayrıştırma düzeltmeleri kalır.
4. Sarılmayan iki araç kaynağı (D8 gövdesi, rötuş) için aynı `_gun.tarihle` deseni — D8'i ölçebilen makinede (HAVVA/LAB),
   önce/sonra ile. UMIT'te ölçemediğim için yazmadım.
5. Kardeş kol A'ya: Python tarafında `gun.py`nin ilk TÜKETİCİLERİ artık var (engel ④ Python yarısı): `girdi`, `uret_petek`,
   `denetle`, `motor_esitlik`.

## YENİ DOSYALAR:
- `C:\atlas-umit\denetim\NEGATIF-YIL-1010-B.diff` — 6 dosya (5 değişen `arac/` + 1 yeni sınav), LF, BOM yok, CR 0;
  `f0b6fd50` ve `b3fd8874` temiz ağaçlarda `apply --check` ✓
- `C:\atlas-umit\denetim\ARAC-NEGATIF-YIL-B-SINAV-1010.py` — sınav (diff'in içindekinin kopyası)
- `C:\atlas-umit\denetim\NEGATIF-YIL-1010-B.md` — bu rapor
Değişen (yalnız diff içinde): `arac/gun.py` (+110) · `arac/girdi.py` (+23) · `arac/uret_petek.py` (+4/−2) ·
`arac/denetle.py` (+51/−17) · `arac/motor_esitlik.py` (+2/−1).
