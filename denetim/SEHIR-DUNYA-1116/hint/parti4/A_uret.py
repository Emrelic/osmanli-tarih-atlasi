# -*- coding: utf-8 -*-
# SEHIR-DUNYA-1116 F2 parti 4-A: Hint BORC sehirleri, TDV disi akademik kaynak (Britannica + Majumdar VI).
# Her tanik, ilgili sayfada tarayicida includes() ile dogrulandi (16 Kasim 2026).
import json, sys, io, os

OKU = "tarayıcı sayfa okuma, 16 Kasım 2026"
MAJ6 = ("R. C. Majumdar (ed.), The History and Culture of the Indian People, Vol. VI: The Delhi Sultanate, "
        "Bharatiya Vidya Bhavan, Bombay 1960 (archive.org: delhisultanate00bhar, "
        "https://archive.org/stream/delhisultanate00bhar/delhisultanate00bhar_djvu.txt, " + OKU + ")")


def brit(slug, baslik):
    return (f"Encyclopaedia Britannica, «{baslik}» md. (Britannica Editors), "
            f"https://www.britannica.com/place/{slug}, " + OKU)


def olay(t, gun, k, b, kes, kaynak, tanik):
    return {"t": t, "gun": gun, "k": k, "b": b, "kesinlik": kes, "kaynak": kaynak, "tanik": tanik}


def ilk(t, gun, nic, kes, kaynak, tanik):
    return {"t": t, "gun": gun, "nicelik": nic, "kesinlik": kes, "kaynak": kaynak, "tanik": tanik}


K = []

# ---------------- Kolam (Quilon)
b = brit("Kollam", "Kollam")
K.append({
    "id": "kolam-in", "ad": "Kolam (Quilon)", "atlas_ad": "Kolam (Quilon)", "lat": 8.893, "lon": 76.614, "kat1900": None,
    "adlar": ["Elancon", "Kaulam Mall", "Coilum", "Quilon", "Kollam"],
    "ilk": ilk("1300-01-01", "13. yüzyıl", "ilk_anilis", "yuzyil", b,
               "Coilum by the 13th-century Venetian traveler Marco Polo"),
    "kur": None, "ark": None, "bit": None, "sahip": [],
    "olay": [
        olay("1300-01-01", "13. yüzyıl", "diger", "Marco Polo şehri 'Coilum' adıyla anıyor (Britannica: 13. yy'ın Venedikli gezgini)", "yuzyil", b,
             "Coilum by the 13th-century Venetian traveler Marco Polo"),
        olay("1662-01-01", "1662", "diger", "Portekizlilerden sonra Hollandalılar Kollam'a geldi (Britannica: 1662)", "yil", b,
             "followed by the Dutch in 1662"),
    ],
    "ic_not": ("TEK KAYNAK (Britannica). İlk kayıt Britannica'nın yüzyıl düzeyindeki Marco Polo anılışıdır (güvenli uç 1300-01-01); "
               "Britannica 'Kollam has existed for many centuries' der, yazılı daha eski tarihli tanık bu pakette bulunamadı. "
               "Majumdar VI, Pandya krallığının 'Quilon'dan Nellore'ye uzandığını söyler (Malik Nâib seferi bağlamı) ama şehre özgü tarih vermez; yazılmadı. "
               "ÇELİŞKİ/ATLAS: atlas Kolam'da Hollanda dönemini 1661-12-08'de açıyor, Britannica 'Dutch in 1662' diyor (1 yıl); "
               "atlas günü kronolojide ayrı kaynaklıysa dokunulmaz, ancak Britannica ile ikinci kaynak olarak TDV/Hollanda neşri aranmalı. "
               "Portekiz yılı (atlas 1502) Britannica'da yok ('The first Europeans there were the Portuguese' — yılsız). "
               "Atlas başlangıcı 1281 < ilk.t: atlas zinciri esastır, sahip yazılmadı."),
})

