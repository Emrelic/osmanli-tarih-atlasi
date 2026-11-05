"""FAZ 3: origin'deki bütün dallar için kasa-1105-toplama'ya (main + FAZ 1) göre içerik ölçümü.
Ölçüt: git cherry (+ = patch-id olarak hedefte yok) ve bu + commit'lerin dokunduğu dosyaların
hedefteki içerikten farkı. Merge etmez, silmez."""
import subprocess, sys, collections
sys.stdout.reconfigure(encoding="utf-8")
HEDEF = sys.argv[1] if len(sys.argv) > 1 else "origin/kasa-1105-toplama"
CIKTI = sys.argv[2]
def g(*a):
    return subprocess.run(["git", *a], capture_output=True, text=True, encoding="utf-8").stdout.strip()
dallar = [x.strip() for x in g("branch", "-r", "--format=%(refname:short)").splitlines()
          if x.strip().startswith("origin/") and x.strip() not in ("origin/HEAD", "origin/main", HEDEF, "origin")]
satirlar = []
for d in sorted(dallar):
    ileri = int(g("rev-list", "--count", HEDEF + ".." + d) or 0)
    if ileri == 0:
        satirlar.append((d, 0, 0, 0, "", "", "ICINDE")); continue
    ch = g("cherry", HEDEF, d).splitlines()
    arti = [x[2:] for x in ch if x.startswith("+")]
    son = g("log", "-1", "--format=%ad|%an|%s", "--date=short", d)
    # + commit'lerin dosyaları ve hedefle fark eden dosyalar (içerik zaten hedefte mi?)
    dosyalar = set()
    for c in arti:
        dosyalar.update(g("diff-tree", "--no-commit-id", "--name-only", "-r", c).splitlines())
    fark = [f for f in dosyalar if f and g("diff", "--name-only", HEDEF, d, "--", f)]
    veri = [f for f in fark if f.startswith(("data/", "arac/", "js/", "css/", "index.html"))
            and not f.startswith("data/paket_")]
    tuz = [f for f in fark if f in ("arac/uret_petek.py", "arac/renkler.py", "arac/girdi.py", "arac/motor_onbellek.py")]
    if not arti:
        durum = "ICERIK-ICINDE (patch-id)"
    elif not fark:
        durum = "ICERIK-ICINDE (dosya ayni)"
    elif veri:
        durum = "GERCEK-IS? veri/kod farki"
    else:
        durum = "yalniz denetim/belge farki"
    satirlar.append((d, ileri, len(arti), len(fark), ",".join(sorted(veri)[:8]) + (" …" if len(veri) > 8 else "")
                     + (" TUZ:" + ",".join(tuz) if tuz else ""), son[:120], durum))
    print(d, ileri, len(arti), len(fark), durum, flush=True)
with open(CIKTI, "w", encoding="utf-8", newline="\n") as f:
    f.write("dal\tileri\tcherry_arti\tfark_dosya\tveri_kod_dosyalari\tson_commit\tdurum\n")
    for s in satirlar:
        f.write("\t".join(str(x) for x in s) + "\n")
print(collections.Counter(s[-1] for s in satirlar))
