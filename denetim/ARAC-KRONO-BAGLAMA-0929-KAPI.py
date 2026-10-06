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
    --yuklem <yol> temsil yüklemini bu dosyadan kes (varsayılan js/app.js) —
                   YALNIZ SINAV: yamasız app.js'in davranışını yamalının yüklemiyle sınıflar
EZİLEN ≠ DÜŞEN (1006b, UMIT-W26): ekrandan düşen künye maddesi, dosyada
    `kronoTemsilEdiliyor` (app.js'teki TEK tanım, kesilip çağrılır) ile temsil
    ediliyorsa MEŞRU DÜŞÜŞtür — basılır, ihlal DEĞİLDİR; edilmiyorsa KAYIPtır — ihlal.
BAĞLI / YÖNLENDİRİLDİ / EŞLENMEYEN (ODAK-KAPI-KIMLIK-1006 ④): hüküm madde
    başına, NESNE KİMLİĞİYLE. Eski sezgi dosyanın İLK maddesine bakıyordu ve
    W37 yönlendirmesinden sonra iki yönde yanlıştı ("1.142 erişilemez", gerçek 225).
    `--ayrinti`: inmeyen maddelerin hepsini bas (varsayılan dosya başına 3).
ÇIKIŞ   0 temiz · 1 eşlenmeyen dosya, inmeyen madde ya da KAYIP var · 2 ölçülemedi
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
    ekler, json_yol, yuklem = [], None, None
    for i, x in enumerate(a):
        if x == "--ekle": ekler.append(a[i + 1])
        if x == "--json": json_yol = a[i + 1]
        if x == "--yuklem": yuklem = a[i + 1]
    dosyalar = evren(kaynak_kipi, ekler)
    with tempfile.NamedTemporaryFile("w", suffix=".json", delete=False, encoding="utf-8") as f:
        g = {"kok": KOK, "dosyalar": dosyalar, "app": "js/app.js"}
        if yuklem: g["yuklem"] = os.path.abspath(yuklem)
        json.dump(g, f)
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
    ayrinti = "--ayrinti" in a
    bd = {}
    for b in r["bagli"]:
        bd[b["anahtar"]] = b
    print(f"  BAĞLI          {len(bd)} dosya · {sum(b['inen'] for b in bd.values())}/"
          f"{sum(b['madde'] for b in bd.values())} madde indi (tek-künye bindiricisi)")
    for b in bd.values():
        if b["inmeyen"]:
            print(f"     ⓘ {b['anahtar']:32s} {b['inen']}/{b['madde']} — {b['inmeyen']} madde künyede "
                  f"YOK (bindiricinin t+b ikiz süzgeci olabilir; bilgi)")
    if r.get("yon_listesi") is None:
        print("  ⚠️ app.js'te `KRONOLOJI_COK_YOLU` yok — yönlendirme kovası ölçülemedi "
              "(eski app.js?); YÖNLENDİRİLDİ boş görünür")
    y = sorted(r["yonlendirilen"], key=lambda x: -x["inmeyen"])
    inmeyen = sum(x["inmeyen"] for x in y)
    print(f"  YÖNLENDİRİLDİ  {len(y)} dosya · {sum(x['inen'] for x in y)}/{sum(x['madde'] for x in y)} "
          f"madde indi (çok-taraflı yol) · {inmeyen} madde İNMEDİ — sitede ERİŞİLEMEZ")
    for x in y:
        print(f"     {x['anahtar']:34s} {x['inen']:4d}/{x['madde']:<4d} · inmeyen {x['inmeyen']}")
        for m in (x["inmeyen_madde"] if ayrinti else x["inmeyen_madde"][:3]):
            print(f"         ✗ {m['t']} {str(m['b'])[:70]}")
        if not ayrinti and x["inmeyen"] > 3:
            print(f"         … {x['inmeyen'] - 3} daha (`--ayrinti`)")
    e = sorted(r["eslenmeyen"], key=lambda x: -x["madde"])
    print(f"  EŞLENMEYEN     {len(e)} dosya · {sum(x['madde'] for x in e)} madde — 0 madde indi, "
          f"sitede ERİŞİLEMEZ")
    for x in e: print(f"     {x['anahtar']:34s} {x['madde']:4d}")
    z = sorted(r["ezilen"], key=lambda x: (-x["kayip"], -x["temsil"]))
    kayip = sum(x["kayip"] for x in z)
    temsil = sum(x["temsil"] for x in z)
    if r.get("yuklem"): print(f"  ⚠️ SINAV KİPİ — temsil yüklemi {r['yuklem']} dosyasından")
    print(f"  ekrandan düşen künye maddesi: {kayip + temsil} ({len(z)} künye)")
    print(f"  EZİLEN (kayıp): {kayip}  ← İHLAL — dosyada temsil EDİLMİYOR, sitede GÖRÜNMEZ")
    print(f"  TEMSİL EDİLİYOR (meşru düşüş): {temsil}  ← kusur değil (dosyada aynı gün ya da ±30 gün)")
    for x in z: print(f"     {x['id']:24s} künye {x['kunye_madde']:3d} → dosya {x['dosya_madde']:3d} · "
                      f"KAYIP {x['kayip']:3d} · temsil {x['temsil']:3d}  ({x['anahtar']})")
    for x in z:
        for m in x["kayip_madde"]: print(f"       ✗ {x['id']} {m['t']} {m['b'][:70]}")
    for tur, s in r["app_konsol"]:
        if tur == "warn" and "künyesi olmayan taraf" in s:
            print("  ⚪ bilgi (çok-künyeli yolun kendi uyarısı):", s[len("Atlas: "):][:400])
    sys.exit(1 if (e or inmeyen or kayip) else 0)


if __name__ == "__main__":
    main()
