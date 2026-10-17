# -*- coding: utf-8 -*-
"""GLM-I EPOK-SAHI P — AŞAMA taraması (ölçüm, hüküm değil).

Her nokta için: slug adayları → önbellek/GET → madde → 1281 dolayında sahip
ifade edebilecek cümleler. KOVA (①-⑤) KARARI BURADA VERİLMEZ; cümleler
insan (GLM) taraması için çıkarılır. Yalnız ④ (madde yok) ve ⑤ (ölçülemedi)
araç kararıdır — bunlar da MD'de beyan edilir.

Yöntem ayrıntıları (beyan):
  * Önbellek zinciri (salt-okunur): denetim/ONCE1281-YERLESIM-tdv-onbellek ·
    denetim/GLM1-TDV-ONBELLEK. Yeni çekimler: denetim/GLM1-EPOK-SAHIP-1009-tdv-onbellek.
  * Arama sayfası JS ile çizilir; düz HTTP 361/361 boş (D240) — bu koşuda
    yeniden ölçüldü ve DOĞRULANDI (nav bağlantıları döner, ajax uçları işe
    yaramaz). ⇒ 302 sonrası arama yedeği YOK; tüm adaylar 302 ise ④.
  * Yıl penceresi 1200-1310 (1281 ± ~30); hicri koruması: yılın hemen
    ardından ≥1311 miladi parantez geliyorsa o yıl hicridir → atlanır.
    "milâttan önce" koruması aynen (ARAC-ONCE1281-YERLESIM-TDV.py).
  * Cümle adayı: (a) pencere içi TARİH BİÇİMLİ yıl taşıyor, ya da (b) "XIII"
    yüzyıl işareti + devlet sözcüğü, ya da (c) devlet sözcüğü + herhangi
    TARİH BİÇİMLİ yıl. Nokta başına en fazla 12 cümle, yıl taşınanlar önce.

kullanım: py glm/epok_tarama.py --asama 1 [--limit N] [--sadece "Ad1|Ad2"]
çıktı: glm/epok_asama1.jsonl (append; resume = satırsonra devam)
"""
import sys, io, os, re, json, html, time, glob, urllib.request, urllib.error
import unicodedata as _u
if __name__ == "__main__":
    sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8", errors="replace")
KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

ESKI_ONBELLEK = [
    os.path.join(KOK, "denetim", "ONCE1281-YERLESIM-tdv-onbellek"),
    os.path.join(KOK, "denetim", "GLM1-TDV-ONBELLEK"),
]
YENI_ONBELLEK = os.path.join(KOK, "denetim", "GLM1-EPOK-SAHIP-1009-tdv-onbellek")
os.makedirs(YENI_ONBELLEK, exist_ok=True)

UA = ("Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 "
      "(KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36")
HDR = {"User-Agent": UA, "Accept-Language": "tr-TR,tr;q=0.9"}

_TR = str.maketrans({"İ": "i", "I": "i", "ı": "i", "Ş": "s", "ş": "s", "Ğ": "g",
                     "ğ": "g", "Ü": "u", "ü": "u", "Ö": "o", "ö": "o", "Ç": "c",
                     "ç": "c", "Â": "a", "â": "a", "Î": "i", "î": "i", "Û": "u",
                     "û": "u", "É": "e", "é": "e", "Ḳ": "k", "ḳ": "k", "Ṣ": "s",
                     "ṣ": "s", "Ṭ": "t", "ṭ": "t", "ẓ": "z", "Ẓ": "z", "h": "h",
                     "Ẋ": "x", "ẍ": "x"})


def norm(s):
    s = s.translate(_TR)
    s = _u.normalize("NFKD", s)
    s = "".join(c for c in s if not _u.combining(c)).lower()
    return s


def slugla(s):
    s = norm(s)
    s = re.sub(r"[ʻʼ'’`]", "", s)
    return re.sub(r"[^a-z0-9]+", "-", s).strip("-")


def adaylar(ad):
    """Parantez dışı + parantez içi + '/'-','-veya alternatifleri; sonra
    tipik ek temizlikleri (kalesi/kasabası/nahiyesi...)."""
    parca = [ad.split("(")[0]] + re.findall(r"\(([^)]*)\)", ad)
    out = []
    for ek in ES_AD.get(norm(ad), []):
        if ek not in out:
            out.append(ek)
    for p in parca:
        for q in re.split(r"[/,;]| veya ", p):
            q = q.strip()
            if len(q) < 3:
                continue
            for r in (q, re.sub(r"\s+(kalesi|kasabası|kasaba|nahiyesi|karyesi|"
                                r"livası|sancağı|vilayeti|vilâyeti|ada[sı]?|"
                                r"limanı|adaları|yarımadası|burnu|dağı)$", "", q)):
                sl = slugla(r)
                if sl and len(sl) >= 3 and sl not in out:
                    out.append(sl)
    return out


