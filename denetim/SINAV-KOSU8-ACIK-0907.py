# -*- coding: utf-8 -*-
u"""Ⓐ — 164 «AÇIK» SATIR GERÇEKTEN AÇIK MI?
SINAV-KOSU8-0907  ·  7 Eylül 2026

══════════════════════════════════════════════════════════════════════════
🔴 ÖNGÖRÜ ÖLÇÜMDEN ÖNCE DAMGALANDI:
   `denetim/ONGORU-SINAV-KOSU8-ACIK-0907.md` (commit `5ef1bcd`)
   Ö-A1 varyant ≥%15 · Ö-A2 gerçek borç ≤%50 · Ö-A3 yanıltan cins
   «dosya yolu» · Ö-A4 bitiremeyeceğim
══════════════════════════════════════════════════════════════════════════

SORU: bir satır «artefakt YOK» diye AÇIK kovasına düştü. Üç ihtimal:
    Ⓐ GERÇEK AÇIK BORÇ   artefakt gerçekten yok
    Ⓑ AD VARYANTI        artefakt VAR, BAŞKA ADLA
    Ⓒ ÖLÇÜLEMEDİ         artefakt bir ad değil (desen · kavram)

🔴🔴 VE NİÇİN VARYANT ARAMASI: bu oturum bugün BEŞ kez ad varyantından
   yanıldı, ve HER SEFERİNDE varyant gerçekten vardı —
       Cânet ≠ Cânet (Djanet)      · Doha ≠ Doha (Katar)
       MADDELER ≠ maddeler         · kenarlar ≠ kenar
       usku ≠ Üsküp
   ⇒ *"Artefakt yok"* demeden önce VARYANT aranır. Ve arama
     BULDUĞUNU kanıtlar, BULAMADIĞINI KANITLAMAZ — o yüzden Ⓐ kovası
     bir ÜST SINIR, Ⓑ bir ALT SINIR. Öngörüde de yazılı.

KOŞULUŞ
    py denetim/SINAV-KOSU8-ACIK-0907.py
    py denetim/SINAV-KOSU8-ACIK-0907.py --atesle
    py denetim/SINAV-KOSU8-ACIK-0907.py --liste VARYANT
"""
from __future__ import unicode_literals

import io
import os
import re
import sys
import unicodedata

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DIZIN = ["denetim", "oturumlar", "."]

DESEN = re.compile(
    r"ko(?:ş|s)u\s*(?:\d+[ab]?\s*)?(?:bitince|bittikten|bitene|bitsin|"
    r"bitmeden|sonras(?:ı|i)|(?:ç|c)(?:ö|o)z(?:ü|u)l(?:ü|u)nce)|"
    r"ko(?:ş|s)udan\s+sonra|bir sonraki ko(?:ş|s)u|sonraki ko(?:ş|s)uda|"
    r"gelecek ko(?:ş|s)u|yeni bir ko(?:ş|s)u", re.I)
YOL_RX = re.compile(r"\b((?:data|arac|denetim|js|css|oturumlar|veri-kaynak)"
                    r"/[A-Za-z0-9_\-\.\*]+\.(?:js|py|json|md|css|geojson))")
TIK_RX = re.compile(r"`([A-Za-z_][A-Za-z0-9_]{1,24})`")
GURULTU = {"data", "arac", "denetim", "js", "py", "json", "md", "true",
           "false", "null", "None", "int", "str", "if", "for", "in"}

# ── NORMALLEŞTİRİCİ — `ARAC-NORMAL-0903`in ilkesi, `lower()`dan ÖNCE ────
# 🔴 `"İ".lower()` iki kod noktası verir; `lower()` TEK BAŞINA Türkçe
#   metinde güvenli değil (`CLAUDE.md §4`, ölçülmüş).
_CEV = {ord(a): b for a, b in zip("İIıŞşĞğÜüÖöÇçÂâ", "iiissgguuooccaa")}


def norm(s):
    s = s.translate(_CEV)
    s = unicodedata.normalize("NFKD", s)
    return "".join(c for c in s if not unicodedata.combining(c)).lower()


# ── DEPO DİZİNİ — bir kez kurulur ───────────────────────────────────────
_DIZIN = {"yol": None, "ad": None, "metin": None}


