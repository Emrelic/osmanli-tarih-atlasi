# -*- coding: utf-8 -*-
"""BUDAMA 2 — §3.5 · §4 · §7'nin VAKA EKLERİ · 10 Eylül 2026 · 1.MURAT

    py denetim/ARAC-BUDAMA2-0910.py            KURU KOŞU
    py denetim/ARAC-BUDAMA2-0910.py --uygula   yazar

🔴 §11'DEN FARKI: orada bölümün TAMAMI bir vaka arşiviydi. Burada bölümler
   OPERASYONELDİR (kaynak kuralı · dosya sahipliği) ve bir işçi onları
   İŞ SIRASINDA okur. ⇒ Kural YERİNDE KALIR, yalnız sonradan eklenmiş
   TARİHLİ VAKA blokları taşınır.

ÖLÇÜT — yorum değil, bloğun KENDİ BEYANI:
   başlığında TARİH taşıyan `###`/`####` bloğu  → VAKA KAYDI, taşınır
   tarih taşımayan blok                          → KURAL, yerinde kalır
⚠️ Ve taşınan her bloğun yerine TEK SATIRLIK bir atıf bırakılır; blok
   sessizce yok olmaz (`§3.5.1`: *vakayı silmek dersi de siler*).
"""
import io, os, re, sys

try:
    sys.stdout.reconfigure(encoding="utf-8", errors="replace")
except Exception:
    pass

UYGULA = "--uygula" in sys.argv
KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
YOL = os.path.join(KOK, "CLAUDE.md")
DERSLER = os.path.join(KOK, "dersler")

# 🔴 BÜYÜK HARF ŞART: başlıklar `2 EYLÜL 2026` yazıyor, `2 Eylül 2026` değil.
#   İlk yazımda yalnız başlık-büyük-harf biçimi vardı ve 21 bloğun 20'sini
#   KAÇIRDI; eşleşen tek blok da YANLIŞ POZİTİFTİ (Emre'nin kendi kırmızı
#   çizgisi). ⇒ `re.I` Türkçe'de GÜVENİLMEZ (`İ`/`ı` yerel-bağımlı), o
#   yüzden iki biçim de AÇIKÇA yazılıyor.
AY = ("Ocak|Şubat|Mart|Nisan|Mayıs|Haziran|Temmuz|Ağustos|Eylül|Ekim|"
      "Kasım|Aralık|"
      "OCAK|ŞUBAT|MART|NİSAN|MAYIS|HAZİRAN|TEMMUZ|AĞUSTOS|EYLÜL|EKİM|"
      "KASIM|ARALIK")
TARIH = re.compile(r"\d{1,2}\s+(?:%s)\s+20\d\d" % AY)

CEVIR = {ord(a): b for a, b in zip(
    "İIıŞşĞğÜüÖöÇçÂâÎîÛû’'`",
    "iiisSgGuUoOcCaAiiuu   ")}


def slug(m, n=44):
    t = re.sub(r"[^a-z0-9]+", "-", m.translate(CEVIR).lower()).strip("-")
    o = []
    for p in t.split("-"):
        if p and not (o and len("-".join(o) + "-" + p) > n):
            o.append(p)
        elif p:
            break
    return "-".join(o) or "vaka"


s = io.open(YOL, encoding="utf-8").read()
sat = s.split("\n")

# --- hedef bölümlerin satır aralıkları ---------------------------------
HEDEF = ("## 3.5 ", "## 4. ", "## 7. ")
araliklar = []
for i, x in enumerate(sat):
    if any(x.startswith(h) for h in HEDEF):
        j = next((k for k in range(i + 1, len(sat))
                  if sat[k].startswith("## ")), len(sat))
        araliklar.append((x.strip()[:34], i, j))

if len(araliklar) != 3:
    print("🔴 ÜÇ BÖLÜM BULUNAMADI (%d) — DURDUM." % len(araliklar))
    for a in araliklar:
        print("   " + a[0])
    sys.exit(2)

# --- vaka bloklarını bul ------------------------------------------------
bloklar = []
for ad, b, e in araliklar:
    basliklar = [k for k in range(b + 1, e)
                 if re.match(r"^#{3,4} ", sat[k])]
    for n, k in enumerate(basliklar):
        kson = basliklar[n + 1] if n + 1 < len(basliklar) else e
        baslik = sat[k]
        govde = "\n".join(sat[k:kson]).rstrip()
        # ÖLÇÜT: başlıkta tarih var mı
        vaka = bool(TARIH.search(baslik))
        bloklar.append({"bolum": ad, "bas": k, "son": kson, "baslik": baslik,
                        "govde": govde, "vaka": vaka, "kar": len(govde)})

vakalar = [x for x in bloklar if x["vaka"]]
kurallar = [x for x in bloklar if not x["vaka"]]

print("=" * 66)
print("BUDAMA 2 — §3.5 · §4 · §7   (%s)" % ("UYGULAMA" if UYGULA else "KURU KOŞU"))
print("=" * 66)
for ad, b, e in araliklar:
    top = sum(x["kar"] for x in bloklar if x["bolum"] == ad)
    vk = sum(x["kar"] for x in vakalar if x["bolum"] == ad)
    print("%-36s blok %2d · vaka %2d · %6d -> %6d"
          % (ad, sum(1 for x in bloklar if x["bolum"] == ad),
             sum(1 for x in vakalar if x["bolum"] == ad),
             top, top - vk))
