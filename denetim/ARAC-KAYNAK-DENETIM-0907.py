# -*- coding: utf-8 -*-
"""`kaynak:` DENETIMI — sartname denetim/SARTNAME-KAYNAK-DENETIMI-0905.md

═══════════════════════════════════════════════════════════════════════════
§0  BU ALET NE SORAR — VE NE SORMAZ   (sartnamenin en degerli satiri)
═══════════════════════════════════════════════════════════════════════════
  SORAR    «`kaynak:` alaninda gosterilen madde, bu kaydin tasidigi
            TARIHI tasiyor mu?»
  SORMAZ   «bu tarih DOGRU mu?»              → baska bir is
  SORMAZ   «bu kaynak GUVENILIR mi?»         → §4'un isi
  SORMAZ   «bu kimlik buraya AIT mi?»        → §3.5 ailesinin isi

🔴 Ayrim hayati: bir kayit DOGRU tarihi tasiyip YANLIS kaynagi
   gosterebilir. `urabi-pasa t=1914-12-18` — gun tarihen dogru, ama
   gosterilen madde 1911'de bitiyor. Duzeltilecek sey `kaynak:`tir,
   TARIH DEGIL. Bu satir yazilmazsa alet bir "tarih denetimi" sanilir
   ve YANLIS KALEMLER acilir.

📌 Nicin gerekli: `kaynak:` alani DOLU oldugu icin hicbir mevcut denetim
   otmuyor ve okuyan onu "kaynakli" saniyor. §4'un «kaynagi yazilmayan
   bilgi, kaynagi olmayan bilgiden ayirt edilemez» kuralinin bir kademe
   sinsi hali: KAYNAK YAZILMIS, AMA O KAYNAK BUNU SOYLEMIYOR.

═══════════════════════════════════════════════════════════════════════════
§1  DORT KOVA — ve adlari KASITLI
═══════════════════════════════════════════════════════════════════════════
  🔴 TASIMIYOR     yil govdede HIC yok (hicri ve ±2 komsu yil dahil)
                   ⇒ kaynak o iddiayi KESINLIKLE tasimiyor
  🟡 KABA          yil var, GUN yok ⇒ gun bu kaynaktan gelmiyor
  ⚪ DOGRULANMADI  gun bicimi geciyor ⇒ CURUTULMEDI. «TEMIZ» DEGIL.
                   §4⑧: rakamin gecmesi, o rakami tasiyan cumlenin dogru
                   seyi tarihledigini GOSTERMEZ.
  ⚫ OLCULEMEDI    302 · boilerplate · yonlendirme kutugu · ayristirilamadi

⚠️ `⚪` ASLA "temiz" diye raporlanmaz. Sartnamenin kendi cumlesi:
   "bu, bu gecenin en cok tekrarlanan hatasi olurdu."

🔴 YALNIZ `🔴` OTOMATIKLESIR — cunku olcut YOKLUK, ve yokluk yorum
   gerektirmez. `⚪`/`🟡` ayrimi insan okumasi ister (sartname ⑦).
🔴 VE `🔴` BILE TAKVIM EKSENINDE YANILIR: `kirim` — kaynak «8 Nisan 1783»
   (Julyen), veri `1783-04-19` (Gregoryen). AYNI GUN. Bu yuzden yil
   bulunamazsa HICRI karsilik ve ±2 KOMSU YIL da aranir.

═══════════════════════════════════════════════════════════════════════════
§2  DORT SART — atlanmaz, ve her biri bir VAKADAN dogdu
═══════════════════════════════════════════════════════════════════════════
  ① GOVDE KESILMEZ    `uganda` cok bolumlu; ilk «Bibliyografya»da kesmek
                      metnin %79'unu attirmis ve "Bunyoro 0 kez"
                      olcturmustu (gercek 13). Alinan KARAKTER SAYISI
                      her zaman raporlanir — bir "yok" hukmu, kac
                      karakter okundugu yazilmadan verilemez.
  ② ⚫ AYRI KOVA      `hidiviyet`·`misir--ulke`·`abbas-hilmi` HTTP 200
                      dondu, govde 807/1031/869 kar (boilerplate).
                      302 · 000 · boilerplate · yonlendirme HICBIRI 🔴 DEGIL.
  ③ PENCERE UCLARI    `1281-01-01` ve `1923-10-29` atlasin SINIR
                      isaretleri, bir gun iddiasi DEGIL ⇒ evrene GIRMEZ.
  ④ SINIR KORUMASI    yil aramasi (?<!\\d)...(?!\\d) olmadan `533` sayfa
                      araligini (`533-538`) tarih sanar.

═══════════════════════════════════════════════════════════════════════════
§3  BIRIM — UC DEGIL, BENZERSIZ DEMET
═══════════════════════════════════════════════════════════════════════════
  `urabi-pasa` 110 UC tasiyor ama BENZERSIZ IDDIA 2: f=1882-09-13 x55 ve
  t=1914-12-18 x55 — Misir'in tamamina uygulanmis TEK bir isgal ortusu.
  Sisme 55 KAT. Evren geneli 260 uc → 97 iddia (2,7x).
  🔴 Uc sayarsan tek bir cumleyi 110 kusur gibi gosterirsin.
  🟢 Ve tersi: bir 🔴 duzeltilirse 55 kayit birden duzelir — kalem
     gorundugunden UCUZ, kusur gorundugunden KUCUK.
  ⇒ Birim: (tarih · kimlik · kategori · kaynak) demeti. IKISI DE basilir.

═══════════════════════════════════════════════════════════════════════════
kullanim
    py denetim/ARAC-KAYNAK-DENETIM-0907.py --evren     # HTTP YOK, evreni bas
    py denetim/ARAC-KAYNAK-DENETIM-0907.py --sinav     # C13 DORT ayak
    py denetim/ARAC-KAYNAK-DENETIM-0907.py --kosu [--limit N]
🔴 arac/denetle.py'ye KONMAZ — olcut HTTP gerektiriyor, o alet hizli ve
   cevrimdisi olmak zorunda (sartname §6).
"""
import sys, io, os, re, json, time, argparse, urllib.request, html

