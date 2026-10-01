# -*- coding: utf-8 -*-
r"""ODAK-KAPAT'in 1. Dunya arastirmasindaki A + A-IMZA kalemlerini uygular.

Kaynak: denetim/ODAK-KAPAT-1DUNYA-1001.md (ODAK-KAPAT olctu, 97/97 madde)
Hedef : data/kronoloji_cok_1dunya_A.js  (EVREN ICI ⇒ 480 tavanini dusurur)

🔴 ONERILER RAPORDAN CALISMA ANINDA OKUNUR, ELLE KOPYALANMAZ.
   Sebebi olculmus: bu gece koordinator LAB'in rapor TABLOSUNDAN alan degeri
   kopyalayip dosyayla uyusmadigini gordu (`"Remle yoresi"` vs
   `"Remle yoresi (Filistin)"`). Elle kopyalama bir dizgi hatasi kaynagidir;
   raporu AYRISTIRMAK hem onu kaldirir hem kaynagi acik tutar.

HUKUMLER (koordinator, tahta M-5718 ve M-5722):
  A        olayin gectigi yer, kaynak cumlesiyle  → yer_id YAZILIR
  A-IMZA   antlasma/mutareke IMZA YERI, kaynak ACIKCA veriyor → yer_id YAZILIR
           (imza yeri olayin LOCUSUDUR, bir "taraf" degil. Siniri: kaynak
            yeri VERMIYORSA yazilmaz — emsal ORTADOGU #46 Remle, orada
            `yer` alani BEYANA cevrildi.)
  A?       ozne ULKE (Luksemburg x2) → `odak_yer` isi, yer_id DEGIL ⇒ BU ARAC
           ONLARA DOKUNMAZ.

OLCULDU (bu arac yazilmadan once):
  dosya 97 kayit · JSON-tirnakli bicim · `yer_id` anahtari 97 kez VAR (hepsi BOS)
  95 ayri `t` · MUKERRER t: 1914-08-02 (x2) · 1916-08-17 (x2)
  raporda A/A-* satiri 27 · yer_id onerisi olan 25 · A? 2
  tek belirsizlik: #6 t=1914-08-02 (otekisi #5 Luksemburg) ⇒ `b` ayirtediciyle

KULLANIM:  py denetim/ARAC-ODAK-KAPAT-UYGULA-1DUNYA-1001.py [--yaz]
"""
import io
import os
import re
import subprocess
import sys

sys.stdout.reconfigure(encoding="utf-8")
os.chdir(r"C:\atlas")
KURU = "--yaz" not in sys.argv
VERI = "data/kronoloji_cok_1dunya_A.js"
RAPOR = "denetim/ODAK-KAPAT-1DUNYA-1001.md"

# mukerrer `t` icin ayirtedici: t -> kayit satirinda GECMESI gereken parca
# 🔴 AYIRTEDICI OLCULEREK SECILIR, TAHMINLE DEGIL. Ilk denemem "Belçika"ydi
#   ve YETMEDI: 1914-08-02'deki OTEKI kayit (Luksemburg'un isgali) kendi
#   govdesinde "Belçika"yi bir kez aniyor ⇒ iki kayit da tuttu, arac
#   atladi (dogru davranis). Olculdu: "ültimatom" Luksemburg satirinda
#   SIFIR kez geciyor ⇒ gercek ayirtedici bu.
#   Ders: ayirtedici `b` alanindan degil KAYDIN TAMAMINDAN aranir, cunku
#   eslesme de oyle yapiliyor.
AYIRTEDICI = {"1914-08-02": "ültimatom"}

# ── raporu ayristir ─────────────────────────────────────────────────────────
rap = io.open(RAPOR, encoding="utf-8", newline="").read()
SATIR = re.compile(
    r'^\|\s*(\d+)\s*\|\s*([0-9]{4}-[0-9]{2}-[0-9]{2})\s*\|([^|]*)\|'
    r'\s*\*\*(A[^*|]*)\*\*[^|]*\|([^|]*)\|', re.M)
ISLER = []
for m in SATIR.finditer(rap):
    no, t, baslik, kova, oneri = m.groups()
    my = re.search(r'yer_id\s*:\s*"([^"]+)"', oneri)
    if my:
        ISLER.append((no, t, kova.strip(), my.group(1), baslik.strip()))
