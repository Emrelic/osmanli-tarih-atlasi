import sys, re
sys.stdout.reconfigure(encoding='utf8')
sys.path.insert(0, r'C:\atlas\.claude\worktrees\dogu\denetim\dogu\koja2')
from _ws import get
t = get('zh.wikisource.org', '高麗史/卷十六')
for pat in ('斬妙', '趙匡.{0,10}叛', '十四年'):
    for m in re.finditer(pat, t):
        print(pat, '>>', t[max(0, m.start() - 260):m.end() + 260].replace('\n', ' '))
        print()
