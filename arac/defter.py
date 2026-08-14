# -*- coding: utf-8 -*-
"""PERSONEL DEFTERİ — oturumların kimliği, adı, görevi, şartnamesi, modeli.

🔴 NİÇİN VAR — Emre'nin tasarımı (14 Ağustos 2026):
    "Açılan oturumları oturum ID'si VE ismi ile birlikte tut, mesaj
     göndereceğin zaman ID'ye gönder. O ID'deki oturumun ne oturumu olduğunu,
     adının ne olduğunu, görevinin ne olduğunu, modelinin ne olduğunu bir
     yerde tutup ona göre davranacaksın... Gerekirse bunlar için bir
     PERSONEL DEFTERİ tut. Tablo olarak: hangi oturum ID, ne isim, ne görev,
     ne şartname ve promptları, ne modelleri — hepsi bu defterde yer alsın."

## Doğuran kusur — bir günde ÜÇ ayrı zarar, hepsi AYNI kökten
```
① MESAJ YANLIŞ KUTUDA KALDI, 6,5 SAAT
   Koordinatör `--kime "OPUS HAZIR KITA 2"` yazdı (pencere adı),
   oturum `--kim "VERİ FETRET"` diye okudu (şartname adı).
   Oturumun kendi sözü: "Mesaj KAYBOLMADI, YANLIŞ KUTUYA düştü."
② İKİ AYRI OTURUM AYNI ADI TAŞIDI
   local_d1249b27 ve local_f4d2e275 — ikisi de "OPUS HAZIR KITA 2".
   Koordinatör bir işi YANLIŞ OTURUMA atfetti; işçi düzeltti:
   "M-0045'i BEN YAZMADIM."
③ TEK HARF İKİ OTURUM YAPTI
   local_3fc67368 tahtada hem "YAPI DENETİM 3" hem "YAPI DENETIM 3"
   olarak göründü — Türkçe İ/I.
```
⇒ **Ad ne TEKİLDİR ne KARARLI. UUID ikisi de.**
📌 Ve bunun ötesinde: koordinatör bir oturuma yazarken onun GÖREVİNİ,
ŞARTNAMESİNİ ve MODELİNİ de bilmeli — yoksa her mesajda yeniden ölçer,
ya da (daha kötüsü) hatırladığını sanır.

## Otorite ve kaynaklar
`oturumlar/defter.json` OTORİTEDİR; `oturumlar/DEFTER.md` ondan ÜRETİLİR.
Alanların bir kısmı ÖLÇÜLEREK doldurulur, bir kısmı ELLE:
```
ÖLÇÜLÜR   takma adlar (tahta.json'daki kimden_kimlik) · durum damgası
          (oturumlar/<AD>-ILERLEME.md ilk satırı) · şartname VARLIĞI
ELLE      görev · model · dosya sahipliği
          🔴 MODEL ÖLÇÜLEMEZ: `list_sessions` modeli GÖSTERMEZ.
             Kıta adı taşır ya da oturum kendi bildirir; ölçülmemişse
             "?" yazılır, UYDURULMAZ.
```

Kullanım:
    py arac/defter.py                       tabloyu bas
    py arac/defter.py coz "VERİ FETRET"     ad → UUID (mesaj göndermeden ÖNCE)
    py arac/defter.py kaydet --kimlik local_… --ad "RENK 3" \
        --gorev "beş renk maddesi" --sartname oturumlar/RENK-3.md --model opus
    py arac/defter.py tazele                tahta + damgalardan ÖLÇEREK güncelle
    py arac/defter.py eksik                 alanı boş olanları listele
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

ALANLAR = ["kimlik", "ad", "takma_adlar", "gorev", "sartname", "model",
           "durum", "dosyalar", "acilis", "son_gorulme", "not"]


def _sade(s):
    """Türkçe İ/I dâhil normalleştirme — ③. vakanın çaresi."""
    for a, b in (("İ", "I"), ("ı", "i"), ("Ş", "S"), ("ş", "s"),
                 ("Ğ", "G"), ("ğ", "g"), ("Ü", "U"), ("ü", "u"),
                 ("Ö", "O"), ("ö", "o"), ("Ç", "C"), ("ç", "c")):
        s = s.replace(a, b)
    return " ".join(s.upper().split())


def _yukle():
    if not os.path.exists(VERI):
        return {}
    try:
        return json.load(io.open(VERI, encoding="utf-8"))
    except Exception as e:
        # 🔴 SESSİZ GEÇİLMEZ: bozuk defter, boş defterden KÖTÜDÜR —
        # boş defter "kimse yok" der, bozuk defter YANLIŞ KİŞİYİ gösterir.
        print("🔴 defter.json OKUNAMADI: %s" % e)
        print("   Devam etme, KULLANICIYA söyle.")
        sys.exit(2)


def _kaydet(d):
    os.makedirs(DIZIN, exist_ok=True)
    io.open(VERI, "w", encoding="utf-8", newline="\n").write(
        json.dumps(d, ensure_ascii=False, indent=1, sort_keys=True))
    _gorunum(d)


def _gorunum(d):
    s = ["# 👥 PERSONEL DEFTERİ — oturumlar",
         "",
         "> 🤖 **ÜRETİLMİŞ DOSYA — ELLE DÜZENLEME.** Otorite `defter.json`.",
         "> `py arac/defter.py kaydet …` ile yazılır, `tazele` ile ölçülür.",
         "",
         "🔴 **MESAJ GÖNDERMEDEN ÖNCE:** `py arac/defter.py coz \"<AD>\"` —",
         "adres ADA değil KİMLİĞE bağlanır. Ad ne tekildir ne kararlı;",
         "bir günde üç ayrı zarar bundan doğdu (6,5 saatlik gecikme · yanlış",
         "atıf · tek harf farkı).",
         "",
         "| KİMLİK | AD | GÖREV | ŞARTNAME | MODEL | DURUM | DOSYALARI | TAKMA ADLAR |",
         "|---|---|---|---|---|---|---|---|"]
    for k in sorted(d, key=lambda x: d[x].get("ad") or ""):
        v = d[k]
        ta = [a for a in (v.get("takma_adlar") or []) if _sade(a) != _sade(v.get("ad") or "")]
        s.append("| `%s` | %s | %s | %s | %s | %s | %s | %s |" % (
            k, v.get("ad") or "—", v.get("gorev") or "—",
            v.get("sartname") or "—", v.get("model") or "❓",
            v.get("durum") or "—", v.get("dosyalar") or "—",
            " · ".join(ta) or "—"))
    io.open(GORUNUM, "w", encoding="utf-8", newline="\n").write("\n".join(s) + "\n")


def _tahtadan_adlar():
    """tahta.json'dan kimlik → kullandığı bütün adlar."""
    if not os.path.exists(TAHTA):
        return {}
    try:
        t = json.load(io.open(TAHTA, encoding="utf-8"))
    except Exception:
        return {}
    m = {}
    for x in t:
        k = x.get("kimden_kimlik")
        if k and k.startswith("local_"):
            m.setdefault(k, set()).add(x["kimden"])
    return {k: sorted(v) for k, v in m.items()}


