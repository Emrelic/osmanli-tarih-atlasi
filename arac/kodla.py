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
  ZAMAN DİLİMLİ PARÇA (P1 ②; `yay` devlet/donem için kendiliğinden koşar):
    py arac/kodla.py dilim-yaz   data <devlet|donem>         parçalar + manifest (+ sınav)
    py arac/kodla.py dilim-sina  data <devlet|donem> [N]     bayt bayt + N tarih kapsama
    py arac/kodla.py dilim-coz   data <cikti.js> <hedef>     coz-c EŞDEĞERİ (yalnız parçalardan)
    py arac/kodla.py dilim-liste data <liste.txt>            commit yol listesi (silinenler dâhil)

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


def _havuz_metin_parcalari(b):
    """`_havuz_metinle(b)` ile BİREBİR aynı metni parça parça verir (birleşimi = o metin).
    Kapı yalnız sha256 ister; 100 MB'lık metni tek dizgide kurmak gerekmez
    (5 Kasım 2026, KASA MemoryError — ufuk_bant)."""
    if YUVA:
        n, k = _oku(b, 0)
        sayilar = []
        for _ in range(n):
            v, k = _oku(b, k)
            sayilar.append(v)
        halkalar = _coz_havuz(b[k:])
        yield "["
        j = 0
        for x, n in enumerate(sayilar):
            yield ("," if x else "") + _metinle(halkalar[j:j + n])
            j += n
        yield "]"
        return
    halkalar = _coz_havuz(b)
    yield "["
    for x, nk in enumerate(halkalar):
        yield ("," if x else "") + "[" + ",".join(
            "[%s,%s]" % (_sayi(p), _sayi(q)) for p, q in nk) + "]"
    yield "]"


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
    # 🟢 5 Kasım 2026 (KASA PAZAR): YERİNDE dönüştürme — eskiden bütün yapının
    # ikinci bir kopyası kuruluyordu ([[tuple(p) …] …]); ufuk_bant havuzunda
    # (82 MB akış) tepe bellek ikiye katlanıp KASA'da MemoryError veriyordu
    # (denetle_yayin "kodlama kapısı ÖLÇEMEDİ:" boş mesaj). Çıktı birebir aynı.
    for h in halkalar:
        h[:] = [tuple(p) for p in h]
    return halkalar


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
        # KATMAN 1 (10 Kasım 2026'dan beri kapıda): 19 Ekim'den (KOŞU 28) beri
        # yeniden üretilmemişti; havuz 7 koşuda değişti ve açılış günü 5.193
        # halkanın yalnız 295'ini (ve onları da YANLIŞ indeksle) taşıyordu ⇒
        # sitede Osmanlı dışı bütün devletler boş göründü. Artık havuz damgası
        # (`__DP_ON_SHA`) yazılır ve `kapi()` kıyaslar.
        "kat1": "devlet_parca_on.js", "kat1_sha": "__DP_ON_SHA",
        "kat1_komut": "on-dilim",
        # ZAMAN DİLİMLİ PARÇA (P1 ②, 16 Kasım 2026): data/dilim/dp_<k>_<w>.js
        "dilim": "dp",
    },
    "donem": {
        "kaynak": "donemler.js", "havuz": "window.PARCALAR = ",
        "onek": "window.__PR_ONEK", "b64": "window.__PR_B64",
        "sha": "window.__PR_SHA", "parca": "donem_parcalar.js",
        "ust": "donemler_ust.js", "on": "donemler_on.js",
        "ne": "Dönem peteklerinin",
        # KATMAN 1 (25 Ekim 2026): `on` bir ÖNEK dosyasıdır (havuzdan önce
        # çalışan küreseller), katman 1 DEĞİL — katman 1 bu adla yazılır.
        "kat1": "donem_parca_on.js", "kat1_sha": "__PR_ON_SHA",
        "kat1_komut": "on-dilim-donem",
        "dilim": "pr",                   # data/dilim/pr_<k>_<w>.js
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
    # 🔴 DÖRDÜNCÜ HEDEF — Ⓑ UFUK BANTLARI (30 Eylül 2026, Emre'nin isteği:
    # "5 gün 7 gün 10 günlük veri elimizde olsun ve bir switch ile görüntüyü
    # değiştirebilmek istiyorum"). Motor bu dosyayı ZATEN üretiyor; eksik
    # olan boyutu: 253 MB ham, GitHub'ın 100 MB/dosya sert sınırının çok
    # üstünde bir tek-dosya değil ama depoya ve Pages'e ağır.
    #
    # ÖLÇÜLDÜ, VARSAYILMADI (koşu 17b çıktısı, ilk 4 MB):
    #   window.UFUK_BANT_PARCALAR = [[[-2.953,58.84],[-2.907,58.838],...
    #   baştan üst üste '[' sayısı = 3  ⇒  [ halka, ... ] · halka = [[lon,lat],...]
    # Yani `devlet` hedefiyle AYNI derinlik. `govde`deki fazladan yuva
    # (poligon = [halka,...]) BURADA YOK ⇒ `yuva` VERİLMEZ.
    # 📌 Bu satır tam da `govde`nin yorumundaki uyarı yüzünden ölçülerek
    #    yazıldı: "Aynı biçim diye varsayıp geçseydim ayrıştırıcı sessizce
    #    yanlış halkalar üretirdi."
    #
    # Ondalık hane dağılımı (381.162 sayı örneği): 3 hane %87,6 · 2 hane
    # %9,2 · 1 hane %3,2 · EN ÇOK 3 ⇒ OLCEK=1000 birebir yeter.
    #
    # ⚠️ Bu dosya AÇILIŞTA YÜKLENMİYOR (`index.html` onu hiç anmıyor):
    #    Ⓑ anahtarı açılınca fetch edilir. Kodlamanın ilk açılış süresine
    #    etkisi SIFIRDIR; kazanç depo boyutu ve Ⓑ'nin açılış hızıdır.
    # ⚠️ `ust` dosyasına giden üç değişken: UFUK_BANT_PARCA (parça → halka
    #    indeksleri) · UFUK_BANT (bant × devlet-dönem) · UFUK_BANT_IZI
    #    (taban_saat / col_ufuk_saat / bant listesi — koşunun damgası).
    #    Havuz YALNIZ UFUK_BANT_PARCALAR'dır.
    "bant": {
        "kaynak": "ufuk_bantlari.js", "havuz": "window.UFUK_BANT_PARCALAR = ",
        "onek": "window.__UB_ONEK", "b64": "window.__UB_B64",
        "sha": "window.__UB_SHA", "parca": "ufuk_bant_parcalar.js",
        "ust": "ufuk_bantlari_ust.js", "on": "ufuk_bantlari_on.js",
        "ne": "Ⓑ ufuk bantlarının", "bol_mib": 45,
    },
}

