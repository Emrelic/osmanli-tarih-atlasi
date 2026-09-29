# -*- coding: utf-8 -*-
"""GEOMETRİ KODLAYICI — 169 MB'lık çıktıyı 10 MB'a indirir, HİÇBİR ŞEY KAYBETMEDEN.

Emre'nin kararı (28 Eylül 2026): *"kaliteden nitelikten nicelikten taviz
vermeden … doğru çözümü hemen yapalım."*

🔴 NİÇİN GEREKTİ — ölçüldü, 28 Eylül 2026 koşu 17b çıktısı:
    devletler_harita.js   85,33 → 169,06 MB   (yürüyüş ilk kez açıldı)
    GitHub sert sınırı    100 MB / dosya      ⇒ `git push` REDDEDİLİR
Sadeleştirme kolu KAPALI: fazladan noktaların ızgara artifaktı olup olmadığı
sınandı (eksen hizalı kenar oranı %7,2 → %6,4, yani ARTMADI) ⇒ o noktalar
gerçek şekil bilgisi, atmak KALİTE KAYBIDIR. Küçük parça eşiği de ölçüldü:
93.050 halkanın 69.087'si atılsa kazanç yalnız 10 MB. Ondalık yuvarlama sıfır
(dosya zaten en çok 3 hane). ⇒ Kalan tek kol KAYIPSIZ KODLAMA.

YÖNTEM — iki basamak, ikisi de standart (Google polyline · Mapbox MVT):
  ① DELTA: her noktayı öncekinden FARKI olarak yaz. Sınır noktaları komşu
     olduğu için farklar küçük: 31.114 → 31.115 farkı "+1".
  ② VARINT + GZIP: küçük sayıları 1-2 baytta yaz, sonra gzip'le. Ölçüldü:
     10.700.867 koordinatın yalnız 505.408'i FARKLI (aynı sınır yayı dönemler
     ve komşular arası ~21 kez tekrar ediyor) ⇒ gzip onu bir kez saklar.
  ÖLÇÜM: 166,1 MB → 24,0 MB (varint) → 10,0 MB (gzip). Nokta sayısı ve
  hassasiyet DEĞİŞMEZ.

🔴 SESSİZ BOZULMA — bu aletin tek gerçek riski ve tek savunması:
    Çözücüdeki bir hata haritayı ÇİZER ama YANLIŞ çizer ve hiçbir denetim
    ötmez. Bu yüzden `kodla` BİREBİR GİDİŞ-DÖNÜŞ SINAVINI GEÇMEDEN YAZMAZ:
    kodlanan veri yeniden çözülür ve ÖZGÜN DOSYAYLA BAYT BAYT karşılaştırılır.
    Sınav geçmezse çıktı dosyası OLUŞMAZ. Bu davranış pazarlık konusu değildir.

🔴 ONYEDİ ARAÇ BU DOSYAYI OKUYOR (ölçüldü): denetle · denetle_yayin ·
denetle_bosluk · denetle_gorunurluk · uret_devirler · uret_petek ·
uret_bosluk · motor_esitlik · renk_cikti · dolgu · kosu_yayin · olcut ve
olc_enklav altında 5 alet — en az BEŞ AYRI ayrıştırıcıyla. Hiçbirine
dokunulmuyor: `coz` özgün `.js` dosyasını BİREBİR geri üretir, araçlar onu
okur. Depoda `.bin` durur, yerelde `.js` üretilir.

KULLANIM
    py arac/kodla.py sina    <girdi.js>              bellekte kodla+çöz+kıyasla
    py arac/kodla.py kodla   <girdi.js> <cikti.bin>  sınavı geçerse yaz
    py arac/kodla.py coz     <girdi.bin> <cikti.js>  özgün metni geri üret
    py arac/kodla.py secenek <girdi.js>              yayın seçeneklerini ölç

ÖLÇÜLDÜ (28 Eylül 2026, koşu 17b çıktısı):
    169,06 MB → 10,78 MB  ×0,064 · nokta 10.700.867 (AYNI) · 3 hane (AYNI)
    ✅ gidiş-dönüş sınavı: çözülen metin özgünle BİREBİR
    Sınav iki GERÇEK hata yakaladı ve ikisi de bu dosyada gerekçeli:
      ① `.0` kırpma — 55.961 yerde (`20.0` → `20`)
      ② negatif sıfır — 38 yerde (`-0.0` → `0.0`)
    İkisi de haritayı DOĞRU çizerdi; yani "harita doğru görünüyor" ölçütü
    ikisini de kaçırıyordu. Ölçüt BAYT BAYT olduğu için yakalandılar.
"""
import gzip
import math
import os
import re
import sys
import time

# `line_buffering` ŞART: çıktı boruya yazılınca Python blok tamponlar ve
# uzun süren aşamalarda ekran boş kalır — koşu ölmüş mü sürüyor mü ayırt
# edilemez (`D222`nin aynı ailesi).
sys.stdout.reconfigure(encoding="utf-8", errors="replace", line_buffering=True)

SIHIR = b"ATLASGEO"
SURUM = 1
OLCEK = 1000          # 3 ondalık hane — dosyanın MEVCUT hassasiyeti (ölçüldü)
HAVUZ_ADI = "window.DEVLET_PARCALAR = "


# ── varint (zigzag) ──────────────────────────────────────────────────────
def _yaz(out, n):
    z = (n << 1) ^ (n >> 63) if n < 0 else (n << 1)
    while z >= 128:
        out.append((z & 0x7F) | 0x80)
        z >>= 7
    out.append(z)


def _oku(b, i):
    z = k = 0
    while True:
        c = b[i]
        i += 1
        z |= (c & 0x7F) << k
        if not c & 0x80:
            return ((-((z + 1) >> 1)) if z & 1 else (z >> 1)), i
        k += 7


def _sayi(f):
    """float → dosyadaki gibi EN KISA gösterim: düpedüz `repr`.

    🔴 `repr` KULLANILIYOR, `%g` DEĞİL: `%g` altı anlamlı haneye yuvarlar ve
    `-104.123456` gibi değerleri BOZAR. `repr` o float'a geri dönen EN KISA
    dizgiyi verir — motorun `json.dumps` ile yazdığının aynısı.

    🔴 VE `.0` KIRPILMIYOR — ilk sürüm kırpıyordu ve GİDİŞ-DÖNÜŞ SINAVI onu
    YAKALADI: motor `[20.0,69.348]` yazıyor, kırpan sürüm `[20,69.348]`
    üretiyordu. 55.961 yerde, 111.922 baytlık fark. JS ikisini de aynı sayı
    olarak okuduğu için HARİTA DOĞRU ÇİZİLİRDİ — yani hata sessiz kalırdı ve
    yalnız `motor_esitlik.py`nin koşu kıyası bozulurdu. Sınav bayt bayt
    olduğu için çıktı hiç yazılmadı. Ölçüt "harita doğru görünüyor" değil
    "dosya BİREBİR aynı" olmalı; birincisi bu hatayı görmüyordu.
    """
    return repr(f)


