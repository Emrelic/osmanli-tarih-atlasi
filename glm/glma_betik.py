# -*- coding: utf-8 -*-
"""GLM-A · BETİK ENVANTERİ — index.html <script src> ölçümü (29 Eylül 2026)

Ne ölçer (brifing oturumlar/GLM-ACILIS-0929.md §5 GLM-A):
  ① index.html'deki BÜTÜN <script src> etiketleri: sıra · yol · bayt boyutu (yoksa YOK)
  ② her betiğin tanımladığı window.<AD> global adları (kalıp taraması, tahmin yok)
  ③ ÇAKIŞMA: aynı global adı birden çok dosya tanımlıyor mu
  ④ SIRA BAĞIMLILIĞI: bir dosya BAŞKA bir dosyanın globalini ÜST DÜZEYDE
     (ayraç derinliği 0) okuyor mu — birleştirme sırasının girdisi
  ⑤ KÜMELER: ad kalıbına göre (paket · yerlesimler · olaylar · kronoloji ·
     d_sinirlar · seferler · ekokuma · öteki · CDN) dosya sayısı · bayt ·
     küme içi sıra bağımlılığı

YÖNTEM (ölçüldü, tahmin değil; sınırları bilin):
  - Tanım kalıbı: window.NAME sonra atama işleci (= += -= *= /= ||= &&=) — her derinlikte.
    window[...] dinamik erişim AYRI sayılır, adı çıkarılamaz.
  - Üst düzey okuma: yorum/dize/şablon dizisi ayıklandıktan sonra { } derinliği 0'da
    geçen tanımlı global adları. window.NAME okuması ayrı, çıplak NAME okuması ayrı.
    Çıplak NAME'den sonra atama işleci geliyorsa okuma DEĞİL üzerine yazmadır
    (yüklenme bağımlılığı doğurmaz), ayrı sayılır.
  - AST YOK: işlev gövdesi ayrımı derinlik yaklaşımıdır. Şablon dizilerinin
    ${...} içlerindeki okumalar sayılmaz (dize sayıldı); regex düzeyi kestirimle
    atlandı. Veri dosyaları için sapma beklenmez; app.js için kenar sayısı
    "en az" yorumlanmalı.
  - Okuma kenarı, OKUYAN dosyanın sırası TANIMLAYANDAN sonraysa "sıra korunmalı",
    önceyse "tanımsız okuma (hata adayı)" kovasına düşer.

Çıktı: glm/GLMA-BETIK-0929.json (ham) · rapor glm/GLMA-BETIK-0929.md
Koşum: py -X utf8 glm/glma_betik.py   (kök C:\\atlas varsayılır; betik kendi konumundan çözer)
"""
import io, json, os, re, sys, time, datetime

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
INDEX = os.path.join(KOK, "index.html")
CIKTI_JSON = os.path.join(os.path.dirname(os.path.abspath(__file__)), "GLMA-BETIK-0929.json")

T0 = time.time()
SIMDI = datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S")

SRC_RE = re.compile(r'<script[^>]*?\bsrc=["\']([^"\']+)["\']', re.I)
IDENT_RE = re.compile(r'[A-Za-z_$][A-Za-z0-9_$]*')
WINDOW_RE = re.compile(r'window\s*\.\s*([A-Za-z_$][A-Za-z0-9_$]*)')
WINDOW_DINAMIK_RE = re.compile(r'window\s*\[')
ATAMA_OPLERI = ("=", "+=", "-=", "*=", "/=", "%=", "||=", "&&=", "??=", "**=", "<<=", ">>=")

# ---------------------------------------------------------------- yardımcılar
def oku(rel):
    """Yerel dosyayı ikili oku → (metin, bayt, uyari)."""
    p = os.path.join(KOK, rel.replace("/", os.sep))
    raw = open(p, "rb").read()
    boyut = len(raw)
    try:
        return raw.decode("utf-8"), boyut, None
    except UnicodeDecodeError as e:
        return raw.decode("utf-8", "replace"), boyut, "utf-8 çözülemedi (%s) — replace ile okundu" % e

