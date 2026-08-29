# -*- coding: utf-8 -*-
"""SAHİPLİK YAMASI UYGULAYICI — yer_yama*.js  ->  yerlesimler*.js

    py arac/_sahiplik_uygula.py           KURU KOŞU (hiçbir şey yazmaz)
    py arac/_sahiplik_uygula.py --yaz     gerçekten yaz

═══ NİÇİN VAR ═══
Üç yama ailesi ölçüldü, ikisinin uygulayıcısı vardı, ÜÇÜNCÜSÜNÜNKİ YOKTU:

    A) KRONOLOJİ EŞLEŞME  {dosya,t,b,yer_id|yer_kon} -> olaylar*.js
                          arac/yama_uygula.js        ✓ 1561 indi
    B) KADEME             {yerlesim,mevcut.k,oneri.k} -> yerlesimler*.js
                          arac/_kademe_uygula.py     ✓ 1128 indi
    C) SAHİPLİK           {ad, d|s|v|isg}            -> yerlesimler*.js
                          ???                        🔴 37 kayıt BEKLİYORDU

⇒ Sekiz oturum sahiplik yaması yazdı ve hiçbiri inmedi. `CLAUDE.md §7`:
  *"denetimler 'yama UYGULANDI mı' diye sorar, 'yama OKUNDU mu' diye
  SORMAZ."* Bu betik ikinci sorunun cevabıdır.

═══ DÖRT KORUMA — dördü de bu projede ısırmış vakalardan ═══
① AD BELİRSİZSE UYGULANMAZ. Ad birden çok kayıtta geçiyorsa hangisinin
   kastedildiği belirsizdir; yanlış kaydı değiştirmek SESSİZ veri
   bozulmasıdır. (`_kademe_uygula.py`nin kendi kuralı.)

② ÇAKIŞAN YAMA UYGULANMAZ. Aynı `ad:` için İKİ DOSYADA farklı içerik
   varsa, dosya adının alfabetik sırası KARAR VEREMEZ.
   🔴 Ölçülmüş vaka: İğneada · Rezve · Ahtapolu hem `yer_yama_emilme2.js`
     hem `yer_yama_p19.js` içinde, ve p19 `bizans 1281-1361` açılışını
     taşıyor, emilme2 taşımıyor. Alfabetik sıra emilme2'yi seçerdi —
     yani DAHA EKSİK olanı. `yama_uygula.js` bu dersi zaten yazmış:
     *"karar yargıyla değil dosya adının alfabetik sırasıyla veriliyordu."*

③ KENDİ KİLİDİNE SAYGI. Kayıtta `d2_gerek` varsa yazarı onu BİLEREK
   kilitlemiştir (Halepçe: *"1554-08-22 için kronoloji maddesi ŞART.
   Madde inmeden UYGULAMA."*). Kilit ancak o gün külliyata girince açılır.

④ KIRILMA GÜNÜ MADDESİZSE UYGULANMAZ. `Değişmez 2` Osmanlı için ±30 gün
   içinde madde ister ve tavan 0. Maddesiz bir günü yazmak, Emre'nin en
   çok şikâyet ettiği kusuru ÜRETMEKTİR: değişim, o güne rastgele denk
   gelen alâkasız bir maddenin altında belirir.
   ⚠️ Bu süzgeç yalnız `d:` (doğrudan Osmanlı) günlerine uygulanır —
     `Değişmez 2` onu denetler. `s:` yabancı günleri `2s`nin işi ve onun
     tavanı 121, yani doluluk payı var; orada UYARI verilir, ENGEL değil.
"""
import collections
import io
import json
import os
import re
import subprocess
import sys

if hasattr(sys.stdout, "reconfigure"):
    sys.stdout.reconfigure(encoding="utf-8", errors="replace")

KOK = os.getcwd()
VERI = os.path.join(KOK, "data")
YAZ = "--yaz" in sys.argv

