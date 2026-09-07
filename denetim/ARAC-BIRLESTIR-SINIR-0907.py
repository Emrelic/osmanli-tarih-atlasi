# -*- coding: utf-8 -*-
"""
ARAC-BIRLESTIR-SINIR-0907 — kademe C (hukuki sinir) alti bolge kolunun
SEMA DOGRULAYICISI · CAKISMA OLCERI · BIRLESTIRICISI.

    BIRLESTIRICI-0907 · 7 Eylul 2026 · sevk: 1.MURAT HUDAVENDIGAR (M-3184 kolu)
    sema referansi: denetim/ONERI-KADEME-C-MODEL-0907.md §②c

NICIN VAR
---------
Alti kol `denetim/SINIR-HUKUKI-<BOLGE>-0907.json` yaziyor; kosu 8 bitince
`data/sinir_hukuki_<bolge>.js` olarak inecekler. Bu alet o inisi GUVENLI
kilar. Emsal: `KADEME_YAMA` — bes dosya tek `window` adi kullandi ve
birlikte okununca 537 kayit 137'ye dustu (%74 SESSIZ KAYIP). Zarar
gerceklesmedi cunku uygulayici dosyalari tek tek okuyordu — TASARIM DEGIL
SANSTI (CLAUDE.md §7).

KULLANIM
--------
    py denetim/ARAC-BIRLESTIR-SINIR-0907.py                 # dogrula, YAZMA
    py denetim/ARAC-BIRLESTIR-SINIR-0907.py --uret          # denetim/_birlestir/ altina .js
    py denetim/ARAC-BIRLESTIR-SINIR-0907.py --uret --hedef data   # BIRLESTIRME GUNU
    py denetim/ARAC-BIRLESTIR-SINIR-0907.py --dizin <yol>   # baska girdi dizini (sinav)
    py denetim/ARAC-BIRLESTIR-SINIR-0907.py --json <yol>    # makine okunur rapor

CIKIS KODU   0 = sema ihlali YOK        1 = en az bir 🔴

🔴 UC KURAL — ihlal edilmez
  ① Veri kendi dilinin yorumlayicisina verilir (json / node+vm), REGEX'e DEGIL.
     Bu proje o dersi YEDI kez odedi (CLAUDE.md §11).
  ② `0` bir olcum degildir: hicbir sayac "bakmadim" ile "yok"u ayni kovaya
     koymaz. Bulunamayan dosya/liste 🔴 diye BILDIRILIR, sessizce atlanmaz.
  ③ Bu alet HUKUM VERMEZ. Mukerrer kenarda hangi kolun kazanacagi
     1.MURAT'in karari — burada yalniz OLCULUR ve raporlanir.
"""
import argparse
import collections
import glob
import json
import os
import re
import subprocess
import sys
import tempfile

sys.stdout.reconfigure(encoding="utf-8")

# ─────────────────────────────────────────────────────────────────────────────
# SEMA — denetim/ONERI-KADEME-C-MODEL-0907.md §②c
# ─────────────────────────────────────────────────────────────────────────────

# 🔴 Bu on alan olcumdur, tahmin degil: 7 Eylul 2026'da bes kolun BESINDE de
#    KAYITLARIN TAMAMINDA bulundu (292/292). Cekirdek bu.
ZORUNLU_ALAN = ("a", "b", "f", "t", "t_cinsi", "hal", "dayanak", "dayanak_t",
                "kaynak", "gc")

# Model §②c'de gecen ama kollarin bir kisminda olmayan alanlar.
ONERILEN_ALAN = ("kimlik_1923", "kimlik_bugun", "madde", "kesinlik",
                 "ne_a", "ne_b", "ne_surum", "ne_degisti", "not", "parca", "tepe")

# 🔴 DORT deger — dorduncusu 7 Eylul 2026'da eklendi (M-3183).
HAL_DEGERLERI = ("hukuki", "bulunamadi", "olculemedi", "ayni-kimlik")

# Model §②c: "pencere" = atlasin ucu (bir iddia DEGIL) · "gercek" = cizgi o gun degisti
T_CINSI_DEGERLERI = ("pencere", "gercek")

BOLGELER = ("ANADOLU", "BALKAN", "ARAP", "KAFRIKA", "GAFRIKA", "ASYA")

# Kapsayici anahtar UC ADLA yaziliyor (olculdu, 7 Eylul): kenarlar/kenar/kayitlar.
# Burada TAHMIN EDILMEZ, dosyanin kendisinden bulunur — ve belirsizse 🔴.
KAPSAYICI_ADAY = ("kenarlar", "kenar", "kayitlar", "kayit", "kenar_kayitlari")

NE_GEOJSON = os.path.join("veri-kaynak", "ne_10m_admin_0_countries.geojson")

DOSYA_KALIBI = "SINIR-HUKUKI-{bolge}-0907.json"


# ─────────────────────────────────────────────────────────────────────────────
# NE SOZLUGU — "hangi alan NE adi tasiyor" TAHMIN EDILMEZ, OLCULUR
# ─────────────────────────────────────────────────────────────────────────────

def ne_sozlugu(yol=NE_GEOJSON):
    """NE'nin kendi ad kumesi. Bulunamazsa None doner — ve o 'bos kume' DEGIL."""
    if not os.path.exists(yol):
        return None
    ne = json.load(open(yol, encoding="utf-8"))
    ad = set()
    for ft in ne.get("features", []):
        p = ft.get("properties", {})
        for k in ("NAME", "NAME_LONG", "ADMIN", "SOVEREIGNT", "BRK_NAME", "NAME_EN"):
            v = p.get(k)
            if isinstance(v, str) and v:
                ad.add(v)
    return ad


def _skalerler(deger, alt_anahtar=None):
    """Bir alanin tasidigi metin degerlerini duzle — str | list | dict hepsi."""
    if isinstance(deger, str):
        return [deger]
    if isinstance(deger, list):
        return [x for x in deger if isinstance(x, str)]
    if isinstance(deger, dict):
        if alt_anahtar:
            return [deger[k] for k in alt_anahtar if isinstance(deger.get(k), str)]
        return [v for v in deger.values() if isinstance(v, str)]
    return []


