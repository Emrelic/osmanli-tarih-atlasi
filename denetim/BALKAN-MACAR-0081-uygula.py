"""BALKAN-MACAR-0081 — paket 0081 H-0026 · H-0027 · H-0029 · H-0037 · H-0050 uygulayıcısı.

Varsayılan KURU KOŞU: hiçbir dosyaya yazmaz, her işlemin eşleşme sayısını basar.
    py denetim/BALKAN-MACAR-0081-uygula.py            # kuru
    py denetim/BALKAN-MACAR-0081-uygula.py --uygula   # yazar
Her değişiklik count==1 sınavından geçer; biri tutmazsa HİÇBİR dosya yazılmaz.
Gerekçe ve kaynaklar: denetim/BALKAN-MACAR-0081.md

⚠️ Koşu 17 sürerken UYGULANMAZ (CLAUDE.md §7). Motor tuzu dosyalarına dokunmaz.
"""
import io, re, sys

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8")
import os  # MUTLAK-KOK-DENETIM-1006: kök için
KOK = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), "data") + "\\"
UYGULA = "--uygula" in sys.argv
DOSYA = {}      # ad -> metin (bellekte)
HATA = []
SAYAC = {"islem": 0}


def oku(ad):
    if ad not in DOSYA:
        DOSYA[ad] = open(KOK + ad, encoding="utf-8").read()
    return DOSYA[ad]


def degistir(dosya, eski, yeni, neden):
    m = oku(dosya)
    n = m.count(eski)
    SAYAC["islem"] += 1
    if n != 1:
        HATA.append(f"{dosya}: '{eski[:70]}' {n} kez ({neden})")
        return
    DOSYA[dosya] = m.replace(eski, yeni, 1)


# ─── yerleşim bloğu yardımcıları ────────────────────────────────────────────
def blok(dosya, ad):
    m = oku(dosya)
    bas = [x.start() for x in re.finditer(r'\{\s*ad:\s*"' + re.escape(ad) + '"', m)]
    if len(bas) != 1:
        HATA.append(f"{dosya}: kayıt '{ad}' {len(bas)} kez")
        return None
    son = [x for x in (m.find("\n{ ad:", bas[0] + 5), m.find("\n];", bas[0])) if x > 0]
    return bas[0], min(son)


def nesne_sonu(m, i):
    """i'deki '{'nin kapanışı (iç içe kesinlik:{…} dahil, dizge içi atlanır)."""
    d, j, dizge = 0, i, False
    while j < len(m):
        c = m[j]
        if dizge:
            if c == "\\":
                j += 1
            elif c == '"':
                dizge = False
        elif c == '"':
            dizge = True
        elif c == "{":
            d += 1
        elif c == "}":
            d -= 1
            if d == 0:
                return j
        j += 1
    return -1


def donem(dosya, ad, f, t, yf=None, yt=None, kaynak=None, ek=None, sonra=None):
    """(f,t) dönemini bul (blokta TEK olmalı); tarihlerini değiştir, kaynağı
    başa ekle, `ek` alanlarını ekle, `sonra` metnini nesnenin ARDINA koy."""
    SAYAC["islem"] += 1
    b = blok(dosya, ad)
    if not b:
        return
    m = oku(dosya)
    parca = m[b[0]:b[1]]
    rx = r'f:\s*"' + f + r'"\s*,\s*t:\s*"' + t + '"'
    es = list(re.finditer(rx, parca))
    if len(es) != 1:
        HATA.append(f"{dosya}: {ad} dönemi {f}→{t} {len(es)} kez")
        return
    ac = parca.rfind("{", 0, es[0].start())
    kap = nesne_sonu(parca, ac)
    nes = parca[ac:kap + 1]
    yeni = nes.replace(es[0].group(0), f'f:"{yf or f}",t:"{yt or t}"', 1)
    if kaynak:
        if re.search(r'\bkaynak:"', yeni):
            yeni = re.sub(r'\bkaynak:"', 'kaynak:"' + kaynak.replace("\\", "\\\\") + " · ÖNCEKİ: ", yeni, count=1)
        else:
            yeni = yeni[:-1] + f',kaynak:"{kaynak}"' + "}"
    if ek:
        yeni = yeni[:-1] + "," + ek + "}"
    if sonra:
        yeni = yeni + "," + sonra
    parca = parca[:ac] + yeni + parca[kap + 1:]
    DOSYA[dosya] = m[:b[0]] + parca + m[b[1]:]


