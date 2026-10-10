# -*- coding: utf-8 -*-
"""ARAC-YAYIN-KAPI-OLCULEMEDI-SINAV-1010 — yayın kapısının ÜÇ ÇIKIŞ KODU sınavı.

Sınanan yama: `denetim/YAYIN-KAPI-OLCULEMEDI-1010.diff`
  · `arac/denetle_yayin.py`  OLCULEMEDI_KOVA (adlı liste) + çıkış 2
  · `arac/durum_tablosu.py`  T3: `boya_gerekli` okuması yutulmaz → ölçülemedi
Dayanak: `denetim/SESSIZ-YUTMA-TARAMA-1010.md` (T1 · T2 · 1101 · T3).

YÖNTEM — monkeypatch, depoya YAZMAZ. `denetle_yayin.main()` her soruda TAZE
yüklenir; ağır nöbetçiler (odak · kodlama · bağlılık · dizinsiz · DOM ·
sözdizimi · üretim izi · ufuk · sınama) TEMİZ sahteyle değiştirilir ki
yalnız sınanan soru hükmü oynatsın. Gerçek olan: index.html, `git ls-files`,
BEKLEYEN/yetim taraması, paket künyesi (yetim evreni için).

Soru biçimi `✓ ID …` / `✗ ID …`, özet `SONUÇ: n soru · g geçti · k kaldı`
(`arac/sinav_isirma.py` dilbilgisi). Çıkış: 0 hepsi geçti · 1 kalan var.

Yamasız beklenen (ölçümden ÖNCE yazıldı): K0 · T2K · AST1 · DTK geçer
(süreklilik soruları); T1 · T1B · T2 · T2D · P1 · O1 · N1 · FMT · AST2 · DT3
KALIR (yamanın ısırdığı sorular).

    py denetim/ARAC-YAYIN-KAPI-OLCULEMEDI-SINAV-1010.py
"""
import ast
import contextlib
import importlib.util
import io
import os
import subprocess
import sys
import types

if hasattr(sys.stdout, "reconfigure"):
    try:
        sys.stdout.reconfigure(encoding="utf-8", errors="replace")
    except Exception:                                         # noqa: BLE001
        pass

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
ARAC = os.path.join(KOK, "arac")
DY_YOL = os.path.join(ARAC, "denetle_yayin.py")
DT_YOL = os.path.join(ARAC, "durum_tablosu.py")
if ARAC not in sys.path:
    sys.path.insert(0, ARAC)

SONUC = []


def soru(kid, gecti, metin):
    SONUC.append((kid, bool(gecti)))
    print("%s %s %s" % ("✓" if gecti else "✗", kid, metin))


_sayac = [0]


def yukle(yol, ad):
    _sayac[0] += 1
    sp = importlib.util.spec_from_file_location("%s_sinav_%d" % (ad, _sayac[0]), yol)
    m = importlib.util.module_from_spec(sp)
    sp.loader.exec_module(m)
    return m


# ---------------------------------------------------------------- sahteler
def _mod(ad, **oz):
    m = types.ModuleType(ad)
    for k, v in oz.items():
        setattr(m, k, v)
    return m


def temiz_sahteler():
    return {
        "odak_olc": _mod("odak_olc", kapi_olcumu=lambda **k: {
            "ihlal": False, "satirlar": ["✓  odak (sınav sahtesi)"]}),
        "kodla": _mod("kodla", DP_JS="devlet_parcalar.js",
                      kapi=lambda d: (False, ["✓  kodlama (sınav sahtesi)"])),
        "_bagli_mi": _mod("_bagli_mi", denetle=lambda: False),
        "durum_tablosu": _mod("durum_tablosu",
                              kimlik_evreni=lambda: (set(), set()),
                              bosluk_kovalari=lambda kul, diz: ({}, {})),
    }


def gercek_paketle():
    """Gerçek paketle (yetim evreni gerçek künyeden), ama `sina` temiz."""
    pk = yukle(os.path.join(ARAC, "paketle.py"), "paketle")
    pk.sina = lambda: 0
    return pk


