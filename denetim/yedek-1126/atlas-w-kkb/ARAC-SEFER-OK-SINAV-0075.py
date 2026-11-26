# -*- coding: utf-8 -*-
"""SEFER-OK-0075 — deniz rotası SINAVI (yama uygulandıktan sonra ya da kopyada).

Girdi: node denetim/ARAC-SEFER-OK-DUMP-0075.js <seferler.json> [yama-kopya-kökü]
  py denetim/ARAC-SEFER-OK-SINAV-0075.py <seferler.json>

İKİ YÖNLÜ SINAV (yeni denetim iki yönde sınanmadan çalışıyor sayılmaz):
  ① `rota`sı olan HER kayıt için: rota uçları == yol uçları (istasyonlar korunmuş), ve
     ne_10m_land üzerinde kara km'si (liman muafiyeti + KASTEN kara bacakları hariç) ≤ 5.
  ② KONTROL YÖNÜ: aynı sınav, rotası OLMAYAN deniz kayıtlarında KARA KESTİĞİNİ de
     yakalamalı — yani sınav "hep geçiyor" değil. (Yama öncesi 546 km, sonrası ≤ 5 km.)
Çıkış kodu 0 = geçti, 1 = ihlal var.
"""
import json, sys, importlib.util, os
spec = importlib.util.spec_from_file_location(
    "rota", os.path.join(os.path.dirname(os.path.abspath(__file__)), "ARAC-SEFER-OK-DENIZ-ROTA-0075.py"))
rota = importlib.util.module_from_spec(spec); spec.loader.exec_module(rota)

ESIK_KM = 5.0
d = json.load(open(sys.argv[1], encoding="utf-8"))
ihlal = 0; gecen = 0; rotasiz_deniz = 0; rotasiz_kesen = 0
for s in d:
    ist = s["yol"]
    if s.get("rota"):
        r = s["rota"]
        uc_ok = r[0] == ist[0] and r[-1] == ist[-1]
        kb = rota.kasten_kara(ist)                  # KASTEN kara bacakları (aynı sınıflama)
        k, t = rota.kara_km_disi(r, ist, kb)
        ok = uc_ok and k <= ESIK_KM
        print("%s  %-62s kara %5.1f km / %5d km · uçlar %s" % (
            "GEÇTİ " if ok else "İHLAL ", s["ad"][:62], k, t, "korunmuş" if uc_ok else "BOZUK"))
        gecen += ok; ihlal += (not ok)
    elif s.get("tur") == "deniz":
        rotasiz_deniz += 1
        kb = rota.kasten_kara(ist)
        k, t = rota.kara_km_disi(ist, ist, kb)
        if k > ESIK_KM:
            rotasiz_kesen += 1
            print("KONTROL (rotasız, kara KESİYOR — sınav yakalıyor)  %-50s %5.1f km" % (s["ad"][:50], k))
print("rotalı kayıt: geçti %d · ihlal %d · rotasız deniz %d (kara kesen %d)" % (gecen, ihlal, rotasiz_deniz, rotasiz_kesen))
sys.exit(1 if ihlal else 0)