def depo():
    if _DIZIN["yol"] is not None:
        return _DIZIN
    yollar, adlar = set(), {}
    for kok, dizinler, dosyalar in os.walk(KOK):
        dizinler[:] = [d for d in dizinler
                       if d not in (".git", "node_modules", "__pycache__")]
        for a in dosyalar:
            tam = os.path.relpath(os.path.join(kok, a), KOK).replace("\\", "/")
            yollar.add(tam)
            adlar.setdefault(norm(a), []).append(tam)
    _DIZIN["yol"] = yollar
    _DIZIN["ad"] = adlar
    # tanımlayıcı araması için: arac/ + denetim/ kaynak metni tek gövdede
    # 🔴 ARAMA GÖVDESİ ARAYANI İÇEREMEZ — ateşleme yakaladı:
    #   fikstürdeki `ZZZ_YOK_BOYLE_BIR_AD` «VARYANT» çıktı, çünkü gövde
    #   `denetim/`i kapsıyordu ve BU DOSYA da orada. Yani alet KENDİ
    #   fikstürünü buluyordu.
    #   ⇒ ***Bir ölçüm aleti, kendi çıktısını arama evrenine ALAMAZ*** —
    #     yoksa kendi uydurmasını doğrular. Bu oturumun bütün
    #     `SINAV-KOSU8-*` ve `ONGORU-*` dosyaları gövdeden ÇIKARILDI:
    #     onlar projenin kodu değil, BU OTURUMUN artefaktı.
    # 🔴 DÜZELTİLDİ 7 Eylül 2026 — `os.listdir` ÖZYİNELEMELİ DEĞİLDİ ve
    #   ALT DİZİNLERİ HİÇ OKUMUYORDU. Ölçüldü: düz 601 dosya, özyinelemeli
    #   632 ⇒ **31 dosya arama evreninin dışındaydı**, ve içlerinde
    #   `denetim/uygulanmis-0905/` (UYGULANMIŞ yamalar) ve
    #   `arac/olc_enklav/` (canlı ölçüm takımı) var.
    #   Somut zarar: `oku_kara` *"kaynakta YOK"* diye AÇIK borç sayıldı;
    #   `arac/olc_enklav/_ortak.py:205`te **tanımlı** ve iki betik onu
    #   çağırıyor. Yani alet, VAR OLAN bir şeyi YOK diye raporladı.
    #   📌 Bugün üçüncü *"ölçüm doğru, EVREN dar"* vakası — ve bu sefer
    #     evreni daraltan şey bir coğrafya ya da bir kova değil, tek bir
    #     fonksiyon seçimi: `listdir` ↔ `walk`.
    govde = []
    for d in ("arac", "denetim"):
        p = os.path.join(KOK, d)
        if not os.path.isdir(p):
            continue
        for kok_d, _alt, dosyalar in os.walk(p):
            for a in sorted(dosyalar):
                if a.startswith(("SINAV-KOSU8-", "ONGORU-SINAV-KOSU8-")):
                    continue
                if a.endswith((".py", ".js")):
                    try:
                        with io.open(os.path.join(kok_d, a),
                                     encoding="utf-8",
                                     errors="replace") as f:
                            govde.append(f.read())
                    except Exception:                # noqa: BLE001
                        pass
    _DIZIN["metin"] = "\n".join(govde)
    return _DIZIN


def yol_varyanti(yol):
    u"""(bulundu_mu, gerekçe) — dosya BAŞKA ADLA var mı?"""
    d = depo()
    if yol in d["yol"]:
        return (True, "aynı yolda VAR")
    tab = os.path.basename(yol)
    n = norm(tab)
    if n in d["ad"]:
        return (True, "BAŞKA DİZİNDE: %s" % ", ".join(d["ad"][n][:2]))
    # tarih sonekini at: X-0905.json → X-*.json
    kok_ad = re.sub(r"[-_]0\d{3}(?=\.)", "", tab)
    nk = norm(kok_ad)
    for k, v in d["ad"].items():
        if nk and (nk in k or k in nk) and abs(len(k) - len(nk)) <= 8:
            return (True, "TARİH SONEKİ FARKLI: %s" % ", ".join(v[:2]))
    return (False, "hiçbir varyantla bulunamadı")


