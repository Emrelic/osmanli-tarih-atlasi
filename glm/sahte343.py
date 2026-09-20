# -*- coding: utf-8 -*-
# glm/sahte343.py — GLM-4 · SAHTE-343 ayrıntısı (M-4663).
# Koşum: py -X utf8 glm/sahte343.py   (depo kökünden)
# Çıktı : glm/SAHTE-343.json + glm/SAHTE-343.md
#
# YÖNTEM: glm/2s_yer_tarama.py importlib ile ÇALIŞTIRILIR (yan etki: kendi
# JSON/md'sini aynı sayılarla yeniden yazar) — böylece evren, sınıflama ve
# Mankup kalibrasyonu GLM-3 teslimiyle BİREBİR aynı kalır. Bu betik yalnız
# 343 SAHTE tarihi (tarih bazlı sınıf) ayrıntılandırır:
#   1. tarih · yerleşim sayısı · eski→yeni devlet çiftleri · kapatan madde ·
#      tarih hassasiyeti (yıl-temsilî YYYY-01-01 / ay YYYY-MM-01 / gün)
#   2. KURTARMA: ±30 günde, bağlantılı TÜM kronoloji dosyalarında
#      (olaylar*.js [denetle zaten okur] + index.html'e bağlı kronoloji*.js
#      kuyruğu) KAPATAN DIŞINDA bir madde o yeri (yer_id/ad-çekirdek/bölge)
#      ya da taraflardan birini (künye adı, tam metin) anıyor mu?
#   3. sınıflar (öncelik sırasıyla, ilk eşleşen alır):
#      KURTARILABILIR > TOPLU-OLAY (≥20 yerleşim) > YIL-TEMSILI (kırılma
#      YYYY-01-01 VE kapatan madde de YYYY-01-01) > GERCEK-EKSIK.
# Not (M-4663'ün kendi uyarısı): SAHTE = "kapatan madde o yeri/devleti
# anmıyor" demektir, "kırılma yanlış" DEĞİL.

import importlib.util
import json
import os
import re
import sys
from bisect import bisect_left, bisect_right

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
GLM = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, os.path.join(KOK, "arac"))

# ── 1. GLM-3 evrenini aynen çalıştır ────────────────────────────────────────
# ⚠️ 20 Eylül notu: denetle.py'ye 2s YER/TARAF şartı girdi (commit d6fe3f9 —
# sahte kapanışlar artık AÇIK sayılıyor) + olaylar_amerika_0920.js + 12 yeni
# künye. Taban bugünkü evrenle koşar; dünkü (teslim edilen) sayılar
# SNAPSHOT dosyalarında korunur: SAHTE-343-SNAPSHOT-0919.json ·
# 2S-YER-TARAMA-SNAPSHOT-0919.json. DOGRULAMA bloğu 1418/13/353 bekler —
# bugün tutmazsa ölçülen değerle raporlanır (M-4658: tutmazsa önce rapor).
_spec = importlib.util.spec_from_file_location("syt", os.path.join(GLM, "2s_yer_tarama.py"))
syt = importlib.util.module_from_spec(_spec)
_spec.loader.exec_module(syt)  # kendi doğrulamasını basar, JSON'larını yazar

denetle = syt.denetle
OL_olay = syt.OL                       # 1..1679, yalnız olaylar*.js
_gecer = syt._gecer
Y_KOK, Y_BOLGE = syt.Y_KOK, syt.Y_BOLGE
devlet_adlari = syt.devlet_adlari
kayitlar = syt.kayitlar
IX = syt.IX

# ── 2. Kuyruk kronoloji: index.html'e BAĞLI kronoloji*.js ──────────────────
# (kural M-4663: "GIRDI/index.html'de bağlı olanlar" — diskte olup bağlı
#  olmayan kronoloji_cok_1dunya_A/B.js HARİÇ tutulur; ölçülüp yazılır)
html = open(os.path.join(KOK, "index.html"), encoding="utf-8").read()
bagli = sorted(set(re.findall(r'data/(kronoloji[a-z_0-9]*)\.js', html)))
diskte = sorted(set(os.path.basename(p)[:-3] for p in
                    __import__("glob").glob(os.path.join(KOK, "data", "kronoloji*.js"))))
bagli_degil = sorted(set(diskte) - set(bagli))

OL_kuyruk = []
for i, ad in enumerate(bagli):
    yol = os.path.join(KOK, "data", ad + ".js")
    js = open(yol, encoding="utf-8").read()
    m = re.search(r"window\.(KRONOLOJI\w*)\s*=", js)
    if not m:
        continue
    for o in denetle.oku_pencere(yol, m.group(1)):
        OL_kuyruk.append({
            "kaynak_tur": "kuyruk", "dosya": ad + ".js",
            "g": denetle.gun_no(o["t"]), "t": o["t"],
            "b": o.get("b") or "", "yer_id": o.get("yer_id") or "",
            "nrm": syt.norm(" ".join([o.get("b") or "", o.get("yer") or "", o.get("d") or ""])),
        })

