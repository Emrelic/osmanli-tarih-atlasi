# -*- coding: utf-8 -*-
"""PAKET-TEMIZ — okur metni temizlik uygulayıcısı (yol-adresli, ayrıştırıcılı).

py denetim/ARAC-TEMIZ-UYGULA-0914.py denetim/TEMIZ-DUZENLE-0914.json [--uygula] [--goster]

Neden ARAC-KRON2-UYGULA değil: o alet yalnız `t`+`b` taşıyan madde nesnesini ve düz alanları
tanır. Bu paketin hedefleri iç içe alanlar da içeriyor (`taraflar[1].kuvvet`, `gorusler[2].dayanak`,
`gorseller[3].sanatci`, `lakap[0]`, `DEVLETLER[].kronoloji[].b`). Bu alet JS nesne-literal alt kümesini
(nesne · dizi · '…'/"…" dizge · sayı · true/false/null · yorum) KONUMLARIYLA ayrıştırır ve düzenlemeyi
yalnız hedef değerin kendi aralığına uygular — dosyanın geri kalanı bayt bayt aynı kalır.

Kayıt (JSON `kayitlar[]`):
  dosya   data/ altındaki dosya adı
  kayit   seçici: {"id":…} | {"t":…,"b":…} | {"ad":…} | {"url":…} — nesnenin DOĞRUDAN dizge alanları
          bütünüyle eşit olmalı; bütün dosyada TAM 1 nesne tutmalı (0 ya da 2+ → kayıt ATLANIR, basılır)
  yol     "d" · "kaynak" · "taraflar[1].kuvvet" · "lakap[0]" · "lakap"
  işlem   eski+yeni  → dizge içinde alt dizge değişimi (eski TAM 1 kez geçmeli)
          deger      → dizgenin tamamı değişir
          bosalt     → yol bir DİZİ ise `[]` olur
  not     (isteğe bağlı) ic_not_<son anahtar> alanına EKLENİR (varsa " · " ile). Hedef, son alanı
          doğrudan taşıyan nesnedir; son kap bir diziyse dizinin sahibi olan nesne.
Kuru koşu varsayılan. Sessiz atlama yok: her başarısızlık basılır ve çıkış kodu 1 olur.
"""
import io, json, os, re, sys, collections
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8")
KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))


class Ayristirici:
    def __init__(self, m):
        self.m, self.n = m, len(m)

    def bosluk(self, i):
        m, n = self.m, self.n
        while i < n:
            c = m[i]
            if c in " \t\r\n﻿":
                i += 1
            elif m.startswith("//", i):
                j = m.find("\n", i)
                i = n if j < 0 else j + 1
            elif m.startswith("/*", i):
                j = m.find("*/", i + 2)
                i = n if j < 0 else j + 2
            else:
                break
        return i

    def dizge(self, i):
        q = self.m[i]
        j = i + 1
        while j < self.n and self.m[j] != q:
            j += 2 if self.m[j] == "\\" else 1
        ham = self.m[i:j + 1]
        if q == '"':
            deger = json.loads(ham)
        else:
            ic = ham[1:-1].replace("\\'", "'").replace('"', '\\"')
            deger = json.loads('"' + ic + '"')
        return {"tur": "str", "s": i, "e": j + 1, "deger": deger, "q": q}, j + 1

    def deger(self, i):
        i = self.bosluk(i)
        c = self.m[i]
        if c == "{":
            return self.nesne(i)
        if c == "[":
            return self.dizi(i)
        if c in "\"'":
            # "a" + "b" + … birleştirmesi (padisahlar.js · kisiler.js · ekokuma.js) TEK dizge sayılır;
            # düzenlenirse bütün zincir tek bir JSON dizgesiyle değişir.
            d, j = self.dizge(i)
            while True:
                k = self.bosluk(j)
                if k < self.n and self.m[k] == "+":
                    k2 = self.bosluk(k + 1)
                    if k2 < self.n and self.m[k2] in "\"'":
                        d2, j = self.dizge(k2)
                        d = {"tur": "str", "s": d["s"], "e": d2["e"], "deger": d["deger"] + d2["deger"], "q": d["q"]}
                        continue
                return d, j
        mt = re.compile(r"-?\d+(\.\d+)?([eE][-+]?\d+)?|true|false|null|undefined").match(self.m, i)
        if mt:
            return {"tur": "diger", "s": i, "e": mt.end()}, mt.end()
        raise ValueError("beklenmeyen karakter %r @%d" % (c, i))

    def nesne(self, i):
        s = i
        i += 1
        ogeler = []
        while True:
            i = self.bosluk(i)
            if self.m[i] == "}":
                return {"tur": "obj", "s": s, "e": i + 1, "ogeler": ogeler}, i + 1
            if self.m[i] in "\"'":
                kd, i = self.dizge(i)
                anahtar, tirnak, ks = kd["deger"], True, kd["s"]
            else:
                mt = re.compile(r"[A-Za-z_$][\w$]*|\d+").match(self.m, i)
                if not mt:
                    raise ValueError("anahtar beklenirdi @%d" % i)
                anahtar, tirnak, ks, i = mt.group(0), False, i, mt.end()
            i = self.bosluk(i)
            if self.m[i] != ":":
                raise ValueError("':' beklenirdi @%d" % i)
            v, i = self.deger(i + 1)
            ogeler.append((anahtar, tirnak, ks, v))
            i = self.bosluk(i)
            if self.m[i] == ",":
                i += 1
            elif self.m[i] != "}":
                raise ValueError("',' ya da '}' beklenirdi @%d" % i)

    def dizi(self, i):
        s = i
        i += 1
        ogeler = []
        while True:
            i = self.bosluk(i)
            if self.m[i] == "]":
                return {"tur": "arr", "s": s, "e": i + 1, "ogeler": ogeler}, i + 1
            v, i = self.deger(i)
            ogeler.append(v)
            i = self.bosluk(i)
            if self.m[i] == ",":
                i += 1
            elif self.m[i] != "]":
                raise ValueError("',' ya da ']' beklenirdi @%d" % i)