# ---------------- Mathura
b = brit("Mathura", "Mathura")
K.append({
    "id": "mathura-in", "ad": "Mathura", "atlas_ad": "Mathura", "lat": 27.492, "lon": 77.673, "kat1900": None,
    "adlar": ["Mathura", "Muttra"],
    "ilk": ilk("1018-01-01", "1017-1018", "ilk_anilis", "yil", b, "In 1017–18 Maḥmūd of Ghazna pillaged Mathura"),
    "kur": None, "ark": None, "bit": None,
    "sahip": [{"f": "1018-01-01", "t": "1281-01-01", "d": "__BOSLUK__", "kesinlik": "yil",
               "kaynak": "bulunamadı (1018-1281 arası Mathura'ya özgü sahip kaynağı bu oturumda okunamadı)",
               "ic_not": ("Britannica yalnız Gazneli Mahmud'un 1017-18 yağmasını verir; sonrası için sahip tanığı yok. Majumdar IV 'Mathura'yı "
                          "Jain tapınakları/Yadu yerleşimi bağlamında anar (tarihsiz). Boşluk doldurma merdiveninde TDV (Mahmud-ı Gaznevî: tarihsiz), "
                          "Majumdar IV, Britannica okundu; Majumdar V (ödünç, okunamaz) ve Tomara/Çahamana kaynakları basamağı BORÇ.")}],
    "olay": [
        olay("1018-01-01", "1017-1018", "diger", "Gazneli Mahmud Mathura'yı yağmaladı (Britannica: 1017-18; güvenli uç 1018)", "yil", b,
             "In 1017–18 Maḥmūd of Ghazna pillaged Mathura"),
        olay("1804-01-01", "1804", "fetih", "Şehir İngiliz yönetimine girdi (Britannica: 1804)", "yil", b,
             "The city fell under British rule in 1804"),
    ],
    "dikis_beyan": ("Atlas Mathura'yı 1281-01-01'de delhi-sultanligi ile başlatır; 1018→1281 arası sahip kaynağı bulunamadı (Majumdar V okunamadı), "
                    "yer tutucu olay yazılmadı. ÇELİŞKİ: atlas 1803-10-17'de Marata dönemini kapatır, Britannica 'British rule in 1804' der."),
    "ic_not": ("TEK KAYNAK (Britannica). İlk anılış Mahmud'un yağması değil Britannica'nın en erken TARİHLİ olgusudur; "
               "Britannica Kuşan döneminde (1. yy) gelişen bir şehir olduğunu söyler (yılsız) — bu yazılmadı. "
               "'Between 1500 and 1757 sacked four times' aralığı şehre özgü ama tek tek yıl vermediği için yazılmadı. "
               "Aralığın (1017-18) güvenli ucu 1018 alındı. Majumdar VI metninde Mathura geçmiyor (0 isabet)."),
})

