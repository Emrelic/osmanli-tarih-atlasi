# KRONO-DOGU-ISLAM-0929 — `gun:` beyanı + ölçülmüş tarih düzeltmeleri (yedi mevcut dosya).
# Girdi: ARAC-KRONO-DOGU-ISLAM-0929-GUN.py çıktısı (tarama JSON'u).
# Kullanım:
#   py denetim/ARAC-KRONO-DOGU-ISLAM-0929-GUNYAZ.py <tarama.json> <karar.json>            (kuru koşu: karar dosyası + sayım)
#   py denetim/ARAC-KRONO-DOGU-ISLAM-0929-GUNYAZ.py <tarama.json> <karar.json> --uygula   (data/ dosyalarına yazar)
#
# SINIFLAR (her madde tam birine düşer):
#   ELLE   — elle okunup karar verilen madde (ELLE sözlüğü; her biri TDV cümlesine dayanır)
#   A-YIL  — t = YYYY-01-01 · TDV gün vermiyor → yalnız `gun:` beyanı
#   B-AY   — t = YYYY-MM-01 · ay d'de ya da TDV'de VAR, gün yok → `gun:` beyanı
#   C-YIL  — t = YYYY-MM-01 · ay NE d'de NE TDV'de var ve kaynak YALNIZ TDV → t YYYY-01-01'e İNDİRİLİR (CLAUDE.md §4:
#            "kaynak yıl diyorsa yıl yazılır"; D213). Künye penceresinin başına düşüyorsa İNDİRİLMEZ, beyan edilir.
#   D-AY?  — t = YYYY-MM-01 · ay TDV'de yok, kaynak TDV DIŞI (Iranica/Cambridge/akademik) → t DEĞİŞMEZ, ay
#            "doğrulanamadı" diye beyan edilir (Iranica bu oturumdan Cloudflare engeliyle okunamadı).
import json, re, sys, os, importlib.util
sys.stdout.reconfigure(encoding="utf-8", errors="replace")
KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DEN = os.path.join(KOK, "denetim")
spec = importlib.util.spec_from_file_location("tdv", os.path.join(DEN, "ARAC-KRONO-DOGU-ISLAM-0929-TDV.py"))
tdv = importlib.util.module_from_spec(spec)
spec.loader.exec_module(tdv)

AYLAR = ["Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran", "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"]
HAY = ("Muharrem|Safer|Rebîülevvel|Rebîülâhir|Rebîülahir|Cemâziyelevvel|Cemâziyelâhir|Cemaziyelevvel|"
       "Cemaziyelahir|Receb|Recep|Şâban|Şaban|Ramazan|Şevval|Zilkade|Zilkâde|Zilhicce")
DIS_KAYNAK = re.compile(r"iranica|cambridge|britannica|holt|petry|ayalon|websearch|akademik|tez|daisuke|verena|"
                        r"lapidus|savory|minorsky|woods|encyclop", re.I)
ETIKET = "KRONO-DOGU-ISLAM-0929"
# Tek künyeli dosyaların künye başı (pencere başına düşen madde yıla İNDİRİLMEZ — D213 devralma).
KUNYE_BAS = {"kronoloji_safevi.js": "1501-07-01", "kronoloji_akkoyunlu.js": "1340-01-01",
             "kronoloji_karakoyunlu.js": "1351-01-01", "kronoloji_memluk.js": "1250-01-01"}

