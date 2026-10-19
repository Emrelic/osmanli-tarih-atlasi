# -*- coding: utf-8 -*-
"""C1/C2/C3 SINAVI — MO tarihlerin motor/denetle tarafindan HESAPLANABILMESI. Her soru IKI YONDE:
(a) yamali yol MO'de dogru mu · (b) eski (yamasiz) yol GERCEKTEN yanlis mi (sinav kendini yoklar).
Motor KOSTURULMAZ/ICE AKTARILMAZ (modul duzeyi saatlerce kosar): kaynak ast ile okunur, sinanan
islev dosyadaki GERCEK metinden cikarilip yalitik ad alaninda calisir.
Yamasiz motor: git'teki uret_petek.py yamasizsa dogrudan; yamaliysa (`GUN_SAYACI = True`) eski hal
`git show origin/main:arac/uret_petek.py`ten alinir. Yamali motor: yamasizsa gecici kopyada
ARAC-C3-YAMA-UYGULA-1018.py ile uretilir.
Kullanim: py denetim/ARAC-C1C3-SINAV-1018.py     Cikis: 0 gecti · 1 kaldi"""
import ast, os, shutil, subprocess, sys, tempfile

sys.stdout.reconfigure(encoding="utf-8")
KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(KOK, "arac"))
import gun as G

SAY = [0, 0]


def sor(ad, ok, ayr=""):
    SAY[1] += 1
    SAY[0] += bool(ok)
    print(("✓ " if ok else "✗ ") + ad + ("" if ok or not ayr else "  · " + str(ayr)[:200]))


def oku(p):
    return open(p, encoding="utf-8-sig").read()


def git_eski(yol):
    # C3 yamasi d418f91ce ile main'e girdi; "eski" hal onun ebeveyni (origin/main artik yamali)
    return subprocess.run(["git", "show", "d418f91ce^:" + yol], cwd=KOK, capture_output=True,
                          encoding="utf-8").stdout


# ---------------------------------------------------------------- motor: iki hal
motor_simdi = oku(os.path.join(KOK, "arac", "uret_petek.py"))
if "\nGUN_SAYACI = True" in motor_simdi:
    motor_yamali, motor_eski = motor_simdi, git_eski("arac/uret_petek.py")
else:
    motor_eski = motor_simdi
    t = tempfile.mkdtemp()
    os.makedirs(os.path.join(t, "arac"))
    shutil.copy(os.path.join(KOK, "arac", "uret_petek.py"), os.path.join(t, "arac", "uret_petek.py"))
    r = subprocess.run([sys.executable, os.path.join(KOK, "denetim", "ARAC-C3-YAMA-UYGULA-1018.py"), t],
                       capture_output=True, encoding="utf-8")
    sor("M0 C3 yamasi yamasiz motora TEMIZ uygulanir", r.returncode == 0, r.stdout + r.stderr)
    motor_yamali = oku(os.path.join(t, "arac", "uret_petek.py")) if r.returncode == 0 else ""
    shutil.rmtree(t, ignore_errors=True)
sor("M1 eski motorda isaret YOK, yamalida `GUN_SAYACI = True` VAR (satir basi)",
    "\nGUN_SAYACI = True" not in motor_eski and "\nGUN_SAYACI = True" in motor_yamali)


def islev(kaynak, ad, ek=""):
    """kaynaktan modul duzeyi `def ad` (ast) -> cagrilabilir; ek: once calisacak yardimci metin."""
    agac = ast.parse(kaynak)
    nod = [n for n in agac.body if isinstance(n, ast.FunctionDef) and n.name == ad]
    assert nod, ad
    ns = {}
    exec(ek, ns)
    exec(ast.get_source_segment(kaynak, nod[0]), ns)
    return ns[ad]


# yamali yardimcilar (gn, gsirala) gercek metinden
GN_EK = "import sys; sys.path.insert(0, %r)\nimport gun as _GUNMOD\n_GN_ONB = {}\n" % os.path.join(KOK, "arac")
_ns = {}
exec(GN_EK, _ns)
for _ad in ("gn", "gsirala"):
    _agac = ast.parse(motor_yamali)
    _n = [n for n in _agac.body if isinstance(n, ast.FunctionDef) and n.name == _ad][0]
    exec(ast.get_source_segment(motor_yamali, _n), _ns)
gn, gsirala = _ns["gn"], _ns["gsirala"]

