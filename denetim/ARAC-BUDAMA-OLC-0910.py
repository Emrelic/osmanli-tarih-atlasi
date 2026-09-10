# -*- coding: utf-8 -*-
"""CLAUDE.md §11 BUDAMA ÖLÇÜMÜ — 10 Eylül 2026 · 1.MURAT (Oturum 0)

NE ÖLÇER: §11'deki her dersin BOYUTUNU ve dördü de OTOMATİK ölçülebilen
dört sinyalini. NE ÖLÇMEZ: bir dersin "önemli" olup olmadığını — o bir
yorum, ve bu alet yorum üretmez.

🔴 BUDAMA BİÇİMİ — hiçbir ders SİLİNMEZ:
     SLOGAN (kalın başlık)  →  `CLAUDE.md`de KALIR
     VAKA (gerisi)          →  `dersler/<kimlik>.md`e TAŞINIR
   Böylece "hangi ders lazım" sorusunu cevaplamak GEREKMİYOR: kural
   bağlamda kalıyor, gerekçe bir tık ötede.

📌 Emsal: ClaudEmre kendi doktrininde aynı ameliyatı yaptı —
   `yasalar/gelen/` ~86.000 token → `DIZIN.md` ~7.000 (on iki kat), ve
   gerekçesi ölçülmüştü: "kural yazılıydı, uygulanmıyordu ve
   UYGULANAMAZDI" (`A6`).
"""
import io, json, os, re, sys

# 🔴 KONSOL cp1254 — `→` (U+2192) burada PATLIYOR ve bu projede bir
#   BEKÇİYİ ÖLDÜRDÜ (`⏳` U+23F3, 43 dakika fark edilmedi). Ölçüm aletinin
#   yarıda patlaması, ölçümü YAPILMAMIŞ kılar.
try:
    sys.stdout.reconfigure(encoding="utf-8", errors="replace")
except Exception:
    pass

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
YOL = os.path.join(KOK, "CLAUDE.md")

s = io.open(YOL, encoding="utf-8").read()
satirlar = s.split("\n")

# ---- §11'in sınırları -------------------------------------------------
bas = None
for i, sat in enumerate(satirlar):
    if sat.startswith("## 11."):
        bas = i
        break
if bas is None:
    print("🔴 §11 BULUNAMADI — dosya yapısı değişmiş, alet DURDU.")
    sys.exit(2)

son = len(satirlar)
for i in range(bas + 1, len(satirlar)):
    if satirlar[i].startswith("## "):
        son = i
        break

# ---- dersleri ayır ----------------------------------------------------
# Üst düzey madde: satır başında "- " (girintili olanlar dersin İÇİ).
sinir = [i for i in range(bas + 1, son) if satirlar[i].startswith("- ")]
if not sinir:
    print("🔴 HİÇ DERS BULUNAMADI — kalıp değişmiş.")
    sys.exit(2)

dersler = []
for n, b in enumerate(sinir):
    e = sinir[n + 1] if n + 1 < len(sinir) else son
    gövde = "\n".join(satirlar[b:e])
    dersler.append({"bas": b + 1, "son": e, "govde": gövde})

# ---- her ders için slogan + sinyaller ---------------------------------
# Slogan = ilk **kalın** blok. Birden çok satıra yayılabilir.
KALIN = re.compile(r"\*\*(.+?)\*\*", re.S)
ARAC = re.compile(r"(arac|denetim)/[A-Za-z0-9_\-]+\.(py|js)")

for d in dersler:
    g = d["govde"]
    d["karakter"] = len(g)

    m = KALIN.search(g)
    if m:
        slogan = " ".join(m.group(1).split())
    else:  # kalın başlık yoksa ilk satırı al
        slogan = " ".join(satirlar[d["bas"] - 1].lstrip("- ").split())
    d["slogan"] = slogan
    d["slogan_kar"] = len(slogan)

    # SİNYALLER — dördü de otomatik, hiçbiri yorum değil
    d["damgali"] = bool(re.search(r"ÇÜRÜDÜ|DAMGALAN|ÇÜRÜYEN|ÇÜRÜT", g))
    d["alet"] = sorted(set(x.group(0) for x in ARAC.finditer(g)))
    d["kod_blok"] = g.count("```") // 2
    d["alinti"] = g.count("\n> ")

