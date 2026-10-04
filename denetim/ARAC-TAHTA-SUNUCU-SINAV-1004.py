# -*- coding: utf-8 -*-
"""TAHTA SUNUCUSU SINAVI — TAHTA-WEB-1004 · iki yönde.

🔴 ÖNGÖRÜ — SINAV KOŞMADAN ÖNCE YAZILDI (4 Ekim 2026, CLAUDE.md §11).
   Evren: geçici dizinde 3 mesajlık tohum tahta · 127.0.0.1'de rastgele
   portta GERÇEK `arac/tahta_sunucu.py` süreci · GERÇEK `arac/tahta.py` ve
   `arac/tahta_bekci.py` komut satırından (alt süreç) koşturulur. Gerçek
   tahtaya (`oturumlar/tahta.json`) HİÇBİR şey yazılmaz.
   ① jetonsuz GET /tahta/oku → 401 · jetonlu → 200
   ② yanlış jeton → 401 (compare_digest) · doğru jeton → 200
   ③ ağ dışı kaynak (8.8.8.8, dikişten) → 403 · loopback → 200 ·
      izinli_ip: 8.8.8.8 H · ::ffff:8.8.8.8 H · 192.168.1.5 E · 127.0.0.1 E
   ④ 20 EŞZAMANLI `tahta.py yaz` → 20 AYRI numara (M-0004..M-0023), sunucu
      dosyasında 23 kayıt, mükerrer 0, istemcinin yerel dosyası OLUŞMAZ.
      TERS YÖN: eski yol (iki makine, aynı bayat kopya, len+1) → AYNI numara.
   ⑤ GET oku son_no=N → yalnız N'den büyükler · kim süzgeci → yalnız o ada
      ve HERKES'e gidenler
   ⑥ sunucu KAPALI (ölü port) → çıkış 0 + "SUNUCUYA ULAŞILAMADI" basılır +
      yerel dosyaya yazılır + kuyrukta 1 · sunucu AÇIKKEN bu uyarı BASILMAZ ·
      kuyruk sonraki yazımda teslim edilir · aynı yerel_kimlik ikinci kez
      gelirse mükerrer YAZILMAZ
   ⑦ eski çağrılar aynen: yaz (--mesaj ve --mesaj-dosya) · oku --kim ·
      teyit · tamam · kapat · bekleyen · teyitsiz · kimler → çıkış 0;
      eksik argüman → 2; ACİL HERKES dayanaksız → 2 (sunucu üstünden);
      eski sürümün tanıdığı her bayrak yeni sürümde de tanınıyor
   ⑧ bekçi sunucudan okur: kendi adına mesaj → çıkış 0 + stdout'ta numara,
      nabız damgası kaynak=sunucu · başkasına mesaj → UYANDIRMAZ (stdout boş) ·
      KAYNAK-DURUM yasağı → çıkış 3 · muaf → kurulur (3 DEĞİL)

KULLANIM:  py denetim/ARAC-TAHTA-SUNUCU-SINAV-1004.py
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
import threading
import time
import urllib.error
import urllib.request

sys.stdout.reconfigure(encoding="utf-8", errors="replace")
KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
ARAC = os.path.join(KOK, "arac")
sys.path.insert(0, ARAC)

HATA = 0


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


JETON = "sinav-jetonu-0123456789abcdef"
GEC = tempfile.mkdtemp(prefix="tahta_sinav_")
SUNUCU_TAHTA = os.path.join(GEC, "sunucu", "tahta.json")
YEREL_TAHTA = os.path.join(GEC, "yerel", "tahta.json")
AG = os.path.join(GEC, "ag.json")
os.makedirs(os.path.dirname(SUNUCU_TAHTA))
os.makedirs(os.path.dirname(YEREL_TAHTA))
PORT = bos_port()
OLU_PORT = bos_port()
io.open(AG, "w", encoding="utf-8").write(json.dumps({"jeton": JETON}))


def tohum():
    k = []
    for i, (kim, kime) in enumerate((("ZZ-A", "ZZ-B"), ("ZZ-B", "ZZ-A"),
                                     ("ZZ-C", "HERKES")), 1):
        k.append({"no": "M-%04d" % i, "zaman": "2026-10-04 00:0%d" % i,
                  "kimden": kim, "kime": kime, "kimden_kimlik": "",
                  "mesaj": "tohum %d" % i, "hal": "ACIK", "cevap": "GEREKMEZ",
                  "vade": "", "okuyan": {}, "yanit_no": "", "cins": "BILGI",
                  "teyit": {}, "kapanis": "", "dayanak": "", "aciliyet": "NORMAL"})
    io.open(SUNUCU_TAHTA, "w", encoding="utf-8").write(json.dumps(k, ensure_ascii=False))


ORTAM = dict(os.environ, TAHTA_AG=AG, TAHTA_SUNUCU="127.0.0.1:%d" % PORT,
             TAHTA_VERI=YEREL_TAHTA, PYTHONIOENCODING="utf-8")
ORTAM_OLU = dict(ORTAM, TAHTA_SUNUCU="127.0.0.1:%d" % OLU_PORT)


def cli(argv, ortam=None):
    r = subprocess.run([sys.executable, os.path.join(ARAC, "tahta.py")] + argv,
                       capture_output=True, text=True, encoding="utf-8",
                       errors="replace", env=ortam or ORTAM, timeout=120)
    return r.returncode, r.stdout + r.stderr


def http(yol, jeton=JETON, yontem="GET", govde=None, port=PORT):
    bas = {"X-Atlas-Jeton": jeton} if jeton is not None else {}
    veri = json.dumps(govde).encode("utf-8") if govde is not None else None
    if veri:
        bas["Content-Type"] = "application/json"
    rq = urllib.request.Request("http://127.0.0.1:%d%s" % (port, yol),
                                data=veri, headers=bas, method=yontem)
    try:
        with urllib.request.urlopen(rq, timeout=15) as r:
            ham = r.read().decode("utf-8")
            return r.status, (json.loads(ham) if ham.startswith("{") else ham)
    except urllib.error.HTTPError as e:
        ham = e.read().decode("utf-8")
        return e.code, (json.loads(ham) if ham.startswith("{") else ham)


def sunucu_kaydi():
    return json.load(io.open(SUNUCU_TAHTA, encoding="utf-8"))


def sunucu_baslat():
    p = subprocess.Popen(
        [sys.executable, os.path.join(ARAC, "tahta_sunucu.py"), "--ag", AG,
         "--tahta", SUNUCU_TAHTA, "--port", str(PORT), "--bag", "127.0.0.1",
         "--gunluk", os.path.join(GEC, "sunucu.log")],
        stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
    for _ in range(100):
        try:
            socket.create_connection(("127.0.0.1", PORT), timeout=0.2).close()
            return p
        except OSError:
            time.sleep(0.1)
    raise RuntimeError("sunucu ayaga kalkmadi")


print("=" * 72)
print("TAHTA SUNUCUSU SINAVI — iki yonde · gecici dizin %s" % GEC)
print("=" * 72)
tohum()
SUNUCU = sunucu_baslat()
TEMIZLE = []          # sinavin GERCEK dizinlere yazdigi dosyalar
try:
    # ---------------------------------------------------------------- ①
    k, g = http("/tahta/oku", jeton=None)
    sonuc(k == 401, "1) jetonsuz -> 401", "donen %s" % k)
    k, g = http("/tahta/oku?hepsi=1")
    sonuc(k == 200 and len(g["mesajlar"]) == 3, "1') jetonlu -> 200 ve 3 mesaj",
          "donen %s" % k)

    # ---------------------------------------------------------------- ②
    k, g = http("/tahta/oku", jeton=JETON[:-1] + "X")
    sonuc(k == 401, "2) yanlis jeton -> 401", "donen %s" % k)
    k, g = http("/tahta/oku?jeton=%s&hepsi=1" % JETON, jeton=None)
    sonuc(k == 200, "2') dogru jeton (sorgudan) -> 200", "donen %s" % k)

    # ---------------------------------------------------------------- ③
    import tahta_sunucu as TS
    sonuc((TS.izinli_ip("8.8.8.8"), TS.izinli_ip("::ffff:8.8.8.8"),
           TS.izinli_ip("192.168.1.5"), TS.izinli_ip("127.0.0.1"))
          == (False, False, True, True),
          "3) izinli_ip: disari H, esli-IPv6 disari H, ozel E, loopback E")

    class DisKapi(TS.Kapi):
        def kaynak_ip(self):
            return "8.8.8.8"

    TS.GUNLUK = os.path.join(GEC, "sunucu-ic.log")
    TS.T.VERI = SUNUCU_TAHTA           # ic-surec sunucu da ayni dosyaya baksin
    TS.T.GORUNUM = os.path.join(os.path.dirname(SUNUCU_TAHTA), "TAHTA.md")
    for ad, kapi, bek in (("dis", DisKapi, 403), ("ic", TS.Kapi, 200)):
        p2 = bos_port()
        s2 = TS.kur(JETON, p2, "127.0.0.1", kapi)
        t = threading.Thread(target=s2.serve_forever, daemon=True)
        t.start()
        k, g = http("/tahta/oku?limit=0", port=p2)
        s2.shutdown()
        s2.server_close()
        sonuc(k == bek, "3') %s kaynak -> %d" % (ad, bek), "donen %s" % k)

    # ---------------------------------------------------------------- ④
    N = 20
    sonuclar = [None] * N

    def isci(i):
        sonuclar[i] = cli(["yaz", "--kim", "ZZ-ESZ-%02d" % i, "--kime", "ZZ-A",
                           "--mesaj", "eszamanli %d" % i])

    ipler = [threading.Thread(target=isci, args=(i,)) for i in range(N)]
    for t in ipler:
        t.start()
    for t in ipler:
        t.join()
    nolar = []
    for kod, cik in sonuclar:
        m = re.search(r"(M-\d{4}) yazıldı", cik)
        nolar.append(m.group(1) if (kod == 0 and m) else "HATA:%s" % cik[-200:])
    kayit = sunucu_kaydi()
    tum = [x["no"] for x in kayit]
    sonuc(len(set(nolar)) == N and not any(n.startswith("HATA") for n in nolar),
          "4) %d eszamanli yazim -> %d AYRI numara" % (N, N),
          "%d tekil · ornek %s" % (len(set(nolar)), sorted(nolar)[:3]))
    sonuc(len(kayit) == 3 + N and len(set(tum)) == len(tum)
          and sorted(nolar) == ["M-%04d" % i for i in range(4, 4 + N)],
          "4') sunucu dosyasi %d kayit, mukerrer 0, M-0004..M-%04d" % (3 + N, 3 + N),
          "kayit %d · tekil %d" % (len(kayit), len(set(tum))))
    sonuc(not os.path.exists(YEREL_TAHTA),
          "4'') istemcinin yerel tahtasi OLUSMADI (dusus yok)")
    # TERS YON — eski yol: iki makine ayni bayat kopyadan numara uretir.
    import tahta as T
    bayat = json.load(io.open(SUNUCU_TAHTA, encoding="utf-8"))[:10]
    a_kopya, b_kopya = list(bayat), list(bayat)
    sonuc(T._yeni_no(a_kopya) == T._yeni_no(b_kopya),
          "4''') TERS YON: eski yol (bayat yerel kopya) iki makineye AYNI numarayi verir",
          T._yeni_no(a_kopya))

    # ---------------------------------------------------------------- ⑤
    k, g = http("/tahta/oku?hepsi=1&son_no=20")
    sonuc(k == 200 and [x["no"] for x in g["mesajlar"]] == ["M-0021", "M-0022", "M-0023"]
          and g["son_no"] == 23,
          "5) son_no=20 -> yalniz M-0021..23", str([x["no"] for x in g.get("mesajlar", [])]))
    k, g = http("/tahta/oku?kim=ZZ-B")
    sonuc(k == 200 and sorted(x["no"] for x in g["mesajlar"]) == ["M-0001", "M-0003"],
          "5') kim=ZZ-B -> yalniz ona + HERKES", str([x["no"] for x in g.get("mesajlar", [])]))

    # ---------------------------------------------------------------- ⑥
    kod, cik = cli(["yaz", "--kim", "ZZ-DUS", "--kime", "ZZ-A", "--mesaj", "dusus"],
                   ortam=ORTAM_OLU)
    yerel = json.load(io.open(YEREL_TAHTA, encoding="utf-8")) if os.path.exists(YEREL_TAHTA) else []
    kuyruk_yolu = os.path.join(os.path.dirname(YEREL_TAHTA), "tahta_kuyruk.json")
    kuyruk = json.load(io.open(kuyruk_yolu, encoding="utf-8")) if os.path.exists(kuyruk_yolu) else []
    sonuc(kod == 0 and "SUNUCUYA ULAŞILAMADI" in cik and "çatışma riski GERİ DÖNDÜ" in cik,
          "6) sunucu kapali -> cikis 0 + UYARI basildi", "kod %d" % kod)
    sonuc(len(yerel) == 1 and yerel[0]["mesaj"] == "dusus" and len(kuyruk) == 1,
          "6') yerel dosyaya yazildi + kuyrukta 1", "yerel %d · kuyruk %d" % (len(yerel), len(kuyruk)))
    sonuc(not any("SUNUCUYA ULAŞILAMADI" in c for _, c in sonuclar),
          "6'') TERS YON: sunucu acikken uyari BASILMADI (20 yazimin 0'inda)")
    kod, cik = cli(["yaz", "--kim", "ZZ-DUS", "--kime", "ZZ-A", "--mesaj", "dusus sonrasi"])
    kayit = sunucu_kaydi()
    inen = [x for x in kayit if x.get("yerel_kimlik") == kuyruk[0]["yerel_kimlik"]] if kuyruk else []
    sonuc(kod == 0 and "KUYRUK teslim edildi" in cik and len(inen) == 1
          and not os.path.exists(kuyruk_yolu),
          "6''') kuyruk sonraki yazimda TESLIM edildi, kuyruk bosaldi",
          "inen %d" % len(inen))
    k, g = http("/tahta/yaz", yontem="POST", govde=dict(kuyruk[0]) if kuyruk else {})
    sonuc(k == 200 and g.get("mukerrer") and len(sunucu_kaydi()) == len(kayit),
          "6'''') ayni yerel_kimlik ikinci kez -> mukerrer, YAZILMADI")

    # ---------------------------------------------------------------- ⑦
    mesaj_dosya = os.path.join(GEC, "mesaj.txt")
    io.open(mesaj_dosya, "w", encoding="utf-8").write("dosyadan `backtick` ve Türkçe İıŞş")
    adimlar = [
        ("yaz --mesaj", ["yaz", "--kim", "ZZ-ESKI", "--kime", "ZZ-A", "--mesaj", "eski cagri",
                         "--cevap-bekle", "--cins", "SORU"], 0),
        ("yaz --mesaj-dosya", ["yaz", "--kim", "ZZ-ESKI", "--kime", "ZZ-A",
                               "--mesaj-dosya", mesaj_dosya], 0),
        ("oku --kim", ["oku", "--kim", "ZZ-A", "--kisa"], 0),
        ("oku --yeni", ["oku", "--kim", "ZZ-A", "--yeni"], 0),
        ("teyit", ["teyit", "M-0001", "--kim", "ZZ-B"], 0),
        ("tamam", ["tamam", "M-0001", "--kim", "ZZ-A"], 0),
        ("kapat", ["kapat", "M-0002", "--kim", "ZZ-B"], 0),
        ("bekleyen", ["bekleyen"], 0),
        ("teyitsiz", ["teyitsiz"], 0),
        ("kimler", ["kimler"], 0),
        ("eksik arguman", ["yaz", "--kim", "ZZ-ESKI"], 2),
        ("ACIL HERKES dayanaksiz", ["yaz", "--kim", "ZZ-ESKI", "--kime", "HERKES",
                                    "--mesaj", "x", "--aciliyet", "ACIL"], 2),
        ("teyit olmayan no", ["teyit", "M-9999", "--kim", "ZZ-B"], 2),
    ]
    kotu = []
    for ad, argv, bek in adimlar:
        kod, cik = cli(argv)
        if kod != bek or "SUNUCUYA ULAŞILAMADI" in cik:
            kotu.append("%s: kod %d (beklenen %d) %s" % (ad, kod, bek, cik[-160:]))
    sonuc(not kotu, "7) %d eski cagri aynen calisiyor (sunucu uzerinden)" % len(adimlar),
          " || ".join(kotu))
    kayit = {x["no"]: x for x in sunucu_kaydi()}
    sonuc(kayit["M-0001"].get("teyit", {}).get("ZZ-B") and kayit["M-0001"].get("kapanis")
          and kayit["M-0002"]["hal"] == "KAPANDI"
          and "ZZ-A" in (kayit["M-0003"].get("okuyan") or {}),
          "7') teyit/tamam/kapat/okundu SUNUCU dosyasina indi")
    son_iki = [x for x in kayit.values() if x["kimden"] == "ZZ-ESKI"]
    sonuc(any("`backtick`" in x["mesaj"] and "İıŞş" in x["mesaj"] for x in son_iki),
          "7'') --mesaj-dosya: backtick ve Turkce harf BOZULMADAN indi")
    eski = subprocess.run(["git", "-C", KOK, "show", "HEAD:arac/tahta.py"],
                          capture_output=True, text=True, encoding="utf-8").stdout
    yeni = io.open(os.path.join(ARAC, "tahta.py"), encoding="utf-8").read()
    bayrak = lambda s: set(re.findall(r'al\("(--[a-z-]+)"\)', s)) | \
        set(re.findall(r'"(--[a-z-]+)" in argv', s))
    altkom = lambda s: set(re.findall(r'if k == "([a-z]+)"', s)) | \
        set(re.findall(r'if k in \(([^)]*)\)', s))
    eksik = (bayrak(eski) - bayrak(yeni)) | (altkom(eski) - altkom(yeni))
    sonuc(bool(eski) and not eksik,
          "7''') eski surumun %d bayragi + alt komutlari yeni surumde var"
          % len(bayrak(eski)), "eksik: %s" % sorted(eksik) if eksik else "")

    # ---------------------------------------------------------------- ⑧
    import tahta_bekci as TB
    import kaynak_durum as KD
    AD = "ZZSINAV-TAHTAWEB"
    nabiz = os.path.join(KOK, "oturumlar", "bekci", "ZZSINAV_TAHTAWEB.json")
    son_d = os.path.join(KOK, "oturumlar", ".bekci_son_ZZSINAV_TAHTAWEB.txt")
    TEMIZLE += [nabiz, son_d]
    for y in (nabiz, son_d):
        if os.path.exists(y):
            os.remove(y)
    bk = subprocess.Popen([sys.executable, os.path.join(ARAC, "tahta_bekci.py"),
                           "--kim", AD, "--cik", "--ara", "0.3", "--defter-yok"],
                          stdout=subprocess.PIPE, stderr=subprocess.PIPE, env=ORTAM,
                          text=True, encoding="utf-8", errors="replace")
    for _ in range(100):
        if os.path.exists(nabiz):
            break
        time.sleep(0.1)
    time.sleep(0.5)
    cli(["yaz", "--kim", "ZZ-A", "--kime", "ZZ-BASKASI", "--mesaj", "baskasina"])
    time.sleep(1.0)
    erken = bk.poll()
    kod, cik = cli(["yaz", "--kim", "ZZ-A", "--kime", AD, "--mesaj", "bekci uyan"])
    no = (re.search(r"(M-\d{4}) yazıldı", cik) or re.search("x", "x")).group(0)
    try:
        bout, berr = bk.communicate(timeout=20)
    except subprocess.TimeoutExpired:
        bk.kill()
        bout, berr = bk.communicate()
    d = json.load(io.open(nabiz, encoding="utf-8")) if os.path.exists(nabiz) else {}
    sonuc(erken is None, "8) baskasina giden mesaj bekciyi UYANDIRMADI (hala nobette)")
    sonuc(bk.returncode == 0 and no in bout and "baskasina" not in bout,
          "8') kendi adina mesaj -> cikis 0, stdout'ta %s, baskasininki YOK" % no,
          "kod %s · stdout %r · stderr %r" % (bk.returncode, bout[:120], berr[-160:]))
    sonuc(d.get("kaynak") == "sunucu" and d.get("durum") == "cikti",
          "8'') nabiz damgasi: kaynak=sunucu, durum=cikti", str({k: d.get(k) for k in ("kaynak", "durum", "sebep")}))
    # cikis-3 kapisi — ic-surec, KAYNAK-DURUM gecici dosyaya yonlendirilir
    eski_dosya = KD.DOSYA
    try:
        KD.DOSYA = os.path.join(GEC, "KAYNAK-DURUM.json")
        io.open(KD.DOSYA, "w", encoding="utf-8").write(json.dumps(
            {"bekci_yasak": True, "kod": "KOSU", "muaf": ["ZZSINAV-MUAF"]}))
        k3 = TB.main(["--kim", "ZZSINAV-YASAK", "--defter-yok"])
        TB.TAHTA = os.path.join(GEC, "bos_tahta.json")
        io.open(TB.TAHTA, "w", encoding="utf-8").write("[]")
        km = TB.main(["--kim", "ZZSINAV-MUAF", "--tur", "1", "--ara", "0.05",
                      "--tahta", TB.TAHTA, "--defter-yok"])
        TEMIZLE.append(os.path.join(GEC, "bekci"))
        sonuc(k3 == 3, "8''') KAYNAK-DURUM yasagi -> cikis 3", "donen %s" % k3)
        sonuc(km == 0, "8'''') muaf ad -> kuruldu (3 DEGIL)", "donen %s" % km)
    finally:
        KD.DOSYA = eski_dosya
finally:
    SUNUCU.terminate()
    try:
        SUNUCU.wait(timeout=10)
    except Exception:
        SUNUCU.kill()
    for y in TEMIZLE:
        if os.path.isfile(y):
            os.remove(y)
    shutil.rmtree(GEC, ignore_errors=True)

print("-" * 72)
print("SONUC: %s" % ("temiz — butun oncgoruler tuttu" if HATA == 0 else "%d HATA" % HATA))
sys.exit(1 if HATA else 0)
