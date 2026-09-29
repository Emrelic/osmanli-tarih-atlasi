# KRONO-ATLANTIK-B-0929 — kronoloji_ingiltere.js ve kronoloji_hollanda.js düzeltmeleri.
# Her kalem denetim/KRONO-ATLANTIK-B-0929-DUZELTME.md'de kaynağıyla kayıtlı.
# Her değişiklik TAM BİR KEZ eşleşmek zorunda; eşleşmezse betik durur, dosya yazılmaz.
# Kullanım: py -X utf8 denetim/ARAC-KRONO-ATLANTIK-B-0929-UYGULA.py [--yaz]
import re, sys, datetime
sys.stdout.reconfigure(encoding="utf-8", errors="replace")
YAZ = "--yaz" in sys.argv
AY = ["Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran", "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"]
sayac = {}

def bir(s, eski, yeni, etiket):
    n = s.count(eski)
    if n != 1:
        sys.exit(f"DUR: '{etiket}' {n} kez eşleşti (1 beklenir): {eski[:80]!r}")
    sayac[etiket] = 1
    return s.replace(eski, yeni)

def blok_degistir(s, t, bas, fn, etiket):
    """t: ve b: başı ile bulunan maddenin bloğunu fn(blok) ile değiştirir."""
    bul = [m for m in re.finditer(r'\{ t:"' + re.escape(t) + r'", b:"' + re.escape(bas) + r'.*?\},?\n', s, flags=re.S)]
    if len(bul) != 1:
        sys.exit(f"DUR: blok '{etiket}' {len(bul)} kez bulundu")
    m = bul[0]
    yeni = fn(m.group(0))
    if yeni == m.group(0):
        sys.exit(f"DUR: blok '{etiket}' değişmedi")
    sayac[etiket] = 1
    return s[:m.start()] + yeni + s[m.end():]

def gun_ekle(blok, gun):
    if re.search(r"\bgun:", blok):
        sys.exit("DUR: blokta zaten gun: var: " + blok[:60])
    i = blok.index('\n  d:"')
    return blok[:i] + '\n  gun:"' + gun + '",' + blok[i:]

def kaynak_ekle(blok, ek):
    return re.sub(r'kaynak:"([^"]*)"', lambda m: 'kaynak:"' + m.group(1) + ' · ' + ek + '"', blok, count=1)

def tr(t):
    y, a, g = map(int, t.split("-"))
    return f"{g} {AY[a-1]} {y}"

# ═════════════════════════ İNGİLTERE ═════════════════════════
P = "data/kronoloji_ingiltere.js"
s = open(P, encoding="utf-8").read()
s0 = s

# İ-01 · 32 maddede yer_id anahtarı İKİ KEZ yazılmış (JS'te ikincisi geçerli). İlk, boş olanı sil —
# etkin değer DEĞİŞMEZ; yalnız belirsizlik kalkar.
cift = 0
def tekle(m):
    global cift
    b = m.group(0)
    if len(re.findall(r'yer_id:"', b)) == 2:
        cift += 1
        return b.replace('\n  yer_id:"",', "", 1)
    return b
s = re.sub(r'\{ t:"[^"]+".*?\},?\n', tekle, s, flags=re.S)
if cift != 32:
    sys.exit(f"DUR: çift yer_id {cift} (32 beklenir)")
sayac["İ-01 çift yer_id x32"] = 1

# İ-02 · Dafydd ap Gruffudd'un idam günü: 3 Ekim 1283 (Haziran, yakalanışının ayıdır)
s = blok_degistir(s, "1283-06-03", "Dafydd ap Gruffudd idam edildi", lambda b: kaynak_ekle(gun_ekle(
    b.replace('t:"1283-06-03"', 't:"1283-10-03"'),
    "3 Ekim 1283 (Jülyen) — Shrewsbury"),
    "Dictionary of Welsh Biography (Llyfrgell Genedlaethol Cymru), 'Dafydd ap Gruffydd': \\\"on 3 October 1283\\\" idam; Haziran 1283'e kadar direndi"),
    "İ-02 Dafydd 1283-10-03")

