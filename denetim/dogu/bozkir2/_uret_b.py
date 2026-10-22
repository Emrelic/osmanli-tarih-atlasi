# -*- coding: utf-8 -*-
import sys, os, json, io
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from _uret import *   # YAMA, SINIR, Q, T, J, hj, TAKVIM_NOT, A

OUT = HERE
# Balasagun: bozkir1 AYNI yamayı (karluk 0766-0840, karahanli 0840-1000) yazdı ve ana ağaca uygulandı → çift yama yazılmaz.
YAMA[:] = [y for y in YAMA if not y['ad'].startswith('Balasagun')]
SINIR[:] = [s for s in SINIR if not s['yer'].startswith('Balasagun')]
ET_SINIR = ['toprak-degisimi', 'konu-askeri', 'dogu-500-1281']

# ------------------------------------------------------------------ KÜNYELER (KUNYE_YOK: kerait, pecenek; alania -> atlasta alania-krallik var)
f_pec = hj(282, 1, 1)
KUNYE = [
 dict(id='kerait', ad='Kerâyitler (Kereyid, Ong Han ülkesi)', tur='hanlik', bolge='orta-asya', f='1007-01-01', t='1203-01-01',
      baskent='yok (Tola-Orhon-Ongin havzası yurtları; sabit başkent kaynakta yok)',
      ozet='Tola, Orhon ve Ongin havzasında yaşayan, Nesturî Hıristiyanlığı benimsemiş Moğol/Türk boylu hanlık; hükümdarı Ong Han (Toğrul) Yesügey\'in müttefiki ve genç Timuçin\'in başlıca koruyucusuydu; 1203\'te Timuçin ülkesini yağmalayıp Ong Han\'ı kaçırınca dağıldı.',
      kaynak=J(T('cengiz-han', 'Büyük han ilân edilen Camoha-Seçen ile Ong Han ve oğlu Senggün 1203’te Timuçin’e suikast tertiplediler.', 'Ong Han ile oğlu kaçtılar.'),
               T('cengiz-han', 'Kerayit Hükümdarı Ong Han’a (Tuğrul) hediye olarak takdim edildi.'),
               'f=1007: denetim/dogu/BOZKIR_RAPOR2.md aktarımı — Golden, An Introduction to the History of the Turkic Peoples (1992), s. 285: Kereyid Nesturî Hıristiyanlığı «ca. 1007»de kabul etti (bu oturumda Golden AÇILMADI; atıf)'),
      kesinlik=dict(f='onyil', t='yil'), boya_gerekli=True,
      ic_not=('TDV İslâm Ansiklopedisi\'nde Kerait/Kerayit/Kereyit maddesi YOK (kerayitler, kereyitler, kereyit-kerayit, kerait slug\'ları arandı: 5 yazım, boş sayfa). '
              'f=1007 girdi taslağıdır ve kuruluş değil Hıristiyanlaşma tarihidir (BOZKIR_RAPOR2 künye bulgusu; Emre kararı bekliyor: 1007 Hıristiyanlaşma / ~1170 Toğrul / 1199 atlas künyesi). '
              't=1203: TDV Cengiz Han md. «Timuçin âni bir baskınla Ong Han’ın yurdunu ve Kerayit ülkesini yağmaladı»; hanlığın resmî sonu için ayrı yıl veren kaynak bulunamadı. Başkent: kaynaklar sabit şehir vermez → yerleşim YAZILMADI.'),
      kronoloji=[
        dict(t='1007-01-01', tur='kurulus', b='Kerâyit hanlığının ilk kaynaklı yılı: Nesturî Hıristiyanlığın kabulü (ca. 1007)', kaynak='Golden (1992) s. 285 — BOZKIR_RAPOR2.md aktarımı; bu oturumda açılmadı', kesinlik='onyil'),
        dict(t='1203-01-01', tur='son', b='Timuçin Kerâyit ülkesini yağmalayıp Ong Han ve Senggün\'ü kaçırdı: hanlık dağıldı',
             kaynak=T('cengiz-han', 'Daha sonra Ong Han ve Senggün’e Salciyutlar başta olmak üzere bazı iltihaklar olmuşsa da', 'dağıttı.'), kesinlik='yil'),
      ]),
 dict(id='pecenek', ad='Peçenek Konfederasyonu', tur='bozkir-konfederasyonu', bolge='dogu-avrupa', f=f_pec, t='1091-04-29',
      baskent='yok (sekiz boylu konfederasyon; boy beyleri; başşehir kaynakta yok)',
      ozet='Sekiz boy ve kırk obadan oluşan, hükümdarı olmayıp boy beyleriyle yönetilen Türk konfederasyonu; 895\'te Macarları Pannonia\'ya sürüp Don\'dan Tuna\'ya uzanan bozkıra hâkim oldu, 1091\'de Levunion\'da Bizans-Kıpçak ordusuna yenilince siyasî-askerî güç olmaktan çıktı.',
      kaynak=J(T('pecenekler', 'Peçenekler, 282 (895) yılında Bulgar Kralı Simeon’un müttefiki olarak Macarlar’a saldırıp', 'hâkimiyetleri altına aldılar.'),
               T('pecenekler', 'Bizanslılar bundan faydalanarak müttefiki Kıpçaklar ile birlikte Peçenekler’i ağır bir yenilgiye uğrattılar (29 Nisan 1091).', 'önemleri kayboldu.')),
      kesinlik=dict(f='yil', t='gun'), boya_gerekli=True,
      ic_not=('f: girdi taslağı 0889 idi; TDV Peçenekler md. 889\'u (276/889) yalnız Hazar-Oğuz hücumuyla İdil batısına geçiş olarak verir; Karadeniz kuzeyi bozkırına hâkimiyet 282/895 (Macarlar\'ın sürülüşü). Künye f = hicrî 282 ilk günü (≈' + f_pec + '), yıl hassasiyeti; ' + TAKVIM_NOT + ' '
              't: girdi taslağı 1122 idi, TDV\'de yok; TDV 29 Nisan 1091 Levunion yenilgisini «siyasî ve askerî güç olarak önemleri kayboldu» der (son akın 1197, Macaristan\'a göç ve Kıpçaklara katılma sonrası). '
              'Sınırlı/dağınık siyasî birimdir; boy adı-konfederasyon: Emre\'nin «boy adları siyasî birim mi» kararı bekliyor (BOZKIR_RAPOR2 ③.3). Peçenekler\'in hükümdarı yoktu (TDV).'),
      kronoloji=[
        dict(t=f_pec, tur='kurulus', b='Peçenekler Bulgar Kralı Simeon\'un müttefiki olarak Macarları sürüp Don-Tuna bozkırına hâkim oldu',
             kaynak=T('pecenekler', 'Peçenekler, 282 (895) yılında Bulgar Kralı Simeon’un müttefiki olarak Macarlar’a saldırıp', 'hâkimiyetleri altına aldılar.'), kesinlik='yil'),
        dict(t='1091-04-29', tur='son', b='Levunion\'da Bizans-Kıpçak ordusu Peçenekleri ağır yenilgiye uğrattı; Peçenekler siyasî-askerî güç olmaktan çıktı',
             kaynak=T('pecenekler', 'Bizanslılar bundan faydalanarak müttefiki Kıpçaklar ile birlikte Peçenekler’i ağır bir yenilgiye uğrattılar (29 Nisan 1091).', 'önemleri kayboldu.'), kesinlik='gun'),
      ]),
]

