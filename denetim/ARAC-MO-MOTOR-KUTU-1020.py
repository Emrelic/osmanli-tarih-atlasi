# -*- coding: utf-8 -*-
"""MO-MOTOR-1020 — MÖ KATMANI DAR KUTU SINAVI (tam koşu DEĞİL; motoru DEĞİŞTİRMEZ).

🔴 KOŞU SÜRERKEN KOŞTURULMAZ (ağır süreç). Örnek: denetim/ARAC-KOMSU-KUR-BOL-KUTU-1016.py.
Ağaç: bu dosyanın bulunduğu worktree. `kos` kesit kaynağını `arac/motor_esitlik.kesit_uret` ile kurar
(BOLGE = box(kutu)), senaryo noktalarını belleğe ekler (girdi dosyası DEĞİŞMEZ), motoru TEK süreçte koşar
ve kesit günlerinde `petek_epok(g)` ölçümünü JSON'a yazar.

  kos --kutu x0,y0,x1,y1 --ad AD --varyant eski|yeni --onb DIZIN [--ortam K=V;K=V]
        [--hizli] [--senaryo-yok] [--sakla] [--ayikla]
        eski = git HEAD'deki uret_petek.py (MÖ yamasız taban)   yeni = diskteki (yamalı)
        --hizli      ölçümü "Varlık epokları" aşamasından hemen sonra alıp çıkar (~2-3 dk; dönem/gövde YOK)
        --senaryo-yok sentetik MÖ noktalarını eklemez (yalnız CE eşitliği için; ce_hash yine yazılır)
        --sakla      üretilen donemler/devletler_harita/ufuk_bantlari/petek_govde dosyalarını çıktı dizinine kopyalar
        --ayikla     'bizans' gövdesini MÖ günlerinde adım adım (birleşim→kapat→kıyı→puan→komşu) dökümler
  kiyas A B  iki koşunun CE epok özeti (16 gün) bit bit eşit mi
  ozet AD [AD...]      ölçüm JSON'larını yan yana basar

Senaryo (SENARYO_NOKTALAR): Doğu Akdeniz–Mezopotamya kutusunda MÖ 11999→MS 500 arasında GERÇEK
arkeoloji adlı 14 SENTETİK nokta (konumlar yaklaşık; MOTORU SINAMAK içindir, veri DEĞİLDİR, yazılmaz).
Sahip kimliği kasıtlı tek ("bizans"): ölçülen şey boya değil petek/alan.
"""
import argparse, datetime, io, json, os, subprocess, sys, time, hashlib

sys.stdout.reconfigure(encoding="utf-8", errors="replace", line_buffering=True)
AG = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(AG, "arac"))
SCR = os.environ.get("MOMOTOR_SCR", r"C:\Users\user\AppData\Local\Temp\claude\C--atlas--claude-worktrees-reverent-brattain-39d549"
                     r"\319e875f-07e2-43d5-8b62-cf7cf851dad4\scratchpad")
CIKTI_KOK = os.path.join(SCR, "mo-kutu")
URETILEN_IZLI = ["data/bolgeler.js", "data/devirler.js", "veri-kaynak/motor_kara.geojson"]
URETILEN_IZSIZ = ["data/donemler.js", "data/devletler_harita.js", "data/petek_govde.js",
                  "data/ufuk_bantlari.js", "data/dolgu.js", ".uretim-basladi"]

