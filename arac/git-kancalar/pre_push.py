# -*- coding: utf-8 -*-
"""pre-push kancası: itilen dosyalarda çözülmemiş git çatışma işareti varsa push'u durdurur.

`push_kapisi.py` ile AYNI tarama (`cakisma_isareti_tara`); fark: kapıyı atlayıp doğrudan
`git push` yapanı da yakalar. Kapı yine ana yoldur (denetle + denetle_yayin da orada).
Tarama kendisi çalışamazsa push ENGELLENMEZ ama uyarı basılır (ölçülemedi ≠ temiz).
Bilerek atlamak: git push --no-verify.

git stdin'e her itilen ref için bir satır verir:
    <local ref> <local sha> <remote ref> <remote sha>
"""
import os, subprocess, sys

sys.stdout.reconfigure(encoding="utf-8")
sys.stderr.reconfigure(encoding="utf-8")
sys.path.insert(0, os.path.join(os.path.dirname(os.path.abspath(__file__)), ".."))
SIFIR = "0" * 40
BOS_AGAC = "4b825dc642cb6eb9a060e54bf8d69288fbbc2808"  # git'in boş ağaç nesnesi


def git(*a, cwd):
    return subprocess.run(["git", *a], cwd=cwd, capture_output=True, text=True,
                          encoding="utf-8", errors="replace")


def main():
    import push_kapisi as pk
    cwd = os.getcwd()
    kotu = []
    for satir in sys.stdin.read().splitlines():
        p = satir.split()
        if len(p) != 4:
            continue
        yerel, uzak = p[1], p[3]
        if set(yerel) == {"0"}:
            continue  # ref siliniyor
        if set(uzak) != {"0"}:
            taban = uzak
        else:  # yeni dal: origin/main ile ortak atadan; o da yoksa bütün ağaç
            mb = git("merge-base", "origin/main", yerel, cwd=cwd)
            taban = mb.stdout.strip() if mb.returncode == 0 and mb.stdout.strip() else BOS_AGAC
        # uzak sha yerelde yoksa (başkası itmiş, fetch edilmemiş) git itmeyi zaten reddeder
        d = git("diff", "--name-only", "--diff-filter=d", taban, yerel, cwd=cwd)
        if d.returncode != 0:
            print("pre-push: fark okunamadı (%s..%s) — TARAMA YAPILAMADI" % (taban[:8], yerel[:8]),
                  file=sys.stderr)
            continue
        dosyalar = [f for f in d.stdout.splitlines() if f]
        try:
            pk.cakisma_isareti_tara(dosyalar, rev=yerel, cwd=cwd)
        except pk.Red as e:
            kotu.append("%s → %s\n   %s" % (p[0], p[2], e))
    if kotu:
        print("\n🔴 PRE-PUSH: push DURDURULDU\n" + "\n".join(kotu) +
              "\n   Çöz, commit et, yeniden it. (bilerek atlamak: git push --no-verify)", file=sys.stderr)
        return 1
    return 0


if __name__ == "__main__":
    try:
        sys.exit(main())
    except SystemExit:
        raise
    except Exception as e:  # kanca kendi arızasıyla push'u kilitlemesin ama sessiz de kalmasın
        print("pre-push: tarama ÇALIŞMADI (%s: %s) — ölçülemedi ≠ temiz" % (type(e).__name__, e),
              file=sys.stderr)
        sys.exit(0)
