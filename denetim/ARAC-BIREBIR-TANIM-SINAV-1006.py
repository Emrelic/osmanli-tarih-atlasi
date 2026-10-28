# ARAC-BIREBIR-TANIM-SINAV-1006 — TEK BİREBİR TANIMININ (ARAC-TDV-CIKARICI-1006.birebir) İKİ YÖNLÜ SINAVI. SALT OKUR.
#
# Ağa ÇIKMAZ: TDV sayfası yalnız --onbellek'ten okunur (yoksa ÖLÇÜLEMEDİ). Veri dosyalarına bakmaz.
#   ① SENTETİK  — iki yön: tutması gereken TUTAR, tutmaması gereken TUTMAZ (kenar · sıra · ayrı metin · Türkçe İ)
#   ② KÖR       — ESKİ iki aracın #121 millet'te GERÇEKTEN ayrıştığı tracked tablolardan okunur
#                 (ALINTI-264-1006-OLCUM.tsv: TAM/GOVDE · ALINTI-TARAMA-1006.tsv: YOK). Ayrışma yoksa sınav kördür.
#   ③ #121 TEK SONUÇ — yeni iki aracın ÇIKTISI ve önbellekteki gerçek sayfa aynı kovayı söyler (YAKIN-EK)
#   ④ BİREBİR'E KARIŞMAZ — iki çıktıda her YAKIN-EK satırı için BAĞIMSIZ bir kâhin (\b'li regex) kelime sınırlı
#                 eşleşmenin OLMADIĞINI, sınırsız eşleşmenin OLDUĞUNU doğrular; her BİREBİR satırı için tersini
#   ⑤ AYNI DİYENLER DEĞİŞMEZ — 264 evreninde ESKİ iki aracın (264-eski · W30+özet-eski) aynı dediği satırlar
#                 YENİDE de aynı ve değişmemiş olmalı; değişen ADIYLA basılır (beklenen: 0)
# Kullanım: py ARAC-BIREBIR-TANIM-SINAV-1006.py --onbellek <tdv-ham> --w30 <sonuc3.json dizini>
#           --t264-eski <tsv> --t264-yeni <tsv> --olc-eski <json> --olc-yeni <json>
# Çıkış: 0 GEÇTİ · 1 HATA · 2 ÖLÇÜLEMEDİ (temiz DEĞİL)
import sys, os, re, csv, json, importlib.util
sys.stdout.reconfigure(encoding="utf-8")
csv.field_size_limit(10 ** 8)
BURA = os.path.dirname(os.path.abspath(__file__))


def yukle(ad, yol):
    sp = importlib.util.spec_from_file_location(ad, yol)
    m = importlib.util.module_from_spec(sp); sp.loader.exec_module(m); return m


C = yukle("cik", os.path.join(BURA, "ARAC-TDV-CIKARICI-1006.py"))
NRM = yukle("nrm", os.path.join(BURA, "ARAC-NORMAL-0903.py"))
hata, olculemedi = [], []


def bak(ok, ad):
    print(("  ✓ " if ok else "  ✗ ") + ad)
    if not ok: hata.append(ad)


def tsv(p):
    return list(csv.DictReader(open(p, encoding="utf-8"), delimiter="\t"))


def kahin(q, metin):
    """BAĞIMSIZ kâhin (tanımın kopyası DEĞİL, sınavın ölçüsü): tek parçalı alıntı için (sınırlı, sınırsız)."""
    n = lambda s: " ".join(re.findall(r"[a-z0-9]+", NRM.norm(s)))
    a, t = n(q), n(metin)
    return bool(re.search(r"\b" + re.escape(a) + r"\b", t)), a in t


