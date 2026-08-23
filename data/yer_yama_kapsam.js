// =====================================================================
// YER YAMASI -- 8 kronoloji maddesi YANLIS DEVLETIN haritasini aciyordu
// Oturum: SONNET HAZIR KITA 73 -- 23 Agustos 2026 (M-1183)
// Gorev: OSMANGAZI. Bu dosyaya SADECE bu oturum yazar.
// kapsam_genis:true tasiyan olaylar*.js maddeleri varsayilan olarak
// Osmanli sinirlarina aciliyordu; bu 8 madde BASKA bir devletle ilgili.
// Her kayit icin: yer_id (havuzda var) / eksik_nokta (yer belli, havuzda
// yok) / kapsam_genis (gercekten tek noktaya sigmiyor, DEVLET: ile hangi
// devletin sinirlarinin acilmasi gerektigi belirtildi).
// =====================================================================

window.YER_YAMA_KAPSAM = [
{ dosya:"olaylar_ek7.js", t:"1335-12-01", b:"İlhanlı Devleti'nin dağılması: Ebû Said Bahadır Han'ın ölümü",
  eksik_nokta:{ ad:"Sultaniye", enlem:36.43, boylam:48.79, kaynak:"TDV ilhanlılar maddesi devletin dağıldığını anlatıyor ama Ebû Said'in ölüm yerini vermiyor; standart akademik kaynaklara göre (Encyclopaedia Iranica, İlhanlı tarihi) Ebû Said Karabağ'da öldü, ama Karabağ geniş/belirsiz bir bölge adı olduğundan devletin bilinen son başkenti Sultâniye'yi seçtim" },
  not:"Ebû Said'in ölümü Karabağ'da; devletin merkezi Sultâniye" },

{ dosya:"olaylar_ek7.js", t:"1387-11-01", b:"Timur'un İran'ın büyük bölümünü hakimiyeti altına alması",
  kapsam_genis:true, not:"DEVLET: timurlu — TDV timur maddesi 'Horasan, Mâzenderan, İran'ın iç bölgeleri' diyor; 1386-1388 üç yıllık sefer boyunca çok sayıda şehir alındı (Serbedârîler, Kertler, Muzafferîler tek tek tasfiye edildi), tek nokta yok. Harita Timurlu'nun genişleyen sınırlarını açmalı; Osmanlı ile hiç ilgisi yok." },

{ dosya:"olaylar_ek5.js", t:"1771-07-01", b:"Kırım yarımadasının Rus işgali",
  yer_id:"Bahçesaray", kaynak:"madde metni: Rus kuvvetleri Or Kapı'yı aşıp yarımadayı istilâ etti ve Rus yanlısı Sâhib Giray'ı hanlığın başkenti Bahçesaray'da başa geçirdi — olayın siyasî ağırlık merkezi orası" },

{ dosya:"olaylar_ek5.js", t:"1775-05-07", b:"Bukovina'nın (Kuzey Boğdan) Avusturya'ya terki",
  yer_id:"İstanbul", kaynak:"standart akademik kaynak — 1775 Bukovina Sözleşmesi (Osmanlı-Habsburg), İstanbul'da imzalandı, 7 Mayıs 1775 — madde tarihiyle birebir örtüşüyor" },

{ dosya:"olaylar.js", t:"1853-10", b:"Kırım Savaşı başladı",
  yer_id:"İstanbul", kaynak:"madde metninin kendisi: \"gün: 4 Ekim 1853 (savaş ilanı) ... Osmanlı'nın savaş ilanıyla açık çatışmaya dönüştü\" — ilan İstanbul'dan (Bâb-ı Âlî) yapıldı" },

{ dosya:"olaylar_ek14.js", t:"1859-06-01", b:"Kırım Tatarları ve Kafkas halklarının Osmanlı topraklarına büyük göç dalgasının başlaması",
  kapsam_genis:true, not:"DEVLET: osmanli — ama coğrafî olarak DİFÜZ: kaynak Kafkasya/Kırım, hedef Osmanlı'nın çok sayıda Karadeniz+Rumeli limanı (Trabzon, Samsun, Varna, Köstence...), madde metninin kendisi 'bu göç dalgası 1877-78'e kadar sürdü' diyor -- yıllarca süren çok noktalı bir süreç, tek nokta yok. Tetikleyici olay (Şeyh Şâmil'in esir düşmesi) Gunib'de (Dağıstan) oldu ama maddenin konusu esir düşme değil GÖÇ olduğu için Gunib'i zorlamadım." },

{ dosya:"olaylar_ek10.js", t:"1877-04-24", b:"Rusya'nın savaş ilânı — Doksanüç Harbi'nin başlaması",
  eksik_nokta:{ ad:"Kişinev (Chișinău)", enlem:47.0105, boylam:28.8638, kaynak:"standart akademik kaynak — TDV doksanuc-harbi maddesi ilan yerini belirtmiyor (dış kaynak kullanıldığını açıkça belirtiyorum); Çar II. Aleksandr savaş beyannamesini birliklerini denetlediği Kişinev'de (Besarabya) okuttu, 24 Nisan 1877 — madde tarihiyle birebir" },
  not:"undefined" },

{ dosya:"olaylar_ek5.js", t:"1899-11-27", b:"Konya-Bağdat hattı imtiyazının Almanlara verilmesi",
  yer_id:"İstanbul", kaynak:"madde metni: imtiyaz Osmanlı hükümetince (Bâb-ı Âlî, İstanbul) Anadolu Demiryolu Şirketi'ne verildi" },

];
