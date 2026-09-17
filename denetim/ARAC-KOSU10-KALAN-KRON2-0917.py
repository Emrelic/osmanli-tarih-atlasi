"""KOSU10-KALAN — YAMA-KRON2-0913 kalemlerinin BUGÜNKÜ durumu.

Her kalem için: maddenin şu anki t'si (dosyada b başlığıyla bulunur) ve
t_simdi değerini taşıyan bağlar (data/ekokuma*.js · data/merak*.js ·
data/savaslar.js) — satır numarasıyla. Veriye YAZMAZ.
Kullanım: py denetim/ARAC-KOSU10-KALAN-KRON2-0917.py
"""
import io, re, sys, glob
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8")

# (no, madde dosyası, başlık parçası, eski t, önerilen t)
K = [
    (1, "data/olaylar_ek.js", "Boğazkesen", "1452-08-31", "KORU / 1452-01-01"),
    (2, "data/olaylar_ek14.js", "Beyazıt Camii", "1505-01-01", "1505-10-13"),
    (3, "data/olaylar.js", "Budin'in ilhakı", "1541-08-29", "ölçülemedi"),
    (4, "data/olaylar.js", "Haçova", "1596-10", "1596-10-26"),
    (5, "data/olaylar_ek2.js", "Ferhad Paşa Antlaşması", "1590-03-21", "ölçülemedi"),
    (6, "data/olaylar_ek5.js", "Plevne savunması", "1877-07-19", "KORU"),
    (7, "data/olaylar_ek7.js", "Sinop Baskını", "1853-11-30", "KORU"),
    (9, "data/olaylar_ek5.js", "Alaçayır", "1608-08-05", "1608-08-09"),
    (10, "data/olaylar_ek5.js", "Oruç Ovası", "1607-10-23", "1607-10-24"),
    (11, "data/olaylar_ek5.js", "Kozluca", "1774-06-20", "1774-06-25"),
    (12, "data/olaylar_ek5.js", "Karayazıcı", "1599-06-01", "1599-01-01"),
    (13, "data/kronoloji_habsburg.js", "Vasvár", "1664-08-10", "1664-08-09"),
    (14, "data/olaylar_ek.js", "Kanije", "1600-10-20", "KARAR 20/22"),
    (14, "data/kronoloji_habsburg.js", "Kanije", "1600-10-22", "KARAR 20/22"),
    (15, "data/olaylar_ek5.js", "Şehzade Mustafa", "1553-10-05", "1553-10-06"),
    (16, "data/olaylar_ek7.js", "Şehzade Ahmed", "1513-04-24", "1513-04-15"),
    (16, "data/olaylar_ek5.js", "Yenişehir", "1513-04", "1513-04-15"),
]
BAG = sorted(glob.glob("data/ekokuma*.js") + glob.glob("data/merak*.js") + ["data/savaslar.js"])


def satirlar(f):
    with io.open(f, encoding="utf-8") as h:
        return h.read().split("\n")


for no, f, parca, eski, oneri in K:
    S = satirlar(f)
    bulunan = []
    for i, l in enumerate(S, 1):
        if parca in l and re.search(r'\bt:\s*"', l):
            m = re.search(r'\bt:\s*"([^"]+)"', l)
            bulunan.append((i, m.group(1) if m else "?", l.strip()[:110]))
    print("── #%d %s  «%s»  eski %s → öneri %s" % (no, f, parca, eski, oneri))
    if not bulunan:
        print("     madde satırı BULUNAMADI (başlık parçası ile)")
    for i, t, l in bulunan:
        durum = "AYNI (inmemiş)" if t.startswith(eski) else "DEĞİŞMİŞ"
        print("     %s:%d  t=%s  %s   %s" % (f, i, t, durum, l[:80]))
    for b in BAG:
        for i, l in enumerate(satirlar(b), 1):
            if eski in l and (parca.split()[0] in l or parca in l):
                print("     bağ  %s:%d  %s" % (b, i, l.strip()[:120]))
