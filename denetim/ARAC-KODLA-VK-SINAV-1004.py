# -*- coding: utf-8 -*-
"""`arac/kodla.py` ↔ `vk` (MOTOR-V-KID-1004.diff) UYUM SINAVI — SENTETİK `donemler.js`, motora dokunmadan.

SORU: motor tam inşada `d.vk` yazar; `kodla.py donem` hedefi bunu YAŞATIR MI? Düşürürse yama sessizce işe
yaramaz hâle gelir (motor yazar, kodlayıcı siler, kimse görmez) ve 83 dakikalık koşu boşa gider.

YÖNTEM — `arac/kodla.py`ye DOKUNULMAZ (yalnız komut satırından çalıştırılır), GERÇEK `data/`ya dokunulmaz:
`donemler.js` ile AYNI düzende (aynı değişken sırası, aynı havuz ayrımı) ~5 dönemlik sentetik dosya üretilir;
beş dönemin ikisi `vk` TAŞIR, üçü taşımaz. Çıktılar geçici dizinde kalır.

BEKLENEN MEKANİZMA (kodu okuyarak): `_bolumle` dosyayı `window.PARCALAR = ` havuzundan öncesi · havuz ·
sonrası diye böler; YALNIZ havuz (halka koordinatları) kodlanır, `DONEMLER` metni `sonek`te BİREBİR kalır
(`donemler_ust.js`). `vk` bir `window.X` değil JSON anahtarı ⇒ küresel-kapsama kapısı da etkilenmez.
🔴 Ama "beklenen" ölçüm değildir; bu sınav ölçer.

  1  `kodla.py yay` (kodla + DİSKTEN gidiş-dönüş + kapı) sentetik dosyada → çıkış 0, "SINAV GEÇTİ"
  2  `kodla.py kapi <dizin>` → çıkış 0, donem hedefi denetlendi
  3  `kodla.py coz-c` ile geri çöz → ÖZGÜNLE BAYT BAYT AYNI
  4  geri çözülen DONEMLER içinde `vk` HAYATTA: değerleri ve SIRASI özgünle aynı; vk taşımayan dönemlerde
     anahtar UYDURULMADI; vk olan her dönemde len(vk) == len(v)
  5  `donemler_ust.js` içinde `"vk":[` metin olarak VAR (sonek birebir)
  6  İKİNCİ YÖN (kapı gerçekten öter mi): ust dosyasından `vk` anahtarı kasten SİLİNİRSE → `kapi` çıkış 1
     ("UYUŞMUYOR"). Yani kodlayıcı vk'yı DÜŞÜRSEYDİ yayın kapısı bunu YAKALARDI (sessiz kayıp olmazdı)
  7  vk TAŞIMAYAN sentetik dosya da geçer (geriye uyum: yama uygulanmamış/boş vk günleri)
  8  gerçek `data/donemler.js`, `donem_parcalar.js`, `donemler_ust.js` DEĞİŞMEDİ (mtime + boyut)

KULLANIM:  py denetim/ARAC-KODLA-VK-SINAV-1004.py     (çıkış: 0 hepsi geçti · 1 kusur)
SENTETİK DOSYA: denetim/SENTETIK-DONEMLER-VK-1004.js (elle okunabilir, depoda durur).
"""
import json, os, shutil, subprocess, sys, tempfile

DENETIM = os.path.dirname(os.path.abspath(__file__))
KOK = os.path.dirname(DENETIM)
KODLA = os.path.join(KOK, "arac", "kodla.py")
SENTETIK = os.path.join(DENETIM, "SENTETIK-DONEMLER-VK-1004.js")
HATA = 0


def sonuc(ok, baslik, detay=""):
    global HATA
    print(("  OK   " if ok else "  HATA ") + baslik + ((" | " + detay) if detay else ""), flush=True)
    if not ok:
        HATA += 1


def kos(*a):
    env = dict(os.environ, PYTHONIOENCODING="utf-8")
    p = subprocess.run([sys.executable, KODLA] + list(a), capture_output=True, env=env, timeout=600, cwd=KOK)
    return p.returncode, p.stdout.decode("utf-8", "replace") + p.stderr.decode("utf-8", "replace")


def halka(x, y, w=0.5):
    return [[round(x, 3), round(y, 3)], [round(x + w, 3), round(y, 3)], [round(x + w, 3), round(y + w, 3)],
            [round(x, 3), round(y + w, 3)], [round(x, 3), round(y, 3)]]