def v_ekle(dosya, ad, nesne):
    """Kayda v: dönemi ekle (v:[ yoksa açar)."""
    SAYAC["islem"] += 1
    b = blok(dosya, ad)
    if not b:
        return
    m = oku(dosya)
    parca = m[b[0]:b[1]]
    n = parca.count("v:[")
    if n == 1:
        i = parca.index("v:[") + 3
        bos = parca[i:].lstrip().startswith("]")
        parca = parca[:i] + nesne + ("" if bos else ",") + parca[i:]
    elif n == 0:
        k2 = nesne_sonu(parca, 0)          # kaydın KENDİ kapanışı
        if k2 < 0:
            HATA.append(f"{dosya}: {ad} kapanışı bulunamadı"); return
        parca = parca[:k2].rstrip() + ", v:[" + nesne + "] " + parca[k2:]
    else:
        HATA.append(f"{dosya}: {ad} 'v:[' {n} kez"); return
    DOSYA[dosya] = m[:b[0]] + parca + m[b[1]:]


# ═══ 1 · H-0026 — MOHAÇ GÜNÜNE BAĞLANMIŞ DEVLET DOĞUMU (Macaristan tarafı) ═══
# Habsburg Macaristanı Mohaç GÜNÜ başlıyordu (künye + 30 kayıt). Kaynak:
# TDV suleyman-i ve budin — Ferdinand 17 Aralık 1526'da seçildi; Hırvatlar 1527.
K_HAB = ("BALKAN-MACAR-0081 H-0026: Habsburg dönemi Mohaç GÜNÜNDEN değil I. Ferdinand'ın "
         "Macar kralı ilânından başlar — TDV suleyman-i 'Macar kralı ilân edilmesi: 17 Aralık 1526' · "
         "TDV budin 'Ferdinand’ı (17 Aralık 1526) seçmişti'. Fiilî denetimin kale kale günü bulunamadı")
K_HAB_M = "BALKAN-MACAR-0081: tek krallık ikinci kralın seçimine dek sürer (TDV suleyman-i 17 Aralık 1526)"
K_HIR = ("BALKAN-MACAR-0081 H-0026: TDV hirvatistan 'Mohaç Muharebesi’nden bir yıl sonra (1527) … "
         "Hırvatlar … I. Ferdinand’ı kral olarak seçtiler' — YIL (Cetin maddesi 1527-01-01). "
         "Slavonya'nın ayrı tutumu bulunamadı")
K_HIR_M = "BALKAN-MACAR-0081: TDV hirvatistan 1527 (YIL)"
MACAR_HAB = {  # ad -> Habsburg döneminin t'si
    "Eğri": "1596-10-12", "Kanije": "1600-10-20", "Uyvar": "1663-09-24",
    "Bratislava": "1918-11-11", "Yanıkkale (Győr)": "1594-09-27", "Zigetvar": "1566-09-07",
    "Kassa (Košice)": "1682-09-16", "Eperjes (Prešov)": "1682-09-16", "Tokaj": "1682-09-16",
    "Sopron": "1918-11-11", "Nitra (Nyitra)": "1663-09-24", "Komárom (Komárno)": "1918-11-11",
    "Léva (Levice)": "1918-11-11", "Trencsén (Trenčín)": "1918-11-11",
    "Fülek (Fiľakovo)": "1682-09-16", "Ungvár (Uzhhorod)": "1682-09-16",
    "Munkács (Mukacheve)": "1682-09-16", "Szatmár (Satu Mare)": "1918-11-11",
    "Murska Sobota": "1918-11-11", "Lendava (Alsólendva)": "1918-11-11",
    "Eisenstadt (Kismarton)": "1918-11-11",
}
HIRVAT_HAB = {
    "Zagreb": "1918-11-11", "Varasd (Varaždin)": "1918-11-11", "Sisak": "1809-10-14",
    "Kostayniçe (Kostajnica)": "1556-07-16", "Bosna Dubiçası (Bosanska Dubica)": "1538-01-01",
    "Bosna Novi'si (Bosanski Novi)": "1556-01-01", "Jasenovaç (Jasenovac)": "1538-01-01",
    "Bosna Brod'u (Bosanski Brod)": "1538-01-01", "Krupa (Bosanska Krupa)": "1565-01-01",
}
import os
sys.path.insert(0, os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), "arac"))
import girdi  # noqa: E402  yalnız hangi dosyada olduğunu okumak için
NEREDE = {y["ad"]: y["_kaynak"] for y in girdi.yukle(sessiz=True)}

