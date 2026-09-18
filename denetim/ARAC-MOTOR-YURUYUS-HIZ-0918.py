# -*- coding: utf-8 -*-
"""ARAC-MOTOR-YURUYUS-HIZ-0918 — motorun "Yabancı devlet gövdeleri" + "Dönemler"
aşamalarını KÜÇÜK KUTUDA koşturup SÜRE ölçer ve çıktının PARMAK İZİNİ alır.

NİÇİN (M-4533): koşu 13B (MOTOR_YURUYUS=1) 24 saat zaman aşımına takıldı. Yürüyüşün
gün başı maliyeti ve hızlandırmaların bit-denkliği bu aletle ölçülür.
Metin değişiklikleri ARAC-MOTOR-YURUYUS-SINAV-0917 derin kipiyle aynı (kutu · kilit ·
damga · motor_kara/bolgeler.js yazımı etkisiz); kesim "Uzak coğrafya seyreltme"
aşamasında ⇒ data/ yazılmaz. MOTOR_PARALEL_KAPALI=1 (sıralı tanık yol) ⇒ cProfile
ana iş parçacığında bütün işi görür.

Kullanım:
  py denetim/ARAC-MOTOR-YURUYUS-HIZ-0918.py --motor <uret_petek.py> --kutu=26,34,50,44 --ad X [--bayrak 1] [--yon16 1] [--profil 1]
Çıktı: denetim/ARAC-MOTOR-YURUYUS-HIZ-0918-<ad>.json
"""
import io, json, os, sys, time, hashlib, argparse

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
ANA = r"C:\Users\emrem\OneDrive\Desktop\TARİH COĞRAFYA SİTESİ"
ANA_MOTOR = os.path.join(ANA, "arac", "uret_petek.py")


