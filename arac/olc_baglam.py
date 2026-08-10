# -*- coding: utf-8 -*-
# ═══════════════════════════════════════════════════════════════════════
# 🔴 BU ALET DEPONUN DIŞINI OKUR — ve boş evreni SESSİZCE geçebilir.
#
# Okuduğu yol `~/.claude/projects/<proje-yolundan-türetilmiş>/*.jsonl`;
# depoda DEĞİL, `.gitignore`da DEĞİL, makineye ÖZEL ve adı proje yolundan
# üretiliyor. Dolayısıyla:
#   · başka bir makinede    → dosya yok → glob BOŞ liste → sessizce 0
#   · proje taşınır/yeniden adlandırılırsa → yine sessizce 0
#   · bir kapıya bağlanırsa → "temiz" diye rapor eder
# ⇒ Aşağıdaki nöbetçi tam bunun için: EVREN BOŞSA GÜRÜLTÜLÜ ÖLÜR.
#   `C13`in geçme yolu: kusur yokken temiz demeli, ama evren boşken
#   TEMİZ DEMEMELİ.
# 📌 Bildiren: KAYNAK PLANLAMACISI, kapanış mesajında — plana yazmamıştı,
#    "sende kalan bilgi kurtarılamaz" kuralı gereği son anda aktardı.
# ═══════════════════════════════════════════════════════════════════════
def _evren_nobetcisi(dosyalar, yol):
    """Evren boşsa GÜRÜLTÜLÜ öl. Sessiz sıfır, yanlış 'temiz'in kaynağıdır."""
    if not dosyalar:
        import sys as _s
        print("🔴 DUR — oturum dökümü BULUNAMADI:", yol)
        print("   Bu alet `~/.claude/projects/` altını okur ve o dizin")
        print("   MAKİNEYE ÖZELDİR. Başka bir makinedeysen ya da proje")
        print("   klasörü taşındıysa bu normaldir — ama SONUÇ ÜRETİLEMEZ.")
        print("   ⇒ 'temiz' değil, ÖLÇÜLEMEDİ. Çıkış kodu 1.")
        _s.exit(1)
    return dosyalar


"""Baglamin oturum icinde nasil buyudugunu olcer: cagri sirasina gore
onbellek-okuma egrisi + oturum basi maliyet. Salt okuma."""
import json, os, glob, collections, statistics

P = r"C:\Users\emrem\.claude\projects\C--Users-emrem-OneDrive-Desktop-TAR-H-CO-RAFYA-S-TES-"

kova = collections.defaultdict(list)          # cagri araligi -> onbellek okuma listesi
oturum = {}                                    # dosya -> (cagri, toplam_esdeger, tepe_cr)

for yol in _evren_nobetcisi(sorted(glob.glob(os.path.join(P, "*.jsonl"))), os.path.join(P, "*.jsonl")):
    ad = os.path.basename(yol)[:8]
    i = 0
    esd = 0.0
    tepe = 0
    with open(yol, encoding="utf-8", errors="replace") as f:
        for ln in f:
            if '"usage"' not in ln:
                continue
            try:
                o = json.loads(ln)
            except Exception:
                continue
            m = o.get("message") or {}
            u = m.get("usage") or o.get("usage")
            if not isinstance(u, dict):
                continue
            cr = int(u.get("cache_read_input_tokens") or 0)
            cw = int(u.get("cache_creation_input_tokens") or 0)
            go = int(u.get("output_tokens") or 0)
            gi = int(u.get("input_tokens") or 0)
            i += 1
            esd += gi + cw * 2.0 + cr * 0.1 + go * 5.0
            tepe = max(tepe, cr + cw)
            for ust, et in ((10, "  1-10"), (25, " 11-25"), (50, " 26-50"),
                            (100, " 51-100"), (200, "101-200"), (400, "201-400"),
                            (10**9, "  400+")):
                if i <= ust:
                    kova[et].append(cr)
                    break
    if i:
        oturum[ad] = (i, esd, tepe)

print("=== BAGLAM OTURUM ICINDE NASIL BUYUYOR ===")
print("%9s %8s %14s %14s" % ("cagri no", "adet", "ORTALAMA cr", "MEDYAN cr"))
for et in ("  1-10", " 11-25", " 26-50", " 51-100", "101-200", "201-400", "  400+"):
    v = kova.get(et)
    if not v:
        continue
    print("%9s %8s %14s %14s" % (et, f"{len(v):,}",
                                 f"{statistics.mean(v):,.0f}", f"{statistics.median(v):,.0f}"))
print()

n = [c for c, _, _ in oturum.values()]
e = [x for _, x, _ in oturum.values()]
t = [x for _, _, x in oturum.values()]
print("=== OTURUM BASI ===")
print("  oturum sayisi        : %d" % len(oturum))
print("  cagri/oturum  medyan : %.0f   ortalama %.0f   en buyuk %d" % (statistics.median(n), statistics.mean(n), max(n)))
print("  esdeger/oturum medyan: %s   ortalama %s" % (f"{statistics.median(e):,.0f}", f"{statistics.mean(e):,.0f}"))
print("  TEPE baglam   medyan : %s   en buyuk %s" % (f"{statistics.median(t):,.0f}", f"{max(t):,.0f}"))
print()

print("=== EN PAHALI 8 OTURUM (girdi-esdegeri) ===")
for ad, (c, x, tp) in sorted(oturum.items(), key=lambda k: -k[1][1])[:8]:
    print("  %-10s %6d cagri  %16s esdeger  tepe baglam %9s" % (ad, c, f"{x:,.0f}", f"{tp:,}"))
top = sum(e)
ilk8 = sum(x for _, x, _ in sorted(oturum.values(), key=lambda k: -k[1])[:8])
print("  ilk 8 oturum = butun tuketimin %%%.1f'i" % (100 * ilk8 / top))
