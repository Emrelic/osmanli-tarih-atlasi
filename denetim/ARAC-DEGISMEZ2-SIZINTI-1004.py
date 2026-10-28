# -*- coding: utf-8 -*-
"""DEĞİŞMEZ 2 SIZINTI ÖLÇÜSÜ (1004) — "atlastan üretilmiş liste maddeleri kapıyı taşıyor mu?"

SORU: `Aynı tarihte … haritaya katılan/tâbi katmana geçen diğer yerleşimler: A, B, C` biçimli
liste maddeleri (D260: atlasın KENDİ kırılmalarından üretilmiş, sonra "haritaya" kelimesi silinmiş)
Değişmez 2 evreninden ÇIKARILSA kaç kırılma AÇIK düşer? Fark 0 ise liste ekleri kapıyı taşımıyor;
fark > 0 ise kapı, denetlediği şeyden TÜRETİLMİŞ veriyle kendini temiz ilan ediyor demektir.

YÖNTEM — `denetle.py` DEĞİŞTİRİLMEZ, YAZILMAZ, kopyalanmaz: modül İÇE ALINIR (yalnız okunur) ve
kendi `degismez2()`si iki kez çağrılır. VERİ SİLİNMEZ: maddeler diskten çıkarılmaz, evren BELLEKTE süzülür.
  (A) bütün maddelerle      (B) liste maddeleri HARİÇ        FARK = B'de AÇILAN kırılmalar
Aynı `Y_cekirdek`, aynı `olaylari_yukle()` evreni (olaylar*.js + kronoloji_sinir*.js), kategoriler
denetle.main()'in kullandığı gibi: 2 (d,v) · 2s (s, yer_şartlı) · 2i (isg).
⚠️ 2s için `acik_ham` (denetle.main'in kapsam-dışı/borç ayıklamasından ÖNCEki ham liste) kıyaslanır.

LİSTE MADDESİ — İKİ ÖLÇÜT, AYRI SAYILIR (ikisinin birden/yalnız biri):
  (a) KALIP   `d` metni "Aynı tarihte/gün … : <virgüllü liste>" biçimi (kalıp, gösterilen regex)
  (b) İZ      `ic_not_d` alanı "eski ifade" içeriyor (kayıt kendi kökenini yazmış: "…HARİTAYA katılan…")
  Ana ölçüm BİRLEŞİM (a∪b) üzerinde; ayrıca yalnız-a, yalnız-b ve kesişim (a∩b) AYRI koşulur.

🔴 İKİ AYRI SORU (ikisi de ölçülür, KARIŞTIRILMAZ):
  ① MADDE ÇIKARILDI (literal soru)   liste maddesi evrenden TÜMDEN çıkar. Ama bu maddelerin çoğu
      GERÇEK olaylardır ("Trabzon'un fethi"): kendi olayının kırılmasını meşru kapatırlar ve listeyi
      sonradan `d`ye eklenmiş taşırlar. Bu yüzden ① tek başına "sızıntı"yı ŞİŞİRİR. Açılan her kırılma
      ayrıca ÖZ (çıkarılan maddenin kendi yeri o kırılmanın yerleşimleri arasında) / DİĞER
      (hiçbirinin yeri değil: yalnız tarih yakınlığı) diye sınıflanır.
  ② LİSTE METNİ SİLİNDİ (madde kalır)  yalnız `d`deki "Aynı tarihte … : A, B, C" cümlesi silinir,
      madde, başlığı ve yer_id'si yerinde. Bu, LİSTENİN KENDİSİNİN taşıdığı yükü ölçer. Değişmez 2'nin
      d/v/isg kolları `d` metnini OKUMAZ (yalnız yer_id ve tarih) ⇒ orada ② sıfır çıkması YAPISALDIR;
      `d` metni yalnız 2s'de (yer_şartı) okunur ⇒ listenin gerçek sızıntısı 2s'dedir.

KIRILMA ADIYLA LİSTELENİR (sayı değil üyelik): gün · tip · ad(lar) · o kırılmayı ±30 günde kapatan
hariç tutulan liste maddeleri. `--json YOL` hepsini yazar.

ÇIKIŞ KODU  0 fark 0 ("liste ekleri kapıyı taşımıyor" — bu da bir SONUÇTUR)
            1 fark > 0 (sızıntı var)         2 ÖLÇÜLEMEDİ (denetle yüklenemedi, 0 liste maddesi bulundu ...)
⚠️ Beklenti ölçümü yönlendirmez: 0 da, >0 da raporlanır. 0 liste maddesi bulunursa bu "sızıntı yok"
   DEĞİL ölçülemedi sayılır (kalıp çürümüş olabilir).

KULLANIM
  py denetim/ARAC-DEGISMEZ2-SIZINTI-1004.py                ana ölçüm + kırılma listesi
  py denetim/ARAC-DEGISMEZ2-SIZINTI-1004.py --json YOL
  --kok DİZİN   (sınav için küçültülmüş ağaç)
"""
import contextlib, io, json, os, re, sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import krono_ortak_1004 as ko

