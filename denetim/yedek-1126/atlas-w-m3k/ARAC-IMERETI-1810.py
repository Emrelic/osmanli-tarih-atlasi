# -*- coding: utf-8 -*-
"""ISGAL-1806 / H-0012 — İmereti'nin ilhakı (20 Şubat 1810) Osmanlı'nın
Soçi-Anapa-Çerkezistan KARA BAĞLANTISINI kesti mi?

Soru sayıya şöyle çevrildi: Osmanlı'nın Anadolu gövdesi (Trabzon/Batum) ile
kuzeybatı Kafkas karakolları (Soğucak/Anapa/Soçi) arasında, verideki
yerleşimler üzerinden KESİNTİSİZ bir Osmanlı(-veya-tâbi) zinciri var mı?
Zincir: iki nokta arası <= ESIK km ise komşu sayılır; genişlik-öncelikli
arama ile Batum'dan Anapa'ya yol aranır. Üç kesitte ölçülür:
  1809-12-31 (ilhaktan önce) · 1810-02-20 (ilhak günü) · 1810-07-15 (Sohum)

Çıktı: denetim/OLCUM-IMERETI-1810.json
"""
import json
import math
import os
import sys

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(KOK, "arac"))
sys.stdout.reconfigure(encoding="utf-8")
import girdi  # noqa: E402

KUTU = dict(lat0=39.5, lat1=46.5, lon0=35.0, lon1=47.5)
ESIK_KM = 160.0                       # komşuluk tavanı (ölçüm parametresi)
KESITLER = ["1809-12-31", "1810-02-20", "1810-07-15", "1812-05-28"]
BAS_ADAY = ["Batum", "Trabzon", "Rize", "Gönye", "Ahıska", "Erzurum"]
HEDEF_ADAY = ["Anapa", "Soğucak (Sucuk Kale)", "Soçi", "Gelincik (Gelendjik)",
              "Taman", "Sohum", "Sohum (Suhumi)"]


def gunde(p, g):
    return (p.get("f") or "0000-01-01") <= g <= (p.get("t") or "9999-12-31")


def durum(y, g):
    """(kimlik, sınıf) — OSMANLI / tâbi:<kid> / <devlet id> / YOK, işgal ayrı."""
    isg = None
    for p in (y.get("isg") or []):
        if gunde(p, g):
            isg = p.get("d")
    for p in (y.get("s") or []):
        if gunde(p, g):
            return (p.get("d") or "?"), "s", isg
    for p in (y.get("d") or []):
        if gunde(p, g):
            return "OSMANLI", "d", isg
    for p in (y.get("v") or []):
        if gunde(p, g):
            return "tâbi:" + (p.get("kid") or "?"), "v", isg
    return "YOK", "-", isg


def osmanli_mi(kimlik, sinif, isg):
    """Osmanlı zinciri: doğrudan ya da tâbi; başka devletin işgali zinciri KIRAR."""
    if isg and isg != "osmanli":
        return False
    return sinif in ("d", "v")


def km(a, b):
    R = 6371.0
    p1, p2 = math.radians(a["lat"]), math.radians(b["lat"])
    dp = p2 - p1
    dl = math.radians(b["lon"] - a["lon"])
    h = math.sin(dp / 2) ** 2 + math.cos(p1) * math.cos(p2) * math.sin(dl / 2) ** 2
    return 2 * R * math.asin(math.sqrt(h))


def yol_bul(dugumler, bas, hedef):
    """BFS — en az atlamalı yol; yoksa None."""
    from collections import deque
    kuyruk, gelen = deque([bas]), {bas: None}
    while kuyruk:
        u = kuyruk.popleft()
        if u == hedef:
            yol = []
            while u is not None:
                yol.append(u)
                u = gelen[u]
            return list(reversed(yol))
        for v in dugumler:
            if v in gelen:
                continue
            if km(dugumler[u], dugumler[v]) <= ESIK_KM:
                gelen[v] = u
                kuyruk.append(v)
    return None


def main():
    Y = [y for y in girdi.yukle(sessiz=True)
         if KUTU["lat0"] <= y["lat"] <= KUTU["lat1"]
         and KUTU["lon0"] <= y["lon"] <= KUTU["lon1"]]
    adlar = {y["ad"]: y for y in Y}
    bas = next((a for a in BAS_ADAY if a in adlar), None)
    hedefler = [a for a in HEDEF_ADAY if a in adlar]

    cikti = {"kutu": KUTU, "esik_km": ESIK_KM, "nokta": len(Y),
             "baslangic": bas, "hedefler": hedefler, "kesitler": {}}
    print(f"kutuda nokta: {len(Y)} · başlangıç: {bas} · hedefler: {hedefler}")

    for g in KESITLER:
        tablo = {}
        for y in Y:
            k, s, i = durum(y, g)
            tablo[y["ad"]] = {"kimlik": k, "sinif": s, "isgal": i,
                              "osmanli": osmanli_mi(k, s, i),
                              "lat": y["lat"], "lon": y["lon"]}
        dug = {a: tablo[a] for a in tablo if tablo[a]["osmanli"]}
        sonuc = {}
        for h in hedefler:
            if bas not in dug or h not in dug:
                sonuc[h] = {"yol": None,
                            "sebep": ("başlangıç zincirde değil" if bas not in dug
                                      else f"{h} o gün Osmanlı/tâbi DEĞİL "
                                           f"({tablo[h]['kimlik']}"
                                           + (f" · işgal {tablo[h]['isgal']}"
                                              if tablo[h]["isgal"] else "") + ")")}
                continue
            yol = yol_bul(dug, bas, h)
            sonuc[h] = {"yol": yol, "atlama": None if not yol else len(yol) - 1}
        cikti["kesitler"][g] = {"osmanli_zincir_nokta": len(dug),
                                "hedefler": sonuc,
                                "tablo": tablo}
        print(f"\n== {g} · zincire giren Osmanlı/tâbi nokta: {len(dug)}")
        for h, r in sonuc.items():
            if r.get("yol"):
                print(f"   {h:26s} BAĞLI · {r['atlama']} atlama · "
                      f"{' → '.join(r['yol'])}")
            else:
                print(f"   {h:26s} BAĞLI DEĞİL · {r.get('sebep','yol yok')}")

    yol = os.path.join(KOK, "denetim", "OLCUM-IMERETI-1810.json")
    with open(yol, "w", encoding="utf-8") as f:
        json.dump(cikti, f, ensure_ascii=False, indent=1)
    print(f"\nham: {yol}")


if __name__ == "__main__":
    main()
