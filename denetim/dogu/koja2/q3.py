import sys, re
sys.stdout.reconfigure(encoding='utf8')
sys.path.insert(0, r'C:\atlas\.claude\worktrees\dogu\denetim\dogu\koja2')
from _ws import get
import time
t = get('zh.wikisource.org', '吾妻鏡/卷005')
ents = re.split(r'(?=文治元年\(1185\))', t)
for e in ents:
    if re.search(r'十一月', e[:20]) or '守護' in e or '地頭' in e:
        print(e[:700].replace('\n', ' '))
        print('--')
time.sleep(2)
t = get('zh.wikisource.org', '吾妻鏡/卷004')
ents = re.split(r'(?=元暦二年|元暦元年\(1184\))', t)
for e in ents:
    if re.search(r'屋島|渡邊|勝浦|平氏.{0,6}(敗|落)|義經.{0,6}(發|出)', e[:600]) and re.match(r'元暦二年', e):
        print(e[:600].replace('\n', ' '))
        print('--')
