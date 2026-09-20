# Değişmez 3 çelişkilerini SINIFLA — kaynak gerektirmeyen, ölçülebilir ölçüt.
#
# Her çelişki (g, y, m, a, b) için ÇİFTİN (y,m) 6 kesitteki uyum profili:
#   UYAR   : ikisi de tanımlı ve aynı (ya da OSMANLI/tabi)
#   UYMAZ  : ikisi de tanımlı, farklı  → çelişki
#   TANIMSIZ: biri yok
#
# SINIF A — bağ HİÇBİR kesitte geçerli değil (UYAR = 0):
#   `m:` bütün ölçülen pencerede anakronik/yanlış. `kd:` ile (m:null ya da
#   dönemin gerçek merkezi) TAMAMEN kalkar.
# SINIF B — bağ BAZI kesitlerde geçerli (UYAR >= 1 ve UYMAZ >= 1):
#   bağ gerçek ama PENCERESİ var; `kd:` penceresi yazılınca kalkar.
# A+B = `m:`in zaman penceresi eksikliğinden doğan çelişki.
#
# EKSEN KUSURU ADAYI (kd: çözmez) — A/B'den bağımsız işaret:
#   çift YAKIN (<=100 km) ve UYAR >= UYMAZ, yani bağ baskın biçimde geçerli;
#   tek tük kesitte ayrışıyor ⇒ merkez değişimi değil, DEVİR TARİHİ kusuru.
import sys, json, io, collections
sys.path.insert(0, 'arac')
import girdi, denetle

SP = sys.argv[1]
KESIT = ("1300-06-15", "1400-06-15", "1500-06-15",
         "1600-06-15", "1700-06-15", "1800-06-15")
Y = girdi.yukle()
ix = {y["ad"]: y for y in Y}


def durum(y, g):
    for p in (y.get("d") or []):
        if p["f"] <= g < p["t"]:
            return "OSMANLI"
    for p in (y.get("v") or []):
        if p["f"] <= g < p["t"]:
            return "tabi"
    for p in (y.get("s") or []):
        if p["f"] <= g < p["t"]:
            return p["d"]
    return "—"


def uyum(y, m, g):
    a, b = durum(y, g), durum(m, g)
    if a == "—" or b == "—":
        return "TANIMSIZ"
    if a == b or {a, b} == {"OSMANLI", "tabi"}:
        return "UYAR"
    return "UYMAZ"


c3z, _ = denetle.degismez3z(Y)

profil = {}          # (y_ad, m_ad) -> (uyar, uymaz, tanimsiz)
for g, ad, m_ad, a, b in c3z:
    if (ad, m_ad) in profil:
        continue
    y, m = ix[ad], ix[m_ad]
    say = collections.Counter(uyum(y, m, k) for k in KESIT)
    profil[(ad, m_ad)] = (say["UYAR"], say["UYMAZ"], say["TANIMSIZ"])

sinif = collections.Counter()
celiski_sinif = collections.Counter()
aday = []
for g, ad, m_ad, a, b in c3z:
    uyar, uymaz, _t = profil[(ad, m_ad)]
    s = "A" if uyar == 0 else "B"
    sinif[s] += 0
    celiski_sinif[s] += 1
    if uyar >= uymaz and uyar > 0:
        d = girdi.km(ix[ad]["lat"], ix[ad]["lon"], ix[m_ad]["lat"], ix[m_ad]["lon"])
        if d <= 100:
            aday.append((g, ad, m_ad, a, b, round(d)))

cift_sinif = collections.Counter("A" if v[0] == 0 else "B" for v in profil.values())

print("ÇELİŞKİ toplam        :", len(c3z))
print("  SINIF A (bağ hiç geçerli değil):", celiski_sinif["A"])
print("  SINIF B (bağın penceresi var)  :", celiski_sinif["B"])
print("ÇİFT toplam           :", len(profil))
print("  SINIF A çift:", cift_sinif["A"], " SINIF B çift:", cift_sinif["B"])
print("\nEKSEN KUSURU ADAYI (yakın çift, bağ baskın geçerli):", len(aday))
for t in sorted(aday):
    print("   %s  %-26s -> %-22s  %-18s / %-18s  %4d km" % t)

with io.open(SP + "/sinif.json", "w", encoding="utf-8") as f:
    json.dump({"toplam": len(c3z), "A": celiski_sinif["A"], "B": celiski_sinif["B"],
               "aday": aday}, f, ensure_ascii=False, indent=1)
