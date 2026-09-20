# -*- coding: utf-8 -*-
# glm/m_alani_oneri.py — GLM-6 · M-ALANI-ONERI (M-4680 iş 2).
# Koşum: py -X utf8 glm/m_alani_oneri.py   (depo kökünden)
# Çıktı : glm/M-ALANI-ONERI.json + glm/M-ALANI-ONERI.md
#
# SORU: denetle'nin 2s YER/TARAF şartı (commit d6fe3f9) sonrası gün-hassas
# AÇIK `s:` kırılmalarında (tavan 201) her AÇIK yerleşim için: penceredeki
# maddelerden biri olayı TARAF olarak anıyor ama YER olarak anmıyor mu?
# ("kısmen açıklanmış" — M-4680: 91'i öyle). Varsa maddenin yer/başlık
# metninden BÖLGE ADI önerisi: yerleşime `m:` yazılırsa MEVCUT madde
# kırılmayı kendiliğinden kapatır. Öneri simülasyonla DOĞRULANIR:
# denetle'nin kendi `_2s_yeri_aniyor` kolu, aday `m:` ile çağrılır.
#
# 🔴 YALNIZ ÖLÇÜM — veri yazılmaz (uygulama ayrı bir Claude işçisinin).
# Bölge adı UYDURULMAZ: adaylar (1) maddenin `yer` alanı kuyruğundan
# ("Bucaş, Podolya" → Podolya), (2) veride MEVCUT `m:` değerlerinin madde
# metninde kelime-sınırıyla geçişinden ya da (3) kronoloji kuyruk havuzundan
# (tüm maddelerin 'yer, bölge' kuyrukları; aday madde GÖVDESİNDE geçiyorsa
# — ör. Karlofça gövdesinde 'Podolya') gelir; konum uyumu girdi.km ile ölçülür
# (mevcut m:'lilere, olmazsa havuz kullanıcılarına).
#
# Evren: denetle'nin kendi evreni — Y = girdi.yukle(), O = olaylari_yukle()
# (olaylar*.js; kronoloji kuyruğu denetle 2s kapısında OKUNMAZ, burada da yok).

import json
import os
import sys
from bisect import bisect_left, bisect_right
from collections import Counter, defaultdict

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
GLM = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, os.path.join(KOK, "arac"))

import denetle  # noqa: E402
import girdi    # noqa: E402

Y = girdi.yukle(sessiz=True)
O = denetle.olaylari_yukle()
Y_cekirdek = [y for y in Y if y.get("_kaynak") not in denetle.KUYRUK_DOSYALARI]
IX = {y["ad"]: y for y in Y}

# ── 1. denetle'nin 2s hattını BİREBİR yeniden kur (satır 3792-3796) ────────
kir_s, acik_ham = denetle.degismez2(Y_cekirdek, O, ("s",), yer_sarti=True)
acik_kapsam, disi_s = denetle.kapsam_disi(Y, acik_ham)
yil_borc_s, acik_s = denetle.yil_temsili_ayir(acik_kapsam)

DOG = {
    "kirilma_tarih": len(kir_s),
    "acik_gun_hassas": len(acik_s),
    "kapsam_disi": len(disi_s),
    "yil_temsili_borc": len(yil_borc_s),
    "beklenen": {"acik_gun_hassas": denetle.BEKLENEN_ACIK_S,
                 "yil_temsili_borc": denetle.BEKLENEN_2S_YIL_BORC},
    "koordinator_olcumu_M4680": {"acik": 201, "kismen_aciklanmis": 91},
}

# ── 2. madde listesi — degismez2'nin kendi kuruluşu (satır 1369-1377) ──────
ol = []
for i, o in enumerate(O, 1):
    ol.append({
        "no": i, "t": o["t"], "b": o["b"],
        "g": denetle.gun_no(o["t"]),
        "yer": o.get("yer_id") or o.get("yer"),
        "yer_id": o.get("yer_id") or "",
        "yer_alan": o.get("yer") or "",
        "nrm": denetle._2s_norm(" ".join([o.get("b") or "", o.get("yer") or "",
                                          o.get("d") or ""])),
        "nrm_b": denetle._2s_norm(o.get("b") or ""),
    })
