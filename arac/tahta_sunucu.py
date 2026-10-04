# -*- coding: utf-8 -*-
"""TAHTA SUNUCUSU — tahtanın TEK YAZICISI (TAHTA-WEB-1004, 4 Ekim 2026).

NİÇİN: tahta git'te bir MESAJ KUYRUĞUYDU. Ölçüldü: son 200 commit'in 78'i
(%39) tahta mesajı; `TAHTA.md` 78 + `tahta.json` 74 değişimle en çok çatışan
iki dosya (üçüncünün 8 katı). 3 Ekim'de UMIT'in deposu bu dosyadan rebase
ortasında kilitlendi. Kilidin KÖKÜ: numara `len(kayit)+1` ile YEREL, bayat
dosyadan üretiliyordu ⇒ iki makine AYNI numarayı aynı satıra yazıyordu.
⇒ Git bir sürüm denetimi aracıdır, mesaj yolu değil. Numarayı artık BU
  SÜREÇ verir; tek yazıcı ⇒ tek el ⇒ çakışma imkânsız.

DESEN `acici.py`den BİREBİR:
    sabit eylem listesi (istekten gelen hiçbir metin kabuğa/dosya yoluna geçmez)
    jeton `hmac.compare_digest` ile · YALNIZ özel ağ/loopback · her istek loglu

UÇLAR:
    POST /tahta/yaz        kim · kime · mesaj [· dayanak · aciliyet · ...]
                           → {"no": "M-xxxx"}  (numarayı SUNUCU verir)
    GET  /tahta/oku        [kim · son_no · hepsi · limit]  → mesajlar (JSON)
    POST /tahta/isaretle   kim · nolar          → "okundu" damgası
    POST /tahta/islem      eylem(teyit|tamam|kapat) · no · kim [· soz · kimlik]
    GET  /tahta            [son]                → OKUNUR HTML görüntü
Jeton: `X-Atlas-Jeton` başlığı ya da `?jeton=` (tarayıcı için).

AYAR: `oturumlar/ag.json` (gitignore) — `jeton` (acici ile ORTAK) ve
`"tahta_sunucu": "<IP>:<port>"`. Port yoksa 8788 (acici 8787'de).
🔴 Makine adı KODA GÖMÜLMEZ: sunucu hangi makinede koşarsa orada koşar.

ÇALIŞTIRMA:  py arac/tahta_sunucu.py            (sessiz: pythonw)
SINAV:       py denetim/ARAC-TAHTA-SUNUCU-SINAV-1004.py
             py denetim/ARAC-TAHTA-SUNUCU-COKLU-SINAV-1004.py
             py denetim/ARAC-TAHTA-MAKINELER-SINAV-1004.py

═══════════════════════════════════════════════════════════════════════════
🔴 ÇIKIŞ KODU SÖZLÜĞÜ — YAZILI, çünkü tanımsız kod oturum öldürür
═══════════════════════════════════════════════════════════════════════════
Vaka (3-4 Ekim 2026): ODAK-KAPAT'ın bekçisi "çıkış 4" ile düştü; `main()`
yalnız 0/2/3 dönüyordu ⇒ 4 DIŞARIDAN gelmişti, ama "bilinmeyen kod" diye
okunup oturum 9 saat görünmez kaldı.

  SÜREÇ ÇIKIŞI (tahta_sunucu.py)
    0  düzgün durdu (Ctrl+C) — kilit bırakıldı
    1  ARIZA: port açılamadı (başka süreç tutuyor / yetki) — kilit bırakıldı
    2  AYAR: ag.json yok ya da jeton kusurlu (`ayar_oku`)
    3  ⛔ KULLANILMAZ — projede "kurulamadı, TEKRAR DENEME" (KAYNAK-DURUM
       darboğazı, `tahta_bekci.py`) anlamında; çakışmasın diye BOŞ bırakıldı
    4  🆕 İKİNCİ SUNUCU: bu kaydın canlı bir sunucusu zaten var (`kilit_al`).
       TEKRAR DENEME — ötekini durdur ya da bayatlamasını bekle (3×nabız+5 sn).
       Yeni kod, çünkü 1 (arıza) yanlış olurdu: ortada bozuk bir şey yok,
       KORUMA çalıştı; ve 3 başka anlama ayrılmış.
    (Windows'ta sert öldürme — TerminateProcess — kodu ÖLDÜRENİN verdiği
     koddur; yukarıdakilerden biri değilse süreç DIŞARIDAN düşürülmüştür.)

  CEVAP GÖVDESİNDEKİ "kod" ALANI → `tahta.py` bunu ÇIKIŞ KODU olarak döner
    2  istek reddedildi (HERKES kapısı, eksik alan, olmayan --yanit no)
    4  SUNUCU ÇATIŞMASI: bu sunucu kilidini kaybetti, YAZMIYOR (HTTP 503).
       İstemci yerele DÜŞMEZ — düşmek bölünmeyi derinleştirirdi.
    (`tahta.py`nin kendi 3'ü: YEREL tahta.json yazılamadı — `_kaydet`.
     Sunucu gövdesi 3 DÖNMEZ; 4 Ekim'e kadar dönüyordu ve o anlamla çakışıyordu.)
"""
import contextlib
import gzip
import hmac
import html
import io
import ipaddress
import json
import os
import socket
import sys
import threading
import time
from http.server import BaseHTTPRequestHandler, ThreadingHTTPServer
from urllib.parse import urlparse, parse_qs

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import tahta as T          # noqa: E402 — iş mantığı TEK YERDE: tahta.py
# 🔴 stderr de utf-8: "İKİNCİ SUNUCU" uyarısı cp1254 ile basılıp okuyanda
#   bozuluyordu (sınav Y2 yakaladı). Alarm okunamıyorsa çalmamış sayılır.
try:
    sys.stderr.reconfigure(encoding="utf-8", errors="replace")
