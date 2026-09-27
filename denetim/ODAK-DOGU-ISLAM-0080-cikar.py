# -*- coding: utf-8 -*-
"""ODAK-DOGU-ISLAM-0080 — iş maddelerini (ODAKSIZ + BEYANLI) ve yardımcı
havuzları tek JSON'a döker. Salt okur; data/'ya dokunmaz.

    py denetim/ODAK-DOGU-ISLAM-0080-cikar.py            döküm yaz
    py denetim/ODAK-DOGU-ISLAM-0080-cikar.py --ad <s>   havuzda ad ara (alt dizgi, normalleştirilmiş)
    py denetim/ODAK-DOGU-ISLAM-0080-cikar.py --kim <gün> <lon0> <lat0> <lon1> <lat1>
                                                        o gün o kutuda sahip anahtarı sayımı
"""
import io, json, os, sys, subprocess, unicodedata
KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(KOK, "arac"))
sys.stdout.reconfigure(encoding="utf-8", errors="replace")
import girdi  # noqa: E402

DOSYALAR = ["kronoloji_karakoyunlu.js", "kronoloji_akkoyunlu.js", "kronoloji_memluk.js",
            "kronoloji_safevi.js", "kronoloji_iran.js", "kronoloji_iran_ardillari.js",
            "kronoloji_arabistan.js", "kronoloji_kirim.js", "kronoloji_altinorda.js",
            "kronoloji_sinir_ortadogu.js", "kronoloji_gurcistan.js", "kronoloji_rusya.js",
            "kronoloji_sinir_komsu.js"]
CIKTI = os.path.join(KOK, "denetim", "ODAK-DOGU-ISLAM-0080-is.json")


def oku(yol):
    b = ("global.window={};eval(require('fs').readFileSync(process.argv[1],'utf8'));"
         "const k=Object.keys(global.window)[0];process.stdout.write(JSON.stringify(global.window[k]||[]));")
    r = subprocess.run(["node", "-e", b, yol], capture_output=True, text=True, encoding="utf-8")
    if r.returncode:
        raise SystemExit("AYRIŞTIRILAMADI %s: %s" % (yol, r.stderr[:200]))
    return json.loads(r.stdout)


def norm(s):
    s = s.replace("İ", "i").replace("I", "ı").lower()
    s = unicodedata.normalize("NFD", s)
    s = "".join(c for c in s if unicodedata.category(c) != "Mn")
    return s.replace("ı", "i").replace("'", "").replace("’", "")


def sahip(y, g):
    for p in y.get("d") or []:
        if p["f"] <= g < p["t"]:
            return "osmanli"
    for p in y.get("v") or []:
        if p["f"] <= g < p["t"]:
            return "tabi:" + (p.get("kid") or "")
    for p in y.get("s") or []:
        if p["f"] <= g < p["t"]:
            return "s:" + p["d"]
    return ""


def main():
    Y = girdi.yukle(sessiz=True)
    if "--ad" in sys.argv:
        q = norm(sys.argv[sys.argv.index("--ad") + 1])
        for y in Y:
            if q in norm(y["ad"]):
                print("%-45s %8.3f %8.3f" % (y["ad"], y["lat"], y["lon"]))
        return
    if "--kim" in sys.argv:
        i = sys.argv.index("--kim")
        g = sys.argv[i + 1]
        x0, y0, x1, y1 = map(float, sys.argv[i + 2:i + 6])
        say = {}
        for y in Y:
            if x0 <= y["lon"] <= x1 and y0 <= y["lat"] <= y1:
                k = sahip(y, g)
                say[k] = say.get(k, 0) + 1
        for k, n in sorted(say.items(), key=lambda a: -a[1]):
            print("%5d  %s" % (n, k))
        return
    havuz = set()
    for y in Y:
        havuz.add(y["ad"]); havuz.add(y["ad"].split(" (")[0])
    is_ = []
    for f in DOSYALAR:
        for o in oku(os.path.join(KOK, "data", f)):
            yk = o.get("yer_kon")
            if isinstance(yk, list) and len(yk) == 2:
                continue
            if o.get("yer_id") in havuz:
                continue
            if o.get("odak_kutu_kaynak"):
                continue
            oy = o.get("odak_yer")
            oy = oy if isinstance(oy, list) else ([oy] if oy else [])
            if any(a in havuz for a in oy):
                continue
            if o.get("odak_kimlik"):
                continue
            sn = "BEYANLI" if o.get("kapsam_genis") is True else "ODAKSIZ"
            is_.append({"dosya": f, "sinif_simdi": sn, **o})
    io.open(CIKTI, "w", encoding="utf-8").write(json.dumps(is_, ensure_ascii=False, indent=1))
    say = {}
    for x in is_:
        k = (x["dosya"], x["sinif_simdi"]); say[k] = say.get(k, 0) + 1
    for k in sorted(say):
        print(k, say[k])
    print("TOPLAM", len(is_), "->", CIKTI)


if __name__ == "__main__":
    main()
