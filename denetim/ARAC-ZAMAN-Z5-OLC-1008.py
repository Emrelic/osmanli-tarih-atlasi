# -*- coding: utf-8 -*-
"""ZAMAN-Z5 ölçümü — 1923-10-29'da biten yerleşim dönemleri, kovalara.
Yalnız OKUR (yazdığı tek şey denetim/ZAMAN-Z5-1008.json ve --yama ile
denetim/ZAMAN-Z5-1008-yer_yama_1923_1945.js taslağı).
Yerleşim: girdi.yukle() · künye: girdi.oku_devletler() (id VE harita: anahtarı)
· kronoloji 1923-45: node vm ile GERÇEK eval.
    py denetim/ARAC-ZAMAN-Z5-OLC-1008.py [--yama]

KOVA TANIMI (ölçüt nokta düzeyindedir, künye düzeyinde DEĞİL):
  A   s: sahibi 1923-10-29 → 1945-09-02 DE JURE değişmiyor. Savaş işgali
      (`isg:`) s:'yi DEĞİŞTİRMEZ — ayrı katman, ayrı kova (I-aday işareti).
  B   kalıcı egemenlik değişimi (1945-09-02'de geri dönmemiş), bölge tablosunda
      AD ADIYLA ve günü kaynaklı maddeye bağlı.
  T   savaş içinde ilhak/kukla devlet, 1945'te ya da hemen sonra geri dönen —
      s: mi isg: mi KARARI koordinatörün (Z-B: tek taraflı iddia harita gerçeği
      yapılmaz). Karar "isg" olursa bu noktaların s: kısmı A'ya katılır.
  C   sahibin künyesi tam 1923-10-29'da kesik (ardıl künye Z4'te).
  D   sahibin künyesi 1923-45 arasında bitiyor (ardıl + gün Z4'te).
  V   1923-10-29'da açık `isg:`/`v:` (barış zamanı işgal/himaye) — ayrı karar.
  X   anomali (künyesi 1923'ten önce ölmüş, sahibi yanlış görünen nokta …).
"""
import collections, io, json, os, subprocess, sys
sys.stdout.reconfigure(encoding="utf-8", errors="replace")
KOK = os.getcwd()
sys.path.insert(0, os.path.join(KOK, "arac"))
import girdi

UC, UFUK2 = "1923-10-29", "1945-09-02"
YAMA = "--yama" in sys.argv


def pad(t):
    if not t:
        return t
    neg = t.startswith("-")
    g = t[1:] if neg else t
    y, _, r = g.partition("-")
    return ("-" if neg else "") + y.zfill(5) + ("-" + r if r else "")


def node_oku(dosya, degisken):
    js = ("global.window={};const fs=require('fs');"
          f"eval(fs.readFileSync({json.dumps(dosya)},'utf8'));"
          f"process.stdout.write(JSON.stringify(window.{degisken}));")
    return json.loads(subprocess.run(["node", "-e", js], capture_output=True,
                                     text=True, encoding="utf-8", check=True).stdout)


