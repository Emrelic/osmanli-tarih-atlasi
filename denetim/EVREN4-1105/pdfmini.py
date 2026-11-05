import re, sys, zlib
data = open(sys.argv[1], 'rb').read()
S = rb'\(((?:\\.|[^\\)])*)\)'
def unesc(b):
    b = re.sub(rb'\\([0-7]{1,3})', lambda m: bytes([int(m.group(1), 8) & 255]), b)
    return re.sub(rb'\\(.)', rb'\1', b, flags=re.S)
for m in re.finditer(rb'stream\r?\n(.*?)endstream', data, re.S):
    try:
        d = zlib.decompress(m.group(1))
    except Exception:
        continue
    out = []
    for t in re.finditer(rb'\[((?:' + S + rb'|[^\]\(])*)\]\s*TJ|' + S + rb'\s*Tj|(T\*|Td|TD)', d, re.S):
        if t.group(1) is not None:
            s = b''
            for p, n in re.findall(S + rb'|(-?\d+\.?\d*)', t.group(1)):
                if p:
                    s += unesc(p)
                elif n and float(n) < -200:
                    s += b' '
            out.append(s)
        elif t.group(3) is not None:
            out.append(unesc(t.group(3)))
        else:
            out.append(b' ')
    txt = b''.join(out).decode('cp1252', 'replace')
    print(re.sub(r'\s+', ' ', txt))
