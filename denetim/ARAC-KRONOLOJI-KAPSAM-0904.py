# -*- coding: utf-8 -*-
"""KRONOLOJİ KAPSAM ÖLÇERİ — Emre'nin 4 Eylül 2026 ölçütü.

    py denetim/ARAC-KRONOLOJI-KAPSAM-0904.py            genel tablo
    py denetim/ARAC-KRONOLOJI-KAPSAM-0904.py --bolge    bölge bölge
    py denetim/ARAC-KRONOLOJI-KAPSAM-0904.py --eksik <cins>   o cinsi taşımayan künyeler
    py denetim/ARAC-KRONOLOJI-KAPSAM-0904.py --kunye <id>     tek künyenin karnesi

═══ NİÇİN VAR ═══
Emre, 4 Eylül 2026:
  "kronolojilerde devletlerin kuruluşu, toprak kayıp ve kazançları,
   girdikleri savaşlar, ittifaklar, anlaşmalar, isyanlar, iç savaşlar,
   hükümdar tahta çıkma ve inmeleri gibi siyasi olayları belirtmeli"

Bu cümle bir KABUL ÖLÇÜTÜDÜR ve yazılı olmazsa her oturum kendi anladığını
yazar. `§11`in kuralı: ***bu bilgiyi bir `if` ile sorabiliyor muyum?***
Sorulabiliyor — çünkü 1980 maddenin 1980'inde `tur` alanı var (ölçüldü).
Bu betik o alanı Emre'nin dokuz cinsine eşler ve kapsamayı sayar.

⚠️ NE ÖLÇER, NE ÖLÇMEZ — ikisi de açık yazılıyor:
  ÖLÇER    bir künyenin kronolojisinde o CİNSTEN madde VAR MI
  ÖLÇMEZ   maddenin DOĞRU olup olmadığını · YETERLİ sayıda olup olmadığını ·
           kaynağının geçerliliğini
  ⇒ "kapsama %100" demek "kronoloji tam" demek DEĞİLDİR; yalnız
    "her cinsten en az bir madde var" demektir. Bunu karıştırmak,
    `§11`in "ölçüm doğru, çıkarım yanlış" ailesine düşmektir.

🔴 SÖZLÜK KAYMASI — ölçüldü ve BURAYA yazıldı, gizlenmedi:
     toprak-kayip 105 · kayip 7 · toprak 2   ⇒ ÜÇÜ DE aynı cins
     `ic-savas` diye bir `tur` YOK — en yakını `bolunme` (70)
   Bu yüzden eşleme TEK BİR ADA değil, EŞANLAM KÜMESİNE bakar. Tek ada
   bakan bir denetim 9 maddeyi sessizce kaçırırdı.
"""
import os, sys, collections

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(KOK, "arac"))
os.chdir(KOK)
import girdi

# Emre'nin dokuz cinsi → `tur` sözlüğündeki karşılıkları (EŞANLAMLARIYLA)
OLCUT = [
    ("kurulus",  {"kurulus"},                                "kuruluş"),
    ("son",      {"son"},                                    "yıkılış / son"),
    ("toprak",   {"toprak-kazanc", "toprak-kayip", "toprak",
                  "kayip", "isgal"},                          "toprak kayıp/kazanç"),
    ("savas",    {"savas"},                                   "savaşlar"),
    ("antlasma", {"antlasma"},                                "anlaşmalar"),
    ("ittifak",  {"ittifak"},                                 "ittifaklar"),
    ("isyan",    {"isyan"},                                   "isyanlar"),
    ("ic-savas", {"ic-savas", "bolunme"},                     "iç savaş / bölünme"),
    ("hukumdar", {"hukumdar"},                                "hükümdar değişimi"),
]
ANAHTARLAR = [a for a, _, _ in OLCUT]


def turleri(k):
    return {m.get("tur") for m in (k.get("kronoloji") or []) if isinstance(m, dict)}


PENCERE_BAS, PENCERE_SON = 1281, 1923


def _yil(s):
    try:
        return int(str(s).split("-")[0])
    except Exception:
        return None


def muaf(k, anahtar):
    """PENCERE MUAFİYETİ — o cins bu künye için ARANMAZ.

    🔴 Bizans'ın `kurulus` maddesi YOK ve OLMAMASI DOĞRU: 330'da kuruldu,
    atlas penceresi 1281'de başlıyor. Muafiyet olmasa bu araç bir oturuma
    *"Bizans'ın kuruluşunu yaz"* dedirtirdi — ve o YANLIŞ bir iş olurdu.
    Ölçüldü (4 Eylül 2026): kuruluş yok 117 → 20'si muaf ⇒ gerçek 97 ·
                            son yok 174 → 1'i muaf ⇒ gerçek 173.
    ⚠️ Muafiyet yalnız BU İKİ cins içindir: bir devlet pencere boyunca
    savaşmamış ya da antlaşma imzalamamış olabilir, ama bu ölçülemez —
    o yüzden ötekilerde muafiyet YOK, "yok" olarak sayılır.
    """
    if anahtar == "kurulus":
        # 🔴 4 Eylül: `<` DEĞİL `<=`. Künyelerin f'si 1281'den
        #    ÖNCE değil TAM 1281-01-01 — 137/591 künye. Kural
        #    harfiyen onları muaf tutmuyordu, gerekçesi ise
        #    birebir geçerliydi. (KRONOLOJİ AFRİKA GÖVDE ölçtü.)
        f = _yil(k.get("f"))
        return f is not None and f <= PENCERE_BAS
    if anahtar == "son":
        t = _yil(k.get("t"))
        return t is not None and t > PENCERE_SON
    return False