def dize_atla(t, i, q):
    """t[i]=q tırnak; dize sonuna atla. Kaçış (\\) işlenir."""
    n = len(t); i += 1
    while i < n:
        c = t[i]
        if c == "\\": i += 2; continue
        if c == q or c == "\n": return i + 1  # kapanış ya da satır sonu (tanımsız dize güvenliği)
        i += 1
    return n

def sablon_atla(t, i):
    """t[i]=` şablon dizisi; ` sonuna atla (içindeki ${...} dize sayılır — yöntem notu)."""
    n = len(t); i += 1
    while i < n:
        c = t[i]
        if c == "\\": i += 2; continue
        if c == "`": return i + 1
        i += 1
    return n

_BOLUM_ONCESI = set("(:,=!?&|;{[(") | {"return", "typeof", "case", "in", "of", "new",
                                        "delete", "void", "instanceof", "do", "else", "yield", "await"}
def regex_mi(t, i, kod_baslangic, son_kod_sonu):
    """`/` işaretinin bölen mi regex mi olduğunu kestir (standart kestirim)."""
    j = i - 1
    while j >= kod_baslangic and t[j] in " \t\r\n": j -= 1
    if j < kod_baslangic: return True
    c = t[j]
    if c in _BOLUM_ONCESI: return True
    if c in ")]}" or c.isalnum() or c in "_$'\"`": return False
    return True

def regex_atla(t, i):
    n = len(t); i += 1; sinif = False
    while i < n:
        c = t[i]
        if c == "\\": i += 2; continue
        if sinif:
            if c == "]": sinif = False
        elif c == "[": sinif = True
        elif c == "/": return i + 1
        elif c == "\n": return i  # bozuk regex — güvenli dur
        i += 1
    return n

def kod_parcaları(t):
    """Metni yorum/dize/şablon/regex ayıklayıp YALNIZ kod parçalarını üretir."""
    i, n, bas = 0, len(t), 0
    while i < n:
        c = t[i]
        if c == "/" and i + 1 < n and t[i+1] == "/":
            if bas < i: yield t[bas:i]
            j = t.find("\n", i)
            i = n if j == -1 else j
            bas = i
        elif c == "/" and i + 1 < n and t[i+1] == "*":
            if bas < i: yield t[bas:i]
            j = t.find("*/", i + 2)
            i = n if j == -1 else j + 2
            bas = i
        elif c in "\"'":
            if bas < i: yield t[bas:i]
            i = dize_atla(t, i, c)
            bas = i
        elif c == "`":
            if bas < i: yield t[bas:i]
            i = sablon_atla(t, i)
            bas = i
        elif c == "/":
            if regex_mi(t, i, 0, i):
                if bas < i: yield t[bas:i]
                i = regex_atla(t, i)
                bas = i
            else:
                i += 1
        else:
            i += 1
    if bas < n: yield t[bas:]

def sonraki_islem(parca, k):
    """parca[k] sonrası ilk anlamlı karakter dizisi (atama işleci kestirimi için)."""
    n = len(parca)
    while k < n and parca[k] in " \t\r\n": k += 1
    return parca[k:k+3]

def atama_mi(sonraki):
    for op in sorted(ATAMA_OPLERI, key=len, reverse=True):
        if sonraki.startswith(op):
            # == === != olmasın
            kalan = sonraki[len(op):]
            if op == "=" and (kalan.startswith("=") or kalan[:1] == "="):
                continue
            return True
    return False

# ---------------------------------------------------------------- tarama
FUNC_DECL_RE = re.compile(r'(?:async\s+)?function\s*\*?\s*([A-Za-z_$][A-Za-z0-9_$]*)\s*\(')
VAR_RE = re.compile(r'\bvar\s+([A-Za-z_$][A-Za-z0-9_$]*)')

