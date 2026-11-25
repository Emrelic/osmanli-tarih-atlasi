"""ARAC-BELLEK-OLC-1125 — motorun aşama aşama bellek ölçümü (HAVVA, 25 Kasım 2026).

SORU (Emre, 25 Kasım): koşu 16 GB RAM'e sığabilir mi? Koşu 40 ölçümü: Ⓑ dolgu
33,7 GB ayırıyor ama yalnız 0,9 GB'ını kullanıyor; tepe çalışma kümesi 16,6 GB.
Hangi aşamanın, hangi yapının belleği büyüttüğü ÖLÇÜLMEDİ — bu alet onu ölçer.

NE YAPAR: `uret_petek.py`yi DEĞİŞTİRMEDEN, kendi süreci içinde `__main__` olarak
koşturur (yani BU BİR ÜRETİMDİR — dosyanın başındaki ithal kilidi bilerek aşılır,
çünkü amaç gerçekten koşturmaktır). Yan iş parçacığı her `--aralik` saniyede ve
her aşama değişiminde bir satır yazar:
    zaman · aşama · özel bellek (commit) · çalışma kümesi · tepe çalışma kümesi
    · çocuk süreçlerin özel belleği · bilinen ezber/önbellek yapılarının boyu
`--tracemalloc N` verilirse (N = iz derinliği) her aşama sonunda en çok bellek
ayıran 40 satır ayrıca yazılır (yavaşlatır, bellek de yer — önce N vermeden koş).

🔴 GÜVENLİK
  * Makinede `uret_petek.py` koşan başka bir süreç varsa BAŞLAMAZ (Koşu 40'ı
    öldürmemek için; motorun kendi kilidi kök dizine göredir, başka bir kopyayı
    görmez).
  * Motoru ana ağaçta DEĞİL, ayrı bir kopya dizinde koştur (çıktı `data/`ya yazılır).
  * Ölçüm için `MOTOR_SUREC_ISCI=1` önerilir (Windows'ta işçi motoru baştan koşar,
    belleği katlar; çocuk süreçler sarmalanmaz, yalnız toplam bellekleri yazılır).

KULLANIM (ayrı kopyada, koşu bayraklarıyla):
    py denetim/ARAC-BELLEK-OLC-1125.py --motor C:\\atlas-olcum\\arac\\uret_petek.py \\
        --cikti C:\\atlas-olcum\\bellek-olcum.csv [--aralik 30] [--tracemalloc 1]
"""
import argparse
import csv
import datetime as dt
import os
import sys
import threading
import time

import psutil

YAPILAR = [
    "YERLER", "PETEK_D", "DEVLET_KAYIT",
    "_VARLIK_ONBELLEK", "_KUS_ONBELLEK", "_IC_ONBELLEK", "_CEP_ONBELLEK",
    "_DOLGU_ONBELLEK", "_PUAN_ONBELLEK",
    "_DEVIR_EZBER", "_SAHIPLI_EZBER", "_SAHIP_EZBER", "_SK_SAHIP_EZBER",
]
GB = 1024 ** 3


def baska_motor_var():
    # Yalnız python/py süreci ve BETİK argümanı uret_petek.py olanlar sayılır;
    # kendi ata zincirimiz (py başlatıcısı, kabuk) hariç.
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
            if any(x.replace("\\", "/").endswith("uret_petek.py") for x in argl[1:3]):
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
    def __init__(self, g, cikti, aralik, tm_derinlik):
        super().__init__(daemon=True)
        self.g, self.aralik, self.tm = g, aralik, tm_derinlik
        self.p = psutil.Process()
        self.f = open(cikti, "w", newline="", encoding="utf-8")
        self.w = csv.writer(self.f)
        self.w.writerow(["zaman", "asama", "olay", "ozel_gb", "calisma_gb",
                         "tepe_calisma_gb", "cocuk_ozel_gb"] + YAPILAR)
        self.f.flush()
        self.son_asama = None
        self.tm_dosya = os.path.splitext(cikti)[0] + "-tracemalloc.txt"
        self.dur = threading.Event()

    def satir(self, olay):
        mi = self.p.memory_info()
        cocuk = 0
        for c in self.p.children(recursive=True):
            try:
                cocuk += getattr(c.memory_info(), "private", 0)
            except (psutil.NoSuchProcess, psutil.AccessDenied):
                pass
        asama = self.g.get("_ASAMA_AD")
        self.w.writerow(
            [dt.datetime.now().isoformat(timespec="seconds"), asama, olay,
             round(getattr(mi, "private", 0) / GB, 2), round(mi.rss / GB, 2),
             round(getattr(mi, "peak_wset", 0) / GB, 2), round(cocuk / GB, 2)]
            + [boy(self.g.get(ad)) for ad in YAPILAR])
        self.f.flush()

    def tm_yaz(self, etiket):
        import tracemalloc
        if not tracemalloc.is_tracing():
            return
        snap = tracemalloc.take_snapshot()
        ust = snap.statistics("lineno")[:40]
        with open(self.tm_dosya, "a", encoding="utf-8") as f:
            f.write(f"\n=== {dt.datetime.now():%H:%M:%S} · {etiket} ===\n")
            for s in ust:
                f.write(f"{s.size / GB * 1024:9.1f} MB  {s.count:9d}  {s.traceback}\n")

    def run(self):
        son = 0.0
        while not self.dur.is_set():
            asama = self.g.get("_ASAMA_AD")
            if asama != self.son_asama:
                self.satir("asama-degisti")
                if self.tm and self.son_asama is not None:
                    self.tm_yaz(f"aşama sonu: {self.son_asama}")
                self.son_asama = asama
                son = time.time()
            elif time.time() - son >= self.aralik:
                self.satir("ornek")
                son = time.time()
            self.dur.wait(1.0)

    def bitir(self):
        self.dur.set()
        try:
            self.satir("bitis")
            if self.tm:
                self.tm_yaz("bitiş")
        finally:
            self.f.close()


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--motor", required=True)
    ap.add_argument("--cikti", required=True)
    ap.add_argument("--aralik", type=float, default=30.0)
    ap.add_argument("--tracemalloc", type=int, default=0)
    ap.add_argument("--kuru", action="store_true",
                    help="motoru KOŞTURMAZ: yalnız güvenlik denetimi ve tek ölçüm satırı")
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
        print("UYARI: MOTOR_SUREC_ISCI>1 — işçi süreçler sarmalanmaz, "
              "yalnız 'cocuk_ozel_gb' sütununda toplamları görünür.")

    g = {"__name__": "__main__", "__file__": motor, "__builtins__": __builtins__}
    olcer = Olcer(g, a.cikti, a.aralik, a.tracemalloc)
    if a.kuru:
        olcer.satir("kuru")
        olcer.f.close()
        print(f"KURU: güvenlik denetimi geçti, tek satır yazıldı → {a.cikti}")
        return
    if a.tracemalloc:
        import tracemalloc
        tracemalloc.start(a.tracemalloc)
    sys.argv = [motor]
    sys.path.insert(0, os.path.dirname(motor))
    kod = compile(open(motor, encoding="utf-8").read(), motor, "exec")
    olcer.start()
    try:
        exec(kod, g)
    finally:
        olcer.bitir()
        print(f"BELLEK ÖLÇÜMÜ → {a.cikti}", file=sys.__stdout__)


if __name__ == "__main__":
    main()
