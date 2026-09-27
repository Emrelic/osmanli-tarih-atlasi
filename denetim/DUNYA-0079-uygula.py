"""DUNYA-0079 — yama uygulayıcısı (A · B · C, üç AYRI sınıf).

Kullanım:
  py denetim/DUNYA-0079-uygula.py              → KURU KOŞU (varsayılan): ne yapacağını basar
  py denetim/DUNYA-0079-uygula.py --uygula     → yazar
  --dobruca   B3'ü de dahil eder (Kuzey Dobruca; bitiş günü KOORDİNATÖR KARARI — varsayılan KAPALI)

Kurallar (M-5276):
  · hedef kayıt bulunamazsa / birden çok eşleşirse → ATLA ve BİLDİR
  · yeni metin kayıtta zaten varsa → DOKUNMA, "zaten böyle" de  (İDEMPOTENT)
  · `eski` metin kayıtta BİREBİR yoksa → YAZMA (kayıt değişmiş demektir)
  · her yeni/bölünen dönem `kaynak:` taşır
  · kronoloji maddesi YAZILMAZ (C1'in maddesi koordinatöre bildirilir)
  · devletler.js: YALNIZ `moskova` künyesinin `f` alanı
Rapor: denetim/DUNYA-0079.md · yama metni: denetim/DUNYA-0079-yama.txt
"""
import sys, re, os
sys.stdout.reconfigure(encoding="utf-8", errors="replace")
KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
os.chdir(KOK)
UYGULA = "--uygula" in sys.argv
DOBRUCA = "--dobruca" in sys.argv


def P(f, t, d, kaynak=None):
    k = "" if kaynak is None else ',kaynak:"%s"' % kaynak.replace('"', "'")
    return '{f:"%s",t:"%s",d:"%s"%s}' % (f, t, d, k)


# ── A · ABD-MEKSİKA — yazım kalıbı hatası ("yeni-ispanya→meksika→1923" kopyası) ──
K_GH = "Guadalupe Hidalgo Antlaşması (imza 1848-02-02) — DUNYA-0079; gün, aynı hattaki mevcut 6 noktayla (San Francisco, San Diego, Santa Fe…) aynı kırılma"
K_GADSDEN = "Gadsden alımı, onay teatisi 1854-06-30 (sınır katmanı d1923-us-mx-gadsden ile aynı gün) — DUNYA-0079"
K_TX1 = "Teksas bağımsızlık ilanı 1836-03-02 (künye teksas-cumhuriyeti f) — DUNYA-0079"
K_TX2 = "Teksas'ın ABD'ye katılışı 1845-12-29 (künye teksas-cumhuriyeti t) — DUNYA-0079"
K_AO = "Adams-Onís Antlaşması, onay teatisi 1821-02-22: Sabine doğusu ABD; Los Adaes hiç Meksika olmadı (1806-1821 Neutral Ground ihtilaf şeridi) — DUNYA-0079"
K_LA = "Louisiana devri 1803-12-20 (New Orleans); St. Louis hiç Meksika olmadı. Yukarı Louisiana töreni 1804-03-10 kaynakla DOĞRULANMADI — DUNYA-0079"
K_FL = "günler komşudan: St. Augustine · Weber (1992) — aynı süreç (Florida devirleri); Florida 'ispanya' (Küba'ya bağlı), hiç Meksika olmadı — DUNYA-0079"

MX = P("1821-09-27", "1923-10-29", "meksika")
A = []
for ad in ["San José de Guadalupe", "Monterey (Alta California)", "Santa Bárbara",
           "Los Ángeles (El Pueblo)", "Yuma geçidi (La Purísima Concepción)", "Albuquerque",
           "Santa Rita del Cobre", "Laredo"]:
    A.append(("data/yerlesimler_kamerika.js", ad, MX,
              P("1821-09-27", "1848-02-02", "meksika") + "," + P("1848-02-02", "1923-10-29", "abd", K_GH)))
A.append(("data/yerlesimler_kamerika.js", "Las Vegas (Yeni Meksika)", P("1835-01-01", "1923-10-29", "meksika"),
          P("1835-01-01", "1848-02-02", "meksika") + "," + P("1848-02-02", "1923-10-29", "abd", K_GH)))
A.append(("data/yerlesimler_kamerika.js", "Fort Robidoux (Uinta Havzası)", P("1832-01-01", "1923-10-29", "meksika"),
          P("1832-01-01", "1848-02-02", "meksika") + "," + P("1848-02-02", "1923-10-29", "abd", K_GH)))
