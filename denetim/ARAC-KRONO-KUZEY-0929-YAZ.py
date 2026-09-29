# -*- coding: utf-8 -*-
"""KRONO-KUZEY-0929 — üç kuyruk dosyasını düzeltir, künye penceresi dışındaki maddeleri
doğru künyeye TAŞIR, yeni maddeleri COK dosyalarına yazar.

  py -X utf8 denetim/ARAC-KRONO-KUZEY-0929-YAZ.py          # kuru koşu (yalnız sayar)
  py -X utf8 denetim/ARAC-KRONO-KUZEY-0929-YAZ.py --yaz    # dosyalara yazar

Blok bulma: dizi metni dize-duyarlı (çift tırnak + kaçış) ve yorum-duyarlı (// ve /* */)
taranır; üst düzey {…} blokları sırayla node'un okuduğu diziyle BİREBİR eşlenir. Sayı
tutmazsa HİÇBİR ŞEY yazılmaz (sessiz eleme yok).
"""
import sys, os, re, json, subprocess, importlib.util

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DATA = os.path.join(KOK, "data")
YAZ = "--yaz" in sys.argv
spec = importlib.util.spec_from_file_location("yeni", os.path.join(KOK, "denetim", "ARAC-KRONO-KUZEY-0929-YENI.py"))
YENI = importlib.util.module_from_spec(spec); spec.loader.exec_module(YENI)

ETIKET = "KRONO-KUZEY-0929"


def node_dizi(yol, ad):
    js = ("global.window={};eval(require('fs').readFileSync(%s,'utf8'));"
          "process.stdout.write(JSON.stringify(window[%s]));" % (json.dumps(yol), json.dumps(ad)))
    c = subprocess.run(["node", "-e", js], capture_output=True, encoding="utf-8")
    if c.returncode:
        raise SystemExit(c.stderr)
    return json.loads(c.stdout)


def bloklar(metin, bas):
    """metin[bas] == '[' ; üst düzey {…} bloklarının (başlangıç, bitiş) listesi ve dizinin kapanışı."""
    i, n, derin, out, bl = bas + 1, len(metin), 0, [], None
    while i < n:
        c = metin[i]
        if c == '"':
            i += 1
            while metin[i] != '"':
                i += 2 if metin[i] == "\\" else 1
        elif metin.startswith("//", i):
            i = metin.index("\n", i)
            continue
        elif metin.startswith("/*", i):
            i = metin.index("*/", i) + 2
            continue
        elif c == "{":
            if derin == 0:
                bl = i
            derin += 1
        elif c == "}":
            derin -= 1
            if derin == 0:
                out.append((bl, i + 1))
        elif c == "]" and derin == 0:
            return out, i
        i += 1
    raise SystemExit("dizi kapanmadı")


def js_deger(v):
    return json.dumps(v, ensure_ascii=False)


def alan_ekle(blok, alanlar):
    """Bloğun kapanış '}'sinden önce alan satırı ekler."""
    ek = ",\n  " + ", ".join(f"{k}:{js_deger(v)}" for k, v in alanlar) + " }"
    govde = blok[:-1].rstrip()
    if govde.endswith(","):
        govde = govde[:-1]
    return govde + ek


def isle(dosya, ad, tasima, duzelt, yer_id_ekle=False):
    yol = os.path.join(DATA, dosya)
    metin = open(yol, encoding="utf-8").read()
    dizi = node_dizi(yol, ad)
    bas = metin.index("window.%s = [" % ad) + len("window.%s = " % ad)
    bl, kapanis = bloklar(metin, bas)
    if len(bl) != len(dizi):
        raise SystemExit(f"{dosya}: {len(bl)} blok ≠ {len(dizi)} madde — DUR")
    for (s, e), o in zip(bl, dizi):   # eşleme sınavı
        if ('t:"%s"' % o["t"]) not in metin[s:e]:
            raise SystemExit(f"{dosya}: blok/madde eşleşmedi {o['t']}")
    tasinan, yeni_metin, son = [], [], 0
    sayac = {"tasindi": 0, "duzeltildi": 0, "yer_id": 0}
    for (s, e), o in zip(bl, dizi):
        blok = metin[s:e]
        d = duzelt(o)
        if d:
            for eski, yeni in d:
                if eski not in blok:
                    raise SystemExit(f"{dosya} {o['t']}: düzeltme metni yok: {eski[:40]}")
                blok = blok.replace(eski, yeni, 1)
            sayac["duzeltildi"] += 1
        if yer_id_ekle and "yer_id:" not in blok:
            blok, k = re.subn(r'\n(\s*)d:"', r'\n\1yer_id:"",\n\1d:"', blok, count=1)
            if k != 1:
                raise SystemExit(f"{dosya} {o['t']}: yer_id eklenemedi")
            sayac["yer_id"] += 1
        hedef = tasima(o)
        if hedef:
            alan = ("devlet", hedef) if isinstance(hedef, str) else ("devletler", hedef)
            tasinan.append(alan_ekle(blok, [alan, ("tasindi", f"{dosya} → {ETIKET} (künye penceresi dışı; M-5416)")]))
            # bloğu ve ardındaki virgül+satır sonunu kaldır
            yeni_metin.append(metin[son:s])
            j = e
            while j < len(metin) and metin[j] in " \t":
                j += 1
            if j < len(metin) and metin[j] == ",":
                j += 1
            while j < len(metin) and metin[j] in " \t":
                j += 1
            if j < len(metin) and metin[j] == "\n":
                j += 1
            son = j
            sayac["tasindi"] += 1
        else:
            yeni_metin.append(metin[son:s]); yeni_metin.append(blok); son = e
    yeni_metin.append(metin[son:])
    cikti = "".join(yeni_metin)
    print(f"  {dosya}: {len(dizi)} madde · taşınan {sayac['tasindi']} · düzeltilen {sayac['duzeltildi']} · yer_id eklenen {sayac['yer_id']}")
    return yol, cikti, tasinan, len(dizi) - sayac["tasindi"]


