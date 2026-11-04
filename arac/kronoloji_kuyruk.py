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
    "L2-646": "[çeviri doğrulanmadı] Huliu muharebesi 貞明四年 12. ay 癸亥 = 919-01-28 ajan hesabı (12. ay başı 庚子 = 919-01-05); atlas 919-01-01 yıl hassasiyetiyle uyumlu — Academia Sinica teyidi bekliyor (EMRELİC)",
    # HAVVA L2H 1851-1950 / LAB L2L 1951-2052
    "L2-2324": "Risiera di San Sabba 1944-04-06 → 04-04 adayı: dayanak Trieste belediye müzesi sayfası + USF — belediye sayfası tek dayanak olamaz (AJAN-BRIF kural 5); akademik ikinci kaynak gerekli (HAVVA)",
    "L2-2465": "Skrunda radarı 1998-09-04 (OSCE basın bildirisi günü): Rusya yükümlülüğü 31 Ağustos 1998 yerine getirdi (kapatma), OSCE doğrulama ziyareti 3 Eylül → madde kapatmayı mı doğrulamayı mı anlatıyor netleşmeden uygulanmaz (LAB)",
    # İkinci geçiş IG3
    "L2-620": "Karkota Jayapida 779: Stein, Kalhana's Rajatarangini c.1 (1900, archive.org dli.pahar.1527) Intro s.94 ve §§56-66 — Kalhana hesabıyla saltanat 751-782, Çin yıllıklarına göre Kalhana ~25 yıl erken, Jayapida «8. yy sonuna çok daha yakın»; atlasın 779'u hiçbirine oturmaz; ~776-807 ajan çıkarımı (Stein vermez) → yaklaşık hassasiyet + ic_not; Stein c.2 kronoloji tablosu ve Goetz bakılmadan tarih yazılmaz",
    "L2-1277": "Khongjom 1891-04-23 → 1891-04-25 adayı: London Gazette 26192 (14 Ağu 1891) s.4372 Graham raporu — Tamu kolonu 23 Nisan çıktı, Palel çatışması 25 Nisan; 23 Nisan Manipur resmî anma günü (Khongjom Parva) → olay kimliği (Khongjom mu Palel mi) netleşmeden uygulanmaz, ic_not iki kaynak",
    "L2-1311": "Aleksandr Mihayloviç Tver knezi 1325 → 1326 adayı: encyclopedia.com (Encyclopedia of Russian History) «In 1326, after Khan Uzbek had executed … Dmitry»; BRE arama özetinde 1326, sayfa 401 → tek dayanak encyclopedia.com (zayıf), ikinci teyit gelmeden uygulanmaz",
    # L2H 1575-1694 / L2L 1451-1550 (EMRELİC Academia Sinica turu)
    "L2-2043": "An Lushan ayaklanması 755-12-08 (ayın başı): Tianbao 14, 11. ay = 755-12-08…756-01-06; 甲子 = 755-12-16 — bağlama göre [yalnız ay] ya da 甲子 günü (Academia Sinica, EMRELİC; (JDN+49) mod 60 çapraz)",
    "L2-2135": "Meng Zhixiang ölümü 934-09-10: Later Shu takvimi tabloda yok; Later Tang ile Mingde 1, 6. ay = 934-07-15…08-12 → atlas ay dışı, çelişki; kaynak cümlesi okunmalı (Academia Sinica, EMRELİC; (JDN+49) mod 60 çapraz)",
    "L2-2085": "Jin (Shatuo) künye 902 → 895: HAVVA «封晉王» 乾寧二年 bölümünde (895) — L2-629 ile aynı soru: künye kuruluşu mu unvanı mı tarihliyor → birlikte karar",
    "L2-2121": "Nan Ping künye 924: ne 925 (Nan Ping wang unvanı, 同光三年) ne 907 (Gao Jixing jiedushi) ile örtüşür → künye başının neyi tarihlediği belirsiz (HAVVA)",
    # L2S 759-770 (S33)
    "L2-1132": "Maratha 1707 → 1713 olası (Peşva makamı 1713-11-16, Vikipedi ipucu) — akademik sayfa açılamadı",
    # L2S 711-722 (S29)
    "L2-1093": "Strozzi'nin Venedik'e gidişi 1630-01-02 → «en geç 1633-07-20» adayı: DBI Strozzi (Sanguineti 2019) bu gün Venedik Signoria'ya salvacondotto dilekçesidir, kaçış günü değil; 1630'da yalnız Lateran kanonlarına geçiş girişimi, 1631-32 Kapuçin'e dönüş → kaçış günü kaynakta yok; «cumhuriyetle arası bozulunca» yanlış (çatışma Kapuçin düzeni ve başpiskoposluk curia'sıyla)",
    "L2-1083": "Rubens'in Cenova'ya gelişi 1607 → 1600 (yıl; Ekim, Floransa'dan sonra) ya da 1606 portre gezisi: Treccani «Rubens, Peter Paul» — 1607 hiçbir Treccani maddesinde yok; başlık «gelişi» ile metin (portreler) çelişiyor → hangi olay karar",
    # L2S 699-710 (S28)
    "L2-1072": "Cenova serbest liman 1590-06-01 → 1590-08 adayı: Gullino (Mediterranea XVII, 2020) «già nell'agosto del 1590» (en geç Ağustos); Giacchero kaydında 11 agosto 1590 (sayfa 403, teyitsiz); kaynak geçici, yalnız yiyecek muafiyeti der → gün ve kapsam netleşmeden uygulanmaz",
    "L2-1075": "Concerto delle donne 1594 → 1582-02 [ay] adayı: DBI «Peperara, Laura» (c.82, 2015) çekirdek Şubat 1582 Livia d'Arco ile, Molza 1583-89, dağılma 1597-98; 1594'e dayanak yok → Newcomb 1980 okunmadan karar yok",
    # L2S 663-674 (S25)
    "L2-1040": "İskender Bey / Karadağ Sancağı 1528 → 1530 adayı [yalnız yıl]: Leksikon crnogorskih dinastija (CANU, Šćekić) «1530'a kadar yönetti, büyük olasılıkla öldü», sancak sonra kaldırıldı; 1528 Pavlović dipnotundan (okunmadı) → Pavlović s.32 ve Đurđev okunmadan uygulanmaz; sınıra bağlı, Değişmez 2 ±30 gün",
    "L2-1043": "Şimbra Kure 1529-03-09 → 03-10 adayı: Encyclopaedia Aethiopica «Around or perhaps on 10 March 1529» (kaynak tahmin der); EBSCO 7 Mart; TDV vermez → kesin gün yok, atlas 09 Mart da desteksiz",
    # L2S 651-662 (S24)
    "L2-1023": "Kalikut #3 Vasco da Gama 1498-05-01 (ay başı yer tutucu): CHI V 17 Mayıs demirleme, Jackson/Subrahmanyam (ipucu) 20 Mayıs varış, 28 Mayıs Zamorin görüşmesi; aynı künyede 1498-05-20 tarihli ayrı madde var → yinelenen madde; 17/20 seçimi ve 28 Mayıs ayrı olay kararı",
    "L2-1030": "Câm Nizâmeddin ölümü 1508: Haig CHI III s.501 1439 cülus + 60 yıl (≈1499), kendi tablosu tutarsız; 1508 yalnız Vikipedi türevlerinde; TDV «Sind» vermez → L2-1002 ile birlikte karar",
    # L2E 1427-1438 (EMRELİC)
    "L2-1879": "Poluohan Bailing: Wei shu c.9 Zhengguang 5, 3. ay = 524-04-19…05-18 (Academia Sinica); atlas 523-03-31 ZZTJ kaoyi (四年冬) → 523/524 çelişkisi ic_not'a iki kaynağıyla; karar gelmeden uygulanmaz (EMRELİC)",
    "L2-1878": "Anagui 522: Wei shu 103'te 522'de yeniden kağan olma yok (521'de hâlâ Huaishuo'da asker istiyor) → metin BEKLE; tarih önerisi uygulanmaz (EMRELİC)",
    # L2H 1271-1390 (HAVVA)
    "L2-1804": "Sun Wu: atlasın 212'si dayanaksız; kuruluş 222 (Huang Wu ilanı) ya da 229 (Sun Quan imparator) → hangisi künye ucu karar (EMRELİC)",
    # L2S 627-638 (S22)
    "L2-1002": "Câm Nizâmeddin (Nindo) cülusu 1461-01-01 → 1461-10-15 adayı: Digby, JRAS 104/2 (1972) dn.27 «accepted date … a.h. 866» (hicrî ∩ 1461 = 10-15); Haig CHI III «succeeded in 1439» ile ÇELİŞKİ; TDV «Sind»'de cülus yok → üçüncü kaynak + öncül/ardıl çakışma kontrolü (ölüm 1508)",
    # L2H 1271-1342 (HAVVA)
    "L2-1766": "Hitit (Telipinu?) MÖ 1460 → MÖ 1525 (-1524) düşük güvenli aday: kaynaklar 1550-1525 arası ayrışıyor; konvansiyon Bryce 2005 (CLAUDE.md) — Bryce'tan madde olayı netleşmeden uygulanmaz",
    # L2S 591-602 (S19)
    "L2-954": "Ceneviz ipek loncası 1320 → 1432 adayı: SLSP (memoriedigitaliliguri.it) ekstresi Arte della Seta 1432 — yazar okunamadı; Di Tucci 1948 (Atti SLSP LXXI) ile teyit gerek; 1320'yi destekleyen akademik kaynak yok",
    "L2-959": "Muhammed b. Tuğluk bakır sikkesi 1329 → 1331 adayı: TDV «Tuğluklular» 731-732 (1331-1332); Haig yıl vermez; Jackson (Delhi Sultanate) teyidi gerek",
    "L2-968": "Fîrûz Şah Topra/Meerut sütunları 1356-01-01 → 1367-09-01 ZAYIF aday: Razavi (IHC Proceedings 70, 2009-10, s.996) «Eylül 1367 makara/halat» — makale açılmadı, ikincil alıntı; Meerut anılmıyor → Razavi tam metni ya da Afif neşri gelmeden uygulanmaz",
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
    "L2-1215": "Takvim: Tenpō 8/2/19 = 1837-03-25 Gregoryen (NAOJ ECO; Kotobank Heibonsha) — atlasla aynı",
    "L2-1219": "Takvim: 1844 Anayasası 18 Mart 1844 O.S. = 30 Mart N.S. (Yunan Meclisi kronolojisi) — atlas çevrilmiş, doğru; oylama ile Otto'nun imza/yemini ayrı olay → ic_not",
    # L2S 855-878 (S41/S42) — NAOJ ECO (KASA SALI); atlasla aynı
    "L2-1242": "Takvim: Keiō 4/3/14 = 1868-04-06 Gregoryen (NAOJ ECO)",
    "L2-1246": "Takvim: Meiji 4/11/12 = 1871-12-23 Gregoryen (NAOJ ECO; Sekai Daihyakka)",
    "L2-1247": "Takvim: Meiji 5/8/3 = 1872-09-05 Gregoryen (NAOJ ECO; Monbushō yayımı) — 8/2 = 09-04 Dajōkan bildirisi; ic_not_takvim «8/2 = 09-05» etiketi YANLIŞ → «8/3»",
    "L2-1249": "Takvim: Meiji 5/10/4 = 1872-11-04 Gregoryen (NAOJ ECO; Nipponica) — popüler «4 Ekim» ay-güneş günüdür",
    "L2-1251": "Takvim: askerlik yasası 1873-01-10 (Gregoryen takvime geçiş sonrası); ayrı olay Chōhei kokuyu Meiji 5/11/28 = 1872-12-28 (NAOJ ECO) → ic_not",
    "L2-1261": "Takvim: Tırnova Anayasası 16 Nisan 1879 Jülyen (CEUP 2010) + 12 = 1879-04-28 Gregoryen — atlasla aynı",
    "L2-1234": "Takvim: Ansei 7/3/3 = 1860-03-24 Gregoryen (NAOJ ECO; Kotobank «万延1年3月3日» geriye dönük yıl adı — Man'en 3/18'de ilan edildi → ic_not) — atlasla aynı",
    "L2-1240": "Takvim: Keiō 3/10/14 = 1867-11-09 Gregoryen (NAOJ ECO; Kotobank Mypedia) — atlasla aynı; kabul ertesi gün 10/15 = 1867-11-10",
    # L2E 1779-1814: Goryeosa (Academia Sinica, EMRELİC) + Japon satırları (NAOJ ECO, KASA SALI); atlasla aynı
    "L2-2229": "Takvim: Goryeo Injong 13/1 (朔 乙巳 = 1135-01-16) 辛亥 = 1135-01-22 (Academia Sinica)",
    "L2-2230": "Takvim: Injong 13/1 辛未 = 1135-02-11 (Academia Sinica)",
    "L2-2231": "Takvim: Injong 14/5 (朔 戊辰 = 1136-06-02) 己卯 = 1136-06-13 (Academia Sinica)",
    "L2-2245": "Takvim: Jishō 4/10/15 甲午 = 1180-11-04 Jülyen (NAOJ ECO)",
    "L2-2246": "Takvim: Jishō 4/10/15 甲午 = 1180-11-04 Jülyen (NAOJ ECO)",
    "L2-2247": "Takvim: Yōwa 1/8/13 丁巳 = 1181-09-23 Jülyen (NAOJ ECO)",
    "L2-2250": "Takvim: Juei 3/2/4 癸亥 = 1184-03-17 Jülyen (NAOJ ECO)",
    "L2-2251": "Takvim: Bunji 1/11/12 辛卯 = 1185-12-05 Jülyen (NAOJ ECO)",
    "L2-2252": "Takvim: Bunji 1/11/28 丁未 = 1185-12-21 Jülyen (NAOJ ECO)",
    "L2-2253": "Takvim: Bunji 1/11/29 戊申 = 1185-12-22 Jülyen (NAOJ ECO; Azuma Kagami j.5)",
    "L2-2254": "Takvim: Bunji 1/11/29 戊申 = 1185-12-22 Jülyen (NAOJ ECO; Azuma Kagami j.5)",
    "L2-2264": "Takvim: Yuan shi j.1 Taizu 11 丙子, 10. ay ≈ 1216-11-11…12-09 (Academia Sinica) — atlas yıl düzeyinde, yalnız ay",
    "L2-1119": "Takvim: Genroku 2/3/27 = 1689-05-16 Gregoryen (NAOJ ECO; Nihon Kokugo Daijiten) — atlasla aynı",
    # LAB L2L / HAVVA L2H Çin satırları (Academia Sinica, EMRELİC; (JDN+49) mod 60 çapraz; atlasla aynı)
    "L2-1903": "Takvim: Kuzey Qi Tianbao 1/5 戊午 = 550-06-09 (ay cümlede yok, Bei Qi shu'dan) (Academia Sinica)",
    "L2-1904": "Takvim: Kuzey Qi Tianbao 1/5 戊午 = 550-06-09 (Academia Sinica)",
    "L2-1917": "Takvim: Kuzey Zhou 1/1 = 557-02-15 (Academia Sinica)",
    "L2-1918": "Takvim: Kuzey Zhou 1/1 = 557-02-15 (Academia Sinica)",
    "L2-1919": "Takvim: 癸亥 557-11-04, 甲子 557-11-05 (Academia Sinica)",
    "L2-1920": "Takvim: 560-05-31 (Academia Sinica)",
    "L2-1921": "Takvim: 560-09-08 (Academia Sinica)",
    "L2-1922": "Takvim: 561-12-03 (Academia Sinica)",
    "L2-1926": "Takvim: 565-06-08 (Academia Sinica)",
    "L2-1929": "Takvim: 576-09-10 (Academia Sinica)",
    "L2-1930": "Takvim: 庚戌 577-01-10 (戊申 01-08) (Academia Sinica)",
    "L2-1931": "Takvim: 577-01-18 (Academia Sinica)",
    "L2-1932": "Takvim: 578-06-21 (Academia Sinica)",
    "L2-1933": "Takvim: 578-06-22 (Academia Sinica)",
    "L2-1934": "Takvim: 580-07-07 (Academia Sinica)",
    "L2-1935": "Takvim: 581-03-04 (Academia Sinica)",
    "L2-1936": "Takvim: 583-01-05 (yıl sınırı geçer, 583 doğru) (Academia Sinica)",
    "L2-1937": "Takvim: 583-04-15 (Academia Sinica)",
    "L2-1941": "Takvim: 587-10-26 (Academia Sinica)",
    "L2-1959": "Takvim: 617-06-23 (Academia Sinica)",
    "L2-1964": "Takvim: 618-04-11 (Academia Sinica)",
    "L2-1965": "Takvim: 618-09-04 (Academia Sinica)",
    "L2-1966": "Takvim: 619-05-25 (Academia Sinica)",
    "L2-1967": "Takvim: 621-11-10 (Academia Sinica)",
    "L2-1973": "Takvim: 631-01-31 (Academia Sinica)",
    "L2-1978": "Takvim: 634-12-28 (Academia Sinica)",
    "L2-1981": "Takvim: 636-01-25 (yıl hassasiyeti, 636 doğru) (Academia Sinica)",
    "L2-1982": "Takvim: 636-01-25 (Academia Sinica)",
    "L2-1987": "Takvim: 640-01-07 (Academia Sinica)",
    "L2-1988": "Takvim: 640-01-19 (Academia Sinica)",
    "L2-1992": "Takvim: 641-01-21 (Academia Sinica)",
    "L2-1994": "Takvim: 642-01-23 (Academia Sinica)",
    "L2-2000": "Takvim: 648-01-26 (Academia Sinica)",
    "L2-2115": "Takvim: Goryeo Taejo 1/6 丙辰 = 918-07-25 (Academia Sinica)",
    "L2-2120": "Takvim: 923-05-13 (Academia Sinica)",
    "L2-2132": "Takvim: Liao Tianxian 5/11 戊寅 = 930-12-11 — atlas yıl düzeyinde, gün eklenebilir (Academia Sinica)",
    "L2-2137": "Takvim: 936-09-26 (Academia Sinica)",
    "L2-2142": "Takvim: 938-11-01 (Academia Sinica)",
    # HAVVA L2H Japon satırları — NAOJ ECO ters çeviri (KASA SALI), Jülyen; atlasla aynı
    "L2-2026": "Takvim: Wadō 3/3/10 = 710-04-13 Jülyen (NAOJ ECO)",
    "L2-2027": "Takvim: Wadō 3/3/10 = 710-04-13 Jülyen (NAOJ ECO)",
    "L2-2046": "Takvim: Tenpyō-hōji 8/9/11 = 764-10-10 Jülyen (NAOJ ECO)",
    "L2-2047": "Takvim: Tenpyō-hōji 8/9/18 = 764-10-17 Jülyen (NAOJ ECO)",
    "L2-2050": "Takvim: Enryaku 3/11/11 = 784-12-27 Jülyen (NAOJ ECO)",
    "L2-2051": "Takvim: Enryaku 13/10/22 = 794-11-18 Jülyen (NAOJ ECO)",
    "L2-2064": "Takvim: Jōgan 8 閏3/10 = 866-04-28 Jülyen (NAOJ ECO)",
    "L2-2065": "Takvim: Jōgan 8/8/19 = 866-10-01 Jülyen (NAOJ ECO)",
    "L2-2144": "Takvim: Tengyō 3/2/8 = 940-03-19 Jülyen (NAOJ ECO)",
    # L2S 723-734 (S30) — NAOJ ECO (KASA SALI)
    "L2-1096": "Takvim: Kan'ei 12/6/21 = 1635-08-03 Gregoryen (NAOJ ECO; Kotobank) — atlasla aynı",
    "L2-1097": "Takvim: Kan'ei 14/10/25 «頃» = 1637-12-11 Gregoryen (NAOJ ECO; Kotobank) — atlasla aynı, kaynak «yaklaşık» der",
    "L2-1104": "Takvim: Meireki 3/1/18 = 1657-03-02 Gregoryen (NAOJ ECO; Nipponica 1/18-19) — atlasla aynı; ic_not_takvim eksik → eklenir",
    # L2E 1719-1754 (EMRELİC, Academia Sinica; (JDN+49) mod 60 çapraz) + NAOJ (KASA SALI)
    "L2-2190": "Takvim: Liao Taiping 9/8 己丑 = 1029-09-13 başlangıç (atlasla aynı); Taiping 10/8 丙午 = 1030-09-25 bitiş; Goryeosa Hyeonjong 20/9 戊午 = 1029-10-12 — Goryeo takvimi Song/Liao ile aynı alındı → ic_not beyanı (Academia Sinica)",
    "L2-2191": "Takvim: Hyeonjong 20/12 庚寅 = 1030-01-12 (Academia Sinica; atlasla aynı)",
    "L2-2174": "Takvim: Taiping Xingguo 4/5/1 己卯 = 979-05-29; 戊子 = 06-07 yeni Bingzhou; 丙申 = 06-15 Taiyuan'ın yakılması (Academia Sinica; atlasla aynı)",
    "L2-1070": "Takvim: Tenshō 16/7/8 = 1588-08-29 Gregoryen (NAOJ ECO; Heibonsha «1588年7月8日»)",
    # L2S 687-698 (S27) — NAOJ ECO (KASA SALI)
    "L2-1068": "Takvim: Tenshō 3/5/21 = 1575-06-29 Jülyen (NAOJ ECO; Gregoryen 07-09) — atlas günü doğru, ic_not_takvim «Gregoryen 1575-06-29» etiketi YANLIŞ → «Jülyen» (1582-10-15 öncesi)",
    # L2E 1695-1718 (EMRELİC, Academia Sinica; EŞLEŞİR)
    "L2-2145": "Takvim: 940-03-25 (Academia Sinica)",
    "L2-2147": "Takvim: Tianfu 6/8 辛亥 = 941-09-17 ve 9/庚申 = 09-26 ikisi de tutar; kaynak cümlesinde ay yok → yalnız yıl (Academia Sinica)",
    "L2-2153": "Takvim: 947-03-10 (Academia Sinica)",
    "L2-2155": "Takvim: 951-02-13 (Academia Sinica)",
    "L2-2156": "Takvim: 951-02-24 (Academia Sinica)",
    "L2-2158": "Takvim: Guangshun 2/10 丁酉 = 952-11-04 Wang Kui Changsha'ya girdi (Academia Sinica)",
    "L2-2159": "Takvim: Guangshun 2/10 丁酉 = 952-11-04 (Academia Sinica)",
    # L2E 1427-1438 + 1551-1574 + L2H (EMRELİC, Academia Sinica) + NAOJ (KASA SALI)
    "L2-1882": "Takvim: Xiaochang 2/9/15 辛亥 = 526-10-06 (Academia Sinica)",
    "L2-1884": "Takvim: Wutai 1/4/13 庚子 = 528-05-17 (Academia Sinica; sinocal Jianyi 1 diye etiketler — Xiaozhuang'ın tahta çıkışı → ic_not)",
    "L2-1887": "Takvim: Yong'an 3/9 辛卯 = 530-10-25; 戊戌 = 530-11-01 (Academia Sinica)",
    "L2-1883": "Takvim: Keitai 21/6/3 甲午 = 527-07-16 Jülyen (NAOJ ECO: 6/1 壬辰 = 07-14; Academia Sinica ile aynı)",
    "L2-1885": "Takvim: Keitai 22/11/11 甲子 = 528-12-07 Jülyen (NAOJ ECO: 11/1 甲寅 = 11-27; Academia Sinica ile aynı)",
    "L2-1806": "Takvim: Huangchu 1 庚午 = 220-12-10; 辛未 = 12-11 (Academia Sinica)",
    "L2-2001": "Takvim: Zhenguan 22 閏12 丁丑 = 649-01-19 (Academia Sinica; L2-600/602 ile aynı)",
    "L2-2003": "Takvim: Zhenguan 23/1 辛亥 = 649-02-22 (Academia Sinica)",
    "L2-2007": "Takvim: Xianqing 3/2/1 甲寅 = 658-03-10 (Academia Sinica) — atlas yıl düzeyinde; sınıra bağlıysa gün",
    "L2-2009": "Takvim: Longshuo 1, 3. ay = 661-04-05…05-03 (Academia Sinica) — atlas yıl düzeyinde; sınıra bağlıysa 661-04-05 + [yalnız ay]",
    "L2-2012": "Takvim: Longshuo 3/9 戊午 = 663-10-14 (Academia Sinica; Baekgang) — atlas yıl düzeyinde; sınıra bağlıysa gün",
    "L2-2015": "Takvim: Shangyuan 2/1/21 丙寅 = 675-02-21 (Academia Sinica)",
    "L2-2019": "Takvim: Tianshou 1 «9. ay» 壬午 = 690-10-16 (Academia Sinica); Wu Zhou takvim reformu: kaynağın Xia 9. ayı = Zhou 11. ay (11/9) → ic_not",
    "L2-2024": "Takvim: Shenlong 1/1 乙巳 = 705-02-22, 丙午 = 705-02-23; 2. ay 甲寅 = 705-03-03 Wu Zhou'nun sonu (Academia Sinica)",
    # L2E 1439-1450 (EMRELİC, Academia Sinica) + NAOJ (KASA SALI)
    "L2-1889": "Takvim: Yongxi 3/7 丁未 = 534-08-21 ayrılış; 己酉 = 534-08-23 Gao Huan Luoyang'a girdi (Academia Sinica)",
    "L2-1890": "Takvim: Yongxi 3/10 丙寅 = 534-11-08 (Academia Sinica); Doğu Wei Tianping 1/10 丙子 = 534-11-18 Ye'ye taşınma",
    "L2-1891": "Takvim: Doğu Wei Tianping 1/11 庚寅 = 534-12-02 varış (Academia Sinica)",
    "L2-1894": "Takvim: Yongxi 3 閏12 癸巳 = 535-02-03 Xiaowu'nun ölümü (Academia Sinica)",
    "L2-1895": "Takvim: Senka 1/5/1 辛丑 = 536-06-05 Jülyen (NAOJ ECO; Çin takvimiyle de aynı, EMRELİC)",
    "L2-1897": "Takvim: Liang Datong 5/8 乙酉 = 539-09-02 (Academia Sinica) — atlas yıl düzeyinde; sınıra bağlıysa gün yazılabilir",
    "L2-1898": "Takvim: Doğu Wei Wuding 1/3 戊申 = 543-05-07 (Academia Sinica) — atlas yıl düzeyinde; sınıra bağlıysa gün yazılabilir",
    "L2-621": "Takvim: Enryaku 13/11/8 丁丑 = 794-12-04 Jülyen (NAOJ ECO: 11/1 庚午 = 794-11-27)",
    # L2E 1391-1402 antik (EMRELİC, Academia Sinica; EŞLEŞİR)
    "L2-1846": "Takvim: Yongchu 1/6/14 丁卯 = 420-07-10 (Academia Sinica)",
    "L2-1853": "Takvim: Taiyan 3/11/13 甲申 = 437-12-25 (Academia Sinica)",
    "L2-1861": "Takvim: Jianyuan 1/4/23 甲午 = 479-05-29 (Academia Sinica; kaynak Nan Qi shu c.2, c.8 değil)",
    "L2-1865": "Takvim: Yongming 11/7/30 戊寅 = 493-08-27 Wudi'nin ölümü (Academia Sinica)",
    "L2-1867": "Takvim: Yongtai 1/7/30 己酉 = 498-09-01 Mingdi'nin ölümü, veliahdın tahta çıkışı (Academia Sinica)",
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
    "L2-1282": ("tarih düzelt", "Evangelika 1901-11-08 → 1901-11-21 N.S. (+13; Yunanistan 1923'e dek Jülyen) — TAKVIM-OS-TUR3 kronoloji_balkan.js:953 ile aynı karar; O.S. yalnız Vikipedi dipnotundan, Carabott 1993 (J. Mediterranean Studies 3/1) okunmadı → ic_not «kaynak O.S. 8 Kasım»"),
    "L2-1283": ("tarih düzelt", "Aro Seferi «dört koldan başlattı» 1901-11-28 → 1901-12-01: Montanaro nihai raporu (London Gazette 27473 s.5881) — 28 Kasım yalnız Enyong Nehri keşfi, ilk çatışma 30 Kasım Esu-Itu, kollar 1 Aralık (Akwete), 2 Aralık (Oguta), 3 Aralık (Ungwana) yürüdü → ic_not; Arochukwu'nun alınış günü s.5882 okunmadı"),
    "L2-1218": ("tarih düzelt", "Yunan 3 Eylül ayaklanması 1843-09-03 → 1843-09-15 Gregoryen: Yunanistan 1923'e dek Jülyen kullandı, «3 Σεπτεμβρίου 1843» O.S. (+12); atlas aynı dönemin 1844 Anayasası'nı (L2-1219, 18 Mart O.S. = 30 Mart N.S.) çevirmiş — iki madde tutarsızdı → ic_not «kaynak O.S. 3 Eylül»; Meclis sayfası 403, Clogg/Dakin açılamadı"),
    "L2-1244": ("tarih düzelt", "Kayor / Dekheulé 1868-10-26 → 1886-10-26 (YIL HATASI): Monteil 1963, Archives de sociologie des religions 8/16 s.77-104 (Persée) «Le 26 [octobre] Lat-Dyor tombe à Dyaqiê… il avait 44 ans»; Lat Dior 1842-1886, demiryolu 1880'ler; 27 Ekim (Valois raporu) ic_not; metin «Lat Dior'u yendi» → «Lat Dior savaşta düştü»"),
    "L2-1123": ("tarih düzelt", "Khalsa 1699-04-13 → 1699-04-09: 1 Baisakh Bikrami 1756 = 30 Mart 1699 Jülyen = 9 Nisan Gregoryen (EMRELİC eski takvim taraması); 13 Nisan modern Vaisakhi alışkanlığı; odak_yer Delhi → Anandpur/Keshgarh"),
    "L2-1186": ("tarih düzelt", "Quang Trung ilanı 1788-11-22 → 1788-12-22: Takvim: Qianlong 53 戊申, 11. ay 25. gün = 1788-12-22 Gregoryen (Academia Sinica, EMRELİC) — atlas «11. ay»ı Kasım okumuş; Tây Sơn takvimi Qing'den ±1 gün sapabilir → ic_not"),
    "L2-1155": ("tarih düzelt", "Gürcistan 1744-01-01 → 1744-07-01 + «[yalnız ay teyitli]»: Georgian National Encyclopedia «Teimuraz II» — «the Shah confirmed Teimuraz II as King of Kartli and Erekle as King of Kakheti in July 1744»; atlas metni TERS (Teimuraz Kaheti, Erekle Kartli diyor) → metin de düzeltilir; tek kaynak (Iranica 403)"),
    "L2-1212": ("tarih düzelt", "Sam Houston «ilk başkanı seçildi» 1836-10-01 → 1836-09-05 seçim günü (TSHA, Nance «Republic of Texas»: «On election day, September 5»); yemin 1836-10-22 ic_not"),
    "L2-1208": ("tarih düzelt", "Menotti ayaklanması 1831-02-04 → 1831-02-03: Treccani DBI «Menotti, Ciro» — tutuklama sabahı 3 Şubat, hareket aynı akşam; madde ayaklanma ile idamı birleştiriyor → idam 1831-05-26 («Il 26 maggio 1831 la sentenza fu eseguita») ayrı madde"),
    # SARKAR O.S. BULGUSU — iki bağımsız ölçüm: haftanın günü (KASA SALI) + ortalama Ay yaşıyla tithi (EMRELİC)
    "L2-1111": ("tarih düzelt", "Şivâcî taç giymesi 1674-06-06 → 1674-06-16 Gregoryen: Sarkar 6 Haziran O.S.; Jyeshtha śukla 13 — 1674-06-06 Jülyen'de Ay yaşı 12,9 gün (uyar), Gregoryen 06-06'da 2,9 (uymaz); ic_not: «kaynak (Sarkar/EIC) O.S.; tithi + haftanın günü ile teyit (KASA SALI haftanın günü, EMRELİC tithi)»"),
    "L2-1114": ("tarih düzelt", "Şivâcî ölümü 1680-04-03 → 1680-04-14 Gregoryen: Sarkar «Sunday, 4th April 1680» O.S. — Jülyen'de Pazar (Gregoryen'de Perşembe), Chaitra pūrṇimā: Ay yaşı 15,7 (uyar); atlasın 04-03'ü hiçbir takvime uymaz; Sarkar 3/4 Nisan dolunay belirsizliğini dipnotta beyan eder → ic_not; ic_not: «kaynak (Sarkar/EIC) O.S.; tithi + haftanın günü ile teyit (KASA SALI haftanın günü, EMRELİC tithi)»"),
    "L2-1118": ("tarih düzelt", "Sambâjî idamı 1689-03-11 → 1689-03-21 Gregoryen: Sarkar 11 Mart O.S.; Phalguna amāvāsyā — 1689-03-11 Jülyen'de Ay yaşı 0,8 (uyar); gerekçe ulemanın fetvası (Sarkar), «İslâm'ı kabul etmeyi reddedince» yumuşatılır; ic_not: «kaynak (Sarkar/EIC) O.S.; tithi + haftanın günü ile teyit (KASA SALI haftanın günü, EMRELİC tithi)»"),
    # L2E 1779-1814 (EMRELİC) + NAOJ (KASA SALI)
    "L2-2249": ("tarih düzelt", "1183-08-01 → 1183-08-14: Takvim: Juei 2/7/25 丁亥 = 1183-08-14 Jülyen (NAOJ ECO) — atlas ayın başı"),
    "L2-2243": ("tarih düzelt", "Lý Anh Tông 1175-01-01 → 1175-08-14: Toàn thư, 乙未 Chunxi 2, 7. ay 乙巳 (26. gün) = 1175-08-14 (Academia Sinica, Song takvimi; EMRELİC) — Đại Việt takvimi ±1 gün → ic_not"),
    "L2-2261": ("tarih düzelt", "1210-01-01 → 1210-11-15: Daiyue shiji 庚午 (Jiading 3), 10. ay 28. gün 壬午 = 1210-11-15 (Academia Sinica; 30 günlük ay tutarlı; EMRELİC)"),
    "L2-2263": ("tarih düzelt", "Gazne'nin düşüşü 1214 → 1215-12-01 + hicrî beyan: TDV Şâban 612 / Aralık 1215; Şâban 612 ≈ 1215-11-25…12-23 Jülyen (tabüler) ∩ Aralık → kesişimin ilk günü 1215-12-01; «Lahor Kabâce'ye» kaynakta yok — Yıldız Lahor'u Kabâce'yi yenerek aldı (EMRELİC)"),
    "L2-2256": ("tarih düzelt", "Otto I 1190 → 1188: NDB 1188 (belge), en geç Nisan 1189; atlas 1190 EB1911 saltanat aralığına dayanır (EMRELİC)"),
    "L2-2237": ("tarih düzelt", "Foix Roger-Bernard I 1148 → 1149: Gran Enciclopèdia Catalana Roger-Bernard I 1149-88, Roger III 1124-48 → 1148/1149 ic_not'ta beyan (EMRELİC)"),
    "L2-1120": ("tarih düzelt", "Charnock Kalküta 1690-08-24 → 1690-09-03 Gregoryen: İngiliz Doğu Hindistan Şirketi kaydı O.S. — «24 Ağustos 1690» Jülyen'de Pazar, Gregoryen'de Perşembe (haftanın günüyle ölçüldü); Banglapedia ve Calcutta Past and Present 24 Ağustos (O.S.), TDV 1690 → ic_not iki gün; «üç köyü birleştirerek» TDV ve Banglapedia'da yok; 2003 Kalküta Yüksek Mahkemesi Charnock'ı «kurucu» saymaz"),
    "L2-1110": ("tarih düzelt", "Üç Senyörlük İsyanı 1673-12-01 → 1673-12-28: Hummel, Eminent Chinese «Wu San-kuei» — «set up the standard of revolt on December 28, 1673»; Takvim: Kangxi 12/11/21 = 1673-12-28 Gregoryen (Academia Sinica, EMRELİC) — çift teyit"),
    # LAB L2L 1451-1550 + HAVVA L2H 1575-1694 + EMRELİC — Academia Sinica / NAOJ takvim düzeltmeleri
    "L2-1956": ("tarih düzelt", "617-02-10 → 617-02-15: Takvim: 1. ay 5. gün 丙辰 = 617-02-15 (Academia Sinica, EMRELİC; (JDN+49) mod 60 çapraz)"),
    "L2-1957": ("tarih düzelt", "617-02-10 → 617-02-15: Takvim: 1. ay 5. gün 丙辰 = 617-02-15 (Academia Sinica, EMRELİC; (JDN+49) mod 60 çapraz)"),
    "L2-1958": ("tarih düzelt", "617-03-12 → 617-03-31: Takvim: 2. ay 19. gün 庚子 = 617-03-31 (Academia Sinica, EMRELİC; (JDN+49) mod 60 çapraz)"),
    "L2-1942": ("tarih düzelt", "589-03-21 → 589-03-27: Takvim: Sui 3. ay 己巳 = 589-03-27; Chen takvimi tabloda yok, Chen shu günü Sui ile aynı sayıldı → ic_not (Academia Sinica, EMRELİC; (JDN+49) mod 60 çapraz)"),
    "L2-1961": ("tarih düzelt", "Tang künyesi f 617-12-12 → 618-06-18: Wude 1/5 甲子 = 618-06-18 Gaozu'nun tahta çıkışı (devletin ilanı); Yining 1/11 甲子 = 617-12-20 Li Yuan 唐王 ve Gongdi'nin tahta çıkışı → ic_not; atlas günü ikisine de uymuyor (Academia Sinica, EMRELİC; (JDN+49) mod 60 çapraz)"),
    "L2-1986": ("tarih düzelt", "Pandya 640 → 670: Arikesari Maravarman 670 (Nilakanta Sastri 1966) → ic_not «tarih tartışmalı (640/650/670)» (EMRELİC)"),
    "L2-2045": ("tarih düzelt", "Shi Siming «Büyük Yan Kralı» 759-02-02 → 759-02-03: Takvim: Qianyuan 2/1/1 = 759-02-03 (Academia Sinica, EMRELİC; (JDN+49) mod 60 çapraz)"),
    "L2-2099": ("tarih düzelt", "Sonraki Liang künye 907-06-01 → 907-06-05: Takvim: Kaiping 1/4 戊辰 = 907-06-05 (Academia Sinica, EMRELİC; (JDN+49) mod 60 çapraz)"),
    "L2-2102": ("kaynak yenile (tarih KALIR)", "Li Cunxu Jin Kralı 908-02-05 = Tianyou 5, 1. ay başı (908-02-05…03-04) → «[yalnız ay teyitli]» beyanı (Academia Sinica, EMRELİC; (JDN+49) mod 60 çapraz; L2-635 Li Keyong ölümü 908-02-23 ile uyumlu)"),
    "L2-2105": ("tarih düzelt", "Boxiang 911-01-01 → 911-02-03: Takvim: Qianhua 1/1 丁亥 = 911-02-03; yıl adı 5. ayda değiştiği için takvimde 開平5 (Academia Sinica, EMRELİC; (JDN+49) mod 60 çapraz)"),
    "L2-2107": ("tarih düzelt", "Yan (Liu Shouguang) 911-08-01 → 911-08-27 + «[yalnız ay teyitli]»: 8. ay = 911-08-27…09-24; atlas günü ay dışı (Academia Sinica, EMRELİC; (JDN+49) mod 60 çapraz)"),
    "L2-2119": ("tarih düzelt", "Yang Pu 921-01-01 → 921-07-25: Takvim: Tianyou 18/6/18 = 921-07-25 (Later Liang Longde 1 takvimi; Academia Sinica, EMRELİC; (JDN+49) mod 60 çapraz)"),
    "L2-2139": ("kaynak yenile (tarih KALIR)", "Güney Tang / Xu Gao 937-11-11: Tianzuo 3, 10. ay = 937-11-06…12-05 → atlas ay içinde, «[yalnız ay teyitli]» beyanı (Academia Sinica, EMRELİC; (JDN+49) mod 60 çapraz)"),
    "L2-2040": ("tarih düzelt", "Büyük Buda fermanı 743-11-06 → 743-11-05: Takvim: Tenpyō 15/10/15 = 743-11-05 Jülyen (NAOJ ECO ters çeviri; Tang takvimiyle de 11-05) — atlas 11-06 = 10/16"),
    "L2-2088": ("tarih düzelt", "Yang Wu künye 904 → 902: birincil kaynak Wu Prensliğini 天復二年 (902) verir; atlasın dayanağı chinahighlights (turizm, uygun değil) (HAVVA)"),
    "L2-2143": ("tarih düzelt", "Masakado künye başı 940-01-01 → 940-01-26 (L2-677 kararıyla aynı: Tengyō 2/12/15 = 940-01-26 Jülyen, NAOJ ECO) — HAVVA'nın 939 önerisi YANLIŞ: Tengyō 2. yılın 12. ayı Jülyen'de Ocak 940'a düşer"),
    "L2-1862": ("tarih düzelt", "480 → 481: Nepos'un ölümü 480, Dalmaçya seferi/ilhakı 481 → ilhak için 481-01-01 (EMRELİC)"),
    "L2-1875": ("tarih düzelt", "520 → 525: atlasın 520'si kaynakta yok; egemenlik 525 seferiyle (EMRELİC)"),
    "L2-2226": ("tarih düzelt", "Ludwig I Thüringen 1131 → 1130: ADB (Wenck, Bd.19) 1130; NDB açılamadı, 1131 yalnız arama özetlerinde → ic_not çelişki (EMRELİC)"),
    "L2-1100": ("kaynak yenile (tarih KALIR)", "Bemba 1650-01-01 KALIR + «[yaklaşık; erken 17. yy, ~1600-1660]» beyanı: Roberts, Journal of African History 11/2 (1970) s.16 — soy sayımı ~1660, kral listesi ~1600, terminus ante quem 1700 (künye f:1700 ile tutarlı); kaynak alanındaki «çevrimiçi ikincil kaynak» → Roberts 1970; Luba bağı Roberts'ta net değil"),
    "L2-1078": ("tarih düzelt", "Modena başkent 1598-02-01 → 1598-01-28: Cesare d'Este Ferrara'dan Modena'ya yola çıktı (Treccani DBI «Cesare d'Este», Ascari c.24, 1980; Chiappini 1997 aynı gün — çift teyit); 13 Ocak 1598 Faenza kapitülasyonu ve Modena'ya varış (kaynakta yok) ic_not; «eskisinin yarısı büyüklüğünde» DBI'da yalnız nüfus"),
    "L2-2204": ("tarih düzelt", "Zvonimir taç giymesi 1075-10-08 → 1076-10-08 + «[yalnız ay teyitli; gün teyitsiz]»: Hrvatska enciklopedija ve Zekan 2000 (Starohrvatska prosvjeta 27) Ekim 1076 der, gün yok; yıl kayması kesin (EMRELİC)"),
    "L2-2202": ("tarih düzelt", "Lý Thánh Tông ölümü 1072-01-01 → 1072-02-01: Toàn thư Bản kỷ q.3, 熙寧5 (壬子) 1. ay 庚寅 (10. gün) = 1072-02-01 (Academia Sinica; EMRELİC) — Đại Việt takvimi Song'dan ±1 gün sapabilir → ic_not"),
    # L2E 1695-1718 (EMRELİC, Academia Sinica): yer tutucu YYYY-01-01 → kaynak günü
    "L2-2146": ("tarih düzelt", "Liu Bin (Güney Han) 941-01-01 → 942-06-10: Takvim: Tianfu 7/4 丁丑 = 942-06-10 (Academia Sinica; EMRELİC) — atlas yer tutucu, kaynak gün veriyor"),
    "L2-2148": ("tarih düzelt", "943-01-01 → 943-04-15: Takvim: Tianfu 8/3 丙戌 = 943-04-15 (Academia Sinica; EMRELİC) — atlas yer tutucu, kaynak gün veriyor"),
    "L2-2149": ("tarih düzelt", "Min künye ucu 945 → 945-10-02: Takvim: Kaiyun 2/8 丁亥 = 945-10-02 Jianzhou alındı (ZZTJ c.285) (Academia Sinica; EMRELİC) — atlas yer tutucu, kaynak gün veriyor"),
    "L2-2150": ("tarih düzelt", "Güney Tang'ın Min'i yıkması 946 → 945-10-02: Takvim: Kaiyun 2/8 丁亥 = 945-10-02 (ZZTJ c.285; Academia Sinica); Xin Wudai shi notu 946 → çelişki ic_not'a iki kaynağıyla (EMRELİC)"),
    "L2-2151": ("tarih düzelt", "947-01-01 → 947-03-10: Takvim: Tianfu 12/2 辛未 = 947-03-10 (Academia Sinica; EMRELİC) — atlas yer tutucu, kaynak gün veriyor"),
    "L2-2152": ("tarih düzelt", "Wuyue 947-01-01 → 948-02-12: Takvim: Tianfu 12, 12. ayın son günü 庚戌 = 948-02-12 — yıl da kayar (Academia Sinica; EMRELİC) — atlas yer tutucu, kaynak gün veriyor"),
    "L2-2154": ("tarih düzelt", "951-01-01 → 951-12-04: Takvim: Guangshun 1/11 辛酉 = 951-12-04 (Academia Sinica; EMRELİC) — atlas yer tutucu, kaynak gün veriyor"),
    "L2-2157": ("tarih düzelt", "Chengdu seli 952-01-01 → 952-07-07: Takvim: Guangshun 2/6 丁酉 = 952-07-07 (Academia Sinica; EMRELİC) — atlas yer tutucu, kaynak gün veriyor"),
    "L2-2162": ("tarih düzelt", "Liu Chang 958-01-01 → 958-09-18: Takvim: Xiande 5/8 辛巳 = 958-09-18 (Academia Sinica; EMRELİC) — atlas yer tutucu, kaynak gün veriyor"),
    # L2E 1439-1450 + L2H 1367-1390 (EMRELİC, Academia Sinica)
    "L2-1892": ("tarih düzelt", "Batı Wei Wendi tahta çıkışı 535-01-01 → 535-02-18: Takvim: Datong 1/1/1 戊申 = 535-02-18 (Academia Sinica; Bei shi c.5); Xiaowu'nun ölümü Yongxi 3 閏12 癸巳 = 535-02-03 önce gelir → sıra düzelir"),
    "L2-1893": ("tarih düzelt", "Batı Wei 535-01-01 → 535-02-18: Takvim: Datong 1/1/1 戊申 = 535-02-18 (Academia Sinica); kaynak Zhou shu 3 → Bei shi c.5"),
    "L2-1821": ("tarih düzelt", "Jin Huaidi'nin öldürülmesi 313-01-01 → 313-03-14: Takvim: Yongjia 7/2/1 丁未 = 313-03-14 (Academia Sinica; o yıl 丁未 yalnız bu gün)"),
    "L2-1838": ("tarih düzelt", "Tuoba Gui Dai Kralı 386-01-01 → 386-02-20: Takvim: Dengguo 1/1/6 戊申 = 386-02-20 (Academia Sinica)"),
    "L2-1837": ("tarih düzelt", "386-01-01 → 387-01-06 + «[yalnız ay teyitli]»: Takvim: Taiyuan 11, 12. ay = 387-01-06…02-04 (Academia Sinica) — yıl sınırı kayar"),
    "L2-1010": ("tarih düzelt", "Cenova matbaası 1471-06-01 → 1471-02-20: noter senediyle ortaklık (Lamberto di Delft, Antonio di Anversa + üç hukukçu) — Staglieno, «Sui primordi dell'arte della stampa in Genova», Atti SLSP IX/III (19. yy belge neşri); modern kaynakla teyit önerilir → ic_not"),
    "L2-998": ("tarih düzelt", "Antonio da Noli Yeşilburun 1456 → 1460 (yıl): DBI «Antonio da Noli» (Pistarino 1961) — Noli 1460'ta Portekiz'e geldi, adalar «sulla fine del 1460» (olasılık beyanlı), kraliyet beratı 1462-09-19 → ic_not; «adaların ilk valisi» DBI'da yalnız Santiago kaptanlığı; Alvise da Mosto adaları önce görmüş olabilir → metin"),
    # L2H 1271-1342 (HAVVA) — antik kronoloji konvansiyonu (CLAUDE.md: Mısır Shaw 2000, Ur III Frayne RIME, Hitit Bryce 2005; MÖ n = -(n-1))
    "L2-1752": ("kaynak yenile (tarih KALIR)", "III. Ramses: atlas -1183 = MÖ 1184 = Shaw (ed.), Oxford History of Ancient Egypt 2000 (1184-1153) → KALIR; HDM 1185 ve Potts 1184 konvansiyon farkı ic_not'a (HAVVA önerisi reddedildi: konvansiyon Shaw)"),
    "L2-1753": ("kaynak yenile (tarih KALIR)", "Setnakht: atlas -1185 = MÖ 1186 = Shaw 2000 (1186-1184) → KALIR; kaynaktaki MÖ 1187 konvansiyon farkı ic_not'a (HAVVA önerisi reddedildi)"),
    "L2-1765": ("tarih düzelt", "III. Thutmose: -1457 → -1478 (MÖ 1479 tahta çıkış = Shaw 2000, 1479-1425); atlasın MÖ 1458'i Hatshepsut'un ölümüyle tek başına hükmün başlangıcı → ic_not; madde «firavun oldu» dediği için çıkış"),
    "L2-1774": ("tarih düzelt", "Şulgi tahta çıkışı: -2094 → -2093 (MÖ 2094 = -(2094-1); VERI-YAPISI MÖ n = -(n-1); orta kronoloji Frayne RIME 3/2, 2094-2047)"),
    # L2E 1391-1402 antik ganzhi (EMRELİC, Academia Sinica)
    "L2-1845": ("tarih düzelt", "Pingcheng'e taşınma 398 → 398-07-30 + «[yalnız ay teyitli; gün teyitsiz]»: Wei shu c.2 天興元年秋七月 = 398-07-30…08-28 (Academia Sinica); Academia Sinica yılı Huangshi 3 diye etiketler, Tianxing yıl adı 12. ayda ilan edildi → ic_not"),
    "L2-1851": ("tarih düzelt", "Liu Song Wendi tahta çıkışı → 424-09-17: Takvim: Yuanjia 1/8/9 丁酉 = 424-09-17 (Academia Sinica; Song shu c.5); Shaodi'nin indirilişi Jingping 2/5/25 乙酉 = 424-07-07 → ic_not"),
    "L2-1876": ("tarih düzelt", "Anagui 520-09-27 → 520-09-28 + «[yalnız ay teyitli]»: Zhengguang 1, 9. ay = 520-09-28…10-26 (Academia Sinica); atlasın 09-27'si 8. aya düşer — gün adayı: 9/21 壬辰 = 520-10-18 (Wei shu; madde Anagui'nin gelişiyse bu gün yazılır)"),
    "L2-1843": ("kaynak yenile (tarih KALIR)", "Kuzey Liang 397: Long'an 1, 3. ay = 397-04-14…05-12 (Academia Sinica) → atlas yıl düzeyinde; sınıra bağlıysa 397-04-14 + «[yalnız ay teyitli]» önerilir"),
    "L2-1844": ("kaynak yenile (tarih KALIR)", "Kuzey Liang 397: Long'an 1, 3. ay = 397-04-14…05-12 (Academia Sinica) → sınıra bağlıysa 397-04-14 + «[yalnız ay teyitli]»"),
    "L2-1848": ("kaynak yenile (tarih KALIR)", "Hu Xia 407: Yixi 3, 6. ay = 407-07-21…08-18 (Academia Sinica) → sınıra bağlıysa 407-07-21 + «[yalnız ay teyitli]»"),
    "L2-1849": ("kaynak yenile (tarih KALIR)", "Hu Xia 407: Yixi 3, 6. ay = 407-07-21…08-18 (Academia Sinica) → sınıra bağlıysa 407-07-21 + «[yalnız ay teyitli]»"),
    "L2-953": ("tarih düzelt", "Alâeddin Halacî ölümü 1316-01-04 → 1316-01-06 (TDV «Halacîler»; CLAUDE.md: tarih çelişkisinde TDV esas) — ic_not: Iranica 3 Ocak (6 Şevval 715), Haig CHI III 2 Ocak; atlasın 4 Ocak'ı akademik kaynakta yok"),
    "L2-960": ("tarih düzelt", "Este papalık vekilliği 1332-01-02 → 1332-01-17 tören ve resmî devir (Treccani DBI «Este, Obizzo d'»); 29 Haziran 1329 Johannes XXII'nin vekâlet yetkisi (10 yıl, yıllık 10.000 florin) ic_not; «erkek soy tükenirse papalığa döner / 1598» DBI'da okunmadı → metin kontrol"),
    "L2-979": ("metin düzelt (tarih kalır)", "Yoshimitsu 1401: 1401 Mayıs'ta yalnız ilk elçilik; kangō ticareti 1404'ten itibaren (Nipponica/Ikegami «kangō», Digital Daijisen) → 1401 KALIR, metin «Ming'e ilk elçiliği gönderdi» olur; kangō 1404 ic_not'a (ya da ayrı madde)"),
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
    # L2E 1061-1072 (EMRELİC; hepsi ipucu)
    ("L2-1474", "[BEKLE — ipucu] İlk Filo: atlas 26 Ocak 1788 Sydney Cove bayrak çekme, başlık Botany Bay (18-20 Ocak) → olay ile gün uyuşmuyor, başlık ya da gün düzeltilir"),
    ("L2-1476", "[BEKLE — ipucu] Belçika: Turnhout 1789-10-27, Birlik Antlaşması 1790-01-11; atlas 1790-01-01 yer tutucu görünüyor"),
    ("L2-1477", "[BEKLE — ipucu] Belçika: Birlik Antlaşması 1790-01-11; atlas 1790-01-01 yer tutucu görünüyor"),
    ("L2-1478", "[BEKLE — ipucu] Belçika: Birlik Antlaşması 1790-01-11; atlas 1790-01-01 yer tutucu görünüyor"),
    ("L2-1483", "[BEKLE — ipucu] Poniatowski tahttan çekilmesi 1795-11-25, 24 Ekim değil (24 Ekim üçüncü bölüşme antlaşması)"),
    # L2S 603-614 (S20)
    ("L2-967", "Fîrûz Şah: kaynak alanı «TDV'de müstakil maddesi yok» yanlış — TDV «Fîrûz Şah Tuğluk» maddesi var (24 Mart 1351; «Tuğluklular» 24 Muharrem 752) → kaynak alanı düzeltilir, çift madde teyidi"),
    ("L2-971", "Papalığın Roma'ya dönüşü 1377-01-17 (DBI «Caterina da Siena»): atlas kronoloji_italya.js:119'da aynı olay zaten 1377-01-17 → yinelenen madde birleşir; Katerina'nın rolü tartışmalı (Raimondo da Capua / Maconi) → «ikna etti» nedenselliği yumuşatılır"),
    ("L2-973", "[BEKLE — TDV iç çelişkisi] Sa'deddîn II: TDV Evfât 1415 ölüm, Zeyla'da 1403 kaçış; madde «1386-1403/1410» TDV'ye dayanmıyor → üçüncü kaynak"),
    ("L2-977", "Kinkaku-ji 1397: 1397'de yapılan Kitayama-dono ve Shariden; Kinkaku-ji adı ve Zen tapınağı olması 1422 (vasiyet) → ad anakronik, ifade düzeltilir (Kotobank Daijisen)"),
    ("L2-978", "Stećci: UNESCO WHC 1504 Kotromanić'e bağlı zirve iddiası taşımaz; yayılım Bosna dışında Hersek, Hırvatistan, Karadağ, Sırbistan → metin daraltılır"),
    ("L2-965", "Kefe 1346 (Wheelis, EID 8(9) 2002) yıl tutar; «üçte biri» rakamı makalede yok → rakam çıkarılır ya da kaynaklanır"),
    # L2S 615-626 (S21)
    ("L2-993", "Ferrara Konsili 1438-01-08 yalnız Latin açılışı; Bizans heyeti 8 Şubat Venedik'e çıktı, VIII. Ioannes 4 Mart 1438 Ferrara'ya geldi (DBI Guarini) → «8 Ocak'ta Bizans heyeti gelip görüşmeler başladı» düzeltilir; Floransa'ya taşınma «veba» değil «salgın korkusu ve mali sebepler» (Enciclopedia Italiana)"),
    ("L2-986", "[BEKLE — sayfa tam okunmadı] Parisina ve Ugo 1425-05-21 (DBI 68) gün tutar; Ugo «üvey oğul» değil, Niccolò'nun Stella de' Tolomei'den gayrimeşru oğlu; «kale zindanında başlattı» bozuk"),
    ("L2-987", "Bernardino 1427-08-15 (DBI 9) gün tutar; «vaazlardan sonra şehir kanunları değişti» DBI'da yok → çıkarılır"),
    ("L2-990", "Kapilendra 1434 (Haig CHI III) yıl tutar; devletler.js orissa kaydında aynı olay iki kez (1435-01-01 ve 1434-01-01) → yinelenen madde birleşir; 29 Haziran 1435 taç giyme yalnız Madala Panji tabanlı ikincil"),
    ("L2-989", "Taccola De ingeneis tek günlük olay değil: 1419 başladı, III-IV ciltler 1431-33, eser 1450 bitti (DBI 70); 1433-01-02 kaynaksız → yıl hassasiyeti ve süre ifadesi"),
    ("L2-985", "Fonte Gaia 1419-10-20: DBI 62'ye göre son ödemenin (saldo) günü, iş kısa süre önce bitti → metin «tamamlandı / son ödeme» beyanı"),
    # L2S 591-602 (S19)
    ("L2-961", "İbn Battûta: «altı yıl Delhi kadısı» → TDV «yedi yıldan fazla» (22 Temmuz 1342'ye dek)"),
    ("L2-958", "Devletâbâd 1327: TDV iç tutarsızlığı — «Delhi Sultanlığı» Devagiri'yi «ikinci idarî merkez», «Tuğluklular» «başşehir» der → iki madde ic_not'a"),
    ("L2-957", "[BEKLE — kaynaksız ifadeler] Hammîr/Çitor 1326: «Tuğluk merkezinin dikkati Dekken'e kayınca» ve «Guhila yan kolu» Haig'de yok; Hammîr'in ölümü 1364"),
    ("L2-963", "Siena Duomo Nuovo: Consiglio generale kararı 23 Ağustos 1339 (212 evet/132 hayır; Bartalini, Il duomo nuovo di Siena); işler 1339 sonunda fiilen başladı → ic_not"),
    # L2E 1439-1450 (EMRELİC)
    ("L2-1892", "Batı Wei kuruluşu: kaynak Bei shi c.5, Datong 1, 1. ay 戊申; Xiaowu'nun ölümü (Yongxi 3, 閏12. ay 癸巳) tahta çıkıştan ÖNCE gelir — atlasta sıra ters → sıra düzeltilir"),
    ("L2-1893", "Batı Wei: kaynak alanı Zhou shu 3 Kuzey Zhou'nun kuruluşunu anlatır, yanlış → Bei shi c.5 ile değişir; Xiaowu ölümü/tahta çıkış sırası düzeltilir"),
    ("L2-1899", "Van Xuan 544: atlasın kaynağı (Sui shu 53, 602) yanlış olay → Liang shu c.3: Li Bi 544 (Datong 10, 1. ay) unvanı aldı"),
    ("L2-1897", "Champa 539: Liang shu 54 Rudravarman'ı adıyla anmaz → ad yorum olarak işaretlenir ya da kaynaklanır"),
    # L2S 627-638 (S22)
    ("L2-996", "Behlûl Lûdî 1451-04-19 (Haig CHI III) gün tutar; «Seyyid sultanını tahttan indirip» → Âlem Şah'ın çekildiği yazılır (Haig, TDV)"),
    ("L2-997", "Borso 1452-05-18 (Pallotti, Archivio di Stato di Modena): imparator 19 Mart Roma'da taçlandı, dönüşte 10 Mayıs Ferrara'ya girdi → «Roma'ya taç giymeye giderken Ferrara'da ağırlandı» yanlış"),
    ("L2-999", "[BEKLE — iddialar kaynaksız] Cenova haritası 1457: «Afrika'nın güneyden dolaşılabileceğini gösterdi» ve «Ptolemaios'u terk eden ilk» Museo Galileo kaydında yok"),
    ("L2-1001", "[BEKLE — okunmadı] Lê Thánh Tông 1460: «on üç idarî bölge» ve «Champa pahasına» okunan kaynakta yok"),
    ("L2-1004", "Ivan Crnojević 1465 (Emecen, Osmanlı Araştırmaları LVII, 2021): «ağabeyi Stefan» akademik kaynakta yok, ikincil kaynaklar Stefan'ı babası gösterir → «ağabeyi» çıkarılır (Fine, Mijušković teyidi beklenir)"),
    ("L2-1007", "Schifanoia 1470: DBI (Armstrong, Del Cossa) yürütmeyi 1466-1469 verir; Cossa'nın 25.03.1470 mektubu Mart-Nisan-Mayıs duvarını «appena portato a termine» der → 1470 yalnız tamamlanma ucu, aralık notu"),
    # L2S 639-650 (S23)
    ("L2-1008", "Cenova üniversitesi 1471: bula yalnız loncalara derece verme yetkisi verir, «üniversite kuruluşu» efsane sayılır; gerçek üniversite 1670 Cizvit koleji → başlık daraltılır"),
    ("L2-1011", "[BEKLE — Siena yılbaşı ölçülmedi] Monte dei Paschi: Treccani 4 Mart 1472, kurumsal ve yerel kaynaklar 27 Şubat; Siena yılı 25 Mart başlar → stil (ab incarnatione) kontrolü"),
    ("L2-1013", "[TEK KURAL — künye] Sunda 1482: Carita Parahyangan saltanat sürelerinin 1579'dan geriye sayımı (yeniden kurgu; Sutaarga ile 8 yıl kayar); Gunawan & Griffiths (Archipel 101, 2021) Pakuan'ın düşüşünü 1579 verir — devletler.js sunda-pajajaran t=1527-06-22 → künye sınıflaması (KISALT / GENİŞLET)"),
    ("L2-1015", "Bikaner 1488: kaynak alanındaki Cambridge History of India IV olayı kapsamaz → Sehgal (Rajasthan District Gazetteer) ve Powlett 1874 (Samvat 1545) ile değişir"),
    ("L2-1016", "Ginkaku-ji 1489: Kannon-den üst yapısının kurulduğu yıl; inşaat 1482 başladı, Yoshimasa 1490 tamamlanmadan öldü (Hikihara, Kyoto-fu Maizō Bunkazai Ronshū 6) → «inşa ettirdi» süre ifadesine çekilir"),
    ("L2-1017", "Cenova 1492 Sefarad sürgünleri: atlas «birkaç gün bekletildi, kalıcı izin yok»; Zappia (Studi Emigrazione 2025) yanaşma ve oturma izni verildiğini, JVL 3 günlük inme izni ve 31 Ocak 1493 geri çekilişi yazar → metin düzeltilir"),
    ("L2-1019", "Ferrara'ya kabul: 20 Kasım 1492 kaçakların pasaportu (Jewish Encyclopedia), resmî dük kararı 1 Şubat 1493 (Modena arşiv kataloğu) → iki gün ayrılır"),
    # L2S 651-662 (S24)
    ("L2-1020", "[BEKLE — kurum sayfası] Crnojević matbaası 1493: Karadağ Millî Kütüphanesi Obod der, atlas «Cetine»; kurucu Ivan / Đurađ ihtilaflı; yıl akademik kaynakta okunmadı"),
    ("L2-1021", "Palazzo dei Diamanti: DBI (Rossetti) inşaatın ilk belgesi 1495 (taş ve kiremit sözleşmesi); 1493 yalnız ikincil; «elmas kesimli mermer» → Verona taşı"),
    ("L2-1025", "Pinturicchio Piccolomini Kitaplığı: sözleşme 29 Haziran 1502 (DBI), freskler sonra (6 Eylül 1502 hâlâ Perugia'da); atlas 1502-01-02 uyuşmaz; «Raphael'in katkısı» tartışmalı"),
    ("L2-1027", "[BEKLE — ipucu] Kalikut #4: «hüküm süren Zamorin suikaste kurban gitti» 1503'e bağlanmış; suikast savaşın sonunda (~1513)"),
    ("L2-1032", "Polesella 1509-12-22 (DBI Quazza): «quasi interamente» → «imhası» yumuşatılır"),
    ("L2-1031", "Krişnadevarâya 1509: en erken yazıt 26 Temmuz 1509, taç giyme ~2 hafta sonra (Sastri 1966) → sınıra bağlıysa 1509-07-26 üst sınır, ic_not"),
    # L2E 1563-1574 (EMRELİC)
    ("L2-2016", "«Tang yarımadadan çıkarıldı» kaynağın değil ajanın yorumu → metin yumuşatılır (EMRELİC)"),
    # L2S 663-674 (S25)
    ("L2-1041", "Renée: 28 Haziran 1528 nikâh günüdür (Enciclopedia Italiana «Sposò il 28 giugno 1528 Ercole II»), Ferrara'ya geliş değil → «gelin gelmesi» → «evlenmesi»"),
    ("L2-1042", "Villa del Principe 1529: DBI (Grendi) «ilk inşaat aşaması bitti»; Perino del Vaga 1528-36 çalıştı → «tamamlanması» ve «freskleriyle donatıldı» 1529'a oturmaz"),
    ("L2-1035", "Ravenna 1512: Treccani «ünlü topçusuyla katıldı / Avrupa'nın en iyisi»; «belirleyici rol» ve toplarla siper yarma anlatısı Treccani'de yok → yumuşatılır"),
    ("L2-1033", "Caterina Fieschi: DBI'da veba bakımı ve «otuz yıl» yok (1473'ten itibaren; 1489 kadınlar bölümü yönetimi) → ifade düzeltilir"),
    ("L2-1044", "Bâbür ölümü 1530-12-26 (TDV, hicrî çift kontrol); Hümâyun adına hutbe ve sikke 1530-12-29 (TDV «Hümâyun») → başlık iki olayı birleştiriyor; Hümâyun cülusu ayrı kayıtsa 12-29"),
    ("L2-1039", "Khanwa 1527-03-16: Bâbür «Cumartesi 13 Cemâziyelâhir 933»; Jülyen 16 Mart 1527 Cumartesi; Beveridge dipnotu 16, ana metin parantezi 17 Mart → iç çelişki ic_not; data/kronoloji_guney_asya.js:361 aynı olay (t 1527-03-16) → yinelenen madde"),
    ("L2-1036", "Orlando furioso: data/kronoloji_italya.js:789 aynı olay t 1516-01-01 — doğru gün 1516-04-22 (DBI Mazzocchi «uscita in data 22 apr. 1516») → yinelenen madde birleşir, öteki kaydın günü düzelir"),
    ("L2-1034", "[BEKLE — kaynak okunamadı] Ordenações Manuelinas 1512: basım yürürlük değildir; 1512'de yalnız Kitap I (17 Aralık 1512, arama özeti), beş kitap 1514; Encyclopedia.com «first printing 1514-1521» → «yürürlüğe girdi» desteksiz"),
    # L2E 1695-1706 (EMRELİC)
    ("L2-2146", "Liu Bin (Güney Han) 941 → 942: ZZTJ c.283 önceki hükümdar Tianfu 7, 4. ay öldü (EMRELİC; tarih düzelt satırıyla birlikte)"),
    # L2E 1707-1718 (EMRELİC)
    ("L2-2165", "Gao Jichong: atlas 962 vekâlet yılı; resmî atama 963, 1. ay → ic_not (EMRELİC)"),
    # L2S 687-698 (S27)
    ("L2-1069", "Tenshō heyeti 1582-02-20: Kotobank yalnız «Tenshō 10, 1. ay»; NAOJ ECO Tenshō 10/1/28 = 1582-02-20 Jülyen → gün kaynakta yok, 1. aya oturur; ic_not_takvim eklenir «Jülyen» [yalnız ay teyitli]"),
    ("L2-1057", "Siena 1554-01-26 (DBI Cosimo I «26-27 genn. 1554» gece saldırısı; teslim 1555-04-17); Siena yılbaşı 25 Mart → stil notu; devletler.js:6835 aynı olay → yinelenen madde"),
    ("L2-1059", "[BEKLE — sıra çelişkisi] Udeypûr: d: «kale düştü, başşehri Udeypûr'a taşıdı» — Çitor 1567-68'de düştü, Udeypûr kuruluşu 1559 (1553 Akshaya Tritiya da öne sürülür); akademik kaynak açılamadı"),
    ("L2-1058", "[BEKLE — tek dayanak belediye müzesi] Strada Nuova: karar 17 Mart 1550, 1558 inşaat başlangıcı (DBI Alessi'de 1558 Cantone dilekçesi); «Avrupa'nın ilk planlı saray caddesi» kaynaksız"),
    ("L2-1061", "Cambiaso 1565: DBI yalnız Palazzo Grimaldi için «all'incirca»; «Ceneviz resim okulunun doğuşu» DBI'da yok; Doria freskleri 1544-47 → ifade düzeltilir"),
    ("L2-1060", "Lan Xang 1560 (Journal of Mekong Societies 17/1, 2021; makale içinde 1566 da geçer); devletler.js 7482 ve 7485 aynı olay → yinelenen madde"),
    ("L2-1067", "[BEKLE — tek dayanak Vikipedi] Tulsîdâs: yer_id «Benâres», şiirin ibaresi ve yaygın anlatım Ayodhya; kaynak alanındaki «Thapar cilt 1» atfı şüpheli"),
    ("L2-1064", "[BEKLE — Asher 1992 açılmadı] Hümâyun Türbesi «1570 tamamlandı»: inşa 1565-1572 (yalnız Vikipedi) → 1572 olası"),
    # L2S 675-686 (S26)
    ("L2-1046", "Çausa 1539-06-26 (TDV «Şîr Şah» 9 Safer 946) gün tutar; yer_id «Patna» yaklaşık — Çausa Buxar yakını → yer düzeltilir"),
    ("L2-1048", "Canano 1541: DBI c.17 «probabilmente 1541 (o 1543)», DSB «1541 or 1543» → «Vesalius'tan iki yıl önce» belirsizlik beyanıyla; ad Canano/Canani"),
    ("L2-1049", "[BEKLE — yıl desteksiz] Şîr Şah yolu 1542: TDV yılsız «onun zamanında açıldı»; «rupiye» TDV'de geçmez"),
    ("L2-1051", "[BEKLE — gün akademik kaynakta yok] Tanegaşima: Kotobank yalnız 1543; 8/25 yalnız turizm sitelerinde — NAOJ ECO Tenbun 12/8/25 = 1543-09-23 Jülyen (atlasla aynı, çeviri doğru; gün dayanağı eksik)"),
    ("L2-1052", "[BEKLE — Asher 1977 açılmadı] Şîr Şah türbesi 1545-05-22: atlas günü ölüm civarı (TDV ölüm 23 Mayıs 1545), tamamlanma değil; tamamlanma 16 Ağustos 1545 ipucu; «ölümünden kısa süre önce inşasına başlanan» sorunlu (İslam Şah döneminde bitti)"),
    ("L2-1055", "Cenova Yahudi sürgünü 1550: Zappia (Studi Emigrazione LXII/237, 2025) yıl teyitli, gün yok; Jewish Encyclopedia 1550'de bazılarına ikamet ve ticaret hakkı → metin iki olayı karıştırıyor olabilir, «izin verilen ailelerin çıkarılması» kontrol"),
    ("L2-1056", "Carignano Bazilikası 1552-03-10 inşaatın başlaması (DBI «Sauli, Bendinelli» c.90, Fara 2017; «Alessi» c.2 yıl) → ic_not"),
    # L2E 1719-1754 (EMRELİC)
    ("L2-2188", "Song shi 天聖元年 = 1023 yalnız yıl; kaynak dipnotunda hata şüphesi → ic_not (EMRELİC)"),
    ("L2-2179", "[BEKLE — çelişki] TDV yardımı Afrigid'e değil Gürgenç Me'mûnî'ye verir → olay öznesi kontrol (EMRELİC)"),
    ("L2-2178", "[BEKLE — yıl] Song shi j.489 992'yi teyit eder, 990'ı değil (EMRELİC)"),
    # L2S 699-710 (S28)
    ("L2-1079", "[BEKLE — O.S. + olay tanımı] Âdi Grânth 1604-08-16: Bhadon sudi 1, 1661 — Jülyen 08-16'da Ay yaşı 1,8 (uyar) → atlas O.S., Gregoryen 1604-08-26 aday (EMRELİC); 16 Ağustos Harmandir Sahib'e yerleştirme, derleme bitişi 2 Ağustos (SREC), tamamlama 29-30 Ağustos / yerleştirme 1 Eylül diyenler de var → başlık «yerleştirildi», olay netleşince gün"),
    ("L2-1081", "Khagemba 1606 (Ahmed, American Journal of Islam and Society, s.126-127) yıl tutar; Müslüman askerler batıdan (Taraf/Sylhet) geldi, prens Sanongba'ya eşlik etti — taht mücadelesi, «doğudan gelen istilâ» ve «Kaçâr üzerinden» değil; cümlede Khagemba adı eksik"),
    ("L2-1077", "Nagazaki 1597-02-05 (Nipponica, Keichō 1/12/19) gün tutar; «çarmıha gerilerek» kaynak cümlede yok → kontrol"),
    ("L2-1071", "[BEKLE — tamamlanma yılı akademik kaynakta yok] Âyîn-i Ekberî 1590: TDV ve Iranica yıl vermez; özetler 1598 (42. cülus yılı) → Blochmann/Jarrett önsözü"),
    # L2S 723-734 (S30)
    ("L2-1104", "Meireki yangını: «üç gün süren» → Nipponica 18-19 Ocak (iki gün; Gregoryen 1657-03-02/03)"),
    ("L2-1096", "Sankin-kōtai 1635: «ailelerini rehin bırakma» 1635 maddesinde okunmadı; data/kronoloji_cok_ince_gd_asya.js:25 aynı olay 1635-01-01 → yinelenen madde, gün 1635-08-03"),
    ("L2-1097", "Shimabara: kronoloji_cok_ince_gd_asya.js:31 1638-01-01 bastırılma — ayrı olay, yinelenme değil; başlangıç 1637-12-11"),
    ("L2-1099", "[BEKLE — gün belediye sayfasında] Dejima 1641: yıl dört akademik sözlükte; 25 Haziran yalnız Nagazaki belediyesi; NDL taşınma emri Nisan/Mayıs 1641 → emir ve fiilî taşınma ayrı gün"),
    ("L2-1103", "Kandy 1656-01-01: bu günde olay yok — ittifak 23 Mayıs 1638 (devletler.js:18143'te var), Colombo 1656, Portekiz'in çıkarılışı Yafna 24 Haziran 1658 (Codrington 1926, tek dayanak değil); Rajasinha Colombo'yu alamadı, 1656'da Hollanda ile koptu → olay yeniden yazılır"),
    ("L2-1094", "[BEKLE — ikincil] Mura Nuove 1632 hiçbir kaynakta yok; ikinciller 1633 / 1639 → aday 1633"),
    ("L2-1105", "Cenova getto 1660 kapatma (Encyclopaedia Judaica); geri kabul / Capitoli 1658 (Zappia, Storia Urbana 167, 2020) → madde iki olguyu birleştiriyor, ayrılır"),
    ("L2-1095", "[BEKLE — kaynak Sassuolo sarayı] Modena sarayı: okunan katalog kartı Sassuolo'ya ait; «Bernini ve Borromini görüş verdi» okunmadı; taraflar:[ferrara] ile yer_id Modena uyumsuz"),
    # L2S 711-722 (S29)
    ("L2-1085", "Japonya Hristiyan yasağı 1614-01-28 = Keichō 18/12/19 (Yamakawa, Kotobank); Sūden'in «Bateren tsuihō-bun» metni 12/23 = 1614-02-01 yayımlandı (Nipponika) — atlas içeriği (tam yasak, sürgün) ikinci metne yakın → iki gün ic_not; hukuki fail Hidetada mührü, taslak Ieyasu emriyle Sūden"),
    ("L2-1086", "Senge Namgyal 1616 (Petech 1977): 1616 sonrası interregnum, Sengge küçük, annesi Gyal Khatun naip → ic_not"),
    ("L2-1087", "Batavia 1619-05-30 Jacatra'nın yıkılışıdır; yeni şehir 1620-21 (NDB); «Batavia» adı 4 Mart 1621 okunmadı; data/kronoloji_hollanda.js:148 aynı olay → yinelenen madde; gün NDB'de yok («im Mai 1619»), Ricklefs okunmadı"),
    ("L2-1088", "Van Dyck Cenova'ya varış 1621-11-20 (Enciclopedia Italiana); «altı yıl Cenova'da yaşadı» → asıl ikamet 1623 sonu-1627, arada seyahatler; «Doria, Lomellini» portreleri okunmadı (Treccani: Brignole Sale, Adorno, Durazzo, Spinola)"),
    ("L2-1089", "Verneuerte Landesordnung 1627-05-10 (Bohemia 22, 1981; Stände ayrıcalık onayı 1627-05-29): kalıtsal taç, dil eşitliği ve «1918'e kadar yürürlük» okunan makalede yok → «1918» şüpheli, kaynaklanmadan çıkarılır"),
    ("L2-1091", "İtimâdüddevle Türbesi 1628 (CHI IV «finished 1628»): «on yıl sonra başlayacak Tâc Mahal» → Tâc 1632 başladı (CHI IV), yani 4 yıl"),
    ("L2-1092", "Dekken kıtlığı 1630 (CHI IV): «Pieter van den Broecke» adı kaynakta okunmadı → kaynaklanır ya da çıkarılır"),
    ("L2-1090", "Po Rome 1627 (Noseworthy 2013, Asian Highlands Perspectives 28): «Champa'nın son güçlü dönemi» yorumdur, kaynakta yok → yumuşatılır"),
    # L2S 759-770 (S33)
    ("L2-1139", "Ferruhsiyer: indirme/körleştirme Şubat 1719 (Ikram 1964), boğdurma ~2 ay sonra → «indirip öldürttü» tek güne sığmaz; madde indirmeye daraltılır, ölüm ayrı madde"),
    ("L2-1141", "Yoshimune 1720: kaynak «漢訳洋書» (Çinceye çevrilmiş Batı kitapları) der → «Hollandaca eserler» düzeltilir"),
    ("L2-1138", "Wiçita 1719 (TSHA): La Harpe onları «lower Canadian»da buldu; «Arkansas boyunca», «ticaret istasyonları kurdu» ve Du Tisné okunmadı → metin daraltılır"),
    ("L2-1134", "Gürcü matbaası 1709: Gürcü Ansiklopedisi 1705 Katolikos Domenti'nin daha erken matbaasını anar → «ilk» ifadesi dikkatli"),
    ("L2-1131", "[BEKLE — kaynaksız] Cenova tarafsızlığı 1704: «limanını her iki tarafa kapattı» ve «1746 işgali» kaynaksız"),
    ("L2-1142", "Jantar Mantar Delhi 1724: kronoloji_guney_asya.js:436 ile kronoloji_hindistan.js:720 aynı olay → yinelenen madde, biri silinir"),
    # L2S 735-758 (S31/S32)
    ("L2-1107", "Magnasco 1667-02-04 (DBI «Nacque a Genova il 4 febbr. 1667») gün tutar; kaynak alanındaki «bulunamadı» → DBI"),
    ("L2-1109", "[BEKLE — TDV çelişkisi] Moritanya Şürbûbe 1673-1677: TDV Nâsırüddin 1674'te öldürüldü; LoC savaşı 1644-74 → atlasın sonu TDV ile çelişir"),
    ("L2-1112", "[BEKLE — gün dayanaksız] Pondişeri 1674-07-04: Metcalf yalnız «by the 1680s»; 1673 arsa edinimi / 1674 Martin valiliği ayrışır"),
    ("L2-1130", "Luzzara 1702-08-15 (Enciclopedia Italiana) gün tutar; savaş Vendôme ile Prens Eugène arasında, Mantova bağlamında Po kıyısındaki Luzzara'da → «Modena topraklarında» ve «dük Bologna'ya sığındı» Treccani'de yok; yer_id Modena → Luzzara"),
    ("L2-1124", "Velî Deccanî: Delhi ziyareti 1700, dîvân Delhi'ye 1720'de ulaştı (Faruqi) → başlık «Delhi'yi ziyaret etti (1700 civarı)»"),
    ("L2-1121", "[BEKLE — 1696/1697] Danilo I: Columbia ve Britannica seçilişi 1696, hanedanı 1697'den başlatır; 1697 akademik kaynakta okunmadı"),
    ("L2-1125", "Ovalar Apaçileri: Handbook of Texas baskı yapanlar Komançi, Wichita, Tejas — atlas Kiowa ve Sioux; göç yönü uyuşmuyor → metin düzeltilir"),
    ("L2-1127", "[BEKLE — tek dayanak Britannica] Fipa ~1700: odak_yer Mbeya, Nkansi ve Lyangalile Rukwa'da (Mbeya Nyakyusa bölgesi) → odak_yer düzeltilir"),
    ("L2-1129", "[BEKLE — kaynaksız] Kalhora: «Bâbürlü merkezinin zayıflaması» ile «Mugal fermanı» anlatısı çelişir; TDV'de madde yok"),
    # L2E 1755-1814 (EMRELİC)
    ("L2-2245", "Yoritomo Kamakura'ya girdi (1180-11-04): L2-2246 ile aynı olay (KRONOLOJI_COK_DOGU_500_1281[202] ve [254]) → yinelenen madde birleşir"),
    ("L2-2206", "[BEKLE — yıl] Man: Chronicle of Mann 1066 der (EMRELİC)"),
    ("L2-2212", "[BEKLE — yıl] Rupeniler: kaynak 1198'i gösterir, 1092'yi değil (EMRELİC)"),
    # L2E 1815-1850 (EMRELİC)
    ("L2-2268", "[BEKLE — olay kaynakta yok] Eyyûbî Yemen 1226 Zimâr: TDV'de yok; DergiPark'taki yenilgi 595/1198, başka olay (EMRELİC)"),
    ("L2-2286", "[BEKLE — çelişki] Durbe 1260: 13 Temmuz / 13 Haziran kaynak çelişkisi (EMRELİC)"),
    ("L2-2285", "[BEKLE — ad çelişkisi] Yaroslavl: Anastasia / Maria (EMRELİC)"),
    ("L2-2291", "Karintiya III. Ulrich: NDB 4.12.1268, ADB 1.12.1268 → atlas 12-04 NDB'ye uyar, ADB günü ic_not'a (EMRELİC)"),
    # L2S 819-830 (S38)
    ("L2-1210", "Zorawar Singh / Ladakh: «Namgyal bağımsızlığına son verdi» fazla keskin — fetih 1835 baharında, 1836 isyan, Gyalpo 1838'de iade (Petech okunmadı)"),
    ("L2-1201", "[BEKLE — akademik sayfa okunmadı] Minh Mạng tahta çıkışı 1820-01-01 → 1820-02-14 adayı (Gia Long 3 Şubat 1820 öldü; yalnız Vikipedi)"),
    ("L2-1206", "[BEKLE — gün yok] Choctaw / Dancing Rabbit Creek: Encyclopedia of Alabama imza 27 Eylül 1830, 15 Eylül günü yok (UTK Papers of Andrew Jackson ipucu)"),
    # L2S 771-806 (S34/S36)
    ("L2-1183", "[BEKLE — Colvin/Boulègue okunmadı] Abdul Kader'in Cayor seferi 1786: Boulègue 1999 Bunxoy «c. 1796», Colvin JAH 1974 s.599-601 1796; 1786 Trarza emiri Ali Kouri'nin Dagana yakınında yenilgisi → madde 1796'ya ya da metin düzeltilir"),
    ("L2-1175", "Chickamauga: yerleşimler 1776-77 kışında kuruldu; «ayrılıp grubu oluşturdu» savaş başlangıcıyla aynı an değil (Tennessee Encyclopedia: 1776 yazı Island Flats saldırısı)"),
    ("L2-1184", "[BEKLE — rakamlar kaynaksız] Cenova 1786 nüfus/gelir dökümü: Bitossi 1995 ilk sistematik nüfus tahmini 1797"),
    ("L2-1180", "Tenmei kıtlığı 1782: Sekai Daihyakka şiddetli kıtlığı 1783 der, öteki üç Kotobank sözlüğü 1782 → yıl tutar, 1783 ic_not"),
    ("L2-1182", "[BEKLE — tek gün yok] Almanca idare dili 1784: Mayıs'ta ülke ülke ayrı emirler (Bohemya 11 Mayıs, Macaristan 6/18 Mayıs, Viyana 12 Temmuz — arama özeti)"),
    ("L2-1154", "Karga 1743: DCB «La Vérendrye, Louis-Joseph» seferi Wyoming / Güney Dakota'da gösterir (Pierre 1743-03-19, levha 03-30); Crow, Bighorn ve Montana anılmaz → «Hardin, Montana yakınlarında Karga ile ilk temas» kaynaksız; tür «antlasma» uygunsuz (temas)"),
    ("L2-1144", "Natchez 1729: 64 Parishes yalnız 1729; ölü 144+35+56 = 235 → «yaklaşık 250» düzeltilir; 28/29 Kasım yalnız özet düzeyinde"),
    ("L2-1149", "[BEKLE — olay dayanaksız] Muratori 1737-01-02: DBI'da böyle bir 1737 olayı yok; Muratori Ağustos 1700'de Modena kütüphaneci-arşivcisi oldu → madde ya silinir ya yeniden tarihlenir"),
    ("L2-1150", "[BEKLE — O.S./N.S.] Marata Delhi akını 1737-03-29: kaynaklar 03-28 (Talkatora); Sarkar ise O.S. → Gregoryen 04-08; kaynak adı ve takvimi netleşmeli (EMRELİC eski takvim 2. tur)"),
    ("L2-1153", "[BEKLE — kaynak çelişkisi] Kolaçel 1741-08-10 → 1741-08-07 adayı: Hollanda kayıtları 7 Ağustos Gregoryen (birincil; Kunju 1975, Koshy 1989), Panikkar 10 Ağustos, Menon 31 Temmuz (ME Adi 916) → ikinci akademik kaynak gerek (EMRELİC eski takvim 2. tur)"),
    ("L2-1147", "[BEKLE — çelişki] Zîc-i Muhammed Şâhî 1732: özetler 1728 der; Cambridge metni okunamadı"),
    # L2S 783-794 (S35)
    ("L2-1160", "Paoli anayasası: Dieta generale di Corte 16-18 Kasım 1755 (DBI) — atlas 18 Kasım aralığın son günü → ic_not; yer_id «Bastia (Korsika)» yanlış → Corte; «Cenova fiilen tamamen kaybetti» okunmadı"),
    ("L2-1168", "Bengal kıtlığı 1770: «nüfusun yaklaşık üçte biri» → Metcalf «up to a quarter» (en çok dörtte bir)"),
    ("L2-1165", "Buksar 1764-10-23 (Metcalf + Sarkar, çift teyit) KALIR; Britannica 22 Ekim ipucu → ic_not"),
    ("L2-1170", "[BEKLE — haber kaynağı] Pontianak 1771-10-23: hicrî 14 Receb 1185 ile uyumlu; akademik teyit Tarikhuna 4/1 (2024) açılmadı"),
    # L2S 807-818 (S37)
    ("L2-1189", "Fallen Timbers 1794-08-20 (NPS, Gale) gün tutar; aynı olay 3 kayıtta: devletler.js:4580, devletler.js:4567, kronoloji_cok_kuzey_amerika_k2.js:29 → yinelenen madde"),
    ("L2-1192", "II. Herakli'nin ölümü 1798-01-11 (Georgian Encyclopedia) gün tutar; ölüm yeri Telavi → yer_id «Tiflis» düzeltilir"),
    ("L2-1199", "Horseshoe Bend 1814-03-27 (Encyclopedia of Alabama): savaş Tohopeka'da (Tallapoosa, Yukarı Creek) → odak_yer Coweta (Aşağı Kasabalar) yanlış"),
    ("L2-1190", "Karadağ Zakonik 1798: yıl tutar; gün çelişkili — CEEOL özeti 8 Ekim, arama özetleri 18/29 Ekim (O.S./N.S., Lučindan) → yıl hassasiyeti kalır, ic_not"),
    ("L2-1193", "[BEKLE — yıl desteksiz] Solimana 1800: Encyclopaedia Africana (Fyle) yalnız «18. yüzyılda kuruldu»; atlasın kendi f=1720 maddesiyle de çelişir"),
    ("L2-1195", "[BEKLE — olay kaynakta yok] Futa Toro 1807-04-04 «Jagodo suikastı»: okunan kaynaklarda yok; ikinciller 26 Nisan 1806, Gouriki'de Bundu almamisi tarafından → Robinson-Curtin-Johnson 1972 (Persée) s.578 ve Ware 2014 s.142 okunmalı"),
    ("L2-1196", "[BEKLE — Malabar takvimi] Kundara Bildirisi 1809-01-11: Quilon Gazetteer «1st Makaram 984 (16th January, 1809)»; Trivandrum Gazetteer ve Nagam Aiya yalnız «January 1809»; 1 Makaram 984 kaba hesapla ~11-12 Ocak (Makara saṅkrānti) → Kerala takvim tablosuyla çevrilmeden karar yok"),
    ("L2-1197", "[BEKLE — olay kaynakta yok] Betsileo 1810 «Radama I dört krallığı fethetti»: Encyclopedia of World Cultures Merina fethini ~1830 (künye t=1830 ile uyumlu); TDV 1810 yalnız Radama'nın tahta çıkışı; Larousse ilhakı Andrianampoinimerina'ya verir → beyanlı yaklaşık ya da kaldırılır"),
    ("L2-1187", "[BEKLE — tek dayanak Britannica YZ özeti] Betsimisaraka 1791: «üçüncü hükümdarın ölümünden sonra çöktü»; atlasın 1803 anarşi maddesi ve künye t=1817 ile iç çelişki → Kent 1970 / Cambridge History of Africa c.5"),
    # L2S 843-854 (S40)
    ("L2-1240", "Taisei Hōkan 1867-11-09: «iade etti» → «iade teklif etti» (kabul 1867-11-10); kronoloji_cok_ince_gd_asya.js:51 aynı olay olabilir"),
    ("L2-1234", "Sakuradamon (Ii Naosuke) 1860-03-24: Kotobank «Mito ve Satsuma rōninleri» → fail ifadesi; etiket_yama.js:1499 ve paket_11.js:1427'de aynı olay olabilir"),
    ("L2-1229", "Gulâb Singh ölümü 1857-06-30 (Encyclopaedia of Sikhism) gün tutar; ölüm yeri Cammu → odak_yer Srinagar düzeltilir"),
    ("L2-1232", "Francesco V'in kaçışı 1859-06-11 (DBI) gün tutar; «619 yıllık», «Avusturya ordusu geri çekilince» ve halkoylaması DBI'da okunmadı"),
    ("L2-1238", "[BEKLE — kaynak açılmadı] Yunan marşı 1865-01-01 → 1865-08-04 kraliyet kararnamesi adayı (yalnız arama özeti; presidency.gr 403)"),
    ("L2-1233", "[BEKLE — çelişki] Burundi Mwezi Gisabo 1860: ikinciller tahta çıkışı 1850/1852, 1860 naibin ölümü / tam iktidar → «tahta çıktı» çerçevesi yanlış olabilir; Newbury 2001 açılamadı"),
    ("L2-1241", "[BEKLE — tek dayanak Vikipedi] Racputana kıtlığı: «iki yıl üst üste musonun gelmemesi» şüpheli — 1868 musonu geç/zayıf, 1869 bahar hasadı yok; kıtlık adı «1869»"),
    ("L2-1236", "Mescalero 1863 (NPS Fort Union) yıl tutar; «ilk» ifadesi okunan sayfada yok"),
    ("L2-1237", "Navaho 1864 (NPS Fort Union) yıl tutar; «10.000+» ve ölü sayısı okunan sayfada yok"),
    # L2S 855-878 (S41/S42)
    ("L2-1246", "Iwakura heyeti: «ABD ve on iki Avrupa ülkesi» → toplam 12 ülke (ABD + 11 Avrupa); «iki yıllık» → ~1 yıl 10 ay (Sekai Daihyakka)"),
    ("L2-1248", "Demiryolu 1872: Shimbashi-Yokohama resmî açılış 14 Ekim 1872 (Nipponica); Mayıs 1872 Shinagawa-Yokohama geçici hattı → ic_not"),
    ("L2-1243", "Charles Brooke 1868-08-03 ilan günü (Baring-Gould & Bampfylde 1909 s.307; tek, eski monografi); James Brooke 11 Haziran 1868 öldü → ic_not"),
    ("L2-1245", "[BEKLE — tek dayanak Britannica] Mirambo 1871: Britannica «1870'ler»; «ölümüne kadar sürdü» çelişir (1880 Arapların barış isteği, Zanzibar desteği değişir)"),
    ("L2-1254", "[BEKLE — kaynaksız] Sipopa: ölüm biçimi çelişkili (öldürüldü / Mamili isyanıyla indirildi); «muhafız suikastı» okunan hiçbir kaynakta yok"),
    ("L2-1257", "Ponka 1877 (Schurz 1880 resmî mektubu; UNL): «üçte bir kayıp» ve «500 mil» kaynakta yok — UNL «ilk iki yılda beşte birinden fazla (158/730)», Schurz «about 700» → kayıp oranı düzeltilir, mil çıkarılır"),
    ("L2-1272", "Vollayta 1890 (DAB, Haberland «ruled 1890-94»): «altı kez yendi» okunmadı; son yenilgi Kasım 1894, «1896» desteklenmez → 1894"),
    ("L2-1258", "Satsuma 1877-02-15: Saigō ordusunun Kagoshima'dan hareketi (Nihon Daihyakka Zensho, Sekai Daihyakka); savaşın başlangıcı 29 Ocak (ja.Wikipedia ipucu) → «Saigō başlattı» ile 15 Şubat kabul, ic_not"),
    ("L2-1268", "Datsu-A Ron 1885-03-16 (Kotobank): imzasız Jiji Shinpō başyazısı, Fukuzawa'ya atfedilir → «Fukuzawa yazdı» kesinliği yumuşatılır"),
    # L2S 831-842 (S39)
    ("L2-1225", "Perry Uraga 1853-07-08 (Perry Narrative) gün tutar; «dört buharlı savaş gemisi» yanlış → 2 buharlı (Susquehanna, Mississippi) + 2 yelkenli sloop (Saratoga, Plymouth)"),
    ("L2-1222", "[BEKLE — ay kaynaksız] Njegoš Dağlar Tacı 1847 (Viyana Mehitarist matbaası) yıl tutar; «Şubat» hiçbir kaynakta yok → t ve metinden ay çıkarılır"),
    ("L2-1221", "Ndaté Yalla 1846-10-01 (Fatou Sarr 2009 «installée le 1er octobre 1846») gün tutar; «taç giydi» ve «Nder» kaynakta yok → «göreve getirildi»"),
    ("L2-1226", "Muluki Ain 1854 (Gaenszle, EBHR 63, 2024 «Promulgated in 1854»): «yürürlüğe girdi» → «ilan edildi»; Höfer'in 6 Ocak 1854'ü yalnız arama özetinde"),
    ("L2-1220", "Gulâb Singh 1845 (Encyclopaedia of Sikhism): «gizli yardım» — metin istihbarat/gizli yardım diye daraltılır; Amritsar 16 Mart 1846 ayrı olay"),
    ("L2-1223", "[BEKLE — kaynak açılmadı] Zwangendaba 1848: arama özetleri 1848 / c.1845 çelişir; «yedi krallık» sayısı kaynaklarda değişir"),
    # L2S 903-914 (S45)
    ("L2-1303", "Hollanda Kontu I. Jan'ın ölümü 1299-11-10 Haarlem (Huygens ING «Register Hollandse grafelijkheid», Itineraria Jan II: «10: overlijden graaf Jan I te Haarlem»); hukukî devir ölümden sonra, Jan van Avesnes vesayeti Ağustos-Ekim 1299 → ic_not"),
    ("L2-1302", "Turaida 1298-06-01 (Visuotinė lietuvių enciklopedija «Vytenis»; tek akademik kaynak) → ic_not"),
    ("L2-1308", "[BEKLE — 1317 desteksiz] Bursa ablukası: TDV «Bursa» kuşatmayı Osman Bey'in 1308'de başlattığını verir, ayrı abluka yılı ve 1317 yok; fetih 6 Nisan 1326 atlasla uyumlu → ikinci kaynak"),
    ("L2-1309", "[BEKLE — yıl çelişkisi] Bortenevo 22 Aralık: gün ve ay tutar; Vikipedi ve Rus özetleri 1317, SPbU «Medieval Russian Princesses» (Konchaka) 1318 → Martin s.175 / Fennell"),
    ("L2-1305", "[BEKLE — kaynaksız] Foix 1302: «Foix ve Béarn aynı elde birleşti» sorunlu — birleşme 1252 Roger-Bernard III ile Marguerite de Béarn evliliği; 1302 Gaston I'e geçiş süreklilik; 3 Mart 1302 yalnız Vikipedi"),
    ("L2-1301", "[BEKLE — olay karışıklığı] Galata 1296: Galata mı Pera mı yakıldı belirsiz; «Venedik-Ceneviz savaşı» Bizans-Venedik savaşıyla karışmış olabilir"),
    ("L2-1307", "[BEKLE — ad çelişkisi] Beloozero 1314: Roman'ın baba adı Glebovich / Mikhailovich çelişkili (yalnız Vikipedi)"),
    ("L2-1304", "Taisei / Eiji (Chūzan seikan 1650, ja.wikisource) yıl tutar; Taisei'nin ölümü Zhida 1/12/8 muhtemelen Ocak 1309 → NAOJ / Academia Sinica çevirisiyle ic_not; modern teyit (Smits, Kerr) açılmadı"),
    # L2S 891-902 (S44)
    ("L2-1285", "Mayıs Darbesi 1903-06-11: Tokovi istorije «May 28-29 1903» Jülyen + 13 = 11 Haziran Gregoryen → atlas doğru, ic_not «kaynak O.S. 29 Mayıs»"),
    ("L2-1290", "Japonya'nın savaşa girişi 1914-08-23: TDV «japonya» günü birebir verir → kaynak alanındaki «TDV'de yok» yanlış, TDV ile değişir"),
    ("L2-1294", "Aleksandros'un ölümü 1920-10-25 Gregoryen (Dimitriadis & Karamanou, Bull Acad Natl Med 2020): Jülyen 12 Ekim → ic_not; kaynak alanındaki History.com akademik değil → değişir; «Venizelos seçimleri kaybetti» okunmadı"),
    ("L2-1295", "Kantō Depremi 1923-09-01 11:58 M7,9 (Nipponica, Heibonsha, Yamakawa): «100.000'i aşkın ölü» akademik kaynakta okunmadı, TDV 60.000 → rakam kaynaklanır ya da aralık verilir"),
    ("L2-1296", "Dauphiné 1282 (HLS, Wildermann) yıl tutar; HLS Anna'yı adıyla anmaz → ad çıkarım, işaretlenir"),
    ("L2-1293", "[BEKLE — gün yok] Pirinç Ayaklanmaları 1918-08-03: Heibonsha başlangıç 23 Temmuz 1918 (Uozu), Ağustos'ta gazeteyle yayıldı; 3 Ağustos hiçbir akademik kaynakta yok → başlık 23 Temmuz'a ya da Ağustos günü için monografi"),
    ("L2-1297", "[BEKLE — yıl] Beloozero Mikhail 1283: PSRL X kronik alıntısı dönüşü 6795 (1285) altında; Vikipedi 1286 / 1283 kendi içinde çelişir; 1283 hiçbir yerde okunmadı"),
    ("L2-1287", "Karadağ anayasası 1905-12-19: Nikoljdan 6 Aralık O.S. = 19 Aralık N.S. (atlasla uyumlu); gün cümlesi akademik kaynakta okunmadı (Istorijski zapisi 2010/4 özet); UCG 31 Ekim proklamasyonu → ic_not"),
    ("L2-1288", "[BEKLE — ders slaytı] Nikola'nın kral ilanı 1910-08-28: «15 avgust 1910» O.S. = 28 Ağustos N.S. (atlasla uyumlu; UCG ders slaytı, hakemli değil)"),
    # L2S 915-926 (S46)
    ("L2-1315", "[BEKLE — kaynaksız] Yaroslavl 1332: «Kalita'nın Vasili'yi evliliğe zorlaması» akademik kaynakta yok; SPbU «Medieval Russian Princesses» evlilik 1330'dan beri / 1339 öncesi, 1328 yanlış; Yaroslavl'ın yakılması yalnız Vikipedi → yeniden yazılır ya da kaldırılır"),
    ("L2-1313", "[BEKLE] Tver ayaklanması 1327: «50.000 Tatar» akademik kaynakta okunmadı; ayaklanma 15 Ağustos 1327 ipucu; L2-1311 ile aynı Tver zinciri"),
    ("L2-1314", "[BEKLE — Petech okunmadı] Kunga Gyaltsen: «1331'de Dadu'ya ulaştı» doğrulanamadı — 1331 Karmapa'nın gelişi, Toghon Temür onayı 19 Temmuz 1333 (Vikipedi, Petech 1990 s.85-6 atfı)"),
    ("L2-1312", "Silezya Piast 1327: ADB Breslau ve Oppeln edinimini 1327 Haziran öncesine koyar; «çok sayıda dükalık» abartılı — Liegnitz/Brieg/Steinau lehni 1328 sonrası → metin daraltılır"),
    ("L2-1318", "Kör Johann 1346-08-26 Crécy (NDB «† 26.8.1346 bei Crécy») gün tutar"),
    ("L2-1320", "[BEKLE — Sumption okunmadı] Calais 1347-08-03: yalnız Vikipedi (Sumption s.580-583, Wagner s.73-74 atfı); Britannica özeti 1 Ağustos işareti / 4 Ağustos teslim → İngiliz kaynağı O.S. mi? 1582 öncesi, çevrilmez; teslim günü netleşmeli"),
    ("L2-1322", "[BEKLE — künye çakışması] Pskov 1349: Rus kaynakları Andrey'in Pskov kniazlığını 1341-1348 verir; künye f=1348 ile çakışma kontrolü gerekir"),
    # L2S 879-890 (S43)
    ("L2-1274", "Ertuğrul 1890-09-16 (TDV «japonya») gün tutar; «587'den fazla» → TDV 581"),
    ("L2-1276", "Manipur 1891-03-24: metin Tikendrajit'in Surçandra'yı indirmesini (Eylül 1890 darbesi) anlatır; 24 Mart Kangla çatışması ve Quinton heyetinin öldürülmesidir (Assam Administration Report) → başlık ve metin değişir"),
    ("L2-1279", "Lugalo 1891-08-17 (Masele 2021, Tanzania Zamani 13/1) gün tutar; odak_yer Kalenga → olay Lugalo'da (Iringa'nın 22 km doğusu)"),
    ("L2-1280", "Yamada 1892 (Esenbel, BSOAS 59/2, 1996) yıl tutar; bir DergiPark makalesi 1893 der → ic_not"),
    ("L2-1275", "Çeitharol Kumbaba: kaynak alanındaki «Routledge» yalnız Cilt I; 1886-1891'i kapsayan Cilt III Foundation Books 2013 → künye düzeltilir"),
    # İkinci geçiş IG5 / IG6
    ("L2-713", "[BEKLE — 1084/1088 çelişkisi] Đại Việt-Song sınırı: Toàn thư (zh.wikisource) sınırın 1084'ün 6. ayında belirlendiğini kaydeder «定邊界。宋以六縣三洞還我», 1088 girişinde sınır kaydı yok → Song shi ve Taylor (CUP 2013) okunmadan karar yok"),
    ("L2-747", "Brabant: ilk geçişteki NDB bağlantısı (sfz21801) I. Henry'nin değil babası Gottfried'in maddesi → kaynak alanı düzeltilir; Henry I'in Aşağı Lotaringya unvanı okunmadı"),
    ("L2-737", "Kuzey Fujiwara tarafsızlığı: 日本人名大辞典 «源平争乱では中立をまもる», Britannica Japan 1181 Mutsu valisi atandı, Yoritomo'nun arkasına saldırmadı; 1183'te Yoshinaka'yı kışkırttı → «tarafsızlık» basitleştirme, ic_not"),
    ("L2-753", "Sit muharebesi 1238-03-04 (Rudakov, Vestnik MGPU 2024 no.4; Polovtsov RBS t.18) gün tutar; Vsevolod Konstantinoviç'in ölümü, Yaroslavl yağması ve Vasili'nin 1249'a dek knezliği okunmadı"),
    ("L2-760", "[BEKLE — yıl zayıf] Atina Dukalığı 1267: Miller, Latins in the Levant (1908) ve Gregorovius — Viterbo Atina'dan söz etmez, Dük John'un Charles'ı tanıdığına delil yok, tanıma Dük William'a bağlanır (~1280) → 1267 iki kaynakla zayıf"),
    # İkinci geçiş IG4
    ("L2-660", "Gaeta Docibilis II: «dux» unvanı 930'dan (Treccani DBI «Docibile», c.40: «a partire dal 930 … dux et ypatos; dal 939 … soltanto dux»); DBI unvanın Napoli karşısında siyasi bağımsızlık işareti sayılmaması gerektiğini söyler → «bağımsızlığını gösterir» düzeltilir"),
    ("L2-632", "[KÜNYE] Zhao 907: Wang Rong 907'de 趙王 olarak Liang takvimini kullanan vasal; bağımsız «kuruldu» 907 değil, Tang takvimine dönüş 天祐七年 = 910 (JWDS j.54, ZZTJ j.266) → künye ucu sınıflaması"),
    ("L2-636", "Shu-Qi savaşı 911 (ZZTJ j.268) yıl tutar; kaynakta savaşı Shu başlatır, atlas «Qi saldırdı» der → sıra düzeltilir"),
    ("L2-694", "[BEKLE — tarih kaynaksız] Dali 982: Song shi j.488 tam metin — ilk Dali elçisi 熙寧九年 (1076), 願為臣妾 başvurusu 政和五年 (1115); 982 kaydı yok, yalnız Vikipedi infobox → madde gözden geçirilir"),
    ("L2-705", "[BEKLE — kayıt yok] Dublin Sigtrygg 1036: Annals of Ulster, Chronicon Scotorum, Inisfallen (CELT) tam metin — çekilme kaydı yok, AU 1035'te Sitriuc Áth Cliath'ta faal; DIB okunamadı"),
    # İkinci geçiş IG8 / IG10
    ("L2-838", "Brunei anayasası 1959-09-29: metin «Commencement: 29th September 1959», testimonium 27 Eylül 1959 → «ilan edildi» yerine «yürürlüğe girdi (imza 27 Eylül)» denmeli"),
    ("L2-839", "[BEKLE — yer] Mali Federasyonu 1959-12-13 gün uyumlu, Universalis yeri Dakar veriyor (atlas Bamako) → tek kaynak, ikinci kaynak bekliyor"),
    ("L2-896", "[BEKLE — metin] Grenada Coard «başbakanlığı» 1983-10-14: okunan derleme Bishop'ı 19 Ekim'e dek başbakan anar; Coard'ın başbakanlığı desteklenmedi → Payne-Sutton-Thorndike (1984) okunmadan karar yok"),
    ("L2-902", "[BEKLE — ay çelişkisi] Namibya TGNU feshi 1989-02-28: ABD Dışişleri 1989 insan hakları raporu «Mart 1989» der; BM S/20788 okunamadı (403)"),
    ("L2-891", "Kampuçya 1981-06-27: Pen Sovan başbakan atanması (Larousse Année 1981) gün tutar; Meclis 24-27 Haziran, anayasanın yürürlük günü (25 Haziran?) okunmadı → madde metni hangi olayı tarihliyor netleşmeli"),
    # İkinci geçiş IG9
    ("L2-846", "PNG seçimi 1964-02-15 (Bettison-Hughes-van der Veur, ANU Press 1965): oy verme 15 Şubat başladı, bitiş bölgeye göre 2-18 Mart → maddedeki «15 Mart» bitişi kaynakta yok, düzeltilmeli"),
    ("L2-852", "Lüksemburg Jean 1964-11-12: dayanak gouvernement.lu resmî biyografisi (devlet yayını, akademik değil); CVCE tarayıcıda okunacak"),
    ("L2-876", "[BEKLE — gün] Laos Kaysone başbakanlığı: ipucu 2 Aralık 1975 (kongre), atlas 8 Aralık yalnız popüler siteye dayanıyor"),
    ("L2-878", "[BEKLE — gün] Bougainville: ABG Memoir imza günü 1976-08-07, atlas 08-09; ANU Press yalnız yıl veriyor"),
    ("L2-886", "[BEKLE — metin] Kongo 1979: ipucu 5 Şubat Yhombi-Opango düşürüldü, 8 Şubat Sassou geçici başkan → madde iki olayı ayırmalı"),
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
    haric = [h for h in os.environ.get("KUYRUK_HARIC", "").split(",") if h]  # koşan ajanların yarım dosyaları
    for yol in sorted(glob.glob(os.path.join(D, "oneri_*_dogrulama.tsv"))):
        parti = os.path.basename(yol).replace("oneri_", "").replace("_dogrulama.tsv", "")
        if parti in haric:
            continue
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
                    if tk and no not in TAKVIM_TEMIZ and not no.startswith("TK-"):  # TK-*: takvim turunun kendisi
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
