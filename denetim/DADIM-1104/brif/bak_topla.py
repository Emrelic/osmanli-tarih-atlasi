"""BAKILMADI turu sonucunu (db_rb_NN.json: {yerleşim: [satır,...]}) dadim_sonuc'ta EŞLEŞEN satırların yerine koyar.
Eşleşme: (dosya_satir, alan, d, f). Eşleşmeyen satır eklenmez, raporlanır. Satırın eski notu yeni notun sonuna eklenir."""
import json, sys
sys.stdout.reconfigure(encoding="utf-8")
yol = "denetim/DADIM-1104/dadim_sonuc.json"
T = json.load(open(yol, encoding="utf-8"))
deg = esz = 0
for p in sys.argv[1:]:
    R = json.load(open(p, encoding="utf-8"))
    for ad, yeni in R.items():
        if ad not in T: print("YOK yerleşim:", ad); esz += len(yeni); continue
        for y in yeni:
            a = (y.get("dosya_satir"), y.get("alan"), y.get("d"), y.get("f"))
            m = [r for r in T[ad] if (r.get("dosya_satir"), r.get("alan"), r.get("d"), r.get("f")) == a and r.get("hukum") == "BAKILMADI"]
            if not m: print("EŞLEŞMEDİ:", ad, a); esz += 1; continue
            r = m[0]
            eski = r.get("not") or ""
            r.update({k: y[k] for k in ("hukum", "kaynak", "alinti", "oneri") if k in y})
            r["not"] = "BAKILMADI TURU: " + (y.get("not") or "") + (" · eski: " + eski if eski else "")
            deg += 1
json.dump(T, open(yol, "w", encoding="utf-8"), ensure_ascii=False, indent=1)
print("değişen", deg, "eşleşmeyen", esz)