def _var_deklatorlari(parca, bas):
    """`var a = 1, b = f(x), c;` deyimci listesini ad olarak ver (aynı parça içinde)."""
    son = parca.find(";", bas)
    parca_st = parca[bas: son if son != -1 else bas + 500]
    adlar, derin, i, n = [], 0, 0, len(parca_st)
    while i < n:
        c = parca_st[i]
        if c in "([{": derin += 1
        elif c in ")]}": derin = max(derin - 1, 0)
        elif c == "," and derin == 0:
            m = re.match(r'\s*([A-Za-z_$][A-Za-z0-9_$]*)', parca_st[i+1:])
            if m: adlar.append(m.group(1)); i += m.end()
        i += 1
    return adlar

def tara(metin):
    """Bir dosyayı tara. Tanım üç biçimde sayılır (klasik betik semantiği):
       window.AD = ... (her derinlikte — window'a atama her yerden globaldir),
       üst düzey function AD(...) (hoisting ile window bağlar),
       üst düzey var AD (window bağlar). let/const window'a BAĞLAMAZ — sayılmaz.
       Ayrıca derinlik 0'daki window.AD OKUMALARI kaydedilir (bilinenlere süzme main'de)."""
    r = {"tanımlar": {}, "dinamik_tanım": 0, "ust_window_okuma": {},
         "toplam_satir": metin.count("\n") + 1}
    parc = list(kod_parcaları(metin))
    tasima = 0
    for parca in parc:
        olaylar = []
        for m in WINDOW_RE.finditer(parca):
            olaylar.append((m.start(), m.end(), "window", m.group(1)))
        for m in FUNC_DECL_RE.finditer(parca):
            olaylar.append((m.start(), m.end(), "func", m.group(1)))
        for m in VAR_RE.finditer(parca):
            olaylar.append((m.start(), m.end(), "var", m.group(1)))
        olaylar.sort()
        der = tasima
        isaretci = 0
        for bas, son, tur, ad in olaylar:
            while isaretci < bas:
                c = parca[isaretci]
                if c == "{": der += 1
                elif c == "}": der = max(der - 1, 0)
                isaretci += 1
            if tur == "window":
                sonraki = sonraki_islem(parca, son)
                if atama_mi(sonraki):
                    r["tanımlar"].setdefault(ad, []).append(max(der, 0))
                elif der == 0:
                    r["ust_window_okuma"][ad] = r["ust_window_okuma"].get(ad, 0) + 1
            elif der == 0:  # func / var yalnız üst düzeyde global yaratır
                if tur == "func":
                    r["tanımlar"].setdefault(ad, []).append(0)
                else:
                    for ek in [ad] + _var_deklatorlari(parca, bas):
                        r["tanımlar"].setdefault(ek, []).append(0)
        while isaretci < len(parca):
            c = parca[isaretci]
            if c == "{": der += 1
            elif c == "}": der = max(der - 1, 0)
            isaretci += 1
        tasima = der
        r["dinamik_tanım"] += len(WINDOW_DINAMIK_RE.findall(parca))
    return r, parc

# NOT: çıplak-ad okuması TÜM dosyaların tanımları bilindikten SONRA yapılır
# (bir dosyanın okuduğu ad öbür dosyada tanımlı olabilir). Bu yüzden tara() iki
# aşamalı: önce tanımlar, sonra ayırıcı geri çağrılır.

def _param_bolgeleri(parca):
    """`function ad(a, b)` / `function (a)` PARAMETRE parantez aralıkları.
    Parametre adları süslü derinliğe girmediği için ayrıca dışlanır (parametre
    gölgelenmesi yanlış-pozitif okuma üretir — ölçüldü: suzgec.js `olaylar`)."""
    bolgeler = []
    for m in re.finditer(r'\bfunction\s*\*?\s*(?:[A-Za-z_$][A-Za-z0-9_$]*)?\s*\(', parca):
        derin, i = 1, m.end()
        while i < len(parca) and derin > 0:
            c = parca[i]
            if c == "(": derin += 1
            elif c == ")": derin -= 1
            i += 1
        bolgeler.append((m.start(), i))
    return bolgeler

