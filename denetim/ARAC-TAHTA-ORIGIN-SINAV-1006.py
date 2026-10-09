# -*- coding: utf-8 -*-
"""TAHTA-ORIGIN-OKU-1006 SINAVI — bekçi tahtayı ORIGIN'den okuyor mu? İKİ YÖNDE, GERÇEK git ile.

🔴 VAKA: `tahta.py yaz` origin'e push ediyor, bekçi YEREL ağacı okuyordu, kimse pull
etmiyordu ⇒ EMRELIC'in 10 görev mesajı UMIT'teki 11 canlı bekçiye 3 saat ulaşmadı.

Kurulum (geçici dizin, YAPAY DEĞİL — gerçek git süreçleri):
    origin.git   (bare)  ← "uzak"
    A/           klon    ← "EMRELIC": yazar + push eder
    B/           klon    ← "UMIT": bekçi BURADA koşar, ağacı HİÇ pull edilmez
Bekçi gerçek `arac/tahta_bekci.py`, `--tahta B/oturumlar/tahta.json` ile koşar; nabız
damgası `B/oturumlar/bekci/` altına düşer. Gerçek depoya / gerçek tahtaya DOKUNULMAZ (S9).

Sorular:
  S0  KONTROL (hatanın yeniden üretimi): `--kaynak yerel` bekçi origin'deki mesajı GÖRMEZ
  S1  origin'de yeni mesaj, B ağacı bayat → bekçi GÖRÜR, çıkar (kod 0), damga kaynak=origin
  S1b B'nin ağacı ve HEAD'i DEĞİŞMEDİ (fetch ağaca dokunmadı, pull yok)
  S2  origin erişilemez → stderr'de FETCH DÜŞTÜ, damgada kaynak=yerel + fetch_hata dolu
  S2b fetch düşerken YEREL mesaj yine görülür (yerele düşüş çalışıyor, notlu)
  S3  kime=BAŞKA AD (origin'de) → UYANMAZ (tur dolar, stdout'ta mesaj yok)
  S3b kime=HERKES bilgi (aciliyet yok) → UYANMAZ
  S4  birleşim: origin sağlam + B'de push edilmemiş yerel mesaj → GÖRÜR, damga yerel_ek ≥ 1
  S5  bekci_olc.py kaynak sütunu: origin / yerel(+not) / ESKI (alan yok) ayırt edilir
  S6  tahta.py bekleyen --kaynak origin: origin mesajını listeler, kaynağı basar
  S7  tahta.py oku --kaynak origin --kim: 'okundu' damgası YAZILMAZ (yerel dosya değişmez)
  S9  gerçek tahta.json + gerçek oturumlar/bekci dokunulmadı
KULLANIM:  py denetim/ARAC-TAHTA-ORIGIN-SINAV-1006.py      ÇIKIŞ 0 temiz · 1 kusur
"""
import hashlib
import io
import json
import os
import shutil
import subprocess
import sys
import tempfile
import time

try:
    sys.stdout.reconfigure(encoding="utf-8", errors="replace")
except Exception:
    pass

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
BEKCI = os.path.join(KOK, "arac", "tahta_bekci.py")
sys.path.insert(0, os.path.join(KOK, "arac"))
HATA = 0


def sonuc(ok, baslik, detay=""):
    global HATA
    print(("  OK   " if ok else "  HATA ") + baslik + ((" | " + detay) if detay else ""))
    if not ok:
        HATA += 1


def g(kok, *a):
    r = subprocess.run(["git", "-C", kok] + list(a), capture_output=True, text=True,
                       encoding="utf-8", errors="replace")
    if r.returncode != 0:
        raise RuntimeError("git %s: %s" % (" ".join(a), r.stderr.strip()))
    return r.stdout.strip()


def ozet(yol):
    try:
        return hashlib.sha256(open(yol, "rb").read()).hexdigest()[:12]
    except OSError:
        return "YOK"


