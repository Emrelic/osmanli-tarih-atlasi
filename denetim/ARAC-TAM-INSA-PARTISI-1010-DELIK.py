"""K2 DELIK-SIM'in TEKRARI + iki genisleme (motor KOSTURULMAZ, uret_petek ITHAL EDILMEZ).
Yontem K2 ile birebir: duz Voronoi · kara=veri-kaynak/motor_kara.geojson · bolge 26-38K 38-54D ·
_kusatilmis olcutu (kiyi-disi sinirin sahipli+sahnedeki komsulara payi >= 0.90).
Senaryo A: BUGUNKU motor kurali (yama YOK — yama diff'i BULUNAMADI).
Senaryo B: VARSAYIMSAL motor yamasi (a) TEK ADIM: sahnede olmayan, sahipsiz, bos: tasimayan petek,
           sahipli+sahnede bir komsuya DOKUNUYORSA devredilir (esik yok).
Senaryo C: (a) GECISLI: devredilen petek bir sonraki turda komsusuna 'sahipli' sayilir (zincir).
Evren: argv[1] agacinin girdi.yukle()'si (ANA burada) + istege bagli B10 noktalari (argv[2] = B10.diff)."""
import json, os, sys, re, io, contextlib
sys.stdout.reconfigure(encoding='utf-8')
import shapely
from shapely.geometry import Point, box, shape, MultiPoint
from shapely.ops import unary_union
WT=sys.argv[1]; sys.path.insert(0, os.path.join(WT,'arac')); os.chdir(WT)
import girdi
with contextlib.redirect_stdout(io.StringIO()): Y=girdi.yukle(sessiz=True)
Y=Y[0] if isinstance(Y,tuple) else Y
EK=[]
if len(sys.argv)>2:
    for ln in open(sys.argv[2],encoding='utf-8'):
        if ln.startswith('+') and 'ad:"' in ln and 'lat:' in ln:
            g=lambda k: (re.search(k+r':"([^"]*)"',ln) or [None,None])[1]
            EK.append({'ad':g('ad'),'lat':float(re.search(r'lat:\s*(-?[\d.]+)',ln)[1]),'lon':float(re.search(r'lon:\s*(-?[\d.]+)',ln)[1]),
                       's':[],'d':[],'v':[],'kur':g('kur'),'bit':g('bit')})
BOLGE=box(38,26,54,38)
kara=json.load(open('veri-kaynak/motor_kara.geojson',encoding='utf-8'))
KARA=unary_union([shape(f['geometry']) for f in kara['features'] if shape(f['geometry']).intersects(BOLGE)]).intersection(BOLGE)
KIYI=KARA.boundary.difference(BOLGE.boundary).buffer(0.01)
def sahipli(y,g): return any(p['f']<=g<p['t'] for k in ('d','v','s') for p in (y.get(k) or []))
def var(y,g):
    # gun.Tarih yerine dizgi: buradaki karsilastirmalar hep (negatif|0xxx) <-> 1xxx, dizgi dogru
    return not ((y.get('kur') and y['kur']>g) or (y.get('bit') and y['bit']<=g))
bolge_Y=[y for y in Y if 38<=y['lon']<=54 and 26<=y['lat']<=38]
yeni_ad={y['ad'] for y in bolge_Y if y.get('bit') and y['bit']<'1000' and not y.get('s') and not y.get('d') and not y.get('v')}
N=bolge_Y+EK
for y in N: y['_yeni']=(y['ad'] in yeni_ad) or (y in EK)
print('bolge atlas noktasi',len(bolge_Y),'· sahnesiz-sahipsiz aday (agacta)',len(yeni_ad),'· B10 eki',len(EK))
pts=[(y['lon'],y['lat']) for y in N]
vor=shapely.voronoi_polygons(MultiPoint(pts),extend_to=BOLGE)
hucre=[None]*len(N)
for poly in vor.geoms:
    for i,p in enumerate(pts):
        if hucre[i] is None and poly.contains(Point(p)): hucre[i]=poly.intersection(KARA); break
km2=lambda c: c.area*111.32*94.9
def komsu(i,j): return hucre[j] is not None and hucre[j].intersects(hucre[i].buffer(0.02))
for g in ['1000-06-15','1300-06-15','1600-06-15','1900-06-15']:
    aday=[i for i,y in enumerate(N) if y['_yeni'] and not var(y,g) and not sahipli(y,g) and not y.get('bos') and hucre[i] is not None and not hucre[i].is_empty]
    dolu={j for j,y in enumerate(N) if var(y,g) and sahipli(y,g) and hucre[j] is not None}
    # A
    A=[]
    for i in aday:
        c=hucre[i]; ic=c.boundary.difference(KIYI); sah=[hucre[j] for j in dolu if j!=i and komsu(i,j)]
        pay=0.0
        if ic.length>1e-9 and sah: pay=min(ic.intersection(unary_union(sah).buffer(0.002)).length/ic.length,1.0)
        if pay<0.90: A.append((N[i]['ad'],round(pay,2),round(km2(c))))
    # B tek adim
    B=[(N[i]['ad'],round(km2(hucre[i]))) for i in aday if not any(komsu(i,j) for j in dolu)]
    # C gecisli
    kalan=set(aday); dd=set(dolu); tur=0
    while True:
        dev={i for i in kalan if any(komsu(i,j) for j in dd)}
        if not dev: break
        kalan-=dev; dd|=dev; tur+=1
    C=[(N[i]['ad'],round(km2(hucre[i]))) for i in kalan]
    print(f"\n{g}: aday {len(aday)}")
    print(f"  A BUGUNKU KURAL  : BOS {len(A)} · ~{sum(t[2] for t in A):,} km²")
    for t in sorted(A,key=lambda t:-t[2]): print('      BOS',t)
    print(f"  B YAMA tek adim  : BOS {len(B)} · ~{sum(t[1] for t in B):,} km²", B)
    print(f"  C YAMA gecisli   : BOS {len(C)} · ~{sum(t[1] for t in C):,} km² · zincir turu {tur}", C)
