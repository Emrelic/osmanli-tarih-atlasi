# -*- coding: utf-8 -*-
"""Ⓑ — DÖNEM-İÇİ `kaynak:` `_sahiplik_uygula.py` ile İNİYOR MU?

🔴 SORU (koordinatör onayı, Ⓑ): bir nokta birden çok gün taşıyor (Oslo:
   1814-01-14 ve 1905-06-07) ama `kaynak:` KAYIT seviyesinde tek alan ⇒
   dayanak DÖNEM seviyesine yazılmalı. Biçim veride VAR ve meşru (148
   dönem taşıyor) — ama ARAÇ onu taşıyor mu?

🔴 C13④: aletin cevabını DOĞRU YERDEN okuduğumu göstermeliyim. Kod okumak
   YETMEZ — bilerek `kaynak:` taşıyan bir kayıt verip aletin onu YAZDIĞINI
   göstermeliyim, ve taşımayan bir kontrolle karşılaştırmalıyım.

🟢 SADAKAT: `js_yaz` ALETİN KENDİ KODUDUR — taklit edilmedi, kaynak
   dosyadan `ast` ile çıkarılıp exec edildi. Modülü doğrudan import etmek
   node'u çalıştırır ve `data/`yı okur (koşu 7b sürüyor, DONUK) — o yüzden
   yalnız bu fonksiyon izole edildi.
⚠️ Node süzgeci AYRI sınanır ve orada TEK bir değişiklik yapıldı: okuduğu
   dizin `data` → geçici test dizini. Değişiklik BUDUR ve başka yok.

   py denetim/SINAV-DONEM-KAYNAK-0907.py
"""
import ast, io, os, sys, json, subprocess, tempfile, shutil
sys.stdout.reconfigure(encoding="utf-8", errors="replace")

KOK = os.getcwd()
KAYNAK = io.open(os.path.join(KOK, "arac", "_sahiplik_uygula.py"),
                 encoding="utf-8").read()

# ── ① `js_yaz`ı ALETİN KENDİ KODUNDAN çıkar ───────────────────────────
agac = ast.parse(KAYNAK)
fn = next((d for d in agac.body
           if isinstance(d, ast.FunctionDef) and d.name == "js_yaz"), None)
if fn is None:
    print("🔴 `js_yaz` BULUNAMADI — alet değişmiş olabilir, sınav geçersiz")
    raise SystemExit(2)
ns = {}
exec(compile(ast.Module(body=[fn], type_ignores=[]), "<js_yaz>", "exec"), ns)
js_yaz = ns["js_yaz"]
print("=== ① `js_yaz` — aletin KENDİ fonksiyonu, ast ile çıkarıldı ===")

# ATEŞLEME: dönem-içi `kaynak:` TAŞIYAN kayıt
tasiyan = [
    {"f": "1281-01-01", "t": "1814-01-14", "d": "danimarka",
     "kaynak": "nordics.info / Aarhus Universitesi — Kiel Antlasmasi"},
    {"f": "1814-01-14", "t": "1905-06-07", "d": "isvec",
     "kaynak": "TEST-IKINCI-DONEM"},
]
cikti = js_yaz(tasiyan)
print("   girdi : 2 dönem, İKİSİ DE `kaynak:` taşıyor")
print("   çıktı : " + cikti[:150] + ("…" if len(cikti) > 150 else ""))
a1 = cikti.count("kaynak:")
print("   ⇒ çıktıda `kaynak:` sayısı: %d   %s"
      % (a1, "🟢 TAŞIDI" if a1 == 2 else "🔴 DÜŞÜRDÜ"))

# GEÇME (kontrol): `kaynak:` TAŞIMAYAN kayıt — yanlışlıkla üretmemeli
tasimayan = [{"f": "1281-01-01", "t": "1923-10-29", "d": "ispanya"}]
c2 = js_yaz(tasimayan)
a2 = c2.count("kaynak:")
print("   kontrol: `kaynak:`SIZ dönem → çıktıda %d   %s"
      % (a2, "🟢 üretmedi" if a2 == 0 else "🔴 UYDURDU"))

# Alan SIRASI ve KAYIP kontrolü
korunan = all(k in cikti for k in ("f:", "t:", "d:", "kaynak:"))
print("   dört alan da çıktıda: " + ("🟢 EVET" if korunan else "🔴 HAYIR"))

# ── ② NODE SÜZGECİ — aletin KENDİ JS metni, dizin DEĞİŞTİRİLDİ ────────
print()
print("=== ② node süzgeci — aletin KENDİ JS metni ===")
i = KAYNAK.index('JS = r"""') + len('JS = r"""')
j = KAYNAK.index('"""', i)
JS = KAYNAK[i:j]
gecici = tempfile.mkdtemp(prefix="sinav_donem_")
try:
    os.makedirs(os.path.join(gecici, "data"))
    io.open(os.path.join(gecici, "data", "yer_yama_SINAV.js"),
            "w", encoding="utf-8").write(
        'window.YER_YAMA_SINAV = [\n'
        '  { ad:"SINAV-NOKTASI",\n'
        '    s:[{f:"1281-01-01",t:"1814-01-14",d:"danimarka",'
        'kaynak:"SINAV-DONEM-KAYNAGI"},\n'
        '       {f:"1814-01-14",t:"1923-10-29",d:"isvec"}\n'
        '    ] },\n'
        '];\n')
    p = subprocess.run(["node", "-e", JS], cwd=gecici,
                       capture_output=True, text=True, encoding="utf-8")
    if p.returncode != 0:
        print("   🔴 node hatası: " + (p.stderr or "")[:200])
    else:
        veri = json.loads(p.stdout)
        print("   süzgeçten geçen kayıt: %d" % len(veri))
        if veri:
            r = veri[0]["r"]
            d0 = (r.get("s") or [{}])[0]
            print("   ilk dönemin alanları: " + json.dumps(sorted(d0.keys()),
                                                           ensure_ascii=False))
            var = "kaynak" in d0
            print("   ⇒ dönem-içi `kaynak:` Python'a ULAŞTI: " +
                  ("🟢 EVET — " + str(d0["kaynak"]) if var else "🔴 HAYIR"))
finally:
    shutil.rmtree(gecici, ignore_errors=True)

print()
print("=" * 66)
print("HÜKÜM")
print("=" * 66)
if a1 == 2 and a2 == 0 and korunan:
    print("🟢 DÖNEM-İÇİ `kaynak:` TAŞINIYOR — dayanak yaması YAZILABİLİR.")
    print("   `js_yaz` sabit bir alan listesi KULLANMIYOR: `deger.items()`")
    print("   sözlükteki HER anahtarı yazıyor. `not:`/`bos:` vakasının")
    print("   (sabit `sira` listesi) tersi — o kusur BURADA YOK.")
else:
    print("🔴 KUSUR VAR — dayanak yaması YAZILMAZ, koordinatöre bildir.")
