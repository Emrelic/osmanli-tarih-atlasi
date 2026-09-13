# -*- coding: utf-8 -*-
"""0047 — Eskandar Beg Monshi (tr. R. M. Savory, History of Shah 'Abbas the Great)
archive.org KİTAP-İÇİ ARAMA (SALT OKUR, kitap İNDİRİLMEZ — yalnız arama parçacıkları)

archive.org öğesi: monshi-shah-abbas-english. Metadata'dan sunucu/dizin okunur,
BookReader "fulltext/inside.php" uç noktasına terim sorulur; dönen her eşleşmenin
sayfa numarası ve kısa bağlamı basılır.
⚠️ OCR metnidir: yazım varyantları (Soltaniya/Soltaniyeh/Sultaniya) ayrı ayrı sorulur.
⚠️ "0 eşleşme" = bu OCR'da bu yazım YOK; kitapta yok DEMEK DEĞİL (§4⑦ ailesi).

Kullanım:  py denetim/ARAC-0047-ESKANDARARA-0913.py <terim> [<terim> ...]
"""
import sys, io, json, re, urllib.request, urllib.parse

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8", errors="replace")
UA = {"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) Chrome/124"}
ITEM, DOC = "monshi-shah-abbas-english", "Monshi_Shah-Abbas_English"


def al(url):
    req = urllib.request.Request(url, headers=UA)
    return urllib.request.urlopen(req, timeout=90).read().decode("utf-8", "replace")


meta = json.loads(al("https://archive.org/metadata/%s" % ITEM))
server, d = meta.get("server") or meta.get("d1"), meta.get("dir")
print("# öğe %s · sunucu %s · dizin %s" % (ITEM, server, d))
for terim in sys.argv[1:]:
    q = urllib.parse.urlencode({"item_id": ITEM, "doc": DOC, "path": d, "q": terim})
    url = "https://%s/fulltext/inside.php?%s" % (server, q)
    try:
        js = json.loads(al(url))
    except Exception as e:
        print("\n## %s → ÖLÇÜLEMEDİ (%s)" % (terim, e))
        continue
    eslesme = js.get("matches") or []
    print("\n## %s → %d eşleşme" % (terim, len(eslesme)))
    for m in eslesme[:25]:
        metin = re.sub(r"\s+", " ", m.get("text", ""))
        metin = re.sub(r"</?IA_FTS_MATCH>", "§", metin).replace("{{{", "§").replace("}}}", "§")
        sayfa = None
        try:
            sayfa = m["par"][0]["page"]
        except Exception:
            pass
        i = metin.find("§")
        lo = max(0, i - 260) if i >= 0 else 0
        print("  s.%s | …%s…" % (sayfa, metin[lo:lo + 560]))