ol.sort(key=lambda x: x["g"])
OL_G = [x["g"] for x in ol]

Y_KOK = {y["ad"]: denetle._2s_norm(
    __import__("re").sub(r"\s*\(.*?\)", "", y["ad"] or "").strip()) for y in Y}
Y_BOLGE = {y["ad"]: denetle._2s_norm(y.get("m") or "") for y in Y}
KOK_TERS = {}
for _ad, _v in Y_KOK.items():
    KOK_TERS.setdefault(_v, _ad)

def pencere(gd):
    a, b = bisect_left(OL_G, gd - 30), bisect_right(OL_G, gd + 30)
    return ol[a:b]

# ── 3. bölge sözlüğü + konum ölçümü ────────────────────────────────────────
BOLGE_KULLANIM = Counter((y.get("m") or "").strip()
                         for y in Y if (y.get("m") or "").strip())
BOLGE_NOKTA = defaultdict(list)     # bölge → [(lat, lon)]
for y in Y:
    m = (y.get("m") or "").strip()
    if m:
        BOLGE_NOKTA[m].append((y["lat"], y["lon"]))

def konum_uyum(aday, y):
    """Aday bölgenin mevcut yerleşimleriyle yerleşime uzaklığı (km) — ölçüm."""
    nk = BOLGE_NOKTA.get(aday)
    if not nk:
        return None            # yeni bölge adı — konum ölçülemedi
    return min(girdi.km(y["lat"], y["lon"], la, lo) for la, lo in nk)

# kol 3 havuzu: kronolojinin KENDİ 'yer, bölge' kuyrukları — ör. Bucaş
# maddesinin kuyruğundaki 'Podolya', Karlofça gövdesindeki 'Podolya'
# geçişini öneriye çevirir (m: sözlüğünde olmayan bölge adları için).
KUYRUK_HAVUZ = defaultdict(set)      # kuyruk değeri → kullanan maddelerin ilk dilimleri
for o in O:
    parca = [p.strip() for p in (o.get("yer") or "").split(",") if p.strip()]
    for k in (parca[-1],) if len(parca) >= 2 else ():
        if len(denetle._2s_norm(k)) >= 4:
            KUYRUK_HAVUZ[k].add(parca[0])
    for k in (parca[-2],) if len(parca) >= 3 else ():
        if len(denetle._2s_norm(k)) >= 4:
            KUYRUK_HAVUZ[k].add(parca[0])

def coz_ilk(i):
    """Maddenin yer-alanı ilk dilimi → yerleşim kaydı (ad yazımı ve parantez
    farkları toleranslı: IX doğrudan → parantez-soyulmuş norm → KOK_TERS)."""
    if not i:
        return None
    yy = IX.get(i)
    if yy:
        return yy
    kok = denetle._2s_norm(
        __import__("re").sub(r"\s*\(.*?\)", "", i).strip())
    return IX.get(KOK_TERS.get(kok, ""))

def havuz_km(deger, y):
    """Havuzdaki bölgenin KULLANICI yerlerine (ilk dilimler) uzaklık — ölçüm."""
    ilks = KUYRUK_HAVUZ.get(deger)
    if not ilks:
        return None
    ds = []
    for i in ilks:
        yy = coz_ilk(i)
        if yy:
            ds.append(girdi.km(y["lat"], y["lon"], yy["lat"], yy["lon"]))
    return min(ds) if ds else None

_kol3_cache = {}

