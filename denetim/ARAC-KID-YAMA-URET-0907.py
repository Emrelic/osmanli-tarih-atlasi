# -*- coding: utf-8 -*-
"""20 MEKANIK `kid` TAMAMLAMASI — yama uretir.

DAYANAK: VERININ KENDI SOZLUGU. Ayni `k` metnini tasiyan BASKA donemlerde
`kid` zaten yazili ve TEK ANLAMLI (14 metin, 0 cok anlamli). Yani bu bir
ARASTIRMA degil, bir TUTARLILIK tamamlamasi: kulliyat ayni ada iki farkli
kimlik vermiyor.

🔴 UYDURMA YOK: kunye `ad`i ile `k` metni arasinda BENZERLIK aranmadi.
   `§4`: "ad benzerligi esanlam DEGILDIR" (Haydarabad Sind ↔ Dekken,
   1500 km). Yalnizca verinin kendi icinde ZATEN KURULMUS eslesmeler.

OLCULEN ETKI (ARAC-KID-20-ETKI-0907.py): 1683-07-14'te etiket 12 -> 10;
`Bogdan Voyvodaligi` ve `Eflak Voyvodaligi` mukerrerleri KAPANIYOR.

Cikti: data/yer_yama_kid20_0907.js  (tam `v:` dizisi, uygulayici icin)
"""
import collections
import io
import json
import os
import sys

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(KOK, "arac"))
import girdi   # noqa: E402

Y = girdi.yukle(sessiz=True)
if len(Y) < 3000:
    raise SystemExit("SESSIZ SIFIR")

sozluk = collections.defaultdict(collections.Counter)
for y in Y:
    for p in (y.get("v") or []):
        if p.get("k") and p.get("kid"):
            sozluk[p["k"]][p["kid"]] += 1
cok = {k: dict(v) for k, v in sozluk.items() if len(v) > 1}
if cok:
    raise SystemExit("COK ANLAMLI ESLESME VAR, MEKANIK DEGIL: %r" % cok)
tek = {k: list(v)[0] for k, v in sozluk.items()}
print("sozluk: %d tek anlamli `k` -> kid" % len(tek))

kayitlar, dokunulan = [], 0
for y in Y:
    vs = y.get("v") or []
    if not vs:
        continue
    yeni, degisti = [], False
    for p in vs:
        q = dict(p)
        if not q.get("kid") and q.get("k") in tek:
            q["kid"] = tek[q["k"]]
            degisti = True
            dokunulan += 1
        # `statu` bosluk: hukum "429/429 vassal, ARASTIRMASIZ" diyor
        if not q.get("statu"):
            q["statu"] = "vassal"
            degisti = True
        yeni.append(q)
    if degisti:
        kayitlar.append({"ad": y["ad"], "v": yeni})

print("dokunulan `kid`: %d · dokunulan kayit: %d" % (dokunulan, len(kayitlar)))
if not kayitlar:
    raise SystemExit("SESSIZ SIFIR — hicbir kayit degismedi")

bas = (
    "// -*- coding: utf-8 -*-\n"
    "// YER_YAMA_KID20_0907 — `v:` donemlerine `kid` ve `statu` TAMAMLAMASI\n"
    "// Uretildi: denetim/ARAC-KID-YAMA-URET-0907.py · 7 Eylul 2026 · 1.MURAT\n"
    "//\n"
    "// NICIN: HUKUM-VASSAL-GORUNUM-0906.md tabi govdelere etiket koyuyor\n"
    "//   ({kunye adi} + \" (\" + {statu} + \")\"). Motor tarafi yazildi\n"
    "//   (`uret_petek.py` -> `donemler.js` `vl` capa listesi), ama ETIKET\n"
    "//   ICERIGI olculunce AYNI POLITY IKI ETIKET urettigi cikti:\n"
    "//       Bogdan Voyvodaligi  +  Bogdan Voyvodaligi (Moldavia)\n"
    "//   Sebep KISMI KAPSAMA: 272/429 doneme `kid` yazilmis, kalanina\n"
    "//   yazilmamis ⇒ gruplama ikiye boluyor.\n"
    "//\n"
    "// DAYANAK — VERININ KENDI SOZLUGU, arastirma DEGIL:\n"
    "//   Ayni `k` metnini tasiyan BASKA donemlerde `kid` zaten yazili ve\n"
    "//   TEK ANLAMLI (14 metin, COK ANLAMLI 0 — kontrol edildi, betik\n"
    "//   cok anlamli bulursa DURUYOR). Bir tutarlilik tamamlamasi.\n"
    "//   🔴 Kunye `ad`i ile `k` metni arasinda BENZERLIK ARANMADI —\n"
    "//     `§4`: 'ad benzerligi esanlam DEGILDIR'.\n"
    "//\n"
    "// `statu` de dolduruluyor: hukum '`v:` katmaninin TANIMI zaten\n"
    "//   tabiiyet ⇒ her donem en azindan statu:\"vassal\"dir, 429/429\n"
    "//   kapsama, ARASTIRMASIZ' diyor. Inceltme (ozerk · himaye ·\n"
    "//   haracguzar · ocaklik) AYRI ve KAYNAKLI bir is.\n"
    "//\n"
    "// OLCULEN ETKI: 1683-07-14 etiket 12 -> 10 (Bogdan · Eflak birlesiyor)\n"
    "// ⚠️ KALAN MUKERRER: 'Orta Macar Kralligi (Tokoli Imre)' ile\n"
    "//   'Orta Macar Kralligi — Ilona Zrinyi...' — 81 ARASTIRMA kovasinda.\n"
    "// ═══════════════════════════════════════════════════════════════════\n"
)
hedef = os.path.join(KOK, "data", "yer_yama_kid20_0907.js")
with io.open(hedef, "w", encoding="utf-8") as f:
    f.write(bas + "window.YER_YAMA_KID20_0907 = "
            + json.dumps(kayitlar, ensure_ascii=False, indent=2) + ";\n")
print("YAZILDI: %s" % os.path.basename(hedef))