def dy_kos(ek_mod=None, dy_yama=None):
    """denetle_yayin.main()'i taze yükle, sahtelerle koştur → (kod, çıktı)."""
    mods = temiz_sahteler()
    mods["paketle"] = gercek_paketle()
    mods.update(ek_mod or {})
    eski = {k: sys.modules.get(k) for k in mods}
    eski_argv = sys.argv
    tampon = io.StringIO()
    try:
        for k, v in mods.items():
            sys.modules[k] = v
        sys.argv = ["denetle_yayin.py"]
        with contextlib.redirect_stdout(tampon):
            dy = yukle(DY_YOL, "denetle_yayin")
            dy.bayat_mi = lambda: ([], [], "sha256 izi (sınav sahtesi)", False)
            dy.iz_kapsami = lambda: ([], [], [], [], [], [])
            dy.cizilmiyor_mu = lambda: ([], 0)
            dy.inline_sozdizimi = lambda: (1, [])
            dy.dom_sozlesmesi = lambda rev=None: (1, 1, [], [])
            dy.ufuk_esitligi = lambda app_yol=None: (False, ["✓  ufuk (sınav sahtesi)"])
            dy.kapi_hukmu = lambda k=None: (False, ["✓  sınama (sınav sahtesi)"])
            dy.damga_denetimi = lambda gecmis=30: ([], [])
            for k, v in (dy_yama or {}).items():
                setattr(dy, k, v)
            try:
                kod = dy.main()
            except SystemExit as e:
                kod = e.code
            except Exception as e:                            # noqa: BLE001
                print("SINAV: main() ÇÖKTÜ: %r" % e)
                kod = "çöktü"
    finally:
        for k, v in eski.items():
            if v is None:
                sys.modules.pop(k, None)
            else:
                sys.modules[k] = v
        sys.argv = eski_argv
    return kod, tampon.getvalue()


def blok(cikti):
    """KOSU-YAYIN-KAPI-1010 okuyucusunun ayrıştırıcısının BİREBİR kopyası."""
    satirlar, icinde = [], False
    for l in (cikti or "").splitlines():
        if "ÖLÇÜLEMEYEN SORU" in l:
            icinde = True
        elif icinde and l.strip().startswith("SONUÇ"):
            break
        if icinde:
            satirlar.append(l)
    return satirlar


def kova_adlari(cikti):
    return [l.strip()[1:].strip() for l in blok(cikti) if l.strip().startswith("•")]


def adli(cikti, ad):
    return any(x.startswith(ad) for x in kova_adlari(cikti))


# ============================================================ denetle_yayin
print("=" * 78)
print("YAYIN KAPISI — ÜÇ ÇIKIŞ KODU SINAVI (YAYIN-KAPI-OLCULEMEDI-1010)")
print("taban: %s" % KOK)
print("=" * 78)

# K0 — süreklilik: hepsi temizse 0, blok YOK
kod, c = dy_kos()
soru("K0", kod == 0 and not blok(c),
     "sahteler temiz → çıkış 0 ve ölçülemedi bloğu yok (çıkış %r · blok %d satır)"
     % (kod, len(blok(c))))

# T1 — tazelik ölçülemedi ⇒ 2, adıyla
_t1 = {"bayat_mi": lambda: (None, None, "donemler.js YOK", None)}
kod, c = dy_kos(dy_yama=_t1)
soru("T1", kod == 2 and adli(c, "yayın tazeliği") and "donemler.js YOK" in "\n".join(blok(c)),
     "bayat_mi → None ⇒ çıkış 2 + kovada 'yayın tazeliği' (çıkış %r · kova %s)"
     % (kod, kova_adlari(c)))

# T1B — ihlal VAR + ölçülemedi: hüküm 1, ama kova YİNE görünür (biri ötekini gizlemez)
_t1b = dict(_t1, inline_sozdizimi=lambda: (1, [(0, "sınav: sahte sözdizimi hatası")]))
kod, c = dy_kos(dy_yama=_t1b)
soru("T1B", kod == 1 and adli(c, "yayın tazeliği") and "SONUÇ: İHLAL VAR" in c,
     "ihlal + ölçülemedi ⇒ çıkış 1 VE kova basılı (çıkış %r · kova %s)"
     % (kod, kova_adlari(c)))

# git ls-files enjeksiyonu
_gercek_run = subprocess.run


def _git_ls_dusur(*a, **k):
    argv = a[0] if a else k.get("args")
    if isinstance(argv, (list, tuple)) and list(argv[:2]) == ["git", "ls-files"]:
        raise FileNotFoundError("sınav: git yok")
    return _gercek_run(*a, **k)


def _git_ls_appjs_yok(*a, **k):
    argv = a[0] if a else k.get("args")
    r = _gercek_run(*a, **k)
    if isinstance(argv, (list, tuple)) and list(argv[:2]) == ["git", "ls-files"]:
        r = subprocess.CompletedProcess(r.args, r.returncode, "\n".join(
            l for l in r.stdout.splitlines() if l.strip() != "js/app.js") + "\n", r.stderr)
    return r


def _sp(run):
    m = types.SimpleNamespace(**{k: getattr(subprocess, k) for k in dir(subprocess)
                                 if not k.startswith("__")})
    m.run = run
    return m


# T2K — süreklilik (kontrol kolu): js/app.js izlenmiyorsa ✗ ve 1
kod, c = dy_kos(dy_yama={"subprocess": _sp(_git_ls_appjs_yok)})
soru("T2K", kod == 1 and "GIT'TE İZLENMİYOR: 1" in c,
     "kontrol: app.js izlenmiyor ⇒ '✗ GIT'TE İZLENMİYOR: 1' + çıkış 1 (çıkış %r)" % kod)