def kol3(o):
    """Madde gövdesinde geçen havuz-kuyruk değerleri (madde no'ya göre önbellekli)."""
    if o["no"] not in _kol3_cache:
        parca = [p.strip() for p in o["yer_alan"].split(",") if p.strip()]
        ilk = parca[0] if parca else ""
        _kol3_cache[o["no"]] = [
            (d, i) for d, i in KUYRUK_HAVUZ.items()
            if d != ilk and denetle._2s_gecer(o["nrm"], denetle._2s_norm(d))]
    return _kol3_cache[o["no"]]

UYUM_ESIK_KM = 300.0           # öneri güven eşiği (kural — hüküm değil)

def madde_yer_km(ilk, y):
    """Maddenin kendi yeri (ilk dilim ya da havuz kümesi) → hedef uzaklığı."""
    degerler = sorted(ilk) if isinstance(ilk, (set, frozenset)) else [ilk]
    ds = []
    for i in degerler:
        yy = coz_ilk(i)
        if yy:
            ds.append(girdi.km(y["lat"], y["lon"], yy["lat"], yy["lon"]))
    return min(ds) if ds else None

def adaylar(o):
    """Maddeden bölge adayı: (değer, kaynak, maddenin kendi yeri) — uydurma yok.
    1) yer alanı kuyruğu: 'Bucaş, Podolya' → Podolya (son 2 dilim)
    2) mevcut m: değerleri — madde metninde kelime-sınırıyla geçenler."""
    out = []
    parca = [p.strip() for p in o["yer_alan"].split(",") if p.strip()]
    ilk_dilim = parca[0] if parca else ""
    for kuyruk in ([parca[-1]] if len(parca) >= 2 else []) + \
                  ([parca[-2]] if len(parca) >= 3 else []):
        if len(denetle._2s_norm(kuyruk)) >= 4:
            out.append((kuyruk, "yer alanı kuyruğu", ilk_dilim))
    for bolge in BOLGE_KULLANIM:
        nb = denetle._2s_norm(bolge)
        if nb and len(nb) >= 4 and denetle._2s_gecer(o["nrm"], nb):
            out.append((bolge, "mevcut m: değeri madde metninde (%d yerleşimde)"
                        % BOLGE_KULLANIM[bolge], ilk_dilim))
    # tekilleştir (aynı değer farklı kaynakta geldiyse ilkini tut)
    seen, temiz = set(), []
    for v, k, ilk in out:
        if v not in seen:
            seen.add(v)
            temiz.append((v, k, ilk))
    return temiz

def simule_kapanir(o, aday, ad):
    """denetle'in kendi kolu: aday `m:` yazılsa bu madde yer kolunu geçirir mi?"""
    return denetle._2s_gecer(o["nrm"], denetle._2s_norm(aday))

# ── 4. ana tarama: 201 açığın her yerleşimi ────────────────────────────────
kayitlar = []
ozet_sayac = Counter()

