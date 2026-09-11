# -*- coding: utf-8 -*-
"""
ARAC-IC-TUTARSIZLIK-0911.py
Gorev: oturumlar/ (IC TUTARSIZLIK sevki, 11 Eylul 2026)
Soru : kronoloji maddelerinde `t:` alani ile maddenin KENDI metni
       (`b:`/`gun:`) CELISIYOR MU — DEGER uyusmazligi (hassasiyet DEGIL).

Emsal vaka (DALGA 2 TEYIT buldu, denetim/HAZIRLIK-DALGA2-0911.json'da
bekleyen aday, CANLI VERIDE DEGIL): `afgan-durrani` icin onerilen madde
"Zaman Sah 20 Mayis 1793'te sah oldu" diyor ama t: alanina 18 Mayis
(Timur Sah'in OLUM gunu) yazilmis - YANLIS ALAN SECILMIS.

YONTEM: her maddenin b:/gun: metninde gecen "GUN AY(YIL)" bicimli Turkce
tarih ifadelerini regex ile cikar, t:'nin gun/ay'iyla karsilastir.

EVREN — UC AYRI KAYNAK, AYRI RAPORLANIR (D124):
  ① data/olaylar*.js                    CEKIRDEK
  ② data/kronoloji*.js                  KUYRUK
  ③ devletler.js'in HER kunyenin KENDI kronoloji dizisi  UCUNCU KAYNAK
    (emsal vaka TAM BURADA yasiyor — girdi.py bunu OKUMAZ, girdi.py
    yalniz yerlesim dosyalarini okur; bu satir tahtaya bildirildi)

UC KOVA (D024: farkli careler ayri raporlanir, tek satirda karistirma):
  🔴 GERCEK CELISKI       — t: gunu "01" DEGIL (yani ozel bir gun iddia
                            ediyor) VE metin FARKLI bir gun/ay soyluyor
  🟡 TAKVIM SUPHESI       — ayni celiski ama metin hicri ay adi/parantez
                            ici ikinci tarih icerdigi icin hicri/miladi
                            KARISIKLIGI olabilir (D110)
  ⚪ AYRISTIRAMADIM        — metin BIRDEN FAZLA farkli gun/ay soyluyor
                            (hangisi t:'ye karsilik geliyor belirsiz)
  (t: gunu "01" olan uyumsuzluklar AYRI, YUMUSAK bir kovaya dusuyor -
   sert celiski SAYILMAZ, cunku 01 cogu zaman SS4'un "gun bilinmiyor"
   yazimidir, D145 tuzagi.)

D010: bilinen pozitif (afgan-durrani) CANLI VERIDE yok; ikincil olarak
HAZIRLIK-DALGA2-0911.json uzerinde AYRICA test edilir.
"""
import json
import os
import re
import subprocess
import sys
import tempfile

REPO = r"C:\Users\emrem\OneDrive\Desktop\TARİH COĞRAFYA SİTESİ"
DATA = os.path.join(REPO, "data")
TMP = tempfile.gettempdir()
EXTRACT_JSON = os.path.join(TMP, "ic_tutarsizlik_extract.json")

AYLAR = {
    "ocak": 1, "şubat": 2, "subat": 2, "mart": 3, "nisan": 4,
    "mayıs": 5, "mayis": 5, "haziran": 6, "temmuz": 7,
    "ağustos": 8, "agustos": 8, "eylül": 9, "eylul": 9,
    "ekim": 10, "kasım": 11, "kasim": 11, "aralık": 12, "aralik": 12,
}
# Regex: hem "Mayıs" hem "mayıs" hem ASCII varyantlar - literal alternatif
# listesi kullanildi (D064: ".lower()" Turkce I/i tuzagina DUSMEMEK icin
# KUCUK/BUYUK harfli TUM formlar ayri ayri regex'e yazildi, IGNORECASE
# kullanilmadi).
_AY_ALT = "|".join(sorted(set(
    [a.capitalize() for a in AYLAR] + list(AYLAR.keys()) +
    ["Şubat", "şubat", "Ağustos", "ağustos", "Eylül", "eylül",
     "Mayıs", "mayıs", "Kasım", "kasım", "Aralık", "aralık"]
), key=len, reverse=True))
RX_TARIH = re.compile(r"(\d{1,2})\s+(" + _AY_ALT + r")(?:'\w+)?\s*(\d{4})?")

HICRI_AYLAR = ["muharrem", "safer", "rebiülevvel", "rebiulevvel",
               "rebiülahir", "rebiulahir", "cemaziyelevvel",
               "cemaziyelahir", "recep", "şaban", "saban", "ramazan",
               "şevval", "sevval", "zilkade", "zilhicce"]
