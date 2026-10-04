# -*- coding: utf-8 -*-
"""UFUK SABİTİ ÖLÇÜSÜ (1004) — atlasın kapanış sınırı (`1923-10-29`) kaç yerde, NİÇİN ve hangi BİÇİMDE yazılı?

ÖN ŞART: "1923 sonrasını yayınlanacak hâle getir" ⇒ pencere 1945'e uzayacak. `girdi.UFUK` TEK kaynak DEĞİL:
sınır başka yerlerde SABİT yazılı. Pencere uzayınca sabit yazılı olanlar UZAMAZ. Bu araç ölçer, SINIFLAR, DÜZELTMEZ.

(1) ENVANTER (AST — yorumlar ve docstring SAYILMAZ; JS satır taraması):
    `arac/*.py` içinde kod olarak geçen `"1923-10-29"` (ve motorun ayrı sabiti `"1923-11-01"`), `js/*.js`, `index.html`.
    Her site için: dosya·işlev·satır, BİÇİM (kıyas `>=`/`<`/… · atama · çağrı argümanı), ve elle YAZILMIŞ sınıf tablosu:
      (a) UFUK SINIRI      "atlasın kapanış sınırı" — pencere uzayınca BU DA uzamalı
      (b) VERİ SINIRI      "bu tarihten sonra veri yok" — pencere uzayınca KALKMALI
      (c) KASITLI MUAFİYET "bu tarihten sonrası bilerek denetlenmiyor" — BEYAN gerekir
    🔴 Sınıf tablosu bir ÜYELİK DEFTERİDİR: tabloda olmayan YENİ bir sabit site çıkarsa araç ÖTER (çıkış 1) —
       sessiz yeni sabit eklenemez. Tabloda olup bulunamayan satır HATA DEĞİL, bilgidir.
    BİÇİM sorusu (ikinci eksen): sabit YAZILMIŞ (`"1923-10-29"`) mı, `UFUK[1]`'e BAĞLI mı? Yalnız ilki pencere ile
    KENDİLİĞİNDEN uzamaz.
(2) VERİ ÖLÇÜMÜ (girdi.yukle, bugünkü veri): UFUK sonrası kaç `d:/v:/s:/isg:` sınır olayı (f/t) var; kaç dönem
    TAM `1923-10-29`da bitiyor (= "kapanış işareti"; pencere uzayınca bunlar GERÇEK KIRILMA gibi okunur ve bir
    GÜNDE binlerce sahte kırılma üretir, ya da literal korunursa GERÇEK sonrası kırılmalar KÖRLEŞİR — iki yönlü tuzak).

ÇIKIŞ KODU  0 her site sınıflı · 1 sınıfsız YENİ sabit site VAR · 2 ÖLÇÜLEMEDİ (arac/ yok, girdi okunamadı…)
ARAÇ KONUM/ORTAM: başta/sonda `git rev-parse HEAD` (LAB yöntem kuralı).

KULLANIM
  py denetim/ARAC-UFUK-SABITI-1004.py              envanter + sınıf + veri ölçümü
  py denetim/ARAC-UFUK-SABITI-1004.py --ayrinti    her site satırıyla
  --kok DİZİN   (sınav) veri/`arac` kökü       --arac DİZİN  (sınav) yalnız statik envanterin tarayacağı arac dizini
"""
import ast, collections, glob, io, os, re, sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import krono_ortak_1004 as ko

SABITLER = ("1923-10-29", "1923-11-01")
UFUK_SONU = "1923-10-29"

