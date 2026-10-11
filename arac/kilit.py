# -*- coding: utf-8 -*-
"""DOSYA KİLİDİ — bir dosyada bir oturum, ötekiler SIRADA.

Emre, 11 Ekim 2026: *"bir dosyada sadece bir oturum işlem yapabilir … bir
oturuma bir dosyada yazma görevi verdi isek diğer oturum bu oturumun işlemi
bitene kadar beklemeli. dosyalara kilit koyalım … eğer oturum başkasının
elindeki dosyayla ilgili görev alırsa bana bildirecek: şu anda bu dosya
kullanımda ve kullanım bitene kadar bekliyorum … o dosya o oturuma rezerve
olacak ve başka oturumun almasına izin vermeyecek ve o oturumu sıraya
sokacak. ilk oturumun işi bitince dosyayı salıverecek ve bu sefer ikinci
oturum o dosyayı eline alabilecek bu konuda beni bilgilendirecek."*

`CLAUDE.md §7` DOSYA SAHİPLİĞİNİ zaten kurala bağlamıştı — ama kural bir
BELGEDEYDİ, bir ALETTE değildi. Kuralın ihlali ancak sonradan, çatışmadan
anlaşılıyordu. Bu alet aynı kuralı ÖLÇÜLEBİLİR hâle getirir.

🔴 VE EN BAŞTA SÖYLENMESİ GEREKEN ŞEY — BU BİR KAPI DEĞİL, BİR TEZGÂHTIR:
Oturum bu aleti ÇAĞIRMAZSA kilit hiçbir şey yapmaz. Yani tek başına bir
DENETİM değil, bir DİLEKTİR. ("Jetonu sohbete yazma" uyarısını yazmıştım ve
sızıntı ona RAĞMEN oldu — uyarı bir denetim değil bir dilektir.) Kapıya
çevirmek için `arac/kilit_kanca.py` Write/Edit çağrılarının ÖNÜNE takılır;
kancayı kuran YALNIZ Emre'dir (`settings` onun alanı). Kanca kurulmadan bu
alet, dürüst çalışan oturumları çakışmadan korur; kötü niyeti değil
UNUTKANLIĞI önler. Farkı bilerek kullan.

ÇIKIŞ KODLARI — otomasyon cümleyi değil kodu okur (§3):
   0  KİLİT SENDE          → yazabilirsin
   1  BAŞKASINDA, SIRADASIN → YAZMA, bekle
   2  ÖLÇÜLEMEDİ            → YAZMA. Ölçülemeyen soru TEMİZ DEĞİLDİR; kilit
                              dosyası bozuksa "serbest" DEMEK YASAK.
   3  YANLIŞ KULLANIM       → tanımsız bayrak/komut dâhil
🔴 `2`nin yönü kasıtlı: ölçemediğimizde SERBEST değil MEŞGUL sayıyoruz.
  Ters yön iki oturumu aynı dosyaya sokar; bu yön yalnız bekletir.

🔴 OTOMATİK DEVRALMA YOK. `kosu_kilit.py` bunu bedelini ödeyerek öğrendi:
  "en uzun makul koşu 4 saat" diye bir TAVAN konmuştu, koşu 16 saat 09 dakika
  sürdü ve kilit devralınabilir hâle geldi. Yaş bir VEKİLDİR. Burada bir
  oturumun "canlı"lığını ölçecek süreç kimliği de yok (her araç çağrısı ayrı
  süreç) ⇒ bayat kilit OTOMATİK düşmez; `durum` onu YAŞIYLA gösterir ve
  düşürmeyi insan yapar (`zorla-birak --gerekce`).

⚠️ BEYAN EDİLEN SINIR — SESSİZ DEĞİL: kilit BU MAKİNEYE AİTTİR.
  Başka makinedeki bir oturumun kilidi burada GÖRÜNMEZ. `durum` bunu her
  çıktıda yazar. Makineler arası kilit tahta sunucusunun bir uç noktasını
  ister (LAB'ın dosyası) ve `§7`in makine rolleri bugün o çakışmayı büyük
  ölçüde kesiyor. ⇒ Eksik olan şeyi ADIYLA söylüyoruz; "kaydı tek makinede"
  kusurunun sessiz hâline düşmemek için.
"""
import io
import json
import os
import sys
import time

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8", errors="replace")
sys.stderr = io.TextIOWrapper(sys.stderr.buffer, encoding="utf-8", errors="replace")

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

