# -*- coding: utf-8 -*-
"""motor_esitlik.py — MOTOR-SINAV'ın bağımsız sınav aracı (19 Eylül 2026).

Mimari: oturumlar/MOTOR-LEGO.md · şartname: oturumlar/MOTOR-SINAV.md.
Bu araç motoru (arac/uret_petek.py) DEĞİŞTİRMEZ; çıktısını ölçer.

Alt komutlar
  kiyas A B               iki koşu çıktı klasörü: donemler.js · devletler_harita.js ·
                          bolgeler.js · devirler.js için sha256 + İLK FARKIN YERİ
                          (epok, devlet, koordinat). Çıkış kodu: 0 = BİT BİT AYNI.
  kos --kutu x0,y0,x1,y1 --ad AD [--senaryo S.json] [--ag WORKTREE]
                          motoru DAR KUTUDA sıfırdan koşturur (önbellek KAPALI,
                          bayrak kapalı), çıktıyı + aşama dökümlerini
                          <ag>-cikti/<AD>/ altına kopyalar, devirler.js'i üretir.
                          Motor metninde yalnız İKİ yama: `BOLGE = box(...)` ve
                          aşama sınırında salt-okur döküm kancası (+ varsa senaryo).
  etki A B --nokta lon,lat [--json yol]
                          ETKİ YARIÇAPI: iki koşunun gövdelerini (Osmanlı o/v/h,
                          yabancı dnm, bölgeler) ZAMAN × DEVLET boyunca çözüp farkı
                          ölçer; aşama dökümlerinden (PETEK/PETEK_D/ızgara) hangi
                          aşamada kaç petek, kaç km öteye kadar değişti.

Senaryo JSON (liste; YERLER girdi.yukle()'den HEMEN sonra, bellekte uygulanır —
girdi dosyası değişmez):
  {"kopya": "<ad>", "ad": "<yeni ad>", "dlon": .., "dlat": ..}   nokta ekle (sahiplik kopya)
  {"sahip": "<ad>", "i": <s: indeksi>, "d": "<devlet id>"}         bir dönemin sahibini değiştir
  {"kaydir": "<ad>", "alan": "d"|"s"|"v", "i": <indeks>, "gun": N}
        o dönemin f'sini N gün kaydırır; aynı kaydın t'si eski f'ye eşit olan
        dönemi de birlikte kaydırır (süreklilik korunur, delik açılmaz).
"""
import argparse, datetime, hashlib, io, json, math, os, re, shutil, subprocess, sys, time

CIKTILAR = ("donemler.js", "devletler_harita.js", "bolgeler.js", "devirler.js")


# ═════════════════════════════ ortak ═════════════════════════════
def sha(yol):
    h = hashlib.sha256()
    with open(yol, "rb") as f:
        for b in iter(lambda: f.read(1 << 20), b""):
            h.update(b)
    return h.hexdigest()


def js_oku(yol):
    """`window.X = <json>;` satırlarını sözlüğe çevirir (motor çıktısı JSON'dur)."""
    t = io.open(yol, encoding="utf-8").read()
    d = {}
    for m in re.finditer(r"^window\.(\w+)\s*=\s*", t, re.M):
        s = m.end()
        e = t.find(";\n", s)
        if e < 0:
            e = len(t.rstrip().rstrip(";"))
        try:
            d[m.group(1)] = json.loads(t[s:e])
        except ValueError as x:
            raise SystemExit(f"{yol}: window.{m.group(1)} JSON değil ({x})")
    return d


def km(lon1, lat1, lon2, lat2):
    p = math.pi / 180
    a = (math.sin((lat2 - lat1) * p / 2) ** 2
         + math.cos(lat1 * p) * math.cos(lat2 * p) * math.sin((lon2 - lon1) * p / 2) ** 2)
    return 2 * 6371.0088 * math.asin(min(1.0, math.sqrt(a)))


def coz(dizi, havuz, halka):
    """app.js parcaCoz'un Python ikizi → MultiPolygon koordinatı (liste)."""
    if not dizi:
        return []
    yeni = bool(halka)
    out = []
    for p in dizi:
        if not isinstance(p, int):
            out.append(p)
        elif not yeni:
            out.append(havuz[p])
        else:
            if p >= len(halka) or halka[p] is None:
                raise SystemExit(f"PARCA_HALKA deliği: {p}")
            out.append([havuz[h] for h in halka[p]])
    return out


