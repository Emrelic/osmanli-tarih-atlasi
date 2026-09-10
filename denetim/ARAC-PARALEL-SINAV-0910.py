# -*- coding: utf-8 -*-
"""ARAC-PARALEL-SINAV-0910 — 🔴 ADIM 3: BİT DENKLİĞİ SINAVI.

KABUL ÖLÇÜTÜ, tek satır:
        sha256(sirali) == sha256(paralel)      · baska hicbir sey degil
Ayrisirsa: AYRISAN ILK BAYT + SEBEP. "Yakindi" YOK.

NASIL — ve `arac/`ye TEK KARAKTER YAZMADAN:
  Bu alet `arac/uret_petek.py`nin MEKANİK BİR KOPYASINI üretir
  (`denetim/_paralel/motor_sinav.py`) ve kopyaya DÖRT enjeksiyon yapar:
     ① BOLGE daraltma            (dar pencere)
     ② YERLER bbox suzme         (az devlet)
     ③ "Yabanci devlet govdeleri" asamasindan SONRA hash + cikis
        (kalan asamalar kosmaz — sinavin konusu degil)
     ④ PARALEL MOD: ayni dongunun iki fazli hali
  Her enjeksiyonun capasi dosyada TAM BIR KEZ gecmelidir; gecmiyorsa
  alet COKER (yanlis yere yama vurmaktansa cokmek iyidir).

🔴 PARALEL FAZ NICIN IS PARCACIGI (thread), SUREC (process) DEGIL:
  Windows'ta yalniz `spawn` var (olculdu). `spawn` isciyi `__main__`i
  YENIDEN IMPORT ederek kurar — yani 5305 satirlik betik bastan kosar.
  Surec paralelligi ONCE motorun bir MODULE bolunmesini gerektirir; bu
  bir tasarim karari, bir sinav degil. Is parcacigi ayni bellegi
  paylasir, 7 saf onbellegi de PAYLASIR, ve SINANAN IDDIA aynidir:
  "geometri baska bir yurutme baglaminda hesaplanip havuzlama OZGUN
   SIRAYLA tekrar oynatilirsa cikti degismez."
  ⚠️ SINIRI ACIKÇA: bu sinav SURECLER ARASI belirlenimciligi OLCMEZ.
     Onu ayri bir alet olcer (ARAC-PARALEL-WKB-0910).
"""
import os, io, re, sys, json, time, shutil, subprocess, hashlib

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SRC = os.path.join(KOK, "arac", "uret_petek.py")
HEDEF_DIZIN = os.path.join(KOK, "denetim", "_paralel")
# 🔴 AD, NE OLDUGUNU SOYLER (D095 · koordinatorun sarti). Eski adi
# "motor_sinav.py" idi ve bir dizin listesinde URETIM MOTORU sanilabilirdi.
# ⚠️ SAPMA, ADIYLA: koordinator dosyayi dogrudan `denetim/` altina onerdi;
#    `denetim/_paralel/` altinda TUTULDU ve sebebi olculmus bir riskten:
#    YAZIM KALKANI'nin cevresi `dirname(__file__)`. Dosya `denetim/`e
#    konsaydi kalkan `denetim/`in TAMAMINA yazma izni verirdi — yani BU
#    OTURUMUN RAPORLARININ durdugu dizine. Cevreyi dar tutmak, adlandirma
#    kuralindan once gelir; ad sarti zaten dosya adiyla karsilaniyor.
HEDEF = os.path.join(HEDEF_DIZIN, "_PARALEL-SINAV-MOTOR-0910.py")


def kaynak_kimligi():
    """Kopyanin HANGI SURUMDEN alindigini olcer — beyan degil, git'ten."""
    def _g(a):
        try:
            return subprocess.run(a, cwd=KOK, capture_output=True,
                                  text=True).stdout.strip()
        except Exception:
            return "olculemedi"
    return {
        "commit": _g(["git", "log", "-1", "--format=%h %ad", "--date=short",
                      "--", "arac/uret_petek.py"]),
        "calisma_kopyasi_sha": _g(["git", "hash-object", "arac/uret_petek.py"]),
        "head_sha": _g(["git", "rev-parse", "HEAD:arac/uret_petek.py"]),
    }

