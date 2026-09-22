# -*- coding: utf-8 -*-
"""
TAŞIMA — "TARİH COĞRAFYA SİTESİ" → C:\\atlas  ·  "ClaudEmre" → C:\\claudemre
======================================================================
22 Eylül 2026 · 1.MURAT (koordinatör) yazdı, EMRE koşturur.

🔴 NİÇİN BU BİR BETİK, NİÇİN CLAUDE KENDİ YAPMIYOR:
   Claude'un çalışma dizini TAM DA TAŞINACAK KLASÖR. Bir dizini kendi
   içinde durarak taşıyamazsın: Windows açık tutamaç yüzünden ya
   reddeder, ya taşır ve o andan sonra Claude'un bütün komutları ARTIK
   OLMAYAN bir yola gider — yani taşımanın TAM ORTASINDA kör kalır.
   Yarım taşıma, hiç taşımamaktan kötüdür.

KULLANIM
   C:\\atlas-tasima\\1-PROVA.bat   ya da  py TASIMA.py --prova
   C:\\atlas-tasima\\2-TASI.bat    ya da  py TASIMA.py --yap

══════════════════════════════════════════════════════════════════════
KIRILMA YÜZEYİ — 22 Eylül 2026'da BAŞTAN SONA TARANDI
══════════════════════════════════════════════════════════════════════
Emre: "iyice bak kontrol et, hiçbir şey hatalı eksik fazla ya da kapsama
alanı dışında olmasın." Aşağıdakilerin HEPSİ ölçülerek bulundu; ilk üçü
plan belgesinde YOKTU ve betiğin ilk hâlinde de yoktu.

🟢 KIRILMAZ (ölçüldü, endişeye gerek yok)
   · Site: `index.html` + `js/` göreli yol kullanıyor → 0 gömülü yol
   · Motor çekirdeği (uret_petek · girdi · denetle · renkler) → 0
   · `.bat` düğmeleri: `cd /d "%~dp0"` → kendi yerlerini buluyorlar
   · `.claude/launch.json` → göreli
   · `.git/hooks` → örnek dışında hook yok
   · Ortam değişkeni → yok (`CLAUDEMRE_PROJE` tanımsız)
   · Masaüstü/Başlangıç kısayolu → yok
   · `~/.claude/plugins` · `sessions` · `shell-snapshots` · `file-history`
     · `session-env` → hiçbiri yola göre anahtarlı DEĞİL
   · Yayın: GitHub Pages depodan yayınlıyor, yerel yoldan değil
   · Disk: aynı sürücü → taşıma bir YENİDEN ADLANDIRMADIR, anlıktır
   · OneDrive bulut dosyası: **0** (5878 dosyanın tamamı diskte, 2,03 GB)
     ⇒ indirme riski YOK. Bu ölçülmeseydi taşıma yarıda kalabilirdi.

🔴 KIRILIR — ve hepsi bu betikte
   ① 6 git worktree (plan "4" diyordu; `C:\\atlas-yuruyus` sonradan doğmuş)
   ② 626 transkript + hafıza, 2,5 GB (plan "402" diyordu)
   ③ 152 `.py` + 2 alet `.js` — mutlak `KOK`/`DIZIN` sabiti
   ④ `~/.claude/skills/` 4 SKILL.md — HER OTURUMDA okunup UYGULANIYOR
   ⑤ `~/.claude/settings.json` — İKİ HOOK yolu (acilis.py · toren_kontrol.sh)
   ⑥ `~/.claude/scheduled-tasks/atlas-0340-devam/SKILL.md`
   ⑦ WINDOWS ZAMANLANMIŞ GÖREV ×3 — planda hiç yoktu:
        ATLAS-ZINCIR        [Hazır]   arac\\zincir_baslat.bat
        AtlasKosu           [Kapalı]  çalışma dizini mutlak
        ClaudEmre-gece-kipi [Hazır]   kutu\\gece-kipi.bat (her gece 01:00)
   ⑧ KUTU SİSTEMİ — en sinsisi:
        64 `_proje.txt` + 60+ `PARTI.json` + `kutu/ayar.json`
        `kutu.py:_ayni_proje` projeleri TABAN ADdan karşılaştırıyor.
        Taşındıktan sonra proje taban adı `atlas` olur; `_proje.txt`ler
        hâlâ `…\\TARİH COĞRAFYA SİTESİ` derse TABAN AD TUTMAZ ve kutu
        bütün eski paketleri BAŞKA PROJENİNKİ sayıp GİZLER.
        ⇒ Kutu "çalışmaz" değil, DAHA KÖTÜSÜ: sessizce BOŞ görünür.
        `kutu.py`nin kendi KOK'u `__file__` tabanlı, yani kutunun KODU
        sorunsuz taşınır — kıran şey kod değil, VERİDEKİ bağdır.

⚪ KASITLI OLARAK DOKUNULMAYANLAR — ve gerekçeleri
   · Proje `.md` dosyaları (150): oradaki eski yol bir AYAR değil bir
     KAYITtır (o gün proje oradaydı). Geçmişi yeniden yazmak belgeyi
     yalancı yapar. `~/.claude/skills/*.md` BUNUN DIŞINDA: onlar her
     oturumda okunup UYGULANAN talimattır, yani ayardır.
   · ClaudEmre `.md` (77): aynı gerekçe — doktrin metni, davranış sürmez.
   · `oturumlar/tahta.json`: mesaj kaydı. Geçmiş mesajın içindeki yol,
     o gün yazılmış olanın ta kendisidir.
   · `denetim/*.json`: ölçüm tutanakları. Aynı gerekçe.
   · `oturumlar/defter.json` `dizin` alanı: KENDİ KENDİNİ ONARIR —
     `py arac/defter.py tazele` canlı oturumlardan yeniden ölçer.
   · `settings.local.json`: başka bir projeye ait (BOT takip 20).
   · `_motor_onbellek/` (279 MB): klasörle birlikte taşınır; içeriği
     yeniden üretilebilir, zaten `.gitignore`da.
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
GOREVLER    = ("ATLAS-ZINCIR", "AtlasKosu", "ClaudEmre-gece-kipi")
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
    yaz("   Yapılan adımlar günlükte yazılı: %s" % GUNLUK)
    gunluk_kaydet()
    sys.exit(1)

def git(*a, kok=None):
    p = subprocess.run(["git"] + list(a), cwd=kok, capture_output=True, text=True,
                       encoding="utf-8", errors="replace")
    return p.returncode, (p.stdout or "") + (p.stderr or "")

def ps(komut, sure=90):
    p = subprocess.run(["powershell", "-NoProfile", "-Command", komut],
                       capture_output=True, text=True, encoding="utf-8",
                       errors="replace", timeout=sure)
    return p.returncode, (p.stdout or ""), (p.stderr or "")


def _kacisli(s, buyuk_hex):
    """ASCII olmayan harfleri `\\uXXXX` kaçışına çevirir.

    🔴 NİÇİN GEREKTİ — PROVADA YAKALANDI: iki alet `.js` dosyası yolu
    DÜZ METİNLE değil KAÇIŞLA yazmış:
        C:/Users/.../TAR\\u0130H CO\\u011ERAFYA S\\u0130TES\\u0130
    Harfi harfine arama bunları HİÇ BULAMAZ; prova "0 dosya" dedi ve
    ilk bakışta "demek ki yokmuş" sanılırdı. Oysa vardı — ve taşımadan
    sonra iki alet olmayan bir yola bakıyor olacaktı.
    ⚠️ Ve hex harfleri BÜYÜK de KÜÇÜK de yazılabiliyor: aynı iki dosyanın
    biri `\\u011E`, öteki `\\u011e` kullanmış. İkisi de üretiliyor.
    📌 Ders: "aranan bulunamadı" ile "aranan yok" AYRI ŞEYLERDİR — boş
    küme her öngörüyü doğrular (`CLAUDE.md §11`)."""
    cik = []
    for ch in s:
        if ord(ch) < 128:
            cik.append(ch)
        else:
            h = "%04x" % ord(ch)
            cik.append("\\u" + (h.upper() if buyuk_hex else h))
    return "".join(cik)


def _degisimler():
    """Aranacak→yazılacak çiftleri. Ters eğik çizgi · düz çizgi · JSON'da
    kaçışlı (`\\\\`) · MSYS (`/c/…`) · `$HOME` · `\\uXXXX` kaçışı (iki hex
    yazımıyla) — sekiz ayrı yazım da geçiyor; biri atlanırsa o dosya
    sessizce eski yolda kalır ve bunu kimse fark etmez."""
    ek = []
    for kaynak, hedef in ((ESKI_ATLAS, YENI_ATLAS), (ESKI_CE, YENI_CE)):
        for ayrac_k, ayrac_h in (("\\", "\\"), ("/", "/"), ("\\\\", "\\\\")):
            k = kaynak.replace("\\", ayrac_k)
            h = hedef.replace("\\", ayrac_h)
            for buyuk in (True, False):
                kc = _kacisli(k, buyuk)
                if kc != k:                     # yalnız gerçekten kaçışlıysa
                    ek.append((kc, h))
    return ek + [
        (ESKI_ATLAS, YENI_ATLAS),
        (ESKI_ATLAS.replace("\\", "/"), YENI_ATLAS.replace("\\", "/")),
        (ESKI_ATLAS.replace("\\", "\\\\"), YENI_ATLAS.replace("\\", "\\\\")),
        ("/c/Users/emrem/OneDrive/Desktop/TARİH COĞRAFYA SİTESİ", "/c/atlas"),
        ("$HOME/OneDrive/Desktop/ClaudEmre", "/c/claudemre"),
        ("$HOME/OneDrive/Desktop/TARİH COĞRAFYA SİTESİ", "/c/atlas"),
        (ESKI_CE, YENI_CE),
        (ESKI_CE.replace("\\", "/"), YENI_CE.replace("\\", "/")),
        (ESKI_CE.replace("\\", "\\\\"), YENI_CE.replace("\\", "\\\\")),
        ("/c/Users/emrem/OneDrive/Desktop/ClaudEmre", "/c/claudemre"),
        (PROJE_ESKI, PROJE_YENI),
        (PROJE_ESKI.replace("\\", "/"), PROJE_YENI.replace("\\", "/")),
    ]


# 🔴 TEK İSTİSNA — `proje_takma.json` DEĞİŞTİRİLMEZ, EKLENİR.
#   Bu dosya bir AYAR değil bir YAZIM SÖZLÜĞÜ: "hangi yazım hangi projeyi
#   anlatır" diye 13 tarihî yazımı tutuyor ve kendi notu şunu diyor:
#     "Tanınmayan yazım 'bilinmiyor' döner ve SAYILIR — sessiz eşleme,
#      yanlış eşlemeden beterdir."
#   Eski yol anahtarını YENİSİYLE DEĞİŞTİRSEYDİK, eski yolu taşıyan bütün
#   geçmiş kayıtlar (ders frontmatter'ları, tutanaklar) bir anda
#   "bilinmiyor" olurdu — ve o kayıtları bilerek DEĞİŞTİRMİYORUZ.
#   ⇒ Doğrusu: eski anahtar KALIR, yenisi YANINA eklenir. Sözlük zaten
#     çok yazımlı olmak için var; bir yazım daha doğdu, o kadar.
_TAKMA_HARIC = "proje_takma.json"


def takma_ad_ekle(ce_kok):
    yaz("─" * 66)
    yaz("  proje_takma.json — YENİ YAZIM EKLENİYOR (eski SİLİNMİYOR)")
    yol = os.path.join(ce_kok, "kutu", _TAKMA_HARIC)
    if not os.path.isfile(yol):
        yaz("     ⓘ dosya yok, atlandı")
        return
    import json
    try:
        with io.open(yol, encoding="utf-8") as f:
            d = json.load(f)
    except Exception as e:
        yaz("     ✗ okunamadı: %s" % e)
        return
    takma = d.get("takma") or {}
    hedef = takma.get(ESKI_ATLAS) or ["Osmanlı Tarih Atlası"]
    yeni_anahtarlar = [YENI_ATLAS, YENI_ATLAS.replace("\\", "/"), "atlas"]
    eklenen = [k for k in yeni_anahtarlar if k not in takma]
    for k in eklenen:
        takma[k] = list(hedef)
    ce_hedef = takma.get(ESKI_CE) or ["ClaudEmre"]
    for k in (YENI_CE, YENI_CE.replace("\\", "/")):
        if k not in takma:
            takma[k] = list(ce_hedef)
            eklenen.append(k)
    if not eklenen:
        yaz("     ✓ yeni yazımlar zaten kayıtlı")
        return
    yaz("     eklenen: %s" % " · ".join(eklenen))
    yaz("     korunan: %s (ve öteki 12 tarihî yazım)" % ESKI_ATLAS)
    if PROVA:
        yaz("     (prova — yazılmadı)")
        return
    d["takma"] = takma
    try:
        shutil.copy2(yol, yol + ".tasima-yedek")
        with io.open(yol, "w", encoding="utf-8", newline="\n") as f:
            f.write(json.dumps(d, ensure_ascii=False, indent=1))
        yaz("     ✓ yazıldı")
    except Exception as e:
        yaz("     ✗ yazılamadı: %s" % e)


def _yaz_dosya(yol, degis, yedek=False):
    """Bir dosyadaki eski yolları yeniler. (bulunan_sayi, yazildi_mi) döner."""
    if os.path.basename(yol) == _TAKMA_HARIC:
        return 0, False          # yukarıdaki gerekçe — ayrı ele alınıyor
    try:
        with io.open(yol, encoding="utf-8") as f:
            ham = f.read()
    except Exception:
        return 0, False
    n = sum(ham.count(a) for a, _ in degis)
    if not n:
        return 0, False
    if PROVA:
        return n, False
    yeni = ham
    for a, b in degis:
        yeni = yeni.replace(a, b)
    if yedek:
        try:
            shutil.copy2(yol, yol + ".tasima-yedek")
        except Exception:
            return n, False
    try:
        with io.open(yol, "w", encoding="utf-8", newline="") as f:
            f.write(yeni)
    except Exception:
        return n, False
    return n, True


# ══════════════════════════════════════════════════════════════════
# KLASÖRÜ TUTAN SÜREÇLER — ve betiğin KENDİNİ saymaması
#
# 🔴🔴 BU BÖLÜM BİR ÖLÇÜM HATASI YÜZÜNDEN YENİDEN YAZILDI, ve hatanın
#   sonucu şuydu: ÖN SINAV HİÇBİR ZAMAN YEŞİLE DÖNEMEZDİ.
#   Eski hâli süreçleri şöyle arıyordu:
#       CommandLine -like '*TAR*CO*RAFYA*'
#   Ama bu deseni ARAYAN PowerShell'in KENDİ komut satırı da deseni
#   İÇERİYOR. Yani tarayıcı kendini yakalıyordu. Emre bütün Claude
#   pencerelerini kapattı, süreç sayısı 18'den 3'e düştü ve içlerinden
#   biri `7620 powershell.exe` — betiğin kendi tarayıcısıydı.
#   ⇒ Kullanıcı ne yaparsa yapsın 1'in altına inemezdi. Taşıma,
#     kendi ölçüm aletinin kusuru yüzünden HİÇ YAPILAMAZDI.
#   📌 Ders ailesi: "denetim var ≠ o soruyu soruyor". Alet çalışıyordu,
#     doğru şeyi ölçmüyordu — ve yanlış tarafa hata veriyordu, yani
#     sessiz değil GÜRÜLTÜLÜ yanılıyordu. Şanslıyız: sessiz olsaydı
#     taşıma açık dosyaların üstünde koşardı.
#
# ÇARE — iki katmanlı, çünkü tek katman yetmiyor:
#   ① KENDİ SOY AĞACINI DIŞLA: kendi PID'i ve bütün ATALARI (cmd.exe →
#     powershell.exe → py.exe zinciri) listeden çıkarılır.
#   ② DESEN TAŞIYAN TARAYICIYI DIŞLA: komut satırında `Win32_Process`
#     ya da `atlas-tasima` geçen her şey ölçüm aracının kendisidir.
# ══════════════════════════════════════════════════════════════════
_PS_SUREC = r'''$ErrorActionPreference='SilentlyContinue'
Get-CimInstance Win32_Process | ForEach-Object {
  $c = $_.CommandLine
  if ($c) { "{0}`t{1}`t{2}`t{3}" -f $_.ProcessId, $_.ParentProcessId, $_.Name, ($c -replace "`t"," ") }
}
'''


def _sinifla(ad, cmd):
    """Bir süreci TANI ve ne yapılacağını söyle."""
    c = (cmd or "").lower()
    if "kutu.py" in c or "emeklilik.py" in c or "ekran.py" in c:
        return ("ClaudEmre kutu/nöbet programı",
                "bunu SEN kapatma — `2-TASI.bat` kendisi durduracak")
    if "bash.exe" in ad.lower() or "shell-snapshots" in c:
        return ("Claude Code'un kabuğu",
                "Claude Code'un BÜTÜN pencerelerini kapat")
    if "sunucu.py" in c:
        return ("yerel site sunucusu",
                "site sunucusunu durdur (pencereyi kapat)")
    if "tahta_bekci" in c:
        return ("tahta bekçisi",
                "Claude Code'un BÜTÜN pencerelerini kapat")
    if any(t in ad.lower() for t in ("chrome", "msedge", "firefox")):
        return ("tarayıcı", "yerel siteyi açan tarayıcı sekmesini kapat")
    if "uret_petek" in c or "kos_ve_yayinla" in c:
        return ("🔴 KOŞU SÜRÜYOR", "KOŞU BİTENE KADAR TAŞIMA YAPMA")
    return ("(tanınmadı — elle bak)", "bu süreci elle kapat: PID yukarıda")


def _tutan_surecler(yaz):
    """(pid, ad, cmd, sinif, care) listesi · ölçülemezse None."""
    ps1 = os.path.join(os.path.dirname(GUNLUK), "_surec.ps1")
    try:
        os.makedirs(os.path.dirname(ps1), exist_ok=True)
        with io.open(ps1, "w", encoding="utf-8-sig", newline="\r\n") as f:
            f.write(_PS_SUREC)
        p = subprocess.run(
            ["powershell", "-NoProfile", "-ExecutionPolicy", "Bypass", "-File", ps1],
            capture_output=True, text=True, encoding="utf-8",
            errors="replace", timeout=180)
        ham = p.stdout or ""
    except Exception as e:
        yaz("  ✗ SÜREÇ TARAMASI YAPILAMADI (%s) — 'temiz' SAYILMAZ" % e)
        return None
    finally:
        try:
            os.remove(ps1)
        except Exception:
            pass

    kayit, ebeveyn = {}, {}
    for s in ham.splitlines():
        d = s.split("\t")
        if len(d) < 4:
            continue
        try:
            pid, ppid = int(d[0]), int(d[1])
        except ValueError:
            continue
        kayit[pid] = (d[2], d[3])
        ebeveyn[pid] = ppid

    # ① kendi soy ağacı — kendim ve bütün atalarım
    kendi = set()
    p = os.getpid()
    for _ in range(12):                 # döngüye karşı tavan
        if p in kendi or p not in ebeveyn:
            kendi.add(p)
            break
        kendi.add(p)
        p = ebeveyn[p]

    tutan = []
    for pid, (ad, cmd) in kayit.items():
        c = cmd or ""
        if pid in kendi:
            continue
        # ② ölçüm aracının kendisi
        if "Win32_Process" in c or "atlas-tasima" in c:
            continue
        if not (("TAR" in c and "RAFYA" in c) or "ClaudEmre" in c
                or "claudemre" in c.lower()):
            continue
        sinif, care = _sinifla(ad, c)
        tutan.append((pid, ad, c, sinif, care))
    return sorted(tutan)


# ══════════════════════════════════════════════════════════════════
# ⓪ CLAUDEMRE KUTUSUNU DURDUR — betik kendi yapıyor, kullanıcı avlamıyor
#
# 🔴 NİÇİN: `kutu.py --otomatik` ve `emeklilik.py` Claude her açıldığında
#   AÇILIŞ ÇENGELİ tarafından yeniden başlatılıyor ve arka planda
#   `pythonw.exe` olarak duruyorlar — görev çubuğunda pencere yok.
#   Kullanıcı Claude'u kapatsa da bunlar KALIR ve klasörü tutmaya devam
#   eder. "Kutu penceresini kapat" demek, olmayan bir pencereyi
#   kapattırmaya çalışmaktır.
# ⚠️ Ve bu bir kapsam aşımı DEĞİL: taşıma planının hazırlık maddesi zaten
#   "Kutu durdurulsun" diyor, ClaudEmre de bu taşımada taşınan iki
#   klasörden biri. Kendi taşıdığımız programı durdurmak, taşımanın
#   parçası.
# 📌 PROVADA DURDURMAZ, yalnız söyler — prova hiçbir şeye dokunmaz sözü
#   bir programı öldürmeyi de kapsar.
# ══════════════════════════════════════════════════════════════════
def kutuyu_durdur():
    ps1 = os.path.join(os.path.dirname(GUNLUK), "_kutu.ps1")
    betik = ("$ErrorActionPreference='SilentlyContinue'\r\n"
             "Get-CimInstance Win32_Process | Where-Object {\r\n"
             "  $_.CommandLine -match 'kutu\\.py|emeklilik\\.py|ekran\\.py'\r\n"
             "} | ForEach-Object {\r\n"
             "  \"$($_.ProcessId)`t$($_.Name)\"\r\n"
             "  if ($env:TASIMA_KIP -eq 'yap') { Stop-Process -Id $_.ProcessId -Force }\r\n"
             "}\r\n")
    try:
        os.makedirs(os.path.dirname(ps1), exist_ok=True)
        with io.open(ps1, "w", encoding="utf-8-sig", newline="") as f:
            f.write(betik)
        ort = dict(os.environ)
        ort["TASIMA_KIP"] = "prova" if PROVA else "yap"
        p = subprocess.run(
            ["powershell", "-NoProfile", "-ExecutionPolicy", "Bypass", "-File", ps1],
            capture_output=True, text=True, encoding="utf-8", errors="replace",
            timeout=90, env=ort)
        satir = [s.strip() for s in (p.stdout or "").splitlines() if s.strip()]
    except Exception as e:
        yaz("⓪ ClaudEmre kutusu durdurulamadı (%s) — elle kapat" % e)
        return
    finally:
        try:
            os.remove(ps1)
        except Exception:
            pass
    if not satir:
        return
    yaz("═" * 66)
    yaz("⓪ CLAUDEMRE KUTUSU")
    yaz("═" * 66)
    for s in satir:
        d = s.split("\t")
        yaz("  %-6s %-14s %s" % (d[0], d[1] if len(d) > 1 else "",
                                 "(prova — durdurulmadı)" if PROVA else "durduruldu ✓"))
    if PROVA:
        yaz("  ⓘ Bunlar arka planda çalışır, PENCERELERİ YOKTUR — Claude'u")
        yaz("    kapatmak onları kapatmaz. `2-TASI.bat` kendisi durduracak.")
    else:
        yaz("  ✓ kutu durduruldu — taşımadan sonra yeni yolunda yeniden açılır")
    yaz("")


# ══════════════════════════════════════════════════════════════════
# ① ÖN SINAV
# ══════════════════════════════════════════════════════════════════
def on_sinav():
    """
    🔴 SONUNDA TEK SATIRLIK HÜKÜM BASAR — ve bu sonradan eklendi.
    İlk hâlinde yalnız ✓/✗ satırları vardı; Emre provayı koşturdu ve
    *"ne oldu şimdi, 6 tane yeşil var mı yok mu anlayamadım"* dedi.
    HAKLIYDI: sekiz satırı gözle sayıp hüküm çıkarmak KULLANICININ İŞİ
    DEĞİL. Bir ölçüm aleti ölçtüğünü basar; HÜKMÜ de o verir.
    📌 Ve sayı sabit değil (bulut-dosyası sınavı sonradan eklendi, 6 → 7)
    — yani "altı yeşil say" talimatı ZATEN BAYATLAYACAKTI.
    """
    # ⚠️ Sayaç sarmalayıcısı BİRİNCİ satırda tanımlanmalı — ilk denemede
    #    fonksiyonun ortasında tanımlandı ve Python bütün `yaz`
    #    çağrılarını yerel saydı: `UnboundLocalError`, betik daha ilk
    #    satırda öldü. Gölgeleme, tanımlandığı yerden değil FONKSİYONUN
    #    BAŞINDAN itibaren geçerlidir.
    _sayac = {"ok": 0, "hata": 0}
    _asil_yaz = globals()["yaz"]

    def yaz(s=""):                      # noqa: F811 — kasıtlı gölgeleme
        t = s.strip()
        if t.startswith("✓"):
            _sayac["ok"] += 1
        elif t.startswith("✗"):
            _sayac["hata"] += 1
        _asil_yaz(s)

    yaz("═" * 66)
    yaz("① ÖN SINAV")
    yaz("═" * 66)
    tamam = True

    if not os.path.isdir(ESKI_ATLAS):
        yaz("  ✗ kaynak yok: %s" % ESKI_ATLAS); tamam = False
    else:
        yaz("  ✓ kaynak yerinde")
    if os.path.exists(YENI_ATLAS):
        yaz("  ✗ HEDEF ZATEN VAR: %s — üstüne taşımak veri karıştırır" % YENI_ATLAS)
        yaz("    (yarım bir taşıma olmuş olabilir; elle bak)")
        tamam = False
    else:
        yaz("  ✓ hedef boş: %s" % YENI_ATLAS)

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

    kod, cik = git("status", "-sb", kok=ESKI_ATLAS)
    if "ahead" in cik:
        yaz("  ✗ PUSH EDİLMEMİŞ commit var — önce `git push`")
        yaz("      %s" % cik.splitlines()[0]); tamam = False
    else:
        yaz("  ✓ uzak depo ile eşit (yedek GitHub'da)")

    kilit = os.path.join(ESKI_ATLAS, ".petek.kilit")
    if os.path.exists(kilit) and os.path.getsize(kilit) > 0:
        yaz("  ✗ KOŞU KİLİDİ DOLU — üretim sürüyor olabilir"); tamam = False
    else:
        yaz("  ✓ koşu kilidi boş")

    # 🔴 Bulut dosyası sınavı — OneDrive dosyaları "yalnız bulutta"
    #    (placeholder) olabilir; o hâlde taşıma indirmeye kalkar ya da
    #    yarıda kalır. Ölçülmezse "temiz" SAYILMAZ.
    try:
        kod, out, _ = ps(
            "$d = Get-ChildItem -LiteralPath '%s' -Recurse -File -Force "
            "-ErrorAction SilentlyContinue; "
            "($d | Where-Object { $_.Attributes -band 0x400000 }).Count" % ESKI_ATLAS, 300)
        nb = int((out or "0").strip().splitlines()[-1] or 0)
        if nb:
            yaz("  ✗ %d DOSYA YALNIZ BULUTTA — önce OneDrive'da "
                "'Bu cihazda her zaman tut' de" % nb); tamam = False
        else:
            yaz("  ✓ bulut-dosyası yok (hepsi diskte)")
    except Exception as e:
        yaz("  ⚠️ bulut dosyası ölçülemedi (%s) — 'temiz' SAYILMAZ" % e)

    tutan = _tutan_surecler(yaz)
    if tutan is None:
        # ⚠️ ÖLÇÜLEMEDİ ≠ TEMİZ. Tarama koşmadıysa "süreç yok" diyemeyiz;
        #    taşıma açık dosyaların üstünde koşarsa yarıda kalır.
        tamam = False
    # 🔴 KUTU SÜREÇLERİ ENGEL SAYILMAZ — ⓪ adımı onları `--yap`ta kendisi
    #   durduruyor. Sayılsaydı prova ASLA yeşile dönmezdi: prova hiçbir
    #   şeye dokunmuyor, dolayısıyla kutuyu da durdurmuyor; ama ön sınav
    #   onu engel sayınca kullanıcı "HER ŞEY HAZIR" satırını HİÇ
    #   göremezdi. Bir kapının, kendi çözdüğü şeyi engel sayması
    #   kilitlenmedir.
    #   ⚠️ Yine de GÖRÜNÜYOR — gizlemek başka, engel saymamak başka.
    kutu = [t for t in (tutan or []) if "kutu" in t[3].lower()]
    if tutan:
        tutan = [t for t in tutan if t not in kutu]
    if kutu and not tutan:
        yaz("  ✓ klasörü tutan ENGEL yok")
        yaz("      (%d kutu süreci var ama ⓪ adımı onları kendisi durduracak)"
            % len(kutu))
    elif tutan:
        if kutu:
            yaz("  ⓘ %d kutu süreci ⓪ adımında durdurulacak — engel SAYILMADI"
                % len(kutu))
        yaz("  ✗ KLASÖRÜ TUTAN %d SÜREÇ VAR — taşıma başarısız olur:" % len(tutan))
        # 🔴 HER SÜRECİN NE OLDUĞU VE NE YAPILACAĞI YAZILIYOR.
        #    Eski hâli yalnız "2532 bash.exe" basıyordu — kullanıcı için
        #    bu bir bilgi değil bir bilmece. Neyi kapatacağını bilmeden
        #    listeye bakmak, listeye hiç bakmamakla aynıdır.
        ne_yap = set()
        for pid, ad, cmd, sinif, care in tutan[:14]:
            yaz("      %-6s %-14s %s" % (pid, ad, sinif))
            ne_yap.add(care)
        if len(tutan) > 14:
            yaz("      … %d süreç daha" % (len(tutan) - 14))
        yaz("")
        yaz("    ⇒ YAPILACAK:")
        for c in sorted(ne_yap):
            yaz("        · %s" % c)
        tamam = False
    else:
        yaz("  ✓ klasörü tutan süreç yok")

    try:
        kod, out, _ = ps("(Get-Process OneDrive -ErrorAction SilentlyContinue "
                         "| Measure-Object).Count", 30)
        n = int((out or "0").strip() or 0)
    except Exception:
        n = -1
    if n > 0:
        yaz("  ✗ ONEDRIVE AÇIK (%d süreç) — taşınan klasörü geri yüklemeye kalkar" % n)
        yaz("    ⇒ tepsi simgesi → sağ tık → Yardım ve Ayarlar → OneDrive'dan çık")
        tamam = False
    elif n == 0:
        yaz("  ✓ OneDrive kapalı")
    else:
        yaz("  ⚠️ OneDrive ölçülemedi — 'kapalı' SAYILMAZ")

    toplam = _sayac["ok"] + _sayac["hata"]
    _asil_yaz("")
    _asil_yaz("  " + "─" * 62)
    if tamam:
        _asil_yaz("  🟢🟢  ÖN SINAV GEÇİLDİ — %d/%d yeşil, kırmızı YOK"
                  % (_sayac["ok"], toplam))
        _asil_yaz("        TAŞIMAYA HAZIR.")
    else:
        _asil_yaz("  🔴🔴  ÖN SINAV GEÇİLMEDİ — %d yeşil, %d KIRMIZI"
                  % (_sayac["ok"], _sayac["hata"]))
        _asil_yaz("        HENÜZ TAŞIMA YAPILAMAZ. Yukarıdaki ✗ satır(lar)ı")
        _asil_yaz("        giderilip PROVA YENİDEN koşturulmalı.")
    _asil_yaz("  " + "─" * 62)
    return tamam


# ══════════════════════════════════════════════════════════════════
# ② TAŞIMA
# ══════════════════════════════════════════════════════════════════
def tasi(eski, yeni, ad):
    yaz("  %-10s %s" % (ad + ":", eski))
    yaz("  %-10s %s" % ("→", yeni))
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
# ③ SABİT YOLLAR — proje kökleri
#    Tür listesi KÖKE GÖRE farklı; gerekçesi dosya başındaki
#    "KASITLI OLARAK DOKUNULMAYANLAR" bölümünde.
# ══════════════════════════════════════════════════════════════════
def yollari_yenile(kok, turler, ad, sadece_dizinler=None):
    yaz("─" * 66)
    yaz("  %s  (%s)" % (ad, " ".join(turler)))
    degis = _degisimler()
    sayac = dosyalar = yazilan = 0
    for dizin, altlar, adlar in os.walk(kok):
        altlar[:] = [a for a in altlar if a not in (".git", "__pycache__",
                                                    "_motor_onbellek", "node_modules")]
        if sadece_dizinler is not None:
            bag = os.path.relpath(dizin, kok).replace("\\", "/").split("/")[0]
            if bag not in sadece_dizinler and bag != ".":
                continue
        for a in adlar:
            if not a.endswith(turler):
                continue
            yol = os.path.join(dizin, a)
            if sadece_dizinler is not None and os.path.dirname(yol) == kok:
                continue          # kökteki dosyalar bu kümede değil
            n, w = _yaz_dosya(yol, degis)
            if n:
                sayac += n
                dosyalar += 1
                yazilan += 1 if w else 0
    yaz("     %d dosyada %d yol%s" % (dosyalar, sayac,
        " (prova)" if PROVA else " · %d dosya yazıldı" % yazilan))
    return dosyalar


# ══════════════════════════════════════════════════════════════════
# ③b CLAUDE AYARLARI VE SKILL'LER — iki proje kökünün DIŞINDA
# ══════════════════════════════════════════════════════════════════
def ayarlari_yenile():
    yaz("═" * 66)
    yaz("③b CLAUDE AYARLARI VE SKILL'LER (proje köklerinin DIŞI)")
    yaz("═" * 66)
    yaz("  🔴 Buradaki `.md` bir KAYIT değil bir AYARdır: skill her oturumda")
    yaz("     okunup UYGULANIYOR. Atlanırsa taşıma 'başarılı' görünür ama")
    yaz("     ClaudEmre sessizce çalışmaz hâle gelir.")
    ev = os.path.expanduser("~")
    hedefler = []
    for alt in ("skills", "scheduled-tasks"):
        for dizin, _, adlar in os.walk(os.path.join(ev, ".claude", alt)):
            for a in adlar:
                if a.endswith((".md", ".py", ".sh", ".json", ".bat")):
                    hedefler.append(os.path.join(dizin, a))
    hedefler.append(os.path.join(ev, ".claude", "settings.json"))

    degis = _degisimler()
    sayac = dosyalar = 0
    for yol in hedefler:
        if not os.path.isfile(yol):
            continue
        n, w = _yaz_dosya(yol, degis, yedek=True)
        if n:
            dosyalar += 1
            sayac += n
            yaz("     %-52s %d yol%s" % (
                os.path.join(os.path.basename(os.path.dirname(yol)),
                             os.path.basename(yol)), n,
                "" if PROVA else (" ✓" if w else " ✗ YAZILAMADI")))
    yaz("  %d dosyada %d yol %s" % (dosyalar, sayac,
        "bulundu (prova)" if PROVA else "yenilendi · yanına .tasima-yedek bırakıldı"))
    if not dosyalar:
        yaz("  ⓘ eski yol taşıyan ayar/skill dosyası YOK")
    return dosyalar


# ══════════════════════════════════════════════════════════════════
# ③c WINDOWS ZAMANLANMIŞ GÖREVLER — planda HİÇ YOKTU
#
# 🔴 Üçü de MUTLAK yola bağlı. `ClaudEmre-gece-kipi` her gece 01:00'da
#    koşuyor; taşıdıktan sonra sessizce başarısız olur ve gece kipi bir
#    daha HİÇ açılmaz — kimse fark etmez, çünkü başarısız bir görev
#    hiçbir şey basmaz.
# 📌 Yöntem: XML'e çıkar → metni değiştir → geri kur (/F ile üstüne).
#    `/Change` çalışma dizinini ve eylem yolunu güvenilir değiştirmiyor.
#    ⚠️ XML `<Enabled>` alanını taşıdığı için `AtlasKosu`nun KAPALI hâli
#    korunur — açık hâle getirmiyoruz, o Emre'nin kararı.
# ══════════════════════════════════════════════════════════════════
_PS1 = r'''param([string]$Eski,[string]$Yeni,[string]$EskiCE,[string]$YeniCE,[string]$Kip)
$ErrorActionPreference = 'Continue'
$adlar = @('ATLAS-ZINCIR','AtlasKosu','ClaudEmre-gece-kipi')
foreach ($ad in $adlar) {
  $x = $null
  try { $x = Export-ScheduledTask -TaskName $ad -ErrorAction Stop } catch { }
  if (-not $x) { Write-Output ("YOK|" + $ad + "|0"); continue }
  $y = $x.Replace($Eski, $Yeni).Replace($EskiCE, $YeniCE)
  $y = $y.Replace($Eski.Replace('\','/'), $Yeni.Replace('\','/'))
  $y = $y.Replace($EskiCE.Replace('\','/'), $YeniCE.Replace('\','/'))
  if ($y -eq $x) { Write-Output ("TEMIZ|" + $ad + "|0"); continue }
  if ($Kip -ne 'yap') { Write-Output ("BULDU|" + $ad + "|1"); continue }
  try {
    Register-ScheduledTask -TaskName $ad -Xml $y -Force -ErrorAction Stop | Out-Null
    Write-Output ("TAMAM|" + $ad + "|1")
  } catch { Write-Output ("HATA|" + $ad + "|" + $_.Exception.Message) }
}
'''


def gorevleri_yenile():
    """
    🔴 BU BÖLÜM PROVADA KUSURLU ÇIKTI VE YENİDEN YAZILDI — vakası kayda değer:
    İlk hâli `schtasks /Query /XML` çıktısını Python'a taşıyıp orada metin
    değiştiriyordu. Prova "ATLAS-ZINCIR ✓ eski yol taşımıyor" dedi. AMA
    TAŞIYORDU — XML'i ayrıca okuyunca görüldü:
        <Command>C:\\Users\\emrem\\OneDrive\\Desktop\\TARİH COĞRAFYA SİTESİ\\arac\\zincir_baslat.bat</Command>
    Sebep: konsol kod sayfası `İ`/`Ğ` harflerini bozuyor, harfi harfine
    arama tutmuyor. Yani betik ÜÇ GÖREVİN İKİSİNİ sessizce atlayacaktı ve
    "temiz" diye RAPOR EDECEKTİ — yanlış ölçümün en kötü cinsi.
    ⇒ Çare: metin PowerShell'in Unicode dünyasından HİÇ ÇIKMIYOR.
      `Export-ScheduledTask` → değiştir → `Register-ScheduledTask`, hepsi
      orada. Python yalnız eski/yeni yolu ARGÜMAN olarak veriyor (kabuk
      tırnaklaması yok: `subprocess` argv'yi doğrudan geçiriyor) ve tek
      satırlık `DURUM|AD|SAYI` sonucunu okuyor.
    ⚠️ `Register-ScheduledTask -Xml` görevin `<Enabled>` alanını taşır,
      yani `AtlasKosu`nun KAPALI hâli korunur — açmak Emre'nin kararı.
    """
    yaz("═" * 66)
    yaz("③c WINDOWS ZAMANLANMIŞ GÖREVLER")
    yaz("═" * 66)
    ps1 = os.path.join(os.path.dirname(GUNLUK), "_gorev.ps1")
    os.makedirs(os.path.dirname(ps1), exist_ok=True)
    try:
        with io.open(ps1, "w", encoding="utf-8-sig", newline="\r\n") as f:
            f.write(_PS1)
    except Exception as e:
        yaz("  ✗ yardımcı betik yazılamadı: %s" % e)
        return 0
    try:
        p = subprocess.run(
            ["powershell", "-NoProfile", "-ExecutionPolicy", "Bypass", "-File", ps1,
             "-Eski", ESKI_ATLAS, "-Yeni", YENI_ATLAS,
             "-EskiCE", ESKI_CE, "-YeniCE", YENI_CE,
             "-Kip", ("prova" if PROVA else "yap")],
            capture_output=True, text=True, encoding="utf-8", errors="replace",
            timeout=180)
        satirlar = [s.strip() for s in (p.stdout or "").splitlines() if "|" in s]
    except Exception as e:
        yaz("  ✗ görevler işlenemedi: %s" % e)
        return 0

    islenen = 0
    for s in satirlar:
        d = s.split("|")
        durum, ad, bilgi = (d + ["", "", ""])[:3]
        if durum == "YOK":
            yaz("  ⓘ %-22s görev YOK (atlandı)" % ad)
        elif durum == "TEMIZ":
            yaz("  ✓ %-22s eski yol taşımıyor" % ad)
        elif durum == "BULDU":
            yaz("  · %-22s eski yol VAR — `--yap`ta yenilenecek" % ad); islenen += 1
        elif durum == "TAMAM":
            yaz("  ✓ %-22s yenilendi ve görev yeniden kuruldu" % ad); islenen += 1
        else:
            yaz("  ✗ %-22s KURULAMADI: %s" % (ad, bilgi[:150]))
            yaz("     ⇒ Yönetici olarak koştur ya da Görev Zamanlayıcı'da")
            yaz("       yolu elle düzelt (Eylem sekmesi + Başlangıç dizini).")
    if not satirlar:
        yaz("  ⚠️ görev sorgusu hiçbir şey döndürmedi — 'temiz' SAYILMAZ,")
        yaz("     Görev Zamanlayıcı'yı elle aç ve üç görevi gözden geçir.")
    try:
        os.remove(ps1)
    except Exception:
        pass
    return islenen


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
    yaz("  worktree (%d):" % len([s for s in cik.splitlines() if s.strip()]))
    for s in cik.strip().splitlines():
        yaz("      %s" % s)
    if "OneDrive" in cik:
        yaz("  ✗ bir worktree HÂLÂ eski yola bakıyor"); ok = False
    else:
        yaz("  ✓ hiçbir worktree eski yola bakmıyor")

    if os.path.isdir(PROJE_YENI):
        yaz("  ✓ transkript dizini taşındı: %d dosya" % len(os.listdir(PROJE_YENI)))
    else:
        yaz("  ✗ transkript dizini yerinde değil — Claude geçmişi göremez"); ok = False

    # kutu bağı — en sinsi kırılma
    pr = os.path.join(YENI_CE, "kutu", "giden")
    if os.path.isdir(pr):
        eski_kalan = 0
        for dizin, _, adlar in os.walk(pr):
            for a in adlar:
                if a == "_proje.txt":
                    try:
                        with io.open(os.path.join(dizin, a), encoding="utf-8") as f:
                            if "OneDrive" in f.read():
                                eski_kalan += 1
                    except Exception:
                        pass
        if eski_kalan:
            yaz("  ✗ %d `_proje.txt` HÂLÂ eski yolu gösteriyor — kutu eski "
                "paketleri GİZLER" % eski_kalan); ok = False
        else:
            yaz("  ✓ kutu proje bağları yenilendi (taban ad artık `atlas`)")

    yaz("")
    yaz("  🔴 ELLE YAPILACAK SON DÖRT ÖLÇÜM (betik bunları yapamaz):")
    yaz("     1) cd C:\\atlas && py arac/denetle.py     → SONUÇ: temiz")
    yaz("     2) py arac/durum_tablosu.py               → §1.5 ile uyuşuyor")
    yaz("     3) Claude'u C:\\atlas'ta aç               → hafıza ve geçmiş var mı")
    yaz("     4) py C:/claudemre/kutu/ozet.py \"atlas\"   → paketler görünüyor mu")
    return ok


# ══════════════════════════════════════════════════════════════════
# ⑤ KALINTI TARAMASI — "kapsama dışında bir şey kaldı mı?"
#
# 🔴 Emre'nin şartı: "hiçbir şey hatalı eksik fazla ya da kapsama alanı
#    dışında olmasın." Bir betiğin NE YAPTIĞINI saymak yetmez; NE
#    YAPMADIĞINI da saymak gerekir. Bu bölüm tam tersinden bakar:
#    bütün ağacı tarar, eski yolu taşıyan HER dosyayı bulur ve betiğin
#    kuralları onu kapsıyor mu diye sorar.
#      · KAPSANIYOR    → betik yenileyecek
#      · BİLEREK DIŞTA → kayıt/tutanak, dokunulmayacak (gerekçesi var)
#      · 🔴 AÇIKTA     → ne kapsanıyor ne gerekçesi var ⇒ İNCELENMELİ
#    Üçüncü kova BOŞ değilse taşımaya BAŞLAMAYIZ.
# 📌 Boş küme her öngörüyü doğrular — bu yüzden ikinci kovanın da
#    sayısı basılıyor: "0 açıkta" ancak "N bilerek dışta" ile birlikte
#    anlamlıdır.
# ══════════════════════════════════════════════════════════════════
_BILEREK_DISTA = (
    (".md",   "belge/kayıt — o gün proje oradaydı, geçmiş yeniden yazılmaz"),
    (".log",  "koşu/bekçi günlüğü — tutanak"),
    (".out",  "koşu çıktısı — tutanak"),
    (".err",  "koşu hatası — tutanak"),
    (".html", "teşhis çıktısı"),
    (".png",  "ikili"),
    (".docx", "Emre'nin paketi"),
    (".jsonl", "oturum transkripti yedeği — kayıt"),
    (".bozuk", "bozulmuş dosyanın yedeği — kayıt"),
)
_BILEREK_DOSYA = {
    "tahta.json":  "mesaj kaydı — geçmiş mesajın içindeki yol o gün yazılandır",
    "defter.json": "`dizin` alanı KENDİ ONARILIR (`py arac/defter.py tazele`)",
}
# 🔴 AYNI UZANTI, ZIT SINIF — ve bu ayrım taşımanın en ince yeri:
#   `denetim/*.json`   = ÖLÇÜM TUTANAĞI. İçindeki yol, o ölçümün nerede
#                        yapıldığını söyleyen bir OLGUDUR. Değiştirmek,
#                        tutanağı tahrif etmektir.
#   ClaudEmre `*.json` = BAĞ (`_proje.txt` · `PARTI.json` · `ayar.json`).
#                        İçindeki yol bir ADRESTİR ve adres değişti.
#                        Değiştirmemek, kutunun paketleri kaybetmesidir.
#   ⇒ Dosyanın TÜRÜ değil GÖREVİ karar verdiriyor. Bir kuralı uzantıya
#     bağlayıp geçmek, iki zıt şeyi aynı kovaya atmak olurdu.
_KAYIT_DIZINLERI = ("denetim", "arsiv", "yedek-oturum-tasima-20260804")


def kalinti_taramasi():
    yaz("═" * 66)
    yaz("⑤ KALINTI TARAMASI — kapsama dışında ne kalıyor")
    yaz("═" * 66)
    degis = _degisimler()
    kapsanan_atlas = (".py", ".bat", ".ps1", ".sh")
    kapsanan_ce = (".py", ".bat", ".sh", ".json", ".txt")
    acikta, bilerek, kapsanan = [], 0, 0

    for kok, turler, alet_js in ((ESKI_ATLAS, kapsanan_atlas, True),
                                 (ESKI_CE, kapsanan_ce, False)):
        if not os.path.isdir(kok):
            continue
        for dizin, altlar, adlar in os.walk(kok):
            altlar[:] = [a for a in altlar if a not in
                         (".git", "__pycache__", "_motor_onbellek", "node_modules")]
            for a in adlar:
                yol = os.path.join(dizin, a)
                try:
                    if os.path.getsize(yol) > 60 * 1024 * 1024:
                        continue
                    with io.open(yol, encoding="utf-8", errors="ignore") as f:
                        ham = f.read()
                except Exception:
                    continue
                if not any(k in ham for k, _ in degis):
                    continue
                bag = os.path.relpath(dizin, kok).replace("\\", "/").split("/")[0]
                if a.endswith(turler):
                    kapsanan += 1
                elif alet_js and a.endswith(".js") and bag in ("arac", "denetim"):
                    kapsanan += 1
                elif a in _BILEREK_DOSYA:
                    bilerek += 1
                elif any(a.endswith(u) for u, _ in _BILEREK_DISTA):
                    bilerek += 1
                elif a.endswith(".js") and bag == "data":
                    bilerek += 1          # verinin kendisi — ASLA dokunulmaz
                elif kok == ESKI_ATLAS and bag in _KAYIT_DIZINLERI:
                    bilerek += 1          # ölçüm tutanağı / arşiv / eski yedek
                elif (os.path.dirname(yol) == kok
                      and (a.startswith("_") or a.startswith("scratchpad"))):
                    bilerek += 1          # kök artığı, `.gitignore`da
                else:
                    acikta.append(os.path.relpath(yol, kok))

    yaz("  kapsanıyor (betik yenileyecek) : %d dosya" % kapsanan)
    yaz("  bilerek dışta (kayıt/tutanak)  : %d dosya" % bilerek)
    if acikta:
        yaz("  🔴 AÇIKTA — ne kapsanıyor ne gerekçesi var : %d" % len(acikta))
        for s in acikta[:25]:
            yaz("       %s" % s)
        if len(acikta) > 25:
            yaz("       … %d dosya daha" % (len(acikta) - 25))
        yaz("  ⇒ TAŞIMAYA BAŞLAMA. Bunlar sınıflandırılmalı.")
    else:
        yaz("  ✓ AÇIKTA HİÇBİR ŞEY YOK — her dosya ya kapsanıyor ya")
        yaz("    gerekçeli olarak dışarıda")
    return not acikta


def main():
    if not (PROVA or YAP):
        print(__doc__)
        print("🔴 Ne yapacağımı söylemedin: --prova ya da --yap")
        sys.exit(2)

    yaz("TAŞIMA %s" % ("PROVASI — hiçbir şeye dokunulmuyor" if PROVA else "— GERÇEK"))
    yaz("")

    kutuyu_durdur()
    gecti = on_sinav()
    # 🔴 PROVA ENGELDE DURMAZ, DEVAM EDER — ve sebebi ölçüldü: ilk hâlinde
    #   duruyordu, dolayısıyla ③ · ③b · ③c bölümleri HİÇ KOŞMUYORDU. Yani
    #   "kaç yol yenilenecek" sorusu, engel kalkana kadar cevapsız kalıyordu
    #   — oysa prova tam da onu göstermek için var. Bir dosyaya bile
    #   dokunmayan bir ölçüm, erken durmak için sebep bulamaz.
    if not gecti and not PROVA:
        dur("ön sınav geçilmedi")

    yaz("")
    yaz("═" * 66)
    yaz("② TAŞIMA")
    yaz("═" * 66)
    if not PROVA:
        if not tasi(ESKI_ATLAS, YENI_ATLAS, "atlas"):
            dur("atlas taşınamadı")
        if os.path.isdir(ESKI_CE):
            if not tasi(ESKI_CE, YENI_CE, "claudemre"):
                yaz("  ⚠️ ClaudEmre taşınamadı — atlas taşındı, bu ayrı ele alınır")
        else:
            yaz("  ⓘ ClaudEmre eski yolda yok, atlandı")
    else:
        tasi(ESKI_ATLAS, YENI_ATLAS, "atlas")
        tasi(ESKI_CE, YENI_CE, "claudemre")

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
        else:
            yaz("  ⓘ %s kaynağı yok, atlandı" % ad)

    if not PROVA:
        yaz("")
        yaz("  git worktree repair …")
        # Yolları AÇIKÇA veriyoruz: argümansız çağrı yalnız worktree'lerin
        # kendi `.git` dosyalarını onarır; ana deponun `worktrees/*/gitdir`
        # işaretçileri için yolun verilmesi gerekir.
        kod, cik = git("worktree", "list", "--porcelain", kok=YENI_ATLAS)
        yollar = [s.split(" ", 1)[1].strip() for s in cik.splitlines()
                  if s.startswith("worktree ")]
        kod, cik = git("worktree", "repair", *yollar[1:], kok=YENI_ATLAS)
        for s in cik.strip().splitlines():
            yaz("      %s" % s)
        yaz("      %s" % ("✓" if kod == 0 else "✗ onarılamadı"))

    yaz("")
    yaz("═" * 66)
    yaz("③ SABİT YOLLAR")
    yaz("═" * 66)
    a_kok = ESKI_ATLAS if PROVA else YENI_ATLAS
    c_kok = ESKI_CE    if PROVA else YENI_CE
    # ATLAS: yalnız `.py`, artı `arac/` ve `denetim/` altındaki alet `.js`leri.
    # `data/*.js`e ASLA dokunulmaz — orası verinin kendisi.
    # 🔴 `.bat` SONRADAN EKLENDİ — kalıntı taraması yakaladı:
    #   `arac/zincir_baslat.bat` içinde `cd /d "C:\Users\...\TARİH COĞRAFYA
    #   SİTESİ"` duruyor ve bu dosyayı ATLAS-ZINCIR zamanlanmış görevi
    #   koşturuyor. Kapsama alınmasaydı gece zinciri olmayan bir dizine
    #   `cd` etmeye çalışacak, `py` yine de koşacak ama YANLIŞ dizinde —
    #   ve `schtasks` 0 dönerdi (görev BAŞLATILDI demek, ÇALIŞTI demek
    #   değil). Dosyanın kendi notu aynı sınıf bir vakayı anlatıyor:
    #   boşluklu yol yüzünden görev BİR AY sessizce koşmamış.
    yollari_yenile(a_kok, (".py", ".bat", ".ps1", ".sh"), "atlas · bütün ağaç")
    yollari_yenile(a_kok, (".js",), "atlas · yalnız alet .js",
                   sadece_dizinler={"arac", "denetim"})
    # CLAUDEMRE: kod + bağ verisi. `.md` (doktrin) HARİÇ.
    if os.path.isdir(c_kok):
        yollari_yenile(c_kok, (".py", ".bat", ".sh", ".json", ".txt"),
                       "claudemre · kod ve BAĞ verisi (_proje.txt · PARTI.json · ayar.json)")
        takma_ad_ekle(c_kok)

    ayarlari_yenile()
    gorevleri_yenile()

    if not PROVA:
        dogrula()
    else:
        yaz("")
        temiz = kalinti_taramasi()
        yaz("")
        yaz("═" * 66)
        yaz("             Ş İ M D İ   N E   Y A P M A L I")
        yaz("═" * 66)
        if gecti and temiz:
            yaz("")
            yaz("  🟢🟢🟢  HER ŞEY HAZIR.")
            yaz("")
            yaz("     ŞUNU ÇALIŞTIR:   C:\\atlas-tasima\\2-TASI.bat")
            yaz("")
        elif not temiz:
            yaz("")
            yaz("  🔴  AÇIKTA DOSYA VAR — taşımaya BAŞLAMA.")
            yaz("      Yukarıdaki listeyi koordinatöre göster.")
            yaz("")
        else:
            yaz("")
            yaz("  🔴  HENÜZ HAZIR DEĞİL — `2-TASI.bat` ÇALIŞTIRMA.")
            yaz("")
            yaz("      Ön sınavda KIRMIZI var (yukarıda ✗ ile işaretli).")
            yaz("      En sık sebep: CLAUDE CODE HÂLÂ AÇIK.")
            yaz("")
            yaz("      YAPILACAK:")
            yaz("        1) Claude Code'un BÜTÜN pencerelerini kapat")
            yaz("        2) Tarayıcıda açık yerel site sekmesini kapat")
            yaz("        3) BU PROVAYI YENİDEN çalıştır (1-PROVA.bat)")
            yaz("        4) 'HER ŞEY HAZIR' yazınca 2-TASI.bat")
            yaz("")
            yaz("      ⓘ Kapsam tarafında sorun YOK: açıkta hiçbir dosya")
            yaz("        kalmıyor. Tek eksik, dosyaları tutan süreçler.")
            yaz("")
        yaz("═" * 66)

    yaz("")
    yaz("🟢 BİTTİ. Günlük: %s" % GUNLUK)
    gunluk_kaydet()


if __name__ == "__main__":
    main()
