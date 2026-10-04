# -*- coding: utf-8 -*-
"""KRONOLOJİ MADDESİ DÖRT SÜZGEÇ (1004) — elle okumadan önce ADAY üreten ucuz ölçü.

Evren: `data/olaylar*.js` + `data/kronoloji*.js` maddeleri (krono_ortak_1004.yukle — node ile,
regex DEĞİL). Her süzgeç AYRI kova, AYRI sayı; `olaylar_ek*.js` ile ötekiler AYRI basılır
(tek birleşik oran hiçbir kampanyayı yönlendirmez).

  (a) SAHTE KESİNLİK        t ay/gün hassasiyeti taşıyor ama `d` metni yalnız YIL veriyor
        a′ (daha sert)      …ve `gun:` alanı da ay vermiyor (kesinliği dayandıran HİÇBİR metin yok)
  (b) KAYNAK TARİHİ VERMİYOR  `d`de EN AZ BİR yıl var ama hiçbiri t'nin yılına eşit değil
        b0 (bilgi, kapı dışı) `d`de hiç tarih yok — doğrulanamaz, "uyuşmuyor" DEĞİL
  (c) ATIF KUYRUĞU           `d` içinde "TDV" atfı geçiyor (atıf kuyruğu: atıf TDV'de var mı?
                             iki vakada YOKTU — uydurma atıf). Atıf yapılan madde adı ayrıca çıkarılır
  (d) 🔴 ATLAS'TAN TÜRETİLMİŞ OLABİLİR  "aynı tarihte/gün/yıl" kalıbı + aynı cümlede
                             katılma/elden çıkma/ilhak/bağlanma/el değiştirme fiili. `D207`: atlas
                             referans değil mamul üründür; böyle bir madde atlasın kendi boyamasından
                             türetilmişse kronoloji ile harita birbirini DOĞRULAMAZ, TEKRARLAR.

⚠️ Süzgeç YALNIZ ADAY üretir: SİLMEZ, DÜZELTMEZ, hüküm vermez. Bayrak = "elle bak", "hatalı" DEĞİL.
⚠️ Bilinen sınırlar (gizlenmez): yıl ayıklaması Hicrî yılları ve "N yıl önce/sonra/yıllık"
   süreleri ayıklar ama çıplak üç-dört haneli rakam her zaman yıl sayılır; ay adı Türkçe ay
   köklerinden (Ocak…Aralık) tanınır, Arapça/Osmanlıca ay adları (Muharrem…) SAYILMAZ ⇒ (a) o
   maddelerde fazla bayraklar. (b) yıl eşitliğini tam yıl üzerinden ölçer, ±1 yıl yok.
   `t:'1281-01-01'` gibi PENCERE KENETLEME değerleri (kaynak yılı daha eski) (b)yi doğru olarak
   yakalar — bayrak "t sahte" demek olabilir.

ÇIKIŞ KODU:  0 hiçbir bayrak yok · 1 en az bir bayrak var · 2 ÖLÇÜLEMEDİ
  (b0 bilgidir, çıkışı etkilemez.)

KULLANIM
  py denetim/ARAC-KRONO-SUZGEC-1004.py                 sayımlar (ek* ve öteki AYRI)
  py denetim/ARAC-KRONO-SUZGEC-1004.py --liste a|b|c|d adaylar listesi (--liste hepsi)
  py denetim/ARAC-KRONO-SUZGEC-1004.py --json YOL      adayların tamamı JSON
  --kok DİZİN   (sınav kopyası)
"""
import collections, io, json, os, re, sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import krono_ortak_1004 as ko

EK = re.compile(r"^olaylar_ek\d*\.js$")

AY_KOK = ("ocak", "şubat", "mart", "nisan", "mayıs", "haziran", "temmuz", "ağustos", "eylül", "ekim", "kasım", "aralık")
AY_RE = re.compile(r"(?<!\w)(?:%s)\w*" % "|".join(AY_KOK), re.I)
NUM_TARIH = re.compile(r"\b\d{1,2}[./]\d{1,2}[./]\d{3,4}\b")
# yıl: 3-4 haneli sayı. Süre ("145 yıl önce", "145 yıllık") yıl SAYILMAZ; "1348 yılında/yılı" sayılır.
YIL = re.compile(r"(?<![\d.,])(\d{3,4})(?!\d)(?![.,]\d)(?!\s*yıl(?!ı|ında|ının|ına|ın\b))(?!\s*[.]?\s*yüzyıl)", re.I)
TAM_TARIH = re.compile(r"(?:(\d{1,2})\s+)?(%s)\w*\s+(\d{3,4})" % "|".join(AY_KOK), re.I)
AYNI = re.compile(r"[Aa]ynı\s+(?:tarih|gün|yıl)\w*")
FIIL = re.compile(r"katıl\w*|elden çık\w*|ilhak\w*|bağlan\w*|el değiştir\w*|düştü|düşmüş", re.I)
TDV_MADDE = re.compile(r"TDV(?:\s+İslâm\s+Ansiklopedisi(?:'nin)?)?[’']?(?:n[iı]n|ye göre)?\s*([^;,.()]{0,60}?)\s*madde", re.I)


def yillar(d):
    return {int(x) for x in YIL.findall(d) if 100 <= int(x) <= 2100}


def ay_veriyor(s):
    return bool(AY_RE.search(s or "")) or bool(NUM_TARIH.search(s or ""))


