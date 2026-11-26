# -*- coding: utf-8 -*-
"""TAHTA GIT-YARIM SINAVI — `_git_yarim()` uc hal, dort depo bicimi, iki yonde.

W36 (6 Ekim 2026, koordinator karari). Kapinin iki kor noktasi:
  ① WORKTREE  `KOK/.git` worktree'de DOSYADIR; eski kapi orada hicbir yarim
              islemi gormuyordu.
  ② KABUK     rebase dizini var, imzasi yok (24 Eylul kabugu: icinde YALNIZ
              `autostash`, icerigi `d33e2879`). Yazimi engellemez ama SESSIZ
              gecilmez — ADIYLA basilir.
Haller: SURUYOR (yazim reddedilir) · KABUK (adiyla basilir, yazim serbest) · YOK.

FIKSTURLER — hepsi GERCEK git deposu, gecici dizinde kurulur ve silinir:
  duz depo · ayni deponun worktree'si · 24 Eylul kabugunun KOPYASI (asil kabuk
  artik yok: yerine bugunku canli rebase kuruldu; icerigi `697c6d32`nin kaydindan)
  · git'siz dizin. Ve CANLI: `--canli <depo>` verilirse o deponun GERCEK hali
  SALT OKUNUR (hicbir dosyasina dokunulmaz) — EMRELIC `C:\\atlas` 6 Ekim'de
  rebase ortasinda (onto/orig-head/head-name dolu, git-rebase-todo bos).

KULLANIM:
    py denetim/ARAC-TAHTA-GIT-YARIM-SINAV-1006.py [--tahta <tahta.py>] [--canli <depo>]
  --tahta  sinanacak tahta.py (varsayilan: bu agacin arac/tahta.py'si). Bozuk yon:
           eski surumu verince sinav OTMELI.
CIKIS: 0 temiz · 1 kusur · 2 olculemedi (fikstur kurulamadi / canli rebase yok)
"""
import contextlib
import importlib.util
import io
import os
import shutil
import subprocess
import sys
import tempfile

sys.stdout.reconfigure(encoding="utf-8", errors="replace")
KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))


def _arg(ad):
    if ad in sys.argv:
        i = sys.argv.index(ad)
        if i + 1 < len(sys.argv):
            return sys.argv[i + 1]
    return None


TAHTA = _arg("--tahta") or os.path.join(KOK, "arac", "tahta.py")
CANLI = _arg("--canli")

spec = importlib.util.spec_from_file_location("tahta_sinanan", TAHTA)
T = importlib.util.module_from_spec(spec)
sys.path.insert(0, os.path.join(KOK, "arac"))
spec.loader.exec_module(T)

HATA, OLCULEMEDI = 0, 0


def sonuc(ok, baslik, detay=""):
    global HATA
    print(("  OK   " if ok else "  HATA ") + baslik + ((" | " + detay) if detay else ""))
    if not ok:
        HATA += 1


def kapi(kok):
    """Kapiyi `kok` deposunda sor: (donen, basilan_metin). Iki surumde de ayni yol."""
    eski = T.KOK
    T.KOK = kok
    tampon = io.StringIO()
    try:
        with contextlib.redirect_stdout(tampon):
            d = T._git_yarim()
    finally:
        T.KOK = eski
    return d, tampon.getvalue()


def git(*a, cwd=None):
    return subprocess.run(["git"] + list(a), cwd=cwd, capture_output=True,
                          text=True, encoding="utf-8", errors="replace")


def gitdir(kok):
    r = git("-C", kok, "rev-parse", "--absolute-git-dir")
    return os.path.normpath(r.stdout.strip())


print("=" * 76)
print("TAHTA GIT-YARIM SINAVI — sinanan: %s" % os.path.relpath(TAHTA, KOK))
print("=" * 76)

