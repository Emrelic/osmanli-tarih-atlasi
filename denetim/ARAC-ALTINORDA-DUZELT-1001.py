# -*- coding: utf-8 -*-
r"""ODAK-KAPAT'in ALTINORDA'da bulduğu IKI VERI KUSURUNU duzeltir (odak disi).

Kaynak: tahta M-5728 · denetim/ODAK-KAPAT-ALTINORDA-1001.md

KUSUR ① — SAHTE BELIRSIZLIK (#6, t=1314-01-01)
  Kaydin kendi `kaynak` alani: "TDV, madde: ozbek-han — 174 kisilik Kahire
  elciligi (GUN VERILMIYOR)". ODAK-KAPAT TDV'yi okudu: "16 Zilhicce 713'te
  (3 Nisan 1314) … heyeti Kahire'ye gitti" ⇒ GUN VERILIYOR.
  🔴 Bu, eksik gunden KOTUDUR: kayit kaynak hakkinda YANLIS BIR BEYAN
     tasiyor ve o beyan sonraki oturumu ARAMAKTAN ALIKOYAR. `D210`un tersi:
     sahte kesinlik degil SAHTE BELIRSIZLIK.
  ⇒ t 1314-01-01 → 1314-04-03 · `kaynak` beyani duzeltilir · eski deger
    `ic_not_t` olarak BEYAN edilir (iz kalir).
  ⚠️ `t` degisikligi Degismez 2'nin ±30 gun penceresini KAYDIRIR ⇒ bu arac
    kostuktan sonra `py arac/denetle.py` SART.
  📌 Ve bu, KASA'nin yil-temsili olcumunde "gun kaynakta var ama -01-01
    yazilmis: KANITLANAN 0" dedigi sinifin ILK KANITLANMIS ornegi. KASA 108
    donemi tarayip bulamamisti; ODAK-KAPAT kronoloji tarafinda buldu —
    iki olcum FARKLI EVRENDE.

KUSUR ② — OLGU HATASI, YON TERS (#10, t=1320-05-16)
  Baslik: "Misir Memluk hanedanindan Tolun-Bige Hatun ile evlilik anlasmasi"
  TDV ozbek-han: Ozbek Han "hanedandan Tolun-Bige Hatun'u … Misir'a GONDERDI
  ve nikah merasimi … (16 Mayis 1320) gerceklestirildi".
  ⇒ YON TERS: baslik onu Misir'dan GELMIS gibi yaziyor, kaynak Misir'a
    GONDERILDIGINI soyluyor.
  🔴 DIKKAT — iki ayri iddia var ve ikisi AYNI GUVENDE DEGIL:
     (a) YON: "Misir'a gonderdi" cumlesi acik ⇒ duzeltme GUVENLI
     (b) HANEDAN: alintinin basi kesik ("hanedandan"), hangi hanedan oldugu
         tam cumle olmadan KESIN DEGIL. ODAK-KAPAT "Altin Orda" diyor ve
         baglam bunu destekliyor, ama ben alintinin TAMAMINI gormedim.
  ⇒ Bu arac YALNIZ YONU duzeltir. Hanedan iddiasi `ic_not_b`de BEYAN
    edilir, basliga YAZILMAZ. Olculmeyen bir sey hukum olmaz.

KULLANIM:  py denetim/ARAC-ALTINORDA-DUZELT-1001.py [--yaz]
"""
import io
import os
import re
import subprocess
import sys

sys.stdout.reconfigure(encoding="utf-8")
os.chdir(r"C:\atlas")
KURU = "--yaz" not in sys.argv
YOL = "data/kronoloji_altinorda.js"

ISLER = [
    # (etiket, kayit ayirtedici t, [(eski, yeni), ...])
    ("① #6 sahte belirsizlik — t ve kaynak beyani", "1314-01-01", [
        ('t:"1314-01-01"', 't:"1314-04-03"'),
        ('kaynak:"TDV, madde: ozbek-han — 174 kişilik Kahire elçiliği '
         '(GÜN VERİLMİYOR)"',
         'kaynak:"TDV, madde: ozbek-han — \\"16 Zilhicce 713\'te (3 Nisan '
         '1314) … heyeti Kahire\'ye gitti\\" ⇒ GÜN VERİLİYOR", '
         'ic_not_t:"eski t: 1314-01-01 · kaydın kendi kaynak alanı '
         '\'(GÜN VERİLMİYOR)\' diyordu, YANLIŞTI — TDV günü veriyor. '
         'Sahte BELİRSİZLİK (D210\'un tersi): yanlış bir beyan, sonraki '
         'oturumu aramaktan alıkoyar. Ölçen: ODAK-KAPAT, tahta M-5728"'),
    ]),
    ("② #10 olgu hatası — YALNIZ yön", "1320-05-16", [
        ('b:"Mısır Memlük hânedanından Tolun-Bige Hatun ile evlilik '
         'anlaşması"',
         'b:"Tolun-Bige Hatun Mısır\'a gönderildi — Memlük ittifakının '
         'evlilikle mühürlenmesi", '
         'ic_not_b:"eski b: \'Mısır Memlük hânedanından Tolun-Bige Hatun '
         'ile evlilik anlaşması\' — YÖN TERSTİ. TDV ozbek-han: Özbek Han '
         '\'hânedandan Tolun-Bige Hatun\'u … Mısır\'a GÖNDERDİ\'. '
         '⚠️ HANEDAN iddiası YAZILMADI: alıntının başı kesik, hangi hânedan '
         'olduğu tam cümle görülmeden kesin değil. ODAK-KAPAT Altın Orda '
         'diyor ve bağlam destekliyor, ama ölçülmeyen şey hüküm olmaz. '
         'Ölçen: ODAK-KAPAT, tahta M-5728"'),
    ]),
]


