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


"""Token tuketimini MODELE ve HAFTAYA gore ayirir, resmi carpanlarla
'girdi-esdegeri' ve dolar karsiligi hesaplar. Salt okuma."""
import json, os, glob, collections

P = r"C:\Users\emrem\.claude\projects\C--Users-emrem-OneDrive-Desktop-TAR-H-CO-RAFYA-S-TES-"

# Resmi fiyatlar ($/MTok) - claude-api beceri dosyasindan, 2026-06-24 damgali
# 🔴 FİYAT TABLOSU ELLE KOPYALANDI — kendi yaşını söylemesi ŞART.
# Fiyat değişirse bu alet YİNE çalışır, YİNE sayı basar, ve sayı YANLIŞ olur.
# `CLAUDE.md`nin "bayat satır" ailesi — ama bir betiğin İÇİNDE, yani
# `durum_tablosu.py` gibi bir üreteç bile göremez.
FIYAT_DAMGASI = "2026-06-24"   # kaynak: claude-api becerisi fiyat tablosu
FIY = {
    "claude-opus-5":             {"in": 5.0,  "out": 25.0},
    "claude-sonnet-5":           {"in": 3.0,  "out": 15.0},   # tanitim 2.0/10.0 (2026-08-31'e kadar)
    "claude-fable-5":            {"in": 10.0, "out": 50.0},
    "claude-haiku-4-5-20251001": {"in": 1.0,  "out": 5.0},
}
CARP_ONBELLEK_YAZ_1S = 2.00   # 1 saatlik TTL
CARP_ONBELLEK_YAZ_5D = 1.25   # 5 dakikalik TTL
CARP_ONBELLEK_OKU    = 0.10

model = collections.defaultdict(collections.Counter)
gun = collections.defaultdict(collections.Counter)

for yol in _evren_nobetcisi(sorted(glob.glob(os.path.join(P, "*.jsonl"))), os.path.join(P, "*.jsonl")):
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
            md = m.get("model") or o.get("model") or "?"
            ts = (o.get("timestamp") or "")[:10]
            d = {"gi": int(u.get("input_tokens") or 0),
                 "cw": int(u.get("cache_creation_input_tokens") or 0),
                 "cr": int(u.get("cache_read_input_tokens") or 0),
                 "go": int(u.get("output_tokens") or 0)}
            for k, v in d.items():
                model[md][k] += v
                gun[ts][k] += v
            model[md]["n"] += 1
            gun[ts]["n"] += 1


def dolar(md, c, yaz_carp):
    f = FIY.get(md)
    if not f:
        return None
    return (c["gi"] * f["in"]
            + c["cw"] * f["in"] * yaz_carp
            + c["cr"] * f["in"] * CARP_ONBELLEK_OKU
            + c["go"] * f["out"]) / 1_000_000


print("=== MODELE GORE (token) ===")
print("%-28s %7s %14s %14s %16s %14s" % ("model", "cagri", "girdi", "onb.YAZ", "onb.OKU", "CIKTI"))
top = collections.Counter()
for md, c in sorted(model.items(), key=lambda x: -x[1]["cr"]):
    print("%-28s %7s %14s %14s %16s %14s" % (
        md[:28], f"{c['n']:,}", f"{c['gi']:,}", f"{c['cw']:,}", f"{c['cr']:,}", f"{c['go']:,}"))
    for k in ("n", "gi", "cw", "cr", "go"):
        top[k] += c[k]
print("%-28s %7s %14s %14s %16s %14s" % (
    "TOPLAM", f"{top['n']:,}", f"{top['gi']:,}", f"{top['cw']:,}", f"{top['cr']:,}", f"{top['go']:,}"))
print()

for etiket, yc in (("1 SAATLIK TTL (bu oturum)", CARP_ONBELLEK_YAZ_1S),
                   ("5 DAKIKALIK TTL (alt sinir)", CARP_ONBELLEK_YAZ_5D)):
    print("=== DOLAR KARSILIGI - %s ===" % etiket)
    t = 0.0
    bil = True
    for md, c in sorted(model.items(), key=lambda x: -x[1]["cr"]):
        d = dolar(md, c, yc)
        if d is None:
            if c["n"]:
                bil = False
                print("  %-28s FIYATI BILINMIYOR (cagri %s)" % (md[:28], f"{c['n']:,}"))
            continue
        t += d
        print("  %-28s $%12s" % (md[:28], f"{d:,.0f}"))
    print("  %-28s $%12s%s" % ("TOPLAM", f"{t:,.0f}", "" if bil else "   (eksik: fiyati bilinmeyen model var)"))
    print()

print("=== PAY DAGILIMI (girdi-esdegeri token, 1 saatlik TTL) ===")
esd = {"taze girdi": top["gi"] * 1.0,
       "onbellek YAZMA": top["cw"] * CARP_ONBELLEK_YAZ_1S,
       "onbellek OKUMA": top["cr"] * CARP_ONBELLEK_OKU,
       "CIKTI": top["go"] * 5.0}
tt = sum(esd.values())
for k, v in sorted(esd.items(), key=lambda x: -x[1]):
    print("  %-16s %16s  %5.1f%%" % (k, f"{v:,.0f}", 100 * v / tt))
print("  %-16s %16s" % ("TOPLAM", f"{tt:,.0f}"))
print("  BAGLAM (yaz+oku) = %.1f%%   URETILEN IS (cikti) = %.1f%%"
      % (100 * (esd["onbellek YAZMA"] + esd["onbellek OKUMA"]) / tt, 100 * esd["CIKTI"] / tt))
print()

print("=== BU HAFTA (Persembe 6 Agustos resetinden beri) ===")
h = collections.Counter()
for d in ("2026-08-06", "2026-08-07", "2026-08-08", "2026-08-09", "2026-08-10"):
    for k in ("n", "gi", "cw", "cr", "go"):
        h[k] += gun[d][k]
print("  cagri %s · girdi %s · onb.yaz %s · onb.oku %s · cikti %s"
      % (f"{h['n']:,}", f"{h['gi']:,}", f"{h['cw']:,}", f"{h['cr']:,}", f"{h['go']:,}"))
he = h["gi"] + h["cw"] * CARP_ONBELLEK_YAZ_1S + h["cr"] * CARP_ONBELLEK_OKU + h["go"] * 5.0
print("  girdi-esdegeri: %s  (butun donemin %%%.1f'i)" % (f"{he:,.0f}", 100 * he / tt))
print("  Emre beyani %%59 dolu ise  =>  haftalik tavan ~%s girdi-esdegeri" % f"{he/0.59:,.0f}")
print("  kalan %%41                 =>  ~%s girdi-esdegeri" % f"{he/0.59*0.41:,.0f}")
