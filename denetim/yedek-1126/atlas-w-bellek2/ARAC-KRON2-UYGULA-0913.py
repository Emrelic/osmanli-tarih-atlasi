# -*- coding: utf-8 -*-
"""PAKET-KRON2 — kronoloji maddesi düzenleme uygulayıcısı (iç not taşıma + kaynak düzeltmesi).

py denetim/ARAC-KRON2-UYGULA-0913.py denetim/KRON2-DUZENLE-0913.json [--uygula]

`arac/ic_not_uygula.py`nin iki kör noktasını kapatır (PAKET-A3 B8):
  · anahtar hem `d:"…"` hem JSON biçimli `"d": "…"` olabilir
  · madde `b` BAŞLIĞIYLA bulunur, eski metin yalnız O NESNENİN içinde aranır
    (aynı kalıp — "⚠️ Kaynak yıl verir, gün vermez; §4 gereği YYYY-01-01." — onlarca
     maddede geçer; dosya çapında tekillik şartı onları sonsuza dek atlatırdı)

İşlem türleri (kayıt başına `islem`):
  degistir  alan içinde `eski` → `yeni` (eski, çözülmüş metinde TAM BİR KEZ geçmeli)
            `not` varsa `ic_not_<alan>` alanına EKLENİR (varsa " · " ile sona)
  ata       alanın değeri `deger` olur (alan yoksa b'den sonra eklenir); eski değer
            `not_eski:true` ise ic_not_<not_alan|alan>'a taşınır
  not_ekle  yalnız ic_not_<alan>'a `not` eklenir
  gun_ekle  madde `gun` taşımıyorsa b'den sonra `gun:"deger"` eklenir (varsa ATLANIR, sayılır)
Kurallar: nesne bulunamazsa / eski 0 ya da 2+ kez geçerse kayıt ATLANIR ve basılır (sessiz
atlama yok). --uygula yoksa KURU KOŞU. Dosyalar UTF-8, satır sonları korunur.
"""
import io, json, os, re, sys, collections
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8")
KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))


def tokenlar(metin):
    """String literal aralıkları ve {…} nesne aralıkları (string/yorum içini atlar)."""
    dizgeler, nesneler, yigin = [], [], []
    i, n = 0, len(metin)
    while i < n:
        c = metin[i]
        if c in "\"'`":
            j = i + 1
            while j < n and metin[j] != c:
                j += 2 if metin[j] == "\\" else 1
            dizgeler.append((i, j + 1))
            i = j + 1
            continue
        if c == "/" and i + 1 < n and metin[i + 1] == "/":
            j = metin.find("\n", i)
            i = n if j < 0 else j
            continue
        if c == "/" and i + 1 < n and metin[i + 1] == "*":
            j = metin.find("*/", i + 2)
            i = n if j < 0 else j + 2
            continue
        if c == "{":
            yigin.append(i)
        elif c == "}" and yigin:
            nesneler.append((yigin.pop(), i + 1))
        i += 1
    return dizgeler, nesneler


def coz(ham):
    if ham[0] == "'":
        ham = '"' + ham[1:-1].replace('\\\'', "'").replace('"', '\\"') + '"'
    return json.loads(ham)


def kodla(s):
    return json.dumps(s, ensure_ascii=False)


def alanlar(metin, bas, son, dizgeler):
    """Nesne [bas,son) içinde DOĞRUDAN (derinlik 1) anahtar → (anahtar_bas, dizge_bas, dizge_son, tirnakli)."""
    sonuc = {}
    ic = [d for d in dizgeler if bas < d[0] < son]
    icset = {d[0]: d for d in ic}
    _, nes = tokenlar(metin[bas:son])
    alt = [(a + bas, b + bas) for a, b in nes if a != 0]
    for m in re.finditer(r'(?:"([A-Za-z_]\w*)"|(?<![\w"])([A-Za-z_]\w*))\s*:\s*(?=["\'])', metin[bas:son]):
        kb = bas + m.start()
        # tırnaklı anahtar ("d": …) kendisi bir dizge literalidir — onun BAŞLANGICI serbest
        if any((a < kb < b) or (a == kb and not m.group(1)) for a, b in ic) or any(a < kb < b for a, b in alt):
            continue
        ds = bas + m.end()
        if ds not in icset:
            continue
        ad = m.group(1) or m.group(2)
        if ad not in sonuc:
            sonuc[ad] = (kb, ds, icset[ds][1], bool(m.group(1)))
    return sonuc


def nesne_bul(metin, baslik):
    dizgeler, nesneler = tokenlar(metin)
    adaylar = []
    for a, b in dizgeler:
        try:
            # başlık ÖNEKİ ile eşleşir (tekillik aşağıda sayılır; 2+ ise kayıt atlanır)
            if not coz(metin[a:b]).startswith(baslik):
                continue
        except Exception:
            continue
        kap = [(x, y) for x, y in nesneler if x < a < y]
        if not kap:
            continue
        x, y = min(kap, key=lambda p: p[1] - p[0])
        al = alanlar(metin, x, y, dizgeler)
        if "b" in al and al["b"][1] == a and "t" in al:
            adaylar.append((x, y))
    return adaylar, dizgeler