# ── taşıma kuralları (M-5416: olay günü VAR OLAN künye; [f,t), geçiş günü iki künyede) ──
def t_rusya(o):
    if o["t"] < "1547-01-16":
        return "moskova"
    if o["t"] == "1917-11-07":
        return ["sovyet-rusya", "rusya-gecici-hukumet"]
    return None


LIT = re.compile(r"Litvanya|Vilnius|Horodło|Melno|Orşa|Krewo|KREWO")


def t_lehistan(o):
    t = o["t"]
    if t < "1569-07-01":
        return ["polonya-erken", "litvanya-buyuk-dukalik"] if LIT.search(o["b"]) else "polonya-erken"
    if t == "1807-07-07":
        return "varsova-dukaligi"
    if t in ("1815-06-09", "1830-11-29", "1831-09-08", "1863-01-22"):
        return "kongre-polonyasi"
    if t == "1918-11-11":
        return "polonya"
    return None          # 1797 Dąbrowski: künyesiz — dosyada bırakıldı, DUZELTME'de


def t_isvec(o):
    if o["t"] < "1523-06-06":
        if o["t"] == "1397-06-17":
            return ["isvec-birlik-oncesi", "danimarka", "norvec-kralligi"]
        if o["t"] == "1520-11-08":
            return ["isvec-birlik-oncesi", "danimarka"]
        return "isvec-birlik-oncesi"
    return None


KAYNAK_EK = f" · başlık/gövde düzeltmesi {ETIKET}"


def d_rusya(o):
    if o["t"] == "1795-10-24":
        return [("b:\"Polonya'nın Üçüncü Paylaşımı — Polonya devleti ortadan kalktı\"",
                 "b:\"Polonya'nın Üçüncü Paylaşımı — Litvanya, Kurlandiya ve Batı Volinya Rusya'ya geçti\"")]
    if o["t"] == "1878-03-03":
        return [("b:\"Ayastefanos (San Stefano) Antlaşması\"",
                 "b:\"Ayastefanos (San Stefano) Antlaşması — Kars, Ardahan, Batum ve Doğubayazıt Rusya'ya bırakıldı\""),
                ("kaynak:\"ayastefanos-antlasmasi (TDV, doğrulanmış)\"",
                 "kaynak:\"ayastefanos-antlasmasi (TDV, doğrulanmış) — Kars/Ardahan/Batum/Doğubayazıt cümlesi TDV gövdesinden okundu" + KAYNAK_EK + "\"")]
    if o["t"] == "1917-11-07":
        return [("b:\"Ekim Devrimi — Bolşevikler iktidarı ele geçirdi\"",
                 "b:\"Ekim Devrimi — Bolşevikler Rusya Geçici Hükûmeti'ni devirdi\"")]
    return None


def d_lehistan(o):
    if o["t"] == "1699-01-26":
        return [("b:\"KARLOFÇA — Podolya ve Kamaniçe geri alındı\"",
                 "b:\"KARLOFÇA — Podolya, Kamaniçe ve Sağ Yaka Ukrayna geri alındı\""),
                ("kaynak:\"karlofca\"",
                 "kaynak:\"karlofca — Hatmanlık cümlesi: TDV karlofca (A. Özcan), gövdeden okundu" + KAYNAK_EK + "\"")]
    return None


def d_bos(o):
    return None


def yeni_js(liste):
    out = []
    for x in liste:
        dev = ("devlet", x["dev"]) if isinstance(x["dev"], str) else ("devletler", x["dev"])
        satir = [
            f'{{ t:{js_deger(x["t"])}, b:{js_deger(x["b"])}, tur:{js_deger(x["tur"])}, onem:{x["onem"]}, dunya:{x["dunya"]}, kapsam:{js_deger(x["kapsam"])},',
            f'  {dev[0]}:{js_deger(dev[1])}, etiket:{js_deger(x["etiket"])},',
            f'  yer_id:{js_deger(x["yer_id"])}, gun:{js_deger(x["gun"])},',
            f'  d:{js_deger(x["d"])},',
            f'  kaynak:{js_deger(x["kaynak"])} }},',
        ]
        out.append("\n".join(satir))
    return out


