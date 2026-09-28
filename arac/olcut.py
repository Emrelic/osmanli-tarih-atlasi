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
    # 🔴 İŞ MİKTARI SABİT — 8 PARÇA, iş parçacığı sayısı NE OLURSA OLSUN.
    # İlk sürüm `ex.map(_is, range(isci))` yazıyordu: görev sayısı = işçi
    # sayısı ⇒ 8 iş parçacıklı makine 8 birim iş yapıyor, 4 iş parçacıklı
    # makine YALNIZ 4 BİRİM. Ölçüm makineleri kıyaslamıyor, her makineye
    # KENDİ boyunda bir sınav veriyordu — ve az çekirdekliyi haksız
    # ödüllendiriyordu. Ölçülen sonuç: KASA (4 iş parçacığı) 0,14 sn ile
    # UMIT'in (8 iş parçacığı) 0,134'üne neredeyse eşit göründü; oysa
    # yarısı kadar iş yapmıştı.
    # ⇒ Sabit 8 parça: her makine AYNI işi yapar, fark paralellikten gelir.
    from concurrent.futures import ThreadPoolExecutor
    PARCA = 8
    a = np.random.random(2_000_000)

    def _is(_):
        for _ in range(6):
            np.sqrt(a).sum()

    with ThreadPoolExecutor(max_workers=isci) as ex:
        list(ex.map(_is, range(PARCA)))


def _ram_is(np):
    """RAM bant genişliği — kopyala + topla. Motorun ızgarası 20,88 M hücre.

    ⚠️ Dizi boyu 64 MB'de SABİT: 8 GB'lık makinede (HAVVA 7,75 GB, üstelik
    0,31 GB boş) daha büyüğü takasa düşer ve ölçüm RAM'i değil DİSKİ ölçer.
    """
    a = np.ones(8_000_000, dtype=np.float64)     # 64 MB
    for _ in range(8):
        b = a.copy()
        b.sum()


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