# --------------------------------------------------------------------------
# 🔴 ENJEKSIYON ⓪ — YAN ETKI KESME. Kopya oldugu gibi kosarsa GERCEK
# depoya dokunur ve baska bir oturumun kosusunu bozar:
#   (a) kosu_kilit.al("petek")  -> URETIM KILIDINI ALIR, kosu 9 baslayamaz
#   (b) ".uretim-basladi"       -> depo kokune damga atar, NOBETCILER
#                                  "uretim basladi" sanir  (§10: erken
#                                  haber vermek hic haber vermemekten kotu)
#   (c) sys.path                -> kopya denetim/_paralel/ altinda, arac/
#                                  modullerini (girdi, renkler) BULAMAZ
#   (d) KOK                     -> dirname(dirname(__file__)) yanlis yeri
#                                  gosterir, motor data/ yerine denetim/ arar
CAPA_YOL = 'sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))'
YAMA_YOL = '''sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
# ═══ PARALEL SINAV ENJEKSIYONU ⓪ — YAN ETKI KESME ═══
_SINAV = bool(os.environ.get("PARALEL_TEST_KUCULT"))
if _SINAV:
    _SKOK = os.environ["PARALEL_TEST_KOK"]
    sys.path.insert(0, os.path.join(_SKOK, "arac"))
    # 🔴 PALET DE CANLI GIRDIDIR — ve bunu SINAVIN KENDI CAPASI gosterdi:
    # bir turda `girdi_izi` AYNI cikti ama ETA 7.310 -> 7.257 ve devlet
    # 60 -> 59. Fark YERLER'den gelemezdi ⇒ `arac/renkler.py` (BOYALAR)
    # kosular arasinda degismisti. Dondurma `data/`yi kapsiyordu, PALETI
    # KAPSAMIYORDU. Dondurulmus kopya yolun BASINA konur ki
    # `from renkler import BOYALAR` onu bulsun.
    if os.environ.get("PARALEL_TEST_DATA"):
        sys.path.insert(0, os.environ["PARALEL_TEST_DATA"])
    import types as _ty
    _st = _ty.ModuleType("kosu_kilit")
    _st.al = lambda *a, **k: True
    _st.birak = lambda *a, **k: None
    sys.modules["kosu_kilit"] = _st
    print("  [SINAV] kosu_kilit DEVRE DISI — uretim kilidi ALINMIYOR")
    # ═══ YAZIM KALKANI — ve BU KALKAN BIR HASARDAN SONRA KONDU ═══
    # Ilk kosuda kopya GERCEK depo dosyalarini EZDI:
    #     veri-kaynak/motor_kara.geojson  8.016.830 -> 72.431 bayt
    #     data/bolgeler.js                  346.186 -> 80.652 bayt
    # Ikisi de git'ten birebir geri alindi (hash HEAD ile ayni), ama
    # kusur "dikkat" degil YAPISALDI: motor kucultulmus girdiyle de
    # ara ciktilarini AYNI yerlere yaziyor, ve enjeksiyonla tek tek
    # kapatmak ancak BILINEN yazim yerlerini kapatir.
    # ⇒ Kalkan ADLARI DEGIL YOLU sinar: sinav dizininin disina her yazim
    #   SAPTIRILIR. Yeni bir yazim yeri eklense de tutar.
    _SINAV_DIZIN = os.path.dirname(os.path.abspath(__file__))
    import builtins as _bi
    _io_open, _bi_open = io.open, _bi.open

    def _kalkan(gercek):
        def _ac(dosya, mod="r", *a, **k):
            if isinstance(mod, str) and any(c in mod for c in "wax+"):
                try:
                    _p = os.path.abspath(str(dosya))
                except Exception:
                    return gercek(dosya, mod, *a, **k)
                if not _p.startswith(_SINAV_DIZIN):
                    _y = os.path.join(_SINAV_DIZIN,
                                      "SAPTIRILDI_" + os.path.basename(_p))
                    print("  [SINAV] 🛡 YAZIM SAPTIRILDI: %s" % _p)
                    return gercek(_y, mod, *a, **k)
            return gercek(dosya, mod, *a, **k)
        return _ac

    io.open = _kalkan(_io_open)
    _bi.open = _kalkan(_bi_open)
    print("  [SINAV] 🛡 YAZIM KALKANI ACIK — %s disina yazim YOK"
          % _SINAV_DIZIN)
'''

CAPA_KOK = 'KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))'
YAMA_KOK = '''KOK = (os.environ["PARALEL_TEST_KOK"] if os.environ.get("PARALEL_TEST_KUCULT")
       else os.path.dirname(os.path.dirname(os.path.abspath(__file__))))'''

CAPA_DAMGA = '''io.open(os.path.join(os.path.dirname(os.path.abspath(__file__)), "..",
                     ".uretim-basladi"), "w", encoding="utf-8").write(
    _BASLADI.strftime("%Y-%m-%d %H:%M:%S") + "\\n")'''
YAMA_DAMGA = '''io.open(os.path.join(os.path.dirname(os.path.abspath(__file__)),
                     ".uretim-basladi-SINAV" if _SINAV else "../.uretim-basladi"),
        "w", encoding="utf-8").write(
    _BASLADI.strftime("%Y-%m-%d %H:%M:%S") + "\\n")'''

# 🔴 ENJEKSIYON ⓪d — GIRDIYI DONDUR. Depo CANLI: 20+ oturum calisiyor ve
# `data/yerlesimler*.js` koşular ARASINDA degisiyor. ÖLÇÜLDÜ — iki kosu 51
# saniye arayla FARKLI girdi gordu (girdi izi ayri, ETA 7.312 vs 7.310).
# O hâlde A/B kiyasi ne denk ne ayrisik olur: YANILTICI olur.
# ⇒ Sinav, girdiyi BIR KEZ dondurur; iki kosu da AYNI dondurulmus kopyadan
#   okur. `girdi.anlik_goruntu()` zaten kopya aliyor ama KOSU BASINA —
#   yani iki kosunun iki AYRI anlik goruntusu oluyordu.
CAPA_GIRDI = 'import girdi'
YAMA_GIRDI = '''import girdi
# ═══ PARALEL SINAV ENJEKSIYONU ⓪d — DONDURULMUS GIRDI ═══
if os.environ.get("PARALEL_TEST_DATA"):
    girdi.DATA = os.environ["PARALEL_TEST_DATA"]
    print("  [SINAV] GIRDI DONDURULDU ->", girdi.DATA)
'''

