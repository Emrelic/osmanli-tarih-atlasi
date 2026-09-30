# -*- coding: utf-8 -*-
"""ARAC-YERLESIM-UYGULA-0930.py'nin `alan_yaz` kusuru icin IKI YONLU SINAV.

Vaka (30 Eylul 2026): uygulayici `data/yerlesimler.js`i BOZDU. Zagem (Kaheti)
kaydinin `neden:` METNI icinde bir kod alintisi var —
`v:[{"f":"1578-08-24", ...}]` — ve eski `re.search(r'v\\s*:\\s*\\[')` dizginin
ICINE vurdu; dizgiyi ortasindan kesip yerine tirnaksiz JSON koydu.
`node --check` yakaladi: "SyntaxError: Unexpected identifier 'f'".

🔴 ONGORU SINAVDAN ONCE YAZILDI (CLAUDE.md §11):
   ① dizgi icindeki `v:[` DOKUNULMAZ, gercek `v:` alani degisir
   ② dizgi icindeki metin BAYT BAYT ayni kalir
   ③ siradan kayitta `v:` yine degisir (gerileme yok)
   ④ olmayan alan EKLENIR
   ⑤ dizgi icinde gecen bir ad, alan sayilmaz (_ust_duzey_alanlar)
   ⑥ cikti her vakada node ile GECERLI JS

Kosum:  py denetim/ARAC-YERLESIM-UYGULA-0930-SINAV.py
"""
import io
import importlib.util
import json
import os
import subprocess
import sys
import tempfile

sys.stdout.reconfigure(encoding="utf-8", errors="replace")
KOK = r"C:\atlas"
YOL = os.path.join(KOK, "denetim", "ARAC-YERLESIM-UYGULA-0930.py")

# ── aleti ICE AL ama ANA GOVDESINI KOSTURMA ─────────────────────────────
# Dosya ice alinirken JSON okuyup rapor basiyor; sinav yalniz uc islevi ister.
kaynak = io.open(YOL, encoding="utf-8").read()
bas = kaynak.index("def _ust_duzey_alanlar")
son = kaynak.index("\ndosyalar, rapor =")
kod = "import io, json, os, re, sys\n" + kaynak[bas:son]
ns = {}
exec(compile(kod, YOL + " (yalniz islevler)", "exec"), ns)
alan_yaz = ns["alan_yaz"]
ust = ns["_ust_duzey_alanlar"]

gecti, kaldi = 0, []


def sina(ad, beklenen, olculen):
    global gecti
    if beklenen == olculen:
        gecti += 1
        print("  ✓ %s" % ad)
    else:
        kaldi.append(ad)
        print("  ✗ %s\n      beklenen: %r\n      olculen : %r" % (ad, beklenen, olculen))


def js_gecerli(govde):
    with tempfile.NamedTemporaryFile("w", suffix=".js", delete=False,
                                     encoding="utf-8") as f:
        f.write("window.X = [\n" + govde + "\n];\n")
        p = f.name
    try:
        r = subprocess.run(["node", "--check", p], capture_output=True, text=True)
        return r.returncode == 0
    finally:
        os.unlink(p)


# ── ① + ② + ⑥  DIZGI ICINDE KOD ALINTISI TASIYAN KAYIT ──────────────────
print("① dizgi icinde `v:[` gecen kayit — gercek alan degismeli, metin AYNI kalmali")
NEDEN = ('Olcum sunu dogruladi: v:[{\\"f\\":\\"1578-08-24\\",\\"t\\":\\"1606-01-01\\"'
         ',\\"kid\\":\\"kaheti-kralligi\\"}] · gerekce DOGRU.')
kayit = ('{ ad:"Zagem (Kaheti)",neden:"' + NEDEN + '", tur:"sehir", lat:41.7, '
         'lon:45.78, s:[{f:"1281-01-01",t:"1801-09-12",d:"gurcistan"}], '
         'v:[{f:"1578-08-24",t:"1606-01-01",kid:"kaheti-kralligi"}] }')
