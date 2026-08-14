# -*- coding: utf-8 -*-
"""yukseklik.py — `ALTYAPI ①`in BEKLEYEN AYAĞI. Bugün veri YOK.

🔴 BU BETİK BUGÜN HİÇBİR ŞEY HESAPLAMAZ ve bunu **gürültüyle** söyler.
Sebebi tek cümle: **yükseklik verisi bu depoda yoktur** ve sahte bir
katman üretmek, motorun *"dağ engeldir"* iddiasını **sınanmış gibi**
gösterirdi.

    py arac/yukseklik.py            durum raporu (veri var mı, ne eksik)

────────────────────────────────────────────────────────────────────────
NİÇİN GEREKLİ

`maliyet.py` (cost-distance prototipi) bugün üç katmanla çalışıyor:
kıyı · göl · nehir. Sürtünmenin **asıl** kaynağı olan eğim yok. Ölçüldü
(`ALTYAPI-DORT-MADDE §①`, 11 Ağustos):

    🔴 YOK   yükseklik / eğim     "dağ" kodda HİÇ GEÇMİYOR
    🔴 YOK   kanyon · yarık       kodda HİÇ GEÇMİYOR
    🔴 YOK   plato                kodda HİÇ GEÇMİYOR
    🔴 YOK   vahşi orman · bataklık KATMANI

⇒ Zincir `④ ← ③ ← ② ← ①` ve **en alttaki madde budur.** Ama kalan işi
token değil **internet kotası ve disk** — yani bir OTURUMUN değil
KULLANICININ kararı.

────────────────────────────────────────────────────────────────────────
NE İNDİRİLECEK — üç aday, üçü de kamu malı / açık lisans

  ① GMTED2010            USGS/NGA · 30 arc-sn (~1 km) · kamu malı
                         Atlas penceresi için kırpılmış hâli ~300-600 MB
                         🟢 Amacımıza en uygun: kara topografyası, 1 km
  ② ETOPO 2022           NOAA · 60/30/15 arc-sn · kamu malı
                         Batimetri de içerir (bize gerekmiyor — deniz
                         zaten sonsuz sürtünme). 30" küresel ~1,8 GB.
  ③ SRTM 90 m            yalnız 60°K'ye kadar · atlasın kuzeyini
                         KAPSAMAZ (Sibirya, İskandinavya) ⇒ TEK BAŞINA
                         YETMEZ

📌 Karar ölçütü çözünürlük değil KAPSAM: ③ tek başına elenir, çünkü
atlasın penceresi 82°K'ye çıkıyor.

⚠️ İNDİRME BU BETİĞİN İŞİ DEĞİL ve bir oturum kendi başına yapmaz —
kullanıcının kotası ve diski söz konusudur. Emre onay verince indirilir.

────────────────────────────────────────────────────────────────────────
GELDİĞİNDE NEREYE — ve motor onu nasıl görecek

    veri-kaynak/yukseklik/            <- dizin (bugün YOK)
        <ad>.tif ya da <ad>.vrt       kırpılmış raster
        KAYNAK.md                     indirme adresi · lisans · tarih

`maliyet.py` tek satırla açılır:
    YUKSEKLIK_AGIRLIK = 0.0   →   ölçülerek belirlenecek bir değer

⚠️ Ve o değer **UYDURULMAYACAK.** `ALTYAPI §1.2b`de yazılı vaka: ağırlık
tablosu bir kez uydurulmuş, ölçüm onu değiştirmişti. Eğim çarpanı da
aynı yolu izleyecek — bilinen bir güzergâh (menzil hattı) üzerinde
ölçülüp ayarlanacak. `data/koridor.js`teki 22 kenarın **gerçek uzunluğu
ölçülmüş** durumda; sınav malzemesi hazır.
"""
import os
import sys

sys.stdout.reconfigure(encoding="utf-8", errors="replace")
KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DIZIN = os.path.join(KOK, "veri-kaynak", "yukseklik")


def durum():
    print("=" * 68)
    print("YÜKSEKLİK KATMANI — ALTYAPI ①")
    print("=" * 68)
    var = os.path.isdir(DIZIN)
    dosyalar = []
    if var:
        for kok, _, ad in os.walk(DIZIN):
            for a in ad:
                y = os.path.join(kok, a)
                dosyalar.append((os.path.relpath(y, KOK),
                                 os.path.getsize(y) / 1048576.0))
    if not dosyalar:
        print("🔴 VERİ YOK — %s %s"
              % (os.path.relpath(DIZIN, KOK),
                 "boş" if var else "dizini hiç YOK"))
        print()
        print("   ⚠️ Bu bir HATA DEĞİL, BEKLEYEN BİR KARAR:")
        print("      indirme kullanıcının internet kotası ve diskiyle ilgili,")
        print("      bir oturum kendi başına yapmaz.")
        print()
        print("   ⇒ maliyet.py bugün eğimsiz çalışıyor ve bunu YAZIYOR;")
        print("      'dağ engeldir' iddiası SINANMAMIŞTIR.")
        print()
        print("   Adaylar: GMTED2010 (30\", kamu malı) · ETOPO2022 · SRTM90")
        print("   🔴 SRTM tek başına ELENİR: 60°K'ye kadar, atlas 82°K'ye çıkıyor.")
        return 3
    print("🟢 %d dosya, toplam %.1f MB:" % (len(dosyalar),
                                            sum(b for _, b in dosyalar)))
    for a, b in sorted(dosyalar):
        print("   %-52s %8.1f MB" % (a, b))
    kaynak = os.path.join(DIZIN, "KAYNAK.md")
    if not os.path.exists(kaynak):
        print()
        print("🔴 KAYNAK.md YOK — indirme adresi, lisans ve tarih yazılmamış.")
        print("   `§4`: kaynağı yazılmayan bilgi, kaynağı olmayandan")
        print("   AYIRT EDİLEMEZ. Veri kullanılmadan önce yazılmalı.")
        return 1
    print("\n🟢 KAYNAK.md var.")
    return 0


if __name__ == "__main__":
    sys.exit(durum())
