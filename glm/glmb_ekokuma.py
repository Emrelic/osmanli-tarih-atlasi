# -*- coding: utf-8 -*-
"""GLM-B · EK OKUMA BİÇİM DENETİMİ — data/*ekokuma*.js (29 Eylül 2026)

Brifing (oturumlar/GLM-ACILIS-0929.md §5 GLM-B) ne istiyor:
  ① kesinlik alanının BÜTÜN farklı değerleri + kaç kez + hangi dosyada
  ② tür alanının BÜTÜN farklı değerleri + kaç kez + hangi dosyada
  ③ TEK KULLANIMLIK değerler (1 kez) — sözlük kayması adayı
  ④ gorsel: dolu ama gorsel_kaynak: boş/yok olan kartlar
  ⑤ zorunlu alan eksikleri: id · tur · kesinlik · kaynak · metin
  ⑥ MÜKERRER id (aynı id iki kartta)

YÖNTEM:
  - Dosyalar node vm bağlamında GERÇEKTEN koşturulur (glm/_glmb_yukle.js);
    yorum/derinlikle dizgi çözümlemesi YOK. Ham dump: glm/_glmb_kartlar.json.
  - "Birleştirme adayı" işareti denetim/ARAC-NORMAL-0903.py norm() ile konur:
    iki farklı ham değer, NORMALLEŞTİRİLMİŞ halleri eşitse aynı kelimenin iki
    yazımıdır. 🔴 Hangi yazımın doğru olduğuna KARAR VERİLMEZ (o Emre'nin ve
    koordinatörün işi).
  - "dolu" tanımı: alan var VE boş olmayan dizgi/dizi.

Çıktı: glm/GLMB-EKOKUMA-0929.json (ham) · glm/GLMB-EKOKUMA-0929.md (rapor)
Koşum: py -X utf8 glm/glmb_ekokuma.py   (kök C:\\atlas; node şart)
"""
import io, json, os, subprocess, sys, time, datetime
import importlib.util
from collections import Counter, defaultdict

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DIZIN = os.path.dirname(os.path.abspath(__file__))
# ARAC-NORMAL-0903.py adı tireli — modül adı olamaz, yoldan yüklenir
_spec = importlib.util.spec_from_file_location(
    "arac_normal", os.path.join(KOK, "denetim", "ARAC-NORMAL-0903.py"))
_arac_normal = importlib.util.module_from_spec(_spec)
_spec.loader.exec_module(_arac_normal)
norm = _arac_normal.norm  # Türkçe güvenli normalleştirici (lower() YASAK)

T0 = time.time()
ZAMAN = datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S")
ZORUNLU = ["id", "tur", "kesinlik", "kaynak", "metin"]

def dolu(v):
    if v is None: return False
    if isinstance(v, str): return v.strip() != ""
    if isinstance(v, (list, dict)): return len(v) > 0
    return True