yeni_v = [{"f": "1578-08-24", "t": "1606-01-01", "kid": "kaheti-kralligi",
           "statu": "vassal"}]
cikti, hal = alan_yaz(kayit, "v", yeni_v)
sina("hal 'degisti' olmali", "degisti", hal)
sina("neden metni BAYT BAYT ayni", True, ('neden:"' + NEDEN + '"') in cikti)
sina("yeni v: yazildi", True, '"statu":"vassal"' in cikti)
sina("eski ciplak v: alani kalmadi", 0, cikti.count('v:[{f:"1578-08-24"'))
sina("dizgideki kacisli kopya TEK ve duruyor", 1, cikti.count('\\"kaheti-kralligi\\"'))
sina("cikti gecerli JS", True, js_gecerli(cikti))

# ── ③ GERILEME: siradan kayit ───────────────────────────────────────────
print("\n③ siradan kayit — gerileme olmamali")
sade = ('{ ad:"Vidin", tur:"kale", lat:43.992, lon:22.873, '
        'v:[{f:"1878-07-13",t:"1908-10-05",kid:"bulgaristan-prensligi"}] }')
c2, h2 = alan_yaz(sade, "v", [{"f": "1878-07-13", "t": "1885-09-18"}])
sina("hal 'degisti'", "degisti", h2)
sina("yeni deger icinde", True, '"1885-09-18"' in c2)
sina("eski deger gitti", False, "bulgaristan-prensligi" in c2)
sina("gecerli JS", True, js_gecerli(c2))

# ── ④ OLMAYAN ALAN EKLENIR ──────────────────────────────────────────────
print("\n④ olmayan alan")
c3, h3 = alan_yaz('{ ad:"Test", tur:"sehir", lat:1.0, lon:2.0 }', "isg",
                  [{"f": "1900-01-01", "t": "1901-01-01", "d": "rusya"}])
sina("hal 'eklendi'", "eklendi", h3)
sina("gecerli JS", True, js_gecerli(c3))
c4, h4 = alan_yaz('{ ad:"Test", tur:"sehir" }', "isg", [])
sina("bos deger + olmayan alan = 'yok-bos'", "yok-bos", h4)

# ── ⑤ _ust_duzey_alanlar dizgiyi ATLAR ──────────────────────────────────
print("\n⑤ _ust_duzey_alanlar — dizgi icindeki ad alan sayilmaz")
y = ust(kayit)
sina("ad · neden · tur · lat · lon · s · v bulundu",
     True, all(k in y for k in ("ad", "neden", "tur", "lat", "lon", "s", "v")))
sina("dizgi icindeki `f`/`t`/`kid` alan sayilmadi",
     True, not any(k in y for k in ("f", "t", "kid")))
# gercek v: alani, neden dizgisindeki v:'den SONRA olmali
sina("bulunan v: kaydin SONUNDAKI alan", True, y["v"][0] > kayit.index("neden:"))
sina("bulunan v: dizginin BITISINDEN sonra",
     True, y["v"][0] > kayit.index('", tur:"sehir"'))

# ── ⑥ ters yon: alan var ama dizi DEGIL ─────────────────────────────────
print("\n⑥ alan var ama dizi degil — dokunulmamali")
c5, h5 = alan_yaz('{ ad:"Test", m:"Tiflis", tur:"sehir" }', "m", [{"x": 1}])
sina("hal 'dizi-degil'", "dizi-degil", h5)
sina("kayit degismedi", '{ ad:"Test", m:"Tiflis", tur:"sehir" }', c5)

print("\n" + "-" * 62)
print("SONUC: %d gecti · %d kaldi" % (gecti, len(kaldi)))
if kaldi:
    for k in kaldi:
        print("   ✗", k)
    sys.exit(1)
print("✓ IKI YONDE TEMIZ")
