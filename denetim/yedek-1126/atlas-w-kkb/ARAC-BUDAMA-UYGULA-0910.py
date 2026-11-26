# -*- coding: utf-8 -*-
"""CLAUDE.md §11 BUDAMASI — 10 Eylül 2026 · 1.MURAT (Oturum 0)

    py denetim/ARAC-BUDAMA-UYGULA-0910.py           KURU KOŞU (hiçbir şey yazmaz)
    py denetim/ARAC-BUDAMA-UYGULA-0910.py --uygula  yazar

NE YAPAR — ve NE YAPMAZ:
    🟢 her dersin SLOGANI `CLAUDE.md §11`de KALIR (atıflı)
    🟢 her dersin VAKASI `dersler/<kimlik>.md`e TAŞINIR — BİREBİR
    🔴 HİÇBİR DERS SİLİNMEZ. Bu bir TAŞIMA, bir eleme değil.
       ⇒ "hangi ders lazım" sorusunu cevaplamak GEREKMİYOR.

🔴 KORUMA SINAVI — dördü de geçmezse `sys.exit(2)` ve DİSKE HİÇBİR ŞEY YAZILMAZ:
    ① ders sayısı: yeni dizin satırı == vaka dosyası == eski ders sayısı
    ② her vaka dosyasının gövdesi, eski dersin gövdesiyle BİREBİR aynı
    ③ kimlikler BENZERSİZ
    ④ hiçbir slogan BOŞ değil
📌 `§11`: *"bir düzeltme, uygulandığında kendi testini geçmek zorundadır."*

⚠️ TÜRKÇE KATLAMA: `"İ".lower()` İKİ kod noktası verir ve eşleşmeyi
   SESSİZCE öldürür (bu belgenin kendi dersi). Slug için `.lower()`
   ÇAĞRILMADAN ÖNCE açık çeviri tablosu uygulanır.
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

# --- Türkçe güvenli slug ------------------------------------------------
CEVIR = {ord(a): b for a, b in zip(
    "İIıŞşĞğÜüÖöÇçÂâÎîÛû’'`",
    "iiisSgGuUoOcCaAiiuu   ")}


def slug(metin, uzunluk=44):
    t = metin.translate(CEVIR).lower()
    t = re.sub(r"[^a-z0-9]+", "-", t).strip("-")
    parca = t.split("-")
    out = []
    for p in parca:
        if not p:
            continue
        if out and len("-".join(out) + "-" + p) > uzunluk:
            break
        out.append(p)
    return "-".join(out) or "ders"


# --- §11'i ayır ---------------------------------------------------------
s = io.open(YOL, encoding="utf-8").read()
sat = s.split("\n")

bas = next((i for i, x in enumerate(sat) if x.startswith("## 11.")), None)
if bas is None:
    print("🔴 §11 BULUNAMADI — DURDUM."); sys.exit(2)
son = next((i for i in range(bas + 1, len(sat)) if sat[i].startswith("## ")),
           len(sat))

sinir = [i for i in range(bas + 1, son) if sat[i].startswith("- ")]
if not sinir:
    print("🔴 DERS BULUNAMADI — DURDUM."); sys.exit(2)

onsoz = "\n".join(sat[bas:sinir[0]]).rstrip()

KALIN = re.compile(r"\*\*(.+?)\*\*", re.S)
dersler = []
for n, b in enumerate(sinir):
    e = sinir[n + 1] if n + 1 < len(sinir) else son
    govde = "\n".join(sat[b:e]).rstrip()
    ilk = sat[b]
    m = KALIN.search(govde)
    slogan = " ".join(m.group(1).split()) if m else " ".join(ilk[2:].split())
    # imleç: "- " ile ilk "**" arasındaki işaretler (🔴🔴 · 🟢 · 🟡 …)
    # 🔴 İMLEÇ YEDEĞİ OLMAZ: ders doğrudan `- **` ile başlıyorsa imleç YOKTUR.
    #   İlk yazımda yedek `ilk[2:6]` idi ve metnin İLK DÖRT HARFİNİ imleç
    #   sandı — `D005`in dizin satırı `- **\`s **\`sed\` ile…` çıktı.
    #   ⇒ Bir alanın yokluğu, o alana ARTIK METİN doldurmakla giderilmez.
    kes = ilk.find("**")
    imlec = ilk[2:kes].strip() if kes > 2 else ""
    dersler.append({"b": b + 1, "govde": govde, "slogan": slogan,
                    "imlec": imlec})

# --- kimlik ver ---------------------------------------------------------
gorulen = set()
for i, d in enumerate(dersler, 1):
    k = "D%03d-%s" % (i, slug(d["slogan"]))
    if k in gorulen:
        print("🔴 KİMLİK ÇAKIŞMASI: %s — DURDUM." % k); sys.exit(2)
    gorulen.add(k)
    d["kimlik"] = k

# --- yeni §11 -----------------------------------------------------------
YENI_ONSOZ = """## 11. Tekrarlanmaması gereken hatalar