for grup, yeni_gun, km, kh in ((MACAR_HAB, "1526-12-17", K_HAB_M, K_HAB),
                               (HIRVAT_HAB, "1527-01-01", K_HIR_M, K_HIR)):
    for ad, t in grup.items():
        dos = NEREDE[ad]
        donem(dos, ad, "1281-01-01", "1526-08-29", yt=yeni_gun, kaynak=km)
        donem(dos, ad, "1526-08-29", t, yf=yeni_gun, kaynak=kh)

# Künyeler
degistir("devletler.js",
         'f:"1000-01-01", t:"1526-08-29", baskent:"Buda", harita:"macaristan",',
         'f:"1000-01-01", t:"1527-01-01", baskent:"Buda", harita:"macaristan",',
         "macaristan künye t")
degistir("devletler.js",
         '    { t:"1526-08-29", tur:"son", b:"Mohaç\'ta II. Layoş öldü, krallık bağımsızlığını kaybetti" }',
         '    { t:"1526-08-29", tur:"savas", b:"Mohaç\'ta II. Layoş öldü, taht boşaldı" },\n'
         '    { t:"1526-11-10", tur:"hukumdar", b:"Soylular János Szapolyai\'yi kral seçti; Osmanlı onun krallığını tâbi olması kaydıyla tanıdı", kaynak:"TDV suleyman-i (BALKAN-MACAR-0081)" },\n'
         '    { t:"1527-01-01", tur:"son", b:"I. Ferdinand\'ın da kral seçilmesiyle (17 Aralık 1526; Hırvatlar 1527) tek krallık ikiye bölündü", kaynak:"TDV suleyman-i · budin · hirvatistan (1527 YIL) — BALKAN-MACAR-0081: künye Mohaç GÜNÜ bitiyordu, devlet bir savaşın gününe bağlanmıştı (habsburg künyesinin 464f91fd\'deki eşi)" }',
         "macaristan kronoloji son")
degistir("devletler.js",
         'f:"1526-08-29", t:"1918-11-16", baskent:"Pozsony (Bratislava) → Buda",',
         'f:"1526-12-17", t:"1918-11-16", baskent:"Pozsony (Bratislava) → Buda",',
         "macaristan-habsburg künye f")

# ═══ 2 · H-0026/H-0029 — Szapolyai tâbiliği seçiminden ÖNCE başlıyordu ═══
K_ZAP = ("BALKAN-MACAR-0081 H-0026: tâbilik Szapolyai'nin krallığıyla başlar — TDV suleyman-i "
         "'Macar soyluları … János Szapolyai’yi kral seçmişlerdi (10 Kasım 1526). Budin’i boşaltan "
         "Osmanlılar da … Szapolyai’nin krallığını kendilerine tâbi olması kaydıyla tanımıştı' — "
         "tanınmanın GÜNÜ yok, seçim günü ALT SINIRDIR; eski başlangıç seçimden 70 gün önceydi")