def ilk_nokta(g):
    """iç içe koordinat listesinde ilk [lon,lat]."""
    while isinstance(g, list) and g and isinstance(g[0], list):
        g = g[0]
    return g if isinstance(g, list) and len(g) == 2 else None


# ═════════════════ çözülmüş gövdeler: (katman, anahtar) → [(f, t, geo)] ═════════════════
def govdeler(klasor):
    """Dört dosyayı okur ve HAVUZ İNDEKSİNDEN BAĞIMSIZ çözülmüş kayıtlar döndürür.
    Anahtar: ("osm-o", "") · ("osm-v", "") · ("osm-h", renk) · ("yab", id) ·
    ("bolge", ad) · ("devir", ad|alici) · ("isgal", id|f) · ("petek", ad)."""
    K = {}

    def ekle(k, f, t, g):
        K.setdefault(k, []).append((f, t, g))

    D = js_oku(os.path.join(klasor, "donemler.js"))
    P, PH = D.get("PARCALAR", []), D.get("PARCA_HALKA", [])
    for d in D.get("DONEMLER", []):
        ekle(("osm-o", ""), d["f"], d["t"], coz(d.get("o"), P, PH))
        ekle(("osm-v", ""), d["f"], d["t"], coz(d.get("v"), P, PH))
        for hb in d.get("h", []) or []:
            ekle(("osm-h", hb.get("renk") or ""), d["f"], d["t"], coz(hb.get("g"), P, PH))
    for i, p in enumerate(D.get("PETEKLER", [])):
        if isinstance(p, dict) and p.get("g") is not None:
            ekle(("petek", p.get("a", str(i))), "", "", p["g"])
    H = js_oku(os.path.join(klasor, "devletler_harita.js"))
    DP, DPH = H.get("DEVLET_PARCALAR", []), H.get("DEVLET_PARCA_HALKA", [])
    for dv in H.get("DEVLET_HARITA", []):
        for dn in dv.get("dnm", []):
            ekle(("yab", dv["id"]), dn["f"], dn["t"], coz(dn.get("g"), DP, DPH))
    B = js_oku(os.path.join(klasor, "bolgeler.js"))
    for b in B.get("BOLGELER", []):
        ekle(("bolge", b["ad"]), b.get("f", ""), b.get("t", ""), b.get("g"))
    V = js_oku(os.path.join(klasor, "devirler.js"))
    for dv in V.get("DEVIRLER", []):
        for al in dv.get("alicilar", []):
            ekle(("devir", dv["ad"] + "|" + al.get("id", "")), dv.get("t", ""), dv.get("t", ""), al.get("parca"))
    for ig in V.get("ISGALLER", []):
        ekle(("isgal", ig["id"] + "|" + ig.get("f", "")), ig.get("f", ""), ig.get("t", ""), ig.get("parca"))
    return K


def zaman_cizgisi(kayitlar):
    """[(f,t,g)] → sıralı kırılma günleri ve gün→geometri çözücüsü.
    Aynı anda birden çok kayıt açıksa hepsi birlikte döner (sıralı, kanonik)."""
    return sorted(kayitlar, key=lambda r: (r[0], r[1], json.dumps(r[2])[:64]))


def an_geometri(kayitlar, gun):
    return sorted(json.dumps(g, separators=(",", ":")) for f, t, g in kayitlar
                  if (f == "" and t == "") or (f <= gun < t) or (f == t == gun))


# ═════════════════════════════ kiyas ═════════════════════════════
def ilk_fark(a, b, yol=""):
    """İki JSON değerinde ilk farkın yolu ve iki taraftaki değer."""
    if type(a) is not type(b):
        return yol, a, b
    if isinstance(a, dict):
        for k in sorted(set(a) | set(b)):
            if k not in a or k not in b:
                return f"{yol}.{k}", a.get(k, "<YOK>"), b.get(k, "<YOK>")
            r = ilk_fark(a[k], b[k], f"{yol}.{k}")
            if r:
                return r
        return None
    if isinstance(a, list):
        for i in range(min(len(a), len(b))):
            r = ilk_fark(a[i], b[i], f"{yol}[{i}]")
            if r:
                return r
        if len(a) != len(b):
            return f"{yol}.len", len(a), len(b)
        return None
    return None if a == b else (yol, a, b)


