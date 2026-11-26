# -*- coding: utf-8 -*-
"""ARAC-SINIR-ARAP-URET-0907 — SINIR-HUKUKI-ARAP-0907.json'u URETIR.

Iki girdiyi birlestirir:
  ① GEOMETRI — mekanik, ARAC-SINIR-ARAP-KENAR-0907.py ile ayni yoldan
  ② HUKUM    — asagidaki HUKUM tablosu; her satirin kaynagi ADIYLA yazili

`ORTAK §4` alan kumesi AYNEN kullanilir, ALAN ICAT EDILMEZ:
  a b f t t_cinsi hal dayanak dayanak_t kaynak gc kimlik_bugun kimlik_1923

🔴 `f` ALANININ OKUNUSU (dosyanin `_NOT`unda da yazili):
   `gc` geometrisinin HUKUKI sinir oldugu araligin baslangicidir.
   ⇒ 1923 sorusunun makine cevabi TEK BIR `if`:
        k.hal === "hukuki" && k.f <= "1923-10-29"     // 🟢 C'ye girer
   Bu okuyus alan ICAT ETMEDEN uc kovayi da sorulabilir kiliyor.
"""
import json, os, sys, math

sys.stdout.reconfigure(encoding="utf-8", errors="replace")

from shapely.geometry import shape
from shapely.ops import linemerge
from shapely import STRtree

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
NE = os.path.join(KOK, "veri-kaynak", "ne_10m_admin_0_countries.geojson")

BOLGE = {"Syria", "Lebanon", "Israel", "Palestine", "Jordan", "Iraq",
         "Saudi Arabia", "Yemen", "Oman", "United Arab Emirates",
         "Qatar", "Bahrain", "Kuwait"}

# NE adi -> bugunku atlas kimligi. NAME_TR olculdu (258/258 dolu) ama MODERN
# ad veriyor; atlas kunyeleri TARIHI. Tam eslesen 6, otekiler elle.
KIMLIK_BUGUN = {
    "Bahrain": "bahreyn", "Iran": "iran", "Kuwait": "kuveyt",
    "Oman": "umman", "Qatar": "katar", "Yemen": "yemen-zeydi",
    "Egypt": "(eslesmedi — NAME_TR 'Mısır')",
    "Iraq": "(eslesmedi — NAME_TR 'Irak')",
    "Israel": "(eslesmedi — NAME_TR 'İsrail')",
    "Jordan": "(eslesmedi — NAME_TR 'Ürdün')",
    "Lebanon": "(eslesmedi — NAME_TR 'Lübnan')",
    "Palestine": "(eslesmedi — NAME_TR 'Filistin')",
    "Saudi Arabia": "(eslesmedi — NAME_TR 'Suudi Arabistan')",
    "Syria": "(eslesmedi — NAME_TR 'Suriye')",
    "Turkey": "(eslesmedi — NAME_TR 'Türkiye')",
    "United Arab Emirates": "(eslesmedi — NAME_TR 'Birleşik Arap Emirlikleri')",
}

