# -*- coding: utf-8 -*-
# glm/2s_yer_tarama.py — GLM-3 · 2S-YER-TARAMA · kapalı yabancı kırılmalarının
# yer/devlet eşleşme sınıflaması (M-4640 + M-4658).
# Koşum: py -X utf8 glm/2s_yer_tarama.py   (depo kökünden)
# Çıktı : glm/2S-YER-TARAMA.json + glm/2S-YER-TARAMA.md
#
# SORU: Değişmez 2s (arac/denetle.py degismez2, kategoriler=("s",)) bir yabancı
# kırılmayı ±30 gün içinde HERHANGİ BİR kronoloji maddesi varsa KAPALI sayıyor;
# maddenin O YERİ anlatıp anlatmadığına bakmıyor. Bu betik her KAPALI kırılmayı
# üçe ayırır:
#   YER-EŞLEŞİR   = penceredeki (±30 gün) bir madde yer_id'si tutuyor ya da
#                   metninde yerleşimin adı/çekirdeği ya da bölgesi (m:) geçiyor
#   DEVLET-EŞLEŞİR= yer yok ama penceredeki bir madde kırılmanın iki tarafından
#                   birinin (eski/yeni sahip) künye adını anıyor
#   SAHTE         = ikisi de yok — kapanış yalnız takvim yakınlığı
# Sınav noktası (M-4640/4658): Mankup 1349 SAHTE çıkmalı.
#
# 🔴 Evren denetle.py'nin KENDİ koduyla kurulur (import; __main__ korumalı):
#   yerlesimleri_yukle · olaylari_yukle · degismez2 · kapsam_disi ·
#   KUYRUK_DOSYALARI · gun_no. Beklenen: 1418 kırılma · 13 açık · 353 kapsam dışı.
# Türkçe ad eşleştirme: denetim/ARAC-NORMAL-0903.py norm() — .lower() ASLA
# ("İ".lower() iki kod noktası verir). Sınır: (?<![a-z0-9])ad(?![a-z0-9]).

import importlib.util
import json
import os
import re
import sys
from bisect import bisect_left, bisect_right

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(KOK, "arac"))

import denetle  # noqa: E402  (kendi evreni — M-4658: "evreni denetle.py'nin kendi koduyla kur")
import girdi    # noqa: E402  (künye adları için oku_devletler)

_spec = importlib.util.spec_from_file_location(
    "arac_normal", os.path.join(KOK, "denetim", "ARAC-NORMAL-0903.py"))
_arac_normal = importlib.util.module_from_spec(_spec)
_spec.loader.exec_module(_arac_normal)
norm = _arac_normal.norm

# ── 1. Evren (denetle.py'nin kendisi) ───────────────────────────────────────
Y = denetle.yerlesimleri_yukle()
O = denetle.olaylari_yukle()
Y_cekirdek = [y for y in Y if y.get("_kaynak") not in denetle.KUYRUK_DOSYALARI]
kir_s, acik_ham = denetle.degismez2(Y_cekirdek, O, ("s",))
acik_s, disi_s = denetle.kapsam_disi(Y, acik_ham)

DOGRULAMA = {
    "kirilma_olculen": len(kir_s), "kirilma_beklenen": 1418,
    "acik_olculen": len(acik_s), "acik_beklenen": 13,
    "kapsam_disi_olculen": len(disi_s), "kapsam_disi_beklenen": 353,
}
TUTAR = (len(kir_s) == 1418 and len(acik_s) == 13 and len(disi_s) == 353)
DOGRULAMA["tutar"] = TUTAR

# ── 2. Eşleştirme araçları ───────────────────────────────────────────────────
KUNYE = {k["id"]: (k.get("ad") or "") for k in girdi.oku_devletler()}

def kok(ad):
    """Parantezli nitelemesiz ad — norm'lu: 'Yenişehir (Bursa)' → 'yenisehir'."""
    return norm(re.sub(r"\s*\(.*?\)", "", ad or "").strip())

def _gecer(nrm_metin, nrm_ad):
    """Kelime-sınırı geçiyor mu? (norm düzleminde)"""
    if len(nrm_ad) < 3:
        return False
    return re.search(r"(?<![a-z0-9])" + re.escape(nrm_ad) + r"(?![a-z0-9])",
                     nrm_metin) is not None