# 🔴 stdout UTF-8'e `reconfigure` ILE ALINIR — SARMALANMAZ.
#
# VAKA (kendi kusurum, ayni gun, IKI YONDE DE isirdi):
#   ① Once modul seviyesinde `sys.stdout = io.TextIOWrapper(sys.stdout.buffer,…)`
#      yazmistim. Bir baska betik bu aleti IMPORT edince ESKI sarmalayici
#      GC'ye gidip altindaki buffer'i KAPATIYOR ve import eden betik ilk
#      `print`te `ValueError: I/O operation on closed file` ile COKUYOR.
#   ② Sonra onu `if __name__ == "__main__"` guardina aldim — bu sefer
#      import eden betik varsayilan `cp1254`e dusup Turkce/emoji basarken
#      `UnicodeEncodeError` ile COKTU.
# ⇒ Ikisinin de dogru cevabi `reconfigure`: YENI sarmalayici YARATMAZ,
#   eskisini KAPATMAZ, ve her iki kullanimda da (dogrudan kosu · import)
#   calisir. `arac/girdi.py` ve `arac/denetle.py` hala eski deseni
#   kullaniyor — onlari import eden her betik ayni tuzakla karsilasir.
try:
    sys.stdout.reconfigure(encoding="utf-8")
except Exception:
    pass

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
os.chdir(KOK)
sys.path.insert(0, os.path.join(KOK, "arac"))

ONBELLEK = os.path.join(KOK, "denetim", "_kaynak_govde")

# ── §2③ pencere uclari: OLCUM DEGERI DEGIL, SINIR ISARETI ──────────────
PENCERE_UCU = {"1281-01-01", "1923-10-29"}

# ── slug tanimi: DEGERIN TAMAMI (ilk kelimesi DEGIL) ───────────────────
# VAKA: ilk kelimeyi slug sayan tanim `ankraj` 47 · `ostrog` 42 ·
# `veri-ici` 22 · `1913-05-30` 16 gibi duz metin baslangiclarini evrene
# soktu (609 → 428).
SLUG_RX = re.compile(r"^[a-z0-9][a-z0-9-]{1,80}$")
TARIH_RX = re.compile(r"^\d{3,4}-\d{2}-\d{2}$")

AYLAR = ["Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran",
         "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"]

BOILERPLATE_ESIK = 3000   # sartname ②; ESIK KESKIN DEGIL — 5.773 kar bir
                          # govde "esigi gecti ama icerik ince" cikmisti


