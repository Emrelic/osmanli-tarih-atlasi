# -*- coding: utf-8 -*-
"""
SINAV-BIRLESTIR-0907 — ARAC-BIRLESTIR-SINIR-0907.py'nin C13 DORT AYAK sinavi.

    BIRLESTIRICI-0907 · 7 Eylul 2026

C13 (CLAUDE.md §11) — bir denetim SU DORT YOL kosulmadan "calisiyor" sayilmaz:
    ① GECME     kusur YOKKEN temiz diyor mu           (yanlis pozitif uretmiyor)
    ② ATESLEME  HER kusur dali icin AYRI AYRI otuyor mu
    ③ GIRDI     girdiyi GERCEK kaynagindan (DOSYADAN) okuma yolu kosuldu mu
    ④ CIKTI     aletin cevabini DOGRU YERDEN okudugumu gosteriyor muyum —
                bilerek kusurlu girdi ver, alet BILDIRSIN

🔴 ①-③ tamamen DOSYA YOLUNDAN kosar: her fikstur diske yazilir ve alet
   ALT SUREC olarak cagrilir. Enjekte girdiyle yapilan bir sinav
   ayristiriciyi hic cagirmaz — ve bu projede kusurlarin cogu ayristiricida
   (`_bk_nobetci` vakasi, CLAUDE.md §11).
   TEK ISTISNA asagida ADIYLA isaretlidir: `ad_carpismasi` dali gercek
   veriyle ateslenemez (ad bolge adindan turetiliyor), o dal enjekte edilir.

KULLANIM
    py denetim/SINAV-BIRLESTIR-0907.py
CIKIS   0 = dort ayak da gecti · 1 = en az bir dal DUSTU
"""
import json
import os
import shutil
import subprocess
import sys
import tempfile

sys.stdout.reconfigure(encoding="utf-8")

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
ALET = os.path.join(KOK, "denetim", "ARAC-BIRLESTIR-SINIR-0907.py")

SONUC = []


def bildir(ayak, dal, gecti, ayrinti=""):
    SONUC.append((ayak, dal, gecti, ayrinti))
    print("   %s %-9s %-38s %s" % ("🟢" if gecti else "🔴", ayak, dal, ayrinti))


# ─────────────────────────────────────────────────────────────────────────────
# fikstur uretimi — TEMIZ bir kol, sonra ondan BOZULMUS turevleri
# ─────────────────────────────────────────────────────────────────────────────

def temiz_kayit(a, b, hal="hukuki"):
    return {
        "a": a, "b": b,
        "f": "1923-07-24", "t": "1923-10-29", "t_cinsi": "pencere",
        "hal": hal, "dayanak": "Lozan", "dayanak_t": "1923-07-24",
        "kaynak": "lozan-antlasmasi",
        "gc": [[[26.0, 41.0], [26.1, 41.1]]],
        "ne_a": "Turkey", "ne_b": "Greece",
    }


def kol_yaz(dizin, bolge, kayitlar, kapsayici="kenarlar", ust=None, ham_metin=None):
    yol = os.path.join(dizin, "SINIR-HUKUKI-%s-0907.json" % bolge)
    if ham_metin is not None:
        open(yol, "w", encoding="utf-8").write(ham_metin)
        return yol
    d = dict(ust or {})
    d["_NOT"] = "FIKSTUR — SINAV-BIRLESTIR-0907"
    d[kapsayici] = kayitlar
    json.dump(d, open(yol, "w", encoding="utf-8"), ensure_ascii=False)
    return yol


def temiz_kume(dizin):
    """Iki kol, cakismasiz, sema-tam. GECME yolunun tabani."""
    k1 = temiz_kayit("Greece", "Turkey")
    k2 = dict(temiz_kayit("Bulgaria", "Turkey"), ne_a="Bulgaria", ne_b="Turkey")
    k3 = dict(temiz_kayit("Albania", "Greece", hal="bulunamadi"),
              ne_a="Albania", ne_b="Greece", dayanak="bulunamadi", dayanak_t="bulunamadi")
    kol_yaz(dizin, "ANADOLU", [k1, k2])
    kol_yaz(dizin, "BALKAN", [k3], kapsayici="kenar")
    return 3


