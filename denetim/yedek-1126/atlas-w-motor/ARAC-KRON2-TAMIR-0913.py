# -*- coding: utf-8 -*-
"""PAKET-KRON2 — YİNELENEN iç not anahtarı onarımı (ARAC-KRON2-UYGULA'nın ilk sürüm kusuru).

py denetim/ARAC-KRON2-TAMIR-0913.py [--uygula] dosya.js [dosya.js ...]

Bir madde nesnesinde aynı `ic_not_<alan>` anahtarı 2+ kez geçiyorsa (JS'de yalnız SONUNCUSU
yaşar, öncekiler SESSİZCE kaybolur) değerler sırayla " · " ile TEK anahtarda birleştirilir,
fazlalık anahtarlar silinir. Hiçbir metin atılmaz. --uygula yoksa KURU KOŞU (yalnız sayar).
"""
import io, os, re, sys
# stdout'u uygulayıcı modülü sarıyor — burada TEKRAR SARILMAZ (çift sarma dosyayı kapatır)
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import importlib.util
_s = importlib.util.spec_from_file_location("u", os.path.join(os.path.dirname(os.path.abspath(__file__)), "ARAC-KRON2-UYGULA-0913.py"))
U = importlib.util.module_from_spec(_s); _s.loader.exec_module(U)
KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))


def tum_ic_not(metin, bas, son, dizgeler):
    """Nesnenin doğrudan anahtarları arasındaki BÜTÜN ic_not_* geçişleri: (ad, virgul_bas, dizge_bas, dizge_son)."""
    ic = [d for d in dizgeler if bas < d[0] < son]
    icset = {d[0]: d for d in ic}
    _, nes = U.tokenlar(metin[bas:son])
    alt = [(a + bas, b + bas) for a, b in nes if a != 0]
    out = []
    for m in re.finditer(r'(,\s*)(?:"(ic_not_\w+)"|(?<![\w"])(ic_not_\w+))\s*:\s*(?=")', metin[bas:son]):
        kb = bas + m.start(2) if m.group(2) else bas + m.start(3)
        if any((a < kb < b) or (a == kb and not m.group(2)) for a, b in ic) or any(a < kb < b for a, b in alt):
            continue
        ds = bas + m.end()
        if ds not in icset:
            continue
        out.append((m.group(2) or m.group(3), bas + m.start(), ds, icset[ds][1]))
    return out


def main():
    a = sys.argv[1:]
    uygula = "--uygula" in a
    dosyalar = [x for x in a if x != "--uygula"]
    toplam = 0
    for yol in dosyalar:
        tam = os.path.join(KOK, yol)
        metin = io.open(tam, encoding="utf-8", newline="").read()
        dizgeler, nesneler = U.tokenlar(metin)
        islemler = []
        for x, y in nesneler:
            gecis = tum_ic_not(metin, x, y, dizgeler)
            gruplar = {}
            for g in gecis:
                gruplar.setdefault(g[0], []).append(g)
            for ad, gs in gruplar.items():
                if len(gs) < 2:
                    continue
                degerler = [U.coz(metin[g[2]:g[3]]) for g in gs]
                ilk = gs[0]
                islemler.append((ilk[2], ilk[3], U.kodla(" · ".join(degerler))))
                for g in gs[1:]:
                    islemler.append((g[1], g[3], ""))
                toplam += 1
                print(f"  {yol}: {ad} ×{len(gs)} birleşti")
        for bas, son, yeni in sorted(islemler, reverse=True):
            metin = metin[:bas] + yeni + metin[son:]
        if islemler and uygula:
            io.open(tam, "w", encoding="utf-8", newline="").write(metin)
    print(("UYGULANDI" if uygula else "KURU KOŞU"), "yinelenen anahtar grubu:", toplam)


if __name__ == "__main__":
    main()
