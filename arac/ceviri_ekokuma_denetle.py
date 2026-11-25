"""EK OKUMA ÇEVİRİSİ — MEKANİK DENETİM (CEVIRI-EKOKUMA-1125). Çevirenden AYRI göz.

  py arac/ceviri_ekokuma_denetle.py --dil en --is is.json --girdi cevap.json [--rapor r.json]

is.json  : `ceviri.py bayat --tur ekokuma` çıktısı ({"kaynak": {id: {alan: türkçe}}})
cevap.json: {"tur":"ekokuma","kayit":{id:{alan: çeviri}}}
HATA (uygulanmaz, yeniden çevrilir): eksik kart/alan · boş · yıl (3-4 haneli sayı) kayıp ·
  paragraf sayısı farklı · imler (①… ■ •) kayıp · hedef yazıda olmayan metin · Türkçe kalıntı ·
  aşırı kısa/uzun.
UYARI (göz atılır): öteki sayılar uyuşmuyor (yüzyıl, ay adı, sayının yazıyla yazılması olabilir) ·
  kaynakla birebir aynı uzun olmayan alan.
Anlam doğruluğunu ÖLÇMEZ. Çıkış: 0 hata yok · 1 hata var · 2 ölçülemedi.
"""
import argparse, json, re, sys, unicodedata

YAZI = {  # dil → hedef yazının Unicode aralıkları
    "ar": r"؀-ۿ", "fa": r"؀-ۿ", "ur": r"؀-ۿ",
    "ru": r"Ѐ-ӿ", "bg": r"Ѐ-ӿ", "el": r"Ͱ-Ͽἀ-῿",
    "hi": r"ऀ-ॿ", "bn": r"ঀ-৿", "zh": r"一-鿿",
    "ja": r"぀-ヿ一-鿿", "ko": r"가-힯",
}
# Latin yazılı dillerde Türkçe kalıntı: sık Türkçe işlev sözcükleri (özel adlar bunlara girmez)
TR_SOZ = re.compile(r"(?<![\w'’])(ve|bir|için|ile|olarak|sonra|önce|göre|değil|ancak|çünkü|olan|"
                    r"oldu|edildi|daha|gibi|kadar|üzerine|tarafından|yılında)(?![\w'’])", re.IGNORECASE)
TR_HARF = re.compile(r"[ğışİĞŞı]")
IMLER = "①②③④⑤⑥⑦⑧⑨⑩⑪⑫⑬⑭⑮⑯⑰⑱⑲⑳■•"


def rakamlar(s):
    """Metindeki sayılar (her yazının rakamı ASCII'ye; binlik ayracı atılır)."""
    s = "".join(str(unicodedata.digit(c)) if unicodedata.category(c) == "Nd" else c for c in s)
    s = re.sub(r"(?<=\d)[.,٬   ](?=\d{3}(?!\d))", "", s)
    return re.findall(r"\d+", s)


def paragraf(s):
    return len([p for p in re.split(r"\n{2,}|\n(?=•)", s) if p.strip()])


def denetle(dil, kaynak, kayit):
    hata, uyari = [], []
    for kid, alanlar in kaynak.items():
        c = kayit.get(kid)
        if not isinstance(c, dict):
            hata.append((kid, "*", "kart yok"))
            continue
        for alan in c:
            if alan not in alanlar:
                hata.append((kid, alan, "kaynakta olmayan alan"))
        for alan, tr in alanlar.items():
            m = c.get(alan)
            if not isinstance(m, str) or not m.strip():
                hata.append((kid, alan, "eksik/boş"))
                continue
            sm, sk = rakamlar(m), rakamlar(tr)
            kayip = [x for x in set(sk) if sk.count(x) > sm.count(x)]
            yil = sorted(x for x in kayip if len(x) in (3, 4) and x not in sm)
            if yil:
                hata.append((kid, alan, "yıl/büyük sayı kayıp: " + ",".join(yil)))
            kalan = sorted(set(kayip) - set(yil))
            fazla = sorted(x for x in set(sm) - set(sk) if len(x) in (3, 4))
            if kalan or fazla:
                uyari.append((kid, alan, "sayı farkı: kayıp %s · fazla %s" % (kalan, fazla)))
            if paragraf(m) != paragraf(tr):
                hata.append((kid, alan, "paragraf sayısı %d→%d" % (paragraf(tr), paragraf(m))))
            for im in IMLER:
                if tr.count(im) != m.count(im):
                    hata.append((kid, alan, "im sayısı farklı: " + im))
            if len(tr) > 60:
                harf = sum(ch.isalpha() for ch in m) or 1
                if dil in YAZI:
                    oran = len(re.findall("[%s]" % YAZI[dil], m)) / harf
                    if oran < 0.6:
                        hata.append((kid, alan, "hedef yazı oranı düşük %.2f" % oran))
                soz = TR_SOZ.findall(m)
                if dil == "az":
                    pass          # Azerbaycanca ortak sözcük taşır; yalnız aynılık ölçülür
                elif len(soz) >= 3 and len(soz) / max(len(m.split()), 1) > 0.02:
                    hata.append((kid, alan, "Türkçe kalıntı: " + " ".join(soz[:6])))
                if dil in YAZI and len(TR_HARF.findall(m)) > 5:
                    uyari.append((kid, alan, "Latin/Türkçe harfli parça çok"))
                r = len(m) / len(tr)
                alt, ust = (0.3, 1.3) if dil in ("zh", "ja", "ko") else (0.7, 2.0)
                if not alt <= r <= ust:
                    hata.append((kid, alan, "uzunluk oranı %.2f" % r))
                if m.strip() == tr.strip():
                    hata.append((kid, alan, "kaynakla aynı"))
            elif m.strip() == tr.strip() and TR_HARF.search(tr):
                uyari.append((kid, alan, "kaynakla aynı: " + tr[:50]))
    return hata, uyari


def main():
    try:
        sys.stdout.reconfigure(encoding="utf-8", errors="replace")
    except AttributeError:
        pass
    ap = argparse.ArgumentParser()
    ap.add_argument("--dil", required=True)
    ap.add_argument("--is", dest="is_", required=True)
    ap.add_argument("--girdi", required=True)
    ap.add_argument("--rapor")
    a = ap.parse_args()
    try:
        with open(a.is_, encoding="utf-8-sig") as f:
            kaynak = json.load(f)["kaynak"]
        with open(a.girdi, encoding="utf-8-sig") as f:
            kayit = json.load(f)["kayit"]
    except (OSError, ValueError, KeyError) as e:
        print("ÖLÇÜLEMEDİ:", e)
        return 2
    hata, uyari = denetle(a.dil, kaynak, kayit)
    for ad, liste in (("HATA", hata), ("uyarı", uyari)):
        for kid, alan, ne in liste:
            print("%s  %s · %s · %s" % (ad, kid, alan, ne))
    print("denetim [%s]: kart %d · alan %d · hata %d · uyarı %d"
          % (a.dil, len(kaynak), sum(map(len, kaynak.values())), len(hata), len(uyari)))
    if a.rapor:
        with open(a.rapor, "w", encoding="utf-8") as f:
            json.dump({"hata": hata, "uyari": uyari}, f, ensure_ascii=False, indent=1)
    return 1 if hata else 0


if __name__ == "__main__":
    sys.exit(main())
