# -*- coding: utf-8 -*-
"""
ARAC-DIZIN-TAMLIK-0911.py
Gorev: oturumlar/DIZIN-TAMLIK-0911.md
Soru : 1281-1923 arasi, data/devletler.js dizininde HIC OLMAYAN devlet var mi?

YONTEM (koordinatorun onerdigi (2) — ARDIL/SELEF bosluk taramasi, D023
geregi kendi JS ayristiricimi yazmiyorum; devletler.js'i node ile eval
edip JSON'a dokup burada okuyorum):

  METOD A — BOLGE TAM-BOSLUGU (birincil, mekanik, saglam):
    Her `bolge` icin, o bolgedeki kunyelerin [f,t] araliklarini
    1281-01-01..1923-10-29 penceresine kirp, birlestir (union), ve
    pencerede HICBIR kunyenin kapsamadigi zaman dilimlerini bul.
    Bu, Degismez 1'in (yerlesim sahipsizligi) dizin katmanindaki
    ANALOGU. Yakaladigi sey: butun bir COGRAFI MAKRO-BOLGENIN belirli
    bir donemde dizinde HIC temsilcisi olmamasi.
    BILINEN KOR NOKTASI (bu aracin YAPMADIGI sey, saklanmiyor):
    bir bolge icinde TEK bir kunyenin (ornek: Meysur) ardili
    kayitli degilse ama AYNI bolgede BASKA kunyeler o donemi zaten
    kapsiyorsa, METOD A bunu YAKALAMAZ — cunku bolge butunuyle bos
    degildir. Bu sinif (zincire-ozel ardil eksigi) CLAUDE.md SS3.5.0'da
    ZATEN ayri baska bir yontemle (elle, kaynak okuyarak) bulunmus.

  METOD B — TEKIL KUNYE ARDIL KONTROLU (ikincil, GURULTULU, aday uretir):
    t < 1923-10-29 olan (yani site ufkuna kadar YASAMAYAN, "bitmis")
    her kunye icin: AYNI bolgede, bu kunyenin t'sine +/- TOLERANS_GUN
    icinde f'si olan baska bir kunye var mi? Yoksa aday olarak isaretle.
    UYARI: bu metodun COK sayida YANLIS POZITIF uretmesi BEKLENIR —
    cunku bir kunye bitince yerini FARKLI BIR BOLGEYE etiketli bir
    imparatorluk (ör. Osmanli=anadolu ama Balkanlar'i yonetiyor)
    dogrudan alabilir; bu GERCEK bir eksiklik degildir. METOD B'nin
    ciktisi SUZULMEDEN rapor edilmez.

  BILINEN ONCUL POZITIFLER (D010 sinama): CLAUDE.md SS3.5.0'da adi
  gecen ama devletler.js'te KUNYESI HENUZ YOK 5 kayit icin ayrica
  DOGRUDAN id arama yapilir (meysur-racaligi, gvalyar, indor, kolhapur,
  pejeng/bali-kralliklari-pejeng) — bunlarin METOD A/B tarafindan
  yakalanip yakalanmadigi da ayrica raporlanir (aracin KOR NOKTASINI
  olcmek icin).

Cikti: JSON (ham veri, ayni dizine) + ozet stdout.
"""
import json
import os
import subprocess
import sys
import tempfile
from datetime import date

REPO = r"C:\Users\emrem\OneDrive\Desktop\TARİH COĞRAFYA SİTESİ"
DEVLETLER_JS = os.path.join(REPO, "data", "devletler.js")
TMP = tempfile.gettempdir()
EXTRACT_JSON = os.path.join(TMP, "devletler_extract.json")

PENCERE_F = "1281-01-01"
PENCERE_T = "1923-10-29"

# METOD B toleransi: bir kunye bitip TOLERANS_GUN icinde ayni bolgede
# baska bir kunye baslarsa "ardili var" sayilir (D066: 3 km gibi bu da
# bir SUPHE ESIGI, kesin sinir degil).
TOLERANS_GUN = 365 * 3  # 3 yil

