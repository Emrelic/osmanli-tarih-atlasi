"""KUNYE-ANADOLU-0081 · devam — BALKAN DEVLET STATÜSÜ / KÜNYE ailesi (koordinatör M-5357 civarı, 28 Eyl 2026).

    py denetim/KUNYE-ANADOLU-0081-uygula2.py                 KURU KOŞU (yazmaz)
    py denetim/KUNYE-ANADOLU-0081-uygula2.py --uygula        data/ dosyalarına yazar
         --grup G1,G2,G4,G5A,G5B,G5C                          yalnız bu gruplar (bağımlılık aşağıda)
         --goster                                             değişen her kaydın eski/yeni zincirini basar

Gruplar (gerekçe + TDV cümlesi: denetim/KUNYE-ANADOLU-0081-2.md):
    G1   ① `s:"sirbistan"` (harita anahtarı; künyesi sirbistan-nemanjic, t:1402-01-01) 1402'yi aşan
         dönemleri 1402-01-01'de ARDIL künyeye (`sirp-despotlugu`) böler — §3.5 sınıf ③. 9 nokta.
         Podgorica HARİÇ (ardıl Zeta mı Despotluk mu — kaynak bulunamadı).
    G2   ② Priştine: Musa Çelebi 1412 → 1413-07-05 · doğrudan Osmanlı 1439-08-27 → 1444-08-01   [G1 ister]
    G4   ④ Alacahisar: 1444-08-01→1454 tek parça despot → despot · OSMANLI (Varna 1444-11-10 →
         Fâtih'in cülusu 1451-02-18) · despot
    G5A  ⑤ Sırp Despotluğu TÂBİ: bütün `sirp-despotlugu` s: pencereleri → v: (kid sirp-despotlugu) [G1 ister]
         Belgrad HARİÇ (1403-1427 Macar vasallığı, ayrı soru).
    G5B  ⑤ Bosna TÂBİ: `bosna` s: pencerelerinin 1428-01-01 → min(dönem sonu, 1463-06-01) kısmı → v: (kid bosna-kralligi)
    G5C  ⑤ Sırbistan 1389-06-15 → 1402-01-01 TÂBİ (Lazareviç/Brankoviç toprakları) — G5A'nın 1402'deki
         başlangıç sıçramasını giderir. ⚠️ düşük güven: Brankoviç'in vasallık günü okunmadı.
    ③ Vidin — DEĞİŞİKLİK YOK: Konstantin'in künyesi yok, ele geçirme günü kaynakta yok (rapor).

Atlas sözleşmesi (ölçüldü: Varad · Tokaj · Semendire): s:, d:, v: pencereleri zaman çizgisini
ÖRTÜŞMEDEN böler; tâbi dönem s:'nin YERİNE v: olarak yazılır.
SINAV: her hedef kayıt için yeni s/d/v dizileri Python'da kurulur; yazılan metin node ile
ayrıştırılıp bu dizilere BİREBİR eşit olmalı; öteki kayıtlar ve alanlar değişmemeli; her kayıtta
s ∪ d ∪ v pencereleri örtüşmemeli.
"""
import io
import json
import os
import subprocess
import sys
import tempfile

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.stdout.reconfigure(encoding="utf-8", errors="replace")
UYGULA = "--uygula" in sys.argv
GOSTER = "--goster" in sys.argv
TUM = ["G1", "G2", "G4", "G5A", "G5B", "G5C"]
GRUP = set(TUM)
if "--grup" in sys.argv:
    GRUP = set(sys.argv[sys.argv.index("--grup") + 1].upper().split(","))
for g, gerek in (("G2", "G1"), ("G5A", "G1")):
    if g in GRUP and gerek not in GRUP:
        print("🔴 %s, %s olmadan uygulanamaz — DURDU" % (g, gerek))
        sys.exit(2)
TAG = " · KUNYE-ANADOLU-0081"

# ── hedef kayıtlar: (dosya, ad) ───────────────────────────────────────────
G1_AD = ["Çaçak", "Kragujevac", "Semendire", "Yagodina (Jagodina)", "Belgrad", "Alacahisar (Kruševac)",
         "Priştine", "Prizren", "Yenipazar (Novi Pazar)"]
SIRP_TABI = ["Çaçak", "Kragujevac", "Semendire", "Yagodina (Jagodina)", "Alacahisar (Kruševac)", "Priştine",
             "Prizren", "Yenipazar (Novi Pazar)", "Niş", "Şehirköy (Pirot)"]
