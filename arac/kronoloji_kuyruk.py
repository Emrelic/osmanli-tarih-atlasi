"""KRONOLOJI-1104 — doğrulama dosyalarından KASA PAZAR (veri sahibi) iş kuyruğu (SALT OKUR).

Girdi: denetim/KRONOLOJI-1104/oneri_*_dogrulama.tsv (+ tarayici_sonuc.tsv notları elle SONUC-61'de).
Çıktı: denetim/KRONOLOJI-1104/KUYRUK-KASA-PAZAR.tsv — yalnız uygulanabilir satırlar:
  TARIH_DUZELT  → tarih değişikliği önerisi (kaynak + okunan cümle)
  DOGRULANDI    → kaynak alanı yenilenir (güvensiz/bulunamadı damgası kalkar)
Öteki sonuçlar (CEKILEMEDI/BULUNAMADI/…) kuyruğa girmez; sayısı özetlenir.

    py arac/kronoloji_kuyruk.py
"""
import collections, csv, glob, os, sys
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from kronoloji_takvim_tarama import BRITANYA, RUSYA, gun as _gun

# Takvim kanadı kaynakla belirlenmiş (Gregoryen olduğu bilinen) satırlar — uyarı düşmez
TAKVIM_TEMIZ = {
    "L2-227",  # Tender of Union: archontology «4/14 Feb 1652» iki günü veriyor → 02-14 Gregoryen (KASA PAZAR d74d5acc2)
    "L2-346",  # Gimry: atlas 1832-10-29 = Jülyen 17 Ekim + 12, zaten Gregoryen (KASA PAZAR)
}


def takvim_kanadi(r):
    """1582-1752 Britanya/İrlanda ya da 1582-1918 Rusya penceresinde gün taşıyan satır → (kanat, fark)."""
    g = _gun(r.get("tarih_atlas", ""))
    if not g or g[1:] == (1, 1):
        return None
    metin = " ".join(r.get(k, "") or "" for k in ("dosya_satir", "uyum", "kaynak", "okunan_cumle"))
    if (1582, 10, 15) <= g <= (1752, 9, 13) and BRITANYA.search(metin):
        return ("Britanya/İrlanda", "+10" if g < (1700, 3, 1) else "+11")
    if (1582, 10, 15) <= g <= (1918, 2, 13) and RUSYA.search(metin):
        return ("Rusya", "+10" if g < (1700, 3, 1) else "+11" if g < (1800, 3, 1) else "+12" if g < (1900, 3, 1) else "+13")
    return None