# ----------------------------------------------------------------------------------------------------------------
# SINIF TABLOSU — elle yazıldı, KOD OKUNARAK (her satır için bağlam okundu). Anahtar: (dosya, işlev, satır-parçası).
# sinif: a | b | c. `genis`: True ⇒ `>=` kalıbı UFUK sonrasının TAMAMINI da süzgeçler/muaf tutar (pencere uzayınca KÖR bölge).
# ----------------------------------------------------------------------------------------------------------------
TABLO = [
    ("arac/denetle.py", "degismez2", 'd >= "1923-10-29"', "a", True,
     "Değişmez 2/2s/2i kırılma evreni: ufuk uçları kırılma değil SINIR işareti (D210). `>=` UFUK sonrasının TAMAMINI da atar"),
    ("arac/denetle.py", "degismez7", 'f >= "1923-10-29"', "a", True,
     "Değişmez 7 (ada/tecrit): dönem başlangıcı pencere dışıysa atlanır; sabit yazılmış"),
    ("arac/denetle.py", "<modül>", 'ATLAS_SONU = "1923-10-29"', "a", False,
     "ADLANDIRILMIŞ ama `girdi.UFUK`tan BAĞIMSIZ ikinci kaynak: `kt < ATLAS_SONU` hayalet-devlet aşma kovasında 'atlas sonuna kadar yaşayan künye' ayrımı"),
    ("arac/denetle_eslesme.py", "a_yanlis_eslesme", 'dt >= "1923-10-29"', "a", True,
     "A bölümü (yanlış eşleşme): `degismez2`nin kırılma kümesini AYNEN taklit eder (kendi yorumu: 'Sınırlar degismez2 ile AYNI')"),
    ("arac/denetle_statu.py", "*", 'g >= "1923-10-29"', "a", True,
     "D-4 işgal örtüsü başı/sonu: Değişmez 2'nin örtü boyutu, aynı süzgeç"),
    ("arac/_yer_eslesme_ok102.py", "*", 'd >= "1923-10-29"', "a", True,
     "`degismez2` kırılma kümesinin KOPYASI (kendi yorumu: 'Kopya olmasının sebebi…') — iki yerde duran bilgi ayrışır"),
    # NOT: `_sahiplik_uygula.py:136` (`d >= "1923-10-29"`) KOD DEĞİL, `maddesi_var()` docstring'inin içindeki ALINTIDIR
    #   (yazarın `denetle.py:916/:1634`ten kopyaladığı örnek satır). Koordinatörün dokuz-yer listesinde SAYILMIŞTI;
    #   AST docstring'i atlar ⇒ koddaki tek site satır 143'tür. Bu, listenin `grep`le çıkarıldığının izi.
    ("arac/_sahiplik_uygula.py", "maddesi_var", 'gun >= "1923-10-29"', "c", True,
     "'SINIR GÜNLERİ MUAF': `maddesi_var()` UFUK sonrasının HER gününe True döner (yorum: sınır bir kırılma değil kapanış işareti). "
     "Sebep (a) ama MUAFİYET `>=` ile sonrasını da kapsıyor ⇒ BEYANSIZ geniş muafiyet; yazıcı araç, pencere uzayınca sonrasını SORMAZ"),
    ("arac/_odunc_tarih.py", "*", 'f >= "1923-10-29"', "a", True,
     "tanı betiği (ödünç tarih): dönem başlangıcı ufuk ve sonrasıysa atlanır; sabit yazılmış"),
    ("arac/_odunc_capraz_sh110.py", "kumeleri_kur", 'f >= "1923-10-29"', "a", True,
     "tanı betiği (ödünç tarih, çapraz): aynı süzgeç"),
    ("arac/_yama_sinav.py", "*", '"1281-01-01" < g < "1923-10-29"', "a", True,
     "yama sınavı: kırılma günü AÇIK aralık (<) — ufuk ve sonrası dışarıda"),
    ("arac/denetle_gorunur.py", "kronoloji_icerigi", 'gun_no("1923-10-29")', "a", False,
     "zaman çubuğunun üst ucu: madde tarihi [1281-01-01, 1923-10-29] dışındaysa 'tarih-dışı' basar. Pencere uzayınca "
     "1930 tarihli GERÇEK madde SAHTE 'tarih-dışı' bulgusu olur (gürültülü yön, sessiz değil)"),
    ("arac/renk_olc.py", "*", '("1281-01-01", "1923-10-29")', "a", False,
     "künye penceresi bilinmiyorsa VARSAYILAN pencere: sabit yazılmış varsayılan, kimlik pencerelenmemişse sessizce eski ufka kırpar"),
    ("arac/girdi.py", "<modül>", 'UFUK = ("1281-01-01", "1923-10-29")', "a", False,
     "KAYNAK TANIM (motor tuzunda). Yalnız `girdi.py` içinde kullanılıyor (kd_oku varsayılan penceresi, geçit denetimi); "
     "araçların hiçbiri `girdi.UFUK`u içe almıyor ⇒ tek-kaynak DEĞİL"),
    ("js/app.js", "*", 'gunIdx("1923-10-29")', "a", False,
     "zaman çubuğu sonu (BITIS); JS tarafı, Python'dan ayrı sabit"),
    ("js/d_katman.js", "*", '_D_PENCERE_SONU = "1923-10-29"', "a", False,
     "D katmanı pencere sonu; JS tarafında ikinci ayrı sabit"),
    # --- motorun AYRI sabiti "1923-11-01": kapanış kesiti (UFUK[1]'den 3 gün ÖTE) — tuz içinde (`uret_petek.py`)
    ("arac/uret_petek.py", "*", '<= "1923-11-01"', "a", False,
     "MOTOR zaman çizgisinin son kesiti: `girdi.UFUK[1]`den (1923-10-29) AYRI ve 3 gün ÖTE bir sabit; motor tuzunda; "
     "pencere uzayınca BURASI da (6 yerde) değişmeli"),
    ("arac/uret_petek.py", "*", '!= "1923-11-01"', "a", False,
     "MOTOR: son kesit eklenmemişse ekler; aynı ayrı sabit"),
    # --- ÖLÜ MOTOR: `uret_donemler.py` (☠️ damgalı, çalıştırılmıyor). Tarihî dönem tanımlarının bitiş tarihi olarak
    #     "1923-11-01" demet öğesi: veri, sınır DEĞİL; sınıf (a) ama CANLI DEĞİL — pencere uzayınca değişmesine gerek yok.
    ("arac/uret_donemler.py", "*", '"1923-11-01"', "a", False,
     "☠️ ÖLÜ MOTOR (çalıştırılmıyor): tarihî dönem demetinin bitiş tarihi (Mütareke/Millî Mücadele). CANLI DEĞİL, "
     "pencere uzayınca değiştirilmesi gerekmez; ama sınıfsız bırakmamak için kayıtlı"),
]


