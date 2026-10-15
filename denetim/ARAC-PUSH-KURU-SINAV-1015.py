# ARAC-PUSH-KURU-SINAV-1015 — `push_kapisi.py --kuru` ağacı DEĞİŞTİRMEMELİ, gerçek kip DEĞİŞTİRMELİ.
# Vaka (15 Ekim 2026, KOŞU 25): kuru --autostash rebase'i kalıcı bıraktı, HEAD sessizce değişti.
# Geçici depoda (yerel bare origin) koşar; kilit/ölçüm sahte, rebase + push GERÇEK git'tir.
#   py denetim/ARAC-PUSH-KURU-SINAV-1015.py     · çıkış 0 hepsi tuttu · 1 çürüdü
import os, sys, subprocess, tempfile, shutil
sys.stdout.reconfigure(encoding="utf-8", errors="replace")
sys.path.insert(0, os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), "arac"))
import push_kapisi as pk

SONUC = []


def sina(ad, kosul, ayrinti=""):
    SONUC.append(bool(kosul))
    print(("  ✓ " if kosul else "  ✗ ") + ad + ("  · " + ayrinti if ayrinti else ""))


def g(cwd, *a):
    return subprocess.run(["git", *a], cwd=cwd, capture_output=True, text=True,
                          encoding="utf-8").stdout.strip()


def depo():
    """bare origin + iki klon: 'ben' (1 yerel commit + kirli dosya) · 'o' (origin'i ilerletir)."""
    kok = tempfile.mkdtemp(prefix="pk-sinav-")
    bare = os.path.join(kok, "origin.git")
    subprocess.run(["git", "init", "-q", "--bare", "-b", "main", bare], check=True)
    ben, o = os.path.join(kok, "ben"), os.path.join(kok, "o")
    for d in (ben, o):
        subprocess.run(["git", "clone", "-q", bare, d], check=True, capture_output=True)
        g(d, "config", "user.email", "s@s"); g(d, "config", "user.name", "s")
    open(os.path.join(o, "a.txt"), "w").write("1\n")
    g(o, "add", "a.txt"); g(o, "commit", "-qm", "ilk"); g(o, "push", "-q", "origin", "HEAD:main")
    g(ben, "pull", "-q", "origin", "main")
    open(os.path.join(ben, "b.txt"), "w").write("benim\n")
    g(ben, "add", "b.txt"); g(ben, "commit", "-qm", "benim")
    open(os.path.join(o, "c.txt"), "w").write("onların\n")
    g(o, "add", "c.txt"); g(o, "commit", "-qm", "onlarin"); g(o, "push", "-q", "origin", "HEAD:main")
    open(os.path.join(ben, "a.txt"), "w").write("kirli\n")          # takipli, yazılmamış
    return kok, ben, bare


# Sahte: kilit, ölçüm, üretilmiş dosya yenileme (rebase ve push GERÇEK)
pk.kilit_bekle = lambda *a, **k: 0
pk._kilit = lambda *a: subprocess.CompletedProcess(a, 0, "", "")
pk.olc = lambda *a, **k: None
pk.dosya_denetimi = lambda *a, **k: None
pk.uretilmisleri_yenile = lambda: 0


def kos(ben, kuru):
    pk.KOK = ben
    arg = ["--kim", "SINAV", "--autostash"] + (["--kuru"] if kuru else [])
    return pk.main(arg)


print("YÖN 1 — --kuru: HEAD aynı kalır, yerel değişiklik korunur, origin değişmez")
kok, ben, bare = depo()
once, o_once = g(ben, "rev-parse", "HEAD"), g(bare, "rev-parse", "main")
c = kos(ben, True)
sina("kuru çıkış 0", c == 0, str(c))
sina("HEAD kurudan önceki commit", g(ben, "rev-parse", "HEAD") == once,
     f"{once[:9]} → {g(ben, 'rev-parse', 'HEAD')[:9]}")
sina("kirli dosya korundu", open(os.path.join(ben, "a.txt")).read() == "kirli\n")
sina("origin itilmedi", g(bare, "rev-parse", "main") == o_once)
sina("rebase yarım kalmadı", not any(os.path.isdir(os.path.join(ben, ".git", d))
                                     for d in ("rebase-merge", "rebase-apply")))
shutil.rmtree(kok, ignore_errors=True)

print("YÖN 2 — gerçek kip: rebase KALIR ve push gider")
kok, ben, bare = depo()
once = g(ben, "rev-parse", "HEAD")
c = kos(ben, False)
yeni = g(ben, "rev-parse", "HEAD")
sina("gerçek çıkış 0", c == 0, str(c))
sina("HEAD değişti (rebase kaldı)", yeni != once, f"{once[:9]} → {yeni[:9]}")
sina("origin/main = HEAD (push gitti)", g(bare, "rev-parse", "main") == yeni)
sina("onların commit'i tabanda", "onlarin" in g(ben, "log", "--format=%s"))
sina("kirli dosya korundu", open(os.path.join(ben, "a.txt")).read() == "kirli\n")
shutil.rmtree(kok, ignore_errors=True)

print("SONUÇ: %d/%d" % (sum(SONUC), len(SONUC)))
sys.exit(0 if all(SONUC) else 1)
