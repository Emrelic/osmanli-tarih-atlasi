# -*- coding: utf-8 -*-
"""bellek_olc2 — motorun aşama aşama bellek ölçümü, YAPI BOYLARIYLA (HAVVA, 27 Kasım 2026).

`denetim/ARAC-BELLEK-OLC-1125.py`nin genişletilmiş kopyası (o dosyaya DOKUNULMADI). Farklar:
  * yapı listesi genişledi (soruşturmanın adayları: `_ONB_OZ`, havuzlar, kuşatma/serbest ezberleri);
  * "derin" örnek: `--derin` dakikada bir ve her aşama değişiminde `_VARLIK_ONBELLEK`in kaç AYRIK
    geometri ve kaç köşe tuttuğu, `_ONB_OZ`un tuttuğu köşe, havuzların köşe sayısı ayrı dosyaya yazılır;
  * sistem boş RAM ve boş commit payı da yazılır;
  * ölçüm kodunun hiçbir hatası motoru düşürmez (hepsi yutulur ve `-hata.txt`ye yazılır).
Motoru DEĞİŞTİRMEDEN kendi süreci içinde `__main__` olarak koşturur — BU BİR ÜRETİMDİR.
Kullanım: py bellek_olc2.py --motor <kopya>\\arac\\uret_petek.py --cikti <csv> [--aralik 30] [--derin 30]
"""
import argparse
import csv
import datetime as dt
import os
import sys
import threading
import time
import traceback

import psutil

YAPILAR = [
    "YERLER", "PETEK_D", "DEVLET_KAYIT", "donemler",
    "_VARLIK_ONBELLEK", "_VARLIK_DEVIR", "_ONB_OZ",
    "_KUS_ONBELLEK", "_KUS_KARAR", "_KUS_BIL_KARAR",
    "_SERBEST_ONBELLEK", "_SK_BOLGE_EZBER", "_DOLGU_ONBELLEK", "_PUAN_ONBELLEK",
    "_DEVIR_EZBER", "_SAHIPLI_EZBER", "_SAHIP_EZBER", "_SK_SAHIP_EZBER",
    "DEV_HALKA", "DEV_HALKA_IX", "DEV_PARCA", "OSM_HALKA", "OSM_HALKA_IX", "OSM_PARCA",
]
GB = 1024 ** 3


def baska_motor_var():
    ben = psutil.Process()
    atalar = {ben.pid} | {a.pid for a in ben.parents()}
    bulunan = []
    for p in psutil.process_iter(["pid", "name", "cmdline"]):
        try:
            if p.info["pid"] in atalar:
                continue
            ad = (p.info["name"] or "").lower()
            if not (ad.startswith("python") or ad.startswith("py")):
                continue
            argl = p.info["cmdline"] or []
            if any(x.replace("\\", "/").endswith("uret_petek.py") for x in argl[1:6]):
                bulunan.append((p.info["pid"], " ".join(argl)[:160]))
        except (psutil.NoSuchProcess, psutil.AccessDenied):
            pass
    return bulunan


def boy(x):
    try:
        return len(x)
    except Exception:
        return ""