def alet_kos(dizin, ek=None, json_yol=None):
    cmd = [sys.executable, ALET, "--dizin", dizin, "--sessiz"]
    if json_yol:
        cmd += ["--json", json_yol]
    if ek:
        cmd += ek
    p = subprocess.run(cmd, capture_output=True, text=True, encoding="utf-8", cwd=KOK)
    rapor = None
    if json_yol and os.path.exists(json_yol):
        rapor = json.load(open(json_yol, encoding="utf-8"))
    return p.returncode, p.stdout + p.stderr, rapor


def kirmizilar(rapor):
    return [b for b in (rapor or {}).get("bulgular", []) if b["tur"] == "KIRMIZI"]


# ─────────────────────────────────────────────────────────────────────────────
# ① GECME
# ─────────────────────────────────────────────────────────────────────────────

def ayak_gecme(tmp):
    print("")
    print("① GECME — kusur YOKKEN temiz diyor mu")
    d = os.path.join(tmp, "gecme"); os.makedirs(d)
    n = temiz_kume(d)
    jy = os.path.join(tmp, "gecme.json")
    kod, cikti, rapor = alet_kos(d, ["--bolgeler", "ANADOLU,BALKAN"], jy)
    kr = kirmizilar(rapor)
    bildir("GECME", "temiz kumede KIRMIZI yok", kod == 0 and not kr,
           "cikis=%d kirmizi=%d" % (kod, len(kr)) + ("" if not kr else " -> %s" % kr[0]["mesaj"][:60]))
    bildir("GECME", "kayitlarin hepsi okundu", rapor and sum(k["kayit"] for k in rapor["kollar"].values()) == n,
           "%d/%d kayit" % (sum(k["kayit"] for k in (rapor or {}).get("kollar", {}).values()), n))
    bildir("GECME", "mukerrer YOK diyor",
           rapor is not None and not rapor["bolgeler_arasi_mukerrer"] and not rapor["kol_ici_mukerrer"], "")
    # URETIM de temiz yolda kosulmali — yoksa uretim dali hic sinanmamis olur
    hedef = os.path.join(tmp, "uretim")
    kod2, _, rapor2 = alet_kos(d, ["--bolgeler", "ANADOLU,BALKAN", "--uret", "--hedef", hedef],
                               os.path.join(tmp, "gecme2.json"))
    dd = (rapor2 or {}).get("cikti_dogrulamasi") or {}
    dosyalar = dd.get("dosyalar", [])
    tamam = (len(dosyalar) == 2
             and all(x.get("ad_var") and x.get("dizi_mi") and x.get("sayi") == x.get("beklenen")
                     and x.get("tanimlanan_adlar") == [x["ad"]] for x in dosyalar)
             and not dd.get("ad_carpismasi"))
    bildir("GECME", "uretilen .js node+vm ile geri okundu", tamam,
           "%d dosya · ad carpismasi %d" % (len(dosyalar), len(dd.get("ad_carpismasi", []))))


# ─────────────────────────────────────────────────────────────────────────────
# ② ATESLEME — her kusur dali AYRI AYRI
# ─────────────────────────────────────────────────────────────────────────────

def _guvenli(ad):
    return "".join(c if c.isalnum() else "_" for c in ad)[:40]


def dal_kos(tmp, ad, kur, bolgeler="ANADOLU,BALKAN"):
    d = os.path.join(tmp, "at_" + _guvenli(ad)); os.makedirs(d, exist_ok=True)
    temiz_kume(d)
    kur(d)
    jy = os.path.join(tmp, "at_%s.json" % _guvenli(ad))
    kod, cikti, rapor = alet_kos(d, ["--bolgeler", bolgeler], jy)
    return kod, rapor


