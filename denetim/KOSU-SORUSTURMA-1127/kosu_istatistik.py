# -*- coding: utf-8 -*-
"""kosu_istatistik — koşunun aşama aşama süre / işlemci / bellek dökümü (HAVVA, 28 Kasım 2026).

`bellek_olc2.py`nin yazdığı `bellek.csv`yi okur (salt okuma; koşuya dokunmaz). Her aşama için:
duvar süresi · işlemci süresi · ortalama çekirdek (işlemci sn / duvar sn) · özel bellek (en az–en çok) ·
çalışma kümesi en çok · boş RAM en az. Sonda: toplam, genel ortalama çekirdek, tepeler ve çukurlar.
Kullanım: py kosu_istatistik.py <bellek.csv> [en kısa aşama saniyesi (varsayılan 20)]
"""
import csv
import datetime as dt
import sys

sys.stdout.reconfigure(encoding="utf-8", errors="replace")
yol = sys.argv[1]
esik = float(sys.argv[2]) if len(sys.argv) > 2 else 20.0
MANTIKSAL = 8                      # HAVVA: i5-1135G7, 4 çekirdek / 8 mantıksal işlemci


def sure(sn):
    sn = int(round(sn))
    s, d = divmod(sn, 3600)
    d, n = divmod(d, 60)
    return ("%d sa %02d dk" % (s, d)) if s else ("%d dk %02d sn" % (d, n))


sat = []
with open(yol, encoding="utf-8") as f:
    for r in csv.DictReader(f):
        try:
            sat.append((dt.datetime.fromisoformat(r["zaman"]), r["asama"] or "(başlangıç)", float(r["ozel_gb"]),
                        float(r["calisma_gb"]), float(r["bos_ram_gb"]), float(r["bos_commit_gb"]),
                        float(r["cpu_sn"]), float(r["cocuk_ozel_gb"] or 0)))
        except (ValueError, KeyError):
            continue
if len(sat) < 2:
    sys.exit("yeterli satır yok")

# aşamalara böl (ardışık aynı ad = tek aşama)
asamalar = []
for s in sat:
    if not asamalar or asamalar[-1][0] != s[1]:
        asamalar.append([s[1], []])
    asamalar[-1][1].append(s)
t0, tson = sat[0][0], sat[-1][0]
top_duvar = (tson - t0).total_seconds()
top_cpu = sat[-1][6] - sat[0][6]

print("KOŞU İSTATİSTİĞİ · %s → %s · geçen %s · %d örnek" % (
    t0.strftime("%d.%m %H:%M"), tson.strftime("%d.%m %H:%M"), sure(top_duvar), len(sat)))
print("%-58s %11s %11s %7s %13s %8s %8s" % ("aşama", "duvar", "işlemci", "çekirdek", "özel GB", "çalışma", "boş RAM"))
print("%-58s %11s %11s %7s %13s %8s %8s" % ("", "", "", "(ort.)", "(en az–çok)", "(en çok)", "(en az)"))
kisa_duvar = kisa_cpu = 0.0
kisa_n = 0
tablo = []
for i, (ad, ss) in enumerate(asamalar):
    bas = ss[0][0]
    son = asamalar[i + 1][1][0][0] if i + 1 < len(asamalar) else ss[-1][0]
    cpu1 = asamalar[i + 1][1][0][6] if i + 1 < len(asamalar) else ss[-1][6]
    duvar, cpu = (son - bas).total_seconds(), cpu1 - ss[0][6]
    oz = [x[2] for x in ss]
    kayit = (ad, duvar, cpu, min(oz), max(oz), max(x[3] for x in ss), min(x[4] for x in ss), bas)
    tablo.append(kayit)
    if duvar < esik:
        kisa_duvar += duvar
        kisa_cpu += cpu
        kisa_n += 1
        continue
    print("%-58s %11s %11s %7.2f %6.1f–%-6.1f %8.1f %8.1f%s" % (
        ad[:58], sure(duvar), sure(cpu), cpu / duvar if duvar else 0, kayit[3], kayit[4], kayit[5], kayit[6],
        "   ← SÜRÜYOR" if i + 1 == len(asamalar) else ""))
if kisa_n:
    print("%-58s %11s %11s" % ("(%d kısa aşama, her biri < %g sn)" % (kisa_n, esik), sure(kisa_duvar), sure(kisa_cpu)))

print("\nGENEL")
print("  duvar süresi        : %s" % sure(top_duvar))
print("  işlemci süresi      : %s  ⇒ ortalama %.2f çekirdek (makinenin %%%.0f'i; %d mantıksal işlemci)" % (
    sure(top_cpu), top_cpu / top_duvar, 100.0 * top_cpu / top_duvar / MANTIKSAL, MANTIKSAL))
oz = [x[2] for x in sat]
ws = [x[3] for x in sat]
br = [x[4] for x in sat]
bc = [x[5] for x in sat]
ort_oz = sum(oz) / len(oz)


def nerede(deger, kol):
    for x in sat:
        if x[kol] == deger:
            return "%s · %s" % (x[0].strftime("%d.%m %H:%M"), x[1][:50])
    return "?"


print("  özel bellek         : ortalama %.1f GB · en çok %.1f GB (%s) · en az %.1f GB" % (
    ort_oz, max(oz), nerede(max(oz), 2), min(oz)))
print("  çalışma kümesi      : ortalama %.1f GB · en çok %.1f GB (%s)" % (sum(ws) / len(ws), max(ws), nerede(max(ws), 3)))
print("  boş RAM             : ortalama %.1f GB · en az %.1f GB (%s) · en çok %.1f GB" % (
    sum(br) / len(br), min(br), nerede(min(br), 4), max(br)))
print("  boş commit payı     : en az %.1f GB (%s)" % (min(bc), nerede(min(bc), 5)))
if any(x[7] > 0 for x in sat):
    print("  alt süreç özel bellek: en çok %.1f GB" % max(x[7] for x in sat))

# işlemci tepeleri ve çukurları: 5 dakikalık pencerelerde ortalama çekirdek
pen, i0 = [], 0
for i in range(1, len(sat)):
    if (sat[i][0] - sat[i0][0]).total_seconds() >= 300:
        d = (sat[i][0] - sat[i0][0]).total_seconds()
        pen.append(((sat[i][6] - sat[i0][6]) / d, sat[i0][0], sat[i0][1]))
        i0 = i
if pen:
    pen.sort(key=lambda p: p[0])
    print("  işlemci (5 dk pencere): en düşük %.2f çekirdek (%s · %s) · en yüksek %.2f çekirdek (%s · %s)" % (
        pen[0][0], pen[0][1].strftime("%H:%M"), pen[0][2][:40], pen[-1][0], pen[-1][1].strftime("%H:%M"), pen[-1][2][:40]))
uzun = sorted(tablo, key=lambda k: -k[1])[:5]
print("  en uzun 5 aşama     : " + " · ".join("%s (%s)" % (k[0][:34], sure(k[1])) for k in uzun))
