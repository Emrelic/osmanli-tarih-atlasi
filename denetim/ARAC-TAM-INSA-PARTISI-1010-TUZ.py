# uret_petek.py ITHAL EDILMEZ (modul seviyesinde Onbellek() sqlite YAZAR). AST'den
# yalniz tuz atamalari cikarilip yan etkisiz bir ad alaninda degerlendirilir.
import sys,os,ast,json,hashlib,io,contextlib,importlib
sys.stdout.reconfigure(encoding="utf-8")
K=sys.argv[1]; A=os.path.join(K,"arac"); sys.path.insert(0,A)
onb=os.path.join(K,"_motor_onbellek"); once=os.path.exists(onb)
import girdi, motor_onbellek as _mob
src=io.open(os.path.join(A,"uret_petek.py"),encoding="utf-8").read()
T=ast.parse(src); hedef=["_MOTOR_IZI","_ONB_ISLETIM","_ONB_TUZ","_ONB_GEO_TUZ"]
ns={"json":json,"os":os,"girdi":girdi,"_mob":_mob,"_hlo":hashlib,"__file__":os.path.join(A,"uret_petek.py")}
bul=[]
for n in T.body:
    if isinstance(n,ast.Assign) and len(n.targets)==1 and isinstance(n.targets[0],ast.Name) and n.targets[0].id in hedef:
        bul.append((n.targets[0].id,n.lineno)); exec(compile(ast.Module([n],[]),"uret_petek.py","exec"),ns)
print("AST atamalari (ad, satir):",bul)
mi=ns["_MOTOR_IZI"]
print("girdi.motor_izi() dosya sayisi:",len(mi))
for k,v in sorted(mi.items()): print(f"   {k:28s} {v[:12]}")
t=json.loads(ns["_ONB_TUZ"]); g=json.loads(ns["_ONB_GEO_TUZ"])
print("_ONB_TUZ motor:",len(t["motor"]),"+ onbellek_modulu ⇒ toplam",len(t["motor"])+1,"dosya · ortam:",t["ortam"])
print("_ONB_GEO_TUZ motor:",len(g["motor"]),"+ onbellek_modulu ⇒",len(g["motor"])+1,"dosya:",sorted(g["motor"]))
print("onbellek_modulu:",t["onbellek_modulu"][:12])
print("TUZ_HASH genel:",hashlib.sha256(ns["_ONB_TUZ"].encode()).hexdigest()[:12],"(uret_petek'in bastigi 12 hane)")
print("TUZ_HASH geo  :",hashlib.sha256(ns["_ONB_GEO_TUZ"].encode()).hexdigest()[:12])
print("onbellek dizini once/sonra var mi:",once,os.path.exists(onb))
