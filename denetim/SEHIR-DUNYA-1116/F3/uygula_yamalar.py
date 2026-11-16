# -*- coding: utf-8 -*-
"""F3 YAMA UYGULAYICI (LAB, 17 Kasım 2026) — KASA'nın tek komutu:  py denetim/SEHIR-DUNYA-1116/F3/uygula_yamalar.py [--uygula]
Varsayılan DRY-RUN (hiçbir dosya yazılmaz): her yama için dosya bulunur, kayıt BULUNUR, eski değer DOĞRULANIR, yeni metin hesaplanır, rapor basılır.
--uygula : yalnız TAM tek eşleşmeli ve eski değeri tutan yamaları yazar. Eski değer tutmazsa / kayıt bulunamazsa / birden çok eşleşirse ATLAR ve raporlar (hiçbir şey tahmin edilmez).
Yamalar: yamalar.json (aynı klasör). Her yama: id, tur (kronoloji | sehir_olay), dosya, anahtar, degisiklik[{alan, eski, yeni}], kaynak, tanik, gerekce.
 - kronoloji : anahtar {b_oneki, t_eski}. Madde, dosyada `b` metninin başlangıcı (b_oneki, tam eşleşme, tek) ile bulunur; aynı kayıttaki t anahtarı t_eski değerine eşitse değiştirilir.
 - sehir_olay: anahtar {sehir_id, olay_t, b_oneki}. data/sehir_tarihce_*.js içinde `"id": "<sehir_id>"` şehir bloğu, onun içinde `"b": "<b_oneki…` olay kaydı.
 t dışındaki bir alan (gun/kesinlik) kayıtta YOKSA eklenmez, rapor satırında 'EKLENMEDİ' yazılır (t/gun doğru kalır). Aynı kayda iki yama gelirse ikincisi 'eski değer tutmuyor/0 kez' ile ATLANIR (yinelenen yamalar zararsız).
Satır sonu (CRLF/LF) dosya olduğu gibi korunur (newline=''). Türkçe metinde sed/toplu replace YOK: yalnız Python str işlemi, tek eşleşme doğrulamasıyla.
Sonra: py arac/denetle.py  (ve gerekirse py arac/push_kapisi.py ...). Şehir tarihçesi dosyaları için: py arac/sehir_tarihce.py denetle data/<dosya>.js"""
import json, os, re, sys, io
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8")
KOK = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", "..", ".."))
UYGULA = "--uygula" in sys.argv
for _a in sys.argv[1:]:
    if _a.startswith("--kok="):   # sınama için: başka bir kök dizin (örn. geçici kopya); varsayılan depo kökü
        KOK = os.path.abspath(_a[len("--kok="):])
YAMALAR = json.load(open(os.path.join(os.path.dirname(__file__), "yamalar.json"), encoding="utf-8"))
def oku(yol):
    with open(os.path.join(KOK, yol), encoding="utf-8", newline="") as f:
        return f.read()
def yaz(yol, s):
    with open(os.path.join(KOK, yol), "w", encoding="utf-8", newline="") as f:
        f.write(s)
def kayit_sinir(t, p):
    """p konumunu içeren en dar { ... } kaydı (basit dengeleme; satır içi dizeler dikkate alınmaz — küçük bir risk, doğrulama t_eski ile yapılır)."""
    a = p
    derin = 0
    while a > 0:
        a -= 1
        if t[a] == "}": derin += 1
        elif t[a] == "{":
            if derin == 0: break
            derin -= 1
    e = p
    derin = 0
    while e < len(t):
        if t[e] == "{": derin += 1
        elif t[e] == "}":
            if derin == 0: break
            derin -= 1
        e += 1
    return a, e + 1
def gun_no(s):
    m = re.match(r"^(-?)(\d{1,6})-(\d\d)-(\d\d)$", s)
    if not m: return 0.0
    y = int(m.group(2)) * (-1 if m.group(1) else 1)
    return y * 365.2425 + (int(m.group(3)) - 1) * 30.44 + int(m.group(4))
