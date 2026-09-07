# -*- coding: utf-8 -*-
"""SINAV-JSON-ESDEGER-0907 — `.js` ile `.json` AYNI VERİYİ mi taşıyor?

YUK-FETCH-0907 · 7 Eylül 2026 · 1.MURAT'ın ② numaralı isteği:
    *"`.json` üretildikten sonra ne sınayacağını ŞİMDİ yaz: dosya bazında
      kayıt sayısı `.js` ile BİREBİR mi? Sessiz kayıp en pahalısı."*

🔴 VE BİR TUZAĞI ÖNCE YAZIYORUM — SINAV DAİRESEL OLMAMALI.
   `.json` zaten `JSON.stringify(js_nesnesi)` ile üretiliyor. O yüzden
   "`.json`u parse et, `.js` ile karşılaştır" sınavı **her zaman geçer**
   ve HİÇBİR ŞEY ÖLÇMEZ. Kendi kendini doğrulayan bir sınav, sınav
   değildir.
   ⇒ Asıl risk `JSON.stringify`in **TEMSİL EDEMEDİĞİ** değerler:
        undefined · function · NaN · Infinity · -Infinity · -0
        Symbol · BigInt · Date (dizgiye döner, geri gelmez)
        döngüsel başvuru (throw eder)
     Bunlar JS'te VARDIR, JSON'da YOKTUR, ve dönüşümde **sessizce
     kaybolur ya da null olur.**
   ⇒ Bu sınav ONLARI arar. Sıfır çıkarsa dönüşüm KAYIPSIZDIR.

🔴 İKİNCİ SINAV — SAYIM: her `window.<AD>` için öğe sayısı, `.js` ve
   `.json` tarafında AYRI AYRI ölçülür. Eşitlik beklenir; eşitsizlik
   sessiz kaybın imzasıdır.

KULLANIM
    py denetim/SINAV-JSON-ESDEGER-0907.py
    py denetim/SINAV-JSON-ESDEGER-0907.py --json-dizin data
"""
import argparse
import io
import json
import os
import subprocess
import sys

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
HEDEFLER = ["devletler_harita", "donemler", "altlik"]

SINAV_JS = r"""
const fs = require('fs'), vm = require('vm');
const jsYol = process.argv[2], jsonYol = process.argv[3];

// ---- 1) .js'i İZOLE bağlamda oku (§7: tek bağlamda eval sessiz ezer)
const ctx = { window: {}, console: { log(){}, warn(){}, error(){} } };
vm.createContext(ctx);
vm.runInContext(fs.readFileSync(jsYol, 'utf8'), ctx, { timeout: 600000 });

// ---- 2) JSON'un TEMSİL EDEMEDİĞİ değerleri ara (DAİRESEL OLMAYAN sınav)
const bulgu = { undefined: 0, function: 0, NaN: 0, Infinity: 0,
                '-Infinity': 0, '-0': 0, symbol: 0, bigint: 0, date: 0 };
const ornek = {};
const gorulen = new WeakSet();
let dongusel = 0, dugum = 0;

function gez(v, yol) {
  dugum++;
  if (v === null) return;
  const t = typeof v;
  if (t === 'undefined') { bulgu.undefined++; ornek.undefined ||= yol; return; }
  if (t === 'function')  { bulgu.function++;  ornek.function  ||= yol; return; }
  if (t === 'symbol')    { bulgu.symbol++;    ornek.symbol    ||= yol; return; }
  if (t === 'bigint')    { bulgu.bigint++;    ornek.bigint    ||= yol; return; }
  if (t === 'number') {
    if (Number.isNaN(v))      { bulgu.NaN++;         ornek.NaN ||= yol; }
    else if (v === Infinity)  { bulgu.Infinity++;    ornek.Infinity ||= yol; }
    else if (v === -Infinity) { bulgu['-Infinity']++; ornek['-Infinity'] ||= yol; }
    else if (Object.is(v, -0)){ bulgu['-0']++;       ornek['-0'] ||= yol; }
    return;
  }
  if (t !== 'object') return;
  // 🔴 `v instanceof Date` KULLANMIYORUM — ATEŞLEME sınavında KAÇIRDI.
  //    Sebep: veri `vm.createContext` ile AYRI BİR REALM'de koşuyor ve o
  //    realm'in kendi `Date`i var; `instanceof` realm'ler arasında FALSE
  //    döner. Alet "Date yok" dedi, oysa fikstürde VARDI.
  //    ⇒ `Object.prototype.toString` realm'den bağımsızdır.
  //    📌 Bu kusuru gerçek veri GÖSTEREMEZDİ (orada Date yok) — yalnız
  //      zorlanmış ateşleme dalı gösterdi. `C13`ün varlık sebebi.
  if (Object.prototype.toString.call(v) === '[object Date]') {
    bulgu.date++; ornek.date ||= yol; return;
  }
  if (gorulen.has(v)) { dongusel++; return; }
  gorulen.add(v);
  if (Array.isArray(v)) {
    for (let i = 0; i < v.length; i++) {
      // 🔴 SEYREK DİZİ: delik `undefined` değil, JSON'da `null` olur
      if (!(i in v)) { bulgu.undefined++; ornek.undefined ||= yol + '[' + i + '] (DELİK)'; continue; }
      gez(v[i], yol + '[' + i + ']');
    }
  } else {
    for (const k of Object.keys(v)) gez(v[k], yol + '.' + k);
  }
}

const sayim = {};
for (const k of Object.keys(ctx.window)) {
  const v = ctx.window[k];
  sayim[k] = Array.isArray(v) ? v.length
           : (v && typeof v === 'object') ? Object.keys(v).length : 1;
  gez(v, k);
}

// ---- 3) .json tarafını AYRI oku ve AYRI say
let jsonSayim = null, jsonHata = null;
try {
  const j = JSON.parse(fs.readFileSync(jsonYol, 'utf8'));
  jsonSayim = {};
  for (const k of Object.keys(j)) {
    const v = j[k];
    jsonSayim[k] = Array.isArray(v) ? v.length
                 : (v && typeof v === 'object') ? Object.keys(v).length : 1;
  }
} catch (e) { jsonHata = e.message.slice(0, 160); }

process.stdout.write(JSON.stringify({
  jsSayim: sayim, jsonSayim, jsonHata, bulgu, ornek, dongusel, dugum
}));
"""