# 🔴 PARÇA BÖLME — `bol_mib` (14 Ekim 2026, Emre: "bant bölme işini başlat").
# ÖLÇÜLDÜ: KOŞU 23 çıktısı `ufuk_bant_parcalar.js` 91,48 MiB — GitHub'ın 100 MiB
# sert sınırına %8,5 pay; ufuk 1945 → 2000 uzayınca farklı kırılma günü +%7,5,
# dönem başlangıcı +%17 ⇒ bir sonraki koşunun push'u REDDEDİLEBİLİRDİ.
# YÖNTEM: base64 dizgisi en çok `bol_mib` MiB'lık dosyalara bölünür:
#     <parca>.js      SHA · ONEK · B64 (1. dilim) · B64_PARCA=N
#     <parca>_2.js    B64_2 (2. dilim) … <parca>_N.js
# İkili akış 3 BAYTIN KATLARINDA kesilir ⇒ her dilimin base64'ü dolgusuzdur ve
# dilimlerin UÇ UCA EKLENMESİ bütünün base64'üne BİREBİR eşittir (sınandı:
# `yay` DİSKTEN gidiş-dönüş sınavı bölünmüş dosyalardan kurar).
# Sınırın altındaki havuz BÖLÜNMEZ ve `B64_PARCA` satırı YAZILMAZ ⇒ çıktı
# bölme öncesiyle bayt bayt aynı kalır; okuyucular iki biçimi de tanır.
# Tarayıcı: `js/app.js` ufukYukle — ana dosyadan sonra `__UB_B64_PARCA`yı okur,
# ek dosyaları SIRAYLA yükler, dizgileri birleştirip çözer.
HEDEF = "devlet"
ACIKLAMA = HEDEFLER["devlet"]["ne"]
ON_JS = HEDEFLER["devlet"]["on"]
YUVA = 0
BOL_MIB = 0                          # 0 = bölme yok

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
    if not sha:
        print("🔴 %s içinde %s YOK — katman 1 havuza bağlanamaz" % (DP_JS, SHA_ADI))
        return 1
    havuz = _coz_havuz(havuz_b)
    alt = [havuz[i] for i in idx]

    out = bytearray()
    _yaz(out, len(idx))
    onc = 0
    for i in idx:                       # artan indeksler → delta varint
        _yaz(out, i - onc)
        onc = i
    govde = bytes(out) + _kodla_havuz(alt)

    ad = HEDEFLER["devlet"]["kat1"]
    yol = os.path.join(dizin, ad)
    with open(yol, "w", encoding="utf-8", newline="") as f:
        f.write("// Otomatik üretildi — elle düzenlemeyin. Betik: arac/kodla.py on-dilim\n")
        f.write("// KATMAN 1: açılış gününün (%s) halkaları — havuzun seyrek alt kümesi.\n" % gun)
        f.write("// Tam havuz (data/devlet_parcalar.js) ilk boyamadan SONRA arka planda iner.\n")
        f.write("// Biçim: varint N · N delta indeks · sonra normal halka akışı.\n")
        f.write("window.__DP_ON_GUN=\"%s\";\n" % gun)
        f.write("window.__DP_ON_SHA=\"%s\";\n" % sha)
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


def _acilis_halkalari_donem(dizin, gun="1281-01-01"):
    """DÖNEM havuzunda `gun` için GEREKEN halka indeksleri — ölçerek.

    `donemler_ust.js` içinde DONEMLER (f/t + o·v·h[].g parça kodları) ve
    PARCA_HALKA (parça → havuz halka indeksleri) geçerli JSON'dur. `js/app.js`
    `parcaCoz` ile aynı yolu izler: parça kodu → PARCA_HALKA[p] → havuz[h].
    Etkinlik: `f <= gun <= t` (ISO dizgeleri sıralanabilir; kapsayıcı üst
    küme alınır — fazla halka zararsız, eksik halka çizimden düşer).
    """
    import json
    y = os.path.join(dizin, HEDEFLER["donem"]["ust"])
    with open(y, encoding="utf-8") as f:
        s = f.read()

    def _dizi(ad):
        b = s.index("window." + ad + " = ") + len("window." + ad + " = ")
        o, _ = json.JSONDecoder().raw_decode(s, b)
        return o
    donemler = _dizi("DONEMLER")
    parca_halka = _dizi("PARCA_HALKA")
    gerek, etkin = set(), 0
    for d in donemler:
        if not (d.get("f", "9999") <= gun <= d.get("t", "0000")):
            continue
        etkin += 1
        kodlar = list(d.get("o") or []) + list(d.get("v") or [])
        for hb in (d.get("h") or []):
            kodlar += list(hb.get("g") or [])
        for p in kodlar:
            if not isinstance(p, int):
                # Eski biçim (doğrudan koordinat) — katman 1 ona dokunmaz,
                # ama SESSİZ GEÇİLMEZ: o parça havuzdan gelmiyor demektir.
                raise ValueError("donemler_ust.js'te sayı olmayan parça kodu: %r" % (p,))
            if p >= len(parca_halka) or parca_halka[p] is None:
                raise ValueError("PARCA_HALKA deliği: %d" % p)
            gerek.update(parca_halka[p])
    return sorted(gerek), len(donemler), etkin


