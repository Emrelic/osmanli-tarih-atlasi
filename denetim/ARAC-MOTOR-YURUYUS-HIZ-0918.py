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
# 🔴 KÖK = BU ALETİN DURDUĞU WORKTREE (19 Eylül 2026). Önceden ANA klasördü; bir
# sınav koşusu başka bir oturum ana klasördeki arac/girdi.py'yi değiştirince
# motorun kod nöbetçisi tarafından öldürüldü — ve ana klasörün CANLI verisi
# koşular arasında değişebildiği için soğuk/sıcak önbellek kıyası da GEÇERSİZ
# olabilirdi. Donmuş worktree: veri, girdi.py, renkler.py sabit. (Depo dışı DEM
# worktree'ye elle kopyalanır: veri-kaynak/yukseklik/*.tif, gitignore'da.)
ANA = KOK
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
    # tuz özeti SENARYO ve KESME yamalarından ÖNCE: "sıcak" koşu soğuğun
    # önbelleğini görebilsin (senaryo GİRDİYİ değiştirir, kodu değil — girdi
    # değişikliği anahtarın kendisinde yakalanmalı; sınavın sorusu tam bu).
    _tuz_src = hashlib.sha256(src.encode("utf-8")).hexdigest()[:16]
    if a.degistir:
        # SENARYO (M-4537 kabulü: "tek nokta ekle / sahip değiştir"): YERLER
        # okunduktan HEMEN sonra JSON'daki işlemler uygulanır.
        #   {"kopya": "<ad>", "ad": "...", "dlon": .., "dlat": .., "konum": 0}
        #       → kaydın kopyası kaydırılıp `konum` indeksine eklenir (0 = bütün
        #         indeksler kayar — frozenset sırası sınanır)
        #   {"sahip": "<ad>", "d": "<devlet>"} → o kaydın bütün s: dönemleri
        degis("YERLER = girdi.yukle()\n", "YERLER = girdi.yukle()\n" + (
            "import json as _js_s, copy as _cp_s\n"
            f"for _op in _js_s.load(open({os.path.abspath(a.degistir)!r}, encoding='utf-8')):\n"
            "    if 'kopya' in _op:\n"
            "        _yn = _cp_s.deepcopy(next(y for y in YERLER if y['ad'] == _op['kopya']))\n"
            "        _yn['ad'] = _op.get('ad', 'SINAV'); _yn['lon'] += _op.get('dlon', 0.0); _yn['lat'] += _op.get('dlat', 0.0)\n"
            "        if 'id' in _yn: _yn['id'] = str(_yn['id']) + '-sinav'\n"
            "        YERLER.insert(_op.get('konum', len(YERLER)), _yn)\n"
            "    if 'sahip' in _op:\n"
            "        for _y in YERLER:\n"
            "            if _y['ad'] == _op['sahip']:\n"
            "                for _sp in _y['s']: _sp['d'] = _op['d']\n"
            "print('  SINAV SENARYOSU uygulandı:', open(" + repr(os.path.abspath(a.degistir)) + ", encoding='utf-8').read().strip())\n"))
    # önbellek: sınav dizini + tuz ek (sınav motorun __file__'ı ANA'yı gösterdiği
    # için motor izi worktree kodunu görmez ⇒ kesitin kendi özeti tuza eklenir)
    os.environ["MOTOR_ONBELLEK_DIZIN"] = os.path.join(os.environ.get("TEMP", KOK),
                                                      "hiz_onbellek_" + (a.onbellek_ad or a.ad))
    os.environ["MOTOR_ONBELLEK_TUZ_EK"] = _tuz_src
    if a.dolgu:
        os.environ["MOTOR_DOLGU_YOL"] = a.dolgu        # satir | tam | sina
    else:
        os.environ.pop("MOTOR_DOLGU_YOL", None)
    if not a.onbellek:
        os.environ["MOTOR_ONBELLEK_KAPALI"] = "1"
    else:
        os.environ.pop("MOTOR_ONBELLEK_KAPALI", None)
    _arac = os.path.dirname(os.path.abspath(a.motor))
    if _arac not in sys.path:
        sys.path.append(_arac)                  # motor_onbellek worktree'den
    os.environ["PYTHONPATH"] = _arac            # işçi süreçler için
    if a.kes:
        # SENARYO "yarıda kesildi": FAZ 2 (iş parçacığı yolu) N'inci devlette süreç
        # SERT ölür (os._exit — flush yok, atexit yok), elektrik kesilmiş gibi.
        # ⚠️ Tuz ÖZETİNDEN SONRA uygulanır: devam koşusu (kes'siz) aynı tuzu görsün.
        _il = '            ilerleme(_dv_i, len(BOYALAR), 10, "devlet", _DV_KUM)\n'
        if src.count(_il) < 1:
            raise SystemExit("kes işareti yok")
        src = src.replace(_il, _il + f"            if _dv_i == {a.kes}: print('SINAV: SERT KESİLDİ', flush=True); os._exit(9)\n")
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
    elif a.paralel:
        os.environ.pop("MOTOR_PARALEL_KAPALI", None)   # iş parçacığı yolu (önbellekli FAZ 1)
    else:
        os.environ["MOTOR_PARALEL_KAPALI"] = "1"
    NS ={"__name__": "__main__", "__file__": ANA_MOTOR}
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
    if "_ONB" in NS:
        SON["onbellek"] = NS["_ONB"].ozet()
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
    ap.add_argument("--paralel", type=int, default=0,
                    help="1: iş parçacığı yolu (MOTOR_PARALEL_KAPALI kaldırılır; önbellek bu yolda)")
    ap.add_argument("--onbellek", type=int, default=0,
                    help="1: önbellek AÇIK (%%TEMP%%/hiz_onbellek_<onbellek_ad>)")
    ap.add_argument("--onbellek_ad", default="",
                    help="önbellek dizininin adı (koşular arası paylaşmak için aynı ad)")
    ap.add_argument("--degistir", default="",
                    help="senaryo JSON dosyası (nokta ekle / sahip değiştir)")
    ap.add_argument("--dolgu", default="",
                    help="MOTOR_DOLGU_YOL: satir (varsayılan) · tam (eski matris) · sina (ikisi, fark say)")
    ap.add_argument("--kes", type=int, default=0,
                    help="N: FAZ 2'de N'inci devlette sert öl (yarıda kesilme senaryosu)")
    ap.add_argument("--devam", type=int, default=0,
                    help="MOTOR_DEVAM=1 (FAZ 1 sonuçları %%TEMP%%/hiz_devam altında kalıcı)")
    ap.add_argument("--surec", type=int, default=1,
                    help="MOTOR_SUREC_ISCI (>1: süreç paralelliği; iş parçacığı yolu açılır)")
    main(ap.parse_args())