# ── ELLE: (dosya, t, b-başı) → {t?, gun, kaynak_ek?, not}
ELLE = {
    ("kronoloji_karakoyunlu.js", "1446-01-01", "Bağdat altı aylık"): dict(
        t="1446-06-09", gun="9 Haziran 1446 (TDV `cihan-sah`; `karakoyunlular` yalnız 850/1446 der)",
        kaynak_ek="cihan-sah (TDV: \"şehri zaptetti ve üç gün boyunca yağmalattı (9 Haziran 1446)\")",
        not_="TDV `cihan-sah` günü veriyor; `karakoyunlular` ile çelişmiyor (o yalnız yıl veriyor)."),
    ("kronoloji_misir.js", "1786-01-01", "Cezayirli Gazi Hasan"): dict(
        t="1786-06-09", gun="11 Şâban 1200 / 9 Haziran 1786 (TDV `misir`)",
        kaynak_ek="misir (TDV: \"Cezayirli Gazi Hasan Paşa'yı deniz yoluyla Mısır'a gönderdi (11 Şâban 1200 / 9 Haziran 1786)\")",
        not_="TDV `misir` gönderiliş gününü veriyor."),
    ("kronoloji_iran.js", "1588-10-01", "I. Şah Abbas tahta"): dict(
        t="1587-10-01", gun="Ekim 1587 — ay hassasiyeti (TDV `abbas-i`: \"Safevî tahtına oturttu (Ekim 1587)\"; `safeviler` hükümdar listesi: Abbas I 995 (1587))",
        kaynak_ek="abbas-i (TDV: Ekim 1587 — eski kayıt 1588 diyordu; CLAUDE.md §4 çelişkide TDV esas)",
        not_="YIL DÜZELTMESİ 1588→1587: TDV `abbas-i` ve `safeviler` ikisi de 1587 diyor."),
    ("kronoloji_iran.js", "1295-01-01", "Gazan Han İslâm"): dict(
        t="1295-06-19", gun="19 Haziran 1295 (TDV `gazan-han`: Lâr vadisinde müslüman oldu)",
        kaynak_ek="gazan-han (TDV: \"Elburz'da Lâr vadisinde müslüman oldu ve Mahmud adını aldı (19 Haziran 1295)\")",
        not_="TDV `gazan-han` ihtida gününü veriyor. Cülûs ayrı olaydır (3 Kasım 1295, iran_ardillari'nde var)."),
    ("kronoloji_iran.js", "1335-12-01", "Ebû Said'in ölümü"): dict(
        t="1335-11-30", gun="13 Rebîülâhir 736 / 30 Kasım 1335 (TDV `ebu-said-bahadir-han`)",
        kaynak_ek="ebu-said-bahadir-han (TDV: \"13 Rebîülâhir 736'da (30 Kasım 1335) Karabağ'da öldü\")",
        not_="1 GÜN KAYMA: 12-01 ayın 1'i yer tutucusuydu, TDV 30 Kasım veriyor. ⚠️ Aynı kayma olaylar_ek7.js'te (çekirdek) de var — o dosya benim değil."),
    ("kronoloji_iran_ardillari.js", "1335-12-01", "Ebû Said Bahadır Han'ın ölümü"): dict(
        t="1335-11-30", gun="13 Rebîülâhir 736 / 30 Kasım 1335 (TDV `ebu-said-bahadir-han`)",
        kaynak_ek="ebu-said-bahadir-han (TDV: \"13 Rebîülâhir 736'da (30 Kasım 1335) Karabağ'da öldü\")",
        not_="1 GÜN KAYMA, kronoloji_iran.js ile aynı düzeltme."),
    ("kronoloji_iran.js", "1467-01-01", "Akkoyunlu, Karakoyunlu'yu yendi"): dict(
        t="1467-11-10", gun="12 Rebîülâhir 872 / 10 Kasım 1467 (TDV `karakoyunlular`, `uzun-hasan`, `cihan-sah` — Bingöl-Kiğı arası Sancak mevkii baskını; d'deki \"Çapakçur\" aynı olay)",
        kaynak_ek="karakoyunlular (TDV: Cihan Şah \"kaçarken öldürüldü (12 Rebîülâhir 872 / 10 Kasım 1467)\")",
        not_="YIL→GÜN: madde Çapakçur/Bingöl baskınını anlatıyor; TDV günü veriyor. akkoyunlu/karakoyunlu dosyaları zaten 1467-11-10 diyordu. ⚠️ olaylar_ek20.js (çekirdek) aynı olayı 1467-01-01'de tutuyor."),
    ("kronoloji_memluk.js", "1422-04-01", "Barsbay'ın tahta"): dict(
        gun="1 Nisan 1422 — GERÇEK GÜN, ayın 1'i yer tutucusu DEĞİL (TDV `barsbay`)", not_=""),
    ("kronoloji_memluk.js", "1468-02-01", "Kayıtbay'ın tahta"): dict(
        gun="7 Receb 872 / 1 Şubat 1468 — GERÇEK GÜN (TDV `kayitbay`)", not_=""),
    ("kronoloji_iran_ardillari.js", "1338-07-01", "Abdürrezzâk kardeşi"): dict(
        gun="12 Zilhicce 738 / 1 Temmuz 1338 — GERÇEK GÜN (TDV `serbedariler`)", not_=""),
    ("kronoloji_iran_ardillari.js", "1342-02-01", "Gürgân nehri"): dict(
        gun="23 Şâban 742 / 1 Şubat 1342 — GERÇEK GÜN (TDV `serbedariler`)", not_=""),
    ("kronoloji_misir.js", "1811-03-01", "Kal'a Vakası"): dict(
        gun="1 Mart 1811 — GERÇEK GÜN (TDV `kavalali-mehmed-ali-pasa`: \"1 Mart 1811'de düzenlediği büyük davette\")", not_=""),
    ("kronoloji_iran.js", "1779-03-01", "Kerim Han öldü"): dict(
        gun="Mart 1779 — ay hassasiyeti (TDV `zendler`: \"Kerim Han'ın vefatı üzerine (Mart 1779)\"; gün yok)", not_=""),
    ("kronoloji_misir.js", "1848-09-01", "İbrâhim Paşa'nın fiilen"): dict(
        gun="Eylül 1848 başı — ay hassasiyeti (TDV `kavalali-mehmed-ali-pasa`: \"1848 Eylülünün başında … Mısır valiliğine tayin edildi\")", not_=""),
    ("kronoloji_memluk.js", "1294-12-01", "Kitbugâ, çocuk sultanı"): dict(
        gun="Muharrem 694 / Aralık 1294 — ay hassasiyeti (TDV `muhammed-b-kalavun`; gün yok)",
        kaynak_ek="muhammed-b-kalavun (TDV: \"hükümdar ilân edildi (Muharrem 694 / Aralık 1294)\")", not_=""),
    ("kronoloji_iran.js", "1501-07-01", "Şah İsmail Tebriz'de tahta"): dict(
        gun="907 / 1501 — TDV `safeviler` yalnız yıl veriyor; t = `safevi` künyesinin f günü (KAYNAK DEĞİL — D213 künye günü devralma, yıla indirmek künye penceresinin önüne düşürürdü)",
        not_="Ay dayanaksız ama künye başı; indirilmedi, beyan edildi. ⚠️ kronoloji_akkoyunlu.js aynı olaya 1501-04-01 diyor."),
    ("kronoloji_iran.js", "1896-05-01", "Nâsırüddin Şah suikastla"): dict(
        gun="1 Mayıs 1896? — ay/gün Encyclopaedia Iranica'ya dayanıyor (bu oturum Iranica'ya erişemedi) · ⚠️ ÇELİŞKİ: TDV `kacarlar` \"3 Zilkade 1313 / 16 Nisan 1896\" diyor — CLAUDE.md §4'e göre TDV esastır; hüküm koordinatörde (bkz. DUZELTME)",
        not_="TDV–Iranica çelişkisi; t DEĞİŞTİRİLMEDİ, DUZELTME'de öneri."),
    ("kronoloji_karakoyunlu.js", "1438-05-01", "İskender, oğlu Şah Kubâd"): dict(
        gun="Zilkade 841 / Mayıs 1438 — ay hassasiyeti (TDV `karakoyunlular`) · ⚠️ TDV KENDİ İÇİNDE ÇELİŞİYOR: `cihan-sah` Cihan Şah'ın İskender'in ölümünden sonraki cülûsunu 19 Nisan 1438 veriyor",
        not_="TDV iç çelişkisi (§4 tuzak ⑥); t değiştirilmedi."),
    ("kronoloji_misir.js", "1805-05", "Kahire ulemâsının Mehmed Ali"): dict(
        t="1805-05-01", gun="Mayıs 1805 — ay hassasiyeti (TDV `hursid-ahmed-pasa`, Özkoç 2013, Ertuğrul 2018 gün vermiyor — bkz. d)",
        not_="BİÇİM DÜZELTMESİ: t:\"1805-05\" (YYYY-MM) şemaya aykırıydı (§8: ay hassasiyetli yazım); YYYY-MM-01 + `gun:` beyanına çevrildi, hassasiyet değişmedi."),
}


