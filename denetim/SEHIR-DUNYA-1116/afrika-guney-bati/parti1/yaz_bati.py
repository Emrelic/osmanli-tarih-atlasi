import json, os
H = os.path.dirname(os.path.abspath(__file__))

TIN = "TDV İslâm Ansiklopedisi, 'Tinbüktü' (Ahmet Kavas), c. 41, İstanbul 2012, s. 190-192, https://islamansiklopedisi.org.tr/tinbuktu"
GAO = "TDV İslâm Ansiklopedisi, 'Gao' (Rıza Kurtuluş), c. 13, İstanbul 1996, s. 357, https://islamansiklopedisi.org.tr/gao"
SOK = "TDV İslâm Ansiklopedisi, 'Sokoto' (Ahmet Kavas), c. 37, İstanbul 2009, s. 351-352, https://islamansiklopedisi.org.tr/sokoto"
KAN = "TDV İslâm Ansiklopedisi, 'Kano' (Davut Dursun), c. 24, İstanbul 2001, s. 312-313, https://islamansiklopedisi.org.tr/kano"
MAL = "TDV İslâm Ansiklopedisi, 'Mali' (Ahmet Kavas), c. 27, İstanbul 2003, s. 493-504, https://islamansiklopedisi.org.tr/mali"
FUL = "TDV İslâm Ansiklopedisi, 'Fûlânîler' ve 'Ahmedü Lobbo' maddeleri, https://islamansiklopedisi.org.tr/fulaniler (cilt/sayfa bu oturumda okunamadı)"
LIB = "TDV İslâm Ansiklopedisi, 'Liberya' (Davut Dursun), c. 27, Ankara 2003, s. 173-174, https://islamansiklopedisi.org.tr/liberya"

K = []

K.append({
 "id": "tombouctou-ml", "ad": "Timbuktu", "atlas_ad": "Timbuktu", "lat": 16.7735, "lon": -3.0074, "kat1900": 2,
 "adlar": ["Tinbüktü (TDV İA yazımı)", "تنبكتو (Tinbuktu)", "Timbuktu", "Tombouctou (Fransızca)"],
 "ilk": {"t": "1100-01-01", "gun": "MS 11. yüzyıl sonu", "nicelik": "kurulus", "kesinlik": "yuzyil", "kaynak": TIN,
         "tanik": "Şehrin tarihi XI. yüzyılın sonlarına kadar iner",
         "ic_not": "Güvenli uç: 'XI. yüzyılın sonlarına' → yüzyılın sonu 1100. Kuruluş tanığı değil tarihçe özeti; kesin kuruluş günü bulunamadı. Aynı maddede İbn Battûta'nın ilk anışı 754 h. (1353) olarak verilir; daha eski yazılı anılış bu oturumda kaynakla bağlanamadı."},
 "kur": None, "ark": None, "bit": None,
 "sahip": [{"f": "1100-01-01", "t": "1281-01-01", "d": "__BOSLUK__", "kesinlik": "yil", "kaynak": TIN + "; " + MAL,
            "ic_not": "BOŞLUK (şehir var, sahibi kaynakta bulunamadı): TDV Tinbüktü şehrin ilk tarihli siyasî bağını Mansa Mûsâ dönemine (729 h./1329, 'Mali hâkimiyeti 1430'a kadar') bağlar; 1100-1281 arasında Gâne/Murâbıt/Susu/Tevârik sahibi için tarihli tanık bulunamadı."}],
 "olay": [
  {"t": "1329-01-01", "gun": "1329", "k": "diger", "b": "Mansa Mûsâ Tinbüktü'yü İslâm merkezi yapar; şehir 1430'a kadar Mali hâkimiyetinde kalır", "kaynak": TIN},
  {"t": "1430-01-01", "gun": "1430", "k": "fetih", "b": "Tevârikler Tinbüktü'yü Mali'den alır (1468'e kadar)", "kaynak": TIN + "; " + MAL},
  {"t": "1468-01-01", "gun": "1468", "k": "fetih", "b": "Songay Sünnî Ali Ber Tinbüktü'yü Tevârikler'den alır", "kaynak": TIN + "; " + MAL},
  {"t": "1591-01-01", "gun": "1591", "k": "fetih", "b": "Tondibi sonrası Fas (Sa'dî) hâkimiyeti; Tinbüktü paşalığı merkezi", "kaynak": TIN},
  {"t": "1894-01-01", "gun": "1894", "k": "isgal", "b": "Fransız ilhakı, Fransız Batı Afrikası'na katılır", "kaynak": TIN}],
 "dikis_beyan": "Atlas Timbuktu'yu 1281-01-01'den Mali'ye bağlıyor; TDV Tinbüktü'nün Mali'ye geçişini Mansa Mûsâ dönemine (1329) bağlar ve 1281 için tanık vermez. 1281'e ±30 gün olay bulunamadı; yer tutucu olay yazılmadı.",
 "ic_not": "Kaynak: yalnız TDV (Tinbüktü, Mali, Gâne maddeleri okundu). Başka akademik kaynakla (ör. Hunwick, Timbuktu and the Songhay Empire, 1999) çift teyit YAPILMADI. 1430 sonrası zincir atlas esasıdır (burada yazılmadı); TDV'de 1430, 1468, 1591, 1750 (Arma), 1760 (Tevârik), ~1770 (Segu Bambara), 1792 (Tevârik), 1894 (Fransız) günleri yalnız yıl hassasiyetindedir."})

