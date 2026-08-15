# -*- coding: utf-8 -*-
"""kural_olc.py — DOKTRİNİ ÖLÇER. Ne taşıyor, ne taşınıyor.

🔴 NİÇİN VAR — Emre, 15 Ağustos 2026:
    "Boş yere bunları yazmaya, SIRTIMIZDA TAŞIMAYA, bunlar için işimizi
     YAVAŞLATMAYA, TOKEN HARCAMAYA gerek yok."

Ve bedeli her oturumda ödeniyor:
    CLAUDE.md        2152 satır   ← her oturum açılışında BAŞTAN SONA
    OGRENILENLER.md  4072 satır   ← "her oturumda" diye yazılı
    ─────────────────────────────
    6224 satır       her oturum, her seferinde

⚠️ Ama kardeş ölçüm da yapıldı: `ClaudEmre/kutu/buda.py` sistem
yasalarını ölçtü — **87 madde, ortalama atıf 5,2, atıfsız 0.** Yani ORASI
sağlıklı. Yük proje doktrininde.

    py arac/kural_olc.py            ölç ve raporla
    py arac/kural_olc.py --ayrinti  her maddeyi tek tek dök

────────────────────────────────────────────────────────────────────────
ÖLÇÜT — bir kuralın "ölçüsü" nedir

`YASALAR §71`: *bir kuralın faydası ÖNLEDİĞİ HATAYLA ölçülür ve o hata
GÖRÜNMEZ.* O yüzden faydayı doğrudan ölçemeyiz; **vakasını** ölçeriz.

    ① SAYI      metinde ölçülmüş bir rakam var mı ("7 kez", "%36,6",
                "442 çift", "83 dakika") — VAKASIZ KURAL YAZMA kuralının
                sınanabilir hâli
    ② VAKA      tarih · commit karması · dosya yolu — "ne zaman, nerede"
    ③ ATIF      depoda başka bir yerden çağrılıyor mu (§N · madde adı)
    ④ KAPI      bir betik bu soruyu SORUYOR mu (denetle.py · nöbetçi)
                🟢 En değerlisi bu: kapıya dönüşmüş kuralın METNİ
                okunmasa da yürürlüktedir.

HÜKÜM
    TAŞIYICI  ④ var  ya da  (① ve ②)      → çekirdekte KALIR
    UYUYAN    ② var ama ① yok              → çekirdekte kalır, KISALTILIR
    ARŞİV     ① de ② de yok, ③ de yok      → arşive iner, YERİNE İŞARET

🔴 VE ŞÜPHEDE KALAN KALIR. Yanlışlıkla arşive inen taşıyıcı bir kural,
gereksiz duran bir kuraldan pahalıdır: birincisi bir hataya kapı açar,
ikincisi yalnız satır işgal eder.

────────────────────────────────────────────────────────────────────────
🔴🔴 İLK KOŞU BU ÖLÇÜTÜ ÇÜRÜTTÜ — 15 Ağustos 2026, aynı gün

    264 madde · TAŞIYICI %95 · ARŞİV %5

**%95 bir ölçüm değil, bir totolojidir.** Sebebi ölçüldü: bu projenin
yazım kültürü zaten *"ölçümü ve vakayı yaz"* diyor. Yani ①+② testi,
kuralın FAYDASINI değil **metnin EV ÜSLÛBUNA uyduğunu** ölçüyor. Üslûba
uyan her paragraf geçiyor.

📌 Bu, projenin kendi kayıtlı hata sınıfının birebir tekrarı:
*"denetim var ≠ o soruyu soruyor"* — alet çalıştı, doğru saydı, **yanlış
soruyu sordu.** Ve ironi şu ki bunu ölçmek için yazılmış alet, aynı
kusuru kendi üzerinde işledi.

🟢 DOĞRU SORU BAŞKA, ve Emre'nin şikâyetinin tam karşılığı:
    "Kaç kural KAPIYA dönüşmüş, kaç tanesi hâlâ HAFIZAYA emanet?"
Çünkü yalnız metin olarak duran her kural, er geç çiğnenecek bir
kuraldır — §11 bunu **yedi kez** kanıtladı. `--kapi` bunu ölçer:
arşivlenecek kural aramak yerine **kapıya dönüşmesi gereken** kuralı
arar. Arşiv 320 satır kazandırır; kapı bir hatayı önler.
"""
import io
import os
import re
import sys

