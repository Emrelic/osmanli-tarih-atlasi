# -*- coding: utf-8 -*-
"""DEGISMEZ3-0907 ② TAM TARAMA — 6 kesit değil, BÜTÜN ufuk.

🔴 NİÇİN YENİDEN YAZILDI: `denetle.degismez3` doğru ölçüyor ama evreni
   SABİT ALTI GÜN (1300/1400/1500/1600/1700/1800-06-15). 643 yılın 6 günü.
   `CLAUDE.md §11`: *"temiz çıkan bir örneklem, örneklemin dışını temiz
   ilan etmez"* — ve bu örneklem ZAMAN ekseninde dar.

🟢 ÖLÇÜTÜ TAŞIYORUM, YENİDEN İCAT ETMİYORUM (`§11`: *"bir aleti taklit
   eden ölçüm onun EŞİĞİNİ ve KOVA YAPISINI da taşımalı"*):
     · durum() sırası  d: -> OSMANLI · v: -> tabi · s: -> p["d"] · yoksa "—"
     · "—" taraf varsa ÇELİŞKİ SAYILMAZ
     · {OSMANLI, tabi} çifti MUAF (CLAUDE.md §3: aynı Osmanlı sistemi)
     · merkez atlasta yoksa ATLANIR — ama artık SESSİZ DEĞİL, sayılır

🟢 DENKLİK SINAVI (C13 ④ ÇIKTI): aynı 6 kesite daraltıldığında bu alet
   `denetle.degismez3` ile BİREBİR aynı sayıyı vermeli. Vermezse ölçütüm
   ayrışmıştır ve TAM TARAMA SAYISI GEÇERSİZDİR — betik DURUR.

YÖNTEM: gün gün taramak yerine OLAY NOKTALARI. Bir (y, m) çiftinin durumu
yalnız ikisinin dönem sınırlarında değişir; aralarındaki her aralıkta
sabittir. Bu tam ve kesin — örneklem değil.

BİRİM (üçü de basılır, çünkü tek birim yanıltır — `§11` "sayım birimi"):
   · benzersiz (yerleşim, merkez) ÇİFTİ   -> kaç ilişki bozuk
   · çelişki ARALIĞI                      -> kaç ayrı kopukluk penceresi
   · toplam çelişkili GÜN                 -> büyüklük
"""
import io
import json
import os
import sys
from datetime import date

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8", errors="replace")
KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(KOK, "arac"))
import girdi     # noqa: E402
import denetle   # noqa: E402

UFUK_F, UFUK_T = "1281-01-01", "1923-10-29"
KESITLER = ("1300-06-15", "1400-06-15", "1500-06-15",
            "1600-06-15", "1700-06-15", "1800-06-15")


def gunsay(a, b):
    """a..b arası gün — üç haneli yıl tuzağına karşı parçalayarak."""
    def d(s):
        p = s.split("-")
        return date(int(p[0]), int(p[1]), int(p[2]))
    try:
        return (d(b) - d(a)).days
    except Exception:
        return 0


def durum(y, g):
    """denetle.degismez3 ile BİREBİR aynı sıra ve aynı etiketler."""
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


def celiski_mi(a, b):
    if a == "—" or b == "—" or a == b:
        return False
    if {a, b} == {"OSMANLI", "tabi"}:      # CLAUDE.md §3 muafiyeti
        return False
    return True


def sinirlar(y):
    """Bu kaydın bütün dönem sınırları (olay noktaları)."""
    g = set()
    for kat in ("d", "v", "s"):
        for p in (y.get(kat) or []):
            for uc in ("f", "t"):
                v = p.get(uc)
                if v and UFUK_F <= v <= UFUK_T:
                    g.add(v)
    return g


