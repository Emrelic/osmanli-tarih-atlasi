# -*- coding: utf-8 -*-
"""DEĞİŞMEZ 2 YER KÖRLÜĞÜ ARACI — SINAV (iki yönde, küçültülmüş ağaçta TAM sayılarla).

🔴 BİR DENETİM İKİ YÖNDE SINANMADAN ÇALIŞIYOR SAYILMAZ (CLAUDE.md §11). `ast.parse` temiz ≠
   çalışıyor — tek kanıt bu sınav.

Sınanan: denetim/ARAC-DEGISMEZ2-YERKORU-1004.py. Yöntem: 93 yerleşim girdisi BOŞ, yalnız
`yerlesimler.js` ZZ kaydını (iki kırılma: 1500-01-01 kazanç · 1700-01-01 kayıp), `olaylar_zz.js` ZZ
maddelerini taşıyan ağaç. 1700 kırılması HER senaryoda yer eşli madde ile kapatılır; yalnız 1500 değişir.

  1  K1 yer_id eşleşmesi ........................ EŞLİ 2 (K1 2), kör 0, açık 0 → çıkış 0
  2  YER KÖRÜ: madde ±30'da ama başka yer, anmıyor → kör "hiç yok" 1, çıkış 1, adıyla yazılı
  3  K2 başlık adı anıyor (yer_id başka) .......... EŞLİ (yalnız K2) 1 → çıkış 0
  4  D215 `İ`: ad "ZZ İznik Kalesi", başlık "zz iznik kalesi'nin fethi" (insan yazımı)
     → norm() eşleştirir ⇒ EŞLİ K2 (naif `.lower()` kaçırırdı) → çıkış 0
  5  K3 yalnız gövdede ad geçiyor → ZAYIF: YER KÖRÜ (K3 alt sayacı 1) → çıkış 1
  6  AÇIK: ±30'da madde yok ....................... açık 1 → çıkış 1
  7  SINIR: madde tam 30 gün ötede → kapatır (kör, açık DEĞİL) · 31 gün → AÇIK
  8  ÜYELİK ≠ SAYI: aynı ağaçta defter doğru → 0; defterde 1 üye takas (SAYI AYNI) → 1
  9  ÖLÇÜLEMEDİ: girdi eksik / sözdizimi bozuk / defter yok → 2
 10  GERÇEK AĞAÇ: iç tutarlılık (EŞLİ+KÖR+AÇIK = kırılma) ve K1 sayısı denetle'nin `esli` tanımıyla
     koordinatörün ilk ölçümüne (477/144) bağlı kalır; defter taze → 0

KULLANIM:  py denetim/ARAC-DEGISMEZ2-YERKORU-SINAV-1004.py     (çıkış: 0 hepsi geçti · 1 kusur)
"""
import io, json, os, re, shutil, subprocess, sys, tempfile

DENETIM = os.path.dirname(os.path.abspath(__file__))
KOK = os.path.dirname(DENETIM)
ARAC = os.path.join(DENETIM, "ARAC-DEGISMEZ2-YERKORU-1004.py")
sys.path.insert(0, os.path.join(KOK, "arac"))
import girdi

HATA = 0


def sonuc(ok, baslik, detay=""):
    global HATA
    print(("  OK   " if ok else "  HATA ") + baslik + ((" | " + detay) if detay else ""))
    if not ok:
        HATA += 1


def calistir(kok, *ek):
    env = dict(os.environ, PYTHONIOENCODING="utf-8")
    p = subprocess.run([sys.executable, ARAC, "--kok", kok] + list(ek), capture_output=True, env=env, timeout=900)
    return p.returncode, p.stdout.decode("utf-8", "replace") + p.stderr.decode("utf-8", "replace")


def tablo(o):
    """'2 (d,v)' satırı → dict(kirilma, esli, k1, k2, kor, k3, hic, acik)"""
    m = re.search(r"^\s+2 \(d,v\)\s+(\d+) \| (\d+)\s+(\d+)\s+(\d+)\s+\| (\d+)\s+(\d+)\s+(\d+)\s+\|\s+(\d+)", o, re.M)
    if not m:
        return None
    k = ("kirilma", "esli", "k1", "k2", "kor", "k3", "hic", "acik")
    return dict(zip(k, (int(x) for x in m.groups())))