# ── KÜNYE + SAĞLIK: TEK PowerShell ÇAĞRISI ───────────────────────────────
# 🔴 ON AYRI ÇAĞRI YERİNE BİR ÇAĞRI: her `powershell -Command` açılışı bu
# makinede ~0,5-1,5 sn. On ölçüm on çağrı olsaydı alet tek başına 10 sn
# harcar ve ÖLÇÜMÜN KENDİSİ gürültü kaynağı olurdu (yukarıdaki `_sure`
# vakasının aynısı). Hepsi tek betikte, tek JSON döner.
_PS_KUNYE = r"""
$ErrorActionPreference='SilentlyContinue'
# 🔴 SEVIYEYE GORE SUZ — ve bu satir bir yanlis alarmdan dogdu.
# Ilk surum butun `disk` saglayici olaylarini sayiyordu ve "400 disk hatasi"
# basti; oysa o kova bilgi amacli olaylari da iceriyordu ve sayi MaxEvents
# ustune dayanmisti. Seviye suzgeci olmadan sayi bir OLCUM degil bir ALARMDIR.
# Level: 1=Kritik 2=Hata 3=Uyari. Kritik+Hata ayri, Uyari ayri sayilir; ve
# `ustsinir` alani sayinin tavana DAYANIP DAYANMADIGINI soyler.
function S($n,$p,$i){ $f=@{LogName='System'; Level=@(1,2,3)}
  if($p){$f['ProviderName']=$p}; if($i){$f['Id']=$i}
  $e=@(Get-WinEvent -FilterHashtable $f -MaxEvents 2000)
  $ag=@($e | Where-Object {$_.Level -le 2})
  $son=$null; if($e.Count -gt 0){ $son=$e[0].TimeCreated.ToString('s') }
  $ilk=$null; if($e.Count -gt 0){ $ilk=$e[-1].TimeCreated.ToString('s') }
  @{ ad=$n; sayi=$e.Count; agir=$ag.Count; son=$son; ilk=$ilk
     ustsinir=($e.Count -ge 2000) } }
$o=Get-CimInstance Win32_OperatingSystem
$c=@(Get-CimInstance Win32_Processor)[0]
$guc=(powercfg /getactivescheme) -join ' '
$sql=@(Get-Process sqlservr)
$agir=@(Get-Process | Sort-Object WorkingSet64 -Descending | Select-Object -First 8 |
   ForEach-Object { @{ ad=$_.ProcessName; mb=[int]($_.WorkingSet64/1MB) } })
$srk=@(Get-PhysicalDisk | ForEach-Object { $d=$_; $r=$d | Get-StorageReliabilityCounter
   @{ ad=$d.FriendlyName; tip="$($d.MediaType)"; saglik="$($d.HealthStatus)"
      gb=[int]($d.Size/1GB); asinma=$r.Wear; sicaklik=$r.Temperature
      okuma_hata=$r.ReadErrorsTotal; yazma_hata=$r.WriteErrorsTotal
      acik_saat=$r.PowerOnHours } })
@{
  makine        = $env:COMPUTERNAME
  os            = "$($o.Caption) b$($o.BuildNumber)"
  kasa          = (@(Get-CimInstance Win32_SystemEnclosure).ChassisTypes -join ',')
  cpu           = $c.Name
  cekirdek      = $c.NumberOfCores
  is_parcacigi  = $c.NumberOfLogicalProcessors
  mhz_nominal   = $c.MaxClockSpeed
  mhz_simdi     = $c.CurrentClockSpeed
  ram_gb        = [math]::Round($o.TotalVisibleMemorySize/1MB,2)
  ram_bos_gb    = [math]::Round($o.FreePhysicalMemory/1MB,2)
  ram_mhz       = ((@(Get-CimInstance Win32_PhysicalMemory).Speed | Sort-Object -Unique) -join '/')
  takas_mb      = (@(Get-CimInstance Win32_PageFileUsage) | Measure-Object AllocatedBaseSize -Sum).Sum
  gpu           = ((@(Get-CimInstance Win32_VideoController).Name) -join ' + ')
  ip            = ((@(Get-NetIPAddress -AddressFamily IPv4 |
                     Where-Object {$_.IPAddress -notlike '127.*' -and
                                   $_.IPAddress -notlike '169.254.*'}).IPAddress) -join ' ')
  acik_sn       = [int]((Get-Date) - $o.LastBootUpTime).TotalSeconds
  guc_plani     = $guc
  sql_server    = @{ surec=$sql.Count
                     mb=[int]((($sql | Measure-Object WorkingSet64 -Sum).Sum)/1MB) }
  agir_surecler = $agir
  diskler       = $srk
  kayitlar      = @(
     (S 'isi_kismasi'      'Microsoft-Windows-Kernel-Processor-Power' 37),
     (S 'beklenmedik_kapanma' $null 41),
     (S 'donanim_hatasi'   'Microsoft-Windows-WHEA-Logger' $null),
     (S 'disk_hatasi'      'disk' $null),
     (S 'bellek_tukendi'   $null 2004),
     (S 'mavi_ekran'       'Microsoft-Windows-WER-SystemErrorReporting' 1001)
  )
} | ConvertTo-Json -Depth 6 -Compress
"""


def _kunye_ve_saglik():
    """Donanım künyesi + Windows'un KENDİ performans/sağlık kayıtları.

    🔴 NİÇİN LOGLAR BENİM TESTİMDEN DEĞERLİ: benim ısı sınavım 2 dakikalık
    bir fotoğraftır; `Kernel-Processor-Power` olay 37 ise Windows'un AYLARCA
    tuttuğu kayıttır — "bu işlemci gerçekten kısıldı mı" sorusunu tarihiyle
    cevaplar. Aynı şekilde `beklenmedik_kapanma` (olay 41) bir makinenin 6
    saatlik koşuyu taşıyıp taşımayacağını benim hiçbir testimden daha iyi
    söyler: rastgele kapanan makine koşuyu HER SEFERİNDE öldürür.
    """
    try:
        r = subprocess.run(
            ["powershell", "-NoProfile", "-NonInteractive", "-Command",
             _PS_KUNYE],
            capture_output=True, text=True, encoding="utf-8",
            errors="replace", timeout=240)
        ham = (r.stdout or "").strip()
        return json.loads(ham) if ham else ATLANDI
    except Exception:
        return ATLANDI


