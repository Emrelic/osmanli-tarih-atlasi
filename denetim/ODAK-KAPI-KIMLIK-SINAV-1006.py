# -*- coding: utf-8 -*-
"""ODAK-KAPI-KIMLIK-SINAV-1006 — kimlik listeli odak kapısı İKİ YÖNDE sınanır.

Vakalar `denetim/ODAK-KAPI-KORLUK-1006.md`den (E1–E4): eski SAYI tavanı
dosyalar arası göçü göremiyordu. Bu sınav aynı vakaları yeni kapıya sorar:
  ötmesi GEREKEN  : dosya içi gerileme · 1'e 1 göçle maskelenmiş gerileme ·
                    bozulup yeni dosyaya taşınan madde · çekirdeğe göç ·
                    sayı/liste tutarsızlığı · eski dosyaya odaksız yeni madde
  ötmemesi GEREKEN: taban · dosya değiştiren odaksız madde · dosya değiştiren
                    beyanlı kusur (eski kapının yanlış pozitifi) · yeni dosyada
                    yeni madde (YENİ KAPSAM, bloke etmez) · geri alınmış hâl

🔴 HÜKÜM yalnız `ihlal` bayrağından okunmaz: ötmesi gereken vakada BEKLENEN ✗
   satırı ADIYLA aranır, ötmemesi gerekende HİÇ ✗ olmamalı. Sebep ölçüldü
   (6 Ekim 2026): `devlet_harita_ust.js` kopyalanmayınca HER vaka "ÖLÇÜLEMEDİ"
   ile ötüyordu ve eski sınavın üç "ötmeli" vakası YANLIŞ SEBEPLE geçiyordu.

CANLI DOSYAYA YAZMAZ: `ODAK-KAPI-SINAV.py` deseni — `odak_olc`un `KOK`u ve
`TAVAN_YOL`u geçici köke çevrilir, bozma yalnız kopyada olur. Kirli `data/`
REDDEDİLİR.

    py denetim/ODAK-KAPI-KIMLIK-SINAV-1006.py
Çıkış: 0 hepsi tuttu · 1 en az biri tutmadı · 2 ölçülemedi.

🆕 W57 (Z8, 6 Ekim 2026) — çözücünün evreni TARAYICI oldu (UMIT-W13 O3):
  · Geçici köke `index.html` + `js/` kopyalanır, kalan `data/` SABİT BAĞla
    (hardlink, olmazsa kopya) konur; yazılan dosyalar listede GERÇEK kopyadır.
  · GÖÇMEN dosya artık YENİ bir dosya OLAMAZ: index.html'in yüklemediği dosya
    tarayıcıda YOKTUR, maddesi ölçümden SİLİNİR (göç değil kayıp). GÖÇMEN =
    tarayıcının YÜKLEDİĞİ, tavan evreni DIŞINDAKİ bir `KRONOLOJI_COK_*`
    dosyası; taşınan maddeye kaynağının künyesi `taraflar` olarak verilir ki
    AYNI künye sekmesinde görünmeye devam etsin.
  · `bilinen_kusur` Z8 ile BOŞALDI (Ogaden kapandı). E4/E9 boş listede
    ölçemez ⇒ geçici kökte SENTETİK bir beyanlı kusur kurulur: OLAYLAR
    yolundaki tavan-odaksız bir maddeye çözülmeyen `odak_yer` yazılır ve
    tavanın `bilinen_kusur`una beyan edilir (sekme dalına dokunmaz).
"""
import io
import json
import os
import shutil
import subprocess
import sys
import tempfile
import unicodedata

sys.stdout.reconfigure(encoding="utf-8", errors="replace")
KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(KOK, "arac"))
TAVAN_CANLI = os.path.join(KOK, "denetim", "ODAK-TAVAN.json")
GOCMEN = "kronoloji_cok_1923_1945.js"      # W57: yüklenen, evren DIŞI bir COK dosyası
SAHTE_YER = "Zzz Sinav Yer Z8 1006"
import odak_olc as OO                                        # noqa: E402

