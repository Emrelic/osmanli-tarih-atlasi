# ZAMAN-Z1-1008 SINAVI — UFUK DAMGASI · D1 KAPSAM DIŞI · odak VERİ PENCERESİ DIŞI ·
# Aral ÖRTÜŞME · yayın kapısı UFUK EŞİTLİĞİ. Her soru İKİ YÖNDE (öter / ötmez).
# Kullanım (ağaç kökünden):  py denetim/ARAC-ZAMAN-Z1-SINAV-1008.py [--gercek]
#   --gercek  odak_olc'u GERÇEK veriyle iki kez koşturur (~2-4 dk; devletler_harita.js ister)
import io, os, re, sys, tempfile, shutil
KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(KOK, "arac"))
if getattr(sys.stdout, "encoding", "").lower() not in ("utf-8", "utf8"):
    sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8", errors="replace")
import girdi, denetle, denetle_yayin

SONUC = []


def sor(ad, kosul):
    SONUC.append((ad, bool(kosul)))
    print(("✓ " if kosul else "✗ ") + ad)


# ① UFUK DAMGASI — kirilma_disi
for g in sorted(girdi.UFUK_DAMGASI):
    sor(f"① damga {g} kırılma SAYILMAZ", denetle.kirilma_disi(g))
sor("① 1220-01-01 (Lapaha) kırılma SAYILIR", not denetle.kirilma_disi("1220-01-01"))
sor("① 1500-06-15 kırılma SAYILIR", not denetle.kirilma_disi("1500-06-15"))
sor("① 0999-12-31 (UFUK dışı) SAYILMAZ", denetle.kirilma_disi("0999-12-31"))
sor("① 1945-09-03 (UFUK dışı) SAYILMAZ", denetle.kirilma_disi("1945-09-03"))
sor("① damga TEK tanımdan: UFUK ∪ VERI_UFKU", girdi.UFUK_DAMGASI == set(girdi.UFUK) | set(girdi.VERI_UFKU))

# ② ufuk_devirleri — iki yön
dv = girdi.ufuk_devirleri()
sor("② bugün iki devir (geri · ileri)", [d[0] for d in dv] == ["geri", "ileri"])
_eski = girdi.VERI_UFKU
girdi.VERI_UFKU = girdi.UFUK
sor("② VERI_UFKU = UFUK ⇒ devir YOK (kovalar kendiliğinden kapanır)", girdi.ufuk_devirleri() == [])
girdi.VERI_UFKU = _eski

# ③ Değişmez 1 KAPSAM DIŞI — sentetik evren, iki yön
def P(f, t, d="x"):
    return {"d": d, "f": f, "t": t}
Y = [
    {"ad": "A-yalniz-veri", "s": [P("1281-01-01", "1923-10-29")]},          # iki devirde de kapsam dışı
    {"ad": "B-1220-kursuz", "s": [P("1220-01-01", "1923-10-29")]},          # geri: VERİ VAR → delik
    {"ad": "C-kur-1300", "kur": "1300-01-01", "s": [P("1300-01-01", "1923-10-29")]},  # geri: sahnede değil
    {"ad": "D-dolgu"},                                                      # dönemsiz → atlanır
    {"ad": "E-tam", "s": [P("1000-01-01", "1945-09-02")]},                  # hiçbir kovada
    {"ad": "F-1220-kurlu", "kur": "1220-01-01", "s": [P("1220-01-01", "1945-09-02")]},  # hiçbir kovada
]
kd, vd = denetle.degismez1_kapsam(Y)
kds = {(a, d) for a, d, _ in kd}
vds = {(a, d) for a, d, _ in vd}
sor("③ A iki devirde KAPSAM DIŞI", {("A-yalniz-veri", "geri"), ("A-yalniz-veri", "ileri")} <= kds)
sor("③ B geri devirde DELİK (veri var) — kovaya GİRMEDİ", ("B-1220-kursuz", "geri") in vds
    and ("B-1220-kursuz", "geri") not in kds)
sor("③ C (kur:1300) geride YOK, ileride KAPSAM DIŞI", ("C-kur-1300", "geri") not in kds | vds
    and ("C-kur-1300", "ileri") in kds)
sor("③ D dolgu ve E/F tam noktalar hiçbir kovada", not any(a[0] in "DEF" for a, _ in kds | vds))
girdi.VERI_UFKU = girdi.UFUK
kd2, vd2 = denetle.degismez1_kapsam(Y)
girdi.VERI_UFKU = _eski
sor("③ VERI_UFKU = UFUK ⇒ kova BOŞ (veri yazılınca kendiliğinden çıkar deseni)", not kd2 and not vd2)
sor("③ degismez1() sayısı DEĞİŞMEDİ (309'la toplanmaz)", isinstance(denetle.degismez1(Y), dict))