# birleşik liste: olaylar (no 1..1679) + kuyruk (no 1680+)
_no = len(OL_olay)
ALL = sorted(list(OL_olay) + list(OL_kuyruk), key=lambda x: x["g"])
for i, m in enumerate(ALL):
    m.setdefault("kaynak_tur", "olaylar")
    m.setdefault("dosya", (m.get("_kaynak") or "olaylar*.js"))
    if "no" not in m:
        _no += 1
        m["no"] = _no
for _m in ALL:  # SIKI kipinin başlık testi için (M-4666)
    _m.setdefault("nrm_b", syt.norm(_m.get("b") or ""))
ALL_G = [x["g"] for x in ALL]

def pencere_all(gd):
    a, b = bisect_left(ALL_G, gd - 30), bisect_right(ALL_G, gd + 30)
    return ALL[a:b]

# ── 3. Hassasiyet etiketi ──────────────────────────────────────────────────
def hassasiyet(t):
    if t.endswith("-01-01"):
        return "yil-temsili (YYYY-01-01)"
    if t.endswith("-01"):
        return "ay (YYYY-MM-01)"
    return "gun"

# ── 4. 343 SAHTE tarihin ayrıntısı ─────────────────────────────────────────
sahte_tarihler = [k for k in kayitlar if k["sinif"] == "SAHTE"]

detaylar = []
sinif_sayi = {"KURTARILABILIR": 0, "TOPLU-OLAY": 0, "YIL-TEMSILI": 0, "GERCEK-EKSIK": 0}
gercek_eksik = []

for kay in sahte_tarihler:
    d, gd = kay["tarih"], denetle.gun_no(kay["tarih"])
    ciftler = sorted({(k["eski_sahip"] or "(yok)", k["yeni_sahip"] or "(yok)")
                      for k in kay["kirilmalar"]})
    # kurtarma: kapatan DIŞINDA, penceredeki bir madde yeri ya da bir tarafı anıyor
    eslesmeler = []
    for m in pencere_all(gd):
        if m["no"] == kay["kapatan_madde_no"]:
            continue
        for k in kay["kirilmalar"]:
            ad = k["ad"]
            yer_neden = ""
            if m["yer_id"] == ad:
                yer_mi, yer_neden = True, "yer_id"
            elif _gecer(m["nrm"], Y_KOK[ad]):
                yer_mi, yer_neden = True, "ad:" + Y_KOK[ad]
            elif Y_BOLGE[ad] and _gecer(m["nrm"], Y_BOLGE[ad]):
                yer_mi, yer_neden = True, "bolge:" + Y_BOLGE[ad]
            else:
                yer_mi = False
            eslesen = yer_neden
            taraf_mi = False
            if not yer_mi:
                sahipler = devlet_adlari([s for s in (k["eski_sahip"], k["yeni_sahip"]) if s])
                for sid, (ad_, ay) in sahipler.items():
                    for a in ay:
                        if _gecer(m["nrm"], a):
                            taraf_mi, eslesen = True, "taraf:%s(%s)" % (sid, a)
                            break
                    if taraf_mi:
                        break
            if yer_mi or taraf_mi:
                eslesmeler.append({
                    "madde_no": m["no"], "dosya": m["dosya"], "tur": m["kaynak_tur"],
                    "t": m["t"], "baslik": m["b"], "yerlesim": ad,
                    "test": "yer" if yer_mi else "taraf", "eslesen": eslesen,
                    "fark_gun": abs(m["g"] - gd),
                })
    eslesmeler.sort(key=lambda e: e["fark_gun"])
    kurtarma = eslesmeler[0] if eslesmeler else None

    if kurtarma:
        sinif = "KURTARILABILIR"
    elif kay["yerlesim_sayisi"] >= 20:
        sinif = "TOPLU-OLAY"
    elif d.endswith("-01-01") and kay["kapatan_madde_t"].endswith("-01-01"):
        sinif = "YIL-TEMSILI"
    else:
        sinif = "GERCEK-EKSIK"
    sinif_sayi[sinif] += 1

    satir = {
        "tarih": d, "hassasiyet": hassasiyet(d),
        "yerlesim_sayisi": kay["yerlesim_sayisi"],
        "devlet_ciftleri": ["%s→%s" % c for c in ciftler],
        "kapatan_madde_no": kay["kapatan_madde_no"],
        "kapatan_madde_t": kay["kapatan_madde_t"],
        "kapatan_madde_baslik": kay["kapatan_madde_baslik"],
        "kapatan_hassasiyet": hassasiyet(kay["kapatan_madde_t"]),
        "kurtarma": kurtarma,
        "kurtarma_eslesme_sayisi": len(eslesmeler),
        "sinif": sinif,
        "yerlesimler": [k["ad"] for k in kay["kirilmalar"]],
    }
    detaylar.append(satir)
    if sinif == "GERCEK-EKSIK":
        gercek_eksik.append(satir)

