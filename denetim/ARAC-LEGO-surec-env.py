# -*- coding: utf-8 -*-
"""MOTOR-LEGO-0925 — koşan uret_petek sürecinin MOTOR_* ortam değişkenleri (salt okunur)."""
import sys
sys.stdout.reconfigure(encoding="utf-8", errors="replace")
import psutil
for p in psutil.process_iter(["pid", "cmdline", "cwd"]):
    c = " ".join(p.info["cmdline"] or [])
    if "uret_petek.py" in c and "python.exe" in c.lower():
        print(p.pid, p.info["cwd"], c)
        try:
            e = p.environ()
            for k in sorted(e):
                if k.startswith("MOTOR") or k.startswith("PYTHON"):
                    print("  ", k, "=", e[k])
        except Exception as x:
            print("  environ okunamadi:", type(x).__name__, x)
