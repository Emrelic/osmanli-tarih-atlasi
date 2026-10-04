# -*- coding: utf-8 -*-
"""TEK YAZICI GARANTİSİ SINAVI — sunucular ARASI ve ZAMAN İÇİNDE (TAHTA-WEB-1004).

Koordinatörün sorusu: kabul ölçütü (20 eşzamanlı yazım → 20 ayrı numara) BİR
sunucu içinde geçerliydi; "bir sunucu var" varsayımı sınanmamıştı.

🔴 ÖNGÖRÜ — SINAV KOŞMADAN ÖNCE YAZILDI (4 Ekim 2026, CLAUDE.md §11).
   Evren: geçici dizin · GERÇEK `tahta_sunucu.py` süreçleri · GERÇEK
   `tahta.py` komut satırı. Gerçek tahtaya HİÇBİR şey yazılmaz.
   Y1  sunucu → 3 yazım (M-0004..06) → süreç SERTÇE öldürülür (TerminateProcess,
       temizlik YOK, kilit dosyası kalır) → yeniden başlar (bayat kilidi devralır,
       çıkış 4 DEĞİL) → yeni yazım M-0007 · istemci HİÇBİR uyarı basmaz
   Y1t TERS YÖN: kayıt silinip sunucu yeniden başlarsa numara M-0001'e döner
       VE istemci "FARKLI TAHTA" diye bağırır · eski yedekten açılırsa (aynı soy,
       küçük numara) istemci "NUMARA GERİLEDİ" diye bağırır
   Y2  ilk sunucu CANLIYKEN aynı kayda ikinci sunucu → çıkış 4 + "İKİNCİ SUNUCU";
       ilki hizmete devam eder · başka makinenin TAZE kilidi → çıkış 4 ·
       başka makinenin BAYAT kilidi → açılır, "BAYAT" der
   Y3  koşarken kilit başkasınca ele geçirilirse → yazım 503 "SUNUCU ÇATIŞMASI",
       okuma sürer
   Y4  iki makinede iki AYRI kayıt (A, B): istemci A sonra B ile konuşursa
       "FARKLI TAHTA" basılır · TERS YÖN: A ile iki kez konuşursa basılmaz
   Y5  sunucunun yazdığı kayıt `sunucu` = makine adı taşır · kayıtta başka
       makinenin izi varsa açılış günlüğü "BAŞKA MAKİNENİN SUNUCUSU" der

KULLANIM:  py denetim/ARAC-TAHTA-SUNUCU-COKLU-SINAV-1004.py
"""
import io
import json
import os
import re
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
HATA = 0
MAKINE = socket.gethostname()


def sonuc(ok, baslik, detay=""):
    global HATA
    print(("  OK   " if ok else "  HATA ") + baslik + ((" | " + detay) if detay else ""))
    if not ok:
        HATA += 1


def bos_port():
    s = socket.socket()
    s.bind(("127.0.0.1", 0))
    p = s.getsockname()[1]
    s.close()
    return p


GEC = tempfile.mkdtemp(prefix="tahta_coklu_sinav_")
JETON = "coklu-sinav-jetonu-0123456789"
AG = os.path.join(GEC, "ag.json")
io.open(AG, "w", encoding="utf-8").write(json.dumps({"jeton": JETON}))
SUREC = []


def tohum(yol, n, onek="m", sunucu=None):
    os.makedirs(os.path.dirname(yol), exist_ok=True)
    k = [{"no": "M-%04d" % i, "zaman": "2026-10-04 02:%02d" % i, "kimden": "ZZ-A",
          "kime": "ZZ-B", "kimden_kimlik": "", "mesaj": "%s%d" % (onek, i), "hal": "ACIK",
          "cevap": "GEREKMEZ", "vade": "", "okuyan": {}, "yanit_no": "", "cins": "BILGI",
          "teyit": {}, "kapanis": "", "dayanak": "", "aciliyet": "NORMAL"}
         for i in range(1, n + 1)]
    if sunucu:
        for m in k:
            m["sunucu"] = sunucu
    io.open(yol, "w", encoding="utf-8").write(json.dumps(k, ensure_ascii=False))


