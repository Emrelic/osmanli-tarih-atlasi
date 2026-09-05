# -*- coding: utf-8 -*-
"""FAZ 2 ③④ — YAMA ÜRETECİ + KENDİ SINAVI.

Model (koordinatörün kararı): işgal `isg:` ÖRTÜSÜ, alt katman DEVAM EDER.
Koordinatörün şartı: `s:` → `isg:` çevrilirken ALT KATMAN DOLDURULUR,
yoksa `Değişmez 1` delik verir.

🔴 `denetim/` altına yazar, `data/`ye DOKUNMAZ (koşu 6 sürüyor).
🔴 Her kayıt için SINAV: alt katman 1918-10-30 → 1923-10-29 arasında
   KESİNTİSİZ mi? Değilse kayıt yamaya GİRMEZ ve bildirilir.
🔴 `Silopi` KASTEN DIŞARIDA — sınır vakası, koordinatöre soruldu
   (M-3074 ⑥), cevap gelmedi.
"""
import io
import json
import os
import sys

KOK = r"C:\Users\emrem\OneDrive\Desktop\TARİH COĞRAFYA SİTESİ"
sys.path.insert(0, os.path.join(KOK, "arac"))
os.chdir(KOK)
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8")
import girdi  # noqa: E402

TBMM_GUN = "1920-04-23"
SON = "1923-10-29"

# (kimlik, f, t, TDV slug, dayanak damgası)
K = "kaynaklı"
D = "veriden devralındı — kaynaksız"
T = "TÜRETİLDİ — doğrulanmadı"

ISGAL = {
    "Adana":       [("fransa-cumhuriyet", "1918-12-24", "1922-01-05",
                     "adana", K)],
    "Tarsus":      [("fransa-cumhuriyet", "1918-12-17", "1921-12-27",
                     "tarsus", K)],
    "Mersin":      [("fransa-cumhuriyet", "1918-12-17", "1922-01-03",
                     "mersin", K)],
    "Kilis":       [("ingiltere", "1918-12-06", "1919-10-29", "kilis", K),
                    ("fransa-cumhuriyet", "1919-10-29", "1921-12-23",
                     "kilis", K)],
    "Antep":       [("ingiltere", "1918-12-17", "1919-11-05",
                     "gaziantep", K),
                    ("fransa-cumhuriyet", "1919-11-05", "1921-12-25",
                     "gaziantep", K)],
    "Maraş":       [("ingiltere", "1919-02-22", "1919-10-29",
                     "kahramanmaras", K),
                    ("fransa-cumhuriyet", "1919-10-29", "1920-02-11",
                     "kahramanmaras", K)],
    "Urfa":        [("ingiltere", "1919-01-01", "1919-10-29",
                     "sanliurfa", "AY hassasiyeti: TDV 'Mart 1919'"),
                    ("fransa-cumhuriyet", "1919-10-29", "1920-04-10",
                     "sanliurfa", T)],
    # kaynaksız — mevcut `s:` günleri DEVRALINIYOR, model düzeltiliyor
    "Dörtyol":     [("fransa-cumhuriyet", "1918-10-30", "1921-10-20",
                     "", D)],
    "Payas":       [("fransa-cumhuriyet", "1918-10-30", "1921-10-20",
                     "", D)],
    "Erzin":       [("fransa-cumhuriyet", "1918-10-30", "1921-10-20",
                     "", D)],
    "Yumurtalık":  [("fransa-cumhuriyet", "1918-10-30", "1921-10-20",
                     "", D)],
    "Suruç":       [("fransa-cumhuriyet", "1918-10-30", "1921-10-20",
                     "", D)],
    "Akçakale":    [("fransa-cumhuriyet", "1918-10-30", "1921-10-20",
                     "", D)],
    "Ceylanpınar": [("fransa-cumhuriyet", "1918-10-30", "1921-10-20",
                     "", D)],
    "Nusaybin":    [("fransa-cumhuriyet", "1918-10-30", "1921-10-20",
                     "nusaybin", D)],
}
ISGALCI = {"fransa-cumhuriyet", "ingiltere"}

Y = girdi.yukle(sessiz=True)
ix = {z["ad"]: z for z in Y}

