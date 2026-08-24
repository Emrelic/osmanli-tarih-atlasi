# -*- coding: utf-8 -*-
"""
DEVLET RENKLERİ — haritada boyanan her devletin kimliği, adı ve rengi.

uret_petek.py'den ayrıldı ki renk çalışması ile geometri çalışması aynı
dosyaya yazmasın; sınır dosya düzeyinde olsun.

Kimlikler yerlesimler.js'in s:[{d:"..."}] alanında kullanılanlarla birebir
aynı olmalıdır; burada tanımlı olmayan bir kimlik haritada boyanmaz.

RENK KURALI (ölçüldü, bkz. denetim/):
  • Komşuluk çizgesinde 91 devlet var, aynı anda sahnede en çok 66 devlet
    oluyor (1300). DSATUR ile hesaplandı: komşuların hiçbiri aynı rengi
    paylaşmayacak şekilde 7 RENK yetiyor.
  • Kartografyada dolgu alanı tanımanın pratik sınırı 7±2 kategori,
    ColorBrewer nitel paletleri 12'de durur. 10-12 renk hem gereken 7'nin
    üstünde pay bırakır hem tavanın altında kalır.
  • Renk KİMLİK taşımaz, AYIRMA işi görür. Kimliği etiket taşır. Bu yüzden
    bir rengi birden çok devletin paylaşması sorun değildir — yeter ki o
    devletler tarih boyunca hiç komşu olmasın.
  • ÖLÇÜM 2026-07-30 (Oturum 16) — "renksiz kimlikleri eklersek renk tavanını
    zorlar mıyız?" sorusunun cevabı: HAYIR. 1515 nokta (5 dosyanın tamamı)
    üzerinde GERÇEK Voronoi komşuluğu kurulup DSATUR koşuldu; çakışma GÜN
    bazında ölçüldü. Bugünkü 104 kimlik → 8 renk. Veride kullanılan 261
    kimliğin HEPSİ eklenince → yine 8 renk. En yüksek derece 31'den 72'ye
    çıkıyor ama kromatik sayı sabit kalıyor: yeni kimlikler ayrı coğrafyalarda
    kümelendiği için grafiği yoğunlaştırmıyor, GENİŞLETİYOR.
    ⚠️ Bu, 400 km'lik "yakınlık" vekiliyle ölçülmemelidir — o vekil aynı veride
    14 renk veriyor. Komşuluk hücrelerin DEĞMESİNDEN gelmeli.
  • PAYLAŞILAN HEX DENETİMİ (aynı ölçümde koşuldu) — 5 hex iki devlette:
    #00695c yugoslavya/hive · #00838f trabzon-rum/dulkadir · #4527a0
    buhara/karaman · #5c6bc0 vollayta/norvec · #8f7d5b bosna/ahiler.
    Beş çiftin HİÇBİRİ tarih boyunca komşu değil → ihlal 0, yukarıdaki
    "renk ayırma işi görür" kuralına uygun. Yeni renk eklerken bu denetimi
    tekrarla; hex tekrarı başlı başına hata DEĞİLDİR, komşuluk hatadır.

  🔴 BİR RENGİ KALDIRMAK HER ZAMAN TEK SATIR DEĞİLDİR — iki şart var.

  ① HEX PAYLAŞIMLIYSA BEYAN DA GÜNCELLENİR.
     Bu dosyanın altındaki paylaşım beyanı, hangi kimliklerin bilerek aynı
     hex'i taşıdığını yazar ve import anında self-check ile denetlenir.
     Bir kimliği kaldırıp beyanı bırakmak, beyanı YALANCI yapar.
     Ölçülmüş vaka (8 Ağustos): `kavalali` #00acc1 kaldırılacak sanıldı —
     hex'i DÖRT kimlikle paylaşımlıydı (turkmen · delhi-sultanligi ·
     ingiliz-hindistani · ingiliz-malaya), yani grup 5 → 4 olacaktı.
     📌 "Kullanılmıyor" demek "serbest" demek DEĞİLDİR.
     (Aynı gün üç kez beyan güncellendi: #2d8f4a · #7b1fa2 · #5c6bc0.)

  ② PALETTEN DÜŞÜRMEDEN ÖNCE VERİDE SIFIRLANDIĞI DOĞRULANIR.
     Sıra TERS olursa o kimliğin dönemleri RENKSİZ kalır ve `§8` gereği
     harita DELİK verir — görünmez bir fazlalığı GÖRÜNÜR bir beyaz lekeyle
     takas etmiş olursun.
     DOĞRU:  ① veri kaydı `kasitli_bosluk` yapılır  → ② renk kaldırılır
     YANLIŞ: ① renk kaldırılır → dönemler renksiz kimlik taşır → DELİK
     Ölçülmüş vaka (8 Ağustos): `ainu` — Matsumae klanı 1590'larda başlıyor
     ama veri 1281-1550'de `ainu` boyuyordu. Yani eksik olan künye değil,
     FAZLA olan boyaydı. Önce iki kayıt boşluğa çevrildi, sonra renk düştü.

  📌 VE İKİSİNİN ORTAK DERSİ — bir sayacı sıfırlamanın iki yolu varsa,
     sayaç hangisinin doğru olduğunu SÖYLEMEZ. `renk_fark.py`nin zincir
     borcu "künye eksik mi" diye sorar; "bu kimlik VAR MI" diye sormaz.
     Birincisi künye yazarak kapanır, ikincisi boya kaldırarak — ve ikisi
     denetimde AYNI görünür, haritada ZIT şey yapar.

  ⚠️ Dolgu SAYDAM biniyor: ekrandaki gerçek renk buradaki hex DEĞİL, altlıkla
    karışmış hâlidir ve bu karışım renk farklarını sıkıştırır. ΔE ölçümü
    BİNDİRİLMİŞ renk üzerinden yapılmalıdır; ham hex üzerinden yapılan ölçüm
    iyimserdir. Parametreler aşağıda (OPAKLIK / ALTLIK) — YAZILI DEĞİL, ÖLÇÜLÜ.

  🔴 BU SATIR BİR KEZ BAYATLADI VE BÜTÜN ÖLÇÜMLERİ BOZDU (31 Temmuz).
    Burada "%30 saydamlık" yazıyordu; `js/app.js:559` gerçeği **0.44**'tü ve
    altlık `#d8cebc` değil `#e8dfc8`'di. O gün yapılan bütün ΔE ölçümleri
    (macaristan · kavalali · nogay · kazak-hanligi) yanlış parametreyle
    yapıldı. Yön şanslıydı — 0,44 > 0,30, yani renkler ekranda sanılandan
    AYRIK çıktı ve seçimler güvenli tarafta kaldı — ama ΔE ≥ 12 eşiği %30
    için türetilmişti ve kalibrasyon yanlıştı.
    📌 Ders (OGRENILENLER §35 + §41): sabiti YAZMAK yetmiyor, ÇIKTIYI
    paylaşmak gerekiyor. Bu yüzden aşağıdaki `_opaklik_dogrula()` değerleri
    `app.js`'ten OKUYUP karşılaştırıyor; ayrışırsa import anında uyarır.
"""

import io as _io
import os as _os
import re as _re

# Ekranda görülen rengi hesaplamak için gereken iki parametre.
# ⚠️ Bunlar `js/app.js`'in KOPYASIDIR ve aşağıdaki denetim ayrışmayı yakalar.
ALTLIK = (0xE8, 0xDF, 0xC8)     # app.js — kara altlığı, fill-opacity 1
OPAKLIK = {
    "yabanci":  0.44,           # app.js — yabancı devlet gövdeleri
    "tabi":     0.60,           # app.js — Osmanlı tâbi
    "dogrudan": 0.68,           # app.js — Osmanlı doğrudan
}


def _opaklik_dogrula():
    """`app.js`'teki fill-opacity değerleriyle yukarıdaki kopyayı karşılaştırır.

    Sessizce ayrışmasın diye var: bu dosyadaki sayı bir kez bayatladı ve
    günlerce yanlış ΔE ölçümüne sebep oldu. Denetim ucuz (tek dosya okuma) ve
    ayrışma olduğunda ÜRETİMİ DURDURMAZ, yalnız uyarır — çünkü renk seçimi
    geometriyi etkilemiyor ve koşuyu öldürmek orantısız olur.
    """
    yol = _os.path.join(_os.path.dirname(_os.path.dirname(
        _os.path.abspath(__file__))), "js", "app.js")
    try:
        s = _io.open(yol, encoding="utf-8").read()
    except Exception:
        return                                   # app.js yoksa sessiz geç
    bulunan = [float(m) for m in
               _re.findall(r'"fill-opacity":\s*([0-9.]+)', s)]
    for ad, deger in OPAKLIK.items():
        if deger not in bulunan:
            # ⚠️ MESAJDA ASCII DIŞI KARAKTER YOK — bilerek.
            # İlk yazımda "ΔE" geçiyordu ve uyarı, sarmalanmamış konsolda
            # `UnicodeEncodeError` ile PATLIYORDU. Patlayabilen bir uyarı
            # uyarısızlıktan kötüdür: sorunu haber vermek yerine kendisi
            # sorun olur. Ateşleme yolunu sınadım, geçme yolunu değil.
            print("  UYARI renkler.py: OPAKLIK[%r]=%s app.js'te BULUNAMADI - "
                  "parametre ayrismis olabilir, renk olcumleri yanlis kalibre "
                  "olur (app.js'teki degerler: %s)"
                  % (ad, deger, sorted(set(bulunan))))


_opaklik_dogrula()

# ═══════════════════════════════════════════════════════════════════════════
# KULLANILMAYAN RENKLER — BEŞ KOVA  (8 Ağustos 2026, RENK 2)
# ═══════════════════════════════════════════════════════════════════════════
# BOYALAR'da veride HİÇ kullanılmayan renkler var ve hepsi ekranda AYNI
# görünüyor (veride 0). Bu sözlük onları AYIRIR — çünkü "ölçülemedi" ile
# "temiz" aynı satırda görünmemeli.
#
# ⚠️ Bu bir DENETİM DEĞİL, bir KAYITTIR. Kimse otomatik doğrulamıyor; amacı
#   yarın "bu renk niçin kullanılmıyor?" diye soranın cevabı dosyada bulması.
#   (`§7.1 ⑦`: bir oturumda kalan bilgi kurtarılamaz.)
#
# 🟢 8 Ağustos ölçümü: 22 kullanılmayan rengin 22'si de MEŞRU olarak
#   bekliyor. VERİ DEVLET 21'ini tek tek doğruladı (9 TDV-canlı, 12 akademik);
#   `ainu` tek istisnaydı ve BOYALAR'dan çıkarıldı.
# ⚠️ BOŞ KOVALAR SİLİNMEZ: bir daha çürütülen/öksüz çıkarsa KALDIRILMADAN
#   ÖNCE işaretlensin. Boş kova, olmayan kovadan farklıdır.
KOVA = {
    # künye VAR, veri taşıması sırada — SAĞLIKLI
    "bekliyor-veri": [
        "azerbaycan-demokratik-cumhuriyeti", "bahreyn", "bonacolsi",
        "ermenistan-demokratik-cumhuriyeti", "evfat", "floransa", "galzay",
        "gurcistan-demokratik-cumhuriyeti", "imereti", "incu",
        "irlanda-serbest-devlet", "kavalali", "kutlughanli",
        "litvanya-buyuk-dukalik", "lur-i-kucek", "makdisu-sultanligi",
        "muzafferi", "poni", "rusya-gecici-hukumet", "sanzan", "savoya",
        "sovyet-rusya",
    ],
    # renk VAR, künye YOK — 8 Ağustos'ta boşaldı (`kavalali` çürüdü:
    # künyesi id:"misir-kavalali"deydi, eksik olan `harita:` bağıydı)
    "bekliyor-kunye": [],
    # künye yok, engel KRONOLOJİDE — 8 Ağustos'ta boşaldı (`kavalali` için
    # "1840 istirdat maddesi yok" denmişti; ölçüldü, madde VAR:
    # olaylar_ek4.js 1840-11-03 Akkâ · 1841-02-25 Suriye boşaltıldı)
    "bekliyor-madde": [],
    # hiçbiri istemiyor
    "oksuz": [],
    # var olmadığı ÖLÇÜLDÜ — renk kaldırılmadan ÖNCE buraya yazılır
    "curutuldu": [],        # `ainu` girip çıktı (bkz. kütüğü)
}

