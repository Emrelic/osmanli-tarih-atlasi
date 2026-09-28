# -*- coding: utf-8 -*-
"""ÖLÇÜT — bir bilgisayarın Atlas motorunu koşturma kapasitesini ölçer.

Emre'nin isteği (28 Eylül 2026): *"bilgisayarların performansını ölçecek bir
programcık yapsak, ben onları tüm bilgisayarlarda çalıştırsam; işlemci, ram,
harddisk, ağ ne varsa hepsini ölçecek test yapsa ve raporlasa."*

🔴 TASARIM KARARI — GENEL HIZ TESTİ DEĞİL, BU MOTORUN TESTİ.
   Genel bir kıyaslama (PassMark vb.) "hangi makine daha hızlı" der; bizim
   sorumuz o değil, **"hangi makine KOŞUYU 6 saatte bitirir"**. Bu yüzden her
   ölçüt motorun gerçekten yaptığı bir işten türetildi:
     tek çekirdek  → Dijkstra/heapq döngüsü (saf Python, GIL altında)
     çok çekirdek  → ThreadPoolExecutor + GIL BIRAKAN iş (motorun FAZ 1'i)
     numpy         → ızgara/DEM/eğim aşamaları
     shapely       → petek · kıyı kesimi · örtü sadeleştirme (asıl darboğaz)
     sqlite        → _motor_onbellek (bugün 7,3 kat kazandıran katman)
     disk          → 85 MB devletler_harita.js + 37 MB donemler.js yazımı
     ağ            → GitHub pull/push (çok bilgisayarlı düzenin damarı)

🔴 VE BİR ÖLÇÜT DAHA, ÖTEKİLERDEN ÖNEMLİ: **ISI KISMASI**.
   Koşu 6 saat sürüyor. Bir makine ilk 30 saniyede hızlı olup 5 dakika sonra
   yavaşlıyorsa, kıyaslama sayısı YALAN SÖYLER. Bu yüzden tek çekirdek testi
   İKİ KEZ koşar: en başta (soğuk) ve bütün ağır testlerden sonra (sıcak).
   Oran 1'e yakınsa makine yükü taşıyor; 1,3'ün üstündeyse kısıyor.

KULLANIM
    py arac/olcut.py                 ölç · ekrana bas · JSON yaz
    py arac/olcut.py --gonder        ölç · yaz · commit · push  (depo varsa)
    py arac/olcut.py --hizli         disk ve ağ testini atla (~40 sn)
    py arac/olcut.py tablo           toplanan bütün raporları karşılaştır

DEPOSUZ MAKİNEDE: bu tek dosya yeter, proje klasörü gerekmez. JSON'u yazar
ve ekrana KOPYALANABİLİR bir özet basar — WhatsApp'tan gönderilebilir.
"""
import json
import math
import os
import platform
import socket
import subprocess
import sys
import tempfile
import time

sys.stdout.reconfigure(encoding="utf-8", errors="replace")

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DIZIN = os.path.join(KOK, "oturumlar", "donanim")

# ── ortak yardımcılar ────────────────────────────────────────────────────
# 🔴 HER ÖLÇÜT `None` DÖNEBİLİR — ve `None` "0" DEĞİL, "ÖLÇÜLEMEDİ"dir.
# Eksik kütüphaneyi 0 puan saymak, o makineyi "çok yavaş" gösterirdi; oysa
# doğru teşhis "kurulum eksik"tir ve çaresi bambaşkadır.
ATLANDI = None


TEKRAR = 3
# Her ölçütün (en kısa, en uzun) çifti. YAYILIM = en uzun / en kısa.
# Bu sözlük aletin KENDİ GÜVENİLİRLİĞİNİ ölçer — sonucun değil.
YAYILIM = {}