def main():
    # 1) node yükleyici
    r = subprocess.run(["node", os.path.join(DIZIN, "_glmb_yukle.js")],
                       capture_output=True, text=True, cwd=KOK)
    print("node:", r.stdout.strip() or r.stderr.strip())
    ham = json.load(io.open(os.path.join(DIZIN, "_glmb_kartlar.json"), encoding="utf-8"))

    kartlar = []   # {dosya, global, kart_no, kart}
    for dos in ham["dosyalar"]:
        for g in dos["globaller"]:
            for i, k in enumerate(g["kartlar"], 1):
                if not isinstance(k, dict):
                    ham["sorunlar"].append({"dosya": dos["dosya"], "hata": "kart dict değil"})
                    continue
                kartlar.append({"dosya": dos["dosya"], "global": g["ad"], "kart_no": i, "kart": k})
    # global'siz dosyalar
    globalsiz = [dos["dosya"] for dos in ham["dosyalar"] if not dos["globaller"]]
    # aynı globali tanımlayan dosyalar
    gdef = defaultdict(list)
    for dos in ham["dosyalar"]:
        for g in dos["globaller"]:
            gdef[g["ad"]].append(dos["dosya"])
    ayni_global = {a: d for a, d in gdef.items() if len(d) > 1}

    # 2) alan envanteri (bonus)
    alan_say = Counter()
    for kk in kartlar:
        for a in kk["kart"].keys():
            alan_say[a] += 1

    def alan_analizi(alan):
        sayi = Counter(); dosyalar = defaultdict(set); ornek = {}
        eksik = []
        for kk in kartlar:
            v = kk["kart"].get(alan)
            if not dolu(v):
                eksik.append({"dosya": kk["dosya"], "id": kk["kart"].get("id"), "global": kk["global"]})
                continue
            anahtar = v if isinstance(v, str) else json.dumps(v, ensure_ascii=False)[:60]
            sayi[anahtar] += 1
            dosyalar[anahtar].add(kk["dosya"])
            ornek.setdefault(anahtar, {"dosya": kk["dosya"], "id": kk["kart"].get("id")})
        satirlar = []
        for adet, deger in sorted(((c, v) for v, c in sayi.items()), key=lambda x: (-x[0], x[1])):
            # birleştirme adayı: normalleştirilmiş hâl başka bir değere eşit
            adaylar = sorted({o for o in sayi if o != deger and norm(str(o)) == norm(str(deger))})
            satirlar.append({"deger": deger, "adet": adet, "dosyalar": sorted(dosyalar[deger]),
                             "tek_kullanimlik": adet == 1,
                             "birlestirme_adayi": adaylar,
                             "ornek": ornek[deger]})
        return {"satirlar": satirlar, "eksik_say": len(eksik), "eksik": eksik}

    kesinlik = alan_analizi("kesinlik")
    tur = alan_analizi("tur")

    # 4) gorsel dolu / gorsel_kaynak boş
    gorsel_ksiz = []
    for kk in kartlar:
        if dolu(kk["kart"].get("gorsel")) and not dolu(kk["kart"].get("gorsel_kaynak")):
            gorsel_ksiz.append({"dosya": kk["dosya"], "id": kk["kart"].get("id")})

    # 5) zorunlu alan eksikleri
    zorunlu_eksik = {}
    for alan in ZORUNLU:
        zorunlu_eksik[alan] = [{"dosya": kk["dosya"], "id": kk["kart"].get("id")}
                               for kk in kartlar if not dolu(kk["kart"].get(alan))]

    # 6) mükerrer id
    id_say = defaultdict(list)
    for kk in kartlar:
        iv = kk["kart"].get("id")
        if dolu(iv):
            id_say[iv].append(kk["dosya"])
    mukerrer = {i: sorted(set(d)) for i, d in id_say.items() if len(d) > 1}

    # ②b) tur ↔ app.js EKOKUMA_TUR kayıtlı evren çaprazı
    # (app.js:10731: tanınmayan tür SESSİZCE atlanır → kart GÖRÜNMEZ)
    tur_evreni = []
    try:
        app = io.open(os.path.join(KOK, "js", "app.js"), encoding="utf-8").read()
        blok = app.split("var EKOKUMA_TUR = {", 1)[1].split("\n};", 1)[0]
        import re as _re
        tur_evreni = sorted(set(_re.findall(r'"([a-z0-9-]+)":\s*\{', blok)))
    except Exception as e:
        tur_evreni = []
        ham["sorunlar"].append({"hata": "EKOKUMA_TUR okunamadi: %s" % e})
    olculen_tur = {s["deger"] for s in tur["satirlar"]}
    tur_capraz = {
        "kayitli_evren": tur_evreni,
        "kayitdisi": {s["deger"]: s for s in tur["satirlar"] if s["deger"] not in tur_evreni},
        "kayitli_ama_karti_yok": sorted(set(tur_evreni) - olculen_tur),
        "not": "kayitdisi tur = app.js tanımıyor = kart SESSİZCE görünmez (app.js:10731)",
    }

    cikti = {
        "olcum": "GLM-B ek okuma biçim denetimi", "zaman": ZAMAN,
        "evren": {"dosya": len(ham["dosyalar"]), "kart": len(kartlar),
                  "global": len(gdef), "globalsiz_dosya": globalsiz,
                  "ayni_globali_tanimlayanlar": ayni_global,
                  "node_sorun": ham["sorunlar"]},
        "alan_envanteri": dict(alan_say.most_common()),
        "kesinlik": kesinlik, "tur": tur, "tur_capraz": tur_capraz,
        "gorsel_kaynaksiz": gorsel_ksiz,
        "zorunlu_eksik": zorunlu_eksik,
        "mukerrer_id": mukerrer,
    }
    io.open(os.path.join(DIZIN, "GLMB-EKOKUMA-0929.json"), "w", encoding="utf-8").write(
        json.dumps(cikti, ensure_ascii=False, indent=1, default=str))
    rapor(cikti)
    print("kart:", len(kartlar), "· kesinlik değeri:", len(kesinlik["satirlar"]),
          "· tür değeri:", len(tur["satirlar"]),
          "· mükerrer id:", len(mukerrer), "· süre: %.1f sn" % (time.time() - T0))

