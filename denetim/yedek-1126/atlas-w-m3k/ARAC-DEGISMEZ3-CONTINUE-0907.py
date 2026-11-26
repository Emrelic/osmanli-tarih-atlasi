# -*- coding: utf-8 -*-
"""DEGISMEZ3-0907 ⑬ — `denetle.py`nin BÜTÜN `continue` dalları.

🔴 NİÇİN: kendi damgam — *"72'nin tamamını okumadım; desen taramasıyla
   üçünü buldum, kalanlarda başka sessiz atlama olabilir."*
   `CLAUDE.md §11`: **desen taraması bir tarama değil bir ÖRNEKLEMDİR.**

YÖNTEM — regex DEĞİL, `ast`. (`§11`: *"veri zaten bir dilde yazılıysa, o
dilin yorumlayıcısını çağır"* — bu proje o dersi yedi kez öğrendi, ve
`continue` dalları `if`lerin içinde, `elif` zincirlerinde, iç içe
döngülerde; regex bunları ayıramaz.)

Her `continue` için çıkarılan:
    satır · içinde bulunduğu FONKSİYON · onu koruyan KOŞUL (kaynak metni)
    · en yakın döngünün satırı · atlanan şeyin bir KOVAYA konup konmadığı
"""
import ast
import io
import json
import os
import sys

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8", errors="replace")
KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
YOL = os.path.join(KOK, "arac", "denetle.py")
src = open(YOL, encoding="utf-8").read()
satirlar = src.splitlines()
agac = ast.parse(src)

# ── ebeveyn bağlantısı ───────────────────────────────────────────────
for ust in ast.walk(agac):
    for cocuk in ast.iter_child_nodes(ust):
        cocuk._ust = ust


def zincir(d):
    out = []
    while hasattr(d, "_ust"):
        d = d._ust
        out.append(d)
    return out


def kaynak(d):
    try:
        return ast.get_source_segment(src, d) or ""
    except Exception:
        return ""


kayitlar = []
for d in ast.walk(agac):
    if not isinstance(d, ast.Continue):
        return_ = None
    if not isinstance(d, ast.Continue):
        continue
    z = zincir(d)
    fon = next((x.name for x in z if isinstance(x, (ast.FunctionDef,
                                                    ast.AsyncFunctionDef))), "<modül>")
    dongu = next((x.lineno for x in z if isinstance(x, (ast.For, ast.While))), None)
    kosul = ""
    for x in z:
        if isinstance(x, ast.If):
            kosul = kaynak(x.test)
            break
        if isinstance(x, (ast.For, ast.While)):
            break          # koşulsuz continue (döngü sonu) — nadir
    # atlanan bir KOVAYA konuyor mu: aynı `if` gövdesinde append/setdefault
    kovali = False
    for x in z:
        if isinstance(x, ast.If):
            g = kaynak(x)
            if any(k in g for k in ("append", "setdefault", "add(", "+= 1",
                                    "print(", "uyar", "ihlal")):
                kovali = True
            break
    kayitlar.append({
        "satir": d.lineno, "fonksiyon": fon, "dongu_satiri": dongu,
        "kosul": " ".join(kosul.split())[:110],
        "kovali_gorunuyor": kovali,
        "cevre": [satirlar[i].rstrip()
                  for i in range(max(0, d.lineno - 4), min(len(satirlar), d.lineno + 1))],
    })

kayitlar.sort(key=lambda r: r["satir"])
print("=" * 78)
print("`denetle.py` — BÜTÜN `continue` DALLARI  (ast ile, regex DEĞİL)")
print("=" * 78)
print("toplam continue : %d" % len(kayitlar))
print("dosya satırı    : %d" % len(satirlar))

fon_dag = {}
for r in kayitlar:
    fon_dag[r["fonksiyon"]] = fon_dag.get(r["fonksiyon"], 0) + 1
print("\n[FONKSİYON DAĞILIMI]")
for f, n in sorted(fon_dag.items(), key=lambda x: -x[1]):
    print("  %-28s %2d" % (f, n))

print("\n[TAM LİSTE]")
for r in kayitlar:
    print("\n  :%-5d %-26s kova?%s" % (r["satir"], r["fonksiyon"][:26],
                                       "VAR " if r["kovali_gorunuyor"] else "yok "))
    print("        koşul: %s" % (r["kosul"] or "<koşulsuz>"))

json.dump({
    "_NOT": ("denetle.py'nin BÜTÜN continue dalları, `ast` ile çıkarıldı. "
             "`kovali_gorunuyor` bir İPUCUDUR, hüküm DEĞİL — aynı `if` "
             "gövdesinde append/print/sayaç geçiyor mu diye bakar; elle "
             "okunmadan kova ataması yapılmaz."),
    "toplam": len(kayitlar), "fonksiyon_dagilimi": fon_dag,
    "dallar": kayitlar,
}, open(os.path.join(KOK, "denetim", "OLCUM-DEGISMEZ3-CONTINUE-0907.json"),
        "w", encoding="utf-8", newline=""), ensure_ascii=False, indent=1)
print("\n[YAZILDI] denetim/OLCUM-DEGISMEZ3-CONTINUE-0907.json")
