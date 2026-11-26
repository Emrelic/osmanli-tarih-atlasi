# -*- coding: utf-8 -*-
"""KRONO-KAYNAK-DENETLE — ara çıktıları tek JSON'a birleştirir (her ihlal: dosya + t + b + tür + delil)."""
import json, sys, os
S = sys.argv[1]
st = json.load(open(os.path.join(S, "statik2.json"), encoding="utf-8"))
ba = json.load(open(os.path.join(S, "baslik2.json"), encoding="utf-8"))
al = json.load(open(os.path.join(S, "alinti2.json"), encoding="utf-8"))
di = json.load(open(os.path.join(S, "disi.json"), encoding="utf-8"))
ac = json.load(open(os.path.join(S, "acilmamis.json"), encoding="utf-8"))
from collections import Counter
cikti = {
    "sinav_ani": "2026-09-30 ~23:50", "evren_madde": st["evren"],
    "yontem": "node vm (denetim/ARAC-KRONO-KAYNAK-DENETLE-yukle.js) · TDV ham kod, yönlendirme izlenmedi, 1,5 sn aralık",
    "bir_tdv_slug": {"kod": ba["kod"], "benzersiz": ba["benzersiz"], "atif": st["slug"]["atif"],
                     "tdv_atifli_madde": st["slug"]["tdv_atifli_madde"],
                     "baslik_slug_farkli_ama_dogru_madde": ba["baslik_slug_farkli"],
                     "ad_baslik_uyumsuz_arac_artefakti": ba["ad_baslik_uyumsuz"],
                     "not": "302 veren tek 'slug' = 've': 'TDV ve erişilebilir akademik kaynak: bulunamadı' cümlesinden araç çıkarımı, atıf DEĞİL"},
    "iki_alinti_tdv": {"sayim": Counter(x["durum"] for x in al),
                       "birebir_olmayan": [x for x in al if x["durum"] in ("YOK", "KISMI", "YAKIN", "YABANCI_DIL_TDV_DISI_DENETLENMEDI")]},
    "iki_alinti_tdv_disi_orneklem": {"sayim": Counter(x["disi_durum"] for x in di),
                                     "birebir_olmayan": [x for x in di if not x["disi_durum"].startswith("BIREBIR")]},
    "uc_hassasiyet": st["uc_hassasiyet"], "uc_gun_kaynakta_gorunmuyor": st["uc_gun_kaynakta_gorunmuyor"],
    "uc_gun_tdv": st.get("uc_gun_tdv"),
    "uc_ihlal": [{"dosya": "kronoloji_cok_once1281_anadolu.js", "t": "1204-04-13",
                  "b": "Mikail Angelos Arta merkezli Epir Despotluğu'nu kurdu", "tur": "SAHTE_KESINLIK_KOMSU_GUN",
                  "delil": "gun: '1204 (TDV yıl verir) — gün komşudan: İstanbul'un düşüşü 13 Nisan 1204 (alt sınır)'. "
                           "Komşu gün ŞARTI TUTMUYOR (§4): aynı olay değil (İstanbul'un düşüşü ≠ Epir'in kuruluşu), yakın konum değil (İstanbul ↔ Arta). "
                           "Alt sınır olay günü olarak yazılmış (D210). Doğrusu t:'1204-01-01' + gun:'1204 (TDV yıl verir)'."}],
    "dort_kirmizi": st["dort_kirmizi"], "dort_wiki_her_alan": st["dort_wiki_her_alan"],
    "bes_bos_kaynak": st["bes_bos_kaynak"],
    "ek_acilmamis_kaynak_beyani": {"sayi": len(ac), "liste": ac},
}
json.dump(cikti, open(sys.argv[2], "w", encoding="utf-8"), ensure_ascii=False, indent=1, default=str)
print("yazildi", sys.argv[2])
