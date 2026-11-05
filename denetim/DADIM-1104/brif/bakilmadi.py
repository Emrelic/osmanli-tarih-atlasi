"""'baktım, yok' (BULUNAMADI) ile 'bakmadım' ayrımı: notunda bakılmadı/ele alınmadı/bütçe/okunmadı geçen BULUNAMADI satırları → BAKILMADI.
DÜZELTME (UMIT, gece-10): BAKILMADI turundan gelen satırlarda (not 'BAKILMADI TURU:' ile başlar) yalnız YENİ not okunur;
' · eski: ' sonrası eski not (eski 'bakılmadı' ifadesini taşır) hesaba katılmaz."""
import json, re, sys
sys.stdout.reconfigure(encoding="utf-8")
yol = "denetim/DADIM-1104/dadim_sonuc.json"
T = json.load(open(yol, encoding="utf-8"))
R = re.compile(r"bak[ıi]lmad[ıi]|ele al[ıi]nmad[ıi]|b[üu]t[çc]e|ara[nş]mad[ıi]|okunmad[ıi]|ARAŞTIRILMADI|HİÇ ARAŞTIRILMADI|incelenmedi|taranmad[ıi]", re.I)
n = 0
for ad, rows in T.items():
    for r in rows:
        nt = r.get("not") or ""
        if nt.startswith("BAKILMADI TURU:"):
            continue  # bu turun ajanı hükmü bilerek verdi; BAKILMADI-BULUNAMADI ayrımı brifte zorunluydu
        if r.get("hukum") == "BULUNAMADI" and R.search(nt):
            r["hukum"] = "BAKILMADI"; n += 1
json.dump(T, open(yol, "w", encoding="utf-8"), ensure_ascii=False, indent=1)
print("BULUNAMADI → BAKILMADI", n)