# --- SINAV KAPILARI — ve niçin GÜRÜLTÜLÜ oldukları -------------------------
# Sınav gerçek duruma ve GERÇEK TAHTAYA dokunmamalı: bir sınavın yan etkisi
# varsa o sınav koşturulmaz, koşturulmayan sınav da yoktur. (LAB 11 Ekim'de
# gerçek tahtaya POST atmaktan kaçındı — doğruydu, ama o zaman yazma yolu
# HİÇ ölçülmemiş kaldı. Çare kaçınmak değil, YÖNLENDİRİLEBİLİR yapmak.)
# 🔴 AMA KAÇIŞ KAPISI TEHLİKELİDİR: `MOTOR_KILIT_KAPALI` tam böyle doğdu ve
#   "yalnız arıza için" denmesine rağmen üretimde kullanılma riski taşıyor.
#   ⇒ Bu yüzden ikisi de KULLANILDIĞINDA EKRANA BASAR. Sessiz bir kaçış
#     kapısı, kapı olmayan bir kapıdır.
DURUM = os.environ.get("KILIT_DURUM") or os.path.join(KOK, "oturumlar", "kilit.json")
TAHTA_ACIK = os.environ.get("KILIT_TAHTA", "1") != "0"
NOBET = DURUM + ".nobet"          # O_EXCL mutex — oku-değiştir-yaz bölünmesin
SURUM = 1
BAYAT_SAAT = 6.0                  # yalnız RAPORLAMA eşiği; düşürme ölçütü DEĞİL

KOMUTLAR = ("al", "birak", "durum", "kimde", "birak-hepsi", "zorla-birak")
BAYRAKLAR = ("--kim", "--gerekce", "--sessiz")


# --------------------------------------------------------------------------
# bayrak ayrıştırma — TANIMSIZ BAYRAK REDDEDİLİR
# --------------------------------------------------------------------------
def ayristir(argv):
    """🔴 Tanımsız bayrakta çıkış 3. LAB 11 Ekim 2026'da ölçtü: `tahta.py`nin
    ayrıştırıcısı tanımadığı bayrağı SESSİZCE YOK SAYIYOR ⇒ `oku --limit 4`
    bütün tahtayı (17 MB) getiriyordu ve `--limti` yazım hatası da aynı
    sessizlikle geçiyordu. Bulunan şey bir delik değil DELİKLERİN KAYNAĞIYDI.
    📌 Her şeyi kabul eden bir kapı, kapı DEĞİLDİR. Bu alet o dersle
    doğduğu için ilk günden reddeder — kural belgeye yazılıp alete
    yazılmazsa bir sonraki alet aynı deliği yeniden açar."""
    if not argv or argv[0] not in KOMUTLAR:
        return None, None, "komut gerekli: " + " · ".join(KOMUTLAR)
    komut, g, i = argv[0], {}, 1
    hedef = []
    while i < len(argv):
        a = argv[i]
        if a.startswith("--"):
            if a not in BAYRAKLAR:
                return None, None, ("TANIMSIZ BAYRAK: %s  (tanınan: %s)"
                                    % (a, " ".join(BAYRAKLAR)))
            if a == "--sessiz":
                g[a] = True
            else:
                if i + 1 >= len(argv):
                    return None, None, "%s bir değer ister" % a
                g[a] = argv[i + 1]
                i += 1
        else:
            hedef.append(a)
        i += 1
    g["hedef"] = hedef
    return komut, g, None