# ---------------------------------------------------------------- motor: SESSIZ SAHIPSIZLIK iki yonde
# Uruk benzeri MO donemi [MO 3000, MO 500): f="-2999-01-01" t="-0499-01-01"; sorgu gunu MO 1500 = "-1499-06-15"
y = {"d": [], "v": [], "s": [{"f": "-2999-01-01", "t": "-0499-01-01", "d": "uruk"}]}
for ad_, gun_ in [("MO 1500", "-1499-06-15"), ("MO 3000 ilk gun", "-2999-01-01"), ("MO 500 (t, dislayici)", "-0499-01-01")]:
    bek = ad_ != "MO 500 (t, dislayici)"
    eski_f = islev(motor_eski, "_sahipli", "")
    yeni_f = islev(motor_yamali, "_sahipli", "")
    yeni_f.__globals__["gn"] = gn
    sor("S1 YAMALI _sahipli(%s) = %s" % (ad_, bek), yeni_f(y, gun_) is bek)
    if bek:
        sor("S1' ESKI _sahipli(%s) YANLIS (False = sessiz sahipsizlik) — sinav kendini yoklar" % ad_,
            eski_f(y, gun_) is False)
# 3 haneli yil: "900-01-01" > "1281-01-01" dizgi olarak; sayacla 900 < 1281
y2 = {"d": [], "v": [], "s": [{"f": "900-01-01", "t": "1281-01-01", "d": "x"}]}
sor("S2 3 haneli yil: YAMALI _sahipli(1000-06-15) True", yeni_f(y2, "1000-06-15") is True)
sor("S2' ESKI ayni sorguda False (dizgi 'f' > 'g')", eski_f(y2, "1000-06-15") is False)

# ---------------------------------------------------------------- motor: siralama / KESIT_SON / sentinel
L = ["-2999-01-01", "-1199-06-15", "-0499-01-01", "0000-01-01", "330-05-11", "1281-01-01", "1923-11-01"]
sor("S3 gsirala MO..MS dogru gun sirasi", gsirala(L) == L, gsirala(L))
sor("S3' dizgi sort() ayni listede YANLIS (sinav kendini yoklar)", sorted(L) != L)
sor("S4 KESIT_SON = ufuk sonu + 3 gun (1923-10-29 -> 1923-11-01; eski nobetci BIREBIR)",
    G.dizgi(G.gun("1923-10-29") + 3) == "1923-11-01")
sor("S4' yil < 1 UFUK_SONU de hesaplanir (date.fromisoformat patlardi)", G.dizgi(G.gun("-0001-12-30") + 3) == "0000-01-02")
sor("S5 'acik baslangic' sentinel -9999 EPOK'tan once; eski '0000' MO 1'dir (MO 3000 hatti 'oncesi' sanilirdi)",
    G.gun("-9999-01-01") < G.gun("-2999-01-01") < G.gun("0000-01-01"))

# ---------------------------------------------------------------- motor: tarama araci iki yonde
def tarama(metin):
    t = tempfile.NamedTemporaryFile("w", suffix=".py", delete=False, encoding="utf-8")
    t.write(metin); t.close()
    r = subprocess.run([sys.executable, os.path.join(KOK, "denetim", "ARAC-C3-DIZGI-KIYAS-TARAMA-1018.py"), t.name],
                       capture_output=True, encoding="utf-8")
    os.unlink(t.name)
    return r.returncode, r.stdout.strip().splitlines()[-1]


kod, son = tarama(motor_eski)
sor("T1 tarama ESKI motorda ihlal bulur (cikis 1)", kod == 1, son)
kod, son = tarama(motor_yamali)
sor("T2 tarama YAMALI motorda 0 supheli (cikis 0)", kod == 0, son)

# ---------------------------------------------------------------- denetle (C1)
import denetle as D
sor("D1 _gun_farki MO'de SAYI ve bagimsiz yil-uzunlugu toplamina esit (eskiden None -> ihlal gorunmezdi)",
    D._gun_farki("1281-01-01", "-2999-01-01") == sum(366 if G.artik_mi(i) else 365 for i in range(-2999, 1281)))


def firlatir(f):
    try:
        f()
    except (ValueError, TypeError):
        return True
    return False