except Exception:
    pass

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
AYAR_YOLU = os.path.join(KOK, "oturumlar", "ag.json")
GUNLUK = os.path.join(KOK, "oturumlar", "tahta_sunucu.log")
PORT_VARSAYILAN = 8788
GOVDE_TAVAN = 1024 * 1024          # 1 MB — tek mesaj bundan büyük olamaz

# 🔴 TEK KİLİT: bütün oku-değiştir-yaz bu kilit altında. Numara burada doğar.
# Dosya kilidi (`T._Kilit`) AYRICA alınır: sunucu makinesinde düşüşe geçmiş
# (yerel yazan) bir istemci aynı dosyaya dokunabilir — ikisi birbirini bekler.
KILIT = threading.Lock()
_ONBELLEK = {"mtime": None, "boy": None, "kayit": None}

# ═══════════════════════════════════════════════════════════════════════════
# 🔴🔴 TEK YAZICI GARANTİSİ "BİR SUNUCU VAR" VARSAYIMINA DAYANIYOR
#   (koordinatör, 4 Ekim 2026). Kabul ölçütü (20 eşzamanlı yazım → 20 ayrı
#   numara) BİR sunucu içinde geçerliydi. İki yüzü ayrıca kapatılıyor:
#   ① YENİDEN BAŞLAMA: numara bellekte değil KAYITTAN türetilir (en büyük+1)
#      ⇒ süreç ölüp kalkınca kaldığı yerden sürer. Eczane makineleri günde bir
#      açılıp kapanıyor; numara her sabah sıfırlansaydı tahta ilk gün ölürdü.
#   ② İKİ SUNUCU: (a) AYNI kayda ikinci süreç → `<tahta>.sunucu` kilidi canlıysa
#      AÇILMAZ, çıkış 4 · (b) koşarken kilit başkasınca ele geçirilirse YAZMAYI
#      REDDEDER (503) · (c) FARKLI makinelerde iki ayrı kayıt → bu iki süreç
#      birbirini HİÇ göremez; onu İSTEMCİ yakalar: her cevapta `sunucu` bloğu
#      (makine · tahta_imza · son_no) döner, istemci bir öncekiyle karşılaştırır
#      ve imza değişir ya da numara gerilerse BAĞIRIR (`tahta._sunucu_denetle`).
#   Sessiz ikinci sunucu, sessiz düşüşten kötüdür.
# ═══════════════════════════════════════════════════════════════════════════
MAKINE = socket.gethostname()
NABIZ_SN = 20.0
_DURUM = {"kilit_kaybi": "", "baslangic": time.strftime("%Y-%m-%d %H:%M:%S")}


def _kilit_yolu():
    return T.VERI + ".sunucu"


def _pid_canli(pid):
    """🔴 Windows'ta `os.kill(pid, 0)` SÜRECİ ÖLDÜRÜR (TerminateProcess) —
    canlılık OpenProcess + GetExitCodeProcess ile sorulur."""
    try:
        pid = int(pid)
    except (TypeError, ValueError):
        return False
    if os.name == "nt":
        import ctypes
        k = ctypes.windll.kernel32
        h = k.OpenProcess(0x1000, False, pid)        # QUERY_LIMITED_INFORMATION
        if not h:
            return False
        try:
            kod = ctypes.c_ulong()
            return bool(k.GetExitCodeProcess(h, ctypes.byref(kod))) and kod.value == 259
        finally:
            k.CloseHandle(h)
    try:
        os.kill(pid, 0)
        return True
    except OSError:
        return False


def _kilit_oku():
    try:
        with io.open(_kilit_yolu(), encoding="utf-8") as f:
            return json.load(f)
    except Exception:
        return None


def _kilit_yaz(port):
    d = {"makine": MAKINE, "pid": os.getpid(), "port": port,
         "baslangic": _DURUM["baslangic"], "damga": time.time(), "nabiz": NABIZ_SN}
    gec = _kilit_yolu() + ".yeni.%d" % os.getpid()
    with io.open(gec, "w", encoding="utf-8") as f:
        json.dump(d, f, ensure_ascii=False)
    os.replace(gec, _kilit_yolu())


