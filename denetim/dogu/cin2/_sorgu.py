import json,sys,io,math
sys.stdout=io.TextIOWrapper(sys.stdout.buffer,encoding='utf-8')
Y=json.load(open('denetim/dogu/yer_indeks.json',encoding='utf-8'))
# bbox Çin/Kore/Yunnan
for y in Y:
    if 20<y['lat']<46 and 98<y['lon']<131:
        print('%s|%.3f|%.3f|k%s|%s|%s'%(y['ad'],y['lat'],y['lon'],y['k'],y['kur'],','.join(y['devletler'][:4])))
