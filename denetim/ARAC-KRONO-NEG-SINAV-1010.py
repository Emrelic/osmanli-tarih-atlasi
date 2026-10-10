# -*- coding: utf-8 -*-
"""ARAC-KRONO-NEG-SINAV-1010 — kronoloji madde okuyucuları NEGATİF (MÖ) `t:`yi okuyor mu?

KRONO-NEG-1010 (UMIT, 10 Ekim 2026). Yama: `denetim/KRONO-NEG-1010.diff`.
Sınanan dört okuyucu (hepsi yamada):
    arac/denetle_duygu.py   kayitlar()          madde başı deseni
    arac/uret_duygu.py      kayitlar()          madde başı deseni (YAZICI)
    arac/_yama_sinav.py     gunler |= …         kronoloji gün kümesi
    arac/denetle_kronoloji.py  ② biçim testi    (`bicim += 1` dalının koşulu)

İşlevler modül İTHAL EDİLMEDEN AST'den alınır: `uret_duygu.py` modül düzeyinde
`os.chdir(r"C:\\atlas")` yapıp `data/`ya YAZAR, `_yama_sinav.py` `girdi.yukle()` +
node koşturur. Yalnız `import` (re/gun/os/io/sys/glob/collections), `re.compile`
atamaları ve `def`ler çalıştırılır.

YÖN 1  (N*)  sentetik MÖ madde `t:"-0330-10-18"` OKUNUR         → yamasızda KALIR (ısırma)
YÖN 2  (R*)  yanlış pozitif yok: çöp/3 hane/ay hassasiyeti      → iki ağaçta da GEÇER
GERİLEME (G*) gerçek kronoloji evreninde (olaylar* · kronoloji_*) bu ağacın okuduğu
             küme == `--taban`daki sürümün okuduğu küme, BİREBİR  → iki ağaçta da GEÇER

Koşum:  py denetim/ARAC-KRONO-NEG-SINAV-1010.py --taban <ref>
        (SINAV-ISIRMA: py arac/sinav_isirma.py --taban <sha> --diff denetim/KRONO-NEG-1010.diff
                       --sinav denetim/ARAC-KRONO-NEG-SINAV-1010.py -- --taban <sha>)
Çıkış: 0 hepsi geçti · 1 kalan var · 2 kullanım/ölçülemedi.
"""
import ast
import glob
import json
import os
import subprocess
import sys

if hasattr(sys.stdout, "reconfigure"):
    sys.stdout.reconfigure(encoding="utf-8", errors="replace")
if hasattr(sys.stderr, "reconfigure"):
    sys.stderr.reconfigure(encoding="utf-8", errors="replace")

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
ARAC = os.path.join(KOK, "arac")
sys.path.insert(0, ARAC)
import gun  # noqa: E402  (yalnız ithal; bu ağacın gun.py'si)

if "--taban" not in sys.argv or sys.argv.index("--taban") + 1 >= len(sys.argv):
    print("KULLANIM: --taban <ref> ZORUNLU (öntanımsız taban yok)")
    sys.exit(2)
TABAN_REF = sys.argv[sys.argv.index("--taban") + 1]
_r = subprocess.run(["git", "-C", KOK, "rev-parse", "--verify", TABAN_REF + "^{commit}"],
                    capture_output=True, text=True)
if _r.returncode != 0:
    print("ÖLÇÜLEMEDİ: taban çözülemedi: %s" % TABAN_REF)
    sys.exit(2)
TABAN = _r.stdout.strip()
_h = subprocess.run(["git", "-C", KOK, "rev-parse", "HEAD"], capture_output=True, text=True)
print("AĞAÇ: %s  (HEAD %s)" % (KOK, _h.stdout.strip()[:8]))
print("TABAN: %s → %s" % (TABAN_REF, TABAN[:8]))

gecti = toplam = 0


def sina(no, ad, kosul, ayrinti=""):
    global gecti, toplam
    toplam += 1
    gecti += bool(kosul)
    print("%s %s %s%s" % ("✓" if kosul else "✗", no, ad,
                          ("  — " + ayrinti) if ayrinti else ""))


# ────────────────────────────────────────── AST'den güvenli yükleme
IZINLI_MODUL = {"re", "gun", "os", "io", "sys", "glob", "collections", "json"}


def _rcompile_mi(dugum):
    if isinstance(dugum, ast.Tuple):
        return all(_rcompile_mi(e) for e in dugum.elts)
    return (isinstance(dugum, ast.Call) and isinstance(dugum.func, ast.Attribute)
            and dugum.func.attr == "compile" and isinstance(dugum.func.value, ast.Name)
            and dugum.func.value.id == "re")