def _damgalar():
    """oturumlar/<AD>-ILERLEME.md ilk satırındaki DURUM damgası."""
    D = re.compile(r"<!--\s*DURUM:\s*([A-ZĞÜŞİÖÇ\-]+)\s*\|\s*([^|]+)\|?", re.I)
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
            m[_sade(ad)] = "%s %s" % (g.group(1).upper(), g.group(2).strip()[-5:])
    return m


def tazele():
    """ÖLÇEREK güncelle — elle girilen alanlara DOKUNMAZ."""
    d = _yukle()
    ta = _tahtadan_adlar()
    dg = _damgalar()
    yeni = guncel = 0
    for kimlik, adlar in ta.items():
        k = d.setdefault(kimlik, {"kimlik": kimlik})
        if "ad" not in k:
            k["ad"] = adlar[0]
            yeni += 1
        eski = set(k.get("takma_adlar") or [])
        k["takma_adlar"] = sorted(eski | set(adlar))
        k["son_gorulme"] = datetime.datetime.now().strftime("%Y-%m-%d %H:%M")
        guncel += 1
    # damgaları eşle — ad ya da takma addan
    for kimlik, k in d.items():
        for a in [k.get("ad")] + list(k.get("takma_adlar") or []):
            if a and _sade(a) in dg:
                k["durum"] = dg[_sade(a)]
                break
    # şartname VARLIĞINI ölç (yolu elle girilmişse doğrula)
    for k in d.values():
        s = k.get("sartname")
        if s and not os.path.exists(os.path.join(KOK, s)):
            k["sartname"] = s + "  🔴 DOSYA YOK"
    _kaydet(d)
    print("tazelendi · yeni kayıt %d · güncellenen %d · toplam %d" % (
        yeni, guncel, len(d)))
    return 0


