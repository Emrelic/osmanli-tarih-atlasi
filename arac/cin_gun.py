"""Çin ay-güneş tarihi → Jülyen (1582 öncesi) / Gregoryen gün.
Veri: Yuk Tung Liu, ChineseCalendar (github.com/ytliu0/ChineseCalendar, MIT) src/calendarData.js
`ChineseToGregorian()` — satır: [yıl, ay1..ay12 başlangıç gün-ofseti, artık ay başı, artık ay no, yıl gün sayısı];
ofset = o yılın 1 Ocak'ı = 1 (ytliu0 calendar.js:398-401). Kapsam: MÖ 104 (-104) ve sonrası.
Kullanım: py -I cin_gun.py <yıl> <ay> <ganzhi> [artik]     ör.  618 5 甲子
          py -I cin_gun.py --sina"""
import io, json, re, sys
VERI = r"D:/kaynak-derlem/cin-takvim/src/calendarData.js"
GAN = "甲乙丙丁戊己庚辛壬癸"
ZHI = "子丑寅卯辰巳午未申酉戌亥"
GZ = [GAN[i % 10] + ZHI[i % 12] for i in range(60)]

def _tablo():
    s = io.open(VERI, encoding="utf-8").read()
    i = s.index("function ChineseToGregorian()")
    j = s.index("return", i) + 6
    k = s.index("];}", j) + 1
    return {r[0]: r for r in json.loads(s[j:k].strip())}
T = _tablo()

def jdn_jul(y, m, d):
    a = (14 - m) // 12; yy = y + 4800 - a; mm = m + 12 * a - 3
    return d + (153 * mm + 2) // 5 + 365 * yy + yy // 4 - 32083
def jdn_greg(y, m, d):
    a = (14 - m) // 12; yy = y + 4800 - a; mm = m + 12 * a - 3
    return d + (153 * mm + 2) // 5 + 365 * yy + yy // 4 - yy // 100 + yy // 400 - 32045
def jdn_tarih(j):
    """JDN → (y,m,d, 'J'|'G'); 1582-10-15 (JDN 2299161) öncesi Jülyen."""
    if j >= 2299161:
        a = j + 32044; b = (4 * a + 3) // 146097; c = a - 146097 * b // 4; t = "G"
    else:
        b = 0; c = j + 32082; t = "J"
    d = (4 * c + 3) // 1461; e = c - 1461 * d // 4; m = (5 * e + 2) // 153
    return (100 * b + d - 4800 + m // 10, m + 3 - 12 * (m // 10), e - (153 * m + 2) // 5 + 1, t)
def ocak1(y):
    return jdn_jul(y, 1, 1) if y < 1583 else jdn_greg(y, 1, 1)
def gz_gun(j):
    return GZ[(j + 49) % 60]

def ay_bas(y, ay, artik=False):
    """Çin y yılının (ay) ayının ilk günü JDN. Ofsetler y'nin 1 Ocak'ına göredir; 1. ay
    çoğu zaman şubattadır, 11-12. ay ertesi yılın ocak-şubatına taşabilir (ofset > 365)."""
    r = T[y]
    if artik:
        if r[14] != ay: raise ValueError("%d yılında %d. ay artık değil (artık ay: %s)" % (y, ay, r[14]))
        off = r[13]
    else:
        off = r[ay]
    return ocak1(y) + off - 1, (r[ay + 1] if ay < 12 else None)

def cevir(y, ay, gz, artik=False):
    bas, _ = ay_bas(y, ay, artik)
    for k in range(30):
        if gz_gun(bas + k) == gz:
            yy, mm, dd, t = jdn_tarih(bas + k)
            return "%04d-%02d-%02d" % (yy, mm, dd), t, k + 1
    return None, None, None  # bu ayda o ganzhi günü YOK

if __name__ == "__main__":
    sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8")
    if sys.argv[1:2] == ["--sina"]:
        # bilinen eşleşmeler (bağımsız kaynaklardan): (yıl, ay, ganzhi, beklenen)
        for y, a, g, b in [(618, 5, "甲子", "0618-06-18"), (2000, 1, "戊寅", None)]:
            print(y, a, g, "→", cevir(y, a, g), "beklenen", b)
        print("2000-01-01 ganzhi", gz_gun(jdn_greg(2000, 1, 1)), "(beklenen 戊午)")
    else:
        y, a, g = int(sys.argv[1]), int(sys.argv[2]), sys.argv[3]
        print(cevir(y, a, g, len(sys.argv) > 4))
