# -*- coding: utf-8 -*-
"""KASA-POLONYA-1005 — data/kronoloji_sinir_polonya_1915.js üreticisi.

Her madde bir şehrin Rus idaresinden çıkışını (ya da Kielce 1914 ara
penceresini) tarihler. Alıntılar denetim/KASA-POLONYA-1005.md §1'de AYNEN.
Çalıştır:  py denetim/ARAC-KASA-POLONYA-1005-URET.py
"""
import json, os, sys

KOK = sys.argv[1] if len(sys.argv) > 1 else os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
CIKTI = os.path.join(KOK, "data", "kronoloji_sinir_polonya_1915.js")

K_KOS = ("E. Kosińska, T. Kosiński, «Kielce w pierwszym roku Wielkiej Wojny», Rocznik Muzeum "
         "Narodowego w Kielcach t. 15 (1986-1987), s. 231-257 — bazhum.muzhp.pl")
K_JAR = ("W. Jarosławski, «Stosunek ludności polskiej do wycofujących się wojsk niemieckich z terenów "
         "Królestwa Polskiego w 1918 roku», Officina Historiae nr 5 (2022), s. 47 vd. — czasopisma.uph.edu.pl")
K_MIK = ("P. Mikietyński, Niemiecka droga ku Mitteleuropie. Polityka II Rzeszy wobec Królestwa Polskiego "
         "(1914-1916), Kraków: UJ/Historia Iagellonica, ISBN 978-83-88737-09-1 — ruj.uj.edu.pl")
K_IPN = ("K. Frączkiewicz, «Niemcy w Królestwie w roku 1914», Przystanek Historia (IPN) — "
         "przystanekhistoria.pl/pa2/tematy/niemcy/85364")
K_STA = ("Z. Stankiewicz, «Okupacyjny garnizon austriacki w Zamościu 1915–1918», Archiwariusz Zamojski "
         "t. XIX (2021), s. 53-74 — czaz.akademiazamojska.edu.pl")
K_RAD = ("Urząd Miejski w Radomiu, «Radom w okresie rozbiorów» — miasto.radom.pl · Muzeum im. Jacka "
         "Malczewskiego w Radomiu, «Radomianie na drodze do niepodległości» — muzeum.edu.pl")
K_CHE = ("Chełmska Biblioteka Publiczna (cyfrowa.chbpchelm.pl), Chełm eğitim tarihi monografisi, "
         "«Rozdział VI Oświata i szkolnictwo» — Content/628/012r6.pdf")

RP = ["rusya", "kongre-polonyasi"]


def madde(t, devlet, taraflar, b, yer, gun, d, kaynak, tur="isgal", onem=3, ic=None):
    m = {"t": t, "devlet": devlet, "taraflar": taraflar, "b": b, "tur": tur, "onem": onem,
         "dunya": 2, "kapsam": "dis",
         "etiket": ["sinir", "1-dunya-savasi", "dogu-cephesi", "sinif-d", "konu-siyasi"] + taraflar,
         "yer_id": yer, "gun": gun, "d": d, "kaynak": kaynak, "sinif": "D"}
    if ic:
        m["ic_not_gun"] = ic
    return m