def ayak_atesleme(tmp):
    print("")
    print("② ATESLEME — her kusur dali icin AYRI AYRI")

    def bozuk(ad, kur, beklenen_parca, bolgeler="ANADOLU,BALKAN"):
        kod, rapor = dal_kos(tmp, ad, kur, bolgeler)
        kr = kirmizilar(rapor)
        vur = [b for b in kr if beklenen_parca.lower() in b["mesaj"].lower()]
        bildir("ATESLEME", ad, bool(vur) and kod == 1,
               "cikis=%d · '%s' -> %d bulgu" % (kod, beklenen_parca, len(vur)))

    def zorunlu_alan_yok(d):
        k = temiz_kayit("Greece", "Turkey"); k.pop("dayanak")
        kol_yaz(d, "ANADOLU", [k])
    bozuk("zorunlu alan yok", zorunlu_alan_yok, "ZORUNLU ALAN YOK")

    def gecersiz_hal(d):
        k = temiz_kayit("Greece", "Turkey"); k["hal"] = "ic-idari"
        kol_yaz(d, "ANADOLU", [k])
    bozuk("hal DORT degerden biri degil", gecersiz_hal, "DORT degerden biri degil")

    def dorduncu_hal(d):
        # M-3183: 'ayni-kimlik' KABUL EDILMELI — bu bir kusur dali DEGIL,
        # dorduncu degerin gercekten taninip taninmadiginin sinavi.
        k = temiz_kayit("Greece", "Turkey"); k["hal"] = "ayni-kimlik"
        kol_yaz(d, "ANADOLU", [k])
    kod, rapor = dal_kos(tmp, "hal_ayni_kimlik", dorduncu_hal)
    kr = [b for b in kirmizilar(rapor) if "hal=" in b["mesaj"]]
    bildir("ATESLEME", "hal='ayni-kimlik' KABUL (M-3183)", not kr, "kirmizi=%d" % len(kr))

    def gc_bos(d):
        k = temiz_kayit("Greece", "Turkey"); k["gc"] = []
        kol_yaz(d, "ANADOLU", [k])
    bozuk("gc BOS []", gc_bos, "gc BOS")

    def gc_tip(d):
        k = temiz_kayit("Greece", "Turkey"); k["gc"] = "LINESTRING(...)"
        kol_yaz(d, "ANADOLU", [k])
    bozuk("gc LISTE DEGIL", gc_tip, "gc LISTE DEGIL")

    def ters_sira(d):
        k = temiz_kayit("Turkey", "Greece")     # a > b
        kol_yaz(d, "ANADOLU", [k])
    bozuk("ANAHTAR KARARSIZ (a > b)", ters_sira, "ANAHTAR KARARSIZ")

    def bos_uc(d):
        k = temiz_kayit(None, None)
        kol_yaz(d, "ANADOLU", [k])
    bozuk("a/b BOS", bos_uc, "a/b BOS")

    def kapsayici_yok(d):
        json.dump({"_NOT": "liste yok"}, open(
            os.path.join(d, "SINIR-HUKUKI-ANADOLU-0907.json"), "w", encoding="utf-8"))
    bozuk("KAYIT LISTESI YOK (sessiz sifir)", kapsayici_yok, "KAYIT LISTESI YOK")

    def kapsayici_belirsiz(d):
        json.dump({"kenarlar": [temiz_kayit("Greece", "Turkey")],
                   "kayitlar": [temiz_kayit("Bulgaria", "Turkey")]},
                  open(os.path.join(d, "SINIR-HUKUKI-ANADOLU-0907.json"), "w", encoding="utf-8"),
                  ensure_ascii=False)
    bozuk("BELIRSIZ KAPSAYICI (2 aday liste)", kapsayici_belirsiz, "BELIRSIZ KAPSAYICI")

    def bozuk_json(d):
        kol_yaz(d, "ANADOLU", None, ham_metin='{"kenarlar": [ {"a": }')
    bozuk("JSON AYRISTIRILAMADI", bozuk_json, "AYRISTIRILAMADI")

    def kol_ici_mukerrer(d):
        k = temiz_kayit("Greece", "Turkey")
        kol_yaz(d, "ANADOLU", [k, dict(k)])
    bozuk("KOL ICI MUKERRER", kol_ici_mukerrer, "KOL ICI MUKERRER")

    # bolgeler arasi mukerrer SARI'dir (hukum koordinatorde) — ayri sinanir
    def carpraz(d):
        k = temiz_kayit("Greece", "Turkey")
        kol_yaz(d, "BALKAN", [k], kapsayici="kenar")
    kod, rapor = dal_kos(tmp, "carpraz", carpraz)
    n = len((rapor or {}).get("bolgeler_arasi_mukerrer", []))
    bildir("ATESLEME", "BOLGELER ARASI MUKERRER sayiliyor", n == 1, "%d mukerrer kenar" % n)

    # ── MUKERRER GEOMETRI dallari ──────────────────────────────────────────
    def geo_farkli(d):
        k = temiz_kayit("Greece", "Turkey")
        k2 = dict(k, gc=[[[99.0, 9.0], [99.1, 9.1]]])    # AYNI kenar, BASKA cizgi
        kol_yaz(d, "BALKAN", [k2], kapsayici="kenar")
    bozuk("MUKERRER GEOMETRI FARKLI", geo_farkli, "GEOMETRISI FARKLI")

    def geo_bos_taraf(d):
        k = dict(temiz_kayit("Greece", "Turkey"), gc=[])  # AYNI kenar, gc BOS
        kol_yaz(d, "BALKAN", [k], kapsayici="kenar")
    kod, rapor = dal_kos(tmp, "geo_bos_taraf", geo_bos_taraf)
    g = (rapor or {}).get("mukerrer_geometri", {})
    bildir("ATESLEME", "MUKERRER, BIR TARAF BOS ayri kovada",
           len(g.get("bos_taraf", [])) == 1 and not g.get("farkli"),
           "bos_taraf=%d farkli=%d ayni=%d" % (len(g.get("bos_taraf", [])),
                                               len(g.get("farkli", [])), len(g.get("ayni", []))))

    # 🔴 AD VARYANTI dali — iki kol AYNI kenari FARKLI NE ad alanindan yazarsa
    #    ham ad tabanli mukerrer tespiti onu GORMEZ. Kanonik sinav gormeli.
    def ad_varyanti(d):
        k = dict(temiz_kayit("Republic of Serbia", "Romania"),
                 ne_a="Republic of Serbia", ne_b="Romania")   # ADMIN yazimi
        k2 = dict(temiz_kayit("Romania", "Serbia"), ne_a="Romania", ne_b="Serbia")  # NAME yazimi
        kol_yaz(d, "ANADOLU", [k])
        kol_yaz(d, "BALKAN", [k2], kapsayici="kenar")
    bozuk("AD VARYANTI MUKERRERI GIZLEMIS", ad_varyanti, "AD VARYANTI MUKERRERI GIZLEMIS")

    # NE ekseni bulunamayan kol
    def ne_yok(d):
        k = temiz_kayit("Zzzz-Yok-Ulke-1", "Zzzz-Yok-Ulke-2")
        k.pop("ne_a"); k.pop("ne_b")
        kol_yaz(d, "ANADOLU", [k])
    bozuk("NE ekseni BULUNAMADI", ne_yok, "NE ekseni BULUNAMADI")

    # ⚪ eksik dosya 🔴 DEGIL — 'henuz yazilmadi' ile 'bozuk' ayni kovaya girmemeli
    d = os.path.join(tmp, "at_eksik"); os.makedirs(d)
    temiz_kume(d)
    os.remove(os.path.join(d, "SINIR-HUKUKI-BALKAN-0907.json"))
    kod, _, rapor = alet_kos(d, ["--bolgeler", "ANADOLU,BALKAN"], os.path.join(tmp, "at_eksik.json"))
    bildir("ATESLEME", "EKSIK DOSYA kirmizi DEGIL (⚪)",
           kod == 0 and rapor and rapor["eksik"] == ["BALKAN"] and not kirmizilar(rapor),
           "cikis=%d eksik=%s" % (kod, (rapor or {}).get("eksik")))


