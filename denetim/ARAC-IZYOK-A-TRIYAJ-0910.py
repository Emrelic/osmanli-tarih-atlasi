# -*- coding: utf-8 -*-
"""IZ-YOK DENETIM A — YAMA TRIYAJI (SALT OKUR).

Soru: `data/` altinda duran ama `girdi.py`nin OKUMADIGI 81 yama dosyasi
ARSIV mi, BEKLEYEN mi, UNUTULMUS mu?

🔴 SEVKTEN SAPMA — VE GEREKCESI:
   Sevk "3-5 kayit ORNEKLE" diyor. Ornekleme YAPMADIM cunku GEREKMEDI:
   yama kaydi ile canli kaydi karsilastirmak O(1) bir islem ve toplam
   kayit 1357 (B ailesi). TAM tarama, ornekleme gore hem daha ucuz hem
   D021 riskini SIFIRLIYOR. Ornekleme, tam tarama pahali oldugunda
   dogru cozumdur; burada degildi.

ÜÇ AİLE (arac/_yama_aile.py'nin ayrimi devralindi, YENIDEN OLCULDU):
   A) KRONOLOJI  {dosya, t, b, yer_id|yer_kon|kapsam_genis} -> olaylar*.js
                 uygulayici: arac/yama_uygula.js (VAR)
   B) SAHIPLIK   {ad, d|s|v|isg|kd}                         -> yerlesimler*.js
                 uygulayici: BILINMIYOR — bu aletin asil konusu
   C) DIGER      ne o ne bu (etiket · koridor · hayalet · emilme …)

B AILESI ICIN OLCUT — "INDI" NE DEMEK:
   Yama kaydi bir FARK degil, KAYDIN YENI HALIDIR (yer_yama_p19.js'in
   kendi beyani). Dolayisiyla:
     INDI    yamanin BEYAN ETTIGI her alan (d/s/v/isg) canli kayitta
             BIREBIR ayni  (siralamadan bagimsiz, kume karsilastirmasi)
     KISMEN  bazi alanlar tutuyor, bazilari tutmuyor
     INMEDI  hicbiri tutmuyor
     AD-YOK  yamanin `ad:`i canli veride HIC yok
   ⚠️ Yamanin BEYAN ETMEDIGI alan karsilastirilmaz — kayit o alan
      hakkinda bir iddia tasimiyor (D152: miras alinmis oznitelik bir
      beyan degildir).

Kullanim:
    py denetim/ARAC-IZYOK-A-TRIYAJ-0910.py <yama81.json> [--dosya <ad>]
"""
import json, os, sys, io, importlib.util

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8", errors="replace")
KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(KOK, "arac"))

_spec = importlib.util.spec_from_file_location(
    "n", os.path.join(KOK, "denetim", "ARAC-NORMAL-0903.py"))
_m = importlib.util.module_from_spec(_spec)
_spec.loader.exec_module(_m)
norm = _m.norm

import girdi

Y = girdi.yukle(sessiz=True)
CANLI = {}
for y in Y:
    CANLI.setdefault(norm(y.get("ad", "")), y)

DONEM_ALAN = ("d", "s", "v", "isg")


def kume(donemler):
    """Bir donem dizisini KARSILASTIRILABILIR kumeye cevirir."""
    out = set()
    for p in (donemler or []):
        if not isinstance(p, dict):
            continue
        out.add((p.get("f"), p.get("t"), p.get("d")))
    return out


def topla(v, derinlik=0):
    """Bir window degiskeninden KAYIT nesnelerini toplar.

    🔴 ILK SURUM DICT-OF-LIST'I SESSIZCE KACIRIYORDU. `{ "X": [ {...} ] }`
       biciminde yazilmis bir yama (KADEME_YAMA gibi) hic sayilmiyordu:
       eleme GORUNUR degildi, izdusum SESSIZ kirpiyordu (D149). Kusuru
       `arac/_yama_aile.py` ile sayilarim ayrisinca yakaladim — yani
       IKINCI BIR ALET gosterdi (D172).
    """
    out = []
    if derinlik > 4:
        return out
    if isinstance(v, list):
        for x in v:
            if isinstance(x, dict) and not any(isinstance(z, (list, dict))
                                               and k2 not in ("d", "s", "v", "isg", "kd")
                                               for k2, z in x.items()):
                out.append(x)
            elif isinstance(x, dict):
                out.append(x)
            elif isinstance(x, list):
                out.extend(topla(x, derinlik + 1))
    elif isinstance(v, dict):
        # kayit MI, kayit KABI mi?  `ad` ya da `t` tasiyorsa kayittir.
        if "ad" in v or ("t" in v and "b" in v):
            out.append(v)
        else:
            for _, vv in v.items():
                out.extend(topla(vv, derinlik + 1))
    return out


