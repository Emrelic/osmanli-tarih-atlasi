# EKOKUMA-BAG-0921 — YAMA 1: yil-damgasi / paylasilan-gun MIKNATISI
#
# Tesbit: C kovasindaki 85 ciftin 56'si SICRAMA — kartin dogru hedefi AYNI bag
# degerinde zaten A kovasinda duruyor, ama bag AYIRT EDICISIZ oldugu icin ayni
# gunu paylasan ilgisiz maddelere de dusuyor.  Mekanizma zaten var:
# _ekBagEslesir  "YYYY-AA-GG|ayirt edici"  okur ve ayirt ediciyi maddenin
# BASLIGINDA (o.b) arar.  Kart SILINMEZ, yalniz bagina ayirt edici eklenir.
#
# Her ayirt edici, o bagin A-hedefinin basliginda GECTIGI dogrulanarak secildi
# (_ekNorm: Turkce harf + aksan + kesme isareti duzlestirir).
import io, re, sys
sys.stdout.reconfigure(encoding='utf-8')

YAMA = [
    # (dosya, kart id, eski olay satiri degeri, yeni deger, gerekce)
    ('data/ekokuma_toplum.js', 'hanedan-evlilik-cariyelik-nikahi',
     '["1534-01-01"]', '["1534-01-01|Hürrem"]',
     'A-hedef: "Kanuni - Hurrem Sultan nikahi"; 5 ilgisiz madde (Brezilya kaptanliklari vb.) dusecek'),
    ('data/ekokuma_toplum.js', 'osmanli-ingiliz-ticaret-mekanizmasi-1580',
     '["1580-01-01"]', '["1580-01-01|İngiliz"]',
     'A-hedefler: "Ingiltere ile ilk ticaret ahidnamesi..." ve "Ilk Ingiliz-Osmanli ahidnamesi"'),
    ('data/ekokuma_toplum.js', 'hat-sanati-sheyh-hamdullah-hafiz-osman',
     '["1520-01-01","1695-01-01"]', '["1520-01-01|Hamdullah","1695-01-01|Hâfız Osman"]',
     'A-hedefler: "Seyh Hamdullah\'in vefati..." ve "Hafiz Osman\'in II. Mustafa\'ya hat hocasi tayini"'),
    ('data/ekokuma_dunya.js', 'dunya-hurmuz-bogazi-onemi',
     '["1414-01-01"]', '["1414-01-01|Hürmüz"]',
     'A-hedef: "Zheng He\'nin dorduncu seferi Hurmuz ve Dogu Afrika\'ya ulasti"'),
    ('data/ekokuma_vezir.js', 'tartisma-evliya-celebi-guvenilirlik',
     '["1632-01-01"]', '["1632-01-01|Evliya Çelebi"]',
     'A-hedef: "Lagari Hasan Celebi\'nin roketle ucusu - Evliya Celebi\'nin tek kaynaklik ettigi rivayet"'),
    ('data/ekokuma_vezir.js', 'tartisma-candarli-halil-pasa-idami',
     '["1453-06-01"]', '["1453-06-01|Çandarlı"]',
     'A-hedef: "Candarli Halil Pasa\'nin azli ve idami"'),
    ('data/ekokuma_vezir.js', 'magazin-ipsir-mustafa-pasa-deyyus',
     '["1648-05-01"]', '["1648-05-01|Varvar"]',
     'A-hedef: "Varvar Ali Pasa\'nin Sivas\'tan baskaldirisi" (Ipsir\'in bastirdigi isyan)'),
    ('data/ekokuma_rivayet.js', 'teknik-kesfuzzunun-katib-celebi',
     '["1633-01-01"]', '["1633-01-01|Kâtib Çelebi"]',
     'A-hedef: "Katib Celebi\'nin Kesfu\'z-Zunun icin Halep\'te arastirmaya baslamasi"'),
    ('data/ekokuma_rivayet.js', 'kimdir-katib-celebi',
     '["1633-01-01","1654-12-01","1657-10-06"]',
     '["1633-01-01|Kâtib Çelebi","1654-12-01","1657-10-06"]',
     'ayni A-hedef; oteki iki bag tam gun, dokunulmadi'),
    ('data/ekokuma_rivayet.js', 'teknik-dogu-afrika-eyaletleri-idari-yapi',
     '["1517-01-22|Ridaniye","1557-01-01","1559-01-01"]',
     '["1517-01-22|Ridaniye","1557-01-01|Habeş","1559-01-01|Habeş"]',
     'A-hedefler: "Habes Eyaleti\'nin kurulusu" ve "Zeyla\'nin Habes Eyaleti\'ne katilmasi"'),
    ('data/ekokuma_rivayet.js', 'kimdir-itri',
     '["1711-01-01"]', '["1711-01-01|Itrî"]',
     'A-hedef: "Itri\'nin vefati"'),
    ('data/ekokuma_padisah.js', 'tartisma-padisahlar-hac-gitmemesi',
     '["1622-05-20"]', '["1622-05-20|Genç Osman"]',
     'A-hedef: "Genc Osman\'in yeniceriler tarafindan katledilmesi" (hac niyeti bahane edilmisti)'),
    ('data/ekokuma.js', 'zimmi-cizye-millet-duzeni',
     '["1453-05-29","1839-11-03","1856-02-18"]',
     '["1453-05-29|İstanbul","1839-11-03","1856-02-18"]',
     'A-hedefler: "Istanbul\'un Fethi" ve "Istanbul\'un fethi - Levant duzeninin cokusu"'),
    # --- BAG TASINDI: 1609 tutun yasagi maddesi kronolojide YOK (dort hedefin
    #     dordu de ilgisiz).  Emre\'nin izni: sahipsiz kart en yakin ANLAMLI
    #     maddeye baglanir.  Kartin kendi `sonuc` alani zaten 1633 IV. Murad
    #     yasagini anlatiyor; o madde kronolojide VAR (olaylar_ek7.js:74).
    ('data/ekokuma_toplum.js', 'tutun-yasagi-kaldirilmasi',
     '["1609-01-01"]', '["1633-10-01|tütün"]',
     'TASINDI — 1609 bagi 4 ilgisiz maddeye dusuyordu, 1609 tutun maddesi YOK'),
]