def ne_cifti_alani(kayitlar, ne_ad):
    """
    HANGI ALAN NE ADI TASIYOR — olcerek sec.

    Donus: (aday_adi, oran) ya da (None, 0.0).
    Adaylar sirayla denenir; SECIM ESIGI %90 — bir alan degerlerinin %90'i
    NE sozlugunde ise o alan NE ekseni sayilir.

    🔴 Bu fonksiyon bu aletin ILK SURUMUNDE YANILDI ve olcerek duzeltildi:
       oncelik sirasi `kimlik_bugun` -> `a/b` idi; ARAP'ta `kimlik_bugun`
       NE adi DEGIL atlas slug'i + hata metni tasiyor ('iran',
       "(eslesmedi — NAME_TR 'Irak')") ve 26 kenar YANLIS ANAHTARLA
       indekslendi ⇒ bolgeler arasi mukerrerleri GORUNMEZ olurdu.
       Ders (CLAUDE.md §11): eslesme bulmak, dogru seyi bulmak degildir.
       Care: sirayi degistirmek DEGIL, kaynagin kendi sozlugune SORMAK.
    """
    adaylar = [
        ("ne_a/ne_b", lambda r: _skalerler(r.get("ne_a")) + _skalerler(r.get("ne_b"))),
        ("a/b", lambda r: _skalerler(r.get("a")) + _skalerler(r.get("b"))),
        ("kimlik_bugun{a,b}", lambda r: _skalerler(r.get("kimlik_bugun"), ("a", "b"))),
        ("kimlik_bugun[]", lambda r: _skalerler(r.get("kimlik_bugun"))),
        ("kimlik_bugun_a/_b", lambda r: _skalerler(r.get("kimlik_bugun_a")) + _skalerler(r.get("kimlik_bugun_b"))),
    ]
    en_iyi = (None, 0.0)
    for ad, cikar in adaylar:
        top = vur = 0
        for r in kayitlar:
            for v in cikar(r):
                top += 1
                if v in ne_ad:
                    vur += 1
        if top:
            oran = vur / top
            if oran > en_iyi[1]:
                en_iyi = (ad, oran)
            if oran >= 0.90:
                return ad, oran
    return en_iyi


def ne_cifti(kayit, alan_adi):
    """Secilen eksenden bu kaydin NE ad ciftini cikar."""
    if alan_adi == "ne_a/ne_b":
        v = (kayit.get("ne_a"), kayit.get("ne_b"))
    elif alan_adi == "a/b":
        v = (kayit.get("a"), kayit.get("b"))
    elif alan_adi == "kimlik_bugun{a,b}":
        d = kayit.get("kimlik_bugun")
        v = (d.get("a"), d.get("b")) if isinstance(d, dict) else (None, None)
    elif alan_adi == "kimlik_bugun[]":
        d = kayit.get("kimlik_bugun")
        v = (d[0], d[1]) if isinstance(d, list) and len(d) >= 2 else (None, None)
    elif alan_adi == "kimlik_bugun_a/_b":
        v = (kayit.get("kimlik_bugun_a"), kayit.get("kimlik_bugun_b"))
    else:
        return None
    if not (isinstance(v[0], str) and isinstance(v[1], str) and v[0] and v[1]):
        return None
    return tuple(sorted(v))          # ← ANAHTAR KARARLILIGI: her zaman alfabetik


# ─────────────────────────────────────────────────────────────────────────────
# ① OKUMA — ve sessiz sifira karsi korunma
# ─────────────────────────────────────────────────────────────────────────────

def kapsayici_bul(d, dosya, bulgular):
    """
    Kayit listesini TASIYAN anahtari bul.

    🔴 Ne tahmin edilir ne de ilk bulunan alinir: aday SIFIR ya da BIRDEN COK
       ise 🔴 basilir. Sebep — CLAUDE.md §11: bir glob/anahtar sessizce
       hicbir sey bulmazsa alet "0 kayit" basip gecer ve o sifir
       "kayit yok" ile "bakmadim" arasinda ayrim YAPMAZ.
    """
    liste_anahtarlari = [k for k, v in d.items()
                         if isinstance(v, list) and v and isinstance(v[0], dict)]
    if not liste_anahtarlari:
        bulgular.append(("KIRMIZI", dosya, "-",
                         "KAYIT LISTESI YOK — dosyada dict tasiyan hicbir liste bulunamadi. "
                         "Bu bir 'sifir kayit' DEGIL, bir OKUMA HATASIDIR."))
        return None, []
    if len(liste_anahtarlari) > 1:
        bulgular.append(("KIRMIZI", dosya, "-",
                         "BELIRSIZ KAPSAYICI — %d aday liste var (%s); hangisinin kayit "
                         "listesi oldugu ANLASILMIYOR." % (len(liste_anahtarlari), ", ".join(liste_anahtarlari))))
        return None, []
    ad = liste_anahtarlari[0]
    if ad not in KAPSAYICI_ADAY:
        bulgular.append(("SARI", dosya, "-",
                         "kapsayici anahtar '%s' bilinen adlar arasinda degil (%s)"
                         % (ad, ", ".join(KAPSAYICI_ADAY))))
    return ad, d[ad]


def dosyalari_oku(dizin, bolgeler, bulgular):
    """Bolge -> (yol, kapsayici, kayitlar, ustbilgi). Eksik dosya 🔴 degil ⚪ (henuz yazilmadi)."""
    okunan, eksik = {}, []
    for b in bolgeler:
        yol = os.path.join(dizin, DOSYA_KALIBI.format(bolge=b))
        if not os.path.exists(yol):
            eksik.append(b)
            continue
        try:
            d = json.load(open(yol, encoding="utf-8"))
        except Exception as e:
            bulgular.append(("KIRMIZI", os.path.basename(yol), "-",
                             "JSON AYRISTIRILAMADI: %s" % e))
            continue
        if not isinstance(d, dict):
            bulgular.append(("KIRMIZI", os.path.basename(yol), "-",
                             "ust seviye dict degil (%s)" % type(d).__name__))
            continue
        ad, kayitlar = kapsayici_bul(d, os.path.basename(yol), bulgular)
        if ad is None:
            continue
        ust = {k: v for k, v in d.items() if k.startswith("_") or k != ad}
        okunan[b] = dict(yol=yol, kapsayici=ad, kayitlar=kayitlar, ust=ust)
    return okunan, eksik


# ─────────────────────────────────────────────────────────────────────────────
# ② SEMA DOGRULAYICI
# ─────────────────────────────────────────────────────────────────────────────

GUN_RX = re.compile(r"^-?\d{3,4}-\d{2}-\d{2}$")


