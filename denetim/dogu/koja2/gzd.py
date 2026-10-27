import sys
sys.path.insert(0, r'C:\atlas\.claude\worktrees\dogu\denetim\dogu\cin3')
from _gzlib import jdn_jul, jul_from_jdn, gz, greg_from_jdn

def near(approx, ganzhi, span=29):
    """approx 'YYYY-MM-DD' Julian; returns the Julian date within +-span days whose ganzhi matches."""
    y, m, d = [int(x) for x in approx.split('-')]
    j0 = jdn_jul(y, m, d)
    out = []
    for k in range(-span, span + 1):
        if gz(j0 + k) == ganzhi:
            out.append('%04d-%02d-%02d' % jul_from_jdn(j0 + k))
    return out

if __name__ == '__main__':
    for a in sys.argv[1:]:
        ap, g = a.split(':')
        print(a, near(ap, g))
