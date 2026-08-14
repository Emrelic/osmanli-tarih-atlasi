# -*- coding: utf-8 -*-
"""PERSONEL DEFTERİ — oturumların TEK kaydı. Kimlik · görev · model · hâl.

🔴 EMRE'NİN TASARIMI (14 Ağustos 2026):
    "Açılan oturumları oturum ID'si VE ismi ile birlikte tut, mesaj
     göndereceğin zaman ID'ye gönder... Gerekirse bir PERSONEL DEFTERİ tut.
     Tablo olarak: hangi oturum ID, ne isim, ne görev, ne şartname ve
     promptları, ne modelleri — hepsi bu defterde yer alsın."
Ve ertesi gün, birleştirme emri:
    "Ötekileri de GERÇEKTEN emekli et... faydalı kısmı alalım gerisini çöpe
     atalım ama bunu yaparken EKLEMELİ YAMALI BOHÇAYA döndürmeyelim."

═══════════════════════════════════════════════════════════════════════════
NİÇİN TEK DEFTER — dört defter vardı ve ikisi bayattı
═══════════════════════════════════════════════════════════════════════════
```
① kutu/ordu.json              beş kova · GEÇMİŞ · HEDEF · kimlik anahtarlı
② oturumlar/durum/<AD>.json   oturumun kendi beyanı · 🔴 AD anahtarlı,
                              en yeni damga 6 Ağustos = DOKUZ GÜN BAYAT
③ oturumlar/*-ILERLEME.md     DURUM damgası · taze · ad anahtarlı
④ oturumlar/defter.json       kimlik · görev · model · dosyalar
```
📌 Ve `kutu.py`nin kendi yorumunda 11 Ağustos'ta ölçülmüş ders duruyor:
*"iki ayrı defter vardı ve sekme YANLIŞ OLANI okuyordu."* O gün iki, dört
gün sonra DÖRT. **Aynı hata ikiye katlandı.**

🔴 VE BİR TUZAK — AYNI KELİME, ZIT ANLAM:
```
ekip.py           "hazir" = TESLİM ETTİ, iş BİTTİ
durum_tahtasi.py  "HAZIR" = buradayım, emir bekliyorum, iş YOK
```
Bir oturum "HAZIR" yazsa GUI onu "teslim etti" gösterirdi. **Tam tersi.**

═══════════════════════════════════════════════════════════════════════════
NE ALINDI, NE ATILDI — yamalı bohça olmasın diye ŞEMA BAŞTAN yazıldı
═══════════════════════════════════════════════════════════════════════════
```
ordu.json'dan ALINDI     `gecmis` (kova/hâl değişim kaydı, zaman damgalı)
                         `hedef`  (proje başına model kotası)
                         ⇒ ikisi de defterde YOKTU ve ikisi de gerçek fayda
durum/<AD>.json'dan      `not` fikri — ama AD anahtarı ATILDI
ILERLEME damgasından     hâl KAYNAĞI olarak korundu (oturum kendi beyan eder)
ATILDI                   ad anahtarlı erişim · beş kovalık ayrı sözlük ·
                         "hazir"ın ikinci anlamı · çok-projeli tek dosya
                         (her projenin kendi defteri olur — GUI projeleri gezer)
```

═══════════════════════════════════════════════════════════════════════════
DOKUZ HÂL — tek sözlük
═══════════════════════════════════════════════════════════════════════════
```
🟢 HAZIR         buradayım, emir bekliyorum          (Emre ①)
🟡 IS-ISTIYORUM  iş talep ediyorum                    (Emre ②)
🔵 ALDIM         şartname ulaştı, başlıyorum          (Emre ③)
⏳ CALISIYORUM   iş üstündeyim                        (Emre ④)
🔴 SORU          cevap gelmeden ilerleyemem           (ekip.py'den)
🟠 TIKANDI       engel var, koordinatör çözmeli       (ekip.py'den)
✅ BITTI         teslim ettim                         (Emre ⑤)
🟡 BOSTA         iş bitti, bir süredir boşum          (Emre ⑥)
⬛ EMEKLI        oturum kapandı                       (ekip.py'den)
```
📌 `SORU` ve `TIKANDI` gerçek bir boşluğu dolduruyor: bir oturum "gördü
ama üstlenmedi" hâlindeydi ve bunun ADI YOKTU.

Kullanım:
    py arac/defter.py                      tabloyu bas
    py arac/defter.py coz "<AD>"           ad → KİMLİK (mesaj göndermeden ÖNCE)
    py arac/defter.py kaydet --kimlik … --ad … --gorev … --model … --kova …
    py arac/defter.py hal <KİMLİK|AD> CALISIYORUM --not "..."
    py arac/defter.py tazele               ILERLEME damgası + tahtadan ÖLÇ
    py arac/defter.py gecmis "<AD>"        o oturumun bütün hâl geçmişi
    py arac/defter.py eksik                boş alanları listele
    py arac/defter.py hedef --model opus --sayi 2      kota koy
"""
import datetime
import glob
import io
import json
import os
import re
import sys

