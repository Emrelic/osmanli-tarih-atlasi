# -*- coding: utf-8 -*-
"""TDV-SLUG-HARITA-0930 — son işlem + rapor.

Ham ölçüm (ARAC-TDV-SLUG-0930.py) canlı slug + <title> kaydeder. Hüküm burada, KAYDEDİLMİŞ
başlıklardan yeniden kurulur (ağa çıkmadan), yalnız içerik geçişi 0/None olan aksanlı adlar
için ajax ucu sadeleştirilmiş adla bir kez daha sorulur.

Hüküm sırası:
  VAR          · canlı doğrudan/atıf adayı, başlık DEVLET/HANEDAN işareti taşıyor
                 (…OĞULLARI, …LER/LAR, HANLIĞI, SULTANLIĞI, KRALLIĞI, DEVLETİ…)
  AD-MADDESİ   · başlık künyenin KENDİ çekirdek adı ama işaretsiz (VEDÂY, AFŞAR, BENİN):
                 madde devlet de olabilir yer/halk da — başlıktan ayrılamaz, elle bakılır
  KAPSAYICI    · canlı madde yalnız başkent/ülke/bölge/atıf maddesi
  YANLIS?      · 200 ama başlık adayla uyuşmuyor (tuzak ② şüphesi)
  BELIRSIZ     · canlı slug yok (içerik geçişi ayrıca)
  ARIZA        · yalnız 000/5xx — ölçülemedi
"""
import json, re, sys, io, time, collections, importlib.util
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8", errors="replace")
_s = importlib.util.spec_from_file_location("a", "denetim/ARAC-TDV-SLUG-0930.py")
A = importlib.util.module_from_spec(_s); _s.loader.exec_module(A)

J = "denetim/TDV-SLUG-HARITA-0930.json"
d = json.load(open(J, encoding="utf-8"))
# ikinci işçinin (sondan başa, --ters) çıktısı birleştirilir; ARIZA olmayan kayıt tercih edilir
try:
    t = json.load(open(J.replace(".json", "-ters.json"), encoding="utf-8"))
    kay = {r["id"]: r for r in d["kunyeler"]}
    for r in t["kunyeler"]:
        if r["id"] not in kay or kay[r["id"]]["hukum"] == "ARIZA":
            kay[r["id"]] = r
    d["kunyeler"] = sorted(kay.values(), key=lambda r: -r["yerlesim_yil"])
    d["olculen"] = len(d["kunyeler"])
    d["sure_sn"] = max(d["sure_sn"], t["sure_sn"])
    d["iscı"] = 2
except FileNotFoundError:
    pass
TR = set("abcçdefgğhıijklmnoöprsştuüvyzqwxâîûABCÇDEFGĞHIİJKLMNOÖPRSŞTUÜVYZQWXÂÎÛ'’‘")


def cekirdek(ad, kid):
    ana = re.sub(r"\(.*?\)", "", ad)
    w = [x for x in re.split(r"[\s/,\-–]+", ana) if x and A.slugla(x) not in A.GENEL and len(A.slugla(x)) >= 3]
    return w[0] if w else kid.split("-")[0]


def hukum(r):
    kok = A.slugla(cekirdek(r["ad"], r["id"]))
    var, adm, kap = [], [], []
    for s, b, t in zip(r["canli_slug"], r["baslik"], r["canli_tur"]):
        bs = A.slugla(b)
        if t in ("dogrudan", "atif") and A.DEVLET_ISARET.search(bs) and (bs[:4] == kok[:4] or t == "atif" and bs[:4] == s[:4] and kok[:4] in bs):
            var.append(s)
        elif bs == kok or bs.startswith(kok) and len(bs) - len(kok) <= 3:
            adm.append(s)
        elif t == "dogrudan" and A.DEVLET_ISARET.search(bs) and kok[:4] in bs:
            var.append(s)
        else:
            kap.append(s)
    if var: return "VAR", var
    if adm: return "AD-MADDESI", adm
    if kap: return "KAPSAYICI", kap
    if r["yanlis_madde_supheli"]: return "YANLIS?", []
    if r["ariza"] and not r["olu_slug"]: return "ARIZA", []
    return "BELIRSIZ", []


