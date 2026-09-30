# -*- coding: utf-8 -*-
"""③ UYGULAYICI — eşlenmeyen KRONOLOJI_<X> dosyasını çok-künyeli yola taşır.

Ne yapar (dosya başına):
  1. `window.KRONOLOJI_<X> = [`  →  `window.KRONOLOJI_COK_<X> = [`   (count==1)
     Dosya ADI değişmez ⇒ index.html'e satır gerekmez; yalnız `paketle.py yenile`.
  2. Atfı KESİN olan her maddenin açılışına `devlet:"id", ` ya da
     `devletler:["a","b"], ` eklenir (madde başlangıç satırları node'un
     ayrıştırdığı dizinin sırasıyla birebir eşleşmezse DOSYA YAZILMAZ).
  3. Atfı BELİRSİZ madde DOKUNULMAZ ve sayılır — app.js onu hiçbir künyeye
     eklemez (bugünkü görünmezliği sürer, kötüleşmez).

Atıf sınıfları — öncelik sırasıyla; künye id'si devletler.js'ten okunur, UYDURULMAZ:
  KUNYE   yazarın koyduğu `kunye:[…]` alanı
  ONEK    yazarın koyduğu `d:"[Dönem] …"` öneki → ONEK sözlüğü
          ("A → B" ve "A / B" iki künyeye; "A — alt" başı A)
  ETIKET  `etiket[]` içinde gerçek künye id'si
  KAYNAK  `kaynak:` alanındaki TDV maddesi bir DEVLET/HANEDAN/HÜKÜMDAR maddesiyse
          (yer maddesi DEĞİL) → KAYNAK sözlüğü
  YER     yalnız şehir-devleti dosyasında: `yer_id` şehrin KENDİSİ devletse
  ZINCIR  tek ülkeli dosyada ardışık künye zinciri
  BELIRSIZ hiçbiri tutmadı
🔴 HER SINIFTA PENCERE SINAVI (koordinatör M-5416 kural (1)-(2)): aday künyelerden
   yalnız `t` gününü [f, t) penceresinde tutan kalır; tam geçiş günü (biri biterken
   öteki başlıyor) ⇒ ikisi; çakışan iki pencere ⇒ BELİRSİZ; hiçbiri tutmazsa sınıf
   DÜŞER ve sıradakine bakılır — ardıl künyeye geriye dönük bağlama YOK.
Yazarın atfı (KUNYE/ONEK) pencereden düşerse "PENCERE-DIŞI" diye sayılır.

KULLANIM
  py denetim/ARAC-KRONO-BAGLAMA-0929-UYGULA.py [kısa-ad …]      kuru koşu (VARSAYILAN)
  … --uygula                                                  yazar
  … --json <yol>                                              madde madde kayıt
"""
import json, os, re, subprocess, sys, collections

sys.stdout.reconfigure(encoding="utf-8", errors="replace")
KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