def ad_alani(kaynak, adi):
    """Modülden yalnız import + re.compile ataması + def — yan etkisiz alt küme."""
    import warnings
    with warnings.catch_warnings():         # eski kaynaktaki `\.` kaçış uyarısı stderr'i kirletmesin
        warnings.simplefilter("ignore", SyntaxWarning)
        agac = ast.parse(kaynak, filename=adi)
    govde = []
    for d in agac.body:
        if isinstance(d, ast.Import) and all(a.name in IZINLI_MODUL for a in d.names):
            govde.append(d)
        elif isinstance(d, ast.Assign) and _rcompile_mi(d.value):
            govde.append(d)
        elif isinstance(d, ast.FunctionDef):
            govde.append(d)
    import re as _re
    ns = {"__name__": "_sinav_" + adi, "re": _re}   # `re` her modülde zaten ithal
    exec(compile(ast.Module(body=govde, type_ignores=[]), adi, "exec"), ns)
    return ns, agac


def kaynak_agac(yol):
    return open(os.path.join(KOK, yol), encoding="utf-8").read()


def kaynak_taban(yol):
    r = subprocess.run(["git", "-C", KOK, "show", "%s:%s" % (TABAN, yol)],
                       capture_output=True)
    if r.returncode != 0:
        raise RuntimeError("taban okunamadı: %s" % yol)
    return r.stdout.decode("utf-8")


def kayit_okuyucu(kaynak, adi):
    ns, _ = ad_alani(kaynak, adi)
    return ns["kayitlar"]


def gun_kumesi_okuyucu(kaynak, adi):
    """`gunler |= …` deyimlerini (nerede olursa olsun) `s` metni üstünde koşturur."""
    ns, agac = ad_alani(kaynak, adi)
    deyimler = [d for d in ast.walk(agac)
                if isinstance(d, ast.AugAssign) and isinstance(d.target, ast.Name)
                and d.target.id == "gunler"]
    if not deyimler:
        raise RuntimeError("%s: `gunler |=` deyimi yok" % adi)
    kod = compile(ast.Module(body=deyimler, type_ignores=[]), adi, "exec")

    def oku(s):
        yerel = dict(ns)
        yerel.update(gunler=set(), s=s)
        exec(kod, yerel)
        return yerel["gunler"]
    return oku


def bicim_ihlal_okuyucu(kaynak, adi):
    """`bicim += 1` dalının koşulunu `m` (madde sözlüğü) üstünde değerlendirir."""
    ns, agac = ad_alani(kaynak, adi)
    for d in ast.walk(agac):
        if isinstance(d, ast.If) and any(
                isinstance(b, ast.AugAssign) and isinstance(b.target, ast.Name)
                and b.target.id == "bicim" for b in d.body):
            kod = compile(ast.Expression(body=d.test), adi, "eval")
            return lambda m: bool(eval(kod, dict(ns, m=m)))
    raise RuntimeError("%s: `bicim += 1` dalı yok" % adi)


DOSYALAR = {
    "duygu": "arac/denetle_duygu.py",
    "uret": "arac/uret_duygu.py",
    "yama": "arac/_yama_sinav.py",
    "krono": "arac/denetle_kronoloji.py",
}
try:
    AGAC = {
        "duygu": kayit_okuyucu(kaynak_agac(DOSYALAR["duygu"]), "denetle_duygu"),
        "uret": kayit_okuyucu(kaynak_agac(DOSYALAR["uret"]), "uret_duygu"),
        "yama": gun_kumesi_okuyucu(kaynak_agac(DOSYALAR["yama"]), "_yama_sinav"),
        "krono": bicim_ihlal_okuyucu(kaynak_agac(DOSYALAR["krono"]), "denetle_kronoloji"),
    }
    TABN = {
        "duygu": kayit_okuyucu(kaynak_taban(DOSYALAR["duygu"]), "denetle_duygu_taban"),
        "uret": kayit_okuyucu(kaynak_taban(DOSYALAR["uret"]), "uret_duygu_taban"),
        "yama": gun_kumesi_okuyucu(kaynak_taban(DOSYALAR["yama"]), "_yama_sinav_taban"),
        "krono": bicim_ihlal_okuyucu(kaynak_taban(DOSYALAR["krono"]), "denetle_kronoloji_taban"),
    }
