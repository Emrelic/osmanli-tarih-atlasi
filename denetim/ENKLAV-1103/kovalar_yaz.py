# -*- coding: utf-8 -*-
"""kovalar.json → KOVALAR.md. Sıra: önce hemen uygulanabilir VERİ ÖLÇÜMÜ kovaları, sonra boşluğu ölçülmüş ama günü
kaynak isteyenler, sonra yalnız KAYNAK-GEREK, en sonda model/motor kararları."""
import json, os, collections

BURA = os.path.dirname(os.path.abspath(__file__))
J = json.load(open(os.path.join(BURA, "kovalar.json"), encoding="utf-8"))
K = {k["kod"]: k for k in J["kovalar"]}
KY = os.path.join(BURA, "kovalar_kaynak.json")
KAYNAKLI = {k: v for k, v in json.load(open(KY, encoding="utf-8")).items() if not k.startswith("_")} if os.path.exists(KY) else {}
SIRA = [
    ("1. Hemen uygulanabilir — VERİ ÖLÇÜMÜ (dönem olgusu ölçüldü; halef/gün notu satırda)", ["F", "G", "H", "L2"]),
    ("2. Boşluk VERİ ÖLÇÜMÜ, günler/halef KAYNAK-GEREK", ["A-KAF", "A-KKF", "A-UKR", "A-BEL", "A-UZD", "B", "L1", "L3", "N1", "N1b", "N2", "N5", "N6", "N4", "N7", "N8", "N9", "N10", "N11", "N12", "I", "J"]),
    ("3. Yalnız KAYNAK-GEREK", ["C", "N3"]),
    ("4. Model / motor kararı (Emre · HAVVA)", ["D", "E", "M"]),
]


def hucre(s):
    return str(s if s is not None else "—").replace("|", "/").replace("\n", " ")


L = ["# KOVALAR — ENKLAV-1103/1104 hükümlerinden toplu düzeltme kovaları\n",
     "Ölçen: LAB SALI · %s · ağaç `lab-1104-kovalar` (origin/main 09c1aa176 + ENKLAV dalları) · alet `kovalar_olc.py` · "
     "yerleşim %d · kronoloji maddesi %d (olaylar*.js + kronoloji_sinir*.js).\n" % (J["olcum"]["tarih"], J["olcum"]["yerlesim"], J["olcum"]["madde"]),
     "- **Satır** = bir yerleşim (ya da kimlik/parça). `dosya:satır` kaydın `ad:` satırıdır. *Şimdi* = bugünkü dönem(ler); *Öneri* = "
     "düzeltme; *Kronoloji* = önerilen kırılma gününün ±30 gününde yeri ya da yeni sahibi anan madde (`VAR` yer adıyla, "
     "`VAR (taraf)` yalnız devlet adıyla — zayıf; `YOK` = kırılma yazılırsa Değişmez 2 açılır, madde de yazılmalı).",
     "- **Güven:** OLCUM = veri olgusu; KAYNAK-GEREK = önerinin günü/halefi kaynak ister (CLAUDE.md Kaynak kuralı); "
     "EMRE KARARI / MOTOR SORUSU = veri düzeltmesi değil.",
     "- Kutu (enlem-boylam) kuralları kabadır; her kovanın başında kural yazılı. KASA uygularken satır satır göz atmalı.\n",
     "## Özet\n", "| kova | ad | satır | dayanak | kronoloji YOK |", "|---|---|---|---|---|"]
for _, kodlar in SIRA:
    for kod in kodlar:
        k = K[kod]
        yok = sum(1 for s in k["satirlar"] if s.get("kronoloji") == "YOK")
        L.append("| %s | %s | %d | %s | %s |" % (kod, hucre(k["ad"]), k["sayi"], hucre(k["dayanak"]), yok))
L.append("\nToplam satır: %d.\n" % sum(k["sayi"] for k in J["kovalar"]))
for baslik, kodlar in SIRA:
    L.append("## %s\n" % baslik)
    for kod in kodlar:
        k = K[kod]
        L.append("### %s · %s (%d)\n" % (kod, k["ad"], k["sayi"]))
        L.append("- Dayanak: %s" % k["dayanak"])
        L.append("- Kural: %s" % k["aciklama"])
        if k.get("hukumler"):
            L.append("- Hükümler: %s" % k["hukumler"])
        if kod in KAYNAKLI:
            L.append("- **Kaynaklı günler (KAYNAK2):**")
            for g in KAYNAKLI[kod]:
                if "gun" in g:
                    L.append("  - `%s` %s — %s" % (g["gun"], g["olay"], g["kaynak"]))
                else:
                    L.append("  - %s" % g["not"])
        oneriler = collections.Counter(s["oneri"] for s in k["satirlar"])
        ortak = oneriler.most_common(1)[0][0] if oneriler and oneriler.most_common(1)[0][1] > 1 else None
        if ortak:
            L.append("- Ortak öneri (aksi yazılmadıkça): %s" % ortak)
        L.append("")
        if not k["satirlar"]:
            L.append("_Bugünkü veride eşleşen satır yok._\n")
            continue
        L.append("| ad | dosya:satır | şimdi | öneri | güven | kronoloji |")
        L.append("|---|---|---|---|---|---|")
        for s in k["satirlar"]:
            L.append("| %s | `%s` | %s | %s | %s | %s |" % (hucre(s["ad"]), s["yer"], hucre(s["simdi"]),
                                                          "(ortak)" if s["oneri"] == ortak else hucre(s["oneri"]),
                                                          hucre(s.get("guven")), hucre(s.get("kronoloji"))))
        L.append("")
open(os.path.join(BURA, "KOVALAR.md"), "w", encoding="utf-8", newline="\n").write("\n".join(L))
print("KOVALAR.md", len(L), "satır")
