import sys, re, io
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')
slug, pat = sys.argv[1], sys.argv[2]
t = re.sub(r'\s+', ' ', open('C:/atlas/.claude/worktrees/dogu/denetim/dogu/bozkir2/_ham/%s.txt' % slug, encoding='utf-8').read())
for m in re.finditer(pat, t):
    print(ascii(t[max(0, m.start() - 60):m.end() + 60]))
    print(t[max(0, m.start() - 60):m.end() + 60])
    break
