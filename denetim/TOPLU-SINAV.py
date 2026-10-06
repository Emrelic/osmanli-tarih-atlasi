# -*- coding: utf-8 -*-
"""TOPLU-SINAV — denetim/TOPLU-SINAV-LISTE.txt'teki sınavları SIRAYLA koşar (UMIT-W39, 6 Ekim 2026).

🔴 Kapıya (denetle_yayin.py) BAĞLI DEĞİLDİR — bağlama kararı Emre'nin.

Kullanım:
  py denetim/TOPLU-SINAV.py                    # varsayılan liste
  py denetim/TOPLU-SINAV.py --liste <dosya>    # başka liste
  py denetim/TOPLU-SINAV.py --zaman 120        # adım başına zaman aşımı (sn, varsayılan 300)
  py denetim/TOPLU-SINAV.py -v                 # geçenlerin çıktısını da bas
  py denetim/TOPLU-SINAV.py --oz-sinav         # koşucunun kendi iki yönlü sınavı

Her sınav için: GECTI · OTTU · HATA · ATLANDI + süre.
  GECTI   son adım çıkış 0
  OTTU    son adım çıkış 1 (sınavın hükmü: ihlal)
  HATA    zaman aşımı · yorumlayıcı yok · hazırlık adımı sıfırdan farklı · son adım 0/1 dışı
  ATLANDI betik dosyası yok
Çıkış kodu (CLAUDE.md §3): 0 hepsi geçti · 1 en az biri ÖTTÜ · 2 ÖLÇÜLEMEDİ (HATA/ATLANDI,
  boş liste, git ölçülemedi). Öten varsa 1'dir ama ölçülemeyenler YİNE ADIYLA basılır.

YAN ETKİ: her sınavdan önce/sonra `git status --porcelain` (+ listelenen dosyaların sha1'i,
zaten kirli bir dosyanın yeniden değişmesini de görmek için) alınır; fark varsa adıyla basılır.
YAN ETKİ (TEMP): depo DIŞI artık için her sınavdan önce/sonra %TEMP%'in üst düzey girdileri
alınır; sınav sırasında YENİ beliren girdiler adıyla basılır (UMIT-W39b). ⚠️ TEMP paylaşımlıdır:
aynı anda çalışan başka bir süreç de girdi açabilir ⇒ bu bir İPUCUDUR, kanıt değil.
İki yan etki de çıkış kodunu DEĞİŞTİRMEZ (bilgi; karar koordinatörde).
"""
import argparse, hashlib, os, shlex, shutil, subprocess, sys, tempfile, time

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
VARSAYILAN_LISTE = os.path.join(KOK, "denetim", "TOPLU-SINAV-LISTE.txt")
KUYRUK = 15  # başarısızlıkta basılan son çıktı satırı


def liste_oku(yol):
    sinavlar = []
    with open(yol, encoding="utf-8") as f:
        for no, satir in enumerate(f, 1):
            s = satir.strip()
            if not s or s.startswith("#"):
                continue
            parca = [p.strip() for p in s.split("|")]
            if len(parca) < 2 or not parca[0] or not all(parca[1:]):
                raise ValueError(f"{yol}:{no}: biçim 'AD | adım1 | ...' değil: {s!r}")
            sinavlar.append((parca[0], [shlex.split(a, posix=True) for a in parca[1:]]))
    return sinavlar


def git_durum():
    """{yol: (XY, sha1|None)} · ölçülemezse None."""
    try:
        r = subprocess.run(["git", "-C", KOK, "status", "--porcelain", "-z", "--untracked-files=all"],
                           capture_output=True, timeout=120)
    except (OSError, subprocess.TimeoutExpired):
        return None
    if r.returncode != 0:
        return None
    ogeler = r.stdout.decode("utf-8", "replace").split("\0")
    sonuc, i = {}, 0
    while i < len(ogeler):
        o = ogeler[i]; i += 1
        if len(o) < 4:
            continue
        xy, yol = o[:2], o[3:]
        if xy[0] in "RC":
            i += 1  # -z: eski ad ayrı öğe
        tam = os.path.join(KOK, yol)
        h = None
        if os.path.isfile(tam):
            try:
                with open(tam, "rb") as f:
                    h = hashlib.sha1(f.read()).hexdigest()
            except OSError:
                h = "okunamadi"
        sonuc[yol] = (xy, h)
    return sonuc