def sema_dogrula(bolge, kayitlar, bulgular):
    sayac = collections.Counter()
    for i, r in enumerate(kayitlar):
        yer = "%s#%d" % (bolge, i)
        if not isinstance(r, dict):
            bulgular.append(("KIRMIZI", bolge, yer, "kayit dict degil (%s)" % type(r).__name__))
            sayac["ihlal"] += 1
            continue

        for alan in ZORUNLU_ALAN:
            if alan not in r:
                bulgular.append(("KIRMIZI", bolge, yer, "ZORUNLU ALAN YOK: %s" % alan))
                sayac["ihlal"] += 1

        hal = r.get("hal")
        if hal not in HAL_DEGERLERI:
            bulgular.append(("KIRMIZI", bolge, yer,
                             "hal='%s' — DORT degerden biri degil (%s)"
                             % (hal, " | ".join(HAL_DEGERLERI))))
            sayac["ihlal"] += 1

        tc = r.get("t_cinsi")
        if tc not in T_CINSI_DEGERLERI:
            # bos dizgi ozel: "alan var ama doldurulmamis" — ayri kova
            if tc in (None, ""):
                bulgular.append(("SARI", bolge, yer, "t_cinsi BOS (%r)" % tc))
                sayac["bos_t_cinsi"] += 1
            else:
                bulgular.append(("KIRMIZI", bolge, yer,
                                 "t_cinsi='%s' — beklenen: %s" % (tc, " | ".join(T_CINSI_DEGERLERI))))
                sayac["ihlal"] += 1

        for alan in ("f", "t", "dayanak_t"):
            v = r.get(alan)
            if v in (None, ""):
                sayac["bos_" + alan] += 1
            elif isinstance(v, str) and not GUN_RX.match(v):
                bulgular.append(("SARI", bolge, yer,
                                 "%s='%s' YYYY-MM-DD bicimine uymuyor" % (alan, v[:40])))
                sayac["bicimsiz_tarih"] += 1

        gc = r.get("gc")
        if not isinstance(gc, list):
            bulgular.append(("KIRMIZI", bolge, yer,
                             "gc LISTE DEGIL (%s) — geometri okunamaz" % type(gc).__name__))
            sayac["ihlal"] += 1
        elif not gc:
            # 🔴 'gc:[]' bir tip hatasi DEGIL: kayit var, geometri YOK.
            #    Ayri sayilir, cunku caresi de ayri (kolun geometriyi yeniden olcmesi).
            bulgular.append(("KIRMIZI", bolge, yer,
                             "gc BOS ([]) — kayit var, geometri YOK ⇒ C'de cizilemez"))
            sayac["ihlal"] += 1
            sayac["gc_bos"] += 1
        else:
            for j, parca in enumerate(gc):
                if not isinstance(parca, list) or len(parca) < 2:
                    bulgular.append(("KIRMIZI", bolge, yer,
                                     "gc[%d] gecerli bir cizgi degil (en az 2 tepe gerek)" % j))
                    sayac["ihlal"] += 1
                    break
        eksik_onerilen = [a for a in ONERILEN_ALAN if a not in r]
        if eksik_onerilen:
            sayac["onerilen_eksik"] += 1
        sayac["kayit"] += 1
    return sayac


# ─────────────────────────────────────────────────────────────────────────────
# ③ ANAHTAR KARARLILIGI
# ─────────────────────────────────────────────────────────────────────────────

def anahtar_kararliligi(bolge, kayitlar, bulgular):
    """
    (a,b) alfabetik siralanmis mi? Degilse ayni kenar IKI FARKLI ANAHTARLA
    gorunur ve cakisma GORUNMEZ olur — kolun kendi icinde de, bolgeler
    arasinda da.
    """
    s = collections.Counter()
    for i, r in enumerate(kayitlar):
        a, b = r.get("a"), r.get("b")
        yer = "%s#%d" % (bolge, i)
        if a is None or b is None:
            s["bos_uc"] += 1
            continue
        if not (isinstance(a, str) and isinstance(b, str)):
            s["metin_disi_uc"] += 1
            continue
        if a == b:
            s["ozdes_uc"] += 1          # a==b: kenarin iki yani AYNI kimlik
        elif a > b:
            s["ters_sira"] += 1
    if s["bos_uc"]:
        bulgular.append(("KIRMIZI", bolge, "-",
                         "a/b BOS: %d/%d kayit — birlestirme anahtari YOK, kayitlar "
                         "birbirinden ayirt edilemez" % (s["bos_uc"], len(kayitlar))))
    if s["ters_sira"]:
        bulgular.append(("KIRMIZI", bolge, "-",
                         "ANAHTAR KARARSIZ: %d/%d kayitta a > b (alfabetik degil) ⇒ ayni kenar "
                         "iki farkli anahtarla gorunur" % (s["ters_sira"], len(kayitlar))))
    if s["ozdes_uc"]:
        bulgular.append(("SARI", bolge, "-",
                         "a == b: %d kayit — kenarin iki yani ayni kimlik "
                         "(1923'te ULUSLARARASI sinir degil; `hal:ayni-kimlik` adayi)"
                         % s["ozdes_uc"]))
    return s


# ─────────────────────────────────────────────────────────────────────────────
# ④ CAKISMA — ayni kenar birden cok kolda mi?
# ─────────────────────────────────────────────────────────────────────────────

def ne_kanon_haritasi(yol=NE_GEOJSON):
    """
    NE adi -> KANONIK ulke.  NE ayni ulkeyi alti alanda alti farkli yazabiliyor
    ('Serbia' / 'Republic of Serbia' · 'Bosnia and Herz.' / 'Bosnia and
    Herzegovina' · 'W. Sahara' / 'Western Sahara').

    🔴 NICIN GEREKLI: iki kol AYNI kenari FARKLI ad alanindan yazmissa, ad
       tabanli mukerrer tespiti onu GORMEZ. Bu harita o kor noktayi olcer.
    ⚠️ Birden cok ulkeye esleşen ad (SOVEREIGNT 'France' gibi) KANONLASTIRILMAZ
       — belirsizligi bir esleme gibi gostermek yeni bir kusur olurdu.
    """
    if not os.path.exists(yol):
        return None
    ne = json.load(open(yol, encoding="utf-8"))
    ad2ft = collections.defaultdict(set)
    kanon = {}
    for i, ft in enumerate(ne.get("features", [])):
        p = ft.get("properties", {})
        kanon[i] = p.get("NAME") or p.get("ADMIN") or ("ft%d" % i)
        for k in ("NAME", "NAME_LONG", "ADMIN", "SOVEREIGNT", "BRK_NAME", "NAME_EN"):
            v = p.get(k)
            if isinstance(v, str) and v:
                ad2ft[v].add(i)
    return {a: kanon[list(s)[0]] for a, s in ad2ft.items() if len(s) == 1}


