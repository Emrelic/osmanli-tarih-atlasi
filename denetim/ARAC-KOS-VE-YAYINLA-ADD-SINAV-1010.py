# -*- coding: utf-8 -*-
"""ARAC-KOS-VE-YAYINLA-ADD-SINAV-1010 — `kos_ve_yayinla.py` YALNIZ yayın listesini
commitliyor mu? İKİ YÖNDE, gerçek depoya, gerçek zincire ve yayına DOKUNMADAN.

    py denetim/ARAC-KOS-VE-YAYINLA-ADD-SINAV-1010.py [--kok <ağaç kökü>]

🔴 KOŞU 22b sürerken yazıldı: gerçek zincir HİÇBİR kipte koşturulmaz. Her soru TAZE
bir geçici `git init` deposunda; ağaçtan yalnız `arac/kos_ve_yayinla.py`,
`arac/kodla.py` (AST) ve `arac/yayin_listesi.py` (varsa) KOPYALANIR. Bütün alt
adımlar sahte; `_sarmal.py` push/pull/powershell/schtasks/taskkill'i ASLA gerçek
koşturmaz, depo dışı git çağrısını 97 ile reddeder.

"Başka oturumların yarım işi" — taban commit'inden SONRA, zincirden ÖNCE:
  data/yerlesimler_x.js   izlenen, YARIM bırakılmış (değişmiş)
  data/yarim_yeni.js      İZLENMEYEN yeni dosya
  data/olaylar_y.js       değişmiş VE başka oturumca İNDEKSE eklenmiş (git add)
Sorular:
  D1  zincir tamam: commit +1, çıkış 0, push çağrıldı
  D2  yarım data/yerlesimler_x.js commite GİRMEDİ
  D3  izlenmeyen data/yarim_yeni.js commite GİRMEDİ
  D4  başkasının İNDEKSE koyduğu data/olaylar_y.js commite GİRMEDİ (pathspec commit)
  D5  listedeki dosyalar GİRDİ: index.html · data/bolgeler.js · data/devirler.js
  D6  liste dışı kirli/izlenmeyen dosyalar ADIYLA basıldı ("commite GİRMEZ")
  D7  commit `git show --name-only` ile GERİ OKUNDU ("✓ commit geri okundu")
  D8  yarım dosyalara DOKUNULMADI: commit sonrası hâlâ kirli/izlenmeyen/indekste
  D9  çağrılan git argv'lerinde `add -A` / `add .` / `commit -a` YOK; add ve commit
      `--` pathspec'li
  D10 yayın listesi DURDURUCU (BAYAT TÜREV) → commit YOK, çıkış 1
  D0  depo dışına git çağrısı yok
Çıkış: 0 hepsi geçti · 1 en az biri kaldı.
"""
import hashlib
import io
import json
import os
import shutil
import subprocess
import sys
import tempfile

if hasattr(sys.stdout, "reconfigure"):
    sys.stdout.reconfigure(encoding="utf-8", errors="replace", line_buffering=True)