def kilit_al(port):
    """(tamam, açıklama). Canlı bir başka sunucu varsa tamam=False."""
    k = _kilit_oku()
    if k and not (k.get("makine") == MAKINE and k.get("pid") == os.getpid()):
        yas = time.time() - float(k.get("damga") or 0)
        esik = 3 * float(k.get("nabiz") or NABIZ_SN) + 5
        ayni_makine = k.get("makine") == MAKINE
        # Aynı makinede PID + nabız BİRLİKTE: yeniden açılıştan sonra PID başka
        # bir sürece verilmiş olabilir — yalnız PID'e bakmak, her sabah
        # "ikinci sunucu" yalanıyla sunucuyu AÇTIRMAZDI. Nabız eskiyse bayattır.
        canli = (_pid_canli(k.get("pid")) and yas <= esik) if ayni_makine else yas <= esik
        if canli:
            return False, ("🔴 İKİNCİ SUNUCU — bu kaydın sunucusu ZATEN koşuyor: makine=%s "
                           "pid=%s port=%s başlangıç=%s (son nabız %.0f sn önce). AÇILMADIM: "
                           "iki sunucu iki ayrı numara dizisi üretir — kaçtığımız çakışma."
                           % (k.get("makine"), k.get("pid"), k.get("port"),
                              k.get("baslangic"), yas))
        _kilit_yaz(port)
        return True, ("⚠️ BAYAT SUNUCU KİLİDİ devralındı: makine=%s pid=%s (%s) — önceki "
                      "sunucu düzgün kapanmamış." % (k.get("makine"), k.get("pid"),
                                                     "süreç ölü" if ayni_makine else
                                                     "nabız %.0f sn eski" % yas))
    _kilit_yaz(port)
    return True, "sunucu kilidi alındı (%s)" % _kilit_yolu()


def _nabiz_dongusu(port, dur):
    while not dur.wait(NABIZ_SN):
        k = _kilit_oku()
        if not k or k.get("pid") != os.getpid() or k.get("makine") != MAKINE:
            if not _DURUM["kilit_kaybi"]:
                _DURUM["kilit_kaybi"] = ("sunucu kilidi BAŞKASINDA: makine=%s pid=%s"
                                         % ((k or {}).get("makine"), (k or {}).get("pid")))
                gunluk("🔴 %s — YAZMALAR REDDEDİLİYOR" % _DURUM["kilit_kaybi"])
            continue
        try:
            _kilit_yaz(port)
        except OSError as e:
            gunluk("⚠️ nabız yazılamadı: %s" % e)


def kilit_birak():
    k = _kilit_oku()
    if k and k.get("pid") == os.getpid() and k.get("makine") == MAKINE:
        try:
            os.remove(_kilit_yolu())
        except OSError:
            pass


def _yazma_yasak():
    if _DURUM["kilit_kaybi"]:
        return 503, {"tamam": False, "kod": 4,
                     "sebep": "SUNUCU ÇATIŞMASI — %s; bu sunucu artık yazmıyor"
                              % _DURUM["kilit_kaybi"]}
    return None


def _tahta_imza(kayit):
    """Kaydın SOY imzası: ilk mesajdan türetilir — kayıt silinir/değişirse
    ya da istemci başka bir makinenin ayrı kaydına bağlanırsa DEĞİŞİR."""
    import hashlib
    if not kayit:
        return "bos"
    m = kayit[0]
    ham = "%s|%s|%s|%s" % (m.get("no"), m.get("zaman"), m.get("kimden"),
                           (m.get("mesaj") or "")[:80])
    return hashlib.sha256(ham.encode("utf-8")).hexdigest()[:12]


def _kimlik_blogu():
    """KILIT altında çağrılır. Her JSON cevabına eklenir."""
    kayit = _kayit()
    return {"makine": MAKINE, "pid": os.getpid(), "baslangic": _DURUM["baslangic"],
            "tahta_imza": _tahta_imza(kayit),
            "son_no": max([_no_sayi(m.get("no")) for m in kayit] or [0])}


# ═══════════════════════════════════════════════════════════════════════════
# 🔴 MAKİNE DEFTERİ — bölünmeyi GÖRÜNÜR kılar (koordinatör, 4 Ekim 2026)
#   Yanlış sunucuya bağlı bir makine HATASIZ çalışır: yazar, kendi tahtasını
#   okur — ve kimse onu görmez. Hata yok, uyarı yok, yalnız YOKLUK. `ag.json`
#   gitignore'da ve ELLE kopyalanıyor; ayrışmaması umut edilir, ölçülmez.
#   ⇒ Sunucu her istekte istemcinin bildirdiği makine adını, IP'sini ve
#     son yazma/okuma anını kaydeder; `GET /tahta/makineler` ve `GET /tahta`
#     (HTML) bunu basar. Kendi `ag.json`undaki `makineler` listesinden HİÇ
#     görünmeyen makine "GÖRÜLMEDİ" diye işaretlenir ⇒ koordinatör olumsuz
#     değil OLUMLU kanıt okur: "dört makinenin dördü bu sunucuya yazmış".
#     Listede yoksa ya KAPALIDIR (`bekci_olc.py` de söyler) ya BAŞKA SUNUCUDADIR.
#   Mantık bekçi nabzının aynısı: sessizlik ölçülebilir hâle getirilir.
# ⚠️⚠️ MAKİNE ADI İSTEMCİNİN BEYANIDIR, KİMLİK DOĞRULAMA DEĞİLDİR.
#   `X-Atlas-Makine` başlığını jetonu bilen herkes istediği gibi yazar; burada
#   DOĞRULANMAZ, yalnız KAYDEDİLİR. Erişimi koruyan jeton + özel ağdır, bu
#   alan değil. Yanında ölçülen IP de durur ve `ag.json` IP'leriyle eşleşip
#   eşleşmediği AYRICA gösterilir — beyan ile ölçüm yan yana, karışmadan.
# ═══════════════════════════════════════════════════════════════════════════
MAKINELER = {}                  # beyan edilen ad → kayıt
BEKLENEN = {}                   # ag.json `makineler`: ad → IP (sunucunun kendi ayarı)
_MK_KILIT = threading.Lock()
_MK_DURUM = {"son_kayit": 0.0}
MK_KAYIT_ARA = 30.0             # defter diske en çok bu sıklıkla yazılır