bas = re.compile(r'^\s*\{\s*id:"')
degisen = {}
for dosya, kid, eski, yeni, gerekce in YAMA:
    metin = io.open(dosya, encoding='utf-8').read()
    L = metin.split('\n')
    yer = None
    for i, l in enumerate(L):
        if 'id:"' + kid + '"' in l:
            j = i
            while j < len(L) and j < i + 40:
                if 'olay:' + eski in L[j].replace(' ', '') or ('olay:' in L[j] and eski in L[j]):
                    yer = j
                    break
                if j > i and bas.match(L[j]):
                    break
                j += 1
            break
    if yer is None:
        print('🔴 BULUNAMADI: %s / %s  (%s)' % (dosya, kid, eski))
        sys.exit(1)
    if eski not in L[yer]:
        print('🔴 DIZGI TUTMADI: %s:%d  %s' % (dosya, yer + 1, L[yer].strip()[:120]))
        sys.exit(1)
    L[yer] = L[yer].replace(eski, yeni, 1)
    degisen.setdefault(dosya, []).append((kid, yer + 1, eski, yeni, gerekce))
    io.open(dosya, 'w', encoding='utf-8', newline='').write('\n'.join(L))

for dosya, kayitlar in degisen.items():
    print('== ' + dosya)
    for kid, satir, eski, yeni, gerekce in kayitlar:
        print('   %-46s :%d' % (kid, satir))
        print('      %s  ->  %s' % (eski, yeni))
        print('      %s' % gerekce)
print('\nTOPLAM %d bag satiri degisti, %d dosya.' % (sum(len(v) for v in degisen.values()), len(degisen)))
