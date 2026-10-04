# -*- coding: utf-8 -*-
"""DEVRALMA-DONGU · 4 Ekim 2026 — devralma çizgesinde DÖNGÜ arar. YALNIZ ÖLÇÜM.

Soru: bir yerleşim kaydı `s:`/gün bilgisini KOMŞU kayıttan devraldığını beyan
ediyor ("gün komşudan: X" / "komşu emsali (X)" / "en yakın kayıt «X»" ...).
Bu atıflar yönlü bir çizgedir (A → B = "A, B'den aldı"). Çizgede ÇEVRİM var mı?

🔴 Niçin ayrı ölçüm: "zincir derinliği" bir AĞAÇ varsayar. Döngünün kökü
yoktur; A ⇄ B iki "derinlik 1" gibi görünür ve hiçbirinin kaynağı yoktur.
Vaka: Bosna Dubiçası ⇄ Bosna Brod'u (KASA-ZINCIR-1004).

Okuyucu: `girdi.yukle()` — regex İLE DOSYA OKUNMAZ (`D219`).
Ad çözümü: kayıt adının tamamı + parantez öncesi + parantez içleri + " — "
parçaları, `ARAC-NORMAL-0903.norm` ile. En uzun eşleşme önce.
Çözülemeyen atıf SESSİZCE ATLANMAZ: ÇÖZÜLEMEDİ kovasına düşer ve listelenir.
Birden çok kayda uyan ad BELİRSİZ kovasına düşer ve listelenir.

Çıkış kodu: 1 çevrim VAR · 2 çevrim yok ama ÇÖZÜLEMEDİ/BELİRSİZ atıf var
(ölçülemeyen soru temiz değildir — CLAUDE.md §3) · 0 temiz.

Kullanım: py denetim/ARAC-DEVRALMA-DONGU-1004.py [--json YOL] [--liste N]
"""
import sys, os, re, json, importlib.util
from collections import defaultdict

try:
    sys.stdout.reconfigure(encoding="utf-8", errors="replace")
except Exception:
    pass

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

_spec = importlib.util.spec_from_file_location(
    "arac_normal", os.path.join(KOK, "denetim", "ARAC-NORMAL-0903.py"))
_normal = importlib.util.module_from_spec(_spec)
_spec.loader.exec_module(_normal)
norm = _normal.norm

ALANLAR_KAYIT = ("kaynak", "neden")
ALANLAR_DONEM = ("s", "d", "v", "isg")