# (ad, lat, lon, kur, bit, k) — SENTETİK; k=0 (derecesiz) çoğunlukta, biri k=4 (kural sınavı)
SENARYO_NOKTALAR = [
    ("T-Ain Mallaha",   33.0450, 35.6080, "-11999-01-01", "-8999-01-01", 0),
    ("T-Jericho",       31.8710, 35.4430, "-9999-01-01",  "-5999-01-01", 0),
    ("T-Abu Hureyra",   35.8660, 38.4000, "-10999-01-01", "-6999-01-01", 0),
    ("T-Gobekli Tepe",  37.2230, 38.9220, "-9528-01-01",  "-7999-01-01", 0),
    ("T-Cayonu",        38.2100, 40.4000, "-8499-01-01",  "-6499-01-01", 0),
    ("T-Catalhoyuk",    37.6670, 32.8280, "-7099-01-01",  "-5399-01-01", 0),
    ("T-Jarmo",         35.5500, 44.9500, "-7099-01-01",  "-5499-01-01", 0),
    ("T-Eridu",         30.8150, 45.9960, "-5399-01-01",  "-0549-01-01", 0),
    ("T-Uruk",          31.3220, 45.6360, "-4999-01-01",  "0300-01-01",  0),
    ("T-Ugarit",        35.6020, 35.7820, "-5999-01-01",  "-1189-01-01", 0),
    ("T-Hattusa",       40.0200, 34.6150, "-2999-01-01",  "-0549-01-01", 0),
    ("T-Antiokheia",    36.2020, 36.1600, "-0299-01-01",  "1300-01-01",  0),
    ("T-Ktesiphon",     33.0940, 44.5810, "-0149-01-01",  "0700-01-01",  0),
    ("T-Cayonu-koy(k4)", 38.3000, 40.5000, "-8499-01-01", "-6499-01-01", 4),
]
SENARYO_GUNLER = [("MO9500", "-9499-06-15"), ("MO6000", "-5999-06-15"), ("MO3000", "-2999-06-15"),
                  ("MO1000", "-0999-06-15"), ("MS500", "0500-06-15"),
                  ("CE1300", "1300-06-15"), ("CE1500", "1500-06-15"), ("CE1700", "1700-06-15"),
                  ("CE1900", "1900-06-15")]

ENJEKSIYON = r'''
# ════ MO-MOTOR-1020 SENARYOSU (bellekte; girdi dosyası değişmez) ════
import copy as _cp_mo
_SEN_MO = __SENARYO__
_sablon = [y for y in YERLER if y["ad"].startswith("Girsu")][0]
for _ad, _lat, _lon, _kur, _bit, _k in _SEN_MO:
    _y = _cp_mo.deepcopy(_sablon)
    _y.update({"ad": _ad, "lat": _lat, "lon": _lon, "kur": _kur, "bit": _bit, "k": _k,
               "s": [{"f": _kur, "t": _bit, "d": "bizans"}], "d": [], "v": [], "m": None})
    YERLER.append(_y)
print("  🧪 MO SENARYOSU: %d sentetik nokta eklendi" % len(_SEN_MO))
'''

OLCUM = r'''
# ════ MO-MOTOR-1020 ÖLÇÜMÜ (koşu sonunda; petek_epok önbelleği sıcak) ════
import json as _js_o
import hashlib as _hl_o
_olc = {"gunler": {}, "kara_km2": None}
_CE_GUNLER = ["1281-01-01", "1300-06-15", "1326-04-06", "1362-06-15", "1402-07-28", "1453-05-29",
              "1517-01-22", "1526-08-29", "1571-10-07", "1683-09-12", "1718-07-21", "1774-07-21",
              "1829-09-14", "1878-03-03", "1914-11-02", "1923-10-29"]
_olc["ce_hash"] = {}
for _g in _CE_GUNLER:
    try:
        _dv = devir_kumesi(_g)
        _pe = petek_epok(_g)
        _h = _hl_o.sha1()
        _h.update(repr(sorted(_dv)).encode())
        for _p in _pe:
            _h.update(b"|" + (_p.wkb if (_p is not None and not _p.is_empty) else b"-"))
        _olc["ce_hash"][_g] = [len(_dv), _h.hexdigest()[:16]]
    except Exception as _x:
        _olc["ce_hash"][_g] = ["HATA", "%s: %s" % (type(_x).__name__, _x)]
try:
    _olc["kara_km2"] = round(_ham_km2(KARA.intersection(BOLGE)))
except Exception as _x:
    _olc["kara_hata"] = str(_x)
for _etiket, _g in __GUNLER__:
    try:
        _t0 = time.time()
        _pe = petek_epok(_g)
        _sn = round(time.time() - _t0, 2)
        _dv = devir_kumesi(_g)
        _sah = [i for i in range(len(YERLER)) if i not in _dv]
        _alan = {YERLER[i]["ad"]: round(_ham_km2(_pe[i])) for i in _sah
                 if _pe[i] is not None and not _pe[i].is_empty}
        _tohum = [YERLER[i]["ad"] for i in _sah if YERLER[i]["ad"].startswith("T-")]
        _pay = (_VARLIK_PAY.get(("MO", _dv)) or _VARLIK_PAY.get(_dv) or {})
        _olc["gunler"][_etiket] = {
            "gun": _g, "sahne": len(_sah), "sahne_T": len(_tohum),
            "petek_sayisi": len(_alan), "toplam_km2": sum(_alan.values()),
            "en_buyuk_km2": max(_alan.values()) if _alan else 0,
            "en_buyuk_ad": max(_alan, key=_alan.get) if _alan else None,
            "T_alan": {a: v for a, v in _alan.items() if a.startswith("T-")},
            "T_toplam_km2": sum(v for a, v in _alan.items() if a.startswith("T-")),
            "devir_sayisi": len(_dv), "petek_epok_sn": _sn,
            "pay": {k: (round(v) if isinstance(v, float) else v) for k, v in _pay.items()}}
    except SystemExit as _x:
        _olc["gunler"][_etiket] = {"gun": _g, "hata": "SystemExit: %s" % _x}
    except Exception as _x:
        _olc["gunler"][_etiket] = {"gun": _g, "hata": "%s: %s" % (type(_x).__name__, _x)}
with open(os.environ["MO_OLC_YOL"], "w", encoding="utf-8") as _f:
    _js_o.dump(_olc, _f, ensure_ascii=False, indent=1)
print("  🧪 MO ÖLÇÜMÜ yazıldı:", os.environ["MO_OLC_YOL"])
'''