sys.stdout.reconfigure(encoding="utf-8", errors="replace")
KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
HEDEFLER = ["CLAUDE.md", "OGRENILENLER.md"]

SAYI = re.compile(r"(?<![\w/])(?:%\s?\d|\d{1,3}[.,]?\d*\s*(?:kez|kat|gün|"
                  r"saat|dakika|yıl|ay|nokta|madde|kayıt|çift|satır|km|"
                  r"petek|oturum|dosya|slug|renk|hücre|MB|km²)|\d+\s*[→-]\s*\d+)")
VAKA = re.compile(r"(20\d\d-\d\d-\d\d|\d{1,2}\s+(?:Ocak|Şubat|Mart|Nisan|"
                  r"Mayıs|Haziran|Temmuz|Ağustos|Eylül|Ekim|Kasım|Aralık)"
                  r"|\b[0-9a-f]{7,40}\b|\b\w+\.(?:py|js|md|json|geojson)\b)")


def _bolumler(metin):
    """Markdown'ı BAŞLIK + MADDE parçalarına ayır.

    ⚠️ Kendi ayrıştırıcını yazmanın bilinen bedeli var (proje bunu üç kez
    öğrendi). Ama markdown'ın yorumlayıcısı yok; burada YAPI basit ve
    ölçüt kaba olduğu için kabul edilebilir. **Ve bu kabaca ölçüm bir
    ŞARTNAMEYE değil, BİR RAPORA giriyor** — hükmü insan verecek.
    """
    p, simdi = [], None
    for i, s in enumerate(metin.splitlines(), 1):
        b = re.match(r"^(#{2,4})\s+(.*)", s)
        m = re.match(r"^-\s+(?:🔴|🟢|🟡|📌|⚠️|🟠)?\s*\*\*(.+?)\*\*", s)
        if b or m:
            if simdi:
                p.append(simdi)
            simdi = {"satir": i, "baslik": (b.group(2) if b else m.group(1))[:78],
                     "cins": "baslik" if b else "madde", "metin": s}
        elif simdi is not None:
            simdi["metin"] += "\n" + s
    if simdi:
        p.append(simdi)
    return p


def _kapi_kumesi():
    """Hangi kavramları bir BETİK gerçekten soruyor — arac/ taranarak."""
    k = set()
    d = os.path.join(KOK, "arac")
    for a in os.listdir(d) if os.path.isdir(d) else []:
        if not a.endswith(".py"):
            continue
        try:
            m = io.open(os.path.join(d, a), encoding="utf-8",
                        errors="replace").read()
        except Exception:
            continue
        for w in re.findall(r"[A-Za-zÇĞİÖŞÜçğıöşü_]{5,}", m):
            k.add(w.lower())
    return k