# SAHTE AY DESTEĞİ — TDV'de o ay+yıl geçiyor ama BAŞKA olayı tarihliyor (bkontrol elle okundu, §4 tuzak ⑧):
#   memluk 1425-06 "Kârimîler"      ← TDV `barsbay` "1425 Haziranında" = ikinci Kıbrıs seferi
#   misir 1827-06 "Kasrü'l-Aynî"    ← TDV `ibrahim-pasa-kavalali` "5 Haziran 1827" = Atina'nın düşüşü
#   akkoyunlu 1452-09 "Kitâb-ı Diy." ← TDV `uzun-hasan` "Ramazan 856 / Eylül 1452" = Âmid'in alınışı
AY_DESTEK_SAHTE = {("kronoloji_memluk.js", "1425-06-01"), ("kronoloji_misir.js", "1827-06-01"),
                   ("kronoloji_akkoyunlu.js", "1452-09-01", "Kitâb")}


def sahte_destek(f, t, b):
    return (f, t) in AY_DESTEK_SAHTE or any(len(x) == 3 and x[0] == f and x[1] == t and b.startswith(x[2])
                                            for x in AY_DESTEK_SAHTE)


def elle_bul(f, t, b):
    for (ef, et, eb), v in ELLE.items():
        if ef == f and et == t and b.startswith(eb):
            return v
    return None