BASLIK = """// -*- coding: utf-8 -*-
// =====================================================================
// {BAS} — çok künyeli kronoloji (KRONO-KUZEY-0929, 29 Eylül 2026)
// =====================================================================
// window.{GLOB} — şartname oturumlar/KRONO-KUZEY-0929.md + KRONO-DUNYA-0929-ORTAK §4.1
// (COK yolu: app.js cokTarafliKronolojiEkle her maddeyi devlet/devletler künyesine EKLER).
//
// İKİ KESİM:
//  ① TAŞINAN — data/{ESKI}'teki, künyenin [f,t) penceresi DIŞINA düşen maddeler
//     (M-5416: madde olayın günü VAR OLAN künyeye bağlanır, ardıla geriye bağlanmaz).
//     Madde METNİ DEĞİŞTİRİLMEDİ; yalnız `devlet`/`devletler` ve `tasindi` eklendi.
//     Eski dosyada bağlayıcı bunları dosya adındaki künyeye (rusya/lehistan/isvec)
//     bağlıyordu — KRONO-BAGLAMA M-5427: "bağlı dosyada devlet: alanı İŞE YARAMAZ".
//  ② YENİ — denetim/SENKRON-DEFTER-0929.json paket["KRONO-KUZEY-0929"] net olay
//     adaylarından, kaynağı bulunanlar. Veri tablosu: denetim/ARAC-KRONO-KUZEY-0929-YENI.py
//
// 🔴 KAYNAK DAMGASI — "[özet]": BRE (bigenc.ru), Britannica ve bazı kurumsal sayfalar
//    bu oturumdan açılamadı (HTTP 401/403). Tarih, arama motorunun o sayfadan çıkardığı
//    özetten okundu; adres yazıldı ki elle teyit edilsin. "[özet]" = sayfa okunarak
//    doğrulandı DEĞİLDİR. TDV slug'ları gövdesi çekilerek okundu.
// 🔴 TAKVİM: kaynağın takvimi ÇEVRİLMEDEN yazıldı (VERI-YAPISI §59); `gun:` söyler.
//    Rus kaynakları 1918 öncesi Jülyen verir; "hesap" yazan karşılık bizim hesabımızdır.
// Rapor: denetim/KRONO-KUZEY-0929.md
// =====================================================================
window.{GLOB} = [
"""


def cok_yaz(kisa, eski, tasinan, yeni):
    glob = "KRONOLOJI_COK_" + kisa.upper()
    govde = BASLIK.replace("{BAS}", kisa.upper()).replace("{GLOB}", glob).replace("{ESKI}", eski)
    if tasinan:
        govde += f"// ── ① TAŞINAN ({len(tasinan)}) — {eski} ──────────────────────────────\n"
        govde += ",\n".join(tasinan) + ",\n"
    if yeni:
        govde += f"// ── ② YENİ ({len(yeni)}) ────────────────────────────────────────────\n"
        govde += "\n".join(yeni_js(yeni)) + "\n"
    govde += "];\n"
    return os.path.join(DATA, f"kronoloji_cok_{kisa}.js"), govde


def main():
    print("KRONO-KUZEY-0929 YAZ —", "YAZIYOR" if YAZ else "KURU KOŞU")
    isler = [
        ("kronoloji_rusya.js", "KRONOLOJI_RUSYA", t_rusya, d_rusya, False, "rusya", YENI.RUSYA),
        ("kronoloji_lehistan.js", "KRONOLOJI_LEHISTAN", t_lehistan, d_lehistan, False, "lehistan", YENI.LEHISTAN),
        ("kronoloji_isvec.js", "KRONOLOJI_ISVEC", t_isvec, d_bos, True, "isvec", []),
    ]
    yazilacak = []
    for dosya, ad, tk, dz, yi, kisa, yeni in isler:
        yol, cikti, tasinan, kalan = isle(dosya, ad, tk, dz, yi)
        cyol, cmetin = cok_yaz(kisa, dosya, tasinan, yeni)
        print(f"    → kalan {kalan} · kronoloji_cok_{kisa}.js: taşınan {len(tasinan)} + yeni {len(yeni)}")
        yazilacak += [(yol, cikti), (cyol, cmetin)]
    if not YAZ:
        print("kuru koşu — yazılmadı (--yaz)")
        return
    for yol, m in yazilacak:
        if os.path.basename(yol).startswith("kronoloji_cok_") and os.path.exists(yol):
            raise SystemExit(f"{yol} zaten var — üzerine yazılmaz, DUR")
    for yol, m in yazilacak:
        # özgün satır sonunu koru (lehistan.js CRLF); yeni COK dosyaları LF
        crlf = os.path.exists(yol) and b"\r\n" in open(yol, "rb").read(4096)
        open(yol, "w", encoding="utf-8", newline="\r\n" if crlf else "\n").write(m)
        print("  yazıldı", os.path.relpath(yol, KOK))


main()