def temp_durum():
    """%TEMP%'in üst düzey girdi adları · ölçülemezse None."""
    try:
        return set(os.listdir(tempfile.gettempdir()))
    except OSError:
        return None


def yan_etki(once, sonra):
    fark = []
    for y in sorted(set(once) | set(sonra)):
        a, b = once.get(y), sonra.get(y)
        if a == b:
            continue
        if a is None:
            fark.append(f"YENİ   {b[0]} {y}")
        elif b is None:
            fark.append(f"TEMİZ  {a[0]} {y}  (önce kirliydi, şimdi değil)")
        else:
            fark.append(f"DEĞİŞTİ {a[0]}→{b[0]} {y}")
    return fark


def komut_kur(adim, gecici):
    adim = [t.replace("{GECICI}", gecici) for t in adim]
    betik = adim[0] if os.path.isabs(adim[0]) else os.path.join(KOK, adim[0])
    if not os.path.isfile(betik):
        return None, f"betik yok: {adim[0]}"
    uzanti = os.path.splitext(betik)[1].lower()
    if uzanti == ".py":
        yorum = sys.executable
    elif uzanti == ".js":
        yorum = shutil.which("node")
        if not yorum:
            return [], "node bulunamadı"
    else:
        return [], f"tanınmayan uzantı: {uzanti}"
    return [yorum, betik] + adim[1:], None


def sinav_kos(ad, adimlar, zaman, ayrintili):
    gecici = tempfile.mkdtemp(prefix="toplu_sinav_")
    t0 = time.time()
    durum, not_, cikti = "GECTI", "", ""
    try:
        ortam = dict(os.environ, PYTHONIOENCODING="utf-8", PYTHONUTF8="1")
        for n, adim in enumerate(adimlar, 1):
            son = n == len(adimlar)
            komut, hata = komut_kur(adim, gecici)
            if komut is None:
                durum, not_ = "ATLANDI", hata; break
            if hata:
                durum, not_ = "HATA", hata; break
            try:
                r = subprocess.run(komut, cwd=KOK, capture_output=True, timeout=zaman, env=ortam)
            except subprocess.TimeoutExpired as e:
                cikti = ((e.stdout or b"") + (e.stderr or b"")).decode("utf-8", "replace")
                durum, not_ = "HATA", f"adım {n}: zaman aşımı ({zaman} sn)"; break
            except OSError as e:
                durum, not_ = "HATA", f"adım {n}: başlatılamadı ({e})"; break
            cikti = (r.stdout + r.stderr).decode("utf-8", "replace")
            if not son:
                if r.returncode != 0:
                    durum, not_ = "HATA", f"hazırlık adımı {n} çıkış {r.returncode}"; break
                continue
            if r.returncode == 0:
                durum = "GECTI"
            elif r.returncode == 1:
                durum, not_ = "OTTU", "çıkış 1"
            else:
                durum, not_ = "HATA", f"çıkış {r.returncode}"
    finally:
        shutil.rmtree(gecici, ignore_errors=True)
    return durum, not_, cikti, time.time() - t0


