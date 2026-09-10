# -*- coding: utf-8 -*-
"""CAPRAZ PARALEL — FAZ 1 ile FAZ 2 ZAMANDA ORTUSURSE yeni bir yaris dogar mi?

BAGLAM: onerilen care list(_ex.map(...))i kaldirip ureteci DOGRUDAN dolasmak.
O zaman FAZ 2 govdesi (ana is parcacigi) FAZ 1 hala kosarken calisir.
list() bicimindE bu ORTUSME YOKTU: butun FAZ 1 biter, sonra FAZ 2 baslar.

SORU: FAZ 2'nin YAZDIGI her paylasilan kabi, FAZ 1'den ULASILAN bir
fonksiyon OKUYOR ya da YAZIYOR mu? Kesisim BOS degilse yeni yaris vardir.

AYRICA: sayac() anahtar dizgilerini iki taraf icin AYRI cikarir — ayni
anahtar iki taraftan guncelleniyorsa AYNI liste nesnesi uzerinde
okuma-degistirme-yazma olur (gercek kayip guncelleme); anahtarlar AYRIKSA
setdefault atomik oldugu icin catisma OLMAZ.

CIKTI: denetim/OLCUM-CAPRAZ-PARALEL-ORTUSME-0910.json
Bu alet KOD OKUR, motoru KOSTURMAZ.
"""
import ast, json, sys, io, os
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8", errors="replace")

KAYNAK = os.path.join(os.path.dirname(__file__), "..", "arac", "uret_petek.py")
src = open(KAYNAK, encoding="utf-8").read()
agac = ast.parse(src)

FONK = {}
for n in ast.walk(agac):
    if isinstance(n, (ast.FunctionDef, ast.AsyncFunctionDef)):
        FONK.setdefault(n.name, n)


def cagrilar(fn):
    out = set()
    for n in ast.walk(fn):
        if isinstance(n, ast.Call) and isinstance(n.func, ast.Name):
            out.add(n.func.id)
    return out


def kapanis(kok):
    gor, yig = set(), [kok]
    while yig:
        a = yig.pop()
        if a in gor or a not in FONK:
            continue
        gor.add(a)
        yig.extend(cagrilar(FONK[a]))
    return gor


FAZ1 = kapanis("_yabanci_devlet_faz1")

# FAZ 2'nin ana is parcaciginda YAZDIGI paylasilan kaplar (diff'ten okundu)
FAZ2_YAZDIGI = ["_PUAN_KESILEN", "_PUAN_TAMAMEN", "_SAYAC", "DEVLET_KAYIT",
                "DEV_HALKA", "DEV_HALKA_IX", "DEV_PARCA", "DEV_PARCA_IX"]
# FAZ 2 bunlari DOLAYLI da yaziyor: sayac() -> _SAYAC · havuza() -> havuzlar
FAZ2_KAPANIS = kapanis("havuza") | kapanis("sayac") | kapanis("ilerleme")


def adlar_gecen(fn, hedefler):
    """fn govdesinde hedef adlardan hangileri HERHANGI bir baglamda geciyor"""
    bulunan = {}
    for n in ast.walk(fn):
        if isinstance(n, ast.Name) and n.id in hedefler:
            bulunan.setdefault(n.id, []).append(n.lineno)
    return bulunan


# ---- (1) KESISIM: FAZ 2'nin yazdigini FAZ 1 goruyor mu? -----------------
kesisim = {}
for f in sorted(FAZ1):
    g = adlar_gecen(FONK[f], set(FAZ2_YAZDIGI))
    if g:
        kesisim[f] = {k: v for k, v in g.items()}

# ---- (2) sayac() anahtarlari, iki taraf icin AYRI -----------------------
def sayac_anahtarlari(fonk_kumesi):
    out = {}
    for f in sorted(fonk_kumesi):
        if f not in FONK:
            continue
        for n in ast.walk(FONK[f]):
            if (isinstance(n, ast.Call) and isinstance(n.func, ast.Name)
                    and n.func.id == "sayac" and n.args):
                a0 = n.args[0]
                if isinstance(a0, ast.Constant) and isinstance(a0.value, str):
                    out.setdefault(a0.value, []).append("%s:%d" % (f, n.lineno))
                else:
                    out.setdefault("<DEGISKEN ANAHTAR>", []).append(
                        "%s:%d" % (f, n.lineno))
    return out

faz1_anahtar = sayac_anahtarlari(FAZ1)
# FAZ 2 govdesi bir fonksiyon DEGIL, modul duzeyinde. Modul duzeyindeki
# sayac() cagrilarini AYRICA tara (fonksiyon govdelerinin DISINDA kalanlar).
fonk_satirlari = set()
for f in FONK.values():
    for n in ast.walk(f):
        if hasattr(n, "lineno"):
            fonk_satirlari.add(n.lineno)
modul_sayac = {}
for n in ast.walk(agac):
    if (isinstance(n, ast.Call) and isinstance(n.func, ast.Name)
            and n.func.id == "sayac" and n.args and n.lineno not in fonk_satirlari):
        a0 = n.args[0]
        k = a0.value if isinstance(a0, ast.Constant) else "<DEGISKEN>"
        modul_sayac.setdefault(k, []).append("modul:%d" % n.lineno)

ortak = sorted(set(faz1_anahtar) & set(modul_sayac))

rapor = {
    "faz1_fonksiyon_sayisi": len(FAZ1),
    "faz2_yazdigi_kaplar": FAZ2_YAZDIGI,
    "kesisim": kesisim,
    "kesisim_bos_mu": not kesisim,
    "sayac_anahtari_FAZ1": {k: v for k, v in faz1_anahtar.items()},
    "sayac_anahtari_MODUL": {k: v for k, v in modul_sayac.items()},
    "ORTAK_SAYAC_ANAHTARI": ortak,
}
yol = os.path.join(os.path.dirname(__file__),
                   "OLCUM-CAPRAZ-PARALEL-ORTUSME-0910.json")
json.dump(rapor, open(yol, "w", encoding="utf-8"), ensure_ascii=False, indent=1)

print("FAZ 1 kapanisi: %d fonksiyon" % len(FAZ1))
print()
print("=== (1) FAZ 2'NIN YAZDIGI KAPLARI FAZ 1 GORUYOR MU ===")
if not kesisim:
    print("  KESISIM BOS — FAZ 1'den ulasilan hicbir fonksiyon bu adlari ANMIYOR")
for f, g in kesisim.items():
    print("  %s -> %s" % (f, g))
print()
print("=== (2) sayac() ANAHTARLARI ===")
print("  FAZ 1 (isciler):")
for k, v in sorted(faz1_anahtar.items()):
    print("     %-38s %s" % (repr(k), ", ".join(v)))
print("  MODUL DUZEYI (ana is parcacigi, FAZ 2 dahil):", len(modul_sayac), "anahtar")
for k, v in sorted(modul_sayac.items()):
    print("     %-38s %s" % (repr(k), ", ".join(v[:3]) + (" ..." if len(v) > 3 else "")))
print()
print("  ORTAK ANAHTAR (ayni liste nesnesi -> GERCEK yaris):",
      ortak if ortak else "YOK")
print()
print("->", yol)
