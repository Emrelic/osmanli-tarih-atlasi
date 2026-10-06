# -*- coding: utf-8 -*-
"""PAKETLE — index.html'in 279 <script src> etiketini bir avuca indirir.

NIÇIN (29 Eylül 2026, ölçüldü — tahmin değil):
    ilk ziyaret  LOAD ~24.500 ms · tekrar ziyaret 9.089 ms
    AĞDAN betik etiketi başına        56,3 ms
    ÖNBELLEKTEN betik etiketi başına   3,9 ms
    index.html'de <script src>          279
    ⇒ 279 × 56,3 ≈ 15.700 ms. Ve bu 279 dosyanın 263'ü 200 KB'ın ALTINDA,
      toplamı yalnız 8,69 MB. Yani ilk ziyaretin yükü BAYTLARDA DEĞİL,
      İSTEK SAYISINDA. Bant genişliği değil GECİKME ödüyoruz.
    Üç şüpheli sayıyla elendi: veri ayrıştırma 116,6 MB = 633 ms ·
    JSON.parse 4,2 kat YAVAŞ (çare değil) · geometri çözme 547 ms.

NASIL — ve niçin bu biçim GÜVENLİ:
    Paket, dosyaların **sırası bozulmadan** uç uca eklenmesidir. Ayrı ayrı
    yüklenen klasik betikler zaten aynı küresel kapsamda, aynı sırada koşar;
    uç uca eklemek anlamı DEĞİŞTİRMEZ. Bu yüzden "hangi dosya hangisinin
    globalini okuyor" sorusunu ölçmek GEREKMEZ — sıra korunduğu için
    bağımlılık kendiliğinden korunur.
    Ölçülen üç sınır durumu (29 Eylül):
      ① üst düzey `let`/`const` olan dosya: 0  ⇒ sözlük çakışması yok
      ② `(` ya da `[` ile BAŞLAYAN dosya: 0
      ③ `;` ya da `}` ile BİTMEYEN dosya: 10 — hepsi YORUM satırıyla bitiyor.
         🔴 Yorumla biten dosyanın ardına başka dosya eklenirse yorum sonraki
         dosyanın ilk satırını YUTAR. Bu yüzden araya HER ZAMAN "\\n;\\n"
         konur. Bu bir süs değil, tek gerçek sözdizimi tehlikesinin çaresi.

NEYE DOKUNULMAZ — gerekçeli:
    · js/*.js           ELLE YAZILAN KOD. app.js'i paketlemek, onu düzenleyen
                        oturum paketi yenilemeyi unutursa SESSİZCE eski kod
                        yayınlar. 8 istek = ~450 ms; o bedeli ödüyoruz.
    · >= 2 MB dosyalar  donemler.js her koşuda değişir, küçükler değişmez.
                        Birleştirseydik her koşuda 9 MB'ı boşa yeniden
                        indirtirdik — önbellek kazancını yakardık.
    · dış URL'ler       unpkg / jsdelivr

KÜNYE VE TAZELİK — asıl tehlike burada:
    Paket, kaynak dosyaların KOPYASIdır. Kaynak değişip paket yenilenmezse
    site SESSİZCE eski veriyi sunar — yavaş olmaktan KÖTÜDÜR. Bu yüzden
    `data/paket_kunye.json` her kaynağın sha256'sını tutar ve `sina` komutu
    bayatlığı yakalar. `denetle_yayin.py` bu komuta BAĞLIDIR.

KOMUTLAR
    py arac/paketle.py kur      ilk kurulum: paketleri yaz + index.html'i çevir
    py arac/paketle.py yenile   kaynak değiştiyse paketleri yeniden üret
    py arac/paketle.py sina     tazelik denetimi (çıkış 1 = BAYAT) — kapı bunu çağırır
    py arac/paketle.py durum    ne paketlenmiş, kaç istek kazanılmış
"""
import hashlib
import io
import json
import os
import re
import sys

sys.stdout.reconfigure(encoding="utf-8", errors="replace", line_buffering=True)

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
INDEX = os.path.join(KOK, "index.html")
KUNYE = os.path.join(KOK, "data", "paket_kunye.json")

