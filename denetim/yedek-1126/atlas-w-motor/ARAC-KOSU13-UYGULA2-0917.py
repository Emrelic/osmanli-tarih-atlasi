# -*- coding: utf-8 -*-
"""KOSU13-YAMA — GENEL HEDEFLİ UYGULAYICI (ikinci kuşak). 17 Eylül 2026.

    py denetim/ARAC-KOSU13-UYGULA2-0917.py <paket.py>          KURU KOŞU
    py denetim/ARAC-KOSU13-UYGULA2-0917.py <paket.py> --yaz    yaz

<paket.py> şu adları tanımlar:
    ISLEM  = OrderedDict{ ad: (kod, [işlem, ...]) }
       işlem: ("s", eski_alt, yeni_alt) · ("s+", seg) · ("d~", eski_pen, yeni_pen) · ("d+", pen)
              ("d-", pen) · ("v~", eski, yeni) · ("v+", pen) · ("isg+", pen) · ("kur", eski, yeni)
              ("konum", lat, lon)
    EKLE   = [ (girdi_dosyası, ad, js_metni) ]   — yeni nokta, dosyanın son `];`inden önce
    METIN  = [ (dosya, eski_dizgi, yeni_dizgi) ] — madde/metin düzenlemesi (tam bir kez eşleşmeli)

🔴 İLK KUŞAKTAN (ARAC-KOSU13-UYGULA-0917.py) ÖĞRENİLEN İKİ KUSUR BURADA KAPALI:
  ① KAYIT SINIRI: `{` bir satırda, `ad:` sonraki satırda duran kayıtta ilk kuşak kaydı
     yalnız `ad:` satırı sandı, mevcut `d:`yi görmedi ve İKİNCİ bir `d:` EKLEDİ (JS
     sonuncuyu okur ⇒ düzeltme sessizce ÖLDÜ; ARAC-KOSU13-FARK yakaladı). Burada kayıt,
     ad eşleşmesini SARAN `{…}` nesnesi olarak bulunur (dizge/yorum maskesiyle).
  ② ÜSLUP: `"ad": "X"` / `"s": [` JSON üslubu da tanınır; değer dosyanın üslubuyla yazılır.
  + alan yalnız nesnenin ÜST SEVİYESİNDE aranır (derinlik 1) — yorumdaki `d:[]` sayılmaz.
Kopyalar (data/yer_yama*.js) aynı işlemle, kendi dizilerine uygulanır; hedefteyse dokunulmaz.
Yazımdan sonra girdi.yukle ile geri okunur (fark = 0 şart).
"""
import collections
import importlib.util
import io
import json
import os
import re
import subprocess
import sys

sys.stdout.reconfigure(encoding="utf-8", errors="replace")
KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
os.chdir(KOK)
sys.path.insert(0, os.path.join(KOK, "arac"))
import girdi  # noqa: E402
import renkler  # noqa: E402

PAKET = sys.argv[1]
YAZ = "--yaz" in sys.argv
VERI = os.path.join(KOK, "data")
SON = "1923-10-29"
_sp = importlib.util.spec_from_file_location("paket", PAKET)
P = importlib.util.module_from_spec(_sp)
_sp.loader.exec_module(P)
ISLEM = getattr(P, "ISLEM", collections.OrderedDict())
EKLE = getattr(P, "EKLE", [])
METIN = getattr(P, "METIN", [])
# Paket AÇIKÇA izin verirse künye aşımı ENGEL değil UYARI olur (ör. çapanın bilinen 4c aşımını
# kopyalayan D034 eşitlemesi). İzin raporda görünür; denetle.py 4c tavanı ayrıca izlenir.
KUNYE_IZIN = getattr(P, "KUNYE_IZIN", set())
KOPYA_ATLA = getattr(P, "KOPYA_ATLA", set())  # {(yer_yama dosyası, ad)} — kopya işlemi yerine paket METİN'i


# ═══════════════════════════ METİN YARDIMCILARI ════════════════════════
def maske(s):
    """1 = dizge ya da yorum içi (', ", //, /* */)."""
    m = bytearray(len(s))
    q, k, i, n = None, False, 0, len(s)
    while i < n:
        c = s[i]
        if q:
            m[i] = 1
            if k:
                k = False
            elif c == "\\":
                k = True
            elif c == q:
                q = None
            i += 1
            continue
        if c in "\"'`":
            q = c
            m[i] = 1
            i += 1
            continue
        if c == "/" and i + 1 < n and s[i + 1] == "/":
            while i < n and s[i] != "\n":
                m[i] = 1
                i += 1
            continue
        if c == "/" and i + 1 < n and s[i + 1] == "*":
            j = s.find("*/", i + 2)
            j = n if j < 0 else j + 2
            for t in range(i, j):
                m[t] = 1
            i = j
            continue
        i += 1
    return m


