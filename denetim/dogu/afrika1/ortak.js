// afrika1 üretim yardımcıları (hicrî çevirici + TDV kaynak biçimleyici)
const { kesisimIlk } = require('./hicri.js');
const AD = {
  'vandal': 'Vandal Krallığı', 'bizans': 'Bizans', 'bizans-afrika-eksarhligi': 'Bizans Afrika Eksarhlığı', 'emevi': 'Emevîler', 'abbasi': 'Abbâsîler',
  'aglebi': 'Ağlebîler', 'fatimi': 'Fâtımîler', 'ziriler': 'Zîrîler', 'hafsi': 'Hafsîler', 'muvahhidler': 'Muvahhidler', 'murabitlar': 'Murâbıtlar',
  'norman-ifrikiye': 'Norman Afrika Krallığı', 'sfaks-hammu-emirligi': 'Sfaks Hammû Emirliği', 'sfaks-firyani-emirligi': 'Sfaks Firyânî Emirliği',
  'ganiyeler': 'Benî Gâniye', 'kafsa-benirend-emirligi': 'Kafsa Benî Rend Emirliği', 'kabis-emirligi': 'Kâbis Emirliği', 'hulefa-yi-rasidin': 'Hulefâ-yi Râşidîn',
  'ibadi-imamlik-trablus': 'Trablus İbâdî İmamlığı', 'ifraniler-tilimsan': 'Yıfrenîler', 'idrisi': 'İdrîsîler', 'endulus-emevi': 'Endülüs Emevîleri',
  'garamant': 'Garamantes', 'zawila-hattabiler': 'Zavîle Hattâbî Emirliği', 'eyyubi': 'Eyyûbîler', 'kanem-bornu': 'Kanem-Bornu', 'sahra-sanhaca': 'Sahra Sanhâceleri',
  'wagadu-gane-erken': 'Wagadu (Gana)', 'gane': 'Gāne', 'kevkev-erken': 'Kevkev (erken)', 'kevkev': 'Kevkev (Songay Zâ)', 'mali-imparatorlugu': 'Mali İmparatorluğu',
  '__BOSLUK__': 'boşluk (beyanlı)', 'altava-mauro-roma': 'Altava Mauro-Roma Krallığı', 'auris-masties': 'Aurès Krallığı'
};
const P4 = (n) => String(n).padStart(4, '0');
function H(AH, Y) { // hicrî yıl ∩ miladî yıl → ilk gün + ic_not_takvim metni
  const r = kesisimIlk(AH, Y);
  if (!r.ilk) throw new Error('hicri kesişim boş ' + AH + ':' + Y);
  return { t: r.ilk, not: `Hicrî ${AH} yılı (Jülyen ${r.hicri_bas} … ${r.hicri_son}; sivil tablo hesabı, ±1-2 gün) ∩ kaynağın miladî yılı ${Y} → kesişimin ilk günü ${r.ilk}; gün KAYNAKTA YOK, alt sınırdır` };
}
function tdv(slug, ad, ...alintilar) {
  return `TDV İslâm Ansiklopedisi «${ad}» (https://islamansiklopedisi.org.tr/${slug}) — bu oturumda okundu: ` + alintilar.map(a => '«' + a + '»').join(' · ');
}
module.exports = { AD, H, tdv, P4 };