TAKVIM_IPUCU = HICRI_AYLAR + [
    "jülyen", "julyen", "rumi takvim", "rumî takvim",
    "takvim dönüşümü", "takvim donusumu", "eski takvim", "yeni takvim",
    "eski üslup", "eski uslup",
]
RX_HICRI = re.compile("|".join(re.escape(x) for x in TAKVIM_IPUCU), re.IGNORECASE)

# `gun:` icinde acikca beyan edilmis GUN ARALIGI — "17-20 Ekim 1448",
# "6–7 Temmuz 1770" gibi. Boyle bir aralik VARSA ve t:'nin gunu bu
# araligin ICINDE ise (yil/ay ayni oldugu surece) CELISKI DEGIL —
# cok-gunlu bir olayin FARKLI ucundan bahsediliyordur, bu YAZILIDIR,
# GIZLI DEGILDIR.
RX_ARALIK = re.compile(
    r"(\d{1,2})\s*[–-]\s*(\d{1,2})\s+(" + _AY_ALT + r")\s*(\d{4})?"
)


def araliktaki_mi(gun_metni, ay_no_hedef, gun_hedef, yil_hedef):
    if not gun_metni:
        return False
    for g0, g1, ay_ad, yil in RX_ARALIK.findall(gun_metni):
        ay = ay_no(ay_ad)
        if ay != ay_no_hedef:
            continue
        if yil and yil_hedef and int(yil) != yil_hedef:
            continue
        if int(g0) <= gun_hedef <= int(g1):
            return True
    return False


def ay_no(ad):
    return AYLAR.get(ad.lower().replace("ı", "i").replace("ş", "s")
                      .replace("ğ", "g").replace("ü", "u").replace("ö", "o")
                      .replace("ç", "c"), None)
    # NOT: bu .lower() YALNIZ AY ADLARI icin - sabit, bilinen kucuk bir
    # kume (12 ay) oldugu icin D064 riski yok (riziko İ/ı harfi tasiyan
    # AY ADLARINDA -  "Şubat/şubat, "Ağustos/ağustos" gibi - zaten ELLE
    # her iki bicimde de AYLAR sozlugune yazildi, asagida ikinci bir
    # guvenlik agi olarak harf-degistirme de var).


def extract_all():
    """Node ile uc kaynagi da JSON'a dokuyor (D023: kendi JS
    ayristiricim yazilmadi, node-eval yontemi kullanildi)."""
    script = r"""
const fs = require('fs');
const path = require('path');
const KOK = process.argv[1];
const OUT = process.argv[2];

function ekle(liste, kaynak, dosya, kunyeId, arr) {
  if (!Array.isArray(arr)) return;
  for (const r of arr) {
    if (r && r.t) liste.push({kaynak, dosya, kunye: kunyeId || null,
      t: r.t, b: r.b || "", gun: r.gun || "", tur: r.tur || ""});
  }
}

const sonuc = [];

// ① CEKIRDEK: data/olaylar*.js
global.window = {};
const cekirdekDosyalar = fs.readdirSync(path.join(KOK,'data'))
  .filter(f => /^olaylar.*\.js$/.test(f));
for (const f of cekirdekDosyalar) {
  eval(fs.readFileSync(path.join(KOK,'data',f), 'utf8'));
}
for (const k of Object.keys(global.window)) {
  if (Array.isArray(global.window[k])) ekle(sonuc, 'CEKIRDEK', 'olaylar*.js', null, global.window[k]);
}

// ② KUYRUK: data/kronoloji*.js
global.window = {};
const kuyrukDosyalar = fs.readdirSync(path.join(KOK,'data'))
  .filter(f => /^kronoloji.*\.js$/.test(f));
for (const f of kuyrukDosyalar) {
  eval(fs.readFileSync(path.join(KOK,'data',f), 'utf8'));
}
for (const k of Object.keys(global.window)) {
  if (Array.isArray(global.window[k])) ekle(sonuc, 'KUYRUK', 'kronoloji*.js', null, global.window[k]);
}

// ③ UCUNCU KAYNAK: devletler.js'in HER kunyenin KENDI kronoloji dizisi
global.window = {};
eval(fs.readFileSync(path.join(KOK,'data','devletler.js'), 'utf8'));
const D = global.window.DEVLETLER || [];
for (const d of D) {
  ekle(sonuc, 'KUNYE_KRONOLOJI', 'devletler.js', d.id, d.kronoloji);
}

fs.writeFileSync(OUT, JSON.stringify(sonuc));
console.log(JSON.stringify({
  cekirdek_dosya: cekirdekDosyalar.length,
  kuyruk_dosya: kuyrukDosyalar.length,
  kunye_sayisi: D.length,
  toplam_madde: sonuc.length,
}));
"""
    r = subprocess.run(["node", "-e", script, REPO, EXTRACT_JSON],
                        capture_output=True, text=True, cwd=REPO)
    if r.returncode != 0:
        print("HATA: node basarisiz:", r.stderr, file=sys.stderr)
        sys.exit(1)
    print("node ozeti:", r.stdout.strip())
    with open(EXTRACT_JSON, "r", encoding="utf-8") as f:
        return json.load(f)