# ---- yapılandırma (künye id'leri devletler.js'ten OKUNDU, 29 Eyl 2026) -------
SELCUK = ["selcuklu"]
AYAR = {
    "japonya": {
        "zincir": ["kamakura", "kenmu", "muromachi", "azuchi-momoyama", "edo-bakufu", "meiji-japonya"],
        "onek": {"Kamakura Şogunluğu": "kamakura", "Kenmu": "kenmu", "Muromachi": "muromachi",
                 "Sengoku dönemi": "muromachi", "Azuchi-Momoyama": "azuchi-momoyama",
                 "Edo Şogunluğu": "edo-bakufu", "Edo": "edo-bakufu", "Meiji dönemi": "meiji-japonya",
                 "Meiji": "meiji-japonya", "Taishō dönemi": "meiji-japonya", "Taishō": "meiji-japonya"},
    },
    "cin": {"zincir": ["yuan-hanedani", "ming-hanedani", "qing-hanedani", "cin-cumhuriyeti"]},
    "misir": {"zincir": ["memluk", "misir-eyaleti", "fransiz-misir-seferi", "misir-kavalali",
                         "misir-sultanligi", "misir-kralligi"]},
    "sirbistan": {"zincir": ["sirbistan-nemanjic", "sirp-despotlugu", "sirbistan-eyaleti",
                             "sirbistan-prensligi", "sirbistan-kralligi", "yugoslavya"]},
    "guney_asya": {"onek": {
        "Nepal": "nepal", "Racput": "racput", "Sind": "sind", "Travankur": "travankur",
        "Manipûr": "manipur", "Ladakh": "ladak", "Bâbürlü": "babur-imparatorlugu",
        "Delhi Sultanlığı": "delhi-sultanligi", "Meysûr": ["meysur", "meysur-racaligi"]}},
    "hindistan": {"onek": {
        "Bâbürlü": "babur-imparatorlugu", "Delhi Sultanlığı": "delhi-sultanligi",
        "Meysûr": ["meysur", "meysur-racaligi"], "Maratha": "maratha", "Sih": "sih-imparatorlugu",
        "Gucerât": "gucerat-sultanligi", "Behmenî": "behmeni", "Golkonda": "golkonda",
        "Bengal": ["bengal-sultanligi", "bengal-nevabligi"], "Sûrî": "sur-hanedani",
        "Mâlvâ": "malva-sultanligi", "Keşmir": ["kesmir", "cammu-kesmir"],
        "Vijayanagara": "vijayanagara", "Bîcâpur": "bicapur", "Ahmednagar": "ahmednagar",
        "Sind": "sind"}},
    "ozbek": {},                                   # etiket[] buhara/hive/hokand taşıyor
    "kuzeyafrika": {"kaynak": {
        "meriniler": "merini", "sadiler": "sadi", "tilimsan": "zeyyani",
        "tunus": ["hafsi", "tunus-ocagi", "tunus-beyligi-fransiz"],
        "trablusgarp": "trablusgarp-ocagi", "trablusgarp-savasi": "trablusgarp-ocagi"}},
    "arabistan": {"kaynak": {
        "uman": ["nebhani", "umman"], "yarubiler": "umman", "said-b-sultan": "umman",
        "benihalid": "benihalid"}},
    "iran_ardillari": {"kaynak": {
        "ilhanlilar": "ilhanli", "gazan-han": "ilhanli", "serbedariler": "serbedariler",
        "celayirliler": "celayirli", "hasan-i-buzurg": "celayirli", "muzafferiler": "muzafferi",
        "kert": "kert", "karakoyunlular": "karakoyunlu"}},
    "orta_asya": {"kaynak": {
        "kazan-hanligi": "kazan", "nogaylar": "nogay", "kucum-han": "sibir-hanligi",
        "sibir-hanligi": "sibir-hanligi", "turkmenler": "turkmen", "yakub-beg": "yakub-beg",
        "astarhan-hanligi": "astarhan", "ejderhan-hanligi": "astarhan",
        "kazakistan": "kazak-hanligi", "kazaklar": "kazak-hanligi"}},
    "dogu_afrika": {"kaynak": {
        "etiyopya": "habesistan", "harar": "adal", "ahmed-el-mucahid": "adal",
        "makdisu": "makdisu-sultanligi", "somali": "somali", "evfat": "evfat",
        "kaffa-kralligi": "kaffa-kralligi", "cimma-sultanligi": "cimma-sultanligi",
        "sidamo-kralliklari": "sidamo-kralliklari"}},
    "anadolu": {"kaynak": {
        "karamanogullari": "karaman", "selcuklular": SELCUK, "dulkadirogullari": "dulkadir",
        "artuklular": "artuklu", "aydinogullari": "aydin", "keykubad-i": SELCUK,
        "keyhusrev-i": SELCUK, "keykavus-i": SELCUK, "kilicarslan-ii": SELCUK, "mesud-i": SELCUK,
        "keyhusrev-ii": SELCUK, "keykavus-ii": SELCUK, "ilgazi-necmeddin": "artuklu",
        "umur-bey": "aydin", "cuneyd-bey": "aydin"}},
    "balkan": {"kaynak": {
        "karadag": ["zeta", "karadag"], "yunanistan": "yunanistan",
        "bulgaristan": ["bulgar-carligi", "bulgaristan-prensligi", "bulgaristan-kralligi"],
        "bulgaristan-kralligi": "bulgaristan-kralligi",
        "bosna-hersek": ["bosna-kralligi", "bosna-isgal"], "girit": "girit-devleti", "hersek": "hersek",
        "sirbistan": ["sirbistan-nemanjic", "sirp-despotlugu", "sirbistan-eyaleti",
                      "sirbistan-prensligi", "sirbistan-kralligi"]}},
    # yalnız dosyanın KENDİ şehir devletleri — Napoli/Venedik yer_id'li maddeler başka
    # devletin savaşı (1435/1552 Ponza: Ceneviz filosu) ⇒ örneklemde yanlış çıktı, ALINMADI
    "italya_sehir": {"yer": {
        "Cenova": "cenova", "Ferrara": "ferrara", "Modena": "ferrara", "Siena": "siena"}},
}

