"""BORC-DEFTERI.md açık satır sayacı — bölüm bölüm (E6, 20 Kasım 2026).

Kullanım:
    py arac/borc_say.py              # bölüm bölüm tablo, toplam açık
    py arac/borc_say.py --json       # makine okunur
    py arac/borc_say.py --defter <yol>

Çıkış kodu: 0 sayıldı · 2 defter okunamadı. Sayı borcun KENDİSİ değil, açık SATIR sayısıdır.

Kural: bir bölümdeki tablo satırı `| X<sayı> | ...` ile başlar (A1, B12, C103, E6...). Tabloda
"Durum" sütunu varsa ve hücre ödendi/kapandı/çözüldü/tamam/iptal/gerek yok sözcüklerinden birini
içeriyorsa satır KAPALI sayılır; değilse AÇIK. "Durum" sütunu olmayan tablolarda (E, G, H) bütün
satırlar açıktır. F (ÖDENDİ) ve G (erişim yolları) borç değildir: açık sayısına girmez, yalnız satır sayısı basılır.
"""
import argparse, json, os, re, sys

try:  # Windows konsolu cp125x olabilir
    sys.stdout.reconfigure(encoding="utf-8")
except Exception:
    pass

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
KAPALI = re.compile(r"ödendi|kapandı|kapalı|çözüldü|tamam|iptal|gerek yok|yapıldı", re.I)
BASLIK = re.compile(r"^##\s+([A-Z])\.\s+(.*)$")
SATIR = re.compile(r"^\|\s*([A-Z]\d+)\s*\|")


def hucreler(satir):
    return [h.strip() for h in satir.strip().strip("|").split("|")]


def say(metin):
    bolumler, bol, durum_sutunu = {}, None, None
    for s in metin.splitlines():
        m = BASLIK.match(s)
        if m:
            bol = m.group(1)
            bolumler[bol] = {"ad": m.group(2).strip(), "toplam": 0, "acik": 0, "kapali": 0, "ornek_acik": []}
            durum_sutunu = None
            continue
        if bol is None or not s.startswith("|"):
            continue
        h = hucreler(s)
        if h and h[0] in ("No", "Tarih", "Kaynak"):  # tablo başlığı
            durum_sutunu = h.index("Durum") if "Durum" in h else None
            continue
        if set(s.replace("|", "").strip()) <= set("-: "):  # ayırıcı satırı
            continue
        if bol in ("F", "G"):  # F = ödenenler, G = erişim yolları (başvuru tablosu): borç DEĞİL
            bolumler[bol]["toplam"] += 1
            continue
        m = SATIR.match(s)
        if not m:
            continue
        b = bolumler[bol]
        b["toplam"] += 1
        kapali = False
        if durum_sutunu is not None and durum_sutunu < len(h):
            kapali = bool(KAPALI.search(h[durum_sutunu]))
        if kapali:
            b["kapali"] += 1
        else:
            b["acik"] += 1
            b["ornek_acik"].append(m.group(1))
    return bolumler


def main():
    ap = argparse.ArgumentParser(description="BORC-DEFTERI.md açık satır sayacı")
    ap.add_argument("--defter", default=os.path.join(KOK, "BORC-DEFTERI.md"))
    ap.add_argument("--json", action="store_true")
    a = ap.parse_args()
    try:
        metin = open(a.defter, encoding="utf-8").read()
    except OSError as e:
        print("defter okunamadı: %s" % e, file=sys.stderr)
        return 2
    b = say(metin)
    toplam_acik = sum(v["acik"] for k, v in b.items() if k not in ("F", "G"))
    if a.json:
        print(json.dumps({"bolumler": b, "toplam_acik": toplam_acik}, ensure_ascii=False, indent=1))
        return 0
    print("BORÇ DEFTERİ — açık satır (kapalı) bölüm bölüm")
    for k in sorted(b):
        v = b[k]
        if k in ("F", "G"):
            print("  %s  %-44s borç değil, %d satır" % (k, v["ad"][:44], v["toplam"]))
        else:
            print("  %s  %-44s açık %3d  (kapalı %d, toplam %d)" % (k, v["ad"][:44], v["acik"], v["kapali"], v["toplam"]))
    print("TOPLAM AÇIK: %d" % toplam_acik)
    return 0


if __name__ == "__main__":
    sys.exit(main())
