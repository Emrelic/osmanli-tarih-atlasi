# -*- coding: utf-8 -*-
"""YETİM MADDE ARACI — SINAV (iki yönde + bulunmuş vakalar).

🔴 BİR DENETİM İKİ YÖNDE SINANMADAN ÇALIŞIYOR SAYILMAZ (CLAUDE.md §11). `ast.parse` temiz ≠
   çalışıyor — tek kanıt bu sınav. Ve bu araç için en iyi sınav BULUNMUŞ VAKALARDIR:

BÖLÜM A — 17 BİLİNEN YETİM MADDE (denetim/KASA-IC-CELISKI-1004.md tablosu, elle okunmuş)
  Gerçek ağaçta araç bunlardan EN AZ 3'ünü KAPI kümesinde (E/B/D, KAYMA+YETİM) YAKALAMALI;
  sınav kaçını yakaladığını ve kaçının W'da (kapı dışı) kaldığını yazar. Veri düzeldikçe
  bilinen vakalar kaybolabilir, bu yüzden eşik 3'tür, 17 değildir.

BÖLÜM B — ARAÇ, KASTEN KURULMUŞ KOPYADA (`--kok`; gerçek veriye YAZILMAZ)
  ZZ kayıtları ve ZZ maddeleri gerçek yerleşim/olay dosyalarının kopyasına eklenir; sayaçlar
  temiz ağaca göre FARKLA ölçülür.
   1  temiz ağaç ........................................................ → 0
   2  YETİM: madde 1550, kayıt kırılması 1400/1700 ...................... → 1, adı yazılı
   3  BAĞLI: madde kırılmanın 9 gün ötesinde ............................ → 0 (yanlış alarm YOK)
   4  KAYMA: madde kırılmanın 244 gün ötesinde .......................... → 1, KAYMA sayacı +1
   5  W: aynı yerde "kuşatıldı" (sahiplik fiili yok) .................... → 0, W sayacı +1
   6  W: "… alamadı" (başarısızlık), etiket toprak-kazanc ............... → 0 (başarısız kuşatma yetim DEĞİL)
   7  `isg:` kırılma sayılır ............................................. → 0 (isg ile kapanan madde)
   8  YER KÖRLÜĞÜ YOK (2t'den FARK, bkz. araç başlığı): komşu kayıtta ±30'da kırılma var ama
      maddenin KENDİ yerinde yok ........................................ → 1 (2t'nin yersiz havuzu bunu kapanmış sayardı — kod okuması, ayrıca koşulmadı)
   9  ufuk ucu (1281-01-01) kırılma SAYILMAZ ............................ → 1
  10  yer_id'siz / eşleşmeyen yer_id .................................... → 0, kendi sayaçlarında (SESSİZ DÜŞME YOK)
  11  üyelik ≠ sayı: defterde 1 üye takas, sayı AYNI .................... → 1
  12  ÖLÇÜLEMEDİ: yerleşim dosyası eksik · sözdizimi bozuk · defter yok .. → 2

KULLANIM:  py denetim/ARAC-YETIM-MADDE-SINAV-1004.py     (çıkış: 0 hepsi geçti · 1 kusur)
"""
import glob, importlib.util, io, os, re, shutil, subprocess, sys, tempfile

DENETIM = os.path.dirname(os.path.abspath(__file__))
KOK = os.path.dirname(DENETIM)
ARAC = os.path.join(DENETIM, "ARAC-YETIM-MADDE-1004.py")
DEFTER = os.path.join(DENETIM, "ARAC-YETIM-MADDE-1004.defter.txt")
HATA = 0


def sonuc(ok, baslik, detay=""):
    global HATA
    print(("  OK   " if ok else "  HATA ") + baslik + ((" | " + detay) if detay else ""))
    if not ok:
        HATA += 1


def calistir(kok, defter=None):
    a = [sys.executable, ARAC, "--kok", kok]
    if defter:
        a += ["--defter", defter]
    env = dict(os.environ, PYTHONIOENCODING="utf-8")
    p = subprocess.run(a, capture_output=True, env=env, timeout=900)
    return p.returncode, p.stdout.decode("utf-8", "replace") + p.stderr.decode("utf-8", "replace")


def sayaclar(cikti):
    """{kova: (bagli, kayma, yetim, yeridsiz, eslesmeyen)}"""
    s = {}
    for m in re.finditer(r"^\s+([EBDW])\s+.*?(\d+)\s+(\d+)\s+(\d+)\s+\|\s+(\d+)\s+(\d+)\s*$", cikti, re.M):
        s[m.group(1)] = tuple(int(m.group(i)) for i in range(2, 7))
    return s


