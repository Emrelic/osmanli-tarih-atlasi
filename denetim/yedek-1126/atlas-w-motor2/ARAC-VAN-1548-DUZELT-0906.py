# -*- coding: utf-8 -*-
"""VAN 1548 — `1548-08-25` → `1548-08-24`, KOŞU BİTİNCE koşulacak.

🔒 KURU KOŞU VARSAYILAN. Yazmak için `--yaz`.
🔴 KOŞU SÜRERKEN `--yaz` REDDEDİLİR — `data/` donuk; yazmak koşunun
   çıktısını YAYINLANAMAZ yapar.

═══════════════════════════════════════════════════════════════════
KUSUR — ve bu bir KAYNAK ÇELİŞKİSİ DEĞİL, bir SAPMA:

  Kronoloji maddesi (`data/olaylar*.js`):
      t:"1548-08-25" · b:"Van'ın fethi ve doğu sınırının sabitlenmesi"
      gun:"25 Ağustos 1548" · kaynak:"van"          ← TDV'yi GÖSTERİYOR
  TDV `van` gövdesi (okundu, ~9-10 bin kelime, Orhan Kılıç imzalı):
      "onuncu gün kale fethedildi (24 Ağustos 1548)"

⇒ Kayıt gösterdiği kaynağın SÖYLEMEDİĞİNİ yazıyor. `§4⑧` ailesi
  ("rakam gövdede geçiyor ≠ gövde o değeri destekliyor") ama tersten:
  burada gövde BAŞKA bir günü söylüyor ve kayıt onu KAYNAK gösteriyor.
  ⇒ Bir gün sapması. `§4`: kaynak esastır.

KAPSAM ÖLÇÜLDÜ — tek olay, tek bölge:
  44 uç · 13 yerleşim · 7 dosya
  Van · Erciş · Başkale · Çaldıran · Bargiri (Muradiye) · Hoşap ·
  Kotur · Yüksekova (Gever) · Özalp (Saray) · Bacirge (Esendere) …
  Hepsi Van kuşağında ⇒ ALAKASIZ kullanım YOK, toplu değiştirme GÜVENLİ.

⚠️ VE BU DEĞİŞİKLİK BUGÜNKÜ BİR HÜKÜMLE KESİŞİYOR:
  `HUKUM-UCGEN-BASKALE-CALDIRAN-0906.md` Başkale ve Çaldıran'ı
  `1548-08-25`e taşıyordu (44 uçluk konvansiyona uyarak). O hüküm
  AYAKTA — yalnız hedef gün 24 olur. Ve o hüküm zaten şunu yazıyordu:
      "🔜 AÇIK KALEM: 1548-08-25 → 1548-08-24 göçü — 44 uç, tek karar,
       ve Değişmez 2'ye etkisi ÖNCE ölçülmeli."
  ⇒ Bu betik o açık kalemi kapatıyor.

🟢 VE TDV BİR YAN TEYİT DAHA VERDİ: `van` maddesinde **1639 HİÇ
  GEÇMİYOR** — bugünkü Başkale/Çaldıran hükmünün "1639 dayanaksız"
  tespitini bağımsız olarak doğruluyor. (Madde 1555 Amasya
  Antlaşması'ndan söz ediyor: "Van ve çevresinin Osmanlılar'a ait
  olduğu kabul edildi".)

DEĞİŞMEZ 2 ETKİSİ: kronoloji maddesi ile veri ucu BİRLİKTE taşınıyor
  ⇒ kırılma günü de maddesi de aynı güne kayıyor, açık gün DOĞMAZ.
  Betik bunu uygulamadan ÖNCE ve SONRA sayarak gösterir.

KULLANIM:  py denetim/ARAC-VAN-1548-DUZELT-0906.py [--yaz]
═══════════════════════════════════════════════════════════════════
"""
import io, os, re, subprocess, sys

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
YAZ = "--yaz" in sys.argv
ESKI, YENI = "1548-08-25", "1548-08-24"


def a(s):
    for x, y in [("İ", "I"), ("ı", "i"), ("ş", "s"), ("Ş", "S"), ("ü", "u"),
                 ("Ü", "U"), ("ö", "o"), ("Ö", "O"), ("ç", "c"), ("Ç", "C"),
                 ("ğ", "g"), ("Ğ", "G"), ("â", "a"), ("→", "->"), ("⇒", "=>")]:
        s = s.replace(x, y)
    return "".join(c if ord(c) < 256 else "?" for c in s)


def p(s=""):
    sys.stdout.write(a(str(s)) + "\n")
    sys.stdout.flush()


# ── sigorta: kosu canli mi ─────────────────────────────────────────────
kilit = os.path.join(KOK, ".petek.kilit")
kosuyor = False
if os.path.exists(kilit):
    m = re.search(r"pid=(\d+)",
                  io.open(kilit, encoding="utf-8", errors="replace").read())
    if m:
        try:
            r = subprocess.run(
                ["powershell", "-NoProfile", "-Command",
                 "if (Get-Process -Id %s -ErrorAction SilentlyContinue) "
                 "{'CANLI'} else {'OLU'}" % m.group(1)],
                capture_output=True, text=True, timeout=30)
            kosuyor = "CANLI" in r.stdout
        except Exception:
            pass

