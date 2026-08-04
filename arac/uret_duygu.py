# -*- coding: utf-8 -*-
"""DUYGU TABANI — DUYGU-VE-SEKME-SARTNAME.md §A④.

`k:` ve `etiket:`ten turetir. ELLE yazilmis `duygu:` varsa DOKUNMAZ.
🔴 TON KURALI (§A③): kiyim/surgun/kitlik/salgin maddelerinde
   guler/kusar sinifi emoji KULLANILMAZ.
"""
import io, os, re, sys, glob, collections
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8", errors="replace")
KOK = r"C:\Users\emrem\OneDrive\Desktop\TARİH COĞRAFYA SİTESİ"
os.chdir(KOK)
KURU = "--kuru" in sys.argv

# --- kategori tabani -------------------------------------------------------
K_DUYGU = {
    "fetih": ["🎉"], "kayip": ["😔"], "savas": ["⚔️"], "kusatma": ["🏰"],
    "sefer": ["🐎"], "antlasma": ["🤝"], "diplomasi": ["🕊"], "ittifak": ["🤝"],
    "siyaset": ["🏛"], "idari": ["📋"], "kanun": ["⚖️"], "reform": ["📜"],
    "taht": ["👑"], "darbe": ["🗡"], "ayaklanma": ["✊"], "isyan": ["✊"],
    "vassal": ["🎌"], "kurulus": ["🌱"], "evlilik": ["💍"], "sadrazam": ["🏛"],
    "ekonomi": ["💰"], "kultur": ["🎨"], "bilim": ["🔬"], "mimari": ["🕌"],
    "sosyoloji": ["👥"], "felsefe": ["💭"], "spor": ["🏆"], "kesif": ["🧭"],
    "diger": ["📌"],
}

# --- 🔴 AGIR MADDE tespiti — IKI SINIF, ve ayrimi onemli ------------------
# Ilk denemede tek sinif kullandim ve TABAN BOZULDU: "Ridaniye — Misir'in
# fethi" ile "Cimpe Kalesi" 😢 cikti, cunku METINDE gecen tek bir "esaret"
# kelimesi kategori emojisini tamamen silip yerine huzun koyuyordu. Bir fethi
# saf huzne cevirmek, duygu koymamaktan DAHA YANLIS (K1).
#
# KIYIM  — olayin KENDISI bir felaket. Senlikli emojiyi SILER.
KIYIM = re.compile(
    r"kılıçtan geçir|katliam|kıyım|soykırım|tehcir|kıtlık|"
    r"vebâ|veba|tâun|salgın|yağma|talan", re.I)
# ACI   — olayda aci var ama olayin TURUNU degistirmiyor. Emoji EKLER, silmez.
#          ⚠️ yalniz BASLIKTA aranir: metinde gecen anma yeterli degil.
ACI = re.compile(
    r"boğdur|idam|katl|şehadet|intihar|esaret|sürgün|yenilgi|bozgun|"
    r"düşüş|yıkılış|kayb[ıi]|deprem|yangın", re.I)
# Hicbir sartla KIYIM maddesinde gorunmeyecekler (§A③)
YASAK_KIYIM = set(["🎉", "😀", "😂", "🤣", "🤮", "👏", "🏆", "💍"])


def kayitlar(t):
    out = []
    for m in re.finditer(r'\{\s*t:\s*"\d{4}-\d{2}-\d{2}"', t):
        d, q, esc, son = 0, None, False, None
        for j in range(m.start(), len(t)):
            c = t[j]
            if esc:
                esc = False; continue
            if c == "\\":
                esc = True; continue
            if q:
                if c == q: q = None
                continue
            if c in "\"'": q = c
            elif c in "[{(": d += 1
            elif c in "]})":
                d -= 1
                if d == 0: son = j; break
        if son is not None:
            out.append((m.start(), son, t[m.start():son + 1]))
    return out


sayac = collections.Counter()
agir_n = yazilan = atlanan = 0
ornek = []

for f in sorted(glob.glob("data/olaylar*.js")):
    t = io.open(f, encoding="utf-8", newline="").read()
    yama = []
    for bas, son, g in kayitlar(t):
        if "duygu:" in g:
            atlanan += 1
            continue
        k = re.search(r'\bk:\s*"([^"]*)"', g)
        b = re.search(r'\bb:\s*"([^"]*)"', g)
        d = re.search(r'\bd:\s*"((?:[^"\\]|\\.)*)"', g)
        kat = k.group(1) if k else "diger"
        baslik = b.group(1) if b else ""
        metin = (d.group(1) if d else "")

        # 🔴 BASLIK olayin NE OLDUGUNU soyler, METIN NE ICERDIGINI.
        # Ilk surumde ikisini ayni saydim ve denetim 16 ihlal buldu:
        # "Karaman'in kesin ilhaki" senlikli cikiyordu cunku yazici metnin
        # ilk 600 karakterine, denetci 2400'une bakiyordu — yani iki AYRI
        # kural. Ayrim su: basligi kiyim olan olay KIYIMDIR, senlik silinir;
        # metninde kiyim GECEN olay bir fetih olabilir ama saf senlikle
        # gosterilemez — kategori emojisi kalir, yanina hüzün eklenir.
        duygu = list(K_DUYGU.get(kat, ["📌"]))
        kiyim = bool(KIYIM.search(baslik))            # olayin KENDISI
        aci = bool(ACI.search(baslik) or KIYIM.search(metin))   # olayin ICERIGI
        if kiyim:
            agir_n += 1
            # 🔴 senlikli emoji SILINIR — kategori "fetih" bile olsa
            duygu = [e for e in duygu if e not in YASAK_KIYIM]
            duygu = ["😢"] + duygu + ["😠"]
        elif aci:
            # kategori emojisi KALIR, yanina hüzün eklenir
            duygu = [e for e in duygu if e not in YASAK_KIYIM] or list(duygu)
            duygu = duygu + ["😔"]
        # tekrari at, ucle sinirla
        gor, temiz = set(), []
        for e in duygu:
            if e not in gor:
                gor.add(e); temiz.append(e)
        duygu = temiz[:3]
        if (kiyim or aci) and len(ornek) < 14:
            ornek.append((baslik[:52], kat, "KIYIM" if kiyim else "acı",
                          "".join(duygu)))
        sayac[kat] += 1
        alan = ', duygu:[%s] ' % ",".join('"%s"' % e for e in duygu)
        yama.append((son, alan))
        yazilan += 1

    if yama and not KURU:
        for son, alan in sorted(yama, reverse=True):
            ic = t[:son].rstrip().rstrip(",")
            t = ic + alan + t[son:]
        fh = io.open(f, "w", encoding="utf-8", newline="")
        fh.write(t); fh.close()

print("yazilan %d · zaten duygu:'su olan %d · AGIR sayilan %d %s"
      % (yazilan, atlanan, agir_n, "(KURU)" if KURU else ""))
print()
print("--- agir madde ornekleri (ton kurali uygulanmis) ---")
for b, k, s, e in ornek:
    print("   %-52s %-10s %-6s %s" % (b, k, s, e))
print()
print("--- kategori dagilimi ---")
for a, c in sayac.most_common(12):
    print("   %-12s %4d  %s" % (a, c, "".join(K_DUYGU.get(a, ["📌"]))))
