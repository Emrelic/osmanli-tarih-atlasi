# -*- coding: utf-8 -*-
"""ARAC-ODAK-SEKME-SINAV-1006 — O1 · O2 · O3 (UMIT-W13-ODAK-SEKME-1006) İKİ YÖNDE.

`arac/odak_cozum.js`in üç yeni davranışını GERÇEK maddelerle sınar:
    O1  `sekmeDali` — devlet sekmesinin (`maddeAc`) kamera dalı
    O2  havuz = app.js `AD_KONUM` (metinle kesilmiş, kopya değil)
    O3  evren = tarayıcı; kesim işareti yoksa ÇIKIŞ 2 (ölçülemedi)

## ÖNGÖRÜ — ölçümden ÖNCE yazıldı (5 Ekim 2026, W13)
Vaka listesi `denetim/ODAK-OLC-KOR-NOKTA-1005.md §6`dan. Tek sapma: Ö3
raporda `SEKME_GOVDE` bekleniyordu; burada `SEKME_OKUNMAYAN`
(`govde_odak_kurulmadi`) beklenir — odak YAZILMIŞ ve etkisiz olduğu için
donmuş sayıya girmeli, yoksa `gi` kusuru tavanda görünmez.

    Ö1 ötmeli   bizans 1040 Petar Delyan (`odak_yer`, kapsam_genis yok)  → OKUNMAYAN · kipirdamaz_odak
    Ö2 ötmeli   memluk 1516-08-24 Mercidâbık (`yer_kon`, yer_id yok)      → OKUNMAYAN · kipirdamaz_yer_kon
    Ö3 ötmeli   sentetik kapsam_genis + odak_kimlik eflak/bogdan/erdel    → OKUNMAYAN · govde_odak_kurulmadi
                1594-10-05 (ham `m` → 0 yerleşim)                         VE siniflandir KUTULU (eski aletin YANLIŞ TEMİZİ)
    Ö4 ötmeli   canlı KİMLİK tavanı; C dalına `odak_yer`li yeni madde      → kapı ✗ "SEKME OKUNMAYAN GERİLEDİ"
    Ö5 ötmeli   app.js kesim işareti bozuk (kopyada)                        → node ÇIKIŞ 2, "ÖLÇÜLEMEDİ"
    Ö6 ötmeli   etiket→kaynak haritasında bir etiket eksik                  → kapı ihlal ("ÖLÇEMEDİ")
    N1 ötmemeli rusya 1877-04-24 93 Harbi                                   → SEKME_KUTU
    N2 ötmemeli 0831-09-12 Palermo (`yer_id` çözülür)                       → SEKME_NOKTA
    N3 ötmemeli dogu_afrika 1897 `yer_id:"Ogaden"`                          → kusur YOK (eskiden YANLIŞ KİRLİ)
    N4 ötmemeli Ö4'ün tavanı, veri dokunulmamış                             → SEKME satırında ✗ YOK
    N5 tutarlılık  sekme dalları toplamı = SEKME evreni; OKUNMAYAN = alt kırılımlar toplamı

🆕 W57 (6 Ekim 2026) — KIRIM-ODAK-A-1006 ile birleşim, İKİ YÖNDE (öngörü KIRIM-ODAK-A
raporundan: Kırım 12 → TABI_KUTU, kalan 1 = 1792 künye bitişi sonrası):
    A1 ötmemeli kırım 1476-07-01 Eminek Mirza (gövde yok, tâbi yerleşim var) → SEKME_TABI_KUTU
    A2 ötmeli   kırım 1792-01-01 Yaş sonrası (künye bitti, tâbi yerleşim yok) → SEKME_SESSIZ

## 🆕 1006b — SEKME_SESSIZ (gövde dalında `devletiYay` boş döner). ÖNGÖRÜ, koddan ÖNCE:
    53 = 52 sahnede değil + 1 harita kaydı yok · GÖVDE 355 → 302 · öteki dallar aynı.
    S1 ötmeli   iran 1555-01-01 "halı" (`harita:` o gün çizilmiyor)          → SESSIZ · sahnede_degil
    S2 ötmeli   evfat 1350-01-01 Ömerî'nin yedi emirliği (dogu_afrika)       → SESSIZ · harita_kaydi_yok
                (W57: W13'ün poni 1405 vakası veride DÜZELDİ — `odak_yer:["Brunei"]`,
                 kapsam_genis yok ⇒ artık OKUNMAYAN; aynı nedenin bugünkü örneği alındı)
    S3 ötmeli   sentetik akkoyunlu 1800-01-01 kapsam_genis, odak yok        → SESSIZ
    S4 ötmemeli aynı sentetik 1470-01-01 (Akkoyunlu sahnede)                → GOVDE
    S5 ötmeli   canlı KİMLİK tavanı; S3 eklenir                            → kapı ✗ "SEKME SESSİZ GERİLEDİ"
    S6 ötmemeli aynı tavan, veri dokunulmamış                               → SESSIZ satırında ✗ YOK
    N5b         SESSIZ = sessiz nedenleri toplamı

## 🆕 1006c — gövde taklidi ↔ GERÇEK `devletiYay` (`yay_dogrula`). ÖNGÖRÜ, ölçümden ÖNCE:
    S7a ötmemeli  gerçek veri: geometri boş 0 · uyuşmazlık 0 · çapraz toplamı = gövde yolu
    S7b ötmeli    `devlet_harita_ust.js`te akkoyunlu'nun 1470'i kapsayan dönemi `"g":[]`
                  yapılır + sentetik akkoyunlu 1470 kapsam_genis maddesi ⇒ taklit "gövde var"
                  der, gerçek `devletiYay` boş döner ⇒ `ucuncu_return`te SINAV-W13 görünür

## 🆕 1006d — D265 durum satırı. ÖNGÖRÜ, ölçümden ÖNCE:
    S8a  kapı bayraksız  → satırlarda "KOŞULMADI (--yay-dogrula kapalı)" VAR, "KOŞULDU" YOK
    S8b  kapı bayraklı   → "KOŞULDU: 0 geometri-boş · 0 uyuşmazlık" VAR, "KOŞULMADI" YOK
    S8c  iki hâlde `ihlal` aynı (satır hükmü değiştirmez)

## NE YAPMAZ
Veriyi kalıcı değiştirmez: `data/kronoloji_akkoyunlu.js`e yazar, `git checkout --`
ile geri alır; `ODAK-TAVAN.json`u geri yazar. `data/` kirliyse ÇALIŞMAZ.
🆕 W57 (Z8): Ö4/N4/S5/S6 artık tavana SAYI YAZMAZ — kapı W39d'den beri
KİMLİK LİSTESİ karşılaştırır (`ODAK-KAPI-KIMLIK-1006`); sayı yazmak "tavan
TUTARSIZ" ile yanlış sebeple öterdi. Canlı tavan bugünün listesidir (Z8 ile
aynı commit'te iner); sentetik madde listede olmadığı için GERİLEME olarak öter.

    py denetim/ARAC-ODAK-SEKME-SINAV-1006.py
"""
import io
import json
import os
import subprocess
import sys
import tempfile

