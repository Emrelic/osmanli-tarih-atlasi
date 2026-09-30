# -*- coding: utf-8 -*-
"""KRONO-BAGLAMA KAPISI — her `KRONOLOJI_*` globali bir künyeye bağlanıyor mu?

NİÇİN (29 Eylül 2026, canlı konsolda ölçüldü): 15 dosya / ~2.092 madde
yüklü ama HİÇBİR künyeye bağlı değildi (sitede erişilemez), 27 künyenin
kendi 222 maddesi dosyayla EZİLİYORDU. `denetle_yayin.py` yalnız `KRONOLOJI_`
önekine bakıyordu ⇒ kusur sessizdi ("denetim var ≠ o soruyu soruyor").

NASIL: `app.js`in iki bindiricisi KOPYALANMAZ, ÇALIŞTIRILIR
(`ARAC-KRONO-BAGLAMA-0929-KAPI.js`, node + vm). Evren = `index.html`in
`js/app.js`TEN ÖNCE yüklediği yerel betikler (bindiriciler app.js yüklenirken
koşar; sonrakiler onları görmez).

KİPLER
    (varsayılan)   yayındaki paketler (data/paket_*.js) — sitenin gördüğü
    --kaynak       paketler `data/paket_kunye.json` ile KAYNAK dosyalarına
                   açılır — paket yenilenmeden önce veri düzeltmesini ölçer
    --ekle <yol>   (tekrarlanabilir) evrene fazladan dosya ekle (sınav için)
    --json <yol>   ham sonucu yaz
ÇIKIŞ   0 temiz · 1 eşlenmeyen ya da ezilen var · 2 ölçülemedi
🔴 ölçülemedi asla temiz sayılmaz.
"""
import json
import os
import re
import subprocess
import sys
import tempfile

sys.stdout.reconfigure(encoding="utf-8", errors="replace")
KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
JS = os.path.join(KOK, "denetim", "ARAC-KRONO-BAGLAMA-0929-KAPI.js")


def evren(kaynak_kipi, ekler):
    html = open(os.path.join(KOK, "index.html"), encoding="utf-8").read()
    srcler = [s.split("?")[0] for s in re.findall(r'<script[^>]*\ssrc="([^"]+)"', html)]
    if "js/app.js" not in srcler:
        raise SystemExit("ÖLÇÜLEMEDİ: index.html'de js/app.js yok")
    once = [s for s in srcler[:srcler.index("js/app.js")]
            if not s.startswith("http") and s.startswith("data/")]
    if kaynak_kipi:
        kunye = json.load(open(os.path.join(KOK, "data", "paket_kunye.json"), encoding="utf-8"))
        acil = {p["paket"]: [k["yol"] for k in p["kaynak"]] for p in kunye["paketler"]}
        yeni = []
        for s in once:
            yeni.extend(acil.get(s, [s]))
        once = yeni
    return once + list(ekler)


def main():
    a = sys.argv[1:]
    kaynak_kipi = "--kaynak" in a
    ekler, json_yol = [], None
    for i, x in enumerate(a):
        if x == "--ekle": ekler.append(a[i + 1])
        if x == "--json": json_yol = a[i + 1]
    dosyalar = evren(kaynak_kipi, ekler)
    with tempfile.NamedTemporaryFile("w", suffix=".json", delete=False, encoding="utf-8") as f:
        json.dump({"kok": KOK, "dosyalar": dosyalar, "app": "js/app.js"}, f)
        girdi = f.name
    try:
        p = subprocess.run(["node", JS, girdi], capture_output=True, text=True, encoding="utf-8")
    finally:
        os.unlink(girdi)
    try:
        r = json.loads(p.stdout)
    except Exception:
        print("ÖLÇÜLEMEDİ: node çıktısı okunamadı\n", p.stderr[:2000]); sys.exit(2)
    if "hata" in r:
        print("ÖLÇÜLEMEDİ:", r["hata"]); sys.exit(2)
    if json_yol:
        json.dump(r, open(json_yol, "w", encoding="utf-8"), ensure_ascii=False, indent=1)

    kip = "KAYNAK" if kaynak_kipi else "YAYIN (paket)"
    print(f"KRONO-BAĞLAMA KAPISI · evren {kip}: {r['dosya_sayisi']} dosya · "
          f"{r['kunye']} künye · {r['tek_anahtar']} tek-künyeli KRONOLOJI_* · "
          f"{r['cok_anahtar']} çok-künyeli (SINIR/COK)")
    if r["yukleme_hatasi"]:
        print(f"  ⚠️ yükleme hatası {len(r['yukleme_hatasi'])}:")
        for h in r["yukleme_hatasi"][:10]: print("    ", h)
    if r["kunye"] == 0 or r["tek_anahtar"] + r["cok_anahtar"] == 0:
        print("ÖLÇÜLEMEDİ: künye ya da KRONOLOJI_* yüklenmedi"); sys.exit(2)
    print(f"  bağlı       {len(r['bagli'])} dosya · {sum(b['madde'] for b in r['bagli'])} madde")
    e = sorted(r["eslenmeyen"], key=lambda x: -x["madde"])
    print(f"  EŞLENMEYEN  {len(e)} dosya · {sum(x['madde'] for x in e)} madde — sitede ERİŞİLEMEZ")
    for x in e: print(f"     {x['anahtar']:34s} {x['madde']:4d}")
    z = sorted(r["ezilen"], key=lambda x: -x["kayip"])
    print(f"  EZİLEN      {len(z)} künye · {sum(x['kayip'] for x in z)} künye maddesi ekranda YOK — "
          f"{sum(x['karsiliksiz'] for x in z)} KARŞILIKSIZ (aynı t'de dosya maddesi de yok) · "
          f"{sum(x['kayip'] - x['karsiliksiz'] for x in z)} aynı t'de dosya maddesiyle yer değişti")
    for x in z: print(f"     {x['id']:24s} künye {x['kunye_madde']:3d} → dosya {x['dosya_madde']:3d} · "
                      f"kayıp {x['kayip']:3d} · karşılıksız {x['karsiliksiz']:3d}  ({x['anahtar']})")
    for tur, s in r["app_konsol"]:
        if tur == "warn" and "künyesi olmayan taraf" in s:
            print("  ⚪ bilgi (çok-künyeli yolun kendi uyarısı):", s[len("Atlas: "):][:400])
    sys.exit(1 if (e or z) else 0)


if __name__ == "__main__":
    main()
