# -*- coding: utf-8 -*-
"""KOSU NABZI — log degil SUREC olcer.

🔴 30 Agustos 03:04'te yanlis alarm verdim: log 38 dakika sessiz kalinca
   "kosu oldu mu" diye sordum. Olculdu: surec CPU 7593s, bellek 1489 MB
   — kosu SAGDI. Sessizlik TAMPONLAMA'ydi ve CLAUDE.md bunu zaten
   yaziyordu: "log kosarken bos gorunur, NORMALDIR."

⇒ DERS: log tazeligi CANLILIK olcusu DEGIL. Olcu SUREC CPU'sudur.
   Bu bekci onu olcer: CPU ARTIYOR mu?

    py kosu_nabzi.py --sn 300      # 5 dakikada bir
Yalniz HAL DEGISINCE oter: kosu OLDUYSE ya da BITTIYSE.
"""
import argparse
import os
import subprocess
import sys
import time

if hasattr(sys.stdout, "reconfigure"):
    sys.stdout.reconfigure(encoding="utf-8", errors="replace")

PS = ("$p = Get-Process python -EA SilentlyContinue | "
      "Sort-Object WorkingSet64 -Descending | Select-Object -First 1; "
      "if ($p) { \"$([math]::Round($p.CPU,0))|$([math]::Round($p.WorkingSet64/1MB,0))|$($p.Id)\" }")


def olc():
    try:
        h = subprocess.run(["powershell", "-NoProfile", "-Command", PS],
                           capture_output=True, text=True, timeout=40).stdout.strip()
    except Exception:
        return None
    if "|" not in h:
        return None
    a = h.split("|")
    try:
        return int(a[0]), int(a[1]), a[2]
    except (ValueError, IndexError):
        return None


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--sn", type=int, default=300)
    ap.add_argument("--esik", type=int, default=200,
                    help="bu kadar CPU sn artmazsa DURMUS say")
    a = ap.parse_args()

    onceki = None
    hal = "calisiyor"
    while True:
        time.sleep(max(60, a.sn))
        o = olc()
        if o is None:
            if hal != "surec-yok":
                print("[KOSU] 🔴 PYTHON SURECI YOK — kosu BITTI ya da OLDU",
                      flush=True)
                hal = "surec-yok"
            continue
        cpu, mb, pid = o
        if mb < 300:
            # en buyuk python bile kucukse motor gitmis demektir
            if hal != "kucuk":
                print("[KOSU] 🔴 EN BUYUK PYTHON %d MB — motor artik "
                      "kosmuyor (pid %s)" % (mb, pid), flush=True)
                hal = "kucuk"
            continue
        if onceki is not None:
            artis = cpu - onceki
            if artis < a.esik:
                if hal != "durmus":
                    print("[KOSU] 🔴 CPU ARTMIYOR — %d sn'de yalnizca +%ds "
                          "(pid %s · %d MB). TAKILDI olabilir."
                          % (a.sn, artis, pid, mb), flush=True)
                    hal = "durmus"
            else:
                if hal != "calisiyor":
                    print("[KOSU] 🟢 yeniden ilerliyor — +%ds (pid %s)"
                          % (artis, pid), flush=True)
                    hal = "calisiyor"
        onceki = cpu


if __name__ == "__main__":
    main()
