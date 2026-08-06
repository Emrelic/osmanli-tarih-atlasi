# -*- coding: utf-8 -*-
"""CLAUDE.md §1.5 "Bugün nerede duruyoruz" tablosunu ÜRETİR.

🔴 NİÇİN VAR — elle tutulan durum tablosu İKİ KEZ bayatladı ve iki kez yanılttı:
   1 Ağustos  NOKTA EKLEME oturumu tabloyu ölçüm tabanı olarak kullanmayı REDDETTİ
              (tablo 764·433·34 diyordu, gerçek başkaydı)
   4 Ağustos  ALTI SAYI birden bayattı (976→1713 · 1009→1141 · 213→302 · 104→233)
              ve üç oturum aynı gün bayat tabandan başladı
⇒ Ders: "bugün nerede duruyoruz" bir BELGE değil bir ÖLÇÜMDÜR. Elle yazılan her
  durum satırı, yazıldığı andan itibaren çürümeye başlar.

    py arac/durum_tablosu.py            # tabloyu ekrana bas
    py arac/durum_tablosu.py --yaz      # CLAUDE.md §1.5'i YERİNDE güncelle

⚠️ `--yaz` yalnız §1.5'in TABLO satırlarını değiştirir; altındaki ders metnine
   ve başlığa dokunmaz.
"""
import io, os, re, sys, glob, json, subprocess, collections

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8", errors="replace")
KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
os.chdir(KOK)
sys.path.insert(0, os.path.join(KOK, "arac"))
import girdi


def _oku(y):
    return io.open(y, encoding="utf-8", newline="").read()


def olc():
    o = {}
    Y = girdi.yukle(sessiz=True)
    o["yerlesim"] = len(Y)
    o["girdi_dosya"] = len(girdi.GIRDI_DOSYALARI)

    o["madde"] = sum(len(re.findall(r'\{\s*t:\s*"\d{4}(?:-\d{2}){0,2}"', _oku(f)))
                     for f in sorted(glob.glob("data/olaylar*.js")))
    o["duygu"] = sum(len(re.findall(r"duygu:\[", _oku(f)))
                     for f in glob.glob("data/olaylar*.js"))
    o["yer_id"] = sum(len(re.findall(r"yer_id:", _oku(f)))
                      for f in glob.glob("data/olaylar*.js"))
    o["vefat_id"] = sum(len(re.findall(r"vefat_id:", _oku(f)))
                        for f in glob.glob("data/olaylar*.js"))

    d = _oku("data/devletler.js")
    o["devlet"] = len(re.findall(r'\{\s*id:\s*"', d))
    diz = set(re.findall(r'\bid:\s*"([^"]+)"', d)) | set(re.findall(r'\bharita:\s*"([^"]+)"', d))
    # 🔴 DOSYA KÜMESİ `girdi.py`DEN ALINIR, `glob`dan DEĞİL.
    # İlk sürüm `glob("data/yerlesimler*.js")` kullanıyordu ve `ek10·ek11·ek12`yi
    # sayıyordu — o üçü renk beklediği için BAĞLI DEĞİL, yani haritada ÇİZİLMİYOR.
    # Sonuç: 47 kimlik / 365 pencere. Gerçek (boyanan): 45 / 359.
    # ⚠️ Fark küçük olduğu için "önemsiz sapma" diye geçilebilirdi — ÇAPRAZ AKDENİZ
    # geçmedi ve haklıydı: iki sayı SAPMA değil, İKİ AYRI SORUNUN cevabı.
    #     45/359  "bugün haritada boyanan kaç kimliğin dizin karşılığı yok"
    #     47/365  "ek10-12 merge edilince kaç olacak"
    # 📌 Ve bu, `CLAUDE.md §5`in ÜÇÜNCÜ vakası: desenle dosya okuyan her tarama
    # merge'e hazır olmayan partileri sessizce içeri alıyor ve sayı BÜYÜK çıkıyor.
    # Bu araç bayatlığı önlemek için yazıldı; ilk sürümü tam o kusuru taşıyordu.
    yer = [f for f in girdi.GIRDI_DOSYALARI if f.startswith("yerlesimler")]
    kul = collections.Counter()
    for f in yer:
        t = _oku(os.path.join("data", f))
        t = "\n".join(l for l in t.split("\n") if not l.lstrip().startswith("//"))
        for sm in re.finditer(r"\bs:\s*\[(.*?)\]\s*[,}]", t, re.S):
            for m in re.finditer(r'\bd:\s*"([^"]+)"', sm.group(1)):
                kul[m.group(1)] += 1
    eksik = {k: n for k, n in kul.items() if k not in diz}
    o["kimlik_eksik"] = len(eksik)
    o["kimlik_eksik_pencere"] = sum(eksik.values())

    o["renk"] = len(re.findall(r'^\s*"[a-z0-9\-]+"\s*:', _oku("arac/renkler.py"), re.M))
    o["padisah"] = len(re.findall(r'\{\s*id:\s*"', _oku("data/padisahlar.js")))
    o["portre"] = len(glob.glob("assets/portreler/*.jpg"))
    o["kart"] = len(re.findall(r"\bovgu:", _oku("data/padisahlar.js") + _oku("data/kisiler.js")))

    m = re.search(r"^BOLGE\s*=.*$", _oku("arac/uret_petek.py"), re.M)
    o["bolge"] = m.group(0).split("=", 1)[1].strip() if m else "?"

    # denetle.py'nin kendi hükümleri — yeniden hesaplamıyoruz, ONA soruyoruz
    try:
        c = subprocess.run([sys.executable if "py" not in sys.executable else "py",
                            "arac/denetle.py"], capture_output=True, timeout=900)
        cik = (c.stdout or b"").decode("utf-8", "replace")
    except Exception:
        cik = ""
    for ad, anahtar in (("d1", r"Değişmez 1 .*?(✓|✗)\s*(.*)"),
                        ("d1b", r"Değişmez 1b\s*(✓|✗)\s*(.*)"),
                        ("d2", r"Değişmez 2 \s*(✓|✗)\s*(.*)"),
                        ("d2s", r"Değişmez 2s\s*(✓|✗)\s*(.*)"),
                        ("d2i", r"Değişmez 2i\s*(✓|✗)\s*(.*)"),
                        ("d2t", r"Değişmez 2t\s*(✓|✗)\s*(.*)"),
                        ("konum", r"konum:\s*(.*)")):
        mm = re.search(anahtar, cik)
        o[ad] = (" ".join(mm.groups())).strip() if mm else "ölçülemedi"

    try:
        o["surum"] = re.search(r"\?v=(r\d+)", _oku("index.html")).group(1)
    except Exception:
        o["surum"] = "?"
    try:
        o["commit"] = subprocess.check_output(["git", "rev-parse", "--short", "HEAD"]).decode().strip()
    except Exception:
        o["commit"] = "?"
    return o