def tdv_sluglari(k):
    return [s for s, v in k["slug"].items() if v.get("durum") == "ok"]


def ay_ifadesi(d, ay, yil):
    mm = re.search(r"((?:(?:%s)\s+\d{3,4}\s*[/(]?\s*)?(?:\d{1,2}\s+)?%s(?:\s*-\s*\w+)?\s+%s)" % (HAY, ay, yil), d)
    if not mm:
        mm = re.search(r"(%s\s+%s\w*)" % (yil, ay), d)
    if not mm:
        return None
    s = mm.group(1).replace("(", "/ ").replace(")", "")
    return re.sub(r"\s+", " ", re.sub(r"\s*/\s*", " / ", s)).strip(" /")


def tdv_ay_var(sl, ay, yil):
    """TDV ayı iki sırayla da yazar: 'Şubat 1473' ve '1473 Şubatında' / '1426 Haziran başlarında'."""
    rx = re.compile(r"%s\s+%s|%s\s+%s" % (ay, yil, yil, ay))
    return any(rx.search(tdv.metin(s)[0]) for s in sl)


MEVSIM = re.compile(r"(\d{4})\s+(yazında|kışında|baharında|ilkbaharında|sonbaharında|güzünde|yazı|kışı|sonbaharı)")


def mevsim(d, yil):
    mm = [m for m in MEVSIM.finditer(d) if m.group(1) == yil]
    return ("%s %s" % (yil, mm[0].group(2))) if mm else None


def hicri_yil(d, yil):
    mm = re.search(r"(?<!\d)(\d{3,4})(?:['’]?(?:te|de|ta|da))?\s*\((?:[^)]*?)%s" % yil, d) or \
        re.search(r"(?<!\d)(\d{3,4})\s*/\s*%s" % yil, d)
    if mm and mm.group(1) != yil and 600 <= int(mm.group(1)) <= 1350:
        return mm.group(1)
    return None


