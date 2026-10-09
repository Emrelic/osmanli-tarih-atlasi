# ARAC-KRONO-SAY-SINAV-1006 — `arac/kronoloji_say.js` + `durum_tablosu.kronoloji_say`
# İKİ YÖNLÜ sınavı (UMIT-W7-DALGA3-1006).
#
#   YÖN 1  yeni sayaç her vakayı DOĞRU sayar
#   YÖN 2  eski regex aynı vakalarda YANLIŞ sayar (sınav kusuru gerçekten görür)
#   YÖN 3  ölçülemeyen durum ÖLÇÜLEMEDİ olur, asla bir sayı olmaz
#
# Vakalar: dalga 2 üyelik tablosu (denetim/UMIT-W7-DURUM-1006.md §4) — GERÇEK
# dosyalar — artı her kusur sınıfının sentetik eşi.
# Koşum: py denetim/ARAC-KRONO-SAY-SINAV-1006.py   (çıkış 0 = hepsi geçti)
import io, os, re, sys, json, tempfile, subprocess

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(KOK, "arac"))
_eski = sys.stdout
import durum_tablosu as D          # modül düzeyinde stdout'u sarar, chdir(KOK)
out = sys.stdout

gecti = toplam = 0


def sina(ad, kosul, ayrinti=""):
    global gecti, toplam
    toplam += 1
    gecti += bool(kosul)
    out.write("%s %s%s\n" % ("✓" if kosul else "✗", ad,
                             ("  — " + ayrinti) if (ayrinti and not kosul) else ""))


ESKI = {  # 2 Ekim'e kadarki regex'ler, BİREBİR
    "madde": r'\{\s*t:\s*"\d{4}(?:-\d{2}){0,2}"', "duygu": r"duygu:\[",
    "yer_id": r"yer_id:", "vefat_id": r"vefat_id:"}


def eski_say(yol, alan):
    return len(re.findall(ESKI[alan], D._oku(yol)))


# ── YÖN 1 + 2: gerçek dosyalar, dalga 2 üyeliği ──────────────────────────
# (dosya, alan, doğru, kusur sınıfı)
GERCEK = [
    ("olaylar.js",            "madde",   "ALT",   "iç içe alt_kronoloji adımı FAZLA"),
    ("olaylar.js",            "yer_id",  "ALT",   "iç içe alt_kronoloji adımı FAZLA"),
    ("olaylar_ek17.js",       "vefat_id", "YORUM", "yorum satırı :39 FAZLA"),
    ("olaylar_ek5.js",        "yer_id",  "YORUM", "yorum satırı :340 FAZLA"),
    ("olaylar_ok106.js",      "madde",   "YORUM", "yorum satırı :43 FAZLA"),
    ("olaylar_ok106.js",      "yer_id",  "YORUM", "yorum satırları :76/:79 FAZLA"),
    # 🔴 sh110 · sk105 — 1006d (W41): SABİT → ÖLÇÜM. Birleşik formüle BLOK
    #    sınıfı eklendi (`/* … */` içi geçiş düşülür). DALGA9'un "0 bir BEYANDIR,
    #    biri maddeyi açarsa sınav ÖTMELİ" amacı KAYBOLMADI, AYRI soruya taşındı
    #    (aşağıda `OLU_DOSYA`): formül ne derse desin, bu iki dosyanın canlı
    #    maddesi 0 değilse o soru öter. Sabit iki işi birden yapıyordu; ayrıldı.
    #    W41 lekseri her iki dosyada üç alanı da blokta buldu (madde·duygu·yer_id).
    ("olaylar_sh110.js",      "madde",   "BLOK",  "blok yorumlu ÇÜRÜDÜ maddesi FAZLA"),
    ("olaylar_sh110.js",      "duygu",   "BLOK",  "blok yorumlu ÇÜRÜDÜ maddesi FAZLA"),
    ("olaylar_sh110.js",      "yer_id",  "BLOK",  "blok yorumlu ÇÜRÜDÜ maddesi FAZLA"),
    ("olaylar_sk105.js",      "madde",   "BLOK",  "blok yorumlu madde FAZLA"),
    ("olaylar_sk105.js",      "duygu",   "BLOK",  "blok yorumlu madde FAZLA"),
    ("olaylar_sk105.js",      "yer_id",  "BLOK",  "blok yorumlu madde FAZLA"),
    ("olaylar_ek8.js",        "madde",   "JSON",  "JSON biçimli tırnaklı anahtar — EKSİK"),
    ("olaylar_ek8.js",        "duygu",   "JSON",  "JSON biçimli tırnaklı anahtar — EKSİK"),
    ("olaylar_ek8.js",        "yer_id",  "JSON",  "JSON biçimli tırnaklı anahtar — EKSİK"),
    ("olaylar_kamerika.js",   "madde",   "JSON",   "JSON anahtarı \"t\": — EKSİK"),
    ("olaylar_kamerika.js",   "duygu",   "JSON",   "JSON anahtarı — EKSİK"),
    ("olaylar_kamerika.js",   "yer_id",  "JSON",   "JSON anahtarı — EKSİK"),
    ("olaylar_ek21.js",       "duygu",   "BOSLUK", "`duygu: [` boşluklu — EKSİK"),
    ("olaylar_ek22.js",       "duygu",   "BOSLUK", "`duygu: [` boşluklu — EKSİK"),
    ("olaylar_p0917taraf.js", "yer_id",   None, "3 × yer_id:\"\" — bağ DEĞİL"),
    ("olaylar_p0063.js",      "yer_id",   None, "1 × yer_id:\"\" — bağ DEĞİL"),
]
# Tırnaklı (JSON biçimli) anahtar karşılıkları — ESKİ regex bunları HİÇ görmez.
JSON_RX = {
    "madde": r'"t"\s*:\s*"\d{4}(?:-\d{2}){0,2}"', "duygu": r'"duygu"\s*:\s*\[',
    "yer_id": r'"yer_id"\s*:', "vefat_id": r'"vefat_id"\s*:'}
