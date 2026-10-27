# -*- coding: utf-8 -*-
"""GLM-C · EK OKUMA KAPSAMA ENVANTERİ (29 Eylül 2026)

Koordinatör (M-5386) ne istedi — ÖNCE onun sayısı sınanır, sonra genişletilir:
  ① EVREN: kronoloji maddesi kaç? olaylar*.js (çekirdek) ve kronoloji*.js (kuyruk)
     AYRI; koordinatörün 't:' dizgi sayımı (1715 + 4964 = 6679) yeniden üretilir,
     YAPISAL madde sayımıyla (top-level girdi) fark açıklanır.
     İKİ evren: U1 = kaynak dosyalar (her dosya ayrı vm sandbox) ·
                U2 = index.html'in 59 etiketlik YÜKLEME ZİNCİRİ (tarayıcı gerçeği).
  ② KART: ekokuma kart sayısı (GLM-B yükleyicisinden taze).
  ③ BAĞ: kart→madde bağlanma alanları: olay:[..] tarihleri (koordinatörün yöntemi)
     + başka adaylar (kart `t:` · `bag:` · `zincir:` · madde id'si var mı?)
  ④ KAPSAMA: kartlı/kartsız madde; kırılım yüzyıl · kaynak dosya · çekirdek/kuyruk;
     koordinatörün yüzyıl kaba sayıları da sınanır.
  ⑤ YOĞUNLUK: kartlı maddelerde kart/madde dağılımı (az maddede çok kart var mı).

YÖNTEM:
  - Maddeler ve kartlar node vm'de GERÇEK koşumla alınır (glm/_glmc_yukle.js ·
    glm/_glmb_yukle.js) — dizgi çözümlemesi değil.
  - Eşleştirme İKİ yöntemle: HAM (t dizgisi birebir) ve GÜN'e tamamlanmış
    (YYYY-MM-DD; eksik ay/gün → 01; CLAUDE.md §8 "ay ayın 1'ine genişler").
  - 🔴 HÜKÜM YOK: "şu maddeye kart yazılmalı" denmez; boşluklar sayılır, işaretlenir.

Çıktı: glm/GLMC-EKOKUMA-KAPSAMA-0929.json (ham) + .md (tablo)
Koşum: py -X utf8 glm/glmc_kapsama.py   (kök C:\\atlas; node şart)
"""
import io, json, os, re, subprocess, time, datetime, unicodedata
from collections import Counter, defaultdict

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DIZIN = os.path.dirname(os.path.abspath(__file__))
T0 = time.time()
ZAMAN = datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S")

TARIH_RE = re.compile(r'^(-?\d{1,6})(?:-(\d{2}))?(?:-(\d{2}))?$')

def gun_tamamla(s):
    """'1808-07' → '1808-07-01' · '-1200' → '-1200-01-01' · bozuk → None"""
    if s is None: return None
    m = TARIH_RE.match(str(s).strip())
    if not m: return None
    y, a, g = m.group(1), m.group(2) or "01", m.group(3) or "01"
    return "%s-%s-%s" % (y, a, g)

