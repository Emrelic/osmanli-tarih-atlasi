# -*- coding: utf-8 -*-
"""İZ-YOK DENETİM C — DİLİM 3'ün TAM DOSYA YOLUNU tespit eder.

Şartname "parti-0009(4) parti-0010(1)" diyor ama diskte HEM
`parti-kasa-0009/0010` HEM `parti-emrelic-0009/0010` (varsa) var.
Bu alet ARAC-PAKET-DENETIM-0910.py'nin AYNI mantığını çalıştırır,
ama kimliği d[-4:] yerine TAM DİZİN ADIYLA yazar — tahmin etmeden
hangi ailenin doğru olduğunu ölçmek için.
"""
import io, json, os, re, subprocess

G = r"C:\Users\emrem\OneDrive\Desktop\ClaudEmre\kutu\giden"
ATLAS = r"C:\Users\emrem\OneDrive\Desktop\TARİH COĞRAFYA SİTESİ"
HASH = re.compile(r"\b[0-9a-f]{7,40}\b")

_bilinen = {}


def commit_var(h):
    if h in _bilinen:
        return _bilinen[h]
    try:
        r = subprocess.run(["git", "-C", ATLAS, "cat-file", "-t", h],
                           capture_output=True, text=True, timeout=20)
        ok = (r.returncode == 0 and r.stdout.strip() == "commit")
    except Exception:
        ok = None
    _bilinen[h] = ok
    return ok


def oku(d, ad):
    p = os.path.join(G, d, ad)
    if not os.path.exists(p):
        return None
    try:
        return json.load(io.open(p, encoding="utf-8"))
    except Exception:
        return None


HEDEF_NO = {"0009", "0010", "0035", "0036", "0037", "0038", "0039"}

for d in sorted(os.listdir(G)):
    if not d.startswith("parti"):
        continue
    son4 = d[-4:]
    if son4 not in HEDEF_NO:
        continue
    pv = oku(d, "PARTI.json")
    if not pv:
        print("%-24s PARTI.json YOK/okunamadı" % d)
        continue
    cv = (oku(d, "CEVAP.json") or {}).get("maddeler") or {}
    iz_yok = []
    toplam = 0
    for m in (pv.get("maddeler") or []):
        no = m.get("no")
        toplam += 1
        c = cv.get(no) or {}
        h = (c.get("hukum") or "").strip()
        if h != "cozuldu":
            continue
        adaylar = []
        for kaynak in (c.get("commit") or "", c.get("not") or ""):
            adaylar += HASH.findall(kaynak)
        gorulen = None
        for a in adaylar:
            v = commit_var(a)
            if v is True:
                gorulen = a
                break
            if v is None:
                gorulen = "?"
        if gorulen is None and not adaylar:
            iz_yok.append(no)
    print("%-24s toplam=%-3d cozuldu-iz-yok=%d  %s" % (d, toplam, len(iz_yok), iz_yok))