NODE_OKU = r"""
const fs=require('fs'),path=require('path'),vm=require('vm');
const kok=process.argv[1];const c=vm.createContext({});c.window=c;
vm.runInContext(fs.readFileSync(path.join(kok,'data/devletler.js'),'utf8'),c);
const K={};c.DEVLETLER.forEach(d=>K[d.id]={f:d.f,t:d.t,ad:d.ad,kr:(d.kronoloji||[]).map(m=>({t:m.t,b:m.b}))});
const out={kunye:K,dosya:{}};
for(const f of process.argv.slice(2)){const once=new Set(Object.keys(c));
 vm.runInContext(fs.readFileSync(path.join(kok,f),'utf8'),c,{filename:f});
 const a=Object.keys(c).filter(k=>!once.has(k)&&/^KRONOLOJI_/.test(k));
 out.dosya[f]={anahtar:a,maddeler:(c[a[0]]||[]).map(m=>({t:m.t,b:m.b,d:m.d,kunye:m.kunye,etiket:m.etiket,
   kaynak:m.kaynak,yer_id:m.yer_id,devlet:m.devlet,devletler:m.devletler,taraflar:m.taraflar}))};}
process.stdout.write(JSON.stringify(out));
"""


def node_oku(dosyalar):
    p = subprocess.run(["node", "-e", NODE_OKU, KOK] + dosyalar, capture_output=True, text=True, encoding="utf-8")
    if p.returncode: raise SystemExit("ÖLÇÜLEMEDİ (node): " + p.stderr[:1500])
    return json.loads(p.stdout)


def liste(v):
    return v if isinstance(v, list) else [v]


def pencere(t, adaylar, K):
    """(kabul, neden). [f,t) penceresi; tam geçiş günü ⇒ ikisi; çakışma ⇒ belirsiz."""
    kapsayan = [z for z in adaylar if K[z]["f"] <= t < K[z]["t"]]
    biten = [z for z in adaylar if K[z]["t"] == t]
    if len(kapsayan) == 1:
        gecis = [b for b in biten if K[kapsayan[0]]["f"] == t]
        return sorted(set(kapsayan + gecis), key=adaylar.index), None
    if not kapsayan:
        return (biten, None) if biten else (None, "pencere dışı")
    return None, "çakışan pencere: " + ",".join(kapsayan)


def onek_adaylari(d, onek):
    m = re.match(r"\s*\[([^\]]+)\]", d or "")
    if not m: return None, None
    ham, ids = m.group(1), []
    for parca in re.split(r"→| / ", ham):
        bas = parca.split(" — ")[0].strip()
        for p in bas.split("/"):
            p = p.strip()
            if p not in onek: return None, ham
            ids.append(liste(onek[p]))
    return ids, ham