# ── 4b. GLM-4b · SIKI kurtarma kipi (M-4666) ────────────────────────────────
# Dünkü 343 SAHTE kümesi (SNAPSHOT) + BUGÜNKÜ kronoloji evreni (olaylar +
# kuyruk, amerika_0920 dahil). SIKI taraf: (a) taraf madde BAŞLIĞINDA ya da
# (b) İKİ taraf birlikte metinde — adaylar künye adının TÜM anlamlı
# kelimeleri (≥5 harf; ilk kelime ekseni 1762-11-03 Luizyana vakasında
# yetersizdi: başlık 'İspanya'ya' → ispanya+ya sonek toleransı gerekir).
# Ek şart: kurtaran maddenin yer_id yerleşimi kırılma yerleşimine ≤500 km
# YA DA aynı m: bölgesi; ölçülemezse "ölçülemedi" (kurtarma GEÇERLİ SAYILMAZ).
# Kapatan DA aramaya dahildir (AMERIKA-KRONO M-4672'nin 1762-11-03 bulgusu:
# kapatan uygun madde olabilir, ad-ekseni testi göremeyebilir) — kapatan_mi
# işaretiyle ayrı sayılır.
import girdi as _girdi  # noqa: E402  (km)

SNAP_YOL = os.path.join(GLM, "SAHTE-343-SNAPSHOT-0919.json")
snap = json.load(open(SNAP_YOL, encoding="utf-8"))
sn = {x["tarih"]: x for x in snap["detaylar"]}

GENEL_KELIME = {"cumhuriyeti", "cumhuriyet", "sultanligi", "imparatorlugu", "kralligi",
                "krallik", "hanedani", "eyaleti", "dominyonu", "mandasi", "birligi",
                "birlik", "devleti"}
# Türkçe çekim ekleri (kapalı liste): 'İspanya'ya' → ispanya+ya ✓ ·
# 'ispanyol'/'fransız' YAKALANMAZ ('ol'/'ız' listede yok — kasıtlı).
SONEKLER = ("ya", "ye", "yi", "yı", "na", "ne", "nin", "nın", "nun", "ün", "un",
            "ın", "in", "dan", "den", "tan", "ten", "la", "le", "da", "de",
            "ta", "te", "a", "e", "ı", "i")

def _gecer_sonekli(nrm_metin, kelime):
    if _gecer(nrm_metin, kelime):
        return True
    return any(re.search(r"(?<![a-z0-9])" + re.escape(kelime) + re.escape(ek) + r"(?![a-z0-9])",
                         nrm_metin) for ek in SONEKLER)

def sik_adaylar(eski, yeni):
    """{taraf_id: [norm adaylar]} — tam ifade + TÜM anlamlı kelime (≥5, genel hariç)."""
    out = {}
    for sid in (eski, yeni):
        if not sid:
            continue
        n = syt.norm(syt.KUNYE.get(sid) or sid.replace("-", " "))
        out[sid] = ([n] if len(n) >= 5 else []) + \
                   [w for w in n.split() if len(w) >= 5 and w not in GENEL_KELIME]
    return out

KITA_M = [("Avrupa", 50, 15), ("Asya", 55, 90), ("Afrika", 5, 20),
          ("K. Amerika", 45, -100), ("G. Amerika", -15, -60), ("Okyanusya", -25, 140)]

def kita_etiketi(lat, lon):
    """En-yakın-kıta-merkezi — kaba GRUPLAMA etiketi, ölçüm değil."""
    return min(KITA_M, key=lambda k: _girdi.km(lat, lon, k[1], k[2]))[0]

def ek_sart_deger(m, y):
    my = IX.get(m.get("yer_id") or "")
    if my is not None:
        d = _girdi.km(y["lat"], y["lon"], my["lat"], my["lon"])
        if d <= 500:
            return True, "mesafe %d km" % round(d)
        if my.get("m") and y.get("m") and syt.norm(my["m"]) == syt.norm(y["m"]):
            return True, "aynı m: (%s)" % y["m"]
        return False, "mesafe %d km (>500)" % round(d)
    return None, "ölçülemedi (maddenin yer_id'si yerleşim değil)"