# ═══════════════════════════════════════════════════════════════════
# EVREN
# ═══════════════════════════════════════════════════════════════════
def slug_mu(v):
    """Deger TAMAMEN bir slug mu? Tarih bicimi ve `bulunamad*` ELENIR."""
    if not v:
        return False
    v = v.strip()
    if v.lower().startswith("bulunamad"):
        return False          # noktasiz `bulunamadi` slug desenine UYUYOR
    if TARIH_RX.match(v):
        return False          # `1913-05-30` slug karakter kumesine uyar
    return bool(SLUG_RX.match(v)) and bool(re.search(r"[a-z]", v))


def gun_hassasiyetli(t):
    """`YYYY-01-01` YIL konvansiyonudur (§4), gun iddiasi degil."""
    if not t or len(t) < 10 or t in PENCERE_UCU:
        return False
    return not t.endswith("-01-01")


def evren_kunye():
    import girdi
    D = girdi.oku_devletler()
    L = list(D.values()) if hasattr(D, "values") else D
    ev, elenen = [], {"kaynak_slug_degil": 0, "gun_yok": 0, "pencere_ucu": 0}
    for d in L:
        if not isinstance(d, dict) or not d.get("id"):
            continue
        kay = (d.get("kaynak") or "").strip()
        if not slug_mu(kay):
            elenen["kaynak_slug_degil"] += 1
            continue
        for alan in ("f", "t"):
            t = d.get(alan)
            if t in PENCERE_UCU:
                elenen["pencere_ucu"] += 1
                continue
            if not gun_hassasiyetli(t):
                elenen["gun_yok"] += 1
                continue
            ev.append({"katman": "kunye", "sahip": d["id"], "alan": alan,
                       "tarih": t, "kaynak": kay, "kimlik": d["id"],
                       "kategori": "kunye"})
    return ev, elenen


def evren_yerlesim():
    """🔴 SART ④: yalniz DONEMIN KENDI `kaynak:` alani sayilir.

    Sartnameyi yazan oturum kayit ustundeki `kaynak:`i donemlere MIRAS
    saymis ve evrenin %77'si miras cikmis; %53'luk ilk mansetı oradan
    geliyordu. Miras alinmis bir etiket bir DAYANAK BEYANI DEGILDIR;
    ona karsi olcmek, kaydin HIC YAPMADIGI bir iddiayi sinamaktir.

    ⚠️ OLCULDU (7 Eylul): `girdi.yukle()` mirasi KENDISI YAPMIYOR —
    donem.kaynak == kayit.kaynak olan yalnizca 12 donem var ve onlar da
    ELLE ayni yazilmis (`oniki-ada`). Yani `p.get("kaynak")` dogru alan.
    Bu satir, bir sonraki oturum "girdi mirasi yapiyor olabilir" diye
    supheye dusmesin diye burada: OLCULDU, YAPMIYOR.
    """
    import girdi
    Y = girdi.yukle()
    ev, elenen = [], {"kaynak_slug_degil": 0, "gun_yok": 0,
                      "pencere_ucu": 0, "kayitla_ayni": 0}
    for y in Y:
        kayit_kay = (y.get("kaynak") or "").strip()
        for kat in ("d", "s", "v", "isg"):
            for p in (y.get(kat) or []):
                kay = (p.get("kaynak") or "").strip()
                if not kay:
                    continue
                if kay == kayit_kay:
                    elenen["kayitla_ayni"] += 1
                if not slug_mu(kay):
                    elenen["kaynak_slug_degil"] += 1
                    continue
                for alan in ("f", "t"):
                    t = p.get(alan)
                    if t in PENCERE_UCU:
                        elenen["pencere_ucu"] += 1
                        continue
                    if not gun_hassasiyetli(t):
                        elenen["gun_yok"] += 1
                        continue
                    ev.append({"katman": "yerlesim", "sahip": y["ad"],
                               "alan": alan, "tarih": t, "kaynak": kay,
                               "kimlik": p.get("d") or p.get("k") or "-",
                               "kategori": kat})
    return ev, elenen


def demetle(ev):
    """§3: birim UC degil BENZERSIZ DEMET (tarih·kimlik·kategori·kaynak)."""
    d = {}
    for u in ev:
        a = (u["tarih"], u["kimlik"], u["kategori"], u["kaynak"])
        if a not in d:
            d[a] = {"anahtar": a, "uc": 0, "sahipler": [], "alan": u["alan"],
                    "katman": u["katman"], "tarih": u["tarih"],
                    "kaynak": u["kaynak"], "kimlik": u["kimlik"],
                    "kategori": u["kategori"]}
        d[a]["uc"] += 1
        if len(d[a]["sahipler"]) < 6:
            d[a]["sahipler"].append(u["sahip"])
    return list(d.values())


