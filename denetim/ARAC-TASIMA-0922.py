# -*- coding: utf-8 -*-
"""
TAŞIMA — "TARİH COĞRAFYA SİTESİ" → C:\\atlas  ·  "ClaudEmre" → C:\\claudemre
======================================================================
22 Eylül 2026 · 1.MURAT (koordinatör) yazdı, EMRE koşturur.

🔴 NİÇİN BU BİR BETİK, NİÇİN CLAUDE KENDİ YAPMIYOR:
   Claude'un çalışma dizini TAM DA TAŞINACAK KLASÖR. Bir dizini kendi
   içinde durarak taşıyamazsın: Windows açık tutamaç yüzünden ya
   reddeder, ya da taşır ve o andan sonra Claude'un bütün komutları
   ARTIK OLMAYAN bir yola gider — yani taşımanın TAM ORTASINDA kör
   kalır. Yarım taşıma, hiç taşımamaktan kötüdür.
   ⇒ Doğru düzen: Claude kapalıyken TEK bir betik her şeyi yapar,
     her adımı ÖLÇER, biri tutmazsa DURUR ve ne yaptığını yazar.

KULLANIM
   py C:\\atlas-tasima\\TASIMA.py --prova     ← hiçbir şeye dokunmaz, ölçer
   py C:\\atlas-tasima\\TASIMA.py --yap       ← taşır

ÖNCE KAPATILACAKLAR (betik kontrol eder, kapalı değilse DURUR):
   · Claude Code'un BÜTÜN pencereleri
   · OneDrive (tepsi simgesi → sağ tık → OneDrive'dan çık)
   · Tarayıcıda açık yerel site sekmesi (dosya kilitleyebilir)
"""
import os, sys, shutil, subprocess, time, io

# 🔴 Windows konsolu cp1254 — Türkçe ve kutu çizgileri UnicodeEncodeError
#    atar ve betik DAHA ÖN SINAVA GELMEDEN ölür. Ölçüldü, ilk denemede oldu.
try:
    sys.stdout.reconfigure(encoding="utf-8", errors="replace")
    sys.stderr.reconfigure(encoding="utf-8", errors="replace")
except Exception:
    pass

ESKI_ATLAS  = r"C:\Users\emrem\OneDrive\Desktop\TARİH COĞRAFYA SİTESİ"
YENI_ATLAS  = r"C:\atlas"
ESKI_CE     = r"C:\Users\emrem\OneDrive\Desktop\ClaudEmre"
YENI_CE     = r"C:\claudemre"
PROJE_ESKI  = r"C:\Users\emrem\.claude\projects\C--Users-emrem-OneDrive-Desktop-TAR-H-CO-RAFYA-S-TES-"
PROJE_YENI  = r"C:\Users\emrem\.claude\projects\C--atlas"
CE_PROJE_ESKI = r"C:\Users\emrem\.claude\projects\C--Users-emrem-OneDrive-Desktop-ClaudEmre"
CE_PROJE_YENI = r"C:\Users\emrem\.claude\projects\C--claudemre"
GUNLUK      = r"C:\atlas-tasima\TASIMA-GUNLUK.txt"

PROVA = "--prova" in sys.argv
YAP   = "--yap"   in sys.argv

_satirlar = []
def yaz(s=""):
    print(s)
    _satirlar.append(s)

def gunluk_kaydet():
    try:
        os.makedirs(os.path.dirname(GUNLUK), exist_ok=True)
        with io.open(GUNLUK, "a", encoding="utf-8") as f:
            f.write("\n===== %s =====\n" % time.strftime("%Y-%m-%d %H:%M:%S"))
            f.write("\n".join(_satirlar) + "\n")
    except Exception as e:
        print("gunluk yazilamadi: %s" % e)

def dur(sebep):
    yaz("")
    yaz("🔴 DURDU — %s" % sebep)
    yaz("   Hiçbir şey taşınmadı ya da taşınan adımlar günlükte yazılı.")
    gunluk_kaydet()
    sys.exit(1)

