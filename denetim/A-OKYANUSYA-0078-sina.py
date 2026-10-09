# A-OKYANUSYA-0078 — yeni dosyanın kabul sınavı (girdi.py'ye DOKUNMADAN)
# ① ad benzersiz (bütün data/yerlesimler*.js + bekleyen*) ② 3 km yakınlık (canlı girdi)
# ③ künye penceresi + BOYALAR ④ dönem zinciri (çakışma/ters/sıfır/ardışıklık)
# ⑤ 1923-09-01 sahibi · ⑥ pozitif kontrol: sınavın ateşlediği kasıtlı bozuk kayıtla
import sys, os, re, glob, io
sys.stdout.reconfigure(encoding="utf-8", errors="replace")
KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(KOK, "arac"))
import girdi, renkler

DOSYA = "yerlesimler_a78_okyanusya.js"

def pad(t):  # üç haneli yıl dizgi karşılaştırmasında şart (CLAUDE.md §3.5)
    y, _, geri = t.partition("-")
    return y.zfill(4) + ("-" + geri if geri else "")

def kontrol(Yeni, sessiz=False, kendisi=None):
    hata = []
    # künyeler
    K = {k["id"]: k for k in girdi.oku_devletler()}
    boya = set(renkler.BOYALAR)
    # bütün adlar (canlı + bağlanmamış)
    adlar = {}
    for yol in glob.glob(os.path.join(KOK, "data", "*.js")):
        b = os.path.basename(yol)
        if b == DOSYA: continue
        if not (b.startswith("yerlesimler") or b.startswith("bekleyen") or b.startswith("yer_")): continue
        for m in re.finditer(r'\bad\s*:\s*"((?:[^"\\]|\\.)*)"', io.open(yol, encoding="utf-8").read()):
            adlar.setdefault(m.group(1), b)
    canli = girdi.yukle(sessiz=True)
    gorulen = set()
    for y in Yeni:
        a = y["ad"]
        if a in adlar: hata.append(f"AD ÇAKIŞMASI {a} ↔ {adlar[a]}")
        if a in gorulen: hata.append(f"AD İÇ TEKRAR {a}")
        gorulen.add(a)
        for z in canli:
            d = girdi.km(y["lat"], y["lon"], z["lat"], z["lon"])
            # ÖNCÜL (v2 ⓑ): dosya canlıya alınmışsa nokta KENDİSİYLE eşleşir —
            # ihlal değil, sorunun bayatlığı; ayrıca sayılır (yalnız gerçek koşuda)
            if kendisi is not None and z["_kaynak"] == DOSYA and z["ad"] == a and d < 0.05:
                kendisi.append(a); continue
            if d < girdi.YAKINLIK_ESIK_KM:
                hata.append(f"3 KM {a} ↔ {z['ad']} ({d:.1f} km, {z['_kaynak']})")
        for alan in y:
            if alan not in girdi.BILINEN_ALANLAR: hata.append(f"BİLİNMEYEN ALAN {a}.{alan}")
        if not y.get("kaynak"): hata.append(f"KAYNAKSIZ {a}")
        onceki_t = None
        donem = sorted((p for kat in ("s", "d", "v") for p in y.get(kat) or []), key=lambda p: p["f"])
        for p in donem:
            kid = p["d"]
            if not (p["f"] < p["t"]): hata.append(f"TERS/SIFIR {a} {p}")
            if onceki_t and p["f"] < onceki_t: hata.append(f"ÇAKIŞMA {a} {p}")
            if onceki_t and p["f"] != onceki_t: hata.append(f"ARA BOŞLUK {a} {onceki_t}→{p['f']}")
            onceki_t = p["t"]
            k = K.get(kid)
            if not k: hata.append(f"KÜNYE YOK {a} {kid}"); continue
            if p["f"] < pad(k["f"]):
                hata.append(f"KÜNYE ÖNCESİ {a} {kid} {p['f']} < {k['f']}")
            if p["t"] > (k.get("t") or "9999"): hata.append(f"KÜNYE SONRASI {a} {kid} {p['t']} > {k.get('t')}")
            anahtar = k.get("harita") or kid
            if anahtar not in boya: hata.append(f"BOYASIZ {a} {kid}")
        if donem and y.get("kur") and donem[0]["f"] < y["kur"]:
            hata.append(f"KUR SONRASI DÖNEM {a} kur {y['kur']} > {donem[0]['f']}")
    return hata

if __name__ == "__main__":
    Yeni = girdi.oku_dosya(DOSYA)
    print(f"{DOSYA}: {len(Yeni)} kayıt")
    # ⑥ pozitif kontrol — bozuk kayıtlarla sınav ateşliyor mu?
    bozuk = [dict(ad="Sydney", lat=-33.87, lon=151.21, kaynak="x", s=[{"f":"1950-01-01","t":"1923-10-29","d":"yok-boyle"}]),
             dict(ad="__sina__", lat=-10.6, lon=150.68, s=[{"f":"1850-01-01","t":"1923-10-29","d":"avustralya"}])]
    h = kontrol(bozuk)
    ATESLEDI = len(h) >= 5
    print(f"POZİTİF KONTROL: {len(h)} hata bekleniyor ≥5 →", "ATEŞLEDİ" if ATESLEDI else "ATEŞLEMEDİ!")
    for x in h: print("   ", x)
    CANLI = DOSYA in girdi.GIRDI_DOSYALARI
    kendisi = []
    h_gercek = h = kontrol(Yeni, kendisi=kendisi if CANLI else None)
    print(f"\nGERÇEK: {len(h)} hata")
    for x in h: print("   ", x)
    sahipsiz = 0
    for y in Yeni:
        s = [p["d"] for kat in ("s","d","v") for p in y.get(kat) or [] if p["f"] <= "1923-09-01" < p["t"]]
        sahipsiz += not s
        print(f"  {y['ad']:<45} 1923-09-01 → {s[0] if s else 'SAHİPSİZ'}")
    # ÇIKIŞ KODU (CLAUDE.md §3): ateşlemeyen alet ölçemez (2) · hata/sahipsiz ihlal (1) · temiz 0
    # Öncül kalktıysa (dosya canlıda, noktalar kendisiyle eşleşiyor) ve ihlal yoksa 2.
    if not ATESLEDI: print("\nSONUÇ: ÖLÇÜLEMEDİ: pozitif kontrol ateşlemedi"); sys.exit(2)
    if h_gercek or sahipsiz: print("\nSONUÇ: İHLAL"); sys.exit(1)
    if kendisi:
        print("\nSONUÇ: ÖLÇÜLEMEDİ: a78_okyanusya GIRDI_DOSYALARI'nda, %d nokta kendisiyle"
              " eşleşiyor — soru bayat (canlıya alınmadan önceki kabul sınavı)" % len(kendisi))
        sys.exit(2)
    print("\nSONUÇ: temiz"); sys.exit(0)
