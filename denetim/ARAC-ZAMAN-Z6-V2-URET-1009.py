# -*- coding: utf-8 -*-
"""ARAC-ZAMAN-Z6-V2-URET-1009 — Z6 yamasını BUGÜNKÜ tabana karşı yeniden kurar (v2).

Kullanım:
    py denetim/ARAC-ZAMAN-Z6-V2-URET-1009.py <taban-agaci> <eski-z6.diff> <cikti-v2.diff>
      <taban-agaci> : tabanın açık olduğu worktree (girdi.yukle() orada koşar; ağaca YAZILMAZ)
Kural (koordinatör, 9 Ekim 2026): bir yamanın "değişmedi" iddiası TABANINA görelidir.
  v2 kayıt = Z6'nın KENDİ ön-1281 dönemleri (v1'den aynen, kaynak/alıntı/kesinlik dahil)
           + tabanın BUGÜNKÜ s: dizisi (girdi.yukle) — 1281-01-01 ve sonrası AYNEN.
  'birlesti' kaydında tabanın ilk döneminin yalnız `f`si geri çekilir ve `kaynak` başına
  v1'deki "f 1281-01-01'den geri çekildi — …" öneki eklenir (tabanın kaynağı "‖ önceki:" ile korunur).
GERÇEK ÇAKIŞMA (kayıt v2'ye ALINMAZ, basılır): tabanın ilk dönemi artık 1281-01-01'de başlamıyor
  ya da 1281 sahibi v1'in bağlandığı sahip değil (zincirin bağ noktası değişmiş).
Çıkış: 0 üretildi, çakışma yok · 1 çakışma var (yine de üretildi, çakışanlar dışarıda).
"""
import sys, io, os, re, json, copy, subprocess, importlib.util

BURASI = os.path.dirname(os.path.abspath(__file__))
_spec = importlib.util.spec_from_file_location("sinav", os.path.join(BURASI, "ARAC-ZAMAN-Z6-V2-SINAV-1009.py"))
S = importlib.util.module_from_spec(_spec)
_spec.loader.exec_module(S)   # sınav modülü stdout'u UTF-8'e sarar (burada ikinci kez sarılmaz)
EPOK, YOL = S.EPOK, S.YAMA_YOL