# Boşluklu çıplak anahtar (DALGA9) — ESKİ regex anahtarla `:` / `[` arasında
# boşluk görmez (`duygu: [` · `t : "…"` · `yer_id : "…"`).
BOSLUK_RX = {
    "madde": r'\{\s*t\s+:\s*"\d{4}(?:-\d{2}){0,2}"',
    "duygu": r'(?<![\w"$])duygu(?:\s+:\s*|:\s+)\[',
    "yer_id": r'(?<![\w"$])yer_id\s+:\s*"[^"]',
    "vefat_id": r'(?<![\w"$])vefat_id\s+:\s*"[^"]'}


def _alt_bolgeleri(metin):
    """`alt_kronoloji:[ … ]` dizilerinin metin aralıkları — çift tırnak farkında."""
    out = []
    for m in re.finditer(r"alt_kronoloji\s*:\s*\[", metin):
        i, derin, dizge, kacis = m.end(), 1, False, False
        while i < len(metin) and derin:
            c = metin[i]
            if kacis:
                kacis = False
            elif c == "\\":
                kacis = True
            elif c == '"':
                dizge = not dizge
            elif not dizge:
                derin += (c == "[") - (c == "]")
            i += 1
        out.append((m.end(), i))
    return out


def _blok_bolgeleri(metin):
    """`/* … */` blok yorum aralıkları (1006d). `/*` bir çift tırnaklı dizgenin
    ya da `//` satır yorumunun İÇİNDEYSE blok açmaz — `https://…` ve
    `"a/*b"` yanlış blok saymasın diye satır başından tarama yapılır."""
    out, i, n = [], 0, len(metin)
    dizge = kacis = satir_yorum = False
    while i < n:
        c = metin[i]
        if satir_yorum:
            satir_yorum = c != "\n"
        elif dizge:
            if kacis:
                kacis = False
            elif c == "\\":
                kacis = True
            elif c == '"':
                dizge = False
        elif c == '"':
            dizge = True
        elif metin.startswith("//", i):
            satir_yorum = True
        elif metin.startswith("/*", i):
            j = metin.find("*/", i + 2)
            j = n if j < 0 else j + 2
            out.append((i, j))
            i = j
            continue
        i += 1
    return out