TEK_BASINA = 2 * 1024 * 1024     # bu boyuttan büyük dosya tek başına kalır
TAVAN = 4 * 1024 * 1024          # bir paketin üst sınırı
PAKET_ONEK = "data/paket_"
AYIRAC = "\n;\n"                 # 🔴 yorumla biten dosyanın çaresi — silinmez

ETIKET = re.compile(r'<script[^>]*\ssrc\s*=\s*"([^"]+)"[^>]*>\s*</script>',
                    re.I)


def _duzle(b):
    """Satır sonlarını tekilleştir — CRLF ve CR, LF olur.

    🔴 NİÇİN ŞART (29 Eylül 2026, taze klon yanlış alarmı önlendi):
    depoda `core.autocrlf=true` ve `.gitattributes` YOK. Git, metin
    dosyalarını commit'te LF'e indirir, checkout'ta CRLF'e çıkarır. Yani
    ÇALIŞMA KOPYASINDAKİ baytlar makineden makineye değişir: bu makinede
    paket_01.js 1120 CRLF + 2055 yalın LF taşıyor (kaynakların kimi CRLF,
    kimi LF, ayracım LF). Taze bir klonda hepsi CRLF olur.
    Denetim ham bayta bakarsa, İÇERİK AYNIYKEN "paket bozuk" der ve yayını
    haksız yere durdurur. Sorulan soru "baytlar bit bit aynı mı" DEĞİL,
    "paket kaynakların içeriğini taşıyor mu"dur — satır sonu JavaScript'in
    anlamını değiştirmez. Bu yüzden iki taraf da düzlenip karşılaştırılır.
    """
    return b.replace(b"\r\n", b"\n").replace(b"\r", b"\n")


def _sha(b):
    return hashlib.sha256(_duzle(b)).hexdigest()[:16]


def _oku_ham(yol):
    with io.open(os.path.join(KOK, yol.replace("/", os.sep)), "rb") as f:
        return f.read()


def _yerel(yol):
    return not yol.startswith(("http://", "https://", "//", "data:"))


# ---------------------------------------------------------------------------
# PLAN — index.html'in etiket SIRASINDAN paket kümelerini çıkar
# ---------------------------------------------------------------------------
def _plan(html):
    """[(tur, [yol...])] — tur: 'paket' ya da 'tek'. Sıra ASLA bozulmaz.

    🔴 Küme yalnız etiketler ARALARINDA BOŞLUKTAN BAŞKA BİR ŞEY YOKKEN büyür.
    index.html'de etiketlerin arasına gerekçe yorumları yazılmıştır (ör. dünkü
    kayıpsız kodlama bloğu); iki etiketi tek etikete indirirken aradaki metin
    de siliniyor olurdu. Yorum bir süs değil, o satırın NİÇİN orada olduğunun
    tek kaydıdır — bu yüzden araya yorum giren yerde küme KAPANIR.
    """
    eslesme = list(ETIKET.finditer(html))
    yollar = [(m.group(1).split("?")[0], m.start(), m.end()) for m in eslesme]
    plan, su = [], None
    onceki_son = None

    def kapat():
        nonlocal su
        if su:
            plan.append(("paket", su) if len(su) > 1 else ("tek", su))
            su = None

    for y, bas, son in yollar:
        # aradaki metin boşluktan başka bir şeyse küme kapanır
        if onceki_son is not None and html[onceki_son:bas].strip():
            kapat()
        onceki_son = son
        if y.startswith(PAKET_ONEK):
            # zaten paketlenmiş bir index.html — `kur` bunu reddeder
            kapat()
            plan.append(("zaten-paket", [y]))
            continue
        tam = os.path.join(KOK, y.replace("/", os.sep))
        b = os.path.getsize(tam) if (_yerel(y) and os.path.exists(tam)) else 0
        # data/ dışına ve büyüklere dokunulmaz (dosya başı gerekçe yukarıda)
        if (not _yerel(y)) or (not y.startswith("data/")) or b >= TEK_BASINA:
            kapat()
            plan.append(("tek", [y]))
            continue
        if su is None or sum(
                os.path.getsize(os.path.join(KOK, s.replace("/", os.sep)))
                for s in su) + b > TAVAN:
            kapat()
            su = []
        su.append(y)
    kapat()
    return plan


