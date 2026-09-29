# KRONO-TUNA-0929 — kendi dosyalarındaki odaksız maddelere odak/yer atar.
# Kullanım: py denetim/ARAC-KRONO-TUNA-0929-ODAK.py <data/dosya.js> <eşleme.json>
# eşleme: [{"t": "...", "b_bas": "<başlığın ilk harfleri>", "yer_id": "...", "odak_yer": [...]}]
# Yalnız `{"t"` ile başlayan madde satırlarına dokunur, başlık yorumuna dokunmaz.
# Her eşleme TAM BİR satırı tutmalı; tutmayan ya da birden çok tutan eşleme HATA verir.
import sys, json
yol, esl_yol = sys.argv[1], sys.argv[2]
esl = json.load(open(esl_yol, encoding="utf-8"))
sat = open(yol, encoding="utf-8").read().split("\n")
tuttu = [0] * len(esl)
for i, s in enumerate(sat):
    if not s.startswith('{"t"'):
        continue
    son = "," if s.rstrip().endswith(",") else ""
    m = json.loads(s.rstrip().rstrip(","))
    for j, e in enumerate(esl):
        if m["t"] == e["t"] and m["b"].startswith(e["b_bas"]):
            tuttu[j] += 1
            if "yer_id" in e: m["yer_id"] = e["yer_id"]
            if "odak_yer" in e: m["odak_yer"] = e["odak_yer"]
            sat[i] = json.dumps(m, ensure_ascii=False) + son
hata = [esl[j] for j, n in enumerate(tuttu) if n != 1]
if hata:
    print("HATA — tutmayan/çok tutan eşleme:", hata); sys.exit(1)
open(yol, "w", encoding="utf-8").write("\n".join(sat))
print(f"{len(esl)} eşleme uygulandı")
