# -*- coding: utf-8 -*-
"""IC NOT YAMASI UYGULAYICISI — denetim/YAMA-IC-NOT-*.json

Kronoloji maddelerinin KULLANICIYA GÖRÜNEN alanlarına (d · gun · b) sızmış
süreç/editoryal notları (⚠️ NOT, `dosya.js`, KITA N, "atlas verisinde" ...)
metinden ayırır ve silmez: `ic_not_<alan>` alanına TAŞIR.

Neden `ic_not_<alan>` (tek `ic_not` değil): aynı maddenin hem `d` hem `gun`
alanı yamada olabilir; JS nesne değişmezinde yinelenen anahtar SESSİZCE
son değeri tutar ve ilk not kaybolur.

Kurallar:
  · Yalnız kova karisik / ic-not / kozmetik uygulanır; `mesru` DOKUNULMAZ.
  · eski metin dosyada `alan:"..."` biçiminde TAM BİR KEZ geçmeli; 0 ya da
    2+ ise kayıt ATLANIR ve sayılıp basılır (sessiz atlama yok).
  · --haric ile başka oturumun o an yazdığı dosyalar dışarıda bırakılır.
  · --uygula verilmezse KURU KOŞU: hiçbir dosya yazılmaz.

    py arac/ic_not_uygula.py denetim/YAMA-IC-NOT-0913.json [--uygula] [--haric a.js,b.js]
"""
import io, json, os, re, sys, collections

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
UYGULANAN_KOVALAR = {"karisik", "ic-not", "kozmetik"}


def js_dizge(s):
    # data/*.js dosyaları JSON uyumlu çift tırnaklı dizge kullanıyor
    return json.dumps(s, ensure_ascii=False)


def main():
    arg = sys.argv[1:]
    if not arg:
        print(__doc__); sys.exit(2)
    yama = arg[0]
    uygula = "--uygula" in arg
    haric = set()
    if "--haric" in arg:
        haric = {h.strip().replace("\\", "/") for h in arg[arg.index("--haric") + 1].split(",")}

    Y = json.load(io.open(os.path.join(KOK, yama), encoding="utf-8"))
    kayitlar = Y["kayitlar"]
    dosyaya = collections.defaultdict(list)
    for r in kayitlar:
        dosyaya[r["dosya"].replace("\\", "/")].append(r)

    say = collections.Counter()
    atlanan = []
    for yol, rs in sorted(dosyaya.items()):
        tam = os.path.join(KOK, yol)
        if os.path.basename(yol) in haric or yol in haric:
            for r in rs:
                if r["kova"] in UYGULANAN_KOVALAR:
                    say["haric_dosya"] += 1
            continue
        metin = io.open(tam, encoding="utf-8").read()
        yeni = metin
        for r in rs:
            if r["kova"] not in UYGULANAN_KOVALAR:
                say["mesru_dokunulmadi"] += 1
                continue
            if r["eski_metin"] == r["yeni_metin"]:
                say["degisiklik_yok"] += 1
                continue
            if not r["yeni_metin"].strip():
                atlanan.append((yol, r["t"], r["alan"], "yeni metin BOŞ — kullanıcı alanı boşalırdı"))
                continue
            alan = r["alan"]
            desen = re.compile(r"(?<![A-Za-z_])" + re.escape(alan) + r'\s*:\s*' + re.escape(js_dizge(r["eski_metin"])))
            bul = list(desen.finditer(yeni))
            kalip = js_dizge
            if not bul:
                # yama metni KAYNAK biçiminde alınmış olabilir (içinde zaten `\"`
                # duruyor) — o zaman çift tırnak içinde OLDUĞU GİBİ ara ve yaz
                d1 = re.compile(r"(?<![A-Za-z_])" + re.escape(alan) + r'\s*:\s*' + re.escape('"' + r["eski_metin"] + '"'))
                bul = list(d1.finditer(yeni))
                if bul:
                    kalip = lambda s: '"' + s + '"'
            if not bul:
                # tek tırnaklı ya da ters tırnaklı JS dizgesi: metin HAM duruyor
                for q, kac in (("'", lambda s: s.replace("\\", "\\\\").replace("'", "\\'")),
                               ("`", lambda s: s.replace("\\", "\\\\").replace("`", "\\`").replace("${", "\\${"))):
                    d2 = re.compile(r"(?<![A-Za-z_])" + re.escape(alan) + r"\s*:\s*" + re.escape(q + kac(r["eski_metin"]) + q))
                    bul = list(d2.finditer(yeni))
                    if bul:
                        kalip = (lambda q, kac: (lambda s: q + kac(s) + q))(q, kac)
                        break
            if len(bul) != 1:
                atlanan.append((yol, r["t"], alan, "eşleşme %d (1 olmalı)" % len(bul)))
                continue
            anahtar = "ic_not_%s" % alan
            # madde sınırı: eşleşmeden önceki ve sonraki `t:"` — komşu maddeyi sayma
            _tler = [m.start() for m in re.finditer(r'(?<![A-Za-z_])t\s*:\s*"', yeni)]
            _bas = max([p for p in _tler if p < bul[0].start()] or [0])
            _son = min([p for p in _tler if p > bul[0].end()] or [len(yeni)])
            if re.search(r"(?<![A-Za-z_])" + anahtar + r"\s*:", yeni[_bas:_son]):
                # aynı maddede zaten varsa üstüne yazma riski — ölç, atla
                atlanan.append((yol, r["t"], alan, "%s yakında zaten var — elle bak" % anahtar))
                continue
            not_ = (r.get("tasinan_not") or "").strip()
            yerine = "%s:%s" % (alan, js_dizge(r["yeni_metin"]))
            if not_:
                yerine += ", %s:%s" % (anahtar, js_dizge(not_))
            b = bul[0]
            yeni = yeni[:b.start()] + yerine + yeni[b.end():]
            say["uygulandi"] += 1
        if yeni != metin:
            say["dosya"] += 1
            if uygula:
                io.open(tam, "w", encoding="utf-8", newline="").write(yeni)

    print("%s  kayıt %d · uygulandı %d · dosya %d · mesru dokunulmadı %d · değişiklik yok %d · hariç dosyada %d · ATLANAN %d"
          % ("UYGULANDI" if uygula else "KURU KOŞU", len(kayitlar), say["uygulandi"], say["dosya"],
             say["mesru_dokunulmadi"], say["degisiklik_yok"], say["haric_dosya"], len(atlanan)))
    for a in atlanan:
        print("  ATLANDI  %s  t=%s  alan=%s  — %s" % a)


if __name__ == "__main__":
    main()