def git(*a, kok=None):
    p = subprocess.run(["git"] + list(a), cwd=kok, capture_output=True, text=True,
                       encoding="utf-8", errors="replace")
    return p.returncode, (p.stdout or "") + (p.stderr or "")


# ══════════════════════════════════════════════════════════════════
# ① ÖN SINAV — beşinden biri tutmazsa taşıma ERTELENİR
# ══════════════════════════════════════════════════════════════════
def on_sinav():
    yaz("═" * 66)
    yaz("① ÖN SINAV")
    yaz("═" * 66)
    tamam = True

    # a) kaynak duruyor mu, hedef boş mu
    if not os.path.isdir(ESKI_ATLAS):
        yaz("  ✗ kaynak yok: %s" % ESKI_ATLAS); tamam = False
    else:
        yaz("  ✓ kaynak yerinde")
    if os.path.exists(YENI_ATLAS):
        yaz("  ✗ HEDEF ZATEN VAR: %s — üstüne taşımak veri karıştırır" % YENI_ATLAS)
        yaz("    (daha önce yarım bir taşıma olmuş olabilir; elle bak)")
        tamam = False
    else:
        yaz("  ✓ hedef boş: %s" % YENI_ATLAS)

    # b) git temiz mi
    kod, cik = git("status", "--porcelain", kok=ESKI_ATLAS)
    kirli = [s for s in cik.splitlines() if s.strip()]
    if kod != 0:
        yaz("  ✗ git okunamadı: %s" % cik.strip()[:200]); tamam = False
    elif kirli:
        yaz("  ✗ AĞAÇ KİRLİ — %d dosya. Yarım iş TAŞINMAZ:" % len(kirli))
        for s in kirli[:10]:
            yaz("      %s" % s)
        tamam = False
    else:
        yaz("  ✓ git ağacı temiz")

    # c) push edilmiş mi (taşıma öncesi son sigorta)
    kod, cik = git("status", "-sb", kok=ESKI_ATLAS)
    if "ahead" in cik:
        yaz("  ✗ PUSH EDİLMEMİŞ commit var — önce `git push`.")
        yaz("      %s" % cik.splitlines()[0])
        tamam = False
    else:
        yaz("  ✓ uzak depo ile eşit (yedek GitHub'da)")

    # d) koşu kilidi
    kilit = os.path.join(ESKI_ATLAS, ".petek.kilit")
    if os.path.exists(kilit) and os.path.getsize(kilit) > 0:
        yaz("  ✗ KOŞU KİLİDİ DOLU — üretim sürüyor olabilir"); tamam = False
    else:
        yaz("  ✓ koşu kilidi boş")

    # e) klasörü tutan süreç var mı
    tutan = []
    try:
        p = subprocess.run(
            ["powershell", "-NoProfile", "-Command",
             "Get-CimInstance Win32_Process | Where-Object { $_.CommandLine -like '*TAR*CO*RAFYA*' -or "
             "$_.CommandLine -like '*ClaudEmre*' } | ForEach-Object { \"$($_.ProcessId) $($_.Name)\" }"],
            capture_output=True, text=True, encoding="utf-8", errors="replace", timeout=60)
        tutan = [s.strip() for s in (p.stdout or "").splitlines() if s.strip()]
    except Exception as e:
        yaz("  ⚠️ süreç taraması yapılamadı (%s) — 'temiz' SAYILMAZ, elle bak" % e)
    if tutan:
        yaz("  ✗ KLASÖRÜ TUTAN %d SÜREÇ VAR — taşıma başarısız olur:" % len(tutan))
        for s in tutan[:12]:
            yaz("      %s" % s)
        yaz("    ⇒ Claude Code pencerelerini ve tarayıcı sekmelerini kapat.")
        tamam = False
    else:
        yaz("  ✓ klasörü tutan süreç yok")

    # f) OneDrive
    try:
        p = subprocess.run(["powershell", "-NoProfile", "-Command",
                            "(Get-Process OneDrive -ErrorAction SilentlyContinue | Measure-Object).Count"],
                           capture_output=True, text=True, timeout=30)
        n = int((p.stdout or "0").strip() or 0)
    except Exception:
        n = -1
    if n > 0:
        yaz("  ✗ ONEDRIVE AÇIK (%d süreç) — açıkken taşınan klasörü geri yüklemeye kalkar" % n)
        yaz("    ⇒ tepsi simgesi → sağ tık → Yardım ve Ayarlar → OneDrive'dan çık")
        tamam = False
    elif n == 0:
        yaz("  ✓ OneDrive kapalı")
    else:
        yaz("  ⚠️ OneDrive ölçülemedi — 'kapalı' SAYILMAZ")

    return tamam