def _saglik_hukmu(k):
    """Kayıtlardan KOŞUYA UYGUNLUK hükmü. Her satır gerekçeli."""
    if not k:
        return ["künye/sağlık okunamadı — bu makine için hüküm YOK"]
    h = []
    kay = {x.get("ad"): x for x in (k.get("kayitlar") or []) if x}

    # 🔴 SEVİYE POLİTİKASI OLAY TÜRÜNE GÖRE DEĞİŞİR — iki yönlü hata yaptım:
    # ① İlk sürüm hiç süzmedi ⇒ "400 disk hatası" yanlış alarmı (gerçek: 2).
    # ② Sonra her şeyi kritik+hataya süzdüm ⇒ ısı kısması ve bellek tükenmesi
    #    KAYBOLDU, çünkü o iki olay tasarımı gereği Bilgi/Uyarı seviyesinde
    #    yazılır. Seviye, olayın ÖNEMİNİ değil Windows'un ETİKETİNİ söyler.
    # ⇒ Doğrusu: KİMLİĞİ BELLİ olay (37 ısı, 2004 bellek, 41 kapanma, 1001
    #   mavi ekran) TAMAMI sayılır — o kimlik zaten tek bir şey anlatır.
    #   SAĞLAYICI KOVASI (disk, WHEA) yüzlerce farklı olay taşır; orada
    #   yalnız kritik+hata sayılır.
    TAMAMI_SAYILIR = {"isi_kismasi", "bellek_tukendi",
                      "beklenmedik_kapanma", "mavi_ekran"}

    def _s(ad):
        x = kay.get(ad) or {}
        return (x.get("sayi") if ad in TAMAMI_SAYILIR else x.get("agir")) or 0

    def _ek(ad):
        x = kay.get(ad) or {}
        u = " (SAYI ÜST SINIRA DAYANDI, gerçeği daha çok)" if x.get(
            "ustsinir") else ""
        return "son %s · ilk %s%s" % (x.get("son"), x.get("ilk"), u)

    if _s("beklenmedik_kapanma"):
        h.append("🔴 %d beklenmedik kapanma (olay 41 · %s) — 6 saatlik koşu "
                 "her seferinde ölebilir"
                 % (_s("beklenmedik_kapanma"), _ek("beklenmedik_kapanma")))
    if _s("mavi_ekran"):
        h.append("🔴 %d mavi ekran (olay 1001 · %s)"
                 % (_s("mavi_ekran"), _ek("mavi_ekran")))
    if _s("donanim_hatasi"):
        h.append("🔴 %d donanım hatası (WHEA · %s) — RAM/işlemci şüpheli"
                 % (_s("donanim_hatasi"), _ek("donanim_hatasi")))
    if _s("disk_hatasi"):
        h.append("🔴 %d disk HATASI (kritik+hata · %s) — koşu 509 MB önbellek "
                 "+ 1,9 GB çıktı yazıyor; bozuk disk sessiz veri kaybıdır"
                 % (_s("disk_hatasi"), _ek("disk_hatasi")))
    if _s("bellek_tukendi"):
        h.append("⚠️ %d bellek tükenmesi (olay 2004 · %s)"
                 % (_s("bellek_tukendi"), _ek("bellek_tukendi")))
    if _s("isi_kismasi"):
        h.append("⚠️ %d ISI KISMASI (Kernel-Processor-Power 37 · %s) — uzun "
                 "koşuda hız düşer"
                 % (_s("isi_kismasi"), _ek("isi_kismasi")))

    # güç planı — boşta duran en büyük kazanç
    gp = (k.get("guc_plani") or "").lower()
    if "tasarruf" in gp or "saver" in gp:
        h.append("🔴 GÜÇ PLANI TASARRUF — işlemci hızlanmıyor. 'Yüksek "
                 "performans'a alınca bedelsiz hız kazanılır")
    elif "dengeli" in gp or "balanced" in gp:
        h.append("⚠️ güç planı DENGELİ — koşu makinesinde 'Yüksek performans' "
                 "daha iyi (masaüstünde bedeli yok)")

    # nominal hıza göre şu anki hız
    n, s = k.get("mhz_nominal"), k.get("mhz_simdi")
    if n and s and s < n * 0.8:
        h.append("⚠️ işlemci şu an %d MHz / nominal %d MHz (%%%d) — kısılmış "
                 "ya da tasarruf kipinde" % (s, n, round(100 * s / n)))

    # SQL Server — Emre'nin UMIT sorusu
    sql = k.get("sql_server") or {}
    if (sql.get("surec") or 0) > 0:
        h.append("🔴 SQL SERVER ÇALIŞIYOR: %d süreç · %s MB RAM. Koşu ~4 GB "
                 "istiyor; SQL Server tampon havuzunu BIRAKMAZ ⇒ bu makinede "
                 "koşu ancak SQL Server boştayken (gece) mantıklı"
                 % (sql.get("surec"), sql.get("mb")))

    # disk sağlığı
    for d in (k.get("diskler") or []):
        if (d.get("saglik") or "").lower() not in ("healthy", ""):
            h.append("🔴 DİSK SAĞLIĞI '%s': %s" % (d.get("saglik"), d.get("ad")))
        if d.get("asinma") is not None and d.get("asinma") > 60:
            h.append("⚠️ SSD aşınması %%%s: %s" % (d.get("asinma"), d.get("ad")))
        for a, ad in (("okuma_hata", "okuma"), ("yazma_hata", "yazma")):
            if d.get(a):
                h.append("🔴 %s hatası %s: %s" % (ad, d.get(a), d.get("ad")))
    if not h:
        h.append("✓ kayıtlarda koşuyu tehdit eden bir şey YOK")
    return h


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
    print("  ⓿ künye + Windows sağlık/performans kayıtları ...",
          end="", flush=True)
    r["kunye"] = _kunye_ve_saglik()
    print(" tamam" if r["kunye"] else " OKUNAMADI")
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
        print("  ③b RAM bant genişliği ...", end="", flush=True)
        r["ram_sn"] = _sure(_ram_is, np, ad="ram")
        # 8 tur × (64 MB kopya okuma + 64 MB yazma + 64 MB toplama okuma)
        r["ram_gbs"] = (round(8 * 3 * 0.0625 / r["ram_sn"], 1)
                        if r["ram_sn"] else ATLANDI)
        print(" %s sn (~%s GB/sn)" % (r["ram_sn"], r["ram_gbs"]))
    else:
        r["numpy_sn"] = r["cpu_cok_sn"] = ATLANDI
        r["ram_sn"] = r["ram_gbs"] = ATLANDI
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
    r["saglik_hukmu"] = _saglik_hukmu(r.get("kunye"))
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
    k = r.get("kunye") or {}
    if k:
        print("\n" + "-" * 58)
        print("KÜNYE")
        print("-" * 58)
        print("%s | %s | kasa %s" % (k.get("makine"), k.get("os"),
                                     k.get("kasa")))
        print("%s" % k.get("cpu"))
        print("%s cekirdek / %s is-parcacigi | nominal %s MHz | simdi %s MHz"
              % (k.get("cekirdek"), k.get("is_parcacigi"),
                 k.get("mhz_nominal"), k.get("mhz_simdi")))
        print("RAM %s GB (%s MHz) bos %s GB | takas %s MB"
              % (k.get("ram_gb"), k.get("ram_mhz"), k.get("ram_bos_gb"),
                 k.get("takas_mb")))
        print("GPU %s" % k.get("gpu"))
        print("IP  %s | acik %s saat" % (k.get("ip"),
                                         round((k.get("acik_sn") or 0) / 3600)))
        print("GUC %s" % (k.get("guc_plani") or "")[:70])
        for d in (k.get("diskler") or []):
            print("DISK %-26s %s %sGB saglik=%s asinma=%s sicaklik=%s "
                  "acik_saat=%s"
                  % (str(d.get("ad"))[:26], d.get("tip"), d.get("gb"),
                     d.get("saglik"), d.get("asinma"), d.get("sicaklik"),
                     d.get("acik_saat")))
        print("EN AGIR SURECLER: %s"
              % " | ".join("%s %sMB" % (p.get("ad"), p.get("mb"))
                           for p in (k.get("agir_surecler") or [])[:6]))
        print("-" * 58)
        print("WINDOWS KAYITLARI (son 400 olay)")
        print("  %-22s %6s %6s  %s" % ("olay", "kr+hata", "toplam", "son"))
        for x in (k.get("kayitlar") or []):
            print("  %-22s %6s %6s  %s%s"
                  % (x.get("ad"), x.get("agir"), x.get("sayi"), x.get("son"),
                     "  ÜSTSINIR!" if x.get("ustsinir") else ""))
        print("-" * 58)
        print("HUKUM")
        for s in (r.get("saglik_hukmu") or []):
            print("  " + s)

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
    print("ram       %s sn  (~%s GB/sn)" % (r.get("ram_sn"), r.get("ram_gbs")))
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
    # 🔴 PUANLAR KARŞILAŞTIRILABİLİR Mİ — sorulmadan basılırsa YANILTIR.
    # Kusur ölçüldü (28 Eylül 2026): `_puan` ölçülemeyen ölçütü puana
    # KATMIYOR (doğrusu bu — eksik kütüphaneyi 0 saymak yanlış olurdu). Ama
    # sonuç şu: shapely'si olmayan makine 25 puanlık kalemi HİÇ vermiyor ve
    # kalan kalemler üzerinden yüzdeleniyor. UMIT 178, Emrelic 153 çıktı —
    # ama UMIT'in 178'i shapely'siz, Emrelic'in 153'ü shapely'li hesaplandı.
    # İKİ AYRI SINAVIN NOTU YAN YANA KONMUŞ. ⇒ Tablo bunu artık SÖYLÜYOR.
    olculen = [set(a for a in ("cpu_tek_soguk_sn", "numpy_sn", "cpu_cok_sn",
                               "shapely_sn", "sqlite_sn", "disk_yaz_mbs",
                               "disk_oku_mbs") if r.get(a)) for r in kayit]
    ortak = set.intersection(*olculen) if olculen else set()
    hepsi = set.union(*olculen) if olculen else set()
    kayit.sort(key=lambda x: -(x.get("kosu_puani") or 0))
    print("═══ %d MAKİNE · KOŞU PUANI (EMRELIC = 100) ═══\n" % len(kayit))
    if ortak != hepsi:
        print("🔴 PUANLAR KARŞILAŞTIRILABİLİR DEĞİL: her makinede ölçülen")
        print("   ölçüt kümesi AYNI DEĞİL. Bütün makinelerde ölçülen: %s"
              % (", ".join(sorted(ortak)) or "YOK"))
        print("   Eksik olanlar puana katılmadı ⇒ farklı sınavların notları.")
        print("   ⇒ Sıralamayı PUANDAN değil, aşağıdaki HAM ölçütlerden oku.\n")
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
    gur = [(r.get("makine"), r.get("gurultu")) for r in kayit
           if (r.get("gurultu") or 0) > 1.5]
    if gur:
        print("\n🔴 GÜRÜLTÜLÜ ÖLÇÜM — bu makinelerin sayıları GÜVENİLMEZ, "
              "makine boştayken yeniden ölçülmeli:")
        for m, g in gur:
            print("   %-12s yayılım %s" % (m, g))
    print("\n⚠️ PUAN bir HÜKÜMDÜR (ağırlıklar seçildi), ham ölçütler JSON'da.")
    print("⚠️ `cpu_cok` 28 Eylül'e kadar HATALIYDI (iş miktarı iş parçacığı "
          "sayısıyla ölçekleniyordu, az çekirdekliyi ödüllendiriyordu).")
    print("   Düzeltildi; o sütun için ÖLÇÜM YENİLENMELİ.")
    return 0