def kanonik_capraz_sinav(indeks, carpraz, kanon, bulgular):
    """
    Ad varyantlari yuzunden GIZLENMIS mukerrer var mi?

    Ham ad indeksini kanonik adlara indirger ve YENI cift cikip cikmadigina
    bakar. Cikarsa 🔴: ad tabanli sayim eksik demektir.
    Donus: (kanonik_benzersiz, kanonik_carpraz, gizlenen_liste, kanonsuz)
    """
    if kanon is None:
        return None, None, None, None
    kan_ix = collections.defaultdict(list)
    kanonsuz = 0
    for cift, kayitlar in indeks.items():
        ka, kb = kanon.get(cift[0]), kanon.get(cift[1])
        if ka is None or kb is None:
            kanonsuz += len(kayitlar)
            continue
        kan_ix[tuple(sorted((ka, kb)))].extend(kayitlar)
    kan_carpraz = {k: v for k, v in kan_ix.items() if len({x[0] for x in v}) > 1}
    ham_kanon = set()
    for cift in carpraz:
        ka, kb = kanon.get(cift[0], cift[0]), kanon.get(cift[1], cift[1])
        ham_kanon.add(tuple(sorted((ka, kb))))
    gizlenen = sorted(set(kan_carpraz) - ham_kanon)
    for k in gizlenen:
        bulgular.append(("KIRMIZI", "+".join(sorted({x[0] for x in kan_carpraz[k]})), "-",
                         "AD VARYANTI MUKERRERI GIZLEMIS: %s | %s — iki kol ayni kenari "
                         "FARKLI NE ad alanindan yazmis" % k))
    return len(kan_ix), len(kan_carpraz), gizlenen, kanonsuz


def kapsama_olc(indeks, kanon, ref_yol=os.path.join("denetim", "OLCUM-KENAR-0907.json")):
    """
    Kollar NE'nin kenarlarinin ne kadarini kapsiyor?

    Referans: KADEME-MODEL-0907'nin 342 kenarlik olcumu. 🟡 DEVRALINAN bir
    sayi — burada kendi dosyasindan OKUNUYOR, elle tasinmiyor.
    Dosya yoksa None doner: 'kapsama 0' DEGIL, 'OLCULEMEDI'.
    """
    if kanon is None or not os.path.exists(ref_yol):
        return None
    ref = json.load(open(ref_yol, encoding="utf-8"))
    REF, ref_kanonsuz = set(), 0
    for e in ref.get("kenarlar", []):
        ka, kb = kanon.get(e.get("a")), kanon.get(e.get("b"))
        if ka is None or kb is None:
            ref_kanonsuz += 1
            continue
        REF.add(tuple(sorted((ka, kb))))
    BIZ = set()
    for cift in indeks:
        ka, kb = kanon.get(cift[0]), kanon.get(cift[1])
        if ka and kb:
            BIZ.add(tuple(sorted((ka, kb))))
    return dict(referans_ham=len(ref.get("kenarlar", [])),
                referans_kanonik=len(REF), referans_kanonlasmayan=ref_kanonsuz,
                kollar=len(BIZ), kapsanan=len(BIZ & REF),
                eksik=sorted("%s | %s" % k for k in (REF - BIZ)),
                fazla=sorted("%s | %s" % k for k in (BIZ - REF)))


def gc_imza(gc):
    """
    Geometrinin karsilastirilabilir imzasi: (parca, tepe, 3-ondalik tepe kumesi).

    3 ondalik, modelin kendi hassasiyeti (§①e) — ve yuvarlama birebirligi
    BOZMAZ: iki kol ayni float'i tasiyorsa ayni yuvarlanmisi da tasir.
    Donus None = 'olculemedi' (gc liste degil), bos kume = 'gc BOS'.
    """
    if not isinstance(gc, list):
        return None
    tepeler = []
    for p in gc:
        if isinstance(p, list):
            for t in p:
                if isinstance(t, (list, tuple)) and len(t) >= 2:
                    try:
                        tepeler.append((round(float(t[0]), 3), round(float(t[1]), 3)))
                    except (TypeError, ValueError):
                        pass
    return len(gc), len(tepeler), frozenset(tepeler)


def mukerrer_geometri(carpraz, okunan, bulgular):
    """
    Ayni kenari iki kol da yazmissa GEOMETRILERI AYNI MI?

    🔴 Bu, birlestirmenin FIYATINI belirleyen olcumdur. Model (§①c) kenar
       cikariminin MEKANIK oldugunu soyluyor (tolerans yok); dogruysa iki
       bagimsiz kolun ayni kenar icin urettigi `gc` BIREBIR AYNI olmali.
       Degilse cakisma yalniz `hal`de degil GEOMETRIDE de var demektir ve
       o cok daha pahalidir.
    ⚠️ 'BIR TARAF BOS' ayri kovadir: bir yanin `gc:[]` olmasi bir GEOMETRI
       CELISKISI DEGIL, bir OLCUM EKSIGIDIR. Ayni kovaya konursa care de
       yanlis secilir (CLAUDE.md §11: iki ayri kusur tek satirda raporlanirsa
       ayni care uygulanir).
    """
    sonuc = {"ayni": [], "bos_taraf": [], "farkli": [], "olculemedi": []}
    for k, v in sorted(carpraz.items()):
        imzalar = []
        for b, i, _hal in v:
            imzalar.append((b, gc_imza(okunan[b]["kayitlar"][i].get("gc"))))
        etiket = "%s | %s" % k
        if any(s is None for _, s in imzalar):
            sonuc["olculemedi"].append(etiket)
        elif any(len(s[2]) == 0 for _, s in imzalar):
            sonuc["bos_taraf"].append(etiket)
            bulgular.append(("SARI", "+".join(b for b, _ in imzalar), "-",
                             "MUKERRER, BIR TARAFIN gc'si BOS: %s ⇒ geometri celiskisi DEGIL, "
                             "olcum eksigi" % etiket))
        elif len({s[2] for _, s in imzalar}) == 1:
            sonuc["ayni"].append(etiket)
        else:
            a0, a1 = imzalar[0][1], imzalar[1][1]
            ortak = len(a0[2] & a1[2]); birlesim = len(a0[2] | a1[2])
            sonuc["farkli"].append(etiket)
            bulgular.append(("KIRMIZI", "+".join(b for b, _ in imzalar), "-",
                             "MUKERRER KENARIN GEOMETRISI FARKLI: %s · ortak tepe %d/%d "
                             "⇒ modelin 'kenar cikarimi MEKANIK' iddiasi bu cift icin TUTMUYOR"
                             % (etiket, ortak, birlesim)))
    return sonuc