TMP = tempfile.mkdtemp(prefix="w36-gityarim-")
try:
    DUZ = os.path.join(TMP, "duz")
    WT = os.path.join(TMP, "agac")
    GITSIZ = os.path.join(TMP, "gitsiz")
    os.makedirs(DUZ); os.makedirs(GITSIZ)
    kur = [git("init", "-q", DUZ),
           git("-C", DUZ, "-c", "user.name=s", "-c", "user.email=s@s",
               "commit", "-q", "--allow-empty", "-m", "fikstur"),
           git("-C", DUZ, "worktree", "add", "-q", "--detach", WT)]
    if any(r.returncode for r in kur) or not os.path.isfile(os.path.join(WT, ".git")):
        print("OLCULEMEDI — fikstur kurulamadi: %s" % " · ".join(
            (r.stderr or "").strip()[:80] for r in kur if r.returncode))
        sys.exit(2)
    G_DUZ, G_WT = gitdir(DUZ), gitdir(WT)

    def fikstur(gd, yol, icerik=""):
        tam = os.path.join(gd, yol)
        os.makedirs(os.path.dirname(tam), exist_ok=True)
        io.open(tam, "w", encoding="utf-8").write(icerik)
        return tam

    def temizle(gd):
        for ad in ("rebase-merge", "rebase-apply"):
            shutil.rmtree(os.path.join(gd, ad), ignore_errors=True)
        for ad in ("MERGE_HEAD", "CHERRY_PICK_HEAD"):
            p = os.path.join(gd, ad)
            if os.path.exists(p):
                os.remove(p)

    print("-- YOK yonu (temiz depoda kapi SUSAR, bir sey basmaz)")
    for ad, kok in (("duz depo", DUZ), ("worktree", WT)):
        d, m = kapi(kok)
        sonuc(d is None and "KABUK" not in m, "YOK · %s temiz" % ad, "donen %r" % d)

    print("-- SURUYOR yonu (yazim REDDEDILIR)")
    for ad, kok, gd in (("duz depo", DUZ, G_DUZ), ("worktree", WT, G_WT)):
        for yol, beklenen in (("rebase-merge/git-rebase-todo", "rebase"),
                              ("rebase-merge/orig-head", "rebase"),
                              ("rebase-apply/next", "rebase"),
                              ("MERGE_HEAD", "merge"),
                              ("CHERRY_PICK_HEAD", "cherry-pick")):
            fikstur(gd, yol, "0" * 40 + "\n")
            d, m = kapi(kok)
            temizle(gd)
            sonuc(d is not None and beklenen in d,
                  "SURUYOR · %s · %s" % (ad, yol), "donen %r" % d)

    print("-- KABUK yonu (24 Eylul kabugunun KOPYASI: yalniz `autostash` = d33e2879)")
    for ad, kok, gd in (("duz depo", DUZ, G_DUZ), ("worktree", WT, G_WT)):
        for dizin in ("rebase-merge", "rebase-apply"):
            fikstur(gd, dizin + "/autostash", "d33e2879\n")
            d, m = kapi(kok)
            sonuc(d is None, "KABUK · %s · %s yazimi ENGELLEMEZ" % (ad, dizin), "donen %r" % d)
            sonuc("KABUK" in m and dizin in m and "autostash" in m,
                  "KABUK · %s · %s ADIYLA basildi" % (ad, dizin),
                  "basilan %r" % m.strip()[:90])
            temizle(gd)
        os.makedirs(os.path.join(gd, "rebase-merge"))
        d, m = kapi(kok)
        sonuc(d is None and "KABUK" in m and "BO" in m,
              "KABUK · %s · BOS rebase-merge adiyla" % ad, "basilan %r" % m.strip()[:90])
        temizle(gd)

    print("-- OLCULEMEDI yonu (git dizini yok ⇒ temiz SAYILMAZ)")
    d, m = kapi(GITSIZ)
    sonuc(d is not None, "git'siz dizinde kapi KAPALIYA duser", "donen %r" % d)

    print("-- IZ (fikstur sonrasi depolar yine temiz)")
    for ad, kok in (("duz depo", DUZ), ("worktree", WT)):
        d, m = kapi(kok)
        sonuc(d is None and not m.strip(), "IZ · %s" % ad, "donen %r" % d)

    if CANLI:
        print("-- CANLI (SALT OKUMA): %s" % CANLI)
        gd = gitdir(CANLI)
        rm = os.path.join(gd, "rebase-merge")
        once = sorted(os.listdir(rm)) if os.path.isdir(rm) else None
        if not once or not any(os.path.exists(os.path.join(rm, i))
                               for i in ("git-rebase-todo", "orig-head")):
            print("  OLCULEMEDI — canli depoda suren rebase YOK (rebase-merge: %r)" % once)
            OLCULEMEDI += 1
        else:
            d, m = kapi(CANLI)
            sonra = sorted(os.listdir(rm))
            sonuc(d is not None and "rebase" in d, "CANLI rebase SURUYOR sayildi",
                  "donen %r · imzalar %s" % (d, [i for i in ("git-rebase-todo", "orig-head",
                                                           "onto", "head-name") if i in once]))
            sonuc(once == sonra, "CANLI depoya DOKUNULMADI", "%d dosya once = sonra" % len(once))
finally:
    git("-C", DUZ, "worktree", "remove", "--force", WT) if os.path.isdir(WT) else None
    # Windows'ta git nesneleri SALT OKUNUR: ignore_errors=True burada SESSIZCE
    # basarisiz olup %TEMP%'te fikstur birakiyordu (W36c'de 4 kalinti olculdu).
    shutil.rmtree(TMP, onerror=lambda f, p, e: (os.chmod(p, 0o700), f(p)))
    if os.path.exists(TMP):
        print("  UYARI fikstur dizini SILINEMEDI: %s" % TMP)

print("-" * 76)
if HATA:
    print("SONUC: %d KUSUR" % HATA)
    sys.exit(1)
if OLCULEMEDI:
    print("SONUC: OLCULEMEDI (%d soru) — temiz DEGILDIR" % OLCULEMEDI)
    sys.exit(2)
print("SONUC: temiz")
sys.exit(0)
