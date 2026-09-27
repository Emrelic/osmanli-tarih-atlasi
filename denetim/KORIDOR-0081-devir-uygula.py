"""KORIDOR-0081 — `devir_beyani` ilk muaf listesi (H-0008 Uzunköprü). Koordinatör koşturur.

🔴 SIRA ŞART: önce denetle.py'nin 5a yaması (devir_beyani muafiyeti + tavan) iner.
Betik denetle.py'de "devir_beyani" geçmiyorsa DURUR — yoksa 5a yeniden kırılır
(28 Eylül'de bir kez tam bu oldu).
⚠️ girdi.py kaydı (BILINEN_ALANLAR) `denetim/KORIDOR-0081-girdi.diff`te bekler:
girdi.py motor tuzudur (§9.1) ⇒ bir sonraki TAM İNŞA koşusunda girer. O zamana dek
yükleyici bu alan için bir UYARI satırı basar — hata değil (girdi.yukle: "bilinmeyen
alan HATA DEĞİL, UYARIDIR").

İLK MUAF LİSTESİ (1 kayıt — kaynaklı olan tek anakronik vekil):
  Uzunköprü  kur:"1443-01-01"  TDV murad-ii: "Ergene Köprüsü, Üç Şerefeli Cami ile
             beraber yapılmaya başlanmış ve 1443'te tamamlanmıştır … bakım ve
             güvenliği için bir ucunda mescid, imaret, hamam ve pazarlar yaptırılarak"
ADAY AMA LİSTEDE DEĞİL (kaynak yok ⇒ beyan yazılmaz):
  Dedeağaç — XIX. yy kasabası sanılıyor, kuruluş kaynağı BULUNAMADI
  Mustafapaşa (Svilengrad) — yalnız şüphe, ölçülmedi

Kullanım: py denetim/KORIDOR-0081-devir-uygula.py [--uygula]
"""
import sys

sys.stdout.reconfigure(encoding="utf-8")
YAZ = "--uygula" in sys.argv

if "devir_beyani" not in open("arac/denetle.py", encoding="utf-8").read():
    print("DUR: denetle.py'de devir_beyani muafiyeti YOK — önce 5a yaması inmeli")
    sys.exit(2)

YOL = "data/yerlesimler_ek24.js"
BEYAN = ("TDV murad-ii: Ergene Köprüsü 1443’te tamamlanmıştır; bir ucunda mescid, imaret, "
         "hamam ve pazarlar yaptırıldı — kasaba köprüyle doğdu, 1281-1443 dönemleri BÖLGE "
         "vekilidir · KORIDOR-0081 H-0008")
ESKI = '{ ad:"Uzunköprü", tur:"sehir", lat:41.267, lon:26.688, g:0, k:3, m:"Edirne",'
YENI = ESKI + f' kur:"1443-01-01", devir_beyani:"{BEYAN}",'

metin = open(YOL, encoding="utf-8").read()
if metin.count(ESKI) != 1 or "devir_beyani" in metin:
    raise SystemExit("DUR: Uzunköprü satırı beklenen biçimde değil ya da zaten beyanlı")
metin = metin.replace(ESKI, YENI)
print(f"{YOL}: Uzunköprü kur:1443-01-01 + devir_beyani")
if YAZ:
    with open(YOL, "w", encoding="utf-8", newline="") as f:
        f.write(metin)
    print("YAZILDI — şimdi py arac/denetle.py (5a: 0 çelişki · muaf 1 beklenir)")
else:
    print("KURU KOŞU — --uygula ile yaz")
