# -*- coding: utf-8 -*-
"""TERIM-STANDART-0070 — işgal · fetih · ilhak · istilâ · harekât ÖLÇÜM aleti (H-0010).

Emre: *"gösterimde karmaşa var; geçici toprak ele geçirmeye işgal, kalıcıya fetih
desek ve haritada ayrı gösterşek — süre ölçütü de olmalı."*

Bu alet YALNIZ ÖLÇER, hiçbir dosyayı değiştirmez. Ölçtükleri:
  ① Kronolojide terim kullanımı: `tur:` değerleri + BAŞLIK kalıpları (fetih/işgal/
     ilhak/istilâ/zapt/harekât/geri alınması) ve ikisinin ÇAPRAZ TABLOSU.
  ② Haritada işgal: `isg:` pencereleri — kaç yerleşim, kaç işgalci, SÜRE dağılımı.
  ③ Haritada sahiplik: `s:` dönemleri — SÜRE dağılımı (kalıcılığın ölçüsü).
  ④ Terim ile GÖSTERİM eşleşmesi: `tur:"isgal"` maddesinin haritada `isg:`
     karşılığı var mı; `isg:` penceresinin kronolojide maddesi var mı.
  ⑤ Süre eşiği sınaması: önerilen eşikler bugünkü kayıtların kaçını yeniden
     sınıflandırır (öneri maliyeti).

Kullanım:
  py denetim/ARAC-TERIM-STANDART-0070.py
  py denetim/ARAC-TERIM-STANDART-0070.py --json denetim/OLCUM-TERIM-0070.json
"""
import json
import os
import re
import sys
from collections import Counter, defaultdict
from datetime import date

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DATA = os.path.join(KOK, "data")

# Terim ailesi — BAŞLIK/METİN kalıpları. Türkçe ek almış hâlleri de yakalar.
KALIP = {
    "fetih":   r"fethi|fetih|fethetti|feth edil|fethedil",
    "isgal":   r"işgal|isgal",
    "ilhak":   r"ilhak|katılması|ilhakı",
    "istila":  r"istilâ|istila|istilası",
    "harekat": r"harekât|harekat|seferi|sefer düzen",
    "zapt":    r"zapt|zaptı|ele geçir",
    "alinma":  r"alınması|alındı|geri alın|kurtarıl",
    "teslim":  r"teslim ol|teslim edil",
}
TERIM_TUR = ("isgal", "fetih", "toprak-kazanc", "toprak-kayip", "savas", "antlasma")


def js_kayitlari(yol):
    """Bir data/*.js dosyasındaki kayıtları KABA ama ölçülebilir biçimde ayıklar:
    `{...}` bloklarını değil, ALAN ALAN düzenli ifadeyle okur — dosyalar elle
    yazıldığı için tam JSON ayrıştırıcı kurmak kırılgan olurdu (D-serisi: 'toplu
    düzeltme' ailesi). Ölçüm bu yüzden ALAN SAYIMIDIR, kayıt sayımı değil; her
    sayının neyi saydığı çıktıda yazılıdır."""
    with open(yol, encoding="utf-8") as f:
        return f.read()


def gun_farki(f, t):
    try:
        y1, a1, g1 = (int(x) for x in f[:10].split("-"))
        y2, a2, g2 = (int(x) for x in t[:10].split("-"))
        return (date(y2, a2, g2) - date(y1, a1, g1)).days
    except Exception:
        return None


def yuzdelik(dizi, p):
    if not dizi:
        return None
    d = sorted(dizi)
    return d[max(0, min(len(d) - 1, int(round((len(d) - 1) * p))))]


