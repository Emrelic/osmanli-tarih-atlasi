# -*- coding: utf-8 -*-
"""`kaynak_durum.py kapi` (SINAMA ilanı) + `denetle_yayin.py` SINAMA kapısı — İKİ YÖNLÜ sınav
(UMIT-W10-SINAMA-1006, koordinatör hükmü 6 Ekim 2026).

🔴 GERÇEK `oturumlar/KAYNAK-DURUM.json` · `KOSU-KAPI-DEFTERI.jsonl` · `KOSU-KAPI.json` YAZILMAZ:
   modüller ayrı adla ithal edilir, üç yol geçici dizine çevrilir, her vakada assert edilir,
   sonda üçünün parmak izi öncesiyle karşılaştırılır. Yayın kapısı da GEÇİCİ bir KÖK'te sınanır.

İLAN
  S1 `kapi` (temiz motor)  → 0 · KAYNAK-DURUM.json YAZILMADI · KOSU-KAPI.json kod=SINAMA · defter +1 (SINAMA)
  S2 S1'den sonra bekci_yasak_mi → YASAK YOK
  S3 TERS: `kapat --kod KOSU` → KAYNAK-DURUM.json YAZILDI · bekçi YASAK · defter +1 (KOSU)
  S4 `kapi` (kirli motor, sınıfsız MOTOR_*) → 4 · defter +0 (öten kapı SINAMA'da da öter)
  S5 `kapi --kod X` → 2 (kod seçilemez)
  S6 defter: SINAMA satırı 1 · KOSU satırı 1 — "kaç sınama koşusu" sayılabilir
YAYIN
  Y1 S1'in GERÇEK damgasından (kod=SINAMA) kurulan `donemler_ust.js` → kapı İHLAL
  Y2 aynı, kod=KOSU (S3'ün damgası)                                  → TEMİZ
  Y3 kapı alanı yok → TEMİZ (bugünkü hâl, ⚪) · KAPI_ALANI_ZORUNLU=True ile → İHLAL
  Y4 paket: önce motor DIŞI iz, sonra motor SINAMA izi (iki iz bir dosyada) → İHLAL
  Y5 motor DIŞI ürün (uret_altlik) kapi.kod=SINAMA taşısa bile → yok sayılır (TEMİZ)
  Y6 main() kararına bağlı mı: son `if` koşulunda `_kapi_ihlali` var (AST)
  Y7 GERÇEK ağaç (--kok) → SINAMA 0 · ihlal YOK (bugün 4 motor ürünü kapısız, ⚪)
Kullanım: py denetim/ARAC-KAYNAK-DURUM-SINAMA-SINAV-1006.py [--kok C:\\atlas]
"""
import argparse, ast, contextlib, hashlib, importlib.util, io, json, os, sys, tempfile
sys.stdout.reconfigure(encoding="utf-8", errors="replace")
ap = argparse.ArgumentParser()
ap.add_argument("--kok", default=os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
KOK = ap.parse_args().kok


def yukle(ad, yol):
    sp = importlib.util.spec_from_file_location(ad, yol)
    m = importlib.util.module_from_spec(sp)
    sp.loader.exec_module(m)
    return m


kd = yukle("kaynak_durum_sinama", os.path.join(KOK, "arac", "kaynak_durum.py"))
dy = yukle("denetle_yayin_sinama", os.path.join(KOK, "arac", "denetle_yayin.py"))
GERCEK = {"DOSYA": kd.DOSYA, "DEFTER": kd.DEFTER, "DAMGA": kd.kosu_damga_yolu(KOK)}
gercek_damga_yolu = kd.kosu_damga_yolu


def parmak(yol):
    return hashlib.sha256(open(yol, "rb").read()).hexdigest() if os.path.exists(yol) else "YOK"


ONCE = {k: parmak(v) for k, v in GERCEK.items()}
KUMELER = '_ONB_SONUC = {"MOTOR_A"}\n_ONB_ISLETIM = {"MOTOR_B"}\n_ONB_CIKTI_DISI = set()\n'
TEMIZ = 'import os\n' + KUMELER + 'A = os.environ.get("MOTOR_A")\nB = os.environ.get("MOTOR_B")\n'
KIRLI = TEMIZ + 'Y = os.getenv("MOTOR_YENI")\n'
dusen = 0


def kontrol(ad, kosul, ayrinti):
    global dusen
    print(("✓ " if kosul else "✗ ") + f"{ad}: {ayrinti}")
    dusen += not kosul


def ust_js(td, ad, izler):
    os.makedirs(os.path.join(td, "data"), exist_ok=True)
    with open(os.path.join(td, "data", ad), "w", encoding="utf-8") as f:
        for iz in izler:
            f.write("window.X = 1;\nwindow.URETIM_IZI = " + json.dumps(iz, sort_keys=True,
                    separators=(",", ":")) + ";\n")


with tempfile.TemporaryDirectory(prefix="sinama_sinav_") as td:
    motor = os.path.join(td, "motor")
    os.makedirs(os.path.join(motor, "arac"))
    kd.DOSYA = os.path.join(td, "KAYNAK-DURUM.json")
    kd.DEFTER = os.path.join(td, "DEFTER.jsonl")
    kd.kosu_damga_yolu = lambda k: (os.path.join(td, "GERCEK-KOK-KOSU-KAPI.json")
                                    if os.path.abspath(k) == os.path.abspath(KOK) else gercek_damga_yolu(k))
    for k, v in (("DOSYA", kd.DOSYA), ("DEFTER", kd.DEFTER), ("DAMGA", kd.kosu_damga_yolu(KOK))):
        assert os.path.abspath(v) != os.path.abspath(GERCEK[k]), "GERÇEK %s'E YAZACAKTI" % k

    def kos(argv, motor_kaynak=TEMIZ):
        open(os.path.join(motor, "arac", "uret_petek.py"), "w", encoding="utf-8").write(motor_kaynak)
        tampon = io.StringIO()
        with contextlib.redirect_stdout(tampon):
            rc = kd.main(argv)
        return rc, tampon.getvalue()

    def defter():
        if not os.path.exists(kd.DEFTER):
            return []
        return [json.loads(s) for s in open(kd.DEFTER, encoding="utf-8").read().splitlines() if s.strip()]

    damga_yol = gercek_damga_yolu(motor)
    # S1
    rc, out = kos(["kapi", "--kapi-kok", motor, "--kim", "SINAV", "--gerekce", "motor yaması sınaması"])
    d1 = json.load(open(damga_yol, encoding="utf-8")) if os.path.exists(damga_yol) else {}
    df = defter()
    kontrol("S1", rc == 0 and not os.path.exists(kd.DOSYA) and d1.get("kod") == "SINAMA"
            and len(df) == 1 and df[-1].get("kod") == "SINAMA",
            f"kapi → çıkış {rc} · KAYNAK-DURUM.json {'YAZILDI ✗' if os.path.exists(kd.DOSYA) else 'yazılmadı'} · "
            f"damga kod={d1.get('kod')} kapi={d1.get('kapi')} · defter {len(df)} satır")
    # S2
    yasak, _ = kd.bekci_yasak_mi("HERHANGI BIR OTURUM")
    kontrol("S2", yasak is False, f"SINAMA sonrası bekci_yasak_mi → {'YASAK ✗' if yasak else 'yasak YOK'}")
    # S3 — ters yön
    rc, out = kos(["kapat", "--kod", "KOSU", "--kapi-kok", motor, "--kim", "SINAV"])
    yasak, _ = kd.bekci_yasak_mi("HERHANGI BIR OTURUM")
    d3 = json.load(open(damga_yol, encoding="utf-8"))
    df = defter()
    kontrol("S3", rc == 0 and os.path.exists(kd.DOSYA) and yasak is True and d3.get("kod") == "KOSU"
            and df[-1].get("kod") == "KOSU",
            f"TERS — kapat --kod KOSU → çıkış {rc} · KAYNAK-DURUM.json "
            f"{'yazıldı' if os.path.exists(kd.DOSYA) else 'YAZILMADI ✗'} · bekçi {'YASAK' if yasak else 'yasak yok ✗'} · damga kod={d3.get('kod')}")
    os.remove(kd.DOSYA)
    # S4
    n = len(defter())
    rc, out = kos(["kapi", "--kapi-kok", motor, "--kim", "SINAV"], KIRLI)
    kontrol("S4", rc == 4 and len(defter()) == n and "MOTOR_YENI" in out and "SINAMA İLANI" in out,
            f"kirli motor → çıkış {rc} · defter +{len(defter()) - n}")
    # S5
    rc, out = kos(["kapi", "--kod", "KOSU", "--kapi-kok", motor])
    kontrol("S5", rc == 2, f"kapi --kod → çıkış {rc}")
    # S6
    df = defter()
    say = {k: sum(1 for s in df if s.get("kod") == k) for k in ("SINAMA", "KOSU")}
    kontrol("S6", say == {"SINAMA": 1, "KOSU": 1},
            f"defter: SINAMA {say['SINAMA']} · KOSU {say['KOSU']} — sınama sayısı defterden okunur")

    # ── YAYIN KAPISI — geçici KÖK ────────────────────────────────────────────
    yk = os.path.join(td, "yayin")
    dy.KOK = yk
    MOTOR_IZ = {"girdi.py": "a", "renkler.py": "b", "uret_petek.py": "c"}

    def kapi_bloku(d):          # B kuyruğu metnindeki _KOSU_KAPI'nin biçimi, ilanın KENDİ damgasından
        return {"kod": d["kod"], "durum": d["kapi"], "ilan": d["ilan"], "git_head": d.get("git_head")}

    def hukum():
        return dy.kapi_hukmu()[0], dy.kapi_damgasi()

    ust_js(yk, "donemler_ust.js", [{"girdi": {}, "motor": MOTOR_IZ, "kapi": kapi_bloku(d1)}])
    ih, k = hukum()
    kontrol("Y1", ih is True and len(k["sinama"]) == 1, f"S1 damgasından (kod=SINAMA) çıktı → ihlal={ih} · {k['sinama']}")
    ust_js(yk, "donemler_ust.js", [{"girdi": {}, "motor": MOTOR_IZ, "kapi": kapi_bloku(d3)}])
    ih, k = hukum()
    kontrol("Y2", ih is False and len(k["kosu"]) == 1, f"S3 damgasından (kod=KOSU) çıktı → ihlal={ih}")
    ust_js(yk, "donemler_ust.js", [{"girdi": {}, "motor": MOTOR_IZ}])
    ih, k = hukum()
    dy.KAPI_ALANI_ZORUNLU = True
    ih2 = dy.kapi_hukmu()[0]
    dy.KAPI_ALANI_ZORUNLU = False
    kontrol("Y3", ih is False and ih2 is True and len(k["kapisiz"]) == 1,
            f"kapı alanı yok → bugün ihlal={ih} (⚪) · KAPI_ALANI_ZORUNLU=True ile ihlal={ih2}")
    os.remove(os.path.join(yk, "data", "donemler_ust.js"))
    ust_js(yk, "paket_99.js", [{"girdi": {}, "motor": {"renkler.py": "b", "uret_devirler.py": "d"}},
                               {"girdi": {}, "motor": MOTOR_IZ, "kapi": kapi_bloku(d1)}])
    ih, k = hukum()
    kontrol("Y4", ih is True and k["sinama"] == ["data/paket_99.js (ilan %s)" % d1["ilan"]],
            f"paket: motor DIŞI iz + motor SINAMA izi → ihlal={ih}")
    os.remove(os.path.join(yk, "data", "paket_99.js"))
    ust_js(yk, "altlik.js", [{"girdi": {}, "motor": {"uret_altlik.py": "e"}, "kapi": {"kod": "SINAMA"}}])
    ih, k = hukum()
    kontrol("Y5", ih is False and not k["sinama"], f"motor DIŞI ürün kod=SINAMA taşısa bile → ihlal={ih}")

agac = ast.parse(open(os.path.join(KOK, "arac", "denetle_yayin.py"), encoding="utf-8").read())
ana = next(n for n in agac.body if isinstance(n, ast.FunctionDef) and n.name == "main")
son_if = [n for n in ast.walk(ana) if isinstance(n, ast.If)
          and any(isinstance(r, ast.Return) and getattr(r.value, "value", None) == 1 for r in n.body)][-1]
bagli = any(isinstance(x, ast.Name) and x.id == "_kapi_ihlali" for x in ast.walk(son_if.test))
kontrol("Y6", bagli, f"main()'in 'return 1' kararında `_kapi_ihlali` {'VAR' if bagli else 'YOK ✗'} (satır {son_if.lineno})")
dy.KOK = KOK
ih, k = dy.kapi_hukmu()[0], dy.kapi_damgasi()
kontrol("Y7", ih is False and not k["sinama"],
        f"GERÇEK ağaç → ihlal={ih} · SINAMA {len(k['sinama'])} · KOSU {len(k['kosu'])} · kapısız {len(k['kapisiz'])} ({', '.join(k['kapisiz'])})")

kd.kosu_damga_yolu = gercek_damga_yolu
for k_, v in GERCEK.items():
    sonra = parmak(v)
    kontrol("GERÇEK", ONCE[k_] == sonra, f"{v} dokunulmadı: önce {ONCE[k_][:12]} · sonra {sonra[:12]}")
print(f"\n{'✓ SINAV GEÇTİ' if not dusen else f'✗ SINAV DÜŞTÜ ({dusen})'}")
sys.exit(1 if dusen else 0)