# ------------------------------------------------------------------ KRONOLOJİ (anlatı)
def M(t, b, tur, onem, dunya, kapsam, etiket, yer, taraflar, d, kaynak, gun, kes, ic=None, takv=None):
    x = dict(t=t, b=b, tur=tur, onem=onem, dunya=dunya, kapsam=kapsam, etiket=etiket, yer=yer, taraflar=taraflar, d=d, kaynak=kaynak, gun=gun, kesinlik=kes)
    if ic: x['ic_not'] = ic
    if takv: x['ic_not_takvim'] = takv
    return x

CH = 'cengiz-han'
KRON = []
# --- Kamag Moğol / Kerait / Nayman (Timuçin'in yükselişi, 1195-1206 öncesi)
KRON += [
 M('1195-01-01', 'Çok sayıda kabile Timuçin\'e katıldı: Moğol birliğinin çekirdeği oluştu', 'birlesme', 3, 2, 'ic', ['konu-siyasi'], 'Onon-Kerulen bozkırı', ['kamag-mogol'],
   'Babası Yesügey\'in ölümünden sonra terk edilen Timuçin, 1195\'te çevresine çok sayıda kabileyi topladı; bu, 1206 kurultayına giden Moğol birliğinin başlangıcıdır.',
   T(CH, '1195 yılında çok sayıda kabile Timuçin’e katıldı.'), '1195 (ay-gün yok)', 'yil'),
 M('1197-01-01', 'Timuçin Merkitleri yendi, Merkit beyi Tokta-Beki öldürüldü', 'savas', 2, 1, 'ic', ['konu-askeri'], 'Merkit yurdu', ['kamag-mogol'],
   'Timuçin Merkitler üzerine yürüyüp onları yendi ve beyleri Tokta-Beki\'yi öldürttü.',
   T(CH, '1197’de Merkitler üzerine yürüyerek onları mağlûp etti ve Merkitler’in beyi Tokta-Beki’yi öldürttü.'), '1197 (ay-gün yok)', 'yil'),
 M('1199-01-01', 'Timuçin ile Ong Han Kişil-Baş\'ta Nayman Hakanı Buyruk Han\'ı yendi', 'savas', 3, 2, 'ic', ['konu-askeri', 'konu-ittifak'], 'Kişil-Baş', ['kamag-mogol', 'kerait', 'nayman'],
   'Timuçin Kerâyit hükümdarı Ong Han\'la birlikte Kişil-Baş mevkiinde Nayman Hakanı Buyruk Han\'ı bozguna uğrattı; iki hanlık bu aşamada müttefikti.',
   T(CH, '1199’da Ong Han’la beraber Kişil-Baş mevkiinde Nayman Hakanı Buyruk Han’ı bozguna uğrattı.'), '1199 (ay-gün yok)', 'yil'),
 M('1200-01-01', 'Timuçin ve Ong Han Tayiçiutlarla anlaşan kabileleri tâbi kıldı', 'savas', 2, 1, 'ic', ['konu-askeri'], 'Onon bölgesi', ['kamag-mogol', 'kerait'],
   'Timuçin ve Ong Han Tayiçiutlar\'la anlaşan kavimler üzerine yürüyüp onları yenerek tâbi kıldılar; aynı yıl toparlanmaya çalışan Tayiçiut, Katagin ve Dörmenleri bir kez daha dağıttılar.',
   T(CH, 'Timuçin 1200 yılında Ong Han ile birlikte Tayciyutlar’la anlaşan kavimler üzerine yürüdü.', 'bozguna uğrattılar.'), '1200 (ay-gün yok)', 'yil'),
 M('1201-01-01', 'Timuçin Camoha-Seçen\'in kurduğu kabile ittifakını yendi', 'savas', 3, 1, 'ic', ['konu-askeri'], 'Cacirat yurdu', ['kamag-mogol'],
   'Timuçin\'in düşmanı olan Enkiras, Kurilas, Dörmen, Tatar, Katagin ve Salciyut kabileleri Camoha-Seçen\'i büyük han ilan edince Timuçin onlara yürüdü ve Camoha\'nın müttefik kuvvetlerini yendi; Kongirat kabilesi ardından Timuçin\'e bağlandı.',
   T(CH, '1201’de Timuçin’in düşmanı olan', 'Camoha ve müttefik kuvvetleri yenildi.'), '1201 (ay-gün yok)', 'yil'),
 M('1202-01-01', 'Timuçin Tatar ilini ağır yenilgiye uğrattı', 'savas', 3, 1, 'ic', ['konu-askeri'], 'Tatar ili', ['kamag-mogol'],
   'Timuçin Tatar ili üzerine büyük sefer yaparak düşmanlarına ağır darbe vurdu; aynı yıl toparlanan Naymanlara Ong Han ile birlikte yürüdü.',
   T(CH, 'Timuçin 1202 yılında Tatar ili üzerine büyük bir sefer yaparak düşmanlarına ağır bir darbe vurdu.'), '1202 (ay-gün yok)', 'yil'),
 M('1203-01-01', 'Timuçin Kerâyit ülkesini yağmaladı; Ong Han ve Senggün kaçtı', 'savas', 4, 2, 'ic', ['konu-askeri', 'konu-siyasi'], 'Kerâyit ülkesi (Ong Han yurdu)', ['kamag-mogol', 'kerait'],
   'Camoha-Seçen, Ong Han ve oğlu Senggün Timuçin\'e suikast tertipleyince Timuçin âni baskınla Ong Han\'ın yurdunu ve Kerâyit ülkesini yağmaladı; Ong Han ile oğlu kaçtı. Müttefikler düşman oldu, Kerâyit hanlığı dağılma yoluna girdi.',
   T(CH, 'Büyük han ilân edilen Camoha-Seçen ile Ong Han ve oğlu Senggün 1203’te Timuçin’e suikast tertiplediler.', 'Ong Han ile oğlu kaçtılar.'), '1203 (ay-gün yok)', 'yil',
   'Kerâyit hanlığının sonu için ayrıca yıl veren kaynak bulunamadı (TDV md. yok): künye t=1203 bu olaya dayanır.'),
 M('1204-01-01', 'Timuçin Nayman Tayang Han ve Merkit müttefiklerini dağıttı', 'savas', 3, 2, 'ic', ['konu-askeri'], 'Nayman-Merkit yurtları', ['kamag-mogol', 'nayman'],
   'Ongut hükümdarı Alakuş Tigin Nayman hükümdarı Tayang Han\'ın Merkit Kutuku ile anlaştığını bildirince Timuçin hazırlıklarını tamamlayıp müttefik kuvvetleri yurtlarında bastı ve dağıttı; 1206\'da bozkırın bütün hükümdarları onun hâkimiyetinde toplandı.',
   T(CH, '1204 yılında Ongut Hükümdarı Alakuş Tigin', 'hepsini dağıttı.'), '1204 (ay-gün yok)', 'yil'),
]
# --- Küçlüğ dönemi
KRON += [
 M('1208-01-01', 'Nayman Küçlüğ Karahıtay Gürhanı\'na sığındı', 'siyaset', 2, 2, 'ic', ['konu-siyasi'], 'Balasagun (Karahıtay ülkesi)', ['nayman', 'karahitay', 'kuclug-karahitay'],
   '1208 kışında Küçlüğ\'ün Merkitlerle ittifak etmesi üzerine Cengiz Han onları yenince Nayman Tayang Han\'ın oğlu Küçlüğ batıdaki Karahıtay hükümdarı Gür Han\'a sığındı; daha sonra Karahıtay tahtına el koydu.',
   J(T(CH, '1208 yılının kış mevsiminde', 'ülkesine hâkim oldu.')), '1208 kışı (ay-gün yok)', 'yil',
   'ÇELİŞKİ: TDV Cengiz Han md. Küçlüğ\'ün Gür Han\'ı «öldürdüğünü», TDV Karahıtaylar md. «kayınpederi Ch’e-lu-ku’yu esir ederek bu devlete son verdiğini (1211)» yazar; ikisi de TDV, olayın biçimi için Karahıtaylar md. esas alınır (kuclug-karahitay künyesi 1211).'),
 M(hj(607, 1, 1), 'Doğu Karahanlı son hükümdarı III. Muhammed Kâşgar yolunda öldürüldü; Küçlüğ Kâşgar\'ı aldı, Doğu Karahanlılar sona erdi', 'son', 3, 2, 'ic', ['konu-siyasi', 'konu-askeri'], 'Kâşgar', ['kuclug-karahitay', 'dogu-karahanli'],
   'Küçlüğ Han, Gürhan\'ı esir alınca Doğu Karahanlı Ebü\'l-Feth III. Muhammed\'i Kâşgar tahtına oturtmak üzere yolladı; fakat şehrin ileri gelenleri ve beyler isyan edip hânedanın son temsilcisini yolda öldürdü (607/1210-11). Küçlüğ Kâşgar\'ı alıp isyancıları öldürttü; Doğu Karahanlılar sona erdi.',
   T('karahanlilar', 'Fakat şehrin ileri gelenleri ve beyler isyan edip', 'sona ermiş oldu.'), '607/1210-11', 'yil',
   'TDV hicrî 607 yılını «1210-11» diye verir; hicrî 607 ∩ (1210-1211) = tüm hicrî yıl, ilk günü alındı (yıl hassasiyeti). Atlas künyesi dogu-karahanli t=1210-01-01 ve Kâşgar zincirinde __BOSLUK__ 1211-1218 (kuclug-karahitay künyesi hazır) — düzeltme önerisi RAPOR.md.',
   TAKVIM_NOT),
]
# --- Gurlu / Hârizmşah
KRON += [
 M('1200-01-01', 'Gurlular Tekiş\'in ölümü üzerine Hârizmşahlara savaş açıp Nîşâbur, ertesi yıl Merv ve Serahs\'ı aldı', 'savas', 3, 2, 'ic', ['konu-askeri'], 'Horasan (Nîşâbur, Merv, Serahs)', ['gurlu', 'harizmsah'],
   'Hârizmşah Alâeddin Tekiş 1200\'de ölünce Gurlular Hârizmşahlar\'a savaş açtı, Nîşâbur\'u kolaylıkla ele geçirdi; ertesi yıl Mervüşşahcân\'ı, ardından Serah bölgesini zaptetti. Böylece bütün Horasan Gurlu kontrolüne girdi.',
   T('gurlular', 'Sultan Alâeddin Tekiş’in 1200 yılında ölümü üzerine Gurlular Hârizmşahlar’a karşı savaş açtılar ve Nîşâbur’u kolaylıkla ele geçirdiler.', 'Horasan Gurlular’ın kontrolü altına girdi.'), '1200 (ay-gün yok)', 'yil',
   'ÇELİŞKİ/ATLAS: TDV Hârizmşahlar md. Alâeddin Muhammed\'in Nîşâbur, Merv ve Serahs\'ı 1204\'te zaptettiğini yazar (kronolojide 1204 maddesi var); TDV Gurlular md. Gurlu işgalini 1200-1201 verir. Atlas Nîşâbur zinciri harizmsah 1202-01-01\'de başlar (bu işçinin dışındaki bir kümenin kaydı) — Nîşâbur/Merv/Serahs 1200/01-1204 gurlu önerisi RAPOR.md\'de; zincire dokunulmadı çünkü iki TDV maddesi arası şehir-düzeyi gün yok.'),
]
# --- Kırgız
KRON += [
 M('1217-01-01', 'Yenisey Kırgızları Moğollara karşı direnmeye kalkıştı', 'isyan', 2, 1, 'ic', ['konu-askeri'], 'Yenisey', ['yenisey-kirgiz', 'mogol-imparatorlugu'],
   'Cengiz Han\'a 1207\'de itaat eden ilk Türk kavmi Kırgızlar 1217\'de Moğollara karşı direnmeye kalktı.',
   T('kirgizlar', 'Kırgızlar, Cengiz Han’a itaat eden ilk Türk kavmidir. 1217’de Moğollar’a karşı direnmeye kalkıştılarsa da ertesi yıl Cengiz Han’ın oğlu Cuci tarafından yenilgiye uğratılıp tekrar imparatorluğa bağlandılar.'), '1217 (ay-gün yok)', 'yil'),
 M('1218-01-01', 'Cuci Kırgızları yenip yeniden imparatorluğa bağladı', 'savas', 2, 1, 'ic', ['konu-askeri'], 'Yenisey', ['mogol-imparatorlugu', 'yenisey-kirgiz'],
   'Cengiz Han\'ın oğlu Cuci Kırgız direnişini ertesi yıl (1218) bastırıp âsi Kırgız ilini yeniden Moğol hâkimiyetine soktu.',
   J(T('kirgizlar', '1217’de Moğollar’a karşı direnmeye kalkıştılarsa da ertesi yıl Cengiz Han’ın oğlu Cuci tarafından yenilgiye uğratılıp tekrar imparatorluğa bağlandılar.'),
     T(CH, 'Daha sonra oğlu Cuci’yi Kırgızlar üzerine sevkederek âsi Kırgız ilini hâkimiyeti altına aldı.')), '1218 (ay-gün yok)', 'yil',
   'Cengiz Han md. bu seferi 1217 anlatısı içinde, Kırgızlar md. 1218 olarak verir (iki TDV yılı bir yıl ayrışıyor): Kırgızlar md. esas alındı.'),
]
# --- Peçenek
def PM(t, b, tur, onem, taraflar, yer, d, kaynak, gun, kes, ic=None, takv=None):
    return M(t, b, tur, onem, 1, 'dis', ['konu-askeri'], yer, taraflar, d, kaynak, gun, kes, ic, takv)