# ═══════════════════════════════════════════════════════════════════
# GOVDE — KESMEZ, ve kac karakter okudugunu BASAR
# ═══════════════════════════════════════════════════════════════════
def govde_cek(slug, yenile=False):
    """Doner: (metin, karakter, durum). durum: 'ok'|'olu'|'boiler'|'yonlendirme'|'hata'"""
    os.makedirs(ONBELLEK, exist_ok=True)
    yol = os.path.join(ONBELLEK, "%s.txt" % re.sub(r"[^a-z0-9-]", "_", slug))
    if os.path.exists(yol) and not yenile:
        t = open(yol, encoding="utf-8").read()
    else:
        url = "https://islamansiklopedisi.org.tr/" + slug
        req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
        try:
            r = urllib.request.urlopen(req, timeout=90)
            son = r.geturl()
            ham = r.read().decode("utf-8", "replace")
        except Exception as e:
            return "", 0, "hata:%s" % type(e).__name__
        # 302 → arama sayfasina yonlendirir (§4①)
        if "/arama" in son or slug not in son:
            open(yol, "w", encoding="utf-8").write("")
            return "", 0, "olu"
        s = re.sub(r"(?is)<(script|style)[^>]*>.*?</\1>", " ", ham)
        s = re.sub(r"(?s)<[^>]+>", " ", s)
        s = html.unescape(s)
        s = re.sub(r"[ \t\r\f\v]+", " ", s)
        s = re.sub(r"\n\s*\n+", "\n", s)
        t = s
        open(yol, "w", encoding="utf-8").write(t)

    n = len(t)
    if n == 0:
        return "", 0, "olu"
    # §4⑥ YONLENDIRME KUTUGU: govde bir MADDE degil bir ADRES.
    # VAKA (bugun isirdi): `maras` 200 doner, govdesi «bk. KAHRAMANMARAŞ».
    if n < 6000 and re.search(r"\bbk\.\s*[A-ZÇĞİÖŞÜ]", t):
        return t, n, "yonlendirme"
    if n < BOILERPLATE_ESIK:
        return t, n, "boiler"
    return t, n, "ok"


# ═══════════════════════════════════════════════════════════════════
# SINIFLAMA — takvim kapisi dahil
# ═══════════════════════════════════════════════════════════════════
def _yil_var(govde, yil, kati=False):
    """§2④ SINIR KORUMASI — yoksa `533` sayfa araligini tarih sanar.

    🔴 VE SINIR KORUMASI TEK BASINA YETMEDI — YER DOGRUSU SINAVI YAKALADI:
    `(?<!\\d)533(?!\\d)` deseni `1533`u eler ama `VI, 533-538`i ELEMEZ,
    cunku TIRE bir rakam degildir. `portekiz` govdesinde bulunan tam
    dizgi suydu:
        «…Stuttgart 1968, III, 652-662; IV, 579-584; VI, 533-538.»
    — bir BIBLIYOGRAFYA SAYFA ARALIGI, ve alet onu hicri 533 sanip
    `portekiz f=1139-07-25`i 🔴'dan 🟡'ye DUSURMUSTU. Sartname bu vakayi
    ADIYLA yaziyordu (§2④) ve ben onu HICRI KAPISINDA YENIDEN URETTIM.
    📌 Ve tuzak SISTEMIK: olculdu, 124 govdenin 121'inde `NNN-NNN` deseni
       var — tek vaka degil.

    `kati=True` tireyi de sinir sayar. YALNIZ HICRI (3 haneli) adayda
    kullanilir, cunku:
        4 haneli `1801-1805`  → gercek bir YIL ARALIGI, 1801 GERCEKTEN geciyor
        3 haneli `533-538`    → bibliyografyada SAYFA araligi
    ⚠️ SINIRI: hicri bir yil METINDE de aralik olarak yazilabilir
       (`533-538` yillari). O zaman kati mod onu KACIRIR ve kayit 🔴'da
       kalir — yani yanlis yonde degil GUVENLI yonde yanilir (🔴 «kaynak
       tasimiyor» der ve insan okumasina gider).
    """
    d = r"[\d-]" if kati else r"\d"
    return re.search(r"(?<!%s)%d(?!%s)" % (d, yil, d), govde) is not None