def karar_ver(k, m):
    f, t, b = k["f"], k["t"], k["b"]
    yil, d = t[:4], (m.get("d") or "") + " " + (m.get("ic_not_d") or "")
    sl = tdv_sluglari(k)
    sl_yazi = ", ".join("`%s`" % s for s in sl[:4]) + (" …" if len(sl) > 4 else "")
    e = elle_bul(f, t, b)
    if e:
        return dict(sinif="ELLE", yeni_t=e.get("t"), gun=e["gun"], kaynak_ek=e.get("kaynak_ek"), not_=e.get("not_", ""))
    h = hicri_yil(d, yil)
    hy = ("H. %s / " % h) if h else ""
    if t.endswith("-01-01"):
        return dict(sinif="A-YIL", gun="%s%s — yıl hassasiyeti · TDV %s gün/ay vermiyor (%s ölçümü)" % (hy, yil, sl_yazi, ETIKET))
    ay = AYLAR[int(t[5:7]) - 1]
    ifade = ay_ifadesi(d, ay, yil)
    if tdv_ay_var(sl, ay, yil) and not sahte_destek(f, t, b):
        return dict(sinif="B-AY", gun="%s — ay hassasiyeti · ay TDV'de var, gün yok (%s)" % (ifade or "%s %s" % (ay, yil), sl_yazi))
    kay = m.get("kaynak") or ""
    if DIS_KAYNAK.search(kay) or re.search(r"bulunamad", kay):
        ek = " · ⚠️ -06-01 yıl ortası YER TUTUCU olabilir" if t[5:] == "06-01" else ""
        engel = " (Iranica bu oturumdan Cloudflare engeliyle okunamadı)" if re.search(r"iranica", kay, re.I) else ""
        return dict(sinif="D-AY?", gun="%s %s? — ay TDV-dışı kaynağa dayanıyor ve bu oturumda DOĞRULANAMADI%s · TDV %s ay/gün vermiyor%s" % (ay, yil, engel, sl_yazi, ek),
                    not_="ay doğrulanamadı" + (" (d'de yazılı: %s)" % ifade if ifade else ""))
    yeni = yil + "-01-01"
    bas = KUNYE_BAS.get(f)
    if bas and yeni < bas:
        return dict(sinif="C-KUNYE", gun="%s%s — TDV %s yalnız yıl veriyor; ay (%s) dayanaksız ama yıla indirmek künye penceresinin (%s) önüne düşürür → t korundu (D213)" % (hy, yil, sl_yazi, ay, bas),
                    not_="ay dayanaksız, künye başı")
    mv = mevsim(d, yil)
    dayanak = ("d yalnız mevsim veriyor (%s)" % mv) if mv else (
        ("d'deki ay ifadesi (%s) TDV'de YOK" % ifade) if ifade else "d ve TDV yalnız yıl veriyor")
    return dict(sinif="C-YIL", yeni_t=yeni,
                gun="%s%s%s — yıl hassasiyeti · eski t %s'in AYI kaynakta YOK (%s; TDV %s) → yıla indirildi (%s)" % (
                    hy, yil, (" · " + mv) if mv else "", t, dayanak, sl_yazi, ETIKET),
                not_="sahte kesinlik: ay dayanaksızdı")


def js_str(s):
    return json.dumps(s, ensure_ascii=False)