def olcu_dogru(yol, alan, kural, blok_dus=True):
    """Doğru değeri DOSYADAN ölçer → (doğru, kusur geçişi).

    🔴 5 Ekim 2026 (DALGA6 → DALGA8): ek5 için sabit 389 yazılmıştı; W18 ek5'e
    bir madde ekleyince 390 oldu ve sınav YANLIŞ ötüyordu. Sabit, ölçümün
    fotoğrafıdır — veri büyüyünce bayatlar. Koordinatör: "sabit sayı taşıyan
    sınav kırılgandır." ⇒ her kusur sınıfı burada dosyadan ölçülür; kusur
    geçişi 0 ise vaka artık kusur taşımıyor demektir ve AYRI satırda öter.
    BİRLEŞİK formül — her sınıf HER dosyada ölçülür (DALGA8 yapay-madde sınavı
    ilk denemede gösterdi: yalnız ALT düzeltmesi uygulanan olaylar.js'e tırnaklı
    bir madde eklenince doğru 1 eksik çıktı; tek sınıflı kural, dosyaya YENİ bir
    biçim girdiği gün yine kırılır):
        doğru = eski regex − `//` satırı geçişi − `alt_kronoloji:[…]` içi geçiş
                + tırnaklı anahtar geçişi (yorum ve alt dışı)
                + boşluklu çıplak anahtar geçişi (yorum ve alt dışı · DALGA9)
                − boş `yer_id:""` (yalnız yer_id; boş alan bağ değildir)
                − `/* … */` blok yorum içi geçiş (1006d · W41)
    Blok aralığına düşen geçiş YALNIZ BLOK sınıfında düşülür: `//`, ALT, JSON,
    BOSLUK ve boş yer_id sayımları blok aralığını DIŞARIDA tutar (çift düşme yok).
    `kural` yalnız hangi sınıfın bu dosyada HÂLÂ var olması gerektiğini söyler
    (YORUM · ALT · JSON · BOSLUK · BLOK · None=boş yer_id); dönen ikinci değer o
    sınıfın geçişi. Sayı verilmişse SABİT döner (gerekçe DALGA8 raporu).
    `blok_dus=False` NEGATİF KONTROLDÜR (1006d öncesi formül) — yalnız sınav
    BLOK sınıfının dişini ölçmek için çağırır.
    """
    if not isinstance(kural, (str, type(None))):
        return kural, None
    metin = D._oku(yol)
    eski = len(re.findall(ESKI[alan], metin))
    alt_ar = _alt_bolgeleri(metin)
    blok_ar = _blok_bolgeleri(metin)

    def _blokta(p):
        return any(a <= p < b for a, b in blok_ar)

    satirlar, poz = [], 0
    for l in metin.split("\n"):
        satirlar.append((poz, l))
        poz += len(l) + 1
    yorum = sum(1 for p, l in satirlar if l.lstrip().startswith("//")
                for m in re.finditer(ESKI[alan], l) if not _blokta(p + m.start()))
    blok = sum(1 for m in re.finditer(ESKI[alan], metin) if _blokta(m.start()))
    alt = sum(1 for a, b in alt_ar for m in re.finditer(ESKI[alan], metin[a:b])
              if not _blokta(a + m.start()))
    jsx = JSON_RX[alan] + (r'\s*"[^"]' if alan in ("yer_id", "vefat_id") else "")
    js = sum(1 for p, l in satirlar if not l.lstrip().startswith("//")
             for m in re.finditer(jsx, l)
             if not any(a <= p + m.start() < b for a, b in alt_ar)
             and not _blokta(p + m.start()))
    bsl = sum(1 for p, l in satirlar if not l.lstrip().startswith("//")
              for m in re.finditer(BOSLUK_RX[alan], l)
              if not any(a <= p + m.start() < b for a, b in alt_ar)
              and not _blokta(p + m.start()))
    # boş yer_id yalnız ESKİ regex'in saydığı biçimde (`yer_id:` bitişik) düşülür
    bos = (sum(1 for m in re.finditer(r'(?<![\w"])yer_id:\s*""', metin)
               if not _blokta(m.start())) if alan == "yer_id" else 0)
    dogru = eski - yorum - alt + js + bsl - bos - (blok if blok_dus else 0)
    kusur = {"YORUM": yorum, "ALT": alt, "JSON": js, "BOSLUK": bsl, "BLOK": blok,
             None: bos}[kural]
    return dogru, kusur


