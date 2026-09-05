# -*- coding: utf-8 -*-
"""KOSU BITER BITMEZ — ILK UC OLCUM, TEK KOMUT.

    py denetim/ARAC-KOSU-SONRASI-0905.py

NICIN VAR: kosu bittigi an yapilacak uc olcum uc ayri yerde yaziliydi
(kuyruk · MERGE-KONTROL · tahta). Kritik anda uc belgeyi acmak zaman
yakar ve `§11`in "bayat kabul olcutu" tuzagina davetiye cikarir.

🔴 UCUNUN DE SIRASI ONEMLI:
  ① ASAMA TABLOSU   kosu boyunca TAMPONDA bekledi, cikista bosalir.
                    14+ saatlik tablo ILK KEZ burada gorulur — ve bir
                    sonraki kosunun sure tahmini bundan cikar.
  ② BOYA DUSUSU     "boya anahtari `harita:`ya dusen donem: N"
                    🔴 N=0 ise dusus DEVRE DISI kalmis demektir
                    (`_HARITA_ALT` try/except, `uret_petek.py:376`) ve
                    "kurtulan 4" kimlik GERCEK harita deligine doner.
  ③ PETEKSIZ        artik bir GERILEME testi: 4 Eylul'de 1074 -> 0
                    olmustu; simdi HALA 0 olmali. Yukselirse yeni kosu
                    nokta KAYBETMIS demektir.

SALT OKUR. Cikti ASCII. Cikis kodu: 0 = ucu de gecti, 1 = en az biri dustu.
"""
import io, os, re, subprocess, sys, unicodedata
KOK = r"C:\Users\emrem\OneDrive\Desktop\TARİH COĞRAFYA SİTESİ"
os.chdir(KOK)


def a(s):
    s = str(s).replace("İ", "I").replace("ı", "i").replace("Ş", "S").replace("ş", "s")
    s = s.replace("Ğ", "G").replace("ğ", "g").replace("Ü", "U").replace("ü", "u")
    s = s.replace("Ö", "O").replace("ö", "o").replace("Ç", "C").replace("ç", "c")
    return "".join(c for c in unicodedata.normalize("NFKD", s) if ord(c) < 128)


def p(s=""):
    print(a(s))


hata = 0

# ── ONCE: kosu GERCEKTEN bitti mi (surecten, kilit dosyasindan DEGIL) ────
p("=== 0. KOSU BITTI MI — SURECTEN ===")
r = subprocess.run(["powershell", "-c",
                    "$p=Get-Process -Id 21540 -EA SilentlyContinue;"
                    "if($p){'CANLI'}else{'BITTI'}"],
                   capture_output=True, text=True, encoding="utf-8", errors="replace")
durum = (r.stdout or "").strip()
p("  uretim PID 21540: %s" % durum)
if "CANLI" in durum:
    p("  🔴 KOSU HALA SURUYOR — bu betik ERKEN kosuldu, olcumler ANLAMSIZ.")
    sys.exit(2)

# ── ① ASAMA TABLOSU ─────────────────────────────────────────────────────
p("")
p("=== 1. ASAMA TABLOSU (kosu_ayrik.log) ===")
lg = os.path.join(KOK, "kosu_ayrik.log")
s = io.open(lg, encoding="utf-8", errors="replace").read() if os.path.exists(lg) else ""
p("  boyut: %d B · satir: %d" % (len(s), s.count("\n")))
asama = [l for l in s.split("\n") if re.search(r"ADIM|asama|AŞAMA|dk\b|sn\b", l)]
if len(s) < 2000:
    p("  🔴 LOG HALA KUCUK — tampon bosalmamis olabilir, ya da kosu")
    p("     stdout'u BASKA bir dosyaya yazdi. `ls -lt *.log` ile ARA.")
    hata = 1
for l in asama[:30]:
    p("  %s" % l.strip()[:96])

# ── ② BOYA DUSUSU SAYACI ────────────────────────────────────────────────
# 🔴 ILK SURUM YANLIS DOSYAYA BAKTI ve SAHTE ALARM verdi (5 Eylul 22:35):
#    `kosu_ayrik.log` FIRLATICININ ozeti (asama basliklari + kod=N);
#    uretimin AYRINTILI stdout'u `kosu_zincir.log`a gidiyor ve bu satir
#    ORADA. Alet "SATIR BULUNAMADI ⇒ olculemedi" deyip cikis 1 dondu —
#    yani TEMIZ bir yayini bloke edecekti.
#    ⇒ `§11`: *bir alet, aradigi seyin NEREDE OLMAYACAGINI da bilmeli.*
#    Care: IKI dosyada da ara, ve hangisinde bulundugunu YAZ.
p("")
p("=== 2. BOYA ANAHTARI `harita:`ya DUSEN DONEM ===")
kaynaklar = []
for ad in ("kosu_zincir.log", "kosu_ayrik.log"):
    yol = os.path.join(KOK, ad)
    if os.path.exists(yol):
        kaynaklar.append((ad, io.open(yol, encoding="utf-8", errors="replace").read()))
m, nerede = [], "?"
for ad, metin in kaynaklar:
    m = re.findall(r"d[uü][sş]en d[oö]nem:\s*(\d+)", metin)
    if m:
        nerede = ad
        break
if m:
    p("  kaynak: %s" % nerede)
if not m:
    p("  🔴 SATIR BULUNAMADI — %s dosyalarinda arandi" %
      ", ".join(x[0] for x in kaynaklar))
    p("     ⇒ `kurtulan 4` kimligin durumu OLCULEMEDI (temiz SAYILMAZ)")
    hata = 1
else:
    n = int(m[-1])
    p("  N = %d" % n)
    if n == 0:
        p("  🔴 DUSUS DEVRE DISI — `kurtulan 4` GERCEK harita deligine doner:")
        p("     arnavutluk-bagimsiz · arnavutluk-iskenderbey ·")
        p("     bulgaristan-kralligi · sirbistan-nemanjic")
        hata = 1
    else:
        p("  🟢 dusus CALISTI")

# ── ③ PETEKSIZ GERILEME TESTI ───────────────────────────────────────────
p("")
p("=== 3. PETEKSIZ GERILEME TESTI ===")
r = subprocess.run(["node", os.path.join(KOK, "denetim", "ARAC-PETEKSIZ-0905.js")],
                   cwd=KOK, capture_output=True, text=True,
                   encoding="utf-8", errors="replace")
for l in (r.stdout or "").split("\n"):
    if l.strip():
        p("  %s" % l.strip()[:96])
if r.returncode != 0:
    p("  🔴 GERILEME — peteksiz oran yukseldi, YAYIN YAPILMAZ")
    hata = 1

p("")
p("=== SONUC ===")
p("  %s" % ("🔴 EN AZ BIRI DUSTU — kuyruga bak, yayin YAPMA" if hata
            else "🟢 UCU DE GECTI — merge adim ⓪'a gecilebilir"))
sys.exit(hata)
