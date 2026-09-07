# -*- coding: utf-8 -*-
u"""ALASKA DEVİR YAMASI DÖNÜŞTÜRÜCÜSÜ — `--kuru` varsayılan, ELLE doğrulanmak için.

    SINAV-KOSU8-0907 · sevk: 1.MURAT HÜDAVENDİGAR · 7 Eylül 2026

`denetim/ALASKA-DEVIR-0907.json` insan okunur zincir DİZGİLERİ taşıyor:

    "1763-02-10..1799-01-01 ingiliz-kuzey-amerika"

`_sahiplik_uygula.py` ise yapılandırılmış `s:[{f,t,d}]` bekliyor ve
süzgeci (`:88`) bu kaydı **hiç görmüyor** — `ad` var, öteki on alandan
hiçbiri yok. ⇒ Eksik olan bir ALAN değil bir TEMSİL.
***Bir alan EKLENİR; bir temsil DÖNÜŞTÜRÜLÜR.***


## ŞART ① — "DİZGİ AYRIŞTIRMAYACAKSIN" NASIL OKUNDU

Sevk şartı iki türlü okunabiliyordu; öngörü dosyasında (`0bd4dda`,
ÖLÇÜMDEN ÖNCE) seçim ve gerekçesi yazıldı:

    Ⓐ hiç ayrıştırma, 5 kaydı ELLE transkribe et
    Ⓑ ayrıştır AMA ayrıştırıcıya GÜVENME                     ← SEÇİLDİ

Ⓐ'da transkripsiyonu **ben** yapardım ve bu projede elle yazılan sayı
defalarca bayatladı. Ⓑ'nin şartı, ayrıştırıcının **sessizce başarılı
olamaması**:

    · her dizgi TAM kalıba uyar; uymayan DURDURUR (çıkış 2), atlanmaz
    · üretilen her dönem, GELDİĞİ HAM DİZGİYLE yan yana basılır
    · her sayı dosyadan türetilir, elle yazılmaz

⚠️ Şart Ⓐ diye okunmuşsa bildirilsin: çıktı `--kuru`, hiçbir şey
yazılmıyor, yeniden üretmek ucuz.


## ŞART ② — `Değişmez 1` KAPSAMASI

Üç ölçüt, ve üçü de **iki uçtan** (`§3.5.1`):

    K3a  `yeni` zinciri KENDİ İÇİNDE bitişik      (boşluk 0 · çakışma 0)
    K3b  `yeni`nin uçları `eski`nin uçlarıyla AYNI (kapsama değişmiyor)
    K3c  `eski`, CANLI VERİYLE birebir aynı        ← EN ÖNEMLİSİ

K3c olmadan öteki ikisi bir şey kanıtlamaz: yama, `eski`nin tarif
ettiğinden BAŞKA bir şeyin üstüne inerse kapsama korunur ama
**başka bir kaydın verisi silinir.**


## ŞART ③ — ATOMİK ZİNCİR

Çıktının başına basılır. `rus-amerika` bugün BOYALAR'da yok, künye
olarak yok, veride kullanılmıyor ⇒ **bugün delik yok**; bu yama tek
başına inerse **doğar** (`CLAUDE.md §8`).


## KOŞTURMA

    py denetim/SINAV-KOSU8-ALASKA-DONUSTUR-0907.py            # --kuru
    py denetim/SINAV-KOSU8-ALASKA-DONUSTUR-0907.py --atesle   # C13 ②
    py denetim/SINAV-KOSU8-ALASKA-DONUSTUR-0907.py --js       # yama metni

`--yaz` YOKTUR. Bu alet hiçbir dosyaya yazmaz; `data/yer_yama_alaska.js`
üretimi ve uygulaması **merge adımında 1.MURAT'ın.**

Çıkış: 0 temiz · 1 ölçüt ihlali · 2 ayrıştırma/şema durdurdu.
"""
from __future__ import unicode_literals

import io
import json
import os
import re
import subprocess
import sys

# `os.getcwd()` DEĞİL: bu alet `denetim/`ten de depo kökünden de aynı
# şeyi okumalı. Bugün ölçüldü — beş uygulayıcı kökü ÜÇ ayrı yolla
# buluyor (`__file__` · `getcwd()` · `environ`) ve yalnız birincisi
# nereden çağrılırsa çağrılsın doğru.
KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
KAYNAK = os.path.join(KOK, "denetim", "ALASKA-DEVIR-0907.json")
FIKSTUR = os.path.join(KOK, "denetim", "SINAV-KOSU8-FIKSTUR-ALASKA-0907.json")