# ═══════════════════════════════════════════════════════════════════════
# PENCERE_SINIRI — "kapsandı" ile "araştırıldı" AYRI ŞEYLER
# ═══════════════════════════════════════════════════════════════════════
# 🔴 KRONOLOJİ AFRİKA GÖVDE'nin ölçümü (4 Eylül 2026):
#     f == 1281-01-01 olan 137 künyeden 82'sinde `kurulus` maddesinin GÜNÜ
#     de TAM 1281-01-01, ve metinleri kendilerini ele veriyor —
#     "Gurma krallığı TEŞEKKÜL ETTİ" · "Zerma devletçikleri TEŞEKKÜL ETTİ".
#     Olay yok, fail yok, gün yok.
# ⇒ "bati-afrika kuruluş %96" rakamının üçte biri GERÇEK BİR KURULUŞ değil,
#   BİR PENCERE İŞARETİ ölçüyor.
# ⚠️ Kusur VERİDE DEĞİL — `1281-01-01` dürüst bir yer tutucu. Kusur BURADA,
#   ÖLÇERDE: kapsama sayılıyor ve "araştırılmış" sanılıyor.
def pencere_sinirinda(k, anahtar):
    """`kurulus` maddesi ATLASIN PENCERE GÜNÜNDE mi duruyor?"""
    if anahtar != "kurulus":
        return False
    for m in (k.get("kronoloji") or []):
        if _cins(m.get("tur")) == "kurulus" and (m.get("t") or "") == PENCERE_BAS:
            return True
    return False
def karne(k):
    t = turleri(k)
    return {a: (bool(t & kume) or muaf(k, a)) for a, kume, _ in OLCUT}


def main(argv):
    K = girdi.oku_devletler()
    ix = {k.get("id"): k for k in K}

    # ── tek künye ──────────────────────────────────────────────────────
    if "--kunye" in argv:
        kid = argv[argv.index("--kunye") + 1]
        k = ix.get(kid)
        if not k:
            print("🔴 künye yok: %s" % kid); return 1
        kr = k.get("kronoloji") or []
        print("%s — %s · %d madde" % (kid, k.get("ad"), len(kr)))
        kn = karne(k)
        for a, _, ad in OLCUT:
            print("  %s %s" % ("🟢" if kn[a] else "🔴", ad))
        eksik = [ad for a, _, ad in OLCUT if not kn[a]]
        print("\neksik cins: %d — %s" % (len(eksik), ", ".join(eksik) or "yok"))
        return 0

    # ── belirli bir cinsi taşımayanlar ─────────────────────────────────
    if "--eksik" in argv:
        c = argv[argv.index("--eksik") + 1]
        if c not in ANAHTARLAR:
            print("🔴 bilinmeyen cins: %s\n   geçerli: %s" % (c, ", ".join(ANAHTARLAR)))
            return 1
        yok = [k for k in K if not karne(k)[c]]
        print("`%s` taşımayan künye: %d / %d" % (c, len(yok), len(K)))
        for k in yok[:200]:
            print("  %-30s %-22s %d madde"
                  % (k.get("id"), (k.get("bolge") or "-")[:22],
                     len(k.get("kronoloji") or [])))
        if len(yok) > 200:
            print("  … +%d" % (len(yok) - 200))
        return 0

    # ── bölge bölge ────────────────────────────────────────────────────
    if "--bolge" in argv:
        bol = collections.defaultdict(list)
        for k in K:
            bol[k.get("bolge") or "(bölgesiz)"].append(k)
        print("%-26s %5s %s" % ("bölge", "künye", "  ".join(a[:6] for a in ANAHTARLAR)))
        for b in sorted(bol, key=lambda x: -len(bol[x])):
            grup = bol[b]
            hucre = []
            for a in ANAHTARLAR:
                v = sum(1 for k in grup if karne(k)[a])
                hucre.append("%5.0f%%" % (100.0 * v / len(grup)))
            print("%-26s %5d %s" % (b[:26], len(grup), " ".join(hucre)))
        return 0

    # ── genel tablo ────────────────────────────────────────────────────
    hic = sum(1 for k in K if not (k.get("kronoloji") or []))
    top = sum(len(k.get("kronoloji") or []) for k in K)
    print("künye %d · madde %d · künye başına %.1f · kronolojisi HİÇ olmayan %d"
          % (len(K), top, top / max(len(K), 1), hic))
    print("\nEMRE ÖLÇÜTÜ — kaç künye o cinsten EN AZ BİR madde taşıyor")
    print("  %-24s %6s %6s %7s" % ("cins", "VAR", "YOK", "%"))
    for a, _, ad in OLCUT:
        v = sum(1 for k in K if karne(k)[a])
        print("  %-24s %6d %6d %6.0f%%" % (ad, v, len(K) - v, 100.0 * v / len(K)))
    tam = sum(1 for k in K if all(karne(k).values()))
    asg = sum(1 for k in K if karne(k)["kurulus"] and karne(k)["son"])
    print("\n  DOKUZ CİNSİN DOKUZUNU taşıyan : %d / %d" % (tam, len(K)))
    print("  ASGARİ (kuruluş + son)        : %d / %d" % (asg, len(K)))
    print("\n⚠️ 'kapsama' MADDENİN DOĞRULUĞUNU ÖLÇMEZ — yalnız o cinsten")
    print("   en az bir madde bulunduğunu. İkisini karıştırma.")
    return 0


if __name__ == "__main__":
    sys.exit(main(sys.argv))