# 1923'te o toprakta hangi ATLAS KIMLIGI vardi.
# 🟢 TUR 2'DE ARTIK OLCULDU — proza degil SLUG, ve tahminle degil VERIYLE:
#    ARAC-SINIR-ARAP-YAN-0907.py, NE poligonunun icine dusen ve
#    1923-10-28'de canli olan atlas noktalarinin kimlikleri.
# 🔴 SORGU GUNU 1923-10-28: donemler yari acik (`f <= g < t`), UFUK sonu
#    1923-10-29 ⇒ o gunle biten HER donem tam o gun sorulunca DUSER
#    (109 kimlik -> 1, sahipsiz 168 -> 3804). Cipa kayda 1923-10-29 YAZILIR,
#    atlasa 1923-10-28 SORULUR. (1.MURAT tahta M-3191 · KIMLIK-1923-0907.)
# 🟢 Deger SAF SLUG(lar) — cunku esitlik testi makineye sorulabilsin:
#      k.kimlik_1923[0] === k.kimlik_1923[1]   // 1923'te kenar YOKTU
KIMLIK_1923 = {
    "Syria": "suriye-lubnan-mandasi",                 # 11 nokta
    "Lebanon": "suriye-lubnan-mandasi",               # 3
    "Israel": "filistin-mandasi",                     # 3
    "Palestine": "filistin-mandasi",                  # 3
    "Jordan": "urdun-emirligi+hicaz",                 # 2 + 1 (Maan — hicaz!)
    "Iraq": "irak-kralligi+ingiltere",                # 31 + 4
    "Saudi Arabia": "suud-ucuncu+hicaz+yemen",        # 15 + 12 + 1
    "Yemen": "yemen+ingiltere+kuayti-sultanligi+umman",  # 8+3+1+1
    "Oman": "umman",                                  # 18
    "United Arab Emirates": "ingiltere",              # 3 — kendi kimligi YOK
    "Qatar": "katar",                                 # 1
    "Bahrain": "ingiltere",                           # 1 — kendi kimligi YOK
    "Kuwait": "kuveyt",                               # 1
    "Turkey": "tbmm-turkiye+OSMANLI-dogrudan+suriye-lubnan-mandasi",  # 236+4+3
    "Iran": "kacar+sovyet-rusya+tbmm-turkiye",        # 107+1+1
    "Egypt": "misir-kralligi+ingiltere",              # 50+6
}
KIMLIK_1923_SAYIM = {
    "Syria": "suriye-lubnan-mandasi(11)",
    "Lebanon": "suriye-lubnan-mandasi(3)",
    "Israel": "filistin-mandasi(3)",
    "Palestine": "filistin-mandasi(3)",
    "Jordan": "urdun-emirligi(2)+hicaz(1: Maan)",
    "Iraq": "irak-kralligi(31)+ingiltere(4)",
    "Saudi Arabia": "suud-ucuncu(15)+hicaz(12)+yemen(1)",
    "Yemen": "yemen(8)+ingiltere(3)+kuayti-sultanligi(1)+umman(1)",
    "Oman": "umman(18)",
    "United Arab Emirates": "ingiltere(3)",
    "Qatar": "katar(1)",
    "Bahrain": "ingiltere(1)",
    "Kuwait": "kuveyt(1)",
    "Turkey": "tbmm-turkiye(236)+OSMANLI-dogrudan(4: Çaldıran·Başkale·Mersin·Şırnak)+suriye-lubnan-mandasi(3)",
    "Iran": "kacar(107)+sovyet-rusya(1)+tbmm-turkiye(1)",
    "Egypt": "misir-kralligi(50)+ingiltere(6)",
}

TDV = "TDV İslâm Ansiklopedisi"

