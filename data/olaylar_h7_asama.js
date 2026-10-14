// ============================================================================
// KRONOLOJİ — SAVAŞIN BEŞ AŞAMASI: AVUSTURYA VE İRAN SAVAŞLARINDA EKSİK HALKALAR
// ============================================================================
// Yazan: KUTU-H7-1015 · 15 Ekim 2026 · kutu 0068/H-0006 (Emre: her savaşta
//   ① savaşa giden süreç ② "savaş başladı" ③ savaş olayları ④ savaşın sonu
//   ⑤ barış antlaşması maddesi olmalı; ①+② ve ④+⑤ birleşebilir).
// Ölçüm (savaş pencereleri, çekirdek OLAYLAR* + KRONOLOJI_SINIR* + ANTLASMALAR):
//   1551-62 Habsburg savaşında ⑤ yoktu · 1565-68 savaşında ② ve ⑤ yoktu ·
//   1603-12 İran savaşında ③ (Cigalazâde seferi, 1605 bozgunu, Kuyucu 1610)
//   eksikti · 1615-18 İran savaşında yalnız ⑤ (Serav) vardı · 1730-36'da Topal
//   Osman'ın Bağdat imdadı yoktu · 1743-46'da ② ve ③ (Kars 1744, Kağaverd 1745)
//   yoktu. Bu dosya o halkaları yazar.
// AD ALANI: data/olaylar_h7_asama.js → window.OLAYLAR_H7_ASAMA
// KAYNAK: hepsi TDV, gövdeler 15 Ekim 2026'da çekilip okundu (alıntılar
//   ic_not_kaynak alanında). Hicrî tarihler CLAUDE.md kuralıyla: hicrî aralık
//   ∩ kaynağın mîlâdî yılı/ayı — kesişimin İLK GÜNÜ; seçim ic_not_gun'da.
// TOPRAK: bu maddelerin hiçbiri `toprak-*` etiketi taşımaz — sınır
//   değiştirmezler (kuşatma kalkar, sefer çıkar, barış savaş öncesini teyit
//   eder). Toprak değişimi olan halkalar (Revan 1604, Gence 1606, Şirvan 1607
//   vb.) zaten çekirdekte vardı.
// ============================================================================
window.OLAYLAR_H7_ASAMA = [

// ── 1551-1562 Habsburg savaşı: ⑤ ─────────────────────────────────────────
{ t:"1562-05-05", kesinlik:"ay", k:"antlasma", etiket:["antlasma","diplomasi","konu-diplomasi"],
  b:"Habsburglarla barışın yenilenmesi — Erdel ve Temeşvar savaşının sonu",
  gun:"Ramazan 969 (Mayıs 1562) — gün kaynakta yok",
  ic_not_gun:"Hicrî kural: Ramazan 969 = Jülyen 5 Mayıs - 3 Haziran 1562; kaynağın ayı Mayıs 1562; kesişimin ilk günü 1562-05-05 (TDV bu dönemde Jülyen verir: suleyman-i '11 Şevval 973 (1 Mayıs 1566)' Jülyen'dir). Barışın imza günü TDV'de yok.",
  yer:"İstanbul", yer_id:"İstanbul", kisiler:"Kanunî Sultan Süleyman, I. Ferdinand",
  d:"1551'de Erdel'in Ferdinand'a geçmesiyle başlayan ve Temeşvar'ın fethi, Eğri kuşatması gibi seferlerle süren savaş, Habsburglarla olan barışın devamına karar verilmesiyle kapandı. Anlaşma iki tarafın eski taahhütlerini karşılıklı olarak yeniliyordu; ama sınır boylarındaki karışıklıklara bir çözüm getirmedi ve Ferdinand'ın 1564'teki ölümünden sonra Erdel'deki olaylar yeniden arttı.",
  ic_not_kaynak:"TDV suleyman-i: '969 Ramazanında (Mayıs 1562) Habsburglar’la olan barışın devamı kararı alınınca sükûnet ortamının süreceği sanılmıştı' · 'Habsburglar’la yapılan 1562 anlaşması eski taahhütleri karşılıklı olarak yeniliyordu, fakat sınır boylarındaki karışıklıklara herhangi bir çözüm getirmemişti. 1564’te İmparator Ferdinand ölüp yerine II. Maximilian geçince Erdel olayları arttı'",
  kaynak:"suleyman-i (TDV)", duygu:["🤝"] },

// ── 1565-1568 Habsburg savaşı: ①+② ve ⑤ ──────────────────────────────────
{ t:"1566-05-01", k:"sefer", etiket:["savas","konu-askeri"],
  b:"Kanunî'nin son seferi — Sigetvar ve Eğri hedefiyle İstanbul'dan çıkış",
  gun:"11 Şevval 973 (1 Mayıs 1566)",
  yer:"İstanbul → Edirne → Belgrad", yer_id:"İstanbul", kisiler:"Kanunî Sultan Süleyman, Sokullu Mehmed Paşa",
  d:"Ferdinand'ın 1564'te ölümü ve II. Maximilian'ın tahta geçmesinden sonra Erdel sınırında çatışmalar artmıştı. Yaşlı padişah Sokullu Mehmed Paşa ile planladığı seferde hedef Sigetvar ve Eğri kaleleri olacak, imparatora da gözdağı verilecekti. Eyüp Sultan Türbesi'nde dua ettikten sonra büyük törenle İstanbul'dan ayrıldı; 15 Mayıs'ta Edirne'ye vardı, hareketinin ellinci gününde Belgrad'a ulaştı. Bu, bir daha göremeyeceği başşehirden son çıkışıydı.",
  ic_not_kaynak:"TDV suleyman-i: 'Hedef Sigetvar ve Eğri kaleleri olacak, ayrıca imparatora gözdağı verilecekti ... 11 Şevval 973’te (1 Mayıs 1566) büyük törenlerle at üzerinde olduğu halde başşehirden ayrıldı. 15 Mayıs’ta Edirne’ye vardı' · '1564’te İmparator Ferdinand ölüp yerine II. Maximilian geçince Erdel olayları arttı'",
  kaynak:"suleyman-i (TDV)", duygu:["⚔️"] },

{ t:"1568-02-17", k:"antlasma", etiket:["antlasma","diplomasi","konu-diplomasi"],
  b:"Edirne Antlaşması — Habsburglarla savaş durumunun sonu",
  gun:"17 Şubat 1568",
  yer:"Edirne", yer_id:"Edirne", kisiler:"II. Selim, Sokullu Mehmed Paşa, II. Maximilian",
  d:"Sigetvar seferinden sonra Edirne'de kışlayan II. Selim'in huzurunda Habsburg, Safevî, Leh, Fransız ve Venedik elçileri bulunuyordu. Safevîlerle barışın sürmesine karar verildi; Habsburglarla aradaki savaş durumuna son veren antlaşma imzalandı. Bu işlerde sadrazam Sokullu Mehmed Paşa'nın etkisi büyüktü.",
  ic_not_kaynak:"TDV selim-ii: 'Safevîler’le mevcut barış halinin devamına karar verildi. Habsburglar’la aradaki savaş durumuna son veren antlaşma imzalandı (17 Şubat 1568).'",
  kaynak:"selim-ii (TDV)", duygu:["🤝"] },

// ── 1603-1612 İran savaşı: ③ ─────────────────────────────────────────────
{ t:"1604-06-15", k:"sefer", etiket:["savas","konu-askeri"],
  b:"Cigalazâde Sinan Paşa İran seferine çıktı",
  gun:"15 Haziran 1604",
  yer:"İstanbul → Kars", yer_id:"Kars", kisiler:"Cigalazâde Sinan Paşa, I. Ahmed, Şah I. Abbas",
  d:"İran ve Avusturya ile iki cepheli savaş sürerken Şah Abbas Revan'ı kuşatarak almış, Kars'a girmiş, ancak Ahıska önlerinde durdurulabilmişti. Şark serdarı tayin edilen Cigalazâde Sinan Paşa İstanbul'dan gecikmiş olarak hareket etti ve 8 Kasım'da Kars önlerine vardı. Durum uygun olduğu halde şahın üzerine gitmeyip Van'da kışladı, şahın taarruzu üzerine Erzurum'a geçti; bir sefer mevsimi boşa gitti.",
  ic_not_kaynak:"TDV ahmed-i: 'Sinan Paşa 15 Haziran 1604’te İstanbul’dan gecikmiş olarak hareket etti ve 8 Kasım’da Kars önlerine vardı.' · TDV cigalazade-sinan-pasa: '1604’te I. Ahmed tarafından yeniden İran seferiyle görevlendirildi'",
  kaynak:"ahmed-i (TDV) · cigalazade-sinan-pasa (TDV)", duygu:["⚔️"] },

{ t:"1605-11-06", k:"savas", etiket:["savas","konu-askeri"],
  b:"Cigalazâde Sinan Paşa'nın Urmiye gölü yakınında (Sûfiyân) bozgunu",
  gun:"1605 sefer mevsimi — gün komşudan: kronoloji_safevi.js 1605-11-06 'Sufiyan Muharebesi' (kendi kaynağı: Cambridge History of Iran, c. 6)",
  ic_not_gun:"TDV ahmed-i ve cigalazade-sinan-pasa yalnız '1605' der; gün TDV'de yok. Gün, aynı olayı tarihleyen komşu kayıttan (kronoloji_safevi.js, Cambridge History of Iran c.6) alındı — o kaydın günü kendi kaynağına dayanıyor; zincirleme devralma yok. TDV cigalazade-sinan-pasa: kaynaklardaki 'Kasım 1605' ölüm tarihi doğrulanmıyor, ölüm 1606 Şubatı başı.",
  yer:"Urmiye gölü yakını → Van → Diyarbekir", yer_id:"Tebriz", kisiler:"Cigalazâde Sinan Paşa, Şah I. Abbas, Köse Sefer Paşa, Canbolatoğlu Hüseyin Paşa",
  d:"1605 sefer mevsiminde Tebriz'i geri almak için yürüyen Sinan Paşa'nın durumu, Erzurum beylerbeyi Köse Sefer Paşa'nın esas ordudan ayrı hareket edip esir düşmesiyle sarsıldı. Şah Abbas'ın ani baskını orduyu Urmiye gölü civarında ağır bir yenilgiye uğrattı; Sinan Paşa önce Van'a, sonra Diyarbekir'e çekildi. Yardıma geç kaldı diye Halep beylerbeyi Canbolatoğlu Hüseyin Paşa'yı idam ettirmesi Anadolu'da büyük bir isyanı tutuşturdu; Sinan Paşa'nın ölümünden sonra Şah Abbas Gence, Şirvan ve Şamahı'yı aldı.",
  ic_not_kaynak:"TDV ahmed-i: '1605 sefer mevsiminde tekrar ordunun başında hareket eden Sinan Paşa Tebriz’i geri almak üzere yürüdü. Ancak Erzurum Beylerbeyi Köse Sefer Paşa’nın esas ordudan ayrı hareket edip esir düşmesi ... ordu Şah Abbas’ın âni baskını üzerine mağlûp olarak Van’a, sonra da Diyarbekir’e çekildi.' · TDV cigalazade-sinan-pasa: Urmiye gölü civarında ağır yenilgi.",
  kaynak:"ahmed-i (TDV) · cigalazade-sinan-pasa (TDV)", duygu:["😔"] },

{ t:"1610-03-26", kesinlik:"yil", k:"sefer", etiket:["savas","konu-askeri"],
  b:"Kuyucu Murad Paşa'nın Tebriz seferi — Acıçay'da karşılaşma olmadı",
  gun:"1019 (1610) — ay ve gün kaynakta yok",
  ic_not_gun:"Hicrî kural: 1019 = 26 Mart 1610 - 14 Mart 1611 (Gregoryen); kaynağın mîlâdî yılı 1610; kesişimin ilk günü 1610-03-26. Seferin çıkış ve Tebriz'e varış günü TDV'de yok.",
  yer:"Erzurum → Çaldıran → Hoy → Tebriz", yer_id:"Tebriz", kisiler:"Kuyucu Murad Paşa, Şah I. Abbas",
  d:"Celâlî isyanlarını bastırıp Anadolu'da sükûneti sağlayan sadrazam Kuyucu Murad Paşa, Tebriz'de beklediği haber alınan Şah Abbas'ın üzerine Erzurum, Hasankale, Çaldıran ve Hoy yoluyla yürüdü. İki ordu Tebriz'in kuzeyinde Acıçay mevkiinde karşı karşıya geldi ama çarpışma olmadı; mektuplaşma sürdü. Kışın yaklaşması, mühimmat ve erzak darlığı üzerine paşa Ahlat, Van ve Bitlis üzerinden Diyarbekir'e çekildi ve ertesi yaz yeni sefer hazırlığındayken orada öldü (5 Ağustos 1611).",
  ic_not_kaynak:"TDV ahmed-i: 'Murad Paşa 1610’da Tebriz’de bulunan Şah Abbas üzerine yürüdü. Ancak karşılaşma olmadı ve kışlamak üzere Diyarbekir’e çekilen Murad Paşa burada öldü (1611).' · TDV kuyucu-murad-pasa: 1019 (1610) seferi; Acıçay; '25 Cemâziyelevvel 1020’de (5 ağustos 1611) Cülek’te vefat etti'",
  kaynak:"ahmed-i (TDV) · kuyucu-murad-pasa (TDV)", duygu:["⚔️"] },

// ── 1615-1618 İran savaşı: ①+②, ③ ─────────────────────────────────────────
{ t:"1615-04-23", k:"sefer", etiket:["savas","konu-askeri"],
  b:"Osmanlı-Safevî savaşı yeniden başladı — Sadrazam Öküz Mehmed Paşa Şark seferine çıktı",
  gun:"23 Rebîülevvel 1024 (23 Nisan 1615)",
  yer:"Üsküdar", yer_id:"Üsküdar", kisiler:"Öküz (Damad) Mehmed Paşa, I. Ahmed, Şah I. Abbas",
  d:"1612 Nasuh Paşa Antlaşması'ndan sonra İran'a elçi olarak gönderilen İncili Mustafa Çavuş'tan haber gelmeyince, sadrazam Mehmed Paşa Şark seferiyle görevlendirildi ve hazırlıklarını tamamlayıp Üsküdar'a geçti. Tam yola çıkarken İncili Çavuş ile İran elçisi Burun Kāsım Han'ın anlaşma ve hediyelerle Van'a ulaştığı haberi geldi, ama sefer ertelenmedi. Sadrazam kışı Halep'te geçirdi.",
  ic_not_kaynak:"TDV mehmed-pasa-damad: 'İran’a elçi olarak gönderilen İncili Mustafa Çavuş’tan bir haber gelmeyince Şark seferine çıkmakla görevlendirilen Mehmed Paşa, gerekli hazırlıkları tamamladıktan sonra 23 Rebîülevvel 1024’te (23 Nisan 1615) Üsküdar’a geçti ... sefer ertelenmedi.'",
  kaynak:"mehmed-pasa-damad (TDV)", duygu:["⚔️"] },

{ t:"1616-09-12", kesinlik:"ay", k:"kusatma", etiket:["savas","konu-askeri"],
  b:"Revan kuşatması — elli beş gün sonra sonuçsuz kaldırıldı",
  gun:"Ramazan 1025 (Eylül 1616) — orduların Revan önüne varışı; gün kaynakta yok",
  ic_not_gun:"Hicrî kural: Ramazan 1025 = 12 Eylül - 11 Ekim 1616 (Gregoryen); kaynağın ayı Eylül 1616; kesişimin ilk günü 1616-09-12.",
  yer:"Revan (Erivan)", yer_id:"Revan", kisiler:"Öküz (Damad) Mehmed Paşa, Muslu Ağa, Tekeli Mehmed Paşa",
  d:"Nisan 1616'da Halep'ten büyük bir orduyla çıkan sadrazam Erzurum-Kars yoluyla Revan önlerine ulaştı. Kalenin kolayca teslim olacağı düşüncesiyle ağır toplar getirilmemişti; kuşatma malzemesizlik içinde elli beş gün sürdü. Yeniçeri ağası Muslu Ağa ile Tekeli Mehmed Paşa'nın şehit düşmesi, askerin isteksizliği ve mevsimin ilerlemesi üzerine kuşatma kaldırıldı, ordu Erzurum'a çekildi. Mehmed Paşa Kasım 1616'da azledildi, yerine Halil Paşa geldi.",
  ic_not_kaynak:"TDV mehmed-pasa-damad: 'Erzurum-Kars yoluyla Revan önlerine ulaştı (Ramazan 1025 / Eylül 1616)' · 'Elli beş gün süren Revan muhasarası esnasında büyük zorluk çekildi' · TDV ahmed-i: 'Nisan 1616’da Halep’ten büyük bir orduyla hareket eden Mehmed Paşa ... Revan’ı kuşattı'",
  kaynak:"mehmed-pasa-damad (TDV) · ahmed-i (TDV)", duygu:["😔"] },

{ t:"1618-09-10", k:"savas", etiket:["savas","konu-askeri"],
  b:"Serav (Pul-i Şikeste) bozgunu — Halil Paşa'nın İran seferi",
  gun:"10 Eylül 1618",
  yer:"Tebriz-Erdebil arası, Pul-i Şikeste", yer_id:"Erdebil", kisiler:"Halil Paşa, Dilâver Paşa, Şah I. Abbas",
  d:"Öküz Mehmed Paşa'nın yerine serdar olan Halil Paşa 1618'de yeniden İran üzerine yürüdü. Tebriz ile Erdebil arasındaki Pul-i Şikeste mevkiinde yapılan savaş Osmanlı ordusunun yenilgisiyle sonuçlandı. Kaynaklarda Serav Savaşı diye de anılan bu bozgunun ardından aynı ay Serav Antlaşması imzalandı.",
  ic_not_kaynak:"TDV dilaver-pasa (Nezihi Aykut): Serav Savaşı 10 Eylül 1618, Tebriz-Erdebil arasında Pulişikeste mevkii, Osmanlı yenilgisi; Serav Antlaşması 26 Eylül 1618; Dilâver Paşa 1616 Revan seferinde ve Halil Paşa'nın 1618 İran seferinde bulundu.",
  kaynak:"dilaver-pasa (TDV)", duygu:["😔"] },

// ── 1730-1736 İran savaşı: ③ ─────────────────────────────────────────────
{ t:"1733-07-19", k:"savas", etiket:["savas","konu-askeri"],
  b:"Topal Osman Paşa Nâdir'i Dücum'da yendi — Bağdat kuşatması kalktı",
  gun:"19 Temmuz 1733",
  ic_not_gun:"TDV topal-osman-pasa--sadrazam savaşı 19 Temmuz 1733'e koyar; TDV nadir-sah--iran Nâdir'in yaralı olarak Hemedan'a dönüşünü '7 Safer 1146 / 20 Temmuz 1733' diye verir — savaşın günü sadrazamın kendi maddesinden alındı.",
  yer:"Dücum, Sâmerrâ yakını — Bağdat", yer_id:"Sâmerrâ", kisiler:"Topal Osman Paşa, Nâdir (Tahmasb Kulı Han), Bağdat valisi Ahmed Paşa",
  d:"Ocak 1733'te Bağdat'ı kuşatan Nâdir'e karşı, Bağdat'a yardıma gönderilen Topal Osman Paşa kumandasındaki ordu Sâmerrâ yakınındaki Dücum'da Nâdir'in kuvvetlerini bozdu; yaralanan Nâdir Hemedan'a çekildi, aylardır süren kuşatma kalktı. Ama zafer kısa sürdü: Nâdir aynı yılın sonunda yeniden Irak'a girip Kerkük'ün kuzeyinde Akderbend'de Osmanlı kuvvetlerini yendi; Topal Osman Paşa bu savaşlar sırasında hayatını kaybetti ve Kerkük'te defnedildi.",
  ic_not_kaynak:"TDV topal-osman-pasa--sadrazam: Dücum (Sâmerrâ yakını) zaferi 19 Temmuz 1733; Nâdir'in Kerkük cephesindeki başarısı Kasım 1733; Kerkük'te İmam Kāsım Camii türbesine defin · TDV nadir-sah--iran: 'Bağdat’a yürüyüp şehri kuşattı (Receb 1145 / Ocak 1733). Ancak yardıma gelen Erzurum Valisi Topal Osman Paşa kumandasındaki Osmanlı askerleri karşısında dayanamayıp yaralı olarak Hemedan’a döndü (7 Safer 1146 / 20 Temmuz 1733). Aynı yılın aralık ayında yeniden Irak seferine çıktı, Kerkük’ün kuzeyinde Akderbend mevkiinde Osmanlı kuvvetlerini yenerek...'",
  kaynak:"topal-osman-pasa--sadrazam (TDV) · nadir-sah--iran (TDV)", duygu:["🎉"] },

// ── 1743-1746 İran savaşı: ①+②, ③ ─────────────────────────────────────────
{ t:"1743-02-25", kesinlik:"yil", k:"sefer", etiket:["savas","konu-askeri"],
  b:"Nâdir Şah'ın Irak seferi — son Osmanlı-İran savaşı başladı, Kerkük düştü",
  gun:"1156 (1743) — ay ve gün kaynakta yok",
  ic_not_gun:"Hicrî kural: 1156 = 25 Şubat 1743 - 14 Şubat 1744 (Gregoryen); kaynağın yılı 1743; kesişimin ilk günü 1743-02-25. Kerkük'ün düşüş günü TDV'de yok; Musul kuşatması 8 Şâban 1156 / 27 Eylül 1743 (ayrı madde, olaylar_ek5.js 1743-10-23).",
  yer:"Kerkük, Musul", yer_id:"Kerkük", kisiler:"Nâdir Şah",
  d:"Dağıstan ve Gürcistan'da on sekiz ay kalan Nâdir Şah, Caferîliğin beşinci mezhep olarak tanınması isteği Osmanlılarca reddedilmiş olarak, 1743'te Osmanlılara karşı yeni bir sefer başlattı ve büyük bir orduyla Kerkük'e girdi. Aynı başarıyı Musul'da gösteremedi; kuşatmayı kaldırmak zorunda kaldı. Bu savaş, 1746 Kerden Antlaşması'yla biten son Osmanlı-İran savaşıdır.",
  ic_not_kaynak:"TDV nadir-sah--iran: 'on sekiz ay kadar bölgede kaldıktan sonra 1156’da (1743) Osmanlılar’a karşı yeni bir sefer başlatıp 400.000 kadar olduğu rivayet edilen ordusuyla Kerkük’e girdi. Ancak aynı başarıyı Musul’da gösteremedi. 8 Şâban 1156’da (27 Eylül 1743) başlattığı kuşatmayı bir hafta sonra kaldırmak mecburiyetinde kaldı.' · Caferî mezhebi isteği ve reddi aynı maddede.",
  kaynak:"nadir-sah--iran (TDV)", duygu:["⚔️"] },

{ t:"1744-07-29", k:"kusatma", etiket:["savas","konu-askeri"],
  b:"Nâdir Şah'ın Kars kuşatması — iki ay sürdü, sonuç alamadı",
  gun:"18 Cemâziyelâhir 1157 (29 Temmuz 1744)",
  yer:"Kars", yer_id:"Kars", kisiler:"Nâdir Şah, Şehzade Sâfî Mirza",
  d:"Osmanlılara sığınmış Safevî şehzadesi Sâfî Mirza İran tahtında hak iddia ediyordu; plana göre Kars seraskeri onu Tebriz üzerinden İsfahan'a götürüp tahta çıkaracaktı ve Osmanlılar İran'a üç cephe açmıştı. Bunun üzerine Nâdir Şah Kars'a yürüyüp kaleyi kuşattı. İki ay süren kuşatmadan bir sonuç alamadı.",
  ic_not_kaynak:"TDV nadir-sah--iran: 'Nâdir Şah bu gelişmeler üzerine Kars’a yürüyüp kaleyi kuşattı (18 Cemâziyelâhir 1157 / 29 Temmuz 1744). İki ay süren bu kuşatmadan bir sonuç alamadı.'",
  kaynak:"nadir-sah--iran (TDV)", duygu:["🏰"] },

{ t:"1745-08-21", k:"savas", etiket:["savas","konu-askeri"],
  b:"Kağaverd bozgunu — Yeğen Mehmed Paşa'nın ordusu dağıldı",
  gun:"23 Receb 1158 (21 Ağustos 1745)",
  yer:"Kağaverd mevkii", yer_id:"Kars", ic_not_yer:"TDV mevkiin yerini tarif etmiyor; yer_id kampanyanın merkezi Kars'tır (kuşatma 1744), savaş alanı değildir.", kisiler:"Yeğen Mehmed Paşa, Nâdir Şah",
  d:"Kars kuşatmasının ertesi yılı Nâdir Şah, Kağaverd mevkiinde Yeğen Mehmed Paşa idaresindeki Osmanlı kuvvetlerini bozguna uğrattı. Ardından İsfahan'a döndü. Caferîliğin tanınması konusundaki ısrarından vazgeçmesi ertesi yıl Kerden Antlaşması'nın yolunu açtı.",
  ic_not_kaynak:"TDV nadir-sah--iran: 'Ancak 23 Receb 1158’de (21 Ağustos 1745) Kağaverd mevkiinde Yeğen Mehmed Paşa idaresindeki Osmanlı kuvvetlerini bozguna uğrattı. Ardından İsfahan’a dönerek...' · 'Caferî mezhebinin Osmanlılar’ca tanınması hususundaki ısrarından vazgeçerek 17 Şâban 1159 (4 Eylül 1746) tarihinde Osmanlılar’la bir antlaşma yaptı (Kerden Antlaşması).'",
  kaynak:"nadir-sah--iran (TDV)", duygu:["😔"] }

];