# ---------------------------------------------------------------------------
# PAKET YAZ
# ---------------------------------------------------------------------------
def _govde_kur(no, kaynaklar):
    """Paketin gövdesini üret — TEK kaynak, hem yazma hem birebir denetim için.

    İki yerde ayrı ayrı kurulsaydı ikisi sessizce ayrışabilirdi; denetim de
    kendi yanlışını doğrulardı. Tek işlev olması bunun sigortasıdır.
    """
    parca = []
    for y in kaynaklar:
        parca.append("/* ==== %s ==== */\n" % y)
        parca.append(_oku_ham(y).decode("utf-8", "replace"))
        parca.append(AYIRAC)
    return ("/* PAKET %02d — arac/paketle.py ile ÜRETİLDİ, ELLE DÜZENLENMEZ.\n"
            "   %d kaynak dosya, sırası index.html'deki sıradır.\n"
            "   Kaynağı değiştirdiysen: py arac/paketle.py yenile\n"
            "   Tazelik kapıda sınanır: py arac/paketle.py sina */\n"
            % (no, len(kaynaklar))) + "".join(parca)


def _paket_yaz(no, kaynaklar):
    """Paketi diske yaz, künye kaydını döndür."""
    # 🔴 "bayt" da sha gibi DÜZLENMİŞ içerikten (`_duzle`) sayılır (6 Ekim 2026):
    # ham boyut core.autocrlf=true makinede CRLF'li sayılıyordu ⇒ içerik aynıyken
    # künyede 222 satır makineden makineye oynuyordu. Künye makineden bağımsızdır.
    kayit = [{"yol": y, "sha": _sha(_oku_ham(y)),
              "bayt": len(_duzle(_oku_ham(y)))} for y in kaynaklar]
    govde = _govde_kur(no, kaynaklar)
    ad = "%s%02d.js" % (PAKET_ONEK, no)
    with io.open(os.path.join(KOK, ad.replace("/", os.sep)), "w",
                 encoding="utf-8", newline="\n") as f:
        f.write(govde)
    return {"paket": ad, "kaynak": kayit,
            "bayt": len(_duzle(govde.encode("utf-8")))}


# ---------------------------------------------------------------------------
# KUR — ilk dönüşüm
# ---------------------------------------------------------------------------
def kur():
    html = io.open(INDEX, encoding="utf-8").read()
    plan = _plan(html)
    if any(t == "zaten-paket" for t, _ in plan):
        print("🔴 index.html ZATEN paketli. Yeniden kurmak için önce geri al.")
        print("   Kaynak değiştiyse: py arac/paketle.py yenile")
        return 2

    paketler, no = [], 0
    for tur, yollar in plan:
        if tur != "paket":
            continue
        no += 1
        paketler.append(_paket_yaz(no, yollar))

    # index.html'i çevir: her kümenin etiketlerini TEK etiketle değiştir
    damga = _damga(html)
    yeni = html
    for tur, yollar in plan:
        if tur != "paket":
            continue
        pk = next(p for p in paketler
                  if [k["yol"] for k in p["kaynak"]] == yollar)
        blok_eski = _etiket_blogu(yeni, yollar)
        if blok_eski is None:
            print("🔴 %s kümesinin etiket bloğu index.html'de bulunamadı — DURDUM"
                  % yollar[0])
            return 3
        yeni = yeni.replace(blok_eski, _etiket_blogu_yeni(pk, yollar, damga), 1)

    io.open(INDEX, "w", encoding="utf-8", newline="\n").write(yeni)
    _kunye_yaz(paketler)

    onc = len(ETIKET.findall(html))
    son = len(ETIKET.findall(yeni))
    print("✓ %d paket yazıldı · index.html %d etiket → %d etiket (−%d)"
          % (len(paketler), onc, son, onc - son))
    print("  tahmini kazanç: %.1f saniye (ölçülen 56,3 ms/istek)"
          % ((onc - son) * 0.0563))
    print("  künye: data/paket_kunye.json")
    return 0