class _Yon(urllib.request.HTTPRedirectHandler):
    def redirect_request(self, *a, **k):
        return None


_ac = urllib.request.build_opener(_Yon)


def duz(h):
    t = re.sub(r"<script.*?</script>", " ", h, flags=re.S | re.I)
    t = re.sub(r"<style.*?</style>", " ", t, flags=re.S | re.I)
    t = re.sub(r"<(br|/p|/div|/h\d|/li)[^>]*>", "\n", t, flags=re.I)
    t = re.sub(r"<[^>]+>", " ", t)
    t = html.unescape(t)
    t = re.sub(r"[ \t\r\f\v]+", " ", t)
    return re.sub(r"\n\s*\n+", "\n", t)


KOD_SATIRI = re.compile(r"^(200|301|302|303|307|308|40[0-9]|41[0-9]|42[0-9]|45[0-9]|"
                        r"5\d\d|000(:.*)?)$")

# eş adlar: verideki ad → denenecek ek slug'lar (TDV'deki karşılığı başka
# yazılan yerler; ölçüm kalitesi için, hüküm değil)
ES_AD = {"trablus": ["trablusgarp"]}


def _onbellek_oku(slug):
    for d in ESKI_ONBELLEK + [YENI_ONBELLEK]:
        yol = os.path.join(d, slug + ".txt")
        if os.path.exists(yol):
            t = io.open(yol, encoding="utf-8").read()
            kod, _, govde = t.partition("\n")
            kod = kod.strip()
            if KOD_SATIRI.match(kod):
                return kod, govde
            # kodsuz biçim (eski önbellekte matbu-PDF metni) → gövdenin tamamı
            return "200", t
    return None, None


def cek(slug):
    kod, govde = _onbellek_oku(slug)
    if kod is not None:
        return kod, govde, False
    for deneme in range(6):
        try:
            r = _ac.open(urllib.request.Request(
                "https://islamansiklopedisi.org.tr/" + slug, headers=HDR), timeout=40)
            h = r.read().decode("utf-8", "replace")
            kod = str(r.status)
            m = re.search(r"<title>(.*?)</title>", h, re.S | re.I)
            baslik = html.unescape(m.group(1)).strip() if m else ""
            govde = "BASLIK: " + baslik + "\n" + duz(h)
        except urllib.error.HTTPError as e:
            kod, govde = str(e.code), ""
        except Exception as e:
            kod, govde = "000:" + type(e).__name__, ""
        time.sleep(1.05)                       # 🔴 istekler arası ≥ 1 sn
        if not (kod.startswith("5") or kod.startswith("000")):
            break
        time.sleep(4 * (deneme + 1))           # 5xx/000 hız sınırı — ölü değil
    if not (kod.startswith("5") or kod.startswith("000")):
        io.open(os.path.join(YENI_ONBELLEK, slug + ".txt"), "w",
                encoding="utf-8").write(kod + "\n" + govde)
    else:
        kod = kod if not kod.startswith("5") else "503"
    return kod, govde or "", True


# ---- cümle çıkarma ----------------------------------------------------------
TARIH_BICIM = re.compile(
    r"\((?:\d{1,3}\s*/\s*)?(\d{3,4})(?:\s*-\s*\d{1,4})?\)"
    r"|(?<![\d.,])(\d{3,4})(?:\s*-\s*\d{2,4})?\s*(?:[’']\s*(?:de|da|te|ta|den|dan|ten|tan|e|a|ye|ya|deki|daki|teki|taki|li|lı|lu|lü)\b| yıl)")
MO = re.compile(r"(milâttan önce|milattan önce|m\.\s?ö\.|mö)\s*$", re.I)
KALIP = ("data-", "style=", "rastgele bir madde", "TDV İslâm Ansiklopedisi '")
YER_IPUCU = re.compile(r"\b(şehir|şehri|kasaba|kalesi|kale|ilçe|ili\b|il merkezi|"
                       r"liman|bölge|ada|nahiye|köy|vilâyet|sancak)", re.I)
