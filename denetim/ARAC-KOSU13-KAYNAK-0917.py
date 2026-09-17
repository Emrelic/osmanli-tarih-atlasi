# -*- coding: utf-8 -*-
"""KOSU13-YAMA — KAYNAK SINAVI (salt okuma). 17 Eylül 2026.
Paketin DAYANDIĞI TDV alıntılarını madde GÖVDESİNDE arar (§4②: HTTP 200 ≠ doğru madde)
ve bulunan cümlenin NEYİ tarihlediğini okumak için bağlamı basar (§4⑧: rakam
geçiyor ≠ o değeri destekliyor).
Girdi: <dizin>/<slug>.html (curl ile indirilmiş) — dizin argümandır.
    py denetim/ARAC-KOSU13-KAYNAK-0917.py <html_dizini>
Çıktı: denetim/OLCUM-KOSU13-KAYNAK-0917.json
"""
import html
import io
import json
import os
import re
import sys

sys.stdout.reconfigure(encoding="utf-8")
KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DIZIN = sys.argv[1]

# (slug, aranan ifade (regex), paketteki kullanım)
SINAV = [
    ("hekimoglu-ali-pasa", r"15 Kasım 1731", "M15 · Tebriz 1731-11-15 (A6C) · O11 Merend 2. pencere"),
    ("hekimoglu-ali-pasa", r"R[ûu]miye", "O12 Urmiye — 1731 geri alış (ikinci pencere YAZILMADI)"),
    ("nadir-sah--iran", r"3 Ekim", "O1 Revan t 1735-10-03 · M7"),
    ("urmiye", r"1724", "O12/O13 Urmiye·Selmâs f 1724-01-01 (Emre şık A)"),
    ("bosna-hersek", r"7 Ekim 1908", "B1-B3 t 1908-10-07"),
    ("bosna-hersek", r"Pasarofça Antlaşması ile Sava", "B1 Brod 1718 şeridi"),
    ("bosna-hersek", r"1739 Belgrad Antlaşması", "B1 Brod 1739 iadesi"),
    ("pasarofca-antlasmasi", r"21 Temmuz 1718", "B1 f 1718-07-21"),
    ("mahmud-i--osmanli", r"28 Eylül 1739", "B1 1739-09-28"),
    ("mahmud-i--osmanli", r"10 Ocak 1732", "K-ERDELAN eski günü (A6C 01-08'e çekti)"),
    ("hemedan", r"10 Receb 1144|8 Ocak 1732", "A6C antlaşma günü 1732-01-08"),
    ("karlofca", r"Kostayniçe", "B1-B4 Karlofça hükmü"),
    ("nahcivan", r"1724-1735", "O8 K4=A · P-0076-a"),
    ("tebriz", r"28 Temmuz 1725", "K-TEBRIZ f 1725-07-28 (A6C)"),
    ("tebriz", r"Merend", "O11 Merend 1728 eyalet listesi"),
    ("erdebil", r"1725 sonbahar", "O23 Erdebil (K11)"),
    ("kumuklar", r"1725", "R3 Tarku — şemhallik 1725'te son"),
    ("talis-hanligi", r"Rus", "R5/R6 Tâliş Rus dönemi"),
    ("derbend--dagistan", r"1722", "R1 Derbend 1722 işgali"),
]


def govde(slug):
    ham = io.open(os.path.join(DIZIN, slug + ".html"), encoding="utf-8", errors="replace").read()
    ham = re.sub(r"(?is)<(script|style)[^>]*>.*?</\1>", " ", ham)
    metin = html.unescape(re.sub(r"(?s)<[^>]+>", " ", ham))
    return re.sub(r"\s+", " ", metin)


out = []
for slug, rx, kullanim in SINAV:
    try:
        g = govde(slug)
    except OSError as e:
        out.append({"slug": slug, "aranan": rx, "sonuc": "ÖLÇÜLEMEDİ (%s)" % e, "kullanim": kullanim})
        continue
    baslik = re.search(r"([A-ZÇĞİÖŞÜÂÎÛ][A-ZÇĞİÖŞÜÂÎÛ \-()]{2,60}) - TDV İslâm Ansiklopedisi", g)
    es = [m for m in re.finditer(rx, g)]
    ornek = [g[max(0, m.start() - 160): m.end() + 120] for m in es[:2]]
    out.append({"slug": slug, "baslik": baslik.group(1).strip() if baslik else "?",
                "govde_karakter": len(g), "aranan": rx, "eslesme": len(es),
                "sonuc": "BULUNDU" if es else "BULUNAMADI", "baglam": ornek, "kullanim": kullanim})
    print("%-22s %-32s %-10s %3d  | %s" % (slug, rx[:32], out[-1]["sonuc"], len(es), kullanim))
    for o in ornek[:1]:
        print("      …%s…" % o)
io.open(os.path.join(KOK, "denetim", "OLCUM-KOSU13-KAYNAK-0917.json"), "w", encoding="utf-8").write(
    json.dumps(out, ensure_ascii=False, indent=1))