sys.stdout.reconfigure(encoding="utf-8", errors="replace")

KOK = os.environ.get("CLAUDEMRE_PROJE") or os.path.dirname(
    os.path.dirname(os.path.abspath(__file__)))
DIZIN = os.path.join(KOK, "oturumlar")
VERI = os.path.join(DIZIN, "defter.json")
GORUNUM = os.path.join(DIZIN, "DEFTER.md")
TAHTA = os.path.join(DIZIN, "tahta.json")

HALLER = {
    "HAZIR":        ("🟢", "buradayım, emir bekliyorum"),
    "IS-ISTIYORUM": ("🟡", "iş talep ediyorum"),
    "ALDIM":        ("🔵", "şartname ulaştı, başlıyorum"),
    "CALISIYORUM":  ("⏳", "iş üstündeyim"),
    "SORU":         ("🔴", "cevap gelmeden ilerleyemem"),
    "TIKANDI":      ("🟠", "engel var, koordinatör çözmeli"),
    "BITTI":        ("✅", "teslim ettim"),
    "BOSTA":        ("🟡", "iş bitti, bir süredir boşum"),
    "EMEKLI":       ("⬛", "oturum kapandı"),
}
# Kova = İDARÎ durum (kim havuzda), Hâl = ANLIK durum (ne yapıyor).
# İkisi AYRI eksendir: "görevde" bir oturum TIKANMIŞ olabilir.
# 🔴 `emir-bekleyen` sonradan eklendi (15 Ağustos): `ordu.json`dan göçen
# 36 kaydın kovasıydı ve dörtlüğün hiçbirine sığmıyordu. "İşi bitmiş ama
# devir raporu alınıp KAPATILMAMIŞ" ile "kapatılmış" ayrı şeylerdir; 36
# kaydı `emekli`ye ezmek, ölçülmüş bir ayrımı silmek olurdu.
KOVALAR = ("hazir-kita", "gorevde", "emir-bekleyen",
           "emekli", "goreve-donmus")


def _sade(s):
    """Türkçe İ/I dâhil normalleştirme.
    🔴 Vaka: aynı UUID tahtada `YAPI DENETİM 3` ve `YAPI DENETIM 3` diye
    İKİ oturum gibi göründü — tek harf farkı."""
    for a, b in (("İ", "I"), ("ı", "i"), ("Ş", "S"), ("ş", "s"),
                 ("Ğ", "G"), ("ğ", "g"), ("Ü", "U"), ("ü", "u"),
                 ("Ö", "O"), ("ö", "o"), ("Ç", "C"), ("ç", "c")):
        s = s.replace(a, b)
    return " ".join(s.upper().split())


