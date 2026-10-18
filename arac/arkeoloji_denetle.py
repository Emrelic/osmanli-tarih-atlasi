"""Değişmez 2a — arkeoloji maddesi (kaynak_turu:"arkeoloji") denetimi.
Şartname: denetim/ARKEOLOJI-KATMANI-SARTNAME-1018.md §3, §8.3 · alan sözlüğü: VERI-YAPISI.md «Arkeoloji alanları».

    py arac/arkeoloji_denetle.py [dosya.js …]     (dosya verilmezse data/*.js içinde "kaynak_turu" geçenler)

Çıkış: 0 temiz · 1 ihlal · 2 ölçülemedi (okunamayan dosya, ham-14C madde). 2 temiz DEĞİLDİR.
Ayrıştırma: `window.X = [ ... ];` gövdesi JSON olmalı (üretici arac/sehir_tarihce.py ve pilot üretici JSON yazar).
JSON olmayan (anahtarı tırnaksız) dosya ÖLÇÜLEMEDİ sayılır — sessizce atlanmaz.
Yalnız olay (kronoloji) maddelerini denetler; yerleşim eşleniği (şartname §2.2) girdi.py BILINEN_ALANLAR gelince.
"""
import glob, json, os, re, sys

KOK = os.path.normpath(os.path.join(os.path.dirname(os.path.abspath(__file__)), ".."))
TARIH = re.compile(r"^(-?)(\d{4,6})-(\d{2})-(\d{2})$")
SIRA = ["yil", "onyil", "yuzyil", "binyil", "belirsiz"]          # inceden kabaya
SURE_TURLERI = {"donem-toplami", "yerlesim-suresi"}
TURLER = {"kalibre-14C", "ham-14C", "tabaka-donem", "donem-toplami", "yerlesim-suresi", "tipolojik", "termolum"}


def mo_sayisi(t):
    """astronomik ISO → MÖ sayısı (MÖ N ↔ -(N-1)); MS ise None."""
    m = TARIH.match(t or "")
    if not m:
        raise ValueError("tarih biçimi %r" % t)
    y = int(m.group(2)) * (-1 if m.group(1) else 1)
    return (1 - y) if y <= 0 else None


def iso(mo):
    return "-%04d-01-01" % (mo - 1)


def gereken_kesinlik(a, b):
    h = abs(a - b) / 2
    return "yil" if h <= 5 else "onyil" if h <= 50 else "yuzyil" if h <= 500 else "binyil"