# ── Tetikler (norm'lanmış metinde) ────────────────────────────────────────
# HEDEFLİ: hedef adı tetiğin HEMEN ardından gelir → ilk ad hedeftir; o ad
# kaydın KENDİSİ ise kendine atıftır (A→A).
TETIK_HEDEFLI = [
    r"komsudan\s*:",                       # gün komşudan: X · KOMŞUDAN: X
    r"komsu emsali\s*\(",                  # komşu emsali (X, 1538)
    r"emsali\s*\(",
    r"en yakin (?:kayit|komsu)\w*\s*[«\"'(]?",   # en yakın kayıt «X»
    r"zincir\w*\s+",                       # Zincir X'den birebir
    r"gun komsudan\s*",
    r"ankraj\s+",                          # ankraj Van (72 km) — sınır kayıtlarının sözcüğü
]
# GENEL: tümcede devralma eylemi var; tümcedeki bütün adlar hedeftir.
TETIK_GENEL = [
    r"komsudan", r"emsal", r"en yakin (?:kayit|komsu|uc komsu)",
    r"\w['’](?:d|t)(?:a|e)n alin", r"kaydindan", r"dayanak alindi",
    r"devral(?:in|di|an)\w*", r"komsu\w*", r"ankraj",
    r"birebir", r"ile ayni", r"ayni gun", r"ortak gun", r"hizal\w*", r"kardes\w*",
]
# Tetik tek başına devralma DEMEK değildir; şu tümceler devralma DEĞİLDİR
# (komşu kayıttan değil başka bir yerden alınan bilgi) ⇒ DIŞLANIR ve SAYILIR.
DISLA = [
    (r"komsudan degil", "OLUMSUZ («komşudan DEĞİL»)"),
    (r"kademe yamasindan|devraldim", "KADEME (yer_yama_kademe.js / ⚪ DEVRALDIM yoklaması, s: ile ilgisiz)"),
    (r"kunye", "KÜNYE günü (devletler.js f:/t:)"),
    (r"kulliyat|olaylar_|kronoloji_|maddesi(?:nin|nden)? gun", "OLAY günü (külliyat maddesi)"),
    (r"veriden devral", "MEVCUT VERİ (kaydın kendi eski günü)"),
    (r"sinir katmani|\bkd:", "SINIR KATMANI / kd:"),
]
# Zayıf tetikler ancak tümcede bir tarih/zincir sözcüğü varsa devralmadır
ZAYIF = {r"birebir", r"ile ayni", r"ayni gun", r"hizal\w*", r"komsu\w*", r"ortak gun", r"kardes\w*"}
# Kanıt gücü: GÜÇLÜ tetik komşudan almayı AÇIKÇA söyler; ZAYIF tetik yalnız
# eşitlik/hizalama söyler (A, B ile aynı) — yön ve devralma ondan kesin okunmaz.
GUCLU_TETIK = re.compile(r"komsu|emsal|en yakin|alin|kaydindan|dayanak|devral|ankraj")
KOMSU_SINYAL = re.compile(r"komsu|emsal|en yakin|kaydindan|ankraj|\w'(?:d|t)(?:a|e)n alin")
# "zincir Mâku'dan (43 km) … alındı": ablatif ad + aynı tümcede "alındı" (6. koşu: kaçıyordu)
ALINDI = re.compile(r"\balin(?:di|mis|arak|an|dig)\w*")
# "alındı" FETİH de demektir ("Bolayır Gelibolu'dan ÖNCE alındı") — ablatif kuralı
# ancak tümcede veri sözcüğü varsa devralmadır
ALINDI_VERI = re.compile(r"zincir|\bgun|donem|tarih|\bkm\b|kayd|kayit")
OLAY_EKI = re.compile(r"^(?:'?n?[iu]n)?\s+(?:antlasma\w*|baris\w*|savas\w*|muharebe\w*|"
                      r"kusatma\w*|senedi|kongre\w*|konferans\w*|sonrasi)")
ABLATIF = re.compile(r"^'(?:d|t)(?:a|e)n\b")
ONCEKI_HEDEF = re.compile(r"'(?:d|t)(?:a|e)n alin")      # "X'tan alındı": hedef ÖNDEKİ ad
TARIH_SOZ = re.compile(r"\bgun|\btarih|\bzincir|\bdonem|\buc\b|\buclar|\byil\b|\bdesen|"
                       r"alin|kullan|devral|\d{4}-\d\d-\d\d|dayanak|hizal")
# "komşu" geçip devralma olmayanlar: komşu tümcesi bir EYLEM taşımalı
KOMSU_EYLEM = re.compile(r"alin|kullan|devral|dayanak|birebir|ayni|hizal|zincir|desen|emsal|komsudan")

# Tümce ayracı. Nokta ancak önünde İKİ küçük harf varsa cümle sonudur
# ("St. Augustine" bölünmesin — ilk koşuda "günler komşudan: St" kesilmişti).
AYRAC = re.compile(r"\s·\s|\s[-—–]\s|;|\s\|\|\s|(?<=[a-zçğıöşüâîû0-9\)\]\"'»]{2})\.\s+(?=[A-ZÇĞİÖŞÜ0-9\"'(«])|\n")
USTU_CIZILI = re.compile(r"~~.*?~~", re.S)

HARF = "a-z0-9"
# norm'dan sonra sıradan Türkçe sözcükle çakışan takma adlar (ölçüldü: ilk
# koşuda «göre»→Gore, «(bölge)»→4 kayıt). Sessiz değil: AD_DISI olarak basılır.
AD_DISI = {"gore", "bolge", "kale", "kasaba", "koy", "liman", "ada", "vadi", "nehir",
           "merkez", "sehir", "kiyi", "ova", "dag", "gol", "kuzey", "guney", "dogu", "bati",
           "yukari", "asagi", "eski", "yeni", "buyuk", "kucuk", "ic", "dis", "orta",
           # ay adları: «22 Kasım 1914» → Buraydâ (Kasîm) sanılıyordu (3. koşu, 6 tümce)
           "ocak", "subat", "mart", "nisan", "mayis", "haziran", "temmuz", "agustos",
           "eylul", "ekim", "kasim", "aralik",
           # şema/düz sözcük: «tur alanı»→Tûr (Sînâ) · «tahta»→Tahtâ · «his» · «split»
           "tur", "tahta", "his", "split",
           # parantez niteleyicisi: "Katar Yarımadası (iç, dolgu)" → «dolgu» (5. koşu)
           "dolgu",
           # "Nanih Waiya (… kutsal/köken merkezi)" ← «Kutsal Roma» (7. koşu)
           "kutsal", "koken merkezi"}