print("### KURU KOŞU ###" if KURU else "### YAZIYOR ###")
print("  rapor: %s · yer_id önerisi taşıyan A satırı: %d" % (RAPOR, len(ISLER)))
if len(ISLER) < 20:
    print("🔴 beklenen ~25, bulunan %d — rapor biçimi değişmiş olabilir, DUR"
          % len(ISLER))
    sys.exit(1)

s = io.open(VERI, encoding="utf-8", newline="").read()
print("  veri : %s · %d kayıt · boş `yer_id`: %d"
      % (VERI, len(re.findall(r'\{\s*"t"\s*:', s)),
         len(re.findall(r'"yer_id"\s*:\s*""', s))))


def kayitlar(metin, t):
    """t ile baslayan kayitlarin (bas, son) listesi.

    🔴 DESEN GEVSEK OLMAK ZORUNDA: bu dosya `{"t": "1914-06-28", ...}` yaziyor
    — iki nokta ustusteden SONRA BOSLUK var. Siki desen (`\\{"t":"`) SIFIR
    kayit buldu ve sigorta otup yazmayi reddetti. Projede UC kayit bicimi var
    (`D240` ailesi) ve bosluklar da degisiyor; hic bir desen "herkes boyle
    yazar" varsayimiyla kurulmaz.
    """
    out = []
    for m in re.finditer(r'\{\s*"t"\s*:\s*"%s"' % re.escape(t), metin):
        son = metin.find("\n", m.start())
        out.append((m.start(), son if son > 0 else len(metin)))
    return out


uygulanan, atlanan = 0, []
for no, t, kova, yid, bas in ISLER:
    aday = kayitlar(s, t)
    if AYIRTEDICI.get(t):
        aday = [(a, b) for a, b in aday if AYIRTEDICI[t] in s[a:b]]
    if len(aday) != 1:
        atlanan.append((no, t, "kayıt %d (1 bekleniyordu)" % len(aday)))
        continue
    b0, b1 = aday[0]
    govde = s[b0:b1]
    mbos = re.search(r'("yer_id"\s*:\s*)""', govde)
    if not mbos:
        mdolu = re.search(r'"yer_id"\s*:\s*"([^"]+)"', govde)
        atlanan.append((no, t, "yer_id ZATEN DOLU: %s"
                        % (mdolu.group(1) if mdolu else "?")))
        continue
    k0 = b0 + mbos.start(1)
    k1 = b0 + mbos.end()
    s = s[:k0] + mbos.group(1) + '"%s"' % yid + s[k1:]
    uygulanan += 1
    print("  ✓ #%-3s %s  %-8s → %-18s %s"
          % (no, t, kova[:8], yid, bas[:36]))

print("\n  uygulanan: %d / %d" % (uygulanan, len(ISLER)))
if atlanan:
    print("  🔴 ATLANAN %d — her biri AYRI kalem, sessiz geçilmedi:" % len(atlanan))
    for no, t, niye in atlanan:
        print("     #%-3s %s  %s" % (no, t, niye))
if KURU:
    print("\n=> uygulamak için --yaz")
    sys.exit(0)
if uygulanan == 0:
    print("🔴 hiçbir kalem uygulanmadı — dosya YAZILMADI")
    sys.exit(1)

io.open(VERI, "w", encoding="utf-8", newline="").write(s)
r = subprocess.run(["node", "--check", VERI], capture_output=True, text=True)
if r.returncode != 0:
    print("🔴 node --check BAŞARISIZ"); print(r.stderr[:400]); sys.exit(1)
print("✓ YAZILDI · node --check temiz")

son = io.open(VERI, encoding="utf-8", newline="").read()
print("\n### SINAV ###")
print("  boş `yer_id`   : %d  (öncesi − %d olmalı)"
      % (len(re.findall(r'"yer_id"\s*:\s*""', son)), uygulanan))
print("  dolu `yer_id`  : %d"
      % len(re.findall(r'"yer_id"\s*:\s*"[^"]+"', son)))
print("  🔴 SIRADA: py arac/odak_olc.py — ODAK-KAPAT 97→72 ÖNGÖRDÜ (A+A-İMZA)")
