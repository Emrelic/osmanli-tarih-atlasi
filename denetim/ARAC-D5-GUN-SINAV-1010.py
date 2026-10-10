# -*- coding: utf-8 -*-
"""ARAC-D5-GUN-SINAV-1010 — Değişmez 5 (`denetle.degismez5` / `degismez5_rapor`) gün sayacı sınavı.

Koordinatör kararı (b), dayanak `denetim/KUR-KAPI-OLCUM-1010.md`, yama `denetim/D5-GUN-1010-v2.diff` (v2: 5c DEFTERİ, V1–V7 kolları).

Her soru TAZE ALT SÜREÇTE koşar, SENTETİK veriyle: gerçek `data/` okunmaz, yazılmaz —
sentetik kayıt listesi geçici bir JSON dosyasından `degismez5_rapor(Y)`a ENJEKTE edilir.
Çıkış kodu `denetle.main()`in hüküm sırasıyla türetilir: ihlal ⇒ 1 · `OLCULEMEDI_KOVA` dolu ⇒ 2 · yoksa 0
(main'in son üç satırı; tam `main()` 70 sn sürer ve D8 yüzünden taze ağaçta hep 2 verir ⇒ ayırt edemez).

V1–V6 sentetik defteri GEÇİCİ dosyaya yazar (depodaki defter okunmaz/yazılmaz); V7 ağacın KENDİ defterini gerçek veriyle kıyaslar (yalnız okur).
YAMASIZ ağaçta `degismez5_rapor` yoktur: alt süreç `degismez5(Y)`ü doğrudan çağırır
(eski main'in 5a hükmüyle aynı kural) — sınavın ISIRDIĞI orada görülür.

Kullanım:  py denetim/ARAC-D5-GUN-SINAV-1010.py [AĞAÇ_KÖKÜ]     (varsayılan: bu dosyanın ../)
Çıkış:     0 hepsi geçti · 1 en az bir soru kaldı
"""
import io
import json
import os
import subprocess
import sys
import tempfile

try:
    sys.stdout.reconfigure(encoding="utf-8")
except Exception:
    pass

KOK = os.path.abspath(sys.argv[1] if len(sys.argv) > 1 else
                      os.path.join(os.path.dirname(os.path.abspath(__file__)), ".."))

COCUK = r'''
import contextlib, inspect, io, json, os, sys, tempfile
kok, yol, dspec = sys.argv[1], sys.argv[2], json.loads(sys.argv[3])
sys.path.insert(0, os.path.join(kok, "arac"))
import denetle
sys.stdout.reconfigure(encoding="utf-8")
Y = json.load(io.open(yol, encoding="utf-8"))
buf = io.StringIO()
dyol = None
with contextlib.redirect_stdout(buf):
    rapor = getattr(denetle, "degismez5_rapor", None)
    if rapor is not None and "d5c_defter" in inspect.signature(rapor).parameters:
        yolu = "v2"
        # Sentetik defter — gerçek denetim/D5C-DEFTER.json'a DOKUNULMAZ
        if dspec["mod"] == "esit":
            kay = sorted(denetle.d5c_anahtar(r) for r in denetle.degismez5(Y)[2])
            ben = len(kay)
        elif dspec["mod"] == "liste":
            kay, ben = dspec["kayitlar"], dspec.get("beklenen", len(dspec["kayitlar"]))
        else:                                   # "yok"
            kay, ben = None, dspec.get("beklenen", 0)
        fd, dyol = tempfile.mkstemp(suffix=".json", prefix="d5c_defter_")
        os.close(fd)
        if kay is None:
            os.remove(dyol)
        else:
            io.open(dyol, "w", encoding="utf-8").write(json.dumps({"kayitlar": kay}, ensure_ascii=False))
        ihlal = rapor(Y, ayrinti=True, d5c_defter=dyol, d5c_beklenen=ben)
    elif rapor is not None:
        yolu = "v1"
        ihlal = rapor(Y, ayrinti=True)
    else:
        yolu = "yamasiz"
        c, s, k, m = denetle.degismez5(Y)
        ihlal = (len(c) > denetle.BEKLENEN_HAYALET_YERLESIM
                 or len(m) > denetle.BEKLENEN_DEVIR_BEYANI)
        for r in c:
            print("    5a  %s" % r[0])
if dyol and os.path.exists(dyol):
    os.remove(dyol)
kod = 1 if ihlal else (2 if denetle.OLCULEMEDI_KOVA else 0)
sys.stdout.write(json.dumps({"yol": yolu, "kod": kod, "cikti": buf.getvalue(),
                             "olc": [list(x) for x in denetle.OLCULEMEDI_KOVA]},
                            ensure_ascii=False))
'''

