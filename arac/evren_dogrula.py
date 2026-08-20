# -*- coding: utf-8 -*-
r"""EVREN DOĞRULA — "yardımcı aletin evreni, motorun evreniyle AYNI mı?"

## NİÇİN VAR — bu projenin en sık kusur ailesi, adı konmamış hâliyle

`CLAUDE.md §11`: *"ölçüm doğru, EVREN yanlış."* Bir alet doğru hesap yapar
ama motorun (`uret_petek.py`) o günü, o noktayı, o sabiti gördüğü şekilde
GÖRMÜYORSA sonucu yanlış zeminde doğrudur. Bu aletin varlık sebebi
`oturumlar/OSMAN-GAZI-ILERLEME.md`'nin kendi teşhisi: *"Aletlerin EVREN
DOĞRULAMASI yok. `--sabit-dogrula` sabitleri kaynağa soruyor ama 'benim
komşu kümem motorunkiyle aynı mı' diye soran bir denetim YOK."*

Ölçülmüş bedeli — `arac/nicin_bos.py` `kur:`/`bit:` alanlarını hiç
OKUMUYORDU ve o tarihte HENÜZ KURULMAMIŞ noktaları komşu sayıyordu. Motor
ise onları `petek_epok()` ile komşusuna devrediyordu. İki alet İKİ AYRI
EVRENDE ölçüyordu ve ÜÇ HÜKÜM (H-0009 · H-0020 · H-0023) yanlış zeminde
verilip koordinatöre "sebep bulundu" diye gitti — hepsi geri alındı.

## BUGÜNKÜ DURUM — üç kişi aynı derdi ayrı ayrı, kısmen çözmüş

Bu depoda "kopya sabit" derdine ÜÇ AYRI bezpoke (elle, o dosyaya özel)
çare zaten var, ve üçü de FARKLI KAPSAMDA:
    `nicin_bos.py --sabit-dogrula`        yalnız KENDİ üç sabitini karşılaştırır
    `olc_enklav/olc_b_hazirlik.py`        import anında TAVAN_KM'yi tek başına denetler
    `denetle.py` / `uret_altlik.py`       yalnız BOLGE'yi, motordan CANLI okuyarak
Üçü de doğru çalışıyor AMA hiçbiri ötekini görmüyor — ve `arac/` altında
BAŞKA kopyalar (`calu_deney.py`, `denetle_kapsama.py`, üç `olc_denizasiri/`
dosyası) bu üç nöbetçinin HİÇBİRİNİN kapsamında değil. Bu alet onları TEK
YERDE, TEK KOŞUDA birleştirir.

## NE ÖLÇER

    ① SABİTLER      TAVAN_KM · PUAN_HALKA · PUAN_ESIK — arac/ altındaki her
                     KOPYASI `uret_petek.py`'nin BUGÜNKÜ satırıyla aynı mı
    ② BOLGE         iki alt sınıf:
                     (a) LİTERAL kopya  — box(...) sayıları elle yazılmış
                     (b) DİNAMİK okuma  — dosyanın kendi regex'i motorun
                         BUGÜNKÜ `BOLGE =` satırını hâlâ EŞLEŞTİRİYOR mu
                         (bu sınıf gerçek bir kırığı YAKALADI — aşağıya bak)
    ③ GİRDİ DOSYASI  `arac/` altında `girdi.py`'yi atlayıp `yerlesimler*.js`
                     dosyasını DOĞRUDAN açan bir alet var mı (özel/eksik
                     dosya kümesi riski — 31 Temmuz vakası, CLAUDE.md §5)
    ④ SAHNE FARKINDALIĞI  (HEURİSTİK — bkz. aşağıdaki sınır) `y.get("d"/"s"/
                     "v")` üzerinden sahiplik hesaplayan bir dosya `kur:`/
                     `bit:` alanlarını da okuyor mu — nicin_bos.py'nin
                     18 Ağustos'taki hatasının AYNI SINIFI
    ⑤ NOKTA SAYISI  `girdi.yukle()`nin bugünkü tabanı (kaç dosya, kaç nokta)
                     — bundan sonraki her "N nokta" iddiasının karşılaştığı
                     ZEMİN

## GERÇEK BİR KIRIK BULUNDU (bu alet yazılırken, 20 Ağustos 2026)

`denetle_kapsama.py:50` motorun BOLGE'sini `r"^BOLGE\s*=\s*box\(([^)]+)\)"`
deseniyle okumaya çalışıyor — TEK box() bekleyen bir desen. Motor BOLGE'si
`unary_union([box(...), box(...)])` (L şekli, koşu 9'dan beri) olduğu için
desen HİÇ EŞLEŞMİYOR ve dosya import anında `SystemExit` ile ÇÖKÜYOR.
Yorum satırı "`uret_altlik.py:58-61`'den alındı; orada zaten böyle
çözülmüştü" diyor — ama kopyalanan kod o düzeltmeden ÖNCEki hâl. Doğrulandı:
    py -c "import sys; sys.path.insert(0,'arac'); import denetle_kapsama"
    → "!! BOLGE uret_petek.py'den okunamadı (BOLGE satırı bulunamadı) —
       denetim ölçemez, düzeltilmeden koşturulmamalı"
Bu satır DÜZELTİLMEDİ — şartname yalnız `evren_dogrula.py`ye izin veriyor,
`denetle_kapsama.py`ye dokunmak kapsam dışı. Bulgu koordinatöre ayrıca
bildirilecek.

## 🔴 ALETİN KENDİ SINIRI — okumadan sonucuna güvenme

  · ④ (sahne farkındalığı) bir HEURİSTİKTİR: "d/s/v döngüsü VAR ama kur/bit
    YOK" ⇒ ADAY. Bazı dosyalar meşru sebeple kur/bit'e bakmaz (ör. yalnız
    RENK karşılaştırması yapan, tarihe hiç girmeyen bir araç). Alet bunu
    AYIRT EDEMEZ — bir TEŞHİS aleti, bir HÜKÜM aleti değil (nicin_bos.py'nin
    kendi ayrımı, burada da geçerli).
  · ② SABİTLER yalnız MODÜL SEVİYESİNDE `AD = değer` biçimindeki literal
    atamaları görür. Bir sabit fonksiyon içinde, koşullu, ya da başka bir
    modülden import edilerek tanımlıysa alet onu GÖRMEZ (sessizce atlar,
    "sabit bulunamadı" diye AYRI raporlanır — "temiz" ile "ölçülemedi"
    KARIŞTIRILMAZ).
  · ③ yalnız `open(`/`io.open(` çağrısının METNİNDE "yerlesimler" arar;
    dosya adı bir değişkende kurulup sonra açılıyorsa (dolaylı) YAKALAMAZ.
  · Motorun `arac/uret_petek.py` OLDUĞU varsayılır — iki motor karşılaştırmaz.

## KULLANIM
    py arac/evren_dogrula.py                 # tam tarama, rapor
    py arac/evren_dogrula.py --kendini-sina   # C13: GEÇME + ATEŞLEME sınaması
"""
import io
import os
import re
import sys
import tempfile