sys.stdout.reconfigure(encoding="utf-8", errors="replace")
KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
D = os.path.join(KOK, "denetim", "KRONOLOJI-1104")
CIKTI = os.path.join(D, "KUYRUK-KASA-PAZAR.tsv")
# Koordinatör kararıyla bekletilenler (EMRELİC 1 KASIM, 4 Kasım 2026).
BEKLET = {
    # L2S YENI-TARAYICI (S16)
    "L2-819": "Kosta Rika 1948-04-24 → 04-19 adayı: Archivo Nacional iç savaşı 12 Mart-19 Nisan, Meksika Büyükelçiliği Paktı 19 Nisan; 24 Nisan Figueres'in San José'ye girişi olabilir (okunmadı) → madde hangi olayı anlatıyor netleşmeden uygulanmaz",
    "L2-789": "Libya BMA 1943-01-01 → 01-23 adayı: London Gazette 38196 s.863-864 (Montgomery: Tripoli «three months to the day» taarruzdan) — gün türetme, ikinci kaynak gerekli",
    "L2-821": "Baroda #8 1948-09-04 → 1948-04-11 adayı: Menon (1956) 11 Nisan 1948 bildirgesiyle halk bakanlığı; Eylül 1948 Menon'da yok, 4 Eylül ayrı adım olabilir (tanıksız) → karar",
    # L2E 1013-1024 / 1037-1048 (EMRELİC) — İngiliz/İrlanda 1582-1752 eski takvim şüphesi
    "L2-1422": "[TAKVİM — eski/yeni takvim kanadı belirsiz] Kilkenny 1642-10-24 (CELT): İngiliz/İrlanda 1582-1752 kaynağı Jülyen olabilir (+10 gün → 11-03); İrlanda Konfederasyonu kimi zaman yeni takvim kullandı → kaynağın kanadı belirlenene kadar uygulanmaz (EMRELİC sistemik uyarısı)",
    "L2-1423": "[TAKVİM — eski/yeni takvim kanadı belirsiz] Cessation 1643-09-15 (Rushworth, zayıf): eski takvim olabilir (+10 → 09-25) → kanat belirlenene kadar uygulanmaz",
    "L2-1451": "[TAKVİM — kanat belirsiz] Woodes Rogers ölümü 1732-07-15: İngiliz kaynağı eski takvim olabilir (+11 → 07-26) → kanat belirlenene kadar uygulanmaz",
    "L2-1389": "İspanyol Peru: Núñez Vela 1544-09-18 tutuklandı — tek dayanak encyclopedia.com (zayıf) → akademik kaynak gelmeden kaynak yenilenmez (EMRELİC)",
    "L2-898": "Hun Sen 1985-01-14: tek dayanak Encyclopedia.com (Gale künyesi doğrulanmadı) → ikinci kaynak gelmeden kaynak yenilenmez",
    # L2E 927-951 (EMRELİC)
    "L2-1326": "Brabant 1354 → 1356-01-03 (Joyeuse Entrée) adayı: dayanak yalnız Persée'deki eser başlığı → KISMEN; metin okunmadan uygulanmaz (EMRELİC)",
    # L2S 423-447 (S13)
    "L2-782": "Eritre BMA 1941-01-01 → ? : Keren düşüşü 03-27, Asmara teslimi 04-01 (Playfair, UK official history vol.I ch.XXIII); BMA resmî kuruluş günü kaynakta yok → madde Keren mi Asmara mı netleşmeden düzeltilmez",
    "L2-791": "Arnavutluk 1943-09-14 → 09-11 adayı (Ademi 2021: komite 11 Eylül bağımsızlığı yeniden ilan etti; 14 Eylül Biçaku çağrısı); kuruluş günü kaynakta ayrıca yok, tek kaynak",
    "L2-796": "BMA Malaya 1945-01-01 → 1945-09-03 (Cheah, ISEAS 2002) / 09-05 (JSEAS) çelişkisi → üçüncü kaynak; MacMichael 11 Ekim, Malaya Birliği 1946-04-01 hukukî",
    "L2-797": "BMA Malaya 1945-01-01 → 1945-09-03 (Cheah, ISEAS 2002) / 09-05 (JSEAS) çelişkisi → üçüncü kaynak",
    # L2S 448-469 (S14)
    "L2-826": "Müttefik Kontrol Konseyi: Sovyet ayrılışı 1948-03-20 «virtually dissolved» (Hansard HC 6 Nisan 1948; International Organization 2/3) fiilî; Konsey hukuken feshedilmedi, Yüksek Komiserlik 1949-09-21 → tek kural gereği atlas 1949-09-20 KALIR adayı; 1948-03-20 ic_not'a. Sınır kırılmasına bağlıysa önce ölç",
    # L2S 248-272 (S11)
    "L2-629": "Jin (Li Keyong) 902 → 895 zayıf aday: «封晉王» Xin Wudai shi 4 乾寧二年 anlatısında, yıl başlığı açık değil; künye kuruluşu mu unvanı mı tarihliyor — ikinci kaynak",
    # L2E 273-297 (EMRELİC @7fc83e4): ganzhi günleri Academia Sinica teyidine kadar BEKLE
    "L2-638": "[çeviri doğrulanmadı] ganzhi günü (908 / 913 / 915 / 918 Goryeo / 923) — Academia Sinica teyidi bekliyor (EMRELİC)",
    # L2S 173-197 (S8): ajanın kendi ganzhi hesabı, gün taşıyan iki madde — Academia Sinica teyidine kadar
    "L2-489": "Agathokles darbesi -0315: Austin/Diodoros MÖ 316 der, literatürde 317/316 ikilemi → ikinci akademik kaynak gelmeden atlas -0316 kalır",
    "L2-318": "Santo Domingo: kural teslim (kapitülasyon) günü; 07-07 teslim mi fiilî devir mi belirsiz → Diario de la Reconquista okununca karar; 07-09 fiilî devir ise ic_not",
    # 351-375: DOGRULANDI ama dayanak tek ve ansiklopedi dışı web (kişisel kronoloji, belediye, dernek)
    "L2-357": "tek, ansiklopedi dışı (pdavis.nl/Clowes); 3 Kasım yalnız getirme özetinde",
    "L2-359": "tek, SA Military History Journal (dernek dergisi); «Cape Kolonisi'ne bağlı» doğrulanmadı",
    "L2-360": "tek, SA Military History Journal; Volksraad'ın şartları kabulü kaynakta yok",
    "L2-365": "tek, Wiesbaden belediye sitesi",
    "L2-370": "tek, K. Dierks kişisel Namibya kronolojisi",
    "L2-371": "tek, K. Dierks kişisel Namibya kronolojisi",
    "L2-384":"Payut 1862-04-06: Chalfant, Story of Inyo (1933) akademik olmayan yerel tarih → en çok KISMEN, tek başına düzeltme dayanağı değil",
    # L2E 348-372 Da Chu ganzhi günleri — Academia Sinica teyidi bekliyor (EMRELİC)
    "L2-732": "Gaeta: Treccani «nel 1136», atlas 1140 → ikinci kaynak gelene kadar BEKLE (EMRELİC)",
    "L2-372": "İngiliz Burma: aday 1853-01-20 (NAM, ilan); 1852-12-20 yalnız özette → Aitchison'da İLHAK BİLDİRİSİ tarihi ile Rangoon İLAN günü ayrı bulunacak; tek kurala göre s: değişimi bildiri tarihi",
    "L2-341":"Man Adası 1828: dayanak yalnız EB1911 (eski başvuru, en çok KISMEN) → tek başına düzeltme dayanağı değil; akademik kaynak aranacak",
    "L2-144":"Chūzan seikan (17. yy resmî derleme) tek başına KISMEN; modern akademik teyit (CHJ / Kerr, Okinawa) gelene kadar atlas günü kalır",
}
# Doğu Asya ganzhi günleri — Academia Sinica (sinocal luso, Jülyen) ile EMRELİC 1 KASIM doğruladı, 4 Kasım 2026.
# Sinocal'de Japon yıl adı yok: aynı gün Çin takvimiyle sorgulandı, ganzhi gün adı eşleşti.
TAKVIM_AS = {
    "L2-562": "Takvim: Tianbao 10/10/10 甲午 = 559-11-25 ölüm; 10/19 癸卯 = 559-12-04 發喪 (Academia Sinica)",
    "L2-607": "Takvim: Xianheng 4/12/25 丙午 = 674-02-06 (Academia Sinica)",
    # L2S 223-247 (S10) — EMRELİC Academia Sinica
    "L2-583": "Takvim: Wude 1/9/12 甲寅 = 618-10-06 (Academia Sinica; atlas 09-24 8. aya düşer) → TARIH DÜZELT",
    "L2-584": "Takvim: Wude 1/11/8 己酉 = 618-11-30 (Academia Sinica; atlas 11-22 10. aya düşer) → TARIH DÜZELT",
    "L2-599": "Takvim: Zhenguan 22/2/7 戊午 = 648-03-06 (Academia Sinica) → TARIH DÜZELT",
    "L2-581": "Takvim: Yining 1/11 丙辰 = 617-12-12; 癸亥 = 12-19 (Academia Sinica)",
    "L2-582": "Takvim: Wude 1/5/20 甲子 = 618-06-18 (Academia Sinica)",
    "L2-600": "Takvim: Zhenguan 22 閏12 丁丑 = 649-01-19 (Academia Sinica; Zhenguan 23 değil)",
    "L2-602": "Takvim: Zhenguan 22 閏12 丁丑 = 649-01-19 (Academia Sinica; Zhenguan 23 değil)",
    "L2-603": "Takvim: Xianqing 5/7/18 = 660-08-29 (Academia Sinica; 08-28 17. gündür)",
    # L2E 273-297 + S8 (EMRELİC, Academia Sinica; EŞLEŞİR)
    "L2-645": "Takvim: Goryeo Taejo 1/6 乙卯 = 918-07-24, 丙辰 = 07-25 cülus (Zhenming 4 takvimi; Academia Sinica)",
    "L2-652": "Takvim: Tongguang 1/4 己巳 = 923-05-13 (Academia Sinica)",
    "L2-653": "Takvim: Longde 3/10 戊寅 = 923-11-18; 己卯 = 11-19 Liang'ın sonu (Academia Sinica)",
    "L2-544": "Takvim: Liang Tianjian 5/1/6 壬申 = 506-02-14 (Academia Sinica)",
    # L2E 298-322 (EMRELİC, Academia Sinica; EŞLEŞİR)
    "L2-656": "Takvim: Liao Tianxian 1/1/3 庚申 = 926-02-17 (Academia Sinica)",
    "L2-657": "Takvim: Liao Tianxian 1/2/19 丙午 = 926-04-04 (Academia Sinica)",
    "L2-663": "Takvim: 壬申 = 936-01-08 (Academia Sinica)",
    "L2-664": "Takvim: 壬申 = 936-01-08 (Academia Sinica)",
    "L2-665": "Takvim: 9/8 甲午 = 936-09-26 (Academia Sinica)",
    "L2-666": "Takvim: 11/12 丁酉 = 936-11-28 (Academia Sinica)",
    "L2-667": "Takvim: 11/12 丁酉 = 936-11-28 (Academia Sinica)",
    "L2-671": "Takvim: 閏11/26 辛巳 = 937-01-11 (Academia Sinica)",
    "L2-672": "Takvim: 閏11/26 辛巳 = 937-01-11 (Academia Sinica)",
    "L2-731": "Takvim: Shaoxing 7/11 丁未 = 1138-01-02 (丙午 = 01-01 tahttan indirme, Song shi c.475) (Academia Sinica)",
    "L2-738": "Takvim: Jishō 4/10/21 庚子 = 1180-11-10 (Academia Sinica)",
    "L2-740": "Takvim: Yōwa 1/8/15 = 1181-09-25 (8/13 丁巳 = 09-23) (Academia Sinica)",
    "L2-743": "Takvim: Juei 3/2/7 丙寅 = 1184-03-20 (Academia Sinica)",
    "L2-745": "Takvim: Genryaku 2/3/24 丁未 = 1185-04-25 (Academia Sinica)",
    "L2-742": "Takvim: Juei 2/7/25 = 1183-08-14 (Academia Sinica; ganzhi yok, Çin–Japon ay başı eşdeğerliği VARSAYILDI; ay hassasiyetli satır)",
    # L2E 348-372 Da Chu (EMRELİC, Academia Sinica)
    "L2-721": "Takvim: Jingkang 2/3/7 丁酉 = 1127-04-20 (Academia Sinica) → atlas 03-01 DÜZELT",
    "L2-722": "Takvim: Jingkang 2/4/9 戊辰 = 1127-05-21 (Zhang Bangchang imparatoriçe anayı saraya aldı; Academia Sinica) → atlas 04-01 DÜZELT; Gaozong cülûsu Jianyan 1/5/1 庚寅 = 1127-06-12 ic_not'a",
    # L2E 323-347 (EMRELİC, Academia Sinica; hepsi EŞLEŞİR)
    "L2-696": "Takvim: Yongxi 2/2/20 乙未 = 985-03-14 (Academia Sinica)",
    "L2-689": "Takvim: Kaibao 4/2 丁亥 = 971-03-20 (elçi), 己丑 = 971-03-22 (Guangzhou'nun alınışı) (Academia Sinica)",
    "L2-688": "Takvim: Kaibao 4/2 己丑 = 971-03-22 (Guangzhou'nun alınışı; L2-689 ile aynı olay) (Academia Sinica)",
    "L2-684": "Takvim: Jianlong 4 (建隆四年)/3 戊寅 = 963-04-22 (Academia Sinica) — madde «Qiande 1» diyorsa «Jianlong 4» yapılır (Qiande 963 sonunda başlar)",
    "L2-683": "Takvim: Jianlong 4 (建隆四年)/2 甲午 = 963-03-09 (Academia Sinica) — madde «Qiande 1» diyorsa «Jianlong 4» yapılır",
    "L2-692": "Takvim: Taiping Xingguo 3/5/1 乙酉 = 978-06-09 (Academia Sinica)",
    "L2-691": "Takvim: Taiping Xingguo 3/5 (ay hassasiyeti) = 978-06 (Academia Sinica)",
    "L2-700": "Takvim: Liao Taiping 2/4 = 1022-05-04…06-01 (Academia Sinica) → satıra «1022-05» (ay hassasiyeti)",
}
# Koordinatör kararıyla iş türü değişenler (EMRELİC 1 KASIM, 4 Kasım 2026).
DEGISTIR = {
    "L2-932": ("tarih düzelt", "Modena Este'ye: 1288-06-01 → 1288-12-15 (Treccani EI «Modena»: «Il 15 dicembre 1288 … offrire il dominio e le chiavi della città a Obizzo»); fiilî giriş 1289-01-23 ic_not; +197 gün — s:/sınıra bağlıysa kırılma ve ±30 gün komşu maddeler (Reggio 1289) birlikte taşınır; tek kaynak"),
    "L2-1401": ("tarih düzelt", "Tondibi / Dendi künye ucu 1591-01-01 → 1591-03-01 + «[yalnız ay teyitli; gün teyitsiz]» (Kaba, Journal of African History 1981: Mart 1591); Ta'rikh es-Sudan rivayeti 12 Nisan 1591 → çelişki ic_not'a iki kaynağıyla (EMRELİC)"),
    # L2S 198-222 (S9) — EMRELİC Academia Sinica
    "L2-559": ("tarih düzelt", "557-01-01 → 557-02-14: Takvim: Batı Wei Gong Di 3/12/30 庚子 = 557-02-14 (Academia Sinica) 禪位 (Zhou shu 3); künye ucu — Değişmez 2 ±30 gün kontrolü"),
    "L2-565": ("tarih düzelt", "573-11-10 → 573-11-22: Takvim: Chen Taijian 5/10/13 乙巳 = 573-11-22 (Academia Sinica) Shouyang alındı (ZZTJ 171)"),
    "L2-566": ("tarih düzelt", "575-08-21 → 575-09-11 + metin «Zhou ordusu Qi sınırına girdi»: Takvim: Jiande 4/8/21 癸卯 = 575-09-11 (Academia Sinica); atlas 08-21 = 7/29 壬午 ordunun Chang'an'dan çıkışı → ic_not; Bei Qi shu 閏月己丑 çözülmez (Qi artık ayı 閏8 = 575-09-21…10-19, içinde 己丑 yok) → çelişki ic_not'a"),
    "L2-606": ("tarih düzelt", "674-01-01 → 674-02-12 + «[yalnız ay teyitli; gün teyitsiz]» (ay hassasiyeti; «674-02» yazılmaz — CLAUDE.md: ayın 1'ine genişler, Çin ayının başı 02-12'dir): Takvim: 咸亨5年 (Munmu 14) 正月 = 674-02-12…03-12 Jülyen (Academia Sinica, EMRELİC); Samguk sagi 7 十四年春正月"),
    "L2-770": ("tarih düzelt", "Taif Antlaşması 1934-06-14 → 1934-05-20 imza (Bostancı, Karadeniz Araştırmaları Enstitüsü Dergisi 10/21, 2024, s.51-76: 6 Safer 1353; metin 19, alt başlık 20 Mayıs — hicrî kesişim 20 Mayıs'ı verir, ic_not'ta iki gün beyan); onay 12 Haziran (Abdülaziz) / 26 Haziran (İmam Yahya), yürürlük ve mübadele 1934-06-26 → ayrı madde ya da ic_not; atlas 06-14 hiçbir uca uymuyor"),
    "L2-608": ("tarih düzelt", "683-08-29 → 683-08-26 (EMRELİC kararı): uzun sayım 9.12.11.5.18 yazıtın kendisi (birincil); GMT 584283 = Jülyen 683-08-26 (584285 ile 08-28); atlasın 08-29'u proleptik Gregoryendi → ic_not; Martin & Grube 2008 s.162 okununca kaynağa eklenir, günü değiştirmez"),
    # L2E 273-297 takvim düzeltmeleri (EMRELİC, Academia Sinica)
    "L2-635": ("tarih düzelt", "908-01-01 → 908-02-23: Takvim: Tianyou 5/1 辛卯 = 908-02-23 Li Keyong öldü, Cunxu tahta (Academia Sinica)"),
    "L2-639": ("tarih düzelt", "913-11-01 → 914-01-01: Takvim: Qianhua 3/12 庚午 = 914-01-01 (11. ayda 庚午 yok; 913-11-02 10. aya düşer) Zhou Dewei Lulong valisi (Academia Sinica)"),
    "L2-642": ("tarih düzelt", "915-01-01 → 915-07-15: Takvim: Zhenming 1/6/1 庚寅朔 = 915-07-15 He Delun mührü Jin'e teslim etti (Academia Sinica)"),
    "L2-651": ("tarih düzelt", "923-01-01 → 923-05-13: Takvim: Tongguang 1/4 己巳 = 923-05-13 Cunxu imparator, «國號唐» (Academia Sinica); künye ucu"),
    "L2-655": ("metin düzelt (tarih kalır)", "Min: başlıktaki «yaklaşık iki ay sonra» desteksiz — Wang Shenzhi 925 öldü, Wang Yanhan 926 civarı öldürüldü, yaklaşık bir yıl sonra (Xin Wudai shi 68; EMRELİC)"),
    # L2E 298-322 takvim düzeltmeleri (EMRELİC Academia Sinica + KASA SALI NAOJ ECO)
    "L2-675": ("tarih düzelt", "938-01-01 → 938-11-25: Takvim: Liao Huitong 1/11/1 甲辰朔 = 938-11-25 (Academia Sinica); Nanjing/16 eyalet tasarrufu o ay"),
    "L2-676": ("tarih düzelt", "940-01-01 → 940-01-22: Takvim: Tengyō 2/12/11 丁未 = 940-01-22 Jülyen (NAOJ ECO; Academia Sinica ile aynı) Shimotsuke; ic_not: Kōzuke 2/12/15 辛亥 = 940-01-26"),
    "L2-677": ("tarih düzelt", "940-01-01 → 940-01-26: Takvim: Tengyō 2/12/15 辛亥 = 940-01-26 Jülyen (NAOJ ECO) Kōzuke alındı — Shinnō ilanı Kōzuke'de bundan sonra; ilan günü Shōmonki'de yok → «[en erken tanık günü; ilan günü teyitsiz]» ic_not"),
    "L2-678": ("tarih düzelt", "940-03-01 → 940-03-25: Takvim: Tengyō 3/2/14 庚戌 = 940-03-25 Jülyen (NAOJ ECO; Academia Sinica ile aynı) Masakado öldürüldü; künye t: aynı gün"),
    "L2-680": ("tarih düzelt", "959-04-08 → 959-06-07: ajan çevirisi 60 gün kaymış; Takvim: Xiande 6/4 癸卯 = 959-06-07 Waqiao (Academia Sinica); 壬辰 = 05-27 Qianning, 辛丑 = 06-05 Yijin, 5/1 乙巳 = 06-09 Yingzhou → ic_not"),
    "L2-212": ("ic_not ekle (gün KALIR)", "Vincenzo II: atlas 1627-12-25 kalır; ic_not «25–26 Aralık gecesi (Treccani EI + DBI)»; DBI'dan saat okunursa karar"),
    "L2-311": ("ic_not ekle (gün KALIR)", "Ligurya: s: değişimi Haziran 1805 ilhak tasarrufu (Cenova senatosu talebi + Napolyon kabulü; Treccani «4 giugno 1805»); 4 Ekim 1805 département düzenlemesi ic_not'a — Treccani'nin iki maddesi iki ayrı olayı tarihliyor"),
    "L2-346": ("kaynak yenile + ic_not (gün KALIR)", "Gimry: AY teyitli — Arreguín-Toft, How the Weak Win Wars (CUP 2005) böl.3 «killed in battle at Gimri in October of 1832»; atlas 1832-10-29 KALIR (gün teyitsiz); TDV'nin iki Kasım günü (Müridizm 29, Şeyh Şâmil 20 Kasım) bu kaynakla çürüyor → ic_not"),
    "L2-345": ("kaynak yenile (tarih KALIR)", "Yirmi Dört Madde 1831-10-14: «[anı kaynağı]» Stockmar Memoirs (1872); 15 Kasım 1831 antlaşma ic_not'a"),
    "L2-326": ("tarih düzelt", "Kassel 1813-09-28 → 10-01 (madde «alınış»); ic_not «[tek kaynak] 28 Eylül ilk baskın»"),
    "L2-352": ("kaynak yenile (tarih KALIR)", "Mauritius 1835 (devletler.js:14867, t=1835-01-01 YIL düzeyi) → tarih kalır; kaynak Nwulia, ASR 21/1 (1978) «1 February 1835» eklenir (gün ic_not'a, tek kaynak)"),
    "L2-364": ("tarih düzelt", "Tahıl Yasaları: madde «kaldırıldı» (yasalaşma) → 1846-06-26 kraliyet onayı (Hansard Lordlar 26.6.1846 «Received the Royal Assent»); 25 Haziran Lordlar oylaması ic_not'a"),
    "L2-380": ("kaynak yenile (TEYİT, tarih KALIR)", "Jonker Afrikaner 1861-08-18 TEYİT: J.C. Pool, PhD Stellenbosch 1995 (hdl 10019.1/20422) böl.25, PDF s.541 «Sondag 18 Augustus 1861 … Jonker gesterf» (Okahandja); 16 Ağustos (özet) adayı düştü"),
    "L2-381": ("kaynak yenile (TEYİT, tarih KALIR)", "Jonker Afrikaner 1861-08-18 TEYİT: Pool 1995 böl.25 s.541 (L2-380 ile aynı)"),
    "L2-449": ("tarih düzelt", "Ruanda-Urundi: madde (devletler.js:10200, belcika-kongo) «Belçika birlikleri işgal etmeye başlar» → taarruz başlangıcı 1916-04-18 (1914-1918-online, Samson; hakemli); atlasın 05-06'sı Vikipedi, düşer. Kigali 9 Mayıs, işgalin tamamlanması 21 Mayıs ic_not'a"),
    "L2-397": ("tarih düzelt", "Reichsland: madde (devletler.js:17044) «Reichsland kuruldu» → yasa tarihi 1871-06-09 (RGBl 1871 Nr.25, 14 Haziran yayım); 06-28 yürürlük ic_not'a. Toprak devri ayrı madde (17043, Frankfurt 1871-05-10)"),
    "L2-158": ("kaynak yenile", "Kolomna 1385-03-25 TEYİT: Lavrentyev, «Posle Kulikovskoy bitvy» böl.2 (akademik monografinin aynası); PSRL dipnotu gelince kesinleşir; «Sergius aracılığıyla iade» metinde yumuşatılır (metin satırı)"),
    "L2-227": ("tarih düzelt", "1652-02-04 Jülyen → 1652-02-14 Gregoryen (İngiltere 1752'ye dek Jülyen; mekanik çeviri); ic_not'a iki gün"),
}
# Kaynakta olayın kendisi bulunamayan maddeler: metin düzeltilmez, işaretlenir.
ISARETLE = [
    ("L2-209", "Malaka 1616 Hollanda saldırısı", "Paramita 32(2) 2022'de yok (1606 Hollanda-Johor; Açe 1615/1629)"),
    ("L2-243", "Hainaut 1679", "Nijmegen İspanya imzası 1678-09-17 ise madde 1678'e taşınabilir (Pireneler ile birlikte bakılıyor)"),
    ("L2-240", "Orange 1672", "Treccani EI yalnız Mart 1660 işgalini veriyor"),
]
# Metin düzeltmeleri (tarih kalır; koordinatör kararı, EMRELİC 1 KASIM, 4 Kasım 2026).
METIN = [
    ("L2-714", "Zürey'îler: atlas 1091, TDV 504/1110 → çelişki ic_not'a iki kaynağıyla (EMRELİC)"),
    ("L2-720", "Grönland piskoposluğu 1124 takdis: Lund'a bağlıydı, Trondheim'e değil → düzeltilir (EMRELİC)"),
    # L2E 298-322 (EMRELİC)
    ("L2-658", "Nanzhao sonu: Nanzhao yeshi 929 / Dian lüe 928 — 1 yıl çelişki ic_not'a iki kaynağıyla (EMRELİC)"),
    ("L2-659", "Nanzhao/Da Tianxing: Nanzhao yeshi 929 / Dian lüe 928 — 1 yıl çelişki ic_not'a iki kaynağıyla (EMRELİC)"),
    # L2S 173-197 (S8; no sütunu sira→liste2 düzeltildi)
    ("L2-539", "Güney Qi-Kuzey Wei 490: kaynakta «barış antlaşması» yok — Nan Qi shu 57 «復通好» (489 ilişki yenilendi), Wei shu 7 489-491 elçilikleri → «elçilik ilişkisi yenilendi» diye yazılır"),
    ("L2-549", "[BEKLE — Mart/Nisan] Vandal sonu: atlas «Mart 534»; Pauly-Wissowa RE «Anfang April 534»; Treccani 533/536 → üçüncü kaynak"),
    ("L2-550", "Luoyang/Jinyong 538: kuşatanlar Hou Jing ve Gao Aocao (Gao Huan arkadan); «Yuwen Tai Hengnong'a çekildi» değil, Batı Wei ordusu/imparatoru Hongnong'a gitti (Zhou shu 2, Zizhi tongjian 158)"),
    ("L2-553", "«Haziran 551» Çin 6. ayıdır, Jülyen değil → ay ifadesi düzeltilir ya da çevrilir (Zhou shu 50)"),
    ("L2-533", "Linyi 446: «Kandarapura» adı Song shu'da yok (Qusu kalesi alındı, Yangmai oğluyla kaçtı); «akınlar azaldı» kaynaksız"),
    ("L2-537", "Gaya 479: unvan 輔國將軍、本國王 «kendi ülkesinin kralı»; «Gaya Kralı» ifadesi kaynakta yok"),
    ("L2-546", "[BEKLE — tek dayanak Treccani] Neustria 511: Treccani «Merovingi» üç krallığın doğuşunu 6.-7. yy dönüşüne koyar; 511 bölüşümü Neustria adı taşımaz"),
    ("L2-543", "Liang kuruluşu 502-04-20: gün doğru (丙辰, Academia Sinica) ama yıl adı Nan Qi Zhongxing 2, 3. ay — Liang Tianjian değil (Tianjian 1 bu günden sonra) → metindeki takvim ifadesi düzeltilir (EMRELİC)"),
    # L2S 223-247 (S10)
    ("L2-581", "Daxing alınışı 丙辰 617-12-12 (atlas günü); başlıktaki Yang You cülusu 癸亥 = 617-12-19 (Academia Sinica) → ikisi ayrılır ya da cülus ic_not'a"),
    ("L2-596", "Jiankun dudufu atlas 646: yinelenen madde — kuruluş 648-03-06 (L2-599; ZZTJ 198, Jiu Tang 3, Xin Tang 217 xia) → 646 kaydı L2-599 ile birleşir"),
    ("L2-590", "[BEKLE — tek dayanak Vikipedi] Dubu Kağan (Ashina She'er): 634 akademik kaynakta yok; Jiu Tang 109 «yenildi, Tang'a sığındı» (635) — «ortadan kaldırıldı» değil"),
    ("L2-593", "Domnall Brecc 642 Strathcarron (Annals of Ulster): «altın çağ bitti, Northumbria'ya bağımlı» yorumu kayıtta yok → yorum çıkarılır"),
    ("L2-594", "[BEKLE — ay çelişkisi] Yanqi yıkılışı: Jiu Tang 3 10. ay 甲寅 sonrası, ZZTJ 197 9. ay; atlas 11-05 (10. ay başı) iki kaynakta da olay günü değil"),
    ("L2-600", "Kuça fethi: ZZTJ 199 閏月丁丑 = Zhenguan 22 閏12. ay = 649-01-19 (Academia Sinica) → ic_not «fetih günü yok» kaldırılır, gün hassasiyetine çıkar; takvim ifadesi «Zhenguan 22 閏12» olur"),
    ("L2-602", "Kuça fethi: ZZTJ 199 閏月丁丑 = Zhenguan 22 閏12. ay = 649-01-19 (Academia Sinica) → ic_not «fetih günü yok» kaldırılır, gün hassasiyetine çıkar; takvim ifadesi «Zhenguan 22 閏12» olur"),
    ("L2-601", "[BEKLE — kuruluş yılı] Dört Garnizon 649-01-19 Kuça fethinin günü, garnizon kuruluşu değil; ZZTJ 200 Anxi'nin Kuça'ya taşınması 658 癸未 → olay adı ya da tarih"),
    ("L2-605", "Dört Garnizon bileşimi: ZZTJ 龜茲/于闐/焉耆/疏勒 (Suyab yok), Jiu Tang 198 Suyab → çelişki ic_not'a iki kaynağıyla"),
    # L2E 470-494 (EMRELİC)
    ("L2-839", "[BEKLE — dayanak Universalis ipucu] Mali/Federasyon: de Gaulle'ün 13 Aralık 1959 konuşması Bamako'da değil Dakar'da → yer ya da olay tartışmalı (EMRELİC)"),
    # L2S 248-272 (S11)
    ("L2-609", "Nechtansmere 685-05-20 (Bede HE IV.26, saltanatın 15. yılı): «bağımsız kaldı» Bede'de yok → çıkarılır; mevcut kaynak (World History Encyclopedia) popüler → Bede ile değişir"),
    ("L2-614", "Yan 756: kaynak alıntısı (乾元二年, Shi Siming) 756'yı desteklemez → doğru cümle «十五年正月，賊竊號燕國» ile kaynak yenilenir"),
    ("L2-617", "Kaynak 檢校太尉 der; «Genel Vali unvanı» kaynakta yok → unvan düzeltilir"),
    ("L2-624", "849 Epigraphia Indica 24 s.270 revize kronolojisi (Fleet 844) → konvansiyon ic_not'a; «Amoghavarsha ölümü sonrası bağımsızlık» desteksiz → çıkarılır"),
    ("L2-626", "[BEKLE — tarih desteksiz] atlas 894 Song shi 490'da yok; en erken tanık 會昌中 (841-846) ve 977/980 → ikinci kaynak gelmeden düzeltilmez"),
    ("L2-613", "[BEKLE — Treccani 754 / atlas 751] Childerich III tahttan indirilişi: Treccani 754 der → üçüncü kaynak, çelişki ic_not'a"),
    ("L2-615", "[BEKLE — tek dayanak EB1911] Septimania: EB1911 756 (Pippin), atlas 759"),
    ("L2-619", "[BEKLE — tek dayanak EB1911] Gaskonya 778 dayanaksız; EB1911 Lupus II teslimi 819"),
    # L2S 448-469 (S14)
    ("L2-807", "Surakarta: Cumhuriyet'e bağlılık maklumatı 1945-09-01 (Ni'matul Huda, Jurnal Hukum IUS QUIA IUSTUM 20/3, 2013); 09-06 Piagam Kedudukan'ın teslim günü → «6 Eylül'de bağlılık ilan etti» düzeltilir; Piagam teslimi istenirse ayrı madde"),
    ("L2-812", "İtalya krallığının sonu: hukuken 18 Haziran 1946 (Treccani, Enciclopedia dell'Italiano «Linguaggio della politica», kısmi), fiilen 12-13 Haziran (Umberto II 13 Haziran Quirinale'den ayrıldı) → atlas 18 Haziran KALIR, fiilî gün ic_not'a"),
    ("L2-816", "[BEKLE — ipucu] Kuzey Kore: Geçici Halk Komitesi Şubat 1946; 21-22 Şubat 1947 Halk Meclisi → olay adı karışık olabilir"),
    ("L2-825", "Bingazi/Kirenayka Emirliği: FRUS 1950 V d872 1 Haziran 1949'u bağımsızlık beyanı verir; İngiliz tanıma günü belgede yok → metin FRUS'a göre"),
    # L2S 398-422 (S12)
    ("L2-757", "Paris 1259: antlaşma Kanal Adaları'nı adıyla anmaz (Dawes, Jersey & Guernsey Law Review 2015); Henry III onları Fransa kralına liege homage ile tutar → «Taç mülkü olarak kaldı» ve «Fransız iddiası sona erdi» düzeltilir"),
    ("L2-759", "Perth 1266: «4000 mark» → «dört taksitte 4000 mark + yıllık 100 mark» (Oxford Companion to British History)"),
    ("L2-760", "[BEKLE — Gregorovius tek] Viterbo 1267 Atina'dan söz etmez; egemenlik Achaea üzerinden ilke olarak; gün 24 / 27 Mayıs"),
    ("L2-762", "Goryeosa cümlesi yalnız «賊» der, Samseongbyeolcho'yu adlandırmaz → ad yorum olarak işaretlenir"),
    ("L2-765", "Venaissin: «(Avignon 1348'de ayrı kontluktu)» parantezi konu dışı → çıkarılır"),
    ("L2-771", "«karar verdi» (Ağustos-Eylül) ile «yürüyüş başladı» (10-18 Ekim) iki ayrı olay → ayrılır"),
    ("L2-776", "22 Eylül manifesto günü; Sınır Bölgesi hükûmeti 6 Eylül kuruldu → «feshedildi» hangisine bağlı netleşir"),
    ("L2-778", "Memel 1939: antlaşma «Berlin, 22 Mart», Litvanya kararı 22 Mart; birleşme 23 Mart (DHM LeMO, Bertz 2010) → «kabul etti» 22 / «devredildi» 23 ayrılır; atlas 23 KALIR"),
    ("L2-780", "[BEKLE — 12 Kasım teyitsiz] Gabon 1940: Libreville 9-10 Kasım, Port-Gentil 12 Kasım; Masson teslimden sonra intihar (FRUS 1940 II d740) → tek güne sıkışmaz"),
    # L2S 423-447 (S13)
    ("L2-783", "İngiliz Somalisi 1941-03-16 Berbera çıkarması (Playfair ch.XXII); askerî vali Chater ataması 04-08 ayrı gün → ic_not"),
    ("L2-785", "[BEKLE — ad belirsiz] Mengjiang 1941 yeniden adlandırması Heibonsha ve J-STAGE'de yok; ad büyük olasılıkla 蒙古自治邦, Çin dergisi 1941/1943 iki aşama"),
    ("L2-800", "Protektora hükûmeti fiilen 5 Mayıs 1945 sona erdi (Bienert tutuklandı); «Sovyet işgaliyle çöktü» kaynakla uyuşmaz — Prag 9 Mayıs kurtarıldı (Historická penologie 2/2006)"),
    ("L2-801", "Okinawa: örgütlü direniş 21 Haziran bitti, harekât resmen 2 Temmuz ilan edildi (Appleman, CMH); Ryukyu ABD idaresine hukukî devir ayrı gün"),
    ("L2-804", "Ağustos Devrimi 19 Ağustos 1945: kaynak (Tertrais, IGPDE) «ayaklanmanın başlangıcı» der; Bảo Đại feragati 25 Ağustos → metin başlangıç diline çekilir"),
    # L2S 198-222 (S9)
    ("L2-562", "Gao Yang: ölüm 甲午 = 559-11-25 Jülyen (atlas günü tutar); metindeki «(4 Aralık 559)» 癸卯 發喪 (cenaze ilanı) günüdür → parantez düzeltilir (Academia Sinica)"),
    ("L2-577", "Áedán mac Gabráin: Annals of Ulster 606 (AI 609, [AU 606]) → 606 + ic_not 608/609; «Yerine Eochaid Buide geçti» annallarda yok → çıkarılır ya da kaynaklanır"),
    ("L2-575", "[BEKLE — tek dayanak EB1911] Frizya 600: bilinen en eski kral Aldgisl (~678, Vita Wilfridi) — 600 desteklenmiyor"),
    ("L2-576", "[BEKLE — tek dayanak EB1911] Gaskonya: Fredegar IV.21 açılamadı"),
    # L2E 927-951 (EMRELİC)
    ("L2-1344", "Gelre 1423: yıl doğru, metin yanlış — Sigismund Arnold'u tanımadı, Berg'li Adolf'u destekleyip Arnold'u yasakladı (NDB) → metin düzeltilir"),
    ("L2-1339", "Sanluri: Treccani'nin iki maddesi 30 Haziran / 1 Temmuz 1409 → 30 Haziran yazılır, çelişki ic_not'a iki maddesiyle"),
    ("L2-1341", "[BEKLE — 1415 desteksiz] Glyndŵr: Galler Biyografi Sözlüğü 1415 vermez («1412'den sonra duyulmaz, 1416'ya kadar yaşadı») → ifade ve yıl yeniden"),
    ("L2-1335", "[BEKLE — ipucu] Nijniy Novgorod yarlığı 1391 değil 1393 olabilir"),
    ("L2-1336", "[BEKLE — ipucu] Nijniy Novgorod yarlığı 1391 değil 1393 olabilir"),
    # L2E 989-1000 (EMRELİC)
    ("L2-1393", "Saluzzo: Fransa'ya katılma 1549 (Treccani) yıl tutar; 1 Ağustos ve 23 Şubat 1548 (davet/işgal) ayrı olaylar → metin yalnız 1549 katılmayı anlatmalı"),
    ("L2-1404", "Askia Nuh 1599: Kaba (JAH 1981) kardeşin adını «el-Mustafa» verir, «Harun» değil → ad düzeltilir"),
    # L2E 1001-1012 (EMRELİC)
    ("L2-1409", "Paris Lodron: kaptıl seçimi 1619-11-13 (NDB); 1621 papalık onayı ayrı olay → ic_not"),
    ("L2-1417", "[BEKLE — bölüşme günü yok] Pomeranya: kaynaktaki 10 Mart 1637 Bogislaw XIV'ün ölümüdür, bölüşme değil → olay ve gün yeniden"),
    ("L2-1420", "[BEKLE — ipucu, DIB okunamadı] 1641 ayaklanması: DNB'ye göre Charlemont 22 Ekim akşamı alındı, 23 değil"),
    # L2S YENI520-541 (S15)
    ("L2-880", "Cibuti Paris yuvarlak masası: açılış 28 Şubat 1977, anlaşma 19 Mart 1977 (Universalis) → iki gün ayrılır"),
    ("L2-882", "[BEKLE — oran çelişkili] Cibuti referandumu 8 Mayıs 1977 (BM A/32/107/Add.1) gün tutar; «%99,75» BM ön tablolarında yok (bölge %95,7-99,3), Universalis %98,8 → oran çıkarılır ya da kaynaklanır"),
    ("L2-892", "Kolingba 1 Eylül 1981 (Larousse Journal de l'année 1982): Larousse «karşılıklı rıza ile darbe» der → «devirip» yumuşatılır"),
    ("L2-894", "CGDK: Kuala Lumpur deklarasyonu imzası 22 Haziran 1982 (BM A/37/307), hükümetin resmî ilanı 9 Temmuz 1982 (A/37/340) → Kural 8 ayrımı; «Tayland sınırında» belgede yok"),
    ("L2-896", "[BEKLE — tek dayanak Vikipedi] Grenada: Coard'ın 14 Ekim 1983'te başbakanlığı devraldığı akademik kaynakta yok; Bishop'un 19 Ekim'e dek konumu belirsiz"),
    ("L2-891", "Kampuçya anayasası: Ulusal Meclis 24-27 Haziran 1981 oturumunda kabul (BM A/36/352); kabul günü belirtilmemiş, 27 Haziran telgraf tarihi → «[gün teyitsiz]»"),
    # L2S 579-590 (S18)
    ("L2-939", "Ravi Varma (Venad): Sastri'de Pândya/Çola topraklarına yürüyüş 1299 tahta çıkışla değil 1312 sonrası olaylarla geçer → metin ayrılır"),
    ("L2-941", "Codex Cumanicus 1303: Kuun 1880 baskısında «Suğdak» adı okunmadı; «Codex Venetianus anno 1303 conscriptus» yalnız Latin-Fars-Kuman ilk bölüm için → ifade daraltılır"),
    ("L2-945", "[BEKLE — yıl uyuşmazlığı] Varangal: Haig (CHI III, 1928) 1308, modern kaynaklar 1309-10; Koh-i Nûr rivayeti Haig'de yok"),
    ("L2-950", "Ravi Varma Kançi 1312 (Sastri, History of South India s.231, «till about 1312»): taç giyme ve «kendini hükümdar ilân etti» Sastri'de yok; seferi 1317'de Kakatiya ordusu bozdu, «Delhi seferleri bozdu» değil → metin düzeltilir"),
    # L2E 1025-1036 (EMRELİC)
    ("L2-1444", "[BEKLE — takvim UYARISI] Passaro 1718-08-11 zaten Gregoryen (İngiliz kayıtlarındaki 31 Temmuz eski takvim); ajanın «22 Ağustos'a çevir» önerisi YANLIŞ, UYGULANMAZ — atlas günü KALIR, kaynak okununca kaynak yenilenir (EMRELİC)"),
    ("L2-1440", "[BEKLE — ipucu] Orange: 1702 / 1714 çelişkisi"),
    ("L2-1434", "Habsburg-Lehistan ittifakı 1683-03-31 KALIR (Wasilewski; imza 1 Nisan, belge 31 Mart'a geriye tarihlendi) → ic_not'a iki gün (EMRELİC, 1013-1024 esas)"),
    # L2S 567-578 (S17)
    ("L2-933", "Celâleddin Halacî 1290-06-13 (TDV «Fîrûz Şah Halacî») gün tutar; ilan Kîlûgari'de (Delhi yakını), tahta oturuş sonra → «Delhi'de kurdu» düzeltilir"),
    ("L2-935", "Mangrai/Chiang Mai: aynı olay devletler.js'te 1296-04-12 ile iki kez (7457/7460) → yinelenen madde birleşir"),
    ("L2-931", "Bạch Đằng 1288: aynı olay devletler.js:8203'te 1288-04-09 ile de var → yinelenen madde birleşir; tek dayanak Britannica (akademik kaynak bekliyor)"),
    ("L2-937", "Curzola 1298-09-08 (Treccani EI) gün tutar → ic_not «gün DOĞRULANMADI» kaldırılır; Marco Polo'nun esirler arasında olması EI'de yok → ifade kaynaklanır ya da çıkarılır"),
    ("L2-928", "[BEKLE — iddia okunmadı] Este/Ferrara: «unvanı şehir meclisinden aldı, ne imparator ne papa» okunan sayfalarda yok"),
    ("L2-929", "[BEKLE — iddia okunmadı] Siena: Gran Tavola «kıtanın en büyük bankası» üstünlük iddiası okunan sayfalarda yok"),
    ("L2-927", "[BEKLE — kaynaksız] Sidama: «idari yapı en az 9. yüzyıla izleniyor» kaynaksız; göç anlatısı (Yemericho, 16. yy) maddeyle çelişir"),
    # L2E 977-988 (EMRELİC)
    ("L2-1389", "[BEKLE — tek dayanak encyclopedia.com] Núñez Vela'yı tutuklayan Audiencia'dır, Pizarro değil → fail düzeltilir"),
    # L2E 1037-1048 (EMRELİC)
    ("L2-1454", "[TAKVİM] Charles Edward 1745: 19 Ağustos Glenfinnan sancak töreni, karaya çıkış değil (çıkış 23 Temmuz eski = 3 Ağustos yeni); 19 Ağustos eski takvim = 30 Ağustos Gregoryen → olay ve gün birlikte düzeltilir, ic_not iki takvim"),
    ("L2-1457", "[BEKLE — gün desteksiz] Encyclopédie: kaynak yalnız «Haziran 1751»; 28 Haziran desteksiz"),
    # L2S YENI-TARAYICI (S16)
    ("L2-815", "Fransız Batı Afrika: 27 Ekim 1946 anayasanın imza/ilan günü (Élysée metni «Fait à Paris, le 27 octobre 1946», md.60 Union française); yürürlük Aralık 1946; AOF adıyla anılmaz → ic_not"),
    ("L2-822", "Haydarabad: Hint ordusu 13 Eylül 1948 sabahı girdi, Haydarabad ordusu 17 Eylül teslim oldu (Menon 1956); Nizam'ın katılım belgesi günü ayrıca yok → isg/s: ayrımı ic_not"),
    ("L2-817", "Bharatpur: Menon «bütün bitişik devletler 15 Ağustos'a dek katılım belgesini imzaladı» — gün «en geç» sınırıdır → «[en geç]» beyanı"),
    # L2E 1073-1084 (EMRELİC)
    ("L2-1497", "Ligurya: Durazzo göreve başlaması 1802-08-10 (Treccani DBI «si insediò il 10 ag. 1802»); «ömür boyu» ifadesi kaynakta yok → çıkarılır ya da kaynaklanır"),
    ("L2-1489", "[BEKLE — gün desteksiz] Ligurya: Treccani yalnız 2 Aralık 1797 halk oylamasını verir; 22 Aralık desteksiz"),
    # L2S 098-122 (S5)
    ("L2-458", "Vix notası: 1914-1918-online iki maddede 19 / 20 Mart çelişkisi → gün 20 Mart kalır, çelişki ic_not'a iki maddesiyle"),
    ("L2-464", "Letonya Strazdumuiža: imza 3 Temmuz sabahı; «Riga'dan çekildi» değil — çekilme süresi 5 Temmuz akşamı, Kuzey Tugayı 6 Temmuz Riga'ya girdi (1914-1918-online «Cēsis, Battle of»)"),
    ("L2-468", "Gürcistan-Sovyet antlaşması 7 Mayıs 1920: «İngiliz birlikleri bölgeden ayrıldı» cümlesi bu güne bağlanmaz (Gürcistan'dan Ağustos 1919, Batum'dan Temmuz 1920; Janelidze 2018) → cümle çıkarılır ya da kendi tarihiyle yazılır"),
    ("L2-474", "İrlanda Özgür Devleti 6 Aralık 1922: «Kuzey İrlanda ayrıldı» ayrı ve sonraki tasarruf (7 Aralık opt-out) → metin ayrılır"),
    ("L2-477", "[BEKLE — Muminov 2023 dergisinin hakem statüsü doğrulanmadı] Harezm: 17-20 Ekim IV. Kurultay süresi, anayasa 20 Ekim kabul → parantez «17 Ekim'de kabul etmişti» düzeltilmeli"),
    ("L2-480", "Rangun 8 Mart 1942 (JACAR + Alexander despatch): «Burma işgali başladı» yanlış — işgal Ocak 1942'de başlamıştı → «Burma işgali sürüyordu»"),
    # L2S 123-147 (S6; no sütunu sira→liste2 düzeltildi)
    ("L2-482", "[BEKLE — Plinius NH 5.5.36-38 açılmadı] Garamant: «15 yerleşim» sayısı okunan kaynakta yok"),
    ("L2-483", "Roma -26 Ocak: 16 Ocak yalnız Augustus unvanı (RE «Augustus»; Ovid iki tasarrufu 13 Ocak'a koyar); «Cumhuriyet sona erer» yorumdur → «Principatus başlar» ya da ic_not"),
    ("L2-490", "Hyphasis isyanı: «Magadha sınırına yaklaşmışken» yanıltıcı — Hyphasis Pencap'tadır, hedef Ganj vadisi (Arrianos 5.28-29)"),
    ("L2-502", "[BEKLE — Iakovidis/Mylonas açılamadı] Miken Aslanlı Kapı ~MÖ 1300: ipuçları LH IIIB ortası ~1250"),
    ("L2-505", "[BEKLE — Charpin açılamadı; tek dayanak Vikipedi aynası] Mari: «Babil, Mari ve Elam koalisyonu Eşnunna'yı» şüpheli — Elam Babil-Mari ittifakının düşmanı"),
    # L2S 148-172 (S7)
    ("L2-508", "Mari yıkımı: atlas «Naram-Sin»; Treccani + Sallaberger (Syria Suppl. 2, 2014) Sargon'a bağlar → ad ve «~2220» yeniden"),
    ("L2-509", "[BEKLE — künye ucu] Ur I-II hanedanı Treccani ED IIIb ca. 2450-2400; atlas künyeyi -2333'e uzatıyor → künye ucu gözden geçirilir"),
    ("L2-510", "Ebla yıkımı: atlas kesin «sınır savaşını Mari kazandı ve Ebla yıkıldı»; Sallaberger yalnız «may have played a decisive role» → metin ihtimal diline çekilir"),
    ("L2-516", "Mesene 116: Iranica (Characene) geçici itaat yazar, «ilhak» değil → fiil düzeltilir"),
    ("L2-522", "[BEKLE — tek dayanak Britannica] Constantius 296: «Dover yakınına çıkıp» ayrıntısı kaynakta yok; Allectus'u Asclepiodotus Hampshire'da yendi"),
    ("L2-530", "Zizhi tongjian 421 / Jin shu 87 423 çelişkisi → atlas 421 kalır, çelişki ic_not'a iki kaynağıyla"),
    ("L2-1659", "Batı Trakya 1913: TDV'ye göre yapı «Hükûmet-i Muvakkate / Müstakille», «Cumhuriyeti» değil; ömrü TDV'de 57 gün (iç tutarsızlık bkz. OLGU-DOGRULAMA #5); Ferecik/Sofulu muharebeleri TDV'de yok → ad TDV'ye uydurulur"),
    ("L2-1616", "1888 İngiliz-Fransız antlaşması: TDV «sınırları belirledi» diyor, «Fransız himayesini tanıdı» demiyor → ifade düzeltilir"),
    ("L2-1667", "Alaş: madde iki olayı birleştiriyor (Kurucu Meclis'in dağıtılması + Alaş projesi); TDV yalnız Aralık 1917 özerklik ilanını veriyor → ayrılır"),
    ("L2-1675", "[BEKLE — tek, akademik olmayan kaynak] Somali 1920: «Afrika'da uçakla bombalanan ilk yer» iddiası kaynakta yok; TDV «1920'nin ilk ayları» (gün yok); 21 Ocak yalnız RAF Müzesi"),
    ("L2-1663", "[BEKLE — tek, akademik olmayan kaynak] Terîm 1916: TDV Terîm'i Seyyidler kontrolünde gösteriyor; «Terîm sultanlığı ayrıldı» TDV anlatısıyla örtüşmüyor; 1916 yalnız ikincil"),
    ("L2-1626", "[BEKLE — tek, akademik olmayan kaynak] Gambiya himayesi 1894-12-28 hiçbir kaynakta yok; hukukî dayanak 23 Kasım 1893 Order in Council olabilir (okunmadı)"),
    ("L2-1681", "Annual 1921-07-22: TDV «Abdülkerîm» «22 Haziran 1921» yazıyor — büyük olasılıkla baskı hatası (Annual 21-22 Temmuz, Rif Cumhuriyeti 19 Eylül ile tutmuyor) → atlas günü KALIR, TDV iç çelişkisi ic_not'a; üçüncü kaynak (Moro, Ivitra 27) tarayıcıda"),
    ("L2-1479", "Avignon 1790-08-27: Archives parlementaires t.XVIII s.369-370 — Meclis ilhakı REDDETMEDİ, krala havale etti ve çevreye birlik yerleştirilmesini istedi → «reddetti» düzeltilir"),
    ("L2-1425", "Kandiye kuşatması: metin «Mayıs 1648», tarih 1648-01-01; TDV «Kandiye»: ~23 yıllık abluka/kuşatma, teslim 6 Eylül 1669; Mayıs 1648 hiçbir akademik kaynakta yok → «Mayıs» ifadesi kaldırılır"),
    ("L2-1547", "Şamil: 8 Mart 1840 TDV'de yok; TDV imamlık 19 Eylül 1834, İçkeri yönetimi Ahulgoh (4.9.1839) sonrası (gün yok), İşkarti-İrpili Temmuz 1840 → gün yalnız Vikipedi, madde ifadesi/günü TDV'ye uydurulur"),
    ("L2-1609", "[TARIH] Kamerun: 1884-08-17 desteksiz, düşer → s: değişimi antlaşma günü 1884-07-12 (koordinatör kararı; Duala L2-410 ile tutarlı); bayrak çekme 14 Temmuz (GHDI) ic_not'a"),
    ("L2-1408", "[BEKLE — tek, akademik olmayan kaynak] Yafna: «II. Cankili Goa'ya götürüldü» kaynaklarda yok (Vikipedi: asıldı) → Abeysinghe okununca"),
    ("L2-465", "Derviş hareketi: madde «yenildi» ile «direniş sona erdi»yi tek güne (1920-01-01) sıkıştırıyor; TDV: 1920 başı İngiliz saldırısı, direnişin sonu Seyyid Muhammed'in ölümü 21 Aralık 1920 → iki olay ayrılır (ilgili TARIH_DUZELT satırı)"),
    ("L2-470", "Enver Paşa: TDV'ye göre Ekim 1921'de Buhara'ya gitti, Basmacıları örgütlemek için Şubat 1922 sonunda Duşanbe kışlaklarına; «1921 sonunda başına geçti» TDV'de yok → ifade TDV'ye uydurulur"),
    ("L2-988", "KÜNYE düzeltmesi: «Noel Malcolm, A Concise History of Bosnia, CUP» birbirine uymuyor — Malcolm'un kitabı «Bosnia: A Short History» (Macmillan/NYU); «Concise History of Bosnia» C. Carmichael'in (CUP)"),
    ("L2-1062", "Talikota 1565-01-05: TDV iki madde (Kutubşâhîler, Hüseyin Nizamşah) atlasla aynı; 23 Ocak yalnız Vikipedi/popüler → ic_not beyan (aynı ansiklopedinin iki maddesi «çift teyit» sayılmaz)"),
    ("L2-1171", "Ali Bey: TDV 8 Mayıs 1773 Sâlihiyye yenilgisi + yaralanma, ölüm «kısa süre sonra»; Güner (AÜ DTCF Dergisi 53/1, 2013 s.175) yenilgiyi 1 Mayıs veriyor → ölüm günü kaynakta yok; 8/1 Mayıs çelişkisi ic_not'a"),
    ("L2-1253", "Mısır 1876: kurum «Düyûn-ı Umûmiyye» değil «Düyûn-ı Umûmiyye Sandığı» (Caisse de la Dette, Mayıs 1876; TDV «Mısır»); «Düyûn-ı Umûmiyye» Osmanlı'nın 1881 Muharrem Kararnamesi kurumu"),
    ("L2-1387", "Diû kuşatması 1538: atlas 26 Haziran–6 Kasım (~4,3 ay); TDV «üç ay süren kuşatma» → süre ifadesi TDV'ye uydurulur"),
    ("L2-1179", "Mysore roketleri 1780: «Tîpû Sultan'ın ordusunda» anakronik (Tîpû 1782'de sultan; 1780 Haydar Ali dönemi) → «Haydar Ali / Mysore ordusunda»"),
    ("L2-1198", "Liptako: TDV'ye göre kurucu Birmali Sala Pate; 1810 Brahima'nın Dori zaferi; TDV Gwandu'yu anmıyor → tâbiiyet iddiası «[olay kaynakta yok]»"),
    ("L2-1176", "Pontianak: TDV «Borneo» sultanlığın kuruluşunu 1772 veriyor; 1778-08-31 «taç giyme» TDV'de yok → yıl ve olay ic_not'ta beyan"),
    ("L2-1365", "Agadez: aynı olay iki kayıt (devletler.js:3493 ve 9373) → mükerrer; yıl 1500 / 1501-2 / 1515-16 çelişkisi (yalnız akademik olmayan özet)"),
    ("L2-435", "Paris Antlaşması onayı 1899-02-06: oy «52-27» → «57-27» (Voteview Senato kaydı, birincil)"),
    ("L2-447", "Basra işgali: atlas 22 Kasım, 1914-1918-online (Çetinsaya) 23 Kasım 1914 → çelişki ic_not'a; Fâv 6 Kasım 1914 okundu; TDV bulunamadı"),
    ("L2-434", "[BEKLE — tek, akademik olmayan kaynak] «silah bırakmak üzere toplananları katletti» kaynaklı değil; kaynaklarda Ambiky'nin top ateşiyle alınması ve Toera'nın öldürülmesi var"),
    ("L2-441", "[TARIH] Asîr/İdrîsî (devletler.js:22003): 1910-01-01 → 1909-10 (AY; «Ekim 1909'un sonlarında» Said Paşa heyeti Sabya'da İdrîsî ile görüştü: bağlılık, hutbe, «kaymakam rütbesi», zekâtın üçte biri — Duysak, YL/Dr tezi Marmara 2005 s.97-98) KISMEN; «Hafâir» adı tezde geçmiyor → ic_not; TDV «Cîzân» 1911 Hafâir yenilgisi ayrı olay"),
    ("L2-449", "[TEK KURAL — yerleşim/künye] Ruanda-Urundi: künye ruanda-urundi-mandasi f=1922-07-20 (MC onayı) — 1916-04/05 → manda başlangıcı arası Ruanda/Urundi yerleşimlerinde (Kigali, Usumbura vb.) isg: belçika; s: manda ile (Orts-Milner 1919-05-30 ya da MC 1922-07-20; günler kaynaktan); KASA PAZAR ölçsün"),
    ("L2-410", "Duala 1884-07-12: gün doğru; antlaşmayı Duala şefleriyle Nachtigal değil Alman konsolos Emil Schulze imzaladı (Pretoria Univ. Law Press, German Colonialism böl.7) → özne düzeltilir; Nachtigal'in 14 Temmuz bayrak çekişi doğrulanmadı"),
    ("L2-420", "[BEKLE — tek, akademik olmayan kaynak] Kenya kuzey 1890-07-01: tarih doğru (GHI); antlaşma Madde I Alman alanının kuzeyini (Umba hattı) veriyor; İngiliz alanının kuzey sınırı 1891 İngiliz-İtalyan protokolleri (yalnız arama özeti) → ifade kontrol"),
    ("L2-397", "[TEK KURAL — yerleşim] Alsas-Loren: Metz, Strazburg, Colmar, Mulhouse (yerlesimler_avrupa.js:219-225) s: almanya f=1871-05-10 doğru (Frankfurt); ama 1870 Alman askerî Genel Valiliği için isg YOK → Strazburg teslimi (28 Eylül 1870), Metz teslimi (27 Ekim 1870) vb. → 1871-05-10 arası isg: almanya eklenmeli (Fransa'nın iddiası sürüyordu); günler kaynaktan"),
    ("L2-398", "[BEKLE — tek, akademik olmayan kaynak] Aşanti Pra geçişi: atlas «Aralık 1872», EB1911 «22 January 1873» (tek kaynak) → yıl 1873 tutuyor, metindeki ay düzeltilir ya da beyan"),
    ("L2-400", "at sayısı «~1.100» → Handbook of Texas «more than 1,400 captured»"),
    ("L2-386", "[BEKLE — tek, akademik olmayan kaynak] «~400 kişi» 22 Mayıs Captain George'un gelişine değil 4 Haziran teslimine ait (Chalfant 1933)"),
    ("L2-385", "[BEKLE — tek, akademik olmayan kaynak] 6 Ekim antlaşmasını Indian agent Wentworth yaptı; Wasson yalnız Paiute'leri topladı (Chalfant 1933)"),
    ("L2-158", "Kolomna: Sergius'un aracılığıyla iade KANITLANMAMIŞ varsayım (Tula ile takas) — Lavrentyev; ifade yumuşatılır"),
    ("L2-366", "Venedik 1848-08-07: gün doğru (The Spectator 19.8.1848); yetkiyi Manin değil Castelli başkanlığındaki geçici hükümet devretti (Treccani DBI) → özne düzeltilir"),
    ("L2-369", "Venedik teslimi 1849-08-22: belgeyi Avusturya generali Gorzkowski imzaladı, Manin teslim kararını verdi (Treccani) → ifade kaynağa uydurulur"),
    ("L2-368", "Roma Cumhuriyeti: madde iki olayı 30 Haziran'a koyuyor → İKİ AYRI MADDE ya da başlık ayrımı (koordinatör): 1 Temmuz 1849 ateşkes, 2 Temmuz Garibaldi'nin ayrılışı (Britannica); 30 Haziran çöküşü yalnız popüler site"),
    ("L2-374", "Ankober'in yakılması kaynakta yok (gün/yıl doğrulandı) → «[olay kaynakta yok]» ifadesi"),
    ("L2-333", "Mandsaur 1818-01-06: gün doğru (birincil metin); antlaşma «Narmada güneyi» değil «Satpura güneyi» diyor → ifade düzeltilir"),
    ("L2-253", "Sardunya 1713: Utrecht'te Avusturya'ya VERİLMEDİ (Bavyera seçmenine vaat, Rastatt'ta uygulanmadı); Sicilya'nın Savoya'ya devri Ağustos 1713 — dayanak Bianchi 2025 (Larousse genel ansiklopedi, ek)"),
    ("L2-272", "Paris 1763: yalnız Mississippi'nin DOĞUSU İngiltere'ye; batı yakasının İspanya'ya devri bu antlaşmada değil, Fontainebleau 1762-11-03 (ayrı madde VAR: devletler.js:18770 louisiana; o maddenin kaynağı yalnız Vikipedi) — Yale Avalon metni"),
    ("L2-280", "Poynings Yasası «kaldırıldı» → «değiştirildi» (Yelverton Yasası 1782; Cambridge bölümü)"),
    ("L2-301", "[TEK KURAL ÖLÇÜMÜ — yerleşim] Malta (yerleşim data/yerlesimler.js:1197 «Malta»): s: ingiltere f=1800-09-05 → 1800-09-05…1814-05-30 isg: ingiltere, s: ingiltere 1814-05-30'dan (Paris Antlaşması, hukukî devir); Amiens'in iadesi uygulanmadı → ic_not. Kronoloji maddesi ayrıca 1800-09-08 → 09-05 (tarih düzelt satırı)"),
    ("L2-285","Liège 1789-08-18: başlangıç günü KALIR; başlık kaynağa uydurulur — prens-piskoposun kaçışı/devrilişi o gün değil (ULiège)"),
]
# Sonraki okumayla yerine yenisi gelen satırlar (aynı madde, eski öneri).
GECERSIZ = {
    ("L2E_520-541", "L2-880"): "L2S_YENI520-541 satırı geçerli (önceki ajan aramamıştı; yeniden arandı)",
    ("L2E_520-541", "L2-881"): "L2S_YENI520-541 satırı geçerli (önceki ajan aramamıştı; yeniden arandı)",
    ("L2E_520-541", "L2-882"): "L2S_YENI520-541 satırı geçerli (önceki ajan aramamıştı; yeniden arandı)",
    ("L2E_520-541", "L2-884"): "L2S_YENI520-541 satırı geçerli (önceki ajan aramamıştı; yeniden arandı)",
    ("L2E_520-541", "L2-885"): "L2S_YENI520-541 satırı geçerli (önceki ajan aramamıştı; yeniden arandı)",
    ("L2E_520-541", "L2-886"): "L2S_YENI520-541 satırı geçerli (önceki ajan aramamıştı; yeniden arandı)",
    ("L2E_520-541", "L2-887"): "L2S_YENI520-541 satırı geçerli (önceki ajan aramamıştı; yeniden arandı)",
    ("L2E_520-541", "L2-888"): "L2S_YENI520-541 satırı geçerli (önceki ajan aramamıştı; yeniden arandı)",
    ("L2E_520-541", "L2-890"): "L2S_YENI520-541 satırı geçerli (önceki ajan aramamıştı; yeniden arandı)",
    ("L2E_520-541", "L2-891"): "L2S_YENI520-541 satırı geçerli (önceki ajan aramamıştı; yeniden arandı)",
    ("L2E_520-541", "L2-892"): "L2S_YENI520-541 satırı geçerli (önceki ajan aramamıştı; yeniden arandı)",
    ("L2E_520-541", "L2-894"): "L2S_YENI520-541 satırı geçerli (önceki ajan aramamıştı; yeniden arandı)",
    ("L2E_520-541", "L2-895"): "L2S_YENI520-541 satırı geçerli (önceki ajan aramamıştı; yeniden arandı)",
    ("L2E_520-541", "L2-896"): "L2S_YENI520-541 satırı geçerli (önceki ajan aramamıştı; yeniden arandı)",
    ("L2E_520-541", "L2-897"): "L2S_YENI520-541 satırı geçerli (önceki ajan aramamıştı; yeniden arandı)",
    ("L2E_520-541", "L2-898"): "L2S_YENI520-541 satırı geçerli (önceki ajan aramamıştı; yeniden arandı)",
    ("L2E_520-541", "L2-899"): "L2S_YENI520-541 satırı geçerli (önceki ajan aramamıştı; yeniden arandı)",
    ("L2_101-150", "L2-138"): "TARAYICI5 satırı geçerli (1919-04-11 oylama, Cambridge EAMIO böl.6)",
    ("001-050", "44"): "Sardinya: 051-061 44-ek satırı geçerli (1720-09-02 Treccani, koordinatör kararı)",
}
UYGULANIR = {"TARIH_DUZELT": "tarih düzelt", "DOGRULANDI": "kaynak yenile"}


