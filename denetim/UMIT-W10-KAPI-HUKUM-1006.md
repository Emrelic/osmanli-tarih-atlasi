# UMIT-W10-KAPI-HUKUM-1006 — `URETIM_IZI.kapi` B kuyruğu metni, koordinatör hükmüne göre

**Hüküm (koordinatör):** KOŞU BAŞINDA ilansız → **DURDUR** (orada bedava). KOŞU İÇİNDE / ÇIKTIDA
ilansız → yalnız **DAMGALA** (orada durdurmak yıkıcı).
Bu, `UMIT-W10-LEGO-1006f.md §3`teki metni değiştirir. O metin "ilansız koşu durdurulmasın" diyordu.
`uret_petek.py` TUZDADIR ⇒ yalnız metin, diff YOK. Satır numaraları `origin/main 4487df9a`.

## 1. Nereye — ölçülen yerler
- `:121-130` kilit: `import kosu_kilit` → `_ISCI_NO = os.environ.get("MOTOR_SUREC_ISCI_NO")` (`:126`) →
  yalnız ana süreç `_KILIT.al("petek")`, alamazsa `sys.exit(1)`.
- `:271` `import girdi` · `:515-529` işçi süreçler başlatılır (`Popen`) · `:554` `_GIRDI_IZI` · `:560` `_MOTOR_IZI`.
- ⇒ **Durdurma noktası: `:271`ten hemen sonra, yalnız `_ISCI_NO is None` iken.** Kilit alınmış, işçi
  başlatılmamış, ağır iş başlamamış: durdurmanın bedeli birkaç saniye. `girdi.motor_izi()` burada
  çağrılabilir (yalnız üç dosyanın sha256'sı). İşçiler bu kontrolü YAPMAZ: ilan ana sürecindir, işçi
  ilandan sonra doğar.

## 2. Metin — KOŞU BAŞI (durdurur)
```python
# :271 `import girdi`den hemen sonra
# 🚪 KOŞU KAPISI — koşu BAŞINDA ilansız ⇒ DUR (koordinatör hükmü, 6 Ekim 2026).
#    `kaynak_durum.py kapat --kod KOSU --kapi-kok <bu ağaç>` bu dosyayı yazar.
#    Burada durmak BEDAVA (kilit alındı, işçi yok, hesap yok); içeride durmak yıkıcı.
_KOSU_KAPI_YOL = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))),
                              "oturumlar", "KOSU-KAPI.json")
_KOSU_KAPI = {"durum": "YOK"}
if _ISCI_NO is None:
    _kk_red = None
    try:
        _kk = json.load(io.open(_KOSU_KAPI_YOL, encoding="utf-8"))
    except (OSError, ValueError) as _e:
        _kk, _kk_red = None, "ilan dosyası yok/okunamadı (%s)" % _e
    if _kk is not None:
        _kk_head = subprocess.run(["git", "-C", os.path.dirname(os.path.dirname(_KOSU_KAPI_YOL)),
                                   "rev-parse", "HEAD"], capture_output=True, text=True).stdout.strip()
        if _kk.get("kapi") not in ("GECTI", "ATLANDI"):
            _kk_red = "ilanın kapı hâli %r" % _kk.get("kapi")
        elif _kk.get("motor") != girdi.motor_izi():
            _kk_red = "ilan BAŞKA bir motor için yapılmış (motor izi uyuşmuyor)"
        elif _kk.get("git_head") and _kk_head and _kk.get("git_head") != _kk_head:
            _kk_red = "ilan BAŞKA bir commit için yapılmış (%s ≠ %s) — bayat ilan" % (
                str(_kk.get("git_head"))[:8], _kk_head[:8])
    if _kk_red:
        print("🔴 KOŞU BAŞLAMADI — KOŞU KAPISI: " + _kk_red)
        print("   Önce: py arac/kaynak_durum.py kapat --kod KOSU --kapi-kok %s"
              % os.path.dirname(os.path.dirname(_KOSU_KAPI_YOL)))
        sys.exit(4)
    _KOSU_KAPI = {"durum": _kk["kapi"], "ilan": _kk.get("ilan"),
                  "atlama_gerekce": _kk.get("atlama_gerekce"), "git_head": _kk.get("git_head")}
    print("  🚪 KOŞU KAPISI: %s · ilan %s" % (_KOSU_KAPI["durum"], _KOSU_KAPI["ilan"]))
```
- **Neden `git_head` de soruluyor (yeni, 1006f'de yoktu):** koşu worktree'si yeniden kullanılıyor
  (`C:\atlas-kosu`). `oturumlar/KOSU-KAPI.json` izlenmeyen bir dosya; checkout'tan sonra da yerinde kalır.
  Veri koşusunda motor DONDURULDUĞU için (§9.1) bir önceki koşunun ilanı motor izi testini GEÇER.
  `git_head` (1006f'de damgaya zaten yazılıyor) yeni `git pull` sonrası farklıdır ⇒ bayat ilan durur.
  Aynı commit'te yeniden koşu geçer; kod ve veri aynıysa kapının hükmü de aynıdır.
- `subprocess` `uret_petek.py`de bugün yalnız `:519` bloğunda yerel olarak ithal ediliyor. Metin modül
  düzeyinde `import subprocess` ister (tuz zaten değişiyor).
- Çıkış **4**: `sys.exit(1)` kilit için alınmış; ayrı kod, ayrı teşhis.

## 3. Metin — KOŞU İÇİ / ÇIKTI (yalnız damgalar)
```python
# :5768 · :7816 · :8014 · :8034 — DÖRDÜ DE:
    + json.dumps({"girdi": _GIRDI_IZI, "motor": _MOTOR_IZI, "kapi": _kapi_damga()},
                 separators=(",", ":"), sort_keys=True).replace(";", "\\u003b") + ";\n")

def _kapi_damga():
    """Başta okunan ilan + ÇIKTI ANINDA dosyanın hâli. ASLA durdurmaz."""
    d = dict(_KOSU_KAPI)
    try:
        _son = json.load(io.open(_KOSU_KAPI_YOL, encoding="utf-8"))
        d["sonda"] = "AYNI" if (_son.get("ilan"), _son.get("kapi")) == (d.get("ilan"), d.get("durum")) else "DEGISTI"
    except (OSError, ValueError):
        d["sonda"] = "YOK"          # koşu sürerken ilan silinmiş/bozulmuş — damgala, DURMA
    return d
```
- Koşu içinde ilan silinir ya da değişirse (biri `kapat`ı yeniden koşturdu, dosya elle silindi) motor
  DURMAZ; çıktının damgası `"sonda":"YOK"` ya da `"DEGISTI"` taşır. Sonradan ölçülebilir, yıkıcı değil.
- `.replace(";", "\\u003b")`: `denetle_yayin.py:189/:284` regex'i (`\{.*?\}\s*;`) atlama gerekçesi
  içindeki `};`'de kırılmasın diye (1006f §3).
- 🔴 `_kapi_damga()` işçi süreçte çağrılmaz (işçi çıktı yazmaz, `:123-125`). Dört çağrı da ana süreçtedir.

## 4. Açık soru — hüküm koordinatörde
**Koşu başı durdurma, ELLE SINAMA koşularını da durdurur.** Yazıcı oturumların küçük kutu/dar dilimle
koştuğu `uret_petek.py` çağrıları (motor yaması sınaması) artık ilan ister. İlanın bugünkü TEK yolu
`kaynak_durum.py kapat --kod KOSU`: bu, **makinenin bütün bekçilerine yasak** koyar. Bir sınama koşusu için
bekçileri düşürmek orantısız.
Seçenekler:
- (a) `kaynak_durum.py`ye bekçi yasağı KOYMAYAN bir alt emir: `kapi --kapi-kok <ağaç>`. Aynı kapıyı koşturur,
  aynı `KOSU-KAPI.json`u yazar (`"kod":"SINAMA"`), `KAYNAK-DURUM.json`a dokunmaz. Tuz dışı, küçük diff;
  istenirse ben yazarım.
- (b) Motor tarafında tuz DIŞI bir ortam değişkeni (`MOTOR_` öneki OLMAYAN, ör. `KOSU_KAPI_SINAMA=<gerekçe>`)
  ile durdurmayı atlayıp `"durum":"SINAMA"` damgalamak. `MOTOR_` öneki olmadığı için tuza ve ENV kapısına girmez.
  Ama bu, motorun içinde ikinci bir kaçış kapısı açar.
- Önerim **(a)**: kaçış tek yerde (kaynak_durum) kalır, motor tek soru sorar ("ilan var mı").

## 5. Bulunamadı / ölçülmedi
- Metin koşturulmadı (tuz). `"kapi"` alanının `denetle_yayin`/`denetle` ayrıştırmasını bozmadığı tam inşa
  koşusunda sınanmalı.
- Okunarak ölçüldü (koşturulmadı): `kos_ve_yayinla.py:96-101` `kos()` sıfır olmayan çıkışta "ZİNCİR DURDU,
  YAYIN YAPILMADI" basıp `None` döner; üretim adımı (`:263`) varsayılan `olumcul=True` ile çağrılır ⇒
  `sys.exit(4)` zinciri yayından önce durdurur.
- `KOSU-DEVIR-CEVRIMI.md:50` (UMIT/HAVVA): koordinatör düzeltiyor, dokunulmadı.
