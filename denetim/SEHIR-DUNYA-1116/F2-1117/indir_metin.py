# -*- coding: utf-8 -*-
"""archive.org AÇIK ERİŞİMLİ (access-restricted-item yok) kitapların YALNIZ *_djvu.txt dosyasını, her biri YENİ boş klasöre indirir (scratchpad; depoya girmez).
Emre'nin kendi sohbetinde verdiği yazılı kitap-indirme izni (17 Kasım 2026) kapsamında; koşullar: akademik/arşiv kaynak, çalıştırma yok, metin çıkarma, CAPTCHA/koruma aşılmaz.
Kullanım: py indir_metin.py <hedef_kok> <id> [<id> ...] ; rapor: id, ad, boyut, URL."""
import io, json, os, sys, urllib.request
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')
kok = sys.argv[1]
for i in sys.argv[2:]:
    try:
        m = json.load(urllib.request.urlopen('https://archive.org/metadata/' + i, timeout=60))
        if m.get('metadata', {}).get('access-restricted-item'):
            print(i, 'KISITLI (ödünç) — ATLANDI'); continue
        f = [x for x in m.get('files', []) if x['name'].endswith('_djvu.txt')]
        if not f: print(i, 'djvu.txt yok'); continue
        d = os.path.join(kok, i.replace('/', '_'))
        os.makedirs(d, exist_ok=False)
        url = 'https://archive.org/download/' + i + '/' + urllib.request.quote(f[0]['name'])
        b = urllib.request.urlopen(url, timeout=180).read()
        open(os.path.join(d, 'metin_djvu.txt'), 'wb').write(b)
        print(i, '|', (m['metadata'].get('title') or '')[:70], '|', len(b), 'bayt |', url)
    except Exception as e:
        print(i, 'HATA', e)
