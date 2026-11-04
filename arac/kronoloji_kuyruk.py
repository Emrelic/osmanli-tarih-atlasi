"""KRONOLOJI-1104 — doğrulama dosyalarından KASA PAZAR (veri sahibi) iş kuyruğu (SALT OKUR).

Girdi: denetim/KRONOLOJI-1104/oneri_*_dogrulama.tsv (+ tarayici_sonuc.tsv notları elle SONUC-61'de).
Çıktı: denetim/KRONOLOJI-1104/KUYRUK-KASA-PAZAR.tsv — yalnız uygulanabilir satırlar:
  TARIH_DUZELT  → tarih değişikliği önerisi (kaynak + okunan cümle)
  DOGRULANDI    → kaynak alanı yenilenir (güvensiz/bulunamadı damgası kalkar)
Öteki sonuçlar (CEKILEMEDI/BULUNAMADI/…) kuyruğa girmez; sayısı özetlenir.

    py arac/kronoloji_kuyruk.py
"""
import collections, csv, glob, os, sys
sys.stdout.reconfigure(encoding="utf-8", errors="replace")
KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
D = os.path.join(KOK, "denetim", "KRONOLOJI-1104")
CIKTI = os.path.join(D, "KUYRUK-KASA-PAZAR.tsv")
# Koordinatör kararıyla bekletilenler (EMRELİC 1 KASIM, 4 Kasım 2026).
BEKLET = {
    "L2-318": "Santo Domingo: kural teslim (kapitülasyon) günü; 07-07 teslim mi fiilî devir mi belirsiz → Diario de la Reconquista okununca karar; 07-09 fiilî devir ise ic_not",
    # 351-375: DOGRULANDI ama dayanak tek ve ansiklopedi dışı web (kişisel kronoloji, belediye, dernek)
    "L2-357": "tek, ansiklopedi dışı (pdavis.nl/Clowes); 3 Kasım yalnız getirme özetinde",
    "L2-359": "tek, SA Military History Journal (dernek dergisi); «Cape Kolonisi'ne bağlı» doğrulanmadı",
    "L2-360": "tek, SA Military History Journal; Volksraad'ın şartları kabulü kaynakta yok",
    "L2-365": "tek, Wiesbaden belediye sitesi",
    "L2-370": "tek, K. Dierks kişisel Namibya kronolojisi",
    "L2-371": "tek, K. Dierks kişisel Namibya kronolojisi",
    "L2-384":"Payut 1862-04-06: Chalfant, Story of Inyo (1933) akademik olmayan yerel tarih → en çok KISMEN, tek başına düzeltme dayanağı değil",
    # L2E 323-347 Song shi / Goryeosa ganzhi günleri — Academia Sinica teyidi gelene kadar (EMRELİC)
    "L2-696": "[çeviri doğrulanmadı] Song shi ganzhi günü — Academia Sinica teyidi bekliyor",
    "L2-689": "[çeviri doğrulanmadı] Song shi ganzhi günü — Academia Sinica teyidi bekliyor",
    "L2-688": "[çeviri doğrulanmadı] Song shi ganzhi günü — Academia Sinica teyidi bekliyor",
    "L2-684": "[çeviri doğrulanmadı] Song shi ganzhi günü — Academia Sinica teyidi bekliyor",
    "L2-683": "[çeviri doğrulanmadı] Song shi ganzhi günü — Academia Sinica teyidi bekliyor",
    "L2-691": "[çeviri doğrulanmadı] Song shi ganzhi günü — Academia Sinica teyidi bekliyor",
    "L2-692": "[çeviri doğrulanmadı] Song shi ganzhi günü — Academia Sinica teyidi bekliyor",
    "L2-700": "[çeviri doğrulanmadı] Goryeosa (ay) — Academia Sinica teyidi bekliyor",
    "L2-732": "Gaeta: Treccani «nel 1136», atlas 1140 → ikinci kaynak gelene kadar BEKLE (EMRELİC)",
    "L2-372": "İngiliz Burma: aday 1853-01-20 (NAM, ilan); 1852-12-20 yalnız özette → Aitchison'da İLHAK BİLDİRİSİ tarihi ile Rangoon İLAN günü ayrı bulunacak; tek kurala göre s: değişimi bildiri tarihi",
    "L2-341":"Man Adası 1828: dayanak yalnız EB1911 (eski başvuru, en çok KISMEN) → tek başına düzeltme dayanağı değil; akademik kaynak aranacak",
    "L2-144":"Chūzan seikan (17. yy resmî derleme) tek başına KISMEN; modern akademik teyit (CHJ / Kerr, Okinawa) gelene kadar atlas günü kalır",
}
# Doğu Asya ganzhi günleri — Academia Sinica (sinocal luso, Jülyen) ile EMRELİC 1 KASIM doğruladı, 4 Kasım 2026.
# Sinocal'de Japon yıl adı yok: aynı gün Çin takvimiyle sorgulandı, ganzhi gün adı eşleşti.
TAKVIM_AS = {
    "L2-731": "Takvim: Shaoxing 7/11 丁未 = 1138-01-02 (丙午 = 01-01 tahttan indirme, Song shi c.475) (Academia Sinica)",
    "L2-738": "Takvim: Jishō 4/10/21 庚子 = 1180-11-10 (Academia Sinica)",
    "L2-740": "Takvim: Yōwa 1/8/15 = 1181-09-25 (8/13 丁巳 = 09-23) (Academia Sinica)",
    "L2-743": "Takvim: Juei 3/2/7 丙寅 = 1184-03-20 (Academia Sinica)",
    "L2-745": "Takvim: Genryaku 2/3/24 丁未 = 1185-04-25 (Academia Sinica)",
    "L2-742": "Takvim: Juei 2/7/25 = 1183-08-14 (Academia Sinica; ganzhi yok, Çin–Japon ay başı eşdeğerliği VARSAYILDI; ay hassasiyetli satır)",
}
# Koordinatör kararıyla iş türü değişenler (EMRELİC 1 KASIM, 4 Kasım 2026).
DEGISTIR = {
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
                if s not in UYGULANIR:
                    continue
                is_ = UYGULANIR[s]
                no = r.get("no", "")
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