siki_detaylar = []
sinif_siki = {"KURTARILABILIR-SIKI": 0, "TOPLU-OLAY": 0, "YIL-TEMSILI": 0, "GERCEK-EKSIK": 0}
sinif_gevsek_bugun = {"KURTARILABILIR": 0, "TOPLU-OLAY": 0, "YIL-TEMSILI": 0, "GERCEK-EKSIK": 0}
dusenler = []
kapatan_uygun = 0            # SIKI kurtarma bulundu + kurtaranlardan biri kapatan olan tarih
siki_kapatan_haric = 0       # SIKI kurtarma bulundu + kapatan DIŞI kurtaranı da olan tarih
olcumlemedi_eslesme = 0      # SIKI eşleşti ama ek şart ölçülemedi
mesafe_red = 0               # SIKI eşleşti ama >500 km ve bölge de tutmadı

for tarih in sorted(sn):
    snx = sn[tarih]
    gd = denetle.gun_no(tarih)
    # yerleşim başına eski/yeni (bugünkü IX pencerelerinden) + sabit aday kümeleri
    ey = {}
    for ad in snx["yerlesimler"]:
        y = IX.get(ad)
        if not y:
            continue
        eski = yeni = ""
        for w in (y.get("s") or []):
            if w.get("t") == tarih:
                eski = w.get("d") or ""
            if w.get("f") == tarih:
                yeni = w.get("d") or ""
        ey[ad] = (y, eski, yeni, devlet_adlari([s for s in (eski, yeni) if s]),
                  sik_adaylar(eski, yeni))
    es_siki, es_gevsek = [], []
    for m in pencere_all(gd):
        kapatan_mi = (m["t"] == snx["kapatan_madde_t"]
                      and m["b"] == snx["kapatan_madde_baslik"])
        for ad, (y, eski, yeni, adaylar_g, adaylar_s) in ey.items():
            yer_mi = (m["yer_id"] == ad or _gecer(m["nrm"], Y_KOK[ad])
                      or (Y_BOLGE[ad] and _gecer(m["nrm"], Y_BOLGE[ad])))
            # gevşek taraf (GLM-4 kuralı): tek taraf, tam metin, soneksiz
            gevsek_taraf = any(_gecer(m["nrm"], a) for _ad, ay in adaylar_g.values()
                               for a in ay)
            # sıkı taraf: (a) bir taraf BAŞLIKTA ya da (b) İKİ taraf birlikte metinde
            baslik_bul = next(((sid, a) for sid, ay in adaylar_s.items()
                               for a in ay if _gecer_sonekli(m["nrm_b"], a)), None)
            metin_bul = {sid: next((a for a in ay if _gecer_sonekli(m["nrm"], a)), None)
                         for sid, ay in adaylar_s.items()}
            iki_taraf = len(adaylar_s) >= 2 and all(metin_bul.values())
            sik_taraf = baslik_bul or iki_taraf
            ortak = {"madde_no": m["no"], "dosya": m["dosya"], "tur": m["kaynak_tur"],
                     "t": m["t"], "baslik": m["b"], "yerlesim": ad,
                     "kapatan_mi": kapatan_mi, "fark_gun": abs(m["g"] - gd)}
            if yer_mi or gevsek_taraf:
                es_gevsek.append(dict(ortak, test="yer" if yer_mi else "gevsek-taraf"))
            if yer_mi or sik_taraf:
                tamam, ek_neden = ek_sart_deger(m, y)
                if tamam:
                    if yer_mi:
                        test, eslesen = "yer", "yer_id/ad/bolge"
                    elif baslik_bul:
                        test = "baslik"
                        eslesen = "taraf-baslik:%s(%s)" % baslik_bul
                    else:
                        test = "iki-taraf"
                        eslesen = "iki-taraf:" + ",".join(
                            "%s(%s)" % (sid, a) for sid, a in metin_bul.items())
                    es_siki.append(dict(ortak, test=test, eslesen=eslesen, ek_sart=ek_neden))
                elif ek_neden.startswith("ölçülemedi"):
                    olcumlemedi_eslesme += 1
                else:
                    mesafe_red += 1
    es_siki.sort(key=lambda e: e["fark_gun"])
    es_gevsek.sort(key=lambda e: e["fark_gun"])
    k_s = es_siki[0] if es_siki else None
    k_g = es_gevsek[0] if es_gevsek else None

    sinif_s = ("KURTARILABILIR-SIKI" if k_s else
               "TOPLU-OLAY" if snx["yerlesim_sayisi"] >= 20 else
               "YIL-TEMSILI" if (tarih.endswith("-01-01")
                                 and snx["kapatan_madde_t"].endswith("-01-01")) else
               "GERCEK-EKSIK")
    sinif_g = ("KURTARILABILIR" if k_g else
               "TOPLU-OLAY" if snx["yerlesim_sayisi"] >= 20 else
               "YIL-TEMSILI" if (tarih.endswith("-01-01")
                                 and snx["kapatan_madde_t"].endswith("-01-01")) else
               "GERCEK-EKSIK")
    sinif_siki[sinif_s] += 1
    sinif_gevsek_bugun[sinif_g] += 1
    if k_s and any(e["kapatan_mi"] for e in es_siki):
        kapatan_uygun += 1
    if k_s and any(not e["kapatan_mi"] for e in es_siki):
        siki_kapatan_haric += 1
    if snx["sinif"] == "KURTARILABILIR" and sinif_s != "KURTARILABILIR-SIKI":
        dusenler.append({"tarih": tarih, "yerlesim_sayisi": snx["yerlesim_sayisi"],
                         "dunku_gevsek_kurtaran": (snx["kurtarma"] or {}).get("baslik")})
    siki_detaylar.append({
        "tarih": tarih, "sinif_siki": sinif_s, "sinif_gevsek_bugun": sinif_g,
        "dunku_sinif": snx["sinif"], "yerlesim_sayisi": snx["yerlesim_sayisi"],
        "devlet_ciftleri": snx["devlet_ciftleri"], "hassasiyet": snx["hassasiyet"],
        "kurtarma_siki": k_s, "kurtarma_gevsek_bugun": k_g,
        "kapatan_uygun_mu": bool(k_s and any(e["kapatan_mi"] for e in es_siki)),
        "yerlesimler": snx["yerlesimler"],
    })