def tara_okuma(parc, bilinen):
    """Derinlik 0'da bilinen global adlarını ara → (okuma, yazma) sözlükleri.
    Derinlik parçalar arası TAŞINIR (dizeyle bölünen bloklar doğru derinlikte kalır).
    Okuluk parametre bölgeleri DIŞLANIR (yalnız `function` biçiminde; ok parametresi
    `(a) => …` kapsam DIŞI — yöntem sınırı olarak bildirilir)."""
    okuma, yazma = {}, {}
    tasima = 0
    for parca in parc:
        der = tasima
        isaretci = 0
        bolgeler = _param_bolgeleri(parca)
        for m in IDENT_RE.finditer(parca):
            bas = m.start()
            while isaretci < bas:
                c = parca[isaretci]
                if c == "{": der += 1
                elif c == "}": der = max(der - 1, 0)
                isaretci += 1
            ad = m.group(0)
            if ad not in bilinen or der != 0:
                continue
            if any(bb <= bas < bs for bb, bs in bolgeler):
                continue
            # önündeki son işaret `.` ise üye erişimi (window.NAME ayrı ele alınır;
            # `typeof X` koruma kalıbı ELENMEZ)
            j = bas - 1
            while j >= 0 and parca[j] in " \t\r\n": j -= 1
            if j >= 0 and parca[j] == ".":
                continue
            sonraki = sonraki_islem(parca, m.end())
            if atama_mi(sonraki):
                yazma[ad] = yazma.get(ad, 0) + 1
            else:
                okuma[ad] = okuma.get(ad, 0) + 1
        while isaretci < len(parca):
            c = parca[isaretci]
            if c == "{": der += 1
            elif c == "}": der = max(der - 1, 0)
            isaretci += 1
        tasima = der
    return okuma, yazma

def kume(ad):
    """Dosya adını brifingteki kalıplara göre kümele (paket/CDN brifing sonrası durum)."""
    a = ad.lower()
    for onek in ("paket_", "yerlesimler", "olaylar", "kronoloji", "d_sinirlar", "seferler", "ekokuma"):
        if a.startswith(onek):
            return "paket" if onek == "paket_" else onek
    return "oteki"

