# -*- coding: utf-8 -*-
"""M-4949 (2)(d) — YENI KABARTMA OLCUMUNUN IKI YONDE SINAVI.

Yeni denetim iki yonde sinanmadan calisiyor sayilmaz (CLAUDE.md §11):
  SINAV A (YAKALAMALI + KOR NOKTA KANITI): duz zemin olcumunun TEMIZ
     dedigi ama kabartma tonunda esigin ALTINDA kalan bir renk. Olcum onu
     YAKALAMALI, duz zemin olcumu KACIRMALI. A1 gercek bir palet kimligiyle
     (uydurma renk degil), A2 kasten uretilmis bir renkle yapilir.
  SINAV B (YAKALAMAMALI): hem duz zeminden hem iki kabartma tonundan UZAK
     temiz bir renk — yanlis alarm olmamali.
  SINAV C (CIKIS KODU): kabartma ihlali cikis kodunu ETKILEMEMELI.
Cikti: denetim/HARITA-DURUM-0074-KABARTMA-SINAV.json
"""
import sys, os, io, json
KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(KOK, "arac"))
import renk_olc as R

SON = {"esik": R.DE_ALTLIK, "opaklik": R.OPAKLIK["yabanci"],
       "duz_zemin": "#%02x%02x%02x" % tuple(int(c) for c in R.ALTLIK),
       "kabartma_ton": {k: "#%02x%02x%02x" % v for k, v in R.KABARTMA_TON.items()},
       "sinavlar": {}}

taban = R.kabartma_ihlal()
taban_say = {t: len(v) for t, v in taban.items()}
duz_taban = sum(1 for a in R.BOYALAR if R.dE(R.gorunen(a), R.ALT) < R.DE_ALTLIK)
print("TABAN — duz zemin: %d ihlal · kabartma: %s"
      % (duz_taban, " · ".join("%s: %d" % (t, n) for t, n in taban_say.items())))
SON["taban"] = {"duz_zemin_ihlal": duz_taban, "kabartma_ihlal": taban_say}

def olc(hx):
    """Bir hex icin duz zemin ve her kabartma tonuna gore dE + yakalandi mi."""
    a_op = R.OPAKLIK["yabanci"]
    duz = R.dE(R.lab(R.bind(R.h2r(hx))), R.ALT)
    kab = {}
    for t, zemin in R.KABARTMA_TON.items():
        b = tuple(a_op * c + (1 - a_op) * z for c, z in zip(R.h2r(hx), zemin))
        d = R.dE(R.lab(b), R.lab(zemin))
        kab[t] = {"dE": round(d, 2), "yakalandi": d < R.DE_ALTLIK}
    return {"hex": hx, "duz_zemin_dE": round(duz, 2),
            "duz_zemin_yakaladi": duz < R.DE_ALTLIK, "kabartma": kab}

def bas(baslik, r, yakalamali):
    print("\n%s  %s" % (baslik, r["hex"]))
    ok_duz = (not r["duz_zemin_yakaladi"]) if yakalamali else (not r["duz_zemin_yakaladi"])
    print("   duz zemin  dE %6.2f -> %s" % (r["duz_zemin_dE"],
          "YAKALADI" if r["duz_zemin_yakaladi"] else "kacirdi"))
    for t, v in r["kabartma"].items():
        print("   %-26s dE %6.2f -> %s" % (t, v["dE"],
              "YAKALADI" if v["yakalandi"] else "kacirdi"))

# ── SINAV A1: GERCEK palet kimligi — uydurma renk degil.
# imereti #deea90: duz zeminde dE 15,37 (esigi GECIYOR, denetim TEMIZ diyor)
# ama acik kabartmada dE 9,74 (esigin ALTINDA). Kor noktanin canli vakasi.
A1 = olc(R.BOYALAR["imereti"][1]); A1["kimlik"] = "imereti (gercek palet kimligi)"
bas("SINAV A1 (YAKALAMALI · gercek kimlik) imereti", A1, True)
# ── SINAV A2: kasten uretilmis, acik kabartmaya cok yakin renk.
A2 = olc("#e9e6b4"); A2["kimlik"] = "uretilmis"
bas("SINAV A2 (YAKALAMALI · uretilmis)", A2, True)
SON["sinavlar"]["A1_gercek_kimlik"] = A1
SON["sinavlar"]["A2_uretilmis"] = A2

