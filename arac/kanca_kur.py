# -*- coding: utf-8 -*-
"""git kancalarını kurar: `core.hooksPath = arac/git-kancalar` (bir kez, makine başına).

    py arac/kanca_kur.py          # kur (idempotent)
    py arac/kanca_kur.py --durum  # kurulu mu?
    py arac/kanca_kur.py --kaldir

Ayar ortak git yapılandırmasındadır ⇒ bu depodaki TÜM worktree'ler için geçerlidir.
Yol göreli olduğundan her worktree kendi arac/git-kancalar/ kopyasını kullanır
(o dosyaların bulunmadığı eski bir commit'te kanca sessizce çalışmaz).
Kancalar makineye özeldir: başka makinede de bir kez çalıştırılmalıdır.
"""
import os, subprocess, sys

sys.stdout.reconfigure(encoding="utf-8")
KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
HEDEF = "arac/git-kancalar"


def git(*a):
    return subprocess.run(["git", *a], cwd=KOK, capture_output=True, text=True,
                          encoding="utf-8", errors="replace")


def mevcut():
    return git("config", "--get", "core.hooksPath").stdout.strip()


def main(argv):
    if "--durum" in argv:
        m = mevcut()
        print("core.hooksPath = %r — %s" % (m, "KURULU" if m == HEDEF else "KURULU DEĞİL"))
        return 0 if m == HEDEF else 1
    if "--kaldir" in argv:
        git("config", "--unset", "core.hooksPath")
        print("kaldırıldı")
        return 0
    m = mevcut()
    if m and m != HEDEF:
        print("⚠️  core.hooksPath zaten %r — başka kanca düzeni ezilmedi. Elle karar ver." % m)
        return 2
    if not os.path.isfile(os.path.join(KOK, HEDEF, "pre-push")):
        print("✗ %s/pre-push yok — bu ağaçta kanca dosyaları eksik" % HEDEF)
        return 2
    git("update-index", "--chmod=+x", HEDEF + "/pre-push")
    r = git("config", "core.hooksPath", HEDEF)
    if r.returncode != 0:
        print("✗ ayarlanamadı: " + r.stderr.strip())
        return 2
    print("✓ core.hooksPath = %s (tüm worktree'ler için)" % HEDEF)
    return 0


if __name__ == "__main__":
    sys.exit(main(sys.argv[1:]))
