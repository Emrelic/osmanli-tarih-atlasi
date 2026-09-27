"""ISGAL-BATI-0077 — data/yerlesimler.js'e YALNIZ `isg:` ekler (s/d/v/koordinata dokunmaz).

Kullanım:  py denetim/ISGAL-BATI-0077-yama.py <hedef.js> [--uygula]
--uygula yoksa yalnız ne yapacağını basar (kuru koşu).
Kayıtta zaten `isg:` varsa DOKUNMAZ ve bildirir (üzerine yazmaz).
Kaynaklar ve hüküm gerekçesi: denetim/ISGAL-BATI-0077.md
"""
import sys, re
sys.stdout.reconfigure(encoding="utf-8", errors="replace")

YAMA = {
    "Tire": [("1919-05-28", "1922-09-04", "yunanistan",
              "TDV tire — 'Şehir 28 Mayıs 1919'da Yunan işgaline uğradı ve 4 Eylül 1922'de kurtarıldı.'")],
    "Ayasuluk (Selçuk)": [("1919-05-22", "1922-09-08", "yunanistan",
              "TDV ayasuluk — '22 Mayıs 1919'da Yunan işgaline uğramış ve 8 Eylül 1922'de kurtarılmıştır.' · 16-22 Mayıs İtalyan evresi (TDV sevr-antlasmasi) YAZILMADI: İtalyanların çıkış günü kaynakta yok"),],
    "Balıkesir": [("1920-06-30", "1922-09-06", "yunanistan",
              "TDV balikesir-kongreleri — 'Yunanlılar 30 Haziran'da Balıkesir'e girdiler' · 'Balıkesir'in Yunan işgalinden kurtulduğu 6 Eylül 1922'")],
    "İnegöl": [("1920-10-25", "1922-09-06", "yunanistan",
              "f: TDV milli-mucadele — 'Bursa'da bulunan Yunan birlikleri 25 Ekim'de İnegöl ve Yenişehir'i ele geçirdi' (Selvi 27 Ekim diyor; TDV esas) · t: Haluk Selvi, 'Bursa Vilayeti'nde Yunan Vahşet ve Soykırımı', TTK 2024 — 'Millî Kuvvetler 6 Eylül 1922'de Yenişehir ve İnegöl'e … girdiler'")],
    "Yenişehir (Bursa)": [("1920-10-25", "1922-09-06", "yunanistan",
              "f: TDV milli-mucadele — 'Bursa'da bulunan Yunan birlikleri 25 Ekim'de İnegöl ve Yenişehir'i ele geçirdi' (Selvi 27 Ekim diyor; TDV esas) · t: Haluk Selvi, 'Bursa Vilayeti'nde Yunan Vahşet ve Soykırımı', TTK 2024 — 'Millî Kuvvetler 6 Eylül 1922'de Yenişehir ve İnegöl'e … girdiler'")],
    # H-0073 — Doğu Trakya (yetki kutusu içinde kalan tek nokta)
    "Gelibolu": [("1920-08-04", "1922-10-03", "yunanistan",
              "TDV gelibolu — '4 Ağustos 1920'de Yunanlılar tarafından işgal edildiyse de 3 Ekim 1922'de terkedildi'")],
}

# YETKİ KUTUSU (36.3-40.7K, 26-31.6D, M-5217) DIŞINDA — UYGULANMAZ, öneri olarak durur.
ONERI = {
    "Tekirdağ": [("1920-06-20", "1922-11-13", "yunanistan",
              "TDV tekirdag — 'Yunanlılar 20 Haziran 1920'de Tekirdağ'a girdiler' · 'Mudanya Mütarekesi'yle şehir boşaltılarak Türkler'e iade edildi (13 Kasım 1922)'")],
}
if "--oneri" in sys.argv:
    YAMA = {**YAMA, **ONERI}


def isg_metni(donemler):
    parca = []
    for f, t, d, k in donemler:
        k = k.replace('"', "'")
        parca.append(f'{{f:"{f}",t:"{t}",d:"{d}",kaynak:"{k}"}}')
    return "isg:[" + ",".join(parca) + "]"


def main():
    yol = sys.argv[1]
    uygula = "--uygula" in sys.argv
    satirlar = open(yol, encoding="utf-8").read().split("\n")
    degisen = 0
    for ad, donemler in YAMA.items():
        bas = [i for i, s in enumerate(satirlar) if f'ad:"{ad}"' in s]
        if len(bas) != 1:
            print(f"  ✗ {ad}: {len(bas)} eşleşme — ATLANDI"); continue
        i = bas[0]
        # kaydın kapandığı satır: süslü parantez derinliğinin 0'a döndüğü satır
        # (dizge içindeki parantezler sayılmaz)
        j, derin = i, 0
        while True:
            temiz = re.sub(r'"(?:[^"\\]|\\.)*"', '""', satirlar[j])
            derin += temiz.count("{") - temiz.count("}")
            if derin == 0:
                break
            j += 1
        kayit = "\n".join(satirlar[i:j + 1])
        if "isg:" in kayit:
            print(f"  ⚠️ {ad}: zaten isg: var — DOKUNULMADI"); continue
        m = re.search(r"\s*\},?\s*$", satirlar[j])
        yeni = satirlar[j][:m.start()] + ", " + isg_metni(donemler) + satirlar[j][m.start():]
        print(f"  ✓ {ad}: satır {j + 1}")
        satirlar[j] = yeni
        degisen += 1
    print(f"değişen kayıt: {degisen}/{len(YAMA)}")
    if uygula:
        open(yol, "w", encoding="utf-8", newline="").write("\n".join(satirlar))
        print("yazıldı:", yol)


if __name__ == "__main__":
    main()
