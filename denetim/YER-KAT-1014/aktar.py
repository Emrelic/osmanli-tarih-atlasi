# -*- coding: utf-8 -*-
"""YER-KAT-1014 — 1900 kademe tanıklarını data/yer_kat.js'e aktarır.

Girdi : denetim/SEHIR-1900-KOORDINAT-1013/LISTE-KOORD.tsv
Çıktı : data/yer_kat.js  (window.YER_KAT) · denetim/YER-KAT-1014/aktarim.tsv (her satırın hükmü)

Kademe (Emre, 14 Ekim 2026): 1 devlet başkenti · 2 eyalet/vilayet merkezi ·
3 sancak/liva (bugün il) merkezi · 4 kaza (bugün ilçe) merkezi. Kademe döneme göre
değişir ⇒ yerleşime sabit sayı yazılmaz; TANIK yazılır: "şu tarihte, şu kaynağa göre
şu kademe". İki tanık arası doldurulmaz (süreklilik varsayılmaz).

Alınan satır: dogrulama=kaynakli VE eslesme=atlasta (≤3 km) VE kaynak güvensiz değil.
Kullanım: py -I denetim/YER-KAT-1014/aktar.py
"""
import csv
import io
import json
import os
import re
import sys

KOK = os.path.normpath(os.path.join(os.path.dirname(os.path.abspath(__file__)), "..", ".."))
GIRDI = os.path.join(KOK, "denetim", "SEHIR-1900-KOORDINAT-1013", "LISTE-KOORD.tsv")
CIKTI = os.path.join(KOK, "data", "yer_kat.js")
HUKUM = os.path.join(KOK, "denetim", "YER-KAT-1014", "aktarim.tsv")

# Emre kuralı (14 Ekim): Vikipedi, kişisel/hobi siteleri dayanak olamaz.
GUVENSIZ = re.compile(r"wikipedia|nlwiki|statoids|\bSTAT\b|territorial\.de|^genel|^iskelet",
                      re.IGNORECASE)


def main():
    with open(GIRDI, encoding="utf-8") as f:
        satirlar = list(csv.DictReader(f, delimiter="\t"))
    hukum = []
    yer = {}
    for r in satirlar:
        neden = ""
        if r["dogrulama"] != "kaynakli":
            neden = "dogrulama=" + r["dogrulama"]
        elif r["eslesme"] != "atlasta":
            neden = "eslesme=" + r["eslesme"]
        elif GUVENSIZ.search(r["kaynak"] or ""):
            neden = "guvensiz-kaynak"
        elif not r["atlas_en_yakin"]:
            neden = "atlas-adi-yok"
        hukum.append([r["bolge"], r["kat"], r["ad_1900"], r["atlas_en_yakin"], r["atlas_km"],
                      r["kaynak"], "ALINDI" if not neden else "alinmadi:" + neden])
        if neden:
            continue
        ad = r["atlas_en_yakin"]
        # Atlas adı tekil değildir (iki "Kuba") ⇒ ad + konum; tüketici ad ve ≤3 km ile eşler
        k = yer.setdefault(ad, {"ad": ad, "lat": round(float(r["lat"]), 4),
                                "lon": round(float(r["lon"]), 4), "tanik": []})
        birim = (r["birim_turu"] + " " + r["birim_adi"]).strip()
        tanik = {"t": "1900-01-01", "k": int(r["kat"]), "birim": birim,
                 "ad_kaynakta": r["ad_1900"], "kaynak": r["kaynak"].strip(),
                 # Liste "1 Ocak 1900 durumu"nu 1891-1903 kaynaklarından derledi;
                 # t kaynağın yılı DEĞİL, listenin hedef günüdür (VERI-YAPISI yer_kat.js)
                 "kesinlik": "liste-1900",
                 "dayanak": "denetim/SEHIR-1900-LISTE-1013/LISTE.tsv"}
        # Aynı yerleşime aynı tarihte iki tanık: en yüksek kademe (küçük sayı) kalır
        eski = [t for t in k["tanik"] if t["t"] == tanik["t"]]
        if eski:
            if tanik["k"] < eski[0]["k"]:
                k["tanik"].remove(eski[0])
                k["tanik"].append(tanik)
            continue
        k["tanik"].append(tanik)

    kayitlar = sorted(yer.values(), key=lambda x: x["ad"])
    out = io.StringIO()
    out.write("// -*- coding: utf-8 -*-\n")
    out.write("// YERLEŞİM KADEMESİ TANIKLARI — window.YER_KAT (YER-KAT-1014, 14 Ekim 2026)\n")
    out.write("// Şema: VERI-YAPISI.md 'yer_kat.js'. ÜRETİLDİ: denetim/YER-KAT-1014/aktar.py — elle\n")
    out.write("// ekleme serbest (tanik[] dizisine), ama bu betik yeniden koşarsa 1900 tanıkları yeniden yazılır.\n")
    out.write("// Motor ve site bu dosyayı henüz OKUMAZ (silsile halka 4 ölçümü okur).\n")
    out.write("window.YER_KAT = [\n")
    for k in kayitlar:
        out.write(json.dumps(k, ensure_ascii=False) + ",\n")
    out.write("];\n")
    with open(CIKTI, "w", encoding="utf-8", newline="\n") as f:
        f.write(out.getvalue())
    with open(HUKUM, "w", encoding="utf-8", newline="\n") as f:
        w = csv.writer(f, delimiter="\t", lineterminator="\n")
        w.writerow(["bolge", "kat", "ad_1900", "atlas_ad", "atlas_km", "kaynak", "hukum"])
        w.writerows(hukum)

    say = {}
    for h in hukum:
        say[h[-1]] = say.get(h[-1], 0) + 1
    for k, v in sorted(say.items(), key=lambda x: -x[1]):
        print(f"{v:6d}  {k}")
    kat = {}
    for k in kayitlar:
        for t in k["tanik"]:
            kat[t["k"]] = kat.get(t["k"], 0) + 1
    print("yerleşim:", len(kayitlar), "· kademe dağılımı:", dict(sorted(kat.items())))
    return 0


if __name__ == "__main__":
    sys.exit(main())
