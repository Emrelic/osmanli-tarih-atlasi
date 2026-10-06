# ARAC-TDV-CIKARICI-OZET-SINAV-1006 — `tam()`a eklenen `ozet` alanının (div.article_info) İKİ YÖNLÜ sınavı.
# SALT OKUR. Ağa yalnız önbellekte olmayan slug için çıkar (önbellek --onbellek, yazılırsa yalnız oraya).
#
#   İLERİ  : ALINTI-264-1006.tsv'de birebir_olcum = TAM/OZET olan 7 tırnak — ESKİ tam() ile YOK, YENİ ile VAR.
#   GERİ   : ① ESKİ ile VAR olan her tırnak (264'ün TAM/GOVDE'si + ALINTI-TARAMA-1006.tsv'nin BIREBIR satırları)
#              YENİ ile de VAR ve hâlâ GÖVDEDE (özete kaçmadı).
#            ② `govde`, `kaynakca`, `bolumler`, `gonderme` ESKİ ile YENİ arasında BAYT BAYT aynı (gövde şişmedi).
#            ③ özet gövdeye karışmadı: hiçbir sayfada `ozet` metni yeni `govde`nin içine EKLENMEDİ.
#   KÖR SINAV: ESKİ tam()'da `ozet` alanı YOK olmalı (yoksa sınav eski/yeni ayrımını ölçmüyor demektir).
#
# ESKİ tam(): denetim/ARAC-TDV-CIKARICI-1006.py'nin yamadan önceki hâli, git nesnesinden (ESKI_KAYIT) okunur.
# Kullanım: py ARAC-TDV-CIKARICI-OZET-SINAV-1006.py --onbellek <tdv-ham dizini> [--tarama-sinir N]
# Çıkış: 0 GEÇTİ · 1 HATA · 2 ÖLÇÜLEMEDİ (eski sürüm/tablo/gövde okunamadı — temiz DEĞİL).
import sys, os, re, csv, subprocess, importlib.util, types
sys.stdout.reconfigure(encoding="utf-8")
BURA = os.path.dirname(os.path.abspath(__file__))
KOK = os.path.dirname(BURA)
ESKI_KAYIT = "7db335a2"   # origin/makine/umit, yamadan önce
csv.field_size_limit(10 ** 8)


def yukle(ad, yol=None, kaynak=None):
    if kaynak is not None:
        m = types.ModuleType(ad); m.__file__ = ad
        exec(compile(kaynak, ad, "exec"), m.__dict__); return m
    sp = importlib.util.spec_from_file_location(ad, yol)
    m = importlib.util.module_from_spec(sp); sp.loader.exec_module(m); return m


def N_yap(nrm):
    def N(s):
        s = re.sub(r"[^a-z0-9]+", " ", nrm.norm(s))
        return " " + re.sub(r"\s+", " ", s).strip() + " "
    BOS = re.compile(r" · |\.\.\.|…|\[\s*\.\.\.\s*\]|\[…\]")
    def parcalar(q):
        p = [N(x) for x in BOS.split(q)]
        p = [x for x in p if x.split()]
        return p or [N(q)]
    return N, parcalar


