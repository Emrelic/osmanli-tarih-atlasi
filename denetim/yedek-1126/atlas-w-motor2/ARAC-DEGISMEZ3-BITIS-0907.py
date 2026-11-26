# -*- coding: utf-8 -*-
"""DEGISMEZ3-0907 ㉓ — `bitis` ile Ⓒ ÖLÇÜTÜ: mekanizma NİHAYET SINANABİLİR.

🔴 İKİ DÜZELTME, ikisi de kendi önceki cümlelerime:
  ① *"`sure` sayısal ⇒ türetme mümkün"* — YANLIŞ. `js/app.js:2345`:
     `if (o.sure === undefined) o.sure = sonrakiOlayaKadar(o.gi)`
     ⇒ `sure` bir GÖRÜNÜRLÜK SÜRESİdir (olay haritada kaç gün kalacak),
       bir zaman aralığı DEĞİL. Rodos: t=05-23 · bitis=07-28 (66 gün)
       ama `sure:300`. Ondan başlangıç TÜRETİLEMEZ.
  ② *"`SAVASLAR`da aralık YOK, ölçüt SINANAMAZ"* — YANLIŞ.
     `bitis` **gerçek bir tarih** ve 8 açığın **4'ünde** var:
       Rodos 1480-07-28 · Hotin 1621-10-09 · Bağdat 1638-12-24 ·
       Çanakkale 1657-08-25
     ⇒ `SAVASLAR`da aralık `[t, bitis]` olarak VAR, adı farklı.

🔴 VE `bitis` HİÇBİR YERDE OKUNMUYOR:
   `grep bitis js/app.js` → tek sonuç bir YORUM satırı (`:347`)
   alan sözleşmesi ölçümü de onu "okuma kalıbı bulunamayan 5"te saymıştı.
   ⇒ **alan var · dolu · geçerli tarih · ve kimse okumuyor** — bugün
     ölçülen `kid` vakasının kardeşi (*"alan var, okuyan yok"* ailesinin
     BEŞİNCİ üyesi).

╔═ ÖNGÖRÜ — ÖLÇÜMDEN ÖNCE ════════════════════════════════════════════╗
  `bitis` taşıyan 4 açığın **en az 3'ü** Ⓒ ile kapanacak.
  🔴 MAZERET YOK: `SEFERLER`de aynı ölçüt 18/18 kapatmıştı; burada
     aralık daha KISA (kuşatmalar), yani ölçüt daha KOLAY tutmalı.
     Tutmazsa ölçüt `SEFERLER`e ÖZGÜ demektir ve bunu YAZARIM.
╚═════════════════════════════════════════════════════════════════════╝
"""
import io
import json
import os
import re
import sys
import unicodedata

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8", errors="replace")
KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(KOK, "arac"))
os.chdir(KOK)
import denetle  # noqa: E402

P = denetle.SAVAS_PENCERE
DURAK_ESIK = 0.02
_TR = {ord("İ"): "i", ord("I"): "i", ord("ı"): "i", ord("Ş"): "s", ord("ş"): "s",
       ord("Ğ"): "g", ord("ğ"): "g", ord("Ü"): "u", ord("ü"): "u",
       ord("Ö"): "o", ord("ö"): "o", ord("Ç"): "c", ord("ç"): "c",
       ord("Â"): "a", ord("â"): "a", ord("’"): "", ord("'"): ""}


def kokler(s):
    s = (s or "").translate(_TR)
    s = unicodedata.normalize("NFKD", s)
    s = "".join(c for c in s if not unicodedata.combining(c)).lower()
    return {w[:6] for w in re.findall(r"[a-z0-9]+", s) if len(w) >= 4}


O = denetle.olaylari_yukle()
S = denetle.oku_pencere(os.path.join(KOK, "data", "savaslar.js"), "SAVASLAR")
n_top, ayk = denetle.savas_senkronu(S, O)
ACIK = {(a[0], a[1]) for a in ayk}

say = {}
for o in O:
    for k in kokler(o.get("b", "")):
        say[k] = say.get(k, 0) + 1