DEPO = "https://github.com/Emrelic/osmanli-tarih-atlasi.git"


def _git(dizin, *a, sure=300):
    p = subprocess.run(["git", "-C", dizin] + list(a), capture_output=True,
                       text=True, encoding="utf-8", errors="replace",
                       timeout=sure)
    return p.returncode, ((p.stdout or "") + (p.stderr or "")).strip()


def _islemek(dizin, bagil, rapor_yolu):
    """Verilen depoda raporu yerine koy, commit'le, push'la."""
    hedef = os.path.join(dizin, bagil.replace("/", os.sep))
    os.makedirs(os.path.dirname(hedef), exist_ok=True)
    if os.path.abspath(hedef) != os.path.abspath(rapor_yolu):
        with open(rapor_yolu, encoding="utf-8") as f:
            veri = f.read()
        with open(hedef, "w", encoding="utf-8") as f:
            f.write(veri)
    mes = os.path.join(dizin, ".olcut-commit.txt")
    with open(mes, "w", encoding="utf-8") as f:
        f.write("olcut raporu: %s\n" % os.path.basename(bagil))
    try:
        for a in (("add", "--", bagil), ("commit", "-F", ".olcut-commit.txt",
                                         "--", bagil),
                  ("pull", "--rebase"), ("push",)):
            k, c = _git(dizin, *a)
            print("  git %-8s çıkış %s%s"
                  % (a[0], k, "" if k == 0 else "  → " + c.split("\n")[-1][:90]))
            if k != 0 and a[0] == "push":
                print("  🔴 PUSH BAŞARISIZ. En olası sebep: bu makinede GitHub "
                      "kimlik bilgisi yok.")
                print("     Çare: ekrandaki KOPYALANABİLİR ÖZET'i elle gönder "
                      "— rapor kaybolmadı, dosyada duruyor.")
                return False
        return True
    finally:
        if os.path.isfile(mes):
            os.remove(mes)


