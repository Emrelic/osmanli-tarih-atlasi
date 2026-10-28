# -*- coding: utf-8 -*-
"""NAPOLYON-ITALYA-1028: Napolyon dönemi (1796-1815) kuzey/orta İtalya şehir zincirleri.
Bir kerelik uygulama betiği: eski s: kesitini (A,B) tam karşılayan dilimleri yenileriyle değiştirir."""
import json, re, sys

sys.stdout.reconfigure(encoding="utf-8")

AV, FR, NP = "avusturya", "fransa-cumhuriyet", "italya-napolyon"

K = {
    "np": "künye italya-napolyon: EB1911 'Italy' (Cisalpin 9 Temmuz 1797 · 16 Nisan 1814 mütareke) ; HLS 'Cisalpine' hls-dhs-dss.ch/fr/articles/008920 (27 Nisan 1799 çöküş, Haziran 1800 yeniden kuruluş) · NAPOLYON-ITALYA-1028",
    "np2": "künye italya-napolyon: Pressburg 26 Aralık 1805 (Britannica britannica.com/print/article/475353; künye kronolojisi) · NAPOLYON-ITALYA-1028",
    "fr": "Fransız işgali/güdümü (Fransa Cumhuriyeti etiketi, Napolyon dönemi için atlasın kimliği) · NAPOLYON-ITALYA-1028",
    "av99": "künye italya-napolyon kronolojisi: 27 Nisan 1799 Cassano sonrası Avusturya-Rus işgali, Haziran 1800'de Marengo sonrası Napolyon yeniden kurdu (HLS 008920). BEYANLI YAKLAŞIKLIK: bu şehir için ayrı tarih bulunamadı; cumhuriyet geneli tarihleri alındı · NAPOLYON-ITALYA-1028",
    "av14": "künye italya-napolyon: 16 Nisan 1814 Mantova mütarekesi, Avusturya Milano'yu aldı (EB1911 'Italy'). BEYANLI YAKLAŞIKLIK: şehre özgü giriş günü yok; Viyana Nihaî Senedi 9 Haziran 1815 (Britannica 'Italy — The restoration period') · NAPOLYON-ITALYA-1028",
}


def sc(s, i):
    """i'deki '{' ile başlayan nesnenin sonundaki '}' dizini (tırnaklı metni atlar)."""
    d = 0
    q = False
    j = i
    while j < len(s):
        c = s[j]
        if q:
            if c == "\\":
                j += 1
            elif c == '"':
                q = False
        else:
            if c == '"':
                q = True
            elif c == "{":
                d += 1
            elif c == "}":
                d -= 1
                if d == 0:
                    return j
        j += 1
    raise ValueError("kapanmayan nesne")


def parse_s(line):
    i = line.index("s:[") + 3
    segs = []
    j = i
    while line[j] != "]":
        if line[j] == "{":
            e = sc(line, j)
            segs.append((j, e + 1))
            j = e + 1
        else:
            j += 1
    return i, j, segs


def fld(t, k):
    m = re.search(r'\b' + k + r':"([^"]*)"', t)
    return m.group(1) if m else None


def seg(f, t, d, kay):
    return '{f:"%s",t:"%s",d:"%s",kaynak:%s}' % (f, t, d, json.dumps(kay, ensure_ascii=False))


# şehir -> (dosya, A, B, [(f,t,d,kaynak)])
def tile(parts):
    return [(parts[i][0], parts[i][1], parts[i][2], parts[i][3]) for i in range(len(parts))]