# TAM kalıp. `fullmatch` ile kullanılır: fazladan boşluk, açıklama eki,
# eksik alan — hiçbiri sessizce geçmez.
KALIP = re.compile(r"(\d{4}-\d{2}-\d{2})\.\.(\d{4}-\d{2}-\d{2}) ([a-z0-9\-]+)")

ATOMIK = """\
🔴 ATOMİK ZİNCİR — ÜÇÜ BİRDEN İNER, YOKSA HİÇBİRİ
   ① künye  `rus-amerika`     denetim/YAMA-KUNYE-RUS-AMERIKA-0907.json
   ② yama   BU dosya          data/yer_yama_alaska.js
   ③ RENK   `rus-amerika`     arac/renkler.py  (koşu 8'den SONRA)
   ② inip ③ inmezse HARİTA DELİĞİ doğar (CLAUDE.md §8: BOYALAR'da
   tanımlı olmayan kimlik BOYANMAZ). Bugün `rus-amerika` hiçbir
   kümede yok ⇒ bugün delik YOK; yama tek başına inerse DOĞAR."""


class Durdu(Exception):
    u"""Ayrıştırma ya da şema ihlali — sessizce geçilmez."""


# ─────────────────────────────────────────────────────────── ayrıştırma

def zincir_coz(satirlar, nere):
    u"""Dizgi listesini `[{f,t,d}]`e çevirir. Ham dizgiyi de taşır."""
    out = []
    for i, ham in enumerate(satirlar):
        m = KALIP.fullmatch(ham) if hasattr(KALIP, "fullmatch") else None
        if m is None:
            m2 = KALIP.match(ham)
            tam = m2 is not None and m2.end() == len(ham)
            if not tam:
                raise Durdu(
                    "KALIBA UYMAYAN DİZGİ · %s · satır %d\n"
                    "   ham    : %r\n"
                    "   kalıp  : YYYY-MM-DD..YYYY-MM-DD kimlik\n"
                    "   ⇒ ATLANMADI, DURULDU." % (nere, i + 1, ham))
            m = m2
        f, t, d = m.group(1), m.group(2), m.group(3)
        if not (f < t):
            raise Durdu("TERS ya da SIFIR UZUNLUKTA dönem · %s · %r" % (nere, ham))
        out.append({"f": f, "t": t, "d": d, "_ham": ham})
    if not out:
        raise Durdu("BOŞ zincir · %s" % nere)
    return out


def kapsama_olc(zincir, nere):
    u"""K3a — kendi içinde bitişik mi? boşluk ve çakışma listesi döner."""
    bosluk, cakisma = [], []
    for a, b in zip(zincir, zincir[1:]):
        if a["t"] < b["f"]:
            bosluk.append((a["t"], b["f"]))
        elif a["t"] > b["f"]:
            cakisma.append((b["f"], a["t"]))
    return bosluk, cakisma


# ─────────────────────────────────────────────────── canlı veri (K3c)

