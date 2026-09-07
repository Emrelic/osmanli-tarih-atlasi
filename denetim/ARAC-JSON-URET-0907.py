# -*- coding: utf-8 -*-
"""ARAC-JSON-URET-0907 — geometri `<script>`lerini `.json`a cevirir.

⑭/YUK-FETCH-0907 · 7 Eylul 2026 · OPUS HAZIR KITA 124.

🔴 BU ARAC VERI YAZMAZ — varsayilani KURU KOSU. `data/` altina yazmak
   icin `--yaz` gerekir ve KOSU 8 SURERKEN VERILMEZ (§7: koşu sırasında
   `data/` DONUK). Varsayilan cikti `denetim/_sinav_json/`.

────────────────────────────────────────────────────────────────────────
NICIN VAR — olculdu (7 Eylul, kosu 8 surerken, CPU paylasimli):
    domHazir  26.263 ms  ·  207 kaynak  ·  103,75 MB
    devletler_harita.js  54.710 KB · 18.754 ms
    donemler.js          31.741 KB · 16.505 ms
    altlik.js            10.788 KB · 14.245 ms
Bu uc dosya `<script>` etiketiyle geliyor ⇒ tarayici onlari JAVASCRIPT
KAYNAK KODU olarak, ANA IS PARCACIGINDA ayristiriyor. `JSON.parse` yerel
koddur ve tipik olarak kat kat hizlidir; ustelik `fetch` asenkrondur.

🔴 AMA BU ARAC O IDDIAYI KANITLAMAZ — olcen `denetim/SINAV-FETCH-0907.html`.
   Burasi yalniz DONUSTURUCU.
────────────────────────────────────────────────────────────────────────

🔴 AYRISTIRICI YAZMIYORUM. Dosyalar JavaScript; onlari `node` okuyor
   (CLAUDE.md: "veri zaten bir dilde yazilmissa, o dilin yorumlayicisini
   cagir" — bu proje o dersi ALTI kez ogrendi).
🔴 VE HER DOSYA IZOLE BAGLAMDA (`vm.createContext`): tek baglamda `eval`,
   ayni `window.X` adini kullanan iki dosyada SESSIZ EZME uretir (§7).

KULLANIM
    py denetim/ARAC-JSON-URET-0907.py                 # kuru kosu, olcum
    py denetim/ARAC-JSON-URET-0907.py --cikti <dizin> # baska dizine yaz
    py denetim/ARAC-JSON-URET-0907.py --yaz           # 🔴 data/ altina (KOSU BITINCE)

MOTORA INECEK SATIR — Oturum 0 uygular, BEN UYGULAMAM:
    `arac/uret_petek.py` bu dosyalari yazdigi yerde, `<script>` gövdesinin
    YANINA bir de `.json` yazsin. Onerilen bicim asagidaki `_JSON_BICIMI`
    ile BIREBIR ayni: tek bir nesne, anahtarlari `window.` adlari.
    ⚠️ Iki dosya birden yazilmali (`.js` GERI DUSUS icin KALMALI) —
      `.json` yoksa site eski yoldan acilmaya devam etmeli.
"""
import argparse
import io
import json
import os
import subprocess
import sys
import time

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

# 🔴 HEDEF LISTESI OLCULDU, VARSAYILMADI: index.html'in gercekten
#    <script src> ile yukledigi ve >1 MB olan geometri dosyalari.
#    ⚠️ `petek_govde.js` LISTEDE YOK ve bu KASITLI — dosyanin kendi
#      basligi "index.html BU DOSYAYI YUKLEMEZ" diyor, olcum dogruladi
#      (207 kaynak arasinda geçmiyor). Sartname onu sayiyordu; DUZELTME.
HEDEFLER = [
    "data/devletler_harita.js",
    "data/donemler.js",
    "data/altlik.js",
]

_JSON_BICIMI = """
  { "DEVLET_PARCALAR": [...], "DEVLET_HARITA": [...], ... }
  yani: dosyanin tanimladigi HER `window.<AD>` degeri, ayni adla.
"""

OKU_JS = r"""
const fs = require('fs'), vm = require('vm');
const yol = process.argv[2];
const ctx = { window: {}, console: { log(){}, warn(){}, error(){} } };
vm.createContext(ctx);
const t0 = Date.now();
vm.runInContext(fs.readFileSync(yol, 'utf8'), ctx, { timeout: 600000 });
const ayristirma = Date.now() - t0;
const out = {};
for (const k of Object.keys(ctx.window)) out[k] = ctx.window[k];
const t1 = Date.now();
const metin = JSON.stringify(out);
process.stderr.write(JSON.stringify({
  ayristirma_ms: ayristirma,
  json_uretim_ms: Date.now() - t1,
  anahtarlar: Object.keys(out),
  json_bayt: Buffer.byteLength(metin)
}));
process.stdout.write(metin);
"""


