import sys, os
sys.path.insert(0, r"C:\atlas\.claude\worktrees\sehir-atlasad-1117\arac")
import sehir_tarihce as S
sys.stdout.reconfigure(encoding="utf-8")
a = S.atlas_ilk_gunleri()
for n in sys.argv[1:]:
    print(n, a.get(n))