sys.stdout.reconfigure(encoding="utf-8", errors="replace")
KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(KOK, "arac"))
import odak_olc as OO                                        # noqa: E402

TAVAN = os.path.join(KOK, "denetim", "ODAK-TAVAN.json")
KURBAN = "kronoloji_akkoyunlu.js"
KURBAN_BAS = "window.KRONOLOJI_AKKOYUNLU = ["
gecti, kaldi = 0, 0


def hukum(ad, ok, ayrinti=""):
    global gecti, kaldi
    print("  %s %-62s %s" % ("✓" if ok else "🔴 BAŞARISIZ", ad, ayrinti))
    if ok:
        gecti += 1
    else:
        kaldi += 1


def node(ek=None, sor=None, app_js=None, yay=False):
    g = {"kok": KOK.replace("\\", "/"),
         "etiket_kaynak": ek if ek is not None else OO.etiket_kaynak(),
         "disk": OO.disk_dosyalari()}
    if sor:
        g["sor"] = sor
    if app_js:
        g["app_js"] = app_js
    if yay:
        g["yay_dogrula"] = True
    fd, yol = tempfile.mkstemp(suffix=".json")
    os.close(fd)
    try:
        io.open(yol, "w", encoding="utf-8").write(json.dumps(g, ensure_ascii=False))
        r = subprocess.run(["node", OO.COZUCU, yol], capture_output=True, text=True,
                           encoding="utf-8", errors="replace")
    finally:
        os.unlink(yol)
    try:
        return r.returncode, json.loads(r.stdout)
    except Exception:                                        # noqa: BLE001
        return r.returncode, {"hata": "ayrıştırılamadı: " + (r.stdout or r.stderr)[:200]}