# METOD A gurultu esigi: bu kadardan KISA bolge-bosluklari raporlanmaz
# (tarih yuvarlamalarindan / kayit gecikmelerinden dogan gurultu).
MIN_BOSLUK_GUN = 200

BILINEN_ONCUL_ADAYLAR = [
    "meysur-racaligi", "gvalyar", "indor", "kolhapur",
    "pejeng", "bali-kralliklari-pejeng",
]


def gun_no(tarih_str: str) -> int:
    """'YYYY-MM-DD' -> proleptic Gregorian ordinal gun sayisi.
    STRING KARSILASTIRMA YAPILMAZ (CLAUDE.md'de 3 haneli yil tuzagi
    kayitli: '800-01-01' <= '1281-01-01' STRING olarak False donuyor)."""
    y, m, d = tarih_str.split("-")
    return date(int(y), int(m), int(d)).toordinal()


PENCERE_F_G = gun_no(PENCERE_F)
PENCERE_T_G = gun_no(PENCERE_T)


def extract_devletler():
    """node ile devletler.js'i eval edip JSON'a dokuyor (D023: kendi
    JS ayristiricimi YAZMIYORUM, var olan node-eval yontemini
    kullaniyorum — bu yontem CLAUDE.md'nin kendi denetim komutlarinda
    zaten kullaniliyor)."""
    script = (
        "global.window={};"
        "eval(require('fs').readFileSync(process.argv[1],'utf8'));"
        "const D=window.DEVLETLER;"
        "const out=D.map(d=>({id:d.id,ad:d.ad,tur:d.tur,bolge:d.bolge,f:d.f,t:d.t}));"
        "require('fs').writeFileSync(process.argv[2], JSON.stringify(out));"
        "console.log(out.length);"
    )
    r = subprocess.run(
        ["node", "-e", script, DEVLETLER_JS, EXTRACT_JSON],
        capture_output=True, text=True, cwd=REPO,
    )
    if r.returncode != 0:
        print("HATA: node cikisi basarisiz:", r.stderr, file=sys.stderr)
        sys.exit(1)
    with open(EXTRACT_JSON, "r", encoding="utf-8") as f:
        data = json.load(f)
    return data


def clip(fg, tg, pf, pt):
    """[fg,tg) araligini [pf,pt] penceresine kirpar. Kesismiyorsa None."""
    a, b = max(fg, pf), min(tg, pt)
    if a >= b:
        return None
    return (a, b)


def merge_intervals(ivs):
    ivs = sorted(ivs)
    merged = []
    for a, b in ivs:
        if merged and a <= merged[-1][1]:
            merged[-1] = (merged[-1][0], max(merged[-1][1], b))
        else:
            merged.append((a, b))
    return merged


def gun_to_tarih(g):
    return date.fromordinal(g).isoformat()


def metod_a_bolge_bosluklari(kayitlar):
    by_bolge = {}
    for k in kayitlar:
        by_bolge.setdefault(k["bolge"], []).append(k)

    sonuc = []
    for bolge, kunyeler in sorted(by_bolge.items()):
        ivs = []
        for k in kunyeler:
            fg, tg = gun_no(k["f"]), gun_no(k["t"])
            c = clip(fg, tg, PENCERE_F_G, PENCERE_T_G)
            if c:
                ivs.append(c)
        merged = merge_intervals(ivs)

        # pencere basindan ilk araliga, araliklar arasi, son araliktan
        # pencere sonuna kadar olan BOSLUKLARI topla
        cursor = PENCERE_F_G
        bosluklar = []
        for a, b in merged:
            if a - cursor >= MIN_BOSLUK_GUN:
                bosluklar.append((cursor, a))
            cursor = max(cursor, b)
        if PENCERE_T_G - cursor >= MIN_BOSLUK_GUN:
            bosluklar.append((cursor, PENCERE_T_G))

        for (g0, g1) in bosluklar:
            sonuc.append({
                "bolge": bolge,
                "bosluk_baslangic": gun_to_tarih(g0),
                "bosluk_bitis": gun_to_tarih(g1),
                "gun": g1 - g0,
                "yil": round((g1 - g0) / 365.25, 1),
                "bolgedeki_kunye_sayisi": len(kunyeler),
            })
    sonuc.sort(key=lambda x: -x["gun"])
    return sonuc