BOYALAR = {

    # ═══ HAYALET DÖNEM YAMASININ AÇTIĞI DÖRT KİMLİK ═══════════════════
    # OPUS HAZIR KITA 87 · 25 Ağustos 2026 · dayanak:
    # `denetim/BULGU-HAYALET-DONEM-2.md` + `denetim/ONERI-HAYALET-RENK.txt`
    #
    # 🔴 BU DÖRDÜ OLMADAN `yer_yama_hayalet`(129) ve `hayalet2`(118)
    # UYGULANAMAZ: `BOYALAR`da karşılığı olmayan bir kimliğe geçen gövde
    # motorda HİÇ ÇİZİLMEZ (`uret_petek.py`). Yani yamayı önce uygulamak
    # hayaleti kapatıp DELİK açardı — `§3.5.1`: bir sınır kayması
    # önerildiğinde İKİ UÇ DA ölçülür.
    #
    # ⚠️ VE `renk_olc.py --oner`İN KENDİ ÇIKTISI KULLANILMADI, çünkü araç
    # KENDİ UYARISINI öttürdü: "komşusu ölçülemeyen kimlik" — dördünün de
    # veride dönemi YOK, yani engel kümesi kurulamıyor. Ürettiği dört renk
    # birbirinden ayırt edilemezdi:
    #     norvec-kralligi ↔ isvec-birlik-oncesi   ΔE 1,97
    #     (Kalmar Birliği'nin İKİ ORTAĞI — komşu ülkeler)
    # ⇒ Engel kümesi YAMANIN UYGULANDIĞI evrende kuruldu (hedefin alacağı
    #   noktalar + pencere, ≤1500 km eşzamanlı). Aynı çift artık ΔE 46,4.
    # 📌 Bozuk çıktı SİLİNMEDİ (`denetim/oneri-20260824-232904.txt`) —
    #    vaka kayıtlı kalsın diye.
    #
    # EŞİKLER GEVŞETİLMEDİ, SIKILAŞTIRILDI:
    #     anlatının merkezindeki çift   ≥ 25
    #     ≤600 km eşzamanlı komşu       ≥ 15   (12'yi geçmek YETMİYOR)
    #     600-1500 km eşzamanlı         ≥ 12
    #     altlıktan                     ≥ 15   (dördü de ≥ 30,8)
    # En dar kısıtlar: norveç 15,1 · isveç 13,2 · şirvan 14,2 · naiplik 17,0
    #
    # 🔴 VE BİR SINIR AÇIKÇA YAZILI: `isvec-birlik-oncesi`nin EN DAR çifti
    # (13,2) aracın HİÇ KURMADIĞI bir çiftten geliyor ⇒ bu öneriyi
    # `--dogrula` ile doğrulamak YETERLİ DEĞİL; o denetim o çifti
    # menziline almıyor. ("Denetim var ≠ o soruyu soruyor.")
    "norvec-kralligi": ("Norveç Krallığı (Birlik Öncesi ve Kalmar Dönemi)", "#2490d2"),
    "isvec-birlik-oncesi": ("İsveç Krallığı (Kalmar Birliği Öncesi ve Dönemi)", "#a824d2"),
    "sirvansah": ("Şirvanşahlar", "#d2cc24"),
    "macaristan-naiplik": ("Macaristan (1918 Sonrası: Cumhuriyet → Naiplik)", "#d23024"),
    # ↑ Anadolu kümesi (bkz. `candar` üstündeki blok) · ton kayması  1,6°
    # bizans  #4e3c81 → #0f0f5d  (toplu tur)
    "bizans": ("Bizans", "#0f0f5d"),
    "memluk":     ("Memlûk",                 "#f09087"),
    # 🔴 KAHVEDEN MOR AİLEYE ÇEKİLDİ (RENK oturumu, 2 Ağustos 2026; koordinatör
    # onayı + kullanıcı kuralı). Eski #b5885b kahveydi.
    # GEREKÇE — kullanıcının kendi kuralı: "ayrı renkler İran'ı üç ayrı devlet
    # gibi gösterir" ve "Kaçar İran tarihine dair olacak, O RENK GRUBUNDAN olsun".
    # ÖLÇÜM: `iran` 320 dönem · 1281-01-01 → 1923-10-29 (642 yıl, bütün çizgi);
    # `safevi` 198 dönem · 1501-07-01 → 1736-03-08. Harita 1736-03-08'de yaylayı
    # safevi MORUNDAN iran KAHVESİNE atlatıyordu — kullanıcının şikâyet ettiği
    # kopuş buydu ve tek sebebi bu iki renkti.
    # ⚠️ AYNI RENK OLAMAZ: ikisi EŞZAMANLI SINIRDAŞ (komşuluk çizgesinde doğrudan
    # çift). İstenen zaten o değil — "aynı aile, farklı parlaklık".
    #   safevi #6b4a7d  bindirilmiş L* 66,8 · C*  9,2 · ton 345,1°
    #   iran   #fe84c6  bindirilmiş L* 80,1 · C* 23,6 · ton   0,3°   ΔE 20,0
    #   ⇒ ton farkı 15,2° (aile), parlaklık farkı 13,3 (ayrım)
    # 📌 İLK ADAY #c03fab ÖLÇÜLÜP REDDEDİLDİ: C* 29,7 = paletin %88 yüzdeliği.
    #   Tek renk paletten belirgin ayrılırsa göz onu "vurgu" sanır — 642 yıl ve
    #   111 nokta için istenmeyen okuma. #fe84c6: C* %73 yüzdelik (p75 = 23,7,
    #   yani çeyrekler içinde) · ham doygunluk S 0,48 = paletin MEDYANI.
    #   Ve ayrışması da daha iyi: en yakın engel 17,1 (#c03fab'ta 12,5).
    # ⚠️ NEDEN L* 80: safevi ile aynı tonda kalıp ondan ΔE≥12 ayrışmanın tek
    #   yolu parlaklık/kroma; "farklı parlaklık" kısıtının doğrudan sonucu.
    # 23 engelin hepsinden ΔE ≥ 12 (en yakın: 17,1). `parma`ya 12,1 — komşu
    # DEĞİLLER (iran'ın 22 komşusu ölçüldü, Avrupa partisi içinde yok).
    # 🔴 İKİNCİ KEZ DEĞİŞTİ — MARUZİYET ÖLÇÜSÜ (RENK, 2026-08-03).
    # #b5885b (kahve) → #fe84c6 (mor aile) → #cc1664.
    # İlk değişiklik kullanıcının "İran'ı üç ayrı devlet gibi göstermesin"
    # kuralıydı. Bu ikincisi ONDAN FARKLI bir şeyden geldi: hiçbir eşik
    # ihlal edilmiyordu, ama `iran` üç ayrı kimlikle UZUN sınırlar boyunca
    # sınırda ΔE taşıyordu:
    #     iran ↔ ilhanli  ΔE 14,8 · çizili sınır **97,58°**  ← en büyük maruziyet
    #     iran ↔ afsar    ΔE 12,0 ·               26,46°
    #     iran ↔ safevi   ΔE 12,7 ·                8,66°
    #   Tek hamle üçünü birden açtı: 24,4 · 23,2 · 24,0.
    #
    # 📌 `ilhanli↔iran` BUGÜNE KADAR HİÇBİR ÖLÇÜMDE GÖRÜNMEMİŞTİ, çünkü ΔE'si
    #   14,8 ile eşiğin rahat üstünde. Yalnız MARUZİYET ekseni eklenince
    #   listenin başına çıktı. ⇒ Sıralama ölçütünü değiştirmek yalnız
    #   öncelikleri değil, LİSTENİN KENDİSİNİ değiştiriyor.
    # ⚠️ Ve gerekçe yanlış çifte dayanıyordu: `safevi↔iran`ı en büyük risk
    #   sanmıştım (girdi ekseninde 101 tanık). Çıktı ekseninde ilk onda bile
    #   değil — girdide her HÜCRE çifti ayrı sayılıyor, çıktıda hepsi tek
    #   gövdeye birleşiyor. Hamle doğru çıktı ama gerekçesi yanlıştı; ikisi
    #   ayrı şeydir ve kayda öyle geçiyor.
    # ⇒ ÖLÇÜ: bir metrik, eksen değişince anlamını koruduğu VARSAYILAMAZ.
    #   `renk_cikti.py` bu yüzden tanık sayısını değil SINIR UZUNLUĞUNU kullanır.
    #
    # `ilhanli` oynatılabilirdi (iran'dan 52,2'ye kadar açılıyor) ama
    # dokunulmadı: yerleşik bir Anadolu/İran rengi ve `iran` hamlesi zaten
    # üç çifti birden kapatıyor. En az sarsıcı olan seçildi.
    # ÖLÇÜM: L* 65,6 · C* 35,3 · ton 4,1 · aile bandında (352°±18) ·
    #   bütün komşulardan en dar ΔE 12,2 · altlıktan ayrık
    "iran":       ("İran",                   "#cc1664"),
    # ═══ İRAN HANEDAN AİLESİ — afsar + kacar (RENK, 2026-08-03) ═══
    # Kullanıcı kararı: "afsar/zend/kacar, safevî ile AYNI RENK AİLESİ, farklı
    # parlaklık" · gerekçesi "ayrı renkler İran'ı üç ayrı devlet gibi gösterir".
    #
    # NEDEN ŞİMDİ: `d:"iran"` 1736-03-08 → 1923-10-29 arasını TEK dönemde
    # taşıyordu — üç hanedan, 187 yıl, tek etiket (100 kayıt). Koordinatör
    # `yerlesimler.js`i üç pencereye bölüyor:
    #     1736-03-08 → 1747-06-20   `afsar`   (Nadir Şah, tartışmasız)
    #     1747-06-20 → 1796-01-01   `iran`    (İran PARÇALI — genel etiket
    #                                          burada MEŞRU; Horasan afsar,
    #                                          Şiraz zend, Tahran kacar aynı gün)
    #     1796-01-01 → dönem sonu   `kacar`
    # ⚠️ RENK ÖNCE GİRER: renk olmadan `d:"afsar"` yazılırsa motor
    #   "bilinmeyen devlet kimliği" basar ve bölge BOYANMAZ (uret_petek.py:272).
    #
    # ÖLÇÜM: aile bandı ton 352°±18 · `iran`ın 25 komşusunu MİRAS alıyorlar ve
    #   hepsinden ΔE≥12 · `safevi` ve `iran`dan ≥12 · birbirlerinden ≥12 ·
    #   palet kutusu · Osmanlı kırmızı şeridi dışı · S sert sınırlı.
    #   DÖRT ÜYELİ AİLE, ikili mesafeler:
    #     safevi↔afsar 16,0 · safevi↔iran 12,7 · safevi↔kacar 16,5
    #     afsar↔iran   12,0 · afsar↔kacar  12,1 · iran↔kacar   13,4
    #
    # 🟢 `zend` YAZILDI — 7 Ağustos 2026, RENK 2. Yukarıdaki iki gerekçe de
    #   ARTIK GEÇERSİZ ve ikisi de ölçülerek düşürüldü:
    #     ① "şimdilik gerekmiyor" → GEREKİYOR. Kullanıcının hükmü:
    #        *"iran bir devlet adı da oldu bir coğrafya adı da oldu…
    #        diğer iranları hanedanı ile anmak olabilir. kaçarlar zend
    #        safeviler afşarlar gibi"* ⇒ `iran`ın en büyük tek penceresi
    #        (1747-06-20 → 1796-01-01) `zend`e taşınacak. Ölçtüm:
    #        **126 nokta** o pencerede `iran` taşıyor.
    #     ② "beşinci üye için uygun aday SIFIR" → **217 aday** çıktı.
    #
    #   🔴 FARKIN SEBEBİ ZAMAN SÜZGECİ — ve bu, `hokand` dersinin ikinci
    #      vakası. Eski ölçüm `iran`ın BÜTÜN ÇİZGİDEKİ 23 komşusunu engel
    #      sayıyordu. Ama `zend` bütün çizgide yaşamıyor: 1751-1794.
    #      O pencerede gerçekten sınırdaş olanlar ÖLÇÜLDÜ (126 noktanın
    #      Voronoi komşularının o penceredeki kimlikleri) ve **16 çıktı**:
    #        OSMANLI · umman · buhara · turkmen · benihalid · afgan-durrani
    #        gurcistan · rusya · suud · sind · hive + aile
    #      23 engelde kutu doluydu, 16 engelde dolu değil.
    #      📌 "Yer yok" hükmü, YANLIŞ PENCEREYLE ölçülmüş bir hükümdü.
    #         Fazla temkin de bir ölçüm hatasıdır (`renk_olc.py:38`).
    #
    #   ÖLÇÜM — en yakın engel ΔE 13,2:
    #     afgan-durrani 13,2 | buhara 13,2 | kacar 13,4 | safevi 14,8 |
    #     iran 18,4 | afsar 21,4 | gurcistan 29,3 · altlıktan 26,7
    #     C* 21,1 = paletin %47'si · ton 341,8°
    #   ⚠️ 13,2 ince ama ailenin KENDİ iç mesafeleri zaten 12,0-16,5
    #     (aşağıdaki dörtlü tablo) — yani bu, aileye katılmanın bedeli,
    #     bir gevşeme değil.
    #
    #   🟢 VE KULLANICININ TARİFİ BU SEFER LAFZEN İŞLEDİ — beş basamaklı
    #     bir PARLAKLIK MERDİVENİ doğdu ve `zend` en alt basamak:
    #        afsar   L* 80,7      safevi  L* 73,5      kacar  L* 70,3
    #        iran    L* 65,6      zend    L* 60,6
    #     📌 İLK ADAY #8d24bd REDDEDİLDİ: payı daha iyiydi (14,4) ama
    #        L* 65,1 ile `iran`ın 65,6 basamağına OTURUYORDU — merdiveni
    #        bozar, ayrımı ton ve kromaya yıkardı. Ve C* 35,3 = paletin
    #        %95'i, yani `#c03fab`ın (%88) reddedildiği "vurgu" bölgesi.
    #        Yarım birim pay için modelin kendisi feda edilmez.
    #   ⇒ Aileyi İKİYE BÖLMEYE GEREK KALMADI (aşağıdaki eski öneri).
    "zend":       ("Zend Hanedanı (İran)",   "#691569"),
    #
    # ⚠️ VE KULLANICININ TARİFİ LAFZEN SAĞLANAMIYOR — ölçüldü:
    #   palet kutusu L* aralığı 17,3 birim; beş üye ikili ΔE≥12 için SALT
    #   parlaklıkla 4×12 = 48 birim ister. 17,3 < 48 ⇒ ayrım L* + kroma + ton'u
    #   BİRLİKTE taşımak zorunda. Tarifin RUHU sağlanıyor (aynı aile, ayırt
    #   edilebilir), LAFZI sağlanamıyor. Gizlenmiyor.
    "afsar":      ("Afşâr Devleti (Nâdir Şah)", "#f488fc"),
    "kacar":      ("Kaçar Hanedanı (İran)",     "#c840a8"),
    # ═══ İLHANLI SONRASI BEŞ HANEDAN — RENK 2, 7 Ağustos 2026 ═══
    # Beşi de İran'ın 1155-1597 arası bölgesel hanedanları; hiçbirinin veride
    # penceresi YOK ⇒ `renk_olc.komsuluk()` beşini de ölçemez. Her biri için
    # coğrafî çekirdeğine en yakın noktanın peteği alınıp O KİMLİĞİN KENDİ
    # PENCERESİNDEKİ komşuları ölçüldü (`zend` · `galzay` · `ryazan` ile aynı
    # yöntem):
    #   lur-i-buzurg  [Zagros içi]  ilhanli · iran · timurlu
    #   lur-i-kucek   [Luristan]    ilhanli · safevi · iran · karakoyunlu ·
    #                               akkoyunlu · timurlu · celayirli · OSMANLI
    #   kutlughanli   [Kirman]      ilhanli
    #   incu          [Şiraz]       ilhanli · iran
    #   muzafferi     [Şiraz]       ilhanli · iran
    #
    # 🔴 MOR AİLEYE KONMADILAR. Aile `safevi→afsar→zend→kacar` ARDIŞIK
    #   çizgisidir; bu beşi birbirinin ardılı değil ÇAĞDAŞI ve çoğu aynı anda
    #   sahnede. `karkiya`/`marasi` için verilen hükmün aynısı: kural
    #   ardışıklığa bakar, coğrafyaya değil. (Ayrıca band zaten beş üyeyle
    #   dolu — ölçüldü, `§zend`.)
    #
    # 🔴 BEŞİ BİRLİKTE ÇÖZÜLDÜ, tek tek değil (`renk_olc.py:30`). Ve dağılım
    #   120 permütasyon denenerek EN DAR PAYI EN BÜYÜK yapan seçildi:
    #     kimlik         renk      kendi ölçülen komşularından ΔE
    #     lur-i-buzurg   #456627   17,3      lur-i-kucek  #246f90   19,6
    #     kutlughanli    #513921   28,5      incu         #75c0db   27,9
    #     muzafferi      #2154db   20,1
    #   Kardeşler arası en dar çift 13,0 (lur-i-kucek ↔ incu), en geniş 48,0.
    #
    # ⚠️ VE BİR TUZAK ÖLÇÜLEREK BULUNDU: ilk turda `kutlughanli` (…1306) ile
    #   `muzafferi` (1318…) ZAMAN ÖRTÜŞMEDİĞİ için birbirinin engeli
    #   sayılmadı ve #513321 / #513921 çıktı — neredeyse aynı kahve. Ama
    #   ikisi de KİRMAN bölgesi ve arada yalnız 12 yıl var: kullanıcı zamanı
    #   kaydırınca hanedan değişimini HİÇ göremezdi, denetim de göremezdi
    #   (eşzamanlı değiller, çift kurulmuyor).
    #   ⇒ Kural: **aynı coğrafyada ARDIŞIK olanlar da ayrışmalı.** Eşzamanlılık
    #     ölçütü komşuluk için doğru, OKUNABİLİRLİK için yetersiz.
    # ═══ HAZAR KIYISININ İKİLİSİ — KOORDİNATÖR, 10 Ağustos 2026 ═══
    # 🔴 VE BU İKİLİ, `kutlughanli`/`muzafferi` TUZAĞINI CANLI TEKRARLADI.
    # Çözücü İKİ KEZ koşturuldu ve iki farklı cevap verdi:
    #   ① veri YOKKEN   gilan-kiya #2a2ad2 · mazenderan-marasi #2a30d2
    #                   "yeniler arası komşuluk: 0 çift"  → NEREDEYSE AYNI MAVİ
    #   ② köprü İNİNCE  gilan-kiya #2a5ad2 · mazenderan-marasi #2ab4d2
    #                   "yeniler arası komşuluk: 1 çift ← ayrışmalı"
    # İkisi Hazar'ın güney kıyısında YAN YANA ve künye pencereleri ÖRTÜŞÜYOR
    # (1371-1592 · 1359-1596) — yani ①'deki renkler kesinlikle çakışacaktı.
    # ⇒ Alet yanlış değildi, EVRENİ boştu. `§11`: veri penceresi ≠ künye
    #   penceresi; ve doğru sıra VERİ → RENK → KOŞU. ① reddedildi.
    # ⚠️ İkisi de `ilhanli` (#c690ed) ARDILI — aynı coğrafyada ardışık olanlar
    #   da ayrışmalı (bu bandın kendi kuralı, 30 satır yukarıda).
    # 🔴 KABUL EDİLMİŞ BORÇ — ve sebebi bir ALET BOSLUGU (aynı gün ölçüldü):
    #   gilan-kiya ↔ gurcistan  ΔE 10,44 · 567 km · 1371-1592 (eşik 12)
    # Çözücü engel kümesini YALNIZ Voronoi komşusundan kurar; denetçi ise
    # 600 km ölçütüyle "yakın ama değmeyen" çifti de kurar. gurcistan bu
    # ikincisine giriyor, birincisine GİRMİYOR ⇒ çözücü "en yakın engel
    # ΔE 13,2" dedi, denetçi aynı anda 10,44 buldu.
    # ⇒ ÇÖZÜCÜ, DENETÇİNİN HEMEN İŞARETLEYECEĞİ BİR RENK ÜRETEBİLİYOR.
    # Çare rengi zorlamak değil, çözücünün engel kümesini denetçininkiyle
    # EŞİTLEMEK. Renk oynatılmadı; borç burada YAZILI ki yeniden
    # "keşfedilmesin" (§11: kayıtsız borç yarın kusur diye bulunur).
    "gilan-kiya":        ("Kârkiyâ (Gîlân)",        "#2a5ad2"),
    "mazenderan-marasi": ("Mar'aşî (Mazenderan)",   "#d848b0"),
    "lur-i-buzurg":("Lur-i Büzürg (Hezâraspîler)", "#456627"),
    "lur-i-kucek": ("Lur-i Küçek (Hurşîdîler)",    "#e89890"),
    "kutlughanli": ("Kutluğhanlılar (Kirman)",     "#513921"),
    "incu":        ("İncûlular (Fars)",            "#08f008"),
    # ═══ HORASAN — serbedariler + kert, 8 Ağustos 2026 ═══
    # `iran` hayaletinin kalan 22 noktasını açıyorlar (16 + 6).
    # 🔴 `serbedariler ↔ kert` AYRI MUAMELE: Horasan'ı 1337-1381 arasında
    #   DOĞRUDAN bölüşüyorlar — Sebzevâr batıda, Herat doğuda, aralarında
    #   SINIR var ve kullanıcı o sınırı okuyacak. `bugis ↔ gova-makassar`,
    #   `ava ↔ ayutthaya`, `luba ↔ lunda` ile aynı sınıf.
    #   ⇒ 12 eşiği YETMEZ, hedef 25 kondu. Ve `assert` ile SINANDI —
    #     kurulamayan özel kısıt artık çözücüyü durduruyor (`luba↔lunda`
    #     vakasında sessizce atlanmıştı).
    #   ÖLÇÜM: serbedariler ↔ kert = **40.03**
    # ENGEL: ikisinin de veride 0 dönemi var ⇒ coğrafî çekirdek + 1500 km.
    #   VE `kuba ↔ lunda` DERSİ UYGULANDI: verisi olmayan aday ELENMİYOR,
    #   künyesi örtüşüyor ve aynı bölgedeyse ENGEL SAYILIYOR.
    # serbedariler — 1337→1386 · pay 18.4 · engel 21 · geçen 21748 · C* 20.7 = %40
    # kert — 1245→1389 · pay 16.8 · engel 24 · geçen 10138 · C* 25.5 = %60
    "serbedariler": ("Serbedârîler", "#a5f3c3"),
    "kert": ("Kertler (Herat)", "#0808f0"),
    "muzafferi":   ("Muzafferîler",                "#2154db"),
    # =======================================================================
    # KALAN 40 RENKSIZ KIMLIK -- RENK 2, 7 Agustos 2026
    # =======================================================================
    # Bu kirk kimligin veride 238 PENCERESI VAR ve hicbirinin rengi yoktu:
    # SS8 geregi renksiz kimlik BOYANMAZ, yani r890'da 238 pencerelik GERCEK
    # DELIK duruyordu. Koordinator karari: kunye beklemeden yaz ("gevsek"),
    # cunku delik bugun gorunur, kunye eksikligi yalniz dizin penceresini
    # etkiliyor (hokand ve cin-cumhuriyeti emsali).
    #
    # NOT -- KAYNAK DOSYA YANLIS BILINIYORDU: koordinator noktalarin "kuyruk
    # dosyalarinda" oldugunu soyledi; olctum, hepsi yerlesimler_asya.js'te ve
    # o dosya GIRDI_DOSYALARI'nda, yani CANLI. CLAUDE.md:442 onu hala "merge
    # bekleyen" gosteriyor -- bayat satir, bildirildi.
    #
    # SECIM OLCUTU -- bu parti olcutu OLGUNLASTIRDI:
    #   Ilk tur yalniz OLCULEN VORONOI KOMSULARINI engel saydi ve dogrulama
    #   onu curuttu; komsu CIKMAYAN ama 600 km icinde olan kimliklerle
    #   cakisiyordu:
    #     tran-hanedani <-> le-hanedani       0 km  dE  8,8  (ikisi de Vietnam)
    #     kakatiya      <-> bidar             0 km  dE  5,3
    #     pandya        <-> delhi-sultanligi  0 km  dE  7,1
    #     singhasari    <-> mataram           0 km  dE  8,6
    #   Voronoi komsulugu "hucreler degiyor mu" der; 600 km "ayni ekran
    #   kosesinde mi" der. OKUNABILIRLIK icin dogru olcut ikincisidir.
    #   => Engel kumesi = olculen komsular + 600 km icindeki HER palet
    #      kimligi + 600 km icindeki daha once secilmis yeniler.
    #      Kimlik basina ortalama 14,7 yakin palet kimligi, 30-39 engel.
    #   SONUC: 40/40 cozuldu - en dar pay 14,1 - bagimsiz denetimde 0 ihlal.
    #
    # UYARI: kirkinin da kunyesinde karsilik YOK (devletler.js 328 kayit).
    #   Renk deligi kapatir, dizin penceresi acik kalir. VERI DEVLET'te.
    "bengal-sultanligi":       ("Bengal Sultanlığı",                  "#e75d57"),
    "kenmu":                   ("Kenmu Restorasyonu (Japonya)",       "#e77e54"),
    "fransiz-cinhindi":        ("Fransız Çinhindi",                   "#e45d5d"),
    "haydarabad-nizam":        ("Haydarâbâd Nizamlığı",               "#e796ba"),
    "bengal-nevabligi":        ("Bengal Nevablığı",                   "#1836c6"),
    # san-fan  #393c18 → #4e1218 — pay 19,8 · engel 17 · C* 14,5 = %17 (paletin donuk ucu — Üç Feodal
    #     Beylik kısa ömürlü ve içeride kalıyor). `toungoo` ile 5,9'du.
    "san-fan": ("San Fan (Üç Feudatori) İsyanı", "#4e1218"),
    "yadava":                  ("Yâdava Hanedanı (Devagiri)",         "#e75a5a"),
    "dashun":                  ("Da Shun (Li Zicheng)",               "#1839c9"),
    "avad":                    ("Avad (Oudh) Nevablığı",              "#deabe4"),
    "cavnpur-sultanligi":      ("Cavnpûr Sultanlığı",                 "#e7b763"),
    "kakatiya":                ("Kâkatiya Hanedanı",                  "#153f21"),
    "pandya":                  ("Pândya Krallığı",                    "#54e7b4"),
    "pagan":                   ("Pagan Krallığı (Burma)",             "#e1e787"),
    "hanthawaddy":             ("Hanthawaddy (Pegu) Krallığı",        "#e7549c"),
    # ═══ tay-son — `portekiz ↔ tay-son` 5,18 idi, 8 Ağustos 2026 ═══
    # B kovasının en kötü çiftiydi (701 km, 1778-1802). YEREL olan taşındı:
    # `portekiz` ÇÖZÜLEMEZ çıktı (aşağıya bak), Tay Sơn ise 24 yıllık ve
    # bölgesel.  portekiz  5,18 → 54,01
    # 🔴 KÜRESEL KİMLİKLER ÖLÇÜLDÜ VE TAŞINAMAZ — "pahalı" değil, İMKÂNSIZ:
    #     ingiltere  engel 197 (600 km) / 262 (1500 km) → eşiği geçen aday 0
    #     portekiz   engel 107 (600 km) / 184 (1500 km) → eşiği geçen aday 0
    #   163.446 adayın HİÇBİRİ geçmiyor. Sebep: bu ikisi Hindistan'dan
    #   Kanada'ya, Fas'tan Brezilya'ya kullanılıyor ⇒ paletin en bağlı
    #   düğümleri. ⇒ Onları taşımak GD Asya'daki çifti kapatır ama dünyanın
    #   geri kalanını açar — ve zaten açamıyor.
    #   📌 `fransa ↔ portekiz` dersinin (hangi kısıt bağlıyor?) ikinci
    #     uygulaması, ama sonucu farklı: orada bağlayan bir TERCİHTİ ve
    #     çıkılabildi; burada bağlayan KOMŞULUK SAYISI ve çıkış yok.
    #     ⇒ "Çözülemedi"nin iki cinsi var ve ayırt edilmeli.
    "tay-son": ("Tây Sơn Hanedanı", "#781b0f"),
    "taiping":                 ("Taiping Cennet Krallığı",            "#e7785a"),
    "madurai-sultanligi":      ("Madurai Sultanlığı",                 "#e76c51"),
    "singhasari":              ("Singhasari Krallığı",                "#e78a7b"),
    "karnatik":                ("Karnatik Nevablığı",                 "#aee499"),
    "tonburi":                 ("Tonburi Krallığı (Siyam)",           "#1b54e4"),
    "tran-hanedani":           ("Trần Hanedanı (Đại Việt)",           "#96e7b4"),
    "ho-hanedani":             ("Hồ Hanedanı (Đại Ngu)",              "#752115"),
    "cammu-kesmir":            ("Cammû ve Keşmir Prensliği",          "#e76090"),
    "hoysala":                 ("Hoysala Hanedanı",                   "#158d6f"),
    "laos-kralliklari":        ("Laos krallıkları (Lan Xang ardılları)", "#421539"),
    "seylan-sinhala":          ("Seylan Sinhala krallıkları",         "#e76393"),
    # 🔴 `ainu` KALDIRILDI — 8 Ağustos 2026. Rengi #1b8ae4 idi.
    #   Sebep MALİYET DEĞİL DOĞRULUK: kullanılmayan renk paleti daraltmıyor
    #   (ölçüldü: 22/150.000 aday hex, coğrafî engel değil, komşuluk
    #   çizgesinde 0). Ama VERİ DEVLET ölçtü ve o pencerede öyle bir devlet
    #   YOKMUŞ: anakara zinciri (kamakura→kenmu→muromachi) Honşu'yu tam
    #   kapsıyor, Matsumae klanı ancak 1590'larda başlıyor — veri ise
    #   1281-1550'de `ainu` boyuyordu.
    #   ⇒ Eksik olan künye değil, FAZLA OLAN BOYAYDI. `§3.5`in hayalet
    #     devletlerinin palet karşılığı.
    #   📌 SIRA UYGULANDI: ① iki kayıt (Matsumae · Hakodate) kasitli_bosluk
    #     yapıldı, veride d:"ainu" 2 → 0 doğrulandı · ② sonra renk düştü.
    #     Ters sıra iki dönemi renksiz bırakır ve `§8` gereği DELİK açardı.
    "sukhothai":               ("Sukhothai Krallığı",                 "#e1aed5"),
    "yogyakarta":              ("Yogyakarta Sultanlığı",              "#187020"),
    "multan-langah":           ("Multan (Langâh) Sultanlığı",         "#1b51e1"),
    "bahavelpur":              ("Bahâvelpûr Nevablığı",               "#3c5415"),
    "bharatpur-cat":           ("Bharatpur (Cat) Krallığı",           "#1e54e4"),
    "cunagadh":                ("Cûnagadh Nevablığı",                 "#3c1515"),
    "bhopal":                  ("Bhopal Nevablığı",                   "#451539"),
    "kocin":                   ("Koçin Krallığı",                     "#183c1b"),
    "pingnan":                 ("Pingnan (Du Wenxiu) Sultanlığı",     "#e77b7b"),
    "samudra-pasai":           ("Samudra Pasai Sultanlığı",           "#a85718"),
    "sunda-pajajaran":         ("Sunda-Pajajaran Krallığı",           "#453015"),
    "surakarta":               ("Surakarta Sunanlığı",                "#183ccc"),
    "sarawak-brooke":          ("Sarawak (Brooke) Racalığı",          "#78e090"),
    # karakoyunlu  #305d30 → #75bdf6  (toplu tur)
    "karakoyunlu": ("Karakoyunlular", "#e018e0"),
    "akkoyunlu":  ("Akkoyunlular",           "#48ae48"),
    # Irak'ın 1335-1411 penceresi `iran` battaniyesinin altındaydı: İlhanlı
    # ile Karakoyunlu arasındaki 76 yılın sahibi yazılı değildi. Duvarlar
    # zaten Tikrit kaydında duruyordu, eksik olan yalnız kutunun adıydı.
    # TDV CELÂYİRLİLER: 1340-1431, Hasan-ı Büzürg; Bağdat'ı Karakoyunlu
    # Kara Yûsuf aldı (devletler.js karakoyunlu kronolojisi de 1410 diyor).
    "celayirli":  ("Celâyirliler",           "#b5432f"),
    "safevi":     ("Safevî İran",            "#a56cab"),
    "imereti":    ("Imereti Kralligi",       "#deea90"),
    # ═══ KAFKAS ÜÇLÜSÜ 1918-1921 — RENK 2, 7 Ağustos 2026 ═══
    # Üçü BİRLİKTE ölçüldü, ayrı ayrı değil: `gurcistan-dc` verisi tek başına
    # inseydi komşuları `rusya` görünürdü ve 1918-1921 Kafkasyası YANLIŞ
    # boyanırdı. Küçük parti ⇒ TAVAN kuralı (tam karşılıklı ayırma):
    #   ermenistan-dc ↔ azerbaycan-dc  61,5
    #   ermenistan-dc ↔ gurcistan-dc   57,0      azerbaycan-dc ↔ gurcistan-dc  21,1
    #   pay 20,5 / 20,7 · C* %71 ve %72 · komşu: kacar · rusya
    #
    # 🔴 VE SLUGLAR KÜNYEDEN ALINDI, ADDAN TÜRETİLMEDİ. Hazırlığımda
    #   `ermenistan` ve `azerbaycan` yazıyordu — künyede (339 kayıt) böyle bir
    #   kayıt YOK; doğrusu `…-demokratik-cumhuriyeti`.
    #   ⚠️ Ve `--dogrula` bunu YAKALAYAMAZDI: yanlış adı BOYALAR'a yazsaydım
    #   doğrulama onu orada bulup "0 fark" derdi. Aktarım denetimi YAZILANI
    #   ÖNERİYLE karşılaştırır, ÖNERİNİN KÜNYEYLE uyumunu sormaz. Sapma ancak
    #   gerçek sluglar renksiz kalarak (harita deliği) ve palette iki ÖLÜ
    #   KİMLİK birikerek görünürdü.
    #   📌 Kural: slug künyeden alınır. "Hazır" demek "doğru" demek değildir.
    "ermenistan-demokratik-cumhuriyeti":
                  ("Ermenistan Demokratik Cumhuriyeti", "#1221ae"),
    "azerbaycan-demokratik-cumhuriyeti":
                  ("Azerbaycan Demokratik Cumhuriyeti", "#eacf75"),
    "gurcistan-demokratik-cumhuriyeti":
                  ("Gurcistan Demokratik Cumhuriyeti", "#90eab1"),
    "gurcistan":  ("Gürcistan",              "#e020b0"),
    # Kullanıcı şikâyeti (hatalar 15 md.5): "1541-1545 Macaristan'da üç yeşil
    # leke, hangisi ne belli değil." Eski #4e7d46 yeşildi.
    # ⚠️ VERİLEN ADRES YANLIŞTI, ölçüldü: çift `macaristan ↔ rusya` diye
    # bildirilmişti (ham hex ΔE 9,1) ama ikisi tarih boyunca HİÇ SINIRDAŞ DEĞİL
    # — bir sınırda karışmaları imkânsız. Ve 1541-45 Macaristan kutusunda
    # sahnede yalnız OSMANLI (kırmızı), macaristan, avusturya var; rusya YOK.
    # Gerçek en yakın SINIRDAŞ komşu: bulgaristan #7aa06a, bindirilmiş ΔE 4,2.
    # (Ham hex iyimserdir; dosya başındaki kural gereği bindirilmiş ölçüldü.)
    # Yeşil aileden çıkarıldı: en yakın komşu 4,2 → 14,1 (sirbistan), 3,4 kat.
    # Ekrandaki gerçek çift olan avusturya ile de 13,4'e açıldı.
    # 📌 İstenen ΔE ≥ 25 ULAŞILAMAZ: 30 aday hex denendi, 113 kimlikli paylaşımlı
    # palette tavan ~14. Bu tek renk sorunu değil PALET sorunu — sahnedeki 111
    # kimliğin 542 sınırdaş çiftinden 112'si ΔE 10'un ALTINDA (en kötüler
    # sammar↔hicaz 0,6 · adal↔somali 2,0 · memluk↔yemen 2,4). Yeni kimliklere
    # ΔE ≥ 12 eşiği uygulanıyor ama mevcut paletin 112 çifti o eşiğin yarısının
    # altında. YAPILACAKLAR'da "palet stratejisi" olarak duruyor.
    "macaristan": ("Macaristan",             "#20d880"),
    "avusturya":  ("Avusturya (Habsburg)",   "#bdab3f"),
    # 🔴 GRİDEN MAVİYE (RENK oturumu, 2 Ağustos; koordinatör kararı).
    # Eski #9a9a9a altlıktan ΔE 12,2 — GÖRÜNMEZ. Ve mesele yalnız görünürlük
    # değildi: bu atlasta GRİ, "veri yok" rengidir. Kutsal Roma İmparatorluğu
    # 1281-1806 arası Avrupa'nın en büyük gövdelerinden biri ve "bilmiyoruz"
    # rengiyle çiziliyordu — görünmezlik değil, YANLIŞ BİR MESAJ.
    #
    # ⚠️ ÖNCE GRİNİN KASITLI OLUP OLMADIĞI ARANDI (koordinatörün şartı):
    #   · bu satırın yanında gerekçe yorumu YOK
    #   · git log -S'"almanya"' -- arac/renkler.py → tek commit (6cb69b1,
    #     Oturum 3'ün 77→212 kayıtlık TOPLU işi), tasarım kararı değil
    #   · belgelerde "gri kimliktir" diyen bir kural YOK
    #   ⇒ Gri bir VARSAYILANDI. Ton sürekliliği kısıtı bu yüzden uygulanmadı:
    #     nötr rengin (C* 7,1) korunacak bir tonu yok.
    #
    # ÖLÇÜM — 24 komşusunun tonları çemberin NEREDEYSE TAMAMINI kaplıyor:
    #   14·51·54·70·71·76·80·97·120·126·127·152·165·185·249·283·289·290·
    #   318·321·330·333·336·359    ⇒ tek boşluk 185-249 arası.
    # Almanya oraya kondu: ton 213,5°, en yakın komşu tonundan ~28° uzak.
    # Yani ΔE'den bağımsız olarak da AYRI OKUNUR.
    #   pay (24 komşu + Osmanlı ikilisi) ΔE 15,4  · altlıktan 32,6 (eski 12,2)
    #   C* 23,5 = %68 yüzdelik
    # ⚠️ Ham doygunluk S 0,91 = %83 yüzdelik — paletin üst çeyreğinde, kabul
    #   ediyorum ve sebebi ölçüldü: L* 80 civarında kromatik bir MAVİ üretmenin
    #   RGB'de başka yolu yok. Algısal ölçü C* ve o %68'de, aykırı değil.
    # 📌 TAVAN ZORLANMADI: bantta ulaşılabilir azami pay 17,4; 15 uygulandı.
    #
    # 🟢 YAN FAYDA: `almanya ↔ venedik` 11,4 → 19,5. Almanya'nın kalan TEK
    #   çakışmasıydı ve bu hamle onu da kapattı ⇒ almanya artık TEMİZ.
    "almanya":    ("Kutsal Roma / Almanya",  "#78d028"),
    "lehistan":   ("Lehistan-Litvanya",      "#fc87c9"),
    # ═══ RUS OVASI KÜMESİ — RENK 2, 7 Ağustos 2026 ═══
    # 🔴 SEBEP 266 YILLIK BİR HAYALET: `devletler.js`te `rusya` 1547-01-16'da
    #   başlıyor, ama `yerlesimler.js` Moskova · Novgorod · Ryazan · Tula ·
    #   Vologda · Pustozersk'i **1281'den** `rusya` boyuyor. Yani harita 266
    #   yıl boyunca VAR OLMAYAN bir devletin rengini gösteriyor
    #   (`NOKTA HALKA-2 2` ölçtü). Çare selefleri ayrı kimlik yapmak.
    #
    # KÜME BEŞ DEĞİL YEDİ — koordinatör beş saydı, ölçüm iki fazlasını
    # gösterdi: `ryazan` ZATEN renkliydi (#cce787, bu oturumda yazılmıştı) ve
    # `litvanya-buyuk-dukalik` ile `sovyet-rusya` da künyeli-renksiz, aynı
    # coğrafyada. ⇒ Yedisi birlikte çözüldü (`B15` TAVAN: küçük parti, havuz
    # 160.690, tam karşılıklı ayırmanın bedeli sıfır).
    #
    # AYRIM — beşi de `rusya`nın SELEFİ, yani kullanıcı geçişi görecek:
    #   moskova 31,6 · novgorod 24,4 · pskov 45,7 · tver 44,7 ·
    #   litvanya-buyuk-dukalik 49,1 · sovyet-rusya 25,4 · ryazan 20,3
    #   küme içi en dar çift: 18,5 (pskov ↔ tver)
    # 📌 `rusya`dan UZAKLAŞTIRILDI, tersi denenmedi — `rusya` paletin
    #   çözülemeyen düğümü (bugün `isvec` vakasında ölçüldü: ΔE ≥ 12 sağlayan
    #   aday YOK). Kısıtlı düğüm oynatılmaz, çevresi oynatılır.
    #
    # ⚠️ ÜÇÜ YAZILDI, ÜÇÜ BEKLİYOR: `novgorod` · `pskov` · `tver` künyesiz
    #   (VERİ DEVLET yazıyor). Renkleri ölçülü ve
    #   `denetim/hazir-renk2-rus-ovasi.txt`te hazır.
    # ⚠️ PENCERELER KÜNYEDEN OKUNDU, hazırlıktan DEVRALINMADI (7 Ağustos
    #   akşamı, künyeler yazılınca). Bir fark çıktı: `tver` hazırlıkta
    #   1281'den başlıyordu, künyede **1246** — 35 yıl erken. Komşu kümesi
    #   değişmediği için renkler aynı kaldı, ama sayı devralınmadı.
    #   (`darfur` 1603→1695 dersi: kendi ölçtüğün sayı da bayatlar.)
    # 🔴 VE İKİSİ AYNI GÜN TAŞINDI — VERİ KAYNAKLI, DÖRDÜNCÜ VE BEŞİNCİ VAKA.
    #   Yazıldıkları koşuda veri 1800 noktaydı; birkaç saat sonra 333 nokta
    #   daha bağlandı (2133) ve `renk_fark.py` şunu bildirdi:
    #     doğan komşuluk çifti 38 · ölen 13 · YENİ ÇAKIŞMA 2
    #       almanya   ↔ moskova    ΔE  8,08
    #       altinorda ↔ novgorod   ΔE 11,99
    #   İkisinin de hex'i DEĞİŞMEMİŞTİ; yalnız Rus ovasına nokta girdi ve
    #   Voronoi komşuluğu yeniden kuruldu.
    #   📌 `cungar↔buhara` · `norvec↔portekiz` · `cohor↔kamboc` ile aynı
    #      desen: **palet verinin fonksiyonudur.**
    #   ⇒ Taşınan yine UCUZ taraf: `almanya` ve `altinorda` paletin kalabalık
    #     düğümleri, `moskova`/`novgorod` 23 ve 19 engelle rahat çözüldü.
    #   ⚠️ Ve bu çifti YALNIZ `renk_fark.py` yakalayabilirdi: `renk_olc` de
    #     bildirdi ama "kaç çakışma var" derdi; **hangisinin YENİ doğduğunu**
    #     söyleyen taban karşılaştırmasıydı.
    "moskova":    ("Moskova Knezliği",       "#0f0f9c"),
    "novgorod":   ("Novgorod Cumhuriyeti",   "#84c9cf"),
    "pskov":      ("Pskov Cumhuriyeti",      "#840f75"),
    "tver":       ("Tver Knezliği",          "#9f6ced"),
    # `rusya` 1917-03-15'te bitiyor, `sovyet-rusya` 1917-11-07'de başlıyor —
    # arada SEKİZ AY boşluk vardı. Koordinatör `sovyet-rusya`nın `f:`ini
    # geriye çekmeyi REDDETTİ ve ayrı künye yazdırdı; doğru karar, yoksa
    # Sovyet Rusya Ekim Devrimi'nden sekiz ay önce boyanırdı — bugün gün
    # boyu söktüğümüz HAYALET DEVLET sınıfının ta kendisi.
    "rusya-gecici-hukumet": ("Rusya Geçici Hükûmeti", "#12397e"),
    "litvanya-buyuk-dukalik": ("Litvanya Büyük Dukalığı", "#120f9c"),
    "sovyet-rusya": ("Sovyet Rusya",         "#33eddb"),
    "rusya":      ("Rusya",                  "#4f7d4f"),
    # ═══ SON PARTİ — kalan 21 çakışma + 5 görünmez BİRLİKTE çözüldü ═══
    # (RENK oturumu, 2026-08-03 · ①·② yazıldıktan SONRA güncel palete karşı)
    #
    # 30 kimlik oynadı · 21/21 çakışma kapandı · 5 görünmezin 5'i görünür oldu
    # eşik 12 (kapanmanın istediği) · ortalama ton kayması 9,0° · S sert sınırlı
    #
    # 🔴 PAYLASIM SELF-CHECK BURADA KARAR ZORLADI — ve iki grup FARKLI çözüldü:
    #   `safevi` → #a56cab ve `le-hanedani` ONU İZLEDİ. Bağ KORUNDU.
    #      ölçüldü: le-hanedani yeni renkte komşularından ΔE 14,5 · altlık 26,3
    #      ⇒ geçerli, ve palet bir hex tasarruf etti.
    #   `timurlu` → #9c7563 ama `kamboc-kralligi`/`vijayanagara` İZLEYEMEDİ.
    #      ölçüldü: ikisi de yeni renkte komşularından yalnız ΔE 10,1 alıyor
    #      (eşik 12) ⇒ GEÇERSİZ. Eski hexlerinde kaldılar, beyan güncellendi.
    # 📌 Aynı uyarı, iki farklı doğru cevap. Uyarının işi düzeltmeyi dayatmak
    #   değil, SEÇİMİ görünür kılmak — ve seçim ancak ÖLÇÜLDÜKTEN sonra yapılır.
    #
    # ⚠️ `karadag` 102,7° kayıyor (tan → turkuaz): görünmezdi ve altlığın ton
    #   ailesinden çıkmak zorundaydı. `memluk` 40,8°, `arnavutluk` 24,5°,
    #   `kazan` 21,5°, `sardinya` 21,2° — kalanların 24'ü ±20° içinde.
    # 📌 Ve bu parti "GÖRÜNMEZLİK TONU ZORLAR, ÇAKIŞMA ZORLAMAZ" kuralını
    #   üçüncü kez doğruladı: büyük kaymaların hepsi görünmez olanlarda.
    # astarhan  #482d15 → #421212  (toplu tur)
    "astarhan": ("Astarhan Hanligi", "#421212"),
    "altinorda":  ("Altın Orda ve ardılları","#873057"),
    "kazan":      ("Kazan Hanlığı",          "#ff6f4b"),
    "kirim":      ("Kırım Hanlığı bozkırı",  "#b45a1e"),
    # ═══ SİBİR HANLIĞI — RENK 2, 6 Ağustos 2026 ═══
    # `data/yerlesimler_ek10.js` (4 nokta: Tümen · Tobolsk · Tara · Baraba)
    # BU RENK OLMADAN BAĞLANAMIYORDU. Dosyanın kendi başlığı: ödünç
    # `altinorda` yazmanın bedeli 168 yıl — Kazan ve Kırım kendi rengindeyken
    # Batı Sibirya Altın Orda görünürdü. Beklemek doğruydu.
    # ÖLÇÜLEN KOMŞULUK (ek10 canlı kümeye eklenip Voronoi kurularak; gün
    # düzeyinde örtüşme) — 5 komşu, hepsi renkli:
    #   kazan 1438-1552  ΔE 17,7 | rusya 1430-1598  ΔE 18,2
    #   altinorda 1430-1500  ΔE 26,2 | kazak-hanligi 1500-1598  ΔE 35,7
    #   mogulistan 1430-1598  ΔE 39,2 | (nogay soft 17,9)
    #   altlıktan ΔE 19,1 · C* 24,7 = paletin %60'ı
    # ⚠️ ÖLÇÜM renk_olc.komsuluk() İLE YAPILAMAZ: o girdi.py'yi okur, ek10
    #   bağlı değil, kimlik SIFIR komşu görünür ve araç onu "kısıtsız" sanıp
    #   en ayrık rengi verir (renk_olc.py:456'nın uyardığı hâl). Dosya
    #   bağlandıktan sonra `py arac/renk_olc.py` bu satırları teyit eder.
    #
    # 🔴 YAZILMADI — KÜNYE BEKLİYOR. Renk ÖLÇÜLDÜ ve HAZIR, satır aşağıda
    #   yorumda duruyor; künye gelince yorumu kaldırmak bir dakikalık iş.
    #   Gerekçe (koordinatör sevki, 6 Ağustos): `devletler.js`te `harita:
    #   "sibir-hanligi"` diyen künye YOK ⇒ harita boyar, dizin penceresinde
    #   karşılığı olmaz, `denetle_yayin` "dizinsiz harita kimliği" der.
    #   `devletler.js` bu oturumun dosyası değil (§7).
    #   📌 RENK 2'nin ölçtüğü NÜANS — künye tam olarak "yok" değil, EKSİK:
    #      id `sibir` · ad "Sibir Hanlığı" · 1420-01-01 → 1598-01-01
    #      ama `harita:` alanı BOŞ ve bitiş, ek10'un TDV'den aldığı
    #      1598-08-20'den 7,6 ay ERKEN. VERİ DEVLET'in işi iki satır:
    #      `harita:"sibir-hanligi"` yazmak ve `t`yi 1598-08-20'ye çekmek.
    #
    # 🟢 YAZILDI — 6 Ağustos 2026 akşamı, koordinatör künyeyi üstlenince.
    #   Renk sabah ölçülmüştü; akşam GÜNCEL VERİYLE (1800 nokta) yeniden
    #   sınandı ve geçerli çıktı. Komşuluk sabahkinden DARALDI:
    #     sabah  altinorda · kazak-hanligi · kazan · mogulistan · rusya
    #     akşam  altinorda · kazak-hanligi · kazan · rusya   (mogulistan düştü)
    #   ⇒ kazan 17,7 · rusya 18,2 · altinorda 26,2 · kazak-hanligi 35,7
    #     altlıktan 19,1 · C* 24,7 = paletin %60'ı
    #   📌 Koordinatörün listesi `buhara`yı komşu sayıyordu; ölçümde ÇIKMADI.
    #      Renk zaten buhara'dan da ayrık, karar değişmiyor — ama sayı
    #      devralınmadı, ölçüldü (`YASALAR B10`).
    "sibir-hanligi": ("Sibir Hanlığı",        "#b17e3f"),
    # ═══ BALTIK/İSKANDİNAV KÜMESİ — beşi BİRLİKTE değişti (RENK, 2 Ağustos) ═══
    # 🔴 KÖK SEBEP: `almanya`nın beş çakışması vardı ve tek tek bakınca
    # çözülemiyordu (24 komşu, paletin EN KISITLI düğümü). Ölçünce görüldü ki
    # sorun almanya değil KÖŞE: altı yakın-nötr renk yan yana duruyordu —
    #   almanya #9a9a9a gri · letonya #78909c mavi-gri · litvanya #a1887f
    #   sıcak gri · finlandiya #90a4ae mavi-gri · isvec #7bb5c9 soluk mavi ·
    #   danimarka #8f8fb5 soluk mor
    # ve aralarında DOKUZ çakışma vardı (en kötüsü finlandiya↔letonya 3,4).
    # 📌 Kullanıcının "1541-45 Macaristan'da üç yeşil leke, hangisi ne belli
    #   değil" şikâyetinin aynısı, Baltık'ta ve altı renkle.
    # ⇒ Koordinatör yönü uygulandı: "onu değil KOMŞUSUNU oynat."
    #   `almanya` SABİT tutuldu (en pahalı hamle), beş komşusu BİRLİKTE çözüldü.
    #   Tek tek çözülemezdi: beşi birbiriyle de çakışıyordu.
    #
    # ⚠️ TAVAN ZORLANMADI — ölçüldü ve KASTEN kullanılmadı: beşinin karşılıklı
    #   tavanı ΔE 26, ama o çözüm uçlara kaçıyordu (finlandiya #0387fc S 0,99
    #   ton kayması 126° · letonya #096612 S 0,91). Amaç ÇAKIŞMAYI KAPATMAK ve
    #   bunun için 12 yeterli; 15 uygulandı, makul pay bıraksın diye.
    #   Eşiği yükseltmek kapanmaya bir şey KATMAZ, yalnız paletin donuk
    #   kimliğini bozar. Beşinin de ham doygunluğu S 0,48 = paletin MEDYANI.
    #
    # SONUÇ — dokuz çakışmanın DOKUZU kapandı:
    #   almanya↔danimarka  9,0→24,4   almanya↔isvec     10,7→16,0
    #   almanya↔letonya    5,4→19,0   almanya↔litvanya   5,3→12,5
    #   danimarka↔isvec   10,9→37,3   finlandiya↔isvec   6,6→17,6
    #   finlandiya↔letonya 3,4→33,3   isvec↔letonya      7,4→35,0
    #   letonya↔litvanya   9,7→19,0
    # `almanya`nın kalan tek çakışması: venedik 11,4 (28 komşulu, ayrı iş).
    # ═══ İSVEÇ TAŞINDI — RENK 2, 7 Ağustos 2026 · MARUZİYET gerekçesiyle ═══
    # 🔴 İHLAL DEĞİLDİ: `rusya` #4f7d4f'ten ΔE 12,3, yani eşiğin (12) ÜSTÜNDE.
    #   Taşındı çünkü PAYLAŞILAN SINIR 128,20° — atlasın kuzey yarısında en
    #   çok görülen tek çizgi. `renk_cikti.py`nin kendi kütüğü: "aynı ΔE tek
    #   noktada zararsız, sınır boyunca ciddi." Bu, o cümlenin uç örneği;
    #   listedeki öteki dokuzun en uzunu 40,60°, yani başka bir kefede.
    # 📌 VE BU ÇİFT BUGÜNE KADAR HİÇ GÖRÜNMEDİ — `renk_cikti` ② bölümü
    #   ölçmüyordu (bkz. `_govde` kütüğü: "0 değen çift" derken gerçek 653'tü).
    #   Nöbetçi onarılınca "SINIRDA" tablosu ilk kez doldu ve en tepesinde bu
    #   vardı. ⇒ Bir denetimi onarmak, yıllardır görünmeyen bir kusuru
    #   görünür kılar; onarım kendi iş kuyruğunu doğurur.
    # ⚠️ ÖLÇÜM KOŞUDAN SONRA YENİLENDİ, devralınmadı: koşu 187 nehir + 163
    #   engel getirdi ve sınır 123,21° → 128,20°'ye ÇIKTI (fas↔ispanya
    #   19,83 → 24,21 ile birlikte). "Önce yeniden ölç, sonra düzelt."
    # ⇒ Taşınan İSVEÇ, çünkü `rusya` ÇÖZÜLEMEDİ: paletin en kısıtlı düğümü,
    #   ΔE ≥ 12 sağlayan aday YOK. `isvec` 18 engelle rahat çözüldü.
    # ÖLÇÜM: rusya 12,3 → **22,4** · en yakın engel 22,4 · C* 28,2 = %73
    "isvec":      ("İsveç",                  "#48eac3"),
    # ↑ Baltık kümesi (bkz. `isvec` üstündeki blok) · ton kayması 10,9° —
    #   mor kimliği korundu, en yakın engel ΔE 12,1 · altlıktan 31,1
    "danimarka":  ("Danimarka-Norveç",       "#b484e7"),
    # Eski #b55b6b gül kırmızısıydı (H=349°, S=0.38) — kırmızı tonları Osmanlı
    # ailesine ayrılmıştır, yabancı devlete verilmez. Mora çekildi.
    "ingiltere":  ("Britanya",               "#7e3d8f"),
    # ═══ FRANSA CUMHURİYETİ — RENK 2, 7 Ağustos 2026 ═══
    # 🔓 140 DÖNEMLİK GÖÇÜ AÇAR. `NOKTA HALKA-2 3` "fransa'yı
    #   fransa-cumhuriyet yap" talimatını UYGULAMADI ve HAKLIYDI: renk
    #   olmadan 23 dönem boyanmayan toprak olurdu (`VERI-YAPISI.md`:
    #   "yoksa üretim uyarı verir ve bölge boyanmaz").
    #   ⇒ Görünmez bir künye uyuşmazlığını GÖRÜNÜR bir beyaz lekeyle takas
    #     etmek olurdu. Oturum şartnameye uydu; talimat şartnameyle çelişti.
    # 1792-09-22 (Cumhuriyet'in ilanı) → 1923-10-29. `fransa` 987-1792'de
    #   bitiyor, yani ikisi AYNI EKRANDA YAN YANA durmuyor ama kullanıcı
    #   zaman çubuğunu kaydırınca geçişi görecek.
    # ÖLÇÜM (2133 nokta, güncel veriyle): komşu `fransa` · 600 km'de 15
    #   palet kimliği · en yakın engel ΔE 20,3 · C* 28,0 = paletin %71'i
    #   ARDIL AYRIMI: fransa'dan **ΔE 39,6** — 1792 geçişi haritada net.
    # fransa-cumhuriyet  #45edcc → #09095a  (toplu tur)
    "fransa-cumhuriyet": ("Fransa Cumhuriyeti", "#09095a"),
    "fransa":     ("Fransa",                 "#c0d028"),
    "ispanya":    ("İspanya",                "#d59f63"),
    # ═══ PORTEKİZ TAŞINDI — RENK 2, 7 Ağustos 2026 ═══
    # 🔴 `fransa` #7b99ff'ten ΔE **9,6** — eşiğin ALTINDA, ve en yakın nokta
    #   çifti **5,2 km**: Çandernagor (Fransız) ↔ Hûglî (Portekiz), Bengal'de
    #   yan yana iki sömürge faktoryası. İkisi de küresel gövde, yani dünya
    #   ölçeğinde AYNI ANDA ekranda.
    # ⚠️ `renk_olc` bunu GÖREMİYOR: ikisi Voronoi komşusu DEĞİL, o yüzden çift
    #   hiç kurulmuyor. Afrika Boynuzu kümesi 600 km ile taranırken düştü.
    #
    # 📌 VE ÇÖZÜM ÖLÇÜT GEVŞETMEDEN BULUNDU — hangi kısıtın bağladığı ölçüldü:
    #     tam band (C* p10-p75 + uyum p75 + Osmanlı şeridi) → en iyi 11,5 🔴
    #     yalnız C* bandı                                   → en iyi 13,2 ✓
    #     yalnız görünürlük                                 → 40,1 (#00fc00,
    #                                                          saf neon yeşil)
    #   Bağlayan şey ΔE değil `uyum` TERCİHİYDİ. Ve `renk_olc.py:132` bunu
    #   zaten söylüyor: *"uyum ölçüt değil TERCİH; eşiği geçen adaylar
    #   arasında ayrım yapar, EŞİĞİ DEĞİŞTİRMEZ."* ⇒ Tercihten çıkıldı,
    #   eşiklerin hiçbirine dokunulmadı.
    #   #34fcfc: uyum 0,4383 — paletin p75'i (0,3132) üstünde ama paletin
    #   KENDİ MAKSİMUMUNUN (0,5494) altında, yani gözlenen aralık içinde.
    # ÖLÇÜM: fransa 9,6 → **36,5** · en yakın engel 13,2 · ingiltere 49,7 ·
    #   ispanya 41,9 · hollanda 49,1 · altlıktan 30,7 · C* 28,1 = %71
    # 📌 Taşınan PORTEKİZ, çünkü `fransa` tam bandda ancak 10,2 alıyor (134
    #   engel); portekiz 107 engelle 13,2. Ucuz olan taşınır — beşinci kez.
    "portekiz":   ("Portekiz",               "#34fcfc"),
    "granada":    ("Gırnata Emirliği",       "#7ba05b"),
    # 🔴 DEĞİŞTİ (RENK oturumu, 2 Ağustos). Eski #d98f5b turuncu-tandı ve
    # `ispanya` #c98f4a ile bindirilmiş ΔE **4,7** — pratikte AYNI RENK.
    # ⚠️ VE BU ÇAKIŞMAYI HİÇBİR RENK DEĞİŞİKLİĞİ ÜRETMEDİ: `yerlesimler_avrupa.js`
    # merge edilince (998→1235 nokta) ikisi İLK KEZ petek komşusu oldu. İki renk
    # yıllardır aynıydı; onları yan yana getiren VERİYDİ.
    # 📌 Ders (defterde): renk kararı verinin bir FONKSİYONU, sabit değil.
    #    Bugün temiz bir palet, yarın merge edilen bir partiyle kirlenir ve
    #    kimse rengi değiştirmemiş olur.
    # DEĞİŞEN UÇ SEÇİMİ ÖLÇÜLDÜ: hollanda 9 komşu · ispanya 26 komşu ⇒ az
    # kısıtlı uç değişti. `ispanya` ile aynı tonda kalınca (ikisi de ~70-80°)
    # ayrışmanın tek yolu parlaklık: L* 78,6 → 64,1.
    # ÖLÇÜM: L* 64,1 · C* 18,6 (= paletin MEDYANI, %46 yüzdelik) · ton 50,6°
    #   en yakın engel ΔE 19,0 (eski hâlde ispanya'ya 4,7) · altlıktan 27,9
    #   ton kayması 19,5° — turuncu-kızıl aile korundu, kimlik sürekliliği var.
    "hollanda":   ("Hollanda",               "#7e332a"),
    # venedik  #51c0b1 → #deed93  (toplu tur)
    "venedik": ("Venedik", "#deed93"),
    "ceneviz":    ("Ceneviz",                "#633c0c"),
    "napoli":     ("Napoli / İki Sicilya",   "#d23f78"),
    # 🔴 DEĞİŞTİ (RENK oturumu, 2 Ağustos). Eski #c9c1a3 soluk krem-altındı ve
    # İKİ kusuru birden taşıyordu:
    #   ① altlıktan ΔE **5,1** — paletin EN GÖRÜNMEZ rengi. Bej altlıkta
    #      pratikte hiç yoktu; Papalık haritada bir boşluk gibi okunuyordu.
    #   ② `almanya` #9a9a9a ile ΔE 9,3 (petek komşusu, eşik 12).
    # Tek değişiklik ikisini birden kapatıyor.
    # DEĞİŞEN UÇ ÖLÇÜLDÜ: papalik 15 komşu · almanya 24 komşu ⇒ az kısıtlı uç.
    # ⚠️ ALTIN/KREM KORUNAMADI, ölçüldü: ton ±25° penceresinde (70-120°) C*
    #   12-24 aralığında ΔE≥12 sağlayan aday YALNIZ 118-120° ucunda çıkıyor —
    #   95° civarı (altın) İtalya'nın kalabalık komşuluğunda dolu. Kimlik
    #   sürekliliğini korumak İSTEDİM ama veri izin vermedi; "yanlış renk
    #   boşluktan kötüdür" kuralı gereği görünürlük tercih edildi.
    # ÖLÇÜM: L* 63,5 · C* 18,5 (= paletin MEDYANI, %43 yüzdelik) · ton 120,2°
    #   en yakın engel ΔE 13,7 · altlıktan 27,1 (eski 5,1 → 5,3 KAT görünür)
    "papalik":    ("Papalık",                "#2a4b1e"),
    "italya":     ("İtalya",                 "#74a074"),
    "sovalye":    ("St. Jean Şövalyeleri",   "#3c424b"),
    "bulgaristan":("Bulgaristan",            "#2d6c0c"),
    "sirbistan":  ("Sırbistan",              "#518790"),
    # ═══════════════════════════════════════════════════════════════════
    # TOPLU TUR — İKİNCİ GEÇİŞ, 9 renk, 13 çift, 8 Agustos 2026 (RENK 2)
    # ═══════════════════════════════════════════════════════════════════
    # 🔴 VE BU GECIS, BIRINCININ BIR HUKMUNU CURUTTU.
    #   Birinci gecis "kalan 20 YAPISAL" demisti. Yanlisti: `teke` tek
    #   basina olculunce 709 aday geciyor (en iyi 14,6), ama parti icinde
    #   26 renk secildikten SONRA 0 geciyordu.
    #   ⇒ **"COZULEMEDI" HUKMU SIRAYA BAGLI OLABILIR.** Partide secilen her
    #     renk, sonraki kimlige ENGEL olur; gec siraya dusen kimlik
    #     cozulemez GORUNUR. Ayni parti ikinci kez kosulunca 20 -> 7.
    #   📌 Bu, "cozulemedi'nin iki cinsi var" kuralinin UCUNCU cinsi:
    #     TERCIH baglar (cikilir) · YAPI baglar (cikilmaz) ·
    #     **SIRA baglar (ikinci gecis cozer)**.
    #
    # SIRALAMA BIR ODUNLESMEDIR, hicbiri baskin degil — olculdu:
    #     frekans sirasi          13 cift kapandi, 7 acik
    #     "en bozuk cift once"    12 cift kapandi, 8 acik (ceneviz↔teke
    #                             kapandi ama uc yenisi acildi)
    #   Frekans sirasi secildi. `ceneviz ↔ teke` (ΔE 3,44 · atlasin ACILIS
    #   ekrani) acik kaliyor ve bu bir BORC, kayitli.
    #
    # SONUC: 9 yazim · 13 cift · 20 -> 7. Ucu de acilis sahnesinde:
    #   aydin↔sirbistan 6,97 · ceneviz↔teke 3,44 · eflak↔teodoro 5,06
    # bosna  #8f7d5b → #90f3f3  (toplu tur)
    "bosna": ("Bosna Krallığı", "#90f3f3"),
    "arnavutluk": ("Arnavutluk",             "#f95ac3"),
    "yunanistan": ("Yunanistan",             "#20e0c0"),
    "romanya":    ("Romanya",                "#6c6912"),
    "karadag":    ("Karadağ",                "#18a818"),
    # ═══ KIZILDENİZ/HABEŞ/ARABİSTAN KÜMESİ — 11 renk BİRLİKTE değişti ═══
    # (RENK oturumu, 2026-08-03 · koordinatör onaylı · üç turda çözüldü)
    #
    # 🔴 KÖK SEBEP: bu köşede ON BİR yakın-nötr toprak tonu yan yana duruyordu
    # ve aralarında ON YEDİ çakışma vardı (en kötüsü hicaz↔sammar ΔE 0,8 —
    # pratikte AYNI RENK). Üstelik BEŞİ aynı zamanda GÖRÜNMEZDİ (altlıktan
    # ΔE < 15). Baltık'ta çözülen sorunun aynısı, iki katı büyüklükte.
    # Köprüler SABİT tutuldu: `memluk` (Anadolu+Tunus'a bağlı) · `italya`.
    #
    # ⚠️ İLK İKİ TURUM REDDEDİLDİ, ikisi de kendi kusurumdu:
    #   tur 1  eşik 15 (gerekli 12) + ton cezası 0,05 (en düşük)
    #          → ortalama ton kayması 62,5°, aile korunan 6/11.
    #          "Kimliği savurmak da bir maliyet" yazıp cezayı en düşük ayarda
    #          bırakmışım; üç puanlık pay karşılıksız harcanıyordu.
    #   tur 2  ton cezası yükseltildi → DOYGUNLUK denetimden çıktı:
    #          `hicaz` S 0,08 ile GRİYE düştü (aynı gün `almanya` için
    #          "gri = veri yok" kuralını yazmıştım) ya da S 1,00'e fırladı.
    #   tur 3  doygunluk YUMUŞAK CEZADAN SERT SINIRA çevrildi (0,20 ≤ S ≤ 0,90)
    # 📌 DERS (üçüncü tekrarı, `babur` ve `hicaz` ile birlikte):
    #   HER ZAMAN GEÇERLİ OLMASI GEREKEN ÖLÇÜT, CEZA DEĞİL SÜZGEÇ OLMALI.
    #   Ceza pazarlık eder, süzgeç etmez.
    #
    # 🔴 VE "BÖLGENİN TOPRAK KİMLİĞİ KORUNAMAZ" HÜKMÜM YANLIŞ ÇIKTI:
    #   korunabiliyor. On birin ON BİRİ kendi ton ailesinde kalıyor
    #   (ortalama kayma 11,4°) VE 17 çakışmanın 17'si kapanıyor VE beşi
    #   görünür oluyor. Hükmü ölçmeden vermiştim.
    #
    # ÖLÇÜM: eşik 12 (kapanmanın istediği; tavan 18 idi, ZORLANMADI) ·
    #   17/17 kapandı · altlıktan en dar 15,4 · doygunluk aykırısı 0
    "yemen":      ("Yemen İmamlığı",         "#9fb454"),
    "umman":      ("Umman",                  "#5b9e8f"),
    # ↑ Kızıldeniz kümesi (bkz. `yemen` üstündeki blok) · kayma  5,6° · pay 14,0 · altlık 27,8
    "suud":       ("Suûdî / Vehhâbî",        "#304b0f"),
    # ↑ Kızıldeniz kümesi (bkz. `yemen` üstündeki blok) · kayma 11,0° · pay 14,3 · altlık 26,4
    "sammar":     ("Şammar (Hâil)",          "#ba6f15"),
    # TDV ASÎR: Mondros'tan sonra bölge Osmanlı idaresinden çıktı; Ebhâ'da
    # Hasan b. Muhammed Âiz'in emirliği kaldı, 1920'de Abdülazîz b. Suûd
    # Ebhâ'yı zaptetti. Bu 15 ay yazılı olmadığı için Asîr yaylası boştu.
    "aiz":        ("Âiz Emirliği (Ebhâ)",     "#00897b"),
    # Lahsa 1670'te Benî Hâlid'e kaybedildi, 1795'te Suûî́lere geçti; arada
    # hiçbir sahip yazılı olmadığı için bölge haritada boş kalıyordu.
    # ↑ Kızıldeniz kümesi (bkz. `yemen` üstündeki blok) · kayma 18,8° · pay 14,0 · altlık 16,3
    # benihalid  #729f6f → #9c815a  (toplu tur)
    "benihalid": ("Benî Hâlid Emirliği (Lahsa)", "#9c815a"),
    # Benî Hâlid'den ÖNCEKİ üç yüzyıl da boştu — daha doğrusu `iran` yazıyordu.
    # Kullanıcının kendi gözlemi (parti-0001/H-0001): "Arabistan yarımadasında
    # da iran diye bölgeler var." Doğu Arabistan hiçbir dönemde İran değildi.
    # TDV CEBRÎLER: 820/1417'de Seyf b. Zâmil kurdu (son Cervânî'yi tasfiye
    # ederek), merkez Lahsâ, 931/1524-25'te sona erdi.
    "usfuri":     ("Usfûrîler (Benî Usfûr)", "#e09858"),
    "cebri":      ("Cebrîler (Benî Cebr)",   "#d1601f"),
    # Umman kıyısı (Cülfâr, Şârika) Portekiz'den önce de `iran` yazıyordu.
    # TDV UMAN: Portekiz 1507'den itibaren sahil şehirlerini aldı; öncesinde
    # bölgede Nebhânîler hüküm sürüyordu.
    # 🟡 İNCELTİLECEK: Cülfâr limanının Hürmüz Krallığı'na tâbiiyeti
    #    literatürde var ama TDV'de ayrı madde yok — kaynaklanınca ayrılır.
    # ═══ AFRİKA BOYNUZU / SUDAN KÜMESİ — RENK 2, 7 Ağustos 2026 ═══
    # Koordinatör "habesistan · funj · somali · adal dörtlüsünü tek küme
    # olarak çöz" dedi. ÖLÇTÜM: küme dört değil **27 kimlik** — çekirdeğin
    # 600 km'si taranınca Kızıldeniz'in iki yakası, Nûbe, Uman ve sömürge
    # gövdeleri de içeri giriyor.
    #
    # 🔴 VE İÇİNDE BEŞ EŞİK ALTI ÇİFT VARDI — `renk_olc` BEŞİNİ DE GÖREMİYOR:
    #     kaffa     ↔ sidamo     ΔE  2,8  (202 km) · İKİSİ DE 1390-1897 SAHNEDE
    #     mehdi     ↔ tunciler   ΔE 10,7  (123 km)
    #     mehdi     ↔ memluk     ΔE 10,3  (  0 km)
    #     ingiltere ↔ nebhani    ΔE 10,4  (  0 km) · eşzamanlı 1281-1515
    #     fransa    ↔ portekiz   ΔE  9,6  (  5 km) · İKİSİ DE ÇÖZÜLEMEZ, aşağıda
    #   Hiçbiri Voronoi komşusu DEĞİL ⇒ `komsuluk()` çifti hiç kurmuyor ⇒
    #   denetim "0 çakışma" diyor. Ölçüt "hücreler değiyor mu"; oysa iki gövde
    #   değmeden de aynı ekranda yan yana durur.
    #   📌 `kaffa ↔ sidamo` bu körlüğün en saf hâli: **ΔE 2,8**, yani neredeyse
    #      aynı renk, ve beş yüzyıl boyunca ikisi de sahnede.
    #
    # ⇒ Taşınacaklar, her ihlalin UCUZ tarafı (ölçüldü):
    #     kaffa   ← `sidamo` #7b1fa2 paylaşımlı grup (brunei · konbaung ·
    #               ryukyu · yakub-beg), onu oynatmak dördünü de etkilerdi
    #     nebhani ← `ingiltere` çözülemez düğüm
    #     mehdi   ← TEK taşımayla İKİ ihlal kapanıyor (memluk + tunciler)
    #     somali  ← TEK taşımayla İKİ maruziyet kapanıyor (adal + habesistan)
    #     funj    ← funj ↔ habesistan
    #   `B15` tavan kuralı: beşi birbirinin de engeli.
    # SONUÇ: kaffa↔sidamo 2,8 → 60,9 · ingiltere↔nebhani 10,4 → 19,6 ·
    #   mehdi↔memluk 10,3 → 18,8 · mehdi↔tunciler 10,7 → 35,9 ·
    #   adal↔somali 12,0 → 58,1 · habesistan↔somali 12,2 → 37,2 ·
    #   funj↔habesistan 12,2 → 28,9
    # ⚠️ AÇIK KALAN: `fransa ↔ portekiz` ΔE 9,6 · 5 km. İKİSİ DE ÇÖZÜLEMEDİ
    #   (fransa 135 engel, portekiz 107 — paletin en kısıtlı iki düğümü).
    #   Sömürge üsleri her kıtaya komşu. Ayrı bir işin konusu; bildirildi.
    "nebhani":    ("Nebhânîler (Uman)",      "#60121b"),
    # ↑ Kızıldeniz kümesi (bkz. `yemen` üstündeki blok) · kayma 22,5° · pay 14,3 · altlık 28,1
    "hicaz":      ("Hicaz Krallığı",         "#78360c"),
    # Doha'nın 1913-1916 arası 1193 günlük sahipsizliğini kapatan kimlik
    # (Değişmez 1b'nin tek açık boşluğuydu). 29 Temmuz 1913 Osmanlı-İngiliz
    # mukavelesi Osmanlı'yı Katar'dan çekiyor, 3 Kasım 1916 İngiliz-Katar
    # antlaşması himayeyi kuruyor; arada Âl Sânî şeyhliği kendi başına.
    # devletler.js'te kayıt zaten vardı (id:katar, 1868-1923), eksik olan renkti —
    # renksiz kimlik bölgeyi BOYAMAZ ve üretimde "UYARI boya:" satırı bastırır.
    # Renk ölçüldü: 1913-1916 körfez kutusunda sahnede iran (18 nokta-dönem),
    # suud (6), ingiltere (6), umman (3), OSMANLI (2). Bindirilmiş ΔE —
    # ingiltere 16,1 · umman 18,2 · sammar 25,4 · hicaz 25,5 · Osmanlı tâbi 26,4.
    # Körfezin bütün komşuları toprak/zeytin tonunda; mavi kasten seçildi.
    "katar":      ("Katar (Âl Sânî)",        "#e078b8"),
    # ═══ BAHREYN (Âl Halîfe Şeyhliği) — ÇAPRAZ İBERYA'nın zincirini açar ═══
    # (RENK oturumu, 2026-08-04 · devletler.js:1787 · 1783-01-01 → 1923-10-29)
    #
    # 🔴 ANAHTAR ADI DÜZELTİLDİ: koordinatöre `alihalife` diye gelmişti ve bana
    #   öyle geçirildi. `devletler.js`te `alihalife` diye KAYIT YOK; kimliğin
    #   id'si **`bahreyn`**. O adla yazsaydım hiçbir verinin atıfta bulunmadığı
    #   ölü bir anahtar üretilir, `bahreyn` renksiz kalır ve beklenen zincir
    #   yine açılmazdı.
    #   📌 `zaporojye` deseninin TERSİ: orada kimlik vardı, yok sanıyorduk;
    #     burada kimlik var ama BAŞKA ADLA aranıyordu. İkisi de "depoda olanı
    #     doğrulamadan yeni üretmek" ailesinden — bugün beşinci vaka.
    #   ⇒ KURAL: bir anahtar, KAYNAĞINDA GÖRÜLMEDEN yazılmaz. `git grep` bir
    #     saniye; ölü anahtar aylarca yaşar.
    #
    # ÖLÇÜM — körfez paletin en kalabalık köşelerinden (12 renkli engel).
    #   Komşular ÖLÇÜLDÜ (lon 48-57 · lat 24-30 · 1783-1923 sahnede olanlar):
    #     iran 15 · kacar 15 · suud 12 · benihalid 8 · OSMANLI 6 ·
    #     ingiltere 6 · umman 4 · katar 1   (+ cebri · sammar · hicaz)
    #   L* 66,3 · C* 21,8 (palet medyanı) · ton 297,8 · S 0,62 (medyan)
    #   en yakın komşu: `ingiltere` ΔE 13,5
    # ⚠️ DAHA İYİ PALET UYUMLU BİR ADAY REDDEDİLDİ (#5466de): en yakını
    #   `katar`a 12,1 — eşiğin TAM üstünde. Bu köşede bugün `hicaz↔sammar 0,8`
    #   vakası çıktı; eşiğin tam üstünde durmak, eşiğin üstünde durmak değil.
    #   1,4 puanlık pay farkı burada ucuz.
    #
    # 🔴 GÖVDE YOK (`d:"bahreyn"` 0 kayıt) — renk ÖNCE giriyor ki PETEK/NOKTA
    #   hücreyi açabilsin (`don-kazak` deseni; `zaporojye`nin "künye var gövde
    #   yok" hâli tekrarlanmasın).
    #   ⇒ İKİ ŞEY ERTELENDİ, ikisi de gövde gelince yapılacak:
    #     ① komşu kümesi VARSAYIM — `renk_olc` gerçek komşuluğu ölçecek,
    #        görünmez/çakışma sayıları ARTMAMALI
    #     ② MARUZİYET (sınır uzunluğu) ölçülemedi — gövdesiz kimlikte o eksen
    #        kör. `renk_cikti.py` gövde gelince bakacak.
    "bahreyn":    ("Bahreyn (Âl Halîfe Şeyhliği)", "#4a48be"),
    # ↑ Kızıldeniz kümesi (bkz. `yemen` üstündeki blok) · kayma 30,4° · pay 12,2 · altlık 15,4
    "funj":       ("Func (Sennâr) Sultanlığı","#ed5a96"),
    # ↑ Kızıldeniz kümesi (bkz. `yemen` üstündeki blok) · kayma  0,6° · pay 12,2 · altlık 25,6
    "habesistan": ("Habeşistan",             "#4e3f39"),
    # ↑ Kızıldeniz kümesi (bkz. `yemen` üstündeki blok) · kayma  5,2° · pay 12,0 · altlık 25,9
    "adal":       ("Adal / Harar",           "#786c0c"),
    # ↑ Kızıldeniz kümesi (bkz. `yemen` üstündeki blok) · kayma  0,1° · pay 12,0 · altlık 18,2
    # ═══ AFRİKA — BEŞ KİLİT RENGİ, tek parti, 8 Ağustos 2026 ═══
    # Beşinin de künyesi VAR ama BOYALAR'da YOKTU ⇒ `§8` gereği
    #   boyanmazlardı ve NOKTA EMİLME yazamıyordu. Renk veriden ÖNCE.
    # ENGEL: veride 0 dönemleri var ⇒ komsuluk() ölçemez. Coğrafî
    #   çekirdek + kimliğin KENDİ penceresinde 1500 km'deki eşzamanlı
    #   palet kimlikleri. B15: beş kalemlik parti ⇒ TAVANA çıkıldı.
    #   Parti içi en dar: 28.0  ·  havuz 170550
    # 🔴 `luba ↔ lunda-imparatorlugu` AYRI MUAMELE: bitişik, eşzamanlı,
    #   ve Lunda'nın siyasî modeli doğrudan Luba'dan türedi. Kullanıcı
    #   o ilişkiyi okurken iki gövdeyi ayırt edememek en kötüsü.
    #   ⇒ 12 eşiği YETMEZ, hedef 25 kondu. (`bugis ↔ gova-makassar` ve
    #     `ava ↔ ayutthaya` ile aynı sınıf: eşik gevşetilmez, SIKILAŞTIRILIR
    #     ve gerekçesi veride değil KRONOLOJİDEDİR.)
    # svahili-sehirleri — 1000→1698 · pay 30.6 · engel 7 · geçen 121614 · C* 28.0 = %72
    # ═══ VERİDE KULLANILAN AMA RENKSİZ DÖRT KİMLİK ═══
    # 8 Ağustos 2026. Koordinatör BEŞ kimlik saydı; `renk_fark` ④
    #   DÖRT TANE DAHA buldu ve bunların kovası DAHA AĞIR:
    #     ötekiler  künyeli-renksiz            → sessiz borç
    #     bunlar    VERİDE KULLANILIYOR + renksiz → `§8`: BOYANMIYOR
    #   Yani haritada hâlihazırda DELİK vardı. Nöbetçi 2 → 4 diye
    #   büyüdüğünü de gösterdi (NOKTA EMİLME yazarken doğdular).
    # 🔴 VE `luba ↔ lunda` ÖZEL ÇİFTİ ANCAK ŞİMDİ KURULABİLDİ:
    #   `luba` yazılırken `lunda`nın rengi YOKTU ve kısıt SESSİZCE
    #   ATLANDI (`if rk in BOYALAR` dalı hiç çalışmadı, 'ÖZEL ÇİFT'
    #   satırı basılmadı). ⇒ **Bir kısıt 'uygulanamadı' diye sessiz
    #   geçilirse, UYGULANMIŞ SANILIR.** Çare: `assert` — kurulamayan
    #   özel kısıt artık çözücüyü DURDURUYOR.
    # kongo-kralligi — pay 31.6 · engel 6 · geçen 117174 · C* 20.3 = %39
    "kongo-kralligi": ("Kongo Krallığı", "#f09cf3"),
    # lunda-imparatorlugu — pay 32.3 · engel 7 · geçen 91052 · C* 27.5 = %65
    #   `luba`tan ΔE 60.7 (hedef ≥ 25 — Lunda'nın siyasî modeli
    #   doğrudan Luba'dan türedi; kullanıcı o ilişkiyi okurken
    #   iki gövdeyi ayırt edememek en kötüsü)
    "lunda-imparatorlugu": ("Lunda İmparatorluğu", "#0345cf"),
    # ndongo — pay 33.7 · engel 6 · geçen 126356 · C* 11.4 = %12
    "ndongo": ("Ndongo Krallığı (Angola)", "#0f3f36"),
    # avustralya — pay 36.8 · engel 7 · geçen 95851 · C* 27.9 = %71
    "avustralya": ("Avustralya Milletler Topluluğu", "#f9b169"),
    "svahili-sehirleri": ("Svahili Şehir Devletleri (Kıyı)", "#f684f6"),
    # umman-zengibar — 1698→1923 · pay 24.7 · engel 10 · geçen 73111 · C* 28.1 = %73
    "umman-zengibar": ("Umman-Zengibar Sultanlığı", "#f98160"),
    # loango — 1550→1883 · pay 28.0 · engel 8 · geçen 103557 · C* 11.1 = %12
    # 🔴 loango #240c4e → #e0f40c — `fransa-cumhuriyet` ile ΔE 5,7 idi.
    #   Bu çift PARTİ 1/2/3'ün hiçbirinde yoktu; `yerlesimler_e9353f`
    #   bağlanınca `loango` veriye indi (nokta 2527 → 2589) ve Voronoi
    #   komşuluğu doğdu. İki renge de dokunulmamıştı — `renkler.py`nin
    #   başlığındaki *"palet VERİNİN fonksiyonudur"* uyarısının ikinci
    #   canlı vakası (birincisi aynı gün `dahomey ↔ portekiz`).
    #   Taşınan taraf KÜÇÜK GÖVDE: Fransa yüksek görünürlüklü, Loango
    #   küçük bir Orta Afrika krallığı.
    #
    # ⚠️ VE İLK ÖNERİM KENDİ SINAVIMI GEÇEMEDİ — `#68d428` çözülmüştü ama:
    #     kanem-bornu ΔE 4,1 · 1.895 km · eşzamanlı
    #     songhay     ΔE 10,2 · 2.667 km · eşzamanlı
    #   İkisi de parti 3'te konan "AYNI EKRAN" bandının içinde
    #   (1500-4000 km + eşzamanlı → ΔE ≥ 12). Sebep: tek kimlik çözerken
    #   `engel_kumesi()` kullanılmıştı ve o YALNIZ Voronoi + 1500 km
    #   bakıyor — bu bandı bilmiyor (10 kısıt kurdu, gerçeği 61).
    #   ⇒ Parti 3'ün kendi ölçütüyle yeniden çözüldü.
    #   📌 `§11`: *"bir REÇETENİN üçüncü yönü vardır — uygulandığında işe
    #     yarıyor mu?"* Reçete kendi testini geçmedi, reçete düzeltildi.
    "loango": ("Loango Krallığı", "#e0f40c"),
    # luba — 1585→1889 · pay 30.2 · engel 7 · geçen 91602 · C* 27.7 = %68
    "luba": ("Luba İmparatorluğu", "#dbf396"),
    # kuba — 1625→1900 · pay 28.3 · engel 8 · geçen 87977 · C* 27.8 = %68
    # 🔴 kuba #0072f6 → #a85a1b — ÖNGÖRÜM ÇÜRÜDÜ, 8 Ağustos 2026
    #   `kosu3-ongoru.json` ④ 'yeni Voronoi çakışması 0' diyordu. ÖLÇÜM 1:
    #     kuba ↔ lunda-imparatorlugu  ΔE 9,06 · 365 km · Voronoi komşusu
    #   🔴 VE İLK TEŞHİSİM DE YANLIŞTI: 'engel kümesi 1500 km yetmedi'
    #     sandım. Ölçüm başka şey söyledi — mesafe zaten 365 km.
    #     Gerçek sebep: `engel_kumesi()` engel adayının VERİDE NOKTASI
    #     OLMASINI şart koşuyordu (`b not in nokta: continue`). İkisi de
    #     AYNI GÜN yazıldı; `lunda` çözülürken `kuba`nın veride noktası
    #     YOKTU ⇒ engel sayılmadı. Sonra Mushenge ve Musumba indi,
    #     komşu oldular ve çizili haritada çakıştılar.
    #   ⇒ **ÖLÇEMEDİĞİNİ ELEYEN BİR SÜZGEÇ, ONU TEMİZ SAYAR.**
    #     `§11`in 'ölçülemedi ≠ temiz' kuralının ENGEL KÜMESİ tarafı.
    #   ÇARE (renk_olc.engel_kumesi): verisi olmayan aday, künyesi örtüşüyor
    #     VE aynı bölgedeyse artık engel sayılıyor — en kötü hâl varsayılır.
    #   ÖLÇÜM: engel 9 · pay 27.8 · eşiği geçen 75311 · lunda'dan 9,06 → 54.5
    "kuba": ("Kuba Krallığı", "#a85a1b"),
    # ═══ BATI · ORTA · GÜNEY AFRİKA — ON KİMLİK, tek parti (RENK AFRİKA) ═══
    # NOKTA AFRİKA İÇ bildirdi (M-0130): `ek32`ye nokta yazılıyor ve bu on
    #   kimliğin rengi YOK ⇒ `§8` gereği bağlandığı an on DELİK doğardı.
    #   Renk veriden ÖNCE yazıldı; sıra `nokta → renk → BAĞLAMA`.
    #
    # 🔴 `renk_olc.oner()` KULLANILMADI ve sebebi ölçüldü:
    #   `oner()` engel kümesini `komsuluk()`ten, yani VORONOİ'den kurar
    #   (renk_olc.py:851). Bu onun veride TEK NOKTASI YOK ⇒ komşu kümesi
    #   BOŞ ⇒ araç kendi uyarısını basıp ("komşusu ölçülemeyen kimlik")
    #   en ayrık rengi verirdi. Yani DAYANAKSIZ.
    #   ⇒ `engel_kumesi()`in kendi talimatı uygulandı (renk_olc.py:706:
    #     "kim'in noktası yok: çözücü kendi ölçer"). Engel kümesi elle
    #     kuruldu: künye penceresi ÖRTÜŞEN + coğrafî zarfı 1500 km içinde
    #     olan palet kimlikleri, artı ölçülemeyen adaylarda EN KÖTÜ HÂL.
    #
    # ⚠️ COĞRAFÎ ZARFLAR VEKİLDİR, ÖLÇÜM DEĞİL — ve kasten GENİŞ tutuldu.
    #   Standart tarihî coğrafyadan (başkent + azamî yayılım) yazıldı:
    #     mali 10-18K/-16,5-4D · songhay 11-20K/-10-4,5D · hausa 9,5-14,5K/
    #     4,5-10,5D · oyo 6,5-10K/1,5-6D · benin 5-7,5K/4-7D · dahomey
    #     6-9,5K/0,8-3,2D · asanti 5-9K/-3,5-0,5D · sokoto 9-15,5K/3-14D ·
    #     kanem-bornu 9,5-17,5K/9,5-19D · zulu -31--26K/28,5-33D
    #   🔴 `ek32` BAĞLANDIĞINDA `renk_olc.py` YENİDEN KOŞMALI — o an gerçek
    #     Voronoi komşuluğu ölçülebilir olacak. Bu satır o borcun kaydıdır;
    #     kayıtsız gecikme, kusurdan ayırt edilemez.
    #
    # 🔴 DÖRT KRİTİK ÇİFT ΔE ≥ 25 — üçü şartnameden, DÖRDÜNCÜSÜ ölçümden:
    #     mali ↔ songhay          97,3   ardıl, aynı coğrafya
    #     oyo ↔ dahomey           48,0   savaştılar
    #     sokoto ↔ kanem-bornu    69,0   komşu
    #     hausa ↔ sokoto          69,2   ← ŞARTNAMEDE YOKTU
    #   Dördüncüsünün gerekçesi KRONOLOJİDE: Sokoto Halifeliği tam da Hausa
    #   şehir devletlerini yıkarak doğuyor (künyeler 1804-1808 örtüşüyor) ve
    #   kullanıcı o cihadı okurken iki tarafı ayırt edebilmeli. `§③`:
    #   "hangisinin hak ettiğini KRONOLOJİ söyler."
    #
    # 🔴 SEÇİM YETİNMECİ — ve ilk denemem bu kuralı ÇİĞNEDİ.
    #   "En ayrık"ı seçen ilk sürüm `#00fc00` saf yeşil ve `#fc00fc` macenta
    #   verdi — yani :894'teki yorumun ADIYLA saydığı iki rengi. Düzeltildi:
    #   önce `uyum` bandı (palete ait ol), SONRA banttan payı en büyük olan.
    #   Tek başına `uyum` da yetmedi: 217.922 adayın binlercesi uyum=0,000
    #   veriyor ve aralarından keyfî seçim beş Batı Afrika kimliğini
    #   ΔE 12,1-12,3 ile yan yana yeşil yapmıştı. `§③`: "12 TABANDIR."
    #
    # ⚠️ SIRA SINANDI — dört ayrı sırayla koşuldu, DÖRDÜ DE ÇÖZDÜ
    #   (en kötü pay 14,3 · 18,0 · 14,7 · 18,1). Yani bu partide "çözülemedi"
    #   YOK ve cinsi sorulmadı. Ama sıra KALİTEYİ değiştirdi: ilk sıra kabul
    #   edilseydi 3,8 ΔE boşa giderdi. İkinci geçiş kuralı burada da tuttu.
    #
    # ÖLÇÜM (10 renk belleğe enjekte edilip `renk_olc.denetle()` koşuldu):
    #   TABAN   0 görünmez · 0 çakışma · 0 aynı-anahtar · 0 aynı-hex · 8 yakın
    #   SONRA   0          · 0        · 0              · 0         · 8
    #   Altlık payı en dar: songhay 25,0 · deniz payı en dar: dahomey 20,1
    #
    # 🔴 VE O BEŞ SAYI BU PARTİ İÇİN BİR ŞEY KANITLAMAZ — kendi raporumu
    #   düzelttim. C13'ün ATEŞLEME yolunu sahte girdiyle zorlayınca çıktı:
    #     mali'ye kongo-kralligi'nin TAM hex'i verildi   → beş sayı SESSİZ
    #     sokoto'ya kanem-bornu'nun TAM hex'i verildi    → beş sayı SESSİZ
    #     (altlık ve deniz dalları ÖTTÜ: görünmez 0 → 1)
    #   Sebep kodda yazılı — renk_olc.py:358 `k not in aralik` ⇒ veride
    #   dönemi olmayan kimlik `çakışan`a değil `ÖLÇÜLEMEDİ`ye gider.
    #   ASIL SAYI:  yakin_renk ölçülemedi  633 → 837  (+204)
    #   ⇒ Bu on rengin delili `denetle()` DEĞİL, yukarıdaki engel kümesi
    #     ölçümüdür (10/10 için eşik altı komşu 0). "Denetim onayladı"
    #     demek yanlış olurdu: denetim onaylamadı, GÖREMEDİ.
    #   📌 `kuba ↔ lunda` dersinin okuyucu tarafı: araç kovayı doğru
    #     ayırmış, beş başlık sayısına bakan BEN kovayı atlamışım.
    #
    # 🔴 KARDEŞ KISITI KÜNYE ÖRTÜŞMESİNDEN BAĞIMSIZ — ilk seçim ÇÜRÜDÜ.
    #   Zarf dayanıklılık sınavı (eşiği 1500→3000→5000 km'ye açıp bozulan
    #   çifti saymak) kendi eşiğimde iki çift buldu:
    #     mali ↔ sokoto           ΔE 0,9    künyeler HİÇ örtüşmüyor
    #     hausa ↔ zulu-kralligi   ΔE 1,2    künyeler HİÇ örtüşmüyor
    #   Kurala göre MEŞRU (bu dosyanın başlığı: "yeter ki hiç komşu
    #   olmasınlar") ve çözücüm kurala harfiyen uyuyordu. AMA:
    #     mali kutusu 10-18°K/-16,5-4°D · sokoto 9-15,5°K/3-14°D → 0 km
    #   İkisi AYNI COĞRAFYADA, farklı çağlarda. Kullanıcı zaman çubuğunu
    #   kaydırdıkça Nijer kıvrımında aynı yeşili arka arkaya görür ve
    #   "değişmedi" sanır. Üstelik bu BEYAN EDİLMİŞ bir paylaşım da değil:
    #   paletin 9 beyanlı hex grubu bilerek aynıdır ve dosyada yazılıdır;
    #   ΔE 0,9 ne ayırır ne de bilerek paylaşılmıştır.
    #   ⇒ Kural ZAMAN eksenine bakıyor, kullanıcı MEKÂN eksenine.
    #     Kardeşler her hâlde ayrıştırıldı; maliyeti sıfırdı (217.922 aday).
    #   ÖLÇÜM: kardeşler arası en dar çift 0,9 → 14,3
    "mali-imparatorlugu":     ("Mali İmparatorluğu",         "#d428d4"),
    "songhay-imparatorlugu":  ("Songhay İmparatorluğu",      "#28d428"),
    "hausa-sehir-devletleri": ("Hausa Şehir Devletleri",     "#d4d428"),
    "oyo-imparatorlugu":      ("Oyo İmparatorluğu (Yoruba)", "#d47028"),
    "benin-kralligi":         ("Benin Krallığı (Nijerya)",   "#4028d4"),
    # 🔴 dahomey #28ccd4 → #d42870, VERİ BÜYÜYÜNCE (16 Ağu, parti 3 sonrası)
    #   Parti 1'de `dahomey`in veride HİÇ noktası yoktu ⇒ `komsuluk()` onu
    #   göremiyordu, engel kümesi yalnız künye+zarf üzerinden kurulmuştu.
    #   `yerlesimler_e9353f` bağlanınca nokta 2527 → 2589 oldu, `dahomey`
    #   veriye indi ve **Voronoi komşusu doğdu**: `portekiz` ΔE 8,2 (eşik 12).
    #   ⇒ `renkler.py`nin kendi başlığındaki uyarının canlı vakası:
    #     *"palet VERİNİN fonksiyonudur — hiçbir renge dokunmadan yeni
    #      çakışma doğabilir."* `git diff`te dahomey satırı DEĞİŞMEMİŞTİ.
    #   ÖLÇÜM: portekiz'den 8,2 → 64,4 · en yakın engel 19,6 · yalnız BU
    #     kimlik yeniden çözüldü, ötekilere dokunulmadı.
    "dahomey":                ("Dahomey Krallığı",           "#d42870"),
    "asanti":                 ("Aşanti İmparatorluğu",       "#28d05c"),
    "sokoto":                 ("Sokoto Halifeliği",          "#2860d4"),
    "kanem-bornu":            ("Kanem-Bornu İmparatorluğu",  "#80d428"),
    "zulu-kralligi":          ("Zulu Krallığı",              "#cca828"),
    # ═══ BAĞLAMA KAPISI — YEDİ KİMLİK (RENK AFRİKA, parti 2) ═══
    # M-0313: sekiz bekleyen dosyanın kullandığı kimlikler `devletler.js` ve
    #   `renkler.py` karşısında sayıldı; yedisinin rengi YOKTU. Bağlama, yeni
    #   noktaların haritayı ANINDA etkilediği tek an — renksiz kimlik o anda
    #   `VERI-YAPISI §8` gereği bölgeyi hiç boyamaz, yani DELİK.
    #
    # 🔴 BEŞİNİN KÜNYESİ DE YOKTU ve EN KÖTÜ HÂL varsayıldı:
    #   künyesi olmayan kimlik "her şeyle örtüşür" sayıldı. ⇒ künyeler
    #   `devletler.js`e yazılınca engel kümesi yalnız DARALIR, genişlemez;
    #   seçim güvenli tarafta kalır ve yeniden çözmek GEREKMEZ.
    #     buganda        künye VAR   1300-01-01 → 1923-10-29
    #     yeni-zelanda   künye VAR   1840-02-06 → 1923-10-29
    #     öteki beş      künye YOK   (mutapa · zimbabve-kralligi · oranj ·
    #                                 transvaal · tui-tonga-imparatorlugu)
    #
    # 🔴 KRİTİK ÇİFTLER — ΔE ≥ 25, üçü de koordinatörün işaretlediği:
    #     mutapa ↔ zimbabve-kralligi   44,2   biri ötekinin ardılı, aynı coğrafya
    #     oranj ↔ transvaal            62,7   komşu ve çağdaş Boer cumhuriyetleri
    #     mutapa ↔ portekiz            62,8   Zambezi'de doğrudan karşı karşıya
    #
    # ⚠️ 180. MERİDYEN — bu parti ONA MARUZ, parti 1 DEĞİLDİ.
    #   `girdi.km()` boylam farkını sarmalamıyor ve mesafeyi BÜYÜK gösteriyor
    #   ⇒ yakın aday uzak sanılır ⇒ ENGEL KAÇIRILIR.
    #     yeni-zelanda   166°D … 179°D        180. meridyenin dibinde
    #     tui-tonga     -176,5°B … -173°B     ötesinde
    #   ⇒ Çözücüde `girdi.km()` KULLANILMADI, sarmalayan haversine yazıldı.
    #   ÖLÇÜM: iki metrikle engel kümesi AYNI çıktı (fark 0) — çünkü ikisinin
    #   de 1500 km içinde palet komşusu yok. ⇒ MARUZİYET gerçek, ETKİSİ sıfır;
    #   ikisi ayrı şeydir ve ikisi de yazılır.
    #   📌 Parti 1 için "maruz değiliz" diye ölçülmüştü ve o DOĞRUYDU. Aynı
    #     soru parti 2'de farklı cevap veriyor ⇒ maruziyet PROJENİN değil
    #     PARTİNİN coğrafyasına bağlı, her partide yeniden sorulur.
    #
    # ⚠️ KARDEŞ KURALININ KAPSAMI COĞRAFÎDİR — parti 1'de uniform uygulanmıştı.
    #   Kural `mali ↔ sokoto`dan doğdu (künyeleri hiç örtüşmüyor ama AYNI
    #   COĞRAFYA ⇒ kullanıcı ikisini arka arkaya görüyor). Gerekçe MEKÂNDI.
    #   Burada uniform hâli en dar çifti `oranj ↔ yeni-zelanda` 12,3'e
    #   çiviledi — arada ~10.000 km var, yani kural HİÇBİR ŞEY KORUMADAN pay
    #   yiyordu. Kapsamı daraltan koşu BAŞLATILDI ve DURDURULDU: üçüncü üretim
    #   koşusuyla aynı işlemciyi paylaşıyordu ve bu parti kritik yolda değildi
    #   (`§7`in "üretim koşarken" kuralının işlemci tarafı).
    #   ⇒ Aşağıdaki değerler uniform kuralla çözülmüş hâldir; hepsi eşiği
    #     geçiyor, en dar çift 12,3. Kapsam daraltması bir SONRAKİ partiye
    #     ertelendi ve bu satır o borcun kaydıdır.
    #
    # ÖLÇÜM (belleğe enjekte edilip `renk_olc.denetle()` koşuldu):
    #   TABAN (337)  0 görünmez · 0 çakışma · 0 aynı-anahtar · 0 aynı-hex · 8 yakın
    #   SONRA (344)  0          · 0        · 0              · 0         · 8
    #   görünürlük 7/7 · C13 altlık ve deniz dalları ÖTTÜ · 4 sıranın 4'ü çözdü
    #   ⚠️ Ve parti 1'in dersi burada da geçerli: bu beş sayı TEK BAŞINA bir
    #     şey kanıtlamaz — yedisinin de veride noktası yok, araç onları
    #     `ölçülemedi` kovasına atıyor. Delil ENGEL KÜMESİ ölçümüdür.
    "buganda":                 ("Buganda Krallığı",          "#24a460"),
    "mutapa":                  ("Mutapa İmparatorluğu",      "#d83428"),
    "zimbabve-kralligi":       ("Zimbabve Krallığı",         "#8c28c8"),
    "oranj":                   ("Oranj Hür Devleti",         "#d8288c"),
    "transvaal":               ("Transvaal Cumhuriyeti",     "#80a424"),
    "tui-tonga-imparatorlugu": ("Tui Tonga İmparatorluğu",   "#dc446c"),
    "yeni-zelanda":            ("Yeni Zelanda",              "#d828c0"),
    # ═══ AMERİKA — 44 KİMLİK, bağlı veride RENKSİZ (RENK AFRİKA, parti 3) ═══
    # M-0371: `yerlesimler_amerika.js` ZATEN `girdi.py`ye bağlı ve 44 kimliği
    #   renksiz. Bunlar yarının borcu değil BUGÜNÜN DELİĞİ: üçüncü koşunun
    #   logunda 265 `UYARI boya: bilinmeyen devlet kimliği` satırı var ve
    #   hepsi bu kümeden — `yeni-ispanya` 41 · `meksika` 36 · `ispanyol-peru`
    #   27 · `inka` 13 · `maya` 10 · `aztek` 9. Kenar kayıtlar değil,
    #   sömürge Meksika ve Peru'nun tamamı.
    #
    # 🔴🔴 `renk_olc.py --oner` BU PARTİYİ ÇÖZDÜ VE ÇIKTISI REDDEDİLDİ.
    #   Araç "çözdüm" dedi; sınandı ve kullanılamaz çıktı:
    #     18 İHLAL (eşzamanlı + <600 km + ΔE<12) · 27 uyarı
    #     inka-imparatorlugu ↔ ispanyol-peru   ΔE 1,9 · 0 km  ← ardıl, aynı yer
    #     gran-kolombiya ↔ ekvador-cumhuriyeti ΔE 1,9 · 0 km
    #     kuyruk düz bir RAMPA: 1,34 · 1,35 · 1,36 · 1,37 …
    #   SEBEP — ve bu bir ALET KUSURU DEĞİL, KAPSAM kusuru:
    #     `komsuluk()` VORONOI tabanlı. Amerika harita penceresinin DIŞINDA
    #     (`box(-12,-11,146,82)`) ⇒ hücre yok ⇒ komşuluk yok ⇒ araç
    #     "yeniler arası komşuluk: 0 çift" deyip 44'ü BİRBİRİNE HİÇ
    #     KISITLAMADI ve aday listesini `uyum` sırasıyla yürüdü.
    #   ⇒ O "0 çift" bir ÖLÇÜM DEĞİL bir ÖLÇÜLEMEDİ. (`§11`: ölçülemedi ≠ temiz)
    #   📌 VE BU OTURUM ÖNCE TERSİNİ İDDİA ETTİ (M-0380/M-0442): *"bu partide
    #     araç ÇALIŞIYOR, 44'ün hepsinin veride noktası var"*. Nokta olması
    #     yetmiyormuş — noktanın PENCERE İÇİNDE olması gerekiyormuş.
    #     Ölçüm doğruydu, ÇIKARIM yanlıştı. Aracın DOĞRULUĞU ölçülmüş,
    #     KAPSAMI ölçülmemişti — `§11`in kendi cümlesi.
    #
    # ⇒ ÇÖZÜM kendi çözücüsüyle yapıldı. Kutular ELLE YAZILMADI, VERİDEN
    #   türetildi (bu partide noktalar var; yalnız pencere dışındalar, ve
    #   mesafe hesabı için pencere gerekmiyor). Mesafe SARMALLI haversine.
    #
    # EŞİK KADEMESİ — tek sayı değil, dört kova:
    #     <600 km + eşzamanlı        ΔE ≥ 30
    #     <600 km + ardışık çağ      ΔE ≥ 25   (`mali ↔ sokoto` dersi)
    #     600-1500 km                ΔE ≥ 15
    #     1500-4000 km + eşzamanlı   ΔE ≥ 12   ← AYNI EKRAN, aşağıya bak
    #     >4000 km                   paylaşım MEŞRU
    #
    # 🔴 "AYNI EKRAN" KOVASI SONRADAN EKLENDİ ve sebebi ölçüldü:
    #   ilk çözüm bütün kısıtları geçti (0 ihlal) AMA en dar çiftler arasında
    #   `bolivya-cumhuriyeti ↔ ekvador-cumhuriyeti` ΔE 0,63 vardı — ikisi de
    #   19. yy Güney Amerika cumhuriyeti, EŞZAMANLI, arada ~2.200 km.
    #   1500 km eşiği onu "uzak ⇒ meşru" saydı.
    #   ⇒ `kaffa ↔ sidamo` dersi (`§11`) tam bunu söylüyor: *"iki gövde
    #     DEĞMEDEN de aynı ekranda yan yana durur."*
    #   📌 Ve sebebi ÖLÇEK: Afrika partisinde kimlikler sıktı, 1500 km bir
    #     kıta parçasıydı. Amerika'da ülkeler kıta ölçeğinde — 2.200 km hâlâ
    #     "aynı ekran". EŞİK EVRENSEL DEĞİL, COĞRAFYANIN ÖLÇEĞİNE BAĞLI.
    #
    # ARDIL ZİNCİRLERİ — Amerika'da ardıllık kural, kullanıcı zaman çubuğunu
    #   kaydırdıkça bunları aynı yerde arka arkaya görüyor. Ölçülmüş ΔE:
    #     aztek → yeni-ispanya → meksika              67,3 · 49,5
    #     inka → ispanyol-peru → peru-cumhuriyeti     80,4 · 30,2
    #     portekiz-brezilyasi → imparatorluk → cumh.  56,8 · 81,8
    #     gran-kolombiya → kolombiya · venezuela · ekvador  44,7 · 36,7 · 48,8
    #     maya → guatemala 60,7 · purepecha → yeni-ispanya 36,3
    #     nahua → aztek 43,3
    #
    # ÖLÇÜM (bağımsız sınav, çözücünün kendi raporuna GÜVENİLMEDİ):
    #     ihlal (eşzamanlı + <600 km + ΔE<12)  : 0
    #     uyarı                                 : 0
    #     ardıl çiftin 12'sinin 12'si           : GEÇTİ (30,2 … 81,8)
    #     "aynı ekran" bandı 197 çift           : eşik altı 0 · en dar 12,1
    #       ⇒ kısıt BOŞ DEĞİL, 197 çift üzerinde gerçekten BAĞLADI (`C13`)
    #     3 sıranın 2'si çözdü, 1'i `ispanyol-peru`da takıldı ⇒ SIRA bağlıyor,
    #       YAPI değil (`§11` üçüncü cins) — yapısal ilan EDİLMEDİ.
    #
    # ⚠️ `romanya-kralligi` BU LİSTEDE ve Amerika'lı DEĞİL. Veride
    #   `d:"romanya-kralligi"` 7 dönem geçiyor; künyesi `harita:"romanya"`
    #   diyor ama motor `uret_petek.py:596`de `s:` anahtarının KENDİSİNİ
    #   arıyor ⇒ BOYALAR'da yoksa boyanmaz. Yani gerçek bir delikti.
    "arjantin-cumhuriyeti":     ("Arjantin Cumhuriyeti",      "#2454d4"),
    "aztek-imparatorlugu":      ("Aztek İmparatorluğu",       "#64c824"),
    "bolivya-cumhuriyeti":      ("Bolivya Cumhuriyeti",       "#c428d8"),
    "brezilya-cumhuriyeti":     ("Brezilya Cumhuriyeti",      "#28d860"),
    "brezilya-imparatorlugu":   ("Brezilya İmparatorluğu",    "#d828a8"),
    "cahokia":                  ("Cahokia",                   "#d8a428"),
    "cherokee":                 ("Çeroki",                    "#2434d4"),
    "chimu-krallik":            ("Chimú Krallığı",            "#d8b428"),
    "choctaw":                  ("Çoktav",                    "#24d424"),
    "colla-krallik":            ("Colla Krallığı",            "#acd424"),
    "creek-konfederasyonu":     ("Krik Konfederasyonu",       "#28d8d8"),
    "diaguita-calchaqui-konfederasyonu": ("Diaguita-Calchaquí", "#d04824"),
    "dominik-cumhuriyeti":      ("Dominik Cumhuriyeti",       "#50dc24"),
    "ekvador-cumhuriyeti":      ("Ekvador Cumhuriyeti",       "#b0d828"),
    "gran-kolombiya":           ("Gran Kolombiya",            "#d84028"),
    "guatemala":                ("Guatemala",                 "#d4a424"),
    "haiti":                    ("Haiti",                     "#2834d8"),
    "haudenosaunee":            ("Haudenosaunee (İrokua)",    "#24d494"),
    "ingiliz-kuzey-amerika":    ("İngiliz Kuzey Amerikası",   "#d8802c"),
    "inka-imparatorlugu":       ("İnka İmparatorluğu",        "#2424d4"),
    "ispanyol-peru":            ("İspanyol Perusu",           "#24d45c"),
    "kolombiya-cumhuriyeti":    ("Kolombiya Cumhuriyeti",     "#248094"),
    "kuba-cumhuriyeti":         ("Küba Cumhuriyeti",          "#d44480"),
    "lupaqa-krallik":           ("Lupaqa Krallığı",           "#d82c74"),
    "mapuche-araukanya":        ("Mapuçe (Arokanya)",         "#7828d8"),
    "maya-sehir-devletleri":    ("Maya şehir devletleri",     "#d828a4"),
    "meksika":                  ("Meksika",                   "#28d898"),
    "muisca-konfederasyonu":    ("Muisca Konfederasyonu",     "#d828d8"),
    "nahua-sehir-devletleri":   ("Nahua şehir devletleri",    "#1c8498"),
    "natchez":                  ("Natchez",                   "#8c24d4"),
    "paraguay-cumhuriyeti":     ("Paraguay Cumhuriyeti",      "#64d828"),
    "peru-cumhuriyeti":         ("Peru Cumhuriyeti",          "#28d0d8"),
    "portekiz-brezilyasi":      ("Portekiz Brezilyası",       "#d89020"),
    "powhatan":                 ("Powhatan",                  "#d84428"),
    "pueblo-bagimsizligi":      ("Pueblo bağımsızlığı",       "#68cc28"),
    "purepecha-imparatorlugu":  ("Purépecha İmparatorluğu",   "#d84884"),
    "romanya-kralligi":         ("Romanya Krallığı",          "#2828d8"),
    "sili-cumhuriyeti":         ("Şili Cumhuriyeti",          "#d8c028"),
    "teksas-cumhuriyeti":       ("Teksas Cumhuriyeti",        "#d84c28"),
    "tututepec-krallik":        ("Tututepec Krallığı",        "#3c10e8"),
    "uruguay-cumhuriyeti":      ("Uruguay Cumhuriyeti",       "#28c48c"),
    "venezuela-cumhuriyeti":    ("Venezuela Cumhuriyeti",     "#748c20"),
    "yeni-ispanya":             ("Yeni İspanya",              "#2864d8"),
    "zapotek-krallik":          ("Zapotek Krallığı",          "#7c501c"),
    # ⚠️ PARTİ 3'ÜN KUYRUĞU — BAĞLAMA YENİ BİR DELİK DOĞURDU (M-0546).
    #   Parti 3 teslim edildiğinde ölçüm "bağlı veride renksiz kimlik: 0"
    #   diyordu ve DOĞRUYDU. Sonra `yerlesimler_0ee15e.js` bağlandı:
    #     bağlı veride kullanılan kimlik  349 → 369  (+20)
    #     bunlardan renksiz                 0 →   1
    #   Yirmi yeni kimliğin ON DOKUZU zaten parti 3'teydi; biri değildi.
    #   📌 Ders: bir renk teslimi "renksiz 0" derken **o ANIN girdi
    #     kümesini** ölçer. Bağlama evreni büyütür ⇒ sayı kendiliğinden
    #     bayatlar. Kusur ölçümde değil, ölçümün TARİHİNDE.
    #     (`§11` "aletin evreni değişince alet sessizce yanılır" — burada
    #      alet değil TESLİM yanıldı, ve aynı sebeple.)
    #   ÖLÇÜM: en yakın engelden ΔE 22,1 · 3 sıranın 3'ü de çözdü ·
    #     `kolombiya-cumhuriyeti` (ayrıldığı devlet) ile ΔE eşik üstü.
    "panama-cumhuriyeti":       ("Panama Cumhuriyeti",        "#24d880"),
    # ═══ `tonga-kralligi` — ZİNCİRİN SON HALKASI (M-0597/M-0610) ═══
    # Kusur değil ZİNCİR: `Değişmez 1c` Lapaha'yı belgesiz sahipsiz buldu
    # (8, tavan 7) → çare `s:` dizisine `d:"tonga-kralligi"` eklemekti →
    # `1c` 8 → 7 ✓ ama o kimlik veride İLK KEZ kullanıldı ⇒ renksiz 0 → 1.
    # `§3.5.1`in birebir vakası: bir uç ölçüldü, ÖTEKİ UÇ açıldı.
    #
    # 🔴 ÖLÇÜT KOMŞULUK DEĞİL, ARDIŞIKLIK — `renk_olc` bunu HİÇ SORMAZ:
    #     tui-tonga-imparatorlugu  f:1220-01-01  t:1845-12-04
    #     tonga-kralligi           f:1845-12-04  t:1923-10-29
    #   Uçları BİTİŞİK, hiçbir gün örtüşmüyor ⇒ araca göre "meşru
    #   paylaşım". Ama İKİSİ DE AYNI NOKTADA (Lapaha): kullanıcı zaman
    #   çubuğunu 1845'e getirdiğinde o noktanın rengi değişecek. Ayırt
    #   edilebilirlik EŞZAMANLILIKTAN değil ARDIŞIKLIKTAN geliyor.
    #   ÖLÇÜM: tui-tonga'dan ΔE 70,4 (`inka → ispanyol-peru` sınıfı).
    #
    # ⚠️ VE SEÇİM ÜÇ KEZ ÇÜRÜTÜLDÜ, ÜÇÜ DE UYGULANMADAN:
    #   ① `engel_kumesi()` ile çözülen aday, "en kötü hâl"i YARIM
    #     uyguladığım için 25 kısıtla bağlıydı — `bonacolsi` (Mantova)
    #     gibi noktasız kimlikler 0 km sayılıp ΔE ≥ 30 dayatıyordu.
    #     `kuba ↔ lunda` çaresi *"künyesi örtüşüyor VE AYNI BÖLGEDEYSE"*
    #     diyor; bölge şartını düşürmüşüm. Düzeltilince kısıt 25 → 5.
    #   ② Sonra paletin TAMAMINA ΔE ≥ 12 dayattım → `#f800f8` SAF MACENTA.
    #     Tam da `renk_olc.py:894`ün uyardığı şey. Ve emsali yanlış
    #     okumuşum: RENK DENİZ'in şartı *"o turda atanmış TÜM renkler"*
    #     yani PARTİNİN İÇİ — tek kimlikte parti yok.
    #   ③ ⇒ Küresel ayrıklık KISIT değil TERCİH oldu. Dört aday yan yana
    #     ölçüldü; `#28d438` her eksende önde:
    #       ardıl 70,4 · uyum 0,009 (neon DEĞİL) · en yakın palet rengi
    #       `songhay` 3,6 ama 18.729 km ve çağdaş bile değil ⇒ MEŞRU.
    "tonga-kralligi":           ("Tonga Krallığı",            "#28d438"),
    # ⚠️ `massina` · `tekrur` — VERİ BEN ÇALIŞIRKEN BÜYÜDÜ (üçüncü kez).
    #   Künyeleri 18:10'da indi, dönemleri veriye girdi ⇒ renksiz 0 → 2.
    #   İkisi de parti 1'in coğrafyasında (Nijer kıvrımı · Senegal), yani
    #   `mali` · `songhay` · `sokoto` ile komşu/ardıl ilişkileri var ve
    #   parti 3'ün kademeli eşiğiyle çözüldü: en dar kısıtlı çift 25,3 ·
    #   3 sıranın 3'ü de çözdü · eşiği geçmeyen çift 0.
    #   📌 Bu, "renksiz 0" ölçümünün ÜÇÜNCÜ bayatlaması. Sayı yanlış
    #     değildi; ÖLÇÜLDÜĞÜ AN doğruydu ve veri o andan sonra büyüdü.
    #     ⇒ Bir renk teslimi tarihsiz okunamaz: "renksiz 0" cümlesi
    #       yanına HANGİ GİRDİ KÜMESİNDE ölçüldüğü yazılmadan eksiktir.
    "massina":                  ("Massina İmâmeti",           "#d4d824"),
    "tekrur":                   ("Tekrûr",                    "#d824d8"),
    "somali":     ("Somali sultanlıkları",   "#1248d5"),
    # ═══ AFRİKA BOYNUZU / SUDAN KÜMESİ — RENK 2, 7 Ağustos 2026 ═══
    # ARAŞTIRMA KÜNYE 3'ün teslimi; künyeler VERİ DEVLET'te yazıldıktan SONRA
    # yazıldı (koordinatör sevki: "künye yazılmadan renk yazma" — §8).
    # Dördünün de veride 0 penceresi var ⇒ `renk_olc.komsuluk()` ölçemez;
    # her biri için coğrafî çekirdeğine en yakın noktanın peteği alınıp O
    # KİMLİĞİN KENDİ PENCERESİNDEKİ komşuları ölçüldü:
    #   evfat     [Ankober]   1285-1415   adal · habesistan · sidamo
    #   dacu      [Darfur]    1200-1400   darfur
    #   tunciler  [Darfur]    1400-1695   darfur
    #   makdisu   [Mogadişu]  1281-1500   somali · travankur · seylan-sinhala
    #
    # 🔴 600 KM EŞİĞİ BU KÜMEDE YETMEDİ — koordinatörün "DSATUR dengesini o
    #   küme içinde ölç" sevki ölçümle doğrulandı. `evfat` ile `makdisu`
    #   arası **1035 km**, yani `AYNI_HEX_ESIK_KM = 600`in dışında ⇒ kural
    #   onları birbirine bağlamıyordu ve ilk tur İKİSİNE DE turkuaz verdi
    #   (#21decf / #2ad5b7). Dördü küme olarak engel sayılınca düzeldi:
    #   küme içi en dar çift 25,1.
    #   📌 Eşik `ayni_hex()` için türetilmişti ("arada başka devletin şeridi
    #      vardır, aynı ekranda bitişik görünmezler"). Ama AYNI EKRANIN AYNI
    #      KÖŞESİNDE duran iki gövde için 600 km az kalabiliyor — Afrika
    #      Boynuzu dar bir kuşak. Eşik iyi bir TABAN; küme bilgisi onu ezer.
    #
    # 🔴 DARFUR ZİNCİRİ — aynı toprakta üç hanedan: dacu → tunciler → darfur
    #   (ve tunciler 1400-1695 ile darfur 1603-1916 ÖRTÜŞÜYOR da).
    #   "Aynı bölgede ardışık olanlar da ayrışmalı" kuralının üç üyelisi:
    #     dacu ↔ tunciler   55,8      dacu ↔ darfur      33,3
    #     tunciler ↔ darfur 45,4      evfat ↔ adal       35,6
    #   ⇒ Kullanıcı zamanı kaydırınca Darfur'un üç devrini üç renkte görecek.
    # ⚠️ Künyelerin `harita:` alanı BOŞ (328 künye tarandı) — renk deliği
    #   kapatır ama dizin penceresinde karşılığı olmaz. VERİ DEVLET'e.
    "evfat":      ("Evfât (İfat) Emirliği",  "#2ad8ba"),
    "makdisu-sultanligi": ("Makdişu Sultanlığı", "#cf69a8"),
    # --- Darfur ve güney Habeş krallıkları (Oturum 16, 2026-07-30) ---
    # Bunlar renkler.py'de tanımsız olduğu için üretim her koşuda 12 satır
    # "UYARI boya: … bilinmeyen devlet kimliği" basıyordu ve dört Darfur
    # yerleşimi (Nyala tek başına 885.889 km²) ile dört Habeş krallığı
    # haritada BOYASIZ kalıyordu — Nühûd, El-Fâşir, Nyala, Cenîne, Bonga,
    # Cimma, Sodo, Yirgalem.
    # ⚠️ Bu köşenin bütün komşuları kahve/tan ailesinden (habesistan #7d5b3a,
    # adal #a08f5b, somali #b5a06b, funj #7d6b4a, nube #6d4c41, mehdi #4e342e).
    # Bu yüzden beşi de kasten SOĞUK tonlardan seçildi; hiçbiri kırmızı
    # değil (kırmızı ailesi Osmanlı'ya ayrılmıştır).
    # Ölçüm — gerçek Voronoi komşuluğu + BİNDİRİLMİŞ ΔE (%30 dolgu, bej altlık),
    # her birinin en yakın komşusuna: darfur 22,0 · kaffa 24,4 · cimma 21,2 ·
    # sidamo 27,5 · vollayta 15,3. Beşi de 12 eşiğinin üstünde.
    # Darfur zincirinin ilk iki halkası (RENK 2, 7 Ağustos 2026 — gerekçe ve
    # ölçüm `evfat` bloğunda; üçü de aynı toprakta ardışık, ayrışmaları şart).
    "dacu":       ("Dâcû (Daju) Hanedanlığı", "#4b21ab"),
    "tunciler":   ("Tunciler (Tunjur) Hanedanlığı", "#b4963f"),
    "darfur":     ("Dârfûr Sultanlığı",      "#2820d8"),
    "kaffa":      ("Kaffa Krallığı",         "#d2ea8d"),
    "cimma":      ("Cimma (Jimma) Krallığı", "#0097a7"),
    "sidamo":     ("Sidamo krallıkları",     "#7b1fa2"),
    "vollayta":   ("Vollayta (Wolaita) Krallığı", "#803020"),
    # --- 1918 sonrası ardıl devletler: Habsburg ve Romanov gövdeleri dağılınca
    # yerine hiçbir sahip yazılmamıştı; Orta Avrupa 1918-1923 karelerinde boştu.
    # cekoslovakya  #5d4037 → #930c5d  (toplu tur)
    "cekoslovakya": ("Çekoslovakya", "#930c5d"),
    "polonya":      ("Polonya Cumhuriyeti",   "#ab47bc"),
    "yugoslavya":   ("Yugoslavya (SHS)",      "#00695c"),
    # ↓ Baltık kümesi — üçü de değişti (bkz. `isvec` üstündeki blok)
    #   letonya    ton kayması 122,5° — köşenin en kalabalık düğümüydü (4
    #              çakışma), uzağa taşınması dördünü birden kapattı. Ton 13,9°
    #              paletin meşru bandında: altinorda 13,2 · arnavutluk 14,4
    #              zaten orada (Osmanlı şeridi 15-35°, dışında).
    #   litvanya   ton kayması 1,2° — sıcak gri kimliği korundu
    #   finlandiya ton kayması 17,7°
    #   üçünün de C* ve ham doygunluk paletin medyanında; en yakın engel
    #   ΔE 19,0 / 12,5 / 12,2 · altlıktan 25,0 / 16,5 / 17,3
    "letonya":      ("Letonya",               "#c96990"),
    "litvanya":     ("Litvanya",              "#a87b57"),
    # ═══ RYAZAN — RENK 2, 7 Ağustos 2026 ═══
    # Ryazan Knezliği ~1301-1521; Moskova 1521'de ilhak etti. Künye VAR
    # (1129-01-01 → 1521-01-01) ama `harita:` alanı boş — koordinatörün işi.
    # ⚠️ VE BU RENK TEK BAŞINA HİÇBİR ŞEY BOYAMAZ: canlı `Ryazan` noktası
    #   hâlâ `s: rusya 1281-1923` taşıyor (PETEK/NOKTA'nın ödünç aldığı Tula
    #   deseni). `hokand`/`cin-cumhuriyeti`den farkı bu — orada veri kimliği
    #   zaten taşıyordu. Sıra: künye → nokta dönemleri → renk.
    # ÖLÇÜM — kimliğin 0 penceresi olduğu için `Ryazan` NOKTASININ peteği
    #   alındı; 1301-1521 penceresindeki komşuları:
    #     rusya (Moskova 184 km · Tula 146 km · Nijniy Novgorod · Vologda) ·
    #     altinorda · kirim (Tambov · Voronej)
    # 🔴 RUSYA'NIN AİLESİNDE — ve ayrım SALT PARLAKLIKTAN:
    #     rusya  L* 71,3 ton 126,8°      ryazan  L* 88,4 ton 113,1°
    #   İkisi de Rus knezliği ve biri ötekini yutuyor: akrabalık doğru, ama
    #   ayrım şart (220 yıl eşzamanlı ve sınırdaşlar).
    #   ⇒ 1521 ilhakı haritada renk ATLAMADAN, KOYULAŞARAK görünüyor. Bir
    #     knezliğin yutulması tam olarak böyle okunmalı.
    # 📌 Band dışı serbest seçim ölçüldü (#1b54e4, pay 34,3) ve REDDEDİLDİ:
    #   `rusya`dan ΔE 46,3 — Ryazan'ı Rus dünyasının DIŞINDAN bir devlet gibi
    #   gösterirdi. Pay zaten 20,3 ile fazlasıyla yeterli.
    # ÖLÇÜM: rusya 20,3 · lur-i-buzurg 21,5 · litvanya 22,6 · don-kazak 22,9 ·
    #   nogay 22,9 · kirim 28,6 · altlıktan 30,6 · C* 28,5 = paletin %75'i
    "ryazan":       ("Ryazan Knezliği",       "#cce787"),
    "finlandiya":   ("Finlandiya",            "#99a857"),
    # ═══ NORVEÇ TAŞINDI — RENK 2, 7 Ağustos 2026 · yine VERİ kaynaklı ═══
    # 🔴 `_ek12` (İzlanda) bağlanınca `norvec` #5c6bc0 ile `portekiz`
    #   #6b8ac9 **komşu oldu** — ΔE 7,4, eşiğin çok altında. İkisi de renk
    #   değiştirmedi; Kuzey Atlantik'e iki nokta girdi ve Voronoi onları
    #   birbirine bağladı.
    # 📌 VE BU TAM OLARAK ÖNGÖRÜLEN ŞEYDİ: `izlanda`yı yazarken ölçüp
    #   bildirmiştim — "İzlanda'nın peteği İskandinavya'ya değil GÜNEYE
    #   uzanıyor, komşuları Britanya ve İber". O petek Norveç ile
    #   Portekiz'in arasındaki koridoru açtı. `cungar` dersinin üçüncü
    #   vakası: **palet verinin fonksiyonudur.**
    # ⇒ Hangisinin taşınacağı ölçüldü ve cevap tartışmasız:
    #     portekiz  49 komşu (paletin EN KISITLI düğümü — dünya çapındaki
    #               ticaret üsleri her kıtaya komşu) · en iyi pay 15,1 ·
    #               yalnız 732 aday
    #     norvec    12 komşu · en iyi pay 17,6 · 19.101 aday
    #   Ucuz olan taşındı.
    # ÖLÇÜM: ingiltere 17,6 · hollanda 18,2 · danimarka 20,1 · ispanya 26,3 ·
    #   portekiz 27,6 · altlıktan 23,8 · C* 24,2 = paletin %66'sı
    # ⚠️ Osmanlı kırmızı şeridi (15-35°) dışlandı: şeritsiz ilk aday
    #   `#e799b1` ton 25,2 ile tam içine düşüyordu.
    # ⚠️ BEYAN: `vollayta` ile #5c6bc0 paylaşımı BOZULDU (aşağıda güncellendi).
    #   İzleyen yok — `vollayta` (Habeşistan) `portekiz`e komşu değil, yani
    #   çakışma grubun değil tek üyenin sorunuydu. Yeni renkten ayrımı
    #   ΔE 27,1, yani ikisi zaten ayrık.
    "norvec":       ("Norveç",                "#e76690"),
    # ═══ ESTONYA — RENK 2, 6 Ağustos 2026 ═══
    # `data/yerlesimler_ek11.js` (Tallinn · Narva · Tartu · Pärnu) bu rengi
    # bekliyordu. Ödünç `rusya` yalnız 5 yıl 8 ay sürerdi ama YAZILMADI:
    # canlı Riga 1918-11-11'de letonya'ya, Viipuri 1917-12-06'da
    # finlandiya'ya geçiyor — Estonya Rus kalsaydı harita 1919'da
    # "Letonya ve Finlandiya bağımsız, arasındaki Estonya hâlâ Rus"
    # gösterirdi. 📌 Ödüncün ölçüsü SÜRE değil, komşusuyla ÇELİŞKİ.
    # ÖLÇÜLEN KOMŞULUK — 3 komşu, üçü de renkli, üçü de 1918-1923'te sahnede:
    #   letonya ΔE 24,8 | rusya ΔE 30,8 | finlandiya ΔE 39,6
    #   (soft: polonya 23,6 · almanya 23,8 · lehistan 27,7 · isvec 29,9 ·
    #    litvanya 31,6 — hiçbiri ölçümde bitişik çıkmadı, yine de engel sayıldı)
    #   altlıktan ΔE 32,4 · C* 13,0 = paletin %15'i (soluk uçta ama bandın
    #   içinde; p10 = 9,7). Baltık kümesi zaten nötre yakın çalışıyor.
    # ⚠️ devletler.js `estonya` künyesi 1918-02-24 → 1923-10-29 · ek11 ile
    #   BİREBİR aynı (CLAUDE.md §3.5 ömür kontrolü ✓).
    "estonya":      ("Estonya",               "#88e8e0"),
    # ═══ İZLANDA — RENK 2, 6 Ağustos 2026 ═══
    # `data/yerlesimler_ek12.js`in İKİ İzlanda kaydı (Reykjavík · Akureyri)
    # için; Grönland ikilisi sahipsiz, kimlik istemiyor. Dosyanın öteki
    # şartı — batı kenarının −25'e açılması — 4 Ağustos'ta L kutusuyla
    # KARŞILANDI, geriye yalnız bu renk kalmıştı.
    # ÖLÇÜLEN KOMŞULUK — 4 komşu (Kuzey Atlantik hücreleri uzağa uzanıyor):
    #   ispanya ΔE 18,4 | ingiltere ΔE 24,0 | portekiz ΔE 31,0 |
    #   irlanda ΔE 48,6 | (soft danimarka 29,7 · norvec 31,9 · isvec 36,3)
    #   altlıktan ΔE 27,2 · C* 23,9 = paletin %56'sı
    # 📌 TUĞLA KIRMIZISI TERCİH DEĞİL, ÖLÇÜM SONUCU. Osmanlı ailesine yakın
    #   durması rahatsız edici geldi (tâbi'den ΔE 16,5) ve ton aileleri tek tek
    #   tarandı: 30-60° tuğla 17,4 · 0-30° macenta 13,9 · 180-210° turkuaz 13,0.
    #   Üç aile kaldı, geri kalan bütün tonlar eşiğin altındaydı. En geniş payı
    #   veren aile buydu; estetik kaygı ölçüye yenildi. Osmanlı ile hiçbir gün
    #   komşu değil (İzlanda 1918-1923, Osmanlı Akdeniz'de).
    #
    # 🔴 YAZILMADI — KÜNYE BEKLİYOR. Renk ÖLÇÜLDÜ ve HAZIR; satır aşağıda
    #   yorumda. `devletler.js`te `izlanda` künyesi HİÇ YOK (sibir'den farkı
    #   bu: orada eksik künye var, burada künyenin kendisi yok) ⇒ §3.5 ömür
    #   kontrolü YAPILAMADI, tarih yalnız ek12'den alındı (1918-12-01,
    #   Danimarka ile kişisel birlik altında egemen krallık).
    #   VERİ DEVLET künyeyi açınca yorum kalkar.
    #
    # 🟢 YAZILDI — 6 Ağustos 2026 akşamı, koordinatör künyeyi üstlenince.
    #   Güncel veriyle (1800 nokta) yeniden sınandı, komşuluk DEĞİŞMEDİ:
    #   ispanya 18,4 · ingiltere 24,0 · portekiz 31,0 · irlanda 48,6
    #   altlıktan 27,2 · C* 23,9 = paletin %56'sı
    #   ⚠️ En yakın engel aslında OSMANLI tâbi (16,5) — ama Osmanlı ile
    #      İzlanda hiçbir gün komşu değil, eşiğin üstünde kalması yeterli.
    #   📌 Koordinatörün listesi komşuları `norvec` · `danimarka` diyordu;
    #      ölçümde İKİSİ DE ÇIKMADI. Kuzey Atlantik'te İzlanda'nın peteği
    #      İskandinavya'ya değil GÜNEYE uzanıyor — komşuları Britanya
    #      adaları ve İber yarımadası. Renk ikisinden de ayrık (danimarka
    #      29,7 · norvec 31,9), karar değişmiyor; ama liste ölçümle
    #      uyuşmuyor ve bu, nokta yoğunluğunun az olduğu yerlerde peteğin
    #      SEZGİYE AYKIRI uzandığının bir örneği (`CLAUDE.md §2`).
    "izlanda":      ("İzlanda",               "#b4483f"),
    # --- İtalya birliğinden (1861) önceki sahipler ---
    # === SON PARTI (RENK 2, 7 Agustos 2026) -- gerekce ve olcum ===
    # Dokuz kimligin de veride 0 penceresi vardi => komsuluk() olcemez; her
    # biri icin cografi cekirdegine en yakin noktanin petegi alinip O
    # KIMLIGIN KENDI PENCERESINDEKI komsulari olculdu.
    # Engel = olculen komsular + 600 km icindeki HER palet kimligi + Osmanli
    #         ikilisi + PARTIDEKI OTEKI SEKIZ.
    # 🔴 Dokuzu birbirinin engeli sayildi ve 600 km ARANMADI. Gerekce olculdu:
    #   kural savoya(Torino) <-> imereti(Kutaisi) 3000 km'yi baglamiyordu ve
    #   ilk tur IKISINE DE ayni laciverti verdi (#12129f / #1221ae); ayni sey
    #   bonacolsi / gurcistan-dem-cum'da acik yesille oldu. Kirk partisinde
    #   tam ayirma COZULEMEZ oluyordu (29/40), ama dokuz tanede havuz 156k --
    #   bedeli sifir, sigortasi gercek. Olcut gevsemedi, siki tarafa alindi.
    # SONUC: 9/9 - en dar pay 14,6 - kardesler arasi en dar 14,9.
    # ARDIL CIFTLERI (koordinatorun asil kaygisi) -- hepsi olculdu:
    #   savoya <-> sardinya 42,0 | floransa <-> toskana 16,4 (0 km!)
    #   bonacolsi <-> mantua 25,3 (0 km) | imereti <-> gurcistan 47,2 (0 km)
    #   gurcistan-dem-cum <-> gurcistan 38,6 | sanzan <-> ryukyu 33,1
    #   poni <-> brunei 58,8 | irlanda-serbest-devlet <-> irlanda 51,5
    #   astarhan <-> altinorda 18,4
    # ⚠️ Dokuzunun kunyesi VAR (337 kayit) ama `harita:` alani BOS.
    "savoya":       ("Savoya Kontlugu/Dukaligi", "#12129f"),
    "floransa":     ("Floransa Cumhuriyeti",  "#deabd8"),
    "bonacolsi":    ("Bonacolsi (Mantua)",    "#421542"),
    "sardinya":     ("Sardinya-Piyemonte",    "#93392d"),
    "toskana":      ("Floransa / Toskana",     "#b484f3"),
    "milanoduka":   ("Milano Dukalığı",        "#515d9c"),
    # Hartum 1885'te düştükten sonra Sudan 14 yıl Mehdî Devleti'ndeydi;
    # yazılı olmadığı için bölge o pencerede haritada boş kalıyordu.
    # ↑ Kızıldeniz kümesi (bkz. `yemen` üstündeki blok) · kayma  0,1° · pay 20,2 · altlık 15,6
    "mehdi":        ("Mehdî Devleti (Sudan)",  "#eaa8ea"),
    # --- Func Sultanlığı'ndan (1504) önceki Hıristiyan Nûbe krallıkları ---
    # ↑ Kızıldeniz kümesi (bkz. `yemen` üstündeki blok) · kayma 14,2° · pay 16,6 · altlık 26,5
    "nube":         ("Nûbe krallıkları (Makurya-Alve)", "#cf5d33"),
    # --- Orta Asya (Oturum 11) — Hazar doğusu ve Harezm ---
    # Çağatay Hanlığı 1227-1370; Timurlu'nun selefi. Hîve (Harezm) 1511-1920 ve
    # Buhara 1500-1920 Özbek hanlıkları. Türkmen boyları çoğu zaman devletsizdi;
    # Hîve ile İran arasında el değiştiren kıyı şeridi için ayrı kimlik.
    "cagatay":      ("Çağatay Hanlığı",        "#6a1b9a"),
    "hive":         ("Hîve Hanlığı (Harezm)",  "#00695c"),
    # buhara  #4527a0 → #785ae7  (toplu tur)
    "buhara": ("Buhara Hanlığı", "#785ae7"),
    # ═══ HOKAND — RENK 2, 6 Ağustos 2026 · Mâverâünnehir partisinin son engeli ═══
    # Fergana'nın üçüncü hanlığı; Hîve ve Buhara'nın yanındaki boşluktu.
    # Partinin ihtiyaç duyduğu 14 kimlikten 13'ü zaten burada; eksik buydu.
    # ⚠️ VERİDE BUGÜN 0 PENCERE — parti henüz inmedi, bu satır bugün hiçbir
    #   yeri boyamıyor. Bu yüzden komşuluk `renk_olc.komsuluk()` ile
    #   ÖLÇÜLEMEZ (kimlik canlı veride yok ⇒ sıfır komşu ⇒ araç "kısıtsız"
    #   sanır). Engel kümesi elle kuruldu: hanlığın 1710-1876 ömrü boyunca
    #   sahnede olabilecek herkes.
    # 🔴 VE ZAMAN SÜZGECİ ŞART — ilk turda 20 Orta Asya kimliğini zaman
    #   sormadan engel saydım, pay 13,8'de tıkandı ve yalnız 3 ton ailesi
    #   sağ kaldı. Künyelerden örtüşme ölçülünce BEŞİ DÜŞTÜ (timurlu
    #   1370-1507 · mogulistan …1680 · yarkent-hanligi 1514-1705 ·
    #   altinorda · kazan …1552 — hiçbiri 1710'u görmüyor) ve pay
    #   13,8 → 23,4'e çıktı, 9 ton ailesi açıldı.
    #   📌 Projenin kendi kuralı: "aynı haritada var" YETMEZ, aynı ANDA
    #      olmalı (renk_olc.py:38). Fazla temkin de bir ölçüm hatasıdır —
    #      eşiği gevşetmek kadar, gereksiz sıkmak da yanlış cevap verir.
    # ÖLÇÜM — 17 eşzamanlı engel + Osmanlı ikilisi; en yakın engel ΔE 23,4:
    #   rusya 23,4 | safevi 23,7 | qing-hanedani 23,9 | nogay 23,9 |
    #   kazak-hanligi 26,5 | iran 30,1 | kacar 32,5 | hive 33,4 |
    #   buhara 39,9 | cungar 40,0 · altlıktan 21,0 · C* 23,1 = paletin %54'ü
    # ⚠️ `devletler.js` künyesi VAR (id `hokand` · 1710-01-01 → 1876-02-19)
    #   ama `harita:` alanı **BOŞ** — `sibir` ile aynı durum. Künyelerin
    #   239'u dolu, 63'ü boş; boş olan haritaya BAĞLANMAZ. Parti inmeden önce
    #   VERİ DEVLET'in `harita:"hokand"` yazması gerekiyor, yoksa
    #   `denetle_yayin` "dizinsiz harita kimliği" der. RENK 2 bildirdi.
    "hokand":       ("Hokand Hanlığı",         "#b4603f"),
    # ⚠️ Eski #8d6e63 iki sorun cikariyordu (Oturum 11 olctu): iran'in #b5885b
    # tonuna ham DeltaE 22.7 — bindirilmis halde ~7.6, ve ikisi 1860-1881 arasi
    # Kopet Dag boyunca DOGRUDAN sinirdas. Ayrica timurlu ile BIREBIR ayni hex'ti.
    "turkmen":      ("Türkmen boyları",        "#20d820"),
    # ═══ MERÎNÎLER — RENK 2, 7 Ağustos 2026 ═══
    # 🔓 Fas'ın 1196-1549 katmanını açar. Künye 1196-01-01 → 1549-01-01 ve
    #   `fas` künyesi tam orada başlıyor (1549-01-01) — zincir kesintisiz.
    # ÖLÇÜM (2133 nokta): komşu `fas` · 600 km'de 9 palet kimliği ·
    #   en yakın engel ΔE 21,0 · C* 27,8 = paletin %69'u
    #   ARDIL AYRIMI: fas'tan **ΔE 42,0** — 1549 geçişi net.
    # ⚠️ `sadi` (1549-1659) HENÜZ YAZILMADI: künyesi yok. Geldiğinde ÜÇÜ
    #   BİRLİKTE ölçülmeli (`merini` · `sadi` · `fas` aynı toprakta ardışık)
    #   ve o gün `sadi` ile `fas` künyelerinin ÖRTÜŞMESİ de sorulmalı —
    #   bugün `fas` 1549-1923, `sadi` 1549-1659 olarak anılıyor, yani ikisi
    #   aynı pencereyi paylaşır görünüyor. Koordinatöre bildirildi.
    "merini":     ("Merînîler (Fas)",        "#0f24b1"),
    # ═══ SA'DÎLER — RENK 2, 7 Ağustos 2026 akşamı ═══
    # Fas'ın ÜÇÜNCÜ katmanı. Künye 1549-01-01 → 1659-01-01 (TDV `sadiler`
    # canlı, VERİ DEVLET doğruladı). Üç katman aynı toprakta ardışık:
    #   merini 1196-1549 → sadi 1549-1659 → fas 1549-1923
    # ÖLÇÜM: komşu `fas` · `ispanya` · 600 km'de 9 palet kimliği ·
    #   en yakın engel ΔE 23,9 · C* 21,6 = paletin %45'i
    #   ÜÇ KATMAN BİRBİRİNDEN: merini↔sadi 24,8 · sadi↔fas 37,2 ·
    #   merini↔fas 42,0  ⇒ kullanıcı üç devri üç renkte görecek.
    # ⚠️ ÖRTÜŞME ÇÖZÜLMEMİŞ: `sadi` 1549-1659 ile `fas` 1549-1923 aynı
    #   pencerede başlıyor. VERİ DEVLET ölçtü — `fas`ın kendi kronolojisi
    #   (1666) ile TDV (1659) arasında 7 yıl fark var ve `fas`a dokunulmadı.
    #   Kasıtlı değil, ÇÖZÜLMEMİŞ. Renk bunu beklemiyor: iki gövde zaten yan
    #   yana çizilecek, ayrışmaları şart — ve ayrışıyorlar (37,2).
    "sadi":       ("Sa'dîler (Fas)",         "#10b0b8"),
    "fas":        ("Fas",                    "#9e6b5b"),
    # --- Beylik öncesi Anadolu'nun sahipleri (kullanıcı tespiti: 1288 haritasında
    # beylikler yanlış; hepsi 1281'de başlıyordu, gerçek kuruluşları onlarca yıl
    # sonra. Doğru tarihlere çekilince yerlerini bu devletler dolduruyor.) ---
    # TDV: Anadolu Selçuklu Devleti 1308'de sona erdi (II. Mesud'un ölümü).
    # ↑ Anadolu kümesi (bkz. `candar` üstündeki blok) · ton kayması  0,2°
    "selcuklu":     ("Anadolu Selçukluları",  "#d878a8"),
    # Trabzon Rum İmparatorluğu 1204-1461, Komnenos hanedanı — Bizans'tan AYRI.
    # 🔴 DEĞİŞTİ (RENK oturumu, 2 Ağustos). Eski #00838f `dulkadir` ile BİREBİR
    # AYNI hex'ti (ΔE 0,0) ve dönemleri örtüşüyor (1337-01-01 → 1350-01-01).
    # ⚠️ ÖLÇTÜM: petek komşusu DEĞİLLER. Yani dosya başındaki "paylaşım sorun
    #   değildir, yeter ki komşu olmasınlar" kuralına göre bu paylaşım MEŞRUDU
    #   ve dosya başı onu meşru diye sayıyordu. Yine de değiştirildi, çünkü:
    #   en yakın noktaları 312 km ve İKİSİ DE ANADOLU'DA — 1340 kesitinde aynı
    #   ekranda iki özdeş turkuaz gövde olarak okunurlar.
    # 📌 Bu, bu oturumun ①. dersinin doğrudan uygulaması: Voronoi komşuluğu
    #   görsel karışmanın TAMAMINI yakalamıyor. Kural "komşu değilse serbest"
    #   diyor; ölçüt bundan DAHA GENİŞ olmalı. (Aynı boşluğu MOTOR 2 de gördü
    #   ve 600 km eşikli dedektörü yazdı, 54a080f.)
    # Değişen uç: ikisi de 8 komşu; `dulkadir` Osmanlı kuruluş coğrafyasının
    # yerleşik beylik renk ailesinde, `trabzon-rum` daha serbest.
    # ÖLÇÜM: L* 80,8 · C* 13,9 (%31 yüzdelik) · ton 172,1° (kayma 13,1° —
    #   turkuaz kimliği korundu) · en yakın engel ΔE 12,0 · altlıktan 18,6
    #   · ham doygunluk S 0,48 = paletin MEDYANI
    "trabzon-rum":  ("Trabzon Rum İmparatorluğu", "#6010e0"),
    # Kilikya Ermeni Krallığı 1198-1375; Çukurova'nın Ramazanoğulları öncesi sahibi.
    # ↑ Anadolu kümesi (bkz. `candar` üstündeki blok) · ton kayması  0,3°
    "kilikya-ermeni": ("Kilikya Ermeni Krallığı", "#a26fff"),
    # --- Anadolu beylikleri (Osmanlı kuruluş coğrafyasının fetih öncesi sahipleri) ---
    # ↑ Anadolu kümesi (bkz. `candar` üstündeki blok) · ton kayması  0,1°
    "karaman":    ("Karamanoğulları",         "#5133ab"),
    # Eski #8f6b3a Ceneviz'e (#8a6b4a) ΔE 9.5, Hamîd'e 12.8, Ahi'ye 14.5 mesafedeydi.
    # Germiyan sahnede 15 devletle sınırdaş — Anadolu'nun en kalabalık köşesi.
    # ↑ Anadolu kümesi (bkz. `candar` üstündeki blok) · ton kayması  0,2°
    # germiyan  #3cc3db → #1eeaf3  (toplu tur)
    "germiyan": ("Germiyanoğulları", "#1eeaf3"),
    # ↑ Anadolu kümesi (bkz. `candar` üstündeki blok) · ton kayması  0,0°
    "aydin":      ("Aydınoğulları",           "#488d7b"),
    # Eski #6b8f4a, 60 km ötedeki Karesi'ye (#6b9e5b) ΔE 7.5 idi — iki beylik
    # haritada tek gövde gibi görünüyordu.
    # saruhan  #b34da5 → #6f097b  (toplu tur)
    "saruhan": ("Saruhanoğulları", "#6f097b"),
    # Eski #3a7d8f, Venedik'in turkuazına (#4a8a8f) ΔE 9.2 idi; Ege'de ikisi
    # sürekli yan yana duruyor. Venedik köklü renk olduğu için Menteşe taşındı.
    "mentese":    ("Menteşeoğulları",         "#83b34d"),
    # ↑ Anadolu kümesi (bkz. `candar` üstündeki blok) · ton kayması 17,8°
    "hamid":      ("Hamîdoğulları",           "#6f8448"),
    # TDV TEKEOĞULLARI: Hamîdoğulları'ndan ayrılan kol; Dündar Bey'in fethinden
    # sonra Antalya kardeşi Yûnus Bey'e verildi (~1321) ve ayrı beylik doğdu.
    # Antalya bu tarihten sonra Hamîd değil TEKE toprağıdır.
    # ↑ Anadolu kümesi (bkz. `candar` üstündeki blok) · ton kayması  0,0°
    "teke":       ("Tekeoğulları",            "#574212"),
    # ═══ ANADOLU BEYLİKLERİ KÜMESİ — 15 renk BİRLİKTE değişti ═══
    # (RENK oturumu, 2026-08-03 · koordinatör onaylı · ①'den SONRA yeniden ölçüldü)
    #
    # 🔴 KÖK SEBEP: Anadolu'nun küçük ve bitişik gövdeleri birbirinden
    # ayrışmıyordu — 17 çakışma (en kötüsü karaman↔kilikya-ermeni ΔE 3,3).
    # Köprüler SABİT: `memluk` · `altinorda` · `napoli` · `arnavutluk` · `timurlu`.
    # `memluk`un iki köprü çakışması (memluk↔teke · hamid↔memluk) BURADA kapandı —
    # çünkü teke ve hamid oynadı, memluk kıpırdamadı.
    # 📌 KURAL (iki bağımsız vakayla ayakta): köprüyü sabit tutmak, ona bağlı
    #   çakışmaları kapatmayı ENGELLEMİYOR — yalnız köprünün ÖTEKİ ucunu
    #   bozmamayı garanti ediyor.
    #
    # 🟢 SARSINTI NEREDEYSE SIFIR: ortalama ton kayması 1,5° · 15/15 kimlik
    #   ±20° içinde. `teke` · `aydin` tonlarını BİREBİR koruyor.
    # 📌 NEDEN BU KADAR UCUZ (① 11,4° idi): bu kümenin hiçbiri GÖRÜNMEZ değildi.
    #   Yalnız birbirlerinden ayrışmaları gerekiyordu ve bu, tonu hiç
    #   değiştirmeden parlaklık/kroma ile çözülüyor.
    #   ⇒ GENELLEME: GÖRÜNMEZLİK TONU ZORLAR, ÇAKIŞMA ZORLAMAZ.
    #
    # ⚠️ `selcuklu` SONRADAN EKLENDİ: kendi çakışma listem onu KAÇIRMIŞTI.
    #   Betiğim yalnız kimlik↔kimlik bakıyordu; `denetle()` OSMANLI ikilisine de
    #   bakıyor ve `selcuklu ↔ OSMANLI tâbi` ΔE 9,8'i orada yakaladı.
    #   📌 "Denetimin kapsamı da bir ölçüdür" — yanlış kümeye bakan denetim
    #   yanlış cevabı kendinden emin verir. Bu, o dersin üçüncü tekrarı.
    #
    # ÖLÇÜM: eşik 12 · 17/17 kapandı · altlıktan en dar 18,9 · doygunluk aykırısı 0
    # candar  #7896ff → #7b90f0  (toplu tur)
    "candar": ("Candaroğulları", "#e03018"),
    "dulkadir":   ("Dulkadiroğulları",        "#00838f"),
    # ↑ Anadolu kümesi (bkz. `candar` üstündeki blok) · ton kayması  0,4°
    "ramazanoglu":("Ramazanoğulları",         "#2d483c"),
    # karesi  #6b9e5b → #72b7f0  (toplu tur)
    "karesi": ("Karesioğulları", "#d86018"),
    "katalan":    ("Katalan Dukalığı (Atina-Neopatras)", "#9e8f3a"),
    # --- Fetret Devri (1402-1413): şehzade payları ---
    # Ankara Savaşı'ndan sonra tek bir Osmanlı gövdesi kalmadı; ülke şehzadeler
    # arasında bölündü. Bu dönemde yerleşimler "Osmanlı" (d) yerine ilgili
    # şehzadenin kimliğiyle (s) boyanır ki paylar haritada ayrı ayrı görünsün.
    # Renkler, aynı anda sahnede olan Anadolu beyliklerinin tonlarından
    # kasten uzak seçildi.
    # "Timurlu idaresi" ne demek olduğu haritada anlaşılmıyordu (kullanıcı sordu).
    # Ankara Savaşı'ndan sonra Timur, aldığı yerlere kendi valilerini tayin etti;
    # Sivas 1408'e kadar Timurlu valisi Mezid Bey'in elinde kaldı. Ad açıldı.
    "timurlu":         ("Timurlu valiliği",              "#9c7563"),
    # suleyman-celebi  #570012 → #8dd5a2  (toplu tur)
    "suleyman-celebi": ("Emîr Süleyman Çelebi (Rumeli)", "#8dd5a2"),
    "isa-celebi":      ("İsa Çelebi (Bursa)",            "#ff96a5"),
    "mehmed-celebi":   ("Çelebi Mehmed (Amasya)",        "#f90c15"),
    "musa-celebi":     ("Musa Çelebi (Rumeli)",          "#e14e5a"),
    # ⚠️ Eski #7a9e6b, Bulgaristan'ın #7aa06a'sına ΔE 1.8 — pratikte AYNI RENK.
    # Tuna'nın iki yakası 1281-1878 boyunca tek gövde gibi görünüyordu. Yeşil
    # kimlik korundu ama parlaklık/doygunluk ayrıldı: Bulgaristan'a ΔE 33.
    "eflak":      ("Eflak Voyvodalığı",      "#4db34d"),
    "bogdan":     ("Boğdan Voyvodalığı",     "#24905a"),
    "lusignan":   ("Kıbrıs Krallığı (Lüzinyan)", "#8a6ba0"),
    # ⚠️ Orta Anadolu renkleri kasten doygun seçildi: önceki toprak tonları
    # (#a08a6b / #9e8a6b) arazi kabartma katmanının beji ile karışıyor ve
    # "Ankara civarında kimse yok" görüntüsü veriyordu.
    # ↑ Anadolu kümesi (bkz. `candar` üstündeki blok) · ton kayması  0,4°
    # ilhanli  #9f66c3 → #c690ed  (toplu tur)
    "ilhanli": ("İlhanlı Devleti", "#c690ed"),
    # ↑ Anadolu kümesi (bkz. `candar` üstündeki blok) · ton kayması  0,2°
    # eretna  #5dc38a → #8df0ae  (toplu tur)
    "eretna": ("Eretna Beyliği", "#8df0ae"),
    # ↑ Anadolu kümesi (bkz. `candar` üstündeki blok) · ton kayması  0,6°
    "burhaneddin":("Kadı Burhâneddin Devleti","#155412"),
    "artuklu":    ("Artukoğulları",           "#18cca2"),
    # ═══════════════════════════════════════════════════════════════════
    # TOPLU TUR — 26 renk, 53 çift, 8 Ağustos 2026 (RENK 2)
    # ═══════════════════════════════════════════════════════════════════
    # `renk_olc.yakin_renk()` yeni bir kör nokta açtı: Voronoi komşusu
    # OLMAYAN ama eşzamanlı ve 600 km'den yakın çiftler. 73 ihlal buldu ve
    # yığılma tesadüfi değil:
    #     ANADOLU BEYLİKLERİ 37/73    İTALYAN ŞEHİRLERİ 21/73
    # Yani körlük **atlasın en yoğun ve en çok anlatılan coğrafyasında**
    # vuruyordu — kullanıcının Osmanlı'nın doğuşunu okuduğu ekran.
    #
    # YÖNTEM: açgözlü örtü. Her turda en çok çiftte geçen kimlik taşınır,
    #   kapanan çiftler düşer, tekrarlanır. Engel kümesi `engel_kumesi()`
    #   (Voronoi ∪ 1500 km eşzamanlı) — 600 km ile çözmek hedefi ıskalıyor.
    #
    # 🔴 VE ALGORİTMANIN İLK HÂLİ YANLIŞTI: çözülemeyen kimliğin çiftlerini
    #   listeden DÜŞÜRÜYORDU ⇒ "44/73 kapandı" dedi, oysa bir kısmı sadece
    #   atılmıştı. Dahası `ceneviz` çözülemeyince onun 5 çifti de düşüyordu —
    #   oysa çiftin ÖBÜR UCU taşınabilirdi. Düzeltilince: taşınamaz kimlik
    #   işaretlenir, ÇİFTLERİ KALIR, öbür uç denenir. 44 → 53.
    #   📌 Alet kendi tanımına göre doğru rapor veriyordu — tanım yanlıştı.
    #
    # SONUÇ: 26 yazım · 53 çift kapandı · 20 çift AÇIK KALDI.
    # 🔴 AÇIK KALAN 20'NİN İKİ UCU DA TAŞINAMAZ — ve bu YAPISAL, tercih
    #   değil. Palet bu bölgelerde doymuş: 32 kimliğin engel sayısı 40-273
    #   arasında ve 164.506 adayın SIFIRI eşiği geçiyor. Örnekler:
    #     bosna ↔ ceneviz (68/111) · fransa-cumhuriyet ↔ portekiz (69/200)
    #     inancogullari ↔ karaman (54/65) · mentese ↔ sahibata (65/48)
    #   ⇒ Bunlar `KADEMELI_IHLAL_TAVANI`nın kalıcı çekirdeği. Çözümleri
    #     renk değil, ya daha az kimlik ya daha çok nokta (petek küçülünce
    #     bazı çiftler 600 km'nin dışına çıkar).
    # ahiler  #8f7d5b → #f0a260  (toplu tur)
    "ahiler": ("Ahi Birliği (Ankara)", "#f0a260"),
    # --- kullanıcının sorduğu, haritada temsili olmayan beylikler ---
    # cobanogullari  #4a8f8f → #a8331e  (toplu tur)
    "cobanogullari": ("Çobanoğulları", "#a8331e"),
    # Eski #3a6b9e, komşusu Candaroğulları'na (#5b6b9e) ΔE 8.6 idi; Kastamonu ile
    # Sinop 135 km arayla iki ayırt edilemez mavi gövdeydi.
    "pervane":        ("Pervâneoğulları",      "#70c28b"),
    # ↑ Anadolu kümesi (bkz. `candar` üstündeki blok) · ton kayması  0,1°
    "esrefogullari":  ("Eşrefoğulları",        "#8a3069"),
    # inancogullari  #5b4ab5 → #3f0c12  (toplu tur)
    "inancogullari": ("İnançoğulları", "#3f0c12"),
    # sahibata  #8f9e2d → #0c4218  (toplu tur)
    "sahibata": ("Sâhib Ataoğulları", "#0c4218"),
    # ↑ Anadolu kümesi (bkz. `candar` üstündeki blok) · ton kayması  0,3°
    # taceddin  #1b8d36 → #03c0fc  (toplu tur)
    "taceddin": ("Tâceddinoğulları", "#e8a018"),
    # TDV ALÂİYE BEYLİĞİ: 1293'te Karamanoğlu Mecdüddin Mahmud Bey'in eline geçti,
    # o tarihten 1471'de Gedik Ahmed Paşa'nın kuşatmasına kadar kendi bey soyuyla
    # yönetildi. Haritada Karaman'ın içinde eriyordu; ayrı renk verildi.
    "alaiye":         ("Alâiye Beyliği",       "#b0e810"),
    # TDV ORDU (şehir): Bayram Bey'in kurduğu, oğlu Hacı Emîr'in ~1350'de
    # genişlettiği Türkmen beyliği; merkezi Eskipazar. 1398'de Yıldırım'a
    # bağlandı, 1427'de ilhak edildi. Ordu-Ünye kıyısı haritada noktasızdı.
    "haciemir":       ("Hacıemîroğulları (Ordu)", "#ef6c00"),
    "mutahharten":    ("Erzincan Beyliği (Mutahharten)", "#827717"),
    "hafsi":      ("Hafsîler (Tunus)",        "#84bd51"),
    "zeyyani":    ("Zeyyânîler (Tilimsan)",   "#a828d8"),
    # --- Emîr Abdülkādir Devleti (Oturum 14'ün md.23 araştırması, Oturum 16 rengi)
    # Cezayir Ocaklığı 1830-07-05'te lağvedildi ama 27 kayıt `v:"Cezayir Ocaklığı
    # (dayı idaresi)"` etiketini o tarihten SONRA taşıyordu (Tuggurt 24 yıl,
    # Ağvât 22, Biskra ve 6 kayıt 14 yıl). 1830 sonrası orada iki AYRI şey vardı:
    #   DOĞU   — Ahmed Bey, Konstantin'de OSMANLI ADINA hareket ettiğini ilân etti
    #            → `v:` doğru, yalnız etiketi yanlıştı
    #   BATI/İÇ — Emîr Abdülkādir 1832-11-22'de darphaneli, başkentli düzenli bir
    #            devlet kurdu ve OSMANLI'YA DEĞİL, Fas sultanı Abdurrahman'ın
    #            metbûiyetine sığındı → `v:` YANLIŞ, ayrı kimlik şart
    # TDV `cezayir`: Osmanlı 1847'de Cezayir üzerindeki haklarının sona erdiğini ilân etti.
    # ⚠️ NEDEN `k:` DÜZELTMESİ YETMİYOR — Oturum 14'ün kilit tespiti: `k:` alanını
    # motor OKUMAZ (girdi.py kütüğü: "tâbi devletin adı, gösterim için"). Etiket
    # metnini düzeltmek haritanın RENGİNİ hiç değiştirmez; kullanıcı aynı Osmanlı
    # pembesini görmeye devam ederdi. Ayrı kimlik + ayrı hex, düzeltmenin görünür
    # olmasının TEK yolu.
    # Renk ölçüldü: 1832-1847 arası Batı/İç Cezayir kutusunda sahnede olan kimlikler
    # OSMANLI (38 nokta-dönem), fransa (31), ispanya (1); metbûu Fas da sınırdaş.
    # Bindirilmiş ΔE — fransa 19,8 · fas 20,5 · ispanya 23,3 · Osmanlı tonları 26-33.
    "abdulkadir": ("Emîr Abdülkādir Devleti", "#26a69a"),
    # atinadukaligi  #81a86f → #0c3fcc  (toplu tur)
    "atinadukaligi": ("Atina Dukalığı", "#0c3fcc"),

    # Kütahya·Konya·Karaman'ın 1832-1833 `isg:` örtüsü için. Mısır bu atlasta
    # hep Osmanlı tâbii olarak modellendiği için kendi kimliği hiç olmamıştı.
    # ⚠️ Ad `misir` DEĞİL: kimlik ORDUYU/işgalciyi gösteriyor, ülkeyi değil —
    # ileride Mısır'ın kendisi için kimlik gerekirse çakışmasın.
    # 📌 HEX PAYLAŞILIYOR (turkmen #00acc1) ve palet BÜYÜMÜYOR. Meşru, çünkü
    # dosya başındaki kural: paylaşım sorun değildir, yeter ki o devletler
    # tarih boyunca hiç komşu olmasın. Ölçüldü: 1832-1833'te üç hücrenin
    # komşularında sahnede olan kimlik sayısı **1** — yalnız OSMANLI. Engel
    # iki renk (doğrudan #8e0b22, tâbi #b2384a), bindirilmiş ΔE **33,6**.
    # `turkmen` o iki yılda hiçbir komşuda yok ve `kavalali` yalnız o iki yıl
    # var ⇒ komşuluk yapısal olarak imkânsız, ihlal üretilemez.
    # 📌 Bu vaka "ΔE ≥ 25 ulaşılamaz" hükmümü de çürüttü: tavan paletin değil
    # DERECENİN özelliği. macaristan'ın 14 renkli komşusu var → tavan ~14;
    # burada 1 komşu var → 33,6.
    "kavalali":   ("Mısır (Kavalalı Ordusu)", "#20d820"),

    # ---- Bozkır: `yerlesimler_ortaasya2.js` merge'ünden ÖNCE hazır olsun ----
    # Renksiz kimlikle merge edilirse motor "kimliksiz nokta" uyarısı basar; bu
    # yüzden renk önce girer, izin listesi sonra. Dosyada başka renksiz kimlik
    # YOK — altinorda, timurlu ve ilhanli zaten tanımlı (ölçüldü).
    #
    # ⚠️ KİMLİK ADI: kısa `kazak` DEĞİL. Türkçede "kazak" hem Kazak Hanlığı'nı
    # hem Ukrayna kazaklarını karşılıyor ve atlas ikisini de kapsıyor; karışma
    # sessiz olurdu. Merkez oturumun kararı `kazak-hanligi`.
    # ✅ ÇÜRÜK DÜZELTİLDİ (RENK oturumu, 2 Ağustos 2026). Burada
    #    "`yerlesimler_ortaasya2.js` bugün hâlâ `d:"kazak"` yazıyor" yazıyordu.
    #    ÖLÇÜLDÜ, artık doğru değil — dosya merge edildi ve girdi.py okuyor:
    #      d:"kazak-hanligi" 3 · altinorda 3 · iran 3 · rusya 7 · nogay 2 ·
    #      ilhanli 1 · safevi 1 · timurlu 1 · turkmen 1     → kısa `kazak` SIFIR
    #    9 kimliğin 9'u da BOYALAR'da tanımlı. Uyarı geçmişte doğruydu, bugün
    #    okuyanı olmayan bir işe yönlendiriyordu.
    #
    # ✅ BAYAT ΔE BLOĞU KALDIRILDI (aynı oturum). Burada "dolgu %30" ile
    #    ölçülmüş kazak-hanligi/nogay ΔE sayıları duruyordu; dosya başındaki
    #    §41 o parametrenin YANLIŞ olduğunu (gerçek 0.44) söylüyordu — yani
    #    blok kendi dosyasının uyarısıyla çelişiyordu. Sayılar SİLİNDİ,
    #    düzeltilmedi: yeniden ölçmeden yenisini yazmak aynı hatanın tekrarı
    #    olurdu (§B3 — dokümandaki sayı ölçümün fotoğrafıdır ve eskir).
    # 📌 Ve blokta "bu dosyada ΔE hesaplayan hiçbir fonksiyon yok, koştur-ve-
    #    doğrula mümkün değil" yazıyordu. O DA GEÇTİ: `arac/renk_olc.py`
    #    (1 Ağustos, ef4a018) tam bunun için yazıldı. Ölçüm artık
    #    `py arac/renk_olc.py` ile tekrarlanabilir; elle taşınan sayıya
    #    gerek yok. Bu yüzden buraya yeni sayı YAZILMIYOR — araç var.
    "kazak-hanligi": ("Kazak Hanlığı",        "#ad1457"),
    "nogay":         ("Nogay Ordası",         "#f9a825"),

    # ═══ AVRUPA PARTİSİ — 15 kimlik (RENK oturumu, 2 Ağustos 2026) ═══
    # `data/yerlesimler_avrupa.js`in 237 noktasının 235'i BOLGE kutusunun
    # içinde; kutuya dokunmadan çizilir. Önündeki tek engel bu 15 rengin
    # olmamasıydı. Renk ÖNCE girer, izin listesi (girdi.py) sonra — renksiz
    # kimlikle merge edilirse motor "bilinmeyen devlet kimliği" basar ve
    # bölge BOYANMAZ.
    #
    # 🔴 NEDEN `renk_olc.py --oner` TEK BAŞINA YETMEDİ — ölçüldü:
    #   girdi.py `yerlesimler_avrupa.js`i OKUMUYOR, dolayısıyla bu 15 kimliğin
    #   canlı veride SIFIR noktası var. `--oner` onlara "komşusu ölçülemeyen
    #   kimlik" der ve öneriyi yalnız altlık + Osmanlı ikilisine dayandırır —
    #   yani DAYANAKSIZ. Aracın kendi uyarısı bunu söylüyor (renk_olc.py:269).
    #   ⇒ Komşuluk MERGE SONRASI dünya için kuruldu: canlı 998 + avrupa 237 =
    #     1235 nokta üzerinde gerçek Voronoi + GÜN düzeyinde dönem örtüşmesi.
    #     Renk, merge sonrası dünyada geçerli olmalı; bugünkü dünyada zaten inert.
    #     (arac/*.py değiştirilmedi, yalnız import edildi.)
    #
    # ÖLÇÜLEN KOMŞULUK — yeniler arası 12 çift, birbirinden de ayrışmalı:
    #   aragon↔kastilya · aragon↔navarra · kastilya↔navarra   (İber üçlüsü)
    #   ferrara↔mantua · ferrara↔parma · ferrara↔piza · mantua↔parma ·
    #   piza↔siena                                            (İtalya beşlisi)
    #   belcika↔luksemburg · bretanya↔kastilya · irlanda↔iskocya ·
    #   irlanda↔kastilya
    #
    # 🔴 VE KOMŞULUK KISITI TEK BAŞINA YETMEZ — ilk çözümüm bu yüzden ÇÖPE GİTTİ:
    #   yalnız "komşudan ΔE ≥ 12" uygulanınca komşu OLMAYAN kimliklere hiçbir
    #   kısıt kalmıyor ve yetinmeci tercih hepsini aynı köşeye çöktürüyor:
    #       luksemburg #4baf5a ↔ isvicre #4baf4b   ΔE 3,5   ← pratikte AYNI RENK
    #       altı mavi 182-218° bandında, dört yeşil 133-150° bandında
    #   Brifingin uyarısı tam buydu: "beşi yakın tonda çıkarsa İtalya tek renk
    #   olur ve kimse fark etmez." Voronoi komşuluğu görsel karışmanın
    #   TAMAMINI yakalamıyor: aynı ekranda duran iki gövde komşu olmasa da karışır.
    #   ⇒ EK KISIT: 15'i BİRBİRİNDEN ΔE ≥ 17 (komşuluktan bağımsız).
    #
    # 🔴 EŞİK VERİLMEDİ, ÖLÇÜLDÜ (koordinatör "13,6" rakamını doğrulamadığı
    #   için aktarmamıştı — doğru davranış; ölçtüm ve 13,6 çıkmadı):
    #     kısıtsız matematik tavanı            karşılıklı ΔE 23
    #     ama çözüm UÇLARA kaçıyor: #e808f8 macenta · #28d428 saf yeşil ·
    #     #f01058 ve #e43c1c KIRMIZI (aşağıdaki kuralı çiğniyor) ·
    #     #182840 L*59 bej altlıkta neredeyse siyah
    #     ⇒ 23 matematik tavan, KULLANILABİLİR tavan değil (renk_olc.py:324
    #       aynı tuzağı zaten kaydetmiş: "en ayrık'ı seçmek uçlara kaçıyor")
    #     palet kutusu + kırmızı yasağı ile   karşılıklı ΔE 17   ← UYGULANAN
    #
    # KABUL KUTUSU — mevcut 114 rengin bindirilmiş dağılımından ölçüldü:
    #     L* [63,5 · 80,8]  (p05-p95)      C* [4,9 · 33,0]  (p05-p95)
    #     altlıktan ΔE ≥ 15                komşudan ΔE ≥ 12
    #
    # ⚠️ KIRMIZI YASAĞININ YERİ DE ÖLÇÜLDÜ — iki kez yanlış kurdum:
    #   Önce 20°±22, sonra 20°±30 denedim; ikisi de çözümü kendi sınırına
    #   oturttu (isvicre 43,0° · iskocya 50,6° — hâlâ tuğla kırmızısı). Yasağı
    #   genişletmek sorunu çözmedi, TAŞIDI. Hata yasağın genişliğinde değil
    #   YERİNDEYDİ. Paletin 0-70° bandı ölçülünce gerçek şu çıktı:
    #       19,3 / 21,5   OSMANLI doğrudan / tâbi
    #       30,0-30,3     süleyman·musa·mehmed·isa çelebi ← Fetret payları
    #       ——————————— 32°-63° arası BOŞ ———————————
    #       63,8-69,7     fas · kirim · haciemir · sardinya ← meşru yabancı kahveleri
    #   ve 350-15° bandında YEDİ yabancı devlet ZATEN var: lehistan 359,3 ·
    #   esrefogullari 0,2 · kazak-hanligi 5,2 · selcuklu 7,1 · napoli 8,8 ·
    #   altinorda 13,2 · arnavutluk 14,4
    #   ⇒ Kural kırmızının TAMAMINI değil, Osmanlı ailesinin oturduğu
    #     15-35° şeridini ayırıyor. ±22 yasağı bu yedi MEŞRU rengi de dışlıyor
    #     ve aday havuzunu yanlış yerden kırpıyordu. Uygulanan: 25°±10.
    #
    # DOĞRULAMA (yazmadan önce koşuldu):
    #   15 yeni arasında en dar ΔE   17,0  (navarra ↔ parma)
    #   komşu engelinden en dar ΔE   12,0  (kastilya)
    #   farklı hex 15/15 · mevcut paletle hex çarpışması 0 · kırmızıya düşen 0
    #   küme içi en dar: İtalya 17,4 · İber 33,1 · Kuzeybatı 19,3 · Adalar 37,0
    #   ⇒ "İtalya tek renk olur" riski kapandı; beşlinin en dar çifti 17,4.
    "aragon":        ("Aragon Krallığı",           "#c639b1"),
    "belcika":       ("Belçika",                   "#e81870"),
    "bretanya":      ("Bretanya Dukalığı",         "#36693f"),
    "burgonya":      ("Burgonya Dukalığı",         "#781840"),
    # ferrara  #ae7e4b → #300c93  (toplu tur)
    "ferrara": ("Ferrara Dukalığı", "#300c93"),
    "irlanda-serbest-devlet": ("Irlanda Hur Devleti", "#ea8751"),
    "irlanda":       ("İrlanda",                   "#20a070"),
    "iskocya":       ("İskoçya Krallığı",          "#3633d5"),
    # isvicre  #754bae → #eda2ae  (toplu tur)
    "isvicre": ("İsviçre Konfederasyonu", "#eda2ae"),
    "kastilya":      ("Kastilya Krallığı",         "#4bae4e"),
    "luksemburg":    ("Lüksemburg",                "#4b3f51"),
    # mantua  #2a6fd5 → #0c6393  (toplu tur)
    "mantua": ("Mantua Dukalığı", "#8848d8"),
    # navarra  #c94530 → #f07e69  (toplu tur)
    "navarra": ("Navarra Krallığı", "#f07e69"),
    # parma  #ae4b75 → #0648d5  (toplu tur)
    "parma": ("Parma Dukalığı", "#0648d5"),
    "piza":          ("Piza Cumhuriyeti",          "#2ac9a8"),
    "siena":         ("Siena Cumhuriyeti",         "#636f03"),

    # ═══ ZAPOROJYE — kullanıcı kararından doğdu, Parti 2'nin 16. kimliği ═══
    # KULLANICI: "Ukrayna kazakları ile Türk olan Kazaklar karışmasın."
    # Bu dosya 349. satırda zaten uyarıyordu: Türkçede "kazak" hem Kazak
    # Hanlığı'nı hem Ukrayna kazaklarını karşılıyor, karışma SESSİZ olurdu.
    # devletler.js:1115 kaydı TAM (id:"zaporojye" · 1552-01-01 → 1775-06-16 ·
    # Zaporojye Seçi · 4 kronoloji maddesi); eksik olan yalnız renk + `harita:`.
    # Yeni slug AÇILMADI — aynı kuruma iki kimlik "iki otorite" sınıfıdır.
    #
    # 🔴 ① EKSİK, GÖVDE BEKLENMİYOR: `d:"zaporojye"` hiçbir yerleşim dosyasında
    #   YOK (ölçüldü: 0 kayıt). Zincir üç halkalı — ① yerleşimin d:/v:/s:'inde
    #   kimlik geçmeli (VERİ işi) ② BOYALAR'da renk olmalı (bu satır)
    #   ③ devletler.js harita: (yalnız denetim). Burada ② ve ③ yapıldı, ①
    #   YAPILMADI. ⇒ Üretimden sonra haritada GÖVDE ÇIKMAZ; bu bir hata değil,
    #   veri gelince hazır olsun diye. "Niye çizilmedi" diye aranmasın.
    #
    # KOMŞULAR VARSAYILMADI, ÖLÇÜLDÜ — Dinyeper aşağısı (lon 30-38, lat 46-50,5)
    # 1552-1775 penceresinde sahnede olanlar: OSMANLI 5 dönem · rusya 4 ·
    # lehistan 4 · kirim 1.
    # ⚠️ KISIT SIRALAMASI DÜZELTİLDİ: önce 15 Avrupa renginden ΔE≥17 dayatıldı ve
    #   tek aday kaldı, bedeli kazak-hanligi'ndan ayrışmanın 22,3'e düşmesiydi —
    #   YANLIŞ ÖNCELİK. Kullanıcının isteği tam olarak zaporojye↔kazak-hanligi
    #   ayrımı; 15 Batı Avrupa devleti ise zaporojye ile ne komşu ne aynı
    #   coğrafyada. ⇒ kazakΔE azamileştirildi, ötekilere proje kuralı (12).
    # 📌 Ve 17 zaten ULAŞILAMAZDI: 15 renk kutuyu karşılıklı 17 ile doldurdu,
    #   16. kimlik için tavan 15,0'a düştü. Tavan kimlik sayısıyla düşer.
    #
    # ÖLÇÜM: kazak-hanligi #ad1457'den ΔE 33,0 (proje eşiği 12, kullanıcı için
    # 25 dayatıldı) · komşulardan 18,9 · 15 Avrupa renginden 12,1 ·
    # altlıktan 32,5 · C* 18,6 = paletin MEDYANI (%47 yüzdelik) · S 0,45.
    # Kızıl-magenta `kazak-hanligi` ile menekşe-mavi `zaporojye` tonca da
    # karıştırılamaz — kullanıcının istediği ayrım budur.
    "zaporojye":     ("Zaporojye Kazak Hetmanlığı", "#2048c8"),
    # ═══ DON KAZAK ORDASI — `zaporojye`nin kardeşi, kasten UZAK ═══
    # (RENK oturumu, 2026-08-03 · kimlik VERİ KİMLİK 3'ün, renk ölçüsü RENK'in)
    # devletler.js: don-kazak · 1570-01-01 → 1721-01-01 · Razdory → Çerkassk
    #
    # 🔴 KULLANICI KISITI İKİNCİ KEZ DEVREDE: "Ukrayna kazakları ile Türk olan
    #   Kazaklar karışmasın" demişti; aynı titizlik Dinyeper ile Don arasında
    #   da gerekiyor — ikisi de KAZAK ve bozkırda yan yana çizilecekler.
    #   ⇒ `zaporojye`den ΔE ≥ 25 DAYATILDI (proje eşiği 12). Ulaşılan: 37,2.
    #     zaporojye ton 294,4° (menekşe-mavi) · don-kazak ton 161,6° (yeşil-turkuaz)
    #     133° ton farkı — tonca da karışmazlar.
    #
    # ⚠️ VERİ KİMLİK 3'ÜN ÖNERİSİ (#429cba) ÖLÇÜLDÜ VE GEÇERLİYDİ — reddedilme
    #   sebebi ihlal değil, PALET PROFİLİ:
    #       #429cba  C* 12,1 = %14 yüzdelik  ·  zaporojye'den ΔE 23,2
    #       #4ac4aa  C* 21,9 = paletin MEDYANI ·  zaporojye'den ΔE 37,2
    #   İkisi de bütün eşikleri geçiyor; seçilen, palete daha çok ait olan ve
    #   Kazak ayrımını daha geniş tutan. Ham doygunluk S 0,62 = palet medyanı.
    #
    # 🔴 KOMŞU KÜMESİ VARSAYIM — gövde HENÜZ YOK (`d:"don-kazak"` 0 kayıt).
    #   PETEK/NOKTA iki harita hücresini (Donets · aşağı Don) bu rengi
    #   bekleyerek açmamıştı; renk önce giriyor ki `zaporojye`nin bugün
    #   yaşadığı "künye var gövde yok" hâli TEKRARLANMASIN.
    #   Ölçüm Don havzasında (lon 37-45, lat 46-51 · 1570-1721) sahnede olan
    #   kimliklerden + koordinatörün listesinden kuruldu:
    #       rusya · kirim · OSMANLI · zaporojye · nogay · altinorda · lehistan
    #   ⇒ GÖVDE GELİNCE `renk_olc` GERÇEK komşuluğu ölçecek; o koşuda
    #     görünmez/çakışma sayıları ARTMAMALI. Ertelenmiş doğrulama, yazıldı.
    #   📌 `kalmuk` koordinatörün listesindeydi ama BOYALAR'da YOK — engel
    #     kümesine alınamadı. Kalmuk kimliği bir gün eklenirse bu renk
    #     yeniden ölçülmeli.
    # ÖLÇÜM: L* 80,7 · C* 21,9 · ton 161,6 · komşulardan en dar ΔE 15,7 ·
    #   zaporojye'den 37,2 · altlıktan ayrık · S 0,62
    "don-kazak":     ("Don Kazak Ordası",          "#4ac4aa"),

    # ═══════════ ASYA PARTİSİ — 37/135 (RENK oturumu, 2 Ağustos 2026) ═══════════
    # 🔴 SIFIR YENİ HEX. Palet BÜYÜMÜYOR — hepsi mevcut renklerin paylaşımı.
    # Dosya başı kuralı: "bir rengi birden çok devletin paylaşması sorun
    # değildir, yeter ki o devletler tarih boyunca hiç komşu olmasın."
    #
    # ── ÖLÇÜM: "135 kimlik = 135 renk mi?" — HAYIR ──────────────────────────
    #   yerlesimler_asya.js  344 nokta · 147 kimlik · renksiz 135
    #   eşzamanlılık çizgesi     6.640 kenar · aynı anda en çok 69 kimlik (1514)
    #   GERÇEK KOMŞULUK             672 kenar   ⇒ kromatik sayı 7
    #   + 600 km görsel yakınlık kuralı kenar sayılınca ⇒ YİNE 7
    #   liste boyama (her kimlik kendi renkli komşularından ΔE≥12) ⇒ 11 renk
    #   135/135 atandı · çözülemeyen 0 · ΔE<12 ihlali 0
    # 📌 Zaman tavanı 69'du; komşuluk ekseni 62 düşürdü. Dosya başındaki eski
    #   ölçümle tutarlı (261 kimlik → 8 renk): yeni kimlikler grafiği
    #   yoğunlaştırmıyor, GENİŞLETİYOR.
    #
    # ── ⚠️ ZARF UYARISI — bu ölçüm renk_olc.py ile TEKRARLANAMAZ ────────────
    #   renk_olc.KUTU = BOLGE(-12,1.5,62,62) + paylar = (-25,-5,75,72)
    #   Asya lon 65,71..141,35 ⇒ 344 noktanın 302'si (%88) zarfın DIŞINDA.
    #   Ölçüm scratchpad'de box(-25,-10,155,75) ile yapıldı; arac/*.py'ye
    #   dokunulmadı. `renk_olc.denetle()` Asya çakışmalarını BOLGE açılana
    #   kadar GÖREMEZ — aracın "temiz" demesi bu 37 için DELİL DEĞİLDİR.
    #   🔴 KUTU AÇILDIKTAN SONRA YENİDEN DOĞRULANACAK. Ertelenmiş doğrulama,
    #      atlanmış doğrulama değildir — ama ancak YAZILIRSA. Yazıldı.
    #
    #   🔴 VE İLK ZARFIM DA KUSURLUYDU — kendi uyarıma kendim düştüm.
    #   MOTOR 2 kilitli kutu zarfını verince (box(-25,-17.5,159,74))
    #   karşılaştırdım: Asya'nın en güney noktası KUPANG (Timor, lat -10,18)
    #   benim -10 güney sınırımın DIŞINDA kalmış, hücresi boşalmış.
    #   Kaybolan komşuluk: 4 çift — bali-kralliklari↔yogyakarta ·
    #   banten-sultanligi↔yogyakarta · italya↔travankur · seylan-sinhala↔somali
    #   ⇒ YENİDEN ÖLÇÜLDÜ (kilitli kutu zarfıyla, yalnız bu 37 kimlik için):
    #     İHLAL 0. Dördünün de hiçbiri bu 37'yi ilgilendirmiyor; kusur
    #     SONUCU DEĞİŞTİRMEDİ. Ama kayda geçiyor, çünkü "sonuç değişmedi"
    #     ancak ÖLÇÜLDÜKTEN sonra söylenebilir.
    #   📌 Ders (kendi payıma): zarfı veriye göre değil, ÜRETİMİN KULLANACAĞI
    #     zarfa göre kur. "Yeterince geniş" bir tahmindir; kilitli kutu bir ölçü.
    #
    # ── ① EKSİK, GÖVDE BEKLENMİYOR ─────────────────────────────────────────
    #   yerlesimler_asya.js girdi.py'nin izin listesinde DEĞİL ⇒ bu 37 kimlik
    #   bugün hiçbir nokta boyamaz. uret_petek.py:1564 gövdesi olmayan kimliği
    #   tamamen ATLIYOR, yani üretim maliyeti de sıfır. "Niye çizilmedi" diye
    #   ARANMASIN — veri gelince hazır olsun diye.
    #
    # ── 🔴 NEDEN 135 DEĞİL 37: 98 KİMLİĞİN ADI YOK ─────────────────────────
    #   Renk ataması 135'in 135'i için ÇÖZÜLDÜ ve doğrulandı. Ama BOYALAR
    #   girdisi (ad, hex) çifti ister ve 135'in yalnız 37'sinin `devletler.js`de
    #   kaydı var. Kalan 98 için ad üretmek slug'ı düzeltmek demekti —
    #   "Bengal Sultanligi", "Cin Cumhuriyeti" gibi bozuk Türkçe, üstelik
    #   haritanın LEJANTINDA görünecek. Ad uydurulmadı.
    #   ⇒ 98'lik kalan bir `devletler.js` KAYIT işidir (bu oturumun yetkisi
    #     yalnız `harita:` alanı). Renkleri ölçülmüş ve hazır; kayıtlar
    #     gelince tek adımda girer.
    # ── #6ba0a0  [ASYA · ① EKSİK, gövde yok · zarf(-25,-17.5,159,74) teyitli]  ile paylaşımlı (zeyyani) · 7 kimlik
    "abd":                     ("Amerika Birleşik Devletleri",       "#a828d8"),
    "ayutthaya":               ("Ayutthaya Krallığı (Siyam)",        "#a828d8"),
    "edo-bakufu":              ("Edo (Tokugawa) Şogunluğu",          "#a828d8"),
    "kamakura":                ("Kamakura Şogunluğu (Japonya)",      "#a828d8"),
    "maratha":                 ("Maratha Konfederasyonu",            "#a828d8"),
    "muromachi":               ("Muromachi (Ashikaga) Şogunluğu",    "#a828d8"),
    "siyam-chakri":            ("Siyam Krallığı (Rattanakosin / Chakri Hanedanı)", "#a828d8"),
    # ── #636f03  [ASYA · ① EKSİK, gövde yok · zarf(-25,-17.5,159,74) teyitli]  ile paylaşımlı (siena) · 5 kimlik
    "behmeni":                 ("Behmenî Sultanlığı (Dekken)",       "#636f03"),
    "qing-hanedani":           ("Qing Hanedanı (Mançu)",             "#636f03"),
    "sulu-sultanligi":         ("Sulu Sultanlığı",                   "#636f03"),
    # ═══ ÇİN CUMHURİYETİ — RENK 2, 6 Ağustos 2026 · EN BÜYÜK TEK DELİK ═══
    # 85 pencere · 1911-10-10 → 1923-10-29 · veride canlı, ölçülebiliyor.
    # `§8`: renksiz kimlik ⇒ bölge çizilmez ⇒ **Çin, Cumhuriyet döneminin
    # tamamında haritada delikti.** Tek kalemde en büyük kazanç buydu.
    # ÖLÇÜLEN KOMŞULUK — 11 komşu: abd · almanya · ingiliz-hindistani ·
    #   ingiltere · meiji-japonya · nepal · portekiz · qing-hanedani ·
    #   rusya · san-devletleri · tibet-ganden-phodrang
    #
    # 🔴 QING'İN AİLESİNDE, KASTEN — ve bu bir tercih değil, kullanıcının
    #   kendi kuralının uygulanması. Kural `iran` bloğunda yazılı: aynı
    #   toprak · ardışık zaman · tek çizgi ise renk ATLAMAMALI, yoksa
    #   "üç ayrı devlet gibi" görünür. 1912-02-12'de Qing düşüyor ve AYNI
    #   TOPRAK Cumhuriyet'e geçiyor — kuralın tarifi birebir bu.
    #   ⇒ Aday ton 107°±18 (qing'in bandı) içinden seçildi.
    #   ÖLÇÜM: qing'den ΔE 13,1 (aile — kasten eşiğin hemen üstünde,
    #   safevi↔iran'ın 12,7'si gibi) · rusya 17,2 · nepal 20,2 · abd 23,9
    #   altlıktan 24,3 · C* 28,3 = paletin %74'ü
    # 📌 SERBEST SEÇİM ÖLÇÜLDÜ VE REDDEDİLDİ: #3fb472 (ton 145,7) qing'den
    #   ΔE 22,1 uzaktı — 1912'de Çin zeytin yeşilinden çimen yeşiline
    #   ATLARDI. Üstelik payı da daha kötüydü: onu bağlayan `rusya` 13,8'di,
    #   yani dar çift ALÂKASIZ bir komşuydu. Ailede ise tek dar çift
    #   qing'in kendisi ve alâkasız her komşu ≥17,2. **Hem anlamca hem
    #   ölçüce daha iyi.**
    # ⚠️ KÜNYE YOK — koordinatörün listesi bunu göstermiyordu, ölçtüm:
    #   `devletler.js`te `cin-cumhuriyeti` kaydı HİÇ YOK (yalnız
    #   `qing-hanedani` var, 1636-05-15 → 1912-02-12). Renk deliği kapatır
    #   ama dizin penceresinde karşılığı olmaz. VERİ DEVLET'e bildirildi.
    "cin-cumhuriyeti":         ("Çin Cumhuriyeti",                   "#bab75a"),
    # ═══ MOĞOLİSTAN (Bogd Hanlık) — RENK 2, 6 Ağustos 2026 ═══
    # 7 pencere · künye ✓ 1911-12-29 → 1923-10-29. `_ek19`un 6 noktası
    # (Kerulen · Halhın Gol · Öndörhaan · Dariganga · Bulgan · Mörön) bu
    # rengi bekliyordu; zincirin son üçlüsü mogolistan → cin-cumhuriyeti →
    # mogolistan ve ilki renksizdi.
    # ÖLÇÜLEN KOMŞU 3: cin-cumhuriyeti · qing-hanedani · rusya
    #   joseon 21,0 | mogulistan 21,1 | rusya 29,0 | cin-cumhuriyeti 42,0
    #   altlıktan 31,6 · C* 19,5 = paletin %42'si
    #
    # 🔴 ÇİN'İN AİLESİNE **KONMADI** — ve bu, `cin-cumhuriyeti`nin qing
    #   ailesine konmasının bilinçli TERSİ. Kural ardışıklığa bakar: Qing →
    #   Cumhuriyet aynı devletin devamıdır, renk atlamamalı. Bogd Hanlık ise
    #   Çin'den AYRILMAK için kuruldu; haritanın anlatacağı şey tam olarak
    #   bu ayrılıktır. Aynı aileye koymak, atlasın söylemesi gereken tek
    #   şeyi silerdi. ⇒ `cin-cumhuriyeti`den ΔE 42,0, kasten uzak.
    #
    # ⚠️ İKİ ENGEL ÖLÇÜMLE DEĞİL, MUHAKEMEYLE EKLENDİ — ikisi de tuttu:
    #   ① `meiji-japonya` — komşu DEĞİL, ama ikisi de 1911-1923 Doğu Asya,
    #      yani ekranda yan yana. İlk seçim `#b43fae` idi ve meiji'den
    #      **ΔE 10,6** çıktı: hiçbir denetim ateşlemezdi (komşu değiller),
    #      ama kullanıcı iki macenta lekeyi ayırt edemezdi. `estonya`da
    #      reddettiğim okuma hatasının aynısı. Şimdi 39,9.
    #   ② `mogulistan` (#4254ae, Doğu Çağatay) — 1347-1680, Bogd Hanlık
    #      1911-1923, **hiç eşzamanlı değiller**, yani ΔE kuralı onları
    #      bağlamıyor. Yine de engel sayıldı ve sebebi ters yönde:
    #      **iki slug TEK HARF farklı** (`mogUlistan` / `mogOlistan`).
    #      Benzer renk verseydim `yerlesimler.js`teki bir yazım hatası
    #      HİÇBİR denetimden geçmezdi — ikisi de geçerli kimlik, ikisi de
    #      boyanır, fark yalnız gözle görülürdü. Ayrık renk, yazım hatasını
    #      GÖRÜNÜR kılıyor. Bugün 21,1.
    #      📌 Bu bir renk çözümü değil, renkle alınmış bir SİGORTA.
    #         Asıl çözüm sluglardan birini adlandırmaktır — koordinatöre
    #         bildirildi, `renkler.py`nin işi değil.
    "mogolistan":              ("Moğolistan (Bogd Hanlık)",          "#782088"),
    # 🔴 ÇIKTI DENETİMİNİN YAKALADIĞI KUSUR (RENK, 2026-08-03).
    # `qing-hanedani` ile BİREBİR aynı hex'i (#636f03) taşıyordu — ikisini de
    # ben paylaştırmıştım, çünkü GİRDİ komşuluğu (Voronoi hücreleri) "komşu
    # değil" diyordu. ÇİZİLEN gövdeler ise 1700 kesitinde DEĞİYOR: Çin ile
    # Birmanya sınırında iki devlet ΔE 0,0 ile aynı renkte görünüyordu.
    # ⚠️ Motor hücreleri BİRLEŞTİRİYOR, delikleri dolduruyor, kıyıya kırpıyor —
    #   çizilen gövdelerin komşuluğu Voronoi komşuluğuyla AYNI DEĞİL.
    #   Ölçüldü: çizili haritada 608 değen çift var, 13'ü girdi komşuluğunda
    #   HİÇ YOK. `arac/renk_cikti.py` bu ekseni denetliyor.
    # Az kısıtlı uç seçildi: toungoo 12 girdi komşusu · qing-hanedani 34.
    # ÖLÇÜM: ton kayması 0,2° · pay 12,1 · S 0,52 · altlıktan ayrık
    "toungoo":                 ("Toungoo Hanedanı (Birmanya)",       "#545d2d"),
    "yuan-hanedani":           ("Yuan Hanedanı (Moğol Çin)",         "#636f03"),
    # ── #7b1fa2  [ASYA · ① EKSİK, gövde yok · zarf(-25,-17.5,159,74) teyitli]  ile paylaşımlı (sidamo) · 4 kimlik
    # ⚠️ 5'Tİ, 4 OLDU — `cungar` çıkarıldı (RENK 2, 6 Ağustos). Gerekçe aşağıda.
    "poni":                    ("Poni (Borneo)",                     "#1ee7ea"),
    "brunei-sultanligi":       ("Brunei Sultanlığı",                 "#7b1fa2"),
    # ═══ CUNGAR — GRUPTAN ÇIKARILDI, RENK 2 · 6 Ağustos 2026 ═══
    # 🔴 ÇAKIŞMA VERİDEN DOĞDU, RENKTEN DEĞİL — ve tam da bugün doğdu.
    #   `hokand` rengi yazılınca Mâverâünnehir partisi bağlandı (1729 → 1745
    #   nokta). Yeni noktalar Voronoi komşuluğunu değiştirdi ve `buhara`
    #   #4527a0 ile `cungar` #7b1fa2 **komşu oldular** — ΔE 10,5, eşiğin
    #   altında. Sabahki koşuda bu çift YOKTU; ikisi de renk değiştirmedi.
    # 📌 DERS: bir renk paleti verinin fonksiyonudur. Nokta eklemek, hiçbir
    #   hex'e dokunmadan bir çakışma YARATABİLİR. Bu yüzden parti bağlayan
    #   her koşudan sonra `renk_olc.py` yeniden koşmalı — "renkler değişmedi,
    #   denetim de değişmez" YANLIŞ.
    # ⇒ İkisinden hangisinin taşınacağı ÖLÇÜLDÜ: `cungar` yeni yerinde en
    #   yakın engelden ΔE 14,5 alıyor, `buhara` ise ancak 13,0 (24 komşusu
    #   var, paletin en kısıtlı düğümlerinden). Ucuz olan taşındı.
    # ÖLÇÜM: rusya 14,5 · kuzey-yuan 14,9 · yarkent-hanligi 21,2 ·
    #   babur-imparatorlugu 22,7 · qing-hanedani 28,8 · buhara ≥ 12 ✓
    #   altlıktan 22,6 · C* 20,2 = paletin %45'i
    "cungar":                  ("Cungar Hanlığı (Kalmuk)",           "#3fb4a2"),
    "konbaung":                ("Konbaung Hanedanı (Birmanya)",      "#7b1fa2"),
    "sanzan":                  ("Sanzan (Uc Kralllik, Okinawa)",     "#a008f0"),
    "ryukyu":                  ("Ryukyu Krallığı",                   "#7b1fa2"),
    "yakub-beg":               ("Doğu Türkistan (Yâkub Bey Kâşgar Emirliği)", "#7b1fa2"),
    # ── #00695c  [ASYA · ① EKSİK, gövde yok · zarf(-25,-17.5,159,74) teyitli]  ile paylaşımlı (yugoslavya) · 5 kimlik
    "goryeo":                  ("Goryeo Hanedanı (Kore)",            "#00695c"),
    "hollanda-dogu-hint":      ("Hollanda Doğu Hint Adaları",        "#00695c"),
    "joseon":                  ("Joseon Hanedanı (Kore)",            "#00695c"),
    "majapahit":               ("Majapahit İmparatorluğu (Cava)",    "#00695c"),
    "sih-imparatorlugu":       ("Sih İmparatorluğu (Pencap)",        "#00695c"),
    # ── #2d8f4a  [ASYA · ① EKSİK, gövde yok · zarf(-25,-17.5,159,74) teyitli]  ile paylaşımlı (taceddin) · 2 kimlik
    # ⚠️ 4 → 3 → 2. `meiji-japonya` 6 Ağustos'ta çıktı (gerekçe aşağıda),
    #   `malaka-sultanligi` 8 Ağustos'ta çıktı (#845a12'ye taşındı —
    #   `ace-sultanligi` ile Malaka Boğazı'nın iki yakasında ΔE 0,00 idi).
    # 🔴 VE BU SATIR, AYNI GÜN BU DOSYANIN BAŞINA YAZILAN UYARININ
    #   KENDİ DEĞİŞİKLİĞİMDE ATEŞLEMESİYLE GÜNCELLENDİ:
    #     "renkler.py: BEYAN EDİLEN PAYLAŞIM BOZULDU #2d8f4a —
    #      malaka-sultanligi artık bu hex'i kullanmıyor."
    #   Uyarı sabah yazıldı (*"hex paylaşımlıysa beyan da güncellenir"*),
    #   öğleden sonra **yazarını** yakaladı. ⇒ Bir nöbetçinin değeri,
    #   onu yazanı da bağlamasıdır.
    # 📌 Kalan iki kimlik (`ace-sultanligi` · `ming-hanedani`) paylaşımı
    #   sürdürüyor: Sumatra ile Çin arası ~3.500 km, hiç yan yana gelmezler.
    # ═══ GD ASYA — DÖRT YENİ KİMLİK, tek parti, 8 Ağustos 2026 ═══
    # Dördünün de künyesi VAR (devletler.js 385) ama BOYALAR'da YOKTU ⇒
    #   `§8` gereği boyanmazlardı ve NOKTA GDASYA altı-yedi noktayı
    #   YAZAMIYORDU. Renk veriden ÖNCE geldi — gecikme hiç doğmadı.
    # ENGEL: veride 0 dönemleri var ⇒ komsuluk() ölçemez. Coğrafî
    #   çekirdek noktası alındı, kimliğin KENDİ penceresinde 1500 km
    #   (B kademesi) içindeki EŞZAMANLI palet kimlikleri engel sayıldı.
    #   B15: dört kalemlik parti ⇒ TAVANA çıkıldı (dördü de birbirinin
    #   engeli); havuz 165000 olduğu için bedeli yok. Parti içi en dar: 19.9
    # dogu-sumatra-sultanliklari — Jambi · Siak · Deli · Indragiri — Sumatra'nın doğu kıyısı. Kuzeyde
    #   `ace-sultanligi`, güneyde `palembang-sultanligi`, boğazın karşı
    #   yakasında `cohor` ve `malaka` — dördü de aynı ekranda.
    #   pay 18.1 · engel 27 · eşiği geçen 12463 · C* 12.2 = %14 · ton 3.0
    "dogu-sumatra-sultanliklari": ("Doğu Sumatra Sultanlıkları (Jambi, Siyak, Deli, Indragiri)", "#eaaedb"),
    # pontianak — Borneo'nun batı kıyısı. TDV somut tarih+isim veriyor
    #   ("1772'de Şerif Abdurrahman…") ⇒ nokta oturumu AYRI künye yazdı.
    #   pay 15.8 · engel 28 · eşiği geçen 5751 · C* 18.3 = %26 · ton 115.3
    "pontianak": ("Pontianak Sultanlığı (Borneo)", "#2a4215"),
    # kutai — Borneo doğusu, Mahakam ırmağı. TDV'de yalnız liste düzeyinde
    #   geçiyor ⇒ ayrı künye ama ZAYIF dayanak (nokta oturumunun kaydı).
    #   pay 19.9 · engel 28 · eşiği geçen 13845 · C* 14.5 = %17 · ton 44.0
    "kutai": ("Kutai Sultanlığı (Doğu Borneo)", "#4b0f15"),
    # bugis-kralliklari — Bone · Wajo · Soppeng, Sulawesi güneyi. TDV'de müstakil
    #   çerçeve YOK ⇒ TOPLU künye.
    # 🔴 SAVAŞ ÇİFTİ — `gova-makassar` ile aynı adada, aynı yüzyıllarda ve
    #   SAVAŞ hâlinde (Makassar Savaşı). `ava ↔ ayutthaya` ile aynı sınıf:
    #   kullanıcı savaşı okurken iki tarafı ayırt edememek en kötüsü.
    #   ⇒ 12 eşiği YETMEZ, hedef 25 kondu ve tutturuldu.
    #   pay 16.5 · engel 28 · eşiği geçen 4849 · C* 10.8 = %11 · ton 280.6
    #   `gova-makassar`tan ΔE 25.8
    "bugis-kralliklari": ("Bugis Krallıkları (Bone, Wajo, Soppeng — Tellumpoccoe)", "#0f276f"),
    "ace-sultanligi":          ("Açe Sultanlığı (Sumatra)",          "#2d8f4a"),
    # ═══ GD ASYA — BEŞ CANLI ÇAKIŞMA, tek partide, 8 Ağustos 2026 ═══
    # 🔴 NOKTA GDASYA nokta yazdıkça hücreler küçüldü ve BEŞ Voronoi
    #   çakışması DOĞDU (külliyat 2133 → 2173, iki saat içinde):
    #     ace ↔ malaka  ΔE 0,0   ·  san-fan ↔ toungoo      5,9
    #     banten ↔ malay    8,5  ·  banten ↔ malaka        9,4
    #     campa ↔ palembang 9,7
    # 📌 VE `ace ↔ malaka`YI BİR SAAT ÖNCE ÖNGÖRMÜŞTÜM — künye penceresi
    #   taramasıyla. O sırada VERİ zarfıyla görünmüyordu (eşzamanlı
    #   dönemleri yoktu), künye penceresiyle görünüyordu. Nokta indi,
    #   öngörü GERÇEK oldu. `renk_olc.yakin_renk(kunye=True)` bunun için var.
    # ÖRTÜ: her çiftten en az biri taşınmalı. `malaka` ve `banten` ikişer
    #   çiftte geçiyor ⇒ DÖRT yazımla BEŞ çift kapanıyor.
    #   Her çiftin AZ KOMŞULU ucu taşındı (malaka 6 vs ace 20 · san-fan 11
    #   vs toungoo 22 · palembang 13 vs campa 17) — çok komşulu düğüm
    #   paletin geri kalanını bağlar, onu yerinde bırakmak havuzu açar.
    # ENGEL: Voronoi komşuları + 600 km'deki EŞZAMANLI palet kimlikleri +
    #   partinin kendi içi (B15: dört kalemlik parti ⇒ TAVANA çıkıldı,
    #   havuz 158.201 olduğu için bedeli yok).
    # SONUÇ — beşinin de yeni ΔE'si:
    #   ace ↔ malaka 25,03 · banten ↔ malay 38,37 · banten ↔ malaka 21,01
    #   san-fan ↔ toungoo 19,87 · campa ↔ palembang 19,48   (en dar 19,48)
    # malaka-sultanligi  #2d8f4a → #845a12 — pay 21,0 · engel 14 · C* 26,4 = %64. `ace-sultanligi` ile AYNI HEX'ti
    #     (#2d8f4a, ΔE 0,00) — Malaka Boğazı'nın iki yakası, 855 km.
    #     Malaka taşındı Açe değil: ömrü 111 yıl (1400-1511) vs 407,
    #     ve ardılları (ingiliz-malaya · malay-sultanliklari) ayrı renkte.
    # malaka-sultanligi  #845a12 → #0fbdf0  (toplu tur)
    "malaka-sultanligi": ("Malaka Sultanlığı", "#203080"),
    "ming-hanedani":           ("Ming Hanedanı",                     "#2d8f4a"),
    # ═══ MEİJİ JAPONYA — GRUPTAN ÇIKARILDI, RENK 2 · 6 Ağustos 2026 ═══
    # 🔴 ESKİ #2d8f4a, `rusya` #4f7d4f'ten ΔE 10,2 — EŞİĞİN (12) ALTINDA ve
    #   ikisi ölçülmüş komşu. İkisi de yeşil: Sahalin/Kuriller'de Japonya ile
    #   Rusya yan yana ve neredeyse aynı tonda boyanıyordu.
    # 📌 BU ÇAKIŞMA RENK 2'NİN İŞİ DEĞİLDİ, ZEMİNDE DURUYORDU — üç yeni renk
    #   yazılmadan önce de oradaydı, üç yeni renk SIFIR yeni çakışma getirdi.
    #   Kapatıldı çünkü RENK 2'nin bitiş ölçütü "çakışma 0" diyor ve
    #   `renkler.py` RENK 2'nin dosyası. Zemini kirli bırakıp "bitti" demek,
    #   bir sonraki oturuma bayat bir taban devretmek olurdu (§1.5 dersi).
    # ⚠️ NÜANS — `renk_cikti.py` ÇİZİLİ haritada 0 değen çift buluyor: iki
    #   gövde bugünkü çıktıda birbirine DEĞMİYOR. Yani kusur bugün görünür
    #   değil, POTANSİYEL. Voronoi komşuluğu (renk_olc) değiyor der, çizim
    #   değmiyor der; ikisi ayrışıyorsa doğru davranış SIKI olanı almaktır.
    # ÖLÇÜM — 8 komşu (abd · almanya · hollanda-dogu-hint · ispanya · joseon ·
    #   qing-hanedani · rusya · ryukyu) + Osmanlı ikilisi + aynı çağda sahnede
    #   olan üç yeni kimlik engel sayıldı; en yakın engel ΔE 16,9 ·
    #   altlıktan 26,0 · C* 22,6 = paletin %52'si.
    # 📌 İLK ADAY #3f5db4 (ΔE 23,2) REDDEDİLDİ: bu turda yazılan
    #   `estonya` #3f63b4 ile neredeyse aynı maviydi ve ikisi 1918-1923'te
    #   AYNI ANDA sahnede. Komşu olmadıkları için hiçbir denetim ateşlemezdi
    #   — kural ihlali değil, OKUMA hatası olurdu. Ton aileleri tarandı:
    #   330-360° 16,9 · 0-30° 16,5 · 120-150° 13,8 · 270-300° 12,1.
    # meiji-japonya  #ae3f81 → #1bb790  (toplu tur)
    "meiji-japonya": ("Meiji ve Sonrası Japonya İmparatorluğu", "#1bb790"),
    # ── #b34da5  [ASYA · ① EKSİK, gövde yok · zarf(-25,-17.5,159,74) teyitli]  ile paylaşımlı (saruhan) · 4 kimlik
    "mataram-sultanligi":      ("Mataram Sultanlığı (Cava)",         "#b34da5"),
    # meysur  #b34da5 → #15421e  (toplu tur)
    "meysur": ("Meysûr Sultanlığı (Haydar Ali / Tipu Sultan)", "#15421e"),
    "nguyen-hanedani":         ("Nguyễn Hanedanı (Vietnam)",         "#b34da5"),
    "tibet-ganden-phodrang":   ("Tibet (Dalai Lama Hükûmeti, Ganden Phodrang)", "#b34da5"),
    # ── #00acc1  [ASYA · ① EKSİK, gövde yok · zarf(-25,-17.5,159,74) teyitli]  ile paylaşımlı (turkmen) · 3 kimlik
    "delhi-sultanligi":        ("Delhi Sultanlığı",                  "#20d820"),
    "ingiliz-hindistani":      ("İngiliz Hindistanı (Şirket ve Taç Dönemi)", "#20d820"),
    "ingiliz-malaya":          ("İngiliz Malaya",                    "#20d820"),
    # ── #8d6e63  [ASYA · ① EKSİK, gövde yok · zarf(-25,-17.5,159,74) teyitli]  ile paylaşımlı (timurlu) · 2 kimlik
    "kamboc-kralligi":         ("Kamboçya Krallığı (Post-Angkor)",   "#8d6e63"),
    "vijayanagara":            ("Vijayanagara İmparatorluğu",        "#8d6e63"),
    # ── #0288d1  [ASYA · ① EKSİK, gövde yok · zarf(-25,-17.5,159,74) teyitli]  ile paylaşımlı (darfur) · 1 kimlik
    # 🔴 DÜZELTME: önce `yemen` #b5a05b atanmıştı ve DENETİM YAKALADI —
    # görünmez sayısı 13→14 çıktı. Sebep bendeydi: atama süzgecim adayları
    # "renkli komşulardan ΔE≥12" ile eliyordu ama ALTLIKTAN GÖRÜNÜRLÜĞÜ
    # (≥15) şart koşmuyordu. #b5a05b altlıktan tam 15,0 — sınırda ve eşiğin
    # altında. Bâbürlü, Asya'nın en büyük gövdelerinden biri; görünmez renk
    # kabul edilemez. Yeni hâl altlıktan 34,6.
    # ⚠️ Kırmızı aile adayları (mehmed-celebi #f90c15 · musa-celebi #e14e5a)
    #   ELENDİ: Fetret payları Osmanlı ailesindendir, yabancı devlete verilmez.
    # 📌 Ders: liste boyamada aday süzgeci, tekil rengin BÜTÜN kabul
    #   ölçütlerini taşımalı — komşudan ayrışma yetmiyor, görünürlük de şart.
    "babur-imparatorlugu":     ("Bâbürlü (Timurlu-Hint) İmparatorluğu", "#2820d8"),
    # ═══ AFGANİSTAN AİLESİ — RENK 2, 6 Ağustos 2026 · İKİ KİMLİK, BİR AİLE ═══
    # 🔴 Afganistan haritada 1747'den beri BOYASIZ: canlı `Kâbil` kaydı iki
    #   kimliği de bugün taşıyor ama ikisinin de rengi yoktu.
    #     afgan-durrani  15 pencere · 1747-06-20 → 1834-05-06
    #     afganistan      6 pencere · 1826-01-01 → 1923-10-29
    #
    # 🔴 AİLE OLARAK SEÇİLDİLER, AYRI AYRI DEĞİL — Dürrânî'den Barakzâî'ye
    #   geçiş aynı ülkenin hanedan değişimidir ve 1826-1834 arası SEKİZ YIL
    #   ÜST ÜSTE BİNİYOR. `iran` bloğundaki kural birebir bu vakayı tarif
    #   ediyor; ayrı renk verseydim geçiş, tek ülkeyi iki devlet gösterirdi.
    #   Ve kullanıcının lafzı BURADA SAĞLANABİLDİ — `iran` ailesinde
    #   sağlanamayan şey:
    #     ton farkı  5,5°   (aynı aile)
    #     L* farkı  26,2    (ayrım SALT PARLAKLIKTAN — "aynı aile, farklı
    #                        parlaklık" tarifinin lafzı)
    #     aile içi ΔE 26,3
    #   `iran` ailesi 17,3 birimlik L* aralığına dört üye sığdırmak zorunda
    #   olduğu için ayrımı ton+kroma'ya yaymıştı; burada iki üye var, yer
    #   bol, tarif harfiyen uygulandı.
    # ÖLÇÜM — zayıf halka ΔE 20,6:
    #   afgan-durrani  buhara 20,7 · OSMANLI tâbi 23,2 · hokand 23,7
    #                  (11 komşu: babur · buhara · cungar · hokand · iran ·
    #                   kacar · ladak · qing · racput · sih · sind)
    #   afganistan     ingiltere 20,9 · kacar 25,2
    #                  (7 komşu: buhara · ingiliz-hindistani · ingiltere ·
    #                   kacar · rusya · sih-imparatorlugu · sind)
    # ⚠️ ÜÇ ELEME YAPILDI, ikisi ölçülerek: ① paletin KENDİ uyum dağılımının
    #   p75'i (sınırsız arama `#abf3ff`/`#75ffc3` gibi neon pastel veriyordu,
    #   uyum 0,58-0,64 — aracın uyardığı "en ayrık" tuzağı) ② C* p10-p75
    #   ③ Osmanlı kırmızı şeridi 15-35° dışı — ilk çözüm `#e4b1d2` tam
    #   15,3°'deydi, şeride girmişti.
    # ⚠️ KÜNYE — ikisinin de `devletler.js`te kaydı YOK. Koordinatör yazacak.
    # ═══ GALZAY (Hotakî) — RENK 2, 7 Ağustos 2026 ═══
    # TDV `kandehar`: "1709 … Afgan kökenli Galzaylar Safevîler'e karşı
    # ayaklanarak Kandehar'ı aldılar" · "Şehir 1150'de (1738) Afşarlı Nâdir
    # Şah tarafından ele geçirildi."
    # Canlı `Kandehar` kaydı bugün `s: iran 1709-04-21 → 1747-06-20` — yani
    # 38 yıl tek parça. Doğrusu galzay (1709-1738) + afsar (1738-1747);
    # bölünemiyordu çünkü renksiz kimlik boyanmaz (§8) ⇒ görünür delik.
    # ÖLÇÜLEN KOMŞULUK (Kandehar peteğinin 1709-1738 penceresindeki komşuları;
    #   kimliğin 0 penceresi olduğu için komsuluk() ölçemez — `zend`/`ryazan`
    #   ile aynı yöntem):
    #     safevi · afsar (Herat · Hâş · Zerenc) · sind (Şikârpûr) ·
    #     babur-imparatorlugu (Gazne) · buhara (Belh)
    #
    # 🔴 AFGAN AİLESİNE KONMADI — ve bu sefer gerekçe hem tarihî hem ölçüm.
    #   Tarihî: Galzay (Hotakî/Gilzay) ile Dürrânî (Abdâlî) **ardıl değil
    #   RAKİP** Peştun konfederasyonlarıydı; Nâdir Şah Hotakîleri ezdi ve
    #   Dürrânî devleti dokuz yıl SONRA, araya afsar girerek doğdu. Bu,
    #   `afgan-durrani → afganistan` (doğrudan hanedan devri) ile aynı şey
    #   DEĞİL — orada aile doğruydu, burada yanlış olurdu.
    #   Ölçüm de aynı şeyi söyledi: aile bandında (ton 8,8°±18, L* 66-76
    #   basamağı) **aday SIFIR.** İki gerekçe aynı yöne bastı.
    #   ⇒ afgan-durrani'den ΔE > 25 · afsar'dan ΔE > 25, yani hem Dürrânî
    #     ayrımı hem 1738 Galzay→Afşar geçişi haritada NET.
    #
    # ⚠️ İKİ ADAY ÖLÇÜLÜP ELENDİ, ikisi de "reading error" sınıfı:
    #   ① `#3fb193` — pay 25,3 ile en iyisiydi ama bu oturumda yazdığım
    #      `cungar` #3fb4a2'den **ΔE 2,9**. Komşu değiller, hiçbir denetim
    #      ateşlemezdi; ama ikisi 1709-1738'de eşzamanlı ve aynı geniş
    #      coğrafyada — ekranda iki ayırt edilemez turkuaz.
    #   ② `#3f5db1` — bu sefer `estonya` #3f63b4'e yakındı. Çağdaş da
    #      değiller bölgesel de (1709 Kandehar / 1918 Baltık), yani kural
    #      ihlali yoktu; yine de palette iki neredeyse-aynı mavi tutmamak
    #      için elendi.
    #   ⇒ Son turda BU OTURUMDA YAZILAN ON İKİ RENGİN HEPSİ engel sayıldı
    #     (27 engel). Bir oturum kendi ürettiklerini de engel saymalı;
    #     yoksa palet tek tek temiz, toplu hâlde bulanık çıkar.
    # ÖLÇÜM: yarkent-hanligi 15,2 · sind 15,4 · cungar 15,4 ·
    #   cin-cumhuriyeti 15,5 · umman 16,5 · qing-hanedani 19,2
    #   altlıktan 24,4 · C* 28,5 = paletin %75'i
    # ⚠️ KÜNYE YOK — koordinatör yazacak (`devletler.js`).
    "galzay":                  ("Galzay (Hotakî) Hanedanı",          "#72c978"),
    "afgan-durrani":           ("Dürrânî Devleti (Afganistan)",      "#3c1239"),
    "afganistan":              ("Afganistan Emirliği",               "#e4b1d5"),
    # ── #6b4a7d  [ASYA · ① EKSİK, gövde yok · zarf(-25,-17.5,159,74) teyitli]  ile paylaşımlı (safevi) · 1 kimlik
    # le-hanedani  #a56cab → #9ceded  (toplu tur)
    "le-hanedani": ("Lê Hanedanı (Đại Việt)", "#9ceded"),

    # ═══════════════════════════════════════════════════════════════════════
    # ASYA PARTİ 1 — 1550 kesitinin 12 adsız kimliği (VERİ KİMLİK 3, 3 Ağustos)
    # ═══════════════════════════════════════════════════════════════════════
    # Yukarıdaki "98 kimliğin ADI YOK" notunun kapanmaya başladığı yer:
    # onikisinin de `devletler.js` künyesi bu partide yazıldı, ad artık var.
    # ⚠️ Ve o notun aksine bu 12 GÖVDE ÜRETİR — `yerlesimler_asya.js` 2 Ağustos'ta
    #   girdi.py'nin izin listesine girdi (344 nokta canlı). Renksizlikleri
    #   kosu_47aa386.log'da 145 uyarı ve 1550'de Hindistan'ın yarısı kadar
    #   boşluk demekti.
    #
    # ÖLÇÜM — `renk_olc.py`nin gerçek Voronoi komşuluğu üzerinde, iki EK kısıtla:
    #   ① KIRMIZI AİLE ELENDİ (ton 70°-330° dışı). Aracın kendi önerisi
    #     `bicapur`a #ae4242 vermişti; `VERI-YAPISI.md:184` kırmızıyı Osmanlı
    #     ailesine ayırıyor. Araç bu kuralı bilmiyor — bilen ölçen olmalı.
    #   ② YENİLER BİRBİRİNDEN DE ΔE ≥ 12 — KOMŞU OLMASALAR BİLE. Aracın ölçütü
    #     yalnız komşu çiftleri bağlar; ilk öneri bu yüzden Hindistan'a yedi
    #     ayırt edilemez mavi verdi (#4242ae · #4248ae · #424eae · #4254ae ·
    #     #425aae · #4260ae · #4272ae). Sur ile Gucerât Voronoi'de değmiyor ama
    #     1550 kesitinde YAN YANA duruyorlar; okuyucu için ikisi de mavidir.
    #   Seçim yine `uyum()` sırasına göre — "en ayrık değil, yetinmeci" dersi
    #   korundu; eşik gevşetilmedi, yalnız aday havuzu daraltıldı.
    #   Sonuç (öncesi → sonrası): görünmez 10 → 10 · çakışma 56 → 56 · aynı-hex 0 → 0.
    #   Artefakt: denetim/oneri-asya-parti1.txt
    "sur-hanedani":            ("Sûrîler (Sûr Hânedanı)",            "#10f068"),
    # gucerat-sultanligi  #72ae42 → #f0729f  (toplu tur)
    "gucerat-sultanligi": ("Gucerât Sultanlığı", "#f0729f"),
    "racput":                  ("Racput Devletleri",                 "#42ae6c"),
    "bicapur":                 ("Âdilşâhî Sultanlığı (Bîcâpûr)",     "#ae7e42"),
    "ahmednagar":              ("Nizamşâhî Sultanlığı (Ahmednagar)", "#42aea2"),
    "golkonda":                ("Kutubşâhî Sultanlığı (Golkonda)",   "#4242ae"),
    "nayak-devletleri":        ("Nâyak Beylikleri",                  "#bab442"),
    "orissa":                  ("Orissa (Gacapati Krallığı)",        "#9042ae"),
    # ═══ TİBET TAŞINDI — RENK 2, 7 Ağustos 2026 · aynı gerekçe (maruziyet) ═══
    # İhlal değildi: `ming-hanedani` #636f03'ten ΔE 14,2. Ama paylaşılan sınır
    # 66,20° — SINIRDA listesinin ikincisi ve Çin-Tibet sınırı atlasın en uzun
    # iç çizgilerinden. (Koşudan sonra 65,41° → 66,20°, yeniden ölçüldü.)
    # ⇒ Taşınan TİBET, çünkü ölçüldü: `ming-hanedani` 49 engelli ve en iyi
    #   payı 12,4 (eşiğin dibinde); `tibet` 20 engelli ve 19,6 alıyor.
    #   Ucuz olan taşınır — `cungar` ve `cohor` vakalarındaki aynı ölçüt.
    # ÖLÇÜM: ming-hanedani 14,2 → **36,7** · en yakın engel 19,6 · C* 10,3
    "tibet":                   ("Tibet (Phagmodrupa-Tsangpa)",       "#e1aed2"),
    "yarkent-hanligi":         ("Yarkent (Sa'îdiyye) Hanlığı",       "#6c7e36"),
    "kuzey-yuan":              ("Kuzey Yuan (Moğol Hanlığı)",        "#306c78"),
    "demak":                   ("Demak Sultanlığı (Cava)",           "#9072c0"),

    # ═══════════════════════════════════════════════════════════════════════
    # ASYA PARTİ 1b — 1550 kesitinin KALAN 37 kimliği (VERİ KİMLİK 3)
    # ═══════════════════════════════════════════════════════════════════════
    # Görev dosyası PARTİ 1'i 12 kimlik sayıyordu; bitiş ölçütü ise "1550
    # kesitinde adsız kimlik kalmadı" istiyordu. ÖLÇÜLDÜ: 12'si yazıldıktan
    # sonra 1550-06-15 sahnesinde 37 kimlik / 55 nokta hâlâ adsızdı.
    # Bu blok o kuyruğu kapatır — 1550 sahnesi artık BÜTÜN (110 kimliğin 110'u).
    #
    # 🔴 EŞİK BURADA 12 DEĞİL, İKİ AYRI EŞİK — ve ikincisi ÖLÇÜLEREK seçildi:
    #   • KOMŞUDAN ΔE ≥ 12 — değişmedi, aracın eşiği.
    #   • YENİLER BİRBİRİNDEN ΔE ≥ 8 — komşu olmasalar bile.
    #   Neden 12 değil: 37+12 kimliğe karşılıklı 12 dayatıldığında çözüm
    #   BULUNUYOR ama palet uçlara kaçıyor (#e4e424 neon sarı · #122430
    #   neredeyse siyah · #eaea90 solgun) — `renk_olc.py`nin kendi yazdığı
    #   "en ayrık değil, yetinmeci" dersinin tam ihlali.
    #   Neden 0 değil (yani aracın ham kuralı): o zaman on kimlik
    #   (#42ae8a·#42ae84·#42ae7e·#42ae78·#42ae72·#42ae66·#42ae60·#42ae5a·
    #   #42ae54·#42ae4e) ayırt edilemez yeşile düşüyor ve Nepal'den Kerala'ya,
    #   oradan Moluk'a uzanan tek bir yeşil leke gibi okunuyordu.
    #   ⇒ 8, "aynı renk sanılmasın" eşiği; 12 "komşuyu ayır" eşiği. İkisi ayrı
    #     iştir ve tek sayıya indirilince biri feda ediliyor.
    # ⚠️ Kırmızı aile (ton 70°-330° dışı) yine elendi — VERI-YAPISI.md:184.
    # Ölçüm: görünmez 10 → 10 · çakışma 56 → 56 · aynı-hex 0 → 0.
    # Artefakt: denetim/oneri-asya-parti1b.txt
    "mogulistan":              ("Moğulistan (Doğu Çağatay Hanlığı)", "#4254ae"),
    "mac-hanedani":            ("Mạc Hanedanı (Đại Việt)",           "#5a42ae"),
    "malay-sultanliklari":     ("Malay Sultanlıkları",               "#78ae42"),
    "sind":                    ("Sind",                              "#a8ae42"),
    # kesmir  #48ae42 → #ed6ccf  (toplu tur)
    "kesmir": ("Keşmir Sultanlığı", "#ed6ccf"),
    "malva-sultanligi":        ("Mâlvâ Sultanlığı",                  "#8a42ae"),
    "arakan":                  ("Arakan (Mrauk U) Krallığı",         "#42ae66"),
    "ahom":                    ("Ahom Krallığı (Assam)",             "#ae9042"),
    "bidar":                   ("Barîdşâhî Sultanlığı (Bîdar)",      "#186068"),
    # ═══ ava — RENK DEĞİŞTİ (#428aae → #126ced), RENK 2, 8 Ağustos 2026 ═══
    # 🔴 GERÇEK İHLAL: `ava` ↔ `ayutthaya` ΔE **9,63** · 407 km · ve ikisi
    #   1351-1555 arası **204 yıl** birlikte sahnede. Burma-Siyam savaşları
    #   tam bu iki gövde arasında geçiyor; ayırt edilmezlerse kronoloji ile
    #   harita çelişir (`CLAUDE.md §1`in amaç cümlesi).
    # ⚠️ VE `renk_olc` BUNU GÖREMİYOR — 0 çift bildiriyordu. Sebep: bölgede
    #   99 nokta var (4,2/mn km², projenin en seyreği), hücreler dev ve ikisi
    #   Voronoi KOMŞUSU değil. `kaffa↔sidamo` (ΔE 2,8) ile aynı sınıf:
    #   **iki gövde DEĞMEDEN de aynı ekranda yan yana durur.**
    # ÖLÇÜM — engel kümesi BUGÜNKÜ komşuluk DEĞİL: VERİ DEVLET 120-150 nokta
    #   yazacak, hücreler küçülecek, komşuluk genişleyecek. Bugüne göre
    #   seçmek hatayı yarına taşımak olurdu.
    #   engel = bölgesel-eşzamanlı 36 ∪ 600 km 12 = **41** (+Osmanlı ikilisi)
    #   havuz 158.578 · eşiği geçen 4.620 · pay **17,3** · C* 26,0 = %63
    #   ayutthaya'dan  9,63 → **32,2**   ·  altlıktan 43,0
    #   san-devletleri 21,3 (en dar) · lan-na 36,4 · hanthawaddy 40,0
    # 📌 `ava` taşındı, `ayutthaya` değil: ava 12 engelli, ayutthaya 15 —
    #   az kısıtlı olanı taşımak paletin geri kalanını serbest bırakır.
    "ava": ("Yukarı Birmanya (Ava Krallığı)", "#126ced"),
    "lan-xang":                ("Lan Xang Krallığı (Laos)",          "#ba7842"),
    "pagaruyung":              ("Pagaruyung (Minangkabau) Krallığı", "#907820"),
    "bali-kralliklari":        ("Bali Krallıkları",                  "#42b490"),
    "timor-beylikleri":        ("Timor Beylikleri",                  "#78903c"),
    # ═══ filipin-racaliklari — ÜÇ ÇAKIŞMAYI TEK YAZIMLA KAPATIR ═══
    # 8 Ağustos 2026. NOKTA GDASYA Filipinler'e nokta yazdı ve ÜÇ çakışma
    # birden doğdu — üçü de Japon şogunluklarına karşı, üçü de ΔE 8,2:
    #   edo-bakufu · kamakura · muromachi
    # 🔴 AİLE BOZULMAZ, FİLİPİNLER TAŞINIR. O üçü aynı devletin ARDIŞIK
    #   rejimleri (aile rengi: aynı ton, farklı açıklık) ve ayrımları
    #   KASITLI. Birini oynatmak aileyi bozar, üçünü birden oynatmak
    #   gereksiz. Tek yerel gövde taşınır.
    # ÖLÇÜM: engel 24 (Voronoi ∪ 1500 km eşzamanlı) · eşiği geçen 13829 ·
    #   pay 18.3 · C* 22.3 = %47
    #   üç şogunluktan: 8,2 → 21.0 · 21.0 · 21.0
    # 📌 VE BU, İKİ SAATTE ÜÇÜNCÜ TUR: nokta partisi sürerken hücreler her
    #   parti sonrası küçülüyor ve yeni komşuluk doğuruyor (2133 → 2216).
    #   Çakışmayı parti SÜRERKEN kovalamak bir kovalamaca — koordinatöre
    #   partiden SONRA tek toplu tur önerildi.
    "filipin-racaliklari": ("Filipin Racalıkları", "#58a028"),
    "nepal":                   ("Nepal Krallığı",                    "#8a5a3c"),
    "ladak":                   ("Ladakh Krallığı",                   "#a8c63c"),
    "gond-kralliklari":        ("Gond Krallıkları",                  "#78c63c"),
    "manipur":                 ("Manipûr Krallığı",                  "#3cc642"),
    # 🔴 ÇIKTI DENETİMİ — `golkonda` ile ΔE 7,4 ve çizili gövdeler Dekken'de
    # DEĞİYOR (girdi komşuluğunda komşu DEĞİLLER; yalnız çıktıda görünüyor).
    # Kimlik VERİ KİMLİK 3'ün, renk ölçüsü RENK'in. Az kısıtlı uç: berar
    # 4 girdi komşusu · golkonda 9. `golkonda` engel kümesine ELLE eklendi —
    # çıktı komşuluğu girdi grafiğinde olmadığı için otomatik gelmiyor.
    # ÖLÇÜM: ton kayması 0,6° · pay 12,7 · S 0,43
    "berar":                   ("İmâdşâhî Sultanlığı (Berâr)",       "#70f010"),
    "kalikut":                 ("Kalikut Zamorinliği",               "#428a36"),
    "travankur":               ("Travankur Krallığı",                "#723cc6"),
    # kandy  #a23cc6 → #600f3c  (toplu tur)
    "kandy": ("Kandy Krallığı (Seylan)", "#600f3c"),
    "yafna":                   ("Yafna (Jaffna) Krallığı",           "#603684"),
    # ═══ san-devletleri — DÖRT ÇİFTİ TEK YAZIMLA KAPATIR, 8 Ağustos 2026 ═══
    # Şan beylikleri Burma-Yunnan-Siyam üçgeninde TAM ORTADA duruyor; nokta
    # partisi indikçe en çok komşu kazanacak gövde bu olabilir. Bugün taşımak
    # yarın dört kat kazandırıyor (`FAYDA ÷ EMEK`).
    #   le-hanedani      7,07 → 31,40      mac-hanedani     8,31 → 36,12
    #   nguyen-hanedani 10,36 → 40,18      ingiltere        7,37 → 34,74
    # 🔴 VE İLK SEÇİMİM KENDİ HEDEFİNİ IŞKALADI — kayda değer:
    #   600 km engel kümesiyle çözdüm, sonuç `le-hanedani` 11,89 ve
    #   `mac-hanedani` 10,51 çıktı — HÂLÂ EŞİĞİN ALTINDA. Sebep: kapatılacak
    #   çiftler 647-1170 km aralığındaydı, yani 600 km süzgecinin DIŞINDA ⇒
    #   engel kümesine hiç girmediler.
    #   ⇒ **Engel kümesi, KAPATILMAK İSTENEN ÇİFTİ İÇERMİYORSA çözüm o çifti
    #     çözmez.** Ölçüt B kademesine (1500 km) çekildi, beşi de kapandı.
    #   📌 Bu, "doğru aleti yanlış evrenle koşturmak" ailesinin seçim tarafı:
    #     çözücü kusursuz çalıştı, KISITI eksik verdim.
    # ÖLÇÜM: engel 46 (Voronoi ∪ 1500 km eşzamanlı) · eşiği geçen 283 ·
    #   pay 13,5 · C* 16,7 = %23 (paletin donuk ucu — dağlık, dağınık beylik)
    "san-devletleri": ("Şan Beylikleri", "#0f5d48"),
    "lan-na":                  ("Lan Na Krallığı",                   "#36c6c0"),
    "campa":                   ("Champa Krallığı",                   "#305a78"),
    "angkor-kmer":             ("Kmer (Angkor) İmparatorluğu",       "#36cc72"),
    # 🔴 COHOR TAŞINDI — RENK 2, 7 Ağustos 2026 · yine VERİ kaynaklı, ÜÇÜNCÜ KEZ
    # `#7e723c`, `kamboc-kralligi` #8d6e63'ten ΔE **10,5** — eşiğin altında ve
    # ikisi ölçülmüş komşu. İkisi de bu oturumda RENK DEĞİŞTİRMEDİ; çift
    # sabahki denetimlerde YOKTU, kırk renk yazılırken düştü.
    # ⇒ Sebep renkte değil VERİDE: gün içinde başka oturumlar dönemleri
    #   değiştirdi ve iki gövde eşzamanlı komşu oldu. Aynı desenin üçüncüsü:
    #     cungar ↔ buhara     Mâverâünnehir partisi bağlanınca (10,5)
    #     norvec ↔ portekiz   _ek12 (İzlanda) bağlanınca (7,4)
    #     cohor  ↔ kamboc     gün içi dönem değişiklikleriyle (10,5)
    #   📌 PALET VERİNİN FONKSİYONUDUR. Hiçbir hex'e dokunmadan çakışma
    #      doğabilir ⇒ veriye dokunan her koşudan sonra `renk_olc.py` koşmalı.
    # ⇒ Hangisinin taşınacağı ölçüldü: `cohor` 18 engel · en iyi pay 20,0;
    #   `kamboc` 26 engel · ancak 15,9 (ve #8d6e63 paylaşımını da bozardı).
    #   Ucuz olan taşındı. Yeni renk: kamboc'tan ayrık, C* %72.
    "cohor-sultanligi":        ("Cohor (Johor) Sultanlığı",          "#eab463"),
    # palembang-sultanligi  #303c78 → #1293ed — pay 19,0 · engel 21 · C* 21,4 = %44. `campa` ile 9,7'ydi. Palembang
    #     taşındı Champa değil: komşu 13 vs 17.
    #     📌 Bu künye Srivijaya'nın da devamı — veri dosyasının kendi
    #       yorumu: "1281'de imparatorluk çökmüş … üç evre tek
    #       palembang-sultanligi kimliğinde toplandı".
    "palembang-sultanligi": ("Palembang Sultanlığı", "#d84070"),
    # banten-sultanligi  #78b46c → #ed695a — pay 18,8 · engel 23 · C* 28,2 = %73. İKİ çifti birden kapatıyor
    #     (malay-sultanliklari 8,5 · malaka 9,4). Cava'nın kuzeybatısı;
    #     Mataram ve Demak ile aynı adada, üçü de ayrı tonda kalmalı.
    "banten-sultanligi": ("Banten Sultanlığı", "#ed695a"),
    "banjar-sultanligi":       ("Bancar Sultanlığı",                 "#ccb430"),
    "gova-makassar":           ("Gova (Makassar) Sultanlığı",        "#281098"),
    "ternate-sultanligi":      ("Ternate Sultanlığı (Moluk)",        "#36d29c"),
    "tidore-sultanligi":       ("Tidore Sultanlığı (Moluk)",         "#72ccc0"),
    "banda-adalari":           ("Banda Adaları",                     "#d2d230"),
    "magindanao-sultanligi":   ("Magindanao Sultanlığı",             "#426c30"),

    # ═══════════════════════════════════════════════════════════════════════
    # ASYA PARTİ 2 — 17. YÜZYIL, beş kimlik (VERİ KİMLİK 3)
    # ═══════════════════════════════════════════════════════════════════════
    # Sıra LİSTEDEN değil SAHNEDEN kuruldu. On dört kesit ölçüldü; 1600 · 1650 ·
    # 1700'ün ÜÇÜ BİRDEN yalnız bu beş kimliği bekliyordu:
    #   1600  adsız 2 (31 nokta) · 1650  adsız 4 (19 nokta) · 1700  adsız 2 (6 nokta)
    # Kimlik başına getirisi en yüksek parti buydu — beş kayıt, üç kesit.
    # Eşikler PARTİ 1b ile aynı: komşudan ΔE ≥ 12 · yeniler birbirinden ΔE ≥ 8 ·
    # kırmızı aile (ton 70°-330° dışı) elendi.
    # Artefakt: denetim/oneri-asya-parti2.txt
    "azuchi-momoyama":         ("Azuchi-Momoyama (Oda-Toyotomi)",    "#6042ae"),
    "guney-ming":              ("Güney Ming",                        "#d8d060"),
    "nguyen-beyligi":          ("Nguyễn Beyleri (Đàng Trong)",       "#d85850"),
    # hosut  #427eae → #0c8df3  (toplu tur)
    "hosut": ("Hoşut (Kokonor) Hanlığı", "#a078e0"),
    "tungning":                ("Tungning Krallığı (Zheng)",         "#66b442"),

    # ═══════════════════════════════════════════════════════════════════════
    # THEODORO — Kırım'ın güneybatısı (VERİ KİMLİK 3, koordinatörün ek işi)
    # ═══════════════════════════════════════════════════════════════════════
    # PETEK/NOKTA oturumu Mankup ve İnkirman'ı bu anahtar yok diye EKLEYEMEDİ
    # (data/yerlesimler_kirim.js:87). `bizans` yazmayı reddetmesi doğruydu:
    # Bizans 1453'te biter, Theodoro 1475'e kadar sürer — CLAUDE.md §3.5.
    #
    # 🔴 ÖLÇÜM ELLE YAPILDI ve SEBEBİ ÖLÇÜLDÜ: `teodoro` CANLI veride YOK
    #   (`yerlesimler_kirim.js` girdi.py'nin izin listesinde değil), bu yüzden
    #   `renk_olc.py --oner` ona SIFIR komşu döner ve aracın kendi uyarısı
    #   devreye girer: "komşusu ölçülemeyen kimlik … öneri yalnız altlık ve
    #   Osmanlı ikilisine dayanır" = DAYANAKSIZ. Komşu kümesi koordinatörün
    #   bildirdiği hâliyle kullanıldı: ceneviz · bizans · kirim · altinorda
    #   (+ Osmanlı ikilisi). Ölçüm bindirilmiş renk üzerinden.
    #
    #   #42ba42  ton 135,0°  L* 78,3   ΔE:  ceneviz 32,9 · bizans 49,2
    #            kirim 37,3 · altinorda 43,8 · OSMANLI doğrudan 75,3 ·
    #            OSMANLI tâbi 62,8 · ALTLIK 32,9        (eşikler 12 / 15)
    #
    # ⚠️ NEDEN "SINIRDA GEÇEN" DEĞİL, EN GENİŞ MARJLI SEÇİLDİ: bu kimliğin
    #   verisi canlı olmadığı için `renk_olc.py` onu BUGÜN ölçemiyor —
    #   global tarama onu "ölçülemedi" kutusunda tutuyor. Sınırda geçen bir
    #   renk (uyum sırasının başı #4248ae, bizans'a ΔE 12,7) yanlış çıksa
    #   denetim onu YAKALAYAMAZDI. Ölçülemeyen kimlikte marj, denetimin
    #   yerine geçer. `uyum() ≤ 0,05` havuzu içinde en geniş marjlı alındı;
    #   yani palet ölçütü korundu, yalnız eşitler arasında tercih değişti.
    # 📌 Veri canlıya alınınca (Mankup + İnkirman eklenip yerlesimler_kirim.js
    #   girdi.py'ye girince) `py arac/renk_olc.py` bunu KENDİ ölçecek —
    #   o koşuda görünmez/çakışma sayıları ARTMAMALI.
    "teodoro":                 ("Theodoro Prensliği (Mankup)",       "#42ba42"),
}


