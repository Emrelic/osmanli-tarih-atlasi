# -*- coding: utf-8 -*-
"""KAPANMA HIZI — acik madde sayisinin zaman icindeki seyri.

"Ne zaman biter" sorusu ancak GERCEK HIZLA cevaplanir. Commit sayisi
ise yaramaz (hukumler TOPLU yaziliyor); olculecek sey ACIK SAYISININ
KENDISI.
"""
import collections
import json
import subprocess
import sys

sys.stdout.reconfigure(encoding="utf-8", errors="replace")

CE = r"C:\Users\emrem\OneDrive\Desktop\ClaudEmre"
ACIK = ("sirada", "olculecek")


def komut(*a):
    return subprocess.run(["git", "-C", CE] + list(a), capture_output=True,
                          text=True, encoding="utf-8", errors="replace",
                          timeout=90).stdout


def olc(commit):
    """O commit'teki acik/toplam madde sayisi."""
    liste = komut("ls-tree", "-r", "--name-only", commit, "kutu/giden/")
    dosyalar = [x for x in liste.splitlines() if x.endswith("CEVAP.json")]
    acik = toplam = 0
    for d in dosyalar:
        ham = komut("show", "%s:%s" % (commit, d))
        if not ham.strip():
            continue
        try:
            j = json.loads(ham)
        except Exception:
            continue
        for v in (j.get("maddeler") or {}).values():
            if not isinstance(v, dict):
                continue
            toplam += 1
            if (v.get("hukum") or "").strip() in ACIK:
                acik += 1
    return acik, toplam, len(dosyalar)


# gun gun: her gunun SON commit'i
satirlar = komut("log", "--since=10 days ago", "--pretty=format:%H %cs").splitlines()
gunun_son = {}
for s in satirlar:
    if " " not in s:
        continue
    h, g = s.split(" ", 1)
    gunun_son.setdefault(g.strip(), h)      # log yeniden eskiye -> ilki EN SON

print("%-12s %6s %7s %7s %8s" % ("gun", "paket", "madde", "ACIK", "kapanan"))
print("-" * 46)
onceki = None
for g in sorted(gunun_son):
    a, t, n = olc(gunun_son[g])
    fark = ("%+d" % (onceki - a)) if onceki is not None else "—"
    print("%-12s %6d %7d %7d %8s" % (g, n, t, a, fark))
    onceki = a