def _mk_yolu():
    return T.VERI + ".makineler.json"


def makineler_yukle():
    try:
        with io.open(_mk_yolu(), encoding="utf-8") as f:
            d = json.load(f)
        if isinstance(d, dict):
            MAKINELER.update(d)
    except Exception:
        pass


def _mk_diske(zorla=False):
    if not zorla and time.time() - _MK_DURUM["son_kayit"] < MK_KAYIT_ARA:
        return
    try:
        gec = _mk_yolu() + ".yeni.%d" % os.getpid()
        with io.open(gec, "w", encoding="utf-8") as f:
            json.dump(MAKINELER, f, ensure_ascii=False, indent=1)
        os.replace(gec, _mk_yolu())
        _MK_DURUM["son_kayit"] = time.time()
    except OSError as e:
        gunluk("⚠️ makine defteri yazılamadı: %s" % e)


def _beyan_temizle(s):
    from urllib.parse import unquote
    s = "".join(ch for ch in unquote(str(s or "")) if ch.isprintable()).strip()
    return s[:64]


def makine_isle(beyan, ip, yazma, kim=""):
    """Her yetkili istekte çağrılır. `beyan` DOĞRULANMAZ (yukarıya bak)."""
    ad = _beyan_temizle(beyan) or ("? (%s)" % ip)
    simdi = time.strftime("%Y-%m-%d %H:%M:%S")
    with _MK_KILIT:
        yeni = ad not in MAKINELER
        d = MAKINELER.setdefault(ad, {"ilk": simdi, "istek": 0, "son_yazma": "",
                                      "son_okuma": "", "ip": "", "son_kim": ""})
        d["istek"] = int(d.get("istek") or 0) + 1
        d["ip"] = ip
        d["son_yazma" if yazma else "son_okuma"] = simdi
        d["son_damga"] = time.time()
        if kim:
            d["son_kim"] = _beyan_temizle(kim)
        _mk_diske(zorla=yeni)
        if yeni:
            gunluk("ℹ️ YENİ MAKİNE (beyan): %s · ip %s" % (ad, ip))


def makine_tablosu():
    """Görülenler + ag.json'da olup HİÇ görülmeyenler. Beyan ≠ ölçüm."""
    ip_ad = {}
    for ad, ip in (BEKLENEN or {}).items():
        ip_ad.setdefault(str(ip), []).append(ad)
    simdi = time.time()
    satir = []
    with _MK_KILIT:
        gorulen = json.loads(json.dumps(MAKINELER))
    eslesen = set()
    for ad, d in sorted(gorulen.items()):
        ag_ad = ip_ad.get(d.get("ip"), [])
        eslesen.update(ag_ad)
        eslesen.update(b for b in BEKLENEN if b.upper() == ad.upper())
        satir.append({"beyan": ad, "ip": d.get("ip"), "ag_json_eslesme": ag_ad,
                      "son_yazma": d.get("son_yazma") or "", "son_okuma": d.get("son_okuma") or "",
                      "son_istek_sn_once": int(simdi - float(d.get("son_damga") or 0))
                      if d.get("son_damga") else None,
                      "istek": d.get("istek"), "son_kim": d.get("son_kim") or "",
                      "durum": "GÖRÜLDÜ"})
    for ad, ip in sorted((BEKLENEN or {}).items()):
        if ad not in eslesen:
            satir.append({"beyan": ad, "ip": ip, "ag_json_eslesme": [ad],
                          "son_yazma": "", "son_okuma": "", "son_istek_sn_once": None,
                          "istek": 0, "son_kim": "",
                          "durum": "GÖRÜLMEDİ — kapalı ya da BAŞKA SUNUCUDA"})
    return satir


def ey_makineler(g):
    return 200, {"tamam": True, "makineler": makine_tablosu(),
                 "uyari": "makine adı istemcinin BEYANIDIR, doğrulanmaz; IP ölçümdür"}