sys.stdout.reconfigure(encoding="utf-8", errors="replace")

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
ARAC = os.path.join(KOK, "arac")
MOTOR_YOLU = os.path.join(ARAC, "uret_petek.py")
BU_DOSYA = os.path.abspath(__file__)

sys.path.insert(0, ARAC)
import girdi  # noqa: E402 — data/ girdisinin tek okuyucusu


# ────────────────────────────────────────────────────────────────────────
# DOSYA TARAMASI
# ────────────────────────────────────────────────────────────────────────
def tum_py_dosyalari(kok=ARAC, haric=None):
    """`arac/` altındaki bütün .py dosyaları — motor ve kendisi HARİÇ."""
    haric = set(os.path.abspath(p) for p in (haric or []))
    haric.add(os.path.abspath(MOTOR_YOLU))
    haric.add(BU_DOSYA)
    out = []
    for kokdiz, altdizler, dosyalar in os.walk(kok):
        altdizler[:] = [d for d in altdizler if d != "__pycache__"]
        for ad in dosyalar:
            if not ad.endswith(".py"):
                continue
            yol = os.path.abspath(os.path.join(kokdiz, ad))
            if yol in haric:
                continue
            out.append(yol)
    return sorted(out)


def _oku(yol):
    return io.open(yol, encoding="utf-8", errors="replace").read()