BOSNA = ["Livno (İhlevne)", "Banaluka", "Yayça (Jajce)", "Travnik", "Koniçe (Konjic)", "Visoko", "Saraybosna",
         "Srebrenik", "Tuzla (Bosna)", "Foça (Foča)", "İzvornik (Zvornik)", "Vişegrad", "Mostar", "Trebinye"]
DOSYA = {"Çaçak": "yerlesimler.js", "Kragujevac": "yerlesimler.js", "Semendire": "yerlesimler.js",
         "Yagodina (Jagodina)": "yerlesimler_ek29.js", "Belgrad": "yerlesimler.js",
         "Alacahisar (Kruševac)": "yerlesimler_serhat.js", "Priştine": "yerlesimler.js",
         "Prizren": "yerlesimler_ek_bosluk.js", "Yenipazar (Novi Pazar)": "yerlesimler.js",
         "Niş": "yerlesimler.js", "Şehirköy (Pirot)": "yerlesimler_serhat.js",
         "Livno (İhlevne)": "yerlesimler.js", "Banaluka": "yerlesimler.js", "Yayça (Jajce)": "yerlesimler.js",
         "Travnik": "yerlesimler.js", "Koniçe (Konjic)": "yerlesimler_ek2.js", "Visoko": "yerlesimler_ek2.js",
         "Saraybosna": "yerlesimler.js", "Srebrenik": "yerlesimler.js", "Tuzla (Bosna)": "yerlesimler_seyrek.js",
         "Foça (Foča)": "yerlesimler.js", "İzvornik (Zvornik)": "yerlesimler.js", "Vişegrad": "yerlesimler_seyrek.js",
         "Mostar": "yerlesimler.js", "Trebinye": "yerlesimler_seyrek.js"}

K_G1 = ("§3.5 sınıf ③ ardıl künye: 'sirbistan' harita anahtarının künyesi sirbistan-nemanjic 1402-01-01'de "
        "bitiyor; ardılı sirp-despotlugu (1402-01-01 → 1459-06-20). TDV sirbistan: 'Kuzey Sırbistan, Lazar’ın "
        "oğlu Stefan Lazareviç (1389-1427) ve Curac Brankoviç’in (1427-1456) idaresi altında varlığını sürdürdü'" + TAG)
K_SIRP_V = ("TDV sirbistan: 'Bu tarihten sonra Sırp despotları … Osmanlı vasalı haline geldiler' · 'İlk dönemde "
            "Osmanlı vasalı haline gelen Sırp Despotluğu altmış yıl kadar sürdü'" + TAG + " ⑤")
K_BOSNA_V = ("TDV bosna-hersek: 'Bosna kralları … Osmanlılar tarafından haraca bağlandı (1428-1429)' · "
             "'Stjepan Tomaś (1443-1461) … Osmanlılar’a haraç ödemeyi de sürdüren' · 'Tomašević (1461-1463) … haraç "
             "ödemeyi reddedince … tâbi bir hükümdar olmaktan çıktığı anlamına geldiğinden … fethini tamamladı' — "
             "başlangıç YIL (1428) · bitiş: kaydın mevcut dönem sonu, en geç 1463-06-01 (red günü kaynakta yok)" + TAG + " ⑤")
K_LAZAR_V = ("TDV sirbistan: '1371 Çirmen ve 1389 Kosova savaşları ile … Sırplar, Osmanlı Devleti’ne vergi ödemeyi "
             "kabul etmek zorunda kaldılar' · TDV pristine: 'Yıldırım Bayezid, Kosova savaşından (Haziran 1389) sonra "
             "Priştine topraklarını … vasalı haline gelen Despot Stefan Lazareviç’e bıraktı' — gün: Kosova Savaşı "
             "(olaylar.js 1389-06-15)" + TAG + " ⑤ G5C")


def P(f, t, **kw):
    d = {"f": f, "t": t}
    d.update(kw)
    return d


def bol(L, gun, eski, yeni, kaynak):
    """s: listesinde `eski` kimlikli ve gun'ü içeren dönemi ikiye böler; gun'den sonra başlayanı yeniden adlandırır."""
    out = []
    for p in L:
        if p.get("d") == eski and p["f"] < gun < p["t"]:
            a = dict(p)
            a["t"] = gun
            out.append(a)
            out.append(P(gun, p["t"], d=yeni, kaynak=kaynak))
        elif p.get("d") == eski and p["f"] >= gun:
            b = dict(p)
            b["d"] = yeni
            b["kaynak"] = kaynak
            out.append(b)
        else:
            out.append(p)
    return out