def cakisma_olc(okunan, ne_ad, bulgular):
    eksen, indeks = {}, collections.defaultdict(list)
    anahtarsiz = collections.Counter()
    for b, o in okunan.items():
        alan, oran = ne_cifti_alani(o["kayitlar"], ne_ad)
        eksen[b] = (alan, oran)
        if alan is None or oran < 0.90:
            bulgular.append(("KIRMIZI", b, "-",
                             "NE ekseni BULUNAMADI (en iyi aday %s, %.0f%%) ⇒ bu kolun "
                             "kenarlari oteki kollarla KIYASLANAMAZ"
                             % (alan, 100 * oran)))
            continue
        for i, r in enumerate(o["kayitlar"]):
            c = ne_cifti(r, alan)
            if c is None:
                anahtarsiz[b] += 1
                continue
            indeks[c].append((b, i, r.get("hal")))
    for b, n in anahtarsiz.items():
        bulgular.append(("SARI", b, "-", "NE cifti cikarilamayan kayit: %d" % n))

    coklu = {k: v for k, v in indeks.items() if len(v) > 1}
    carpraz = {k: v for k, v in coklu.items() if len({x[0] for x in v}) > 1}
    icsel = {k: v for k, v in coklu.items() if len({x[0] for x in v}) == 1}
    for k, v in sorted(icsel.items()):
        bulgular.append(("KIRMIZI", v[0][0], "-",
                         "KOL ICI MUKERRER: %s | %s (%d kayit)" % (k[0], k[1], len(v))))
    for k, v in sorted(carpraz.items()):
        bulgular.append(("SARI", "+".join(sorted({x[0] for x in v})), "-",
                         "BOLGELER ARASI MUKERRER: %s | %s -> %s"
                         % (k[0], k[1], ", ".join("%s(%s)" % (x[0], x[2]) for x in v))))
    return eksen, indeks, carpraz, icsel


# ─────────────────────────────────────────────────────────────────────────────
# ⑤ BIRLESTIRICI — her bolge KENDI window adiyla
# ─────────────────────────────────────────────────────────────────────────────

def _slug_cifti(bolge, r, ne_a, ne_b):
    """
    Kaydin 1923 atlas slug'larini (ne_a, ne_b) SIRASINDA dondur.

    🔴 Her kol slug'i BASKA BIR BICIMDE tasiyor — bes bicim olculdu. Hizalama
       TAHMIN EDILMEDI, her kol icin AYRI AYRI dogrulandi (7 Eylul 2026):
         ASYA     kimlik_bugun{a,b} <-> ne_a/ne_b   98/98
         GAFRIKA  kimlik_bugun[]    <-> a/b         89/89
         BALKAN   ne_a == a                         60/60
         KAFRIKA  ne_a == a                         25/25
         ANADOLU  kimlik_1923 NE ADIYLA anahtarli   19/19  (hizalama sorusu YOK)
       Hizalama dogrulanamayan bir kol cikarsa (None, None, "hizasiz") doner
       ve birlestirici o kaydi DAMGALAR — sessizce tasimaz.
    """
    if bolge == "ANADOLU":
        k = r.get("kimlik_1923")
        if isinstance(k, dict):
            return k.get(ne_a), k.get(ne_b), "ne-adiyla-anahtarli"
    elif bolge == "ASYA":
        k = r.get("kimlik_1923")
        if isinstance(k, dict) and ("a" in k or "b" in k):
            # kimlik_bugun{a,b} ile ne_a/ne_b hizasi olculdu
            if r.get("ne_a") == ne_a:
                return k.get("a"), k.get("b"), "a-ne_a"
            return k.get("b"), k.get("a"), "a-ne_b TERS"
    elif bolge in ("BALKAN", "KAFRIKA"):
        ka, kb = r.get("kimlik_1923_a"), r.get("kimlik_1923_b")
        if r.get("a") == ne_a or r.get("ne_a") == ne_a:
            return ka, kb, "a-ucu"
        return kb, ka, "b-ucu TERS"
    elif bolge == "GAFRIKA":
        k = r.get("kimlik_1923_atlas")
        if isinstance(k, list) and len(k) == 2:
            if r.get("a") == ne_a:
                return k[0], k[1], "atlas[]"
            return k[1], k[0], "atlas[] TERS"
    elif bolge == "ARAP":
        k = r.get("kimlik_1923")
        if isinstance(k, list) and len(k) == 2:
            if r.get("a") == ne_a:
                return k[0], k[1], "liste"
            return k[1], k[0], "liste TERS"
    return None, None, "hizasiz"


def normalize(bolge, r, eksen_adi):
    """
    ③+④ hukmu (1.MURAT, 7 Eylul):  a/b = NE ADI · kimlik_1923_a/_b = atlas slug'i.

    Gerekce (kabul edilen): NE adi GEOMETRININ kaynagi ve DEGISMEZ; slug bir
    HUKUMDUR ve degisebilir. Anahtari hukme baglamak, hukum duzelince
    anahtari kaydirir — ve kaydiran bir anahtar CAKISMAYI GORUNMEZ yapar.

    🔴 KAYNAK DOSYAYA DOKUNULMAZ. Bu donusum yalniz BIRLESTIRICININ CIKTISINDA
       yasar; kollarin dosyalari degismez (§7).
    Donus: (yeni_kayit, bayraklar)
    """
    bayrak = set()
    cift = ne_cifti(r, eksen_adi)      # zaten ALFABETIK siralanmis dondurur
    if cift is None:
        bayrak.add("ne-cifti-yok")
        return dict(r), bayrak
    ne_a, ne_b = cift
    ka, kb, yol = _slug_cifti(bolge, r, ne_a, ne_b)
    if yol == "hizasiz":
        bayrak.add("slug-hizasiz")
    if "TERS" in yol:
        bayrak.add("uc-takasi")

    k = dict(r)
    eski_a, eski_b = r.get("a"), r.get("b")
    if eski_a != ne_a or eski_b != ne_b:
        bayrak.add("a/b-degisti")
        if isinstance(eski_a, str) and isinstance(eski_b, str) and eski_a > eski_b:
            bayrak.add("sira-duzeltildi")
        if eski_a is None:
            bayrak.add("bos-uc-dolduruldu")
        # eski degeri KAYBETME — nereden geldigi sorulabilir olmali
        k["_eski_a"], k["_eski_b"] = eski_a, eski_b
    k["a"], k["b"] = ne_a, ne_b
    if ka is not None or kb is not None:
        k["kimlik_1923_a"], k["kimlik_1923_b"] = ka, kb
        bayrak.add("slug-tasindi")
    else:
        bayrak.add("slug-yok")
    return k, bayrak