yollar = [os.path.join("data", g[0]) for g in GERCEK]
R = D.kronoloji_say(sorted(set(yollar)))
sina("gerçek vakalar ölçülebildi", "hata" not in R, str(R.get("hata")))
if "hata" not in R:
    for dosya, alan, kural, sinif in GERCEK:
        yol = os.path.join("data", dosya)
        yeni = R["dosya_basi"][dosya][alan]
        eski = eski_say(yol, alan)
        dogru, kusur = olcu_dogru(yol, alan, kural)
        if kural in ("YORUM", "ALT", "JSON", "BOSLUK", "BLOK"):
            sina("%s vakası %s %s hâlâ kusur geçişi taşıyor (%d)"
                 % (kural, dosya, alan, kusur), kusur > 0)
        sina("YÖN1 %s %s = %d" % (dosya, alan, dogru), yeni == dogru,
             "yeni %d" % yeni)
        sina("YÖN2 eski regex %s %s ≠ %d (%s)" % (dosya, alan, dogru, sinif),
             eski != dogru, "eski %d — sınav kusuru GÖRMÜYOR" % eski)
        if kural == "BLOK":
            # 1006d NEGATİF KONTROL: BLOK düşülmeyen (1006c) formül bu vakada
            # sayaçla UYUŞMAMALI — uyuşursa BLOK sınıfının dişi yoktur.
            dogru_c, _ = olcu_dogru(yol, alan, kural, blok_dus=False)
            sina("NEG 1006c formülü (BLOK'suz) %s %s ≠ sayaç %d" % (dosya, alan, yeni),
                 dogru_c != yeni, "BLOK'suz formül de %d veriyor" % dogru_c)

# 1006d: DALGA9'un ölü dosya BEYANI ayrı soru — formülden BAĞIMSIZ, sayaçtan.
OLU_DOSYA = ("olaylar_sh110.js", "olaylar_sk105.js")
if "hata" not in R:
    for dosya in OLU_DOSYA:
        sina("BEYAN %s canlı madde taşımıyor (sayaç 0)" % dosya,
             R["dosya_basi"][dosya]["madde"] == 0,
             "sayaç %d — biri maddeyi AÇTI mı?" % R["dosya_basi"][dosya]["madde"])
    # BEYAN sorusunun DİŞİ: sk105'in blok yorumu (dizi İÇİNDE) açılınca sayaç
    #   0 olmaktan çıkmalı — çıkmazsa BEYAN sorusu hiçbir şeyi beklemiyor demektir.
    #   (sh110'un bloğu dizinin DIŞINDA; açılınca dosya sözdizimi bozulur → orada
    #   ÖLÇÜLEMEDİ döner, bu da BEYAN'ı geçmez — ayrıca sınanmadı.)
    with tempfile.TemporaryDirectory() as td:
        m = D._oku(os.path.join("data", "olaylar_sk105.js"))
        b = _blok_bolgeleri(m)
        acik = m
        for a, z in reversed(b):
            if "1835-01-01" in m[a:z]:
                acik = acik[:a] + acik[a + 2:z - 2] + acik[z:]
        p = os.path.join(td, "olaylar_sk105.js")
        io.open(p, "w", encoding="utf-8", newline="").write(acik)
        K = D.kronoloji_say([p])
        sina("BEYAN DİŞİ: sk105 bloğu açılınca sayaç madde 1 (BEYAN öterdi)",
             "hata" not in K and K["madde"] == 1, str(K.get("hata") or K.get("madde")))

