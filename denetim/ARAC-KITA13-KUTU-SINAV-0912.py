# -*- coding: utf-8 -*-
"""KITA 13 — KOORDINATORUN KUTULARINI BIREBIR TEKRARLA (SALT OKUR)

1.MURAT M-3592'de sunu olctugunu bildirdi:
    H-0017-2 LIBYA KIYISI    (30,0-31,8K / 21,2-24,5D)   nokta: 0
    H-0017-1 MISIR BATI COLU (20,8-26,9K / 24,4-31,1D)   nokta: 0

Benim daha genis kutum 10 ve 27 nokta buldu. Ikisi de dogru olamaz —
ya kutular farkli, ya tarama.

🔴 BU ALET ONUN KUTULARINI BIREBIR KULLANIR. Kendi kutumla olcup
   "o yanildi" demek, D142'nin ta kendisi olurdu: bir iddiayi
   aktarirken "normallestirmek" onu curutebilir, sonra kendi
   normallestirmeni olcup karsi tarafi haksiz cikarirsin.
"""
import os, sys, io

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8", errors="replace")
KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(KOK, "arac"))
import girdi

Y = girdi.yukle(sessiz=True)

KUTU = [
    ("1.MURAT · LIBYA KIYISI",    30.0, 31.8, 21.2, 24.5),
    ("1.MURAT · MISIR BATI COLU", 20.8, 26.9, 24.4, 31.1),
]

print("# taban: %d nokta · %d girdi dosyasi"
      % (len(Y), len(girdi.GIRDI_DOSYALARI)))
print()
for ad, la1, la2, lo1, lo2 in KUTU:
    ic = [y for y in Y
          if y.get("lat") is not None and y.get("lon") is not None
          and la1 <= y["lat"] <= la2 and lo1 <= y["lon"] <= lo2]
    print("=" * 78)
    print("%s   (%s-%sK / %s-%sD)" % (ad, la1, la2, lo1, lo2))
    print("   BULUNAN: %d nokta" % len(ic))
    for y in sorted(ic, key=lambda z: z["lat"]):
        print("      %-28s %8.3f %8.3f" % (y.get("ad"), y["lat"], y["lon"]))
    if not ic:
        # kutu gercekten bossa, KENARINDA ne var
        print("   --- kutu BOS. En yakin 5 nokta (kutu merkezine gore) ---")
        ml, mo = (la1 + la2) / 2, (lo1 + lo2) / 2
        k = sorted(((girdi.km(ml, mo, y["lat"], y["lon"]), y) for y in Y
                    if y.get("lat") is not None), key=lambda x: x[0])
        for d, y in k[:5]:
            print("      %7.1f km  %-26s %8.3f %8.3f"
                  % (d, y.get("ad"), y["lat"], y["lon"]))
