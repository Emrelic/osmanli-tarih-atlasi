# -*- coding: utf-8 -*-
"""ARAC-PARALEL-UYGULAMA-SINAV-0910 — PARALEL UYGULAMA oturumunun kendi
sınavı: GERÇEK, KOMİTE EDİLMİŞ `arac/uret_petek.py`yi (ADIM 3'ün mekanik
kopyası değil — bu dosyanın KENDİSİNİ) küçük bir kutuda üç kipte koşturup
bit denkliğini ölçer.

KABUL ÖLÇÜTÜ, tek satır:
        sha256(sirali) == sha256(paralel)      · başka hiçbir şey değil
Ayrışırsa: AYRIŞAN İLK BAYT + SEBEP. "Yakındı" YOK.

NEDEN ADIM 3'ÜN ALETİNDEN (`ARAC-PARALEL-SINAV-0910.py`) AYRI:
  O alet dört enjeksiyon yapıyordu, dördüncüsü (PARALEL MOD) motorun
  KENDİSİNE değil, aletin kendi mekanik kopyasına gömülüydü — yani
  "denk" hükmü asıl committed dosyayı değil, bir PROXY'yi sınıyordu.
  PARALEL UYGULAMA artık iki-fazlı döngüyü `arac/uret_petek.py`nin
  KENDİSİNE yazdı (`MOTOR_PARALEL_KAPALI` ortam değişkeniyle iki kip
  aynı dosyada duruyor). Bu araç artık yalnız ÜÇ enjeksiyon yapar
  (BOLGE daraltma · YERLER süzme · hash+çıkış) — dördüncü enjeksiyona
  gerek YOK, çünkü paralel/sıralı ayrımı zaten gerçek kodda.
  NEGATİF ÇAPA (`PARALEL_UYG_BOZ=1`) tek ekstra enjeksiyondur ve YALNIZ
  bu sınavın KENDİ KOPYASINDA durur — gerçek dosyaya asla yazılmaz.

NASIL — ve `arac/`ye TEK KARAKTER YAZMADAN:
  `arac/uret_petek.py`nin MEKANİK BİR KOPYASI üretilir (scratch, GERÇEK
  ADIYLA DEĞİL — bkz. D095/D099 dersleri, aşağıdaki HEDEF_DIZIN notu) ve
  kopyaya enjeksiyon yapılır. Her enjeksiyonun çapası dosyada TAM BİR KEZ
  geçmelidir; geçmiyorsa alet ÇÖKER (yanlış yere yama vurmaktansa
  çökmek iyidir — D058, D182).
"""
import os, io, re, sys, json, time, shutil, subprocess, hashlib, tempfile

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SRC = os.path.join(KOK, "arac", "uret_petek.py")
# 🔴 SCRATCH DEPO AĞACININ DIŞINDA — ölçülmüş bir tuzaktan sonra taşınan
# desenin AYNISI (bkz. ARAC-PARALEL-SINAV-0910.py başlığı). Depoya HİÇ
# girmiyor.
HEDEF_DIZIN = (os.environ.get("PARALEL_UYG_SINAV_DIZIN")
               or os.path.join(tempfile.gettempdir(), "paralel_uygulama_sinav_0910"))
HEDEF = os.path.join(HEDEF_DIZIN, "_PARALEL-UYGULAMA-SINAV-MOTOR-0910.py")


def kaynak_kimligi():
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
        "calisma_kopyasi_izlenmemis_degisiklik_var_mi":
            _g(["git", "status", "--porcelain", "--", "arac/uret_petek.py"]) != "",
    }