def _sure(f, *a, ad=None, **k):
    """Bir işi TEKRAR kez koştur, EN İYİSİNİ (en kısa) döndür. Patlarsa None.

    🔴 NİÇİN TEK ÖLÇÜM YETMİYOR — 28 Eylül 2026'da ölçüldü ve alet tam bu
    yüzden düzeltildi: aynı makinede, dakikalar arayla, `numpy` ölçütü
    **1,335 sn** ve **0,404 sn** çıktı — 3,3 KAT fark. Sebep arka plandaki
    koşuydu ve yükü aşamaya göre değişiyordu.
    ⇒ Tek ölçüm makineyi değil, O ANKİ ARKA PLANI ölçer. 3,3 katlık gürültü
      taşıyan bir sayı ile beş makine SIRALANAMAZ; sıralama gürültüden çıkar.
    ⇒ ÇARE: en kısa süre. Arka plan yükü bir işi yalnız YAVAŞLATIR,
      hızlandıramaz ⇒ minimum, makinenin GERÇEK gücüne en yakın tahmindir.
      (Ortalama almak yanlış olurdu: gürültüyü sayıya KARIŞTIRIR.)
    """
    olcum = []
    for _ in range(TEKRAR):
        try:
            t = time.perf_counter()
            f(*a, **k)
            olcum.append(time.perf_counter() - t)
        except Exception:
            return ATLANDI
    if ad and min(olcum) > 0:
        YAYILIM[ad] = round(max(olcum) / min(olcum), 2)
    return round(min(olcum), 3)


def _sure_tek(f, *a, **k):
    """Tekrarsız ölçüm — yalnız PAHALI testler için (disk, ağ)."""
    try:
        t = time.perf_counter()
        f(*a, **k)
        return round(time.perf_counter() - t, 3)
    except Exception:
        return ATLANDI


def _yuk():
    """Makine ÖLÇÜMDEN ÖNCE meşgul mü — rapora yazılır, gizlenmez."""
    try:
        r = subprocess.run(
            ["powershell", "-NoProfile", "-NonInteractive", "-Command",
             "(Get-CimInstance Win32_Processor | "
             "Measure-Object LoadPercentage -Average).Average"],
            capture_output=True, text=True, timeout=30)
        return int(float((r.stdout or "").strip()))
    except Exception:
        return ATLANDI


def _kutuphane(ad):
    try:
        return __import__(ad)
    except Exception:
        return None
    except BaseException:
        return None


# ── ① TEK ÇEKİRDEK — saf Python döngüsü (Dijkstra'nın vekili) ────────────
def _cpu_tek():
    # 🔴 İŞ YÜKÜ DEĞİŞTİRİLMEZ. 28 Eylül 2026'da EMRELIC bu işi 1,06 sn'de
    # yaptı; sayının kıyas değeri ancak iş yükü SABİT kalırsa vardır.
    # Değiştirmek zorunda kalırsan `surum` alanını yükselt ve eski
    # ölçümleri KARŞILAŞTIRMA.
    return sum(math.sqrt(i) for i in range(3_000_000))


# ── ② ÇOK ÇEKİRDEK — GIL bırakan iş (motorun FAZ 1'inin vekili) ──────────
def _cpu_cok(np, isci):
    """ThreadPoolExecutor + numpy. Motor tam bunu yapıyor (`uret_petek:6915`).

    🔴 SAF PYTHON İLE ÖLÇÜLMEZ: GIL yüzünden iş parçacığı eklemek saf Python
    döngüsünü HIZLANDIRMAZ, ölçüm "paralellik yok" derdi — oysa motor
    paralelden gerçek kazanç alıyor, çünkü shapely/numpy GIL'i BIRAKIYOR.
    Yanlış vekil seçmek, ölçmemekten kötüdür: sayı verir ve yanlış yönlendirir.
    """
    from concurrent.futures import ThreadPoolExecutor
    a = np.random.random(2_000_000)

    def _is(_):
        for _ in range(6):
            np.sqrt(a).sum()

    with ThreadPoolExecutor(max_workers=isci) as ex:
        list(ex.map(_is, range(isci)))