# İ-03 · Norveçli Margaret — "Piast hattı" Leh hanedanıdır, İskoçya ile ilgisi yok
s = bir(s, 'b:"Norveçli Margaret (Genç Kız) denizde öldü — Piast hattı tükendi"',
        'b:"Norveçli Margaret (Genç Kız) denizde öldü — III. Alexander\'ın soyu tükendi"', "İ-03 Margaret Piast")

# İ-04 · Utopia Londra'da değil Louvain'de (Leuven) basıldı, Aralık 1516
s = blok_degistir(s, "1516-01-01", "Thomas More'un Utopia'sı", lambda b: kaynak_ekle(gun_ekle(
    b.replace('yer_id:"Londra"', 'yer_id:""').replace("Utopia'yı Latince yayımladı.", "Utopia'yı Latince olarak Louvain'de (Leuven) yayımladı."),
    "Aralık 1516 (15 Aralık 1516 - 5 Ocak 1517 arası), Louvain — Dirk Martens baskısı"),
    "ORBi (Université de Liège) / Brepols: 'The First Edition of Thomas More's Utopia in Louvain, its Printer Dirk Martens…' (2021) — ilk baskı Louvain, Aralık 1516"),
    "İ-04 Utopia Louvain")

# İ-05 · Oliver Twist'in tefrikası Nisan 1839'da bitti; 1838-05-15 hiçbir olaya karşılık gelmiyor
s = blok_degistir(s, "1838-05-15", "Dickens'ın Oliver Twist'i", lambda b: kaynak_ekle(gun_ekle(
    b.replace('t:"1838-05-15"', 't:"1839-01-01"'),
    "Nisan 1839 — son tefrika (Bentley's Miscellany, Şubat 1837 – Nisan 1839); kitap baskısı 1838'de, tefrika bitmeden çıktı"),
    "Broadview Press 'Oliver Twist' baskı tanıtımı ve CSUN University Library 'Bentley's Miscellany, Boz, and Oliver Twist' (arama özeti üzerinden okundu: tefrika Şubat 1837 – Nisan 1839)"),
    "İ-05 Oliver Twist 1839")

# İ-06 · Kraliçe Anne'nin tahta çıkışı ≠ savaşa giriş (İngiltere savaşı 4 Mayıs 1702'de ilân etti)
s = blok_degistir(s, "1702-03-08", "Kraliçe Anne tahta çıktı", lambda b: gun_ekle(
    b.replace('b:"Kraliçe Anne tahta çıktı — İspanya Veraset Savaşı başladı", tur:"savas"',
              'b:"Kraliçe Anne tahta çıktı", tur:"hukumdar"'),
    "8 Mart 1702 (Jülyen; Gregoryen 19 Mart 1702)"), "İ-06 Anne 1702")

# İ-07 · Hastings Genel Vali olarak 20 Ekim 1774'te göreve başladı (Yasa 1773)
s = blok_degistir(s, "1773-01-01", "Warren Hastings", lambda b: kaynak_ekle(gun_ekle(
    b.replace('t:"1773-01-01"', 't:"1774-10-20"').replace(
        "Warren Hastings ilk Genel Vali olarak atandı.", "Warren Hastings ilk Genel Vali olarak atandı; yeni Konsey 20 Ekim 1774'te göreve başladı (Yasa 1773 tarihlidir)."),
    "20 Ekim 1774 — Genel Vali ve Konsey'in göreve başlaması"),
    "Britannica, 'Warren Hastings' (Genel Vali 1774-1785; Regulating Act 1773)"),
    "İ-07 Hastings 1774")