def _simdi():
    return datetime.datetime.now().strftime("%Y-%m-%d %H:%M")


def _yukle():
    if not os.path.exists(VERI):
        return {"_hedef": {}, "oturumlar": {}}
    try:
        d = json.load(io.open(VERI, encoding="utf-8"))
    except Exception as e:
        # 🔴 Bozuk defter, boş defterden KÖTÜDÜR: boşu "kimse yok" der,
        # bozuğu YANLIŞ KİŞİYİ gösterir.
        print("🔴 defter.json OKUNAMADI: %s" % e)
        print("   Devam etme, KULLANICIYA söyle.")
        sys.exit(2)
    if "oturumlar" not in d:                       # eski düz şemadan taşı
        d = {"_hedef": {}, "oturumlar": {k: v for k, v in d.items()
                                         if not k.startswith("_")}}
    return d


def _kaydet(d):
    os.makedirs(DIZIN, exist_ok=True)
    # 🔴 SÖZLÜK DE DOSYAYA YAZILIR — okuyan onu KOPYALAMASIN diye.
    # Vaka (8 Ağustos): aynı beyan iki yerde durdu, biri güncellendi öteki
    # bayatladı. Kutu GUI'si hâl sözlüğünü buradan okur; kendi kopyasını
    # tutsaydı `HALLER`e eklenen onuncu hâl orada görünmezdi.
    d["_haller"] = {k: {"im": im, "aciklama": ac}
                    for k, (im, ac) in HALLER.items()}
    d["_kovalar"] = list(KOVALAR)
    d["_damga"] = _simdi()
    io.open(VERI, "w", encoding="utf-8", newline="\n").write(
        json.dumps(d, ensure_ascii=False, indent=1, sort_keys=True))
    _gorunum(d)


def _gecmise_yaz(k, ne, deger, notu=""):
    """Her hâl/kova değişimi ZAMAN DAMGALI kaydedilir.
    📌 ordu.json'dan alınan tek gerçek fikir bu: bir oturumun BUGÜNKÜ hâli
    kadar NASIL GELDİĞİ de bilgi taşır — "üç saattir ALDIM'da duruyor"
    ancak geçmişle görünür."""
    g = k.setdefault("gecmis", [])
    if g and g[-1].get(ne) == deger:
        return False                               # değişmemiş, kayıt şişirme
    g.append({"z": _simdi(), ne: deger, "not": notu})
    return True


def _gorunum(d):
    o = d.get("oturumlar", {})
    hd = d.get("_hedef") or {}
    s = ["# 👥 PERSONEL DEFTERİ", "",
         "> 🤖 **ÜRETİLMİŞ — ELLE DÜZENLEME.** Otorite `oturumlar/defter.json`.",
         "> 🔴 **TEK DEFTER.** `kutu/ordu.json` · `oturumlar/durum/*.json` ·",
         "> ayrı hâl sözlükleri **EMEKLİ EDİLDİ** (14 Ağustos 2026).",
         "",
         "🔴 **MESAJ GÖNDERMEDEN ÖNCE:** `py arac/defter.py coz \"<AD>\"`.",
         "Ad ne tekildir ne kararlı — bir günde üç zarar bundan doğdu:",
         "6,5 saatlik gecikme · yanlış atıf · tek harf farkı (İ/I).",
         ""]
    if hd:
        s += ["**Hazır kıta hedefi:** " +
              " · ".join("%s %d" % (k, v) for k, v in sorted(hd.items())), ""]
    s += ["| HÂL | AD | GÖREV | MODEL | KOVA | ŞARTNAME | DOSYALARI | KİMLİK |",
          "|---|---|---|---|---|---|---|---|"]
    for kimlik, v in sorted(o.items(), key=lambda x: (
            list(HALLER).index(x[1].get("hal")) if x[1].get("hal") in HALLER else 99,
            x[1].get("ad") or "")):
        im = HALLER.get(v.get("hal"), ("❔", ""))[0]
        s.append("| %s %s | %s | %s | %s | %s | %s | %s | `%s` |" % (
            im, v.get("hal") or "—", v.get("ad") or "—",
            (v.get("gorev") or "—")[:44], v.get("model") or "❓",
            v.get("kova") or "—", v.get("sartname") or "—",
            v.get("dosyalar") or "—", kimlik))
    s += ["", "## Hâl sözlüğü — dokuz hâl, TEK sözlük", ""]
    for h, (im, ac) in HALLER.items():
        s.append("- %s **`%s`** — %s" % (im, h, ac))
    s += ["", "⚠️ **KOVA ile HÂL ayrı eksendir:** kova İDARÎ (kim havuzda),",
          "hâl ANLIK (ne yapıyor). `gorevde` bir oturum `TIKANDI` olabilir."]
    io.open(GORUNUM, "w", encoding="utf-8", newline="\n").write("\n".join(s) + "\n")


