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


"""Oturum dokumlerinden GERCEK token tuketimini toplar.
Claude Code her asistan mesajina `usage` alani yazar; vekil degil OLCUM.
Hicbir seyi degistirmez, yalnizca okur."""
import json, os, glob, collections, datetime, sys

P = r"C:\Users\emrem\.claude\projects\C--Users-emrem-OneDrive-Desktop-TAR-H-CO-RAFYA-S-TES-"

top = collections.Counter()
gun = collections.defaultdict(collections.Counter)
model_sayac = collections.Counter()
oturum = collections.Counter()
satir_toplam = bozuk = usage_yok = 0

for yol in _evren_nobetcisi(sorted(glob.glob(os.path.join(P, "*.jsonl"))), os.path.join(P, "*.jsonl")):
    ad = os.path.basename(yol)[:8]
    with open(yol, encoding="utf-8", errors="replace") as f:
        for ln in f:
            satir_toplam += 1
            if '"usage"' not in ln:
                continue
            try:
                o = json.loads(ln)
            except Exception:
                bozuk += 1
                continue
            m = o.get("message") or {}
            u = m.get("usage") or o.get("usage")
            if not isinstance(u, dict):
                usage_yok += 1
                continue
            gi = int(u.get("input_tokens") or 0)
            go = int(u.get("output_tokens") or 0)
            cw = int(u.get("cache_creation_input_tokens") or 0)
            cr = int(u.get("cache_read_input_tokens") or 0)
            ts = (o.get("timestamp") or "")[:10]
            md = m.get("model") or o.get("model") or "?"
            for k, v in (("girdi", gi), ("cikti", go), ("onbellek_yaz", cw), ("onbellek_oku", cr)):
                top[k] += v
                gun[ts][k] += v
                oturum[ad] += v if k in ("cikti",) else 0
            model_sayac[md] += go
            top["cagri"] += 1

print("=== TOPLAM TOKEN (butun oturumlar, proje dizini) ===")
print("   islenen satir      : %,d".replace(",", ",") % satir_toplam if False else "  islenen satir      : {:,}".format(satir_toplam))
print("  API cagrisi         : {:,}".format(top["cagri"]))
print("  bozuk satir         : {:,}   usage cozulemeyen: {:,}".format(bozuk, usage_yok))
print()
print("  girdi (taze)        : {:>15,}".format(top["girdi"]))
print("  onbellek YAZMA      : {:>15,}".format(top["onbellek_yaz"]))
print("  onbellek OKUMA      : {:>15,}".format(top["onbellek_oku"]))
print("  CIKTI               : {:>15,}".format(top["cikti"]))
print("  ----------------------------------------")
tg = top["girdi"] + top["onbellek_yaz"] + top["onbellek_oku"]
print("  toplam GIRDI tarafi : {:>15,}".format(tg))
print("  GENEL TOPLAM        : {:>15,}".format(tg + top["cikti"]))
print()
print("=== GUNE GORE (timestamp'ten, dosya tarihinden DEGIL) ===")
print("%-12s %>0s" % ("gun", "") if False else "%-12s %14s %14s %14s %14s" % ("gun", "girdi", "onb.yaz", "onb.oku", "CIKTI"))
for d in sorted(gun):
    if not d:
        continue
    c = gun[d]
    print("%-12s %14s %14s %14s %14s" % (d, "{:,}".format(c["girdi"]), "{:,}".format(c["onbellek_yaz"]),
                                          "{:,}".format(c["onbellek_oku"]), "{:,}".format(c["cikti"])))
print()
print("=== MODELE GORE CIKTI TOKENI ===")
for m, v in model_sayac.most_common(10):
    print("  %-34s %14s" % (m, "{:,}".format(v)))
print()
print("=== EN COK CIKTI URETEN 10 OTURUM (dosya on eki) ===")
for a, v in oturum.most_common(10):
    print("  %-10s %14s" % (a, "{:,}".format(v)))