# DEPO kolu: ağacın KENDİ defteri + sabiti, ağacın KENDİ verisinin ölçümüne eşit mi (yalnız OKUR)
COCUK_DEPO = r'''
import io, json, os, sys
kok = sys.argv[1]
sys.path.insert(0, os.path.join(kok, "arac"))
os.chdir(kok)
import denetle, girdi
sys.stdout.reconfigure(encoding="utf-8")
sonuc = {"yol": "?", "kod": None, "cikti": "", "olc": []}
try:
    kay = sorted(denetle.d5c_anahtar(r) for r in denetle.degismez5(girdi.yukle(sessiz=True))[2])
    D = json.load(io.open(denetle.D5C_DEFTER_YOL, encoding="utf-8"))
    esit = sorted(D["kayitlar"]) == kay and denetle.BEKLENEN_D5C == len(kay)
    sonuc.update(yol="v2", kod=0 if esit else 1,
                 cikti="olcum %d · defter %d · sabit %d · fark +%d/-%d" % (
                     len(kay), len(D["kayitlar"]), denetle.BEKLENEN_D5C,
                     len(set(kay) - set(D["kayitlar"])), len(set(D["kayitlar"]) - set(kay))))
except Exception as e:
    sonuc.update(cikti="%s: %s" % (type(e).__name__, e))
sys.stdout.write(json.dumps(sonuc, ensure_ascii=False))
'''


def kayit(ad, kur=None, alan="s", f="1500-01-01", t="1923-10-29", tur="sehir", **ek):
    y = {"ad": ad, "lat": 40.0, "lon": 30.0, "tur": tur, "_kaynak": "SENTETIK",
         alan: [{"d": "sentetik-devlet", "f": f, "t": t}]}
    if kur is not None:
        y["kur"] = kur
    y.update(ek)
    return y


def _alt(argv):
    env = dict(os.environ, PYTHONIOENCODING="utf-8")
    p = subprocess.run([sys.executable, "-c"] + argv, capture_output=True, env=env, timeout=300)
    out = p.stdout.decode("utf-8", "replace")
    if p.returncode != 0:
        return {"yol": "?", "kod": None, "cikti": out + p.stderr.decode("utf-8", "replace"), "olc": []}
    return json.loads(out)


def kos(Y, defter=None):
    '''defter: None ⇒ {"mod": "esit"} (defter = bugünkü 5c kümesi) · {"mod":"liste","kayitlar":[..],"beklenen":n} · {"mod":"yok"}'''
    fd, yol = tempfile.mkstemp(suffix=".json", prefix="d5sinav_")
    try:
        with io.open(fd, "w", encoding="utf-8") as h:
            json.dump(Y, h, ensure_ascii=False)
        return _alt([COCUK, KOK, yol, json.dumps(defter or {"mod": "esit"})])
    finally:
        os.remove(yol)


def satirlar(r, onek):
    return [x for x in r["cikti"].splitlines() if x.startswith(onek)]


def a5(r, ad):
    return any(ad in x for x in satirlar(r, "    5a  "))


def tol_ozet(r):
    import re
    m = re.search(r"tolerans yuttu: (\d+) kalem", r["cikti"])
    return int(m.group(1)) if m else None


SONUC = []


def sor(no, ad, kosul, r, not_=""):
    SONUC.append((no, ad, bool(kosul)))
    print("%s %-4s %s  [kod %s · %s]%s" % ("✓" if kosul else "✗", no, ad, r.get("kod"), r.get("yol"),
                                          ("  — " + not_) if not_ else ""))


D5C_AD = ("kur: YOK · bölge değil · kasitli_bosluk yok · ilk dönem ≤1281 ⇒ ÖLÇÜLEMEDİ "
          "(muaf değil, ihlal değil, kapsam dışı değil)")

