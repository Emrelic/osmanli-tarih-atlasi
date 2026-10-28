# -*- coding: utf-8 -*-
"""Urfa/Maras/Akcahisar kararlarini duzeltme-gecisi bulgulariyle gunceller."""
import io, json, os
KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
ana = os.path.join(KOK, "glm", "epok_karar.jsonl")
rows = {}
with io.open(ana, encoding="utf-8") as f:
    rows = [json.loads(l) for l in f if l.strip()]

GUNCEL = {
    "Urfa": {
        "kova": 3, "tdv_sahip": "", "tdv_tarihi": "1235-1241 Eyyûbî",
        "guven": "orta",
        "alinti": "Şehir 638’de (1241) tekrar Eyyûbîler’in eline geçti",
        "not": ("koça takip: urfa→sanliurfa (bk. ŞANLIURFA). 1235 Selçuklu 4 ay → Eyyûbî; "
                "1241 'tekrar Eyyûbîler’in eline geçti' (şehir cümlesi); 1251 Moğol YAĞMASI akın; "
                "1260 'bölge Hülâgû’ya teslim' — bölge cümlesi şehre taşınmaz (D208) ve "
                "Aynicâlût sonrası sahibi açık değil. 1281 penceresinde atlas memluk'u "
                "doğrulayan YA DA çürüten şehir cümlesi yok"),
    },
    "Maraş": {
        "kova": 1, "tdv_sahip": "Ermeni (Kilikya) — Memlük girişi 1293",
        "tdv_tarihi": "1293", "guven": "yuksek",
        "alinti": "692’de (1293) Sultan Halil Ermeniler’le bir antlaşma yaparak Maraş’ı almaya muvaffak oldu",
        "not": ("atlas memluk 1281; koça takip: maras→kahramanmaras. Memlük alışı 1293 ve "
                "Ermeniler'İN elinden alındı ⇒ 1281'de memluk değil (1258 Selçuklu çerçevesi). "
                "1298: Memlük çekilme→Ermeni→tekrar Memlük — el değiştirme sürüyor. "
                "Üsküp sınıfı: pencere-sonrası edinme, önceki sahibi dışlar"),
    },
    "Akçahisar (Kruja)": {
        "kova": 1, "tdv_sahip": "Anjou (Charles d'Anjou)", "tdv_tarihi": "1272-1284",
        "guven": "yuksek",
        "alinti": "1271-1272’de Fransız prensi ve sonradan Güney İtalya’nın yöneticisi olan Anjou hânedanından Charles, Draç ile Kruya’yı alıp eski kaleyi yeniden yaptırdı",
        "not": ("atlas arnavutluk 1281; koça takip: akcahisar→kruya. Charles alışı 1271-72; "
                "Bizans geri alışı 1284 ('Charles’ın ölümünün ardından 1284’te Bizans "
                "İmparatoru II.') ⇒ 1281 iki uç arasında = Anjou. 1253 Golem yalnız yerel hâkim"),
    },
}
for r in rows:
    if r["ad"] in GUNCEL:
        r.update(GUNCEL[r["ad"]])

with io.open(ana, "w", encoding="utf-8", newline="\n") as f:
    for r in rows:
        f.write(json.dumps(r, ensure_ascii=False) + "\n")
kova = {}
for r in rows:
    kova[r["kova"]] = kova.get(r["kova"], 0) + 1
print("güncellendi: 3 kayıt · toplam:", len(rows), "· kova:", dict(sorted(kova.items())))
