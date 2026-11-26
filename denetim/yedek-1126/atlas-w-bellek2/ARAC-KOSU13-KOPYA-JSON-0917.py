# -*- coding: utf-8 -*-
"""KOSU13-YAMA — JSON üslubundaki yer_yama kopyalarını günceller (ARAC-KOSU13-UYGULA'nın eki).
`"ad": "X"` biçimli çok satırlı kayıtları ARAC-KOSU13-UYGULA'nın `ad:` kalıbı görmedi
(5 kopya: tbmm_1920 Erzurum·Erzincan·Trabzon·Bitlis · manda Halep). Burada kayıt,
ad eşleşmesini SARAN `{…}` nesnesi bulunarak düzenlenir; değer dosyanın kendi
üslubuyla (json.dumps) yazılır. Yeni değer = VERİDEKİ GÜNCEL alan (ARAC-KOSU13-UYGULA
yazdıktan sonra) — kopya işlemi kopyanın kendi dizisine uygulanır, alt dizi yoksa hata.
    py denetim/ARAC-KOSU13-KOPYA-JSON-0917.py [--yaz]
"""
import io
import json
import os
import re
import subprocess
import sys

sys.stdout.reconfigure(encoding="utf-8")
KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
os.chdir(KOK)
YAZ = "--yaz" in sys.argv
sys.argv = [sys.argv[0]]      # UYGULA modülü --yaz görmesin
import importlib.util  # noqa: E402

spec = importlib.util.spec_from_file_location("u", os.path.join(KOK, "denetim", "ARAC-KOSU13-UYGULA-0917.py"))

HEDEF = {"yer_yama_tbmm_1920_0905.js": ["Erzurum", "Erzincan", "Trabzon", "Bitlis"],
         "yer_yama_manda_0906.js": ["Halep"]}


def maske(s):
    m = bytearray(len(s))
    t, k = False, False
    for i, c in enumerate(s):
        if k:
            k = False
            m[i] = 1
            continue
        if t:
            m[i] = 1
            if c == "\\":
                k = True
            elif c == '"':
                t = False
            continue
        if c == '"':
            t = True
            m[i] = 1
    return m


def kaydi_bul(s, mk, ad):
    rx = re.compile(r'"ad"\s*:\s*"%s"' % re.escape(ad))
    out = []
    for m in rx.finditer(s):
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
        d, j = 0, i
        while j < len(s):
            if not mk[j]:
                if s[j] in "{[":
                    d += 1
                elif s[j] in "}]":
                    d -= 1
                    if d == 0:
                        break
            j += 1
        out.append((i, j))
    return out


# kopyanın mevcut değeri (node) + işlemler (UYGULA'daki ISLEM tablosu, yeniden çalıştırmadan)
kaynak = io.open(os.path.join(KOK, "denetim", "ARAC-KOSU13-UYGULA-0917.py"), encoding="utf-8").read()
ust = kaynak.split("# ═══════════════════════════ YARDIMCILAR")[0]
ns = {"__file__": os.path.join(KOK, "denetim", "ARAC-KOSU13-UYGULA-0917.py")}
exec(compile(ust, "UYGULA-ust", "exec"), ns)
mot = kaynak.split("# ═══════════════════════════ İŞLEM MOTORU ═══")[1].split("# ═══════════════════════════ 1 · VERİYİ OKU")[0]
exec(compile("#" + mot, "UYGULA-motor", "exec"), ns)   # bölme başlık satırının kuyruğunu bırakır
ISLEM, uygula = ns["ISLEM"], ns["uygula"]

hata = 0
for dosya, adlar in HEDEF.items():
    yol = os.path.join(KOK, "data", dosya)
    js = r"""global.window={};eval(require('fs').readFileSync(%s,'utf8'));const o={};
for(const k in window)if(Array.isArray(window[k]))for(const r of window[k])if(r&&r.ad)(o[r.ad]=o[r.ad]||[]).push(r);
process.stdout.write(JSON.stringify(o));""" % json.dumps(yol)
    kop = json.loads(subprocess.run(["node", "-e", js], capture_output=True, text=True, encoding="utf-8").stdout)
    s = io.open(yol, encoding="utf-8", newline="").read()
    for ad in adlar:
        if len(kop.get(ad, [])) != 1:
            print("🔴", dosya, ad, "kopya sayısı", len(kop.get(ad, [])))
            hata += 1
            continue
        c = kop[ad][0]
        isl = ISLEM[ad][1]
        alanlar = {a for a in ("s", "d", "v", "isg") if c.get(a) is not None}
        h = []
        y = uygula(c, isl, h, yalniz=alanlar)
        if h:
            print("🔴", dosya, ad, h)
            hata += 1
            continue
        mk = maske(s)
        yer = kaydi_bul(s, mk, ad)
        if len(yer) != 1:
            print("🔴", dosya, ad, "nesne", len(yer))
            hata += 1
            continue
        i, j = yer[0]
        nesne = s[i:j + 1]
        for a in sorted(alanlar):
            if y[a] == c[a]:
                continue
            nm = maske(nesne)
            m = None
            for mm in re.finditer(r'"%s"\s*:\s*\[' % a, nesne):
                if not nm[mm.start() + 1] or True:
                    # anahtarın kendisi dizge; değer köşeli parantezi dizge dışında olmalı
                    if not nm[mm.end() - 1]:
                        m = mm
                        break
            if not m:
                print("🔴", dosya, ad, a, "alanı bulunamadı")
                hata += 1
                continue
            bas = m.end() - 1
            d, k = 0, bas
            nm = maske(nesne)
            while k < len(nesne):
                if not nm[k]:
                    if nesne[k] == "[":
                        d += 1
                    elif nesne[k] == "]":
                        d -= 1
                        if d == 0:
                            break
                k += 1
            nesne = nesne[:bas] + json.dumps(y[a], ensure_ascii=False) + nesne[k + 1:]
            print("✓", dosya, ad, a)
        s = s[:i] + nesne + s[j + 1:]
    if YAZ and not hata:
        io.open(yol, "w", encoding="utf-8", newline="").write(s)
print("hata", hata, "YAZILDI" if YAZ and not hata else "(kuru)")
