# -*- coding: utf-8 -*-
"""anlik_esitlik — Ⓑ dolgunun AYRI SÜREÇ yolu, süreç içi yolla AYNI dosyayı yazıyor mu? (HAVVA, 27.11.2026)

Motoru KOŞTURMAZ; Koşu 40'ın `devletler_harita.js`ini okur (salt okuma). Önbellek KENDİ dizinindedir
(ortak `C:\\atlas-onbellek`e dokunmaz). Üç koşu, üç dosya, bayt bayt kıyas:
  A  süreç içi          `dolgu.kosudan(...)`                         → dolgu_A.js
  B  ayrı süreç         `DOLGU_AYRI_SUREC=1` ile `kosudan` anlık görüntü yazar; devlet ve kesit kayıtları
                        önbellekten SİLİNİR (kapanışlar kalır); `py dolgu.py --anlik` hesaplar → dolgu_B.js
  C  ayrı süreç, sıcak  aynı görüntü yeniden; bütün kesitler küçültülmüş kesit kaydından (`ref-1`) gelir
                                                                      → dolgu_C.js
Kabul: A = B = C (bayt) · B'de devlet hesabı > 0 (gerçekten hesapladı) · C'de hazır kesit = kesit sayısı.
Bağlam taklittir ama üç girdiyi de OYNATIR: yerleşim→devlet haritası kesitten kesite değişir (ekleme,
silme, sahip değişimi), duvar iki ayrı sözlükle gelir (biri yok), engel bir kesitte None olur.
Kullanım: py anlik_esitlik.py <devletler_harita.js> <arac> <çalışma dizini> [başlangıç günü] [kesit sayısı]
"""
import os, sys, time, ctypes, hashlib, sqlite3, subprocess, shutil
sys.stdout.reconfigure(encoding="utf-8", errors="replace", line_buffering=True)
ctypes.windll.kernel32.SetPriorityClass(ctypes.windll.kernel32.GetCurrentProcess(), 0x40)   # IDLE
yol, arac, calis = sys.argv[1:4]
T0 = sys.argv[4] if len(sys.argv) > 4 else "0800-06-15"
NK = int(sys.argv[5]) if len(sys.argv) > 5 else 7
os.makedirs(calis, exist_ok=True)
for k in [k for k in os.environ if k.startswith("MOTOR_") or k.startswith("DOLGU_")]:
    os.environ.pop(k)
os.environ["MOTOR_DOLGU_UFUK_GUN"] = "10"
os.environ["MOTOR_ONBELLEK_DIZIN"] = calis
os.environ["DOLGU_ILERLEME_SN"] = "60"
os.environ["DOLGU_IZ_SN"] = "2"              # yavaş devlet iz satırı da sınansın
sys.path.insert(0, arac)
import numpy as np
from shapely.geometry import MultiPoint, Point, box
import rasterio.features as rfe
from rasterio.transform import Affine
import dolgu

print("dolgu:", dolgu.__file__, "· devlet kaynağı", dolgu._DEVLET_KAYNAK[:12], "· kapanış kaynağı",
      dolgu._TALEP_KAYNAK[:12], "· önbellek", dolgu._ONB_YOL)
y = dolgu._js_oku(yol, ["DEVLET_HARITA", "DEVLET_PARCALAR", "DEVLET_PARCA_HALKA"])
kara = dolgu._kara_yukle()
g0 = dolgu._gk(T0)
canli, sonra = [], []
for dev in y["DEVLET_HARITA"]:
    for p in dev.get("dnm", []):
        if not p.get("g"):
            continue
        f, t = dolgu._gk(p["f"]), dolgu._gk(p["t"])
        if f <= g0 < t:
            canli.append((T0, p["t"], dev["id"], p["g"]))
        elif f > g0:
            sonra.append((p["f"], p["t"], dev["id"], p["g"]))
gunler = sorted({a[0] for a in sonra}, key=dolgu._gk)[:NK - 1]
sec = canli + [a for a in sonra if a[0] in gunler]
araliklar = [(f, t, kim, dolgu._coz(ix, y["DEVLET_PARCALAR"], y["DEVLET_PARCA_HALKA"])) for f, t, kim, ix in sec]
araliklar = [a for a in araliklar if not a[3].is_empty]
tarihler = sorted({a[0] for a in araliklar}, key=dolgu._gk)[:NK]
print("aralık %d (başta canlı %d) · kesit %d: %s" % (len(araliklar), len(canli), len(tarihler), " ".join(tarihler)))

# ── taklit bağlam ────────────────────────────────────────────────────────────
NX, NY, AD = 7200, 2900, 0.05
bas = [(i, a) for i, a in enumerate(araliklar) if a[0] == T0]
kuzey = rfe.rasterize([(a[3], i) for i, a in bas], out_shape=(NY, NX),
                      transform=Affine(AD, 0, -180.0, 0, -AD, 85.0), fill=-1, dtype="int32")
SAHIP = np.ascontiguousarray(np.flipud(kuzey))
GRID_OZ = hashlib.sha1(SAHIP.tobytes()).hexdigest()[:16]
adlar = sorted({a[2] for a in araliklar})


