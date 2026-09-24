# SINAV: liste degisince motor TUZU sabit kaliyor mu?
# Iki yonlu (C13): ① listeyi degistir -> tuz AYNI kalmali
#                  ② girdi.py'nin KODUNU degistir -> tuz DEGISMELI
import io, sys, hashlib, shutil, os
sys.stdout.reconfigure(encoding="utf-8", errors="replace")
sys.path.insert(0, r"C:\atlas\arac")

GP = r"C:\atlas\arac\girdi.py"
LP = r"C:\atlas\arac\girdi_listesi.py"

def tuz():
    """motor_izi()'nin uc dosya sha256'si = tuzun kod ekseni."""
    iz = {}
    for ad in ("uret_petek.py", "renkler.py", "girdi.py"):
        y = os.path.join(r"C:\atlas\arac", ad)
        iz[ad] = hashlib.sha256(io.open(y, "rb").read()).hexdigest()
    return hashlib.sha256(repr(sorted(iz.items())).encode()).hexdigest()[:16]

ILK = tuz()
print("baslangic tuzu:", ILK)

# --- ① LISTEYI DEGISTIR ------------------------------------------------------
yedek_l = io.open(LP, encoding="utf-8").read()
io.open(LP, "w", encoding="utf-8", newline="").write(
    yedek_l.replace('GIRDI_DOSYALARI = [',
                    'GIRDI_DOSYALARI = [\n    "SINAV_SAHTE_DOSYA.js",', 1))
A = tuz()
io.open(LP, "w", encoding="utf-8", newline="").write(yedek_l)
print("① liste degisti     -> tuz:", A, "  ", "✅ AYNI (dogru)" if A == ILK else "🔴 DEGISTI (KUSUR)")

# --- ② girdi.py KODUNU DEGISTIR ---------------------------------------------
yedek_g = io.open(GP, encoding="utf-8").read()
io.open(GP, "w", encoding="utf-8", newline="").write(yedek_g + "\n# SINAV SATIRI\n")
B = tuz()
io.open(GP, "w", encoding="utf-8", newline="").write(yedek_g)
print("② girdi.py kodu degisti -> tuz:", B, "", "✅ DEGISTI (dogru)" if B != ILK else "🔴 AYNI (KUSUR)")

# --- geri yukleme dogrulamasi ------------------------------------------------
SON = tuz()
print("geri yuklendi       -> tuz:", SON, "  ", "✅ baslangicla ayni" if SON == ILK else "🔴 DOSYALAR BOZUK")
print()
ok = (A == ILK) and (B != ILK) and (SON == ILK)
print("SINAV:", "GECTI ✅" if ok else "KALDI 🔴")
sys.exit(0 if ok else 1)
