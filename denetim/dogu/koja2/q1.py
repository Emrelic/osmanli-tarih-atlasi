import sys
sys.stdout.reconfigure(encoding='utf8')
sys.path.insert(0, r'C:\atlas\.claude\worktrees\dogu\denetim\dogu\koja2')
from _ws import get, search
t = get('ja.wikisource.org', '吾妻鏡')
print(t[:2500] if t else 'YOK')
for h in ('zh.wikisource.org', 'ja.wikisource.org'):
    for n in ('卷005', '卷006', '第五', '第六', '卷第六', '巻第六'):
        x = get(h, '吾妻鏡/' + n)
        print(h, n, None if x is None else len(x))