# İ-08..İ-12 · Yıl düzeyinde yazılmış ama günü kurumsal kaynakta açık olan beş madde
for t0, t1, bas, gun, kay in [
    ("1811-01-01", "1811-10-30", "Jane Austen'ın Sağduyu", "30 Ekim 1811 — Thomas Egerton, Londra",
     "Jane Austen's House müzesi 'First edition: Sense and Sensibility' ve JASNA: 30 Ekim 1811"),
    ("1798-01-01", "1798-10-04", "Wordsworth ve Coleridge", "4 Ekim 1798",
     "Britannica, 'Lyrical Ballads': ilk baskı 4 Ekim 1798"),
    ("1833-01-01", "1833-08-29", "Fabrika Yasası", "29 Ağustos 1833 — kraliyet onayı",
     "UK Parliament, 'The 1833 Factory Act' · Britannica 'Factory Act 1833': kraliyet onayı 29 Ağustos 1833"),
    ("1838-05-01", "1838-05-08", "Halkın Fermanı", "8 Mayıs 1838 — London Working Men's Association",
     "UK Parliament Living Heritage, '1838 People's Charter': yayım 8 Mayıs 1838"),
    ("1908-01-01", "1908-08-01", "Yaşlılık Aylığı Yasası", "1 Ağustos 1908 — kraliyet onayı (yürürlük 1 Ocak 1909)",
     "House of Commons Library, 'Old Age Pensions Act 1908' (SN04817): kraliyet onayı 1 Ağustos 1908"),
]:
    s = blok_degistir(s, t0, bas, lambda b, t0=t0, t1=t1, gun=gun, kay=kay: kaynak_ekle(gun_ekle(
        b.replace('t:"' + t0 + '"', 't:"' + t1 + '"'), gun), kay), "İ-gün " + t1)

# İ-13 · ILP: gün kaynaklarda 13/14 Ocak arasında çelişik — yıl kalır, ay gun:'a
s = blok_degistir(s, "1893-01-01", "Bağımsız İşçi Partisi", lambda b: gun_ekle(b,
    "Ocak 1893 — Bradford kuruluş konferansı (başlangıç günü kaynaklarda 13 ve 14 Ocak olarak farklı)"), "İ-13 ILP")

# İ-14 · Machynlleth parlamentosu: 21 Mart günü hiçbir kaynakta yok (sahte kesinlik)
s = blok_degistir(s, "1404-03-21", "Owain Glyndŵr Machynlleth", lambda b: kaynak_ekle(gun_ekle(
    b.replace('t:"1404-03-21"', 't:"1404-01-01"'), "1404 (gün kaynakta yok; Fransa ittifakı aynı yıl)"),
    "RCAHMW (Royal Commission on the Ancient and Historical Monuments of Wales), 'In the steps of Owain Glyndŵr': parlamento 1404, gün vermez"),
    "İ-14 Machynlleth 1404")

# İ-15 · 1853-10-04 Osmanlı'nın savaş ilânıdır; Britanya 28 Mart 1854'te girdi
s = blok_degistir(s, "1853-10-04", "Kırım Savaşı başladı", lambda b: gun_ekle(
    b.replace('b:"Kırım Savaşı başladı — Britanya Osmanlı\'nın yanında yer aldı"',
              'b:"Kırım Savaşı başladı — Britanya Osmanlı\'yı diplomatik olarak destekledi"').replace(
        "Britanya ve Fransa'nın Osmanlı yanında savaşa girmesiyle büyük bir Avrupa savaşına dönüştü.",
        "Britanya ve Fransa'nın 28 Mart 1854'te Osmanlı yanında savaşa girmesiyle büyük bir Avrupa savaşına dönüştü."),
    "4 Ekim 1853 — Osmanlı'nın Rusya'ya savaş ilânı; Britanya'nın savaşa girişi 28 Mart 1854 (kronoloji_cok_ingiltere.js)"),
    "İ-15 Kırım 1853 başlık")

