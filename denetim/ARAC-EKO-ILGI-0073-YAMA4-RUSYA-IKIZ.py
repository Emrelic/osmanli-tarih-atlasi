# -*- coding: utf-8 -*-
"""EKO-ILGI-0073 · (c1) ve (d) — 1.MURAT M-4837, yetki verildi.

(d) KRONOLOJI_RUSYA'daki "Osmanli, Yeniceri Ocagi'ni kaldirdi — Rusya icin
    stratejik firsat" kaydi t:"1826-07-31" tasiyordu; olay 15 Haziran 1826.
    46 gun ayrisik IKIZ.
    🔴 KARAR: IKIZ KALDIRILMADI, GUNU CEKILDI. Gerekce koordinatorun kendi
    olcutu ("kuyruk maddesi kendi basina bir sey anlatiyorsa kalsin, tekrarsa
    gitsin"): bu kayit tekrar DEGIL — ocagin kaldirilmasinin RUSYA acisindan
    sonucunu (1828-29 savasinda firsata cevrilmesi) anlatiyor, cekirdek madde
    bunu soylemiyor. Kaynagi da ayri (Riasanovsky & Steinberg). Silmek bir
    anlati kaybi olurdu; 46 gunluk ayrisma ise gercek kusurdu.
    ⇒ t:"1826-07-31" -> "1826-06-15", ve ona bagli 2 kartin bagi AYNI islemde
    "…|Rusya" ayirt edicisiyle yeniden hedeflendi (ayni gune dusen cekirdek
    maddeyle karismasin diye: "hayriyye" cekirdekte, "rusya" kuyrukta gecer).
    SINAV: once 2 kart bagliydi, sonra da 2 olmali.

(c1) "1944-01-01|Istanbul Teknik Universitesi kuruldu" bagi KALDIRILDI —
    atlasin kapsami 1281-1923; kapsam disi bir tarihe bag kurmak oksuzlugu
    kalicilastirir (M-4837/c1).
"""
import io, os, sys

os.chdir(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

ESKI_RUS = '{ t:"1826-07-31", b:"Osmanlı, Yeniçeri Ocağı\'nı kaldırdı — Rusya için stratejik fırsat", tur:"diger", onem:1, dunya:1, kapsam:"dis",'
YENI_RUS = '{ t:"1826-06-15", b:"Osmanlı, Yeniçeri Ocağı\'nı kaldırdı — Rusya için stratejik fırsat", tur:"diger", onem:1, dunya:1, kapsam:"dis",\n  ic_not_gun:"20 Eylül 2026 · EKO-ILGI-0073 (M-4837/d): kayıt t:\\"1826-07-31\\" taşıyordu, oysa Vak\'a-i Hayriyye 15 Haziran 1826\'dır — aynı olayın 46 gün ayrışık ikiziydi. Kayıt KALDIRILMADI çünkü tekrar değil: çekirdek maddenin söylemediği bir şeyi, olayın RUSYA açısından sonucunu anlatıyor. Yalnız günü çekirdek maddeyle (data/olaylar.js, 1826-06-15) aynı güne çekildi. Bu kayda bağlı 2 ek okuma kartının bağı aynı işlemde \'…|Rusya\' ayırt edicisiyle yeniden hedeflendi.",'

YAMA = [
 ("data/kronoloji_rusya.js", ESKI_RUS, YENI_RUS, 1),
 ("data/ekokuma_toplum.js",
  'olay:["1826-06-15|Hayriyye","1826-07-31"],',
  'olay:["1826-06-15|Hayriyye","1826-06-15|Rusya"],', 1),
 ("data/ekokuma_yeniceri.js",
  '"1826-07-31|Yeniçeri"',
  '"1826-06-15|Rusya"', 1),
 ("data/ekokuma_kurum2.js",
  'olay:["1795-01-01|Mühendishâne-i Berrî-i Hümâyun kuruldu","1883-01-01|Hendese-i Mülkiyye Mektebi açıldı","1944-01-01|İstanbul Teknik Üniversitesi kuruldu"],',
  '// EKO-ILGI-0073 (M-4837/c1): "1944-01-01|İstanbul Teknik Üniversitesi" bağı\n  // KALDIRILDI — atlasın kapsamı 1281-1923, o tarihe hiçbir zaman madde gelmeyecek\n  // ve kapsam dışı bir güne bağ kurmak öksüzlüğü KALICILAŞTIRIR. Okulun bugünkü\n  // ardılı bilgisi kartın METNİNDE duruyor, bağ olarak durmasına gerek yok.\n  olay:["1795-01-01|Mühendishâne-i Berrî-i Hümâyun kuruldu","1883-01-01|Hendese-i Mülkiyye Mektebi açıldı"],', 1),
]

hata = 0
for dosya, eski, yeni, bekle in YAMA:
    with io.open(dosya, encoding="utf-8") as f:
        s = f.read()
    n = s.count(eski)
    if n != bekle:
        print("HATA  %-28s  %d kez (%d bekleniyordu)" % (dosya, n, bekle))
        hata += 1
        continue
    with io.open(dosya, "w", encoding="utf-8", newline="") as f:
        f.write(s.replace(eski, yeni))
    print("OK    %-28s  %d yer" % (dosya, n))

print("\n%d yama, %d hata" % (len(YAMA), hata))
sys.exit(1 if hata else 0)