# ══════════════════════════════════════════════════════════════════
# ② TAŞIMA
# ══════════════════════════════════════════════════════════════════
def tasi(eski, yeni, ad):
    yaz("  %s:  %s" % (ad, eski))
    yaz("  %s→  %s" % (" " * len(ad), yeni))
    if PROVA:
        yaz("     (prova — taşınmadı)")
        return True
    try:
        shutil.move(eski, yeni)
        yaz("     ✓ taşındı")
        return True
    except Exception as e:
        yaz("     ✗ TAŞINAMADI: %s" % e)
        return False


# ══════════════════════════════════════════════════════════════════
# ③ SABİT YOLLARI YENİLE
#    🔴 Yalnız .py dosyaları. `.md` dosyalarına DOKUNULMAZ: oradaki eski
#       yol bir AYAR değil bir KAYITTIR (o gün proje oradaydı). Geçmişi
#       yeniden yazmak belgeyi yalancı yapar.
# ══════════════════════════════════════════════════════════════════
def yollari_yenile(kok):
    yaz("═" * 66)
    yaz("③ SABİT YOLLAR")
    yaz("═" * 66)
    degis = [
        (ESKI_ATLAS, YENI_ATLAS),
        (ESKI_ATLAS.replace("\\", "/"), YENI_ATLAS.replace("\\", "/")),
        ("/c/Users/emrem/OneDrive/Desktop/TARİH COĞRAFYA SİTESİ", "/c/atlas"),
        (ESKI_CE, YENI_CE),
        (ESKI_CE.replace("\\", "/"), YENI_CE.replace("\\", "/")),
        (PROJE_ESKI, PROJE_YENI),
    ]
    sayac, dosyalar = 0, 0
    for dizin, _, adlar in os.walk(kok):
        if ".git" in dizin or "__pycache__" in dizin:
            continue
        for ad in adlar:
            if not ad.endswith(".py"):
                continue
            yol = os.path.join(dizin, ad)
            try:
                with io.open(yol, encoding="utf-8") as f:
                    ham = f.read()
            except Exception:
                continue
            yeni = ham
            for a, b in degis:
                yeni = yeni.replace(a, b)
            if yeni != ham:
                n = sum(ham.count(a) for a, _ in degis)
                sayac += n
                dosyalar += 1
                if not PROVA:
                    with io.open(yol, "w", encoding="utf-8", newline="") as f:
                        f.write(yeni)
    yaz("  %d dosyada %d yol %s" % (dosyalar, sayac,
        "bulundu (prova)" if PROVA else "yenilendi"))
    yaz("  ⓘ `.md` dosyaları KASITLI olarak atlandı — geçmiş kayıt, ayar değil.")
    return dosyalar