# İ-16..İ-20 · TDV ay verir, gün vermez — hassasiyet gun:'a yazılır (t: değişmez)
for t0, bas, gun in [
    ("1578-01-01", "William Harborne", "Ekim 1578 (TDV `ingiltere`: \\\"Ekim 1578’de\\\"; gün yok)"),
    ("1799-01-01", "Napolyon'un Mısır Seferi'ne karşı", "Ocak 1799 (TDV `ingiltere`: \\\"Ocak 1799’da\\\"; gün yok)"),
    ("1807-02-01", "İngiliz donanması İstanbul", "Şubat 1807 (TDV `ingiltere`; gün yok — t:'nin 01'i ay kodudur)"),
    ("1807-03-01", "İskenderiye ve Ebûkīr", "Mart 1807 (TDV `ingiltere`, `ebukir`; gün yok — t:'nin 01'i ay kodudur)"),
    ("1867-07-01", "Sultan Abdülaziz", "Temmuz 1867 (TDV `ingiltere`; gün yok — t:'nin 01'i ay kodudur)"),
    ("1581-09-11", "Levant Company", "11 Eylül 1581 (Jülyen) — ⚠️ TDV yalnız \\\"1581’de\\\" der; günün kaynağı bu oturumda bulunamadı"),
]:
    s = blok_degistir(s, t0, bas, lambda b, gun=gun: gun_ekle(b, gun), "İ-ay " + t0)

# İ-21 · TAKVİM — 1582-10-15 ile 1752-09-14 arası İngiliz/İskoç/İrlanda günleri JÜLYEN'dir;
# üç istisna Gregoryen'dir (kıta kaynaklı). Her birine gun: yazılır, t: ÇEVRİLMEZ.
OZEL = {
    "1588-08-08": "8 Ağustos 1588 GREGORYEN (Gravelines; İngiliz takviminde 29 Temmuz) — ⚠️ dosyanın öteki 1582-1752 günleri Jülyen",
    "1699-01-26": "26 Ocak 1699 = 24 Receb 1110 (TDV `karlofca`; Gregoryen — İngiliz takviminde 16 Ocak 1698/99)",
    "1704-08-13": "13 Ağustos 1704 GREGORYEN (İngiliz takviminde 2 Ağustos) — ⚠️ dosyanın öteki 1582-1752 günleri Jülyen",
}
AYKOD = {"1665-06-01": "Haziran 1665 (ay; gün yok)", "1720-09-01": "Eylül 1720 (ay; gün yok)",
         "1698-11-01": "Kasım 1698 (Darien'e varış ayı; gün yok)"}
takvim = 0
def takvim_notu(m):
    global takvim
    b = m.group(0)
    t = m.group(1)
    if not ("1582-10-15" <= t < "1752-09-14") or re.search(r"\bgun:", b):
        return b
    if t in OZEL:
        not_ = OZEL[t]
    elif t in AYKOD:
        not_ = AYKOD[t]
    elif t.endswith("-01-01"):
        return b
    else:
        y, a, g = map(int, t.split("-"))
        fark = 10 if t < "1700-03-01" else 11
        ns = datetime.date(y, a, g) + datetime.timedelta(days=fark)
        yil_notu = " (eski İngiliz yılbaşı 25 Mart: çağdaş kayıtta " + f"{y-1}/{str(y)[2:]})" if (a < 3 or (a == 3 and g < 25)) else ""
        not_ = f"{tr(t)} JÜLYEN (İngiliz eski takvimi; Gregoryen {tr(ns.isoformat())}){yil_notu}"
    takvim += 1
    return gun_ekle(b, not_)
s = re.sub(r'\{ t:"([^"]+)".*?\},?\n', takvim_notu, s, flags=re.S)
sayac[f"İ-21 takvim notu x{takvim}"] = 1

if YAZ:
    open(P, "w", encoding="utf-8").write(s)

