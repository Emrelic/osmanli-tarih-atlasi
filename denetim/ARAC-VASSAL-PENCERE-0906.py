# -*- coding: utf-8 -*-
"""🅑 ON KOSUL — onerilen `kid:` KUNYE PENCERESI `v:` donemini kapsiyor mu?

`§3.5.0`: bir kunyenin VAR OLMASI, yazilabilir oldugu anlamina GELMEZ —
penceresi de tutmali. Kapsamiyorsa `kid:` yazmak `4c`/`4d` ihlali dogurur.
Bu olcum yamadan ONCE kosulur; tutmayan esleme YAZILMAZ.
"""
import io, os, sys

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(KOK, "arac"))
import girdi

def a(s):
    for x, y in [("İ","I"),("ı","i"),("ş","s"),("Ş","S"),("ü","u"),("Ü","U"),
                 ("ö","o"),("Ö","O"),("ç","c"),("Ç","C"),("ğ","g"),("Ğ","G"),
                 ("â","a"),("î","i"),("û","u"),("’","'"),("Â","A")]:
        s = s.replace(x, y)
    return "".join(c if ord(c) < 256 else "?" for c in s)

def p(s=""):
    sys.stdout.write(a(str(s)) + "\n")

# ESLEME — denetim/ESLEME-VASSAL-KUNYE-0906.md ①. bolumu
ESLEME = {
    "Mısır (Kavalalı)": "misir-kavalali",
    "Kavalalı hânedanı": "misir-kavalali",
    "Mısır (İbrahim Paşa)": "misir-kavalali",
    "Cezayir Ocaklığı (dayı idaresi)": "cezayir-ocagi",
    "Trablusgarp Ocaklığı (Karamanlılar)": "trablusgarp-ocagi",
    "Eflak Voyvodalığı": "eflak",
    "Boğdan Voyvodalığı": "bogdan",
    "Bulgaristan Prensliği": "bulgaristan-prensligi",
    "Kırım Hanlığı": "kirim",
    "Sırbistan Prensliği": "sirbistan-prensligi",
    "Erdel Prensliği": "erdel",
    "İmereti krallığı (tâbi)": "imereti",
}
# onek eslesmesi gerekenler (parantezli varyantlar)
ONEK = [
    ("Boğdan Voyvodalığı", "bogdan"),
    ("Şarkî Rumeli", "sarki-rumeli"),
    ("Hacıemiroğulları", "haciemir"),
    ("Şabah emirliği", "kuveyt"),
    ("Sânî emirliği", "katar"),
    ("Trablusgarp Ocaklığı", "trablusgarp-ocagi"),
]

# ORTAK normallestirici — `lower()` KULLANILMAZ ("İ".lower() iki kod noktasi)
import importlib.util as _iu
_sp = _iu.spec_from_file_location(
    "arac_normal", os.path.join(KOK, "denetim", "ARAC-NORMAL-0903.py"))
_m = _iu.module_from_spec(_sp)
_sp.loader.exec_module(_m)
norm = _m.norm

_ESLEME_N = {norm(k): v for k, v in ESLEME.items()}
_ONEK_N = [(norm(o), kid) for o, kid in ONEK]

def kid_bul(k):
    """🔴 TAM DIZGI eslesmesi 158 Misir doneminin 74'unu sayabildi —
    yazim varyanti ("hanedani" / "hânedanı") sessizce kacirtiyordu.
    Artik iki taraf da normallestirilerek karsilastirilir."""
    nk = norm(k)
    if nk in _ESLEME_N:
        return _ESLEME_N[nk]
    for onek, kid in _ONEK_N:
        if nk.startswith(onek):
            return kid
    return None

D = girdi.oku_devletler()
KUNYE = {}
for x in (D.values() if isinstance(D, dict) else D):
    if x.get("id"):
        KUNYE[x["id"]] = (x.get("f") or "?", x.get("t") or "?", x.get("ad") or "")

Y = girdi.yukle(sessiz=True)
tut, tasan, kunyesiz = {}, [], {}
for y in Y:
    for d in (y.get("v") or []):
        k = d.get("k")
        if not k:
            continue
        kid = kid_bul(k)
        if kid is None:
            continue
        if kid not in KUNYE:
            kunyesiz[kid] = kunyesiz.get(kid, 0) + 1
            continue
        kf, kt, kad = KUNYE[kid]
        f, t = d.get("f") or "?", d.get("t") or "?"
        if f >= kf and t <= kt:
            tut[kid] = tut.get(kid, 0) + 1
        else:
            tasan.append((y.get("ad"), k, kid, f, t, kf, kt))

p("=" * 76)
p("KUNYE PENCERESI SINAVI — onerilen `kid:` esleme, %d kunye" % len(tut | {x[2]: 0 for x in tasan}))
p("=" * 76)
p("")
p("[OK] PENCERE TUTUYOR — %d donem" % sum(tut.values()))
for kid, n in sorted(tut.items(), key=lambda x: -x[1]):
    kf, kt, kad = KUNYE[kid]
    p("  %4d  %-24s %s -> %s" % (n, kid, kf, kt))
p("")
p("[!] PENCERE ASILIYOR — %d donem" % len(tasan))
for ad, k, kid, f, t, kf, kt in tasan[:25]:
    p("  %-20s %-22s donem %s>%s   kunye %s>%s" % (a(str(ad))[:20], kid, f, t, kf, kt))
if kunyesiz:
    p("")
    p("[!] KUNYE BULUNAMADI: %s" % ", ".join("%s(%d)" % (k, v) for k, v in kunyesiz.items()))
p("")
p("=" * 76)
p("TUTAN %d  ·  ASAN %d" % (sum(tut.values()), len(tasan)))
