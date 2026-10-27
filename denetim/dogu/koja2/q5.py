import sys, re, time
sys.stdout.reconfigure(encoding='utf8')
sys.path.insert(0, r'C:\atlas\.claude\worktrees\dogu\denetim\dogu\koja2')
from _ws import get
for title in sys.argv[1:]:
    t = get('zh.wikisource.org', title)
    time.sleep(3)
    print('=====', title, len(t))
    # year headers and month headers with first 30 chars
    for m in re.finditer(r'(?:^|\n|\s)((?:[元二三四五六七八九十]+年[，,]?)|(?:(?:春|夏|秋|冬)?(?:閏|正|二|三|四|五|六|七|八|九|十|十一|十二)月(?:[甲乙丙丁戊己庚辛壬癸][子丑寅卯辰巳午未申酉戌亥])?朔?))', t):
        s = m.group(1)
        print(m.start(), s, t[m.end():m.end() + 30].replace('\n', ' '))
