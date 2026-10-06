# -*- coding: utf-8 -*-
"""TAHTA ULASTI SINAVI — `_git()`in teslim hukmu UZAGI mi olcuyor? (W50, 6 Ekim 2026)

Kusur (KALEM C): push DUSTUGUNDE arac `git log HEAD`e bakip "COMMIT EDILDI —
mesaj ULASMIS" diyordu; HAVVA uc kez mesaji elle push etmek zorunda kaldi.
Sinav GERCEK git fiksturuyle iki yonde koşar: yerel bir BARE uzak + klonlar.

SENARYOLAR (hepsi gecici dizinde kurulur, sonunda silinir):
  S1 push basarili (upstream=main)                       → ULASTI
  S2 push pre-receive hook'la REDDEDILDI                  → ULASMADI
  S3 push reddedildi AMA commit baska bir push'la gitmis  → ULASTI
  S4 push basarili, upstream = makine dali (main DEGIL)   → ULASTI
  S5 TEYIT commit'i reddedildi (M-numarasi uzakta eskiden var) → ULASMADI
  S6 pull --rebase CAKISIR                               → ULASMADI + depo YARIM KALMAZ
  S7 detached HEAD (push hedefi yok)                      → ULASTI DEMEZ
"Dogru" her senaryoda ARACTAN BAGIMSIZ olculur: bare depoda mesaji tasiyan
icerik gercekten var mi (`git --git-dir <bare> log --all`).

KULLANIM:
    py denetim/ARAC-TAHTA-ULASTI-SINAV-1006.py [--tahta <tahta.py>]
  --tahta  sinanacak tahta.py (varsayilan: bu agacin arac/tahta.py'si). BOZUK YON:
           eski surumu verince sinav OTMELI (S2 · S4 · S5 · S6 · S7).
CIKIS: 0 temiz · 1 kusur · 2 olculemedi (fikstur kurulamadi)
"""
import contextlib
import importlib.util
import io
import json
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
spec = importlib.util.spec_from_file_location("tahta_sinanan", TAHTA)
T = importlib.util.module_from_spec(spec)
sys.path.insert(0, os.path.join(KOK, "arac"))
spec.loader.exec_module(T)

for k, v in (("GIT_AUTHOR_NAME", "sinav"), ("GIT_AUTHOR_EMAIL", "sinav@yerel"),
             ("GIT_COMMITTER_NAME", "sinav"), ("GIT_COMMITTER_EMAIL", "sinav@yerel")):
    os.environ[k] = v

HATA, OLCULEMEDI = 0, 0


def git(*a, cwd=None, ok=True):
    r = subprocess.run(["git"] + list(a), cwd=cwd, capture_output=True, text=True,
                       encoding="utf-8", errors="replace")
    if ok and r.returncode != 0:
        raise RuntimeError("git %s → %d: %s" % (" ".join(a), r.returncode, r.stderr.strip()))
    return r


def bare_kur(kok):
    R = os.path.join(kok, "uzak.git")
    git("init", "-q", "--bare", "-b", "main", R)
    git("config", "core.hooksPath", os.path.join(R, "hooks").replace("\\", "/"), cwd=R)
    return R


def ret_hook(R, ac):
    h = os.path.join(R, "hooks", "pre-receive")
    if ac:
        os.makedirs(os.path.dirname(h), exist_ok=True)
        io.open(h, "w", newline="\n").write("#!/bin/sh\necho 'SINAV: push REDDEDILDI' >&2\nexit 1\n")
    elif os.path.exists(h):
        os.remove(h)


def tahta_yaz(A, kayit):
    os.makedirs(os.path.join(A, "oturumlar"), exist_ok=True)
    io.open(os.path.join(A, "oturumlar", "tahta.json"), "w", encoding="utf-8",
            newline="\n").write(json.dumps(kayit, ensure_ascii=False, indent=1) + "\n")
    io.open(os.path.join(A, "oturumlar", "TAHTA.md"), "w", encoding="utf-8",
            newline="\n").write("".join("%s %s\n" % (m["no"], m["mesaj"]) for m in kayit))


def klon_kur(kok, R, ad, dal="main", ilk=False):
    A = os.path.join(kok, ad)
    if ilk:
        git("init", "-q", "-b", "main", A)
        git("remote", "add", "origin", R, cwd=A)
        tahta_yaz(A, [])
        git("add", "--", "oturumlar", cwd=A)
        git("commit", "-q", "-m", "kurulus", cwd=A)
        git("push", "-q", "-u", "origin", "main", cwd=A)
    else:
        git("clone", "-q", R, A)
    if dal != "main":
        git("checkout", "-q", "-b", dal, cwd=A)
        git("push", "-q", "-u", "origin", dal, cwd=A)
    return A


def uzakta_mi(R, isaret):
    """Dogru: bare depoda `isaret` metnini tasiyan tahta.json herhangi bir dalda var mi."""
    r = git("--git-dir", R, "log", "--all", "-p", "--format=", "--",
            "oturumlar/tahta.json", ok=False)
    return isaret in (r.stdout or "")


def gonder(A, baslik):
    T.KOK = A
    out = io.StringIO()
    with contextlib.redirect_stdout(out):
        T._git(None, baslik, "govde")
    return out.getvalue()


def hukum(cikti):
    if "ÖLÇÜLEMEDİ" in cikti:
        return "OLCULEMEDI"
    if "ULAŞMADI" in cikti or "UZAKTA YOK" in cikti:
        return "ULASMADI"
    if "ULAŞMIŞ" in cikti or "HERKESTE" in cikti:
        return "ULASTI"
    return "?"


