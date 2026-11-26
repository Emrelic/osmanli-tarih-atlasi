# -*- coding: utf-8 -*-
"""ARAC-KENAR-KIMLIK-0907 — kenarın İKİ UCU ve MALİYETİ.

    KADEME-MODEL-0907 · 7 Eylül 2026 · şartname §②c①

İlk iki alet GEOMETRİYİ ölçtü. Bu alet modelin geri kalanını ölçer:

  ① BOYUT   342 kenarın geometrisi projenin kendi hassasiyetinde
            (3 ondalık, `DEVLET_PARCALAR` konvansiyonu) kaç bayt tutar?
            ⇒ C katmanı üçüncü bir dev dosya mı, yoksa küçük mü?

  ② UÇLAR   NE ülke adı ile atlas kimliği (`devletler.js` id) OTOMATİK
            eşleşiyor mu? Kenarın iki ucu ATLAS KİMLİĞİ olmalı; NE'nin
            İngilizce `NAME` alanı bir kimlik DEĞİLDİR.

🔴 BU ALET "KİMLİK YOK" DEMEZ, "OTOMATİK EŞLEŞMEDİ" DER.
   `§4`ün Türkçe yazım ekseni: `usku` araması `Üsküp`ü bulmaz, ve bir
   kimliği YOK ilan etmeden önce `devletler.js` TARANIR — ki bu alet
   tarıyor, ama İNGİLİZCE bir adla. Eşleşmeyen ad, olmayan kimlik değildir.

🔴 VE 3 ONDALIĞA YUVARLAMA BİREBİRLİĞİ BOZMAZ: iki ülke aynı float'ı
   taşıyorsa aynı yuvarlanmışı da taşır. Yuvarlama ORTAK bir kenarı
   ayrıştıramaz — yalnız AYRI iki kenarı birleştirebilir, ve o da
   ölçülüyor (aşağıda "yuvarlama sonrası çakışan tepe").
"""
import io
import json
import os
import re
import sys
import unicodedata

try:
    sys.stdout.reconfigure(encoding="utf-8")
except Exception:
    pass

from shapely.geometry import shape
from shapely.ops import linemerge
from shapely.strtree import STRtree

# 🔴 ÖLÇÜLDÜ (7 Eylül, bu aletin ilk koşusu): `boundary.intersection`
#    ortak kenarı BİRLEŞİK bir çizgi olarak DEĞİL, İKİ NOKTALI PARÇALARIN
#    yığını olarak döndürüyor — Türkiye↔Suriye için 182 parça · 364 tepe ·
#    benzersiz 183. Yani her iç tepe İKİ KEZ sayılıyor ve ham sayım
#    boyutu ~2× şişiriyor. İlk koşum 137.234 tepe / 2,22 MB dedi ve
#    ikinci aletin 68.994'ü ile çelişti; çelişkiyi ölçtüm, alet yanılıyordu.
#    ⇒ `linemerge` ile parçalar SÜREKLİ çizgilere birleştiriliyor.
#    📌 Ve bu birleştirme yalnız bir sayım düzeltmesi değil: KENAR zaten
#    sürekli bir çizgidir, 182 kopuk parça DEĞİL — model de onu öyle
#    saklamalı.

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
GEOJSON = os.path.join(KOK, "veri-kaynak", "ne_10m_admin_0_countries.geojson")
DEVLETLER = os.path.join(KOK, "data", "devletler.js")
CIKTI = os.path.join(KOK, "denetim", "OLCUM-KENAR-KIMLIK-0907.json")

CEVIR = {ord("İ"): "i", ord("I"): "i", ord("ı"): "i", ord("Ş"): "s",
         ord("ş"): "s", ord("Ğ"): "g", ord("ğ"): "g", ord("Ü"): "u",
         ord("ü"): "u", ord("Ö"): "o", ord("ö"): "o", ord("Ç"): "c",
         ord("ç"): "c", ord("Â"): "a", ord("â"): "a", ord("Î"): "i",
         ord("î"): "i", ord("Û"): "u", ord("û"): "u", ord("’"): "'",
         ord("‘"): "'", ord("`"): "'"}


def norm(s):
    """§4 ortak normalleştirici — `lower()` ÇAĞRILMADAN ÖNCE eşleme.

    `"İ".lower()` iki kod noktası verir ('i' + U+0307) ve alet SESSİZCE
    kaçırır (`CLAUDE.md §4`, 377 adayın 58'i böyle kaybolmuştu).
    """
    s = (s or "").translate(CEVIR)
    s = unicodedata.normalize("NFKD", s)
    s = "".join(c for c in s if not unicodedata.combining(c))
    s = s.lower()
    return re.sub(r"[^a-z0-9]+", "", s)


def kunyeleri_oku():
    """devletler.js'i NODE'a okutur — kendi ayrıştırıcım YOK (§11)."""
    import subprocess
    betik = ("global.window={};"
             "eval(require('fs').readFileSync(%s,'utf8'));"
             "process.stdout.write(JSON.stringify(window.DEVLETLER.map("
             "d=>({id:d.id,ad:d.ad,f:d.f,t:d.t,harita:d.harita}))));"
             % json.dumps(DEVLETLER.replace("\\", "/")))
    ham = subprocess.run(["node", "-e", betik], capture_output=True)
    if ham.returncode != 0:
        raise RuntimeError("node cikis %d: %s" % (ham.returncode, ham.stderr[:400]))
    return json.loads(ham.stdout.decode("utf-8"))