KALIP = re.compile(r"[Aa]ynı\s+(?:tarih|gün)\w*[^:.]{0,160}:\s*[^.]{3,}")
KATEGORILER = (("2 (d,v)", ("d", "v"), False), ("2s (s)", ("s",), True), ("2i (isg)", ("isg",), False))


def _denetle_yukle(kok):
    """denetle.py'yi içe al (yalnız oku), veri yolunu kok'a çevir → (denetle, Y_cekirdek, O)."""
    arac = os.path.join(ko.KOK_VARSAYILAN, "arac")
    sys.path.insert(0, arac)
    veri = os.path.join(kok, "data")
    try:
        # denetle içe alınırken stdout kodlaması OKUNUR (None olan StringIO'da çöker): önce gerçek stdout
        import denetle, girdi
        with contextlib.redirect_stdout(io.StringIO()):
            girdi.DATA = veri
            denetle.DATA = veri
            Y = denetle.yerlesimleri_yukle()
            O = denetle.olaylari_yukle()
    except SystemExit as e:
        raise ko.Olculemedi("denetle okunamadı: %s" % e)
    except Exception as e:                          # noqa
        raise ko.Olculemedi("denetle okunamadı: %s: %s" % (type(e).__name__, e))
    if not Y or not O:
        raise ko.Olculemedi("0 yerleşim / 0 madde — sessiz sıfır yasak")
    Y_cek = [y for y in Y if y.get("_kaynak") not in denetle.KUYRUK_DOSYALARI]
    if not Y_cek:
        raise ko.Olculemedi("Y_cekirdek boş")
    return denetle, Y_cek, O


def liste_kumeleri(O):
    """→ (a, b) — O içindeki liste maddelerinin indeks kümeleri."""
    a = {i for i, o in enumerate(O) if KALIP.search(o.get("d") or "")}
    b = {i for i, o in enumerate(O) if "eski ifade" in (o.get("ic_not_d") or "").lower()}
    return a, b


def _kos(denetle, Y, O, kat, yer_sarti):
    # 🔴 denetle.degismez2 (2s yolu) devletler.js okur; eksikse SystemExit("!! devletler.js bulunamadı")
    #    fırlatır ve Python onu ÇIKIŞ KODU 1'e çevirirdi — yani "sızıntı var" sanılırdı. Yakala → ölçülemedi.
    try:
        with contextlib.redirect_stdout(io.StringIO()):
            kir, acik = denetle.degismez2(Y, O, kat, yer_sarti=yer_sarti)
    except SystemExit as e:
        raise ko.Olculemedi("degismez2 durdu: %s" % e)
    except Exception as e:                          # noqa
        raise ko.Olculemedi("degismez2 çöktü: %s: %s" % (type(e).__name__, e))
    return kir, {a[0]: a for a in acik}


def olc(kok):
    denetle, Y, O = _denetle_yukle(kok)
    a, b = liste_kumeleri(O)
    if not (a | b):
        raise ko.Olculemedi("hiç liste maddesi bulunamadı (kalıp çürümüş olabilir) — 'sızıntı yok' DEĞİL")
    varyant = [("BİRLEŞİM a∪b", a | b, False), ("yalnız (a) kalıp", a, False), ("yalnız (b) iz", b, False),
               ("KESİŞİM a∩b", a & b, False), ("LİSTE METNİ SİLİNDİ", a, True)]
    sonuc = {"n": len(O), "a": len(a), "b": len(b), "ab": len(a & b), "a_yalniz": len(a - b), "b_yalniz": len(b - a),
             "birlesim": len(a | b), "kategoriler": {}}
    for ad, kat, ys in KATEGORILER:
        kir, acik_A = _kos(denetle, Y, O, kat, ys)
        kayit = {"kirilma": len(kir), "acik_A": len(acik_A), "varyant": {}}
        for vad, hariç, metin_sil in varyant:
            if metin_sil:
                O_b = [dict(o, d=KALIP.sub("", o.get("d") or "")) if i in hariç else o for i, o in enumerate(O)]
            else:
                O_b = [o for i, o in enumerate(O) if i not in hariç]
            kir_b, acik_B = _kos(denetle, Y, O_b, kat, ys)
            yeni = sorted(set(acik_B) - set(acik_A))
            kapanan = sorted(set(acik_A) - set(acik_B))      # monotonluk bozulursa görünür
            detay, oz = [], 0
            for d in yeni:
                g = denetle.gun_no(d)
                kapatan = [{"t": O[i]["t"], "b": (O[i].get("b") or "")[:70], "yer_id": O[i].get("yer_id") or O[i].get("yer") or ""}
                           for i in sorted(hariç) if abs(denetle.gun_no(O[i]["t"]) - g) <= 30]
                oz_mu = any(x["yer_id"] in kir_b[d]["ad"] for x in kapatan)
                oz += oz_mu
                detay.append({"gun": d, "tip": kir_b[d]["t"], "adet_yerlesim": len(kir_b[d]["ad"]),
                              "ornek": sorted(kir_b[d]["ad"])[:4], "kapatan_liste_maddeleri": kapatan, "oz_kapanis": oz_mu})
            kayit["varyant"][vad] = {"hariç": len(hariç), "kirilma_B": len(kir_b), "acik_B": len(acik_B),
                                     "fark": len(yeni), "oz": oz, "diger": len(yeni) - oz, "kapanan": kapanan, "yeni": detay,
                                     "metin_sil": metin_sil}
        sonuc["kategoriler"][ad] = kayit
    return sonuc