CAPA_BOLGE = 'BOLGE = box(-180, -60, 180, 85)'
YAMA_BOLGE = '''BOLGE = box(-180, -60, 180, 85)
# ═══ PARALEL SINAV ENJEKSIYONU ① — DAR PENCERE ═══
_PT = os.environ.get("PARALEL_TEST_KUCULT")
if _PT:
    _px0, _py0, _px1, _py1 = [float(v) for v in _PT.split(",")]
    BOLGE = box(_px0, _py0, _px1, _py1)
    print("  [SINAV] BOLGE daraltildi ->", BOLGE.bounds)
'''

CAPA_YERLER = 'YERLER = girdi.yukle()'
YAMA_YERLER = '''YERLER = girdi.yukle()
# ═══ PARALEL SINAV ENJEKSIYONU ② — AZ NOKTA / AZ DEVLET ═══
if os.environ.get("PARALEL_TEST_KUCULT"):
    _n0 = len(YERLER)
    YERLER = [_y for _y in YERLER
              if _px0 <= _y["lon"] <= _px1 and _py0 <= _y["lat"] <= _py1]
    print("  [SINAV] YERLER %d -> %d" % (_n0, len(YERLER)))
    # 🔴 GIRDI PARMAK IZI — ve BU SATIR OLCULMUS BIR TEHDIDE KARSI KONDU:
    # depo CANLI. Iki kosu ~60 sn arayla koşuyor ve o pencerede baska bir
    # oturum `data/yerlesimler*.js`e yazabilir (olculdu: 404afc0 ve 7c7e80d
    # tam bu dosyaya dokundu). O zaman sirali ile paralel FARKLI GIRDI gorur
    # ve hash kiyasi SESSIZCE anlamsizlasir — ne denk ne ayrisik, YANILTICI.
    # ⇒ Asamanin TUKETTIGI verinin ozeti basilir; sinav ikisini karsilastirir.
    import hashlib as _hl0
    print("  [SINAV] GIRDI IZI %s" % _hl0.sha256(json.dumps(
        YERLER, sort_keys=True, ensure_ascii=False,
        separators=(",", ":")).encode("utf-8")).hexdigest())
'''

CAPA_CIKIS = 'asama("Dönemler kuruluyor (delta yapısı)")'
YAMA_CIKIS = '''# ═══ PARALEL SINAV ENJEKSIYONU ③ — HASH ve CIKIS ═══
if os.environ.get("PARALEL_TEST_KUCULT"):
    import hashlib as _hl
    _mod = os.environ.get("PARALEL_TEST_MOD", "sirali")
    if os.environ.get("PARALEL_TEST_BOZ") == "1":
        # 🔴 BURADA "paralel-boz" SABIT YAZILIYDI ve `donem` kipi eklenince
        #    donem-boz kosusu hash'ini `cikti_paralel-boz`a yazdi. Sonuc:
        #    alet `cikti_donem-boz`u ARADI, BULAMADI, ve negatif capayi
        #    "OTMEDI" sayip donem kipini HUKUMSUZ ilan etti — oysa cikti
        #    GERCEKTEN ayrismisti (907.917 ≠ 907.757 bayt).
        #    📌 Bir alet yanlis ETIKET basarsa, dogru sonucu YANLIS okur.
        _mod = _mod + "-boz"
    _blob = (json.dumps(DEV_HALKA, separators=(",", ":")) + chr(10) +
             json.dumps(DEV_PARCA, separators=(",", ":")) + chr(10) +
             json.dumps(DEVLET_KAYIT, ensure_ascii=False,
                        separators=(",", ":")))
    _hex = _hl.sha256(_blob.encode("utf-8")).hexdigest()
    _yol = os.path.join(os.path.dirname(os.path.abspath(__file__)),
                        "cikti_%s" % _mod)
    io.open(_yol + ".txt", "w", encoding="utf-8").write(_blob)
    print("  [SINAV] MOD=%s  halka=%d  parca=%d  devlet=%d  donem=%d"
          % (_mod, len(DEV_HALKA), len(DEV_PARCA), len(DEVLET_KAYIT),
             sum(len(d["dnm"]) for d in DEVLET_KAYIT)))
    print("  [SINAV] SHA256 %s" % _hex)
    io.open(_yol + ".sha256", "w", encoding="utf-8").write(_hex)
    sys.exit(0)

asama("Dönemler kuruluyor (delta yapısı)")'''