def canli_oku(adlar):
    u"""`girdi.yukle()` ile CANLI `s:` zincirlerini çeker.

    Kendi ayrıştırıcımı yazmıyorum: veri JS'te, onu okuyan yetkili
    şey `arac/girdi.py`. (Bu proje aynı dersi sekiz kez öğrendi.)
    """
    # 🔴 `ensure_ascii=False` YAZMA. Windows'ta bir alt sürecin stdout'u
    # boru olduğunda YEREL KODLAMAYLA (burada cp1254) yazılır; `utf-8`
    # okuyan taraf Türkçe harfleri U+FFFD görür ve ad EŞLEŞMEZ — alet
    # çökmez, "veride YOK" diye TEMİZ BİR YALAN üretir.
    # 7 Eylül 2026'da bu aletin kendisinde ölçüldü: beş addan ASCII olan
    # üçü eşleşti, `Yukarı` ve `eteği` taşıyan ikisi 🔴 YOK çıktı.
    # ASCII kaçışlı JSON bu yolu tamamen kapatır.
    betik = (
        "import sys, json, io\n"
        "sys.path.insert(0, 'arac')\n"
        "import girdi\n"
        "Y = girdi.yukle(sessiz=True)\n"
        "ara = json.loads(sys.argv[1])\n"
        "cik = {}\n"
        "for y in Y:\n"
        "    if y.get('ad') in ara:\n"
        "        cik.setdefault(y['ad'], []).append(\n"
        "            [{'f': p.get('f'), 't': p.get('t'), 'd': p.get('d')}\n"
        "             for p in (y.get('s') or [])])\n"
        "sys.stdout.write('@@' + json.dumps(cik) + '##' + str(len(Y)))\n")
    p = subprocess.run(["py", "-c", betik, json.dumps(adlar)],
                       cwd=KOK, capture_output=True, timeout=900)
    ham = p.stdout.decode("ascii", "replace")
    if "@@" not in ham or "##" not in ham:
        return None, None, (ham + p.stderr.decode(
            "utf-8", "replace"))[-400:]
    govde, kuyruk = ham.split("@@", 1)[1].rsplit("##", 1)
    return json.loads(govde), int(kuyruk), None


def ham_dosyada_ara(ad):
    u"""İKİNCİ, BAĞIMSIZ KAPI — `girdi` "yok" derse ham dosyalara sorulur.

    Bir yokluk tek bir kanaldan ilan edilmez: bu aletin ilk sürümü
    `girdi`nin kanalında kodlama yüzünden iki adı kaybetti ve onları
    "veride YOK" diye bastı. Kusur `grep` ile — yani BAŞKA BİR YOLLA —
    yakalandı; o yol artık aletin İÇİNDE.
    """
    hedef = 'ad:"%s"' % ad
    bulundu = []
    kok = os.path.join(KOK, "data")
    for dosya in sorted(os.listdir(kok)):
        if not dosya.endswith(".js"):
            continue
        try:
            with io.open(os.path.join(kok, dosya), encoding="utf-8") as f:
                if hedef in f.read():
                    bulundu.append(dosya)
        except (IOError, OSError, UnicodeDecodeError):
            continue
    return bulundu


def kimlik_oku():
    u"""Künye kimlikleri, PENCERELERİ ve BOYALAR anahtarları — şart ③.

    Pencere de okunur çünkü `§3.5.0`: ***ardıl künyenin VAR olması,
    yazılabilir olduğu anlamına gelmez — PENCERESİ DE TUTMALI.***
    Ön koşul *"künye var mı"* değil, *"künye var mı VE penceresi bu
    dönemi kapsıyor mu"*.
    """
    kunye, pencere = set(), {}
    p = subprocess.run(
        ["node", "-e",
         "global.window={};eval(require('fs').readFileSync("
         "'data/devletler.js','utf8'));"
         "const D=global.window.DEVLETLER||[];"
         "process.stdout.write('@@'+JSON.stringify({"
         "id:D.map(d=>d.id).concat(D.map(d=>d.harita)).filter(Boolean),"
         "pen:D.filter(d=>d.id).map(d=>[d.id,d.f||null,d.t||null])}));"],
        cwd=KOK, capture_output=True, timeout=300)
    ham = p.stdout.decode("utf-8", "replace")
    if "@@" in ham:
        veri = json.loads(ham.split("@@", 1)[1])
        kunye = set(veri["id"])
        pencere = {i: (f, t) for i, f, t in veri["pen"]}

    # BEKLEYEN künye yamaları da sayılır: `rus-amerika` bugün
    # `devletler.js`te YOK ama bir yamada DURUYOR ve bu yamayla
    # BİRLİKTE inecek. Yalnız canlı dosyaya bakmak, atomik zincirin
    # birinci halkasını görmezden gelmek olurdu.
    bekleyen = {}
    dizin = os.path.join(KOK, "denetim")
    for dosya in sorted(os.listdir(dizin)):
        if not (dosya.startswith("YAMA-KUNYE-") and dosya.endswith(".json")):
            continue
        try:
            with io.open(os.path.join(dizin, dosya), encoding="utf-8") as f:
                belge = json.load(f)
        except (ValueError, IOError, OSError):
            continue
        adaylar = belge if isinstance(belge, list) else None
        if adaylar is None and isinstance(belge, dict):
            for deger in belge.values():
                if isinstance(deger, list) and deger and \
                        isinstance(deger[0], dict) and "id" in deger[0]:
                    adaylar = deger
                    break
        for k in (adaylar or []):
            if isinstance(k, dict) and k.get("id"):
                bekleyen[k["id"]] = (k.get("f"), k.get("t"), dosya)

    boya = set()
    try:
        import ast
        with io.open(os.path.join(KOK, "arac", "renkler.py"),
                     encoding="utf-8") as f:
            agac = ast.parse(f.read())
        for d in ast.walk(agac):
            if isinstance(d, ast.Assign):
                for h in d.targets:
                    if isinstance(h, ast.Name) and h.id == "BOYALAR":
                        boya = set(ast.literal_eval(d.value))
    except Exception:
        boya = None
    return kunye, boya, pencere, bekleyen


