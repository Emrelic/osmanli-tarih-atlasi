# -*- coding: utf-8 -*-
"""viabundus_olc.py — İNDİRİLEN VERİ ATLASA NE KADAR DEĞİYOR?

🔴 NİÇİN AYRI BİR ALET: *"indirildi"* demek *"işe yarar"* demek DEĞİLDİR.
Viabundus **1350-1650 kuzey/orta Avrupa**; atlasın çekirdeği Osmanlı
küresi. Kesişim ölçülmeden bu veri bir kazanç değil, 77 MB'lık bir
varsayımdır.

    py arac/viabundus_olc.py

────────────────────────────────────────────────────────────────────────
ÜÇ SORU — ve üçü ayrı, karıştırılırsa yanlış hüküm çıkar

  ① ATLAS PENCERESİNE kaç kenar/şehir düşüyor
     (pencere geniş: lon -25…146 · lat -11…82 — Avrupa'nın tamamı içinde)
  ② HALKA 2'ye kaç tanesi düşüyor
     Emre'nin kararı "halka halka" ⇒ asıl soru bu. Halka 2 = Osmanlı'nın
     birinci derece komşuları (Avusturya · Macaristan · Lehistan · Venedik…)
  ③ MEVCUT KORİDOR AĞIMIZLA örtüşüyor mu
     65 düğümümüz var; Viabundus'un düğümleri onlara ne kadar yakın?
     ÖRTÜŞME İYİ HABERDİR — iki bağımsız kaynağın aynı yeri göstermesi
     doğrulamadır. Ama örtüşme SIFIRSA ağlar birbirine BAĞLANMAZ.

⚠️ Ve zaman kesişimi AYRI bir sınır: Viabundus 1650'de bitiyor, atlas
1923'e gidiyor. Bu betik onu ÖLÇMÜYOR — kenar öznitelikleri CSV'de ve
açılmadı. Ölçülmeyen `ölçülmedi` diye yazılır.
"""
import io
import json
import math
import os
import sys

sys.stdout.reconfigure(encoding="utf-8", errors="replace")
KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(KOK, "arac"))
DIZIN = os.path.join(KOK, "veri-kaynak", "viabundus")

PENCERE = (-25.0, -11.0, 146.0, 82.0)
# HALKA 2 — ONCELIK.md §4 (KİLİTLİ). Kaba kutular; ölçüt DEĞİL, TARAMA.
HALKA2 = {
    "Avusturya":  (9.5, 46.0, 17.5, 49.1),
    "Macaristan": (16.0, 45.5, 23.0, 48.7),
    "Lehistan":   (14.0, 49.0, 24.5, 54.9),
    "Venedik":    (10.0, 44.5, 14.0, 46.7),
    "Ceneviz":    (7.5, 43.5, 10.0, 44.8),
}


def _kutuda(lon, lat, k):
    return k[0] <= lon <= k[2] and k[1] <= lat <= k[3]


def _koordinatlar(g):
    """GeoJSON geometrisinden ilk koordinatı ve nokta sayısını al."""
    c = g.get("coordinates")
    n = 0
    ilk = None
    yigin = [c]
    while yigin:
        x = yigin.pop()
        if isinstance(x, (int, float)):
            continue
        if x and isinstance(x[0], (int, float)):
            n += 1
            if ilk is None:
                ilk = (x[0], x[1])
            continue
        for y in (x or []):
            yigin.append(y)
    return ilk, n


def main():
    yol = os.path.join(DIZIN, "Viabundus-1.3-Edges.geojson")
    if not os.path.exists(yol):
        print("🔴 Viabundus verisi YOK — py arac/viabundus_indir.py")
        return 2
    print("=" * 72)
    print("VIABUNDUS × ATLAS — kesişim ölçümü")
    print("=" * 72)
    d = json.load(io.open(yol, encoding="utf-8"))
    ozn = d.get("features") or []
    print("kenar (edge): %d" % len(ozn))

    pencerede = 0
    halka = {a: 0 for a in HALKA2}
    noktalar = []
    for f in ozn:
        g = f.get("geometry") or {}
        ilk, n = _koordinatlar(g)
        if not ilk:
            continue
        lon, lat = ilk
        if _kutuda(lon, lat, PENCERE):
            pencerede += 1
            noktalar.append((lon, lat))
        for a, k in HALKA2.items():
            if _kutuda(lon, lat, k):
                halka[a] += 1

    print("\n① ATLAS PENCERESİNDE : %d  (%%%.1f)"
          % (pencerede, 100.0 * pencerede / len(ozn) if ozn else 0))
    print("\n② HALKA 2 DAĞILIMI (Emre: 'halka halka genişlesin')")
    for a, n in sorted(halka.items(), key=lambda x: -x[1]):
        print("   %-12s %6d kenar" % (a, n))
    print("   %-12s %6d" % ("HALKA 2 TOPLAM", sum(halka.values())))

    # ③ mevcut koridor ağımızla örtüşme
    import subprocess
    kyol = os.path.join(KOK, "data", "koridor.js")
    js = ("global.window={};eval(require('fs').readFileSync(%s,'utf8'));"
          "process.stdout.write(JSON.stringify(window.KORIDOR_DUGUM||[]));"
          % json.dumps(kyol))
    try:
        c = subprocess.run(["node", "-e", js], capture_output=True,
                           encoding="utf-8", timeout=60)
        bizim = [x for x in json.loads(c.stdout) if x.get("lat") is not None]
    except Exception as e:
        print("\n③ ÖLÇÜLEMEDİ: %s" % str(e)[:60])
        return 1
    print("\n③ BİZİM AĞIMIZLA ÖRTÜŞME — %d yere oturmuş düğümümüz var" % len(bizim))
    yakin = 0
    en = []
    for b in bizim:
        d_min = min((math.hypot((lo - b["lon"]) * 111.32 * math.cos(
            math.radians(b["lat"])), (la - b["lat"]) * 110.574)
            for lo, la in noktalar), default=None)
        if d_min is None:
            continue
        if d_min < 25:
            yakin += 1
        en.append((d_min, b.get("ad")))
    en.sort()
    print("   25 km içinde Viabundus kenarı olan düğümümüz: %d / %d"
          % (yakin, len(bizim)))
    print("   en yakın beş:")
    for dk, ad in en[:5]:
        print("      %-24s %7.1f km" % ((ad or "?")[:24], dk))
    print("\n" + "=" * 72)
    print("🔴 ÖLÇÜLMEYENLER — açıkça")
    print("   · ZAMAN kesişimi: Viabundus 1350-1650, atlas 1281-1923.")
    print("     Kenar öznitelikleri CSV'de ve AÇILMADI ⇒ hangi kenarın")
    print("     hangi tarihte açık olduğu BİLİNMİYOR.")
    print("   · Kenarların bizim şema ile eşleşmesi (kanat · kol · saat)")
    print("   · Şehir sınırları dosyası (Town_Outlines) hiç okunmadı")
    return 0


if __name__ == "__main__":
    sys.exit(main())