HATA_AYIKLA = r'''
# ════ MO-MOTOR-1020 HATA AYIKLAMA: 'bizans' gövdesi MÖ günlerinde adım adım ════
_dbg = []
for _a in __GUNLER__:
    _dv = devir_kumesi(_a)
    _hj = [j for j, y in enumerate(YERLER) if any(sp["d"] == "bizans" for sp in y["s"])]
    _ak = frozenset(j for j in _hj if j not in _dv
                    and any(sp["d"] == "bizans" and gn(sp["f"]) <= gn(_a) < gn(sp["t"]) for sp in YERLER[j]["s"])
                    and not _osm_aktif(YERLER[j], _a))
    _s = {"gun": _a, "aktif": sorted(YERLER[j]["ad"] for j in _ak)}
    try:
        _pe = petek_epok(_a)
        _g = unary_union([_pe[j] for j in _ak]) if _ak else Polygon()
        _s["1_petek_birlesim_km2"] = round(_ham_km2(_g))
        _g = delikleri_doldur(kapat(_g, engel=_kapat_engel(_ak, _a)), sahip_ix=_ak)
        _s["2_kapat_doldur_km2"] = round(_ham_km2(_g))
        _g = gosterim_duzelt(_g, _ak)
        _s["3_gosterim_km2"] = round(_ham_km2(_g))
        _g = poligonal(_g.intersection(KARA))
        _s["4_kara_km2"] = round(_ham_km2(_g))
        _pb = _puan_bolgesi("bizans", _ak, _a)
        _s["5_puan_bolgesi_km2"] = None if _pb is None else round(_ham_km2(_pb))
        _g = poligonal(_g.intersection(_pb)) if _pb is not None else Polygon()
        _s["6_puan_sonrasi_km2"] = round(_ham_km2(_g))
        _g = _komsu_toprak_cikar("bizans", _ak, _a, _g)
        _s["7_komsu_cikar_km2"] = round(_ham_km2(_g)) if _g is not None else None
    except Exception as _x:
        _s["hata"] = "%s: %s" % (type(_x).__name__, _x)
    _dbg.append(_s)
import json as _js_d
with open(os.environ["MO_OLC_YOL"] + ".ayikla.json", "w", encoding="utf-8") as _f:
    _js_d.dump(_dbg, _f, ensure_ascii=False, indent=1)
sys.exit(0)
'''