def tek(cevap, dosya=None):
    c = [x for x in cevap["cevap"] if dosya is None or x["dosya"] == dosya]
    return c[0] if c else None


def git_temiz():
    r = subprocess.run(["git", "status", "--short", "--", "data"], cwd=KOK,
                       capture_output=True, text=True, encoding="utf-8")
    return not r.stdout.strip(), r.stdout.strip()


def kurbana_ekle(satir):
    y = os.path.join(KOK, "data", KURBAN)
    ham = io.open(y, encoding="utf-8", newline="").read()
    assert ham.count(KURBAN_BAS) == 1, "kurban dizisi bulunamadı"
    io.open(y, "w", encoding="utf-8", newline="").write(
        ham.replace(KURBAN_BAS, KURBAN_BAS + "\n" + satir, 1))


GOVDE_DOSYA = "devlet_harita_ust.js"


def geri_al():
    for f in (KURBAN, GOVDE_DOSYA):
        subprocess.run(["git", "checkout", "--", "data/" + f], cwd=KOK,
                       capture_output=True, text=True)


def govde_bosalt(kimlik, gun):
    """`DEVLET_HARITA`da `kimlik`in `gun`ü kapsayan dönemini `"g":[]` yapar."""
    import re
    y = os.path.join(KOK, "data", GOVDE_DOSYA)
    ham = io.open(y, encoding="utf-8", newline="").read()
    i = ham.find('"id":"%s"' % kimlik)
    assert i >= 0 and ham.count('"id":"%s"' % kimlik) == 1, "kimlik tek değil"
    j = ham.find('"id":', i + 5)
    seg = ham[i:j]
    for mm in re.finditer(r'\{"f":"([^"]+)","t":"([^"]+)","g":\[[^\]]*\]', seg):
        if mm.group(1) <= gun < mm.group(2):
            yeni = seg[:mm.start()] + '{"f":"%s","t":"%s","g":[]' % (mm.group(1), mm.group(2)) + seg[mm.end():]
            io.open(y, "w", encoding="utf-8", newline="").write(ham[:i] + yeni + ham[j:])
            return mm.group(1) + "→" + mm.group(2)
    raise AssertionError("dönem bulunamadı")


