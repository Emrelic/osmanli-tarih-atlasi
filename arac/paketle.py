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
    py arac/paketle.py topla    paket-dışı küçük data betiklerini paketle (--kuru: yalnız planı göster)
    py arac/paketle.py sina     tazelik denetimi (çıkış 1 = BAYAT) — kapı bunu çağırır
    py arac/paketle.py durum    ne paketlenmiş, kaç istek kazanılmış
"""
import hashlib
import io
import json
import os
import re
import sys

# 🔴 Yalnız `reconfigure`u olan akış yapılandırılır. Bu modülü içe aktaran
# biri stdout'u `contextlib.redirect_stdout(io.StringIO())` ile yönlendirdiyse
# `StringIO`da `reconfigure` YOKTUR ⇒ içe aktarım AttributeError ile düşüyor,
# `_bagli_mi.index_dosyalari()` onu yutuyor ve katman evreni 13/184/2/1 yerine
# 0/22/0/0 çıkıyordu (DURUM-TABLOSU-YUTMA-1009 ölçtü).
if hasattr(sys.stdout, "reconfigure"):
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
# ---------------------------------------------------------------------------
# İNCELTME — yerleşim kaynaklarının YAYINA GİTMEYEN metin alanları pakete girmez
# ---------------------------------------------------------------------------
# 🟢 DENETIM-1111 HIZ (11 Kasım 2026) — ÖLÇÜLDÜ, tahmin değil:
#   açılışta inen 53,6 MB verinin 11,7 MB'ı yerleşim dosyaları; onların JSON
#   yükünün %78'i `kaynak` alanları (s.kaynak tek başına 6,73 MB) ve sitede
#   HİÇBİR KOD bu alanı okumuyor — canlı sitede 25.443 alana erişim sayacı
#   konup tarih atlama · şehir kartı · dönem tıklaması yapıldı: 0 erişim;
#   `grep` da okuyucu bulmadı. `ic_not*` ise proje kuralıyla okura GİTMEZ
#   (app.js `_icNotAyikla`). İkisi de yalnız denetim/motor içindir ve onlar
#   KAYNAK dosyayı okur (girdi.py, denetle.py) — paketi değil.
# ⇒ Kaynak dosyaya DOKUNULMAZ; yalnız paket gövdesine giden kopya inceltilir.
#   Künye sha'sı HAM kaynaktan alınmaya devam eder (tazelik sorusu değişmez);
#   `sina` gövdeyi `_govde_kur`dan kurduğu için aynı inceltmeyi görür.
# ⚠️ Ayrıştırılamayan / beklenmedik yapıdaki dosya OLDUĞU GİBİ paketlenir
#   (inceltme bir kazançtır, şart değil — bozuk gövde yayına gitmemeli).
# ⚠️ Bir gün sitede yerleşim `kaynak`ı gösterilecekse bu liste daraltılmalı
#   ya da kaynak metni ayrı, tembel bir dosyaya alınmalıdır.
# 🆕 12 Kasım 2026 — KRONOLOJİ dosyaları da inceltilir, ama YALNIZ `ic_not*`:
#   kronoloji `kaynak`ı tarayıcıda OKUNUR (js/kaynak_damga.js güvenilirlik damgası,
#   madde panelindeki "Kaynak:" satırı) ⇒ kronolojide kaynak KALIR. `ic_not*`
#   editoryal iç nottur; app.js `_icNotMu` ek okuma kartından ayıklıyor, arama.js
#   bilerek dışarıda bırakıyor — okura hiçbir yoldan gitmez (12 Kasım, js/ tarandı).
#   Ölçüldü: kronolojide ic_not* ~1,8 MB.
_INCELT_KURAL = (
    # (dosya deseni, atama adı deseni, atılacak alan sınaması, açıklama)
    (re.compile(r"^data/yerlesimler[\w\-.]*\.js$"),
     re.compile(r"^\s*window\.(YERLESIMLER[A-Za-z0-9_]*)\s*=", re.M),
     lambda a: a == "kaynak" or a == "ic_not" or a.startswith("ic_not_"),
     "kaynak · ic_not*"),
    (re.compile(r"^data/(olaylar|kronoloji)[\w\-.]*\.js$"),
     re.compile(r"^\s*window\.((?:OLAYLAR|KRONOLOJI)[A-Za-z0-9_]*)\s*=", re.M),
     lambda a: a == "ic_not" or a.startswith("ic_not_"),
     "ic_not*"),
)
_atilacak_mi = _INCELT_KURAL[0][2]           # geriye dönük ad


def _incelt_kayit(k, atilacak=None):
    atilacak = atilacak or _atilacak_mi
    if not isinstance(k, dict):
        return k
    c = {}
    for a, v in k.items():
        if atilacak(a):
            continue
        if isinstance(v, list) and v and all(isinstance(p, dict) for p in v):
            v = [{pa: pv for pa, pv in p.items() if not atilacak(pa)} for p in v]
        c[a] = v
    return c


def _incelt(yol, metin):
    """Yerleşim/kronoloji dosyasının paketteki inceltilmiş hâli; uymazsa `metin` aynen."""
    kural = next((k for k in _INCELT_KURAL if k[0].match(yol)), None)
    if not kural:
        return metin
    _d, atama, atilacak, aciklama = kural
    adlar = atama.findall(metin)
    if len(adlar) != 1 or len(re.findall(r"^\s*window\.", metin, re.M)) != 1:
        return metin
    try:
        import girdi                       # motorun okuyucusu — aynı katılık
        veri = girdi._cevir(metin, adlar[0])
        if not isinstance(veri, list):
            return metin
        # Atamanın ARDINDA kod kalmamalı (yalnız `;`, boşluk, yorum).
        kuyruk = metin[metin.rindex("]") + 1:]
        kuyruk = re.sub(r"//[^\n]*|/\*[\s\S]*?\*/|[;\s]", "", kuyruk)
        if kuyruk:
            return metin
        inc = [_incelt_kayit(k, atilacak) for k in veri]
        govde = json.dumps(inc, ensure_ascii=False, separators=(",", ":"))
        return ("// %s — paketle.py İNCELTTİ: %s alanları yayına "
                "gitmez (kaynak dosya değişmedi)\nwindow.%s = %s;\n"
                % (yol, aciklama, adlar[0], govde))
    except Exception:                      # noqa: BLE001 — inceltme şart değil
        return metin


def _govde_kur(no, kaynaklar):
    """Paketin gövdesini üret — TEK kaynak, hem yazma hem birebir denetim için.

    İki yerde ayrı ayrı kurulsaydı ikisi sessizce ayrışabilirdi; denetim de
    kendi yanlışını doğrulardı. Tek işlev olması bunun sigortasıdır.
    """
    parca = []
    for y in kaynaklar:
        parca.append("/* ==== %s ==== */\n" % y)
        parca.append(_incelt(y, _oku_ham(y).decode("utf-8", "replace")))
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
# TOPLA — paket-dışı küçük data betiklerini paketle (IDEMPOTENT)
# ---------------------------------------------------------------------------
# 🆕 13 Kasım 2026 (EMRELIC, P1 adım 1) — ÖLÇÜLDÜ, tahmin değil (f4b45bb0a):
#   index.html'de 261 yerel <script src>: 30 paket + 19 js/ + 212 PAKET-DIŞI data.
#   Paket-dışı 212'nin 193'ü <200 KB (toplam 7,6 MB). `kur` 29 Eylül'de bir kez
#   koştu; CLAUDE.md "yeni data/*.js → index.html'e <script> satırı" dediği için
#   sonradan gelen her dosya tek başına etiket oldu. Bu komut o birikimi eritir.
# KURALLAR (sıra = anlam — `kur`un `_plan` kuralının aynısı + daha katı):
#   · küme yalnız ardışık, ARASINDA YORUM/METİN OLMAYAN etiketlerden kurulur
#   · etiket BİREBİR `<script src="data/x.js[?v=…]"></script>` olmalı; defer /
#     async / type / crossorigin vb. HERHANGİ bir öznitelik → küme KAPANIR
#   · `?v=` damgası kümeyi BÖLMEZ: damga dosya içeriğinden türeyen bir önbellek
#     anahtarıdır, anlam taşımaz; paket kendi damgasını `surum_damgala`dan alır
#   · data/ dışı, dış URL, ≥ TEK_BASINA, diskte olmayan, index'te iki kez geçen
#     ya da zaten pakette olan dosya → küme KAPANIR (dokunulmaz)
#   · yalnız TEK dosyalık küme paket olmaz (kazanç yok) — ama önceki paketin
#     hemen ardından geliyorsa o PAKETE EKLENİR (istek sayısı düşer)
# IDEMPOTENS: ikinci koşuda paket-dışı küçük dosya kalmadığı için hiçbir şey
#   yapmaz; sonradan eklenen <script> satırları ya hemen önündeki pakete ya da
#   yeni bir pakete girer (çoğalma yok: paket sayısı yalnız yeni küme kadar artar).
SADE_ETIKET = re.compile(r'<script src="([^"?]+)(?:\?v=[^"]*)?"></script>')


def _kosu_uretimi_mi(yol, tamyol):
    """HAVVA'nın tam koşusunun (arac/uret_petek.py · kodla.py) her seferinde yeniden
    ürettiği dosya mı? Pakete girerse her koşuda paket değişir, önbellek kazancı
    yanar ve kapıda hep çatışır (CLAUDE.md: üretilen data/*.js yalnız HAVVA'nındır).
    Başlıktaki "Otomatik üretildi" ibaresi + bilinen ad desenleri. Emin olunamayan
    dosya PAKETLENMEZ (tek etiket olarak kalır — bir kazançtır, şart değildir)."""
    if re.match(r"^data/(donemler|donem_|devletler_harita|devlet_harita|devlet_parca"
                r"|bolge|petek|[\w\-]*_parca)", yol):
        return True
    try:
        with io.open(tamyol, "rb") as f:
            bas = f.read(600).decode("utf-8", "replace")
    except OSError:
        return True
    return "Otomatik üretildi" in bas


def _topla_kumeleri(html, kayitli):
    """[(bas, son, [yol…], onceki_paket_no|None)] — html'deki konum sırasıyla."""
    sayac = {}
    for m in ETIKET.finditer(html):
        y = m.group(1).split("?")[0]
        sayac[y] = sayac.get(y, 0) + 1
    kumeler, su = [], None
    son_bitis, son_paket = None, None       # bir önceki etiketin bitişi / paketi

    def kapat():
        nonlocal su
        if su and su["yollar"]:
            kumeler.append((su["bas"], su["son"], su["yollar"], su["onceki"]))
        su = None

    for m in ETIKET.finditer(html):
        tam = m.group(0)
        s = SADE_ETIKET.fullmatch(tam)
        y = m.group(1).split("?")[0]
        bosluk = (son_bitis is not None
                  and not html[son_bitis:m.start()].strip())
        ok = False
        if s and _yerel(y) and y.startswith("data/") and sayac.get(y) == 1 \
                and not y.startswith(PAKET_ONEK) and y not in kayitli:
            tamyol = os.path.join(KOK, y.replace("/", os.sep))
            ok = os.path.exists(tamyol) and os.path.getsize(tamyol) < TEK_BASINA
            if ok and _kosu_uretimi_mi(y, tamyol):
                ok = False
        if ok:
            if su is not None and not bosluk:
                kapat()
            if su is None:
                onceki = son_paket if (bosluk and son_paket) else None
                su = {"bas": m.start(), "son": m.end(), "yollar": [], "onceki": onceki}
            su["yollar"].append(y)
            su["son"] = m.end()
            son_paket = None
        else:
            kapat()
            # bu etiket sade bir paket etiketi mi (sonraki küme ona eklenebilir)?
            pm = re.fullmatch(r"data/paket_(\d+)\.js", y) if (s and _yerel(y)) else None
            son_paket = int(pm.group(1)) if pm else None
        son_bitis = m.end()
    kapat()
    return kumeler


def _topla_isle(kumeler, k):
    """Her küme için eylem listesi. -> [(bas, son, [(eylem, no, yollar)…], kalan_tek[…])]

    eylem 'ekle' : kümenin TAMAMI hemen önündeki pakete eklenir (sığıyorsa)
    eylem 'yeni' : ≥ 2 dosyalık parça yeni pakete girer
    kalan_tek    : paketlenmeyip index.html'de olduğu gibi kalan (tek) dosyalar
    """
    def boyut(y):
        return os.path.getsize(os.path.join(KOK, y.replace("/", os.sep)))

    paket_ad = {int(re.search(r"(\d+)\.js$", p["paket"]).group(1)): p
                for p in k["paketler"]}
    sonraki = max(paket_ad) + 1 if paket_ad else 1
    sonuc = []
    for bas, son, yollar, onceki in kumeler:
        yollar = list(yollar)
        eylemler, kalan = [], []
        if onceki in paket_ad:
            dolu = sum(boyut(x["yol"]) for x in paket_ad[onceki]["kaynak"])
            if dolu + sum(boyut(y) for y in yollar) <= TAVAN:
                sonuc.append((bas, son, [("ekle", onceki, yollar)], []))
                continue
        parca, top = [], 0
        for y in yollar + [None]:
            if y is None or (parca and top + boyut(y) > TAVAN):
                if len(parca) >= 2:
                    eylemler.append(("yeni", sonraki, parca))
                    sonraki += 1
                else:
                    kalan.extend(parca)
                parca, top = [], 0
            if y is not None:
                parca.append(y)
                top += boyut(y)
        if eylemler or kalan:
            sonuc.append((bas, son, eylemler, kalan))
    return sonuc


def topla():
    kuru = "--kuru" in sys.argv
    k = _kunye_oku()
    if not k:
        print("🔴 künye yok — önce: py arac/paketle.py kur")
        return 2
    html = io.open(INDEX, encoding="utf-8").read()
    kayitli = {x["yol"] for p in k["paketler"] for x in p["kaynak"]}
    onc = len(ETIKET.findall(html))
    isler = _topla_isle(_topla_kumeleri(html, kayitli), k)
    paketlenen = sum(len(y) for _, _, ey, _ in isler for _, _, y in ey)
    if not paketlenen:
        print("⚪ topla: paketlenecek paket-dışı küçük dosya yok (idempotent) — "
              "etiket %d" % onc)
        return 0
    n_ekle = sum(1 for _, _, ey, _ in isler for e in ey if e[0] == "ekle")
    n_yeni = sum(1 for _, _, ey, _ in isler for e in ey if e[0] == "yeni")
    print("topla%s: %d dosya paketlenecek · %d 'ekle' + %d yeni paket · "
          "tek bırakılan %d" % (" [KURU]" if kuru else "", paketlenen, n_ekle,
                                n_yeni, sum(len(t) for _, _, _, t in isler)))
    if kuru:
        for _, _, ey, tek in isler:
            for e, no, y in ey:
                print("  %-5s paket_%02d  %3d dosya  ilk=%s" % (e, no, len(y), y[0]))
        print("  index.html etiket %d → ~%d" % (onc, onc - paketlenen + n_yeni
              + sum(len(t) for _, _, _, t in isler) * 0))
        return 0

    damga = _damga(html)
    paket_ad = {int(re.search(r"(\d+)\.js$", p["paket"]).group(1)): p
                for p in k["paketler"]}
    yeni_html = html
    guncel = {}                                  # no -> tüm yollar ('ekle' paketleri)
    for bas, son, eylemler, tek in sorted(isler, key=lambda t: -t[0]):
        blok = []
        for e, no, yollar in eylemler:
            if e == "ekle":
                pk = paket_ad[no]
                tum = guncel.get(no) or [x["yol"] for x in pk["kaynak"]]
                tum = tum + yollar
                kayit = _paket_yaz(no, tum)
                pk["kaynak"], pk["bayt"] = kayit["kaynak"], kayit["bayt"]
                guncel[no] = tum
            else:
                kayit = _paket_yaz(no, yollar)
                k["paketler"].append(kayit)
                paket_ad[no] = kayit
                blok.append(_etiket_blogu_yeni(kayit, yollar, damga))
        for y in tek:                            # paketlenmeyen tek dosya: etiketi KALIR
            blok.append('<script src="%s"></script>' % y)
        sonra = son + 1 if yeni_html[son:son + 1] == "\n" else son
        yeni_html = (yeni_html[:bas] + "".join(b + "\n" for b in blok)
                     + yeni_html[sonra:])
    for no, tum in guncel.items():               # 'ekle': paketin yorum bloğunu tazele
        pk = paket_ad[no]
        i = yeni_html.find("<!-- ▼ %s" % pk["paket"])
        j = yeni_html.find("</script>", i) if i >= 0 else -1
        if i < 0 or j < 0:
            print("⚠️ %s'in etiket bloğu index.html'de bulunamadı — yorum eski kaldı"
                  % pk["paket"])
            continue
        yeni_html = (yeni_html[:i] + _etiket_blogu_yeni(pk, tum, damga)
                     + yeni_html[j + len("</script>"):])
    io.open(INDEX, "w", encoding="utf-8", newline="\n").write(yeni_html)
    _kunye_yaz(k["paketler"])
    son_say = len(ETIKET.findall(yeni_html))
    print("✓ topla: index.html %d etiket → %d (−%d) · %d dosya paketlendi"
          % (onc, son_say, onc - son_say, paketlenen))
    print("  tahmini kazanç: %.1f saniye (ölçülen 56,3 ms/istek — LAB canlıda doğrular)"
          % ((onc - son_say) * 0.0563))
    print("  🔴 ŞİMDİ: py arac/surum_damgala.py · py arac/paketle.py sina")
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
    if islem == "topla":
        sys.exit(topla())
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
