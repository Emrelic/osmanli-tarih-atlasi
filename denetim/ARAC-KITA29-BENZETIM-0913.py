# -*- coding: utf-8 -*-
"""KITA 29 — BENZETİM: yamalar BELLEKTE uygulanır, ÖNCE/SONRA ölçülür (SALT OKUR)

data/ DONUK (koşu 10). Hiçbir dosya yazılmaz; girdi.yukle()'nin döndürdüğü
kayıtların DERİN KOPYASI üzerinde çalışılır.

Uygulanan yamalar — 1.MURAT KARARLARINDAN SONRAKİ hâl:
  K13-A   YAMA-KITA13-VAN-0913.json A grubu (Başkale · Çaldıran · Şeyhrumi
          1639-05-17 → 1548-08-25) — D166: benim yamamın ön koşulu O YAMADAN
          SONRAKİ durumdan türetilir, o yüzden önce o uygulanır
  A1      Mâku       d 1574-01-01 → 1639-05-17 (TDV maku [17][19-20][22-24])
  A2      Şerur      d 1585-01-01 → 1603-10-21 (sahiplik: BOA TD 633 Kasım 1590
          "Şerur Kazası", Bilgili 2016 [52][85]; GÜNLER Nahçıvan'dan, D084)
  A3      Gence · Berde (Karabağ)  d başı 1588-01-01 → 1588-09-01
          (TDV murad-iii [114] · safeviler [210])
  C1      Revan      d başı 1583-06-01 → 1583-09-13 — KARAR (1.MURAT): EMİR günü
          (BOA A.DVNSMHM.d 51-322, Adlığ 2026 [268][491]); fetih günü kaynakta YOK
  B1      Eçmiyadzin d 1583-09-13 → 1604-06-08 — KARAR: UYGULA. Başlangıç C1'e
          BAĞLI (D166): ankrajı Revan'dan ÖNCE Osmanlı olamaz

Bölümler:
  A  değişen kayıtların zinciri ÖNCE / SONRA
  B  Değişmez 1 benzeri: değişen kayıtta kapsama BOŞLUĞU var mı
  C  komşu cebi (en yakın 8'in ≥6'sı farklı) ÖNCE / SONRA, 5 kesit, `kur:` duyarlı
  D  ARADA NE VAR — Emre'nin tartışmalı yerleri, SONRA
  E  Değişmez 2: yamanın ürettiği kırılma günlerine en yakın ÇEKİRDEK madde
  F  C kaydı için aday kutu: 1590-03-21'de içindeki noktaların sahipleri
  G  🆕 SIRA SINAVI: B1 C1'siz uygulanırsa (eski JSON değeri 1583-06-01)
     Eçmiyadzin ankrajı Revan'dan önce mi Osmanlı oluyor

Kullanım:  py denetim/ARAC-KITA29-BENZETIM-0913.py
"""
import os, sys, io, re, copy, glob, datetime, collections

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8", errors="replace")
KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(KOK, "arac"))
import girdi

Y0 = girdi.yukle(sessiz=True)
LA0, LA1, LO0, LO1 = 35.5, 42.6, 41.5, 50.5
KESITLER = ["1575-06-15", "1583-07-01", "1590-03-21", "1605-06-15", "1620-06-15"]
REVAN_YENI = "1583-09-13"


def bul(Y, ad):
    a = [y for y in Y if y.get("ad") == ad]
    if len(a) != 1:
        raise SystemExit("🔴 '%s' için %d kayıt — benzetim DURDU (sessizce devam etmez)" % (ad, len(a)))
    return a[0]


def sahip(y, g):
    if y.get("kur") and y["kur"] > g:
        return "KURULMADI"
    for p in (y.get("d") or []):
        if p["f"] <= g < p["t"]:
            return "OSMANLI"
    for p in (y.get("v") or []):
        if p["f"] <= g < p["t"]:
            return "tâbi"
    for p in (y.get("s") or []):
        if p["f"] <= g < p["t"]:
            return str(p.get("d"))
    return "SAHİPSİZ"


def s_bol(y, kimlik, f, t):
    """`kimlik` s-dönemini [f,t) aralığında deler — iki parçaya böler."""
    yeni, n = [], 0
    for p in y.get("s") or []:
        if p.get("d") == kimlik and p["f"] < f and t < p["t"]:
            yeni.append(dict(p, t=f))
            yeni.append(dict(p, f=t))
            n += 1
        else:
            yeni.append(p)
    if n != 1:
        raise SystemExit("🔴 %s: '%s' s-dönemi [%s,%s)'i tam içeren %d dönem — benzetim DURDU"
                         % (y["ad"], kimlik, f, t, n))
    y["s"] = yeni


