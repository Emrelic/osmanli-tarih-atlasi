"""py wbul.py ad kelime... -> body sentences with any keyword; also prints source work lines"""
import json, re, sys, os
sys.stdout.reconfigure(encoding='utf-8')
D = os.path.dirname(os.path.abspath(__file__))
o = json.load(open(os.path.join(D, 'cache', 'web_' + sys.argv[1] + '.json'), encoding='utf-8'))
b = o['body'].replace('\n', ' ')
cs = re.split(r'(?<=[.!?])\s+(?=[A-Z“"(0-9])', b)
for i, c in enumerate(cs):
    if any(k.lower() in c.lower() for k in sys.argv[2:]) and len(c) < 1200:
        print(f'[{sys.argv[1]}#{i}]', c.strip())
