# -*- coding: utf-8 -*-
"""🔴 KOMŞU ÖLÇÜTÜ ÇÜRÜDÜ — GERÇEK SINIRA SORUYORUM.

Komşu çoğunluğu ölçütü İKİ YÖNDE DE yanıldı:
  SAHTE POZİTİF  Chequamegon (Wisconsin) · Michilimackinac (Michigan)
                 — ikisi de ABD'de, ama en yakın noktalar Kanada tarafında
  SAHTE NEGATİF  Sainte-Marie / Ossossané (Ontario) — "temiz" çıktılar
⇒ Ölçüt ülkeyi değil ATLASIN NOKTA YOĞUNLUĞUNU ölçüyordu. (§11'in nehir
  geçiş metriği dersi: ölçü nehri değil ATLASI ölçüyordu — aynı sınıf.)

🟢 YENİ ÖLÇÜT: `veri-kaynak/ne_10m_admin_0_countries.geojson` ile
  NOKTA-POLİGON. Modern ülke 1783 egemenliği DEĞİLDİR — ama ABD/Kanada/
  Meksika sınırları 1923'te ZATEN bugünküydü, ve kayıtların `t:` ucu
  1923-10-29. ⇒ Modern ülke, 1923 kimliği için GEÇERLİ bir sınav.

⚠️ SINIRI ÖNCEDEN: bu test 1923 UCUNU sınar, 1783 BAŞLANGICINI değil.
  Modern ABD'de olup 1783'te ABD'de OLMAYAN yerler var (Florida 1783'te
  İspanya'ya GERİ VERİLDİ, 1821'e kadar İspanyol). Onu ayrıca soruyorum.

kullanım: py denetim/ARAC-1783-ULKE-SINA.py
"""
import io
import json
import os
import subprocess
import sys

sys.stdout.reconfigure(encoding="utf-8", errors="replace")
os.chdir(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

try:
    from shapely.geometry import shape, Point
    from shapely.strtree import STRtree
except ImportError:
    print("⚪ ÖLÇÜLEMEDİ — shapely kurulu değil")
    sys.exit(2)

# ---- noktalar: `1783-09-03`te `abd`ye geçenler (node ile çıkarıldı) ----
JS = r"""
const fs=require("fs"),path=require("path");process.chdir(%s);
const {execFileSync}=require("child_process");
const dosyalar=JSON.parse(execFileSync("py",["denetim/_girdi_listesi.py"],{encoding:"utf8"}));
const out=[];
for(const f of dosyalar){global.window={};
  eval(fs.readFileSync(path.join("data",path.basename(f)),"utf8"));
  for(const k of Object.keys(global.window)) if(Array.isArray(global.window[k]))
    for(const y of global.window[k]){
      if(!Array.isArray(y.s))continue;
      const p=y.s.find(q=>q.f==="1783-09-03"&&q.d==="abd");
      if(!p)continue;
      const onceki=y.s.filter(q=>q.t==="1783-09-03").map(q=>q.d+" "+q.f).join(" · ");
      out.push({ad:y.ad,lat:y.lat,lon:y.lon,dosya:f,onceki:onceki,
                son:y.s[y.s.length-1].t});
    }}
console.log(JSON.stringify(out));
""" % json.dumps(os.getcwd())
yol = os.path.join("denetim", "_1783_cikar.js")
io.open(yol, "w", encoding="utf-8", newline="\n").write(JS)
N = json.loads(subprocess.run(["node", yol], capture_output=True,
                              text=True, encoding="utf-8").stdout)
print("`1783-09-03`te `abd`ye geçen nokta: %d\n" % len(N))

# ---- ülke poligonları ----
print("ne_10m_admin_0_countries.geojson okunuyor…")
gj = json.load(io.open("veri-kaynak/ne_10m_admin_0_countries.geojson",
                       encoding="utf-8"))
polis, adlar = [], []
for ft in gj["features"]:
    pr = ft.get("properties") or {}
    ad = pr.get("ADMIN") or pr.get("NAME") or pr.get("SOVEREIGNT") or "?"
    try:
        g = shape(ft["geometry"])
    except Exception:
        continue
    if g.is_empty:
        continue
    polis.append(g)
    adlar.append(ad)
print("  ülke poligonu: %d\n" % len(polis))
agac = STRtree(polis)

# 🔴 C13 ④ — ÇIKTIYI DOĞRU YERDEN OKUDUĞUMU GÖSTER: bilinen üç nokta
KONTROL = [("Washington DC", 38.90, -77.04, "United States of America"),
           ("Ottawa", 45.42, -75.70, "Canada"),
           ("Mexico City", 19.43, -99.13, "Mexico")]


def ulke(la, lo):
    p = Point(lo, la)
    # 🔴 `STRtree.query` numpy int64 döndürüyor; `isinstance(i, int)` onu
    #   TANIMIYOR ve ilk sürümüm `polis.index(i)`e düşüp ÇÖKTÜ.
    #   🟢 Çökmesi DOĞRU davranıştı: sessizce None dönseydi "ülke
    #   bulunamadı" diye raporlar ve 29 noktayı şüpheli sayardım.
    #   (§11: bir aracın çökmesi, yanlış cevap vermesinden İYİDİR.)
    for i in agac.query(p):
        j = int(i)
        if polis[j].covers(p):
            return adlar[j]
    # kıyıda kalmış olabilir — en yakın poligon
    en, ead = 1e9, None
    for i, g in enumerate(polis):
        d = g.distance(p)
        if d < en:
            en, ead = d, adlar[i]
    return "%s (kıyıdan %.3f°)" % (ead, en)


print("KONTROL SATIRLARI (bunlar tutmazsa okumam bozuk, ölçüm değil):")
tamam = True
for ad, la, lo, bek in KONTROL:
    g = ulke(la, lo)
    ok = g.startswith(bek)
    tamam = tamam and ok
    print("  %s %-14s → %-40s (beklenen %s)"
          % ("🟢" if ok else "🔴", ad, g, bek))
if not tamam:
    print("\n🔴 KONTROL DÜŞTÜ — sonuçlar KULLANILMAZ")
    sys.exit(1)

print("\n" + "=" * 78)
print("29 NOKTANIN MODERN ÜLKESİ — `abd` 1923'te DOĞRU MU")
print("=" * 78)
kova = {}
sonuc = []
for r in sorted(N, key=lambda x: x["lon"]):
    g = ulke(r["lat"], r["lon"])
    abd = g.startswith("United States")
    im = "🟢" if abd else "🔴"
    kova.setdefault(g.split(" (")[0], []).append(r["ad"])
    sonuc.append(dict(r, modern_ulke=g, abd_1923_dogru=abd))
    print("  %s %-38s (%7.3f,%9.3f)  %s" % (im, r["ad"], r["lat"], r["lon"], g))

print("\n" + "-" * 78)
for k, v in sorted(kova.items(), key=lambda x: -len(x[1])):
    print("  %-42s %2d  %s" % (k, len(v), ", ".join(v[:4])
                               + (" …" if len(v) > 4 else "")))
yanlis = [s for s in sonuc if not s["abd_1923_dogru"]]
print("\n🔴 1923'te `abd` YANLIŞ olan nokta: %d" % len(yanlis))
for s in yanlis:
    print("     %-38s %s   (önceki: %s)"
          % (s["ad"], s["modern_ulke"], s["onceki"]))

io.open("denetim/_1783_ulke.json", "w", encoding="utf-8", newline="\n").write(
    json.dumps(sonuc, ensure_ascii=False, indent=1) + "\n")
print("\n-> denetim/_1783_ulke.json")
