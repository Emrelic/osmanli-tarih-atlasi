# -*- coding: utf-8 -*-
"""SINIR-UZAKDOGU-0078 — Japonya(Kore)–Çin: Yalu ve Tumen NEHİR kesimleri YOK → C.

Emsal ve yöntem: denetim/SINIR-D-ASYA-0077-YOKC.py (Amur/Ussuri, koordinatör hükmü, 24 Eyl 2026,
İKİ ŞART): Şart 1 — kaynakta "sonradan değişti" diye geçen kesim YOK'ta KALIR; Şart 2 — kayıt
kabalığını beyan eder (geometri = bugünkü çizginin KABA VEKİLİ, sapma ölçülmedi, degisti:null).

Kaynak ayakları:
  1923 ↔ 1962 : IBS 17 (China–Korea) — Yalu "en az 1875'ten beri", Tumen 1909'dan beri sınır;
                nehir içinde işaretleme YOK; ~20 millik kaynaklar arası (Paektu) TARTIŞMALI.
  1962 → bugün: Fravel 2005 Tablo 1 — 1962 antlaşmasında değişen yalnız Changbai/Paektu
                (krater gölünün %40'ı Çin'e). Nehir kesiminde değişim BİLDİRİLMİYOR ⇒ Şart 1 sağlanır.
                Paektu kesimi + iki yanındaki PAY (nehir başlarında hangi derenin sınır olduğu
                tartışmasının kendisi) YOK'ta kalır.
Nehir etiketi NE 10m rivers (≤3 km); bugünkü hat veri-kaynak/d_bugunku_sinirlar.geojson CHN-PRK.

Aynı betik §5.4 ölçümünü basar: 1923-09-01 petek gövdeleri (denetim/SINIR-UZAKDOGU-0078-govde.js
çıktısı) üzerinde, hat boyunca 10 km'de bir, 5 km sol/sağ noktanın sahibi.

Kullanım: py denetim/SINIR-UZAKDOGU-0078-uret.py <govde.geojson> [--yaz]
"""
import sys, io, os, json, math
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8", errors="replace")
KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
os.chdir(KOK)
from shapely.geometry import shape, Point, LineString
from shapely.strtree import STRtree

YAZ = "--yaz" in sys.argv
GOVDE = [a for a in sys.argv[1:] if not a.startswith("--")][0]
DOSYA = "data/d_sinirlar_uzakdogu.js"
SADE = 0.002
ESIK_NEHIR_KM = 3.0
PAEKTU_PAY_KM = 30.0
DAMGA = "SINIR-UZAKDOGU-0078 (24 Eyl 2026)"
IBS17 = "https://library.law.fsu.edu/Digital-Collections/LimitsinSeas/pdf/ibs017.pdf"
FRAVEL = "https://www.taylorfravel.com/documents/research/fravel.2005.IS.regime.insecurity.pdf"
JP, CN, RU = "meiji-japonya", "cin-cumhuriyeti", "sovyet-rusya"


def km(a, b):
    r = math.pi / 180
    return 6371 * math.hypot((b[0] - a[0]) * r * math.cos((a[1] + b[1]) / 2 * r), (b[1] - a[1]) * r)


def uzunluk(c):
    return sum(km(c[i], c[i + 1]) for i in range(len(c) - 1))


GJ = json.load(open("veri-kaynak/d_bugunku_sinirlar.geojson", encoding="utf-8"))
CP = [shape(f["geometry"]) for f in GJ["features"] if f["properties"]["cift"] == "CHN-PRK"]
if len(CP) != 1:
    raise SystemExit(f"CHN-PRK parça sayısı {len(CP)} (beklenen 1)")
c = list(CP[0].coords)

R = json.load(open("veri-kaynak/ne_10m_rivers.geojson", encoding="utf-8"))
G, AD = [], []
for f in R["features"]:
    s = shape(f["geometry"])
    if s.bounds[2] > 120 and s.bounds[0] < 135 and s.bounds[3] > 38 and s.bounds[1] < 46:
        G.append(s); AD.append(f["properties"].get("name_en") or f["properties"].get("name") or "?")
TREE = STRtree(G)


def etiket(x, y):
    p = Point(x, y); j = TREE.nearest(p); q = G[j].interpolate(G[j].project(p))
    return AD[j] if km((x, y), (q.x, q.y)) <= ESIK_NEHIR_KM else "KARA"


et = [etiket(x, y) for x, y in c]
kara = [i for i, e in enumerate(et) if e == "KARA"]
if not kara:
    raise SystemExit("Paektu kara kesimi bulunamadı — etiketleyici ateşlemedi mi?")