def tanim_varyanti(t):
    u"""(bulundu_mu, gerekçe) — tanımlayıcı BAŞKA YAZIMLA var mı?"""
    m = depo()["metin"]
    if re.search(r"\b%s\b" % re.escape(t), m):
        return (True, "arac/+denetim/ kaynağında AYNEN VAR")
    nm = norm(m)
    if norm(t) in nm:
        return (True, "NORMALLEŞTİRİLMİŞ eşleşme (harf/diakritik farkı)")
    return (False, "kaynakta hiçbir yazımla bulunamadı")


def sinifla(satir):
    u"""(kova, gerekçe)."""
    yol = [y for y in YOL_RX.findall(satir)]
    tik = [t for t in TIK_RX.findall(satir)
           if t not in GURULTU and not t.endswith(".js")]
    globlu = [y for y in yol if "*" in y]
    duz = [y for y in yol if "*" not in y]
    if globlu and not duz and not tik:
        return ("ÖLÇÜLEMEDİ", "artefakt bir GLOB (%s) — tek bir dosya değil"
                % globlu[0])
    # 🔴🔴 YOL VAR OLSA BİLE «VARYANT» DEMEK YANLIŞTI — ölçüldü ve düzeltildi
    #   `SINAV-KOSU8-B` bir satırı iki AYRI sebeple AÇIK sayabiliyor:
    #       (a) «dosya YOK»                        → soru YOL hakkında
    #       (b) «`X` → o dosyanın İÇİNDE GEÇMİYOR» → soru TANIMLAYICI hakkında
    #   İlk sürümüm yolu ÖNCE sınıyordu ve (b)'de yol zaten VAR olduğu için
    #   «VARYANT» diyordu — yani B'nin sorduğu soruyu DEĞİL, kendi sorduğum
    #   soruyu cevaplıyordum. Ölçüldü: 158 «varyant»ın ~80'i bu yoldan geldi.
    #   ⇒ ***İki alet aynı satıra farklı soru soruyorsa, ikincisinin cevabı
    #     birincisini DOĞRULAMAZ.*** Bugün bu sınıfın YEDİNCİ vakası, ve
    #     ilk kez bir aletim BAŞKA BİR ALETİMİN kovasını yanlış okudu.
    #   Çare: yol YALNIZ EKSİKSE artefakt sayılır; varsa soru
    #   tanımlayıcıya geçer.
    for y in duz:
        if y in depo()["yol"]:
            continue                      # yol zaten var ⇒ soru bu değil
        var, ger = yol_varyanti(y)
        if var:
            return ("VARYANT", "yol `%s` → %s" % (y, ger))
        return ("AÇIK", "yol `%s` hiçbir varyantla YOK" % y)
    for t in tik:
        var, ger = tanim_varyanti(t)
        if var:
            return ("VARYANT", "tanımlayıcı `%s` → %s" % (t, ger))
    # ⚠️ `not tik` ŞARTI ŞART: bir tanımlayıcı ARANDI ve BULUNAMADIYSA
    #   açık kalem ODUR — var olan bir yol onu «ölçülemez» yapmaz.
    #   İlk yazımda bu şart yoktu ve ateşleme dalı öttü.
    if duz and not tik and all(y in depo()["yol"] for y in duz):
        # 🔴 GERÇEK KUSURDU: yolların hepsi VAR ve sınanacak tanımlayıcı
        #   YOK ⇒ ortada ölçülecek bir şey kalmıyor. İlk sürüm buna
        #   «AÇIK» diyordu — yani hiçbir şey ölçmeden BORÇ ilan ediyordu.
        return ("ÖLÇÜLEMEDİ", "yol(lar) VAR, sınanacak tanımlayıcı YOK")
    if tik:
        return ("AÇIK", "tanımlayıcı `%s` kaynakta YOK" % tik[0])
    return ("ÖLÇÜLEMEDİ", "sınanabilir artefakt yok")


def acik_satirlar():
    u"""`SINAV-KOSU8-B`nin AÇIK kovasını YENİDEN ÜRETİR (aynı ölçüt)."""
    from importlib import machinery
    yol = os.path.join(KOK, "denetim", "SINAV-KOSU8-B-0907.py")
    mod = machinery.SourceFileLoader("_b", yol).load_module()
    out = []
    for gor, tam in mod.dosyalar():
        try:
            with io.open(tam, encoding="utf-8", errors="replace") as f:
                satirlar = f.read().splitlines()
        except Exception:                            # noqa: BLE001
            continue
        for i, s in enumerate(satirlar):
            sonraki = satirlar[i + 1] if i + 1 < len(satirlar) else ""
            if not DESEN.search(s):
                ikili = s + " " + sonraki
                if DESEN.search(sonraki) or not DESEN.search(ikili):
                    continue
                s = ikili
            if mod.sina(s)[0] == "AÇIK":
                out.append((gor, i + 1, s.strip()))
    return out


