# -*- coding: utf-8 -*-
"""siniflar.json → YAZIM.md (eşleme tablosu) + sınıf özeti."""
import os, json, collections

BURA = os.path.dirname(os.path.abspath(__file__))
K = json.load(open(os.path.join(BURA, "siniflar.json"), encoding="utf-8"))
c = collections.Counter(x["sinif"] for x in K)
n = collections.Counter()
for x in K:
    n[x["sinif"]] += x["sayi"]
L = ["# YAZIM — kronolojide atlasla eşleşmeyen yer adları: sınıf özeti ve eşleme tablosu\n",
     "Ölçen: LAB SALI · 4 Kasım 2026 · `yer_sinifla.py`. Evren: olaylar*.js + kronoloji_sinir*.js `yer` alanı, üst düzey ayırıcılarla "
     "(/ , ; · ve) bölünmüş parçalar; eşleşme = normalleştirilmiş ad kökü ya da parantez içi eş ad (nokta_aday.py ile aynı ölçüt).\n",
     "Not: önceki sayım (1.529) ayırıcı parantez içlerini de bölüyordu; düzeltilmiş ayırıcıyla **%d farklı ad, %d anılma**.\n" % (len(K), sum(n.values())),
     "## Sınıf özeti\n", "| sınıf | ad | anılma | anlamı |", "|---|---|---|---|"]
ANLAM = {"YAZIM": "atlasta başka yazımla var — eşleme kaydı (aşağıda)", "BÖLGE/ÜLKE": "yer değil: ülke, bölge, ırmak, deniz, devlet adı",
         "EKSİK": "atlasta olmayan yerleşim adayı → EKSIK-ADAY.md", "YABANCI-YAZI": "Latin dışı yazı (Çince, Kiril, İbranice…) — çoğu Latin yazımlı eşinin kopyası",
         "ROTA/YAKLAŞIK": "'X yakını', 'X → Y', 'X sınırı' gibi yaklaşık ya da güzergâh ifadesi", "YAPI": "saray, kale, cami, liman",
         "SEMT": "İstanbul semti / yapı adı", "DÖNEM/KÜLTÜR": "arkeolojik dönem, kültür, evre adı"}
for s, k in c.most_common():
    L.append("| %s | %d | %d | %s |" % (s, k, n[s], ANLAM.get(s, "")))
L.append("\n## Eşleme tablosu (YAZIM)\n")
L.append("**YÜKSEK** = eş-ad tablosu ya da yazım oranı ≥ 0,95 — KASA mekanik ekleyebilir (kronoloji maddesinin `yer_id`'si hedef yapılır "
         "ya da hedef kayda eş ad eklenir). **DOĞRULA** = bulanık eşleşme, KASA gözle onaylamalı (yanlış eşler elendi ama kalan olabilir).\n")
L.append("| kronolojideki ad | anılma | hedef atlas kaydı | güven | ölçüt | örnek madde |")
L.append("|---|---|---|---|---|---|")
for x in sorted([x for x in K if x["sinif"] == "YAZIM"], key=lambda x: (x["guven"] != "YÜKSEK", -x["sayi"])):
    o = x["ornek"][0]
    L.append("| %s | %d | %s | %s | %s | %s — %s |" % (x["ad"].replace("|", "/"), x["sayi"], x["hedef"], x["guven"], x["oran"], o["t"],
                                                    o["b"][:70].replace("|", "/")))
open(os.path.join(BURA, "YAZIM.md"), "w", encoding="utf-8", newline="\n").write("\n".join(L))
print(dict(c))
