# -*- coding: utf-8 -*-
"""D1923-CIZGI-0920 — 1923-10-29'da çizgisi OLMAYAN D-sınırı kayıtlarının
BAĞIMSIZ ölçümü ve kümelenmesi.

GLM'nin `glm/d1923.js` betiği node+vm ile ölçtü; bu betik aynı sayıyı
PYTHON ile, dosyaları kendisi ayrıştırarak yeniden üretir. Sayı tutmazsa
ikisinden biri yanlıştır — tutmazsa BİLDİRİLİR.

Çıktı: denetim/D1923-CIZGI-0920.json  (rapor: aynı adla .md)
Koşum:  py denetim/ARAC-D1923-CIZGI-0920.py
"""
import json
import os
import re
import sys
from collections import Counter, defaultdict

sys.stdout.reconfigure(encoding="utf-8")

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
GUN = "1923-10-29"

DOSYALAR = [
    "d_sinirlar.js",
    "d_sinirlar_afrika.js",
    "d_sinirlar_amerika.js",
    "d_sinirlar_asya.js",
    "d_sinirlar_avrupa_bati.js",
    "d_sinirlar_avrupa_orta.js",
    "d_sinirlar_komsu.js",
    "d_sinirlar_okyanusya.js",
    "d_sinirlar_ortadogu.js",
]


def oku(ad):
    """window.X = [ ... ]; gövdesini JSON olarak ayrıştır.

    Satır başı `//` yorumları atılır; dizi `window.` atamasından sonraki ilk
    `[` ile dosyanın son `]` arasıdır.
    """
    yol = os.path.join(KOK, "data", ad)
    with open(yol, encoding="utf-8") as f:
        ham = f.read()
    m = re.search(r"window\.[A-Z0-9_]+\s*=\s*", ham)
    if not m:
        raise SystemExit(f"{ad}: window ataması bulunamadı")
    govde = ham[m.end():]
    bas = govde.index("[")
    son = govde.rindex("]")
    govde = govde[bas:son + 1]
    # satır başındaki // yorumlarını at (dizi içinde yorum varsa)
    govde = "\n".join(s for s in govde.split("\n")
                      if not s.lstrip().startswith("//"))
    # JS sondaki fazla virgülü hoş görür, JSON görmez: `,` + boşluk + `]`/`}`
    govde = re.sub(r",(\s*[\]}])", r"\1", govde)
    return json.loads(govde)


def aktif(k):
    f = k.get("f")
    t = k.get("t")
    if f and f > GUN:
        return False
    if t and t < GUN:
        return False
    return bool(f)


def hat_var(k):
    h = k.get("hat")
    return isinstance(h, list) and len(h) > 0


# ---- engel sınıflandırması --------------------------------------------------
# Çizgisiz kaydın önündeki engel NEDİR? Kararı belirleyen iki eksen:
#   ① `degisti.deger` — bugünkü NE çizgisi 1923 için vekil OLABİLİR Mİ?
#        False  → olabilir (ama yine de çizilmemiş: başka engel var)
#        True   → OLAMAZ (1923'ten beri değişti) ⇒ tarihî kaynak ŞART
#        None   → ÖLÇÜLMEDİ (BİLİNMİYOR) ⇒ engel araştırma eksikliği, veri yokluğu değil
#   ② hukukî durum — 1923'te ORTADA BİR HAT VAR MIYDI?
#        tartışmalı / antlaşma yok / tanımsız → hat YOKTUR; çizilmemesi BORÇ DEĞİL, BEYAN
HUKUKEN_HAT_YOK = [
    r"TARTIŞMALI", r"tartışmalı", r"antlaşma YOK", r"antlaşma yok",
    r"hat tanımsız", r"Hat tanımsız", r"TANIMSIZ", r"belge yok",
    r"tanımıyordu", r"reddetti", r"tanımaz", r"hat YOK",
]
FIILI = [r"FİİLİ", r"FİİLÎ", r"fiilî", r"statüko", r"fiilen"]
PARCALI = [r"PARÇALI"]
KOORDINATLI = [r"KOORDİNATLI", r"koordinatlı ⇒ çizilebilir"]
HAREKETLI = [r"hareketli", r"talveg", r"banco", r"orta çizgi"]


