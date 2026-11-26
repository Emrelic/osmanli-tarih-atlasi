# -*- coding: utf-8 -*-
"""DEGISMEZ2-KAPAT (30 Eyl 2026) — denetle.py'nin YALNIZ 2s ölçümü.

denetle.main()'deki 2s zincirini birebir çağırır:
  degismez2(Y_cekirdek, O, ("s",), yer_sarti=True) → kapsam_disi → yil_temsili_ayir
Ek: --ile  data/kronoloji_cok_senkron_0930.js'i O'ya KATAR (denetle.py bugün
    kronoloji_cok_* okumaz — dosya bağlanınca ne olacağını ölçer).
Çıktı: denetim/DEGISMEZ2-KAPAT-0930-acik.json + grup listesi (gün × yeni sahip).
"""
import sys, os, json, io
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8")
KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(KOK, "arac"))
import denetle as D

ile = "--ile" in sys.argv
Y = D.yerlesimleri_yukle()
O = D.olaylari_yukle()
if ile:
    yol = os.path.join(KOK, "data", "kronoloji_cok_senkron_0930.js")
    ek = D.oku_pencere(yol, "KRONOLOJI_COK_SENKRON_0930")
    print("ek madde:", len(ek))
    O = O + ek
Yc = [y for y in Y if y.get("_kaynak") not in D.KUYRUK_DOSYALARI]
kir, acik_ham = D.degismez2(Yc, O, ("s",), yer_sarti=True)
ici, disi = D.kapsam_disi(Y, acik_ham)
borc, acik = D.yil_temsili_ayir(ici)
print(f"2s: {len(kir)} kirilma · {len(acik)} ACIK (tavan {D.BEKLENEN_ACIK_S}) · "
      f"{len(disi)} KAPSAM DISI · {len(borc)} YIL-TEMSILI BORC")

ix = {y["ad"]: y for y in Y}
satirlar = []
for d, tip, _, baslik, fark in acik:
    k = kir[d]
    eksik = k.get("eksik") or sorted(k["ad"])
    for ad in eksik:
        s = k["sahip"].get(ad, {})
        y = ix.get(ad, {})
        satirlar.append({"gun": d, "yer": ad, "eski": s.get("eski", ""),
                         "yeni": s.get("yeni", ""), "m": y.get("m", ""),
                         "lat": y.get("lat"), "lon": y.get("lon"),
                         "kaynak_dosya": y.get("_kaynak", "")})
json.dump(satirlar, open(os.path.join(KOK, "denetim",
          "DEGISMEZ2-KAPAT-0930-acik.json"), "w", encoding="utf-8"),
          ensure_ascii=False, indent=1)
gr = {}
for s in satirlar:
    gr.setdefault((s["gun"], s["eski"], s["yeni"]), []).append(s["yer"])
print(f"acik tarih {len(acik)} · acik yerlesim-satiri {len(satirlar)} · grup {len(gr)}")
for (g, e, n), adlar in sorted(gr.items(), key=lambda x: (-len(x[1]), x[0])):
    print(f"{g}  {e or '-'} -> {n or '-'}  [{len(adlar)}]  {', '.join(adlar[:6])}")