# ---- ENJEKSIYON ④ : PARALEL MOD -------------------------------------------
CAPA_DONGU = 'for _dv_i, (did, (dad, renk)) in enumerate(BOYALAR.items(), 1):'
YAMA_DONGU_BAS = '''# ═══ PARALEL SINAV ENJEKSIYONU ④ — IKI FAZLI DONGU ═══
# FAZ 1 (PARALEL) : her devletin geometrisi -> ham kayit listesi, YAN ETKISIZ
#                   (havuza() CAGRILMAZ)
# FAZ 2 (SIRALI)  : kayitlar OZGUN DEVLET SIRASIYLA havuza verilir
# 🔴 Devlet-ici sira KORUNUR: bir isci bir devletin BUTUN donemlerini
#    ayni sirayla kosar. Degisen tek sey, DEVLETLER arasi sira.
if os.environ.get("PARALEL_TEST_MOD") == "paralel":
    from concurrent.futures import ThreadPoolExecutor as _TPE
    _ISCI = int(os.environ.get("PARALEL_TEST_ISCI", "4"))
    _sira = list(enumerate(BOYALAR.items(), 1))

    def _devlet_hesapla(_arg):
        _dv_i, (did, (dad, renk)) = _arg
        hj = [j for j, y in enumerate(YERLER)
              if any(sp["d"] == did for sp in y["s"])]
        if not hj:
            return did, dad, renk, []
        ts = set()
        for j in hj:
            for sp in YERLER[j]["s"]:
                if sp["d"] == did:
                    ts.add(sp["f"]); ts.add(sp["t"])
            for dn in YERLER[j]["d"] + YERLER[j]["v"]:
                ts.add(dn["f"]); ts.add(dn["t"])
        ts2 = sorted(t for t in ts if EPOK <= t <= "1923-11-01")
        if not ts2:
            return did, dad, renk, []
        if ts2[0] != EPOK:
            ts2.insert(0, EPOK)
        if ts2[-1] != "1923-11-01":
            ts2.append("1923-11-01")
        ham = []; onceki = None
        for i in range(len(ts2) - 1):
            a, b = ts2[i], ts2[i+1]
            _dv = devir_kumesi(a)
            aktif = frozenset(j for j in hj
                              if j not in _dv
                              and any(sp["d"] == did and sp["f"] <= a < sp["t"]
                                      for sp in YERLER[j]["s"])
                              and not _osm_aktif(YERLER[j], a))
            if DOLGU_ACIK and aktif:
                _ek = _dolgu_kumesi(a).get(did)
                if _ek:
                    aktif = aktif | _ek
            if aktif == onceki and ham and aktif:
                ham[-1]["t"] = b; continue
            onceki = aktif
            if not aktif:
                continue
            _t_gv = time.time()
            g = unary_union([petek_epok(a)[j] for j in aktif])
            g = delikleri_doldur(kapat(g), sahip_ix=aktif)
            g = gosterim_duzelt(g, aktif)
            g = poligonal(g.intersection(KARA))
            if not PUAN_KAPALI and not g.is_empty:
                _pb = _puan_bolgesi(did, aktif, a)
                _onceki_alan = _ham_km2(g)
                g = poligonal(g.intersection(_pb)) if _pb is not None else Polygon()
                _PUAN_KESILEN[0] += max(0.0, _onceki_alan - _ham_km2(g))
                if g.is_empty:
                    _PUAN_TAMAMEN[0] += 1
            if g.is_empty:
                sayac("yabancı gövde geometrisi", time.time() - _t_gv)
                continue
            rp = g.representative_point()
            ham.append({"f": a, "t": b, "mp": mp_koord(g),
                        "c": [round(rp.x, 2), round(rp.y, 2)]})
            sayac("yabancı gövde geometrisi", time.time() - _t_gv)
        return did, dad, renk, ham

    print("  [SINAV] PARALEL FAZ 1 — %d is parcacigi" % _ISCI)
    with _TPE(max_workers=_ISCI) as _ex:
        _faz1 = list(_ex.map(_devlet_hesapla, _sira))
    # 🔴 NEGATIF CAPA (D010): sinav AYRISMAYI GOREBILIYOR MU?
    # PARALEL_TEST_BOZ=1 ise havuzlama sirasi KASTEN bozulur. Bu kosu
    # AYRISMALI; ayrismiyorsa sinavin dislerinin olmadigi anlasilir ve
    # "DENK" hukmu HUKUMSUZDUR.
    if os.environ.get("PARALEL_TEST_BOZ") == "1":
        _faz1 = sorted(_faz1, key=lambda r: r[0])
        print("  [SINAV] 🔴 NEGATIF CAPA — havuzlama sirasi KASTEN BOZULDU")
    print("  [SINAV] PARALEL FAZ 2 — havuzlama OZGUN SIRAYLA")
    for did, dad, renk, ham in _faz1:          # ← ÖZGÜN SIRA (map sirayi korur)
        dnm = []
        for h in ham:
            dnm.append({"f": h["f"], "t": h["t"],
                        "g": havuza(h["mp"], DEV_HALKA, DEV_HALKA_IX,
                                    DEV_PARCA, DEV_PARCA_IX),
                        "c": h["c"]})
        if dnm:
            DEVLET_KAYIT.append({"id": did, "ad": dad, "renk": renk, "dnm": dnm})
    _BOYALAR_ITER = []
elif os.environ.get("PARALEL_TEST_MOD") == "donem":
    # ═══ DONEM BASINA BOLME — uc faz ═══════════════════════════════════
    # FAZ 0 SIRALI  : donemler ve `aktif` kumeleri (motorun mantigi birebir)
    # FAZ 1 PARALEL : YALNIZ geometri, (did, a, aktif) -> halka listesi
    # FAZ 2 SIRALI  : BIRLESTIRME mantigi + havuza(), OZGUN sirayla
    # 🔴 Birlestirme karari (`aktif == onceki and dnm`) HICBIR ZAMAN
    #    paralel baglamda verilmiyor — kodun ":4443" yorumundaki endise
    #    tam olarak burada kapaniyor.
    from concurrent.futures import ThreadPoolExecutor as _TPE
    _ISCI = int(os.environ.get("PARALEL_TEST_ISCI", "4"))

    print("  [SINAV] DONEM FAZ 0 — plan kuruluyor (SIRALI)")
    _plan = []
    for _dv_i, (did, (dad, renk)) in enumerate(BOYALAR.items(), 1):
        hj = [j for j, y in enumerate(YERLER)
              if any(sp["d"] == did for sp in y["s"])]
        if not hj:
            continue
        ts = set()
        for j in hj:
            for sp in YERLER[j]["s"]:
                if sp["d"] == did:
                    ts.add(sp["f"]); ts.add(sp["t"])
            for dn in YERLER[j]["d"] + YERLER[j]["v"]:
                ts.add(dn["f"]); ts.add(dn["t"])
        ts2 = sorted(t for t in ts if EPOK <= t <= "1923-11-01")
        if not ts2:
            continue
        if ts2[0] != EPOK:
            ts2.insert(0, EPOK)
        if ts2[-1] != "1923-11-01":
            ts2.append("1923-11-01")
        _dnl = []
        for i in range(len(ts2) - 1):
            a, b = ts2[i], ts2[i+1]
            _dv = devir_kumesi(a)
            aktif = frozenset(j for j in hj
                              if j not in _dv
                              and any(sp["d"] == did and sp["f"] <= a < sp["t"]
                                      for sp in YERLER[j]["s"])
                              and not _osm_aktif(YERLER[j], a))
            if DOLGU_ACIK and aktif:
                _ek = _dolgu_kumesi(a).get(did)
                if _ek:
                    aktif = aktif | _ek
            _dnl.append((a, b, aktif))
        _plan.append((did, dad, renk, _dnl))

    # IS LISTESI = UST KUME: `aktif` bos olmayan HER donem.
    # 🔴 Daraltmak (yalniz aktif != onceki) YANLIS OLUR: `dnm` bosken motor
    #    BIRLESTIRMEZ, ayni aktif'i KENDI a'siyla yeniden hesaplar.
    _isler = []
    for _pi, (did, dad, renk, _dnl) in enumerate(_plan):
        for _di, (a, b, aktif) in enumerate(_dnl):
            if aktif:
                _isler.append((_pi, _di, did, a, aktif))

    def _donem_geo(_job):
        _pi, _di, did, a, aktif = _job
        _t_gv = time.time()
        g = unary_union([petek_epok(a)[j] for j in aktif])
        g = delikleri_doldur(kapat(g), sahip_ix=aktif)
        g = gosterim_duzelt(g, aktif)
        g = poligonal(g.intersection(KARA))
        _kes, _tam = 0.0, 0
        if not PUAN_KAPALI and not g.is_empty:
            _pb = _puan_bolgesi(did, aktif, a)
            _onc = _ham_km2(g)
            g = poligonal(g.intersection(_pb)) if _pb is not None else Polygon()
            _kes = max(0.0, _onc - _ham_km2(g))
            if g.is_empty:
                _tam = 1
        _sure = time.time() - _t_gv
        if g.is_empty:
            return (_pi, _di, None, None, _kes, _tam, _sure)
        rp = g.representative_point()
        return (_pi, _di, mp_koord(g), [round(rp.x, 2), round(rp.y, 2)],
                _kes, _tam, _sure)

    print("  [SINAV] DONEM FAZ 1 — %d is / %d is parcacigi"
          % (len(_isler), _ISCI))
    with _TPE(max_workers=_ISCI) as _ex:
        _sonuclar = list(_ex.map(_donem_geo, _isler))
    _geo_ix = {(r[0], r[1]): r for r in _sonuclar}

    print("  [SINAV] DONEM FAZ 2 — birlestirme + havuzlama OZGUN SIRAYLA")
    _ustkume, _gercek = len(_isler), 0
    for _pi, (did, dad, renk, _dnl) in enumerate(_plan):
        _sira = list(enumerate(_dnl))
        if os.environ.get("PARALEL_TEST_BOZ") == "1":
            _sira = list(reversed(_sira))      # NEGATIF CAPA: donem sirasi
        dnm = []; onceki = None
        for _di, (a, b, aktif) in _sira:
            if aktif == onceki and dnm and aktif:
                dnm[-1]["t"] = b; continue
            onceki = aktif
            if not aktif:
                continue
            r = _geo_ix[(_pi, _di)]
            _gercek += 1
            _PUAN_KESILEN[0] += r[4]
            _PUAN_TAMAMEN[0] += r[5]
            sayac("yabancı gövde geometrisi", r[6])
            if r[2] is None:
                continue
            dnm.append({"f": a, "t": b,
                        "g": havuza(r[2], DEV_HALKA, DEV_HALKA_IX,
                                    DEV_PARCA, DEV_PARCA_IX),
                        "c": r[3]})
        if dnm:
            DEVLET_KAYIT.append({"id": did, "ad": dad, "renk": renk,
                                 "dnm": dnm})
    print("  [SINAV] UST KUME %d · GERCEKTE KULLANILAN %d · BOSA GIDEN %d "
          "(%%%.1f)" % (_ustkume, _gercek, _ustkume - _gercek,
                        100.0 * (_ustkume - _gercek) / max(1, _gercek)))
    _BOYALAR_ITER = []
else:
    _BOYALAR_ITER = list(enumerate(BOYALAR.items(), 1))

for _dv_i, (did, (dad, renk)) in _BOYALAR_ITER:'''