def kiyas(A, B, sessiz=False):
    sonuc = {"A": A, "B": B, "dosya": {}, "ayni": True}
    for ad in CIKTILAR:
        ya, yb = os.path.join(A, ad), os.path.join(B, ad)
        if not (os.path.exists(ya) and os.path.exists(yb)):
            sonuc["dosya"][ad] = {"durum": "EKSİK", "A": os.path.exists(ya), "B": os.path.exists(yb)}
            sonuc["ayni"] = False
            continue
        ha, hb = sha(ya), sha(yb)
        r = {"A": ha, "B": hb, "durum": "AYNI" if ha == hb else "FARKLI",
             "bayt": [os.path.getsize(ya), os.path.getsize(yb)]}
        if ha != hb:
            sonuc["ayni"] = False
            da, db = js_oku(ya), js_oku(yb)
            for v in sorted(set(da) | set(db)):
                if v in ("URETIM_IZI", "DEVIRLER_KAYNAK_OZET"):
                    continue          # iz alanları: farkı İÇERİK değil, soy damgası
                f = ilk_fark(da.get(v), db.get(v), v)
                if f:
                    r["ilk_fark"] = {"yol": f[0], "A": str(f[1])[:160], "B": str(f[2])[:160]}
                    break
            if "ilk_fark" not in r:
                r["ilk_fark"] = {"yol": "yalnız iz/soy damgası (URETIM_IZI / KAYNAK_OZET)"}
            # anlamsal ilk fark: epok · devlet · koordinat
            r["anlamsal"] = anlamsal_ilk_fark(A, B, ad)
        sonuc["dosya"][ad] = r
    if not sessiz:
        for ad, r in sonuc["dosya"].items():
            print(f"  {ad:<22} {r['durum']}", end="")
            if r.get("A") and r["durum"] != "EKSİK":
                print(f"  {r['A'][:12]} / {r['B'][:12]}", end="")
            print()
            if r.get("ilk_fark"):
                print(f"      ilk fark (metin): {r['ilk_fark']}")
            if r.get("anlamsal"):
                print(f"      ilk fark (anlam): {r['anlamsal']}")
        print("SONUÇ:", "BİT BİT AYNI ✓" if sonuc["ayni"] else "FARKLI ✗")
    return sonuc


_GOVDE_ONBELLEK = {}


def _gv(k):
    if k not in _GOVDE_ONBELLEK:
        _GOVDE_ONBELLEK[k] = govdeler(k)
    return _GOVDE_ONBELLEK[k]


def anlamsal_ilk_fark(A, B, dosya):
    katman = {"donemler.js": ("osm-o", "osm-v", "osm-h", "petek"),
              "devletler_harita.js": ("yab",), "bolgeler.js": ("bolge",),
              "devirler.js": ("devir", "isgal")}[dosya]
    try:
        ga, gb = _gv(A), _gv(B)
    except SystemExit as x:
        return f"çözülemedi: {x}"
    for k in sorted(set(ga) | set(gb)):
        if k[0] not in katman:
            continue
        ra, rb = ga.get(k, []), gb.get(k, [])
        gunler = sorted({r[0] for r in ra + rb} | {r[1] for r in ra + rb})
        for gun in gunler or [""]:
            xa, xb = an_geometri(ra, gun), an_geometri(rb, gun)
            if xa != xb:
                pa = ilk_nokta(json.loads(xa[0])) if xa else None
                pb = ilk_nokta(json.loads(xb[0])) if xb else None
                for i in range(min(len(xa), len(xb))):
                    if xa[i] != xb[i]:
                        pa = _ilk_farkli_nokta(json.loads(xa[i]), json.loads(xb[i])) or pa
                        break
                return {"katman": k[0], "anahtar": k[1], "epok": gun, "koordinat": pa or pb,
                        "parca_sayisi": [len(xa), len(xb)]}
    return "anlamsal fark YOK (fark yalnız havuz sırası/biçim)"