# ─────────────────────────────────────────────────────────── ① yamaları oku
JS = r"""
global.window = {};
const fs = require('fs');
const kaynak = {};
for (const f of fs.readdirSync('data').filter(x => /^yer_yama.*\.js$/.test(x))) {
  const onceki = new Set(Object.keys(global.window));
  try { eval(fs.readFileSync('data/' + f, 'utf8')); } catch (e) { continue; }
  for (const k of Object.keys(global.window)) if (!onceki.has(k)) kaynak[k] = f;
}
const cik = [];
for (const k of Object.keys(global.window)) {
  const v = global.window[k];
  if (!Array.isArray(v)) continue;
  for (const r of v) {
    if (r && r.ad !== undefined && (r.d || r.s || r.v || r.isg)) {
      cik.push({ __dosya: kaynak[k] || '?', __alan: k, r: r });
    }
  }
}
process.stdout.write(JSON.stringify(cik));
"""
p = subprocess.run(["node", "-e", JS], cwd=KOK, capture_output=True)
if p.returncode != 0:
    print("NODE HATASI:\n" + p.stderr.decode("utf-8", "replace")[:800])
    raise SystemExit(1)
yama = json.loads(p.stdout.decode("utf-8"))
print("YAMA KAYDI: %d" % len(yama))

# ───────────────────────────────────────────────── ② kronoloji günleri
gunler = set()
for f in os.listdir(VERI):
    if not f.startswith("olaylar") or not f.endswith(".js"):
        continue
    s = io.open(os.path.join(VERI, f), encoding="utf-8", errors="replace").read()
    gunler |= set(re.findall(r't:\s*"(\d{4}-\d{2}-\d{2})"', s))
    gunler |= set(re.findall(r'"t":\s*"(\d{4}-\d{2}-\d{2})"', s))
print("KRONOLOJİ: %d benzersiz gün" % len(gunler))

_G = sorted(gunler)


def _sayi(g):
    y, a, gg = int(g[:4]), int(g[5:7]), int(g[8:10])
    return y * 372 + (a - 1) * 31 + gg          # kaba ama tekdüze


_GS = sorted(_sayi(g) for g in _G)


def maddesi_var(gun, tolerans=30):
    """±tolerans gün içinde kronoloji maddesi var mı.

    🔴 SINIR GÜNLERİ MUAF — ve bu satır BİR KUSURU DÜZELTİYOR.
      İlk sürüm sınırı muaf tutmuyordu ve `1923-10-29`u "maddesiz gün"
      sayıp BEŞ DOĞRU KAYDI engelledi (Ardahan · Erzincan · Kars ·
      Mersin · Sivrihisar). Oysa `1923-10-29` bir kırılma değil atlasın
      KAPANIŞ SINIRI; her dönemin son `t:`si odur.
      `denetle.py:916` ve `:1634` ikisi de aynı muafiyeti taşıyor:
          if not d or d <= "1281-01-01" or d >= "1923-10-29": continue
      ⇒ Süzgecim gerçek değişmezden DAHA SIKIYDI, ve fazla sıkı bir
        süzgeç doğru işi engeller — gevşek olan yanlış işi geçirir.
        İkisi de kusur; bu, az konuşulan yönü.
    """
    if not re.match(r"^\d{4}-\d{2}-\d{2}$", gun or ""):
        return True                             # ay/yıl hassasiyeti: sorma
    if gun <= "1281-01-01" or gun >= "1923-10-29":
        return True                             # atlasın sınırı, kırılma DEĞİL
    h = _sayi(gun)
    import bisect
    i = bisect.bisect_left(_GS, h)
    for j in (i - 1, i):
        if 0 <= j < len(_GS) and abs(_GS[j] - h) <= tolerans * 1.03:
            return True
    return False


# ────────────────────────────────────── ③ veride ad -> (dosya, satır)
sys.path.insert(0, os.path.join(KOK, "arac"))
import girdi  # noqa: E402