# ── havuz metni ⇄ nokta listeleri ────────────────────────────────────────
def _ayristir(havuz_metni):
    """'[[[x,y],...],[...]]' → [[(x,y),...], ...]"""
    ic = havuz_metni[1:-1]                      # en dış köşeli parantez
    # 🔴 `split` DÖNGÜNÜN DIŞINDA. İlk sürümde döngü gövdesinde ikinci bir
    # `ic.split(...)` vardı (ölü bir `if` için) ve 166 MB'lık dizgiyi 93.050
    # kez bölüyordu — O(n²). Alet 10 dakika çıktı vermeden koştu ve
    # öldürülmek zorunda kaldı. Bir ölçüm aletinin kendisi ölçülemez hâle
    # gelirse, ölçtüğü şey hakkında hiçbir şey söyleyemez.
    dilimler = ic.split("]],[[")
    halkalar = []
    for i, h in enumerate(dilimler):
        ham = h[2:] if i == 0 else h
        nk = []
        for c in ham.split("],["):
            v = c.strip("[]").split(",")
            if len(v) != 2:
                continue
            nk.append((float(v[0]), float(v[1])))
        halkalar.append(nk)
    return halkalar


def _metinle(halkalar):
    """[[(x,y),...]] → '[[[x,y],...],[...]]'  (motorun biçimiyle aynı)"""
    p = []
    for nk in halkalar:
        p.append("[" + ",".join("[%s,%s]" % (_sayi(x), _sayi(y))
                                for x, y in nk) + "]")
    return "[" + ",".join(p) + "]"


# ── YUVA 1 — poligon dizisi (petek_govde.js) ─────────────────────────────
# PETEK_GOVDE_PARCA = [ poligon, ... ] ve poligon = [ halka, ... ]; yani
# ötekilerden BİR DÜZEY derin. Halka kodlayıcısı DEĞİŞMEZ — poligonlar
# düzleştirilip halka listesine çevrilir, gruplama ayrı bir sayı listesinde
# tutulur. Böylece sınanmış kodlayıcıya hiç dokunulmaz.
def _ayristir_yuva(metin):
    """'[[[[x,y],...]],...]' → ([[(x,y),...], ...], [poligondaki halka sayısı])"""
    # 🔴 DİZGİ BÖLMESİ DEĞİL, DERİNLİK TARAYICISI. `split("]],[[")` ile üst
    # düzey poligonları ayırmak, baştaki/sondaki fazla köşeli parantezleri
    # elle kırpmayı gerektiriyor ve o kırpma tek karakterlik bir hatayla
    # sessizce yanlış halka üretir. Burada bir karakter döngüsü var; 11 MB
    # için birkaç saniye sürer ve DOĞRUDUR — takas bilinçli.
    halkalar, sayilar = [], []
    derin, bas = 0, None
    for j, c in enumerate(metin):
        if c == "[":
            derin += 1
            if derin == 2:                      # bir poligon başladı
                bas = j
        elif c == "]":
            if derin == 2 and bas is not None:  # poligon bitti
                ic_halka = _ayristir(metin[bas:j + 1])
                sayilar.append(len(ic_halka))
                halkalar.extend(ic_halka)
                bas = None
            derin -= 1
    return halkalar, sayilar


def _metinle_yuva(halkalar, sayilar):
    """Düzleştirilmiş halkaları poligon dizisine geri kur."""
    p, k = [], 0
    for n in sayilar:
        p.append(_metinle(halkalar[k:k + n]))
        k += n
    return "[" + ",".join(p) + "]"


# ── TEK GİRİŞ / TEK ÇIKIŞ — yuva farkı YALNIZ burada bilinir ─────────────
# Çağıran yerler (yay · kapi · coz_c) yuvayı hiç bilmez. Böylece hedef
# eklemek üç yeri birden değiştirmeyi gerektirmez; bir yerde unutulursa
# öteki sessizce yanlış çalışırdı.
def _havuz_kodla(havuz_metni):
    """Havuz metni → (ikili akış, halka sayısı, nokta sayısı)."""
    if YUVA:
        halkalar, sayilar = _ayristir_yuva(havuz_metni)
        out = bytearray()
        _yaz(out, len(sayilar))
        for n in sayilar:
            _yaz(out, n)
        govde = bytes(out) + _kodla_havuz(halkalar)
    else:
        halkalar = _ayristir(havuz_metni)
        govde = _kodla_havuz(halkalar)
    return govde, len(halkalar), sum(len(h) for h in halkalar)


def _havuz_metinle(b):
    """İkili akış → havuz metni (özgün biçimiyle, birebir)."""
    if YUVA:
        n, k = _oku(b, 0)
        sayilar = []
        for _ in range(n):
            v, k = _oku(b, k)
            sayilar.append(v)
        return _metinle_yuva(_coz_havuz(b[k:]), sayilar)
    return _metinle(_coz_havuz(b))


# ── kodla / çöz ──────────────────────────────────────────────────────────
def _eksi_sifir(v):
    """v NEGATİF SIFIR mı — `v == 0` bunu ayırt etmez, işaret biti ayırt eder."""
    return v == 0.0 and math.copysign(1.0, v) < 0.0


def _kodla_havuz(halkalar):
    """Halka havuzu + NEGATİF SIFIR KUYRUĞU.

    🔴 NEGATİF SIFIR KUYRUĞU NİÇİN VAR — gidiş-dönüş sınavı onu yakaladı:
    dosyada 38 yerde `-0.0` geçiyor (ör. `[-0.0,49.331]`, Normandiya kıyısı,
    Greenwich boylamı). `int(round(-0.0 * 1000))` = 0 ve `0/1000` = +0.0 ⇒
    işaret KAYBOLUYORDU. Sayısal olarak `-0.0 == 0.0` ve harita BİREBİR AYNI
    çizilirdi; yani bu farkı "zararsız" sayıp geçmek mümkündü.
    ⇒ GEÇMEDİM. Sınavın değeri MUTLAK olmasından geliyor: bir istisnaya izin
      verirsem sıradaki farkın da zararsız olup olmadığını MUHAKEME etmem
      gerekir, ve sessiz bozulma tam o kapıdan girer. 38 kayıt ~100 bayt
      tutuyor; sınavın mutlaklığı o baytlardan kıymetli.
    """
    out = bytearray()
    _yaz(out, len(halkalar))
    eksi = []
    sira = 0
    for nk in halkalar:
        _yaz(out, len(nk))
        px = py = 0
        for x, y in nk:
            if _eksi_sifir(x):
                eksi.append(sira)
            if _eksi_sifir(y):
                eksi.append(sira + 1)
            sira += 2
            ix, iy = int(round(x * OLCEK)), int(round(y * OLCEK))
            _yaz(out, ix - px)
            _yaz(out, iy - py)
            px, py = ix, iy
    # kuyruk: adet + sıra numaralarının FARKLARI (artan sırada)
    _yaz(out, len(eksi))
    onceki = 0
    for s in eksi:
        _yaz(out, s - onceki)
        onceki = s
    return bytes(out)


