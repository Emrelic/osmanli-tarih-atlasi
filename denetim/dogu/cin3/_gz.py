"""Kullanim: py _gz.py <ganzhi> <YYYY-MM-DD baslangic (Julyen)> [gun_sayisi=70]
Ganzhi gun adina uyan Julyen (1582-10-15 oncesi) gunleri aralikta listeler. Ayrica 'jd2g YYYY-MM-DD' = Julyen->Gregoryen."""
import sys, io
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')
GAN = '甲乙丙丁戊己庚辛壬癸'; ZHI = '子丑寅卯辰巳午未申酉戌亥'
def jdn_jul(y, m, d):
    a = (14 - m) // 12; yy = y + 4800 - a; mm = m + 12 * a - 3
    return d + (153 * mm + 2) // 5 + 365 * yy + yy // 4 - 32083
def jul_from_jdn(j):
    c = j + 32082; dd = (4 * c + 3) // 1461; e = c - 1461 * dd // 4
    m = (5 * e + 2) // 153
    return (dd - 4800 + m // 10, m + 3 - 12 * (m // 10), e - (153 * m + 2) // 5 + 1)
def jdn_greg(y, m, d):
    a = (14 - m) // 12; yy = y + 4800 - a; mm = m + 12 * a - 3
    return d + (153 * mm + 2) // 5 + 365 * yy + yy // 4 - yy // 100 + yy // 400 - 32045
def greg_from_jdn(j):
    a = j + 32044; b = (4 * a + 3) // 146097; c = a - 146097 * b // 4
    d = (4 * c + 3) // 1461; e = c - 1461 * d // 4; m = (5 * e + 2) // 153
    return (100 * b + d - 4800 + m // 10, m + 3 - 12 * (m // 10), e - (153 * m + 2) // 5 + 1)
def gz(j):
    i = (j + 49) % 60
    return GAN[i % 10] + ZHI[i % 12]
if sys.argv[1] == 'j2g':
    y, m, d = map(int, sys.argv[2].split('-'))
    print('Gregoryen %04d-%02d-%02d' % greg_from_jdn(jdn_jul(y, m, d))); sys.exit()
if sys.argv[1] == 'gunadi':
    y, m, d = map(int, sys.argv[2].split('-'))
    print(gz(jdn_jul(y, m, d))); sys.exit()
adi = sys.argv[1]
y, m, d = map(int, sys.argv[2].split('-'))
n = int(sys.argv[3]) if len(sys.argv) > 3 else 70
j0 = jdn_jul(y, m, d)
for j in range(j0, j0 + n):
    if gz(j) == adi:
        yy, mm, dd = jul_from_jdn(j)
        print('Julyen %04d-%02d-%02d' % (yy, mm, dd), ' Gregoryen-karsilik %04d-%02d-%02d' % greg_from_jdn(j))
