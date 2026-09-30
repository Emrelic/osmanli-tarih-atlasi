# YERLESIM-1281-ONCE · adım B — A çıktısından yalnız EL DEĞİŞTİRME fiilli 1180-1280 cümleleri
# (insan okuması için kısa döküm). data/'ya yazmaz.
import sys, json, re
sys.stdout.reconfigure(encoding='utf-8')
A = json.load(open(sys.argv[1], encoding='utf-8'))
FIIL = re.compile(r'(geçti|geçen|aldı|alındı|alan |fethe|fetih|ele geçir|hâkimiyet|katıl|kattı|ilhak|teslim|zapt|idaresine|egemenli|eline|tâbi|yönetimine|sınırları)', re.I)
for i, x in enumerate(A):
    c = [s for s in x['aday_1180_1280'] if FIIL.search(s)]
    d = x['ilk_donem']
    print(f"#{i} {x['ad']} [{d.get('d')} {d.get('f')}]")
    for s in c[:4]:
        print('   -', s[:260])
