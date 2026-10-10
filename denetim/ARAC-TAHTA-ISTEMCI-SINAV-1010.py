# -*- coding: utf-8 -*-
"""TAHTA-ISTEMCI-1010 sınavı — `tahta.py` SUNUCU İSTEMCİSİ, iki yönde + gerileme.

Evren: geçici dizinde KUM HAVUZU git depoları (`git init`, UZAK YOK — push
imkânsız) · 127.0.0.1'de (tercihen 8799) GERÇEK `arac/tahta_sunucu.py` ALT
SÜRECİ, kendi `--ag/--tahta/--gunluk`u ile · istemci `tahta.py` KOMUT SATIRINDAN
alt süreç olarak koşar (çıkış kodu sözleşmesi gerçek yoldan ölçülür) · jeton
`secrets` ile üretilir, yalnız geçici ag.json'lara yazılır, hiçbir yere basılmaz.

İLERİ YÖN (sunucu AYAKTA, jeton DOĞRU):
  I1 yaz → çıkış 0, "SUNUCU KAYDINDA", mesaj SUNUCUNUN kaydında (sunucu izi);
     istemcinin YEREL tahta.json'u ve HEAD'i DEĞİŞMEZ
  I2 oku --kim → "kaynak: SUNUCU", mesaj sunucudan GERİ OKUNUR, okundu damgası
     SUNUCUDA (isaretle), yerel dosya değişmez
  I3 teyit → sunucuda teyit[kim] · I4 bekleyen → sunucudan, mesaj listede
  I5 ACİL HERKES dayanaksız → çıkış 2, sunucu REDDETTİ, yerele DÜŞÜLMEDİ
TERS YÖN:
  T1 yanlış jeton → 401, çıktı "JETON" adını veriyor, yerele düşüş BEYAN edildi,
     mesaj KAYBOLMADI (yerelde + kuyrukta); oku da "JETON" + düşüş beyanı
  T2 sunucu KAPALI (bağlantı reddi) → düşüş BEYAN edildi, mesaj yerelde, kuyrukta
  T3 sunucu ASILI (dinliyor, cevap yok) → zaman aşımı, düşüş BEYAN edildi
  T4 sunucu DÖNÜNCE kuyruk boşalır: düşüş mesajı sunucuda TEK kopya; kuyruk
     kaydı geri konup yeniden gönderilince "ZATEN vardı" — sayı ARTMAZ
  T5 jeton yanlışken kuyruk boşaltılmaz (kayıp yok, sessiz silme yok)
GERİLEME (en önemlisi):
  R1 ag.json YOK: eski (yama öncesi taban ff4a832d5) ve yeni tahta.py aynı komut dizisinde
     AYNI çıkış kodları + AYNI (zaman/sha/yol normalize) çıktı + AYNI son kayıt;
     yeni çıktıda "sunucu" geçmez
GERÇEK SUNUCU (yalnız GET — başka yöntem sınav içinde ENGELLENİR):
  G1 istemcinin okuma yolu (`_sunucu_kayit`) gerçek ag.json ile → 200, kaynak SUNUCU
  G2 yanlış jetonla GET → 401 ve "JETON" · G3 GET /tahta/makineler → 200
  G4 çıktılarda jeton GEÇMEZ · G5 sunucunun tahta.json'u DEĞİŞMEDİ
  ag.json yoksa G* ÖLÇÜLEMEDİ (çıkış 2'ye katkı), `--gercek-yok` ile atlanır.

KULLANIM:  py denetim/ARAC-TAHTA-ISTEMCI-SINAV-1010.py [--gercek-ag <yol>] [--gercek-yok]
ÇIKIŞ (CLAUDE.md §3): 0 temiz · 1 İHLAL · 2 ÖLÇÜLEMEDİ
"""
import contextlib
import hashlib
import importlib.util
import io
import json
import os
import re
import secrets
import shutil
import socket
import subprocess
import sys
import tempfile
import time