def tepeler(geom, out=None):
    if out is None:
        out = []
    t = geom.geom_type
    if t == "Polygon":
        out.extend(geom.exterior.coords)
        for h in geom.interiors:
            out.extend(h.coords)
    elif t == "MultiPolygon":
        for p in geom.geoms:
            tepeler(p, out)
    return out


def cizgi_tepeleri(g, out=None):
    if out is None:
        out = []
    if g.is_empty:
        return out
    t = g.geom_type
    if t in ("LineString", "LinearRing"):
        out.append(list(g.coords))
    elif t in ("MultiLineString", "GeometryCollection"):
        for p in g.geoms:
            cizgi_tepeleri(p, out)
    return out


def main():
    print("═" * 74)
    print("ARAC-KENAR-KIMLIK-0907 — ① kenar boyutu · ② uçların atlas kimliği")
    print("═" * 74)

    with io.open(GEOJSON, encoding="utf-8") as f:
        ham = json.load(f)
    adlar, geoms = [], []
    for o in ham["features"]:
        p = o["properties"]
        adlar.append(p.get("NAME") or p.get("ADMIN") or "?")
        geoms.append(shape(o["geometry"]))

    agac = STRtree(geoms)
    aday = set()
    for i, g in enumerate(geoms):
        for j in agac.query(g):
            j = int(j)
            if j != i:
                aday.add((min(i, j), max(i, j)))

    # ---------- ① BOYUT ----------
    kenarlar = []
    ham_tepe = 0
    for (i, j) in sorted(aday):
        try:
            hat = geoms[i].boundary.intersection(geoms[j].boundary)
            hat = linemerge(hat) if hat.geom_type == "MultiLineString" else hat
        except Exception:
            continue
        pl = cizgi_tepeleri(hat)
        if not pl:
            continue
        yuv = []
        for parca in pl:
            ham_tepe += len(parca)
            p3 = []
            for (x, y) in parca:
                c = [round(x, 3), round(y, 3)]
                if not p3 or p3[-1] != c:
                    p3.append(c)
            if len(p3) >= 2:
                yuv.append(p3)
        if yuv:
            kenarlar.append({"a": adlar[i], "b": adlar[j], "parca": yuv})

    yuv_tepe = sum(len(p) for k in kenarlar for p in k["parca"])
    parca_say = [len(k["parca"]) for k in kenarlar]
    print("kenar başına SÜREKLİ parça  : asgari %d · ortanca %d · azami %d" %
          (min(parca_say), sorted(parca_say)[len(parca_say) // 2], max(parca_say)))
    gov = json.dumps([k["parca"] for k in kenarlar], separators=(",", ":"))
    print("kenar                       : %d" % len(kenarlar))
    print("tepe — ham                  : %d" % ham_tepe)
    print("tepe — 3 ondalık, tekrarsız : %d  (%%%.1f)" %
          (yuv_tepe, 100.0 * yuv_tepe / ham_tepe))
    print("geometri gövdesi            : %.2f MB  (JSON, boşluksuz)" % (len(gov) / 1048576.0))
    print("   kıyas: data/devletler_harita.js 53,4 MB · data/donemler.js 31,0 MB")

    # 🔴 YUVARLAMA SINAVI — ayrı iki kenarı birleştirdi mi?
    coklu = {}
    for k in kenarlar:
        for p in k["parca"]:
            for c in p:
                coklu.setdefault(tuple(c), set()).add((k["a"], k["b"]))
    cakisan = sum(1 for v in coklu.values() if len(v) > 1)
    print("yuvarlama sonrası birden çok KENARDA görünen tepe: %d / %d" %
          (cakisan, len(coklu)))
    print("   (üçlü sınır kavşakları burada BEKLENİR — kusur değil)")

    # ---------- ② UÇLAR ----------
    kunye = kunyeleri_oku()
    print("")
    print("─" * 74)
    print("künye (devletler.js)        : %d" % len(kunye))
    ix = {}
    for d in kunye:
        for anahtar in (d.get("id"), d.get("ad"), d.get("harita")):
            n = norm(anahtar)
            if n:
                ix.setdefault(n, d["id"])

    uc_adlari = sorted({k["a"] for k in kenarlar} | {k["b"] for k in kenarlar})
    tutan, tutmayan = {}, []
    for ad in uc_adlari:
        n = norm(ad)
        if n in ix:
            tutan[ad] = ix[n]
        else:
            tutmayan.append(ad)
    print("kenar ucu olan NE ülkesi    : %d" % len(uc_adlari))
    print("  otomatik EŞLEŞEN          : %d" % len(tutan))
    print("  otomatik eşleşmeyen       : %d  🟡 (\"kimlik YOK\" DEĞİL — İngilizce ad)" %
          len(tutmayan))
    print("  eşleşen örnek: %s" % ", ".join(
        "%s→%s" % (a, tutan[a]) for a in list(tutan)[:6]))
    print("  eşleşmeyen ilk 20: %s" % ", ".join(tutmayan[:20]))

    with io.open(CIKTI, "w", encoding="utf-8") as f:
        json.dump({
            "_NOT": "ARAC-KENAR-KIMLIK-0907 · kenar boyutu ve uç kimlikleri",
            "kenar": len(kenarlar), "ham_tepe": ham_tepe,
            "yuvarlanmis_tepe": yuv_tepe,
            "govde_bayt": len(gov),
            "yuvarlama_cakisan_tepe": cakisan,
            "uc_ulke": len(uc_adlari),
            "otomatik_eslesen": tutan,
            "otomatik_eslesmeyen": tutmayan,
        }, f, ensure_ascii=False, indent=1)
    print("")
    print("→ %s yazıldı" % os.path.relpath(CIKTI, KOK))


if __name__ == "__main__":
    main()