def baska_makine_izi():
    """Açılışta: son kayıtlara BAŞKA bir makinenin sunucusu yazmış mı?
    Bilerek taşınmışsa beklenir (uyarı), değilse iki sunucunun izidir."""
    with KILIT:
        kayit = _kayit()
    izler = {}
    for m in kayit[-500:]:
        s = m.get("sunucu")
        if s and s != MAKINE:
            izler[s] = m.get("no")
    return izler


def gunluk(satir):
    """Kendi günlüğümüz. 🔴 `sys.__stdout__`a basar, `sys.stdout`a DEĞİL:
    `redirect_stdout` ile yakalanan iş çıktısına log satırı KARIŞMASIN."""
    damga = time.strftime("%Y-%m-%d %H:%M:%S")
    try:
        with io.open(GUNLUK, "a", encoding="utf-8") as f:
            f.write("%s  %s\n" % (damga, satir))
    except OSError:
        pass
    try:
        print("%s  %s" % (damga, satir), file=sys.__stdout__, flush=True)
    except Exception:
        pass


def ayar_oku(yol=None):
    yol = yol or AYAR_YOLU
    if not os.path.exists(yol):
        print("AYAR YOK: %s" % yol)
        sys.exit(2)
    with io.open(yol, encoding="utf-8") as f:
        a = json.load(f)
    if not a.get("jeton") or len(a["jeton"]) < 16:
        print("AYAR KUSURLU: `jeton` yok ya da 16 karakterden kisa.")
        sys.exit(2)
    return a


def port_coz(a):
    adres = str(a.get("tahta_sunucu") or "")
    if ":" in adres:
        try:
            return int(adres.rsplit(":", 1)[1])
        except ValueError:
            pass
    return PORT_VARSAYILAN


def izinli_ip(ip_metni):
    """Yalnız yerel ağ/loopback. İnternete açılan bir kapı OLMAYACAK."""
    try:
        ip = ipaddress.ip_address(ip_metni)
    except ValueError:
        return False
    if getattr(ip, "ipv4_mapped", None):
        ip = ip.ipv4_mapped
    return ip.is_private or ip.is_loopback


# ------------------------------------------------------------ kayıt
def _kayit():
    """Bellekteki tahta — dosya dışarıdan değiştiyse (düşüşteki yerel yazan)
    YENİDEN okunur. KILIT altında çağrılır."""
    try:
        st = os.stat(T.VERI)
        im = (st.st_mtime_ns, st.st_size)
    except OSError:
        im = (None, None)
    if _ONBELLEK["kayit"] is None or (_ONBELLEK["mtime"], _ONBELLEK["boy"]) != im:
        _ONBELLEK["kayit"] = T._yukle()
        _ONBELLEK["mtime"], _ONBELLEK["boy"] = im
    return _ONBELLEK["kayit"]


def _kaydet(kayit):
    try:
        T._kaydet(kayit)                  # atomik takas + TAHTA.md
    except BaseException:
        # Bellekteki kayıt değişti ama dosyaya inmedi ⇒ önbelleği AT; bir
        # sonraki istek dosyadan (gerçekten yazılmış olandan) okur.
        _ONBELLEK["kayit"] = None
        raise
    try:
        st = os.stat(T.VERI)
        _ONBELLEK["mtime"], _ONBELLEK["boy"] = st.st_mtime_ns, st.st_size
    except OSError:
        _ONBELLEK["mtime"] = None
    _ONBELLEK["kayit"] = kayit


@contextlib.contextmanager
def _yakala():
    """tahta.py'nin iş işlevleri ekrana basar; sunucuda o satırlar İSTEMCİYE
    gider. KILIT altında kullanılır (redirect_stdout süreç geneli)."""
    buf = io.StringIO()
    with contextlib.redirect_stdout(buf):
        yield buf


def _satirlar(buf):
    return [s for s in buf.getvalue().splitlines()]


# ------------------------------------------------------------ eylemler
def ey_yaz(g):
    for alan in ("kim", "kime", "mesaj"):
        if not str(g.get(alan) or "").strip():
            return 400, {"tamam": False, "kod": 2, "sebep": "%s ZORUNLU" % alan}
    if _yazma_yasak():
        return _yazma_yasak()
    with KILIT, T._Kilit(T.VERI):
        kayit = _kayit()
        # Kuyruktan gelen (düşüşte yerel yazılmış) mesaj ZATEN indiyse
        # ikinci kez yazılmaz — mükerrer, kayıptan ucuz değildir.
        yk = str(g.get("yerel_kimlik") or "")
        if yk:
            eski = next((x for x in kayit if x.get("yerel_kimlik") == yk), None)
            if eski is not None:
                return 200, {"tamam": True, "no": eski["no"], "mukerrer": True,
                             "cikti": []}
        with _yakala() as buf:
            m, kod = T._yaz_hazirla(g, kayit)
            if kod == 0:
                if yk:
                    m["yerel_kimlik"] = yk
                m["sunucu"] = MAKINE          # hangi sunucu numara verdi — iz
                kod = T._yaz_ekle(kayit, m)
        cikti = _satirlar(buf)
        if kod != 0:
            # `_yaz_ekle` başarısızsa kayda dokunmamıştır (önce sınar).
            return 400, {"tamam": False, "kod": kod, "cikti": cikti}
        _kaydet(kayit)
    return 200, {"tamam": True, "no": m["no"], "kime": m["kime"],
                 "kimden": m["kimden"], "cevap": m["cevap"],
                 "vade": m["vade"], "cikti": cikti}


