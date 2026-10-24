"""Kullanim: py _cal.py <MiladiYil(Julyen)> <ayNo> <ganzhi> [leap]   -> Julyen/Gregoryen gun (astronomik ay-gunes takvimi, +-1 gun)
         py _cal.py ay <yil> <ayNo>  -> ayin ilk gunu
Zhongqi kurali: kis gundonumu ayi=11. DeltaT~2.7h, saat dilimi +8 (Meeus kisa terimler)."""
import sys, io, math
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')
GAN = '甲乙丙丁戊己庚辛壬癸'; ZHI = '子丑寅卯辰巳午未申酉戌亥'
def jdn_jul(y, m, d):
    a = (14 - m) // 12; yy = y + 4800 - a; mm = m + 12 * a - 3
    return d + (153 * mm + 2) // 5 + 365 * yy + yy // 4 - 32083
def jul(j):
    c = j + 32082; dd = (4 * c + 3) // 1461; e = c - 1461 * dd // 4; m = (5 * e + 2) // 153
    return (dd - 4800 + m // 10, m + 3 - 12 * (m // 10), e - (153 * m + 2) // 5 + 1)
def greg(j):
    a = j + 32044; b = (4 * a + 3) // 146097; c = a - 146097 * b // 4; d = (4 * c + 3) // 1461; e = c - 1461 * d // 4; m = (5 * e + 2) // 153
    return (100 * b + d - 4800 + m // 10, m + 3 - 12 * (m // 10), e - (153 * m + 2) // 5 + 1)
def gz(j):
    i = (j + 49) % 60; return GAN[i % 10] + ZHI[i % 12]
R = math.radians
def newmoon(k):
    T = k / 1236.85
    jde = 2451550.09766 + 29.530588861 * k + 0.00015437 * T * T
    E = 1 - 0.002516 * T - 0.0000074 * T * T
    M = R((2.5534 + 29.10535670 * k) % 360); Mp = R((201.5643 + 385.81693528 * k) % 360); F = R((160.7108 + 390.67050284 * k) % 360); Om = R((124.7746 - 1.56375588 * k) % 360)
    c = (-0.40720 * math.sin(Mp) + 0.17241 * E * math.sin(M) + 0.01608 * math.sin(2 * Mp) + 0.01039 * math.sin(2 * F) + 0.00739 * E * math.sin(Mp - M)
         - 0.00514 * E * math.sin(Mp + M) + 0.00208 * E * E * math.sin(2 * M) - 0.00111 * math.sin(Mp - 2 * F) - 0.00057 * math.sin(Mp + 2 * F) + 0.00056 * E * math.sin(2 * Mp + M)
         - 0.00042 * math.sin(3 * Mp) + 0.00042 * E * math.sin(M + 2 * F) + 0.00038 * E * math.sin(M - 2 * F) - 0.00024 * E * math.sin(2 * Mp - M) - 0.00017 * math.sin(Om))
    return jde + c
def slon(jd):
    T = (jd - 2451545.0) / 36525
    L = 280.46646 + 36000.76983 * T; M = R(357.52911 + 35999.05029 * T)
    return (L + 1.914602 * math.sin(M) + 0.019993 * math.sin(2 * M) - 0.004817 * T * math.sin(M)) % 360
def local_day(jde):
    ut = jde - 2.7 / 24
    return math.floor(ut + 0.5 + 8 / 24)
def cross(lon_target, jd0):
    lo = jd0 - 20; hi = jd0 + 20
    for _ in range(50):
        mid = (lo + hi) / 2
        d = (slon(mid) - lon_target + 180) % 360 - 180
        if d < 0: lo = mid
        else: hi = mid
    return (lo + hi) / 2
def months(jy):
    ws_prev = cross(270, jdn_jul(jy - 1, 12, 21) - 0.5)
    k0 = round((ws_prev - 2451550.09766) / 29.530588861) - 1
    nm = [local_day(newmoon(k)) for k in range(k0, k0 + 30)]
    zq = []
    for i in range(0, 15):
        lon = (270 + 30 * i) % 360
        zq.append((local_day(cross(lon, ws_prev + 30.44 * i)), lon))
    day_ws = local_day(ws_prev)
    idx = max(i for i in range(len(nm) - 1) if nm[i] <= day_ws)
    res = []; num = 11
    for i in range(idx, len(nm) - 1):
        s, e = nm[i], nm[i + 1]
        has = [l for (d, l) in zq if s <= d < e]
        if i == idx:
            res.append((11, False, s, e))
        elif has:
            num = int(has[0] // 30 + 1) % 12 + 1
            res.append((num, False, s, e))
        else:
            res.append((num, True, s, e))
    return res
def find(jy, mon, ganz=None, leap=False):
    out = []
    seen = set()
    for (n, lp, s, e) in months(jy)[:15] + months(jy + 1)[:3]:
        if (s, n, lp) in seen: continue
        seen.add((s, n, lp))
        y0 = jul(s)[0]
        if n == mon and lp == leap and (y0 == jy or (y0 == jy + 1 and mon == 12 and jul(s)[1] == 1)):
            if ganz:
                for j in range(s, e):
                    if gz(j) == ganz: out.append(j)
            else: out.append(s)
    return out
if __name__ == '__main__':
    a = sys.argv[1:]
    if a[0] == 'ay':
        jy = int(a[1]); m = int(a[2])
        for (n, lp, s, e) in months(jy):
            if n == m: print(n, 'leap' if lp else '', 'Julyen %04d-%02d-%02d' % jul(s), 'ilk gun; gz', gz(s), 'uzunluk', e - s)
        sys.exit()
    jy = int(a[0]); mon = int(a[1]); g = a[2]; lp = len(a) > 3
    for j in find(jy, mon, g, lp): print('Julyen %04d-%02d-%02d' % jul(j), ' Gregoryen %04d-%02d-%02d' % greg(j))