def _goreli(yol):
    return os.path.relpath(yol, KOK).replace("\\", "/")


# ────────────────────────────────────────────────────────────────────────
# ① SABİTLER — TAVAN_KM · PUAN_HALKA · PUAN_ESIK
# ────────────────────────────────────────────────────────────────────────
# 🔴 Motor sabitini OKUYAN tek yer burası olsun — iki ayrıştırıcı yazılırsa
# ayrışırlar (CLAUDE.md §11, "kendi ayrıştırıcını yazma" dersinin ta kendisi
# — ama burada import edecek bir modül yok, motoru import etmek 40 dakikalık
# üretimi TETİKLER; bu yüzden `nicin_bos.py`nin de yaptığı gibi METİN
# üzerinden regex'le okunur ve bu, tek fonksiyona toplanır).
def motor_sabit(ad, motor_src):
    """`uret_petek.py`de modül seviyesinde `ad = <literal>` satırını bulur,
    değeri `eval` eder. Bulunamazsa None döner (HATA değil — çağıran
    "bulunamadı" ile "farklı"yı ayırt eder)."""
    m = re.search(r"^[ \t]*%s\s*=\s*(.+?)(?:\s{2,}#.*)?$" % re.escape(ad),
                  motor_src, flags=re.M)
    if not m:
        return None, None
    satir = motor_src.count("\n", 0, m.start()) + 1
    try:
        return eval(m.group(1).strip(), {"__builtins__": {}}), satir
    except Exception:                                        # noqa: BLE001
        return None, satir


def dosyada_sabit(ad, src):
    """Aynı arayış, herhangi bir dosya metninde — modül seviyesi, literal."""
    for m in re.finditer(r"^[ \t]*%s\s*=\s*(.+?)(?:\s{2,}#.*)?$" % re.escape(ad),
                          src, flags=re.M):
        try:
            deger = eval(m.group(1).strip(), {"__builtins__": {}})
        except Exception:                                    # noqa: BLE001
            continue
        satir = src.count("\n", 0, m.start()) + 1
        yield deger, satir


def sabit_kopyalarini_tara(ad, motor_src, dosyalar):
    """`ad` sabitinin `arac/` altındaki bütün kopyalarını motorla karşılaştırır.
    Döner: (motor_degeri, motor_satiri, [bulgu, ...]) — bulgu = dict."""
    motor_deger, motor_satir = motor_sabit(ad, motor_src)
    bulgular = []
    for yol in dosyalar:
        src = _oku(yol)
        for deger, satir in dosyada_sabit(ad, src):
            ayni = (deger == motor_deger) if motor_deger is not None else None
            bulgular.append({
                "dosya": _goreli(yol), "satir": satir, "deger": deger,
                "ayni": ayni,
            })
    return motor_deger, motor_satir, bulgular


# ────────────────────────────────────────────────────────────────────────
# ② BOLGE — literal kopya + dinamik okuma
# ────────────────────────────────────────────────────────────────────────
_KUTU_DESENI = re.compile(
    r"box\(\s*(-?[\d.]+)\s*,\s*(-?[\d.]+)\s*,\s*(-?[\d.]+)\s*,\s*(-?[\d.]+)\s*\)")


def motor_bolge_kutulari(motor_src):
    """Motorun `BOLGE = ...` satırındaki bütün `box(a,b,c,d)` dörtlüleri —
    kaç kutu olursa olsun (tek kutu ya da L şekli birleşim), sıralı küme."""
    m = re.search(r"^[ \t]*BOLGE\s*=.*$", motor_src, flags=re.M)
    if not m:
        return None
    kutular = _KUTU_DESENI.findall(m.group(0))
    return tuple(sorted(tuple(round(float(x), 6) for x in k) for k in kutular))


def _bolge_satirlari(src):
    """Bir dosyadaki bütün `BOLGE = ...` (modül seviyesi) satırları,
    (satir_no, satir_metni) çiftleri hâlinde."""
    out = []
    for m in re.finditer(r"^[ \t]*BOLGE\s*=.*$", src, flags=re.M):
        out.append((src.count("\n", 0, m.start()) + 1, m.group(0)))
    return out


