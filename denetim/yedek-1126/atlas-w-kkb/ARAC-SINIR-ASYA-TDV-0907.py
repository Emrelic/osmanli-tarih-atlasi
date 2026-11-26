# -*- coding: utf-8 -*-
"""
SINIR-ASYA-0907 · TDV gövde çekici + sınır cümlesi tarayıcı
Şartname: oturumlar/SINIR-HUKUKI-ORTAK-0907.md §V

§4 tuzaklarına karşı ALINAN ÖNLEMLER — hepsi ölçülüyor, varsayılmıyor:
  ① ÖLÜ SLUG        302 ⇒ ayrı kova. (kontrol slug'ı ile ateşleme sınandı:
                    `bulunmayanslug` → 302, canlılar → 200)
  ④ BOİLERPLATE     gövde uzunluğu BASILIYOR; kısa gövde `olculemedi`,
                    "TDV'de yok" DEĞİL.
  ⑧ RAKAM/AD EŞLEŞMESİ ≠ DESTEK — bu alet cümleyi BULUR, HÜKÜM VERMEZ.
                    Cümleler ekrana basılır, kararı insan verir.
  SINIR KORUMASI    yıl araması \b ile — "533" sayfa aralığını yakalamasın.

Alet KARAR VERMEZ. Yalnız "hangi cümle bu sınırdan bahsediyor" sorusunu
cevaplar; `hal` alanını doldurmak okumaya bağlıdır.
"""
import sys, io, os, re, json, time, urllib.request
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8", errors="replace")

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
ONBELLEK = os.path.join(KOK, "denetim", "_tdv_onbellek")
os.makedirs(ONBELLEK, exist_ok=True)

BAS = {"User-Agent": "Mozilla/5.0 (atlas arastirma; tek seferlik)"}


def govde(slug):
    """(http_kodu, duz_metin). Onbellekli — aynı slug iki kez çekilmez."""
    yol = os.path.join(ONBELLEK, slug + ".txt")
    if os.path.exists(yol):
        return 200, io.open(yol, encoding="utf-8").read()
    url = "https://islamansiklopedisi.org.tr/" + slug
    req = urllib.request.Request(url, headers=BAS)
    try:
        with urllib.request.urlopen(req, timeout=45) as r:
            kod = r.getcode()
            ham = r.read().decode("utf-8", "replace")
    except urllib.error.HTTPError as e:
        return e.code, ""
    except Exception as e:
        return 0, "HATA: %s" % e            # 0 = TASIMA ARIZASI, "olu" DEGIL
    if "/arama" in r.geturl() or r.geturl().rstrip("/").endswith(".org.tr"):
        return 302, ""
    m = re.sub(r"(?is)<(script|style|nav|header|footer)[^>]*>.*?</\1>", " ", ham)
    m = re.sub(r"(?s)<[^>]+>", " ", m)
    m = (m.replace("&nbsp;", " ").replace("&amp;", "&")
          .replace("&quot;", '"').replace("&#39;", "'")
          .replace("&lt;", "<").replace("&gt;", ">"))
    m = re.sub(r"[ \t\r\f\v]+", " ", m)
    m = re.sub(r"\n\s*\n+", "\n", m).strip()
    io.open(yol, "w", encoding="utf-8").write(m)
    return kod, m


def cumleler(metin, anahtarlar):
    """Anahtarlardan BIRINI iceren cumleleri dondur (kelime siniriyla)."""
    parca = re.split(r"(?<=[.!?])\s+", metin)
    out = []
    for c in parca:
        for a in anahtarlar:
            if re.search(r"(?<![0-9A-Za-zÇĞİÖŞÜçğıöşü])" + re.escape(a) +
                         r"(?![0-9A-Za-zÇĞİÖŞÜçğıöşü])", c, re.I):
                out.append((a, " ".join(c.split())[:400]))
                break
    return out


ISLER = [
    ("Iran / Turkmenistan", ["turkmenistan", "iran", "merv"],
     ["Ahal", "Ahal Teke", "1881", "1893", "Etrek", "Horasan", "sınır"]),
    ("Afghanistan / Iran", ["afganistan", "sistan"],
     ["Sîstan", "Sistan", "1872", "1903", "1905", "Goldsmid", "hakem", "sınır"]),
    ("Afghanistan / Pakistan", ["afganistan", "pakistan"],
     ["Durand", "1893", "Hint", "sınır hattı", "sınır"]),
    ("India / Nepal", ["nepal"], ["1816", "Segavli", "Sugauli", "İngiliz", "sınır"]),
    ("China / Tibet / Nepal", ["tibet"],
     ["1904", "1914", "Simla", "McMahon", "Lhasa", "sınır"]),
    ("Mongolia / Russia", ["mogolistan"],
     ["Tannu", "Tuva", "1921", "1924", "1944", "Uryanhay", "sınır"]),
]

if __name__ == "__main__":
    rapor = {}
    for baslik, sluglar, anahtar in ISLER:
        print("=" * 78)
        print("### ", baslik)
        for s in sluglar:
            kod, m = govde(s)
            print("  --- slug `%s`  HTTP %s  gövde %d karakter" % (s, kod, len(m)))
            if kod == 302:
                print("      🔴 ÖLÜ SLUG")
                continue
            if kod == 0:
                print("      ⚪ TAŞIMA ARIZASI — 'ölü' DEĞİL:", m[:120])
                continue
            if len(m) < 2500:
                print("      ⚪ BOİLERPLATE ŞÜPHESİ (<2500 kr) — 'yok' YAZILMAZ")
                continue
            bulunan = cumleler(m, anahtar)
            print("      eşleşen cümle: %d" % len(bulunan))
            for a, c in bulunan[:6]:
                print("        [%s] %s" % (a, c))
            rapor.setdefault(baslik, {})[s] = {
                "http": kod, "govde": len(m),
                "cumle": [{"anahtar": a, "metin": c} for a, c in bulunan[:12]]}
        time.sleep(1)
    json.dump(rapor, io.open(os.path.join(KOK, "denetim",
              "OLCUM-SINIR-ASYA-TDV-0907.json"), "w", encoding="utf-8"),
              ensure_ascii=False, indent=1)
    print()
    print("önbellek:", ONBELLEK)