# --------------------------------------------------------------------------
# yol normalleştirme
# --------------------------------------------------------------------------
def yol_anahtar(y):
    """Kilit anahtarı: depo köküne göreli, ayraçlar `/`, Windows'ta küçük harf.

    ⚠️ `normcase` Windows'ta `str.lower()` kullanır ve `"İ".lower()` İKİ kod
    noktası verir (§4) — bu depoda yollar ASCII olduğu için güvenli, ama
    Türkçe adlı bir dosya eklenirse bu satır ölçülmelidir. Sınır BEYANLI."""
    y = os.path.normpath(os.path.abspath(y))
    try:
        y = os.path.relpath(y, KOK)
    except ValueError:
        pass                       # başka sürücü — mutlak yol anahtar olur
    return os.path.normcase(y).replace("\\", "/")


# --------------------------------------------------------------------------
# nöbet (mutex) — oku-değiştir-yaz bölünmezliği
# --------------------------------------------------------------------------
class Nobet(object):
    """O_EXCL ile tek yazar. 🔴 `os.replace` tek başına YETMEZ: iki süreç
    aynı anda OKUYUP ayrı ayrı yazarsa ikinci birincinin sırasını SİLER.
    Atomik yazma, atomik oku-değiştir-yaz DEĞİLDİR."""

    def __init__(self, sure=10.0):
        self.sure, self.fd = sure, None

    def __enter__(self):
        bitis = time.time() + self.sure
        while True:
            try:
                self.fd = os.open(NOBET, os.O_CREAT | os.O_EXCL | os.O_WRONLY)
                os.write(self.fd, str(os.getpid()).encode())
                return self
            except OSError:
                if time.time() > bitis:
                    raise RuntimeError(
                        "nöbet alınamadı (%.0f sn): %s — başka bir kilit işlemi "
                        "sürüyor ya da bayat nöbet dosyası kaldı" % (self.sure, NOBET))
                time.sleep(0.05)

    def __exit__(self, *a):
        if self.fd is not None:
            os.close(self.fd)
        try:
            os.remove(NOBET)
        except OSError:
            pass
        return False


def yukle():
    """Durumu oku. 🔴 Bozuk dosya "boş" SAYILMAZ — FIRLATIR (çıkış 2)."""
    if not os.path.exists(DURUM):
        return {"surum": SURUM, "makine": makine(), "kilitler": {}}
    with io.open(DURUM, encoding="utf-8") as f:
        ham = f.read()
    if not ham.strip():
        return {"surum": SURUM, "makine": makine(), "kilitler": {}}
    d = json.loads(ham)            # JSONDecodeError ⇒ ÖLÇÜLEMEDİ
    if d.get("surum") != SURUM:
        raise ValueError("kilit.json sürümü %r, beklenen %r" % (d.get("surum"), SURUM))
    d.setdefault("kilitler", {})
    return d


def kaydet(d):
    gecici = DURUM + ".tmp%d" % os.getpid()
    os.makedirs(os.path.dirname(DURUM), exist_ok=True)
    with io.open(gecici, "w", encoding="utf-8") as f:
        f.write(json.dumps(d, ensure_ascii=False, indent=1, sort_keys=True))
    os.replace(gecici, DURUM)


def makine():
    import platform
    return platform.node() or "bilinmeyen"


def simdi():
    return time.strftime("%Y-%m-%dT%H:%M:%S")


def yas_saat(damga):
    try:
        t = time.mktime(time.strptime(damga, "%Y-%m-%dT%H:%M:%S"))
    except (ValueError, TypeError):
        return None                # ÖLÇÜLEMEDİ — "0" demek yanlış olurdu
    return (time.time() - t) / 3600.0


def yas_yazi(damga):
    y = yas_saat(damga)
    if y is None:
        return "yaş ÖLÇÜLEMEDİ"
    return ("%.1f sa%s" % (y, " 🟡 BAYAT" if y >= BAYAT_SAAT else "")
            if y >= 1 else "%.0f dk" % (y * 60))