# ─────────────────────────────────────────────────────────────────────────────
# ③ GIRDI — GERCEK dosyalardan, gercek dizinden
# ─────────────────────────────────────────────────────────────────────────────

def ayak_girdi(tmp):
    print("")
    print("③ GIRDI — alet GERCEK denetim/ dizininden okuyor mu")
    jy = os.path.join(tmp, "gercek.json")
    kod, cikti, rapor = alet_kos(os.path.join(KOK, "denetim"), None, jy)
    var = sorted(rapor["kollar"]) if rapor else []
    toplam = sum(k["kayit"] for k in (rapor or {}).get("kollar", {}).values())
    bildir("GIRDI", "gercek dosyalar okundu", bool(var) and toplam > 0,
           "%d kol · %d kayit · eksik: %s" % (len(var), toplam, (rapor or {}).get("eksik")))
    # 🔴 En kritik nokta: alet gercek veride 0 kayit gorup sessizce gecmemeli.
    kp = (rapor or {}).get("kapsama")
    bildir("GIRDI", "KAPSAMA gercek referanstan olculdu",
           kp is not None and kp.get("referans_kanonik", 0) > 0,
           "kapsanan %s/%s · eksik %s · fazla %s" % (
               (kp or {}).get("kapsanan"), (kp or {}).get("referans_kanonik"),
               len((kp or {}).get("eksik", [])), len((kp or {}).get("fazla", []))))
    av = (rapor or {}).get("ad_varyanti_sinavi") or {}
    bildir("GIRDI", "AD VARYANTI sinavi gercek veride kostu",
           av.get("kanonik_benzersiz") is not None,
           "kanonik %s benzersiz · gizlenen %s" % (av.get("kanonik_benzersiz"),
                                                   len(av.get("gizlenen_mukerrer", []))))
    bildir("GIRDI", "hicbir kol '0 kayit' ile sessizce gecmedi",
           all(k["kayit"] > 0 for k in (rapor or {}).get("kollar", {}).values()),
           ", ".join("%s=%d" % (b, k["kayit"]) for b, k in sorted((rapor or {}).get("kollar", {}).items())))
    return rapor


