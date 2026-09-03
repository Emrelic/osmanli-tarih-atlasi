# -*- coding: utf-8 -*-
"""BUTUN KULLIYATI kimlik kapisinin UCUNCU ayagindan gecirir:
   her `s:` donemi, kullandigi kunyenin OMRU icinde mi? (§3.5 hayalet)

DUNYA-SIBIRYA-0903 tek bir kayitta 87,7 yillik bir hayalet buldu
(Buryat topraklari s: 1281'den `kuzey-yuan`, kunye f:1368-09-14).
Bir tane varsa BASKALARI DA VARDIR — evren 2731 kayit.

🔴 Yil DORT HANEYE doldurulur (fransa f='987-01-01' · bizans f='330-05-11').
"""
import sys, os, io, json, subprocess
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8", errors="replace")
KOK = os.getcwd()
sys.path.insert(0, os.path.join(KOK, "arac"))
import girdi

js = ("global.window={};eval(require('fs').readFileSync(process.argv[1],'utf8'));"
      "const D=window.DEVLETLER||[];"
      "console.log(JSON.stringify(D.map(d=>({id:d.id,ad:d.ad,f:d.f,t:d.t,harita:d.harita}))));")
p = subprocess.run(["node", "-e", js, os.path.join(KOK, "data", "devletler.js")],
                   capture_output=True, text=True, encoding="utf-8")
K = {}
for d in json.loads(p.stdout.strip()):
    for a in (d.get("id"), d.get("harita")):
        if a:
            K.setdefault(a, d)


def gun(s):
    if not s:
        return None
    q = str(s).split("-")
    try:
        return (int(q[0]), int(q[1]) if len(q) > 1 else 1,
                int(q[2]) if len(q) > 2 else 1)
    except ValueError:
        return None


def yil(a, b):
    return ((b[0] - a[0]) * 365.25 + (b[1] - a[1]) * 30.4 + (b[2] - a[2])) / 365.25


Y = girdi.yukle()
once, sonra, kimliksiz = [], [], []
donem = 0
for y in Y:
    for pp in (y.get("s") or []):
        kid = pp.get("d")
        if not kid:
            continue
        donem += 1
        k = K.get(kid)
        if k is None:
            kimliksiz.append((y.get("ad"), kid, y.get("_kaynak")))
            continue
        kf, kt = gun(k.get("f")), gun(k.get("t"))
        gf, gt = gun(pp.get("f")), gun(pp.get("t"))
        if not (kf and kt and gf and gt):
            continue
        if gf < kf:
            once.append((yil(gf, kf), y.get("ad"), kid, pp.get("f"), k.get("f"),
                         y.get("_kaynak")))
        if gt > kt:
            sonra.append((yil(kt, gt), y.get("ad"), kid, pp.get("t"), k.get("t"),
                          y.get("_kaynak")))

print("yerleşim %d · s: dönemi %d · künye anahtarı %d" % (len(Y), donem, len(K)))
print()
print("🔴 KÜNYE DOĞMADAN ÖNCE başlayan dönem : %d" % len(once))
for v, ad, kid, df, kfd, dosya in sorted(once, reverse=True)[:25]:
    print("   %6.1f yıl  %-30s %-24s dönem %s < künye %s   [%s]" %
          (v, ad[:30], kid, df, kfd, dosya))
print()
print("🔴 KÜNYE ÖLDÜKTEN SONRA biten dönem   : %d" % len(sonra))
for v, ad, kid, dt, ktd, dosya in sorted(sonra, reverse=True)[:25]:
    print("   %6.1f yıl  %-30s %-24s dönem %s > künye %s   [%s]" %
          (v, ad[:30], kid, dt, ktd, dosya))
print()
print("🟡 KÜNYESİ HİÇ OLMAYAN kimlik : %d dönem" % len(kimliksiz))
kum = {}
for ad, kid, dosya in kimliksiz:
    kum.setdefault(kid, []).append(ad)
for kid, adlar in sorted(kum.items(), key=lambda kv: -len(kv[1]))[:15]:
    print("   %-26s %3d dönem  %s" % (kid, len(adlar), ", ".join(sorted(set(adlar))[:3])))
