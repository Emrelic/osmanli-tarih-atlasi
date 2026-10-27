"""denetle çıktısındaki 4d (doğumdan önce) ve benzeri kimlik listelerini DOĞU verisinde kullanılan kimliklerle kesiştirir.
py -I denetim/dogu/kesisim.py <denetle_log> <baslik_alt_dizesi>"""
import io, json, re, subprocess, sys, tempfile, os
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')
log = open(sys.argv[1], encoding='utf-8').read().split('\n')
baslik = sys.argv[2]
bas = next(i for i, s in enumerate(log) if baslik in s)
ids = []
for s in log[bas + 1:]:
    m = re.match(r'^    ([a-z0-9-]+)\s{2,}(\d+) dönem', s)
    if m:
        ids.append((m.group(1), s.strip()))
    elif s.strip() == '' and ids:
        break
kok = os.path.abspath(os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', '..'))
kul = set()
for f in os.listdir(os.path.join(kok, 'data')):
    if re.match(r'(yerlesimler|kronoloji_sinir)_dogu_500_1281\.js$', f):
        t = open(os.path.join(kok, 'data', f), encoding='utf-8').read()
        kul |= set(re.findall(r'"(?:d|devlet)"\s*:\s*"([^"]+)"', t))
tmp = os.path.join(tempfile.gettempdir(), 'dogu_yama.json')
for y in json.load(open(tmp, encoding='utf-8')):
    for z in y['s']:
        kul.add(z['d'])
print('liste', len(ids), 'DOĞU kimliği', len(kul))
for i, s in ids:
    if i in kul:
        print('  ', s)