K_ZAP_M = "BALKAN-MACAR-0081: Szapolyai'nin seçimine (TDV suleyman-i 10 Kasım 1526) dek tek krallık"
ZAP = {  # ad -> (eski v f, v t)
    "Erdel (Kaloşvar)": ("1526-09-01", "1541-08-29"), "Budin": ("1526-09-01", "1527-09-23"),
    "Peşte": ("1526-09-01", "1527-09-23"), "Varad (Oradea)": ("1526-09-01", "1541-08-29"),
    "Yanova (Ineu)": ("1526-09-01", "1541-08-29"),
    "Erdel Belgradı (Gyulafehérvár)": ("1526-09-01", "1541-08-29"),
    "Brassó (Braşov)": ("1526-09-01", "1541-08-29"),
    "Segesvár (Sighişoara)": ("1526-09-01", "1541-08-29"),
    "Debrecen": ("1526-09-01", "1541-08-29"), "Lugos (Lugoj)": ("1526-08-29", "1541-08-29"),
}
for ad, (f, t) in ZAP.items():
    dos = NEREDE[ad]
    donem(dos, ad, "1281-01-01", f, yt="1526-11-10", kaynak=K_ZAP_M)
    donem(dos, ad, f, t, yf="1526-11-10", kaynak=K_ZAP)

# ═══ 3 · Varadin — Mohaç'tan ÖNCE alındı ═══
K_VAR = ("BALKAN-MACAR-0081: TDV varadin 'on dört günlük bir kuşatmanın ardından 17 Şevval 932’de "
         "(27 Temmuz 1526) kaleyi de ele geçirdiler' · TDV suleyman-i: yol üzerindeki Pétervárad "
         "alındı, 'artık buralar bir Osmanlı toprağı olmuştu'")
donem("yerlesimler.js", "Varadin (Petrovaradin)", "1281-01-01", "1526-09-01", yt="1526-07-27", kaynak=K_VAR)
donem("yerlesimler.js", "Varadin (Petrovaradin)", "1526-09-01", "1687-09-06", yf="1526-07-27", kaynak=K_VAR)

# ═══ 4 · H-0027 — Gospić Cetin günü Osmanlı görünüyordu ═══
degistir("yerlesimler_ek29.js",
         '  s:[{f:"1281-01-01",t:"1527-01-01",d:"macaristan"},\n     {f:"1689-01-01",t:"1809-10-14",d:"avusturya",kaynak:"HE Gospić (1689, YIL)"}',
         '  s:[{f:"1281-01-01",t:"1527-01-01",d:"macaristan"},\n'
         '     {f:"1527-01-01",t:"1527-05-01",d:"avusturya",kaynak:"BALKAN-MACAR-0081 H-0027: Cetin seçimi 1527 (TDV hirvatistan YIL · olaylar_p0050) — Udbina kaydıyla aynı zincir; Lika Mayıs 1527 sonuna dek Karlović\'in"},\n'
         '     {f:"1689-01-01",t:"1809-10-14",d:"avusturya",kaynak:"HE Gospić (1689, YIL)"}',
         "Gospić avusturya ara dönemi")
degistir("yerlesimler_ek29.js",
         'd:[{f:"1527-01-01",t:"1689-01-01",kesinlik:"yil",kaynak:"HE Gospić: 1527 (YIL) → 1689 (YIL)"}]',
         'd:[{f:"1527-05-01",t:"1689-01-01",kesinlik:{f:"ay",t:"yil"},kaynak:"HE Gospić: 1527 (YIL) → 1689 (YIL) · BALKAN-MACAR-0081 H-0027: '
         'yıl damgası 1527-01-01 Cetin günüyle çakışıp Gospić\'i Hırvatların Ferdinand\'ı seçtiği gün Osmanlı gösteriyordu. '
         'Gün komşudan: Udbina · HE Udbina \'potkraj svibnja 1527\' (AY) — aynı süreç (Lika-Krbava\'nın 1527 düşüşü; '
         'olaylar_p0069 \'Aynı yıl Gospić yöresi Senković ağalarına verildi\'), ~31 km"}]',
         "Gospić d")