# "<ad> günü / kaydı / zinciri": komşu KAYDIN kendisine atıf ("Bitiş külliyatın
# Adana günü") — olay maddesi değil. 3. koşuda OLAY dışlaması bunları yutuyordu.
AD_KAYIT = re.compile(r"^(?:'?n?[iu]n)?(?:\s+kendi(?:\s+\w+)?)?\s+(gunu|kaydindan|kaydi\w*|kayitlari\w*|"
                      r"zinciri\w*|deseni\w*|kirilmasi\w*)")
AD_KAYIT_GUCLU = {"gunu", "kaydindan"}
# Genitif/iyelik eki: "Belgrad'ın teslim günü" — ad ÖZNEdir, devralma HEDEFİ değil
GENITIF = re.compile(r"^'(?:n|y)?(?:in|un|i|u|a|e)(?![a-z])")    # norm'lanmış metinde


def takma_adlar(ad, devlet_adlari=frozenset()):
    """Bir kayıt adının aranacak biçimleri (norm'lanmış).

    Parantez içi bir DEVLET adıysa ("Radom (Polonya)", "Córdoba (Arjantin)")
    takma ad sayılmaz — o bir niteleyicidir; 5. koşuda «Polonya günü» → Radom
    kenarı üretmişti."""
    parca = {ad}
    ana = ad.split(" (")[0]
    parca.add(ana)
    for p in re.findall(r"\(([^)]+)\)", ad):
        for q in re.split(r"[,/;]", p):
            if norm(q).strip() not in devlet_adlari:
                parca.add(q)
    for p in re.split(r"\s+[—–-]\s+", ad):
        parca.add(p)
        parca.add(p.split(" (")[0])
    out = set()
    for p in parca:
        n = norm(p).strip(" ,.;:'\"")
        if len(n) >= 3:
            out.add(n)
    return out


def ad_dizini(kayitlar, devlet_adlari=frozenset()):
    dizin = defaultdict(set)
    ana = defaultdict(set)          # takma -> adın ANA biçimi (parantez öncesi) bu olan kayıtlar
    for y in kayitlar:
        for t in takma_adlar(y["ad"], devlet_adlari):
            if t in AD_DISI:
                continue
            dizin[t].add(y["ad"])
        ana[norm(y["ad"].split(" (")[0]).strip()].add(y["ad"])
    # Belirsizlik çözümü TEK kural: takma ad bir kaydın ANA adıysa ve bu tek
    # kayıtsa o kazanır ("kirklareli" → Kırklareli, "Dereköy (Kırklareli)" değil).
    for t, adlar in dizin.items():
        if len(adlar) > 1 and len(ana.get(t, ())) == 1 and ana[t] <= adlar:
            dizin[t] = set(ana[t])
    # en uzun önce — "bosna brod'u" "brod"dan önce yakalansın
    sirali = sorted(dizin, key=len, reverse=True)
    desen = re.compile(
        r"(?<![" + HARF + r"])(" + "|".join(re.escape(s) for s in sirali) + r")(?![" + HARF + r"])")
    return dizin, desen


def adlari_bul(metin, dizin, desen):
    """Tümcedeki ad eşleşmeleri: [(konum, takma, {kayit adlari}, bitis)], çakışmasız.
    Ardından olay sözcüğü gelen ad YER değil OLAYdır ("Portsmouth antlaşması",
    "Mohaç sonrası") ve atlanır — 7. koşuda Portsmouth (New Hampshire)'a 6 kenar."""
    return [(m.start(), m.group(1), dizin[m.group(1)], m.end()) for m in desen.finditer(metin)
            if not OLAY_EKI.match(metin[m.end():])]