def kes(L, f, t):
    """Listeden [f,t) aralığını çıkarır (dönemleri kırpar/böler)."""
    out = []
    for p in L:
        if p["t"] <= f or p["f"] >= t:
            out.append(p)
            continue
        if p["f"] < f:
            a = dict(p); a["t"] = f; out.append(a)
        if p["t"] > t:
            b = dict(p); b["f"] = t; out.append(b)
    return out


def srt(L):
    return sorted(L, key=lambda p: p["f"])


def donustur(ad, r):
    """Kaydın yeni (s, d, v) dizileri; değişiklik yoksa None."""
    s = [dict(p) for p in (r.get("s") or [])]
    d = [dict(p) for p in (r.get("d") or [])]
    v = [dict(p) for p in (r.get("v") or [])]
    if "G1" in GRUP and ad in G1_AD:
        s = bol(s, "1402-01-01", "sirbistan", "sirp-despotlugu", K_G1)
    if "G2" in GRUP and ad == "Priştine":
        s = kes(s, "1412-01-01", "1413-07-05")
        s.append(P("1412-01-01", "1413-07-05", d="musa-celebi", kaynak="TDV pristine: 'Fetret dönemi sonlarında "
                   "Şehzade Mûsâ Çelebi burayı ele geçirdi (815/1412)' — başlangıç YIL · bitiş: Çamurlu Savaşı "
                   "(Mûsâ'nın sonu, olaylar_ek3 1413-07-05)" + TAG + " ②"))
        s = kes(s, "1439-08-27", "1444-08-01")
        d.append(P("1439-08-27", "1444-08-01", kaynak="TDV pristine: '842-848 (1439-1444) yıllarında doğrudan "
                   "Osmanlı idaresi altında Gazi Îsâ Bey tarafından yönetildi' · 'Bu son tarihte Priştine tekrar Despot "
                   "Curac Brankoviç’e teslim edildi' — gün komşudan: Semendire (olaylar_ek 1439-08-27 · 1444-08-01)" + TAG + " ②"))
    if "G4" in GRUP and ad == "Alacahisar (Kruševac)":
        s = kes(s, "1444-11-10", "1451-02-18")
        d.append(P("1444-11-10", "1451-02-18", kaynak="TDV alacahisar: 'muhtemelen Varna zaferini (1444) takip eden "
                   "günlerde bu bölge yeniden Türk hâkimiyetine girdi' (KAYNAĞIN KENDİ 'muhtemelen'i) · 'Fâtih Sultan Mehmed "
                   "tahta geçince Brankoviç Alacahisar ve yöresini tekrar ele geçirdiyse de' — gün: Varna 1444-11-10 · "
                   "cülus 1451-02-18 (alt sınır; geri alış günü kaynakta yok)" + TAG + " ④"))
    if "G5C" in GRUP and ad in SIRP_TABI:
        yeni = []
        for p in s:
            if p.get("d") == "sirbistan" and p["f"] < "1402-01-01" and p["t"] > "1389-06-15":
                a, b = max(p["f"], "1389-06-15"), min(p["t"], "1402-01-01")
                yeni.append(P(a, b, k="Sırbistan (Lazareviç / Brankoviç — Osmanlı tâbii)", statu="vassal", kaynak=K_LAZAR_V))
        for w in yeni:
            s = kes(s, w["f"], w["t"])
        v += yeni
    if "G5A" in GRUP and ad in SIRP_TABI:
        yeni = [P(p["f"], p["t"], k="Sırp Despotluğu (Osmanlı vasalı)", kid="sirp-despotlugu", statu="vassal",
                  kaynak=K_SIRP_V) for p in s if p.get("d") == "sirp-despotlugu"]
        s = [p for p in s if p.get("d") != "sirp-despotlugu"]
        v += yeni
    if "G5B" in GRUP and ad in BOSNA:
        yeni = []
        for p in s:
            if p.get("d") == "bosna" and p["t"] > "1428-01-01" and p["f"] < "1463-06-01":
                yeni.append(P(max(p["f"], "1428-01-01"), min(p["t"], "1463-06-01"),
                              k="Bosna Krallığı (Osmanlı haraçgüzarı)", kid="bosna-kralligi", statu="vassal", kaynak=K_BOSNA_V))
        for w in yeni:
            s = kes(s, w["f"], w["t"])
        v += yeni
    s, d, v = srt(s), srt(d), srt(v)
    if s == (r.get("s") or []) and d == (r.get("d") or []) and v == (r.get("v") or []):
        return None
    return s, d, v