def kokler(metin):
    """`window.AD = <değer>` atamalarını ayrıştırır (yorum/dizge içindekileri atlar)."""
    a = Ayristirici(metin)
    sonuc, hatalar, i, n = [], [], 0, len(metin)
    desen = re.compile(r"window\.([A-Za-z0-9_]+)\s*=\s*")
    while i < n:
        c = metin[i]
        if metin.startswith("//", i) or metin.startswith("/*", i):
            i = a.bosluk(i)
            continue
        if c in "\"'`":
            j = i + 1
            while j < n and metin[j] != c:
                j += 2 if metin[j] == "\\" else 1
            i = j + 1
            continue
        mt = desen.match(metin, i) if c == "w" else None
        if mt:
            try:
                v, son = a.deger(mt.end())
                sonuc.append((mt.group(1), v))
                i = son
                continue
            except Exception as h:  # ayrıştırılamayan atama — kayıt burada ise seçici 0 tutar ve basılır
                hatalar.append("%s: %s" % (mt.group(1), h))
        i += 1
    return sonuc, hatalar


def gez(dugum, cagri, ust=None):
    if dugum["tur"] == "obj":
        cagri(dugum)
        for _, _, _, v in dugum["ogeler"]:
            gez(v, cagri)
    elif dugum["tur"] == "arr":
        for v in dugum["ogeler"]:
            gez(v, cagri)


def alan(obj, ad):
    for anahtar, tirnak, ks, v in obj["ogeler"]:
        if anahtar == ad:
            return anahtar, tirnak, ks, v
    return None


def yol_coz(yol):
    parca = []
    for p in yol.split("."):
        mt = re.match(r"^([^\[]+)((\[\d+\])*)$", p)
        parca.append(mt.group(1))
        parca += [int(x) for x in re.findall(r"\[(\d+)\]", mt.group(2))]
    return parca


def kodla(s):
    return json.dumps(s, ensure_ascii=False)


_NRM = str.maketrans({"’": "'", "‘": "'", "ʼ": "'", "`": "'", "´": "'", "“": '"', "”": '"', "„": '"'})


def nrm(s):
    """Kesme/tırnak varyantlarını tekler — UZUNLUK KORUNUR (tek karakter → tek karakter), yani
    normalleştirilmiş metinde bulunan konum özgün metinde de geçerlidir."""
    return s.translate(_NRM)


def alt_degis(eski, bul, koy):
    n = nrm(eski).count(nrm(bul))
    if n != 1:
        return None, n
    i = nrm(eski).index(nrm(bul))
    return eski[:i] + koy + eski[i + len(bul):], 1


