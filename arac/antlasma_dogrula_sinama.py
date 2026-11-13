# -*- coding: utf-8 -*-
"""İKİ YÖNLÜ SINAMA (CLAUDE.md: yeni denetim iki yönde sınanmadan çalışıyor sayılmaz):
bilerek bozuk kayıt ihlal VERMELİ; iyi kayıt vermemeli. py arac/antlasma_dogrula_sinama.py (çıkış 0 = sınama geçti)."""
import os
import sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import antlasma_dogrula as D  # noqa: E402

maddeler = [{"t": "1774-07-21", "b": "Küçük Kaynarca — Memleketeyn'e af", "tur": "antlasma", "aid": "", "d": "X"},
            {"t": "1774-07-22", "b": "Başka bir olay", "tur": "savas", "aid": "", "d": "X"}]
iyi = {"id": "kk-1774", "ad": "Küçük Kaynarca Antlaşması", "anahtarlar": ["Küçük Kaynarca"], "t": "1774-07-21",
       "kadraj": [20, 38, 45, 48], "kaynak": "TDV küçük kaynarca", "yerler": {"Kerç": [36.4, 45.4]},
       "adimlar": [{"no": "1", "ozet": "Kırım Hanlığı bağımsız sayıldı; Kerç Rusya'ya bırakıldı.", "yer": ["Kerç"]}]}
hatalar = []


def kontrol(ad, k, ihlal_bekle):
    ihlal, _u = D.denetle_kayit(dict(k), maddeler, False)
    ok = (len(ihlal) > 0) == ihlal_bekle
    print("%s %s: ihlal %d (beklenen %s)" % ("✓" if ok else "✗", ad, len(ihlal), "var" if ihlal_bekle else "yok"))
    if not ok:
        hatalar.append(ad)


kontrol("iyi kayıt", iyi, False)
kontrol("ad eşleşmez (anahtarlar yok)", dict(iyi, anahtarlar=[], ad="Küçük Kaynarca Muahedesi"), True)   # eslesen yakalamaz
kontrol("yer yok", dict(iyi, adimlar=[{"no": "1", "ozet": "Kırım Hanlığı bağımsız sayıldı; Kerç bırakıldı.", "yer": ["Yok Şehir"]}]), True)
kontrol("kaynak yok", dict(iyi, kaynak=""), True)
kontrol("yinelenen no", dict(iyi, adimlar=iyi["adimlar"] * 2), True)
kontrol("kısa özet", dict(iyi, adimlar=[{"no": "1", "ozet": "kısa", "yer": ["Kerç"]}]), True)
kontrol("kadraj ters", dict(iyi, kadraj=[45, 38, 20, 48]), True)
kontrol("kronoloji ±30g yok", dict(iyi, t="1500-01-01"), True)
sys.exit(1 if hatalar else 0)
