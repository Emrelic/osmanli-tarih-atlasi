# -*- coding: utf-8 -*-
"""MOTOR-LEGO-0925 ④ + ② — önbellek İSABETİNİN bit denkliği ve küçük kutuda lego yerelliği.

Motoru DEĞİŞTİRMEZ. Ayrı worktree (C:/atlas-lego, HEAD) + ayrı önbellek dizini
(scratch) kullanır; koşu 15'in dosyalarına ve önbelleğine DOKUNMAZ.
motor_esitlik.py'nin kesit üreticisini (BOLGE kutusu + döküm kancası) kullanır.

Koşular (hepsi aynı kutu, MOTOR_* ortamı TEMİZLENİR — kullanıcı ortamındaki
MOTOR_PARALEL_KAPALI=1 dahil):
  S  sıralı yol   · önbellek KAPALI · PARALEL_KAPALI=1   (bugünkü koşuların yolu)
  P  paralel yol  · önbellek KAPALI
  Y  paralel yol  · önbellek AÇIK, BOŞ dizin            (yazar)
  O  paralel yol  · önbellek AÇIK, AYNI dizin           (okur — isabet)
  SEN_O  senaryo  · önbellek AÇIK, AYNI dizin           (lego: yalnız değişen yeniden)
  SEN_K  senaryo  · önbellek KAPALI                     (SEN_O'nun tanığı)
Bellek bekçisi: boş RAM 700 MB altına inerse çocuk süreç öldürülür (koşu 15 önce gelir).
Kullanım: py denetim/ARAC-LEGO-0925-bit.py --kutu 26,36,45,42
"""
import argparse, io, json, os, re, shutil, subprocess, sys, time

sys.stdout.reconfigure(encoding="utf-8", errors="replace")
sys.path.insert(0, r"C:\atlas\arac")
import motor_esitlik as me  # noqa: E402

AG = "C:/atlas-lego"
CIKTI = "C:/atlas-lego-cikti"
SCR = os.environ.get("LEGO_SCR", r"C:\Users\emrem\AppData\Local\Temp\claude\C--atlas"
                     r"\e9f837fe-f9f4-47f6-bb18-afc0aab680f5\scratchpad")
ONB = os.path.join(SCR, "lego_onbellek")
BOS_RAM_TABAN_MB = 700


def bos_ram_mb():
    out = subprocess.run(["powershell", "-NoProfile", "-c",
                          "(Get-CimInstance Win32_OperatingSystem).FreePhysicalMemory"],
                         capture_output=True, text=True).stdout.strip()
    try:
        return int(out) / 1024.0
    except ValueError:
        return 99999.0


def kos(ad, kutu, ortam, senaryo=None):
    cikti = os.path.join(CIKTI, ad)
    if os.path.exists(os.path.join(cikti, "meta.json")):
        print(f"  ♻️ {ad} zaten var — atlanıyor")
        return json.load(open(os.path.join(cikti, "meta.json"), encoding="utf-8"))
    shutil.rmtree(cikti, ignore_errors=True)
    os.makedirs(cikti)
    uretilen = ["data/donemler.js", "data/devletler_harita.js", "data/bolgeler.js",
                "data/devirler.js", "data/petek_govde.js", "veri-kaynak/motor_kara.geojson"]
    var = [u for u in uretilen if os.path.exists(os.path.join(AG, u))]
    subprocess.run(["git", "-C", AG, "checkout", "--"] + var, check=True)
    motor = os.path.join(AG, "arac", "uret_petek.py")
    src = me.kesit_uret(motor, kutu, senaryo)
    kesit = os.path.join(AG, "arac", "_sinav_kesit.py")
    with io.open(kesit, "w", encoding="utf-8", newline="\n") as f:
        f.write(f"__file__ = {motor!r}\n" + src)
    env = {k: v for k, v in os.environ.items() if not k.startswith("MOTOR_")}
    env.update({"MOTOR_EGIM_AB_KAPALI": "1", "MOTOR_NEHIR_AB_KAPALI": "1",
                "MOTOR_CANLI_LOG": os.path.join(cikti, "canli.log"),
                "PYTHONPATH": os.path.join(AG, "arac"), "PYTHONIOENCODING": "utf-8"})
    env.update(ortam)
    t0 = time.time()
    tepe_dusuk = 99999.0
    with open(os.path.join(cikti, "motor.log"), "w", encoding="utf-8") as lg:
        p = subprocess.Popen([sys.executable, "-u", kesit], cwd=AG, env=env, stdout=lg,
                             stderr=subprocess.STDOUT, creationflags=0x4000)  # BELOW_NORMAL
        while p.poll() is None:
            time.sleep(5)
            b = bos_ram_mb()
            tepe_dusuk = min(tepe_dusuk, b)
            if b < BOS_RAM_TABAN_MB:
                p.kill()
                print(f"  🛑 {ad}: boş RAM {b:.0f} MB < {BOS_RAM_TABAN_MB} — ÖLDÜRÜLDÜ (koşu 15 önce gelir)")
                break
    meta = {"ad": ad, "kutu": kutu, "ortam": {k: v for k, v in env.items() if k.startswith("MOTOR_")},
            "senaryo": senaryo, "kod": p.returncode, "sn": round(time.time() - t0),
            "en_dusuk_bos_ram_mb": round(tepe_dusuk)}
    if p.returncode == 0:
        for c in ("donemler.js", "devletler_harita.js", "bolgeler.js"):
            shutil.copy2(os.path.join(AG, "data", c), os.path.join(cikti, c))
        meta["sha256"] = {c: me.sha(os.path.join(cikti, c))
                          for c in ("donemler.js", "devletler_harita.js", "bolgeler.js")}
    log = io.open(os.path.join(cikti, "motor.log"), encoding="utf-8", errors="replace").read()
    meta["onbellek"] = re.findall(r"🧱 ÖNBELLEK (\w+): isabet ([\d,]+) · ıska ([\d,]+) · yazılan ([\d,]+)", log)
    meta["yol"] = ("PARALEL" if "[PARALEL] FAZ 1" in log else
                   "SUREC" if "[SÜREÇ]" in log else "SIRALI")
    m = re.search(r"Yabancı devlet gövdeleri\s+(\S.*?)\s{2,}", log.split("AŞAMA BİLANÇOSU")[-1])
    meta["govde_asama"] = m.group(1) if m else None
    with open(os.path.join(cikti, "meta.json"), "w", encoding="utf-8") as f:
        json.dump(meta, f, ensure_ascii=False, indent=1)
    print(f"  {ad}: kod {p.returncode} · {meta['sn']} sn · yol {meta['yol']} · "
          f"gövde aşaması {meta['govde_asama']} · önbellek {meta['onbellek']} · "
          f"en düşük boş RAM {meta['en_dusuk_bos_ram_mb']} MB", flush=True)
    return meta


