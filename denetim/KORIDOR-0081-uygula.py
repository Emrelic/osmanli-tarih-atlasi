"""KORIDOR-0081 — uygulayıcı (koordinatör koşturur; işçi data/ yazmaz, §7).

Kapsam — YALNIZ kaynağı açık iki kalem (rapor: denetim/KORIDOR-0081.md):

  H-0030  Una-Sava "boşluğu" (1478): altı yerleşimin Osmanlı fethinden ÖNCEKİ
          sahiplik dönemi YOK ⇒ motor o alanı BOŞ çiziyor (uret_petek.py ~4604:
          "kurulmamış VE sahipsiz alan boş"). Koridor sınıfı DEĞİL, öncü boşluk.
          Çare: fetihten önceki `s:` yazılır — 1281→1526-08-29 `macaristan`
          (künye t: sınır işareti, Zagreb/Sisak aynı uç), 1526-08-29→fetih
          `avusturya`. Krupa'nın `kur:"1565-01-01"` alanı FETİH yılıdır,
          kuruluş değil (HE: XIII. yy sonunda anılıyor) ⇒ silinir.
          Fetih günlerine DOKUNULMAZ (HE ile çelişkiler raporda ⑥ olarak).
  H-0028  1428 maddesi Alacahisar + Şehirköy'ü anıyor, aynı yıl geri alınan
          Niş'i ANMIYOR (TDV nis: "831'de (1428) Osmanlılar şehri geri aldı").
          Harita Niş'i 1428'de zaten boyuyor; eksik olan kronolojinin adı.
  H-0025  1444 iade maddesi yalnız Semendire'yi anıyor; iade edilen öteki
          yerler TDV'den adıyla eklenir (tarih alanına DOKUNULMAZ).
  H-0008  Uzunköprü'ye `kur:"1443-01-01"` (TDV murad-ii: Ergene Köprüsü 1443).

Kullanım:  py denetim/KORIDOR-0081-uygula.py            (kuru koşu, yazmaz)
           py denetim/KORIDOR-0081-uygula.py --uygula   (yazar)
Sonra:     py arac/denetle.py  (Değişmez 1 / 7 / 8 değişebilir — beklenen yön
           raporda) · koşu gerekir (motor çıktısı).
"""
import re
import sys

sys.stdout.reconfigure(encoding="utf-8")
YAZ = "--uygula" in sys.argv

YER = "data/yerlesimler_ek29.js"
KRONO = "data/olaylar_serhat.js"

MAC = ("HE (enciklopedija.hr) '{m}': {a} — Osmanlı fethinden önce "
       "hrvatsko-ugarsko krallığı içindeki beylik/soylu mülkü · krallık "
       "aidiyeti mülk sahiplerinden ÇIKARIM · 1526-08-29 = `macaristan` künye "
       "t: sınır işareti (Cetin seçimi 1527-01-01 alternatif) · KORIDOR-0081 H-0030")
AVU = ("HE '{m}': {a} · Mohaç sonrası Hırvatistan Habsburg tacına geçti "
       "(Zagreb/Sisak ile aynı uç; atlas kaydı DAYANAK DEĞİL, künye sınırı) · "
       "KORIDOR-0081 H-0030")