sor("D2 bos uc -> None", D._gun_farki("", "1281-01-01") is None)
sor("D2' gecersiz tarih FIRLATIR (sessiz None degil)", firlatir(lambda: D._gun_farki("1281-13-01", "1281-01-01")))
sor("D3 _d8_gun_once('-0499-01-01') = '-0500-12-31'", D._d8_gun_once("-0499-01-01") == "-0500-12-31")
sor("D3' _d8_gun_once('900-01-01') = '0899-12-31' (3 haneli yil eskiden None)", D._d8_gun_once("900-01-01") == "0899-12-31")
sor("D4 kirilma_disi MO tarihte COKMEZ ve UFUK disi sayar", D.kirilma_disi("-2999-01-01") is True)
Yb = [{"ad": "Uruk-sahte", "d": [{"f": "-0499-01-01", "t": "-2999-01-01"}], "s": [], "v": []},   # TERS
      {"ad": "Ur-sahte", "d": [{"f": "-2999-01-01", "t": "-2999-01-01"}], "s": [], "v": []}]   # SIFIR
R = D.donem_sagligi(Yb)
sor("D5 donem_sagligi MO TERS donemi yakalar (f > t gun sirasiyla)", [x[0] for x in R["ters"]] == ["Uruk-sahte"], R["ters"])
sor("D5' donem_sagligi MO SIFIR uzunlugu yakalar", [x[0] for x in R["sifir"]] == ["Ur-sahte"], R["sifir"])
Yok = [{"ad": "A", "d": [{"f": "-2999-01-01", "t": "-0499-01-01"}], "s": [], "v": []}]
R2 = D.donem_sagligi(Yok)
sor("D5'' gecerli MO donem ihlal DEGIL (yalnis alarm yok)", not R2["ters"] and not R2["sifir"])
# eski davranis: dizgi f > t ayni TERS donemi gormez, GECERLI donemi ters sanardi
sor("D5''' eski dizgi kiyasi GECERLI MO donemi 'ters' sanirdi (-2999... > -0499...)", "-2999-01-01" > "-0499-01-01")

# kapi: negatif yil + sayacsiz motor -> OLCULEMEDI ; sayacli -> TAMAM ; denetle baglantisi cagiriliyor
d, s_ = G.negatif_yil_kapisi([("Uruk", "-2999-01-01")], False)
sor("K1 negatif yil + sayacsiz motor -> OLCULEMEDI", d == "OLCULEMEDI")
d, s_ = G.negatif_yil_kapisi([("Uruk", "-2999-01-01")], True)
sor("K1' negatif yil + sayacli motor -> TAMAM", d == "TAMAM")
sor("K2 denetle.main kapiyi CAGIRIYOR (cagirani olmayan kapi degil)",
    "negatif_yil_kapisi_calistir(Y, O)" in oku(os.path.join(KOK, "arac", "denetle.py")))
D.OLCULEMEDI_KOVA.clear()
D.negatif_yil_kapisi_calistir([{"ad": "Uruk", "d": [{"f": "-2999-01-01", "t": "-0499-01-01"}], "s": [], "v": []}], [])
sor("K3 denetle: MO veri + (isaretsiz motor ise) OLCULEMEDI_KOVA dolar (isaretli ise bos)",
    bool(D.OLCULEMEDI_KOVA) == ("\nGUN_SAYACI = True" not in motor_simdi))
D.OLCULEMEDI_KOVA.clear()
D.negatif_yil_kapisi_calistir([{"ad": "Ist", "d": [{"f": "1453-05-29", "t": "1923-10-29"}], "s": [], "v": []}], [])
sor("K3' MS veri: kapi dolmaz (yalnis alarm yok)", not D.OLCULEMEDI_KOVA)

# ---------------------------------------------------------------- app.js (C2): kalan ham dizgi kiyasi yok
import re
app = oku(os.path.join(KOK, "js", "app.js"))
kalan = re.findall(r"\b\w+\.[ft] (?:<=|<|>=|>) (?:gs|gun|\w+\.[ft])\b|\b(?:gs|gun) < \w+\.[ft]\b", app)
sor("J1 app.js'te HAM dizgi tarih kiyasi (p.f <= gs vb.) kalmadi", not kalan, kalan[:5])
sor("J2 gelistirici.js yerSahibi GUN.gun ile kiyaslar", "GUN.gun(r.f) <= GUN.gun(gun)" in oku(os.path.join(KOK, "js", "gelistirici.js")))

print("\nSONUÇ: %d/%d" % tuple(SAY))
sys.exit(0 if SAY[0] == SAY[1] else 1)