def sonuc(ad, cikti, dogru, kabul, ek=""):
    global HATA
    h = hukum(cikti)
    ok = h in kabul
    if not ok:
        HATA += 1
    print(("  OK   " if ok else "  HATA ") + "%s | dogru(uzakta)=%s · arac=%s · beklenen=%s%s"
          % (ad, "VAR" if dogru else "YOK", h, "/".join(kabul), (" · " + ek) if ek else ""))
    if not ok:
        for s in cikti.strip().splitlines()[:8]:
            print("         > " + s)


def main():
    global OLCULEMEDI
    print("TAHTA ULASTI SINAVI — sinanan: %s" % TAHTA)
    kok = tempfile.mkdtemp(prefix="tahta_ulasti_")
    try:
        # ---- fikstur 1: main dali ----
        R = bare_kur(kok)
        A = klon_kur(kok, R, "A", ilk=True)
        kayit = [{"no": "M-0001", "mesaj": "S1-ilk"}]
        tahta_yaz(A, kayit)
        c = gonder(A, "TAHTA M-0001 — X -> Y")
        sonuc("S1 push basarili", c, uzakta_mi(R, "S1-ilk"), ("ULASTI",))

        ret_hook(R, True)
        kayit.append({"no": "M-0002", "mesaj": "S2-ret"})
        tahta_yaz(A, kayit)
        c = gonder(A, "TAHTA M-0002 — X -> Y")
        sonuc("S2 push REDDEDILDI", c, uzakta_mi(R, "S2-ret"), ("ULASMADI",))

        # S3: baska bir oturum ayni depodan push etti (hook o an kapali), sonra
        # baska bir oturumun ilgisiz commit'i yerelde; bizim push'umuz duser.
        ret_hook(R, False)
        git("push", "-q", cwd=A)
        ret_hook(R, True)
        io.open(os.path.join(A, "ilgisiz.txt"), "w").write("x\n")
        git("add", "--", "ilgisiz.txt", cwd=A)
        git("commit", "-q", "-m", "ilgisiz", cwd=A)
        c = gonder(A, "TAHTA M-0002 — X -> Y")
        sonuc("S3 ret ama baska push tasimis", c, uzakta_mi(R, "S2-ret"), ("ULASTI",))

        kayit[1]["teyit"] = "S5-teyit"
        tahta_yaz(A, kayit)
        c = gonder(A, "TAHTA M-0002 TEYIT — X")
        sonuc("S5 TEYIT reddedildi", c, uzakta_mi(R, "S5-teyit"), ("ULASMADI",))
        ret_hook(R, False)

        # ---- fikstur 2: makine dali ----
        R2 = bare_kur(os.path.join(kok, "f2"))
        klon_kur(os.path.join(kok, "f2"), R2, "A", ilk=True)
        B = klon_kur(os.path.join(kok, "f2"), R2, "B", dal="makine/sinav")
        tahta_yaz(B, [{"no": "M-0001", "mesaj": "S4-makine"}])
        c = gonder(B, "TAHTA M-0001 — X -> Y")
        sonuc("S4 makine dalina push", c, uzakta_mi(R2, "S4-makine"), ("ULASTI",))

        # ---- fikstur 3: pull --rebase cakismasi ----
        k3 = os.path.join(kok, "f3")
        R3 = bare_kur(k3)
        A3 = klon_kur(k3, R3, "A", ilk=True)
        B3 = klon_kur(k3, R3, "B")
        tahta_yaz(B3, [{"no": "M-0001", "mesaj": "S6-oteki-makine"}])
        git("commit", "-q", "-am", "B", cwd=B3)
        git("push", "-q", cwd=B3)
        tahta_yaz(A3, [{"no": "M-0001", "mesaj": "S6-bizim"}])
        c = gonder(A3, "TAHTA M-0001 — X -> Y")
        T.KOK = A3
        yarim = T._git_yarim()
        sonuc("S6 pull --rebase cakisti", c, uzakta_mi(R3, "S6-bizim"), ("ULASMADI",),
              "depo yarim: %s" % (yarim or "HAYIR"))
        if yarim:
            global HATA
            HATA += 1
            print("  HATA S6 depo REBASE ORTASINDA BIRAKILDI: %s" % yarim)
            git("rebase", "--abort", cwd=A3, ok=False)

        # ---- fikstur 4: detached HEAD ----
        k4 = os.path.join(kok, "f4")
        R4 = bare_kur(k4)
        A4 = klon_kur(k4, R4, "A", ilk=True)
        git("checkout", "-q", "--detach", cwd=A4)
        tahta_yaz(A4, [{"no": "M-0001", "mesaj": "S7-detached"}])
        c = gonder(A4, "TAHTA M-0001 — X -> Y")
        sonuc("S7 detached HEAD", c, uzakta_mi(R4, "S7-detached"), ("ULASMADI", "OLCULEMEDI"))
    except Exception as e:
        OLCULEMEDI += 1
        print("  OLCULEMEDI fikstur: %s: %s" % (type(e).__name__, e))
    finally:
        shutil.rmtree(kok, ignore_errors=True)
    print("SONUC: %s · hata %d · olculemedi %d"
          % ("temiz" if not (HATA or OLCULEMEDI) else ("KUSUR" if HATA else "OLCULEMEDI"),
             HATA, OLCULEMEDI))
    return 1 if HATA else (2 if OLCULEMEDI else 0)


if __name__ == "__main__":
    sys.exit(main())