def _damga(html):
    n = [int(m) for m in re.findall(r"\?v=r(\d+)", html)]
    return max(n) if n else 1


def _etiket_blogu(html, yollar):
    """Kümenin etiketlerinin index.html'deki BİREBİR metni (aradaki boşlukla)."""
    i = html.find('src="%s' % yollar[0])
    if i < 0:
        return None
    bas = html.rfind("<script", 0, i)
    j = html.find('src="%s' % yollar[-1])
    if j < 0:
        return None
    son = html.find("</script>", j)
    if bas < 0 or son < 0 or son < bas:
        return None
    return html[bas:son + len("</script>")]


def _etiket_blogu_yeni(pk, yollar, damga):
    ic = "\n".join("       %s" % y for y in yollar)
    return ('<!-- ▼ %s — aşağıdaki %d dosya buraya PAKETLENDİ (arac/paketle.py).\n'
            '     Sıra korunmuştur; uç uca ekleme klasik betiklerin anlamını\n'
            '     değiştirmez. Kaynak değişirse: py arac/paketle.py yenile\n'
            '     (tazeliği yayın kapısı sınar). İçindekiler:\n'
            '%s -->\n'
            '<script src="%s?v=r%d"></script>'
            % (pk["paket"], len(yollar), ic, pk["paket"], damga))


def _kunye_yaz(paketler):
    with io.open(KUNYE, "w", encoding="utf-8", newline="\n") as f:
        json.dump({"surum": 1, "paketler": paketler}, f,
                  ensure_ascii=False, indent=1)


def _kunye_oku():
    if not os.path.exists(KUNYE):
        return None
    return json.load(io.open(KUNYE, encoding="utf-8"))


# ---------------------------------------------------------------------------
# YENILE — kaynak değiştiyse paketleri yeniden üret
# ---------------------------------------------------------------------------
def yenile():
    k = _kunye_oku()
    if not k:
        print("🔴 künye yok — önce: py arac/paketle.py kur")
        return 2
    degisen = 0
    for p in k["paketler"]:
        no = int(re.search(r"(\d+)\.js$", p["paket"]).group(1))
        eski = {x["yol"]: x["sha"] for x in p["kaynak"]}
        yeni = _paket_yaz(no, [x["yol"] for x in p["kaynak"]])
        fark = [x["yol"] for x in yeni["kaynak"] if eski.get(x["yol"]) != x["sha"]]
        if fark:
            degisen += len(fark)
            print("  %s — %d kaynak değişmiş: %s"
                  % (p["paket"], len(fark), ", ".join(fark[:4])))
        p["kaynak"] = yeni["kaynak"]
        p["bayt"] = yeni["bayt"]
    _kunye_yaz(k["paketler"])
    print("✓ %d paket yeniden üretildi · değişen kaynak: %d"
          % (len(k["paketler"]), degisen))
    return 0


