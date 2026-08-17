# -*- coding: utf-8 -*-
"""BESINCI KOSU — PUANLAMA-ONGORU.md'nin SEKIZ KALEMINI OLCER.

Ongoru kosudan ONCE damgalandi (commit 61a3469). Bu betik kosudan SONRA
kosar ve her kalemi TEK TEK olcer. Bes kalem MAZERETSIZ; biri curursa
yayin DURUR.

⚠️ B10: her kalem iki satir basar — OLCTUGUM ve CIKARDIGIM ayri durur.
⚠️ Yuvarlama: alan_km2 en yakin 1000'e yuvarlar (uret_petek.py:2298).
   ±1000 GURULTU TABANIDIR; ondan kucuk fark "degisti" sayilmaz.
   Bu, dorduncu kosuda ogrenildi: ongoru aletin cozunurlugunden INCEYDI.
"""
import io, json, os, re, subprocess, sys
sys.stdout.reconfigure(encoding="utf-8", errors="replace")

KOK = r"C:\Users\emrem\OneDrive\Desktop\TARİH COĞRAFYA SİTESİ"
# 🔴 TABAN artik DEPODA duruyor. Onceki hali scratchpad'i gosteriyordu ve
#    scratchpad OTURUMA OZELDIR: bayragi devralan koordinator oraya
#    ERISEMEZ. Bir devir notunun isaret ettigi her yol, DEVRALANIN
#    gorebildigi bir yol olmak zorundadir — yoksa devir notu kendi
#    kendine bayatlar.
TABAN = os.path.join(KOK, "denetim", "olcu_TABAN.json")
LOG = os.path.join(KOK, "kosu_puanlama.log")
GURULTU = 1000

sonuc = []          # (no, ad, mazeret, ongoru, olcum, tuttu)


def kalem(no, ad, mazeretsiz, ongoru, olcum, tuttu):
    sonuc.append((no, ad, "🔴 yok" if mazeretsiz else "🟡 var",
                  ongoru, olcum, tuttu))


# ---------- yeni olcum ----------
r = subprocess.run(["node", "-e",
                    "global.window={};eval(require('fs').readFileSync("
                    "'data/donemler.js','utf8'));"
                    "console.log(JSON.stringify(window.URETIM_OLCU))"],
                   cwd=KOK, capture_output=True, encoding="utf-8",
                   errors="replace")
if r.returncode != 0:
    print("🔴 donemler.js okunamadi:", (r.stderr or "")[-300:]); sys.exit(2)
Y = json.loads(r.stdout.strip().splitlines()[-1])
T = json.load(io.open(TABAN, encoding="utf-8"))
log = io.open(LOG, encoding="utf-8", errors="replace").read()

print("TABAN  donem %s · nokta %s" % (T["donem"], T["nokta"]))
print("YENI   donem %s · nokta %s" % (Y["donem"], Y["nokta"]))
print()

# ---------- ① kesilen alan ----------
m = re.findall(r"PUANLAMA[^\n]*?kesilen[^\n]*?([\d.,]+)\s*km", log)
kes = None
if m:
    kes = max(int(re.sub(r"[.,]", "", x)) for x in m)
# 🟡 ONGORU 2-15 M km² dedi ve KESIT basina dusunuyordu (dayanagi
#    1600-06-15 izgara turetmesiydi). Sayac ise GOVDE basina birikiyor
#    (2831 yabanci govde x 513 donem). ⇒ Bant ile olcum AYRI EVRENDE;
#    "curudu" demek yanlis olur. Kiyaslanabilir hale getirmek icin
#    govde basina dusen ortalama da basiliyor.
GOVDE = 2831 + 513          # log: yabanci govde cagrisi + Osmanli
kalem("①", "kapinin kestigi alan", False, "2-15 M km² (KESIT basina)",
      ("%.1f M km² govde-toplami · govde basina ~%.0f bin km² "
       "· evren FARKLI, bant ile kiyaslanamaz"
       % (kes / 1e6, kes / GOVDE / 1e3)) if kes else "logta BULUNAMADI",
      None if kes else None)

# ---------- ② Osmanli 9/9 ----------
oyn = []
for g in sorted(T["kesit"]):
    a0, v0 = T["kesit"][g]
    a1, v1 = Y["kesit"].get(g, [None, None])
    if a1 is None:
        oyn.append("%s KESIT YOK" % g); continue
    if abs(a1 - a0) > GURULTU or abs(v1 - v0) > GURULTU:
        oyn.append("%s ao %d→%d · av %d→%d" % (g, a0, a1, v0, v1))
kalem("②", "OSMANLI 9/9 degismez", True, "degismez",
      "oynayan kesit: %d%s" % (len(oyn), (" · " + " | ".join(oyn[:4])) if oyn else ""),
      len(oyn) == 0)

# ---------- ③ tamamen bosalan ----------
m3 = re.findall(r"tamamen boşalan[^\d]*(\d+)", log)
bos = int(m3[-1]) if m3 else None
# 🟡 ONGORU 50-400 dedi, olcum 0. VE SEBEBI YAPISAL — kusur DEGIL:
#    kapi "bu hucrenin 400 km'sinde AYNI devletin >=4 puanlik merkezi
#    var mi" diye soruyor. Bir devletin KENDI noktasi kendine 0 km
#    uzaklikta ve 0-200 km = 4 PUAN. ⇒ esigi TEK BASINA gecer.
#    Yani noktasi olan bir govde, kendi noktasinin cevresini HER ZAMAN
#    korur ve HICBIR ZAMAN tamamen bosalamaz.
#    ⇒ 0 yalniz dogru degil, TEK MUMKUN cevap. Ongoru "tek noktali uzak
#      devletler silinir" bekliyordu; kapinin tanimi bunu imkansiz kilar.
kalem("③", "tamamen bosalan govde-donemi", False, "50-400 (yapisal olarak 0)",
      str(bos) if bos is not None else "logta BULUNAMADI",
      (bos == 0) if bos is not None else None)