# T2 — git düşer: ✗ satırı kaybolmaz-yerine ÖLÇÜLEMEDİ, yalan sayı YOK, çıkış 2
kod, c = dy_kos(dy_yama={"subprocess": _sp(_git_ls_dusur)})
yalan = "diskte VAR ve git'te izlenen" in c
soru("T2", kod == 2 and adli(c, "git izleme") and not yalan,
     "git ls-files düşer ⇒ çıkış 2 + kovada 'git izleme' + 'git'te izlenen: N' YALANI yok "
     "(çıkış %r · yalan satır %s · kova %s)" % (kod, "VAR" if yalan else "yok", kova_adlari(c)))

# T2D — damga denetimi git log düşer (damga_denetimi → (None, None))
kod, c = dy_kos(dy_yama={"damga_denetimi": lambda gecmis=30: (None, None)})
soru("T2D", kod == 2 and adli(c, "sürüm damgası artışı"),
     "damga_denetimi git log düşer ⇒ çıkış 2 + kovada 'sürüm damgası artışı' (çıkış %r)" % kod)

# P1 — 9 Ekim koruması: index paket yüklüyor ama kaynaklar() boş
_pk_bos = gercek_paketle()
_pk_bos.kaynaklar = lambda: []
_pk_bos._kunye_oku = lambda: None
kod, c = dy_kos(ek_mod={"paketle": _pk_bos})
_yetim_x = [l for l in c.splitlines() if l.startswith("✗  yetim veri dosyası")]
soru("P1", kod == 2 and adli(c, "yetim veri dosyası") and not _yetim_x,
     "paket künyesi boş ⇒ '✗ yetim' YANLIŞ TEŞHİSİ yok, çıkış 2 + kovada 'yetim veri "
     "dosyası' (çıkış %r · ✗ yetim satırı: %s)" % (kod, _yetim_x[0][:60] if _yetim_x else "yok"))

# O1 — odak_olc kendi ÖLÇÜLEMEDİ'sini döndürür: fail-closed 1 KORUNUR + kovada ad
_od = {"odak_olc": _mod("odak_olc", kapi_olcumu=lambda **k: {
    "ihlal": True, "satirlar": ["✗  ÖLÇÜLEMEDİ: 2 sekme çiftinin sınıfı ölçülemedi (sınav)"]})}
kod, c = dy_kos(ek_mod=_od)
soru("O1", kod == 1 and adli(c, "odak nöbetçisi"),
     "odak ölçülemedi ⇒ çıkış 1 (fail-closed korunur) + kovada 'odak nöbetçisi' (çıkış %r)" % kod)


# N1 — nöbetçi istisnası (kodlama kapısı patlar): 1 korunur + kovada ad
def _patla(*a, **k):
    raise RuntimeError("sınav: kodlama patladı")


kod, c = dy_kos(ek_mod={"kodla": _mod("kodla", DP_JS="devlet_parcalar.js", kapi=_patla)})
soru("N1", kod == 1 and adli(c, "kodlama kapısı"),
     "kodlama kapısı istisnası ⇒ çıkış 1 + kovada 'kodlama kapısı' (çıkış %r)" % kod)

# FMT — okuyucu uyumu: blok "ÖLÇÜLEMEYEN SORU" ile başlar, SONUÇ'tan önce biter,
#        ve öncesinde başka "ÖLÇÜLEMEYEN SORU" yoktur (erken yakalama olmaz)
kod, c = dy_kos(dy_yama=_t1)
b = blok(c)
ilk = [i for i, l in enumerate(c.splitlines()) if "ÖLÇÜLEMEYEN SORU" in l]
son = c.strip().splitlines()[-1] if c.strip() else ""
soru("FMT", bool(b) and len(ilk) == 1 and son.startswith("SONUÇ: TEMİZ DEĞİL")
     and "çıkış kodu 2" in son,
     "blok tek ve SONUÇ'tan hemen önce; son satır 'SONUÇ: TEMİZ DEĞİL … çıkış kodu 2' "
     "(başlık sayısı %d · son: %s)" % (len(ilk), son[:60]))

# AST — eski sınavların sözleşmesi bozulmadı + yeni dal var
_kaynak = io.open(DY_YOL, encoding="utf-8").read()
_ana = next(n for n in ast.parse(_kaynak).body
            if isinstance(n, ast.FunctionDef) and n.name == "main")
_don = [getattr(n.value, "value", None) for n in ast.walk(_ana) if isinstance(n, ast.Return)]
_son_if = [n for n in ast.walk(_ana) if isinstance(n, ast.If)
           and any(isinstance(r, ast.Return) and getattr(r.value, "value", None) == 1
                   for r in n.body)]
