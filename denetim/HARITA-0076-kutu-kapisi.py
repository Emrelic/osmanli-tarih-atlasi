# -*- coding: utf-8 -*-
"""HARITA-0076 — KAPI ADAYI: "ekranda opak dikdörtgen çizen C kaydı var mı?"

Sınıfın kendisini soran tek soruluk denetim. 15 Eylül 2026'da bu kusur
`karlofca-bosna-sava-1699` kaydında tek tek çözüldü, SINIFA sorulmadı;
sekiz gün sonra aynı şikâyet üç kayıtla geri geldi (H-0096 · H-0139 ·
H-0147 · H-0148).

ÇİZER mi? — `js/app.js:7346` `_cKapsamaPoligonu`:
    tur == "poligon" ve nokta_dizisi DOLU  -> poligon çizilir (kutu kullanılmaz)
    kutu var                               -> DİKDÖRTGEN çizilir
ve `js/app.js:7400`: `kapsama.dolgu === false` -> yalnız hat, dolgu yok.

⇒ opak dikdörtgen = kutu var · dolgu false değil · (poligon dalı devrede değil)

İKİ YÖNDE SINANDI (CLAUDE.md §11):
  pozitif — bugün 3 kayıt bulur (ii-erzurum · midye-enez · misir-sudan)
  negatif — `dolgu: false` taşıyan karlofca-bosna-sava'yı BULMAZ
"""
import io
import json
import re
import sys

sys.stdout.reconfigure(encoding='utf-8')
YOL = r'C:\atlas\data\hukuki_sinirlar.js'


def kayitlar(metin):
    """id: "..."  ile başlayan her kaydın id'sini ve kapsama bloğunu verir."""
    out = []
    for m in re.finditer(r'\n  id:\s*"([^"]+)"', metin):
        kid = m.group(1)
        son = metin.find('\n  id:', m.end())
        govde = metin[m.end():son if son > 0 else len(metin)]
        k = govde.find('kapsama:')
        out.append((kid, _blok(govde, k) if k >= 0 else ''))
    return out


def _blok(metin, k):
    """`kapsama:` sonrası DENGELİ süslü parantez bloğu.

    İlk sürüm sabit 1400 karakter kesiyordu ve `ferhad-pasa-istanbul-1590`
    (kapsama'sı tek satır, kutusuz) BİR SONRAKİ kaydın `kutu:`sunu yutup
    yanlışlıkla "dikdörtgen çiziyor" sayıldı. Öngörü 3 demişti, alet 4
    dedi — fark aletin kendisindeydi. Denetim var ≠ o soruyu soruyor.
    """
    a = metin.find('{', k)
    if a < 0:
        return ''
    derinlik = 0
    for i in range(a, len(metin)):
        if metin[i] == '{':
            derinlik += 1
        elif metin[i] == '}':
            derinlik -= 1
            if derinlik == 0:
                return metin[k:i + 1]
    return metin[k:]


def main():
    metin = io.open(YOL, encoding='utf-8').read()
    kutulu, cizen, muaf = [], [], []
    for kid, kap in kayitlar(metin):
        # 🔴 `odak_kutu:` DOLGU DEĞİLDİR — arayüzün odak dikdörtgeni
        # (js/app.js:11488). Düz `'kutu:' in kap` testi onu da yakalıyor ve
        # `ferhad-pasa-istanbul-1590`u yanlışlıkla suçlu sayıyordu.
        if not re.search(r'(?:^|[\s{,])kutu:', kap):
            continue
        kutulu.append(kid)
        if re.search(r'dolgu:\s*false', kap):
            muaf.append((kid, 'dolgu:false'))
            continue
        if re.search(r'tur:\s*"poligon"', kap) and 'nokta_dizisi' in kap:
            muaf.append((kid, 'poligon dalı'))
            continue
        cizen.append(kid)

    print('C kaydı · kutu taşıyan        :', len(kutulu))
    print('MUAF (dikdörtgen çizmez)      :', len(muaf))
    for k, n in muaf:
        print('    ⚪', k, '—', n)
    print('🔴 OPAK DİKDÖRTGEN ÇİZEN      :', len(cizen))
    for k in cizen:
        print('    🔴', k)
    print()
    print('BEKLENEN (23 Eylül 2026, yama ÖNCESİ): 3 çizen · 2 muaf')
    print('yama SONRASI hedef: 0 çizen, ya da her biri BEYANLI')
    return 0 if not cizen else 1


if __name__ == '__main__':
    sys.exit(main())