# ---------------- Uccayn (Ujjain)
b = brit("Ujjain", "Ujjain")
K.append({
    "id": "uccayn-in", "ad": "Uccayn (Ujjain)", "atlas_ad": "Uccayn (Ujjain)", "lat": 23.179, "lon": 75.785, "kat1900": None,
    "adlar": ["Ujjayini", "Ozene", "Ujjain"],
    "ilk": ilk("0200-01-01", "2. yüzyıl", "ilk_anilis", "yuzyil", b,
               "known to the Greek geographer Ptolemy in the 2nd century CE as Ozene"),
    "kur": None, "ark": None, "bit": None, "sahip": [],
    "olay": [
        olay("0200-01-01", "2. yüzyıl", "diger", "Batlamyus şehri 'Ozene' adıyla anıyor (Britannica: batı satrapların başkenti)", "yuzyil", b,
             "known to the Greek geographer Ptolemy in the 2nd century CE as Ozene"),
        olay("1235-01-01", "1235", "diger", "Delhi'li İltutmış Uccayn'ı yağmaladı; Mahakala Tapınağı yıkıldı (Britannica)", "yil", b,
             "In 1235 Iltutmish of Delhi sacked Ujjain"),
        olay("1305-12-31", "1305", "fetih", "Mandu'nun düşmesinden (24 Kasım 1305) sonra Uccayn, Dhar ve Chanderi 'reduced' (Alâeddin Hilcî'nin Malva fethi); yıl dolaylı", "yil",
             MAJ6, "After the fall of Mandu, Ujjain, Dhar, and Chanderi were reduced"),
        olay("1750-01-01", "1750", "fetih", "Sindhia'lar şehri ele geçirip başkent yaptı (Britannica)", "yil", b,
             "its capture in 1750 by the Sindhias, who made it their capital"),
    ],
    "ic_not": ("ÇİFT TEYİT YOK: 1235 ve 1750 yalnız Britannica (TEK KAYNAK); 1305 yalnız Majumdar VI (TEK KAYNAK). "
               "1305 DOLAYLI YIL: tanık cümlesinde yıl yok; hemen önceki cümle 'took possession of the fort (November 24, 1305)' Mandu'nun düşüşünü verir, "
               "Uccayn'ın indirilmesi 'after the fall of Mandu' (sonra) — kesin gün bilinmediği için aralığın son ucu 1305-12-31 alındı (kesinlik yil). "
               "ATLAS/BORÇ: Britannica daha eski iddialar da verir (Avanti başkenti MÖ 6.-4. yy; 'Ashoka seat 2nd century BCE' — Aşoka MÖ 3. yy olduğundan "
               "Britannica'da yıl tutarsız görünüyor, KULLANILMADI; Gupta II. Çandragupta 400 CE). Bunlar atlasın başlangıcından (0140) önce/sonra yüzyıl düzeyindedir, "
               "sahip künyeleri (avanti, maurya, gupta) araştırılmadığı için zincire alınmadı; ilk = Batlamyus (atlas 0140'tan sonra) seçildi. "
               "Atlas Uccayn'da 1750 Sindhia dönemi ve 1235 İltutmış sahipliği için atlas zincirine bakılmalı (bu dosya atlas zincirine karışmaz)."),
})

# ---------------- Sonargaon
K.append({
    "id": "sonargaon-in", "ad": "Sonârgâon", "atlas_ad": "Sonârgâon", "lat": 23.646, "lon": 90.599, "kat1900": None,
    "adlar": ["Sonargaon"],
    "ilk": ilk("1328-01-01", "1327-1328 (728 H.)", "ilk_anilis", "yil", MAJ6,
               "rebelled after three years, in 728 A.H. (A.D. 1327-8)"),
    "kur": None, "ark": None, "bit": None, "sahip": [],
    "olay": [
        olay("1328-01-01", "1327-1328 (728 H.)", "isyan",
             "Sonârgâon'da Bahrâm Han ile birlikte hüküm süren Gıyâseddin Bahâdur, Muhammed b. Tuğluk'a karşı isyan etti (728 H./1327-8; sonra Bahrâm Han'a yenildi)", "yil", MAJ6,
             "rebelled after three years, in 728 A.H. (A.D. 1327-8)"),
    ],
    "ic_not": ("TEK KAYNAK (Majumdar VI). DOLAYLI ŞEHİR ANILIŞI: tanık cümlesi yalnız 'Ghiyas-ud-din ... rebelled after three years, in 728 A.H. (A.D. 1327-8)' der; "
               "şehir adı bir önceki cümlede geçer: 'Ghiyas-ud-din Bahadur ... was sent back to Sonargaon to rule jointly with Bahram Khan' (aynı paragraf, ikisi de sayfa metninde doğrulandı). "
               "Hicrî 728 / Mîlâdî 1327-8 aralığı: CLAUDE.md hicrî kuralı gereği ilk anılış için güvenli uç 1328-01-01 alındı (1327-11 civarında başlayan hicrî yılın mîlâdî karşılığı; "
               "gün/ay teyidi yok). Majumdar VI ayrıca Tuğluk'un Doğu Bengal'ı 'capital at Sonargaon' ile ilhakını anlatır ama bu cümlede yıl yok; yazılmadı. "
               "Atlas Sonârgâon'u 1026'da (varman-vanga) başlatır; bu dosya atlas zincirine karışmaz. "
               "Majumdar VI Firûz Şah'ın Bengal seferinde 'Zafar Khan should be established in Sonargaon' (tarihsiz) cümlesi de yazılmadı."),
})