def senaryo_sec(kutu):
    """Kutunun içinden: sahibi Osmanlı OLMAYAN bir yerleşimi kopyala (0,05° öteye) +
    başka birinin bir dönemini 30 gün kaydır ⇒ 'iki yer, iki zaman' minyatürü."""
    sys.path.insert(0, os.path.join(AG, "arac"))
    cwd = os.getcwd()
    os.chdir(AG)
    import girdi
    Y = girdi.yukle()
    os.chdir(cwd)
    x0, y0, x1, y1 = (float(v) for v in kutu.split(","))
    ic = [y for y in Y if x0 + 1 <= y["lon"] <= x1 - 1 and y0 + 1 <= y["lat"] <= y1 - 1]
    adlar = {}
    for y in Y:
        adlar[y["ad"]] = adlar.get(y["ad"], 0) + 1
    ic = [y for y in ic if adlar[y["ad"]] == 1]
    yab = [y for y in ic if len(y["s"]) >= 1 and all(s["d"] != "osmanli" for s in y["s"])]
    kay = [y for y in ic if len(y["s"]) >= 2 and y is not (yab[0] if yab else None)]
    ops = []
    if yab:
        ops.append({"kopya": yab[0]["ad"], "ad": yab[0]["ad"] + " LEGO", "dlon": 0.05, "dlat": 0.0})
    if kay:
        ops.append({"kaydir": kay[0]["ad"], "alan": "s", "i": 1, "gun": 30})
    yol = os.path.join(SCR, "lego_senaryo.json")
    with open(yol, "w", encoding="utf-8") as f:
        json.dump(ops, f, ensure_ascii=False)
    print(f"  senaryo: {ops}")
    return yol


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--kutu", default="26,36,45,42")
    a = ap.parse_args()
    if not os.path.exists(AG):
        subprocess.run(["git", "-C", r"C:\atlas", "worktree", "add", "--detach", AG, "HEAD"], check=True)
    os.makedirs(CIKTI, exist_ok=True)
    me.sira_al("LEGO-0925")
    try:
        if not os.path.exists(os.path.join(CIKTI, "Y", "meta.json")):
            shutil.rmtree(ONB, ignore_errors=True)
        os.makedirs(ONB, exist_ok=True)
        acik = {"MOTOR_ONBELLEK_DIZIN": ONB}
        kapali = {"MOTOR_ONBELLEK_KAPALI": "1"}
        sonuc = {}
        sonuc["S"] = kos("S", a.kutu, dict(kapali, MOTOR_PARALEL_KAPALI="1"))
        sonuc["P"] = kos("P", a.kutu, kapali)
        sonuc["Y"] = kos("Y", a.kutu, acik)
        sonuc["O"] = kos("O", a.kutu, acik)
        sen = senaryo_sec(a.kutu)
        sonuc["SEN_O"] = kos("SEN_O", a.kutu, acik, sen)
        sonuc["SEN_K"] = kos("SEN_K", a.kutu, kapali, sen)
    finally:
        me.sira_birak()
    print("\n== BİT DENKLİĞİ (sha256 · donemler / devletler_harita / bolgeler)")
    for x in sonuc:
        s = sonuc[x].get("sha256") or {}
        print(f"  {x:<6} " + " ".join((s.get(c) or 'YOK')[:12] for c in
                                       ("donemler.js", "devletler_harita.js", "bolgeler.js")))
    for A, B in (("S", "P"), ("P", "Y"), ("P", "O"), ("Y", "O"), ("SEN_K", "SEN_O")):
        sa, sb = sonuc[A].get("sha256"), sonuc[B].get("sha256")
        print(f"  {A} ≟ {B}: {'✓ BİT BİT AYNI' if sa and sa == sb else '✗ FARKLI' if sa and sb else 'ölçülemedi'}")
    json.dump(sonuc, open(os.path.join(CIKTI, "ozet.json"), "w", encoding="utf-8"),
              ensure_ascii=False, indent=1)


if __name__ == "__main__":
    main()