def main():
    agac, eski_diff, cikti = sys.argv[1:4]
    metin = S.diffden_dosya(eski_diff, YOL)
    degisken, eski = S.yama_oku(metin)
    sha = subprocess.run(["git", "-C", agac, "rev-parse", "HEAD"], capture_output=True, text=True).stdout.strip()
    kod = ("import sys,json;sys.path.insert(0,'arac');import girdi;"
           "Y={y['ad']:y.get('s') for y in girdi.yukle(sessiz=True)};"
           "sys.stdout.buffer.write(json.dumps(Y,ensure_ascii=False).encode('utf-8'))")
    o = subprocess.run(["py", "-c", kod], cwd=agac, capture_output=True, env=dict(os.environ, PYTHONHASHSEED="0"))
    if o.returncode:
        raise SystemExit(o.stderr.decode("utf-8", "replace")[-500:])
    T = json.loads(o.stdout.decode("utf-8"))
    yeni, cakisma, sinif = [], [], {}
    for k in eski:
        ad = k["ad"]
        gecis = k["once1281"]["gecis"]
        n = len(k["once1281"]["dayanak"])
        on_n = n - 1 if gecis == "birlesti" else n
        on = copy.deepcopy(k["s"][:on_n])
        v1_taban = k["s"][on_n:]
        ts = T.get(ad)
        if ts is None:
            cakisma.append(f"{ad}: tabanda YOK"); continue
        ts = copy.deepcopy(ts)
        if S.pad(ts[0]["f"]) < S.pad(EPOK):
            cakisma.append(f"{ad}: tabanın ilk dönemi zaten {ts[0]['f']} (1281 öncesi) — ZATEN MAIN'DE/çakışma"); continue
        if ts[0]["f"] != EPOK:
            cakisma.append(f"{ad}: tabanın ilk dönemi {ts[0]['f']} (EPOK değil)"); continue
        if ts[0].get("d") != v1_taban[0].get("d"):
            cakisma.append(f"{ad}: 1281 sahibi değişti v1 {v1_taban[0].get('d')} → taban {ts[0].get('d')}"); continue
        if gecis == "birlesti":
            kv1 = v1_taban[0].get("kaynak", "")
            ek = kv1.split(S.AYRAC, 1)[0] if S.AYRAC in kv1 else kv1
            if not ek.startswith(S.ONEK):
                cakisma.append(f"{ad}: v1 birleşme öneki okunamadı"); continue
            ts[0]["f"] = v1_taban[0]["f"]
            ts[0]["kaynak"] = ek + (S.AYRAC + ts[0]["kaynak"] if ts[0].get("kaynak") else "")
        else:
            if on[-1].get("t") != EPOK:
                cakisma.append(f"{ad}: sınır kaydının son ön-dönemi t={on[-1].get('t')}"); continue
        s2 = on + ts
        # sıfır uzunluk / ters (bütün dizi) · bitişiklik YALNIZ ön-1281 zinciri + bağ noktasında
        # (s: dizisindeki boşluk OSMANLI demektir — 1281 sonrası boşluk kusur değildir)
        for i, p in enumerate(s2):
            if "t" in p and S.pad(p["f"]) >= S.pad(p["t"]):
                cakisma.append(f"{ad}: f>=t {p['f']}→{p['t']}")
            if 0 < i <= on_n and s2[i - 1].get("t") != p["f"]:
                cakisma.append(f"{ad}: bitişik değil [{i-1}]t={s2[i-1].get('t')} [{i}]f={p['f']}")
        r = copy.deepcopy(k)
        r["s"] = s2
        yeni.append(r)
        sinif[ad] = "TEMİZ" if S.dilim(v1_taban) == S.dilim(ts) and S.dilim(k["s"]) == S.dilim(s2) else "BAYAT→v2'de main değeri"
    bas_eski = metin.split("window." + degisken[0] + " = ", 1)[0]
    satirlar = bas_eski.rstrip("\n").split("\n")
    ek_bas = [
        f"// 🔴 v2 (ZAMAN-Z6-1009-KOORD-v2, UMIT, 9 Ekim 2026) — TABAN origin/main {sha}.",
        "//   1281-01-01 ve sonrası her dönem BU TABANDAKİ girdi.yukle() değeridir (AYNEN). v1",
        "//   origin/makine/umit e28edfdc verisinden üretilmişti ve 6 kayıtta (Ankara · Kars · Kahire ·",
        "//   Gence · Taşkent · Hucend) main'in sonraki 1281-1923 düzeltmelerini geri yazıyordu.",
        "//   'Dokunulmadı' iddiası bu TABANA görelidir. Sınav: denetim/ARAC-ZAMAN-Z6-V2-SINAV-1009.py",
    ]
    i = next(j for j, s in enumerate(satirlar) if s.startswith("// 🔴 GÜN ARALIĞI"))
    satirlar = satirlar[:i] + ek_bas + satirlar[i:]
    icerik = "\n".join(satirlar) + "\n" + "window." + degisken[0] + " = " + \
        json.dumps(yeni, ensure_ascii=False, indent=1) + ";\n"
    b = icerik.encode("utf-8")
    h = subprocess.run(["git", "hash-object", "--stdin"], input=b, capture_output=True).stdout.decode().strip()
    govde = icerik[:-1].split("\n")
    diff = (f"diff --git a/{YOL} b/{YOL}\nnew file mode 100644\nindex 00000000..{h[:8]}\n"
            f"--- /dev/null\n+++ b/{YOL}\n@@ -0,0 +1,{len(govde)} @@\n" + "".join("+" + s + "\n" for s in govde))
    io.open(cikti, "w", encoding="utf-8", newline="\n").write(diff)
    print(f"taban {sha} · v1 {len(eski)} kayıt → v2 {len(yeni)} · çakışma {len(cakisma)}")
    for c in cakisma:
        print("  ✗", c)
    from collections import Counter
    print("sınıf:", dict(Counter(sinif.values())))
    for ad, s in sinif.items():
        if s != "TEMİZ":
            print("  ", ad, s)
    print("yazıldı:", cikti, f"({len(diff.encode('utf-8'))} bayt, {len(govde)} satır)")
    return 1 if cakisma else 0


if __name__ == "__main__":
    sys.exit(main())