# ---------------------------------------------------------------------------
# EKLE — yeni kaynak dosyayı MEVCUT bir pakete kat
# ---------------------------------------------------------------------------
def ekle():
    """py arac/paketle.py ekle <paket_no> <dosya> [<dosya> ...]

    🔴 NİÇİN AYRI BİR KOMUT: `kur` zaten paketli index.html'i REDDEDER
    (ve etmeli — yeniden kurmak paket numaralarını kaydırır), `yenile` ise
    yalnız künyede YAZILI kaynakları tazeler. Yeni bir dosyanın pakete
    girmesi için üçüncü bir yol gerekiyordu; yoktu ve 30 Eylül 2026'da
    12 kronoloji dosyası (419 madde) tam bu boşlukta kaldı.

    Yaptığı üç şey, sırayla:
      ① künyedeki paketin kaynak listesinin SONUNA ekler (sıra = anlam)
      ② paketi yeniden üretir (_paket_yaz — tek gövde kaynağı)
      ③ index.html'deki etiket bloğunun İÇİNDEKİLER yorumunu yeniler
    ⚠️ index.html'e YENİ <script> EKLEMEZ — dosya pakete girer, istek sayısı
    ARTMAZ. Zaten künyede olan dosya sessizce atlanır (mükerrer olmaz).
    """
    if len(sys.argv) < 4:
        print(ekle.__doc__)
        return 2
    try:
        no = int(sys.argv[2])
    except ValueError:
        print("🔴 ilk argüman paket NUMARASI olmalı (ör. 30)")
        return 2
    yeniler = [y.replace("\\", "/") for y in sys.argv[3:]]

    k = _kunye_oku()
    if not k:
        print("🔴 künye yok — önce: py arac/paketle.py kur")
        return 2
    ad = "%s%02d.js" % (PAKET_ONEK, no)
    pk = next((p for p in k["paketler"] if p["paket"] == ad), None)
    if pk is None:
        print("🔴 %s künyede YOK. Mevcut paketler: %s"
              % (ad, ", ".join(p["paket"] for p in k["paketler"])))
        return 2

    var = [x["yol"] for x in pk["kaynak"]]
    # BAŞKA bir pakette duruyor mu — iki pakete girerse ad alanı iki kez yüklenir
    for p in k["paketler"]:
        if p["paket"] == ad:
            continue
        for y in yeniler:
            if y in [x["yol"] for x in p["kaynak"]]:
                print("🔴 %s ZATEN %s içinde — iki pakete giremez. DURDUM."
                      % (y, p["paket"]))
                return 3
    katilan, atlanan = [], []
    for y in yeniler:
        if y in var:
            atlanan.append(y)
            continue
        if not os.path.exists(os.path.join(KOK, y.replace("/", os.sep))):
            print("🔴 %s diskte YOK. DURDUM (yarım paket yazmam)." % y)
            return 3
        katilan.append(y)
    if not katilan:
        print("⚪ eklenecek yeni dosya yok (zaten künyede: %d)" % len(atlanan))
        return 0

    yollar = var + katilan
    yeni_kayit = _paket_yaz(no, yollar)
    pk["kaynak"] = yeni_kayit["kaynak"]
    pk["bayt"] = yeni_kayit["bayt"]
    _kunye_yaz(k["paketler"])

    # index.html'deki etiket bloğu: <!-- ▼ <paket> … --> + <script …></script>
    html = io.open(INDEX, encoding="utf-8").read()
    i = html.find("<!-- ▼ %s" % ad)
    if i < 0:
        print("⚠️ %s'in etiket bloğu index.html'de BULUNAMADI — paket ve künye"
              " yazıldı, yorum listesi ESKİ kaldı. Elle bak." % ad)
        return 1
    j = html.find("</script>", i)
    if j < 0:
        print("⚠️ etiket bloğunun </script>'i bulunamadı — yorum yenilenmedi.")
        return 1
    eski_blok = html[i:j + len("</script>")]
    damga = _damga(html)
    html = html.replace(eski_blok, _etiket_blogu_yeni(pk, yollar, damga), 1)
    io.open(INDEX, "w", encoding="utf-8", newline="\n").write(html)

    print("✓ %s: %d → %d kaynak · %d bayt" % (ad, len(var), len(yollar),
                                              pk["bayt"]))
    for y in katilan:
        print("   + %s" % y)
    if atlanan:
        print("   ⚪ zaten vardı: %s" % ", ".join(atlanan))
    print("  index.html etiket sayısı DEĞİŞMEDİ (dosyalar pakete girdi)")
    print("  🔴 ŞİMDİ: py arac/paketle.py sina · py arac/surum_damgala.py")
    return 0


