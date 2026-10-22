import sys, io, math
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')
S = "C:/Users/user/AppData/Local/Temp/claude/C--atlas/2e265d3a-21c7-47e9-ac13-c26e0cabd3c6/scratchpad/gaz-geonames1000/cities1000.txt"
# kullanim: py _gn.py ad1 ad2 ...  (ad / asciiname / alternatenames icinde, CN/KP/KR/MN)
q = [a.lower() for a in sys.argv[1:]]
for ln in open(S, encoding='utf-8'):
    f = ln.split('\t')
    if f[8] not in ('CN', 'KP', 'KR', 'RU', 'MN', 'JP'): continue
    nm = (f[1] + ',' + f[2]).lower()
    alt = f[3].lower()
    for a in q:
        if a in nm.split(',') or ('\u200b' + a) in nm or a in f[2].lower():
            print(a, '|', f[0], f[1], f[4], f[5], f[8], 'pop', f[14]); break
