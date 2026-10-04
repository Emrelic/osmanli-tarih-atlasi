# -*- coding: utf-8 -*-
"""SINAV — ARAC-DEVRALMA-DONGU-1004.py · iki yönde + GERÇEK veride.

  ① TEMİZ çizge (A→B→C) SUSUYOR, çıkış 0
  ② A⇄B taklidi ÖTÜYOR ve TAM YOLU basıyor            ← ASIL SINAV
  ③ A→A yakalanıyor · ③b "A'nın teslim günü" (genitif) kendine atıf SAYILMIYOR
  ④ A→B→C→A yakalanıyor (uzun çevrim)
  ⑤ GERÇEK veride Bosna Dubiçası ⇄ Bosna Brod'u BULUNUYOR — aracın KENDİ komut
     satırı, KENDİ yazdırma dalı, cp1254 konsol kodlamasıyla koşturularak
  ⑥ sınav iz BIRAKMADI (git status önce = sonra, geçici dosya silindi)
  ⑦ çözülemeyen atıf SESSİZ DEĞİL: listelenir, çıkış 2 (temiz değil)

🔴 ⑤ niçin alt süreç: taklitle geçen alet sahada çalıştığını söylemez —
`bekci_olc.py` 12/12 geçip ilk gerçek koşusunda çöktü, çünkü sınav yazdırma
dalını hiç çağırmıyordu. Burada GERÇEK komut, GERÇEK `girdi.yukle()`, GERÇEK
yazdırma ve cp1254 (Windows konsolu) birlikte koşar.

Kullanım: py denetim/ARAC-DEVRALMA-DONGU-SINAV-1004.py   (çıkış 0 = hepsi geçti)
"""
import sys, os, io, json, subprocess, tempfile, contextlib, importlib.util

try:
    sys.stdout.reconfigure(encoding="utf-8", errors="replace")
except Exception:
    pass

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
ARAC = os.path.join(KOK, "denetim", "ARAC-DEVRALMA-DONGU-1004.py")
_spec = importlib.util.spec_from_file_location("dongu", ARAC)
D = importlib.util.module_from_spec(_spec)
_spec.loader.exec_module(D)

SONUC = []


def soru(no, ad, kosul, ayrinti=""):
    SONUC.append(kosul)
    print(f"{no} {'GEÇTİ' if kosul else 'KALDI'} — {ad}" + (f"\n     {ayrinti}" if ayrinti and not kosul else ""))


def kayit(ad, kaynak=None, donem_kaynak=None):
    y = dict(ad=ad, s=[], d=[], v=[], isg=[], _kaynak="sinav.js")
    if kaynak:
        y["kaynak"] = kaynak
    if donem_kaynak:
        y["s"] = [dict(f="1500-01-01", t="1600-01-01", d="x", kaynak=donem_kaynak)]
    return y


def kos(kayitlar):
    tampon = io.StringIO()
    with contextlib.redirect_stdout(tampon):
        kod = D.main([], kayitlar=kayitlar)
    return kod, tampon.getvalue()


def git_durum():
    return subprocess.run(["git", "status", "--porcelain", "--untracked-files=all"], cwd=KOK,
                          capture_output=True, text=True, encoding="utf-8").stdout


iz_once = git_durum()

# ① TEMİZ: Akent ← Bkent ← Ckent (Ckent kendi kaynağına dayanıyor) — ağaç, çevrim yok
kod, cikti = kos([
    kayit("Akent", donem_kaynak="gün komşudan: Bkent (aynı sefer · TDV x)"),
    kayit("Bkent", donem_kaynak="gün komşudan: Ckent (aynı sefer · TDV y)"),
    kayit("Ckent", kaynak="TDV ckent maddesi: 1520 fethi"),
])
soru("①", "temiz çizge (A→B→C) SUSUYOR, çıkış 0",
     kod == 0 and "ÇEVRİM: 0" in cikti and "ÇİZGE: 2 yönlü kenar" in cikti, f"kod={kod}\n{cikti}")

# ② A⇄B — KASA'nın Dubiça/Brod biçimiyle: biri "gün komşudan:", öbürü "komşu emsali (…)"
kod, cikti = kos([
    kayit("Akent", donem_kaynak="gün komşudan: Bkent (aynı Sava şeridi · TDV z)"),
    kayit("Bkent", kaynak="Fetih tarihi bulunamadı — komşu emsali (Akent, 1538) kullanıldı, dogrulanmadi."),
])
soru("②", "A⇄B ÖTÜYOR (çıkış 1) ve TAM YOLU basıyor",
     kod == 1 and "Akent → Bkent → Akent" in cikti and "karşılıklı çift (A⇄B) 1" in cikti,
     f"kod={kod}\n{cikti}")

