# -*- coding: utf-8 -*-
"""EKO-ILGI-0073 · ZINCIRLEME DUZELTME (1.MURAT M-4832).

Vak'a-i Hayriyye maddesi AY hassasiyetindeydi (t:"1826-06") ama `gun:` alani
zaten "15 Haziran 1826" yaziyordu. CLAUDE.md §8: kronoloji maddesinde GUN yazilir
(ay hassasiyetli kayit ayin 1'ine genisler ve gun hassasiyetli degisimlerden ONCE
siralanir — senkron bozulur).

🔴 TEK ISLEM: madde gunu ve ona bagli BUTUN kart baglari AYNI ANDA degisir.
Yoksa bag esleştiricisi TAM ESITLIK aradigi icin sekiz kart birden SESSIZCE
gorunmez olur.

SINAV: degisiklikten once 8 kart bagliydi; sonra da 8 olmali.
YENI GUN IDDIA EDILMEDI: atlasin kendi 15 Haziran'i duruyor; TDV'nin iki ayri
gunu (vaka-i-hayriyye 17 Haziran · yeniceri 14 Haziran, ayni muellif) yalnizca
`ic_not_gun` alanina BEYAN olarak yazildi.
"""
import io, os, sys

os.chdir(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

ESKI_MADDE = '{ t:"1826-06", k:"reform", etiket:["siyaset","isyan","konu-siyasi","konu-isyan","konu-islahat"], b:"Vak\'a-i Hayriyye — Yeniçeri Ocağı kaldırıldı", gun:"15 Haziran 1826", yer:"İstanbul, Etmeydanı", kisiler:"II. Mahmud",'
YENI_MADDE = '{ t:"1826-06-15", k:"reform", etiket:["siyaset","isyan","konu-siyasi","konu-isyan","konu-islahat"], b:"Vak\'a-i Hayriyye — Yeniçeri Ocağı kaldırıldı", gun:"15 Haziran 1826", yer:"İstanbul, Etmeydanı", kisiler:"II. Mahmud",\n  ic_not_gun:"20 Eylül 2026 · EKO-ILGI-0073 (M-4832): kayıt AY hassasiyetindeydi (t:\\"1826-06\\") ama `gun:` alanı zaten 15 Haziran 1826 diyordu; ay hassasiyetli kayıt ayın 1\'ine genişleyip gün hassasiyetli maddelerden önce sıralandığı için (CLAUDE.md §8) `t:` gün biçimine çevrildi. YENİ GÜN İDDİA EDİLMEDİ. 🔴 KAYNAKLAR ÜÇ AYRI GÜN VERİYOR, beyan: TDV `vaka-i-hayriyye` 17 Haziran 1826 · TDV `yenicer1` (aynı müellif, Beydilli) 14 Haziran 1826 · atlasın mevcut kaydı 15 Haziran 1826. Fark ÖLÇÜLDÜ, hüküm verilmedi — atlasın günü korundu. Bu maddeye bağlı 8 ek okuma kartının `olay:` dizgisi AYNI işlemde güncellendi (tam eşitlik arayan bağ eşleştiricisi yüzünden şart).",'

YAMA = [
 ("data/olaylar.js", ESKI_MADDE, YENI_MADDE, 1),
 ("data/ekokuma.js",
  'olay:["1352-03-01","1361-01-01|Pençik","1362-03","1362-06-01|Yeniçeri Ocağı","1826-06"],',
  'olay:["1352-03-01","1361-01-01|Pençik","1362-03","1362-06-01|Yeniçeri Ocağı","1826-06-15|Hayriyye"],', 1),
 ("data/ekokuma_camitarz.js", 'olay: ["1826-06"],', 'olay: ["1826-06-15|Hayriyye"],', 1),
 ("data/ekokuma_toplum.js", 'olay:["1826-06","1826-07-31"],', 'olay:["1826-06-15|Hayriyye","1826-07-31"],', 1),
 ("data/ekokuma_kurum.js", '"1826-06|Hayriyye"', '"1826-06-15|Hayriyye"', 1),
 ("data/ekokuma_yeniceri.js", '"1826-06|Hayriyye"', '"1826-06-15|Hayriyye"', 4),
]

hata = 0
for dosya, eski, yeni, bekle in YAMA:
    with io.open(dosya, encoding="utf-8") as f:
        s = f.read()
    n = s.count(eski)
    if n != bekle:
        print("HATA  %-28s  %d kez bulundu (%d bekleniyordu)" % (dosya, n, bekle))
        hata += 1
        continue
    s = s.replace(eski, yeni)
    with io.open(dosya, "w", encoding="utf-8", newline="") as f:
        f.write(s)
    print("OK    %-28s  %d yer" % (dosya, n))

print("\n%d dosya, %d hata" % (len(YAMA), hata))
sys.exit(1 if hata else 0)