def fark(s1, s0, kova, idx):
    return s1[kova][idx] - s0[kova][idx]


sys.path.insert(0, DENETIM)
_sp = importlib.util.spec_from_file_location("yetim_arac", ARAC)
Y = importlib.util.module_from_spec(_sp)
_sp.loader.exec_module(Y)
ko = Y.ko

print("=" * 72)
print("YETİM MADDE SINAVI — iki yönde + bulunmuş vakalar")
print("=" * 72)

# ---------------------------------------------------------------- BÖLÜM A
print("A) 17 bilinen yetim madde (KASA-IC-CELISKI-1004.md)")
BILINEN = [("1330-07-28", "Köstendil"), ("1339-01-01", "Kayseri"), ("1374-01-01", "Köstendil"), ("1381-06-01", "Isparta"),
           ("1400-08-01", "Sivas"), ("1427-01-01", "Alanya"), ("1503-01-01", "Hemedan"), ("1555-01-01", "İbrim"),
           ("1736-07-13", "Azak"), ("1789-01-01", "Akkirman"), ("1789-10-11", "İsmail"), ("1829-09-14", "Edirne"),
           ("1883-12-23", "Darfur"), ("1896-09-23", "Dongola"), ("1897-04-17", "Yenişehir"), ("1911-10-08", "Tobruk"),
           ("1920-01-01", "Aleksandrovsk")]
try:
    y, s, uyeler, w_liste = Y.olc(KOK)
    kapida, wde, yok = [], [], []
    for t, yer in BILINEN:
        if any((u[3]["t"] or "").startswith(t) and u[4].startswith(yer) for u in uyeler):
            kapida.append(yer + " " + t[:4])
        elif any((m["t"] or "").startswith(t) and yid.startswith(yer) for m, yid, _, _ in w_liste):
            wde.append(yer + " " + t[:4])
        else:
            yok.append(yer + " " + t[:4])
    sonuc(len(kapida) >= 3, "A1) 17 bilinen yetimden ≥ 3'ü KAPI kümesinde", "%d/17 kapıda" % len(kapida))
    print("       kapıda  (%d): %s" % (len(kapida), ", ".join(kapida)))
    print("       W'da    (%d): %s   ← kapı dışı, 'anlatıyor olabilir' kovası" % (len(wde), ", ".join(wde) or "—"))
    print("       KAÇTI   (%d): %s" % (len(yok), ", ".join(yok) or "—"))
except ko.Olculemedi as e:
    sonuc(False, "A1) ölçülemedi", str(e))

# ---------------------------------------------------------------- BÖLÜM B
print("B) araç — kasten kurulmuş kopyada")
tmp = tempfile.mkdtemp(prefix="yetim-sinav-")
sys.path.insert(0, os.path.join(KOK, "arac"))
import girdi


def kopya(ad):
    d = os.path.join(tmp, ad, "data")
    os.makedirs(d)
    kaynaklar = [os.path.join(KOK, "data", "devletler.js")]
    kaynaklar += [os.path.join(KOK, "data", f) for f in girdi.GIRDI_DOSYALARI]
    for k in ("olaylar*.js", "kronoloji*.js"):
        kaynaklar += glob.glob(os.path.join(KOK, "data", k))
    for s_ in kaynaklar:
        shutil.copy(s_, d)
    return os.path.join(tmp, ad), d


def kayit_ekle(d, js):
    yol = os.path.join(d, "yerlesimler.js")
    t = io.open(yol, encoding="utf-8").read()
    a = "window.YERLESIMLER = ["
    assert a in t
    io.open(yol, "w", encoding="utf-8", newline="").write(t.replace(a, a + "\n" + js + "\n", 1))


def kayit(ad, s="", d="", isg=""):
    return ('{ ad:"%s", tur:"kale", lat:40.0, lon:30.0, g:0, k:3, m:null, s:[%s], d:[%s], v:[], isg:[%s] },'
            % (ad, s, d, isg))


KAYIT_ANA = kayit("ZZ Yetim Kalesi", s='{f:"1300-01-01",t:"1400-01-01",d:"bizans"}', d='{f:"1400-01-01",t:"1700-01-01"}')


def madde_ekle(d, satirlar):
    govde = "\n".join(satirlar)
    io.open(os.path.join(d, "olaylar_zzyetim.js"), "w", encoding="utf-8").write(
        "window.OLAYLAR_ZZYETIM = [\n%s\n];\n" % govde)