def uret(vk_var=True):
    """donemler.js ile AYNI düzen: SERBEST · SERBEST_U · PETEKLER · PARCALAR(havuz) · PARCA_HALKA · DONEMLER · …"""
    J = lambda x: json.dumps(x, separators=(",", ":"))          # ensure_ascii=True, gerçek dosya gibi (\u escape)
    havuz = [halka(29.0 + i * 0.7, 39.0 + (i % 2) * 0.7) for i in range(6)]
    parca_halka = [[i] for i in range(6)]
    kid = ["lubnan-emirligi", "", "kirim-hanligi", "", ""]
    d = []
    d.append({"f": "1281-01-01", "t": "1300-01-01", "ad": "Katılım: ZZ A", "b": [29, 39, 30, 40], "ao": 100.0,
              "e": [0], "c": [], "o": [0]})                                                  # v YOK, vk YOK
    d.append({"f": "1300-01-01", "t": "1400-01-01", "ad": "Katılım: ZZ B", "b": [29, 39, 32, 41], "ao": 220.0, "av": 80.0,
              "e": [1], "c": [], "o": [0, 1], "v": [2, 3, 4]})
    if vk_var:
        d[-1]["vk"] = [kid[0], kid[1], kid[2]]                                               # vk VAR (ikisi dolu, biri "")
    d.append({"f": "1400-01-01", "t": "1500-01-01", "ad": "Kayıp: ZZ A", "b": [29, 39, 32, 41], "ao": 210.0, "av": 40.0,
              "e": [], "c": [0], "o": [1], "v": [5]})                                        # v VAR, vk YOK (hiç kimlik yok)
    d.append({"f": "1500-01-01", "t": "1600-01-01", "ad": "Katılım: İş", "b": [29, 39, 32, 41], "ao": 300.0, "av": 90.0,
              "e": [2], "c": [], "o": [1, 2], "v": [3, 4, 5, 0]})
    if vk_var:
        d[-1]["vk"] = ["", "çifte-kid", "", "lubnan-emirligi"]                               # vk VAR (Türkçe karakter, "" araları)
    d.append({"f": "1600-01-01", "t": "1923-10-29", "ad": "—", "b": [29, 39, 32, 41], "ao": 310.0, "e": [], "c": [],
              "o": [1, 2]})                                                                  # v YOK
    s = ["// Otomatik üretildi — elle düzenlemeyin. Betik: arac/uret_petek.py",
         "// SENTETİK — denetim/ARAC-KODLA-VK-SINAV-1004.py üretti (motor çıktısı DEĞİL), donemler.js ile AYNI düzen.",
         "// PETEKLER bir kez tanımlanır; DONEMLER yalnızca eklenen/çıkan petek indekslerini tutar.",
         "// DONEMLER'in o/v alanları PARCALAR havuzuna indekstir (js/app.js çözer).",
         "window.SERBEST = " + J([[[29.031, 41.043], [29.193, 41.062]]]) + ";",
         "window.SERBEST_U = " + J([0.8]) + ";",
         "window.PETEKLER = " + J([{"a": "ZZ A"}, {"a": "ZZ B"}, {"a": "İş"}]) + ";",
         "window.PARCALAR = " + J(havuz) + ";",
         "window.PARCA_HALKA = " + J(parca_halka) + ";",
         "window.DONEMLER = " + J(d) + ";",
         "window.URETIM_IZI = " + J({"girdi": {"a.js": "00"}, "motor": "sentetik"}) + ";",
         "window.VERI_SINIRI = [-180.0, -60.0, 180.0, 85.0];",
         "window.URETIM_OLCU = " + J({"donem": 5, "kapsam": "sentetik"}) + ";", ""]
    return "\n".join(s), d


def donemler_oku(metin):
    a = metin.index("window.DONEMLER = ") + len("window.DONEMLER = ")
    return json.loads(metin[a:metin.index(";\n", a)])


def olcum(yol):
    return [(os.path.getmtime(p), os.path.getsize(p)) if os.path.exists(p) else None for p in
            (os.path.join(KOK, "data", "donemler.js"), os.path.join(KOK, "data", "donem_parcalar.js"),
             os.path.join(KOK, "data", "donemler_ust.js"))]