print("ARAC-D5-GUN-SINAV-1010 · ağaç: %s" % KOK)

# S1 — MÖ, dönem kur'dan ÖNCE ⇒ İHLAL (eski: _gun_farki None ⇒ sessiz temiz)
r = kos([kayit("S1-MO-ONCE", kur="-2999-01-01", f="-3100-01-01", t="-2000-01-01")])
sor("S1", "kur -2999 / f -3100 ⇒ İHLAL", r["kod"] == 1 and a5(r, "S1-MO-ONCE"), r)

# S2 — ters yön: dönem kur'dan SONRA ⇒ temiz, ölçülemedi DEĞİL, tolerans DEĞİL
r = kos([kayit("S2-MO-SONRA", kur="-3100-01-01", f="-2999-01-01", t="-2000-01-01")])
sor("S2", "kur -3100 / f -2999 ⇒ TEMİZ (ölçülerek)", r["kod"] == 0 and not r["olc"]
    and "S2-MO-SONRA" not in r["cikti"], r, "yamasızda TESADÜFEN geçer (None ⇒ sessiz)")

# S3 — 0 yılı (MÖ 1) ve -0001 (MÖ 2)
r = kos([kayit("S3-SIFIR", kur="0000-06-01", f="-0001-01-01", t="0100-01-01")])
sor("S3", "kur 0000 / f -0001 ⇒ İHLAL", r["kod"] == 1 and a5(r, "S3-SIFIR"), r)

# S4 — f == kur ⇒ temiz, tolerans listesinde de YOK
r = kos([kayit("S4-ESIT", kur="1450-03-03", f="1450-03-03")])
sor("S4", "f == kur ⇒ TEMİZ (tolerans listesinde yok)", r["kod"] == 0 and not r["olc"]
    and "S4-ESIT" not in r["cikti"], r)

# S5 — bozuk kur ⇒ OLCULEMEDI_KOVA'da ADIYLA, çıkış 2
r = kos([kayit("S5-BOZUK-KUR", kur="1453/05/29", f="1400-01-01")])
sor("S5", "bozuk kur ⇒ OLCULEMEDI_KOVA adıyla, çıkış 2", r["kod"] == 2
    and any("S5-BOZUK-KUR" in o[0] and "kur" in o[0] for o in r["olc"]), r)

# S5b — bozuk dönem f ⇒ OLCULEMEDI_KOVA adıyla, çıkış 2
r = kos([kayit("S5b-BOZUK-F", kur="1500-01-01", f="15x0-01-01")])
sor("S5b", "bozuk f ⇒ OLCULEMEDI_KOVA adıyla, çıkış 2", r["kod"] == 2
    and any("S5b-BOZUK-F" in o[0] and "s.f" in o[0] for o in r["olc"]), r)

# S6 — isg: dönemi kur'dan önce ⇒ İHLAL (B3)
r = kos([kayit("S6-ISG", kur="1686-01-01", alan="isg", f="1636-01-01", t="1700-01-01")])
sor("S6", "isg dönemi kur'dan önce ⇒ İHLAL", r["kod"] == 1 and a5(r, "S6-ISG"), r)

# S7 — 300 gün ⇒ ihlal DEĞİL ama "tolerans yuttu" listesinde ADIYLA
r = kos([kayit("S7-300G", kur="1686-01-01", f="1685-03-07")])     # 1686-01-01 − 1685-03-07 = 300 gün
sor("S7", "300 gün ⇒ ihlal değil, 'tolerans yuttu' listesinde", r["kod"] == 0
    and any("S7-300G" in x and "300 gün" in x for x in satirlar(r, "    5-tol")), r)

# S8 — 5c kovası ADIYLA basılıyor (ve eski yanlış başlık YOK)
r = kos([kayit("S8-KURSUZ", f="1281-01-01"), kayit("S8-Z6", f="1100-01-01")])
sor("S8", "5c kovası adıyla basılıyor", r["kod"] == 0 and D5C_AD in r["cikti"]
    and "ZATEN SAHİPLİ" not in r["cikti"], r)

