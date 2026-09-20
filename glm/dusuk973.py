# -*- coding: utf-8 -*-
# glm/dusuk973.py — GLM-7 · DUSUK-973 ayrıştırması (M-4685 iş 1).
# Koşum: py -X utf8 glm/dusuk973.py   (depo kökünden)
# Çıktı : glm/DUSUK-973.json + glm/DUSUK-973.md
#
# SORU: M-ALANI-ONERI'de güven DUSUK çıkan 973 kaydı SEBEBE göre grupla
# (M-4685): (a) aday bölge adı var ama konum çelişiyor · (b) aday adı yok ·
# (c) madde olayla ilgisiz (yalnız-pencere) · (d) başka.
#
# 🔴 YALNIZ ÖLÇÜM — veri yazılmaz. Girdi: glm/M-ALANI-ONERI.json (üretici
# betik glm/m_alani_oneri.py; evreni ve güven kuralını orası tanımlar).
#
# SINIFLAMA ÖNCELİĞİ (ilk eşleşen alır — çift sayım yok; tanım AÇIK):
#   (a) öneri_m DOLU ve konum_km ÖLÇÜLMÜŞ ve >300 km  → konum çelişiyor
#       (DUSUK'u üreten tek 'öneri-var' yolu budur: ölçülemediğinde ORTA
#       verilir — m_alani_oneri.py güven bloğu)
#   (b) öneri_m BOŞ → aday yok; alt kırılım kayıt['sonuc'] metninden:
#       (b1) '±30 günde madde YOK' (pencere-boş) · (b2) 'çıkarılamadı'
#   (c) DUSUK üretiminde BAĞIMSIZ yol YOK — dayanak-ilgisizlik (yalnız-
#       pencere) KESİŞEN boyuttur; (c) = (a) ∩ dayanak=yalnız-pencere
#       olarak AYRI raporlanır, ana sınıflamaya girmez (çift sayım önlemi)
#   (d) (a)+(b) dışında kalan DUSUK (ölçülür; tanım gereği 0 beklenir)
#
# EŞİK DUYARLILIĞI (M-4685): E = 300/500/800 km. Yeniden sınıflama kuralı:
# öneri-var kayıtta konum_km ÖLÇÜLMÜŞSE sınıf = ORTA (km≤E) / DUSUK (km>E);
# ölçülemediyse (km yok) mevcut sınıf SABİT (YÜKSEK/ORTA kalır — ölçüm
# yoksa eşik bir şey değiştiremez). İki yön de sayılır (D206 ters yön):
# yükselen (DUSUK→ORTA) ve düşen (ORTA→DUSUK).

import json
import os

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
GLM = os.path.dirname(os.path.abspath(__file__))

RAP = json.load(open(os.path.join(GLM, "M-ALANI-ONERI.json"), encoding="utf-8"))
kayitlar = RAP["kayitlar"]
ESIK_SIMDI = 300.0

# ── 1. DUSUK kayıtların sebep sınıfları ────────────────────────────────────
dusuk = [k for k in kayitlar if k.get("guven") == "DUSUK"]

def sinif(k):
    if k.get("oneri_m"):
        if k.get("konum_km") is not None:
            return "a-konum-celisiyor"          # öneri var, konum ölçülmüş, >300
        return "d-baska"                         # öneri var ama km yok + DUSUK —
    sonuc = k.get("sonuc") or ""                 # üretim kuralında olmayan yol
    if "madde YOK" in sonuc:
        return "b1-pencere-bos"
    if "çıkarılamadı" in sonuc:
        return "b2-aday-cikarilamadi"
    return "d-baska"

grup = {}
for k in dusuk:
    grup.setdefault(sinif(k), []).append(k)