# ═══════════════════ KASITLI HEX PAYLAŞIMLARI ═══════════════════
# 🔴 NEDEN VAR (RENK oturumu, 2026-08-03):
#   13 hex, 55 kimlik tarafından paylaşılıyor. ÖLÇÜLDÜ: 13'ünün 13'ü de
#   KASITLI (0 tesadüf) — kanıt üç bağımsız izden geldi: girdinin üstündeki
#   yorumda "paylaş" geçiyor · öteki üyeyi ADIYLA anıyor · dosya başındaki
#   2026-07-30 "PAYLAŞILAN HEX DENETİMİ" listesinde.
#   AMA kasıt yalnız DÜZ YAZIDA duruyordu ve hiçbir denetim onu tutmuyordu.
#   ⇒ Biri oynatılınca ötekiler İZLEMİYOR, paylaşım SESSİZCE bozuluyor,
#     gerekçe kütüğü bayatlıyor ve sonraki okuyan yanılıyor.
#   Canlı vaka: `timurlu` üçüncü partide oynatılacaktı; #8d6e63'ü paylaşan
#   `kamboc-kralligi` ve `vijayanagara` onu izlemeyecekti — kimse fark etmezdi.
#
# 📌 `_opaklik_dogrula()` ile AYNI DESEN: örtük/kopyalanmış bir bilgi sessizce
#   ayrışabiliyorsa, ayrışmayı IMPORT ANINDA bağıran bir denetim koy.
# ⚠️ ŞEMA DEĞİŞMİYOR: uret_petek.py `for did,(dad,renk) in BOYALAR.items()`
#   diye okuyor; ayrı bir sözlük onu etkilemez. MOTOR'un dosyasına dokunulmadı.
#
# ⚠️ NE KAPSAMAZ — bilinçli sınır:
#   Bu sözlük BOYALAR ANAHTARLARININ hex paylaşımını tutar. `afsar`/`kacar`
#   gibi `devletler.js` KAYITLARININ aynı `harita:` anahtarını paylaşması AYRI
#   BİR EKSENDİR ve onu `renk_olc.ayni_anahtar()` zaten yakalıyor (bugün açık
#   olan tek vaka: afsar 1736-1796 ↔ kacar 1789-1923, örtüşme 1789-1796).
#   Çözümü renk değil VERİ: `yerlesimler.js`in `iran` dönemleri bölünmeli.
# 📌 Ve ZAMANSAL ÖRTÜŞME denetimi buraya KONMADI: `devletler.js`i import anında
#   okumak gerekirdi ve motor bu dosyayı her koşuda yüklüyor, hafif kalmalı.
#   O denetimin yeri `renk_olc.py` — veriyi zaten orada okuyor.
PAYLASIM = {
    # hex: (gerekçe, [kimlikler])
    # 🟢 HEX GÜNCELLENDİ — RENK DENİZ, 2026-08-12: eski #6ba0a0 denizle
    #   (#a8c8dc) ΔE 18,06 · ΔL* 1,71 idi, DAL 2 kuralına (|ΔL*|<4 ∧ ΔE<20)
    #   takıldı. Grup BİR HAMLEDE #a828d8'e taşındı (8 üye birden — hepsi
    #   AYNI hex'i taşıdığı için tek satır değişince hepsi değişti). Bağ
    #   KORUNDU: komşuluk yok gerekçesi bugün de geçerli, ölçülmedi ama
    #   grup zaten hiç değişmedi (yalnız hex kaydı).
    "#a828d8": ("Asya partisi — zeyyani ile paylaşımlı, komşuluk yok",
                ["zeyyani", "abd", "ayutthaya", "edo-bakufu", "kamakura",
                 "maratha", "muromachi", "siyam-chakri"]),
    "#00695c": ("2026-07-30 denetimi (yugoslavya/hive) + Asya partisi",
                ["yugoslavya", "hive", "goryeo", "hollanda-dogu-hint",
                 "joseon", "majapahit", "sih-imparatorlugu"]),
    # 🟢 BEYAN GÜNCELLENDİ — `cungar` ayrıldı (RENK 2, 2026-08-06). Sebebi
    #   RENKTE DEĞİL VERİDEYDİ: Mâverâünnehir partisi bağlanınca (1729 →
    #   1745 nokta) `cungar` ile `buhara` komşu oldu ve ΔE 10,5 kaldı.
    #   İzleyen YOK — kalan dördü #7b1fa2'de kaldı; çakışma grubun değil tek
    #   üyenin sorunuydu, öteki dördü `buhara`ya komşu değil.
    "#7b1fa2": ("Asya partisi — sidamo ile paylaşımlı (cungar 2026-08-06'da "
                "veri kaynaklı çakışmayla ayrıldı)",
                ["sidamo", "brunei-sultanligi", "konbaung",
                 "ryukyu", "yakub-beg"]),
    # 🟢 BEYAN GÜNCELLENDİ — `toungoo` çıktı denetimi yüzünden #545d2d'ye
    #   taşındı (qing-hanedani ile çizili gövdeleri değiyordu). Kalan beşi
    #   birbirine değmiyor; paylaşım meşru.
    "#636f03": ("Asya partisi — siena ile paylaşımlı (toungoo 2026-08-03'te "
                "çıktı denetimiyle ayrıldı)",
                ["siena", "behmeni", "qing-hanedani", "sulu-sultanligi",
                 "yuan-hanedani"]),
    # 🟢 HEX GÜNCELLENDİ — RENK DENİZ, 2026-08-12: eski #00acc1 denizle
    #   (#a8c8dc) ΔE 18,74 · ΔL* 2,65 idi — Emre'nin adıyla işaret ettiği
    #   Delhi Sultanlığı da bu grupta ("gözümüzü kanatıyor"). DAL 2 kuralına
    #   (|ΔL*|<4 ∧ ΔE<20) takıldı, 5 üye BİR HAMLEDE #20d820'ye taşındı.
    #   Bağ KORUNDU: bugün de birbirleriyle komşu değiller.
    "#20d820": ("kavalali↔turkmen (Oturum 16) + Asya partisi",
                ["turkmen", "kavalali", "delhi-sultanligi",
                 "ingiliz-hindistani", "ingiliz-malaya"]),
    # ⚠️ GRUBUN ADI DEĞİŞTİ — kurucu üye `saruhan` da ayrıldı (2026-08-08
    #   ikinci geçiş: `esrefogullari` 9,26 · `napoli` 11,63). Bir grubun
    #   ADI kurucusuna göre konmuşsa, kurucu ayrılınca ad da bayatlar.
    "#b34da5": ("Asya partisi — kurucu `saruhan` ve `meysur` 2026-08-08'de "
                "ayrıldı; kalan üçü birbirine komşu değil",
                ["mataram-sultanligi", "nguyen-hanedani",
                 "tibet-ganden-phodrang"]),
    # 🟢 BEYAN GÜNCELLENDİ — self-check bunu YAKALADI (yazıldıktan ~1 saat sonra,
    #   ilk gerçek koşusunda). `taceddin` Anadolu partisinde #1b8d36'ya taşındı;
    #   dört Asya kimliği #2d8f4a'da kaldı ve İZLEMEDİ. Tam yakalamak için
    #   yazıldığı vaka. MADDE ölçüldü ve SAĞLAM: dördü de birbirine komşu değil,
    #   paylaşım meşru; bozulan yalnız beyandı. ⇒ Renk değil BEYAN düzeltildi.
    # 🟢 BEYAN İKİNCİ KEZ GÜNCELLENDİ — self-check İKİNCİ KEZ YAKALADI
    #   (RENK 2, 2026-08-06). Bu sefer ayrılan `meiji-japonya`: #2d8f4a
    #   `rusya`dan yalnız ΔE 10,2 alıyordu ve ikisi ölçülmüş komşu.
    #   İZLEYEN YOK — kalan üçü #2d8f4a'da kaldı, çünkü çakışma grubun
    #   değil TEK ÜYENİN sorunuydu: Açe · Malaka · Ming'in hiçbiri Rusya'ya
    #   komşu değil. `timurlu` vakasının tersi (orada izleyenler taşınmak
    #   İSTEDİ ama ölçüm izin vermedi); burada taşınmaya GEREK yok.
    #   📌 Ve aynı ders üçüncü kez: bağı bozan oturum beyanı güncellemeyi
    #      unutuyor, self-check hatırlatıyor. Alet işini gördü.
    "#2d8f4a": ("Asya partisi — taceddin (2026-08-03), meiji-japonya "
                "(2026-08-06) ve malaka-sultanligi (2026-08-08) buradan "
                "ayrıldı; kalan ikisi ~3.500 km arayla, hiç yan yana gelmez",
                ["ace-sultanligi", "ming-hanedani"]),
    # 🟢 BEYAN GÜNCELLENDİ — self-check yakaladı (son parti, 2026-08-03).
    #   `timurlu` #9c7563'e taşındı. İzleyenler TAŞINAMADI: ölçüldü, ikisi de
    #   yeni renkte komşularından yalnız ΔE 10,1 alıyor (eşik 12).
    #   ⇒ Bağ korunamadı, eski hexte kaldılar; ikisi birbirine komşu DEĞİL,
    #     yani aralarındaki paylaşım hâlâ meşru.
    "#8d6e63": ("timurlu buradan ayrıldı (son parti); kalan ikisi komşu değil",
                ["kamboc-kralligi", "vijayanagara"]),
    # 🟢 HEX GÜNCELLENDİ — bağ KORUNDU. Son partide `safevi` #a56cab'e taşındı
    #   ve `le-hanedani` ONU İZLEDİ (ölçüldü: komşularından ΔE 14,5, altlık 26,3).
    #   Kasıtlı paylaşımın nasıl korunacağının örneği: önder oynayınca izleyen
    #   de oynar — ama ancak ölçüm izin veriyorsa.
    # ⚠️ GRUP TEKE İNDİ — `le-hanedani` 2026-08-08 toplu turunda ayrıldı
    #   (`san-devletleri` ile ΔE 7,07 idi, 647 km, 1428-1789 eşzamanlı).
    #   Tek üyeli "paylaşım" paylaşım değildir; kayıt olarak duruyor ki
    #   yarın biri #a56cab'i "boşta" sanmasın — `safevi` kullanıyor.
    "#a56cab": ("Asya partisi — TEK ÜYE kaldı (safevi); le-hanedani ayrıldı",
                ["safevi"]),
    # 🟢 HEX GÜNCELLENDİ — RENK DENİZ, 2026-08-12: eski #0288d1 denizle
    #   (#a8c8dc) ΔE 9,64 idi (DAL 1, ΔE<15). İkisi BİR HAMLEDE #2820d8'e
    #   taşındı. Bağ KORUNDU: komşu değiller.
    "#2820d8": ("Asya partisi — darfur ile paylaşımlı (babur görünürlük düzeltmesi)",
                ["darfur", "babur-imparatorlugu"]),
    # ⚠️ GRUP TEKE İNDİ — `ahiler` 2026-08-08 toplu turunda ayrıldı
    #   (`hamid` 9,03 · `teke` 10,44 · `ceneviz` 11,56 — üçü de Anadolu).
    # 🔴 VE BEYANIN KENDİSİ ÖLÇÜMLE ÇÜRÜDÜ: "tarih boyunca komşu değil"
    #   diyordu, ama `bosna ↔ ceneviz` bugün AÇIK KALAN 20 çiftten biri
    #   (ΔE 11,56 · 545 km · eşzamanlı). İkisi Adriyatik'in iki yakası.
    #   ⇒ 30 Temmuz'da doğru olan hüküm, veri büyüyünce yanlış çıktı —
    #     `C14`: bir beyan da bayatlar.
    # ⚠️ GRUP BOŞALDI — `ahiler` ve `bosna` 2026-08-08'de ayrıldı.
    #   Beyan SİLİNMİYOR: #8f7d5b artık hiçbir kimlikte kullanılmıyor ve
    #   bu kayıt onun NİÇİN boşaldığını söylüyor. Boş kova, olmayan
    #   kovadan farklıdır.
    "#8f7d5b": ("2026-07-30 denetimi — BOŞALDI; ahiler ve bosna ayrıldı",
                []),
    # 🟢 GRUP KALDIRILDI — `norvec` #e76690'a taşındı (RENK 2, 2026-08-06),
    #   çünkü `_ek12` bağlanınca `portekiz` ile ΔE 7,4 kaldı. Geriye
    #   #5c6bc0'ı YALNIZ `vollayta` kullanıyor ⇒ ortada paylaşım KALMADI.
    #   Beyanda tutmak yanlış olurdu: var olmayan bir bağı beyan etmek,
    #   bağı hiç beyan etmemek kadar yanıltıcıdır (aynı gerekçe aşağıda
    #   `#4527a0` için de yazılı).
    #   (2026-07-30 denetiminin vollayta/norvec satırı bu tarihten itibaren
    #    tarihsel bir kayıttır, geçerli bir bağ değil.)
    # 🟢 GRUP KALDIRILDI — self-check yakaladı. `karaman` Anadolu partisinde
    #   #5133ab'ye taşındı; #4527a0'ı artık YALNIZ `buhara` kullanıyor, yani
    #   ortada paylaşım KALMADI. Beyanda tutmak yanlış olurdu: var olmayan bir
    #   bağı beyan etmek, bağı hiç beyan etmemek kadar yanıltıcıdır.
    #   (2026-07-30 denetiminin buhara/karaman satırı bu tarihten itibaren
    #   tarihsel bir kayıttır, geçerli bir bağ değil.)
}