# ═══ 5 · H-0029 — Budin'i 'eksklav' gösteren ölü künye (TDV'si olan üç şehir) ═══
Z_ETIKET = 'k:"Macaristan (Zapolya vasal krallığı)",statu:"vassal"'
donem("yerlesimler.js", "Estergon", "1281-01-01", "1543-08-10", yt="1530-01-01",
      kaynak="BALKAN-MACAR-0081 H-0029: TDV estergon 1526-1529 'bazan Ferdinand’ın, bazan da … Szapolyai’nin eline geçti' — el değiştirme günleri BULUNAMADI; 1527-1530 künye aşımı BEYANLI",
      sonra='{f:"1530-01-01",t:"1543-08-10",d:"avusturya",kesinlik:{f:"yil"},kaynak:"BALKAN-MACAR-0081 H-0029: TDV estergon \'1530 yılında kardinalin … Kuzey Macaristan’a geçmesi üzerine Habsburglar’ın himayesi altına girdi\' — YIL · t: TDV estergon 10 Ağustos 1543 (Habsburg muhafızlarının teslimi)"}')
donem("yerlesimler.js", "Segedin (Szeged)", "1281-01-01", "1543-01-01", yt="1530-01-01",
      kaynak="BALKAN-MACAR-0081 H-0029: 1527-1530 sahibi BULUNAMADI (TDV segedin yalnız 1530-1541'i verir) — künye aşımı BEYANLI",
      sonra='{f:"1541-08-29",t:"1543-01-01",d:"avusturya",kaynak:"BALKAN-MACAR-0081 H-0029: TDV segedin \'Budin’de 948’de (1541) Osmanlı idaresinin tam olarak kurulmasının ardından Segedin ileri gelenleri I. Ferdinand’ın hâkimiyetini benimsediler\' · gün komşudan: Budin · TDV pecuy \'29 Ağustos 1541\'"}')
v_ekle("yerlesimler.js", "Segedin (Szeged)",
       '{f:"1530-01-01",t:"1541-08-29",' + Z_ETIKET + ',kesinlik:{f:"yil"},kaynak:"BALKAN-MACAR-0081 H-0029: TDV segedin \'Şehir 1530-1541 yılları arasında János Szapolyai’nin egemenliği altındaydı\' — YIL"}')
donem("yerlesimler.js", "Peçuy", "1281-01-01", "1543-07-21", yt="1527-01-01",
      kaynak="BALKAN-MACAR-0081: tek krallık 1527'ye dek (TDV suleyman-i · hirvatistan)",
      sonra='{f:"1527-01-01",t:"1532-01-01",d:"avusturya",kesinlik:{f:"yil",t:"yil"},kaynak:"BALKAN-MACAR-0081 H-0029: TDV pecuy \'Ferdinand’ın taç giyme törenine katılan Peçuy yargıcı … krallık imtiyazını 1528 Eylülünde ilân etti\' (taç giyme 1527: TDV istolni-belgrad) — YIL"},'
            '{f:"1541-08-29",t:"1543-07-21",d:"avusturya",kaynak:"BALKAN-MACAR-0081 H-0029: TDV pecuy \'29 Ağustos 1541 … Budin’i ele geçirince Peçuy’un da teslim edilmesini istedi. Böylece kale ve şehir yeniden Ferdinand’ın tarafına geçti\'"}')
v_ekle("yerlesimler.js", "Peçuy",
       '{f:"1532-01-01",t:"1541-08-29",' + Z_ETIKET + ',kesinlik:{f:"yil"},kaynak:"BALKAN-MACAR-0081 H-0029: TDV pecuy \'Şehir halkı kısa süre sonra (1532-1533) János Szapolyai’nin tarafına geçti\' · \'Kral János 1533’te … burada kaldı\' — YIL (alt uç)"}')

# ═══ 6 · H-0037 — Kesîrî: tâbi özerk birim, künyeye bağla ═══
donem("yerlesimler_nokta_ortadogu_0917.js", "Seyûn (Sayvan)", "1538-01-01", "1635-10-22",
      ek='kid:"kesiri-sultanligi"')
