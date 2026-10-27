import sys, re, time
sys.stdout.reconfigure(encoding='utf8')
sys.path.insert(0, r'C:\atlas\.claude\worktrees\dogu\denetim\dogu\koja2')
from _ws import get
pat = sys.argv[1]
for n in sys.argv[2:]:
    t = get('zh.wikisource.org', '吾妻鏡/卷' + n)
    time.sleep(3)
    print('=====', n, len(t))
    # entries start at "{{YL|...}}...日<ganzhi>。"
    ents = re.split(r'(?=\{\{YL\|[^}]*\}\}[^。\n]{0,12}?[廿卅一二三四五六七八九十]+日[甲乙丙丁戊己庚辛壬癸][子丑寅卯辰巳午未申酉戌亥]。)|(?=文治元年\(1185\)[^。\n]{0,12}?[廿卅一二三四五六七八九十]+日[甲乙丙丁戊己庚辛壬癸][子丑寅卯辰巳午未申酉戌亥]。)', t)
    k = 0
    for e in ents:
        if e and re.search(pat, e[:700]):
            print(e[:330].replace('\n', ' '))
            print('--')
            k += 1
            if k > 14: break
