"""KUNYE-ANADOLU-0081 — parti-emrelic-0080 Sınıf C (H-0003 · H-0004 · H-0005 · H-0016) uygulayıcısı.

    py denetim/KUNYE-ANADOLU-0081-uygula.py                  KURU KOŞU (yazmaz)
    py denetim/KUNYE-ANADOLU-0081-uygula.py --uygula         data/ dosyalarına yazar
         --grup H5,H4,H3,H3b                                 yalnız bu gruplar
Gruplar (gerekçe ve kaynak: denetim/KUNYE-ANADOLU-0081.md):
    H5   Eretna kuruluş toprağı + eksklav — Erzincan · Kemah · Niğde · Aksaray
    H4   Debrecen — tâbilik Mohaç GÜNÜNDE değil, Varad zinciriyle birebir (kaydın kendi beyanı)
    H3   habsburg künyesi f: 1526-08-29 → 1282-01-01 (§3.5 sınıf ② aynı polity → GENİŞLET)
    H3b  Uyvar · Nitra 1281-1526 'avusturya' → 'macaristan' (H3 inerse bu kusur 4d'den GİZLENİR;
         H3 ile BİRLİKTE inmeli)  ⚠️ güven: Nitra için kasaba-tanecik kaynak OKUNMADI
    H16  DEĞİŞİKLİK YOK — Timur'un Karaman'a verdiği yerler TDV ile TUTUYOR (rapor §H-0016)

Her düzenleme: (dosya, kayıt anahtarı, eski metin → yeni metin). Eski metin kaydın İÇİNDE
TAM BİR KEZ geçmeli (yoksa DOKUNULMAZ, sayılır). `nesne=True` ise eski metin bir `{…}`
nesnesinin başıdır ve nesne kapanan `}`'ye kadar değiştirilir.
SINAV: yeni metin node ile ayrışır; yalnız hedef kayıtların hedef alanı değişir ve o alan
BEKLENEN diziye (f, t, d|k) eşittir; öteki bütün kayıtlar ve alanlar birebir aynı kalır.
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
GRUP = None
if "--grup" in sys.argv:
    GRUP = set(sys.argv[sys.argv.index("--grup") + 1].upper().split(","))

TAG = " · KUNYE-ANADOLU-0081"
K_ERETNA_TDV = ("TDV eretnaogullari: 'İbn Battûta bu yıllarda Eretna’nın Aksaray, Niğde, Kayseri ve Sivas’ı "
                "Şeyh Hasan adına idare ettiğini … bildirir' · 'Öldüğünde … Niğde, Aksaray, Erzincan … onun "
                "hâkimiyeti altındaydı'")

DUZ = [
    # ── H5 · Eretna ───────────────────────────────────────────────────────
    ("H5", "yerlesimler.js", "ad", "Erzincan", "s", True,
     '{f:"1281-01-01",t:"1348-01-01",d:"ilhanli"',
     '{f:"1281-01-01",t:"1335-01-01",d:"ilhanli"}'),
    ("H5", "yerlesimler.js", "ad", "Erzincan", "s", True,
     '{f:"1348-01-01",t:"1378-01-01",d:"eretna"',
     '{f:"1335-01-01",t:"1378-01-01",d:"eretna",kaynak:"TDV erzincan: \'Erzincan önce Timurtaş’ın, ardından '
     'onun Anadolu’dan ayrılması ile Eretna Bey’in hükmüne girdi\' — YIL VERMİYOR ⇒ eretna künyesinin günü '
     '(1335-01-01) devralındı, gün kaynaksız · bitiş: \'Pîr Hüseyin Bey’in vefatıyla (1378) … Mutahharten’in '
     'Erzincan emîri olması\' · ⚠️ ESKİ 1348 başlangıcı \'Bu sırada şehir Ahî İne (Ayna) Bey’in idaresindeydi '
     '(1348)\' cümlesinden okunmuştu: o yıl Eretna’ya geçişi DEĞİL Ahî İne idaresini tarihler (TDV tuzağı ⑧)'
     + TAG + ' H-0005"}'),
    ("H5", "yerlesimler.js", "ad", "Kemah", "s", True,
     '{f:"1281-01-01",t:"1340-01-01",d:"ilhanli"',
     '{f:"1281-01-01",t:"1335-01-01",d:"ilhanli"}'),
    ("H5", "yerlesimler.js", "ad", "Kemah", "s", True,
     '{f:"1340-01-01",t:"1401-02-01",d:"akkoyunlu"',
     '{f:"1335-01-01",t:"1378-01-01",d:"eretna",kaynak:"TDV kemah: \'İlhanlı hâkimiyetinin zayıflamasıyla '
     'Eretnaoğulları’nın idaresine girdi\' — YIL VERMİYOR ⇒ eretna künyesinin günü devralındı · ⚠️ ESKİ '
     '\'akkoyunlu 1340-1401\' TDV ile ÇELİŞİYOR: TDV sırası İlhanlı → Eretna → Mutahharten → (1401 Osmanlı) '
     '→ Karakoyunlu → Akkoyunlu' + TAG + ' H-0005"},'
     '{f:"1378-01-01",t:"1401-02-01",d:"mutahharten",kaynak:"TDV kemah: \'Bir ara Erzincan emîri olan '
     'Mutahharten’in eline geçti\' · \'Erzincan’la birlikte Kemah’ı da Osmanlı ülkesine kattı (803/1401)\' · '
     'başlangıç günü komşudan: Erzincan · TDV erzincan \'Pîr Hüseyin Bey’in vefatıyla (1378) … Mutahharten’in '
     'Erzincan emîri olması\'' + TAG + ' H-0005"}'),
    ("H5", "yerlesimler.js", "ad", "Niğde", "s", True,
     '{f:"1308-01-01",t:"1366-01-01",d:"ilhanli"',
     '{f:"1308-01-01",t:"1335-01-01",d:"ilhanli"},'
     '{f:"1335-01-01",t:"1366-01-01",d:"eretna",kaynak:"TDV nigde: \'XIV. yüzyılın ilk yarısında Niğde ve '
     'çevresi Eretnaoğulları’nın idaresi altına girdi\' · \'Karamanoğlu Alâeddin Bey 768’de (1366-67) Niğde ve '
     'Aksaray’ı kendi topraklarına kattı\' · ' + K_ERETNA_TDV + ' — başlangıç: künye günü devralındı · ⚠️ ESKİ '
     'ilhanli dönemi 1366’ya uzanıyordu, ilhanli künyesi 1353-01-01’de bitiyor (HAYALET)' + TAG + ' H-0005"}'),
    ("H5", "yerlesimler.js", "ad", "Aksaray", "s", True,
     '{f:"1308-01-01",t:"1366-01-01",d:"ilhanli"',
     '{f:"1308-01-01",t:"1335-01-01",d:"ilhanli"},'
     '{f:"1335-01-01",t:"1366-01-01",d:"eretna",kaynak:"' + K_ERETNA_TDV + ' · TDV nigde: \'Karamanoğlu '
     'Alâeddin Bey 768’de (1366-67) Niğde ve Aksaray’ı kendi topraklarına kattı\' — başlangıç: künye günü '
     'devralındı · ⚠️ ESKİ ilhanli dönemi 1366’ya uzanıyordu, ilhanli künyesi 1353-01-01’de bitiyor (HAYALET)'
     + TAG + ' H-0005"}'),
    # ── H4 · Debrecen ─────────────────────────────────────────────────────
    ("H4", "yerlesimler_kdmacar.js", "ad", "Debrecen", "s", True,
     '{f:"1281-01-01",t:"1526-08-29",d:"macaristan"',
     '{f:"1281-01-01",t:"1526-09-01",d:"macaristan"}'),
    ("H4", "yerlesimler_kdmacar.js", "ad", "Debrecen", "v", True,
     '{f:"1526-08-29",t:"1660-08-27",statu:"vassal"',
     '{f:"1526-09-01",t:"1541-08-29",k:"Macaristan (Zapolya vasal krallığı)",statu:"vassal",kaynak:"kaydın '
     'kendi beyanı: zincir Varad kaydıyla BİREBİR — Varad (Oradea) bu iki pencereyi 1526-09-01 ve adlarıyla '
     'taşıyor; eski tek dönem Mohaç GÜNÜNDE (08-29) ve adsız başlıyordu (H-0004 görseli tam o gün)' + TAG
     + ' H-0004"},{f:"1541-08-29",t:"1660-08-27",k:"Erdel Prensliği",statu:"vassal"}'),
    # ── H3 · habsburg künyesi ─────────────────────────────────────────────
    ("H3", "devletler.js", "id", "habsburg", "f", False,
     'f:"1526-08-29"', 'f:"1282-01-01"'),
    # ── H3b · Uyvar · Nitra ───────────────────────────────────────────────
    ("H3b", "yerlesimler.js", "ad", "Uyvar", "s", True,
     '{f:"1281-01-01",t:"1663-09-24",d:"avusturya"',
     '{f:"1281-01-01",t:"1526-08-29",d:"macaristan",kaynak:"macaristan künyesi (Macar Krallığı, bağımsız '
     'dönem) 1526-08-29’de bitiyor · TDV uyvar: kale 1545’te \'Estergon başpiskoposu tarafından inşa '
     'ettirilen … Érsek Ujvár\' · ⚠️ nokta 1545’te KURULDU (kur: yok, ayrıca bildirildi)' + TAG + ' H-0003"},'
     '{f:"1526-08-29",t:"1663-09-24",d:"avusturya"}'),
    ("H3b", "yerlesimler_ek29.js", "ad", "Nitra (Nyitra)", "s", True,
     '{f:"1281-01-01",t:"1663-09-24",d:"avusturya"',
     '{f:"1281-01-01",t:"1526-08-29",d:"macaristan",kaynak:"macaristan künyesi 1526-08-29’de bitiyor; '
     'Nitra habsburg künyesinden 245 yıl önce avusturya boyanıyordu · ⚠️ kasaba-tanecik kaynak OKUNMADI '
     '(TDV nitra slug’ı yok); aynı dosyadaki Komárom kaydıyla aynı desen' + TAG + ' H-0003"},'
     '{f:"1526-08-29",t:"1663-09-24",d:"avusturya"}'),
]

# BEKLENEN — (f, t, d|k) üçlüleri, kaynak alanı hariç
BEKLE = {
    ("yerlesimler.js", "Erzincan", "s"): [("1281-01-01", "1335-01-01", "ilhanli"), ("1335-01-01", "1378-01-01", "eretna"),
                                          ("1378-01-01", "1401-02-01", "mutahharten")],
    ("yerlesimler.js", "Kemah", "s"): [("1281-01-01", "1335-01-01", "ilhanli"), ("1335-01-01", "1378-01-01", "eretna"),
                                       ("1378-01-01", "1401-02-01", "mutahharten"), ("1402-07-28", "1502-01-01", "akkoyunlu")],
    ("yerlesimler.js", "Niğde", "s"): [("1281-01-01", "1308-01-01", "selcuklu"), ("1308-01-01", "1335-01-01", "ilhanli"),
                                       ("1335-01-01", "1366-01-01", "eretna"), ("1366-01-01", "1468-01-01", "karaman")],
    ("yerlesimler.js", "Aksaray", "s"): [("1281-01-01", "1308-01-01", "selcuklu"), ("1308-01-01", "1335-01-01", "ilhanli"),
                                         ("1335-01-01", "1366-01-01", "eretna"), ("1366-01-01", "1397-07-01", "karaman")],
    ("yerlesimler_kdmacar.js", "Debrecen", "s"): [("1281-01-01", "1526-09-01", "macaristan"), ("1692-06-05", "1918-11-11", "avusturya")],
    ("yerlesimler_kdmacar.js", "Debrecen", "v"): [("1526-09-01", "1541-08-29", "Macaristan (Zapolya vasal krallığı)"),
                                                   ("1541-08-29", "1660-08-27", "Erdel Prensliği")],
    ("yerlesimler.js", "Uyvar", "s"): [("1281-01-01", "1526-08-29", "macaristan"), ("1526-08-29", "1663-09-24", "avusturya"),
                                       ("1685-08-19", "1918-11-11", "avusturya")],
    ("yerlesimler_ek29.js", "Nitra (Nyitra)", "s"): [("1281-01-01", "1526-08-29", "macaristan"), ("1526-08-29", "1663-09-24", "avusturya"),
                                                     ("1685-08-19", "1918-11-11", "avusturya")],
}


def oku(yol):
    betik = ("global.window={};eval(require('fs').readFileSync(process.argv[1],'utf8'));"
             "const k=Object.keys(global.window)[0];process.stdout.write(JSON.stringify(global.window[k]||[]));")
    r = subprocess.run(["node", "-e", betik, yol], capture_output=True, text=True, encoding="utf-8")
    if r.returncode:
        return None, r.stderr[:300]
    return json.loads(r.stdout), None


def oku_metin(m):
    with tempfile.NamedTemporaryFile("w", suffix=".js", delete=False, encoding="utf-8") as f:
        f.write(m)
        p = f.name
    try:
        return oku(p)
    finally:
        os.unlink(p)


def kapanis(m, i):
    """m[i] == '{' → eşleşen '}' indeksi (dize/yorum farkında)."""
    derin = 0
    n = len(m)
    while i < n:
        c = m[i]
        if c in "\"'`":
            q = c
            i += 1
            while m[i] != q:
                i += 2 if m[i] == "\\" else 1
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
            q = c
            j += 1
            while m[j] != q:
                j += 2 if m[j] == "\\" else 1
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


def uclu(L):
    return [(p.get("f"), p.get("t"), p.get("d") or p.get("k") or p.get("kid")) for p in (L or [])]


SAY = {"uygulanabilir": 0, "eski metin yok/çoklu": 0, "kayıt yok": 0, "grup dışı": 0}
dosyalar = []
for x in DUZ:
    if x[1] not in dosyalar:
        dosyalar.append(x[1])

for f in dosyalar:
    yol = os.path.join(KOK, "data", f)
    ham = io.open(yol, encoding="utf-8", newline="").read()
    kay, h = oku(yol)
    if h:
        print("🔴 %s AYRIŞMADI: %s" % (f, h))
        continue
    ar = araliklar(ham)
    if len(ar) != len(kay):
        print("🔴 %s nesne sayısı tutmuyor (metin %d · node %d) — DOKUNULMADI" % (f, len(ar), len(kay)))
        continue
    print("\n#### data/%s (%d kayıt)" % (f, len(kay)))
    isler = []                                         # (kayıt ix, eski, yeni, nesne)
    for g, _f, alan_k, deger, alan, nesne, eski, yeni in [x for x in DUZ if x[1] == f]:
        if GRUP and g not in GRUP:
            SAY["grup dışı"] += 1
            continue
        ix = [i for i, r in enumerate(kay) if r.get(alan_k) == deger]
        if len(ix) != 1:
            SAY["kayıt yok"] += 1
            print("  ❌ %s %s=%s: %d kayıt" % (g, alan_k, deger, len(ix)))
            continue
        a, b = ar[ix[0]]
        if ham[a:b].count(eski) != 1:
            SAY["eski metin yok/çoklu"] += 1
            print("  ⛔ %s %s: eski metin kayıtta %d kez — DOKUNULMADI: %s" % (g, deger, ham[a:b].count(eski), eski))
            continue
        isler.append((ix[0], eski, yeni, nesne, g, deger, alan))
        SAY["uygulanabilir"] += 1
        print("  ✏️  %-3s %-16s %s: %s …\n        → %s" % (g, deger, alan, eski[:70], yeni[:150] + ("…" if len(yeni) > 150 else "")))
    if not isler:
        continue
    # sondan başa uygula
    yeni_ham = ham
    for ixk, eski, yeni, nesne, *_ in sorted(isler, key=lambda z: -(ar[z[0]][0] + ham[ar[z[0]][0]:ar[z[0]][1]].index(z[1]))):
        a, b = ar[ixk]
        p = a + yeni_ham[a:b].index(eski)
        q = kapanis(yeni_ham, p) + 1 if nesne else p + len(eski)
        yeni_ham = yeni_ham[:p] + yeni + yeni_ham[q:]
    kay2, h2 = oku_metin(yeni_ham)
    if h2 or len(kay2) != len(kay):
        print("  🔴 SINAV: ayrışmadı / sayı değişti — YAZILMADI: %s" % h2)
        continue
    hedef = {(z[0], z[6]) for z in isler}
    bozuk = []
    for i, (r1, r2) in enumerate(zip(kay, kay2)):
        alanlar = set(r1) | set(r2)
        for k in alanlar:
            if (i, k) in hedef:
                beklenen = BEKLE.get((f, r1.get("ad"), k))
                if beklenen is not None:
                    gercek = [u for u in uclu(r2.get(k)) if beklenen and u[0] <= beklenen[-1][0]]
                    if uclu(r2.get(k))[:len(beklenen)] != beklenen:
                        bozuk.append("%s.%s beklenen %s · gerçek %s" % (r1.get("ad") or r1.get("id"), k, beklenen, uclu(r2.get(k))[:len(beklenen)]))
                elif k == "f" and r2.get("f") != "1282-01-01":
                    bozuk.append("habsburg.f %s" % r2.get("f"))
                # hedef alanın beklenen önekinden sonrası da aynı kalmalı
                if k in ("s", "v") and beklenen is not None:
                    eski_kuyruk = [u for u in uclu(r1.get(k)) if u[0] > beklenen[-1][0]]
                    yeni_kuyruk = [u for u in uclu(r2.get(k)) if u[0] > beklenen[-1][0]]
                    if eski_kuyruk != yeni_kuyruk:
                        bozuk.append("%s.%s kuyruk değişti" % (r1.get("ad"), k))
            elif r1.get(k) != r2.get(k):
                bozuk.append("#%d %s.%s beklenmedik değişim" % (i, r1.get("ad") or r1.get("id"), k))
    if bozuk:
        print("  🔴 SINAV BAŞARISIZ — YAZILMADI:\n     " + "\n     ".join(bozuk[:10]))
        continue
    print("  ✅ SINAV: %d düzenleme · %d kayıtta hedef alan beklenene eşit · öteki %d kayıt birebir aynı"
          % (len(isler), len({z[0] for z in isler}), len(kay) - len({z[0] for z in isler})))
    if UYGULA:
        io.open(yol, "w", encoding="utf-8", newline="").write(yeni_ham)
        print("  💾 YAZILDI data/%s" % f)

print("\nSAYAÇ  " + " · ".join("%s %d" % kv for kv in SAY.items()))
print("KİP    " + ("UYGULA" if UYGULA else "KURU KOŞU (yazılmadı)") + (" · grup " + ",".join(sorted(GRUP)) if GRUP else ""))
print("SONRA  py arac/denetle.py  (öngörüler rapor §Öngörü'de) · H3/H3b renk değişmez · motor koşusu gerekir (Eretna/Debrecen/Uyvar/Nitra petekleri)")
