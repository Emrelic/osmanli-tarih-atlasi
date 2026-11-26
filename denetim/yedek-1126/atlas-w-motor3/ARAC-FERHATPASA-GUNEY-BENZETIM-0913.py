# -*- coding: utf-8 -*-
"""FERHATPASA-GUNEY — YAMA ÖNERİLERİ BELLEKTE (SALT OKUR · data/ DONUK)

Yamalar diske YAZILMAZ; girdi.yukle() çıktısının kopyasına uygulanır.
Sorulan dört şey:
  1 kesit önce/sonra (1590-03-21 · 1592-06-15 · 1595-06-15 · 1603-10-21 · 1612-11-20)
  2 Değişmez 1 — değişen kayıtlarda 1580-1620 arası GÜNLÜK tarama (sahipsiz gün)
  3 Değişmez 2 — değişen kayıtların YENİ kırılma günlerine ±30 günde madde var mı
     (evren: denetle.olaylari_yukle() = olaylar*.js çekirdeği; ölçüt ±30 gün)
  4 dönem sağlığı — f<t, çakışma yok (aynı kategori içinde)

Şıklar komut satırından: A (önerilen) ya da B (muhafazakâr).
Kullanım:  py denetim/ARAC-FERHATPASA-GUNEY-BENZETIM-0913.py [A|B]
"""
import os, sys, io, copy, datetime
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8", errors="replace")
KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(KOK, "arac"))
import girdi, denetle

SIK = (sys.argv[1] if len(sys.argv) > 1 else "A").upper()
Y0 = girdi.yukle(sessiz=True)
Y = copy.deepcopy(Y0)
IX0 = {y["ad"]: y for y in Y0}
IX = {y["ad"]: y for y in Y}

ESKI = {"f": "1590-03-21", "t": "1603-10-21"}


def bul(y, alan, f, t):
    for p in (y.get(alan) or []):
        if p.get("f") == f and p.get("t") == t:
            return p
    raise SystemExit("🔴 BEKLENEN DÖNEM YOK: %s %s %s→%s (yama bayat — D166)" % (y["ad"], alan, f, t))


YAMALAR = []  # (ad, açıklama)


def yama_sil(ad):
    y = IX[ad]
    p = bul(y, "d", ESKI["f"], ESKI["t"])
    y["d"].remove(p)
    YAMALAR.append((ad, "d %s→%s SİLİNDİ" % (ESKI["f"], ESKI["t"])))


def yama_t(ad, yeni_t):
    p = bul(IX[ad], "d", ESKI["f"], ESKI["t"])
    p["t"] = yeni_t
    YAMALAR.append((ad, "d.t %s → %s" % (ESKI["t"], yeni_t)))


def yama_f(ad, yeni_f):
    p = bul(IX[ad], "d", ESKI["f"], ESKI["t"])
    p["f"] = yeni_f
    YAMALAR.append((ad, "d.f %s → %s" % (ESKI["f"], yeni_f)))


# ── ŞIKLAR ────────────────────────────────────────────────────────────────
yama_sil("Hemedan")                      # A1 — iki şıkta da aynı
if SIK == "A":
    yama_sil("Burûcird")                 # A2-a
    yama_t("Luristan", "1592-01-01")     # A3-a  (Monshi s.643: 1000/1591-92 bağlılık)
    yama_f("Nihâvend", "1588-01-01")     # A4-a  (TDV + Monshi: 1588 kale)
else:
    yama_t("Burûcird", "1593-01-01")     # A2-b
    yama_t("Luristan", "1593-01-01")     # A3-b  (Monshi s.644: 1002/1593-94 Hürremâbâd işgali)
    # A4-b: Nihâvend dokunulmaz (hukukî başlangıç 1590-03-21)

print("# şık %s · %d yama:" % (SIK, len(YAMALAR)))
for ad, a in YAMALAR:
    print("   %-10s %s" % (ad, a))