DUNYA_OLC = r'''
# ════ MO-MOTOR-1020 DÜNYA ÖLÇEĞİ: tek epok / dolgu / gövde süresi + RAM (tüm yerleşimler) ════
import psutil as _ps_d, json as _js_d2
_pr = _ps_d.Process()
_zirve = lambda: round(_pr.memory_info().peak_wset / 2**30, 2)
_dun = {"baslangic_zirve_gb": _zirve(), "nokta": len(YERLER), "olcum": []}
for _et, _a in __GUNLER__:
    _o = {"etiket": _et, "gun": _a, "oncesi_rss_gb": round(_pr.memory_info().rss / 2**30, 2), "oncesi_zirve_gb": _zirve()}
    try:
        _t0 = time.time(); _dv = devir_kumesi(_a); _o["devir_sn"] = round(time.time() - _t0, 2); _o["devir_n"] = len(_dv)
        import cProfile as _cpf, pstats as _pst, io as _io_p
        _prof = _cpf.Profile(); _t0 = time.time(); _prof.enable(); _pe = petek_epok(_a); _prof.disable()
        _o["petek_epok_sn"] = round(time.time() - _t0, 2)
        _sio = _io_p.StringIO(); _pst.Stats(_prof, stream=_sio).sort_stats("cumulative").print_stats(28)
        with open(os.environ["MO_OLC_YOL"] + ".prof_" + _et + ".txt", "w", encoding="utf-8") as _pf:
            _pf.write(_sio.getvalue())
        _o["epok_sonrasi_zirve_gb"] = _zirve(); _o["epok_sonrasi_rss_gb"] = round(_pr.memory_info().rss / 2**30, 2)
        _o["petek_n"] = sum(1 for i in range(len(YERLER)) if i not in _dv and _pe[i] is not None and not _pe[i].is_empty)
        _t0 = time.time(); _dk = _dolgu_kumesi(_a); _o["dolgu_kumesi_sn"] = round(time.time() - _t0, 2)
        _o["dolgu_devlet_n"] = len(_dk); _o["dolgu_nokta_n"] = sum(len(v) for v in _dk.values())
        _o["dolgu_sonrasi_zirve_gb"] = _zirve()
        _ak = frozenset(j for j, y in enumerate(YERLER) if j not in _dv and any(sp["d"] == "bizans" and gn(sp["f"]) <= gn(_a) < gn(sp["t"]) for sp in y["s"]))
        if _ak:
            _t0 = time.time(); _g, _k, _t = _yabanci_govde_hesap("bizans", _ak, _a, sorted(_ak)); _o["govde_sn"] = round(time.time() - _t0, 2)
            _o["govde_km2"] = round(_ham_km2(_g)); _o["govde_zirve_gb"] = _zirve()
    except BaseException as _x:
        _o["hata"] = "%s: %s" % (type(_x).__name__, _x)
    _dun["olcum"].append(_o)
    print("  🌍", _o, flush=True)
_dun["son_zirve_gb"] = _zirve()
with open(os.environ["MO_OLC_YOL"] + ".dunya.json", "w", encoding="utf-8") as _f:
    _js_d2.dump(_dun, _f, ensure_ascii=False, indent=1)
sys.exit(0)
'''


KARSILASTIR = r'''
# ════ MO-MOTOR-1020: pencereli epok devri ↔ tam epok devri (aynı süreçte, hücre hücre) ════
import json as _js_k
_kar = []
for _et, _a in __GUNLER__:
    _dv = devir_kumesi(_a)
    _sahne = [i for i in range(len(YERLER)) if i not in _dv]
    _b = MO_SAAT * NEHIR_KM_SAAT
    _t0 = time.time(); _D0, _Y0 = _yr_epok_onar(frozenset(_dv), _b, None); _s0 = round(time.time() - _t0, 1)
    _t0 = time.time(); _D1, _Y1 = _yr_epok_onar(frozenset(_dv), _b, _sahne); _s1 = round(time.time() - _t0, 1)
    _m0 = dict(zip(_D0.tolist(), _Y0.tolist())); _m1 = dict(zip(_D1.tolist(), _Y1.tolist()))
    _ulas0 = {h for h, y in _m0.items() if y >= 0}; _ulas1 = {h for h, y in _m1.items() if y >= 0}
    _fark = [h for h in _ulas0 | _ulas1 if _m0.get(h, -9) != _m1.get(h, -9)]
    _ornek = []
    for h in _fark[:6]:
        j, i = divmod(h, _kvnx)
        _ornek.append({"lat": round(_kvy0 + (j + .5) * KV_ADIM, 2), "lon": round(_kvx0 + (i + .5) * KV_ADIM, 2),
                       "tam": _m0.get(h), "pencere": _m1.get(h), "pencerede_mi": h in _m1})
    _kar.append({"etiket": _et, "D_tam": int(_D0.size), "D_pencere": int(_D1.size), "ulasilan_tam": len(_ulas0),
                 "ulasilan_pencere": len(_ulas1), "fark_hucre": len(_fark), "sn_tam": _s0, "sn_pencere": _s1, "ornek": _ornek})
    print("  🔬", _kar[-1], flush=True)
with open(os.environ["MO_OLC_YOL"] + ".karsilastir.json", "w", encoding="utf-8") as _f:
    _js_k.dump(_kar, _f, ensure_ascii=False, indent=1)
sys.exit(0)
'''


