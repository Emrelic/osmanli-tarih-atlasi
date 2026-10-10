# _sahiplik_uygula.py ITHAL EDILMEZ (betik; modul duzeyinde node/dosya isi yapar). AST'den _sayi + maddesi_var.
import ast,io,os,re,sys,bisect; sys.stdout.reconfigure(encoding="utf-8")
K=sys.argv[1]; src=io.open(K+"/arac/_sahiplik_uygula.py",encoding="utf-8").read(); T=ast.parse(src)
ns={"re":re,"bisect":bisect}
for n in T.body:
    if isinstance(n,ast.FunctionDef) and n.name in("_sayi","maddesi_var"): exec(compile(ast.Module([n],[]),"_sahiplik_uygula.py","exec"),ns); print("AST:",n.name,"satir",n.lineno)
g=set()
for f in os.listdir(K+"/data"):
    if f.startswith("olaylar") and f.endswith(".js"):
        s=io.open(K+"/data/"+f,encoding="utf-8",errors="replace").read()
        g|=set(re.findall(r't:\s*"(\d{4}-\d{2}-\d{2})"',s))|set(re.findall(r'"t":\s*"(\d{4}-\d{2}-\d{2})"',s))
        neg=re.findall(r't:\s*"(-\d{4}-\d{2}-\d{2})"',s)
        if neg: print("  negatif t: maddesi",f,len(neg))
ns["_GS"]=sorted(ns["_sayi"](x) for x in g); print("kronoloji gunu",len(g))
for gun,ac in [("-0538-01-01","MÖ, maddesiz (sentetik ahameni f)"),("-0330-10-22","MÖ, maddesiz"),("-9999-01-01","MÖ uydurma"),("1100-05-17","1000-1280, maddesiz uydurma gün"),("1500-05-17","1281-1923, maddesiz uydurma gün"),("1453-05-29","1281-1923, maddeli (İstanbul)")]:
    print(f"  maddesi_var({gun!r}) = {ns['maddesi_var'](gun)}   # {ac}")
