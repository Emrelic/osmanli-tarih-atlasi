"""KÖK SONDASI — betiği çalıştırır, dosya sistemine İLK dokunduğu 'atlas' yolunu yakalar ve DURDURUR
(hiçbir şey yazılmadan). Kullanım: py sonda.py <betik> [argümanlar...]  → tek satır: SONDA <yol>"""
import builtins, io, os, runpy, subprocess, sys
sys.stdout.reconfigure(encoding="utf-8", errors="replace")


class Yakalandi(BaseException):
    pass


def ilgili(p):
    try:
        s = os.fspath(p)
    except TypeError:
        return None
    if isinstance(s, bytes):
        s = s.decode("utf-8", "replace")
    tam = os.path.abspath(s)
    return tam if "atlas" in tam.lower() else None


def yakala(neden, p):
    t = ilgili(p)
    if t and os.path.abspath(betik).lower() != t.lower():
        sys.__stdout__.write(f"SONDA {neden}: {t}\n")
        sys.__stdout__.flush()
        raise Yakalandi()


_open, _chdir, _listdir, _scandir, _popen_init = builtins.open, os.chdir, os.listdir, os.scandir, subprocess.Popen.__init__


def p_open(f, *a, **k):
    if not isinstance(f, int):
        yakala("open", f)
    return _open(f, *a, **k)


def p_chdir(p):
    yakala("chdir", p); return _chdir(p)


def p_listdir(p="."):
    yakala("listdir", p); return _listdir(p)


def p_scandir(p="."):
    yakala("scandir", p); return _scandir(p)


def p_popen(self, args, *a, **k):
    if k.get("cwd"):
        yakala("subprocess-cwd", k["cwd"])
    for x in (args if isinstance(args, (list, tuple)) else [args]):
        if isinstance(x, str) and ("\\" in x or "/" in x) and not x.startswith("-"):
            yakala("subprocess-arg", x)
    return _popen_init(self, args, *a, **k)


betik = os.path.abspath(sys.argv[1])
sys.argv = sys.argv[1:]
sys.path.insert(0, os.path.dirname(betik))   # `py arac/x.py` gibi: betiğin dizini sys.path[0]
builtins.open = io.open = p_open
os.chdir, os.listdir, os.scandir = p_chdir, p_listdir, p_scandir
subprocess.Popen.__init__ = p_popen
try:
    runpy.run_path(betik, run_name="__main__")
    print("SONDA yok: atlas yoluna dokunmadan bitti")
except Yakalandi:
    pass
except SystemExit as e:
    print(f"SONDA yok: SystemExit({e.code}) atlas yoluna dokunmadan")
except BaseException as e:
    print(f"SONDA hata: {type(e).__name__}: {str(e)[:120]}")