def dizi_sonu(t, a):
    """t[a] == '[' ; karşılık gelen ']' konumundan SONRAKİ indeksi döner (dizeleri atlar)."""
    derin = 0; i = a; ic = False
    while i < len(t):
        c = t[i]
        if ic:
            if c == "\\": i += 1
            elif c == '"': ic = False
        else:
            if c == '"': ic = True
            elif c == "[": derin += 1
            elif c == "]":
                derin -= 1
                if derin == 0: return i + 1
        i += 1
    return len(t)
def anahtar_re(alan):
    return r'(?<![\w"\'])(["\']?)' + re.escape(alan) + r'\1(\s*:\s*)(["\'])((?:\\.|(?!\3).)*)\3'
def kayitta_degistir(rec, degisiklikler, bilgi):
    """rec içinde her değişikliği uygula; (yeni_rec, hata) döner."""
    for d in degisiklikler:
        alan, eski, yeni = d["alan"], d.get("eski"), d["yeni"]
        ms = list(re.finditer(anahtar_re(alan), rec))
        if len(ms) > 1:
            return None, "alan '%s' kayıtta %d kez" % (alan, len(ms))
        if ms:
            m = ms[0]
            if eski is not None and m.group(4) != eski:
                return None, "alan '%s' eski değer tutmuyor (kayıtta %r, yamada %r)" % (alan, m.group(4), eski)
            bilgi.append("%s: %r → %r" % (alan, m.group(4), yeni))
            rec = rec[:m.start(4)] + yeni + rec[m.end(4):]
        else:
            if alan == "t":
                return None, "t anahtarı kayıtta yok"
            # t dışı alan (gun/kesinlik) kayıtta yoksa EKLENMEZ: yalnız not edilir (t/gun doğru kalır, eksik alan varsayılan davranır)
            bilgi.append("%s: kayıtta yok, EKLENMEDİ (istenen yeni değer %r)" % (alan, yeni))
    return rec, None
