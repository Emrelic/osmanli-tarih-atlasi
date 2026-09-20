# -*- coding: utf-8 -*-
"""ARAC-DENETIM-YER-0920 — 2s yer/taraf şartının ÖNCE/SONRA ölçümü ve İKİ YÖNLÜ SINAVI.

Koşum: py -X utf8 denetim/ARAC-DENETIM-YER-0920.py   (depo kökünden)

NİÇİN AYRI BETİK: `denetle.py` hükmü verir, bu betik hükmün İKİ YÖNÜNÜ sınar —
① sahte kapanışı yakalıyor mu (Mankup 1349 AÇILMALI)
② doğru kapanışı bozuyor mu (yer_id'si tutan gerçek kapanışlar KAPALI KALMALI)
Öngörü ölçümden ÖNCE yazılır (CLAUDE.md §11); beklenenler aşağıda sabittir.
"""
import io
import json
import os
import sys

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8", errors="replace")
KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(KOK, "arac"))
import denetle  # noqa: E402

Y = denetle.yerlesimleri_yukle()
O = denetle.olaylari_yukle()
Y_cek = [y for y in Y if y.get("_kaynak") not in denetle.KUYRUK_DOSYALARI]

# ── ÖNCE (eski ölçüt: yalnız takvim yakınlığı) ─────────────────────────────
kir_eski, acik_eski = denetle.degismez2(Y_cek, O, ("s",))
ici_eski, disi_eski = denetle.kapsam_disi(Y, acik_eski)

# ── SONRA (yer/taraf şartı) ────────────────────────────────────────────────
kir_yeni, acik_yeni = denetle.degismez2(Y_cek, O, ("s",), yer_sarti=True)
ici_yeni, disi_yeni = denetle.kapsam_disi(Y, acik_yeni)
borc_yeni, gercek_yeni = denetle.yil_temsili_ayir(ici_yeni)

# ── SINAV ① — sahte kapanış YAKALANIYOR mu ────────────────────────────────
# Mankup 1349: GLM taraması SAHTE dedi (kapatan madde "Mora Despotluğu'nun
# kuruluşu", gövdesinde "Bizans" yalnız teşhis sözü). Eskiden KAPALI'ydı.
def _mankup_tarihleri(kir):
    return sorted(d for d in kir
                  if d.startswith("1349") and "Mankup" in kir[d]["ad"])


mankup = _mankup_tarihleri(kir_yeni)
acik_eski_t = {a[0] for a in acik_eski}
acik_yeni_t = {a[0] for a in acik_yeni}
SINAV1 = {
    "vaka": "Mankup 1349",
    "tarihler": mankup,
    "once_acik": [d for d in mankup if d in acik_eski_t],
    "sonra_acik": [d for d in mankup if d in acik_yeni_t],
}
SINAV1["gecti"] = bool(mankup) and not SINAV1["once_acik"] and \
    SINAV1["sonra_acik"] == mankup

# ── SINAV ② — doğru kapanış BOZULMUYOR mu ─────────────────────────────────
# Evren: eskiden kapalı olan tarihlerden, kapatan maddesinin `yer_id`si
# kırılmanın yerleşimlerinden biri olanlar — yani TARTIŞMASIZ doğru kapanış.
# Beklenen: hepsi SONRA da kapalı (en az 10 örnek şartı, şartname md. 5).
# ⚠️ BİRİM YERLEŞİMDİR, TARİH DEĞİL — ilk yazımda tarih birimiyle sınadım ve
# 605 örneğin 220'si "bozuldu" çıktı. Ölçüp baktım: 220'sinde de `yer_id`si
# tutan yerleşim KAPALI kalıyordu, tarihi açan BAŞKA (susan) yerleşimlerdi —
# yani sınav kuralın kusurunu değil, KENDİ biriminin kabalığını ölçüyordu.
# Doğru soru: "açıklanmış bir yerleşim SUSUYOR sayıldı mı?"
kapali_eski = [d for d in kir_eski if d not in acik_eski_t]
ol_ix = [{"g": denetle.gun_no(o["t"]), "yer_id": o.get("yer_id") or "",
          "b": o.get("b") or "", "t": o["t"]} for o in O]
dogru_kapanis = []
for d in kapali_eski:
    gd = denetle.gun_no(d)
    adlar = kir_eski[d]["ad"]
    esli = [o for o in ol_ix
            if abs(o["g"] - gd) <= 30 and o["yer_id"] and o["yer_id"] in adlar]
    if esli:
        m = min(esli, key=lambda o: abs(o["g"] - gd))
        eksik = set(kir_yeni.get(d, {}).get("eksik") or [])
        dogru_kapanis.append({
            "tarih": d, "yerlesim": m["yer_id"], "madde": m["b"], "madde_t": m["t"],
            "yerlesim_susuyor_sayildi": m["yer_id"] in eksik,
            "tarih_acildi": d in acik_yeni_t,
            "tarihi_acan_baskalari": sorted(eksik - {m["yer_id"]})[:4],
        })
bozulan = [k for k in dogru_kapanis if k["yerlesim_susuyor_sayildi"]]
tarih_acilan = [k for k in dogru_kapanis if k["tarih_acildi"]]
SINAV2 = {
    "birim": "yerleşim (tarih değil — bkz. betikteki not)",
    "ornek": len(dogru_kapanis),
    "en_az_beklenen": 10,
    "bozulan": len(bozulan),
    "bozulan_ornek": bozulan[:10],
    "tarihi_acilan_ama_kendisi_kapali": len(tarih_acilan),
    "tarihi_acilan_ornek": tarih_acilan[:5],
    "gecti": len(dogru_kapanis) >= 10 and not bozulan,
}

# ── Yeni açılanların kovaları ──────────────────────────────────────────────
yeni_acilan = sorted(acik_yeni_t - acik_eski_t)
RAPOR = {
    "gorev": "DENETIM-YER-0920 · 2s yer/taraf şartı",
    "once": {"kirilma": len(kir_eski), "acik_ham": len(acik_eski),
             "kapsam_ici": len(ici_eski), "kapsam_disi": len(disi_eski)},
    "sonra": {"kirilma": len(kir_yeni), "acik_ham": len(acik_yeni),
              "kapsam_ici": len(ici_yeni), "kapsam_disi": len(disi_yeni),
              "yil_temsili_borc": len(borc_yeni), "gun_hassas_acik": len(gercek_yeni)},
    "yeni_acilan_tarih": len(yeni_acilan),
    "sinav_1_sahte_kapanis": SINAV1,
    "sinav_2_dogru_kapanis": SINAV2,
    "yeni_acilan_ilk_40": [
        {"tarih": a[0], "tip": a[1], "yerlesim": a[2], "en_yakin_madde": a[3],
         "gun": a[4]}
        for a in sorted(acik_yeni, key=lambda x: x[0]) if a[0] in set(yeni_acilan)
    ][:40],
}
yol = os.path.join(KOK, "denetim", "DENETIM-YER-0920.json")
with open(yol, "w", encoding="utf-8") as f:
    json.dump(RAPOR, f, ensure_ascii=False, indent=1)

print("ÖNCE :", RAPOR["once"])
print("SONRA:", RAPOR["sonra"])
print("yeni açılan tarih:", len(yeni_acilan))
print("SINAV ① Mankup 1349:", "GEÇTİ ✓" if SINAV1["gecti"] else "KALDI ✗", SINAV1)
print("SINAV ② doğru kapanış:", "GEÇTİ ✓" if SINAV2["gecti"] else "KALDI ✗",
      {k: SINAV2[k] for k in ("ornek", "bozulan", "gecti")})
print("yazıldı:", yol)