def metinler(y):
    for a in ALANLAR_KAYIT:
        if y.get(a):
            yield a, y[a]
    for k in ALANLAR_DONEM:
        for i, p in enumerate(y.get(k) or []):
            if p.get("kaynak"):
                yield f"{k}[{i}]", p["kaynak"]


def _adlar(t, sahibi, dizin, desen):
    """Tümcedeki (sahibi DIŞINDAKİ) kayıt adları → (hedefler, belirsiz)."""
    hedefler, belirsiz = set(), []
    for _, takma, adlar, _ in adlari_bul(t, dizin, desen):
        if sahibi in adlar:
            continue           # kaydın kendi adı (kendine atıf ayrıca sorulur)
        if len(adlar) > 1:
            belirsiz.append((takma, sorted(adlar)))
            continue
        hedefler |= adlar
    return hedefler, belirsiz


def tumce_coz(ham, sahibi, dizin, desen):
    """Bir tümceden devralma hedeflerini çıkarır.

    Dönüş: None (tümce devralma DEĞİL) ya da dict(tetik, guc, hedefler=set,
        kendine=bool, belirsiz=[(takma, adlar)], dislandi=str|None)
    """
    t = norm(ham)
    # Dışlama, tümcede komşu İŞARETİ varsa uygulanmaz (ilk koşuda "Zincir Viyana
    # emsali, künye penceresine göre" KÜNYE diye yutulmuştu — 26 tümce ölçüldü).
    # OLUMSUZ ve KADEME her durumda dışlar.
    eslesme = adlari_bul(t, dizin, desen)
    ad_kayit = None
    for e in eslesme:
        if sahibi in e[2]:
            continue
        mk = AD_KAYIT.match(t[e[3]:])
        if mk:
            ad_kayit = e[1] + " " + mk.group(1)
            if mk.group(1) in AD_KAYIT_GUCLU or mk.group(1).startswith("zinciri"):
                break
    if not ad_kayit and ALINDI.search(t) and ALINDI_VERI.search(t):
        for e in eslesme:
            if sahibi not in e[2] and ABLATIF.match(t[e[3]:]):
                ad_kayit = e[1] + "'dan … alindi"
                break
    sinyal = KOMSU_SINYAL.search(t) or ad_kayit
    for d, neden in DISLA:
        if re.search(d, t) and (not sinyal or neden.startswith(("OLUMSUZ", "KADEME"))):
            return dict(tetik=None, guc=None, hedefler=set(), kendine=False, belirsiz=[],
                        dislandi=neden)
    tetik = None
    for p in TETIK_GENEL:
        m = re.search(p, t)
        if m:
            if p in ZAYIF and not TARIH_SOZ.search(t):
                continue
            if p == r"komsu\w*" and not KOMSU_EYLEM.search(t):
                continue
            tetik = m.group(0)
            break
    guc = None
    if tetik is not None:
        guc = "GUCLU" if GUCLU_TETIK.search(tetik) else "ZAYIF"
    if ad_kayit and guc != "GUCLU":
        k = ad_kayit.split(" ")[-1]
        tetik = ad_kayit
        guc = "GUCLU" if (k in AD_KAYIT_GUCLU or k.startswith("zinciri") or k == "alindi") else "ZAYIF"
    if tetik is None:
        return None
    kendine = False
    # HEDEFLİ tetik: tetiğin HEMEN ardındaki ad hedeftir. O ad kaydın kendisiyse
    # ve ardından genitif/yönelme eki gelmiyorsa ("Belgrad'ın teslim günü" öznedir)
    # bu bir KENDİNE ATIFTIR.
    for p in TETIK_HEDEFLI:
        for m in re.finditer(p, t):
            sonraki = [e for e in eslesme if e[0] >= m.end() and e[0] - m.end() <= 3]
            if sonraki and sahibi in sonraki[0][2] and not GENITIF.match(t[sonraki[0][3]:]):
                kendine = True
    # "X'tan alındı" ve X kaydın KENDİSİ: kayıt MODELİN KAYNAĞIDIR, devralan değil.
    # (4. koşu: Krk/Cres/Rab ortak metni — Krk'ta "model Krk'tan alındı" Krk'ın
    # kendi LZMK kaynağını söylüyor; kendine atıf sanılmıştı.) Tümce DIŞLANIR.
    for m in ONCEKI_HEDEF.finditer(t):
        onceki = [e for e in eslesme if e[3] == m.start()]
        if onceki and sahibi in onceki[0][2]:
            return dict(tetik=None, guc=None, hedefler=set(), kendine=False, belirsiz=[],
                        dislandi="KENDİSİ KAYNAK («X'tan alındı», X = kaydın kendisi)")
    hedefler, belirsiz = _adlar(t, sahibi, dizin, desen)
    return dict(tetik=tetik, guc=guc, hedefler=hedefler, kendine=kendine, belirsiz=belirsiz,
                dislandi=None)