def _no_sayi(no):
    try:
        return int(str(no or "M-0").split("-")[-1])
    except ValueError:
        return 0


def ey_oku(g):
    with KILIT:
        kayit = _kayit()
        son = max([_no_sayi(m.get("no")) for m in kayit] or [0])
        toplam = len(kayit)
        kim = str(g.get("kim") or "").strip()
        adlar = []
        if kim and not g.get("hepsi"):
            ad_k = T._takma_adlar(kayit, kim, g.get("kimlik") or None)
            adlar = sorted(ad_k)
            secili = [m for m in kayit
                      if T._sade_ad(m["kime"]) in ad_k or m["kime"] == "HERKES"]
        else:
            secili = kayit
        try:
            son_no = int(g.get("son_no") or 0)
        except ValueError:
            son_no = 0
        if son_no:
            secili = [m for m in secili if _no_sayi(m.get("no")) > son_no]
        limit = g.get("limit")
        if limit not in (None, ""):
            try:
                secili = secili[-int(limit):] if int(limit) > 0 else []
            except ValueError:
                pass
        # kopya: kilit bırakıldıktan sonra serileştirilirken değişmesin
        secili = json.loads(json.dumps(secili, ensure_ascii=False))
    return 200, {"tamam": True, "mesajlar": secili, "toplam": toplam,
                 "son_no": son, "adlar": adlar}


def ey_isaretle(g):
    kim = str(g.get("kim") or "").strip()
    nolar = set(g.get("nolar") or [])
    if not kim:
        return 400, {"tamam": False, "sebep": "kim ZORUNLU"}
    if _yazma_yasak():
        return _yazma_yasak()
    with KILIT, T._Kilit(T.VERI):
        kayit = _kayit()
        yeni = 0
        zaman = T._simdi()
        for m in kayit:
            if m.get("no") in nolar and kim not in (m.get("okuyan") or {}):
                m.setdefault("okuyan", {})[kim] = zaman
                yeni += 1
        if yeni:
            _kaydet(kayit)
    return 200, {"tamam": True, "yeni": yeni}


def ey_islem(g):
    eylem = str(g.get("eylem") or "")
    islev = {"teyit": T._teyit_uygula, "tamam": T._tamam_uygula,
             "kapat": T._kapat_uygula}.get(eylem)
    if islev is None:
        return 400, {"tamam": False, "sebep": "tanimsiz islem",
                     "gecerli": ["kapat", "tamam", "teyit"]}
    if _yazma_yasak():
        return _yazma_yasak()
    with KILIT, T._Kilit(T.VERI):
        kayit = _kayit()
        with _yakala() as buf:
            kod = islev(kayit, g)
        cikti = _satirlar(buf)
        if kod == 0:
            _kaydet(kayit)
    return (200 if kod == 0 else 400), {"tamam": kod == 0, "kod": kod,
                                        "cikti": cikti}


def ey_html(g):
    try:
        n = max(1, min(int(g.get("son") or 200), 2000))
    except ValueError:
        n = 200
    with KILIT:
        kayit = _kayit()
        dilim = list(kayit[-n:])
        toplam = len(kayit)
    e = html.escape
    sat = []
    for m in reversed(dilim):
        acil = m.get("aciliyet") or "NORMAL"
        sat.append(
            "<tr class='%s'><td>%s</td><td>%s</td><td>%s</td><td>%s</td>"
            "<td>%s</td><td>%s</td><td class='m'>%s</td></tr>" % (
                "acil" if acil in ("ACIL", "DURDURUCU") else "",
                e(m.get("no", "")), e(m.get("zaman", "")), e(m.get("kimden", "")),
                e(m.get("kime", "")), e(m.get("cins") or "BILGI"),
                e(m.get("hal", "")), e(m.get("mesaj", ""))))
    govde = """<!doctype html><html lang="tr"><head><meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>Atlas Tahtası</title><style>
:root{--zemin:#fff;--yazi:#1d1d1f;--cizgi:#ddd;--acil:#fde8e8}
@media (prefers-color-scheme:dark){:root{--zemin:#16171a;--yazi:#e6e6e6;--cizgi:#333;--acil:#4a1f1f}}
body{background:var(--zemin);color:var(--yazi);font:14px/1.4 system-ui,sans-serif;margin:16px}
table{border-collapse:collapse;width:100%%}td,th{border-bottom:1px solid var(--cizgi);padding:4px 6px;vertical-align:top;text-align:left}
td.m{white-space:pre-wrap;word-break:break-word}tr.acil{background:var(--acil)}
tr.yok{background:var(--acil)}.not{opacity:.75;font-size:12px}
.kaydir{overflow-x:auto}
</style></head><body><h1>Atlas Tahtası</h1>
<h2>Makineler — bu sunucuya kim yazıyor/okuyor</h2>
<p class="not">Ad istemcinin BEYANIDIR (doğrulanmaz); IP ölçümdür. "GÖRÜLMEDİ" = sunucunun
ag.json listesinde var ama hiç gelmedi: kapalı ya da BAŞKA SUNUCUDA.</p>
<div class="kaydir"><table><tr><th>Makine (beyan)</th><th>IP</th><th>ag.json</th><th>Son yazma</th>
<th>Son okuma</th><th>Son istek</th><th>İstek</th><th>Son oturum</th><th>Durum</th></tr>
%s</table></div>
<h2>Mesajlar</h2>
<p>Son %d mesaj (toplam %d) · yeniden eskiye · sunucu %s · %s</p>
<div class="kaydir"><table><tr><th>No</th><th>Zaman</th><th>Kimden</th><th>Kime</th><th>Cins</th><th>Hal</th><th>Mesaj</th></tr>
%s</table></div></body></html>""" % (mk_html(), len(dilim), toplam, e(socket.gethostname()),
                                      e(time.strftime("%Y-%m-%d %H:%M:%S")), "\n".join(sat))
    return 200, govde


