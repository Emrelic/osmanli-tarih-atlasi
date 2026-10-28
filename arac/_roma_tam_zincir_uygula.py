# -*- coding: utf-8 -*-
# ITALYA-1028m: Roma'nin tam zinciri (-752 ... 1155) ve 1814/1849 kaynak yer degisikligi duzeltmesi. Tek seferlik.
import sys
sys.stdout.reconfigure(encoding="utf-8")
DOS = "data/yerlesimler.js"
L = open(DOS, encoding="utf-8", newline="").read().split("\n")
idx = [i for i, l in enumerate(L) if l.startswith('{ ad:"Roma"')]
assert len(idx) == 1
l = L[idx[0]]
a = l.index("s:[") + 3
b = l.index('{f:"1155-01-01",t:"1281-01-01",d:"papalik"')
eski = l[a:b]
# Dionysios kaynagi (ilk dilimin kaynak: alani) aynen korunur
k0 = eski.index('kaynak:"') + len('kaynak:"')
k1 = eski.index('"},{f:"-0751-01-01"')
DION = eski[k0:k1]

ORTAK = ("ZİNCİR-ROMA-TAM (ITALYA-1028m): künye sınırları esas — roma-kralligi (-0752→-0508), roma-cumhuriyeti (-0508→-0026-01-16), roma-imp (→0395-01-17), bati-roma (→476-08-28), "
         "odoakar (476-08-23→493-03-05), dogu-got (493-03-05→553), papalik (756-01-01→), roma-komunu (1143-01-01→1155-01-01) künyelerinin kendi sınırları ve kaynakları (Britannica, Treccani 'Roma', Procopius). ")
BOSL_ESKI = "önceki zincir -0751→1144 arasını BOŞLUK bırakmıştı ('künye açılınca doldurulur'); künyeler açıldığı için doldu. "
BEYAN_BIZ = ("536-12-09 Belisarios'un Roma'ya girişi (Procopius, Savaşlar V.14; Wikipedia 'Siege of Rome (537–538)', ikincil) → bizans. BEYANLI YAKLAŞIKLIK: 546-12-17 Totila'nın Roma'yı alışı, 547 Bizans dönüşü, "
             "549-550 Totila'nın ikinci alışı ve 552 Narses'in kesin zaferi arasındaki el değiştirmeler ile Roma Dükalığı'nın Papalık'a fiilî geçişi ayrı gösterilmedi; "
             "Bizans dilimi 756-01-01'de (papalik künyesi f, Pippin'in Bağışı) biter. ikinci kaynak aranıyor.")
BEYAN_KOM = ("Roma Komünü: künye roma-komunu (devletler.js, f 1143-01-01, t 1155-01-01) — Treccani Enciclopedia on line 'Roma': «Nel 1144 ... riuscì a farsi valere un effimero governo comunale» (Arnaldo da Brescia; 1155 teslim). "
             "BEYAN: künye f 1143, Treccani 1144 — künye sınırı esas; papalik 756→1143 arası Papalık Devleti (Roma Dükalığı), Karolenj himayesi ve Tusculum/Crescenzi hizipleri ayrı gösterilmedi. ikinci kaynak aranıyor.")

def S(f, t, d, kay=None):
    return '{f:"%s",t:"%s",d:"%s"%s}' % (f, t, d, (',kaynak:"%s"' % kay.replace('"', "'")) if kay else "")

yeni = ",".join([
    '{f:"-0752-01-01",t:"-0508-01-01",d:"roma-kralligi",kesinlik:{f:"onyil",t:"onyil"},kaynak:"%s"}' % DION,
    S("-0508-01-01", "-0026-01-16", "roma-cumhuriyeti", ORTAK + BOSL_ESKI),
    S("-0026-01-16", "0395-01-17", "roma-imp"),
    S("0395-01-17", "0476-08-23", "bati-roma"),
    S("0476-08-23", "0493-03-05", "odoakar"),
    S("0493-03-05", "0536-12-09", "dogu-got", "536-12-09 Belisarios'un Roma'ya girişi (Procopius, Savaşlar V.14) → dogu-got dilimi bitişi; künye dogu-got t 553 (Teia) bu dilimden uzundur. · ITALYA-1028m"),
    S("0536-12-09", "0756-01-01", "bizans", BEYAN_BIZ + " · ITALYA-1028m"),
    S("0756-01-01", "1143-01-01", "papalik", "Papalık Devleti: künye papalik f 756-01-01 (Pippin'in Bağışı). " + BEYAN_KOM + " · ITALYA-1028m"),
    S("1143-01-01", "1155-01-01", "roma-komunu", BEYAN_KOM + " · ITALYA-1028m"),
]) + ","
l = l[:a] + yeni + l[b:]

# 1814-05-24 ve 1849-07-03 kaynak yer degisikligi (NAPOLYON-ITALYA-1028 hatasi): Pius VII kaynagi 1814-05-24 diliminde olmali
K14 = "VII. Pius'un Roma'ya dönüşü 24 Mayıs 1814 (Britannica 'Pius VII'; arama özeti) · NAPOLYON-ITALYA-1028"
assert l.count('{f:"1849-07-03",t:"1870-09-20",d:"papalik",kaynak:"%s"}' % K14) == 1
l = l.replace('{f:"1849-07-03",t:"1870-09-20",d:"papalik",kaynak:"%s"}' % K14, '{f:"1849-07-03",t:"1870-09-20",d:"papalik"}')
assert l.count('{f:"1814-05-24",t:"1849-02-09",d:"papalik"}') == 1
l = l.replace('{f:"1814-05-24",t:"1849-02-09",d:"papalik"}', '{f:"1814-05-24",t:"1849-02-09",d:"papalik",kaynak:"%s"}' % K14.replace('"', "'"))
L[idx[0]] = l
open(DOS, "w", encoding="utf-8", newline="").write("\n".join(L))
print("tamam")