DOSYALAR = list(girdi.GIRDI_DOSYALARI)
AD_RX = re.compile(r'\bad:\s*"((?:[^"\\]|\\.)*)"')

konum = collections.defaultdict(list)
icerik = {}
for dosya in DOSYALAR:
    yol = os.path.join(VERI, os.path.basename(dosya))
    if not os.path.exists(yol):
        continue
    satirlar = io.open(yol, encoding="utf-8", newline="").read().split("\n")
    icerik[os.path.basename(dosya)] = satirlar
    for i, satir in enumerate(satirlar):
        m = AD_RX.search(satir)
        if m:
            konum[m.group(1)].append((os.path.basename(dosya), i))
print("TABAN: %d benzersiz ad, %d dosya" % (len(konum), len(icerik)))

# ────────────────────────────────────────── ④ ÇAKIŞMA — aynı ad, iki yama
gruplu = collections.defaultdict(list)
for x in yama:
    gruplu[x["r"]["ad"]].append(x)

cakisan = {}
for ad, liste in gruplu.items():
    if len(liste) < 2:
        continue
    imza = {json.dumps({k: v for k, v in x["r"].items()
                        if k in ("d", "s", "v", "isg")},
                       sort_keys=True, ensure_ascii=False) for x in liste}
    if len(imza) > 1:                            # içerik FARKLI ⇒ çakışma
        cakisan[ad] = liste

# ───────────────────────────────────────────────────── ⑤ alanı değiştir
ALAN_RX = {a: re.compile(r'(\b%s:\s*)\[' % a) for a in ("d", "s", "v", "isg")}


def dizi_sonu(satir, bas):
    """`[` konumundan başlayıp eşleşen `]`in İNDEKSİNİ döndürür."""
    derinlik = 0
    tirnak = False
    kacis = False
    for i in range(bas, len(satir)):
        c = satir[i]
        if kacis:
            kacis = False
            continue
        if c == "\\":
            kacis = True
            continue
        if c == '"':
            tirnak = not tirnak
            continue
        if tirnak:
            continue
        if c == "[":
            derinlik += 1
        elif c == "]":
            derinlik -= 1
            if derinlik == 0:
                return i
    return -1


ARALIK_RX = re.compile(r'\{\s*f:\s*"([^"]+)"\s*,\s*t:\s*"([^"]+)"')


def _dilim(satir, alan):
    """Satırdaki `<alan>:[ ... ]` diziSİNİN metnini döndürür; yoksa ''."""
    m = ALAN_RX[alan].search(satir)
    if not m:
        return ""
    son = dizi_sonu(satir, m.end() - 1)
    return satir[m.end() - 1:son + 1] if son > 0 else ""


def araliklar(metin):
    """`{f:"..",t:".."}` çiftlerini toplar."""
    return [(a, b) for a, b in ARALIK_RX.findall(metin or "")]


def birlestir(par):
    """[(f,t)] listesini örtüşmesiz, sıralı bir kapsama indirger."""
    if not par:
        return []
    par = sorted(par)
    cik = [list(par[0])]
    for f, t in par[1:]:
        if f <= cik[-1][1]:
            cik[-1][1] = max(cik[-1][1], t)
        else:
            cik.append([f, t])
    return [tuple(x) for x in cik]


def eksilen(eski, yeni):
    """ESKİ kapsamda olup YENİ kapsamda OLMAYAN aralıkları döndürür."""
    kayip = []
    for f, t in eski:
        imlec = f
        for yf, yt in yeni:
            if yt <= imlec or yf >= t:
                continue
            if yf > imlec:
                kayip.append((imlec, min(yf, t)))
            imlec = max(imlec, yt)
            if imlec >= t:
                break
        if imlec < t:
            kayip.append((imlec, t))
    return [(f, t) for f, t in kayip if f < t]