yama, atlanan = [], []
for ad, isgaller in sorted(ISGAL.items()):
    z = ix.get(ad)
    if z is None:
        atlanan.append((ad, "ATLASTA YOK"))
        continue
    d = [dict(p) for p in (z.get("d") or [])]
    s = [dict(p) for p in (z.get("s") or [])]

    # ① işgali `s:`ten SÖK
    sokuldu = [p for p in s if p.get("d") in ISGALCI
               and "1918" <= (p.get("f") or "")[:4] <= "1923"]
    s = [p for p in s if p not in sokuldu]

    # ② ALT KATMANI DOLDUR: Osmanlı `d:` → TBMM günü, sonra `s:tbmm`
    d = [p for p in d if (p.get("f") or "") < TBMM_GUN]
    if d:
        son = max(d, key=lambda p: p["f"])
        if son["t"] < TBMM_GUN:
            son["t"] = TBMM_GUN
    s = [p for p in s if p.get("d") != "tbmm-turkiye"]
    s.append({"f": TBMM_GUN, "t": SON, "d": "tbmm-turkiye"})
    s.sort(key=lambda p: p["f"])

    # ③ SINAV — alt katman 1918-10-30 → 1923-10-29 KESİNTİSİZ mi?
    dilim = sorted([(p["f"], p["t"]) for p in d + s], key=lambda x: x[0])
    imlec, bosluk = "1918-10-30", []
    for f, t in dilim:
        if t <= imlec:
            continue
        if f > imlec:
            bosluk.append("%s→%s" % (imlec, f))
        imlec = max(imlec, t)
    if imlec < SON:
        bosluk.append("%s→%s" % (imlec, SON))
    if bosluk:
        atlanan.append((ad, "🔴 ALT KATMAN BOŞLUKLU: %s" % " ".join(bosluk)))
        continue

    isg = []
    for kim, f, t, slug, damga in isgaller:
        p = {"f": f, "t": t, "d": kim}
        p["kaynak"] = ("TDV `%s` — %s" % (slug, damga)) if slug \
            else ("bulunamadı — TDV'de müstakil madde YOK (302) ve "
                  "kapsayıcı maddeler (adana · tarsus · osmaniye · "
                  "sanliurfa) bu yerleşimi işgal bağlamında ANMIYOR; "
                  "gün mevcut veriden devralındı, KAYNAKSIZ")
        isg.append(p)
    yama.append({"ad": ad, "d": d, "s": s, "isg": isg})

cikti = {
    "_NOT": ("FAZ 2 ③④ · NEHİR SÜRTÜNME · 6 Eylül 2026. Model: işgal "
             "`isg:` ÖRTÜSÜ, alt katman DEVAM EDER (koordinatör kararı). "
             "Her kayıt ALT KATMAN KESİNTİSİZLİK sınavından geçti; "
             "geçmeyen yamaya GİRMEDİ."),
    "_SILOPI": ("KASTEN DIŞARIDA — `s:ingiltere`, Musul hattı sınır "
                "vakası. M-3074 ⑥'da soruldu, cevap gelmedi. Kendi "
                "kararımı vermiyorum (§7)."),
    "_KAYNAKSIZ": ("8 kaydın günü mevcut veriden DEVRALINDI ve `kaynak` "
                   "alanında AÇIKÇA yazıyor. Model düzeltiliyor, tarih "
                   "iddiası GÜÇLENDİRİLMİYOR."),
    "kayit": yama,
}
yol = os.path.join(KOK, "denetim", "YAMA-ISG-FAZ2-cukurova.json")
with open(yol, "w", encoding="utf-8") as f:
    json.dump(cikti, f, ensure_ascii=False, indent=1)

print("🟢 YAMAYA GİREN : %d kayıt · %d `isg:` dönemi"
      % (len(yama), sum(len(k["isg"]) for k in yama)))
for k in yama:
    print("   %-14s isg:%d  %s" % (k["ad"], len(k["isg"]),
                                   " ".join("%s→%s:%s" % (p["f"], p["t"],
                                                          p["d"])
                                            for p in k["isg"])))
print("\n🔴 ATLANAN : %d" % len(atlanan))
for ad, s in atlanan:
    print("   %-14s %s" % (ad, s))
print("\n⇒ %s" % yol)