t889 = hj(276, 1, 1)
KRON += [
 PM(t889, 'Hazarlar ve Oğuzlar Peçenekleri İdil\'in batısına sürdü', 'savas', 3, ['hazar-kaganligi', 'pecenek'], 'İdil-Yayık arası',
    'Peçeneklerin Yayık-İdil arası yurdunda Hazarlar için büyüyen tehlikesine karşı Hazarlar Oğuzlarla ittifak kurup Peçeneklere hücum ederek onları İdil\'in batısına geçmeye zorladı.',
    T('pecenekler', 'Bundan dolayı Hazarlar, Peçenekler’e karşı Oğuzlar’la bir ittifak meydana getirdiler', 'mecbur bıraktılar.'), '276/889', 'yil',
    'Hicrî 276 ∩ 889: tüm hicrî yılın ilk günü alındı (yıl hassasiyeti). TDV Peçenekler md. başka yerde «898»de Oğuz-Hazar hücumuyla İdil-Yayık yurdunun terk edildiğini söyler (md. içi 889/898 farkı beyan edilir).', TAKVIM_NOT),
 PM(f_pec, 'Peçenekler Simeon\'un müttefiki olarak Macarları Pannonia\'ya sürdü, Don-Tuna bozkırına hâkim oldu', 'savas', 4, ['pecenek', 'macar-prensligi', 'birinci-bulgar'], 'Etelköz (Don-Tuna bozkırı)',
    'Peçenekler Macarlarla karşılaşıp onları Levedya\'dan Etelköz\'e, oradan Tuna-Tisa boylarına göç ettirdi; 895\'te Bulgar Kralı Simeon\'un müttefiki olarak Macarlara saldırıp onları Pannonia\'ya gitmek zorunda bıraktı ve Don\'dan Tuna\'ya uzanan bozkırı hâkimiyetine aldı.',
    T('pecenekler', 'Peçenekler, 282 (895) yılında Bulgar Kralı Simeon’un müttefiki olarak Macarlar’a saldırıp', 'hâkimiyetleri altına aldılar.'), '282/895', 'yil', None, TAKVIM_NOT),
 PM('0972-01-01', 'Peçenek başbuğu Küre Bizans müttefiki olarak Svyatoslav\'ı yenip öldürdü', 'savas', 3, ['pecenek', 'kiev-rusu', 'bizans'], 'Dinyeper (Tuna ağzı dönüşü)',
    'Peçeneklerin Kiev\'i kuşattığını haber alan Svyatoslav 968\'de dönmüştü; 972\'de Peçenek başbuğu Küre, Bizans\'ın müttefiki olarak Svyatoslav\'ı yapılan bir karşılaşmada yenip öldürdü.',
    T('pecenekler', '972’de Peçenek başbuğu Küre', 'savaş meydanında kaldı.'), '972 (ay-gün yok)', 'yil'),
 PM('1035-01-01', 'Peçenekler ilk kez Tuna\'yı geçip Bizans topraklarını yağmaladı', 'savas', 3, ['pecenek', 'bizans'], 'Tuna',
    'Bulgaristan\'ın 1018\'de Bizans idaresine girmesiyle başlayan temaslar 1035\'te Peçeneklerin Tuna\'yı ilk kez geçip nehrin güney kıyısını yağmalamasıyla savaşa döndü; 1036\'da üç kez Bizans topraklarına girdiler.',
    T('pecenekler', 'Peçenekler ilk defa 1035’te Tuna’yı geçerek', 'girdiler.'), '1035 (ay-gün yok)', 'yil'),
 PM('1048-01-01', 'Peçenek akını Bulgaristan\'ı yakıp yıktı, Balkanlar yağmalandı', 'savas', 3, ['pecenek', 'bizans'], 'Bulgaristan (Tuna güneyi)',
    '1048\'deki Peçenek akını dehşet verici oldu: Bulgaristan yakılıp yıkıldı, akınlar Balkanların öteki bölgelerine yayıldı; iç çekişmeler akınları zayıflattı, iki Peçenek oymağı Bizans\'a sığınıp Silistre yakınında sınır bekçisi yapıldı.',
    T('pecenekler', '1048’de yaptıkları akın dehşet verici oldu', 'yağmaladılar.'), '1048 (ay-gün yok)', 'yil'),
 PM('1049-01-01', 'Turak komutasındaki Peçenekler Bizans ordusunu yenip Edirne\'ye ulaştı', 'savas', 3, ['pecenek', 'bizans'], 'Edirne',
    'Bizans yardımıyla Kegen\'e esir düşen Turak ve arkadaşları kısa maceradan sonra Tuna boyundaki yurtlarına dönüp yeniden mücadeleye başladı, Bizans ordusunu yenip Edirne\'ye kadar ulaştı (1049).',
    T('pecenekler', 'Fakat Turak ve arkadaşları', 'Edirne’ye kadar ulaştılar (1049).'), '1049 (ay-gün yok)', 'yil'),
 PM('1064-01-01', 'Peçenekler Tuna\'yı geçen Uzları dağıttı', 'savas', 2, ['pecenek'], 'Tuna-Balkanlar',
    'Kıpçak baskısıyla Tuna boyuna gelen Uzlar (Oğuzlar) 1064-1065\'te Tuna\'yı geçip Balkanlarda geniş bir yağma akınına girişince Peçeneklerin bir bölümü onları dağıttı.',
    T('pecenekler', 'Kıpçaklar’ın baskıları ile Tuna boylarına gelen ve bu sırada (1064-1065)', 'dağıtan Peçenekler’in bir bölümü'), '1064-1065', 'yil'),
 PM('1087-01-01', 'Peçenekler Macarlarla birleşip Bizans topraklarına girdi, Silistre yakınında Bizans\'ı yendi', 'savas', 3, ['pecenek', 'bizans', 'macaristan'], 'Lüleburgaz-Silistre',
    '1086\'da Bogomillerin ayaklanmasını destekleyen Peçenekler ertesi yıl Macarlarla birleşip Bizans topraklarına girdi, Lüleburgaz\'a kadar ilerledi; Bizans geri çekilmeye zorladıysa da Silistre yakınında ağır yenilgiye uğradı.',
    T('pecenekler', '1086’da Bogomiller’in ayaklanmasını desteklediler.', 'ağır bir yenilgiye uğratıldılar.'), '1087 (ertesi yıl; ay-gün yok)', 'yil'),
 PM('1197-01-01', 'Peçeneklerin Bizans topraklarına son akını', 'savas', 1, ['pecenek', 'bizans'], 'Tuna',
    'Levunion yenilgisinden (1091) sonra Tuna boylarında zayıf bir durumda varlığını sürdüren Peçeneklerin Bizans topraklarına akınlarının sonuncusu 1197\'de yapıldı; ardından bir kısmı Macaristan\'a gitti.',
    T('pecenekler', 'Bu akınların sonuncusu 1197’de yapılmıştı.'), '1197 (ay-gün yok)', 'yil'),
]