# "bk. ŞANLIURFA" koçası — yönlendirme taslağı (ölçülen vaka: urfa → sanliurfa)
BK_KOCA = re.compile(r"bk\.?\s*[:;]?\s+([A-ZÇĞİÖŞÜÂÎÛ][A-ZÇĞİÖŞÜÂÎÛ\- ]{2,40})")

# devlet/aktör sözcükleri (normalize edilmiş gövdede aranır) — yalnız cümle
# ADAYI seçmek için; hüküm insan taramasında
DEVLET_SOZ = [w for w in """selcuklu ilhan mogol cengiz hanli bizans memluk memluklu
venedik ceneviz napoli anjou macar sirp bulgar bosna ermeni gurcu trabzon komnen latin
hacli ehl-i salib eyyubi zengi artuklu danismend mengucek ahlatsah harezmsah karahitay
gur hafsi merini zeyyani nube makurya altinorda altin-orda kipcak cagatay yuan delhi
yadava kakatiya hoysala pandya colaki calukya yemen rasul resul nebhani hurmuz karaman
mentese germiyan esref inanc pervane sahibata coban candar teke hamid aydin saruhan
karesi osman kilikya lusignan kibris epir despot iznik mora ahaya ahaia atina katalan
aragon trablus kudus lubnan sahil sovalye tapinak kudus-krallik aglabi fatimi
sirvansah sirvan gilan mazenderan anadolu beylik turkmen akkoyunlu karakoyunlu
cakal ahlat erzurum tahran""".split() if len(w) > 2]
DEVLET_RE = re.compile(r"\b(" + "|".join(DEVLET_SOZ) + r")", re.I)
YUZYIL_RE = re.compile(r"\bXIII\b|on ?[üu]n ?cüncü", re.I)


def govde_metni(govde):
    # matbu-PDF metinleri tek uzun satır olabilir; orada dipnot kerevizi
    # (KALIP) aynı satırdadır ve satırı düşürmek METNİ düşürür — uzun satır
    # her zaman tutulur, kısa satırlarda kereviz filtresi geçerli
    return "\n".join(s for s in govde.split("\n")
                     if len(s) > 200 and (len(s) > 3000 or
                                          not any(k in s for k in KALIP)))


def cumleler(govde):
    """(yil | None, metin) listesi — pencere 1200-1310 öncelikli.

    yıl seçimi (düzeltilmiş, 9 Ekim): cümledeki TÜM tarih biçimleri
    toplanır; pencere içi İLK değer etiket olur (eski kod ilk eşleşmeyi
    alıyordu — "688'de (1289)" biçiminde 688 etiketlenip pencereye
    düşmüyordu). hicri-önce biçimi: değer ≤1000 ve ardında (miladî)
    parantezi varsa ETİKET parantezdeki yıldır."""
    yillilar, diger = [], []
    for satir in govde_metni(govde).split("\n"):
        for cum in re.split(r"(?<=[.!?])\s+", satir):
            cum = cum.strip()
            if len(cum) < 25 or len(cum) > 900:
                continue
            n = norm(cum)
            aday_yil = []
            for m in TARIH_BICIM.finditer(cum):
                v = int(m.group(1) or m.group(2))
                arka = cum[m.end():m.end() + 20]
                pm = re.match(r"[^()]{0,6}\((\d{3,4})", arka)
                if v <= 1000 and pm:
                    aday_yil.append(int(pm.group(1)))
                    continue                      # "688'de (1289)": hicri + miladî
                if pm and int(pm.group(1)) >= 1311:
                    continue                      # yıl hicri, miladî parantezi dışarıda
                if MO.search(cum[:m.start()][-25:]):
                    continue
                aday_yil.append(v)
            yil = next((v for v in aday_yil if 1200 <= v <= 1310),
                       aday_yil[0] if aday_yil else None)
            if 1200 <= (yil or 0) <= 1310:
                yillilar.append((yil, cum[:400]))
            elif (YUZYIL_RE.search(cum) or DEVLET_RE.search(n)) and TARIH_BICIM.search(cum):
                diger.append((yil, cum[:400]))
            elif YUZYIL_RE.search(cum) and DEVLET_RE.search(n):
                diger.append((None, cum[:400]))
    return yillilar[:12], diger[:6]


def baslik_farkli_mi(baslik, ad):
    b = norm(re.sub(r"\s*-\s*TDV.*$", "", baslik or ""))
    b = re.sub(r"[^a-z0-9 ]", " ", b).split()
    a = [t for t in re.split(r"[^a-z0-9]+", norm(ad)) if len(t) >= 3]
    for bt in b:
        for at in a:
            if bt == at or (len(bt) >= 5 and len(at) >= 5 and (bt.startswith(at) or at.startswith(bt))):
                return False
    return True