def _var(desenler, s):
    return any(re.search(d, s) for d in desenler)


def engel(k):
    """(engel_sinifi, borc_mu) — borç = 'çizilebilirdi ama çizilmedi'."""
    s = (k.get("not") or "") + " " + (k.get("kesinlik_not") or "") + " " \
        + ((k.get("degisti") or {}).get("not") or "") + " " \
        + (k.get("sinif_not") or "")
    d = (k.get("degisti") or {}).get("deger", "YOKALAN")

    if _var(KOORDINATLI, s):
        return "E1 · antlaşma metni KOORDİNATLI — hemen çizilebilir", True
    if _var(HUKUKEN_HAT_YOK, s):
        return ("E2 · 1923'te hukuken HAT YOK (tartışmalı/antlaşmasız) — "
                "çizilmemesi BEYAN"), False
    if _var(PARCALI, s):
        return "E3 · PARÇALI — bir kısmı çizilebilir, kalanı tartışmalı", True
    if _var(FIILI, s):
        return ("E4 · FİİLÎ statüko — hat hukukî değil idarî; kaynaktan "
                "tarif var, koordinat yok"), True
    if _var(HAREKETLI, s):
        return ("E5 · HAREKETLİ hat (nehir talveg/banco) — tarihli çizim "
                "gerekir"), True
    if d is None:
        return ("E6 · DEĞİŞTİ Mİ BİLİNMİYOR — tek kaynak okunsa karara "
                "bağlanır (EN UCUZ)"), True
    if d is True:
        return ("E7 · DEĞİŞTİ — bugünkü çizgi vekil OLAMAZ, 1923 hattı "
                "arşivden gerekir"), True
    if d is False:
        return ("E8 · DEĞİŞMEDİ ama çizilmemiş — vekil kullanılabilir, "
                "iş yapılmamış"), True
    return "E0 · sınıflandırılamadı", True


