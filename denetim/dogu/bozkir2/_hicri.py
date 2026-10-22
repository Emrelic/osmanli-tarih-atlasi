import sys, math
# Tabular (aritmetik) hicrî takvim -> Jülyen (1582 öncesi). +-1 gün belirsizlik: tabloyla çevrilir, ic_not'ta beyan edilir.
def h2jd(y, m, d):
    return d + math.ceil(29.5 * (m - 1)) + (y - 1) * 354 + (3 + 11 * y) // 30 + 1948439.5 - 1 + 0.5  # JD at noon of civil day

def jd2julian(jd):
    jd = int(math.floor(jd + 0.5))
    c = jd + 32082
    d = (4 * c + 3) // 1461
    e = c - (1461 * d) // 4
    m = (5 * e + 2) // 153
    day = e - (153 * m + 2) // 5 + 1
    month = m + 3 - 12 * (m // 10)
    year = d - 4800 + (m // 10)
    return year, month, day

def h2j(y, m, d):
    return jd2julian(h2jd(y, m, d))

if __name__ == '__main__':
    a = [int(x) for x in sys.argv[1:4]]
    y, mo, dd = h2j(*a)
    print('%04d-%02d-%02d' % (y, mo, dd))
