import io, json, os, re, sys
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')
KOK = os.path.abspath(os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', '..'))
sys.path.insert(0, os.path.join(KOK, 'arac'))
import girdi
# json.loads'u yakalayıp hata bağlamını yazdır
orj = json.loads
def yakala(s, *a, **k):
    try:
        return orj(s, *a, **k)
    except ValueError as e:
        p = getattr(e, 'pos', 0)
        print('HATA', e)
        print(repr(s[max(0, p - 300):p + 200]))
        raise
json.loads = yakala
try:
    girdi.oku_devletler()
    print('tamam')
except SystemExit as e:
    print('SystemExit', str(e)[:100])