def _tahtadan_adlar():
    if not os.path.exists(TAHTA):
        return {}
    try:
        t = json.load(io.open(TAHTA, encoding="utf-8"))
    except Exception:
        return {}
    m = {}
    for x in t:
        k = x.get("kimden_kimlik")
        if k and k.startswith("local_") and " " not in k:
            m.setdefault(k, set()).add(x["kimden"])
    return {k: sorted(v) for k, v in m.items()}


def _damgalar():
    """`oturumlar/<AD>-ILERLEME.md` ilk satırındaki DURUM damgası.
    📌 Oturumun KENDİ beyanı — `durum/<AD>.json`un taşıdığı fikir buydu ve
    o dosya bayatlarken bu taze kaldı; fikir korundu, dosya emekli edildi."""
    D = re.compile(r"<!--\s*DURUM:\s*([A-ZĞÜŞİÖÇ\-]+)\s*\|\s*([^|]*)\|?(.*?)-->", re.I | re.S)
    m = {}
    for y in glob.glob(os.path.join(DIZIN, "*-ILERLEME.md")):
        try:
            with io.open(y, encoding="utf-8") as f:
                bas = "".join([next(f, "") for _ in range(6)])
        except Exception:
            continue
        g = D.search(bas)
        if g:
            ad = os.path.basename(y)[:-len("-ILERLEME.md")]
            m[_sade(ad)] = (g.group(1).upper().replace("İ", "I"),
                            g.group(2).strip(), g.group(3).strip())
    return m


def tazele():
    d = _yukle()
    o = d["oturumlar"]
    ta, dg = _tahtadan_adlar(), _damgalar()
    yeni = degisen = 0
    for kimlik, adlar in ta.items():
        k = o.setdefault(kimlik, {"kimlik": kimlik, "acilis": _simdi()})
        if "ad" not in k:
            k["ad"] = adlar[0]
            yeni += 1
        k["takma_adlar"] = sorted(set(k.get("takma_adlar") or []) | set(adlar))
        k["son_gorulme"] = _simdi()
    for kimlik, k in o.items():
        for a in [k.get("ad")] + list(k.get("takma_adlar") or []):
            if a and _sade(a) in dg:
                hal, zaman, notu = dg[_sade(a)]
                if hal in HALLER:
                    if _gecmise_yaz(k, "hal", hal, notu):
                        degisen += 1
                    k["hal"], k["hal_zaman"], k["hal_not"] = hal, zaman, notu
                break
        s = k.get("sartname")
        if s and s not in ("-", "—") and not os.path.exists(os.path.join(KOK, s)):
            k["sartname"] = s.replace("  🔴 DOSYA YOK", "") + "  🔴 DOSYA YOK"
    _kaydet(d)
    print("tazelendi · yeni %d · hâli değişen %d · toplam %d" % (yeni, degisen, len(o)))
    return 0


