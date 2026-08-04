# -*- coding: utf-8 -*-
"""TON DENETIMI — DUYGU-VE-SEKME-SARTNAME.md §A⑤③.
Kiyim maddesinde senlikli emoji var mi, ve emojisiz madde kaldi mi."""
import io, re, sys, glob
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8", errors="replace")

KIYIM = re.compile(r"kılıçtan geçir|katliam|kıyım|soykırım|tehcir|kıtlık|"
                   r"vebâ|veba|tâun|salgın|yağma|talan", re.I)
YASAK = set(["🎉", "😀", "😂", "🤣", "🤮", "👏", "🏆", "💍"])


def kayitlar(t):
    out = []
    for m in re.finditer(r'\{\s*t:\s*"\d{4}(?:-\d{2}){0,2}"', t):
        d, q, esc, son = 0, None, False, None
        for j in range(m.start(), len(t)):
            c = t[j]
            if esc:
                esc = False; continue
            if c == "\\":
                esc = True; continue
            if q:
                if c == q: q = None
                continue
            if c in "\"'": q = c
            elif c in "[{(": d += 1
            elif c in "]})":
                d -= 1
                if d == 0: son = j; break
        if son is not None:
            out.append(t[m.start():son + 1])
    return out


n = i1 = i2 = bos = 0
for f in sorted(glob.glob("data/olaylar*.js")):
    for g in kayitlar(io.open(f, encoding="utf-8", newline="").read()):
        dm = re.search(r"duygu:\[([^\]]*)\]", g)
        if not dm:
            bos += 1
            continue
        em = set(re.findall(r'"([^"]*)"', dm.group(1)))
        if not em:
            bos += 1
            continue
        n += 1
        b = re.search(r'\bb:\s*"([^"]*)"', g)
        d = re.search(r'\bd:\s*"((?:[^"\\]|\\.)*)"', g)
        baslik = b.group(1) if b else ""
        metin = d.group(1) if d else ""
        if KIYIM.search(baslik) and (em & YASAK):
            i1 += 1
            if i1 < 4:
                print("  🔴 kıyım BAŞLIĞI + şenlikli:", baslik[:54], em & YASAK)
        if KIYIM.search(metin) and em <= YASAK:
            i2 += 1
            if i2 < 4:
                print("  🔴 metinde kıyım + SAF şenlikli:", baslik[:50], em)

print()
print("duygu: taşıyan madde %d · emojisiz %d" % (n, bos))
print("ihlal 1  kıyım başlığında şenlikli emoji : %d" % i1)
print("ihlal 2  kıyım metni, saf şenlikli       : %d" % i2)
print("🟢 TON KURALI TEMİZ" if not (i1 or i2 or bos) else "🔴 kalan var")