def main():
    temiz, kirli = git_temiz()
    if not temiz:
        print("🔴 data/ KİRLİ — sınav ÇALIŞMAZ:\n" + kirli[:600])
        return 2
    ilk_tavan = io.open(TAVAN, encoding="utf-8").read()
    try:
        # ---- birim vakalar: tek koşu, soru kancası
        print("① GERÇEK MADDELER (Ö1 Ö2 N1 N2 N3) + tutarlılık (N5)")
        sor = [{"t": "1040-01-01", "b": "Petar Delyan"},
               {"t": "1516-08-24", "b": "Mercidâbık"},
               {"t": "1877-04-24", "b": "93 Harbi"},
               {"t": "0831-09-12", "b": "Palermo"},
               {"t": "1897-01-01", "b": "Somali-Habeşistan sınırını"},
               {"t": "1476-07-01", "b": "Eminek Mirza"},
               {"t": "1792-01-01", "b": "Antlaşması sonrası Osmanlı, Kırım"}]
        rc, D = node(sor=sor)
        if D.get("hata"):
            hukum("taban koşusu", False, D["hata"])
            return 1
        s = D["soru"]
        x = tek(s[0])
        hukum("Ö1 Petar Delyan → OKUNMAYAN/kipirdamaz_odak",
              bool(x) and x["sekme"] == {"dal": "SEKME_OKUNMAYAN", "alt": "kipirdamaz_odak"},
              json.dumps(x and x["sekme"], ensure_ascii=False))
        x = tek(s[1], "kronoloji_memluk.js")
        hukum("Ö2 Mercidâbık → OKUNMAYAN/kipirdamaz_yer_kon",
              bool(x) and x["sekme"] == {"dal": "SEKME_OKUNMAYAN", "alt": "kipirdamaz_yer_kon"},
              json.dumps(x and x["sekme"], ensure_ascii=False))
        x = tek(s[2], "kronoloji_rusya.js")
        hukum("N1 93 Harbi (rusya) → SEKME_KUTU",
              bool(x) and (x["sekme"] or {}).get("dal") == "SEKME_KUTU",
              json.dumps(x and x["sekme"], ensure_ascii=False))
        x = tek(s[3])
        hukum("N2 Palermo → SEKME_NOKTA",
              bool(x) and (x["sekme"] or {}).get("dal") == "SEKME_NOKTA",
              json.dumps(x and x["sekme"], ensure_ascii=False))
        x = tek(s[4], "kronoloji_dogu_afrika.js")
        hukum("N3 Ogaden → kusur YOK (AD_KONUM çözüyor)",
              bool(x) and x["kusur"] == [], json.dumps(x and x["kusur"], ensure_ascii=False))
        x = tek(s[5], "kronoloji_kirim.js")
        hukum("A1 Kırım 1476 (tâbi çizili) → SEKME_TABI_KUTU",
              bool(x) and (x["sekme"] or {}).get("dal") == "SEKME_TABI_KUTU",
              json.dumps(x and x["sekme"], ensure_ascii=False))
        x = tek(s[6], "kronoloji_kirim.js")
        hukum("A2 Kırım 1792 (künye sonrası) → SEKME_SESSIZ",
              bool(x) and (x["sekme"] or {}).get("dal") == "SEKME_SESSIZ",
              json.dumps(x and x["sekme"], ensure_ascii=False))
        S = OO.sekme_ozet(D)
        ev = D["evren_sayi"]
        hukum("N5 sekme dalları toplamı = SEKME evreni",
              sum(S.values()) == ev["SEKME"], "%d = %d" % (sum(S.values()), ev["SEKME"]))
        hukum("N5 OKUNMAYAN = alt kırılımlar toplamı",
              S["SEKME_OKUNMAYAN"] == sum(D["sekme_alt"].values()),
              "%d = %s" % (S["SEKME_OKUNMAYAN"], D["sekme_alt"]))
        hukum("N5b SESSIZ = sessiz nedenleri toplamı",
              S["SEKME_SESSIZ"] == sum((D.get("sekme_sessiz_neden") or {}).values()),
              "%d = %s" % (S["SEKME_SESSIZ"], D.get("sekme_sessiz_neden")))
        bugun = S["SEKME_OKUNMAYAN"]
        bugun_sessiz = S["SEKME_SESSIZ"]

        # ---- 1006b: SEKME_SESSIZ
        print("\n①b SESSİZ DURUŞ (S1–S4)")
        rc, Ds = node(sor=[{"t": "1555-01-01", "b": "halı ve ipek"},
                           {"t": "1350-01-01", "b": "kaydettiği yedi müslüman emirlik"}])
        x = tek(Ds["soru"][0]) if not Ds.get("hata") else None
        hukum("S1 iran 1555 halı → SESSIZ/sahnede_degil",
              bool(x) and x["sekme"] == {"dal": "SEKME_SESSIZ", "neden": "sahnede_degil"},
              json.dumps(x and x["sekme"], ensure_ascii=False))
        x = tek(Ds["soru"][1], "kronoloji_dogu_afrika.js") if not Ds.get("hata") else None
        hukum("S2 evfat 1350 → SESSIZ/harita_kaydi_yok",
              bool(x) and x["sekme"] == {"dal": "SEKME_SESSIZ", "neden": "harita_kaydi_yok"},
              json.dumps(x and x["sekme"], ensure_ascii=False))
        for gun, bekle, ad in (("1800-01-01", "SEKME_SESSIZ", "S3 sentetik akkoyunlu 1800 → SESSIZ"),
                               ("1470-01-01", "SEKME_GOVDE", "S4 sentetik akkoyunlu 1470 → GOVDE (ötmemeli)")):
            kurbana_ekle('{ t:"%s", b:"SINAV-W13 sessiz %s", kapsam_genis:true },' % (gun, gun))
            rc, Dx = node(sor=[{"t": gun, "b": "SINAV-W13 sessiz"}])
            geri_al()
            x = tek(Dx["soru"][0]) if not Dx.get("hata") else None
            hukum(ad, bool(x) and (x["sekme"] or {}).get("dal") == bekle,
                  json.dumps(x and x["sekme"], ensure_ascii=False))

        # ---- Ö3: gi kusuru
        print("\n② Ö3 — sentetik `odak_kimlik` (ham `m` ile çözülemez)")
        kurbana_ekle('{ t:"1594-10-05", b:"SINAV-W13 sentetik odak_kimlik", kapsam_genis:true, '
                     'odak_kimlik:["eflak","bogdan","erdel"] },')
        rc, D3 = node(sor=[{"t": "1594-10-05", "b": "SINAV-W13 sentetik"}])
        geri_al()
        x = tek(D3["soru"][0]) if not D3.get("hata") else None
        hukum("Ö3 sekme → OKUNMAYAN/govde_odak_kurulmadi",
              bool(x) and (x["sekme"] or {}).get("dal") == "SEKME_OKUNMAYAN"
              and x["sekme"].get("alt") == "govde_odak_kurulmadi",
              json.dumps(x and x["sekme"], ensure_ascii=False))
        hukum("Ö3 siniflandir → KUTULU (doğru gün çözer; eski aletin yanlış temizi)",
              bool(x) and x["sinif"] == "KUTULU" and x["kusur"] == [],
              "sinif=%s kusur=%s" % (x and x["sinif"], x and x["kusur"]))

        # ---- Ö4 / N4: tavan
        print("\n③ Ö4 / N4 — SEKME OKUNMAYAN kimlik tavanı (canlı, bugünkü değer %d)" % bugun)
        r = OO.kapi_olcumu()
        sek = [l for l in r["satirlar"] if "SEKME OKUNMAYAN" in l]
        hukum("N4 dokunulmamış veri → SEKME satırında ✗ yok",
              bool(sek) and not any(l.strip().startswith("✗") for l in sek), " | ".join(sek))
        kurbana_ekle('{ t:"1500-01-01", b:"SINAV-W13 C dalı odak_yer", odak_yer:["İstanbul"] },')
        r = OO.kapi_olcumu()
        geri_al()
        sek = [l for l in r["satirlar"] if "SEKME OKUNMAYAN" in l]
        hukum("Ö4 C dalına odak_yer → kapı ✗ GERİLEDİ",
              r["ihlal"] and any("SEKME OKUNMAYAN GERİLEDİ" in l for l in sek), " | ".join(sek))

        # ---- S5 / S6: SEKME_SESSIZ tavanı
        print("\n③b S5 / S6 — SEKME SESSİZ kimlik tavanı (canlı, bugünkü değer %d)" % bugun_sessiz)
        r = OO.kapi_olcumu()
        sek = [l for l in r["satirlar"] if "SEKME SESSİZ" in l]
        hukum("S6 dokunulmamış veri → SESSIZ satırında ✗ yok",
              bool(sek) and not any(l.strip().startswith("✗") for l in sek), " | ".join(sek))
        kurbana_ekle('{ t:"1800-01-01", b:"SINAV-W13 sessiz gerileme", kapsam_genis:true },')
        r = OO.kapi_olcumu()
        geri_al()
        sek = [l for l in r["satirlar"] if "SEKME SESSİZ" in l]
        hukum("S5 sessiz madde eklendi → kapı ✗ GERİLEDİ",
              r["ihlal"] and any("SEKME SESSİZ GERİLEDİ" in l for l in sek), " | ".join(sek))

        # ---- S7: gövde taklidi ↔ gerçek devletiYay (1006c)
        print("\n③c S7 — gövde taklidi ↔ GERÇEK `devletiYay` (pahalı: tam havuz)")
        rc, Dy = node(yay=True)
        yd = Dy.get("yay_dogrulama") or {}
        cap = yd.get("capraz") or {}
        S_ = OO.sekme_ozet(Dy) if not Dy.get("hata") else {}
        govde_yolu = (S_.get("SEKME_GOVDE", 0) + S_.get("SEKME_SESSIZ", 0)
                      + S_.get("SEKME_TABI_KUTU", 0)                 # W57: A geri düşüşü de gövde yolundan geçer
                      + sum(v for k, v in (Dy.get("sekme_alt") or {}).items() if k.startswith("govde_")))
        hukum("S7a gerçek veri: geometri boş 0 · uyuşmazlık 0 · toplam = gövde yolu",
              bool(yd) and not yd["ucuncu_return"] and not yd["uyusmazlik"]
              and sum(cap.values()) == govde_yolu,
              "%s · gövde yolu %d · %s" % (cap, govde_yolu, Dy.get("hata") or ""))
        donem = govde_bosalt("akkoyunlu", "1470-01-01")
        kurbana_ekle('{ t:"1470-01-01", b:"SINAV-W13 bos geometri", kapsam_genis:true },')
        rc, Dy2 = node(yay=True, sor=[{"t": "1470-01-01", "b": "SINAV-W13 bos geometri"}])
        geri_al()
        yd2 = Dy2.get("yay_dogrulama") or {}
        hukum("S7b akkoyunlu %s g:[] → geometri boş YAKALANDI" % donem,
              any("SINAV-W13 bos geometri" in x for x in yd2.get("ucuncu_return") or []),
              "ucuncu_return=%s %s" % ((yd2.get("ucuncu_return") or [])[:3], Dy2.get("hata") or ""))
        x = tek(Dy2["soru"][0]) if not Dy2.get("hata") else None
        hukum("S7b' aynı madde taklitte GOVDE (kapının bilinçli kör noktası, belgeli)",
              bool(x) and (x["sekme"] or {}).get("dal") == "SEKME_GOVDE",
              json.dumps(x and x["sekme"], ensure_ascii=False))

        # ---- S8: D265 durum satırı (1006d)
        print("\n③d S8 — geometri-boş doğrulamasının DURUM satırı (D265)")
        r0 = OO.kapi_olcumu()
        r1 = OO.kapi_olcumu(yay_dogrula=True)
        k0 = [l for l in r0["satirlar"] if "geometri-boş doğrulaması" in l]
        k1 = [l for l in r1["satirlar"] if "geometri-boş doğrulaması" in l]
        hukum("S8a bayraksız → KOŞULMADI var, KOŞULDU yok",
              len(k0) == 1 and "KOŞULMADI (--yay-dogrula kapalı)" in k0[0] and "KOŞULDU" not in k0[0],
              " | ".join(k0))
        hukum("S8b bayraklı → KOŞULDU: 0 · 0 var, KOŞULMADI yok",
              len(k1) == 1 and "KOŞULDU: 0 geometri-boş · 0 uyuşmazlık" in k1[0] and "KOŞULMADI" not in k1[0],
              " | ".join(k1))
        hukum("S8c iki hâlde ihlal aynı", r0["ihlal"] == r1["ihlal"],
              "%s / %s" % (r0["ihlal"], r1["ihlal"]))

        # ---- Ö5 / Ö6: ölçülemedi
        print("\n④ Ö5 / Ö6 — ÖLÇÜLEMEDİ asla temiz değil")
        app = io.open(os.path.join(KOK, "js", "app.js"), encoding="utf-8").read()
        assert app.count("function maddeOdakKutusu(o)") == 1
        fd, bozuk = tempfile.mkstemp(suffix=".js")
        os.close(fd)
        try:
            io.open(bozuk, "w", encoding="utf-8").write(
                app.replace("function maddeOdakKutusu(o)", "function maddeOdakKutusuX(o)"))
            rc, D5 = node(app_js=bozuk)
        finally:
            os.unlink(bozuk)
        hukum("Ö5 kesim işareti yok → çıkış 2 + ÖLÇÜLEMEDİ",
              rc == 2 and "ÖLÇÜLEMEDİ" in (D5.get("hata") or ""), "rc=%d %s" % (rc, D5.get("hata")))
        asil = OO.etiket_kaynak
        try:
            def eksik():
                h = asil()
                h.pop(sorted(k for k in h if k.startswith("data/paket_"))[0])
                return h
            OO.etiket_kaynak = eksik
            r = OO.kapi_olcumu()
        finally:
            OO.etiket_kaynak = asil
        hukum("Ö6 etiket haritası eksik → kapı ihlal (ÖLÇEMEDİ)",
              r["ihlal"] and any("ÖLÇEMEDİ" in l for l in r["satirlar"]), " | ".join(r["satirlar"])[:140])
    finally:
        io.open(TAVAN, "w", encoding="utf-8", newline="\n").write(ilk_tavan)
        geri_al()

    temiz2, kirli2 = git_temiz()
    print("\nSONUÇ: geçen %d · BAŞARISIZ %d · geri alma: %s"
          % (gecti, kaldi, "✓ data/ temiz" if temiz2 else "🔴 KİRLİ: " + kirli2[:300]))
    return 0 if (kaldi == 0 and temiz2) else 1


if __name__ == "__main__":
    raise SystemExit(main())
