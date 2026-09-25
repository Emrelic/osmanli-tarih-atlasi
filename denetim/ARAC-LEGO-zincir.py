# -*- coding: utf-8 -*-
"""MOTOR-LEGO-0925 — uret_petek.py commit'leri gövde hesabının ÇAĞRI ZİNCİRİNE dokundu mu?

① Güncel dosyada `_yabanci_govde_hesap` ve `_osm_govde_hesap`tan başlayıp AST ile
   çağrılan modül düzeyi işlevlerin geçişli kapanışı + okunan modül düzeyi adlar.
② Her commit'te değişen satırları (eski ve yeni tarafta) kapsayan modül düzeyi
   deyimin adı (def adı ya da atanan ad) bulunur.
③ Kesişim: o commit gövde katmanını GERÇEKTEN etkileyebilir mi.
⚠️ Kaba: modül düzeyi ad çözümlemesi; dinamik çağrı/ globals() görülmez (ÖLÇÜLEMEDİ olarak yazılır).
"""
import ast, re, subprocess, sys
sys.stdout.reconfigure(encoding="utf-8", errors="replace")
KOK = r"C:\atlas"
YOL = "arac/uret_petek.py"
since = "2026-09-18"


def git(*a):
    return subprocess.run(["git", *a], capture_output=True, cwd=KOK).stdout.decode("utf-8", "replace")


def ust_duzey(src):
    """[(bas, son, {adlar})] modül düzeyi deyimler."""
    t = ast.parse(src)
    out = []
    for n in t.body:
        ad = set()
        if isinstance(n, (ast.FunctionDef, ast.ClassDef)):
            ad.add(n.name)
        elif isinstance(n, (ast.Assign, ast.AugAssign, ast.AnnAssign)):
            hedef = n.targets if isinstance(n, ast.Assign) else [n.target]
            for h in hedef:
                for x in ast.walk(h):
                    if isinstance(x, ast.Name):
                        ad.add(x.id)
        else:
            for x in ast.walk(n):
                if isinstance(x, ast.FunctionDef):
                    ad.add(x.name)
                elif isinstance(x, ast.Name) and isinstance(x.ctx, ast.Store):
                    ad.add(x.id)
            ad.add(f"<{type(n).__name__}@{n.lineno}>")
        out.append((n.lineno, n.end_lineno, ad))
    return t, out


src = open(f"{KOK}/{YOL}", encoding="utf-8").read()
agac, dz = ust_duzey(src)
fonk = {n.name: n for n in ast.walk(agac) if isinstance(n, ast.FunctionDef) and n in agac.body}
modul_adlari = set().union(*(a for _, _, a in dz))
kapanis, okunan = set(), set()
yigin = ["_yabanci_govde_hesap", "_osm_govde_hesap", "_onb_parca_anahtar"]
while yigin:
    f = yigin.pop()
    if f in kapanis or f not in fonk:
        continue
    kapanis.add(f)
    # yerel adlar (parametre + işlev içinde atanan, `global` bildirilmemiş) modül adını gölgeler
    _gl = {g for x in ast.walk(fonk[f]) if isinstance(x, ast.Global) for g in x.names}
    _yerel = {x.id for x in ast.walk(fonk[f]) if isinstance(x, ast.Name) and isinstance(x.ctx, ast.Store)}
    _yerel |= {a.arg for x in ast.walk(fonk[f]) if isinstance(x, (ast.FunctionDef, ast.Lambda))
               for a in x.args.args + x.args.kwonlyargs + x.args.posonlyargs}
    _yerel -= _gl
    for x in ast.walk(fonk[f]):
        if isinstance(x, ast.Name) and isinstance(x.ctx, ast.Load) and x.id in modul_adlari \
                and x.id not in _yerel:
            okunan.add(x.id)
            if x.id in fonk:
                yigin.append(x.id)
print(f"① gövde zinciri: {len(kapanis)} işlev · okunan modül düzeyi ad {len(okunan)}")
print("   okunan adlar:", ", ".join(sorted(okunan)))
print("   işlevler:", ", ".join(sorted(kapanis)))

commitler = git("log", "--reverse", f"--since={since}", "--format=%H %ad", "--date=format:%m-%d %H:%M",
                "--", YOL).splitlines()
for c in commitler:
    h, tarih = c.split(" ", 1)
    try:
        _, dz_eski = ust_duzey(git("show", f"{h}^:{YOL}"))
        _, dz_yeni = ust_duzey(git("show", f"{h}:{YOL}"))
    except SyntaxError as e:
        print(f"{h[:8]} ÖLÇÜLEMEDİ (ayrıştırılamadı: {e})"); continue
    fark = git("diff", "-U0", f"{h}^", h, "--", YOL)
    degisen = set()
    for m in re.finditer(r"^@@ -(\d+)(?:,(\d+))? \+(\d+)(?:,(\d+))? @@", fark, re.M):
        for bas, n, dzl in ((int(m.group(1)), int(m.group(2) or 1), dz_eski),
                            (int(m.group(3)), int(m.group(4) or 1), dz_yeni)):
            for ln in range(bas, bas + max(n, 1)):
                for b, s, ad in dzl:
                    if b <= ln <= s:
                        degisen |= ad
    # yalnız yorum satırı değişen deyimleri ayıkla: deyimin ast dökümü aynı mı
    kes = sorted(degisen & (kapanis | okunan))
    print(f"{h[:8]} {tarih} değişen ü.d. ad {len(degisen):3d} · GÖVDE ZİNCİRİNE DEĞEN {len(kes)}: "
          f"{', '.join(kes[:12])}{' …' if len(kes) > 12 else ''}")