# ---- ENJEKSIYON ⓪ — YAN ETKİ KESME + KİLİT STUB + KOK + DAMGA + YAZIM KALKANI
CAPA_YOL = 'sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))'
YAMA_YOL = '''sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
# ═══ PARALEL UYGULAMA SINAVI ⓪ — YAN ETKİ KESME ═══
_SINAV = bool(os.environ.get("PARALEL_TEST_KUCULT"))
if _SINAV:
    _SKOK = os.environ["PARALEL_TEST_KOK"]
    sys.path.insert(0, os.path.join(_SKOK, "arac"))
    if os.environ.get("PARALEL_TEST_DATA"):
        sys.path.insert(0, os.environ["PARALEL_TEST_DATA"])
    import types as _ty
    _st = _ty.ModuleType("kosu_kilit")
    _st.al = lambda *a, **k: True
    _st.birak = lambda *a, **k: None
    sys.modules["kosu_kilit"] = _st
    print("  [SINAV] kosu_kilit DEVRE DISI — uretim kilidi ALINMIYOR")
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
                    print("  [SINAV] \\U0001f6e1 YAZIM SAPTIRILDI: %s" % _p)
                    return gercek(_y, mod, *a, **k)
            return gercek(dosya, mod, *a, **k)
        return _ac

    io.open = _kalkan(_io_open)
    _bi.open = _kalkan(_bi_open)
    print("  [SINAV] \\U0001f6e1 YAZIM KALKANI ACIK — %s disina yazim YOK"
          % _SINAV_DIZIN)
    # ═══ PARALEL UYGULAMA SINAVI ⑥ — TEPE BELLEK ÖRNEKLEYİCİ (yalnız kopyada) ═══
    # BULGU-CAPRAZ-PARALEL-0910.md B2: "list() biriktirmesi kaldırıldıktan
    # SONRA tepe bellek gerçekten düştü mü" sorusu bir İDDİA değil bir ÖLÇÜM
    # istiyor. `psutil` ile 0,2 sn'de bir RSS örneklenir, en yükseği tutulur.
    if os.environ.get("PARALEL_UYG_BELLEK"):
        import threading as _th
        try:
            import psutil as _ps
            _PROC = _ps.Process()
            _PEAK_RSS = [0]
            _BELLEK_DUR = _th.Event()

            def _bellek_orneklec():
                while not _BELLEK_DUR.is_set():
                    try:
                        r = _PROC.memory_info().rss
                        if r > _PEAK_RSS[0]:
                            _PEAK_RSS[0] = r
                    except Exception:
                        pass
                    _BELLEK_DUR.wait(0.2)
            _th.Thread(target=_bellek_orneklec, daemon=True).start()
            print("  [SINAV] TEPE BELLEK ORNEKLEYICI ACIK (0,2sn)")
        except ImportError:
            _PEAK_RSS = None
            print("  [SINAV] psutil YOK — tepe bellek OLCULEMEYECEK")
    else:
        _PEAK_RSS = None
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

CAPA_GIRDI = 'import girdi'
YAMA_GIRDI = '''import girdi
# ═══ PARALEL UYGULAMA SINAVI ⓪d — DONDURULMUŞ GİRDİ ═══
if os.environ.get("PARALEL_TEST_DATA"):
    girdi.DATA = os.environ["PARALEL_TEST_DATA"]
    print("  [SINAV] GIRDI DONDURULDU ->", girdi.DATA)
'''

CAPA_BOLGE = 'BOLGE = box(-180, -60, 180, 85)'
YAMA_BOLGE = '''BOLGE = box(-180, -60, 180, 85)
# ═══ PARALEL UYGULAMA SINAVI ① — DAR PENCERE ═══
_PT = os.environ.get("PARALEL_TEST_KUCULT")
if _PT:
    _px0, _py0, _px1, _py1 = [float(v) for v in _PT.split(",")]
    BOLGE = box(_px0, _py0, _px1, _py1)
    print("  [SINAV] BOLGE daraltildi ->", BOLGE.bounds)
'''

CAPA_YERLER = 'YERLER = girdi.yukle()'
YAMA_YERLER = '''YERLER = girdi.yukle()
# ═══ PARALEL UYGULAMA SINAVI ② — AZ NOKTA / AZ DEVLET ═══
if os.environ.get("PARALEL_TEST_KUCULT"):
    _n0 = len(YERLER)
    YERLER = [_y for _y in YERLER
              if _px0 <= _y["lon"] <= _px1 and _py0 <= _y["lat"] <= _py1]
    print("  [SINAV] YERLER %d -> %d" % (_n0, len(YERLER)))
    import hashlib as _hl0
    print("  [SINAV] GIRDI IZI %s" % _hl0.sha256(json.dumps(
        YERLER, sort_keys=True, ensure_ascii=False,
        separators=(",", ":")).encode("utf-8")).hexdigest())