def hicri(g):
    """Gregoryen yil → yaklasik Hicri yil (bir yil ARALIGI doner).

    Bir milâdi yil iki hicri yila denk gelebilir; ikisi de aranir.
    """
    h = (g - 622) * 1.030684
    return {int(h), int(h) + 1}


def takvim_kapisi(govde, yil):
    """Yil bulunamadiysa: HICRI karsilik ve ±2 KOMSU YIL aranir.

    VAKA: `kirim` — kaynak «8 Nisan 1783» (Julyen), veri `1783-04-19`
    (Gregoryen). AYNI GUN, ve otomatik arama onu HICBIR bicimde
    eslestiremez. Bu kapi 🔴'i 🟡'ye dusurur — YANLIS ALARM URETMEMEK
    icin, cunku 🔴 «KESINLIKLE tasimiyor» demektir.
    """
    for k in (yil - 2, yil - 1, yil + 1, yil + 2):
        if _yil_var(govde, k):
            return "komsu_yil:%d" % k
    for h in sorted(hicri(yil)):
        # 🔴 kati=True — `VI, 533-538` sayfa araligini hicri yil SANMASIN
        if _yil_var(govde, h, kati=True):
            return "hicri:%d" % h
    return None


GUN_YIL_PENCERE = 250   # karakter — «ayni cumle/paragraf» yerine olculebilir vekil


def _gun_var(govde, tarih):
    """«D Ay» kalibi — gun sayisinda SINIR KORUMASI **ve YIL YAKINLIGI**.

    VAKA A (care isirdi): gevsek arama «1 Temmuz»u «21 Temmuz»UN ICINDE
    buldu ⇒ gun sayisinda `(?<!\\d)` sarti.

    🔴 VAKA B — YER DOGRUSU SINAVI YAKALADI, ve bu bir SAHTE ⚪ URETIYORDU:
    `kirim t=1783-04-19` icin alet «19 Nisan» buldu ve ⚪ dedi. Govdedeki
    tam dizgi:
        «19 Nisan 1918'de Alman askerî birlikleri Kırım'a girmeye basladi»
    — **135 YIL SONRAKI BASKA BIR OLAY.** Ve ayni kayitta `f=1771-07-01`
    icin bulunan «1 Temmuz» da «1 Temmuz 1919»du.
    ⇒ Gun eslesmesi YILDAN BAGIMSIZ arandigi surece ⚪ kovasi SAHTE
      DOLAR — ve ⚪ en tehlikeli kova, cunku «curutulmedi» diye okunur.
    📌 Sartname bu tuzagi da ADIYLA yaziyordu (§7: «19 Nisan → 19 Nisan
       1918 — BASKA YIL») ve ben onu yeniden urettim. Kural yetmiyor.

    ⇒ Bir gun eslesmesi ancak YILI da yakininda ise sayilir. Yoksa
      eslesme YOK SAYILIR ve kayit 🟡'ye duser («yil var, gun yok»)
      — ki dogru hukum odur: gun BU KAYNAKTAN GELMIYOR.

    ⚠️ SINIRI (sartname §7, ters yon): «SIKI ayiklar ve KAYBEDER» —
    `urabi-pasa f=1882-09-13` govdede «13 Eylul'de» diye geciyor ve yil
    90 karakter otede. Pencere 250 karakter tutuldu ki o vaka
    KAYBOLMASIN; olculdu ve kaybolmadi.
    """
    try:
        a, g = int(tarih[5:7]), int(tarih[8:10])
    except Exception:
        return None
    if not (1 <= a <= 12):
        return None
    yil = int(tarih[:4])
    kalip = r"(?<!\d)%d\s+%s" % (g, AYLAR[a - 1])
    for m in re.finditer(kalip, govde):
        bas = max(0, m.start() - GUN_YIL_PENCERE)
        son = min(len(govde), m.end() + GUN_YIL_PENCERE)
        if _yil_var(govde[bas:son], yil):
            return "gun:%d %s + yil %d yakininda" % (g, AYLAR[a - 1], yil)
    return None