# GERCEK-EKSIK(SIKI) gruplaması: kıta (en-yakın-merkez kaba) · m: bölge · devlet çifti
from collections import Counter
kita_c, bolge_c, cift_c = Counter(), Counter(), Counter()
for x in siki_detaylar:
    if x["sinif_siki"] != "GERCEK-EKSIK":
        continue
    kt = {kita_etiketi(IX[a]["lat"], IX[a]["lon"]) for a in x["yerlesimler"] if a in IX}
    if len(kt) > 1:
        kita_c["karma (" + "+".join(sorted(kt)) + ")"] += 1
    elif kt:
        kita_c[kt.pop()] += 1
    for b in {(IX[a].get("m") or "(yok)") for a in x["yerlesimler"] if a in IX}:
        bolge_c[b] += 1
    for c in x["devlet_ciftleri"]:
        cift_c[c] += 1

# ── 5. Sınav noktaları (bilinen vakalar) ────────────────────────────────────
# Mankup 1349: kapatan #1675 gövdesinde 'Bizans' var ama KAPATAN DIŞI madde
# arandığından kurtarma ancak başka madde bulursa vurur — davranış raporlanır.
_mankup = [x for x in detaylar if x["tarih"].startswith("1349")
           and "Mankup" in x["yerlesimler"]]
SINAV = {
    "mankup_1349_kayit": _mankup[0]["sinif"] if _mankup else "kayıt yok",
    "mankup_1349_kurtarma": (_mankup[0]["kurtarma"] or {}).get("baslik") if _mankup else None,
    "not": "1349-01-01 tarih kaydı GLM-3'te YER-EŞLEŞİR sınıfındaydı (Mora maddesi "
           "aynı pencerede) — o yüzden SAHTE-343 evreninde YOK; kırılma düzeyinde "
           "Mankup SAHTE kalır (glm/2S-YER-TARAMA.json). Kurtarma testi KAPATAN DIŞI "
           "madde arar; kapatanın gövdesindeki teşhis sözü kurtarma SAYILMAZ.",
}

# ── 5b. SIKI sınav noktaları ─────────────────────────────────────────────────
_sn_sinif = dict(Counter(x["sinif"] for x in snap["detaylar"]))
_v1762 = next((x for x in siki_detaylar if x["tarih"] == "1762-11-03"), None)
SIKI_SINAV = {
    "snapshot_sahte_tarih": len(sn),
    "snapshot_343_beklenti": len(sn) == 343,
    "snapshot_sinif_dagilimi": _sn_sinif,
    "vaka_1762_11_03": {
        "sinif_siki": _v1762["sinif_siki"] if _v1762 else "kayıt yok",
        "kurtarma": (_v1762["kurtarma_siki"] or {}).get("baslik") if _v1762 else None,
        "test": (_v1762["kurtarma_siki"] or {}).get("test") if _v1762 else None,
        "kapatan_mi": (_v1762["kurtarma_siki"] or {}).get("kapatan_mi") if _v1762 else None,
        "ek_sart": (_v1762["kurtarma_siki"] or {}).get("ek_sart") if _v1762 else None,
        "gerekce": "AMERIKA-KRONO M-4672: kapatan #1409 'Fontainebleau — Luizyana "
                   "İspanya'ya bırakıldı' başlığı sonek toleransıyla ('ispanya'+'ya') "
                   "SIKI başlık testini geçmeli; ek şart ölçülemezse kurtarma GEÇERSİZ "
                   "sayılır ve 'ölçülemedi' olarak sayılır (M-4666).",
    },
}