def uygula_kayit(metin, r):
    adaylar, dizgeler = nesne_bul(metin, r["b"])
    if r.get("t"):
        adaylar = [p for p in adaylar
                   if coz(metin[alanlar(metin, p[0], p[1], dizgeler)["t"][1]:alanlar(metin, p[0], p[1], dizgeler)["t"][2]]) == r["t"]]
    if len(adaylar) != 1:
        return None, f"nesne {len(adaylar)} kez bulundu"
    x, y = adaylar[0]
    al = alanlar(metin, x, y, dizgeler)
    tirnakli = al["b"][3]
    anahtar = (lambda k: f'"{k}": ') if tirnakli else (lambda k: f"{k}:")
    islem = r["islem"]
    alan = r.get("alan")
    degisiklik = []  # (bas, son, yeni_metin)
    notlar = []      # (hedef_alan, metin)

    if islem == "gun_ekle":
        if "gun" in al:
            return metin, "ATLANDI-gun-var"
        degisiklik.append((al["b"][2], al["b"][2], ", " + anahtar("gun") + kodla(r["deger"])))
    elif islem in ("degistir", "ata"):
        if alan not in al:
            if islem == "ata" and r.get("yoksa_ekle"):
                degisiklik.append((al["b"][2], al["b"][2], ", " + anahtar(alan) + kodla(r["deger"])))
            else:
                return None, f"alan yok: {alan}"
        else:
            kb, ds, dson, _ = al[alan]
            eski_deger = coz(metin[ds:dson])
            if islem == "degistir":
                kac = eski_deger.count(r["eski"])
                if kac != 1:
                    return None, f"eski metin {kac} kez geçiyor"
                yeni_deger = eski_deger.replace(r["eski"], r["yeni"])
                yeni_deger = re.sub(r"  +", " ", yeni_deger).strip()
            else:
                yeni_deger = r["deger"]
                if r.get("not_eski"):
                    notlar.append((r.get("not_alan", alan), "eski " + alan + ": " + eski_deger))
            degisiklik.append((ds, dson, kodla(yeni_deger)))
    elif islem != "not_ekle":
        return None, "bilinmeyen islem"
    if r.get("not"):
        notlar.append((r.get("not_alan", alan), r["not"]))
    # 🔴 13 Eyl düzeltmesi: aynı hedefe giden notlar TEK değişikliğe birleşir. Önceki sürüm
    # ikisini ayrı yazıyordu → alan varsa aynı aralık iki kez değişip dosya BOZULDU (ek7),
    # alan yoksa aynı anahtar iki kez eklendi (JS'de ilk not SESSİZCE ezilir).
    birlesik = collections.OrderedDict()
    for hedef, nt in notlar:
        birlesik[hedef] = (birlesik[hedef] + " · " + nt) if hedef in birlesik else nt
    for hedef, nt in birlesik.items():
        ic = "ic_not_" + hedef
        if ic in al:
            kb, ds, dson, _ = al[ic]
            eski_not = coz(metin[ds:dson])
            degisiklik.append((ds, dson, kodla(eski_not + " · " + nt)))
        else:
            dayanak = al.get(hedef) or al["b"]
            yer = dayanak[2]
            # aynı noktaya başka ekleme varsa sıraya koy
            degisiklik.append((yer, yer, ", " + anahtar(ic) + kodla(nt)))
    # sondan başa uygula (konumlar kaymasın)
    for bas, son, yeni in sorted(degisiklik, key=lambda d: (d[0], d[1]), reverse=True):
        metin = metin[:bas] + yeni + metin[son:]
    return metin, "tamam"


def main():
    a = sys.argv[1:]
    uygula = "--uygula" in a
    Y = json.load(io.open(os.path.join(KOK, a[0]), encoding="utf-8"))
    dosyaya = collections.OrderedDict()
    for i, r in enumerate(Y["kayitlar"]):
        r["_no"] = i
        dosyaya.setdefault(r["dosya"], []).append(r)
    say = collections.Counter()
    for dosya, rs in dosyaya.items():
        yol = os.path.join(KOK, "data", dosya)
        ham = io.open(yol, encoding="utf-8", newline="").read()
        metin = ham
        for r in rs:
            yeni, durum = uygula_kayit(metin, r)
            say[durum if yeni is not None else "HATA"] += 1
            if yeni is None:
                print(f"  ✗ #{r['_no']} {dosya} «{r['b'][:60]}» [{r.get('islem')}/{r.get('alan')}]: {durum}")
                continue
            if durum != "tamam":
                print(f"  · #{r['_no']} {dosya} «{r['b'][:60]}»: {durum}")
            metin = yeni
        if metin != ham:
            say["dosya_degisti"] += 1
            if uygula:
                io.open(yol, "w", encoding="utf-8", newline="").write(metin)
    print(("UYGULANDI" if uygula else "KURU KOŞU"), dict(say), "· kayıt", len(Y["kayitlar"]))


if __name__ == "__main__":
    main()