def sha(yol):
    h = hashlib.sha256()
    with open(yol, "rb") as f:
        for b in iter(lambda: f.read(1 << 20), b""):
            h.update(b)
    return h.hexdigest()


def kos(a):
    import motor_esitlik as me
    motor = os.path.join(AG, "arac", "uret_petek.py")
    cikti = os.path.join(CIKTI_KOK, a.ad)
    if os.path.exists(os.path.join(cikti, "meta.json")):
        raise SystemExit(f"{cikti} zaten var")
    os.makedirs(cikti, exist_ok=True)
    subprocess.run(["git", "-C", AG, "checkout", "--"] + URETILEN_IZLI, check=True)
    for u in URETILEN_IZSIZ:
        y = os.path.join(AG, u)
        if os.path.exists(y):
            os.remove(y)
    if a.varyant == "eski":
        kaynak = os.path.join(cikti, "_eski_uret_petek.py")
        with open(kaynak, "wb") as f:
            f.write(subprocess.run(["git", "-C", AG, "show", "HEAD:arac/uret_petek.py"],
                                   capture_output=True, check=True).stdout)
    else:
        kaynak = motor
    src = me.kesit_uret(kaynak, a.kutu, None)
    isaret = "YERLER = girdi.yukle()\n"
    if src.count(isaret) != 1:
        raise SystemExit("YERLER yükleme işareti 1 kez yok")
    olcum = OLCUM.replace("__GUNLER__", repr(SENARYO_GUNLER if not a.senaryo_yok else []))
    if not a.senaryo_yok:
        src = src.replace(isaret, isaret + ENJEKSIYON.replace("__SENARYO__", repr(SENARYO_NOKTALAR)))
    if a.karsilastir:
        anc = '_MOTOR_PARALEL_ISCI = int(os.environ.get("MOTOR_PARALEL_ISCI", "4"))\n'
        if src.count(anc) != 1:
            raise SystemExit("karşılaştır çapası 1 kez yok")
        src = src.replace(anc, KARSILASTIR.replace("__GUNLER__", repr(
            [("MO9500", "-9499-06-15"), ("MO6000", "-5999-06-15"), ("MS500", "0500-06-15")])) + "\n" + anc)
    elif a.dunya_olc:
        anc = '_MOTOR_PARALEL_ISCI = int(os.environ.get("MOTOR_PARALEL_ISCI", "4"))\n'
        if src.count(anc) != 1:
            raise SystemExit("dünya çapası 1 kez yok")
        src = src.replace(anc, DUNYA_OLC.replace("__GUNLER__", repr(
            [("MO9500", "-9499-06-15"), ("MO3000", "-2999-06-15"), ("MS500", "0500-06-15"),
             ("MS1100", "1100-06-15"), ("CE1500", "1500-06-15")])) + "\n" + anc)
    elif a.ayikla:
        anc = '_MOTOR_PARALEL_ISCI = int(os.environ.get("MOTOR_PARALEL_ISCI", "4"))\n'
        if src.count(anc) != 1:
            raise SystemExit("ayıkla çapası 1 kez yok")
        src = src.replace(anc, HATA_AYIKLA.replace("__GUNLER__", repr(
            ["-11999-01-01", "-9528-01-01", "-6999-01-01", "-6499-01-01", "-5999-01-01",
             "-1189-01-01", "-0999-06-15", "-0299-01-01"])) + "\n" + anc)
    elif a.hizli:
        # Ölçüm "Varlık epokları" aşamasından HEMEN SONRA alınır ve süreç çıkar (petek_epok yalnız
        # petek + epok kümesinin işlevi; sonraki gövde/dönem aşamaları bu ölçümün girdisi DEĞİL).
        anc = "# ⚠️ KUŞATILMIŞLIK DEVİRLERİ ADIYLA VE EPOKUYLA YAZILIR"
        if src.count(anc) != 1:
            raise SystemExit("hızlı kip çapası 1 kez yok")
        src = src.replace(anc, olcum + "\nsys.exit(0)\n" + anc)
    else:
        src = src + "\n" + olcum
    kesit = os.path.join(AG, "arac", "_sinav_kesit.py")
    with io.open(kesit, "w", encoding="utf-8", newline="\n") as f:
        f.write(f"__file__ = {motor!r}\n" + src)
    env = {k: v for k, v in os.environ.items() if not k.startswith("MOTOR_")}
    env.update({"MOTOR_YURUYUS": "1", "MOTOR_YURUYUS_SAAT": "40", "MOTOR_UFUK_BANT": "40,56,80",
                "MOTOR_COL_UFUK_SAAT": "0", "MOTOR_COL_GIRINTI_KAPALI": "1",
                "MOTOR_SUREC_ISCI": "1", "MOTOR_PARALEL_ISCI": str(a.isci),
                "MOTOR_EGIM_AB_KAPALI": "1", "MOTOR_NEHIR_AB_KAPALI": "1",
                "MOTOR_ONBELLEK_DIZIN": os.path.abspath(a.onb),
                "MOTOR_CANLI_LOG": os.path.join(cikti, "canli.log"),
                "MO_OLC_YOL": os.path.join(cikti, "olcum.json"),
                "PYTHONPATH": os.path.join(AG, "arac"), "PYTHONIOENCODING": "utf-8"})
    for kv in (a.ortam or "").split(";"):
        if kv.strip():
            k_, v_ = kv.split("=", 1)
            env[k_.strip()] = v_.strip()
    os.makedirs(a.onb, exist_ok=True)
    meta = {"ad": a.ad, "kutu": a.kutu, "varyant": a.varyant,
            "kaynak_sha256": sha(kaynak), "disk_motor_sha256": sha(motor),
            "ag_head": subprocess.run(["git", "-C", AG, "rev-parse", "HEAD"],
                                      capture_output=True, text=True).stdout.strip(),
            "ortam": {k: v for k, v in env.items() if k.startswith("MOTOR_")},
            "basla": datetime.datetime.now().isoformat(timespec="seconds")}
    t0 = time.time()
    with open(os.path.join(cikti, "motor.log"), "w", encoding="utf-8") as lg:
        r = subprocess.run([sys.executable, "-u", kesit], cwd=AG, env=env, stdout=lg,
                           stderr=subprocess.STDOUT,
                           creationflags=0x4000 if os.name == "nt" else 0)   # BELOW_NORMAL
    meta["motor_kod"], meta["motor_sn"] = r.returncode, round(time.time() - t0)
    if r.returncode == 0 and a.senaryo_yok:
        # CE eşitlik sınavı: üretilen çıktıların sha256'sı (kiyas bunları okur)
        meta["sha256"] = {}
        for u in ("data/donemler.js", "data/devletler_harita.js", "data/petek_govde.js", "data/bolgeler.js"):
            y = os.path.join(AG, u)
            if os.path.exists(y):
                meta["sha256"][os.path.basename(u)] = sha(y)
    meta["bitis"] = datetime.datetime.now().isoformat(timespec="seconds")
    with open(os.path.join(cikti, "meta.json"), "w", encoding="utf-8") as f:
        json.dump(meta, f, ensure_ascii=False, indent=1)
    os.remove(kesit)
    if a.sakla:
        import shutil
        for u in ("data/donemler.js", "data/devletler_harita.js", "data/ufuk_bantlari.js", "data/petek_govde.js"):
            y = os.path.join(AG, u)
            if os.path.exists(y):
                shutil.copy2(y, os.path.join(cikti, os.path.basename(u)))
    # üretilen dosyaları ağaçta BIRAKMA (ana kural: ağaç temiz)
    subprocess.run(["git", "-C", AG, "checkout", "--"] + URETILEN_IZLI, check=False)
    for u in URETILEN_IZSIZ:
        y = os.path.join(AG, u)
        if os.path.exists(y):
            os.remove(y)
    print(f"KOŞU {a.ad} ({a.varyant}) · motor kod {r.returncode} · {meta['motor_sn']} sn · {cikti}")
    return 0 if r.returncode == 0 else 1