# ── 6. Çıktılar ─────────────────────────────────────────────────────────────
RAPOR = {
    "gorev": "GLM-4 · SAHTE-343",
    "betik": "glm/sahte343.py",
    "taban": "glm/2s_yer_tarama.py (aynı evren — importlib ile çalıştırıldı)",
    "dogrulama": syt.DOGRULAMA,
    "evren_kronoloji": {
        "olaylar_madde": len(OL_olay),
        "kuyruk_dosya": len(bagli),
        "kuyruk_madde": len(OL_kuyruk),
        "kuyruk_bagli_olmayan": [a + ".js" for a in bagli_degil],
        "toplam_madde": len(ALL),
    },
    "tanimlar": {
        "kurtarma": "±30 günde, kapatan DIŞINDA madde; yer testi (yer_id/ad-çekirdek/m: bölgesi) YA DA taraflardan biri künye adıyla tam metinde (norm, kelime-sınırı)",
        "sinif_onceligi": "KURTARILABILIR > TOPLU-OLAY (≥20 yerleşim) > YIL-TEMSILI (kırılma ve kapatan madde ikisi de YYYY-01-01) > GERCEK-EKSIK",
        "hassasiyet": "YYYY-01-01 → yıl-temsilî · YYYY-MM-01 (ay≠01) → ay · ötekiler → gün (dizgi biçimi; §4: gün bilinmiyorsa YYYY-01-01 yazılır)",
        "madde_no": "olaylar*.js maddeleri 1..1679 (GLM-3 ile aynı); kronoloji*.js kuyruk maddeleri 1680'den devam eder",
    },
    "sayilar": {
        "sahte_tarih": len(sahte_tarihler),
        "sinif": sinif_sayi,
    },
    "hassasiyet_dagilimi": {},
    "kapatan_hassasiyet_dagilimi": {},
    "sinav": SINAV,
    "detaylar": detaylar,
    "gercek_eksik": gercek_eksik,
    # ── GLM-4b (M-4666): SIKI kurtarma kipi ──
    "siki": {
        "gorev": "GLM-4b · SIKI kurtarma kipi (M-4666)",
        "kume": "dünkü 343 SAHTE tarihi (SAHTE-343-SNAPSHOT-0919.json) × bugünkü kronoloji evreni (olaylar + bağlı kuyruk, amerika_0920 dahil)",
        "tanimlar": {
            "siki_taraf": "(a) taraf adaylarından biri madde BAŞLIĞINDA ya da (b) İKİ taraf birlikte metinde; aday = künye adı tam ifade + TÜM anlamlı kelimeleri (≥5 harf, GENEL_KELIME hariç); sonek toleransı kapalı çekim-eki listesiyle ('ispanya'+'ya' ✓, 'ispanyol' ✗)",
            "ek_sart": "kurtaran maddenin yer_id yerleşimi ↔ kırılma yerleşimi ≤500 km (girdi.km) YA DA aynı m: bölgesi; ölçülemezse kurtarma GEÇERLİ SAYILMAZ ('ölçülemedi' sayacı)",
            "kapatan": "kapatan madde aramaya DAHİL (M-4672 1762-11-03 vaka gereği); kapatan_mi işaretiyle sayılır — kapatan-hariç kurtarma sayısı ayrıca verildi",
            "sinif_onceligi": "KURTARILABILIR-SIKI > TOPLU-OLAY (≥20 yerleşim) > YIL-TEMSILI > GERCEK-EKSIK (kütle/eşikler GLM-4 ile aynı)",
        },
        "sayilar": {
            "sinif_siki": sinif_siki,
            "sinif_gevsek_bugun": sinif_gevsek_bugun,
            "dunku_111_den_dusen": len(dusenler),
            "kapatan_uygun_kurtarma": kapatan_uygun,
            "kapatan_haric_kurtarma": siki_kapatan_haric,
            "ek_sart_olcumlemedi": olcumlemedi_eslesme,
            "ek_sart_mesafe_red": mesafe_red,
        },
        "dusenler": dusenler,
        "gercek_eksik_gruplari": {
            "kita": dict(kita_c.most_common()),
            "bolge_m": dict(bolge_c.most_common()),
            "devlet_cifti": dict(cift_c.most_common()),
            "not": "kıta = en-yakın-kıta-merkezi KABA etiketi (gruplama; ölçüm değil) · bolge_m = tarih başına özgün m: değeri sayısı · devlet_cifti = tarih × çift",
        },
        "sinav": SIKI_SINAV,
        "detaylar": siki_detaylar,
    },
    "evren_degisimi": {
        "denetle": "commit d6fe3f9 — 2s'e YER/TARAF şartı (BEKLENEN_ACIK_S 13→201)",
        "olaylar": "data/olaylar_amerika_0920.js eklendi",
        "kunye": "12 yeni künye (KUNYE-BORC-0920)",
        "bugun_taban_sahte_tarih": len(sahte_tarihler),
        "bugun_taban_sinif": sinif_sayi,
        "not": "taban bugünkü evrenle yeniden koşar; dünkü teslim sayıları SNAPSHOT dosyalarındadır. SIKI karşılaştırması dünkü 343 KÜMESİ üzerinden yapılır (küme ≠ bugünkü taban kümesi).",
    },
}
from collections import Counter
RAPOR["hassasiyet_dagilimi"] = dict(Counter(x["hassasiyet"] for x in detaylar))
RAPOR["kapatan_hassasiyet_dagilimi"] = dict(Counter(x["kapatan_hassasiyet"] for x in detaylar))