# ───────────────────────────────────────────── geçiş tablosu (AD ADIYLA)
# Her geçiş: (gün, yeni d, dayanak). Dayanak = kaynaklı madde (dosya · t · özet)
# Gün maddeden gelir; madde gün vermiyorsa (YYYY-01-01) `kes` alanı söyler.
KR_DOSYA = "data/kronoloji_cok_1923_1945.js"
DV = "data/devletler.js künye-içi kronoloji"
B_GECIS = {
    # ── Osmanlı ardılı coğrafya ──
    "HATAY": (["Antakya", "İskenderun", "Sincan"], "suriye-lubnan-mandasi",
              [("1938-09-02", "hatay-devleti", f"{DV} hatay-devleti 1938-09-02 (TDV antakya)"),
               ("1939-06-23", "turkiye-cumhuriyeti", f"{DV} hatay-devleti/turkiye-cumhuriyeti 1939-06-23 (TDV antakya)")]),
    "MUSUL": (["Şehrizor", "Halepçe"], "ingiltere",
              [("1926-06-05", "irak-kralligi", f"{KR_DOSYA} 1926-06-05 Ankara Antlaşması (TDV türkiye)")]),
    "HICAZ-TAIF": (["Tâif"], "hicaz",
                   [("1924-09-08", "suud-ucuncu", f"{KR_DOSYA} 1924-09-08 (TDV Abdülazîz b. Suûd)"),
                    ("1932-09-18", "suudi-arabistan", f"{DV} suudi-arabistan 1932-09-18")]),
    "HICAZ-MEKKE": (["Mekke"], "hicaz",
                    [("1924-10-16", "suud-ucuncu", f"{KR_DOSYA} 1924-10-16"),
                     ("1932-09-18", "suudi-arabistan", f"{DV} suudi-arabistan 1932-09-18")]),
    "HICAZ-MEDINE": (["Medine"], "hicaz",
                     [("1925-12-05", "suud-ucuncu", f"{KR_DOSYA} 1925-12-05"),
                      ("1932-09-18", "suudi-arabistan", f"{DV} suudi-arabistan 1932-09-18")]),
    "HICAZ-CIDDE": (["Cidde"], "hicaz",
                    [("1925-12-22", "suud-ucuncu", f"{KR_DOSYA} 1925-12-22 (TDV Abdülazîz b. Suûd)"),
                     ("1932-09-18", "suudi-arabistan", f"{DV} suudi-arabistan 1932-09-18")]),
    # yerin kendi teslim günü bulunamadı ⇒ krallığın sona erdiği gün, BEYANLI çıkarım
    "HICAZ-KALAN": (["Yenbu", "Râbiğ", "Bedir", "Hayber", "el-Ulâ", "Medâin-i Sâlih (el-Hicr)",
                     "el-Vech", "Tebük"], "hicaz",
                    [("1925-12-22", "suud-ucuncu", f"{KR_DOSYA} 1925-12-22 — ÇIKARIM: krallığın sonu; yerin kendi teslim günü bulunamadı"),
                     ("1932-09-18", "suudi-arabistan", f"{DV} suudi-arabistan 1932-09-18")]),
    "SUUD-AD": (None, "suud",   # suud-ucuncu (harita: suud) bütün noktaları
                [("1932-09-18", "suudi-arabistan", f"{DV} suudi-arabistan 1932-09-18 (OH saudi-arabia)")]),
    "CIMMA": (["Cimma (Jiren)"], "cimma",
              [("1933-01-01", "habesistan", f"{KR_DOSYA} 1933-01-01 (gün/ay bilinmiyor; TDV cimma) — kesinlik:yil")]),
    # ── Balkan / Doğu Avrupa ──
    "BESARABYA": (["Akkirman", "Kili", "Bender", "İsmail", "Hotin", "Soroka (Soroca)", "Orhei",
                   "Kahul (Cahul)", "Bolgrad (Bolhrad)", "Çernovitz (Çernivtsi)"], "romanya-kralligi",
                  [("1940-06-28", "sovyet-rusya", f"{KR_DOSYA} 1940-06-28 (USHMM)")]),
    "G-DOBRUCA": (["Silistre", "Hacıoğlupazarcığı (Dobrich)"], "romanya-kralligi",
                  [("1940-01-01", "bulgaristan-kralligi", f"{KR_DOSYA} 1940-01-01 Craiova (gün yok, 'Eylül 1940' USHMM) — kesinlik:yil")]),
    "VIIPURI": (["Viipuri (Vyborg)"], "finlandiya",
                [("1940-03-12", "sovyet-rusya", f"{KR_DOSYA} 1940-03-12 (FRUS 1940 v.I d287)")]),
    "PETSAMO": (["Petsamo (Peçenga)"], "finlandiya",
                [("1944-09-19", "sovyet-rusya", f"{KR_DOSYA} 1944-09-19 (FRUS)")]),
    # ── Amerika ──
    "CHACO": (["Fortín Muñoz (General Díaz)"], "bolivya-cumhuriyeti",
              [("1938-10-10", "paraguay-cumhuriyeti", f"{KR_DOSYA} 1938-10-10 (IBS No. 165)")]),
}
# T — savaş içi, geri dönen. (bölge, ad listesi ya da None=sahibin hepsi, sahip, not)
T_BOLGE = {
    "CEKOSLOVAKYA-1938-45": (None, "cekoslovakya", "Südet 1938-10-01 · G.Slovakya 1938-11-02 · Karpat-Ukrayna 1939 · Protektora/Slovakya 1939-03 — 1945'te geri"),
    "AVUSTURYA-ANSCHLUSS": (None, "avusturya-cumhuriyet", "1938-03-13 Reich · 1945-04-27 II. Cumhuriyet (künye D)"),
    "ARNAVUTLUK-1939": (None, "arnavutluk", "1939-04-07 İtalya · 1943 Alman · 1944-11-29 halk cumhuriyeti (künye D)"),
    "HABESISTAN-1936": (None, "habesistan", "1936-05 İtalyan Doğu Afrikası · 1941 geri"),
    "ING-SOMALI-1940": (["Berbera", "Zeyla", "Bulhar", "Hargeysa", "Burao", "Lasanod", "Erigavo", "Şeyh (Somaliland)",
                         "Odveyne", "Borama", "Buhodle", "Taleh", "Lâs Hore", "Mayd", "Hîs", "Ceel Afveyn"],
                        "ingiltere", "1940-08-19 İtalyan · 1941 (Mart) geri"),
    "YUGOSLAVYA-1941": (None, "yugoslavya", "1941 paylaşım (NDH · İtalyan Dalmaçya · Macar Bačka · Bulgar Makedonya · Alman Sırbistan) — 1944-45 geri"),
    "K-ERDEL-1940": (["Erdel (Kaloşvar)", "Varad (Oradea)", "Szatmár (Satu Mare)"], "romanya-kralligi",
                     "II. Viyana 1940-08-30 (kronolojide MADDE YOK) · 1945-03-09 geri"),
    "ALSAS-1940": (["Strazburg", "Colmar", "Mulhouse"], "fransa-cumhuriyet", "1940 fiilî ilhak · 1944-45 geri"),
    "LUKSEMBURG-1942": (None, "luksemburg", "1942-08-30 ilhak · 1944-45 geri"),
    "MANCURYA-1932": (["Mukden (Şenyang)", "Liaoyang", "Cilin (Jilin)", "Ningguta", "Aigun", "Harbin",
                       "Qiqihar", "Mergen (Nenjiang)", "Sanxing (Yilan)", "Cehol (Chengde)", "Chifeng (Ulanhad)"],
                      "cin-cumhuriyeti", "Mançukuo 1932 (tanınmadı — Lytton 1933-02-24) · Rehe 1933-03-04 · 1945-08 geri"),
    "CINHINDI-TAYLAND-1941": (["Battambang", "Sisophon", "Angkor (Siem Reap)", "Champasak"], "fransiz-cinhindi",
                              "1941-05-09 Tayland · 1946-11 geri (ufkun DIŞINDA)"),
    "MALAYA-TAYLAND-1943": (["Kedah (Alor Setar)", "Kelantan (Kota Bharu)", "Terengganu (Kuala Terengganu)"],
                            "ingiliz-malaya", "1943-08-20 Tayland · 1945-08-16 geri bildirisi"),
    "MEMEL-1939": (["Klaipėda (Memel)"], "litvanya", "1939-03-22 Reich · 1945 geri (künye D)"),
    "TANCA-1940": (["Tanca"], "fas", "1940-06-14 İspanyol askerî işgali · 1945-10 geri (ufkun DIŞINDA)"),
    "DANZIG-1939": (None, "danzig-serbest-sehri", "1939-09/10 Reich (madde 1939-10-26) · 1945 Polonya"),
}
# Künyesi değişen ama polity aynı (C) ya da D — ardıl önerisi, Z4 onayı bekler
C_ARDIL = {
    "tbmm-turkiye": [("1923-10-29", "turkiye-cumhuriyeti", f"{DV} turkiye-cumhuriyeti 1923-10-29 'Cumhuriyet ilan edildi' (TDV türkiye)")],
}
D_ARDIL = {
    "mogolistan": [("1924-11-26", "mogolistan-halk-cumhuriyeti", f"{DV} mogolistan-halk-cumhuriyeti 1924-11-26 (TDV moğolistan)")],
    "kacar": [("1925-12-12", "iran", f"{DV} iran 1925-12-12 (kaynak alanı BOŞ) — ⚠️ kacar t 1925-01-01: 11 aylık BOŞLUK, Z4'e soruldu")],
}
# Künye KARARI gereken (Z4): polity değişiyor ama künye yok ya da tartışmalı
K_KARAR = {
    "BURMA-1937": (lambda r: r["kunye"] == "ingiliz-hindistani" and r["lon"] > 92.2 and not r["ad"].startswith("Sibsâgar"),
                   "1937-04-01 Burma İngiliz Hindistanı'ndan ayrıldı — künye YOK (ingiliz-burma?), kronolojide madde YOK"),
    "FILIPIN-1935": (lambda r: r["kunye"] == "abd" and 4 < r["lat"] < 21 and 116 < r["lon"] < 127,
                     "filipin-commonwealth f 1935-01-01 (gün yok) — Commonwealth ABD egemenliği altında: s: mi v: mi?"),
}
# A ölçütünü geçen ama 1923-45 içinde sahibi değişmiş OLABİLECEK — kaynak bulunamadı
A_SUPHELI = {
    "Ferasan (Farasan)": "İdrisî/Asîr → Suudi (1926-34) olabilir; atlas 1923'te yemen-zeydi diyor — kaynak arandı, bulunamadı",
    "San José de los Nuevos Icaguates": "Ekvador-Peru sınırı, Rio Protokolü 1942 — hangi yakada ÖLÇÜLEMEDİ",
    "San Miguel (Aushiri)": "Ekvador-Peru sınırı, Rio Protokolü 1942 — hangi yakada ÖLÇÜLEMEDİ",
    "San Ignacio de Zamucos": "Chaco Boreal 1938 — hangi yakada ÖLÇÜLEMEDİ",
}
# Anomali — 1923'te sahibi açıkça yanlış görünen nokta (düzeltme Z5'in işi DEĞİL)
X_ANOMALI = {
    "St. John's (Newfoundland)": "s: abd — Newfoundland 1923'te İngiliz dominyonu (künye newfoundland-dominyonu 1855-1934)",
    "Tehuantepec": "s: abd — Meksika toprağı",
}

