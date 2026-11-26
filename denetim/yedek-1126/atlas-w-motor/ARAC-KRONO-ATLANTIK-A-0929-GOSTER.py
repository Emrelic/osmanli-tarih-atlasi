# KRONO-ATLANTIK-A-0929 — verilen satırdan başlayan maddenin baş/d/kaynak satırlarını gösterir (salt okuma)
#   py denetim/ARAC-KRONO-ATLANTIK-A-0929-GOSTER.py <dosya> <satır> [<satır> ...]
import sys, io
sys.stdout.reconfigure(encoding="utf-8")
L = io.open(sys.argv[1], encoding="utf-8").read().split("\n")
for s in map(int, sys.argv[2:]):
    i = s - 1
    print(f"== L{s}: {L[i][:260]}")
    j = i
    while j < len(L) and j < i + 12:
        x = L[j].strip()
        if j > i and x.startswith("{ t:"): break
        if x.startswith("d:") or x.startswith("kaynak:") or x.startswith("gun:") or "kaynak:" in x:
            print(f"   L{j+1}: {x[:420]}")
        if x.endswith("},") or x.endswith("}"):
            if "kaynak" in x or j > i: break
        j += 1
