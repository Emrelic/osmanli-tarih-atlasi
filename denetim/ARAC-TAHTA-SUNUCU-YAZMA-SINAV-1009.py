# -*- coding: utf-8 -*-
"""TAHTA-SUNUCU-MAIN-1009 sınavı — sunucunun YAZMA yolu main'in kamusal API'sine bağlı mı.

Evren: geçici dizinde tahta.json · 127.0.0.1'de rastgele portta GERÇEK
`arac/tahta_sunucu.py` ALT SÜRECİ · gerçek HTTP · jeton `secrets` ile üretilir,
yalnız geçici ag.json'a yazılır (sınav sonunda dizin silinir). Gerçek tahtaya
(`oturumlar/tahta.json`) HİÇBİR şey yazılmaz.

İLERİ YÖN (yamalı kol):
  Y1 yaz → 200, M-0001, dosyadan GERİ OKUNUR (kimden/kime/mesaj + `sunucu` izi)
  Y2 yaz --yanit M-0001 → M-0002 ve M-0001 hal=CEVAPLANDI
  Y3 islem teyit M-0001 → 200, dosyada teyit[kim]
  Y4 islem tamam M-0001 → 200, dosyada kapanis dolu
  Y5 islem kapat M-0001 → 200, dosyada hal=KAPANDI
  Y6 oku → 2 mesaj · Y7 isaretle → okuyan damgası
  Y8 aynı yerel_kimlik iki kez → aynı numara, mukerrer, kayıt sayısı artmaz
  Y9 GİT TAŞIMASI KAPALI: her kol bir KUM HAVUZU git deposunda koşar (geçici
     dizin, `git init`, UZAK YOK); yamalı kol yazınca havuzun HEAD'i DEĞİŞMEZ,
     tahta.json kirli kalır (yazıldı, commitlenmedi) · cevapta push/commit satırı yok
  Y10 sınavın koştuğu deponun HEAD+status'u ve gerçek oturumlar/tahta.json DEĞİŞMEZ
TERS YÖN:
  T1 jetonsuz → 401 · T2 yanlış jeton → 401 · T3 eksik alan → 400
  T4 ACİL HERKES dayanaksız → 400 kod 2, kayıt artmaz
  T5 --yanit olmayan no → 400 kod 2 · T6 teyitsiz mesaja tamam → 400 kod 1
  T7 olmayan no'ya teyit → 400 kod 2 · T8 tanımsız eylem → 400
  T9 YAMASIZ KOL (dal sürümü, main tahta.py ile): yaz → 503 AttributeError,
     islem → 503 AttributeError, kayıt değişmez — kusurun GERÇEK olduğunun kanıtı.
     (Eski kol geçici dizinde koşar; git'e hiç ulaşmadan düşer.)
  T10 TAŞIMA AÇIK KOL (yeni sunucu, iki `T._git/T._tazele` satırı SİLİNMİŞ): aynı
     yazım havuzda COMMIT üretir ⇒ Y9 sensörü kör değil. Havuzun uzağı yoktur —
     push imkânsız; bu kol yalnız sensörün ötebildiğini gösterir.

KULLANIM:  py denetim/ARAC-TAHTA-SUNUCU-YAZMA-SINAV-1009.py   çıkış 0 = geçti
"""
import io
import json
import os
import secrets
import shutil
import socket
import subprocess
import sys
import tempfile
import time
import urllib.error
import urllib.request

sys.stdout.reconfigure(encoding="utf-8", errors="replace")
KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
ARAC = os.path.join(KOK, "arac")
ESKI_REF = "origin/makine/umit-tahtaweb"     # yamasız kolun kaynağı

HATA = []
SAY = [0]


def sina(ok, ad, ayr=""):
    SAY[0] += 1
    print(("  OK   " if ok else "  HATA ") + ad + ((" | " + ayr) if ayr else ""))
    if not ok:
        HATA.append(ad)


