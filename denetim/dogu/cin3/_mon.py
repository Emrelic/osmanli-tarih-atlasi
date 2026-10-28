"""Kullanim: py _mon.py "<sayfa>" -> sayfadaki 'N月XX朔' kaliplarini ve yil basliklarini sirayla listeler,
ardindan her 朔 icin Julyen gunu verir (aday yil araligi: --y1 --y2 ya da ilk iki arguman sonrasi)."""
import sys, io, re, subprocess, os
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')
here = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, here)
r = subprocess.run([sys.executable, os.path.join(here, '_ws.py'), sys.argv[1], '*'], capture_output=True)
t = r.stdout.decode('utf-8', 'replace')
for m in re.finditer(r'(建炎|紹興|靖康|天會|天福|乾祐|顯德|廣順|開寶|太平興國|乾德|建隆|[一二三四五六七八九十]+年)|([春夏秋冬]?[正二三四五六七八九十閏]+月)([甲乙丙丁戊己庚辛壬癸][子丑寅卯辰巳午未申酉戌亥])朔', t):
    if m.group(3):
        print(m.group(2) + m.group(3) + '朔')
    else:
        pass