def kaynak_slug(k):
    k = k or ""
    sl = re.findall(r"TDV `([a-z0-9-]+)`", k) or re.findall(r"devletler\.js `([a-z0-9-]+)`", k)
    m = re.match(r"([a-z0-9-]+)(?: \(TDV\)|\s*[—·(,;:]|$)", k)
    if not sl and m: sl = [m.group(1)]
    return sl[0] if sl else None


def atfet(m, ayar, K):
    """→ (sinif, ids, not). Her sınıf pencere sınavından geçmeli."""
    t, notlar = m["t"], []
    adaylar = []                                   # (sınıf, [aday-grupları])
    if m.get("kunye"):
        adaylar.append(("KUNYE", [[x] for x in m["kunye"] if x in K]))
    if ayar.get("onek"):
        g, ham = onek_adaylari(m.get("d"), ayar["onek"])
        if g: adaylar.append(("ONEK", g))
        elif ham: notlar.append("önek çözülmedi: " + ham)
    etk = [x for x in (m.get("etiket") or []) if isinstance(x, str) and x in K]
    if etk: adaylar.append(("ETIKET", [[x] for x in etk]))
    if ayar.get("kaynak"):
        s = kaynak_slug(m.get("kaynak"))
        if s in ayar["kaynak"]: adaylar.append(("KAYNAK", [liste(ayar["kaynak"][s])]))
        elif s: notlar.append("kaynak sözlükte yok: " + s)
    if ayar.get("yer") and m.get("yer_id") in ayar["yer"]:
        adaylar.append(("YER", [liste(ayar["yer"][m["yer_id"]])]))
    if ayar.get("zincir"):
        adaylar.append(("ZINCIR", [ayar["zincir"]]))
    for sinif, gruplar in adaylar:
        if not gruplar: continue
        kabul, dus = [], []
        for g in gruplar:                          # her grup kendi penceresinde çözülür
            k, neden = pencere(t, g, K)
            if k: kabul += k
            else: dus.append(f"{'/'.join(g)}: {neden}")
        if kabul and not dus:
            return sinif, list(dict.fromkeys(kabul)), notlar
        notlar.append(f"{sinif} düştü — " + "; ".join(dus))
        if sinif in ("KUNYE", "ONEK"):
            notlar.append("PENCERE-DIŞI")
    return "BELIRSIZ", None, notlar


BASLANGIC = re.compile(r'^(\s*)\{\s*t:"([^"]*)",')
BLOK_B = re.compile(r'(?<![A-Za-z_])b:"((?:[^"\\]|\\.)*)"')


def js_dizgi(raw):
    return json.loads('"' + raw.replace("\\'", "'") + '"')