K.append({
 "id": "gao-ml", "ad": "Gao", "atlas_ad": "Gao", "lat": 16.272, "lon": -0.04, "kat1900": None,
 "adlar": ["Kevkev / Kukia (TDV: Kevkev Krallığı idarî merkezi; Kukia ayrı yer olarak anılır)", "Gao"],
 "ilk": {"t": "0700-01-01", "gun": "MS 7. yüzyıl sonu", "nicelik": "kurulus", "kesinlik": "yuzyil", "kaynak": GAO,
         "ic_not": "TDV: VII. yüzyılın sonlarında (muhtemelen) Kukia'dan gelen Sorko-Fârân balıkçıları kurmuştur — 'muhtemelen' kaydı korunur. Güvenli uç: yüzyıl sonu 0700. Arkeolojik tarih (Gao-Saney / Gao Ancien) ve yazılı ilk anılış (el-Yakûbî ~872 vb.) hakemli kaynakla doğrulanamadı; Vikipedi yansıları dayanak sayılmadı."},
 "kur": {"t": "0700-01-01", "gun": "MS 7. yüzyıl sonu", "kesinlik": "yuzyil", "kaynak": GAO, "tanik": "Sorko-Fârân balıkçıları kurdu (muhtemelen)"},
 "ark": None, "bit": None,
 "sahip": [{"f": "0700-01-01", "t": "0801-01-01", "d": "__BOSLUK__", "kesinlik": "yil", "kaynak": GAO,
            "ic_not": "BOŞLUK (şehir var, sahibi kaynakta bulunamadı): TDV Kevkev Krallığı'nı IX. yüzyılda, Songayların şehre hâkimiyetini ~890'da verir; 0700-0801 için adlandırılmış siyasî sahip yok (balıkçı yerleşimi). Atlas da 0801'de __BOSLUK__ ile başlıyor — aynı sahip, dikiş sorunu yok."}],
 "olay": [
  {"t": "1324-01-01", "gun": "1324", "k": "fetih", "b": "Songay hükümdarı Asibay Mali sultanı Gongon Mûsâ'ya yenilir, iki oğlunu rehin verir", "kaynak": GAO},
  {"t": "1591-01-01", "gun": "1591", "k": "fetih", "b": "Ahmed el-Mansûr (Fas) Gao'yu Tinbüktü ile birlikte alır", "kaynak": GAO},
  {"t": "1680-01-01", "gun": "1680", "k": "fetih", "b": "Gao Tevâriklerin eline geçer (1688'de Mansûr Seniber Paşa geri alır, kalıcı garnizon bırakmaz)", "kaynak": GAO},
  {"t": "1898-01-01", "gun": "1898", "k": "isgal", "b": "Fransız işgali sonrası şehir yeniden büyür", "kaynak": GAO}],
 "ic_not": "Kaynak yalnız TDV Gao maddesi (Rıza Kurtuluş, c. 13) ve TDV Mali maddesi; çift teyit YOK. TDV Mali: 1430'da Tevârikler Gao'yu aldı; TDV Gao: 1324 Mali hâkimiyeti — ikisi de yıl hassasiyetinde. Atlas 0801'de __BOSLUK__ ile başlıyor ve künyeli sahip yazmıyor; 1324 sonrası zincir atlasın."})