# ─────────────────────────────────────────────────────────────────────────────
# ④ CIKTI — aletin cevabini DOGRU YERDEN okuyor muyum
# ─────────────────────────────────────────────────────────────────────────────

def ayak_cikti(tmp):
    print("")
    print("④ CIKTI — bilerek kusurlu girdi ver, alet BILDIRSIN")

    # (a) uretilen .js GERCEKTEN yuklenebiliyor ve sayilar tutuyor mu
    d = os.path.join(tmp, "ck"); os.makedirs(d)
    temiz_kume(d)
    hedef = os.path.join(tmp, "ck_out")
    jy = os.path.join(tmp, "ck.json")
    kod, _, rapor = alet_kos(d, ["--bolgeler", "ANADOLU,BALKAN", "--uret", "--hedef", hedef], jy)
    dd = (rapor or {}).get("cikti_dogrulamasi") or {}
    bildir("CIKTI", "node+vm dogrulamasi GERCEKTEN kostu",
           bool(dd.get("dosyalar")) and "_hata" not in dd,
           "%d dosya" % len(dd.get("dosyalar", [])))

    # (b) 🔴 dosya diskte BOZULURSA dogrulama bunu SOYLEMELI.
    #     Sessizce 'tamam' derse, bozuk olan aletin cevabini OKUYUSUMDUR.
    yollar = sorted(f for f in os.listdir(hedef) if f.endswith(".js"))
    kurban = os.path.join(hedef, yollar[0])
    govde = open(kurban, encoding="utf-8").read()
    open(kurban, "w", encoding="utf-8").write(govde.replace("window.SINIR_HUKUKI_", "window.BASKA_AD_"))
    sys.path.insert(0, os.path.join(KOK, "denetim"))
    import importlib.util
    spec = importlib.util.spec_from_file_location("arac_birlestir", ALET)
    mod = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(mod)
    liste = [(rec["bolge"], os.path.join(hedef, os.path.basename(rec["yol"])),
              rec["ad_alani"], rec["kayit"]) for rec in rapor["uretilen"]]
    d2 = mod.cikti_dogrula(liste)
    bozulan = [x for x in d2["dosyalar"] if not x.get("ad_var")]
    bildir("CIKTI", "ad DEGISTIRILINCE 'ad_var=false' diyor", len(bozulan) == 1,
           "%d dosyada ad bulunamadi" % len(bozulan))

    # (c) AD CARPISMASI dali — gercek veriyle atesLENEMEZ (ad bolge adindan
    #     turetiliyor), o yuzden ENJEKTE ediliyor. Dalin adi budur ve
    #     KADEME_YAMA vakasinin (537->137) bekcisidir.
    ikiz = os.path.join(hedef, "ikiz.js")
    open(ikiz, "w", encoding="utf-8").write(
        "window.SINIR_HUKUKI_ANADOLU = [1,2];\nwindow.SINIR_HUKUKI_BALKAN = [3];\n")
    d3 = mod.cikti_dogrula([("IKIZ_A", ikiz, "SINIR_HUKUKI_ANADOLU", 2),
                            ("IKIZ_B", ikiz, "SINIR_HUKUKI_BALKAN", 1)])
    bildir("CIKTI", "AD CARPISMASI otuyor (ENJEKTE dal)",
           len(d3["ad_carpismasi"]) == 2,
           "%d carpisan ad: %s" % (len(d3["ad_carpismasi"]),
                                   [x[0] for x in d3["ad_carpismasi"]]))

    # (d) sayi tutmazsa bildirsin
    d4 = mod.cikti_dogrula([(rec["bolge"], os.path.join(hedef, os.path.basename(rec["yol"])),
                             rec["ad_alani"], rec["kayit"] + 99) for rec in rapor["uretilen"]])
    yanlis = [x for x in d4["dosyalar"] if x.get("sayi") != x.get("beklenen")]
    bildir("CIKTI", "kayit sayisi TUTMAZSA gorunuyor", len(yanlis) >= 1,
           "%d dosyada sayi != beklenen" % len(yanlis))


