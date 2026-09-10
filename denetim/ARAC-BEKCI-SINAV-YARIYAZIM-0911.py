# NOBETCININ "HALA YAZILIYOR" DALINI SINAR — ve o dal, 9 BIP'IN SIGORTASI.
#
# Onceki sinavda bitis yolu gecti AMA bu dal HIC CALISMADI: tetik, nobetci
# ilk yoklamasini yapmadan once buyumeyi bitirmisti. Yani "kararlilik
# kontrolu var" olcuduk, "kararlilik kontrolu ISE YARIYOR" olcmedik.
# 🔴 Dal bozuk olsaydi bedeli: motor `donemler.js`i yazarken (~31 MB)
#   nobetci mtime degisimini gorup 9 BIP basar, koordinator "kosu bitti"
#   der, ve denetim YARIM DOSYA uzerinde kosar. `§10`un tam olarak
#   YASAKLADIGI sey: "bitti sanip erken haber vermek".
#
# BU SINAV: tetigi nobetci UYANDIKTAN SONRA da buyutmeye devam eder.
# BEKLENEN: en az bir "hala yaziliyor" satiri, SONRA bitis.
import io, os, subprocess, sys, time

ATLAS = u"C:\\Users\\emrem\\OneDrive\\Desktop\\TAR\u0130H CO\u011eRAFYA S\u0130TES\u0130"
SCRATCH = os.environ.get("BEKCI_SINAV_DIZIN") or __import__("tempfile").gettempdir()
TETIK = os.path.join(SCRATCH, "sahte_tetik2.js")
# 🔴 SAHTE MOTOR betigi DENETIM'de durur (bir ALETTIR), ama urettigi TETIK
#    DOSYASI depo agacinin DISINA yazilir. Ayrim kasitli: `CAPRAZ PARALEL`
#    10 Eylul'de olctu — depo agacinin icine GERCEK ADLARLA yazilan scratch
#    (79 dosya: `yerlesimler.js` · `renkler.py` · `goller.js`), toplu bir
#    commit'te GERI ALINAMAZ hasar icin hazir bir tuzaktir; bayat kopya
#    git'te DAHA YENI gorunur.
#    ⇒ ALET depoda, URETTIGI DOSYA disarida.
SAHTE_MOTOR = os.path.join(os.path.dirname(os.path.abspath(__file__)),
                           "ARAC-BEKCI-SINAV-SAHTEMOTOR-0911.py")
LOG = os.path.join(ATLAS, "denetim", "BEKCI-KOSU9.out")

for y in (TETIK, LOG):
    try:
        os.remove(y)
    except OSError:
        pass
io.open(TETIK, "w").write("x" * 1500)

ort = dict(os.environ)
ort["BEKCI_TETIK"] = TETIK
ort["BEKCI_DESEN"] = "SINAV-SAHTEMOTOR"
ort["BEKCI_ASGARI"] = "1000"

motor = subprocess.Popen([sys.executable, SAHTE_MOTOR])
time.sleep(2)
bekci = subprocess.Popen(
    [sys.executable, os.path.join(ATLAS, "denetim",
                                  "ARAC-BEKCI-KOSU9-0910.py")],
    env=ort, cwd=ATLAS,
    stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
print("motor %d - nobetci %d" % (motor.pid, bekci.pid))

# SUREKLI buyut: ilk yoklama (120 sn) ve kararlilik kontrolu (2x30 sn)
# BOYUNCA dosya buyumeye devam etsin.
boy = 1500
bas = time.time()
while time.time() - bas < 260:
    boy += 700
    io.open(TETIK, "w").write("x" * boy)
    time.sleep(20)
print("buyume DURDU (%d bayt) - nobetci artik bitirmeli" % boy)

bitis = time.time() + 300
while time.time() < bitis:
    if bekci.poll() is not None:
        break
    time.sleep(5)

metin = io.open(LOG, encoding="utf-8", errors="replace").read()
yariyazim = metin.count("hala yaziliyor")
print("")
print("=" * 60)
print("cikis kodu        : %s   (0 beklenir)" % bekci.poll())
print("'hala yaziliyor'  : %d satir   (>=1 beklenir)" % yariyazim)
print("HUKUM             : %s" % (
    "GECTI" if bekci.poll() == 0 and yariyazim >= 1 else "KALDI"))
print("=" * 60)
for p in (motor, bekci):
    try:
        p.kill()
    except Exception:
        pass
sys.stdout.write(metin)
