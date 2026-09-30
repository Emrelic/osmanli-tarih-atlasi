# YAMA-MOTOR-0930 — iki kopya arasindaki farki depo yoluyla (a/<yol> b/<yol>)
# bir .diff dosyasina yazar. Motor dosyasina DOKUNMAZ: eski = depodaki dosya,
# yeni = scratchpad'deki duzenlenmis kopya.
#   py denetim/ARAC-YAMA-MOTOR-0930-DIFF.py <depo-yolu> <yeni-kopya> <cikti.diff>
import subprocess, sys, pathlib
KOK = pathlib.Path(__file__).resolve().parent.parent
yol, yeni, cikti = sys.argv[1], sys.argv[2], sys.argv[3]
r = subprocess.run(["git", "diff", "--no-index", "--", str(KOK / yol), yeni],
                   capture_output=True, cwd=KOK)
if r.returncode not in (0, 1):
    sys.exit(r.stderr.decode("utf-8", "replace"))
satirlar = r.stdout.split(b"\n")
if not r.stdout:
    sys.exit("fark YOK — yama yazilmadi")
hy = yol.replace("\\", "/").encode()
for i, s in enumerate(satirlar[:5]):
    if s.startswith(b"diff --git "):
        satirlar[i] = b"diff --git a/" + hy + b" b/" + hy
    elif s.startswith(b"--- "):
        satirlar[i] = b"--- a/" + hy
    elif s.startswith(b"+++ "):
        satirlar[i] = b"+++ b/" + hy
open(cikti, "wb").write(b"\n".join(satirlar))
print("yazildi", cikti, len(r.stdout), "bayt")
