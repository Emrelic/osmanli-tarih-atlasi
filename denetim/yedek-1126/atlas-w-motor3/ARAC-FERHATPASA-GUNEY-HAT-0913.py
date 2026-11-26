# -*- coding: utf-8 -*-
"""FERHATPASA-GUNEY — SINIR HATTI DÜĞÜMLERİ (SALT OKUR)

🔴 Koordinat UYDURULMAZ: her düğüm, iki ATLAS noktasının (Osmanlı tarafı ·
   Safevî tarafı) orta noktasıdır. Yani düğüm "sınır tam burada" demez,
   "sınır bu iki yerleşimin ARASINDAN geçer" der — kaynağın taşıdığı
   hassasiyet budur (antlaşma çizgi çizmiyor, statüko: KITA 29 §⓪).
   Orta nokta, motorun Voronoi ortası ile aynı mantıktır (CLAUDE.md §2).

İki hat basılır: 1590-03-21 ve 1593-06-15 (Luristan Safevî'ye döndükten sonra,
Nihâvend kalesi Osmanlı ADASI olarak kalır — Monshi s.824-825).
Kuzeyden güneye sıralı. Çıktı JSON parçası olarak da basılır.

Kullanım:  py denetim/ARAC-FERHATPASA-GUNEY-HAT-0913.py
"""
import os, sys, io, json
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8", errors="replace")
KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(KOK, "arac"))
import girdi

IX = {y["ad"]: y for y in girdi.yukle(sessiz=True)}

# (osmanlı tarafı, safevî tarafı, dayanak)
HAT_1590 = [
    ("Şehrizor", "Bâne", "kuzey ucu lat≈36 — Bâne hükmü 0047'nin (bkz.); Şehrizor antlaşma maddesinde adıyla (Kütükoğlu 1962:195-196) · Iranica IRAQ iv"),
    ("Halepçe", "Merîvan", "Merîvan hükmü 0047'nin (bkz.); Halepçe Şehrizor eyaleti (örtülü)"),
    ("Kirmanşah", "Bîcâr", "Kirmanşah örtülü-Osmanlı (Kalhor beyleri 'provincial governors on behalf of the Ottomans', Monshi s.840); Bîcâr 0047 (bkz.)"),
    ("Kirmanşah", "Hemedan", "Hemedan SAFEVÎ valisi 1590·1595·1603 (Monshi s.587·690·825) · Iranica NEHĀVAND"),
    ("Nihâvend", "Hemedan", "Nihâvend kalesi Osmanlı 1588-1603 'at the heart of the province of Hamadan' (Monshi s.583·824) · TDV nihavend--iran"),
    ("Nihâvend", "Burûcird", "Burûcird Safevî tarafında (Monshi s.643: Bayat birliği orada toplanıyor, Şâhverdî oraya AKIN ediyor)"),
    ("Luristan", "Burûcird", "Luristan/Hürremâbâd 1590'da Osmanlı TÂBİSİ: 'Sahverdi then became the vassal of the Ottoman governor of Baghdad' (Monshi s.643) · TDV luristan · Iranica CHRONOLOGY 1590"),
    ("Luristan", "Dizfûl", "Dizfûl/Şüşter Safevî (Monshi s.593: barıştan sonra Mahdīqolī Khan Šāmlū Şüşter'de) · TDV huzistan [74-75]"),
    ("Kût el-Amâre", "Dizfûl", "Bağdat eyaleti ↔ Hûzistan — Iranica IRAQ iv [120]: 'exact borders … in Khuzestan remained undefined'"),
    ("Ammâre", "Havîza", "Havîza Müşa'şa' seyyidleri, Safevî tâbisi (Monshi s.675-677 · Iranica IRAQ iv [64])"),
    ("Kürne", "Havîza", "aynı"),
    ("Basra", "Ahvaz", "Ahvaz örtülü-Safevî (Hûzistan iç bölgesi)"),
    ("Fâv", "Abâdân", "KÖRFEZ UCU — ⚠️ Abâdân'ın 1590 sahibi BULUNAMADI (atlas Osmanlı diyor; TDV huzistan [92] 1837'de Osmanlı'nın Abadan'ı 'ele geçirdiğini' yazıyor ⇒ 1590 için hüküm yok). Düğüm yalnız Şattülarap ağzını işaretler."),
]
HAT_1593 = [
    ("Şehrizor", "Bâne", "= 1590"),
    ("Halepçe", "Merîvan", "= 1590"),
    ("Kirmanşah", "Bîcâr", "= 1590"),
    ("Kirmanşah", "Hemedan", "= 1590"),
    ("Kirmanşah", "Luristan", "1593-94: Şah Hürremâbâd'ı işgal etti, Mahdīqolī Khan Šāmlū vali (Monshi s.644); Şâhverdî 'Ottoman territory'ye kaçtı — Kür-kûh 'on the border between Lorestan and Baghdad' (s.644-645)"),
    ("Kût el-Amâre", "Luristan", "aynı"),
    ("Kût el-Amâre", "Dizfûl", "= 1590"),
    ("Ammâre", "Havîza", "= 1590"),
    ("Kürne", "Havîza", "= 1590"),
    ("Basra", "Ahvaz", "= 1590"),
    ("Fâv", "Abâdân", "= 1590 (Abâdân belirsiz)"),
]
ADA_1593 = ("Nihâvend", "OSMANLI ADASI 1593-1603: 'about every ten days the Ottomans would march through their [qezelbāš] tribal territory and come and go freely to the fort' (Monshi s.824) — kaynağın KENDİSİ enklavı tarif ediyor")


def dugum(o, s, dayanak):
    a, b = IX[o], IX[s]
    return {"ad": "%s | %s" % (o, s),
            "lat": round((a["lat"] + b["lat"]) / 2, 3),
            "lon": round((a["lon"] + b["lon"]) / 2, 3),
            "osmanli_tarafi": {"ad": o, "lat": round(a["lat"], 3), "lon": round(a["lon"], 3)},
            "safevi_tarafi": {"ad": s, "lat": round(b["lat"], 3), "lon": round(b["lon"], 3)},
            "dayanak": dayanak}


for baslik, hat in (("1590-03-21", HAT_1590), ("1593-06-15", HAT_1593)):
    print("== sinir_hatti_guney %s — kuzey→güney · BATI/GÜNEYBATI = OSMANLI ==" % baslik)
    out = [dugum(*h) for h in hat]
    for i, d in enumerate(out, 1):
        print("  %2d  %-26s %.3f %.3f" % (i, d["ad"], d["lat"], d["lon"]))
    print(json.dumps(out, ensure_ascii=False))
a = IX[ADA_1593[0]]
print("== ada 1593-1603 ==\n  %s %.3f %.3f · %s" % (ADA_1593[0], a["lat"], a["lon"], ADA_1593[1]))