def kos(liste, zaman, ayrintili):
    try:
        sys.stdout.reconfigure(encoding="utf-8")
    except Exception:
        pass
    try:
        sinavlar = liste_oku(liste)
    except (OSError, ValueError) as e:
        print(f"🔴 ÖLÇÜLEMEDİ — liste okunamadı: {e}")
        return 2
    if not sinavlar:
        print("🔴 ÖLÇÜLEMEDİ — liste BOŞ (boş küme TEMİZ sayılmaz)")
        return 2
    print(f"TOPLU-SINAV · {len(sinavlar)} sınav · zaman aşımı {zaman} sn/adım · kapıya BAĞLI DEĞİL")
    sayac = {"GECTI": [], "OTTU": [], "HATA": [], "ATLANDI": []}
    yan, yan_temp, olculemedi_git = [], [], []
    t0 = time.time()
    for ad, adimlar in sinavlar:
        once, t_once = git_durum(), temp_durum()
        durum, not_, cikti, sure = sinav_kos(ad, adimlar, zaman, ayrintili)
        sonra, t_sonra = git_durum(), temp_durum()
        sayac[durum].append(ad)
        print(f"  {durum:<8} {sure:7.2f} sn  {ad}" + (f"  — {not_}" if not_ else ""))
        if cikti.strip() and (durum != "GECTI" or ayrintili):
            satirlar = cikti.rstrip().splitlines()
            for s in (satirlar if ayrintili else satirlar[-KUYRUK:]):
                print(f"           │ {s}")
        if once is None or sonra is None:
            olculemedi_git.append(ad)
            print(f"           ⚠️ YAN ETKİ ÖLÇÜLEMEDİ (git status koşmadı)")
        else:
            fark = yan_etki(once, sonra)
            if fark:
                yan.append(ad)
                print(f"           🟠 YAN ETKİ ({len(fark)} dosya):")
                for f in fark:
                    print(f"              {f}")
        if t_once is None or t_sonra is None:
            print(f"           ⚠️ YAN ETKİ (TEMP) ÖLÇÜLEMEDİ (%TEMP% okunamadı)")
        else:
            yeni = sorted(t_sonra - t_once)
            if yeni:
                yan_temp.append(ad)
                print(f"           🟠 YAN ETKİ (TEMP) ({len(yeni)} yeni girdi, başka süreç de olabilir):")
                for y in yeni[:10]:
                    print(f"              YENİ   %TEMP%/{y}")
                if len(yeni) > 10:
                    print(f"              … +{len(yeni) - 10}")
    print(f"── {time.time() - t0:.1f} sn · GECTI {len(sayac['GECTI'])} · OTTU {len(sayac['OTTU'])} · "
          f"HATA {len(sayac['HATA'])} · ATLANDI {len(sayac['ATLANDI'])} · YAN ETKİ {len(yan)} · TEMP {len(yan_temp)}")
    olculemedi = sayac["HATA"] + sayac["ATLANDI"] + olculemedi_git
    if sayac["OTTU"]:
        print(f"🔴 ÖTEN: {', '.join(sayac['OTTU'])}")
    if olculemedi:
        print(f"🟡 ÖLÇÜLEMEDİ: {', '.join(olculemedi)}")
    if yan:
        print(f"🟠 YAN ETKİ (çıkışı değiştirmez): {', '.join(yan)}")
    if yan_temp:
        print(f"🟠 YAN ETKİ (TEMP, çıkışı değiştirmez): {', '.join(yan_temp)}")
    if sayac["OTTU"]:
        print("SONUÇ: İHLAL VAR (1)"); return 1
    if olculemedi:
        print("SONUÇ: ÖLÇÜLEMEDİ (2)"); return 2
    print("SONUÇ: temiz (0)"); return 0