def _bul(d, anahtar):
    """KİMLİK ya da AD ile bul. Çakışma varsa LİSTE döner — hüküm çağırana ait."""
    o = d["oturumlar"]
    if anahtar in o:
        return [(anahtar, o[anahtar])]
    s = _sade(anahtar)
    return [(k, v) for k, v in o.items()
            if any(a and _sade(a) == s
                   for a in [v.get("ad")] + list(v.get("takma_adlar") or []))]


def coz(ad):
    d = _yukle()
    b = _bul(d, ad)
    if not b:
        print("🔴 '%s' defterde YOK." % ad)
        print("   ⇒ py arac/defter.py tazele   (tahtaya yazmışsa bulunur)")
        return 1
    if len(b) > 1:
        print("🔴 '%s' adını %d OTURUM taşıyor — KİMLİKLE gönder, adla DEĞİL:" % (ad, len(b)))
        for kimlik, v in b:
            print("   %s  hâl:%-12s görev: %s" % (
                kimlik, v.get("hal") or "—", v.get("gorev") or "—"))
        print("   ⚠️ Bu belirsizlik bir işin YANLIŞ OTURUMA atfedilmesine yol açtı.")
        return 1
    kimlik, v = b[0]
    print(kimlik)
    for al, et in (("ad", "ad"), ("hal", "hâl"), ("gorev", "görev"),
                   ("sartname", "şartname"), ("model", "model"),
                   ("kova", "kova"), ("dosyalar", "dosyalar")):
        d2 = v.get(al)
        if al == "model" and not d2:
            d2 = "❓ ÖLÇÜLMEDİ — uydurma"
        print("   %-9s: %s" % (et, d2 or "—"))
    if v.get("takma_adlar") and len(v["takma_adlar"]) > 1:
        print("   takma    : %s" % " · ".join(v["takma_adlar"]))
    return 0


def kaydet(a):
    d = _yukle()
    kimlik = a.get("kimlik")
    if not kimlik:
        print("🔴 --kimlik ZORUNLU. Defterin anahtarı KİMLİKTİR, ad değil.")
        return 2
    k = d["oturumlar"].setdefault(kimlik, {"kimlik": kimlik, "acilis": _simdi()})
    for alan in ("ad", "gorev", "sartname", "model", "dosyalar", "not"):
        if a.get(alan):
            k[alan] = a[alan]
    if a.get("kova"):
        if a["kova"] not in KOVALAR:
            print("🔴 kova '%s' tanınmıyor. Geçerli: %s" % (a["kova"], " · ".join(KOVALAR)))
            return 2
        _gecmise_yaz(k, "kova", a["kova"], a.get("gorev") or "")
        k["kova"] = a["kova"]
    if a.get("ad"):
        k["takma_adlar"] = sorted(set(k.get("takma_adlar") or []) | {a["ad"]})
    _kaydet(d)
    print("✓ %s → %s" % (kimlik, k.get("ad")))
    return 0


