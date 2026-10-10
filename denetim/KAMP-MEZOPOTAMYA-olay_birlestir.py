import csv,io,re,sys,collections; sys.stdout.reconfigure(encoding="utf-8")
SP=sys.argv[1]; D=sys.argv[2]
def oku(f):
    t=open(SP+"/"+f,encoding="utf-8").read()
    m=re.search(r"```(?:csv)?\n(tarih,.*?)```",t,re.S); return list(csv.DictReader(io.StringIO(m.group(1))))
A,B,C=oku("k1_olay_A.md"),oku("k1_olay_B.md"),oku("k1_olay_C.md")
assert (len(A),len(B),len(C))==(25,36,38)
EV="EVET"
AK="AKIN (yıkım/sefer — kalıcı kontrol değişimi KANITLANMADI; hedefe SAYILMAZ)"
HY="HAYIR"
# A: hepsi ba-hul/mu-hul (yıkım) — IS9 'yürüdü', IS17 Amurru boyun eğişi (toprak değil)
sinifA={i:AK for i in range(25)}
for i,r in enumerate(A):
    if r["metin"].startswith("Ibbi-Suen 9"): sinifA[i]=HY+" (yalnız sefer: 'went with massive power')"
    if r["metin"].startswith("Ibbi-Suen 17"): sinifA[i]=HY+" (boyun eğiş; toprak/kent değil)"
# B: fiile göre — seized/annexed/conquered/brought out = EVET; destroyed = AKIN
EVB={0,3,6,7,11,13,15,16,17,18,19,20,21,23,25,30}; ZL={26,27,28,29}; DUP={22}
sinifB={}
for i in range(36):
    sinifB[i]= EV if i in EVB else (None if i in ZL|DUP else AK)
# C: 707 Dur-Yakin yıkımı (709'da zaten alındı) ve 680 vali değişimi
sinifC={i:EV for i in range(38)}
for i,r in enumerate(C):
    if r["tarih"].startswith("-707"): sinifC[i]=AK
    if r["tarih"].startswith("-680"): sinifC[i]=HY+" (Asur içi vali değişimi)"
DIS={"-741","-738","-708","-679","-677","-676","-672","-671","-604","-597","-557"}
def kaydir(r):  # yıl adı olayın ERTESİ yılını adlandırır ⇒ olay yılı = yıl adı yılı − 1
    y=int(r["tarih"][1:5]); r["tarih"]="-%04d-01-01"%(y+1)
    r["metin"]+=" · TARİH = yıl adının yılı − 1 (yıl adı önceki yılın olayını anar; ±1 yıl)"
yeni=[]; c=collections.Counter()
for grp,R,S,yilad in (("A",A,sinifA,True),("B",B,sinifB,True),("C",C,sinifC,False)):
    for i,r in enumerate(R):
        s=S[i]
        if s is None: c[grp+":dışarıda"]+=1; continue
        r=dict(r)
        if yilad: kaydir(r)
        r["harita_degisimi"]=s; r["tarih_turu"]="OLAY"; r["kesinlik"]=r.get("kesinlik") or "yil"
        r["kapsam"]="MEZOPOTAMYA DIŞI" if grp=="C" and r["tarih"][:4] in DIS else "MEZOPOTAMYA"
        yeni.append(r); c[grp+":"+s.split(" (")[0]]+=1
        if s==EV: c["EVET:"+r["kapsam"]]+=1
K=list(csv.DictReader(open(D+"-KRONOLOJI.csv",encoding="utf-8")))
for k in K: k.setdefault("kapsam","MEZOPOTAMYA")
# Değişmez-2 benzeri: aynı yıl + aynı yer mevcut EVET ile çakışma
mev={(k["tarih"][:5],k["yer"]) for k in K if k["harita_degisimi"]=="EVET"}
for r in yeni:
    if (r["tarih"][:5],r["yer"]) in mev: print("ÇAKIŞMA:",r["tarih"],r["yer"],r["baslik"])
cols=list(K[0].keys())
K+= [{k:r.get(k,"") for k in cols} for r in yeni]
with open(D+"-KRONOLOJI.csv","w",encoding="utf-8",newline="") as f:
    w=csv.DictWriter(f,fieldnames=cols); w.writeheader(); [w.writerow(k) for k in K]
print(dict(c)); print("eklenen",len(yeni),"KAYIT; toplam",len(K),"KAYIT")
print("harita:",dict(collections.Counter(k["harita_degisimi"].split(" (")[0] for k in K)))
print("EVET MEZOPOTAMYA:",sum(1 for k in K if k["harita_degisimi"]=="EVET" and k["kapsam"]=="MEZOPOTAMYA"))