for ad in ["Tucson (San Agustín del Tucsón)", "Tubac"]:
    A.append(("data/yerlesimler_kamerika.js", ad, MX,
              P("1821-09-27", "1854-06-30", "meksika") + "," + P("1854-06-30", "1923-10-29", "abd", K_GADSDEN)))
A.append(("data/yerlesimler_kamerika.js", "Nacogdoches", MX,
          P("1821-09-27", "1836-03-02", "meksika") + "," + P("1836-03-02", "1845-12-29", "teksas-cumhuriyeti", K_TX1)
          + "," + P("1845-12-29", "1923-10-29", "abd", K_TX2)))
A.append(("data/yerlesimler_kamerika.js", "Los Adaes",
          P("1721-01-01", "1821-09-27", "yeni-ispanya") + "," + MX,
          P("1721-01-01", "1821-02-22", "yeni-ispanya") + "," + P("1821-02-22", "1923-10-29", "abd", K_AO)))
A.append(("data/yerlesimler_kamerika.js", "St. Louis",
          P("1764-02-14", "1821-09-27", "yeni-ispanya") + "," + MX,
          P("1764-02-14", "1803-12-20", "yeni-ispanya") + "," + P("1803-12-20", "1923-10-29", "abd", K_LA)))
A.append(("data/yerlesimler_kamerika.js", "Mission San Luis (Apalaçi)",
          P("1656-01-01", "1821-09-27", "yeni-ispanya") + "," + MX,
          P("1656-01-01", "1763-02-10", "ispanya", K_FL) + "," + P("1763-02-10", "1783-09-03", "ingiltere", K_FL)
          + "," + P("1783-09-03", "1821-07-10", "ispanya", K_FL) + "," + P("1821-07-10", "1923-10-29", "abd", K_FL)))

# ── B · HAYALET (Boğdan 1359 / Eflak 1330 öncesi) — künye GENİŞLETİLMEZ, ilk dönem öncüle ──
K_BUCAK = "TDV bucak: '1241'den sonra Moğollar ve onların halefleri olan Altın Orda Hanlığı Bucak'a hâkim olmuşlardır' · TDV akkirman: '1241 yılında Moğollar'ın hâkimiyetine geçen' · bitiş = künye bogdan f (1359) — DUNYA-0079"
K_MOLD = "ÇIKARIM: TDV bogdan 'XIII. yüzyıldan itibaren de Tatarlar'la Gagauzlar'ın istilâsına uğrayan Moldavya' + TDV bucak (komşu). 1345-1359 Macar markı (Dragoş) yılı TDV'de bulunamadı · bitiş = künye bogdan f — DUNYA-0079"
K_EFLAK = "TDV eflak: 'Eflak bu tarihlerde Macar hâkimiyetindeydi' · 1310 Basarab · 1330 Posada (bitiş = künye eflak f) — DUNYA-0079"
K_DOB = "TDV dobruca: II. Bulgar devleti 'Dobruca'nın 1241'de Moğollar tarafından istilâsına kadar' · 'Moğol hâkimiyetine giren Dobruca'. Bitiş 1359 = Dobrotiç'in Kuzey Dobruca'yı işgali (TDV dobruca), gün yok — DUNYA-0079"

B = []
BOG = P("1281-01-01", "1456-06-01", "bogdan")
for ad, dosya, k in [("Kili", "data/yerlesimler.js", K_BUCAK), ("İsmail", "data/yerlesimler.js", K_BUCAK),
                     ("Akkirman", "data/yerlesimler.js", K_BUCAK),
                     ("Kahul (Cahul)", "data/yerlesimler_p0037.js", K_MOLD),
                     ("Kalas (Galatz)", "data/yerlesimler.js", K_MOLD), ("Birlad (Bârlad)", "data/yerlesimler.js", K_MOLD),
                     ("Roman", "data/yerlesimler.js", K_MOLD), ("Yaş", "data/yerlesimler.js", K_MOLD),
                     ("Suçava (Suceava)", "data/yerlesimler.js", K_MOLD), ("Çernovitz (Çernivtsi)", "data/yerlesimler.js", K_MOLD),
                     ("Soroka (Soroca)", "data/yerlesimler.js", K_MOLD), ("Orhei", "data/yerlesimler.js", K_MOLD),
                     ("Bender", "data/yerlesimler.js", K_MOLD)]:
    B.append((dosya, ad, BOG, P("1281-01-01", "1359-01-01", "altinorda", k) + "," + P("1359-01-01", "1456-06-01", "bogdan")))