# ─────────────────────────────────────────────────────────────── koşum

def calis(yol, canli_sor=True):
    with io.open(yol, encoding="utf-8") as f:
        belge = json.load(f)
    kalemler = belge.get("kalemler")
    if not isinstance(kalemler, list) or not kalemler:
        raise Durdu("`kalemler` dizisi yok ya da boş · %s" % yol)

    print(ATOMIK)
    print("")
    print("KAYNAK : %s" % os.path.relpath(yol, KOK).replace("\\", "/"))
    print("KAYIT  : %d" % len(kalemler))
    print("")

    ihlal = []
    uretilen = {}
    kimlikler = {}
    sinir_gunleri = set()

    for k in kalemler:
        ad = k.get("ad")
        if not ad:
            raise Durdu("`ad` alanı olmayan kalem · %r" % (k,))
        eski = zincir_coz(k.get("eski") or [], "%s / eski" % ad)
        yeni = zincir_coz(k.get("yeni") or [], "%s / yeni" % ad)
        uretilen[ad] = yeni

        print("─" * 72)
        print("● %s" % ad)
        print("  ESKİ (%d dönem)                          →  ÇÖZÜLEN"
              % len(eski))
        for p in eski:
            print("    %-46s  {f:%s, t:%s, d:%s}"
                  % (p["_ham"], p["f"], p["t"], p["d"]))
        print("  YENİ (%d dönem)                          →  ÇÖZÜLEN"
              % len(yeni))
        for p in yeni:
            print("    %-46s  {f:%s, t:%s, d:%s}"
                  % (p["_ham"], p["f"], p["t"], p["d"]))
            kimlikler.setdefault(p["d"], []).append((ad, p["f"], p["t"]))
            sinir_gunleri.add(p["f"])
            sinir_gunleri.add(p["t"])

        # K3a — kendi içinde bitişik
        for etiket, zin in (("eski", eski), ("yeni", yeni)):
            bos, cak = kapsama_olc(zin, ad)
            if bos:
                ihlal.append("K3a · %s · %s zincirinde BOŞLUK: %s"
                             % (ad, etiket, bos))
            if cak:
                ihlal.append("K3a · %s · %s zincirinde ÇAKIŞMA: %s"
                             % (ad, etiket, cak))

        # K3b — uçlar korunuyor mu
        if eski[0]["f"] != yeni[0]["f"]:
            ihlal.append("K3b · %s · BAŞLANGIÇ kaydı: eski %s ≠ yeni %s"
                         % (ad, eski[0]["f"], yeni[0]["f"]))
        if eski[-1]["t"] != yeni[-1]["t"]:
            ihlal.append("K3b · %s · BİTİŞ kaydı: eski %s ≠ yeni %s"
                         % (ad, eski[-1]["t"], yeni[-1]["t"]))

        # dönem sayısı — bir HÜKÜM değil, bir BİLGİ satırı
        if len(yeni) < len(eski):
            ihlal.append("K4 · %s · `yeni` DAHA KISA (%d < %d) — bir dönem "
                         "SİLİNİYOR olabilir, ELLE bakılsın"
                         % (ad, len(yeni), len(eski)))
        elif len(yeni) == len(eski):
            print("  ⚠️ dönem sayısı DEĞİŞMİYOR (%d = %d) ⇒ bu kayıtta yama "
                  "bir dönem EKLEMİYOR," % (len(yeni), len(eski)))
            print("     var olan dönemlerin KİMLİĞİNİ değiştiriyor. "
                  "Ayrı bir iddia; ELLE doğrulanmalı.")

    print("─" * 72)
    print("")

    # ── K3c — CANLI veriyle karşılaştırma
    print("K3c · CANLI VERİ KARŞILAŞTIRMASI (`arac/girdi.py` ile)")
    if not canli_sor:
        print("  ⚫ ÖLÇÜLMEDİ — ateşleme koşusu (`--atesle`), canlı veriye "
              "sorulmadı.")
    else:
        canli, yuklenen, hata = canli_oku(sorted(uretilen))
        if canli is not None:
            print("  (`girdi.yukle` %d yerleşim döndürdü)" % yuklenen)
        if canli is None:
            print("  ⚫ ÖLÇÜLEMEDİ — `girdi.yukle` çıktısı alınamadı:")
            print("     %s" % (hata or "").replace("\n", " ")[:200])
            print("  ⚠️ Bu «TEMİZ» DEĞİLDİR. Koşu 8 sürerken beklenen "
                  "olabilir; merge öncesi TEKRAR koşulmalı.")
            ihlal.append("K3c · ÖLÇÜLEMEDİ — canlı veri okunamadı "
                         "(bu bir GEÇME değil)")
        else:
            for ad in sorted(uretilen):
                bulunan = canli.get(ad)
                if not bulunan:
                    # 🔴 YOKLUK TEK KANALDAN İLAN EDİLMEZ.
                    ikinci = ham_dosyada_ara(ad)
                    if ikinci:
                        print("  🔴 %-34s ARAÇ KUSURU — `girdi` kanalı "
                              "bulamadı AMA ham dosyada VAR" % ad)
                        print("       %s" % ", ".join(ikinci))
                        ihlal.append(
                            "K3c · %s · ARAÇ KUSURU: kayıt %s içinde DURUYOR "
                            "ama `girdi` kanalından gelmedi. «Veride yok» "
                            "DEĞİL — bu aletin okuma yolu bozuk."
                            % (ad, ", ".join(ikinci)))
                    else:
                        print("  🔴 %-34s CANLI VERİDE YOK "
                              "(iki kanal da bulamadı)" % ad)
                        ihlal.append(
                            "K3c · %s · CANLI VERİDE BULUNAMADI — İKİ KANAL "
                            "da bulamadı (`girdi.yukle` + ham `data/*.js`). "
                            "Yama hiçbir kayda inmez; ad yazımı ya da eksik "
                            "nokta (§4 Türkçe ekseni)" % ad)
                    continue
                if len(bulunan) > 1:
                    ihlal.append("K3c · %s · CANLI VERİDE %d KEZ geçiyor — "
                                 "hangisine ineceği belirsiz"
                                 % (ad, len(bulunan)))
                gercek = [{"f": p["f"], "t": p["t"], "d": p["d"]}
                          for p in bulunan[0]]
                beyan = [{"f": p["f"], "t": p["t"], "d": p["d"]}
                         for p in zincir_coz(
                             [q["_ham"] for q in uretilen[ad]], ad)]
                # `eski`nin canlıyla aynı olduğunu ölçüyoruz, `yeni`nin değil
                del beyan
                kalem = next(x for x in kalemler if x["ad"] == ad)
                eski = [{"f": p["f"], "t": p["t"], "d": p["d"]}
                        for p in zincir_coz(kalem["eski"], ad)]
                if gercek == eski:
                    print("  🟢 %-34s canlı `s:` == `eski` (%d dönem)"
                          % (ad, len(eski)))
                else:
                    print("  🔴 %-34s canlı `s:` ≠ `eski`" % ad)
                    print("       canlı: %s" % json.dumps(
                        gercek, ensure_ascii=False))
                    print("       eski : %s" % json.dumps(
                        eski, ensure_ascii=False))
                    ihlal.append(
                        "K3c · %s · CANLI VERİ `eski` ile AYNI DEĞİL — yama "
                        "tarif ettiğinden BAŞKA bir şeyin üstüne iner" % ad)
    print("")

    # ── ŞART ③ — kimlikler
    print("ŞART ③ · KİMLİK KARŞILIĞI ve KÜNYE PENCERESİ")
    kunye, boya, pencere, bekleyen = kimlik_oku()
    for d in sorted(kimlikler):
        canli_var = d in kunye
        bek = bekleyen.get(d)
        k = "VAR" if canli_var else ("🟡 BEKLEYEN" if bek else "🔴 YOK")
        b = ("VAR" if d in boya else "🔴 YOK") if boya is not None \
            else "⚫ ölçülemedi"
        print("  %-26s künye: %-11s BOYALAR: %s" % (d, k, b))
        if bek and not canli_var:
            print("     ↳ %s içinde bekliyor" % bek[2])
        if not canli_var and not bek:
            print("     ⇒ 🔴 kimlik HİÇBİR YERDE yok — yama inerse %s "
                  "BOYANMAZ." % d)
            ihlal.append("ŞART③ · `%s` künyesi ne canlıda ne bir yamada "
                         "var — harita deliği" % d)
        if boya is not None and d not in boya:
            print("     ⇒ 🔴 RENK YOK. Yama, RENK inmeden uygulanırsa %s "
                  "BOYANMAZ (§8)." % d)

        # K7 · pencere tutuyor mu (§3.5.0)
        pen = pencere.get(d) or (bek[:2] if bek else None)
        if not pen or not pen[0] or not pen[1]:
            print("     ⚫ pencere ÖLÇÜLEMEDİ (künyede `f`/`t` yok) — "
                  "bu bir GEÇME değil")
            continue
        pf, pt = pen
        tasan = [(a, f, t) for a, f, t in kimlikler[d]
                 if f < pf or t > pt]
        if tasan:
            print("     🔴 K7 · künye penceresi %s→%s AŞILIYOR:" % (pf, pt))
            for a, f, t in tasan:
                print("        %s : %s→%s" % (a, f, t))
            ihlal.append("K7 · `%s` · %d dönem künye penceresini (%s→%s) "
                         "AŞIYOR — künye VAR olması yetmez, PENCERESİ de "
                         "tutmalı (§3.5.0)" % (d, len(tasan), pf, pt))
        else:
            print("     🟢 K7 · %d dönemin %d'i künye penceresi %s→%s "
                  "İÇİNDE" % (len(kimlikler[d]), len(kimlikler[d]), pf, pt))
    print("")

    print("SINIR GÜNLERİ (%d benzersiz): %s"
          % (len(sinir_gunleri), ", ".join(sorted(sinir_gunleri))))
    print("TOPLAM ÜRETİLEN `s:` DÖNEMİ: %d"
          % sum(len(v) for v in uretilen.values()))
    print("")

    if ihlal:
        print("🔴 ÖLÇÜT İHLALİ · %d" % len(ihlal))
        for i in ihlal:
            print("   · %s" % i)
        return 1, uretilen
    print("🟢 ÖLÇÜTLERİN HEPSİ GEÇTİ (K3a · K3b · K3c · şart ③ bilgi)")
    return 0, uretilen


