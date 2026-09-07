# -*- coding: utf-8 -*-
"""DEGISMEZ3-0907 ③ KOVA AYRIMI — 690 çift TEK CİNS Mİ?

`CLAUDE.md §11`: *"iki ayrı kusur tek satırda raporlanırsa, çareleri ters
olsa bile AYNI ÇARE uygulanır"* — ve `§11` yine: *"ilk iş düzeltme değil
SINIFLANDIRMA"*. Bu betik HÜKÜM VERMEZ, kova çıkarır.

AYIRICI ÖLÇÜT — tek sayı değil, ORAN:
    ortak_yaşam = ikisinin de durumu "—" OLMADIĞI gün sayısı
    oran        = çelişkili gün / ortak yaşam
Bir çift ömrünün %3'ünde çelişiyorsa bu bir FETİH SIRASI farkıdır;
%100'ünde çelişiyorsa `m:` o yerleşim için hiç doğru olmamıştır ve
bağ COĞRAFÎdir, siyasî değil — koordinatörün teşhisinin ölçülebilir hâli.

⚠️ BİRİM: "çelişkili gün" toplamı ÇİFT-GÜNdür (çift × gün), takvim günü
   DEĞİL. 690 çiftin toplamı bir takvim aralığından büyük olabilir ve
   olması normaldir. (`§11` birim dersi — etiketi yanlış yazmak, sayıyı
   yanlış ölçmekle aynı sonucu verir.)
"""
import io
import json
import os
import sys
from datetime import date

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8", errors="replace")
KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(KOK, "arac"))
import girdi  # noqa: E402

UFUK_F, UFUK_T = "1281-01-01", "1923-10-29"


def gunsay(a, b):
    def d(s):
        p = s.split("-")
        return date(int(p[0]), int(p[1]), int(p[2]))
    try:
        return (d(b) - d(a)).days
    except Exception:
        return 0


def durum(y, g):
    for p in (y.get("d") or []):
        if p["f"] <= g < p["t"]:
            return "OSMANLI"
    for p in (y.get("v") or []):
        if p["f"] <= g < p["t"]:
            return "tabi"
    for p in (y.get("s") or []):
        if p["f"] <= g < p["t"]:
            return p["d"]
    return "—"


def sinirlar(y):
    g = set()
    for kat in ("d", "v", "s"):
        for p in (y.get(kat) or []):
            for uc in ("f", "t"):
                v = p.get(uc)
                if v and UFUK_F <= v <= UFUK_T:
                    g.add(v)
    return g


Y = girdi.yukle(sessiz=True)
ix = {y["ad"]: y for y in Y}
ham = json.load(open(os.path.join(KOK, "denetim", "OLCUM-DEGISMEZ3-TAM-0907.json"),
                    encoding="utf-8"))["celiskiler"]

# --- çift bazlı topla ----------------------------------------------------
cift = {}
for r in ham:
    k = (r["yerlesim"], r["merkez"])
    c = cift.setdefault(k, {"gun": 0, "aralik": 0, "tipler": {},
                            "ilk": r["f"], "son": r["t"]})
    c["gun"] += r["gun"]
    c["aralik"] += 1
    t = "%s -> %s" % (r["yerlesim_durum"], r["merkez_durum"])
    c["tipler"][t] = c["tipler"].get(t, 0) + r["gun"]
    c["ilk"] = min(c["ilk"], r["f"])
    c["son"] = max(c["son"], r["t"])

# --- ortak yaşam ve oran -------------------------------------------------
for (ad, m_ad), c in cift.items():
    y, m = ix[ad], ix[m_ad]
    noktalar = sorted({UFUK_F, UFUK_T} | sinirlar(y) | sinirlar(m))
    ortak = 0
    for i in range(len(noktalar) - 1):
        g0, g1 = noktalar[i], noktalar[i + 1]
        if durum(y, g0) != "—" and durum(m, g0) != "—":
            ortak += gunsay(g0, g1)
    c["ortak"] = ortak
    c["oran"] = (c["gun"] / ortak) if ortak else 0.0

# --- KOVALAR -------------------------------------------------------------
# Eşikler ÖLÇÜMDEN SONRA değil, dağılıma bakarak seçilir; ikisi de basılır.
kova = {}
for k, c in cift.items():
    o = c["oran"]
    if o >= 0.999:
        ad = "A · HİÇ UYUŞMADI (oran %100)"
    elif o >= 0.50:
        ad = "B · ÇOĞUNLUKLA KOPUK (%50-99)"
    elif o >= 0.10:
        ad = "C · KISMÎ KOPUKLUK (%10-49)"
    else:
        ad = "D · GEÇİŞ/FETİH SIRASI (<%10)"
    kova.setdefault(ad, []).append(k)