sys.stdout.reconfigure(encoding="utf-8", errors="replace")
KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
ARAC = os.path.join(KOK, "arac")
GERCEK_AG = r"C:\atlas-tahta\oturumlar\ag.json"

# Yama ÖNCESİ taban (TAHTA-ISTEMCI-1010) — HEAD DEĞİL: yama inince HEAD = yeni olur
ESKI_REF = "ff4a832d5"
HATA, OLCULEMEDI, SAY = [], [], [0]
GERCEK_ISTEKLER = []


def sina(ok, ad, ayr=""):
    SAY[0] += 1
    print(("  OK   " if ok else "  HATA ") + ad + ((" | " + ayr) if ayr else ""))
    if not ok:
        HATA.append(ad)


def olcmedi(ad, ayr):
    print("  ÖLÇÜLEMEDİ " + ad + " | " + ayr)
    OLCULEMEDI.append(ad)


def bos_port(tercih=None):
    for p in ([tercih] if tercih else []) + [0]:
        s = socket.socket()
        try:
            s.bind(("127.0.0.1", p))
            p = s.getsockname()[1]
            return p
        except OSError:
            continue
        finally:
            s.close()


def git(kok, *a):
    return subprocess.run(["git", "-C", kok] + list(a), capture_output=True, text=True,
                          encoding="utf-8", errors="replace")


def havuz(gec, ad, tahta_bayt):
    """UZAĞI OLMAYAN git deposu: arac/{tahta,tahta_kaynak,tahta_sunucu}.py + boş tahta."""
    kok = os.path.join(gec, ad)
    os.makedirs(os.path.join(kok, "arac"))
    os.makedirs(os.path.join(kok, "oturumlar"))
    io.open(os.path.join(kok, "arac", "tahta.py"), "wb").write(tahta_bayt)
    for d in ("tahta_kaynak.py", "tahta_sunucu.py"):
        shutil.copy(os.path.join(ARAC, d), os.path.join(kok, "arac", d))
    io.open(os.path.join(kok, "oturumlar", "tahta.json"), "w", encoding="utf-8").write("[]")
    io.open(os.path.join(kok, ".gitignore"), "w", encoding="utf-8").write(
        "/oturumlar/ag.json\n/oturumlar/tahta_kuyruk.json*\n")
    git(kok, "init", "-q", "-b", "sinav")
    git(kok, "config", "user.name", "sinav")
    git(kok, "config", "user.email", "sinav@yerel.invalid")
    git(kok, "add", "--", ".")
    git(kok, "commit", "-q", "-m", "tohum")
    if git(kok, "remote").stdout.strip():
        raise RuntimeError("kum havuzunda UZAK VAR — durdum")
    return kok


def ag_yaz(kok, jeton, adres):
    io.open(os.path.join(kok, "oturumlar", "ag.json"), "w", encoding="utf-8").write(
        json.dumps({"jeton": jeton, "tahta_sunucu": adres}))


def kos(kok, *arg):
    r = subprocess.run([sys.executable, os.path.join(kok, "arac", "tahta.py")] + list(arg),
                       capture_output=True, encoding="utf-8", errors="replace", cwd=kok,
                       env=dict(os.environ, PYTHONIOENCODING="utf-8"), timeout=180)
    return r.returncode, (r.stdout or "") + (r.stderr or "")


def kayit(yol):
    if not os.path.exists(yol):
        return []
    with io.open(yol, encoding="utf-8") as f:
        return json.load(f)


