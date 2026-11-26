# -*- coding: utf-8 -*-
"""DEĞİŞMEZ 2 YER KÖRLÜĞÜ ÖLÇÜSÜ (1004) — kırılmayı kapatan madde o YERİ anıyor mu?

CLAUDE.md §1: "bir madde okunduğunda haritada TAM O DEĞİŞİM görünmeli." Değişmez 2 (d,v ve isg
kolları) bir kırılmayı, ±30 gün içinde HERHANGİ bir madde varsa kapalı sayar; madde kırılan yeri
anmasa bile (`denetle.degismez2`: `esli` boşsa en yakın herhangi madde kapatır). Bu araç o körlüğü
ÖLÇER, düzeltmez. 🔴 Değişmez 2'nin "0 açık"ını ÇÜRÜTMEZ, AYRIŞTIRIR: değişmez SORDUĞU soruyu
("±30 günde madde var mı") doğru ölçüyor; ama sorduğu soru "o madde o yeri anlatıyor mu"dan
ZAYIF. "Değişmez bozuk" cümlesi yanlıştır; "daha zayıf bir şey ölçüyor" doğrudur.

KIRILMA EVRENİ ve `±30 gün` — `denetle.degismez2()`nin KENDİ çıktısı (kırılma günü ∪ tip, aynı
Y_cekirdek, aynı `olaylari_yukle()` evreni). Kapılar: `2 (d,v)` ve `2i (isg)`. 2s ZATEN yer/taraf
şartlıdır (yer_sarti=True), bu araca girmez.

ÜÇ KOVA — her kırılma TAM BİRİNE düşer, biri ötekini gizlemez:
  YER EŞLİ  ±30 gün içinde kırılan yerleşimlerden BİRİNİ anan madde var
  YER KÖRÜ  ±30 gün içinde madde var ama hiçbiri kırılan yerleşimlerden birini anmıyor
  AÇIK      ±30 gün içinde madde yok (Değişmez 2'nin kendi açığı)

🔴 "YERİ ANIYOR" ÖLÇÜTÜ (kırılmanın yerleşim kümesinden EN AZ BİRİ; kanıt derecesi ayrı sayılır):
  K1  `yer_id` ya da `yer` alanı yerleşim adının TA KENDİSİ — `denetle.degismez2`nin `esli`siyle
      AYNI tanım (bugünkü "477" bu). Madde yer bildiriyor, eşleşme tam.
  K2  maddenin BAŞLIĞI ya da `yer` metni yerleşim adını anıyor. Ad: parantezli ad iki aday verir
      (`Behramkale (Assos)` → `behramkale`, `assos`); en az 3 harf; kelime sınırı ile (ardından harf
      gelirse eşleşmez; `Trabzon'un` eşleşir, `Trabzonlular` eşleşmez — tırnak/boşluk sınırdır).
  K3  yalnız GÖVDE (`d`) metni anıyor — ZAYIF kanıt (gövdede geçmek maddenin O yeri anlattığı
      anlamına gelmez: bir sefer maddesi yolda geçilen onlarca yeri sayar). K3 YER KÖRÜ SAYILIR,
      ayrı alt sayaçta gösterilir.
  YER EŞLİ = K1 ∪ K2. Yalnız K1 sayısı ayrıca basılır (koordinatörün ilk ölçümüyle karşılaştırma).
  🔴 NORMALLEŞTİRME: `denetim/ARAC-NORMAL-0903.py` `norm()` (D215 — `"İ".lower()` iki kod noktası
      verir, `denetle._madde_yeri_aniyor`un `.lower()`i `İZNİK`i `iznik` ile eşleştiremez).
  Bilinen sınırlar (gizlenmez): ad varyantları (`Diyarbekir` ↔ `Diyarbakır`) eşleşmez, sözlük işidir;
  ek almış ad (`Trabzona`) eşleşmez; K1 `yer` alanı serbest metinse (`Söğüt / Bilecik`) tam eşleşme
  aramaz — o madde K2'ye düşer.

ÇIKIŞ KODU  0 YER KÖRÜ ∪ AÇIK kümesinin her üyesi üyelik defterinde · 1 defterde olmayan üye girdi ·
            2 ÖLÇÜLEMEDİ. Kapı DEĞİL ölçümdür; yayın kapısına BAĞLANMAZ (bağlama kararı koordinatörün).
🔴 TAVAN ÜYELİKTİR, SAYI DEĞİL (D259): satır `kapı¦KOVA¦gün¦tip¦yer` (yer = ilk 3 yerleşim adı,
   alfabetik, fazlası `+N`). Aynı sayıda üye takası ÖTER. Kırılmaya yeni yerleşim eklenirse anahtar
   değişir ve yeni üye sayılır (kasıtlı: kör bir kırılmanın kapsamı büyüdü).

KULLANIM
  py denetim/ARAC-DEGISMEZ2-YERKORU-1004.py                 ölç, kapıyı uygula
  py denetim/ARAC-DEGISMEZ2-YERKORU-1004.py --liste         YER KÖRÜ kırılmalarını adıyla yaz
  py denetim/ARAC-DEGISMEZ2-YERKORU-1004.py --defter-yaz    defteri bugünkü KÖR+AÇIK'a ayarla (ELLE ONAY işi)
  --kok DİZİN (sınav kopyası)   --defter YOL
"""
import importlib.util, os, re, sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import krono_ortak_1004 as ko

