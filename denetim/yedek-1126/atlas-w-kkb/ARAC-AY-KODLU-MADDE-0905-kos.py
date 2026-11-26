# -*- coding: utf-8 -*-
"""ARAC-AY-KODLU-MADDE-0905.js koşturucusu (konsol cp1254 çökmesin diye)."""
import os
import subprocess
import sys

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
JS = os.path.join(KOK, "denetim", "ARAC-AY-KODLU-MADDE-0905.js")

sys.stdout.reconfigure(encoding="utf-8", errors="replace")
r = subprocess.run(["node", JS, KOK], cwd=KOK, capture_output=True,
                   text=True, encoding="utf-8", errors="replace")
print(r.stdout)
if r.stderr.strip():
    print("--- stderr ---")
    print(r.stderr)
sys.exit(r.returncode)