def js_yaz(deger):
    """Python nesnesini yerlesimler.js üslûbunda JS'e çevirir."""
    if isinstance(deger, list):
        return "[" + ",".join(js_yaz(x) for x in deger) + "]"
    if isinstance(deger, dict):
        return "{" + ",".join(
            '%s:%s' % (k, js_yaz(v)) for k, v in deger.items()) + "}"
    if isinstance(deger, str):
        return '"' + deger.replace("\\", "\\\\").replace('"', '\\"') + '"'
    if deger is None:
        return "null"
    if isinstance(deger, bool):
        return "true" if deger else "false"
    return str(deger)


# ──────────────────────────────────────────────────────────── ⑥ uygula
ist = collections.Counter()
atlanan = []
degisiklik = collections.defaultdict(int)
inen = []

for ad, liste in sorted(gruplu.items()):
    x = liste[0]
    r = x["r"]

    if ad in cakisan:
        ist["cakisma"] += 1
        atlanan.append((ad, "ÇAKIŞMA: %s — içerik farklı, KARAR GEREK"
                        % " vs ".join(sorted({y["__dosya"] for y in liste}))))
        continue
    if r.get("d2_gerek"):
        ist["kendi-kilidi"] += 1
        atlanan.append((ad, "KENDİ KİLİDİ: %s" % str(r["d2_gerek"])[:70]))
        continue

    yerler = konum.get(ad, [])
    if not yerler:
        ist["veride-yok"] += 1
        atlanan.append((ad, "veride YOK — yeni nokta, yama ile yazılmaz"))
        continue
    if len(yerler) > 1:
        ist["belirsiz"] += 1
        atlanan.append((ad, "%d kayıtta birden geçiyor" % len(yerler)))
        continue

    # `d:` günleri Değişmez 2'nin menzilinde — maddesiz gün ENGEL
    kayip = []
    for d in (r.get("d") or []):
        for anahtar in ("f", "t"):
            g = d.get(anahtar)
            if g and not maddesi_var(g):
                kayip.append(g)
    if kayip:
        ist["gun-maddesiz"] += 1
        atlanan.append((ad, "MADDESİZ GÜN (Değişmez 2 açılır): %s"
                        % ", ".join(sorted(set(kayip))[:4])))
        continue

    # `s:` yabancı günleri — UYARI, engel değil (2s tavanı 121)
    zayif = []
    for d in (r.get("s") or []):
        for anahtar in ("f", "t"):
            g = d.get(anahtar)
            if g and not maddesi_var(g):
                zayif.append(g)

    dosya, i = yerler[0]
    satir = icerik[dosya][i]
    yeni_satir = satir
    dokunulan = []
    hata = None
    for alan in ("d", "s", "v", "isg"):
        if alan not in r:
            continue
        m = ALAN_RX[alan].search(yeni_satir)
        yeni_js = js_yaz(r[alan])
        if m:
            son = dizi_sonu(yeni_satir, m.end() - 1)
            if son < 0:
                hata = "%s:[ kapanmıyor" % alan
                break
            yeni_satir = yeni_satir[:m.end() - 1] + yeni_js + yeni_satir[son + 1:]
        else:
            # alan YOK — `ad:"..."`ın hemen ardına ekle
            ma = AD_RX.search(yeni_satir)
            if not ma:
                hata = "ad: çıpası yok"
                break
            yeni_satir = (yeni_satir[:ma.end()] + ",%s:%s" % (alan, yeni_js)
                          + yeni_satir[ma.end():])
        dokunulan.append(alan)

    if hata:
        ist["cipa-yok"] += 1
        atlanan.append((ad, hata))
        continue
    if yeni_satir == satir:
        ist["zaten-boyle"] += 1
        continue

    # ⑤ KAPSAM DARALMASI — ve bu koruma BİR VERİ KAYBINDAN DOĞDU.
    #
    # 🔴 ÖLÇÜLMÜŞ VAKA (29 Ağustos 2026): Çaçak yaması `s:`e 1689-1690
    #   Avusturya arasını EKLEMEK istiyordu; uygulayıcı diziyi
    #   DEĞİŞTİRDİ ve altı dönemin beşi SİLİNDİ:
    #       önce  sirbistan · sirp-despotlugu · avusturya(1717-1739) ·
    #             sirbistan-prensligi · sirbistan-kralligi · yugoslavya
    #       sonra avusturya(1689-1690)
    #   Sonuç: 1717-08-18 → 1830-11-08 arası 113 YIL SAHİPSİZ. Denetim
    #   yakaladı (`Değişmez 1` 215→217, `1b` 0→2) ve yazım geri alındı.
    #
    # ⇒ Kusur ne yamada ne uygulayıcıdaydı — SÖZLEŞMEDEYDİ: yama biçimi
    #   *"bu dizi YERİNE"* mi *"bu diziye EK"* mi olduğunu SÖYLEMİYOR.
    #   İki okuma da savunulabilir, ve yanlış okuma SESSİZCE veri siler.
    # 🟢 Çare bir varsayım seçmek değil, DARALMAYI YASAKLAMAK: yeni
    #   kapsam eskinin bir gününü bile kaybediyorsa kayıt UYGULANMAZ ve
    #   kaybolan aralık ADIYLA raporlanır. Genişleme serbest, daralma
    #   insan kararı ister.
    # 📌 `isg:` kapsama SAYILMAZ — o bir işgal ÖRTÜSÜdür, sahiplik değil.
    eski_kap = birlestir(sum(
        (araliklar(_dilim(satir, alan)) for alan in ("d", "s", "v")), []))
    yeni_kap = birlestir(sum(
        (araliklar(_dilim(yeni_satir, alan)) for alan in ("d", "s", "v")), []))
    kayip_ar = eksilen(eski_kap, yeni_kap)
    if kayip_ar:
        ist["kapsam-daraldi"] += 1
        atlanan.append((ad, "KAPSAM DARALDI — %s (yama EKLEME mi DEĞİŞTİRME mi belirsiz)"
                        % "; ".join("%s→%s" % x for x in kayip_ar[:3])))
        continue

    icerik[dosya][i] = yeni_satir
    ist["uygulandi"] += 1
    degisiklik[dosya] += 1
    inen.append((ad, dosya, "+".join(dokunulan), zayif))