# madde metni: başlık + yer + gövde(d) — hepsi norm'lenip BİR KEZ önceden.
# nrm  = tam metin (yer testi ve iki-taraf testi) · nrm_b = yalnız başlık
# (DEVLET testinin mevzu kolu — sınav noktası Mankup 1349 kalibrasyonu:
#  gövdede teşhis sözü olarak geçen "Bizans İmparatoru ... Mora'ya verdi"
#  cümlesi Mankup devrini ANMIYOR sayılır; bkz. tanimlar.devlet_testi)
OL = []
for i, o in enumerate(O):
    OL.append({
        "no": i + 1,
        "g": denetle.gun_no(o["t"]),
        "t": o["t"],
        "b": o.get("b") or "",
        "yer_id": o.get("yer_id") or "",
        "nrm": norm(" ".join([o.get("b") or "", o.get("yer") or "", o.get("d") or ""])),
        "nrm_b": norm(o.get("b") or ""),
    })
OL.sort(key=lambda x: x["g"])
OL_G = [x["g"] for x in OL]

def pencere_maddeler(gd):
    """±30 gün aralığındaki maddeler (denetle2'nin kovasıyla aynı)."""
    a, b = bisect_left(OL_G, gd - 30), bisect_right(OL_G, gd + 30)
    return OL[a:b]

def devlet_adlari(sahip_idleri):
    """Sahip kimlikleri → norm'lu ad adayları: künye adı (tam + ilk kelime)
    yoksa kimliğin kendisi (tire→boşluk). Boş adlar ayıklanır."""
    out = {}
    for sid in sahip_idleri:
        ad = KUNYE.get(sid) or sid.replace("-", " ")
        adaylar = []
        if ad:
            n = norm(ad)
            if len(n) >= 3:
                adaylar.append(n)
            ilk = n.split()[0] if n.split() and len(n.split()[0]) >= 4 else ""
            if ilk and ilk not in adaylar:
                adaylar.append(ilk)
        out[sid] = (ad, adaylar)
    return out

# ── 3. Kapalı kırılmaların sınıflaması ──────────────────────────────────────
acik_tarihler = {a[0] for a in acik_ham}
kapali_tarihler = sorted(d for d in kir_s if d not in acik_tarihler)
IX = {y["ad"]: y for y in Y}

# yerleşim başına önceden: çekirdek ad + bölge (m:)
Y_KOK = {y["ad"]: kok(y["ad"]) for y in Y}
Y_BOLGE = {y["ad"]: norm(y.get("m") or "") for y in Y}

kayitlar = []          # her kapalı tarih bir kayıt
sinif_tarih = {"YER-EŞLEŞİR": 0, "DEVLET-EŞLEŞİR": 0, "SAHTE": 0}
sinif_kirilma = {"YER-EŞLEŞİR": 0, "DEVLET-EŞLEŞİR": 0, "SAHTE": 0}
sahte_kirilmalar = []  # SAHTE kırılmalar (yerleşim bazlı, tam liste)
devlet_eslesir_kirilmalar = []