except Exception as e:                                      # noqa: BLE001
    print("ÖLÇÜLEMEDİ: okuyucu kurulamadı: %s" % e)
    sys.exit(2)

# ────────────────────────────────────────── YÖN 1 — MÖ madde okunuyor
MO = "-0330-10-18"
SENT = ('window.OLAYLAR_SINAV = [\n'
        '  { t:"1453-05-29", b:"İstanbul\'un fethi", k:"fetih", duygu:["🎉"] },\n'
        '  { t:"%s", b:"Gaugamela", k:"savas", d:"Dârâ yenildi", duygu:["⚔️"] },\n'
        '  { t:"-0538-10", b:"Babil (ay hassasiyeti)", k:"fetih" },\n'
        '  { "t": "%s", "b": "JSON biçimli MÖ" },\n'
        '];\n' % (MO, MO))


def basliklar(okuyucu, metin):
    import re
    out = []
    for k in okuyucu(metin):
        g = k[2] if isinstance(k, tuple) else k
        m = re.search(r'\bb:\s*"([^"]*)"', g)
        out.append(m.group(1) if m else "?")
    return out


for anah, no, ad in (("duygu", "N1", "denetle_duygu.kayitlar"),
                     ("uret", "N2", "uret_duygu.kayitlar (YAZICI)")):
    b = basliklar(AGAC[anah], SENT)
    sina(no, "%s MÖ maddeyi (t:\"%s\") okuyor" % (ad, MO), "Gaugamela" in b,
         "okunan: %s" % b)
    sina(no + "b", "%s MÖ ay hassasiyetli maddeyi (t:\"-0538-10\") okuyor" % ad,
         "Babil (ay hassasiyeti)" in b, "okunan: %s" % b)

gk = AGAC["yama"](SENT)
sina("N3", "_yama_sinav gün kümesi MÖ günü (iki biçim) içeriyor", MO in gk,
     "küme: %s" % sorted(gk))
sina("N4", "denetle_kronoloji ② MÖ tam günü biçim İHLALİ SAYMIYOR",
     not AGAC["krono"]({"t": MO}), "t=%s" % MO)

# ────────────────────────────────────────── YÖN 2 — yanlış pozitif yok
COP = ('  { t:"-0330-13-45", b:"çöp ay" },\n'
       '  { t:"1453-02-30", b:"çöp gün" },\n'
       '  { t:"abcd", b:"harf" },\n')
for anah, no, ad in (("duygu", "R1", "denetle_duygu"), ("uret", "R2", "uret_duygu")):
    b = basliklar(AGAC[anah], COP)
    b_pos = basliklar(AGAC[anah], SENT)
    sina(no, "%s çöp tarihi madde SAYMIYOR, pozitif madde hâlâ okunuyor" % ad,
         not ({"çöp ay", "harf"} & set(b)) and "İstanbul'un fethi" in b_pos,
         "çöp okunan: %s" % b)
sina("R3", "_yama_sinav gün kümesi geçersiz takvim gününü almıyor",
     "-0330-13-45" not in AGAC["yama"](COP), "")
ihlal_beklenen = ["-330-10-18", "-0330-10", "0330-1-01", "abcd-01-01", "", None, "1453"]
yanlis = [t for t in ihlal_beklenen if not AGAC["krono"]({"t": t})]
sina("R4", "denetle_kronoloji ② 3 hane/ay/çöp/boş/yıl → HÂLÂ ihlal (gevşemedi)",
     not yanlis, "ihlal SAYILMAYAN: %s" % yanlis)
# YENİ SERTLİK (bilinçli): takvimde olmayan gün artık ihlal — yamasızda KALIR.
yanlis = [t for t in ("1453-02-30", "-0330-13-01", "1900-02-29") if not AGAC["krono"]({"t": t})]
sina("R5", "denetle_kronoloji ② takvimde olmayan gün (gun.py) → ihlal  [YENİ SERTLİK]",
     not yanlis, "ihlal SAYILMAYAN: %s" % yanlis)

# ────────────────────────────────────────── GERİLEME — gerçek evren
VERI = os.path.join(KOK, "data")
EVREN = sorted(set(glob.glob(os.path.join(VERI, "olaylar*.js"))
                   + glob.glob(os.path.join(VERI, "kronoloji_*.js"))))
METIN = {os.path.basename(f): open(f, encoding="utf-8", newline="").read() for f in EVREN}
print("EVREN: %d dosya (olaylar* + kronoloji_*), %d bayt"
      % (len(METIN), sum(len(v) for v in METIN.values())))
