# -*- coding: utf-8 -*-
r"""LAB'in 5 dayanaksiz `yer` bulgusuna verdigim DORT hukmu uygular.

Kaynak: denetim/LAB-ODAK-ORTADOGU-1002.md + LAB'in 1003 ara raporlari.
LAB alti kaydin `yer` alaninin KENDI KAYNAGIYLA uyusmadigini olctu; sonra
besini SINIRSIZ taramayla yeniden olctu (#34 kendi yanlis alarmiydi, cikti).

🔴 BU SINIF ODAKSIZLIKTAN AGIRDIR: alan zaten YAZILI ve `yer_id`ye cevrilirse
   kusur veriden HARITAYA gecer. O yuzden her kalem AYRI hukum aldi:

  #31 1135-09-25  Meraga    ▶ UYGULANIR — LAB ikinci kaynakta YERI BULDU
                               (TDV dubeys-b-sadaka: "sultanin Meraga'daki
                               otaginin kapisinda"). `yer` keskinlesir
                               ("Meraga yoresi" -> "Meraga"), `yer_id` yazilir,
                               ikinci kaynak eklenir. Atlasta VAR (37,39/46,24).
  #4  1029-01-01  Ukhuvane  ▶ YALNIZ KAYNAK — TDV salih-b-mirdas yeri VERIYOR,
                               ama Ukhuvane de Taberiye de ATLASTA YOK.
                               ⇒ `yer` dogrulanir, `yer_id` YAZILMAZ.
                               "Dogru ama atlasta yok" ile "yanlis" AYRI seydir.
  #21 1105-08-27  Remle     ▷ BEYAN — TDV'de BULUNAMADI. Yalniz Vikipedi
                               veriyor ve Vikipedi TEK DAYANAK OLAMAZ
                               (`CLAUDE.md §4` kirmizi cizgi) ⇒ `yer_id`ye
                               CEVRILMEZ, "dogrulanmadi" beyani yazilir.
  #46 1192-09-01  Remle     ▲ BEYANA CEVRILIR — hicbir kaynak imza yerini
                               vermiyor; "Treaty of Ramla" antlasmanin az
                               kullanilan ADI ve `yer` muhtemelen o addan
                               TURETILMIS (LAB'in cikarimi, oyle isaretlendi).
                               🔴 SILINMEZ: silmek izi yok eder. `yer` kalkar,
                               `ic_not_yer` olarak BEYAN edilir ⇒ iddia
                               KALKAR, iz KALIR.

⚠️ BICIM: bu dosya JSON-TIRNAKLI kayit bicimini kullaniyor (`{"t":"…"`),
   projedeki UC bicimden biri (`D240` ailesi). Tek satirlik `{ t:"…" }`
   bicimi icin yazilmis bir eslestirici burada 0 kayit bulur — bir kez
   tam bu oldu (33 kalemde 6 bulundu).

KULLANIM:  py denetim/ARAC-LAB-YER-UYGULA-1003.py [--yaz]
"""
import io
import os
import re
import subprocess
import sys

