"""zincir64_uygula.py <bitis> — zincir_hazir.json'daki ilk <bitis> noktayı data/yerlesimler_zincir64.js'e yazar.
Her çalıştırma dosyayı baştan üretir (kümülatif). Mükerrer taraması: scratchpad tara.py (0 şüpheli, 8 Kasım 2026)."""
import json, os, sys
sys.stdout.reconfigure(encoding="utf-8")
BURA = os.path.dirname(os.path.abspath(__file__))
KOK = os.path.dirname(os.path.dirname(BURA))
Z = json.load(open(os.path.join(BURA, "zincir_hazir.json"), encoding="utf-8"))
# Novigrad: d: kırılmaları 1594-01-01 ve 1685-01-01 (yıl-temsilî) ±30 günde madde taşımıyor (Değişmez 2: 166 / 59 gün) → uygulanmadı.
ATLA = set()  # 11 Kasım 2026: Novigrad uygulandı — kronoloji_sinir_avrupa_orta.js'e 1594 (yıl) / 1663 (yıl) / 1685-08-19 (gün, Pálmány 1986) maddeleri yazıldı
NOVIGRAD_1685 = ("Pálmány Béla, A Nógrád megyei Múzeumok Évkönyve XII (1986), s. 35 ve 101: Nógrád vára elfoglalásának pontos napja 1685. augusztus 19.; "
                 "MKL yalnız '1685' demişti, gün Pálmány'dan")
adlar = [a for a in Z if not a.startswith("_") and a not in ATLA]
n = int(sys.argv[1]) if len(sys.argv) > 1 else len(adlar)
BEYANLI_KUNYE = {"Tepedelen", "Drivasto", "Tellülkebîr", "Cezîretülhadrâ (Algeciras)", "Somnât (Sûmenât)", "Misilmeri"}


# Selâ isg 1911-07-19 / 1912-03-30: ±30 gün kronoloji maddesi yok (Değişmez 2i) → uygulanmadı, UYGULANAMAYAN-1108.md
ISG_ATLA = set()  # 9 Kasım 2026: Selâ isg uçlarına kronoloji_sinir_afrika.js'te 1911-07-19 ve 1912-03-30 maddeleri yazıldı
OZEL = {
    "Oskol": [("kesinlik", "yil"), ("kur", "1593-01-01"),
              ("neden", "kur: KURULUŞ DEĞİL, İLK YAZILI TANIK (Nikon Letopisi 1593, YIL) — görünme için ALT SINIR; 1593 öncesi şehir yok (Yabanıl Saha). Kuruluş 1593/1596 tartışmalı, ikinci akademik kaynak bulunamadı (kaynak: alanı).")],
    "Menfûha": [("bos", "devletsiz"),
                ("neden", "1744 öncesi Necid'de merkezî devlet denetimi yoktu; yerleşim VARDI ama hiçbir devletin idaresinde değildi — ABİ MERKEZ Riyad kaydındaki proje kararı aynen devralındı (Riyad bos:devletsiz, CLAUDE.md §3: Sahra ve Rub'ul Hâlî çölleri, 1744 öncesi Necid). 1281-1744 kaynaksız, dönem yazılmadı. BEYANLI YAKLAŞIKLIK.")],
}


# Kara maskesi düzeltmesi (denetle "Ek denetim konum", 8 Kasım 2026): denetimin verdiği koordinat aynen yazılır.
KOORD = {"Nukuʻalofa": (-21.1403, -175.2171), "Somnât (Sûmenât)": (20.8975, 70.4080),
         "Eleusis (Attika)": (38.0430, 23.5385), "Ayastefanos (Yeşilköy)": (40.9621, 28.8220)}


def s(x):
    return json.dumps(x, ensure_ascii=False)


def donem(p):
    if p["alan"] == "s":
        alanlar = [("f", p["f"]), ("t", p["t"]), ("d", p["d"]), ("kaynak", p["kaynak"])]
    elif p["alan"] == "d":
        alanlar = [("f", p["f"]), ("t", p["t"]), ("kaynak", p["kaynak"])]
    elif p["alan"] == "v":
        alanlar = [("f", p["f"]), ("t", p["t"]), ("k", p["k"]), ("kaynak", p["kaynak"])]
    else:  # isg
        alanlar = [("f", p["f"]), ("t", p["t"]), ("d", p["d"]), ("kaynak", p["kaynak"])]
    return "{" + ",".join("%s:%s" % (a, s(v)) for a, v in alanlar) + "}"


out = ["// =====================================================================",
       "// ZİNCİR-64 — UMIT'in hazırladığı 64 yerleşimin tam sahiplik zinciri (YER-1104).",
       "// Kaynak: denetim/YER-1104/zincir_hazir.json (yazıcı zincir_hazir_yaz.py) · uygulayan:",
       "// denetim/YER-1104/zincir64_uygula.py · 8 Kasım 2026 · ZINCIR-64 oturumu.",
       "// Mükerrer taraması: normalleştirilmiş ad + 3 km → 0 şüpheli (hepsi yeni nokta).",
       "// window.YERLESIMLER_ZINCIR64",
       "// =====================================================================",
       "window.YERLESIMLER_ZINCIR64 = ["]
for ad in adlar[:n]:
    k = Z[ad]
    z = k["zincir"]
    z = [p for p in z if not (p["alan"] == "isg" and ad in ISG_ATLA)]
    if ad == "Novigrad":
        z = [dict(p) for p in z]
        for p in z:
            if p["t"] == "1685-01-01":
                p["t"] = "1685-08-19"
                p["kaynak"] += " · t: " + NOVIGRAD_1685
            if p["f"] == "1685-01-01":
                p["f"] = "1685-08-19"
                p["kaynak"] += " · f: " + NOVIGRAD_1685
    kat = {a: [p for p in z if p["alan"] == a] for a in ("s", "d", "v", "isg")}
    kaynak = "Koordinat/zincir: denetim/YER-1104/KASA-YER.md ② + ZINCIR.md (UMIT, 4 Kasım 2026); dönem kaynakları dönemlerin kendi kaynak: alanında."
    if k.get("not"):
        kaynak += " NOT: " + k["not"]
    if ad in BEYANLI_KUNYE:
        kaynak += (" BEYANLI YAKLAŞIKLIK (KÜNYE ARALIĞI): bir dönemin f/t ucu künyenin f/t ucundan günlerce taşıyor; "
                   "dönem ucu kaynağın günüdür, künye ucu hizalanınca düzelir (ZINCIR.md).")
    ust = [("ad", ad), ("tur", "sehir"), ("lat", KOORD.get(ad, (k["lat"], k["lon"]))[0]), ("lon", KOORD.get(ad, (k["lat"], k["lon"]))[1]), ("g", 0), ("k", 0)]
    ust.extend(OZEL.get(ad, []))
    if k.get("kur"):
        ust.append(("kur", k["kur"]))
    if k.get("bit"):
        ust.append(("bit", k["bit"]))
    satir = ["{ " + ", ".join("%s:%s" % (a, s(v)) for a, v in ust) + ","]
    for a in ("s", "d", "v", "isg"):
        if kat[a]:
            satir.append("  %s:[%s]," % (a, ",".join(donem(p) for p in kat[a])))
    satir.append("  kaynak:%s }," % s(kaynak))
    out.extend(satir)
out.append("];")
yol = os.path.join(KOK, "data", "yerlesimler_zincir64.js")
open(yol, "w", encoding="utf-8", newline="\n").write("\n".join(out) + "\n")
print("yazıldı", n, "nokta →", yol)
