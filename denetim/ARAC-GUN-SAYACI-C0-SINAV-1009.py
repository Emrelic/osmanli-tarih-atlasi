# GUN-SAYACI-C0-1009 SINAVI — arac/gun.py + js/gun.js, İKİ YÖNDE.
# Kullanım (ağaç kökünden): py denetim/ARAC-GUN-SAYACI-C0-SINAV-1009.py
#   node eşi: denetim/ARAC-GUN-SAYACI-C0-SINAV-1009.js (bu betik çağırır)
# Bölümler: A yamasız kol (kusur GERÇEKTEN var) · B ikiz eşitliği · C gerileme (veri evreni) ·
#           D geçersiz girdi fırlatır · E çapraz denetim kapısı · F geçici kapı (ÖLÇÜLEMEDİ)
import hashlib, io, json, os, subprocess, sys, tempfile
KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(KOK, "arac"))
if getattr(sys.stdout, "encoding", "").lower() not in ("utf-8", "utf8"):
    sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8", errors="replace")
import gun as G
import denetle, girdi

SONUC = []
def sor(ad, kosul, ek=""):
    SONUC.append((ad, bool(kosul)))
    print(("✓ " if kosul else "✗ ") + ad + (("  · " + ek) if ek else ""))

def node(kip):
    r = subprocess.run(["node", "--max-old-space-size=1500", os.path.join(KOK, "denetim", "ARAC-GUN-SAYACI-C0-SINAV-1009.js"),
                        KOK, kip], capture_output=True, text=True, encoding="utf-8")
    if r.returncode != 0:
        raise SystemExit("node %s çıkış %d: %s" % (kip, r.returncode, r.stderr[:300]))
    return json.loads(r.stdout)

def dene(f):
    try:
        return {"v": f()}
    except Exception as e:                              # noqa: BLE001
        return {"hata": "%s: %s" % (type(e).__name__, e)}

# ---------------------------------------------------------------- A yamasız kol
print("A — YAMASIZ KOL (bugünkü okuyucular, gerçekten koşturuldu)")
Y = node("yamasiz")
g, y_app = Y["negatif"][0][1], Y["negatif"][0][2]
sor("A1 app.js gunIdx('-2999-01-01') → yıl 2149 (KUSUR VAR)", y_app == 2149, "gunIdx=%s → y=%s" % (g, y_app))
sor("A1' yeni gun('-2999-01-01') → yıl −2999", Y["negatif"][0][4] == -2999 and G.yil(G.gun("-2999-01-01")) == -2999)
sor("A2 Date.UTC 0001-0099: gunIdx her günü kaydırıyor (KUSUR VAR)", Y["d0099"][0] == Y["d0099"][1] > 0,
    "%d / %d gün" % tuple(Y["d0099"]))
sor("A3 denetle._gun_farki negatifte None (KUSUR VAR)", denetle._gun_farki("-2999-01-01", "1281-01-01") is None)
_bag = sum(366 if G.artik_mi(y) else 365 for y in range(-2999, 1281))   # bağımsız: yıl uzunlukları toplamı
sor("A3' yeni: gün farkı sayıyla (= -2999…1280 yıl uzunlukları toplamı)",
    G.gun("1281-01-01") - G.gun("-2999-01-01") == _bag, "%d gün" % _bag)
a4 = dene(lambda: denetle.gun_no("-2999-01-01"))
sor("A4 denetle.gun_no negatifte ÇÖKÜYOR (KUSUR VAR)", "hata" in a4, a4.get("hata", ""))
L = ["-2999-01-01", "-1199-06-15", "-0499-01-01", "0000-01-01", "330-05-11", "1281-01-01"]
sor("A5 dizgi sırası YANLIŞ (KUSUR VAR, Py ve JS)", sorted(L) != L and Y["dizgi_sira"] == sorted(L),
    " < ".join(sorted(L)))
sor("A5' sayı sırası DOĞRU (Py ve JS)", sorted(L, key=G.gun) == L and Y["sayi_sira"] == L)

# ---------------------------------------------------------------- B ikiz eşitliği
print("\nB — İKİZ EŞİTLİĞİ (Python ↔ JS, aynı vektör)")
J = node("ikiz")
h = hashlib.sha256()
bas, son = G.gun("-2999-01-01"), G.gun("9999-12-31")
kimlik = 0
for z in range(bas, son + 1):
    s = G.dizgi(z)
    if G.gun(s) != z:
        kimlik += 1
    h.update(("%d|%s|%d\n" % (z, s, G.yil(z))).encode())
