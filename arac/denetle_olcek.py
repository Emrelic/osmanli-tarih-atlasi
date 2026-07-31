# -*- coding: utf-8 -*-
"""
ÖLÇEK ENVANTERİ — derece cinsinden yazılmış mesafeler gerçekte kaç km?
======================================================================
⚠️ BU BİR DENETİM DEĞİL, ENVANTERDİR. Eşiği yok, ihlali yok, çıkış kodu 0.
Sebebi sınıfın kendisinde: **bu hata hiçbir ölçütü patlatmaz.**

COĞRAFYA oturumu buldu, MOTOR doğruladı:
    uret_petek.py   nehir_mes = 0.30°   yorumda "33 km" yazıyor
    gerçek:  ekvatorda 33 km · Kahire enleminde ~30 km · 41. enlemde ~25 km

Boylam dereceleri kuzeye gidildikçe daralır (cos φ), enlem dereceleri daralmaz.
Derece cinsinden bir tampon yarıçapı bu yüzden **doğu-batı yönünde kuzeye
gidildikçe sessizce daralır.** Motorun nehre yaslanma payı Boğdan'da,
Tuna'da, Dinyeper'de Nil'dekinden dardır — ve bunu kimse fark etmez:

    sıfır alanlı petek çıkmaz · bozuk kenar artmaz · Değişmez'ler temiz kalır
    yalnız yarıçap istenenden dar olur, KİMSENİN SORMADIĞI BİR SORUDA

MOTOR Boğdan'ın nehre yaslanma payını (%16-18) ölçerken tam bunun üstünden
geçmiş ve fark etmemiş. §33/§34 ailesinin en temiz örneği: ölçüm yapıldı,
sayı üretildi, ama ölçülen şey sanılan şey değildi.

Bu araç hüküm vermez — **sabitin yanındaki km yorumunun hangi enlemde doğru
olduğunu** söyler, ki bir dahaki sefere birisi "33 km" diye okuyup ona göre
karar vermesin.

ÇALIŞTIRMA
    py arac/denetle_olcek.py
"""
import io
import os
import re
import sys
from math import cos, radians

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8", errors="replace")

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

# 1° enlem ≈ 111,32 km ve enlemden bağımsızdır.
# 1° boylam = 111,32 × cos(enlem) km — İŞTE DEĞİŞEN BU.
KM_DERECE = 111.32

# Projenin fiilen kapsadığı enlem aralığından örnekler. Kapsama genişledikçe
# bu liste de genişlemeli — bugün en kuzey nokta Varşova/Riga hattı.
ENLEMLER = [
    (0, "ekvator"),
    (15, "Sudan / Yemen"),
    (30, "Kahire / Basra"),
    (41, "İstanbul / Roma"),
    (48, "Boğdan / Budin"),
    (57, "Riga / Baltık"),
]

# Taranacak dosya ve içindeki derece cinsinden mesafe sabitleri.
# ⚠️ Desenler KAYNAKTAN okur, değer buraya KOPYALANMAZ — bu depoda bugün
# dört kez "bayat kopya" hatası çıktı, beşincisini üretmeyelim.
HEDEFLER = [
    ("arac/uret_petek.py", r"^KORUMA_PAYI\s*=\s*([\d.]+)", "KORUMA_PAYI",
     "peteğin asgarî yarıçapı"),
    ("arac/uret_petek.py", r"nehir_mes\s*=\s*([\d.]+)", "nehir_mes",
     "nehir yatağına yaslanma yarıçapı"),
    ("arac/uret_petek.py", r"sirt_mes\s*=\s*([\d.]+)", "sirt_mes",
     "dağ sırtına yaslanma yarıçapı"),
    ("arac/uret_petek.py", r"^SADE_TOL\s*=\s*([\d.]+)", "SADE_TOL",
     "petek sadeleştirme toleransı"),
    ("arac/uret_petek.py", r"^KARA_TOL\s*=\s*([\d.]+)", "KARA_TOL",
     "kıyı çizgisi sadeleştirme toleransı"),
    ("arac/uret_petek.py", r"^KV_ADIM\s*=\s*([\d.]+)", "KV_ADIM",
     "kara-kısıtlı sahiplik ızgarası"),
]


def main():
    print("Ölçek envanteri — derece cinsinden mesafeler gerçekte kaç km?\n")
    print("  1° ENLEM  = %.2f km, enlemden BAĞIMSIZ" % KM_DERECE)
    print("  1° BOYLAM = %.2f km × cos(enlem) — KUZEYE GİDİLDİKÇE DARALIR\n" % KM_DERECE)

    bulunan = 0
    for dosya, desen, ad, aciklama in HEDEFLER:
        yol = os.path.join(KOK, dosya)
        try:
            kaynak = open(yol, encoding="utf-8").read()
        except Exception:
            print("  !  %s okunamadı" % dosya)
            continue
        m = re.search(desen, kaynak, re.M)
        if not m:
            # ⚠️ GÜRÜLTÜLÜ ÖL. Sabit yeniden adlandırılır ya da biçimi
            # değişirse desen sessizce eşleşmez ve envanter EKSİK ama TEMİZ
            # görünür — tam kaçındığımız sınıf.
            print("  ✗  %-14s BULUNAMADI (%s içinde desen eşleşmedi)" % (ad, dosya))
            print("       → sabit yeniden adlandırılmış olabilir; deseni güncelle")
            continue
        bulunan += 1
        derece = float(m.group(1))
        print("  %-14s = %.3f°   %s" % (ad, derece, aciklama))
        print("       " + "  ".join(
            "%-11s %5.1f km" % (yer.split(" /")[0] + ":", derece * KM_DERECE * cos(radians(e)))
            for e, yer in ENLEMLER[:3]))
        print("       " + "  ".join(
            "%-11s %5.1f km" % (yer.split(" /")[0] + ":", derece * KM_DERECE * cos(radians(e)))
            for e, yer in ENLEMLER[3:]))
        kuzey = derece * KM_DERECE * cos(radians(48))
        ekvator = derece * KM_DERECE
        print("       ⚠️ Boğdan enleminde ekvatordakinin %%%.0f'i (%.1f → %.1f km)"
              % (100 * kuzey / ekvator, ekvator, kuzey))
        print()

    print("SONUÇ: %d sabit ölçüldü — bu bir ENVANTERDİR, ihlal kademesi yoktur."
          % bulunan)
    print("       Sayılar kaynaktan okundu, hiçbiri buraya kopyalanmadı.")
    return 0


if __name__ == "__main__":
    sys.exit(main() or 0)