def tara(Y, zamanli):
    """(kayitlar, atlanan) — zamanli=True ise merkez kd_gun'dan okunur."""
    ix = {yy["ad"]: yy for yy in Y}
    kayitlar, atlanan = [], {"merkez_atlasta_yok": set(), "merkez_yok_kayit": set()}
    for y in Y:
        # --- bu kayıt için (aralık, merkez_adı) listesi ---
        if zamanli:
            pencereler = []
            for p in girdi.kd_oku(y):
                m_ad = p.get("m")
                f = max(p.get("f") or UFUK_F, UFUK_F)
                t = min(p.get("t") or UFUK_T, UFUK_T)
                if m_ad and f < t:
                    pencereler.append((f, t, m_ad))
        else:
            pencereler = [(UFUK_F, UFUK_T, y.get("m"))] if y.get("m") else []

        for pf, pt, m_ad in pencereler:
            m = ix.get(m_ad)
            if not m:
                atlanan["merkez_atlasta_yok"].add(m_ad)
                atlanan["merkez_yok_kayit"].add(y["ad"])
                continue
            noktalar = sorted({pf, pt} | {g for g in (sinirlar(y) | sinirlar(m))
                                          if pf < g < pt})
            for i in range(len(noktalar) - 1):
                g0, g1 = noktalar[i], noktalar[i + 1]
                if g0 >= g1:
                    continue
                a, b = durum(y, g0), durum(m, g0)
                if not celiski_mi(a, b):
                    continue
                kayitlar.append({"yerlesim": y["ad"], "merkez": m_ad,
                                 "f": g0, "t": g1, "gun": gunsay(g0, g1),
                                 "yerlesim_durum": a, "merkez_durum": b})
    # bitişik aynı-durumlu aralıkları birleştir (aynı çift, aynı durum çifti)
    kayitlar.sort(key=lambda r: (r["yerlesim"], r["merkez"], r["f"]))
    birlesik = []
    for r in kayitlar:
        if (birlesik and birlesik[-1]["yerlesim"] == r["yerlesim"]
                and birlesik[-1]["merkez"] == r["merkez"]
                and birlesik[-1]["t"] == r["f"]
                and birlesik[-1]["yerlesim_durum"] == r["yerlesim_durum"]
                and birlesik[-1]["merkez_durum"] == r["merkez_durum"]):
            birlesik[-1]["t"] = r["t"]
            birlesik[-1]["gun"] += r["gun"]
        else:
            birlesik.append(dict(r))
    return birlesik, atlanan


def ozet(kayitlar, baslik):
    ciftler = set((r["yerlesim"], r["merkez"]) for r in kayitlar)
    yer = set(r["yerlesim"] for r in kayitlar)
    gun = sum(r["gun"] for r in kayitlar)
    print("\n[%s]" % baslik)
    print("  benzersiz (yerleşim, merkez) çifti : %d" % len(ciftler))
    print("  benzersiz yerleşim                 : %d" % len(yer))
    print("  çelişki ARALIĞI                    : %d" % len(kayitlar))
    print("  toplam çelişkili GÜN               : %d  (~%.0f yıl)" % (gun, gun / 365.25))
    return {"cift": len(ciftler), "yerlesim": len(yer),
            "aralik": len(kayitlar), "gun": gun}


print("=" * 72)
print("DEGISMEZ3-0907 ② TAM TARAMA — bütün ufuk (1281-01-01 .. 1923-10-29)")
print("=" * 72)
Y = girdi.yukle(sessiz=True)

zsiz, atl_z = tara(Y, zamanli=False)
zli, atl_t = tara(Y, zamanli=True)

# ---- DENKLİK SINAVI -----------------------------------------------------
print("\n" + "-" * 72)
print("DENKLİK SINAVI — aynı 6 kesite daraltınca yetkili aletle eşleşiyor mu?")
print("-" * 72)


def kesitte(kayitlar):
    n = 0
    for r in kayitlar:
        for g in KESITLER:
            if r["f"] <= g < r["t"]:
                n += 1
    return n


