# -*- coding: utf-8 -*-
"""P84-DEGISMEZ2-ADAY-1006 — SALT OKUR ölçüm.

H-0012 (Bursa → Çelebi Mehmed) ve H-0014 (1403, Karadeniz Trakya kıyısı → Bizans)
kırılmalarını bulur ve `denetle.py`nin KENDİ işlevleriyle hangi kovaya düştüklerini
söyler. Hiçbir dosyaya yazmaz; kökü __file__den bulur.
"""
import os, sys, io
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8")
KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(KOK, "arac"))
import denetle as D

ILK, SON = "1402-06-01", "1414-01-01"
# Marmara + Trakya + Karadeniz Trakya kıyısı (Varna dahil)
KUTU = (26.0, 39.6, 31.0, 43.4)      # lon0, lat0, lon1, lat1


def kutuda(y):
    try:
        return KUTU[0] <= float(y["lon"]) <= KUTU[2] and KUTU[1] <= float(y["lat"]) <= KUTU[3]
    except Exception:
        return False


Y = D.yerlesimleri_yukle()
O = D.olaylari_yukle()
Yc = [y for y in Y if y.get("_kaynak") not in D.KUYRUK_DOSYALARI]
print(f"evren: {len(Y)} yerleşim ({len(Yc)} çekirdek), {len(O)} madde (olaylar*+kronoloji_sinir*)")

# 1) Bölgedeki kırılmalar (d/v/s/isg) — pencere içinde
print("\n== 1. KUTUDAKİ KIRILMALAR", ILK, "→", SON)
satirlar = []
for y in Y:
    if not kutuda(y):
        continue
    for kat in ("d", "v", "s", "isg"):
        for p in (y.get(kat) or []):
            for g, tip in ((p.get("f"), "kazanc"), (p.get("t"), "kayip")):
                if g and ILK <= g < SON:
                    satirlar.append((g, kat, tip, p.get("d") or "OSMANLI", y["ad"],
                                     y.get("_kaynak"), y.get("_kaynak") in D.KUYRUK_DOSYALARI))
satirlar.sort()
from collections import defaultdict
ozet = defaultdict(list)
for g, kat, tip, sah, ad, kay, kuy in satirlar:
    ozet[(g, kat, tip, sah)].append(ad + (" [KUYRUK]" if kuy else ""))
for (g, kat, tip, sah), adlar in sorted(ozet.items()):
    print(f"  {g} {kat:<3} {tip:<6} {sah:<18} n={len(adlar):<3} {', '.join(sorted(adlar)[:12])}")

# 2) Pencere içindeki maddeler (Değişmez 2 evreni)
print("\n== 2. EVRENDEKİ MADDELER", ILK, "→", SON)
for o in sorted(O, key=lambda o: D.tam(o["t"])):
    if ILK <= D.tam(o["t"]) < SON:
        print(f"  {o['t']:<10} yer_id={str(o.get('yer_id') or ''):<14} {o['b'][:110]}")

# 3) denetle.py'nin kendi kovaları
print("\n== 3. denetle.py KOVALARI (pencere içi)")
kir, acik = D.degismez2(Yc, O)
print("  Değişmez 2 (d/v) açık, pencere içi:",
      [a[:3] for a in acik if ILK <= a[0] < SON] or "YOK")
kir_s, acik_ham = D.degismez2(Yc, O, ("s",), yer_sarti=True)
ici, disi = D.kapsam_disi(Y, acik_ham)
borc, gercek = D.yil_temsili_ayir(ici)
for ad, kova in (("2s AÇIK", gercek), ("2s YIL-TEMSİLÎ", borc), ("2s KAPSAM DIŞI", disi)):
    sec = [k for k in kova if ILK <= k[0] < SON]
    print(f"  {ad}: {len(sec)}")
    for k in sec:
        print(f"     {k[0]} {k[1]:<6} {', '.join(k[2])} | en yakın {k[4]} gün: {str(k[3])[:70]}"
              + (f" | {k[5]:.0f} km" if len(k) > 5 else ""))
print("  2s KAPALI (pencere içi, kutudaki yerleşimli tarihler):")
for g in sorted(kir_s):
    if ILK <= g < SON and g not in {k[0] for k in acik_ham}:
        adlar = [a for a in kir_s[g]["ad"] if any(y["ad"] == a and kutuda(y) for y in Y)]
        if adlar:
            print(f"     {g} n={len(adlar)} {', '.join(sorted(adlar)[:8])}")

# 4) Aday tarihlerin ayrıntısı: kaç yerleşim AÇIKLANMADI, taraf adayları ne
print("\n== 4. ADAY TARİHLERİN AYRINTISI")
for g in ("1403-02-01", "1403-06-01", "1410-01-01", "1411-02-17"):
    k = kir_s.get(g)
    if not k:
        print(f"  {g}: 2s kırılması YOK"); continue
    eksik = k.get("eksik") or []
    sah = set((v.get("eski"), v.get("yeni")) for v in k["sahip"].values())
    print(f"  {g}: {len(k['ad'])} yerleşim · açıklanmayan {len(eksik)} · geçişler {sorted(sah)}")
    if eksik:
        print(f"      açıklanmayan: {', '.join(eksik)}")
    for sid in sorted({x for p in sah for x in p if x}):
        print(f"      taraf adayı {sid!r:<20} → {D._2s_taraf_adaylari(sid)}")