def hassasiyet(t):
    """'yil' | 'ay' | 'gun' | None. `YYYY-01-01` ve `YYYY` yıl hassasiyetidir (pencere_arac ile aynı kural)."""
    p = ko.pad_tarih(t)
    if not p:
        return None
    y, m, d = p
    if m is None or (m == 1 and d == 1):
        return "yil"
    return "ay" if d is None else "gun"


def sinifla(m):
    """Maddeyi dört süzgece sok → {bayrak: ek_bilgi}. Boş sözlük = hiçbir bayrak yok."""
    d, t = m["d"], m["t"]
    p = ko.pad_tarih(t)
    b = {}
    h = hassasiyet(t)
    if h in ("ay", "gun") and not ay_veriyor(d):
        b["a"] = "t %s hassasiyetli; d yalnız yıl" % h
        if not ay_veriyor(m["gun"]):
            b["a2"] = "gun: alanı da ay vermiyor"
    ys = yillar(d)
    if p:
        if ys and p[0] not in ys:
            b["b"] = "t yılı %d; d yılları %s" % (p[0], sorted(ys)[:6])
        elif not ys:
            b["b0"] = "d'de hiç yıl yok"
    if re.search(r"TDV", d):
        ad = TDV_MADDE.search(d)
        b["c"] = "atıf: " + ((ad.group(1).strip() or "?") if ad else "?")
    mm = AYNI.search(d)
    if mm:
        cumle_sonu = re.search(r"[.;]", d[mm.end():])
        parca = d[mm.start(): mm.end() + (cumle_sonu.start() if cumle_sonu else 300)]
        if FIIL.search(parca):
            b["d"] = parca[:90]
    return b


BAYRAKLAR = (("a", "SAHTE KESİNLİK (ay/gün var, d yalnız yıl)"),
             ("a2", "  └ a′: gun: alanı da ay vermiyor"),
             ("b", "KAYNAK TARİHİ VERMİYOR (d yılları ≠ t yılı)"),
             ("c", "ATIF KUYRUĞU (d'de TDV atfı)"),
             ("d", "ATLAS'TAN TÜRETİLMİŞ OLABİLİR ('aynı tarihte' + katılma/elden çıkma)"),
             ("b0", "bilgi (kapı dışı): d'de hiç yıl yok, doğrulanamaz"))
KAPI = ("a", "b", "c", "d")


def olc(kok):
    y = ko.yukle(kok)
    sayim = collections.Counter()
    adaylar = collections.defaultdict(list)
    toplam = collections.Counter()
    for m in y["maddeler"]:
        kova = "ek" if EK.match(m["dosya"]) else "diger"
        toplam[kova] += 1
        for bayrak, bilgi in sinifla(m).items():
            sayim[(bayrak, kova)] += 1
            adaylar[bayrak].append({"dosya": m["dosya"], "t": m["t"], "b": m["b"][:70], "bilgi": bilgi, "kova": kova})
    return y, toplam, sayim, adaylar


def main(argv):
    try:
        kok = ko.kok_al(argv)
        y, toplam, sayim, adaylar = olc(kok)
        n_ek, n_di = toplam["ek"], toplam["diger"]
        print("KRONOLOJİ DÖRT SÜZGEÇ — %d madde · olaylar_ek*: %d · öteki: %d" % (n_ek + n_di, n_ek, n_di))
        print("  %-62s %8s %8s %8s" % ("bayrak (her biri AYRI kova)", "ek*", "öteki", "toplam"))
        for k, ad in BAYRAKLAR:
            e, o = sayim[(k, "ek")], sayim[(k, "diger")]
            pe = (" %4.1f%%" % (100.0 * e / n_ek)) if n_ek else ""
            po = (" %4.1f%%" % (100.0 * o / n_di)) if n_di else ""
            print("  BAYRAK %-3s %-52s ek=%d%s · diger=%d%s · toplam=%d" % (k, ad, e, pe, o, po, e + o))
        if "--liste" in argv:
            i = argv.index("--liste")
            hangi = argv[i + 1] if i + 1 < len(argv) else "hepsi"
            for k, ad in BAYRAKLAR:
                if hangi not in ("hepsi", k):
                    continue
                print("  --- %s %s ---" % (k, ad.strip()))
                for r in adaylar[k]:
                    print("    [%s] %s %s | %s | %s" % (r["kova"], r["dosya"], r["t"], r["b"], r["bilgi"]))
        if "--json" in argv:
            yol = argv[argv.index("--json") + 1]
            with io.open(yol, "w", encoding="utf-8") as f:
                json.dump({"toplam": dict(toplam), "adaylar": adaylar}, f, ensure_ascii=False, indent=1)
            print("  JSON yazıldı: " + yol)
        bayrakli = sum(sayim[(k, c)] for k in KAPI for c in ("ek", "diger"))
        if bayrakli:
            print("SONUÇ: bayrak VAR (a+b+c+d = %d aday; bir madde birden çok kovada olabilir). "
                  "Süzgeç silmez, düzeltmez — elle bakılacak aday listesi. Çıkış kodu 1" % bayrakli)
            return 1
        print("SONUÇ: hiçbir bayrak yok. Çıkış kodu 0")
        return 0
    except ko.Olculemedi as e:
        print("🔴 ÖLÇÜLEMEDİ — %s" % e)
        print("   'ölçülemedi' ≠ 'yok' ≠ 'temiz' (CLAUDE.md §11). Çıkış kodu 2")
        return 2


if __name__ == "__main__":
    try:
        sys.stdout.reconfigure(encoding="utf-8")
    except Exception:                                   # noqa
        pass
    sys.exit(ko.ortam_sar(main, sys.argv[1:]))