def isle(y, metinler):
    dosya = y["dosya"]
    if dosya not in metinler:
        if not os.path.exists(os.path.join(KOK, dosya)):
            return "ATLA", "dosya yok: " + dosya, None
        metinler[dosya] = oku(dosya)
    t = metinler[dosya]
    a = y["anahtar"]
    bil = []
    if y["tur"] == "sehir_olay":
        sid = re.escape(a["sehir_id"])
        ms = list(re.finditer(r'"id":\s*"' + sid + r'"', t))
        if len(ms) != 1:
            return "ATLA", "şehir id %d kez" % len(ms), None
        bas = ms[0].start()
        sonraki = re.search(r'\n  \{\n|\n\{\n|\n  "id":', t[bas + 10:])
        son = len(t) if not sonraki else bas + 10 + sonraki.start()
        blok = t[bas:son]
        bs = [m.start() for m in re.finditer(re.escape('"b": "' + a["b_oneki"]), blok)]
        bs += [m.start() for m in re.finditer(re.escape('"b":"' + a["b_oneki"]), blok)]
        if len(bs) != 1:
            return "ATLA", "olay b-öneki %d kez" % len(bs), None
        ra, re_ = kayit_sinir(blok, bs[0])
        rec = blok[ra:re_]
        # t eski doğrula
        mt = re.search(anahtar_re("t"), rec)
        if not mt or mt.group(4) != a["olay_t"]:
            return "ATLA", "olay t eski değer tutmuyor (kayıtta %r, yamada %r)" % (mt.group(4) if mt else None, a["olay_t"]), None
        yeni, hata = kayitta_degistir(rec, y["degisiklik"], bil)
        if hata: return "ATLA", hata, None
        yeni_blok = blok[:ra] + yeni + blok[re_:]
        # sahip[] sınırı olay tarihiyle birlikte kayar (Değişmez 2'nin şehir eşi: her sahiplik değişimi ±30 gün içinde olay ister)
        dt = [d for d in y["degisiklik"] if d["alan"] == "t"]
        if dt:
            eski_t, yeni_t = dt[0]["eski"], dt[0]["yeni"]
            if re.search(r'"ilk":\s*\{[^{}]*?"t":\s*"' + re.escape(eski_t) + '"', yeni_blok):
                return "ATLA", "olay tarihi şehrin ilk.t değeriyle AYNI (ilk.t ve sahip[0].f birlikte taşınmalı): elle", None
            sb = yeni_blok.find('"sahip"')
            if sb >= 0:
                ab = yeni_blok.find("[", sb)
                ae = dizi_sonu(yeni_blok, ab)
                dizi = yeni_blok[ab:ae]
                tarihler = re.findall(r'"(?:f|t)":\s*"(-?\d{4,6}-\d\d-\d\d)"', dizi)
                esit = [x for x in tarihler if x == eski_t]
                yakin = [x for x in tarihler if x != eski_t and abs(gun_no(x) - gun_no(eski_t)) <= 30]
                if yakin:
                    return "ATLA", "sahip sınırı eski olay tarihine YAKIN ama eşit değil (%s): sınırı elle birlikte taşı" % ",".join(sorted(set(yakin))), None
                if esit:
                    yeni_dizi = re.sub(r'("(?:f|t)":\s*")' + re.escape(eski_t) + '"', lambda m: m.group(1) + yeni_t + '"', dizi)
                    # sıfır/ters uzunluk kontrolü: her dönemde f < t
                    for mf in re.finditer(r'"f":\s*"(-?\d{4,6}-\d\d-\d\d)"\s*,\s*"t":\s*"(-?\d{4,6}-\d\d-\d\d)"', yeni_dizi):
                        if gun_no(mf.group(1)) >= gun_no(mf.group(2)):
                            return "ATLA", "sahip sınırı kayınca dönem sıfır/ters uzunlukta kalır (%s → %s): elle" % (mf.group(1), mf.group(2)), None
                    yeni_blok = yeni_blok[:ab] + yeni_dizi + yeni_blok[ae:]
                    bil.append("sahip[] sınırı %s → %s (%d tarih)" % (eski_t, yeni_t, len(esit)))
        return "UYGULANIR", "; ".join(bil), t[:bas] + yeni_blok + t[son:]
    # kronoloji
    bs = [m.start() for m in re.finditer(re.escape(a["b_oneki"]), t)]
    adaylar = []
    for p in bs:
        ra, re_ = kayit_sinir(t, p)
        rec = t[ra:re_]
        # b anahtarının ilk değeri bu önekle başlamalı (alt dizgi eşleşmesi başka alan olabilir)
        if not re.search(r'(["\']?)b\1\s*:\s*["\']' + re.escape(a["b_oneki"]), rec):
            continue
        mt = re.search(anahtar_re("t"), rec)
        if mt and mt.group(4) == a["t_eski"]:
            adaylar.append((ra, re_))
    adaylar = sorted(set(adaylar))
    if len(adaylar) != 1:
        return "ATLA", "kayıt %d kez (b-öneki + t_eski)" % len(adaylar), None
    ra, re_ = adaylar[0]
    yeni, hata = kayitta_degistir(t[ra:re_], y["degisiklik"], bil)
    if hata: return "ATLA", hata, None
    return "UYGULANIR", "; ".join(bil), t[:ra] + yeni + t[re_:]
metinler = {}
sayac = {"UYGULANIR": 0, "ATLA": 0}
atlananlar = []
degisen = set()
for y in YAMALAR:
    d, msj, yeni_t = isle(y, metinler)
    sayac[d] += 1
    print("[%s] %s  %s  %s" % (d, y["id"], y["dosya"], msj))
    if d == "UYGULANIR" and yeni_t is not None:
        metinler[y["dosya"]] = yeni_t   # sonraki yamalar güncel metinle çalışır
        degisen.add(y["dosya"])
    else:
        atlananlar.append(y["id"])
print("\nÖZET: uygulanır %d · atlanır %d · değişen dosya %d  (%s)" % (sayac["UYGULANIR"], sayac["ATLA"], len(degisen), "YAZILDI" if UYGULA else "DRY-RUN: dosyaya yazılmadı; --uygula ile yazılır"))
if atlananlar: print("ATLANAN yamalar:", ", ".join(atlananlar))
if UYGULA:
    for d in sorted(degisen):
        yaz(d, metinler[d])
    print("\nSONRA: py arac/denetle.py  ·  şehir tarihçesi dosyaları için: py arac/sehir_tarihce.py denetle data/<dosya>.js  ·  sonra py arac/push_kapisi.py --kim \"<AD>\"")
else:
    print("\nDRY-RUN bitti. Uygulamak için: py denetim/SEHIR-DUNYA-1116/F3/uygula_yamalar.py --uygula")
