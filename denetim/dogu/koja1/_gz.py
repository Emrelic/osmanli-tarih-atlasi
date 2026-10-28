# -*- coding: utf-8 -*-
import sys
import io
sys_=__import__("sys"); sys_.stdout = io.TextIOWrapper(sys_.stdout.buffer, encoding="utf-8")
# Jülyen takvimde gün sexagenary (ganzhi) hesabı. kullanim: py _gz.py YYYY-MM-DD ...  |  py _gz.py ara YYYY-MM-DD <gun-adi> [pencere]

G = '甲乙丙丁戊己庚辛壬癸'; Z = '子丑寅卯辰巳午未申酉戌亥'
def jdn_jul(y, m, d):
    a = (14 - m) // 12; yy = y + 4800 - a; mm = m + 12 * a - 3
    return d + (153 * mm + 2) // 5 + 365 * yy + yy // 4 - 32083
def jul_from_jdn(j):
    c = j + 32082; d = (4 * c + 3) // 1461; e = c - 1461 * d // 4; m = (5 * e + 2) // 153
    return (d - 4800 + m // 10, m + 3 - 12 * (m // 10), e - (153 * m + 2) // 5 + 1)
def gz(j):
    i = (j + 49) % 60
    return G[i % 10] + Z[i % 12]
def ara(bas, ad, n=40):
    y, m, d = map(int, bas.split('-')); j0 = jdn_jul(y, m, d)
    for k in range(n):
        if gz(j0 + k) == ad:
            return '%04d-%02d-%02d' % jul_from_jdn(j0 + k)
if __name__ == '__main__' and len(sys.argv) > 1:
    if sys.argv[1] == 'ara':
        print(ara(sys.argv[2], sys.argv[3], int(sys.argv[4]) if len(sys.argv) > 4 else 60))
    else:
        for s in sys.argv[1:]:
            y, m, d = map(int, s.split('-')); print(s, gz(jdn_jul(y, m, d)))