# ---------------------------------------------------------------------------
# HUKUM TABLOSU — her satir bir KENAR. Kaynagi olmayan satir yazilmaz.
# ---------------------------------------------------------------------------
HUKUM = {
 ("Iraq", "Turkey"): dict(
    f="1926-06-05", t="", t_cinsi="gercek", hal="hukuki",
    dayanak="Ankara Antlaşması (Türkiye–İngiltere–Irak) — Musul meselesini bitirdi. "
            "1923-10-29'da bu sınır HUKUKEN YOKTU: Lozan md. 3 çözümü erteledi "
            "(TDV lozan-antlasmasi: «Antlaşmada çözümü ileriye bırakılan Musul meselesi "
            "Türk-Irak sınırının tesbit edilmesi olarak anılmış ve bunun dokuz ay içinde "
            "Türkiye ile Büyük Britanya arasında dostça belirleneceği hükmüne yer verilmişti»). "
            "⚠️ TDV irak--ulke aynı gövdede İKİ tarih veriyor: «5 Haziran 1926» (iki kez) ve "
            "«Temmuz 1926'da ... imzalanan bir antlaşma» — §4⑥ kaynak kendiyle çelişiyor, "
            "TARAF SEÇİLMEDİ, iki kez geçen gün alındı ve fark BİLDİRİLDİ.",
    dayanak_t="1926-06-05",
    kaynak="TDV lozan-antlasmasi (200) + TDV irak--ulke (200) — gövdeler okundu"),

 ("Syria", "Turkey"): dict(
    f="1939-01-01", t="", t_cinsi="gercek", hal="hukuki",
    dayanak="Hatay'ın Türkiye'ye katılması — bugünkü çizgi bu değişimden sonrasıdır. "
            "1923-10-29'daki hukukî dayanak BAŞKA ve TDV onu adıyla veriyor: "
            "«Türkiye-Suriye sınırı, Fransa ile imzalanmış olan 20 Ekim 1921 Ankara Antlaşması "
            "ile belirlenen sınır olarak kabul edilmişti» (lozan-antlasmasi). "
            "⇒ 1923 GEOMETRİSİ 1921 hattıdır ve elimde YOK; metin aranmalı (🟡). "
            "Hassasiyet: TDV yalnız «1939» diyor, GÜN VERMİYOR — §4 gereği yıl yazıldı.",
    dayanak_t="1939-01-01",
    kaynak="TDV suriye (200): «1939'da ... Fransa ve Türkiye Cumhuriyeti arasında yapılan "
           "bir antlaşma ile Hatay Türkiye sınırlarına dahil edildi» + TDV lozan-antlasmasi"),

 ("Israel", "Syria"): dict(
    f="1974-05-31", t="", t_cinsi="gercek", hal="hukuki",
    dayanak="İsrail–Suriye kuvvet ayrışma antlaşması; bugünkü hat Golan'daki bu düzenlemenin "
            "ürünüdür. 1967-06-05'te İsrail Golan'ı ele geçirdi. 1923-10-29'da bu kenar "
            "Fransız mandası ile İngiliz Filistin Mandası arasındaki manda sınırıydı ve "
            "geometrisi elimde YOK.",
    dayanak_t="1974-05-31",
    kaynak="TDV filistin (200): «Suriye-İsrail arasında 31 Mayıs 1974'te imzalanan antlaşma "
           "ile de İsrail Golan tepelerinden ele geçirdiği toprakların bir kısmını Suriye'ye "
           "geri verdi» · 1967 için aynı gövde: «5 Haziran 1967»"),

 ("Kuwait", "Saudi Arabia"): dict(
    f="", t="", t_cinsi="", hal="olculemedi",
    dayanak="1923-10-29'da burada bir ÇİZGİ değil bir TARAFSIZ BÖLGE vardı. "
            "TDV kuveyt GÜN veriyor: «Suudi Arabistan ile antlaşma imzalayarak (2 Aralık 1922) "
            "sınır meselelerini halletti». TDV irak--ulke bölgenin sonunu da söylüyor: "
            "«... oluşturdukları tarafsız bölgede ... ancak sonradan bu tarafsız bölge adı geçen "
            "üç ülke arasında bölünmüştür» — AMA TARİH VERMİYOR. "
            "⇒ bugünkü tek çizgi 1923'ün değildir; bölünme günü ⚪ ÖLÇÜLEMEDİ.",
    dayanak_t="1922-12-02",
    kaynak="TDV kuveyt (200) + TDV irak--ulke (200) — gövdeler okundu"),

 ("Iraq", "Saudi Arabia"): dict(
    f="", t="", t_cinsi="", hal="olculemedi",
    dayanak="Kuwait|Saudi ile AYNI tarafsız bölge ailesi. TDV suudi-arabistan: «1922'de "
            "İngilizler'in gözetiminde yaptığı anlaşmalarla Irak, Doğu Ürdün ve Küveyt sınırları "
            "belirlendi» (YIL hassasiyeti). TDV irak--ulke tarafsız bölgenin sonradan bölündüğünü "
            "söylüyor, TARİH VERMİYOR. ⇒ bugünkü çizgi 1923'ün değil; bölünme günü ⚪.",
    dayanak_t="1922-01-01",
    kaynak="TDV suudi-arabistan (200) + TDV irak--ulke (200)"),

 ("Jordan", "Saudi Arabia"): dict(
    f="", t="", t_cinsi="", hal="olculemedi",
    dayanak="TDV suudi-arabistan 1922'yi «Doğu Ürdün» için de sayıyor (YIL). "
            "⚠️ ÇEKİNCE, ÖLÇÜLMEDİ: bu cümle üç sınırı tek yıla topluyor; Şarkü'l-Ürdün "
            "hattının 1922'de mi yoksa daha sonra mı belirlendiği TDV urdun gövdesinde "
            "GEÇMİYOR (tarandı: «1965» 0 eşleşme, «1925» yalnız bir kitap künyesi). "
            "⇒ 1923 sonrası bir değişim olup olmadığı ⚪ ÖLÇÜLEMEDİ; akademik kaynak OKUNMADI.",
    dayanak_t="1922-01-01",
    kaynak="TDV suudi-arabistan (200) + TDV urdun (200) — ikisi de okundu, ikincisi susuyor"),

 ("Saudi Arabia", "Yemen"): dict(
    f="1934-01-01", t="", t_cinsi="gercek", hal="hukuki",
    dayanak="Tâif Antlaşması ile Necran ve Cîzân Suûdî topraklarına katıldı ⇒ bu kenar "
            "1923-10-29'dan SONRA değişti ve bugünkü çizginin en azından batı kesimi "
            "1934 sonrasıdır. Hassasiyet: TDV «1934» diyor, GÜN VERMİYOR. "
            "⚠️ Doğu kesiminin (Rub'ul Hâlî) ne zaman çizildiği ⚪ ÖLÇÜLMEDİ.",
    dayanak_t="1934-01-01",
    kaynak="TDV suudi-arabistan (200): «1934'te Suûdîler'le Yemen arasında imzalanan Tâif "
           "Antlaşması'yla Necran ve Cîzân'ı da topraklarına kattı»"),

 ("Israel", "Jordan"): dict(
    f="", t="", t_cinsi="", hal="olculemedi",
    dayanak="1923-10-29'da bu kenarın İKİ UCU DA aynı kimliğin — İngiliz Filistin Mandası'nın — "
            "içindeydi; Şeria'nın doğusu idarî olarak ayrılmıştı ama ULUSLARARASI bir sınır "
            "DEĞİLDİ (TDV filistin: «Şeria nehrinin doğusundan itibaren ayrılan bugünkü Ürdün "
            "kısmı hariç ... Filistin manda idaresi toprakları»). Bugünkü hat 1967 sonrasının "
            "ürünü (TDV urdun: «1967'de İsrail'in Batı Şeria'yı işgal etmesi üzerine bu yöndeki "
            "sınır fiilen değişikliğe uğrayarak Şeria (Ürdün) nehri, Lût gölü ve Araba "
            "vadisinden geçer hale gelmiştir»). ⇒ KOVA ÖNERİSİ: 1923-KENAR-YOK.",
    dayanak_t="", kaynak="TDV filistin (200) + TDV urdun (200)"),

 ("Jordan", "Palestine"): dict(
    f="", t="", t_cinsi="", hal="olculemedi",
    dayanak="Israel|Jordan ile AYNI sınıf: 1923'te iki uç da İngiliz Filistin Mandası'nın "
            "içindeydi. Bugünkü Ürdün–Batı Şeria hattı 1967 sonrasıdır. "
            "⇒ KOVA ÖNERİSİ: 1923-KENAR-YOK.",
    dayanak_t="", kaynak="TDV filistin (200) + TDV urdun (200)"),

 ("Israel", "Palestine"): dict(
    f="", t="", t_cinsi="", hal="olculemedi",
    dayanak="1923-10-29'da İsrail de Filistin devleti de YOKTU; bütün alan tek bir kimlikti "
            "(İngiliz Filistin Mandası, MC onayı 24 Temmuz 1922 — TDV filistin). "
            "Bugünkü iki parçalı hat (Batı Şeria + Gazze) 1949 sonrasının ürünü. "
            "⇒ KOVA ÖNERİSİ: 1923-KENAR-YOK.",
    dayanak_t="", kaynak="TDV filistin (200)"),

 ("Lebanon", "Syria"): dict(
    f="", t="", t_cinsi="", hal="olculemedi",
    dayanak="🟢 EN GÜÇLÜ 🟢 ADAYIM, ve YİNE DE «hukuki» YAZMADIM. TDV lubnan bugünküyle "
            "uyuşan bir tarif veriyor: «... yeni devletin sınırları kuzeyde Kebîr ırmağı, "
            "doğuda Antilübnan dağlarının zirvesi, Ba'lebek ile beraber Bikā'ın tamamına "
            "yakını, güneyde ise Sayda ve Sûr şehirlerini içine alacak şekilde belirlenmişti». "
            "TDV suriye aynı olayı Suriye tarafından anlatıyor. AMA hiçbir gövde «bu sınır "
            "DEĞİŞMEDİ» DEMİYOR — tarifin bugünküyle uyuşması benim ÇIKARIMIM, kaynağın "
            "İFADESİ değil (§11: ölçüm doğru, çıkarım ayrı satırdır). "
            "⚠️ VE KAYNAK KENDİYLE ÇELİŞİYOR (§4⑥): TDV lubnan «Fransa Eylül 1921'de Büyük "
            "Lübnan Devleti'nin kurulduğunu ilân etti» diyor; yaygın tarih 1 Eylül 1920'dir. "
            "TARAF SEÇİLMEDİ. "
            "⇒ Ayrıca 1923'te iki uç da AYNI mandater gücün (Fransa) iki ayrı devletiydi; "
            "KOVA ÖNERİSİ: 1923-KENAR-YOK bu kenar için de sorulmalı.",
    dayanak_t="", kaynak="TDV lubnan (200) + TDV suriye (200)"),

 ("Israel", "Lebanon"): dict(
    f="", t="", t_cinsi="", hal="olculemedi",
    dayanak="Bu kenar bölgemin ÇIPAYA EN YAKIN adayı olabilir (Filistin–Lübnan manda sınırı "
            "1920-1923 arasında çizildi) ama TDV bunu ANMIYOR: lubnan · filistin · suriye "
            "gövdelerinin üçü de tarandı, «1923» Lübnan gövdesinde 0 eşleşme, sınır "
            "anlaşmasına atıf yok. 🔴 «bulunamadi» YAZMADIM çünkü AKADEMİK KAYNAK OKUNMADI — "
            "yanlış damga bir sonraki oturumu ARAMAKTAN alıkoyar (§9).",
    dayanak_t="", kaynak="TDV lubnan/filistin/suriye (üçü de 200, gövdeleri okundu) — ANMIYOR"),
}