def bos_port():
    s = socket.socket()
    s.bind(("127.0.0.1", 0))
    p = s.getsockname()[1]
    s.close()
    return p


def git(*a):
    r = subprocess.run(["git", "-C", KOK] + list(a), capture_output=True, text=True,
                       encoding="utf-8", errors="replace")
    return r.stdout.strip()


def baslat(betik, tahta, ag, gunluk, port):
    p = subprocess.Popen([sys.executable, betik, "--ag", ag, "--tahta", tahta,
                          "--gunluk", gunluk, "--bag", "127.0.0.1", "--port", str(port),
                          "--nabiz", "2"],
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


def istek(port, yontem, yol, govde=None, jeton=None):
    veri = json.dumps(govde).encode("utf-8") if govde is not None else None
    r = urllib.request.Request("http://127.0.0.1:%d%s" % (port, yol), data=veri, method=yontem)
    r.add_header("Content-Type", "application/json")
    if jeton is not None:
        r.add_header("X-Atlas-Jeton", jeton)
    try:
        with urllib.request.urlopen(r, timeout=60) as c:
            return c.status, json.loads(c.read().decode("utf-8"))
    except urllib.error.HTTPError as e:
        try:
            return e.code, json.loads(e.read().decode("utf-8"))
        except Exception:
            return e.code, {}


def kayit(yol):
    if not os.path.exists(yol):
        return []
    with io.open(yol, encoding="utf-8") as f:
        return json.load(f)


def bul(yol, no):
    return next((m for m in kayit(yol) if m.get("no") == no), None)


NOTR_SATIRLAR = "T._git = _tasima_yok_git" + chr(10) + "T._tazele = _tasima_yok_tazele" + chr(10)


def havuz(gec, ad, sunucu_bayt):
    """KUM HAVUZU: geçici dizinde `git init` edilmiş, UZAĞI OLMAYAN bir depo —
    arac/tahta.py (main kopyası) + arac/tahta_sunucu.py (verilen sürüm) +
    oturumlar/tahta.json ("[]", commitli). tahta.py'nin git yolları
    (`oturumlar/tahta.json` sabit) BU depoya düşer; push edecek uzak yoktur."""
    kok = os.path.join(gec, ad)
    os.makedirs(os.path.join(kok, "arac"))
    os.makedirs(os.path.join(kok, "oturumlar"))
    shutil.copy(os.path.join(ARAC, "tahta.py"), os.path.join(kok, "arac", "tahta.py"))
    io.open(os.path.join(kok, "arac", "tahta_sunucu.py"), "wb").write(sunucu_bayt)
    io.open(os.path.join(kok, "oturumlar", "tahta.json"), "w", encoding="utf-8").write("[]")

    def g(*a):
        return subprocess.run(["git", "-C", kok] + list(a), capture_output=True, text=True,
                              encoding="utf-8", errors="replace")
    g("init", "-q", "-b", "sinav")
    g("config", "user.name", "sinav")
    g("config", "user.email", "sinav@yerel.invalid")
    g("add", "--", "arac", "oturumlar")
    g("commit", "-q", "-m", "tohum")
    if g("remote").stdout.strip():
        raise RuntimeError("kum havuzunda UZAK VAR — durdum")
    return (kok, lambda: g("rev-parse", "HEAD").stdout.strip(),
            lambda: g("status", "--porcelain").stdout.strip())


def main():
    gec = tempfile.mkdtemp(prefix="tahta_yazma_sinav_")
    jeton = secrets.token_hex(24)                 # hiçbir yere basılmaz
    ag = os.path.join(gec, "ag.json")
    io.open(ag, "w", encoding="utf-8").write(json.dumps({"jeton": jeton}))
    # metin kipinde oku: Windows'ta core.autocrlf=true çalışma ağacı CRLF'tir
    yeni_bayt = io.open(os.path.join(ARAC, "tahta_sunucu.py"), encoding="utf-8").read().encode("utf-8")
    hv, hv_head, hv_durum = havuz(gec, "yeni", yeni_bayt)
    tahta = os.path.join(hv, "oturumlar", "tahta.json")
    hv_head0 = hv_head()
    head0, durum0 = git("rev-parse", "HEAD"), git("status", "--porcelain")
    gercek = os.path.join(KOK, "oturumlar", "tahta.json")
    gercek0 = os.path.getmtime(gercek) if os.path.exists(gercek) else None
    surec = []
    try:
        # ───────────────────────────── yamalı kol
        port = bos_port()
        surec.append(baslat(os.path.join(hv, "arac", "tahta_sunucu.py"), tahta, ag,
                            os.path.join(gec, "yeni.log"), port))
        print("YAMALI KOL — %s (kum havuzunda)" % os.path.join(ARAC, "tahta_sunucu.py"))
        k, c = istek(port, "POST", "/tahta/yaz",
                     {"kim": "SINAV A", "kime": "SINAV B", "mesaj": "birinci",
                      "cevap_bekle": True}, jeton)
        cikti1 = " ".join(c.get("cikti") or [])
        m = bul(tahta, "M-0001")
        sina(k == 200 and c.get("no") == "M-0001" and m is not None
             and m["kimden"] == "SINAV A" and m["kime"] == "SINAV B"
             and m["mesaj"] == "birinci" and m.get("sunucu") == socket.gethostname()
             and m["cevap"] == "BEKLIYOR",
             "Y1 yaz → M-0001 dosyada (kimden/kime/mesaj/sunucu izi)",
             "HTTP %s no=%s" % (k, c.get("no")))
        k, c = istek(port, "POST", "/tahta/yaz",
                     {"kim": "SINAV B", "kime": "SINAV A", "mesaj": "ikinci",
                      "yanit": "M-0001"}, jeton)
        m1 = bul(tahta, "M-0001")
        sina(k == 200 and c.get("no") == "M-0002" and m1["hal"] == "CEVAPLANDI"
             and m1["cevap"] == "→ M-0002", "Y2 yaz --yanit → M-0002, M-0001 CEVAPLANDI",
             "HTTP %s hal=%s" % (k, m1["hal"]))
        k, c = istek(port, "POST", "/tahta/islem",
                     {"eylem": "teyit", "no": "M-0001", "kim": "SINAV B", "soz": "okudum"}, jeton)
        m1 = bul(tahta, "M-0001")
        sina(k == 200 and c.get("kod") == 0 and (m1.get("teyit") or {}).get("SINAV B", {})
             .get("soz") == "okudum", "Y3 teyit → dosyada teyit[SINAV B]", "HTTP %s" % k)
        k, c = istek(port, "POST", "/tahta/islem",
                     {"eylem": "tamam", "no": "M-0001", "kim": "SINAV A"}, jeton)
        m1 = bul(tahta, "M-0001")
        sina(k == 200 and "bekliyorum, tamam" in (m1.get("kapanis") or ""),
             "Y4 tamam → kapanis dolu", "HTTP %s kapanis=%r" % (k, m1.get("kapanis")))
        k, c = istek(port, "POST", "/tahta/islem",
                     {"eylem": "kapat", "no": "M-0001", "kim": "SINAV A"}, jeton)
        sina(k == 200 and bul(tahta, "M-0001")["hal"] == "KAPANDI",
             "Y5 kapat → hal KAPANDI", "HTTP %s" % k)
        k, c = istek(port, "GET", "/tahta/oku", None, jeton)
        sina(k == 200 and len(c.get("mesajlar") or []) == 2 and c.get("son_no") == 2,
             "Y6 oku → 2 mesaj, son_no 2", "HTTP %s" % k)
        k, c = istek(port, "POST", "/tahta/isaretle", {"kim": "SINAV C", "nolar": ["M-0002"]}, jeton)
        sina(k == 200 and "SINAV C" in (bul(tahta, "M-0002").get("okuyan") or {}),
             "Y7 isaretle → okuyan damgası", "HTTP %s" % k)
        g = {"kim": "SINAV A", "kime": "SINAV B", "mesaj": "kuyruk", "yerel_kimlik": "yk-1009"}
        k1, c1 = istek(port, "POST", "/tahta/yaz", g, jeton)
        k2, c2 = istek(port, "POST", "/tahta/yaz", g, jeton)
        sina(k1 == 200 and k2 == 200 and c1.get("no") == c2.get("no") == "M-0003"
             and c2.get("mukerrer") is True and len(kayit(tahta)) == 3,
             "Y8 aynı yerel_kimlik → aynı no, mükerrer yazılmaz",
             "%s/%s kayıt %d" % (c1.get("no"), c2.get("no"), len(kayit(tahta))))

        # ters yön — yamalı kol
        n0 = len(kayit(tahta))
        k, _ = istek(port, "POST", "/tahta/yaz", {"kim": "A", "kime": "B", "mesaj": "x"}, None)
        sina(k == 401, "T1 jetonsuz → 401", "HTTP %s" % k)
        k, _ = istek(port, "POST", "/tahta/yaz", {"kim": "A", "kime": "B", "mesaj": "x"},
                     secrets.token_hex(24))
        sina(k == 401, "T2 yanlış jeton → 401", "HTTP %s" % k)
        k, c = istek(port, "POST", "/tahta/yaz", {"kim": "A", "kime": "B"}, jeton)
        sina(k == 400 and c.get("kod") == 2, "T3 eksik mesaj → 400 kod 2", "HTTP %s" % k)
        k, c = istek(port, "POST", "/tahta/yaz", {"kim": "SINAV A", "kime": "HERKES",
                                                  "mesaj": "dur", "aciliyet": "ACIL"}, jeton)
        sina(k == 400 and c.get("kod") == 2 and len(kayit(tahta)) == n0,
             "T4 ACİL HERKES dayanaksız → 400 kod 2, kayıt artmadı", "HTTP %s" % k)
        k, c = istek(port, "POST", "/tahta/yaz", {"kim": "SINAV A", "kime": "SINAV B",
                                                  "mesaj": "y", "yanit": "M-0999"}, jeton)
        sina(k == 400 and c.get("kod") == 2 and len(kayit(tahta)) == n0,
             "T5 --yanit olmayan no → 400 kod 2", "HTTP %s" % k)
        k, c = istek(port, "POST", "/tahta/islem", {"eylem": "tamam", "no": "M-0002",
                                                    "kim": "SINAV B"}, jeton)
        sina(k == 400 and c.get("kod") == 1 and not bul(tahta, "M-0002").get("kapanis"),
             "T6 teyitsiz mesaja tamam → 400 kod 1", "HTTP %s kod %s" % (k, c.get("kod")))
        k, c = istek(port, "POST", "/tahta/islem", {"eylem": "teyit", "no": "M-0999",
                                                    "kim": "SINAV B"}, jeton)
        sina(k == 400 and c.get("kod") == 2, "T7 olmayan no'ya teyit → 400 kod 2", "HTTP %s" % k)
        k, c = istek(port, "POST", "/tahta/islem", {"eylem": "sil", "no": "M-0001"}, jeton)
        sina(k == 400, "T8 tanımsız eylem → 400", "HTTP %s" % k)

        # ───────────────────────────── yamasız kol (dal sürümü + main tahta.py)
        r = subprocess.run(["git", "-C", KOK, "show", ESKI_REF + ":arac/tahta_sunucu.py"],
                           capture_output=True)
        if r.returncode != 0 or not r.stdout:
            sina(False, "T9 yamasız kol — %s okunamadı" % ESKI_REF)
        else:
            ev, _, _ = havuz(gec, "eski", r.stdout)
            eski_tahta = os.path.join(ev, "oturumlar", "tahta.json")
            port2 = bos_port()
            surec.append(baslat(os.path.join(ev, "arac", "tahta_sunucu.py"), eski_tahta, ag,
                                os.path.join(gec, "eski.log"), port2))
            print("YAMASIZ KOL — %s:arac/tahta_sunucu.py" % ESKI_REF)
            k, c = istek(port2, "GET", "/tahta/oku", None, jeton)
            sina(k == 200, "T9a yamasız kol OKUR (kusur yalnız yazmada)", "HTTP %s" % k)
            k, c = istek(port2, "POST", "/tahta/yaz",
                         {"kim": "SINAV A", "kime": "SINAV B", "mesaj": "birinci"}, jeton)
            sina(k == 503 and "AttributeError" in (c.get("sebep") or "")
                 and not kayit(eski_tahta),
                 "T9b yamasız kol yaz → 503 AttributeError, kayıt boş",
                 "HTTP %s sebep=%s" % (k, (c.get("sebep") or "")[:70]))
            k, c = istek(port2, "POST", "/tahta/islem",
                         {"eylem": "kapat", "no": "M-0001", "kim": "X"}, jeton)
            sina(k == 503 and "AttributeError" in (c.get("sebep") or ""),
                 "T9c yamasız kol islem → 503 AttributeError",
                 "HTTP %s sebep=%s" % (k, (c.get("sebep") or "")[:70]))

        # ───────────────────────────── taşıma açık kol (sensör sınavı)
        sina(yeni_bayt.decode("utf-8").count(NOTR_SATIRLAR) == 1,
             "T10a yamalı sunucuda taşıma kapatma satırları TEK kez var")
        acik_bayt = yeni_bayt.decode("utf-8").replace(NOTR_SATIRLAR, "").encode("utf-8")
        av, av_head, _ = havuz(gec, "acik", acik_bayt)
        av_head0 = av_head()
        port3 = bos_port()
        surec.append(baslat(os.path.join(av, "arac", "tahta_sunucu.py"),
                            os.path.join(av, "oturumlar", "tahta.json"), ag,
                            os.path.join(gec, "acik.log"), port3))
        print("TAŞIMA AÇIK KOL — yeni sunucu, iki satır silinmiş (kum havuzu, uzak yok)")
        k, c = istek(port3, "POST", "/tahta/yaz",
                     {"kim": "SINAV A", "kime": "SINAV B", "mesaj": "birinci"}, jeton)
        cik = " ".join(c.get("cikti") or [])
        sina(av_head() != av_head0 and "push" in cik,
             "T10b taşıma açıkken aynı yazım havuzda COMMIT üretir (Y9 sensörü öter)",
             "HTTP %s kod %s HEAD %s→%s" % (k, c.get("kod"), av_head0[:8], av_head()[:8]))
        # Y9 — yamalı kolun havuzu
        sina(hv_head() == hv_head0 and "oturumlar/tahta.json" in hv_durum()
             and "push" not in cikti1 and "commit:" not in cikti1
             and "TAZELEN" not in cikti1,
             "Y9 yamalı kol: havuz HEAD değişmedi, tahta.json yazıldı-commitlenmedi, "
             "cevapta push/commit/tazele satırı yok",
             "HEAD %s→%s · status %r" % (hv_head0[:8], hv_head()[:8], hv_durum()[:40]))
    finally:
        for p in surec:
            p.kill()
            p.wait(10)
    # Y10 — sınavın koştuğu depo (kollar kum havuzunda koştu)
    head1, durum1 = git("rev-parse", "HEAD"), git("status", "--porcelain")
    sina(head0 == head1 and durum0 == durum1,
         "Y10a sınavın deposu: HEAD + status değişmedi",
         "HEAD %s→%s" % (head0[:8], head1[:8]))
    gercek1 = os.path.getmtime(gercek) if os.path.exists(gercek) else None
    sina(gercek0 == gercek1, "Y10b gerçek oturumlar/tahta.json'a dokunulmadı")
    shutil.rmtree(gec, ignore_errors=True)
    print("SONUÇ: %d/%d" % (SAY[0] - len(HATA), SAY[0]))
    return 1 if HATA else 0


if __name__ == "__main__":
    sys.exit(main())