def _paylasim_dogrula():
    """BOYALAR'daki GERÇEK paylaşımı yukarıdaki BEYANLA karşılaştırır.

    Üç şeyi yakalar:
      ① beyan edilmiş bir grup BOZULMUŞ (biri oynatılmış, ötekiler izlememiş)
      ② beyan edilmemiş YENİ paylaşım doğmuş (kasıt mı tesadüf mü belirsiz)
      ③ beyandaki kimlik BOYALAR'da yok (silinmiş / adı değişmiş)

    ⚠️ ÜRETİMİ DURDURMAZ, yalnız uyarır. Gerekçe: renk seçimi geometriyi
    etkilemiyor; bu bir VERİ BÜTÜNLÜĞÜ değil KÜTÜK TUTARLILIĞI denetimidir ve
    sert kapı yanlış yerde durur. (`_opaklik_dogrula()` ile aynı gerekçe.)
    ⚠️ MESAJLARDA ASCII DIŞI KARAKTER YOK — sarmalanmamış konsolda
    `UnicodeEncodeError` ile patlamasın; patlayabilen bir uyarı uyarısızlıktan
    kötüdür (bu dosyanın kendi kaydettiği ders).
    """
    import collections as _c
    _gercek = _c.defaultdict(set)
    for _a, _v in BOYALAR.items():
        _gercek[_v[1].lower()].add(_a)

    for _hx, (_ger, _uye) in PAYLASIM.items():
        _yok = [u for u in _uye if u not in BOYALAR]
        if _yok:
            print("  UYARI renkler.py: PAYLASIM[%s] beyaninda BOYALAR'da "
                  "olmayan kimlik: %s" % (_hx, ", ".join(_yok)))
        _su_an = _gercek.get(_hx.lower(), set())
        _kacan = [u for u in _uye if u in BOYALAR and u not in _su_an]
        if _kacan:
            print("  UYARI renkler.py: BEYAN EDILEN PAYLASIM BOZULDU %s -- "
                  "%s artik bu hex'i kullanmiyor. Kasitli paylasimdi; biri "
                  "oynatildiysa otekiler de oynatilmali ya da beyan "
                  "guncellenmeli." % (_hx, ", ".join(_kacan)))

    _beyan = {h.lower() for h in PAYLASIM}
    for _hx, _uye in _gercek.items():
        if len(_uye) > 1 and _hx not in _beyan:
            print("  UYARI renkler.py: BEYAN EDILMEMIS PAYLASIM %s -- %s. "
                  "Kasitliysa PAYLASIM'a yazilmali, tesadufse ayrilmali."
                  % (_hx, ", ".join(sorted(_uye))))


