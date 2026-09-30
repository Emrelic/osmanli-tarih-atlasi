// ============================================================================
// KRONOLOJİ — 500-1000 KUŞAĞI (çok taraflı) · DEVLET-500-1000 · 30 Eylül 2026
// ----------------------------------------------------------------------------
// Desen: window.KRONOLOJI_COK_* (js/app.js cokTarafliKronolojiEkle) — her madde
// taraflar[]'daki HER künyeye eklenir. Künye önerisi:
// denetim/DEVLET-500-1000-KUNYE.json (künye-içi iskelet maddeleri BURADA TEKRARLANMAZ).
// Kaynak: TDV İslâm Ansiklopedisi; alıntılar denetim/DEVLET-500-1000-tdv-onbellek/
// gövdelerinden birebir. Gün yalnız kaynak gün verdiğinde; ay biliniyorsa
// YYYY-01-01 + gun: alanında ay (CLAUDE.md §8). Odak: yer_id — her ad
// girdi.yukle() `sehirler` havuzunda ölçüldü (denetim/ARAC-DEVLET-500-1000-YER.py).
// Haritada bugün GÖRÜNMEZ: motor ufku 1281 (arac/girdi.py UFUK) — kusur değil.
// ============================================================================
window.KRONOLOJI_COK_500_1000 = [
  { t:"0637-01-01", k:"fetih", b:"Halep ve Kuzey Suriye şehirleri müslümanlara geçti",
    gun:"16 H. / 637 (TDV yıl verir)", yer:"Halep", yer_id:"Halep",
    d:"Yermük zaferinden sonra Suriye Bizans'ın elinden çıktı; 637'de Şeyzer, Kınnesrîn ve Halep, bir yıl sonra Antakya alındı.",
    kaynak:"TDV: hulefa-yi-rasidin — '16’da (637) Şeyzer, Kınnesrîn, Halep, bir yıl sonra Antakya'",
    taraflar:["hulefa-yi-rasidin","bizans"], etiket:["toprak-kazanc","konu-askeri"] },

  { t:"0642-01-01", k:"savas", b:"Nihâvend Savaşı: Sâsânî ordusu yenildi",
    gun:"21 H. / 642 (TDV yıl verir)", yer:"Nihâvend", yer_id:"Nihâvend", kisiler:"III. Yezdicerd",
    d:"Kādisiye'den sonra Nihâvend'de de yenilen Sâsânîler'in son hükümdarı III. Yezdicerd doğuya çekilip topraklarını peyderpey teslim etmek zorunda kaldı.",
    kaynak:"TDV: sasaniler — 'Nihâvend (21/642) savaşlarında Sâsânîler’i yenilgiye uğratarak'",
    taraflar:["hulefa-yi-rasidin","sasani"], etiket:["toprak-kazanc","konu-askeri"] },

  { t:"0652-01-01", k:"savas", b:"Selmân b. Rebîa Derbend'i aşıp Hazar başşehri Belencer'e kadar ilerledi",
    gun:"32 H. / 652-53 (TDV yıl verir)", yer:"Derbend (Bâbülebvâb)", yer_id:"Derbend", kisiler:"Selmân b. Rebîa",
    d:"Hazarlar'a yönelik ilk önemli İslâm hücumunda Selmân b. Rebîa Derbend Geçidi'ni aştı, başşehir Belencer'e kadar sokuldu; Hazarlar bu orduyu yenip geri çevirdi.",
    kaynak:"TDV: hazarlar — 'ilk önemli hücum ise 32 (652-53) yılında Selmân b. Rebîa kumandasındaki ordu'",
    ic_not_t:"Hicrî 32 iki milâdî yıla düşer (652-53); ilk yıl yazıldı.",
    taraflar:["hulefa-yi-rasidin","hazar-kaganligi"], etiket:["konu-askeri"] },

  { t:"0656-01-01", k:"catisma", b:"Cemel Vak'ası: Hz. Ali Basra önünde üstün geldi",
    gun:"36 H. / 656 (TDV yıl verir)", yer:"Basra", yer_id:"Basra", kisiler:"Hz. Ali · Hz. Âişe",
    d:"Hz. Âişe'nin liderliğinde Basra'ya giden muhaliflerle Hz. Ali arasındaki çarpışmada birçok müslüman öldü, Hz. Ali galip geldi.",
    kaynak:"TDV: hulefa-yi-rasidin — 'Cemel Vak‘ası vuku buldu (36/656)'",
    taraflar:["hulefa-yi-rasidin"], etiket:["konu-askeri"] },

  { t:"0680-10-10", k:"catisma", b:"Kerbelâ: Hz. Hüseyin ve beraberindekiler katledildi",
    gun:"10 Muharrem 61 / 10 Ekim 680", yer:"Kerbelâ", yer_id:"Kerbelâ", kisiler:"Hz. Hüseyin · Ubeydullah b. Ziyâd",
    d:"Kûfe'ye gelmekte olan Hz. Hüseyin'in yolu Ubeydullah b. Ziyâd'ın kuvvetlerince kesildi; Kerbelâ'daki çarpışmada Hz. Hüseyin ve beraberindekilerin tamamına yakını öldürüldü.",
    kaynak:"TDV: emeviler — '10 Muharrem 61 (10 Ekim 680) Cuma günü Kerbelâ’da'",
    taraflar:["emevi"], etiket:["konu-askeri"] },

  { t:"0787-01-01", k:"hukumdar", b:"Rüstemî imamı Abdurrahman b. Rüstem öldü",
    gun:"171 H. / 787 (TDV yıl verir)", yer:"Tâhert", yer_id:"Tâhert (Tiaret)", kisiler:"Abdurrahman b. Rüstem · Abdülvehhâb",
    d:"Tâhert'i kurup merkez yapan Abdurrahman'ın on bir yıllık yönetimi barış içinde geçti; ölmeden önce yerine geçecek imamı seçme yetkisini altı kişilik bir şûraya bıraktı.",
    kaynak:"TDV: rustemiler — 'Abdurrahman’ın 171 (787) yılında ölümüne kadar on bir yıl süren yönetim dönemi'",
    taraflar:["rustemi"], etiket:["konu-siyasi"] },

  { t:"0820-01-01", k:"kurulus", b:"Ziyâdî emîri İbn Ziyâd Zebîd şehrini kurdu",
    gun:"204 H. / 820 (TDV yıl verir)", yer:"Zebîd", yer_id:"Zebîd", kisiler:"Muhammed b. Abdullah b. Ziyâd",
    d:"Halifenin talimatıyla Husayb bölgesinde, planı Bağdat'a benzeyen dairevî Zebîd şehri Tihâme'nin merkezi olarak kuruldu; İbn Ziyâd bölgeyi yarı bağımsız yönetmeye başladı.",
    kaynak:"TDV: ziyadiler — 'dairevî Zebîd şehrini kurdu (204/820)'",
    taraflar:["ziyadi","abbasi"], etiket:["konu-siyasi"] },

  { t:"0831-09-12", k:"fetih", b:"Palermo Ağlebî kuvvetlerine teslim oldu",
    gun:"12 Eylül 831", yer:"Palermo", yer_id:"Palermo", kisiler:"III. Ziyâdetullah (I. Ziyâdetullah b. İbrâhim)",
    d:"İfrîkıye kuvvetlerinin kuşattığı Palermo'nun Bizans valisi şehri müslümanlara teslim etti; beş ay sonra Sicilya emirliğine Ebû Fihr Muhammed getirildi.",
    kaynak:"TDV: aglebiler — 'Palermo’yu kuşattı ve Bizans valisi şehri müslümanlara teslim etti (12 Eylül 831)'",
    taraflar:["aglebi","bizans"], etiket:["toprak-kazanc","konu-askeri"] },

  { t:"0843-01-01", k:"fetih", b:"Messina Ağlebîler'e teslim oldu",
    gun:"843 (TDV yıl verir)", yer:"Messina", yer_id:"Messina", kisiler:"I. Muhammed",
    d:"Emîr I. Muhammed devrinde Sicilya seferleri sürdü ve Messina müslümanlara teslim oldu.",
    kaynak:"TDV: aglebiler — 'Emîr I. Muhammed devrinde (841-856) Messina da müslümanlara teslim oldu (843)'",
    taraflar:["aglebi","bizans"], etiket:["toprak-kazanc","konu-askeri"] },

  { t:"0870-01-01", k:"idari", b:"Ahmed b. Tolun Katâi'yi kurup idare merkezini oraya taşıdı",
    gun:"256 H. / 870 (TDV yıl verir)", yer:"Katâi (Fustat'ın kuzeydoğusu)", yer_id:"Kahire", kisiler:"Ahmed b. Tolun",
    d:"Ordusu 100.000'i aşınca Ahmed b. Tolun, Fustat'ın kuzeydoğusunda Yeşkür dağı eteğinde Sâmerrâ benzeri Katâi semtini kurdu ve sarayını oraya taşıdı.",
    kaynak:"TDV: tolunogullari — 'Katâi semtini tesis etti ve idare merkezini orada yaptırdığı saraya taşıdı (256/870)'",
    ic_not_yer:"Fustat ve Katâi havuzda yok; ikisi de bugünkü Kahire'nin içinde ⇒ yer_id Kahire (kamera odağı).",
    taraflar:["tolunogullari"], etiket:["konu-siyasi"] },

  { t:"0896-01-01", k:"hukumdar", b:"Humâreveyh Dımaşk'ta öldürüldü; yerine oğlu Ceyş geçti",
    gun:"282 H. / 896 (TDV yıl verir)", yer:"Dımaşk", yer_id:"Şam", kisiler:"Humâreveyh · Ebü'l-Asâkir Ceyş",
    d:"Tolunoğulları'nın en parlak devrini yaşatan Humâreveyh, Dımaşk'ta uyurken hizmetçilerince öldürüldü; devlet adamları büyük oğlu Ceyş'e biat etti ve hânedan yıkılış sürecine girdi.",
    kaynak:"TDV: tolunogullari — 'Dımaşk’ta bulunduğu sırada hizmetçileri tarafından geceleyin uyurken öldürüldü (282/896)'",
    taraflar:["tolunogullari"], etiket:["konu-siyasi"] },

  { t:"0911-01-01", k:"toprak-kayip", b:"Sâmânîler Zerenc'i aldı; Saffârîler'in Leysî kolu sona erdi",
    gun:"Receb 298 / Mart 911 (gün bilinmiyor)", yer:"Zerenc", yer_id:"Zerenc (Sîstan)",
    d:"Emîr Ahmed'in gönderdiği Sâmânî ordusu Zerenc'i ele geçirdi; Muhammed ve Muaddel tutuklanıp Bağdat'a gönderildi, Sîstan Sâmânî idaresine girdi.",
    kaynak:"TDV: saffariler — 'Böylece Saffârîler’in Leysîler denilen kolu sona erdi (Receb 298 / Mart 911)'",
    taraflar:["saffari","samani"], etiket:["toprak-kayip","konu-askeri"] },

  { t:"0946-01-01", k:"hukumdar", b:"İhşîd Muhammed b. Tuğç Dımaşk'ta öldü",
    gun:"Zilhicce 334 / Temmuz 946 (gün bilinmiyor)", yer:"Dımaşk", yer_id:"Şam", kisiler:"Muhammed b. Tuğç el-İhşîd · Ûnûcûr",
    d:"Kuzey Suriye'nin Hamdânîler'e, güneyin İhşîdîler'e bırakıldığı antlaşmadan sonra Dımaşk'a giden Muhammed b. Tuğç orada öldü; yerine oğlu Ûnûcûr geçti, yönetim fiilen Kâfûr'a kaldı.",
    kaynak:"TDV: ihsidiler — 'Muhammed b. Tuğç Dımaşk’a gitti ve orada öldü (Zilhicce 334 / Temmuz 946)'",
    taraflar:["ihsidi","hamdani-halep"], etiket:["konu-siyasi"] },

  { t:"0958-01-01", k:"toprak-kayip", b:"Büveyhî Muizzüddevle Musul'u aldı; Nâsırüddevle Halep'e sığındı",
    gun:"347 H. / 958 (TDV yıl verir)", yer:"Musul", yer_id:"Musul", kisiler:"Nâsırüddevle · Muizzüddevle · Seyfüddevle",
    d:"Yıllık vergi konusunda anlaşılamayınca Muizzüddevle Musul ve Nusaybin'i ele geçirdi; Nâsırüddevle kardeşi Seyfüddevle'ye sığındı, vergi taahhüdüyle Musul'a döndü.",
    kaynak:"TDV: hamdaniler — 'Nâsırüddevle Halep emîri olan kardeşi Seyfüddevle’ye sığındı (347/958)'",
    taraflar:["hamdani-musul","buveyhi","hamdani-halep"], etiket:["toprak-kayip","konu-askeri"] },

  { t:"0964-01-01", k:"isgal", b:"Musul yeniden Büveyhî işgaline uğradı; yönetim Ebû Tağlib Gazanfer'e verildi",
    gun:"353 H. / 964 (TDV yıl verir)", yer:"Musul", yer_id:"Musul", kisiler:"Muizzüddevle · Ebû Tağlib Gazanfer · Nâsırüddevle",
    d:"Taahhüt yerine getirilmeyince Muizzüddevle Musul'u tekrar işgal etti; şehrin yönetimi Nâsırüddevle'nin oğlu Ebû Tağlib Gazanfer'e verildi, Nâsırüddevle Erdümüşt'e sürüldü.",
    kaynak:"TDV: hamdaniler — 'Musul Muizzüddevle tarafından tekrar işgal edildi ve şehrin yönetimi … Ebû Tağlib Gazanfer’e verildi (353/964)'",
    taraflar:["hamdani-musul","buveyhi"], etiket:["konu-askeri"] },

  { t:"0963-01-01", k:"vassal", b:"Fâtımî ordusu Sicilmâse'de Semkû'yu devirip Fâtımî nüfuzunu tanıyan el-Mu'tez'i emîr yaptı",
    gun:"352 H. / 963 (TDV yıl verir)", yer:"Sicilmâse", yer_id:"Sicilmâse (Tâfilelt)", kisiler:"Semkû el-Müntasır · Ebû Muhammed el-Mu'tez",
    d:"Fâtımî halifesinin gönderdiği ordu Semkû el-Müntasır'ı bertaraf etti; yerine Fâtımî nüfuzunu tanıyan kardeşi Ebû Muhammed Abdullah el-Mu'tez Midrârî emîri yapıldı.",
    kaynak:"TDV: midrariler — 'Fâtımî nüfuzunu tanıyan kardeşi … Midrârî emirliğine getirildi (352/963)'",
    taraflar:["midrari","fatimi"], etiket:["konu-siyasi"] },
];