def atesleme():
    t = []

    def de(ad, bekle, olc):
        t.append((ad, bekle, olc, bekle == olc))

    de("norm · Türkçe İ/ı", "istanbul", norm("İstanbul"))
    de("norm · Şğüöç", "sgu-oc", norm("Şğü-öç"))
    de("glob → ÖLÇÜLEMEDİ", "ÖLÇÜLEMEDİ",
       sinifla("koşu bitince data/olaylar*.js gözden geçirilecek")[0])
    # 🔴 BU BEKLENTİ TASARIM DEĞİŞİNCE BAYATLADI: var olan bir yol artık
    #   VARYANT DEĞİL — çünkü `SINAV-KOSU8-B` o satırı zaten yol yüzünden
    #   AÇIK saymamıştı; sorusu tanımlayıcı hakkındaydı. Yeni davranış
    #   doğru, beklenti eskiydi. (Bugün beşinci kez.)
    de("var olan yol TEK BAŞINA → ÖLÇÜLEMEDİ", "ÖLÇÜLEMEDİ",
       sinifla("koşu bitince arac/girdi.py bakılacak")[0])
    de("olmayan yol → AÇIK", "AÇIK",
       sinifla("koşu bitince data/zzz_yok_boyle.js yazılacak")[0])
    # 🔴 İLK SÜRÜMDE OLMAYAN DAL — gerçek veride ~80 yanlış karar üretti
    de("VAR OLAN yol + kaynakta OLMAYAN tanımlayıcı → AÇIK", "AÇIK",
       sinifla("koşu bitince `ZZZ_YOK_BOYLE_AD` arac/girdi.py'ye")[0])
    de("VAR OLAN yol TEK BAŞINA varyant SAYILMAZ", "ÖLÇÜLEMEDİ",
       sinifla("koşu bitince arac/girdi.py gözden geçirilecek")[0])
    de("kaynakta geçen tanımlayıcı → VARYANT", "VARYANT",
       sinifla("koşu bitince `GIRDI_DOSYALARI` bakılacak")[0])
    de("kaynakta olmayan tanımlayıcı → AÇIK", "AÇIK",
       sinifla("koşu bitince `ZZZ_YOK_BOYLE_BIR_AD` eklenecek")[0])
    de("artefakt yok → ÖLÇÜLEMEDİ", "ÖLÇÜLEMEDİ",
       sinifla("koşu bitince bakılacak")[0])
    return t