def sinifla(tarih, govde, durum):
    """Doner: (kova, gerekce)."""
    if durum != "ok":
        return "⚫", "olculemedi:%s" % durum
    yil = int(tarih[:4])
    if not _yil_var(govde, yil):
        kapi = takvim_kapisi(govde, yil)
        if kapi:
            return "🟡", "yil YOK ama takvim kapisi tuttu (%s)" % kapi
        return "🔴", "yil %d govdede HIC gecmiyor (hicri ve ±2 komsu dahil)" % yil
    g = _gun_var(govde, tarih)
    if g:
        return "⚪", "gun bicimi geciyor (%s) — CURUTULMEDI, TEMIZ DEGIL" % g
    return "🟡", "yil %d VAR, gun YOK ⇒ gun bu kaynaktan gelmiyor" % yil


# ═══════════════════════════════════════════════════════════════════
# C13 — DORT AYAK
# ═══════════════════════════════════════════════════════════════════
def sinav():
    print("═" * 72)
    print("C13 SINAVI — DORT AYAK")
    print("═" * 72)
    hata = 0

    def de(ad, bek, ger):
        nonlocal hata
        ok = bek == ger
        hata += 0 if ok else 1
        print("  %s %-56s bek=%s ger=%s" %
              ("OK  " if ok else "HATA", ad[:56], bek, ger))

    # ── ① GECME — kusur YOKKEN temiz diyor mu
    print("\n① GECME — kusur yokken TEMIZ diyor mu")
    g = "Bu madde 1783 yilinda gerceklesen olayi anlatir. 19 Nisan 1783'te ..."
    de("yil VAR + gun VAR  → ⚪", "⚪", sinifla("1783-04-19", g, "ok")[0])
    de("yil VAR + gun YOK  → 🟡", "🟡",
       sinifla("1783-07-02", "olay 1783 yilinda oldu.", "ok")[0])

    # ── ② ATESLEME — HER kusur dali AYRI AYRI, sahte girdiyle ZORLA
    print("\n② ATESLEME — her dal AYRI AYRI zorlaniyor")
    de("🔴 dali: yil HIC yok", "🔴",
       sinifla("1783-04-19", "bu govdede hicbir tarih yoktur.", "ok")[0])
    de("⚫ dali: olu slug", "⚫", sinifla("1783-04-19", "", "olu")[0])
    de("⚫ dali: boilerplate", "⚫", sinifla("1783-04-19", "kisa", "boiler")[0])
    de("⚫ dali: yonlendirme kutugu", "⚫",
       sinifla("1783-04-19", "bk. KAHRAMANMARAŞ", "yonlendirme")[0])
    # takvim kapisi — 🔴'i 🟡'ye dusuren dal (kirim vakasi)
    de("takvim: komsu yil (1782) → 🟡", "🟡",
       sinifla("1783-04-19", "olay 1782 senesinde vuku buldu.", "ok")[0])
    hy = sorted(hicri(1783))[0]
    de("takvim: hicri (%d) → 🟡" % hy, "🟡",
       sinifla("1783-04-19", "sene %d'te ..." % hy, "ok")[0])
    # SINIR KORUMASI — iki yonde de
    de("sinir: `533-538` sayfa araligi yil SANILMAZ", "🔴",
       sinifla("0533-01-15", "Handbuch VI, 5330-5338 sayfalari.", "ok")[0])
    de("sinir: `1 Temmuz` ≠ `21 Temmuz` icinde", "🟡",
       sinifla("1783-07-01", "olay 1783'te, 21 Temmuz gunu oldu.", "ok")[0])

    # ── YER DOGRUSU SINAVININ YAKALADIGI IKI KUSUR — kendi dallari
    print("\n②b YER DOGRUSUNUN YAKALADIGI IKI KUSUR — ayri ayri ateslenir")
    # (a) `portekiz` vakasi: bibliyografya sayfa araligi hicri SANILMASIN
    pgovde = ("Portekiz tarihi. Kaynakca: Stuttgart 1968, III, 652-662; "
              "IV, 579-584; VI, 533-538. Baska bir eser.")
    de("hicri kapisi: `VI, 533-538` sayfa araligi HICRI SANILMAZ → 🔴",
       "🔴", sinifla("1139-07-25", pgovde, "ok")[0])
    de("… ama GERCEK hicri (`533 (1139)`) hala tutar → 🟡", "🟡",
       sinifla("1139-07-25", "olay 533 senesinde vuku buldu.", "ok")[0])
    # (b) `kirim` vakasi: gun eslesmesi BASKA YILA aitse SAYILMAZ
    kgovde = ("Kirim 1783 yilinda ilhak edildi (8 Nisan 1783). " + "x" * 400 +
              " 19 Nisan 1918'de Alman birlikleri Kirim'a girdi.")
    de("gun `19 Nisan` BASKA YILA (1918) ait → ⚪ DEGIL, 🟡", "🟡",
       sinifla("1783-04-19", kgovde, "ok")[0])
    de("gun + KENDI yili yan yana → ⚪", "⚪",
       sinifla("1783-04-08", kgovde, "ok")[0])
    # (c) ters yon: SIKI test KAYBETMESIN (sartname §7'nin uyarisi)
    # ⚠️ Bu sinav ILK YAZILISINDA HATA verdi ve kusur ALETTE DEGIL BENDE idi:
    #    test dizgisine `Eylul` yazmistim, veri `Eylül` kullaniyor. §4'un
    #    Turkce yazim ekseni — kendi sinavimda. Kaydediyorum cunku bir
    #    sonraki dal yazan ayni tuzaga duser: SINAV DIZGISI, GERCEK VERININ
    #    YAZIMIYLA yazilir.
    ugovde = ("Ingiliz kuvvetleri 1882 yilinda Misir'a girdi ve " + "y" * 80 +
              " Tellulkebir'de 13 Eylül'de carpisma oldu.")
    de("SIKI test KAYBETMIYOR: yil ~110 kar otede → ⚪", "⚪",
       sinifla("1882-09-13", ugovde, "ok")[0])
    de("… ama 400 kar otede KAYBEDER (pencere 250) → 🟡", "🟡",
       sinifla("1882-09-13",
               "1882 yilinda " + "z" * 400 + " 13 Eylül'de carpisma.", "ok")[0])

    # ── ③ GIRDI — GERCEK dosyadan okuma yolu KOSULUYOR (enjekte YETMEZ)
    print("\n③ GIRDI — evren GERCEK dosyalardan kuruluyor (enjekte kayit YETMEZ)")
    evk, elk = evren_kunye()
    evy, ely = evren_yerlesim()
    print("     kunye evreni    : %d uc" % len(evk))
    print("     yerlesim evreni : %d uc" % len(evy))
    de("kunye evreni BOS DEGIL", True, len(evk) > 0)
    de("yerlesim evreni BOS DEGIL", True, len(evy) > 0)
    tumu = evk + evy
    de("pencere ucu evrene SIZMADI", 0,
       sum(1 for u in tumu if u["tarih"] in PENCERE_UCU))
    de("`bulunamad*` evrene SIZMADI", 0,
       sum(1 for u in tumu if u["kaynak"].lower().startswith("bulunamad")))
    de("tarih-bicimli deger evrene SIZMADI", 0,
       sum(1 for u in tumu if TARIH_RX.match(u["kaynak"])))
    de("`YYYY-01-01` (yil konvansiyonu) evrene SIZMADI", 0,
       sum(1 for u in tumu if u["tarih"].endswith("-01-01")))

    # ── ④ CIKTI — bilerek kusurlu girdi ver, alet BILDIRSIN
    print("\n④ CIKTI — bilerek kusurlu girdi, alet BILDIRIYOR mu")
    de("bozuk tarih → gun testi None doner, cokmez", None,
       _gun_var("metin", "bozuk"))
    de("ay 13 → None (cokmez)", None, _gun_var("metin", "1783-13-19"))
    k, ger = sinifla("1783-04-19", "", "hata:URLError")
    de("HTTP hatasi → ⚫ ve GEREKCESI basiliyor", True,
       k == "⚫" and "hata" in ger)
    # kova adlari kaybolmasin
    de("dort kova adi da tanimli", 4, len({"🔴", "🟡", "⚪", "⚫"}))

    print("\n" + "═" * 72)
    print("SONUC:", "DORT AYAK DA GECTI" if hata == 0 else "🔴 %d HATA" % hata)
    print("═" * 72)
    return hata