def cizge_kur(kayitlar, devlet_adlari=frozenset()):
    dizin, desen = ad_dizini(kayitlar, devlet_adlari)
    kenar = defaultdict(list)       # (A,B) -> [kanıt]
    cozulemedi, belirsiz, dislanan = [], [], []
    ustu_cizili = 0
    baglamdan = 0
    for y in kayitlar:
        sahibi = y["ad"]
        for alan, metin in metinler(y):
            ustu_cizili += len(USTU_CIZILI.findall(metin))
            temiz = USTU_CIZILI.sub(" ", metin)
            parcalar = [p.strip() for p in AYRAC.split(temiz) if p and p.strip()]
            for i, ham in enumerate(parcalar):
                r = tumce_coz(ham, sahibi, dizin, desen)
                if r is None:
                    continue
                if r["dislandi"]:
                    h0, _ = _adlar(norm(ham), sahibi, dizin, desen)
                    dislanan.append(dict(ad=sahibi, alan=alan, neden=r["dislandi"], tumce=ham,
                                         adlar=sorted(h0)))
                    continue
                kanit = dict(alan=alan, tetik=r["tetik"], guc=r["guc"], tumce=ham,
                             dosya=y.get("_kaynak"), baglam=None)
                hedefler, bel = r["hedefler"], r["belirsiz"]
                # BAĞLAM: ayraç adı tetikten ayırmış olabilir ("ZİNCİR: §4 şartlı
                # komşu günü — … en yakın kayıt «X»"). Tümce adsızsa YALNIZ bitişik
                # tümceye bakılır (önce sonraki, sonra önceki); AYRICA sayılır ve
                # bağlamdan gelen kenar ZAYIF kanıttır.
                if not hedefler and not r["kendine"] and not bel:
                    for j, yon in ((i + 1, "sonraki"), (i - 1, "onceki")):
                        if 0 <= j < len(parcalar):
                            h2, b2 = _adlar(norm(parcalar[j]), sahibi, dizin, desen)
                            if h2 or b2:
                                hedefler, bel = h2, b2
                                kanit = dict(kanit, baglam=yon,
                                             tumce=ham + "  <<" + yon + ": " + parcalar[j] + ">>")
                                baglamdan += 1
                                break
                if r["kendine"]:
                    kenar[(sahibi, sahibi)].append(kanit)
                for b in hedefler:
                    kenar[(sahibi, b)].append(kanit)
                for takma, adlar in bel:
                    belirsiz.append(dict(ad=sahibi, alan=alan, takma=takma, adaylar=adlar,
                                         guc=r["guc"], tumce=ham))
                if not hedefler and not r["kendine"] and not bel:
                    cozulemedi.append(dict(ad=sahibi, alan=alan, tetik=r["tetik"], guc=r["guc"],
                                           tumce=ham, dosya=y.get("_kaynak")))
    return dict(kenar=dict(kenar), cozulemedi=cozulemedi, belirsiz=belirsiz,
                dislanan=dislanan, ustu_cizili=ustu_cizili, baglamdan=baglamdan)


def kenar_gucu(kanitlar):
    """Kenar GÜÇLÜ: en az bir kanıt güçlü tetikli VE adı kendi tümcesinde."""
    return "GUCLU" if any(k["guc"] == "GUCLU" and not k.get("baglam") for k in kanitlar) else "ZAYIF"


def cevrim_gucu(c, kenar):
    return "GUCLU" if all(kenar_gucu(kenar[(a, b)]) == "GUCLU" for a, b in zip(c, c[1:])) else "ZAYIF"