def yama(metin, capa, yeni, ad):
    n = metin.count(capa)
    if n != 1:
        sys.exit("ENJEKSIYON %s: capa %d kez gecti (1 bekleniyordu) — COKUYORUM"
                 % (ad, n))
    return metin.replace(capa, yeni, 1)


def kopya_kur():
    os.makedirs(HEDEF_DIZIN, exist_ok=True)
    s = io.open(SRC, encoding="utf-8").read()
    s = yama(s, CAPA_YOL, YAMA_YOL, "⓪ YOL+KILIT")
    s = yama(s, CAPA_GIRDI, YAMA_GIRDI, "⓪d DONDURULMUS GIRDI")
    s = yama(s, CAPA_KOK, YAMA_KOK, "⓪b KOK")
    s = yama(s, CAPA_DAMGA, YAMA_DAMGA, "⓪c DAMGA")
    s = yama(s, CAPA_BOLGE, YAMA_BOLGE, "① BOLGE")
    s = yama(s, CAPA_YERLER, YAMA_YERLER, "② YERLER")
    s = yama(s, CAPA_CIKIS, YAMA_CIKIS, "③ HASH+CIKIS")
    s = yama(s, CAPA_DONGU, YAMA_DONGU_BAS, "④ PARALEL DONGU")
    # ---- UST YAZI: bu dosyanin NE OLDUGU ve NEREDEN geldigi ---------------
    k = kaynak_kimligi()
    ust = (
        '# ' + '=' * 74 + '\n'
        '# 🔴🔴 BU BIR SINAV KOPYASIDIR — URETIMDE KULLANILMAZ.\n'
        '#\n'
        '#   Uretilen:  ARAC-PARALEL-SINAV-0910.py  (mekanik, her kosuda YENIDEN)\n'
        '#   Kaynak  :  arac/uret_petek.py\n'
        '#   commit  :  %s\n'
        '#   kaynak sha (calisma kopyasi): %s\n'
        '#   kaynak sha (HEAD)          : %s\n'
        '#   uretildigi an: %s\n'
        '#\n'
        '#   ELLE DUZENLENMEZ — her sinav kosusunda uzerine yazilir.\n'
        '#   Dort enjeksiyon tasir: (0) yan etki kesme + YAZIM KALKANI\n'
        '#   (1) BOLGE daraltma  (2) YERLER suzme  (3) hash+cikis\n'
        '#   (4) iki fazli paralel dongu.\n'
        '#   Yazim kalkani olmadan bu dosya GERCEK DEPO DOSYALARINI EZER —\n'
        '#   olculdu: veri-kaynak/motor_kara.geojson ve data/bolgeler.js.\n'
        '# ' + '=' * 74 + '\n'
    ) % (k["commit"], k["calisma_kopyasi_sha"], k["head_sha"],
         time.strftime("%Y-%m-%d %H:%M:%S"))
    s = ust + s
    io.open(HEDEF, "w", encoding="utf-8").write(s)
    globals()["KAYNAK_KIMLIK"] = k
    globals()["KOPYA_SHA"] = hashlib.sha256(s.encode("utf-8")).hexdigest()
    print("  kaynak: %s · kopya sha256 %s" % (k["commit"], KOPYA_SHA[:16]))
    # kaynak DEGISMEDI mi — paranoyak dogrulama
    if io.open(SRC, encoding="utf-8").read() == s:
        sys.exit("KAYNAK DEGISMIS OLABILIR — DURUYORUM")
    print("kopya kuruldu: %s (%d satir)" % (HEDEF, s.count(chr(10)) + 1))


