import sys, os, json, re, subprocess
KOK = r"C:\atlas\.claude\worktrees\umit21-osm5"
sys.path.insert(0, os.path.join(KOK, "arac"))
import ceviri as C

def git(*a):
    return subprocess.run(["git", *a], cwd=KOK, capture_output=True, text=True, encoding="utf-8", errors="replace").stdout

def oku(ref, dil, tur):
    d = re.compile(r"^data/ceviri_%s_%s(_\d+)?\.js$" % (dil, tur))
    kayit = {}
    for ad in git("ls-tree", "--name-only", ref, "data/").split():
        if not d.match(ad): continue
        m = git("show", "%s:%s" % (ref, ad)); g = m[m.index("Ceviri.ekle("):]
        o = C.ONEK.match(g)
        kayit.update(json.loads(g[o.end():g.rstrip().rindex(")")]))
    return kayit