def kok_kur(tmp, ad, kayitlar, maddeler, eksik=None):
    d = os.path.join(tmp, ad, "data")
    os.makedirs(d)
    for i, f in enumerate(girdi.GIRDI_DOSYALARI):
        if f == eksik:
            continue
        govde = "\n".join(kayitlar) if f == "yerlesimler.js" else ""
        degisken = "YERLESIMLER" if f == "yerlesimler.js" else "YERLESIMLER_BOS%d" % i
        io.open(os.path.join(d, f), "w", encoding="utf-8").write("window.%s = [\n%s\n];\n" % (degisken, govde))
    io.open(os.path.join(d, "olaylar_zz.js"), "w", encoding="utf-8").write(
        "window.OLAYLAR_ZZ = [\n%s\n];\n" % "\n".join(maddeler))
    return os.path.join(tmp, ad), d


def kayit(ad):
    return ('{ ad:"%s", tur:"kale", lat:40.0, lon:30.0, g:0, k:3, m:null, s:[], d:[{f:"1500-01-01",t:"1700-01-01"}], v:[], isg:[] },' % ad)


def madde(t, b, yer, d="sinav"):
    """denetle.oku_pencere çift tırnaklı (JSON) dize ister."""
    j = lambda x: json.dumps(x, ensure_ascii=False)
    return ("{ t:%s, b:%s, tur:\"savas\", k:\"fetih\", yer_id:%s, etiket:[\"toprak-kazanc\"], d:%s, kaynak:\"sinav\" }," %
            (j(t), j(b), j(yer), j(d)))


ZZ = "ZZ Sizinti Kalesi"
R1700 = madde("1700-01-03", "ZZ Sizinti Kalesi'nin kaybı", ZZ)       # 1700 kırılmasını HER senaryoda yer eşli kapatır