def metod_b_tekil_ardil(kayitlar):
    by_bolge = {}
    for k in kayitlar:
        by_bolge.setdefault(k["bolge"], []).append(k)

    adaylar = []
    for bolge, kunyeler in by_bolge.items():
        starts = sorted(gun_no(k["f"]) for k in kunyeler)
        for k in kunyeler:
            tg = gun_no(k["t"])
            if tg >= PENCERE_T_G:
                continue  # site ufkuna kadar yasiyor, "bitmis" degil
            if tg < PENCERE_F_G:
                continue  # pencerenin disinda bitmis (ilgisiz)
            # ayni bolgede tg'ye +/- TOLERANS icinde baslayan var mi?
            var_mi = any(abs(s - tg) <= TOLERANS_GUN for s in starts if s != gun_no(k["f"]) or True)
            # not: kendi f'sini de sayabilir teorik olarak ama f<=t old. icin
            # kendi kaydi kendi t'sine yakin olamaz (f<t), yanlis pozitif riski yok
            if not var_mi:
                adaylar.append({
                    "id": k["id"], "ad": k["ad"], "bolge": bolge,
                    "kunye_t": k["t"],
                })
    return adaylar


def bilinen_oncul_kontrolu(kayitlar):
    ids = {k["id"] for k in kayitlar}
    return {aday: (aday in ids) for aday in BILINEN_ONCUL_ADAYLAR}


def main():
    kayitlar = extract_devletler()
    print(f"TARANAN KUNYE (evren): {len(kayitlar)}")

    oncul = bilinen_oncul_kontrolu(kayitlar)
    print("\n--- BILINEN ONCUL ADAYLAR (CLAUDE.md SS3.5.0'dan) ---")
    for aday, var in oncul.items():
        print(f"  {aday:30s} {'VAR (zaten eklenmis)' if var else 'YOK (dogrulandi: hala eksik)'}")

    bosluklar = metod_a_bolge_bosluklari(kayitlar)
    print(f"\n--- METOD A: BOLGE TAM-BOSLUGU ({MIN_BOSLUK_GUN} gunden uzun) ---")
    print(f"  toplam bolge-boslugu: {len(bosluklar)}")
    for b in bosluklar[:30]:
        print(f"  {b['bolge']:20s} {b['bosluk_baslangic']} -> {b['bosluk_bitis']}  "
              f"({b['yil']} yil, bolgede {b['bolgedeki_kunye_sayisi']} kunye var)")
    if len(bosluklar) > 30:
        print(f"  ... ve {len(bosluklar)-30} tane daha (JSON'da tam liste)")

    adaylar_b = metod_b_tekil_ardil(kayitlar)
    print(f"\n--- METOD B: TEKIL KUNYE ARDIL EKSIGI (aday, SUZULMEMIS, {TOLERANS_GUN//365} yil tolerans) ---")
    print(f"  toplam aday: {len(adaylar_b)}  (BEKLENEN: cok, cogunun yanlis pozitif olmasi bekleniyor)")

    out = {
        "evren": len(kayitlar),
        "bilinen_oncul_kontrolu": oncul,
        "metod_a_bolge_bosluklari": bosluklar,
        "metod_b_tekil_ardil_adaylari": adaylar_b,
        "parametreler": {
            "pencere_f": PENCERE_F, "pencere_t": PENCERE_T,
            "tolerans_gun_metod_b": TOLERANS_GUN,
            "min_bosluk_gun_metod_a": MIN_BOSLUK_GUN,
        },
    }
    out_path = os.path.join(REPO, "denetim", "OLCUM-DIZIN-TAMLIK-0911.json")
    with open(out_path, "w", encoding="utf-8") as f:
        json.dump(out, f, ensure_ascii=False, indent=1)
    print(f"\nTam cikti: {out_path}")


if __name__ == "__main__":
    main()