print("=" * 72)
print("KODLA ↔ vk UYUM SINAVI (sentetik donemler.js)")
print("=" * 72)
once = olcum(None)
tmp = tempfile.mkdtemp(prefix="kodla-vk-")
try:
    metin, d0 = uret(vk_var=True)
    with open(SENTETIK, "w", encoding="utf-8", newline="") as f:
        f.write(metin)
    dz = os.path.join(tmp, "yayin")
    k, o = kos("yay", SENTETIK, dz, "donem")
    sonuc(k == 0 and "SINAV GEÇTİ" in o and "kodlama kapısı" in o, "1) `kodla.py yay` sentetikte: çıkış 0, 'SINAV GEÇTİ', kapı ✓", "çıkış %d" % k)
    if k != 0:
        print(o[-900:])
    k, o = kos("kapi", dz)
    sonuc(k == 0 and "donemler_ust.js" in o, "2) `kodla.py kapi`: çıkış 0, donem hedefi denetlendi", "çıkış %d · %s" % (k, o.strip().splitlines()[-1][:90] if o.strip() else ""))
    cikti = os.path.join(tmp, "geri.js")
    k, o = kos("coz-c", dz, cikti, "donem")
    geri = open(cikti, "rb").read()
    sonuc(k == 0 and geri == open(SENTETIK, "rb").read(), "3) coz-c ile geri çözüldü → ÖZGÜNLE BAYT BAYT AYNI", "çıkış %d · %d bayt" % (k, len(geri)))
    d1 = donemler_oku(geri.decode("utf-8"))
    sonuc(d1 == d0, "4a) geri çözülen DONEMLER özgünle birebir (vk dahil)")
    vk_olan = [x for x in d1 if "vk" in x]
    sonuc(len(vk_olan) == 2 and [x["vk"] for x in vk_olan] == [x["vk"] for x in d0 if "vk" in x],
          "4b) vk HAYATTA: iki dönemde, değer ve SIRA özgünle aynı (Türkçe karakter ve '' dahil)", str([x["vk"] for x in vk_olan]))
    sonuc(all(len(x["vk"]) == len(x["v"]) for x in vk_olan), "4c) vk olan her dönemde len(vk) == len(v)")
    sonuc(sum(1 for x in d1 if "vk" not in x) == 3, "4d) vk taşımayan üç dönemde anahtar UYDURULMADI")
    ust = open(os.path.join(dz, "donemler_ust.js"), encoding="utf-8").read()
    sonuc('"vk":[' in ust, "5) donemler_ust.js içinde `\"vk\":[` metin olarak VAR (sonek birebir)")

    # 6) İKİNCİ YÖN: kodlayıcı vk'yı düşürseydi kapı öter miydi?
    dz2 = os.path.join(tmp, "yayin-bozuk")
    shutil.copytree(dz, dz2)
    yol = os.path.join(dz2, "donemler_ust.js")
    u = open(yol, encoding="utf-8", newline="").read()
    a = u.index(',"vk":[')
    b = u.index("]", a) + 1
    open(yol, "w", encoding="utf-8", newline="").write(u[:a] + u[b:])          # ilk vk anahtarını SİL
    k, o = kos("kapi", dz2)
    sonuc(k == 1 and "UYUŞMUYOR" in o, "6) ust dosyasından vk KASTEN silindi → `kapi` çıkış 1 'UYUŞMUYOR' (sessiz kayıp olamaz)",
          "çıkış %d" % k)

    # 7) vk taşımayan sentetik de geçer
    metin_b, _ = uret(vk_var=False)
    girdi_b = os.path.join(tmp, "vksiz.js")
    open(girdi_b, "w", encoding="utf-8", newline="").write(metin_b)
    k, o = kos("yay", girdi_b, os.path.join(tmp, "yayin-vksiz"), "donem")
    sonuc(k == 0 and "SINAV GEÇTİ" in o, "7) vk TAŞIMAYAN sentetik de geçer (geriye uyum)", "çıkış %d" % k)
finally:
    shutil.rmtree(tmp, ignore_errors=True)
sonra = olcum(None)
sonuc(once == sonra, "8) gerçek data/donemler.js · donem_parcalar.js · donemler_ust.js DEĞİŞMEDİ (mtime + boyut)")

print("=" * 72)
print("SONUÇ: %s" % ("TÜM SINAVLAR GEÇTİ — kodlayıcı vk'yı yaşatıyor, düşürürse kapı öter" if HATA == 0
                     else "%d HATA — kodlayıcı ↔ vk uyumu KANITLANMADI" % HATA))
sys.exit(0 if HATA == 0 else 1)