K.append({
 "id": "sokoto-ng", "ad": "Sokoto", "atlas_ad": "Sokoto", "lat": 13.062, "lon": 5.234, "kat1900": None,
 "adlar": ["Sokoto"],
 "ilk": {"t": "1804-01-01", "gun": "1804", "nicelik": "ilk_anilis", "kesinlik": "yil", "kaynak": SOK,
         "tanik": "Osman b. Fûdî oğlu Muhammed Bello'ya kasaba yakınında askerî üs kurdurdu",
         "ic_not": "TDV: 1804'te üs, 1812'de Sokoto Halifeliği kuruluşu, 1817'de Osman b. Fûdî Sokoto'da ölür. 'Kasaba'nın (town) 1804 öncesi varlığı TDV'de yazılı değil; daha eski anılış bulunamadı. Künye `sokoto` 1804-01-01'den başlıyor, atlas 1812-01-01."},
 "kur": None, "ark": None, "bit": None,
 "sahip": [{"f": "1804-01-01", "t": "1812-01-01", "d": "sokoto", "kesinlik": "yil", "kaynak": SOK,
            "ic_not": "Aynı sahip (Fulani cihad devleti / Sokoto) atlasın 1812 başlangıcıyla süreklidir; 1804-1812 arası devlet statüsü TDV'de 'üs' olarak geçer, künye ömrü 1804'ten."}],
 "olay": [
  {"t": "1804-01-01", "gun": "1804", "k": "kurulus", "b": "Muhammed Bello Sokoto yakınında askerî üs kurar", "kaynak": SOK},
  {"t": "1808-01-01", "gun": "1808", "k": "fetih", "b": "Osman b. Fûdî Gobir başkenti Alkalawa'yı alır", "kaynak": SOK},
  {"t": "1812-01-01", "gun": "1812", "k": "kurulus", "b": "Sokoto Halifeliği kurulur", "kaynak": SOK},
  {"t": "1903-03-15", "gun": "15 Mart 1903", "k": "isgal", "b": "İngilizler ordusunu yenip Sokoto'yu işgal eder", "kaynak": SOK},
  {"t": "1903-07-27", "gun": "27 Temmuz 1903", "k": "savas", "b": "Muhammed I. Tâhir İngilizlerle savaşta ölür; halifeliğin siyasî egemenliği biter", "kaynak": SOK}],
 "ic_not": "Yalnız TDV; çift teyit yok."})

K.append({
 "id": "kano-ng", "ad": "Kano", "atlas_ad": "Kano", "lat": 12.0, "lon": 8.517, "kat1900": None,
 "adlar": ["Kano"],
 "ilk": {"t": "1200-01-01", "gun": "MS 12. yüzyıl", "nicelik": "ilk_anilis", "kesinlik": "yuzyil", "kaynak": KAN,
         "tanik": "XII. yüzyılda surlarla çevrildi, kervan ticaret merkezi oldu",
         "ic_not": "Güvenli uç: yüzyılın sonu 1200. TDV IX. yüzyılda Gaya kabilesinden Kano'nun kurduğu anlatısını 'efsane' olarak verir — kuruluş tanığı sayılmadı. Kano Chronicle (Palmer, JRAI 38, 1908 / Sudanese Memoirs III, 1928) ve Arap kaynaklarındaki ilk anılış bu oturumda kaynakla bağlanamadı; bu yüzden gerçek ilk tarih daha erken olabilir. Atlas Kano'yu 1000-01-01'den başlatıyor (hausa-sehir-devletleri) — ilk.t atlas başlangıcından SONRA olduğundan zincir yazılmadı (denetim uyarısı beklenir): atlas başlangıcının dayanağı bulunamadı."},
 "kur": None, "ark": None, "bit": None,
 "sahip": [],
 "olay": [
  {"t": "1200-01-01", "gun": "MS 12. yüzyıl", "k": "idari", "b": "Kano surlarla çevrilir, Sahra-ötesi kervan yolunda ticaret merkezi olur", "kaynak": KAN},
  {"t": "1807-01-01", "gun": "1807", "k": "fetih", "b": "Osman b. Fûdî'nin Fulani kuvvetleri Kano'yu alır; Kano Sokoto emirliklerinden biri olur", "kaynak": KAN}],
 "ic_not": "Yalnız TDV Kano maddesi (Davut Dursun, c. 24); TDV İngiliz fethi için kesin yıl vermez (Emir Aliyu 1894-1903 dönemi), olay yazılmadı. Atlas başlangıcı (1000) için kaynak aranmalı."})