EF = P("1281-01-01", "1462-06-01", "eflak")
for ad in ["İbrail", "Buzău", "Rimnik-i Sârat (Râmnicu Sărat)", "Bükreş", "Tırgovişte", "Piteşti", "Slatina",
           "Krayova (Craiova)", "Tırgu Jiu", "Turnu Severin", "Kımpulung (Câmpulung)", "Rimnik (Râmnicu Vâlcea)"]:
    B.append(("data/yerlesimler.js", ad, EF, P("1281-01-01", "1330-01-01", "macaristan", K_EFLAK) + "," + P("1330-01-01", "1462-06-01", "eflak")))
B.append(("data/yerlesimler.js", "Yergöğü (Giurgiu)", P("1281-01-01", "1420-01-01", "eflak"),
          P("1281-01-01", "1330-01-01", "macaristan", K_EFLAK) + "," + P("1330-01-01", "1420-01-01", "eflak")))
if DOBRUCA:
    BUL = P("1281-01-01", "1393-09-01", "bulgaristan")
    for dosya, ad in [("data/yerlesimler_ek29.js", "Babadağı (Babadag)"), ("data/yerlesimler_ek29.js", "İshakçı (Isaccea)"),
                      ("data/yerlesimler.js", "Köstence")]:
        B.append((dosya, ad, BUL, P("1281-01-01", "1359-01-01", "altinorda", K_DOB) + "," + P("1359-01-01", "1393-09-01", "bulgaristan")))

# ── C · MOSKOVA — künye dar (sınıf ②): nokta bölünür, künye f genişler ──
K_MOS = "ESBE «Даниил Александрович»: 'получил в удел Москву не позднее 1283 г.' (en geç 1283 — f yıl hassasiyetinde) · 1325 = büyük knezlik unvanı (TDV rusya) — DUNYA-0079"
C = [("data/yerlesimler.js", "Moskova", P("1281-01-01", "1325-01-01", "altinorda") + "," + P("1325-01-01", "1547-01-16", "moskova"),
      P("1281-01-01", "1283-01-01", "altinorda") + "," + P("1283-01-01", "1547-01-16", "moskova", K_MOS))]


METIN = {}


def oku(dosya):
    if dosya not in METIN:
        with open(dosya, encoding="utf-8", newline="") as fh:
            METIN[dosya] = fh.read()
    return METIN[dosya]


def s_blogu(metin, ad):
    """Kaydın `s:[...]` gövdesinin (baş, son) konumu — ad TEK eşleşmeli."""
    idx = [m.start() for m in re.finditer(re.escape('ad:"%s"' % ad), metin)]
    if len(idx) != 1:
        return None, "%d eşleşme" % len(idx)
    m = re.compile(r'(?<![A-Za-z_])s:\[').search(metin, idx[0])
    if not m:
        return None, "s: yok"
    bas = m.end()
    derin, j = 1, bas
    while derin:
        c = metin[j]
        if c == '"':
            j = metin.index('"', j + 1)
            while metin[j - 1] == "\\":
                j = metin.index('"', j + 1)
        elif c == "[":
            derin += 1
        elif c == "]":
            derin -= 1
        j += 1
    sonraki = re.compile(r'(?<![A-Za-z_])ad:"').search(metin, idx[0] + 4)
    if sonraki and sonraki.start() < bas:
        return None, "s: başka kayda ait"
    return (bas, j - 1), None


def uygula_grup(ad_grup, kalemler):
    n = 0
    print("\n== %s ==" % ad_grup)
    for dosya, ad, eski, yeni in kalemler:
        metin = oku(dosya)
        konum, hata = s_blogu(metin, ad)
        if not konum:
            print("  ✗ ATLANDI  %s [%s]: kayıt %s" % (ad, dosya, hata)); continue
        bas, son = konum
        govde = metin[bas:son]
        if yeni in govde:
            print("  = zaten böyle  %s" % ad); continue
        if govde.count(eski) != 1:
            print("  ✗ YAZILMADI  %s: eski metin birebir tutmuyor (%d) — kayıt değişmiş" % (ad, govde.count(eski))); continue
        METIN[dosya] = metin[:bas] + govde.replace(eski, yeni) + metin[son:]
        print("  ✓ %s [%s]\n      - %s\n      + %s" % (ad, os.path.basename(dosya), eski, yeni[:260] + ("…" if len(yeni) > 260 else "")))
        n += 1
    return n