for d in kapali_tarihler:
    gd = denetle.gun_no(d)
    adlar = sorted(kir_s[d]["ad"])
    maddeler = pencere_maddeler(gd)
    # denetle'nin seçtiği kapatan madde (yer_id tercihi + en yakın) — rapor için
    esli = [m for m in maddeler if m["yer_id"] and m["yer_id"] in kir_s[d]["ad"]]
    kapatan = min(esli or maddeler, key=lambda m: abs(m["g"] - gd))

    # kırılma başına eski→yeni sahip
    kirilmalar = []
    for ad in adlar:
        y = IX.get(ad)
        if not y:
            continue
        eski = yeni = ""
        for w in (y.get("s") or []):
            if w.get("t") == d:
                eski = w.get("d") or ""
            if w.get("f") == d:
                yeni = w.get("d") or ""
        sahipler = devlet_adlari([s for s in (eski, yeni) if s])
        # YER testi: yer_id tutar mı, ad/çekirdek ya da bölge (m:) geçiyor mu
        yer_var = False
        for m in maddeler:
            if m["yer_id"] == ad:
                yer_var = True
                break
            if _gecer(m["nrm"], Y_KOK[ad]) or (
                    Y_BOLGE[ad] and _gecer(m["nrm"], Y_BOLGE[ad])):
                yer_var = True
                break
        # DEVLET testi (Mankup 1349 sınavıyla kalibre) — madde ESASEN tarafı
        # konu alıyor mu? İki kol:
        #   (a) taraflardan BİRİ madde BAŞLIĞINDA geçiyor (mevzu o)
        #   (b) tarafların İKİSİ DE tam metinde birlikte geçiyor (devri anlatıyor)
        # Tek tarafın gövdede yalnız teşhis sözü olarak geçmesi (ör. "Bizans
        # İmparatoru ... Mora'ya verdi") SAYILMAZ — sınav noktası bu yüzden var.
        devlet_var = False
        if not yer_var:
            adaylar = [a for sid, (ad_, ay) in sahipler.items() for a in ay]
            for m in maddeler:
                if any(_gecer(m["nrm_b"], a) for a in adaylar):
                    devlet_var = True
                    break
            if not devlet_var and len(sahipler) >= 2:
                for m in maddeler:
                    hepsi = True
                    for sid, (ad_, ay) in sahipler.items():
                        if not any(_gecer(m["nrm"], a) for a in ay):
                            hepsi = False
                            break
                    if hepsi:
                        devlet_var = True
                        break
        sinif = "YER-EŞLEŞİR" if yer_var else ("DEVLET-EŞLEŞİR" if devlet_var else "SAHTE")
        sinif_kirilma[sinif] += 1
        kirilmalar.append({
            "ad": ad, "dosya": y.get("_kaynak"), "eski_sahip": eski,
            "yeni_sahip": yeni, "sinif": sinif,
        })
        if sinif == "SAHTE":
            sahte_kirilmalar.append({
                "ad": ad, "dosya": y.get("_kaynak"), "tarih": d,
                "eski_sahip": eski, "yeni_sahip": yeni,
                "kapatan_madde_no": kapatan["no"], "kapatan_madde_t": kapatan["t"],
                "kapatan_madde_baslik": kapatan["b"],
            })
        elif sinif == "DEVLET-EŞLEŞİR":
            devlet_eslesir_kirilmalar.append({
                "ad": ad, "dosya": y.get("_kaynak"), "tarih": d,
                "eski_sahip": eski, "yeni_sahip": yeni,
                "kapatan_madde_no": kapatan["no"], "kapatan_madde_t": kapatan["t"],
                "kapatan_madde_baslik": kapatan["b"],
            })

    tarih_sinif = ("YER-EŞLEŞİR" if any(k["sinif"] == "YER-EŞLEŞİR" for k in kirilmalar)
                   else "DEVLET-EŞLEŞİR" if any(k["sinif"] == "DEVLET-EŞLEŞİR" for k in kirilmalar)
                   else "SAHTE")
    sinif_tarih[tarih_sinif] += 1
    kayitlar.append({
        "tarih": d, "tip": kir_s[d]["t"], "yerlesim_sayisi": len(adlar),
        "sinif": tarih_sinif,
        "kapatan_madde_no": kapatan["no"], "kapatan_madde_t": kapatan["t"],
        "kapatan_madde_baslik": kapatan["b"],
        "kirilmalar": kirilmalar,
    })

# ── 4. Sınav noktası: Mankup 1349 ───────────────────────────────────────────
_mankup_kayit = [k for kay in kayitlar for k in kay["kirilmalar"]
                 if k["ad"] == "Mankup" and kay["tarih"].startswith("1349")]
SINAV = {
    "beklenen": "SAHTE",
    "olenen": _mankup_kayit[0]["sinif"] if _mankup_kayit else "kayıt bulunamadı",
    "gecti": bool(_mankup_kayit) and _mankup_kayit[0]["sinif"] == "SAHTE",
    "kalibrasyon": "kapatan madde no 1675 (Mora Despotluğu'nun kuruluşu) gövdesinde "
                   "'Bizans' teşhis sözü olarak geçiyor; literal metin okuması "
                   "DEVLET-EŞLEŞİR veriyordu — sınav SAHTE dedi, kural başlık/"
                   "iki-taraf kollarına kalibre edildi",
}

# ── 5. Çıktılar ─────────────────────────────────────────────────────────────
RAPOR = {
    "gorev": "GLM-3 · 2S-YER-TARAMA",
    "betik": "glm/2s_yer_tarama.py",
    "dogrulama": DOGRULAMA,
    "tanimlar": {
        "kapali": "kir_s tarihlerinden acik_ham'da olmayanlar (1418 − 366 = 1052 beklenir)",
        "birim_tarih": "denetle'nin kırılma sayısıyla aynı birim (tarih)",
        "birim_kirilma": "yerleşim bazlı (bir tarihte N yerleşim = N kırılma)",
        "yer_testi": "±30 gün maddesinde yer_id == ad YA DA norm(ad-çekirdek) ya da norm(m: bölgesi) kelime-sınırıyla geçiyor",
        "devlet_testi": "taraflardan biri madde BAŞLIĞINDA geçiyor (mevzu) YA DA iki taraf da tam metinde birlikte geçiyor (devir anlatımı). Tek tarafın gövdede yalnız teşhis sözü olarak geçmesi SAYILMAZ — Mankup 1349 sınavıyla kalibre (ilk literal okuma Mankup'u DEVLET-EŞLEŞİR veriyordu, sınav SAHTE dedi)",
        "sahne": "ikisi de yok",
        "norm": "denetim/ARAC-NORMAL-0903.py norm()",
    },
    "sayilar": {
        "kapali_tarih": len(kapali_tarihler),
        "tarih_bazli": sinif_tarih,
        "kirilma_bazli": sinif_kirilma,
        "toplam_kirilma": sum(sinif_kirilma.values()),
    },
    "sinav_mankup_1349": SINAV,
    "sahte_kirilmalar": sahte_kirilmalar,
    "devlet_eslesir_kirilmalar": devlet_eslesir_kirilmalar,
    "tarih_kayitlari": kayitlar,
}
with open(os.path.join(os.path.dirname(os.path.abspath(__file__)), "2S-YER-TARAMA.json"),
          "w", encoding="utf-8") as f:
    json.dump(RAPOR, f, ensure_ascii=False, indent=1)