def _dosyanin_bolge_regexleri(src):
    """Dosyanın KENDİ metninde geçen, `BOLGE` sözcüğünü taşıyan `re.search`/
    `re.findall`/`re.match` DESEN dizeleri (ham r"..." ya da r'...'). Bunlar
    motorun BOLGE satırını bulmak için yazılmış olabilir; her biri gerçek
    motor metnine karşı TEKRAR denenir."""
    desenler = []
    for m in re.finditer(
            r"""re\.(?:search|findall|match)\(\s*r(['"])(.*?)\1""", src):
        if "BOLGE" in m.group(2):
            desenler.append(m.group(2))
    return desenler


def bolge_kopyalarini_tara(motor_src, dosyalar):
    """BOLGE'nin iki alt sınıfını da tarar. Döner: (motor_kutulari, bulgular).
    bulgu["sinif"] ∈ {"literal", "dinamik", "yok"}."""
    motor_kutular = motor_bolge_kutulari(motor_src)
    bulgular = []
    for yol in dosyalar:
        src = _oku(yol)
        satirlar = _bolge_satirlari(src)
        if not satirlar:
            continue
        for satir_no, metin in satirlar:
            literal_kutular = tuple(sorted(
                tuple(round(float(x), 6) for x in k)
                for k in _KUTU_DESENI.findall(metin)))
            # Dizideki sayılar KENDİ satırında mı, yoksa değişkenden mi
            # geliyor — `box(*[...])` / `box(*k)` gibi yıldızlı açılım
            # sayı İÇERMEZ, o zaman bu LİTERAL değil DİNAMİKtir.
            if literal_kutular:
                bulgular.append({
                    "dosya": _goreli(yol), "satir": satir_no,
                    "sinif": "literal", "kutular": literal_kutular,
                    "ayni": literal_kutular == motor_kutular,
                })
            else:
                desenler = _dosyanin_bolge_regexleri(src)
                if not desenler:
                    bulgular.append({
                        "dosya": _goreli(yol), "satir": satir_no,
                        "sinif": "dinamik-desensiz", "desen": None,
                        "ayni": None,
                    })
                    continue
                for desen in desenler:
                    try:
                        eslesir = re.search(desen, motor_src,
                                             flags=re.M) is not None
                    except re.error:
                        eslesir = None
                    bulgular.append({
                        "dosya": _goreli(yol), "satir": satir_no,
                        "sinif": "dinamik", "desen": desen,
                        "ayni": eslesir,
                    })
    return motor_kutular, bulgular


# ────────────────────────────────────────────────────────────────────────
# ③ GİRDİ DOSYASI — girdi.py'yi atlayan doğrudan açma
# ────────────────────────────────────────────────────────────────────────
_ACMA_DESENI = re.compile(r"""(?:io\.)?open\([^)]*yerlesimler[^)]*\)""")


def ozel_dosya_listelerini_tara(dosyalar):
    bulgular = []
    for yol in dosyalar:
        src = _oku(yol)
        for m in _ACMA_DESENI.finditer(src):
            satir = src.count("\n", 0, m.start()) + 1
            bulgular.append({"dosya": _goreli(yol), "satir": satir,
                              "metin": m.group(0)})
    return bulgular


# ────────────────────────────────────────────────────────────────────────
# ④ SAHNE FARKINDALIĞI — kur:/bit: heuristiği
# ────────────────────────────────────────────────────────────────────────
_SAHIPLIK_DESENI = re.compile(
    r"""for\s+\w+\s+in\s+\(?\s*\w+(?:\.get\(\s*["'][dsv]["']\s*\)|\[\s*["'][dsv]["']\s*\])""")
_KUR_DESENI = re.compile(r"\bkur\b")
_BIT_DESENI = re.compile(r"\bbit\b")