def js_bas(uretilen):
    u"""`data/yer_yama_alaska.js` METNİ — dosyaya YAZILMAZ, basılır."""
    print("")
    print("=" * 72)
    print("data/yer_yama_alaska.js  ÖNERİLEN METİN — bu alet YAZMAZ")
    print("=" * 72)
    print("// Alaska devir yaması — kaynak: denetim/ALASKA-DEVIR-0907.json")
    print("// SINAV-KOSU8-ALASKA-DONUSTUR-0907.py ile üretildi, ELLE "
          "doğrulanacak.")
    print("// 🔴 künye `rus-amerika` + RENK inmeden UYGULANMAZ (harita deliği).")
    print("window.YER_YAMA_ALASKA = [")
    for ad in uretilen:
        don = ", ".join(
            '{f:"%s", t:"%s", d:"%s"}' % (p["f"], p["t"], p["d"])
            for p in uretilen[ad])
        print('  {ad: "%s", s: [%s]},' % (ad, don))
    print("];")


def atesle():
    u"""C13 ② — her durdurma dalı AYRI AYRI zorlanır."""
    print("═" * 72)
    print("C13 ② ATEŞLEME — her dal ayrı ayrı zorlanıyor")
    print("═" * 72)
    with io.open(FIKSTUR, encoding="utf-8") as f:
        dallar = json.load(f)["dallar"]
    kotu = 0
    for dal in dallar:
        ad, bekle = dal["ad"], dal["bekle"]
        gec = os.path.join(os.path.dirname(FIKSTUR), "_alaska_dal.json")
        with io.open(gec, "w", encoding="utf-8") as f:
            f.write(json.dumps({"kalemler": dal["kalemler"]},
                               ensure_ascii=False))
        try:
            kod, _ = calis(gec, canli_sor=False)
            gercek = "temiz" if kod == 0 else "ihlal"
        except Durdu as e:
            gercek = "durdu"
            print("  ⇒ DURDU: %s" % str(e).splitlines()[0])
        finally:
            try:
                os.remove(gec)
            except OSError:
                pass
        im = "🟢" if gercek == bekle else "🔴"
        if gercek != bekle:
            kotu += 1
        print("%s DAL %-28s beklenen %-6s  gerçek %s" % (im, ad, bekle, gercek))
        print("")
    print("═" * 72)
    print("ATEŞLEME (şema/ölçüt): %d dal · uyuşmayan %d" % (len(dallar), kotu))
    print("")
    kotu += kanal_sinavi()
    return 1 if kotu else 0