def gonder(yol):
    """Raporu GitHub'a yaz. Depo yoksa KENDİSİ minik bir kopya çeker.

    🔴 Emre'nin isteği (28 Eylül 2026): *"hem kodu inecek çalışacak verileri
    toplayıp githuba gönderecek, sen de oradan bakacaksın."* Deposu olmayan
    makinede (KASA'da 10,4 GB boş yer var) TAM klon ~2,4 GB inerdi. Onun
    yerine `--depth 1 --filter=blob:none --sparse`: yalnız son commit ve
    yalnız gereken klasör — birkaç MB.
    ⚠️ Yine de PUSH kimlik ister. Kimlik yoksa alet bunu AÇIKÇA söyler ve
    ekrandaki özeti elle göndermeye yönlendirir — sessizce başarısız olmaz.
    """
    if not yol:
        print("⚠️ rapor dosyası yazılamadı — ekrandaki özeti elle gönder.")
        return
    bagil = "oturumlar/donanim/" + os.path.basename(yol)

    if os.path.isdir(os.path.join(KOK, ".git")):
        print("→ yerel depo bulundu, doğrudan gönderiliyor")
        _islemek(KOK, bagil, yol)
        return

    print("→ yerel depo YOK; minik (sığ + nesnesiz) kopya çekiliyor")
    gec = tempfile.mkdtemp(prefix="olcut-depo-")
    kopya = os.path.join(gec, "atlas")
    k, c = subprocess.run(
        ["git", "clone", "--depth", "1", "--filter=blob:none", "--sparse",
         DEPO, kopya], capture_output=True, text=True, encoding="utf-8",
        errors="replace", timeout=900).returncode, ""
    if k != 0:
        print("  🔴 kopya çekilemedi — ekrandaki özeti elle gönder.")
        return
    _git(kopya, "sparse-checkout", "add", "oturumlar/donanim")
    _islemek(kopya, bagil, yol)