yetkili = len(denetle.degismez3(Y))
yetkili_z, _ = denetle.degismez3z(Y)
benim = kesitte(zsiz)
benim_z = kesitte(zli)
print("  ZAMANSIZ  yetkili=%d  benim(6 kesite daraltılmış)=%d  %s"
      % (yetkili, benim, "EŞİT ✓" if yetkili == benim else "🔴 AYRIŞTI"))
print("  ZAMANLI   yetkili=%d  benim(6 kesite daraltılmış)=%d  %s"
      % (len(yetkili_z), benim_z, "EŞİT ✓" if len(yetkili_z) == benim_z else "🔴 AYRIŞTI"))
if yetkili != benim or len(yetkili_z) != benim_z:
    print("\n🔴 ÖLÇÜTÜM YETKİLİ ALETTEN AYRIŞTI — tam tarama sayısı GEÇERSİZ.")
    print("   (`§11`: taklit eden ölçüm eşiği VE kova yapısını taşımalı)")
    sys.exit(1)
print("  ⇒ ölçüt taşındı; tam tarama sayıları GEÇERLİ.")

# ---- SONUÇ --------------------------------------------------------------
o_zsiz = ozet(zsiz, "TAM TARAMA — ZAMANSIZ (m: sabit, degismez3 ölçütü)")
o_zli = ozet(zli, "TAM TARAMA — ZAMANLI (kd_gun ile, degismez3z ölçütü)")

print("\n[ÖRNEKLEM vs TAM — kaçırılan]")
print("  6 kesit  : %d yerleşim-tarih çifti" % yetkili)
print("  TAM      : %d benzersiz (yerleşim,merkez) çifti" % o_zsiz["cift"])
print("  ⇒ örneklemin GÖRDÜĞÜ benzersiz çift : %d"
      % len(set((c[1], c[2]) for c in denetle.degismez3(Y))))
gorulen = set((c[1], c[2]) for c in denetle.degismez3(Y))
tum = set((r["yerlesim"], r["merkez"]) for r in zsiz)
print("  ⇒ örneklemin HİÇ GÖRMEDİĞİ çift     : %d" % len(tum - gorulen))
print("  ⇒ örneklemde olup tamda olmayan     : %d  (0 olmalı)" % len(gorulen - tum))

print("\n[ATLANAN — 'temiz' DEĞİL, ÖLÇÜLMEDİ]")
print("  zamansız: %d kayıt / %d merkez adı  %s"
      % (len(atl_z["merkez_yok_kayit"]), len(atl_z["merkez_atlasta_yok"]),
         sorted(atl_z["merkez_atlasta_yok"])))

# ---- JSON ---------------------------------------------------------------
yol = os.path.join(KOK, "denetim", "OLCUM-DEGISMEZ3-TAM-0907.json")
open(yol, "w", encoding="utf-8", newline="").write(json.dumps({
    "_NOT": ("DEGISMEZ3-0907 ② TAM TARAMA. Olay-noktası yöntemi: bir (y,m) "
             "çiftinin durumu yalnız ikisinin dönem sınırlarında değişir. "
             "Örneklem DEĞİL. Ölçüt denetle.degismez3'ten taşındı ve DENKLİK "
             "SINAVI geçti (6 kesite daraltınca birebir eşit)."),
    "denklik_sinavi": {"yetkili_zamansiz": yetkili, "benim_zamansiz": benim,
                       "yetkili_zamanli": len(yetkili_z), "benim_zamanli": benim_z,
                       "gecti": True},
    "zamansiz": o_zsiz, "zamanli": o_zli,
    "atlanan": {"kayit": sorted(atl_z["merkez_yok_kayit"]),
                "merkez_adlari": sorted(atl_z["merkez_atlasta_yok"])},
    "celiskiler": zsiz,
}, ensure_ascii=False, indent=1))
print("\n[YAZILDI] %s" % yol)
