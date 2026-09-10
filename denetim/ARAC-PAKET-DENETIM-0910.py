# -*- coding: utf-8 -*-
"""45 PAKET · 681 MADDE — "YAPILDI MI" SORUSUNU GERÇEKTEN ÖLÇ. 10 Eylül 2026

Emre: "tüm geçmiş paketlerdeki maddeleri gözden geçirip hangisi yapıldı
hangisi yapılmadı kontrol etmen ve etiketlerini ayarlaman lazım."

🔴 BU ALET HÜKÜM DEĞİŞTİRMEZ — DOĞRULANABİLİRLİĞİ ÖLÇER.
   `kutu/asama.py` zaten bir `delil` ekseni tutuyor ama ClaudEmre deposundan
   BAKINCA commit'ler doğrulanamıyor (kendi yorumu: *"58 hash'in 58'i de BU
   depoda yok, hepsi Atlas'ın"*). Bu alet ATLAS deposunda koşuyor —
   yani o hash'leri GERÇEKTEN sorabilir. İddia burada kanıta çevrilebilir.

Üç kova, ve üçü AYRI ŞEY:
   🟢 DOĞRULANDI   commit yazılı VE atlas git'inde VAR
   🔴 ÇÜRÜK        commit yazılı AMA git'te YOK  ← en pahalısı
   ⚪ İZ YOK       "çözüldü" diyor, hiçbir commit izi yok
"""
import io, json, os, re, subprocess, sys

try:
    sys.stdout.reconfigure(encoding="utf-8", errors="replace")
except Exception:
    pass

G = r"C:\Users\emrem\OneDrive\Desktop\ClaudEmre\kutu\giden"
ATLAS = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
HASH = re.compile(r"\b[0-9a-f]{7,40}\b")

_bilinen = {}


def commit_var(h):
    """Atlas git'inde bu hash bir commit mi? Sonuç önbelleklenir."""
    if h in _bilinen:
        return _bilinen[h]
    try:
        r = subprocess.run(["git", "-C", ATLAS, "cat-file", "-t", h],
                           capture_output=True, text=True, timeout=20)
        ok = (r.returncode == 0 and r.stdout.strip() == "commit")
    except Exception:
        ok = None                      # ÖLÇÜLEMEDİ — "yok" ile aynı DEĞİL
    _bilinen[h] = ok
    return ok


def oku(d, ad):
    p = os.path.join(G, d, ad)
    if not os.path.exists(p):
        return None
    try:
        return json.load(io.open(p, encoding="utf-8"))
    except Exception:
        return None


kova = {"dogrulandi": [], "curuk": [], "iz-yok": [], "not-izi": [],
        "olculemedi": [], "iddiasiz": [], "acik": []}
paket_ozet = []

for d in sorted(os.listdir(G)):
    if not d.startswith("parti"):
        continue
    pv = oku(d, "PARTI.json")
    if not pv:
        continue
    cv = (oku(d, "CEVAP.json") or {}).get("maddeler") or {}
    p_dog = p_cur = p_iz = p_acik = 0
    for m in (pv.get("maddeler") or []):
        no = m.get("no")
        c = cv.get(no) or {}
        h = (c.get("hukum") or "").strip()
        kimlik = "%s/%s" % (d[-4:], no)
        baslik = (m.get("baslik") or "")[:52]
        if h != "cozuldu":
            # `cozuldu` DIŞINDAKİLER iş İDDİA ETMİYOR — delil aranmaz.
            if h in ("zaten-dogru", "gerek-yok", "tekrar", "vazgecildi",
                     "yapilamaz", "cozulemedi", "bayat", "kapsam-disi",
                     "once-cozuldu"):
                kova["iddiasiz"].append((kimlik, h, baslik))
            else:
                kova["acik"].append((kimlik, h or "(HÜKÜMSÜZ)", baslik))
                p_acik += 1
            continue
        # --- "çözüldü" diyor: KANIT ARA ----------------------------------
        adaylar = []
        for kaynak in (c.get("commit") or "", c.get("not") or ""):
            adaylar += HASH.findall(kaynak)
        gorulen = None
        for a in adaylar:
            v = commit_var(a)
            if v is True:
                gorulen = a
                break
            if v is None:
                gorulen = "?"
        if gorulen and gorulen != "?":
            kova["dogrulandi"].append((kimlik, gorulen, baslik)); p_dog += 1
        elif gorulen == "?":
            kova["olculemedi"].append((kimlik, "-", baslik))
        elif adaylar:
            kova["curuk"].append((kimlik, ",".join(adaylar[:2]), baslik))
            p_cur += 1
        else:
            kova["iz-yok"].append((kimlik, "-", baslik)); p_iz += 1
    paket_ozet.append((d, p_dog, p_cur, p_iz, p_acik))

n = sum(len(v) for v in kova.values())
print("=" * 72)
print("45 PAKET · %d MADDE — 'YAPILDI MI' ÖLÇÜMÜ (atlas git'ine SORULDU)" % n)
print("=" * 72)
print()
print("  🟢 DOĞRULANDI   %4d   commit yazılı VE atlas git'inde VAR"
      % len(kova["dogrulandi"]))
print("  🔴 ÇÜRÜK        %4d   commit yazılı AMA git'te YOK"
      % len(kova["curuk"]))
print("  ⚪ İZ YOK       %4d   'çözüldü' diyor, hiçbir commit izi yok"
      % len(kova["iz-yok"]))
print("  ⚫ ÖLÇÜLEMEDİ   %4d   git sorulamadı"
      % len(kova["olculemedi"]))
print("  ➖ İDDİASIZ     %4d   iş iddia EDİLMEMİŞ (hata değildi · gerek yok …)"
      % len(kova["iddiasiz"]))
print("  🔵 AÇIK         %4d   hâlâ yapılacak"
      % len(kova["acik"]))
print()

if kova["curuk"]:
    print("🔴 ÇÜRÜK — en pahalı kova, commit YAZILI ama git'te YOK:")
    for k, h, b in kova["curuk"][:30]:
        print("   %-14s %-18s %s" % (k, h, b))
    print()

print("--- İZ YOK: 'çözüldü' diyen ama kanıtı olmayan maddeler (ilk 25) ---")
for k, _, b in kova["iz-yok"][:25]:
    print("   %-14s %s" % (k, b))
if len(kova["iz-yok"]) > 25:
    print("   … %d madde daha" % (len(kova["iz-yok"]) - 25))
print()
print("--- AÇIK maddeler, hüküm dağılımı ---")
say = {}
for _, h, _b in kova["acik"]:
    say[h] = say.get(h, 0) + 1
for h, c in sorted(say.items(), key=lambda x: -x[1]):
    print("   %-16s %4d" % (h, c))

print()
print("🔴 SINIR — BU ALET NE ÖLÇMEZ: bir commit'in VAR OLMASI, o maddeyi")
print("   ÇÖZDÜĞÜNÜ göstermez (`D144`: beyan edilen kaynak iddiayı")
print("   taşımıyor olabilir). 'DOĞRULANDI' burada *izlenebilir* demektir,")
print("   *doğru* demek DEĞİL. İz yokluğu ise kesin: izlenemeyen bir iş")
print("   bir daha sınanamaz (`D100`).")
