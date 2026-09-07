# -*- coding: utf-8 -*-
"""DEGISMEZ3-0907 ⑤ ÇARE AYRIMI — `kd:` neyi ÇÖZER, neyi ÇÖZMEZ?

🔴 NİÇİN BU AYRIM ŞART (`CLAUDE.md §11`):
   *"İki ayrı kusur tek satırda raporlanırsa, çareleri TERS OLSA BİLE aynı
     çare uygulanır — ve doğru veri bozulur."*
   `kd:` bütün 690 çiftin çaresi diye sunulursa, çözemeyeceği kova da
   "çözüldü" sayılır ve bir daha bakılmaz.

AYIRICI SORU: bu yerleşim ile merkezi HİÇ AYNI DEVLETTE OLDU MU?
   OLDU  -> bağ SİYASÎDİR, yalnız ZAMAN PENCERESİ eksik.  `kd:` ÇÖZER.
   OLMADI-> bağ COĞRAFÎDİR (bölge adı olarak kullanılmış). `kd:` ÇÖZMEZ:
            zamanlı bir merkez yazmak da onları aynı devlete sokmaz.
            Çare başka eksende — M/K ekseni ayrımı.

⚠️ "Aynı devlet" ölçütü `degismez3`ün muafiyetini TAŞIR: {OSMANLI, tâbi}
   aynı sayılır (`CLAUDE.md §3`).

🔴 ÖNGÖRÜ (ölçümden ÖNCE): COĞRAFÎ kova AZINLIK ama ÖNEMSİZ DEĞİL —
   %10-30 bandında bekliyorum. Tutmazsa mazeret YOK, yazarım.
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


def ayni(a, b):
    if a == "—" or b == "—":
        return None
    if a == b or {a, b} == {"OSMANLI", "tabi"}:
        return True
    return False


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

ciftler = {}
for r in ham:
    c = ciftler.setdefault((r["yerlesim"], r["merkez"]),
                           {"celiski_gun": 0, "aralik": 0})
    c["celiski_gun"] += r["gun"]
    c["aralik"] += 1

for (ad, m_ad), c in ciftler.items():
    y, m = ix[ad], ix[m_ad]
    noktalar = sorted({UFUK_F, UFUK_T} | sinirlar(y) | sinirlar(m))
    uyum = 0
    for i in range(len(noktalar) - 1):
        g0, g1 = noktalar[i], noktalar[i + 1]
        if ayni(durum(y, g0), durum(m, g0)):
            uyum += gunsay(g0, g1)
    c["uyum_gun"] = uyum
    top = uyum + c["celiski_gun"]
    c["uyum_orani"] = (uyum / top) if top else 0.0

COG = "🔴 COĞRAFÎ BAĞ — hiç aynı devlette olmadılar (kd: ÇÖZMEZ)"
COGZ = "🟠 NEREDEYSE COĞRAFÎ — uyum < %5 (kd: neredeyse hiç çözmez)"
SIY = "🟢 SİYASÎ BAĞ — aynı devlette oldular (kd: ÇÖZER)"
kova = {COG: [], COGZ: [], SIY: []}
for k, c in ciftler.items():
    if c["uyum_gun"] == 0:
        kova[COG].append(k)
    elif c["uyum_orani"] < 0.05:
        kova[COGZ].append(k)
    else:
        kova[SIY].append(k)

print("=" * 72)
print("DEGISMEZ3-0907 ⑤ ÇARE AYRIMI — `kd:` neyi çözer?")
print("=" * 72)
tg = sum(c["celiski_gun"] for c in ciftler.values())
print("\n[KOVALAR]  birim: ÇİFT-GÜN")
for ad in (COG, COGZ, SIY):
    ks = kova[ad]
    g = sum(ciftler[k]["celiski_gun"] for k in ks)
    print("  %-52s %4d çift  %9d  (%%%.1f)"
          % (ad, len(ks), g, 100.0 * g / tg if tg else 0))

cog_c = len(kova[COG]) + len(kova[COGZ])
cog_g = sum(ciftler[k]["celiski_gun"] for k in kova[COG] + kova[COGZ])
print("\n[ÖNGÖRÜ SINAVI]  COĞRAFÎ kova %%10-30 bandında olacak")
print("  ölçüm: çift %%%.1f  ·  çift-gün %%%.1f"
      % (100.0 * cog_c / len(ciftler), 100.0 * cog_g / tg))
band = 10 <= 100.0 * cog_g / tg <= 30
print("  ⇒ %s" % ("TUTTU ✓" if band else "🔴 ÇÜRÜDÜ — band dışı"))

for ad in (COG, COGZ):
    ks = sorted(kova[ad], key=lambda k: -ciftler[k]["celiski_gun"])[:12]
    if not ks:
        continue
    print("\n[%s — en uzun 12]" % ad)
    for k in ks:
        c = ciftler[k]
        print("  %-26s m:%-18s çelişki %6dg  uyum %5dg"
              % (k[0][:26], k[1][:18], c["celiski_gun"], c["uyum_gun"]))

print("\n[SİYASÎ KOVA — en uzun 10 (kd: ile çözülecekler)]")
for k in sorted(kova[SIY], key=lambda k: -ciftler[k]["celiski_gun"])[:10]:
    c = ciftler[k]
    print("  %-26s m:%-18s çelişki %6dg  uyum %6dg  (uyum %%%.0f)"
          % (k[0][:26], k[1][:18], c["celiski_gun"], c["uyum_gun"],
             100 * c["uyum_orani"]))

yol = os.path.join(KOK, "denetim", "OLCUM-DEGISMEZ3-CARE-0907.json")
open(yol, "w", encoding="utf-8", newline="").write(json.dumps({
    "_NOT": ("DEGISMEZ3-0907 ⑤ ÇARE AYRIMI. Ayırıcı: çift HİÇ aynı devlette "
             "oldu mu? {OSMANLI,tâbi} aynı sayılır (CLAUDE.md §3). "
             "BİRİM: çift-gün."),
    "kovalar": {ad: {"cift": len(ks),
                     "cift_gun": sum(ciftler[k]["celiski_gun"] for k in ks),
                     "liste": [{"yerlesim": k[0], "merkez": k[1],
                                "celiski_gun": ciftler[k]["celiski_gun"],
                                "uyum_gun": ciftler[k]["uyum_gun"],
                                "uyum_orani": round(ciftler[k]["uyum_orani"], 3)}
                               for k in sorted(ks, key=lambda k: -ciftler[k]["celiski_gun"])]}
                for ad, ks in kova.items()},
}, ensure_ascii=False, indent=1))
print("\n[YAZILDI] %s" % yol)
