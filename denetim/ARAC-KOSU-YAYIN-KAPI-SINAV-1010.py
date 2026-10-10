# -*- coding: utf-8 -*-
"""ARAC-KOSU-YAYIN-KAPI-SINAV-1010 — `arac/kosu_yayin.py` + `arac/kos_ve_yayinla.py`
kapı ve kilit sınavı, İKİ YÖNDE, gerçek depoya ve yayına DOKUNMADAN.

    py denetim/ARAC-KOSU-YAYIN-KAPI-SINAV-1010.py [--kok <ağaç kökü>]

--kok verilmezse bu dosyanın bir üst dizini (sinav_isirma.py bu sınavı
`denetim/` altına kopyalayıp koşturur ⇒ koşulan ağaç ölçülür).

YÖNTEM — her soru TAZE bir geçici `git init` deposunda koşar:
  • iki betik ağaçtan KOPYALANIR; çağırdıkları bütün alt betikler
    (uret_petek · denetle · denetle_yayin · …) çıkış kodu ortamdan gelen
    SAHTE betiklerdir (STUB_<AD>=kod).
  • betik `_sarmal.py` içinden koşar: subprocess.run/Popen sarılır;
    `git push` / `git pull` · powershell (bip) · schtasks · taskkill ASLA
    gerçek koşmaz (kayda düşer, sahte kod döner). Öteki git çağrıları GERÇEK
    ama yalnız geçici depoda — yolu depo dışına çıkan git çağrısı 97 ile
    REDDEDİLİR ve "KAÇAK" diye kayda düşer (K0 bunu sorar).
  • "commit ATILDI mı" = geçici depoda `git rev-list --count HEAD` farkı.
Sorular:
  K0  hiçbir soruda depo dışına git çağrısı yok, gerçek push yok
  K1  kosu_yayin  ③=1                  → commit YOK, çıkış 1
  K2  kosu_yayin  ③=2                  → commit YOK, çıkış 1, "ÖLÇÜLEMEDİ" + kova ADIYLA
  K3  kosu_yayin  ⑥=1 bayraksız         → commit YOK, çıkış 1
  K4  kosu_yayin  ⑥=1 --yayin-kapisi-uyari → commit VAR, "UYARIYA İNDİ", çıkış 0
  K5  kosu_yayin  ⑥=2 --yayin-kapisi-uyari → commit YOK (bayrak 2'yi affetmez)
  K6  kosu_yayin  ③ bayraklı ve 1      → commit YOK (bayrak ③'e dokunmaz)
  K7  kosu_yayin  hepsi 0              → commit VAR, push çağrıldı, çıkış 0
  K8  kosu_yayin  push düşer           → çıkış 1 (eskiden 0 + 9 bip)
  K9  kosu_yayin  commit düşer (gitignore'lu çıktı diskte) → çıkış 1
  Z1  kos_ve_yayinla ③=1               → commit YOK, çıkış 1
  Z2  kos_ve_yayinla ③=2               → commit YOK, "ÖLÇÜLEMEDİ" + kova ADIYLA
  Z3  kos_ve_yayinla ⑥=1               → commit YOK
  Z4  kos_ve_yayinla ⑥=2               → commit YOK, "ÖLÇÜLEMEDİ"
  Z5  kos_ve_yayinla hepsi 0           → commit VAR, push çağrıldı, çıkış 0, kilit kalktı
  L1  kilit: CANLI PID, kilit 5 saat yaşlı → BAŞLATMAZ (çıkış 3), commit YOK, kilit DOKUNULMADI
  L2  kilit: ÖLÜ PID, kilit 1 dk yaşlı     → DEVRALIR, commit VAR, çıkış 0
  L3  kilit: BOZUK damga, 5 saat yaşlı     → ÖLÇÜLEMEDİ (çıkış 2), commit YOK, kilit DOKUNULMADI
  L4  kilit: eski biçim (yalnız zaman), 5 saat → ÖLÇÜLEMEDİ (çıkış 2)
  L5  kilit: ölü PID ama BAŞKA MAKİNE      → ÖLÇÜLEMEDİ (çıkış 2)
  L6  L1'in aynısı psutil YOKKEN (tasklist yolu) → çıkış 3
  L7  L2'nin aynısı psutil YOKKEN (tasklist yolu) → devralır, çıkış 0
  K0b koruma İKİ YÖNDE: depo dışına salt-okur `git rev-parse` → 97 + KAÇAK kaydı
Çıkış: 0 hepsi geçti · 1 en az biri kaldı.
Süreç öldürme yalnız sınavın KENDİ başlattığı `sleep` çocuğuna (L1) yapılır.
"""
import io
import json
import os
import shutil
import subprocess
import sys
import tempfile
import time