def on_dilim_donem(dizin, gun="1281-01-01"):
    """KATMAN 1 — DÖNEM havuzunun açılış günü alt kümesi (`donem_parca_on.js`).

    NİÇİN (25 Ekim 2026, ölçüldü): `donem_parcalar.js` 13,4 MB ham ve açılışta
    ENGELLEYİCİ idi; çözme 372 ms, yani maliyet indirmedir. 1281-01-01 havuzun
    %0,0'ını (1 halka) ister. Devlet katmanıyla (`on_dilim`) AYNI seyrek biçim:
    halkalar ÖZGÜN indeksleriyle yazılır, havuz yeniden sıralanMAZ,
    PARCA_HALKA'ya dokunulmaz. `js/geo_coz.js` `seyrekCoz`u aynen kullanır.
    🔴 BAYATLIK: alt küme havuzun indekslerine bağlıdır. Dosyaya havuzun
    `__PR_SHA`sı (`__PR_ON_SHA`) yazılır; `kapi()` ikisini kıyaslar —
    havuz değişip bu komut koşmazsa YAYIN DURUR.
    """
    import base64
    import time as _t
    hedef_sec("donem")
    t = _t.perf_counter()
    idx, donem, etkin = _acilis_halkalari_donem(dizin, gun)
    onek, havuz_b, sonek, sha = _oku_c(dizin)
    if not sha:
        print("🔴 %s içinde %s YOK — katman 1 havuza bağlanamaz" % (DP_JS, SHA_ADI))
        return 1
    havuz = _coz_havuz(havuz_b)
    alt = [havuz[i] for i in idx]

    out = bytearray()
    _yaz(out, len(idx))
    onc = 0
    for i in idx:                       # artan indeksler → delta varint
        _yaz(out, i - onc)
        onc = i
    govde = bytes(out) + _kodla_havuz(alt)

    ad = HEDEFLER["donem"]["kat1"]
    yol = os.path.join(dizin, ad)
    with open(yol, "w", encoding="utf-8", newline="") as f:
        f.write("// Otomatik üretildi — elle düzenlemeyin. Betik: arac/kodla.py on-dilim-donem\n")
        f.write("// KATMAN 1: açılış gününün (%s) dönem halkaları — havuzun seyrek alt kümesi.\n" % gun)
        f.write("// Tam havuz (data/donem_parcalar.js) ilk boyamadan SONRA arka planda iner.\n")
        f.write("// Biçim: varint N · N delta indeks · sonra normal halka akışı.\n")
        f.write("window.__PR_ON_GUN=\"%s\";\n" % gun)
        f.write("window.__PR_ON_SHA=\"%s\";\n" % sha)
        f.write("window.__PR_ON_B64=\"%s\";\n" % base64.b64encode(govde).decode())

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
    kb = os.path.getsize(yol) / 1024.0
    print("açılış günü %s · dönem %d, etkin %d · halka %d/%d (%.2f%%) · nokta %d"
          % (gun, donem, etkin, len(idx), len(havuz),
             100.0 * len(idx) / max(1, len(havuz)), sum(len(h) for h in alt)))
    print("  %s %.1f KB   (tam havuz %.2f MB)"
          % (ad, kb, os.path.getsize(os.path.join(dizin, DP_JS)) / 1048576))
    print("  gidiş-dönüş: %s  (%.0f sn)"
          % ("✓ BİREBİR" if ayni else "🔴 FARKLI", _t.perf_counter() - t))
    if not ayni:
        os.remove(yol)
        print("  ⇒ dosya SİLİNDİ.")
        return 1
    return 0


# ══ ZAMAN DİLİMLİ PARÇA — P1 ② (16 Kasım 2026; prototip HAVVA `kodla_dilim.py`) ══
# NİÇİN: tam havuz telde devlet ~41 MB + dönem ~8 MB ve kullanıcı herhangi bir
# tarihte havuzun yalnız %0,6–2'sini görür. Havuz, halkaların KULLANIM ARALIĞINA
# göre zaman pencerelerine bölünür; tarayıcı (`js/geo_coz.js` parcaGerek) yalnız
# o tarihin parçalarını indirir.
# BÖLME: halka r'nin kullanım aralığı [yf, yt] (onu kullanan bütün dönemlerin
#   yıl birleşimi; yıl = gun.py ile ASTRONOMİK yıl, app.js idxTarih().y ile
#   aynı). Ömür = yt − yf. Katman k: ömür ≤ KAT[k] (KAT = L0·4^k, son katman
#   sınırsız); pencere w = yf // KAT[k]. Tarih yılı Y için her katmanda
#   w ∈ {Y//W − 1, Y//W} YETER: yf ≤ Y ≤ yf + W ⇒ Y//W ∈ {w, w+1}.
#   Hiçbir dönemin kullanmadığı halka `<onek>_bos` parçasına gider (istenmez,
#   yalnız geri üretim için — havuzdaki HER halka tam bir parçadadır).
# BİÇİM = katman 1 biçimi (varint N · N delta indeks · halka akışı + eksi
#   sıfır kuyruğu) — `js/geo_coz.js` `seyrekCoz` ailesi çözer. Halka İNDEKSLERİ
#   GLOBAL kalır: DEVLET_PARCA_HALKA / PARCA_HALKA değişmez.
# 🔴 Halka baytları tam akıştan DİLİMLENİR (yeniden kodlanmaz) ⇒ parçadaki her
#   halka tam havuzdakiyle BAYT BAYT aynıdır; `dilim-sina` bunu ölçer.
# Motor tuzuna (uret_petek/renkler/girdi/motor_onbellek) DOKUNMAZ: girdi
# `yay`ın yazdığı havuz (`<parca>.js` + `<ust>.js`) dosyalarıdır.
DILIM_DIZIN = "dilim"                     # data/dilim/
DILIM_L0 = 8
DILIM_MANIFEST = "parca_manifest.js"      # data/parca_manifest.js (index.html yükler)
_YUKSEK = bytes(range(128, 256))


def _dilim_katlar(l0=DILIM_L0):
    return [l0 * (4 ** k) for k in range(6)] + [10 ** 9]


def _dilim_yil(s):
    """Tarih dizgisi → astronomik yıl; geçersizse gun.py THROW eder (sessiz değil)."""
    import gun as _g
    return _g.yil(_g.gun(s))


def _ust_degerleri(dizin, hedef, adlar):
    import json
    with open(os.path.join(dizin, HEDEFLER[hedef]["ust"]), encoding="utf-8") as f:
        s = f.read()
    out = []
    for ad in adlar:
        b = s.index("window." + ad + " = ") + len("window." + ad + " = ")
        out.append(json.JSONDecoder().raw_decode(s, b)[0])
    return out


def _dilim_donem_halkalari(dizin, hedef):
    """[(yf, yt, [halka indeksleri]), …] — tarayıcının çizdiği HER dönem kaydı.

    devlet: DEVLET_HARITA[].dnm[].g → DEVLET_PARCA_HALKA (app.js:761)
    dönem : DONEMLER[].o · v · h[].g → PARCA_HALKA (app.js:636-657)"""
    sonuc = []

    def halkalar(kodlar, ph):
        hs = []
        for p in kodlar or []:
            if not isinstance(p, int):
                raise ValueError("sayı olmayan parça kodu: %r" % (p,))
            if p >= len(ph) or ph[p] is None:
                raise ValueError("PARCA_HALKA deliği: %d" % p)
            hs.extend(ph[p])
        return hs

    if hedef == "devlet":
        harita, ph = _ust_degerleri(dizin, hedef, ["DEVLET_HARITA", "DEVLET_PARCA_HALKA"])
        for dev in harita:
            for p in dev.get("dnm", []):
                sonuc.append((_dilim_yil(p["f"]), _dilim_yil(p["t"]), halkalar(p.get("g"), ph)))
    else:
        donemler, ph = _ust_degerleri(dizin, hedef, ["DONEMLER", "PARCA_HALKA"])
        for d in donemler:
            kodlar = list(d.get("o") or []) + list(d.get("v") or [])
            for hb in (d.get("h") or []):
                kodlar += list(hb.get("g") or [])
            sonuc.append((_dilim_yil(d["f"]), _dilim_yil(d["t"]), halkalar(kodlar, ph)))
    return sonuc