DEFTER = os.path.join(os.path.dirname(os.path.abspath(__file__)), "ARAC-DEGISMEZ2-YERKORU-1004.defter.txt")
KAPILAR = (("2 (d,v)", ("d", "v")), ("2i (isg)", ("isg",)))
PENCERE_GUN = 30


def _norm_yukle():
    yol = os.path.join(os.path.dirname(os.path.abspath(__file__)), "ARAC-NORMAL-0903.py")
    if not os.path.exists(yol):
        raise ko.Olculemedi("normalleştirici yok: %s" % yol)
    sp = importlib.util.spec_from_file_location("normal0903", yol)
    m = importlib.util.module_from_spec(sp)
    sp.loader.exec_module(m)
    return m.norm


def adaylar(ad, norm):
    """Yerleşim adından arama adayları (normalleşmiş, ≥3 harf): kök ve parantez içi."""
    kok = re.sub(r"\s*\(.*?\)", "", ad or "").strip()
    out = [kok]
    out += re.findall(r"\((.*?)\)", ad or "")
    return sorted({norm(x) for x in out if len(norm(x)) >= 3})


def anar(metin_norm, aday_listesi):
    return any(re.search(r"(?<![a-z0-9])" + re.escape(a) + r"(?![a-z0-9])", metin_norm) for a in aday_listesi)


def yer_etiketi(adlar):
    a = sorted(adlar)
    return ", ".join(a[:3]) + (" +%d" % (len(a) - 3) if len(a) > 3 else "")


def olc(kok):
    norm = _norm_yukle()
    denetle, Y, O = ko.denetle_yukle(kok)
    import contextlib, io
    ol = []
    for o in O:
        ol.append({"g": denetle.gun_no(o["t"]), "b": o.get("b") or "", "yer_id": o.get("yer_id") or "",
                   "yer": o.get("yer") or "", "ham_yer": o.get("yer_id") or o.get("yer") or "",
                   "nb": norm((o.get("b") or "") + " " + (o.get("yer") or "")), "nd": norm(o.get("d") or ""), "t": o["t"]})
    sonuc = {}
    for kapi, kat in KAPILAR:
        try:
            with contextlib.redirect_stdout(io.StringIO()):
                kir, _ = denetle.degismez2(Y, O, kat)
        except SystemExit as e:
            raise ko.Olculemedi("degismez2 durdu: %s" % e)
        except Exception as e:                      # noqa
            raise ko.Olculemedi("degismez2 çöktü: %s: %s" % (type(e).__name__, e))
        say = {"EŞLİ_K1": 0, "EŞLİ_K2": 0, "KÖR_K3": 0, "KÖR": 0, "AÇIK": 0}
        kayitlar = []
        for d in sorted(kir):
            g = denetle.gun_no(d)
            adlar = kir[d]["ad"]
            ad_aday = {a: adaylar(a, norm) for a in adlar}
            yakin = [o for o in ol if abs(o["g"] - g) <= PENCERE_GUN]
            if not yakin:
                kova, alt = "AÇIK", "AÇIK"
                en = None
            else:
                k1 = [o for o in yakin if o["ham_yer"] and o["ham_yer"] in adlar]
                k2 = [o for o in yakin if any(anar(o["nb"], c) for c in ad_aday.values())]
                k3 = [o for o in yakin if any(anar(o["nd"], c) for c in ad_aday.values())]
                if k1:
                    kova, alt, en = "YER EŞLİ", "EŞLİ_K1", k1[0]
                elif k2:
                    kova, alt, en = "YER EŞLİ", "EŞLİ_K2", k2[0]
                elif k3:
                    kova, alt, en = "YER KÖRÜ", "KÖR_K3", min(yakin, key=lambda o: abs(o["g"] - g))
                else:
                    kova, alt, en = "YER KÖRÜ", "KÖR", min(yakin, key=lambda o: abs(o["g"] - g))
            say[alt] += 1
            kayitlar.append({"gun": d, "tip": kir[d]["t"], "kova": kova, "alt": alt, "adlar": sorted(adlar),
                             "en_yakin": ({"t": en["t"], "b": en["b"][:70], "yer": en["ham_yer"]} if en else None),
                             "anahtar": "%s¦%s¦%s¦%s¦%s" % (kapi, kova, d, kir[d]["t"], yer_etiketi(adlar))})
        sonuc[kapi] = {"kirilma": len(kir), "say": say, "kayit": kayitlar}
    return sonuc