# S9 — SAYAN = BASAN: özet sayıları liste uzunluklarına eşit
Y9 = [kayit("S9-T1", kur="1632-10-05", f="1632-01-01"),
      kayit("S9-T2", kur="1593-01-01", f="1592-01-01"),
      kayit("S9-T3", kur="-2999-03-01", f="-2999-01-01", t="-2000-01-01"),
      kayit("S9-C1", f="1281-01-01"), kayit("S9-C2", f="1000-01-01"), kayit("S9-C3", f="1200-05-05"),
      kayit("S9-BOLGE", f="1281-01-01", tur="bolge"),
      kayit("S9-BOZUK", kur="bozuk", f="1500-01-01")]
r = kos(Y9)
import re as _re
m5c = _re.search(r"Değişmez 5c i\s+(\d+) nokta", r["cikti"])
m_olc = _re.search(r"ÖLÇÜLEMEDİ — (\d+) tarih", r["cikti"])
n_tol, l_tol = tol_ozet(r), len(satirlar(r, "    5-tol"))
n_5c, l_5c = (int(m5c.group(1)) if m5c else None), len(satirlar(r, "    5c   "))
n_olc, l_olc = (int(m_olc.group(1)) if m_olc else None), len(satirlar(r, "    5-olc"))
k_olc = len([o for o in r["olc"] if o[0].startswith("Değişmez 5 ·")])
sor("S9", "sayan = basan (tolerans · 5c · ölçülemedi)",
    n_tol == l_tol == 3 and n_5c == l_5c == 3 and n_olc == l_olc == k_olc == 1, r,
    "tol %s/%s · 5c %s/%s · olc %s/%s/%s" % (n_tol, l_tol, n_5c, l_5c, n_olc, l_olc, k_olc))

# S10 — SINIFLAMA: Berezov sınıfı (iki yıl hassasiyetli, farklı yıl) · Yakutsk sınıfı (aynı yıl, yıl vs gün)
r = kos([kayit("S10-BEREZOV", kur="1593-01-01", f="1592-01-01"),
         kayit("S10-YAKUTSK", kur="1632-10-05", f="1632-01-01")])
tl = satirlar(r, "    5-tol")
sor("S10", "Berezov ⇒ 'olası gerçek çelişki — kaynakla sınanacak' · Yakutsk ⇒ 'hassasiyet artefaktı (yıl vs gün)'",
    r["kod"] == 0
    and any("S10-BEREZOV" in x and "olası gerçek çelişki — kaynakla sınanacak" in x for x in tl)
    and any("S10-YAKUTSK" in x and "hassasiyet artefaktı (yıl vs gün)" in x for x in tl)
    and "olası gerçek çelişki — kaynakla sınanacak: S10-BEREZOV" in r["cikti"], r)

# S11 — tolerans ölçüsü SAYISAL: MÖ'de 59 gün ⇒ tolerans listesi (ölçülemedi DEĞİL)
r = kos([kayit("S11-MO-TOL", kur="-2999-03-01", f="-2999-01-01", t="-2000-01-01")])
sor("S11", "MÖ tolerans (59 gün) sayısal ölçülüyor ⇒ listede, ölçülemedi değil",
    r["kod"] == 0 and not r["olc"] and any("S11-MO-TOL" in x and "59 gün" in x for x in satirlar(r, "    5-tol")), r)

# S12 — TOLERANS KALDI: 401 gün ⇒ İHLAL, 400 gün ⇒ tolerans
r = kos([kayit("S12-401", kur="1686-01-01", f="1684-11-26")])     # 401 gün
r2 = kos([kayit("S12-400", kur="1686-01-01", f="1684-11-27")])    # 400 gün
sor("S12", "401 gün ⇒ İHLAL · 400 gün ⇒ ihlal değil (eşik 400 KALDI)",
    r["kod"] == 1 and a5(r, "S12-401") and r2["kod"] == 0 and not a5(r2, "S12-400"), r)

# ═══ v2 — 5c DEFTERİ (emsal SAHIPLIK-TABAN-OLCULEMEDI). Aşım İHLAL DEĞİL, ÖLÇÜLEMEDİ (çıkış 2) ═══
K = lambda ad: "%s [sentetik-devlet]" % ad
YD = [kayit("D-A", f="1281-01-01"), kayit("D-B", f="1200-01-01"), kayit("D-C", f="1281-06-01")]

