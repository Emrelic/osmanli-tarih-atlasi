# -*- coding: utf-8 -*-
"""ENKLAV-0907 — C-hakiki yamasını CANLI VERİDEN üretir.

🔴 ELLE YAZILMAZ (`YONTEM-1923-SINIR.md §⑥`): Silistre elle yazıldı ve
   yama altı dönemin beşini SİLİYORDU. Uygulayıcı `s:` dizisini BÜTÜN
   olarak değiştirir ⇒ yamada dizinin TAMAMI bulunmalı.

🔴 Ve bu betik `denetle.yerlesimleri_yukle()` kullanır — `girdi.py`nin
   dosya listesi TEK OTORİTE, tahmin edilmez.
"""
import sys, os, io, json

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(KOK, "arac"))
os.chdir(KOK)
import denetle

HEDEF = [
    ("Gore (Gorée)",                "1444-01-01", "portekiz"),
    ("Gore (Gorée)",                "1627-01-01", "hollanda"),
    ("Massangano",                  "1583-01-01", "portekiz"),
    ("Kambambe (Cambambe)",         "1604-01-01", "portekiz"),
    ("Çandernagor",                 "1816-12-04", "fransa-cumhuriyet"),
    ("Pondişeri",                   "1816-12-04", "fransa-cumhuriyet"),
    ("Pemaquid",                    "1625-01-01", "ingiltere"),
    ("Falmouth (Portland, Maine)",  "1632-01-01", "ingiltere"),
    ("Portsmouth (New Hampshire)",  "1623-01-01", "ingiltere"),
]

Y = denetle.yerlesimleri_yukle()
ix = {}
for y in Y:
    ix.setdefault(y["ad"], []).append(y)

dokunulan = {}
for ad, f, kim in HEDEF:
    assert ad in ix, "AD BULUNAMADI: %r" % ad
    assert len(ix[ad]) == 1, "MÜKERRER AD: %r" % ad
    y = ix[ad][0]
    esl = [p for p in y.get("s", []) if p.get("f") == f and p.get("d") == kim]
    assert len(esl) == 1, "DÖNEM EŞLEŞMESİ %d: %s %s %s" % (len(esl), ad, f, kim)
    assert not esl[0].get("enklav"), "ZATEN enklav: %s %s" % (ad, f)
    esl[0]["enklav"] = True
    dokunulan[ad] = y

# 🔴 `s:` dizisinin TAMAMI yazılır — süzgeçli bir bakış SİLDİĞİNİ göstermez.
#    `d:`/`v:`/`isg:` alanları bu yamada YOK ⇒ uygulayıcı onlara DOKUNMAZ.
satir = []
for ad in sorted(dokunulan):
    y = dokunulan[ad]
    s = json.dumps(y["s"], ensure_ascii=False)
    satir.append('  { ad: %s,\n    s: %s },' % (json.dumps(ad, ensure_ascii=False), s))