def kapat(s, mk, bas, ac, kp):
    d = 0
    for i in range(bas, len(s)):
        if mk[i]:
            continue
        if s[i] == ac:
            d += 1
        elif s[i] == kp:
            d -= 1
            if d == 0:
                return i
    return -1


def ad_rx(ad):
    return re.compile(r'(?:\bad|"ad"|\'ad\')\s*:\s*"%s"' % re.escape(ad.replace('"', '\\"')))


def kayitlar(s, ad):
    """ad eşleşmesini saran {…} nesnelerinin (bas, son) aralıkları."""
    mk = maske(s)
    out = []
    for m in ad_rx(ad).finditer(s):
        # ad anahtarı dizge dışında olmalı (JSON üslubunda "ad" dizgedir — ilk karakter maskeli olabilir)
        if mk[m.start()] and not s[m.start()] == '"':
            continue
        d, i = 0, m.start() - 1
        while i >= 0:
            if not mk[i]:
                if s[i] in "}]":
                    d += 1
                elif s[i] in "{[":
                    if d == 0:
                        break
                    d -= 1
            i -= 1
        if i < 0 or s[i] != "{":
            continue
        j = kapat(s, mk, i, "{", "}")
        if j > 0:
            out.append((i, j))
    return sorted(set(out))


def ust_alan(nesne, alan):
    """Nesnenin ÜST seviyesindeki `alan:` anahtarlarının listesi: (anahtar_bas, deger_bas, json_mu)."""
    mk = maske(nesne)
    out = []
    for m in re.finditer(r'(["\']?)\b%s\1\s*:\s*' % re.escape(alan), nesne):
        a = m.start()
        tirnak = m.group(1)
        if tirnak:
            if a > 0 and mk[a - 1] and nesne[a - 1] not in "{,\n \t":
                continue
        elif mk[a]:
            continue
        d = 0
        for p in range(a):
            if not mk[p]:
                if nesne[p] in "{[":
                    d += 1
                elif nesne[p] in "}]":
                    d -= 1
        if d == 1:
            out.append((a, m.end(), bool(tirnak)))
    return out


def js_yaz(v):
    if isinstance(v, list):
        return "[" + ",".join(js_yaz(x) for x in v) + "]"
    if isinstance(v, dict):
        return "{" + ",".join("%s:%s" % (k, js_yaz(x)) for k, x in v.items()) + "}"
    if isinstance(v, str):
        return '"' + v.replace("\\", "\\\\").replace('"', '\\"') + '"'
    if isinstance(v, bool):
        return "true" if v else "false"
    if v is None:
        return "null"
    return str(v)


def alan_degistir(nesne, alan, deger):
    yer = ust_alan(nesne, alan)
    if len(yer) > 1:
        raise ValueError("MÜKERRER üst-seviye %s:" % alan)
    if yer:
        a, b, js = yer[0]
        mk = maske(nesne)
        if nesne[b] == "[":
            e = kapat(nesne, mk, b, "[", "]")
        elif nesne[b] == '"':
            e = b + 1
            while nesne[e] != '"' or nesne[e - 1] == "\\":
                e += 1
        else:
            e = b
            while e < len(nesne) and (nesne[e].isdigit() or nesne[e] in ".-"):
                e += 1
            e -= 1
        yeni = json.dumps(deger, ensure_ascii=False) if js else js_yaz(deger)
        return nesne[:b] + yeni + nesne[e + 1:]
    # alan yok: ad anahtarından hemen sonra ekle
    m = ad_rx_any.search(nesne)
    js = nesne[m.start()] == '"'
    ek = (', "%s": %s' % (alan, json.dumps(deger, ensure_ascii=False))) if js else (",%s:%s" % (alan, js_yaz(deger)))
    return nesne[:m.end()] + ek + nesne[m.end():]


ad_rx_any = re.compile(r'(?:\bad|"ad")\s*:\s*"(?:[^"\\]|\\.)*"')