def yaz(s):
    try:
        print(s, flush=True)
    except Exception:
        print(s.encode("ascii", "replace").decode("ascii"), flush=True)


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--json-dizin",
                    default=os.path.join("denetim", "_sinav_json"))
    # 🔴 `--js-dizin` + `--hedef`: C13'ün ATEŞLEME dalını ZORLAMAK için.
    #    Gerçek veride kayıp yok (ölçüldü: 🟢 TEMİZ) ⇒ 🔴 dalı gerçek
    #    veriyle KOŞULAMAZ, ve "zorlanamayan dal, denetimsiz daldır".
    #    Bu iki bayrak sahte bir fikstüre yöneltip dalı ateşler.
    ap.add_argument("--js-dizin", default="data")
    ap.add_argument("--hedef", action="append",
                    help="HEDEFLER yerine bu adları sına (tekrarlanabilir)")
    a = ap.parse_args()
    global HEDEFLER
    if a.hedef:
        HEDEFLER = a.hedef

    okuyucu = os.path.join(KOK, "denetim", "_sinav_esdeger.js")
    io.open(okuyucu, "w", encoding="utf-8").write(SINAV_JS)

    yaz("=" * 74)
    yaz("SINAV-JSON-ESDEGER-0907 · json dizini: %s" % a.json_dizin)
    yaz("=" * 74)
    yaz("🔴 DAİRESEL DEĞİL: `.json`u `.js`e karşı parse edip karşılaştırmak")
    yaz("   HER ZAMAN geçer (json zaten ondan üretildi). Bu sınav JSON'un")
    yaz("   TEMSİL EDEMEDİĞİ değerleri arar — sessiz kaybın tek kaynağı.")
    yaz("")

    kotu = 0
    for ad in HEDEFLER:
        js = os.path.join(KOK, a.js_dizin, ad + ".js")
        jsn = os.path.join(KOK, a.json_dizin, ad + ".json")
        yaz("── %s" % ad)
        if not os.path.exists(js):
            yaz("   🔴 .js BULUNAMADI: %s" % js)
            kotu += 1
            continue
        if not os.path.exists(jsn):
            yaz("   ⚪ .json henüz YOK (%s) — ÖLÇÜLEMEDİ, kusur DEĞİL."
                % os.path.relpath(jsn, KOK))
            yaz("      önce: py denetim/ARAC-JSON-URET-0907.py")
            continue
        r = subprocess.run(["node", okuyucu, js, jsn], capture_output=True)
        if r.returncode != 0:
            yaz("   🔴 node ÇÖKTÜ: %s"
                % (r.stderr or b"")[-260:].decode("utf-8", "replace"))
            kotu += 1
            continue
        d = json.loads(r.stdout)

        if d.get("jsonHata"):
            yaz("   🔴 .json OKUNAMADI: %s" % d["jsonHata"])
            kotu += 1
            continue

        # ① SAYIM karşılaştırması
        js_s, jn_s = d["jsSayim"], d["jsonSayim"]
        eksik = [k for k in js_s if k not in jn_s]
        fazla = [k for k in jn_s if k not in js_s]
        ayrik = [(k, js_s[k], jn_s[k]) for k in js_s
                 if k in jn_s and js_s[k] != jn_s[k]]
        yaz("   anahtar: .js %d · .json %d" % (len(js_s), len(jn_s)))
        for k in sorted(js_s):
            im = "🟢" if (k in jn_s and jn_s[k] == js_s[k]) else "🔴"
            yaz("      %s %-22s .js %8d   .json %8s"
                % (im, k, js_s[k], jn_s.get(k, "YOK")))
        if eksik or fazla or ayrik:
            kotu += 1
            yaz("   🔴 SAYIM AYRIŞTI — eksik:%s fazla:%s ayrık:%s"
                % (eksik, fazla, ayrik))

        # ② JSON'un TEMSİL EDEMEDİĞİ değerler
        b = d["bulgu"]
        yaz("   gezilen düğüm: %d · döngüsel başvuru: %d"
            % (d["dugum"], d["dongusel"]))

        # 🔴 İKİ KOVA — ve ayrımı 7 Eylül'de ÖLÇÜLEREK kondu.
        #   İlk sürüm hepsini "KAYIP RİSKİ" sayıyordu ve `devletler_harita`
        #   için 🔴 bastı. Ölçtüm: üç vakanın üçü de `-0`, ve üçü de AYNI
        #   nokta — `[-49.74, -0]`, ekvatorda bir enlem.
        #       -0 === 0          -> true   (SAYISAL olarak AYNI)
        #       Object.is(-0, 0)  -> false  (BİT düzeyinde farklı)
        #   ⇒ `JSON.stringify(-0)` = "0" bir KAYIP DEĞİL, bir NORMALLEŞTİRME.
        #     Geometride -0 ile 0 aynı noktadır; hiçbir çizim değişmez.
        #   📌 Hepsini tek kovada saymak, zararsız bir farkı bir ENGEL gibi
        #     gösterirdi — ve bu proje "aynı sayı ≠ aynı vaka" dersini
        #     pahalı öğrendi. Ayrım ÖLÇÜMDEN sonra kondu, önce değil.
        ZARARSIZ = ("-0",)
        agir = {k: n for k, n in b.items() if n and k not in ZARARSIZ}
        hafif = {k: n for k, n in b.items() if n and k in ZARARSIZ}

        if not agir and not d["dongusel"]:
            if hafif:
                yaz("   🟢 SAYISAL olarak KAYIPSIZ — yalnız bit düzeyinde fark:")
                for k, n in hafif.items():
                    yaz("      🟡 %-10s %6d   ilk: %s   (%s === 0 ⇒ ZARARSIZ)"
                        % (k, n, d["ornek"].get(k), k))
            else:
                yaz("   🟢 JSON'un TEMSİL EDEMEYECEĞİ DEĞER YOK ⇒ KAYIPSIZ")
        else:
            kotu += 1
            yaz("   🔴 GERÇEK KAYIP RİSKİ:")
            for k, n in agir.items():
                yaz("      %-12s %6d   ilk: %s" % (k, n, d["ornek"].get(k)))
            if d["dongusel"]:
                yaz("      döngüsel başvuru %d — JSON.stringify THROW eder"
                    % d["dongusel"])
        yaz("")

    try:
        os.remove(okuyucu)
    except Exception:
        pass
    yaz("=" * 74)
    yaz("SONUÇ: %s" % ("🟢 TEMİZ" if kotu == 0 else "🔴 %d dosyada sorun" % kotu))
    yaz("⚠️ SINIR: bu sınav DEĞERLERİ karşılaştırmaz, TEMSİL EDİLEBİLİRLİĞİ")
    yaz("   ve SAYIMI ölçer. Bir sayının 3.14 iken 3.15 olması bu sınavdan")
    yaz("   GEÇER — o ayrı bir sınavdır ve YAZILMADI.")
    return 1 if kotu else 0


if __name__ == "__main__":
    sys.exit(main())