# ══ İZLEME — "son bir ayın ortalaması" sorusunun DÜRÜST cevabı ═══════════
# 🔴 Emre sordu: *"her bilgisayar ortalama nasıl bir işlemci ve ram ile
#   çalışıyor son bir aydır, bunları bakıp analiz edip raporlayabilir mi."*
#   CEVAP: GEÇMİŞ AY İÇİN HAYIR — ve bunu uydurmam.
#   Windows sürekli işlemci/RAM geçmişi TUTMAZ. `Get-Counter` yalnız O ANI
#   verir; `Diagnostics-Performance` günlüğü yalnız açılış/kapanış olaylarını
#   tutar; SRUM veritabanı (`System32\sru\SRUDB.dat`) uygulama başına veri
#   tutar ama şeması belgesiz ve ayrıştırıcısı üçüncü partidir — oradan
#   okunan sayıya "ölçtüm" demem.
#   ⇒ YAPILABİLEN: BUGÜNDEN itibaren örneklemek. 10 dakikada bir örnek, bir
#     hafta = ~1000 satır, ve rapor SAAT SAAT döküm verir — "UMIT gündüz
#     meşgul mü" sorusunun cevabı tam bu tabloda.
IZLE_BASLIK = "zaman,cpu_yuzde,ram_kullanim_yuzde,ram_bos_gb,en_agir,en_agir_mb\n"