print(f"bugünkü CHN-PRK: {len(c)} nokta · {uzunluk(c):.1f} km · etiketler {sorted(set(et))}")
print(f"Paektu kara kesimi: nokta {kara[0]}–{kara[-1]} · {uzunluk(c[kara[0]:kara[-1]+1]):.1f} km")
gecis = c[kara[0]:kara[-1] + 1]


def disari(i):
    if et[i] not in ("Yalu", "Tumen"):
        return True
    return min(km(g, c[i]) for g in gecis) <= PAEKTU_PAY_KM


parcalar, cur = [], []
for i in range(len(c)):
    if disari(i):
        if len(cur) >= 2: parcalar.append(cur)
        cur = []
    else:
        cur.append(i)
if len(cur) >= 2: parcalar.append(cur)
for p in parcalar:
    print(f"C parçası: nokta {p[0]}–{p[-1]} · {uzunluk([c[i] for i in p]):.1f} km · {sorted({et[i] for i in p})}")
if len(parcalar) != 2 or any(len({et[i] for i in p}) != 1 for p in parcalar):
    raise SystemExit("beklenen: iki temiz parça (Tumen, Yalu)")

ADM = json.load(open("veri-kaynak/ne_10m_admin_0_countries.geojson", encoding="utf-8"))
POLY = {f["properties"]["ADM0_A3"]: shape(f["geometry"]).buffer(0) for f in ADM["features"]
        if f["properties"]["ADM0_A3"] in ("PRK", "CHN")}
ULKE = {"PRK": JP, "CHN": CN}


def sol_taraf(ls):
    m = ls.interpolate(0.5, normalized=True)
    p0 = ls.interpolate(max(0, ls.project(m) - 0.005)); p1 = ls.interpolate(min(ls.length, ls.project(m) + 0.005))
    dx, dy = p1.x - p0.x, p1.y - p0.y; n = math.hypot(dx, dy) or 1
    sol = Point(m.x - dy / n * 0.03, m.y + dx / n * 0.03)
    for k, pl in POLY.items():
        if pl.contains(sol):
            return ULKE[k]
    raise SystemExit("sol taraf ölçülemedi")


def dizi(ls):
    return [[round(x, 4), round(y, 4)] for x, y in ls.simplify(SADE, preserve_topology=False).coords]


GEO = "Natural Earth 10m admin-0 bugünkü sınır (d_bugunku_sinirlar.geojson, çift CHN-PRK) — VEKÂLET: C kaba hat, 1923 koordinatı DEĞİL"
KESIN = ("ölçülemedi — geometri BUGÜNKÜ çizgi (Natural Earth 10m), 1923 hattının KABA VEKİLİDİR; sapma ÖLÇÜLMEDİ. "
         "Belgeler hattı nehrin ADIYLA verir; nehir içindeki yeri hiçbir antlaşmada tanımlı değil (IBS 17). "
         "Japon idaresinde Yalu'da talveg 'genel olarak' kabul ediliyordu (IBS 17) — bugünkü NE hattının talvegle örtüşmesi ölçülmedi.")
DEGISTI = {"deger": None, "kaynak": "IBS 17 (1962) + Fravel 2005 Tablo 1",
           "not": "1923↔1962 KAPALI (IBS 17: nehirde ayrıntılı işaretleme hiç yapılmadı, anlaşmazlık yalnız Paektu'da). "
                  "1962 ÇHC–KDHC antlaşmasında değişen bildirilen yalnız Changbai/Paektu (Fravel); nehir adalarının "
                  "bölüşümü ve hattın nehir içindeki yeri ÖLÇÜLMEDİ ⇒ null."}
PAY_NOT = (f"Paektu kara kesimi ve iki yanında {PAEKTU_PAY_KM:g} km (hangi kaynak deresinin sınır olduğu tartışması, "
           "IBS 17: ~20 mil, ~600 mil²; 1962'de değişti) bu kaydın DIŞINDA — A/B'de kalır (Şart 1).")
D_IBS17 = {"ad": "IBS No. 17 China–Korea Boundary", "tarih": "1962", "tur": "resmî sınır çalışması", "url": IBS17, "sayfa": "2"}
D_FRAVEL = {"ad": "M. Taylor Fravel, 'Regime Insecurity and International Cooperation', International Security 30/2 (2005)",
            "tarih": "2005", "tur": "akademik", "url": FRAVEL, "sayfa": "Tablo 1",
            "alinti": "China received 40% of the disputed crater lake on Changbai Mt."}