def km_istatistik(kayitlar_):
    kms = sorted(k["konum_km"] for k in kayitlar_ if k.get("konum_km") is not None)
    if not kms:
        return {"adet": 0, "min": None, "ortanca": None, "max": None}
    return {"adet": len(kms), "min": round(kms[0], 1),
            "ortanca": round(kms[len(kms) // 2], 1), "max": round(kms[-1], 1)}

def ozet_10(kayitlar_, anahtar):
    ks = sorted(kayitlar_, key=lambda x: -(x.get("konum_km") or 0))[:10]
    return [{
        "yerlesim": k["yerlesim"], "tarih": k["kirilma_tarihi"],
        "oneri_m": k.get("oneri_m"), "konum_km": (round(k["konum_km"], 1)
                                                  if k.get("konum_km") is not None
                                                  else None),
        "m_simdi": k.get("m_simdi") or "",
        "dayanak_turu": k.get("dayanak_turu"),
        "dayanak_madde": ((k.get("dayanak_maddeler") or [{}])[0].get("baslik")
                          or "")[:60],
        "dosya": k.get("dosya"),
    } for k in ks]

# (c) KESİŞEN boyut: (a) grubunun dayanak dağılımı + tüm DUSUK'un dayanak dağılımı
from collections import Counter
dayanak_a = Counter(k.get("dayanak_turu") for k in grup.get("a-konum-celisiyor", []))
dayanak_hele = Counter(k.get("dayanak_turu") for k in dusuk)
a_yalniz = dayanak_a.get("yalniz-pencere", 0)

GRUPLAR = {
    "a-konum-celisiyor": {
        "tanim": "aday bölge adı VAR (öneri_m dolu), konum ÖLÇÜLDÜ ve >300 km — "
                 "beyan/çıkarım başka bölgeye ait olabilir",
        "kayit": len(grup.get("a-konum-celisiyor", [])),
        "benzersiz_yerlesim": len({k["yerlesim"] for k in
                                   grup.get("a-konum-celisiyor", [])}),
        "km": km_istatistik(grup.get("a-konum-celisiyor", [])),
        "dayanak_dagilimi": dict(dayanak_a),
        "ornekler": ozet_10(grup.get("a-konum-celisiyor", []), None),
    },
    "b1-pencere-bos": {
        "tanim": "aday YOK — ±30 gün penceresinde madde hiç yok (yeni madde ister)",
        "kayit": len(grup.get("b1-pencere-bos", [])),
        "benzersiz_yerlesim": len({k["yerlesim"] for k in
                                   grup.get("b1-pencere-bos", [])}),
        "ornekler": ozet_10(grup.get("b1-pencere-bos", []), None),
    },
    "b2-aday-cikarilamadi": {
        "tanim": "aday YOK — pencerede madde var ama metninden bölge adı "
                 "çıkarılamadı (ölçülemedi; yeni madde ister)",
        "kayit": len(grup.get("b2-aday-cikarilamadi", [])),
        "benzersiz_yerlesim": len({k["yerlesim"] for k in
                                   grup.get("b2-aday-cikarilamadi", [])}),
        "ornekler": ozet_10(grup.get("b2-aday-cikarilamadi", []), None),
    },
    "d-baska": {
        "tanim": "(a)+(b) dışında kalan DUSUK — üretim kuralında böyle yol yok; "
                 "0 beklenir, ölçülür",
        "kayit": len(grup.get("d-baska", [])),
        "benzersiz_yerlesim": len({k["yerlesim"] for k in
                                   grup.get("d-baska", [])}),
        "ornekler": ozet_10(grup.get("d-baska", []), None),
    },
    "_c-kesisen-boyut": {
        "tanim": "(c) 'madde olayla ilgisiz' BAĞIMSIZ sebep DEĞİL — DUSUK'u "
                 "yalnız (a) ve (b) yolları üretir; yalnız-pencere dayanaklı "
                 "DUSUK sayısı KESİŞİM olarak raporlanır (çift sayım önlemi)",
        "dusuk_toplam_dayanak_dagilimi": dict(dayanak_hele),
        "a_icerisinde_yalniz_pencere": a_yalniz,
    },
}

# ── 2. eşik duyarlılığı — iki yön (D206) ────────────────────────────────────
oneri_var = [k for k in kayitlar if k.get("oneri_m")]
oneri_yok = [k for k in kayitlar if not k.get("oneri_m")]

duyarlilik = {}
for E in (300.0, 500.0, 800.0):
    yukselen, dusen, kalan_orta, kalan_dusuk = 0, 0, 0, 0
    for k in oneri_var:
        km = k.get("konum_km")
        if km is None:                      # ölçülemedi → sınıf sabit
            if k["guven"] in ("ORTA", "YUKSEK"):
                kalan_orta += 1
            else:
                kalan_dusuk += 1
            continue
        yeni = "ORTA" if km <= E else "DUSUK"
        if yeni == "ORTA" and k["guven"] == "DUSUK":
            yukselen += 1
        elif yeni == "DUSUK" and k["guven"] in ("ORTA", "YUKSEK"):
            dusen += 1
        elif yeni == "ORTA":
            kalan_orta += 1
        else:
            kalan_dusuk += 1
    net_orta = kalan_orta + yukselen
    net_dusuk = kalan_dusuk + dusen + len(oneri_yok)
    duyarlilik["E=%d" % int(E)] = {
        "yukselen_DUSUK_ORTA": yukselen,
        "dusen_ORTA_DUSUK": dusen,
        "net_ORTA": net_orta,
        "net_DUSUK": net_dusuk,
        "not": "YÜKSEK'ler km≤300 ölçülmüş ya da km'siz olduğundan E≥300'de "
               "YÜKSEK kalır (eşik yalnız km ÖLÇÜLMÜŞ kayıtları etkiler); "
               "öneri-yok kayıtlar (%d) her eşikte DUSUK" % len(oneri_yok),
    }

# ── 3. sınav — bilinen vaka Karlofça 1699 'Sırbistan' (yakalanmalı) ─────────
_srb = [k for k in dusuk if k.get("oneri_m") == "Sırbistan"
        and k["kirilma_tarihi"] == "1699-01-26"]
SINAV = {
    "karlofca_1699_sirbistan_dusuk_mu": {
        "beklenti": "M-ALANI-ONERI'de 1699'da öneri Podolya çıktı; Sırbistan "
                    "adayının kendisi kayıtların 'adaylar' dizisinde km'siz "
                    "kalmıştı — DUSUK'a DÜŞMEMİŞ olması kural tutarlılığıdır "
                    "(ölçülemedi ≠ çelişti)",
        "bulunan": [k["yerlesim"] for k in _srb],
    },
    "esik_300_tutari": duyarlilik["E=300"]["yukselen_DUSUK_ORTA"] == 0
                       and duyarlilik["E=300"]["dusen_ORTA_DUSUK"] == 0,
    "not": "E=300 mevcut eşik olduğundan yükselen/düşen 0 OLMALI — değilse "
           "yeniden sınıflama kuralım üretimle çelişir (iki yön sınavı)",
}

CIKTI = {
    "gorev": "GLM-7 · DUSUK-973 ayrıştırması (M-4685 iş 1)",
    "betik": "glm/dusuk973.py",
    "girdi": "glm/M-ALANI-ONERI.json (üretici: glm/m_alani_oneri.py — evren ve "
             "güven kuralı orada tanımlı; bu betik yalnız ölçülmüş çıktıyı "
             "sınıflar, yeniden üretmez)",
    "tanimlar": {
        "sinif_onceligi": "(a) öneri+dolup konum>300 → (b) öneri boş (b1 pencere-"
                          "boş / b2 aday-çıkarılamadı) → (d) kalan; (c) kesişen "
                          "boyut olarak ayrı raporlanır",
        "duyarlilik": "E=300/500/800; konum_km ölçülmüş kayıtlar yeniden "
                      "sınıflanır (km≤E→ORTA, km>E→DUSUK), km'sizler sabit; "
                      "iki yön sayılır (D206)",
    },
    "ozet": {
        "dusuk_toplam": len(dusuk),
        "grup_kayit": {g: GRUPLAR[g]["kayit"] for g in
                       ("a-konum-celisiyor", "b1-pencere-bos",
                        "b2-aday-cikarilamadi", "d-baska")},
        "grup_benzersiz": {g: GRUPLAR[g]["benzersiz_yerlesim"] for g in
                           ("a-konum-celisiyor", "b1-pencere-bos",
                            "b2-aday-cikarilamadi", "d-baska")},
    },
    "gruplar": GRUPLAR,
    "esik_duyarlilik": duyarlilik,
    "sinav": SINAV,
}
with open(os.path.join(GLM, "DUSUK-973.json"), "w", encoding="utf-8") as f:
    json.dump(CIKTI, f, ensure_ascii=False, indent=1)

# ── md ──
L = []
L.append("# GLM-7 · DUSUK-973 ayrıştırması (yalnız ölçüm)")
L.append("")
L.append("- Betik: `glm/dusuk973.py` · JSON: `glm/DUSUK-973.json`")
L.append("- Girdi: `glm/M-ALANI-ONERI.json` (üretici `glm/m_alani_oneri.py`) — "
         "yeniden üretilmedi, ölçülmüş çıktı sınıflandı")
L.append("- DUSUK toplam: **%d** kayıt" % len(dusuk))
L.append("")
L.append("## Sebep sınıfları (öncelik: a > b > d; c kesişen boyut)")
L.append("")
L.append("| sınıf | kayıt | benzersiz yerleşim | km (min/ortanca/max) | tanım |")
L.append("|---|---|---|---|---|")
for g in ("a-konum-celisiyor", "b1-pencere-bos", "b2-aday-cikarilamadi",
          "d-baska"):
    v = GRUPLAR[g]
    km = v.get("km")
    kmtxt = ("%s/%s/%s" % (km["min"], km["ortanca"], km["max"])) if km else "—"
    L.append("| %s | %d | %d | %s | %s |" % (g, v["kayit"],
                                             v["benzersiz_yerlesim"], kmtxt,
                                             v["tanim"][:70]))
L.append("")
L.append("- (c) madde-ilgisizliği BAĞIMSIZ sebep değil: DUSUK kayıtların dayanak "
         "dağılımı %s; (a) içinde yalnız-pencere dayanaklı %d kayıt"
         % (json.dumps(dict(dayanak_hele), ensure_ascii=False), a_yalniz))
L.append("")
L.append("## (a) konum dağılımı")
L.append("")
km_a = GRUPLAR["a-konum-celisiyor"]["km"]
L.append("- %d kayıtın tamamında km ölçülmüş: min %s · ortanca %s · max %s km"
         % (km_a["adet"], km_a["min"], km_a["ortanca"], km_a["max"]))
kms = sorted((k["konum_km"] for k in grup.get("a-konum-celisiyor", [])
              if k.get("konum_km") is not None))
if kms:
    for b in (300, 500, 800, 1500, 3000):
        n = sum(1 for x in kms if x <= b)
        L.append("  - ≤%d km: %d kayıt" % (b, n))
L.append("")
L.append("## Eşik duyarlılığı — E = 300/500/800 km (iki yön)")
L.append("")
L.append("| eşik | DUSUK→ORTA | ORTA→DUSUK | net ORTA | net DUSUK |")
L.append("|---|---|---|---|---|")
for e, v in duyarlilik.items():
    L.append("| %s | %d | %d | %d | %d |" % (e, v["yukselen_DUSUK_ORTA"],
                                             v["dusen_ORTA_DUSUK"],
                                             v["net_ORTA"], v["net_DUSUK"]))
L.append("")
L.append("- Sınav: E=300 (mevcut eşik) yükselen/düşen 0 — %s"
          % ("TUTTU ✓" if SINAV["esik_300_tutari"] else "TUTMADI ✗"))
L.append("")
L.append("## Örnekler — (a) grubundan en çelişkili 10")
L.append("")
L.append("| yerleşim | tarih | öneri m: | km | m: şimdi | dayanak |")
L.append("|---|---|---|---|---|---|")
for o in GRUPLAR["a-konum-celisiyor"]["ornekler"]:
    L.append("| %s | %s | %s | %s | %s | %s |" % (
        o["yerlesim"], o["tarih"], o["oneri_m"],
        o["konum_km"] if o["konum_km"] is not None else "ölçülemedi",
        o["m_simdi"] or "(boş)", o["dayanak_turu"]))
L.append("")
L.append("## Örnekler — (b) aday yok (b1+b2)")
L.append("")
L.append("| yerleşim | tarih | alt | sonuc |")
L.append("|---|---|---|---|")
for g in ("b1-pencere-bos", "b2-aday-cikarilamadi"):
    for o in GRUPLAR[g]["ornekler"][:5]:
        L.append("| %s | %s | %s | %s |" % (
            o["yerlesim"], o["tarih"], g,
            ("pencere boş" if g == "b1-pencere-bos" else "aday çıkarılamadı")))
L.append("")
with open(os.path.join(GLM, "DUSUK-973.md"), "w", encoding="utf-8") as f:
    f.write("\n".join(L) + "\n")

print("dusuk toplam:", len(dusuk))
print("grup:", json.dumps(CIKTI["ozet"]["grup_kayit"], ensure_ascii=False))
print("grup benzersiz:", json.dumps(CIKTI["ozet"]["grup_benzersiz"],
                                    ensure_ascii=False))
print("a km:", GRUPLAR["a-konum-celisiyor"]["km"])
print("a dayanak:", dict(dayanak_a), "| a-icinde-yalniz-pencere:", a_yalniz)
print("duyarlilik:", json.dumps({e: {k2: v2 for k2, v2 in d.items() if k2 != "not"}
                                 for e, d in duyarlilik.items()},
                                ensure_ascii=False))
print("sinav E300 tutarli:", SINAV["esik_300_tutari"],
      "| 1699 Sırbistan-DUSUK:", SINAV["karlofca_1699_sirbistan_dusuk_mu"]["bulunan"])
print("yazildi: glm/DUSUK-973.json · glm/DUSUK-973.md")