def main(a):
    try:
        import ctypes
        ctypes.windll.kernel32.SetPriorityClass(ctypes.windll.kernel32.GetCurrentProcess(), 0x4000)
    except Exception:
        pass
    src = io.open(a.motor, encoding="utf-8", newline="").read().replace("\r\n", "\n")
    sha = hashlib.sha256(src.encode("utf-8")).hexdigest()[:12]

    def degis(eski, yeni):
        nonlocal src
        if src.count(eski) != 1:
            raise SystemExit(f"İŞARET {src.count(eski)} kez: {eski[:60]!r}")
        src = src.replace(eski, yeni)

    degis("BOLGE = box(-180, -60, 180, 85)\n", f"BOLGE = box({a.kutu})\n")
    _k_eski = 'if not _KILIT.al("petek"):\n    sys.exit(1)\natexit.register(_KILIT.birak, "petek")\n'
    _k_yeni = ('    if not _KILIT.al("petek"):\n        sys.exit(1)\n'
               '    atexit.register(_KILIT.birak, "petek")\n')
    if _k_yeni in src:
        degis(_k_yeni, "    pass  # HIZ: kilit atlandı\n")
    else:
        degis(_k_eski, "pass  # HIZ: kilit atlandı\n")
    i = src.index('io.open(os.path.join(os.path.dirname(os.path.abspath(__file__)), "..",')
    j = src.index('+ "\\n")\n', i) + len('+ "\\n")\n')
    if '".uretim-basladi"' not in src[i:j]:
        raise SystemExit("damga satırı tanınmadı")
    src = src[:i] + "pass  # HIZ: .uretim-basladi YAZILMADI\n" + src[j:]
    degis('io.open(_mkyol, "w", encoding="utf-8").write(json.dumps(',
          '(lambda _x: None)(json.dumps(')
    degis('open(_byol, "w", encoding="utf-8").write(_bj)\n',
          'pass  # HIZ: bolgeler.js YAZILMADI\n')
    src = src.replace("os.path.getsize(_byol)", "0").replace("os.path.getsize(_mkyol)", "0")
    k = src.index('asama("Uzak coğrafya seyreltme (yabancı havuz)")\n')
    src = src[:k] + "asama_ozet()\n"
    # canlı ilerleme dosyası (varsa) ana klasörü kirletmesin
    os.environ["MOTOR_CANLI_LOG"] = os.path.join(
        os.environ.get("TEMP", KOK), f"hiz_canli_{a.ad}.log")
    os.environ["MOTOR_YURUYUS"] = "1" if a.bayrak else "0"
    os.environ["MOTOR_YURUYUS_16"] = "1" if a.yon16 else "0"
    os.environ["MOTOR_EGIM_AB_KAPALI"] = "1"
    os.environ["MOTOR_NEHIR_AB_KAPALI"] = "1"
    if a.devam:
        os.environ["MOTOR_DEVAM"] = "1"
        os.environ["MOTOR_DEVAM_DIZIN"] = os.path.join(os.environ.get("TEMP", KOK), "hiz_devam")
    if a.surec > 1 or a.devam:
        # işçi süreçler AYNI kesiti koşmalı: kesit geçici dosyaya yazılır,
        # `__file__` ana klasörün motoru olarak sabitlenir (veri yolları).
        os.environ.pop("MOTOR_PARALEL_KAPALI", None)
        os.environ["MOTOR_SUREC_ISCI"] = str(a.surec)
        betik = os.path.join(os.environ.get("TEMP", KOK), f"hiz_kesit_{a.ad}.py")
        with io.open(betik, "w", encoding="utf-8") as f:
            f.write(f"__file__ = {ANA_MOTOR!r}\n" + src)
        os.environ["MOTOR_ISCI_BETIK"] = betik
    else:
        os.environ["MOTOR_PARALEL_KAPALI"] = "1"
    NS = {"__name__": "__main__", "__file__": ANA_MOTOR}
    kod = compile(src, a.motor + " [HIZ kesiti]", "exec")
    t0 = time.time()
    if a.profil:
        import cProfile, pstats
        pr = cProfile.Profile()
        pr.enable()
        exec(kod, NS)
        pr.disable()
    else:
        exec(kod, NS)
    sure = round(time.time() - t0)
    # ---- parmak izi: yabancı gövdeler + Osmanlı dönemleri + havuzlar ----
    def h(o):
        return hashlib.sha1(json.dumps(o, sort_keys=True, separators=(",", ":"),
                                       default=str).encode()).hexdigest()[:16]
    SON = {"motor": a.motor, "motor_sha_ilk12": sha, "kutu": a.kutu, "bayrak": a.bayrak,
           "yon16": a.yon16, "sure_sn": sure,
           "asama": [(ad, round(s, 1), round(c, 1)) for ad, s, c in NS["_ASAMA_KAYIT"]],
           "sayac": {k: [v[0], round(v[1], 1)] for k, v in NS["_SAYAC"].items()},
           "h_devlet_kayit": h(NS["DEVLET_KAYIT"]),
           "h_dev_halka": h(NS["DEV_HALKA"]), "h_dev_parca": h(NS["DEV_PARCA"]),
           "devlet": len(NS["DEVLET_KAYIT"]),
           "donem": sum(len(d["dnm"]) for d in NS["DEVLET_KAYIT"])}
    for ad in ("donemler", "OSM_HALKA", "OSM_PARCA", "SRB_HAVUZ", "SRB_U", "petekler"):
        if ad in NS:
            SON["h_" + ad] = h(NS[ad])
    if a.profil:
        s = io.StringIO()
        pstats.Stats(pr, stream=s).sort_stats("tottime").print_stats(35)
        SON["profil_tottime"] = s.getvalue()
        s = io.StringIO()
        pstats.Stats(pr, stream=s).sort_stats("cumulative").print_stats(60)
        SON["profil_cum"] = s.getvalue()
    yol = os.path.join(KOK, "denetim", f"ARAC-MOTOR-YURUYUS-HIZ-0918-{a.ad}.json")
    with io.open(yol, "w", encoding="utf-8") as f:
        json.dump(SON, f, ensure_ascii=False, indent=1,
                  default=lambda o: o.item() if hasattr(o, "item") else str(o))
    print(f"HIZ YAZILDI {a.ad} · {sure} sn · {SON['devlet']} devlet {SON['donem']} dönem · "
          f"h_devlet {SON['h_devlet_kayit']} · h_donemler {SON.get('h_donemler')}")


if __name__ == "__main__":
    ap = argparse.ArgumentParser()
    ap.add_argument("--motor", required=True)
    ap.add_argument("--kutu", required=True)
    ap.add_argument("--ad", required=True)
    ap.add_argument("--bayrak", type=int, default=0)
    ap.add_argument("--yon16", type=int, default=0)
    ap.add_argument("--profil", type=int, default=0)
    ap.add_argument("--devam", type=int, default=0,
                    help="MOTOR_DEVAM=1 (FAZ 1 sonuçları %%TEMP%%/hiz_devam altında kalıcı)")
    ap.add_argument("--surec", type=int, default=1,
                    help="MOTOR_SUREC_ISCI (>1: süreç paralelliği; iş parçacığı yolu açılır)")
    main(ap.parse_args())