# ---- ÖZET -------------------------------------------------------------
top = sum(d["karakter"] for d in dersler)
slo = sum(d["slogan_kar"] + 6 for d in dersler)   # "- **…**\n" payı
basl = len("\n".join(satirlar[bas:sinir[0]]))     # §11 başlığı + önsöz

print("=" * 66)
print("CLAUDE.md §11 BUDAMA ÖLÇÜMÜ")
print("=" * 66)
print("dosyanın tamamı        %9d karakter · %d satır" % (len(s), len(satirlar)))
print("§11 (satır %d-%d)      %9d karakter  (%%%.0f)"
      % (bas + 1, son, top + basl, 100.0 * (top + basl) / len(s)))
print("  ders sayısı          %9d" % len(dersler))
print("  ortalama ders        %9d karakter" % (top // len(dersler)))
print("  EN BÜYÜK ders        %9d karakter" % max(d["karakter"] for d in dersler))
print("  EN KÜÇÜK ders        %9d karakter" % min(d["karakter"] for d in dersler))
print()
print("--- SİNYALLER (otomatik, yorum DEĞİL) ---")
print("  bir ALETE atıf yapan       %4d ders" % sum(1 for d in dersler if d["alet"]))
print("  DAMGALI (çürümüş/düzelmiş) %4d ders" % sum(1 for d in dersler if d["damgali"]))
print("  kod bloğu taşıyan          %4d ders  (toplam %d blok)"
      % (sum(1 for d in dersler if d["kod_blok"]),
         sum(d["kod_blok"] for d in dersler)))
print()
print("--- ÖNCE / SONRA ---")
print("  ÖNCE   §11 CLAUDE.md'de   %9d karakter" % (top + basl))
print("  SONRA  §11 = slogan dizini %8d karakter  (başlık %d + slogan %d)"
      % (basl + slo, basl, slo))
print("  KAZANÇ                     %8d karakter  (%.1f kat küçülme)"
      % (top - slo, (top + basl) / float(basl + slo)))
print()
yeni_dosya = len(s) - top + slo
print("  CLAUDE.md ÖNCE            %9d karakter" % len(s))
print("  CLAUDE.md SONRA           %9d karakter  (%%%.0f'ine iner)"
      % (yeni_dosya, 100.0 * yeni_dosya / len(s)))
print()
print("  taşınacak vaka metni      %9d karakter → dersler/<kimlik>.md"
      % (top - slo))

# ---- EN BÜYÜK 15 DERS -------------------------------------------------
print()
print("--- EN BÜYÜK 15 DERS (taşımanın en çok kazandırdığı yerler) ---")
for d in sorted(dersler, key=lambda x: -x["karakter"])[:15]:
    im = "🔧" if d["alet"] else ("⚠️" if d["damgali"] else "  ")
    print("  %6d kar · satır %5d  %s %s"
          % (d["karakter"], d["bas"], im, d["slogan"][:64]))

# ---- DAMGALI DERSLER — AYRI KOVA, KARAR EMRE'NİN ----------------------
dm = [d for d in dersler if d["damgali"]]
print()
print("--- ⚠️ DAMGALI %d DERS — çürümüş ya da düzeltilmiş vaka taşıyor ---" % len(dm))
print("    (SİLİNMEZ; ayrı kova olarak Emre'ye sunulur — `§3.5.1`:")
print("     'bir vakayı silmek dersi de siler; damgalamak dersi korur')")
for d in sorted(dm, key=lambda x: -x["karakter"])[:8]:
    print("  %6d kar · satır %5d  %s" % (d["karakter"], d["bas"], d["slogan"][:60]))

# ---- dökümü diske yaz -------------------------------------------------
cikti = os.path.join(KOK, "denetim", "OLCUM-BUDAMA-0910.json")
with io.open(cikti, "w", encoding="utf-8") as f:
    f.write(json.dumps(
        [{k: v for k, v in d.items() if k != "govde"} for d in dersler],
        ensure_ascii=False, indent=1))
print()
print("🟢 tam döküm: denetim/OLCUM-BUDAMA-0910.json  (%d ders)" % len(dersler))
