import sys, re
sys.stdout.reconfigure(encoding='utf8')
sys.path.insert(0, r'C:\atlas\.claude\worktrees\dogu\denetim\dogu\koja2')
from _ws import get
t = get('zh.wikisource.org', '高麗史/卷十六')
i13 = t.find('十三年');
print([m.start() for m in re.finditer('十三年|十四年|十五年', t)], len(t))
seg = t[t.find('十三年', 8000):]
cur = ''
for m in re.finditer(r'((?:春|夏|秋|冬)?(?:閏|正|二|三|四|五|六|七|八|九|十|十一|十二)月(?:[甲乙丙丁戊己庚辛壬癸][子丑寅卯辰巳午未申酉戌亥])?朔?)|((?:[甲乙丙丁戊己庚辛壬癸][子丑寅卯辰巳午未申酉戌亥]))，([^。]{0,160})|(十三年|十四年|十五年)', seg):
    if m.group(4): print('#', m.group(4)); continue
    if m.group(1): cur = m.group(1); continue
    txt = m.group(3)
    if re.search(r'西京|妙淸|趙匡|柳旵|金富軾|分臺|西人|大爲', txt):
        print(cur, m.group(2), txt)
