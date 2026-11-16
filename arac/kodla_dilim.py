# -*- coding: utf-8 -*-
"""ZAMAN DİLİMLİ PARÇA — P1 ② PROTOTİP (HAVVA 16 Kasım 2026, Emre emri).

Amaç: devlet_parcalar.js (~41 MB telde) ve donem_parcalar.js (~8 MB) her açılışta
inmesin; kullanıcı hangi tarihteyse yalnız o tarihin halkaları insin.

Motor tuzuna DOKUNMAZ: girdi `kodla.py yay`ın yazdığı havuz dosyalarıdır
(`coz-c` onları bayt bayt geri üretir), bu modül havuzu yalnız OKUR ve
ek parça dosyaları üretir. Halka indeksleri GLOBAL kalır
(DEVLET_PARCA_HALKA / PARCA_HALKA değişmez).

Bölme: her halkanın kullanım aralığı [ilk gün, son gün] (o halkayı kullanan
bütün dönemlerin birleşimi) ölçülür. Ömür = son yıl - ilk yıl.
Katman k: ömür <= L0 * 4**k yıl (son katman sınırsız). Pencere genişliği o
katmanın L0*4**k yılı; halka ilk-kullanım yılının penceresine girer.
Tarih D için her katmanda D'yi kapsayan pencereler (D//W - 1 ve D//W) gerekir:
halka ömrü W'yi aşmadığından başka pencere D'yi kapsayamaz.

Parça biçimi = KATMAN 1 biçimi (varint N · N delta indeks · halka akışı),
geo_coz.js `seyrekCoz` onu zaten çözer.

KULLANIM
    py arac/kodla_dilim.py olc  <devlet|donem> <dizin> [L0]   gerçek gzip ölçümü
    py arac/kodla_dilim.py yaz  <devlet|donem> <dizin> <cikti_dizin> [L0]
"""
import base64
import gzip
import json
import os
import sys
import hashlib
import collections

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import kodla  # noqa: E402

GUN_YIL = 372


def _gun(s):
    neg = s.startswith("-")
    p = (s[1:] if neg else s).split("-")
    y = int(p[0]) * (-1 if neg else 1)
    m = int(p[1]) if len(p) > 1 else 1
    d = int(p[2]) if len(p) > 2 else 1
    return y * GUN_YIL + (m - 1) * 31 + d


def _yil(g):
    return g // GUN_YIL


def _js_deger(s, ad):
    i = s.index("window." + ad + " = ")
    b = i + len("window." + ad + " = ")
    return json.JSONDecoder().raw_decode(s, b)[0]


def kullanim(dizin, hedef):
    """halka indeksi -> [ilk gün, son gün] (sayısal)."""
    kodla.hedef_sec(hedef)
    with open(os.path.join(dizin, kodla.HEDEFLER[hedef]["ust"]), encoding="utf-8") as f:
        s = f.read()
    kul = {}

    def ekle(halkalar, f, t):
        for r in halkalar:
            k = kul.get(r)
            if k is None:
                kul[r] = [f, t]
            else:
                if f < k[0]:
                    k[0] = f
                if t > k[1]:
                    k[1] = t

    if hedef == "devlet":
        harita = _js_deger(s, "DEVLET_HARITA")
        ph = _js_deger(s, "DEVLET_PARCA_HALKA")
        for dev in harita:
            for p in dev.get("dnm", []):
                f, t = _gun(p["f"]), _gun(p["t"])
                for gi in p.get("g", []):
                    ekle(ph[gi], f, t)
    else:
        donemler = _js_deger(s, "DONEMLER")
        ph = _js_deger(s, "PARCA_HALKA")
        for d in donemler:
            f, t = _gun(d["f"]), _gun(d["t"])
            kodlar = list(d.get("o") or []) + list(d.get("v") or [])
            for hb in (d.get("h") or []):
                kodlar += list(hb.get("g") or [])
            for p in kodlar:
                ekle(ph[p], f, t)
    return kul


def katmanlar(l0):
    return [l0 * (4 ** k) for k in range(0, 6)] + [10 ** 9]