for d, tip, _adlar, _baslik, _fark in acik_s:
    gd = denetle.gun_no(d)
    eksik = kir_s[d].get("eksik") or sorted(kir_s[d]["ad"])
    yakin = pencere(gd)
    for ad in sorted(set(eksik)):
        y = IX.get(ad)
        if not y:
            ozet_sayac["yerlesim_bulunamadi"] += 1
            continue
        ozet_sayac["acik_yerlesim"] += 1
        sahip = kir_s[d]["sahip"].get(ad, {})
        m_simdi = (y.get("m") or "").strip()
        # (b) DAYANAK — penceredeki her maddeye olay-ilgi türü:
        #   1 'ayni-kirilmayi-kapatan': madde bu kırılmanın BAŞKA yerleşimini
        #     denetle kollarından biriyle kapatıyor (kesin aynı olay)
        #   2 'tek-taraf-metinde': taraflardan BİRİ madde metninde (denetle
        #     saymaz — Mankup kalibrasyonu — ama olayı anlattığının işareti)
        #   3 'yalniz-pencere': yalnız takvim yakınlığı (en zayıf işaret)
        # NOT: 'eksik' listesindeki yerleşim için TARAF kolü geçen madde OLAMAZ
        # (geçseydi yerleşim eksik düşmezdi) — 'kısmen açıklanmış' hükmü
        # kırılma düzeyindedir: olayın maddesi VAR, yerleşimi anmıyor.
        diger = sorted(kir_s[d]["ad"] - {ad})
        dayanaklar = []
        for o in yakin:
            tur = "yalniz-pencere"
            for ad2 in diger:
                sah2 = kir_s[d]["sahip"].get(ad2, {})
                if denetle._2s_yeri_aniyor(o, {ad2}, Y_KOK, Y_BOLGE) or \
                        denetle._2s_tarafi_aniyor(o, {ad2: sah2}):
                    tur = "ayni-kirilmayi-kapatan"
                    break
            if tur == "yalniz-pencere":
                if any(sid and any(denetle._2s_gecer(o["nrm"], a)
                                   for a in denetle._2s_taraf_adaylari(sid))
                       for sid in (sahip.get("eski"), sahip.get("yeni")) if sid):
                    tur = "tek-taraf-metinde"
            dayanaklar.append((o, tur))
        guc = {"ayni-kirilmayi-kapatan": 0, "tek-taraf-metinde": 1,
               "yalniz-pencere": 2}
        dayanaklar.sort(key=lambda x: (guc[x[1]], abs(x[0]["g"] - gd)))
        if dayanaklar:
            ozet_sayac["dayanak_" + dayanaklar[0][1]] += 1
        kayit = {
            "yerlesim": ad, "dosya": y.get("_kaynak") or "",
            "kirilma_tarihi": d, "kirilma_tip": tip,
            "eski_yeni": {"eski": sahip.get("eski") or "",
                          "yeni": sahip.get("yeni") or ""},
            "m_simdi": m_simdi,
            "dayanak_turu": dayanaklar[0][1] if dayanaklar else "pencere-bos",
            "pencere_madde_sayisi": len(yakin),
        }
        if not dayanaklar:
            kayit["sonuc"] = "±30 günde madde YOK — yeni madde ister"
            kayit["oneri_m"] = None
            kayit["guven"] = "DUSUK"
            ozet_sayac["pencere_bos_yeni_madde_ister"] += 1
            kayitlar.append(kayit)
            continue
        kayit["dayanak_maddeler"] = [{
            "no": o["no"], "t": o["t"], "baslik": o["b"], "yer_alani": o["yer_alan"],
            "tur": tur,
        } for o, tur in dayanaklar[:5]]
        # (c) bölge adayı çıkar + doğrula + puanla
        en_iyi = None
        tum_adaylar = []
        for o, tur in dayanaklar:
            madde_adaylar = list(adaylar(o))
            gorulen = {a[0] for a in madde_adaylar}
            for deger, ilks in kol3(o):
                if deger not in gorulen:
                    madde_adaylar.append(
                        (deger, "kronoloji kuyruk havuzu — gövde geçişi (%d maddede)"
                         % len(KUYRUK_HAVUZ[deger]), ilks))
            for aday, kaynak, ilk_dilim in madde_adaylar:
                dogru = simule_kapanir(o, aday, ad)
                km = konum_uyum(aday, y)
                hkm = havuz_km(aday, y) if km is None else km
                my_km = madde_yer_km(ilk_dilim, y)
                tum_adaylar.append({
                    "deger": aday, "kaynak": kaynak, "dayanak_no": o["no"],
                    "dayanak_turu": tur,
                    "dogrulama": ("m:\"%s\" yazılsa yer kolu kapanır (simülasyon ✓)"
                                  % aday) if dogru else "doğrulanamadı",
                    "konum_km": km if km is not None else hkm,
                    "madde_yer_km": my_km,
                })
        # tekilleştirilmiş değer sıralaması: doğrulanmış > konum uyumlu > güçlü dayanak
        deger_puan = {}
        for a in tum_adaylar:
            p = deger_puan.setdefault(a["deger"], {"dogru": False, "km": None,
                                                   "my_km": None,
                                                   "kaynak": a["kaynak"],
                                                   "dayanak": 2})
            p["dogru"] = p["dogru"] or a["dogrulama"].startswith("m:")
            p["dayanak"] = min(p["dayanak"], guc[a["dayanak_turu"]])
            for src, hedef in (("konum_km", "km"), ("madde_yer_km", "my_km")):
                if a[src] is not None and (p[hedef] is None or a[src] < p[hedef]):
                    p[hedef] = a[src]
        for deger, p in deger_puan.items():
            if not p["dogru"]:
                continue
            uyum = p["km"] is not None and p["km"] <= UYUM_ESIK_KM
            kuyruk = p["kaynak"].startswith("yer alanı kuyruğu")
            my_yakin = p["my_km"] is None or p["my_km"] <= UYUM_ESIK_KM
            if p["km"] is not None and not uyum:
                guven = "DUSUK"      # konumla çelişiyor — beyan başka bölgeye ait
            elif kuyruk and my_yakin and p["my_km"] is not None:
                # madde açıkça 'yer, bölge' diyor VE kendi yeri hedefe yakın
                # (ölçülmüşse; ölçülemediyse YÜKSEK verilmez — Karlofça vakası:
                #  maddenin 'Sırbistan' kuyruğu Podolya noktasına önerilemez)
                guven = "YUKSEK" if not m_simdi else "ORTA"
            else:
                # çıkarım: gövde/havuz/sözlük geçişi ya da yakınlığı ölçülemedi
                guven = "ORTA"
            siralama = (0 if guven == "YUKSEK" else 1 if guven == "ORTA" else 2,
                        0 if uyum else 1, 0 if kuyruk else 1,
                        p["km"] if p["km"] is not None else 9e9)
            if en_iyi is None or siralama < en_iyi[0]:
                en_iyi = (siralama, deger, guven, p)
        kayit["adaylar"] = tum_adaylar[:24]
        if en_iyi:
            _, deger, guven, p = en_iyi
            kayit["oneri_m"] = deger
            kayit["guven"] = guven
            kayit["oneri_kaynak"] = p["kaynak"]
            kayit["konum_km"] = p["km"]
            kayit["madde_yer_km"] = p["my_km"]
            kayit["not"] = ("m: DOLU — öneri DEĞİŞTİRMEDİR" if m_simdi else
                            "m: BOŞ — öneri YAZMADIR")
            ozet_sayac["oneri_" + guven] += 1
            if guven != "DUSUK":
                ozet_sayac["m_ile_kapanir"] += 1
            else:
                ozet_sayac["oneri_var_ama_uyumsuz"] += 1
        else:
            kayit["oneri_m"] = None
            kayit["guven"] = "DUSUK"
            kayit["sonuc"] = "pencerede madde var ama metinden bölge adı " \
                             "çıkarılamadı (ölçülemedi) — yeni madde ister"
            ozet_sayac["aday_cikarilamadi"] += 1
        kayitlar.append(kayit)