def tablo(o):
    s = []
    s.append("| Katman | Ölçülen durum |")
    s.append("|---|---|")
    s.append("| Yerleşim (motorun okuduğu) | **%d** nokta, %d girdi dosyası |"
             % (o["yerlesim"], o["girdi_dosya"]))
    s.append("| Kronoloji | **%d** madde · %d duygu etiketli · %d `yer_id` · %d `vefat_id` |"
             % (o["madde"], o["duygu"], o["yer_id"], o["vefat_id"]))
    s.append("| Değişmez 1 — sahipsizlik | %s |" % o["d1"])
    s.append("| Değişmez 1b — iç boşluk | %s |" % o["d1b"])
    s.append("| Değişmez 2 — Osmanlı senkronu | %s |" % o["d2"])
    s.append("| Değişmez 2s — yabancı senkron | %s |" % o["d2s"])
    s.append("| Değişmez 2i — işgal senkronu | %s |" % o["d2i"])
    s.append("| Değişmez 2t — kırılmasız madde | %s |" % o["d2t"])
    s.append("| Konum denetimi | %s |" % o["konum"])
    s.append("| Devletler dizini | **%d** künye · **%d** renk (`renkler.py`) |"
             % (o["devlet"], o["renk"]))
    # ⚠️ KAPSAM SATIRIN YANINDA YAZILIR. ÇAPRAZ AKDENİZ (6 Ağustos) haklı
    # olarak uyardı: bu sayı "BUGÜN HARİTADA BOYANAN" sorusunun cevabı.
    # `ek10-12` merge edilince başka bir sayı olur (47/365). İki sayı da
    # doğru, ama AYNI SORUNUN cevabı değil — kapsam yazılmazsa okuyan
    # hangisini gördüğünü bilmez.
    s.append("| Dizinsiz harita kimliği | 🔴 **%d** kimlik / %d pencere "
             "karşılıksız · *kapsam: `girdi.py`nin okuduğu %d dosya — "
             "bağlanmamış partiler HARİÇ* |"
             % (o["kimlik_eksik"], o["kimlik_eksik_pencere"], o["girdi_dosya"]))
    s.append("| Padişah · kartvizit | %d kayıt · %d portre · **%d** kartvizit dolu |"
             % (o["padisah"], o["portre"], o["kart"]))
    s.append("| Harita penceresi | `%s` |" % o["bolge"])
    s.append("| Yayın | **%s** · `%s` |" % (o["surum"], o["commit"]))
    return "\n".join(s)


if __name__ == "__main__":
    o = olc()
    t = tablo(o)
    print(t)
    if "--yaz" in sys.argv:
        y = "CLAUDE.md"
        h = _oku(y)
        nl = "\r\n" if "\r\n" in h else "\n"
        # §1.5 basligindan sonraki ILK tabloyu degistir
        m = re.search(r"(## 1\.5 [^\r\n]*(?:\r?\n)+)((?:\|[^\r\n]*(?:\r?\n))+)", h)
        if not m:
            raise SystemExit("!! §1.5 tablosu bulunamadi — elle bakilmali")
        yeni = m.group(1) + t.replace("\n", nl) + nl
        io.open(y, "w", encoding="utf-8", newline="").write(h[:m.start()] + yeni + h[m.end():])
        print("\nCLAUDE.md §1.5 guncellendi.")
