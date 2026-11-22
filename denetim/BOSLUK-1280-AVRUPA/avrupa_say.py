import sys, collections
sys.path.insert(0, "arac")
sys.stdout.reconfigure(encoding="utf-8")
import girdi
GUN = "1280-01-01"
Y = [y for y in girdi.yukle(sessiz=True) if y.get("lon") is not None]
AV = [y for y in Y if 34 <= y["lat"] <= 72 and -12 <= y["lon"] <= 60]
def pencereler(y):
    r = []
    for a in ("d", "v", "s"):
        for p in (y.get(a) or []):
            r.append((p.get("f") or "", p.get("t") or "9999", a))
    return r
def sahnede(y):
    for f, t, a in pencereler(y):
        if f <= GUN < t:
            return True
    return bool(y.get("kasitli_bosluk"))
sin = collections.Counter()
aday = collections.defaultdict(list)
for y in AV:
    if sahnede(y):
        sin["sahnede"] += 1; continue
    kur = y.get("kur")
    pen = sorted(pencereler(y))
    ilk = pen[0][0] if pen else None
    if kur and kur > GUN:
        sin["kuruluş sonra (meşru)"] += 1
    elif not pen:
        sin["pencere yok"] += 1; aday["pencere yok"].append(y)
    elif ilk and ilk > GUN:
        sin["ilk pencere 1280'den sonra, kuruluş 1280 öncesi/yok"] += 1
        aday["ilk pencere sonra"].append(y)
    else:
        sin["pencere arası boşluk/bitmiş"] += 1; aday["arası"].append(y)
print("AVRUPA kutusu:", len(AV), "nokta")
for k, v in sin.most_common():
    print("  %-55s %d" % (k, v))
print()
dosya = collections.Counter(y.get("_kaynak") for y in aday["ilk pencere sonra"])
print("ilk pencere sonra — kaynak dosyaya göre:", dict(dosya.most_common(8)))
bas = collections.Counter((min(pencereler(y))[0] or "")[:3] + "0'lar" for y in aday["ilk pencere sonra"])
print("ilk pencere başlangıç on yılı:", dict(sorted(bas.items())[:20]))
sah = collections.Counter()
for y in aday["ilk pencere sonra"]:
    p = sorted(pencereler(y))[0]
    sah[p[2]] += 1
print("ilk pencere türü:", dict(sah))
print()
print("örnek 25 (kuruluşsuz, ilk pencere sonra):")
for y in aday["ilk pencere sonra"][:25]:
    p = sorted(pencereler(y))[0]
    print("  %-28s %-10s kur=%s ilk=%s/%s %s" % (str(y.get("ad"))[:28], y.get("tur"), y.get("kur"), p[0], p[2], y.get("_kaynak")))
# yerleşim yoğunluğu: Avrupa 5° kareleri, 1280'de sahnede nokta sayısı
kova = collections.Counter()
tum = collections.Counter()
for y in AV:
    a = (int(y["lon"] // 5) * 5, int(y["lat"] // 5) * 5)
    tum[a] += 1
    if sahnede(y):
        kova[a] += 1
print()
print("5° kareler (tüm nokta / 1280'de sahnede) — sahnede 0-2 olanlar:")
for a in sorted(tum, key=lambda k: (-k[1], k[0])):
    if kova[a] <= 2:
        print("  lon %5d lat %3d  toplam %3d sahnede %d" % (a[0], a[1], tum[a], kova[a]))