def _ilk_farkli_nokta(a, b):
    if isinstance(a, list) and len(a) == 2 and all(isinstance(x, (int, float)) for x in a):
        return None if a == b else a
    if not isinstance(a, list) or not isinstance(b, list):
        return ilk_nokta(a)
    for x, y in zip(a, b):
        r = _ilk_farkli_nokta(x, y)
        if r:
            return r
    if len(a) != len(b):
        return ilk_nokta(a[min(len(a), len(b)):] or b[min(len(a), len(b)):])
    return None


# ═════════════════════════════ kos ═════════════════════════════
KANCA = r'''
# ════ MOTOR-SINAV DÖKÜM KANCASI (salt-okur; yalnız sınav kesitinde) ════
def _SINAV_DOKUM(_kapanan):
    import hashlib as _h, json as _j, os as _o
    _g = globals()
    _dz = _o.environ.get("SINAV_DOKUM_DIZIN")
    if not _dz or not _kapanan:
        return
    _o.makedirs(_dz, exist_ok=True)
    _n = _g.setdefault("_SINAV_SAYAC", [0]); _n[0] += 1
    _Y = _g.get("YERLER") or []
    _ad = lambda i: (_Y[i]["ad"] if 0 <= i < len(_Y) else str(i))
    _cik = {"asama": _kapanan, "sira": _n[0]}
    for _deg in ("PETEK", "PETEK_TAM", "PETEK_D"):
        _L = _g.get(_deg)
        if isinstance(_L, list) and len(_L) == len(_Y):
            _d = {}
            for _i, _p in enumerate(_L):
                if _p is None:
                    continue
                try:
                    _w = _p.wkb_hex if not _p.is_empty else ""
                except Exception:
                    continue
                if _w:
                    _d[_ad(_i)] = _w
            _hs = _h.sha1(_j.dumps(_d, sort_keys=True).encode()).hexdigest()
            if _g.get("_SINAV_SON_" + _deg) != _hs:
                _g["_SINAV_SON_" + _deg] = _hs
                _cik[_deg] = _d
    _S = _g.get("_kvsahip")
    if _S is not None and _g.get("_SINAV_IZGARA_YAZILDI") is None:
        try:
            _cik["izgara"] = {"x0": _g["_kvx0"], "y0": _g["_kvy0"], "nx": _g["_kvnx"],
                              "ny": _g["_kvny"], "adim": _g["KV_ADIM"],
                              "sahip": [(_ad(int(_s)) if int(_s) >= 0 else None) for _s in _S]}
            _g["_SINAV_IZGARA_YAZILDI"] = 1
        except Exception as _x:
            _cik["izgara_hata"] = str(_x)
    if len(_cik) > 2:
        _yol = _o.path.join(_dz, "%03d.json" % _n[0])
        with open(_yol, "w", encoding="utf-8") as _f:
            _j.dump(_cik, _f, ensure_ascii=False)
'''

SENARYO_KANCA = r'''
# ════ MOTOR-SINAV SENARYOSU (bellekte; girdi dosyası değişmez) ════
import json as _js_s, copy as _cp_s, datetime as _dt_s
def _s_kaydir(_g, _n):
    return (_dt_s.date.fromisoformat(_g) + _dt_s.timedelta(days=_n)).isoformat()
for _op in _js_s.load(open(SENARYO_YOL, encoding="utf-8")):
    _hit = [y for y in YERLER if y["ad"] == _op.get("kopya", _op.get("sahip", _op.get("kaydir")))]
    if len(_hit) != 1:
        raise SystemExit("SINAV SENARYOSU: ad %d kez bulundu: %r" % (len(_hit), _op))
    _y = _hit[0]
    if "kopya" in _op:
        _yn = _cp_s.deepcopy(_y)
        _yn["ad"] = _op["ad"]; _yn["lon"] = round(_y["lon"] + _op.get("dlon", 0.0), 3)
        _yn["lat"] = round(_y["lat"] + _op.get("dlat", 0.0), 3)
        YERLER.append(_yn)
    elif "sahip" in _op:
        _y["s"][_op["i"]]["d"] = _op["d"]
    elif "kaydir" in _op:
        _eski = _y[_op["alan"]][_op["i"]]["f"]
        _yeni = _s_kaydir(_eski, _op["gun"])
        _y[_op["alan"]][_op["i"]]["f"] = _yeni
        for _al in ("s", "d", "v"):
            for _p in _y.get(_al) or []:
                if _p.get("t") == _eski:
                    _p["t"] = _yeni
print("  🧪 SINAV SENARYOSU uygulandı:", open(SENARYO_YOL, encoding="utf-8").read().strip())
'''