# ---------------------------------------------------------------------------
# SINA — kapının çağırdığı tazelik denetimi
# ---------------------------------------------------------------------------
def sina():
    k = _kunye_oku()
    if not k:
        print("paketleme KURULMAMIŞ (künye yok) — denetim atlanıyor")
        return 0
    bayat, yok, eksik, ihlal = [], [], [], []
    for p in k["paketler"]:
        pyol = os.path.join(KOK, p["paket"].replace("/", os.sep))
        if not os.path.exists(pyol):
            eksik.append(p["paket"])
            continue
        for x in p["kaynak"]:
            tam = os.path.join(KOK, x["yol"].replace("/", os.sep))
            if not os.path.exists(tam):
                yok.append(x["yol"])
                continue
            if _sha(_oku_ham(x["yol"])) != x["sha"]:
                bayat.append(x["yol"])
        # 🔴 BİREBİR DENETİM — künye "kaynak değişmemiş" diyebilir ama paket
        # yine de yanlış olabilir (elle düzenlenmiş, yarım yazılmış, farklı
        # sıra). Bu yüzden paketi bellekte YENİDEN KURUP diskteki ile
        # karşılaştırıyoruz. Künye sha'sı kaynağı denetler; bu, PAKETİ denetler.
        beklenen = _govde_kur(int(re.search(r"(\d+)\.js$", p["paket"]).group(1)),
                              [x["yol"] for x in p["kaynak"]])
        # 🔴 İki taraf da DÜZLENİR (bkz. _duzle). newline="" ile ham okunur,
        # sonra satır sonları tekilleştirilir. 29 Eylül'de önce ham bayt
        # karşılaştırdım: 29 paketin 24'ü "uyuşmuyor" dedi ve kusur pakette
        # DEĞİL, karşılaştırmadaydı.
        gercek = io.open(pyol, "rb").read()
        if _duzle(beklenen.encode("utf-8")) != _duzle(gercek):
            ihlal.append(p["paket"])
    # index.html paketleri gerçekten yüklüyor mu
    html = io.open(INDEX, encoding="utf-8").read()
    yuklu = {y.split("?")[0] for y in ETIKET.findall(html)}
    baglanmamis = [p["paket"] for p in k["paketler"] if p["paket"] not in yuklu]

    if bayat:
        print("✗  PAKET BAYAT — %d kaynak değişmiş, paket yenilenmemiş:" % len(bayat))
        for y in bayat[:12]:
            print("     " + y)
        if len(bayat) > 12:
            print("     ... +%d" % (len(bayat) - 12))
        print("   ÇARE: py arac/paketle.py yenile")
    if eksik:
        print("✗  PAKET DOSYASI YOK: " + ", ".join(eksik))
    if yok:
        print("✗  künyedeki kaynak diskte YOK: " + ", ".join(yok[:8]))
    if ihlal:
        print("✗  PAKET İÇERİĞİ KAYNAKLA UYUŞMUYOR (birebir denetim): "
              + ", ".join(ihlal))
        print("   ÇARE: py arac/paketle.py yenile")
    if baglanmamis:
        print("✗  paket index.html'e BAĞLANMAMIŞ: " + ", ".join(baglanmamis))
    if not (bayat or eksik or yok or baglanmamis or ihlal):
        n = sum(len(p["kaynak"]) for p in k["paketler"])
        print("✓  paketleme TAZE — %d paket, %d kaynak, hepsi birebir"
              % (len(k["paketler"]), n))
        return 0
    return 1


def durum():
    k = _kunye_oku()
    if not k:
        print("paketleme kurulmamış")
        return 0
    html = io.open(INDEX, encoding="utf-8").read()
    n = sum(len(p["kaynak"]) for p in k["paketler"])
    print("paket %d · içindeki kaynak %d · index.html etiketi %d"
          % (len(k["paketler"]), n, len(ETIKET.findall(html))))
    for p in k["paketler"]:
        print("  %-22s %3d kaynak  %7.2f MB"
              % (p["paket"], len(p["kaynak"]), p["bayt"] / 1048576))
    return 0


def kaynaklar():
    """Kapının 'bu dosya yetim değil' demesi için: paketlerin içindekiler."""
    k = _kunye_oku()
    if not k:
        return []
    return [x["yol"] for p in k["paketler"] for x in p["kaynak"]]


if __name__ == "__main__":
    islem = sys.argv[1] if len(sys.argv) > 1 else "durum"
    if islem == "kur":
        sys.exit(kur())
    if islem == "yenile":
        sys.exit(yenile())
    if islem == "ekle":
        sys.exit(ekle())
    if islem == "sina":
        sys.exit(sina())
    if islem == "durum":
        sys.exit(durum())
    if islem == "kaynaklar":
        for y in kaynaklar():
            print(y)
        sys.exit(0)
    print(__doc__)
    sys.exit(2)