# --------------------------------------------------------------------------
# komutlar
# --------------------------------------------------------------------------
def k_al(yol, kim, sessiz=False):
    anah = yol_anahtar(yol)
    with Nobet():
        d = yukle()
        k = d["kilitler"].get(anah)
        if k is None:
            d["kilitler"][anah] = {"sahip": kim, "alindi": simdi(), "sira": []}
            kaydet(d)
            if not sessiz:
                print("🟢 KİLİT SENDE — %s" % anah)
                print("   sahip: %s · alındı: %s" % (kim, simdi()))
                print("   bitince: py arac/kilit.py birak %s --kim \"%s\"" % (yol, kim))
            return 0
        if k["sahip"] == kim:
            if not sessiz:
                print("🟢 KİLİT ZATEN SENDE — %s (%s önce aldın)"
                      % (anah, yas_yazi(k.get("alindi"))))
            return 0
        # başkasında ⇒ sıraya gir (mükerrer girme)
        sira = k.setdefault("sira", [])
        if any(s.get("kim") == kim for s in sira):
            yer = [s.get("kim") for s in sira].index(kim) + 1
        else:
            sira.append({"kim": kim, "girdi": simdi()})
            yer = len(sira)
        kaydet(d)
        # 🔴 Emre'nin istediği CÜMLE — kelimeleri onun
        print("🔴 BU DOSYA ŞU ANDA KULLANIMDA, KULLANIM BİTENE KADAR BEKLİYORUM")
        print("   dosya  : %s" % anah)
        print("   kullanan: %s  (%s önce aldı)" % (k["sahip"], yas_yazi(k.get("alindi"))))
        print("   sıradaki yerim: %d / %d" % (yer, len(sira)))
        if yas_saat(k.get("alindi")) is not None and yas_saat(k.get("alindi")) >= BAYAT_SAAT:
            print("   🟡 kilit %s — sahibi durmuş OLABİLİR. Otomatik düşmez;"
                  % yas_yazi(k.get("alindi")))
            print("      koordinatör ölçer (§7.2 'takıldı demeden önce')")
        return 1


def k_birak(yol, kim, sessiz=False):
    anah = yol_anahtar(yol)
    with Nobet():
        d = yukle()
        k = d["kilitler"].get(anah)
        if k is None:
            print("⚪ KİLİT YOK — %s zaten serbest" % anah)
            return 0
        if k["sahip"] != kim:
            # 🔴 Başkasının kilidini bırakmak YASAK — sırandan çıkmak serbest
            sira = k.get("sira") or []
            kalan = [s for s in sira if s.get("kim") != kim]
            if len(kalan) != len(sira):
                k["sira"] = kalan
                kaydet(d)
                print("⚪ SIRADAN ÇIKTIN — %s (kilit %s'te kaldı)" % (anah, k["sahip"]))
                return 0
            print("🔴 BU KİLİT SENDE DEĞİL — %s" % anah)
            print("   sahip: %s · sen: %s" % (k["sahip"], kim))
            print("   başkasının kilidini bırakmak YASAK; gerekiyorsa"
                  " koordinatör: zorla-birak --gerekce \"…\"")
            return 3
        sira = k.get("sira") or []
        if sira:
            yeni = sira.pop(0)
            d["kilitler"][anah] = {"sahip": yeni["kim"], "alindi": simdi(), "sira": sira}
            kaydet(d)
            print("🟢 BIRAKTIN — %s" % anah)
            print("   ⇒ SIRADAKİ ALDI: %s  (%s beri bekliyordu)"
                  % (yeni["kim"], yas_yazi(yeni.get("girdi"))))
            print("   kalan sıra: %d" % len(sira))
            print("   🔔 BİLDİRİM: '%s' artık %s oturumunda — Emre'ye söylenecek kalem."
                  % (anah, yeni["kim"]))
            # devir tahtaya da düşsün (sunucu yoksa git'e düşer, kaybolmaz)
            _tahtaya_bildir(anah, kim, yeni["kim"], len(sira))
            return 0
        del d["kilitler"][anah]
        kaydet(d)
        print("🟢 BIRAKTIN — %s SERBEST (sıra boş)" % anah)
        return 0