def kesit_uret(motor, kutu, senaryo):
    src = io.open(motor, encoding="utf-8", newline="").read().replace("\r\n", "\n")

    def degis(eski, yeni):
        nonlocal src
        if src.count(eski) != 1:
            raise SystemExit(f"İŞARET {src.count(eski)} kez bulundu: {eski[:60]!r}")
        src = src.replace(eski, yeni)

    degis("BOLGE = box(-180, -60, 180, 85)\n", f"BOLGE = box({kutu})\n")
    degis("def asama(ad=None):\n", KANCA + "\ndef asama(ad=None):\n    _SINAV_DOKUM(globals().get('_ACIK_ASAMA_SINAV'))\n    globals()['_ACIK_ASAMA_SINAV'] = ad\n")
    if senaryo:
        degis("YERLER = girdi.yukle()\n", "YERLER = girdi.yukle()\nSENARYO_YOL = "
              + repr(os.path.abspath(senaryo)) + "\n" + SENARYO_KANCA)
    return src


SIRA_KILIT = "C:/atlas-sinav-cikti/KUTU-SIRA.kilit"   # M-4585: aynı anda en çok BİR kutu koşusu (MOTOR-SINAV + MOTOR-YURUYUS)


def _canli(pid):
    try:
        out = subprocess.run(["tasklist", "/FI", f"PID eq {int(pid)}", "/NH"],
                             capture_output=True, text=True).stdout
        return str(int(pid)) in out
    except Exception:
        return True                    # emin değilsem canlı say: beklemek çarpışmaktan ucuz


def _hiz_kosuyor():
    try:
        out = subprocess.run(["powershell", "-NoProfile", "-c",
                              "(Get-CimInstance Win32_Process -Filter \"Name='python.exe'\").CommandLine"],
                             capture_output=True, text=True).stdout
        return "ARAC-MOTOR-YURUYUS-HIZ" in out
    except Exception:
        return False


def sira_al(ad):
    """Kutu koşusu sırası: kilit dosyası boş/ölü VE MOTOR-YURUYUS HIZ koşusu yoksa al."""
    bekledi = 0
    while True:
        sahip = None
        if os.path.exists(SIRA_KILIT):
            try:
                sahip = io.open(SIRA_KILIT, encoding="utf-8").read().split("|")[0].strip()
            except Exception:
                sahip = "?"
        if (not sahip or (sahip.isdigit() and not _canli(sahip))) and not _hiz_kosuyor():
            break
        if bekledi % 1800 == 0:
            print(f"  ⏳ SIRA bekleniyor ({ad}): kilit={sahip} hiz={_hiz_kosuyor()}", flush=True)
        time.sleep(60)
        bekledi += 60
    with io.open(SIRA_KILIT, "w", encoding="utf-8") as f:
        f.write(f"{os.getpid()}|MOTOR-SINAV|{ad}|{datetime.datetime.now().isoformat(timespec='seconds')}\n")


def sira_birak():
    try:
        if io.open(SIRA_KILIT, encoding="utf-8").read().split("|")[0].strip() == str(os.getpid()):
            os.remove(SIRA_KILIT)
    except Exception:
        pass


def kos(a):
    sira_al(a.ad)
    try:
        return _kos(a)
    finally:
        sira_birak()


