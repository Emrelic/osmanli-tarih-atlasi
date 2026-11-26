# -*- coding: utf-8 -*-
"""EKO-BOLGE-0073 · 2t OLCUTUNUN YAZIM KOR NOKTASI (21 Eylul 2026).

SORU: `arac/denetle.py:_toprak_iddiasi()` "toprak-kaybi" ariyor; verinin
      kullandigi yazim "toprak-kayip". Olcut duzeltilseydi Degismez 2t
      (kirilmasiz madde) kac olurdu, ve HANGI maddeler defterе dusuуordu?

YONTEM: denetle.py MODUL olarak yuklenir; girdiler main()'in kendi satirlariyla
        BIREBIR ayni sekilde kurulur (3874/3876/3897/3958) ve AYNI
        `kirilmasiz_madde()` iki kez kosar: once bugunku olcutle, sonra
        "toprak-kayip" da kabul eden olcutle. Denetim TAKLIT EDILMEZ, kosar.

🔴 SALT OKUR — hicbir dosyaya yazmaz (json ciktisi haric), denetle.py'yi
   diskte DEGISTIRMEZ; yalniz bellekteki fonksiyonu bu kosu boyunca sarmalar.

Kullanim: py denetim/ARAC-EKO-BOLGE-2T-YAZIM-0921.py
Cikti   : ekrana ozet + denetim/EKO-BOLGE-2T-YAZIM-0921.json
"""
import os, sys, re, json, glob, collections, importlib.util

sys.stdout.reconfigure(encoding="utf-8")
KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
os.chdir(KOK)
sys.path.insert(0, os.path.join(KOK, "arac"))

spec = importlib.util.spec_from_file_location(
    "denetle", os.path.join(KOK, "arac", "denetle.py"))
dn = importlib.util.module_from_spec(spec)
sys.modules["denetle"] = dn
spec.loader.exec_module(dn)

# ---- 1) yazimin HAM dagilimi ----
say = collections.Counter()
for f in glob.glob(os.path.join(KOK, "data", "olaylar*.js")):
    for satir in open(f, encoding="utf-8"):
        m = re.search(r"etiket:\[([^\]]*)\]", satir)
        if m:
            for e in re.findall(r'"([^"]+)"', m.group(1)):
                say[e] += 1
yazim = {k: say.get(k, 0) for k in
         ("toprak-kazanc", "toprak-kaybi", "toprak-kayip")}

# ---- 2) girdiler: main() ile BIREBIR ayni ----
Y = dn.yerlesimleri_yukle()
O = dn.olaylari_yukle()
Y_cekirdek = [y for y in Y if y.get("_kaynak") not in dn.KUYRUK_DOSYALARI]
kir, _ = dn.degismez2(Y_cekirdek, O)
kir_s, _ = dn.degismez2(Y_cekirdek, O, ("s",), yer_sarti=True)
kir_isg, _ = dn.degismez2(Y_cekirdek, O, ("isg",))


def olc(kabul):
    eski = dn._toprak_iddiasi

    def sarmal(o):
        e = o.get("etiket") or []
        if not isinstance(e, list):
            e = [x.strip() for x in str(e).split(",")]
        return any(a in e for a in kabul)

    dn._toprak_iddiasi = sarmal
    try:
        return dn.kirilmasiz_madde(kir, kir_s, O, kir_isg)
    finally:
        dn._toprak_iddiasi = eski


bugun = olc(("toprak-kazanc", "toprak-kaybi"))              # denetle.py'nin bugunku hali
duzeltilmis = olc(("toprak-kazanc", "toprak-kaybi", "toprak-kayip"))


def kimlik(o):
    return "%s|%s" % (o.get("t"), o.get("b", ""))


b_set = {kimlik(o) for o in bugun}
yeni = [o for o in duzeltilmis if kimlik(o) not in b_set]
tur = collections.Counter(o.get("k") or "?" for o in yeni)

rapor = {
    "yazim_dagilimi": yazim,
    "olcut_bugun": len(bugun),
    "olcut_duzeltilmis": len(duzeltilmis),
    "gorunmeyen_borc": len(yeni),
    "tavan": dn.BEKLENEN_KIRILMASIZ,
    "tavan_asilir_mi": len(duzeltilmis) > dn.BEKLENEN_KIRILMASIZ,
    "yeni_tur_dagilimi": dict(tur),
    "yeni_maddeler": sorted(kimlik(o) for o in yeni),
}
cikti = os.path.join(KOK, "denetim", "EKO-BOLGE-2T-YAZIM-0921.json")
json.dump(rapor, open(cikti, "w", encoding="utf-8"),
          ensure_ascii=False, indent=1)

print("yazim (data/olaylar*.js ham sayim): " + json.dumps(yazim, ensure_ascii=False))
print()
print("Degismez 2t — kirilmasiz madde")
print("  bugunku olcutle          : %d   (tavan %d)" % (len(bugun), dn.BEKLENEN_KIRILMASIZ))
print("  'toprak-kayip' eklenince : %d   (tavan %d)  %s"
      % (len(duzeltilmis), dn.BEKLENEN_KIRILMASIZ,
         "🔴 TAVAN ASILIR" if rapor["tavan_asilir_mi"] else "tavan icinde"))
print("  ⇒ bugun GORUNMEYEN borc  : %d madde" % len(yeni))
if tur:
    print("     tur dagilimi: " + ", ".join("%s×%d" % (k, v)
                                            for k, v in tur.most_common()))
print()
print("  gorunmeyen borcun ilk 15'i:")
for k in rapor["yeni_maddeler"][:15]:
    print("     " + k[:100])
print()
print("-> " + cikti)