def kosu(mod, kutu, isci=4, boz=False):
    ort = dict(os.environ)
    ort["PARALEL_TEST_KOK"] = KOK
    ort["PARALEL_TEST_KUCULT"] = kutu
    ort["PARALEL_TEST_MOD"] = mod
    ort["PARALEL_TEST_ISCI"] = str(isci)
    if boz:
        ort["PARALEL_TEST_BOZ"] = "1"
    ort["PYTHONIOENCODING"] = "utf-8"
    # 🔴 LOG ADI DA KIPI TASIR: eskiden boz kosusu ayni log'u EZIYORDU ve
    #    "UST KUME" gibi satirlar HANGI kosudan geldigi belirsiz kaliyordu.
    log = os.path.join(HEDEF_DIZIN,
                       "log_%s%s.txt" % (mod, "-boz" if boz else ""))
    t0 = time.time()
    with io.open(log, "w", encoding="utf-8") as f:
        p = subprocess.run([sys.executable, HEDEF], cwd=KOK, env=ort,
                           stdout=f, stderr=subprocess.STDOUT)
    sn = time.time() - t0
    print("  %-8s kod=%d  %.1f sn  log=%s" % (mod, p.returncode, sn, log))
    return p.returncode, sn


def girdi_dondur():
    """GIRDI dosyalarinin TEK bir kopyasini alir — iki kosu da BUNDAN okur.
    Kopya alinirken girdi degisirse TEKRARLANIR (girdi.anlik_goruntu'nun
    kendi mantigi; burada kosular ARASI degisimi de kapatiyor)."""
    sys.path.insert(0, os.path.join(KOK, "arac"))
    import girdi as _g
    hedef = os.path.join(HEDEF_DIZIN, "_girdi_dondu")
    if os.path.isdir(hedef):
        shutil.rmtree(hedef)
    os.makedirs(hedef)
    dosyalar = list(_g.GIRDI_DOSYALARI) + [_g.GOL_DOSYASI]

    # PALET de dondurulur — `arac/renkler.py` (BOYALAR) canli girdidir.
    PALET = os.path.join(KOK, "arac", "renkler.py")

    def _ozet():
        h = hashlib.sha256()
        for ad in dosyalar:
            y = os.path.join(_g.DATA, ad)
            if os.path.exists(y):
                h.update(io.open(y, "rb").read())
        h.update(io.open(PALET, "rb").read())
        return h.hexdigest()

    for deneme in range(1, 6):
        once = _ozet()
        for ad in dosyalar:
            y = os.path.join(_g.DATA, ad)
            if os.path.exists(y):
                shutil.copy2(y, os.path.join(hedef, ad))
        shutil.copy2(PALET, os.path.join(hedef, "renkler.py"))
        if _ozet() == once:
            print("  girdi DONDURULDU: %d veri dosyasi + renkler.py · iz %s%s"
                  % (len(dosyalar), once[:16],
                     "" if deneme == 1 else " (%d. denemede)" % deneme))
            return hedef, once
    sys.exit("Girdi 5 denemede de durulmadi — sinav kurulamadi")


