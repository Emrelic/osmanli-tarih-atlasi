# -*- coding: utf-8 -*-
"""PAKETLEME KÖRLÜĞÜ TARAYICISI — "bu desen BUGÜN kaç dosya tutuyor?"

🔴 NİÇİN: `af0c78c6` (29 Eylül 2026 10:54) 288 kaynak dosyayı 30 pakete gömdü.
   index.html'deki `<script src="">` etiketleri artık PAKETİ gösteriyor;
   orijinal adlar yalnız HTML YORUMLARINDA kaldı. index.html'i
   `src="data/<AD>.js"` diye tarayan her araç o andan beri BOŞ KÜME okuyor
   olabilir — ve **boş küme her öngörüyü doğrular.**

   İki kurban 1 Ekim'de ELLE bulundu (`b18717ae`):
     denetle.py `_d8_d_dosyalari`              → 0 (13 olmalı) · Değişmez 8a ✓ bastı
     denetle_gorunur.py `_tarayici_yerlesim…`  → 0 (93 olmalı) · ③ ✓ bastı
   Bu araç ÜÇÜNCÜSÜ VAR MI diye sorar.

🔴 YÖNTEM — regex'i TAHMİN ETMEZ, AST ile OKUR.
   İlk denemem (1 Ekim, atılan) kaynaktan `src=` içeren DİZGİ PARÇALARINI
   kaba bir regex'le çekmişti; tam desen yerine parça yakaladı ve anlamsız
   sayılar üretti ("→ 1" aslında `src=` kelimesinin kendisini sayıyordu).
   ⇒ `D247`: bozuk bir ölçüm makûl görünen bir sayı verir. Doğru yol: Python
   kaynağını `ast` ile ayrıştır, `re.*` çağrılarının GERÇEK dizge
   argümanlarını al.

KULLANIM
    py denetim/ARAC-PAKET-KORLUK-1001.py              # yalnız şüpheliler
    py denetim/ARAC-PAKET-KORLUK-1001.py --hepsi      # bütün desenler
ÇIKIŞ
    0 = şüpheli yok · 1 = ŞÜPHELİ VAR (0 tutan, dosya adı NAMLI desen)
"""
import ast
import glob
import io
import json
import os
import re
import sys

sys.stdout.reconfigure(encoding="utf-8")
KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
HEPSI = "--hepsi" in sys.argv

H = io.open(os.path.join(KOK, "index.html"), encoding="utf-8").read()

# Paketlenmiş kaynakların dosya adları (künye TEK OTORİTE)
_k = json.loads(io.open(os.path.join(KOK, "data", "paket_kunye.json"),
                        encoding="utf-8").read())
PAKETLI = {s["yol"] for p in _k["paketler"] for s in p["kaynak"]}
# "yerlesimler" gibi ÖNEK kümesi: bir desen bu öneklerden birini içeriyorsa
# ve 0 tutuyorsa, paketleme onu kör etmiş OLABİLİR.
ONEK = sorted({re.sub(r"[_\d].*$", "", os.path.basename(y)[:-3]) for y in PAKETLI})
ONEK = [o for o in ONEK if len(o) >= 2]

RE_ISLEV = {"findall", "search", "finditer", "match", "fullmatch", "compile", "sub", "split"}

# ─────────────────────────────────────────────────────────────────────────────
# BEYANLI MUAFLAR — tavan DEĞİL, ADLI LİSTE (ARAC-ODAK-BELIRSIZ ile aynı desen).
# Her satır GEREKÇELİ. Yeni bir kör desen doğarsa oter; buradakiler gizlemez.
# ─────────────────────────────────────────────────────────────────────────────
MUAF = {
    # Çözücünün KENDİ öz sınavı: "eski (regex) yol ne buluyordu" diye BİLEREK
    # kör deseni koşturur ve 0 görmeyi BEKLER. Burada 0, kusur değil KANIT.
    "arac/paket_coz.py": "öz sınavın YÖN-1 numunesi — 0 görmesi BEKLENEN",

    # TEK KULLANIMLIK UYGULAYICILAR: index.html'e betik etiketi EKLEMEK için
    # yazıldılar, işlerini 3 ve 15 Eylül'de yaptılar ve bir daha koşmayacaklar.
    # Aradıkları dosya (olaylar_p0051 · yerlesimler_anadolu_0914 ·
    # yerlesimler_p0037) ETİKETİYLE EKLENDİ, sonra paketlendi ⇒ desen artık 0
    # tutuyor. Bu bir KAPI değil, geçmişte koşmuş bir KALEM.
    # ⚠️ Ama bu sınıf yeniden koşturulursa SESSİZCE HİÇBİR ŞEY YAPAR —
    #    "etiket zaten var" sanır. Yeniden kullanılacaksa paket_coz'a bağlanır.
    "denetim/ARAC-BOZKIR-KAZAK-UYGULA-0915.py": "tek kullanımlık uygulayıcı, 15 Eyl'de koştu",
    "denetim/ARAC-NOKTA-UYGULA-0903.py": "tek kullanımlık uygulayıcı, 3 Eyl'de koştu",
}