print("=" * 72)
print("DEGISMEZ3-0907 ③ KOVA AYRIMI — 690 çift")
print("=" * 72)
print("\n[ORAN KOVALARI]  oran = çelişkili gün / ortak yaşam günü")
for ad in sorted(kova):
    ks = kova[ad]
    g = sum(cift[k]["gun"] for k in ks)
    print("  %-34s %4d çift   %10d çift-gün" % (ad, len(ks), g))

# --- oran histogramı -----------------------------------------------------
print("\n[ORAN HİSTOGRAMI — eşikler dağılımdan seçildi, uydurulmadı]")
kutu = {}
for c in cift.values():
    b = min(int(c["oran"] * 10), 9)
    kutu[b] = kutu.get(b, 0) + 1
for b in range(10):
    n = kutu.get(b, 0)
    print("  %%%02d-%%%02d : %4d %s" % (b * 10, b * 10 + 9, n, "#" * (n // 10)))

# --- durum tipi ----------------------------------------------------------
print("\n[ÇELİŞKİ TİPİ — yerleşim -> merkez, çift-gün ağırlıklı]")
tip = {}
for c in cift.values():
    for t, g in c["tipler"].items():
        a, b = t.split(" -> ")
        if a == "OSMANLI":
            k = "OSMANLI yerleşim -> YABANCI merkez"
        elif b == "OSMANLI":
            k = "YABANCI yerleşim -> OSMANLI merkez"
        elif a == "tabi":
            k = "TÂBİ yerleşim -> YABANCI merkez"
        elif b == "tabi":
            k = "YABANCI yerleşim -> TÂBİ merkez"
        else:
            k = "YABANCI -> YABANCI (iki farklı devlet)"
        d = tip.setdefault(k, {"gun": 0, "cift": set()})
        d["gun"] += g
for c_k, c in cift.items():
    for t in c["tipler"]:
        a, b = t.split(" -> ")
        if a == "OSMANLI":
            k = "OSMANLI yerleşim -> YABANCI merkez"
        elif b == "OSMANLI":
            k = "YABANCI yerleşim -> OSMANLI merkez"
        elif a == "tabi":
            k = "TÂBİ yerleşim -> YABANCI merkez"
        elif b == "tabi":
            k = "YABANCI yerleşim -> TÂBİ merkez"
        else:
            k = "YABANCI -> YABANCI (iki farklı devlet)"
        tip[k]["cift"].add(c_k)
for k, d in sorted(tip.items(), key=lambda x: -x[1]["gun"]):
    print("  %-42s %4d çift  %10d çift-gün" % (k, len(d["cift"]), d["gun"]))

# --- A kovası: en büyükler ----------------------------------------------
print("\n[A KOVASI — HİÇ UYUŞMAYAN, en uzun 20]")
A = sorted(kova.get("A · HİÇ UYUŞMADI (oran %100)", []),
           key=lambda k: -cift[k]["gun"])
for k in A[:20]:
    c = cift[k]
    print("  %-26s m:%-18s %6d gün  %s"
          % (k[0][:26], k[1][:18], c["gun"], list(c["tipler"])[0][:34]))

# --- merkez bazlı --------------------------------------------------------
print("\n[EN ÇOK ÇELİŞEN MERKEZLER — çift sayısı]")
mk = {}
for (ad, m_ad), c in cift.items():
    d = mk.setdefault(m_ad, {"cift": 0, "gun": 0})
    d["cift"] += 1
    d["gun"] += c["gun"]
for m, d in sorted(mk.items(), key=lambda x: -x[1]["cift"])[:20]:
    print("  %-24s %3d çift  %9d çift-gün" % (m, d["cift"], d["gun"]))

# --- JSON ----------------------------------------------------------------
yol = os.path.join(KOK, "denetim", "OLCUM-DEGISMEZ3-KOVA-0907.json")
open(yol, "w", encoding="utf-8", newline="").write(json.dumps({
    "_NOT": ("DEGISMEZ3-0907 ③ KOVA. Ayırıcı ölçüt ORAN = çelişkili gün / "
             "ortak yaşam günü. BİRİM: çift-gün (çift × gün), takvim günü DEĞİL."),
    "kovalar": {ad: {"cift": len(ks),
                     "gun": sum(cift[k]["gun"] for k in ks),
                     "ornekler": [{"yerlesim": k[0], "merkez": k[1],
                                   "gun": cift[k]["gun"],
                                   "oran": round(cift[k]["oran"], 3)}
                                  for k in sorted(ks, key=lambda k: -cift[k]["gun"])]}
                for ad, ks in kova.items()},
    "tip": {k: {"cift": len(d["cift"]), "gun": d["gun"]} for k, d in tip.items()},
    "merkez": {m: d for m, d in sorted(mk.items(), key=lambda x: -x[1]["cift"])},
}, ensure_ascii=False, indent=1))
print("\n[YAZILDI] %s" % yol)