def ad_alani(bolge):
    return "SINIR_HUKUKI_" + bolge.upper()


def dosya_adi(bolge):
    return "sinir_hukuki_" + bolge.lower() + ".js"


def uret(okunan, eksen, indeks, hedef_dizin, ham=False):
    """
    Alti JSON -> alti .js, HER BIRI KENDI `window` ADIYLA.

    🔴 TEK DOSYA / TEK AD URETMIYORUZ. `KADEME_YAMA` vakasi (bes dosya, tek
       ad, 537->137) tam olarak bunun bedelidir.
    🔴 KAYITLAR DONUSTURULMEZ. Alan adlarini birbirine uydurmak bir KARARDIR
       ve bu aletin yetkisinde degil (sevk: "olc, oner, UYGULAMA").
       Varsayilan olarak yalniz iki IZ alani eklenir; `--ham` onu da kapatir.
    """
    os.makedirs(hedef_dizin, exist_ok=True)
    yazilan = []
    rapor = collections.defaultdict(collections.Counter)
    ters = {}
    for anahtar, v in indeks.items():
        for b, i, _ in v:
            ters[(b, i)] = anahtar
    for b, o in sorted(okunan.items()):
        kayitlar = []
        eks = eksen.get(b, (None, 0))[0]
        for i, r in enumerate(o["kayitlar"]):
            if ham:
                k = dict(r)
            else:
                k, bayrak = normalize(b, r, eks)
                for x in bayrak:
                    rapor[b][x] += 1
                k["_bolge"] = b                          # PROVENANS — hangi kol yazdi
                a = ters.get((b, i))
                k["_ne_anahtar"] = list(a) if a else None  # kararli kenar anahtari
            kayitlar.append(k)
        ad = ad_alani(b)
        yol = os.path.join(hedef_dizin, dosya_adi(b))
        govde = json.dumps(kayitlar, ensure_ascii=False, separators=(",", ":"))
        basl = (
            "// " + dosya_adi(b) + " — kademe C (hukuki sinir) · bolge: " + b + "\n"
            "// URETILDI: denetim/ARAC-BIRLESTIR-SINIR-0907.py — ELLE DUZENLEME.\n"
            "// KAYNAK  : " + os.path.basename(o["yol"]) + " (kapsayici anahtar: " + o["kapsayici"] + ")\n"
            "// AD ALANI: window." + ad + "  🔴 HER BOLGE KENDI ADINI ALIR (§7)\n"
            "// KAYIT   : " + str(len(kayitlar)) + "\n"
            "// NE ekseni: " + str(eksen.get(b, ("-", 0))[0]) + "\n"
        )
        with open(yol, "w", encoding="utf-8", newline="\n") as fh:
            fh.write(basl)
            fh.write("window." + ad + " = " + govde + ";\n")
        yazilan.append((b, yol, ad, len(kayitlar)))
    return yazilan, {b: dict(c) for b, c in rapor.items()}


NODE_DOGRULA = r"""
const fs = require('fs'), vm = require('vm');
const girdi = JSON.parse(fs.readFileSync(process.argv[2], 'utf8'));
const cikti = [];
const gorulen = {};
for (const [bolge, yol, ad, beklenen] of girdi) {
  // 🔴 HER DOSYA AYRI BAGLAMDA. Tek baglamda eval, ayni window.X adini
  //    kullanan iki dosyada SESSIZ EZME uretir (CLAUDE.md §7).
  const ctx = { window: {} };
  vm.createContext(ctx);
  try {
    vm.runInContext(fs.readFileSync(yol, 'utf8'), ctx, { filename: yol });
  } catch (e) {
    cikti.push({ bolge, ad, hata: String(e.message) });
    continue;
  }
  const adlar = Object.keys(ctx.window);
  const v = ctx.window[ad];
  cikti.push({
    bolge, ad, yol,
    tanimlanan_adlar: adlar,
    ad_var: Object.prototype.hasOwnProperty.call(ctx.window, ad),
    dizi_mi: Array.isArray(v),
    sayi: Array.isArray(v) ? v.length : null,
    beklenen,
    ilk_alanlar: Array.isArray(v) && v.length ? Object.keys(v[0]).sort() : null,
  });
  for (const a of adlar) (gorulen[a] = gorulen[a] || []).push(bolge);
}
const carpisan = Object.entries(gorulen).filter(([, b]) => b.length > 1);
console.log(JSON.stringify({ dosyalar: cikti, ad_carpismasi: carpisan }, null, 1));
"""


def cikti_dogrula(yazilan):
    """
    URETILEN .js'i JAVASCRIPT'IN KENDI YORUMLAYICISIYLA geri oku.

    🔴 Regex'le degil. Ve her dosya AYRI vm baglaminda — tek baglamda okumak
       tam olarak onlemeye calistigimiz sessiz ezmeyi gizlerdi.
    """
    if not yazilan:
        return {"dosyalar": [], "ad_carpismasi": [], "_not": "uretilen dosya yok"}
    with tempfile.TemporaryDirectory() as tmp:
        js = os.path.join(tmp, "dogrula.js")
        gir = os.path.join(tmp, "girdi.json")
        with open(js, "w", encoding="utf-8", newline="\n") as fh:
            fh.write(NODE_DOGRULA)
        with open(gir, "w", encoding="utf-8") as fh:
            json.dump([[b, os.path.abspath(y), a, n] for b, y, a, n in yazilan], fh)
        p = subprocess.run(["node", js, gir], capture_output=True, text=True, encoding="utf-8")
        if p.returncode != 0:
            return {"_hata": p.stderr[-2000:]}
        return json.loads(p.stdout)