def olcum(yol):
    """CANLI ölçümü deftere işle — `list_sessions` çıktısı bir JSON dosyada.

    🔴 Defter KAYDEDER, ÖLÇMEZ. Gerçek oturum listesini yalnız koordinatör
    `mcp__ccd_session_mgmt__list_sessions` ile görebilir (Python MCP'ye
    erişemez). O yüzden ölçüm DIŞARIDAN gelir ve buraya işlenir.
    ⇒ `F18`: ÖNCE CANLIYA BAK, SONRA DEFTERE. Ayrışırsa GERÇEK doğrudur.

    Beklenen biçim (list_sessions ne veriyorsa o):
      [{"sessionId": "...", "title": "...", "isRunning": true,
        "lastActivityAt": "2026-08-14T21:35:33Z", "cwd": "..."}, ...]

    ⚠️ `title` DEĞİŞİR — bir oturum "OPUS HAZIR KITA 2" iken "VERİ FETRET"
    olur. Eski ad SİLİNMEZ, `takma_adlar`a düşer; defterin anahtarı
    kimliktir ve tam bu yüzden öyledir.
    ⚠️ Ve `isRunning:false` "ÖLDÜ" demek DEĞİLDİR — "şu an tur almıyor"
    demektir. 7 Ağustos'ta bir oturum bu çıkarımla ölü ilan edildi, oysa
    çalışıyordu. O yüzden buradan `hal` TÜRETİLMEZ; yalnız `calisiyor`
    ölçüm alanı yazılır.
    """
    try:
        gelen = json.load(io.open(yol, encoding="utf-8"))
    except Exception as e:
        print("🔴 ölçüm dosyası okunamadı: %s" % e)
        return 2
    if not isinstance(gelen, list):
        print("🔴 ölçüm bir LİSTE olmalı (list_sessions çıktısı).")
        return 2
    d = _yukle()
    o = d["oturumlar"]
    yeni = ad_degisen = kosan = 0
    z = _simdi()
    for x in gelen:
        kimlik = x.get("sessionId") or x.get("id")
        if not kimlik:
            continue
        k = o.get(kimlik)
        if k is None:
            k = o[kimlik] = {"kimlik": kimlik, "acilis": z,
                             "not": "canlı ölçümde bulundu, defterde YOKTU"}
            yeni += 1
        ad = x.get("title") or x.get("ad")
        if ad:
            if k.get("ad") and _sade(k["ad"]) != _sade(ad):
                ad_degisen += 1
                k.setdefault("gecmis", []).append(
                    {"z": z, "kova": k.get("kova") or "",
                     "not": "AD DEĞİŞTİ: %s → %s" % (k["ad"], ad)})
            k["ad"] = ad
            k["takma_adlar"] = sorted(set(k.get("takma_adlar") or []) | {ad})
        if x.get("isRunning") is not None:
            k["calisiyor"] = bool(x["isRunning"])
            kosan += 1 if x["isRunning"] else 0
        if x.get("lastActivityAt"):
            k["son_hareket"] = x["lastActivityAt"]
        if x.get("cwd"):
            k["dizin"] = x["cwd"]
        k["olcum_zamani"] = z
    d["_olcum"] = {"z": z, "gelen": len(gelen), "kosan": kosan}
    _kaydet(d)
    print("✓ ölçüm işlendi · gelen %d · defterde yeni %d · adı değişen %d"
          % (len(gelen), yeni, ad_degisen))
    print("  ŞU AN KOŞAN: %d  ← 'koşmuyor' ÖLDÜ demek DEĞİLDİR" % kosan)
    # ölçümde HİÇ görünmeyenler: kapatılmış olabilirler
    gorunmeyen = [v.get("ad") or k for k, v in o.items()
                  if v.get("olcum_zamani") != z and v.get("hal") != "EMEKLI"]
    if gorunmeyen:
        print("  ⚠️ canlı listede GÖRÜNMEYEN %d canlı kayıt: %s"
              % (len(gorunmeyen), ", ".join(a for a in gorunmeyen[:8] if a)))
        print("     (kapatılmış olabilirler — hüküm SENİN, defter silmez)")
    return 0


def hal(anahtar, yeni, notu=""):
    d = _yukle()
    b = _bul(d, anahtar)
    if len(b) != 1:
        return coz(anahtar)
    if yeni.upper() not in HALLER:
        print("🔴 hâl '%s' tanınmıyor. Dokuz hâl: %s" % (yeni, " · ".join(HALLER)))
        return 2
    kimlik, k = b[0]
    _gecmise_yaz(k, "hal", yeni.upper(), notu)
    k["hal"], k["hal_zaman"], k["hal_not"] = yeni.upper(), _simdi(), notu
    _kaydet(d)
    print("✓ %s → %s %s  %s" % (k.get("ad"), HALLER[yeni.upper()][0], yeni.upper(), notu))
    return 0


