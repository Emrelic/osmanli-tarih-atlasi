# -*- coding: utf-8 -*-
"""KRONOLOJİ DÖRT SÜZGEÇ — SINAV (iki yönde).

🔴 BİR DENETİM İKİ YÖNDE SINANMADAN ÇALIŞIYOR SAYILMAZ (CLAUDE.md §11). `ast.parse` temiz ≠
   çalışıyor — tek kanıt bu sınav.

Sınanan: denetim/ARAC-KRONO-SUZGEC-1004.py (+ krono_ortak_1004.py).
Yöntem: MİNİK ağaç (`data/devletler.js` kopyası + elle yazılmış birkaç madde). Gerçek veri
sınava KARIŞMAZ ⇒ sayılar TAM bilinir ve her bayrak için "yalnız o kova, tam 1" ölçülür.

  1  TEMİZ YÖN .......... bayraksız maddeler (ay adı veren d, yıl eşleşen d, süre ifadeleri,
                          TDV'siz, 'aynı tarihte'siz) ................... → çıkış 0, her sayaç 0
  2  KASTEN BOZULMUŞ .... her bayrak için ayrı ağaç; sayaç YALNIZ o kovada tam 1:
        a  t ay/gün hassasiyetli + d yalnız yıl (gun: boş → a′ da yanar)
        b  d'de yıl var, t'nin yılı yok
        c  d'de "TDV" atfı
        d  "aynı tarihte … katıldı"
     her biri çıkış 1
  3  AYRI KOVA ........... aynı bozuk madde `olaylar_ek9.js` ve `kronoloji_zz.js`'de:
                          ek* sayacı ve öteki sayacı AYRI artar (birleşik oran YOK)
  4  b0 KAPI DIŞI ........ d'de hiç yıl yok → b0 yanar, çıkış 0 (doğrulanamaz ≠ uyuşmuyor)
  5  ÖLÇÜLEMEDİ .......... data/ yok · dosya sözdizimi bozuk · devletler.js yok → çıkış 2

KULLANIM:  py denetim/ARAC-KRONO-SUZGEC-SINAV-1004.py     (çıkış: 0 hepsi geçti · 1 kusur)
"""
import io, os, re, shutil, subprocess, sys, tempfile

DENETIM = os.path.dirname(os.path.abspath(__file__))
KOK = os.path.dirname(DENETIM)
ARAC = os.path.join(DENETIM, "ARAC-KRONO-SUZGEC-1004.py")
HATA = 0


def sonuc(ok, baslik, detay=""):
    global HATA
    print(("  OK   " if ok else "  HATA ") + baslik + ((" | " + detay) if detay else ""))
    if not ok:
        HATA += 1


def calistir(kok):
    env = dict(os.environ, PYTHONIOENCODING="utf-8")
    p = subprocess.run([sys.executable, ARAC, "--kok", kok], capture_output=True, env=env, timeout=900)
    return p.returncode, p.stdout.decode("utf-8", "replace") + p.stderr.decode("utf-8", "replace")


def sayaclar(cikti):
    """→ {bayrak: (ek, diger)}"""
    s = {}
    for m in re.finditer(r"BAYRAK (\w+)\s.*?ek=(\d+).*?diger=(\d+)", cikti):
        s[m.group(1)] = (int(m.group(2)), int(m.group(3)))
    return s


def agac(tmp, ad, dosyalar):
    """minik ağaç: gerçek devletler.js + verilen {dosya_adı: [madde_js, ...]}"""
    d = os.path.join(tmp, ad, "data")
    os.makedirs(d)
    shutil.copy(os.path.join(KOK, "data", "devletler.js"), d)
    for dosya, maddeler in dosyalar.items():
        degisken = "OLAYLAR_" + re.sub(r"\W", "", dosya[:-3]).upper() if dosya.startswith("olaylar") else "KRONOLOJI_COK_ZZ"
        io.open(os.path.join(d, dosya), "w", encoding="utf-8").write(
            "window.%s = [\n%s\n];\n" % (degisken, "\n".join(maddeler)))
    return os.path.join(tmp, ad), d


def madde(t, d, gun=""):
    return "{ t:%r, b:'sinav', tur:'savas', gun:%r, d:%r, kaynak:'sinav' }," % (t, gun, d)


# bayraksız (TEMİZ) maddeler — kasıtlı tuzaklar içerir
TEMIZ = [
    madde("1500-03-04", "4 Mart 1500'te şehir alındı."),                                   # tam tarih, yıl eşit
    madde("1500-01-01", "Şehir 1500 yılında alındı."),                                      # yıl hassasiyeti: (a) YOK
    madde("1686-09-02", "145 yıllık Osmanlı hâkimiyetindeki Budin Eylül 1686'da geri alındı."),   # süre ≠ yıl
    madde("1348-05-06", "Kara Ölüm 1347-1352 arasında yayıldı; kent 6 Mayıs 1348'de ablukaya alındı."),  # aralık
]
BOZUK = {
    "a": madde("1500-03-04", "Şehir 1500 yılında alındı."),                    # ay/gün t, d yıl; gun boş → a′
    "b": madde("1500-01-01", "Şehir 1499 yılında alındı."),
    "c": madde("1500-01-01", "1500 yılında alındı; TDV'ye göre Foça maddesi bunu anlatır."),
    "d": madde("1500-01-01", "1500 yılında Hama aynı tarihte Osmanlı'ya katıldı."),
}