def _coz_havuz(b):
    i = 0
    n, i = _oku(b, i)
    halkalar = []
    uzunluklar = []
    for _ in range(n):
        m, i = _oku(b, i)
        uzunluklar.append(m)
        px = py = 0
        nk = []
        for _ in range(m):
            dx, i = _oku(b, i)
            dy, i = _oku(b, i)
            px += dx
            py += dy
            nk.append([px / OLCEK, py / OLCEK])
        halkalar.append(nk)
    # negatif sıfır kuyruğu
    k, i = _oku(b, i)
    sira = 0
    eksi = []
    for _ in range(k):
        d, i = _oku(b, i)
        sira += d
        eksi.append(sira)
    for s in eksi:
        # düz sıra numarasından (halka, nokta, eksen) bul
        kalan = s
        for h, m in enumerate(uzunluklar):
            if kalan < 2 * m:
                halkalar[h][kalan // 2][kalan % 2] = -0.0
                break
            kalan -= 2 * m
    if i != len(b):
        raise ValueError("akış sonunda %d bayt arttı — biçim uyuşmuyor"
                         % (len(b) - i))
    return [[tuple(p) for p in h] for h in halkalar]


def _bolumle(metin):
    """Dosyayı ÜÇE ayır: havuzdan önce · havuz · havuzdan sonra."""
    k = metin.index(HAVUZ_ADI)
    bas = k + len(HAVUZ_ADI)
    # havuz '[' ile başlar, dengeli kapanışını bul
    assert metin[bas] == "[", metin[bas:bas + 20]
    derinlik = 0
    for j in range(bas, len(metin)):
        c = metin[j]
        if c == "[":
            derinlik += 1
        elif c == "]":
            derinlik -= 1
            if derinlik == 0:
                return metin[:bas], metin[bas:j + 1], metin[j + 1:]
    raise ValueError("havuz kapanışı bulunamadı")


def _paketle(onek, havuz_b, sonek):
    g = bytearray()
    g += SIHIR
    g.append(SURUM)
    for parca in (onek.encode("utf-8"), havuz_b, sonek.encode("utf-8")):
        _yaz(g, len(parca))
        g += parca
    return gzip.compress(bytes(g), 9)


def _ac(veri):
    g = gzip.decompress(veri)
    assert g[:8] == SIHIR, "sihirli imza yok — bu dosya bu aletin çıktısı değil"
    assert g[8] == SURUM, "sürüm uyuşmuyor: %d" % g[8]
    i = 9
    p = []
    for _ in range(3):
        n, i = _oku(g, i)
        p.append(g[i:i + n])
        i += n
    return p[0].decode("utf-8"), p[1], p[2].decode("utf-8")


# ── emirler ─────────────────────────────────────────────────────────────
def sina(yol, yaz_yolu=None):
    """Kodla → çöz → ÖZGÜN METİNLE BAYT BAYT kıyasla. Geçerse (istenirse) yaz."""
    t = time.perf_counter()
    ham = os.path.getsize(yol)
    print("girdi: %s  (%.2f MB)" % (yol, ham / 1048576))
    with open(yol, encoding="utf-8") as f:
        metin = f.read()
    onek, havuz, sonek = _bolumle(metin)
    print("  önek %d bayt · havuz %.1f MB · sonek %.2f MB"
          % (len(onek), len(havuz) / 1048576, len(sonek) / 1048576))

    halkalar = _ayristir(havuz)
    nokta = sum(len(h) for h in halkalar)
    print("  halka %d · nokta %d  (%.0f sn)"
          % (len(halkalar), nokta, time.perf_counter() - t))

    # 🔴 ÖN SINAV: hassasiyet kaybı var mı? 3 haneden ince bir koordinat
    #    varsa kodlama KAYIPLI olur — bunu sessizce geçmek YASAK.
    kayip = 0
    for nk in halkalar:
        for x, y in nk:
            if int(round(x * OLCEK)) / OLCEK != x or \
               int(round(y * OLCEK)) / OLCEK != y:
                kayip += 1
    if kayip:
        print("  🔴 %d koordinat %d ölçeğine SIĞMIYOR — kodlama KAYIPLI olur."
              % (kayip, OLCEK))
        print("     OLCEK yükseltilmeli. Yazım İPTAL.")
        return 1
    print("  ✓ ön sınav: bütün koordinatlar 1/%d ölçeğine tam sığıyor" % OLCEK)

    havuz_b = _kodla_havuz(halkalar)
    paket = _paketle(onek, havuz_b, sonek)
    print("  varint %.2f MB → gzip %.2f MB   (%.0f sn)"
          % (len(havuz_b) / 1048576, len(paket) / 1048576,
             time.perf_counter() - t))

    # ── GİDİŞ-DÖNÜŞ ──
    o2, h2, s2 = _ac(paket)
    geri = _metinle(_coz_havuz(h2))
    yeniden = o2 + geri + s2
    print("  çözülen %.2f MB  (%.0f sn)"
          % (len(yeniden.encode("utf-8")) / 1048576, time.perf_counter() - t))

    if yeniden == metin:
        print("\n  ✅ GİDİŞ-DÖNÜŞ SINAVI GEÇTİ — çözülen metin ÖZGÜNLE BİREBİR.")
    else:
        print("\n  🔴 SINAV GEÇMEDİ — çözülen metin özgünden FARKLI.")
        # farkın YERİNİ göster; "farklı" demek yetmez, nerede olduğu lazım
        n = min(len(metin), len(yeniden))
        i = 0
        while i < n and metin[i] == yeniden[i]:
            i += 1
        print("     ilk fark %d. baytta (uzunluk özgün %d · çözülen %d)"
              % (i, len(metin), len(yeniden)))
        print("     özgün  : ...%s..." % metin[max(0, i - 40):i + 40])
        print("     çözülen: ...%s..." % yeniden[max(0, i - 40):i + 40])
        print("     ⇒ YAZIM İPTAL.")
        return 1

    print("  kazanç: %.2f MB → %.2f MB   ×%.3f   (nokta ve hassasiyet AYNI)"
          % (ham / 1048576, len(paket) / 1048576, len(paket) / ham))
    if yaz_yolu:
        with open(yaz_yolu, "wb") as f:
            f.write(paket)
        print("  ✓ yazıldı: %s" % yaz_yolu)
    print("  süre %.0f sn" % (time.perf_counter() - t))
    return 0


def secenek(yol):
    """İki yayın seçeneğinin GERÇEK boyutunu ölç — karar sayıyla verilsin.

    B) ikili `.bin` + `fetch` + `DecompressionStream`
       en küçük, ama `index.html`deki betik SIRASINI değiştirmeyi gerektirir:
       `app.js:428` veriyi EŞZAMANLI okuyor ve ondan sonra 6 betik daha
       yükleniyor. Ayrıca eski tarayıcı için YEDEK KOD YOLU gerekir.
    C) base64 `.js` + eşzamanlı çözme
       daha büyük, ama `app.js`e DOKUNULMAZ, betik sırası DEĞİŞMEZ,
       `DecompressionStream` gerekmez ⇒ yedek yol yok ⇒ kırılacak yer az.

    📌 GitHub Pages metni gzip'leyerek servis eder; o yüzden C için ÖNEMLİ
    OLAN base64'ün GZIP'Lİ boyutudur, ham boyutu değil. Depo sınırı (100 MB)
    ise HAM boyuta bakar. İki sütun bu yüzden ayrı.
    """
    import base64
    t = time.perf_counter()
    with open(yol, encoding="utf-8") as f:
        metin = f.read()
    onek, havuz, sonek = _bolumle(metin)
    havuz_b, _nhalka, _nnokta = _havuz_kodla(havuz)
    ham = os.path.getsize(yol)
    print("girdi %.1f MB · halka %d · varint %.2f MB  (%.0f sn)\n"
          % (ham / 1048576, _nhalka, len(havuz_b) / 1048576,
             time.perf_counter() - t))

    print("%-52s %10s %10s" % ("", "depoda MB", "telde MB"))
    print("-" * 74)
    print("%-52s %10.1f %10.1f"
          % ("A) şimdiki hâl — 🔴 100 MB SINIRINI GEÇİYOR", ham / 1048576,
             len(gzip.compress(metin.encode("utf-8"), 6)) / 1048576))

    b = _paketle(onek, havuz_b, sonek)
    print("%-52s %10.1f %10.1f"
          % ("B) ikili .bin — async + betik sırası değişir",
             len(b) / 1048576, len(b) / 1048576))

    # C: yalnız HAVUZ base64'lenir; üstyapı (2,95 MB) düz metin kalır.
    b64 = base64.b64encode(havuz_b)
    ust = len((onek.replace(HAVUZ_ADI, "") + sonek).encode("utf-8"))
    c_ham = (len(b64) + 30 + ust) / 1048576
    c_tel = (len(gzip.compress(b64, 6))
             + len(gzip.compress((onek + sonek).encode("utf-8"), 6))) / 1048576
    print("%-52s %10.1f %10.1f"
          % ("C) base64 .js — SENKRON, app.js'e dokunmaz", c_ham, c_tel))
    print("\n🔴 depo sınırı 100 MB/dosya · bugün yayındaki dosya 85,3 MB")
    print("📌 C'nin ham boyutu B'den %.0f MB büyük, telde %.0f MB büyük."
          % (c_ham - len(b) / 1048576, c_tel - len(b) / 1048576))
    return 0


def coz(yol, cikti):
    t = time.perf_counter()
    with open(yol, "rb") as f:
        onek, havuz_b, sonek = _ac(f.read())
    metin = onek + _metinle(_coz_havuz(havuz_b)) + sonek
    with open(cikti, "w", encoding="utf-8", newline="") as f:
        f.write(metin)
    print("✓ %s → %s  (%.2f MB, %.0f sn)"
          % (yol, cikti, os.path.getsize(cikti) / 1048576,
             time.perf_counter() - t))
    return 0


# ══ C YOLU — Emre'nin kararı (28 Eylül 2026): "app.js'e dokunma" ══════════
# Üretilen iki dosya:
#   data/devlet_parcalar.js    window.__DP_ONEK + window.__DP_B64   (~35 MB)
#   data/devlet_harita_ust.js  özgün dosyanın SONEKİ, BİREBİR       (~3 MB)
# Tarayıcı: ust.js (senkron <script>) → parcalar.js (senkron) → js/geo_coz.js
# çözer ve `window.DEVLET_PARCALAR`ı kurar. `app.js:428` aynı yerden okur.
# 🔴 SONEK BİREBİR YAZILIR, başına açıklama satırı EKLENMEZ: `coz` özgün
#    dosyayı bayt bayt geri üretebilmek zorunda (17 alet onu okuyor ve
#    `motor_esitlik.py` koşuları kıyaslıyor). Bir açıklama satırı eklemek,
#    geri üretimi "kaç bayt kırpacağım" muhakemesine bağlardı — ve o
#    muhakeme sessiz bozulmanın kapısıdır.
ONEK_ADI = "window.__DP_ONEK"
B64_ADI = "window.__DP_B64"
SHA_ADI = "window.__DP_SHA"
DP_JS = "devlet_parcalar.js"
UST_JS = "devlet_harita_ust.js"

# ---------------------------------------------------------------------------
# İKİ HEDEF — aynı algoritma, ayrı havuzlar (29 Eylül 2026)
# ---------------------------------------------------------------------------
# İlk hedef `devletler_harita.js`ti (169 MB, GitHub'ın 100 MB sınırına
# sığmıyordu). İkincisi ölçülerek seçildi, benzerliğe bakılarak değil:
#   donemler.js 54,79 MB · %73,9 rakam+nokta · %25,3 ayraç
#   window.PARCALAR TEK BAŞINA 53,66 MB = dosyanın %97,9'u
#   biçimi DEVLET_PARCALAR ile birebir aynı: [[[lon,lat],...],...]
#   ölçülen kazanç 54,79 → 10,88 MB = 5,03× · gidiş-dönüş BİREBİR
#   (nokta başına 15,67 → 2,85 bayt · 3.591.984 nokta, 4.765 halka)
# ⚠️ Havuz adları AYRI olmak ZORUNDA (`__DP_*` vs `__PR_*`): ikisi de aynı
#    sayfada, aynı küresel kapsamda yaşıyor. Aynı adı kullansalardı ikincisi
#    birincisini EZER ve harita sessizce yanlış çizerdi.
HEDEFLER = {
    "devlet": {
        "kaynak": "devletler_harita.js", "havuz": "window.DEVLET_PARCALAR = ",
        "onek": "window.__DP_ONEK", "b64": "window.__DP_B64",
        "sha": "window.__DP_SHA", "parca": "devlet_parcalar.js",
        "ust": "devlet_harita_ust.js", "on": "devlet_harita_on.js",
        "ne": "Devlet gövdelerinin",
    },
    "donem": {
        "kaynak": "donemler.js", "havuz": "window.PARCALAR = ",
        "onek": "window.__PR_ONEK", "b64": "window.__PR_B64",
        "sha": "window.__PR_SHA", "parca": "donem_parcalar.js",
        "ust": "donemler_ust.js", "on": "donemler_on.js",
        "ne": "Dönem peteklerinin",
    },
    # 🔴 ÜÇÜNCÜ HEDEF — ve ilk ikisinden BİR DÜZEY DERİN (29 Eylül 2026).
    # Ölçüldü: petek_govde.js 11,06 MB · en çok 3 ondalık hane (OLCEK=1000
    # BİREBİR yeter) · %71,6 rakam · %24,8 ayraç. AMA yapısı farklı:
    #   DEVLET_PARCALAR   = [ halka, ... ]              halka = [[lon,lat],...]
    #   PETEK_GOVDE_PARCA = [ poligon, ... ]  poligon = [ halka, ... ]
    # Yani bir düzey daha var. "Aynı biçim" diye varsayıp geçseydim ayrıştırıcı
    # sessizce yanlış halkalar üretirdi — gidiş-dönüş sınavı yakalardı ama
    # sebebini aramak zaman yerdi. Bu yüzden `yuva` alanı AÇIKÇA yazılıyor.
    # ⚠️ Bu dosya AÇILIŞTA YÜKLENMİYOR: `js/app.js:9983` onu yalnız antlaşma
    #    farkı kutusu açılınca getiriyor. Kodlamanın ilk açılış süresine
    #    etkisi SIFIRDIR; kazanç depo boyutu ve o kutunun açılış hızıdır.
    "govde": {
        "kaynak": "petek_govde.js", "havuz": "window.PETEK_GOVDE_PARCA = ",
        "onek": "window.__PG_ONEK", "b64": "window.__PG_B64",
        "sha": "window.__PG_SHA", "parca": "petek_govde_parca.js",
        "ust": "petek_govde_ust.js", "on": "petek_govde_on.js",
        "ne": "Petek gövdelerinin", "yuva": 1,
    },
}
HEDEF = "devlet"
ACIKLAMA = HEDEFLER["devlet"]["ne"]
ON_JS = HEDEFLER["devlet"]["on"]
YUVA = 0

# 🔴 ÖNEK DOSYASI — 29 Eylül 2026'da ölçülen SESSİZ VERİ KAYBININ çaresi
# ---------------------------------------------------------------------------
# İlk hedefte (devletler_harita.js) havuz dosyanın EN BAŞINDAYDI, yani önek
# yalnız yorum satırlarıydı; base64'e gömülüp çalıştırılmaması zararsızdı.
# İkinci hedefte (donemler.js) öyle DEĞİL — ölçüldü:
#     konum    599  window.SERBEST        \
#            83964  window.SERBEST_U       > ÖNEKTE, havuzdan ÖNCE
#            85597  window.PETEKLER       /
#           189182  window.PARCALAR      <- havuz burada başlıyor
# Önek çalıştırılmayınca bu üç küresel BOŞ kaldı (SERBEST 303→0 · SERBEST_U
# 303→0 · PETEKLER 4296→0) ve sayfa hatasız açıldı: hiçbir konsol hatası,
# hiçbir istisna. Metin yeniden kurma sınavı da GEÇMİŞTİ — çünkü o sınav
# "metin geri üretilebiliyor mu" diye sorar, "tarayıcı aynı küreselleri
# görüyor mu" diye SORMAZ. Kusuru yalnız A/B ölçümü yakaladı.
# ⇒ İki çare birlikte: ① önekin ÇALIŞTIRILABİLİR kısmı ayrı bir dosyaya
#   yazılır ve index.html'e eklenir ② `kapi()` artık ÖZGÜN dosyadaki her
#   `window.X` adının yayınlanan dosyalardan birinde bulunmasını ŞART koşar.
#   ②'siz ① yetmez: yeni bir hedefte aynı tuzağa yine düşülürdü.
KURESEL = re.compile(r"(?m)^\s*window\.([A-Za-z_]\w*)\s*=")


def _acilis_halkalari(dizin, gun="1281-01-01"):
    """Açılış gününde GEREKEN halka indeksleri — ölçerek, tahmin etmeden.

    `devlet_harita_ust.js` içindeki DEVLET_HARITA geçerli JSON'dur (makine
    üretimi); regex yerine `json.loads` kullanılır — regex bir gün biçim
    değişince sessizce eksik sayardı.
    Etkinlik sınavı: ISO tarih dizgileri sıralanabilir olduğu için
    `f <= gun <= t` doğrudan çalışır; `gunIdx` kopyasına gerek YOK (bir Python
    kopyası `odak_cozum` vakasında iki kez "yanlış temiz" vermişti).
    """
    import json
    y = os.path.join(dizin, HEDEFLER["devlet"]["ust"])
    with open(y, encoding="utf-8") as f:
        s = f.read()
    def _dizi(ad):
        i = s.index("window." + ad + " = ")
        b = s.index("[", i)
        d, j = 0, b
        while j < len(s):
            if s[j] == "[":
                d += 1
            elif s[j] == "]":
                d -= 1
                if d == 0:
                    break
            j += 1
        return json.loads(s[b:j + 1])
    harita = _dizi("DEVLET_HARITA")
    parca_halka = _dizi("DEVLET_PARCA_HALKA")
    gerek, donem, etkin = set(), 0, 0
    for dev in harita:
        for p in dev.get("dnm", []):
            donem += 1
            if not (p.get("f", "9999") <= gun <= p.get("t", "0000")):
                continue
            etkin += 1
            for gi in p.get("g", []):
                for hi in (parca_halka[gi] if gi < len(parca_halka) else []):
                    gerek.add(hi)
    return sorted(gerek), donem, etkin


def on_dilim(dizin, gun="1281-01-01"):
    """KATMAN 1 — açılış gününün halkalarını ayrı, KÜÇÜK bir dosyaya yaz.

    NİÇİN (29 Eylül 2026, ölçüldü):
      devlet_parcalar.js  17,69 MB telde · 93.050 halka · 10.700.867 nokta
      açılış günü (1281-01-01) YALNIZ 5.731 halka / 340.616 nokta istiyor
      = havuzun %3,2'si ≈ 0,57 MB
    ⇒ Tam havuzu açılışta beklemek, görünmeyen verinin 17 MB'ını beklemektir.
    ⚠️ Ölçülen ve REDDEDİLEN iki yol:
      · tembel HESAP (p.ft'yi ihtiyaç anında kurmak): bütün 4.186 dönemin
        geometrisini kurmak 16 ms sürüyor — kazanç yok, karmaşa çok.
      · havuzu indeks aralıklarına bölmek: açılış günü 8 eşit aralığın
        SEKİZİNE de dokunuyor (2114·235·75·157·394·361·1063·1332) ⇒ işe
        yaramaz; işe yaraması için havuzu YENİDEN SIRALAMAK gerekirdi, o da
        DEVLET_PARCA_HALKA'yı yeniden eşlemeyi ve özgün metni geri üretmek
        için permütasyon saklamayı gerektirir. Kazanca değmeyecek risk.
    ⇒ SEÇİLEN YOL: seyrek alt küme. Halkalar ÖZGÜN indeksleriyle yazılır,
      havuz yeniden sıralanMAZ, DEVLET_PARCA_HALKA'ya DOKUNULMAZ, `coz-c`
      yolu hiç değişmez. Bedel: bu 0,57 MB tam havuzda da duruyor (mükerrer).
    """
    import base64
    import hashlib
    hedef_sec("devlet")
    t = time.perf_counter()
    idx, donem, etkin = _acilis_halkalari(dizin, gun)
    onek, havuz_b, sonek, sha = _oku_c(dizin)
    havuz = _coz_havuz(havuz_b)
    alt = [havuz[i] for i in idx]

    out = bytearray()
    _yaz(out, len(idx))
    onc = 0
    for i in idx:                       # artan indeksler → delta varint
        _yaz(out, i - onc)
        onc = i
    govde = bytes(out) + _kodla_havuz(alt)

    ad = "devlet_parca_on.js"
    yol = os.path.join(dizin, ad)
    with open(yol, "w", encoding="utf-8", newline="") as f:
        f.write("// Otomatik üretildi — elle düzenlemeyin. Betik: arac/kodla.py on-dilim\n")
        f.write("// KATMAN 1: açılış gününün (%s) halkaları — havuzun seyrek alt kümesi.\n" % gun)
        f.write("// Tam havuz (data/devlet_parcalar.js) ilk boyamadan SONRA arka planda iner.\n")
        f.write("// Biçim: varint N · N delta indeks · sonra normal halka akışı.\n")
        f.write("window.__DP_ON_GUN=\"%s\";\n" % gun)
        f.write("window.__DP_ON_B64=\"%s\";\n" % base64.b64encode(govde).decode())

    # 🔴 GİDİŞ-DÖNÜŞ: alt kümedeki her halka tam havuzdakiyle AYNI mı?
    ib = bytes(out)
    _n, k = _oku(ib, 0)
    geri_idx, onc = [], 0
    for _ in range(_n):
        d, k = _oku(ib, k)
        onc += d
        geri_idx.append(onc)
    geri = _coz_havuz(govde[k:])
    ayni = (geri_idx == idx and len(geri) == len(alt)
            and all(list(map(tuple, a)) == list(map(tuple, b))
                    for a, b in zip(geri, alt)))
    mb = os.path.getsize(yol) / 1048576
    print("açılış günü %s · dönem %d, etkin %d · halka %d/%d (%.1f%%) · nokta %d"
          % (gun, donem, etkin, len(idx), len(havuz),
             100.0 * len(idx) / max(1, len(havuz)), sum(len(h) for h in alt)))
    print("  %s %.2f MB   (tam havuz %.2f MB)"
          % (ad, mb, os.path.getsize(os.path.join(dizin, DP_JS)) / 1048576))
    print("  gidiş-dönüş: %s  (%.0f sn)"
          % ("✓ BİREBİR" if ayni else "🔴 FARKLI", time.perf_counter() - t))
    if not ayni:
        os.remove(yol)
        print("  ⇒ dosya SİLİNDİ.")
        return 1
    return 0


def kodla_hedef_sec(ad):
    """CLI için: hedefi seç, seçileni EKRANA BAS.

    Sessizce seçmek tehlikeli: yanlış hedefle koşan biri, çıktı adlarına
    bakana kadar yanlışı fark etmez.
    """
    hedef_sec(ad)
    print("hedef: %s  (%s → %s + %s)"
          % (ad, HEDEFLER[ad]["kaynak"], DP_JS, UST_JS))


def hedef_sec(ad):
    """Modülün hedefini değiştir. Algoritma aynı, yalnız adlar değişir."""
    global HAVUZ_ADI, ONEK_ADI, B64_ADI, SHA_ADI, DP_JS, UST_JS, HEDEF
    global ACIKLAMA, ON_JS
    if ad not in HEDEFLER:
        raise ValueError("bilinmeyen hedef: %s (%s)" % (ad, list(HEDEFLER)))
    h = HEDEFLER[ad]
    HEDEF, HAVUZ_ADI = ad, h["havuz"]
    ONEK_ADI, B64_ADI, SHA_ADI = h["onek"], h["b64"], h["sha"]
    DP_JS, UST_JS, ACIKLAMA, ON_JS = h["parca"], h["ust"], h["ne"], h["on"]
    global YUVA
    YUVA = h.get("yuva", 0)          # 0 = halka dizisi · 1 = poligon dizisi


def _yaz_c(dizin, onek, havuz_b, sonek, ozgun_sha=""):
    import base64
    os.makedirs(dizin, exist_ok=True)
    p_yol = os.path.join(dizin, DP_JS)
    u_yol = os.path.join(dizin, UST_JS)
    with open(p_yol, "w", encoding="utf-8", newline="") as f:
        f.write("// Otomatik üretildi — elle düzenlemeyin. Betik: arac/kodla.py\n")
        f.write("// %s koordinat havuzu: delta + varint + base64.\n" % ACIKLAMA)
        f.write("// Çözücü: js/geo_coz.js (senkron). Özgün metni geri üretmek:\n")
        f.write("//   py arac/kodla.py coz-c data <cikti.js> %s\n" % HEDEF)
        f.write("// 🔴 %s, özgün %s'in BAŞLIĞIDIR (base64).\n"
                % (ONEK_ADI, HEDEFLER[HEDEF]["kaynak"]))
        f.write("//    Tarayıcı kullanmaz; yalnız geri üretim için saklanır.\n")
        # 🔴 __DP_SHA — ÖZGÜN devletler_harita.js'in sha256'sı. TANIK budur.
        #    Niçin gerekli: depoda artık 169 MB'lık özgün dosya DURMUYOR
        #    (.gitignore). Temiz bir klonda "bu eserler doğru mu" sorusunun
        #    karşılaştırılacak bir aslı olmazdı. Damga, aslın yerine geçer:
        #    yayın kapısı iki dosyadan metni yeniden kurar, sha256'sını alır
        #    ve buna bakar. Eşleşmezse yayın DURUR.
        f.write("%s=\"%s\";\n" % (SHA_ADI, ozgun_sha))
        f.write("%s=\"%s\";\n" % (ONEK_ADI,
                                  base64.b64encode(onek.encode("utf-8")).decode()))
        f.write("%s=\"%s\";\n" % (B64_ADI, base64.b64encode(havuz_b).decode()))
    with open(u_yol, "w", encoding="utf-8", newline="") as f:
        f.write(sonek)

    # 🔴 ÖNEKİN ÇALIŞTIRILABİLİR KISMI — bkz. dosya başındaki ÖNEK DOSYASI notu.
    # Önek `...window.PARCALAR = ` ile biter; o son parça yarım bir atamadır ve
    # tek başına geçerli JS değildir, atılır. Kalanında `window.X =` varsa o
    # kısım YAYINLANMAK ZORUNDA, yoksa küreseller sessizce boş kalır.
    on_calisir = onek[:-len(HAVUZ_ADI)] if onek.endswith(HAVUZ_ADI) else onek
    o_yol = os.path.join(dizin, ON_JS)
    if KURESEL.search(on_calisir):
        with open(o_yol, "w", encoding="utf-8", newline="") as f:
            f.write("// Otomatik üretildi — elle düzenlemeyin. Betik: arac/kodla.py\n")
            f.write("// %s ÖNEKİ: havuzdan ÖNCE tanımlanan küreseller.\n" % ACIKLAMA)
            f.write("// 🔴 index.html'de %s'ten ÖNCE yüklenmeli.\n" % UST_JS)
            f.write(on_calisir)
        print("  ⚠️ önek küresel TANIMLIYOR (%s) → %s yazıldı"
              % (", ".join(sorted(set(KURESEL.findall(on_calisir)))), ON_JS))
        print("     🔴 index.html'e ŞU SATIR GEREKLİ: "
              '<script src="data/%s?v=rNNNN"></script>' % ON_JS)
    elif os.path.exists(o_yol):
        os.remove(o_yol)          # önceki koşudan kalmasın
    return p_yol, u_yol


def _oku_c(dizin):
    import base64
    with open(os.path.join(dizin, DP_JS), encoding="utf-8") as f:
        satirlar = f.read().split("\n")
    onek = havuz = None
    sha = ""
    for s in satirlar:
        if s.startswith(ONEK_ADI + "="):
            onek = base64.b64decode(s[len(ONEK_ADI) + 2:-2]).decode("utf-8")
        elif s.startswith(B64_ADI + "="):
            havuz = base64.b64decode(s[len(B64_ADI) + 2:-2])
        elif s.startswith(SHA_ADI + "="):
            sha = s[len(SHA_ADI) + 2:-2]
    if onek is None or havuz is None:
        raise ValueError("%s içinde %s / %s bulunamadı" % (DP_JS, ONEK_ADI, B64_ADI))
    with open(os.path.join(dizin, UST_JS), encoding="utf-8", newline="") as f:
        sonek = f.read()
    return onek, havuz, sonek, sha


def kapi(dizin, hedef=None):
    """YAYIN KAPISI ÖLÇÜMÜ — iki dosyadan metni kur, sha damgasıyla kıyasla.

    `denetle_yayin.py` bunu çağırır. Dönen: (ihlal_mi, satirlar).
    🔴 ÖLÇÜLEMEDİ ASLA TEMİZ SAYILMAZ — istisna da ihlaldir.

    🔴 hedef VERİLMEZSE eserleri diskte DURAN BÜTÜN hedefler denetlenir.
    Niçin böyle: 29 Eylül'de ikinci hedef (donemler.js) eklendi. Kapı tek
    hedefe bakmayı sürdürseydi, ikincisi hiç denetlenmeden yayınlanırdı ve
    bu tam da bu kapının ÖNLEMEK için yazıldığı kusur olurdu — sessiz
    bozulma. Yeni bir hedef eklendiğinde kapı kendiliğinden kapsar;
    `denetle_yayin.py`ye dokunmak GEREKMEZ, yani unutulacak bir adım yok.
    """
    import hashlib
    if hedef is None:
        eski = HEDEF
        satirlar, ihlal_var, bulunan = [], False, 0
        try:
            for ad in HEDEFLER:
                hedef_sec(ad)
                if not os.path.isfile(os.path.join(dizin, HEDEFLER[ad]["parca"])):
                    continue            # o hedef henüz geçilmemiş — eski düzen
                bulunan += 1
                i, sl = kapi(dizin, ad)
                ihlal_var = ihlal_var or i
                satirlar += sl
        finally:
            hedef_sec(eski)
        if not bulunan:
            return False, ["⚪ kodlama kapısı: hiçbir hedefin eseri yok — atlandı"]
        return ihlal_var, satirlar

    hedef_sec(hedef)
    s = []
    try:
        onek, havuz_b, sonek, sha = _oku_c(dizin)
        if not sha:
            return True, ["✗  kodlama kapısı: %s içinde %s YOK — asıl dosyanın "
                          "damgası olmadan doğrulanamaz" % (DP_JS, SHA_ADI)]
        metin = onek + _havuz_metinle(havuz_b) + sonek
        yeni = hashlib.sha256(metin.encode("utf-8")).hexdigest()
        if yeni == sha:
            # ── 🔴 KÜRESEL KAPSAMA — metin doğru ama TARAYICI EKSİK GÖREBİLİR ──
            # 29 Eylül 2026 vakası: donemler.js'te SERBEST · SERBEST_U ·
            # PETEKLER havuzdan ÖNCE tanımlıydı, öneke düştü, önek base64'e
            # gömülüp ÇALIŞTIRILMADI. Üç küresel BOŞ kaldı (303→0 · 303→0 ·
            # 4296→0), sayfa hatasız açıldı, konsol sessizdi ve YUKARIDAKİ
            # sha SINAVI GEÇTİ — çünkü o sınav "metin geri üretilebiliyor mu"
            # diye sorar, "tarayıcı aynı küreselleri görüyor mu" diye SORMAZ.
            # ⇒ Bu blok o ikinci soruyu sorar. Özgün metindeki her `window.X`
            #   adı, yayınlanan ÇALIŞAN dosyalardan birinde bulunmalıdır.
            #   Havuzun kendi adı muaftır: onu geo_coz.js kurar.
            bekl = set(KURESEL.findall(metin))
            havuz_kuresel = HAVUZ_ADI.strip().split("=")[0].strip()[len("window."):]
            bekl.discard(havuz_kuresel)
            var = set()
            for ad in (UST_JS, ON_JS):
                y = os.path.join(dizin, ad)
                if os.path.isfile(y):
                    with open(y, encoding="utf-8") as f:
                        var |= set(KURESEL.findall(f.read()))
            kayip = sorted(bekl - var)
            if kayip:
                s.append("✗  KODLAMA KAPISI — YAYINLANMAYAN KÜRESEL: %s"
                         % ", ".join(kayip))
                s.append("     bu adlar %s'te tanımlı ama %s / %s dosyalarının"
                         % (HEDEFLER[HEDEF]["kaynak"], UST_JS, ON_JS))
                s.append("     hiçbirinde YOK ⇒ tarayıcıda BOŞ kalırlar.")
                s.append("     Sayfa hatasız açılır, konsol susar, sha sınavı")
                s.append("     geçer — kusur ancak haritada görünür. YAYIN DURDU.")
                return True, s
            s.append("✓  kodlama kapısı: %s + %s → özgün metin, sha256 %s ✓ "
                     "· %d küresel eksiksiz"
                     % (DP_JS, UST_JS, sha[:12], len(bekl)))
            return False, s
        s.append("✗  KODLAMA KAPISI: kurulan metin damgayla UYUŞMUYOR")
        s.append("     beklenen %s" % sha[:24])
        s.append("     çıkan    %s" % yeni[:24])
        s.append("     ⇒ harita SESSİZCE yanlış çizilebilir. YAYIN DURDU.")
        return True, s
    except Exception as e:                                   # noqa: BLE001
        return True, ["✗  kodlama kapısı ÖLÇEMEDİ: %s" % str(e)[:90]]


def yay(girdi, dizin):
    """C yolunun iki dosyasını yaz — ANCAK gidiş-dönüş sınavı YAZILAN
    DOSYALARDAN geçerse. Sınav bellekte değil DİSKTEN yapılır: yazılan
    dosyalar geri okunur, özgün metin yeniden kurulur, bayt bayt kıyaslanır.
    Geçmezse yazılanlar SİLİNİR.
    """
    import hashlib
    t = time.perf_counter()
    with open(girdi, encoding="utf-8") as f:
        metin = f.read()
    ozgun_sha = hashlib.sha256(metin.encode("utf-8")).hexdigest()
    onek, havuz, sonek = _bolumle(metin)
    havuz_b, _nhalka, _nnokta = _havuz_kodla(havuz)
    print("girdi %.1f MB · halka %d · nokta %d · sha %s  (%.0f sn)"
          % (os.path.getsize(girdi) / 1048576, _nhalka, _nnokta,
             ozgun_sha[:12], time.perf_counter() - t))
    p_yol, u_yol = _yaz_c(dizin, onek, havuz_b, sonek, ozgun_sha)
    pm = os.path.getsize(p_yol) / 1048576
    um = os.path.getsize(u_yol) / 1048576
    print("  yazıldı: %s %.2f MB · %s %.2f MB  (toplam %.2f MB)"
          % (DP_JS, pm, UST_JS, um, pm + um))

    print("  → DİSKTEN gidiş-dönüş sınavı")
    o2, h2, s2, sha2 = _oku_c(dizin)
    yeniden = o2 + _havuz_metinle(h2) + s2
    if yeniden == metin:
        print("\n  ✅ SINAV GEÇTİ — yazılan dosyalardan kurulan metin ÖZGÜNLE BİREBİR.")
        print("  %.1f MB → %.2f MB   ×%.3f"
              % (os.path.getsize(girdi) / 1048576, pm + um,
                 (pm + um) / (os.path.getsize(girdi) / 1048576)))
        # Kapı ölçümü de BURADA koşar: yayın günü değil, ÜRETİM günü sınanır.
        ihlal, satirlar = kapi(dizin)
        for s in satirlar:
            print("  " + s)
        if ihlal:
            print("  🔴 KAPI ÖLÇÜMÜ GEÇMEDİ — yazılanlar SİLİNİYOR.")
            for y in (p_yol, u_yol):
                os.remove(y)
            return 1
        print("  süre %.0f sn" % (time.perf_counter() - t))
        return 0
    n = min(len(metin), len(yeniden))
    i = 0
    while i < n and metin[i] == yeniden[i]:
        i += 1
    print("\n  🔴 SINAV GEÇMEDİ — ilk fark %d. baytta" % i)
    print("     özgün  : ...%s..." % metin[max(0, i - 40):i + 40])
    print("     kurulan: ...%s..." % yeniden[max(0, i - 40):i + 40])
    for y in (p_yol, u_yol):
        os.remove(y)
    print("     ⇒ YAZILAN DOSYALAR SİLİNDİ.")
    return 1


def coz_c(dizin, cikti):
    t = time.perf_counter()
    onek, havuz_b, sonek, _sha = _oku_c(dizin)
    with open(cikti, "w", encoding="utf-8", newline="") as f:
        f.write(onek + _havuz_metinle(havuz_b) + sonek)
    print("✓ %s → %s  (%.2f MB, %.0f sn)"
          % (dizin, cikti, os.path.getsize(cikti) / 1048576,
             time.perf_counter() - t))
    return 0


if __name__ == "__main__":
    a = sys.argv[1:]
    if not a:
        print(__doc__)
        sys.exit(2)
    if a[0] == "sina" and len(a) == 2:
        sys.exit(sina(a[1]))
    if a[0] == "kodla" and len(a) == 3:
        sys.exit(sina(a[1], a[2]))
    if a[0] == "coz" and len(a) == 3:
        sys.exit(coz(a[1], a[2]))
    if a[0] == "secenek" and len(a) == 2:
        sys.exit(secenek(a[1]))
    # 🔴 HEDEF 4. argümandır ve VARSAYILANI YOKTUR — 'yay' 54 MB'lık bir
    #    dosyayı iki esere çevirip aslını çöpe atmaya hazırlanır; yanlış
    #    hedefle koşmak, bir havuzu ötekinin adlarıyla yazmak demektir.
    #    Yazmak zorunda bırakmak, bir karakterlik bedelle o hatayı keser.
    if a[0] == "yay" and len(a) == 4:
        kodla_hedef_sec(a[3])
        sys.exit(yay(a[1], a[2]))
    if a[0] == "coz-c" and len(a) in (3, 4):
        if len(a) == 4:
            kodla_hedef_sec(a[3])
        sys.exit(coz_c(a[1], a[2]))
    if a[0] == "on-dilim" and len(a) in (2, 3):
        sys.exit(on_dilim(a[1], a[2] if len(a) == 3 else "1281-01-01"))
    if a[0] == "kapi" and len(a) == 2:
        _i, _s = kapi(a[1])
        for _x in _s:
            print(_x)
        sys.exit(1 if _i else 0)
    if a[0] == "hedefler":
        for _ad, _h in HEDEFLER.items():
            print("  %-8s %-24s → %s + %s"
                  % (_ad, _h["kaynak"], _h["parca"], _h["ust"]))
        sys.exit(0)
    print(__doc__)
    sys.exit(2)
