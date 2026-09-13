# -*- coding: utf-8 -*-
"""P13B ortak yardımcı — motorun KARA maskesi ve GOLLER'i, uret_petek.py'nin
KENDİ satırlarından (AST ile: `KARA_TOL = …` ile göller `try` bloğu arası) kurulur.
Motor KOŞULMAZ. Sonuç scratchpad'e WKB olarak önbelleğe alınır.
Kullanım: importlib ile yükle → kara_goller() → (KARA, GOLLER, BOLGE, ns)."""
import ast, io, json, os, sys, pickle, tempfile
KOK = r"C:\Users\emrem\OneDrive\Desktop\TARİH COĞRAFYA SİTESİ"
sys.path.insert(0, os.path.join(KOK, "arac"))
ONBELLEK_DIZIN = (r"C:\Users\emrem\AppData\Local\Temp\claude\C--Users-emrem-OneDrive-Desktop-"
                  r"TAR-H-CO-RAFYA-S-TES-\695200e0-9040-42fa-b8ca-a816459e5434\scratchpad")
if not os.path.isdir(ONBELLEK_DIZIN):
    ONBELLEK_DIZIN = tempfile.gettempdir()
ONBELLEK = os.path.join(ONBELLEK_DIZIN, "p13b_kara_goller.pickle")


def motor_ns():
    import shapely
    from shapely.geometry import shape, box, Polygon, MultiPolygon, Point
    from shapely.ops import unary_union
    import girdi
    src = io.open(os.path.join(KOK, "arac", "uret_petek.py"), encoding="utf-8").read()
    govde = ast.parse(src).body
    ns = {"json": json, "os": os, "shape": shape, "box": box, "unary_union": unary_union,
          "girdi": girdi, "asama": lambda *a, **k: None, "Polygon": Polygon,
          "MultiPolygon": MultiPolygon, "Point": Point, "shapely": shapely,
          "BASEMAPS": os.path.join(KOK, "veri-kaynak")}
    sabit = {"BOLGE", "KV_ADIM", "SADE_TOL", "SEYRELT_TOL", "KUSATMA_ESIK", "B2_ENKLAV_KM",
             "B2_TEMAS", "KV_MIN_KM2"}
    for n in govde:
        if (isinstance(n, ast.Assign) and len(n.targets) == 1
                and getattr(n.targets[0], "id", None) in sabit):
            exec(compile(ast.Module([n], []), "uret_petek.py", "exec"), ns)
    return ns, govde


def kara_goller(yeniden=False):
    from shapely import wkb
    ns, govde = motor_ns()
    if os.path.exists(ONBELLEK) and not yeniden:
        d = pickle.load(open(ONBELLEK, "rb"))
        return wkb.loads(d["kara"]), wkb.loads(d["goller"]), ns["BOLGE"], ns
    basla, bitti, gol_atandi = False, False, False
    for n in govde:
        if (not basla and isinstance(n, ast.Assign) and len(n.targets) == 1
                and getattr(n.targets[0], "id", None) == "KARA_TOL"):
            basla = True
        if not basla:
            continue
        if isinstance(n, ast.Expr):          # asama(...) / print(...) çağrıları
            continue
        exec(compile(ast.Module([n], []), "uret_petek.py", "exec"), ns)
        if (isinstance(n, ast.Assign) and len(n.targets) == 1
                and getattr(n.targets[0], "id", None) == "GOLLER"):
            gol_atandi = True
        if gol_atandi and isinstance(n, ast.Try):
            bitti = True
            break
    assert bitti and ns.get("GOLLER") is not None, "göller bloğu bulunamadı"
    pickle.dump({"kara": wkb.dumps(ns["KARA"]), "goller": wkb.dumps(ns["GOLLER"])},
                open(ONBELLEK, "wb"))
    return ns["KARA"], ns["GOLLER"], ns["BOLGE"], ns


if __name__ == "__main__":
    sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8", errors="replace")
    import time
    t0 = time.time()
    K, G, B, ns = kara_goller(yeniden="--yeniden" in sys.argv)
    print(f"KARA {K.geom_type} geçerli={K.is_valid} · GOLLER parça "
          f"{len(getattr(G, 'geoms', [G]))} · BOLGE {B.bounds} · KV_ADIM {ns.get('KV_ADIM')} · "
          f"{time.time()-t0:.0f} sn · önbellek {ONBELLEK}")
