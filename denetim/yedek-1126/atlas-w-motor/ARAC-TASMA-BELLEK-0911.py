# -*- coding: utf-8 -*-
"""TAŞMA ÖLÇÜM — bellek tavanı · animasyon yükü · nehir çapası.

🔴 AĞIR DEĞİL: en büyük tahsisi 100.000 öğelik bir liste (~3 MB), ve o da
   CPython nesne boyutlarını TAHMİN ETMEYİP ÖLÇMEK için. Izgara kurulmuyor.
"""
import math
import sys

sys.stdout.reconfigure(encoding="utf-8")

NX, NY = 7200, 2900
N = NX * NY                      # 20.880.000
KARA = 6_095_287
ERISILEN = 3_336_475
TOHUM = 3805
HUCRE_KM = 0.05 * 111.32


def ol_nesne():
    """CPython'un nesne boyutlarını ÖLÇ — ezberden yazma."""
    f = sys.getsizeof(1.5)
    i_kucuk = sys.getsizeof(7)
    i_buyuk = sys.getsizeof(4000)
    bos = sys.getsizeof([])
    l = [0.0] * 100000
    gosterici = (sys.getsizeof(l) - bos) / 100000.0
    del l
    return f, i_kucuk, i_buyuk, gosterici


def mb(b):
    return b / 1048576.0