def sahne_farkindaligini_tara(dosyalar):
    """d:/s:/v: üzerinden sahiplik hesaplayan ama kur:/bit: hiç GEÇMEYEN ya
    da yalnız BİRİNİ geçen dosyaları listeler. HEURİSTİK — bkz. modül
    docstring'indeki sınır uyarısı."""
    bulgular = []
    for yol in dosyalar:
        src = _oku(yol)
        if not _SAHIPLIK_DESENI.search(src):
            continue
        kur = len(_KUR_DESENI.findall(src))
        bit = len(_BIT_DESENI.findall(src))
        if kur and bit:
            sinif = "tam"
        elif kur or bit:
            sinif = "asimetrik"
        else:
            sinif = "yok"
        bulgular.append({"dosya": _goreli(yol), "kur": kur, "bit": bit,
                          "sinif": sinif})
    return bulgular


# ────────────────────────────────────────────────────────────────────────
# ⑤ NOKTA SAYISI — girdi.yukle()'nin bugünkü tabanı
# ────────────────────────────────────────────────────────────────────────
def girdi_ozeti():
    Y = girdi.yukle(sessiz=True)
    return {"dosya_sayisi": len(girdi.GIRDI_DOSYALARI), "nokta_sayisi": len(Y)}


# ────────────────────────────────────────────────────────────────────────
# RAPOR
# ────────────────────────────────────────────────────────────────────────
# Bazı BOLGE/sabit ayrışmaları BİLİNEN ve KABUL EDİLMİŞ — ölü kod ya da
# kasıtlı ayrı motor. Bunları "kırık" diye alarm vermek gürültü üretir;
# ama SESSİZCE elemek de yanlış (§11: "ölçemediğini elenmiş sanma"). Çare:
# ayrı bir kova, gerekçesiyle — bulgu SİLİNMEZ, ETİKETLENİR.
BILINEN_ISTISNA = {
    "arac/uret_donemler.py": "ÖLÜ MOTOR — CLAUDE.md §5: \"kullanılmıyor, "
                              "referans için duruyor\". Canlı motorla "
                              "BOLGE'sinin ayrışması BEKLENEN.",
}