def uygula(kararlar):
    dosyalar = {}
    for kr in kararlar:
        dosyalar.setdefault(kr["f"], []).append(kr)
    rapor = []
    for f, L in dosyalar.items():
        yol = os.path.join(KOK, "data", f)
        src = open(yol, encoding="utf-8").read()
        for kr in L:
            rx = re.compile(r't:\s*"%s"\s*,\s*b:\s*"((?:[^"\\]|\\.)*)"' % re.escape(kr["t"]))
            bulundu = None
            for mm in rx.finditer(src):
                if json.loads('"' + mm.group(1) + '"') == kr["b"]:
                    bulundu = mm
                    break
            if not bulundu:
                rapor.append(("BULUNAMADI", f, kr["t"], kr["b"]))
                continue
            eski = bulundu.group(0)
            yeni = eski
            if kr.get("yeni_t"):
                yeni = yeni.replace('"%s"' % kr["t"], '"%s"' % kr["yeni_t"], 1)
            yeni = yeni + ", gun:" + js_str(kr["gun"])
            src = src[:bulundu.start()] + yeni + src[bulundu.end():]
            if kr.get("kaynak_ek"):
                # aynı kaydın kaynak alanına ek — kaydın kapanışına kadar ara
                bas = bulundu.start()
                son = src.find("\n{", bas + 1)
                son = len(src) if son < 0 else son
                parca = src[bas:son]
                km = re.search(r'kaynak:\s*"((?:[^"\\]|\\.)*)"', parca)
                if km:
                    eski_k = json.loads('"' + km.group(1) + '"')
                    yeni_k = eski_k + " · " + kr["kaynak_ek"]
                    parca = parca[:km.start()] + "kaynak:" + js_str(yeni_k) + parca[km.end():]
                    src = src[:bas] + parca + src[son:]
                else:
                    rapor.append(("KAYNAK-ALANI-YOK", f, kr["t"], kr["b"]))
        open(yol, "w", encoding="utf-8", newline="").write(src)
    return rapor


def main():
    tarama = json.load(open(sys.argv[1], encoding="utf-8"))
    # d / kaynak metinleri için dosyaları node ile oku
    import subprocess
    js = ("const fs=require('fs'),vm=require('vm');const out=[];for(const f of %s){const c={window:{}};"
          "vm.runInNewContext(fs.readFileSync('%s/data/'+f,'utf8'),c);for(const [g,v] of Object.entries(c.window))"
          "if(Array.isArray(v))v.forEach(m=>out.push(Object.assign({_f:f},m)));}process.stdout.write(JSON.stringify(out));"
          % (json.dumps(sorted({k['f'] for k in tarama})), KOK.replace("\\", "/")))
    M = json.loads(subprocess.run(["node", "-e", js], capture_output=True, encoding="utf-8").stdout)
    ix = {(m["_f"], str(m.get("t")), m.get("b")): m for m in M}
    kararlar = []
    for k in tarama:
        m = ix.get((k["f"], k["t"], k["b"]))
        if not m or m.get("gun"):
            continue
        kr = karar_ver(k, m)
        kr.update(f=k["f"], t=k["t"], b=k["b"])
        kararlar.append(kr)
    # tarama biçim-bozuk t'yi (1805-05) görmez: ELLE'den ekle
    for (ef, et, eb), v in ELLE.items():
        if not re.fullmatch(r"\d{4}-\d\d-\d\d", et):
            for (mf, mt, mb), m in ix.items():
                if mf == ef and mt == et and (mb or "").startswith(eb) and not m.get("gun"):
                    kararlar.append(dict(sinif="ELLE", yeni_t=v.get("t"), gun=v["gun"], kaynak_ek=v.get("kaynak_ek"),
                                         not_=v.get("not_", ""), f=ef, t=et, b=mb))
    json.dump(kararlar, open(sys.argv[2], "w", encoding="utf-8"), ensure_ascii=False, indent=1)
    from collections import Counter
    c = Counter((kr["f"], kr["sinif"]) for kr in kararlar)
    for kk in sorted(c):
        print(kk, c[kk])
    print("TOPLAM", len(kararlar), "· t değişen", sum(1 for kr in kararlar if kr.get("yeni_t")))
    kullanilmayan = [k for k in ELLE if not any(kr["sinif"] == "ELLE" and kr["f"] == k[0] and kr["t"] == k[1] for kr in kararlar)]
    print("kullanılmayan ELLE:", kullanilmayan)
    if "--uygula" in sys.argv:
        r = uygula(kararlar)
        print("uygulama sorunları:", r)


if __name__ == "__main__":
    main()