# ───────────────────────── koşucunun kendi sınavı ─────────────────────────
def oz_sinav():
    try:
        sys.stdout.reconfigure(encoding="utf-8")
    except Exception:
        pass
    d = tempfile.mkdtemp(prefix="toplu_oz_")
    yan_dosya = os.path.join(KOK, "denetim", f"_toplu_oz_yan_etki_{os.getpid()}.tmp")
    try:
        def betik(ad, govde):
            p = os.path.join(d, ad)
            with open(p, "w", encoding="utf-8") as f:
                f.write(govde)
            return p.replace("\\", "/")
        oten = betik("oten.py", "import sys; print('yapay ihlal'); sys.exit(1)\n")
        uyur = betik("uyur.py", "import time; time.sleep(10)\n")
        iki = betik("iki.py", "import sys; print('olculemedi'); sys.exit(2)\n")
        gecen = betik("gecen.py", "print('tamam')\n")
        yan = betik("yan.py", f"open({yan_dosya!r}, 'w').write('x')\n")
        temp_on = f"toplu_oz_temp_{os.getpid()}_"
        temp_yaz = betik("temp_yaz.py", f"import tempfile; tempfile.mkdtemp(prefix={temp_on!r})\n")
        olmayan = os.path.join(d, "olmayan.py").replace("\\", "/")
        with open(VARSAYILAN_LISTE, encoding="utf-8") as f:
            gercek = f.read()

        def liste(ad, govde):
            p = os.path.join(d, ad)
            with open(p, "w", encoding="utf-8") as f:
                f.write(govde)
            return p

        durumlar = [
            # (ad, liste gövdesi, ek argüman, beklenen çıkış, çıktıda olması gereken)
            ("gerçek liste (3 betik)", gercek, [], 0, ["SONUÇ: temiz"]),
            ("LEGO tek başına TEMP artığı bırakmaz (W39b temizliği)",
             "LEGO-ALET | denetim/ARAC-LEGO-alet-sinav.py arac\n", [], 0, ["GECTI", "TEMP 0"]),
            ("+ yapay öten", gercek + f"\nOTEN | {oten}\n", [], 1, ["OTTU", "ÖTEN: OTEN"]),
            ("+ olmayan betik", gercek + f"\nYOK | {olmayan}\n", [], 2, ["ATLANDI", "ÖLÇÜLEMEDİ: YOK"]),
            ("öten + olmayan → 1, ATLANDI gizlenmez",
             f"OTEN | {oten}\nYOK | {olmayan}\n", [], 1, ["ÖTEN: OTEN", "ÖLÇÜLEMEDİ: YOK"]),
            ("boş liste", "# yalnız yorum\n", [], 2, ["BOŞ"]),
            ("zaman aşımı", f"UYUR | {uyur}\n", ["--zaman", "2"], 2, ["zaman aşımı", "ÖLÇÜLEMEDİ: UYUR"]),
            ("betik çıkış 2 → HATA", f"IKI | {iki}\n", [], 2, ["HATA", "ÖLÇÜLEMEDİ: IKI"]),
            ("hazırlık adımı öterse OTTU DEĞİL HATA", f"HAZ | {oten} | {gecen}\n", [], 2,
             ["hazırlık adımı 1", "ÖLÇÜLEMEDİ: HAZ"]),
            ("yan etki görünür, çıkışı değiştirmez", f"YAN | {yan}\n", [], 0,
             ["YAN ETKİ (1 dosya)", "_toplu_oz_yan_etki_"]),
            ("TEMP'e yazan betik basılır, çıkışı değiştirmez", f"TMP | {temp_yaz}\n", [], 0,
             ["YAN ETKİ (TEMP)", temp_on, "TEMP 1"]),
            ("TEMP'e yazmayan betik basılmaz", f"GECEN | {gecen}\n", [], 0, ["TEMP 0"]),
            ("bozuk satır → liste okunamadı", "AD_ama_adim_yok\n", [], 2, ["liste okunamadı"]),
        ]
        hatali = 0
        for no, (ad, govde, ek, bek, aranan) in enumerate(durumlar, 1):
            lp = liste(f"l{no}.txt", govde)
            r = subprocess.run([sys.executable, os.path.abspath(__file__), "--liste", lp] + ek,
                               capture_output=True, env=dict(os.environ, PYTHONIOENCODING="utf-8"))
            out = r.stdout.decode("utf-8", "replace") + r.stderr.decode("utf-8", "replace")
            eksik = [a for a in aranan if a not in out]
            tamam = r.returncode == bek and not eksik
            hatali += not tamam
            print(f"  {'✓' if tamam else '✗'} {no:2}. {ad}: çıkış {r.returncode} (beklenen {bek})"
                  + (f" · çıktıda YOK: {eksik}" if eksik else ""))
            if not tamam:
                for s in out.rstrip().splitlines()[-20:]:
                    print(f"        │ {s}")
            if os.path.exists(yan_dosya):
                os.remove(yan_dosya)
            temp_temizle(temp_on)
        print(f"ÖZ-SINAV: {len(durumlar) - hatali}/{len(durumlar)} tuttu")
        return 0 if hatali == 0 else 1
    finally:
        shutil.rmtree(d, ignore_errors=True)
        if os.path.exists(yan_dosya):
            os.remove(yan_dosya)
        temp_temizle(f"toplu_oz_temp_{os.getpid()}_")


def temp_temizle(onek):
    k = tempfile.gettempdir()
    for ad in os.listdir(k):
        if ad.startswith(onek):
            shutil.rmtree(os.path.join(k, ad), ignore_errors=True)


if __name__ == "__main__":
    ap = argparse.ArgumentParser(description="Toplu sınav koşucusu (kapıya bağlı değil)")
    ap.add_argument("--liste", default=VARSAYILAN_LISTE)
    ap.add_argument("--zaman", type=float, default=300)
    ap.add_argument("-v", dest="ayrintili", action="store_true")
    ap.add_argument("--oz-sinav", action="store_true")
    a = ap.parse_args()
    sys.exit(oz_sinav() if a.oz_sinav else kos(a.liste, a.zaman, a.ayrintili))