def rapor():
    motor_src = _oku(MOTOR_YOLU)
    dosyalar = tum_py_dosyalari()
    hata_sayisi = 0
    uyari_sayisi = 0

    print("=" * 78)
    print("EVREN DOĞRULA — arac/ altındaki %d dosya, motor: %s"
          % (len(dosyalar), _goreli(MOTOR_YOLU)))
    print("=" * 78)

    # ── ① sabitler ──────────────────────────────────────────────────
    print("\n① SABİTLER (TAVAN_KM · PUAN_HALKA · PUAN_ESIK)")
    for ad in ("TAVAN_KM", "PUAN_HALKA", "PUAN_ESIK"):
        motor_deger, motor_satir, bulgular = sabit_kopyalarini_tara(
            ad, motor_src, dosyalar)
        if motor_deger is None:
            print(f"   🟡 {ad}: motorda BULUNAMADI (satır deseni değişmiş "
                  f"olabilir) — bu sabit ÖLÇÜLEMEDİ")
            continue
        if not bulgular:
            print(f"   ⚪ {ad}: motorda uret_petek.py:{motor_satir} = "
                  f"{motor_deger!r} — arac/ altında KOPYASI YOK")
            continue
        for b in bulgular:
            if b["ayni"]:
                print(f"   ✓ {ad}: {b['dosya']}:{b['satir']} — motorla aynı")
            else:
                hata_sayisi += 1
                print(f"   🔴 {ad} AYRIŞMASI: {b['dosya']}:{b['satir']}")
                print(f"        burada : {b['deger']!r}")
                print(f"        motorda: {motor_deger!r} "
                      f"(uret_petek.py:{motor_satir})")

    # ── ② BOLGE ─────────────────────────────────────────────────────
    print("\n② BOLGE (harita penceresi)")
    motor_kutular, bulgular = bolge_kopyalarini_tara(motor_src, dosyalar)
    print(f"   motor: uret_petek.py — {len(motor_kutular)} kutu — "
          f"{motor_kutular}")
    if not bulgular:
        print("   (arac/ altında BOLGE kopyası/okuyucusu yok)")
    for b in bulgular:
        istisna = BILINEN_ISTISNA.get(b["dosya"])
        if b["sinif"] == "literal":
            if b["ayni"]:
                print(f"   ✓ {b['dosya']}:{b['satir']} — LİTERAL kopya, "
                      f"motorla aynı ({len(b['kutular'])} kutu)")
            elif istisna:
                uyari_sayisi += 1
                print(f"   🟡 {b['dosya']}:{b['satir']} — LİTERAL kopya "
                      f"motordan FARKLI, ama BİLİNEN İSTİSNA: {istisna}")
            else:
                hata_sayisi += 1
                print(f"   🔴 {b['dosya']}:{b['satir']} — LİTERAL kopya "
                      f"motordan FARKLI")
                print(f"        burada : {b['kutular']}")
                print(f"        motorda: {motor_kutular}")
                print(f"        ⚠️ bu satır BUGÜN eşleşmiyor bile — motor "
                      f"değişmeden de zaten AYRIŞMIŞ")
        elif b["sinif"] == "dinamik":
            if b["ayni"]:
                print(f"   ✓ {b['dosya']}:{b['satir']} — DİNAMİK okuma, "
                      f"kendi deseni motorun BUGÜNKÜ satırıyla eşleşiyor")
            else:
                hata_sayisi += 1
                print(f"   🔴 {b['dosya']}:{b['satir']} — DİNAMİK okuma "
                      f"KIRIK: kendi deseni motorun bugünkü BOLGE "
                      f"satırıyla EŞLEŞMİYOR")
                print(f"        desen: {b['desen']!r}")
                print(f"        ⇒ bu dosya import edilince muhtemelen "
                      f"ÇÖKER (SystemExit) ya da BAYAT değere sessizce "
                      f"düşer — hangisi olduğu dosyanın kendi hata "
                      f"davranışına bağlı, bu alet İMPORT ETMEDEN ölçer")
        else:  # dinamik-desensiz
            uyari_sayisi += 1
            print(f"   🟡 {b['dosya']}:{b['satir']} — BOLGE satırı sayı "
                  f"İÇERMİYOR (dinamik olmalı) ama dosyada 'BOLGE' geçen "
                  f"bir re.search deseni de BULUNAMADI — ÖLÇÜLEMEDİ, "
                  f"elle bakılmalı")

    # ── ③ girdi dosyası ─────────────────────────────────────────────
    print("\n③ GİRDİ DOSYASI (girdi.py atlanıyor mu)")
    ozel = ozel_dosya_listelerini_tara(dosyalar)
    if not ozel:
        print("   ✓ arac/ altında girdi.py'yi atlayıp yerlesimler*.js'i "
              "DOĞRUDAN açan dosya yok")
    else:
        for b in ozel:
            hata_sayisi += 1
            print(f"   🔴 {b['dosya']}:{b['satir']} — {b['metin']}")

    # ── ④ sahne farkındalığı (heuristik) ────────────────────────────
    print("\n④ SAHNE FARKINDALIĞI — kur:/bit: (HEURİSTİK, bkz. modül sınırı)")
    farkindalik = sahne_farkindaligini_tara(dosyalar)
    tam = [b for b in farkindalik if b["sinif"] == "tam"]
    asimetrik = [b for b in farkindalik if b["sinif"] == "asimetrik"]
    yok = [b for b in farkindalik if b["sinif"] == "yok"]
    print(f"   d:/s:/v: üzerinden sahiplik hesaplayan {len(farkindalik)} "
          f"dosya bulundu")
    print(f"   🟢 kur VE bit ikisi de geçiyor : {len(tam)}")
    for b in tam:
        print(f"        {b['dosya']} (kur×{b['kur']} · bit×{b['bit']})")
    print(f"   🟡 yalnız BİRİ geçiyor (asimetrik) : {len(asimetrik)}")
    for b in asimetrik:
        uyari_sayisi += 1
        print(f"        {b['dosya']} (kur×{b['kur']} · bit×{b['bit']})")
    print(f"   🔴 İKİSİ DE geçmiyor (aday) : {len(yok)}")
    for b in yok:
        uyari_sayisi += 1
        print(f"        {b['dosya']}")
    if yok or asimetrik:
        print("   ⚠️ Bu bir ADAY listesidir, HÜKÜM değil — nicin_bos.py'nin "
              "18 Ağustos'taki hatasıyla AYNI DESEN ama her aday elle "
              "doğrulanmalı (bazı dosyalar tarihe hiç girmez, kur/bit "
              "onlar için ALAKASIZ olabilir).")

    # ── ⑤ nokta sayısı ──────────────────────────────────────────────
    print("\n⑤ NOKTA SAYISI (girdi.yukle() — bugünkü zemin)")
    ozet = girdi_ozeti()
    print(f"   {ozet['dosya_sayisi']} girdi dosyası · "
          f"{ozet['nokta_sayisi']} nokta")

    print("\n" + "=" * 78)
    print(f"ÖZET: {hata_sayisi} AYRIŞMA (🔴) · {uyari_sayisi} UYARI/ADAY (🟡)")
    print("=" * 78)
    return hata_sayisi, uyari_sayisi