def dizin_ozet(d):
    if not os.path.isdir(d):
        return "YOK"
    h = hashlib.sha256()
    for ad in sorted(os.listdir(d)):
        h.update(ad.encode())
    return h.hexdigest()[:12]


def mesaj(no, kimden, kime, metin, aciliyet=""):
    return {"no": no, "zaman": "2026-10-06 12:%02d" % (int(no[-2:]) % 60), "kimden": kimden,
            "kime": kime, "kimden_kimlik": "", "mesaj": metin, "hal": "ACIK", "cevap": "",
            "vade": "", "okuyan": {}, "yanit_no": "", "cins": "BILGI", "teyit": {},
            "kapanis": "", "dayanak": "", "aciliyet": aciliyet}


def tahta_yaz(depo, liste):
    y = os.path.join(depo, "oturumlar", "tahta.json")
    io.open(y, "w", encoding="utf-8").write(json.dumps(liste, ensure_ascii=False, indent=1))
    return y


def tahta_oku(depo):
    return json.load(io.open(os.path.join(depo, "oturumlar", "tahta.json"), encoding="utf-8"))


def push_mesaj(A, m):
    liste = tahta_oku(A) + [m]
    tahta_yaz(A, liste)
    g(A, "add", "--", "oturumlar/tahta.json")
    g(A, "commit", "-q", "-m", "TAHTA %s" % m["no"], "--", "oturumlar/tahta.json")
    g(A, "push", "-q", "origin", "main")


def bekci(B, kim, *ek, **kw):
    """Gerçek bekçiyi koşturur; (çıkış, stdout, stderr)."""
    a = [sys.executable, BEKCI, "--kim", kim, "--tahta",
         os.path.join(B, "oturumlar", "tahta.json"), "--ara", "1", "--defter-yok",
         "--fetch-ara", "0"] + list(ek)
    p = subprocess.Popen(a, stdout=subprocess.PIPE, stderr=subprocess.PIPE)
    if kw.get("sonra"):
        time.sleep(kw.get("bekle_once", 2.5))
        kw["sonra"]()
    try:
        out, err = p.communicate(timeout=kw.get("zaman", 60))
    except subprocess.TimeoutExpired:
        p.kill()
        out, err = p.communicate()
        return "ZAMAN-ASIMI", out.decode("utf-8", "replace"), err.decode("utf-8", "replace")
    return p.returncode, out.decode("utf-8", "replace"), err.decode("utf-8", "replace")


def damga(B, kim):
    import re
    y = os.path.join(B, "oturumlar", "bekci", re.sub(r"[^A-Za-z0-9]+", "_", kim) + ".json")
    try:
        return json.load(io.open(y, encoding="utf-8"))
    except Exception:
        return {}


print("=" * 76)
print("TAHTA-ORIGIN SINAVI — gerçek git, geçici origin, iki yönde")
print("=" * 76)
GERCEK_TAHTA = os.path.join(KOK, "oturumlar", "tahta.json")
GERCEK_BEKCI = os.path.join(KOK, "oturumlar", "bekci")
once_t, once_b = ozet(GERCEK_TAHTA), dizin_ozet(GERCEK_BEKCI)