def _iz(mod):
    """Bir kosunun KUCULTME IZI — kosunun KENDI logundan, beyandan degil."""
    t = io.open(os.path.join(HEDEF_DIZIN, "log_%s.txt" % mod),
                encoding="utf-8", errors="replace").read()
    z = {}
    for satir in t.splitlines():
        if "BOLGE daraltildi" in satir:
            z["bolge"] = satir.split("->")[-1].strip()
        elif "[SINAV] YERLER" in satir:
            z["yerler"] = satir.split("YERLER")[-1].strip()
        elif "[SINAV] GIRDI IZI" in satir:
            z["girdi_izi"] = satir.split("GIRDI IZI")[-1].strip()
        elif "ETA ağırlığı hazır" in satir:
            z["eta"] = satir.strip()
    return z


def _hash(ad):
    y = os.path.join(HEDEF_DIZIN, "cikti_%s.sha256" % ad)
    return io.open(y, encoding="utf-8").read().strip() if os.path.exists(y) else None


def _dus(sonuc, mesaj, mod=None):
    print("🔴 " + mesaj)
    if mod:
        t = io.open(os.path.join(HEDEF_DIZIN, "log_%s.txt" % mod),
                    encoding="utf-8", errors="replace").read()
        print(chr(10).join(t.splitlines()[-25:]))
    io.open(os.path.join(KOK, "denetim", "PARALEL-SINAV-SONUC-0910.json"),
            "w", encoding="utf-8").write(
        json.dumps(sonuc, ensure_ascii=False, indent=1))
    sys.exit(1)


