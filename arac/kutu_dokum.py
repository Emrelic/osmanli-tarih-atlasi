# -*- coding: utf-8 -*-
"""KUTU DÖKÜMÜ — bütün hata paketlerinin tek envanteri.

Emre, 18 Ağustos 2026: *"bu maddelerin hepsini çözelim, bu paketlerde
yapılmamış hiçbir şey bırakma. bazı maddeler bayatlamış sonradan
halledilmiş olabilir, bunun bilincinde olarak bakman lazım."*

281 maddeyi tek tek okumak yerine BİR dökümde toplar: paket · madde ·
damga · hüküm · görsel · başlık. Sonra sınıflandırma bu döküm üzerinde
yapılır, kutunun içinde gezinerek değil.

🔴 BAYATLIK ÖLÇÜSÜ — `CLAUDE.md §11`: "bir şikâyet, şikâyet edilen
şeyden daha hızlı bayatlar." İki damga yan yana konur:
    şikâyetin damgası   (PARTI.json)
    hükmün damgası      (CEVAP.json cevap_tarihi)
Ve `--git` verilirse: şikâyetten SONRA atılmış commit sayısı da basılır,
yani "bu iş arada yapılmış olabilir mi" sorusu ölçülebilir olur.

    py arac/kutu_dokum.py                    # özet
    py arac/kutu_dokum.py --acik             # yalnız açık maddeler
    py arac/kutu_dokum.py --paket 0021       # tek paket, tam metin
    py arac/kutu_dokum.py --yaz <yol>        # dökümü dosyaya yaz
"""
import argparse
import io
import json
import os
import subprocess
import sys

sys.stdout.reconfigure(encoding="utf-8", errors="replace")

KUTU = r"C:\Users\emrem\OneDrive\Desktop\ClaudEmre\kutu\giden"
ATLAS = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

# CEVAP.json'daki hüküm kodları — KUTU.md'nin kendi sözlüğü
KAPALI = {"cozuldu", "zaten-dogru", "gecersiz", "tekrar"}
SIMGE = {"cozuldu": "✅", "zaten-dogru": "🟢", "gecersiz": "⚪",
         "tekrar": "🔁", "olculecek": "🟡", "sirada": "🔵",
         "senin-kararin": "🔴", None: "⬜"}


def oku(paket):
    kok = os.path.join(KUTU, paket)
    p = os.path.join(kok, "PARTI.json")
    if not os.path.exists(p):
        return None
    parti = json.load(io.open(p, encoding="utf-8"))
    c = os.path.join(kok, "CEVAP.json")
    cevap = json.load(io.open(c, encoding="utf-8")) if os.path.exists(c) else {}
    hk = cevap.get("maddeler", {})
    out = []
    for m in parti.get("maddeler", []):
        h = hk.get(m["no"], {})
        out.append({
            "paket": paket,
            "no": m["no"],
            "damga": parti.get("damga", "?"),
            "baslik": (m.get("baslik") or "").strip(),
            "metin": (m.get("metin") or "").strip(),
            "gorsel": len(m.get("gorseller") or []),
            "hukum": h.get("hukum"),
            "not": (h.get("not") or "").strip(),
        })
    return {"damga": parti.get("damga", "?"),
            "cevap_tarihi": cevap.get("cevap_tarihi"),
            "maddeler": out}


def git_sonra(damga):
    """Şikâyet damgasından SONRA atılmış commit sayısı — bayatlık vekili."""
    try:
        r = subprocess.run(["git", "-C", ATLAS, "log", "--oneline",
                            f"--since={damga}"], capture_output=True,
                           text=True, encoding="utf-8", errors="replace")
        return len([l for l in r.stdout.splitlines() if l.strip()])
    except Exception:                                       # noqa: BLE001
        return -1


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--acik", action="store_true")
    ap.add_argument("--paket")
    ap.add_argument("--git", action="store_true")
    ap.add_argument("--yaz")
    a = ap.parse_args()

    paketler = sorted(d for d in os.listdir(KUTU)
                      if d.startswith("parti-") and
                      os.path.isdir(os.path.join(KUTU, d)))
    if a.paket:
        paketler = [p for p in paketler if a.paket in p]

    satir = []
    toplam = {}
    for p in paketler:
        v = oku(p)
        if not v:
            continue
        say = {}
        for m in v["maddeler"]:
            say[m["hukum"]] = say.get(m["hukum"], 0) + 1
            toplam[m["hukum"]] = toplam.get(m["hukum"], 0) + 1
            acik = m["hukum"] not in KAPALI
            if a.acik and not acik:
                continue
            satir.append(m)
        kapali = sum(n for h, n in say.items() if h in KAPALI)
        ek = f" · commit sonrası {git_sonra(v['damga'])}" if a.git else ""
        print(f"{p:26s} {v['damga'][:16]:17s} "
              f"{len(v['maddeler']):3d} madde · KAPALI {kapali:3d} · "
              f"AÇIK {len(v['maddeler']) - kapali:3d}"
              f"{'  🔴 CEVAP.json YOK' if v['cevap_tarihi'] is None else ''}{ek}")

    print("\n" + "=" * 78)
    tk = sum(n for h, n in toplam.items() if h in KAPALI)
    print(f"TOPLAM {sum(toplam.values())} madde · KAPALI {tk} · "
          f"AÇIK {sum(toplam.values()) - tk}")
    for h, n in sorted(toplam.items(), key=lambda t: -t[1]):
        print(f"   {SIMGE.get(h, '?')} {str(h or 'HÜKÜMSÜZ'):14s} {n:4d}")

    if a.paket or a.acik:
        print("\n" + "=" * 78)
        for m in satir:
            print(f"\n{SIMGE.get(m['hukum'], '?')} {m['paket']}/{m['no']}"
                  f"  [{m['gorsel']} görsel]  {m['damga'][:16]}")
            print(f"   {m['metin'][:400]}")
            if m["not"]:
                print(f"   ── önceki hüküm: {m['not'][:200]}")

    if a.yaz:
        with io.open(a.yaz, "w", encoding="utf-8") as f:
            json.dump(satir, f, ensure_ascii=False, indent=1)
        print(f"\ndöküm yazıldı: {a.yaz}  ({len(satir)} madde)")


if __name__ == "__main__":
    main()