def mk_html():
    e = html.escape
    sat = []
    for d in makine_tablosu():
        sn = d["son_istek_sn_once"]
        sat.append("<tr class='%s'><td>%s</td><td>%s</td><td>%s</td><td>%s</td><td>%s</td>"
                   "<td>%s</td><td>%s</td><td>%s</td><td>%s</td></tr>" % (
                       "yok" if d["durum"] != "GÖRÜLDÜ" else "", e(d["beyan"]), e(str(d["ip"] or "")),
                       e(", ".join(d["ag_json_eslesme"]) or "—"), e(d["son_yazma"] or "—"),
                       e(d["son_okuma"] or "—"), "—" if sn is None else "%d sn önce" % sn,
                       d["istek"] or 0, e(d["son_kim"] or "—"), e(d["durum"])))
    return "\n".join(sat) or "<tr><td colspan='9'>henüz kimse gelmedi</td></tr>"


# (yöntem, yol) → (işlev, gövde JSON mu)
EYLEMLER = {
    ("POST", "/tahta/yaz"): ey_yaz,
    ("GET", "/tahta/oku"): ey_oku,
    ("POST", "/tahta/isaretle"): ey_isaretle,
    ("POST", "/tahta/islem"): ey_islem,
    ("GET", "/tahta/makineler"): ey_makineler,
    ("GET", "/tahta"): ey_html,
}


# ------------------------------------------------------------ sunucu
class Kapi(BaseHTTPRequestHandler):
    server_version = "AtlasTahta/1.0"
    protocol_version = "HTTP/1.0"
    jeton = ""

    def log_message(self, bicim, *arg):      # kendi günlüğümüz var
        pass

    def kaynak_ip(self):
        """Ayrı yöntem — SINAV ağ dışı kaynağı bu dikişten taklit eder."""
        return self.client_address[0]

    def _gonder(self, kod, govde):
        if isinstance(govde, str):
            ham, tur = govde.encode("utf-8"), "text/html; charset=utf-8"
        else:
            ham = json.dumps(govde, ensure_ascii=False).encode("utf-8")
            tur = "application/json; charset=utf-8"
        sik = "gzip" in (self.headers.get("Accept-Encoding") or "") and len(ham) > 2048
        if sik:
            ham = gzip.compress(ham, 5)
        self.send_response(kod)
        self.send_header("Content-Type", tur)
        if sik:
            self.send_header("Content-Encoding", "gzip")
        self.send_header("Content-Length", str(len(ham)))
        self.send_header("Cache-Control", "no-store")
        self.end_headers()
        self.wfile.write(ham)

    def _isle(self, yontem):
        kaynak = self.kaynak_ip()
        yol = urlparse(self.path)
        sorgu = {k: v[0] for k, v in parse_qs(yol.query).items()}
        iz = "%s %s" % (yontem, yol.path)

        if not izinli_ip(kaynak):
            gunluk("RED (ag disi) %s -> %s" % (kaynak, iz))
            return self._gonder(403, {"tamam": False, "sebep": "yerel ag disi"})

        verilen = self.headers.get("X-Atlas-Jeton", "") or sorgu.pop("jeton", "")
        sorgu.pop("jeton", None)
        # hmac.compare_digest: jetonu karakter karakter sızdırmayan karşılaştırma
        if not hmac.compare_digest(verilen.encode("utf-8"), self.jeton.encode("utf-8")):
            gunluk("RED (jeton) %s -> %s" % (kaynak, iz))
            return self._gonder(401, {"tamam": False, "sebep": "jeton yanlis"})

        islev = EYLEMLER.get((yontem, yol.path.rstrip("/") or "/"))
        if islev is None:
            gunluk("RED (eylem yok) %s -> %r" % (kaynak, iz))
            return self._gonder(404, {"tamam": False, "sebep": "tanimsiz uc",
                                      "gecerli": sorted("%s %s" % k for k in EYLEMLER)})
        g = dict(sorgu)
        if yontem == "POST":
            try:
                boy = int(self.headers.get("Content-Length") or 0)
            except ValueError:
                boy = -1
            if boy < 0 or boy > GOVDE_TAVAN:
                return self._gonder(413, {"tamam": False, "sebep": "govde boyu"})
            try:
                govde = json.loads(self.rfile.read(boy).decode("utf-8") or "{}")
                if not isinstance(govde, dict):
                    raise ValueError("nesne degil")
            except Exception as e:
                return self._gonder(400, {"tamam": False, "sebep": "JSON: %s" % e})
            g.update(govde)
        # Makine defteri — yalnız İŞ istekleri (tarayıcıdan tahtaya/deftere
        # BAKMAK bir makinenin tahtayı kullandığı anlamına gelmez).
        if islev not in (ey_html, ey_makineler):
            try:
                # "okundu" damgası (isaretle) bir POST'tur ama OKUMADIR.
                makine_isle(self.headers.get("X-Atlas-Makine", ""), kaynak,
                            islev in (ey_yaz, ey_islem), g.get("kim", ""))
            except Exception as e:            # defter işi DÜŞÜREMEZ
                gunluk("⚠️ makine defteri: %s: %s" % (type(e).__name__, e))
        try:
            kod, sonuc = islev(g)
        except BaseException as e:            # _kaydet sys.exit(3) atabilir
            _ONBELLEK["kayit"] = None         # yarım değişmiş bellek ATILIR
            gunluk("ARIZA %s: %s: %s" % (iz, type(e).__name__, e))
            return self._gonder(503, {"tamam": False, "sebep": "%s: %s"
                                      % (type(e).__name__, e)})
        if isinstance(sonuc, dict):
            try:
                with KILIT:
                    sonuc["sunucu"] = _kimlik_blogu()
            except BaseException:
                _ONBELLEK["kayit"] = None
        ek = (" %s" % sonuc.get("no")) if isinstance(sonuc, dict) and sonuc.get("no") else ""
        gunluk("KABUL %s -> %s%s · kim=%s" % (kaynak, iz, ek, g.get("kim", "")))
        self._gonder(kod, sonuc)

    def do_GET(self):
        self._isle("GET")

    def do_POST(self):
        self._isle("POST")