Y = girdi.yukle(sessiz=True)
KUNYE = girdi.oku_devletler()
K = {d["id"]: d for d in KUNYE if d.get("id")}
H = collections.defaultdict(list)
for d in KUNYE:
    if d.get("harita"):
        H[d["harita"]].append(d)
KR = node_oku(KR_DOSYA, "KRONOLOJI_COK_1923_1945")


def kunye_coz(kid, gun):
    """d: değeri → o gün yaşayan künye (id önce, sonra harita: anahtarı)."""
    if kid in K:
        return K[kid]
    adaylar = [d for d in H.get(kid, [])
               if pad(d.get("f") or "") <= pad(gun) <= pad(d.get("t") or "9999")]
    return adaylar[0] if len(adaylar) == 1 else (adaylar or [None])[0]


def bolge_bul(tablo, y, sahip):
    for ad, kayit in tablo.items():
        adlar, s_ = kayit[0], kayit[1]
        if sahip != s_ and not (sahip in H and any(d["id"] == s_ for d in H[sahip])) \
                and not (s_ in H and sahip in [d["id"] for d in H[s_]]):
            continue
        if adlar is None or y["ad"] in adlar:
            return ad
    return None


I_KUSAK = {  # savaş işgali ADAYI — bilgi, kovayı değiştirmez (sahip → not)
    "fransa-cumhuriyet": "1940-44 Alman/İtalyan", "belcika": "1940-44", "hollanda": "1940-45",
    "norvec": "1940-45", "danimarka": "1940-45", "yunanistan": "1941-44", "hollanda-dogu-hint": "1942-45 Japon",
    "ingiliz-malaya": "1942-45 Japon", "ingiliz-hindistani": "Burma 1942-45 Japon", "cin-cumhuriyeti": "1937-45 Japon",
    "filipin-commonwealth": "1942-45 Japon", "italya": "1943-45 Müttefik/Alman", "sovyet-rusya": "1941-44 Alman (batı)",
    "fransiz-cinhindi": "1940-45 Japon", "avustralya": "Yeni Gine 1942-45 Japon", "meiji-japonya": "1944-45 ABD/SSCB (adalar, G.Sahalin)",
}