def olc(ayrinti=False):
    kapi = _kapi_kumesi()
    ozet = {}
    hepsi = []
    for dosya in HEDEFLER:
        yol = os.path.join(KOK, dosya)
        if not os.path.exists(yol):
            continue
        metin = io.open(yol, encoding="utf-8", errors="replace").read()
        for p in _bolumler(metin):
            g = p["metin"]
            p["dosya"] = dosya
            p["uzunluk"] = len(g.splitlines())
            p["sayi"] = bool(SAYI.search(g))
            p["vaka"] = bool(VAKA.search(g))
            # ATIF: başlığın ayırt edici kelimeleri depoda başka yerde
            kelime = [w for w in re.findall(
                r"[A-Za-zÇĞİÖŞÜçğıöşü_]{6,}", p["baslik"])][:3]
            p["kapi"] = any(w.lower() in kapi for w in kelime)
            if p["kapi"] or (p["sayi"] and p["vaka"]):
                p["hukum"] = "TASIYICI"
            elif p["vaka"] or p["sayi"]:
                p["hukum"] = "UYUYAN"
            else:
                p["hukum"] = "ARSIV"
            ozet.setdefault(dosya, {}).setdefault(p["hukum"], []).append(p)
            hepsi.append(p)

    print("=" * 74)
    print("DOKTRİN ÖLÇÜMÜ — %d madde" % len(hepsi))
    print("=" * 74)
    for dosya in HEDEFLER:
        d = ozet.get(dosya, {})
        if not d:
            continue
        tsat = sum(x["uzunluk"] for v in d.values() for x in v)
        print("\n%s — %d madde · %d satır" % (dosya,
                                              sum(len(v) for v in d.values()), tsat))
        for h in ("TASIYICI", "UYUYAN", "ARSIV"):
            v = d.get(h, [])
            sat = sum(x["uzunluk"] for x in v)
            im = {"TASIYICI": "🟢", "UYUYAN": "🟡", "ARSIV": "⚪"}[h]
            print("   %s %-9s %4d madde · %5d satır  (%%%.0f)"
                  % (im, h, len(v), sat, 100.0 * sat / tsat if tsat else 0))
    ars = [p for p in hepsi if p["hukum"] == "ARSIV"]
    print("\n" + "=" * 74)
    print("⚪ ARŞİVE ADAY — %d madde · %d satır"
          % (len(ars), sum(p["uzunluk"] for p in ars)))
    print("=" * 74)
    print("🔴 BU BİR ÖNERİDİR, HÜKÜM DEĞİL. Şüphede kalan KALIR:")
    print("   yanlışlıkla inen taşıyıcı kural bir HATAYA kapı açar;")
    print("   gereksiz duran kural yalnız satır işgal eder.\n")
    for p in sorted(ars, key=lambda x: -x["uzunluk"])[:25]:
        print("   %-14s %5d  %2d sat  %s"
              % (p["dosya"][:14], p["satir"], p["uzunluk"], p["baslik"][:44]))
    if ayrinti:
        print("\n" + "=" * 74)
        for p in hepsi:
            print("%-9s %-14s :%-5d %2dsat  s%d v%d k%d  %s"
                  % (p["hukum"], p["dosya"][:14], p["satir"], p["uzunluk"],
                     p["sayi"], p["vaka"], p["kapi"], p["baslik"][:40]))
    return 0