# ── 5. sınav noktaları (M-4680 örnekleri) ───────────────────────────────────
def sinav(ad_kr, yil):
    r = [k for k in kayitlar if ad_kr.lower() in k["yerlesim"].lower()
         and k["kirilma_tarihi"].startswith(str(yil))]
    r = [{"yerlesim": x["yerlesim"], "tarih": x["kirilma_tarihi"],
          "m_simdi": x["m_simdi"], "oneri": x.get("oneri_m"),
          "guven": x.get("guven")} for x in r[:8]]
    return r or ["kayıt yok"]

SINAV = {
    "podolya_ornekleri_1672_1699": {
        "Braslav": sinav("Braslav", 1672) + sinav("Braslav", 1699),
        "Vinnitsa": sinav("Vinnitsa", 1672) + sinav("Vinnitsa", 1699),
        "Kamanice": sinav("Kaman", 1672) + sinav("Kaman", 1699),
    },
    "not": "M-4680: 'Bucaş 1672 / Karlofça 1699 kırılmalarındaki Braslav/Vinnitsa/"
           "Kamanice noktalarında m: HİÇ YOK; m:\"Podolya\" yazılsa mevcut madde "
           "kırılmayı kendiliginden kapatır' — ölçülerek sınandı.",
}

# ── 6. çıktılar ─────────────────────────────────────────────────────────────
benzersiz_yerlesim = {k["yerlesim"] for k in kayitlar}
benzersiz_kapanan = {k["yerlesim"] for k in kayitlar
                     if k.get("guven") in ("YUKSEK", "ORTA")}
