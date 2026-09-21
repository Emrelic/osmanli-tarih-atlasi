# -*- coding: utf-8 -*-
"""BTB sınavı — iki etiketli Dijkstra'nın `d2`si DOĞRU mu?

NİÇİN AYRI SINAV: motorun kendi içindeki `assert` yalnız BİRİNCİ etiketi
(`d1`/`sahip1`) `_kv_dijkstra`ya karşı sınıyor. İkinci etiketin (`d2`) hiçbir
karşılığı yok — ve "boş toprak bölüşümü ayarı"nın bütün hükmü `d1 + d2`
toplamından çıkıyor. Sınanmayan sayı, ölçüm değildir.

YÖNTEM: işlev dosyadan AST ile ÇEKİLİR (ikinci bir kopya YAZILMAZ —
`ARAC-MOTOR-NEHIR-0916.py` ile aynı usul), küçük yapay bir ızgarada koşturulur
ve KABA KUVVET referansla karşılaştırılır: her tohum için ayrı ayrı tek
kaynaklı Dijkstra koşulur, hücre başına mesafeler sıralanır, birinci ve
ikinci FARKLI tohum oradan okunur.

ÖNGÖRÜ (ölçümden ÖNCE yazıldı): üç sınavın üçü de geçer; `d2` bütün
hücrelerde kaba kuvvetle 1e-9'dan yakın çıkar. Geçmezse sebebi tek şeydir —
iki etiketli gevşetmede üçüncü tohumun budanması; o durumda `_koy` yanlış.

Koşu:  py denetim/ARAC-BTB-IKI-ETIKET-0921.py
"""
import ast
import io
import math
import heapq
import os
import sys

YOL = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))),
                   "arac", "uret_petek.py")


def cek(ad):
    """`uret_petek.py`den işlevi AST ile çek — gövdesi KOPYALANMAZ."""
    agac = ast.parse(io.open(YOL, encoding="utf-8").read())
    for d in agac.body:
        if isinstance(d, ast.FunctionDef) and d.name == ad:
            return d
    raise SystemExit("işlev bulunamadı: " + ad)


def kur(nx, ny, tohum, surt):
    """İşlevin ihtiyaç duyduğu küresel adları taşıyan bir ad alanı kur."""
    yon = ((1, 0), (-1, 0), (0, 1), (0, -1),
           (1, 1), (1, -1), (-1, 1), (-1, -1))
    ns = {
        "math": math, "_heapq": heapq,
        "_kvnx": nx, "_kvny": ny,
        "_kvkara": [1] * (nx * ny),
        "_kvtohum": {h: [i] for i, h in enumerate(tohum)},
        "_KVDY": 10.0, "_kvy0": 0.0, "KV_ADIM": 0.1,
        "_KV_YON": yon, "_KV_YS": len(yon),
        "YURUYUS_16": False,
        "_kv_ara_kara": lambda i, j, di, dj: True,
    }
    gov = cek("_kv_iki_etiket")
    exec(compile(ast.Module(body=[gov], type_ignores=[]), YOL, "exec"), ns)
    return ns["_kv_iki_etiket"], ns


def tek_kaynak(nx, ny, kok, surt, ns):
    """Kaba kuvvet referansı: TEK tohumdan Dijkstra — aynı kenar bedelleriyle."""
    yon = ns["_KV_YON"]
    dy, y0, adim = ns["_KVDY"], ns["_kvy0"], ns["KV_ADIM"]
    inf = float("inf")
    u = [inf] * (nx * ny)
    u[kok] = 0.0
    q = [(0.0, kok)]
    while q:
        d, h = heapq.heappop(q)
        if d > u[h]:
            continue
        j, i = divmod(h, nx)
        dx = dy * math.cos(math.radians(y0 + (j + 0.5) * adim))
        for di, dj in yon:
            a, b = i + di, j + dj
            if not (0 <= a < nx and 0 <= b < ny):
                continue
            k = b * nx + a
            nd = d + math.hypot(dx * di, dy * dj) * (surt[k] if surt else 1.0)
            if nd < u[k]:
                u[k] = nd
                heapq.heappush(q, (nd, k))
    return u


def sina(ad, nx, ny, tohum, surt):
    islev, ns = kur(nx, ny, tohum, surt)
    u1, s1, u2, s2 = islev(surt, None)
    ref = [tek_kaynak(nx, ny, h, surt, ns) for h in tohum]
    kotu1 = kotu2 = 0
    for k in range(nx * ny):
        siral = sorted((ref[t][k], t) for t in range(len(tohum)))
        if abs(siral[0][0] - u1[k]) > 1e-9:
            kotu1 += 1
        # ikinci FARKLI tohum = sıralamanın ikinci elemanı (etiketler ayrık)
        if abs(siral[1][0] - u2[k]) > 1e-9:
            kotu2 += 1
    print(f"  {ad}: hücre {nx * ny} · d1 sapması {kotu1} · d2 sapması {kotu2}"
          + ("  ✓" if not (kotu1 or kotu2) else "  🔴"))
    return not (kotu1 or kotu2)


def main():
    print("BTB — iki etiketli Dijkstra sınavı (öngörü: üçü de geçer)")
    tamam = True
    # ① düz ızgara, üç tohum — ikinci etiketin budanmadığını sorar
    tamam &= sina("düz · 3 tohum", 12, 8, [0, 11, 12 * 7 + 5], None)
    # ② sürtünmeli ızgara — bedel alanı düz değilken sıralama değişir
    s = [1.0 + ((i * 7 + 3) % 5) * 0.4 for i in range(14 * 9)]
    tamam &= sina("sürtünmeli · 4 tohum", 14, 9,
                  [0, 13, 14 * 8, 14 * 4 + 7], s)
    # ③ 🔴 ASIL TUZAK: iki tohum YAN YANA, üçüncü uzakta. Uzak tohum, yakın
    #    ikilinin yanındaki hücrelerde ÜÇÜNCÜ sıraya düşer; iki etiketli
    #    gevşetme onu orada budarsa kendi bölgesinde d2 YANLIŞ çıkar.
    tamam &= sina("bitişik ikili + uzak üçüncü", 16, 6,
                  [16 * 3 + 1, 16 * 3 + 2, 16 * 3 + 14], None)
    print("SONUÇ:", "TEMİZ" if tamam else "İHLAL")
    return 0 if tamam else 1


if __name__ == "__main__":
    sys.exit(main())
