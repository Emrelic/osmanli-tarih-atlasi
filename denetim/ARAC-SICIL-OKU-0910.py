# -*- coding: utf-8 -*-
"""ARAC-SICIL-OKU-0910 — SICIL.md'yi yeniden kurmak icin kulliyat dokumu.

45 `kutu/giden/parti-*/CEVAP.json` + yanindaki `PARTI.json` okunur ve
her madde icin TEK SATIRLIK bir kayit uretilir:

    paket · H-no · hukum · delil_commit · delil_atlas · baslik

🔴 BU ALET HICBIR SEYE YAZMAZ — CEVAP.json'a dokunmaz (D098).
Ciktisi denetim/OLCUM-SICIL-KULLIYAT-0910.json + .txt

Kullanim:  py denetim/ARAC-SICIL-OKU-0910.py
"""
import json, io, os, sys, glob, collections

KOK = r"C:\Users\emrem\OneDrive\Desktop\ClaudEmre\kutu\giden"
CIKTI_JSON = os.path.join("denetim", "OLCUM-SICIL-KULLIYAT-0910.json")
CIKTI_TXT = os.path.join("denetim", "OLCUM-SICIL-KULLIYAT-0910.txt")


def oku(yol):
    with io.open(yol, encoding="utf-8") as f:
        return json.load(f)


def kisalt(s, n):
    s = (s or "").replace("\r", " ").replace("\n", " ").strip()
    while "  " in s:
        s = s.replace("  ", " ")
    return s[:n]


def main():
    paketler = sorted(glob.glob(os.path.join(KOK, "parti-*")))
    kayitlar = []
    paket_ozet = []
    sema_disi = []

    for p in paketler:
        ad = os.path.basename(p)
        cy = os.path.join(p, "CEVAP.json")
        py_ = os.path.join(p, "PARTI.json")
        if not os.path.exists(cy):
            sema_disi.append((ad, "CEVAP.json YOK"))
            continue
        cev = oku(cy)

        # PARTI.json: madde basliklari (sikayetin kendisi)
        basliklar = {}
        metinler = {}
        if os.path.exists(py_):
            par = oku(py_)
            for m in par.get("maddeler", []) or []:
                basliklar[m.get("no")] = m.get("baslik") or ""
                metinler[m.get("no")] = m.get("metin") or ""
        else:
            sema_disi.append((ad, "PARTI.json YOK"))

        maddeler = cev.get("maddeler")
        if not isinstance(maddeler, dict):
            sema_disi.append((ad, "maddeler dict DEGIL: %r" % type(maddeler).__name__))
            maddeler = {}

        for no, m in sorted(maddeler.items()):
            if not isinstance(m, dict):
                sema_disi.append((ad, "%s madde dict degil" % no))
                continue
            kayitlar.append({
                "paket": ad,
                "no": no,
                "hukum": m.get("hukum", ""),
                "delil_commit": m.get("delil_commit", ""),
                "delil_atlas": m.get("delil_atlas", ""),
                "delil_olcum": m.get("delil_olcum", ""),
                "baslik": kisalt(basliklar.get(no, ""), 200),
                "metin": kisalt(metinler.get(no, ""), 600),
                "not_bas": kisalt(m.get("not", ""), 320),
                "not_uzunluk": len(m.get("not", "") or ""),
            })

        paket_ozet.append({
            "paket": ad,
            "damga": cev.get("damga", ""),
            "cevap_tarihi": cev.get("cevap_tarihi", ""),
            "cevaplayan": cev.get("cevaplayan", ""),
            "madde_sayisi_beyan": cev.get("madde_sayisi", None),
            "madde_sayisi_olculen": len(maddeler),
        })

    # sayimlar
    h = collections.Counter(k["hukum"] for k in kayitlar)
    a = collections.Counter(k["delil_atlas"] for k in kayitlar)
    commitli = sum(1 for k in kayitlar if (k["delil_commit"] or "").strip())

    ozet = {
        "olcum_tarihi": "2026-09-10",
        "paket": len(paket_ozet),
        "madde": len(kayitlar),
        "hukum_dagilimi": dict(h),
        "delil_atlas_dagilimi": dict(a),
        "delil_commit_dolu": commitli,
        "sema_disi": sema_disi,
    }

    with io.open(CIKTI_JSON, "w", encoding="utf-8") as f:
        json.dump({"ozet": ozet, "paketler": paket_ozet, "maddeler": kayitlar},
                  f, ensure_ascii=False, indent=1)

    with io.open(CIKTI_TXT, "w", encoding="utf-8") as f:
        for k in kayitlar:
            f.write("%-22s %-7s %-14s %-12s %s\n" % (
                k["paket"].replace("parti-", ""), k["no"], k["hukum"],
                (k["delil_atlas"] or "-"), k["baslik"]))

    print("paket:", len(paket_ozet), "| madde:", len(kayitlar))
    print("hukum:", dict(h))
    print("delil_atlas:", dict(a))
    print("delil_commit dolu:", commitli)
    if sema_disi:
        print("SEMA DISI:", sema_disi)
    # beyan ile olculen ayrisan paketler
    ayri = [(p["paket"], p["madde_sayisi_beyan"], p["madde_sayisi_olculen"])
            for p in paket_ozet
            if p["madde_sayisi_beyan"] is not None
            and p["madde_sayisi_beyan"] != p["madde_sayisi_olculen"]]
    print("beyan != olculen:", ayri if ayri else "yok")


if __name__ == "__main__":
    main()