def olc():
    sonuc = {}
    dosyalar = sorted(os.listdir(DATA))
    kron = [f for f in dosyalar if f.startswith(("olaylar", "kronoloji")) and f.endswith(".js")]
    yer = [f for f in dosyalar if f.startswith("yerlesimler") and f.endswith(".js")]

    # ① tur: sayımı + başlık kalıpları
    tur_say = Counter()
    kalip_say = Counter()
    capraz = defaultdict(Counter)
    madde_toplam = 0
    kayit_re = re.compile(r'\{[^{}]*\}')
    tur_re = re.compile(r'"?tur"?\s*:\s*"([^"]+)"')
    bas_re = re.compile(r'"?b"?\s*:\s*"((?:[^"\\]|\\.)*)"')
    for ad in kron:
        metin = js_kayitlari(os.path.join(DATA, ad))
        for blok in kayit_re.findall(metin):
            t = tur_re.search(blok)
            b = bas_re.search(blok)
            if not b:
                continue
            madde_toplam += 1
            tur = t.group(1) if t else "(tur YOK)"
            tur_say[tur] += 1
            baslik = b.group(1)
            bulunan = [k for k, kal in KALIP.items() if re.search(kal, baslik, re.I)]
            for k in bulunan:
                kalip_say[k] += 1
                capraz[k][tur] += 1
            if not bulunan:
                kalip_say["(kalıpsız)"] += 1
    sonuc["kronoloji"] = {
        "dosya": len(kron), "madde": madde_toplam,
        "tur_sayimi": dict(tur_say.most_common()),
        "baslik_kalibi": dict(kalip_say.most_common()),
        "capraz_kalip_x_tur": {k: dict(v.most_common(6)) for k, v in capraz.items()},
    }

    # ② isg: pencereleri
    isg_re = re.compile(r'isg:\s*\[(.*?)\]', re.S)
    pen_re = re.compile(r'\{(.*?)\}', re.S)
    alan_re = re.compile(r'(\w+)\s*:\s*"([^"]*)"')
    pencere = []
    yer_isg = 0
    for ad in yer:
        metin = js_kayitlari(os.path.join(DATA, ad))
        for govde in isg_re.findall(metin):
            yer_isg += 1
            for p in pen_re.findall(govde):
                alanlar = dict(alan_re.findall(p))
                if "f" in alanlar:
                    pencere.append(alanlar)
    sureler = [g for g in (gun_farki(p.get("f", ""), p.get("t", "")) for p in pencere) if g is not None]
    isgalci = Counter(p.get("d", "(yok)") for p in pencere)
    sonuc["isgal_penceresi"] = {
        "yerlesim": yer_isg, "pencere": len(pencere),
        "kapali_pencere": len(sureler), "acik_pencere": len(pencere) - len(sureler),
        "isgalci_devlet": len(isgalci), "en_cok": dict(isgalci.most_common(8)),
        "sure_gun": {
            "min": min(sureler) if sureler else None,
            "Q1": yuzdelik(sureler, 0.25), "medyan": yuzdelik(sureler, 0.5),
            "Q3": yuzdelik(sureler, 0.75), "max": max(sureler) if sureler else None,
        },
        "sure_kovasi": {
            "<1 yıl": sum(1 for g in sureler if g < 365),
            "1-3 yıl": sum(1 for g in sureler if 365 <= g < 3 * 365),
            "3-5 yıl": sum(1 for g in sureler if 3 * 365 <= g < 5 * 365),
            "5-10 yıl": sum(1 for g in sureler if 5 * 365 <= g < 10 * 365),
            ">=10 yıl": sum(1 for g in sureler if g >= 10 * 365),
        },
        "kaynakli_pencere": sum(1 for p in pencere if p.get("kaynak")),
    }

    # ③ s: sahiplik dönemleri — kalıcılığın ölçüsü
    s_re = re.compile(r's:\s*\[(.*?)\]\s*[,}]', re.S)
    donem = []
    for ad in yer:
        metin = js_kayitlari(os.path.join(DATA, ad))
        for govde in s_re.findall(metin):
            for p in pen_re.findall(govde):
                alanlar = dict(alan_re.findall(p))
                if "f" in alanlar:
                    donem.append(alanlar)
    s_sure = [g for g in (gun_farki(d.get("f", ""), d.get("t", "")) for d in donem) if g is not None]
    sonuc["sahiplik_donemi"] = {
        "donem": len(donem), "kapali": len(s_sure), "acik": len(donem) - len(s_sure),
        "sure_gun": {"min": min(s_sure) if s_sure else None, "Q1": yuzdelik(s_sure, 0.25),
                     "medyan": yuzdelik(s_sure, 0.5), "Q3": yuzdelik(s_sure, 0.75),
                     "max": max(s_sure) if s_sure else None},
        "sure_kovasi": {
            "<1 yıl": sum(1 for g in s_sure if g < 365),
            "1-3 yıl": sum(1 for g in s_sure if 365 <= g < 3 * 365),
            "3-5 yıl": sum(1 for g in s_sure if 3 * 365 <= g < 5 * 365),
            "5-10 yıl": sum(1 for g in s_sure if 5 * 365 <= g < 10 * 365),
            ">=10 yıl": sum(1 for g in s_sure if g >= 10 * 365),
        },
    }

    # ④ TERİM ↔ GÖSTERİM: işgal kelimesi geçen maddenin haritada karşılığı var mı
    #    (yıl düzeyinde kesişim — gün düzeyi ayrı iş, ölçüt burada KABA ve öyle yazılıyor)
    isg_yillar = Counter()
    for p in pencere:
        try:
            y1 = int(p["f"][:4])
            y2 = int(p.get("t", p["f"])[:4])
            for y in range(y1, y2 + 1):
                isg_yillar[y] += 1
        except Exception:
            pass
    isgal_madde_yil = []
    tarih_re = re.compile(r'"?t"?\s*:\s*"(\d{4})')
    for ad in kron:
        metin = js_kayitlari(os.path.join(DATA, ad))
        for blok in kayit_re.findall(metin):
            b = bas_re.search(blok)
            if not b or not re.search(KALIP["isgal"], b.group(1), re.I):
                continue
            ty = tarih_re.search(blok)
            if ty:
                isgal_madde_yil.append(int(ty.group(1)))
    sonuc["terim_gosterim"] = {
        "olcut": "yıl düzeyinde kesişim (KABA — gün düzeyi ölçülmedi)",
        "isgal_kelimeli_madde": len(isgal_madde_yil),
        "o_yilda_haritada_isg_penceresi_VAR": sum(1 for y in isgal_madde_yil if isg_yillar.get(y)),
        "o_yilda_haritada_isg_penceresi_YOK": sum(1 for y in isgal_madde_yil if not isg_yillar.get(y)),
        "isg_penceresi_olan_yil_sayisi": len(isg_yillar),
    }

    # ⑥ `k:` — kronoloji listesinin GÖRSEL ekseni (css `.olay.k-<k>`), `tur:`ten AYRI.
    #    CSS'te karşılığı olmayan `k` değeri = renk/şerit sessizce varsayılana düşer.
    css_yol = os.path.join(KOK, "css", "style.css")
    with open(css_yol, encoding="utf-8") as f:
        css = f.read()
    css_k = set(re.findall(r"\.olay\.k-([a-z0-9-]+)", css))
    k_say = Counter()
    k_capraz = defaultdict(Counter)
    k_re = re.compile(r'\bk\s*:\s*"([^"]+)"')
    for ad in kron:
        metin = js_kayitlari(os.path.join(DATA, ad))
        for blok in kayit_re.findall(metin):
            b = bas_re.search(blok)
            kk = k_re.search(blok)
            if not b or not kk:
                continue
            k_say[kk.group(1)] += 1
            for kal_ad, kal in KALIP.items():
                if re.search(kal, b.group(1), re.I):
                    k_capraz[kal_ad][kk.group(1)] += 1
    kapsanan = sum(n for a, n in k_say.items() if a in css_k)
    sonuc["kategori_k"] = {
        "css_sinifi": sorted(css_k), "k_degeri": len(k_say),
        "madde_k_yazili": sum(k_say.values()),
        "css_karsiligi_VAR": kapsanan,
        "css_karsiligi_YOK": sum(k_say.values()) - kapsanan,
        "karsiliksiz_en_cok": dict(Counter({a: n for a, n in k_say.items()
                                            if a not in css_k}).most_common(8)),
        "terim_ailesi_k": {a: k_say.get(a, 0) for a in
                           ("fetih", "isgal", "ilhak", "istila", "kayip", "savas", "sefer")},
        "capraz_kalip_x_k": {a: dict(v.most_common(5)) for a, v in k_capraz.items()},
    }

    # ⑦ ÖNERİ MALİYETİ — üç sınıflı gösterim standardında kaç kayıt yeniden sınıflanır.
    #    Öneri (raporda gerekçesi): ① KATILIM (egemenlik devri: fetih/ilhak/zapt/alınma)
    #    ② İŞGAL (fiilî denetim, egemenlik devri YOK) ③ HAREKÂT (hareket, statü değil).
    HEDEF = {"fetih": "KATILIM", "ilhak": "KATILIM", "zapt": "KATILIM", "alinma": "KATILIM",
             "isgal": "ISGAL", "istila": "ISGAL", "harekat": "HAREKAT", "teslim": "KATILIM"}
    BUGUN_K = {"fetih": "KATILIM", "kazanc": "KATILIM", "kurulus": None, "kayip": None,
               "isgal": "ISGAL", "sefer": "HAREKAT", "savas": None, "antlasma": None}
    degisecek = Counter()
    ayni = Counter()
    belirsiz = Counter()
    for ad in kron:
        metin = js_kayitlari(os.path.join(DATA, ad))
        for blok in kayit_re.findall(metin):
            b = bas_re.search(blok)
            kk2 = k_re.search(blok)
            if not b or not kk2:
                continue
            bulunan = [x for x in HEDEF if re.search(KALIP[x], b.group(1), re.I)]
            if not bulunan:
                continue
            hedef = HEDEF[bulunan[0]]
            simdi = BUGUN_K.get(kk2.group(1), None)
            if simdi is None:
                belirsiz[bulunan[0]] += 1          # bugünkü k bu eksende bir şey söylemiyor
            elif simdi == hedef:
                ayni[bulunan[0]] += 1
            else:
                degisecek[bulunan[0]] += 1
    sonuc["oneri_maliyeti"] = {
        "olcut": "başlıkta ilk eşleşen terim kalıbı → hedef sınıf; bugünkü `k:` ile karşılaştırma",
        "zaten_dogru": dict(ayni.most_common()), "degisecek": dict(degisecek.most_common()),
        "bugunku_k_sessiz": dict(belirsiz.most_common()),
        "toplam_zaten_dogru": sum(ayni.values()),
        "toplam_degisecek": sum(degisecek.values()),
        "toplam_sessiz": sum(belirsiz.values()),
    }

    # ⑧ devletler.js — `gecici-isgal` künye türü (bugün var olan tek SÜRE kavramı)
    dev_yol = os.path.join(DATA, "devletler.js")
    dev = js_kayitlari(dev_yol) if os.path.exists(dev_yol) else ""
    sonuc["kunye_turu"] = {
        "gecici-isgal": len(re.findall(r'tur:\s*"gecici-isgal"', dev)),
        "gecici-hukumet": len(re.findall(r'tur:\s*"gecici-hukumet"', dev)),
        "isyan": len(re.findall(r'tur:\s*"isyan"', dev)),
        "kunye_toplam": len(re.findall(r'\bid:\s*"', dev)),
    }

    # ⑤ süre eşiği sınaması — önerilen eşikler bugünkü kayıtları nasıl böler
    esikler = {}
    for yil in (1, 2, 3, 5, 10):
        g = yil * 365
        esikler[f"{yil} yıl"] = {
            "isgal_penceresi_ESIKTEN_KISA (geçici kalır)": sum(1 for s in sureler if s < g),
            "isgal_penceresi_ESIKTEN_UZUN (kalıcıya döner)": sum(1 for s in sureler if s >= g),
            "sahiplik_donemi_ESIKTEN_KISA (işgale döner)": sum(1 for s in s_sure if s < g),
        }
    sonuc["esik_sinamasi"] = esikler
    return sonuc


