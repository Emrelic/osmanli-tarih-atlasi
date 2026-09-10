# -*- coding: utf-8 -*-
u"""ATLAS-ZINCIR ZAMANLANMIŞ GÖREVİ SAĞLAM MI? — koşudan ÖNCE koşulur.

🔴 NİÇİN VAR — 10 Eylül 2026'da ölçüldü, ve tam bir `D099` vakasıydı:
   koşuyu ayrık başlatmanın TEK doğru yolu `schtasks /run /tn
   "ATLAS-ZINCIR"`. Görev VARDI, `State: Ready` diyordu, ve KOŞMUYORDU:
```
   Execute    C:\\Users\\emrem\\OneDrive\\Desktop\\TARİH          ← YOLU KESİLMİŞ
   Arguments  COĞRAFYA SİTESİ\\arac\\zincir_baslat.bat            ← gerisi ARGÜMAN olmuş
   LastTaskResult  2147942402  =  0x80070002  "dosya bulunamadı"
```
   Yani boşluklu yol tırnaklanmadan kaydedilmiş; Windows onu ilk boşlukta
   bölmüş. Görev listede SAĞLIKLI görünüyor (`Ready`), tetiklenince
   HİÇBİR ŞEY YAPMIYOR ve sessizce başarısız oluyor.

🔴 VE BEDELİ TAM OLARAK ŞU OLURDU: koordinatör `schtasks /run` çağırır,
   komut `0` döner (görev BAŞLATILDI — çalıştı demek DEĞİL), koordinatör
   *"koşu 9 başladı, 8-14 saat"* diye rapor eder ve masayı terk eder.
   Sabah ne log olur ne çıktı. `§10`un *"bitti sanıp erken haber vermek,
   hiç haber vermemekten kötüdür"* kuralının BAŞLANGIÇ tarafı.
   ⇒ `LastTaskResult` 13 Ağustos'tan beri 0x80070002'ydi ve **kimse
     bakmadı**, çünkü koşu 8 başka yoldan başlatılmıştı.

📌 `D131`in kardeşi: `State: Ready` bir DAMGADIR, bir ölçüm değil —
   görevin çalışabildiğini değil, yalnız devre dışı olmadığını söyler.

KOŞUM:
    py denetim/ARAC-ZINCIR-GOREV-DENETIM-0910.py           # ÖLÇ
    py denetim/ARAC-ZINCIR-GOREV-DENETIM-0910.py --onar    # bozuksa DÜZELT
çıkış 0 = sağlam · 1 = bozuk (ya da ölçülemedi — İKİSİ AYRI BASILIR)
"""
import os
import subprocess
import sys

try:
    sys.stdout.reconfigure(encoding="utf-8", errors="replace")
except Exception:
    pass

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
BAT = os.path.join(KOK, "arac", "zincir_baslat.bat")
GOREV = "ATLAS-ZINCIR"
ONAR = "--onar" in sys.argv


def ps(komut):
    u"""PowerShell'i çalıştır, (çıkış, çıktı) döndür."""
    p = subprocess.run(["powershell", "-NoProfile", "-NonInteractive",
                        "-Command", komut],
                       capture_output=True, text=True,
                       encoding="utf-8", errors="replace")
    return p.returncode, (p.stdout or "") + (p.stderr or "")


print(u"=" * 72)
print(u"ATLAS-ZINCIR ZAMANLANMI\u015e G\u00d6REV DENET\u0130M\u0130")
print(u"=" * 72)

if not os.path.exists(BAT):
    print(u"\U0001F534 BA\u015eLATICI YOK: %s" % BAT)
    sys.exit(1)
print(u"\U0001F7E2 ba\u015flat\u0131c\u0131 diskte: %s" % BAT)

kod, cikti = ps("$t = Get-ScheduledTask -TaskName '%s' -ErrorAction "
                "SilentlyContinue; if (-not $t) { 'GOREV-YOK' } else { "
                "$a = $t.Actions[0]; 'EXE=' + $a.Execute; 'ARG=' + "
                "$a.Arguments; 'WD=' + $a.WorkingDirectory; 'STATE=' + "
                "$t.State }" % GOREV)
if "GOREV-YOK" in cikti:
    print(u"\U0001F534 ZAMANLANMI\u015e G\u00d6REV YOK: %s" % GOREV)
    sys.exit(1)
if kod != 0 and "EXE=" not in cikti:
    # 🔴 `D107`: ölçülemedi ≠ bozuk. İkisi AYRI basılır, yoksa bir ölçüm
    #    arızası "sağlam" ya da "bozuk" diye okunur.
    print(u"\u26aa \u00d6L\u00c7\u00dcLEMED\u0130 \u2014 PowerShell d\u00f6nd\u00fc: %s" % cikti.strip()[:200])
    print(u"   Bu \"sa\u011flam\" DE\u011e\u0130L, \"bilmiyorum\" demektir.")
    sys.exit(1)

