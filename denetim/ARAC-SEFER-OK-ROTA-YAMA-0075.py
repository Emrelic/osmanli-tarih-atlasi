# -*- coding: utf-8 -*-
"""SEFER-OK-0075 / H-0033 — deniz rotalarını kayıtlara `rota:[...]` olarak işler.

`ARAC-SEFER-OK-DENIZ-ROTA-0075.py`nin çıktısını (rota*.json) okur; her kaydın
`yol:` anahtarından HEMEN ÖNCE `rota:[[...],...],` ekler. `yol` (kaynaklı istasyonlar,
satır içi yorumlar, `kesinlik`) DOKUNULMAZ — rota ayrı bir alandır, çizim hattıdır.

  py denetim/ARAC-SEFER-OK-ROTA-YAMA-0075.py <rota.json> [--kok <dizin>] [--yaz]

--kok  : data/ dizininin bulunduğu kök (varsayılan: depo kökü). Sınamak için kopya ver.
--yaz  : yazar; yoksa YALNIZ raporlar (kuru koşu).
🔴 data/ donmuşken --yaz ile depo köküne KOŞULMAZ (CLAUDE.md §7, "dosya senin" bekler).
İdempotent: kayıtta zaten `rota:` varsa atlar.
"""
import glob, json, os, re, sys

KOK0 = os.path.join(os.path.dirname(os.path.abspath(__file__)), "..")

def biçim(rota):
    return "[" + ",".join("[%s,%s]" % (repr(p[0]), repr(p[1])) for p in rota) + "]"

def bul(kok, ad):
    """kaydın (dosya, ad konumu) — birden çok eşleşme HATA."""
    bulunan = []
    for f in sorted(glob.glob(os.path.join(kok, "data", "seferler_*.js")) + [os.path.join(kok, "data", "savaslar.js")]):
        if not os.path.exists(f):
            continue
        s = open(f, encoding="utf-8", newline="").read()
        for m in re.finditer(r'\bad\s*:\s*"' + re.escape(ad.replace('"', '\\"')) + r'"', s):
            bulunan.append((f, m.start(), m.end()))
    return bulunan

if __name__ == "__main__":
    rota = json.load(open(sys.argv[1], encoding="utf-8"))
    kok = sys.argv[sys.argv.index("--kok") + 1] if "--kok" in sys.argv else KOK0
    yaz = "--yaz" in sys.argv
    is_ = {}
    ozet = {"yamali": 0, "atlandi_ayni": 0, "atlandi_yeni_kayit": 0, "HATA": 0}
    for r in rota:
        if r.get("ns") == "YENI":
            ozet["atlandi_yeni_kayit"] += 1; continue
        if r["yol_yeni"] == r["yol_eski"]:
            ozet["atlandi_ayni"] += 1; continue
        b = bul(kok, r["ad"])
        if not b:
            print("HATA  %-60s eşleşme yok" % r["ad"][:60]); ozet["HATA"] += 1; continue
        # Aynı ad birden çok dosyada durabilir (mükerrer kayıt): HEPSİ yamalanır,
        # çünkü uygulama hangisini çizerse çizsin ok karadan geçmemeli.
        for f, i0, i1 in b:
            if (i0, i1) not in [(x[0], x[1]) for x in is_.get(f, [])]:
                is_.setdefault(f, []).append((i0, i1, r))
    for f, liste in is_.items():
        s = open(f, encoding="utf-8", newline="").read()
        for i0, i1, r in sorted(liste, key=lambda x: -x[0]):        # sondan başa: konumlar kaymaz
            m = re.compile(r'\byol\s*:').search(s, i1)
            sonraki_ad = re.compile(r'\bad\s*:\s*"').search(s, i1)
            if not m or (sonraki_ad and sonraki_ad.start() < m.start()) or m.start() - i1 > 4000:
                print("HATA  %-60s yol: bulunamadı" % r["ad"][:60]); ozet["HATA"] += 1; continue
            if re.search(r'\brota\s*:', s[i0:m.start()]):
                ozet["atlandi_ayni"] += 1; continue          # zaten yamalı (idempotent)
            s = s[:m.start()] + "rota:" + biçim(r["yol_yeni"]) + ", " + s[m.start():]
            ozet["yamali"] += 1
            print("YAMA  %-60s %s  %d -> %d nokta" % (r["ad"][:60], os.path.basename(f), len(r["yol_eski"]), len(r["yol_yeni"])))
        if yaz:
            open(f, "w", encoding="utf-8", newline="").write(s)
    print(ozet, "(YAZILDI)" if yaz else "(kuru koşu — dosya değişmedi)")