def yaz(s):
    try:
        print(s, flush=True)
    except Exception:
        print(s.encode("ascii", "replace").decode("ascii"), flush=True)


def cevir(js_yolu, cikti_dizini, gercekten_yaz):
    tam = os.path.join(KOK, js_yolu)
    if not os.path.exists(tam):
        yaz("   🔴 BULUNAMADI: %s" % js_yolu)
        return None
    ham = os.path.getsize(tam)

    okuyucu = os.path.join(cikti_dizini, "_oku_geo.js")
    io.open(okuyucu, "w", encoding="utf-8").write(OKU_JS)

    t0 = time.time()
    r = subprocess.run(["node", okuyucu, tam], capture_output=True)
    sure = time.time() - t0
    if r.returncode != 0:
        # 🔴 SESSIZ GECMIYORUM — bir aracin cokmesi yanlis cevaptan iyidir
        yaz("   🔴 node COKTU (%s): %s"
            % (js_yolu, (r.stderr or b"")[-300:].decode("utf-8", "replace")))
        return None
    try:
        olcu = json.loads(r.stderr.decode("utf-8", "replace"))
    except Exception:
        olcu = {}

    ad = os.path.basename(js_yolu)[:-3] + ".json"
    hedef_dizin = os.path.join(KOK, "data") if gercekten_yaz else cikti_dizini
    hedef = os.path.join(hedef_dizin, ad)
    io.open(hedef, "wb").write(r.stdout)
    yeni = os.path.getsize(hedef)

    yaz("   %-30s %7.2f MB -> %7.2f MB  (%+5.1f%%)  node ayristirma %6d ms"
        % (os.path.basename(js_yolu), ham / 1048576, yeni / 1048576,
           100.0 * (yeni - ham) / ham, olcu.get("ayristirma_ms", -1)))
    yaz("      anahtarlar: %s" % ", ".join(olcu.get("anahtarlar", []))[:110])
    yaz("      yazildi   : %s" % os.path.relpath(hedef, KOK))
    try:
        os.remove(okuyucu)
    except Exception:
        pass
    return {"js": js_yolu, "json": os.path.relpath(hedef, KOK),
            "ham_bayt": ham, "json_bayt": yeni,
            "anahtarlar": olcu.get("anahtarlar", []),
            "node_ayristirma_ms": olcu.get("ayristirma_ms"),
            "toplam_s": round(sure, 1)}


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--cikti", default=os.path.join(KOK, "denetim",
                                                    "_sinav_json"))
    ap.add_argument("--yaz", action="store_true",
                    help="🔴 data/ altina yaz — KOSU SURERKEN KULLANMA")
    a = ap.parse_args()

    if a.yaz:
        kilit = os.path.join(KOK, ".petek.kilit")
        if os.path.exists(kilit):
            yaz("🔴 `.petek.kilit` VAR — koşu sürüyor olabilir. `data/` DONUK (§7).")
            yaz("   --yaz REDDEDILDI. Kuru kosu icin bayragi kaldirin.")
            return 2
    os.makedirs(a.cikti, exist_ok=True)

    yaz("=" * 74)
    yaz("ARAC-JSON-URET-0907 · %s"
        % ("🔴 data/ ALTINA YAZIYOR" if a.yaz else "KURU KOSU -> " +
           os.path.relpath(a.cikti, KOK)))
    yaz("=" * 74)
    sonuc = []
    for h in HEDEFLER:
        s = cevir(h, a.cikti, a.yaz)
        if s:
            sonuc.append(s)
    yaz("")
    th = sum(s["ham_bayt"] for s in sonuc)
    tj = sum(s["json_bayt"] for s in sonuc)
    yaz("TOPLAM  %.2f MB (.js)  ->  %.2f MB (.json)   fark %+.2f MB"
        % (th / 1048576, tj / 1048576, (tj - th) / 1048576))
    yaz("")
    yaz("⚠️ BOYUT KAZANC DEGIL — kazanc AYRISTIRMADA. Bunu bu arac OLCMEZ;")
    yaz("   olcen: denetim/SINAV-FETCH-0907.html (tarayicida, kontrol gruplu).")
    rapor = os.path.join(a.cikti, "URETIM-RAPORU.json")
    io.open(rapor, "w", encoding="utf-8").write(
        json.dumps({"uretim": time.strftime("%Y-%m-%d %H:%M:%S"),
                    "yazildi_data_altina": a.yaz,
                    "dosyalar": sonuc}, ensure_ascii=False, indent=1))
    yaz("rapor: %s" % os.path.relpath(rapor, KOK))
    return 0


if __name__ == "__main__":
    sys.exit(main())