def build_specs():
    S = {}
    # Lombardiya çekirdeği: Milano
    S["Milano"] = ("yerlesimler", "1714-03-07", "1859-06-04", [
        ("1714-03-07", "1796-05-15", AV, None),
        ("1796-05-15", "1797-07-09", FR, "Napolyon'un Milano'ya girişi 15 Mayıs 1796 (EB1911 'Italy'; Britannica 'Napoleon'). " + K["fr"]),
        ("1797-07-09", "1799-04-27", NP, K["np"]),
        ("1799-04-27", "1800-06-04", AV, K["av99"]),
        ("1800-06-04", "1814-04-16", NP, K["np"]),
        ("1814-04-16", "1859-06-04", AV, K["av14"]),
    ])
    for ad, fn in (("Brescia", "yerlesimler_avrupa"), ("Bergamo", "yerlesimler_avrupa")):
        S[ad] = (fn, "1797-05-12", "1859-06-04", [
            ("1797-05-12", "1797-07-09", FR, "Venedik Cumhuriyeti'nin sonu 12 Mayıs 1797 (künye venedik); şehir Mart 1797'de Venedik'ten ayrılmıştı (BEYANLI YAKLAŞIKLIK: ayrılış günü ayrı yazılmadı). " + K["fr"]),
            ("1797-07-09", "1799-04-27", NP, K["np"]),
            ("1799-04-27", "1800-06-04", AV, K["av99"]),
            ("1800-06-04", "1814-04-16", NP, K["np"]),
            ("1814-04-16", "1859-06-04", AV, K["av14"]),
        ])
    S["Mantova"] = ("yerlesimler_avrupa", "1708-01-01", "1866-10-03", [
        ("1708-01-01", "1797-02-02", AV, None),
        ("1797-02-02", "1797-07-09", FR, "Wurmser 2 Şubat 1797'de Mantova'yı teslim etti (Britannica 'Siege of Mantua' britannica.com/print/article/363038; worldhistory.org). " + K["fr"]),
        ("1797-07-09", "1799-04-27", NP, K["np"]),
        ("1799-04-27", "1800-06-04", AV, K["av99"]),
        ("1800-06-04", "1814-04-16", NP, K["np"]),
        ("1814-04-16", "1866-10-03", AV, K["av14"]),
    ])
    # Veneto
    ven = [
        ("1797-05-12", "1797-10-17", FR, "Venedik Cumhuriyeti'nin sonu 12 Mayıs 1797 (künye venedik); Campo Formio'ya kadar Fransız askerî işgali. " + K["fr"]),
        ("1797-10-17", "1805-12-26", AV, "Campo Formio 17 Ekim 1797 (künye italya-napolyon, olaylar_ek16). BEYANLI YAKLAŞIKLIK: 1801 Lunéville'de Adige hattı batı yakasını Cisalpin'e verdi; şehir merkezi/doğu yakası Avusturya kabul edildi · NAPOLYON-ITALYA-1028"),
        ("1805-12-26", "1814-04-16", NP, K["np2"]),
        ("1814-04-16", "1866-10-03", AV, K["av14"]),
    ]
    for ad, fn in (("Venedik", "yerlesimler"), ("Verona", "yerlesimler_avrupa"), ("Padova", "yerlesimler_avrupa"),
                   ("Udine", "yerlesimler_avrupa"), ("Belluno", "yerlesimler_avrupa"), ("Feltre", "yerlesimler_avrupa")):
        S[ad] = (fn, "1797-05-12", "1866-10-03", ven)
    # Papalık Legasyonları + Romagna
    def leg(cut, cutk, A):
        return [
            (A, cut, "papalik", None),
            (cut, "1797-07-09", FR, cutk + " " + K["fr"]),
            ("1797-07-09", "1799-04-27", NP, K["np"]),
            ("1799-04-27", "1800-06-04", AV, K["av99"]),
            ("1800-06-04", "1814-04-16", NP, K["np"]),
            ("1814-04-16", "1815-06-09", AV, K["av14"] + " · Legasyonlar Papalığa 9 Haziran 1815 Nihaî Senet (Britannica 'Italy')"),
            ("1815-06-09", "1860-03-18", "papalik", None),
        ]
    tol = "Tolentino Antlaşması 19 Şubat 1797: Papa Romagna'yı Fransa'ya bıraktı (Britannica; historyofwar.org/articles/peace_tolentino.html)."
    bol = "Bologna Mütarekesi 23 Haziran 1796: Bologna ve Ferrara Fransız eline geçti (Wikipedia 'Armistice of Bologna'; ikinci kaynak aranıyor)."
    S["Bolonya"] = ("yerlesimler_avrupa", "1281-01-01", "1860-03-18", leg("1796-06-23", bol, "1281-01-01"))
    S["Ferrara"] = ("yerlesimler_avrupa", "1598-01-29", "1860-03-18", leg("1796-06-23", bol, "1598-01-29"))
    S["Ravenna"] = ("yerlesimler_avrupa", "1281-01-01", "1860-03-18", leg("1797-02-19", tol, "1281-01-01"))
    S["Rimini"] = ("yerlesimler_avrupa", "1281-01-01", "1860-03-18", leg("1797-02-19", tol, "1281-01-01"))
    S["Modena"] = ("yerlesimler_avrupa", "1598-01-29", "1860-03-18", [
        ("1598-01-29", "1796-12-27", "modena", None),
        ("1796-12-27", "1797-07-09", FR, "Cispadan Cumhuriyeti'nin kuruluşu 27 Aralık 1796 (storiaememoriadibologna.it; Wikipedia 'Cispadane Republic'; ikinci kaynak aranıyor). " + K["fr"]),
        ("1797-07-09", "1799-04-27", NP, K["np"]),
        ("1799-04-27", "1800-06-04", AV, K["av99"]),
        ("1800-06-04", "1814-04-16", NP, K["np"]),
        ("1814-04-16", "1814-07-14", AV, K["av14"]),
        ("1814-07-14", "1860-03-18", "modena", "IV. Francesco'nun hükümdarlığının başlangıcı 14 Temmuz 1814 (Wikipedia 'Francis IV, Duke of Modena'; ikincil, ikinci kaynak aranıyor) · NAPOLYON-ITALYA-1028"),
    ])
    for ad in ("Parma", "Piacenza"):
        fn = "yerlesimler_avrupa"
        S[ad] = (fn, "1545-08-16", "1860-03-18", [
            ("1545-08-16", "1802-10-09", "parma", None),
            ("1802-10-09", "1814-04-11", FR, "I. Ferdinando'nun ölümü 9 Ekim 1802 (Wikipedia 'Ferdinand I, Duke of Parma'; ikincil), Aranjuez 1801'de dükalığı Fransa'ya devretmişti; resmî ilhak 1808 (Britannica britannica.com/print/article/444343). BEYANLI YAKLAŞIKLIK: 1801-1802 arası dükün fiilî yönetimi sürdü. " + K["fr"]),
            ("1814-04-11", "1860-03-18", "parma", "Marie-Louise'in dükalığı alışı 11 Nisan 1814 (Fontainebleau; Wikipedia 'Duke of Parma'; ikincil). BEYANLI YAKLAŞIKLIK: fiilî yönetime geçişi 1816 · NAPOLYON-ITALYA-1028"),
        ])
    # Valtellina
    for ad in ("Sondrio", "Chiavenna", "Bormio"):
        S[ad] = ("yerlesimler_avrupa", "1797-10-10", "1859-06-04", [
            ("1797-10-10", "1799-04-27", NP, "Valtellina Cisalpin Cumhuriyeti'ne 10 Ekim 1797'de katıldı (kronoloji_sinir_avrupa_bati.js Chiavenna/Bormio maddesi) ; " + K["np"]),
            ("1799-04-27", "1800-06-04", AV, K["av99"]),
            ("1800-06-04", "1814-04-16", NP, K["np"]),
            ("1814-04-16", "1859-06-04", AV, K["av14"]),
        ])
    return S


