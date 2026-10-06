# -*- coding: utf-8 -*-
u"""SESSIZ-SIFIR-TARA-KAPI-SINAV-1006 — taramanın SERT KAPISI, İKİ YÖNDE, GERÇEK git ile.

    py denetim/SESSIZ-SIFIR-TARA-KAPI-SINAV-1006.py      çıkış 0 geçti · 1 kaldı · 2 ölçülemedi

Yapay durum yok: ana depo, geçici bir `git worktree add --detach … HEAD` (temiz), aynı
ağacın kirletilmişi ve bayraksız çağrı GERÇEKTEN kurulur. Geçici ağaç sistemin geçici
dizininde açılır ve sonda kaldırılır; depoda iz bırakmaz (ref yazılmaz, --detach).
⚠️ Pozitif yön, aracın HEAD'de (commitlenmiş) olmasını ister — commitlenmemiş bir
ağaçta koşturulursa pozitif dallar "ölçülemedi" olur ve sınav 2 verir (temiz değil).
"""
import importlib.util
import os
import shutil
import subprocess
import sys
import tempfile

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
ARAC = "denetim/SESSIZ-SIFIR-TARA-1006.py"
GECTI = KALDI = OLCULEMEDI = 0


def sina(ad, sart, detay=""):
    global GECTI, KALDI
    if sart:
        GECTI += 1
        print("  ✓ " + ad)
    else:
        KALDI += 1
        print("  ✗ " + ad + ("  — " + detay if detay else ""))


def olculemedi(ad, neden):
    global OLCULEMEDI
    OLCULEMEDI += 1
    print("  ⚫ ÖLÇÜLEMEDİ — %s: %s" % (ad, neden))


def git(kok, *arg):
    return subprocess.run(["git", "-C", kok] + list(arg), capture_output=True, text=True,
                          encoding="utf-8", errors="replace")


if __name__ == "__main__":
    if hasattr(sys.stdout, "reconfigure"):
        sys.stdout.reconfigure(encoding="utf-8", errors="replace")
    spec = importlib.util.spec_from_file_location("tara", os.path.join(KOK, ARAC))
    T = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(T)

    print("① ANA DEPO — kapı KAPANMALI")
    ana = next(l[9:] for l in git(KOK, "worktree", "list", "--porcelain").stdout.splitlines()
               if l.startswith("worktree "))
    n = T.kapi(ana, True)
    sina("ana depoda (%s) '① ANA DEPO' nedeni var" % ana, any(x.startswith("①") for x in n), str(n))

    tmp = tempfile.mkdtemp(prefix="w32kapi-")
    agac = os.path.join(tmp, "agac")
    try:
        r = git(KOK, "worktree", "add", "--detach", agac, "HEAD")
        if r.returncode != 0:
            olculemedi("geçici worktree", r.stderr.strip()[:160])
        else:
            arac_headde = os.path.exists(os.path.join(agac, ARAC))
            print("\n② GEÇİCİ TEMİZ WORKTREE (HEAD %s) — araç HEAD'de: %s"
                  % (git(agac, "rev-parse", "--short", "HEAD").stdout.strip(), arac_headde))
            if not arac_headde:
                olculemedi("pozitif dallar", "araç HEAD'de yok (commitlenmemiş) — "
                           "kapının 'temiz' yönü ölçülemez")
            else:
                sina("+ temiz + bayraklı → engel YOK", T.kapi(agac, True) == [], str(T.kapi(agac, True)))
                n = T.kapi(agac, False)
                sina("− bayraksız → yalnız '③' nedeni", len(n) == 1 and n[0].startswith("③"), str(n))
                p = subprocess.run([sys.executable, os.path.join(agac, ARAC), "--kapi", "--atilabilir-agac"],
                                   cwd=agac, capture_output=True, text=True, encoding="utf-8")
                sina("+ CLI --kapi temiz ağaçta çıkış 0", p.returncode == 0, "çıkış %s %s" % (p.returncode, p.stdout[:120]))

            print("\n③ KİRLETİLMİŞ WORKTREE — kapı KAPANMALI ve HİÇBİR ŞEY YAZMAMALI")
            if not arac_headde:
                shutil.copy(os.path.join(KOK, ARAC), os.path.join(agac, ARAC))   # kopya da kirletir
            with open(os.path.join(agac, "denetim", "_w32_kirlilik.txt"), "w") as f:
                f.write("x")
            n = T.kapi(agac, True)
            sina("− kirli + bayraklı → '②' nedeni", any(x.startswith("②") for x in n), str(n))
            cikti = os.path.join(tmp, "cikti")
            once = git(agac, "status", "--porcelain").stdout
            p = subprocess.run([sys.executable, os.path.join(agac, ARAC), "--cikti", cikti, "--atilabilir-agac"],
                               cwd=agac, capture_output=True, text=True, encoding="utf-8")
            sina("− CLI tarama kirli ağaçta çıkış 2", p.returncode == 2, "çıkış %s" % p.returncode)
            sina("− çıktı dizini YARATILMADI", not os.path.exists(cikti))
            sina("− ağaçta yeni değişiklik YOK (hiçbir betik koşmadı)",
                 git(agac, "status", "--porcelain").stdout == once)
            sina("− neden adıyla basıldı", "② ağaç TEMİZ DEĞİL" in p.stdout, p.stdout[:160])
    finally:
        git(KOK, "worktree", "remove", "--force", agac)
        shutil.rmtree(tmp, ignore_errors=True)

    print("\n④ GİT OKUNAMAZ — kapı açık SAYILMAZ")
    yok = tempfile.mkdtemp(prefix="w32gitsiz-")
    try:
        n = T.kapi(yok, True)
        sina("− git deposu olmayan dizin → 'ölçülemedi' nedeni", any("ölçülemedi" in x for x in n), str(n))
    finally:
        shutil.rmtree(yok, ignore_errors=True)

    print("\nSONUÇ: %d geçti · %d kaldı · %d ölçülemedi" % (GECTI, KALDI, OLCULEMEDI))
    sys.exit(1 if KALDI else (2 if OLCULEMEDI else 0))