def coz(ad):
    """🔴 AD → KİMLİK. Mesaj göndermeden ÖNCE çağrılır."""
    d = _yukle()
    s = _sade(ad)
    bulunan = []
    for kimlik, v in d.items():
        adlar = [v.get("ad")] + list(v.get("takma_adlar") or [])
        if any(a and _sade(a) == s for a in adlar):
            bulunan.append((kimlik, v))
    if not bulunan:
        print("🔴 '%s' defterde YOK." % ad)
        print("   ⇒ Kaydet: py arac/defter.py kaydet --kimlik local_… --ad \"%s\" …" % ad)
        print("   ⇒ Ya da ÖLÇ: py arac/defter.py tazele  (tahtaya yazmışsa bulunur)")
        return 1
    if len(bulunan) > 1:
        # 🔴 İKİ OTURUM AYNI ADI TAŞIYOR — ölçülmüş vaka, sessiz geçilmez
        print("🔴 '%s' adını %d OTURUM taşıyor — HANGİSİ olduğunu SEN seç:" % (ad, len(bulunan)))
        for kimlik, v in bulunan:
            print("   %s  görev: %s  durum: %s" % (
                kimlik, v.get("gorev") or "—", v.get("durum") or "—"))
        print("   ⚠️ Bu belirsizlik bir kez bir işin YANLIŞ OTURUMA")
        print("      atfedilmesine yol açtı. Kimlikle gönder, adla değil.")
        return 1
    kimlik, v = bulunan[0]
    print(kimlik)
    print("   ad      : %s" % (v.get("ad") or "—"))
    print("   görev   : %s" % (v.get("gorev") or "—"))
    print("   şartname: %s" % (v.get("sartname") or "—"))
    print("   model   : %s" % (v.get("model") or "❓ ÖLÇÜLMEDİ — uydurma"))
    print("   durum   : %s" % (v.get("durum") or "—"))
    print("   dosyalar: %s" % (v.get("dosyalar") or "—"))
    if v.get("takma_adlar"):
        print("   takma   : %s" % " · ".join(v["takma_adlar"]))
    return 0


def kaydet(a):
    d = _yukle()
    kimlik = a.get("kimlik")
    if not kimlik:
        print("🔴 --kimlik ZORUNLU. Defterin birincil anahtarı KİMLİKTİR, ad değil.")
        return 2
    k = d.setdefault(kimlik, {"kimlik": kimlik,
                              "acilis": datetime.datetime.now().strftime("%Y-%m-%d %H:%M")})
    for alan in ("ad", "gorev", "sartname", "model", "dosyalar", "not"):
        if a.get(alan):
            k[alan] = a[alan]
    if a.get("ad"):
        k["takma_adlar"] = sorted(set(k.get("takma_adlar") or []) | {a["ad"]})
    _kaydet(d)
    print("✓ kaydedildi: %s → %s" % (kimlik, k.get("ad")))
    return 0


def eksik():
    d = _yukle()
    print("=" * 74)
    print("DEFTER — %d oturum · EKSİK ALAN taraması" % len(d))
    print("=" * 74)
    n = 0
    for kimlik, v in sorted(d.items(), key=lambda x: x[1].get("ad") or ""):
        bos = [al for al in ("ad", "gorev", "sartname", "model")
               if not v.get(al)]
        if bos:
            n += 1
            print("  %-24s %s   eksik: %s" % (
                (v.get("ad") or "?")[:24], kimlik, ", ".join(bos)))
    if not n:
        print("✓ bütün oturumların ad · görev · şartname · model alanı DOLU")
    else:
        print("\n⚠️ %d oturumun eksiği var. MODEL ölçülemez — oturumun kendisi" % n)
        print("   bildirmeli ya da kıta adından okunmalı; UYDURULMAZ.")
    return 0


def tablo():
    d = _yukle()
    if not d:
        print("defter BOŞ — `py arac/defter.py tazele` ile ölçerek doldur.")
        return 0
    print("=" * 100)
    print("PERSONEL DEFTERİ — %d oturum" % len(d))
    print("=" * 100)
    print("%-22s %-30s %-8s %s" % ("AD", "GÖREV", "MODEL", "DURUM"))
    for kimlik, v in sorted(d.items(), key=lambda x: x[1].get("ad") or ""):
        print("%-22s %-30s %-8s %s" % (
            (v.get("ad") or "?")[:22], (v.get("gorev") or "—")[:30],
            v.get("model") or "❓", v.get("durum") or "—"))
        print("   %s" % kimlik)
    return 0


def main(argv):
    if not argv:
        return tablo()

    def al(ad):
        return argv[argv.index(ad) + 1] if (ad in argv and argv.index(ad) + 1 < len(argv)) else None

    k = argv[0]
    if k == "tazele":
        return tazele()
    if k == "coz":
        return coz(argv[1]) if len(argv) > 1 else (print("kullanim: defter.py coz \"<AD>\"") or 2)
    if k == "kaydet":
        return kaydet({x: al("--" + x) for x in
                       ("kimlik", "ad", "gorev", "sartname", "model", "dosyalar", "not")})
    if k == "eksik":
        return eksik()
    if k == "tablo":
        return tablo()
    print(__doc__)
    return 2


if __name__ == "__main__":
    sys.exit(main(sys.argv[1:]))