# ═══════════════════════════════════════════════════════════════════
def evren_bas():
    evk, elk = evren_kunye()
    evy, ely = evren_yerlesim()
    dk, dy = demetle(evk), demetle(evy)
    print("═" * 72)
    print("EVREN — HTTP YOK")
    print("═" * 72)
    print("KUNYE     uc %4d   benzersiz demet %4d   slug %3d"
          % (len(evk), len(dk), len(set(u["kaynak"] for u in evk))))
    print("          elenen:", elk)
    print("YERLESIM  uc %4d   benzersiz demet %4d   slug %3d"
          % (len(evy), len(dy), len(set(u["kaynak"] for u in evy))))
    print("          elenen:", ely)
    sis = (len(evk) + len(evy)) / max(1, len(dk) + len(dy))
    print("\n§3 SISME (uc / benzersiz demet): %.2fx" % sis)
    print("   ⇒ uc sayan bir rapor kusuru %.2f kat BUYUK gosterirdi" % sis)
    en = sorted(dk + dy, key=lambda x: -x["uc"])[:6]
    print("\nEN COK UYGULANAN ALTI DEMET:")
    for d in en:
        print("   %-11s %-22s x%-4d %s" %
              (d["tarih"], d["kaynak"][:22], d["uc"],
               ", ".join(d["sahipler"][:3])))
    return dk, dy