# ad → (HE maddesi, fetihten önceki sahipleri — HE'nin kendi cümlesi, özet)
KAYIT = {
    "Krupa (Bosanska Krupa)": (
        "Bosanska Krupa",
        "XIII. yy sonu hrvatska županija Pset; 1361 Kral I. Lajos, 1396 Kral "
        "Sigismund bağışı; 1531 Zrinski; Osmanlı 1565"),
    "Bosna Novi'si (Bosanski Novi)": (
        "Novi Grad",
        "1280 Castrum Novum; XVI. yy başına dek Babonić knezleri, sonra "
        "Nikola Zrinski; Osmanlı 1557 (atlas 1556 — çelişki raporda)"),
    "Bosna Dubiçası (Bosanska Dubica)": (
        "Kozarska Dubica",
        "1256 castrum; 1269 ivanovci (Hospitalier) mülkü; 1398-1402 Hrvoje "
        "Vukčić; Osmanlı 1538"),
    "Kostayniçe (Kostajnica)": (
        "Hrvatska Kostajnica",
        "1258 Kral IV. Béla bağışı; 1395-1528 on beş kez sahip değiştirdi "
        "(Frankapan, Vuk Branković…); 1528-1566 Zrinski; 1556 Malkoç Bey"),
    "Jasenovaç (Jasenovac)": (
        "Jasenovac",
        "XIV. yy'da yerleşim ve kale; Husrev Bey 1536 (atlas 1538 — çelişki "
        "raporda)"),
    "Bosna Brod'u (Bosanski Brod)": (
        "Brod",
        "Ortaçağda Boričević/Berislavić soylu mülkü; Osmanlı 1536 (atlas "
        "1538 — çelişki raporda)"),
}


def kayit_sinir(metin, ad):
    bas = metin.find('ad:"' + ad + '"')
    if bas < 0 or metin.count('ad:"' + ad + '"') != 1:
        raise SystemExit(f"DUR: '{ad}' {YER}'de tam bir kez bulunmadı")
    son = metin.find("\n{ ad:", bas)
    return bas, (son if son > 0 else len(metin))


def yerlesim(metin):
    for ad, (madde, ozet) in KAYIT.items():
        bas, son = kayit_sinir(metin, ad)
        govde = metin[bas:son]
        if 'd:"macaristan"' in govde:
            raise SystemExit(f"DUR: '{ad}' zaten macaristan dönemi taşıyor — iki kez koşulmuş?")
        fetih = min(re.findall(r'\n  d:\[\{f:"(\d{4}-\d\d-\d\d)"', govde))
        m = re.search(r"\n  s:\[", govde)
        if not m:
            raise SystemExit(f"DUR: '{ad}' içinde '  s:[' yok")
        ek = (f'{{f:"1281-01-01",t:"1526-08-29",d:"macaristan",'
              f'kaynak:"{MAC.format(m=madde, a=ozet)}"}},'
              f'{{f:"1526-08-29",t:"{fetih}",d:"avusturya",'
              f'kaynak:"{AVU.format(m=madde, a=ozet)}"}},')
        yeni = govde[:m.end()] + ek + govde[m.end():]
        if ad.startswith("Krupa"):
            if yeni.count('\n  kur:"1565-01-01",') != 1:
                raise SystemExit("DUR: Krupa kur: satırı beklenen biçimde değil")
            yeni = yeni.replace('\n  kur:"1565-01-01",', "", 1)
        metin = metin[:bas] + yeni + metin[son:]
        print(f"  {ad}: +macaristan 1281→1526-08-29 · +avusturya 1526-08-29→{fetih}"
              + (" · kur: silindi" if ad.startswith("Krupa") else ""))
    return metin


def uzunkopru(metin):
    """H-0008: Uzunköprü noktası 1281-1371 `bizans` taşıyor, ama kasaba
    Ergene Köprüsü'yle doğdu — TDV murad-ii: 'Ergene Köprüsü … 1443'te
    tamamlanmıştır … bir ucunda mescid, imaret, hamam ve pazarlar
    yaptırılarak'. `kur:` yazılınca motor kurulmamış-ama-boyanmış peteği
    komşuya devreder (uret_petek.py ~4604). `s:` dönemlerine DOKUNULMAZ."""
    eski = '{ ad:"Uzunköprü", tur:"sehir", lat:41.267, lon:26.688, g:0, k:3, m:"Edirne",'
    if metin.count(eski) != 1:
        raise SystemExit("DUR: Uzunköprü satırı beklenen biçimde değil")
    if 'ad:"Uzunköprü", tur:"sehir", lat:41.267, lon:26.688, g:0, k:3, m:"Edirne", kur:' in metin:
        raise SystemExit("DUR: Uzunköprü zaten kur: taşıyor")
    metin = metin.replace(eski, eski + ' kur:"1443-01-01",')
    print('  Uzunköprü: kur:"1443-01-01" (TDV murad-ii, YIL)')
    return metin


