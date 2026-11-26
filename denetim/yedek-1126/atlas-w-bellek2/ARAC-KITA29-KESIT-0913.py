# -*- coding: utf-8 -*-
"""KITA 29 — KESİT: Emre'nin 12 adı + komşuları, 1583-1613 (SALT OKUR)

Öngörü ÖNCE yazıldı: denetim/ONGORU-KITA29-FERHATPASA-0913.md (D022).

Dört bölüm:
  A  odak kayıtların DÖNEM ZİNCİRİ (1500-1750 penceresi) + kaynak dosyası
  B  kesit tablosu — her kesitte sahip (motor sırası d > v > s, app.js ile aynı)
  C  komşu cebi — kutudaki her nokta için en yakın 8 komşudan kaçı FARKLI sahipte
     (ölçüt ARAC-KITA13-ARADA-NE-VAR ile aynı; ⚠️ geometri ÖLÇMEZ)
  D  kutudaki kırılma günleri 1578-1640 — hangi gün kaç nokta, kimler

Kullanım:  py denetim/ARAC-KITA29-KESIT-0913.py
"""
import os, sys, io, collections

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8", errors="replace")
KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(KOK, "arac"))
import girdi

Y = girdi.yukle(sessiz=True)
IX = {y["ad"]: y for y in Y}

# Adlar EVREN aletinin çıktısından BİREBİR (ad araması değil, tam ad).
EMRE = ["Revan", "Gümrü (Aleksandropol)", "Eçmiyadzin", "Nahçıvan", "Ordubad",
        "Çaldıran", "Başkale", "Şerur (Sharur)", "Mâku", "Hoy", "Merend",
        "Selmâs (Dilman)"]
KOMSU = ["Culfa", "Tebriz", "Urmiye", "Kotur", "Şeyhrumi (Yücelen)",
         "Şeyh Salû-yi Ulyâ", "Özalp (Saray)", "Bargiri (Muradiye)", "Van",
         "Doğubayazıt", "Iğdır", "Kars", "Arpaçay (Akyaka)", "Digor",
         "Ahılkelek (Akhalkalaki)", "Tiflis", "Gence", "Berde (Karabağ)",
         "Şamahı", "Erdebil", "Ahar (Karadağ)", "Merâga", "Hoşap (Mahmudi)"]
KESITLER = [
    ("1583-05-15", "Revan öncesi"),
    ("1583-07-01", "Revan sonrası"),
    ("1585-10-15", "Tebriz sonrası · H-0010 anı"),
    ("1590-03-21", "ANTLAŞMA günü"),
    ("1595-06-15", "antlaşma dönemi"),
    ("1603-11-15", "Tebriz kaybı sonrası"),
    ("1604-07-01", "Revan kaybı sonrası"),
    ("1607-06-15", "geri alış tamam"),
    ("1612-11-21", "Nasuh Paşa ertesi"),
]
LA0, LA1, LO0, LO1 = 35.5, 42.6, 41.5, 50.5


def sahip(y, g):
    for p in (y.get("d") or []):
        if p.get("f") <= g < p.get("t"):
            return "OSMANLI"
    for p in (y.get("v") or []):
        if p.get("f") <= g < p.get("t"):
            return "tâbi:" + str(p.get("d") or p.get("k"))
    for p in (y.get("s") or []):
        if p.get("f") <= g < p.get("t"):
            return str(p.get("d"))
    return "SAHİPSİZ"


def kisa(s):
    return {"OSMANLI": "OSM", "safevi": "saf", "SAHİPSİZ": "---"}.get(s, s[:9])


eksik = [a for a in EMRE + KOMSU if a not in IX]
print("# taban %d nokta · odak %d · komşu %d · IX'te bulunmayan: %s"
      % (len(Y), len(EMRE), len(KOMSU), eksik or "-"))