# ELLE İNCELEME (başlıklar okunarak, 30 Eyl) — otomatik kuralın yanıldığı yerler.
# yanlis: canlı ama BAŞKA konu (tuzak ②) → yanlis_madde_supheli'ye taşınır
# hukum : elle hüküm · not: gerekçe
ELLE = {
    "fetret-suleyman": (["emir"], None, "EMİR genel terim maddesi"),
    "fetret-mehmed": (["celebi"], None, "ÇELEBİ unvan maddesi"),
    "fetret-isa": (["isa"], None, "ÎSÂ peygamber maddesi"),
    "burhaneddin": (["kadi"], "VAR", "KADI BURHÂNEDDİN kişi maddesi devleti kapsar; KADI kurum maddesi"),
    "ahiler": (["ahi"], "VAR", "AHÎ yanlış madde; elle denendi: `ahilik` 200 AHÎLİK"),
    "tay-son": (["tay"], None, "TAY — Tây Sơn değil"),
    "bali-kralliklari": (["bali"], None, "BÂLÎ ≠ Bali adası"),
    "bali-kralliklari-pejeng": (["bali"], None, "BÂLÎ ≠ Bali adası"),
    "mehdi": (["mehdi"], None, "MEHDÎ kavram maddesi, Mehdî Devleti değil"),
    "suriye-arap-kralligi": (["arap"], "KAPSAYICI", "ARAP halk maddesi; SURİYE ülke maddesi"),
    "sani-emirligi": (["sani"], "KAPSAYICI", "SÂNİ‘ ≠ Âl-i Sânî"),
    "benin-kralligi": (["benin"], "KAPSAYICI", "BENİN bugünkü Benin Cumhuriyeti — Nijerya'daki Benin Krallığı DEĞİL"),
    "kaonde-ila": (["ila"], None, "ÎLÂ Arapça edat/terim"),
    "dogu-sumatra-sultanliklari": (["deli"], None, "DELİ Osmanlı süvari sınıfı, Deli Sultanlığı değil"),
    "vaday": ([], "AD-MADDESI", "VEDÂY = Vaday sultanlığı (yazım farkı)"),
    "lur-i-buzurg": ([], "VAR", "LUR-ı BÜZÜRG doğrudan madde"),
    "lur-i-kucek": ([], "VAR", "LUR-ı KÛÇEK doğrudan madde"),
    "kert": ([], "VAR", "KERT hanedan maddesi (Kertler)"),
    "tekrur": ([], "AD-MADDESI", "TEKRÛR"),
    "kibris-krallik": ([], "KAPSAYICI", "KIBRIS ada maddesi"),
    "nijer-deltasi": ([], "KAPSAYICI", "NİJER ülke/nehir maddesi"),
    "selcuklu": ([], "VAR", "elle denendi: `turkiye-selcuklulari` 200 TÜRKİYE SELÇUKLULARI"),
}

# Başlık araması (…-baslik.py) elle ayıklaması: önek eşlemesi gürültülüdür (Hayda→HAYDAR, Parma→PARMAK)
BASLIK_ELLE = {
    "hurmuz-sultanligi": ("AD-MADDESI", ["hurmuz--iran"], "başlık aramasıyla: `hurmuz--iran` (çıplak `hurmuz` 302)"),
    "kuba-hanligi": ("AD-MADDESI", ["kuba--azerbaycan"], "başlık aramasıyla: `kuba--azerbaycan` (çıplak `kuba` 302)"),
    "bhopal": ("VAR", ["bopal--devlet"], "başlık aramasıyla: `bopal--devlet` doğrudan devlet maddesi (+ `bopal--sehir`)"),
    "goryeo": ("KAPSAYICI", ["kore-cumhuriyeti"], "başlık aramasıyla: yalnız KORE CUMHURİYETİ ülke maddesi"),
    "kuba": ("YANLIS?", [], "`kuba--azerbaycan` Azerbaycan'daki Kuba — Kongo'daki Kuba Krallığı DEĞİL"),
    "kong-vattara": ("YANLIS?", [], "KONGO ≠ Kong (Fildişi)"),
}