def baslat(port, dosya, gunluk, nabiz=None, bekle=True):
    argv = [sys.executable, os.path.join(ARAC, "tahta_sunucu.py"), "--ag", AG,
            "--tahta", dosya, "--port", str(port), "--bag", "127.0.0.1", "--gunluk", gunluk]
    if nabiz:
        argv += ["--nabiz", str(nabiz)]
    p = subprocess.Popen(argv, stdout=subprocess.DEVNULL, stderr=subprocess.PIPE,
                         text=True, encoding="utf-8", errors="replace")
    SUREC.append(p)
    if not bekle:
        return p
    for _ in range(100):
        if p.poll() is not None:
            return p
        try:
            socket.create_connection(("127.0.0.1", port), timeout=0.2).close()
            return p
        except OSError:
            time.sleep(0.1)
    return p


def oldur(p):
    p.kill()                      # Windows: TerminateProcess — temizlik YOK
    p.wait(timeout=10)


def cli(argv, port, istemci):
    e = dict(os.environ, TAHTA_AG=AG, TAHTA_SUNUCU="127.0.0.1:%d" % port,
             TAHTA_VERI=os.path.join(GEC, istemci, "tahta.json"), PYTHONIOENCODING="utf-8")
    r = subprocess.run([sys.executable, os.path.join(ARAC, "tahta.py")] + argv,
                       capture_output=True, text=True, encoding="utf-8",
                       errors="replace", env=e, timeout=60)
    return r.returncode, r.stdout + r.stderr


def no_al(cik):
    m = re.search(r"(M-\d{4}) yazıldı", cik)
    return m.group(1) if m else None


def http(port, yol, govde=None):
    rq = urllib.request.Request("http://127.0.0.1:%d%s" % (port, yol),
                                data=json.dumps(govde).encode() if govde is not None else None,
                                headers={"X-Atlas-Jeton": JETON, "Content-Type": "application/json"},
                                method="POST" if govde is not None else "GET")
    try:
        with urllib.request.urlopen(rq, timeout=10) as r:
            return r.status, json.loads(r.read().decode("utf-8"))
    except urllib.error.HTTPError as e:
        return e.code, json.loads(e.read().decode("utf-8"))


def oku_log(y):
    try:
        return io.open(y, encoding="utf-8").read()
    except OSError:
        return ""


UYARILAR = ("FARKLI TAHTA", "NUMARA GERİLEDİ", "SUNUCUYA ULAŞILAMADI")