'''

CAPA_CIKIS = 'asama("Dönemler kuruluyor (delta yapısı)")'
YAMA_CIKIS = '''# ═══ PARALEL UYGULAMA SINAVI ③ — HASH ve CIKIS ═══
if os.environ.get("PARALEL_TEST_KUCULT"):
    import hashlib as _hl
    _mod = os.environ.get("PARALEL_TEST_MOD", "sirali")
    if os.environ.get("PARALEL_TEST_BOZ") == "1":
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
    if _PEAK_RSS is not None:
        print("  [SINAV] TEPE BELLEK (RSS) %.1f MB" % (_PEAK_RSS[0] / 1048576.0))
        io.open(_yol + ".rss_mb", "w", encoding="utf-8").write(
            "%.3f" % (_PEAK_RSS[0] / 1048576.0))
    sys.exit(0)

asama("Dönemler kuruluyor (delta yapısı)")'''

# ---- ENJEKSIYON ④ (yalnız KOPYADA, GERÇEK dosyada YOK) — NEGATİF ÇAPA ------
# 🔴 11 Eylül, SINIRLI PENCERE'ye (deque + submit/popleft) geçtikten SONRA:
# negatif çapa artık `popleft()`i `pop()`a çevirir (FIFO -> LIFO) — kuyruk
# GÖNDERİM sırasının TERSİNDEN tüketilir, `havuza()` çağrı dizisi bozulur.
# YALNIZ bu sınav kopyasında; gerçek dosyada böyle bir dallanma YOK.
CAPA_FAZ2 = 'did, dad, renk, ham, tani = _uy_kuyruk.popleft().result()'
YAMA_FAZ2 = '''if os.environ.get("PARALEL_UYG_BOZ") == "1":
                if _dv_i == 0:
                    print("  [SINAV] \\U0001f534 NEGATIF CAPA — kuyruk LIFO (pop) ile tuketiliyor")
                did, dad, renk, ham, tani = _uy_kuyruk.pop().result()
            else:
                did, dad, renk, ham, tani = _uy_kuyruk.popleft().result()'''

# ---- ENJEKSIYON ⑥ (yalnız KOPYADA) — KIYAS MODU: PENCERE = SINIRSIZ --------
# 1.MURAT'ın M-3296 kararı: pencereli çare ile eski `list(_ex.map(...))`
# biçimi AYNI TURDA, hem bellek hem duvar saati olarak kıyaslanmalı — yoksa
# "pencere B2'yi kapattı" deriz ama NE KADARA kapattığını bilmeyiz.
# Pencereyi devlet sayısından büyük bir değere açmak ALGORİTMİK OLARAK
# `list(_ex.map(...))`e eşdeğerdir: ilk doldurma döngüsü (`for _ in
# range(FAZ1_PENCERE)`) TÜM işleri baştan submit eder, `popleft()` FIFO
# sırayla tüketir — aynı tüketim kodu, aynı sıra garantisi, TEK fark
# "kaç future aynı anda açık" sorusunun cevabı. İki ayrı kod yolu
# TUTMAK yerine (ki ayrışabilirlerdi) TEK kod yolunu iki pencere
# boyutuyla koşturmak, kıyası daha güvenilir kılıyor.
CAPA_PENCERE = 'FAZ1_PENCERE = max(8 * _MOTOR_PARALEL_ISCI, 64)'
YAMA_PENCERE = '''FAZ1_PENCERE = max(8 * _MOTOR_PARALEL_ISCI, 64)
    if os.environ.get("PARALEL_UYG_LISTKIYAS") == "1":
        FAZ1_PENCERE = len(BOYALAR) + 1  # sinirsiz ~= list(map) davranisi
        print("  [SINAV] KIYAS MODU — pencere SINIRSIZ (list(map) davranisini taklit ediyor)")'''

# ---- ENJEKSIYON ⑤ (yalnız KOPYADA) — YARIŞ PENCERESİNİ GENİŞLET ------------
# 1.MURAT'ın sorusu: "FAZ 1'de bir yan etki olsaydı negatif çapa (④) onu
# yakalar mıydı?" HAYIR — ④ yalnız FAZ 2 sırasını hedefliyor. Bu enjeksiyon
# AYRI bir soruyu sınar: `_kusatilmis()`teki "kontrol et sonra yaz" deseni
# (satır ~3237-3273) GERÇEKTEN yarışa girebiliyor mu — yoksa GIL/atomiklik
# argümanı teoride mi kalıyor? `PARALEL_UYG_STRES=1` ile check ile write
# arasına gecikme sokulur; bu, aynı `g` anahtarına birden çok iş parçacığının
# ÇAKIŞMA PENCERESİNİ ölçülebilir ölçüde BÜYÜTÜR (gerçek koşuda pencere
# mikrosaniyeler, burada onda birkaç saniyeye çıkar). Sonuç yine DENK
# çıkarsa, bu "yarış var ama zararsız" iddiasını TEORİDEN ÖLÇÜME taşır.
CAPA_KUS = '''    if g in _KUS_ONBELLEK:
        return _KUS_ONBELLEK[g]
    _t_kus = time.time()'''
YAMA_KUS = '''    if g in _KUS_ONBELLEK:
        return _KUS_ONBELLEK[g]
    if os.environ.get("PARALEL_UYG_STRES"):
        time.sleep(0.05)   # ═══ SINAV ⑤ — check/write arasını genişlet ═══
    _t_kus = time.time()'''
CAPA_KUS_YAZ = '    _KUS_ONBELLEK[g] = frozenset(out)'
YAMA_KUS_YAZ = '''    if os.environ.get("PARALEL_UYG_STRES"):
        time.sleep(0.05)   # ═══ SINAV ⑤ — hesap ile yazım arasını genişlet ═══
    _KUS_ONBELLEK[g] = frozenset(out)'''


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
    s = yama(s, CAPA_FAZ2, YAMA_FAZ2, "④ NEGATIF CAPA KANCASI (yalniz kopyada)")
    s = yama(s, CAPA_PENCERE, YAMA_PENCERE, "⑥ KIYAS MODU — pencere sinirsiz (yalniz kopyada)")
    s = yama(s, CAPA_KUS, YAMA_KUS, "⑤a STRES — _kusatilmis check/write araligi")
    s = yama(s, CAPA_KUS_YAZ, YAMA_KUS_YAZ, "⑤b STRES — _kusatilmis yazim gecikmesi")
    s = yama(s, CAPA_CIKIS, YAMA_CIKIS, "③ HASH+CIKIS")
    k = kaynak_kimligi()
    ust = (
        '# ' + '=' * 74 + '\n'
        '# \U0001f534\U0001f534 BU BIR SINAV KOPYASIDIR — URETIMDE KULLANILMAZ.\n'
        '#\n'
        '#   Uretilen:  ARAC-PARALEL-UYGULAMA-SINAV-0910.py (mekanik, her kosuda YENIDEN)\n'
        '#   Kaynak  :  arac/uret_petek.py  (GERCEK, COMMITTED PARALEL KOD)\n'
        '#   commit  :  %s\n'
        '#   kaynak sha (calisma kopyasi): %s\n'
        '#   kaynak sha (HEAD)          : %s\n'
        '#   calisma kopyasinda izlenmemis degisiklik var mi: %s\n'
        '#   uretildigi an: %s\n'
        '#\n'
        '#   ELLE DUZENLENMEZ — her sinav kosusunda uzerine yazilir.\n'
        '# ' + '=' * 74 + '\n'
    ) % (k["commit"], k["calisma_kopyasi_sha"], k["head_sha"],
         k["calisma_kopyasi_izlenmemis_degisiklik_var_mi"],
         time.strftime("%Y-%m-%d %H:%M:%S"))
    s = ust + s
    io.open(HEDEF, "w", encoding="utf-8").write(s)
    globals()["KAYNAK_KIMLIK"] = k
    globals()["KOPYA_SHA"] = hashlib.sha256(s.encode("utf-8")).hexdigest()
    print("  kaynak: %s · kopya sha256 %s" % (k["commit"], KOPYA_SHA[:16]))
    if io.open(SRC, encoding="utf-8").read() == s:
        sys.exit("KAYNAK DEGISMIS OLABILIR — DURUYORUM")
    print("kopya kuruldu: %s (%d satir)" % (HEDEF, s.count(chr(10)) + 1))


def kosu(mod, kutu, isci=4, boz=False, stres=False, listkiyas=False):
    ort = dict(os.environ)
    ort["PARALEL_TEST_KOK"] = KOK
    ort["PARALEL_TEST_KUCULT"] = kutu
    ort["PARALEL_TEST_MOD"] = mod
    ort["MOTOR_PARALEL_ISCI"] = str(isci)
    if listkiyas:
        ort["PARALEL_UYG_LISTKIYAS"] = "1"   # ⑥ pencere sinirsiz — list(map) kiyasi
    else:
        ort.pop("PARALEL_UYG_LISTKIYAS", None)
    # 🔴 "sirali" kipi GERÇEK koddaki MOTOR_PARALEL_KAPALI anahtarını kullanır
    # — bu bir enjeksiyon DEĞİL, committed davranışın kendisi.
    if mod == "sirali":
        ort["MOTOR_PARALEL_KAPALI"] = "1"
    else:
        ort.pop("MOTOR_PARALEL_KAPALI", None)
    if boz:
        ort["PARALEL_UYG_BOZ"] = "1"    # FAZ 2 sırasını ters çeviren kanca (④)
        ort["PARALEL_TEST_BOZ"] = "1"   # 🔴 ÇIKTI DOSYA ADINA "-boz" ekleyen ayrı anahtar
        # (ADIM 3'ün YAMA_CIKIS'inden miras; ilk sürümde bu ikinci anahtar
        # unutulmuştu — boz koşusu "cikti_paralel.sha256"yı SESSİZCE EZDİ ve
        # `_hash("paralel-boz")` dosyayı bulamadığı için "ÖTMEDİ" sandı, oysa
        # ezilen dosyanın içeriği GERÇEKTEN FARKLIYDI (elle doğrulandı).
        # `D010`: negatif çapanın kendisi dişliydi, RAPORLAYAN kod kördü.
    else:
        ort.pop("PARALEL_UYG_BOZ", None)
        ort.pop("PARALEL_TEST_BOZ", None)
    if stres:
        ort["PARALEL_UYG_STRES"] = "1"  # ⑤ _kusatilmis check/write araligini genislet
    else:
        ort.pop("PARALEL_UYG_STRES", None)
    ort["PYTHONIOENCODING"] = "utf-8"
    log = os.path.join(HEDEF_DIZIN,
                       "log_%s%s%s%s.txt" % (mod, "-boz" if boz else "",
                                             "-stres" if stres else "",
                                             "-listkiyas" if listkiyas else ""))
    t0 = time.time()
    with io.open(log, "w", encoding="utf-8") as f:
        p = subprocess.run([sys.executable, HEDEF], cwd=KOK, env=ort,
                           stdout=f, stderr=subprocess.STDOUT)
    sn = time.time() - t0
    print("  %-8s kod=%d  %.1f sn  log=%s" % (mod + ("-boz" if boz else ""),
                                              p.returncode, sn, log))
    return p.returncode, sn


def girdi_dondur():
    sys.path.insert(0, os.path.join(KOK, "arac"))
    import girdi as _g
    hedef = os.path.join(HEDEF_DIZIN, "_girdi_dondu")
    if os.path.isdir(hedef):
        shutil.rmtree(hedef)
    os.makedirs(hedef)
    dosyalar = list(_g.GIRDI_DOSYALARI) + [_g.GOL_DOSYASI]
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
    print("\U0001f534 " + mesaj)
    if mod:
        t = io.open(os.path.join(HEDEF_DIZIN, "log_%s.txt" % mod),
                    encoding="utf-8", errors="replace").read()
        print(chr(10).join(t.splitlines()[-25:]))
    io.open(os.path.join(KOK, "denetim", "PARALEL-UYGULAMA-SINAV-SONUC-0910.json"),
            "w", encoding="utf-8").write(
        json.dumps(sonuc, ensure_ascii=False, indent=1))
    sys.exit(1)


def main():
    kutu = os.environ.get("SINAV_KUTU", "26,36,45,42")
    isci = int(os.environ.get("SINAV_ISCI", "4"))
    print("SINAV KUTUSU: %s · isci: %d" % (kutu, isci))
    os.makedirs(HEDEF_DIZIN, exist_ok=True)
    donuk, donuk_iz = girdi_dondur()
    os.environ["PARALEL_TEST_DATA"] = donuk
    kopya_kur()

    sonuc = {"kutu": kutu, "isci": isci,
             "dondurulmus_girdi_izi": donuk_iz,
             "kopya_sha256": globals().get("KOPYA_SHA"),
             "kaynak": globals().get("KAYNAK_KIMLIK"),
             "kosular": {}, "sha256": {}, "hukum": {}}

    for mod in ["sirali", "paralel"]:
        kod, sn = kosu(mod, kutu, isci)
        sonuc["kosular"][mod] = {"kod": kod, "sn": round(sn, 1)}
        if kod != 0:
            _dus(sonuc, "%s KOSUSU DUSTU — logun sonu:" % mod, mod)
        sonuc["sha256"][mod] = _hash(mod)

    izler = {m: _iz(m) for m in ["sirali", "paralel"]}
    sonuc["kucultme_izi"] = izler
    ayni = izler["paralel"] == izler["sirali"]
    sonuc["kucultme_ayni"] = ayni
    print("")
    print("  ③ ENJEKSIYON SIMETRISI: girdi iki kosuda da ayni mi -> %s"
          % ("EVET" if ayni else "\U0001f534 HAYIR"))
    for k2, v2 in izler["sirali"].items():
        print("       %-11s %s" % (k2, v2))
    if not ayni:
        for m in ["sirali", "paralel"]:
            print("   %-8s %s" % (m, izler[m]))
        _dus(sonuc, "A/B olcumu anlamsiz: kosular FARKLI girdi gordu.")

    print("")
    print("  sirali   %s" % sonuc["sha256"]["sirali"])
    h = sonuc["sha256"]["paralel"]
    denk = (h == sonuc["sha256"]["sirali"])
    print("  paralel  %s   %s" % (h, "\U0001f7e2 DENK" if denk else "\U0001f534 AYRISTI"))
    tamam = True
    if not denk:
        tamam = False
        a = io.open(os.path.join(HEDEF_DIZIN, "cikti_sirali.txt"),
                    encoding="utf-8").read()
        b = io.open(os.path.join(HEDEF_DIZIN, "cikti_paralel.txt"),
                    encoding="utf-8").read()
        i = 0
        while i < min(len(a), len(b)) and a[i] == b[i]:
            i += 1
        sonuc["hukum"]["paralel"] = "AYRISTI"
        sonuc["ayrisma_paralel"] = {
            "ilk_bayt": i, "uzunluk": {"sirali": len(a), "paralel": len(b)},
            "sirali_baglam": a[max(0, i-160):i+160],
            "paralel_baglam": b[max(0, i-160):i+160]}
        print("     ilk ayrisan bayt: %d  (uzunluk %d / %d)" % (i, len(a), len(b)))

    if not denk:
        io.open(os.path.join(KOK, "denetim", "PARALEL-UYGULAMA-SINAV-SONUC-0910.json"),
                "w", encoding="utf-8").write(json.dumps(sonuc, ensure_ascii=False, indent=1))
        print("HUKUM: AYRISTI — negatif capaya gecilmiyor")
        sys.exit(1)

    # ---- NEGATIF CAPA ------------------------------------------------------
    kod_b, sn_b = kosu("paralel", kutu, isci, boz=True)
    hb = _hash("paralel-boz") if kod_b == 0 else None
    ayristi = bool(hb and hb != sonuc["sha256"]["sirali"])
    sonuc["negatif_capa"] = {"kod": kod_b, "sn": round(sn_b, 1), "sha256": hb,
                             "ayristi": ayristi}
    if not ayristi:
        sonuc["hukum"]["paralel"] = "HUKUMSUZ — NEGATIF CAPA OTMEDI"
        tamam = False
        print("\U0001f534 HUKUMSUZ: FAZ 2 sirasi KASTEN bozuldu, hash YINE AYNI.")
    else:
        sonuc["hukum"]["paralel"] = "DENK"
        print("  negatif capa: sira bozulunca hash DEGISTI (%s…) ✓" % hb[:16])

    io.open(os.path.join(KOK, "denetim", "PARALEL-UYGULAMA-SINAV-SONUC-0910.json"),
            "w", encoding="utf-8").write(
        json.dumps(sonuc, ensure_ascii=False, indent=1))
    print("")
    print("HUKUM: %s" % sonuc["hukum"])
    print("yazildi: denetim/PARALEL-UYGULAMA-SINAV-SONUC-0910.json")
    sys.exit(0 if tamam else 1)


if __name__ == "__main__":
    main()