def main():
    a = sys.argv[1:]
    onb = a[a.index("--onbellek") + 1] if "--onbellek" in a else None
    sinir = int(a[a.index("--tarama-sinir") + 1]) if "--tarama-sinir" in a else None
    olculemedi = []
    yeni = yukle("yeni", os.path.join(BURA, "ARAC-TDV-CIKARICI-1006.py"))
    r = subprocess.run(["git", "-C", KOK, "show", f"{ESKI_KAYIT}:denetim/ARAC-TDV-CIKARICI-1006.py"],
                       capture_output=True)
    if r.returncode:
        print("ÖLÇÜLEMEDİ: eski çıkarıcı git nesnesi okunamadı", ESKI_KAYIT); return 2
    eski = yukle("eski", kaynak=r.stdout.decode("utf-8"))
    if onb:
        yeni.ONBELLEK = eski.ONBELLEK = os.path.abspath(onb)
    nrm = yukle("nrm", os.path.join(BURA, "ARAC-NORMAL-0903.py"))
    N, parcalar = N_yap(nrm)
    hata = 0
    sayfa = {}

    def iki(slug):
        if slug not in sayfa:
            kod, h = yeni.getir(slug)
            sayfa[slug] = None if kod != "200" else (eski.tam(h), yeni.tam(h))
        return sayfa[slug]

    def var_mi(q, metinler, sinirsiz=False):
        """('OZET'|'GOVDE'|None): bütün parçalar özette ya da gövdede geçiyor mu. Varsayılan: kelime sınırlı
        (W30 esle.py ile aynı). sinirsiz=True: son kelime ek alabilir ('katolikosluklari' ⊂ '…larina')."""
        pp = parcalar(q); NM = [(ad, N(t)) for ad, t in metinler]
        if sinirsiz: pp = [p.rstrip() for p in pp]
        yer = []
        for p in pp:
            bul = [ad for ad, t in NM if p in t]
            if not bul: return None
            yer.append(bul[0] if "GOVDE" not in bul else "GOVDE")
        return "GOVDE" if all(y == "GOVDE" for y in yer) else "OZET"

    # ---- kör sınav
    t0 = iki("kilitbahir-kalesi")
    if t0 is None:
        olculemedi.append("kilitbahir-kalesi çekilemedi")
    else:
        if "ozet" in t0[0]:
            print("✗ KÖR: eski tam() zaten `ozet` döndürüyor — sınav eskiyi/yeniyi ayırmıyor"); hata += 1
        if not t0[1].get("ozet"):
            print("✗ yeni tam() kilitbahir-kalesi özetini döndürmedi"); hata += 1

    # ---- İLERİ + GERİ (264)
    R = list(csv.DictReader(open(os.path.join(BURA, "ALINTI-264-1006.tsv"), encoding="utf-8"), delimiter="\t"))
    ileri = [x for x in R if x["birebir_olcum"] == "TAM/OZET"]
    geri264 = [x for x in R if x["birebir_olcum"] == "TAM/GOVDE"]
    print(f"İLERİ evreni: {len(ileri)} (beklenen 7) · GERİ-264 evreni: {len(geri264)}")
    if len(ileri) != 7:
        print("✗ İLERİ evreni 7 değil"); hata += 1
    for x in ileri:
        t = iki(x["slug"])
        if t is None: olculemedi.append("çekilemedi " + x["slug"]); continue
        once = var_mi(x["alinti"], [("GOVDE", t[0]["govde"])])
        sonra = var_mi(x["alinti"], yeni.alinti_metinleri(t[1]))
        ok = once is None and sonra == "OZET"
        print(f"  {'✓' if ok else '✗'} #{x['no']} {x['slug']}: önce {once or 'YOK'} → sonra {sonra or 'YOK'}")
        hata += not ok
    for x in geri264:
        t = iki(x["slug"])
        if t is None: olculemedi.append("çekilemedi " + x["slug"]); continue
        # 264'ün ölçümü kelime sınırı aramıyordu; geri yön AYNI eşleştiriciyle sorulur (önce VAR ⇒ sonra VAR, aynı yerde)
        for sz in (False, True):
            once = var_mi(x["alinti"], [("GOVDE", t[0]["govde"])], sz)
            sonra = var_mi(x["alinti"], yeni.alinti_metinleri(t[1]), sz)
            ok = once == sonra
            print(f"  {'✓' if ok else '✗'} GERİ #{x['no']} {x['slug']} ({'sınırsız' if sz else 'kelime sınırlı'}):"
                  f" önce {once or 'YOK'} → sonra {sonra or 'YOK'}")
            hata += not ok

    # ---- GERİ (ALINTI-TARAMA BİREBİR) + yapı özdeşliği
    T = list(csv.DictReader(open(os.path.join(BURA, "ALINTI-TARAMA-1006.tsv"), encoding="utf-8"), delimiter="\t"))
    bir = [x for x in T if x["kova"] == "BIREBIR" and x["slug"]]
    if sinir: bir = bir[:sinir]
    dus, gondermeli, olcul = [], 0, 0
    for x in bir:
        t = iki(x["slug"])
        if t is None: olculemedi.append("çekilemedi " + x["slug"]); continue
        if not t[0]["bolumler"] and t[0]["gonderme"]:
            gondermeli += 1; continue      # W30 gövdesi hedef maddelerden birleşti; burada ölçülmez (aşağıda sayılır)
        olcul += 1
        once = var_mi(x["alinti"], [("GOVDE", t[0]["govde"])])
        sonra = var_mi(x["alinti"], yeni.alinti_metinleri(t[1]))
        if once != "GOVDE" or sonra != "GOVDE":
            dus.append((x["dosya"], x["satir"], x["slug"], once, sonra))
    print(f"GERİ-TARAMA: BİREBİR {len(bir)} satır · ölçülen {olcul} · gönderme sayfası (atlandı) {gondermeli}"
          f" · düşen/yer değiştiren {len(dus)}")
    for d in dus[:20]: print("  ✗", d)
    hata += len(dus)
    ozdes_bozuk, ozet_govdede, ozet_bos = [], [], 0
    for s, t in sayfa.items():
        if t is None: continue
        e, y = t
        for k in ("govde", "kaynakca", "bolumler", "gonderme", "baslik"):
            if e[k] != y[k]: ozdes_bozuk.append((s, k))
        if not y["ozet"]: ozet_bos += 1
        elif y["ozet"] in y["govde"] and y["ozet"] not in e["govde"]: ozet_govdede.append(s)
    print(f"YAPI: {len(sayfa)} sayfa · alan farkı {len(ozdes_bozuk)} · özet gövdeye karışan {len(ozet_govdede)}"
          f" · özeti boş sayfa {ozet_bos}")
    for d in ozdes_bozuk[:10]: print("  ✗ alan farkı", d)
    hata += len(ozdes_bozuk) + len(ozet_govdede)
    if olculemedi:
        print("ÖLÇÜLEMEDİ:", len(olculemedi), olculemedi[:10])
    print("SINAV:", "GEÇTİ" if not hata and not olculemedi else (f"{hata} HATA" if hata else "ÖLÇÜLEMEDİ"))
    return 1 if hata else (2 if olculemedi else 0)


if __name__ == "__main__":
    sys.exit(main())