# ---------------- Racmahal
b = brit("Rajmahal", "Rajmahal")
K.append({
    "id": "racmahal-in", "ad": "Râcmahal", "atlas_ad": "Râcmahal", "lat": 25.052, "lon": 87.836, "kat1900": None,
    "adlar": ["Rajmahal", "Akbarnagar"],
    "ilk": ilk("1596-01-01", "1595-1596", "kurulus", "yil", b, "chose the site for his capital in 1595–96"),
    "kur": None, "ark": None, "bit": None, "sahip": [],
    "olay": [
        olay("1596-01-01", "1595-1596", "kurulus", "Mansingh (Bengal valisi) Râcmahal'i Bengal başkenti için seçti (Britannica: 1595-96; güvenli uç 1596)", "yil", b,
             "chose the site for his capital in 1595–96"),
        olay("1608-01-01", "1608", "diger", "Bengal başkenti Dakka'ya taşındı (Britannica)", "yil", b,
             "The capital of Bengal was transferred to Dacca (now Dhaka, Bangladesh) in 1608"),
        olay("1639-01-01", "1639", "diger", "Râcmahal idarî merkez konumunu geçici olarak geri aldı (1639-1660)", "yil", b,
             "temporarily regained its administrative position from 1639 to 1660"),
        olay("1660-01-01", "1660", "diger", "Râcmahal'in 1639'da yeniden kazandığı idarî merkez konumu sona erdi (Britannica: '1639 to 1660')", "yil", b,
             "temporarily regained its administrative position from 1639 to 1660"),
    ],
    "ic_not": ("TEK KAYNAK (Britannica). 'chose the site ... in 1595–96': kuruluş değil site seçimi; aralığın güvenli ucu 1596 alındı. "
               "ATLAS ÖNERİSİ: atlas Râcmahal noktasını 1592-01-01'de başlatıyor, Britannica site seçimini 1595-96 veriyor — atlas başlangıcı kaynaksız ve 3-4 yıl erken; "
               "zincir bu dosyada atlas başlangıcından sonra olduğu için yazılmadı (tool uyarısı). 1608 olayı: TDV 'Dakka' md. de 1608'i Racmahal bağlamında anar "
               "(BORC.md: 'TDV iç tutarsızlığı') — bu oturumda TDV maddesi yeniden okunmadı, bu yüzden ÇİFT TEYİT yazılmadı. "
               "1660 olayı 1639-1660 aralığının kapanışıdır (tek tanık cümlesi iki uç için de geçerli). "
               "Majumdar VI metninde Rajmahal geçmiyor (0 isabet)."),
})