def _halka_sinirlari(b):
    """Tam akışı ÇÖZMEDEN halka bayt sınırlarına ayır (bellek: yalnız indeksler).

    → (n, bas, son, kum, eksi): halka r'nin baytları b[bas[r]:son[r]] (nokta
    sayısı varint'i dâhil); kum[r] = r'den önceki eksen sayısı (2·nokta);
    eksi = negatif sıfır kuyruğunun GLOBAL sıra numaraları.
    Atlama: 2m varint'in sonu = 2m. sonlandırıcı bayt (< 0x80); sayım C hızında
    `translate` ile yapılır. Sınır kesimi bir varint'in ortasına düşerse son
    sonlandırıcıdan sonraki devam baytları geri bırakılır."""
    n, i = _oku(b, 0)
    bas, son, kum = [0] * n, [0] * n, [0] * (n + 1)
    for h in range(n):
        bas[h] = i
        m, i = _oku(b, i)
        kalan = 2 * m
        while kalan:
            dilim = b[i:i + kalan]
            if len(dilim) < kalan:
                raise ValueError("akış halka %d ortasında bitti" % h)
            kalan -= len(dilim.translate(None, _YUKSEK))   # kalan = sonlandırıcı sayısı
            i += len(dilim)
        while i > bas[h] and b[i - 1] >= 128:
            i -= 1
        son[h] = i
        kum[h + 1] = kum[h] + 2 * m
    k, i = _oku(b, i)
    eksi, s = [], 0
    for _ in range(k):
        d, i = _oku(b, i)
        s += d
        eksi.append(s)
    if i != len(b):
        raise ValueError("akış sonunda %d bayt arttı — biçim uyuşmuyor" % (len(b) - i))
    return n, bas, son, kum, eksi


