# -*- coding: utf-8 -*-
"""DEGISMEZ3-0907 ④ TEŞHİS — koordinatörün hükmü ÖLÇÜLEBİLİR hâle getirildi.

DEVRALINAN TEŞHİS (🟡 `CLAUDE.md §3`te YAZILI, ama ÖLÇÜLMEMİŞ):
  *"Kusur `m:`nin güncellenmemesi değil, `m:`nin YANLIŞ EKSENDE olması.
    `m:` bir İDARÎ MERKEZ tutuyor — siyasî bir şey — ama COĞRAFÎ bir
    gruplama için kullanılıyor."*

SINANABİLİR HÂLE GETİRİLMESİ:
  `m:` Osmanlı idarî taksimatının bir adıdır. O taksimat, merkezin Osmanlı
  olmasından ÖNCE YOKTUR. Öyleyse teşhis doğruysa çelişkinin ağırlığı
  **merkezin Osmanlı olmasından ÖNCEKİ** döneme düşmelidir: veri, gelecekte
  kurulacak bir idarî bağı geçmişe uyguluyordur.

  🔴 ÖNGÖRÜ (ölçümden ÖNCE yazıldı, `§11`):
     ① ANAKRONİK-ÖNCE kovası en büyük olacak (çift-gün ağırlığıyla)
     ② FETİH-ARASI kovası çift SAYISINDA büyük, GÜNDE küçük olacak
     ③ İKİSİ-DE-OSMANLI-İKEN çelişki AZ olacak (bu gerçek bir model
        kusurudur ve azlığı beklenir)
     MAZERET: ① tutmazsa mazeret YOK — teşhis o zaman yanlıştır ya da
     eksiktir, ve bunu YAZARIM.
     ÖLÇÜM: OLCUM-DEGISMEZ3-TAM-0907.json + girdi.yukle · birim ÇİFT-GÜN.

⚠️ MERKEZ HİÇ OSMANLI OLMAMIŞ olabilir — ayrı kova, "önce/sonra" tanımsız.
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


def osmanli_ilk(y):
    """Bu kaydın İLK Osmanlı (d: ya da v:) günü — yoksa None."""
    g = [p["f"] for p in (y.get("d") or [])] + [p["f"] for p in (y.get("v") or [])]
    return min(g) if g else None


Y = girdi.yukle(sessiz=True)
ix = {y["ad"]: y for y in Y}
ham = json.load(open(os.path.join(KOK, "denetim", "OLCUM-DEGISMEZ3-TAM-0907.json"),
                     encoding="utf-8"))["celiskiler"]

kova = {"① ANAKRONİK — merkez HENÜZ Osmanlı DEĞİLKEN": {"g": 0, "c": set()},
        "② FETİH ARASI — biri Osmanlı, öteki henüz değil": {"g": 0, "c": set()},
        "③ İKİSİ DE OSMANLI OLDUKTAN SONRA": {"g": 0, "c": set()},
        "④ MERKEZ HİÇ OSMANLI OLMAMIŞ": {"g": 0, "c": set()}}
detay = {}

for r in ham:
    y, m = ix[r["yerlesim"]], ix[r["merkez"]]
    mo, yo = osmanli_ilk(m), osmanli_ilk(y)
    k_cift = (r["yerlesim"], r["merkez"])
    if mo is None:
        ad = "④ MERKEZ HİÇ OSMANLI OLMAMIŞ"
    elif r["t"] <= mo:
        ad = "① ANAKRONİK — merkez HENÜZ Osmanlı DEĞİLKEN"
    elif yo is not None and r["f"] >= max(mo, yo):
        ad = "③ İKİSİ DE OSMANLI OLDUKTAN SONRA"
    else:
        ad = "② FETİH ARASI — biri Osmanlı, öteki henüz değil"
    kova[ad]["g"] += r["gun"]
    kova[ad]["c"].add(k_cift)
    d = detay.setdefault(ad, [])
    d.append({"yerlesim": r["yerlesim"], "merkez": r["merkez"], "f": r["f"],
              "t": r["t"], "gun": r["gun"], "merkez_osmanli": mo,
              "yerlesim_osmanli": yo,
              "tip": "%s -> %s" % (r["yerlesim_durum"], r["merkez_durum"])})

print("=" * 72)
print("DEGISMEZ3-0907 ④ TEŞHİS SINAVI")
print("=" * 72)
toplam_g = sum(k["g"] for k in kova.values())
print("\n[KOVALAR]  birim: ÇİFT-GÜN (çift × gün), takvim günü DEĞİL")
for ad in sorted(kova):
    k = kova[ad]
    print("  %-46s %4d çift  %9d çift-gün  (%%%.1f)"
          % (ad, len(k["c"]), k["g"], 100.0 * k["g"] / toplam_g if toplam_g else 0))

en_buyuk = max(kova.items(), key=lambda x: x[1]["g"])[0]
print("\n[ÖNGÖRÜ SINAVI]")
print("  ① ANAKRONİK en büyük olacak (çift-gün) : %s"
      % ("TUTTU ✓" if en_buyuk.startswith("①") else "🔴 ÇÜRÜDÜ — en büyük: " + en_buyuk))
c2, g2 = len(kova["② FETİH ARASI — biri Osmanlı, öteki henüz değil"]["c"]), \
    kova["② FETİH ARASI — biri Osmanlı, öteki henüz değil"]["g"]
c1, g1 = len(kova["① ANAKRONİK — merkez HENÜZ Osmanlı DEĞİLKEN"]["c"]), \
    kova["① ANAKRONİK — merkez HENÜZ Osmanlı DEĞİLKEN"]["g"]
print("  ② çift SAYISINDA büyük, GÜNDE küçük    : çift %d vs %d · gün %d vs %d"
      % (c2, c1, g2, g1))
c3 = len(kova["③ İKİSİ DE OSMANLI OLDUKTAN SONRA"]["c"])
print("  ③ ikisi de Osmanlı iken AZ             : %d çift  %d çift-gün"
      % (c3, kova["③ İKİSİ DE OSMANLI OLDUKTAN SONRA"]["g"]))

for ad in sorted(kova):
    d = sorted(detay.get(ad, []), key=lambda r: -r["gun"])[:8]
    if not d:
        continue
    print("\n[%s — en uzun 8]" % ad)
    for r in d:
        print("  %-22s m:%-16s %s..%s %6dg  m_osm:%s  %s"
              % (r["yerlesim"][:22], r["merkez"][:16], r["f"][:4], r["t"][:4],
                 r["gun"], (r["merkez_osmanli"] or "—")[:10], r["tip"][:26]))

yol = os.path.join(KOK, "denetim", "OLCUM-DEGISMEZ3-TESHIS-0907.json")
open(yol, "w", encoding="utf-8", newline="").write(json.dumps({
    "_NOT": ("DEGISMEZ3-0907 ④ TEŞHİS. Öngörü ÖLÇÜMDEN ÖNCE yazıldı "
             "(betiğin docstring'i). BİRİM: çift-gün."),
    "kovalar": {ad: {"cift": len(k["c"]), "cift_gun": k["g"],
                     "yuzde": round(100.0 * k["g"] / toplam_g, 1) if toplam_g else 0}
                for ad, k in kova.items()},
    "detay": {ad: sorted(d, key=lambda r: -r["gun"]) for ad, d in detay.items()},
}, ensure_ascii=False, indent=1))
print("\n[YAZILDI] %s" % yol)
