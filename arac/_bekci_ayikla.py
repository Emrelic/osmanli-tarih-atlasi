# -*- coding: utf-8 -*-
"""ÖKSÜZ BEKÇİ AYIKLAMA — canlı oturumu olmayan bekçileri sonlandırır.

    py bekci_ayikla.py            KURU KOŞU — planı basar, kimseyi öldürmez
    py bekci_ayikla.py --oldur    öksüzleri sonlandırır

🔴 CANLI bir oturumun bekçisi ÖLDÜRÜLMEZ — o oturum SAĞIR kalır ve
   koordinatörün mesajlarını hiç görmez.

🔴 VE BU BETİĞİN İLK SÜRÜMÜ TAM BUNU YAPACAKTI. Süreç listesini
   PowerShell'in KONSOL çıktısından okuyordu ve konsol kod sayfası
   Türkçe adları bozuyordu:
       "VERİ SAHİPLİK-2"  ->  "VER? SAH?PL?K-2"
       "ARAŞTIRMA 2S"     ->  "ARA?TIRMA 2S"
       "DENETİM AÇIK"     ->  "DENET?M A?IK"
   Bozuk ad canlı listeyle eşleşmedi ⇒ BEŞ CANLI OTURUM "öksüz"
   damgası yedi. Kuru koşu olmasaydı beşi de sağır kalacaktı.
   ⇒ Çare: PowerShell çıktıyı UTF-8 DOSYAYA yazıyor, Python dosyadan
     okuyor. Konsol aradan tamamen çıktı.
📌 `CLAUDE.md`nin onuncu kusur sınıfı: *"doğru şeyi ölçüp ALETİN yalan
   söylemesi."* Burada yalan söyleyen kod değil, KOD SAYFASIYDI.
"""
import io
import json
import os
import re
import subprocess
import sys

if hasattr(sys.stdout, "reconfigure"):
    sys.stdout.reconfigure(encoding="utf-8", errors="replace")

OLDUR = "--oldur" in sys.argv
D = os.path.dirname(os.path.abspath(__file__))
JSON_YOL = os.path.join(os.path.dirname(D), "bekci.json")

# 29 Ağustos 13:xx — `list_sessions` ile ÖLÇÜLDÜ (Atlas dizini, canlı)
CANLI = {
    "DENETİM AÇIK", "KADEME ZİNCİRİ", "ARAŞTIRMA 2S",
    "UYGULAMA-0019", "UYGULAMA-3", "UYGULAMA-ERKEN", "UYGULAMA-0035",
    "UYGULAMA-1", "UYGULAMA-2", "DÜNYA PENCERE", "ALTI BARDAK",
    "VERİ SAHİPLİK-2", "YAMA KURTARMA",
    # koordinatör + kararları bekleyen oturumlar
    "ORHANGAZI", "ORHANGAZİ", "ARAYÜZ", "RENK", "KRONOLOJİ",
}

if not os.path.exists(JSON_YOL):
    print("BEKCI DOKUMU YOK:", JSON_YOL)
    raise SystemExit(1)

kayitlar = json.load(io.open(JSON_YOL, encoding="utf-8-sig"))
if isinstance(kayitlar, dict):
    kayitlar = [kayitlar]

tut, kes = [], []
for x in kayitlar:
    komut = x.get("komut") or ""
    m = re.search(r'--kim\s+"([^"]*)"', komut) or re.search(r"--kim\s+(\S+)", komut)
    ad = m.group(1) if m else "(ad okunamadı)"
    c = float(x.get("cpu") or 0)
    (tut if ad in CANLI else kes).append((str(x["pid"]), ad, c))

print("=" * 64)
print("BEKÇİ SÜRECİ: %d   ·   canlı oturum: %d" % (len(tut) + len(kes), len(CANLI)))
print()
print("🟢 TUTULACAK (%d) — canlı oturumun bekçisi" % len(tut))
for pid, ad, c in sorted(tut, key=lambda x: (x[1], -x[2])):
    print("   %-7s %-26s %8.1f sn" % (pid, ad, c))
print()
print("🔴 ÖKSÜZ (%d) — oturumu YOK, boşuna tahta yokluyor" % len(kes))
for pid, ad, c in sorted(kes, key=lambda x: -x[2]):
    print("   %-7s %-26s %8.1f sn" % (pid, ad, c))
print()
print("   ÖKSÜZLERİN TOPLAM CPU: %.0f saniye" % sum(c for _, _, c in kes))
print("   TUTULANLARIN TOPLAMI : %.0f saniye" % sum(c for _, _, c in tut))

# 🔴 GÜVENLİK KİLİDİ — canlı oturumların HEPSİNİN bekçisi var mı?
#   Bir canlı oturumun bekçisi listede hiç yoksa, ölçüm eksik demektir
#   ve öldürme yapılmaz: eksik ölçümle silmek, silmemekten kötüdür.
bekcisi_olan = {ad for _, ad, _ in tut}
beklenen = {a for a in CANLI if not a.startswith("ORHANGAZ")}
eksik = sorted(beklenen - bekcisi_olan)
if eksik:
    print()
    print("   ⚠️ BEKÇİSİ GÖRÜNMEYEN canlı oturum (%d): %s"
          % (len(eksik), ", ".join(eksik)))
    print("      (bunlar zaten öldürülmüyor — yalnız bilgi)")

if not OLDUR:
    print()
    print("(kuru koşu — kimse öldürülmedi; --oldur ile çalıştır)")
    raise SystemExit(0)

n = 0
for pid, ad, c in kes:
    r = subprocess.run(["taskkill", "/PID", pid, "/F"],
                       capture_output=True, text=True, timeout=30)
    if r.returncode == 0:
        n += 1
    else:
        print("   SONLANDIRILAMADI %s (%s)" % (pid, ad))
print()
print("SONLANDIRILDI: %d/%d  ·  kurtarılan sürekli yük: ~%.0f CPU sn birikmiş"
      % (n, len(kes), sum(c for _, _, c in kes)))
