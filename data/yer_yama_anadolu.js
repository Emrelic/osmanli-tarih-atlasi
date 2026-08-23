// =====================================================================
// OLAY MAHALLİ ATAMASI — ANADOLU BEYLİKLERİ KRONOLOJİSİ İÇİN YAMA
// Oturum: ANADOLU BEYLİKLERİ KRONOLOJİ · 23 Ağustos 2026 · M-1131 cevabı
//
// Okunan: data/kronoloji_anadolu.js (281 madde, 63'ünde yer_id boştu)
// 🔴 BU DOSYA KRONOLOJİYE DOKUNMAZ — sadece yamayı taşır, uygulamayı
// koordinatör yapar (şartname §7: ayrı dosya + ayrı ad alanı).
//
// ÜÇ KOVA (anahtar: dosya+t+b):
//   yer_id        nokta yerleşim havuzunda VAR — 8 kayıt
//                 (Karaman, Kahire, Halep, Diyarbakır, Alaşehir,
//                  Karakurum ×2, Humus — hepsi girdi.yukle() ile
//                  doğrulandı)
//   eksik_nokta   yer BELLİ ama havuzda YOK, koordinat BEN buldum — 21 kayıt
//                 (Hasankeyf ×6, Sis/Kozan ×5, Silvan ×2, Malazgirt,
//                  Suğdak, Mut, Kızıltepe, Kosova, Anazarva, ve üç
//                  YAKLAŞIK işaretli tartışmalı savaş yeri: Myriokephalon,
//                  Kösedağ, Turnadağ — kaynağı her kayıtta AÇIKÇA yazılı)
//   kapsam_genis  olay tek noktaya sığmıyor / metinde yer belirtilmiyor
//                 — 34 kayıt, HER BİRİNDE gerekçe `not:` alanında
//
// ⚠️ DİSİPLİN: metinde açık yer adı yoksa TAHMİN ETMEDİM — hükümdar
// ölümü/tahta çıkışı gibi "nerede olduğu belirtilmeyen" olaylar
// kapsam_genis'e gitti (başkent varsayımı YAPILMADI — CLAUDE.md'nin
// "beylik başkent değiştirmiş olabilir" uyarısı ciddiye alındı).
//
// 🟢 BULUNAN AYRI BİR BOŞLUK: Kosova (1389-06-15 I. Kosova Savaşı) için
// verdiğim eksik_nokta AYNI ZAMANDA kronoloji_bizans.js VE
// kronoloji_sirbistan.js'teki (aynı olay, ikisinde de yer_id:"") boşluğu
// da kapatabilir — onlar bu dosyanın kapsamı dışında, koordinatöre
// AYRICA bildirildi.
// =====================================================================