ASAMA1 = ("Anadolu", "Kırım-Karadeniz", "Balkan", "Ortadoğu", "İran-Kafkas",
          "Kuzey Afrika", "Arabistan-Hint")


def main():
    import argparse
    ap = argparse.ArgumentParser()
    ap.add_argument("--asama", type=int, required=True)
    ap.add_argument("--limit", type=int, default=0)
    ap.add_argument("--sadece", default="")
    a = ap.parse_args()

    evren = json.load(io.open(os.path.join(KOK, "glm", "epok_evren.json"),
                              encoding="utf-8"))
    if a.asama == 1:
        evren = [e for e in evren if e["bolge"] in ASAMA1]
    else:
        evren = [e for e in evren if e["bolge"] not in ASAMA1]
    if a.sadece:
        rx = re.compile(a.sadece)
        evren = [e for e in evren if rx.search(e["ad"])]
    if a.limit:
        evren = evren[:a.limit]

    cikti = os.path.join(KOK, "glm", f"epok_asama{a.asama}.jsonl")
    var = set()
    if os.path.exists(cikti):
        for l in io.open(cikti, encoding="utf-8"):
            try:
                var.add(json.loads(l)["ad"])
            except Exception:
                pass
    f = io.open(cikti, "a", encoding="utf-8", newline="\n")
    print(f"AŞAMA {a.asama}: {len(evren)} nokta · önceden var: {len(var)}")
    for i, e in enumerate(evren, 1):
        if e["ad"] in var:
            continue
        rec = dict(e)
        rec["adaylar"] = adaylar(e["ad"])
        bulundu, http, baslik = None, None, ""
        for sl in rec["adaylar"][:6]:
            kod, govde, agdan = cek(sl)
            http = kod
            if kod == "200" and len(govde) > 800:
                m = re.search(r"BASLIK:\s*(.+)", govde)
                baslik = m.group(1).strip() if m else ""
                bulundu = (sl, govde)
                break
            if kod.startswith("000"):
                break                          # taşıma arızası → ⑤ adayı
            # 302/404/boş gövde → sonraki aday
        if bulundu:
            sl, govde = bulundu
            takip = None
            # "bk. X" koçası: YALNIZ gerçek taslakta takip (gövde < 1500 kr =
            # başlık kromu). Ölçülen tuzak (9 Ekim): "cümle çıkmadı" koşulu
            # GERÇEK maddelerin iç bağlantılarını da yakalıyordu — afyon→hashas
            # (haşhaş maddesi), kabala→yahudilik, kef→firaset, lagos→nijerya.
            if len(govde_metni(govde)) < 1500:
                mk = BK_KOCA.search(govde)
                hedef = slugla(mk.group(1).strip())
                k2, g2, _ = cek(hedef)
                if k2 == "200" and len(g2) > 800:
                    takip = f"{sl}->{hedef}"
                    sl, govde = hedef, g2
            yil, ek = cumleler(govde)
            m = re.search(r"BASLIK:\s*(.+)", govde)
            rec.update(slug=sl, http="200",
                       baslik=(m.group(1).strip() if m else ""),
                       baslik_farkli=baslik_farkli_mi(baslik, e["ad"]),
                       yer_ipucu=bool(YER_IPUCU.search(govde_metni(govde)[:1500])),
                       govde_uzunluk=len(govde_metni(govde)),
                       c_yil=yil, c_ek=ek)
            if takip:
                rec["takip"] = takip
        elif (http or "").startswith("000"):
            rec.update(slug=rec["adaylar"][0] if rec["adaylar"] else "",
                       http="000", c_yil=[], c_ek=[])
        elif (http or "").startswith("5"):
            rec.update(slug=rec["adaylar"][0] if rec["adaylar"] else "",
                       http="503", c_yil=[], c_ek=[])
        else:
            rec.update(slug=rec["adaylar"][0] if rec["adaylar"] else "",
                       http=http or "302", c_yil=[], c_ek=[])
        f.write(json.dumps(rec, ensure_ascii=False) + "\n")
        f.flush()
        if i % 25 == 0:
            print(f"  {i}/{len(evren)} …", flush=True)
    f.close()
    print("bitti:", cikti)


if __name__ == "__main__":
    main()