print("=" * 72)
print("TEK YAZICI GARANTISI SINAVI — gecici dizin %s" % GEC)
print("=" * 72)
try:
    # ------------------------------------------------------------ Y1
    A = os.path.join(GEC, "A", "tahta.json")
    tohum(A, 3)
    PA = bos_port()
    s1 = baslat(PA, A, os.path.join(GEC, "a1.log"))
    nolar, cikti = [], ""
    for i in range(3):
        kod, c = cli(["yaz", "--kim", "ZZ-Y1", "--kime", "ZZ-B", "--mesaj", "once %d" % i], PA, "ist1")
        nolar.append(no_al(c))
        cikti += c
    oldur(s1)
    kilit_kaldi = os.path.exists(A + ".sunucu")
    s1b = baslat(PA, A, os.path.join(GEC, "a2.log"))
    time.sleep(0.3)
    kod, c = cli(["yaz", "--kim", "ZZ-Y1", "--kime", "ZZ-B", "--mesaj", "sonra"], PA, "ist1")
    cikti += c
    sonra = no_al(c)
    sonuc(nolar == ["M-0004", "M-0005", "M-0006"] and kilit_kaldi,
          "Y1) 3 yazim M-0004..06, sert olumden sonra kilit dosyasi KALDI", "%s · kilit %s" % (nolar, kilit_kaldi))
    sonuc(s1b.poll() is None and "BAYAT SUNUCU KİLİDİ devralındı" in oku_log(os.path.join(GEC, "a2.log")),
          "Y1') yeniden baslayan sunucu bayat kilidi DEVRALDI (cikis 4 degil)")
    sonuc(sonra == "M-0007", "Y1'') yeniden baslamadan sonra numara KALDIGI YERDEN: M-0007", str(sonra))
    sonuc(not any(u in cikti for u in UYARILAR), "Y1''') istemci hicbir uyari basmadi (sahte alarm yok)")

    # ------------------------------------------------------------ Y1t
    oldur(s1b)
    yedek = json.load(io.open(A, encoding="utf-8"))
    os.remove(A)                                    # veri kaybı taklidi
    s1c = baslat(PA, A, os.path.join(GEC, "a3.log"))
    kod, c = cli(["yaz", "--kim", "ZZ-Y1", "--kime", "ZZ-B", "--mesaj", "kayip sonrasi"], PA, "ist1")
    sonuc(no_al(c) == "M-0001" and "FARKLI TAHTA" in c,
          "Y1t) TERS YON: kayit silinince M-0001 VE istemci 'FARKLI TAHTA' bagirdi", "%s" % no_al(c))
    oldur(s1c)
    io.open(A, "w", encoding="utf-8").write(json.dumps(yedek, ensure_ascii=False))
    s1d = baslat(PA, A, os.path.join(GEC, "a4.log"))
    cli(["oku", "--kim", "ZZ-B", "--kisa"], PA, "ist2")            # ist2 M-0007'yi görür
    oldur(s1d)
    io.open(A, "w", encoding="utf-8").write(json.dumps(yedek[:4], ensure_ascii=False))  # ESKİ yedek
    s1e = baslat(PA, A, os.path.join(GEC, "a5.log"))
    kod, c = cli(["oku", "--kim", "ZZ-B", "--kisa"], PA, "ist2")
    sonuc("NUMARA GERİLEDİ" in c, "Y1t') eski yedekten acilinca istemci 'NUMARA GERILEDI' bagirdi",
          c[:160].replace("\n", " ") if "NUMARA" not in c else "")
    oldur(s1e)

    # ------------------------------------------------------------ Y2
    io.open(A, "w", encoding="utf-8").write(json.dumps(yedek, ensure_ascii=False))
    s2 = baslat(PA, A, os.path.join(GEC, "b1.log"))
    PB = bos_port()
    ikinci = baslat(PB, A, os.path.join(GEC, "b2.log"), bekle=False)
    try:
        ikinci.wait(timeout=20)
    except subprocess.TimeoutExpired:
        pass
    err = ikinci.stderr.read() if ikinci.poll() is not None else ""
    k, g = http(PA, "/tahta/oku?limit=0")
    sonuc(ikinci.returncode == 4 and "İKİNCİ SUNUCU" in err,
          "Y2) ayni kayda ikinci sunucu -> cikis 4 + 'IKINCI SUNUCU'", "cikis %s" % ikinci.returncode)
    sonuc(k == 200 and s2.poll() is None, "Y2') ilk sunucu hizmete devam ediyor")
    oldur(s2)
    for ad, damga, bek in (("taze", time.time(), 4), ("bayat", time.time() - 3600, None)):
        io.open(A + ".sunucu", "w", encoding="utf-8").write(json.dumps(
            {"makine": "ZZ-KASA", "pid": 1, "port": 1, "baslangic": "sinav",
             "damga": damga, "nabiz": 20}))
        p = baslat(PB, A, os.path.join(GEC, "b-%s.log" % ad))
        time.sleep(0.5)
        if bek == 4:
            try:
                p.wait(timeout=20)
            except subprocess.TimeoutExpired:
                pass
            sonuc(p.returncode == 4, "Y2'') baska makinenin TAZE kilidi -> cikis 4", "cikis %s" % p.returncode)
        else:
            sonuc(p.poll() is None and "BAYAT" in oku_log(os.path.join(GEC, "b-%s.log" % ad)),
                  "Y2''') baska makinenin BAYAT kilidi -> acildi, 'BAYAT' dedi")
            oldur(p)

    # ------------------------------------------------------------ Y3
    if os.path.exists(A + ".sunucu"):
        os.remove(A + ".sunucu")
    s3 = baslat(PA, A, os.path.join(GEC, "c1.log"), nabiz=0.3)
    io.open(A + ".sunucu", "w", encoding="utf-8").write(json.dumps(
        {"makine": "ZZ-KASA", "pid": 1, "port": 1, "baslangic": "sinav",
         "damga": time.time(), "nabiz": 20}))
    time.sleep(1.5)
    ky, gy = http(PA, "/tahta/yaz", {"kim": "ZZ", "kime": "ZZ-B", "mesaj": "x"})
    ko, go = http(PA, "/tahta/oku?limit=0")
    sonuc(ky == 503 and "SUNUCU ÇATIŞMASI" in gy.get("sebep", ""),
          "Y3) kilit ele gecirilince yazim 503 'SUNUCU CATISMASI'", "%s %s" % (ky, gy.get("sebep", "")[:60]))
    sonuc(ko == 200, "Y3') okuma surdu")
    oldur(s3)
    os.remove(A + ".sunucu")

    # ------------------------------------------------------------ Y4
    B = os.path.join(GEC, "B", "tahta.json")
    tohum(B, 5, onek="b")
    PA2, PB2 = bos_port(), bos_port()
    sa = baslat(PA2, A, os.path.join(GEC, "d1.log"))
    sb = baslat(PB2, B, os.path.join(GEC, "d2.log"))
    _, c1 = cli(["oku", "--kim", "ZZ-B", "--kisa"], PA2, "ist4")
    _, c2 = cli(["oku", "--kim", "ZZ-B", "--kisa"], PA2, "ist4")
    _, c3 = cli(["oku", "--kim", "ZZ-B", "--kisa"], PB2, "ist4")
    sonuc("FARKLI TAHTA" not in c1 + c2, "Y4) TERS YON: ayni sunucuyla iki kez -> uyari YOK")
    sonuc("FARKLI TAHTA" in c3, "Y4') baska makinenin ayri kaydina gecince 'FARKLI TAHTA'",
          c3[:120].replace("\n", " ") if "FARKLI" not in c3 else "")

    # ------------------------------------------------------------ Y5
    kayit = json.load(io.open(A, encoding="utf-8"))
    sonuc(any(m.get("sunucu") == MAKINE for m in kayit),
          "Y5) sunucunun yazdigi kayit 'sunucu'=%s tasiyor" % MAKINE)
    oldur(sa)
    oldur(sb)
    C = os.path.join(GEC, "C", "tahta.json")
    tohum(C, 2, sunucu="ZZ-KASA")
    sc = baslat(bos_port(), C, os.path.join(GEC, "e1.log"))
    time.sleep(0.3)
    sonuc("BAŞKA MAKİNENİN SUNUCUSU" in oku_log(os.path.join(GEC, "e1.log")),
          "Y5') baska makinenin izini tasiyan kayitta acilis gunlugu uyardi")
    oldur(sc)
finally:
    for p in SUREC:
        if p.poll() is None:
            p.kill()
            try:
                p.wait(timeout=10)
            except Exception:
                pass
    shutil.rmtree(GEC, ignore_errors=True)

print("-" * 72)
print("SONUC: %s" % ("temiz — butun ongoruler tuttu" if HATA == 0 else "%d HATA" % HATA))
sys.exit(1 if HATA else 0)
