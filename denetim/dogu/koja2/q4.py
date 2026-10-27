import sys, time
sys.stdout.reconfigure(encoding='utf8')
sys.path.insert(0, r'C:\atlas\.claude\worktrees\dogu\denetim\dogu\koja2')
from _ws import search, get
time.sleep(30)
for h, q in (('ja.wikisource.org', '後三年合戦'), ('ja.wikisource.org', '奥州後三年記'), ('ja.wikisource.org', '扶桑略記'), ('zh.wikisource.org', '扶桑略記'), ('zh.wikisource.org', '清原武衡'), ('ja.wikisource.org', '清原武衡')):
    try:
        print(h, q, search(h, q, 8))
    except Exception as e:
        print(h, q, 'ERR', e)
    time.sleep(6)