# ------------------------------------------------------------------------------------------------ envanter
def _bicim(ust, dugum):
    """Sabitin bağlamı: kıyas operatörü / atama / çağrı argümanı."""
    if isinstance(ust, ast.Compare):
        ops = ", ".join(type(o).__name__ for o in ust.ops)
        return "kıyas(%s)" % ops
    if isinstance(ust, (ast.Assign, ast.AnnAssign)):
        return "atama"
    if isinstance(ust, ast.Call):
        return "çağrı-argümanı"
    if isinstance(ust, (ast.Tuple, ast.List)):
        return "demet/liste öğesi"
    return type(ust).__name__


def py_envanter(arac_dizin):
    site = []
    for yol in sorted(glob.glob(os.path.join(arac_dizin, "*.py"))):
        try:
            kaynak = io.open(yol, encoding="utf-8").read()
            agac = ast.parse(kaynak)
        except (SyntaxError, UnicodeDecodeError) as e:
            raise ko.Olculemedi("%s ayrıştırılamadı: %s" % (os.path.basename(yol), e))
        satirlar = kaynak.splitlines()
        # işlev bulucu: satır → en içteki FunctionDef adı
        islev_araliklari = []
        for n in ast.walk(agac):
            if isinstance(n, (ast.FunctionDef, ast.AsyncFunctionDef)):
                islev_araliklari.append((n.lineno, getattr(n, "end_lineno", n.lineno), n.name))

        def islev(satir):
            ic = [a for a in islev_araliklari if a[0] <= satir <= a[1]]
            return min(ic, key=lambda a: a[1] - a[0])[2] if ic else "<modül>"

        ustler = {}
        for n in ast.walk(agac):
            for c in ast.iter_child_nodes(n):
                ustler[id(c)] = n
        for n in ast.walk(agac):
            if isinstance(n, ast.Constant) and isinstance(n.value, str) and n.value in SABITLER:
                ust = ustler.get(id(n))
                if isinstance(ust, ast.Expr):             # çıplak dize ifadesi = docstring/yorum, kod DEĞİL
                    continue
                site.append({"dosya": "arac/" + os.path.basename(yol), "satir": n.lineno, "islev": islev(n.lineno),
                             "metin": satirlar[n.lineno - 1].strip(), "bicim": _bicim(ust, n), "sabit": n.value})
    return site


