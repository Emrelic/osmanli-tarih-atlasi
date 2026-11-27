# -*- coding: utf-8 -*-
"""olcum_kos — bellek ölçüm koşusunu ZAMANINDA başlatır ve NÖBETİNİ tutar (HAVVA, 27 Kasım 2026).

Emre onayı: 27.11.2026 ("bu gece 02:00'den sonra tek süreçli bellek ölçüm koşusu — evet, başlat").
Akış: --basla anına dek bekler → ön denetim → motoru `bellek_olc2.py` içinde, Koşu 40 bayrakları +
`MOTOR_SUREC_ISCI=1` + `MOTOR_PARALEL_ISCI=1` ile başlatır → her dakika nöbet → durdurma ölçütlerinden
biri tutunca YALNIZ KENDİ başlattığı süreç ağacını durdurur.

Nöbet kuralları:
  * tuz denetimi: ilk 3 dk içinde logda beklenen tuz (--tuz) görünmezse DURDUR (önbellek soğuk kalır,
    ölçüm anlamsızlaşır ve ortak önbelleği kirletir).
  * öncelik: eczane mesaisinde (Pzt-Cmt 09-19) IDLE, dışında NORMAL.
  * mesaide çalışma kümesi > 16 GB ya da boş RAM < 2,5 GB ⇒ süreç ASKIYA alınır, mesai bitince sürer.
  * boş commit payı < 4 GB ⇒ DURDUR (makineyi korur).
  * Ⓑ dolgu aşaması --b-dk dakika gözlenince DURDUR (ölçümün amacı A'nın tepesi + Ⓑ'nin ilk saati).
  * --son anı gelince DURDUR.
Her 5 dakikada bir nöbet loguna satır yazar. Kullanım için `--kuru-motor` ile sahte motor verilebilir.
"""
import argparse
import csv
import datetime as dt
import os
import subprocess
import sys
import time

import psutil

GB = 1024 ** 3
BAYRAK = {      # Koşu 40 bayrakları (kosu40-20261119-004922-bayraklar.log) — işletim değişkenleri hariç AYNI
    "MOTOR_B_DOLGU": "1", "MOTOR_COL_GIRINTI_KAPALI": "1", "MOTOR_COL_UFUK_SAAT": "0",
    "MOTOR_DOLGU_KAPALI": "1", "MOTOR_DOLGU_UFUK_GUN": "10", "MOTOR_ENKLAV_KIRP_KM": "10",
    "MOTOR_KISTAK_KOPRU": "1", "MOTOR_KOMSU_KUR_BOL": "1", "MOTOR_KUR_DEVIR": "1",
    "MOTOR_KUSATMA_BILESEN": "1", "MOTOR_MO_PUAN_KAPISI": "0", "MOTOR_MO_SINIR": "9999-12-31",
    "MOTOR_MO_YURUYUS_GUN": "5", "MOTOR_PUAN_KAPALI": "1", "MOTOR_SINIR_KISIT": "1",
    "MOTOR_TARIH_BASI_MERKEZ": "1", "MOTOR_TOHUM_YAKA": "1", "MOTOR_UFUK_BANT": "40",
    "MOTOR_YAKA_KILIDI": "1", "MOTOR_YURUYUS": "1", "MOTOR_YURUYUS_SAAT": "40",
    # işletim değişkenleri (tuza girmez — uret_petek.py:642-647)
    "MOTOR_DEVAM": "1", "MOTOR_SUREC_ISCI": "1", "MOTOR_PARALEL_ISCI": "1",
    "MOTOR_EZBER_TAVAN_PUAN": "2000",
}


def mesai(d=None):
    d = d or dt.datetime.now()
    return d.weekday() != 6 and 9 <= d.hour < 19          # Pazar hariç 09-19


def yaz(yol, s):
    satir = f"{dt.datetime.now():%d.%m %H:%M:%S} {s}"
    try:
        with open(yol, "a", encoding="utf-8") as f:
            f.write(satir + "\n")
    except Exception:
        pass
    try:                      # konsol yoksa / kod sayfası dar ise nöbet ÖLMESİN
        print(satir.encode("ascii", "replace").decode("ascii"), flush=True)
    except Exception:
        pass


def son_asama(csv_yol):
    try:
        with open(csv_yol, encoding="utf-8") as f:
            son = None
            for son in csv.reader(f):
                pass
        return son[1] if son and len(son) > 1 else ""
    except Exception:
        return ""