def main():
    S = build_specs()
    # ayrı, tek-kesitli ek özel durumlar sonra eklenir
    S.update(build_ek())
    dosyalar = {}
    for ad, (fn, A, B, parts) in S.items():
        path = "data/%s.js" % fn
        if path not in dosyalar:
            dosyalar[path] = open(path, encoding="utf-8", newline="").read()
    degisen = 0
    for ad, (fn, A, B, parts) in S.items():
        path = "data/%s.js" % fn
        txt = dosyalar[path]
        # satırı bul
        m = re.search(r'^\{ ad:"' + re.escape(ad) + r'",.*$', txt, re.M)
        assert m, ad
        line = m.group(0)
        i, j, segs = parse_s(line)
        texts = [line[a:b] for a, b in segs]
        fs = [(fld(t, "f"), fld(t, "t"), fld(t, "d")) for t in texts]
        # A ile başlayıp B ile biten ardışık dilimler
        ia = [k for k, x in enumerate(fs) if x[0] == A]
        ib = [k for k, x in enumerate(fs) if x[1] == B]
        assert ia and ib, (ad, A, B, fs[-6:])
        ia, ib = ia[0], [k for k in ib if k >= ia[0]][0]
        for k in range(ia, ib):
            assert fs[k][1] == fs[k + 1][0], (ad, "kopuk", fs[k], fs[k + 1])
        assert parts[0][0] == A and parts[-1][1] == B, ad
        for k in range(len(parts) - 1):
            assert parts[k][1] == parts[k + 1][0], (ad, "parça kopuk")
        # ilk ve son eski dilimin kaynak metnini koru (kaynak gerektirmeyen uç parçalar)
        yeni = []
        for (f, t, d, kay) in parts:
            if kay is None:
                # aynı f,d ile eski dilim varsa metnini koru, yoksa kaynaksız yaz
                eski = [texts[k] for k in range(ia, ib + 1) if fs[k][0] == f and fs[k][2] == d and fs[k][1] == t]
                yeni.append(eski[0] if eski else '{f:"%s",t:"%s",d:"%s"}' % (f, t, d))
            else:
                yeni.append(seg(f, t, d, kay))
        # eski dilim uçlarından kaynaklı olanı (ör. uçta kalan kaynak) korumak için: uç dilim t'si değiştiyse eski kaynak atılır
        a0 = segs[ia][0]
        b0 = segs[ib][1]
        satir = line[:a0] + ",".join(yeni) + line[b0:]
        assert txt.count(line) == 1, (ad, "satır tekil değil")
        txt = txt.replace(line, satir)
        dosyalar[path] = txt
        degisen += 1
        print("ok", ad, fn, "%d dilim -> %d" % (ib - ia + 1, len(yeni)))
    for path, txt in dosyalar.items():
        open(path, "w", encoding="utf-8", newline="").write(txt)
    print("şehir:", degisen)