ag = 0
for r in d["kunyeler"]:
    if r.get("baslik_isabet") and r["id"] not in BASLIK_ELLE:
        r["baslik_gurultu"] = r.pop("baslik_isabet")   # önek gürültüsü, isabet değil
    if r["id"] in BASLIK_ELLE:
        h_, sl_, nt_ = BASLIK_ELLE[r["id"]]
        r["baslik_isabet"] = [x for x in (r.get("baslik_isabet") or []) if x["slug"] in sl_]
        r["hukum_elle"], r["elle_not"] = h_, nt_
    r["hukum"], r["hukum_slug"] = hukum(r)
    if r["id"] in ELLE:
        yan, h, nt = ELLE[r["id"]]
        for s in yan:
            if s in r["canli_slug"]:
                i = r["canli_slug"].index(s)
                r["yanlis_madde_supheli"].append({"slug": s, "baslik": r["baslik"][i], "tur": r["canli_tur"][i]})
                for k in ("canli_slug", "baslik", "canli_tur"):
                    r[k].pop(i)
        r["elle_not"] = nt
        if h:
            r["hukum"] = h
        else:
            r["hukum"], r["hukum_slug"] = hukum(r)
    # yön/sıfat sözcüğüyle ya da ekli sözcükle sorulmuşsa (Orta:9713, İtalya'nın) → anlamlı çekirdekle
    YON = {"orta", "kuzey", "guney", "bati", "dogu", "yukari", "asagi", "buyuk", "kucuk", "yeni", "eski", "ic", "dis"}
    for q in list(r["icerik_gecisi"]):
        if A.norm(q) in YON or "'" in q or "’" in q:
            del r["icerik_gecisi"][q]
            ana = re.sub(r"\(.*?\)", "", r["ad"])
            w = [re.split(r"['’]", x)[0] for x in re.split(r"[\s/,\-–]+", ana)]
            w = [x for x in w if x and A.norm(x) not in YON and A.slugla(x) not in A.GENEL and len(A.slugla(x)) >= 3]
            if w:
                q2 = w[0]
                r["icerik_gecisi"][q2] = A.gecis(q2.lower() if not q2.startswith("İ") else "i" + q2[1:].lower()); ag += 1; time.sleep(0.35)
    # aksanlı adın içerik geçişi 0/None → sadeleştirilmiş adla bir kez daha
    for q, v in list(r["icerik_gecisi"].items()):
        if (not v) and any(c not in TR for c in q):
            q2 = A.norm(q)
            if q2 and q2 not in r["icerik_gecisi"]:
                r["icerik_gecisi"][q2] = A.gecis(q2); ag += 1; time.sleep(0.35)
    if r["hukum"] == "VAR":
        r["icerik_gecisi"] = {}
    # tamamlayıcı başlık araması (ARAC-TDV-SLUG-0930-baslik.py) isabet verdiyse
    if r["hukum"] == "BELIRSIZ" and r.get("baslik_isabet"):
        r["hukum"] = "BASLIK-ARAMASI"
    if r.get("hukum_elle"):
        r["hukum"] = r["hukum_elle"]

say = collections.Counter(r["hukum"] for r in d["kunyeler"])
d["hukum_dagilimi"] = dict(say)
json.dump(d, open(J, "w", encoding="utf-8"), ensure_ascii=False, indent=1)

# ---- rapor
bol = collections.defaultdict(list)
for r in d["kunyeler"]:
    bol[r["bolge"]].append(r)