_bagli = bool(_son_if) and any(isinstance(x, ast.Name) and x.id == "_kapi_ihlali"
                               for x in ast.walk(_son_if[-1].test))
soru("AST1", _don.count(1) == 1 and _bagli,
     "main(): tek 'return 1' (SINAV-KOSU8-KAPI ②) ve son ret if'inde _kapi_ihlali "
     "(KAYNAK-DURUM-SINAMA Y6) — return'ler %s" % _don)
soru("AST2", _don.count(2) == 1,
     "main(): 'return 2' (ÖLÇÜLEMEDİ) dalı var — return'ler %s" % _don)


# ============================================================ durum_tablosu T3
def dt_olc(t3):
    """durum_tablosu.olc()'yi koştur: denetle.py alt süreci SAHTE çıktı,
    `oku_devletler` (t3 ise) yalnız `boya_gerekli` çağrısında patlar."""
    import girdi as _g
    gercek_od = _g.oku_devletler
    sayac = [0]

    def od(*a, **k):
        # Yalnız olc()'nin KENDİ çağrıları sayılır (başka işlevlerinkiler değil):
        # 1. çağrı `_kn` (harita: eşlemesi) · 2. çağrı `boya_gerekli` okuması.
        if sys._getframe(1).f_code.co_name == "olc":
            sayac[0] += 1
        if t3 and sys._getframe(1).f_code.co_name == "olc" and sayac[0] == 2:
            raise OSError("sınav: devletler.js okunamadı (T3)")
        return gercek_od(*a, **k)

    sahte_denetle = ("Değişmez 1 — sahipsizlik ✓ x\nDeğişmez 1b ✓ x\nDeğişmez 2 ✓ x\n"
                     "Değişmez 2s ✓ x\nDeğişmez 2i ✓ x\nDeğişmez 2t ✓ x\nkonum: 0 x\n")

    def run(*a, **k):
        argv = a[0] if a else k.get("args")
        if isinstance(argv, (list, tuple)) and any("denetle.py" in str(x) for x in argv):
            return subprocess.CompletedProcess(argv, 0, sahte_denetle.encode("utf-8"), b"")
        return _gercek_run(*a, **k)

    eski_out, eski_cwd = sys.stdout, os.getcwd()
    sys.stdout = io.TextIOWrapper(io.BytesIO(), encoding="utf-8")   # modül düzeyi sarmalayıcı için
    try:
        dt = yukle(DT_YOL, "durum_tablosu")
    finally:
        try:
            sys.stdout.detach()
        except Exception:                                     # noqa: BLE001
            pass
        sys.stdout = eski_out
    dt.subprocess = _sp(run)
    _g.oku_devletler = od
    dt.girdi = _g
    try:
        o = dt.olc()
        t = dt.tablo(o)
    finally:
        _g.oku_devletler = gercek_od
        os.chdir(eski_cwd)
    return dt, o, t


dt, o, t = dt_olc(False)
_kova = list(getattr(dt, "OLCULEMEDI_KOVA", []) or [])
soru("DTK", isinstance(o.get("renksiz_beyanli"), list) and not _kova,
     "kontrol: enjeksiyonsuz ⇒ beyanlı LİSTE (%s kimlik) · gerçek %d · kova boş (%d)"
     % (len(o.get("renksiz_beyanli") or []), len(o["renksiz_gercek"]), len(_kova)))
_kontrol = (len(o.get("renksiz_beyanli") or []), len(o["renksiz_gercek"]))

dt, o, t = dt_olc(True)
_kova = list(getattr(dt, "OLCULEMEDI_KOVA", []) or [])
soru("DT3", o.get("renksiz_beyanli") is None and any("beyanlı" in a for a, _ in _kova)
     and "ÖLÇÜLEMEDİ" in t,
     "T3: boya_gerekli okunamaz ⇒ beyanlı=None (sessiz [] DEĞİL) + kovada ad + tablo "
     "'ÖLÇÜLEMEDİ' der (kontrol beyanlı/gerçek %d/%d → enjeksiyonda beyanlı %r · gerçek %d)"
     % (_kontrol[0], _kontrol[1],
        (len(o["renksiz_beyanli"]) if isinstance(o.get("renksiz_beyanli"), list)
         else o.get("renksiz_beyanli")), len(o["renksiz_gercek"])))

# ---------------------------------------------------------------- özet
g = sum(1 for _, x in SONUC if x)
k = len(SONUC) - g
print("SONUÇ: %d soru · %d geçti · %d kaldı" % (len(SONUC), g, k))
for kid, x in SONUC:
    if not x:
        print("  ✗ %s" % kid)
sys.exit(1 if k else 0)
