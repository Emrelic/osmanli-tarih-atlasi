import sys,re
src,dst,drop=sys.argv[1],sys.argv[2],sys.argv[3]  # drop = "dosya:eski_satir"
dosya,satir=drop.split(":")
L=open(src,encoding="utf-8",newline="").read().split("\n")
out=[];cur=None;skip=False;dropped=0
for ln in L:
    if ln.startswith("diff --git"):
        cur=ln.split()[2][2:];skip=False
    elif ln.startswith("@@"):
        m=re.match(r"@@ -(\d+)",ln)
        skip=(cur==dosya and m.group(1)==satir)
        if skip: dropped+=1
    if not skip: out.append(ln)
open(dst,"w",encoding="utf-8",newline="").write("\n".join(out))
print("dusen hunk:",dropped)
