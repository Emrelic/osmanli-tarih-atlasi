# -*- coding: utf-8 -*-
"""HAKEM13 yamasının KASA'da uygulanması (LAB-YAMA-1117). Varsayılan DRY-RUN; --uygula yazar.
Madde madde (--madde karakurum|kahire|turan|besasiri|sehrisebz) uygulanabilir; her yazım BİÇİM geri-dönüş sınamasından geçer."""
import json, os, sys
sys.stdout.reconfigure(encoding="utf-8")
KOK = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", "..", ".."))
UYGULA = "--uygula" in sys.argv
MADDE = sys.argv[sys.argv.index("--madde") + 1] if "--madde" in sys.argv else "hepsi"
YAMA = json.load(open(os.path.join(KOK, "denetim/SEHIR-DUNYA-1116/F2-1117/yama_hakem13.json"), encoding="utf-8"))
IC = {y["konu"].split()[0]: y["ic_not"] for y in YAMA}


def yol(f): return os.path.join(KOK, "data", f)


def oku(p):
    s = open(p, encoding="utf-8", newline="").read()
    i = s.index("window.")
    j = s.index("= [", i) + 2
    return s[:i], s[i:j - 2].strip(), json.loads(s[j:].rstrip().rstrip(";")), s


def yaz_metin(ust, ad, veri):
    return ust + ad + " = " + json.dumps(veri, ensure_ascii=False, indent=1) + ";\n"


DOS = {}


def al(f):
    p = yol(f)
    if p not in DOS:
        ust, ad, veri, orj = oku(p)
        if yaz_metin(ust, ad, veri).replace("\r\n", "\n") != orj.replace("\r\n", "\n"):
            print("BİÇİM BİREBİR DEĞİL:", f); sys.exit(1)
        DOS[p] = [ust, ad, veri, "\r\n" in orj]
    return DOS[p][2]


def kayit(f, i):
    r = [k for k in al(f) if k["id"] == i]
    assert len(r) == 1, (f, i, len(r))
    return r[0]


def ekle_not(d, metin):
    d["ic_not"] = (d["ic_not"] + " || " if d.get("ic_not") else "") + metin


LOG = []


def karakurum():
    L = kayit("sehir_tarihce_orta_asya.js", "karakurum-mn")
    if not any(o["t"] == "1235-01-01" for o in L["olay"]):
        L["olay"].append({
            "t": "1235-01-01", "gun": "1235", "k": "diger",
            "b": "Ögedey Han Karakurum'u surlarla çevirtti ve saray yaptırmaya başladı (somut inşa; 1220 yalnız karargâh yeri belirlenmesi)",
            "kesinlik": "yil",
            "kaynak": "Britannica «Karakorum» (tarayıcıda okundu: 'In 1235 ... Ögödei, surrounded Karakorum with walls and built a rectangular palace'); Bonn Üniv. Karakorum projesi ('concrete construction measures ... rampart built around the nascent city in 1235'); Boyle (Reşîdüddîn çev., 1971, n.269). HAKEM13 (17 Kasım 2026): bağımsızlık kanıtlanamadı, çift teyit yazılmadı; Yuan shi 1235/1236 ayrımı okunmadı.",
            "tanik": "In 1235 Genghis Khan’s son and successor, Ögödei, surrounded Karakorum with walls"})
        L["olay"].sort(key=lambda x: x["t"])
    L["ilk"]["gun"] = "1220 (Cengiz Han'ın karargâh yeri belirlemesi — gelenek; şehir inşası Ögedey, sur/saray 1235)"
    K = kayit("sehir_tarihce_k12.js", "karakurum")
    for o in K["olay"]:
        if o["t"] == "1220-01-01" and "kurar" in o["b"]:
            o["b"] = "Cengiz Han Orhon vadisinde karargâh yerini belirledi (TDV 'kurulmuştur'; DAI: kamp; kalıcı şehir/sur-saray 1235)"
    ekle_not(K, "HAKEM13 (LAB, 17 Kasım 2026): " + IC["Karakurum"])
    LOG.append("karakurum: orta_asya karakurum-mn +1235 olay, ilk.gun beyanı; k12 karakurum 1220 olayı 'karargâh belirlendi', ic_not")


def sehrisebz():
    LOG.append("sehrisebz: LAB kaydı (sehrisebz-kes-uz) ic_not'u hakem13_yama.py ile ZATEN data'da; ilk.t DEĞİŞMEZ (zincir boş ihlali); k12'de kayıt yok -> ek iş yok")


