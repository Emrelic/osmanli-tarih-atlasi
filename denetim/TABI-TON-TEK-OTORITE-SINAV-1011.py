# -*- coding: utf-8 -*-
"""TÂBİ TONU — DÖRT YERDE AYNI MI? Bir yorumu KAPIYA çeviren sınav.

🔴 DOĞURAN VAKA (11 Ekim 2026): `arac/uret_devirler.py:113` şöyle yazıyordu:
      TABI_TON = "#b2384a"    # v: dolgusunun tonu (app.js vassal-dolgu ile aynı)
Yorum bir DEĞİŞMEZ beyan ediyordu — *"app.js ile aynı"* — ama o değişmezi
**hiçbir şey ölçmüyordu.** `js/app.js` tarafı `acikTon("#8e0b22")` = `#a53c4e`
olunca yorum **sessizce YALAN** oldu ve site yarı eski yarı yeni tonla
yayınlanmaya hazır hâle geldi.
📌 **Yorumun iddia ettiği değişmez, KODDA ÖLÇÜLMEDEN doğru sayılmaz** (§11).
  Ve bir yorum iki DOSYA arasındaki bir değişmezi beyan ediyorsa durum daha
  kötüdür: tek dosyaya bakan hiçbir denetim onu göremez — ihlal **ikisinin
  ARASINDA** yaşar ve dikişler kimsenin değildir.
⇒ Bu sınav o yorumun yerine geçer. Yorum bir dilekti; bu bir ölçüm.

ÖLÇÜLEN DEĞİŞMEZ — İKİ KATMANLI:
  ① DÖRT YER AYNI TONU taşıyor mu
  ② O ton `acikTon("#8e0b22")` FORMÜLÜNÜN sonucu mu
🔴 ②'siz ① yetmez: dördü birden yanlış bir tonda ANLAŞABİLİR ve sınav
  "temiz" der. Bir değişmez "hepsi eşit" ise, neye eşit olduğu da sorulur.

ÇIKIŞ: 0 temiz · 1 İHLAL · 2 ÖLÇÜLEMEDİ (dosya/desen bulunamadı).
"""
import io
import os
import re
import sys

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8", errors="replace")
KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

TABAN = "#8e0b22"      # Osmanlı koyusu — tonun KAYNAĞI
KAT = 0.20             # acikTon: sRGB'de beyaza %20 (js/app.js acikTon ile AYNI)


def acik_ton(hex6, kat=KAT):
    """`js/app.js` `acikTon` fonksiyonunun Python ikizi — ve bu İKİZLİK de
    bir borçtur: aynı formül iki dilde yaşıyor. Tek otorite olmadığı için
    burada YENİDEN yazılıyor; §3'ün *"bir ayrımın tek otoritesi olur"*
    kuralına göre doğrusu formülü BİR yerde tutup ötekine taşımaktır
    (`renkler.py` → üretilmiş bir JS sabiti). O iş TUZ penceresini bekler
    (`renkler.py` motor tuzudur, koşu sürerken dokunulmaz, §9.1).
    ⇒ Bugün ölçüyoruz; yarın birleştiriyoruz. **Ölçülen ikizlik, ölçülmemiş
      tek otoriteden iyidir.**"""
    h = hex6.lstrip("#")
    r, g, b = (int(h[i:i + 2], 16) for i in (0, 2, 4))
    f = lambda c: int(round(c + (255 - c) * kat))
    return "#%02x%02x%02x" % (f(r), f(g), f(b))


