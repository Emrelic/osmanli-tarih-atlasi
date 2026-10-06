# SINAV: liste degisince motor TUZU sabit kaliyor mu?
# Iki yonlu (C13): ① listeyi degistir -> tuz AYNI kalmali
#                  ② girdi.py'nin KODUNU degistir -> tuz DEGISMELI
import io, sys, hashlib, shutil, os
sys.stdout.reconfigure(encoding="utf-8", errors="replace")
ARAC = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), "arac")
sys.path.insert(0, ARAC)

GP = os.path.join(ARAC, "girdi.py")
LP = os.path.join(ARAC, "girdi_listesi.py")

def tuz():
    """motor_izi()'nin uc dosya sha256'si = tuzun kod ekseni."""
    iz = {}
    for ad in ("uret_petek.py", "renkler.py", "girdi.py"):
        y = os.path.join(ARAC, ad)
        iz[ad] = hashlib.sha256(io.open(y, "rb").read()).hexdigest()
    return hashlib.sha256(repr(sorted(iz.items())).encode()).hexdigest()[:16]

ILK = tuz()
print("baslangic tuzu:", ILK)

# --- ① LISTEYI DEGISTIR ------------------------------------------------------
# yedek/geri yukleme BAYT olarak: metin kipi CRLF->LF cevirip sha256'yi (= tuzu) degistiriyordu
yedek_l = io.open(LP, "rb").read()
io.open(LP, "wb").write(
    yedek_l.replace(b'GIRDI_DOSYALARI = [',
                    b'GIRDI_DOSYALARI = [\n    "SINAV_SAHTE_DOSYA.js",', 1))
A = tuz()
io.open(LP, "wb").write(yedek_l)
print("① liste degisti     -> tuz:", A, "  ", "✅ AYNI (dogru)" if A == ILK else "🔴 DEGISTI (KUSUR)")

# --- ② girdi.py KODUNU DEGISTIR ---------------------------------------------
yedek_g = io.open(GP, "rb").read()
io.open(GP, "wb").write(yedek_g + b"\n# SINAV SATIRI\n")
B = tuz()
io.open(GP, "wb").write(yedek_g)
print("② girdi.py kodu degisti -> tuz:", B, "", "✅ DEGISTI (dogru)" if B != ILK else "🔴 AYNI (KUSUR)")

# --- geri yukleme dogrulamasi ------------------------------------------------
SON = tuz()
print("geri yuklendi       -> tuz:", SON, "  ", "✅ baslangicla ayni" if SON == ILK else "🔴 DOSYALAR BOZUK")
print()
ok = (A == ILK) and (B != ILK) and (SON == ILK)
print("SINAV:", "GECTI ✅" if ok else "KALDI 🔴")
sys.exit(0 if ok else 1)
