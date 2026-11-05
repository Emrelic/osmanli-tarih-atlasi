"""FAZ 3 inceltme: her dalın cherry(+) commit'lerinin yamasını, üretilmiş dosyalar hariç, hedef ağaca
karşı dene (geçici index; çalışma ağacına dokunmaz):
  geri uygulanıyor  -> değişiklik hedefte VAR
  ileri uygulanıyor -> değişiklik hedefte YOK (gerçek eksik iş)
  ikisi de değil    -> üzerinden geçilmiş / çakışan (göz gerekir)
"""
import csv, os, subprocess, sys, collections
sys.stdout.reconfigure(encoding="utf-8")
HEDEF, GIRDI, CIKTI = sys.argv[1], sys.argv[2], sys.argv[3]
idx = os.path.join(os.environ["TEMP"], "kasa_pazar_faz3_index")
env = dict(os.environ, GIT_INDEX_FILE=idx)
HARIC = [":!data/paket_*", ":!index.html", ":!data/donemler.js", ":!data/devletler_harita.js", ":!data/bolgeler.js",
         ":!data/altlik.js", ":!data/devirler.js", ":!data/devlet_harita_ust.js", ":!data/devlet_parcalar.js",
         ":!data/donem_parcalar.js", ":!data/*_parca*.js", ":!data/paket_kunye.json"]
def g(*a, inp=None, e=None):
    return subprocess.run(["git", *a], capture_output=True, text=True, encoding="utf-8", input=inp, env=e)
g("read-tree", HEDEF, e=env)
rows = list(csv.DictReader(open(GIRDI, encoding="utf-8"), delimiter="\t"))
out = []
for r in rows:
    if not r["durum"].startswith("GERCEK"):
        continue
    d = r["dal"]
    arti = [x[2:] for x in g("cherry", HEDEF, d).stdout.splitlines() if x.startswith("+")]
    say = collections.Counter(); eksik_dosya = set(); ornek = []
    for c in arti:
        yama = g("diff", c + "^", c, "--", ".", *HARIC).stdout
        if not yama.strip():
            say["bos(uretilmis)"] += 1; continue
        if g("apply", "--cached", "--check", "-R", "-", inp=yama, e=env).returncode == 0:
            say["VAR"] += 1
        elif g("apply", "--cached", "--check", "-", inp=yama, e=env).returncode == 0:
            say["YOK"] += 1
            eksik_dosya.update(g("diff", "--name-only", c + "^", c, "--", ".", *HARIC).stdout.split())
            ornek.append(g("log", "-1", "--format=%h %ad %s", "--date=short", c).stdout.strip()[:110])
        else:
            say["CAKISIK"] += 1
            ornek.append("~" + g("log", "-1", "--format=%h %ad %s", "--date=short", c).stdout.strip()[:110])
    hukum = ("EKSIK-IS" if say["YOK"] else "GOZ-GEREK (cakisik)" if say["CAKISIK"] else "ICINDE (yama)")
    out.append([d, r["ileri"], len(arti), say["VAR"], say["YOK"], say["CAKISIK"], say["bos(uretilmis)"], hukum,
                ",".join(sorted(eksik_dosya))[:300], " | ".join(ornek)[:600], r["son_commit"]])
    print(d, dict(say), hukum, flush=True)
os.remove(idx)
with open(CIKTI, "w", encoding="utf-8", newline="\n") as f:
    f.write("dal\tileri\tcherry_arti\tVAR\tYOK\tCAKISIK\tbos\thukum\teksik_dosyalar\tornek_commitler\tson_commit\n")
    for o in out:
        f.write("\t".join(str(x).replace("\t", " ") for x in o) + "\n")
print(collections.Counter(o[7] for o in out))
