# -*- coding: utf-8 -*-
"""ISGAL-1806 ölçüm aleti — H-0002 (Eflak-Boğdan Rus işgali haritada doğru mu?)

Ölçtüğü şey, YORUM DEĞİL SAYI:
  ① Eflak + Boğdan + Besarabya kutusundaki yerleşimler (motorun okuduğu evren)
  ② kimin toprağı: `s:` varsa o, yoksa `d:` → OSMANLI doğrudan, yoksa `v:` → tâbi
  ③ Eflak/Boğdan tâbiliğindeki noktalarda 1806-1812 işgal kaydı VAR MI — KOPUKLUK BUDUR
  ④ anahtar günlerde kesit
  ⑤ blok ölçümü (NAPOLYON-MISIR emsali): kaç kayıt aynı f/t/d üçlüsüne sıkışmış

Çıktı: denetim/OLCUM-ISGAL-1806.json  (ekrana yalnız özet)
"""
import json
import os
import sys

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(KOK, "arac"))
sys.stdout.reconfigure(encoding="utf-8")
import girdi  # noqa: E402

# Eflak (Wallachia) + Boğdan (Moldavia) + Besarabya + Dobruca kuzeyi
KUTU = dict(lat0=43.0, lat1=49.5, lon0=20.0, lon1=32.5)
PENCERE = ("1805-01-01", "1813-12-31")
TABI_KIMLIK = ("eflak", "bogdan")

KESITLER = [
    ("1806-11-22", "Dinyester geçilmeden bir gün önce"),
    ("1806-11-23", "Rus ordusu Dinyester'i geçti"),
    ("1806-12-25", "Miloradoviç Bükreş'te — Emre'nin görseli"),
    ("1807-06-01", "1807 seferi"),
    ("1809-09-01", "1809 seferi"),
    ("1811-10-01", "Ruscuk/Slobozia"),
    ("1812-05-28", "Bükreş Antlaşması"),
    ("1812-06-01", "antlaşmadan sonra"),
]


def kutuda(y):
    return (KUTU["lat0"] <= y["lat"] <= KUTU["lat1"]
            and KUTU["lon0"] <= y["lon"] <= KUTU["lon1"])


def degiyor(p):
    f = p.get("f") or "0000-01-01"
    t = p.get("t") or "9999-12-31"
    return not (t < PENCERE[0] or f > PENCERE[1])


def gunde(p, g):
    f = p.get("f") or "0000-01-01"
    t = p.get("t") or "9999-12-31"
    return f <= g <= t


def sahip(y, g):
    """Motorun boyayacağı kimlik: s: > d: (OSMANLI) > v: (tâbi) > yok."""
    for p in (y.get("s") or []):
        if gunde(p, g):
            return p.get("d") or "?", "s"
    for p in (y.get("d") or []):
        if gunde(p, g):
            return "OSMANLI", "d"
    for p in (y.get("v") or []):
        if gunde(p, g):
            return "tâbi:" + (p.get("kid") or "?"), "v"
    return None, None


def isgalci(y, g):
    for p in (y.get("isg") or []):
        if gunde(p, g):
            return p
    return None