def _tahtaya_bildir(anah, eski, yeni, kalan):
    """Devri tahtaya yaz — en kötü hâlde git'e düşer, kaybolmaz.
    ⚠️ Tahta yoksa kilit ÇALIŞMAYA DEVAM EDER: bildirim bir YAN ETKİDİR,
    kilidin şartı değil. Tersi olsa, tahta arızası dosya kilidini de
    kilitlerdi — bir aracı başka bir aracın sağlığına bağlamak yeni bir
    arıza yüzü açar."""
    if not TAHTA_ACIK:
        print("   ⚪ KILIT_TAHTA=0 — tahta bildirimi ATLANDI (sınav kipi)."
              " Devir GERÇEKLEŞTİ, yalnız duyuru yapılmadı.")
        return
    try:
        import subprocess
        mesaj = ("DOSYA KİLİDİ DEVREDİLDİ — %s\n  bırakan: %s\n  alan: %s\n"
                 "  kalan sıra: %d\n  (arac/kilit.py birak, otomatik bildirim)"
                 % (anah, eski, yeni, kalan))
        subprocess.run([sys.executable if sys.executable else "py",
                        os.path.join(KOK, "arac", "tahta.py"), "yaz",
                        "--kim", eski, "--kime", yeni, "--mesaj", mesaj],
                       capture_output=True, timeout=30)
    except Exception as e:
        print("   ⚪ tahtaya bildirilemedi (%s) — kilit DEVREDİLDİ, yalnız"
              " duyuru düştü" % type(e).__name__)


def k_durum(hedef, kim=None):
    d = yukle()
    kl = d["kilitler"]
    if hedef:
        anah = yol_anahtar(hedef[0])
        kl = {anah: kl[anah]} if anah in kl else {}
    print("DOSYA KİLİTLERİ — makine %s · %d kilit" % (makine(), len(kl)))
    print("⚠️ KAPSAM: YALNIZ BU MAKİNE. Başka makinedeki kilit burada GÖRÜNMEZ")
    print("   (beyanlı sınır — 'kilit yok' ile 'ölçülemedi' ayrı şeylerdir).")
    if not kl:
        print("   — kilit yok —")
        return 0
    for anah in sorted(kl):
        k = kl[anah]
        print()
        print("  %s" % anah)
        print("    sahip : %s  (%s)" % (k.get("sahip"), yas_yazi(k.get("alindi"))))
        for n, s in enumerate(k.get("sira") or [], 1):
            print("    sıra %d: %s  (%s bekliyor)" % (n, s.get("kim"),
                                                      yas_yazi(s.get("girdi"))))
    return 0


def k_kimde(yol):
    anah = yol_anahtar(yol)
    d = yukle()
    k = d["kilitler"].get(anah)
    if k is None:
        print("SERBEST — %s" % anah)
        return 0
    print("%s — sahip %s (%s) · sıra %d"
          % (anah, k.get("sahip"), yas_yazi(k.get("alindi")), len(k.get("sira") or [])))
    return 1


def k_birak_hepsi(kim):
    d = yukle()
    benim = [a for a, k in d["kilitler"].items() if k.get("sahip") == kim]
    if not benim:
        print("⚪ %s oturumunda kilit yok" % kim)
        return 0
    print("%s oturumunun %d kilidi bırakılıyor:" % (kim, len(benim)))
    for a in benim:
        k_birak(os.path.join(KOK, a), kim)
    return 0


def k_zorla(yol, gerekce):
    """🔴 Yalnız koordinatör, ve YALNIZ ölçümden sonra (§7.2: 'takıldı' demeden
    önce ① teslim gelmiş mi ② nabız ③ ancak ikisi de hayırsa). Gerekçe
    ZORUNLU ve kayda geçer — gerekçesiz devralma, `kos_ve_yayinla`nın 4 saat
    tavanının aynısıdır: bir tahmin, bir ölçümün yerine geçmiş olur."""
    anah = yol_anahtar(yol)
    with Nobet():
        d = yukle()
        k = d["kilitler"].get(anah)
        if k is None:
            print("⚪ KİLİT YOK — %s" % anah)
            return 0
        kayit = d.setdefault("zorla_gecmis", [])
        kayit.append({"dosya": anah, "eski_sahip": k.get("sahip"),
                      "alinmisti": k.get("alindi"), "gerekce": gerekce,
                      "ne_zaman": simdi()})
        sira = k.get("sira") or []
        print("🔴 ZORLA BIRAKILDI — %s" % anah)
        print("   eski sahip: %s (%s)" % (k.get("sahip"), yas_yazi(k.get("alindi"))))
        print("   gerekçe   : %s" % gerekce)
        if sira:
            yeni = sira.pop(0)
            d["kilitler"][anah] = {"sahip": yeni["kim"], "alindi": simdi(), "sira": sira}
            print("   ⇒ SIRADAKİ ALDI: %s" % yeni["kim"])
        else:
            del d["kilitler"][anah]
            print("   ⇒ SERBEST (sıra boş)")
        kaydet(d)
        return 0