kova = collections.defaultdict(list)
for y in Y:
    s = y.get("s") or []
    # ⚠️ s: dizisi TARİH SIRALI DEĞİL (ölçüldü: Erdel'in 1923 dönemi ortada,
    #    son elemanı 1551-1556) ⇒ "son eleman" değil "t'si UC olan dönem".
    uc_donem = [i for i, p in enumerate(s) if p.get("t") == UC]
    if len(uc_donem) > 1:
        kova["X_birden_cok_uc_donem"].append({"ad": y["ad"], "dosya": y["_kaynak"]})
        continue
    s_idx = uc_donem[0] if uc_donem else None
    s_son = s[s_idx] if uc_donem else None
    acik_isg = [p for p in y.get("isg") or [] if p.get("t") == UC]
    acik_v = [p for p in y.get("v") or [] if p.get("t") == UC]
    if not (s_son or acik_isg or acik_v):
        continue
    sahip = s_son["d"] if s_son else None
    kun = kunye_coz(sahip, UC) if sahip else None
    kt = (kun or {}).get("t")
    r = {"ad": y["ad"], "dosya": y["_kaynak"], "sahip": sahip,
         "kunye": (kun or {}).get("id"), "kunye_t": kt,
         "acik_isg": [p.get("d") for p in acik_isg], "acik_v": [p.get("kid") or p.get("k") for p in acik_v],
         "lat": y["lat"], "lon": y["lon"], "s_f": (s_son or {}).get("f"),
         "s_idx": s_idx, "s_n": len(s), "not_dolu": bool(y.get("not"))}
    if acik_isg or acik_v:
        r["V"] = True
    kov, gecis, bolge = None, None, None
    if not s_son:
        kov = "V_yalniz_isg_v"
    elif y["ad"] in X_ANOMALI:
        kov, r["not"] = "X_anomali", X_ANOMALI[y["ad"]]
    elif (b := bolge_bul(B_GECIS, y, sahip)):
        kov, bolge, gecis = "B_kalici", b, B_GECIS[b][2]
    elif (b := bolge_bul(T_BOLGE, y, sahip)):
        kov, bolge = "T_savas_ici_geri_donen", b
        r["not"] = T_BOLGE[b][2]
    elif kun and (kk := next((k for k, (f, _) in K_KARAR.items() if f({**r, "kunye": kun.get("id")})), None)):
        kov, bolge, r["not"] = "K_kunye_karari", kk, K_KARAR[kk][1]
    elif y["ad"] in A_SUPHELI:
        kov, r["not"] = "A_supheli", A_SUPHELI[y["ad"]]
    elif kun is None:
        kov = "X_kunyesiz"
    elif kt is None:
        kov = "X_kunye_t_yok"
    elif pad(kt) < pad(UC):
        kov = "X_kunye_1923_once_bitti"
    elif kt == UC:
        kov = "C_kunye_1923te_kesik"
        gecis = C_ARDIL.get(kun["id"])
    elif pad(kt) < pad(UFUK2):
        kov = "D_kunye_1923_45_arasi_bitti"
        gecis = D_ARDIL.get(sahip) or D_ARDIL.get(kun["id"])
    elif acik_isg or acik_v:
        kov = "V_s_saglam_isg_v_acik"
    else:
        kov = "A_mekanik"
        r["alt"] = ("A1_toprak_maddesi_yok" if not any(
            kun["id"] in (m.get("taraflar") or []) and m.get("tur") in
            {"isgal", "toprak-kazanc", "toprak-kayip", "ilhak", "kurtulus", "bagimsizlik", "son"}
            for m in KR) else "A2_bolge_disi")
    if sahip and kun and kun["id"] in I_KUSAK and kov.startswith("A"):
        r["I_aday"] = I_KUSAK[kun["id"]]
    if bolge:
        r["bolge"] = bolge
    if gecis:
        r["gecis"] = gecis
    r["_s"] = s
    kova[kov].append(r)