def kahire():
    C = kayit("sehir_tarihce_osm.js", "cairo")
    C["ilk"]["t"] = "0969-07-06"; C["ilk"]["gun"] = "6 Temmuz 969 (17 Şâban 358, Jülyen)"
    C["kur"]["t"] = "0969-07-06"; C["kur"]["gun"] = "6 Temmuz 969 (17 Şâban 358, Jülyen)"
    C["sahip"][0]["f"] = "0969-07-06"
    C["olay"][0]["t"] = "0969-07-06"; C["olay"][0]["gun"] = "6 Temmuz 969"
    ekle_not(C, "HAKEM13 (LAB, 17 Kasım 2026): " + IC["Kahire"])
    LOG.append("kahire: osm cairo 07-03 -> 07-06 (ilk/kur/sahip[0]/olay[0]) + ic_not")


def turan():
    C = kayit("sehir_tarihce_osm.js", "cairo")
    s = [x for x in C["sahip"] if x["d"] == "eyyubi"][0]
    m = [x for x in C["sahip"] if x["d"] == "memluk"][0]
    assert s["t"] == "1250-05-02" and m["f"] == "1250-05-02"
    s["t"] = "1250-04-30"; m["f"] = "1250-04-30"
    ekle_not(s, "HAKEM13 (LAB, 17 Kasım 2026): TDV değeri 30 Nisan 1250 KALIR; 2 Mayıs 1250 ikinci aday. " + IC["Turan"])
    for o in C["olay"]:
        if o["t"] == "1250-05-02":
            o["t"] = "1250-04-30"; o["gun"] = "30 Nisan 1250 (TDV Eyyûbîler)"
            o["kaynak"] = "TDV EYYÛBÎLER (30 Nisan 1250); TDV MEMLÜKLER (olay). İKİNCİ ADAY 2 Mayıs 1250 (Runciman 1954 s.272; Setton II 1969 ch.XX) — HAKEM13, TDV değeri kalır"
    LOG.append("turan: cairo eyyubi.t/memluk.f/olay 05-02 -> 04-30 (TDV), 2 Mayıs ic_not")


def besasiri():
    p = yol("kronoloji_cok_once1281_ortadogu.js")
    s = open(p, encoding="utf-8", newline="").read()
    eski_b = "\"b\":\"Besâsîrî Bağdat'ı işgal etti, halifeyi esir aldı ve hutbeyi Fâtımî halifesi adına okuttu\""
    yeni_b = "\"b\":\"Besâsîrî Bağdat'a girdi ve şehri işgal etti\""
    eski_d = "Halife Kāim-Biemrillâh esir alınıp Kureyş'in himayesine verildi, Bağdat'ta hutbe Fâtımî Halifesi Müstansır-Billâh adına okundu."
    yeni_d = ("Giriş günü Pazar 8 Zilkâde 450 / 27 Aralık 1058'dir (İbnü'l-Esîr, Richards 2002). Halife Kāim-Biemrillâh'ın esir alınıp Kureyş'in ordugâhına götürülmesi "
              "ve Rusâfa'da Fâtımî hutbesi sonraki ayrı olgulardır (doğu yakasına geçiş 4 Ocak 1059, Rusâfa hutbesi ~8 Ocak, halife esiri ~17-18 Ocak 1059; TDV 'Ocak 1059' bunlara uyar); "
              "bu gün yalnız şehre giriştir. İbnü'l-Cevzî giriş için 6 Zilkâde/25 Aralık verir (Richards dipnotu). HAKEM13.")
    assert s.count(eski_b) == 1 and s.count(eski_d) == 1
    s = s.replace(eski_b, yeni_b).replace(eski_d, yeni_d)
    sat = s.split("\n")
    ix = [i for i, l in enumerate(sat) if l.startswith('{"t":"1058-12-27"') and "Besâsîrî" in l]
    assert len(ix) == 1
    l = sat[ix[0]]
    cr = chr(13) if l.endswith(chr(13)) else ""
    l = l.rstrip(chr(13))
    assert l.endswith('"},') and '"ic_not"' not in l
    sat[ix[0]] = l[:-2] + ',"ic_not":"HAKEM13 (LAB, 17 Kasım 2026): ' + IC["Besâsîrî"].replace('"', "'") + '"},' + cr
    s = "\n".join(sat)
    if UYGULA:
        open(p, "w", encoding="utf-8", newline="").write(s)
    # sehir_tarihce baghdad
    B = kayit("sehir_tarihce_yakin-dogu-a.js", "baghdad")
    for o in B["olay"]:
        if o["t"] == "1059-01-01" and "Besâsîrî" in o["b"]:
            o["ic_not"] = "HAKEM13 (LAB, 17 Kasım 2026): TDV 'Ocak 1059' doğu yakası/Rusâfa hutbesi/halife esiri olgularına uyar; Bağdat'a GİRİŞ 27 Aralık 1058 (İbnü'l-Esîr, Richards 2002). " + IC["Besâsîrî"]
    LOG.append("besasiri: kronoloji b/d/ic_not ayrıştırıldı (esir+Cuma hutbesi çıkarıldı); baghdad olay ic_not")


