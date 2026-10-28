"""KÖK SONDASI 1006b — betiği çalıştırır, dosya sistemine İLK dokunuşunu yakalar ve DURDURUR.

1006'dan farkı (UMIT-W56c, 6 Ekim 2026): 1006 yalnız `atlas` geçen yolda duruyordu; 100+ betik
koşturulacağı için bu yetmez — göreli bir YAZMA (`open("x.json","w")`) cwd'ye, yani `C:\\`e düşerdi.
1006b HER dokunuşta durur (yol ne olursa olsun) ve yazan/silen/taşıyan/süreç başlatan çağrıları
da yakalar ⇒ betik iş yapmadan önce durur, hiçbir şey yazılmaz, hiçbir süreç başlamaz.
İki istisna, ikisi de "kök" değildir: Python KURULUMU altındaki salt-okuma (kütüphane içe aktarımı
listdir/okuma yapar) · geçici dizin ve ~/.matplotlib|.cache|.config altındaki HER işlem (kütüphane
ev işi: tempfile'ın unlink'i, matplotlib'in mkdir'i — ölçüldü, 11 betik bunlarda yanlış duruyordu).

Yakalananlar: open/io.open (her kip; os.open düşük düzeydir, kütüphaneler kullanır — yakalanmaz) · os.chdir/listdir/scandir/walk · os.mkdir/makedirs/
remove/unlink/rename/replace/rmdir · shutil.copy*/move/rmtree · subprocess.Popen (her çağrı).
Okuma-dışı sorgular (os.path.exists/isfile/getsize/stat) YAKALANMAZ — yazmazlar; kök onlardan sonra
ilk gerçek dokunuşta görünür.

Kullanım: py denetim/ARAC-KOK-SONDA-1006b.py <betik> [argümanlar...]
Çıktı (tek satır): `SONDA <çağrı>: <mutlak yol>` · `SONDA yok: …` (hiç dokunmadan bitti/çıktı) ·
`SONDA hata: …` (dokunmadan önce kırıldı — ör. eksik modül).
"""
import builtins, io, os, runpy, shutil, site, subprocess, sys, tempfile
sys.stdout.reconfigure(encoding="utf-8", errors="replace")

KURULUM = tuple({os.path.normcase(os.path.abspath(p)) + os.sep for p in
                 (sys.prefix, sys.base_prefix, site.getusersitepackages(), *site.getsitepackages())})
OKUMA = {"os.listdir", "os.scandir", "os.walk"}
# Kütüphane ev işi (geçici dosya, önbellek klasörü) — depo kökü DEĞİL; her işlem geçirilir.
EV_ISI = tuple(os.path.normcase(os.path.abspath(p)) + os.sep for p in (
    tempfile.gettempdir(), *(os.path.join(os.path.expanduser("~"), d) for d in (".matplotlib", ".cache", ".config"))))


class Yakalandi(BaseException):
    pass


def _yol(p):
    try:
        s = os.fspath(p)
    except TypeError:
        return repr(p)[:120]
    if isinstance(s, bytes):
        s = s.decode("utf-8", "replace")
    return os.path.abspath(s)


def _kurulumda(p):
    return os.path.normcase(_yol(p)).startswith(KURULUM)


def _ev_isi(p):
    return (os.path.normcase(_yol(p)) + os.sep).startswith(EV_ISI)   # klasörün kendisi de


def yakala(neden, p):
    sys.__stdout__.write(f"SONDA {neden}: {_yol(p)}\n")
    sys.__stdout__.flush()
    raise Yakalandi()


def _sar(asil, isim):
    def f(p=".", *a, **k):
        if (isim in OKUMA and _kurulumda(p)) or _ev_isi(p):
            return asil(p, *a, **k)
        yakala(isim, p)
    return f


def p_open(f, *a, **k):
    if isinstance(f, int):           # açık tanıtıcı — dosya sistemi dokunuşu değil
        return _open(f, *a, **k)
    kip = (a[0] if a else k.get("mode", "r"))
    if (not any(c in kip for c in "wax+") and _kurulumda(f)) or _ev_isi(f):
        return _open(f, *a, **k)
    yakala("open[%s]" % kip, f)


def p_popen(self, args, *a, **k):
    if k.get("cwd"):
        yakala("subprocess-cwd", k["cwd"])
    ilk = args if isinstance(args, str) else " ".join(map(str, args))
    sys.__stdout__.write(f"SONDA subprocess: {ilk[:160]}\n")
    sys.__stdout__.flush()
    raise Yakalandi()


_open = builtins.open
betik = os.path.abspath(sys.argv[1])
sys.argv = sys.argv[1:]
sys.path.insert(0, os.path.dirname(betik))   # `py denetim/x.py` gibi: betiğin dizini sys.path[0]
builtins.open = io.open = p_open
for ad in ("chdir", "listdir", "scandir", "walk", "mkdir", "makedirs", "remove", "unlink",
           "rename", "replace", "rmdir"):
    setattr(os, ad, _sar(getattr(os, ad), "os." + ad))
for ad in ("copy", "copy2", "copyfile", "copytree", "move", "rmtree"):
    setattr(shutil, ad, _sar(getattr(shutil, ad), "shutil." + ad))
subprocess.Popen.__init__ = p_popen
try:
    runpy.run_path(betik, run_name="__main__")
    print("SONDA yok: dosya sistemine dokunmadan bitti")
except Yakalandi:
    pass
except SystemExit as e:
    print(f"SONDA yok: SystemExit({e.code}) dokunmadan")
except BaseException as e:
    print(f"SONDA hata: {type(e).__name__}: {str(e)[:120]}")
