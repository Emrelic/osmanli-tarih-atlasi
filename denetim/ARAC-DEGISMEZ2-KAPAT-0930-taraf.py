# -*- coding: utf-8 -*-
"""Kapı ②: taraflar[] + odak_kimlik kimlikleri devletler.js'te var mı · Kapı ③: küresel ad."""
import sys, io, re, os, glob
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8")
KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(KOK, "arac"))
import girdi
ids = {k.get("id") for k in girdi.oku_devletler() if k.get("id")}
t = open(os.path.join(KOK, "data", "kronoloji_cok_senkron_0930.js"), encoding="utf-8").read()
taraf = [x for blok in re.findall(r"taraflar:\[([^\]]*)\]", t) for x in re.findall(r'"([^"]+)"', blok)]
odak = re.findall(r'odak_kimlik:"([^"]+)"', t)
print("kunye:", len(ids), "· taraf atfi:", len(taraf), "eslenemeyen:", sorted({x for x in taraf if x not in ids}))
print("odak_kimlik:", len(odak), "cozulmeyen:", sorted({x for x in odak if x not in ids}))
ad = "KRONOLOJI_COK_SENKRON_0930"
baska = [f for f in glob.glob(os.path.join(KOK, "data", "*.js"))
         if not f.endswith("kronoloji_cok_senkron_0930.js") and ad in open(f, encoding="utf-8", errors="replace").read()]
print("kuresel ad baska dosyada:", len(baska), baska)