cikti = {
    "temel": subprocess.run(["git", "rev-parse", "--short", "HEAD"], capture_output=True, text=True).stdout.strip(),
    "yerlesim": len(Y), "girdi_dosya": len(girdi.GIRDI_DOSYALARI),
    "kova_sayi": {k: len(v) for k, v in sorted(kova.items())},
    "A_alt": dict(collections.Counter(r["alt"] for r in kova["A_mekanik"])),
    "A_I_aday": sum(1 for r in kova["A_mekanik"] if r.get("I_aday")),
    "kova_sahip": {k: collections.Counter(r["kunye"] or r["sahip"] for r in v).most_common()
                   for k, v in sorted(kova.items())},
    "bolge_sayi": dict(collections.Counter(r["bolge"] for v in kova.values() for r in v if r.get("bolge"))),
    "kova": {k: v for k, v in sorted(kova.items())},
}
# bölge tablosunda adı geçip veride BULUNAMAYAN ad (yazım/kova hatası kapısı)
butun_ad = {y["ad"] for y in Y}
eksik = [(b, a) for tab in (B_GECIS, T_BOLGE) for b, kk in tab.items() if kk[0] for a in kk[0] if a not in butun_ad]
yakalanan = {(r.get("bolge"), r["ad"]) for v in kova.values() for r in v}
kovasiz = [(b, a) for tab in (B_GECIS, T_BOLGE) for b, kk in tab.items() if kk[0] for a in kk[0]
           if a in butun_ad and (b, a) not in yakalanan]