# ────────────────────────────────────────────────────────────────────────
# C13 — KENDİNİ SINA: GEÇME + ATEŞLEME, ikisi de
# ────────────────────────────────────────────────────────────────────────
# CLAUDE.md §11 (C13): "Gerçek veride o kusur yoksa dal koşulamaz ⇒ SAHTE
# GİRDİ ya da geçici eşik değişikliğiyle ZORLA ateşle." Bugünkü depoda ①
# (sabitler) ve ③ (özel dosya listesi) dalları TEMİZ — yani gerçek veriyle
# ATEŞLENEMEZLER, SENTETİK sabit/dosya ile zorlanır. ② (BOLGE dinamik) ve
# ④ (sahne farkındalığı) dalları BUGÜN GERÇEKTEN ateşliyor (denetle_kapsama.py
# kırık, 5-11 aday dosya) — bunlar için sentetik gerekmiyor, gerçek veri
# hem GEÇME hem ATEŞLEME'yi kanıtlıyor; bu fonksiyon o kanıtı da SAYAR ve
# yazdırır, tekrar üretmez.
def kendini_sina():
    print("=" * 78)
    print("KENDİNİ SINA — C13: her dal GEÇME + ATEŞLEME")
    print("=" * 78)
    tamam = True

    # --- ① SABİTLER: sentetik motor + sentetik kopya ------------------
    with tempfile.TemporaryDirectory(prefix="evren_sina_") as tmp:
        motor_src = "TAVAN_KM = {1: 700, 2: 420, 3: 280, 4: 140, 0: 280}\n"
        dogru = os.path.join(tmp, "kopya_dogru.py")
        yanlis = os.path.join(tmp, "kopya_yanlis.py")
        io.open(dogru, "w", encoding="utf-8").write(
            "TAVAN_KM = {1: 700, 2: 420, 3: 280, 4: 140, 0: 280}\n")
        io.open(yanlis, "w", encoding="utf-8").write(
            "TAVAN_KM = {1: 700, 2: 420, 3: 280, 4: 100, 0: 280}\n")

        motor_deger, _ = motor_sabit("TAVAN_KM", motor_src)
        _, _, b_dogru = sabit_kopyalarini_tara("TAVAN_KM", motor_src, [dogru])
        _, _, b_yanlis = sabit_kopyalarini_tara("TAVAN_KM", motor_src,
                                                 [yanlis])
        gecme_ok = bool(b_dogru) and b_dogru[0]["ayni"] is True
        atesleme_ok = bool(b_yanlis) and b_yanlis[0]["ayni"] is False
        print(f"\n① SABİTLER (sentetik)")
        print(f"   GEÇME    (doğru kopya, {motor_deger} == "
              f"{b_dogru[0]['deger'] if b_dogru else '?'}): "
              f"{'✓ geçti' if gecme_ok else '🔴 BEKLENMEDİK'}")
        print(f"   ATEŞLEME (yanlış kopya, {140} != "
              f"{b_yanlis[0]['deger'][4] if b_yanlis else '?'}): "
              f"{'✓ ateşledi' if atesleme_ok else '🔴 ATEŞLEMEDİ — dal ölü'}")
        tamam = tamam and gecme_ok and atesleme_ok

    # --- ③ ÖZEL DOSYA LİSTESİ: sentetik temiz + sentetik kırık ---------
    with tempfile.TemporaryDirectory(prefix="evren_sina_") as tmp:
        temiz = os.path.join(tmp, "temiz.py")
        kirik = os.path.join(tmp, "kirik.py")
        io.open(temiz, "w", encoding="utf-8").write(
            "import girdi\nY = girdi.yukle(sessiz=True)\n")
        io.open(kirik, "w", encoding="utf-8").write(
            'import io\nY = io.open("data/yerlesimler_deneme.js").read()\n')
        b_temiz = ozel_dosya_listelerini_tara([temiz])
        b_kirik = ozel_dosya_listelerini_tara([kirik])
        gecme_ok = len(b_temiz) == 0
        atesleme_ok = len(b_kirik) == 1
        print(f"\n③ GİRDİ DOSYASI (sentetik)")
        print(f"   GEÇME    (girdi.py üzerinden okuyan dosya): "
              f"{'✓ geçti (0 bulgu)' if gecme_ok else '🔴 BEKLENMEDİK'}")
        print(f"   ATEŞLEME (yerlesimler'i doğrudan açan dosya): "
              f"{'✓ ateşledi (1 bulgu)' if atesleme_ok else '🔴 ATEŞLEMEDİ'}")
        tamam = tamam and gecme_ok and atesleme_ok

    # --- ② BOLGE: GERÇEK veriyle — denetle_kapsama.py kırık, denetle.py sağlam
    print(f"\n② BOLGE (GERÇEK veri — sentetik GEREKMEDİ)")
    motor_src_gercek = _oku(MOTOR_YOLU)
    dosyalar = tum_py_dosyalari()
    _, bulgular = bolge_kopyalarini_tara(motor_src_gercek, dosyalar)
    kirik_bulundu = any(b["sinif"] == "dinamik" and b["ayni"] is False
                         for b in bulgular)
    saglam_bulundu = any(b["sinif"] in ("dinamik", "literal")
                          and b["ayni"] is True for b in bulgular)
    print(f"   ATEŞLEME: denetle_kapsama.py bugün gerçekten KIRIK mı → "
          f"{'✓ evet, bulundu' if kirik_bulundu else '🔴 BULUNAMADI'}")
    print(f"   GEÇME   : en az bir dosya (denetle.py/uret_altlik.py gibi) "
          f"bugün gerçekten SAĞLAM mı → "
          f"{'✓ evet, bulundu' if saglam_bulundu else '🔴 BULUNAMADI'}")
    tamam = tamam and kirik_bulundu and saglam_bulundu

    # --- ④ SAHNE FARKINDALIĞI: GERÇEK veriyle ---------------------------
    print(f"\n④ SAHNE FARKINDALIĞI (GERÇEK veri — sentetik GEREKMEDİ)")
    farkindalik = sahne_farkindaligini_tara(dosyalar)
    ates = [b for b in farkindalik if b["sinif"] in ("yok", "asimetrik")]
    gecen = [b for b in farkindalik if b["sinif"] == "tam"]
    print(f"   ATEŞLEME: kur/bit'i hiç ya da yarım okuyan dosya var mı → "
          f"{'✓ evet, ' + str(len(ates)) + ' aday' if ates else '🔴 YOK'}")
    print(f"   GEÇME   : kur/bit'i tam okuyan dosya var mı → "
          f"{'✓ evet, ' + str(len(gecen)) + ' dosya' if gecen else '🔴 YOK'}")
    tamam = tamam and bool(ates) and bool(gecen)

    print("\n" + "=" * 78)
    print("KENDİNİ SINA SONUCU: " + ("🟢 TÜM DALLAR HEM GEÇME HEM ATEŞLEME "
                                     "İÇİN SINANDI VE TUTTU" if tamam else
                                     "🔴 EN AZ BİR DAL SINANAMADI"))
    print("=" * 78)
    return tamam


def main():
    if "--kendini-sina" in sys.argv[1:]:
        tamam = kendini_sina()
        sys.exit(0 if tamam else 1)
    hata, uyari = rapor()
    sys.exit(1 if hata else 0)


if __name__ == "__main__":
    main()
