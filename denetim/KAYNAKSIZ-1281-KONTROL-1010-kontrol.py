# KAYNAKSIZ-1281-KONTROL-1010 — tek sayı: ilk s: halkasının f'si gruplara göre
# py k3_kontrol.py <worktree>
# Ham f okunur (pencereyle KIRPILMAZ). Gruplar kaynaksizlik_olc'den.
import sys, io, os, contextlib
from collections import Counter
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8")
KOK = os.path.abspath(sys.argv[1]); sys.path.insert(0, os.path.join(KOK, "arac")); os.chdir(KOK)
import girdi, denetle
with contextlib.redirect_stdout(io.StringIO()):
    Y = girdi.yukle(sessiz=True)
K = denetle.kaynaksizlik_olc(Y)
U0, U1 = girdi.VERI_UFKU
A = {"%s|%s" % (y.get("_kaynak"), y.get("ad")): y for y in Y if y.get("s")}
kd = set(A) - set(K["kayit_kaynaksiz"])
gruplar = {
    "hicbiri (kaynaksız, 1841)": set(K["hicbiri"]),
    "donem_ici (dönem kaynaklı, 460)": set(K["donem_ici"]),
    "kayıt-düzeyi kaynaklı": kd,
}
def ilk(y):
    S = [p for p in y["s"] if isinstance(p, dict) and p.get("f")]
    return min(S, key=lambda p: denetle.pad(p["f"])) if S else None
# ek grup: İLK HALKASININ KENDİSİ kaynaklı (dönem kaynağı ya da kayıt kaynağı)
ilk_kaynakli = {a for a, y in A.items() if ilk(y) and denetle._kaynak_dolu(ilk(y).get("kaynak"))}
gruplar["ilk halkasının KENDİSİ dönem-kaynaklı"] = ilk_kaynakli
for ad, G in gruplar.items():
    c = Counter(); ornek = {"once": [], "geç": []}
    for a in G:
        p = ilk(A[a])
        if not p: c["s yok"] += 1; continue
        f = denetle.pad(p["f"])
        if f < U0: c["f < 1281"] += 1; ornek["once"].append(f"{A[a]['ad']}:{p['f']}")
        elif f == U0: c["f = 1281-01-01"] += 1
        else: c["f > 1281"] += 1
    n = len(G); m = c["f = 1281-01-01"] + c["f < 1281"]
    print(f"\n■ {ad}: n={n}")
    for k in ("f < 1281", "f = 1281-01-01", "f > 1281", "s yok"):
        if c[k]: print(f"   {k:16} {c[k]:5}  (%{100*c[k]/n:.1f})")
    if m: print(f"   1281'de VAR olanlar içinde TAM 1281-01-01: {c['f = 1281-01-01']}/{m} = %{100*c['f = 1281-01-01']/m:.1f}")
    if ornek["once"]: print("   f<1281 örnek:", ornek["once"][:8])
# bütün veride s: dönemi f < 1281 olan dönem sayısı (pencereden bağımsız)
n_once = sum(1 for y in Y for p in (y.get("s") or []) if isinstance(p, dict) and p.get("f") and denetle.pad(p["f"]) < U0)
n_tum = sum(1 for y in Y for p in (y.get("s") or []) if isinstance(p, dict) and p.get("f"))
print(f"\nBÜTÜN VERİ: s: dönemi {n_tum} · f < 1281 olan {n_once}")