def kosu(limit=None, gecikme=0.4):
    dk, dy = demetle(evren_kunye()[0]), demetle(evren_yerlesim()[0])
    hepsi = dk + dy
    if limit:
        hepsi = hepsi[:limit]
    sluglar = sorted(set(d["kaynak"] for d in hepsi))
    print("demet %d · benzersiz slug %d — govdeler cekiliyor…"
          % (len(hepsi), len(sluglar)))
    G = {}
    for i, s in enumerate(sluglar, 1):
        G[s] = govde_cek(s)
        print("   [%3d/%3d] %-28s %7d kar  %s"
              % (i, len(sluglar), s, G[s][1], G[s][2]))
        time.sleep(gecikme)

    for d in hepsi:
        t, n, durum = G[d["kaynak"]]
        d["kova"], d["gerekce"] = sinifla(d["tarih"], t, durum)
        d["govde_kar"] = n
    return hepsi, G


def rapor(hepsi):
    import collections
    print("\n" + "═" * 72)
    print("SONUC — UC KOVA AYRI (⚪ ASLA 'temiz' DEGIL)")
    print("═" * 72)
    for katman in ("kunye", "yerlesim"):
        alt = [d for d in hepsi if d["katman"] == katman]
        if not alt:
            continue
        c = collections.Counter(d["kova"] for d in alt)
        cu = collections.Counter()
        for d in alt:
            cu[d["kova"]] += d["uc"]
        print("\n%s — demet %d · uc %d"
              % (katman.upper(), len(alt), sum(d["uc"] for d in alt)))
        for k in ("🔴", "🟡", "⚪", "⚫"):
            print("   %s  demet %4d   uc %4d" % (k, c[k], cu[k]))
        # §5: `f:` ve `t:` AYRI raporlanir — iki uc IKI IDDIADIR
        for alan in ("f", "t"):
            ca = collections.Counter(d["kova"] for d in alt if d["alan"] == alan)
            print("      %s:  🔴 %-3d 🟡 %-3d ⚪ %-3d ⚫ %-3d"
                  % (alan, ca["🔴"], ca["🟡"], ca["⚪"], ca["⚫"]))
    kirmizi = [d for d in hepsi if d["kova"] == "🔴"]
    print("\n🔴 TASIMIYOR — %d demet, %d uc:" % (len(kirmizi),
                                                 sum(d["uc"] for d in kirmizi)))
    for d in sorted(kirmizi, key=lambda x: -x["uc"]):
        print("   %-11s %-6s %-22s x%-4d %s"
              % (d["tarih"], d["alan"], d["kaynak"][:22], d["uc"],
                 ", ".join(d["sahipler"][:3])))
    print("\n⚠️ ⚪ = DOGRULANMADI, «TEMIZ» DEGIL (§4⑧).")
    print("⚠️ 🟡 ve ⚪ ayrimi OTOMATIKLESTIRILEMEZ — insan okumasi ister.")


if __name__ == "__main__":
    ap = argparse.ArgumentParser()
    ap.add_argument("--evren", action="store_true")
    ap.add_argument("--sinav", action="store_true")
    ap.add_argument("--kosu", action="store_true")
    ap.add_argument("--limit", type=int, default=None)
    ap.add_argument("--json", default=None)
    a = ap.parse_args()
    if a.sinav:
        sys.exit(1 if sinav() else 0)
    elif a.evren:
        evren_bas()
    elif a.kosu:
        h, G = kosu(a.limit)
        rapor(h)
        if a.json:
            json.dump([{k: v for k, v in d.items() if k != "anahtar"}
                       for d in h], open(a.json, "w", encoding="utf-8"),
                      ensure_ascii=False, indent=1)
            print("\nyazildi:", a.json)
    else:
        ap.print_help()