_paylasim_dogrula()


# =====================================================================
# SU YAKINLIGI NOBETCISI — Emre, 24 Agustos 2026: "deniz rengine yakin
# renk tonlarini YASAKLAYALIM."
# =====================================================================
# NICIN AYRI VE DAHA SIKI BIR ESIK:
# Devlet-devlet tabani DE 12 ve gerekcesi okunabilirlik. Ama su, oteki
# govdeler gibi bir komsu DEGIL:
#   · KALICI — 1281'den 1923'e her karede orada
#   · EVRENSEL — kiyisi olan HER govde ona degiyor, yani "bu ikisi hic
#     komsu olmaz" muafiyeti (bu dosyanin basligindaki kural) SUYA
#     UYGULANAMAZ
#   · GENIS — ekranin buyuk kismini kapliyor, goz onu ZEMIN sayiyor
# ⇒ Devlet tabaninin 1,5 kati alindi: DE 18. Sayi bir sonuca gore
#   SECILMEDI, bu gerekceden TURETILDI.
#
# OLCULDU (24 Agustos, su #bcd6e6):
#     DE<10 -> 0 ihlal · DE<15 -> 0 · DE<18 -> 1 · DE<20 -> 2
#     en yakin: novgorod #84c9cf DE 16,6 · le-hanedani #9ceded DE 20,0
# 🟢 Ve su ACILINCA bir ihlal KENDILIGINDEN kapandi: eski su (#a8c8dc)
#    ile novgorod arasi DE 14,5'ti, yeni su ile 16,6. Emre'nin iki istegi
#    (suyu ac · yakin tonlari yasakla) AYNI YONE cekiyormus.
#
# ⚠️ URETIMI DURDURMAZ, yalniz uyarir — `_paylasim_dogrula` ile ayni
#    gerekce: renk secimi geometriyi etkilemiyor, sert kapi yanlis yerde
#    durur. Ve mesajlarda ASCII disi karakter YOK (sarmalanmamis konsolda
#    patlayan bir uyari, uyarisizliktan kotudur).
SU_RENGI = "#bcd6e6"      # js/app.js'teki `SU_RENGI` ile AYNI olmali
SU_ESIK_DE = 18.0