def main():
    kayitlar = []
    dosya_sayim = {}
    for ad in DOSYALAR:
        ks = oku(ad)
        dosya_sayim[ad] = len(ks)
        for k in ks:
            k["_dosya"] = ad
            k["_bolge"] = (ad.replace("d_sinirlar", "").replace(".js", "")
                           .lstrip("_") or "cekirdek")
            kayitlar.append(k)

    akt = [k for k in kayitlar if aktif(k)]
    cizgili = [k for k in akt if hat_var(k)]
    cizgisiz = [k for k in akt if not hat_var(k)]

    olcum = {
        "toplam_kayit": len(kayitlar),
        "dosya_bazinda": dosya_sayim,
        "aktif": len(akt),
        "cizgili": len(cizgili),
        "cizgisiz": len(cizgisiz),
        "nokta": sum(len(k["hat"]) for k in cizgili),
    }
    beklenen = {"aktif": 319, "cizgili": 193, "cizgisiz": 126, "nokta": 17133}
    tutar = {a: olcum[a] == b for a, b in beklenen.items()}

    # --- kümeleme ---
    cift = Counter()
    bolge = Counter()
    yon = Counter()
    degisti_ekseni = Counter()
    borc = Counter()
    kutu_var = 0
    ibs_var = 0
    url_var = 0
    liste = []
    for k in cizgisiz:
        tf = sorted(k.get("taraflar") or [])
        ad = " × ".join(tf)
        y, borclu = engel(k)
        dy = k.get("dayanak") or []
        ibs = any("IBS" in (d.get("ad") or "") or "IBS" in (d.get("kaynak") or "")
                  or "ibs" in (d.get("url") or "") for d in dy)
        url = any(d.get("url") for d in dy)
        dg = (k.get("degisti") or {}).get("deger", "YOKALAN")
        cift[ad] += 1
        bolge[k["_bolge"]] += 1
        yon[y] += 1
        degisti_ekseni[{True: "değişti=EVET", False: "değişti=HAYIR",
                        None: "değişti=BİLİNMİYOR"}.get(dg, "degisti alanı YOK")] += 1
        borc["BORÇ (çizilebilirdi)" if borclu
             else "BEYAN (hat yoktu — borç değil)"] += 1
        if k.get("kutu"):
            kutu_var += 1
        if ibs:
            ibs_var += 1
        if url:
            url_var += 1
        liste.append({
            "id": k.get("id"),
            "taraflar": tf,
            "bolge": k["_bolge"],
            "dosya": k["_dosya"],
            "sinif": k.get("sinif"),
            "sinif_not": k.get("sinif_not"),
            "kategori": k.get("kategori"),
            "engel_sinifi": y,
            "borc_mu": borclu,
            "degisti_deger": dg if dg != "YOKALAN" else "alan yok",
            "degisti_not": ((k.get("degisti") or {}).get("not") or "")[:200],
            "kutu_var": bool(k.get("kutu")),
            "not": (k.get("not") or "")[:400],
            "kesinlik_not": (k.get("kesinlik_not") or "")[:300],
            "dayanak_adet": len(dy),
            "dayanak_ibs": ibs,
            "dayanak_url_var": url,
            "dayanak_adlari": [d.get("ad") for d in dy][:5],
            "uzunluk_km": k.get("uzunluk_km"),
        })

    # --- coğrafî komşuluk kümeleri (elle tanımlı, taraf id'lerinden) ---
    KUME_TANIM = {
        "K1 · Güney Amerika iç sınırları": {
            "arjantin-cumhuriyeti", "bolivya-cumhuriyeti", "brezilya-cumhuriyeti",
            "sili-cumhuriyeti", "paraguay-cumhuriyeti", "uruguay-cumhuriyeti",
            "peru-cumhuriyeti", "ekvador-cumhuriyeti", "kolombiya-cumhuriyeti",
            "venezuela-cumhuriyeti"},
        "K2 · Guyanalar": {"ingiliz-guyanasi", "hollanda-guyanasi",
                           "fransiz-guyanasi"},
        "K3 · Orta Amerika + Karayip": {
            "guatemala", "honduras-cumhuriyeti", "el-salvador-cumhuriyeti",
            "nikaragua-cumhuriyeti", "kosta-rika-cumhuriyeti",
            "panama-cumhuriyeti", "haiti", "dominik-cumhuriyeti"},
        "K4 · Kuzey Amerika": {"abd", "kanada", "meksika",
                               "newfoundland-dominyonu"},
        "K5 · SSCB dış çemberi (Baltık–Polonya–Finlandiya–İran–Moğolistan–Çin)": {
            "sovyet-rusya"},
        "K6 · Orta Avrupa ardıl devletleri (Versay/Trianon)": {
            "almanya", "cekoslovakya", "polonya", "macaristan-naiplik",
            "avusturya-cumhuriyet", "yugoslavya", "romanya-kralligi",
            "danzig-serbest-sehri", "saar-havzasi-mandasi", "litvanya",
            "letonya", "estonya", "bulgaristan-kralligi", "yunanistan",
            "arnavutluk-bagimsiz", "italya"},
        "K7 · Çin çevresi (Çin Cumhuriyeti yakası)": {"cin-cumhuriyeti"},
        "K8 · Hint alt kıtası + Himalaya": {
            "ingiliz-hindistani", "nepal", "tibet-ganden-phodrang",
            "cammu-kesmir", "afganistan", "siyam-chakri", "fransiz-cinhindi"},
        "K9 · Orta Doğu mandaları + Arabistan": {
            "irak-kralligi", "suriye-lubnan-mandasi", "filistin-mandasi",
            "urdun-emirligi", "kuveyt", "suud-ucuncu", "kacar",
            "tbmm-turkiye"},
        "K10 · Batı Avrupa + sömürge adaları": {
            "fransa-cumhuriyet", "hollanda", "belcika", "luksemburg",
            "ispanya", "portekiz", "ingiltere", "hollanda-dogu-hint",
            "sarawak-brooke", "meiji-japonya"},
    }

    def kume(tf):
        # en spesifik önce: K5/K7 tek-taraf kuralları en sona
        sira = ["K2 · Guyanalar", "K3 · Orta Amerika + Karayip",
                "K4 · Kuzey Amerika", "K1 · Güney Amerika iç sınırları",
                "K9 · Orta Doğu mandaları + Arabistan",
                "K8 · Hint alt kıtası + Himalaya",
                "K6 · Orta Avrupa ardıl devletleri (Versay/Trianon)",
                "K10 · Batı Avrupa + sömürge adaları",
                "K5 · SSCB dış çemberi (Baltık–Polonya–Finlandiya–İran–Moğolistan–Çin)",
                "K7 · Çin çevresi (Çin Cumhuriyeti yakası)"]
        for ad in sira:
            uyeler = KUME_TANIM[ad]
            if ad.startswith(("K5", "K7")):
                if set(tf) & uyeler:
                    return ad
            elif set(tf) <= uyeler:
                return ad
        for ad in sira:
            if set(tf) & KUME_TANIM[ad]:
                return ad + " (kısmî)"
        return "K0 · kümesiz"

    kum = Counter()
    kum_engel = defaultdict(Counter)
    kum_borc = defaultdict(Counter)
    for r in liste:
        a = kume(r["taraflar"])
        r["cografi_kume"] = a
        kum[a] += 1
        kum_engel[a][r["engel_sinifi"]] += 1
        kum_borc[a]["borç" if r["borc_mu"] else "beyan"] += 1

    cikti = {
        "gorev": "D1923-CIZGI-0920",
        "gun": GUN,
        "betik": "denetim/ARAC-D1923-CIZGI-0920.py",
        "on_olcum": {"olculen": olcum, "beklenen_GLM": beklenen, "tutar": tutar},
        "cizgisiz_adet": len(cizgisiz),
        "borc_mu_beyan_mi": dict(borc.most_common()),
        "engel_sinifina_gore": dict(yon.most_common()),
        "degisti_eksenine_gore": dict(degisti_ekseni.most_common()),
        "elde_hazir_malzeme": {
            "kutusu_olan": kutu_var,
            "dayanaginda_IBS_olan": ibs_var,
            "dayanaginda_url_olan": url_var,
        },
        "cografi_kumeye_gore": dict(kum.most_common()),
        "cografi_kume_x_engel": {a: dict(c.most_common())
                                 for a, c in kum_engel.items()},
        "cografi_kume_borc_beyan": {a: dict(c) for a, c in kum_borc.items()},
        "bolgeye_gore": dict(bolge.most_common()),
        "taraf_ciftine_gore": dict(cift.most_common()),
        "liste": sorted(liste, key=lambda r: (r["cografi_kume"], r["id"])),
    }
    hedef = os.path.join(KOK, "denetim", "D1923-CIZGI-0920.json")
    with open(hedef, "w", encoding="utf-8") as f:
        json.dump(cikti, f, ensure_ascii=False, indent=1)

    print("ÖN ÖLÇÜM (bağımsız, python):")
    for a in beklenen:
        print(f"  {a:10s} ölçülen={olcum[a]:>6} GLM={beklenen[a]:>6} "
              f"{'✓' if tutar[a] else '🔴 TUTMADI'}")
    print(f"\nÇizgisiz {len(cizgisiz)} — BORÇ mu BEYAN mı:")
    for a, n in borc.most_common():
        print(f"  {n:>3}  {a}")
    print(f"\nÇizgisiz {len(cizgisiz)} — engel sınıfı:")
    for a, n in yon.most_common():
        print(f"  {n:>3}  {a}")
    print(f"\ndegisti ekseni:")
    for a, n in degisti_ekseni.most_common():
        print(f"  {n:>3}  {a}")
    print(f"\nelde hazır: kutu {kutu_var}/126 · dayanakta IBS {ibs_var} · "
          f"dayanakta url {url_var}")
    print(f"\nÇizgisiz {len(cizgisiz)} — coğrafî küme:")
    for a, n in kum.most_common():
        print(f"  {n:>3}  {a}  [{dict(kum_borc[a])}]")
    print(f"\nyazıldı: {hedef}")


if __name__ == "__main__":
    main()
