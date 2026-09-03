# -*- coding: utf-8 -*-
"""98 YENI KUNYENIN RENK BASINCINI OLC — kosu bitmeden.

Soru: 98 renk BULUNABILIR MI, yoksa palet doyar mi?
§11: "cozulemedi demeden once HANGI KISITIN bagladigini olc" — ve
"SIRA baglıyor olabilir". Ama once EVRENI olcelim: ayni anda sahnede
VE ayni bolgede kac kunye var? Bu, cozucunun karsilasacagi EN BUYUK
KLIK'in alt siniridir.
"""
import sys, os, io, json, subprocess
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8", errors="replace")
KOK = os.getcwd()
sys.path.insert(0, os.path.join(KOK, "arac"))
import renkler as R


def gun(s):
    q = str(s).split("-")
    return (int(q[0]), int(q[1]) if len(q) > 1 else 1,
            int(q[2]) if len(q) > 2 else 1)


yeni = []


def topla(o):
    if isinstance(o, dict):
        if "id" in o and "f" in o:
            yeni.append(o)
        else:
            for v in o.values():
                topla(v)
    elif isinstance(o, list):
        for e in o:
            topla(e)


topla(json.load(io.open(sys.argv[1], encoding="utf-8")))

js = ("global.window={};eval(require('fs').readFileSync(process.argv[1],'utf8'));"
      "const D=window.DEVLETLER||[];"
      "console.log(JSON.stringify(D.map(d=>({id:d.id,f:d.f,t:d.t,bolge:d.bolge}))));")
p = subprocess.run(["node", "-e", js, os.path.join(KOK, "data", "devletler.js")],
                   capture_output=True, text=True, encoding="utf-8")
mevcut = json.loads(p.stdout.strip())

print("yeni künye : %d · mevcut künye : %d · BOYALAR : %d"
      % (len(yeni), len(mevcut), len(R.BOYALAR)))

# --- yeni kunyelerin bolge dagilimi
bol = {}
for k in yeni:
    bol[k.get("bolge") or "?"] = bol.get(k.get("bolge") or "?", 0) + 1
print()
print("YENİ KÜNYELERİN BÖLGESİ:")
for b, n in sorted(bol.items(), key=lambda kv: -kv[1]):
    print("   %-22s %3d" % (b, n))

# --- AYNI BOLGE + AYNI ANDA SAHNEDE  => en buyuk klik alt siniri
hepsi = [{"id": k["id"], "f": gun(k["f"]), "t": gun(k["t"]),
          "bolge": k.get("bolge"), "yeni": True} for k in yeni]
for d in mevcut:
    if d.get("f") and d.get("t"):
        try:
            hepsi.append({"id": d["id"], "f": gun(d["f"]), "t": gun(d["t"]),
                          "bolge": d.get("bolge"), "yeni": False})
        except ValueError:
            pass

print()
print("EN KALABALIK AN — bölge bölge (aynı gün sahnede olan künye sayısı)")
bolgeler = sorted({h["bolge"] for h in hepsi if h["bolge"]})
sonuc = []
for b in bolgeler:
    kum = [h for h in hepsi if h["bolge"] == b]
    if len(kum) < 2:
        continue
    en, eng = 0, None
    for y in range(1281, 1924, 5):
        g = (y, 6, 15)
        n = sum(1 for h in kum if h["f"] <= g < h["t"])
        if n > en:
            en, eng = n, y
    yn = 0
    for h in kum:
        if h["yeni"] and eng and h["f"] <= (eng, 6, 15) < h["t"]:
            yn += 1
    sonuc.append((en, b, eng, yn, len(kum)))
for en, b, eng, yn, top in sorted(sonuc, reverse=True)[:12]:
    print("   %-22s en kalabalık %3d künye (%s) · bunun %3d'ü YENİ · toplam %d"
          % (b, en, eng, yn, top))

print()
print("📌 «en kalabalık an» = o bölgede AYNI GÜN sahnede olan künye sayısı.")
print("   Çözücünün karşılaşacağı kliğin ALT SINIRIDIR: bu kadar kimlik")
print("   birbirinden ΔE≥12 uzakta olmalı — ve komşuluk VERİDEN gelir,")
print("   yani gerçek klik bundan KÜÇÜK olabilir (hepsi komşu olmayabilir).")
print("   ⚠️ ÜST sınır DEĞİL: bölge dışı komşuluk da var (kıyı · boğaz).")