# 🟢 IKINCI TUR — C KOVASI KUCULTULDU.
#    Ilk surumde C = 80 kayitti ve hepsi ⚪ OLCULEMEDI'ye dusuyordu. Ama
#    icine bakinca cogunun olcutu VARDI: `m:` (idari merkez) ve `bos:`
#    (bosluk cinsi) alanlarini yamalayan kayitlar, tipki donem yamalari
#    gibi canli veriyle KARSILASTIRILABILIR. ⚪ yazmak dogruydu, ama
#    "olculemedi" ile "OLCMEDIM" ayri seylerdir (D107) — olctum.
DUZ_ALAN = ("m", "k", "bos", "tur", "kur")


def aile(k):
    if not isinstance(k, dict):
        return "C"
    if "ad" in k and any(a in k for a in DONEM_ALAN + ("kd",)):
        return "B"
    if "ad" in k and any(a in k for a in DUZ_ALAN):
        return "B"          # duz alan yamasi da SAHIPLIK ailesindendir
    if "t" in k and "b" in k:
        return "A"
    return "C"


def b_sina(k):
    ad = k.get("ad")
    y = CANLI.get(norm(ad or ""))
    if y is None:
        return "AD-YOK", []
    tutan, tutmayan = [], []
    for a in DONEM_ALAN:
        if a not in k:
            continue                      # yama bu alan hakkinda IDDIA TASIMIYOR
        (tutan if kume(k[a]) == kume(y.get(a)) else tutmayan).append(a)
    for a in DUZ_ALAN:
        if a not in k:
            continue
        (tutan if k[a] == y.get(a) else tutmayan).append(a)
    if not tutan and not tutmayan:
        return "ALANSIZ", []
    if not tutmayan:
        return "INDI", tutan
    if not tutan:
        return "INMEDI", tutmayan
    return "KISMEN", tutmayan


def main():
    ham = json.load(open(sys.argv[1], encoding="utf-8"))
    tek = None
    if "--dosya" in sys.argv:
        tek = sys.argv[sys.argv.index("--dosya") + 1]

    print("# canli taban: %d nokta · %d girdi dosyasi"
          % (len(Y), len(girdi.GIRDI_DOSYALARI)))
    print("# %-38s %5s %5s %5s | %s" % ("dosya", "A", "B", "C", "B ailesi sonucu"))
    print("#" + "-" * 100)

    genel = {"INDI": 0, "KISMEN": 0, "INMEDI": 0, "AD-YOK": 0, "ALANSIZ": 0}
    satirlar = []
    for dosya, gov in sorted(ham.items()):
        if tek and dosya != tek:
            continue
        kayitlar = []
        for _, v in (gov.get("degiskenler") or {}).items():
            kayitlar.extend(topla(v))
        sayac = {"A": 0, "B": 0, "C": 0}
        b_sonuc = {"INDI": 0, "KISMEN": 0, "INMEDI": 0, "AD-YOK": 0, "ALANSIZ": 0}
        ayrinti = []
        for k in kayitlar:
            a = aile(k)
            sayac[a] += 1
            if a == "B":
                h, alanlar = b_sina(k)
                b_sonuc[h] += 1
                genel[h] += 1
                if h in ("INMEDI", "KISMEN", "AD-YOK") and len(ayrinti) < 6:
                    ayrinti.append("%s[%s:%s]" % (k.get("ad"), h, ",".join(alanlar)))
        ozet = " ".join("%s=%d" % (a, b) for a, b in b_sonuc.items() if b)
        satirlar.append((dosya, sayac, b_sonuc, ozet, ayrinti))
        print("  %-38s %5d %5d %5d | %s"
              % (dosya, sayac["A"], sayac["B"], sayac["C"], ozet))
        if tek and ayrinti:
            for x in ayrinti:
                print("        ", x)

    print()
    print("B AILESI GENEL:", genel)

    if "--json" in sys.argv:
        yol = sys.argv[sys.argv.index("--json") + 1]
        cik = {}
        for dosya, sayac, b_sonuc, _ozet, ayrinti in satirlar:
            cik[dosya] = {"sayac": sayac, "b": b_sonuc, "ornek": ayrinti}
        json.dump(cik, open(yol, "w", encoding="utf-8"),
                  ensure_ascii=False, indent=1)
        print("JSON yazildi:", yol)


main()
