"""_plan sinirlari CRLF ve LF agacta ayni mi? (W56b ①)
Paketlenmemis index.html, paketli olandan geri kurulur: her paket etiketi kunyedeki kaynak
etiketlerine acilir (aralari yalniz "\n" — paket ICINDE yorum yoktu, tanim geregi).
Sonra paketle._plan uc boy olcutuyle kosar: HAM (bu agac) · LF (_duzle) · CRLF (LF + satir sayisi)."""
# Kullanim: py denetim/ARAC-PAKETLE-PLAN-LF-SINAV-1006.py   (salt okur; depoya yazmaz)
import importlib.util, io, json, os, re, sys, tempfile
sys.stdout.reconfigure(encoding="utf-8")
W = r"C:\atlas-w56"
spec = importlib.util.spec_from_file_location("pk", os.path.join(W, "arac", "paketle.py"))
pk = importlib.util.module_from_spec(spec); spec.loader.exec_module(pk)

html = io.open(pk.INDEX, encoding="utf-8").read()
kunye = json.load(io.open(pk.KUNYE, encoding="utf-8"))
harita = {p["paket"]: [x["yol"] for x in p["kaynak"]] for p in kunye["paketler"]}
acilan = 0
def ac(m):
    global acilan
    y = m.group(1).split("?")[0]
    if y not in harita: return m.group(0)
    acilan += 1
    return "\n".join('<script src="%s"></script>' % k for k in harita[y])
ham_html = pk.ETIKET.sub(ac, html)
print(f"acilan paket etiketi: {acilan}/{len(harita)} · ETIKET deseni: {pk.ETIKET.pattern[:60]}")

lf_boy, crlf_boy, ham_boy = {}, {}, {}
def boy_al(tam):
    if tam not in ham_boy:
        b = open(tam, "rb").read()
        d = pk._duzle(b)
        ham_boy[tam], lf_boy[tam], crlf_boy[tam] = len(b), len(d), len(d) + d.count(b"\n")
    return tam

gercek_getsize = os.path.getsize
planlar = {}
for ad, tablo in (("HAM", ham_boy), ("LF", lf_boy), ("CRLF", crlf_boy)):
    pk.os.path.getsize = lambda p, t=tablo: t[boy_al(p)]
    planlar[ad] = pk._plan(ham_html)
pk.os.path.getsize = gercek_getsize

def ozet(pl): return [(t, tuple(y)) for t, y in pl]
for ad in planlar:
    pl = planlar[ad]
    print(f"{ad}: {sum(t=='paket' for t,_ in pl)} paket · {sum(t=='tek' for t,_ in pl)} tek · "
          f"{sum(t=='zaten-paket' for t,_ in pl)} zaten-paket")
print("HAM==LF:", ozet(planlar["HAM"]) == ozet(planlar["LF"]),
      "· LF==CRLF:", ozet(planlar["LF"]) == ozet(planlar["CRLF"]),
      "· HAM==CRLF:", ozet(planlar["HAM"]) == ozet(planlar["CRLF"]))
# kunyedeki gercek paketlerle karsilastir
gercek = [tuple(v) for v in harita.values()]
for ad in planlar:
    p = [y for t, y in ozet(planlar[ad]) if t == "paket"]
    print(f"  {ad} paketleri == kunye paketleri: {p == gercek}  ({len(p)} vs {len(gercek)})")

# PAY: her paket icin sonraki kaynak eklenince TAVAN'a mesafe, ve tek-basina esigi
print("\nEŞİĞE YAKINLIK (LF ile; CRLF farki ayrica):")
en_yakin = []
for t, ys in planlar["LF"]:
    if t != "paket": continue
    top_lf = sum(lf_boy[os.path.join(pk.KOK, y.replace('/', os.sep))] for y in ys)
    top_cr = sum(crlf_boy[os.path.join(pk.KOK, y.replace('/', os.sep))] for y in ys)
    en_yakin.append((pk.TAVAN - top_cr, pk.TAVAN - top_lf, ys[0], len(ys)))
en_yakin.sort()
for cr, lf, ilk, n in en_yakin[:5]:
    print(f"  paket ({n} kaynak, ilk {ilk}): TAVAN payi LF {lf:,} · CRLF {cr:,} bayt")
tek = sorted(((pk.TEK_BASINA - lf_boy[k], pk.TEK_BASINA - crlf_boy[k], k) for k in lf_boy), key=lambda x: abs(x[0]))
print("TEK_BASINA (2 MiB) esigine en yakin 5 kaynak (LF payi · CRLF payi):")
for a, b, k in tek[:5]:
    print(f"  {os.path.relpath(k, pk.KOK)}: LF {a:,} · CRLF {b:,}")

print("\nKÜNYE ↔ _plan FARKI:")
pl = [tuple(y) for t, y in ozet(planlar["LF"]) if t == "paket"]
for g in gercek:
    if g not in pl:
        parca = [p for p in pl if set(p) & set(g)]
        print(f"  künye paketi ({len(g)} kaynak, ilk {g[0]}) → _plan'da {len(parca)} parçaya: {[len(p) for p in parca]}")
        for p in parca[1:]:
            i = ham_html.find('"%s"' % p[0]); print("     bölen yer öncesi:", repr(ham_html[max(0,i-140):i][-140:]))
for p in pl:
    if p not in gercek: print("  _plan'da FAZLA paket (künyede yok):", list(p))

# TERS YÖN: ölçüm farkı görebiliyor mu? TEK_BASINA'yı devletler.js'in LF ile CRLF boyu ARASINA koy
k = os.path.join(pk.KOK, "data", "devletler.js")
eski_tek = pk.TEK_BASINA
pk.TEK_BASINA = (lf_boy[k] + crlf_boy[k]) // 2
yp = {}
for ad, tablo in (("LF", lf_boy), ("CRLF", crlf_boy)):
    pk.os.path.getsize = lambda p, t=tablo: t[boy_al(p)]
    yp[ad] = ozet(pk._plan(ham_html))
pk.os.path.getsize = gercek_getsize; pk.TEK_BASINA = eski_tek
print(f"\nTERS YÖN (TEK_BASINA={lf_boy[k]+ (crlf_boy[k]-lf_boy[k])//2:,}, devletler.js LF {lf_boy[k]:,} / CRLF {crlf_boy[k]:,}): "
      f"LF==CRLF: {yp['LF']==yp['CRLF']} (beklenen False)")

# DOSYA SONU: _kunye_yaz gecici kokte yazar, son bayt yeni satir olmali (yamasiz agacta "}" -> DUSER)
td = tempfile.mkdtemp(prefix="pk_kunye_")
pk.KUNYE = os.path.join(td, "k.json"); pk._kunye_yaz([])
son = open(pk.KUNYE, "rb").read()[-1:]
dusen = 0
dusen += not (ozet(planlar["HAM"]) == ozet(planlar["LF"]) == ozet(planlar["CRLF"]))
dusen += yp["LF"] == yp["CRLF"]
dusen += son != b"\n"
print(f"dosya sonu: {son!r} (beklenen b'\\n')")
print("\n✓ SINAV GEÇTİ" if not dusen else f"\n✗ SINAV DÜŞTÜ ({dusen})")
sys.exit(1 if dusen else 0)