def parse_t(t):
    m = re.match(r"^(\d{1,4})-(\d{2})-(\d{2})$", t or "")
    if not m:
        return None
    y, mo, d = m.groups()
    return int(y), int(mo), int(d)


def metinden_tarihler(*metinler):
    """b: ve gun: metinlerinden (gun, ay_no, yil|None) uclulerini cikarir."""
    sonuc = []
    for metin in metinler:
        if not metin:
            continue
        for mgun, may, myil in RX_TARIH.findall(metin):
            ay = ay_no(may)
            if ay is None:
                continue
            gun = int(mgun)
            if not (1 <= gun <= 31):
                continue
            yil = int(myil) if myil else None
            sonuc.append((gun, ay, yil))
    # tekillestir
    return sorted(set(sonuc), key=lambda x: (x[0], x[1], -1 if x[2] is None else x[2]))


def analiz(kayitlar):
    sonuclar_by_kaynak = {"CEKIRDEK": [], "KUYRUK": [], "KUNYE_KRONOLOJI": []}
    metin_tasiyan_sayac = {"CEKIRDEK": 0, "KUYRUK": 0, "KUNYE_KRONOLOJI": 0}
    for kayit in kayitlar:
        kaynak = kayit["kaynak"]
        tp = parse_t(kayit["t"])
        if not tp:
            continue
        ty, tm, td = tp
        tarihler = metinden_tarihler(kayit["b"], kayit["gun"])
        if not tarihler:
            continue
        metin_tasiyan_sayac[kaynak] += 1
        # kendi (gun,ay) ile TAM eslesen bir mention var mi?
        tam_eslesen = any(g == td and a == tm for (g, a, y) in tarihler)
        if tam_eslesen:
            continue  # celiski yok, atla
        # `gun:` acikca bir GUN ARALIGI veriyor ve t: o araligin icindeyse
        # celiski degil - cok-gunlu olayin farkli ucu, YAZILI ve GIZLI DEGIL.
        if araliktaki_mi(kayit.get("gun", ""), tm, td, ty):
            continue
        metin_birlesik = (kayit["b"] or "") + " " + (kayit.get("gun", "") or "")
        if len(tarihler) > 1:
            kova = "AYRISTIRAMADIM"
        elif td == 1:
            kova = "YUMUSAK_01"
        elif RX_HICRI.search(metin_birlesik):
            kova = "TAKVIM_SUPHESI"
        else:
            kova = "GERCEK_CELISKI"
        sonuclar_by_kaynak[kaynak].append({
            **kayit, "t_ayrisan": [ty, tm, td],
            "metin_tarihleri": tarihler, "kova": kova,
        })
    return sonuclar_by_kaynak, metin_tasiyan_sayac


def main():
    sys.stdout.reconfigure(encoding="utf-8", errors="replace")
    kayitlar = extract_all()
    sonuclar, metin_tasiyan = analiz(kayitlar)

    print(f"\nTOPLAM MADDE (uc kaynak birlikte): {len(kayitlar)}")
    for kaynak in ("CEKIRDEK", "KUYRUK", "KUNYE_KRONOLOJI"):
        adet = sum(1 for k in kayitlar if k["kaynak"] == kaynak)
        print(f"  {kaynak:18s} evren: {adet:5d}  metin-tarih-tasiyan: {metin_tasiyan[kaynak]:5d}")

    for kaynak in ("CEKIRDEK", "KUYRUK", "KUNYE_KRONOLOJI"):
        print(f"\n=== {kaynak} ===")
        liste = sonuclar[kaynak]
        for kova_ad in ("GERCEK_CELISKI", "TAKVIM_SUPHESI", "AYRISTIRAMADIM", "YUMUSAK_01"):
            grup = [x for x in liste if x["kova"] == kova_ad]
            print(f"  {kova_ad:18s} {len(grup)}")
            for x in grup[:15]:
                kim = x.get("kunye") or x.get("dosya")
                print(f"    [{kim}] t:{x['t']}  metin-tarih:{x['metin_tarihleri']}  b:{x['b'][:70]!r}")
            if len(grup) > 15:
                print(f"    … {len(grup)-15} tane daha")

    out_path = os.path.join(REPO, "denetim", "OLCUM-IC-TUTARSIZLIK-0911.json")
    with open(out_path, "w", encoding="utf-8") as f:
        json.dump(sonuclar, f, ensure_ascii=False, indent=1)
    print(f"\nTam cikti: {out_path}")


if __name__ == "__main__":
    main()