# ── SINAV B: hem duz zeminden hem iki kabartma tonundan UZAK.
B = olc("#101070")
bas("SINAV B (YAKALAMAMALI · temiz renk)", B, False)
SON["sinavlar"]["B_temiz"] = B

# ── SINAV C: cikis kodu. denetle() bes kova donduruyor; kabartma onlarda YOK.
kaynak = io.open(os.path.join(KOK, "arac", "renk_olc.py"), encoding="utf-8").read()
DONUS = "return gorunmez, cakisan, ortusen, hex_cak, yak_i"
temiz_satirlari = [s for s in kaynak.splitlines() if "TEMİZ" in s or s.strip().startswith("else f\"🔴")]
gecti_C = (DONUS in kaynak) and ("_kab" not in DONUS) \
          and all("_kab" not in s for s in temiz_satirlari)
print("\nSINAV C (CIKIS KODU DEGISMEMELI)")
print("   donus kovalari: %s" % DONUS)
print("   TEMIZ/ihlal hukum satirlarinda '_kab': %s" % ("YOK ✓" if gecti_C else "VAR — IHLAL"))

gecti_A1 = any(v["yakalandi"] for v in A1["kabartma"].values())
kor_kanit_A1 = gecti_A1 and not A1["duz_zemin_yakaladi"]
gecti_A2 = any(v["yakalandi"] for v in A2["kabartma"].values())
gecti_B = (not B["duz_zemin_yakaladi"]) and not any(v["yakalandi"] for v in B["kabartma"].values())
hepsi = bool(gecti_A1 and kor_kanit_A1 and gecti_A2 and gecti_B and gecti_C)
SON["hukum"] = {"A1_yakaladi": gecti_A1, "A1_duz_zemin_KACIRDI_kor_nokta_kaniti": kor_kanit_A1,
                "A2_yakaladi": gecti_A2, "B_yanlis_alarm_yok": gecti_B,
                "C_cikis_kodu_degismedi": gecti_C, "HEPSI_GECTI": hepsi}
print("\nHUKUM: A1 %s · KOR NOKTA KANITI %s · A2 %s · B %s · C %s  =>  %s"
      % ("GECTI" if gecti_A1 else "KALDI", "VAR" if kor_kanit_A1 else "YOK",
         "GECTI" if gecti_A2 else "KALDI", "GECTI" if gecti_B else "KALDI",
         "GECTI" if gecti_C else "KALDI", "HEPSI GECTI" if hepsi else "SINAV KALDI"))

# Kor noktanin BUYUKLUGU: duz zemin TEMIZ derken kabartmada ihlalli kimlikler
a_op = R.OPAKLIK["yabanci"]
z = R.KABARTMA_TON["açık kabartma #f2f1c1"]
bosluk = []
for k in R.BOYALAR:
    duz = R.dE(R.gorunen(k), R.ALT)
    b = tuple(a_op * c + (1 - a_op) * zz for c, zz in zip(R.h2r(R.BOYALAR[k][1]), z))
    kab = R.dE(R.lab(b), R.lab(z))
    if duz >= R.DE_ALTLIK and kab < R.DE_ALTLIK:
        bosluk.append({"kimlik": k, "hex": R.BOYALAR[k][1],
                       "duz_dE": round(duz, 2), "kabartma_dE": round(kab, 2)})
bosluk.sort(key=lambda x: x["kabartma_dE"])
SON["kor_nokta_kumesi_acik_ton"] = bosluk
print("\nKOR NOKTA KUMESI (duz zemin TEMIZ · acik kabartmada IHLAL): %d kimlik" % len(bosluk))
for e in bosluk[:5]:
    print("   kab %6.2f · duz %6.2f  %-28s %s"
          % (e["kabartma_dE"], e["duz_dE"], e["kimlik"][:28], e["hex"]))

io.open(os.path.join(KOK, "denetim", "HARITA-DURUM-0074-KABARTMA-SINAV.json"), "w",
        encoding="utf-8").write(json.dumps(SON, ensure_ascii=False, indent=1))
print("yazildi")