with open(os.path.join(GLM, "SAHTE-343.json"), "w", encoding="utf-8") as f:
    json.dump(RAPOR, f, ensure_ascii=False, indent=1)

L = []
L.append("# GLM-4 · SAHTE-343 — SAHTE tarihlerin ayrıntısı ve kurtarma taraması")
L.append("")
L.append("- Betik: `glm/sahte343.py` (taban: `glm/2s_yer_tarama.py` importlib ile çalıştırıldı — aynı evren)")
L.append("- Evren: olaylar %d madde + kuyruk %d dosya %d madde = %d "
         % (len(OL_olay), len(bagli), len(OL_kuyruk), len(ALL)))
if bagli_degil:
    L.append("- Bağlı OLMAYAN kronoloji dosyası (kurtarma evreninde YOK): %s"
             % ", ".join(a + ".js" for a in bagli_degil))
L.append("")
L.append("## Sınıflar (%d SAHTE tarih)" % len(sahte_tarihler))
L.append("")
L.append("| sınıf | adet |")
L.append("|---|---|")
for s, n in sinif_sayi.items():
    L.append("| %s | %d |" % (s, n))
L.append("")
L.append("- Kırılma hassasiyeti: %s" % json.dumps(RAPOR["hassasiyet_dagilimi"], ensure_ascii=False))
L.append("- Kapatan madde hassasiyeti: %s" % json.dumps(RAPOR["kapatan_hassasiyet_dagilimi"], ensure_ascii=False))
L.append("- Sınav Mankup 1349: sınıf %s · kurtarma %s"
         % (SINAV["mankup_1349_kayit"], SINAV["mankup_1349_kurtarma"] or "(yok)"))
L.append("")
L.append("## GERCEK-EKSIK — tamamı (%d)" % len(gercek_eksik))
L.append("")
L.append("| tarih | hassasiyet | yerleşim | devlet çiftleri | kapatan (no · t · başlık) |")
L.append("|---|---|---|---|---|")
for x in gercek_eksik:
    L.append("| %s | %s | %d | %s | %d · %s · %s |" % (
        x["tarih"], x["hassasiyet"], x["yerlesim_sayisi"],
        "; ".join(x["devlet_ciftleri"])[:90], x["kapatan_madde_no"],
        x["kapatan_madde_t"], x["kapatan_madde_baslik"][:60]))
L.append("")
L.append("## KURTARILABILIR — ilk 50 (tam liste JSON'da)")
L.append("")
L.append("| tarih | yerleşim | kurtaran madde (no · dosya · t · başlık) | test | eşleşen yer |")
L.append("|---|---|---|---|---|")
for x in [d for d in detaylar if d["sinif"] == "KURTARILABILIR"][:50]:
    k = x["kurtarma"]
    L.append("| %s | %d | %d · %s · %s · %s | %s (%s) | %s |" % (
        x["tarih"], x["yerlesim_sayisi"], k["madde_no"], k["dosya"], k["t"],
        k["baslik"][:60], k["test"], k["eslesen"], k["yerlesim"]))
L.append("")

# ── GLM-4b (M-4666): SIKI kip bölümü ──
L.append("---")
L.append("")
L.append("# GLM-4b · SIKI kurtarma kipi (M-4666) — dünkü 343 küme × bugünkü evren")
L.append("")
L.append("- Küme: `SAHTE-343-SNAPSHOT-0919.json` (%d tarih · dünkü dağılım %s)"
         % (len(sn), json.dumps(_sn_sinif, ensure_ascii=False)))
L.append("- SIKI taraf: başlıkta bir taraf YA DA iki taraf birlikte metinde — aday "
         "künye adının TÜM anlamlı kelimeleri (≥5 harf) + Türkçe çekim eki toleransı")
L.append("- Ek şart: kurtaran madde yerleşimi ↔ kırılma yerleşimi ≤500 km ya da aynı "
         "m: bölgesi; ölçülemedi = kurtarma GEÇERSİZ (M-4666)")