sor("B1 aralık aynı (MÖ 3000 → 9999-12-31)", J["aralik"] == [bas, son], "%d gün" % (son - bas + 1))
sor("B2 gün×dizgi×yıl özeti BİREBİR (her gün)", J["ozet"] == h.hexdigest(), h.hexdigest()[:16])
sor("B3 gidiş-dönüş gun(dizgi(z)) == z (Py 0 hata · JS 0 hata)", kimlik == 0 and J["kimlik_hata"] == 0)
for kume in ("sinir", "varyant", "gecersiz"):
    farkli = []
    for s, jr in J[kume]:
        pr = dene(lambda: G.gun(s))
        if ("v" in pr) != ("v" in jr) or pr.get("v") != jr.get("v"):
            farkli.append((s, pr, jr))
    sor("B4 %s kümesi Py ↔ JS aynı (%d girdi)" % (kume, len(J[kume])), not farkli, str(farkli[:2]))
v = dict((s, r.get("v")) for s, r in J["varyant"])
sor("B5 908 ≡ 0908 ≡ +000908", v["908-03-01"] == v["0908-03-01"] == v["+000908-03-01"] == G.gun("0908-03-01"))
sor("B6 '1453' = '1453-05'−120 = 1453-01-01", v["1453"] == G.gun("1453-01-01") and v["1453-05"] == G.gun("1453-05-01"))
sor("B7 MÖ 3000 = -2999 ≡ -002999-01-01", v["-2999"] == v["-002999-01-01"] == G.gun("-2999-01-01"))
sor("B8 0 yılı var ve artık: 0000-02-29 geçerli", "v" in dict(J["sinir"])["0000-02-29"] and G.artik_mi(0))
sor("B9 1582-10-04 → 1582-10-15 arası 11 gün (proleptik Gregoryen, Jülyen sıçraması YOK)",
    G.gun("1582-10-15") - G.gun("1582-10-04") == 11)
sor("B10 yil_yazi Py ↔ JS", all(G.yil_yazi(y) == w for y, w in J["yil_yazi"]),
    " · ".join(w for _, w in J["yil_yazi"]))
sor("B11 dizgi hassasiyetleri Py ↔ JS", [G.dizgi(G.gun("-2999-03-01"), "gun"), G.dizgi(G.gun("-2999-03-01"), "ay"),
    G.dizgi(G.gun("-2999-03-01"), "yil"), G.dizgi(G.gun("+010000-01-01"))] == [x for _, x in J["dizgi_hass"]],
    str([x for _, x in J["dizgi_hass"]]))

# ---------------------------------------------------------------- C gerileme
print("\nC — GERİLEME (bugünkü veri evreni: girdi.yukle + devletler + kronoloji)")
tar = set()
Yer = girdi.yukle(sessiz=True)
for y in Yer:
    for kat in ("s", "d", "v", "isg", "kd"):
        for p in y.get(kat) or []:
            for k in ("f", "t"):
                if p.get(k):
                    tar.add(p[k])
    for k in ("kur", "bit"):
        if y.get(k):
            tar.add(y[k])
for d in girdi.oku_devletler():
    for k in ("f", "t"):
        if d.get(k):
            tar.add(str(d[k]))
E = node("evren")
app_gi = {}
for s, gi, jr in E["tarih"]:
    tar.add(s)
    app_gi[s] = (gi, jr)
print("   evren: %d yerleşim · %d betik (eval hatası %d) · %d ayrık tarih dizgisi"
      % (len(Yer), E["betik"], len(E["eval_hata"]), len(tar)))
okunamaz, py_fark, eski_cokus, js_fark, js_yeni_fark = [], [], [], [], []
for s in sorted(tar):
    r = dene(lambda: G.gun(s))
    if "hata" in r:
        okunamaz.append((s, r["hata"])); continue
    e = dene(lambda: denetle.gun_no(s) - 719163)
    if "hata" in e:
        eski_cokus.append(s)
    elif e["v"] != r["v"]:
        py_fark.append((s, e["v"], r["v"]))
    if s in app_gi:
        gi, jr = app_gi[s]
        if gi != r["v"]:
            js_fark.append((s, gi, r["v"]))
        if jr.get("v") != r["v"]:
            js_yeni_fark.append(s)
sor("C1 her tarih yeni sayaçla OKUNUYOR (geçersiz 0)", not okunamaz, str(okunamaz[:5]))
sor("C2 gun() == bugünkü gun_no − 719163 (okunabilen her tarihte)", not py_fark, str(py_fark[:5]))
sor("C3 gun() == bugünkü app.js gunIdx (kronoloji + künye evreni)", not js_fark, str(js_fark[:5]))
sor("C4 JS gun.js == Python gun.py (evren)", not js_yeni_fark, str(js_yeni_fark[:5]))
print("   bilgi: bugünkü gun_no'nun OKUYAMADIĞI tarih %d (yeni sayaç okuyor): %s" % (len(eski_cokus), eski_cokus[:8]))