def build_ek():
    S = {}
    # Torino: Piyemonte'nin Fransa'ya ilhakı
    S["Torino"] = ("yerlesimler", "1281-01-01", "1861-03-17", [
        ("1281-01-01", "1798-12-09", "sardinya", None),
        ("1798-12-09", "1814-05-20", FR, "Piyemonte'nin Fransa'ya ilhakı / Carlo Emanuele IV'ün Sardinya'ya çekilişi Aralık 1798; resmî ilhak 11 Eylül 1802 (kronoloji_sinir_avrupa_bati.js dg5-it-ch-3 maddesi). BEYANLI YAKLAŞIKLIK: 1799-1800 Avusturya-Rus işgali ayrı yazılmadı. " + K["fr"]),
        ("1814-05-20", "1861-03-17", "sardinya", "Vittorio Emanuele I'in Torino'ya dönüşü 20 Mayıs 1814 (Wikipedia 'Victor Emmanuel I'; ikincil; ikinci kaynak aranıyor) · NAPOLYON-ITALYA-1028"),
    ])
    S["Cenova"] = ("yerlesimler", "1797-06-14", "1815-06-09", [
        ("1797-06-14", "1805-06-04", "ligurya-cumhuriyeti", "Ligurya Cumhuriyeti 1797-1805 (künye ligurya-cumhuriyeti: Britannica 'Ligurian Republic', archontology.org) · NAPOLYON-ITALYA-1028"),
        ("1805-06-04", "1815-06-09", FR, "Ligurya'nın Fransa'ya ilhakı 4 Haziran 1805 (künye ligurya-cumhuriyeti). BEYANLI YAKLAŞIKLIK: Nisan 1814 Bentinck/Ceneviz restorasyonu ayrı yazılmadı; Sardinya'ya devir 9 Haziran 1815. " + K["fr"]),
    ])
    for ad, A in (("Floransa", "1532-05-01"), ("Pisa", "1532-05-01"), ("Siena", "1557-07-03")):
        S[ad] = ("yerlesimler" if ad == "Floransa" else "yerlesimler_avrupa", A, "1860-03-22", [
            (A, "1807-12-10", "toskana", None),
            ("1807-12-10", "1814-09-01", FR, "Etrurya Krallığı'nın sonu 10 Aralık 1807, 1808'de Arno/Ombrone/Méditerranée departmanları (Wikipedia 'Kingdom of Etruria', 'Arno (department)'; ikincil, ikinci kaynak aranıyor). Etrurya Krallığı 1801-1807 toskana künyesine dahil (BEYAN). " + K["fr"]),
            ("1814-09-01", "1860-03-22", "toskana", None),
        ])
    S["Roma"] = ("yerlesimler", "1281-01-01", "1870-09-20", [
        ("1281-01-01", "1798-02-15", "papalik", None),
        ("1798-02-15", "1799-09-30", "roma-cumhuriyeti-1798", "künye roma-cumhuriyeti-1798: Britannica 'Pius VI' (15 Şubat 1798); 30 Eylül 1799 Napoli işgali (Wikipedia, ikincil) · NAPOLYON-ITALYA-1028"),
        ("1799-09-30", "1809-05-17", "papalik", "Papalık yönetiminin dönüşü Eylül/Ekim 1799 (künye roma-cumhuriyeti-1798). BEYANLI YAKLAŞIKLIK: Papa VII. Pius Roma'ya 1800 Temmuz'da girdi · NAPOLYON-ITALYA-1028"),
        ("1809-05-17", "1814-05-24", FR, "Papalık topraklarının Fransa'ya ilhakı 17 Mayıs 1809 (künye papalik; kronoloji_fransa.js). " + K["fr"]),
        ("1814-05-24", "1870-09-20", "papalik", "VII. Pius'un Roma'ya dönüşü 24 Mayıs 1814 (Britannica 'Pius VII'; arama özeti) · NAPOLYON-ITALYA-1028"),
    ])
    S["Perugia"] = ("yerlesimler_avrupa", "1281-01-01", "1860-09-14", [
        ("1281-01-01", "1809-05-17", "papalik", None),
        ("1809-05-17", "1814-05-24", FR, "Papalık topraklarının Fransa'ya ilhakı 17 Mayıs 1809 (Trasimène departmanı; künye papalik). BEYANLI YAKLAŞIKLIK: 1814-1815 Napoli işgali ayrı yazılmadı. " + K["fr"]),
        ("1814-05-24", "1860-09-14", "papalik", "VII. Pius'un Roma'ya dönüşü 24 Mayıs 1814 · NAPOLYON-ITALYA-1028"),
    ])
    return S


if __name__ == "__main__":
    main()
