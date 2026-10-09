# -*- coding: utf-8 -*-
"""YALAN-DAMGA-YERYAMA-1006 — SALT OKUR ölçüm.

① data/yer_yama*.js içindeki resmî durum damgalarını (`hukum:` alanı) dosya:satır ile sayar.
② "çözüldü-yazıldı" ve "çözüldü-öneri" damgalarının iddia ettiği değeri, motorun BUGÜN
   okuduğu veride (girdi.yukle) arar: TAŞIYOR / TAŞIMIYOR (= yalan damga) / KISMEN.
④ yer_yama*.js dosyalarını kim okuyor: GIRDI_DOSYALARI · index.html · glob'la okuyan araçlar.
Hiçbir dosyaya yazmaz; çıktı stdout + yanındaki .tsv (yalnız --tsv verilirse).
Kök __file__'dan bulunur."""
import io, os, sys, json, re, subprocess, collections
KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(KOK, "arac"))
import girdi
if hasattr(sys.stdout, "reconfigure"):
    sys.stdout.reconfigure(encoding="utf-8", errors="replace")

JS = r"""
global.window = {};
const fs = require('fs');
const out = [];
for (const f of fs.readdirSync('data').filter(x => /^yer_yama.*\.js$/.test(x)).sort()) {
  const onceki = new Set(Object.keys(global.window));
  try { eval(fs.readFileSync('data/' + f, 'utf8')); } catch (e) { out.push({dosya: f, hata: String(e)}); continue; }
  for (const k of Object.keys(global.window)) if (!onceki.has(k)) {
    const v = global.window[k];
    if (Array.isArray(v)) v.forEach(r => out.push({dosya: f, alan: k, r}));
  }
}
process.stdout.write(JSON.stringify(out));
"""
Y = json.loads(subprocess.run(["node", "-e", JS], cwd=KOK, capture_output=True).stdout.decode("utf-8"))
CANLI = {y["ad"]: y for y in girdi.yukle(sessiz=True)}


def satir(dosya, no):
    pat = re.compile(r'(?:"no"|\bno)\s*:\s*"%s"' % re.escape(no))
    for n, s in enumerate(io.open(os.path.join(KOK, "data", dosya), encoding="utf-8"), 1):
        if pat.search(s):
            return n
    return None


def donem(y, alan):
    return [(p.get("f"), p.get("t"), p.get("d") or p.get("kid") or "") for p in (y.get(alan) or [])]


def var(ad, alan, f=None, t=None, d=None):
    y = CANLI.get(ad)
    if y is None:
        return None
    for (pf, pt, pd) in donem(y, alan):
        if (f is None or pf == f) and (t is None or pt == t) and (d is None or pd == d):
            return True
    return False


def yok(ad, alan, f=None, t=None, d=None):
    r = var(ad, alan, f, t, d)
    return None if r is None else not r


# İddia → canlı veri sınavı. Her iddia yamanın KENDİ metninden (yeni:/hukum:) birebir alındı.
EFLAK = ["Bükreş", "Tırgovişte", "Piteşti", "Slatina", "Buzău", "Rimnik-i Sârat (Râmnicu Sărat)",
         "Krayova (Craiova)", "Tırgu Jiu", "Rimnik (Râmnicu Vâlcea)", "Turnu Severin", "Kımpulung (Câmpulung)"]


def eflak():
    out = []
    for ad in EFLAK:
        y = CANLI.get(ad)
        if y is None:
            out.append(None); continue
        v = donem(y, "v")
        out.append(bool(v) and v[0][0] == "1417-01-01")
    return out