# ③ A→A
kod, cikti = kos([kayit("Akent", donem_kaynak="gün komşudan: Akent (aynı sefer)")])
soru("③", "kendine atıf A→A yakalanıyor ve ayrı sayılıyor",
     kod == 1 and "Akent → Akent" in cikti and "kendine atıf (A→A) 1" in cikti, f"kod={kod}\n{cikti}")

# ③b ters yön: "GÜN KOMŞUDAN: Akent'in teslim günü …" — ad ÖZNE, hedef değil (gerçek veride
# Belgrad'ın isg[0]'ı tam böyle; ilk koşuda Belgrad → Belgrad yanlış pozitifi üretmişti)
kod, cikti = kos([
    kayit("Akent", donem_kaynak="GÜN KOMŞUDAN: Akent'in teslim günü dört maddede de YOK; "
                                "f: komşu Bkent'in TDV'de verilen gününden alındı"),
    kayit("Bkent", kaynak="TDV bkent"),
])
soru("③b", "genitifli öz-ad (\"Akent'in teslim günü\") kendine atıf SAYILMIYOR",
     "kendine atıf (A→A) 0" in cikti and "ÇEVRİM: 0" in cikti, f"kod={kod}\n{cikti}")

# ④ A→B→C→A
kod, cikti = kos([
    kayit("Akent", donem_kaynak="gün komşudan: Bkent"),
    kayit("Bkent", kaynak="dönemler en yakın kayıt «Ckent» (4.3 km) kaydından BİREBİR"),
    kayit("Ckent", kaynak="Zincir Akent emsali, künye penceresine göre"),
])
soru("④", "uzun çevrim A→B→C→A yakalanıyor, tam yol basılıyor",
     kod == 1 and "Akent → Bkent → Ckent → Akent" in cikti and "uzun (≥3) 1" in cikti,
     f"kod={kod}\n{cikti}")

# ⑦ çözülemeyen atıf: sessiz değil, listelenir, hüküm 2
kod, cikti = kos([kayit("Akent", kaynak="Fetih tarihi bulunamadı — komşu emsali (Yokkent) kullanıldı.")])
soru("⑦", "çözülemeyen atıf LİSTELENİYOR ve çıkış 2 (temiz değil)",
     kod == 2 and "ÇÖZÜLEMEDİ-GÜÇLÜ (komşu/emsal/devral tetiği var, kayıt adı bulunamadı): 1" in cikti
     and "Yokkent" in cikti, f"kod={kod}\n{cikti}")

# ⑤ SAHA — gerçek veri, gerçek komut satırı, cp1254 konsolu
fd, gecici = tempfile.mkstemp(suffix=".json", prefix="dongu-sinav-")
os.close(fd)
try:
    ortam = dict(os.environ, PYTHONIOENCODING="cp1254")
    p = subprocess.run([sys.executable, ARAC, "--json", gecici, "--liste", "500"], cwd=KOK,
                       capture_output=True, env=ortam)
    out = p.stdout.decode("utf-8", errors="replace")
    js = json.load(open(gecici, encoding="utf-8")) if os.path.getsize(gecici) else {}
    DUB, BROD = "Bosna Dubiçası (Bosanska Dubica)", "Bosna Brod'u (Bosanski Brod)"
    var = any(set(c["yol"]) == {DUB, BROD} and len(c["yol"]) == 3 for c in js.get("cevrim", []))
    yol_basildi = f"{BROD} → {DUB} → {BROD}" in out or f"{DUB} → {BROD} → {DUB}" in out
    soru("⑤", "GERÇEK veride Dubiça ⇄ Brod BULUNUYOR (komut satırı · yazdırma dalı · cp1254)",
         p.returncode == 1 and var and yol_basildi and "Traceback" not in p.stderr.decode("utf-8", "replace"),
         f"kod={p.returncode} var={var} yol_basildi={yol_basildi}\nSTDERR:{p.stderr.decode('utf-8','replace')[-800:]}")
finally:
    os.remove(gecici)

# ⑥ iz — depo PAYLAŞILIYOR (17+ oturum): ilk koşuda git status farkı sınavdan değil
# başka oturumdan geldi. Hüküm sınavın dokunabileceği yerlere bakar (data/ · arac/ ·
# adında "dongu" geçen yol); öteki farklar adıyla BASILIR, gizlenmez.
iz_sonra = git_durum()
fark = sorted(set(iz_once.splitlines()) ^ set(iz_sonra.splitlines()))
benim = [f for f in fark if f[3:].startswith(("data/", "arac/")) or "dongu" in f.lower()]
soru("⑥", "sınav iz BIRAKMADI (data/ · arac/ · *dongu* değişmedi, geçici dosya silindi)",
     not benim and not os.path.exists(gecici), f"sınavın izi: {benim}")
if fark and not benim:
    print(f"     (bilgi: sınav süresince başka oturumdan {len(fark)} git status farkı: {fark[:5]})")

print(f"\n{sum(SONUC)}/{len(SONUC)} geçti")
sys.exit(0 if all(SONUC) else 1)