# ------------------------------------------------------------------ SINIR maddeleri JSON'a
def yer_kisa(yid): return yid.split(' (')[0]
SIN = []
for s in sorted(SINIR, key=lambda x: (x['yer'], x['t'])):
    m = dict(t=s['t'], devlet=s['devlet'], taraflar=s['taraflar'], b=s['b'], tur=s['tur'], onem=2, dunya=1, kapsam='dis', yer=yer_kisa(s['yer']), yer_id=s['yer'],
             etiket=ET_SINIR, d=s['d'], kaynak=s['kaynak'], gun={'gun': 'gün', 'ay': 'ay (gün çevrilmiş)', 'yil': 'yıl'}[s['kes']], kesinlik=s['kes'])
    if s['ic']: m['ic_not'] = s['ic']
    if s['takvim']: m['ic_not_takvim'] = s['takvim']
    m['sinir_id'] = []
    SIN.append(m)

# ------------------------------------------------------------------ YAZ
def yaz(dosya, ust, degisken, veri):
    p = os.path.join(OUT, dosya)
    with open(p, 'w', encoding='utf-8') as f:
        f.write(ust + '\nwindow.' + degisken + ' = ' + json.dumps(veri, ensure_ascii=False, indent=1) + ';\n')
    print(dosya, len(veri))

