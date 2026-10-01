import json, re, sys, collections
sys.stdout.reconfigure(encoding='utf-8')
E = json.load(open('./evren.json', encoding='utf-8'))
M = E['maddeler']
QRE = re.compile(r'«([^»]{20,})»|“([^”]{20,})”|"([^"]{20,})"|\'([^\']{25,})\'|‘([^’]{25,})’')
def quotes(s):
    qs = [m.group(1) for m in re.finditer(r"alıntı: '(.+?)'(?= ·|$| —| \()", s)]
    qs += [next(g for g in m.groups() if g) for m in QRE.finditer(s)]
    return list(dict.fromkeys(q for q in qs if 'http' not in q and 'alıntı:' not in q and len(q.strip()) >= 20))
# alıntı parçalarını kaynağa göre ayır: ' · ' ile bölünmüş her segment
tdv_q, other_q = [], []
for m in M:
    for seg in re.split(r' · | ## ', m['kaynak']):
        qs = quotes(seg)
        if not qs: continue
        has_url = bool(re.search(r'https?://|\.(com|org|edu|gov|net|de|fr|it|hr|no|dk|pl|tr)\b/', seg))
        if re.search(r'\bTDV\b|islamansiklopedisi', seg):
            # 🔴 KURAL (YZ-KIRLENME-1001 EK 4): alıntının sahibi, alıntının HEMEN ÖNÜNDEKİ atıftır —
            # segmentin İLK slug'ı DEĞİL. İlk sürüm (u or sl)[0] alıyordu ve 10 temiz kaydı
            # "yanlış maddeye yazılmış" saydı (ermeni#8, gurcistan#7/24/28, once1281_ortadogu#92…).
            # Ayrıca önünde TDV değil BAŞKA bir eser varsa (ör. Hrvatska), alıntı TDV'ye yazılmaz.
            atif = [(mm.start(), mm.group(1) or mm.group(2)) for mm in re.finditer(
                r'islamansiklopedisi\.org\.tr/([a-z0-9\-]+)|TDV[:\s—\-]*[`\'«"(]?([a-z0-9]+(?:-{1,2}[a-z0-9]+)*)', seg)]
            baska = [mm.start() for mm in re.finditer(r'https?://(?!islamansiklopedisi)', seg)]
            for q in qs:
                p = seg.find(q)
                once = [a for a in atif if a[0] < p]
                slug = once[-1][1] if once else None
                if slug and any(once[-1][0] < b < p for b in baska): slug = None   # arada başka eserin URL'si var
                tdv_q.append({'k': m['f'][14:-3] + '#' + str(m['i']), 'slug': slug, 'q': [q], 'url': has_url})
        elif not has_url:
            other_q.append({'k': m['f'][14:-3] + '#' + str(m['i']), 'seg': seg[:220], 'q': qs,
                            'ic': m['ic_not_kaynak'][:300]})
print('TDV alıntılı segment', len(tdv_q), '| slug çıkarılabilen', sum(1 for x in tdv_q if x['slug']), '| farklı slug', len(set(x['slug'] for x in tdv_q if x['slug'])))
print('URL-SİZ, TDV-DIŞI alıntılı segment', len(other_q), '| madde', len(set(x['k'] for x in other_q)))
def yontem(x):
    s = (x['seg'] + ' ' + x['ic']).lower()
    if re.search(r'arama özet|search özet|özetinden|özetiyle|websearch', s): return 'ARAMA-ÖZETİ (beyanlı)'
    if re.search(r'webfetch', s): return 'WEBFETCH (beyanlı)'
    if re.search(r'gövde (açıl|okun)|sayfa (açıl|okun)|açıldı|okundu|tam metin|pdf', s): return 'AÇILDI (beyanlı)'
    if re.search(r'açılmadı|açılamadı|sayfa verilmedi', s): return 'AÇILMADI (beyanlı)'
    return 'BEYANSIZ'
c = collections.Counter(yontem(x) for x in other_q)
print(c)
byf = collections.Counter(x['k'].split('#')[0] for x in other_q if yontem(x) == 'BEYANSIZ')
print('beyansız, dosya başına:', byf.most_common(15))
for x in [x for x in other_q if yontem(x) == 'BEYANSIZ'][:12]: print('  ', x['k'], '|', x['seg'][:160])
json.dump({'tdv_q': tdv_q, 'other_q': [{**x, 'yontem': yontem(x)} for x in other_q]}, open('./kova3.json', 'w', encoding='utf-8'), ensure_ascii=False)