SIRA = ["VAR", "AD-MADDESI", "KAPSAYICI", "BASLIK-ARAMASI", "YANLIS?", "BELIRSIZ", "ARIZA"]
out = []
out.append(f"\n## 1. Ölçüm\nEvren **{d['evren']}** · ölçülen **{d['olculen']}** · süre {d['sure_sn']} sn · "
           f"son işlemde ek ajax isteği {ag}.\n")
out.append("| hüküm | sayı | % |\n|---|---:|---:|")
for h in SIRA:
    out.append(f"| {h} | {say.get(h,0)} | {100*say.get(h,0)/max(1,d['olculen']):.0f} |")
out.append("\n## 2. Bölge bölge\n")
out.append("| bölge | n | VAR | AD-M | KAPS | BAŞLIK-AR. | YANLIŞ? | BELİRSİZ | ARIZA | TDV birincil? |\n|---|---:|---:|---:|---:|---:|---:|---:|---:|---|")
hukumler = {}
for b, rs in sorted(bol.items(), key=lambda x: -len(x[1])):
    c = collections.Counter(r["hukum"] for r in rs)
    n = len(rs)
    dog = c["VAR"] + c["AD-MADDESI"]
    tut = dog + c["KAPSAYICI"]
    if dog / n >= 0.5:
        h = "**EVET** — birincil"
    elif tut / n >= 0.5:
        h = "KISMEN — çoğu yalnız kapsayıcı; ince tarih için akademik kaynak eşlik eder"
    else:
        h = "**HAYIR** — birincil OLAMAZ; §4 gereği akademik kaynak `kaynak:`a adıyla"
    hukumler[b] = h
    out.append(f"| {b} | {n} | {c['VAR']} | {c['AD-MADDESI']} | {c['KAPSAYICI']} | {c['BASLIK-ARAMASI']} | {c['YANLIS?']} | {c['BELIRSIZ']} | {c['ARIZA']} | {h} |")
out.append("\nEşik (öngörü değil, sınıflama kuralı): VAR+AD-MADDESİ ≥ %50 → EVET · "
           "VAR+AD+KAPSAYICI ≥ %50 → KISMEN · değilse HAYIR.\n")
out.append("\n## 3. Künye künye (bölge içinde yerleşim-yıl sırası)\n")
for b, rs in sorted(bol.items(), key=lambda x: -len(x[1])):
    out.append(f"\n### {b} ({len(rs)}) — {hukumler[b]}\n")
    out.append("| sıra | id | hüküm | canlı slug (başlık) | ölü slug | içerik geçişi |\n|---:|---|---|---|---|---|")
    for r in sorted(rs, key=lambda x: -x["yerlesim_yil"]):
        cs = ", ".join(f"`{s}` ({t})" for s, t in zip(r["canli_slug"], r["baslik"]))
        ys = ", ".join(f"⚠️`{y['slug']}`→{y['baslik']}" for y in r["yanlis_madde_supheli"])
        ig = " · ".join(f"{k}:{v}" for k, v in r["icerik_gecisi"].items())
        ar = (" · ARIZA " + ",".join(r["ariza"])) if r["ariza"] else ""
        nt = f" · ✍️ {r['elle_not']}" if r.get("elle_not") else ""
        if r.get("baslik_isabet"):
            cs += (" " if cs else "") + "🔎 " + ", ".join(f"`{x['slug']}` ({x['baslik']})" for x in r["baslik_isabet"][:4])
        out.append(f"| {r['sira']} | `{r['id']}` | {r['hukum']}{nt} | {cs}{(' ' + ys) if ys else ''} | "
                   f"{', '.join(r['olu_slug'])} | {ig}{ar} |")
open("denetim/TDV-SLUG-HARITA-0930.govde.md", "w", encoding="utf-8").write("\n".join(out) + "\n")
print(dict(say))
for b, h in hukumler.items():
    print(b, len(bol[b]), h)