# V1 — eşit küme ⇒ 0
r = kos(YD, {"mod": "liste", "kayitlar": [K("D-A"), K("D-B"), K("D-C")]})
sor("V1", "defter = 5c kümesi ⇒ çıkış 0, ölçülemedi yok", r["kod"] == 0 and not r["olc"]
    and "GİRDİ" not in r["cikti"] and "TAVAN GEVŞEK" not in r["cikti"], r)

# V2 — GİREN: defterde olmayan kayıt 5c'de ⇒ İHLAL DEĞİL (1 yok), ÖLÇÜLEMEDİ adıyla (2)
r = kos(YD + [kayit("D-YENI", f="1281-01-01")],
        {"mod": "liste", "kayitlar": [K("D-A"), K("D-B"), K("D-C")]})
sor("V2", "giren kayıt ⇒ İHLAL DEĞİL, ölçülemedi adıyla (çıkış 2)", r["kod"] == 2
    and any(K("D-YENI") in o[0] for o in r["olc"]) and "NET TAKAS" not in r["cikti"], r)

# V3 — NET TAKAS: sayı aynı, küme farklı ⇒ ölçülemedi + "NET TAKAS"
r = kos(YD, {"mod": "liste", "kayitlar": [K("D-A"), K("D-B"), K("D-ESKI")]})
sor("V3", "net takas (sayı aynı, küme farklı) ⇒ 'NET TAKAS' + giren ölçülemedi",
    r["kod"] == 2 and "NET TAKAS" in r["cikti"] and any(K("D-C") in o[0] for o in r["olc"]), r)

# V4 — ÇIKAN: defterdeki kayıt artık 5c'de değil (kur: kazandı) ⇒ TAVAN GEVŞEK, bilgi, çıkış 0
r = kos(YD[:2] + [kayit("D-C", kur="1281-06-01", f="1281-06-01")],
        {"mod": "liste", "kayitlar": [K("D-A"), K("D-B"), K("D-C")]})
sor("V4", "çıkan kayıt ⇒ 'TAVAN GEVŞEK' bilgi, çıkış 0", r["kod"] == 0 and not r["olc"]
    and "TAVAN GEVŞEK" in r["cikti"] and K("D-C") in r["cikti"], r)

# V5 — defter YOK ⇒ ölçülemedi
r = kos(YD, {"mod": "yok", "beklenen": 3})
sor("V5", "defter yok ⇒ ölçülemedi (çıkış 2)", r["kod"] == 2
    and any(o[0] == "Değişmez 5c defteri" for o in r["olc"]), r)

# V5b — defter BOZUK ⇒ ölçülemedi
r = kos(YD, {"mod": "liste", "kayitlar": "bozuk", "beklenen": 3})
sor("V5b", "defter bozuk ⇒ ölçülemedi (çıkış 2)", r["kod"] == 2
    and any(o[0] == "Değişmez 5c defteri" for o in r["olc"]), r)

# V6 — sabit ≠ defter ⇒ ölçülemedi
r = kos(YD, {"mod": "liste", "kayitlar": [K("D-A"), K("D-B"), K("D-C")], "beklenen": 4})
sor("V6", "BEKLENEN_D5C ≠ defter kayıt sayısı ⇒ ölçülemedi (çıkış 2)", r["kod"] == 2
    and any(o[0] == "Değişmez 5c defteri" and "≠" in o[1] for o in r["olc"]), r)

# V7 — DEPO: ağacın denetim/D5C-DEFTER.json'u + BEKLENEN_D5C = ağacın gerçek verisinin ölçümü (yalnız OKUR)
r = _alt([COCUK_DEPO, KOK])
sor("V7", "depodaki defter = sabit = gerçek ölçüm", r["kod"] == 0, r, r["cikti"][:120])

kalan = [s for s in SONUC if not s[2]]
print("\nSONUÇ: %d soru · %d geçti · %d kaldı%s" % (
    len(SONUC), len(SONUC) - len(kalan), len(kalan),
    ("  → kalan: " + " ".join(s[0] for s in kalan)) if kalan else ""))
sys.exit(1 if kalan else 0)