K.append({
 "id": "hamdullahi-ml", "ad": "Hamdullahi", "atlas_ad": "Hamdullahi", "lat": 14.15, "lon": -4.15, "kat1900": None,
 "adlar": ["Hamdullahi (TDV)", "Hamdallay (TDV Fûlânîler: parantez içi)"],
 "ilk": {"t": "1815-01-01", "gun": "1815", "nicelik": "kurulus", "kesinlik": "yil", "kaynak": FUL,
         "tanik": "1815'te Bani nehri kıyısında Hamdullahi (Hamdallay) şehrini kurarak",
         "ic_not": "TDV Fûlânîler 1815; TDV Mali (Kavas, c. 27) Ahmedü Lobbo'nun 1808-1820 arası Segu hükümdarı Damonzon Diarra'yı yenip Masina devletini kurduğunu söyler — iki TDV maddesi aynı günü vermez; 1815 TDV Fûlânîler'den (kuruluş tanığı) alındı. Başka hakemli kaynakla (ör. Brown, Journal of African History 1969; Ba & Daget 1962) çift teyit yapılmadı."},
 "kur": {"t": "1815-01-01", "gun": "1815", "kesinlik": "yil", "kaynak": FUL},
 "ark": None, "bit": None,
 "sahip": [{"f": "1815-01-01", "t": "1820-01-01", "d": "massina", "kesinlik": "yil", "kaynak": FUL,
            "ic_not": "Kurucu Ahmedü Lobbo'nun Masina devleti; künye `massina` 1818-01-01'den başlıyor, ilk.t 1815 (TDV Fûlânîler) — 'hayalet' uyarısı beklenir: künye f'si 1815'e çekilmeli YA DA TDV'nin 1815'i doğrulanmalı."}],
 "olay": [
  {"t": "1815-01-01", "gun": "1815", "k": "kurulus", "b": "Ahmedü Lobbo Bani kıyısında Hamdullahi şehrini kurar", "kaynak": FUL},
  {"t": "1862-05-16", "gun": "16 Mayıs 1862", "k": "fetih", "b": "el-Hâc Ömer Tâl Masina başkenti Hamdullahi'yi alır", "kaynak": MAL}],
 "ic_not": "TDV'nin iki ayrı maddesi (Fûlânîler 1815; Ahmedü Lobbo 1862'de el-Hâc Ömer'in zaptı) okundu."})

K.append({
 "id": "monrovia-lr", "ad": "Monrovia", "atlas_ad": "Monrovia", "lat": 6.3005, "lon": -10.7969, "kat1900": 1,
 "adlar": ["Cape Mesurado (burun adı, TDV)", "Monrovia (ABD Başkanı James Monroe adına, TDV)"],
 "ilk": {"t": "1822-01-01", "gun": "1822", "nicelik": "kurulus", "kesinlik": "yil", "kaynak": LIB,
         "tanik": "1822'de 181 Afrikalı-Amerikalıyı Cape Mesurado kıyısına yerleştirdi",
         "ic_not": "TDV: American Colonization Society (1816) ilk grubu 1822'de Cape Mesurado'ya yerleştirdi; Monrovia adının verildiği günü TDV vermez. Atlas Monrovia'yı 1822-04-25'ten başlatır (atlas referans değil; gün TDV'de yok). Öncesinde Dei/yerel halk toprağı: TDV'de ad/tarih yok, yazılmadı."},
 "kur": {"t": "1822-01-01", "gun": "1822", "kesinlik": "yil", "kaynak": LIB},
 "ark": None, "bit": None,
 "sahip": [{"f": "1822-01-01", "t": "1822-04-25", "d": "liberya", "kesinlik": "yil", "kaynak": LIB,
            "ic_not": "Yerleşimci koloni (ACS) = künye `liberya` (1822-01-01); atlasın ilk sahibiyle aynı, dikiş sorunu yok."}],
 "olay": [
  {"t": "1822-01-01", "gun": "1822", "k": "kurulus", "b": "ACS ilk 181 yerleşimciyi Cape Mesurado kıyısına yerleştirir", "kaynak": LIB},
  {"t": "1847-07-26", "gun": "26 Temmuz 1847", "k": "kurulus", "b": "Liberya Cumhuriyeti ilân edilir", "kaynak": LIB}],
 "ic_not": "Yalnız TDV Liberya maddesi; Monrovia'ya özel bir TDV maddesi yok. Cape Montserado satın alma (1821) ve 'Christopolis' adı kaynakla bağlanamadığı için yazılmadı."})

for k in K:
    if k.get("kat1900") is None: k["kat1900"] = None
json.dump(K, open(os.path.join(H, "bati.json"), "w", encoding="utf-8"), ensure_ascii=False, indent=1)
print(len(K))