def _dilim_plan(donem_halka, n, l0=DILIM_L0):
    """→ {parça adı: artan halka indeksleri} ve {ad: (k, w)}."""
    kul = {}
    for yf, yt, hs in donem_halka:
        for r in hs:
            k = kul.get(r)
            if k is None:
                kul[r] = [yf, yt]
            else:
                if yf < k[0]:
                    k[0] = yf
                if yt > k[1]:
                    k[1] = yt
    kat = _dilim_katlar(l0)
    pr, kw = {}, {}
    for r in range(n):
        u = kul.get(r)
        if u is None:
            key = (-1, 0)
        else:
            om = u[1] - u[0]
            k = next(i for i, L in enumerate(kat) if om <= L)
            key = (k, u[0] // kat[k])
        pr.setdefault(key, []).append(r)
    adlar = {}
    for key, idx in pr.items():
        adlar[key] = idx
    return adlar, kul


def _dilim_ad(onek, key):
    return "%s_bos" % onek if key[0] < 0 else "%s_%d_%d" % (onek, key[0], key[1])


def _dilim_parca(b, idx, bas, son, kum, eksi_halka):
    out = bytearray()
    _yaz(out, len(idx))
    onc = 0
    for r in idx:
        _yaz(out, r - onc)
        onc = r
    _yaz(out, len(idx))
    kuyruk, yerel = [], 0
    for r in idx:
        out += b[bas[r]:son[r]]
        for e in eksi_halka.get(r, ()):
            kuyruk.append(yerel + (e - kum[r]))
        yerel += kum[r + 1] - kum[r]
    _yaz(out, len(kuyruk))
    onc = 0
    for s in kuyruk:
        _yaz(out, s - onc)
        onc = s
    return bytes(out)


def _eksi_halka(eksi, kum):
    import bisect
    d = {}
    for e in eksi:
        r = bisect.bisect_right(kum, e) - 1
        d.setdefault(r, []).append(e)
    return d


def _dilim_parca_ac(pb):
    """Parça baytları → (indeksler, {r: halka baytları}, {r: [yerel→global için ring-içi eksi]}).
    `_halka_sinirlari` ile aynı atlama; artakalan bayt HATADIR."""
    N, i = _oku(pb, 0)
    idx, onc = [], 0
    for _ in range(N):
        d, i = _oku(pb, i)
        onc += d
        idx.append(onc)
    alt = pb[i:]
    n2, bas, son, kum, eksi = _halka_sinirlari(alt)
    if n2 != N:
        raise ValueError("parçada %d indeks ama %d halka" % (N, n2))
    halka = {r: alt[bas[j]:son[j]] for j, r in enumerate(idx)}
    ring_eksi = {}
    for j, ls in _eksi_halka(eksi, kum).items():
        ring_eksi[idx[j]] = [e - kum[j] for e in ls]
    return idx, halka, ring_eksi


def _manifest_oku(dizin):
    import json
    y = os.path.join(dizin, DILIM_MANIFEST)
    if not os.path.isfile(y):
        return {}
    with open(y, encoding="utf-8") as f:
        s = f.read()
    b = s.index("window.PARCA_MANIFEST=") + len("window.PARCA_MANIFEST=")
    return json.JSONDecoder().raw_decode(s, b)[0]


def _manifest_yaz(dizin, man):
    import json
    with open(os.path.join(dizin, DILIM_MANIFEST), "w", encoding="utf-8", newline="") as f:
        f.write("// Otomatik üretildi — elle düzenlemeyin. Betik: arac/kodla.py dilim-yaz\n")
        f.write("// ZAMAN DİLİMLİ PARÇA DİZİNİ (P1 ②): js/geo_coz.js parcaGerek(yıl) bunu okur.\n")
        f.write("// p: ad → [katman k, pencere w, halka sayısı, sha256(ilk 12, ?v= damgası), bayt]\n")
        f.write("window.PARCA_MANIFEST=%s;\n"
                % json.dumps(man, ensure_ascii=False, sort_keys=True, separators=(",", ":")))


def _dilim_dosya_oku(yol):
    """Parça dosyası → (gömülü sha, ikili). Biçim `dilim_yaz`ın yazdığıdır."""
    import base64
    with open(yol, encoding="utf-8") as f:
        t = f.read()
    m = re.search(r'\]=\{sha:"([0-9a-f]{64})",b64:"([A-Za-z0-9+/=]*)"\};', t)
    if not m:
        raise ValueError("%s biçimi tanınmadı" % os.path.basename(yol))
    return m.group(1), base64.b64decode(m.group(2))


def dilim_yaz(dizin, hedef, l0=DILIM_L0):
    """Havuzu zaman dilimli parçalara böl, data/dilim/ altına yaz, manifestoyu
    güncelle; YAZILAN DOSYALARDAN gidiş-dönüş sınavı geçmezse 1 döner."""
    import base64
    import hashlib
    import json
    t0 = time.perf_counter()
    hedef_sec(hedef)
    onek_ad = HEDEFLER[hedef]["dilim"]
    onek, havuz_b, _sonek, ozgun_sha = _oku_c(dizin)
    if not ozgun_sha:
        print("🔴 %s içinde %s YOK — dilim havuza bağlanamaz" % (DP_JS, SHA_ADI))
        return 1
    n, bas, son, kum, eksi = _halka_sinirlari(havuz_b)
    eh = _eksi_halka(eksi, kum)
    plan, kul = _dilim_plan(_dilim_donem_halkalari(dizin, hedef), n, l0)
    ddir = os.path.join(dizin, DILIM_DIZIN)
    os.makedirs(ddir, exist_ok=True)
    kayit, yazilan = {}, set()
    for key in sorted(plan):
        idx = plan[key]
        pb = _dilim_parca(havuz_b, idx, bas, son, kum, eh)
        sha = hashlib.sha256(pb).hexdigest()
        ad = _dilim_ad(onek_ad, key)
        yol = os.path.join(ddir, ad + ".js")
        with open(yol, "w", encoding="utf-8", newline="") as f:
            f.write("// Otomatik üretildi — elle düzenlemeyin. Betik: arac/kodla.py dilim-yaz\n")
            f.write("window.__DILIM=window.__DILIM||{};\n")
            f.write('window.__DILIM["%s"]={sha:"%s",b64:"%s"};\n'
                    % (ad, sha, base64.b64encode(pb).decode()))
        yazilan.add(ad + ".js")
        kayit[ad] = [key[0], key[1], len(idx), sha[:12], os.path.getsize(yol)]
    # Önek + damgalar: `dilim-coz` (coz-c eşdeğeri) tam metni PARÇALARDAN kurar.
    with open(os.path.join(ddir, onek_ad + "_onek.json"), "w", encoding="utf-8", newline="") as f:
        json.dump({"hedef": hedef, "ozgun_sha": ozgun_sha,
                   "havuz_sha": hashlib.sha256(havuz_b).hexdigest(), "halka": n,
                   "onek_b64": base64.b64encode(onek.encode("utf-8")).decode()},
                  f, ensure_ascii=False, sort_keys=True, indent=0)
    yazilan.add(onek_ad + "_onek.json")
    # Eski koşudan kalan bu hedefin parçaları SİLİNİR (manifestte olmayan dosya kalmasın).
    silinen = 0
    for f in os.listdir(ddir):
        if f.startswith(onek_ad + "_") and f not in yazilan:
            os.remove(os.path.join(ddir, f))
            silinen += 1
    man = _manifest_oku(dizin)
    man["surum"] = 1
    man["kok"] = "data/%s/" % DILIM_DIZIN
    man[hedef] = {"onek": onek_ad, "l0": l0, "kat": _dilim_katlar(l0),
                  "ozgun_sha": ozgun_sha, "halka": n, "p": kayit}
    _manifest_yaz(dizin, man)
    kul_say = len(kul)
    print("dilim %s: halka %d (kullanılan %d) · parça %d · eski parça silindi %d · %.0f sn"
          % (hedef, n, kul_say, len(kayit), silinen, time.perf_counter() - t0))
    hata = dilim_sina(dizin, hedef, havuz_b=havuz_b, sessiz=True)
    if hata:
        print("  🔴 DİLİM SINAVI GEÇMEDİ (%d hata) — %s parçaları ve manifest kaydı SİLİNİYOR."
              % (hata, hedef))
        for f in yazilan:
            p = os.path.join(ddir, f)
            if os.path.exists(p):
                os.remove(p)
        man = _manifest_oku(dizin)
        man.pop(hedef, None)
        _manifest_yaz(dizin, man)
        return 1
    return 0


def _dilim_gerekli(m, yil):
    """js/geo_coz.js `gerekenler` ile AYNI kural: her katmanda Y//W−1 ve Y//W."""
    out = []
    for k, W in enumerate(m["kat"]):
        for w in (yil // W - 1, yil // W):
            ad = "%s_%d_%d" % (m["onek"], k, w)
            if ad in m["p"]:
                out.append(ad)
    return out


def dilim_sina(dizin, hedef, havuz_b=None, tarih_sayisi=40, tohum=1116, sessiz=False):
    """GİDİŞ-DÖNÜŞ + KAPSAMA sınavı — DİSKTEKİ parçalardan. Hata sayısı döner.

    ① manifest ↔ dosya: her parçanın gömülü sha256'sı = sha256(ikili), manifestteki
       kısa sha ve bayt boyu tutuyor; manifestte olmayan parça dosyası yok
    ② her halka TAM BİR parçada ve baytları tam havuzdakiyle BİREBİR (eksi sıfır dâhil)
    ③ parçalardan kurulan tam akış = havuz akışı (sha256) → `dilim-coz` bunu kullanır
    ④ ≥30 rastgele tarih (+ uçlar): o tarihte ETKİN dönemlerin her halkası, tarayıcı
       kuralının (`_dilim_gerekli`) seçtiği parçalarda VAR."""
    import hashlib
    import random
    hedef_sec(hedef)
    m = _manifest_oku(dizin).get(hedef)
    if not m:
        print("🔴 dilim sına %s: manifestte kayıt YOK" % hedef)
        return 1
    if havuz_b is None:
        _o, havuz_b, _s, _sha = _oku_c(dizin)
    n, bas, son, kum, eksi = _halka_sinirlari(havuz_b)
    eh = _eksi_halka(eksi, kum)
    ddir = os.path.join(dizin, DILIM_DIZIN)
    hata = 0

    def hat(s):
        nonlocal hata
        hata += 1
        if hata <= 20:
            print("  🔴 " + s)

    sahip = [None] * n
    halka_bayt, halka_eksi = {}, {}
    for ad, (k, w, adet, kisa, bayt) in sorted(m["p"].items()):
        yol = os.path.join(ddir, ad + ".js")
        if not os.path.isfile(yol):
            hat("parça dosyası YOK: %s" % ad)
            continue
        if os.path.getsize(yol) != bayt:
            hat("bayt boyu tutmuyor: %s" % ad)
        sha, pb = _dilim_dosya_oku(yol)
        if hashlib.sha256(pb).hexdigest() != sha or sha[:12] != kisa:
            hat("sha tutmuyor: %s" % ad)
            continue
        idx, hb, he = _dilim_parca_ac(pb)
        if len(idx) != adet:
            hat("halka sayısı tutmuyor: %s" % ad)
        for r in idx:
            if r >= n:
                hat("havuz dışı indeks %d: %s" % (r, ad))
                continue
            if sahip[r] is not None:
                hat("halka %d iki parçada: %s · %s" % (r, sahip[r], ad))
            sahip[r] = ad
            if hb[r] != havuz_b[bas[r]:son[r]]:
                hat("halka %d baytları FARKLI: %s" % (r, ad))
            if he.get(r, []) != [e - kum[r] for e in eh.get(r, [])]:
                hat("halka %d eksi sıfır FARKLI: %s" % (r, ad))
            halka_bayt[r] = hb[r]
            halka_eksi[r] = he.get(r, [])
    fazla = [f for f in os.listdir(ddir) if f.startswith(m["onek"] + "_") and f.endswith(".js")
             and f[:-3] not in m["p"]]
    for f in fazla:
        hat("manifestte olmayan parça dosyası: %s" % f)
    eksik = sum(1 for x in sahip if x is None)
    if eksik:
        hat("parçalarda olmayan halka: %d" % eksik)
    # ③ tam akışı parçalardan kur
    if not eksik:
        out = bytearray()
        _yaz(out, n)
        kuyruk = []
        for r in range(n):
            out += halka_bayt[r]
            kuyruk.extend(kum[r] + e for e in halka_eksi[r])
        _yaz(out, len(kuyruk))
        onc = 0
        for s in kuyruk:
            _yaz(out, s - onc)
            onc = s
        if hashlib.sha256(bytes(out)).digest() != hashlib.sha256(havuz_b).digest():
            hat("parçalardan kurulan akış tam havuzla AYNI DEĞİL")
    # ④ kapsama
    dh = _dilim_donem_halkalari(dizin, hedef)
    yillar = sorted({y for yf, yt, _ in dh for y in (yf, yt)})
    rnd = random.Random(tohum)
    ornek = {yillar[0], yillar[-1], 1281, 1453, 1683, 1914, 1990}
    while len(ornek) < tarih_sayisi:
        ornek.add(rnd.randint(yillar[0], yillar[-1]))
    for Y in sorted(ornek):
        gerek = set(_dilim_gerekli(m, Y))
        for yf, yt, hs in dh:
            if not (yf <= Y <= yt):
                continue
            for r in hs:
                if r < n and sahip[r] not in gerek:
                    hat("yıl %d: halka %d (%s) seçilen parçalarda YOK" % (Y, r, sahip[r]))
                    break
    if not sessiz or hata:
        print("dilim sına %s: %d parça · %d/%d halka · %d tarih · hata %d"
              % (hedef, len(m["p"]), n - eksik, n, len(ornek), hata))
    else:
        print("  ✓ dilim sına %s: %d parça · %d/%d halka BİREBİR · %d tarih kapsandı"
              % (hedef, len(m["p"]), n, n, len(ornek)))
    return hata


def dilim_coz(dizin, cikti, hedef):
    """`coz-c` EŞDEĞERİ — özgün metni YALNIZ parçalardan + önek + üst dosyadan kur;
    sha256 özgün damgayla tutmazsa çıktı SİLİNİR."""
    import base64
    import hashlib
    import json
    t0 = time.perf_counter()
    hedef_sec(hedef)
    m = _manifest_oku(dizin).get(hedef)
    ddir = os.path.join(dizin, DILIM_DIZIN)
    with open(os.path.join(ddir, m["onek"] + "_onek.json"), encoding="utf-8") as f:
        ok = json.load(f)
    n = ok["halka"]
    halka_bayt, halka_eksi = [None] * n, [None] * n
    for ad in m["p"]:
        _sha, pb = _dilim_dosya_oku(os.path.join(ddir, ad + ".js"))
        idx, hb, he = _dilim_parca_ac(pb)
        for r in idx:
            halka_bayt[r] = hb[r]
            halka_eksi[r] = he.get(r, [])
    if any(x is None for x in halka_bayt):
        print("🔴 parçalarda eksik halka var — geri üretim YAPILMADI")
        return 1
    out = bytearray()
    _yaz(out, n)
    kuyruk, kum = [], 0
    for r in range(n):
        out += halka_bayt[r]
        kuyruk.extend(kum + e for e in halka_eksi[r])
        mm, _i = _oku(halka_bayt[r], 0)
        kum += 2 * mm
    _yaz(out, len(kuyruk))
    onc = 0
    for s in kuyruk:
        _yaz(out, s - onc)
        onc = s
    havuz_b = bytes(out)
    if hashlib.sha256(havuz_b).hexdigest() != ok["havuz_sha"]:
        print("🔴 parçalardan kurulan akış havuz damgasını TUTMUYOR")
        return 1
    onek = base64.b64decode(ok["onek_b64"]).decode("utf-8")
    with open(os.path.join(dizin, UST_JS), encoding="utf-8", newline="") as f:
        sonek = f.read()
    hs = hashlib.sha256()
    with open(cikti, "w", encoding="utf-8", newline="") as f:
        for p in [onek] + list(_havuz_metin_parcalari(havuz_b)) + [sonek]:
            f.write(p)
            hs.update(p.encode("utf-8"))
    if hs.hexdigest() != ok["ozgun_sha"]:
        os.remove(cikti)
        print("🔴 kurulan metin özgün damgayı TUTMUYOR — çıktı SİLİNDİ")
        return 1
    print("✓ parçalardan %s → %s  (sha %s ✓, %.2f MB, %.0f sn)"
          % (hedef, cikti, ok["ozgun_sha"][:12], os.path.getsize(cikti) / 1048576,
             time.perf_counter() - t0))
    return 0


def dilim_liste(dizin, cikti):
    """Commit için yol listesi (git --pathspec-from-file): manifest + bütün parça/önek
    dosyaları + git'te izlenip diskten SİLİNMİŞ eski parçalar (silinmeleri commitlensin)."""
    import subprocess
    kok = subprocess.run(["git", "-C", dizin, "rev-parse", "--show-toplevel"],
                         capture_output=True, text=True).stdout.strip() or os.getcwd()
    ddir = os.path.join(dizin, DILIM_DIZIN)
    yollar = ["data/" + DILIM_MANIFEST]
    yollar += sorted("data/%s/%s" % (DILIM_DIZIN, f) for f in os.listdir(ddir))
    r = subprocess.run(["git", "-C", kok, "ls-files", "--deleted", "--",
                        "data/" + DILIM_DIZIN], capture_output=True, text=True)
    silinen = [x.strip() for x in (r.stdout or "").splitlines() if x.strip()]
    with open(cikti, "w", encoding="utf-8", newline="\n") as f:
        f.write("\n".join(yollar + silinen) + "\n")
    print("dilim liste: %d dosya + %d silinen → %s" % (len(yollar), len(silinen), cikti))
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
    global YUVA, BOL_MIB
    YUVA = h.get("yuva", 0)          # 0 = halka dizisi · 1 = poligon dizisi
    BOL_MIB = h.get("bol_mib", 0)


def _ek_ad(k):
    """k. (k ≥ 2) ek parça dosyasının adı: ufuk_bant_parcalar.js → …_2.js"""
    return DP_JS[:-3] + "_%d.js" % k


def _ek_dosyalar(dizin):
    """Diskte duran ek parça dosyaları, sıra numarasına göre: [(k, yol), …]."""
    import glob
    ekler = []
    for y in glob.glob(os.path.join(dizin, DP_JS[:-3] + "_*.js")):
        m = re.match(re.escape(DP_JS[:-3]) + r"_(\d+)\.js$", os.path.basename(y))
        if m:
            ekler.append((int(m.group(1)), y))
    return [y for _k, y in sorted(ekler)]


def _ek_temizle(dizin, n=1):
    """n'den büyük sıradaki ek parça dosyalarını sil (önceki yazımdan kalmasın)."""
    silinen = []
    for y in _ek_dosyalar(dizin):
        k = int(re.search(r"_(\d+)\.js$", y).group(1))
        if k > n:
            os.remove(y)
            silinen.append(os.path.basename(y))
    return silinen


def _dilimle(havuz_b):
    """İkili akışı base64 dilimlerine ayır; her dilim ≤ BOL_MIB MiB.

    Kesim 3 BAYTIN KATINDA ⇒ son dilim dışında dolgu ('=') yok ⇒ dilimler
    uç uca eklenince bütünün base64'ü BİREBİR çıkar."""
    import base64
    if not BOL_MIB:
        return [base64.b64encode(havuz_b).decode()]
    adim = (BOL_MIB * 1048576 // 4) * 3      # base64'te ≤ BOL_MIB MiB
    return [base64.b64encode(havuz_b[i:i + adim]).decode()
            for i in range(0, max(1, len(havuz_b)), adim)]


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
        dilimler = _dilimle(havuz_b)
        f.write("%s=\"%s\";\n" % (B64_ADI, dilimler[0]))
        if len(dilimler) > 1:
            f.write("%s_PARCA=%d;\n" % (B64_ADI, len(dilimler)))
    for k in range(2, len(dilimler) + 1):
        with open(os.path.join(dizin, _ek_ad(k)), "w", encoding="utf-8",
                  newline="") as f:
            f.write("// Otomatik üretildi — elle düzenlemeyin. Betik: arac/kodla.py\n")
            f.write("// %s koordinat havuzunun %d/%d. dilimi (base64, %s'in devamı).\n"
                    % (ACIKLAMA, k, len(dilimler), DP_JS))
            f.write("%s_%d=\"%s\";\n" % (B64_ADI, k, dilimler[k - 1]))
    _ek_temizle(dizin, len(dilimler))
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
    onek = b64 = None
    sha = ""
    n_dilim = 1
    for s in satirlar:
        if s.startswith(ONEK_ADI + "="):
            onek = base64.b64decode(s[len(ONEK_ADI) + 2:-2]).decode("utf-8")
        elif s.startswith(B64_ADI + "="):
            b64 = s[len(B64_ADI) + 2:-2]
        elif s.startswith(B64_ADI + "_PARCA="):
            n_dilim = int(s[len(B64_ADI) + 7:].rstrip(";"))
        elif s.startswith(SHA_ADI + "="):
            sha = s[len(SHA_ADI) + 2:-2]
    if onek is None or b64 is None:
        raise ValueError("%s içinde %s / %s bulunamadı" % (DP_JS, ONEK_ADI, B64_ADI))
    # 🔴 Ek dilimler: biri eksikse ya da adı tutmuyorsa HATA — eksik havuzla
    #    kurulan metin damgayı tutmaz, ama hatanın SEBEBİ burada söylenmeli.
    dilimler = [b64]
    for k in range(2, n_dilim + 1):
        ad = "%s_%d=" % (B64_ADI, k)
        with open(os.path.join(dizin, _ek_ad(k)), encoding="utf-8") as f:
            sat = [x for x in f.read().split("\n") if x.startswith(ad)]
        if len(sat) != 1:
            raise ValueError("%s içinde %s bulunamadı" % (_ek_ad(k), ad[:-1]))
        dilimler.append(sat[0][len(ad) + 1:-2])
    havuz = base64.b64decode("".join(dilimler))
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
        # 🟢 5 Kasım 2026: özet PARÇA PARÇA (bellek). Küresel taraması önek +
        # sonek + her havuz parçası üzerinde — birleşik metindekiyle aynı küme.
        _hs = hashlib.sha256()
        _hs.update(onek.encode("utf-8"))
        _havuz_kuresel = set()
        for _parca in _havuz_metin_parcalari(havuz_b):
            _hs.update(_parca.encode("utf-8"))
            if "window." in _parca:
                _havuz_kuresel |= set(KURESEL.findall(_parca))
        _hs.update(sonek.encode("utf-8"))
        yeni = _hs.hexdigest()
        metin = onek + "\n" + sonek
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
            bekl = set(KURESEL.findall(metin)) | _havuz_kuresel
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
            # ── KATMAN 1 BAYATLIĞI — alt küme havuz indekslerine bağlıdır.
            # Havuz değişip `on-dilim-donem` koşmazsa açılış günü YANLIŞ
            # halkalarla boyanırdı (sha sınavı bunu görmez).
            k1 = HEDEFLER[HEDEF].get("kat1")
            if k1 and os.path.isfile(os.path.join(dizin, k1)):
                k1_sha = HEDEFLER[HEDEF].get("kat1_sha", "__PR_ON_SHA")
                with open(os.path.join(dizin, k1), encoding="utf-8") as f:
                    m = re.search(r'window\.' + k1_sha + r'="([0-9a-f]{64})"', f.read())
                if not m or m.group(1) != sha:
                    s.append("✗  KODLAMA KAPISI — %s BAYAT: havuz damgası %s, "
                             "katman 1 damgası %s"
                             % (k1, sha[:12], m.group(1)[:12] if m else "YOK"))
                    s.append("     ⇒ py arac/kodla.py %s data  ile yeniden üret."
                             % HEDEFLER[HEDEF].get("kat1_komut", "on-dilim-donem"))
                    return True, s
                s.append("✓  katman 1: %s havuzla AYNI damga (%s)" % (k1, sha[:12]))
            # ── ZAMAN DİLİMLİ PARÇA BAYATLIĞI (P1 ②) — manifest varsa bu hedefin
            # kaydı havuzun damgasını taşımalı ve her parça dosyası diskte, kayıtlı
            # boyda olmalı. (Tam bayt sınavı: `kodla.py dilim-sina data <hedef>`.)
            if HEDEFLER[HEDEF].get("dilim") and os.path.isfile(
                    os.path.join(dizin, DILIM_MANIFEST)):
                dm = _manifest_oku(dizin).get(HEDEF)
                if not dm or dm.get("ozgun_sha") != sha:
                    s.append("✗  KODLAMA KAPISI — %s [%s] BAYAT: havuz damgası %s, "
                             "manifest damgası %s" % (DILIM_MANIFEST, HEDEF, sha[:12],
                                                      (dm or {}).get("ozgun_sha", "YOK")[:12]))
                    s.append("     ⇒ py arac/kodla.py dilim-yaz data %s  ile yeniden üret." % HEDEF)
                    return True, s
                ddir = os.path.join(dizin, DILIM_DIZIN)
                kayip = [a for a, v in dm["p"].items()
                         if not os.path.isfile(os.path.join(ddir, a + ".js"))
                         or os.path.getsize(os.path.join(ddir, a + ".js")) != v[4]]
                if kayip:
                    s.append("✗  KODLAMA KAPISI — dilim parçası eksik/boyu farklı [%s]: %s"
                             % (HEDEF, ", ".join(sorted(kayip)[:5])))
                    return True, s
                s.append("✓  dilim: %d parça havuzla AYNI damga (%s)" % (len(dm["p"]), sha[:12]))
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
    ekler = _ek_dosyalar(dizin)
    pm = os.path.getsize(p_yol) / 1048576
    um = os.path.getsize(u_yol) / 1048576
    em = sum(os.path.getsize(y) for y in ekler) / 1048576
    print("  yazıldı: %s %.2f MB · %s %.2f MB  (toplam %.2f MB)"
          % (DP_JS, pm, UST_JS, um, pm + um + em))
    for y in ekler:
        print("           %s %.2f MB  (ek dilim)"
              % (os.path.basename(y), os.path.getsize(y) / 1048576))
    pm += em

    print("  → DİSKTEN gidiş-dönüş sınavı")
    o2, h2, s2, sha2 = _oku_c(dizin)
    yeniden = o2 + _havuz_metinle(h2) + s2
    if yeniden == metin:
        print("\n  ✅ SINAV GEÇTİ — yazılan dosyalardan kurulan metin ÖZGÜNLE BİREBİR.")
        print("  %.1f MB → %.2f MB   ×%.3f"
              % (os.path.getsize(girdi) / 1048576, pm + um,
                 (pm + um) / (os.path.getsize(girdi) / 1048576)))
        # KATMAN 1 havuz indekslerine bağlıdır ⇒ havuz yeni yazıldıysa katman 1
        # de BURADA yenilenir. (KOŞU 29–35: devlet katmanı unutuldu, site
        # Osmanlı dışında boş açıldı; KOŞU 31: dönemde kapı bayat katman 1
        # yüzünden `yay`ın kendi çıktısını sildi.)
        k1_komut = HEDEFLER[HEDEF].get("kat1_komut")
        if k1_komut:
            hedef_ad = HEDEF
            print("  → katman 1 yenileniyor (%s)" % k1_komut)
            k1_kod = (on_dilim if k1_komut == "on-dilim" else on_dilim_donem)(dizin)
            hedef_sec(hedef_ad)
            if k1_kod != 0:
                print("  🔴 KATMAN 1 ÜRETİLEMEDİ — yazılanlar SİLİNİYOR.")
                for y in (p_yol, u_yol):
                    os.remove(y)
                _ek_temizle(dizin, 1)
                return 1
        # ZAMAN DİLİMLİ PARÇALAR da havuz indekslerine bağlıdır ⇒ burada yenilenir
        # (P1 ②). Kapı (`kapi`) manifestteki damgayı havuzla kıyaslar.
        if HEDEFLER[HEDEF].get("dilim"):
            hedef_ad = HEDEF
            print("  → zaman dilimli parçalar yenileniyor (dilim-yaz %s)" % hedef_ad)
            d_kod = dilim_yaz(dizin, hedef_ad)
            hedef_sec(hedef_ad)
            if d_kod != 0:
                print("  🔴 DİLİM PARÇALARI ÜRETİLEMEDİ — yazılanlar SİLİNİYOR.")
                for y in (p_yol, u_yol):
                    os.remove(y)
                _ek_temizle(dizin, 1)
                return 1
        # Kapı ölçümü de BURADA koşar: yayın günü değil, ÜRETİM günü sınanır.
        ihlal, satirlar = kapi(dizin)
        for s in satirlar:
            print("  " + s)
        if ihlal:
            print("  🔴 KAPI ÖLÇÜMÜ GEÇMEDİ — yazılanlar SİLİNİYOR.")
            for y in (p_yol, u_yol):
                os.remove(y)
            _ek_temizle(dizin, 1)
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
    _ek_temizle(dizin, 1)
    print("     ⇒ YAZILAN DOSYALAR SİLİNDİ.")
    return 1


def coz_c(dizin, cikti):
    t = time.perf_counter()
    onek, havuz_b, sonek, _sha = _oku_c(dizin)
    with open(cikti, "w", encoding="utf-8", newline="") as f:
        # Parça parça yaz (12 Kasım 2026, KASA MemoryError — coz-c devletler_harita):
        # tek dizgi kurmak tepe belleği ikiye katlıyordu; çıktı birebir aynı.
        f.write(onek)
        for parca in _havuz_metin_parcalari(havuz_b):
            f.write(parca)
        f.write(sonek)
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
    if a[0] == "on-dilim-donem" and len(a) in (2, 3):
        sys.exit(on_dilim_donem(a[1], a[2] if len(a) == 3 else "1281-01-01"))
    # ZAMAN DİLİMLİ PARÇA (P1 ②) — hedef ZORUNLU (devlet | donem)
    if a[0] == "dilim-yaz" and len(a) in (3, 4):
        sys.exit(dilim_yaz(a[1], a[2], int(a[3]) if len(a) == 4 else DILIM_L0))
    if a[0] == "dilim-sina" and len(a) in (3, 4):
        sys.exit(1 if dilim_sina(a[1], a[2], tarih_sayisi=int(a[3]) if len(a) == 4 else 40)
                 else 0)
    if a[0] == "dilim-coz" and len(a) == 4:
        sys.exit(dilim_coz(a[1], a[2], a[3]))
    if a[0] == "dilim-liste" and len(a) == 3:
        sys.exit(dilim_liste(a[1], a[2]))
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