# ── A ─────────────────────────────────────────────────────────────────────
print()
print("=" * 100)
print("A · DÖNEM ZİNCİRİ (yalnız 1500-1750'ye DEĞEN dönemler) · kaynak dosyası")
print("=" * 100)
for ad in EMRE + ["Culfa", "Tebriz", "Urmiye", "Kotur", "Şeyhrumi (Yücelen)", "Şeyh Salû-yi Ulyâ"]:
    y = IX.get(ad)
    if not y:
        continue
    print("\n■ %s  (%.4f, %.4f)  dosya=%s  m=%s"
          % (ad, y["lat"], y["lon"], y.get("_kaynak"), y.get("m")))
    for alan in ("d", "v", "s"):
        for p in (y.get(alan) or []):
            if p.get("t", "9999") < "1500-01-01" or p.get("f", "0") > "1750-12-31":
                continue
            ek = {k: v for k, v in p.items() if k not in ("f", "t")}
            print("    %s  %s → %s  %s" % (alan, p.get("f"), p.get("t"), ek))

# ── B ─────────────────────────────────────────────────────────────────────
print()
print("=" * 100)
print("B · KESİT TABLOSU")
print("=" * 100)
bas = "  %-26s" % "yer" + "".join(" %-10s" % g[2:] for g, _ in KESITLER)
print(bas)
for grup, adlar in (("EMRE'NİN 12'Sİ", EMRE), ("KOMŞULAR", KOMSU)):
    print("  -- %s" % grup)
    for ad in adlar:
        y = IX.get(ad)
        if not y:
            continue
        print("  %-26s" % ad[:26] + "".join(" %-10s" % kisa(sahip(y, g)) for g, _ in KESITLER))
for g, not_ in KESITLER:
    say = collections.Counter(sahip(IX[a], g) for a in EMRE if a in IX)
    print("  %s %-28s Emre'nin 12'si: %s" % (g, not_, dict(say)))

# ── C ─────────────────────────────────────────────────────────────────────
kutu = [y for y in Y if y.get("lat") is not None
        and LA0 <= y["lat"] <= LA1 and LO0 <= y["lon"] <= LO1]
for g in ("1590-03-21", "1595-06-15"):
    print()
    print("=" * 100)
    print("C · KOMŞU CEBİ %s — kutuda %d nokta · en yakın 8 komşudan ≥6'sı FARKLI" % (g, len(kutu)))
    print("=" * 100)
    n = 0
    for y in sorted(kutu, key=lambda z: (-z["lat"], z["lon"])):
        s0 = sahip(y, g)
        uz = sorted(((girdi.km(y["lat"], y["lon"], z["lat"], z["lon"]), z)
                     for z in Y if z is not y and z.get("lat") is not None),
                    key=lambda x: x[0])[:8]
        farkli = [(d, z) for d, z in uz if sahip(z, g) != s0]
        if len(farkli) >= 6:
            n += 1
            print("  🔴 %-26s %-8s %d/8 farklı · en yakın: %s"
                  % (y["ad"][:26], kisa(s0), len(farkli),
                     " · ".join("%s %.0fkm %s" % (z["ad"][:14], d, kisa(sahip(z, g)))
                                for d, z in uz[:4])))
    print("  ⇒ %d nokta" % n)

# ── D ─────────────────────────────────────────────────────────────────────
print()
print("=" * 100)
print("D · KUTUDAKİ KIRILMA GÜNLERİ 1578-1640 (d:/v: başı-sonu)")
print("=" * 100)
kir = collections.defaultdict(list)
for y in kutu:
    for alan in ("d", "v"):
        for p in (y.get(alan) or []):
            for gun, tur in ((p.get("f"), "+"), (p.get("t"), "-")):
                if gun and "1578-01-01" <= gun <= "1640-12-31":
                    kir[gun].append("%s%s%s" % (tur, alan, y["ad"][:18]))
for gun in sorted(kir):
    print("  %s  %2d  %s" % (gun, len(kir[gun]), " · ".join(kir[gun])))