exe = arg = ""
for satir in cikti.splitlines():
    s = satir.strip()
    if s.startswith("EXE="):
        exe = s[4:]
    elif s.startswith("ARG="):
        arg = s[4:]
print(u"   Execute   : %s" % exe)
print(u"   Arguments : %s" % (arg or u"(bo\u015f)"))

# 🔴 ASIL SINAV: `Execute` DİSKTE VAR MI? "Ready" demek yetmez.
# 🔴 VE SINAVI POWERSHELL'İN KENDİSİ YAPAR, PYTHON DEĞİL — ilk yazımım
#    yolu Python'a geri getirip `os.path.exists` çağırıyordu ve TÜRKÇE
#    KARAKTERLER O SINIRDA BOZULUYORDU:
#        gerçek  ...\TARİH COĞRAFYA SİTESİ\...
#        gelen   ...\TAR?H CO?RAFYA S?TES?\...
#    Sonuç: alet SAĞLAM bir görevi "BOZUK" diye raporladı — ve `--onar`
#    çalışan bir görevi her seferinde "onarmaya" kalkardı.
#    📌 `D043`: aletin gösterdiği != diskte olan. `§4`ün Türkçe yazım
#      ekseninin bir yüzü daha; burada bozan `lower()` değil, iki süreç
#      arasındaki KOD SAYFASI.
#    ⇒ Çare kodlamayı zorlamak DEĞİL (o da kırılgan): SORUYU SINIRIN ÖTE
#      TARAFINDA SORMAK. Yol hiç geri getirilmiyor; PowerShell kendi
#      `Test-Path`ini koşuyor ve ASCII bir hüküm döndürüyor.
_k2, _c2 = ps("$t = Get-ScheduledTask -TaskName '%s'; $a = $t.Actions[0]; "
              "if ($a.Execute -and (Test-Path -LiteralPath $a.Execute)) "
              "{ 'EXE-VAR' } else { 'EXE-YOK' }; "
              "if ([string]::IsNullOrEmpty($a.Arguments)) { 'ARG-BOS' } "
              "else { 'ARG-DOLU' }" % GOREV)
if "EXE-VAR" not in _c2 and "EXE-YOK" not in _c2:
    print(u"\n⚪ ÖLÇÜLEMEDİ — `Test-Path` cevabı okunamadı: %s"
          % _c2.strip()[:200])
    sys.exit(1)
print(u"   Test-Path : %s" % (u"VAR" if "EXE-VAR" in _c2 else u"YOK"))
saglam = ("EXE-VAR" in _c2) and ("ARG-BOS" in _c2)
if saglam:
    print(u"\n\U0001F7E2 SA\u011eLAM \u2014 `Execute` diskte var ve arg\u00fcmana ta\u015fm\u0131yor.")
    sys.exit(0)

print(u"\n\U0001F534 BOZUK \u2014 `Execute` diskte YOK"
      u" (bo\u015fluklu yol t\u0131rnaklanmadan kaydedilmi\u015f olabilir).")
if not ONAR:
    print(u"   \u21d2 `--onar` ile d\u00fczeltilir.")
    sys.exit(1)

kod, cikti = ps(
    "$bat = [IO.Path]::GetFullPath('%s'); "
    "$kok = Split-Path (Split-Path $bat); "
    "$a = New-ScheduledTaskAction -Execute $bat -WorkingDirectory $kok; "
    "Set-ScheduledTask -TaskName '%s' -Action $a | Out-Null; 'TAMAM'"
    % (BAT.replace("'", "''"), GOREV))
if "TAMAM" not in cikti:
    print(u"\U0001F534 ONARIM BA\u015eARISIZ: %s" % cikti.strip()[:300])
    sys.exit(1)
print(u"\U0001F7E2 onar\u0131ld\u0131 \u2014 yeniden \u00f6l\u00e7\u00fcl\u00fcyor\u2026\n")
# 🔴 Onarımdan sonra KENDİ KENDİNİ yeniden ölçer: "yazdım" bir ölçüm değildir.
# ⚠️ İlk yazımı `os.execv` kullanıyordu ve ONARIM TURU HİÇBİR ŞEY BASMADI —
#    çıkış kodu 0'dı, ekran BOŞTU. Bir onarım sessizse, hiçbir şey
#    yapmamaktan ayırt edilemez (`D068`in kardeşi: başarı VARLIKLA
#    bildirilmeli, yoklukla değil). `subprocess` ile değiştirildi.
# 🔴 VE FLUSH ŞART — ilk denemede çocuğun çıktısı ebeveyninkinden ÖNCE
#    göründü ve ekran tersten okundu: "SAĞLAM … BOZUK … onarıldı".
#    Yani doğru çalışan bir onarım, EKRANDA BOZDUĞUNU söylüyordu.
sys.stdout.flush()
_p = subprocess.run([sys.executable, os.path.abspath(__file__)])
sys.exit(_p.returncode)
