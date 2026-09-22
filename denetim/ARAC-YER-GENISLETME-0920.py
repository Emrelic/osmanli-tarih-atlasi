# -*- coding: utf-8 -*-
"""EKOKUMA-SIMGE-0070 · M-4727 — "madde `yer` alanını genişletme" işinin ÖLÇÜM aleti.

NE YAPAR: Değişmez 2s'in AÇIK kırılmalarını, 1.MURAT'ın tarif ettiği sınıfa göre ayırır:
  ① KISMEN AÇIKLANMIŞ — pencerede olayı anlatan madde VAR (başlık/taraf tutuyor),
     yalnız `yer` alanı kırılan yerleşimi anmıyor ⇒ ÇARE: `yer` alanını genişlet.
  ② MADDE YOK — pencerede alâkalı hiçbir madde yok ⇒ ÇARE: yeni madde (AYRI iş).

Neden ayrı alet: `denetle.py --ayrinti` açık satırını en çok 4 yerleşimle kısaltıyor ve
hangi maddenin aday olduğunu tek satırda veriyor; yama yazmak için EKSİK YERLEŞİMİN TAMAMI
ve ADAY MADDENİN dosya/satırı gerekiyor.

KULLANIM:  py denetim/ARAC-YER-GENISLETME-0920.py [--json <yol>] [--en <sayi>]
"""
import sys, os, io, re, json, glob

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(KOK, "arac"))
sys.stdout.reconfigure(encoding="utf-8")
os.chdir(KOK)
import denetle  # noqa: E402


def madde_konumlari():
    """b: dizgesi → (dosya, satır) — yamayı hangi dosyada yazacağımı bilmek için."""
    konum = {}
    for yol in sorted(glob.glob(os.path.join("data", "olaylar*.js")) +
                      glob.glob(os.path.join("data", "kronoloji*.js"))):
        for i, satir in enumerate(io.open(yol, encoding="utf-8"), 1):
            for m in re.finditer(r'b:"((?:[^"\\]|\\.)*)"', satir):
                b = m.group(1).replace('\\"', '"')
                konum.setdefault(b, (os.path.basename(yol), i))
    return konum


def _taraf_maddesi_var_mi(O, gd, taraflar):
    """Pencerede (±30 gün) kırılmanın TARAFLARINDAN birini ANAN madde var mı?

    🔴 AYIRT EDİCİ SORU BU. Bütün açık satırlarda 'en yakın madde' vardır (yoksa satır
    zaten Değişmez 2'nin kendi kolunda açılırdı); mesele o maddenin OLAYI anlatıp
    anlatmadığı. Taraf adı geçiyorsa olay anlatılıyor demektir ve çare `yer` alanını
    (ya da kapsam beyanını) genişletmektir; hiç geçmiyorsa çare YENİ MADDEdir.
    """
    for o in O:
        if abs(denetle.gun_no(o["t"]) - gd) > 30:
            continue
        nrm = denetle._2s_norm(" ".join([o.get("b") or "", o.get("yer") or "", o.get("d") or ""]))
        for sid in taraflar:
            if not sid:
                continue
            if any(denetle._2s_gecer(nrm, a) for a in denetle._2s_taraf_adaylari(sid)):
                return o.get("b") or ""
    return ""


def toplu_olc(Y, O, kir, acik, esik=11):
    """--toplu (M-4733, 1.MURAT'ın sevk maddesi 1): 11+ yerleşimli satırların kaçı
    GERÇEKTEN tek olayın toplu sonucu, kaçı ayrı olayların aynı güne yığılması?

    ÖLÇÜT (keyfî değil, iki sayıya indirgendi):
      ① TARAF TEKLİĞİ — yerleşimlerin (eski→yeni) sahip çiftleri kaç ayrı değer alıyor.
         Tek çift = tek devir; çok çift = aynı güne yığılmış ayrı devirler.
      ② COĞRAFÎ YAYILIM — açıkta kalan noktaların en uzak ikilisi kaç km.
         Tek olay bir coğrafyada olur; 6000 km'lik yayılım tek olay değildir.
    """
    ix = {y["ad"]: y for y in Y}
    cikti = []
    for d, tip, _gos, baslik, fark in acik:
        eksik = kir[d].get("eksik") or sorted(kir[d]["ad"])
        if len(eksik) < esik:
            continue
        ciftler = {}
        for ad in eksik:
            s = kir[d]["sahip"].get(ad, {})
            ciftler[(s.get("eski", ""), s.get("yeni", ""))] = ciftler.get(
                (s.get("eski", ""), s.get("yeni", "")), 0) + 1
        noktalar = [ix[a] for a in eksik if a in ix and ix[a].get("k") is not None]
        yayilim = 0.0
        for i in range(len(noktalar)):
            for j in range(i + 1, len(noktalar)):
                yayilim = max(yayilim, denetle._km(noktalar[i], noktalar[j]))
        taraflar = set()
        for ad in eksik:
            s = kir[d]["sahip"].get(ad, {})
            taraflar.add(s.get("eski", "")); taraflar.add(s.get("yeni", ""))
        cikti.append({"taraf_maddesi": _taraf_maddesi_var_mi(O, denetle.gun_no(d), taraflar),
                      "eksik": eksik,
                      "tarih": d, "n": len(eksik), "cift": len(ciftler),
                      "en_cok_cift": max(ciftler.values()) if ciftler else 0,
                      "yayilim_km": round(yayilim), "baslik": baslik,
                      "ciftler": sorted(((("%s→%s" % (a or "—", b or "—")), n)
                                         for (a, b), n in ciftler.items()),
                                        key=lambda x: -x[1])[:4]})
    cikti.sort(key=lambda c: -c["n"])
    return cikti