# ───────────────────────────────────────────────────────────── ⑦ rapor
print()
print("=== SAHİPLİK YAMASI — %s ===" % ("YAZILDI" if YAZ else "KURU KOŞU"))
print("benzersiz ad: %d" % len(gruplu))
for k in ("uygulandi", "zaten-boyle", "cakisma", "kendi-kilidi",
          "gun-maddesiz", "belirsiz", "veride-yok", "cipa-yok"):
    if ist[k]:
        print("  %-16s %4d" % (k, ist[k]))

if inen:
    print()
    print("İNEN (%d):" % len(inen))
    for ad, dosya, alanlar, zayif in inen:
        ek = ("  ⚠️ 2s zayıf gün: " + ", ".join(sorted(set(zayif))[:3])) if zayif else ""
        print("  %-28s %-30s %s%s" % (ad[:28], dosya, alanlar, ek))

if degisiklik:
    print()
    print("DOSYA DOSYA (%d):" % len(degisiklik))
    for d, n in sorted(degisiklik.items(), key=lambda x: -x[1]):
        print("  %-38s %4d" % (d, n))

if atlanan:
    print()
    print("[!] ATLANAN (%d) — sebebiyle:" % len(atlanan))
    for ad, sebep in atlanan:
        print("  %-28s %s" % (ad[:28], sebep))

if YAZ:
    for dosya in degisiklik:
        io.open(os.path.join(VERI, dosya), "w", encoding="utf-8",
                newline="").write("\n".join(icerik[dosya]))
    print()
    print("%d dosya yazıldı. 🔴 ŞİMDİ `py arac/denetle.py` KOŞTUR." % len(degisiklik))
else:
    print()
    print("(kuru koşu — hiçbir dosya yazılmadı; --yaz ile çalıştır)")