# ─────────────────────────────────────────────────────────────────────────────
# RAPOR
# ─────────────────────────────────────────────────────────────────────────────

def main():
    ap = argparse.ArgumentParser(description="kademe C bolge kollarini dogrula ve birlestir")
    ap.add_argument("--dizin", default="denetim", help="girdi dizini (varsayilan: denetim)")
    ap.add_argument("--bolgeler", default=",".join(BOLGELER))
    ap.add_argument("--uret", action="store_true", help=".js uret")
    ap.add_argument("--hedef", default=os.path.join("denetim", "_birlestir"),
                    help="uretim hedefi (BIRLESTIRME GUNU: data)")
    ap.add_argument("--ham", action="store_true", help="iz alanlarini (_bolge/_ne_anahtar) EKLEME")
    ap.add_argument("--json", dest="json_yol", help="makine okunur raporu buraya yaz")
    ap.add_argument("--sessiz", action="store_true")
    a = ap.parse_args()

    bolgeler = [x.strip().upper() for x in a.bolgeler.split(",") if x.strip()]
    bulgular = []
    okunan, eksik = dosyalari_oku(a.dizin, bolgeler, bulgular)

    ne_ad = ne_sozlugu()
    if ne_ad is None:
        bulgular.append(("KIRMIZI", "-", "-",
                         "NE sozlugu OKUNAMADI (%s) ⇒ NE ekseni OLCULEMEDI. "
                         "Bu 'eksen yok' DEGIL, 'olculemedi'." % NE_GEOJSON))
        ne_ad = set()

    sema, anahtar = {}, {}
    for b, o in okunan.items():
        sema[b] = sema_dogrula(b, o["kayitlar"], bulgular)
        anahtar[b] = anahtar_kararliligi(b, o["kayitlar"], bulgular)

    eksen, indeks, carpraz, icsel = cakisma_olc(okunan, ne_ad, bulgular)
    geo = mukerrer_geometri(carpraz, okunan, bulgular)
    kanon = ne_kanon_haritasi()
    kan_n, kan_c, gizlenen, kanonsuz = kanonik_capraz_sinav(indeks, carpraz, kanon, bulgular)
    kapsama = kapsama_olc(indeks, kanon)

    yazilan, dogrulama, nrapor = [], None, {}
    if a.uret:
        yazilan, nrapor = uret(okunan, eksen, indeks, a.hedef, ham=a.ham)
        dogrulama = cikti_dogrula(yazilan)

    kirmizi = [x for x in bulgular if x[0] == "KIRMIZI"]
    sari = [x for x in bulgular if x[0] == "SARI"]

    if not a.sessiz:
        P = print
        P("=" * 78)
        P("ARAC-BIRLESTIR-SINIR-0907 — kademe C kol birlestirme denetimi")
        P("girdi dizini: %s" % a.dizin)
        P("=" * 78)
        P("")
        P("① KOLLAR")
        P("   %-9s %-11s %-7s %-22s %s" % ("BOLGE", "KAPSAYICI", "KAYIT", "NE EKSENI", "hal dagilimi"))
        for b in bolgeler:
            if b in eksik:
                P("   %-9s %s" % (b, "⚪ DOSYA YOK — henuz yazilmadi (bu 'sifir kayit' DEGIL)"))
                continue
            if b not in okunan:
                P("   %-9s 🔴 OKUNAMADI" % b)
                continue
            o = okunan[b]
            hd = collections.Counter(r.get("hal") for r in o["kayitlar"])
            eks = eksen.get(b, (None, 0.0))
            P("   %-9s %-11s %-7d %-22s %s"
              % (b, o["kapsayici"], len(o["kayitlar"]),
                 "%s %.0f%%" % (eks[0], 100 * eks[1]) if eks[0] else "🔴 YOK",
                 dict(hd)))
        toplam = sum(len(o["kayitlar"]) for o in okunan.values())
        P("   ------")
        P("   okunan kol: %d/%d · TOPLAM KAYIT: %d · eksik: %s"
          % (len(okunan), len(bolgeler), toplam, ", ".join(eksik) if eksik else "-"))
        P("")
        P("② SEMA")
        P("   %-9s %-7s %-7s %-9s %-9s %s" % ("BOLGE", "KAYIT", "IHLAL", "bos f", "bos t_c", "onerilen alani eksik"))
        for b, s in sema.items():
            P("   %-9s %-7d %-7d %-9d %-9d %d"
              % (b, s["kayit"], s["ihlal"], s["bos_f"], s["bos_t_cinsi"], s["onerilen_eksik"]))
        P("")
        P("③ ANAHTAR KARARLILIGI  (a,b alfabetik mi)")
        P("   %-9s %-10s %-10s %-10s" % ("BOLGE", "TERS SIRA", "BOS UC", "a==b"))
        for b, s in anahtar.items():
            P("   %-9s %-10d %-10d %-10d" % (b, s["ters_sira"], s["bos_uc"], s["ozdes_uc"]))
        P("")
        P("④ CAKISMA")
        P("   benzersiz NE kenari : %d" % len(indeks))
        P("   BOLGELER ARASI mukerrer: %d" % len(carpraz))
        P("   KOL ICI mukerrer       : %d   🔴 (kolun kendi hatasi)" % len(icsel))
        for k, v in sorted(carpraz.items()):
            P("      %-22s | %-22s -> %s" % (k[0], k[1], ", ".join("%s(%s)" % (x[0], x[2]) for x in v)))
        P("")
        P("   MUKERRER KENARLARIN GEOMETRISI  (birlestirmenin FIYATINI bu belirler)")
        P("      BIREBIR AYNI  : %d" % len(geo["ayni"]))
        P("      BIR TARAF BOS : %d   %s" % (len(geo["bos_taraf"]), ", ".join(geo["bos_taraf"])))
        P("      FARKLI        : %d   %s" % (len(geo["farkli"]), ", ".join(geo["farkli"])))
        P("      OLCULEMEDI    : %d   %s" % (len(geo["olculemedi"]), ", ".join(geo["olculemedi"])))
        P("")
        P("   AD VARYANTI SINAVI  (ayni kenar farkli NE ad alanindan yazilmis mi)")
        if kanon is None:
            P("      ⚪ OLCULEMEDI — NE sozlugu okunamadi")
        else:
            P("      ham ad ile: %d benzersiz / %d carpraz · kanonik: %d / %d"
              % (len(indeks), len(carpraz), kan_n, kan_c))
            P("      GIZLENMIS MUKERRER: %s" % ("🟢 0" if not gizlenen else "🔴 %s" % gizlenen))
            P("      kanonlasmayan kayit: %d (belirsiz NE adi)" % kanonsuz)
        P("")
        P("   KAPSAMA  (referans: denetim/OLCUM-KENAR-0907.json · 🟡 DEVRALINAN)")
        if kapsama is None:
            P("      ⚪ OLCULEMEDI — referans dosya ya da NE sozlugu yok")
        else:
            P("      referans %d kenar -> kanonik %d (kanonlasmayan %d)"
              % (kapsama["referans_ham"], kapsama["referans_kanonik"],
                 kapsama["referans_kanonlasmayan"]))
            P("      KAPSANAN %d/%d (%.1f%%) · EKSIK %d · FAZLA %d"
              % (kapsama["kapsanan"], kapsama["referans_kanonik"],
                 100.0 * kapsama["kapsanan"] / max(1, kapsama["referans_kanonik"]),
                 len(kapsama["eksik"]), len(kapsama["fazla"])))
            if kapsama["fazla"]:
                P("      FAZLA (kol yazmis, referansta kenar YOK): %s"
                  % ", ".join(kapsama["fazla"]))
        P("")
        if a.uret:
            P("⑤ URETIM -> %s" % a.hedef)
            for b, yol, ad, n in yazilan:
                P("   %-9s %-34s window.%-26s %d kayit" % (b, os.path.basename(yol), ad, n))
            P("")
            if not a.ham:
                P("   ⑤b NORMALIZASYON  (③+④ hukmu — KAYNAK DOSYALAR DEGISMEDI)")
                P("      a/b = NE ADI · kimlik_1923_a/_b = atlas slug'i")
                P("      %-9s %-12s %-11s %-13s %-12s %-11s %s"
                  % ("BOLGE", "a/b DEGISTI", "sira duz.", "bos uc dold.", "slug tasindi",
                     "uc takasi", "slug YOK"))
                for b2 in sorted(nrapor):
                    c = nrapor[b2]
                    P("      %-9s %-12d %-11d %-13d %-12d %-11d %d"
                      % (b2, c.get("a/b-degisti", 0), c.get("sira-duzeltildi", 0),
                         c.get("bos-uc-dolduruldu", 0), c.get("slug-tasindi", 0),
                         c.get("uc-takasi", 0), c.get("slug-yok", 0)))
                hz = sum(c.get("slug-hizasiz", 0) for c in nrapor.values())
                P("      slug HIZASIZ (bicimi taninmadi): %s"
                  % ("🟢 0" if not hz else "🔴 %d — DAMGALANDI, sessizce tasinmadi" % hz))
                P("")
            P("⑥ CIKTI DOGRULAMASI (node + vm, HER DOSYA AYRI BAGLAMDA)")
            if dogrulama and "_hata" in dogrulama:
                P("   🔴 node calistirilamadi: %s" % dogrulama["_hata"][:300])
            elif dogrulama:
                for d in dogrulama.get("dosyalar", []):
                    if "hata" in d:
                        P("   🔴 %-9s %s" % (d["bolge"], d["hata"]))
                        continue
                    ok = d["ad_var"] and d["dizi_mi"] and d["sayi"] == d["beklenen"] \
                         and d["tanimlanan_adlar"] == [d["ad"]]
                    P("   %s %-9s window.%-26s %d/%d kayit · tanimladigi ad: %s"
                      % ("🟢" if ok else "🔴", d["bolge"], d["ad"], d["sayi"] or 0,
                         d["beklenen"], d["tanimlanan_adlar"]))
                cc = dogrulama.get("ad_carpismasi", [])
                P("   AD CARPISMASI: %s" % ("🟢 0" if not cc else "🔴 %s" % cc))
            P("")
        P("=" * 78)
        P("🔴 KIRMIZI: %d   🟡 SARI: %d" % (len(kirmizi), len(sari)))
        for tur, b, yer, msg in bulgular:
            P("   %s %-9s %-12s %s" % ("🔴" if tur == "KIRMIZI" else "🟡", b, yer, msg))
        P("=" * 78)

    if a.json_yol:
        rapor = dict(
            dizin=a.dizin, bolgeler=bolgeler, eksik=eksik,
            kollar={b: dict(kapsayici=o["kapsayici"], kayit=len(o["kayitlar"]),
                            ne_ekseni=eksen.get(b, (None, 0))[0],
                            ne_orani=round(eksen.get(b, (None, 0))[1], 4))
                    for b, o in okunan.items()},
            sema={b: dict(s) for b, s in sema.items()},
            anahtar={b: dict(s) for b, s in anahtar.items()},
            benzersiz_kenar=len(indeks),
            mukerrer_geometri={k: list(v) for k, v in geo.items()},
            ad_varyanti_sinavi=dict(kanonik_benzersiz=kan_n, kanonik_carpraz=kan_c,
                                    gizlenen_mukerrer=["%s | %s" % g for g in (gizlenen or [])],
                                    kanonlasmayan_kayit=kanonsuz),
            kapsama=kapsama,
            bolgeler_arasi_mukerrer=[dict(a=k[0], b=k[1],
                                          kayitlar=[dict(bolge=x[0], i=x[1], hal=x[2]) for x in v])
                                     for k, v in sorted(carpraz.items())],
            kol_ici_mukerrer=[dict(a=k[0], b=k[1],
                                   kayitlar=[dict(bolge=x[0], i=x[1], hal=x[2]) for x in v])
                              for k, v in sorted(icsel.items())],
            bulgular=[dict(tur=t, bolge=b, yer=y, mesaj=m) for t, b, y, m in bulgular],
            uretilen=[dict(bolge=b, yol=y, ad_alani=ad, kayit=n) for b, y, ad, n in yazilan],
            normalizasyon=nrapor,
            cikti_dogrulamasi=dogrulama,
        )
        os.makedirs(os.path.dirname(os.path.abspath(a.json_yol)), exist_ok=True)
        with open(a.json_yol, "w", encoding="utf-8") as fh:
            json.dump(rapor, fh, ensure_ascii=False, indent=1)

    return 1 if kirmizi else 0


if __name__ == "__main__":
    sys.exit(main())