degistir("devletler.js",
         '{ id:"kesiri-sultanligi", ad:"Kesîrî Sultanlığı (Hadramut iç kesimi)", bolge:"arabistan", f:"1450-01-01", t:"1967-11-30",\n',
         '{ id:"kesiri-sultanligi", ad:"Kesîrî Sultanlığı (Hadramut iç kesimi)", bolge:"arabistan", f:"1450-01-01", t:"1967-11-30",\n'
         '  tabi:[{f:"1538-01-01", t:"1635-10-22", ust:"osmanli", kaynak:"BALKAN-MACAR-0081 H-0037: TDV hadramut \'Hadım Süleyman Paşa’nın Hindistan seferi sırasında (1538) Osmanlı Devleti’nin idaresine giren Hadramut Yemen’e bağlı bir sancak olarak teşkilâtlandırıldı. Ancak Hadramut içinde idareyi ellerinde bulunduranlar Kesîrî kabilesi reisleri idi\' · Mayıs 1566 hükmü Sultan Bedr\'i \'Hadramut sancağının hâkimi\' der · t: TDV yemen 22 Ekim 1635 (Hadramut\'a özgü bitiş cümlesi YOK — Seyûn kaydıyla aynı)"}],\n',
         "kesiri tabi")

# ═══ 7 · H-0050 — aynı güne yığılmış üç 1603 maddesi ═══
degistir("olaylar_ek8.js",
         '  "t": "1603-01-01",\n  "b": "Deli Hasan Paşa isyanı ve Bosna beylerbeyiliğiyle yatıştırılması",',
         '  "t": "1603-03-01", "kesinlik": "ay",\n  "b": "Deli Hasan Paşa isyanı ve Bosna beylerbeyiliğiyle yatıştırılması",',
         "Deli Hasan ay")
degistir("olaylar_ek14.js",
         '{ t:"1603-01-01", k:"mimari", etiket:["mimari","imar","konu-kisiler","konu-din","konu-imar"], b:"Yeni Cami inşaatının III. Mehmed\'in ölümü üzerine durması", gun:"1603",',
         '{ t:"1603-12-20", k:"mimari", etiket:["mimari","imar","konu-kisiler","konu-din","konu-imar"], b:"Yeni Cami inşaatının III. Mehmed\'in ölümü üzerine durması", gun:"III. Mehmed\'in ölümü (16 Receb 1012 / 20 Aralık 1603) ardından", ic_not_gun:"BALKAN-MACAR-0081 H-0050: t yıl koduydu (1603-01-01) ve iki başka 1603 maddesiyle aynı güne yığılıyordu; olay ölüme bağlı, gün TDV mehmed-iii \'16 Receb’de (20 Aralık) vefat etmiştir\'. Durmanın kendi günü bulunamadı — ölüm günü ALT SINIRDIR. ⚠️ atlasın vefat maddesi (olaylar_ek5 1603-12-22) ve padisahlar.js olum TDV ile çelişiyor, ayrıca bildirildi.",',
         "Yeni Cami gün")

# ═══ 8 · Kronoloji — Değişmez 2 için yeni maddeler (olaylar_ek.js, 1526-09-01 maddesinin yanına) ═══
CAPA = '{ t:"1526-09-01", k:"diger", etiket:["diger"], b:"Mohaç sonrası Budin\'in teslimi'
YENI_ONCE = (
    '{ t:"1526-07-27", k:"fetih", etiket:["toprak-kazanc","konu-askeri"], b:"Varadin (Petervaradin) Kalesi\'nin fethi", gun:"27 Temmuz 1526 (17 Şevval 932)", yer:"Varadin (Petrovaradin), Tuna kıyısı", yer_id:"Varadin (Petrovaradin)", kisiler:"Kanunî Sultan Süleyman, İbrâhim Paşa", '
    'd:"Mohaç seferine çıkan ordu Belgrad\'dan Macar topraklarına geçti; Varadin\'in önce dış mahalleleri alındı, on dört günlük kuşatmanın ardından kale de düştü. Kanunî yol üzerindeki köylerin yakılmamasını emretti, çünkü buralar artık Osmanlı toprağı sayılıyordu.", '
    'kaynak:"varadin (TDV): \'on dört günlük bir kuşatmanın ardından 17 Şevval 932’de (27 Temmuz 1526) kaleyi de ele geçirdiler\' · suleyman-i (TDV): \'yol üzerindeki Pétervárad … ve İlok … kalelerinin alınmasına şahit oldu … çünkü artık buralar bir Osmanlı toprağı olmuştu\' — BALKAN-MACAR-0081", duygu:["⚔️"] },\n')