def main():
    Y = [y for y in girdi.yukle(sessiz=True) if kutuda(y)]
    kayitlar = []
    for y in Y:
        for kat in ("isg", "s"):
            for p in y.get(kat) or []:
                if degiyor(p):
                    kayitlar.append({
                        "yer": y["ad"], "lat": y["lat"], "lon": y["lon"],
                        "kat": kat, "f": p.get("f"), "t": p.get("t"),
                        "d": p.get("d"), "kaynak": p.get("kaynak"),
                    })

    kesit = {}
    for g, etiket in KESITLER:
        sah, isg, bos = {}, [], []
        for y in Y:
            kim, nereden = sahip(y, g)
            if kim is None:
                bos.append(y["ad"])
            sah.setdefault(str(kim), []).append(y["ad"])
            if isgalci(y, g):
                isg.append(y["ad"])
        kesit[g] = {
            "etiket": etiket,
            "isgal_sayisi": len(isg),
            "isgalli": sorted(isg),
            "sahiplik": {k: len(v) for k, v in
                         sorted(sah.items(), key=lambda kv: -len(kv[1]))},
            "hicbiri": sorted(bos),
        }

    # ③ KOPUKLUK — Eflak/Boğdan tâbiliğindeki noktada işgal kaydı var mı
    G = "1806-12-25"
    tabi, kopuk = [], []
    for y in Y:
        kim, nereden = sahip(y, G)
        if nereden == "v" and (kim or "").split(":")[-1] in TABI_KIMLIK:
            p = isgalci(y, G)
            kayit = {"yer": y["ad"], "lat": y["lat"], "lon": y["lon"],
                     "tabi": kim, "isgal": None if not p else
                     {"f": p.get("f"), "t": p.get("t"), "d": p.get("d"),
                      "kaynak": (p.get("kaynak") or "")[:200]}}
            tabi.append(kayit)
            if p is None:
                kopuk.append(kayit)

    bloklar = {}
    for k in kayitlar:
        if k["kat"] != "isg":
            continue
        bloklar.setdefault(f"{k['f']}|{k['t']}|{k['d']}", []).append(k["yer"])

    cikti = {
        "kutu": KUTU, "pencere": PENCERE,
        "yerlesim_sayisi": len(Y),
        "kayit_sayisi": len(kayitlar),
        "kayitlar": sorted(kayitlar, key=lambda k: (k["kat"], k["f"] or "", k["yer"])),
        "kesitler": kesit,
        "tabi_1806_12_25": sorted(tabi, key=lambda k: k["yer"]),
        "KOPUK_1806_12_25": sorted(kopuk, key=lambda k: (-k["lat"], k["yer"])),
        "isgal_bloklari": {k: sorted(v) for k, v in
                           sorted(bloklar.items(), key=lambda kv: -len(kv[1]))},
    }
    yol = os.path.join(KOK, "denetim", "OLCUM-ISGAL-1806.json")
    with open(yol, "w", encoding="utf-8") as f:
        json.dump(cikti, f, ensure_ascii=False, indent=1)

    print(f"kutuda yerleşim: {len(Y)} · 1805-1813'e değen kayıt: {len(kayitlar)}"
          f" (isg {sum(1 for k in kayitlar if k['kat']=='isg')})")
    for g, d in kesit.items():
        print(f"  {g} · işgalli {d['isgal_sayisi']:3d} · sahipsiz "
              f"{len(d['hicbiri']):3d} · {d['etiket']}")
    print(f"\n1806-12-25'te Eflak/Boğdan tâbii nokta: {len(tabi)} · "
          f"İŞGAL KAYDI OLMAYAN (KOPUKLUK): {len(kopuk)}")
    for k in cikti["KOPUK_1806_12_25"]:
        print(f"    {k['yer']:32s} {k['lat']:7.3f},{k['lon']:7.3f}  {k['tabi']}")
    print("\nişgal blokları (aynı f|t|d):")
    for k, v in list(cikti["isgal_bloklari"].items())[:12]:
        print(f"  {len(v):3d} × {k}   {', '.join(v[:8])}")
    print(f"ham: {yol}")


# --- EK ÖLÇÜM: 1828 işgaliyle kıyas (aynı evren, aynı kutu) ---------------
# Niçin: "kopukluk veri eksikliği mi" sorusunun EN KESİN sınavı, AYNI
# noktaların BAŞKA bir Rus işgalinde taralı olup olmadığıdır. 1828-1834
# işgali aynı iki voyvodalığı kapsar; orada taralı olup 1806'da taralı
# OLMAYAN nokta, coğrafî değil VERİ farkıdır.
def kiyas_1828():
    Y = [y for y in girdi.yukle(sessiz=True) if kutuda(y)]
    g1806, g1828 = "1806-12-25", "1829-01-01"
    a = {y["ad"] for y in Y if isgalci(y, g1806)}
    b = {y["ad"] for y in Y if isgalci(y, g1828)}
    print("\n--- 1806-12-25 vs 1829-01-01 ---")
    print(f"1806 taralı: {len(a)} · 1828 taralı: {len(b)}")
    print(f"1828'de VAR 1806'da YOK ({len(b - a)}): {sorted(b - a)}")
    print(f"1806'da VAR 1828'de YOK ({len(a - b)}): {sorted(a - b)}")
    hic = [y["ad"] for y in Y if not (y.get("isg") or [])
           and sahip(y, g1806)[1] == "v"]
    print(f"HİÇ işgal kaydı olmayan tâbi nokta ({len(hic)}): {sorted(hic)}")


if __name__ == "__main__":
    if "--kiyas" in sys.argv:
        kiyas_1828()
    else:
        main()
