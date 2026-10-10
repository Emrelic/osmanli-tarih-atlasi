import csv,io,re,sys,collections; sys.stdout.reconfigure(encoding="utf-8")
SP,D=sys.argv[1],sys.argv[2]
t=open(SP+"/k1_olay_D.md",encoding="utf-8").read()
R=list(csv.DictReader(io.StringIO(re.search(r"```(?:csv)?\n(tarih,.*?)```",t,re.S).group(1))))
assert len(R)==77
# HARAÇ ≠ DEVİR (koordinatör hükmü): satır no -> (kova, gerekçe)
A,B,C="HARAC-a","HARAC-b","HARAC-c"
H={5:(C,"yaktı + vergi YÜKLEDİ — tek beyan, süreklilik kanıtı yok"),
 7:(C,"'imposed upon him tribute' — yükleme beyanı, ödemenin sürekliliği kanıtsız"),
 8:(B,"AÇIK VASAL beyanı: 'Amīl-Adad … (my) vassal' + haraç yüklendi"),
 10:(C,"Laqe haracı 894 ve 885'te iki ayrı seferde ⇒ iki olay mı süreklilik mi ayırt edilemiyor"),
 11:(C,"Hindanu haracı 894/885/883 üç ayrı kralın seferlerinde ⇒ süreklilik beyan edilmiyor"),
 12:(B,"'I had him take an oath by Assur' — yemin = vasallık ANDI (süreklilik ilişkisi)"),
 13:(A,"885 sefer haracı; 882 metni 'at the time of the kings my fathers the governor of the land Suhu had not come to Assyria' ⇒ 885 düzenli ilişki DEĞİLDİ"),
 14:(C,"Hindanu — bkz. 11"),15:(C,"Laqe — bkz. 10"),18:(C,"Hindanu — bkz. 11"),
 20:(B,"Suhu valisi haracı NİNOVA'YA kendisi getirdi, 'atalarım zamanında gelmemişti' ⇒ YENİ ve kurumsal ilişkinin başı"),
 22:(C,"Nairi krallarından sefer sırasında haraç + angarya yüklendi — tek beyan"),
 26:(C,"rehine + haraç yüklendi — vasallık işareti ama tek beyan"),
 32:(B,"'imposed upon him as ANNUAL tribute'"),33:(B,"'I receive (it) ANNUALLY in my city, Assur'"),34:(B,"'I receive ANNUALLY'"),
 42:(A,"Halab sefer yolunda teslim + haraç, bir kez"),52:(A,"Yehu haracı, bir kez (sefer)"),
 53:(C,"Sur haracı 841 VE 838'de ⇒ iki sefer mi süreklilik mi ayırt edilemiyor"),
 56:(C,"Tabal armağanı 837, haracı 836 ⇒ ardışık iki yıl, süreklilik beyanı yok"),
 59:(A,"Parsua 27 kralın haracı, sefer geçişinde bir kez (Parsua 829'da ayrıca fethedildi)")}
K3={"kummuh","que","tabal","melid","musku","subria","urartu","musasir","nairi","nirdun","bit-zamani","nirbu","nipur-pasate","habhu","sikkur-sappanu"}
K4={"patina","samal","halab","hamat","israil","sur","dimask","bit-agusi"}
IR={"medya","parsua"}
def atif(p):
    if p in K3: return "K3 ANADOLU"+(" (konum/dilim DOĞRULANMADI)" if p in {"habhu","sikkur-sappanu","nipur-pasate"} else "")
    if p in K4: return "K4 AKDENIZ"
    if p in IR: return "BİLİNMİYOR (İran — dilim tablosunda yok)"
    return ""
KR=list(csv.DictReader(open(D+"-KRONOLOJI.csv",encoding="utf-8"))); cols=list(KR[0].keys())
c=collections.Counter()
for i,r in enumerate(R):
    r=dict(r); hd=r["harita_degisimi"]
    if i in H:
        kova,g=H[i]
        r["harita_degisimi"]={A:"AKIN (HARAÇ ⓐ tek seferlik — "+g+")",B:"EVET",C:"HARAÇ-ÖLÇÜLEMEDİ (ⓒ — "+g+")"}[kova]
        r["metin"]+=" · HARAÇ ≠ DEVİR: "+kova+" — "+g+(" ⇒ v:asur DİLİMİ KANITI" if kova==B else "")
        c[kova]+=1
    elif hd.startswith("EVET"): c["DEVIR"]+=1
    else: c["AKIN-yikim"]+=1
    a=atif(r["polity"]); r["kapsam_disi"]="EVET" if a else "HAYIR"; r["atif_dilim"]=a; r["sahip_dilim"]="K1 MEZOPOTAMYA"
    r["tarih_turu"]="OLAY"; r.setdefault("akin_sonrasi","")
    KR.append({k:r.get(k,"") for k in cols})
# önceki C kovası: 616 Suhu/Hindanu haracı (Nabopolassar) — aynı kural
for k in KR:
    if k["tarih"].startswith("-616-01-01") and k["polity"]=="suhu" and k["harita_degisimi"]=="EVET":
        k["harita_degisimi"]="AKIN (HARAÇ ⓐ tek seferlik — Nabopolassar seferi sırasında haraç; süreklilik beyanı yok)"; c["C616->a"]+=1
w=csv.DictWriter(open(D+"-KRONOLOJI.csv","w",encoding="utf-8",newline=""),fieldnames=cols); w.writeheader(); [w.writerow(k) for k in KR]
print(dict(c),"toplam",len(KR))
cc=collections.Counter(k["harita_degisimi"].split(" (")[0] for k in KR); print(dict(cc))
print("EVET kapsam ici",sum(1 for k in KR if k["harita_degisimi"]=="EVET" and k["kapsam_disi"]=="HAYIR"),"disi",sum(1 for k in KR if k["harita_degisimi"]=="EVET" and k["kapsam_disi"]=="EVET"))