def kanal_sinavi():
    u"""C13 ③ GİRDİ + ④ ÇIKTI — CANLI OKUMA YOLU ayrıca zorlanır.

    Yukarıdaki 12 dal girdiyi ENJEKTE ediyor: `canli_oku` hiç
    çağrılmıyor. Bu aletin ilk sürümü tam orada bozuktu ve on iki dalın
    on ikisi de 🟢 diyordu. Enjekte girdiyle yapılan bir sınav
    ayrıştırıcıyı/kanalı HİÇ çağırmaz.
    """
    print("═" * 72)
    print("C13 ③④ KANAL SINAVI — canlı okuma yolu GERÇEK kaynaktan")
    print("═" * 72)
    TURKCE = "Nikolai (Yukarı Kuskokwim)"      # veride VAR ve Türkçe harfli
    ASCII_ = "Fort Yukon"                       # veride VAR ve ASCII
    YOK = "ZZZ-OLMAYAN-YERLESIM-QQQ"            # veride YOK
    canli, yuklenen, hata = canli_oku([TURKCE, ASCII_, YOK])
    kotu = 0
    if canli is None:
        print("⚫ ÖLÇÜLEMEDİ — kanal cevap vermedi: %s"
              % (hata or "").replace("\n", " ")[:160])
        print("⚠️ Bu bir GEÇME DEĞİLDİR; kanal sınanmamış sayılır.")
        return 1
    print("  (`girdi.yukle` %d yerleşim döndürdü)" % yuklenen)
    for ad, bekle in ((TURKCE, True), (ASCII_, True), (YOK, False)):
        var = ad in canli
        im = "🟢" if var == bekle else "🔴"
        if var != bekle:
            kotu += 1
        print("%s kanal · %-30s beklenen %-9s gerçek %s"
              % (im, ad, "BULUNSUN" if bekle else "BULUNMASIN",
                 "bulundu" if var else "bulunamadı"))
    if not (YOK in canli):
        ikinci = ham_dosyada_ara(YOK)
        im = "🟢" if not ikinci else "🔴"
        if ikinci:
            kotu += 1
        print("%s ikinci kapı · olmayan ad ham dosyalarda da yok: %s"
              % (im, not ikinci))
    ikinci_t = ham_dosyada_ara(TURKCE)
    im = "🟢" if ikinci_t else "🔴"
    if not ikinci_t:
        kotu += 1
    print("%s ikinci kapı · Türkçe harfli ad ham dosyada bulundu: %s"
          % (im, ", ".join(ikinci_t) or "BULUNAMADI"))
    print("═" * 72)
    print("KANAL SINAVI: uyuşmayan %d" % kotu)
    return kotu


def main(argv):
    if "--atesle" in argv:
        return atesle()
    try:
        kod, uretilen = calis(KAYNAK)
    except Durdu as e:
        print("🔴 DURDU (çıkış 2)")
        print(str(e))
        return 2
    if "--js" in argv:
        js_bas(uretilen)
    return kod


if __name__ == "__main__":
    if hasattr(sys.stdout, "reconfigure"):
        sys.stdout.reconfigure(encoding="utf-8", errors="replace")
    sys.exit(main(sys.argv[1:]))