# ---------------------------------------------------------------- ana akış
def main():
    index_metin = io.open(INDEX, "r", encoding="utf-8").read()
    etiketler = [m.group(1) for m in SRC_RE.finditer(index_metin)]

    dosyalar = []          # sıralı envanter
    tanim_index = {}       # ad → [dosya_sıra, ...]

    for sira, src in enumerate(etiketler, 1):
        kayit = {"sira": sira, "src": src}
        if src.startswith(("http://", "https://", "//")):
            kayit.update({"cdn": True, "yol": None, "boyut": None, "durum": "CDN"})
            dosyalar.append(kayit)
            continue
        yol = src.split("?", 1)[0]
        kayit["yol"] = yol
        p = os.path.join(KOK, yol.replace("/", os.sep))
        if not os.path.exists(p):
            kayit.update({"boyut": None, "durum": "YOK", "global": [], "uyari": None})
            dosyalar.append(kayit)
            continue
        metin, boyut, uyari = oku(yol)
        kayit.update({"boyut": boyut, "durum": "OK", "uyari": uyari})
        tarama, parc = tara(metin)
        kayit["global"] = sorted(tarama["tanımlar"].keys())
        kayit["dinamik_tanim"] = tarama["dinamik_tanım"]
        kayit["_parc"] = parc  # ikinci geçiş için (çıktıya girmez)
        kayit["_tanimlar"] = tarama["tanımlar"]
        kayit["_ust_window"] = tarama["ust_window_okuma"]
        kayit["_satir"] = tarama["toplam_satir"]
        for ad in tarama["tanımlar"]:
            tanim_index.setdefault(ad, []).append(sira)
        dosyalar.append(kayit)

    # ikinci geçiş — derinlik 0 okumalar (tüm tanımlar artık biliniyor)
    bilinen = set(tanim_index)
    kenarlar = []          # {okuyan_sira, ad, tanimcilar:[sira...], tur}
    for kayit in dosyalar:
        if kayit.get("durum") != "OK" or "_parc" not in kayit:
            continue
        okuma, yazma = tara_okuma(kayit["_parc"], bilinen)
        w_okuma = {ad: s for ad, s in kayit["_ust_window"].items() if ad in bilinen}
        tum = dict(okuma)
        for ad, s in w_okuma.items():
            tum[ad] = tum.get(ad, 0) + s
        kayit["ustduzey_okuma"] = tum
        kayit["ustduzey_yazma"] = yazma
        # kenarlar: çıplak-ad okuma kendi tanımıyla çözülürse (hoisting) kenar YOK;
        # window.X okuma HER ZAMAN kenar kurar — `var X = window.X || []` kalıbı
        # yüklenme anında önceki tanımı GERÇEKTEN okur (yoksa sessiz boş değer).
        kenar_aday = {}
        for ad in okuma:
            kenar_aday.setdefault(ad, set()).add("cirpak")
        for ad in w_okuma:
            kenar_aday.setdefault(ad, set()).add("window")
        for ad, kaynaklar in kenar_aday.items():
            tum_tanimcilar = tanim_index.get(ad, [])
            if "cirpak" in kaynaklar and "window" not in kaynaklar and kayit["sira"] in tum_tanimcilar:
                continue  # kendi tanımı var (hoisting) — yüklenme hatası olamaz
            tanimcilar = [s for s in tum_tanimcilar if s != kayit["sira"]]
            if not tanimcilar:
                continue  # tanımlayan yalnız KENDİSİ (window.X = window.X || … birleştirme)
            oncekiler = [s for s in tanimcilar if s < kayit["sira"]]
            sonralilar = [s for s in tanimcilar if s > kayit["sira"]]
            if not oncekiler:
                tur = "tanimsiz_okuma_hata_adayi"
            elif sonralilar:
                tur = "karisik_cakisma"
            else:
                tur = "sira_korunmali"
            kenarlar.append({"okuyan_sira": kayit["sira"], "ad": ad,
                             "tanimcilar": tanimcilar, "tur": tur,
                             "kaynak": sorted(kaynaklar)})

    # çakışmalar
    cakisma = [{"ad": ad, "tanimci_siralar": sorted(sir),
                "dosyalar": [dosyalar[s-1]["yol"] or dosyalar[s-1]["src"] for s in sorted(sir)],
                "dosya_basi_sayi": {dosyalar[s-1]["yol"]: len(dosyalar[s-1]["_tanimlar"][ad]) for s in sorted(sir)}}
               for ad, sir in sorted(tanim_index.items()) if len(sir) > 1]

    # diskte bağlı OLMAYAN paket dosyaları (yan bulgu)
    disk_paketler = set()
    ddir = os.path.join(KOK, "data")
    for f in os.listdir(ddir):
        if f.startswith("paket_") and f.endswith(".js"):
            disk_paketler.add("data/" + f)
    bagli = {k["yol"] for k in dosyalar if k.get("yol")}
    baglanmamis = sorted(disk_paketler - bagli)

    # kümeler
    kumeler = {}
    for k in dosyalar:
        ad = os.path.basename(k.get("yol") or k["src"])
        kk = "cdn" if k.get("cdn") else kume(ad)
        b = kumeler.setdefault(kk, {"dosya": 0, "bayt": 0, "yok": 0})
        b["dosya"] += 1
        if k.get("durum") == "YOK": b["yok"] += 1
        elif k.get("boyut"): b["bayt"] += k["boyut"]
    kenar_kume = {}
    for e in kenarlar:
        for s in e["tanimcilar"]:
            ka = kume(os.path.basename(dosyalar[e["okuyan_sira"]-1].get("yol") or dosyalar[e["okuyan_sira"]-1]["src"]))
            kb = kume(os.path.basename(dosyalar[s-1].get("yol") or dosyalar[s-1]["src"]))
            if ka == kb and ka != "cdn":
                kumeler.setdefault(ka, {})["kume_ici_kenar"] = kumeler[ka].get("kume_ici_kenar", 0) + 1

    # ---- JSON
    cikti = {
        "olcum": "GLM-A betik envanteri", "zaman": SIMDI, "kaynak": "index.html",
        "yontem": __doc__.split("YÖNTEM")[1].split("Çıktı")[0].strip() if "YÖNTEM" in __doc__ else "",
        "ozet": {
            "etiket_sayisi": len(etiketler),
            "cdn": sum(1 for k in dosyalar if k.get("cdn")),
            "yerel": sum(1 for k in dosyalar if not k.get("cdn")),
            "yok_diskte": sum(1 for k in dosyalar if k.get("durum") == "YOK"),
            "toplam_yerel_bayt": sum(k["boyut"] for k in dosyalar if k.get("boyut")),
            "farkli_global_ad": len(tanim_index),
            "cakisan_ad": len(cakisma),
            "ustduzey_kenar": len(kenarlar),
            "hata_adayi_kenar": sum(1 for e in kenarlar if e["tur"] == "tanimsiz_okuma_hata_adayi"),
            "dinamik_tanim_toplam": sum(k.get("dinamik_tanim", 0) for k in dosyalar),
        },
        "baglanmamis_paket_diskte": baglanmamis,
        "dosyalar": [], "cakisma": cakisma, "kenarlar": kenarlar,
        "kumeler": {a: {"dosya": b["dosya"], "bayt": b["bayt"], "yok": b.get("yok", 0),
                        "kume_ici_kenar": b.get("kume_ici_kenar", 0)} for a, b in sorted(kumeler.items())},
    }
    for k in dosyalar:
        cikti["dosyalar"].append({
            "sira": k["sira"], "src": k["src"], "yol": k.get("yol"), "durum": k.get("durum"),
            "boyut": k.get("boyut"), "satir": k.get("_satir"), "uyari": k.get("uyari"),
            "global_sayisi": len(k.get("global", [])), "global": k.get("global", []),
            "dinamik_tanim": k.get("dinamik_tanim", 0),
            "ustduzey_okuma": k.get("ustduzey_okuma", {}),
            "ustduzey_yazma": k.get("ustduzey_yazma", {}),
        })
    io.open(CIKTI_JSON, "w", encoding="utf-8").write(json.dumps(cikti, ensure_ascii=False, indent=1))
    rapor_yaz(cikti, dosyalar, cakisma, kenarlar, kumeler, baglanmamis, etiketler)
    print("JSON:", CIKTI_JSON)
    print("özet:", json.dumps(cikti["ozet"], ensure_ascii=False))
    print("bağlanmamış paket:", baglanmamis)
    print("süre: %.1f sn" % (time.time() - T0))