def izgara_fn(a):
    n = tarihler.index(a)
    ga = dolgu._gk(a)
    kim = {i: ar[2] for i, ar in bas if dolgu._gk(ar[1]) > ga}          # biten gövdenin hücreleri düşer (SİLME)
    for j in sorted(kim)[n::17][:n * 3]:                                # birkaç hücre sahip değiştirir (FARK)
        kim[j] = adlar[(j + n) % len(adlar)]
    if n >= 2:
        kim[10 ** 6 + n] = adlar[n]                                     # ızgarada olmayan yeni anahtar (EKLEME)
    gr = {}
    for j in sorted(kim):
        gr.setdefault(kim[j], []).append(j)
    return {"sahip": SAHIP, "x0": -180.0, "y0": -60.0, "adim": AD, "kim": kim, "grid_oz": GRID_OZ,
            "devlet_oz": {d: hashlib.sha1(repr(js).encode()).hexdigest()[:12] for d, js in gr.items()}}


buyuk = sorted(bas, key=lambda ia: -ia[1][3].area)[:2]
_c0, _c1 = buyuk[0][1][3].representative_point(), buyuk[1][1][3].representative_point()
DUVAR1 = {buyuk[0][1][2]: box(_c0.x - 40, _c0.y, _c0.x + 40, _c0.y + 30)}
DUVAR2 = {buyuk[0][1][2]: box(_c0.x - 40, _c0.y, _c0.x + 40, _c0.y + 30),
          buyuk[1][1][2]: box(_c1.x, _c1.y - 30, _c1.x + 40, _c1.y + 30)}


def duvar_fn(a):
    n = tarihler.index(a)
    return None if n < 2 else (DUVAR1 if n < 4 else DUVAR2)


delik = []
for _i, ar in bas:
    for h in dolgu._delikler(ar[3]):
        delik.append((h.area, h.representative_point()))
delik.sort(key=lambda t: -t[0])
ENGEL = [p for _al, p in delik[1::3]][:12] + [Point(-150.0, -55.0)]


def engel_fn(a):
    n = tarihler.index(a)
    if n == 3:
        return None
    return MultiPoint(ENGEL + ([delik[0][1]] if n % 2 and delik else []))


def kos_A():
    t = time.time()
    r = dolgu.kosudan(araliklar, kara, os.path.join(calis, "dolgu_A.js"), kesit_sinir=NK,
                      izgara_fn=izgara_fn, duvar_fn=duvar_fn, engel_fn=engel_fn)
    print("A süreç içi: %d kayıt · %.0f sn · sayaç %s" % (r[0], time.time() - t, dict(dolgu.ILERLEME)))


def ayri(etiket, cikti):
    t = time.time()
    p = subprocess.run([sys.executable, "-u", os.path.join(arac, "dolgu.py"), "--anlik",
                        os.path.join(calis, "anlik"), "--cikti", cikti],
                       env=dict(os.environ, PYTHONIOENCODING="utf-8"), capture_output=True, text=True,
                       encoding="utf-8", errors="replace")
    son = [s for s in p.stdout.splitlines() if "sayaçları" in s or "YUTMA" in s or "DUVAR" in s]
    print("%s ayrı süreç: çıkış %d · %.0f sn\n   %s" % (etiket, p.returncode, time.time() - t, "\n   ".join(son)))
    if p.returncode != 0:
        print(p.stdout[-2000:], p.stderr[-3000:])
    return p.stdout


def ozet(ad):
    with open(os.path.join(calis, ad), "rb") as f:
        b = f.read()
    return len(b), hashlib.sha256(b).hexdigest()


kos_A()
os.environ["DOLGU_AYRI_SUREC"] = "1"
os.environ["DOLGU_ANLIK_DIZIN"] = os.path.join(calis, "anlik")
shutil.rmtree(os.path.join(calis, "anlik"), ignore_errors=True)
r = dolgu.kosudan(araliklar, kara, os.path.join(calis, "dolgu_X.js"), kesit_sinir=NK,
                  izgara_fn=izgara_fn, duvar_fn=duvar_fn, engel_fn=engel_fn)
print("anlık görüntü yazıldı · kosudan dönüşü", r[:2], "· dolgu_X.js var mı:", os.path.exists(os.path.join(calis, "dolgu_X.js")))
os.environ.pop("DOLGU_AYRI_SUREC")
b = sqlite3.connect(dolgu._ONB_YOL, timeout=60, isolation_level=None)
print("önbellek katmanları (A'dan sonra):", b.execute("SELECT katman, COUNT(*), SUM(LENGTH(deger)) FROM kayit GROUP BY katman").fetchall())
sil = b.execute("DELETE FROM kayit WHERE katman IN ('dolgu2_devlet','dolgu2_kesit')").rowcount
b.close()
print("silinen devlet+kesit kaydı:", sil)
cB = ayri("B", os.path.join(calis, "dolgu_B.js"))
cC = ayri("C", os.path.join(calis, "dolgu_C.js"))
oA, oB, oC = ozet("dolgu_A.js"), ozet("dolgu_B.js"), ozet("dolgu_C.js")
print("A", oA, "\nB", oB, "\nC", oC)
b_hesap = "devlet_hesap 0 " not in cB and "devlet_hesap" in cB
c_hazir = ("kesit_disk %d" % len(tarihler)) in cC
print("B gerçekten hesapladı:", b_hesap, "· C bütün kesitleri hazır buldu:", c_hazir)
print("\nSONUÇ:", "A = B = C (bayt bayt AYNI)" if oA == oB == oC and b_hesap and c_hazir else "FARK VAR — İNCELE")