# 1006d: blok İÇİNDE `//` satırı — geçiş BİR kez düşülmeli (çift düşme yok).
#   W41 mutasyon sınavında "yorum sınıfı blok içini de düşer" mutantı SAĞ
#   KALMIŞTI: gerçek veride bu biçim yok. Bu vaka onu öldürür.
with tempfile.TemporaryDirectory() as td:
    p = os.path.join(td, "olaylar_blokyorum.js")
    io.open(p, "w", encoding="utf-8", newline="\n").write(
        'window.OLAYLAR_BLOKYORUM = [\n/*\n// { t:"1999-01-05", yer_id:"Q", duygu:["q"] },\n'
        '{ t:"1999-01-06", yer_id:"R" },\n'
        '{ "t": "1999-01-08", "yer_id": "T", "duygu": ["t"] },\n'
        '{ t : "1999-01-09", yer_id : "U", duygu: ["u"] },\n'
        '{ t:"1999-01-10", alt_kronoloji:[{ t:"1999-01-11", yer_id:"V" }] },\n'
        '{ t:"1999-01-12", yer_id:"" },\n'
        '*/\n{ t:"1999-01-07", yer_id:"S", duygu:["s"] }\n];\n')
    K = D.kronoloji_say([p])
    for alan in ("madde", "duygu", "yer_id"):
        dg, kb = olcu_dogru(p, alan, "BLOK")
        sina("BLOK içinde // satırı %s: ölçülen %d = sayaç %s (blok geçişi %d)"
             % (alan, dg, K.get(alan), kb), "hata" not in K and dg == K[alan])

# 1006d: `_blok_bolgeleri` birim soruları — dizge ve `//` içindeki `/*` blok AÇMAZ
for ad, metin, beklenen in (
        ("gerçek blok", 'a /* x */ b', 1),
        ("dizge içinde /*", 'k:"a/*b", d:"c*/d"', 0),
        ("https:// sonrası /*", 'k:"https://x" // not /* değil\nb', 0),
        ("kaçışlı tırnak sonrası blok", 'd:"a\\"b" /* y */', 1),
        ("kapanmamış blok dosya sonuna kadar", 'a /* x', 1)):
    sina("BLOK birim: %s → %d aralık" % (ad, beklenen),
         len(_blok_bolgeleri(metin)) == beklenen, str(_blok_bolgeleri(metin)))

# ── YAPAY MADDE — yüksek riskli dosyalar büyüyünce sınav YANLIŞ ÖTMEMELİ ───
# (DALGA8 sınavı: olaylar.js ve ek8'e hem çıplak hem tırnaklı biçimde birer
#  madde eklenir; ölçülen doğru ile node sayacı yine eşit olmalı. Eski sabit
#  — 81/73 · 35/8/16 — aynı kopyada BAYATLAR: sabitin kırılganlığının kanıtı.)
ESKI_SABIT = {("olaylar.js", "madde"): 81, ("olaylar.js", "yer_id"): 73,
              ("olaylar_ek8.js", "madde"): 35, ("olaylar_ek8.js", "duygu"): 8,
              ("olaylar_ek8.js", "yer_id"): 16,
              ("olaylar_kamerika.js", "madde"): 11, ("olaylar_kamerika.js", "duygu"): 11,
              ("olaylar_kamerika.js", "yer_id"): 11,
              ("olaylar_ek21.js", "duygu"): 4, ("olaylar_ek22.js", "duygu"): 1,
              # 1006d: eski SH110/SK105 sabitleri — yapay maddeyle BAYATLAMALI
              ("olaylar_sh110.js", "madde"): 0, ("olaylar_sh110.js", "duygu"): 0,
              ("olaylar_sh110.js", "yer_id"): 0,
              ("olaylar_sk105.js", "madde"): 0, ("olaylar_sk105.js", "duygu"): 0,
              ("olaylar_sk105.js", "yer_id"): 0}
# DALGA9: kamerika · ek21 · ek22 aynı yönteme alındı; yapay maddeye ÜÇÜNCÜ biçim
# (boşluklu çıplak: `t : "…"` · `yer_id : "…"` · `duygu: […]`) eklendi — her
# dosya her biçimi görür.
YAPAY = ('{ t:"1999-01-01", b:"YAPAY çıplak", yer_id:"X", duygu:["x"] },\n'
         '{ "t": "1999-01-02", "b": "YAPAY tırnaklı", "yer_id": "Y", "duygu": ["y"] },\n'
         '{ t : "1999-01-03", b:"YAPAY boşluklu", yer_id : "Z", duygu: ["z"] },\n'
         # 1006d: DÖRDÜNCÜ biçim — blok yorumlu madde SAYILMAMALI (her dosyada)
         '/* { t:"1999-01-04", b:"YAPAY blokta", yer_id:"W", duygu:["w"] }, */\n')