L.append("- Kapatan madde aramaya DAHİL (M-4672 · 1762-11-03 Luizyana vakası)")
L.append("- ⚠️ Evren değişti: denetle d6fe3f9 + olaylar_amerika_0920.js + 12 künye; "
         "bugünkü taban SAHTE sayısı **%d** (dün 343)" % len(sahte_tarihler))
L.append("")
L.append("## SIKI sınıflar (343 tarih)")
L.append("")
L.append("| sınıf (SIKI) | adet | | sınıf (gevşek·bugün) | adet |")
L.append("|---|---|---|---|---|")
for (a, b), (c, d_) in zip(sinif_siki.items(), sinif_gevsek_bugun.items()):
    L.append("| %s | %d | | %s | %d |" % (a, b, c, d_))
L.append("")
L.append("- Dünkü 111 KURTARILABILIR'dan SIKI'da **%d**'i düştü." % len(dusenler))
L.append("- Ek şart: ölçülemedi %d · mesafe/bölge red %d" % (olcumlemedi_eslesme, mesafe_red))
L.append("- Kapatan: kurtarma bulunanlardan kapatan-uygun %d · kapatan-hariç kurtarmalı %d"
         % (kapatan_uygun, siki_kapatan_haric))
L.append("- Sınav 1762-11-03: %s · kurtarma %s · test %s · kapatan_mi %s · ek şart %s"
         % (SIKI_SINAV["vaka_1762_11_03"]["sinif_siki"],
            SIKI_SINAV["vaka_1762_11_03"]["kurtarma"] or "(yok)",
            SIKI_SINAV["vaka_1762_11_03"]["test"],
            SIKI_SINAV["vaka_1762_11_03"]["kapatan_mi"],
            SIKI_SINAV["vaka_1762_11_03"]["ek_sart"] or "(—)"))
L.append("")
L.append("## Düşenler — dünkü KURTARILABILIR, bugün SIKI'da kurtarılamayan (%d)" % len(dusenler))
L.append("")
L.append("| tarih | yerleşim | dünkü gevşek kurtaran |")
L.append("|---|---|---|")
for d_ in dusenler:
    L.append("| %s | %d | %s |" % (d_["tarih"], d_["yerlesim_sayisi"],
                                   (d_["dunku_gevsek_kurtaran"] or "")[:70]))
L.append("")
L.append("## GERCEK-EKSIK (SIKI) grupları — kıta (%d tarih)" % sum(kita_c.values()))
L.append("")
L.append("| kıta | tarih sayısı |")
L.append("|---|---|")
for k, n in kita_c.most_common():
    L.append("| %s | %d |" % (k, n))
L.append("")
L.append("### m: bölgesi (tarih × özgün m:)")
L.append("")
L.append("| m: | sayı |")
L.append("|---|---|")
for k, n in bolge_c.most_common(30):
    L.append("| %s | %d |" % (k, n))
L.append("")
L.append("### devlet çifti (tarih × çift) — ilk 40")
L.append("")
L.append("| çift | sayı |")
L.append("|---|---|")
for k, n in cift_c.most_common(40):
    L.append("| %s | %d |" % (k, n))
L.append("")
with open(os.path.join(GLM, "SAHTE-343.md"), "w", encoding="utf-8") as f:
    f.write("\n".join(L) + "\n")

print("sahte tarih:", len(sahte_tarihler))
print("sinif:", sinif_sayi)
print("hassasiyet:", RAPOR["hassasiyet_dagilimi"])
print("kapatan hassasiyet:", RAPOR["kapatan_hassasiyet_dagilimi"])
print("mankup:", SINAV["mankup_1349_kayit"], "| kurtarma:", SINAV["mankup_1349_kurtarma"])
print("kuyruk:", len(bagli), "dosya", len(OL_kuyruk), "madde; bagli olmayan:", bagli_degil)
print("── GLM-4b SIKI ──")
print("snapshot:", len(sn), "tarih (343 beklenir) | dünkü:", _sn_sinif)
print("sinif_siki:", sinif_siki)
print("sinif_gevsek_bugun:", sinif_gevsek_bugun)
print("dusenler:", len(dusenler), "| olcumlemedi:", olcumlemedi_eslesme,
      "| mesafe_red:", mesafe_red, "| kapatan_uygun:", kapatan_uygun,
      "| kapatan_haric:", siki_kapatan_haric)
print("sinav 1762-11-03:", json.dumps(SIKI_SINAV["vaka_1762_11_03"], ensure_ascii=False)[:300])
print("gercek-eksik grup kita:", dict(kita_c.most_common()))
print("bugun taban sahte:", len(sahte_tarihler), "(dün 343)")
print("yazildi: glm/SAHTE-343.json · glm/SAHTE-343.md")