def main():
    sys.stdout.reconfigure(encoding="utf-8")
    s = olc()
    k = s["kronoloji"]
    print(f"① KRONOLOJİ — {k['dosya']} dosya · {k['madde']} madde (başlık alanı `b` olan blok)")
    print("   tur: en çok — " + " · ".join(f"{a}={n}" for a, n in list(k["tur_sayimi"].items())[:12]))
    print("   terim ailesi tur: — " + " · ".join(
        f"{t}={k['tur_sayimi'].get(t, 0)}" for t in TERIM_TUR))
    print("   BAŞLIK kalıbı — " + " · ".join(f"{a}={n}" for a, n in k["baslik_kalibi"].items()))
    print("\n   ÇAPRAZ (başlık kalıbı × tur):")
    for kal, d in k["capraz_kalip_x_tur"].items():
        print(f"     {kal:<9} → " + " · ".join(f"{a}:{n}" for a, n in d.items()))
    i = s["isgal_penceresi"]
    print(f"\n② İŞGAL PENCERESİ (`isg:`) — {i['yerlesim']} yerleşim · {i['pencere']} pencere "
          f"({i['kapali_pencere']} kapalı, {i['acik_pencere']} açık) · {i['isgalci_devlet']} işgalci devlet")
    print(f"   süre (gün): min {i['sure_gun']['min']} · Q1 {i['sure_gun']['Q1']} · "
          f"medyan {i['sure_gun']['medyan']} · Q3 {i['sure_gun']['Q3']} · max {i['sure_gun']['max']}")
    print("   kova: " + " · ".join(f"{a} {n}" for a, n in i["sure_kovasi"].items()))
    print(f"   kaynaklı pencere: {i['kaynakli_pencere']}/{i['pencere']}")
    print("   en çok işgalci: " + " · ".join(f"{a}={n}" for a, n in i["en_cok"].items()))
    d = s["sahiplik_donemi"]
    print(f"\n③ SAHİPLİK DÖNEMİ (`s:`) — {d['donem']} dönem ({d['kapali']} kapalı, {d['acik']} açık)")
    print(f"   süre (gün): min {d['sure_gun']['min']} · Q1 {d['sure_gun']['Q1']} · "
          f"medyan {d['sure_gun']['medyan']} · Q3 {d['sure_gun']['Q3']} · max {d['sure_gun']['max']}")
    print("   kova: " + " · ".join(f"{a} {n}" for a, n in d["sure_kovasi"].items()))
    t = s["terim_gosterim"]
    print(f"\n④ TERİM ↔ GÖSTERİM ({t['olcut']})")
    print(f"   'işgal' kelimeli madde: {t['isgal_kelimeli_madde']} · "
          f"o yıl haritada isg: VAR {t['o_yilda_haritada_isg_penceresi_VAR']} · "
          f"YOK {t['o_yilda_haritada_isg_penceresi_YOK']}")
    kk = s["kategori_k"]
    print(f"\n⑥ LİSTE KATEGORİSİ (`k:`) — {kk['madde_k_yazili']} maddede yazılı · "
          f"{kk['k_degeri']} ayrı değer · CSS sınıfı {len(kk['css_sinifi'])}")
    print(f"   CSS karşılığı VAR {kk['css_karsiligi_VAR']} · YOK {kk['css_karsiligi_YOK']} "
          f"(renk sessizce varsayılana düşüyor)")
    print("   terim ailesi k: — " + " · ".join(f"{a}={n}" for a, n in kk["terim_ailesi_k"].items()))
    print("   karşılıksız en çok: " + " · ".join(f"{a}={n}" for a, n in kk["karsiliksiz_en_cok"].items()))
    print("   ÇAPRAZ (başlık kalıbı × k):")
    for kal, d in kk["capraz_kalip_x_k"].items():
        print(f"     {kal:<9} → " + " · ".join(f"{a}:{n}" for a, n in d.items()))
    om = s["oneri_maliyeti"]
    print(f"\n⑦ ÖNERİ MALİYETİ (üç sınıf: KATILIM · İŞGAL · HAREKÂT)")
    print(f"   zaten doğru {om['toplam_zaten_dogru']} · DEĞİŞECEK {om['toplam_degisecek']} · "
          f"bugünkü k bu eksende sessiz {om['toplam_sessiz']}")
    print("   değişecek: " + " · ".join(f"{a}={n}" for a, n in om["degisecek"].items()))
    print("   sessiz: " + " · ".join(f"{a}={n}" for a, n in om["bugunku_k_sessiz"].items()))
    kt = s["kunye_turu"]
    print(f"\n⑧ KÜNYE TÜRÜ (devletler.js) — künye {kt['kunye_toplam']} · "
          f"gecici-isgal {kt['gecici-isgal']} · gecici-hukumet {kt['gecici-hukumet']} · isyan {kt['isyan']}")
    print("\n⑤ SÜRE EŞİĞİ SINAMASI")
    for ad, v in s["esik_sinamasi"].items():
        print(f"   {ad:<7} → " + " · ".join(f"{a}: {n}" for a, n in v.items()))
    if "--json" in sys.argv:
        yol = sys.argv[sys.argv.index("--json") + 1]
        with open(yol, "w", encoding="utf-8") as f:
            json.dump(s, f, ensure_ascii=False, indent=1)
        print(f"\nJSON yazıldı: {yol}")


if __name__ == "__main__":
    main()
