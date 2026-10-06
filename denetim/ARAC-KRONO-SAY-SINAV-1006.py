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
    ("olaylar_sh110.js",      "madde",     0, "blok yorumlu ÇÜRÜDÜ maddesi FAZLA"),
    ("olaylar_sh110.js",      "duygu",     0, "blok yorumlu ÇÜRÜDÜ maddesi FAZLA"),
    ("olaylar_sk105.js",      "madde",     0, "blok yorumlu madde FAZLA"),
    ("olaylar_ek8.js",        "madde",   "JSON",  "JSON biçimli tırnaklı anahtar — EKSİK"),
    ("olaylar_ek8.js",        "duygu",   "JSON",  "JSON biçimli tırnaklı anahtar — EKSİK"),
    ("olaylar_ek8.js",        "yer_id",  "JSON",  "JSON biçimli tırnaklı anahtar — EKSİK"),
    ("olaylar_kamerika.js",   "madde",    11, "JSON anahtarı \"t\": — EKSİK"),
    ("olaylar_kamerika.js",   "duygu",    11, "JSON anahtarı — EKSİK"),
    ("olaylar_kamerika.js",   "yer_id",   11, "JSON anahtarı — EKSİK"),
    ("olaylar_ek21.js",       "duygu",     4, "`duygu: [` boşluklu — EKSİK"),
    ("olaylar_ek22.js",       "duygu",     1, "`duygu: [` boşluklu — EKSİK"),
    ("olaylar_p0917taraf.js", "yer_id",   None, "3 × yer_id:\"\" — bağ DEĞİL"),
    ("olaylar_p0063.js",      "yer_id",   None, "1 × yer_id:\"\" — bağ DEĞİL"),
]
# Tırnaklı (JSON biçimli) anahtar karşılıkları — ESKİ regex bunları HİÇ görmez.
JSON_RX = {
    "madde": r'"t"\s*:\s*"\d{4}(?:-\d{2}){0,2}"', "duygu": r'"duygu"\s*:\s*\[',
    "yer_id": r'"yer_id"\s*:', "vefat_id": r'"vefat_id"\s*:'}


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


def olcu_dogru(yol, alan, kural):
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
                − boş `yer_id:""` (yalnız yer_id; boş alan bağ değildir)
    `kural` yalnız hangi sınıfın bu dosyada HÂLÂ var olması gerektiğini söyler
    (YORUM · ALT · JSON · None=boş yer_id); dönen ikinci değer o sınıfın geçişi.
    Sayı verilmişse SABİT döner (düşük riskli dosyalar — gerekçe DALGA8 raporu).
    """
    if not isinstance(kural, (str, type(None))):
        return kural, None
    metin = D._oku(yol)
    eski = len(re.findall(ESKI[alan], metin))
    alt_ar = _alt_bolgeleri(metin)
    satirlar, poz = [], 0
    for l in metin.split("\n"):
        satirlar.append((poz, l))
        poz += len(l) + 1
    yorum = sum(len(re.findall(ESKI[alan], l)) for _, l in satirlar
                if l.lstrip().startswith("//"))
    alt = sum(len(re.findall(ESKI[alan], metin[a:b])) for a, b in alt_ar)
    jsx = JSON_RX[alan] + (r'\s*"[^"]' if alan in ("yer_id", "vefat_id") else "")
    js = sum(1 for p, l in satirlar if not l.lstrip().startswith("//")
             for m in re.finditer(jsx, l)
             if not any(a <= p + m.start() < b for a, b in alt_ar))
    bos = len(re.findall(r'(?<!")yer_id\s*:\s*""', metin)) if alan == "yer_id" else 0
    dogru = eski - yorum - alt + js - bos
    kusur = {"YORUM": yorum, "ALT": alt, "JSON": js, None: bos}[kural]
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
        if kural in ("YORUM", "ALT", "JSON"):
            sina("%s vakası %s %s hâlâ kusur geçişi taşıyor (%d)"
                 % (kural, dosya, alan, kusur), kusur > 0)
        sina("YÖN1 %s %s = %d" % (dosya, alan, dogru), yeni == dogru,
             "yeni %d" % yeni)
        sina("YÖN2 eski regex %s %s ≠ %d (%s)" % (dosya, alan, dogru, sinif),
             eski != dogru, "eski %d — sınav kusuru GÖRMÜYOR" % eski)

# ── YAPAY MADDE — yüksek riskli dosyalar büyüyünce sınav YANLIŞ ÖTMEMELİ ───
# (DALGA8 sınavı: olaylar.js ve ek8'e hem çıplak hem tırnaklı biçimde birer
#  madde eklenir; ölçülen doğru ile node sayacı yine eşit olmalı. Eski sabit
#  — 81/73 · 35/8/16 — aynı kopyada BAYATLAR: sabitin kırılganlığının kanıtı.)
ESKI_SABIT = {("olaylar.js", "madde"): 81, ("olaylar.js", "yer_id"): 73,
              ("olaylar_ek8.js", "madde"): 35, ("olaylar_ek8.js", "duygu"): 8,
              ("olaylar_ek8.js", "yer_id"): 16}
YAPAY = ('{ t:"1999-01-01", b:"YAPAY çıplak", yer_id:"X", duygu:["x"] },\n'
         '{ "t": "1999-01-02", "b": "YAPAY tırnaklı", "yer_id": "Y", "duygu": ["y"] },\n')
import tempfile
with tempfile.TemporaryDirectory() as td:
    for dosya, degisken in (("olaylar.js", "OLAYLAR"), ("olaylar_ek8.js", "OLAYLAR_EK8")):
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
            kural = "ALT" if dosya == "olaylar.js" else "JSON"
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
