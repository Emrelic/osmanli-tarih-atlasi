"""zincir_dogrula.py [zincir.json] — YER-1104 sahiplik zincirlerini KASA'ya vermeden önce sınar (UMIT, 4 Kasım 2026).
Zincir biçimi (yerleşim dosyalarının alanlarıyla aynı):
  {"<ad>": {"lat":…, "lon":…, "kur": null | "YYYY-MM-DD", "bit": null | "YYYY-MM-DD",
            "zincir": [{"alan":"s","d":"<künye id>","f":…,"t":…,"kaynak":…},
                       {"alan":"d","f":…,"t":…,"kaynak":…},                       # doğrudan Osmanlı
                       {"alan":"v","k":"<tâbi adı>","f":…,"t":…,"kaynak":…},     # tâbi / dolaylı
                       {"alan":"isg","d":"<künye id>","f":…,"t":…,"kaynak":…}]}}  # işgal — sahiplik değişmez, sürekliliğe girmez
Denetimler: (1) her dönemde kaynak var · (2) f < t, sıfır uzunluk yok · (3) dönemler boşluksuz ve çakışmasız
(t == sonrakinin f'si) · (4) s: kimliği devletler.js'te var ve dönem künyenin f/t'si içinde · (5) zincir kur'dan
(yoksa 1281-01-01'den ya da ilk dönemden) başlar, bit'e (yoksa 2000-12-31'e) kadar sürer · (6) kur öncesi dönem yok.
Çıkış: 0 temiz · 1 ihlal · 2 ihlal yok ama zinciri boş (KURULAMADI) nokta var — 2 temiz değildir."""
import json, os, sys, subprocess

sys.stdout.reconfigure(encoding="utf-8")
BURA = os.path.dirname(os.path.abspath(__file__))
KOK = os.path.dirname(os.path.dirname(BURA))
UFUK = "2000-12-31"


def kunyeler():
    yol = os.path.join(KOK, "data", "devletler.js")
    js = ("global.window={};eval(require('fs').readFileSync(%s,'utf8'));"
          "process.stdout.write(JSON.stringify((window.DEVLETLER||[]).map(d=>[d.id,d.f||null,d.t||null])));" % json.dumps(yol))
    c = subprocess.run(["node", "-e", js], capture_output=True, encoding="utf-8", timeout=120)
    return {i: (f, t) for i, f, t in json.loads(c.stdout)}


def anahtar(g):
    """'-0611-01-01' ve '1551-10-01' karşılaştırılabilir olsun."""
    neg = g.startswith("-")
    y, a, gun = (g[1:] if neg else g).split("-")
    return (-int(y) if neg else int(y), int(a), int(gun))


def main():
    yol = sys.argv[1] if len(sys.argv) > 1 else os.path.join(BURA, "zincir.json")
    Z = json.load(open(yol, encoding="utf-8"))
    K = kunyeler()
    ihlal = 0
    kurulamadi = 0
    for ad, kayit in Z.items():
        if ad.startswith("_"):
            continue
        if not kayit.get("zincir"):
            # boş zincir temiz DEĞİLDİR — KASA bu noktayı ekleyemez
            print("⏸ " + ad + ": KURULAMADI — " + (kayit.get("not") or "")[:160])
            kurulamadi += 1
            continue
        hata = []
        # isg: sahipliği DEĞİŞTİRMEZ, üstüne biner (VERI-YAPISI) — zincir sürekliliğine girmez, ayrı sınanır
        isg = [p for p in kayit["zincir"] if p.get("alan") == "isg"]
        z = [p for p in kayit["zincir"] if p.get("alan") != "isg"]
        for p in isg:
            if not (p.get("kaynak") or "").strip():
                hata.append("isg %s kaynaksız" % p.get("f"))
            if p.get("d") not in K:
                hata.append("isg %s künye yok: %s" % (p.get("f"), p.get("d")))
            if anahtar(p["f"]) >= anahtar(p["t"]):
                hata.append("isg %s ters ya da sıfır uzunluk" % p.get("f"))
            if z and (anahtar(p["f"]) < anahtar(z[0]["f"]) or anahtar(p["t"]) > anahtar(z[-1]["t"])):
                hata.append("isg %s → %s zincir dışında" % (p["f"], p["t"]))
        for i, p in enumerate(z):
            if not (p.get("kaynak") or "").strip():
                hata.append("dönem %d kaynaksız" % i)
            if anahtar(p["f"]) >= anahtar(p["t"]):
                hata.append("dönem %d ters ya da sıfır uzunluk (%s → %s)" % (i, p["f"], p["t"]))
            if p["alan"] == "s" and p.get("d") == "__BOSLUK__":
                # beyanlı boşluk (haritada delik): künyesi yok, kaynağı ve beyanı zorunlu
                if "BOŞLUK" not in (p.get("kaynak") or "").upper().replace("BOSLUK", "BOŞLUK"):
                    hata.append("dönem %d __BOSLUK__ beyansız" % i)
            elif p["alan"] == "s":
                if p.get("d") not in K:
                    hata.append("dönem %d künye yok: %s" % (i, p.get("d")))
                else:
                    kf, kt = K[p["d"]]
                    if kf and anahtar(p["f"]) < anahtar(kf):
                        hata.append("dönem %d künye öncesi: %s f %s < künye f %s" % (i, p["d"], p["f"], kf))
                    if kt and anahtar(p["t"]) > anahtar(kt):
                        hata.append("dönem %d künye sonrası: %s t %s > künye t %s" % (i, p["d"], p["t"], kt))
            elif p["alan"] == "v" and not p.get("k"):
                hata.append("dönem %d v: k (tâbi adı) yok" % i)
            elif p["alan"] not in ("s", "d", "v"):
                hata.append("dönem %d bilinmeyen alan %s" % (i, p["alan"]))
            if i and z[i - 1]["t"] != p["f"]:
                hata.append("dönem %d-%d arası %s (%s ≠ %s)" % (i - 1, i, "boşluk" if anahtar(z[i - 1]["t"]) < anahtar(p["f"]) else "çakışma", z[i - 1]["t"], p["f"]))
        bas = kayit.get("kur")
        if bas and z and anahtar(z[0]["f"]) < anahtar(bas):
            hata.append("kur öncesi dönem: ilk f %s < kur %s" % (z[0]["f"], bas))
        if bas and z and z[0]["f"] != bas:
            hata.append("zincir kur'dan başlamıyor: %s ≠ %s" % (z[0]["f"], bas))
        son = kayit.get("bit") or UFUK
        if z and z[-1]["t"] != son:
            hata.append("zincir %s'e kadar sürmüyor: son t %s" % (son, z[-1]["t"]))
        print(("✅ " if not hata else "❌ ") + ad + ("" if not hata else ": " + " · ".join(hata)))
        ihlal += bool(hata)
    print("toplam %d nokta, %d ihlalli, %d kurulamadı" % (sum(1 for a in Z if not a.startswith("_")), ihlal, kurulamadi))
    sys.exit(1 if ihlal else (2 if kurulamadi else 0))


main()