sys.stdout.reconfigure(encoding="utf-8")
os.chdir(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
KURU = "--yaz" not in sys.argv
YOL = "data/kronoloji_cok_once1281_ortadogu.js"

Q = '\\"'          # dosyada tirnak boyle kacisli duruyor

ISLER = [
    # (etiket, t, b oneki, [(eski_parca, yeni_parca), ...])
    ("#31 Meraga — yer_id YAZILIR", "1135-09-25", "Mezyedî emîri II. Dübeys", [
        ('"yer":"Merâga yöresi"',
         '"yer":"Merâga","yer_id":"Merâga"'),
        ('25 Eylül 1135).%s)"' % Q,
         '25 Eylül 1135).%s) + TDV: dubeys-b-sadaka '
         '(%ssultanın Merâga\'daki otağının kapısında … bekleyen Dübeys\'e '
         'habersizce yaklaşıp onu katletti%s) — YERİ veren kaynak; '
         'bulan: LAB-1003"' % (Q, Q, Q)),
    ]),
    ("#4 Ukhuvâne — YALNIZ kaynak, yer_id YOK", "1029-01-01",
     "Fâtımî ordusu Mirdâsîleri yendi", [
        ('"yer":"Suriye (Ukhuvâne/Taberiye yöresi)"',
         '"yer":"Suriye (Ukhuvâne, Taberiye gölü yakını)",'
         '"ic_not_yer":"YER KAYNAKLI ama atlasta nokta YOK: TDV '
         'salih-b-mirdas %sTaraflar Taberiye gölü yakınlarındaki '
         'Ukhuvâine\'de karşılaştılar%s (TDV zahir-el-fatimi de aynı yeri '
         'verir). Ne Ukhuvâne ne Taberiye sehirler havuzunda var ⇒ yer_id '
         'YAZILMADI. bulan: LAB-1003"' % (Q, Q)),
    ]),
    ("#21 Remle 1105 — DOĞRULANMADI beyanı", "1105-08-27",
     "Remle yöresinde Fâtımî-Dımaşk ordusu", [
        ('"yer":"Remle yöresi (Filistin)"',
         '"yer":"Remle yöresi (Filistin)",'
         '"ic_not_yer":"YER DOĞRULANMADI: TDV tugtegin günü veriyor, YERİ '
         'vermiyor; yedi madde sınırsız tarandı. Yeri yalnız Vikipedi '
         'veriyor (ikincil) ⇒ CLAUDE.md §4 kırmızı çizgi gereği TEK DAYANAK '
         'OLAMAZ, yer_id YAZILMADI. ölçen: LAB-1003"'),
    ]),
    ("#46 Remle 1192 — yer BEYANA çevrilir", "1192-09-01",
     "Selâhaddin ile Richard arasında barış", [
        ('"yer":"Remle"',
         '"ic_not_yer":"ESKİ yer: \'Remle\' — KALDIRILDI, DAYANAKSIZ. '
         'Hiçbir kaynak imza yerini vermiyor; TDV eyyubiler Remle\'yi hiç '
         'anmıyor. %sTreaty of Ramla%s antlaşmanın az kullanılan ADIdır ve '
         '`yer` muhtemelen o addan TÜRETİLMİŞ (bu bir ÇIKARIM, LAB-1003). '
         'Silinmedi, BEYAN edildi: iddia kalkar, iz kalır"' % (Q, Q)),
    ]),
]


def kayit_bul(s, t, bp):
    """`"t":"<t>"` ile baslayan ve `b` oneki tutan TEK kaydin (bas, son)."""
    bulunan = []
    for m in re.finditer(r'\{"t":"%s"' % re.escape(t), s):
        son = s.find("\n", m.start())
        if son < 0:
            son = len(s)
        govde = s[m.start():son]
        if bp in govde:
            bulunan.append((m.start(), son))
    return bulunan


s = io.open(YOL, encoding="utf-8", newline="").read()
print("### KURU KOŞU ###" if KURU else "### YAZIYOR ###")
print("  dosya: %s · %d bayt · kayıt (JSON-tırnaklı): %d"
      % (YOL, len(s), s.count('{"t":"')))

uygulanan, atlanan = 0, []
for etiket, t, bp, degisimler in ISLER:
    bulunan = kayit_bul(s, t, bp)
    if len(bulunan) != 1:
        atlanan.append((etiket, len(bulunan)))
        print("  🔴 %-42s %d kayıt eşleşti (1 bekleniyordu) — ATLANDI"
              % (etiket, len(bulunan)))
        continue
    b0, b1 = bulunan[0]
    govde = s[b0:b1]
    yeni = govde
    tamam = True
    for eski, yen in degisimler:
        if yeni.count(eski) != 1:
            print("  🔴 %-42s parça %d kez bulundu (1 bekleniyordu): %.40s"
                  % (etiket, yeni.count(eski), eski))
            tamam = False
            break
        yeni = yeni.replace(eski, yen, 1)
    if not tamam:
        atlanan.append((etiket, -1))
        continue
    s = s[:b0] + yeni + s[b1:]
    uygulanan += 1
    print("  ✓ %s" % etiket)

print("\n  uygulanan: %d / %d" % (uygulanan, len(ISLER)))
if atlanan:
    print("  🔴 ATLANAN: %d" % len(atlanan))
    for e, n in atlanan:
        print("     %s (eşleşme %d)" % (e, n))
if KURU:
    print("\n=> uygulamak için --yaz")
    sys.exit(0)
if uygulanan != len(ISLER):
    print("🔴 EKSİK UYGULAMA — dosya YAZILMADI (kısmi yazma yapmam)")
    sys.exit(1)

io.open(YOL, "w", encoding="utf-8", newline="").write(s)
r = subprocess.run(["node", "--check", YOL], capture_output=True, text=True)
if r.returncode != 0:
    print("🔴 node --check BAŞARISIZ")
    print(r.stderr[:500])
    sys.exit(1)
print("✓ YAZILDI · node --check temiz")

# ── kendi kendini sinama: yer_id SAYISI ve yer ALANI ────────────────────────
son = io.open(YOL, encoding="utf-8", newline="").read()
print("\n### SINAV ###")
print("  `yer_id` sayısı      : %d  (öncesi + 1 olmalı)" % son.count('"yer_id"'))
print("  `ic_not_yer` sayısı  : %d  (3 yeni beyan)" % son.count('"ic_not_yer"'))
print("  Merâga yer_id        : %s"
      % ("VAR" if '"yer_id":"Merâga"' in son else "🔴 YOK"))
print("  #46'da `yer` kalktı  : %s"
      % ("✓" if '"yer":"Remle"' not in son else "🔴 HÂLÂ VAR"))
