# -*- coding: utf-8 -*-
"""ZAMAN-Z5 v2 ÜRETİCİSİ (1009) — ARAC-ZAMAN-Z5-OLC-1008.py'nin TABAN BEYANLI sürümü.
Kova mantığı ve bütün tablolar (B_GECIS · T_BOLGE · D_ARDIL · HS_GRUP …) 1008'le BİREBİR aynı;
fark üç satır: ① her yama kaydı `taban:{s|isg|v: <üretim anındaki değer | null>}` taşır
(SAHIPLIK-BAYAT-TABAN-1009 kapısı onu okur, `--taban` gerekmez) ② başlık TAM taban SHA'sını yazar
③ çıktı yolları 1009.
Yalnız OKUR veriyi; yazdığı: denetim/ZAMAN-Z5-1009.json ve --yama ile data/yer_yama_1923_1945.js
(--yama-yol <yol> ile başka yere). 🔴 TEMİZ bir ağaçta koşturulur: taban = HEAD olmalı,
`data/` kirliyse DURUR (çıkış 2) — kirli ağaçtan okunan taban, beyan edilen SHA'ya ait olmaz.
    py denetim/ARAC-ZAMAN-Z5-URET-1009.py --yama
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
YAMA_YOL = sys.argv[sys.argv.index("--yama-yol") + 1] if "--yama-yol" in sys.argv else "data/yer_yama_1923_1945.js"
TEMEL_TAM = subprocess.run(["git", "rev-parse", "HEAD"], capture_output=True, text=True, check=True).stdout.strip()
_kirli = subprocess.run(["git", "status", "--porcelain", "--", "data/"], capture_output=True, text=True,
                        check=True).stdout.splitlines()
_kirli = [s for s in _kirli if not s[3:].strip().startswith("data/yer_yama_1923_1945.js")]
if _kirli:
    print("🔴 data/ KİRLİ — taban HEAD'e ait olmaz, DURUYORUM:", _kirli[:10])
    sys.exit(2)


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
# D_ARDIL: künye → (ad süzgeci ya da None, [(gün, yeni d, dayanak)]). Zincirler Z4'ten
# (C:tlas-umit\denetim\ZAMAN-Z4-1008-KUNYE.json, 8 Ekim). Süzgeç dışı noktalar D'de kalır.
ODER_NEISSE = {"Breslau (Wrocław)", "Liegnitz (Legnica)", "Oppeln (Opole)", "Glatz (Kłodzko)",
               "Gleiwitz (Gliwice)", "Stettin (Szczecin)", "Elbing (Elbląg)", "Königsberg"}
SOMALI_1927 = {"Obbiya", "Galkayo", "Garove", "Ayl", "Bender Kāsım (Bosaso)", "Alula", "Hafun",
               "Kandala", "İskuşubân", "Bender Beyla", "Dusa Mareb"}
D_ARDIL = {
    "mogolistan": (None, [("1924-11-26", "mogolistan-halk-cumhuriyeti", f"{DV} mogolistan-halk-cumhuriyeti 1924-11-26 (TDV moğolistan)")]),
    "kacar": (None, [("1925-10-31", "iran", f"{KR_DOSYA} 1925-10-31 — Encyclopaedia Iranica 'AḤMAD SHAH QĀJĀR': 'On 31 October 1925, the Majlis approved a bill deposing the Qajars and entrusting the provisional government to Reżā Khan.' (koordinatör hükmü 9 Ekim: 12 Aralık taç giyme, tasarruf devri DEĞİL — denetle.py ZEND→KAÇAR içtihadı). ÖN ŞART: kacar.t = iran.f = 1925-10-31 AYNI commit")]),
    "almanya": (lambda a: a not in ODER_NEISSE, [("1945-06-05", "almanya-muttefik-isgali", f"{DV} almanya-muttefik-isgali 1945-06-05 (AVALON wwii/ger01)")]),
    "somali": (lambda a: a in SOMALI_1927, [("1927-01-01", "italya", f"{KR_DOSYA} 1927-01-01 'İtalya Mâcerteyn ve Obbia (Hobyo) sultanlıklarının topraklarını işgal etti' — gün yok · kesinlik:yil")]),
    "letonya": (None, [("1940-08-06", "sovyet-rusya", f"{DV} sovyet-rusya 1940-08-06 (USHMM 'August 3–6') — ÜST SINIR · TARTIŞMALI: ilhak Batı'ca tanınmadı (Z-B)")]),
    "estonya": (None, [("1940-08-06", "sovyet-rusya", f"{DV} sovyet-rusya 1940-08-06 (USHMM 'August 3–6') — ÜST SINIR · TARTIŞMALI: ilhak Batı'ca tanınmadı (Z-B)")]),
    "litvanya": (None, [("1940-08-06", "sovyet-rusya", f"{DV} sovyet-rusya 1940-08-06 (USHMM 'August 3–6') — ÜST SINIR · TARTIŞMALI: ilhak Batı'ca tanınmadı (Z-B)")]),
    "buhara-halk-cumhuriyeti": (None, [("1924-10-27", "sovyet-rusya", "ÜST SINIR, gün değil: TDV turkmenistan 'Bu çalışmalar 27 Ekim’de tamamlandı' — sınır ayrımının tamamlanması; cumhuriyetin bitiş günü TDV'de yok (Z4). ÖN ŞART: buhara-halk-cumhuriyeti künye t 1924-01-01 → 1924-10-27 AYNI commit'te (§3.4-2)")]),
}
# Künyesi 1923-10-29'da kesik ama polity sürüyor — yalnız t UZATILIR (Z4 künye t önerisiyle)
C_UZAT = {"bhopal": "Z4: bhopal künye t → 1945-09-02 (TDV bopal--devlet: 1949'da Hindistan Birliği'ne katıldı)",
          "surakarta": "Z4: surakarta künye t → 1945-09-02 (BRIT; 1942-45 Japon işgali isg: katmanına)"}
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
        if kun["id"] in C_UZAT:
            r["uzat"] = C_UZAT[kun["id"]]
    elif pad(kt) < pad(UFUK2):
        kov = "D_kunye_1923_45_arasi_bitti"
        da = D_ARDIL.get(kun["id"]) or D_ARDIL.get(sahip)
        if da and (da[0] is None or da[0](y["ad"])):
            gecis = da[1]
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
    r["_isg"], r["_v"] = y.get("isg") or [], y.get("v") or []
    # TABAN BEYANI (SAHIPLIK-BAYAT-TABAN-1009): yamanın üzerine yazacağı alanın ÜRETİM ANINDAKİ
    #   değeri, motorun okuyucusunun (girdi.yukle) gördüğü biçimde. Alan kayıtta yoksa None (JSON null).
    r["_taban"] = {a: json.loads(json.dumps(y.get(a), ensure_ascii=False)) for a in ("s", "isg", "v")}
    if kov.startswith("V") and (kun or {}).get("id") != "misir-kralligi" and sahip != "misir-kralligi":
        kov = "V_himaye_mekanik"     # barış zamanı himayesi (Tunus/Kuveyt/Katar) — künye 1945'i aşıyor
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
# ═════════════════════════════════════════════ HUKUKÎ SONUÇ (HS) — T/D/K kovaları
# Koordinatör kararı (UMIT İRTİBAT, 8-9 Ekim 2026): ölçüt ÜÇ YOLLU ve hukukî sonuca bakar.
#   ① devlet LAĞVEDİLDİ / toprak ilhak edenin hukukuna geçti → s: DEĞİŞİR
#   ② YENİ DEVLET (kukla da olsa) → yeni künye, s: ona geçer (boya gerekir)
#   ③ devlet HUKUKEN DURUYOR, toprak askerî idarede → s: DEĞİŞMEZ, isg: yazılır
# Seçilen kova kaydın not:'una ADIYLA yazılır (bir ÇIKARIM olduğu beyanıyla).
# Gün yoksa o dilim YAZILMAZ (BEKLEYEN) — uydurma yok (D210).
AV = "AVALON"; US = "USHMM"; BR = "BRIT"
HS_GRUP = [
    # (ad, adlar | None=sahibin bütün noktaları, sahip, hukuk, s_gecis | None=yalnız uzat | "BEKLE", isg_ekle, gerekçe)
    ("AVUSTURYA", None, "avusturya-cumhuriyet", "①",
     [("1938-03-13", "almanya", f"{DV} avusturya-cumhuriyet/almanya 1938-03-13 Anschluss ({AV} imt/judaus)"),
      ("1945-04-01", "avusturya-ikinci-cumhuriyet", f"{DV} avusturya-ikinci-cumhuriyet 1945-04-01 — AY hassasiyeti ({BR} Karl-Renner 'April 1945') · kesinlik:ay")],
     [], "devlet Reich'a katıldı (lağvedildi)"),
    ("ARNAVUTLUK", None, "arnavutluk-bagimsiz", "①",
     [("1939-04-07", "italya", "künye arnavutluk-bagimsiz t 1939-04-07 (USHMM 'annexes', Z4) · kronoloji_cok 1939-04-06 işgal"),
      ("1944-11-29", "arnavutluk-halk-cumhuriyeti", f"{DV} arnavutluk-halk-cumhuriyeti f 1944-11-29 (TDV arnavutluk)")],
     [], "İtalya tacına katıldı; 1943 Alman işgali isg: — GÜN BULUNAMADI, yazılmadı"),
    ("HABESISTAN", None, "habesistan", "①",
     [("1936-05-09", "italya", f"{DV} habesistan 1936-05-09 ({BR} Italian-East-Africa 'annexed by Italy on May 9, 1936')"),
      ("1941-05-05", "habesistan", f"{DV} habesistan 1941-05-05 (TDV etiyopya: '5 Mayıs'ta tekrar tahtına oturdu')")],
     [], "İtalya ilhak etti; Gondar çevresi 1941-11'e dek İtalyan elinde (isg: işi, yazılmadı)"),
    ("CIMMA", ["Cimma (Jiren)"], "cimma", "①",
     [("1933-01-01", "habesistan", f"{KR_DOSYA} 1933-01-01 (gün/ay yok; TDV cimma) — kesinlik:yil"),
      ("1936-05-09", "italya", f"{DV} habesistan 1936-05-09 ({BR})"),
      ("1941-05-05", "habesistan", f"{DV} habesistan 1941-05-05 (TDV etiyopya)")],
     [], "Habeşistan'a bağlandı, sonra İtalyan ilhakı"),
    ("ING-SOMALI", ["Berbera", "Zeyla", "Bulhar", "Hargeysa", "Burao", "Lasanod", "Erigavo", "Şeyh (Somaliland)",
                    "Odveyne", "Borama", "Buhodle", "Taleh", "Lâs Hore", "Mayd", "Hîs", "Ceel Afveyn"], "ingiltere", "③",
     None, [("1940-08-19", "1941-01-01", "italya", f"{KR_DOSYA} 1940-08-19 → 1941-01-01 ('Mart 1941', gün yok) — kesinlik t:yil")],
     "İngiltere hukuken sürüyor; İtalyan askerî işgali"),
    ("SUDET", ["Broumov (Braunau)", "Jeseník (Freiwaldau)"], "cekoslovakya", "①",
     [("1938-10-01", "almanya", f"{KR_DOSYA} 1938-10-01 · {DV} cekoslovakya 1938-09-29 Münih ({AV} imt/munich1)"),
      ("1945-05-08", "cekoslovakya", f"{DV} almanya 1945-05-08 koşulsuz teslim ({AV} wwii/gs11)")],
     [], "toprak antlaşmayla terk edildi (ilhak edenin hukukuna geçti); 1945'te geri"),
    ("G-SLOVAKYA", ["Uyvar", "Kassa (Košice)", "Komárom (Komárno)", "Léva (Levice)", "Fülek (Fiľakovo)"], "cekoslovakya", "①",
     [("1938-11-02", "macaristan-naiplik", f"{KR_DOSYA} 1938-11-02 I. Viyana Hakemliği"),
      ("1945-01-20", "cekoslovakya", f"{KR_DOSYA} 1945-01-20 Moskova mütarekesi: Macaristan 1937 sınırlarına")],
     [], "hakem kararıyla terk; 1945'te geri"),
    ("KARPAT", ["Ungvár (Uzhhorod)", "Munkács (Mukacheve)"], "cekoslovakya", "①", "BEKLE", [],
     "1938-11-02 Macar · 1945-01-20 Çekoslovak · 1945-06-29 SSCB devri MADDE YOK — son dilim yazılamaz"),
    ("SLOVAKYA", ["Bratislava", "Nitra (Nyitra)", "Trencsén (Trenčín)", "Eperjes (Prešov)"], "cekoslovakya", "②",
     [("1939-03-14", "slovakya-cumhuriyeti", f"{DV} slovakya-cumhuriyeti 1939-03-14 ({US}-KD)"),
      ("1945-04-04", "cekoslovakya", f"{DV} slovakya-cumhuriyeti 1945-04-04 ({US}-KD, Bratislava'nın düşüşü — Eperjes daha erken, ÜST SINIR)")],
     [], "yeni (kukla) devlet"),
    ("PROTEKTORA", ["Prag", "Brno", "Olomouc", "Hradec Králové", "České Budějovice (Budweis)", "Třeboň (Wittingau)"], "cekoslovakya", "③",
     None, [("1939-03-15", "1945-05-08", "almanya", f"{DV} cekoslovakya 1939-03-15 ({AV} imt/judseize) → almanya 1945-05-08 ({AV} wwii/gs11)")],
     "Çekoslovakya hukuken sürüyor (koordinatör: Bohemya-Moravya ③)"),
    ("NDH", ["Zagreb", "Saraybosna", "Mostar", "Banaluka", "Ösek (Osijek)", "Varadin (Petrovaradin)", "Travnik",
             "İzvornik (Zvornik)", "Foça (Foča)", "Livno (İhlevne)", "Yayça (Jajce)", "Srebrenik", "Dubrovnik", "Trebinye",
             "Vişegrad", "Tuzla (Bosna)", "Koniçe (Konjic)", "Visoko", "Knin", "Sin (Sinj)", "Klis", "Bihaç (Bihać)",
             "Varasd (Varaždin)", "Sisak", "Karlovac", "Kostayniçe (Kostajnica)", "Bosna Dubiçası (Bosanska Dubica)",
             "Bosna Novi'si (Bosanski Novi)", "Jasenovaç (Jasenovac)", "Bosna Brod'u (Bosanski Brod)",
             "Krupa (Bosanska Krupa)", "Ostrovica (Stara Ostrovica, Kulen Vakuf)", "Udbina", "Gospić", "Cetin (Cetingrad)",
             "Drežnik (Drežnik Grad)", "Brakya (Brač)", "Hvar (Lesina)"], "yugoslavya", "②",
     [("1941-04-10", "hirvatistan-bagimsiz", f"{DV} hirvatistan-bagimsiz 1941-04-10 ({US}-KD)"),
      ("1945-05-31", "yugoslavya", f"künye hirvatistan-bagimsiz t 1945-05-31 — ÜST SINIR ({BR} Ustasa 'until May 1945')")],
     [], "yeni (kukla) devlet"),
    ("YUG-ITALYAN", ["Split (Spalato)", "Şibenik (Sebenico)", "Kotor (Cattaro)", "Herseknovi (Herceg Novi)", "Krk (Veglia)",
                     "Rab (Arbe)", "Korçula (Kurzola)", "Vis (Lissa)", "Ljubljana", "Cetinje", "Podgorica",
                     "Priştine", "Prizren", "Debre (Dibra)"], "yugoslavya", "③",
     None, [("1941-04-17", "1943-09-08", "italya", f"{DV} yugoslavya 1941-04-17 teslim ({US}-KD) → {DV} italya 1943-09-08 ({US}-KD)")],
     "Yugoslavya hukuken sürüyor (sürgün hükûmeti); İtalyan ilhakı/idaresi isg:. 1943-09-08 sonrası Alman isg: — BİTİŞ GÜNÜ BULUNAMADI, yazılmadı"),
    ("YUG-BULGAR", ["Üsküp", "Manastır", "Ohri", "Köprülü (Veles)", "İştip (Štip)", "Ustrumca (Strumica)", "Doyran",
                    "Gevgili (Gevgelija)", "Şehirköy (Pirot)"], "yugoslavya", "③",
     None, [("1941-04-17", "1944-10-28", "bulgaristan-kralligi", f"{DV} yugoslavya 1941-04-17 ({US}-KD) → {KR_DOSYA} 1944-10-28 Moskova mütarekesi: Bulgaristan çekildi")],
     "Yugoslavya hukuken sürüyor; Bulgar idaresi isg:"),
    ("YUG-MACAR", ["Baç (Bács)", "Murska Sobota", "Lendava (Alsólendva)"], "yugoslavya", "③",
     None, [("1941-04-17", "1945-01-20", "macaristan-naiplik", f"{DV} yugoslavya 1941-04-17 ({US}-KD) → {KR_DOSYA} 1945-01-20 Moskova mütarekesi")],
     "Yugoslavya hukuken sürüyor; Macar ilhakı/idaresi isg:"),
    ("YUG-ALMAN", ["Niş", "Semendire", "Belgrad", "Kragujevac", "Çaçak", "Böğürdelen (Šabac)", "Yagodina (Jagodina)",
                   "Alacahisar (Kruševac)", "Yenipazar (Novi Pazar)", "Maribor (Marburg)"], "yugoslavya", "③",
     None, [], "Yugoslavya hukuken sürüyor; Alman askerî idaresi 1941-04-17 → BİTİŞ GÜNÜ BULUNAMADI (Belgrad 1944-10 maddesi yok) — isg: yazılmadı, s: uzatıldı"),
    ("YUG-YAKA", ["Pag (Pago)", "Uzunada (Dugi Otok)", "Mliyet (Mljet)", "Vrana (Urana)", "Nadin"], "yugoslavya", "?", "BEKLE", [],
     "1941 paylaşımında hangi yakaya (NDH / İtalyan Dalmaçyası) düştüğü ÖLÇÜLEMEDİ"),
    ("MANCURYA", ["Mukden (Şenyang)", "Liaoyang", "Cilin (Jilin)", "Ningguta", "Aigun", "Harbin", "Qiqihar",
                  "Mergen (Nenjiang)", "Sanxing (Yilan)"], "cin-cumhuriyeti", "②",
     [("1932-03-09", "mancukuo", f"{DV} mancukuo 1932-03-09 ({BR} Puyi)"),
      ("1945-08-31", "cin-cumhuriyeti", f"künye mancukuo t 1945-08-31 — ÜST SINIR ({BR} Puyi 'August 1945')")],
     [], "yeni (kukla) devlet — Lytton 1933 tanımadı; 1931-32 Japon işgali isg: maddesiz, yazılmadı"),
    ("REHE", ["Cehol (Chengde)", "Chifeng (Ulanhad)"], "cin-cumhuriyeti", "②",
     [("1933-03-04", "mancukuo", f"{KR_DOSYA} 1933-03-04 Rehe Mançukuo'ya katıldı"),
      ("1945-08-31", "cin-cumhuriyeti", f"künye mancukuo t 1945-08-31 — ÜST SINIR ({BR} Puyi)")],
     [], "yeni (kukla) devlete katıldı"),
    ("CINHINDI-TAYLAND", ["Battambang", "Sisophon", "Angkor (Siem Reap)", "Champasak"], "fransiz-cinhindi", "①",
     [("1941-05-09", "siyam-chakri", f"{KR_DOSYA} 1941-05-09 Tokyo Barış Sözleşmesi (FRUS 1945 c.VI d.946)")],
     [], "antlaşmayla terk (TARTIŞMALI: Müttefikler tanımadı; iade 1946 — ufkun dışında)"),
    ("MALAYA-TAYLAND", ["Kedah (Alor Setar)", "Kelantan (Kota Bharu)", "Terengganu (Kuala Terengganu)"], "ingiliz-malaya", "③",
     None, [("1943-08-20", "1945-08-16", "siyam-chakri", f"{KR_DOSYA} 1943-08-20 (FRUS 1945 c.VI d.921) → 1945-08-16 Tayland barış bildirisi")],
     "İngiltere hukuken sürüyor; işgalci Japonya'nın Tayland'a devri isg:"),
    ("K-ERDEL", ["Erdel (Kaloşvar)", "Varad (Oradea)", "Szatmár (Satu Mare)"], "romanya-kralligi", "①", "BEKLE", [],
     "II. Viyana Hakemliği 1940-08-30: kronolojide MADDE YOK — başlangıç yazılamaz (dönüş 1945-03-09 maddesi var)"),
    ("ALSAS", ["Strazburg", "Colmar", "Mulhouse"], "fransa-cumhuriyet", "③",
     None, [], "Fransa hukuken sürüyor; 1940-06-22 Alman idaresi — BİTİŞ GÜNÜ BULUNAMADI (1944-45), isg: yazılmadı, s: uzatıldı"),
    ("LUKSEMBURG", ["Lüksemburg"], "luksemburg", "③",
     None, [("1942-08-30", "1944-09-10", "almanya", f"{KR_DOSYA} 1942-08-30 ilhak → 1944-09-10 kurtuluş")],
     "Lüksemburg hukuken sürüyor (sürgün hükûmeti); 1940-05-10 → 1942-08-30 işgali maddesiz, yazılmadı"),
    ("LUKSEMBURG-WILTZ", ["Wiltz"], "luksemburg", "③",
     None, [("1942-08-30", "1945-02-22", "almanya", f"{KR_DOSYA} 1942-08-30 → 1945-02-22 'toprakların tamamı temizlendi' — ÜST SINIR")],
     "Lüksemburg hukuken sürüyor"),
    ("MEMEL", ["Klaipėda (Memel)"], "litvanya", "①", "BEKLE", [],
     "1939-03-22 Reich (madde var) · 1945 Sovyet ele geçirişi MADDE YOK — son dilim yazılamaz"),
    ("TANCA", ["Tanca"], "fas", "③",
     None, [("1940-06-14", "1945-09-02", "ispanya", f"{KR_DOSYA} 1940-06-14 İspanyol askerî işgali · 1945-09-02 pencere ucu (çekilme 1945-10, ufkun dışında)")],
     "Uluslararası Bölge hukuken sürüyor; İspanyol işgali isg:"),
    ("DANZIG", None, "danzig-serbest-sehri", "①", "BEKLE", [],
     "1939-10-26 Reich (madde var) · 1945 Polonya ardılı künyesiz (Z4) — son dilim yazılamaz"),
    ("POLONYA-DOGU", ["Lvov", "Yazlofça (Yazlovets)", "Brest-Litovsk", "Pinsk", "Grodno", "Kovel", "Lutsk (Łuck)",
                      "Volodymyr-Volynskyi (Włodzimierz)", "Rivne (Równe)"], "polonya", "①",
     [("1939-09-28", "sovyet-rusya", f"{DV} polonya 1939-09-28 ({US} invasion-of-poland: Almanya ile SSCB Polonya'yı paylaştı)")],
     [], "SSCB ilhakı (1941-44 Alman işgali isg: — gün maddesiz, yazılmadı)"),
    ("POLONYA-BIALYSTOK", ["Białystok"], "polonya", "①", "BEKLE", [],
     "1939 SSCB · 1944-45 Polonya'ya iade — Polonya ardılı künyesiz, gün yok"),
    ("POLONYA-REICH", ["Poznan", "Torun (Toruń)", "Łódź", "Kattowitz (Katowice)"], "polonya", "①", "BEKLE", [],
     "1939-10-26 Reich ilhakı (madde var) · 1945 Polonya ardılı künyesiz (Z4) — son dilim yazılamaz"),
    ("POLONYA-GG", ["Krakov", "Varşova", "Radom (Polonya)", "Kielce", "Lublin", "Chełm (Kholm)", "Zamość", "Częstochowa"], "polonya", "③",
     "BEKLE", [], "Genel Valilik: Polonya hukuken sürüyor ⇒ s:polonya devam eder — ama polonya künyesi 1939-10-06'da bitiyor (Z4: ardıl/uzatma kararı) · isg:almanya 1939-10-26 →"),
    ("ODER-NEISSE", ["Breslau (Wrocław)", "Liegnitz (Legnica)", "Oppeln (Opole)", "Glatz (Kłodzko)", "Gleiwitz (Gliwice)",
                     "Stettin (Szczecin)", "Elbing (Elbląg)"], "almanya", "①", "BEKLE", [],
     "1945-08-02 Potsdam → Polonya: Polonya ardılı künyesiz (Z4)"),
    ("KONIGSBERG", ["Königsberg"], "almanya", "①",
     [("1945-06-05", "almanya-muttefik-isgali", f"{DV} almanya-muttefik-isgali 1945-06-05 ({AV} wwii/ger01)"),
      ("1945-08-02", "sovyet-rusya", f"{KR_DOSYA} 1945-08-02 Potsdam (Avalon)")],
     [], "Potsdam ile SSCB'ye (Nisan 1945 Sovyet ele geçirişi isg: — maddesiz)"),
    ("FILIPIN", ["Manila", "Cebu", "Colo (Jolo)", "Kotabato (Magindanao)", "Iloilo", "Vigan", "Zamboanga", "Butuan",
                 "Naga (Camarines)", "Batangas", "Legazpi", "Tuguegarao", "Dagupan", "Puerto Princesa (Palawan)"], "abd", "③",
     None, [], "Commonwealth ABD egemenliği altında ⇒ s: abd sürer; filipin-commonwealth v:/statü kararı Z4 · 1942 Japon işgali BİTİŞ GÜNÜ BULUNAMADI, isg: yazılmadı"),
]
HS = {}
_ad_var = {y["ad"] for y in Y}
HS_EKSIK = []
for grup, adlar, sahip_, hk, sg, isg_, ger in HS_GRUP:
    kume = adlar if adlar is not None else [r["ad"] for v in kova.values() for r in v
                                           if (r.get("kunye") == sahip_ or r.get("sahip") == sahip_)]
    for a in kume:
        if a not in _ad_var:
            HS_EKSIK.append((grup, a))
        HS[a] = (grup, hk, sg, isg_, ger)


V_BEYAN = ("Z5-1008 V: 1923-10-29'da açık isg:/v: (himaye) t→1945-09-02 ÇIKARIM — himaye künyesi 1945'i "
           "aşıyor, 1923-45 arasında himayenin bittiğine dair kayıt yok; 1942-43 Mihver işgali (Tunus) ayrı isg: işi "
           "· künye ömrü dayanak değil (D207) · denetim/ZAMAN-Z5-1008.md")
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
        elif "kesinlik:ay" in dayanak:
            p["kesinlik"] = {"f": "ay", "t": "gun"}
        ek.append(p)
    return s[:i + 1] + ek + s[i + 1:]


yama, yama_say, not_dolu = [], collections.Counter(), []
for r in kova.get("V_himaye_mekanik", []):
    if r["ad"] in HS:
        continue
    x = {"ad": r["ad"], "_kova": "V_himaye_mekanik", "_bolge": None}
    for alan, dizi in (("s", r["_s"]), ("isg", r["_isg"]), ("v", r["_v"])):
        if any(p.get("t") == UC for p in dizi):
            x[alan] = [dict(p, t=UFUK2) if p.get("t") == UC else dict(p) for p in dizi]
    if r.get("not_dolu"):
        not_dolu.append(r["ad"])     # bilgi: uygulayıcı EKLEYECEK (koordinatör kararı)
    x["not"] = V_BEYAN
    x["taban"] = {a: r["_taban"][a] for a in ("s", "isg", "v") if a in x}
    yama.append(x)
    yama_say["V_himaye_mekanik"] += 1
for k in ("A_mekanik", "B_kalici", "C_kunye_1923te_kesik", "D_kunye_1923_45_arasi_bitti"):
    for r in kova.get(k, []):
        if r["ad"] in HS:
            continue
        g = r.get("gecis")
        if k != "A_mekanik" and not g and not r.get("uzat"):
            continue
        x = {"ad": r["ad"], "s": yeni_s(r, g), "_kova": k, "_bolge": r.get("bolge")}
        if k == "A_mekanik":
            if r.get("not_dolu"):
                not_dolu.append(r["ad"])      # bilgi: uygulayıcı EKLEYECEK (koordinatör kararı)
            x["not"] = A_BEYAN
        x["taban"] = {a: r["_taban"][a] for a in ("s", "isg", "v") if a in x}
        yama.append(x)
        yama_say[k] += 1

# ── HS (hukukî sonuç) kayıtları
hs_say, hs_bekle = collections.Counter(), []
for k, v in kova.items():
    for r in v:
        if r["ad"] not in HS:
            continue
        grup, hk, sg, isg_ekle, ger = HS[r["ad"]]
        if sg == "BEKLE" or r.get("s_idx") is None:
            hs_bekle.append({"ad": r["ad"], "grup": grup, "hukuk": hk, "neden": ger, "kova": k})
            hs_say[(grup, "BEKLEYEN")] += 1
            continue
        x = {"ad": r["ad"], "_kova": "HS" + hk, "_bolge": grup}
        x["s"] = yeni_s(r, sg)          # sg None ⇒ yalnız t uzar
        if isg_ekle:
            yeni_isg = [dict(p) for p in r["_isg"]]
            for f_, t_, d_, day in isg_ekle:
                p = {"f": f_, "t": t_, "d": d_, "kaynak": "Z5-1008 — " + day}
                if "kesinlik t:yil" in day:
                    p["kesinlik"] = {"f": "gun", "t": "yil"}
                yeni_isg.append(p)
            x["isg"] = yeni_isg
        x["not"] = (f"Z5-1008 HUKUKÎ SONUÇ {hk} ({grup}): {ger} — kova seçimi bir ÇIKARIMDIR "
                    f"(koordinatör ölçütü: ① lağvedildi→s: değişir · ② yeni devlet→yeni künye · "
                    f"③ hukuken sürüyor→isg:) · denetim/ZAMAN-Z5-1008.md")
        x["taban"] = {a: r["_taban"][a] for a in ("s", "isg", "v") if a in x}
        yama.append(x)
        hs_say[(grup, hk)] += 1
cikti["HS_sayi"] = {f"{a}|{b}": n for (a, b), n in sorted(hs_say.items())}
cikti["HS_bekleyen"] = hs_bekle
cikti["HS_ad_bulunamadi"] = HS_EKSIK
yama_say["HS"] = sum(n for (a, b), n in hs_say.items() if b != "BEKLEYEN")
cikti["yama_say"] = dict(yama_say)
cikti["A_not_dolu_beyan_inmez"] = not_dolu
for v in kova.values():
    for r in v:
        for _a in ("_s", "_isg", "_v", "_taban"):
            r.pop(_a, None)
if YAMA:
    BAS = [
        "// ═══════════════════════════════════════════════════════════════════════════",
        "// ZAMAN-Z5 v2 (9 Ekim 2026) — TABAN " + TEMEL_TAM,
        "// Bu gövde, 67e9ec9d tabanlı v1'in (KARANTİNA, 36186769) yerine BUGÜNKÜ main'e karşı",
        "// YENİDEN ÜRETİLDİ. Her kayıt `taban:{s|isg|v}` taşır: yamanın üzerine yazdığı alanın",
        "// TABAN " + TEMEL_TAM[:8] + "'deki değeri. arac/_sahiplik_uygula.py (SAHIPLIK-BAYAT-TABAN-1009 kapısıyla)",
        "// bugünkü değer tabandan farklıysa BAYAT TABAN der ve YAZMAZ (çıkış 2) — v1'in 76 sessiz geri",
        "// alımı bu sınıftı. Girdi listesine alınması koordinatör kararıdır (bugün GIRDI_DOSYALARI ve",
        "// index.html bu dosyayı OKUMUYOR).",
        "// ═══════════════════════════════════════════════════════════════════════════",
        "// ZAMAN-Z5 — yerleşim dönemlerinin 1923-10-29 → 1945-09-02 uzatılması (ÖNERİ)",
        "// Üretici: denetim/ARAC-ZAMAN-Z5-URET-1009.py --yama · TABAN " + TEMEL_TAM,
        "// Kova A: s: sahibi değişmiyor (ÇIKARIM — kayıt `not:` alanında BEYANLI, dönem kaynak:ına DOKUNULMADI) · B: kalıcı",
        "// egemenlik değişimi, gün kaynaklı maddeden · C: tbmm-turkiye → turkiye-cumhuriyeti.",
        "// Kayıt `s:` dizisinin TAMAMINI taşır (uygulayıcı alanı değiştirir); sıra korunmuştur.",
        "// 🔴 DOKUNDUĞU GÜN ARALIĞI: YALNIZ " + UC + " → " + UFUK2 + " — t'si " + UC + " olan dönemin t'si",
        "//    ve bu tarihten SONRA başlayan yeni dönemler. 1281-" + UC[:4] + " arası dönemler TABAN " + TEMEL_TAM[:8] + "'ya göre BİREBİR aynı",
        "//    (sınav: denetim/ARAC-ZAMAN-Z5-SINAV-1008.py ① — iki yönde sınandı). Ufuk tek sabitten: UFUK2.",
        "// ÖN ŞART (aynı commit): kacar.t = iran.f = 1925-10-31 · bhopal.t 1945-09-02 · surakarta.t 1945-09-02 ·",
        "//    buhara-halk-cumhuriyeti 1924-10-27 — inmezse 4c'ye 111 dönem düşer (sınav ②).",
        "// YAYIN ÖNCESİ: turkiye-cumhuriyeti harita:\"tbmm-turkiye\" (Emre: TBMM moru) + boyasız 5 künye — hirvatistan-bagimsiz (38) ·",
        "//    almanya-muttefik-isgali (31) · mancukuo (11) · slovakya-cumhuriyeti (4) · hatay-devleti (3).",
        "// HS①②③ = hukukî sonuç kovası (koordinatör ölçütü), kaydın not:'unda ADIYLA.",
        "window.YER_YAMA_1923_1945 = [",
    ]
    for x in yama:
        BAS.append("// " + x["_kova"] + (" · " + x["_bolge"] if x["_bolge"] else ""))
        BAS.append(json.dumps({k: x[k] for k in ("ad", "s", "isg", "v", "not", "taban") if k in x}, ensure_ascii=False) + ",")
    BAS.append("];")
    with io.open(YAMA_YOL, "w", encoding="utf-8", newline=chr(10)) as f:
        f.write(chr(10).join(BAS) + chr(10))
cikti["temel_tam"] = TEMEL_TAM
cikti["yama_kayit"] = len(yama)
json.dump(cikti, open("denetim/ZAMAN-Z5-1009.json", "w", encoding="utf-8"), ensure_ascii=False, indent=1)

print("yama kaydı", len(yama), "· TABAN", TEMEL_TAM)
print("temel", cikti["temel"], "· yerlesim", len(Y), "· dosya", cikti["girdi_dosya"])
for k, n in cikti["kova_sayi"].items():
    print(f"  {k:32s} {n:5d}   {cikti['kova_sahip'][k][:12]}")
print("A alt:", cikti["A_alt"], "· I-aday:", cikti["A_I_aday"])
print("bölge:", cikti["bolge_sayi"])
print("bölge adı veride YOK:", eksik)
print("bölge adı var ama yakalanmadı:", kovasiz)