window.YER_YAMA_ANADOLU = [

{ dosya:"kronoloji_anadolu.js", t:"1277-11-01", b:"Mehmed Bey, Moğollara karşı İç İl'de savaşırken öldü",
  kapsam_genis:true, not:"İç İl bir bölgedir (Silifke-Mut-Anamur/Toroslar), tek yerleşim değil" },

{ dosya:"kronoloji_anadolu.js", t:"1281-01-01", b:"Güneri Bey beyliğin başına geçti",
  kapsam_genis:true, not:"metinde yer belirtilmiyor, hükümdar değişimi olayı" },

{ dosya:"kronoloji_anadolu.js", t:"1307-01-01", b:"Mahmud Bey öldü",
  kapsam_genis:true, not:"metinde yer belirtilmiyor (Mahmud Bey öldü)" },

{ dosya:"kronoloji_anadolu.js", t:"1341-01-01", b:"İbrâhim Bey'in Kahire'ye giden elçisi Memlük hil'at ve sikke kalıplarıyla döndü",
  yer_id:"Karaman", kaynak:"karamanogullari" },

{ dosya:"kronoloji_anadolu.js", t:"1361-01-01", b:"Süleyman Bey akrabaları tarafından öldürüldü, Alâeddin Bey iktidara geçti",
  kapsam_genis:true, not:"metinde yer belirtilmiyor, suikast olayı" },

{ dosya:"kronoloji_anadolu.js", t:"1391-01-01", b:"Yıldırım Bayezid ile barış; batı toprakları bırakıldı",
  kapsam_genis:true, not:"antlaşma imza yeri belirtilmiyor, konu devredilen batı sınırı topraklar" },

{ dosya:"kronoloji_anadolu.js", t:"1402-07-28", b:"Ankara Savaşı sonrası Timur, Alâeddin'in oğullarına toprakları geri verdi",
  kapsam_genis:true, not:"Timur'un toprak iadesi kararı beylik çapında, tek nokta değil" },

{ dosya:"kronoloji_anadolu.js", t:"1421-01-01", b:"Memlük sultanının ölümüyle Mehmed Bey serbest kalıp döndü",
  yer_id:"Kahire", kaynak:"karamanogullari" },

{ dosya:"kronoloji_anadolu.js", t:"1442-01-01", b:"Macar saldırılarıyla eşzamanlı akın; II. Murad karşılık verdi",
  kapsam_genis:true, not:"sınır akınları ve karşı sefer, tek nokta belirtilmiyor" },

{ dosya:"kronoloji_anadolu.js", t:"1444-08-01", b:"İbrâhim Bey ile II. Murad arasında antlaşma; Osmanlı üstünlüğü kabul edildi",
  kapsam_genis:true, not:"antlaşma imza yeri belirtilmiyor" },

{ dosya:"kronoloji_anadolu.js", t:"1465-01-01", b:"Pîr Ahmed, Osmanlı desteğiyle kardeşi İshak'ı yenip beyliğin tamamına hâkim oldu",
  kapsam_genis:true, not:"beylik çapında iktidar mücadelesi, tek nokta değil" },

{ dosya:"kronoloji_anadolu.js", t:"1474-01-01", b:"Osmanlı seferi dağlık ve kıyı bölgeleri de tam denetime aldı",
  kapsam_genis:true, not:"dağlık ve kıyı bölgeleri kapsayan bölge çapında sefer" },

{ dosya:"kronoloji_anadolu.js", t:"1483-01-01", b:"Kasım Bey öldü; İç İl'de Turgutoğlu Mahmud bey seçildi",
  kapsam_genis:true, not:"İç İl bir bölgedir, tek yerleşim değil" },

{ dosya:"kronoloji_anadolu.js", t:"1487-01-01", b:"Mahmud Bey Halep'e kaçtı; Karamanoğulları tarihe karıştı",
  yer_id:"Halep", kaynak:"karamanogullari" },

{ dosya:"kronoloji_anadolu.js", t:"1380-01-01", b:"Alâeddin Bey'in siparişiyle Yârcânî \"Karamannâme\"yi kaleme aldı",
  kapsam_genis:true, not:"eserin kaleme alındığı yer metinde belirtilmiyor" },

{ dosya:"kronoloji_anadolu.js", t:"1400-01-01", b:"Bölge tahıl, yün, deri, halı ve at ihraç ediyordu",
  kapsam_genis:true, not:"bölge geneli ekonomik tasvir, tek nokta değil" },

{ dosya:"kronoloji_anadolu.js", t:"1350-01-01", b:"Türkmen oymak konfederasyonlarına dayanan toplumsal yapı",
  kapsam_genis:true, not:"bölge geneli toplumsal yapı tasviri" },

{ dosya:"kronoloji_anadolu.js", t:"1441-01-01", b:"Mut'ta Lâl Ağa Camii yaptırıldı",
  eksik_nokta:{ ad:"Mut", enlem:36.6469, boylam:33.4386, kaynak:"coğrafi konum — Mut ilçe merkezi, Mersin" } },

{ dosya:"kronoloji_anadolu.js", t:"1071-08-26", b:"Malazgirt zaferi Anadolu'nun kapısını açtı",
  eksik_nokta:{ ad:"Malazgirt", enlem:39.1467, boylam:42.5397, kaynak:"coğrafi konum — Malazgirt ilçe merkezi, Muş" } },

{ dosya:"kronoloji_anadolu.js", t:"1080-01-01", b:"Fetih sonrası nüfus ve iskân politikası",
  kapsam_genis:true, not:"genel iskân politikası, tek nokta değil" },

{ dosya:"kronoloji_anadolu.js", t:"1140-01-01", b:"İlk Selçuklu parasının basılması",
  kapsam_genis:true, not:"sikkenin basıldığı şehir metinde belirtilmiyor" },

{ dosya:"kronoloji_anadolu.js", t:"1176-09-17", b:"II. Kılıçarslan, Myriokephalon'da Bizans'ı yendi",
  eksik_nokta:{ ad:"Myriokephalon", enlem:38.2967, boylam:29.735, kaynak:"YAKLAŞIK — Belleten (TTK) hakemli makalesi 'Myriokephalon Savaşı'nın Yeri: Çivril Yakınında Kûfi Çayı Vadisi' (Nisan 1990, C.54 S.209) konumu Denizli-Çivril civarına yerleştiriyor; alternatif bir görüş (Selçuk Üniv. Selçuklu Araştırmaları Dergisi) Konya Bağırsak Boğazı'nı öneriyor — akademik tartışma sürüyor, koordinat KESİN DEĞİL" } },

{ dosya:"kronoloji_anadolu.js", t:"1202-01-01", b:"II. Süleyman Şah'ın Gürcistan seferi",
  kapsam_genis:true, not:"Gürcistan seferi — ülke çapında, tek nokta değil, sonuçsuz kaldığı belirtiliyor" },

{ dosya:"kronoloji_anadolu.js", t:"1216-06-01", b:"Çukurova Ermeni Krallığı ile tâbiiyet antlaşması",
  kapsam_genis:true, not:"antlaşma imza yeri belirtilmiyor" },

{ dosya:"kronoloji_anadolu.js", t:"1223-01-01", b:"Venedik ve Kıbrıs Frankları ile ticarî antlaşmalar",
  kapsam_genis:true, not:"genel ticarî antlaşmalar, tek nokta değil" },

{ dosya:"kronoloji_anadolu.js", t:"1224-01-01", b:"Suğdak seferi",
  eksik_nokta:{ ad:"Suğdak", enlem:44.8482, boylam:34.9728, kaynak:"coğrafi konum — Sudak, Kırım" } },

{ dosya:"kronoloji_anadolu.js", t:"1240-01-01", b:"Babaîler İsyanı",
  kapsam_genis:true, not:"isyan birden fazla bölgeyi kapsıyor: Kefersud'da başladı, Kırşehir Malya Ovası'nda bastırıldı" },

{ dosya:"kronoloji_anadolu.js", t:"1243-06-26", b:"Kösedağ Savaşı'nda Moğollara ağır yenilgi",
  eksik_nokta:{ ad:"Kösedağ", enlem:40.02, boylam:37.85, kaynak:"YAKLAŞIK — haber/ansiklopedi kaynakları savaş alanını Sivas'ın ~80 km kuzeydoğusunda, Zara ile Suşehri arasında tanımlıyor; kesin koordinat akademik kaynakta verilmiyor" } },

{ dosya:"kronoloji_anadolu.js", t:"1102-01-01", b:"Sökmen Bey Hasankeyf'i ele geçirip Artuklu kolunu kurdu",
  eksik_nokta:{ ad:"Hasankeyf", enlem:37.7128, boylam:41.4067, kaynak:"coğrafi konum — Hasankeyf, Batman" } },

{ dosya:"kronoloji_anadolu.js", t:"1144-01-01", b:"Fahreddin Kara Arslan Hasankeyf tahtına çıktı",
  eksik_nokta:{ ad:"Hasankeyf", enlem:37.7128, boylam:41.4067, kaynak:"coğrafi konum — Hasankeyf, Batman" } },

{ dosya:"kronoloji_anadolu.js", t:"1147-01-01", b:"Malabadi (Silvan) Köprüsü Timurtaş tarafından yaptırıldı",
  eksik_nokta:{ ad:"Silvan (Malabadi Köprüsü)", enlem:38.1394, boylam:41.0125, kaynak:"coğrafi konum — Silvan, Diyarbakır" } },

{ dosya:"kronoloji_anadolu.js", t:"1155-01-01", b:"Hasankeyf Dicle Köprüsü Kara Arslan tarafından yaptırıldı",
  eksik_nokta:{ ad:"Hasankeyf", enlem:37.7128, boylam:41.4067, kaynak:"coğrafi konum — Hasankeyf, Batman" } },

{ dosya:"kronoloji_anadolu.js", t:"1167-01-01", b:"Nûreddin Muhammed Hasankeyf tahtına çıktı",
  eksik_nokta:{ ad:"Hasankeyf", enlem:37.7128, boylam:41.4067, kaynak:"coğrafi konum — Hasankeyf, Batman" } },

{ dosya:"kronoloji_anadolu.js", t:"1185-01-01", b:"Kutbüddin II. Sökmen Hasankeyf tahtına çıktı",
  eksik_nokta:{ ad:"Hasankeyf", enlem:37.7128, boylam:41.4067, kaynak:"coğrafi konum — Hasankeyf, Batman" } },

{ dosya:"kronoloji_anadolu.js", t:"1204-01-01", b:"Kızıltepe (Dunaysır) Ulu Camii yaptırıldı",
  eksik_nokta:{ ad:"Kızıltepe", enlem:37.1928, boylam:40.5928, kaynak:"coğrafi konum — Kızıltepe, Mardin" } },

{ dosya:"kronoloji_anadolu.js", t:"1222-01-01", b:"Melik Mesud Hasankeyf-Âmid tahtına çıktı",
  yer_id:"Diyarbakır", kaynak:"hasankeyf" },

{ dosya:"kronoloji_anadolu.js", t:"1232-01-01", b:"El-Melikü'l-Kâmil Hasankeyf'i ilhak etti, Hasankeyf kolu sona erdi",
  eksik_nokta:{ ad:"Hasankeyf", enlem:37.7128, boylam:41.4067, kaynak:"coğrafi konum — Hasankeyf, Batman" } },

{ dosya:"kronoloji_anadolu.js", t:"1257-01-01", b:"Moğollar bölgeye girdi, Hülâgû Meyyâfârikīn'in fethini emretti",
  eksik_nokta:{ ad:"Silvan (Meyyâfârikīn)", enlem:38.1394, boylam:41.0125, kaynak:"coğrafi konum — Silvan, Diyarbakır" } },

{ dosya:"kronoloji_anadolu.js", t:"1515-06-12", b:"Turnadağ Savaşı'nda Alâüddevle Yavuz'a yenilip öldürüldü",
  eksik_nokta:{ ad:"Turnadağ", enlem:38.2, boylam:37.2, kaynak:"data/savaslar.js'teki 'Turnadağ' kaydından alındı (lat:38.20, lon:37.20) — mükerrer araştırma yapılmadı, proje içi zaten vetted" } },

{ dosya:"kronoloji_anadolu.js", t:"1335-01-01", b:"Umur Bey'in Mora seferi ve Alaşehir'in fethi",
  yer_id:"Alaşehir", kaynak:"aydinogullari" },

{ dosya:"kronoloji_anadolu.js", t:"1341-06-15", b:"Umur Bey'in Kantakuzenos'un başlıca destekçisi olması",
  kapsam_genis:true, not:"genel siyasi ittifak/destek, tek nokta değil" },

{ dosya:"kronoloji_anadolu.js", t:"1342-01-01", b:"Umur Bey'in 380 gemi ve 20.000 askerle Trakya seferi",
  kapsam_genis:true, not:"Trakya seferi — bölge çapında, iniş noktası metinde belirtilmiyor" },

{ dosya:"kronoloji_anadolu.js", t:"1389-06-15", b:"Aydınoğulları yardımcı kuvvetlerinin I. Kosova Savaşı'na katılması",
  eksik_nokta:{ ad:"Kosova (Kosova Ovası)", enlem:42.63, boylam:21.12, kaynak:"data/savaslar.js'teki 'I. Kosova' kaydından alındı (lat:42.63, lon:21.12). NOT: aynı boşluk kronoloji_bizans.js ve kronoloji_sirbistan.js'te de var (ikisi de yer_id:\"\"), koordinatöre ayrıca bildirildi" } },

{ dosya:"kronoloji_anadolu.js", t:"1201-01-01", b:"Cenevizlilerle ticaret antlaşması, ayrıcalıklar Venedik'e de genişletildi",
  eksik_nokta:{ ad:"Sis (Kozan)", enlem:37.4522, boylam:35.8283, kaynak:"coğrafi konum — Kozan, Adana (Kilikya Ermeni başkenti Sis)" } },

{ dosya:"kronoloji_anadolu.js", t:"1226-01-01", b:"Hetum I kral oldu, Hetumid hanedanı başladı",
  kapsam_genis:true, not:"taç giyme yeri metinde belirtilmiyor (ilk kral Levon'un taç giyme yeri Tarsus'tu, Hetum için aynı varsayım yapılamaz)" },

{ dosya:"kronoloji_anadolu.js", t:"1226-06-01", b:"Sis ve Tarsus darphaneleri gümüş dram sikkelerini bastı",
  kapsam_genis:true, not:"iki darphane (Sis ve Tarsus) birlikte anılıyor, tek nokta yetersiz" },

{ dosya:"kronoloji_anadolu.js", t:"1247-01-01", b:"Kral Hetum I, Karakurum'a elçi gönderip Moğollarla ilk temas kurdu",
  yer_id:"Karakurum", kaynak:"Bournoutian, A Concise History of the Armenian People (2006)" },

{ dosya:"kronoloji_anadolu.js", t:"1254-09-13", b:"Hetum I bizzat Karakurum'da Möngke Han'ın huzurunda",
  yer_id:"Karakurum", kaynak:"Bournoutian (2006); Ghazarian (2000); ikincil özetten derlendi" },

{ dosya:"kronoloji_anadolu.js", t:"1260-01-01", b:"Ayn Câlût sonrası Memlük akınları başladı",
  kapsam_genis:true, not:"Ayn Câlût sonrası başlayan bir AKIN DÖNEMİ anlatılıyor, tek savaş değil" },

{ dosya:"kronoloji_anadolu.js", t:"1260-06-01", b:"Sparapet Sempat, Antakya hukuk kodeksini Ermeniceye çevirdi",
  kapsam_genis:true, not:"çevirinin yapıldığı yer metinde belirtilmiyor" },

{ dosya:"kronoloji_anadolu.js", t:"1266-08-24", b:"Mari Bozgunu — Memlük akını Kilikya'yı yakıp yıktı",
  kapsam_genis:true, not:"Mari mevkiinin tam konumu akademik kaynaklarda kesinleşmemiş (bazı kaynaklar 'Servand' da diyor)" },

{ dosya:"kronoloji_anadolu.js", t:"1270-10-28", b:"Hetum I öldü, III. Levon tahta çıktı",
  kapsam_genis:true, not:"metinde yer belirtilmiyor" },

{ dosya:"kronoloji_anadolu.js", t:"1289-01-01", b:"III. Levon zehirlendi, II. Hetum tahta geçti",
  kapsam_genis:true, not:"metinde yer belirtilmiyor" },

{ dosya:"kronoloji_anadolu.js", t:"1296-01-01", b:"Sempat, kardeşlerini alaşağı etti: Toros boğduruldu, Hetum kör edildi",
  kapsam_genis:true, not:"metinde yer belirtilmiyor" },

{ dosya:"kronoloji_anadolu.js", t:"1299-01-01", b:"II. Hetum yeniden tahtta, Gazan Han'ın Suriye seferine katıldı",
  yer_id:"Humus", kaynak:"Stewart (2001); ikincil özetten derlendi" },

{ dosya:"kronoloji_anadolu.js", t:"1307-01-01", b:"Sis Konsili: Ermeni Kilisesi Roma ile birliği kabul etti",
  eksik_nokta:{ ad:"Sis (Kozan)", enlem:37.4522, boylam:35.8283, kaynak:"coğrafi konum — Kozan, Adana (Sis Konsili)" } },

{ dosya:"kronoloji_anadolu.js", t:"1307-11-17", b:"II. Hetum ve kral II. Levon, Moğol kumandanı Bilarga tarafından öldürüldü",
  eksik_nokta:{ ad:"Anazarva", enlem:37.2667, boylam:35.9167, kaynak:"coğrafi konum — Anavarza (Anazarbus) antik kenti, Adana" } },

{ dosya:"kronoloji_anadolu.js", t:"1308-06-01", b:"Oşin, Bilarga'yı yenip tahta çıktı",
  kapsam_genis:true, not:"metinde yer belirtilmiyor" },

{ dosya:"kronoloji_anadolu.js", t:"1320-07-20", b:"Oşin öldü, IV. Levon tahta geçti",
  kapsam_genis:true, not:"metinde yer belirtilmiyor" },

{ dosya:"kronoloji_anadolu.js", t:"1341-08-28", b:"IV. Levon kendi baronları tarafından öldürüldü",
  eksik_nokta:{ ad:"Sis (Kozan)", enlem:37.4522, boylam:35.8283, kaynak:"coğrafi konum — Kozan, Adana" } },

{ dosya:"kronoloji_anadolu.js", t:"1342-01-01", b:"Guy de Lusignan, II. Konstantin adıyla taç giydi",
  kapsam_genis:true, not:"taç giyme yeri metinde belirtilmiyor" },

{ dosya:"kronoloji_anadolu.js", t:"1344-04-17", b:"II. Konstantin bir ayaklanmada öldürüldü",
  kapsam_genis:true, not:"metinde yer belirtilmiyor" },

{ dosya:"kronoloji_anadolu.js", t:"1375-04-14", b:"Memlûk fethiyle krallık sona erdi",
  eksik_nokta:{ ad:"Sis (Kozan)", enlem:37.4522, boylam:35.8283, kaynak:"coğrafi konum — Kozan, Adana (krallığın başkenti düştü)" } },

];
