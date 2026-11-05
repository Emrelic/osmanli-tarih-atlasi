"""ONERI yükseltme turu sonucunu (db_ry_NNN.json) dadim_sonuc'taki EŞLEŞEN ONERI satırlarına işler.
Eşleşme: (dosya_satir, alan, d, f) + hukum ONERI. Öneri (oneri alanı) KORUNUR; hukum, kaynak2, alinti2 ve YUKSELTME TURU notu eklenir.
KAYNAKLI → hukum KAYNAKLI (öneri artık iki kaynaklı) · ONERI → ONERI · CELISKI/HATALI_ONERI → hukum ONERI kalır, _etiket ile işaretlenir."""
import json, sys
sys.stdout.reconfigure(encoding="utf-8")
yol = "denetim/DADIM-1104/dadim_sonuc.json"
T = json.load(open(yol, encoding="utf-8"))
say = {}
esz = 0
for p in sys.argv[1:]:
    R = json.load(open(p, encoding="utf-8"))
    for ad, yeni in R.items():
        for y in yeni:
            a = (y.get("dosya_satir"), y.get("alan"), y.get("d"), y.get("f"))
            m = [r for r in T.get(ad, []) if (r.get("dosya_satir"), r.get("alan"), r.get("d"), r.get("f")) == a and r.get("hukum") == "ONERI"]
            if not m:
                print("EŞLEŞMEDİ:", ad, a); esz += 1; continue
            r = m[0]
            h = y.get("hukum") or "ONERI"
            say[h] = say.get(h, 0) + 1
            r["kaynak2"] = y.get("kaynak2"); r["alinti2"] = y.get("alinti2")
            if y.get("oneri_son"): r["oneri_son"] = y["oneri_son"]  # ajanın teyit ettiği son değer (yıla indirilmiş vb.)
            if y.get("tarayici_gerekli"): r["tarayici_gerekli"] = y["tarayici_gerekli"]
            if y.get("dogrusu"): r["dogrusu"] = y["dogrusu"]  # HATALI_ONERI satırında ajanın önerdiği doğru biçim
            r["not"] = "YÜKSELTME TURU (%s): %s · %s" % (h, y.get("not") or "", r.get("not") or "")
            if h == "KAYNAKLI":
                r["hukum"] = "KAYNAKLI"; r["_etiket"] = "IKI_KAYNAKLI_ONERI"
            elif h in ("CELISKI", "HATALI_ONERI"):
                r["_etiket"] = h
json.dump(T, open(yol, "w", encoding="utf-8"), ensure_ascii=False, indent=1)
print("işlenen", say, "eşleşmeyen", esz)