print("-" * 66)
print("TOPLAM blok %d · VAKA %d · KURAL %d" % (len(bloklar), len(vakalar),
                                               len(kurallar)))
print("taşınacak    %6d karakter" % sum(x["kar"] for x in vakalar))
print("yerinde kalan %5d karakter" % sum(x["kar"] for x in kurallar))

print()
print("--- TAŞINACAK VAKA BLOKLARI ---")
for x in sorted(vakalar, key=lambda y: -y["kar"]):
    print("  %6d  %s" % (x["kar"], x["baslik"].lstrip("# ")[:62]))

print()
print("--- YERİNDE KALAN (KURAL) — en büyük 8 ---")
for x in sorted(kurallar, key=lambda y: -y["kar"])[:8]:
    print("  %6d  %s" % (x["kar"], x["baslik"].lstrip("# ")[:62]))

if not vakalar:
    print("\n⚪ Taşınacak vaka bulunamadı."); sys.exit(0)

# --- kimlik + yeni metin ------------------------------------------------
mevcut = set()
if os.path.isdir(DERSLER):
    mevcut = set(x[:4] for x in os.listdir(DERSLER) if x.startswith("D"))
n = max([int(x[1:]) for x in mevcut] or [0])

for x in vakalar:
    n += 1
    baslik_metni = " ".join(x["baslik"].lstrip("# ").replace("*", "").split())
    x["kimlik"] = "D%03d-%s" % (n, slug(baslik_metni))
    x["ozet"] = baslik_metni

degis = {}
for x in vakalar:
    seviye = len(x["baslik"]) - len(x["baslik"].lstrip("#"))
    degis[x["bas"]] = ("%s %s\n\n> 📄 **Vakası taşındı** — "
                       "[`%s`](dersler/%s.md) *(10 Eylül 2026 budaması; "
                       "kural yukarıda, ölçüm ve anlatı orada)*"
                       % ("#" * seviye, x["baslik"].lstrip("# "),
                          x["kimlik"].split("-")[0], x["kimlik"]))

yeni = []
atla = set()
for x in vakalar:
    atla.update(range(x["bas"], x["son"]))
for i, satir in enumerate(sat):
    if i in degis:
        yeni.append(degis[i])
    elif i in atla:
        continue
    else:
        yeni.append(satir)
yeni_s = "\n".join(yeni)

print()
print("--- ÖNCE / SONRA ---")
print("CLAUDE.md ÖNCE   %7d karakter" % len(s))
print("CLAUDE.md SONRA  %7d karakter   (%%%.0f)"
      % (len(yeni_s), 100.0 * len(yeni_s) / len(s)))
print("kazanç           %7d karakter" % (len(s) - len(yeni_s)))

# --- KORUMA SINAVI ------------------------------------------------------
h = []
if len(set(x["kimlik"] for x in vakalar)) != len(vakalar):
    h.append("kimlik çakışması")
for x in vakalar:
    if not x["govde"].strip():
        h.append("boş gövde: " + x["kimlik"])
    if x["kimlik"][:4] in mevcut:
        h.append("kimlik ZATEN VAR: " + x["kimlik"])
if len(yeni_s) >= len(s):
    h.append("dosya küçülmedi")
if h:
    print("\n🔴 KORUMA SINAVI GEÇMEDİ — hiçbir şey yazılmadı:")
    for y in h:
        print("   ✗ " + y)
    sys.exit(2)
print("🟢 KORUMA SINAVI 4/4 GEÇTİ")

if not UYGULA:
    print("\n⚪ KURU KOŞU — hiçbir dosya yazılmadı. Yazmak için: --uygula")
    sys.exit(0)

for x in vakalar:
    p = os.path.join(DERSLER, x["kimlik"] + ".md")
    with io.open(p, "w", encoding="utf-8") as f:
        f.write("# %s\n\n" % x["ozet"])
        f.write("> Kimlik `%s` · `CLAUDE.md %s` bölümünden taşındı "
                "(10 Eylül 2026 budaması). Kural orada, vaka burada.\n\n"
                % (x["kimlik"].split("-")[0], x["bolum"].lstrip("# ")))
        f.write("---\n\n" + x["govde"] + "\n")

io.open(YOL, "w", encoding="utf-8").write(yeni_s)

gz = io.open(YOL, encoding="utf-8").read()
kayip = [x["kimlik"] for x in vakalar
         if x["govde"] not in io.open(
             os.path.join(DERSLER, x["kimlik"] + ".md"), encoding="utf-8").read()]
print("\n--- GERİ OKUMA ---")
print("  vaka dosyası     %d / %d" % (len(vakalar) - len(kayip), len(vakalar)))
print("  CLAUDE.md        %d karakter" % len(gz))
if kayip:
    print("🔴 AYRIŞAN: %s" % kayip[:5]); sys.exit(2)
print("🟢 %d vakanın %d'inin gövdesi dosyasında BİREBİR bulundu."
      % (len(vakalar), len(vakalar)))