# ---------------------------------------------------------------- D geçersiz
print("\nD — GEÇERSİZ GİRDİ FIRLATIR (None/NaN yasak)")
for s in ["", "1923-13-01", "abc", "1281-02-30", "1900-02-29", "1453/05/29", "1453-5-1", "1453-05-00"]:
    r = dene(lambda: G.gun(s))
    sor("D %-12r fırlatıyor" % s, "hata" in r, r.get("hata", "DÖNDÜ: %r" % r.get("v")))
for x in (None, 1453, 14.5):
    r = dene(lambda: G.gun(x))
    sor("D tip %-8r fırlatıyor" % (x,), "hata" in r)
sor("D JS geçersizlerin HEPSİ fırlatıyor", all("hata" in jr for _, jr in J["gecersiz"]))

# ---------------------------------------------------------------- E çapraz denetim kapısı
print("\nE — ÇAPRAZ DENETİM (UYARI DEĞİL KAPI)")
kod, sat = G.capraz_kapi([("Uruk", "-2999-01-01", "MÖ 3000"), ("Ur", "-2111-01-01", "M.Ö. 2112 civarı"),
                          ("İstanbul", "1453-05-29", "29 Mayıs 1453"),
                          ("Somnat", "1026-01-08", "16 Zilkade 416 / 8 Ocak 1026")])
sor("E1 tutarlı metinler GEÇER (çıkış 0)", kod == 0, str(sat))
for ad, t, m, bek in [("Uruk-kayık", "-3000-01-01", "MÖ 3000", "1 yıl kayık"),
                      ("Uruk-metinsiz", "-2999-01-01", "", "metinsiz MÖ"),
                      ("MS-ama-MÖ-metin", "0300-01-01", "MÖ 300", "MS tarih + MÖ metin"),
                      ("bozuk-tarih", "-2999-13-01", "MÖ 3000", "okunamayan tarih")]:
    kod, sat = G.capraz_kapi([(ad, t, m)])
    sor("E2 %s ⇒ çıkış ≠ 0 (%s)" % (ad, bek), kod != 0, sat[0] if sat else "GEÇTİ")

# ---------------------------------------------------------------- F geçici kapı
print("\nF — GEÇİCİ KAPI: negatif yıl + motor sayaçsız ⇒ ÖLÇÜLEMEDİ")
gercek = G.motor_sayacli_mi(os.path.join(KOK, "arac", "uret_petek.py"))
sor("F0 bugünkü uret_petek.py SAYAÇSIZ (işaret yok)", gercek is False)
uyd = [("Uruk (uydurma)", "-2999-01-01"), ("İstanbul", "1453-05-29")]
d, s = G.negatif_yil_kapisi(uyd, gercek)
sor("F1 uydurma MÖ kayıt + bugünkü motor ⇒ ÖLÇÜLEMEDİ", d == "OLCULEMEDI", s[0] if s else "")
d, s = G.negatif_yil_kapisi([("İstanbul", "1453-05-29"), ("Bizans", "330-05-11")], gercek)
sor("F2 negatif yıl yok ⇒ TAMAM (bugünkü veri kapıdan geçer)", d == "TAMAM")
d, s = G.negatif_yil_kapisi(uyd, True)
sor("F3 motor sayaçlı ⇒ TAMAM", d == "TAMAM")
d, s = G.negatif_yil_kapisi([("bozuk", "abc")], True)
sor("F4 okunamayan tarih ⇒ ÖLÇÜLEMEDİ (temiz sayılmaz)", d == "OLCULEMEDI")
with tempfile.TemporaryDirectory() as td:
    for metin, bek in [("x = 1\nGUN_SAYACI = True\n", True), ("# GUN_SAYACI = True\n", False),
                       ("    GUN_SAYACI = True\n", False), ("GUN_SAYACI = False\n", False)]:
        yol = os.path.join(td, "u.py")
        io.open(yol, "w", encoding="utf-8").write(metin)
        sor("F5 işaret %-24r ⇒ sayaçlı=%s" % (metin.strip(), bek), G.motor_sayacli_mi(yol) is bek)
d, s = G.negatif_yil_kapisi([(y["ad"], p[k]) for y in Yer for kat in ("s", "d", "v", "isg")
                             for p in y.get(kat) or [] for k in ("f", "t") if p.get(k)], gercek)
sor("F6 BUGÜNKÜ yerleşim verisi kapıdan GEÇİYOR (negatif yıl 0)", d == "TAMAM", "%d satır" % len(s))

n = sum(1 for _, k in SONUC if k)
print("\nSONUÇ: %d/%d" % (n, len(SONUC)))
sys.exit(0 if n == len(SONUC) else 1)