def madde_denetle(o, yer):
    """→ (ihlaller, olculemedi)."""
    ih, ol = [], []
    if o.get("kaynak_turu") != "arkeoloji":
        return ih, ol
    if "arkeoloji" not in (o.get("etiket") or []):
        ih.append(f"{yer}: kaynak_turu arkeoloji ama etiket:[\"arkeoloji\"] yok (arayüz süzgeci)")
    for alan in ("b", "kaynak", "gun", "ic_not_d"):
        if not str(o.get(alan) or "").strip():
            ih.append(f"{yer}: '{alan}' boş")
    try:
        mt = mo_sayisi(o.get("t"))
    except ValueError as e:
        return ih + [f"{yer}: {e}"], ol
    if mt is None:
        ih.append(f"{yer}: arkeoloji maddesi MS tarihli ({o.get('t')}) — bu kural MÖ içindir")
        return ih, ol
    gun = str(o.get("gun") or "")
    sayilar = {int(x) for x in re.findall(r"\d+", gun)}
    if "MÖ" not in gun or mt not in sayilar:
        ih.append(f"{yer}: gun metni {gun!r} t={o.get('t')} (MÖ {mt}) ile çelişiyor")
    kes = o.get("kesinlik")
    if kes not in SIRA:
        ih.append(f"{yer}: kesinlik {kes!r} arkeoloji için geçersiz (yil·onyil·yuzyil·binyil·belirsiz)")
        return ih, ol
    ar = o.get("aralik")
    notd = str(o.get("ic_not_d") or "")
    if not ar:
        if "TEK DEĞER" not in notd:
            ih.append(f"{yer}: aralik yok ve ic_not_d'de «TEK DEĞER» beyanı yok")
        if SIRA.index(kes) < SIRA.index("yuzyil"):
            ih.append(f"{yer}: tek değerli kayıt {kes!r}: yuzyil'den ince yazılamaz")
        return ih, ol
    if set(ar) != {"bas", "son", "guven", "tur"}:
        ih.append(f"{yer}: aralik alanları {sorted(ar)} ≠ bas,son,guven,tur")
        return ih, ol
    if ar["tur"] not in TURLER:
        ih.append(f"{yer}: aralik.tur {ar['tur']!r} tanımsız")
    if ar["tur"] == "ham-14C":
        ol.append(f"{yer}: ham-14C — kalibrasyon yok, MÖ'ye çevrilemez (ÖLÇÜLEMEDİ)")
        return ih, ol
    try:
        A, B = mo_sayisi(ar["bas"]), mo_sayisi(ar["son"])
    except ValueError as e:
        return ih + [f"{yer}: aralik {e}"], ol
    if A is None or B is None or A < B:
        ih.append(f"{yer}: aralik uçları ters/MS (bas daha eski olmalı): {ar['bas']} {ar['son']}")
        return ih, ol
    if not str(ar.get("guven") or "").strip():
        ih.append(f"{yer}: aralik.guven boş (verilmediyse «belirsiz»)")
    if ar["tur"] in SURE_TURLERI:
        if o["t"] != ar["bas"]:
            ih.append(f"{yer}: {ar['tur']} aralığında orta nokta ALINMAZ; t={o['t']} ≠ bas={ar['bas']}")
    else:
        beklenen = iso((A + B) // 2)
        if o["t"] != beklenen:
            ih.append(f"{yer}: orta nokta yanlış: t={o['t']}, MÖ {A}–{B} için beklenen {beklenen}")
        if SIRA.index(kes) < SIRA.index(gereken_kesinlik(A, B)):
            ih.append(f"{yer}: kesinlik {kes!r} kaynaktan ince; yarı genişlikten gereken ≥ {gereken_kesinlik(A, B)!r}")
        if "ORTA NOKTA" not in notd.upper():
            ih.append(f"{yer}: ic_not_d'de «ARALIK→ORTA NOKTA» beyanı yok")
    return ih, ol


def dosya_oku(yol):
    metin = open(yol, encoding="utf-8").read()
    m = re.search(r"=\s*(\[.*\])\s*;?\s*$", metin, re.S)
    if not m:
        raise ValueError("window.X = [ … ] gövdesi bulunamadı")
    return json.loads(m.group(1))


def denetle(yollar):
    ih, ol, n = [], [], 0
    for y in yollar:
        ad = os.path.basename(y)
        try:
            L = dosya_oku(y)
        except (OSError, ValueError) as e:
            ol.append(f"{ad}: okunamadı ({e}) — JSON olmayan dosya sessizce atlanmaz")
            continue
        for i, o in enumerate(L):
            if isinstance(o, dict) and o.get("kaynak_turu") == "arkeoloji":
                n += 1
            a, b = madde_denetle(o, f"{ad}[{i}] {str(o.get('b'))[:40]}") if isinstance(o, dict) else ([], [])
            ih += a
            ol += b
    return n, ih, ol


def main(argv):
    sys.stdout.reconfigure(encoding="utf-8")
    yollar = argv or [y for y in sorted(glob.glob(os.path.join(KOK, "data", "*.js")))
                      if "kaynak_turu" in open(y, encoding="utf-8", errors="replace").read()]
    n, ih, ol = denetle(yollar)
    for x in ih:
        print("  İHLAL", x)
    for x in ol:
        print("  ÖLÇÜLEMEDİ", x)
    print(f"Değişmez 2a: {len(yollar)} dosya · {n} arkeoloji maddesi · ihlal {len(ih)} · ölçülemedi {len(ol)}")
    return 1 if ih else 2 if ol else 0


if __name__ == "__main__":
    sys.exit(main(sys.argv[1:]))