DURAK = {k for k, n in say.items() if n / len(O) > DURAK_ESIK}

ol = []
for o in O:
    try:
        ol.append((denetle.gun_no(denetle.tam(o["t"])), o.get("b", "")))
    except Exception:
        pass


def g(x):
    try:
        return denetle.gun_no(denetle.tam(x))
    except Exception:
        return None


print("=" * 76)
print("`bitis` ile Ⓒ ÖLÇÜTÜ — mekanizmanın SINANDIĞI yer")
print("=" * 76)
acik = [r for r in S if (r["t"], r.get("ad")) in ACIK]
b_var = [r for r in acik if r.get("bitis")]
print("  8 açık · `bitis` taşıyan: %d · durak kök: %d" % (len(b_var), len(DURAK)))

kanitli = zayif = maddesiz = 0
detay = []
for r in acik:
    ad = r.get("ad", "?")
    gt, gb = g(r.get("t")), g(r.get("bitis"))
    if gb is None:
        detay.append({"ad": ad, "kova": "MAZUR — `bitis` YOK", "madde": "",
                      "ortak": []})
        print("\n  %-26s ⚪ MAZUR — `bitis` YOK" % ad[:26])
        continue
    alt, ust = min(gt, gb) - P, max(gt, gb) + P
    icinde = [(og, b) for og, b in ol if alt <= og <= ust]
    ak = kokler(ad) - DURAK
    esles = [(b, sorted(ak & (kokler(b) - DURAK))) for _, b in icinde]
    esles = [e for e in esles if e[1]]
    if esles:
        kova, madde, ortak = "🟢 ÖLÇÜT UYUMSUZLUĞU — KANITLI", esles[0][0], esles[0][1]
        kanitli += 1
    elif icinde:
        kova, madde, ortak = "🟡 ÖLÇÜLEMEDİ — ad eşleşmiyor", icinde[0][1], []
        zayif += 1
    else:
        kova, madde, ortak = "🔴 KESİN MADDESİZ", "", []
        maddesiz += 1
    print("\n  %-26s %s" % (ad[:26], kova))
    print("     t:%s  bitis:%s  (aralık %d gün)"
          % (r["t"], r["bitis"], abs(gb - gt)))
    if madde:
        print("     aralıkta : %s" % madde[:60])
    if ortak:
        print("     ORTAK KÖK: %s" % ", ".join(ortak))
    detay.append({"ad": ad, "kova": kova, "t": r["t"], "bitis": r.get("bitis"),
                  "madde": madde[:70], "ortak": ortak})

print("\n" + "=" * 76)
print("ÖNGÖRÜ SINAVI — '`bitis` taşıyan 4 açığın en az 3'ü kapanacak'")
print("=" * 76)
print("  KANITLI kapanan : %d / %d" % (kanitli, len(b_var)))
print("  ölçülemedi      : %d" % zayif)
print("  kesin maddesiz  : %d" % maddesiz)
tuttu = kanitli >= 3
print("  ⇒ %s" % ("TUTTU ✓ — ölçüt `SEFERLER`e ÖZGÜ DEĞİL, İKİNCİ katmanda da işledi"
                  if tuttu else
                  "🔴 ÇÜRÜDÜ — mazeret YOK: ölçüt `SEFERLER`e ÖZGÜ olabilir"))

json.dump({"_NOT": ("`bitis` ile Ⓒ ölçütü. İki kendi-düzeltmem: `sure` bir "
                    "GÖRÜNÜRLÜK süresidir (app.js:2345), ve `SAVASLAR`da "
                    "aralık `[t, bitis]` olarak VAR."),
           "acik": len(acik), "bitis_tasiyan": len(b_var),
           "kanitli": kanitli, "olculemedi": zayif, "maddesiz": maddesiz,
           "ongoru_tuttu": tuttu, "detay": detay},
          open(os.path.join(KOK, "denetim", "OLCUM-DEGISMEZ3-BITIS-0907.json"),
               "w", encoding="utf-8", newline=""), ensure_ascii=False, indent=1)
print("\n[YAZILDI] denetim/OLCUM-DEGISMEZ3-BITIS-0907.json")