def ortusme(s, d, v):
    L = sorted([(p["f"], p["t"], k) for k, arr in (("s", s), ("d", d), ("v", v)) for p in arr])
    return [(a, b) for a, b in zip(L, L[1:]) if b[0] < a[1]]


# ── JS metin işleri ───────────────────────────────────────────────────────
def oku(yol):
    betik = ("global.window={};eval(require('fs').readFileSync(process.argv[1],'utf8'));"
             "const k=Object.keys(global.window)[0];process.stdout.write(JSON.stringify(global.window[k]||[]));")
    r = subprocess.run(["node", "-e", betik, yol], capture_output=True, text=True, encoding="utf-8")
    return (None, r.stderr[:300]) if r.returncode else (json.loads(r.stdout), None)


def oku_metin(m):
    with tempfile.NamedTemporaryFile("w", suffix=".js", delete=False, encoding="utf-8") as f:
        f.write(m)
        p = f.name
    try:
        return oku(p)
    finally:
        os.unlink(p)


def atla_dize(m, i):
    q = m[i]
    i += 1
    while m[i] != q:
        i += 2 if m[i] == "\\" else 1
    return i


def kapanis(m, i):
    derin, n = 0, len(m)
    while i < n:
        c = m[i]
        if c in "\"'`":
            i = atla_dize(m, i)
        elif c == "/" and m[i + 1] == "/":
            i = m.index("\n", i)
        elif c == "/" and m[i + 1] == "*":
            i = m.index("*/", i) + 1
        elif c in "{[":
            derin += 1
        elif c in "}]":
            derin -= 1
            if derin == 0:
                return i
        i += 1
    raise ValueError("kapanmadı")


def araliklar(m):
    i = m.index("[", m.index("window."))
    son = kapanis(m, i)
    out, j = [], i + 1
    while j < son:
        c = m[j]
        if c in "\"'`":
            j = atla_dize(m, j)
        elif c == "/" and m[j + 1] == "/":
            j = m.index("\n", j)
        elif c == "/" and m[j + 1] == "*":
            j = m.index("*/", j) + 1
        elif c == "{":
            k = kapanis(m, j)
            out.append((j, k + 1))
            j = k
        j += 1
    return out


def ust_anahtar(m, a, b, anahtar):
    """Kayıt metninde (a..b) DERİNLİK-1 düzeyindeki `anahtar:` dizisinin [ ] aralığı; yoksa None."""
    derin, i = 0, a
    while i < b:
        c = m[i]
        if c in "\"'`":
            i = atla_dize(m, i)
        elif c == "/" and m[i + 1] == "/":
            i = m.index("\n", i)
        elif c == "/" and m[i + 1] == "*":
            i = m.index("*/", i) + 1
        elif c in "{[":
            derin += 1
        elif c in "}]":
            derin -= 1
        elif derin == 1 and m.startswith(anahtar, i) and not (m[i - 1].isalnum() or m[i - 1] == "_"):
            j = i + len(anahtar)
            while m[j] in " \t":
                j += 1
            if m[j] == ":":
                j += 1
                while m[j] in " \t\r\n":
                    j += 1
                if m[j] == "[":
                    return j, kapanis(m, j) + 1
        i += 1
    return None


def js_dizi(L):
    return "[" + ",".join("{" + ",".join("%s:%s" % (k, json.dumps(v, ensure_ascii=False)) for k, v in p.items()) + "}"
                          for p in L) + "]"


def zincir(r):
    L = sorted([(p["f"], "%s %s→%s %s" % (k, p["f"], p["t"], p.get("d") or p.get("kid") or p.get("k") or ""))
                for k in ("s", "d", "v") for p in (r.get(k) or []) if p["f"] < "1470" and p["t"] > "1380"])
    return [x[1] for x in L]


SAY = {"değişen kayıt": 0, "kayıt yok": 0, "örtüşme (yazılmadı)": 0, "SINAV bozuk dosya": 0}
hedef_ad = sorted(set(G1_AD) | set(SIRP_TABI) | set(BOSNA), key=lambda a: DOSYA[a])
dosyalar = []
for a in hedef_ad:
    if DOSYA[a] not in dosyalar:
        dosyalar.append(DOSYA[a])