cikti["bolge_ad_bulunamadi"] = eksik
cikti["bolge_ad_yakalanmadi"] = kovasiz

# ───────────────────────────────────────────── yama taslağı
A_BEYAN = ("Z5-1008 A: t 1923-10-29→1945-09-02 ÇIKARIM — 1923-45 egemenlik değişimi kaydı yok "
           "(kronoloji_cok_1923_1945 toprak maddeleri + Z5 bölge tablosu); işgal isg: katmanında; "
           "künye ömrü dayanak değil (D207) · denetim/ZAMAN-Z5-1008.md")


def yeni_s(r, gecisler):
    s = [dict(p) for p in r["_s"]]
    i = r["s_idx"]
    if not gecisler:
        # 🔴 Beyan dönemin `kaynak:`ına YAZILMAZ — ölçüldü (kendi ağacımda tam
        #    uygulama + denetle): "kaynaksız s: kaydı" 1912 → 406 düştü, yani
        #    çıkarım beyanı denetimce KAYNAK sayıldı (sahte iyileşme). Beyan
        #    kayıt düzeyinde `not:`ta durur; `kaynaksizlik_olc` onu okumaz.
        s[i]["t"] = UFUK2
        return s
    s[i]["t"] = gecisler[0][0]
    ek = []
    for j, (gun, d, dayanak) in enumerate(gecisler):
        bit = gecisler[j + 1][0] if j + 1 < len(gecisler) else UFUK2
        p = {"f": gun, "t": bit, "d": d, "kaynak": "Z5-1008 — gün: " + dayanak}
        if gun.endswith("-01-01") and "kesinlik:yil" in dayanak:
            p["kesinlik"] = {"f": "yil", "t": "gun"}
        ek.append(p)
    return s[:i + 1] + ek + s[i + 1:]