def kunye_moskova():
    dosya = "data/devletler.js"
    metin = oku(dosya)
    m = list(re.finditer(r'\{ id:"moskova",', metin))
    if len(m) != 1:
        print("  ✗ ATLANDI künye moskova: %d eşleşme" % len(m)); return 0
    bas = m[0].start()
    son = metin.index("\n{ id:", bas + 5)
    govde = metin[bas:son]
    if 'f:"1283-01-01", t:"1547-01-16"' in govde:
        print("  = zaten böyle  künye moskova f"); return 0
    eski = 'f:"1325-01-01", t:"1547-01-16"'
    if govde.count(eski) != 1:
        print("  ✗ YAZILMADI künye moskova: eski f birebir tutmuyor"); return 0
    METIN[dosya] = metin[:bas] + govde.replace(eski, 'f:"1283-01-01", t:"1547-01-16"') + metin[son:]
    print("  ✓ künye moskova  f 1325-01-01 → 1283-01-01  (YALNIZ f; künyenin kaynak/ad alanına dokunulmadı)")
    return 1


def a_komsu_dogrula():
    """A: düzeltme delik açmıyor mu — her noktanın 1873'te ABD komşusu var mı (A noktaları hariç)."""
    sys.path.insert(0, "arac")
    import girdi
    Y = girdi.yukle(sessiz=True)
    adlar = {k[1] for k in A}

    def sahip(y, gun):
        for p in y.get("s") or []:
            if p.get("f", "0000") <= gun < p.get("t", "9999"):
                return p.get("d")
    abd = [y for y in Y if y["ad"] not in adlar and sahip(y, "1873-01-01") == "abd"]
    print("\n== A · komşu ABD noktası (1873-01-01, A'nın 16 noktası HARİÇ) ==")
    kotu = 0
    for ad in sorted(adlar):
        y = next(y for y in Y if y["ad"] == ad)
        en = min(abd, key=lambda z: girdi.km(y["lat"], y["lon"], z["lat"], z["lon"]))
        d = girdi.km(y["lat"], y["lon"], en["lat"], en["lon"])
        isaret = "✓" if d <= 400 else "⚠️"
        kotu += d > 400
        print("  %s %-40s en yakın abd: %-34s %5.0f km" % (isaret, ad, en["ad"][:34], d))
    print("  400 km'yi aşan: %d/%d" % (kotu, len(adlar)))


def main():
    print("DUNYA-0079 uygulayıcı — %s%s" % ("UYGULA" if UYGULA else "KURU KOŞU", " · +B3 Dobruca" if DOBRUCA else ""))
    na = uygula_grup("A · ABD-Meksika (yazım kalıbı hatası)", A)
    nb = uygula_grup("B · Boğdan/Eflak hayaleti (künye genişletilmez)" + ("" if DOBRUCA else " — B3 Dobruca KAPALI"), B)
    print("\n== C · Moskova (künye dar, sınıf ②) ==")
    nc = uygula_grup("C · Moskova noktası", C) + kunye_moskova()
    toplam = len(A) + len(B) + len(C) + 1
    print("\ndeğişen kayıt: %d/%d  (A %d/%d · B %d/%d · C %d/2)" % (na + nb + nc, toplam, na, len(A), nb, len(B), nc))
    print("📌 C1 kronoloji maddesi YAZILMADI (kalemim değil): moskova künyesi kronoloji'sine "
          "{t:\"1283-01-01\", tur:\"kurulus\", b:\"Daniil Aleksandroviç Moskova'yı appanaj knezlik olarak yönetiyor\"} "
          "— kaynak ESBE «Даниил Александрович». Künyenin kaynak: alanına da ESBE eklenmeli (M-5276: yalnız f'ye dokunuldu).")
    if not DOBRUCA:
        print("📌 B3 (Babadağı · İshakçı · Köstence) uygulanmadı — bitiş günü koordinatör kararı; --dobruca ile açılır.")
    if UYGULA:
        for dosya, metin in METIN.items():
            with open(dosya, "w", encoding="utf-8", newline="") as fh:
                fh.write(metin)
        print("yazıldı: " + ", ".join(sorted(METIN)))
    a_komsu_dogrula()


if __name__ == "__main__":
    main()