# ═══════════════════════════ İŞLEM MOTORU ══════════════════════════════
def _ayni(p, q):
    return p["f"] == q["f"] and p["t"] == q["t"] and p.get("d") == q.get("d")


def pad(g):
    y, _, k = (g or "").partition("-")
    return y.zfill(4) + ("-" + k if k else "")


def uygula(kayit, isl, hata, kopya=False):
    r = {a: [dict(p) for p in (kayit.get(a) or [])] for a in ("s", "d", "v", "isg")}
    r["kur"], r["lat"], r["lon"] = kayit.get("kur"), kayit.get("lat"), kayit.get("lon")
    for op in isl:
        t = op[0]
        alan = {"s": "s", "s+": "s", "s~": "s", "d~": "d", "d+": "d", "d-": "d", "v~": "v", "v+": "v",
                "isg+": "isg", "isg=": "isg", "kur": "kur", "konum": "lat"}[t]
        if kopya and (kayit.get(alan) is None):
            continue
        if t == "s":
            eski, yeni = op[1], op[2]
            yer = [i for i in range(len(r["s"]) - len(eski) + 1)
                   if all(_ayni(r["s"][i + k], eski[k]) for k in range(len(eski)))]
            if len(yer) != 1:
                zaten = [i for i in range(len(r["s"]) - len(yeni) + 1)
                         if all(_ayni(r["s"][i + k], yeni[k]) for k in range(len(yeni)))]
                if kopya and not yer and len(zaten) == 1:
                    continue
                hata.append("s: eski alt dizi %d kez" % len(yer))
                continue
            r["s"] = r["s"][:yer[0]] + [dict(p) for p in yeni] + r["s"][yer[0] + len(eski):]
        elif t in ("s+", "d+", "v+", "isg+"):
            if any(p["f"] == op[1]["f"] and p["t"] == op[1]["t"] for p in r[alan]):
                if not kopya:
                    hata.append("%s: pencere ZATEN VAR %s→%s" % (alan, op[1]["f"], op[1]["t"]))
                continue
            r[alan] = sorted(r[alan] + [dict(op[1])], key=lambda p: pad(p["f"]))
        elif t == "d-":
            yer = [i for i, p in enumerate(r["d"]) if p["f"] == op[1]["f"] and p["t"] == op[1]["t"]]
            if len(yer) != 1:
                if not kopya:
                    hata.append("d-: pencere %d kez" % len(yer))
                continue
            del r["d"][yer[0]]
        elif t == "isg=":
            # isg dizisinin TAMAMINI değiştir — eski dizi birebir tutmalı
            if [dict(p) for p in r["isg"]] != op[1]:
                if kopya and [dict(p) for p in r["isg"]] == op[2]:
                    continue
                hata.append("isg=: eski dizi tutmadı (%s)" % json.dumps(r["isg"], ensure_ascii=False)[:120])
                continue
            r["isg"] = [dict(p) for p in op[2]]
        elif t in ("d~", "v~", "s~"):
            yer = [i for i, p in enumerate(r[alan]) if p["f"] == op[1]["f"] and p["t"] == op[1]["t"]
                   and (t != "s~" or p.get("d") == op[1].get("d"))]
            if len(yer) != 1:
                zaten = [i for i, p in enumerate(r[alan]) if p["f"] == op[2]["f"] and p["t"] == op[2]["t"]]
                if kopya and not yer and len(zaten) == 1:
                    continue
                hata.append("%s~: eski pencere %s→%s %d kez" % (alan, op[1]["f"], op[1]["t"], len(yer)))
                continue
            r[alan][yer[0]].update(op[2])
            r[alan] = sorted(r[alan], key=lambda p: pad(p["f"]))
        elif t == "kur":
            if r["kur"] != op[1]:
                if not (kopya and r["kur"] == op[2]):
                    hata.append("kur: eski %s değil %s" % (op[1], r["kur"]))
                continue
            r["kur"] = op[2]
        elif t == "konum":
            r["lat"], r["lon"] = op[1], op[2]
    return r


def bosluk(r):
    ps = sorted((pad(p["f"]), pad(p["t"])) for a in ("s", "d", "v") for p in r.get(a) or [])
    if not ps:
        return []
    son, out = pad(r.get("kur") or ps[0][0]), []
    for f, t in ps:
        if f > son:
            out.append((son, f))
        son = max(son, t)
    if son < SON:
        out.append((son, SON))
    return out