def d_bas_tasi(y, eski, yeni):
    """d başını eski→yeni taşır; s'de eski'de BİTEN dönemi yeni'ye uzatır (boşluk açma)."""
    n = 0
    for p in y.get("d") or []:
        if p["f"] == eski:
            p["f"] = yeni; n += 1
    for p in y.get("s") or []:
        if p["t"] == eski:
            p["t"] = yeni
    if n != 1:
        raise SystemExit("🔴 %s: d başı %s için %d dönem — benzetim DURDU" % (y["ad"], eski, n))


def k13a(y):
    for p in y.get("s") or []:
        if p.get("d") == "safevi" and p["t"] == "1639-05-17" and p["f"] == "1502-01-01":
            p["t"] = "1548-08-25"
    for p in y.get("d") or []:
        if p["f"] == "1639-05-17":
            p["f"] = "1548-08-25"


def uygula(Y, c1=True, b1=True, b1_bas=REVAN_YENI):
    for ad in ("Başkale", "Çaldıran", "Şeyhrumi (Yücelen)"):
        k13a(bul(Y, ad))
    m = bul(Y, "Mâku")
    s_bol(m, "safevi", "1574-01-01", "1639-05-17")
    m.setdefault("d", []).append({"f": "1574-01-01", "t": "1639-05-17"})
    sr = bul(Y, "Şerur (Sharur)")
    s_bol(sr, "safevi", "1585-01-01", "1603-10-21")
    sr.setdefault("d", []).append({"f": "1585-01-01", "t": "1603-10-21"})
    for ad in ("Gence", "Berde (Karabağ)"):
        d_bas_tasi(bul(Y, ad), "1588-01-01", "1588-09-01")
    if c1:
        d_bas_tasi(bul(Y, "Revan"), "1583-06-01", REVAN_YENI)
    if b1:
        e = bul(Y, "Eçmiyadzin")
        s_bol(e, "safevi", b1_bas, "1604-06-08")
        e.setdefault("d", []).append({"f": b1_bas, "t": "1604-06-08"})


DEGISEN = ["Başkale", "Çaldıran", "Şeyhrumi (Yücelen)", "Mâku", "Şerur (Sharur)",
           "Gence", "Berde (Karabağ)", "Revan", "Eçmiyadzin"]

ONCE = Y0
SONRA_A = copy.deepcopy(Y0); uygula(SONRA_A, c1=False, b1=False)
SONRA_AB = copy.deepcopy(Y0); uygula(SONRA_AB)
print("# taban %d nokta · SONRA_A = K13-A + A1 + A2 + A3 · SONRA_AB = + C1 (Revan %s) + B1"
      % (len(Y0), REVAN_YENI))


def zincir(y):
    out = []
    for alan in ("d", "s"):
        for p in sorted(y.get(alan) or [], key=lambda p: p["f"]):
            if p["t"] < "1500-01-01" or p["f"] > "1750-12-31":
                continue
            out.append("%s %s→%s%s" % (alan, p["f"], p["t"], (" " + p["d"]) if p.get("d") else ""))
    return out


# ── A ──
print("\n" + "=" * 96 + "\nA · ZİNCİR ÖNCE → SONRA_AB (1500-1750 penceresi)\n" + "=" * 96)
for ad in DEGISEN:
    o, s = zincir(bul(ONCE, ad)), zincir(bul(SONRA_AB, ad))
    print("■ %s" % ad)
    print("   ÖNCE : %s" % " | ".join(o))
    print("   SONRA: %s" % " | ".join(s))

# ── B ──
print("\n" + "=" * 96 + "\nB · KAPSAMA BOŞLUĞU (d ∪ v ∪ s, ilk başlangıçtan son bitişe)\n" + "=" * 96)
for ad in DEGISEN:
    y = bul(SONRA_AB, ad)
    ar = sorted([(p["f"], p["t"]) for a in ("d", "v", "s") for p in (y.get(a) or [])])
    bos, uc = [], ar[0][1]
    for f, t in ar[1:]:
        if f > uc:
            bos.append((uc, f))
        uc = max(uc, t)
    print("  %-22s SONRA boşluk: %s" % (ad, "yok ✓" if not bos else bos))

# ── C ──
def cepler(Y, g):
    kutu = [y for y in Y if y.get("lat") is not None and LA0 <= y["lat"] <= LA1 and LO0 <= y["lon"] <= LO1]
    sonuc = []
    for y in kutu:
        s0 = sahip(y, g)
        if s0 == "KURULMADI":
            continue
        uz = sorted(((girdi.km(y["lat"], y["lon"], z["lat"], z["lon"]), z) for z in Y
                     if z is not y and z.get("lat") is not None and sahip(z, g) != "KURULMADI"),
                    key=lambda x: x[0])[:8]
        f = sum(1 for d, z in uz if sahip(z, g) != s0)
        if f >= 6:
            sonuc.append("%s(%s %d/8)" % (y["ad"][:16], s0[:4], f))
    return sonuc