def kur(jeton, port, bag="0.0.0.0", kapi=Kapi):
    """Sunucuyu kurar ama KOŞTURMAZ (sınav kendi ipliğinde koşturur)."""
    kapi.jeton = jeton
    s = ThreadingHTTPServer((bag, port), kapi)
    s.daemon_threads = True
    return s


def main(argv):
    def al(ad):
        return argv[argv.index(ad) + 1] if ad in argv and argv.index(ad) + 1 < len(argv) else None
    global GUNLUK, NABIZ_SN
    a = ayar_oku(al("--ag"))
    if al("--gunluk"):                        # sınav gerçek günlüğü kirletmesin
        GUNLUK = os.path.abspath(al("--gunluk"))
    if al("--tahta"):
        T.VERI = os.path.abspath(al("--tahta"))
        T.GORUNUM = os.path.join(os.path.dirname(T.VERI), "TAHTA.md")
    if al("--nabiz"):
        NABIZ_SN = float(al("--nabiz"))
    port = int(al("--port") or port_coz(a))
    bag = al("--bag") or "0.0.0.0"
    # 🔴 TEK SUNUCU — kilit, port açılmadan ÖNCE alınır.
    ok, aciklama = kilit_al(port)
    gunluk(aciklama)
    if not ok:
        print(aciklama, file=sys.stderr, flush=True)
        return 4
    try:
        s = kur(a["jeton"], port, bag)
    except OSError as e:
        gunluk("🔴 port %d açılamadı: %s" % (port, e))
        kilit_birak()
        return 1
    BEKLENEN.update({str(k): str(v) for k, v in (a.get("makineler") or {}).items()})
    makineler_yukle()                         # yeniden başlamada defter SİLİNMEZ
    dur = threading.Event()
    threading.Thread(target=_nabiz_dongusu, args=(port, dur), daemon=True).start()
    izler = baska_makine_izi()
    if izler:
        gunluk("⚠️ BU KAYDA BAŞKA MAKİNENİN SUNUCUSU DA YAZMIŞ: %s — kayıt bilerek "
               "taşındıysa beklenir; DEĞİLSE İKİ SUNUCU koşuyor olabilir."
               % ", ".join("%s (son %s)" % kv for kv in sorted(izler.items())))
    with KILIT:
        kb = _kimlik_blogu()
    gunluk("TAHTA SUNUCUSU ayakta · makine=%s · %s:%d · tahta=%s · pid=%d · son M-%04d · imza %s"
           % (MAKINE, bag, port, T.VERI, os.getpid(), kb["son_no"], kb["tahta_imza"]))
    try:
        s.serve_forever()
    except KeyboardInterrupt:
        gunluk("TAHTA SUNUCUSU durduruldu (elle)")
    finally:
        dur.set()
        with _MK_KILIT:
            _mk_diske(zorla=True)
        kilit_birak()
    return 0


if __name__ == "__main__":
    sys.exit(main(sys.argv[1:]))