def main():
    f, ik, ib, gp = ol_nesne()
    print("═" * 78)
    print("① BELLEK TAVANI — poligonlaştırma YAPILABİLİR Mİ?")
    print("═" * 78)
    print("  CPython nesne boyutları (ÖLÇÜLDÜ, ezberlenmedi):")
    print("     float %d B · küçük int %d B · büyük int %d B · liste göstericisi %.1f B"
          % (f, ik, ib, gp))
    print()
    print("  🔴 ASIL TEPE POLİGONLAŞTIRMADA DEĞİL, DIJKSTRA'NIN PYTHON LİSTELERİNDE:")
    uzak = N * (gp + f)
    sahip = N * gp                       # aynı int nesnesi yeniden kullanılır
    print("     uzak  = [inf]*%s  ·  ayrı float atandıkça  %.0f B/öğe → %,.0f MB"
          .replace(",.0f", ".0f") % ("{:,}".format(N), gp + f, mb(uzak)))
    print("     sahip = [-1]*%s   ·  gösterici yeniden kullanılır → %.0f MB"
          % ("{:,}".format(N), mb(sahip)))
    print("     bir Dijkstra çağrısı ≈ %.0f MB (+ yığın kuyruğu)" % mb(uzak + sahip))
    print("     🔴 A/B ÖLÇÜMÜ İKİNCİ BİR ÇİFT AÇIYOR (:2299) ⇒ tepe ≈ %.1f GB"
          % (mb(2 * (uzak + sahip)) / 1024))
    print("     ⇒ koordinatörün gözlediği 3,3-4,2 GB ile TUTARLI (üstüne DEM,"
          " kara maskesi, PETEK_D geometrisi biniyor).")
    print()
    print("  POLİGONLAŞTIRMANIN KENDİ MALİYETİ — çok daha ucuz:")
    for ad, byte in (("int32 raster (sahip)", 4), ("uint8 maske", 1)):
        print("     %-24s %s hücre × %d B = %6.1f MB" % (ad, "{:,}".format(N), byte, mb(N * byte)))
    print("     rasterio.features.shapes() AKIŞ üretir (generator) — tüm poligonları")
    print("     aynı anda bellekte tutmak ZORUNLU DEĞİL.")
    print("     ⇒ HÜKÜM: poligonlaştırma bu makinede YAPILABİLİR; yapılamayan şey")
    print("       onu BESLEYEN Dijkstra. Darboğaz poligonlaştırmada DEĞİL.")
    print()
    print("  🟢 VE UCUZ BİR ÇARE VAR (ölçüm, tasarım değil): Python listesi yerine")
    print("     array('f')/array('i') kullanılsa:")
    dizi = N * 4 * 2
    print("     %s hücre × 4 B × 2 dizi = %.0f MB — yani %.0f KAT daha az."
          % ("{:,}".format(N), mb(dizi), (uzak + sahip) / dizi))

    print()
    print("═" * 78)
    print("③ ANİMASYON YÜKÜ — düzeltilmiş tabanla")
    print("═" * 78)
    print("  Kadranın KENDİSİ: hücre başına tek karşılaştırma (_kvuzak ≤ T).")
    print("  Bedel, alanı TARAYICIYA TAŞIMAKTA:")
    for ad, b_uzak, b_sahip in (("ham float32+int32", 4, 4),
                                ("nicemlenmiş uint16+uint16", 2, 2)):
        tam = N * (b_uzak + b_sahip)
        eri = ERISILEN * (b_uzak + b_sahip)
        print("     %-26s tüm ızgara %7.1f MB · yalnız erişilen %6.1f MB"
              % (ad, mb(tam), mb(eri)))
    print("     ⚪ gzip/brotli oranı ÖLÇÜLMEDİ — sıkıştırmayı koşturmadım"
          " (makine dar). Uzamsal tutarlılık yüksek olduğu için kazanç BEKLERİM,")
    print("       ama BEKLENTİ bir ölçüm değildir.")
    print()
    print("  KADRANIN 10 km DURAĞI:")
    for t in (10, 30, 50, 70, 100, 125, 150, 200, 250, 300):
        h = t / HUCRE_KM
        im = "🔴 KABA" if h < 3 else ("🟡" if h < 6 else "🟢")
        print("     %3d km → %5.1f hücre  %s" % (t, h, im))
    print("     ⇒ 10 km durağı 1,8 hücre: halka 1-2 hücre kalınlığında, KARE görünür.")
    print("     Daha ince ızgara 0,01° (≈1,11 km) olsaydı: %s hücre = %.0f× "
          % ("{:,}".format(int(N * 25)), 25.0))
    print("       ⇒ Dijkstra belleği %.1f GB'a çıkar — bu makinede İMKÂNSIZ."
          % (mb(25 * (uzak + sahip)) / 1024))

    print()
    print("═" * 78)
    print("④ NEHİR ÇAPASI — depo içi, ölçülebilir")
    print("═" * 78)
    print("  🟢 ÇAPA BULUNDU (uydurulmadı): uret_petek.py:1221")
    print("     dogal_hatta_yasla(cs, nehir_mes=0.30, sirt_mes=0.35)")
    print("     :1207 yorumu: 'yaslama yarıçapı nehir için 0.30 derece ≈ 33 km'")
    for ad, derece in (("nehir", 0.30), ("sırt", 0.35)):
        R = derece * 111.32
        delta = 2 * R
        carpan = 1.0 + delta / HUCRE_KM
        print("     %-6s yarıçap %.2f° = %5.1f km → Δ = 2R = %5.1f km"
              " → hücre çarpanı = 1 + Δ/%.2f = %5.2f"
              % (ad, derece, R, delta, HUCRE_KM, carpan))
    print()
    print("  TÜRETME (açıkça yazıyorum — ÇAPA ölçüm, ÇEVRİM bir VARSAYIM):")
    print("     Bugün: sınır nehre R km içindeyse nehre YASLANIR.")
    print("     Maliyet modelinde: nehri geçmek Δ ek bedel getirirse, eşit-maliyet")
    print("     çizgisi nehre doğru Δ/2 kayar ⇒ 'yaslanma yarıçapı R' ≡ 'Δ = 2R'.")
    print("     🔴 Bu ÇEVRİM bir MODEL VARSAYIMIDIR, ölçüm değil. Çürütülebilir:")
    print("        gerçek koşuda çarpan konup sınırın nehre yaslanma oranı")
    print("        bugünküyle karşılaştırılır. O koşu YAPILMADI.")
    print()
    print("  ⚠️ ÇAPRAZ SINAV — çarpan makul mü?")
    print("     motorun en pahalı eğim hücresi: sürtünme 11,03 (Annapurna)")
    print("     türetilen nehir çarpanı %.2f · sırt çarpanı %.2f"
          % (1 + 2 * 0.30 * 111.32 / HUCRE_KM, 1 + 2 * 0.35 * 111.32 / HUCRE_KM))
    print("     ⇒ AYNI MERTEBE. Nehir, Himalaya'dan biraz pahalı çıkıyor —")
    print("       savunulabilir (5,5 km'lik bir hücrede geniş nehir mutlak engel),")
    print("       ama BU BİR YARGI, ölçüm değil.")
    print()
    print("  ⚪ BOĞAZ/GEÇİT: ÖLÇÜLEMEDİ — ve sebebi YAPISAL:")
    print("     _kvkara YALNIZ karayı geçiriyor (:2256 'if not _kvkara[k]: continue').")
    print("     Su hücresi hiç komşu sayılmıyor ⇒ 'bedelle karşıya geçmek' bugün")
    print("     İFADE EDİLEMİYOR. Çapa aramak anlamsız: önce modelde bir yer açılmalı.")


if __name__ == "__main__":
    main()