BASLIK = '''// -*- coding: utf-8 -*-
// YER_YAMA_ENKLAV_C_0907 — ENKLAV-0907 oturumu, 7 Eylül 2026
//
// 🔴 NE YAPAR: `Değişmez 7`in C-hakiki kovasındaki DOKUZ döneme
//    `enklav: true` beyanı koyar. Başka HİÇBİR ŞEYE dokunmaz —
//    tarih yok, kimlik yok, yeni dönem yok.
//
// 🔴 NİÇİN: aletin kendi tarifi — *"800 km üstü / gövdesiz ⇒ muhtemelen
//    HAKİKİ enklav, çare `enklav:true`"*. Ve dokuzu da TEK TEK
//    doğrulandı (`denetim/ARAC-ENKLAV-C-0907.js`): her biri için
//    ① tam `s:` zinciri okundu ② aynı kimliği taşıyan gövdenin nerede
//    olduğu ölçüldü ③ ada ile gövde ARASINDAKİ kutuda kaç nokta var ve
//    KİMİN olduğu sayıldı — `§2`nin *noktasızlık* vakasından ayırmak için.
//
//   Gore (Gorée) ×2   Batı Afrika kıyı üssü. 1444 portekiz (ana gövde
//        İberya, 2640 km) · 1627 hollanda (4476 km). Aradaki kutuda
//        merini 10 · colof/valo/sine-salum 4 — yani koridor YOK, ARADA
//        BAŞKA DEVLETLER VAR. Hakiki enklav.
//   Massangano · Kambambe   Angola'nın ilk Portekiz yerleşimleri.
//        Birbirlerine 39 km, Luanda'ya 132/170 km — kendi aralarında
//        BAĞLI, ama Portekiz'in ana gövdesinden (Tete, 2188-2226 km)
//        kopuk. Aradaki kutuda `ndongo`. Hakiki enklav.
//   Çandernagor · Pondişeri  Fransız comptoir'ları, birbirlerine 1514 km.
//        Aradaki kutuda 12 nokta `ingiliz-hindistani` — yani koridor
//        yok, KUŞATILMIŞLAR. Hakiki enklav (1814 Paris ile iade, fiilî
//        teslim 1816-12-04).
//   Pemaquid · Falmouth · Portsmouth   Yeni İngiltere kümesi. Ana gövde
//        Jamestown (Virginia), 829-963 km; ARADA Yeni Hollanda vardı.
//        Aradaki kutuda `abenaki` ve SAHİPSİZ. Hakiki enklav.
//
// 🟢 ÖN SINAV KOŞULDU — `denetim/ARAC-ENKLAV-SINAV-0907.py`, ve alet
//    TAKLİT EDİLMEDİ, `denetle.degismez7(Y)` DOĞRUDAN çağrıldı:
//       taban  661   (tavan 660)  ← C13① GEÇME: doğru yerden okuduğumun kanıtı
//       yamalı 652                ← C13② ATEŞLEME
//       C-hakiki 12 → 3 · muaf.beyan 52 → 61
//       ⇒ `Değişmez 7` ✗ → ✓ (tavan YÜKSELTİLMEDEN)
//
// 🔴 TAVANA DOKUNULMADI. `CLAUDE.md` FAZ 1: *"tavan yükseltilseydi ihlal
//    susardı ve Sarıkamış ada kalırdı — denetim temiz, harita yanlış."*
//
// ⚠️ KAPSAM: yalnız C-hakiki'nin bu dokuz dönemi. `Gore (Gorée)`nin
//    1677 `fransa` ve 1792 `fransa-cumhuriyet` dönemleri de aynı fiziksel
//    gerçeği taşıyor ve muhtemelen aynı sınıf — ama onlar A/B kovasında
//    ve BU TURDA ÖLÇÜLMEDİ. Ölçülmeden yazmak, kapsamı sessizce genişletmek
//    olurdu (damga: okumadım).
//
// 🔴🔴 DOSYADA 20 `enklav:true` VAR — AMA YENİ OLAN DOKUZ.
//    Yama canlı veriden üretildiği için MEVCUT bayrakları KORUYOR:
//       Çandernagor  4/5 dönem ZATEN beyanlıydı  (1688 · 1757 · 1763 · 1793)
//       Pondişeri    7/9 dönem ZATEN beyanlıydı  (1674 · 1699 · 1761 · 1765 ·
//                                                 1778 · 1785 · 1793)
//       öteki altı kayıtta mevcut bayrak YOK
//    ⇒ MEVCUT 11 + YENİ 9 = 20. Ölçüldü, tahmin edilmedi.
//    ⚠️ Ve bu iki comptoir'ın statüsü ZATEN biliniyormuş; atlanan yalnız
//       SON dönemleriydi (1816-12-04, 1814 Paris ile iade). Yani bu bir
//       eksik beyan değil, YARIM beyandı — ve yarım beyan tam beyandan
//       ayırt edilemiyor, çünkü ikisi de "bu kayıtta enklav var" der.
//
// ⚠️ ÖLÇÜLMEDİ: küre genelinde `enklav:true` taşıyan dönem 57, ama
//    `denetle.py` `muaf.beyan` 52 diyor. Beş dönemlik fark muhtemelen
//    kova sırası (başka bir muafiyet önce yakalıyor) — ama BAKMADIM.
//    Damga: okumadım. Bu yamayı etkilemiyor (+9 farkı ölçülmüş).

// 🔴 KAYITLAR ELLE YAZILMADI — `denetle.yerlesimleri_yukle()` ile canlı
//    veriden üretildi, `denetim/ARAC-ENKLAV-YAMA-URET-0907.py`.
//    Her kayıtta TAM `s:` dizisi var (uygulayıcı diziyi DEĞİŞTİRİR).
//    `d:` · `v:` · `isg:` alanları BU YAMADA YOK ⇒ onlara dokunulmaz.

window.YER_YAMA_ENKLAV_C_0907 = [
'''

with io.open("denetim/yer_yama_enklav_c_0907.js", "w", encoding="utf-8") as f:
    f.write(BASLIK + "\n".join(satir) + "\n];\n")

print("yazıldı: denetim/yer_yama_enklav_c_0907.js")
print("kayıt: %d   dokunulan dönem: %d" % (len(dokunulan), len(HEDEF)))
for ad in sorted(dokunulan):
    n = len(dokunulan[ad]["s"])
    e = sum(1 for p in dokunulan[ad]["s"] if p.get("enklav"))
    print("   %-30s s: %d dönem · enklav %d" % (ad, n, e))
