"""Kronoloji maddelerinin b/d metinlerinde bozukluk sınıflarını sayar.

Sınıflar:
  (a) iç şablon sızıntısı  [KESİN BOZUK — çıkışı belirler]
  (b) açıklaması noktasız/kesik biten (>60 karakter)
  (c) açıklaması İngilizce
  (d) diyakritiksiz Türkçe aday
  (e) başlıkla açıklaması aynı

Çıkış: 0 temiz · 1 (a) > BEKLENEN_SIZINTI · 2 ölçülemedi.
Kullanım: py arac/metin_bozuk.py [--liste] [--sinif a|b|c|d|e]
"""
import json, os, re, subprocess, sys

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
BEKLENEN_SIZINTI = 0   # (a) sınıfı tavanı: bugünkü ölçüm, yalnız gerileme bloke eder

SIZINTI = re.compile(
    r"s: dizisinde|s: sahiplik dizisinde|De[gğ]i[sş]mez\s*\d|d[oö]nem ucu kayd|"
    r"data/[a-z_]+\.js|(^|\s)kur:|\sf/t\s", re.I)
BEKLENEN_A2 = 11       # (f) ikinci sınıf makine yazısı tavanı (22 Kas 2026 ölçümü: 8 'ay' hassasiyeti + 3 serbest metin)
BEKLENEN_KIMLIK = 133  # (g) ham devlet kimliği tavanı (serbest metinde; kural tabanlı düzeltilemedi)

# (f) ikinci sınıf sızıntı: iç etiket/makine yazısı (ilk sınıf SIZINTI'dan ayrıdır)
A2 = re.compile(
    r"\bs: (?:kaynak|zincir|dizi|sahiplik)|ilgili yerleşimin s:|yerleşiminin s:|"
    r"\b\w* ?(?:yama|önek|BOŞLUK) dilim\w*|\bkuyruk(?:cin|\d[0-9a-z]*)?\b|atlas yerleşimi|"
    r"Gün/yıl hassasiyeti: [a-z]+|__BOSLUK__|atlasta bu günden önce", re.I)
KIMLIK_ADAY = re.compile(r"(?<![A-Za-z0-9_/-])[a-z0-9]+(?:-[a-z0-9]+)+(?![A-Za-z0-9_-])")


def devlet_idleri():
    """data/devletler.js'ten {id: ad} okur (düz regex; dosya JS'tir)."""
    try:
        with open(os.path.join(KOK, "data", "devletler.js"), encoding="utf-8") as fh:
            ham = fh.read()
    except OSError:
        return {}
    return dict(re.findall(r'\bid\s*:\s*"([^"]+)"\s*,\s*ad\s*:\s*"([^"]+)"', ham))


IDLER = devlet_idleri()
BITIS = tuple(".!?…)”\"’'»]")
ING = set("the of and in was to is by with for from at as that which were his her their its on an after "
          "before during under into between".split())
DIYAKRITIKSIZ = set("icin olarak baslar baslangici donemi donemine sonra gore yili yil savasi savas "
                    "hanedani imparatorlugu kralligi devleti cikti dogdu oldu olur oldugu ilk ikinci "
                    "uzerine tarafindan ile ancak fakat sehri sehir hukumdar hukumdari kurdu kurulus "
                    "bitti sona erdi ele gecirdi yikildi yikilis".split())
TR_HARF = re.compile(r"[çğıöşüÇĞİÖŞÜ]")


def olaylar():
    try:
        r = subprocess.run(["node", os.path.join(KOK, "arac", "metin_bozuk_cikar.js"), KOK],
                           capture_output=True, timeout=600)
    except (OSError, subprocess.TimeoutExpired) as e:
        print("ÖLÇÜLEMEDİ: node çalışmadı:", e)
        sys.exit(2)
    if r.returncode != 0:
        print("ÖLÇÜLEMEDİ: çıkarıcı çöktü:", r.stderr.decode("utf-8", "replace")[:1500])
        sys.exit(2)
    return json.loads(r.stdout.decode("utf-8"))


def kelimeler(s):
    return re.findall(r"[A-Za-zÇĞİÖŞÜçğıöşü']+", s.lower().replace("İ", "i").replace("I", "ı"))


def norm(s):
    return re.sub(r"\W+", "", s.replace("İ", "i").replace("I", "ı").lower())


def siniflar(o):
    b, d = o["b"], o["d"].strip()
    s = []
    if SIZINTI.search(d) or SIZINTI.search(b):
        s.append("a")
    if A2.search(d) or A2.search(b):
        s.append("f")
    if any(t in IDLER for t in KIMLIK_ADAY.findall(d) + KIMLIK_ADAY.findall(b)):
        s.append("g")
    if d and len(d) > 60 and not d.endswith(BITIS):
        s.append("b")
    if d:
        k = kelimeler(d)
        ing = sum(1 for w in k if w in ING)
        if len(k) >= 5 and ing >= 3 and ing / len(k) > 0.15 and not TR_HARF.search(d):
            s.append("c")
        elif len(k) >= 4 and not TR_HARF.search(d) and sum(1 for w in k if w in DIYAKRITIKSIZ) >= 2 \
                and ing < 3:
            s.append("d")
        if norm(b) == norm(d):
            s.append("e")
    return s


def main():
    liste = "--liste" in sys.argv
    sec = sys.argv[sys.argv.index("--sinif") + 1] if "--sinif" in sys.argv else None
    j = olaylar()
    if j["hatalar"]:
        print("ÖLÇÜLEMEDİ: yüklenemeyen dosya:", j["hatalar"][:3])
        sys.exit(2)
    sayi = {c: 0 for c in "abcdefg"}
    dosya = {}
    for o in j["olay"]:
        for c in siniflar(o):
            sayi[c] += 1
            if c in "afg":
                dosya[(c, o["dizi"])] = dosya.get((c, o["dizi"]), 0) + 1
            if liste and (sec is None or sec == c):
                print("(%s) %s %s#%d | %s | %s" % (c, o["dizi"], o["t"], o["n"], o["b"][:80], o["d"][:140]))
    ad = {"a": "iç şablon sızıntısı [kesin bozuk]", "b": "noktasız/kesik biten (>60)",
          "c": "İngilizce açıklama", "d": "diyakritiksiz Türkçe aday", "e": "başlık = açıklama",
          "f": "ikinci sınıf makine yazısı [kesin bozuk]", "g": "ham devlet kimliği [kesin bozuk]"}
    print("madde taranan: %d" % len(j["olay"]))
    for c in "abcdefg":
        print("  (%s) %-36s %d" % (c, ad[c], sayi[c]))
    for (c, k), v in sorted(dosya.items()):
        print("      (%s) %s: %d" % (c, k, v))
    ihlal = False
    for c, tavan in (("a", BEKLENEN_SIZINTI), ("f", BEKLENEN_A2), ("g", BEKLENEN_KIMLIK)):
        if sayi[c] > tavan:
            print("İHLAL: (%s) %d > tavan %d" % (c, sayi[c], tavan))
            ihlal = True
    if ihlal:
        sys.exit(1)
    print("TEMİZ: (a)/(f)/(g) <= tavan")
    sys.exit(0)


if __name__ == "__main__":
    main()