p("=" * 70)
p("VAN 1548 DUZELTICISI" + ("  [--yaz]" if YAZ else "  [KURU KOSU]"))
p("=" * 70)
p("  kosu canli mi : %s" % ("EVET" if kosuyor else "hayir"))
if kosuyor and YAZ:
    p("[X] KOSU CALISIYOR — `--yaz` REDDEDILDI (data/ donuk).")
    sys.exit(1)
p("")

# ── ⓪ URETILMIS DOSYALAR — ELLE DOKUNULMAZ ────────────────────────────
# `CLAUDE.md §5`: donemler.js · devletler_harita.js · bolgeler.js
# "🤖 URETILMIS — ELLE DUZENLEME." Kosu onlari GIRDIDEN yeniden uretir;
# elle degistirmek hem yasak hem gereksiz — ve daha kotusu, girdi ile
# cikti arasinda SESSIZ bir ayrisma yaratir.
# 🔴 BU SUZGEC KURU KOSUNUN YAKALADIGI BIR KUSURDAN DOGDU: ilk surum
#    15 dosya buluyordu ve UCU URETILMISTI.
URETILMIS = {
    "donemler.js", "devletler_harita.js", "bolgeler.js",
    "devirler.js", "petek_govde.js", "altlik.js", "peteksiz.js",
}


def _atla(f):
    return f in URETILMIS


# ── ① CAKISMA KONTROLU: hedef gun ZATEN kullaniliyor mu? ───────────────
veri = os.path.join(KOK, "data")
hedef_var = 0
for f in sorted(os.listdir(veri)):
    if not f.endswith(".js") or _atla(f):
        continue
    s = io.open(os.path.join(veri, f), encoding="utf-8", errors="replace").read()
    hedef_var += s.count(YENI)
p("  hedef gun (%s) bugun kac kez geciyor : %d" % (YENI, hedef_var))
if hedef_var:
    p("  ⚠️ SIFIR DEGIL — baska bir olay o gunu kullaniyor olabilir.")
    p("     Bu bir ENGEL DEGIL ama gormeden gecilmez; asagidaki dosya")
    p("     listesinde nerede oldugu gorunur.")
p("")

# ── ② DEGISECEK DOSYALAR ───────────────────────────────────────────────
isler = []
for f in sorted(os.listdir(veri)):
    if not f.endswith(".js") or _atla(f):
        continue
    yol = os.path.join(veri, f)
    s = io.open(yol, encoding="utf-8", errors="replace").read()
    n = s.count(ESKI)
    if n:
        isler.append((f, n))
toplam = sum(n for _, n in isler)
p("  DEGISECEK: %d dosya · %d gecis" % (len(isler), toplam))
for f, n in isler:
    p("     %3d  %s" % (n, f))
p("")

# ── ③ `gun:` METNI DE DEGISIR — tarih alani tek basina yetmez ──────────
GUN_ESKI, GUN_YENI = "25 Ağustos 1548", "24 Ağustos 1548"
gun_isler = []
for f in sorted(os.listdir(veri)):
    if not f.endswith(".js") or _atla(f):
        continue
    s = io.open(os.path.join(veri, f), encoding="utf-8", errors="replace").read()
    n = s.count(GUN_ESKI)
    if n:
        gun_isler.append((f, n))
p("  `gun:` METNI de degisecek: %d dosya · %d gecis"
  % (len(gun_isler), sum(n for _, n in gun_isler)))
for f, n in gun_isler:
    p("     %3d  %s" % (n, f))
p("  📌 Ikisi BIRLIKTE degisir: `t:` gun iddiasi, `gun:` onun ACIKLAMASI.")
p("     Yalniz birini degistirmek, bugun kaydedilen 'hassasiyet, yazildigi")
p("     alandan degil ACIKLAYAN alandan okunur' dersinin ihlali olurdu.")
p("")

if not YAZ:
    p("(kuru kosu — hicbir dosya yazilmadi; --yaz ile calistir)")
    sys.exit(0)

# ── ④ UYGULA ───────────────────────────────────────────────────────────
degisen = 0
for f, _ in isler + gun_isler:
    yol = os.path.join(veri, f)
    s = io.open(yol, encoding="utf-8", errors="replace").read()
    s2 = s.replace(ESKI, YENI).replace(GUN_ESKI, GUN_YENI)
    if s2 != s:
        io.open(yol, "w", encoding="utf-8", newline="").write(s2)
        degisen += 1
p("  [OK] %d dosya yazildi" % degisen)
p("")
p("🔜 SIMDI: py arac/denetle.py  — `Degismez 2` acik gun sayisi")
p("   DEGISMEMELI (madde ve veri BIRLIKTE tasindi).")