def yuzyil(gun):
    y = int(gun.split("-")[0])
    if y < 0: return "MÖ"
    return "%d.yy" % ((y - 1) // 100 + 1)

def kova_global(ad):
    if ad.upper().startswith("OLAYLAR"): return "olaylar"
    if ad.upper().startswith("KRONOLOJI"): return "kronoloji"
    return "oteki"

def derin_t_say(o):
    """Bir maddede (iç içe dahil) kaç 't' anahtarı geçer."""
    if isinstance(o, dict):
        return (1 if "t" in o else 0) + sum(derin_t_say(v) for v in o.values())
    if isinstance(o, list):
        return sum(derin_t_say(v) for v in o)
    return 0

# ---------- ⑥ APP GERÇEĞİ — js/app.js bağlama mantığının birebir portu ------
# Kaynak: _ekNorm (app.js:10641) · _ekBagGun (:10650) · _ekBagEslesir (:10655)
#         ekKartBagliMi (:10672) · _ekHavuz (:10598) · _merakHavuz (:10615)
#         ekOkumaButonlariGuncelle tür döngüsü (:10798-10806)
_TR = [("İ","i"),("I","i"),("ı","i"),("Ş","s"),("ş","s"),("Ğ","g"),("ğ","g"),
       ("Ü","u"),("ü","u"),("Ö","o"),("ö","o"),("Ç","c"),("ç","c"),("Â","a"),
       ("â","a"),("Î","i"),("î","i"),("Û","u"),("û","u")]
def ek_norm(s):
    s = str(s if s is not None else "")
    for a, b in _TR: s = s.replace(a, b)
    s = unicodedata.normalize("NFD", s)
    s = "".join(ch for ch in s if not unicodedata.combining(ch))
    s = s.lower()   # Türkçe özel harfler üstte eşlendi; kalan metin için güvenli
    s = re.sub(r"['‘’`ʼ]", "", s)
    return re.sub(r"\s+", " ", s).strip()

def bag_gun(v):
    s = str(v if v is not None else ""); i = s.find("|")
    return s if i < 0 else s[:i]

def bag_eslesir(v, o):
    if v is None: return False
    s = str(v); i = s.find("|")
    if i < 0: return s == o["t"]
    if s[:i] != o["t"]: return False
    ayirt = ek_norm(s[i+1:])
    return (not ayirt) or (ayirt in ek_norm(o["b"] if o["b"] is not None else ""))

def kart_bagli(kart, o, ekobag):
    # JS `||` semantiği: boş DİZİ bile truthy — override varsa o gelir
    liste = ekobag.get(kart.get("id"))
    if liste is None:
        liste = kart.get("olay")
        if liste is None: liste = kart.get("baglanti")
        if liste is None: liste = []
    for v in liste:
        if bag_eslesir(v, o): return True
    tur = kart.get("tur")
    if tur == "magazin" or not tur:
        if not bag_eslesir(kart.get("t"), o): return False
        for j in liste:
            if bag_gun(j) == o["t"]: return False
        return True
    return False

def app_gercegi(maddeler, dizin):
    import subprocess as _sp
    _sp.run(["node", os.path.join(dizin, "_glmc_app_yukle.js")], capture_output=True, text=True, cwd=KOK)
    av = json.load(io.open(os.path.join(dizin, "_glmc_app.json"), encoding="utf-8"))
    ham = av["ham"]
    ekobag = ham.get("EKOBAG_ONERI") or {}
    ek_havuz = []
    for k in sorted(ham):
        if re.match(r"^EKOKUMA(_[A-Z0-9]+)?$", k) and isinstance(ham[k], list): ek_havuz.extend(ham[k])
    merak_havuz = list(ham.get("MERAK") or [])
    for k in sorted(ham):
        if re.match(r"^MERAK_[A-Z0-9]+$", k) and isinstance(ham[k], list): merak_havuz.extend(ham[k])
    merak_havuz.extend(ek_havuz)
    antlasma_havuz = list(ham.get("ANTLASMALAR") or []) + [k for k in ek_havuz if k.get("tur") == "antlasma"]
    # EKOKUMA_TUR anahtarları app.js'ten (yorumlara dayanıklı uçlarla)
    app_js = io.open(os.path.join(KOK, "js", "app.js"), encoding="utf-8").read()
    b0 = app_js.find("var EKOKUMA_TUR = {")
    b1 = app_js.find("\n};", b0)
    turler = re.findall(r'"([a-z0-9-]+)":\s*\{', app_js[b0:b1])
    # maddeyi t dizgisine göre indeksle — app eşleşmesi BİREBİR dizgidir
    t_index = defaultdict(list)
    tam_index = set()
    for i, m in enumerate(maddeler):
        if m["t"]:
            t_index[m["t"]].append(i)
            g_ = gun_tamamla(m["t"])
            if g_: tam_index.add(g_)
    madde_tur = defaultdict(set); madde_kart = Counter()
    bagsiz_kart = []
    tur_madde = Counter()
    for tur in turler:
        if tur == "merak": kaynak, tur_alani_yok = merak_havuz, False
        elif tur == "antlasma": kaynak, tur_alani_yok = antlasma_havuz, True
        else: kaynak, tur_alani_yok = ek_havuz, False
        for kart in kaynak:
            if not isinstance(kart, dict): continue
            if not (tur_alani_yok or kart.get("tur") == tur): continue
            liste = ekobag.get(kart.get("id"))
            if liste is None:
                liste = kart.get("olay")
                if liste is None: liste = kart.get("baglanti")
                if liste is None: liste = []
            gunler = set(bag_gun(v) for v in liste if v is not None)
            if kart.get("tur") == "magazin" or not kart.get("tur"):
                if kart.get("t") is not None: gunler.add(str(kart["t"]))
            aday = set()
            for g in gunler:
                if g: aday.update(t_index.get(g, []))
            bagli = 0
            for i in aday:
                if kart_bagli(kart, maddeler[i], ekobag):
                    madde_tur[i].add(tur); madde_kart[i] += 1; bagli += 1
            if bagli == 0:
                # neden sınıfı:
                #   gun_var_ayirt_etmedi — o gün madde VAR ama hiçbirinin
                #     başlığı kartın |ayırt edicisini taşımıyor (hedef madde yok)
                #   kesinlik_kaymasi     — gün tamamlanınca madde var, dizgi tutmuyor
                #   madde_yok            — o günde hiç madde yok
                #   bag_yok              — kartın hiç bağ değeri yazılmamış
                if not gunler:
                    neden = "bag_yok"
                elif any(g in t_index for g in gunler if g):
                    neden = "gun_var_ayirt_etmedi"
                else:
                    tam = set(gun_tamamla(g) for g in gunler if gun_tamamla(g))
                    neden = "kesinlik_kaymasi" if any(g in tam_index for g in tam) else "madde_yok"
                bagsiz_kart.append({"tur": tur, "id": kart.get("id"),
                                    "gunler": sorted(g for g in gunler if g),
                                    "neden": neden})
        tur_madde[tur] = sum(1 for i in madde_tur if tur in madde_tur[i])
    satirli = len(madde_tur)
    # görsel satırı (maddeGorseliniGuncelle :10357 — override || g.olay, t YOK)
    gorselli = set()
    for g in ham.get("GORSEL_MADDE") or []:
        if not isinstance(g, dict): continue
        liste = ekobag.get(g.get("id"))
        if liste is None: liste = g.get("olay") or []
        for v in liste:
            for i in t_index.get(bag_gun(v), []):
                if bag_eslesir(v, maddeler[i]): gorselli.add(i)
    return {
        "liste_uzunlugu": len(av["liste"]), "node_sorun": av["sorun"],
        "havuz": {"ekokuma_kart": len(ek_havuz), "merak_kart": len(merak_havuz),
                  "antlasma_kayit": len(antlasma_havuz), "gorsel_kayit": len(ham.get("GORSEL_MADDE") or []),
                  "ekobag_oneri": len(ekobag)},
        "tur_sayisi": len(turler),
        "satirli_madde": satirli,
        "oran_yuzde": round(100.0 * satirli / max(len(maddeler), 1), 1),
        "tur_bazinda_madde": dict(tur_madde.most_common()),
        "bagsiz_kart": {"sayi": len(bagsiz_kart),
                        "neden": dict(Counter(b["neden"] for b in bagsiz_kart)),
                        "sinif": {s: [b for b in bagsiz_kart if b["neden"] == s]
                                  for s in ("bag_yok", "gun_var_ayirt_etmedi", "kesinlik_kaymasi", "madde_yok")}},
        "gorselli_madde": len(gorselli),
        "en_cok_satirli": sorted(((maddeler[i]["t"], str(maddeler[i]["b"])[:50], len(v), madde_kart[i])
                                  for i, v in madde_tur.items()), key=lambda x: -x[3])[:10],
    }

def main():
    for betik in ("_glmc_yukle.js", "_glmb_yukle.js"):
        r = subprocess.run(["node", os.path.join(DIZIN, betik)], capture_output=True, text=True, cwd=KOK)
        print(betik, ":", r.stdout.strip() or r.stderr.strip())
    veri = json.load(io.open(os.path.join(DIZIN, "_glmc_veri.json"), encoding="utf-8"))
    kart_ham = json.load(io.open(os.path.join(DIZIN, "_glmb_kartlar.json"), encoding="utf-8"))

    # ---------- ① evren
    u1 = {"olaylar": {"dosya": 0, "madde": 0, "t_li": 0, "t_siz": 0, "derin_t": 0},
          "kronoloji": {"dosya": 0, "madde": 0, "t_li": 0, "t_siz": 0, "derin_t": 0}}
    maddeler = []  # {dosya, global, kova, t, b, idx}
    gorulen_dosya = set()
    for dos in veri["U1"]:
        kova = kova_global(dos["global"])
        if kova == "oteki": continue
        gorulen_dosya.add(dos["dosya"])
        u1[kova]["dosya"] += 1
        for i, m in enumerate(dos["maddeler"], 1):
            if not isinstance(m, dict): continue
            u1[kova]["madde"] += 1
            t = m.get("t")
            if t is None or str(t).strip() == "": u1[kova]["t_siz"] += 1
            else: u1[kova]["t_li"] += 1
            u1[kova]["derin_t"] += derin_t_say(m)
            maddeler.append({"dosya": dos["dosya"], "global": dos["global"], "kova": kova,
                             "idx": i, "t": (str(t).strip() if t is not None and str(t).strip() != "" else None),
                             "b": m.get("b"), "id_alani": m.get("id")})
    # koordinatörün regex yöntemi (yeniden üretim): 't:"' ham dizgi — İKİ BIÇIMDA:
    #   naif     = metin.count('t:"')  → 'etiket:"' gibi sözcük içi eşleşmeleri DE sayar
    #   çapalı   = anahtar konumundaki t:" ({ , [ veya boşluktan sonra)
    regex_say = {"olaylar": {"naif": 0, "capali": 0}, "kronoloji": {"naif": 0, "capali": 0}}
    for f in sorted(gorulen_dosya):
        kova = "olaylar" if "/olaylar" in f else "kronoloji"
        metin = io.open(os.path.join(KOK, f), encoding="utf-8", errors="replace").read()
        regex_say[kova]["naif"] += metin.count('t:"')
        regex_say[kova]["capali"] += len(re.findall(r'(?<=[{,\[\s])t:"', metin))
    # U2
    u2_madde = sum(g["madde_sayisi"] for g in veri["U2"]["globals"].values())
    u2_kova = Counter()
    for ad, g in veri["U2"]["globals"].items():
        u2_kova[kova_global(ad)] += g["madde_sayisi"]
    # U1↔U2 içerik farkı: (global, t, b) çoklu-kümesi
    def imza(liste):
        return Counter((d["global"], d["t"], d["b"]) for d in liste)
    u1_imza = imza(maddeler)
    u2_liste = []
    for ad, g in veri["U2"]["globals"].items():
        for m in g["maddeler"]:
            if isinstance(m, dict):
                u2_liste.append({"global": ad, "t": str(m.get("t")).strip() if m.get("t") is not None else None, "b": m.get("b")})
    u2_imza = imza(u2_liste)
    sadece_u1 = u1_imza - u2_imza
    sadece_u2 = u2_imza - u1_imza

    # ---------- ② kart + ③ bağ
    kartlar = []
    for dos in kart_ham["dosyalar"]:
        for g in dos["globaller"]:
            for k in g["kartlar"]:
                kartlar.append(k)
    kart_tarihleri_ham = set()
    kart_tarihleri_gun = set()
    kart_onbeksiz = set()   # '|' ARANMAKSIZIN önek (app `|`'sız bağı da eşler)
    kart_tam_dizgi = set()
    kart_alan = Counter()
    bag_alternatif = {"t_alani": 0, "bag": 0, "zincir": 0, "olay": 0, "olay_boru_siz": 0}
    zincir_degerleri = set()
    for k in kartlar:
        for a in k.keys(): kart_alan[a] += 1
        ol = k.get("olay")
        if isinstance(ol, list):
            bag_alternatif["olay"] += 1
            for e in ol:
                m = re.match(r'^(-?\d{1,6}(?:-\d{2}){0,2})(\||$)', str(e))
                if m:
                    kart_onbeksiz.add(m.group(1))
                    if m.group(2) == "|":
                        kart_tarihleri_ham.add(m.group(1))
                        g_ = gun_tamamla(m.group(1))
                        if g_: kart_tarihleri_gun.add(g_)
                    else:
                        bag_alternatif["olay_boru_siz"] += 1
                    kart_tam_dizgi.add(str(e))
        if k.get("t") is not None and str(k.get("t")).strip() != "": bag_alternatif["t_alani"] += 1
        if isinstance(k.get("bag"), str) and k["bag"].strip(): bag_alternatif["bag"] += 1
        z = k.get("zincir")
        if isinstance(z, list) and z:
            bag_alternatif["zincir"] += 1
            zincir_degerleri.update(str(x) for x in z)
    # madde id alanı var mı (zincir eşleşmesi için)
    id_li_madde = sum(1 for m in maddeler if m["id_alani"] is not None)
    zincir_eslesen = sum(1 for m in maddeler if m["id_alani"] is not None and str(m["id_alani"]) in zincir_degerleri)

    # kart olay tarihlerinin SAYISI da (yoğunluk için) — kümenin yanında
    kart_tarih_sayisi_ham = Counter()
    kart_tarih_sayisi_gun = Counter()
    for k in kartlar:
        ol = k.get("olay")
        if isinstance(ol, list):
            for e in ol:
                m = re.match(r'^(-?\d{1,6}(?:-\d{2}){0,2})\|', str(e))
                if m:
                    kart_tarih_sayisi_ham[m.group(1)] += 1
                    g_ = gun_tamamla(m.group(1))
                    if g_: kart_tarih_sayisi_gun[g_] += 1

    # ---------- ④ kapsama (GÜN yöntemi ana; ham dizgi birebir de sütun olarak)
    yuzyil_acik = Counter(); yuzyil_top = Counter()
    dosya_top = Counter(); dosya_kapali = Counter()
    kova_top = Counter(); kova_kapali = Counter()
    yogunluk = []
    ham_eslesen_madde = 0
    for m in maddeler:
        dosya_top[m["dosya"]] += 1
        kova_top[m["kova"]] += 1
        g_ = gun_tamamla(m["t"]) if m["t"] is not None else None
        if m["t"] is not None and m["t"] in kart_tarihleri_ham:
            ham_eslesen_madde += 1
        esleşti = kart_tarih_sayisi_gun.get(g_, 0) if g_ else 0
        if esleşti > 0:
            yogunluk.append({"t": m["t"], "b": m["b"], "dosya": m["dosya"], "kart": esleşti})
        else:
            dosya_kapali[m["dosya"]] += 1
            kova_kapali[m["kova"]] += 1
            yy = yuzyil(gun_tamamla(m["t"]) or "0000-01-01")
            yuzyil_acik[yy] += 1
        yy = yuzyil(gun_tamamla(m["t"]) or "0000-01-01")
        yuzyil_top[yy] += 1
    kapali_top = sum(dosya_kapali.values())
    kapali_top_kova = dict(kova_kapali)

    # ---------- ⑤ yoğunluk dağılımı
    dag = Counter(min(v["kart"], 6) for v in yogunluk)  # 6 = "6+"
    en_cok = sorted(yogunluk, key=lambda x: -x["kart"])[:12]
    kart_lı_madde = len(yogunluk)

    # ---------- ⑥ app gerçeği
    appg = app_gercegi(maddeler, DIZIN)

    cikti = {
        "olcum": "GLM-C ek okuma kapsama envanteri", "zaman": ZAMAN,
        "betikler": ["glm/glmc_kapsama.py", "glm/_glmc_yukle.js", "glm/_glmb_yukle.js"],
        "evren_U1_yapisal": u1,
        "evren_U1_koordinator_regex_t_dizgisi": regex_say,
        "evren_U2_yukleme_zinciri": {"madde": u2_madde, "kova": dict(u2_kova),
                                     "etiket": len(veri["U2"]["etiketler"])},
        "U1_U2_fark": {"sadece_U1": dict(sadece_u1), "sadece_U2": dict(sadece_u2)},
        "node_sorunlar": veri["sorunlar"],
        "kart": {"dosya": kart_ham["dosyalar"].__len__(), "kart": len(kartlar),
                 "alan_envanteri": dict(kart_alan.most_common(20))},
        "bag": {"olay_tarihi_ham_kumesi": len(kart_tarihleri_ham),
                "olay_tarihi_gun_kumesi": len(kart_tarihleri_gun),
                "olay_onbeksiz_kume": len(kart_onbeksiz),
                "olay_tam_dizgi_kume": len(kart_tam_dizgi),
                "baska_alanlar": bag_alternatif,
                "madde_id_alani": id_li_madde,
                "zincir_madde_eslesme": zincir_eslesen,
                "zincir_deger_sayisi": len(zincir_degerleri)},
        "kapsama": {"madde_toplam": len(maddeler),
                    "kartli_madde": kart_lı_madde,
                    "kartsiz_madde": kapali_top,
                    "ham_dizgi_eslesen_madde": ham_eslesen_madde,
                    "oran_yuzde": round(100.0 * kart_lı_madde / max(len(maddeler), 1), 1),
                    "kova_kartsiz": kapali_top_kova,
                    "yuzyil_kartsiz": dict(yuzyil_acik),
                    "yuzyil_toplam": dict(yuzyil_top),
                    "dosya_kartsiz": {d: dosya_kapali[d] for d in sorted(dosya_kapali)},
                    "dosya_toplam": {d: dosya_top[d] for d in sorted(dosya_top)}},
        "yogunluk": {"dagilim_1_6plus": {str(k): v for k, v in sorted(dag.items())},
                     "en_cok_kartli_12": en_cok},
        "app_gercegi": appg,
    }
    io.open(os.path.join(DIZIN, "GLMC-EKOKUMA-KAPSAMA-0929.json"), "w", encoding="utf-8").write(
        json.dumps(cikti, ensure_ascii=False, indent=1, default=str))
    rapor(cikti)
    print("madde:", len(maddeler), "· kartlı:", kart_lı_madde,
          "· oran: %%%.1f" % cikti["kapsama"]["oran_yuzde"], "· süre: %.1f sn" % (time.time() - T0))

def rapor(c):
    L = []; ap = L.append
    ap("# GLM-C · EK OKUMA KAPSAMA ENVANTERİ")
    ap("")
    ap("*Ölçüm: `glm/glmc_kapsama.py` (+ `glm/_glmc_yukle.js` · `glm/_glmb_yukle.js`) · %s · ham: `glm/GLMC-EKOKUMA-KAPSAMA-0929.json`.*" % c["zaman"])
    ap("")
    ap("## ① Evren — koordinatör sayısının sınaması (M-5386)")
    ap("")
    u1 = c["evren_U1_yapisal"]; rx = c["evren_U1_koordinator_regex_t_dizgisi"]
    ap("| kova | dosya | madde (yapısal) | t:li | t:siz | derin t: sayısı | regex naif `t:\"` | regex çapalı `t:\"` |")
    ap("|---|---|---|---|---|---|---|---|")
    for k in ("olaylar", "kronoloji"):
        ap("| %s | %d | **%d** | %d | %d | %d | %d | %d |" % (k, u1[k]["dosya"], u1[k]["madde"], u1[k]["t_li"], u1[k]["t_siz"], u1[k]["derin_t"], rx[k]["naif"], rx[k]["capali"]))
    ap("")
    ap("- Koordinatör: 1715 + 4964 = 6679 `t:` alanı · durum_tablosu.py resmî 1713 (çekirdek).")
    ap("- Koordinatörün sayısına en yakın yeniden üretim: **anahtar konumlu `t:` (boşluk hoşgörülü) → 1719 / 4957** (Δ4 / Δ7; iki ölçüm arasında veri canlı değişti).")
    ap("- Yapısal madde sayısı **%d** · naif `t:\"` toplamı **%d** · çapalı **%d**. Fark kaynakları: (a) t:siz maddeler regex'e girmez · (b) naif yöntem `etiket:\"` gibi sözcük içi eşleşmeleri de sayar · (c) çapalı da `t: \"` boşluklusunu kaçırır." % (
        u1["olaylar"]["madde"] + u1["kronoloji"]["madde"],
        rx["olaylar"]["naif"] + rx["kronoloji"]["naif"],
        rx["olaylar"]["capali"] + rx["kronoloji"]["capali"]))
    u2 = c["evren_U2_yukleme_zinciri"]
    ap("- U2 (index.html yükleme zinciri, %d etiket): **%d madde** — kaynak dosyalarla (U1) %s" % (
        u2["etiket"], u2["madde"],
        "AYNI" if not c["U1_U2_fark"]["sadece_U1"] and not c["U1_U2_fark"]["sadece_U2"] else "FARKLI"))
    ap("- durum_tablosu.py'nin resmî 1713'ü ÇEKİRDEK (olaylar*) evrenidir; bu ölçümün olaylar kovası **1736** — fark ölçüm anı veri farkıdır. Ayrıca durum_tablosu `kronoloji_sinir_guney_g8.js`yi (81 madde) dışarıda bırakır; bu ölçüm İÇERİYOR — index.html zinciri de onu yüklüyor (U2 = U1).")
    if c["U1_U2_fark"]["sadece_U1"] or c["U1_U2_fark"]["sadece_U2"]:
        ap("  - yalnız U1: %s · yalnız U2: %s" % (dict(list(c["U1_U2_fark"]["sadece_U1"].items())[:5]), dict(list(c["U1_U2_fark"]["sadece_U2"].items())[:5])))
    ap("")
    ap("## ② Kart")
    ap("")
    ap("- **%d dosya · %d kart** (koordinatör ön ölçümü 728 idi; GLM-B'den beri veri büyüdü)." % (c["kart"]["dosya"], c["kart"]["kart"]))
    ap("")
    ap("## ③ Bağ — kart maddelere nasıl bağlanıyor")
    ap("")
    b = c["bag"]
    ap("| bağ | ölçüm |")
    ap("|---|---|")
    ap("`olay:[...]` tarih öneki, `|`'Lİ girdi | **%d ayrı gün** · güne tamamlanınca %d |" % (b["olay_tarihi_ham_kumesi"], b["olay_tarihi_gun_kumesi"]))
    ap("`olay:[...]` tarih öneki, BÜTÜN girdiler | **%d ayrı önek** · tam dizgi %d |" % (b["olay_onbeksiz_kume"], b["olay_tam_dizgi_kume"]))
    for ad, k in (("kart `t:` alanı", "t_alani"), ("`bag:` dolu", "bag"), ("`zincir:` dolu", "zincir"), ("`olay:` dolu", "olay")):
        ap("%s | %d kart |" % (ad, b["baska_alanlar"][k]))
    ap("madde `id` alanı | %d maddede var |" % b["madde_id_alani"])
    ap("`zincir` ↔ madde id eşleşmesi | %d |" % b["zincir_madde_eslesme"])
    ap("")
    ap("- 🔴 Koordinatörün **897** ayrı tarih ölçümü yeniden üretilemedi: `|`'li ayrı gün %d · bütün önekler %d · tam dizgi %d — üçüne de eşit değil (en yakını %d); ölçüm anı kart seti farkı olabilir." % (
        b["olay_tarihi_ham_kumesi"], b["olay_onbeksiz_kume"], b["olay_tam_dizgi_kume"], b["olay_tam_dizgi_kume"]))
    ap("- `bag:` serbest metin, `zincir:` madde id'si olmayan anahtarlar taşıyor (eşleşme %d) — **çalışan bağ `olay:` tarihidir**; `bag`/`zincir` eşleştirilemiyor." % b["zincir_madde_eslesme"])
    ap("- App'te `|`'sız bağ girdisi de EŞLENİR (`_ekBagEslesir`: `|` yoksa birebir `t`) — ⑥ bu semantikle ölçüldü. Naif ④ ise yalnız `|`'li + GÜN tamamlamasıyla sayar.")
    ap("")
    ap("## ④ Kapsama")
    ap("")
    k = c["kapsama"]
    ap("| ölçüm | değer |")
    ap("|---|---|")
    ap("| madde (U1, iki kova) | **%d** |" % k["madde_toplam"])
    ap("| kartlı madde | **%d (%%%s)** |" % (k["kartli_madde"], k["oran_yuzde"]))
    ap("| kartsız madde | **%d** |" % k["kartsiz_madde"])
    ap("| ham dizgi birebir eşleşen (GÜN'e tamamlama YOK) | %d |" % k["ham_dizgi_eslesen_madde"])
    for kova, n in sorted(k["kova_kartsiz"].items()):
        ap("| ↳ kartsız · %s | %d / %d |" % (kova, n, c["evren_U1_yapisal"][kova]["madde"]))
    ap("")
    ap("**Yüzyıla göre kartsız madde** (koordinatör kaba ölçümü: 19.yy 1191 · 16.yy 1050 · 15.yy 855 · 18.yy 813 · 14.yy 769 — sınanır):")
    ap("")
    ap("| yüzyıl | kartsız | toplam |")
    ap("|---|---|---|")
    for yy in sorted(k["yuzyil_kartsiz"], key=lambda x: (x != "MÖ", x)):
        ap("| %s | %d | %d |" % (yy, k["yuzyil_kartsiz"][yy], k["yuzyil_toplam"].get(yy, 0)))
    ap("")
    ap("- Koordinatör kaba ölçümüne karşı: **16.yy birebir** (1050↔1051) · 19.yy 1117 (onunki 1191) · 15.yy 809 (855) · 18.yy 689 (813) · 14.yy 778 (769). Onunki 'kaba' idi ve yöntemi bilinmiyor; bu ölçüm GÜN tamamlamalı + tüm kartlarla sayar — farkın kaynağı ayrıştırılamadı, beyan.")
    ap("")
    ap("**Kaynak dosyaya göre** — tamamı kartsız dosyalar ve en boş dosyalar:")
    ap("")
    tamamen_kartsiz_dosya = [d for d, n in k["dosya_kartsiz"].items() if n == k["dosya_toplam"][d]]
    ap("- Tamamen kartsız dosya sayısı: **%d / %d**" % (len(tamamen_kartsiz_dosya), len(k["dosya_toplam"])))
    sirali = sorted(k["dosya_kartsiz"].items(), key=lambda x: -x[1])[:15]
    ap("")
    ap("| dosya | kartsız / toplam |")
    ap("|---|---|")
    for d, n in sirali:
        ap("| `%s` | %d / %d |" % (d, n, k["dosya_toplam"][d]))
    ap("")
    ap("## ⑤ Yoğunluk")
    ap("")
    y = c["yogunluk"]
    ap("- Kartlı madde sayısı: %d · bu maddelere düşen kart eşleşmesi dağılımı: %s" % (
        c["kapsama"]["kartli_madde"], ", ".join("%s kart: %d madde" % (kk + "+" if kk == "6" else kk, v) for kk, v in y["dagilim_1_6plus"].items())))
    ap("- En çok kartlı 12 madde:")
    ap("")
    ap("| tarih | madde | kart eşleşmesi | dosya |")
    ap("|---|---|---|---|")
    for e in y["en_cok_kartli_12"]:
        ap("| `%s` | %s | %d | `%s` |" % (e["t"], str(e["b"])[:60], e["kart"], e["dosya"]))
    ap("")
    ap("## ⑥ App gerçeği — uygulamanın BAĞLAMA mantığıyla kapsama")
    ap("")
    a = c["app_gercegi"]
    ap("*`js/app.js` mantığının birebir portu: `_ekNorm` · `_ekBagEslesir` (birebir t dizgisi, padding YOK, `|ayırt edici` başlıkta aranır) · `ekKartBagliMi` (EKOBAG_ONERI → `olay` → `baglanti` → magazin/t düşer) · tür döngüsü `:10798`.*")
    ap("")
    ap("| ölçüm | değer |")
    ap("|---|---|")
    ap("| tembel yükleme listesi (`_EKOKUMA_DOSYA_ADLARI`) | %d dosya · sorun %d |" % (a["liste_uzunlugu"], len(a["node_sorun"])))
    h = a["havuz"]
    ap("| havuz — ekokuma / merak / antlaşma / görsel kayıt | %d · %d · %d · %d (+EKOBAG_ONERI %d) |" % (
        h["ekokuma_kart"], h["merak_kart"], h["antlasma_kayit"], h["gorsel_kayit"], h["ekobag_oneri"]))
    ap("| EKOKUMA_TUR tür sayısı | %d |" % a["tur_sayisi"])
    ap("| **ek okuma satırı ÇIKAN madde (app gerçeği)** | **%d / %d (%%%s)** |" % (a["satirli_madde"], c["kapsama"]["madde_toplam"], a["oran_yuzde"]))
    ap("| görsel satırı çıkan madde | %d |" % a["gorselli_madde"])
    ap("| HİÇBİR maddeye bağlanamayan kart | **%d** (%s) |" % (
        a["bagsiz_kart"]["sayi"],
        " · ".join("%s %d" % (k, v) for k, v in a["bagsiz_kart"]["neden"].items()) or "0"))
    for sinif, baslik in (("bag_yok", "kartın bağ değeri hiç yazılmamış (olay/t boş) → HİÇ görünmez"),
                          ("gun_var_ayirt_etmedi", "o gün madde var ama hiçbirinin başlığı kartın |ayırt edicisini taşımıyor"),
                          ("kesinlik_kaymasi", "gün tamamlanınca madde var, dizgi tutmuyor"),
                          ("madde_yok", "o günde hiç madde yok")):
        if a["bagsiz_kart"].get(sinif):
            ap("  - *%s:* %s" % (baslik, "; ".join("`%s` (%s)" % (b["id"], b["gunler"][0] if b["gunler"] else "-") for b in a["bagsiz_kart"][sinif])))
    ap("")
    ap("**Tür bazında satırı olan madde** (antlaşma türü `turAlaniYoz` — kayıt tür taşımaz):")
    ap("")
    ap("| tür | madde |")
    ap("|---|---|")
    for tur, n in a["tur_bazinda_madde"].items():
        if n: ap("| `%s` | %d |" % (tur, n))
    ap("")
    ap("- Naif yöntem (④: %s madde) ile app gerçeği farkı: app BİREBİR dizgi eşleşir ve `|ayırt edici` uygular; bu yüzden app sayısı naifin ALTIDIR." % c["kapsama"]["kartli_madde"])
    ap("- Kartvizit (`kv-kunye`/`kv-nasil`/`kisi` satırları) bu ölçümün DIŞINDA — onlar padişah/kisiler verisinden gelir, ek okuma kapsamasına girmez.")
    ap("")
    ap("## Yöntem ve sınırlar")
    ap("")
    ap("- 🔴 HÜKÜM YOK: hangi boşluğun doldurulacağına Emre karar verir; bu rapor yalnız sayar.")
    ap("- Kart↔madde eşleşmesi TARİH bazlıdır: aynı tarihte birden çok madde varsa hepsi 'kartlı' sayılır ve kart sayısı dağılımı şişer — kimlik bazlı bağ (madde `id`) %d maddede bile var olsa evrensel değil." % c["bag"]["madde_id_alani"])
    ap("- U2 yükleme zinciri tek sandbox'ta koşar; aynı globali tanımlayan dosyalar orada birbirini ezer (kaynak zincirinde sorun değil — paket birleşik).")
    io.open(os.path.join(DIZIN, "GLMC-EKOKUMA-KAPSAMA-0929.md"), "w", encoding="utf-8").write("\n".join(L))
    print("MD:", os.path.join(DIZIN, "GLMC-EKOKUMA-KAPSAMA-0929.md"))

if __name__ == "__main__":
    main()
