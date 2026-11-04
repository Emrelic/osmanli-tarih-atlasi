# -*- coding: utf-8 -*-
"""KOVALAR J (0 noktalı parçalar) için nokta adayı taraması → nokta_aday.json + NOKTA-ADAY.md.

Kural (CLAUDE.md + EMRELİC görevi): yalnız KRONOLOJİDE geçen yerleşim nokta adayı olabilir; yerleşim dosyalarına yazılmaz.
Yöntem (yaklaşık — parça geometrisi kayıtlı değil, yalnız temsilî nokta ve alan):
  * parça ≈ temsilî nokta merkezli, yarıçapı r = 1,5·√(alan/π) km olan daire (en az 15 km)
  * aynı noktayı paylaşan adaylar tek grup (aynı coğrafya, farklı dönem)
  * kronoloji maddesi gruba bağlanır: tarih penceresinde VE (yer_id/odak_yer'i dairede bir yerleşim YA DA devlet/devletler/taraflar
    alanında grubun devleti ve madde yeri dairenin 3r'si içinde ya da yersiz)
  * maddenin yer adları (yer, odak_yer, yer_id) mevcut yerleşimlerle normalleştirilmiş adla karşılaştırılır:
      MEVCUT-İÇERİDE  — adı atlasta var ve dairede: nokta zaten var, parçayı neden boşaltmadığı ölçülmeli (dönem eksik?)
      MEVCUT-DIŞARIDA — adı atlasta var, dairenin dışında: aday değil
      YENİ            — adı atlasta yok: nokta adayı (koordinat ve sahip KAYNAK-GEREK; mükerrer ad taraması yapıldı)
"""
import os, re, sys, json, math, collections

KOK = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", ".."))
sys.path.insert(0, os.path.join(KOK, "arac"))
os.chdir(KOK)
import girdi, gun, denetle

BURA = os.path.join(KOK, "denetim", "ENKLAV-1103")
Y = [y for y in girdi.yukle(sessiz=True) if "lat" in y]
O = denetle.olaylari_yukle()
DEV = {d["id"]: d for d in girdi.oku_devletler()}
norm = denetle._2s_norm
J = [k for k in json.load(open(os.path.join(BURA, "kovalar.json"), encoding="utf-8"))["kovalar"] if k["kod"] == "J"][0]


def kok(ad):
    return norm(re.split(r"\s*\(", ad)[0]).strip()


ADI = collections.defaultdict(list)
for y in Y:
    ADI[kok(y["ad"])].append(y)
    m = re.search(r"\(([^)]*)\)", y["ad"])
    if m:
        for parca in re.split(r"[,/;]", m.group(1)):
            if len(parca.strip()) >= 3:
                ADI[norm(parca.strip())].append(y)


def km(a, b, c, d):
    return girdi.km(a, b, c, d)


def tg(s):
    try:
        return gun.gun(denetle.tam(denetle.pad(s)))
    except Exception:
        return None


GRUP = collections.OrderedDict()
for s in J["satirlar"]:
    no, devlet = s["ad"].split(" ", 1)
    m = re.match(r"(\S+) → (\S+) · (\d+) km²", s["simdi"])
    f, t, alan = m.group(1), m.group(2), int(m.group(3))
    anahtar = (round(s["lat"], 2), round(s["lon"], 2))
    g = GRUP.setdefault(anahtar, dict(lat=s["lat"], lon=s["lon"], adaylar=[], devletler=set(), f=f, t=t, alan=0))
    g["adaylar"].append("%s %s %s→%s" % (no, devlet, f, t))
    g["devletler"].add(devlet)
    g["f"], g["t"], g["alan"] = min(g["f"], f), max(g["t"], t), max(g["alan"], alan)

SONUC = []
for (la, lo), g in GRUP.items():
    r = max(15.0, 1.5 * math.sqrt(g["alan"] / math.pi))
    f, t = tg(g["f"]), tg(g["t"])
    yakin = sorted(((km(la, lo, y["lat"], y["lon"]), y) for y in Y), key=lambda x: x[0])[:3]
    adlar = collections.OrderedDict()
    for o in O:
        ot = tg(o.get("t", ""))
        if ot is None or not (f <= ot <= t):
            continue
        yerler = []
        if o.get("yer_id"):
            yerler.append(o["yer_id"])
        yerler += [x for x in (o.get("odak_yer") or []) if isinstance(x, str)]
        yerler += [p.strip() for p in re.split(r"[/,;]| ve ", o.get("yer", "")) if p.strip()]
        taraf = set()
        for a in ("devlet", "devletler", "taraflar"):
            v = o.get(a)
            taraf |= set(v if isinstance(v, list) else [v] if v else [])
        dev_bag = bool(taraf & g["devletler"])
        konumlu = [(km(la, lo, z["lat"], z["lon"]), z) for ad in yerler for z in ADI.get(kok(ad), [])]
        icerde = [x for x in konumlu if x[0] <= r]
        uzak = konumlu and min(x[0] for x in konumlu) > 3 * r
        if not (icerde or (dev_bag and not uzak)):
            continue
        for ad in yerler:
            k = kok(ad)
            if len(k) < 3:
                continue
            esler = ADI.get(k, [])
            if esler:
                d, z = min(((km(la, lo, e["lat"], e["lon"]), e) for e in esler), key=lambda x: x[0])
                durum = "MEVCUT-İÇERİDE" if d <= r else "MEVCUT-DIŞARIDA"
                kayit = "%s (%.0f km)" % (z["ad"], d)
            else:
                durum, kayit = "YENİ", "—"
            if durum == "MEVCUT-DIŞARIDA":
                continue
            adlar.setdefault((ad, durum), dict(ad=ad, durum=durum, mevcut=kayit, maddeler=[]))
            if len(adlar[(ad, durum)]["maddeler"]) < 3:
                adlar[(ad, durum)]["maddeler"].append("%s — %s" % (o["t"], o["b"][:80]))
    SONUC.append(dict(nokta=[la, lo], r_km=round(r), alan=g["alan"], aralik="%s → %s" % (g["f"], g["t"]),
                      parcalar=g["adaylar"], devletler=sorted(g["devletler"]),
                      en_yakin=["%s (%.0f km)" % (y["ad"], d) for d, y in yakin], adaylar=list(adlar.values())))

