# -*- coding: utf-8 -*-
"""hukumler.json → KASA-LISTE.md: düzeltme gerektiren hükümler kova ve güvene göre."""
import json, os, collections

BURA = os.path.dirname(os.path.abspath(__file__))
H = {k: v for k, v in json.load(open(os.path.join(BURA, "hukumler.json"), encoding="utf-8")).items()
     if not k.startswith("_")}
A = {a["no"]: a for a in json.load(open(os.path.join(BURA, "adaylar.json"), encoding="utf-8"))}
KOVA = [("BIRLESMELI", "ara yerleşime dönem yazılınca parça ana gövdeye bağlanır"),
        ("YAPAY-b", "ara yerleşimin dönemi eksik/yanlış"),
        ("YAPAY-c", "parçanın içindeki yerleşimin dönemi yanlış"),
        ("YAPAY-d", "kısa ara: komşu günler birbirini tutmuyor"),
        ("YAPAY-k", "aynı yapı iki devlet kimliğiyle"),
        ("YAPAY-a", "noktasız emilme: nokta eklenmeli (kaynakla) ya da beyan"),
        ("YAPAY-m", "motor sorusu — veriyle çözülmez (MOTOR-SORU.md)")]
SIRA = {"KAYNAKLI": 0, "OLCUM": 1, "KAYNAK-GEREK": 2}
L = ["# ENKLAV-1103 — KASA düzeltme listesi\n",
     "Üreten: LAB SALI, `kasa_liste_yaz.py` ← `hukumler.json`. Her satır bir aday; ayrıntı `ADAYLAR.md`.",
     "**Güven sırası:** KAYNAKLI (kaynak okundu) → OLCUM (veri olgusu; tarih gerektiren düzeltmede yine kaynak ister) "
     "→ KAYNAK-GEREK (önce kaynak sırasıyla teyit; gün uydurulmaz). CLAUDE.md değişmezleri geçerlidir: her veri "
     "değişikliğinden sonra `denetle`, kronoloji maddesi (Değişmez 2).\n"]
c = collections.Counter(v["kova"] for v in H.values())
L.append("Sayım: " + " · ".join("%s %d" % (k, c[k]) for k in ["GERCEK"] + [k for k, _ in KOVA]) + "\n")
for k, aciklama in KOVA:
    grup = sorted([(no, v) for no, v in H.items() if v["kova"] == k], key=lambda x: (SIRA.get(x[1]["guven"], 3), x[0]))
    if not grup:
        continue
    L.append("## %s — %s (%d)\n" % (k, aciklama, len(grup)))
    L.append("| aday | devlet · yıllar | güven | düzeltme |")
    L.append("|---|---|---|---|")
    for no, v in grup:
        a = A.get(no, {})
        L.append("| %s | %s %s–%s | %s | %s |" % (no, a.get("devlet", "?"), a.get("f", "")[:4], a.get("t", "")[:4],
                                              v["guven"], v["duzeltme"].replace("|", "/").replace("\n", " ")))
    L.append("")
open(os.path.join(BURA, "KASA-LISTE.md"), "w", encoding="utf-8").write("\n".join(L))
print(dict(c))
