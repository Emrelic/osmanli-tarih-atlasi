import sys, os, csv, io, contextlib
kok = sys.argv[1]; cik = sys.argv[2]
sys.path.insert(0, kok + '/arac')
os.chdir(kok)
with contextlib.redirect_stdout(io.StringIO()):
    import denetle as D
    Y = D.yerlesimleri_yukle()
    O = D.olaylari_yukle()
Yc = [y for y in Y if y.get('_kaynak') not in D.KUYRUK_DOSYALARI]
with contextlib.redirect_stdout(io.StringIO()):
    kir_s, acik_ham = D.degismez2(Yc, O, ('s',), yer_sarti=True)
    acik_kapsam, disi = D.kapsam_disi(Y, acik_ham)
    borc, acik = D.yil_temsili_ayir(acik_kapsam)
print('acik', len(acik), 'yil-temsili', len(borc))
with open(cik + '/d2s_acik.tsv', 'w', encoding='utf-8', newline='') as fh:
    w = csv.writer(fh, delimiter='\t')
    for k in acik:
        w.writerow([str(x)[:400] for x in k])
print(repr(acik[0])[:600] if acik else '')
