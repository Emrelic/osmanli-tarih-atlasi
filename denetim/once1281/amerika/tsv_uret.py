import json, re, io, sys
K = json.load(open('denetim/once1281/amerika/kunyeler.json', encoding='utf8'))
satir = ['id\tf\tt\tBOYALAR\tboya_gerekli_bayrak\ton1281_yerlesim_penceresi\tnot']
mukerrer = {'tikal-mutal': 'MÜKERRER tikal-mutul', 'tiwanaku': 'MÜKERRER tiwanaku-devleti (nokta onu kullanır)', 'chimu': 'MÜKERRER chimu-krallik',
            'maya-klasik': 'çatı künye; nokta yok (devlet-şehir künyeleri boyar)', 'maya-sehir-devletleri': 'Post-Klasik çatı; 1281 sonrası, noktalar ayrı ajanda',
            'spiro': 'künye kaynağı bulunamadı; nokta var (1281 sonrası pencere), ön-1281 pencere YAZILMADI', 'ceibal': 'Ceibal noktası yalnız Orta Preklasik penceresi taşıyor; 411-889 pencere + MÖ-MS arası beyanlı boşluk borç',
            'norse-gronland': 'ön-1281 nokta yok (Brattahlíð/Garðar kaynağı okunmadı)', 'inuit': 'Thule ön-1281 pencere borç (künye kaynağı bulunamadı)',
            'taino-seflikleri': '1200-1281 penceresi borç (nokta var, pencere 1281\'de başlıyor)', 'natchez': '1250-1281 pencere borç', 'azcapotzalco-tepanek': 'Azcapotzalco noktasının 1230-1281 penceresi borç'}
for l in open('denetim/once1281/amerika/olc_sonra.txt', encoding='utf-8', errors='ignore'):
    m = re.match(r'^(\S+) \| (boya|BOYASIZ) \| yerlesim_on1281 (\d+)(.*)$', l.strip())
    if not m: continue
    i = m.group(1); k = K[i]
    satir.append('\t'.join([i, k['f'], str(k['t']), 'evet' if m.group(2) == 'boya' else 'HAYIR', 'true' if 'bg' in m.group(4) else '', m.group(3), mukerrer.get(i, '')]))
open('denetim/BOYA-AMERIKA-ONCE1281-1029.tsv', 'w', encoding='utf-8').write('\n'.join(satir) + '\n')
print(len(satir) - 1)
