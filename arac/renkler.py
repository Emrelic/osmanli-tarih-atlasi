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
    "iran":       ("İran",                   "#b5885b"),
    "karakoyunlu":("Karakoyunlular",         "#4a5b6b"),
    "akkoyunlu":  ("Akkoyunlular",           "#48ae48"),
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
    "almanya":    ("Kutsal Roma / Almanya",  "#9a9a9a"),
    "lehistan":   ("Lehistan-Litvanya",      "#b56ba0"),
    "rusya":      ("Rusya",                  "#4f7d4f"),
    "altinorda":  ("Altın Orda ve ardılları","#9e7d9e"),
    "kazan":      ("Kazan Hanlığı",          "#c98f6b"),
    "kirim":      ("Kırım Hanlığı bozkırı",  "#c9825b"),
    "isvec":      ("İsveç",                  "#7bb5c9"),
    "danimarka":  ("Danimarka-Norveç",       "#8f8fb5"),
    # Eski #b55b6b gül kırmızısıydı (H=349°, S=0.38) — kırmızı tonları Osmanlı
    # ailesine ayrılmıştır, yabancı devlete verilmez. Mora çekildi.
    "ingiltere":  ("Britanya",               "#7e3d8f"),
    "fransa":     ("Fransa",                 "#5b74c9"),
    "ispanya":    ("İspanya",                "#c98f4a"),
    "portekiz":   ("Portekiz",               "#6b8ac9"),
    "granada":    ("Gırnata Emirliği",       "#7ba05b"),
    "hollanda":   ("Hollanda",               "#d98f5b"),
    "venedik":    ("Venedik",                "#4a8a8f"),
    "ceneviz":    ("Ceneviz",                "#8a6b4a"),
    "napoli":     ("Napoli / İki Sicilya",   "#a67ba0"),
    "papalik":    ("Papalık",                "#c9c1a3"),
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
    "letonya":      ("Letonya",               "#78909c"),
    "litvanya":     ("Litvanya",              "#a1887f"),
    "finlandiya":   ("Finlandiya",            "#90a4ae"),
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
    "trabzon-rum":  ("Trabzon Rum İmparatorluğu", "#00838f"),
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
}