# ══════════════════════════════════════════════════════════════════
# ④ DOĞRULAMA
# ══════════════════════════════════════════════════════════════════
def dogrula():
    yaz("═" * 66)
    yaz("④ DOĞRULAMA")
    yaz("═" * 66)
    ok = True

    kod, cik = git("log", "--oneline", "-3", kok=YENI_ATLAS)
    if kod == 0:
        yaz("  ✓ git geçmişi yerinde:")
        for s in cik.strip().splitlines():
            yaz("      %s" % s)
    else:
        yaz("  ✗ git geçmişi okunamadı"); ok = False

    kod, cik = git("worktree", "list", kok=YENI_ATLAS)
    yaz("  worktree:")
    for s in cik.strip().splitlines():
        yaz("      %s" % s)
    if "OneDrive" in cik:
        yaz("  ✗ bir worktree HÂLÂ eski yola bakıyor — `git worktree repair` tekrar"); ok = False
    else:
        yaz("  ✓ worktree'lerin hiçbiri eski yola bakmıyor")

    if os.path.isdir(PROJE_YENI):
        n = len(os.listdir(PROJE_YENI))
        yaz("  ✓ transkript dizini taşındı: %d dosya" % n)
    else:
        yaz("  ✗ transkript dizini yerinde değil — Claude geçmişi göremez"); ok = False

    yaz("")
    yaz("  🔴 ELLE YAPILACAK SON ÜÇ ÖLÇÜM (betik bunları yapamaz):")
    yaz("     1) py arac/denetle.py              → SONUÇ: temiz")
    yaz("     2) py arac/durum_tablosu.py        → sayılar CLAUDE.md §1.5 ile uyuşuyor")
    yaz("     3) Claude'u C:\\atlas'ta aç        → hafıza ve geçmiş görünüyor mu")
    return ok


def main():
    if not (PROVA or YAP):
        print(__doc__)
        print("🔴 Ne yapacağımı söylemedin: --prova ya da --yap")
        sys.exit(2)

    yaz("TAŞIMA %s" % ("PROVASI (hiçbir şeye dokunulmuyor)" if PROVA else "— GERÇEK"))
    yaz("")

    if not on_sinav():
        if PROVA:
            yaz("")
            yaz("⚠️ PROVA: yukarıdaki ✗'ler giderilmeden `--yap` koşturma.")
            gunluk_kaydet()
            sys.exit(1)
        dur("ön sınav geçilmedi")

    yaz("")
    yaz("═" * 66)
    yaz("② TAŞIMA")
    yaz("═" * 66)
    if not tasi(ESKI_ATLAS, YENI_ATLAS, "atlas "):
        dur("atlas taşınamadı")
    if os.path.isdir(ESKI_CE):
        if not tasi(ESKI_CE, YENI_CE, "claudemre"):
            yaz("  ⚠️ ClaudEmre taşınamadı — atlas taşındı, bu ayrı ele alınır")
    else:
        yaz("  ⓘ ClaudEmre eski yolda yok, atlandı")

    # transkript dizinleri
    for e, y, ad in ((PROJE_ESKI, PROJE_YENI, "atlas transkript"),
                     (CE_PROJE_ESKI, CE_PROJE_YENI, "claudemre transkript")):
        if os.path.isdir(e) and not os.path.exists(y):
            if PROVA:
                yaz("  %s: %d dosya taşınacak" % (ad, len(os.listdir(e))))
            else:
                try:
                    shutil.move(e, y)
                    yaz("  ✓ %s taşındı" % ad)
                except Exception as ex:
                    yaz("  ✗ %s taşınamadı: %s" % (ad, ex))
        elif os.path.exists(y):
            yaz("  ⓘ %s hedefi zaten var, atlandı" % ad)

    if not PROVA:
        yaz("")
        yaz("  git worktree repair …")
        kod, cik = git("worktree", "repair", kok=YENI_ATLAS)
        for s in cik.strip().splitlines():
            yaz("      %s" % s)
        yaz("      %s" % ("✓" if kod == 0 else "✗ onarılamadı"))

    yollari_yenile(YENI_ATLAS if not PROVA else ESKI_ATLAS)
    if os.path.isdir(YENI_CE if not PROVA else ESKI_CE):
        yollari_yenile(YENI_CE if not PROVA else ESKI_CE)

    if not PROVA:
        dogrula()

    yaz("")
    yaz("🟢 BİTTİ. Günlük: %s" % GUNLUK)
    gunluk_kaydet()


if __name__ == "__main__":
    main()