NEG_VERIDE = sum(v.count('t:"-') + v.count('"t": "-') + v.count('"t":"-') for v in METIN.values())
print("veride negatif `t:` dizgisi: %d" % NEG_VERIDE)

for anah, no, ad in (("duygu", "G1", "denetle_duygu.kayitlar"),
                     ("uret", "G2", "uret_duygu.kayitlar")):
    import collections
    a, t = collections.Counter(), collections.Counter()
    for f, m in METIN.items():
        for k in AGAC[anah](m):
            a[(f, k[0], k[1]) if isinstance(k, tuple) else (f, k)] += 1
        for k in TABN[anah](m):
            t[(f, k[0], k[1]) if isinstance(k, tuple) else (f, k)] += 1
    sina(no, "%s gerçek evrende okunan madde çoklu kümesi tabanla BİREBİR (%d)"
         % (ad, sum(a.values())), a == t and len(a) > 0,
         "fazla %d · eksik %d" % (sum((a - t).values()), sum((t - a).values())))

a, t = set(), set()
for f, m in METIN.items():
    if f.startswith("olaylar"):                 # aracın kendi evreni
        a |= {(f, g) for g in AGAC["yama"](m)}
        t |= {(f, g) for g in TABN["yama"](m)}
sina("G3", "_yama_sinav gerçek evrende gün kümesi tabanla BİREBİR (%d)" % len(a),
     a == t and len(a) > 0, "fazla %d · eksik %d" % (len(a - t), len(t - a)))

# denetle_kronoloji: maddeleri node ile oku (aracın kendi yöntemi) — kendi evreni kronoloji_*
JS = ("const fs=require('fs');const out={};"
      "for(const f of JSON.parse(process.argv[1])){global.window={};"
      "try{eval(fs.readFileSync(f,'utf8'))}catch(e){out[f]='HATA';continue}"
      "const k=Object.keys(global.window)[0];const v=global.window[k];"
      "out[f]=Array.isArray(v)?v.map(m=>m&&m.t):'DIZI-DEGIL'}"
      "process.stdout.write(JSON.stringify(out));")
krono = [f for f in EVREN if os.path.basename(f).startswith("kronoloji_")]
r = subprocess.run(["node", "-e", JS, json.dumps(krono)], capture_output=True)
if r.returncode != 0:
    sina("G4", "denetle_kronoloji ② gerçek evren", False,
         "ÖLÇÜLEMEDİ: node %s" % r.stderr.decode("utf-8", "replace")[:120])
else:
    T = json.loads(r.stdout.decode("utf-8"))
    a, t, n = set(), set(), 0
    for f, liste in T.items():
        if not isinstance(liste, list):
            continue
        for i, tt in enumerate(liste):
            n += 1
            if AGAC["krono"]({"t": tt}):
                a.add((os.path.basename(f), i, tt))
            if TABN["krono"]({"t": tt}):
                t.add((os.path.basename(f), i, tt))
    sina("G4", "denetle_kronoloji ② gerçek evrende ihlal kümesi tabanla BİREBİR "
         "(%d madde, %d ihlal)" % (n, len(a)), a == t and n > 0,
         "fazla %s · eksik %s" % (sorted(a - t)[:5], sorted(t - a)[:5]))

# ────────────────────────────────────────── BİLGİ (sayılmaz) — kapsam dışı okuyucular
try:
    ns, ag = ad_alani(kaynak_agac("arac/_sahiplik_uygula.py"), "_sahiplik_uygula")
    dey = [d for d in ast.walk(ag) if isinstance(d, ast.AugAssign)
           and isinstance(d.target, ast.Name) and d.target.id == "gunler"]
    yerel = dict(ns, gunler=set(), s=SENT, re=__import__("re"))
    exec(compile(ast.Module(body=dey, type_ignores=[]), "_sahiplik_uygula", "exec"), yerel)
    print("BİLGİ  _sahiplik_uygula gün kümesi MÖ'yü %s (yama KAPSAMI DIŞI — başka ajanda)"
          % ("OKUYOR" if MO in yerel["gunler"] else "OKUMUYOR"))
except Exception as e:                                      # noqa: BLE001
    print("BİLGİ  _sahiplik_uygula ölçülemedi: %s" % e)

print("SONUÇ: %d soru · %d geçti · %d kaldı" % (toplam, gecti, toplam - gecti))
sys.exit(0 if gecti == toplam else 1)