def _kos(a):
    ag = os.path.abspath(a.ag)
    motor = os.path.join(ag, "arac", "uret_petek.py")
    cikti = os.path.join(ag + "-cikti", a.ad)
    if os.path.exists(cikti):
        raise SystemExit(f"{cikti} zaten var — ad değiştir ya da sil")
    os.makedirs(cikti)
    # önceki koşunun çıktısı bir sonrakine GİRMESİN: üretilen dosyalar HEAD'e döner
    uretilen = ["data/donemler.js", "data/devletler_harita.js", "data/bolgeler.js",
                "data/devirler.js", "data/petek_govde.js", "veri-kaynak/motor_kara.geojson"]
    var = [u for u in uretilen if os.path.exists(os.path.join(ag, u))]
    subprocess.run(["git", "-C", ag, "checkout", "--"] + var, check=True)
    src = kesit_uret(motor, a.kutu, a.senaryo)
    kesit = os.path.join(ag, "arac", "_sinav_kesit.py")
    with io.open(kesit, "w", encoding="utf-8", newline="\n") as f:
        f.write(f"__file__ = {motor!r}\n" + src)
    env = dict(os.environ)
    for k in list(env):
        if k.startswith("MOTOR_"):
            del env[k]
    env.update({"MOTOR_ONBELLEK_KAPALI": "1", "MOTOR_PARALEL_KAPALI": "1",
                "MOTOR_EGIM_AB_KAPALI": "1", "MOTOR_NEHIR_AB_KAPALI": "1",
                "MOTOR_CANLI_LOG": os.path.join(cikti, "canli.log"),
                "SINAV_DOKUM_DIZIN": os.path.join(cikti, "asama"),
                "PYTHONPATH": os.path.join(ag, "arac"), "PYTHONIOENCODING": "utf-8"})
    if a.paralel:
        env.pop("MOTOR_PARALEL_KAPALI")
    meta = {"ad": a.ad, "kutu": a.kutu, "senaryo": (json.load(open(a.senaryo, encoding="utf-8"))
                                                   if a.senaryo else None),
            "motor_sha256": sha(motor), "ag_head": subprocess.run(
                ["git", "-C", ag, "rev-parse", "HEAD"], capture_output=True, text=True).stdout.strip(),
            "ortam": {k: v for k, v in env.items() if k.startswith("MOTOR_")},
            "basla": datetime.datetime.now().isoformat(timespec="seconds")}
    t0 = time.time()
    with open(os.path.join(cikti, "motor.log"), "w", encoding="utf-8") as lg:
        # BELOW_NORMAL: canlı koşu (13C) sınavdan önce gelir
        r = subprocess.run([sys.executable, "-u", kesit], cwd=ag, env=env, stdout=lg,
                           stderr=subprocess.STDOUT,
                           creationflags=0x4000 if os.name == "nt" else 0)
    meta["motor_kod"], meta["motor_sn"] = r.returncode, round(time.time() - t0)
    if r.returncode == 0:
        with open(os.path.join(cikti, "devirler.log"), "w", encoding="utf-8") as lg:
            r2 = subprocess.run([sys.executable, "-u", os.path.join(ag, "arac", "uret_devirler.py")],
                                cwd=ag, env=env, stdout=lg, stderr=subprocess.STDOUT)
        meta["devirler_kod"] = r2.returncode
        for ad in CIKTILAR:
            shutil.copy2(os.path.join(ag, "data", ad), os.path.join(cikti, ad))
        meta["sha256"] = {ad: sha(os.path.join(cikti, ad)) for ad in CIKTILAR}
    meta["bitis"] = datetime.datetime.now().isoformat(timespec="seconds")
    with open(os.path.join(cikti, "meta.json"), "w", encoding="utf-8") as f:
        json.dump(meta, f, ensure_ascii=False, indent=1)
    print(f"KOŞU {a.ad} bitti · motor kod {meta['motor_kod']} · {meta['motor_sn']} sn · {cikti}")
    return 0 if r.returncode == 0 else 1


# ═════════════════════════════ etki ═════════════════════════════
def _geo(coords_list):
    from shapely.geometry import shape
    from shapely.ops import unary_union
    gs = []
    for s in coords_list:
        c = json.loads(s)
        if not c:
            continue
        try:
            gs.append(shape({"type": "MultiPolygon", "coordinates": c}).buffer(0))
        except Exception:
            gs.append(shape({"type": "Polygon", "coordinates": c}).buffer(0))
    return unary_union(gs) if gs else None