print("=" * 72)
print("DEĞİŞMEZ 2 YER KÖRLÜĞÜ SINAVI — iki yönde")
print("=" * 72)
tmp = tempfile.mkdtemp(prefix="yerkor-sinav-")
try:
    def kos(ad, kayit_adi, m1500, defter=None):
        r1700 = madde("1700-01-03", kayit_adi + " kaybı", kayit_adi)      # 1700'ü kayıt KENDİ adıyla kapatır
        kok, _ = kok_kur(tmp, ad, [kayit(kayit_adi)], [r1700] + m1500)
        k, o = calistir(kok, *(["--defter", defter] if defter else []))
        return kok, k, o, tablo(o)

    # 1) K1
    _, k, o, t = kos("s1", ZZ, [madde("1500-01-05", "ZZ Sizinti Kalesi'nin fethi", ZZ)])
    sonuc(k == 0 and t and (t["kirilma"], t["esli"], t["k1"], t["kor"], t["acik"]) == (2, 2, 2, 0, 0),
          "1) K1 yer_id eşleşmesi → EŞLİ 2 (K1 2), kör 0, açık 0, çıkış 0", "çıkış %d · %s" % (k, t))
    if k not in (0, 1):
        print(o[-500:])

    # 2) YER KÖRÜ
    _, k, o, t = kos("s2", ZZ, [madde("1500-01-05", "Alakasız bir olay", "ZZ Baska Yer")])
    sonuc(k == 1 and t and (t["esli"], t["kor"], t["hic"], t["k3"], t["acik"]) == (1, 1, 1, 0, 0) and "1500-01-01" in o,
          "2) madde ±30'da ama başka yer, anmıyor → YER KÖRÜ (hiç yok) 1, çıkış 1, günü adıyla yazılı", "çıkış %d · %s" % (k, t))

    # 3) K2
    _, k, o, t = kos("s3", ZZ, [madde("1500-01-05", "ZZ Sizinti Kalesi'nin alınışı", "ZZ Baska Yer")])
    sonuc(k == 0 and t and (t["esli"], t["k1"], t["k2"], t["kor"]) == (2, 1, 1, 0),
          "3) yer_id başka ama BAŞLIK adı anıyor → EŞLİ (yalnız K2) 1, çıkış 0", "çıkış %d · %s" % (k, t))

    # 4) D215 İ
    _, k, o, t = kos("s4", "ZZ İznik Kalesi", [madde("1500-01-05", "zz iznik kalesi'nin fethi", "ZZ Baska Yer")])
    sonuc(k == 0 and t and (t["k2"], t["kor"]) == (1, 0),
          "4) D215: ad 'ZZ İznik Kalesi', başlık 'zz iznik kalesi'nin fethi' → norm() eşleştirir, EŞLİ K2, çıkış 0",
          "çıkış %d · %s" % (k, t))
    naif = "ZZ İznik Kalesi".lower()
    sonuc("zz iznik kalesi" not in naif, "4b) ön koşul: naif .lower() bu eşleşmeyi KAÇIRIRDI (sınav anlamlı)", repr(naif))

    # 5) K3
    _, k, o, t = kos("s5", ZZ, [madde("1500-01-05", "Alakasız sefer", "ZZ Baska Yer", d="Yolda ZZ Sizinti Kalesi'nden de geçildi.")])
    sonuc(k == 1 and t and (t["kor"], t["k3"], t["hic"]) == (1, 1, 0),
          "5) yalnız GÖVDEDE ad geçiyor → zayıf kanıt: YER KÖRÜ (K3 1, hiç yok 0), çıkış 1", "çıkış %d · %s" % (k, t))

    # 6) AÇIK
    _, k, o, t = kos("s6", ZZ, [])
    sonuc(k == 1 and t and (t["acik"], t["kor"]) == (1, 0), "6) ±30'da madde yok → AÇIK 1, çıkış 1", "çıkış %d · %s" % (k, t))

    # 7) sınır: 30 gün kapatır, 31 gün kapatmaz
    _, k, o, t = kos("s7a", ZZ, [madde("1500-01-31", "Alakasız olay", "ZZ Baska Yer")])
    sonuc(t and (t["kor"], t["acik"]) == (1, 0), "7a) madde TAM 30 gün ötede → yakın sayılır (kör 1, açık 0)", "%s" % t)
    _, k, o, t = kos("s7b", ZZ, [madde("1500-02-01", "Alakasız olay", "ZZ Baska Yer")])
    sonuc(t and (t["kor"], t["acik"]) == (0, 1), "7b) madde 31 gün ötede → AÇIK (kör 0, açık 1)", "%s" % t)

    # 8) üyelik ≠ sayı
    kok8, k, o, t = kos("s8", ZZ, [madde("1500-01-05", "Alakasız bir olay", "ZZ Baska Yer")])
    d_ok = os.path.join(tmp, "defter-dogru.txt")
    kd, od = calistir(kok8, "--defter", d_ok, "--defter-yaz")
    k_ok, o_ok = calistir(kok8, "--defter", d_ok)
    satirlar = [l.rstrip("\n") for l in io.open(d_ok, encoding="utf-8") if l.strip() and not l.startswith("#")]
    d_bozuk = os.path.join(tmp, "defter-takas.txt")
    io.open(d_bozuk, "w", encoding="utf-8").write("2 (d,v)¦YER KÖRÜ¦1500-01-01¦kazanc¦ZZ Baska Yer\n")
    k_b, o_b = calistir(kok8, "--defter", d_bozuk)
    sonuc(kd == 0 and k_ok == 0 and len(satirlar) == 1, "8a) aynı ağaçta defter doğru → çıkış 0", "yazım %d · kontrol %d · %d üye" % (kd, k_ok, len(satirlar)))
    sonuc(k_b == 1 and "ZZ Sizinti Kalesi" in o_b, "8b) defterde 1 üye takas (SAYI AYNI, 1=1) → çıkış 1, gerçek yer adıyla", "çıkış %d" % k_b)

    # 9) ölçülemedi
    kok, _ = kok_kur(tmp, "s9a", [kayit(ZZ)], [R1700], eksik=girdi.GIRDI_DOSYALARI[1])
    k, o = calistir(kok)
    sonuc(k == 2, "9a) yerleşim girdisi eksik → çıkış 2", "çıkış %d" % k)
    kok, d = kok_kur(tmp, "s9b", [kayit(ZZ)], [R1700])
    with io.open(os.path.join(d, "yerlesimler.js"), "a", encoding="utf-8") as f:
        f.write("\n;;; ]]] {{{ bozuk\n")
    k, o = calistir(kok)
    sonuc(k == 2, "9b) yerleşim girdisi sözdizimi bozuk → çıkış 2", "çıkış %d" % k)
    k, o = calistir(kok8, "--defter", os.path.join(tmp, "yok-defter.txt"))
    sonuc(k == 2, "9c) üyelik defteri yok → çıkış 2 (boş tavan sanılmaz)", "çıkış %d" % k)

    # 10) gerçek ağaç
    k, o = calistir(KOK)
    t = tablo(o)
    sonuc(k == 0 and t and t["esli"] + t["kor"] + t["acik"] == t["kirilma"] and t["k1"] <= t["esli"],
          "10) gerçek ağaç: EŞLİ+KÖR+AÇIK = kırılma, defter taze → çıkış 0", "çıkış %d · %s" % (k, t))
finally:
    shutil.rmtree(tmp, ignore_errors=True)

print("=" * 72)
print("SONUÇ: %s" % ("TÜM SINAVLAR GEÇTİ — araç iki yönde çalışıyor" if HATA == 0 else "%d HATA — araç ÇALIŞIYOR SAYILMAZ" % HATA))
sys.exit(0 if HATA == 0 else 1)