def main():
    # Kural (EMRELİC 1 KASIM, 4 Kasım 2026): Britannica mevcut AKADEMİK kaynağın yerine konmaz; yalnız
    # kaynağı olmayan ya da Vikipedi/blog (damga 'guvensiz'/'bos') maddelerde EK olarak yazılır.
    # Mevcut kaynağı akademik (damga 'bulunamadi' ama dayanak akademik) + yeni kaynak yalnız Britannica → "atla".
    damga = {}
    for ad, on in (("oncelik.tsv", ""), ("liste2.tsv", "L2-")):
        with open(os.path.join(D, ad), encoding="utf-8") as f:
            for r in csv.DictReader(f, delimiter="\t"):
                damga[on + r["no"]] = (r.get("damga", ""), r.get("simdiki_kaynak", ""))
    satir, sayim, atla = [], collections.Counter(), 0
    for yol in sorted(glob.glob(os.path.join(D, "oneri_*_dogrulama.tsv"))):
        parti = os.path.basename(yol).replace("oneri_", "").replace("_dogrulama.tsv", "")
        with open(yol, encoding="utf-8") as f:
            for r in csv.DictReader(f, delimiter="\t"):
                s = (r.get("sonuc") or "").strip()
                sayim[s] += 1
                no = r.get("no", "")
                if s not in UYGULANIR and no not in DEGISTIR:
                    continue
                is_ = UYGULANIR.get(s, "")
                dm, simdiki = damga.get(no.replace("-ek", ""), ("", ""))
                kaynak = r.get("kaynak", "")
                yalniz_britannica = "britannica" in kaynak.lower() and not any(
                    x in kaynak.lower() for x in ("treccani", "iranica", "tdv", "enciklopedija", "cambridge",
                                                   "oxford", "aitchison", "encyclopedia of", "canadian", "dbi"))
                if is_ == "kaynak yenile" and yalniz_britannica and dm == "bulunamadi" and "dayanak" in simdiki.lower():
                    is_ = "atla (mevcut kaynak akademik; Britannica yerine konmaz)"
                    atla += 1
                uyum = r.get("uyum", "")
                if no in TAKVIM_AS:
                    uyum = TAKVIM_AS[no] + " | " + uyum
                elif parti == "L2E_373-397" and any(k in (uyum + " " + r.get("okunan_cumle", "")).lower()
                                                   for k in ("ganzhi", "jülyen", "julyen", "julian")):
                    uyum = "[çeviri doğrulanmadı — ganzhi→Jülyen ajan hesabı, Academia Sinica toplu teyidi bekliyor] " + uyum
                if no in DEGISTIR:
                    is_, uyum = DEGISTIR[no]
                elif (parti, no) in GECERSIZ:
                    is_, uyum = "GEÇERSİZ (yerine geçen satır var)", GECERSIZ[(parti, no)] + " | " + uyum
                elif no in BEKLET:
                    is_, uyum = "BEKLE (uygulama)", BEKLET[no] + " | " + uyum
                if no == "L2-47":
                    is_, uyum = "tarih düzelt", "1600-12-31 Jülyen (İngiltere) → 1601-01-10 Gregoryen (takvim kuralı; KASA PAZAR uyguladı)"
                elif is_.startswith(("tarih düzelt", "kaynak yenile")):
                    tk = takvim_kanadi(r)
                    if tk and no not in TAKVIM_TEMIZ:
                        uyum = ("[TAKVİM KANADI KONTROL — %s kaynağı 1582 sonrası Jülyen olabilir (%s gün); "
                                "kaynağın eski/yeni takvim olduğu belirlenmeden gün uygulanmaz] " % tk) + uyum
                satir.append([parti, no, is_, r.get("dosya_satir", ""), r.get("tarih_atlas", ""), uyum,
                              r.get("hassasiyet", ""), kaynak, r.get("url", ""), r.get("okunan_cumle", "")])
    yer = {}
    for yol in glob.glob(os.path.join(D, "oneri_*_dogrulama.tsv")):
        with open(yol, encoding="utf-8") as f:
            for r in csv.DictReader(f, delimiter="\t"):
                yer.setdefault(r.get("no", ""), (r.get("dosya_satir", ""), r.get("tarih_atlas", "")))
    for no, ne in METIN:
        ds, t = yer.get(no, ("", ""))
        is_ = ("tarih düzelt (koordinatör)" if ne.startswith("[TARIH]")
               else "tek kural ölçümü (yerleşim s:/isg)" if ne.startswith("[TEK KURAL")
               else "BEKLE metin (tek, akademik olmayan kaynak)" if ne.startswith("[BEKLE")
               else "metin düzelt (tarih kalır)")
        satir.append(["koordinator", no, is_, ds, t, ne, "", "", "", ""])
    for no, ad, neden in ISARETLE:
        ds, t = yer.get(no, ("", ""))
        satir.append(["koordinator", no, "işaretle «[olay kaynakta yok]» (metin düzeltilmez)", ds, t, ad + " — " + neden,
                      "", "", "", ""])
    print("atla:", atla)
    with open(CIKTI, "w", encoding="utf-8", newline="") as f:
        w = csv.writer(f, delimiter="\t")
        w.writerow(["parti", "no", "is", "dosya_satir", "tarih_atlas", "uyum", "hassasiyet", "kaynak", "url",
                    "okunan_cumle"])
        w.writerows(satir)
    print("kuyruk: %d satır (%s) → %s" % (len(satir), dict(collections.Counter(s[2] for s in satir)),
                                         os.path.relpath(CIKTI, KOK)))
    print("tüm sonuçlar:", dict(sayim))


if __name__ == "__main__":
    main()
