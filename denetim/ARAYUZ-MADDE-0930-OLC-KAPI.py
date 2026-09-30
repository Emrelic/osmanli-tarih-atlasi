# ARAYUZ-MADDE-0930 — kapı sorusu ölçümü (salt okur: `git show <rev>:<yol>`)
# Soru A (koordinatörün sorusu): index.html'in beklediği GLOBAL, yüklenen js/'de tanımlı mı?
# Soru B (bugünkü kırılmanın gerçek mekanizması): js/'nin DOM'dan beklediği id
#         index.html'de VAR mı ve ETİKETİ uyuyor mu (ör. `.options` okunan id <select> mi)?
# Kullanım: py denetim/ARAYUZ-MADDE-0930-OLC-KAPI.py <rev> [<rev> ...]
#   rev "WT" = çalışma ağacı
import re, subprocess, sys

def oku(rev, yol):
    if rev == "WT":
        try: return open(yol, encoding="utf-8").read()
        except FileNotFoundError: return None
    r = subprocess.run(["git", "show", f"{rev}:{yol}"], capture_output=True)
    return r.stdout.decode("utf-8", "replace") if r.returncode == 0 else None

def js_listesi(html):
    return [m for m in re.findall(r'<script[^>]+src="(js/[^"?]+)', html)]

def html_idler(html):
    # yorumları at, id → etiket
    h = re.sub(r"<!--.*?-->", "", html, flags=re.S)
    return {m.group(2): m.group(1).lower() for m in re.finditer(r"<([a-zA-Z0-9]+)\b[^>]*\bid=\"([^\"]+)\"", h)}

def html_globaller(html):
    h = re.sub(r"<!--.*?-->", "", html, flags=re.S)
    ad = set()
    for m in re.finditer(r'\son[a-z]+="([^"]*)"', h):           # onclick="foo(…)"
        ad.update(re.findall(r"\b([A-Za-z_$][\w$]*)\s*\(", m.group(1)))
    for m in re.finditer(r"<script(?![^>]*\bsrc=)[^>]*>(.*?)</script>", h, flags=re.S):
        ad.update(re.findall(r"\bwindow\.([A-Za-z_$][\w$]*)\s*\(", m.group(1)))
    return ad - {"if", "for", "while", "return", "function", "alert", "confirm", "setTimeout", "encodeURIComponent"}

def js_tanimlar(js):
    t = set(re.findall(r"\bfunction\s+([A-Za-z_$][\w$]*)\s*\(", js))
    t |= set(re.findall(r"\b(?:var|let|const)\s+([A-Za-z_$][\w$]*)\s*=", js))
    t |= set(re.findall(r"\bwindow\.([A-Za-z_$][\w$]*)\s*=", js))
    return t

# id'den okunan ve etiketi şart koşan özellikler
OZELLIK_ETIKET = {"options": {"select"}, "selectedIndex": {"select"}, "checked": {"input"},
                  "value": {"input", "select", "textarea", "option", "button", "output"}}

def js_id_beklentileri(js):
    """getElementById("x") → değişkene atanıp .options/.value… okunuyorsa o etiketi bekler."""
    bek = {}
    for m in re.finditer(r'(?:var|let|const)?\s*([A-Za-z_$][\w$]*)\s*=\s*document\.getElementById\("([^"]+)"\)', js):
        deg, id_ = m.group(1), m.group(2)
        pencere = js[m.end(): m.end() + 1500]
        for oz, et in OZELLIK_ETIKET.items():
            if re.search(r"\b" + re.escape(deg) + r"\." + oz + r"\b", pencere):
                bek.setdefault(id_, set()).add(oz)
    ham = set(re.findall(r'getElementById\("([^"]+)"\)', js))
    return ham, bek

for rev in sys.argv[1:]:
    html = oku(rev, "index.html")
    print("=" * 70, "\nrev", rev)
    if html is None: print("  index.html OKUNAMADI"); continue
    jsler = js_listesi(html)
    tanim, js_hepsi = set(), ""
    eksik_dosya = []
    for j in jsler:
        m = oku(rev, j)
        if m is None: eksik_dosya.append(j); continue
        tanim |= js_tanimlar(m); js_hepsi += "\n" + m
    ids = html_idler(html)
    glb = html_globaller(html)
    tanimsiz = sorted(g for g in glb if g not in tanim)
    ham, bek = js_id_beklentileri(js_hepsi)
    uyumsuz = []
    for id_, ozler in sorted(bek.items()):
        et = ids.get(id_)
        if et is None: continue            # yok olan id ayrı sayılır (null korumalı olabilir)
        for oz in ozler:
            if et not in OZELLIK_ETIKET[oz]: uyumsuz.append(f"#{id_} <{et}> ama js .{oz} okuyor")
    print(f"  js dosyası {len(jsler)} · okunamayan {len(eksik_dosya)} {eksik_dosya[:5]}")
    print(f"  A · HTML'in çağırdığı global {len(glb)} · js'de TANIMSIZ {len(tanimsiz)} {tanimsiz[:15]}")
    print(f"  B · js'nin getElementById id'si {len(ham)} · HTML'de olmayan {len([i for i in ham if i not in ids])}")
    print(f"  B · etiket beklentisi taşıyan id {len(bek)} · ETİKET UYUMSUZ {len(uyumsuz)}")
    for u in uyumsuz: print("     ", u)