def kronoloji(metin):
    degis = [
        ('b:"II. Murad Alacahisar\'ı aldı, Şehirköy Osmanlı\'ya geri döndü"',
         'b:"II. Murad Alacahisar\'ı aldı, Niş ve Şehirköy Osmanlı\'ya geri döndü"'),
        ("Böylece Büyük Morava ile Nişava vadilerini",
         "TDV nis maddesine göre Osmanlılar Niş'i de aynı yıl (831/1428) geri "
         "aldı. Böylece Büyük Morava ile Nişava vadilerini"),
        ('kaynak:"alacahisar + sehirkoy" },', 'kaynak:"alacahisar + sehirkoy + nis" },'),
    ]
    for eski, yeni in degis:
        if metin.count(eski) != 1:
            raise SystemExit(f"DUR: {KRONO} içinde tam bir kez yok: {eski[:60]}")
        metin = metin.replace(eski, yeni)
    print("  1428 maddesi: Niş eklendi (b: · d: · kaynak:)")
    return metin


def kronoloji_1444(metin):
    """H-0025: harita 1444-08-01'de Niş · Alacahisar · Kragujevac · Yagodina ·
    Çaçak'ı da geri veriyor, madde yalnız Semendire'yi anıyor (Değişmez 2
    ±30 gün penceresi tutuyor ama okuyucu HANGİ YERLER sorusunun cevabını
    maddede bulamıyor)."""
    degis = [
        ("b:\"Semendire'nin fiilen Sırbistan'a iadesi\"",
         "b:\"Semendire ve Sırp kalelerinin Sırbistan'a iadesi\""),
        ("d:\"Edirne-Segedin Antlaşması'nın hükmü uygulamaya kondu, Semendire teslim edildi — ",
         "d:\"Edirne-Segedin Antlaşması'nın hükmü uygulamaya kondu: II. Murad 15 Ağustos "
         "1444'te Semendire'yi yirmi dört önemli kalesiyle ve işgal altındaki diğer Sırp "
         "topraklarıyla birlikte Curac Brankoviç'e geri verdi (TDV semendire); Niş (TDV nis), "
         "Alacahisar (TDV alacahisar), Şehirköy (TDV sehirkoy) ve Priştine (TDV pristine) de "
         "Sırplar'a bırakıldı. Vidin Sırp toprağı olmadığından iadeye girmedi — "),
        ('kaynak:"semendire", duygu:["😔"] },',
         'kaynak:"semendire + nis + alacahisar + sehirkoy + pristine", duygu:["😔"] },'),
    ]
    for eski, yeni in degis:
        if metin.count(eski) != 1:
            raise SystemExit(f"DUR: data/olaylar_ek.js içinde tam bir kez yok: {eski[:60]}")
        metin = metin.replace(eski, yeni)
    print("  1444 maddesi: iade edilen yerler adıyla eklendi")
    return metin


def main():
    for yol, is_ in ((YER, yerlesim), ("data/yerlesimler_ek24.js", uzunkopru),
                     (KRONO, kronoloji), ("data/olaylar_ek.js", kronoloji_1444)):
        with open(yol, encoding="utf-8") as f:
            eski = f.read()
        print(yol)
        yeni = is_(eski)
        if YAZ:
            with open(yol, "w", encoding="utf-8", newline="") as f:
                f.write(yeni)
    print("YAZILDI" if YAZ else "KURU KOŞU — hiçbir şey yazılmadı (--uygula ile yaz)")


if __name__ == "__main__":
    main()