def madde(t, b, yer, etiket="toprak-kazanc"):
    yer_alan = ("yer_id:%r, " % yer) if yer else ""
    return "{ t:%r, b:%r, tur:'savas', k:'fetih', %setiket:[%r], d:'sinav', kaynak:'sinav' }," % (t, b, yer_alan, etiket)


def senaryo(ad, kayitlar, maddeler):
    kok, d = kopya(ad)
    kayit_ekle(d, "\n".join(kayitlar))
    madde_ekle(d, maddeler)
    return kok


try:
    k0, o0 = calistir(KOK)
    s0 = sayaclar(o0)
    sonuc(k0 == 0 and set(s0) == set("EBDW"), "B1) temiz ağaç → çıkış 0, dört kova okundu", "çıkış %d" % k0)
    if k0 != 0 or not s0:
        print(o0[-700:])

    # B2 YETİM
    kok = senaryo("yetim", [KAYIT_ANA], [madde("1550-06-01", "ZZ Yetim Kalesi'nin fethi", "ZZ Yetim Kalesi")])
    k, o = calistir(kok)
    s = sayaclar(o)
    sonuc(k == 1 and "ZZ Yetim Kalesi" in o and fark(s, s0, "E", 2) == 1,
          "B2) kırılması yok (1550 ↔ 1400/1700) → çıkış 1, adı yazılı, E.YETİM +1", "çıkış %d · E %s" % (k, s.get("E")))

    # B3 BAĞLI
    kok = senaryo("bagli", [KAYIT_ANA], [madde("1400-01-10", "ZZ Yetim Kalesi'nin fethi", "ZZ Yetim Kalesi")])
    k, o = calistir(kok)
    s = sayaclar(o)
    sonuc(k == 0 and fark(s, s0, "E", 0) == 1 and fark(s, s0, "E", 2) == 0,
          "B3) kırılmanın 9 gün ötesi → BAĞLI +1, YETİM +0, çıkış 0", "çıkış %d · E %s" % (k, s.get("E")))

    # B4 KAYMA
    kok = senaryo("kayma", [KAYIT_ANA], [madde("1400-09-01", "ZZ Yetim Kalesi'nin fethi", "ZZ Yetim Kalesi")])
    k, o = calistir(kok)
    s = sayaclar(o)
    sonuc(k == 1 and fark(s, s0, "E", 1) == 1 and fark(s, s0, "E", 2) == 0,
          "B4) kırılmanın 244 gün ötesi → KAYMA +1 (YETİM değil), çıkış 1", "çıkış %d · E %s" % (k, s.get("E")))

    # B5/B6 W
    kok = senaryo("w", [KAYIT_ANA], [madde("1550-06-01", "ZZ Yetim Kalesi kuşatıldı", "ZZ Yetim Kalesi", etiket="savas")])
    k, o = calistir(kok)
    s = sayaclar(o)
    sonuc(k == 0 and fark(s, s0, "W", 2) == 1 and fark(s, s0, "E", 2) == 0 and fark(s, s0, "B", 2) == 0,
          "B5) 'kuşatıldı' (sahiplik fiili yok) → W +1, kapıya GİRMEZ, çıkış 0", "çıkış %d · W %s" % (k, s.get("W")))
    kok = senaryo("basarisiz", [KAYIT_ANA], [madde("1550-06-01", "ZZ Yetim Kalesi'ni alamadı", "ZZ Yetim Kalesi")])
    k, o = calistir(kok)
    s = sayaclar(o)
    sonuc(k == 0 and fark(s, s0, "W", 2) == 1 and fark(s, s0, "E", 2) == 0,
          "B6) başlık BAŞARISIZLIK bildiriyor (etiketli bile) → W, çıkış 0", "çıkış %d · W %s E %s" % (k, s.get("W"), s.get("E")))

    # B7 isg
    kok = senaryo("isg", [kayit("ZZ Isg Kalesi", isg='{f:"1550-05-01",t:"1550-07-01",d:"rusya"}')],
                  [madde("1550-05-05", "ZZ Isg Kalesi'nin işgali", "ZZ Isg Kalesi")])
    k, o = calistir(kok)
    s = sayaclar(o)
    sonuc(k == 0 and fark(s, s0, "E", 0) == 1 and fark(s, s0, "E", 2) == 0,
          "B7) isg: kırılması sayılır → BAĞLI, çıkış 0", "çıkış %d · E %s" % (k, s.get("E")))

    # B8 YER KÖRLÜĞÜ YOK
    kok = senaryo("yerkor", [KAYIT_ANA, kayit("ZZ Komsu Kalesi", s='{f:"1550-06-10",t:"1600-01-01",d:"rusya"}')],
                  [madde("1550-06-01", "ZZ Yetim Kalesi'nin fethi", "ZZ Yetim Kalesi")])
    k, o = calistir(kok)
    s = sayaclar(o)
    sonuc(k == 1 and fark(s, s0, "E", 2) == 1,
          "B8) komşu kayıtta ±30'da kırılma VAR, maddenin kendi yerinde YOK → hâlâ YETİM (2t'nin yersiz havuzu kapanmış sayardı; kod okuması)",
          "çıkış %d · E %s" % (k, s.get("E")))

    # B9 ufuk
    kok = senaryo("ufuk", [kayit("ZZ Ufuk Kalesi", s='{f:"1281-01-01",t:"1923-10-29",d:"bizans"}')],
                  [madde("1281-02-01", "ZZ Ufuk Kalesi'nin fethi", "ZZ Ufuk Kalesi")])
    k, o = calistir(kok)
    s = sayaclar(o)
    sonuc(k == 1 and fark(s, s0, "E", 2) == 1,
          "B9) ufuk uçları (1281-01-01 / 1923-10-29) kırılma SAYILMAZ → YETİM, çıkış 1", "çıkış %d · E %s" % (k, s.get("E")))

    # B10 yer_id'siz / eşleşmeyen
    kok = senaryo("yeridsiz", [KAYIT_ANA], [madde("1550-06-01", "Bir kalenin fethi", ""),
                                            madde("1550-06-02", "Bir başka kalenin fethi", "ZZ Olmayan Yer")])
    k, o = calistir(kok)
    s = sayaclar(o)
    sonuc(k == 0 and fark(s, s0, "E", 3) == 1 and fark(s, s0, "E", 4) == 1 and fark(s, s0, "E", 2) == 0,
          "B10) yer_id'siz → 'yer_id'siz' sayacı +1; eşleşmeyen yer_id → 'eşleşmeyen' +1; yetim DEĞİL, çıkış 0",
          "çıkış %d · E %s" % (k, s.get("E")))

    # B11 üyelik ≠ sayı
    uyeler_d = [l.strip() for l in io.open(DEFTER, encoding="utf-8") if l.strip() and not l.startswith("#")]
    bozuk = os.path.join(tmp, "defter-takas.txt")
    satirlar = list(uyeler_d)
    satirlar[0] = "olaylar_zz.js¦1500-01-01¦deadbeef¦ZZ Baska Yer"
    io.open(bozuk, "w", encoding="utf-8").write("\n".join(satirlar) + "\n")
    k, o = calistir(KOK, bozuk)
    sonuc(len(satirlar) == len(uyeler_d) and k == 1 and uyeler_d[0].split("¦")[-1] in o,
          "B11) defterde 1 üye takas (SAYI AYNI) → çıkış 1, takas edilen yer adıyla",
          "çıkış %d · defter %d satır" % (k, len(satirlar)))

    # B12 ölçülemedi
    kok, d = kopya("eksik")
    os.remove(os.path.join(d, girdi.GIRDI_DOSYALARI[1]))
    k, o = calistir(kok)
    sonuc(k == 2, "B12a) yerleşim dosyası eksik → çıkış 2 (sessiz atlama yok)", "çıkış %d" % k)
    kok, d = kopya("bozuk")
    with io.open(os.path.join(d, "yerlesimler.js"), "a", encoding="utf-8") as f:
        f.write("\n;;; ]]] {{{ bozuk\n")
    k, o = calistir(kok)
    sonuc(k == 2, "B12b) yerleşim dosyası sözdizimi bozuk → çıkış 2", "çıkış %d" % k)
    k, o = calistir(KOK, os.path.join(tmp, "yok-defter.txt"))
    sonuc(k == 2, "B12c) üyelik defteri yok → çıkış 2", "çıkış %d" % k)
finally:
    shutil.rmtree(tmp, ignore_errors=True)

print("=" * 72)
print("SONUÇ: %s" % ("TÜM SINAVLAR GEÇTİ — araç iki yönde çalışıyor" if HATA == 0 else "%d HATA — araç ÇALIŞIYOR SAYILMAZ" % HATA))
sys.exit(0 if HATA == 0 else 1)