def ozet(a):
    for ad in a.adlar:
        yol = os.path.join(CIKTI_KOK, ad, "olcum.json")
        if not os.path.exists(yol):
            print(f"== {ad}: ölçüm YOK ({yol})")
            continue
        o = json.load(open(yol, encoding="utf-8"))
        meta = json.load(open(os.path.join(CIKTI_KOK, ad, "meta.json"), encoding="utf-8"))
        print(f"== {ad} ({meta['varyant']}) · {meta['motor_sn']} sn · kutu karası {o.get('kara_km2'):,} km²")
        for et, v in o["gunler"].items():
            if "hata" in v:
                print(f"   {et:7s} HATA {v['hata']}")
                continue
            kara = o.get("kara_km2") or 1
            print(f"   {et:7s} sahne {v['sahne']:4d} (T:{v['sahne_T']:2d}) · petek {v['petek_sayisi']:4d} · "
                  f"toplam {v['toplam_km2']:>10,} km² (%{100*v['toplam_km2']/kara:5.1f}) · "
                  f"T-toplam {v['T_toplam_km2']:>9,} · en büyük {v['en_buyuk_km2']:>9,} ({v['en_buyuk_ad']})")
    return 0


def kiyas(a):
    """İki koşunun üretilen dosya özetleri bit bit eşit mi (CE eşitlik sınavı)."""
    o = []
    for ad in (a.a, a.b):
        y = os.path.join(CIKTI_KOK, ad, "olcum.json")
        o.append(json.load(open(y, encoding="utf-8")).get("ce_hash") if os.path.exists(y) else None)
    if o[0] and o[1]:
        # CE epok özeti: devir kümesi boyutu + (devir kümesi, her petek WKB'si) SHA-1'i, 16 CE günü
        fark = [g for g in sorted(set(o[0]) | set(o[1])) if o[0].get(g) != o[1].get(g)]
        for g in sorted(set(o[0]) | set(o[1])):
            print("  %s  %-6s  devir %s  %s" % (g, "AYNI" if g not in fark else "FARKLI",
                                              (o[0].get(g) or ["—"])[0], (o[0].get(g) or ["", "—"])[1]))
        print("→", "CE EPOK ÇIKTILARI BİT BİT EŞİT (%d gün)" % len(o[0]) if not fark else "FARKLI: " + ", ".join(fark))
        return 0 if not fark else 1
    m = [json.load(open(os.path.join(CIKTI_KOK, ad, "meta.json"), encoding="utf-8")) for ad in (a.a, a.b)]
    sa, sb = m[0].get("sha256") or {}, m[1].get("sha256") or {}
    if not sa or not sb:
        print("✗ ÖLÇÜLEMEDİ: sha256 yok (koşu --senaryo-yok ile bitmemiş)")
        return 2
    fark = [k for k in sorted(set(sa) | set(sb)) if sa.get(k) != sb.get(k)]
    for k in sorted(set(sa) | set(sb)):
        print("  %-22s %s  %s" % (k, "AYNI" if k not in fark else "FARKLI", (sa.get(k) or "—")[:12]))
    print("→", "BİT BİT EŞİT" if not fark else "FARKLI: " + ", ".join(fark))
    return 0 if not fark else 1


def main():
    ap = argparse.ArgumentParser()
    sp = ap.add_subparsers(dest="komut", required=True)
    kk = sp.add_parser("kiyas")
    kk.add_argument("a")
    kk.add_argument("b")
    k = sp.add_parser("kos")
    k.add_argument("--senaryo-yok", action="store_true", dest="senaryo_yok")
    k.add_argument("--hizli", action="store_true")
    k.add_argument("--ayikla", action="store_true")
    k.add_argument("--dunya-olc", action="store_true", dest="dunya_olc")
    k.add_argument("--karsilastir", action="store_true")
    k.add_argument("--sakla", action="store_true")
    k.add_argument("--kutu", required=True)
    k.add_argument("--ad", required=True)
    k.add_argument("--varyant", choices=["eski", "yeni"], required=True)
    k.add_argument("--onb", required=True)
    k.add_argument("--isci", default="1")
    k.add_argument("--ortam", default="")
    o = sp.add_parser("ozet")
    o.add_argument("adlar", nargs="+")
    a = ap.parse_args()
    return {"kos": kos, "ozet": ozet, "kiyas": kiyas}[a.komut](a)


if __name__ == "__main__":
    sys.exit(main())