# ═══════════════════════════ OKU ═══════════════════════════════════════
Y = {}
for y in girdi.yukle(sessiz=True):
    Y.setdefault(y["ad"], []).append(y)
KUNYE = {}
for d_ in girdi.oku_devletler():
    KUNYE.setdefault(d_.get("id"), d_)
    if d_.get("harita"):
        KUNYE.setdefault("h:" + d_["harita"], d_)
BOY = renkler.BOYALAR
JS = r"""
const fs=require('fs');const out=[];
for(const f of fs.readdirSync('data').filter(x=>/^yer_yama.*\.js$/.test(x))){
  global.window={};try{eval(fs.readFileSync('data/'+f,'utf8'));}catch(e){continue;}
  for(const k of Object.keys(global.window)){const v=global.window[k];if(!Array.isArray(v))continue;
    for(const r of v)if(r&&r.ad)out.push({f,ad:r.ad,s:r.s,d:r.d,v:r.v,isg:r.isg,kur:r.kur});}}
process.stdout.write(JSON.stringify(out));
"""
KOPYA = json.loads(subprocess.run(["node", "-e", JS], capture_output=True, text=True,
                                  encoding="utf-8", cwd=KOK).stdout)
metinler = {}


def metin(dosya):
    if dosya not in metinler:
        metinler[dosya] = io.open(os.path.join(KOK, dosya), encoding="utf-8", newline="").read()
    return metinler[dosya]


# ═══════════════════════════ HESAPLA ═══════════════════════════════════
rapor, engel = [], 0
beklenen = {}
for ad, (kod, isl) in ISLEM.items():
    kay = Y.get(ad, [])
    if len(kay) != 1:
        rapor.append("🔴 %s %s: kayıt %d" % (kod, ad, len(kay)))
        engel += 1
        continue
    eski = kay[0]
    dosya = "data/" + eski["_kaynak"]
    h = []
    yeni = uygula(eski, isl, h)
    for a in ("s", "d", "v"):
        for p in yeni[a]:
            if pad(p["f"]) >= pad(p["t"]):
                h.append("%s sıfır/ters %s→%s" % (a, p["f"], p["t"]))
        for p, q in zip(yeni[a], yeni[a][1:]):
            if pad(q["f"]) < pad(p["t"]):
                h.append("%s çakışma %s→%s/%s→%s" % (a, p["f"], p["t"], q["f"], q["t"]))
    for b in set(bosluk(yeni)) - set(bosluk(dict(eski))):
        h.append("Değişmez 1 YENİ boşluk %s→%s" % b)
    for a in ("s", "isg"):
        for p in yeni[a]:
            if any(_ayni(p, q) for q in (eski.get(a) or [])):
                continue
            ku = KUNYE.get(p["d"]) or KUNYE.get("h:" + p["d"])
            if not ku:
                h.append("künye YOK %s" % p["d"])
            elif pad(p["f"]) < pad(ku.get("f") or "0000") or pad(p["t"]) > pad(ku.get("t") or "9999"):
                msj = "künye penceresi %s %s→%s (künye %s→%s)" % (p["d"], p["f"], p["t"], ku.get("f"), ku.get("t"))
                if ad in KUNYE_IZIN:
                    rapor.append("   ⚠️ %s %s: %s — PAKET İZNİYLE (4c'ye +1)" % (kod, ad, msj))
                else:
                    h.append(msj)
            if p["d"] not in BOY and (ku or {}).get("harita") not in BOY:
                h.append("RENK YOK %s" % p["d"])
    s = metin(dosya)
    yerler = kayitlar(s, ad)
    if len(yerler) != 1:
        h.append("metinde kayıt %d kez" % len(yerler))
    if h:
        engel += 1
        rapor.append("🔴 %s %s: %s" % (kod, ad, " | ".join(h)))
        continue
    beklenen[ad] = yeni
    degisen = [a for a in ("s", "d", "v", "isg") if yeni[a] != [dict(p) for p in (eski.get(a) or [])]]
    if yeni["kur"] != eski.get("kur"):
        degisen.append("kur")
    if yeni["lat"] != eski.get("lat"):
        degisen.append("konum")
    rapor.append("✓ %-10s %-34s %-28s %s" % (kod, ad, dosya[5:], "+".join(degisen)))
    kop = []
    for c in KOPYA:
        if c["ad"] != ad:
            continue
        if (c["f"], ad) in KOPYA_ATLA:
            rapor.append("   ⚪ kopya %s paket METİN'iyle elle eşitleniyor (KOPYA_ATLA)" % c["f"])
            continue
        kh = []
        ky = uygula(c, isl, kh, kopya=True)
        alan = [a for a in ("s", "d", "v", "isg") if c.get(a) is not None and ky[a] != c[a]]
        if c.get("kur") is not None and ky["kur"] != c["kur"]:
            alan.append("kur")
        if kh:
            engel += 1
            rapor.append("   🔴 KOPYA %s: %s" % (c["f"], " | ".join(kh)))
        elif alan:
            kop.append((c["f"], alan, ky))
            rapor.append("   ↳ kopya %s (%s) güncellenecek" % (c["f"], "/".join(alan)))
    ISLEM[ad] = (kod, isl, dosya, degisen, kop, yeni)