def main(argv):
    # 🔴 Kaçış kapıları SESSİZ KALMAZ — kullanıldıklarını kendileri söyler.
    if os.environ.get("KILIT_DURUM"):
        print("⚪ KILIT_DURUM=%s — GERÇEK kilit dosyası DEĞİL (sınav kipi)" % DURUM)
    if not TAHTA_ACIK:
        print("⚪ KILIT_TAHTA=0 — devir bildirimleri tahtaya YAZILMAYACAK")
    komut, g, hata = ayristir(argv)
    if hata:
        print("🔴 %s" % hata, file=sys.stderr)
        print(__doc__.split("ÇIKIŞ KODLARI")[0].strip()[:0] or "", end="")
        print("kullanım:", file=sys.stderr)
        print('  py arac/kilit.py al <dosya> --kim "<AD>"', file=sys.stderr)
        print('  py arac/kilit.py birak <dosya> --kim "<AD>"', file=sys.stderr)
        print('  py arac/kilit.py durum [<dosya>]', file=sys.stderr)
        print('  py arac/kilit.py kimde <dosya>', file=sys.stderr)
        print('  py arac/kilit.py birak-hepsi --kim "<AD>"', file=sys.stderr)
        print('  py arac/kilit.py zorla-birak <dosya> --gerekce "…"', file=sys.stderr)
        return 3
    hedef, kim = g["hedef"], g.get("--kim")
    sessiz = bool(g.get("--sessiz"))
    try:
        if komut == "al":
            if not hedef or not kim:
                print("🔴 al: <dosya> ve --kim ŞART", file=sys.stderr)
                return 3
            return k_al(hedef[0], kim, sessiz)
        if komut == "birak":
            if not hedef or not kim:
                print("🔴 birak: <dosya> ve --kim ŞART", file=sys.stderr)
                return 3
            return k_birak(hedef[0], kim, sessiz)
        if komut == "durum":
            return k_durum(hedef)
        if komut == "kimde":
            if not hedef:
                print("🔴 kimde: <dosya> ŞART", file=sys.stderr)
                return 3
            return k_kimde(hedef[0])
        if komut == "birak-hepsi":
            if not kim:
                print("🔴 birak-hepsi: --kim ŞART", file=sys.stderr)
                return 3
            return k_birak_hepsi(kim)
        if komut == "zorla-birak":
            if not hedef or not g.get("--gerekce"):
                print("🔴 zorla-birak: <dosya> ve --gerekce ŞART —"
                      " gerekçesiz devralma YASAK", file=sys.stderr)
                return 3
            return k_zorla(hedef[0], g["--gerekce"])
    except (ValueError, RuntimeError, OSError) as e:
        # 🔴 ÖLÇÜLEMEDİ ⇒ 2, ve bu "serbest" DEMEK DEĞİL
        print("🔴 ÖLÇÜLEMEDİ: %s: %s" % (type(e).__name__, e), file=sys.stderr)
        print("   ⇒ ÇIKIŞ 2. Kilit durumu okunamadı ⇒ dosya MEŞGUL sayılır,"
              " serbest SAYILMAZ. Yazma.", file=sys.stderr)
        return 2
    return 3


if __name__ == "__main__":
    sys.exit(main(sys.argv[1:]))