# (dosya, desen, ad) — desen TEK yakalama grubu taşır: hex
YERLER = [
    ("js/app.js", r'var\s+TABI_RENK\s*=\s*acikTon\(\s*"(#[0-9a-fA-F]{6})"\s*\)',
     "app.js TABI_RENK (TABAN'ı verir, tonu formül üretir)"),
    # 🔴 ÇAPA `hk: "vassal"`A BAĞLI, BİÇİME DEĞİL. İlk yazımda desen
    #   `renk:"…", poli: poli` idi ve `d_katman.js:553`ü (OSMANLI DOĞRUDAN,
    #   #8e0b22) yakalayıp "tâbi yarısı" diye bildirdi — gerçek tâbi sabiti
    #   614'teydi. Gevşek desen GÜVEN TELKİN EDER (§11): kapı yanlış satırı
    #   ölçüp doğru cevabı verdi ve 553 tesadüfen doğru olsaydı "TEMİZ"
    #   diyecekti. Desen artık satırın KİMLİĞİNE bağlı.
    ("js/d_katman.js", r'renk:\s*"(#[0-9a-fA-F]{6})"[^\n]*hk:\s*"vassal"',
     "d_katman.js sınır hattının tâbi yarısı"),
    ("arac/uret_devirler.py", r'^TABI_TON\s*=\s*"(#[0-9a-fA-F]{6})"',
     "uret_devirler.py TABI_TON → data/devirler.js"),
    ("arac/renk_olc.py", r'"OSMANLI tâbi":\s*lab\(bind\(h2r\("(#[0-9a-fA-F]{6})"\)',
     "renk_olc.py ölçüm referansı"),
]

bekleniyor = acik_ton(TABAN)
print("TÂBİ TONU — TEK OTORİTE SINAVI")
print("  taban %s · acikTon(%.0f%%) ⇒ BEKLENEN %s" % (TABAN, KAT * 100, bekleniyor))
print()

ihlal = olculemedi = 0
for yol, desen, ad in YERLER:
    tam = os.path.join(KOK, yol)
    if not os.path.exists(tam):
        print("  ⚪ ÖLÇÜLEMEDİ %-28s dosya yok" % yol)
        olculemedi += 1
        continue
    metin = io.open(tam, encoding="utf-8").read()
    m = re.search(desen, metin, re.M)
    if not m:
        # 🔴 Desen tutmazsa "temiz" DEĞİL, ÖLÇÜLEMEDİ: gevşek/bayat bir desen
        #   güven telkin eder ve boş küme her öngörüyü doğrular (§11).
        print("  ⚪ ÖLÇÜLEMEDİ %-28s desen tutmadı — alan taşınmış/yeniden"
              " adlandırılmış olabilir" % yol)
        olculemedi += 1
        continue
    bulunan = m.group(1).lower()
    # app.js TABAN'ı taşır (tonu formül üretir); ötekiler SONUCU taşır
    hedef = TABAN if yol == "js/app.js" else bekleniyor
    if bulunan == hedef:
        print("  ✓ %-28s %s   %s" % (yol, bulunan, ad))
    else:
        print("  🔴 İHLAL %-24s %s  ≠ beklenen %s   (%s)"
              % (yol, bulunan, hedef, ad))
        ihlal += 1

print()
if ihlal:
    print("🔴 İHLAL %d — site YARI ESKİ YARI YENİ tonla yayınlanır." % ihlal)
    print("   Bu, 'yanlış renk YALAN'dır (§3.4 ⑦): kullanıcı iki ayrı tonu")
    print("   iki ayrı SİYASÎ DURUM sanar, oysa aynı durumun iki kopyasıdır.")
elif olculemedi:
    print("⚪ ÖLÇÜLEMEDİ %d — temiz DEĞİL. Desen/dosya doğrulanmadan"
          " 'hizalı' denmez." % olculemedi)
else:
    print("🟢 TEMİZ — dört yer de aynı tonu taşıyor ve ton formülün sonucu.")
print()
print("⚠️ BEYAN EDİLEN BORÇ: formül İKİ DİLDE yaşıyor (js `acikTon` + burada")
print("   `acik_ton`). Doğrusu `renkler.py`de tek otorite + üretilmiş JS")
print("   sabiti; o iş TUZ penceresini bekler (§9.1). Ölçülen ikizlik,")
print("   ölçülmemiş tek otoriteden iyidir — ama ödeme DEĞİLDİR.")
sys.exit(1 if ihlal else (2 if olculemedi else 0))