YENI_SONRA = (
    '\n{ t:"1526-11-10", k:"siyaset", etiket:["siyaset","diplomasi","konu-siyasi","konu-diplomasi"], b:"János Szapolyai Macar kralı seçildi — Osmanlı, krallığını tâbi olması kaydıyla tanıdı", gun:"10 Kasım 1526", yer:"İstolni Belgrad (Székesfehérvár)", yer_id:"İstolni Belgrad", kisiler:"János Szapolyai (Zápolya), Kanunî Sultan Süleyman", '
    'd:"Mohaç\'ta kralın ölümüyle boşalan Macar tahtına soyluların bir kısmı Erdel voyvodası János Szapolyai\'yi seçti; Szapolyai İstolni Belgrad\'da taç giydi. Budin\'i boşaltan Osmanlılar bölgeyi tampon hâlde tutmak için Szapolyai\'nin krallığını kendilerine tâbi olması kaydıyla tanıdı. Haritada Szapolyai\'ye bağlı yerler bu tarihten itibaren Osmanlı\'ya tâbi görünür.", '
    'ic_not_d:"Tanınmanın kendi günü kaynakta YOK; seçim günü tâbiliğin ALT SINIRIDIR (Szapolyai seçilmeden krallığı tâbi olamaz). Eski veri tâbiliği 1526-09-01\'de başlatıyordu.", '
    'kaynak:"suleyman-i (TDV): \'Macar soyluları … János Szapolyai’yi kral seçmişlerdi (10 Kasım 1526). Budin’i boşaltan Osmanlılar da şimdilik bölgeyi tampon halde tutmak amacıyla Szapolyai’nin krallığını kendilerine tâbi olması kaydıyla tanımıştı\' · budin (TDV) 10 Kasım 1526 · istolni-belgrad (TDV): \'son defa 1526’da János Szapolyai … taç giydi\' — BALKAN-MACAR-0081", duygu:["📌"] },\n'
    '{ t:"1526-12-17", k:"siyaset", etiket:["siyaset","konu-siyasi","konu-hanedan"], b:"I. Ferdinand Macar kralı ilân edildi — Batı ve Kuzey Macaristan Habsburg tacına", gun:"17 Aralık 1526", yer:"Pozsony (Bratislava)", yer_id:"Bratislava", kisiler:"I. Ferdinand, János Szapolyai", '
    'd:"Habsburg Arşidükü Ferdinand, kız kardeşinin II. Lajos\'la evliliğine dayanarak Macar tahtında hak iddia etti ve bir kısım soylu tarafından kral ilân edildi. Macaristan böylece iki kral arasında bölündü; batı ve kuzey kesimi Ferdinand\'ı tanıdı. Hırvat soyluları 1527 başında onu ayrıca seçti.", '
    'kaynak:"suleyman-i (TDV): \'(Macar kralı ilân edilmesi: 17 Aralık 1526)\' · budin (TDV): \'… Ferdinand’ı (17 Aralık 1526) seçmişti\' · macaristan (TDV): asilzadeler bir Habsburg ve bir yerli kral seçti — BALKAN-MACAR-0081", duygu:["📌"] },\n'
    '{ t:"1530-01-01", kesinlik:"yil", k:"siyaset", etiket:["siyaset","konu-siyasi"], b:"İki kral çekişmesi: Estergon Habsburg himayesine, Segedin Szapolyai\'ye", gun:"1530", yer:"Estergon (Esztergom), Segedin (Szeged)", yer_id:"Estergon", kisiler:"I. Ferdinand, János Szapolyai", '
    'd:"1526\'dan beri iki kral arasında el değiştiren Estergon, başpiskoposun arşiv ve hazinesiyle kuzeye geçmesinden sonra Habsburg himayesine girdi. Aynı yıldan 1541\'e kadar Segedin Szapolyai\'nin egemenliğinde kaldı.", '
    'kaynak:"estergon (TDV): \'1530 yılında kardinalin bütün arşiv, kütüphane ve hazinesiyle birlikte Kuzey Macaristan’a geçmesi üzerine Habsburglar’ın himayesi altına girdi\' · segedin (TDV): \'Şehir 1530-1541 yılları arasında János Szapolyai’nin egemenliği altındaydı\' — YIL · BALKAN-MACAR-0081", duygu:["📌"] },\n'
    '{ t:"1532-01-01", kesinlik:"yil", k:"siyaset", etiket:["siyaset","konu-siyasi"], b:"Peçuy halkı Szapolyai tarafına geçti", gun:"1532-1533", yer:"Peçuy (Pécs)", yer_id:"Peçuy", kisiler:"János Szapolyai", '
    'd:"1528\'de Ferdinand\'dan imtiyaz alan Peçuy, kısa süre sonra Szapolyai\'nin tarafına geçti; Kral János 1533\'te bir süre şehirde kaldı. 1541\'de Budin\'in düşmesiyle şehir yeniden Ferdinand\'ın tarafına döndü.", '
    'kaynak:"pecuy (TDV): \'Şehir halkı kısa süre sonra (1532-1533) János Szapolyai’nin tarafına geçti\' · \'Kral János 1533’te … bir süre burada kaldı\' — YIL · BALKAN-MACAR-0081", duygu:["📌"] },')