def cevrimler(kenarlar, tavan=20000):
    """Bütün TEMEL çevrimler (Johnson'ın basitleştirilmişi: SCC içinde, her
    çevrim en küçük düğümünden bir kez). Dönüş: (liste, tavana_vurdu)."""
    kom = defaultdict(set)
    for a, b in kenarlar:
        kom[a].add(b)
    dugum = sorted(set(kom) | {b for v in kom.values() for b in v})
    sira = {d: i for i, d in enumerate(dugum)}
    out = []
    for d in dugum:
        if d in kom[d]:
            out.append([d, d])
    for bas in dugum:
        i0 = sira[bas]
        yigin = [(bas, iter(sorted(kom[bas])))]
        yol, yoldaki = [bas], {bas}
        while yigin:
            dg, it = yigin[-1]
            ilerledi = False
            for s in it:
                if s == dg or sira[s] < i0:
                    continue
                if s == bas:
                    out.append(yol + [bas])
                    if len(out) >= tavan:
                        return out, True
                    continue
                if s in yoldaki:
                    continue
                yol.append(s); yoldaki.add(s)
                yigin.append((s, iter(sorted(kom[s]))))
                ilerledi = True
                break
            if not ilerledi:
                yigin.pop()
                yoldaki.discard(yol.pop())
    return out, False


def siniflandir(cv):
    kendine = [c for c in cv if len(c) == 2]
    cift = [c for c in cv if len(c) == 3]
    uzun = [c for c in cv if len(c) > 3]
    return kendine, cift, uzun


def bas_cevrim(c, kenar):
    print(f"    [{cevrim_gucu(c, kenar)}] " + " → ".join(c))
    for a, b in zip(c, c[1:]):
        for k in kenar[(a, b)][:3]:
            print(f"       {a} → {b}  [{k['alan']} · «{k['tetik']}» · {k['guc']}"
                  f"{' · bağlamdan' if k.get('baglam') else ''}] {k['tumce'][:170]}")


def hukum(sonuc, cv, tavan, kenar):
    """1 GÜÇLÜ çevrim · 2 yalnız ZAYIF çevrim (aday) ya da ölçülemeyen atıf · 0 temiz."""
    if any(cevrim_gucu(c, kenar) == "GUCLU" for c in cv):
        return 1
    if cv or tavan or sonuc["belirsiz"] or any(r["guc"] == "GUCLU" for r in sonuc["cozulemedi"]):
        return 2
    return 0