def _numpy_is(np):
    a = np.random.random((2000, 2000))
    b = np.sqrt(a) * 2.0
    (b > 1.0).sum()
    np.gradient(a)          # eğim yüzeyi (DEM) aşamasının vekili
    a.dot(a[:200].T)


def _shapely_is(sh):
    from shapely.geometry import Point
    from shapely.ops import unary_union
    daire = [Point(i % 60 * 1.7, i // 60 * 1.7).buffer(1.25, quad_segs=16)
             for i in range(900)]
    birlik = unary_union(daire)
    kutu = Point(50, 40).buffer(35)
    birlik.intersection(kutu)
    birlik.simplify(0.02)


def _sqlite_is(yol):
    import sqlite3
    db = sqlite3.connect(yol)
    db.execute("PRAGMA journal_mode=WAL")
    db.execute("CREATE TABLE IF NOT EXISTS t(k TEXT PRIMARY KEY, v BLOB)")
    veri = os.urandom(24_000)          # önbellek kayıtlarının tipik boyu
    with db:
        db.executemany("INSERT OR REPLACE INTO t VALUES(?,?)",
                       ((str(i), veri) for i in range(1200)))
    list(db.execute("SELECT k FROM t"))
    db.close()


def _disk_yaz(yol, mb):
    blok = os.urandom(1024 * 1024)
    with open(yol, "wb") as f:
        for _ in range(mb):
            f.write(blok)
        f.flush()
        os.fsync(f.fileno())


def _disk_oku(yol):
    with open(yol, "rb") as f:
        while f.read(1024 * 1024):
            pass


def _ag_olc():
    """GitHub'a gecikme + indirme hızı. Çok makineli düzenin damarı bu."""
    sonuc = {}
    t = time.perf_counter()
    try:
        s = socket.create_connection(("github.com", 443), timeout=12)
        s.close()
        sonuc["github_gecikme_ms"] = round((time.perf_counter() - t) * 1000)
    except Exception:
        sonuc["github_gecikme_ms"] = ATLANDI
    # Gerçek iş: `git ls-remote` — pull/push'un el sıkışması
    try:
        t = time.perf_counter()
        r = subprocess.run(
            ["git", "ls-remote", "--heads",
             "https://github.com/Emrelic/osmanli-tarih-atlasi.git"],
            capture_output=True, text=True, timeout=90)
        sonuc["git_ls_remote_sn"] = (round(time.perf_counter() - t, 2)
                                     if r.returncode == 0 else ATLANDI)
    except Exception:
        sonuc["git_ls_remote_sn"] = ATLANDI
    return sonuc


# ── ÖLÇÜM ────────────────────────────────────────────────────────────────
def olc(hizli=False):
    r = {"surum": "olcut-1",
         "makine": socket.gethostname(),
         "zaman": __import__("datetime").datetime.now().isoformat(
             timespec="seconds"),
         "python": sys.version.split()[0],
         "platform": platform.platform()}

    cek = os.cpu_count() or 1
    r["cpu_sayisi"] = cek
    r["tekrar"] = TEKRAR

    print("ÖLÇÜT — %s  (%d mantıksal işlemci · her test %d kez, en iyisi alınır)"
          % (r["makine"], cek, TEKRAR))
    r["baslangic_yuk_yuzde"] = _yuk()
    if r["baslangic_yuk_yuzde"] is not None and r["baslangic_yuk_yuzde"] > 25:
        print("🔴 UYARI: makine ÖLÇÜMDEN ÖNCE %%%d yüklü. Sayılar düşük çıkar."
              % r["baslangic_yuk_yuzde"])
        print("   Güvenilir kıyas için önce ağır programları kapat.")
    else:
        print("   başlangıç yükü: %%%s" % r["baslangic_yuk_yuzde"])
    print("Sürüyor, makineyi bu sırada MEŞGUL ETME.\n")

    # ① tek çekirdek — SOĞUK
    print("  ① tek çekirdek (soğuk) ...", end="", flush=True)
    r["cpu_tek_soguk_sn"] = _sure(_cpu_tek, ad="cpu_tek_soguk")
    print(" %s sn" % r["cpu_tek_soguk_sn"])

    # ② numpy
    np = _kutuphane("numpy")
    if np:
        print("  ② numpy ızgara ...", end="", flush=True)
        r["numpy_sn"] = _sure(_numpy_is, np, ad="numpy")
        print(" %s sn" % r["numpy_sn"])
        print("  ③ çok iş parçacığı (%d) ..." % cek, end="", flush=True)
        r["cpu_cok_sn"] = _sure(_cpu_cok, np, cek, ad="cpu_cok")
        print(" %s sn" % r["cpu_cok_sn"])
    else:
        r["numpy_sn"] = r["cpu_cok_sn"] = ATLANDI
        print("  ②③ numpy KURULU DEĞİL — atlandı")

    # ④ shapely
    sh = _kutuphane("shapely")
    if sh:
        print("  ④ shapely geometri ...", end="", flush=True)
        r["shapely_sn"] = _sure(_shapely_is, sh, ad="shapely")
        print(" %s sn" % r["shapely_sn"])
    else:
        r["shapely_sn"] = ATLANDI
        print("  ④ shapely KURULU DEĞİL — atlandı")

    # ⑤ sqlite (önbellek)
    gecici = tempfile.mkdtemp(prefix="olcut-")
    print("  ⑤ sqlite önbellek yazımı ...", end="", flush=True)
    r["sqlite_sn"] = _sure(_sqlite_is, os.path.join(gecici, "t.sqlite"),
                           ad="sqlite")
    print(" %s sn" % r["sqlite_sn"])

    # ⑥ disk — 🔴 boş yer az ise ATLANIR (KASA'da 10,4 GB kaldı)
    r["disk_mb"] = 256
    bos_gb = None
    try:
        bos_gb = round(__import__("shutil").disk_usage(gecici).free / 2**30, 1)
    except Exception:
        pass
    r["disk_bos_gb"] = bos_gb
    if hizli or (bos_gb is not None and bos_gb < 3):
        r["disk_yaz_mbs"] = r["disk_oku_mbs"] = ATLANDI
        print("  ⑥ disk testi ATLANDI (%s)"
              % ("--hizli" if hizli else "boş yer %s GB < 3" % bos_gb))
    else:
        yol = os.path.join(gecici, "blok.bin")
        print("  ⑥ disk yaz/oku %d MB ..." % r["disk_mb"], end="", flush=True)
        # Disk testi TEKRARSIZ: 3 × 256 MB yazmak hem uzun sürer hem SSD'yi
        # boş yere yıpratır; ayrıca okuma ikinci turda işletim sisteminin
        # ÖNBELLEĞİNDEN gelir ve "700 MB/sn" gibi sahte bir hız üretirdi.
        y = _sure_tek(_disk_yaz, yol, r["disk_mb"])
        o = _sure_tek(_disk_oku, yol)
        r["disk_yaz_mbs"] = round(r["disk_mb"] / y) if y else ATLANDI
        r["disk_oku_mbs"] = round(r["disk_mb"] / o) if o else ATLANDI
        print(" yaz %s MB/sn · oku %s MB/sn"
              % (r["disk_yaz_mbs"], r["disk_oku_mbs"]))

    # ⑦ ağ
    if hizli:
        r["ag"] = {}
        print("  ⑦ ağ testi ATLANDI (--hizli)")
    else:
        print("  ⑦ ağ (GitHub) ...", end="", flush=True)
        r["ag"] = _ag_olc()
        print(" gecikme %s ms · ls-remote %s sn"
              % (r["ag"].get("github_gecikme_ms"),
                 r["ag"].get("git_ls_remote_sn")))

    # ⑧ tek çekirdek — SICAK (ısı kısması sınavı)
    print("  ⑧ tek çekirdek (sıcak — ısı kısması sınavı) ...",
          end="", flush=True)
    r["bitis_yuk_yuzde"] = _yuk()
    r["cpu_tek_sicak_sn"] = _sure(_cpu_tek, ad="cpu_tek_sicak")
    print(" %s sn" % r["cpu_tek_sicak_sn"])

    try:
        __import__("shutil").rmtree(gecici, ignore_errors=True)
    except Exception:
        pass

    # 🔴 GÜRÜLTÜ — aletin kendi güvenilirliği. Aynı iş, aynı makine, arka
    # arkaya üç kez: en uzun / en kısa. 1'e yakınsa ortam sakin; 1,5'i
    # aşarsa ölçüm o makinenin gücünü DEĞİL, o anki arka planı ölçüyor.
    r["yayilim"] = dict(YAYILIM)
    r["gurultu"] = max(YAYILIM.values()) if YAYILIM else ATLANDI

    # 🔴 ISI KISMASI YALNIZ SAKİN ORTAMDA ÖLÇÜLEBİLİR — bir vakadan doğdu.
    # 28 Eylül 2026: arka planda koşu varken bu oran **2,61** çıktı, yani
    # "makine yükü taşıyamıyor" diyordu. Oysa ısı yoktu; sıcak testin üç
    # tekrarı da koşunun ağır bir anına denk gelmişti. Aynı makine bir
    # önceki ölçümde **0,98** ve **0,55** vermişti — üç ölçüm, üç ayrı hüküm.
    # ⇒ Meşgul makinede bu oran bir ÖLÇÜM DEĞİL GÜRÜLTÜDÜR ve sayı basmak
    #   yanlış teşhis üretir ("bu makineyi koşuya verme" der, oysa sebep
    #   makine değil ölçüm anıdır). Ölçemiyorsak `None` yazarız: `B9` —
    #   ölçülemedi ≠ yok ≠ temiz.
    # ⚠️ İLK NÖBETÇİM YANLIŞ ALANDI: "işlemci yükü %25'i aşarsa güvenme"
    # dedim, ama 8 mantıksal işlemcili makinede TEK çekirdeği doyuran bir
    # koşu yalnız %12 görünür — eşik hiç ötmedi ve 2,29'luk sahte bir ısı
    # kısması rapora girdi, puanı 100'den 43'e düşürdü. Doğru nöbetçi yük
    # değil GÜRÜLTÜdür: aynı işin üç tekrarı arasındaki fark.
    s, k = r.get("cpu_tek_soguk_sn"), r.get("cpu_tek_sicak_sn")
    if s and k and (r["gurultu"] or 9) <= 1.5:
        r["isi_kismasi"] = round(k / s, 2)
    else:
        r["isi_kismasi"] = ATLANDI
        r["isi_kismasi_neden"] = (
            "ortam gürültülü (yayılım %s) — makine boştayken yeniden ölç"
            % r["gurultu"])
    r["kosu_puani"] = _puan(r)
    return r


# ── PUAN ─────────────────────────────────────────────────────────────────
def _puan(r):
    """KOŞU PUANI — 100 = EMRELIC (28 Eylül 2026 tabanı).

    ⚠️ AĞIRLIKLAR BİR ÖLÇÜM DEĞİL, BİR HÜKÜMDÜR. Motorun aşama sürelerinden
    türetildi (koşu 16: gövde %49,5 · dönemler %28 · ötekiler %22) ama
    ağırlığı seçen bendim. Sayıyı kullanırken bunu unutma; ham ölçütler
    JSON'da duruyor ve tartışılabilir.
    """
    # 🔴 BU SAYILAR ÖLÇÜLDÜ, TAHMİN EDİLMEDİ — ve ilk sürümde TAHMİNDİ.
    # İlk yazdığımda numpy 0,62 · cpu_cok 1,55 · shapely 2,40 · sqlite 0,55
    # yazmıştım; EMRELIC'in gerçek ölçümü 1,335 · 0,415 · 0,38 · 1,298 çıktı
    # ve puan 100 yerine 278 oldu. Yani taban tahminle yazılırsa puan
    # MAKİNEYİ DEĞİL BENİM TAHMİNİMİ ölçer.
    # Kaynak: EMRELIC · 28 Eylül 2026 11:35 · i5-8250U · Win11 26200.
    # ⚠️ ÖLÇÜM KOŞU 17b SÜRERKEN ALINDI (makine boşta değildi) ⇒ EMRELIC'in
    #    gerçek gücü bundan bir miktar YÜKSEK. Koşu bitince boşta yeniden
    #    ölçülüp bu satırlar tazelenecek; o güne kadar boştaki makineler
    #    100'ün bir parça üstünde görünür. Bu bir yanlılıktır ve BİLİNİYOR.
    TABAN = {"cpu_tek_soguk_sn": 0.371, "numpy_sn": 0.318, "cpu_cok_sn": 0.251,
             "shapely_sn": 0.310, "sqlite_sn": 0.435, "disk_yaz_mbs": 165.0,
             "disk_oku_mbs": 658.0}
    AGIRLIK = {"cpu_tek_soguk_sn": 30, "shapely_sn": 25, "cpu_cok_sn": 20,
               "numpy_sn": 10, "sqlite_sn": 8, "disk_yaz_mbs": 4,
               "disk_oku_mbs": 3}
    top = pay = 0.0
    for ad, taban in TABAN.items():
        deger = r.get(ad)
        if not deger:
            continue                      # ölçülemedi ⇒ puana GİRMEZ
        # süre ölçütlerinde küçük iyi, hız ölçütlerinde büyük iyi
        oran = (taban / deger) if ad.endswith("_sn") else (deger / taban)
        top += AGIRLIK[ad] * oran
        pay += AGIRLIK[ad]
    if not pay:
        return ATLANDI
    puan = round(100 * top / pay)
    # ısı kısması cezası: 6 saat koşacak makine için bu gerçek bir kayıptır
    if r.get("isi_kismasi") and r["isi_kismasi"] > 1.15:
        puan = round(puan / r["isi_kismasi"])
    return puan


# ── ÇIKTI ────────────────────────────────────────────────────────────────
def bas(r):
    eksik = [a for a in ("numpy_sn", "shapely_sn") if not r.get(a)]
    print("\n" + "=" * 58)
    print("KOPYALANABİLİR ÖZET — WhatsApp'tan gönderilebilir")
    print("=" * 58)
    print("OLCUT %s | %s | baslangic yuku %%%s | her test %s kez"
          % (r["makine"], r["zaman"][:16], r.get("baslangic_yuk_yuzde"),
             r.get("tekrar")))
    print("cpu_tek   %s sn   (soguk)" % r.get("cpu_tek_soguk_sn"))
    print("cpu_tek   %s sn   (sicak)  isi kismasi %s"
          % (r.get("cpu_tek_sicak_sn"),
             r.get("isi_kismasi") or ("OLCULEMEDI - " +
                                      str(r.get("isi_kismasi_neden")))))
    print("gurultu   %s      (1.0 = sakin, 1.5 ustu = GUVENILMEZ)"
          % r.get("gurultu"))
    print("cpu_cok   %s sn   (%s is parcacigi)"
          % (r.get("cpu_cok_sn"), r.get("cpu_sayisi")))
    print("numpy     %s sn" % r.get("numpy_sn"))
    print("shapely   %s sn" % r.get("shapely_sn"))
    print("sqlite    %s sn" % r.get("sqlite_sn"))
    print("disk      yaz %s / oku %s MB-sn"
          % (r.get("disk_yaz_mbs"), r.get("disk_oku_mbs")))
    print("ag        gecikme %s ms | ls-remote %s sn"
          % ((r.get("ag") or {}).get("github_gecikme_ms"),
             (r.get("ag") or {}).get("git_ls_remote_sn")))
    print("KOSU PUANI %s   (EMRELIC = 100)" % r.get("kosu_puani"))
    if eksik:
        print("!! MOTOR KUTUPHANESI EKSIK: %s" % ", ".join(
            a.replace("_sn", "") for a in eksik))
        print("!! Bu makine BUGUN kosu yapamaz. Care:")
        print("   py -m pip install numpy shapely rasterio scipy contourpy")
    print("=" * 58)


def yaz(r):
    try:
        os.makedirs(DIZIN, exist_ok=True)
    except Exception:
        return None
    ad = "".join(c if (c.isalnum() or c in "-_") else "-"
                 for c in r["makine"]).lower()
    yol = os.path.join(DIZIN, "olcut-%s.json" % ad)
    try:
        with open(yol, "w", encoding="utf-8") as f:
            json.dump(r, f, ensure_ascii=False, indent=2, sort_keys=True)
            f.write("\n")
        return yol
    except Exception:
        return None


def tablo():
    if not os.path.isdir(DIZIN):
        print("🔴 %s YOK — hiçbir makine ölçüt yazmamış." % DIZIN)
        return 1
    kayit = []
    for f in sorted(os.listdir(DIZIN)):
        if f.startswith("olcut-") and f.endswith(".json"):
            try:
                with open(os.path.join(DIZIN, f), encoding="utf-8") as fh:
                    kayit.append(json.load(fh))
            except Exception as e:
                print("⚠️ %s okunamadı: %s" % (f, e))
    if not kayit:
        print("🔴 ölçüt dosyası yok.")
        return 1
    kayit.sort(key=lambda x: -(x.get("kosu_puani") or 0))
    print("═══ %d MAKİNE · KOŞU PUANI (EMRELIC = 100) ═══\n" % len(kayit))
    print("%-12s %5s %7s %7s %7s %8s %6s %7s"
          % ("makine", "PUAN", "cpu1", "cpuN", "shapely", "diskYaz", "ısı", "sqlite"))
    print("-" * 70)
    for r in kayit:
        print("%-12s %5s %7s %7s %7s %8s %6s %7s"
              % (r.get("makine", "?")[:12], r.get("kosu_puani"),
                 r.get("cpu_tek_soguk_sn"), r.get("cpu_cok_sn"),
                 r.get("shapely_sn"), r.get("disk_yaz_mbs"),
                 r.get("isi_kismasi"), r.get("sqlite_sn")))
    print("\n🔴 Eksik kütüphanesi olan makine KOŞU YAPAMAZ — puanı yüksek olsa bile:")
    for r in kayit:
        eks = [a.replace("_sn", "") for a in ("numpy_sn", "shapely_sn")
               if not r.get(a)]
        if eks:
            print("   %-12s eksik: %s" % (r.get("makine"), ", ".join(eks)))
    print("\n⚠️ PUAN bir HÜKÜMDÜR (ağırlıklar seçildi), ham ölçütler JSON'da.")
    return 0


def gonder(yol):
    if not yol:
        print("⚠️ JSON yazılamadı (depo yok) — özeti elle gönder.")
        return
    bagil = os.path.relpath(yol, KOK).replace("\\", "/")
    mes = os.path.join(KOK, ".olcut-commit.txt")
    with open(mes, "w", encoding="utf-8") as f:
        f.write("olcut: %s\n" % os.path.basename(yol))
    try:
        for c in (["add", "--", bagil], ["commit", "-F", mes, "--", bagil],
                  ["pull", "--rebase"], ["push"]):
            p = subprocess.run(["git", "-C", KOK] + c, capture_output=True,
                               text=True, timeout=300)
            print("  git %-8s çıkış %s" % (c[0], p.returncode))
    finally:
        if os.path.isfile(mes):
            os.remove(mes)


if __name__ == "__main__":
    if len(sys.argv) > 1 and sys.argv[1] == "tablo":
        sys.exit(tablo())
    rapor = olc(hizli="--hizli" in sys.argv)
    bas(rapor)
    p = yaz(rapor)
    if p:
        print("\n✓ yazıldı: %s" % p)
    if "--gonder" in sys.argv:
        gonder(p)