def js_envanter(kok):
    site = []
    for yol in sorted(glob.glob(os.path.join(kok, "js", "*.js"))) + [os.path.join(kok, "index.html")]:
        if not os.path.exists(yol):
            continue
        ad = os.path.relpath(yol, kok).replace("\\", "/")
        icinde_blok = False
        for i, l in enumerate(io.open(yol, encoding="utf-8", errors="replace"), 1):
            s = l.strip()
            if icinde_blok:
                icinde_blok = "*/" not in s
                continue
            if s.startswith("/*"):
                icinde_blok = "*/" not in s
                continue
            if s.startswith("//") or s.startswith("*"):
                continue
            kod = re.split(r"(?<![:\"'])//", l)[0]          # satır sonu yorumunu at (URL'ler hariç tutulur)
            for sb in SABITLER:
                if re.search(r"""["']%s["']""" % re.escape(sb), kod):
                    site.append({"dosya": ad, "satir": i, "islev": "*", "metin": s, "bicim": "JS-sabit", "sabit": sb})
    return site


def siniflandir(site):
    """→ (sınıflı [(site, tablo_satiri)], sınıfsız [site], kullanılmayan_tablo [satir])."""
    kullanilan = set()
    sinifli, sinifsiz = [], []
    for s in site:
        bulunan = None
        for k, t in enumerate(TABLO):
            dosya, islev, parca, sinif, genis, sebep = t
            if dosya != s["dosya"]:
                continue
            if islev not in ("*", s["islev"]):
                continue
            if parca in s["metin"]:
                bulunan, = [k]
                break
        if bulunan is None:
            sinifsiz.append(s)
        else:
            kullanilan.add(bulunan)
            sinifli.append((s, TABLO[bulunan]))
    return sinifli, sinifsiz, [TABLO[k] for k in range(len(TABLO)) if k not in kullanilan]


# ------------------------------------------------------------------------------------------------ veri
def veri_olc(kok):
    Y = ko.yerlesimleri_oku(kok)
    sys.path.insert(0, os.path.join(ko.KOK_VARSAYILAN, "arac"))
    import girdi
    u0, u1 = girdi.UFUK
    out = {"kayit": len(Y), "ufuk": (u0, u1), "kat": {}, "ufuk_sonrasi_kayit": []}
    for kat in ("d", "v", "s", "isg"):
        olay = sent = gercek = acik_uclu = 0
        gunler = collections.Counter()
        for y in Y:
            for p in y.get(kat) or []:
                for k in ("f", "t"):
                    g = p.get(k)
                    if not g:
                        continue
                    olay += 1
                    if g == u1:
                        sent += 1
                    elif g > u1:
                        if g.startswith("9999"):
                            acik_uclu += 1
                        else:
                            gercek += 1
                            gunler[g] += 1
        out["kat"][kat] = {"olay": olay, "kapanis_isareti": sent, "ufuk_sonrasi": gercek, "tekil_gun": len(gunler),
                           "acik_uclu_9999": acik_uclu, "gunler": sorted(gunler)}
    for y in Y:
        for kat in ("d", "v", "s", "isg"):
            for p in y.get(kat) or []:
                f, t = p.get("f") or "", p.get("t") or ""
                if f > u1 or (u1 < t < "9000") or t.startswith("9999"):
                    out["ufuk_sonrasi_kayit"].append(y["ad"])
                    break
            else:
                continue
            break
    out["ufuk_sonrasi_kayit"] = sorted(set(out["ufuk_sonrasi_kayit"]))
    return out


