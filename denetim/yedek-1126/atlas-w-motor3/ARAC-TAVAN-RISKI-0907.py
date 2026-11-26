# -*- coding: utf-8 -*-
"""BEKLEYEN YAMALAR TAVANI AŞIYOR MU? — merge ÖNCESİ ölçüm.

⑱ ASYA ölçtü ve bekletmeden bildirdi:
    4d(once) = 409  ·  BEKLENEN_ONCE = 409     ⇒ TAM TAVANDA, sıfır pay
    4c(asan) = 138  ·  BEKLENEN_ASAN = 138     ⇒ TAM TAVANDA, sıfır pay
⇒ Bekleyen yamalardan BİR dönem daha künye penceresinin dışına düşerse
  `denetle.py` ✗ verir ve YAYIN KAPISI KAPANIR.

Bu betik o riski merge'den ÖNCE ölçer: yamaları BELLEKTE uygular, sonra
`denetle.degismez4`ü DOĞRUDAN çağırır. Aleti TAKLİT ETMEZ — koşturur.

🔴 VERİYE DOKUNMAZ. Salt okuma + bellek içi kopya.
"""
import io
import json
import os
import subprocess
import sys

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(KOK, "arac"))

import girdi          # noqa: E402
import denetle        # noqa: E402

# ─── ① CANLI TABAN ────────────────────────────────────────────────────
Y = girdi.yukle()
print("girdi: %d nokta" % len(Y))
if len(Y) < 3000:
    raise SystemExit("SESSİZ SIFIR: %d nokta" % len(Y))

# ─── ② TAVANLARI DÖK — varsayma ───────────────────────────────────────
tavan = {a: getattr(denetle, a) for a in dir(denetle)
         if a.startswith("BEKLENEN_") or a.startswith("HAYALET_")}
print("TAVANLAR:", json.dumps(tavan, ensure_ascii=False))

# ─── ③ BUGÜNKÜ DURUM — aleti KOŞTUR ───────────────────────────────────
# 🔴 İLK YAZIMDA `degismez4`ün SÖZLÜK döndürdüğünü VARSAYDIM. Döndürmüyor —
#    beş öğelik bir DEMET: (ihlal, kunyesiz, ok, asan, once). `else` dalı
#    iki kırpılmış `repr`i karşılaştırdı, ikisi aynı başladı, ve alet
#    "hiçbir kova büyümüyor" diye TEMİZ BİR SAYI bastı. O bir ölçüm değildi.
#    §11: "bir aletin dönüş yapısı VARSAYILMAZ, DÖKÜLÜR."
ALANLAR = ("ihlal", "kunyesiz", "ok", "asan", "once")


def olc(kume, etiket):
    d4 = denetle.degismez4(kume)
    if not isinstance(d4, tuple) or len(d4) != len(ALANLAR):
        raise SystemExit("DÖNÜŞ YAPISI DEĞİŞTİ: %r" % (type(d4),))
    ozet = {}
    for ad, deger in zip(ALANLAR, d4):
        ozet[ad] = len(deger) if isinstance(deger, list) else deger
    print("%-12s %s" % (etiket, json.dumps(ozet, ensure_ascii=False)))
    return d4, ozet

_, taban = olc(Y, "TABAN")

# ─── ④ BEKLEYEN YAMALARI OKU — node+vm, her dosya İZOLE bağlamda ──────
# §7: tek bağlamda eval, aynı `window.X` adını kullanan iki dosyada
#     SESSİZ EZME üretir. §11: regex yazma, yorumlayıcıya ver.
JS = r"""
const fs=require("fs"),vm=require("vm"),path=require("path");
const dizin=process.argv[2]; const cikti=[];
for(const f of fs.readdirSync(dizin).filter(x=>/^yer_yama.*\.js$/.test(x))){
  const ctx={window:{},module:{exports:{}},console:{log(){}}};
  vm.createContext(ctx);
  try{ vm.runInContext(fs.readFileSync(path.join(dizin,f),"utf8"),ctx); }
  catch(e){ cikti.push({dosya:f,hata:e.message.slice(0,80),kayit:[]}); continue; }
  let k=[];
  for(const a of Object.keys(ctx.window)){const v=ctx.window[a]; if(Array.isArray(v)) k=k.concat(v);}
  if(Array.isArray(ctx.module.exports)) k=k.concat(ctx.module.exports);
  cikti.push({dosya:f,kayit:k.filter(r=>r&&(r.ad||r.yerlesim))});
}
process.stdout.write(JSON.stringify(cikti));
"""
gecici = os.path.join(os.environ.get("TEMP", "."), "_yama_oku_0907.js")
io.open(gecici, "w", encoding="utf-8").write(JS)
ham = subprocess.run(["node", gecici, os.path.join(KOK, "denetim")],
                     capture_output=True, text=True, encoding="utf-8")
if ham.returncode != 0:
    raise SystemExit("node ÇÖKTÜ: " + (ham.stderr or "")[:400])
dosyalar = json.loads(ham.stdout)
toplam = sum(len(d["kayit"]) for d in dosyalar)
print("\nbekleyen yama: %d dosya · %d kayıt" % (len(dosyalar), toplam))
if toplam == 0:
    raise SystemExit("SESSİZ SIFIR: hiç yama kaydı okunmadı")

# ─── ⑤ BELLEKTE UYGULA ────────────────────────────────────────────────
# Yalnız dönem dizilerini değiştiriyoruz; `denetle.degismez4` künye
# pencerelerine karşı `s:`/`d:`/`v:`/`isg:` uçlarını ölçüyor.
ix = {}
for y in Y:
    ix.setdefault(y.get("ad"), y)

import copy
Y2 = copy.deepcopy(Y)
ix2 = {}
for y in Y2:
    ix2.setdefault(y.get("ad"), y)

uygulanan, bulunamayan = 0, []
for d in dosyalar:
    for r in d["kayit"]:
        ad = r.get("ad") or r.get("yerlesim")
        hedef = ix2.get(ad)
        if hedef is None:
            bulunamayan.append((d["dosya"], ad))
            continue
        for alan in ("d", "v", "s", "isg"):
            if alan in r and isinstance(r[alan], list):
                hedef[alan] = r[alan]
                uygulanan += 1
print("uygulanan alan: %d · hedefte BULUNAMAYAN kayıt: %d"
      % (uygulanan, len(bulunamayan)))
for f, a in bulunamayan[:8]:
    print("   ⚪ %s → %s" % (f, a))

# ─── ⑥ YAMALI DURUM ───────────────────────────────────────────────────
print()
_, yamali = olc(Y2, "YAMALI")

# ─── ⑦ HÜKÜM ─────────────────────────────────────────────────────────
print("\n" + "=" * 68)
print("FARK — ve TAVAN RİSKİ")
print("=" * 68)
risk = 0
for k in sorted(set(taban) | set(yamali)):
    a, b = taban.get(k), yamali.get(k)
    if a == b:
        continue
    ok = "🔴" if (isinstance(a, int) and isinstance(b, int) and b > a) else "🟢"
    if ok == "🔴":
        risk += 1
    print("%s %-16s %s → %s" % (ok, k, a, b))
if risk == 0:
    print("🟢 hiçbir kova BÜYÜMÜYOR — bekleyen yamalar tavanı zorlamıyor")
print("\n⚠️ Bu ölçüm KÜNYE yamalarını UYGULAMIYOR — yalnız `yer_yama_*`.")
print("   Künye önerileri inince pencereler DEĞİŞİR ve bu sayı yeniden ölçülmeli.")
