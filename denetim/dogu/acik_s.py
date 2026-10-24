"""Değişmez 2s AÇIK kırılmaların listesi (denetle.py --ayrinti basmıyor). Kullanım: py denetim/dogu/acik_s.py [önceki_liste.txt]
Çıktı: her AÇIK için tarih · yerler · en yakın madde. Önceki liste verilirse yalnız YENİ olanlar işaretlenir."""
import io, os, sys, json
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')
KOK = os.path.abspath(os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', '..'))
sys.path.insert(0, os.path.join(KOK, 'arac'))
sys.argv = ['denetle.py']
import denetle as D

Y = D.yerlesimleri_yukle() if hasattr(D, 'yerlesimleri_yukle') else None
O = D.olaylari_yukle()
if Y is None:
    print('yerlesimleri_yukle yok; elle bul'); sys.exit(2)
Yc = [y for y in Y if y.get('_kaynak') not in D.KUYRUK_DOSYALARI]
kir_s, acik_ham = D.degismez2(Yc, O, ("s",), yer_sarti=True)
acik_kapsam, disi_s = D.kapsam_disi(Y, acik_ham)
yil_borc_s, acik_s = D.yil_temsili_ayir(acik_kapsam)
print('AÇIK', len(acik_s), 'tavan', D.BEKLENEN_ACIK_S)
out = []
for a in acik_s:
    out.append(json.dumps(a, ensure_ascii=False, default=str)[:400])
for x in out:
    print(x)