for dosya, ad, js in EKLE:
    if ad in Y:
        rapor.append("🔴 EKLE %s: zaten VAR" % ad)
        engel += 1
        continue
    s = metin(dosya)
    son = s.rstrip().rfind("];")
    if son < 0:
        rapor.append("🔴 EKLE %s: %s içinde '];' yok" % (ad, dosya))
        engel += 1
        continue
    rapor.append("✓ EKLE     %-34s %s" % (ad, dosya[5:]))

def metin_kapsam(dosya, mod, s):
    """(bas, son) — METİN değişikliğinin arandığı aralık."""
    if isinstance(mod, tuple) and mod[0] == "kayit":
        yer = kayitlar(s, mod[1])
        if len(yer) != 1:
            return None
        return yer[0][0], yer[0][1] + 1
    return 0, len(s)


# METİN girdileri sırayla, BİRBİRİNİN ÜSTÜNE uygulanır (aynı dosyada ardışık düzenleme)
_sanal = {}
for giris in METIN:
    dosya, a, b = giris[:3]
    mod = giris[3] if len(giris) > 3 else "bir"
    s = _sanal.get(dosya, None)
    if s is None:
        s = metin(dosya)
    kap = metin_kapsam(dosya, mod, s)
    if kap is None:
        rapor.append("🔴 METİN %s: kayıt %s bulunamadı/çok" % (dosya, mod[1]))
        engel += 1
        continue
    i, j = kap
    n = s[i:j].count(a)
    if n == 0 or (mod != "hepsi" and n != 1):
        rapor.append("🔴 METİN %s [%s]: eşleşme %d — %s…" % (dosya, mod if isinstance(mod, str) else mod[1], n, a[:70]))
        engel += 1
        continue
    parca = s[i:j].replace(a, b) if mod == "hepsi" else s[i:j].replace(a, b, 1)
    _sanal[dosya] = s[:i] + parca + s[j:]
    rapor.append("✓ METİN    %-26s %s ×%d — %s…" % (dosya[5:], ("[" + mod[1] + "]") if isinstance(mod, tuple) else "", n, a[:44]))

print("\n".join(rapor))
print("\nKAYIT %d · EKLE %d · METİN %d · ENGEL %d" % (len(beklenen), len(EKLE), len(METIN), engel))
if not YAZ:
    print("(kuru koşu)")
    sys.exit(1 if engel else 0)
if engel:
    print("🔴 ENGEL VAR — YAZILMADI")
    sys.exit(1)

# ═══════════════════════════ YAZ ═══════════════════════════════════════
for ad, deger in ISLEM.items():
    if ad not in beklenen:
        continue
    kod, isl, dosya, degisen, kop, yeni = deger
    s = metin(dosya)
    (i, j), = kayitlar(s, ad)
    nesne = s[i:j + 1]
    for a in degisen:
        if a == "konum":
            nesne = alan_degistir(nesne, "lat", yeni["lat"])
            nesne = alan_degistir(nesne, "lon", yeni["lon"])
        else:
            nesne = alan_degistir(nesne, a, yeni[a])
    metinler[dosya] = s[:i] + nesne + s[j + 1:]
    for kf, alan, ky in kop:
        kd = "data/" + kf
        ks = metin(kd)
        yer = kayitlar(ks, ad)
        if len(yer) != 1:
            print("🔴 KOPYA YAZILAMADI %s %s (%d)" % (kf, ad, len(yer)))
            continue
        (i, j), = yer
        nes = ks[i:j + 1]
        for a in alan:
            nes = alan_degistir(nes, a, ky[a])
        metinler[kd] = ks[:i] + nes + ks[j + 1:]