# ---------------- Mangalor
b = brit("Mangaluru", "Mangaluru")
K.append({
    "id": "mangalor-in", "ad": "Mangalor", "atlas_ad": "Mangalor", "lat": 12.914, "lon": 74.856, "kat1900": None,
    "adlar": ["Mangalore", "Mangaluru"],
    "ilk": ilk("1400-01-01", "14. yüzyıl", "ilk_anilis", "yuzyil", b,
               "engaged in trade with the Persian Gulf region in the 14th century"),
    "kur": None, "ark": None, "bit": None, "sahip": [],
    "olay": [
        olay("1550-01-01", "16. yüzyıl ortası", "fetih", "Portekizliler Mangalor'u işgal etti (Britannica: 16. yy ortası)", "yuzyil", b,
             "occupied by the Portuguese in the mid-16th century"),
        olay("1763-01-01", "1763", "fetih", "Mysore sultanları dönemi başladı; Mangalor stratejik gemi yapım üssü oldu (Britannica: 1763)", "yil", b,
             "Under the Mysore (Mysuru) sultans (1763) it became a strategic shipbuilding base"),
        olay("1799-01-01", "1799", "antlasma", "Mangalor, çok sayıda kuşatmadan sonra İngilizlere bırakıldı (Britannica: 1799)", "yil", b,
             "ceded to the British in 1799 after numerous sieges"),
    ],
    "ic_not": ("TEK KAYNAK (Britannica). 'ilk' = Britannica'nın 14. yy Basra Körfezi ticareti cümlesi (ticarete katılma, yüzyıl düzeyi; güvenli uç 1400-01-01); "
               "şehrin kuruluş/ilk anılış yılı değildir, Mangalor'un çok daha eski (Majumdar IV: Kochchadaiyan'ın 'victories at Marudur and Mangalore' — tarihsiz, yalnız dizin/özet) "
               "olması muhtemeldir; Majumdar IV cümlesi yıl taşımadığı (yalnız fetih listesi) için yazılmadı. "
               "1550 (yüzyıl ortası) kesinlik yuzyil. ATLAS: atlas 1763-01-01 Mysore ile uyumlu; 1799: atlas 1799-05-04 (Britannica yalnız yıl). "
               "Atlas Mangalor'u 1281'de (hoysala) başlatır; atlas zinciri esastır, sahip yazılmadı."),
})

# ---------------- Kanbayet
b = brit("Khambhat", "Khambhat")
K.append({
    "id": "kanbayet-in", "ad": "Kanbâyet (Khambhat)", "atlas_ad": "Kanbâyet (Khambhat)", "lat": 22.317, "lon": 72.62, "kat1900": None,
    "adlar": ["Stambha", "Cambay", "Khambhat"],
    "ilk": ilk("1293-01-01", "1293", "ilk_anilis", "yil", b,
               "The town was mentioned in 1293 by the Venetian traveler Marco Polo"),
    "kur": None, "ark": None, "bit": None, "sahip": [],
    "olay": [
        olay("1293-01-01", "1293", "diger", "Marco Polo şehri yoğun bir liman olarak anıyor (Britannica: 1293)", "yil", b,
             "The town was mentioned in 1293 by the Venetian traveler Marco Polo"),
        olay("1298-01-01", "1298", "diger",
             "Alâeddin Hilcî'nin Gucerât seferinde Nusret Han 'zengin Cambay limanını' yağmaladı (yıl dolaylı: 1298'in ikinci yarısındaki sefer)", "yil", MAJ6,
             "the rich port of Cambay and obtained an immense booty"),
    ],
    "ic_not": ("TEK KAYNAK her olay için (1293 Britannica, 1298 Majumdar VI). 1298 DOLAYLI YIL: tanık cümlesinde yıl yok; aynı bölümün başındaki "
               "'In the latter half of 12 98, ‘Ala-ud-din sent an expedition under Ulugh Khan and Nusrat Khan to Gujarat' (OCR '12 98', dipnot 7; sayfa metninde doğrulandı) "
               "seferi tarihler; Cambay yağması bu seferin içinde (ikisi aynı paragrafta). Başka kaynaklar seferi 1299'a koyabilir (bu oturumda doğrulanmadı); "
               "gün bilinmiyor, kesinlik yil. Majumdar IV 'Stambha (modern Cambay)' Doğu Çalukya Vijayâditya II'nin yağması (9. yy, yılsız) ve Cambay Plates 930 "
               "(kitabenin Cambay'da düzenlendiği metinde belirtilmiyor) yazılmadı. Majumdar VI ayrıca 'Taghi ... plundered Cambay' (14. yy ortası, yılsız) der; yazılmadı. "
               "Atlas Kanbâyet'te 1281 (racput) başlıyor; atlas zinciri esastır, sahip yazılmadı."),
})

# ---------------------------------------------------------------- yaz
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf8')
yol = os.path.join(os.path.dirname(os.path.abspath(__file__)), "A.json")
with open(yol, "w", encoding="utf-8", newline="\n") as f:
    json.dump(K, f, ensure_ascii=False, indent=1)
print(len(K), "şehir ->", yol)