print("=" * 72)
print("KRONOLOJİ DÖRT SÜZGEÇ SINAVI — iki yönde")
print("=" * 72)
tmp = tempfile.mkdtemp(prefix="suzgec-sinav-")
try:
    # 1) TEMİZ YÖN
    kok, _ = agac(tmp, "temiz", {"olaylar_ek9.js": TEMIZ})
    k, o = calistir(kok)
    s = sayaclar(o)
    sonuc(k == 0 and all(s.get(x) == (0, 0) for x in ("a", "a2", "b", "c", "d")),
          "1) bayraksız maddeler (tam tarih · yıl hassasiyeti · '145 yıllık' süre · yıl aralığı) → çıkış 0, a/a′/b/c/d = 0",
          "çıkış %d · %s" % (k, s))
    if k != 0:
        print(o[-700:])

    # 2) KASTEN BOZULMUŞ — her bayrak için ayrı ağaç, yalnız o kova tam 1
    for bayrak, bozuk in BOZUK.items():
        kok, _ = agac(tmp, "bozuk-" + bayrak, {"olaylar_ek9.js": TEMIZ + [bozuk]})
        k, o = calistir(kok)
        s = sayaclar(o)
        beklenen = {x: (0, 0) for x in ("a", "a2", "b", "c", "d")}
        beklenen[bayrak] = (1, 0)
        if bayrak == "a":
            beklenen["a2"] = (1, 0)
        sonuc(k == 1 and all(s.get(x) == v for x, v in beklenen.items()),
              "2%s) kasten bozulmuş (%s) → çıkış 1, YALNIZ o kova tam 1" % (bayrak, bayrak),
              "çıkış %d · %s" % (k, {x: s.get(x) for x in beklenen}))

    # 3) AYRI KOVA — aynı bozuk madde iki dosyada
    kok, _ = agac(tmp, "kova", {"olaylar_ek9.js": TEMIZ + [BOZUK["b"], BOZUK["b"]], "kronoloji_zz.js": TEMIZ + [BOZUK["b"]]})
    k, o = calistir(kok)
    s = sayaclar(o)
    sonuc(k == 1 and s.get("b") == (2, 1), "3) ek* ve öteki sayaçları AYRI (b: ek 2 · öteki 1)", "çıkış %d · b=%s" % (k, s.get("b")))

    # 4) b0 KAPI DIŞI
    kok, _ = agac(tmp, "b0", {"olaylar_ek9.js": TEMIZ + [madde("1500-01-01", "Şehir alındı ve kale yıkıldı.")]})
    k, o = calistir(kok)
    s = sayaclar(o)
    sonuc(k == 0 and s.get("b0") == (1, 0) and s.get("b") == (0, 0),
          "4) d'de hiç yıl yok → b0 yanar, b YANMAZ, çıkış 0 (doğrulanamaz ≠ uyuşmuyor)", "çıkış %d · b0=%s b=%s" % (k, s.get("b0"), s.get("b")))

    # 5) ÖLÇÜLEMEDİ
    kok, d = agac(tmp, "bozukjs", {"olaylar_ek9.js": TEMIZ})
    io.open(os.path.join(d, "kronoloji_zzbozuk.js"), "w", encoding="utf-8").write("window.KRONOLOJI_ZZBOZUK = [ { t:'1500-01-01', ;\n")
    k, o = calistir(kok)
    sonuc(k == 2 and "zzbozuk" in o, "5a) sözdizimi bozuk dosya → çıkış 2, dosya adı yazılı", "çıkış %d" % k)
    kok, d = agac(tmp, "devletsiz", {"olaylar_ek9.js": TEMIZ})
    os.remove(os.path.join(d, "devletler.js"))
    k, o = calistir(kok)
    sonuc(k == 2, "5b) devletler.js yok → çıkış 2", "çıkış %d" % k)
    kok = os.path.join(tmp, "bos")
    os.makedirs(os.path.join(kok, "data"))
    shutil.copy(os.path.join(KOK, "data", "devletler.js"), os.path.join(kok, "data"))
    k, o = calistir(kok)
    sonuc(k == 2, "5c) hiç olaylar*/kronoloji* dosyası yok → çıkış 2 (sıfır madde 'temiz' DEĞİL)", "çıkış %d" % k)
finally:
    shutil.rmtree(tmp, ignore_errors=True)

print("=" * 72)
print("SONUÇ: %s" % ("TÜM SINAVLAR GEÇTİ — araç iki yönde çalışıyor" if HATA == 0 else "%d HATA — araç ÇALIŞIYOR SAYILMAZ" % HATA))
sys.exit(0 if HATA == 0 else 1)