if hasattr(sys.stdout, "reconfigure"):
    sys.stdout.reconfigure(encoding="utf-8", errors="replace", line_buffering=True)

KOK = (sys.argv[sys.argv.index("--kok") + 1] if "--kok" in sys.argv
       else os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
SONUC = []


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
    if b in ("powershell", "powershell.exe", "schtasks", "schtasks.exe",
             "taskkill", "taskkill.exe"):
        kod = 0
    elif b in ("git", "git.exe"):
        if "push" in a or "pull" in a:
            kod = int(os.environ.get("SINAV_PUSH_KOD", "0"))
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
if os.environ.get("SINAV_PSUTIL_YOK") == "1":
    sys.modules["psutil"] = None        # import psutil -> ImportError
hedef = sys.argv[1]
sys.argv = sys.argv[1:]
sys.path.insert(0, os.path.dirname(hedef))
runpy.run_path(hedef, run_name="__main__")
'''

STUB = r'''
import os, sys, io, time
AD = %r
kod = int(os.environ.get("STUB_" + AD.upper(), "0"))
KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
print(AD + " (sahte) basladi")
if AD == "uret_petek":
    io.open(os.path.join(KOK, "data", "donemler.js"), "w", encoding="utf-8").write(
        "window.DONEMLER = %%r;\n" %% time.time())
    io.open(os.path.join(KOK, "data", "devirler.js"), "w", encoding="utf-8").write(
        "window.DEVIRLER = %%r;\n" %% time.time())
if AD == "surum_damgala":
    io.open(os.path.join(KOK, "index.html"), "w", encoding="utf-8").write(
        "<!-- r%%d -->\n" %% int(time.time()))
if kod == 2 and AD in ("denetle", "denetle_yayin"):
    print("🔴 ÖLÇÜLEMEYEN SORU: 1 — bu kapı o soruda TEMİZ DEĞİL")
    print("     • SAHTE-KOVA-%%s        shapely yok (sinav)" %% AD.upper())
    print("   ⇒ Eksik bağımlılık ya da eksik dosya; ölçüm YAPILMADI.")
    print("SONUÇ: TEMİZ DEĞİL — eksik ölçüm, çıkış kodu 2")
elif kod == 1:
    print("SONUÇ: İHLAL VAR — çıkış kodu 1")
else:
    print("SONUÇ: temiz")
sys.exit(kod)
'''

STUBLAR = ["uret_petek", "uret_devirler", "uret_altlik", "uret_bekleyenler",
           "denetle", "renk_olc", "surum_damgala", "denetle_yayin",
           "denetle_kronoloji", "denetle_arayuz", "adres_nobetci"]
GIT_ENV = {"GIT_AUTHOR_NAME": "sinav", "GIT_AUTHOR_EMAIL": "s@s",
           "GIT_COMMITTER_NAME": "sinav", "GIT_COMMITTER_EMAIL": "s@s",
           "GIT_CONFIG_NOSYSTEM": "1"}


def git(d, *a):
    return subprocess.run(["git", "-c", "core.autocrlf=false", "-c", "commit.gpgsign=false"]
                          + list(a), cwd=d, capture_output=True, text=True,
                          encoding="utf-8", errors="replace",
                          env=dict(os.environ, **GIT_ENV))


def depo_kur(ignore_ek=""):
    d = tempfile.mkdtemp(prefix="kosuyayin-sinav-")
    os.makedirs(os.path.join(d, "arac"))
    os.makedirs(os.path.join(d, "data"))
    os.makedirs(os.path.join(d, "denetim"))
    for b in ("kosu_yayin.py", "kos_ve_yayinla.py"):
        shutil.copy2(os.path.join(KOK, "arac", b), os.path.join(d, "arac", b))
    for ad in STUBLAR:
        io.open(os.path.join(d, "arac", ad + ".py"), "w", encoding="utf-8").write(STUB % ad)
    io.open(os.path.join(d, "_sarmal.py"), "w", encoding="utf-8").write(SARMAL)
    io.open(os.path.join(d, "data", "donemler.js"), "w", encoding="utf-8").write("eski\n")
    io.open(os.path.join(d, "data", "devirler.js"), "w", encoding="utf-8").write("eski\n")
    io.open(os.path.join(d, "index.html"), "w", encoding="utf-8").write("<!-- r1 -->\n")
    io.open(os.path.join(d, "denetim", "zincir-commit-mesaji.txt"), "w",
            encoding="utf-8").write("SINAV commit\n")
    io.open(os.path.join(d, ".gitignore"), "w", encoding="utf-8").write(
        "kosu_otomatik.log\nkosu_gunluk/\nkosu_zincir.log\n.zincir.kilit\n"
        "_kosu_mesaji.txt\n_sarmal.py\n_kayit.jsonl\n__pycache__/\n" + ignore_ek)
    git(d, "init", "-q")
    git(d, "add", "-A")
    r = git(d, "commit", "-q", "-m", "taban")
    assert r.returncode == 0, r.stderr
    return d


def say(d):
    r = git(d, "rev-list", "--count", "HEAD")
    return int(r.stdout.strip() or 0)


def kos(d, betik, args=(), kodlar=None, push_kod=0, ek_env=None):
    kayit = os.path.join(d, "_kayit.jsonl")
    env = dict(os.environ, **GIT_ENV)
    env.update({"SINAV_KAYIT": kayit, "SINAV_DEPO": d, "SINAV_PUSH_KOD": str(push_kod),
                "PYTHONIOENCODING": "utf-8", "PYTHONUTF8": "1",
                "MOTOR_ONBELLEK_DIZIN": os.path.join(d, "_onbellek"),
                "MOTOR_SUREC_ISCI": "1"})
    for k in list(env):
        if k.startswith("STUB_"):
            del env[k]
    for ad, k in (kodlar or {}).items():
        env["STUB_" + ad.upper()] = str(k)
    env.update(ek_env or {})
    once = say(d)
    p = subprocess.run([sys.executable, os.path.join(d, "_sarmal.py"),
                        os.path.join(d, "arac", betik)] + list(args),
                       cwd=d, capture_output=True, text=True, encoding="utf-8",
                       errors="replace", env=env, timeout=600)
    log = ""
    for ad in ("kosu_otomatik.log", "kosu_zincir.log"):
        y = os.path.join(d, ad)
        if os.path.exists(y):
            log += io.open(y, encoding="utf-8", errors="replace").read()
    kay = []
    if os.path.exists(kayit):
        kay = [json.loads(l) for l in io.open(kayit, encoding="utf-8") if l.strip()]
    return {"rc": p.returncode, "commit": say(d) - once, "log": log,
            "out": p.stdout + p.stderr, "kayit": kay,
            "push": any("push" in x.get("argv", []) for x in kay),
            "kacak": [x for x in kay if "KACAK" in x]}


KACAKLAR = []


def ozet(r):
    return "(rc=%s commit=%+d push=%s)" % (r["rc"], r["commit"], r["push"])


def temizle(d):
    shutil.rmtree(d, ignore_errors=True)


def soru(ad, betik, args=(), kodlar=None, push_kod=0, ignore_ek="", hazir=None):
    d = depo_kur(ignore_ek)
    try:
        if hazir:
            hazir(d)
        r = kos(d, betik, args, kodlar, push_kod)
        r["dizin"] = d
        KACAKLAR.extend(r["kacak"])
        return r
    finally:
        if os.environ.get("SINAV_TUT") != "1":
            temizle(d)


def kilit_yaz(d, metin, yas_dk):
    y = os.path.join(d, ".zincir.kilit")
    io.open(y, "w", encoding="utf-8").write(metin)
    t = time.time() - yas_dk * 60
    os.utime(y, (t, t))


def kilit_soru(ad, metin_f, yas_dk, ek_env=None):
    """Kilit sorusu: metin_f(d) kilit metnini döndürür. Kilit son hâli de ölçülür."""
    d = depo_kur()
    try:
        metin = metin_f(d)
        kilit_yaz(d, metin, yas_dk)
        r = kos(d, "kos_ve_yayinla.py", ek_env=ek_env)
        y = os.path.join(d, ".zincir.kilit")
        r["kilit_son"] = io.open(y, encoding="utf-8").read() if os.path.exists(y) else None
        r["kilit_ilk"] = metin
        KACAKLAR.extend(r["kacak"])
        return r
    finally:
        if os.environ.get("SINAV_TUT") != "1":
            temizle(d)


def main():
    print("Ağaç:", KOK)
    KY, KV = "kosu_yayin.py", "kos_ve_yayinla.py"

    r = soru("K1", KY, kodlar={"denetle": 1})
    sina("K1", r["commit"] == 0 and r["rc"] == 1 and not r["push"],
         "kosu_yayin ③=1 → commit YOK, çıkış 1 " + ozet(r))

    r = soru("K2", KY, kodlar={"denetle": 2})
    sina("K2", r["commit"] == 0 and r["rc"] == 1 and "çıkış 2 — ÖLÇÜLEMEDİ" in r["log"]
         and "│      • SAHTE-KOVA-DENETLE" in r["log"],
         "kosu_yayin ③=2 → commit YOK, ÖLÇÜLEMEDİ + kova ADIYLA " + ozet(r))

    r = soru("K3", KY, kodlar={"denetle_yayin": 1})
    sina("K3", r["commit"] == 0 and r["rc"] == 1 and not r["push"],
         "kosu_yayin ⑥=1 bayraksız → commit YOK " + ozet(r))

    r = soru("K4", KY, args=["--yayin-kapisi-uyari"], kodlar={"denetle_yayin": 1})
    sina("K4", r["commit"] == 1 and r["rc"] == 0 and "UYARIYA İNDİ" in r["log"],
         "kosu_yayin ⑥=1 bayraklı → uyarıyla GEÇER " + ozet(r))

    r = soru("K5", KY, args=["--yayin-kapisi-uyari"], kodlar={"denetle_yayin": 2})
    sina("K5", r["commit"] == 0 and r["rc"] == 1 and "çıkış 2 — ÖLÇÜLEMEDİ" in r["log"],
         "kosu_yayin ⑥=2 bayraklı → commit YOK (bayrak 2'yi affetmez) " + ozet(r))

    r = soru("K6", KY, args=["--yayin-kapisi-uyari"], kodlar={"denetle": 1})
    sina("K6", r["commit"] == 0 and r["rc"] == 1,
         "kosu_yayin ③=1 bayraklı → commit YOK (bayrak ③'e dokunmaz) " + ozet(r))

    r = soru("K7", KY)
    sina("K7", r["commit"] == 1 and r["rc"] == 0 and r["push"],
         "kosu_yayin hepsi 0 → commit + push " + ozet(r))

    r = soru("K8", KY, push_kod=1)
    sina("K8", r["commit"] == 1 and r["rc"] == 1 and "PUSH DÜŞTÜ" in r["log"],
         "kosu_yayin push düşer → çıkış 1 " + ozet(r))

    def _ignoreli(d):
        io.open(os.path.join(d, "data", "devletler_harita.js"), "w",
                encoding="utf-8").write("yerel cozum\n")
    r = soru("K9", KY, ignore_ek="data/devletler_harita.js\n", hazir=_ignoreli)
    sina("K9", r["commit"] == 0 and r["rc"] == 1 and not r["push"],
         "kosu_yayin commit düşer (gitignore'lu çıktı) → çıkış 1, push YOK " + ozet(r))

    r = soru("Z1", KV, kodlar={"denetle": 1})
    sina("Z1", r["commit"] == 0 and r["rc"] == 1 and not r["push"],
         "kos_ve_yayinla ③=1 → commit YOK " + ozet(r))

    r = soru("Z2", KV, kodlar={"denetle": 2})
    sina("Z2", r["commit"] == 0 and r["rc"] == 1 and "çıkış 2 — ÖLÇÜLEMEDİ" in r["log"]
         and "│      • SAHTE-KOVA-DENETLE" in r["log"],
         "kos_ve_yayinla ③=2 → commit YOK, ÖLÇÜLEMEDİ + kova ADIYLA " + ozet(r))

    r = soru("Z3", KV, kodlar={"denetle_yayin": 1})
    sina("Z3", r["commit"] == 0 and r["rc"] == 1 and not r["push"],
         "kos_ve_yayinla ⑥=1 → commit YOK " + ozet(r))

    r = soru("Z4", KV, kodlar={"denetle_yayin": 2})
    sina("Z4", r["commit"] == 0 and r["rc"] == 1 and "çıkış 2 — ÖLÇÜLEMEDİ" in r["log"],
         "kos_ve_yayinla ⑥=2 → commit YOK, ÖLÇÜLEMEDİ " + ozet(r))

    d_tut = {}

    def _z5(d):
        d_tut["d"] = d
    r = soru("Z5", KV, hazir=_z5)
    sina("Z5", r["commit"] == 1 and r["rc"] == 0 and r["push"]
         and not os.path.exists(os.path.join(d_tut["d"], ".zincir.kilit")),
         "kos_ve_yayinla hepsi 0 → commit + push, kilit kalktı " + ozet(r))

    makine = os.environ.get("COMPUTERNAME", "?")
    # L1 — canlı PID: sınavın kendi uyuyan çocuğu
    cocuk = subprocess.Popen([sys.executable, "-c", "import time; time.sleep(300)"])
    try:
        r = kilit_soru("L1", lambda d: "pid=%d | bas=2026-10-10 00:00:00 | makine=%s | argv="
                       % (cocuk.pid, makine), yas_dk=300)
    finally:
        cocuk.kill()            # yalnız sınavın KENDİ çocuğu
        cocuk.wait()
    sina("L1", r["rc"] == 3 and r["commit"] == 0 and r["kilit_son"] == r["kilit_ilk"],
         "kilit CANLI PID (5 saat yaşlı) → BAŞLATMAZ, kilit dokunulmadı " + ozet(r))

    olu = subprocess.Popen([sys.executable, "-c", "pass"])
    olu.wait()
    r = kilit_soru("L2", lambda d: "pid=%d | bas=2026-10-10 00:00:00 | makine=%s | argv="
                   % (olu.pid, makine), yas_dk=1)
    sina("L2", r["rc"] == 0 and r["commit"] == 1 and r["kilit_son"] is None,
         "kilit ÖLÜ PID (1 dk yaşlı) → DEVRALIR ve koşar " + ozet(r))

    r = kilit_soru("L3", lambda d: "@@@ bozuk ¿ damga", yas_dk=300)
    sina("L3", r["rc"] == 2 and r["commit"] == 0 and r["kilit_son"] == r["kilit_ilk"]
         and "ÖLÇÜLEMEDİ" in r["log"],
         "kilit BOZUK damga (5 saat) → ÖLÇÜLEMEDİ, başlatmaz " + ozet(r))

    r = kilit_soru("L4", lambda d: "2026-10-10 03:00:00", yas_dk=300)
    sina("L4", r["rc"] == 2 and r["commit"] == 0 and r["kilit_son"] == r["kilit_ilk"],
         "kilit ESKİ BİÇİM (yalnız zaman, 5 saat) → ÖLÇÜLEMEDİ " + ozet(r))

    r = kilit_soru("L5", lambda d: "pid=%d | bas=2026-10-10 00:00:00 | makine=BASKA-MAKINE | argv="
                   % olu.pid, yas_dk=300)
    sina("L5", r["rc"] == 2 and r["commit"] == 0 and "BAŞKA MAKİNE" in r["log"],
         "kilit ölü PID ama BAŞKA MAKİNE → ÖLÇÜLEMEDİ " + ozet(r))

    # L6/L7 — aynı iki karar psutil YOKKEN (tasklist yolu)
    TL = {"SINAV_PSUTIL_YOK": "1"}
    cocuk = subprocess.Popen([sys.executable, "-c", "import time; time.sleep(300)"])
    try:
        r = kilit_soru("L6", lambda d: "pid=%d | bas=x | makine=%s | argv=" % (cocuk.pid, makine),
                       yas_dk=300, ek_env=TL)
    finally:
        cocuk.kill()
        cocuk.wait()
    sina("L6", r["rc"] == 3 and r["commit"] == 0,
         "psutil YOK (tasklist) · CANLI PID → BAŞLATMAZ " + ozet(r))
    r = kilit_soru("L7", lambda d: "pid=%d | bas=x | makine=%s | argv=" % (olu.pid, makine),
                   yas_dk=1, ek_env=TL)
    sina("L7", r["rc"] == 0 and r["commit"] == 1,
         "psutil YOK (tasklist) · ÖLÜ PID → DEVRALIR " + ozet(r))

    # K0b — korumanın kendisi ısırıyor mu: depo DIŞINA salt-okur git çağrısı 97 almalı
    d = depo_kur()
    try:
        io.open(os.path.join(d, "arac", "kacak.py"), "w", encoding="utf-8").write(
            "import subprocess,sys\n"
            "r=subprocess.run(['git','-C',%r,'rev-parse','HEAD'],capture_output=True)\n"
            "sys.exit(r.returncode)\n" % os.path.dirname(d))
        r = kos(d, "kacak.py")
        sina("K0b", r["rc"] == 97 and len(r["kacak"]) == 1,
             "koruma sınandı: depo dışı git → 97, KAÇAK kayda düştü (rc=%s)" % r["rc"])
    finally:
        temizle(d)

    sina("K0", not KACAKLAR,
         "depo dışına git çağrısı: %d (gerçek push hiçbir soruda koşmadı)" % len(KACAKLAR))

    g = sum(1 for _, k in SONUC if k)
    print("SONUÇ: %d/%d geçti" % (g, len(SONUC)))
    return 0 if g == len(SONUC) else 1


if __name__ == "__main__":
    sys.exit(main())