KAYIT = {
    "Tumen": dict(id="d1923-jp-cn-tumen", dayanak=[
        {"ad": "Çin–Japon Tumen (Gando) Anlaşması", "madde": "md. I", "tarih": "1909-09-04", "tur": "antlaşma",
         "kaynak": "IBS 17 s. 3'teki alıntı", "alinti": "the River Tumen is recognized as forming the boundary between China and Korea"},
        {"ad": "Tumen demiryolu köprüsü anlaşması (Çin–Japonya)", "madde": "md. I", "tarih": "1915-06-09", "tur": "anlaşma",
         "kaynak": "IBS 17 s. 4", "not": "yalnız köprü ortası; nehirdeki hattı etkilemez"},
        dict(D_IBS17, alinti="apparently no detailed demarcation of the boundary in the two rivers has ever been made"),
        D_FRAVEL]),
    "Yalu": dict(id="d1923-jp-cn-yalu", dayanak=[
        dict(D_IBS17, alinti="the Yalu has been accepted as the boundary since at least 1875"),
        {"ad": "Antung–Mukden hattı sınır geçişi anlaşması (Çin–Japonya)", "madde": "md. 2", "tarih": "1911-11-02",
         "tur": "anlaşma", "kaynak": "IBS 17 s. 4",
         "alinti": "the centre of the Yalu Bridge shall be regarded as the frontier",
         "not": "yalnız köprü; IBS 17: nehirdeki olağan hat bundan etkilenmez"},
        D_FRAVEL]),
}

kayitlar = []
for p in parcalar:
    ad = et[p[0]]
    ls = LineString([c[i] for i in p])
    h = dizi(ls)
    k = KAYIT[ad]
    kayitlar.append({
        "id": k["id"], "taraflar": [JP, CN], "f": "1911-10-10", "t": "1923-10-29",
        "kategori": "C", "sinif": "C",
        "sinif_not": f"{DAMGA}: asya dosyasındaki d1923-jp-cn-BILINMIYOR-yalu-tumen (D-YOK, hat null) kutusunun "
                     f"{ad.upper()} NEHİR kesimi → C. Belge nehri ADIYLA verir (kaba); iki taraf tanıyor.",
        "sol_taraf": sol_taraf(ls), "hat": h, "uzunluk_km": round(uzunluk(h), 1),
        "geometri_kaynagi": GEO, "degisti": DEGISTI, "tahdit": None,
        "kesinlik_km": None, "kesinlik_not": KESIN, "dayanak": k["dayanak"],
        "not": f"{DAMGA}. Nehir etiketi NE 10m rivers (≤{ESIK_NEHIR_KM:g} km): {ad}. {PAY_NOT} "
               "f 1911-10-10: taraf künyesi cin-cumhuriyeti o gün başlıyor (hattın belgesi daha eski; öncesi Faz 2'nin işi). "
               "Kore 1910-08-29'dan beri meiji-japonya gövdesinde (ilhak) — ayrı künye yok. "
               + ("Doğu ucu bugünkü ÇHC–KDHC–Rusya üçlü noktası; 1860/1886 Rus–Çin 'T' direğinin yeri ile örtüşmesi ölçülmedi."
                  if ad == "Tumen" else "Batı ucu bugünkü hattın deniz ucu (Yalu ağzı).")})

# ---- §5.4 ölçüm: 5 km şerit, doğru renk ----
GV = json.load(open(GOVDE, encoding="utf-8"))
GOV = [(f["properties"]["id"], shape(f["geometry"]).buffer(0)) for f in GV["features"]]
print(f"gövdeler ({GOVDE.split('/')[-1]}): {', '.join(i for i, _ in GOV)}")


def sahip(x, y):
    p = Point(x, y)
    for i, g in GOV:
        if g.contains(p):
            return i
    return None