def main(argv):
    try:
        kok = ko.kok_al(argv)
        arac = argv[argv.index("--arac") + 1] if "--arac" in argv else os.path.join(kok, "arac")
        if not os.path.isdir(arac):
            raise ko.Olculemedi("arac dizini yok: %s" % arac)
        ayrinti = "--ayrinti" in argv
        py = py_envanter(arac)
        js = js_envanter(kok) if "--arac" not in argv else []
        if not py:
            raise ko.Olculemedi("arac/ içinde hiç sabit site bulunamadı (AST taraması çürümüş olabilir) — 'temiz' DEĞİL")
        sinifli, sinifsiz, kullanilmayan = siniflandir(py + js)
        print("UFUK SABİTİ — `arac/*.py` %d · js/html %d site (kod; yorum/docstring sayılmaz)" % (len(py), len(js)))
        bicim = collections.Counter(s["bicim"] for s, _ in sinifli)
        sinif = collections.Counter(t[3] for _, t in sinifli)
        genis = sum(1 for _, t in sinifli if t[4])
        print("  SINIF: (a) ufuk sınırı %d · (b) veri sınırı %d · (c) kasıtlı muafiyet %d · SINIFSIZ YENİ %d"
              % (sinif["a"], sinif["b"], sinif["c"], len(sinifsiz)))
        print("  BİÇİM: %s" % " · ".join("%s %d" % kv for kv in sorted(bicim.items())))
        print("  🔴 TAMAMI SABİT YAZILMIŞ: `girdi.UFUK[1]`e BAĞLI site %d (yalnız girdi.py'nin kendi içi); hiçbir araç `girdi.UFUK`u içe almıyor"
              % sum(1 for s in py if "UFUK[" in s["metin"]))
        print("  🔴 `>=` ya da açık-uçlu kalıp (UFUK SONRASININ TAMAMINI süzgeçler/muaf tutar): %d site — pencere uzayınca KÖR bölge"
              % genis)
        kaynaklar = sorted({s["sabit"] + "@" + s["dosya"] for s, _ in sinifli if s["bicim"] in ("atama",)} |
                           {"1923-11-01@arac/uret_petek.py"} | {"1923-10-29@js/app.js", "1923-10-29@js/d_katman.js"})
        print("  AYRI KAYNAK (tanım/atama): %s" % ", ".join(kaynaklar))
        print("  (b) VERİ SINIRI sınıfında kod yok: sabitlerin hiçbiri 'bu tarihten sonra veri YOK' demiyor." if sinif["b"] == 0 else "")
        if ayrinti or sinifsiz:
            print("  --- site listesi ---")
            for s, t in sorted(sinifli, key=lambda x: (x[0]["dosya"], x[0]["satir"])):
                print("    [%s%s] %s:%d %s · %s\n         %s" % (t[3], "*" if t[4] else " ", s["dosya"], s["satir"], s["islev"],
                                                              s["bicim"], t[5]))
            print("    [a*] = `>=`/açık-uçlu: ufuk SONRASINI da kapsar")
        veri = veri_olc(kok)
        print("VERİ (bugünkü, %d kayıt, UFUK %s → %s):" % (veri["kayit"], veri["ufuk"][0], veri["ufuk"][1]))
        print("  %-4s %8s | %-26s | %-22s | %s" % ("kat", "f/t olay", "t==UFUK (kapanış işareti)", "UFUK SONRASI gerçek", "9999 açık uçlu"))
        for kat, v in veri["kat"].items():
            print("  %-4s %8d | %-26d | %-22s | %d" % (kat, v["olay"], v["kapanis_isareti"],
                                                       "%d olay · %d gün" % (v["ufuk_sonrasi"], v["tekil_gun"]), v["acik_uclu_9999"]))
        sonrasi = sum(v["ufuk_sonrasi"] for v in veri["kat"].values())
        sent = sum(v["kapanis_isareti"] for v in veri["kat"].values())
        print("  ⇒ BUGÜN UFUK SONRASI gerçek kırılma: %d olay (d,v: %d · s: %d · isg: %d); yalnız kayıt(lar): %s"
              % (sonrasi, veri["kat"]["d"]["ufuk_sonrasi"] + veri["kat"]["v"]["ufuk_sonrasi"], veri["kat"]["s"]["ufuk_sonrasi"],
                 veri["kat"]["isg"]["ufuk_sonrasi"], ", ".join(veri["ufuk_sonrasi_kayit"]) or "—"))
        print("  ⇒ KAPANIŞ İŞARETİ %d dönem (v %d · s %d · isg %d): pencere uzayınca bunlar ya 1923-10-29'da GERÇEK bir kırılma gibi"
              % (sent, veri["kat"]["v"]["kapanis_isareti"], veri["kat"]["s"]["kapanis_isareti"], veri["kat"]["isg"]["kapanis_isareti"]))
        print("    okunur (tek günde sahte kırılma yığını, bir kez DEĞİL her yeni çağda) ya da literal korunur ve GERÇEK sonrası kırılmalar KÖRLEŞİR.")
        print("    İKİ yönlü tuzak: sabitleri değiştirmek VE bu %d dönemin `t:` değerini (ya da yorumunu) birlikte ele almak gerekir." % sent)
        print("    Bir de ikinci konvansiyon var: `t:\"9999-01-01\"` (açık uçlu) — Şefşâven bunu kullanıyor; iki konvansiyon yan yana.")
        if kullanilmayan:
            print("  i tabloda olup bulunamayan %d satır (kod değişmiş olabilir; HATA DEĞİL): %s"
                  % (len(kullanilmayan), "; ".join("%s %s" % (t[0], t[2][:30]) for t in kullanilmayan)))
        if sinifsiz:
            print("🔴 SINIFSIZ YENİ SABİT SİTE — tabloda yok, SINIFLANMADAN eklenmiş (%d):" % len(sinifsiz))
            for s in sinifsiz:
                print("     %s:%d %s | %s | %s" % (s["dosya"], s["satir"], s["islev"], s["bicim"], s["metin"][:80]))
            print("SONUÇ: yeni sabit site, çıkış kodu 1 (sınıfla: (a) ufuk (b) veri (c) muafiyet)")
            return 1
        print("SONUÇ: %d site HEPSİ sınıflı (a %d · b %d · c %d). Çıkış kodu 0 — bu bir ENVANTER; düzeltme DEĞİL" %
              (len(sinifli), sinif["a"], sinif["b"], sinif["c"]))
        return 0
    except ko.Olculemedi as e:
        print("🔴 ÖLÇÜLEMEDİ — %s" % e)
        print("   'ölçülemedi' ≠ 'yok' ≠ 'temiz' (CLAUDE.md §11). Çıkış kodu 2")
        return 2


if __name__ == "__main__":
    try:
        sys.stdout.reconfigure(encoding="utf-8")
    except Exception:                                   # noqa
        pass
    sys.exit(ko.ortam_sar(main, sys.argv[1:]))
