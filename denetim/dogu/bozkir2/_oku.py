import sys, re, os, io
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')
D = os.path.join(os.path.dirname(os.path.abspath(__file__)), '_ham')
slug = sys.argv[1]
a = int(sys.argv[2]) if len(sys.argv) > 2 else 0
n = int(sys.argv[3]) if len(sys.argv) > 3 else 30000
t = open(os.path.join(D, slug + '.txt'), encoding='utf-8').read()
t = re.sub(r'\s+', ' ', t)
b = t.find('BİBLİYOGRAFYA')
if b > 0: t = t[:b]
# gövdenin başlangıcı: ilk "—" ya da madde başı tahmini
print(len(t))
print(t[a:a + n])