for dosya, ad, js in EKLE:
    s = metin(dosya)
    son = s.rstrip().rfind("];")
    onc = s[:son].rstrip()
    ayrac = "" if onc.endswith(",") or onc.endswith("[") else ","
    metinler[dosya] = onc + ayrac + "\n\n" + js.strip().rstrip(",") + "\n\n" + s[son:]
# METİN: kayıt/EKLE yazımlarından SONRA, aynı sırayla yeniden uygula (sanal kopya ISLEM'den önceki metne göreydi)
for giris in METIN:
    dosya, a, b = giris[:3]
    mod = giris[3] if len(giris) > 3 else "bir"
    s = metin(dosya)
    i, j = metin_kapsam(dosya, mod, s)
    parca = s[i:j].replace(a, b) if mod == "hepsi" else s[i:j].replace(a, b, 1)
    if parca == s[i:j]:
        print("🔴 METİN YAZILAMADI (ISLEM sonrası eşleşme kayboldu):", dosya, a[:60])
    metinler[dosya] = s[:i] + parca + s[j:]
for dosya, s in metinler.items():
    io.open(os.path.join(KOK, dosya), "w", encoding="utf-8", newline="").write(s)

# ═══════════════════════════ GERİ OKU ══════════════════════════════════
Y2 = {y["ad"]: y for y in girdi.yukle(sessiz=True)}
fark = 0
for ad, yeni in beklenen.items():
    for a in ("s", "d", "v", "isg"):
        if (Y2[ad].get(a) or []) != yeni[a]:
            fark += 1
            print("🔴 GERİ OKUMA FARKI", ad, a)
    if Y2[ad].get("kur") != yeni["kur"] and not (Y2[ad].get("kur") in (None, "") and yeni["kur"] in (None, "")):
        fark += 1
        print("🔴 GERİ OKUMA FARKI", ad, "kur", Y2[ad].get("kur"), yeni["kur"])
for dosya, ad, js in EKLE:
    if ad not in Y2:
        fark += 1
        print("🔴 EKLENEN OKUNAMADI", ad)
# ═══════════════════════════ GENEL KOPYA EŞİTLEME (D017) ════════════════
# Kural: yazımdan ÖNCE veriyle AYNI olan bir yer_yama kopyası, yazımdan SONRA da aynı
# olmalı; değilse yeni veri değeri kopyaya yazılır. Önceden FARKLI olan kopyaya
# dokunulmaz, raporlanır (kendi bekleyen değişikliğini taşıyor olabilir).
kop_once = {(c["f"], c["ad"]): c for c in KOPYA}
kop_sonra = json.loads(subprocess.run(["node", "-e", JS], capture_output=True, text=True,
                                      encoding="utf-8", cwd=KOK).stdout)
es_yaz = collections.defaultdict(list)
for c in kop_sonra:
    ad = c["ad"]
    if ad not in Y or ad not in Y2 or len(Y[ad]) != 1:
        continue
    once = kop_once.get((c["f"], ad))
    if not once:
        continue
    for a in ("s", "d", "v", "isg"):
        if c.get(a) is None:
            continue
        veri_once = Y[ad][0].get(a) or []
        veri_sonra = Y2[ad].get(a) or []
        if veri_once == veri_sonra or c[a] == veri_sonra:
            continue
        if once.get(a) == veri_once:
            es_yaz[c["f"]].append((ad, a, veri_sonra))
        else:
            print("   ⚪ kopya %s %s.%s önceden de veriden FARKLIYDI — dokunulmadı" % (c["f"], ad, a))
for kf, liste in es_yaz.items():
    kd = "data/" + kf
    ks = io.open(os.path.join(KOK, kd), encoding="utf-8", newline="").read()
    for ad, a, deger in liste:
        yer = kayitlar(ks, ad)
        if len(yer) != 1:
            print("🔴 KOPYA EŞİTLENEMEDİ %s %s (%d)" % (kf, ad, len(yer)))
            continue
        (i, j), = yer
        ks = ks[:i] + alan_degistir(ks[i:j + 1], a, deger) + ks[j + 1:]
        print("   ↳ kopya eşitlendi %s %s.%s" % (kf, ad, a))
    io.open(os.path.join(KOK, kd), "w", encoding="utf-8", newline="").write(ks)
print("YAZILDI · %d dosya · geri okuma farkı %d · kopya eşitleme %d" % (
    len(metinler), fark, sum(len(v) for v in es_yaz.values())))