def plan(kul, l0):
    """parça anahtarı (k, w) -> artan halka indeksleri."""
    kat = katmanlar(l0)
    pr = collections.defaultdict(list)
    for r in sorted(kul):
        f, t = kul[r]
        om = _yil(t) - _yil(f)
        k = next(i for i, L in enumerate(kat) if om <= L)
        pr[(k, _yil(f) // kat[k])].append(r)
    return pr


def kodla_parca(havuz, idx):
    out = bytearray()
    kodla._yaz(out, len(idx))
    onc = 0
    for i in idx:
        kodla._yaz(out, i - onc)
        onc = i
    return bytes(out) + kodla._kodla_havuz([havuz[i] for i in idx])


def _havuz(dizin, hedef):
    kodla.hedef_sec(hedef)
    _onek, havuz_b, _sonek, sha = kodla._oku_c(dizin)
    return kodla._coz_havuz(havuz_b), sha


def olc(hedef, dizin, l0=8):
    kul = kullanim(dizin, hedef)
    havuz, _sha = _havuz(dizin, hedef)
    pr = plan(kul, l0)
    kat = katmanlar(l0)
    boy = {}
    for a, idx in pr.items():
        b = kodla_parca(havuz, idx)
        b64 = base64.b64encode(b)
        boy[a] = (len(b64), len(gzip.compress(b64, 6)), len(idx))
    tam_b = kodla._kodla_havuz(havuz)
    tam64 = base64.b64encode(tam_b)
    tam_gz = len(gzip.compress(tam64, 6))
    print("%s L0=%d: halka %d · parça dosyası %d · tam havuz: base64 %.2f MB, gzip %.2f MB"
          % (hedef, l0, len(havuz), len(pr), len(tam64) / 1e6, tam_gz / 1e6))
    mx = max(boy.values(), key=lambda v: v[1])
    print("  toplam parça gzip %.2f MB (tam havuza göre ek yük %+.1f%%) · en büyük parça %.2f MB gzip (%.2f MB ham)"
          % (sum(v[1] for v in boy.values()) / 1e6,
             100.0 * (sum(v[1] for v in boy.values()) / tam_gz - 1),
             mx[1] / 1e6, mx[0] / 1e6))
    for Y in (-500, 1, 500, 1000, 1300, 1500, 1683, 1800, 1914, 1990):
        g = Y * GUN_YIL
        need = 0
        gz = 0
        n = 0
        for (k, w), v in boy.items():
            L = kat[k]
            if w in (Y // L - 1, Y // L):
                gz += v[1]
                n += 1
        print("  tarih %5d: %2d dosya, %.2f MB gzip" % (Y, n, gz / 1e6))
    return pr, boy


def yaz(hedef, dizin, cikti, l0=8):
    kul = kullanim(dizin, hedef)
    havuz, tam_sha = _havuz(dizin, hedef)
    pr = plan(kul, l0)
    os.makedirs(cikti, exist_ok=True)
    onek = "dp" if hedef == "devlet" else "pr"
    dizin_kayit = {}
    for (k, w), idx in sorted(pr.items()):
        b = kodla_parca(havuz, idx)
        sha = hashlib.sha256(b).hexdigest()
        ad = "%s_%d_%d.js" % (onek, k, w)
        with open(os.path.join(cikti, ad), "w", encoding="utf-8", newline="") as f:
            f.write("// Otomatik üretildi — elle düzenlemeyin. Betik: arac/kodla_dilim.py\n")
            f.write("window.__DILIM=window.__DILIM||{};\n")
            f.write("window.__DILIM[\"%s\"]={sha:\"%s\",b64:\"%s\"};\n"
                    % (ad, sha, base64.b64encode(b).decode()))
        dizin_kayit[ad] = [k, w, len(idx), sha]
    with open(os.path.join(cikti, "%s_dizin.js" % onek), "w", encoding="utf-8", newline="") as f:
        f.write("window.__%s_DIZIN=%s;\n" % (onek.upper(),
                json.dumps({"l0": l0, "tam_sha": tam_sha, "p": dizin_kayit},
                           separators=(",", ":"))))
    return pr


def sina(hedef, dizin, cikti):
    """DİSKTEN gidiş-dönüş: parça dosyaları okunur, sha doğrulanır, her halka
    tam havuzdakiyle BİREBİR aynı mı, ve havuzdaki HER halka tam bir kez var mı?"""
    onek = "dp" if hedef == "devlet" else "pr"
    havuz, tam_sha = _havuz(dizin, hedef)
    with open(os.path.join(cikti, "%s_dizin.js" % onek), encoding="utf-8") as f:
        s = f.read()
    kayit = json.loads(s[s.index("=") + 1:].rstrip().rstrip(";"))
    gorulen = {}
    hata = 0
    for ad, (k, w, n, sha) in kayit["p"].items():
        with open(os.path.join(cikti, ad), encoding="utf-8") as f:
            t = f.read()
        b64 = t[t.index('b64:"') + 5:t.rindex('"}')]
        b = base64.b64decode(b64)
        if hashlib.sha256(b).hexdigest() != sha:
            print("🔴 sha tutmuyor:", ad)
            hata += 1
            continue
        m, i = kodla._oku(b, 0)
        idx, onc = [], 0
        for _ in range(m):
            d, i = kodla._oku(b, i)
            onc += d
            idx.append(onc)
        halkalar = kodla._coz_havuz(b[i:])
        if len(halkalar) != m or m != n:
            print("🔴 halka sayısı tutmuyor:", ad)
            hata += 1
            continue
        for ix, h in zip(idx, halkalar):
            if ix in gorulen:
                print("🔴 halka iki parçada:", ix)
                hata += 1
            gorulen[ix] = 1
            if list(map(tuple, h)) != list(map(tuple, havuz[ix])):
                print("🔴 halka farklı:", ix, ad)
                hata += 1
    eksik = len(havuz) - len(gorulen)
    if eksik:
        print("🔴 parçalarda olmayan halka:", eksik)
        hata += 1
    print("sına %s: %d parça · %d/%d halka BİREBİR · hata %d · tam_sha %s"
          % (hedef, len(kayit["p"]), len(gorulen), len(havuz), hata, tam_sha[:12]))
    return hata


if __name__ == "__main__":
    a = sys.argv[1:]
    if len(a) >= 3 and a[0] == "olc":
        olc(a[1], a[2], int(a[3]) if len(a) > 3 else 8)
    elif len(a) >= 4 and a[0] == "yaz":
        yaz(a[1], a[2], a[3], int(a[4]) if len(a) > 4 else 8)
        sys.exit(1 if sina(a[1], a[2], a[3]) else 0)
    else:
        print(__doc__)
        sys.exit(2)