def baslat(kok, ag, port):
    tahta = os.path.join(kok, "oturumlar", "tahta.json")
    p = subprocess.Popen([sys.executable, os.path.join(kok, "arac", "tahta_sunucu.py"),
                          "--ag", ag, "--tahta", tahta, "--gunluk", ag + ".log",
                          "--bag", "127.0.0.1", "--port", str(port), "--nabiz", "2"],
                         stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
    son = time.time() + 20
    while time.time() < son:
        if p.poll() is not None:
            raise RuntimeError("sunucu açılmadı, çıkış %s" % p.returncode)
        try:
            socket.create_connection(("127.0.0.1", port), timeout=0.5).close()
            return p
        except OSError:
            time.sleep(0.2)
    p.kill()
    raise RuntimeError("sunucu 20 sn'de port açmadı")


def durdur(p):
    if p and p.poll() is None:
        p.kill()
        p.wait(10)


def kuyruk(kok):
    return kayit(os.path.join(kok, "oturumlar", "tahta_kuyruk.json"))


NORMAL = [(re.compile(r"\d{4}-\d\d-\d\d \d\d:\d\d(:\d\d)?"), "<ZAMAN>"),
          (re.compile(r"@\d\d:\d\d"), "@<SS>"),
          (re.compile(r"\b[0-9a-f]{7,40}\b"), "<SHA>")]


def normal(s, kok):
    s = s.replace(kok, "<KOK>").replace(kok.replace("\\", "/"), "<KOK>")
    for r, y in NORMAL:
        s = r.sub(y, s)
    return s


# ───────────────────────────────────────────────────────────── GERİLEME
def gerileme(gec):
    print("GERİLEME — ag.json YOK: eski (%s) ve yeni tahta.py aynı dizide" % ESKI_REF)
    eski = git(KOK, "show", "%s:arac/tahta.py" % ESKI_REF)
    if eski.returncode != 0:
        olcmedi("R1", "%s:arac/tahta.py okunamadı" % ESKI_REF)
        return
    eski_b = eski.stdout.encode("utf-8")
    yeni_b = io.open(os.path.join(ARAC, "tahta.py"), encoding="utf-8").read().encode("utf-8")
    if eski_b == yeni_b:
        olcmedi("R1", "çalışma ağacındaki tahta.py %s ile AYNI — yamasız; kıyas anlamsız" % ESKI_REF)
        return
    A, B = havuz(gec, "R_eski", eski_b), havuz(gec, "R_yeni", yeni_b)
    io.open(os.path.join(gec, "msj.txt"), "w", encoding="utf-8").write("dosyadan `backtick` mesaj")
    dizi = [
        ("yaz", "--kim", "SINAV A", "--kime", "SINAV B", "--mesaj", "bir", "--cevap-bekle"),
        ("yaz", "--kim", "SINAV B", "--kime", "SINAV A", "--mesaj", "iki", "--yanit", "M-0001"),
        ("yaz", "--kim", "SINAV A", "--kime", "SINAV B", "--mesaj-dosya", os.path.join(gec, "msj.txt")),
        ("yaz", "--kim", "SINAV A", "--kime", "HERKES", "--mesaj", "acil", "--aciliyet", "ACIL"),
        ("yaz", "--kim", "SINAV A", "--kime", "SINAV B", "--mesaj", "x", "--yanit", "M-0999"),
        ("yaz", "--kim", "SINAV A"),
        ("oku", "--kim", "SINAV B"),
        ("oku", "--kim", "SINAV B", "--yeni", "--kisa"),
        ("teyit", "M-0001", "--kim", "SINAV B", "--soz", "okudum"),
        ("tamam", "M-0001", "--kim", "SINAV A"),
        ("tamam", "M-0002", "--kim", "SINAV B"),
        ("kapat", "M-0001", "--kim", "SINAV A"),
        ("teyit", "M-0777", "--kim", "SINAV B"),
        ("bekleyen",), ("teyitsiz",), ("kimler",), (),
        ("oku", "--kaynak", "bozuk"),
        ("bilinmeyen",),
    ]
    farkli = []
    for d in dizi:
        ka, ca = kos(A, *d)
        kb, cb = kos(B, *d)
        na, nb = normal(ca, A), normal(cb, B)
        if d == ("bilinmeyen",):
            # tanımsız komut `__doc__` basar; yama docstring'e SUNUCU YOLU paragrafı
            # ekledi ⇒ metin BİLEREK farklı, yalnız çıkış kodu kıyaslanır.
            na, nb = na[:0], nb[:0]
            cb = ""
        if ka != kb or na != nb:
            farkli.append((" ".join(d) or "(argümansız)", ka, kb))
        if "sunucu" in cb.lower() and "sunucu" not in ca.lower():
            farkli.append((" ".join(d) + " [yeni çıktıda 'sunucu']", ka, kb))
    sina(not farkli, "R1 %d komut: çıkış kodları + normalize çıktı BİREBİR" % len(dizi),
         "; ".join("%s eski=%s yeni=%s" % f for f in farkli[:4]) or "aynı")
    ra = normal(json.dumps(kayit(os.path.join(A, "oturumlar", "tahta.json")), ensure_ascii=False, sort_keys=True), A)
    rb = normal(json.dumps(kayit(os.path.join(B, "oturumlar", "tahta.json")), ensure_ascii=False, sort_keys=True), B)
    sina(ra == rb and len(kayit(os.path.join(B, "oturumlar", "tahta.json"))) == 3,
         "R1b son tahta.json kayıtları BİREBİR (3 mesaj)")
    sina(not os.path.exists(os.path.join(B, "oturumlar", "tahta_kuyruk.json")),
         "R1c ag.json yokken kuyruk dosyası DOĞMADI")


# ───────────────────────────────────────────────────────────── İSTEMCİ
def istemci(gec):
    yeni_b = io.open(os.path.join(ARAC, "tahta.py"), encoding="utf-8").read().encode("utf-8")
    jeton = secrets.token_hex(24)
    S = havuz(gec, "sunucu", yeni_b)
    sag = os.path.join(gec, "sunucu_ag.json")
    io.open(sag, "w", encoding="utf-8").write(json.dumps({"jeton": jeton}))
    stahta = os.path.join(S, "oturumlar", "tahta.json")
    port = bos_port(8799)
    surec = baslat(S, sag, port)
    adres = "127.0.0.1:%d" % port
    print("SUNUCU — sınav örneği %s (kum havuzu, uzak yok) pid %d" % (adres, surec.pid))
    try:
        # ── İLERİ
        C = havuz(gec, "istemci", yeni_b)
        ag_yaz(C, jeton, adres)
        ctahta = os.path.join(C, "oturumlar", "tahta.json")
        head0 = git(C, "rev-parse", "HEAD").stdout.strip()
        k, c = kos(C, "yaz", "--kim", "SINAV A", "--kime", "SINAV B", "--mesaj", "sunucudan merhaba",
                   "--cevap-bekle")
        m = next((x for x in kayit(stahta) if x.get("mesaj") == "sunucudan merhaba"), None)
        sina(k == 0 and "SUNUCU KAYDINDA" in c and "yazıldı" in c and m is not None
             and m.get("sunucu") and m.get("yerel_kimlik"),
             "I1 yaz → çıkış 0, mesaj SUNUCU kaydında (sunucu izi + yerel_kimlik)",
             "kod=%s no=%s" % (k, m and m["no"]))
        sina(kayit(ctahta) == [] and git(C, "rev-parse", "HEAD").stdout.strip() == head0,
             "I1b istemcinin YEREL tahtası ve HEAD'i DEĞİŞMEDİ (git yolu koşmadı)")
        k, c = kos(C, "oku", "--kim", "SINAV B")
        m = next((x for x in kayit(stahta) if x.get("mesaj") == "sunucudan merhaba"), {})
        sina(k == 0 and "kaynak: SUNUCU" in c and "sunucudan merhaba" in c
             and "SINAV B" in (m.get("okuyan") or {}) and kayit(ctahta) == [],
             "I2 oku → SUNUCUDAN geri okundu, okundu damgası SUNUCUDA", "kod=%s" % k)
        k, c = kos(C, "teyit", m.get("no", "M-0001"), "--kim", "SINAV B", "--soz", "aldım")
        m = next((x for x in kayit(stahta) if x.get("mesaj") == "sunucudan merhaba"), {})
        sina(k == 0 and ((m.get("teyit") or {}).get("SINAV B") or {}).get("soz") == "aldım",
             "I3 teyit → sunucuda teyit[SINAV B]", "kod=%s" % k)
        k, c = kos(C, "bekleyen")
        sina(k == 0 and "kaynak: SUNUCU" in c and m.get("no", "?") in c,
             "I4 bekleyen → sunucudan, mesaj listede", "kod=%s" % k)
        n0 = len(kayit(stahta))
        k, c = kos(C, "yaz", "--kim", "SINAV A", "--kime", "HERKES", "--mesaj", "acil",
                   "--aciliyet", "ACIL")
        sina(k == 2 and "REDDETTİ" in c and "yerele düştüm" not in c
             and len(kayit(stahta)) == n0 and kayit(ctahta) == [],
             "I5 ACİL HERKES dayanaksız → 2, sunucu reddetti, yerele DÜŞÜLMEDİ", "kod=%s" % k)

        # ── TERS: yanlış jeton
        C2 = havuz(gec, "istemci_jeton", yeni_b)
        ag_yaz(C2, secrets.token_hex(24), adres)
        n0 = len(kayit(stahta))
        k, c = kos(C2, "yaz", "--kim", "SINAV J", "--kime", "SINAV B", "--mesaj", "jetonsuz mesaj")
        yerel = kayit(os.path.join(C2, "oturumlar", "tahta.json"))
        sina("JETON YANLIŞ" in c and "401" in c and "yerele düştüm" in c
             and len(yerel) == 1 and yerel[0].get("yerel_kimlik") and len(kuyruk(C2)) == 1
             and len(kayit(stahta)) == n0,
             "T1 yanlış jeton → 401 'JETON' adıyla, düşüş BEYANLI, mesaj yerelde + kuyrukta",
             "kod=%s yerel=%d kuyruk=%d" % (k, len(yerel), len(kuyruk(C2))))
        sina(k in (0, 1, 2), "T1b düşüşte çıkış kodu git yolunun sözleşmesinde (0/1/2)", "kod=%s" % k)
        k, c = kos(C2, "oku", "--kim", "SINAV B")
        sina("JETON YANLIŞ" in c and "yerele düştüm" in c and "jetonsuz mesaj" in c,
             "T1c oku yanlış jetonla → 'JETON' + düşüş beyanı, YEREL okundu", "kod=%s" % k)
        sina(len(kuyruk(C2)) == 1 and len(kayit(stahta)) == n0,
             "T5 jeton yanlışken kuyruk BOŞALTILMADI, sessiz silme yok")

        # ── TERS: sunucu kapalı → sonra dönüyor
        C3 = havuz(gec, "istemci_dusus", yeni_b)
        olu = bos_port()
        ag_yaz(C3, jeton, "127.0.0.1:%d" % olu)
        k, c = kos(C3, "yaz", "--kim", "SINAV D", "--kime", "SINAV B", "--mesaj", "düşüşte yazıldım")
        yerel = kayit(os.path.join(C3, "oturumlar", "tahta.json"))
        yk = (yerel[0].get("yerel_kimlik") if yerel else None)
        sina("ulaşılamadı" in c and "yerele düştüm" in c and len(yerel) == 1 and yk
             and len(kuyruk(C3)) == 1 and k in (0, 1, 2),
             "T2 sunucu KAPALI → düşüş BEYANLI, mesaj KAYBOLMADI (yerel + kuyruk)",
             "kod=%s" % k)
        # ASILI sunucu: dinler, hiç cevap vermez ⇒ zaman aşımı
        asili = socket.socket()
        asili.bind(("127.0.0.1", 0))
        asili.listen(5)
        ag_yaz(C3, jeton, "127.0.0.1:%d" % asili.getsockname()[1])
        t0 = time.time()
        k, c = kos(C3, "oku", "--kim", "SINAV B")
        asili.close()
        sina("ulaşılamadı" in c and "yerele düştüm" in c and "düşüşte yazıldım" in c,
             "T3 sunucu ASILI → zaman aşımı (%.0f sn), düşüş BEYANLI, yerelden okundu"
             % (time.time() - t0), "kod=%s" % k)
        # sunucu DÖNDÜ
        ag_yaz(C3, jeton, adres)
        k, c = kos(C3, "yaz", "--kim", "SINAV D", "--kime", "SINAV B", "--mesaj", "sunucu döndü")
        kopya = [x for x in kayit(stahta) if x.get("yerel_kimlik") == yk]
        sina(k == 0 and "↻ kuyruk" in c and len(kopya) == 1
             and kopya[0]["mesaj"] == "düşüşte yazıldım" and kuyruk(C3) == [],
             "T4 sunucu dönünce kuyruk boşaldı: düşüş mesajı sunucuda TEK kopya",
             "kopya=%d kuyruk=%d" % (len(kopya), len(kuyruk(C3))))
        # çöküş taklidi: gönderildi ama kuyruk silinemedi ⇒ aynı kayıt tekrar gider
        q = os.path.join(C3, "oturumlar", "tahta_kuyruk.json")
        io.open(q, "w", encoding="utf-8").write(json.dumps([{
            "yerel_kimlik": yk, "yerel_no": "M-0001", "zaman": "-",
            "govde": {"kim": "SINAV D", "kime": "SINAV B", "mesaj": "düşüşte yazıldım",
                      "yerel_kimlik": yk}}], ensure_ascii=False))
        n0 = len(kayit(stahta))
        k, c = kos(C3, "oku", "--kim", "SINAV D")
        kopya = [x for x in kayit(stahta) if x.get("yerel_kimlik") == yk]
        sina("ZATEN vardı" in c and len(kopya) == 1 and len(kayit(stahta)) == n0
             and kuyruk(C3) == [],
             "T4b aynı yerel_kimlik İKİNCİ kez gönderildi → 'ZATEN vardı', sayı ARTMADI",
             "kopya=%d" % len(kopya))
        sina(jeton not in "".join(
            io.open(os.path.join(dp, f), encoding="utf-8", errors="replace").read()
            for kk in (C, C2, C3) for dp, _, fs in os.walk(os.path.join(kk, "oturumlar"))
            for f in fs if f != "ag.json"),
             "T6 jeton istemci dosyalarına (ag.json dışı) SIZMADI")
    finally:
        durdur(surec)
    sina(surec.poll() is not None, "S sınav sunucusu (pid %d) DURDURULDU" % surec.pid)


# ───────────────────────────────────────────────────────────── GERÇEK SUNUCU
def gercek(gec, ag_yolu):
    print("GERÇEK SUNUCU — yalnız GET (%s)" % ag_yolu)
    if not os.path.exists(ag_yolu):
        olcmedi("G*", "gerçek ag.json yok: %s" % ag_yolu)
        return
    real = json.load(io.open(ag_yolu, encoding="utf-8"))
    if not (real.get("jeton") and real.get("tahta_sunucu")):
        olcmedi("G*", "gerçek ag.json'da jeton/tahta_sunucu yok")
        return
    tahta_yol = os.path.join(os.path.dirname(ag_yolu), "tahta.json")

    def ozet(y):
        return hashlib.sha256(io.open(y, "rb").read()).hexdigest() if os.path.exists(y) else None
    once = ozet(tahta_yol)
    spec = importlib.util.spec_from_file_location("tahta_istemci_sinav", os.path.join(ARAC, "tahta.py"))
    T = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(T)
    T.VERI = os.path.join(gec, "bos_tahta.json")        # düşüşte gerçek dosyalara dokunmasın
    T.KUYRUK = os.path.join(gec, "gercek_kuyruk.json")
    import urllib.parse
    import urllib.request
    asil = urllib.request.OpenerDirector.open

    def bekci(self, istek, *a, **k):
        y = istek.get_method()
        u = urllib.parse.urlparse(istek.full_url)
        GERCEK_ISTEKLER.append("%s %s%s" % (y, u.path, (" ?" + ",".join(sorted(
            urllib.parse.parse_qs(u.query)))) if u.query else ""))
        if y != "GET":
            raise RuntimeError("SINAV ENGELİ: gerçek sunucuya %s YASAK" % y)
        return asil(self, istek, *a, **k)
    urllib.request.OpenerDirector.open = bekci
    buf = io.StringIO()
    try:
        with contextlib.redirect_stdout(buf):
            T._OKU_KAYNAK.clear()
            T._OKU_KAYNAK.update(mod="sunucu", ayar=real,
                                 sorgu={"kim": "TAHTA ISTEMCI SINAV 1010", "limit": "3"})
            mes = T._sunucu_kayit()
            ok1 = T._OKU_KAYNAK.get("mod") == "sunucu"
            kod2, _ = T._istek(dict(real, jeton="yanlis" + secrets.token_hex(12)),
                               "GET", "/tahta/oku", sorgu={"limit": "1"})
            T._OKU_KAYNAK.clear()
            T._OKU_KAYNAK.update(mod="sunucu", sorgu={"limit": "1"},
                                 ayar=dict(real, jeton="yanlis" + secrets.token_hex(12)))
            T._sunucu_kayit()
            kod3, c3 = T._istek(real, "GET", "/tahta/makineler")
    except Exception as e:                                  # noqa: BLE001
        urllib.request.OpenerDirector.open = asil
        olcmedi("G*", "%s: %s" % (type(e).__name__, e))
        return
    finally:
        urllib.request.OpenerDirector.open = asil
    cik = buf.getvalue()
    sina(ok1 and isinstance(mes, list) and len(mes) <= 3 and "kaynak: SUNUCU" in cik,
         "G1 istemci okuma yolu gerçek sunucudan 200 (kaynak: SUNUCU, %d mesaj)" % len(mes or []))
    sina(kod2 == 401 and "JETON YANLIŞ" in cik and "yerele düştüm" in cik,
         "G2 yanlış jetonla GET → 401, istemci 'JETON' adını verdi", "kod=%s" % kod2)
    sina(kod3 == 200 and isinstance(c3.get("makineler"), list), "G3 GET /tahta/makineler → 200")
    sina(real["jeton"] not in cik, "G4 jeton çıktıya GEÇMEDİ")
    sina(all(s.startswith("GET ") for s in GERCEK_ISTEKLER) and GERCEK_ISTEKLER,
         "G5 gerçek sunucuya giden HER istek GET (%d)" % len(GERCEK_ISTEKLER))
    sina(ozet(tahta_yol) == once, "G6 gerçek sunucunun tahta.json'u DEĞİŞMEDİ")
    for s in GERCEK_ISTEKLER:
        print("      → %s" % s)


def main(argv):
    gec = tempfile.mkdtemp(prefix="tahta_istemci_sinav_")
    try:
        gerileme(gec)
        istemci(gec)
        if "--gercek-yok" not in argv:
            ag = argv[argv.index("--gercek-ag") + 1] if "--gercek-ag" in argv else GERCEK_AG
            gercek(gec, ag)
    finally:
        shutil.rmtree(gec, ignore_errors=True)
    print("-" * 72)
    print("SONUÇ: %d/%d · hata %d · ölçülemedi %d" % (SAY[0] - len(HATA), SAY[0], len(HATA),
                                                     len(OLCULEMEDI)))
    return 1 if HATA else (2 if OLCULEMEDI else 0)


if __name__ == "__main__":
    sys.exit(main(sys.argv[1:]))