def sahip(y, g):
    for p in (y.get("d") or []):
        if p.get("f") <= g < p.get("t"):
            return "OSM"
    for p in (y.get("v") or []):
        if p.get("f") <= g < p.get("t"):
            return "tâbi:" + str(p.get("d") or p.get("k"))
    for p in (y.get("s") or []):
        if p.get("f") <= g < p.get("t"):
            return str(p.get("d"))
    return "---"


ADLAR = ["Hemedan", "Nihâvend", "Burûcird", "Luristan", "Kirmanşah", "Kasr-ı Şîrîn",
         "Şehrizor", "Halepçe", "Dizfûl", "Havîza", "Bağdat"]
KES = ["1588-06-15", "1590-03-21", "1592-06-15", "1595-06-15", "1603-10-21", "1612-11-20"]
print("\n== 1 · KESİT (önce → sonra) ==")
print("  %-14s" % "yer" + "".join("%-19s" % g for g in KES))
for ad in ADLAR:
    print("  %-14s" % ad + "".join("%-19s" % ("%s→%s" % (sahip(IX0[ad], g)[:6], sahip(IX[ad], g)[:6])) for g in KES))

print("\n== 2 · DEĞİŞMEZ 1 — değişen kayıtlar, 1580-01-01..1620-12-31 GÜNLÜK ==")
d0 = datetime.date(1580, 1, 1)
for ad, _ in YAMALAR:
    y = IX[ad]
    bos = []
    g = d0
    while g <= datetime.date(1620, 12, 31):
        s = g.isoformat()
        if not (y.get("kur") and y["kur"] > s) and sahip(y, s) == "---":
            bos.append(s)
        g += datetime.timedelta(days=1)
    print("  %-10s sahipsiz gün: %d %s" % (ad, len(bos), (bos[:2] + ["…"] + bos[-1:]) if bos else ""))

print("\n== 3 · DEĞİŞMEZ 2 — yeni/değişen d: kırılmaları ±30 gün ==")
O = denetle.olaylari_yukle()
ol = [(denetle.gun_no(o["t"]), o["t"], o["b"]) for o in O]
print("  evren: %d madde (olaylar*.js)" % len(ol))
eski_gun = set()
for y in Y0:
    for p in (y.get("d") or []) + (y.get("v") or []):
        eski_gun.update([p.get("f"), p.get("t")])
yeni_gun = set()
for y in Y:
    for p in (y.get("d") or []) + (y.get("v") or []):
        yeni_gun.update([p.get("f"), p.get("t")])
for gun in sorted(g for g in yeni_gun - eski_gun if g):
    gd = denetle.gun_no(gun)
    e = min(ol, key=lambda o: abs(o[0] - gd))
    fark = abs(e[0] - gd)
    print("  %s  %s  en yakın %s (%d gün) · %s" % (gun, "✓" if fark <= 30 else "🔴 AÇIK", e[1], fark, e[2][:70]))
kaybolan = sorted(g for g in eski_gun - yeni_gun if g)
print("  artık KULLANILMAYAN kırılma günleri: %s" % (kaybolan or "-"))
for gun in (ESKI["f"], ESKI["t"]):
    kalan = [y["ad"] for y in Y for p in (y.get("d") or []) if gun in (p.get("f"), p.get("t"))]
    print("  %s hâlâ kullanan d: kaydı %d · %s" % (gun, len(kalan), ", ".join(kalan[:8])))

print("\n== 4 · DÖNEM SAĞLIĞI (değişen kayıtlar) ==")
for ad, _ in YAMALAR:
    y = IX[ad]
    sorun = []
    for alan in ("d", "v", "s"):
        ps = sorted((y.get(alan) or []), key=lambda p: p["f"])
        for p in ps:
            if not p["f"] < p["t"]:
                sorun.append("%s ters/sıfır %s→%s" % (alan, p["f"], p["t"]))
        for a, b in zip(ps, ps[1:]):
            if b["f"] < a["t"]:
                sorun.append("%s çakışma %s→%s / %s→%s" % (alan, a["f"], a["t"], b["f"], b["t"]))
    print("  %-10s %s" % (ad, "✓" if not sorun else "🔴 " + " · ".join(sorun)))