class Olcer(threading.Thread):
    def __init__(self, g, cikti, aralik, derin_dk):
        super().__init__(daemon=True)
        self.g, self.aralik, self.derin_sn = g, aralik, derin_dk * 60.0
        self.p = psutil.Process()
        self.f = open(cikti, "w", newline="", encoding="utf-8")
        self.w = csv.writer(self.f)
        self.w.writerow(["zaman", "asama", "olay", "ozel_gb", "calisma_gb", "tepe_calisma_gb",
                         "cocuk_ozel_gb", "bos_ram_gb", "bos_commit_gb", "cpu_sn"] + YAPILAR)
        self.f.flush()
        kok = os.path.splitext(cikti)[0]
        self.derin_yol = kok + "-derin.csv"
        self.hata_yol = kok + "-hata.txt"
        with open(self.derin_yol, "w", newline="", encoding="utf-8") as f:
            csv.writer(f).writerow([
                "zaman", "asama", "ozel_gb", "calisma_gb",
                "varlik_epok", "varlik_ayrik_geo", "varlik_ayrik_kose", "varlik_petekd_disi_geo",
                "varlik_petekd_disi_kose", "petekd_kose", "onboz_n", "onboz_kose",
                "onboz_varlikta_olmayan_kose", "dev_halka_n", "dev_halka_kose", "osm_halka_n",
                "osm_halka_kose", "varlik_devir_kayit", "olcum_sn"])
        self.son_asama = None
        self.dur = threading.Event()

    def _hata(self, yer):
        try:
            with open(self.hata_yol, "a", encoding="utf-8") as f:
                f.write(f"\n=== {dt.datetime.now():%d.%m %H:%M:%S} · {yer} ===\n{traceback.format_exc()}\n")
        except Exception:
            pass

    def satir(self, olay):
        try:
            mi = self.p.memory_info()
            cocuk = 0
            for c in self.p.children(recursive=True):
                try:
                    cocuk += getattr(c.memory_info(), "private", 0)
                except (psutil.NoSuchProcess, psutil.AccessDenied):
                    pass
            vm, sw = psutil.virtual_memory(), psutil.swap_memory()
            ct = self.p.cpu_times()
            self.w.writerow(
                [dt.datetime.now().isoformat(timespec="seconds"), self.g.get("_ASAMA_AD"), olay,
                 round(getattr(mi, "private", 0) / GB, 2), round(mi.rss / GB, 2),
                 round(getattr(mi, "peak_wset", 0) / GB, 2), round(cocuk / GB, 2),
                 round(vm.available / GB, 2), round((vm.available + sw.free) / GB, 2),
                 round(ct.user + ct.system)]
                + [boy(self.g.get(ad)) for ad in YAPILAR])
            self.f.flush()
        except Exception:
            self._hata("satir")

    def derin(self):
        """Hangi yapı kaç köşe tutuyor. GIL altında birkaç saniye sürebilir; hata motoru düşürmez."""
        try:
            import shapely
            import numpy as np
            t0 = time.time()
            g = self.g

            def kose(geolar):
                if not geolar:
                    return 0
                return int(shapely.get_num_coordinates(np.array(geolar, dtype=object)).sum())

            vo = g.get("_VARLIK_ONBELLEK")
            pd_ = g.get("PETEK_D") or []
            taban = {id(x) for x in pd_ if x is not None}
            ayrik = {}
            n_epok = 0
            if vo is not None:
                for lst in list(vo.values()):
                    n_epok += 1
                    for x in lst:
                        if x is not None:
                            ayrik[id(x)] = x
            disi = [x for i, x in ayrik.items() if i not in taban]
            oz = g.get("_ONB_OZ")
            oz_geo = [v[0] for v in list(oz.values()) if v[0] is not None] if oz is not None else []
            oz_disi = [x for x in oz_geo if id(x) not in ayrik and id(x) not in taban]

            def havuz(ad):
                h = g.get(ad)
                if h is None:
                    return "", ""
                hh = list(h)
                return len(hh), sum(len(x) for x in hh)

            dn, dk = havuz("DEV_HALKA")
            on, ok = havuz("OSM_HALKA")
            vd = g.get("_VARLIK_DEVIR")
            vdn = sum(len(x) for x in list(vd.values())) if vd is not None else ""
            mi = self.p.memory_info()
            with open(self.derin_yol, "a", newline="", encoding="utf-8") as f:
                csv.writer(f).writerow([
                    dt.datetime.now().isoformat(timespec="seconds"), g.get("_ASAMA_AD"),
                    round(getattr(mi, "private", 0) / GB, 2), round(mi.rss / GB, 2),
                    n_epok, len(ayrik), kose(list(ayrik.values())), len(disi), kose(disi),
                    kose([x for x in pd_ if x is not None]), len(oz_geo), kose(oz_geo), kose(oz_disi),
                    dn, dk, on, ok, vdn, round(time.time() - t0, 1)])
        except Exception:
            self._hata("derin")

    def run(self):
        son = son_derin = 0.0
        while not self.dur.is_set():
            try:
                asama = self.g.get("_ASAMA_AD")
                if asama != self.son_asama:
                    self.satir("asama-degisti")
                    if self.son_asama is not None:
                        self.derin()
                        son_derin = time.time()
                    self.son_asama = asama
                    son = time.time()
                elif time.time() - son >= self.aralik:
                    self.satir("ornek")
                    son = time.time()
                if self.derin_sn > 0 and time.time() - son_derin >= self.derin_sn:
                    self.derin()
                    son_derin = time.time()
            except Exception:
                self._hata("run")
            self.dur.wait(1.0)

    def bitir(self):
        self.dur.set()
        try:
            self.satir("bitis")
            self.derin()
        finally:
            self.f.close()


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--motor", required=True)
    ap.add_argument("--cikti", required=True)
    ap.add_argument("--aralik", type=float, default=30.0)
    ap.add_argument("--derin", type=float, default=30.0, help="derin örnek aralığı, dakika (0 = yalnız aşama değişiminde)")
    ap.add_argument("--kuru", action="store_true", help="motoru KOŞTURMAZ: güvenlik denetimi + tek satır")
    a = ap.parse_args()

    motor = os.path.abspath(a.motor)
    if not os.path.isfile(motor):
        sys.exit(f"motor yok: {motor}")
    diger = baska_motor_var()
    if diger:
        print("BAŞKA BİR MOTOR KOŞUYOR — ölçüm başlatılmadı:")
        for pid, cl in diger:
            print(f"  PID {pid}: {cl}")
        sys.exit(3)
    if os.environ.get("MOTOR_SUREC_ISCI", "1") not in ("", "1"):
        print("UYARI: MOTOR_SUREC_ISCI>1 — işçi süreçler sarmalanmaz.")

    g = {"__name__": "__main__", "__file__": motor, "__builtins__": __builtins__}
    olcer = Olcer(g, a.cikti, a.aralik, a.derin)
    if a.kuru:
        olcer.satir("kuru")
        olcer.derin()
        olcer.f.close()
        print(f"KURU: guvenlik denetimi gecti -> {a.cikti}")
        return
    sys.argv = [motor]
    sys.path.insert(0, os.path.dirname(motor))
    kod = compile(open(motor, encoding="utf-8").read(), motor, "exec")
    olcer.start()
    try:
        exec(kod, g)
    finally:
        olcer.bitir()
        print(f"BELLEK OLCUMU -> {a.cikti}", file=sys.__stdout__)


if __name__ == "__main__":
    main()
