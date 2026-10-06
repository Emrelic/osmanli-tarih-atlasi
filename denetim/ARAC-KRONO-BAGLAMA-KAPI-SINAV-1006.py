# -*- coding: utf-8 -*-
"""ARAC-KRONO-BAGLAMA-KAPI-SINAV-1006 — BAĞLAMA kapısının madde başına hükmü İKİ YÖNDE.

Eski kapı dosyanın İLK maddesine bakıyordu (`dizi[0]`); W37 yönlendirmesinden
sonra iki yönde yanlıştı (`denetim/ODAK-KAPI-KORLUK-1006.md` §4). Bu sınav
künyesi olmayan yapay `KRONOLOJI_ZZ_*` dosyalarını `--ekle` ile evrene katar
(app.js onları `KRONOLOJI_COK_YOLU`na yönlendirir) ve hükmü sorar:

    S1 iki madde, ikisi taraflı          → YÖNLENDİRİLDİ 2/2
    S2 ilk madde TARAFSIZ, ikinci taraflı → YÖNLENDİRİLDİ 1/2   (eski: EŞLENMEYEN 2)
    S3 ilk madde taraflı, ikinci TARAFSIZ → YÖNLENDİRİLDİ 1/2   (eski: bağlı 2 — inmeyen GÖRÜNMEZDİ)
    S4 hiçbiri taraflı değil              → EŞLENMEYEN 2

Yapay dosyalar GEÇİCİ dizine yazılır; depoya yazılmaz. `data/` okunur.
    py denetim/ARAC-KRONO-BAGLAMA-KAPI-SINAV-1006.py
Çıkış: 0 hepsi tuttu · 1 tutmadı · 2 ölçülemedi.
"""
import json
import os
import shutil
import subprocess
import sys
import tempfile

sys.stdout.reconfigure(encoding="utf-8", errors="replace")
KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
KAPI = os.path.join(KOK, "denetim", "ARAC-KRONO-BAGLAMA-0929-KAPI.py")
TARAF = "rusya"          # künye penceresi 1547–1917; 1600 içinde

VAKALAR = {
    "KRONOLOJI_ZZ_S1": ([True, True], ("YON", 2, 0)),
    "KRONOLOJI_ZZ_S2": ([False, True], ("YON", 1, 1)),
    "KRONOLOJI_ZZ_S3": ([True, False], ("YON", 1, 1)),
    "KRONOLOJI_ZZ_S4": ([False, False], ("ESL", 0, 2)),
}


def main():
    gd = tempfile.mkdtemp(prefix="baglama-sinav-")
    try:
        ekler = []
        for ad, (taraflar, _) in VAKALAR.items():
            dizi = []
            for i, tr in enumerate(taraflar):
                m = {"t": "1600-0%d-01" % (i + 1), "b": "BAGLAMA sinav %s madde %d" % (ad, i + 1)}
                if tr:
                    m["taraflar"] = [TARAF]
                dizi.append(m)
            yol = os.path.join(gd, ad.lower() + ".js")
            open(yol, "w", encoding="utf-8").write("window.%s = %s;\n" % (ad, json.dumps(dizi, ensure_ascii=False)))
            ekler += ["--ekle", yol]
        js = os.path.join(gd, "sonuc.json")
        p = subprocess.run([sys.executable, KAPI, "--json", js] + ekler, capture_output=True,
                           text=True, encoding="utf-8", errors="replace")
        if not os.path.exists(js):
            print("🔴 ÖLÇÜLEMEDİ — kapı JSON yazmadı:\n" + (p.stdout + p.stderr)[-1500:])
            return 2
        r = json.load(open(js, encoding="utf-8"))
        if r.get("yon_listesi") is None:
            print("🔴 ÖLÇÜLEMEDİ — app.js'te KRONOLOJI_COK_YOLU yok")
            return 2
        yon = {x["anahtar"]: x for x in r["yonlendirilen"]}
        esl = {x["anahtar"]: x for x in r["eslenmeyen"]}
        bag = {x["anahtar"] for x in r["bagli"]}
        tuttu = tutmadi = 0
        for ad, (_, (kova, inen, inmeyen)) in VAKALAR.items():
            if kova == "YON":
                x = yon.get(ad)
                ok = bool(x) and x["inen"] == inen and x["inmeyen"] == inmeyen and ad not in esl and ad not in bag
                gor = ("YÖNLENDİRİLDİ %d/%d inmeyen %d" % (x["inen"], x["madde"], x["inmeyen"])) if x else \
                      ("EŞLENMEYEN" if ad in esl else ("BAĞLI" if ad in bag else "YOK"))
            else:
                ok = ad in esl and ad not in yon and ad not in bag
                gor = "EŞLENMEYEN" if ad in esl else ("YÖNLENDİRİLDİ" if ad in yon else "?")
            tuttu += ok
            tutmadi += not ok
            print("  %s %-18s beklenen %-3s %d/%d · görülen %s" % (
                "✓" if ok else "🔴 TUTMADI", ad, kova, inen, inen + inmeyen, gor))
        print("  çıkış kodu (S2/S3/S4 inmeyen var ⇒ 1 beklenir): %d" % p.returncode)
        if p.returncode != 1:
            tutmadi += 1
            print("  🔴 TUTMADI — inmeyen madde varken kapı 1 vermedi")
        else:
            tuttu += 1
        print("SONUÇ: tuttu %d · TUTMADI %d" % (tuttu, tutmadi))
        return 1 if tutmadi else 0
    finally:
        shutil.rmtree(gd, ignore_errors=True)


if __name__ == "__main__":
    raise SystemExit(main())