def rapor(c):
    L = []
    ap = L.append
    ap("# GLM-B · EK OKUMA BİÇİM DENETİMİ — data/*ekokuma*.js")
    ap("")
    ap("*Ölçüm: `glm/glmb_ekokuma.py` (node vm yükleyici `glm/_glmb_yukle.js`) · %s · ham: `glm/GLMB-EKOKUMA-0929.json`.*" % c["zaman"])
    ap("*Koordinatör ön ölçümü 72 dosya / 728 kart demişti; ölçülen **%d dosya / %d kart** — fark beyan.*" % (c["evren"]["dosya"], c["evren"]["kart"]))
    ap("")
    ap("## Özet")
    ap("")
    ap("| ölçüm | değer |")
    ap("|---|---|")
    ap("| dosya | %d |" % c["evren"]["dosya"])
    ap("| kart | **%d** |" % c["evren"]["kart"])
    ap("| tanımlanan global | %d · global'siz dosya: %s · aynı globali tanımlayan: %s |" % (
        c["evren"]["global"],
        ", ".join("`%s`" % d for d in c["evren"]["globalsiz_dosya"]) or "0",
        "; ".join("`%s` → %s" % (a, ", ".join(d)) for a, d in c["evren"]["ayni_globali_tanimlayanlar"].items()) or "0"))
    ap("| kesinlik farklı değeri | **%d** (+ eksik %d) |" % (len(c["kesinlik"]["satirlar"]), c["kesinlik"]["eksik_say"]))
    ap("| tür farklı değeri | **%d** (+ eksik %d) |" % (len(c["tur"]["satirlar"]), c["tur"]["eksik_say"]))
    ap("| tek kullanımlık kesinlik/tür | %d / %d |" % (
        sum(1 for s in c["kesinlik"]["satirlar"] if s["tek_kullanimlik"]),
        sum(1 for s in c["tur"]["satirlar"] if s["tek_kullanimlik"])))
    ap("| gorsel dolu + gorsel_kaynak YOK | **%d** |" % len(c["gorsel_kaynaksiz"]))
    ap("| mükerrer id | **%d** |" % len(c["mukerrer_id"]))
    ap("")
    ap("## ① kesinlik alanı — değerler")
    ap("")
    ap("| değer | adet | dosya sayısı | öneri |")
    ap("|---|---|---|---|")
    for s in c["kesinlik"]["satirlar"]:
        oneri = []
        if s["birlestirme_adayi"]:
            oneri.append("birleştirme adayı ↔ " + ", ".join("`%s`" % x for x in s["birlestirme_adayi"]))
        if s["tek_kullanimlik"]:
            oneri.append("TEK KULLANIMLIK — sözlük kayması adayı")
        ap("| `%s` | %d | %d | %s |" % (s["deger"], s["adet"], len(s["dosyalar"]), " · ".join(oneri)))
    if c["kesinlik"]["eksik"]:
        ap("")
        ap("*kesinlik ALANI OLMAYAN %d kart:* %s" % (c["kesinlik"]["eksik_say"],
           "; ".join("%s (%s)" % (e["id"], e["dosya"]) for e in c["kesinlik"]["eksik"])))
    ap("")
    ap("## ② tür alanı — değerler")
    ap("")
    ap("| değer | adet | dosya sayısı | öneri |")
    ap("|---|---|---|---|")
    for s in c["tur"]["satirlar"]:
        oneri = []
        if s["birlestirme_adayi"]:
            oneri.append("birleştirme adayı ↔ " + ", ".join("`%s`" % x for x in s["birlestirme_adayi"]))
        if s["tek_kullanimlik"]:
            oneri.append("TEK KULLANIMLIK — sözlük kayması adayı")
        ap("| `%s` | %d | %d | %s |" % (s["deger"], s["adet"], len(s["dosyalar"]), " · ".join(oneri)))
    if c["tur"]["eksik"]:
        ap("")
        ap("*tür alanı olmayan %d kart:* %s" % (c["tur"]["eksik_say"],
           "; ".join("%s (%s)" % (e["id"], e["dosya"]) for e in c["tur"]["eksik"])))
    tc = c.get("tur_capraz") or {}
    if tc:
        ap("")
        ap("### ②b `tur` ↔ app.js `EKOKUMA_TUR` kayıtlı evren çaprazı")
        ap("")
        ap("*app.js:10731: yükleyici tanımadığı `tur`u SESSİZCE geçer → kayıt dışı tür = GÖRÜNMEZ kart.*")
        ap("")
        ap("- Kayıtlı evren: %d tür · ölçülen: %d değer" % (len(tc["kayitli_evren"]), len(c["tur"]["satirlar"])))
        if tc["kayitdisi"]:
            for d_, s in tc["kayitdisi"].items():
                ap("- 🔴 **KAYIT DIŞI:** `%s` (%d kart — örnek `%s`, %s) → bu kartlar hiç görünmez" % (
                    d_, s["adet"], s["ornek"]["id"], s["ornek"]["dosya"]))
        else:
            ap("- Kayıt dışı tür: YOK")
        if tc["kayitli_ama_karti_yok"]:
            ap("- Kayıtlı ama ekokuma dosyalarında kartı yok: `%s` (kaynağı `_merakHavuz()` olabilir — hüküm koordinatörün)" % "`, `".join(tc["kayitli_ama_karti_yok"]))
    ap("")
    ap("## ④ gorsel dolu ama gorsel_kaynak yok/boş")
    ap("")
    if c["gorsel_kaynaksiz"]:
        for g in c["gorsel_kaynaksiz"]:
            ap("- `%s` (%s)" % (g["id"], g["dosya"]))
    else:
        ap("· 0 kart.")
    ap("")
    ap("## ⑤ Zorunlu alan eksikleri (id · tur · kesinlik · kaynak · metin)")
    ap("")
    ap("| alan | eksik kart | örnekler |")
    ap("|---|---|---|")
    for alan, eks in c["zorunlu_eksik"].items():
        ornek = "; ".join("%s (%s)" % (e["id"], e["dosya"]) for e in eks[:6])
        ap("| `%s` | **%d** | %s%s |" % (alan, len(eks), ornek, " …" if len(eks) > 6 else ""))
    ap("")
    ap("## ⑥ Mükerrer id")
    ap("")
    if c["mukerrer_id"]:
        for i, d in sorted(c["mukerrer_id"].items()):
            ap("- `%s` → %s" % (i, ", ".join("`%s`" % x for x in d)))
    else:
        ap("· 0 (tüm id'ler tekil).")
    ap("")
    ap("## Yan ölçüm — alan envanteri (hangi alan kaç kartta)")
    ap("")
    ap("| alan | kart |")
    ap("|---|---|")
    for a, n in c["alan_envanteri"].items():
        ap("| `%s` | %d |" % (a, n))
    ap("")
    ap("## Yöntem")
    ap("")
    ap("- Kartlar node `vm` bağlamında dosyaları GERÇEKTEN koşturarak alındı (dizgi çözümlemesi yok); ham dump `glm/_glmb_kartlar.json`.")
    ap("- 🔴 Hangi yazımın doğru olduğu KARARA BAĞLANMADI; `birleştirme adayı` işareti `denetim/ARAC-NORMAL-0903.py norm()` eşitliğine dayanır (ör. `tartismali` ↔ `tartışmalı`).")
    ap("- `metin` alanı 731 kartta var, 46 kartta yok — bu kartlar `kisa`/`soru` biçimli olabilir; zorunluluk hükmü koordinatörün.")
    io.open(os.path.join(DIZIN, "GLMB-EKOKUMA-0929.md"), "w", encoding="utf-8").write("\n".join(L))
    print("MD:", os.path.join(DIZIN, "GLMB-EKOKUMA-0929.md"))

if __name__ == "__main__":
    main()
