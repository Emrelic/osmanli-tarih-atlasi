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

BOYALAR = {
    "bizans":     ("Bizans",                 "#8877b8"),
    "memluk":     ("Memlûk",                 "#c9a15b"),
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
    "iran":       ("İran",                   "#fe84c6"),
    "karakoyunlu":("Karakoyunlular",         "#4a5b6b"),
    "akkoyunlu":  ("Akkoyunlular",           "#48ae48"),
    # Irak'ın 1335-1411 penceresi `iran` battaniyesinin altındaydı: İlhanlı
    # ile Karakoyunlu arasındaki 76 yılın sahibi yazılı değildi. Duvarlar
    # zaten Tikrit kaydında duruyordu, eksik olan yalnız kutunun adıydı.
    # TDV CELÂYİRLİLER: 1340-1431, Hasan-ı Büzürg; Bağdat'ı Karakoyunlu
    # Kara Yûsuf aldı (devletler.js karakoyunlu kronolojisi de 1410 diyor).
    "celayirli":  ("Celâyirliler",           "#b5432f"),
    "safevi":     ("Safevî İran",            "#6b4a7d"),
    "gurcistan":  ("Gürcistan",              "#6b7da0"),
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
    "macaristan": ("Macaristan",             "#1e88e5"),
    "avusturya":  ("Avusturya (Habsburg)",   "#d9c76a"),
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
    "almanya":    ("Kutsal Roma / Almanya",  "#16c6fe"),
    "lehistan":   ("Lehistan-Litvanya",      "#b56ba0"),
    "rusya":      ("Rusya",                  "#4f7d4f"),
    "altinorda":  ("Altın Orda ve ardılları","#9e7d9e"),
    "kazan":      ("Kazan Hanlığı",          "#c98f6b"),
    "kirim":      ("Kırım Hanlığı bozkırı",  "#c9825b"),
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
    "isvec":      ("İsveç",                  "#63bda2"),
    # ↑ Baltık kümesi (bkz. `isvec` üstündeki blok) · ton kayması 10,9° —
    #   mor kimliği korundu, en yakın engel ΔE 12,1 · altlıktan 31,1
    "danimarka":  ("Danimarka-Norveç",       "#b484e7"),
    # Eski #b55b6b gül kırmızısıydı (H=349°, S=0.38) — kırmızı tonları Osmanlı
    # ailesine ayrılmıştır, yabancı devlete verilmez. Mora çekildi.
    "ingiltere":  ("Britanya",               "#7e3d8f"),
    "fransa":     ("Fransa",                 "#5b74c9"),
    "ispanya":    ("İspanya",                "#c98f4a"),
    "portekiz":   ("Portekiz",               "#6b8ac9"),
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
    "venedik":    ("Venedik",                "#4a8a8f"),
    "ceneviz":    ("Ceneviz",                "#8a6b4a"),
    "napoli":     ("Napoli / İki Sicilya",   "#a67ba0"),
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
    "sovalye":    ("St. Jean Şövalyeleri",   "#b0a08a"),
    "bulgaristan":("Bulgaristan",            "#7aa06a"),
    "sirbistan":  ("Sırbistan",              "#6a8fa0"),
    "bosna":      ("Bosna Krallığı",         "#8f7d5b"),
    "arnavutluk": ("Arnavutluk",             "#8f5b7d"),
    "yunanistan": ("Yunanistan",             "#6b9ec9"),
    "romanya":    ("Romanya",                "#c9b56b"),
    "karadag":    ("Karadağ",                "#9e8f6b"),
    "yemen":      ("Yemen İmamlığı",         "#b5a05b"),
    "umman":      ("Umman",                  "#5b9e8f"),
    "suud":       ("Suûdî / Vehhâbî",        "#8f9e5b"),
    "sammar":     ("Şammar (Hâil)",          "#a0885b"),
    # TDV ASÎR: Mondros'tan sonra bölge Osmanlı idaresinden çıktı; Ebhâ'da
    # Hasan b. Muhammed Âiz'in emirliği kaldı, 1920'de Abdülazîz b. Suûd
    # Ebhâ'yı zaptetti. Bu 15 ay yazılı olmadığı için Asîr yaylası boştu.
    "aiz":        ("Âiz Emirliği (Ebhâ)",     "#00897b"),
    # Lahsa 1670'te Benî Hâlid'e kaybedildi, 1795'te Suûî́lere geçti; arada
    # hiçbir sahip yazılı olmadığı için bölge haritada boş kalıyordu.
    "benihalid":  ("Benî Hâlid Emirliği (Lahsa)", "#8a9440"),
    # Benî Hâlid'den ÖNCEKİ üç yüzyıl da boştu — daha doğrusu `iran` yazıyordu.
    # Kullanıcının kendi gözlemi (parti-0001/H-0001): "Arabistan yarımadasında
    # da iran diye bölgeler var." Doğu Arabistan hiçbir dönemde İran değildi.
    # TDV CEBRÎLER: 820/1417'de Seyf b. Zâmil kurdu (son Cervânî'yi tasfiye
    # ederek), merkez Lahsâ, 931/1524-25'te sona erdi.
    "usfuri":     ("Usfûrîler (Benî Usfûr)", "#2c5f8a"),
    "cebri":      ("Cebrîler (Benî Cebr)",   "#d1601f"),
    # Umman kıyısı (Cülfâr, Şârika) Portekiz'den önce de `iran` yazıyordu.
    # TDV UMAN: Portekiz 1507'den itibaren sahil şehirlerini aldı; öncesinde
    # bölgede Nebhânîler hüküm sürüyordu.
    # 🟡 İNCELTİLECEK: Cülfâr limanının Hürmüz Krallığı'na tâbiiyeti
    #    literatürde var ama TDV'de ayrı madde yok — kaynaklanınca ayrılır.
    "nebhani":    ("Nebhânîler (Uman)",      "#a0326b"),
    "hicaz":      ("Hicaz Krallığı",         "#9e8a5b"),
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
    "katar":      ("Katar (Âl Sânî)",        "#1565c0"),
    "funj":       ("Func (Sennâr) Sultanlığı","#7d6b4a"),
    "habesistan": ("Habeşistan",             "#7d5b3a"),
    "adal":       ("Adal / Harar",           "#a08f5b"),
    "somali":     ("Somali sultanlıkları",   "#b5a06b"),
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
    "darfur":     ("Dârfûr Sultanlığı",      "#0288d1"),
    "kaffa":      ("Kaffa Krallığı",         "#8e24aa"),
    "cimma":      ("Cimma (Jimma) Krallığı", "#0097a7"),
    "sidamo":     ("Sidamo krallıkları",     "#7b1fa2"),
    "vollayta":   ("Vollayta (Wolaita) Krallığı", "#5c6bc0"),
    # --- 1918 sonrası ardıl devletler: Habsburg ve Romanov gövdeleri dağılınca
    # yerine hiçbir sahip yazılmamıştı; Orta Avrupa 1918-1923 karelerinde boştu.
    "cekoslovakya": ("Çekoslovakya",          "#5d4037"),
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
    "finlandiya":   ("Finlandiya",            "#99a857"),
    "norvec":       ("Norveç",                "#5c6bc0"),
    # --- İtalya birliğinden (1861) önceki sahipler ---
    "sardinya":     ("Sardinya-Piyemonte",    "#795548"),
    "toskana":      ("Floransa / Toskana",     "#9575cd"),
    "milanoduka":   ("Milano Dukalığı",        "#7986cb"),
    # Hartum 1885'te düştükten sonra Sudan 14 yıl Mehdî Devleti'ndeydi;
    # yazılı olmadığı için bölge o pencerede haritada boş kalıyordu.
    "mehdi":        ("Mehdî Devleti (Sudan)",  "#4e342e"),
    # --- Func Sultanlığı'ndan (1504) önceki Hıristiyan Nûbe krallıkları ---
    "nube":         ("Nûbe krallıkları (Makurya-Alve)", "#6d4c41"),
    # --- Orta Asya (Oturum 11) — Hazar doğusu ve Harezm ---
    # Çağatay Hanlığı 1227-1370; Timurlu'nun selefi. Hîve (Harezm) 1511-1920 ve
    # Buhara 1500-1920 Özbek hanlıkları. Türkmen boyları çoğu zaman devletsizdi;
    # Hîve ile İran arasında el değiştiren kıyı şeridi için ayrı kimlik.
    "cagatay":      ("Çağatay Hanlığı",        "#6a1b9a"),
    "hive":         ("Hîve Hanlığı (Harezm)",  "#00695c"),
    "buhara":       ("Buhara Hanlığı",         "#4527a0"),
    # ⚠️ Eski #8d6e63 iki sorun cikariyordu (Oturum 11 olctu): iran'in #b5885b
    # tonuna ham DeltaE 22.7 — bindirilmis halde ~7.6, ve ikisi 1860-1881 arasi
    # Kopet Dag boyunca DOGRUDAN sinirdas. Ayrica timurlu ile BIREBIR ayni hex'ti.
    "turkmen":      ("Türkmen boyları",        "#00acc1"),
    "fas":        ("Fas",                    "#9e6b5b"),
    # --- Beylik öncesi Anadolu'nun sahipleri (kullanıcı tespiti: 1288 haritasında
    # beylikler yanlış; hepsi 1281'de başlıyordu, gerçek kuruluşları onlarca yıl
    # sonra. Doğru tarihlere çekilince yerlerini bu devletler dolduruyor.) ---
    # TDV: Anadolu Selçuklu Devleti 1308'de sona erdi (II. Mesud'un ölümü).
    "selcuklu":     ("Anadolu Selçukluları",  "#c2185b"),
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
    "trabzon-rum":  ("Trabzon Rum İmparatorluğu", "#63bdc0"),
    # Kilikya Ermeni Krallığı 1198-1375; Çukurova'nın Ramazanoğulları öncesi sahibi.
    "kilikya-ermeni": ("Kilikya Ermeni Krallığı", "#5e35b1"),
    # --- Anadolu beylikleri (Osmanlı kuruluş coğrafyasının fetih öncesi sahipleri) ---
    "karaman":    ("Karamanoğulları",         "#4527a0"),
    # Eski #8f6b3a Ceneviz'e (#8a6b4a) ΔE 9.5, Hamîd'e 12.8, Ahi'ye 14.5 mesafedeydi.
    # Germiyan sahnede 15 devletle sınırdaş — Anadolu'nun en kalabalık köşesi.
    "germiyan":   ("Germiyanoğulları",        "#3d748f"),
    "aydin":      ("Aydınoğulları",           "#4a8f7d"),
    # Eski #6b8f4a, 60 km ötedeki Karesi'ye (#6b9e5b) ΔE 7.5 idi — iki beylik
    # haritada tek gövde gibi görünüyordu.
    "saruhan":    ("Saruhanoğulları",         "#b34da5"),
    # Eski #3a7d8f, Venedik'in turkuazına (#4a8a8f) ΔE 9.2 idi; Ege'de ikisi
    # sürekli yan yana duruyor. Venedik köklü renk olduğu için Menteşe taşındı.
    "mentese":    ("Menteşeoğulları",         "#83b34d"),
    "hamid":      ("Hamîdoğulları",           "#8f7d3a"),
    # TDV TEKEOĞULLARI: Hamîdoğulları'ndan ayrılan kol; Dündar Bey'in fethinden
    # sonra Antalya kardeşi Yûnus Bey'e verildi (~1321) ve ayrı beylik doğdu.
    # Antalya bu tarihten sonra Hamîd değil TEKE toprağıdır.
    "teke":       ("Tekeoğulları",            "#b58f2d"),
    "candar":     ("Candaroğulları",          "#5b6b9e"),
    "dulkadir":   ("Dulkadiroğulları",        "#00838f"),
    "ramazanoglu":("Ramazanoğulları",         "#33691e"),
    "karesi":     ("Karesioğulları",          "#6b9e5b"),
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
    "timurlu":         ("Timurlu valiliği",              "#8d6e63"),
    "suleyman-celebi": ("Emîr Süleyman Çelebi (Rumeli)", "#570012"),
    "isa-celebi":      ("İsa Çelebi (Bursa)",            "#ff96a5"),
    "mehmed-celebi":   ("Çelebi Mehmed (Amasya)",        "#f90c15"),
    "musa-celebi":     ("Musa Çelebi (Rumeli)",          "#e14e5a"),
    # ⚠️ Eski #7a9e6b, Bulgaristan'ın #7aa06a'sına ΔE 1.8 — pratikte AYNI RENK.
    # Tuna'nın iki yakası 1281-1878 boyunca tek gövde gibi görünüyordu. Yeşil
    # kimlik korundu ama parlaklık/doygunluk ayrıldı: Bulgaristan'a ΔE 33.
    "eflak":      ("Eflak Voyvodalığı",      "#4db34d"),
    "bogdan":     ("Boğdan Voyvodalığı",     "#6b9e8a"),
    "lusignan":   ("Kıbrıs Krallığı (Lüzinyan)", "#8a6ba0"),
    # ⚠️ Orta Anadolu renkleri kasten doygun seçildi: önceki toprak tonları
    # (#a08a6b / #9e8a6b) arazi kabartma katmanının beji ile karışıyor ve
    # "Ankara civarında kimse yok" görüntüsü veriyordu.
    "ilhanli":    ("İlhanlı Devleti",         "#7a5ba0"),
    "eretna":     ("Eretna Beyliği",          "#3f8f6b"),
    "burhaneddin":("Kadı Burhâneddin Devleti","#455a64"),
    "artuklu":    ("Artukoğulları",           "#6b8a9e"),
    "ahiler":     ("Ahi Birliği (Ankara)",    "#8f7d5b"),
    # --- kullanıcının sorduğu, haritada temsili olmayan beylikler ---
    "cobanogullari":  ("Çobanoğulları",        "#4a8f8f"),
    # Eski #3a6b9e, komşusu Candaroğulları'na (#5b6b9e) ΔE 8.6 idi; Kastamonu ile
    # Sinop 135 km arayla iki ayırt edilemez mavi gövdeydi.
    "pervane":        ("Pervâneoğulları",      "#70c28b"),
    "esrefogullari":  ("Eşrefoğulları",        "#b5548f"),
    "inancogullari":  ("İnançoğulları",        "#5b4ab5"),
    "sahibata":       ("Sâhib Ataoğulları",    "#8f9e2d"),
    "taceddin":       ("Tâceddinoğulları",     "#2d8f4a"),
    # TDV ALÂİYE BEYLİĞİ: 1293'te Karamanoğlu Mecdüddin Mahmud Bey'in eline geçti,
    # o tarihten 1471'de Gedik Ahmed Paşa'nın kuşatmasına kadar kendi bey soyuyla
    # yönetildi. Haritada Karaman'ın içinde eriyordu; ayrı renk verildi.
    "alaiye":         ("Alâiye Beyliği",       "#0277bd"),
    # TDV ORDU (şehir): Bayram Bey'in kurduğu, oğlu Hacı Emîr'in ~1350'de
    # genişlettiği Türkmen beyliği; merkezi Eskipazar. 1398'de Yıldırım'a
    # bağlandı, 1427'de ilhak edildi. Ordu-Ünye kıyısı haritada noktasızdı.
    "haciemir":       ("Hacıemîroğulları (Ordu)", "#ef6c00"),
    "mutahharten":    ("Erzincan Beyliği (Mutahharten)", "#827717"),
    "hafsi":      ("Hafsîler (Tunus)",        "#7d8f3a"),
    "zeyyani":    ("Zeyyânîler (Tilimsan)",   "#6ba0a0"),
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
    "atinadukaligi": ("Atina Dukalığı",       "#8a9e8a"),

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
    "kavalali":   ("Mısır (Kavalalı Ordusu)", "#00acc1"),

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
    "belcika":       ("Belçika",                   "#4b9cae"),
    "bretanya":      ("Bretanya Dukalığı",         "#36693f"),
    "burgonya":      ("Burgonya Dukalığı",         "#ab9ccf"),
    "ferrara":       ("Ferrara Dukalığı",          "#ae7e4b"),
    "irlanda":       ("İrlanda",                   "#06b1fc"),
    "iskocya":       ("İskoçya Krallığı",          "#3633d5"),
    "isvicre":       ("İsviçre Konfederasyonu",    "#754bae"),
    "kastilya":      ("Kastilya Krallığı",         "#4bae4e"),
    "luksemburg":    ("Lüksemburg",                "#4b3f51"),
    "mantua":        ("Mantua Dukalığı",           "#2a6fd5"),
    "navarra":       ("Navarra Krallığı",          "#c94530"),
    "parma":         ("Parma Dukalığı",            "#ae4b75"),
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
    "zaporojye":     ("Zaporojye Kazak Hetmanlığı", "#8c92fe"),

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
    "abd":                     ("Amerika Birleşik Devletleri",       "#6ba0a0"),
    "ayutthaya":               ("Ayutthaya Krallığı (Siyam)",        "#6ba0a0"),
    "edo-bakufu":              ("Edo (Tokugawa) Şogunluğu",          "#6ba0a0"),
    "kamakura":                ("Kamakura Şogunluğu (Japonya)",      "#6ba0a0"),
    "maratha":                 ("Maratha Konfederasyonu",            "#6ba0a0"),
    "muromachi":               ("Muromachi (Ashikaga) Şogunluğu",    "#6ba0a0"),
    "siyam-chakri":            ("Siyam Krallığı (Rattanakosin / Chakri Hanedanı)", "#6ba0a0"),
    # ── #636f03  [ASYA · ① EKSİK, gövde yok · zarf(-25,-17.5,159,74) teyitli]  ile paylaşımlı (siena) · 5 kimlik
    "behmeni":                 ("Behmenî Sultanlığı (Dekken)",       "#636f03"),
    "qing-hanedani":           ("Qing Hanedanı (Mançu)",             "#636f03"),
    "sulu-sultanligi":         ("Sulu Sultanlığı",                   "#636f03"),
    "toungoo":                 ("Toungoo Hanedanı (Birmanya)",       "#636f03"),
    "yuan-hanedani":           ("Yuan Hanedanı (Moğol Çin)",         "#636f03"),
    # ── #7b1fa2  [ASYA · ① EKSİK, gövde yok · zarf(-25,-17.5,159,74) teyitli]  ile paylaşımlı (sidamo) · 5 kimlik
    "brunei-sultanligi":       ("Brunei Sultanlığı",                 "#7b1fa2"),
    "cungar":                  ("Cungar Hanlığı (Kalmuk)",           "#7b1fa2"),
    "konbaung":                ("Konbaung Hanedanı (Birmanya)",      "#7b1fa2"),
    "ryukyu":                  ("Ryukyu Krallığı",                   "#7b1fa2"),
    "yakub-beg":               ("Doğu Türkistan (Yâkub Bey Kâşgar Emirliği)", "#7b1fa2"),
    # ── #00695c  [ASYA · ① EKSİK, gövde yok · zarf(-25,-17.5,159,74) teyitli]  ile paylaşımlı (yugoslavya) · 5 kimlik
    "goryeo":                  ("Goryeo Hanedanı (Kore)",            "#00695c"),
    "hollanda-dogu-hint":      ("Hollanda Doğu Hint Adaları",        "#00695c"),
    "joseon":                  ("Joseon Hanedanı (Kore)",            "#00695c"),
    "majapahit":               ("Majapahit İmparatorluğu (Cava)",    "#00695c"),
    "sih-imparatorlugu":       ("Sih İmparatorluğu (Pencap)",        "#00695c"),
    # ── #2d8f4a  [ASYA · ① EKSİK, gövde yok · zarf(-25,-17.5,159,74) teyitli]  ile paylaşımlı (taceddin) · 4 kimlik
    "ace-sultanligi":          ("Açe Sultanlığı (Sumatra)",          "#2d8f4a"),
    "malaka-sultanligi":       ("Malaka Sultanlığı",                 "#2d8f4a"),
    "meiji-japonya":           ("Meiji ve Sonrası Japonya İmparatorluğu", "#2d8f4a"),
    "ming-hanedani":           ("Ming Hanedanı",                     "#2d8f4a"),
    # ── #b34da5  [ASYA · ① EKSİK, gövde yok · zarf(-25,-17.5,159,74) teyitli]  ile paylaşımlı (saruhan) · 4 kimlik
    "mataram-sultanligi":      ("Mataram Sultanlığı (Cava)",         "#b34da5"),
    "meysur":                  ("Meysûr Sultanlığı (Haydar Ali / Tipu Sultan)", "#b34da5"),
    "nguyen-hanedani":         ("Nguyễn Hanedanı (Vietnam)",         "#b34da5"),
    "tibet-ganden-phodrang":   ("Tibet (Dalai Lama Hükûmeti, Ganden Phodrang)", "#b34da5"),
    # ── #00acc1  [ASYA · ① EKSİK, gövde yok · zarf(-25,-17.5,159,74) teyitli]  ile paylaşımlı (turkmen) · 3 kimlik
    "delhi-sultanligi":        ("Delhi Sultanlığı",                  "#00acc1"),
    "ingiliz-hindistani":      ("İngiliz Hindistanı (Şirket ve Taç Dönemi)", "#00acc1"),
    "ingiliz-malaya":          ("İngiliz Malaya",                    "#00acc1"),
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
    "babur-imparatorlugu":     ("Bâbürlü (Timurlu-Hint) İmparatorluğu", "#0288d1"),
    # ── #6b4a7d  [ASYA · ① EKSİK, gövde yok · zarf(-25,-17.5,159,74) teyitli]  ile paylaşımlı (safevi) · 1 kimlik
    "le-hanedani":             ("Lê Hanedanı (Đại Việt)",            "#6b4a7d"),
}