RAPOR = {
    "gorev": "GLM-6 · M-ALANI-ONERI (M-4680 iş 2)",
    "betik": "glm/m_alani_oneri.py",
    "evren": "denetle'nin kendi evreni: girdi.yukle() + olaylari_yukle() "
             "(olaylar*.js; kronoloji kuyruğu 2s kapısında okunmaz)",
    "dogrulama": DOG,
    "tanimlar": {
        "kismen_aciklanmis": "±30 gün penceresinde TARAF kolu (_2s_tarafi_aniyor) ✓ "
                             "ama YER kolu (_2s_yeri_aniyor) ✗ madde var",
        "oneri_kaynaklari": "1) maddenin yer alanı kuyruğu ('Bucaş, Podolya' → Podolya) "
                            "2) veride mevcut m: değerlerinin madde metninde kelime-"
                            "sınırıyla geçişi 3) kronoloji kuyruk havuzu: tüm maddelerin "
                            "'yer, bölge' kuyruklarından kurulan havuzda, adayın madde "
                            "metninde geçmesi (ör. Karlofça gövdesinde 'Podolya') — "
                            "uydurma yok; her aday denetle'in _2s_gecer koluyla doğrulanır",
        "dogrulama": "aday m: yazılsa denetle'in kendi _2s_yeri_aniyor kolu o maddeyle "
                     "geçiyor mu (simülasyon; veriye DOKUNULMAZ)",
        "guven": "YUKSEK = madde yer alanı kuyruğu açıkça bölge veriyor VE maddenin "
                 "kendi yeri hedefe ölçülebilir biçimde yakın (≤%.0f km) VE m: boş · "
                 "ORTA = kuyruk beyanı var ama yakınlık ölçülemedi (ör. 'Karlofça' "
                 "yerleşim adı 'Karlovac' yazımıyla duruyor — eşanlam veri işi) ya da "
                 "gövde/havuz/sözlük çıkarımı ya da m: dolu (öneri DEĞİŞTİRME) · "
                 "DUSUK = konumla çelişiyor (beyan başka bölgeye ait olabilir) ya da "
                 "aday yok" % UYUM_ESIK_KM,
        "sinif_notu": "öneri UYGULAMA DEĞİL ÖLÇÜMDÜR — uygulama ayrı Claude işçisinin "
                      "(M-4680); m: DOLU kayıtlarda öneri değiştirmedir, risklidir",
    },
    "ozet": {
        "acik_tarih_gun_hassas": len(acik_s),
        "acik_yerlesim_kaydi": len(kayitlar),
        "benzersiz_yerlesim": len(benzersiz_yerlesim),
        "sayac": dict(ozet_sayac),
        "benzersiz_m_ile_kapanan_yerlesim": len(benzersiz_kapanan),
    },
    "sinav": SINAV,
    "kayitlar": kayitlar,
}
with open(os.path.join(GLM, "M-ALANI-ONERI.json"), "w", encoding="utf-8") as f:
    json.dump(RAPOR, f, ensure_ascii=False, indent=1)

# ── md ──
L = []
L.append("# GLM-6 · M-ALANI-ONERI — 201 açığın `m:` önerisi (yalnız ölçüm)")
L.append("")
L.append("- Betik: `glm/m_alani_oneri.py` · JSON: `glm/M-ALANI-ONERI.json`")
L.append("- Evren: denetle 2s hattı birebir (%d kırılma · %d gün-hassas AÇIK · "
         "%d kapsam dışı · %d yıl-temsili borç)"
         % (DOG["kirilma_tarih"], DOG["acik_gun_hassas"], DOG["kapsam_disi"],
            DOG["yil_temsili_borc"]))