# ═════════════════════════ HOLLANDA ═════════════════════════
P2 = "data/kronoloji_hollanda.js"
h = open(P2, encoding="utf-8").read()

# H-01 · Amsterdam Borsası: kaynak GÜN vermiyor ("GÜN DOĞRULANMADI") ama 21 Mart yazılmış
h = blok_degistir(h, "1602-03-21", "Amsterdam Borsası", lambda b: gun_ekle(
    b.replace('t:"1602-03-21"', 't:"1602-01-01"'), "1602 (kaynak yıl verir; önceki 21 Mart günü kaynaksızdı)"), "H-01 Borsa 1602")
# H-02 · Mare Liberum: ay kaynakta yok, 1 Kasım kaynaksız
h = blok_degistir(h, "1609-11-01", "Grotius'un Mare Liberum", lambda b: gun_ekle(
    b.replace('t:"1609-11-01"', 't:"1609-01-01"'), "1609 (Leiden, Elzevier; kaynak ay/gün vermez — önceki 1 Kasım kaynaksızdı)"), "H-02 Mare Liberum 1609")
# H-03 · Şanlı İhtilâl: gün İNGİLİZ (Jülyen) takvimidir, Hollanda'nınki 15 Kasım; dunya İngiltere dosyasıyla eşitlenir (5→4)
h = blok_degistir(h, "1688-11-05", "III. William'ın İngiltere'ye", lambda b: gun_ekle(
    b.replace("dunya:5", "dunya:4"),
    "5 Kasım 1688 JÜLYEN (Torbay çıkarması, İngiliz takvimi) = 15 Kasım 1688 Gregoryen (Hollanda takvimi)"), "H-03 1688 takvim+dunya")
# H-04 · Armada: Gregoryen
h = blok_degistir(h, "1588-08-08", "İspanyol Armadası", lambda b: gun_ekle(b,
    "8 Ağustos 1588 Gregoryen (Gravelines; İngiliz takviminde 29 Temmuz)"), "H-04 Armada takvim")
# H-05 · 1583 sonrası Hollanda iç günleri Gregoryen
for t0, bas in [("1585-08-17", "Anvers'in düşüşü"), ("1602-03-20", "VOC'nin kurulması"), ("1609-01-31", "Amsterdam Wisselbank"),
                ("1609-04-09", "On İki Yıllık Ateşkes"), ("1619-05-30", "Batavia'nın kurulması"), ("1621-04-09", "On İki Yıllık Ateşkesin"),
                ("1625-06-05", "Breda'nın kaybı"), ("1629-04-14", "Christiaan Huygens"), ("1632-11-24", "Spinoza'nın doğumu"),
                ("1637-02-03", "Lâle çılgınlığı"), ("1639-10-21", "Downs Deniz Savaşı"), ("1648-01-30", "Münster Antlaşması"),
                ("1648-10-24", "Vestfalya Barışı"), ("1652-04-06", "Kap kolonisinin"), ("1667-06-19", "Medway baskını"),
                ("1677-02-21", "Spinoza'nın ölümü"), ("1713-04-11", "Utrecht Antlaşması")]:
    h = blok_degistir(h, t0, bas, lambda b, t0=t0: gun_ekle(b, tr(t0) + " Gregoryen"), "H-05 " + t0)
h = blok_degistir(h, "1652-07-10", "Birinci İngiliz-Hollanda", lambda b: gun_ekle(b,
    "10 Temmuz 1652 — takvimi ÖLÇÜLEMEDİ (İngiliz ilânı Jülyen olabilir; kaynak bulunamadı)"), "H-06 1652 takvim")

if YAZ:
    open(P2, "w", encoding="utf-8").write(h)

print("uygulanan kalem:", len(sayac))
for k in sayac:
    print("  ✓", k)
print("YAZILDI" if YAZ else "KURU KOŞU — dosya yazılmadı (--yaz)")