M = [
    madde("1914-08-03", "almanya", ["almanya"] + RP,
          "Alman birlikleri Częstochowa'ya girdi", "Częstochowa", "3 Ağustos 1914",
          "Savaşın ilk günlerinde Rus birlikleri sınır şehirlerinden çekildi; Alman askerleri 3 Ağustos "
          "1914'te Częstochowa'ya girdi. Rusların 1914 sonbaharında bölgeyi geri alma girişimleri sonuçsuz "
          "kaldı; şehir savaşın sonuna dek Alman idaresinde kaldı.", K_IPN, onem=3),
    madde("1914-08-12", "avusturya", ["avusturya"] + RP,
          "Piłsudski'nin strzelcy birlikleri Kielce'ye girdi", "Kielce", "12 Ağustos 1914",
          "Belina-Prażmowski'nin süvarisinin ardından Józef Piłsudski'nin strzelcy taburu 12 Ağustos 1914 "
          "öğleden sonra Kielce'ye girdi. Ertesi sabah Rus süvarisi saldırınca birlikler on iki saat sonra "
          "Chęciny yönüne çekildi.", K_KOS, onem=3),
    madde("1914-08-13", "rusya", RP + ["avusturya"],
          "Ruslar Kielce'yi geri aldı", "Kielce", "13 Ağustos 1914",
          "13 Ağustos 1914 sabahı Rus süvarisi topçu desteğiyle saldırdı; Sosnkowski geri çekilme emri verdi, "
          "strzelcy birlikleri Kielce'yi terk etti.", K_KOS, onem=2),
    madde("1914-08-19", "avusturya", ["avusturya"] + RP,
          "Polonya birlikleri Kielce'ye yeniden girdi", "Kielce", "19 Ağustos 1914",
          "19 Ağustos 1914'te Kielce'ye gönderilen Belina öncüsü ve Norwid-Neugebauer taburu şehirde Rus "
          "birliği bulmadı. 22 Ağustos'ta Piłsudski birliklerin NKN'ye katıldığını ilan etti; 27 Ağustos'ta "
          "bir Alman birliği de şehre girdi.", K_KOS, onem=2),
    madde("1914-09-11", "rusya", RP + ["avusturya", "almanya"],
          "Kazaklar Kielce'ye girdi — Rus idaresi döndü", "Kielce", "11 Eylül 1914",
          "Avusturya ve Alman birlikleri Lejyon taburlarıyla birlikte 10 Eylül 1914'te Kielce'den çekildi. "
          "11 Eylül sabah 8'de ilk Kazak öncüleri girdi, 17 Eylül'de vali döndü.", K_KOS, onem=2),
    madde("1914-09-30", "almanya", ["almanya"] + RP,
          "Alman ordusu Kielce'yi aldı", "Kielce", "30 Eylül 1914",
          "Rus memurları Włoszczowa'nın düşmesi üzerine 26 Eylül'den itibaren şehri terk etti, 29 Eylül'de "
          "hiçbiri kalmamıştı. Güneyden ilerleyen Alman birlikleri 30 Eylül 1914'te Kielce'yi aldı; "
          "Hindenburg'un 9. Ordu karargâhı şehre yerleşti.", K_KOS, onem=3),
    madde("1914-11-02", "rusya", RP + ["almanya", "avusturya"],
          "Merkezî Devletler Kielce'den çekildi; Rus valisi 9 Kasım'da döndü", "Kielce", "2 Kasım 1914",
          "Varşova önündeki taarruzun başarısızlığıyla geri çekilen Avusturya birlikleri 28 Ekim'de Kielce'ye "
          "girdi, 2 Kasım 1914'te Almanlarla birlikte şehri terk etti. 42 günlük aradan sonra Rus valisi "
          "memurları ve polisiyle 9 Kasım'da döndü ve Mayıs 1915'e kadar kaldı.", K_KOS, onem=2,
          ic="Rus birliklerinin 2-9 Kasım arasındaki dönüş günü kaynakta YOK; kaynakta yalnız valinin 9 Kasım dönüşü var."),
    madde("1914-12-06", "almanya", ["almanya"] + RP,
          "Alman ordusu Łódź'u aldı", "Łódź", "6 Aralık 1914",
          "Aralık 1914'te Merkezî Devletler Rus taarruzunu durdurup karşı saldırıya geçti; Almanlar 6 Aralık "
          "1914 öğleden sonra Łódź'a girdi. Şehir savaşın sonuna dek Alman idaresinde kaldı.",
          K_JAR + " · " + K_MIK, onem=4,
          ic="IPN (Frączkiewicz) 5 Aralık 1914 diyor; iki akademik kaynak 6 Aralık (Mikietyński: öğleden sonra)."),
    madde("1915-05-13", "almanya", ["almanya"] + RP,
          "Ruslar Kielce'yi tahliye etti, Alman ordusu şehre girdi", "Kielce", "13 Mayıs 1915",
          "Gorlice yarmasının ardından Rus valilik idaresi 12 Mayıs 1915'te Varşova'ya tahliye edildi. Alman "
          "birlikleri 13 Mayıs sabah 5'te Kielce'ye girdi; Ruslar çekilirken havagazı fabrikasını tahrip "
          "etmişti.", K_KOS, onem=3),
    madde("1915-07-01", "almanya", ["almanya"] + RP,
          "Mackensen'in birlikleri Zamość'u aldı", "Zamość", "1 Temmuz 1915",
          "Mackensen'in 11. Ordusuna bağlı XXII. Yedek Kolordu birlikleri 1 Temmuz 1915'te Zamość'u aldı; "
          "aynı gün işgalcinin emriyle geçici şehir idaresi kuruldu. Eylül 1915'te Zamość bölgesi "
          "Avusturya işgal idaresine geçti.", K_STA, onem=3),
    madde("1915-07-01", "avusturya", ["avusturya"] + RP,
          "Radom Avusturya birliklerince işgal edildi (Temmuz 1915)", "Radom (Polonya)",
          "Temmuz 1915 (ay düzeyi; gün kaynaklanmadı)",
          "Temmuz 1915'te Radom Avusturya birliklerince işgal edildi. Kaynaklar yalnız ayı veriyor; tarih "
          "ay düzeyinde, gün belirtilmemiştir.", K_RAD, onem=3,
          ic="AY DÜZEYİ (D213): t ayın 1'i ama gün kaynakta yok — belediye + Malczewski Müzesi yalnız 'lipiec/latem 1915'. Bir arama özetindeki '20 lipca' kaynağı bulunamadığı için kullanılmadı."),
    madde("1915-08-01", "avusturya", ["avusturya"] + RP,
          "Ruslar çekildi, Avusturya birlikleri Chełm'e girdi (Ağustos 1915)", "Chełm (Kholm)",
          "Ağustos 1915 (ay düzeyi; gün kaynaklanmadı)",
          "Ağustos 1915'te Rus birlikleri çekildi ve Avusturyalılar Chełm'e girdi; 1912'den beri ayrı "
          "valiliğin merkezi olan şehirde Ruslaştırma politikası sona erdi. Kaynak yalnız ayı veriyor.",
          K_CHE, onem=3,
          ic="AY DÜZEYİ (D213): t ayın 1'i ama gün kaynakta yok. '1 Ağustos 1915' yalnız blog/forumda (§4 kırmızı liste) — KULLANILMADI."),
    madde("1915-08-05", "almanya", ["almanya"] + RP,
          "Alman ordusu Varşova'ya girdi", "Varşova", "5 Ağustos 1915",
          "Rus birliklerinin çoğu 4'ü 5'ine bağlayan gece Wisła'nın doğusuna, Praga yakasına çekildi. Alman "
          "birlikleri 5 Ağustos 1915'te Wola yönünden büyük direnişle karşılaşmadan Varşova'ya girdi.",
          K_JAR + " · " + K_IPN, onem=5,
          ic="kronoloji_cok_1dunya_A.js'te aynı günün maddesi VAR ama o dosya Değişmez 2 evreninde değil; bu madde sınır evrenine yazıldı. Arayüzde mükerrer görünürse koordinatör birini seçer."),
    madde("1915-09-01", "avusturya", ["avusturya", "almanya"],
          "Zamość bölgesi Avusturya işgal idaresine geçti (Eylül 1915)", "Zamość",
          "Eylül 1915 (ay düzeyi; gün kaynaklanmadı)",
          "Eylül 1915'te Zamość bölgesi Alman idaresinden Avusturya işgal idaresine geçti; Zamość bölge "
          "komutanlığı Avusturya Başkomutanlığının 4 Eylül 1915 tarihli emriyle kuruldu.", K_STA, onem=2,
          tur="idari",
          ic="AY DÜZEYİ: kaynak 'We wrześniu 1915 r.' diyor; 4 Eylül komutanlık emrinin günü, devir günü değil."),
    madde("1915-10-01", "avusturya", ["avusturya", "almanya"],
          "Kielce Avusturya-Macaristan Genel Valiliği idaresine geçti", "Kielce", "1 Ekim 1915",
          "Merkezî Devletler fethedilen Kongre Polonyası topraklarını paylaştı; Kielce 1 Ekim 1915'te "
          "Avusturya-Macaristan Genel Valiliğinin idaresine geçti.", K_KOS, onem=2, tur="idari"),
]

BASLIK = """// -*- coding: utf-8 -*-
// data/kronoloji_sinir_polonya_1915.js — SINIR KRONOLOJİSİ · KONGRE POLONYASI 1914-1915 · Rus idaresinden çıkış
// window.KRONOLOJI_SINIR_POLONYA_1915 — KASA-POLONYA-1005 · 5 Ekim 2026 · 🔴 ÜRETİLMİŞ DOSYA — elle düzenleme
// Üretici: denetim/ARAC-KASA-POLONYA-1005-URET.py · alıntılar AYNEN: denetim/KASA-POLONYA-1005.md §1
// Ay düzeyindeki maddeler `gun` alanında "(ay düzeyi; gün kaynaklanmadı)" taşır (D213) — t ayın 1'idir, gün DEĞİL.
// index.html'e BAĞLANMADI (koordinatör ekler). Lublin YOK: gün kaynaklanamadı.

window.KRONOLOJI_SINIR_POLONYA_1915 = [
"""

with open(CIKTI, "w", encoding="utf-8", newline="\n") as f:
    f.write(BASLIK)
    f.write(",\n".join(json.dumps(m, ensure_ascii=False) for m in M))
    f.write("\n];\n")
print(f"{len(M)} madde → {CIKTI}")