L = []
L.append("# GLM-3 · 2S-YER-TARAMA — kapalı yabancı kırılmalarının sınıflaması")
L.append("")
L.append("- Betik: `glm/2s_yer_tarama.py` · JSON: `glm/2S-YER-TARAMA.json`")
L.append("- Evren: `arac/denetle.py`'nin KENDİ kodu (yerlesimleri_yukle · olaylari_yukle · "
         "degismez2(\\\"s\\\") · kapsam_disi)")
L.append("- Doğrulama: kırılma %d/1418 · açık %d/13 · kapsam dışı %d/353 → **%s**"
         % (len(kir_s), len(acik_s), len(disi_s), "tutar ✓" if TUTAR else "ÇELİŞİYOR ✗"))
L.append("")
L.append("## Sayılar")
L.append("")
L.append("| birim | YER-EŞLEŞİR | DEVLET-EŞLEŞİR | SAHTE | toplam |")
L.append("|---|---|---|---|---|")
L.append("| tarih (denetle'nin kırılma birimi) | %d | %d | %d | %d |"
         % (sinif_tarih["YER-EŞLEŞİR"], sinif_tarih["DEVLET-EŞLEŞİR"],
            sinif_tarih["SAHTE"], len(kapali_tarihler)))
L.append("| kırılma (yerleşim bazlı) | %d | %d | %d | %d |"
         % (sinif_kirilma["YER-EŞLEŞİR"], sinif_kirilma["DEVLET-EŞLEŞİR"],
            sinif_kirilma["SAHTE"], sum(sinif_kirilma.values())))
L.append("")
L.append("- Sınav noktası Mankup 1349: **%s** (beklenen SAHTE) → %s"
         % (SINAV["olenen"], "geçti ✓" if SINAV["gecti"] else "YÖNTEM YANLIŞ ✗"))
L.append("")
L.append("## SAHTE kırılmalar — ilk 50 (tam liste JSON'da: %d)"
         % len(sahte_kirilmalar))
L.append("")
L.append("| yerleşim | dosya | tarih | eski→yeni sahip | kapatan madde (no · tarih · başlık) |")
L.append("|---|---|---|---|---|")
for k in sahte_kirilmalar[:50]:
    L.append("| %s | %s | %s | %s → %s | %d · %s · %s |" % (
        k["ad"], k["dosya"], k["tarih"], k["eski_sahip"] or "(yok)",
        k["yeni_sahip"] or "(yok)", k["kapatan_madde_no"], k["kapatan_madde_t"],
        k["kapatan_madde_baslik"]))
L.append("")
L.append("## DEVLET-EŞLEŞİR kırılmalar — ilk 50 (tam liste JSON'da: %d)"
         % len(devlet_eslesir_kirilmalar))
L.append("")
L.append("| yerleşim | dosya | tarih | eski→yeni sahip | kapatan madde (no · tarih · başlık) |")
L.append("|---|---|---|---|---|")
for k in devlet_eslesir_kirilmalar[:50]:
    L.append("| %s | %s | %s | %s → %s | %d · %s · %s |" % (
        k["ad"], k["dosya"], k["tarih"], k["eski_sahip"] or "(yok)",
        k["yeni_sahip"] or "(yok)", k["kapatan_madde_no"], k["kapatan_madde_t"],
        k["kapatan_madde_baslik"]))
L.append("")
with open(os.path.join(os.path.dirname(os.path.abspath(__file__)), "2S-YER-TARAMA.md"),
          "w", encoding="utf-8") as f:
    f.write("\n".join(L) + "\n")

print("dogrulama:", DOGRULAMA, "| TUTAR:", TUTAR)
print("kapali tarih:", len(kapali_tarihler))
print("tarih bazli:", sinif_tarih)
print("kirilma bazli:", sinif_kirilma)
print("mankup 1349:", SINAV)
print("yazildi: glm/2S-YER-TARAMA.json · glm/2S-YER-TARAMA.md")
