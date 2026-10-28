# -*- coding: utf-8 -*-
# koja1 Kore yarisi: alinti yardimcilari (alinti dosyadan BIREBIR cekilir; bulunamazsa hata)
import os, re, io, sys
D = os.path.join(os.path.dirname(os.path.abspath(__file__)), '_kaynak')
DISP = {
    '三國史記': 'Kim Busik, Samguk sagi', '高麗史': 'Goryeosa (Jeong Inji vd.)', '日本書紀': 'Nihon Shoki',
    '舊唐書': 'Jiu Tangshu', '新唐書': 'Xin Tangshu', '資治通鑑': 'Sima Guang, Zizhi tongjian', '遼史': 'Liao shi',
    '三國遺事': 'Iryeon, Samguk yusa',
}
_cache = {}
def _text(fn):
    if fn not in _cache:
        _cache[fn] = open(os.path.join(D, fn), encoding='utf-8').read()
    return _cache[fn]
def etiket(fn):
    m = re.match(r'zh_(.+?)_(.+)\.txt$', fn)
    X, Y = m.group(1), m.group(2)
    return '%s %s (zh.wikisource.org/wiki/%s/%s, okundu)' % (DISP[X], Y, X, Y)
def q(fn, start, end=None):
    """fn dosyasinda start..end (end dahil) araligini birebir alir; tek satir icinde olmali"""
    t = _text(fn)
    i = t.find(start)
    if i < 0:
        raise SystemExit('ALINTI BULUNAMADI: %s | %s' % (fn, start))
    if end is None:
        j = i + len(start)
    else:
        j = t.find(end, i)
        if j < 0:
            raise SystemExit('ALINTI SONU BULUNAMADI: %s | %s' % (fn, end))
        j += len(end)
    s = t[i:j]
    if '\n' in s:
        raise SystemExit('ALINTI SATIR ASIYOR: %s | %s' % (fn, start))
    return s
def kaynak(*specs):
    """specs: (fn, start, end?) -> 'Etiket: «alinti» · Etiket: «alinti»'"""
    out = []
    for sp in specs:
        fn = sp[0]
        out.append('%s: «%s»' % (etiket(fn), q(*sp)))
    return ' · '.join(out)