def main():
    a = sys.argv[1:]
    arg = lambda k: a[a.index(k) + 1]
    C.ONBELLEK = os.path.abspath(arg("--onbellek"))

    print("① SENTETİK (iki yön)")
    G = [("GOVDE", "Eçmiyazin, Sîs ve Ahtamar katolikosluklarına bağlıydı. İstanbul fethedildi.")]
    for q, bek in [("Ahtamar katolikosluklarına", "BIREBIR"), ("İSTANBUL fethedildi", "BIREBIR"),
                   ("Sîs ... katolikosluklarına", "BIREBIR"), ("Ahtamar katolikoslukları", "YAKIN-EK"),
                   ("miyazin, Sîs", "YAKIN-EK"), ("fethedildi … İstanbul", "YOK"), ("Ahtamar katolikosluklarınaa", "YOK"),
                   ("..!", "BOS")]:
        b = C.birebir(q, G)
        bak(b["kova"] == bek, f"{q!r} → {b['kova']} (beklenen {bek})")
    b = C.birebir("İmre kral … Erdel prensi", [("OZET", "İmre kral oldu."), ("GOVDE", "Erdel prensi idi.")])
    bak(b["kova"] == "YOK", f"parçalar AYRI metinlerde → {b['kova']} (beklenen YOK: özet+gövde birleştirilmez)")
    b = C.birebir("Ahtamar katolikoslukları", [("OZET", "Ahtamar katolikoslukları"), ("GOVDE", "x")])
    bak(b == dict(kova="BIREBIR", yer="OZET", kenar=""), f"özette birebir → {b}")

    print("② KÖR — eski iki araç #121'de ayrışıyordu")
    o264 = {x["no"]: x for x in tsv(os.path.join(BURA, "ALINTI-264-1006-OLCUM.tsv"))}["121"]
    w30 = [x for x in tsv(os.path.join(BURA, "ALINTI-TARAMA-1006.tsv"))
           if x["slug"] == "millet" and x["alinti"] == o264["alinti"]]
    print(f"    eski 264: {o264['birebir']}/{o264['birebir_yer']} · eski W30: {sorted({x['kova'] for x in w30})}")
    bak(o264["birebir"] == "TAM" and w30 and all(x["kova"] != "BIREBIR" for x in w30),
        "eski tanımlar ayrışıyor (ayrışmasaydı sınav kör olurdu)")

    print("③ #121 millet TEK SONUCA iner")
    Y = {x["no"]: x for x in tsv(arg("--t264-yeni"))}
    E = {x["no"]: x for x in tsv(arg("--t264-eski"))}
    oy = json.load(open(arg("--olc-yeni"), encoding="utf-8"))
    oe = json.load(open(arg("--olc-eski"), encoding="utf-8"))
    kod, h = C.getir("millet") if os.path.exists(C.ONBELLEK) else ("YOK", "")
    if kod != "200":
        olculemedi.append("millet önbellekte yok")
    else:
        sayfa = C.birebir(Y["121"]["alinti"], C.alinti_metinleri(C.tam(h)))
        w30y = [d["yeni"] for d in oy["degisen"] if d["slug"] == "millet" and d["alinti"] == Y["121"]["alinti"]]
        print(f"    sayfa: {sayfa} · 264-yeni: {Y['121']['birebir']}/{Y['121']['birebir_kenar']} · W30-yeni: {w30y}")
        bak(sayfa["kova"] == Y["121"]["birebir"] == "YAKIN-EK" and w30y and set(w30y) == {"YAKIN-EK"},
            "#121: sayfa = 264 aracı = W30 aracı = YAKIN-EK")

    print("④ YAKIN-EK BİREBİR'e karışmaz (bağımsız kâhin, iki çıktı)")
    S = {(r["dosya"], r["satir"], r["alinti"]): r for r in json.load(open(os.path.join(arg("--w30"), "sonuc3.json"),
                                                                         encoding="utf-8"))}
    sayfa_onb = {}

    def metinler(slug):
        if slug not in sayfa_onb:
            k, hh = C.getir(slug)
            sayfa_onb[slug] = C.alinti_metinleri(C.tam(hh)) if k == "200" else None
        return sayfa_onb[slug]

    sinanan = kotu = 0
    adaylar = [(x["slug"], x["alinti"], x["birebir"]) for x in Y.values() if x["birebir"] in ("YAKIN-EK", "BIREBIR")]
    adaylar += [(d["slug"], d["alinti"], d["yeni"]) for d in oy["degisen"] if d["yeni"] == "YAKIN-EK"]
    adaylar += [(d["slug"], d["alinti"], "YAKIN-EK") for d in oy.get("tanim_farki", []) if d["yeni"] == "YAKIN-EK"]
    for slug, q, kova in adaylar:
        if len(C.birebir_parcalari(q)) != 1: continue        # kâhin tek parçalı alıntıyı sınar
        m = metinler(slug)
        if m is None: olculemedi.append("önbellekte yok " + slug); continue
        sin = [kahin(q, t) for _, t in m]
        sinirli, sinirsiz = any(s[0] for s in sin), any(s[1] for s in sin)
        ok = (not sinirli and sinirsiz) if kova == "YAKIN-EK" else sinirli
        sinanan += 1; kotu += not ok
        if not ok: print(f"    ✗ {slug} {kova} sınırlı={sinirli} sınırsız={sinirsiz} | {q[:90]}")
    bak(sinanan > 0 and kotu == 0, f"{sinanan} satır kâhine soruldu, uyuşmayan {kotu}")
    yk = [d for d in oy["degisen"] if d["yeni"] == "YAKIN-EK"]
    bak(all(d["yeni"] != "BIREBIR" for d in oy["degisen"] if d.get("kenar")), "kenar bilgisi taşıyan hiçbir satır BİREBİR değil")
    print(f"    YAKIN-EK kovası: W30 {len(yk)} satır · 264 {sum(x['birebir'] == 'YAKIN-EK' for x in Y.values())} satır")

    print("⑤ 264 evreninde eski iki aracın AYNI dediği satırlar değişmez")
    def w30_son(olc, r):
        d = {(x["dosya"], str(x["satir"]), x["alinti"]): x["yeni"] for x in olc["degisen"]}
        return d.get((r["dosya"], str(r["satir"]), r["alinti"]), r["alt_kova"])
    ayni = degisen = esles_yok = 0
    for no, e in E.items():
        r = None
        for kon in e["w30_konum"].split(" · "):      # ikiz dosyalar: bir satır birden çok konum taşıyabilir
            dosya, _, sat = kon.strip().partition(":")
            r = r or (S.get((dosya, int(sat), e["alinti"])) if sat.isdigit() else None)
        if r is None: esles_yok += 1; print(f"    eşleşmedi #{no} {e['slug']} {e['w30_konum']}"); continue
        bir = lambda k: "BIREBIR" if k in ("BIREBIR", "TAM", "NORM") else ("YOK" if k.startswith("YOK") else k)
        eski_264, eski_w = bir(e["birebir"]), bir(w30_son(oe, r))
        yeni_264, yeni_w = bir(Y[no]["birebir"]), bir(w30_son(oy, r))
        if (eski_264 == "BIREBIR") == (eski_w == "BIREBIR"):
            ayni += 1
            if (yeni_264 == "BIREBIR") != (eski_264 == "BIREBIR") or (yeni_w == "BIREBIR") != (eski_w == "BIREBIR"):
                degisen += 1; print(f"    ✗ #{no} {e['slug']}: 264 {eski_264}→{yeni_264} · W30 {eski_w}→{yeni_w}")
        else:
            print(f"    ayrışan #{no} {e['slug']}: eski 264 {eski_264} · eski W30 {eski_w} → yeni 264 {yeni_264} · W30 {yeni_w}")
            bak(yeni_264 == yeni_w, f"#{no} artık iki araçta aynı ({yeni_264})")
    print(f"    264 satır · W30'da eşleşen {len(E) - esles_yok} · eski iki araç AYNI {ayni} · bunlardan değişen {degisen}")
    if esles_yok: olculemedi.append(f"264 satırının {esles_yok}'i W30 sonucunda bulunamadı")
    bak(ayni > 0 and degisen == 0, "eski iki aracın aynı dediği satırların hiçbiri değişmedi (BİREBİR/değil ekseninde)")
    bak(not oy["kontrol_fark"], f"W30 yeniden üretim: açıklanamayan fark {len(oy['kontrol_fark'])}")

    if olculemedi: print("ÖLÇÜLEMEDİ:", olculemedi[:10])
    print("SINAV:", f"{len(hata)} HATA" if hata else ("ÖLÇÜLEMEDİ" if olculemedi else "GEÇTİ"))
    return 1 if hata else (2 if olculemedi else 0)


if __name__ == "__main__":
    sys.exit(main())