def _alan_km2(g, lat):
    return g.area * (111.32 ** 2) * math.cos(math.radians(lat))


def _uzaklik(g, lon, lat):
    """fark bölgesinin noktaya EN YAKIN ve EN UZAK köşesi (km)."""
    from shapely.geometry import mapping
    xs = []

    def gez(c):
        if isinstance(c[0], (int, float)):
            xs.append(km(lon, lat, c[0], c[1]))
        else:
            for x in c:
                gez(x)
    gez(mapping(g)["coordinates"]) if g.geom_type != "GeometryCollection" else [
        gez(mapping(p)["coordinates"]) for p in g.geoms if not p.is_empty]
    return (min(xs), max(xs)) if xs else (None, None)


def etki(a):
    lon, lat = map(float, a.nokta.split(","))
    ga, gb = _gv(a.A), _gv(a.B)
    satirlar = []
    for k in sorted(set(ga) | set(gb)):
        ra, rb = ga.get(k, []), gb.get(k, [])
        gunler = sorted({r[0] for r in ra + rb} | {r[1] for r in ra + rb}) or [""]
        onceki = None
        for i, gun in enumerate(gunler):
            xa, xb = an_geometri(ra, gun), an_geometri(rb, gun)
            if xa == xb:
                onceki = None
                continue
            anahtar = (tuple(xa), tuple(xb))
            son = gunler[i + 1] if i + 1 < len(gunler) else gun
            if onceki and onceki["_anahtar"] == anahtar:
                onceki["t"] = son
                continue
            A_, B_ = _geo(xa), _geo(xb)
            if A_ is None and B_ is None:
                continue
            fark = (B_ if A_ is None else A_ if B_ is None else A_.symmetric_difference(B_))
            if fark.is_empty or fark.area < 1e-12:
                d = {"alan_km2": 0.0, "min_km": None, "max_km": None, "not": "yalnız köşe/sıra farkı"}
            else:
                mn, mx = _uzaklik(fark, lon, lat)
                d = {"alan_km2": round(_alan_km2(fark, fark.centroid.y), 1),
                     "min_km": round(mn, 1), "max_km": round(mx, 1),
                     "merkez": [round(fark.centroid.x, 3), round(fark.centroid.y, 3)]}
            onceki = {"katman": k[0], "anahtar": k[1], "f": gun, "t": son, "_anahtar": anahtar, **d}
            satirlar.append(onceki)
    for s in satirlar:
        s.pop("_anahtar", None)
    # aşama dökümleri
    asama = asama_etki(a.A, a.B, lon, lat)
    ozet = {"A": a.A, "B": a.B, "nokta": [lon, lat], "fark_sayisi": len(satirlar),
            "katman_basina": {}, "asama": asama, "farklar": satirlar}
    for s in satirlar:
        o = ozet["katman_basina"].setdefault(s["katman"], {"kayit": 0, "alan_km2": 0.0, "max_km": 0.0,
                                                          "anahtar": set()})
        o["kayit"] += 1
        o["alan_km2"] += s["alan_km2"] or 0
        o["max_km"] = max(o["max_km"], s["max_km"] or 0)
        o["anahtar"].add(s["anahtar"])
    for o in ozet["katman_basina"].values():
        o["anahtar"] = sorted(o["anahtar"])
        o["alan_km2"] = round(o["alan_km2"], 1)
    print(f"ETKİ {os.path.basename(a.A)} → {os.path.basename(a.B)} · nokta {lon},{lat}")
    for k, o in ozet["katman_basina"].items():
        print(f"  {k:<7} {o['kayit']:>5} fark · {o['alan_km2']:>12,.1f} km² · en uzak {o['max_km']:>7,.1f} km"
              f" · {len(o['anahtar'])} anahtar: {', '.join(o['anahtar'][:8])}")
    for s in asama:
        print(f"  aşama {s['asama'][:44]:<44} {s['degisken']:<8} değişen {s['degisen']:>4}"
              f" · en uzak tohum {s['max_km']} km · {', '.join(s['ornek'][:5])}")
    if a.json:
        with open(a.json, "w", encoding="utf-8") as f:
            json.dump(ozet, f, ensure_ascii=False, indent=1)
        print("  →", a.json)
    return 0


