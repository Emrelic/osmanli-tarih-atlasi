"""KORIDOR-0081 — Uzunköprü `kur:` satırını GERİ ALIR (koordinatör koşturur).

Neden (ölçüldü, 28 Eylül 2026): uygula.py'nin `kur:"1443-01-01"` adımı
Değişmez 5a'yı kırdı — ilk dönem 1281 (bizans) kuruluştan 162 yıl önce.
İki çıkış da kapalı:
  ① 1443 öncesi dönemleri silmek → nokta "kurulmamış VE sahipsiz" olur;
     motor bu durumu KASITLI BOŞLUK sayar ve peteği DEVRETMEZ
     (uret_petek.py ~4603: "devir YALNIZ YANLIŞ BOYANAN peteklere") ⇒
     1281-1443 arası Ergene vadisinde yeni DELİK. Kusuru büyütür.
  ② `kur:` + eski dönemler → 5a ihlali (tavan 0, affedilmez).
⇒ `kur:` geri alınır; kayıt uygulamadan önceki hâline döner. H-0008 (anakronik
vekil) AÇIK kalır, çaresi bir kural kararıdır (rapor §③).
TDV dayanağı (murad-ii, Ergene Köprüsü 1443) raporda durur, kayda yazılmaz.

Kullanım:  py denetim/KORIDOR-0081-uzunkopru-geri.py            (kuru)
           py denetim/KORIDOR-0081-uzunkopru-geri.py --uygula
"""
import sys

sys.stdout.reconfigure(encoding="utf-8")
YOL = "data/yerlesimler_ek24.js"
ESKI = '{ ad:"Uzunköprü", tur:"sehir", lat:41.267, lon:26.688, g:0, k:3, m:"Edirne", kur:"1443-01-01",'
YENI = '{ ad:"Uzunköprü", tur:"sehir", lat:41.267, lon:26.688, g:0, k:3, m:"Edirne",'

metin = open(YOL, encoding="utf-8").read()
n = metin.count(ESKI)
if n != 1:
    raise SystemExit(f"DUR: {YOL} içinde kur:'lu Uzunköprü satırı {n} kez (beklenen 1) — "
                     f"zaten geri alınmış olabilir")
metin = metin.replace(ESKI, YENI)
print(f"{YOL}: Uzunköprü kur:\"1443-01-01\" kaldırılacak")
if "--uygula" in sys.argv:
    with open(YOL, "w", encoding="utf-8", newline="") as f:
        f.write(metin)
    print("YAZILDI")
else:
    print("KURU KOŞU — --uygula ile yaz")
