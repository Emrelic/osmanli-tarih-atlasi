# -*- coding: utf-8 -*-
"""KUNYE-1945-0930 — devletler.js künye uygulayıcısı.

Veri: denetim/ARAC-KUNYE-1945-0930-VERI.py (UZAT / YENI listeleri).
Kullanım:  py denetim/ARAC-KUNYE-1945-0930-UYGULA.py [--kuru]
Yalnız künye BLOĞUNUN içinde çalışır; blok sınırı dizgi-bilen parantez
eşlemesiyle bulunur (ozet içindeki "[[iran]]" gibi dizgileri atlar).
Her değişiklik bir öncekinin tuttuğunu SINAR, tutmazsa durur (sessiz geçmez).
"""
import io, os, re, sys, subprocess, importlib.util

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
YOL = os.path.join(KOK, "data", "devletler.js")
KURU = "--kuru" in sys.argv
NL = "\r\n"

spec = importlib.util.spec_from_file_location(
    "veri", os.path.join(KOK, "denetim", "ARAC-KUNYE-1945-0930-VERI.py"))
V = importlib.util.module_from_spec(spec)
spec.loader.exec_module(V)


def js(s):
    return '"' + s.replace("\\", "\\\\").replace('"', '\\"') + '"'


def esle(m, i, ac, kapa):
    """m[i] == ac; eşleşen kapa'nın indeksini döndür (dizgileri atlar)."""
    assert m[i] == ac, (m[i:i + 20], ac)
    d, j, n = 0, i, len(m)
    while j < n:
        c = m[j]
        if c == '"':
            j += 1
            while m[j] != '"':
                j += 2 if m[j] == "\\" else 1
        elif c == ac:
            d += 1
        elif c == kapa:
            d -= 1
            if d == 0:
                return j
        j += 1
    raise SystemExit("eşleşme yok")


def blok(m, kid):
    k = re.search(r'\{\s*id:"%s"' % re.escape(kid), m)
    if not k:
        raise SystemExit("KÜNYE YOK: " + kid)
    if len(re.findall(r'\{\s*id:"%s"' % re.escape(kid), m)) != 1:
        raise SystemExit("KÜNYE MÜKERRER: " + kid)
    return k.start(), esle(m, k.start(), "{", "}")


def dizgi_sonu(m, i):
    """m[i] == '"' → kapanış tırnağının indeksi."""
    j = i + 1
    while m[j] != '"':
        j += 2 if m[j] == "\\" else 1
    return j


def uzat(m, u):
    a, b = blok(m, u["id"])
    B = m[a:b + 1]
    kr = B.find("kronoloji:")
    ust = B if kr < 0 else B[:kr]
    t = re.search(r'\bt:"1923-10-29"', ust)
    if not t:
        raise SystemExit("t:1923-10-29 künye başında yok: " + u["id"])
    yeni_t = 't:%s, ic_not_t:%s' % (js(u["t"]), js(u["ic_not_t"]))
    B = B[:t.start()] + yeni_t + B[t.end():]
    if u.get("ozet_ek"):
        o = re.search(r'\bozet:"', B)
        if not o:
            raise SystemExit("ozet yok: " + u["id"])
        s = dizgi_sonu(B, o.end() - 1)
        govde = B[o.end():s]
        govde =govde.replace(" (1923 sonrasında da sürdü)", "").replace("(1923 sonrasında da sürdü)", "")
        ek = u["ozet_ek"].replace("\\", "\\\\").replace('"', '\\"')
        B = B[:o.end()] + govde.rstrip() + " " + ek + B[s:]
    if u.get("kron"):
        k = B.find("kronoloji:[")
        if k < 0:
            raise SystemExit("kronoloji yok: " + u["id"])
        ka = esle(B, k + len("kronoloji:"), "[", "]")
        ic = B[k + len("kronoloji:["):ka].rstrip()
        sat = ",\n".join("    { t:%s, tur:%s, b:%s, kaynak:%s }" % (
            js(x[0]), js(x[1]), js(x[2]), js(x[3])) for x in u["kron"])
        ayrac = "," if ic and not ic.endswith(",") else ""
        B = B[:k + len("kronoloji:[")] + ic + ayrac + NL + sat.replace("\n", NL) + NL + "  " + B[ka:]
    return m[:a] + B + m[b + 1:]


def yeni_blok(y):
    alan = ['id:%s' % js(y["id"]), 'ad:%s' % js(y["ad"]), 'tur:%s' % js(y["tur"]),
            'bolge:%s' % js(y["bolge"])]
    s = "{ " + ", ".join(alan) + ",\n"
    s += '  f:%s, t:%s, baskent:%s' % (js(y["f"]), js(y["t"]), js(y["baskent"]))
    if y.get("harita"):
        s += ', harita:%s' % js(y["harita"])
    s += ",\n"
    if y.get("ic_not_t"):
        s += '  ic_not_t:%s,\n' % js(y["ic_not_t"])
    s += '  ozet:%s,\n' % js(y["ozet"])
    s += '  kaynak:%s,\n' % js(y["kaynak"])
    s += "  kronoloji:[\n" + ",\n".join(
        "    { t:%s, tur:%s, b:%s, kaynak:%s }" % (js(x[0]), js(x[1]), js(x[2]), js(x[3]))
        for x in y["kron"]) + "\n  ]\n}"
    return s


def main():
    # newline="" — dosya karışık satır sonlu (ölçüldü: CR 8200 · LF 8354);
    # dokunulmayan satırlar birebir korunur, yeni satırlar CRLF yazılır.
    m = io.open(YOL, encoding="utf-8", newline="").read()
    n0 = len(re.findall(r'\{\s*id:"', m))
    for u in V.UZAT:
        m = uzat(m, u)
    son = m.rstrip().rfind("];")
    if son < 0:
        raise SystemExit("dizi sonu yok")
    var = set(re.findall(r'\{\s*id:"([^"]+)"', m))
    parca = []
    for y in V.YENI:
        if y["id"] in var:
            raise SystemExit("YENİ id zaten var: " + y["id"])
        parca.append(yeni_blok(y))
    if parca:
        onu = m[:son].rstrip()
        if not onu.endswith(","):
            onu += ","
        yeni = ("\n// ── KUNYE-1945-0930 (30 Eylül 2026): 1923-1945 ufku için açılan künyeler ──\n"
                + ",\n".join(parca) + "\n")
        m = onu + yeni.replace("\n", NL) + m[son:]
    n1 = len(re.findall(r'\{\s*id:"', m))
    print("künye (id: sayımı, kronoloji maddesi değil):", n0, "->", n1,
          "· uzatılan", len(V.UZAT), "· yeni", len(V.YENI))
    if KURU:
        io.open(os.path.join(os.environ.get("TEMP", "."), "devletler_kuru.js"), "w",
                encoding="utf-8", newline="").write(m)
        print("KURU — dosyaya yazılmadı")
        return
    io.open(YOL, "w", encoding="utf-8", newline="").write(m)
    r = subprocess.run(["node", "--check", YOL], capture_output=True, text=True)
    print("node --check:", "TEMİZ" if r.returncode == 0 else r.stderr)


if __name__ == "__main__":
    main()
