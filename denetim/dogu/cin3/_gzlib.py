"""Ganzhi/Julyen yardimcilari (kutuphane)."""
GAN = '甲乙丙丁戊己庚辛壬癸'; ZHI = '子丑寅卯辰巳午未申酉戌亥'
def jdn_jul(y, m, d):
    a = (14 - m) // 12; yy = y + 4800 - a; mm = m + 12 * a - 3
    return d + (153 * mm + 2) // 5 + 365 * yy + yy // 4 - 32083
def jul_from_jdn(j):
    c = j + 32082; dd = (4 * c + 3) // 1461; e = c - 1461 * dd // 4
    m = (5 * e + 2) // 153
    return (dd - 4800 + m // 10, m + 3 - 12 * (m // 10), e - (153 * m + 2) // 5 + 1)
def greg_from_jdn(j):
    a = j + 32044; b = (4 * a + 3) // 146097; c = a - 146097 * b // 4
    d = (4 * c + 3) // 1461; e = c - 1461 * d // 4; m = (5 * e + 2) // 153
    return (100 * b + d - 4800 + m // 10, m + 3 - 12 * (m // 10), e - (153 * m + 2) // 5 + 1)
def gz(j):
    i = (j + 49) % 60
    return GAN[i % 10] + ZHI[i % 12]
def tparse(t):
    y, m, d = t.split('-') if not t.startswith('-') else ('-' + t[1:].split('-')[0], *t[1:].split('-')[1:])
    return int(y), int(m), int(d)
def gunadi(t):
    y, m, d = tparse(t); return gz(jdn_jul(y, m, d))
def greg(t):
    y, m, d = tparse(t); return '%04d-%02d-%02d' % greg_from_jdn(jdn_jul(y, m, d))
def takvim(t, ganzhi):
    """ic_not_takvim metni + dogrulama: t'nin ganzhi'si beklenenle ayni olmali."""
    assert gunadi(t) == ganzhi, (t, ganzhi, gunadi(t))
    return 'Çin ay-güneş takvimi ganzhi gün adı %s → Jülyen %s (JDN hesabı; sınama: 乙巳 = 960-02-04) = Gregoryen %s; 1582 öncesi gün Jülyen kalır' % (ganzhi, t, greg(t))