TMP = tempfile.mkdtemp(prefix="tahta_origin_sinav_")
try:
    O = os.path.join(TMP, "origin.git")
    A = os.path.join(TMP, "A")
    B = os.path.join(TMP, "B")
    subprocess.run(["git", "init", "-q", "--bare", "-b", "main", O], check=True)
    subprocess.run(["git", "init", "-q", "-b", "main", A], check=True)
    for k, v in (("user.name", "sinav"), ("user.email", "sinav@yok"), ("core.autocrlf", "false")):
        g(A, "config", k, v)
    os.makedirs(os.path.join(A, "oturumlar"))
    tahta_yaz(A, [mesaj("M-0001", "KOORD", "HERKES", "acilis"),
                  mesaj("M-0002", "KOORD", "ZZ_B", "eski mesaj — bekci bunu YENI saymamali")])
    g(A, "add", "--", "oturumlar/tahta.json")
    g(A, "commit", "-q", "-m", "ilk", "--", "oturumlar/tahta.json")
    g(A, "remote", "add", "origin", O)
    g(A, "push", "-q", "-u", "origin", "main")
    subprocess.run(["git", "clone", "-q", O, B], check=True)
    for k, v in (("user.name", "sinav"), ("user.email", "sinav@yok")):
        g(B, "config", k, v)
    B_HEAD0 = g(B, "rev-parse", "HEAD")
    B_TAHTA0 = ozet(os.path.join(B, "oturumlar", "tahta.json"))

    # ---------------------------------------------------------------- S0 KONTROL
    kod, out, err = bekci(B, "ZZ_B", "--kaynak", "yerel", "--tur", "4",
                          sonra=lambda: push_mesaj(A, mesaj("M-0003", "EMRELIC", "ZZ_B",
                                                            "S0 kontrol mesaji")))
    sonuc(kod == 0 and "M-0003" not in out,
          "S0 KONTROL: --kaynak yerel, origin'de M-0003 var → GÖRMEZ (6 Ekim arızası yeniden üretildi)",
          "kod=%s stdout=%r" % (kod, out.strip()[:80]))
    d0 = damga(B, "ZZ_B")
    sonuc(d0.get("kaynak") == "yerel" and "bayra" in (d0.get("kaynak_not") or ""),
          "S0b damga: kaynak=yerel + not '--kaynak yerel bayrağı'",
          "kaynak=%r not=%r" % (d0.get("kaynak"), d0.get("kaynak_not")))

    # ---------------------------------------------------------------- S1 ORIGIN GÖRÜR
    kod, out, err = bekci(B, "ZZ_B", "--cik", "--tur", "20",
                          sonra=lambda: push_mesaj(A, mesaj("M-0004", "EMRELIC", "ZZ_B",
                                                            "S1 gorev mesaji")))
    d1 = damga(B, "ZZ_B")
    sonuc(kod == 0 and "M-0004" in out and d1.get("sebep") == "mesaj-var",
          "S1 origin'de yeni mesaj, B ağacı bayat → bekçi GÖRDÜ ve ÇIKTI (mesaj-var)",
          "kod=%s sebep=%r stdout=%r" % (kod, d1.get("sebep"), out.strip()[:90]))
    sonuc(d1.get("kaynak") == "origin" and d1.get("fetch_ok") is True,
          "S1 damga: kaynak=origin · fetch_ok=True",
          "kaynak=%r fetch_ok=%r" % (d1.get("kaynak"), d1.get("fetch_ok")))
    sonuc("M-0003" not in out,
          "S1 M-0003 (bekçi kurulmadan ÖNCE origin'deydi, son_dosya yok) yeniden basılmadı")
    sonuc("YEREL ağaçta YOK" in err and "--kaynak origin" in err,
          "S1 stderr: 'mesaj YEREL ağaçta YOK' + okuma yolu (--kaynak origin) verildi")
    sonuc(g(B, "rev-parse", "HEAD") == B_HEAD0
          and ozet(os.path.join(B, "oturumlar", "tahta.json")) == B_TAHTA0
          and g(B, "status", "--porcelain", "--untracked-files=no") == "",
          "S1b B'nin HEAD'i, tahta.json'u ve ağacı DEĞİŞMEDİ (pull/merge yok)")
    sonuc(g(B, "rev-parse", "refs/remotes/origin/main") != g(A, "rev-parse", "HEAD"),
          "S1b origin/main (izleyen ref) OYNATILMADI — bekçi ÖZEL ref'e fetch etti",
          "refs/bekci/ZZ_B=%s" % g(B, "rev-parse", "refs/bekci/ZZ_B")[:8])

    # ---------------------------------------------------------------- S3 BAŞKA AD
    kod, out, err = bekci(B, "ZZ_B", "--cik", "--tur", "5",
                          sonra=lambda: push_mesaj(A, mesaj("M-0005", "EMRELIC", "BASKA_AD",
                                                            "baskasina")))
    d3 = damga(B, "ZZ_B")
    sonuc(kod == 0 and "M-0005" not in out and d3.get("sebep") == "tur-doldu",
          "S3 kime=BAŞKA AD (origin'de) → UYANMADI (tur doldu)",
          "kod=%s sebep=%r stdout=%r" % (kod, d3.get("sebep"), out.strip()[:80]))
    kod, out, err = bekci(B, "ZZ_B", "--cik", "--tur", "5",
                          sonra=lambda: push_mesaj(A, mesaj("M-0006", "EMRELIC", "HERKES",
                                                            "bilgi duyurusu")))
    sonuc(kod == 0 and "M-0006" not in out and "HERKES/bilgi" in err,
          "S3b kime=HERKES bilgi (aciliyet yok) → UYANMADI, stderr'e teşhis",
          "kod=%s stdout=%r" % (kod, out.strip()[:80]))

    # ---------------------------------------------------------------- S4 BİRLEŞİM
    def yerel_ekle():
        liste = tahta_oku(B) + [mesaj("M-0099", "UMIT_KOMSU", "ZZ_B", "push edilmemis yerel")]
        tahta_yaz(B, liste)
    kod, out, err = bekci(B, "ZZ_B", "--cik", "--tur", "20", sonra=yerel_ekle)
    d4 = damga(B, "ZZ_B")
    sonuc(kod == 0 and "M-0099" in out and d4.get("kaynak") == "origin"
          and (d4.get("yerel_ek") or 0) >= 1,
          "S4 origin sağlam + B'de push EDİLMEMİŞ yerel mesaj → GÖRDÜ, kaynak=origin, yerel_ek≥1",
          "kod=%s kaynak=%r yerel_ek=%r stdout=%r" % (kod, d4.get("kaynak"), d4.get("yerel_ek"),
                                                     out.strip()[:60]))
    g(B, "checkout", "-q", "--", "oturumlar/tahta.json")          # B'yi geri al

    # ---------------------------------------------------------------- S2 FETCH DÜŞER
    g(B, "remote", "set-url", "origin", os.path.join(TMP, "YOK-BOYLE-BIR-ORIGIN.git"))

    def yerel_ekle2():
        liste = tahta_oku(B) + [mesaj("M-0098", "UMIT_KOMSU", "ZZ_B", "fetch dusukken yerel")]
        tahta_yaz(B, liste)
    kod, out, err = bekci(B, "ZZ_B", "--cik", "--tur", "20", sonra=yerel_ekle2)
    d2 = damga(B, "ZZ_B")
    sonuc("FETCH DÜŞTÜ" in err,
          "S2 origin erişilemez → stderr'de 'FETCH DÜŞTÜ'",
          (err.strip().splitlines() or ["(stderr boş)"])[0][:110])
    sonuc(d2.get("kaynak") == "yerel" and d2.get("fetch_ok") is False
          and bool(d2.get("fetch_hata")) and "fetch düştü" in (d2.get("kaynak_not") or ""),
          "S2 damga: kaynak=yerel · fetch_ok=False · fetch_hata dolu · kaynak_not AÇIK",
          "kaynak=%r fetch_hata=%r" % (d2.get("kaynak"), (d2.get("fetch_hata") or "")[:70]))
    sonuc(kod == 0 and "M-0098" in out,
          "S2b fetch düşerken YEREL mesaj yine GÖRÜLDÜ (notlu yerele düşüş çalışıyor)",
          "kod=%s stdout=%r" % (kod, out.strip()[:60]))
    g(B, "checkout", "-q", "--", "oturumlar/tahta.json")
    g(B, "remote", "set-url", "origin", O)

    # ---------------------------------------------------------------- S5 bekci_olc
    import bekci_olc
    eski_dizin = bekci_olc.DIZIN
    try:
        bekci_olc.DIZIN = os.path.join(TMP, "olc")
        os.makedirs(bekci_olc.DIZIN)
        simdi = int(time.time())
        for ad, ek in (("ZZ_ORIGIN", {"kaynak": "origin", "kaynak_not": ""}),
                       ("ZZ_YEREL", {"kaynak": "yerel", "kaynak_not": "fetch düştü (kod=128: x)",
                                     "fetch_hata": "kod=128: x"}),
                       ("ZZ_ESKI", {})):
            dd = {"ad": ad, "durum": "nobette", "pid": os.getpid(), "damga": simdi,
                  "tur": 1, "ara": 60, "dinlenen": [ad]}
            dd.update(ek)
            io.open(os.path.join(bekci_olc.DIZIN, ad + ".json"), "w",
                    encoding="utf-8").write(json.dumps(dd, ensure_ascii=False))
        k = {x["ad"]: x for x in bekci_olc.oku()}
        sonuc(k["ZZ_ORIGIN"]["kaynak"] == "origin" and k["ZZ_YEREL"]["kaynak"] == "yerel"
              and "fetch düştü" in k["ZZ_YEREL"]["kaynak_not"] and k["ZZ_ESKI"]["kaynak"] == "ESKI",
              "S5 bekci_olc: origin / yerel(+sebep) / ESKI (alansız = yama öncesi) AYIRT EDİLDİ",
              "%s" % {a: k[a]["kaynak"] for a in k})
        import contextlib
        buf = io.StringIO()
        with contextlib.redirect_stdout(buf):
            bekci_olc.main([])
        tablo = buf.getvalue()
        sonuc("KAYNAK (nöbettekiler): ESKI 1 · origin 1 · yerel 1" in tablo
              and "🔴 YEREL okuyan nöbetçi: ZZ_YEREL" in tablo,
              "S5b bekci_olc tablosu kaynak özetini ve YEREL alarm satırını basıyor",
              [x for x in tablo.splitlines() if "KAYNAK" in x][:1].__repr__())
    finally:
        bekci_olc.DIZIN = eski_dizin

    # ---------------------------------------------------------------- S6/S7 tahta.py
    import contextlib
    import importlib
    tahta = importlib.import_module("tahta")
    eski_veri = tahta.VERI
    try:
        tahta.VERI = os.path.join(B, "oturumlar", "tahta.json")
        buf = io.StringIO()
        with contextlib.redirect_stdout(buf):
            tahta.main(["oku", "--hepsi", "--kaynak", "origin"])
        o = buf.getvalue()
        sonuc("kaynak: ORIGIN" in o and "M-0006" in o,
              "S6 tahta.py oku --hepsi --kaynak origin: origin mesajı (M-0006) listelendi, kaynak basıldı",
              (o.splitlines() or [""])[0][:90])
        once7 = ozet(tahta.VERI)
        buf = io.StringIO()
        with contextlib.redirect_stdout(buf):
            tahta.main(["oku", "--kim", "ZZ_B", "--kaynak", "origin"])
        o = buf.getvalue()
        sonuc("M-0004" in o and "YAZILMADI" in o and ozet(tahta.VERI) == once7,
              "S7 oku --kim --kaynak origin: M-0004 görüldü, 'okundu' YAZILMADI, yerel dosya aynı")
        buf = io.StringIO()
        with contextlib.redirect_stdout(buf):
            tahta.main(["oku", "--hepsi"])
        sonuc("M-0004" not in buf.getvalue(),
              "S6b KONTROL: varsayılan (yerel) oku M-0004'ü GÖRMEZ — varsayılan değişmedi")
    finally:
        tahta.VERI = eski_veri
finally:
    shutil.rmtree(TMP, ignore_errors=True)

sonuc(ozet(GERCEK_TAHTA) == once_t and dizin_ozet(GERCEK_BEKCI) == once_b,
      "S9 gerçek tahta.json ve oturumlar/bekci DOKUNULMADI",
      "tahta %s→%s · bekci %s→%s" % (once_t, ozet(GERCEK_TAHTA), once_b, dizin_ozet(GERCEK_BEKCI)))
print("-" * 76)
print("SONUÇ: " + ("temiz" if HATA == 0 else "%d KUSUR" % HATA))
sys.exit(1 if HATA else 0)