def gecmis(anahtar):
    d = _yukle()
    b = _bul(d, anahtar)
    if len(b) != 1:
        return coz(anahtar)
    kimlik, v = b[0]
    g = v.get("gecmis") or []
    print("%s — %s · %d kayıt" % (v.get("ad"), kimlik, len(g)))
    for x in g:
        print("  %s  %-14s %-12s %s" % (
            x.get("z"), x.get("hal") or "", x.get("kova") or "",
            (x.get("not") or "")[:50]))
    if not g:
        print("  (geçmiş boş — hâl hiç değişmemiş ya da defter yeni)")
    return 0


def hedef(a):
    d = _yukle()
    if a.get("model") and a.get("sayi"):
        d.setdefault("_hedef", {})[a["model"]] = int(a["sayi"])
        _kaydet(d)
        print("✓ hedef: %s = %s" % (a["model"], a["sayi"]))
    hd = d.get("_hedef") or {}
    if not hd:
        print("hedef konmamış. Örnek: defter.py hedef --model opus --sayi 2")
        return 0
    o = d["oturumlar"]
    print("HAZIR KITA HEDEFİ vs GERÇEK")
    for m, n in sorted(hd.items()):
        var = sum(1 for v in o.values()
                  if v.get("kova") == "hazir-kita" and (v.get("model") or "") == m)
        im = "🟢" if var >= n else "🔴"
        print("  %s %-8s hedef %d · hazır kıtada %d" % (im, m, n, var))
    return 0


def eksik():
    d = _yukle()
    o = d["oturumlar"]
    n = 0
    print("DEFTER — %d oturum · EKSİK ALAN" % len(o))
    for kimlik, v in sorted(o.items(), key=lambda x: x[1].get("ad") or ""):
        bos = [al for al in ("ad", "gorev", "model", "hal", "kova") if not v.get(al)]
        if bos:
            n += 1
            print("  %-24s eksik: %s" % ((v.get("ad") or "?")[:24], ", ".join(bos)))
    if not n:
        print("✓ bütün alanlar dolu")
    else:
        print("\n⚠️ MODEL ölçülemez — oturum bildirmeli; UYDURULMAZ.")
    return 0


def cakisma():
    """AYNI ADI taşıyan birden çok KİMLİK var mı — mesaj göndermeden ÖNCE.

    🔴 Doğuran vaka (13-14 Ağustos 2026): iki oturum aynı adı taşıdı; bir
    mesaj 6,5 SAAT yanlış kutuda bekledi ve koordinatör bir işi YANLIŞ
    OTURUMA atfetti — kusuru işçinin kendisi bildirdi.
    📌 `coz` çakışmayı **gönderme anında** yakalar; bu komut **önceden**
    gösterir. Bir tuzağı patladığı an haber vermek, patlamadan haber
    vermekten kat kat pahalıdır.
    ⚠️ Ve çakışmaların çoğu MÜKERRER KAYIT DEĞİL, AD DEVRİDİR: bir oturum
    `OPUS HAZIR KITA 2` iken `VERİ FETRET` olur, boşalan adı ikinci bir
    oturum alır. Kayıtları birleştirme — adla hitap etmeyi bırak.
    """
    d = _yukle()
    o = d["oturumlar"]
    grup = {}
    for kimlik, v in o.items():
        for ad in set([v.get("ad") or ""] + list(v.get("takma_adlar") or [])):
            if ad:
                grup.setdefault(_sade(ad), set()).add(kimlik)
    cak = {a: k for a, k in grup.items() if len(k) > 1}
    if not cak:
        print("✓ ad çakışması yok — %d kayıt, %d ad" % (len(o), len(grup)))
        return 0
    print("🔴 %d AD birden çok kimliğe bağlı — bu adlarla MESAJ GÖNDERME:" % len(cak))
    for ad, kimlikler in sorted(cak.items()):
        print("\n  %s" % ad)
        for kimlik in sorted(kimlikler):
            v = o[kimlik]
            print("    %-46s %-12s %-12s %s" % (
                kimlik[:46], v.get("hal") or "—", v.get("kova") or "—",
                (v.get("gorev") or "—")[:30]))
    print("\n⇒ KİMLİKLE gönder. Ad ne tekildir ne kararlı; kimlik ikisi de.")
    return 1