# Kaynaga hic sorulmayanlar — `okumadim`. Kayit YAZILIR (yazilmamasi
# "bakilmadi" demek olurdu ve ikisi ayri seydir, ORTAK §4).
OKUMADIM = "⚪ OKUMADIM — bu kenar icin hicbir kaynak acilmadi (bu tur bitmedi, kalem ACIK)."


def km(a, b):
    R = 6371.0088
    p1, p2 = math.radians(a[1]), math.radians(b[1])
    dp, dl = p2 - p1, math.radians(b[0] - a[0])
    h = math.sin(dp / 2) ** 2 + math.cos(p1) * math.cos(p2) * math.sin(dl / 2) ** 2
    return 2 * R * math.asin(min(1.0, math.sqrt(h)))


def gc_yap(g):
    par = [g] if g.geom_type == "LineString" else list(g.geoms)
    out = []
    for p in par:
        d, onc = [], None
        for x, y in p.coords:
            t = [round(x, 3), round(y, 3)]
            if t != onc:
                d.append(t)
                onc = t
        if len(d) >= 2:
            out.append(d)
    return out


def main():
    gj = json.load(open(NE, encoding="utf-8"))
    kayit = []
    for ft in gj["features"]:
        pr = ft["properties"]
        g = shape(ft["geometry"])
        kayit.append({"ad": pr.get("ADMIN"), "geom": g, "gecerli": g.is_valid})

    idx = STRtree([k["geom"] for k in kayit])
    kenar, olcusuz = {}, []
    for A in kayit:
        if A["ad"] not in BOLGE:
            continue
        for j in idx.query(A["geom"]):
            B = kayit[j]
            if B["ad"] == A["ad"]:
                continue
            an = tuple(sorted([A["ad"], B["ad"]]))
            if an in kenar or an in [o[0] for o in olcusuz]:
                continue
            if not (A["gecerli"] and B["gecerli"]):
                olcusuz.append((an, "NE geometrisi GECERSIZ (Egypt) — KADEME-MODEL-0907 olcuyor"))
                continue
            kes = A["geom"].boundary.intersection(B["geom"].boundary)
            if kes.is_empty:
                continue
            cz = [p for p in (list(kes.geoms) if hasattr(kes, "geoms") else [kes])
                  if p.geom_type == "LineString" and len(p.coords) >= 2]
            if not cz:
                continue
            kenar[an] = linemerge(cz) if len(cz) > 1 else cz[0]

    kayitlar = []
    for (a, b), g in sorted(kenar.items()):
        h = HUKUM.get((a, b))
        gcd = gc_yap(g)
        uz = round(sum(km(d[i], d[i + 1]) for d in gcd for i in range(len(d) - 1)), 1)
        kayitlar.append({
            "a": a, "b": b,
            "f": (h or {}).get("f", ""), "t": (h or {}).get("t", ""),
            "t_cinsi": (h or {}).get("t_cinsi", ""),
            "hal": (h or {}).get("hal", "olculemedi"),
            "dayanak": (h or {}).get("dayanak", OKUMADIM),
            "dayanak_t": (h or {}).get("dayanak_t", ""),
            "kaynak": (h or {}).get("kaynak", ""),
            "gc": gcd,
            "gc_uzunluk_km": uz,
            "kimlik_bugun": [KIMLIK_BUGUN.get(a, "?"), KIMLIK_BUGUN.get(b, "?")],
            "kimlik_1923": [KIMLIK_1923.get(a, "⚪ ölçmedim"), KIMLIK_1923.get(b, "⚪ ölçmedim")],
        })
    for (a, b), sebep in sorted(olcusuz):
        kayitlar.append({
            "a": a, "b": b, "f": "", "t": "", "t_cinsi": "",
            "hal": "olculemedi", "dayanak": sebep, "dayanak_t": "", "kaynak": "",
            "gc": [], "gc_uzunluk_km": 0.0,
            "kimlik_bugun": [KIMLIK_BUGUN.get(a, "?"), KIMLIK_BUGUN.get(b, "?")],
            "kimlik_1923": [KIMLIK_1923.get(a, "⚪ ölçmedim"), KIMLIK_1923.get(b, "⚪ ölçmedim")],
        })

    cikti = {
        "_NOT": "SINIR-ARAP-0907 · Arap Doğu · kademe C (hukukî sınır) · 7 Eylül 2026. "
                "ÜRETİLDİ: denetim/ARAC-SINIR-ARAP-URET-0907.py — ELLE YAZILMAZ.",
        "_F_ALANININ_OKUNUSU":
            "`f` = `gc` geometrisinin hukukî sınır olduğu aralığın BAŞLANGICI. "
            "1923 sorusunun makine cevabı tek bir if: "
            "k.hal === 'hukuki' && k.f <= '1923-10-29'  ⇒ 🟢 C'ye girer. "
            "Alan İCAT EDİLMEDİ; ORTAK §4'ün alan kümesi aynen kullanıldı.",
        "_KIMLIK_1923_SAYIM": KIMLIK_1923_SAYIM,
        "_SORGU_GUNU": {
            "cipa_kayda_yazilan": "1923-10-29",
            "atlasa_sorulan": "1923-10-28",
            "niçin": "Dönemler yarı açık (f <= g < t) ve girdi.UFUK[1] == '1923-10-29'; "
                     "o günle biten HER dönem tam o gün sorulunca düşer. Ölçüldü: "
                     "canlı kimlik 109 -> 1, sahipsiz nokta 168 -> 3804. "
                     "Tuzak SESSİZ: hata vermez, temiz sayı üretir. "
                     "(1.MURAT tahta M-3191 · ölçen KIMLIK-1923-0907.)",
        },
        "_KOVA_ONERISI": {
            "ad": "1923-KENAR-YOK",
            "niçin": "Şartnamenin üç kovası (🟢 girer · 🟡 metin gerek · 🔴 A/B'de kalır) "
                     "bu sınıfı ifade edemiyor: 1923'te kenarın İKİ UCU DA aynı "
                     "kimliğin içindeydi ⇒ o gün ULUSLARARASI bir sınır DEĞİLDİ. "
                     "'Metin bulunamadı' ile 'sorulan şey o gün YOKTU' aynı kovaya "
                     "konursa, sonraki oturum ikincisini 'arandı, yok' diye okur. "
                     "KARAR 1.MURAT'IN — altı kolu birden bağlar.",
            "🟢_YENI_ALAN_GEREKMIYOR":
                "TUR 2'de `kimlik_1923` ölçülüp SAF SLUG'a çevrildi ⇒ öneri artık "
                "var olan bir alanın eşitlik testi: k.kimlik_1923[0] === k.kimlik_1923[1]. "
                "Maliyeti SIFIR; yalnız kovanın ADI ve okunuşu bir karar gerektiriyor.",
            "TUR1_ADAYLARI": [["Israel", "Palestine"], ["Israel", "Jordan"],
                              ["Jordan", "Palestine"], ["Lebanon", "Syria"]],
            "TUR2_OLCUMU": {
                "🟢 DOGRULANDI": [["Israel", "Palestine", "filistin-mandasi"],
                                  ["Lebanon", "Syria", "suriye-lubnan-mandasi"]],
                "🔴 CURUDU": [
                    ["Israel", "Jordan", "filistin-mandasi ≠ urdun-emirligi+hicaz"],
                    ["Jordan", "Palestine", "urdun-emirligi+hicaz ≠ filistin-mandasi"]],
                "_NOT": "TUR 1'de bu dördü 'iki uç da aynı kimlik' diye önerilmişti; "
                        "ölçüm İKİSİNİ ÇÜRÜTTÜ. Atlas Şarkü'l-Ürdün'ü AYRI bir kimlikle "
                        "(`urdun-emirligi`, 1921-02-01'den) modelliyor. "
                        "⚠️ Bu, 'hukuken ayrı devletti' demek DEĞİL — ikisi de aynı "
                        "İngiliz mandasının altındaydı; ayrılan şey ATLASIN MODELİ. "
                        "Ölçülebilir olan atlas modelidir; hukukî okuma AYRI bir soru.",
            },
        },
        "_YENI_BULGU_BIR_UCTA_COK_KIMLIK": {
            "_NOT": "Kayıt modeli her uç için TEK kimlik varsayıyor. Bölgemde 16 ucun "
                    "7'sinde 1923'te BİRDEN ÇOK kimlik var — ve bazıları gürültü değil, "
                    "tarihin kendisi.",
            "ornekler": {
                "Jordan": "urdun-emirligi(2) + hicaz(1) — Maan 1923'te HİCAZ'dı "
                          "(atlas: Maan s:hicaz 1918-09-27'den). Yani Jordan|Saudi kenarının "
                          "1923'te İKİ AYRI kimliğe bakan iki parçası var.",
                "Saudi Arabia": "suud-ucuncu(15) + hicaz(12) — 1923'te TEK bir Suudi "
                                "Arabistan YOKTU; Necid ve Hicaz AYRI devletlerdi.",
                "Turkey": "tbmm-turkiye(236) + OSMANLI-dogrudan(4) — aşağıya bak",
            },
            "sonuc": "⇒ Bir kenarın `kimlik_1923` alanı TEK DEĞER OLMAYABİLİR; "
                     "kenarın 1923'te birden çok PARÇAYA bölünmesi gerekebilir. "
                     "Bu ALTI KOLU birden bağlar, karar 1.MURAT'ın.",
        },
        "_YAN_BULGU_OSMANLI_4": {
            "_NOT": "Bugünkü Türkiye içinde 1923-10-28'de 236 nokta `tbmm-turkiye`, "
                    "4 nokta hâlâ `d:` (OSMANLI doğrudan): Çaldıran · Başkale · Mersin · "
                    "Şırnak. Dördünün de `d:` dönemi tam `1923-10-29`da bitiyor.",
            "ölçüm": "236 / 4 — oran 59:1",
            "hüküm": "VERMEDİM. Kasıt mı kayıtlar arası tutarsızlık mı BİLMİYORUM; "
                     "`data/` donuk ve benim dosyam değil. Mersin'in `d:`si 1921-10-20'de "
                     "(Ankara İtilâfnâmesi günü) başlıyor — yani kayıt o günü BİLİYOR ama "
                     "kimliği TBMM'ye çevirmemiş. BİLDİRİYORUM, dokunmuyorum.",
        },
        "_OLCUM_SINIRI": [
            "Mısır'ın NE geometrisi GEÇERSİZ ⇒ 4 kenar hiç ölçülemedi (payda 26, ölçülen 22).",
            "`kimlik_1923` alanı bölgenin çoğu için ⚪ — mekanik doldurulmadı (ORTAK §7).",
            "TDV dışı akademik kaynak bu turda HİÇ OKUNMADI; 🔴 `bulunamadi` damgası "
            "bu yüzden HİÇ kullanılmadı (yanlış damga hatayı kalıcılaştırır).",
        ],
        "kenar": kayitlar,
    }
    yol = os.path.join(KOK, "denetim", "SINIR-HUKUKI-ARAP-0907.json")
    with open(yol, "w", encoding="utf-8") as f:
        json.dump(cikti, f, ensure_ascii=False, indent=1)

    hk = [k for k in kayitlar if k["hal"] == "hukuki"]
    ye = [k for k in kayitlar if k["hal"] == "hukuki" and k["f"] and k["f"] <= "1923-10-29"]
    print("KAYIT           : %d   (olculen 22 + Misir 4)" % len(kayitlar))
    print("hal=hukuki      : %d   %s" % (len(hk), [k["a"] + "|" + k["b"] for k in hk]))
    print("  f <= 1923-10-29 (🟢 C'ye girer): %d" % len(ye))
    print("hal=olculemedi  : %d" % len([k for k in kayitlar if k["hal"] == "olculemedi"]))
    print("hal=bulunamadi  : %d   (bilerek 0 — akademik kaynak OKUNMADI)" %
          len([k for k in kayitlar if k["hal"] == "bulunamadi"]))
    kaynakli = [k for k in kayitlar if k["kaynak"]]
    print("kaynagi ADIYLA yazili kenar: %d / %d" % (len(kaynakli), len(kayitlar)))
    print("gc tepe toplam  : %d" % sum(len(d) for k in kayitlar for d in k["gc"]))
    print("dosya           : %.1f KB" % (os.path.getsize(yol) / 1024))
    print("YAZILDI: %s" % os.path.relpath(yol, KOK))


if __name__ == "__main__":
    main()