KOK = (sys.argv[sys.argv.index("--kok") + 1] if "--kok" in sys.argv
       else os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
SONUC = []
KACAKLAR = []


def sina(ad, kosul, ayrinti=""):
    SONUC.append((ad, bool(kosul)))
    print("%s %s %s" % ("✓" if kosul else "✗ BAŞARISIZ", ad, ayrinti))


SARMAL = r'''
import os, sys, json, subprocess, runpy
KAYIT = os.environ["SINAV_KAYIT"]
DEPO = os.path.normcase(os.path.realpath(os.environ["SINAV_DEPO"]))
_run, _Popen = subprocess.run, subprocess.Popen
def _kaydet(x):
    with open(KAYIT, "a", encoding="utf-8") as f:
        f.write(json.dumps(x, ensure_ascii=False) + "\n")
def _cevir(argv, kw):
    if not isinstance(argv, (list, tuple)):
        return argv
    a = [str(x) for x in argv]
    b = os.path.basename(a[0]).lower()
    kod = None
    if b in ("powershell", "powershell.exe", "schtasks", "schtasks.exe", "taskkill", "taskkill.exe"):
        kod = 0
    elif b in ("git", "git.exe"):
        if "push" in a or "pull" in a:
            kod = 0
        else:
            yer = a[a.index("-C") + 1] if "-C" in a else (kw.get("cwd") or os.getcwd())
            yer = os.path.normcase(os.path.realpath(yer))
            if not (yer == DEPO or yer.startswith(DEPO + os.sep)):
                _kaydet({"KACAK": a, "yer": yer})
                kod = 97
    _kaydet({"argv": a, "sahte": kod})
    if kod is None:
        return argv
    return [sys.executable, "-c", "import sys; sys.exit(%d)" % kod]
def run(argv, *p, **kw):
    return _run(_cevir(argv, kw), *p, **kw)
class Popen(_Popen):
    def __init__(self, argv, *p, **kw):
        super().__init__(_cevir(argv, kw), *p, **kw)
subprocess.run = run
subprocess.Popen = Popen
hedef = sys.argv[1]
sys.argv = sys.argv[1:]
sys.path.insert(0, os.path.dirname(hedef))
runpy.run_path(hedef, run_name="__main__")
'''

PETEK = r'''
import io, os
KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
YAZ = os.environ.get("SINAV_YAZ", "").split(",")
def _y(yol, ad):
    return "// %s v2\n" % ad
if "bolgeler.js" in YAZ:
    io.open(os.path.join(KOK, "data", "bolgeler.js"), "w", encoding="utf-8").write(_y(0, "bolgeler.js"))
if "donemler.js" in YAZ:
    io.open(os.path.join(KOK, "data", "donemler.js"), "w", encoding="utf-8").write(_y(0, "donemler.js"))
if "devletler_harita.js" in YAZ:
    io.open(os.path.join(KOK, "data", "devletler_harita.js"), "w", encoding="utf-8").write(_y(0, "devletler_harita.js"))
if "gizli.js" in YAZ:
    io.open(os.path.join(KOK, "data", "gizli.js"), "w", encoding="utf-8").write(_y(0, "gizli.js"))
if "yorumda.js" in YAZ:
    io.open(os.path.join(KOK, "data", "yorumda.js"), "w", encoding="utf-8").write(_y(0, "yorumda.js"))
print("uret_petek (sahte) SONUÇ: temiz")
'''

DEVIRLER = r'''
import io, os
KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DATA = os.path.join(KOK, "data")
yol = os.path.join(DATA, "devirler.js")
with io.open(yol, "w", encoding="utf-8") as f:
    f.write("// devirler.js v2\n")
print("uret_devirler (sahte)")
'''

DAMGA = r'''
import io, os, re
KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
YOL = os.path.join(KOK, "index.html")
h = io.open(YOL, encoding="utf-8").read()
h = re.sub(r"\?v=r(\d+)", lambda m: "?v=r%d" % (int(m.group(1)) + 1), h)
io.open(YOL, "w", encoding="utf-8", newline="").write(h)
print("surum_damgala (sahte)")
'''

SIFIR = 'print("sahte adım SONUÇ: temiz")\n'
GIT_ENV = {"GIT_AUTHOR_NAME": "sinav", "GIT_AUTHOR_EMAIL": "s@s",
           "GIT_COMMITTER_NAME": "sinav", "GIT_COMMITTER_EMAIL": "s@s",
           "GIT_CONFIG_NOSYSTEM": "1"}


def v2(ad):
    return "// %s v2\n" % ad


def sha(metin):
    return hashlib.sha256(metin.encode("utf-8")).hexdigest()


def git(d, *a):
    return subprocess.run(["git", "-c", "core.autocrlf=false", "-c", "commit.gpgsign=false"] + list(a),
                          cwd=d, capture_output=True, text=True, encoding="utf-8",
                          errors="replace", env=dict(os.environ, **GIT_ENV))


def w(d, yol, metin):
    p = os.path.join(d, yol)
    os.makedirs(os.path.dirname(p), exist_ok=True)
    io.open(p, "w", encoding="utf-8", newline="").write(metin)


INDEX = """<!doctype html>
<script src="data/yerlesimler.js?v=r1"></script>
<!-- eski satır, yorumda:
<script src="data/yorumda.js?v=r1"></script> -->
<script src="data/bolgeler.js?v=r1"></script>
<script src="data/devlet_harita_ust.js?v=r1"></script>
<script src="data/paket_05.js?v=r1"></script>
<script src="data/donemler_ust.js?v=r1"></script>
<script src="data/donem_parcalar.js?v=r1"></script>
%(ek)s<script src="js/geo_coz.js?v=r1"></script>
"""


def depo_kur(ek_index="", pr_sha=None, dp_sha=None, paket_sha=None, ignore_ek=""):
    d = tempfile.mkdtemp(prefix="kvyadd-sinav-")
    for b in ("kos_ve_yayinla.py", "kodla.py", "yayin_listesi.py"):
        k = os.path.join(KOK, "arac", b)
        if os.path.exists(k):
            os.makedirs(os.path.join(d, "arac"), exist_ok=True)
            shutil.copy2(k, os.path.join(d, "arac", b))
    w(d, "arac/uret_petek.py", PETEK)
    w(d, "arac/uret_devirler.py", DEVIRLER)
    w(d, "arac/surum_damgala.py", DAMGA)
    for ad in ("denetle", "renk_olc", "denetle_yayin", "uret_altlik", "uret_bekleyenler",
               "adres_nobetci"):
        w(d, "arac/%s.py" % ad, SIFIR)
    w(d, "_sarmal.py", SARMAL)
    w(d, "index.html", INDEX % {"ek": ek_index})
    w(d, "js/geo_coz.js", 'var s = {};\ns.src = "data/devlet_parcalar.js" + surumEki();\n')
    w(d, "css/style.css", "body{}\n")
    w(d, "data/yerlesimler.js", "// elle yazılan kaynak\n")
    w(d, "data/yerlesimler_x.js", "window.YERLESIMLER_X = [];\n")
    w(d, "data/olaylar_y.js", "window.OLAYLAR_Y = [];\n")
    w(d, "denetim/zincir-commit-mesaji.txt", "SINAV zincir commit\n")
    w(d, "data/bolgeler.js", "// bolgeler.js v1\n")
    w(d, "data/devirler.js", "// devirler.js v1\n")
    w(d, "data/devlet_harita_ust.js", "// ust\n")
    w(d, "data/donemler_ust.js", "// ust\n")
    w(d, "data/donem_parcalar.js", '// kodla\nwindow.__PR_SHA="%s";window.__PR_B64="";\n'
      % (pr_sha or sha(v2("donemler.js"))))
    w(d, "data/devlet_parcalar.js", '// kodla\nwindow.__DP_SHA="%s";window.__DP_B64="";\n'
      % (dp_sha or sha(v2("devletler_harita.js"))))
    w(d, "data/paket_05.js", "// paket: devirler + devletler\n")
    ksha = paket_sha or hashlib.sha256(v2("devirler.js").encode()).hexdigest()[:16]
    w(d, "data/paket_kunye.json", json.dumps({"surum": 1, "paketler": [
        {"paket": "data/paket_05.js", "kaynak": [{"yol": "data/devirler.js", "sha": ksha, "bayt": 1}]}]}))
    w(d, ".gitignore", "kosu_zincir.log\n.zincir.kilit\n_sarmal.py\n"
      "_kayit.jsonl\n__pycache__/\ndata/donemler.js\ndata/devletler_harita.js\n"
      "data/petek_govde.js\n" + ignore_ek)
    git(d, "init", "-q")
    git(d, "add", "-A")
    r = git(d, "commit", "-q", "-m", "taban")
    assert r.returncode == 0, r.stderr
    # "başka oturumların yarım işi" — zincir bunları COMMİTLEMEMELİ
    w(d, "data/yerlesimler_x.js", "window.YERLESIMLER_X = [ {ad:'yarı\n")
    w(d, "data/yarim_yeni.js", "window.YARIM = [\n")
    w(d, "data/olaylar_y.js", "window.OLAYLAR_Y = [ {yarım\n")
    git(d, "add", "--", "data/olaylar_y.js")
    return d


def say(d):
    return int(git(d, "rev-list", "--count", "HEAD").stdout.strip() or 0)


def kos(d, yaz, argv=("arac/kos_ve_yayinla.py",)):
    kayit = os.path.join(d, "_kayit.jsonl")
    env = dict(os.environ, **GIT_ENV)
    env.update({"SINAV_KAYIT": kayit, "SINAV_DEPO": d, "SINAV_YAZ": ",".join(yaz),
                "PYTHONIOENCODING": "utf-8", "PYTHONUTF8": "1",
                "MOTOR_ONBELLEK_DIZIN": os.path.join(d, "_onbellek"),
                "MOTOR_SUREC_ISCI": "1"})
    once = say(d)
    p = subprocess.run([sys.executable, os.path.join(d, "_sarmal.py"),
                        os.path.join(d, argv[0])] + list(argv[1:]),
                       cwd=d, capture_output=True, text=True, encoding="utf-8",
                       errors="replace", env=env, timeout=300)
    log = ""
    y = os.path.join(d, "kosu_zincir.log")
    if os.path.exists(y):
        log = io.open(y, encoding="utf-8", errors="replace").read()
    kay = []
    if os.path.exists(kayit):
        kay = [json.loads(l) for l in io.open(kayit, encoding="utf-8") if l.strip()]
    KACAKLAR.extend(x for x in kay if "KACAK" in x)
    n = say(d) - once
    dosyalar = []
    if n:
        dosyalar = git(d, "show", "--name-only", "--format=", "HEAD").stdout.split()
    st = git(d, "status", "--porcelain=v1", "--untracked-files=all").stdout
    return {"rc": p.returncode, "commit": n, "dosyalar": dosyalar, "log": log,
            "out": p.stdout + p.stderr, "kayit": kay, "status": st,
            "push": any("push" in x.get("argv", []) for x in kay)}


def soru(yaz, **kur):
    d = depo_kur(**kur)
    try:
        return kos(d, yaz)
    finally:
        if os.environ.get("SINAV_TUT") != "1":
            shutil.rmtree(d, ignore_errors=True)


def oz(r):
    return "(rc=%s commit=%+d dosyalar=%s)" % (r["rc"], r["commit"], ",".join(r["dosyalar"]) or "-")


TAM = ["bolgeler.js", "donemler.js", "devletler_harita.js", "yorumda.js"]


def main():
    print("Ağaç:", KOK)
    r = soru(TAM)
    ds = set(r["dosyalar"])
    sina("D1", r["commit"] == 1 and r["rc"] == 0 and r["push"], "zincir tamam " + oz(r))
    sina("D2", "data/yerlesimler_x.js" not in ds, "yarım yerlesimler_x.js committe YOK " + oz(r))
    sina("D3", "data/yarim_yeni.js" not in ds, "izlenmeyen yarim_yeni.js committe YOK")
    sina("D4", "data/olaylar_y.js" not in ds, "başkasının indekslediği olaylar_y.js committe YOK")
    sina("D5", {"index.html", "data/bolgeler.js", "data/devirler.js"} <= ds,
         "listedekiler committe: index.html · data/bolgeler.js · data/devirler.js")
    sina("D6", "commite GİRMEZ: data/yerlesimler_x.js" in r["log"]
         and "commite GİRMEZ: data/yarim_yeni.js (izlenmiyor)" in r["log"],
         "liste dışı kirli/izlenmeyen ADIYLA basıldı")
    sina("D7", "✓ commit geri okundu" in r["log"], "commit git show ile geri okundu")
    st = r["status"]
    sina("D8", " M data/yerlesimler_x.js" in st and "?? data/yarim_yeni.js" in st
         and "M  data/olaylar_y.js" in st,
         "yarım dosyalara dokunulmadı (status: %s)" % " | ".join(st.splitlines()))
    gitler = [x["argv"] for x in r["kayit"] if x.get("argv") and
              os.path.basename(x["argv"][0]).lower() in ("git", "git.exe")]
    add = [a for a in gitler if "add" in a]
    com = [a for a in gitler if "commit" in a]
    kotu = [a for a in gitler if ("add" in a and ("-A" in a or "." in a or "--all" in a))
            or ("commit" in a and ("-a" in a or "-am" in a or "--all" in a))]
    sina("D9", not kotu and add and com and all("--" in a for a in add + com),
         "git argv: add=%s commit=%s kötü=%d" % (add[:1], com[:1], len(kotu)))

    r = soru(TAM, pr_sha="0" * 64)
    sina("D10", r["commit"] == 0 and r["rc"] == 1 and "BAYAT TÜREV" in r["log"],
         "liste DURDURUCU → commit YOK " + oz(r))

    sina("D0", not KACAKLAR, "depo dışına git çağrısı: %d" % len(KACAKLAR))
    g = sum(1 for _, k in SONUC if k)
    print("SONUÇ: %d/%d geçti" % (g, len(SONUC)))
    return 0 if g == len(SONUC) else 1


if __name__ == "__main__":
    sys.exit(main())