def agac(p):
    try:
        return [p] + p.children(recursive=True)
    except psutil.NoSuchProcess:
        return []


def durdur(p, log, neden):
    yaz(log, f"DURDURULUYOR: {neden}")
    for q in agac(p):
        try:
            q.resume()
        except Exception:
            pass
    # yalnız kendi başlattığımız PID ve alt ağacı
    subprocess.run(["taskkill", "/F", "/T", "/PID", str(p.pid)], capture_output=True)
    try:
        p.wait(60)
    except Exception:
        pass
    yaz(log, f"durduruldu (canlı mı: {p.is_running() if hasattr(p, 'is_running') else '?'})")


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--kok", required=True, help="ölçüm ağacı (motorun koşacağı kopya)")
    ap.add_argument("--olcer", required=True, help="bellek_olc2.py yolu")
    ap.add_argument("--onbellek", required=True, help="MOTOR_ONBELLEK_DIZIN")
    ap.add_argument("--basla", required=True, help="YYYY-AA-GGTSS:DD ya da 'simdi'")
    ap.add_argument("--son", required=True, help="bu andan sonra durdur (YYYY-AA-GGTSS:DD)")
    ap.add_argument("--tuz", default="", help="logda beklenen tuz öneki (boşsa denetlenmez)")
    ap.add_argument("--b-dk", type=float, default=60.0)
    ap.add_argument("--adim", type=float, default=60.0, help="nöbet adımı, saniye")
    ap.add_argument("--kuru-motor", default="", help="sınama: gerçek motor yerine bu betik koşturulur")
    ap.add_argument("--duman", action="store_true",
                    help="duman sınaması: mesai ön denetimini atlar (kısa --son ile; süreç IDLE öncelikte kalır)")
    a = ap.parse_args()

    cikti = os.path.join(a.kok, "olcum")
    os.makedirs(cikti, exist_ok=True)
    log = os.path.join(cikti, "nobet.log")
    csv_yol = os.path.join(cikti, "bellek.csv")
    motor = a.kuru_motor or os.path.join(a.kok, "arac", "uret_petek.py")
    son = dt.datetime.fromisoformat(a.son)
    yaz(log, f"olcum_kos PID {os.getpid()} · başla {a.basla} · son {a.son} · motor {motor}")

    if a.basla != "simdi":
        hedef = dt.datetime.fromisoformat(a.basla)
        while dt.datetime.now() < hedef:
            time.sleep(min(30.0, max(1.0, (hedef - dt.datetime.now()).total_seconds())))
    # ── ön denetim ──────────────────────────────────────────────────────────
    vm = psutil.virtual_memory()
    if mesai() and not a.kuru_motor and not a.duman:
        yaz(log, "ÖN DENETİM: eczane mesaisi içinde — BAŞLATILMADI")
        return 4
    if vm.available / GB < 8.0 and not a.kuru_motor:
        yaz(log, f"ÖN DENETİM: boş RAM {vm.available / GB:.1f} GB < 8 — BAŞLATILMADI")
        return 4
    if psutil.disk_usage(a.kok).free / GB < 40.0:
        yaz(log, "ÖN DENETİM: boş disk < 40 GB — BAŞLATILMADI")
        return 4
    env = {k: v for k, v in os.environ.items() if not k.upper().startswith("MOTOR_")}
    env.update(BAYRAK)
    env["MOTOR_ONBELLEK_DIZIN"] = a.onbellek
    env["PYTHONIOENCODING"] = "utf-8"
    with open(os.path.join(cikti, "bayraklar.log"), "w", encoding="utf-8") as f:
        for k in sorted(k for k in env if k.startswith("MOTOR_")):
            f.write(f"{k}={env[k]}\n")
    so = open(os.path.join(cikti, "motor.out"), "w", encoding="utf-8", errors="replace")
    se = open(os.path.join(cikti, "motor.err"), "w", encoding="utf-8", errors="replace")
    alt = subprocess.Popen(
        [sys.executable, "-u", a.olcer, "--motor", motor, "--cikti", csv_yol, "--aralik", "30", "--derin", "30"],
        cwd=a.kok, env=env, stdin=subprocess.DEVNULL, stdout=so, stderr=se,
        creationflags=getattr(subprocess, "CREATE_NEW_PROCESS_GROUP", 0))
    p = psutil.Process(alt.pid)
    yaz(log, f"BAŞLADI: ölçer PID {alt.pid} · boş RAM {vm.available / GB:.1f} GB")
    with open(os.path.join(cikti, "pid.txt"), "w") as f:
        f.write(f"{alt.pid}\n{os.getpid()}\n")

    t0 = time.time()
    b_basladi = None
    tuz_tamam = not a.tuz
    askida = False
    dusuk = 0
    son_log = 0.0
    canli_log = os.path.join(a.kok, "uretim_canli.log")
    while True:
        time.sleep(a.adim)
        kod = alt.poll()
        if kod is not None:
            yaz(log, f"SÜREÇ BİTTİ: çıkış kodu {kod} · süre {(time.time() - t0) / 3600:.2f} sa")
            return 0
        try:
            mi = p.memory_info()
        except psutil.NoSuchProcess:
            continue
        vm, sw = psutil.virtual_memory(), psutil.swap_memory()
        ws, ozel = mi.rss / GB, getattr(mi, "private", 0) / GB
        bos, commit_bos = vm.available / GB, (vm.available + sw.free) / GB
        asama = son_asama(csv_yol)
        ms = mesai()
        # ── tuz denetimi ────────────────────────────────────────────────────
        if not tuz_tamam:
            try:
                with open(canli_log, encoding="utf-8", errors="replace") as f:
                    bas = f.read(400000)
            except Exception:
                bas = ""
            if ("tuz " + a.tuz) in bas:
                tuz_tamam = True
                yaz(log, f"tuz doğrulandı: {a.tuz}")
                for st in bas.splitlines():
                    if "ÖNBELLEK [" in st:
                        yaz(log, "  " + st.strip()[:200])
            elif "ÖNBELLEK: AÇIK" in bas or time.time() - t0 > 180:
                durdur(p, log, f"beklenen tuz {a.tuz} logda yok (ilk 3 dk) — önbellek soğuk kalırdı")
                return 5
        # ── öncelik ─────────────────────────────────────────────────────────
        hedef = psutil.IDLE_PRIORITY_CLASS if ms else psutil.NORMAL_PRIORITY_CLASS
        for q in agac(p):
            try:
                if q.nice() != hedef:
                    q.nice(hedef)
                    yaz(log, f"öncelik PID {q.pid} → {'IDLE' if ms else 'NORMAL'}")
            except Exception:
                pass
        # ── mesai bellek kuralı: askıya al / sürdür ─────────────────────────
        if ms and not askida and (ws > 16.0 or bos < 2.5):
            dusuk += 1
            if dusuk >= 2:
                for q in agac(p):
                    try:
                        q.suspend()
                    except Exception:
                        pass
                askida = True
                yaz(log, f"ASKIYA ALINDI (mesai): çalışma kümesi {ws:.1f} GB · boş RAM {bos:.1f} GB")
        else:
            dusuk = 0
        if askida and not ms:
            for q in agac(p):
                try:
                    q.resume()
                except Exception:
                    pass
            askida = False
            yaz(log, "SÜRDÜRÜLDÜ (mesai bitti)")
        # ── durdurma ölçütleri ──────────────────────────────────────────────
        if commit_bos < 4.0:
            durdur(p, log, f"boş commit payı {commit_bos:.1f} GB < 4")
            return 6
        if "dolgu katman" in (asama or ""):
            if b_basladi is None:
                b_basladi = time.time()
                yaz(log, f"Ⓑ dolgu başladı · A kısmı {(time.time() - t0) / 3600:.2f} sa sürdü")
            elif time.time() - b_basladi >= a.b_dk * 60.0:
                durdur(p, log, f"Ⓑ dolgu {a.b_dk:g} dk gözlendi (ölçüm tamam)")
                return 0
        if dt.datetime.now() >= son:
            durdur(p, log, f"son an geldi ({a.son})")
            return 7
        if time.time() - son_log >= 300.0 or a.kuru_motor:
            son_log = time.time()
            yaz(log, f"nöbet · {asama} · özel {ozel:.1f} GB · çalışma {ws:.1f} GB · tepe "
                     f"{getattr(mi, 'peak_wset', 0) / GB:.1f} GB · boş RAM {bos:.1f} GB · boş commit "
                     f"{commit_bos:.1f} GB{' · ASKIDA' if askida else ''}{' · mesai' if ms else ''}")


if __name__ == "__main__":
    sys.exit(main() or 0)