ODAK_ALAN = ("yer_id", "odak_yer", "odak_kimlik", "odak_kutu_kaynak", "kapsam_genis")
OKU_JS = ("const fs=require('fs');global.window={};eval(fs.readFileSync(process.argv[1],'utf8'));"
          "const k=Object.keys(window).find(k=>Array.isArray(window[k]));"
          "process.stdout.write(JSON.stringify({ad:k,dizi:window[k]}));")


def kimlik(o):
    return "%s|%s" % (o.get("t"), unicodedata.normalize("NFC", str(o.get("b") or "")).strip())


class Kok:
    """Geçici kök: odak çözücüsünün okuduğu dosyalar + tavan."""

    def __init__(self):
        self.yol = tempfile.mkdtemp(prefix="odak-kimlik-sinav-")
        for alt in ("data", "js", "denetim"):
            os.makedirs(os.path.join(self.yol, alt))
        d = os.path.join(KOK, "data")
        self.kopyalanan = []
        for f in os.listdir(d):
            if f.endswith(".js") and (f.startswith("kronoloji_") or f.startswith("olaylar")
                                      or f in ("devletler.js", "hukuki_sinirlar.js",
                                               "devlet_harita_ust.js")):
                self.kopyalanan.append(os.path.join("data", f))
        self.kopyalanan += [os.path.join("js", "suzgec.js"), os.path.join("denetim", "ODAK-TAVAN.json")]
        if os.path.join("data", GOCMEN) not in self.kopyalanan:
            self.kopyalanan.append(os.path.join("data", GOCMEN))
        self.sentetik = None                   # (dosya, kimlik) — E4/E9 için beyanlı kusur
        # Tarayıcı evreni (W57): index.html + js/ kopya, kalan data/ SABİT BAĞ.
        shutil.copy2(os.path.join(KOK, "index.html"), os.path.join(self.yol, "index.html"))
        for f in os.listdir(os.path.join(KOK, "js")):
            y = os.path.join(KOK, "js", f)
            if os.path.isfile(y):
                shutil.copy2(y, os.path.join(self.yol, "js", f))
        for f in os.listdir(d):
            y, h = os.path.join(d, f), os.path.join(self.yol, "data", f)
            if not os.path.isfile(y) or os.path.join("data", f) in self.kopyalanan:
                continue
            try:
                os.link(y, h)
            except OSError:
                shutil.copy2(y, h)
        self.tazele()

    def tazele(self):
        for r in self.kopyalanan:
            h = os.path.join(self.yol, r)
            if os.path.exists(h):
                os.remove(h)                   # olası bağı KOPARIR, sonra GERÇEK kopya
            shutil.copy2(os.path.join(KOK, r), h)
        if self.sentetik:
            f, k = self.sentetik
            ad, dz, i = self.bul(f, k)
            dz[i]["odak_yer"] = [SAHTE_YER]
            self.yaz(f, ad, dz)
            tv = self.tavan()
            tv["bilinen_kusur"] = [{"k": k, "t": k.split("|")[0], "alan": "odak_yer",
                                    "deger": SAHTE_YER, "niye": "SINAV (sentetik beyan)"}]
            self.tavan_yaz(tv)

    def oku(self, f):
        r = subprocess.run(["node", "-e", OKU_JS, os.path.join(self.yol, "data", f)],
                           capture_output=True, text=True, encoding="utf-8", check=True)
        x = json.loads(r.stdout)
        return x["ad"], x["dizi"]

    def yaz(self, f, ad, dizi):
        io.open(os.path.join(self.yol, "data", f), "w", encoding="utf-8", newline="\n").write(
            "window.%s = %s;\n" % (ad, json.dumps(dizi, ensure_ascii=False, indent=1)))

    def bul(self, f, k):
        ad, dz = self.oku(f)
        for i, o in enumerate(dz):
            if isinstance(o, dict) and kimlik(o) == k:
                return ad, dz, i
        raise LookupError("%s içinde kimlik yok: %s" % (f, k[:60]))

    def tasi(self, f, k, hedef, kunye=None):
        ad, dz, i = self.bul(f, k)
        o = dz.pop(i)
        self.yaz(f, ad, dz)
        if kunye and not o.get("taraflar"):
            o["taraflar"] = [kunye]            # COK dosyası künyeye taraflarla bağlanır
        ad2, dz2 = self.oku(hedef)
        dz2.append(o)
        self.yaz(hedef, ad2, dz2)
        return o

    def tavan(self):
        return json.load(io.open(os.path.join(self.yol, "denetim", "ODAK-TAVAN.json"), encoding="utf-8"))

    def tavan_yaz(self, tv):
        io.open(os.path.join(self.yol, "denetim", "ODAK-TAVAN.json"), "w", encoding="utf-8",
                newline="\n").write(json.dumps(tv, ensure_ascii=False, indent=1) + "\n")