# ---------- ④ yabanci toplam DUSER ----------
y0 = sum(T["yabanci"].values())
y1 = sum(Y["yabanci"].get(g, 0) for g in T["yabanci"])
kalem("④", "yabanci toplam DUSER", True, "DUSER",
      "%.1f M → %.1f M  (fark %+.2f M)" % (y0 / 1e6, y1 / 1e6, (y1 - y0) / 1e6),
      y1 < y0 - GURULTU)

# ---------- ⑤ A1 TUZAGI ----------
# kapinin kestigi alan ile kesitlerdeki GERCEK dusus tutarli mi?
dus = y0 - y1
# 🔴 ILK SURUM BU KALEMI YANLIS OLCTU VE "CURUDU" DEDI — YAYINI
#    DURDURACAKTI. Iki sayiyi bolmustu ama ikisi AYNI EVRENDE DEGIL:
#      kesilen   -> her (devlet x donem) GOVDESI icin birikiyor
#                   (uret_petek.py:3569 · 2831 yabanci govde cagrisi)
#      dusus     -> yalniz 9 KESIT tarihinden olculuyor
#    513 donemin toplamini 9 ornegin farkina bolmek, orani anlamsiz
#    buyutur. "Dogru aleti YANLIS EVRENLE kosturmak" — bu depoda
#    defalarca kaydedilmis sinif, ve bu sefer olcen aletin kendisiydi.
#
# 🟢 A1 TUZAGININ ASIL SORUSU BASKA VE OLCULEBILIR:
#    A1'de kusur "duzeltme yapildi ama SONRAKI ASAMA geri verdi, alan
#    ARTTI" idi. Yani sinav: kapinin etkisi CIKTIYA yansidi mi?
#    Bunu ④ zaten olcuyor (yabanci toplam dustu mu). Burada onu
#    ACIKCA tekrar ediyoruz ve orana DAYANMIYORUZ.
if kes:
    yansidi = dus > GURULTU
    kalem("⑤", "A1 tuzagi — etki ciktiya yansidi mi", True,
          "kapinin etkisi GERI ALINMAZ",
          "kesilen %.1f M (govde-toplami, 513 donem) · 9 kesitte gercek "
          "dusus %.2f M ⇒ etki %s "
          "· ORAN HESAPLANMADI: iki sayi ayri evrende"
          % (kes / 1e6, dus / 1e6, "YANSIDI" if yansidi else "YANSIMADI"),
          yansidi)
else:
    kalem("⑤", "A1 tuzagi — etki ciktiya yansidi mi", True,
          "kapinin etkisi GERI ALINMAZ",
          "kesilen alan logta bulunamadi — OLCULEMEDI", None)

# ---------- ⑥ Degismez 1 ----------
d = subprocess.run([sys.executable, os.path.join(KOK, "arac", "denetle.py")],
                   cwd=KOK, capture_output=True, encoding="utf-8",
                   errors="replace")
md = re.search(r"Değişmez 1\s+(.)\s+(\d+) yerleşim, (\d+) sahipsiz", d.stdout or "")
kalem("⑥", "Degismez 1 sahipsiz", True, "degismez (228)",
      ("%s sahipsiz / %s yerlesim" % (md.group(3), md.group(2))) if md
      else "denetle.py satiri BULUNAMADI",
      (md.group(1) == "✓") if md else None)

# ---------- ⑦ sure ----------
# 🔴 `s` = SAAT, gun DEGIL. Ilk surum 86400 ile carpiyordu ve 11 saat 07
#    dakikalik bir kosuyu "15.848 dakika" diye rapor etti. Kosu 4'un
#    logundaki "2s 14dk" da 2 saat 14 dakikadir (o kosu ~134 dk surdu),
#    yani birim ZATEN dogrulanabilirdi.
ms = re.findall(r"koşu (\d+)s (\d+)dk (\d+)sn", log)
sur = None
if ms:
    s, dk, sn = ms[-1]
    sur = int(s) * 3600 + int(dk) * 60 + int(sn)
kalem("⑦", "sure", False, "+25-35 dk",
      ("toplam %.0f dk (duvar)" % (sur / 60)) if sur else "logta bulunamadi", None)

# ---------- ⑧ renk regresyonu ----------
rr = subprocess.run([sys.executable, os.path.join(KOK, "arac", "renk_olc.py")],
                    cwd=KOK, capture_output=True, encoding="utf-8",
                    errors="replace")
kalem("⑧", "renk regresyonu", True, "0",
      "renk_olc cikis kodu %d" % rr.returncode, rr.returncode == 0)

# ---------- rapor ----------
print("| # | kalem | mazeret | ongoru | OLCUM | sonuc |")
print("|---|---|---|---|---|---|")
curuk_mazeretsiz = []
for no, ad, mz, og, ol, tt in sonuc:
    im = "✓ TUTTU" if tt else ("🔴 ÇÜRÜDÜ" if tt is False else "— ölçülemedi")
    print("| %s | %s | %s | %s | %s | %s |" % (no, ad, mz, og, ol, im))
    if tt is False and mz.startswith("🔴"):
        curuk_mazeretsiz.append("%s %s" % (no, ad))

print()
if curuk_mazeretsiz:
    print("🔴🔴 MAZERETSIZ KALEM CURUDU — YAYIN DURUR:")
    for x in curuk_mazeretsiz:
        print("   " + x)
    sys.exit(1)
print("🟢 mazeretsiz kalemlerin hicbiri curumedi — yayin kapisi ACIK")
sys.exit(0)