L.append("- Dayanak dağılımı: aynı-kırılmayı-kapatan %d · tek-taraf-metinde %d · "
         "yalnız-pencere %d · pencere-boş %d"
         % (ozet_sayac.get("dayanak_ayni-kirilmayi-kapatan", 0),
            ozet_sayac.get("dayanak_tek-taraf-metinde", 0),
            ozet_sayac.get("dayanak_yalniz-pencere", 0),
            ozet_sayac.get("pencere_bos_yeni_madde_ister", 0)))
L.append("- Öneri: YÜKSEK %d · ORTA %d · DUSUK %d · aday çıkarılamadı %d"
         % (ozet_sayac.get("oneri_YUKSEK", 0), ozet_sayac.get("oneri_ORTA", 0),
            ozet_sayac.get("oneri_DUSUK", 0), ozet_sayac.get("aday_cikarilamadi", 0)))
L.append("- `m:` ile kapanır (YÜKSEK+ORTA kayıt): %d · benzersiz yerleşim: %d / %d"
         % (ozet_sayac.get("m_ile_kapanir", 0), len(benzersiz_kapanan),
            len(benzersiz_yerlesim)))
L.append("")
L.append("## Sınav — M-4680 Podolya örnekleri")
L.append("")
L.append("```json")
L.append(json.dumps(SINAV["podolya_ornekleri_1672_1699"], ensure_ascii=False, indent=1))
L.append("```")
L.append("")
L.append("## Öneri tablosu — güvenirlik sırasıyla (tam liste JSON'da)")
L.append("")
L.append("| yerleşim | tarih | m: şimdi | öneri m: | güven | konum km | dayanak madde |")
L.append("|---|---|---|---|---|---|---|")
for k in sorted(kayitlar, key=lambda x: ({"YUKSEK": 0, "ORTA": 1, "DUSUK": 2}.get(x.get("guven"), 3),
                                         x["kirilma_tarihi"])):
    if not k.get("oneri_m"):
        continue
    dm = (k.get("dayanak_maddeler") or [{}])[0]
    L.append("| %s | %s | %s | **%s** | %s | %s | #%s · %s |" % (
        k["yerlesim"], k["kirilma_tarihi"], k["m_simdi"] or "(boş)",
        k["oneri_m"], k["guven"],
        ("%d" % k["konum_km"]) if k.get("konum_km") is not None else "ölçülemedi",
        dm.get("no"), (dm.get("baslik") or "")[:52]))
L.append("")
L.append("## Kapanamayanlar — yeni madde isteyenler (ilk 60)")
L.append("")
L.append("| yerleşim | tarih | eski→yeni | pencere madde |")
L.append("|---|---|---|---|")
for k in [x for x in kayitlar if not x.get("oneri_m")
          or x.get("guven") == "DUSUK"][:60]:
    L.append("| %s | %s | %s→%s | %d |" % (
        k["yerlesim"], k["kirilma_tarihi"],
        k["eski_yeni"]["eski"] or "(yok)", k["eski_yeni"]["yeni"] or "(yok)",
        k["pencere_madde_sayisi"]))
L.append("")
with open(os.path.join(GLM, "M-ALANI-ONERI.md"), "w", encoding="utf-8") as f:
    f.write("\n".join(L) + "\n")

print("dogrulama:", DOG)
print("ozet:", json.dumps(RAPOR["ozet"], ensure_ascii=False))
print("sinav:", json.dumps(SINAV["podolya_ornekleri_1672_1699"], ensure_ascii=False)[:600])
print("yazildi: glm/M-ALANI-ONERI.json · glm/M-ALANI-ONERI.md")