def _kayit_sinirlari(metin, i):
    bas, derin, j = None, 0, i
    while j >= 0:
        c = metin[j]
        if c == "}":
            derin += 1
        elif c == "{":
            if derin == 0:
                bas = j
                break
            derin -= 1
        j -= 1
    if bas is None:
        return None
    j, derin, tirnak, kacis = bas, 0, False, False
    while j < len(metin):
        c = metin[j]
        if kacis:
            kacis = False
        elif c == "\\":
            kacis = True
        elif c == '"':
            tirnak = not tirnak
        elif not tirnak:
            if c in "{[":
                derin += 1
            elif c in "}]":
                derin -= 1
                if derin == 0:
                    return (bas, j + 1)
        j += 1
    return None


s = io.open(YOL, encoding="utf-8", newline="").read()
print("### KURU KOŞU ###" if KURU else "### YAZIYOR ###")
print("  dosya: %s · %d bayt" % (YOL, len(s)))
n, hata = 0, 0
for etiket, t, degisimler in ISLER:
    yerler = [m.start() for m in
              re.finditer(r'(?:^|[{,\s])"?t"?\s*:\s*"%s"' % re.escape(t), s)]
    if len(yerler) != 1:
        print("  🔴 %-44s t=%s → %d kayıt (1 bekleniyordu)"
              % (etiket, t, len(yerler)))
        hata += 1
        continue
    sinir = _kayit_sinirlari(s, yerler[0])
    if not sinir:
        print("  🔴 %-44s kayıt sınırı bulunamadı" % etiket)
        hata += 1
        continue
    b0, b1 = sinir
    govde = s[b0:b1]
    yeni = govde
    tamam = True
    for eski, yen in degisimler:
        if yeni.count(eski) != 1:
            print("  🔴 %-44s parça %d kez: %.46s…"
                  % (etiket, yeni.count(eski), eski))
            tamam = False
            break
        yeni = yeni.replace(eski, yen, 1)
    if not tamam:
        hata += 1
        continue
    s = s[:b0] + yeni + s[b1:]
    n += 1
    print("  ✓ %s" % etiket)

print("\n  uygulanan: %d / %d · hata: %d" % (n, len(ISLER), hata))
if KURU:
    print("\n=> uygulamak için --yaz")
    sys.exit(0)
if hata or n != len(ISLER):
    print("🔴 EKSİK — dosya YAZILMADI (kısmi yazma yapmam)")
    sys.exit(1)

io.open(YOL, "w", encoding="utf-8", newline="").write(s)
r = subprocess.run(["node", "--check", YOL], capture_output=True, text=True)
if r.returncode != 0:
    print("🔴 node --check BAŞARISIZ"); print(r.stderr[:400]); sys.exit(1)
print("✓ YAZILDI · node --check temiz")

son = io.open(YOL, encoding="utf-8", newline="").read()
print("\n### SINAV ###")
print("  t 1314-04-03 var mı     : %s" % ('t:"1314-04-03"' in son))
print("  t 1314-01-01 kalktı mı  : %s" % ('t:"1314-01-01"' not in son))
print("  GÜN VERİLMİYOR kalktı mı: %s" % ("(GÜN VERİLMİYOR)" not in son))
print("  ic_not_t yazıldı mı     : %s" % ("ic_not_t" in son))
print("  ic_not_b yazıldı mı     : %s" % ("ic_not_b" in son))
print("  mükerrer anahtar sınavı : t sayısı %d (44 kayıt bekleniyor)"
      % len(re.findall(r'(?:^|[{,\s])"?t"?\s*:\s*"', son)))
print("\n  🔴 SIRADA: py arac/denetle.py — `t` DEĞİŞTİ, Değişmez 2 penceresi kaydı")
