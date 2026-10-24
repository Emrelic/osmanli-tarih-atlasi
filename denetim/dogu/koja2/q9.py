import sys, re, time
sys.stdout.reconfigure(encoding='utf8')
sys.path.insert(0, r'C:\atlas\.claude\worktrees\dogu\denetim\dogu\koja2')
from _ws import get
pat = sys.argv[1]
for n in sys.argv[2:]:
    t = get('zh.wikisource.org', '吾妻鏡/卷' + n)
    time.sleep(3)
    print('=====', n, len(t))
    ents = re.split(r'(?=(?:治承|養和|寿永|壽永|元暦|元曆|文治)[元二三四五六]年(?:\(\d+\)|\{\{YL.{0,20}\}\}|「.{1,3}」)?[閏正二三四五六七八九十]+月[大小])', t)
    for e in ents:
        if re.search(pat, e[:900]):
            print(e[:420].replace('\n', ' '))
            print('--')