# ── KAPI ÖLÇÜMÜ — asıl soru ──────────────────────────────────────────
# Her satır: (kural, onu SORAN kapı ya da None, vakası)
# 🔴 Elle yazılmış çünkü ölçülen şey METİN DEĞİL, ARACIN NE SORDUĞU —
# ve bunu ancak aletleri okuyarak bilirim. Kaba sayımın şartnameye
# girmesi yasak (`§11`), ama bu bir RAPORA giriyor ve tek tek doğrulandı.
KAPILAR = [
    ("Değişmez 1 — sahipsizlik yok", "arac/denetle.py", "196 sahipsiz / tavan 202"),
    ("Değişmez 1b — iç boşluk", "arac/denetle.py", "0 boşluk"),
    ("Değişmez 1c — sahipsiz VE belgesiz", "arac/denetle.py", "29 → 16"),
    ("Değişmez 2 — sessiz toprak değişimi yok", "arac/denetle.py", "506 kırılma, 0 açık"),
    ("Değişmez 2s / 2i / 2t", "arac/denetle.py", "tavanlı"),
    ("Değişmez 3 — dört boyut çelişmez", "arac/denetle.py", "442 sayaç"),
    ("Değişmez 3z — kd: zaman ayağı", "arac/denetle.py", "442 | 442 | 0"),
    ("dönem sağlığı (sıfır/ters/çakışan)", "arac/denetle.py", "0/0/0"),
    ("mükerrer kronoloji maddesi", "arac/denetle.py", "Jaccard 0,45"),
    ("3 km yakın mükerrer nokta", "arac/denetle.py", "5 → 2"),
    ("kara maskesi dışı nokta", "arac/denetle.py", "reçete sınanıyor"),
    ("renk çakışması (Voronoi komşusu)", "arac/renk_olc.py", "ΔE eşiği"),
    ("renk: beyan ↔ çizilen ayrışması", "arac/renk_fark.py", "132 düşen çift"),
    ("yayın kapısı — bayat/bağlanmamış dosya", "arac/denetle_yayin.py", "koşu durdurdu"),
    ("data/*.js yorum yalnız kendi satırında", "arac/yorum_temizle.py", "iki kez kilitledi"),
    ("motor izi — koşu sırasında kod değişimi", "arac/uret_petek.py", "83 dk koşu öldü"),
    ("§11 kaçış kabuktan geçmez", "arac/kabuk_nobetci.py", "7 ihlal → KAPI (bugün)"),
    ("şartnamede local_<uuid> yasağı", "arac/adres_nobetci.py", "6,5 saat kayıp mesaj"),
    ("ad çakışması — kimlikle gönder", "arac/defter.py cakisma", "7 ad çakışıyor"),
    ("durum tablosu elle yazılmaz", "arac/durum_tablosu.py", "3 kez bayatladı"),
    ("kademe sayısı elle yazılmaz", "arac/kademe.py", "%31,6 → %36,6"),
    ("koridor ölçümü elle yazılmaz", "arac/koridor_olc.py", "'hiçbiri ölçülmedi' idi"),
    ("BEKLEYENLER tablo olmalı, düz metin değil", "arac/uret_bekleyenler.py", "karar 0 → 7"),
    ("yükseklik dosyası TAM mı", "arac/yukseklik_indir.py", "kesik dosya yakalandı"),
    # 🟢 15 Ağustos'ta METİNDEN KAPIYA geçen ikisi — Emre'nin emriyle
    ("git add -A kullanılmaz", "arac/kabuk_nobetci.py", "ADD-HEPSI dalı"),
    ("hayalet devlet — devletin ömrünü kontrol et", "arac/denetle.py",
     "Değişmez 4: 140 hayalet + 966 künyesiz"),
    # ── HÂLÂ YALNIZ METİN — kapısı YOK ────────────────────────────────
    ("TDV slug tuzağı (4 cins)", None, "%19 çürüdü, 7 vaka"),
    ("kaynak: zorunlu, yoksa 'bulunamadı'", None, "§4 kırmızı çizgi"),
    ("tarih uydurma — YYYY-01-01", None, "serbedariler 21 ay"),
    ("öngörü ölçümden ÖNCE yazılır", None, "5 öngörü, biri çürüdü"),
    ("mazeret de önceden yazılır", None, "A1 tavanı vakası"),
    ("ölçtüğünü ve ÇIKARDIĞINI ayrı satıra yaz", None, "bir günde 6 vaka"),
    ("ölçmediğini 'ölçmedim' diye yaz", None, "4 satırın 2'si hatırlanmış"),
    ("commit yalnız kendi oturumlar/ dosyan", None, "paylaşılan index"),
    ("üretim koşarken girdi dosyaları donmuştur", None, "5 koşu çöpe gitti"),
    ("bir sınır kayması iki uçtan da ölçülür", None, "hayalet taraf değiştirdi"),
    ("çözülemedi'nin cinsi yazılır (tercih/yapı/sıra)", None, "20 → 7"),
]


def kapi_olc():
    var = [k for k in KAPILAR if k[1]]
    yok = [k for k in KAPILAR if not k[1]]
    print("=" * 74)
    print("KAPI ÖLÇÜMÜ — asıl soru: kaç kural KAPI, kaç tanesi HAFIZAYA emanet")
    print("=" * 74)
    print("\n🟢 KAPIYA DÖNÜŞMÜŞ — %d kural (metni okunmasa da yürürlükte)" % len(var))
    for ad, kapi, vaka in var:
        print("   %-44s %-26s %s" % (ad[:44], kapi, vaka[:26]))
    print("\n🔴 HÂLÂ YALNIZ METİN — %d kural (benim hafızama emanet)" % len(yok))
    for ad, _, vaka in yok:
        print("   %-44s %s" % (ad[:44], vaka[:34]))
    o = 100.0 * len(var) / len(KAPILAR)
    print("\n" + "=" * 74)
    print("KAPI ORANI: %d/%d = %%%.0f" % (len(var), len(KAPILAR), o))
    print("=" * 74)
    print("📌 Ve asıl bulgu ORAN DEĞİL, LİSTENİN İKİNCİ YARISI: yalnız metin")
    print("   olarak duran her kural, er geç çiğnenecek bir kuraldır.")
    print("   §11 bunu YEDİ KEZ kanıtladı ve ancak bugün kapıya dönüştü.")
    print("   ⇒ Sıradaki iş kural SİLMEK değil, kural KAPIYA ÇEVİRMEK.")
    return 0


if __name__ == "__main__":
    if "--kapi" in sys.argv[1:]:
        sys.exit(kapi_olc())
    sys.exit(olc("--ayrinti" in sys.argv[1:]))