def _izle_yol():
    if os.path.isdir(os.path.join(KOK, ".git")):
        d = DIZIN
    else:
        d = os.path.join(os.environ.get("LOCALAPPDATA", tempfile.gettempdir()),
                         "atlas-olcut")
    os.makedirs(d, exist_ok=True)
    return os.path.join(d, "ornek-%s.csv" % socket.gethostname().lower())


_PS_ORNEK = r"""
$ErrorActionPreference='SilentlyContinue'
$o=Get-CimInstance Win32_OperatingSystem
$c=(Get-CimInstance Win32_Processor | Measure-Object LoadPercentage -Average).Average
$p=Get-Process | Sort-Object WorkingSet64 -Descending | Select-Object -First 1
$kul=[math]::Round(100*($o.TotalVisibleMemorySize-$o.FreePhysicalMemory)/$o.TotalVisibleMemorySize)
"{0},{1},{2},{3},{4},{5}" -f (Get-Date -Format s),$c,$kul,
  [math]::Round($o.FreePhysicalMemory/1MB,2),$p.ProcessName,
  [int]($p.WorkingSet64/1MB)
"""


def izle_ornek():
    """Tek örnek al ve CSV'ye ekle. Zamanlanmış görev bunu çağırır."""
    try:
        r = subprocess.run(
            ["powershell", "-NoProfile", "-NonInteractive", "-Command",
             _PS_ORNEK], capture_output=True, text=True, encoding="utf-8",
            errors="replace", timeout=90)
        satir = (r.stdout or "").strip()
    except Exception:
        return 1
    if not satir:
        return 1
    yol = _izle_yol()
    yeni = not os.path.isfile(yol)
    with open(yol, "a", encoding="utf-8") as f:
        if yeni:
            f.write(IZLE_BASLIK)
        f.write(satir + "\n")
    return 0


def izle_kur(sil=False):
    ad = "Atlas-Olcut-Ornek"
    if sil:
        subprocess.run(["schtasks", "/Delete", "/TN", ad, "/F"],
                       capture_output=True, text=True)
        print("✓ zamanlanmış görev silindi: %s" % ad)
        return 0
    yorumlayici = __import__("shutil").which("pyw") or sys.executable
    komut = '"%s" "%s" izle --ornek' % (yorumlayici, os.path.abspath(__file__))
    p = subprocess.run(["schtasks", "/Create", "/TN", ad, "/TR", komut,
                        "/SC", "MINUTE", "/MO", "10", "/F"],
                       capture_output=True, text=True, encoding="utf-8",
                       errors="replace")
    if p.returncode == 0:
        print("✓ kuruldu: 10 dakikada bir örnek → %s" % _izle_yol())
        print("  bir hafta sonra:  py arac/olcut.py izle --rapor")
        print("  kaldırmak için:   py arac/olcut.py izle --sil")
    else:
        print("🔴 kurulamadı (çıkış %s): %s"
              % (p.returncode, ((p.stdout or "") + (p.stderr or "")).strip()[:200]))
        print("   Yönetici hakkı gerekebilir. Alternatif: makine açıkken")
        print("   ara ara `py arac/olcut.py izle --ornek` koştur.")
    return p.returncode