SONUC = {"tuttu": 0, "tutmadi": 0, "atlandi": []}


def sina(ad, bekle, aranan=None):
    """bekle True ⇒ ihlal + `aranan` geçen ✗ satırı · bekle False ⇒ HİÇ ✗ yok."""
    r = OO.kapi_olcumu()
    kirmizi = [s.strip() for s in r["satirlar"] if s.strip().startswith("✗")]
    if bekle:
        ok = r["ihlal"] and any(aranan in s for s in kirmizi)
    else:
        ok = (not r["ihlal"]) and not kirmizi
    SONUC["tuttu" if ok else "tutmadi"] += 1
    print("  %s %-62s ihlal=%-5s (beklenen %s%s)" % (
        "✓" if ok else "🔴 TUTMADI", ad, r["ihlal"], bekle,
        (" · aranan ✗ '%s'" % aranan) if bekle else ""))
    for s in kirmizi:
        print("        " + s[:150])
    for s in r["satirlar"]:
        if s.strip().startswith(("ⓘ  TAŞINDI", "ⓘ  YENİ KAPSAM")):
            print("        " + s.strip()[:150])
    return ok


def main():
    r = subprocess.run(["git", "status", "--short", "--", "data"], cwd=KOK,
                       capture_output=True, text=True, encoding="utf-8", errors="replace")
    if (r.stdout or "").strip():
        print("🔴 `data/` KİRLİ — sınav ÇALIŞMAZ:\n" + r.stdout[:600])
        return 2
    kok = Kok()
    OO.KOK = kok.yol
    OO.TAVAN_YOL = os.path.join(kok.yol, "denetim", "ODAK-TAVAN.json")
    try:
        tv = kok.tavan()
        if "odaksiz_kimlik" not in tv:
            print("🔴 tavan liste biçiminde değil — önce `odak_olc.py --tavan-yaz --ilk-dondurma`")
            return 2
        evren = set(tv["evren"])
        _, kunyeler = kok.oku("devletler.js")
        kid_var = {x.get("id") for x in kunyeler if isinstance(x, dict)}

        def kunye_of(f):
            a = f[len("kronoloji_"):-3]
            for c in (a, a.replace("_", "-")):
                if c in kid_var:
                    return c
            return None
        if not tv.get("bilinen_kusur"):
            # W57: boş beyan listesinde E4/E9 ölçemez ⇒ sentetik beyanlı kusur (geçici kökte)
            sk = next((x for x in tv["odaksiz_kimlik"] if x["d"].startswith("olaylar")), None)
            if sk:
                kok.sentetik = (sk["d"], sk["k"])
                kok.tazele()
                tv = kok.tavan()
        kusur = tv["bilinen_kusur"][0] if tv.get("bilinen_kusur") else None
        kusur_dosya = None
        D = OO.olc()
        if D.get("hata"):
            print("🔴 ÖLÇÜLEMEDİ:", D["hata"])
            return 2
        # ---- adaylar (gerçek veriden, tavanın kendi listelerinden)
        kon = None
        for f in sorted(evren):
            if not f.startswith("kronoloji_") or not kunye_of(f):
                continue
            ad, dz = kok.oku(f)
            if kusur and any(kimlik(o) == kusur["k"] for o in dz if isinstance(o, dict)):
                kusur_dosya = f
            if kon is None:
                for o in dz:
                    if isinstance(o, dict) and isinstance(o.get("yer_kon"), list) \
                            and not any(a in o for a in ODAK_ALAN):
                        kon = (f, kimlik(o))
                        break
        if kok.sentetik:
            kusur_dosya = kok.sentetik[0]
        ods =next(x for x in tv["odaksiz_kimlik"]
                   if x["d"].startswith("kronoloji_") and x["d"] != (kon or ("",))[0]
                   and kunye_of(x["d"]))
        yb = next(x for x in tv["yabanci_beyanli_kimlik"] if x["d"].startswith("kronoloji_"))
        ss = next(x for x in tv["sekme_sessiz_kimlik"] if x["d"].startswith("kronoloji_"))
        kutu = None
        for d in D["dosyalar"]:
            for x in d.get("sekme_kutu") or []:
                if x["kutusuz"] in ("SESSIZ", "SEKME_SESSIZ") and d["dosya"].startswith("kronoloji_"):
                    kutu = (d["dosya"], x["k"])
                    break
            if kutu:
                break
        olay = sorted(f for f in evren if f.startswith("olaylar"))[0]
        # E4 hedefi: kusurun kendi dosyası DIŞINDA bir OLAYLAR dosyası (sekmeye girmesin)
        olay2 = next(f for f in sorted(evren) if f.startswith("olaylar") and f != kusur_dosya
                     and os.path.exists(os.path.join(kok.yol, "data", f)))
        print("=" * 96)
        print("ODAK KAPISI — KİMLİK LİSTESİ · İKİ YÖNLÜ SINAV")
        print("  KONUMLU aday   %s · %s" % (kon[0], kon[1][:50]) if kon else "  KONUMLU aday YOK")
        print("  ODAKSIZ aday   %s · %s" % (ods["d"], ods["k"][:50]))
        print("  KUTU→SESSİZ    %s · %s" % (kutu[0], kutu[1][:50]) if kutu else "  KUTU→SESSİZ aday YOK")
        print("  yabancı BEYANLI %s · %s" % (yb["d"], yb["k"][:50]))
        print("  SESSİZ çift    %s · %s · %s" % (ss["d"], ss["kunye"], ss["k"][:40]))
        print("  bilinen kusur  %s · %s" % (kusur_dosya, kusur["k"][:50] if kusur else None))
        print("=" * 96)

        def odaksizlastir():
            ad, dz, i = kok.bul(kon[0], kon[1])
            dz[i].pop("yer_kon")
            kok.yaz(kon[0], ad, dz)

        def kutusuz():
            ad, dz, i = kok.bul(kutu[0], kutu[1])
            for a in ("odak_yer", "odak_kimlik", "odak_kutu_kaynak"):
                dz[i].pop(a, None)
            kok.yaz(kutu[0], ad, dz)

        vakalar = [
            ("⓿  taban", None, False, None),
            ("E1a dosya içi: KONUMLU → ODAKSIZ", odaksizlastir, True, "ODAKSIZ GERİLEDİ"),
            ("E1b dosya içi: KUTU çiftinin kutusu düştü → SESSİZ", kutusuz, True, "SEKME SESSİZ GERİLEDİ"),
            ("E3b göç: tavandaki ODAKSIZ yeni dosyaya (ötmemeli)",
             lambda: kok.tasi(ods["d"], ods["k"], GOCMEN, kunye_of(ods["d"])), False, None),
            ("E3c 1'e 1 MASKE: E1a + E3b (eski kapı ÖTMÜYORDU)",
             lambda: (odaksizlastir(), kok.tasi(ods["d"], ods["k"], GOCMEN, kunye_of(ods["d"]))),
             True, "ODAKSIZ GERİLEDİ"),
            ("E3a ÇEKİRDEĞE GÖÇ: yabancı BEYANLI → olaylar",
             lambda: kok.tasi(yb["d"], yb["k"], olay), True, "ÇEKİRDEĞE GÖÇ"),
            ("E3e MASKE: E1b + SESSİZ madde olaylar'a (eski kapı ÖTMÜYORDU)",
             lambda: (kutusuz(), kok.tasi(ss["d"], ss["k"], olay)), True, "SEKME SESSİZ GERİLEDİ"),
            ("E4 beyanlı kusur başka dosyaya (eski kapı YANLIŞ ötüyordu)",
             lambda: kok.tasi(kusur_dosya, kusur["k"], olay2), False, None),
            ("E6a yeni madde, evren DIŞI dosya, odaksız → YENİ KAPSAM (ötmemeli)",
             lambda: (lambda a: kok.yaz(GOCMEN, a[0], a[1] + [{
                 "t": "1500-01-01", "b": "Sınav maddesi 1006 (yeni kapsam)",
                 "taraflar": [kunye_of(ods["d"])]}]))(kok.oku(GOCMEN)),
             False, None),
            ("E6b yeni madde, ESKİ dosya, odaksız → gerileme",
             lambda: (lambda a: kok.yaz(kon[0], a[0], a[1] + [{"t": "1500-01-01",
                                                               "b": "Sınav maddesi 1006 (eski dosya)"}]))(
                 kok.oku(kon[0])), True, "ODAKSIZ GERİLEDİ"),
            ("E7 bozulup YENİ dosyaya taşınan madde (evren özeti)",
             # künye: E3b'de görünür kaldığı ölçülen ODAKSIZ adayınınki. Adayın
             # kendi künyesiyle (`iran`) kapı ÖTMEDİ (W57, 6 Ekim) — taşınan madde
             # tarayıcıda görünmüyordu. Sebep ÖLÇÜLMEDİ; hipotez: `KRONOLOJI_IRAN`
             # künyeyi `derinKronolojiBindir` ile ezdiği için COK eklemesi düşüyor.
             lambda: (odaksizlastir(), kok.tasi(kon[0], kon[1], GOCMEN, kunye_of(ods["d"]))),
             True, "ODAKSIZ GERİLEDİ"),
            ("E8 tavan sayısı elle bir eksiltildi (liste aynı)",
             lambda: kok.tavan_yaz(dict(kok.tavan(), odaksiz=tv["odaksiz"] - 1)), True, "tavan TUTARSIZ"),
            ("E9 bilinen_kusur beyandan silindi",
             lambda: kok.tavan_yaz(dict(kok.tavan(), bilinen_kusur=[])), bool(kusur),
             "YENİ ÇÖZÜLMEYEN ODAK ATFI"),
            ("⓾  geri alındı", None, False, None),
        ]
        for ad, hazirla, bekle, aranan in vakalar:
            kok.tazele()
            gerek = {"E1a": kon, "E1b": kutu, "E3c": kon, "E3e": kutu, "E4": kusur_dosya,
                     "E6b": kon, "E7": kon}.get(ad.split()[0], True)
            if not gerek:
                SONUC["atlandi"].append(ad)
                print("  ⚠️ ATLANDI %s — aday yok (ATLANDI ≠ TUTTU)" % ad)
                continue
            if hazirla:
                hazirla()
            sina(ad, bekle, aranan)
    finally:
        OO.KOK = KOK
        OO.TAVAN_YOL = TAVAN_CANLI
        shutil.rmtree(kok.yol, ignore_errors=True)
    print("=" * 96)
    print("SONUÇ: tuttu %d · TUTMADI %d · atlandı %d" % (SONUC["tuttu"], SONUC["tutmadi"],
                                                       len(SONUC["atlandi"])))
    if SONUC["tutmadi"]:
        return 1
    return 2 if SONUC["atlandi"] else 0


if __name__ == "__main__":
    raise SystemExit(main())