def main():
    en = 999
    jsonyol = None
    toplu = "--toplu" in sys.argv
    for i, a in enumerate(sys.argv):
        if a == "--en": en = int(sys.argv[i + 1])
        if a == "--json": jsonyol = sys.argv[i + 1]

    Y = denetle.yerlesimleri_yukle()
    O = denetle.olaylari_yukle()
    konum = madde_konumlari()
    print("yerleşim: %d · madde: %d · b→konum: %d" % (len(Y), len(O), len(konum)))

    # denetle.py'nin kendi 2s hesabı — açık listesi ORADAN gelir (ikinci ölçüt yazmıyorum)
    # 🔴 VE İKİ SÜZGECİ DE ONDAN ALIYORUM: ham açık 1360, raporun konuştuğu sayı 187.
    #    Farkı ilk koşuda gördüm — ham listenin başında 471 yerleşimlik Rusya 1917 ve
    #    130 yerleşimlik Kanada 1867 duruyordu; ikisi de KAPSAM DIŞI (Osmanlı küresine
    #    2014 km'den uzak), yani "maddesi yazılmamış" değil "maddesi bu kronolojide
    #    OLAMAZ". Süzgeçsiz çalışmak, işi 7 kat büyük ve YANLIŞ gösterirdi.
    # 🔴 ÜÇÜNCÜ FARK: denetle.py Değişmez 2'yi ÇEKİRDEK yerleşimlerle kuruyor
    #    (`KUYRUK_DOSYALARI` hariç). Bunu atlayınca 278 açık çıkıyordu, raporun
    #    sayısı 187'dir — fark kuyruk dosyalarıdır, kusur değil KAPSAM.
    Y_cekirdek = [y for y in Y if y.get("_kaynak") not in denetle.KUYRUK_DOSYALARI]
    kir, acik_ham = denetle.degismez2(Y_cekirdek, O, kategoriler=("s",), yer_sarti=True)
    acik_kapsam, disi = denetle.kapsam_disi(Y, acik_ham)
    yil_borc, acik = denetle.yil_temsili_ayir(acik_kapsam)
    print("s: kırılma günü: %d · ham açık: %d → KAPSAM DIŞI %d · YIL-TEMSİLÎ BORÇ %d "
          "· GÜN-HASSAS AÇIK: %d" % (len(kir), len(acik_ham), len(disi), len(yil_borc), len(acik)))

    if "--sinif" in sys.argv:
        # BÜTÜN açık satırlar için ①/② sınıfı (M-4736'nın yanıtı: 1-3 kovasının verimi)
        sat = toplu_olc(Y, O, kir, acik, esik=1)
        kova = {}
        for c in sat:
            n = c["n"]
            k = "1-3" if n <= 3 else ("4-10" if n <= 10 else ("11-30" if n <= 30 else "31+"))
            kova.setdefault(k, [0, 0])
            kova[k][0 if c["taraf_maddesi"] else 1] += 1
        print("\nSINIF DAĞILIMI — ① = pencerede tarafları anan madde VAR (yer/kapsam işi)")
        print("                 ② = YOK (yeni madde işi)")
        print("%-8s %6s %6s %6s" % ("kova", "①", "②", "toplam"))
        for k in ("1-3", "4-10", "11-30", "31+"):
            a, b = kova.get(k, [0, 0])
            print("%-8s %6d %6d %6d" % (k, a, b, a + b))
        t1 = sum(v[0] for v in kova.values()); t2 = sum(v[1] for v in kova.values())
        print("%-8s %6d %6d %6d" % ("TOPLAM", t1, t2, t1 + t2))
        # ÖNCELİK LİSTESİ: 1-3 kovasının ① satırları — `yer` genişletmenin gerçek adayları
        oncelik = [c for c in sat if c["n"] <= 3 and c["taraf_maddesi"]]
        print("\nÖNCELİK — 1-3 kovasında ① satırlar (%d):" % len(oncelik))
        for c in sorted(oncelik, key=lambda x: x["tarih"]):
            print("  %s  (%d)  eksik: %-38s | tarafları anan: %s"
                  % (c["tarih"], c["n"], ", ".join(c["eksik"])[:38], c["taraf_maddesi"][:55]))
        return

    if toplu:
        sat = toplu_olc(Y, O, kir, acik)
        tek = [c for c in sat if c["cift"] == 1]
        anlatan = [c for c in sat if c["taraf_maddesi"]]
        print("\n11+ YERLEŞİMLİ AÇIK SATIR: %d" % len(sat))
        print("  ① taraf çifti TEK (tek devir): %d · çok çiftli: %d" % (len(tek), len(sat) - len(tek)))
        print("  ② pencerede TARAFLARI anan madde VAR: %d  ⇒ çare `yer`/kapsam beyanı" % len(anlatan))
        print("     pencerede tarafları anan madde YOK: %d  ⇒ çare YENİ MADDE (ayrı iş)"
              % (len(sat) - len(anlatan)))
        print("\n%-12s %4s %4s %8s %s" % ("tarih", "n", "çift", "yayılım", "sınıf / tarafları anan madde"))
        for c in sat:
            sinif = "① yer/kapsam" if c["taraf_maddesi"] else "② MADDE YOK"
            print("%-12s %4d %4d %7dkm %s" % (c["tarih"], c["n"], c["cift"], c["yayilim_km"], sinif))
            print("%29s en yakın: %s" % ("", c["baslik"][:62]))
            if c["taraf_maddesi"]:
                print("%29s tarafları anan: %s" % ("", c["taraf_maddesi"][:62]))
            print("%29s devir: %s" % ("", " · ".join("%s (%d)" % (k, n) for k, n in c["ciftler"])))
        return

    ol = [{"g": denetle.gun_no(o["t"]), "b": o.get("b") or "", "t": o.get("t"),
           "yer": o.get("yer") or "", "yer_id": o.get("yer_id") or "",
           "d": (o.get("d") or "")[:160]} for o in O]

    KAPSAM = 2014  # km — denetle.py'nin "KAPSAM DIŞI" ölçütüyle aynı fikir
    satirlar = []
    for d, tip, gosterilecek, enb, fark in acik:
        gd = denetle.gun_no(d)
        eksik = kir[d].get("eksik") or sorted(kir[d]["ad"])
        yakin = [o for o in ol if abs(o["g"] - gd) <= 30]
        # aday madde: pencerede olan, eksik yerleşimlerin SAHİPLERİNDEN birini
        # başlığında ya da gövdesinde anan madde (yani olayı anlatan madde)
        sahip = kir[d]["sahip"]
        taraflar = set()
        for ad in eksik:
            for k in ("eski", "yeni"):
                if sahip.get(ad, {}).get(k):
                    taraflar.add(sahip[ad][k])
        satirlar.append({
            "tarih": d, "tip": tip, "eksik": eksik, "taraf": sorted(taraflar),
            "adaylar": [{"t": o["t"], "b": o["b"], "yer": o["yer"], "yer_id": o["yer_id"],
                         "gun_farki": o["g"] - gd,
                         "dosya": konum.get(o["b"], ("?", 0))[0],
                         "satir": konum.get(o["b"], ("?", 0))[1]}
                        for o in sorted(yakin, key=lambda x: abs(x["g"] - gd))[:4]],
        })

    satirlar.sort(key=lambda s: (-len(s["eksik"]), s["tarih"]))
    print("\nEN ÇOK YERLEŞİM AÇIKTA BIRAKAN KIRILMALAR (yama önceliği):")
    for s in satirlar[:en]:
        print("\n%s  (%d yerleşim · %s)  taraflar: %s" %
              (s["tarih"], len(s["eksik"]), s["tip"], ", ".join(s["taraf"]) or "—"))
        print("   eksik: " + ", ".join(s["eksik"]))
        for a in s["adaylar"]:
            print("   aday %+4dg  %-28s %s:%d\n              b: %s\n              yer: %s (yer_id: %s)" %
                  (a["gun_farki"], a["t"], a["dosya"], a["satir"], a["b"][:90], a["yer"][:70], a["yer_id"]))

    if jsonyol:
        io.open(jsonyol, "w", encoding="utf-8").write(
            json.dumps({"acik": len(acik), "satirlar": satirlar}, ensure_ascii=False, indent=1))
        print("\nJSON yazıldı:", jsonyol)


if __name__ == "__main__":
    main()
