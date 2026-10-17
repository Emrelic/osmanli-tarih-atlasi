# -*- coding: utf-8 -*-
"""DUYGU TABANI — DUYGU-VE-SEKME-SARTNAME.md §A④.

`k:` ve `etiket:`ten turetir. ELLE yazilmis `duygu:` varsa DOKUNMAZ.
🔴 TON KURALI (§A③): kiyim/surgun/kitlik/salgin maddelerinde
   guler/kusar sinifi emoji KULLANILMAZ.
"""
import io, os, re, sys, glob, collections
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8", errors="replace")
# Kok: betigin bulundugu checkout (worktree'de calisan ana checkout'a yazmasin);
# `--kok <dizin>` sinama kopyasi icin.
KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
if "--kok" in sys.argv:
    KOK = sys.argv[sys.argv.index("--kok") + 1]
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


def _s(v):
    return v if isinstance(v, str) else ""


# Kayitlar biçimden bagimsiz okunur (olay_kayit) — 14 Ekim 2026: regex
# tarayici JSON anahtarini gormuyordu; yorumdaki 3 kaydi ve olaylar.js'in 29
# `alt_kronoloji` adimini madde sayiyordu (adimlara duygu YAZACAKTI).
# Konum metin tarayicidan, alan degerleri tarayici gibi yuklemeden gelir;
# ikisi dosyada ayni kayit dizisini vermezse o dosyaya YAZILMAZ.
sys.path.insert(0, os.path.join(KOK, "arac"))
import olay_kayit
DOSYALAR = sorted(glob.glob("data/olaylar*.js"))
try:
    YUK = olay_kayit.yukle(DOSYALAR)
except Exception as e:
    print("🔴 ÖLÇÜLEMEDİ — olay dosyaları yüklenemedi: %s" % e)
    sys.exit(2)

sayac = collections.Counter()
agir_n = yazilan = atlanan = 0
ornek = []
olculemedi = []
yorumlu = []

for f in DOSYALAR:
    t = io.open(f, encoding="utf-8", newline="").read()
    ara = olay_kayit.araliklar(t)
    if [re.search(r'"(\d{4}[^"]*)"', g).group(1) for _, _, g in ara] != \
            [_s(r.get("t")) for r in YUK[f]]:
        olculemedi.append(f)
        continue
    yama = []
    for (bas, son, g), r in zip(ara, YUK[f]):
        # ELLE yazilmis (bos bile olsa) duygu alanina dokunulmaz.
        if "duygu" in r:
            atlanan += 1
            continue
        p = olay_kayit.son_kod(t, bas, son)
        if t[p:son].strip():
            # `}` onunde yorum var: alan yorumun icine duserdi — elle.
            yorumlu.append((f, r.get("t")))
            continue
        jsn = bool(re.match(r'\{\s*"t"', g))
        kat = _s(r.get("k")) or "diger"
        baslik = _s(r.get("b"))
        metin = _s(r.get("d"))

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
        if jsn:
            # JSON kayit JSON alan alir; cok satirli kayitta anahtar girintisi
            # korunur, `}` oncesindeki bosluk yerinde kalir.
            gm = re.search(r'\n([ \t]*)"t"', g)
            ayr = (",\n" + gm.group(1)) if gm else ", "
            ws = g[len(g[:-1].rstrip()):-1]
            alan = '%s"duygu": [%s]%s' % (
                ayr, ", ".join('"%s"' % e for e in duygu), ws)
        else:
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
for f in olculemedi:
    print("🔴 ÖLÇÜLEMEDİ — %s: metin tarayıcı ile yükleme farklı kayıt dizisi verdi, YAZILMADI" % f)
for f, tt in yorumlu:
    print("⚠️  %s %s: kapanıştan önce yorum — duygu elle yazılmalı" % (f, tt))
sys.exit(2 if olculemedi else 0)
