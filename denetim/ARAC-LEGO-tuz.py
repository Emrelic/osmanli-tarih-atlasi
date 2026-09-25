# -*- coding: utf-8 -*-
"""MOTOR-LEGO-0925 — önbellek TUZUNU değiştiren commit'lerin sınıfı (salt okunur, git'ten).

Tuz = sha256(uret_petek.py · renkler.py · girdi.py · motor_onbellek.py) + MOTOR_* ortam.
Her commit için dosya başına sınıf:
  YORUM   — belirteç akışı (COMMENT/NL/boş satır ve yalnız-dizgi deyimleri = docstring
            hariç) AYNI ⇒ davranış değişemez
  HEX     — (yalnız renkler.py) fark yalnız "#rrggbb" dizgilerinde ⇒ geometri
            katmanlarını etkilemez (gövde anahtarı did/renk taşımıyor)
  ANLAMLI — öteki her şey
Kullanım: py denetim/ARAC-LEGO-tuz.py [--since 2026-09-18]
"""
import io, re, subprocess, sys, tokenize
sys.stdout.reconfigure(encoding="utf-8", errors="replace")
DOSYALAR = ["arac/uret_petek.py", "arac/renkler.py", "arac/girdi.py", "arac/motor_onbellek.py"]
since = sys.argv[sys.argv.index("--since") + 1] if "--since" in sys.argv else "2026-09-18"


def git(*a):
    return subprocess.run(["git", *a], capture_output=True, cwd=r"C:\atlas").stdout


def belirtec(src, hex_maske=False):
    out, onceki = [], None
    try:
        toks = list(tokenize.tokenize(io.BytesIO(src).readline))
    except (tokenize.TokenError, IndentationError, SyntaxError):
        return None
    for i, t in enumerate(toks):
        if t.type in (tokenize.COMMENT, tokenize.NL, tokenize.ENCODING):
            continue
        # docstring / yalnız-dizgi deyimi: satırın ilk belirteci STRING ve ardından NEWLINE
        if t.type == tokenize.STRING and (onceki is None or onceki.type in
                                          (tokenize.NEWLINE, tokenize.INDENT, tokenize.DEDENT)):
            j = i + 1
            while j < len(toks) and toks[j].type in (tokenize.COMMENT, tokenize.NL):
                j += 1
            if j < len(toks) and toks[j].type == tokenize.NEWLINE:
                onceki = toks[j]
                continue
        s = t.string
        if hex_maske and t.type == tokenize.STRING and re.fullmatch(r"[\"']#[0-9a-fA-F]{6}[\"']", s):
            s = "'#HEX'"
        out.append((t.type, s))
        onceki = t
    return out


def sinif(yol, eski, yeni):
    if eski == yeni:
        return None
    if not eski:
        return "YENİ"
    a, b = belirtec(eski), belirtec(yeni)
    if a is not None and a == b:
        return "YORUM"
    if yol.endswith("renkler.py"):
        a, b = belirtec(eski, True), belirtec(yeni, True)
        if a is not None and a == b:
            return "HEX"
    return "ANLAMLI"


commitler = git("log", "--reverse", f"--since={since}", "--format=%H %ad %s", "--date=format:%m-%d %H:%M",
                "--", *DOSYALAR).decode("utf-8", "replace").splitlines()
say = {}
for c in commitler:
    h, rest = c.split(" ", 1)
    parca = []
    for d in DOSYALAR:
        eski = git("show", f"{h}^:{d}")
        yeni = git("show", f"{h}:{d}")
        s = sinif(d, eski, yeni)
        if s:
            parca.append(f"{d.split('/')[-1]}={s}")
    genel = ("ANLAMLI" if any(p.endswith("ANLAMLI") or p.endswith("YENİ") for p in parca)
             else "HEX" if any(p.endswith("HEX") for p in parca) else "YORUM")
    say[genel] = say.get(genel, 0) + 1
    print(f"{h[:8]} {rest[:11]} {genel:8s} {' '.join(parca)} · {rest[12:80]}")
print(f"\nTOPLAM {len(commitler)} tuz-değiştiren commit: {say}")
