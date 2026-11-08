import json, sys
sys.stdout.reconfigure(encoding="utf-8")
d = json.load(open("denetim/KUNYE-KAYNAK-1108/kunyeler.json", encoding="utf-8"))
ne = sys.argv[1]
bas = int(sys.argv[2]) if len(sys.argv) > 2 else 0
say = int(sys.argv[3]) if len(sys.argv) > 3 else 30
g = [o for o in d if o["damga"] == ne]
print(len(g))
for o in g[bas:bas + say]:
    print(o["id"], "|", o["f"], "|", str(o["kaynak"])[:140].replace("\n", " "))