def _dokumler(klasor):
    d = os.path.join(klasor, "asama")
    son = {}
    out = []
    if not os.path.isdir(d):
        return out
    for ad in sorted(os.listdir(d)):
        j = json.load(open(os.path.join(d, ad), encoding="utf-8"))
        for deg in ("PETEK", "PETEK_TAM", "PETEK_D"):
            if deg in j:
                son[deg] = j[deg]
        out.append((j["asama"], dict(son), j.get("izgara")))
    return out


def asama_etki(A, B, lon, lat):
    """Her aşama sonunda PETEK/PETEK_D: hangi tohumun peteği değişti, en uzağı kaç km.
    Tohum konumu: YERLER'in kendisi yok ⇒ peteğin temsil noktası kullanılır."""
    from shapely import wkb
    da, db = _dokumler(A), _dokumler(B)
    out = []
    ada = {s[0]: s for s in da}
    for asm, sb, izb in db:
        if asm not in ada:
            continue
        sa, iza = ada[asm][1], ada[asm][2]
        for deg in ("PETEK", "PETEK_TAM", "PETEK_D"):
            pa, pb = sa.get(deg), sb.get(deg)
            if pa is None or pb is None:
                continue
            degisen, mx = [], 0.0
            for ad in sorted(set(pa) | set(pb)):
                if pa.get(ad) != pb.get(ad):
                    g = wkb.loads(bytes.fromhex(pb.get(ad) or pa.get(ad)))
                    ga_ = wkb.loads(bytes.fromhex(pa[ad])) if pa.get(ad) else None
                    gb_ = wkb.loads(bytes.fromhex(pb[ad])) if pb.get(ad) else None
                    fr = (gb_ if ga_ is None else ga_ if gb_ is None else ga_.symmetric_difference(gb_))
                    if not fr.is_empty:
                        _, m = _uzaklik(fr, lon, lat)
                        mx = max(mx, m or 0)
                    degisen.append(ad)
            out.append({"asama": asm, "degisken": deg, "degisen": len(degisen),
                        "max_km": round(mx, 1), "ornek": degisen[:20]})
        if iza and izb and iza.get("nx") == izb.get("nx"):
            n, mx, x0, y0, st, nx = 0, 0.0, iza["x0"], iza["y0"], iza["adim"], iza["nx"]
            for k, (u, v) in enumerate(zip(iza["sahip"], izb["sahip"])):
                if u != v:
                    n += 1
                    cx, cy = x0 + (k % nx + 0.5) * st, y0 + (k // nx + 0.5) * st
                    mx = max(mx, km(lon, lat, cx, cy))
            out.append({"asama": asm, "degisken": "izgara", "degisen": n, "max_km": round(mx, 1),
                        "ornek": []})
    return out


def main():
    try:
        sys.stdout.reconfigure(encoding="utf-8", errors="replace")
    except Exception:
        pass
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    alt = ap.add_subparsers(dest="komut", required=True)
    k = alt.add_parser("kiyas"); k.add_argument("A"); k.add_argument("B"); k.add_argument("--json")
    o = alt.add_parser("kos")
    o.add_argument("--kutu", required=True); o.add_argument("--ad", required=True)
    o.add_argument("--senaryo"); o.add_argument("--ag", default="C:/atlas-sinav")
    o.add_argument("--paralel", type=int, default=0)
    e = alt.add_parser("etki"); e.add_argument("A"); e.add_argument("B")
    e.add_argument("--nokta", required=True); e.add_argument("--json")
    a = ap.parse_args()
    if a.komut == "kiyas":
        s = kiyas(a.A, a.B)
        if a.json:
            json.dump(s, open(a.json, "w", encoding="utf-8"), ensure_ascii=False, indent=1)
        return 0 if s["ayni"] else 1
    if a.komut == "kos":
        return kos(a)
    return etki(a)


if __name__ == "__main__":
    sys.exit(main())
