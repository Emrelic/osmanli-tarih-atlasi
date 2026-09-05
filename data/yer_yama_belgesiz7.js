// =====================================================================
// 1923 SINIRLARI — 7 belgesiz noktaya beyan (M-2837 sevki)
// Kaynak: denetim/BULGU-BELGESIZ7-0905.md
// Oturum: 1923 SINIRLARI · local_372203f2-6e71-46d2-af5e-563a5c7eca60
//
// ⚠️ Bu bir YAMA dosyasıdır. `data/`e DOKUNMADIM — denetim/ altına yazıldı.
// 🔴 YEDİSİNİN YALNIZ ÜÇÜ burada — DÖRDÜ FARKLI BİR SORUN (bkz. rapor):
//    Ndjamena/Agadez/Darfur/Hadramut GERÇEK tarihi olan yerler, boşluk
//    beyanı UYGUN DEĞİL. "Az bulursan az yaz" (NEHIR SURTUNME emsali).
// =====================================================================

window.YER_YAMA_BELGESIZ7 = [

// ── Timbuktu — 1430-1468 Tevârik (Tuareg) dönemi ──
// ZATEN ARAŞTIRILMIŞTI (CLAUDE.md §11, 2 Eylül vakası) — bu kez YAZILIYOR.
{ ad:"Timbuktu",
  bos:"kabile",
  neden:"1430-1468 arası: Mali İmparatorluğu'nun zayıflamasıyla bölge Tuareg (Tevârik) boy konfederasyonunun eline geçti, 1468'de Songhay tarafından fethedilene dek merkezi bir devlet YOKTU. Kaynak: TDV 'tinbuktu' — daha önce doğrulanmış (§11 kaydı).",
  kaynak:"tinbuktu" },

// ── Somali çölü — iç bölge, kıyı sultanlıklarından AYRI ──
// Mevcut `somali` künyesi (f:1500-t:1923) yalnız KIYI sultanlıklarını
// (Ecuran/Migiurtinia/Hobyo) kapsıyor; iç çöl hiçbir zaman bu sultanlıkların
// idaresinde OLMADI.
{ ad:"Somali çölü",
  bos:"kabile",
  neden:"Somali iç çölü tarih boyunca göçebe klan (Darod/Hawiye vb.) yapılarıyla yönetildi, kıyı sultanlıklarının (mevcut `somali` künyesi) idaresi bu iç bölgeye HİÇ ulaşmadı — merkezi devlet hiç kurulmadı.",
  kaynak:"bulunamadı — TDV kapsam dışı, standart akademik: Somali klan yapısının genel tarifi (I.M. Lewis, 'A Modern History of the Somali')" },

// ── Ogaden — Somali-Etiyopya sınır bölgesi, zayıf/nominal denetim ──
{ ad:"Ogaden",
  bos:"kabile",
  neden:"Ogaden, çoğunlukla Darod klanına bağlı Somali göçebe halkının yaşadığı bölge; Habeşistan'ın hükümranlık İDDİASI vardı ama fiilî denetim çok zayıftı — 1915'te Lij Iyasu döneminde ancak klan liderleriyle 'yerel özerklik' anlaşmasıyla kısmi uzlaşma sağlandı (bu da hükümranlığın o ana dek FİİLEN yokluğunu gösteriyor).",
  kaynak:"bulunamadı — TDV kapsam dışı, standart akademik: Human Rights Watch (2008) tarihi bağlam bölümü + Britannica 'Ogaden'" }

];

// =====================================================================
// 🔴 DÖRT NOKTA BURADA YOK — FARKLI BİR SORUN, boşluk beyanı UYGUN DEĞİL
// =====================================================================
// Darfur   — devletler.js'te "darfur" künyesi ZATEN VAR (f:1695-t:1916-11-06,
//            selefi "tunciler" 1400-1695) ama BU NOKTA bunu HİÇ kullanmıyor.
//            Boşluk beyanı yazmak GERÇEK bir sultanlığı YOK SAYMAK olur.
//            Gereken: s: tunciler(1400-1695)→darfur(1695-1916-11-06)→
//            [1916 sonrası kimlik — Anglo-Mısır Sudan, ARAŞTIRILMADI].
// Agadez   — Sultanate of Aïr 1405'te kuruldu, Songhay'a bağlandı (1500-1591),
//            yeniden bağımsız oldu, 1906'da Fransız himayesine, 1917'de
//            fiilen sömürge yönetimine girdi. 500+ yıllık gerçek tarih —
//            boşluk beyanı YANLIŞ olur. Künye YOK, YAZILMASI GEREKİR.
// Ndjamena — 1900'de Fransızlarca Fort-Lamy adıyla kuruldu (Rabih az-Zubayr'ı
//            yendikleri savaş alanında); öncesinde küçük bir Kotoko
//            yerleşimiydi. TEMİZ ÇÖZÜM: kur:"1900-01-01" eklenip 1900-1923
//            arası "fransa-cumhuriyet" (Fransız Ekvator Afrikası) yazılmalı
//            — boşluk beyanı DEĞİL, gerçek bir dönem eksik.
// Hadramut — Kathiri ve Kuaytî adlı İKİ tarihî tarikat/kabile sultanlığı
//            gerçekten var oldu (1500'den beri), 1882/1918'den itibaren
//            İngiliz himayesinde (Aden Protectorate, Kuveyt/Bahreyn/Katar
//            emsaliyle AYNI himaye örüntüsü). Künye YOK, YAZILMASI GEREKİR.