def main(argv):
    try:
        kok = ko.kok_al(argv)
        s = olc(kok)
        print("DEĞİŞMEZ 2 SIZINTI — %d madde (denetle evreni)" % s["n"])
        print("  liste maddesi: (a) kalıp %d · (b) iz %d · ikisi birden %d · yalnız (a) %d · yalnız (b) %d · birleşim %d" %
              (s["a"], s["b"], s["ab"], s["a_yalniz"], s["b_yalniz"], s["birlesim"]))
        print("  %-10s %9s %8s | %-22s %6s %7s %6s %5s %6s" % ("kapı", "kırılma", "açık(A)", "B varyantı", "hariç", "açık(B)", "FARK", "ÖZ", "DİĞER"))
        ana_fark, metin_fark = 0, 0
        for ad, k in s["kategoriler"].items():
            for vad, v in k["varyant"].items():
                ilk = vad.startswith("BİRLEŞİM")
                print("  %-10s %9s %8s | %-22s %6d %7d %6d %5s %6s" % (
                    ad if ilk else "", k["kirilma"] if ilk else "", k["acik_A"] if ilk else "", vad,
                    v["hariç"], v["acik_B"], v["fark"],
                    "-" if v["metin_sil"] else v["oz"], "-" if v["metin_sil"] else v["diger"]))
                if v["kapanan"]:
                    print("      ⚠ monotonluk bozuldu: B'de KAPANAN %d kırılma (beklenmez): %s" % (len(v["kapanan"]), v["kapanan"][:5]))
            ana_fark += k["varyant"]["BİRLEŞİM a∪b"]["fark"]
            metin_fark += k["varyant"]["LİSTE METNİ SİLİNDİ"]["fark"]
        print("  ► ① MADDE ÇIKARILDI (literal, birleşim; üç kapının toplamı): %d açılan kırılma" % ana_fark)
        print("  ► ② LİSTE METNİ SİLİNDİ (madde kalır; üç kapının toplamı): %d açılan kırılma" % metin_fark)
        print("    ÖZ = çıkarılan maddenin KENDİ yeri o kırılmanın yerleşimleri arasında (meşru, kendi olayı); DİĞER = yalnız tarih yakınlığı")
        for ad, k in s["kategoriler"].items():
            v = k["varyant"]["BİRLEŞİM a∪b"]
            print("  --- %s: ① madde çıkarılınca AÇILAN %d kırılma (ÖZ %d · DİĞER %d; A'da %d açıktı) ---" % (ad, v["fark"], v["oz"], v["diger"], k["acik_A"]))
            for r in v["yeni"][:60]:
                kap = "; ".join("%s %s" % (x["t"], x["b"][:40]) for x in r["kapatan_liste_maddeleri"][:2])
                print("      %s %-7s %3d yerleşim (%s) %s| kapatan liste maddesi: %s" % (
                    r["gun"], r["tip"], r["adet_yerlesim"], ", ".join(r["ornek"])[:44], "ÖZ " if r["oz_kapanis"] else "DİĞER ", kap or "—"))
            if len(v["yeni"]) > 60:
                print("      … %d satır daha (--json)" % (len(v["yeni"]) - 60))
            vm = k["varyant"]["LİSTE METNİ SİLİNDİ"]
            print("  --- %s: ② liste METNİ silinince AÇILAN %d kırılma ---" % (ad, vm["fark"]))
            for r in vm["yeni"][:60]:
                print("      %s %-7s %3d yerleşim (%s)" % (r["gun"], r["tip"], r["adet_yerlesim"], ", ".join(r["ornek"])[:60]))
        if "--json" in argv:
            yol = argv[argv.index("--json") + 1]
            with io.open(yol, "w", encoding="utf-8") as f:
                json.dump(s, f, ensure_ascii=False, indent=1)
            print("  JSON yazıldı: " + yol)
        if ana_fark == 0 and metin_fark == 0:
            print("SONUÇ: fark 0 — liste ekleri kapıyı TAŞIMIYOR (bir sonuçtur). Çıkış kodu 0")
            return 0
        print("SONUÇ: SIZINTI VAR — ① madde çıkarılınca %d, ② yalnız liste metni silinince %d kırılma açılıyor. Çıkış kodu 1"
              % (ana_fark, metin_fark))
        return 1
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