YAPAY_DOSYA = (("olaylar.js", "OLAYLAR", "ALT"), ("olaylar_ek8.js", "OLAYLAR_EK8", "JSON"),
               ("olaylar_kamerika.js", "OLAYLAR_KAMERIKA", "JSON"),
               ("olaylar_ek21.js", "OLAYLAR_EK21", "BOSLUK"),
               ("olaylar_ek22.js", "OLAYLAR_EK22", "BOSLUK"),
               ("olaylar_sh110.js", "OLAYLAR_SH110", "BLOK"),
               ("olaylar_sk105.js", "OLAYLAR_SK105", "BLOK"))
import tempfile
with tempfile.TemporaryDirectory() as td:
    for dosya, degisken, kural in YAPAY_DOSYA:
        metin = D._oku(os.path.join("data", dosya))
        m = re.search(r"window\.%s\s*=\s*\[[^\n]*\n" % degisken, metin)
        kopya = os.path.join(td, dosya)
        io.open(kopya, "w", encoding="utf-8", newline="").write(
            metin[:m.end()] + YAPAY + metin[m.end():])
        K = D.kronoloji_say([kopya])
        sina("YAPAY %s ölçülebildi" % dosya, "hata" not in K, str(K.get("hata")))
        for (d, alan), sabit in ESKI_SABIT.items():
            if d != dosya or "hata" in K:
                continue
            dogru, _ = olcu_dogru(kopya, alan, kural)
            sina("YAPAY %s %s: ölçülen doğru %d = sayaç %d" % (dosya, alan, dogru, K[alan]),
                 dogru == K[alan])
            sina("YAPAY %s %s: eski sabit %d BAYATLAR (≠ %d)" % (dosya, alan, sabit, K[alan]),
                 sabit != K[alan])

# ── YÖN 1 + 2: sentetik eşler ─────────────────────────────────────────────
SENTETIK = {
    "olaylar_s1.js": ('window.OLAYLAR_S1 = [\n'
                      '// { t:"1500-01-01", duygu:["x"], yer_id:"A", vefat_id:"v" },\n'
                      '/* { t:"1501-01-01", yer_id:"B" } */\n'
                      '{ t:"1502-01-01", d:"bkz yer_id: ve vefat_id:", '
                      'k:"https://a.b//c", yer_id:"", duygu: ["😔"],\n'
                      '  alt_kronoloji:[{ t:"1502-02-02", b:"a", yer_id:"C", kaynak:"k" }] },\n'
                      '{\n  t: "1503-01-01",\n  yer_id: "D", vefat_id: "w"\n},\n'
                      '{ "t": "1504-01-01", "duygu": [], "yer_id": "E" }\n];\n'),
}
BEKLENEN = {"madde": 3, "duygu": 2, "yer_id": 2, "vefat_id": 1, "alt_adim": 1,
            "yer_id_bos": 1}