def main():
    a = sys.argv[1:]
    uygula = "--uygula" in a
    json_yol = a[a.index("--json") + 1] if "--json" in a else None
    adlar = [x for x in a if not x.startswith("--") and x != json_yol] or list(AYAR)
    for x in adlar:
        if x not in AYAR: raise SystemExit(f"AYAR'da yok: {x}")
    yollar = [f"data/kronoloji_{x}.js" for x in adlar]
    veri = node_oku(yollar)
    K = veri["kunye"]
    for x in adlar:
        ay = AYAR[x]
        ids = ay.get("zincir", []) + [i for s in ("onek", "kaynak", "yer") for v in ay.get(s, {}).values() for i in liste(v)]
        for z in ids:
            if z not in K: raise SystemExit(f"künye yok (UYDURMA): {z} · {x}")
    kayit, genel = [], collections.Counter()
    print(f"KRONO-BAĞLAMA UYGULA · {'🔴 YAZIYOR' if uygula else 'kuru koşu'} · {len(adlar)} dosya")
    for x, yol in zip(adlar, yollar):
        dv = veri["dosya"][yol]
        eski = f"KRONOLOJI_{x.upper()}"
        if dv["anahtar"] != [eski]:
            print(f"  ⏭️ {x}: global {dv['anahtar']} ≠ [{eski}] — ATLANDI (zaten taşınmış olabilir)"); continue
        M = dv["maddeler"]
        say, pdisi, mukerrer, hedef = collections.Counter(), 0, 0, collections.Counter()
        atiflar = []
        for i, m in enumerate(M):
            if m.get("devlet") or m.get("devletler") or m.get("taraflar"):
                raise SystemExit(f"{x}#{i}: zaten devlet alanı var — beklenmedik, DUR")
            sinif, ids, notlar = atfet(m, AYAR[x], K)
            say[sinif] += 1
            if "PENCERE-DIŞI" in notlar: pdisi += 1
            for k in ids or []:
                hedef[k] += 1
                if any(o["t"] == m["t"] for o in K[k]["kr"]): mukerrer += 1
            atiflar.append(ids)
            kayit.append({"dosya": x, "i": i, "t": m["t"], "b": m["b"], "sinif": sinif, "atif": ids,
                          "not": notlar, "kaynak": (m.get("kaynak") or "")[:80], "yer_id": m.get("yer_id")})
        genel.update(say)
        yolm = os.path.join(KOK, yol)
        src = open(yolm, encoding="utf-8").read()
        satirlar = src.split("\n")
        # madde başlangıcı: `{ t:"…",` satırı; `b:` aynı satırda ya da bloğun içinde
        bas = [(n, mm) for n, s in enumerate(satirlar) for mm in [BASLANGIC.match(s)] if mm]

        def b_esit(k, m):
            blok = "\n".join(satirlar[bas[k][0]: bas[k + 1][0] if k + 1 < len(bas) else len(satirlar)])
            bb = BLOK_B.search(blok)
            return bool(bb) and js_dizgi(bb.group(1)) == m["b"]
        uyum = len(bas) == len(M) and all(mm.group(2) == m["t"] and b_esit(k, m)
                                         for k, ((n, mm), m) in enumerate(zip(bas, M)))
        glob = f"window.{eski} = ["
        print(f"  {x:14s} {len(M):4d} madde · " + " · ".join(f"{k} {v}" for k, v in say.most_common())
              + f" · yazar-atfı pencere dışı {pdisi} · künyede aynı-t {mukerrer}"
              + f" · satır uyumu {'✓' if uyum else '✗'} · global count {src.count(glob)}")
        print(f"     hedef: " + ", ".join(f"{k} {v}" for k, v in hedef.most_common()))
        if not uyum or src.count(glob) != 1:
            print(f"     🔴 kanıt tutmadı — {x} YAZILMAZ"); continue
        if uygula:
            for (n, mm), ids in zip(bas, atiflar):
                if not ids: continue
                alan = f'devlet:"{ids[0]}"' if len(ids) == 1 else "devletler:[" + ",".join(f'"{k}"' for k in ids) + "]"
                s = satirlar[n]
                i0 = s.index("{")
                satirlar[n] = s[:i0 + 1] + " " + alan + "," + s[i0 + 1:]
            yeni = "\n".join(satirlar).replace(glob, f"window.KRONOLOJI_COK_{x.upper()} = [", 1)
            open(yolm, "w", encoding="utf-8", newline="").write(yeni)
            print(f"     ✍️ yazıldı: {yol}")
    top = sum(genel.values())
    print(f"TOPLAM {top} madde · " + " · ".join(f"{k} {v} (%{100*v/top:.0f})" for k, v in genel.most_common()))
    if json_yol:
        json.dump(kayit, open(json_yol, "w", encoding="utf-8"), ensure_ascii=False, indent=1)


if __name__ == "__main__":
    main()
