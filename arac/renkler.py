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
  ⚠️ Dolgu %30 saydamlıkla fiziki altlığın üzerine biniyor. Ekrandaki gerçek
    renk buradaki hex DEĞİL, altlıkla karışmış hâlidir ve bu karışım renk
    farklarını yaklaşık üçte bire sıkıştırır. ΔE ölçümü BİNDİRİLMİŞ renk
    üzerinden yapılmalıdır; ham hex üzerinden yapılan ölçüm iyimserdir.
"""

BOYALAR = {
    "bizans":     ("Bizans",                 "#8877b8"),
    "memluk":     ("Memlûk",                 "#c9a15b"),
    "iran":       ("İran",                   "#b5885b"),
    "karakoyunlu":("Karakoyunlular",         "#4a5b6b"),
    "akkoyunlu":  ("Akkoyunlular",           "#b5bcc9"),
    "safevi":     ("Safevî İran",            "#6b4a7d"),
    "gurcistan":  ("Gürcistan",              "#6b7da0"),
    "macaristan": ("Macaristan",             "#4e7d46"),
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
    "funj":       ("Func (Sennâr) Sultanlığı","#7d6b4a"),
    "habesistan": ("Habeşistan",             "#7d5b3a"),
    "adal":       ("Adal / Harar",           "#a08f5b"),
    "somali":     ("Somali sultanlıkları",   "#b5a06b"),
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
    "suleyman-celebi": ("Emîr Süleyman Çelebi (Rumeli)", "#b71c1c"),
    "isa-celebi":      ("İsa Çelebi (Bursa)",            "#e04b2a"),
    "mehmed-celebi":   ("Çelebi Mehmed (Amasya)",        "#a8183f"),
    "musa-celebi":     ("Musa Çelebi (Rumeli)",          "#d81b60"),
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
    "atinadukaligi": ("Atina Dukalığı",       "#8a9e8a"),
}