def main():
    kutu = os.environ.get("SINAV_KUTU", "26,36,45,42")
    isci = int(os.environ.get("SINAV_ISCI", "4"))
    # Hangi kipler sinanacak: "paralel" = DEVLET basina · "donem" = DONEM basina
    kipler = os.environ.get("SINAV_KIPLER", "paralel,donem").split(",")
    kipler = [k.strip() for k in kipler if k.strip()]
    print("SINAV KUTUSU: %s · isci: %d · kipler: %s"
          % (kutu, isci, ", ".join(kipler)))
    os.makedirs(HEDEF_DIZIN, exist_ok=True)
    donuk, donuk_iz = girdi_dondur()
    os.environ["PARALEL_TEST_DATA"] = donuk
    kopya_kur()

    sonuc = {"kutu": kutu, "isci": isci, "kipler": kipler,
             "dondurulmus_girdi_izi": donuk_iz,
             "kopya_sha256": globals().get("KOPYA_SHA"),
             "kaynak": globals().get("KAYNAK_KIMLIK"),
             "kosular": {}, "sha256": {}, "hukum": {}}

    for mod in ["sirali"] + kipler:
        kod, sn = kosu(mod, kutu, isci)
        sonuc["kosular"][mod] = {"kod": kod, "sn": round(sn, 1)}
        if kod != 0:
            _dus(sonuc, "%s KOSUSU DUSTU — logun sonu:" % mod, mod)
        sonuc["sha256"][mod] = _hash(mod)

    # ---- ③ ENJEKSIYON SIMETRISI — girdi HER kosuda ayni mi? ---------------
    izler = {m: _iz(m) for m in ["sirali"] + kipler}
    sonuc["kucultme_izi"] = izler
    ayni = all(izler[m] == izler["sirali"] for m in kipler)
    sonuc["kucultme_ayni"] = ayni
    print("")
    print("  ③ ENJEKSIYON SIMETRISI: girdi butun kosularda ayni mi -> %s"
          % ("EVET" if ayni else "🔴 HAYIR"))
    for k2, v2 in izler["sirali"].items():
        print("       %-11s %s" % (k2, v2))
    if not ayni:
        for m in ["sirali"] + kipler:
            print("   %-8s %s" % (m, izler[m]))
        _dus(sonuc, "A/B olcumu anlamsiz: kosular FARKLI girdi gordu.")

    print("")
    print("  sirali  %s" % sonuc["sha256"]["sirali"])
    tamam = True
    for mod in kipler:
        h = sonuc["sha256"][mod]
        denk = (h == sonuc["sha256"]["sirali"])
        print("  %-8s%s   %s" % (mod, h, "🟢 DENK" if denk else "🔴 AYRISTI"))
        if not denk:
            tamam = False
            a = io.open(os.path.join(HEDEF_DIZIN, "cikti_sirali.txt"),
                        encoding="utf-8").read()
            b = io.open(os.path.join(HEDEF_DIZIN, "cikti_%s.txt" % mod),
                        encoding="utf-8").read()
            i = 0
            while i < min(len(a), len(b)) and a[i] == b[i]:
                i += 1
            sonuc["hukum"][mod] = "AYRISTI"
            sonuc["ayrisma_" + mod] = {
                "ilk_bayt": i,
                "uzunluk": {"sirali": len(a), mod: len(b)},
                "sirali_baglam": a[max(0, i-160):i+160],
                mod + "_baglam": b[max(0, i-160):i+160]}
            print("     ilk ayrisan bayt: %d  (uzunluk %d / %d)"
                  % (i, len(a), len(b)))
            print("     sirali  …%s" % a[max(0, i-70):i+70])
            print("     %-7s …%s" % (mod, b[max(0, i-70):i+70]))

    # ---- NEGATIF CAPA: her DENK kip icin ayri ayri ------------------------
    for mod in kipler:
        if sonuc["hukum"].get(mod) == "AYRISTI":
            continue
        kod_b, sn_b = kosu(mod, kutu, isci, boz=True)
        hb = _hash(mod + "-boz") if kod_b == 0 else None
        ayristi = bool(hb and hb != sonuc["sha256"]["sirali"])
        sonuc["negatif_capa_" + mod] = {"kod": kod_b, "sn": round(sn_b, 1),
                                        "sha256": hb, "ayristi": ayristi}
        if not ayristi:
            sonuc["hukum"][mod] = "HUKUMSUZ — NEGATIF CAPA OTMEDI"
            tamam = False
            print("🔴 %s HUKUMSUZ: sira KASTEN bozuldu, hash YINE AYNI." % mod)
        else:
            sonuc["hukum"][mod] = "DENK"
            print("  %-8s negatif capa: sira bozulunca hash DEGISTI (%s…) ✓"
                  % (mod, hb[:16]))

    # ---- UST KUME MALIYETI (donem kipi) -----------------------------------
    if "donem" in kipler:
        t = io.open(os.path.join(HEDEF_DIZIN, "log_donem.txt"),
                    encoding="utf-8", errors="replace").read()
        for satir in t.splitlines():
            if "UST KUME" in satir:
                sonuc["ust_kume"] = satir.strip()
                print("  " + satir.strip())

    io.open(os.path.join(KOK, "denetim", "PARALEL-SINAV-SONUC-0910.json"),
            "w", encoding="utf-8").write(
        json.dumps(sonuc, ensure_ascii=False, indent=1))
    print("")
    print("HUKUM: %s" % sonuc["hukum"])
    print("yazildi: denetim/PARALEL-SINAV-SONUC-0910.json")
    sys.exit(0 if tamam else 1)


if __name__ == "__main__":
    main()


