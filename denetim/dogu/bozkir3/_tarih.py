import sys,io,importlib.util
spec=importlib.util.spec_from_file_location('cal','../cin2/_cal.py')
# _cal.py stdout'u sarar; once kendi stdout'umuzu sarmadan yukleyelim
cal=importlib.util.module_from_spec(spec); spec.loader.exec_module(cal)
def j(y,m,d): return cal.jdn_jul(y,m,d)
def d(jd): return '%04d-%02d-%02d'%cal.jul(jd)
print('gz 0648-12-20', cal.gz(j(648,12,20)))
print('gz 0649-01-19', cal.gz(j(649,1,19)))
# 649-01-19 + 34 gun
print('649-01-19+34', d(j(649,1,19)+34), cal.gz(j(649,1,19)+34))
for (y,m,g,lp) in [(647,12,'戊寅',False),(437,11,'甲申',False),(675,1,'丙寅',False),(675,1,'丙寅',True)]:
    print(y,m,g,lp,[d(x) for x in cal.find(y,m,g,lp)])
print('ay 670-04', [ (n,lp,d(s)) for (n,lp,s,e) in cal.months(670) if n==4])
print('ay 692-10', [ (n,lp,d(s)) for (n,lp,s,e) in cal.months(692) if n==10])
print('ay 675-01', [ (n,lp,d(s)) for (n,lp,s,e) in cal.months(675) if n==1])
print('ay 673-12', [ (n,lp,d(s)) for (n,lp,s,e) in cal.months(673) if n==12])
print('ay 673-12 (674 yili)', [ (n,lp,d(s)) for (n,lp,s,e) in cal.months(674) if n==12])
# tabular hijri -> julian: 1 Muharram yil
# tabular (sivil) Hicri: JDN(1 Muharram 1 AH)=1948440
def hijri_jdn(y,m,dd):
    return (dd + int((29.5*(m-1))+0.5+1e-9) + (y-1)*354 + (3+11*y)//30 + 1948439)
for (y,m,dd,ad) in [(133,12,1,'Zilhicce 133'),(133,1,1,'Muharrem 133'),(121,9,1,'Ramazan 121'),(94,1,1,'94'),(54,1,1,'54'),(260,1,1,'260'),(191,1,1,'191'),(204,1,1,'204'),(96,1,1,'96'),(87,1,1,'87'),(90,1,1,'90'),(110,1,1,'110'),(121,1,1,'121'),(159,1,1,'159'),(168,1,1,'168'),(389,1,1,'389'),(91,1,1,'91')]:
    print(ad, d(hijri_jdn(y,m,dd)))