def izle_rapor():
    yol = _izle_yol()
    if not os.path.isfile(yol):
        print("🔴 örnek yok: %s" % yol)
        print("   Kur:  py arac/olcut.py izle --kur")
        print("   ⚠️ GEÇMİŞE DÖNÜK ortalama ÜRETİLEMEZ — Windows tutmuyor.")
        return 1
    satir = []
    with open(yol, encoding="utf-8") as f:
        f.readline()
        for s in f:
            p = s.strip().split(",")
            if len(p) >= 6:
                try:
                    satir.append((p[0], float(p[1]), float(p[2]), float(p[3]),
                                  p[4], int(p[5])))
                except Exception:
                    pass
    if not satir:
        print("🔴 okunabilir örnek yok.")
        return 1
    print("═══ İZLEME RAPORU — %s ═══" % socket.gethostname())
    print("örnek sayısı %d · ilk %s · son %s"
          % (len(satir), satir[0][0][:16], satir[-1][0][:16]))
    gun = (len(satir) * 10) / 1440.0
    print("kapsanan süre ≈ %.1f gün (10 dakikalık örneklerle)\n" % gun)
    print("%-6s %6s %8s %8s %9s  %s"
          % ("saat", "örnek", "cpu%ort", "cpu%tepe", "ram%ort", "en sık en ağır"))
    print("-" * 62)
    for s in range(24):
        g = [x for x in satir if x[0][11:13] == "%02d" % s]
        if not g:
            continue
        agir = {}
        for x in g:
            agir[x[4]] = agir.get(x[4], 0) + 1
        en = max(agir.items(), key=lambda t: t[1])[0]
        print("%02d:00  %6d %8.1f %8.0f %9.1f  %s"
              % (s, len(g), sum(x[1] for x in g) / len(g),
                 max(x[1] for x in g), sum(x[2] for x in g) / len(g), en))
    gunduz = [x for x in satir if 9 <= int(x[0][11:13]) < 19]
    gece = [x for x in satir if not (9 <= int(x[0][11:13]) < 19)]
    print("\n═══ GÜNDÜZ (09-19) / GECE karşılaştırması ═══")
    for ad, g in (("GÜNDÜZ", gunduz), ("GECE  ", gece)):
        if g:
            print("  %s  örnek %4d · cpu %%%.1f · ram %%%.1f · boş RAM %.2f GB"
                  % (ad, len(g), sum(x[1] for x in g) / len(g),
                     sum(x[2] for x in g) / len(g),
                     sum(x[3] for x in g) / len(g)))
        else:
            print("  %s  örnek YOK" % ad)
    print("\n📌 Koşu ~4 GB boş RAM ve boşta işlemci ister. Yukarıdaki hangi "
          "saat aralığı bunu karşılıyorsa koşu O SAATTE başlar.")
    return 0


if __name__ == "__main__":
    if len(sys.argv) > 1 and sys.argv[1] == "tablo":
        sys.exit(tablo())
    if len(sys.argv) > 1 and sys.argv[1] == "izle":
        if "--ornek" in sys.argv:
            sys.exit(izle_ornek())
        if "--kur" in sys.argv:
            sys.exit(izle_kur())
        if "--sil" in sys.argv:
            sys.exit(izle_kur(sil=True))
        sys.exit(izle_rapor())
    rapor = olc(hizli="--hizli" in sys.argv)
    bas(rapor)
    p = yaz(rapor)
    if p:
        print("\n✓ yazıldı: %s" % p)
    if "--gonder" in sys.argv:
        gonder(p)