# ④ Aral — ÖRTÜŞME testi (sentetik goller.js)
tmp = tempfile.mkdtemp()
try:
    io.open(os.path.join(tmp, girdi.GOL_DOSYASI), "w", encoding="utf-8").write(
        'window.GOLLER = [\n'
        ' {ad:"kismi", gecerli:{f:"1281-01-01", t:"1923-10-29"}, geometry:{type:"Polygon",coordinates:[]}},\n'
        ' {ad:"tam", gecerli:{f:"1000-01-01", t:"1945-09-02"}, geometry:{type:"Polygon",coordinates:[]}},\n'
        ' {ad:"disarida", gecerli:{f:"1950-01-01", t:"1990-01-01"}, geometry:{type:"Polygon",coordinates:[]}},\n'
        ' {ad:"zamansiz", geometry:{type:"Polygon",coordinates:[]}}\n];\n')
    _d = girdi.DATA
    girdi.DATA = tmp
    al = [g["ad"] for g in girdi.oku_goller(sessiz=True)]
    girdi.DATA = _d
finally:
    shutil.rmtree(tmp, ignore_errors=True)
sor("④ KISMİ örtüşen göl ALINIR (eski kapsama testi atlıyordu)", "kismi" in al)
sor("④ tam ve zamansız göl ALINIR", "tam" in al and "zamansiz" in al)
sor("④ HİÇ örtüşmeyen göl ALINMAZ", "disarida" not in al)
sor("④ gerçek goller.js: Aral alınır", len(girdi.oku_goller(sessiz=True)) == 1)

# ⑤ yayın kapısı — UFUK EŞİTLİĞİ
APP = io.open(os.path.join(KOK, "js", "app.js"), encoding="utf-8").read()
def esit(metin):
    fd, yol = tempfile.mkstemp(suffix=".js")
    os.close(fd)
    io.open(yol, "w", encoding="utf-8").write(metin)
    try:
        return denetle_yayin.ufuk_esitligi(yol)
    finally:
        os.unlink(yol)
ih, s = denetle_yayin.ufuk_esitligi()
sor("⑤ gerçek app.js = girdi.py ⇒ temiz", not ih)
ih, s = esit(APP.replace('gunIdx("1945-09-02")', 'gunIdx("1923-10-29")', 1))
sor("⑤ BITIS geri alınmış (H-0008 deseni) ⇒ İHLAL", ih and "BOZUK" in s[0])
ih, s = esit(re.sub(r'(?m)^\s*var VERI_UFKU\s*=.*$', "", APP, count=1))
sor("⑤ VERI_UFKU satırı yok (arayüz yarısı inmemiş) ⇒ ÖLÇÜLEMEDİ = ihlal", ih and "ÖLÇÜLEMEDİ" in s[0])
ih, s = esit(re.sub(r'(?m)^\s*var VERI_UFKU\s*=.*$', '// var VERI_UFKU = ["1281-01-01", "1923-10-29"];', APP, count=1))
sor("⑤ literal YALNIZ yorumda ⇒ ÖLÇÜLEMEDİ (yorum sayılmaz)", ih and "ÖLÇÜLEMEDİ" in s[0])
ih, s = esit(APP + '\nvar BITIS = gunIdx("1945-09-02");\n')
sor("⑤ çift tanım ⇒ ÖLÇÜLEMEDİ", ih and "ÖLÇÜLEMEDİ" in s[0])
ih, s = esit(APP.replace('"1923-10-29"]', '"1945-09-02"]', 1))
sor("⑤ VERI_UFKU farklı ⇒ İHLAL", ih and "VERI_UFKU" in s[0])

# ⑥ odak VERİ PENCERESİ DIŞI — GERÇEK koşul (iki koşu)
if "--gercek" in sys.argv:
    import odak_olc
    D = odak_olc.olc()
    if D.get("hata"):
        sor("⑥ odak ölçülebildi: " + D["hata"][:60], False)
    else:
        K1 = odak_olc.kimlik_ozetle(D)
        vd = K1["veri_disi"]
        sor(f"⑥ kova DOLU ({len(vd)})", len(vd) > 0)
        sor("⑥ kovada UFUK DIŞI madde YOK (0900/0981 girmez)",
            all(girdi.UFUK[0] <= x["t"].zfill(10) <= girdi.UFUK[1] for x in vd))
        sor("⑥ kovadaki çiftler SESSİZ sayımında DEĞİL (toplanmaz)",
            not ({(x["k"], x["kunye"]) for x in vd} & set(K1["sessiz"])))
        _f = girdi.ufuk_devirleri
        girdi.ufuk_devirleri = lambda: []
        try:
            K0 = odak_olc.kimlik_ozetle(odak_olc.olc())
        finally:
            girdi.ufuk_devirleri = _f
        sor("⑥ devir YOK ⇒ kova BOŞ ve aynı çiftler SESSİZ'e döner",
            not K0["veri_disi"] and {(x["k"], x["kunye"]) for x in vd if x["eski_dal"] == "SEKME_SESSIZ"}
            <= set(K0["sessiz"]))
else:
    print("ⓘ ⑥ (odak, gerçek koşul) KOŞULMADI — --gercek ile")

n_ok = sum(1 for _, k in SONUC if k)
print(f"\nSONUÇ: {n_ok}/{len(SONUC)}")
sys.exit(0 if n_ok == len(SONUC) else 1)