IDDIA = {
    ("yer_yama_uyg2.js", "H-0003b"): [("Mîyandoab d 1585-09-25→1603-10-21", lambda: var("Mîyandoab", "d", "1585-09-25", "1603-10-21"))],
    ("yer_yama_uyg2.js", "H-0007"): [("Dörtyol v 1832-07-29→1841-02-25", lambda: var("Dörtyol", "v", "1832-07-29", "1841-02-25"))],
    ("yer_yama_uyg2.js", "H-0007b"): [("Erzin v 1832-07-29→1841-02-25", lambda: var("Erzin", "v", "1832-07-29", "1841-02-25"))],
    ("yer_yama_uyg2.js", "H-0007c"): [("Yumurtalık v 1832-07-29→1841-02-25", lambda: var("Yumurtalık", "v", "1832-07-29", "1841-02-25"))],
    ("yer_yama_uyg2.js", "H-0008"): [("Urfa v 1839-01-01→1840-01-01", lambda: var("Urfa", "v", "1839-01-01", "1840-01-01")),
                                     ("Urfa v 1832-08-15 KALKMIŞ", lambda: yok("Urfa", "v", "1832-08-15"))],
    ("yer_yama_uyg2.js", "H-0011"): [("Maraş v 1833-01-01→1834-08-01", lambda: var("Maraş", "v", "1833-01-01", "1834-08-01")),
                                     ("Maraş v 1832-07-29 KALKMIŞ", lambda: yok("Maraş", "v", "1832-07-29"))],
    ("yer_yama_acik.js", "TDV-K1 (parti-emrelic-0004/H-0006)"): [("Erzincan d f 1514-10-23", lambda: var("Erzincan", "d", "1514-10-23")),
                                                                ("Erzincan s karakoyunlu 1410-01-01→1422-01-01", lambda: var("Erzincan", "s", "1410-01-01", "1422-01-01", "karakoyunlu"))],
    ("yer_yama_acik.js", "TDV-K2 (parti-0002/H-0016 ailesi)"): [("%s s eretna f 1335-01-01" % a, (lambda a=a: var(a, "s", "1335-01-01", None, "eretna"))) for a in ("Konya", "Aksaray", "Niğde")],
    ("yer_yama_acik.js", "TDV-K3 (parti-0002/H-0015 + parti-emrelic-0008/H-0001 + parti-emrelic-0029/H-0002)"): [
        ("Sivrihisar s germiyan YOK", lambda: yok("Sivrihisar", "s", d="germiyan")),
        ("Sivrihisar s karaman VAR", lambda: var("Sivrihisar", "s", d="karaman"))],
    ("yer_yama_acik.js", "TDV-K4 (parti-0002/H-0015)"): [("Çankırı s candar t 1392-11-01", lambda: var("Çankırı", "s", None, "1392-11-01", "candar")),
                                                         ("Çankırı d f 1392-11-01", lambda: var("Çankırı", "d", "1392-11-01"))],
    ("yer_yama_acik.js", "TDV-K10 (parti-0003/H-0018)"): [("Eflak 11 nokta v[0].f 1417-01-01 (%s)" % "/".join(EFLAK), lambda: (lambda r: None if None in r else (True if all(r) else (False if not any(r) else "KISMEN %d/%d" % (sum(r), len(r)))))(eflak()))],
    ("yer_yama_acik.js", "TDV-K11b (parti-emrelic-0008/H-0003)"): [("Malatya s f 1315-04-28", lambda: var("Malatya", "s", "1315-04-28")),
                                                                   ("Malatya s dulkadir 1402-07-28→1516-07-28", lambda: var("Malatya", "s", "1402-07-28", "1516-07-28", "dulkadir"))],
    ("yer_yama_sahiplik.js", "H-0060"): [("Mersin s ramazanoglu 1352-01-01→1516-08-24", lambda: var("Mersin", "s", "1352-01-01", "1516-08-24", "ramazanoglu")),
                                         ("Mersin d f 1516-08-24", lambda: var("Mersin", "d", "1516-08-24"))],
    ("yer_yama_sahiplik.js", "EK-1b (ORHANGAZİ M-1364)"): [("Kragujevac s avusturya 1689-09-24→1690-09-09", lambda: var("Kragujevac", "s", "1689-09-24", "1690-09-09", "avusturya"))],
}

satirlar = []
hukum_say = collections.Counter()
for x in Y:
    r = x.get("r")
    if not isinstance(r, dict) or "hukum" not in r:
        continue
    h = str(r["hukum"])
    tur = re.split(r"[\s:—(]", h)[0]
    hukum_say[(x["dosya"], tur)] += 1
    if not re.match(r"cozuldu", h):
        continue
    no = str(r.get("no"))
    sinav = IDDIA.get((x["dosya"], no))
    if sinav is None:
        sonuc = [("SINAV YOK", None)]
    else:
        sonuc = [(ad, f()) for ad, f in sinav]
    for ad, s in sonuc:
        hk = ("ÖLÇÜLEMEDİ (veride yok)" if s is None else "TAŞIYOR" if s is True else
              "TAŞIMIYOR" if s is False else str(s))
        satirlar.append((x["dosya"], satir(x["dosya"], no), no, tur, ad, hk))

print("① RESMÎ DAMGA (`hukum:`) — dosya × tür")
for (d, t), n in sorted(hukum_say.items()):
    print("   %-28s %-26s %d" % (d, t, n))
print()
print("② ÇÖZÜLDÜ damgaları × canlı veri")
for s in satirlar:
    print("   %s:%s\t%s\t%s\t%s\t%s" % s)

# ④ okuyucu tablosu
okuyan = {
    "_sahiplik_uygula.py": lambda f: True,
    "yama_uygula.js": lambda f: True,
    "_yama_sinav.py": lambda f: f.startswith("yer_yama_"),
    "_kademe_uygula.py": lambda f: f in ("yer_yama_kademe.js", "yer_yama_kademe2.js"),
    "_yama_indi_mi.py": lambda f: f == "yer_yama_kafkas.js",
}
html = io.open(os.path.join(KOK, "index.html"), encoding="utf-8").read()
dosyalar = sorted({x["dosya"] for x in Y})
aile = collections.defaultdict(collections.Counter)
for x in Y:
    r = x.get("r")
    if not isinstance(r, dict):
        continue
    if r.get("ad") is not None and any(k in r for k in ("d", "s", "v", "isg", "m", "kaynak", "bos", "neden", "not", "kur")):
        aile[x["dosya"]]["sahiplik"] += 1
    elif "dosya" in r and "t" in r and "b" in r:
        aile[x["dosya"]]["kronoloji"] += 1
    elif "yerlesim" in r and "oneri" in r:
        aile[x["dosya"]]["kademe"] += 1
    else:
        aile[x["dosya"]]["rapor/diğer"] += 1
print()
print("④ dosya\tGIRDI\tindex.html\tokuyan araçlar\taileler")
for f in dosyalar:
    print("   %s\t%s\t%s\t%s\t%s" % (f, "EVET" if f in girdi.GIRDI_DOSYALARI else "hayır",
                                    "EVET" if f in html else "hayır",
                                    ",".join(k for k, fn in okuyan.items() if fn(f)),
                                    " ".join("%s=%d" % kv for kv in sorted(aile[f].items()))))