def main():
    print("=" * 78)
    print("SINAV-BIRLESTIR-0907 — ARAC-BIRLESTIR-SINIR-0907.py · C13 DORT AYAK")
    print("=" * 78)
    if not os.path.exists(ALET):
        print("🔴 alet bulunamadi: %s" % ALET)
        return 1
    if shutil.which("node") is None:
        print("🔴 node bulunamadi — ④ CIKTI ayagi KOSULAMAZ. 'olculemedi', 'temiz' DEGIL.")
        return 1
    tmp = tempfile.mkdtemp(prefix="sinav_birlestir_")
    try:
        ayak_gecme(tmp)
        ayak_atesleme(tmp)
        ayak_girdi(tmp)
        ayak_cikti(tmp)
    finally:
        shutil.rmtree(tmp, ignore_errors=True)
    print("")
    print("=" * 78)
    dusen = [s for s in SONUC if not s[2]]
    ayaklar = {}
    for ayak, dal, gecti, _ in SONUC:
        a = ayaklar.setdefault(ayak, [0, 0])
        a[1] += 1
        if gecti:
            a[0] += 1
    for ayak in ("GECME", "ATESLEME", "GIRDI", "CIKTI"):
        g, t = ayaklar.get(ayak, (0, 0))
        print("   %s %-9s %d/%d dal" % ("🟢" if g == t and t else "🔴", ayak, g, t))
    print("   TOPLAM: %d/%d dal gecti" % (len(SONUC) - len(dusen), len(SONUC)))
    if dusen:
        print("   DUSEN:")
        for ayak, dal, _, ayr in dusen:
            print("      🔴 %-9s %-38s %s" % (ayak, dal, ayr))
    print("=" * 78)
    return 1 if dusen else 0


if __name__ == "__main__":
    sys.exit(main())