print("\n" + "=" * 96 + "\nC · KOMŞU CEBİ (≥6/8 farklı · kurulmamış nokta hesaba KATILMAZ)\n" + "=" * 96)
for g in KESITLER:
    for etiket, Y in (("ÖNCE    ", ONCE), ("SONRA_A ", SONRA_A), ("SONRA_AB", SONRA_AB)):
        c = cepler(Y, g)
        print("  %s %s %2d · %s" % (g, etiket, len(c), " · ".join(c)))
    print()

# ── D ──
print("=" * 96 + "\nD · ARADA NE VAR — SONRA_AB\n" + "=" * 96)
for g in ("1583-07-01", "1583-10-01", "1590-03-21", "1605-06-15"):
    for ad in ("Revan", "Eçmiyadzin", "Mâku", "Şerur (Sharur)", "Gümrü (Aleksandropol)", "Selmâs (Dilman)", "Merend"):
        y = bul(SONRA_AB, ad)
        s0 = sahip(y, g)
        uz = sorted(((girdi.km(y["lat"], y["lon"], z["lat"], z["lon"]), z) for z in SONRA_AB
                     if z is not y and z.get("lat") is not None), key=lambda x: x[0])[:8]
        f = sum(1 for d, z in uz if sahip(z, g) != s0)
        print("  %s %-22s %-8s %d/8 farklı · %s" % (g, ad, s0[:8], f,
              " · ".join("%s %.0f %s" % (z["ad"][:11], d, sahip(z, g)[:3]) for d, z in uz[:6])))
    print()

# ── E ──
print("=" * 96 + "\nE · DEĞİŞMEZ 2 — yamanın kırılma günleri ↔ en yakın ÇEKİRDEK madde (olaylar*.js)\n" + "=" * 96)
madde = []
for yol in sorted(glob.glob(os.path.join(KOK, "data", "olaylar*.js"))):
    for m in re.finditer(r't:\s*"(\d{4}-\d{2}-\d{2})"[^\n]{0,160}?b:\s*"([^"]{0,70})', io.open(yol, encoding="utf-8").read()):
        madde.append((m.group(1), os.path.basename(yol), m.group(2)))
print("  çekirdek madde: %d" % len(madde))
gun = lambda s: datetime.date(int(s[:4]), int(s[5:7]), int(s[8:10]))
for kg, not_ in (("1548-08-25", "K13-A başı"), ("1574-01-01", "A1 Mâku başı"),
                 ("1639-05-17", "A1 Mâku sonu"), ("1585-01-01", "A2 Şerur başı"),
                 ("1603-10-21", "A2 Şerur sonu"), ("1588-09-01", "A3 Gence/Berde başı"),
                 (REVAN_YENI, "C1 Revan + B1 Eçm. başı"), ("1604-06-08", "B1 Eçmiyadzin sonu")):
    en = min(madde, key=lambda x: abs((gun(x[0]) - gun(kg)).days))
    fark = abs((gun(en[0]) - gun(kg)).days)
    print("  %s %-24s en yakın %s (%s, %4d gün) %s  %s"
          % (kg, not_, en[0], en[1], fark, "✓" if fark <= 30 else "🔴 AÇIK", en[2][:50]))

# ── F ──
print("\n" + "=" * 96 + "\nF · C KAYDI ADAY KUTUSU — 1590-03-21 SONRA_AB, kutu içi sahipler\n" + "=" * 96)
ADAY = {"lat_min": 33.0, "lat_max": 43.0, "lon_min": 41.5, "lon_max": 50.5}
g = "1590-03-21"
ic = [y for y in SONRA_AB if y.get("lat") is not None
      and ADAY["lat_min"] <= y["lat"] <= ADAY["lat_max"] and ADAY["lon_min"] <= y["lon"] <= ADAY["lon_max"]]
say = collections.Counter(sahip(y, g) for y in ic)
print("  aday kutu · %d nokta · sahipler: %s" % (len(ic), dict(say)))

# ── G ──
print("\n" + "=" * 96 + "\nG · SIRA SINAVI — eski JSON değeriyle B1 (1583-06-01), C1 UYGULANMADAN\n" + "=" * 96)
YANLIS = copy.deepcopy(Y0); uygula(YANLIS, c1=False, b1=True, b1_bas="1583-06-01")
KARISIK = copy.deepcopy(Y0); uygula(KARISIK, c1=True, b1=True, b1_bas="1583-06-01")
for etiket, Y in (("DOĞRU  (C1 + B1 09-13)", SONRA_AB), ("ESKİ   (C1 yok, B1 06-01)", YANLIS),
                  ("KARIŞIK(C1 var, B1 06-01)", KARISIK)):
    r, e = bul(Y, "Revan"), bul(Y, "Eçmiyadzin")
    ters = [g for g in ("1583-06-15", "1583-07-15", "1583-08-15", "1583-09-01")
            if sahip(e, g) == "OSMANLI" and sahip(r, g) != "OSMANLI"]
    print("  %-26s Eçmiyadzin OSM iken Revan DEĞİL: %s" % (etiket, ters or "yok ✓"))