def desenler(yol):
    """(satır, desen) — `re.<islev>(DESEN, …)` çağrılarının gerçek dizgeleri."""
    try:
        agac = ast.parse(io.open(yol, encoding="utf-8", errors="replace").read())
    except SyntaxError:
        return []
    cik = []
    for d in ast.walk(agac):
        if not isinstance(d, ast.Call) or not d.args:
            continue
        ad = (d.func.attr if isinstance(d.func, ast.Attribute)
              else d.func.id if isinstance(d.func, ast.Name) else None)
        if ad not in RE_ISLEV:
            continue
        a = d.args[0]
        if isinstance(a, ast.Constant) and isinstance(a.value, str):
            cik.append((a.lineno, a.value))
    return cik


def html_deseni(d):
    """Bu desen index.html'den DOSYA ADI çıkarmaya mı çalışıyor?"""
    return ("data/" in d or "src=" in d) and ".js" in d


def kor_mu(d):
    """0 tutuyor ve içinde PAKETLENMİŞ bir dosya öneki geçiyor mu?"""
    try:
        n = len(re.findall(d, H))
    except re.error:
        return None, None
    if n:
        return n, False
    # 0 tuttu. Paketlemeyle ilgili mi?
    suphe = any(o in d for o in ONEK)
    return 0, suphe


def main():
    print("=" * 76)
    print("index.html: %d bayt · data/*.js etiketi %d (%d'i paket) · paketli kaynak %d"
          % (len(H),
             len(re.findall(r'src="data/[^"?]*\.js', H)),
             len(re.findall(r'src="data/paket_\d+\.js', H)),
             len(PAKETLI)))
    print("paketlenmiş önekler: %s" % ", ".join(ONEK))
    print("=" * 76)

    dosyalar = sorted(glob.glob(os.path.join(KOK, "arac", "*.py"))
                      + glob.glob(os.path.join(KOK, "denetim", "*.py")))
    supheli, bakilan, toplam_desen = [], 0, 0
    for y in dosyalar:
        if os.path.basename(y) == os.path.basename(__file__):
            continue
        ds = [(ln, d) for ln, d in desenler(y) if html_deseni(d)]
        if not ds:
            continue
        # index.html'i gerçekten okuyor mu
        gov = io.open(y, encoding="utf-8", errors="replace").read()
        if "index.html" not in gov:
            continue
        bakilan += 1
        rel = os.path.relpath(y, KOK).replace("\\", "/")
        satirlar = []
        for ln, d in ds:
            toplam_desen += 1
            n, suphe = kor_mu(d)
            if n is None:
                satirlar.append(("?", ln, d, "regex derlenemedi"))
                continue
            if n == 0 and suphe:
                if rel in MUAF:
                    if HEPSI:
                        satirlar.append(("⚪", ln, d, "MUAF — %s" % MUAF[rel]))
                    continue
                supheli.append((rel, ln, d))
                satirlar.append(("\U0001F534", ln, d, "0 TUTTU + paketli önek"))
            elif HEPSI:
                satirlar.append(("\u2713" if n else "\u00b7", ln, d,
                                 "%d" % n if n else "0 (paketle ilgisiz)"))
        if satirlar:
            print("\n%s" % rel)
            for im, ln, d, not_ in satirlar:
                print("  %s :%-5d %-46s %s" % (im, ln, d[:46], not_))

    print("\n" + "=" * 76)
    print("bakılan araç: %d · incelenen desen: %d" % (bakilan, toplam_desen))
    if supheli:
        print("\U0001F534 ŞÜPHELİ (0 tutuyor VE paketlenmiş bir öneki adıyla arıyor): %d"
              % len(supheli))
        for rel, ln, d in supheli:
            print("   %s:%d   %s" % (rel, ln, d[:60]))
        print("\nÇARE: `arac/paket_coz.py` → index_kaynaklari() / index_esleyen().")
        print("      Paketi AÇAR ve boş küme için BAĞIRIR (PaketCozHatasi).")
        return 1
    print("\u2713 şüpheli desen yok — 0 tutan ve paketli bir öneki adıyla arayan desen YOK")
    print("  ⚠️ Bu 'bütün körlükler kapandı' DEMEZ: bu araç yalnız DOSYA ADINI")
    print("     desene YAZAN çağrıları görür. Adı değişkenden gelen bir arama")
    print("     bu taramanın DIŞINDADIR. (ölçülemedi ≠ yok ≠ temiz · D204)")
    return 0


if __name__ == "__main__":
    sys.exit(main())