def _lab_cevir(_h):
    _h = _h.lstrip("#")
    _r, _g, _b = [int(_h[_i:_i + 2], 16) / 255.0 for _i in (0, 2, 4)]

    def _lin(_c):
        return _c / 12.92 if _c <= 0.04045 else ((_c + 0.055) / 1.055) ** 2.4
    _r, _g, _b = _lin(_r), _lin(_g), _lin(_b)
    _x = (0.4124 * _r + 0.3576 * _g + 0.1805 * _b) / 0.95047
    _y = (0.2126 * _r + 0.7152 * _g + 0.0722 * _b) / 1.00000
    _z = (0.0193 * _r + 0.1192 * _g + 0.9505 * _b) / 1.08883

    def _f(_t):
        return _t ** (1.0 / 3) if _t > 0.008856 else (7.787 * _t + 16.0 / 116)
    _fx, _fy, _fz = _f(_x), _f(_y), _f(_z)
    return (116 * _fy - 16, 500 * (_fx - _fy), 200 * (_fy - _fz))


def _su_farki(_hx):
    _a, _b = _lab_cevir(_hx), _lab_cevir(SU_RENGI)
    return sum((_a[_i] - _b[_i]) ** 2 for _i in range(3)) ** 0.5


def _su_yakinligi_dogrula():
    """Suya DE 18'den yakin devlet renklerini bildirir.

    🔴 IKI YONDE DE SINANDI (bu dosyanin kendi kuralı):
      GECME  esik 10'da 0 ihlal -> sessiz kaliyor            ✓
      ATESLE esik 25'e ZORLANINCA 3 kimlik bildirdi          ✓
      Gercek veride bugun 1 ihlal var, yani atesleme yolu ZATEN canli —
      zorlama yalniz UST siniri gormek icin yapildi.
    """
    _yakin = []
    for _kid, _v in BOYALAR.items():
        _hx = _v[1] if isinstance(_v, (tuple, list)) else _v
        if not isinstance(_hx, str) or not _hx.startswith("#") or len(_hx) < 7:
            continue
        _d = _su_farki(_hx)
        if _d < SU_ESIK_DE:
            _yakin.append((_d, _kid, _hx))
    if not _yakin:
        return
    _yakin.sort()
    print("  UYARI su: %d devlet rengi SU RENGINE cok yakin (esik DE %.0f)"
          % (len(_yakin), SU_ESIK_DE))
    for _d, _kid, _hx in _yakin:
        print("    DE %5.1f  %-28s %s   <- kiyisi olan govde suya karisir"
              % (_d, _kid, _hx))


_su_yakinligi_dogrula()