yaz('kunye_yeni.js', '// kunye_yeni.js — DOGU bozkir2 yeni künyeler (kerait, pecenek). alania: atlasta alania-krallik var (0850-1090) → künye yazılmadı.', 'DOGU_KUNYE_BOZKIR2', KUNYE)
yaz('kronoloji_cok_dogu_bozkir2.js', '// kronoloji_cok_dogu_bozkir2.js — DOGU bozkir2: anlatı maddeleri (Timuçin yükselişi, Kerâyit, Küçlüğ, Kırgız, Peçenek, Gurlu). Kaynak: TDV (bu oturumda okundu; alıntılar önbellekten birebir çekildi).', 'KRONOLOJI_COK_DOGU_BOZKIR2', KRON)
yaz('kronoloji_sinir_dogu_bozkir2.js', '// kronoloji_sinir_dogu_bozkir2.js — DOGU bozkir2: yama dilimlerinin devir (s: kırılması) maddeleri, Değişmez 2 evreni.', 'KRONOLOJI_SINIR_DOGU_BOZKIR2', SIN)
yaz('yerlesimler_dogu_bozkir2.js', '// yerlesimler_dogu_bozkir2.js — DOGU bozkir2: YENİ yerleşim YAZILMADI (bkz. RAPOR.md ②). Mevcut yerleşimlere yama: yama_bozkir2.js.', 'YERLESIMLER_DOGU_BOZKIR2', [])
yaz('yama_bozkir2.js', '// yama_bozkir2.js — MEVCUT atlas yerleşimlerine eklenecek s: önekleri (yama aracı girdisi). ilk dilim f = gerçek ilk kaynaklı gün; onceki_gerekli = bu kümenin yazmadığı önceki dönem.', 'YAMA_DOGU_BOZKIR2', YAMA)