for f in dosyalar:
    yol = os.path.join(KOK, "data", f)
    ham = io.open(yol, encoding="utf-8", newline="").read()
    kay, h = oku(yol)
    if h:
        print("🔴 %s AYRIŞMADI: %s" % (f, h))
        continue
    ar = araliklar(ham)
    if len(ar) != len(kay):
        print("🔴 %s nesne sayısı tutmuyor — DOKUNULMADI" % f)
        continue
    print("\n#### data/%s" % f)
    plan = {}
    for ad in [a for a in hedef_ad if DOSYA[a] == f]:
        ix = [i for i, r in enumerate(kay) if r.get("ad") == ad]
        if len(ix) != 1:
            SAY["kayıt yok"] += 1
            print("  ❌ %s: %d kayıt" % (ad, len(ix)))
            continue
        sonuc = donustur(ad, kay[ix[0]])
        if sonuc is None:
            continue
        o = ortusme(*sonuc)
        if o:
            SAY["örtüşme (yazılmadı)"] += 1
            print("  ⛔ %s ÖRTÜŞME: %s" % (ad, o[:3]))
            continue
        plan[ix[0]] = sonuc
        r2 = dict(kay[ix[0]])
        r2["s"], r2["d"], r2["v"] = sonuc
        print("  ✏️  %s" % ad)
        if GOSTER:
            print("       ÖNCE : " + " | ".join(zincir(kay[ix[0]])))
            print("       SONRA: " + " | ".join(zincir(r2)))
    if not plan:
        continue
    yeni = ham
    for i in sorted(plan, key=lambda i: -ar[i][0]):
        a, b = ar[i]
        s, d, v = plan[i]
        parca = yeni[a:b]
        for anahtar, L in (("v", v), ("d", d), ("s", s)):         # sondan başa değil — her seferinde yeniden bulunur
            yer = ust_anahtar(parca, 0, len(parca), anahtar)
            eski = kay[i].get(anahtar)
            if yer:
                if L == (eski or []):
                    continue
                parca = parca[:yer[0]] + js_dizi(L) + parca[yer[1]:]
            elif L:
                k = len(parca) - 2
                while parca[k].isspace():
                    k -= 1
                parca = parca[:k + 1] + ("" if parca[k] == "," else ",") + " %s:%s" % (anahtar, js_dizi(L)) + parca[k + 1:]
        yeni = yeni[:a] + parca + yeni[b:]
    kay2, h2 = oku_metin(yeni)
    bozuk = []
    if h2 or len(kay2) != len(kay):
        bozuk.append("ayrışmadı/sayı: %s" % h2)
    else:
        for i, (r1, r2) in enumerate(zip(kay, kay2)):
            if i in plan:
                s, d, v = plan[i]
                if (r2.get("s") or []) != s or (r2.get("d") or []) != d or (r2.get("v") or []) != v:
                    bozuk.append("%s hedef dizi beklenene eşit değil" % r1.get("ad"))
                if {k: x for k, x in r1.items() if k not in ("s", "d", "v")} != {k: x for k, x in r2.items() if k not in ("s", "d", "v")}:
                    bozuk.append("%s başka alanı değişti" % r1.get("ad"))
            elif r1 != r2:
                bozuk.append("#%d %s beklenmedik değişim" % (i, r1.get("ad")))
    if bozuk:
        SAY["SINAV bozuk dosya"] += 1
        print("  🔴 SINAV BAŞARISIZ — YAZILMADI: " + " · ".join(bozuk[:6]))
        continue
    SAY["değişen kayıt"] += len(plan)
    print("  ✅ SINAV: %d kayıt beklenen s/d/v'ye birebir eşit, örtüşme yok · öteki %d kayıt aynı" % (len(plan), len(kay) - len(plan)))
    if UYGULA:
        io.open(yol, "w", encoding="utf-8", newline="").write(yeni)
        print("  💾 YAZILDI data/%s" % f)

print("\nSAYAÇ  " + " · ".join("%s %d" % kv for kv in SAY.items()))
print("KİP    %s · grup %s" % ("UYGULA" if UYGULA else "KURU KOŞU (yazılmadı)", ",".join(g for g in TUM if g in GRUP)))
print("SONRA  py arac/denetle.py · motor koşusu (tâbi rengi + Priştine/Alacahisar pencereleri)")