def main(argv):
    try:
        kok = ko.kok_al(argv)
        defter_yolu = argv[argv.index("--defter") + 1] if "--defter" in argv else DEFTER
        s = olc(kok)
        print("DEĞİŞMEZ 2 YER KÖRLÜĞÜ — ±%d gün · 'yeri anıyor' ölçütü K1 (yer_id/yer tam) ∪ K2 (başlık/yer metni, norm) · K3 gövde = zayıf" % PENCERE_GUN)
        print("  %-9s %9s | %-18s %-8s %-8s | %-18s %-8s %-8s | %5s" %
              ("kapı", "kırılma", "YER EŞLİ", "K1", "yalnız K2", "YER KÖRÜ", "K3", "hiç yok", "AÇIK"))
        for kapi, k in s.items():
            c = k["say"]
            print("  %-9s %9d | %-18d %-8d %-8d | %-18d %-8d %-8d | %5d" % (
                kapi, k["kirilma"], c["EŞLİ_K1"] + c["EŞLİ_K2"], c["EŞLİ_K1"], c["EŞLİ_K2"],
                c["KÖR_K3"] + c["KÖR"], c["KÖR_K3"], c["KÖR"], c["AÇIK"]))
        print("  i yalnız K1'e bakılırsa (denetle'nin `esli`si): YER KÖRÜ = KÖR + K3 + yalnız-K2")
        for kapi, k in s.items():
            c = k["say"]
            print("    %-9s yalnız-K1 ölçütüyle: eşli %d · kör %d · açık %d" %
                  (kapi, c["EŞLİ_K1"], c["EŞLİ_K2"] + c["KÖR_K3"] + c["KÖR"], c["AÇIK"]))
        if "--liste" in argv:
            for kapi, k in s.items():
                print("  --- %s YER KÖRÜ / AÇIK kırılmalar ---" % kapi)
                for r in k["kayit"]:
                    if r["kova"] == "YER EŞLİ":
                        continue
                    en = r["en_yakin"]
                    print("    %s %-7s %-9s %-40s | en yakın madde: %s" % (
                        r["gun"], r["tip"], r["alt"], yer_etiketi(r["adlar"])[:40],
                        ("%s [%s] %s" % (en["t"], en["yer"], en["b"][:50])) if en else "—"))
        uyeler = {r["anahtar"] for k in s.values() for r in k["kayit"] if r["kova"] != "YER EŞLİ"}
        if "--defter-yaz" in argv:
            ko.defter_yaz(defter_yolu, uyeler,
                          "DEĞİŞMEZ 2 YER KÖRLÜĞÜ — YER KÖRÜ + AÇIK ÜYELİK DEFTERİ (tavan = üyelik, sayı değil)\n"
                          "Satır: kapı¦KOVA¦gün¦tip¦yer. 'Defterde var' ≠ 'incelendi ve kabul edildi'.\n"
                          "Bu araç yayın kapısına BAĞLI DEĞİL; defter bugünkü gerçekliğin tavanıdır.")
            print("  defter yazıldı: %s (%d üye)" % (defter_yolu, len(uyeler)))
            return 0
        tavan = ko.defter_oku(defter_yolu)
        yeni = sorted(uyeler - tavan)
        dusen = len(tavan - uyeler)
        if dusen:
            print("  i defterde olup artık kör/açık olmayan %d üye (iyi haber — defteri daralt)" % dusen)
        if yeni:
            print("🔴 YENİ YER KÖRÜ / AÇIK — defterde olmayan %d:" % len(yeni))
            for u in yeni[:40]:
                print("     " + u)
            print("SONUÇ: yeni yer körü kırılma, çıkış kodu 1")
            return 1
        print("SONUÇ: temiz — kör+açık %d, hepsi defterde. Çıkış kodu 0" % len(uyeler))
        return 0
    except ko.Olculemedi as e:
        print("🔴 ÖLÇÜLEMEDİ — %s" % e)
        print("   'ölçülemedi' ≠ 'yok' ≠ 'temiz' (CLAUDE.md §11). Çıkış kodu 2")
        return 2


if __name__ == "__main__":
    try:
        sys.stdout.reconfigure(encoding="utf-8")
    except Exception:                                   # noqa
        pass
    sys.exit(ko.ortam_sar(main, sys.argv[1:]))