def tablo(hepsi=False):
    d = _yukle()
    o = d["oturumlar"]
    if not o:
        print("defter BOŞ — `py arac/defter.py tazele`")
        return 0
    # 🔴 VARSAYILAN: yalnız CANLI kadro. Emekliler defterde DURUR (geçmiş
    # bilgidir) ama tabloyu boğmaz — 84 satırın 69'u emekliydi ve canlı
    # 15 kişi arasında kayboluyordu. `--hepsi` ile tamamı görünür.
    emekli = [v for v in o.values() if v.get("hal") == "EMEKLI"]
    canli = {k: v for k, v in o.items() if v.get("hal") != "EMEKLI"}
    gosterilen = o if hepsi else canli
    print("=" * 96)
    print("PERSONEL DEFTERİ — %d canlı%s" % (
        len(canli), "" if hepsi else " (+%d emekli, `--hepsi` ile görünür)" % len(emekli)))
    print("=" * 96)
    sira = list(HALLER)
    for kimlik, v in sorted(gosterilen.items(), key=lambda x: (
            sira.index(x[1]["hal"]) if x[1].get("hal") in HALLER else 99,
            x[1].get("ad") or "")):
        im = HALLER.get(v.get("hal"), ("❔", ""))[0]
        print("%s %-13s %-22s %-8s %-12s %s" % (
            im, v.get("hal") or "—", (v.get("ad") or "?")[:22],
            v.get("model") or "❓", v.get("kova") or "—",
            (v.get("gorev") or "—")[:34]))
    from collections import Counter
    c = Counter(v.get("hal") or "—" for v in gosterilen.values())
    print("-" * 96)
    print(" · ".join("%s %d" % (k, n) for k, n in c.most_common()))
    bek = [v.get("ad") for v in canli.values()
           if v.get("hal") in ("HAZIR", "IS-ISTIYORUM", "BOSTA")]
    if bek:
        print("🟡 İŞ BEKLEYEN: " + ", ".join(a for a in bek if a))
    return 0


def main(argv):
    if not argv:
        return tablo()

    def al(x):
        return argv[argv.index(x) + 1] if (x in argv and argv.index(x) + 1 < len(argv)) else None

    k = argv[0]
    if k == "tazele":
        return tazele()
    if k in ("tablo",):
        return tablo("--hepsi" in argv)
    if k == "coz":
        return coz(argv[1]) if len(argv) > 1 else 2
    if k == "gecmis":
        return gecmis(argv[1]) if len(argv) > 1 else 2
    if k == "eksik":
        return eksik()
    if k == "cakisma":
        return cakisma()
    if k == "olcum":
        if len(argv) < 2:
            print("kullanim: defter.py olcum <list_sessions ciktisi.json>")
            return 2
        return olcum(argv[1])
    if k == "hedef":
        return hedef({"model": al("--model"), "sayi": al("--sayi")})
    if k == "hal":
        if len(argv) < 3:
            print("kullanim: defter.py hal <KİMLİK|AD> <HAL> [--not \"...\"]")
            print("  dokuz hâl: %s" % " · ".join(HALLER))
            return 2
        return hal(argv[1], argv[2], al("--not") or "")
    if k == "kaydet":
        return kaydet({x: al("--" + x) for x in
                       ("kimlik", "ad", "gorev", "sartname", "model",
                        "dosyalar", "kova", "not")})
    print(__doc__)
    return 2


if __name__ == "__main__":
    sys.exit(main(sys.argv[1:]))