def serit(hat, sol, taraflar, adim=10.0, ofs=5.0):
    sag = [t for t in taraflar if t != sol][0]
    ls = LineString(hat); L = uzunluk(hat)
    n = max(2, int(L // adim) + 1)
    dogru = yanlis = bos = 0; yanlis_ornek = {}
    for j in range(n):
        m = ls.interpolate(j / (n - 1), normalized=True)
        a = ls.interpolate(max(0, ls.project(m) - 0.01)); b = ls.interpolate(min(ls.length, ls.project(m) + 0.01))
        dx, dy = b.x - a.x, b.y - a.y; nn = math.hypot(dx, dy) or 1
        dlat = ofs / 111.0; dlon = ofs / (111.0 * math.cos(math.radians(m.y)))
        for isaret, bek in ((1, sol), (-1, sag)):
            x = m.x - isaret * dy / nn * dlon; y = m.y + isaret * dx / nn * dlat
            s = sahip(x, y)
            if s is None: bos += 1
            elif s == bek: dogru += 1
            else: yanlis += 1; yanlis_ornek[s] = yanlis_ornek.get(s, 0) + 1
    pay = dogru + yanlis
    return dogru, yanlis, bos, (100.0 * dogru / pay if pay else float("nan")), yanlis_ornek


print("\n§5.4 — 1923-09-01, hattın iki yanında 5 km, doğru renk (C yaslanmaz ⇒ ÖNCE = SONRA):")
for k in kayitlar:
    d, y, b, o, yo = serit(k["hat"], k["sol_taraf"], k["taraflar"])
    print(f"  {k['id']:22s} {k['uzunluk_km']:7.1f} km · doğru {d} · yanlış {y} {yo} · gövdesiz {b} · %{o:.1f} (sol={k['sol_taraf']})")
# pozitif kontrol: ters sol_taraf verilince oran çökmeli
k0 = kayitlar[0]; ters = [t for t in k0["taraflar"] if t != k0["sol_taraf"]][0]
d, y, b, o, _ = serit(k0["hat"], ters, k0["taraflar"])
print(f"  POZİTİF KONTROL {k0['id']} sol TERS verilince: %{o:.1f} (düşmeli)")

# mevcut (asya ailesindeki) Uzakdoğu hatları — yalnız ölçüm, dokunulmaz
import subprocess
js = ("const fs=require('fs'),vm=require('vm');const x={window:{}};vm.createContext(x);"
      "vm.runInContext(fs.readFileSync('data/d_sinirlar_asya.js','utf8'),x);"
      "console.log(JSON.stringify(x.window.D_SINIRLAR_ASYA.filter(k=>['d1923-jp-sscb-sahalin',"
      "'d1923-sscb-cn-dogu-argun-amur','d1923-sscb-cn-dogu-ussuri'].includes(k.id))))")
mev = json.loads(subprocess.run(["node", "-e", js], capture_output=True, text=True, encoding="utf-8").stdout)
print("  — mevcut asya hatları (başka dosya, ölçüm):")
for k in mev:
    d, y, b, o, yo = serit(k["hat"], k["sol_taraf"], k["taraflar"])
    print(f"  {k['id']:30s} {k['sinif']} {k['uzunluk_km']:7.1f} km · doğru {d} · yanlış {y} {yo} · gövdesiz {b} · %{o:.1f}")

BASLIK = f"""// -*- coding: utf-8 -*-
// data/d_sinirlar_uzakdogu.js — SINIR HATLARI · UZAKDOĞU (Japonya · Kore · Sahalin · Kuriller · Kamçatka · Rus Uzakdoğusu)
// Şartname oturumlar/BITIR-1923-0078.md §3.1 · şema denetim/SEMA-D-0916.md · rapor denetim/SINIR-UZAKDOGU-0078.md
// Üretici: denetim/SINIR-UZAKDOGU-0078-uret.py — 🔴 ELLE DÜZENLEME, yeniden üret.
// sinif (BAĞLAYICI): F > E > D > C > YOK · sol_taraf: `hat` ilerleme yönüne göre SOLDA kalan devlet.
// KAPSAMDA 1923-09-01'de KARA SINIRI yalnız dört: Sahalin 50°K (E) · Amur/Ussuri (C) — ikisi de
//   data/d_sinirlar_asya.js'te, BU DOSYAYA KOPYALANMADI · Kore–Çin (Yalu, Tumen → BU DOSYA, C) ·
//   Kore–SSCB aşağı Tumen (~17 km, tanımlayan antlaşma yok ⇒ YOK, asya'da D-YOK kaydı var).
// 144°D DOĞUSU: 1923'te KARA SINIRI YOK (Kuriller tümüyle Japon, 1875 St. Petersburg; Kamçatka/Çukotka tümüyle
//   Sovyet; Kuriller–Kamçatka ve Bering hatları DENİZ sınırıdır) ⇒ çizilecek hat yok, boşluk değil.
// YAZILMAYANLAR: Sungaça–Hanka–Tumen (Rus–Çin kara; koordinatör hükmü Şart 1, asya'da YOK) · Paektu kesimi
//   (tartışmalı, 1962'de değişti) · Kwantung kira hattı (kiralık toprak; asya envanterinde dışarıda).

window.D_SINIRLAR_UZAKDOGU = ["""


def dok(o):
    return json.dumps(o, ensure_ascii=False, separators=(",", ":"))


metin = BASLIK + "\n" + ",\n".join(dok(k) for k in kayitlar) + "\n];\n"
print(f"\n{len(kayitlar)} kayıt · {sum(k['uzunluk_km'] for k in kayitlar):.1f} km")
if YAZ:
    open(DOSYA, "w", encoding="utf-8", newline="\n").write(metin)
    print("YAZILDI:", DOSYA)
else:
    print("kuru koşu — yazmak için --yaz")