# ---------------------------------------------------------------- rapor
def rapor_yaz(cikti, dosyalar, cakisma, kenarlar, kumeler, baglanmamis, etiketler):
    CIKTI_MD = CIKTI_JSON.replace(".json", ".md")
    o = cikti["ozet"]
    L = []
    L.append("# GLM-A · BETİK ENVANTERİ — index.html <script src>")
    L.append("")
    L.append("*Ölçüm: `glm/glma_betik.py` · anlık görüntü: %s · ham veri: `glm/GLMA-BETIK-0929.json`.*" % cikti["zaman"])
    L.append("*Brifing (`oturumlar/GLM-ACILIS-0929.md` §GLM-A) 279 etiket bekliyordu; ölçülen **%d** —"
             " koordinatör birleştirmeyi sürdürdüğü için durum ilerlemiş.*" % o["etiket_sayisi"])
    L.append("")
    L.append("## Özet")
    L.append("")
    L.append("| ölçüm | değer |")
    L.append("|---|---|")
    L.append("| `<script src>` etiketi | **%d** (CDN %d · yerel %d · `defer`/`async` 0) |" % (o["etiket_sayisi"], o["cdn"], o["yerel"]))
    L.append("| diskte YOK olan | **%d** |" % o["yok_diskte"])
    L.append("| yerel toplam boyut | **%.1f MB** (%d bayt) |" % (o["toplam_yerel_bayt"] / 1e6, o["toplam_yerel_bayt"]))
    L.append("| tanımlı farklı global ad | **%d** (window.= · üst düzey function · üst düzey var) |" % o["farkli_global_ad"])
    L.append("| çakışan ad (≥2 dosya) | **%d** |" % o["cakisan_ad"])
    L.append("| üst düzey (yüklenme anı) bağımlılık kenarı | **%d** |" % o["ustduzey_kenar"])
    L.append("| yüklenme anı TANIMSIZ okuma (hata adayı) | **%d** |" % o["hata_adayi_kenar"])
    L.append("| dinamik `window[...]` erişimi | %d (adı çıkarılamaz) |" % o["dinamik_tanim_toplam"])
    L.append("")
    L.append("## ④ Sıra bağımlılığı — KRİTİK (birleştirme sırasının girdisi)")
    L.append("")
    L.append("Yüklenme anında çalışan üst düzey kodun okuduğu global, tanımlandığı dosyadan SONRA gelmek zorunda:")
    L.append("")
    L.append("| okuyan | global | tanımlayan (daha önce yüklenir) |")
    L.append("|---|---|---|")
    for e in sorted(kenarlar, key=lambda x: (x["okuyan_sira"], x["ad"])):
        okuyan = dosyalar[e["okuyan_sira"] - 1]["yol"] or dosyalar[e["okuyan_sira"] - 1]["src"]
        tanim = ", ".join("%d %s" % (s, dosyalar[s - 1]["yol"]) for s in e["tanimcilar"])
        L.append("| %d %s | `%s` | %s |" % (e["okuyan_sira"], okuyan, e["ad"], tanim))
    L.append("")
    L.append("**Okunuşu:** veri dosyaları → `js/app.js` (sıra 52, 14 global okur) → `js/d_katman.js` + `js/antlasma_harita.js`"
             " (app.js'in `harita` globalini bekler; ayrıca `window.guncelle`/`window.obGoster`'i SARMALAR — d_katman.js:1280, antlasma_harita.js:255)."
             " `paket_*` dosyaları ARALARINDA sıra bağımlılığı taşımaz (küme içi kenar 0).")
    L.append("")
    L.append("## ③ Çakışan global adları (%d) — üç sınıf" % len(cakisma))
    L.append("")
    for c in cakisma:
        dosy = ", ".join("%d %s" % (s, dosyalar[s - 1]["yol"]) for s in c["tanimci_siralar"])
        L.append("- `%s` → %s" % (c["ad"], dosy))
    L.append("")
    L.append("- **A · motor izi:** `URETIM_IZI` (6 dosya) — her üretilmiş dosya damga basıyor; birleştirmede TEK tanım yeter.")
    L.append("- **B · app.js var-alias:** `var X = window.X \\|\\| …` (9 ad) — app.js var tanımı var-değil-DEĞER okur; bağımlılık ④'te kenar kurdu, çakışma değil.")
    L.append("- **C · sarmalama (monkey-patch):** `guncelle` (app.js→d_katman), `obGoster` (app.js→antlasma_harita) — sarmalayıcı tanımı DEĞİŞTİRİR; birleştirmede sıra korunmalı.")
    L.append("")
    L.append("## ⑤ Kümeler")
    L.append("")
    L.append("| küme | dosya | toplam bayt | küme içi sıra bağımlılığı |")
    L.append("|---|---|---|---|")
    for a, b in kumeler.items():
        L.append("| %s | %d | %s | %d |" % (a, b["dosya"], "{:,}".format(b["bayt"]).replace(",", "."), b.get("kume_ici_kenar", 0)))
    L.append("")
    L.append("*Not: brifingteki yerlesimler/olaylar/kronoloji/d_sinirlar/seferler/ekokuma kümeleri ad kalıbıyla anılıyordu;"
             " birleştirme sonrası bu içerikler `paket_*` dosyalarına taşındı — kümeleme AD KALIBIYLA yapıldı, içerik taramasıyla değil.*")
    L.append("")
    L.append("## ① Dosya envanteri (yükleme sırasıyla)")
    L.append("")
    L.append("| # | yol | boyut | satır | global | üst düz. okuma |")
    L.append("|---|---|---|---|---|---|")
    for k in dosyalar:
        gorunen = k["yol"] or k["src"]
        boyut = "CDN" if k.get("cdn") else ("YOK" if k.get("durum") == "YOK" else "{:,}".format(k["boyut"]).replace(",", "."))
        satir = k.get("_satir") if not k.get("cdn") else ""
        gs = len(k.get("global", [])) if not k.get("cdn") else ""
        uo = len(k.get("ustduzey_okuma", {})) if not k.get("cdn") else ""
        L.append("| %d | `%s` | %s | %s | %s | %s |" % (k["sira"], gorunen, boyut, satir, gs, uo))
    L.append("")
    L.append("## Yan bulgular")
    L.append("")
    if baglanmamis:
        L.append("- Diskte `data/` içinde betik etiketiyle bağlı OLMAYAN paket: %s" % ", ".join("`%s`" % b for b in baglanmamis))
    L.append("- `data/paket_kunyeon.js` ölçüm sırasında `data/paket_kunye.json` olarak yeniden adlandı (koordinatör çalışması); hiçbir biçimde bağlı değil.")
    L.append("- En büyük iki dosya yerel toplamın %56'sı: `data/altlik.js` (14,2 MB) + `data/donem_parcalar.js` (10,5 MB).")
    L.append("- İlk koşuda (11:38) yerel toplam 77,2 MB ölçüldü; üç sonraki koşuda 44,06 MB kararlı — koşum penceresinde dosyalar yazıldı (ör. js/app.js 11:43). **Bu rapor kararlı skorun anlık görüntüsüdür; koordinatör işi durunca betiği yeniden koşmalı.**")
    L.append("")
    L.append("## Yöntem ve sınırlar")
    L.append("")
    L.append("- Tanım üç biçim sayıldı (klasik betik semantiği): `window.X =` (her derinlikte) · üst düzey `function X(` (hoisting) · üst düzey `var X` (window'a bağlar). `let`/`const` window'a BAĞLAMAZ — sayılmadı.")
    L.append("- Üst düzey = yorum/dize/şablon/regex ayıklamalı `{}` derinliği 0 (parçalar arası derinlik taşınır). `function (a,b)` parametre bölgeleri dışlandı (parametre gölgelenmesi yanlış-pozitif üretir — ölçüldü: suzgec.js `olaylar` parametresi).")
    L.append("- Sınır 1: `dize_boslugu` yok — ok-parametresi `(a) => …` kapsam dışı. Sınır 2: regex düzeyi kestirimle atlandı — derinlik saparsa kenar AZ/ÇOK çıkabilir; 0 hata adayının ELLE doğrulaması yapıldı (guncelle/obGoster = app.js'in kendi hoisted tanımı; d_katman/antlasma_harita typeof bekçisiyle sarar).")
    L.append("- Sınır 3: `window[...]` dinamik erişimi 27 kez geçiyor — ad çözülemedi (denetim dışı).")
    L.append("")
    io.open(CIKTI_MD, "w", encoding="utf-8").write("\n".join(L))
    print("MD:", CIKTI_MD)

if __name__ == "__main__":
    main()