def main(argv=None, kayitlar=None):
    argv = list(sys.argv[1:] if argv is None else argv)
    json_yol = None
    liste = 40
    if "--json" in argv:
        json_yol = argv[argv.index("--json") + 1]
    if "--liste" in argv:
        liste = int(argv[argv.index("--liste") + 1])
    if kayitlar is None:
        sys.path.insert(0, os.path.join(KOK, "arac"))
        eski = os.getcwd()
        os.chdir(os.path.join(KOK, "arac"))
        try:
            import girdi
            kayitlar = girdi.yukle(sessiz=True)
            devlet_adlari = set()
            for k in girdi.oku_devletler():
                for alan in ("id", "ad", "harita"):
                    if isinstance(k.get(alan), str):
                        devlet_adlari.add(norm(k[alan]).strip())
                        devlet_adlari.add(norm(k[alan].replace("-", " ")).strip())
            print(f"EVREN: girdi.yukle() · {len(girdi.GIRDI_DOSYALARI)} dosya · {len(kayitlar)} kayıt"
                  f" · devlet adı (parantez niteleyicisi elemesi için) {len(devlet_adlari)}")
        finally:
            os.chdir(eski)
    else:
        devlet_adlari = set()
        print(f"EVREN: verilen {len(kayitlar)} kayıt (sınav)")
    sonuc = cizge_kur(kayitlar, frozenset(devlet_adlari))
    kenar = sonuc["kenar"]
    cv, tavan = cevrimler(kenar)
    kendine, cift, uzun = siniflandir(cv)
    dugumler = {a for a, _ in kenar} | {b for _, b in kenar}
    guclu_k = sum(1 for k in kenar.values() if kenar_gucu(k) == "GUCLU")
    print(f"ÇİZGE: {len(kenar)} yönlü kenar (GÜÇLÜ {guclu_k} · ZAYIF {len(kenar) - guclu_k}) · "
          f"{len(dugumler)} düğüm · {len({a for a, _ in kenar})} devralan kayıt · "
          f"bağlamdan çözülen tümce {sonuc['baglamdan']}")
    from collections import Counter
    dn = Counter(r["neden"] for r in sonuc["dislanan"])
    print(f"DIŞLANAN (tetik var ama komşudan devralma DEĞİL): {len(sonuc['dislanan'])} tümce · "
          + " · ".join(f"{n} {s}" for n, s in dn.most_common()))
    adli = [r for r in sonuc["dislanan"] if r["adlar"]]
    print(f"  ⚠️ dışlanan ama içinde KAYIT ADI geçen tümce: {len(adli)} (kenar YAZILMADI; "
          f"çoğu künye/olay bağlamında ad anışı — --json 'dislanan' alanında tamamı)")
    print(f"ÜSTÜ ÇİZİLİ (~~…~~, geri alınmış beyan, okunmadı): {sonuc['ustu_cizili']}")
    ng = sum(1 for c in cv if cevrim_gucu(c, kenar) == "GUCLU")
    print(f"ÇEVRİM: {len(cv)} (GÜÇLÜ {ng} · ZAYIF/aday {len(cv) - ng})"
          f"{' (TAVANA VURDU — eksik sayım)' if tavan else ''} · "
          f"kendine atıf (A→A) {len(kendine)} · karşılıklı çift (A⇄B) {len(cift)} · "
          f"uzun (≥3) {len(uzun)}")
    for baslik, l in (("KENDİNE ATIF (A→A)", kendine), ("KARŞILIKLI ÇİFT (A⇄B)", cift),
                      ("UZUN ÇEVRİM (≥3)", uzun)):
        if l:
            print(f"  ── {baslik}: {len(l)}")
            for c in l[:liste]:
                bas_cevrim(c, kenar)
            if len(l) > liste:
                print(f"    … {len(l) - liste} çevrim daha (--liste N / --json)")
    for guc, baslik in (("GUCLU", "ÇÖZÜLEMEDİ-GÜÇLÜ (komşu/emsal/devral tetiği var, kayıt adı bulunamadı)"),
                        ("ZAYIF", "ÇÖZÜLEMEDİ-ZAYIF (yalnız «aynı/birebir/hizalı», kayıt adı yok — çoğu devralma değil)")):
        l = [r for r in sonuc["cozulemedi"] if r["guc"] == guc]
        print(f"{baslik}: {len(l)}")
        for r in l[:liste]:
            print(f"    {r['ad']} [{r['alan']} · «{r['tetik']}»] {r['tumce'][:140]}")
        if len(l) > liste:
            print(f"    … {len(l) - liste} daha (--json ile tamamı)")
    print(f"BELİRSİZ (ad birden çok kayda uyuyor): {len(sonuc['belirsiz'])}")
    for r in sonuc["belirsiz"][:liste]:
        print(f"    {r['ad']} [{r['alan']}] «{r['takma']}» → {' | '.join(r['adaylar'][:4])}")
    if len(sonuc["belirsiz"]) > liste:
        print(f"    … {len(sonuc['belirsiz']) - liste} daha (--json ile tamamı)")
    h = hukum(sonuc, cv, tavan, kenar)
    print("HÜKÜM:", {0: "temiz (0)", 1: "GÜÇLÜ ÇEVRİM VAR (1)",
                     2: "güçlü çevrim yok ama ADAY çevrim ya da ÖLÇÜLEMEYEN atıf var — temiz DEĞİL (2)"}[h])
    if json_yol:
        with open(json_yol, "w", encoding="utf-8") as f:
            json.dump(dict(
                cevrim=[dict(yol=c, guc=cevrim_gucu(c, kenar),
                             kanit=[dict(a=a, b=b, kanit=kenar[(a, b)]) for a, b in zip(c, c[1:])])
                        for c in cv],
                tavan=tavan,
                kenar=[dict(a=a, b=b, guc=kenar_gucu(k), kanit=k) for (a, b), k in sorted(kenar.items())],
                cozulemedi=sonuc["cozulemedi"], belirsiz=sonuc["belirsiz"],
                dislanan=sonuc["dislanan"], ustu_cizili=sonuc["ustu_cizili"], hukum=h),
                f, ensure_ascii=False, indent=1)
        print("JSON:", json_yol)
    return h


if __name__ == "__main__":
    sys.exit(main())