def main():
    if "--atesle" in sys.argv:
        print("C13 ② ATEŞLEME\n")
        d = atesleme()
        kotu = 0
        for ad, b, o, ok in d:
            print(("  🟢 " if ok else "  🔴 ") + ad.ljust(46) +
                  "beklenen %r · ölçülen %r" % (b, o))
            kotu += (not ok)
        print("\n%d/%d dal ateşledi" % (len(d) - kotu, len(d)))
        return 1 if kotu else 0

    satirlar = acik_satirlar()
    kova = {"AÇIK": [], "VARYANT": [], "ÖLÇÜLEMEDİ": []}
    cins = {"yol": 0, "tanim": 0}
    for gor, no, s in satirlar:
        k, ger = sinifla(s)
        kova[k].append((gor, no, ger, s[:96]))
        if k == "VARYANT":
            cins["yol" if ger.startswith("yol") else "tanim"] += 1

    # 🔴 SONUÇ UÇ ÇIKARSA ÖNCE ALET ŞÜPHELİDİR — dal dal sayılıyor.
    #   `%96 varyant` gibi bir sayı, «depo temiz» değil «ölçüt gevşek»
    #   demek de olabilir. `TARİH SONEKİ FARKLI` dalı bulanık eşleşme
    #   yapıyor (`nk in k or k in nk`, uzunluk farkı ≤8) ve EN GEVŞEK
    #   olan o. Hangi dalın kaç karar ürettiği AYRICA basılıyor.
    dal = {}
    for _g, _n, ger, _s in kova["VARYANT"]:
        if "aynı yolda VAR" in ger:
            d_ = "① aynı yolda VAR (SIKI)"
        elif "BAŞKA DİZİNDE" in ger:
            d_ = "② başka dizinde, AYNI AD (SIKI)"
        elif "TARİH SONEKİ" in ger:
            d_ = "③ tarih soneki farklı (🔴 BULANIK)"
        elif "AYNEN VAR" in ger:
            d_ = "④ tanımlayıcı AYNEN var (SIKI)"
        else:
            d_ = "⑤ normalleştirilmiş eşleşme (🟡 orta)"
        dal[d_] = dal.get(d_, 0) + 1

    top = len(satirlar)
    print("═" * 78)
    print("Ⓐ — «AÇIK» SATIRLAR: GERÇEKTEN AÇIK MI?")
    print("═" * 78)
    print("ÖLÇÜM ANI : (payda FOTOĞRAFTIR, sabit değil)")
    print("AÇIK satır: %d" % top)
    print("")
    print("Ⓐ GERÇEK AÇIK BORÇ : %4d  (%.1f%%)"
          % (len(kova["AÇIK"]), 100.0 * len(kova["AÇIK"]) / max(1, top)))
    print("Ⓑ AD VARYANTI      : %4d  (%.1f%%)   yol %d · tanımlayıcı %d"
          % (len(kova["VARYANT"]),
             100.0 * len(kova["VARYANT"]) / max(1, top),
             cins["yol"], cins["tanim"]))
    print("Ⓒ ÖLÇÜLEMEDİ       : %4d  (%.1f%%)"
          % (len(kova["ÖLÇÜLEMEDİ"]),
             100.0 * len(kova["ÖLÇÜLEMEDİ"]) / max(1, top)))
    print("   VARYANT kararını HANGİ DAL verdi:")
    for d_ in sorted(dal, key=lambda x: -dal[x]):
        print("      %-40s %4d" % (d_, dal[d_]))
    bulanik = sum(v for k, v in dal.items() if "BULANIK" in k)
    print("   🔴 BULANIK dalın payı: %d / %d  (%.1f%%) — bu kadarı"
          % (bulanik, len(kova["VARYANT"]),
             100.0 * bulanik / max(1, len(kova["VARYANT"]))))
    print("      «varyant BULUNDU» değil «BENZER BİR AD BULUNDU» demektir.")
    print("")
    iL = sys.argv.index("--liste") if "--liste" in sys.argv else -1
    hedef = sys.argv[iL + 1] if iL >= 0 else "AÇIK"
    print("«%s» KOVASI (ilk 20):" % hedef)
    for gor, no, ger, s in kova.get(hedef, [])[:20]:
        print("   %s:%d" % (gor, no))
        print("      %s" % ger)
        print("      %s" % s)
    print("")
    print("─" * 78)
    print("ÖNGÖRÜ SINAVI (denetim/ONGORU-SINAV-KOSU8-ACIK-0907.md · 5ef1bcd)")
    v = 100.0 * len(kova["VARYANT"]) / max(1, top)
    a = 100.0 * len(kova["AÇIK"]) / max(1, top)
    for et, kos, ol in (
            ("Ö-A1  varyant >= %15", v >= 15, "%.1f%%" % v),
            ("Ö-A2  gerçek borç <= %50", a <= 50, "%.1f%%" % a),
            ("Ö-A3  yanıltan cins YOL", cins["yol"] > cins["tanim"],
             "yol %d · tanım %d" % (cins["yol"], cins["tanim"]))):
        print("  %-26s %s   ölçülen %s"
              % (et, "🟢 TUTTU" if kos else "🔴 ÇÜRÜDÜ", ol))
    print("  Ö-A4  bitiremeyeceğim      ⚫ bu tur ÖLÇÜLDÜ, elle okuma AYRI")
    print("")
    print("🔴 SINIR: varyant araması BULDUĞUNU kanıtlar, BULAMADIĞINI")
    print("   KANITLAMAZ. ⇒ Ⓐ bir ÜST SINIR, Ⓑ bir ALT SINIR.")
    return 0


if __name__ == "__main__":
    if hasattr(sys.stdout, "reconfigure"):
        sys.stdout.reconfigure(encoding="utf-8", errors="replace")
    sys.exit(main())