def kahire_atlas():
    p = yol("yerlesimler.js")
    s = open(p, encoding="utf-8", newline="").read()
    eski = 's:[{f:"0969-07-01",t:"1171-09-13",d:"fatimi",kaynak:"TDV \'Kahire\' (slug kahire)'
    assert s.count(eski) == 1, s.count(eski)
    s = s.replace(eski, 's:[{f:"0969-07-06",t:"1171-09-13",d:"fatimi",kaynak:"HAKEM13 (LAB, 17 Kasım 2026; EMRELİC onayı): f 0969-07-01 -> 0969-07-06 (Jülyen; 17 Şâban 358, Salı): TDV Mısır 6 Temmuz 969 + İbn Hallikân (de Slane 1843): Cevher Fustat\'a girdi, aynı gece Kahire\'nin temeli atıldı; 1 ve 3 Temmuz hiçbir kaynakta yok; 9 Temmuz ilk Fâtımî hutbesi AYRI olgu; çift teyit yazılmaz. Eski kayıt: TDV \'Kahire\' (slug kahire)')
    eski2 = 'kesinlik:{f:"yil"}},{f:"1171-09-13",t:"1250-04-30",d:"eyyubi"'
    assert s.count(eski2) == 1
    s = s.replace(eski2, 'kesinlik:{f:"gun"}},{f:"1171-09-13",t:"1250-04-30",d:"eyyubi"')
    if UYGULA:
        open(p, "w", encoding="utf-8", newline="").write(s)
    # olay 2s_1019
    q = yol("olaylar_2s_1019.js")
    o = open(q, encoding="utf-8", newline="").read()
    ob = '{ bolge:1, t:"0969-07-01",\r\n' if '{ bolge:1, t:"0969-07-01",\r\n' in o else '{ bolge:1, t:"0969-07-01",\n'
    assert o.count('t:"0969-07-01"') == 1
    o = o.replace('t:"0969-07-01"', 't:"0969-07-06"').replace('gun:"Temmuz 969 (Şâban 358)"', 'gun:"6 Temmuz 969 (17 Şâban 358)"')
    if UYGULA:
        open(q, "w", encoding="utf-8", newline="").write(o)
    # çeviri anahtarları + olay_taraf
    import glob
    n = 0
    for f in glob.glob(yol("ceviri_*_olay_*.js")) + [yol("olay_taraf.js")]:
        t = open(f, encoding="utf-8", newline="").read()
        t2 = t.replace('"OLAYLAR_2S1019:0969-07-01:0"', '"OLAYLAR_2S1019:0969-07-06:0"').replace('"0969-07-01|Fâtımîler Mısır\'ı aldı', '"0969-07-06|Fâtımîler Mısır\'ı aldı')
        if t2 != t:
            n += 1
            if UYGULA:
                open(f, "w", encoding="utf-8", newline="").write(t2)
    LOG.append("kahire-atlas: yerlesimler.js s[0].f -> 0969-07-06 (kesinlik f gun), olaylar_2s_1019 t -> 07-06, %d çeviri/olay_taraf dosyasında anahtar yeniden adlandırıldı" % n)


M = {"karakurum": [karakurum], "sehrisebz": [sehrisebz], "kahire": [kahire, kahire_atlas], "turan": [turan], "besasiri": [besasiri]}
for k, fl in M.items():
    if MADDE in ("hepsi", k):
        for f in fl:
            f()
for l in LOG:
    print("[TAMAM]", l)
if UYGULA:
    for p, (ust, ad, veri, crlf) in DOS.items():
        m = yaz_metin(ust, ad, veri)
        if crlf:
            m = m.replace("\n", "\r\n")
        open(p, "w", encoding="utf-8", newline="").write(m)
        print("yazıldı:", os.path.relpath(p, KOK))
else:
    print("DRY-RUN")
