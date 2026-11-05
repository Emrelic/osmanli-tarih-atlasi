"""topla.py <sonuç.json> ... — D ADIMI parti sonuçlarını KASA'nın uygulayacağı iki dosyaya toplar.
  dadim_sonuc.json   bütün satırlar (yerleşim → satır listesi), partilerin birleşimi
  ONERILER.md        ONERI satırları (dosya:satır · şimdiki → önerilen · kaynak) + KAYNAKLI sayımı
Bayrak: KURAL — öneri atlasın bir kuralına dokunuyor (de jure / isg / tbmm-turkiye f); KASA uygulamadan önce Emre/koordinatör.
         ÇİFT-TDV — iki TDV maddesi çelişiyor. ÜLKE — kaynak yalnız ülke düzeyi (beyanlı yaklaşıklık).
Veriye yazmaz."""
import json, os, re, sys, collections

BURA = os.path.dirname(os.path.abspath(__file__))
ANA = os.path.join(BURA, "dadim_sonuc.json")
T = json.load(open(ANA, encoding="utf-8")) if os.path.exists(ANA) else {}
for yol in sys.argv[1:]:
    for ad, satirlar in json.load(open(yol, encoding="utf-8")).items():
        if not ad.startswith("_"):
            if ad in T and T[ad] != satirlar:
                print("UYARI: %s zaten var — eski %d satır yerine yeni %d satır (koordinatör notları yeniden işlenmeli)"
                      % (ad, len(T[ad]), len(satirlar)), file=sys.stderr)
            T[ad] = satirlar
json.dump(T, open(ANA, "w", encoding="utf-8"), ensure_ascii=False, indent=1)


def bayrak(r):
    m = json.dumps(r, ensure_ascii=False)
    b = []
    if re.search(r"KURAL|de jure|isg|işgal|tbmm-turkiye", m, re.I):
        b.append("KURAL")
    if re.search(r"iki TDV|TDV maddeleri? (birbiriyle )?çeliş|çelişiyor.*TDV", m, re.I):
        b.append("ÇİFT-TDV")
    if "ÜLKE DÜZEYİ" in m.upper() or "ülke düzeyi" in m:
        b.append("ÜLKE")
    return " ".join(b)


say = collections.Counter()
on = []
for ad, satirlar in T.items():
    for r in satirlar:
        h = r.get("hukum", "?")
        say[h] += 1
        if h == "ONERI":
            o = r.get("oneri") or {}
            sim = "%s %s → %s" % (r.get("d") or r.get("alan"), r.get("f"), r.get("t"))
            yeni = " ".join("%s=%s" % (k, v) for k, v in o.items() if v) or "(not'a bak)"
            on.append("| %s | %s | %s | %s | %s | %s | %s |" % (
                ad, r.get("dosya_satir"), sim, yeni, (r.get("kaynak") or "")[:110].replace("|", "/"),
                (r.get("not") or "")[:160].replace("|", "/").replace("\n", " "), bayrak(r)))
L = ["# D ADIMI — öneriler (KASA uygular; veri değiştirilmedi)", "",
     "Kaynak: `dadim_sonuc.json` (%d yerleşim). Sayım: %s." % (len(T), " · ".join("%s %d" % kv for kv in say.most_common())),
     "Bayraklar: **KURAL** atlas kuralına dokunur (Emre/koordinatör kararı) · **ÇİFT-TDV** iki TDV maddesi çelişir (ic_not beyanı) · **ÜLKE** ülke düzeyi kaynak.", "",
     "| yerleşim | dosya:satır | şimdiki | önerilen | kaynak | not | bayrak |", "|---|---|---|---|---|---|---|"] + on
open(os.path.join(BURA, "ONERILER.md"), "w", encoding="utf-8").write("\n".join(L) + "\n")
print(len(T), dict(say), "öneri", len(on))