with tempfile.TemporaryDirectory() as td:
    ps = []
    for ad, metin in SENTETIK.items():
        p = os.path.join(td, ad)
        io.open(p, "w", encoding="utf-8", newline="\n").write(metin)
        ps.append(p)
    S = D.kronoloji_say(ps)
    sina("sentetik ölçülebildi", "hata" not in S, str(S.get("hata")))
    for alan, b in BEKLENEN.items():
        sina("YÖN1 sentetik %s = %d" % (alan, b), S.get(alan) == b,
             "yeni %s" % S.get(alan))
        if alan in ESKI:
            sina("YÖN2 eski regex sentetik %s ≠ %d" % (alan, b),
                 eski_say(ps[0], alan) != b, "eski %d" % eski_say(ps[0], alan))

    # ── 1006b: "boş yer_id: N" — N SABİT DEĞİL, veriyle değişir ──────────
    # (genel koordinatör şartı, 5 Ekim 2026: 1629 kabul, fark ADIYLA görünür)
    for n_bos in (0, 3, 5):
        q = os.path.join(td, "olaylar_bos%d.js" % n_bos)
        io.open(q, "w", encoding="utf-8", newline="\n").write(
            "window.OLAYLAR_BOS = [\n"
            + "".join('{ t:"16%02d-01-01", yer_id:"" },\n' % i for i in range(n_bos))
            + '{ t:"1700-01-01", yer_id:"X" }\n];\n')
        B = D.kronoloji_say([q])
        satir = D.kronoloji_satiri(B)
        sina("1006b N değişir: %d boş yer_id → '(boş yer_id: %d)'" % (n_bos, n_bos),
             "hata" not in B and B["yer_id_bos"] == n_bos
             and "(boş yer_id: %d)" % n_bos in satir and B["yer_id"] == 1, satir)

    # ── YÖN 3: ölçülemeyen durum ─────────────────────────────────────────
    bozuk = os.path.join(td, "olaylar_bozuk.js")
    io.open(bozuk, "w", encoding="utf-8").write('window.OLAYLAR_B = [ { t:"1500" ,, ];')
    yabanci = os.path.join(td, "olaylar_yabanci.js")
    io.open(yabanci, "w", encoding="utf-8").write('window.BASKA = [ { t:"1500-01-01" } ];')
    for ad, ds in [("sözdizimi bozuk dosya", ps + [bozuk]),
                   ("OLAYLAR* dizisi olmayan dosya", ps + [yabanci]),
                   ("olmayan dosya", ps + [os.path.join(td, "olaylar_yok.js")]),
                   ("boş dosya listesi", [])]:
        H = D.kronoloji_say(ds)
        satir = D.kronoloji_satiri(H)
        sina("YÖN3 %s → ÖLÇÜLEMEDİ" % ad,
             "hata" in H and "ÖLÇÜLEMEDİ" in satir and not re.search(r"\*\*\d", satir)
             and "boş yer_id" not in satir,
             satir[:120])

# kesik / bozuk node çıktısı ve node yokluğu — subprocess taklidi
class _C:
    def __init__(s, rc, so, se=b""):
        s.returncode, s.stdout, s.stderr = rc, so, se
_gercek_run = D.subprocess.run
for ad, sahte in [
        ("kesik JSON çıktısı", lambda *a, **k: _C(0, b'{"dosya": 75, "madde": 17')),
        ("node sıfırdan farklı çıkış", lambda *a, **k: _C(1, b"", b"SyntaxError")),
        ("eksik dosya sayımı", lambda *a, **k: _C(0, json.dumps(
            {"dosya": 1, "madde": 5, "duygu": 0, "yer_id": 0, "vefat_id": 0}).encode())),
        ("alan eksik (yer_id_bos yok)", lambda *a, **k: _C(0, json.dumps(
            {"dosya": 2, "madde": 5, "duygu": 0, "yer_id": 0, "vefat_id": 0}).encode())),
        ("node bulunamadı", lambda *a, **k: (_ for _ in ()).throw(FileNotFoundError("node")))]:
    D.subprocess.run = sahte
    try:
        H = D.kronoloji_say(["data/olaylar.js", "data/olaylar_ek2.js"])
    finally:
        D.subprocess.run = _gercek_run
    satir = D.kronoloji_satiri(H)
    sina("YÖN3 %s → ÖLÇÜLEMEDİ" % ad,
         "hata" in H and "ÖLÇÜLEMEDİ" in satir and not re.search(r"\*\*\d", satir)
             and "boş yer_id" not in satir,
         satir[:120])

# 1006b: gerçek veride basılan N = sayacın yer_id_bos'u (sabit DEĞİL)
T = D.kronoloji_say()
sina("1006b gerçek veri: satırda '(boş yer_id: %s)'" % T.get("yer_id_bos"),
     "hata" not in T and "(boş yer_id: %d)" % T["yer_id_bos"] in D.kronoloji_satiri(T),
     str(T.get("hata")))

out.write("SINAV %d/%d\n" % (gecti, toplam))
raise SystemExit(0 if gecti == toplam else 1)