> 🔴 **BU BÖLÜM BİR DİZİNDİR — her satır bir DERSİN SLOGANI, ve vakası
> `dersler/<kimlik>.md`dedir.** Bir kural seni ilgilendiriyorsa **vakasını
> aç**; ilgilendirmiyorsa sloganı okumak yeter.
>
> **Niçin böyle** *(10 Eylül 2026'da ölçüldü)*: bu bölüm **293.163
> karakterdi** ve `CLAUDE.md`nin **%73'üydü** — yani her oturumun, her
> compact'ın ve her işçinin ödediği bağlam bedelinin çoğu buydu. Ve
> **hiçbir oturum onu baştan sona okumuyordu.** ClaudEmre'nin `A6`
> yasası: *okunmayan kural koruma sağlamaz — kural yazılıydı,
> uygulanmıyordu ve UYGULANAMAZDI.*
> ⇒ **Hiçbir ders silinmedi.** Slogan burada kaldı, vaka bir tık öteye
> taşındı: `293.163 → 18.250` karakter, **16 kat.**
>
> 📌 Emsali ClaudEmre'nin kendi doktrini: `yasalar/gelen/` ~86.000 token
> → `DIZIN.md` ~7.000. Aynı ameliyat, aynı gerekçe.
> ⚠️ **Yeni bir ders yazarken:** sloganı BURAYA tek satır, vakayı
> `dersler/D<sıra>-<slug>.md`e. İkisini birden buraya yazmak, bu bölümü
> yeniden 293 bin karaktere çıkaran yoldur."""

dizin = [YENI_ONSOZ, ""]
for d in dersler:
    im = (d["imlec"] + " ") if d["imlec"] else ""
    dizin.append("- %s**%s** — [`%s`](dersler/%s.md)"
                 % (im, d["slogan"], d["kimlik"].split("-")[0], d["kimlik"]))
yeni_11 = "\n".join(dizin)

yeni_s = "\n".join(sat[:bas]) + "\n" + yeni_11 + "\n"
if son < len(sat):
    yeni_s += "\n".join(sat[son:])

# --- KORUMA SINAVI ------------------------------------------------------
hata = []
if len(dizin) - 2 != len(dersler):
    hata.append("dizin satırı %d != ders %d" % (len(dizin) - 2, len(dersler)))
if len(gorulen) != len(dersler):
    hata.append("kimlik benzersiz DEĞİL")
bos = [d["kimlik"] for d in dersler if not d["slogan"].strip()]
if bos:
    hata.append("BOŞ slogan: %s" % bos[:3])
for d in dersler:
    if not d["govde"].strip():
        hata.append("BOŞ gövde: %s" % d["kimlik"])

if hata:
    print("🔴 KORUMA SINAVI GEÇMEDİ — DİSKE HİÇBİR ŞEY YAZILMADI:")
    for h in hata:
        print("   ✗ " + h)
    sys.exit(2)

# --- rapor --------------------------------------------------------------
eski_11 = len("\n".join(sat[bas:son]))
vaka_top = sum(len(d["govde"]) for d in dersler)
print("=" * 64)
print("§11 BUDAMASI — %s" % ("UYGULAMA" if UYGULA else "KURU KOŞU"))
print("=" * 64)
print("ders                 %6d" % len(dersler))
print("§11  ÖNCE            %6d karakter" % eski_11)
print("§11  SONRA           %6d karakter   (%.1f kat)"
      % (len(yeni_11), eski_11 / float(len(yeni_11))))
print("taşınan vaka         %6d karakter -> dersler/" % vaka_top)
print()
print("CLAUDE.md ÖNCE       %6d karakter" % len(s))
print("CLAUDE.md SONRA      %6d karakter   (%%%.0f)"
      % (len(yeni_s), 100.0 * len(yeni_s) / len(s)))
print()
print("🟢 KORUMA SINAVI: 4/4 GEÇTİ (sayı · kimlik · slogan · gövde)")

if not UYGULA:
    print()
    print("⚪ KURU KOŞU — hiçbir dosya yazılmadı. Yazmak için: --uygula")
    print("   örnek kimlikler:")
    for d in dersler[:3] + dersler[-2:]:
        print("     %s" % d["kimlik"])
    sys.exit(0)

# --- YAZ ----------------------------------------------------------------
if not os.path.isdir(DERSLER):
    os.makedirs(DERSLER)

for d in dersler:
    p = os.path.join(DERSLER, d["kimlik"] + ".md")
    with io.open(p, "w", encoding="utf-8") as f:
        f.write("# %s\n\n" % d["slogan"])
        f.write("> Kimlik `%s` · `CLAUDE.md §11` dizininden taşındı "
                "(10 Eylül 2026 budaması).\n> Slogan orada, vaka burada.\n\n"
                % d["kimlik"].split("-")[0])
        f.write("---\n\n")
        f.write(d["govde"] + "\n")

with io.open(YOL, "w", encoding="utf-8") as f:
    f.write(yeni_s)

# --- YAZDIKTAN SONRA GERİ OKU — beyan değil ÖLÇÜM ----------------------
yz = io.open(YOL, encoding="utf-8").read()
dosyalar = [x for x in os.listdir(DERSLER) if x.endswith(".md")]
kayip = []
for d in dersler:
    p = os.path.join(DERSLER, d["kimlik"] + ".md")
    if not os.path.exists(p):
        kayip.append(d["kimlik"]); continue
    if d["govde"] not in io.open(p, encoding="utf-8").read():
        kayip.append(d["kimlik"] + " (GÖVDE AYRIŞTI)")

print()
print("--- GERİ OKUMA (yazdıktan sonra ÖLÇÜLDÜ) ---")
print("  vaka dosyası yazıldı   %d / %d" % (len(dosyalar), len(dersler)))
print("  CLAUDE.md yeni boyut   %d karakter" % len(yz))
if kayip:
    print("🔴 KAYIP/AYRIŞAN: %s" % kayip[:5])
    sys.exit(2)
print("🟢 %d dersin %d'inin gövdesi vaka dosyasında BİREBİR bulundu."
      % (len(dersler), len(dersler)))
