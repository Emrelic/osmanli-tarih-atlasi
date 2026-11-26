# -*- coding: utf-8 -*-
"""KITA 13 · 0044 — Emre'nin "margin" ve "bakur" yazımları HANGİ ETİKET? (SALT OKUR)

🔴 AD TAHMİNİ YASAK (şartname). Emre'nin yazımının KOORDİNATI yok, yani
   3 km komşuluk taraması UYGULANAMAZ. Elde tek kanıt var: Emre bu adları
   KENDİ EKRAN GÖRÜNTÜSÜNDEN (H-0012-2.png) okudu. O görüntüde görünen
   etiketler aşağıda ELLE, görüntüden OKUNARAK listelendi.

Alet her yazım için görüntüdeki etiketleri iki bağımsız ölçütle sıralar:
   ① Levenshtein mesafesi (normalleştirilmiş, parantez öncesi ad)
   ② difflib oranı
⚠️ Bu bir EŞLEŞTİRME değil bir ADAY SIRALAMASIDIR. İkinci aday birinciye
   yakınsa hüküm "⚪ ölçülemedi — Emre'ye sorulacak"tır. (Dün: difflib
   0.80 eşiği Kiğı'yı Kigali'ye, Genç'i Gence'ye eşledi — D-ADYOK.)
"""
import os, sys, io, difflib, importlib.util

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8", errors="replace")
KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
_spec = importlib.util.spec_from_file_location(
    "n", os.path.join(KOK, "denetim", "ARAC-NORMAL-0903.py"))
_m = importlib.util.module_from_spec(_spec)
_spec.loader.exec_module(_m)
norm = _m.norm

# H-0012-2.png'de GÖRÜNEN etiketler (görüntüden okundu, 13 Eylül 2026)
ETIKETLER = [
    "Erzurum", "Iğdır", "Doğubayazıt", "Şerur (Sharur)", "Mâku", "Nahçıvan",
    "Çaldıran", "Erciş", "Bargiri (Muradiye)", "Özalp (Saray)", "Hoy",
    "Merend", "Van", "Kotur", "Bitlis", "Hoşap (Mahmudi)", "Selmâs (Dilman)",
    "Başkale", "Siirt", "Hasankeyf", "Bacirge (Esendere)",
    "Çölemerik (Hakkâri)", "Yüksekova (Gever)", "Urmiye", "Midyat", "Cizre",
    "Silopi", "Zaho", "Nusaybin", "Rāzhān", "Şemdinli (Şemdinni)", "Culfa",
    "Ordubad",
]
YAZIMLAR = ["margin", "bakur"]


def lev(a, b):
    p = list(range(len(b) + 1))
    for i, ca in enumerate(a, 1):
        c = [i]
        for j, cb in enumerate(b, 1):
            c.append(min(p[j] + 1, c[j - 1] + 1, p[j - 1] + (ca != cb)))
        p = c
    return p[-1]


def parcalar(e):
    # "Bargiri (Muradiye)" -> ["bargiri", "muradiye"]
    ic = e.replace(")", "").split("(")
    return [norm(x.strip()) for x in ic if x.strip()]


for y in YAZIMLAR:
    n = norm(y)
    satir = []
    for e in ETIKETLER:
        best = min(parcalar(e), key=lambda p: lev(n, p))
        satir.append((lev(n, best), -difflib.SequenceMatcher(None, n, best).ratio(),
                      e, best))
    satir.sort()
    print("=" * 70)
    print('Emre yazımı "%s"  — görüntüdeki etiketlere en yakın 6' % y)
    for d, r, e, p in satir[:6]:
        print("   lev %d · difflib %.2f · %-24s (karşılaştırılan: %s)" % (d, -r, e, p))
    fark = satir[1][0] - satir[0][0]
    print("   ⇒ 1. ile 2. aday arası Levenshtein farkı: %d  %s"
          % (fark, "(AYIRT EDİCİ DEĞİL — ⚪)" if fark <= 1 else "(ayırt edici)"))