def isle(metin, koks, r):
    bulunan = []

    def cagri(o):
        for k, v in r["kayit"].items():
            onek = k.endswith("^")
            a = alan(o, k[:-1] if onek else k)
            if not a or a[3]["tur"] != "str":
                return
            d = nrm(a[3]["deger"])
            if (not d.startswith(nrm(v))) if onek else (d != nrm(v)):
                return
        bulunan.append(o)
    for _, v in koks:
        gez(v, cagri)
    if len(bulunan) != 1:
        return None, "kayıt %d kez bulundu" % len(bulunan)
    dugum, sahip, sahip_anahtar = bulunan[0], None, None
    parcalar = yol_coz(r["yol"])
    son_obj, son_anahtar = bulunan[0], None
    for p in parcalar:
        if isinstance(p, int):
            if dugum["tur"] != "arr" or p >= len(dugum["ogeler"]):
                return None, "yol dizi değil ya da sınır dışı: %s" % r["yol"]
            dugum = dugum["ogeler"][p]
        else:
            if dugum["tur"] != "obj":
                return None, "yol nesne değil: %s" % r["yol"]
            a = alan(dugum, p)
            if not a:
                return None, "alan yok: %s" % p
            son_obj, son_anahtar = dugum, a
            dugum = a[3]
    degisim = []
    if r.get("bosalt"):
        if dugum["tur"] != "arr":
            return None, "bosalt: yol dizi değil"
        sart = r.get("sart", "bulunamad")
        if not dugum["ogeler"] or not all(x["tur"] == "str" and nrm(x["deger"]).lower().startswith(sart) for x in dugum["ogeler"]):
            return None, "bosalt: dizinin her öğesi '%s' ile başlamıyor" % sart
        eski_metin = json.dumps([x.get("deger") for x in dugum["ogeler"]], ensure_ascii=False)
        degisim.append((dugum["s"], dugum["e"], "[]"))
    else:
        if dugum["tur"] != "str":
            return None, "yol dizge değil"
        eski = dugum["deger"]
        eski_metin = eski
        if "deger" in r:
            yeni = r["deger"]
        else:
            ciftler = r.get("cift") or [[r["eski"], r["yeni"]]]
            yeni = eski
            for bul, koy in ciftler:
                yeni, kac = alt_degis(yeni, bul, koy)
                if yeni is None:
                    return None, "eski alt dizge %d kez geçiyor: %s" % (kac, bul[:60])
            # boşluk düzeltmesi YAPILMAZ: alanın başka yerindeki kasıtlı çift boşluk/satır sonu korunur;
            # silinen cümle kendi önündeki boşlukla birlikte `eski`ye yazılır.
        if yeni == eski:
            return None, "değişiklik yok"
        degisim.append((dugum["s"], dugum["e"], kodla(yeni)))
    if r.get("not"):
        # hedef nesne: son alanı taşıyan nesne; son kap dizi ise dizinin sahibi
        anahtar, tirnak, ks, v = son_anahtar
        ic = "ic_not_" + re.sub(r"\W", "_", anahtar)
        mevcut = alan(son_obj, ic)
        if mevcut and mevcut[3]["tur"] == "str":
            degisim.append((mevcut[3]["s"], mevcut[3]["e"], kodla(mevcut[3]["deger"] + " · " + r["not"])))
        elif mevcut:
            return None, "%s dizge değil" % ic
        else:
            kstil = ('"%s": ' % ic) if tirnak else ("%s:" % ic)
            degisim.append((v["e"], v["e"], ", " + kstil + kodla(r["not"])))
    return degisim, eski_metin


def main():
    a = sys.argv[1:]
    uygula, goster = "--uygula" in a, "--goster" in a
    Y = json.load(io.open(os.path.join(KOK, a[0]), encoding="utf-8"))
    dosyaya = collections.OrderedDict()
    for i, r in enumerate(Y["kayitlar"]):
        r["_no"] = i
        dosyaya.setdefault(r["dosya"], []).append(r)
    say, hata = collections.Counter(), 0
    for dosya, rs in dosyaya.items():
        yol = os.path.join(KOK, "data", dosya)
        metin = io.open(yol, encoding="utf-8", newline="").read()
        koks, ah = kokler(metin)
        if ah:
            print("  ⚠ %s ayrıştırılamayan atama: %s" % (dosya, "; ".join(ah)))
        tum = []
        for r in rs:
            sonuc, bilgi = isle(metin, koks, r)
            if sonuc is None:
                hata += 1
                print("  ✗ #%d %s %s [%s]: %s" % (r["_no"], dosya, json.dumps(r["kayit"], ensure_ascii=False)[:90], r["yol"], bilgi))
                continue
            say["tamam"] += 1
            tum.extend(sonuc)
            if goster:
                print("  · #%d %s [%s]\n      ÖNCE  %s\n      SONRA %s" % (r["_no"], dosya, r["yol"], str(bilgi)[:400],
                      ("[]" if r.get("bosalt") else [c for c in sonuc if c[0] != c[1]][0][2][:400])))
        # çakışma sınavı: aralıklar örtüşmemeli (aynı noktaya ekleme serbest ama sıra korunur)
        tum.sort(key=lambda d: (d[0], d[1]))
        for x, y in zip(tum, tum[1:]):
            if y[0] < x[1]:
                print("  ✗ %s: örtüşen değişiklik @%d-%d / @%d-%d" % (dosya, x[0], x[1], y[0], y[1]))
                hata += 1
                tum = []
                break
        yeni = metin
        for s, e, t in sorted(tum, key=lambda d: (d[0], d[1]), reverse=True):
            yeni = yeni[:s] + t + yeni[e:]
        if yeni != metin:
            say["dosya"] += 1
            if uygula:
                io.open(yol, "w", encoding="utf-8", newline="").write(yeni)
    print(("UYGULANDI" if uygula else "KURU KOŞU"), dict(say), "· hata", hata, "· kayıt", len(Y["kayitlar"]))
    sys.exit(1 if hata else 0)


if __name__ == "__main__":
    main()
