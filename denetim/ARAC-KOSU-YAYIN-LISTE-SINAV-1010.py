# -*- coding: utf-8 -*-
"""ARAC-KOSU-YAYIN-LISTE-SINAV-1010 — `kosu_yayin.py` commit listesi TÜRETME sınavı,
İKİ YÖNDE, gerçek depoya ve yayına DOKUNMADAN.

    py denetim/ARAC-KOSU-YAYIN-LISTE-SINAV-1010.py [--kok <ağaç kökü>]

--kok verilmezse bu dosyanın bir üst dizini (sinav_isirma.py uyumlu).

YÖNTEM — her soru TAZE bir geçici `git init` deposunda:
  • ağaçtan KOPYALANIR: arac/kosu_yayin.py · arac/kodla.py (yalnız AST'si
    okunur) · arac/yayin_listesi.py (varsa — yamasız ağaçta YOK).
  • sahte üreteçler: `uret_petek.py` ve `uret_devirler.py` gerçek biçimde
    `io.open(os.path.join(KOK, "data", "<ad>"), "w")` yazar — hangi adları
    yazacakları ortamdan (SINAV_YAZ); içerik BELİRLENİMCİ ("// <ad> v2").
    Öteki adımlar (denetle, renk, yayın kapısı …) 0 döner; surum_damgala
    yalnız `?v=rN` damgasını yükseltir.
  • sahte site: index.html (+ HTML yorumunda bir <script>), js/geo_coz.js
    (dinamik "data/devlet_parcalar.js"), kodla türevleri `__PR_SHA`/`__DP_SHA`
    damgalı, paket_05.js + paket_kunye.json.
  • `_sarmal.py`: push/pull/powershell ASLA gerçek koşmaz; depo dışı git → 97.
Sorular:
  N1  taze türevler, gitignore'lu motor çıktısı (donemler.js, devletler_harita.js)
      DİSKTE → commit ATILIR, çıkış 0 (eski liste burada K9'la DÜŞER: commit 0)
  N2  N1'in commit'i: index.html + bolgeler.js + devirler.js VAR; gitignore'lular
      YOK; elle kaynak (kirli yerlesimler.js) YOK; kirli css/style.css YOK
  N3  N1 günlüğü türetmeyi SATIRIYLA basar: "data/donem_parcalar.js ← index.html:N"
      ve "data/devlet_parcalar.js ← js/geo_coz.js:N (dinamik)"
  N4  HTML YORUMUNDAKİ <script src="data/yorumda.js"> listeye GİRMEZ (Ü'de olsa da)
  N5  listedeki dosya .gitignore'da (index yükler: data/gizli.js) → DUR, commit 0,
      ADIYLA ".gitignore'da"
  N6  listedeki türev diskte YOK (index yükler: data/donemler_on.js) → DUR, ADIYLA
  N7  BAYAT kodla türevi (__PR_SHA ≠ donemler.js) → DUR, "BAYAT TÜREV"
  N8  BAYAT paket (künye ≠ devirler.js) → DUR, "BAYAT TÜREV"
  N9  türevin kaynağı diskte yok (devletler_harita.js yazılmadı) → ÖLÇÜLEMEDİ, commit 0
  N10 `yayin_listesi.py --eski` CLI: farkı ADIYLA basar ("− data/donemler.js",
      "+ data/donem_parcalar.js"), çıkış 0
  N0  depo dışına git çağrısı yok
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
    d = tempfile.mkdtemp(prefix="kyliste-sinav-")
    for b in ("kosu_yayin.py", "kodla.py", "yayin_listesi.py"):
        k = os.path.join(KOK, "arac", b)
        if os.path.exists(k):
            os.makedirs(os.path.join(d, "arac"), exist_ok=True)
            shutil.copy2(k, os.path.join(d, "arac", b))
    w(d, "arac/uret_petek.py", PETEK)
    w(d, "arac/uret_devirler.py", DEVIRLER)
    w(d, "arac/surum_damgala.py", DAMGA)
    for ad in ("denetle", "renk_olc", "denetle_yayin", "denetle_kronoloji", "denetle_arayuz"):
        w(d, "arac/%s.py" % ad, SIFIR)
    w(d, "_sarmal.py", SARMAL)
    w(d, "index.html", INDEX % {"ek": ek_index})
    w(d, "js/geo_coz.js", 'var s = {};\ns.src = "data/devlet_parcalar.js" + surumEki();\n')
    w(d, "css/style.css", "body{}\n")
    w(d, "data/yerlesimler.js", "// elle yazılan kaynak\n")
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
    w(d, ".gitignore", "kosu_otomatik.log\nkosu_gunluk/\n_kosu_mesaji.txt\n_sarmal.py\n"
      "_kayit.jsonl\n__pycache__/\ndata/donemler.js\ndata/devletler_harita.js\n"
      "data/petek_govde.js\n" + ignore_ek)
    git(d, "init", "-q")
    git(d, "add", "-A")
    r = git(d, "commit", "-q", "-m", "taban")
    assert r.returncode == 0, r.stderr
    # "başka oturumun yarım işi": elle kaynak ve css kirli — zincir bunları COMMİTLEMEMELİ
    w(d, "data/yerlesimler.js", "// elle yazılan kaynak — KİRLİ, yarım iş\n")
    w(d, "css/style.css", "body{color:red}\n")
    return d


def say(d):
    return int(git(d, "rev-list", "--count", "HEAD").stdout.strip() or 0)


def kos(d, yaz, argv=("arac/kosu_yayin.py", "--push-yok")):
    kayit = os.path.join(d, "_kayit.jsonl")
    env = dict(os.environ, **GIT_ENV)
    env.update({"SINAV_KAYIT": kayit, "SINAV_DEPO": d, "SINAV_YAZ": ",".join(yaz),
                "PYTHONIOENCODING": "utf-8", "PYTHONUTF8": "1"})
    once = say(d)
    p = subprocess.run([sys.executable, os.path.join(d, "_sarmal.py"),
                        os.path.join(d, argv[0])] + list(argv[1:]),
                       cwd=d, capture_output=True, text=True, encoding="utf-8",
                       errors="replace", env=env, timeout=300)
    log = ""
    y = os.path.join(d, "kosu_otomatik.log")
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
    return {"rc": p.returncode, "commit": n, "dosyalar": dosyalar, "log": log,
            "out": p.stdout + p.stderr}


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
    sina("N1", r["commit"] == 1 and r["rc"] == 0,
         "taze türev + gitignore'lu motor çıktısı DİSKTE → commit ATILIR " + oz(r))
    ds = set(r["dosyalar"])
    sina("N2", {"index.html", "data/bolgeler.js", "data/devirler.js"} <= ds
         and not ds & {"data/donemler.js", "data/devletler_harita.js",
                       "data/yerlesimler.js", "css/style.css"},
         "commit: index+bolgeler+devirler VAR · gitignore'lu/elle/css YOK " + oz(r))
    ix = INDEX % {"ek": ""}
    no = ix.splitlines().index('<script src="data/donem_parcalar.js?v=r1"></script>') + 1
    sina("N3", ("data/donem_parcalar.js         ← index.html:%d" % no) in r["log"]
         and "data/devlet_parcalar.js        ← js/geo_coz.js:2 (dinamik)" in r["log"],
         "türetme SATIRIYLA basıldı (index.html:%d · js/geo_coz.js:2)" % no)
    sina("N4", "+ data/yorumda.js" not in r["log"] and r["log"].count("data/yorumda.js") >= 1,
         "HTML yorumundaki <script> listeye GİRMEDİ (Ü'de, 'yayında değil' diye basıldı)")

    r = soru(TAM + ["gizli.js"], ek_index='<script src="data/gizli.js?v=r1"></script>\n',
             ignore_ek="data/gizli.js\n")
    sina("N5", r["commit"] == 0 and r["rc"] == 1 and "data/gizli.js" in r["log"]
         and ".gitignore'da" in r["log"],
         "gitignore'lu dosya listede → DUR, ADIYLA " + oz(r))

    r = soru(TAM, ek_index='<script src="data/donemler_on.js?v=r1"></script>\n')
    sina("N6", r["commit"] == 0 and r["rc"] == 1 and "data/donemler_on.js" in r["log"]
         and "diskte YOK" in r["log"],
         "listedeki türev diskte YOK → DUR, ADIYLA " + oz(r))

    r = soru(TAM, pr_sha="0" * 64)
    sina("N7", r["commit"] == 0 and r["rc"] == 1 and "BAYAT TÜREV" in r["log"]
         and "data/donem_parcalar.js" in r["log"],
         "bayat kodla türevi → DUR " + oz(r))

    r = soru(TAM, paket_sha="0" * 16)
    sina("N8", r["commit"] == 0 and r["rc"] == 1 and "BAYAT TÜREV" in r["log"]
         and "data/paket_05.js" in r["log"],
         "bayat paket → DUR " + oz(r))

    r = soru(["bolgeler.js", "donemler.js", "yorumda.js"])      # devletler_harita.js YAZILMADI
    sina("N9", r["commit"] == 0 and r["rc"] == 1 and "ÖLÇÜLEMEDİ" in r["log"]
         and "data/devlet_parcalar.js" in r["log"],
         "türev kaynağı diskte yok → ÖLÇÜLEMEDİ, commit YOK " + oz(r))

    d = depo_kur()
    try:
        for ad in TAM:
            w(d, "data/" + ad, v2(ad))
        w(d, "data/devirler.js", v2("devirler.js"))
        cli = os.path.join(d, "arac", "yayin_listesi.py")
        if os.path.exists(cli):
            p = subprocess.run([sys.executable, cli, "--eski"], cwd=d, capture_output=True,
                               text=True, encoding="utf-8", errors="replace",
                               env=dict(os.environ, PYTHONIOENCODING="utf-8"))
            o = p.stdout
            ok = (p.returncode == 0 and "   − data/donemler.js" in o
                  and "   + data/donem_parcalar.js" in o and "   − css/style.css" in o)
        else:
            ok, o = False, "yayin_listesi.py YOK"
        sina("N10", ok, "`yayin_listesi.py --eski` farkı ADIYLA basar, çıkış 0")
    finally:
        shutil.rmtree(d, ignore_errors=True)

    sina("N0", not KACAKLAR, "depo dışına git çağrısı: %d" % len(KACAKLAR))
    g = sum(1 for _, k in SONUC if k)
    print("SONUÇ: %d/%d geçti" % (g, len(SONUC)))
    return 0 if g == len(SONUC) else 1


if __name__ == "__main__":
    sys.exit(main())