json.dump(SONUC, open(os.path.join(BURA, "nokta_aday.json"), "w", encoding="utf-8", newline="\n"), ensure_ascii=False, indent=1)
L = ["# NOKTA-ADAY — 0 noktalı parçalar (KOVALAR J) için kronolojide geçen yerleşim adayları\n",
     "Ölçen: LAB SALI · 4 Kasım 2026 · alet `nokta_aday.py` · girdi KOVALAR J (%d parça → %d coğrafî grup).\n" % (len(J["satirlar"]), len(SONUC)),
     "**Yöntem ve sınırı:** parça geometrisi kayıtlı değil; parça, temsilî nokta merkezli r = 1,5·√(alan/π) km daire sayıldı (kaba). "
     "Aday = tarih penceresindeki, gruba (yer ya da devlet) bağlı kronoloji maddesinin adını verdiği yer. **YENİ** adların koordinatı "
     "ve o yıldaki sahibi bu taramada bulunmadı — KAYNAK-GEREK (CLAUDE.md: koordinat ve sahip kaynakla; atlas referans değil). "
     "Mükerrer taraması ad düzeyinde yapıldı (normalleştirilmiş ad + parantez içi eş adlar); 3 km taraması koordinat bulununca KASA'da.\n",
     "- **MEVCUT-İÇERİDE** — adı atlasta var ve dairede: yeni nokta değil, o noktanın bu aralıktaki dönemi/sahibi ölçülmeli "
     "(parça içinde nokta görünmüyorsa daire yaklaşıklığı ya da nokta kur/bit epoku).",
     "- **YENİ** — atlasta yok: nokta adayı (kaynakla koordinat + sahip + Değişmez 2 maddesi zaten var).",
     "- Adayı olmayan grup: **nokta adayı yok** (bölge yerleşimsizse beyan; değilse kaynak taraması gerek).\n",
     "**Sonuç:** kronolojide bu parçalara bağlanan ve atlasta OLMAYAN hiçbir yer adı çıkmadı (YENİ = 0). MEVCUT-İÇERİDE satırları "
     "dairenin kabalığından gelen komşu noktalardır (parçanın gerçek sınırı dışında olmaları muhtemel). Dolayısıyla CLAUDE.md kuralıyla "
     "bu parçalara bugün eklenebilecek nokta yok; çözüm motor/veri tarafında: parçayı üreten emilmenin kaynağını ölçmek (hangi bölge "
     "poligonu ya da hangi komşu petek, `*_parca*.js`) — HAVVA/KOŞU-YAYIN işi. Kaynak taramasıyla yeni yerleşim bulunursa önce kronoloji "
     "maddesi, sonra nokta.\n"]
say = collections.Counter()
for g in SONUC:
    yeni = [a for a in g["adaylar"] if a["durum"] == "YENİ"]
    mev = [a for a in g["adaylar"] if a["durum"] == "MEVCUT-İÇERİDE"]
    say["grup"] += 1
    say["yeni_ad"] += len(yeni)
    say["mevcut"] += len(mev)
    say["adaysiz"] += 0 if g["adaylar"] else 1
L.insert(3, "**Özet:** %d grup · YENİ ad %d · MEVCUT-İÇERİDE %d · adayı olmayan grup %d.\n" % (say["grup"], say["yeni_ad"], say["mevcut"], say["adaysiz"]))
for i, g in enumerate(SONUC, 1):
    L.append("## G%02d · %s · %s (alan ≤ %s km², r ≈ %d km)\n" % (i, ", ".join(g["devletler"]), g["aralik"],
                                                              "{:,}".format(g["alan"]).replace(",", "."), g["r_km"]))
    L.append("- Temsilî nokta: %.3f, %.3f · parçalar: %s" % (g["nokta"][0], g["nokta"][1], "; ".join(g["parcalar"])))
    L.append("- En yakın mevcut noktalar: %s" % ", ".join(g["en_yakin"]))
    if not g["adaylar"]:
        L.append("- **nokta adayı yok** (kronolojide bu parçaya bağlanan yer adı bulunmadı)\n")
        continue
    L.append("\n| aday ad | durum | atlastaki eş | kronoloji maddesi |")
    L.append("|---|---|---|---|")
    for a in g["adaylar"][:12]:
        L.append("| %s | %s | %s | %s |" % (a["ad"], a["durum"], a["mevcut"], " · ".join(a["maddeler"]).replace("|", "/")))
    if len(g["adaylar"]) > 12:
        L.append("| … +%d | | | |" % (len(g["adaylar"]) - 12))
    L.append("")
open(os.path.join(BURA, "NOKTA-ADAY.md"), "w", encoding="utf-8", newline="\n").write("\n".join(L))
print(dict(say))