yama, yama_say, not_dolu = [], collections.Counter(), []
for k in ("A_mekanik", "B_kalici", "C_kunye_1923te_kesik"):
    for r in kova.get(k, []):
        g = r.get("gecis")
        if k != "A_mekanik" and not g:
            continue
        x = {"ad": r["ad"], "s": yeni_s(r, g), "_kova": k, "_bolge": r.get("bolge")}
        if k == "A_mekanik":
            if r.get("not_dolu"):
                not_dolu.append(r["ad"])      # uygulayıcı dolu skaleri EZMEZ ⇒ beyan inmez
            else:
                x["not"] = A_BEYAN
        yama.append(x)
        yama_say[k] += 1
cikti["yama_say"] = dict(yama_say)
cikti["A_not_dolu_beyan_inmez"] = not_dolu
for v in kova.values():
    for r in v:
        r.pop("_s", None)
if YAMA:
    BAS = [
        "// ZAMAN-Z5-1008 — yerleşim dönemlerinin 1923-10-29 → 1945-09-02 uzatılması (ÖNERİ)",
        "// Üretici: denetim/ARAC-ZAMAN-Z5-OLC-1008.py --yama · temel " + cikti["temel"],
        "// Kova A: s: sahibi değişmiyor (ÇIKARIM — kayıt `not:` alanında BEYANLI, dönem kaynak:ına DOKUNULMADI) · B: kalıcı",
        "// egemenlik değişimi, gün kaynaklı maddeden · C: tbmm-turkiye → turkiye-cumhuriyeti.",
        "// Kayıt `s:` dizisinin TAMAMINI taşır (uygulayıcı alanı değiştirir); sıra korunmuştur.",
        "// ⚠️ turkiye-cumhuriyeti · hatay-devleti BOYASIZ (renkler.py) — boya inmeden harita deliği.",
        "window.YER_YAMA_1923_1945 = [",
    ]
    for x in yama:
        BAS.append("// " + x["_kova"] + (" · " + x["_bolge"] if x["_bolge"] else ""))
        BAS.append(json.dumps({k: x[k] for k in ("ad", "s", "not") if k in x}, ensure_ascii=False) + ",")
    BAS.append("];")
    with io.open("denetim/ZAMAN-Z5-1008-yer_yama_1923_1945.js", "w", encoding="utf-8", newline=chr(10)) as f:
        f.write(chr(10).join(BAS) + chr(10))
json.dump(cikti, open("denetim/ZAMAN-Z5-1008.json", "w", encoding="utf-8"), ensure_ascii=False, indent=1)

print("temel", cikti["temel"], "· yerlesim", len(Y), "· dosya", cikti["girdi_dosya"])
for k, n in cikti["kova_sayi"].items():
    print(f"  {k:32s} {n:5d}   {cikti['kova_sahip'][k][:12]}")
print("A alt:", cikti["A_alt"], "· I-aday:", cikti["A_I_aday"])
print("bölge:", cikti["bolge_sayi"])
print("bölge adı veride YOK:", eksik)
print("bölge adı var ama yakalanmadı:", kovasiz)