m = oku("olaylar_ek.js")
if m.count(CAPA) != 1:
    HATA.append(f"olaylar_ek.js çapa {m.count(CAPA)} kez")
else:
    i = m.index(CAPA)
    j = m.index("\n", i)
    DOSYA["olaylar_ek.js"] = m[:i] + YENI_ONCE + m[i:j] + YENI_SONRA + m[j:]
SAYAC["islem"] += 1
degistir("olaylar_ek.js",
         'ic_not_d:"⚠️ HARİTA HAKKINDA: atlas Budin, Peşte ve Erdel\'i bu tarihten itibaren Osmanlı\'ya TÂBİ gösteriyor; TDV\'ye göre himaye düzeni 1526\'da değil 1529\'da kuruldu. Veri düzeltmesi önerildi (paket 0044, H-0006).",',
         'ic_not_d:"HARİTA: Szapolyai\'ye bağlı yerlerin tâbiliği 10 Kasım 1526 maddesinden başlar (BALKAN-MACAR-0081). Eski not \'himaye 1529\' diyordu; TDV suleyman-i tâbi tanınmayı 23 Eylül 1527\'den ÖNCEYE koyar — 1529 Budin\'in Szapolyai\'ye TESLİMİdir, tâbiliğin başı değil.",',
         "1526-09-01 maddesi notu")

# ─── sonuç ────────────────────────────────────────────────────────────────
print(f"işlem: {SAYAC['islem']} · hata: {len(HATA)} · dosya: {len(DOSYA)}")
for h in HATA:
    print("  ✗", h)
if HATA:
    print("HİÇBİR DOSYA YAZILMADI."); sys.exit(1)
for ad, metin in DOSYA.items():
    eski = open(KOK + ad, encoding="utf-8").read()
    print(f"  {'YAZ' if UYGULA else 'kuru'} {ad}: {len(eski)} → {len(metin)} karakter")
    if UYGULA and metin != eski:
        open(KOK + ad, "w", encoding="utf-8", newline="").write(metin)
    if "--sina" in sys.argv:   # sınama: yazılacak hâli verilen klasöre döker, data/'ya DOKUNMAZ
        hedef = sys.argv[sys.argv.index("--sina") + 1]
        os.makedirs(hedef, exist_ok=True)
        open(os.path.join(hedef, ad), "w", encoding="utf-8", newline="").write(metin)
if not UYGULA:
    print("KURU KOŞU — yazmak için --uygula. Sonra: py arac/denetle.py")
