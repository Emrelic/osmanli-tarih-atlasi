// ============================================================================
// EK OKUMA KARTI — SONNET HAZIR KITA 104, 1 Eylül 2026
// ============================================================================
// Paket: parti-emrelic-0032 / H-0009. SEVK: KRONOLOJİ — "Topkapı Sarayı
// maddesine merak/ek okuma butonları için yeni madde/içerik yazılması
// (data/ekokuma.js benzeri)".
//
// 🔴 KENDİ AD ALANIM — CLAUDE.md §7 "ayrı dosya vermek ayrı ad alanı vermek
// değildir" kuralı gereği bu dosya window.EKOKUMA değil window.EKOKUMA_SH104
// tanımlıyor. Ana window.EKOKUMA dizisine KATILMADI — index.html/js/app.js'e
// dokunmadım (§7 dosya sahipliği, bunlar benim değil). Koordinatör bir
// sonraki koşudan önce bu kaydı gerçek data/ekokuma.js'in window.EKOKUMA
// dizisine taşıyıp bağlayacak (M-1903 §④).
//
// ── OLAY BAĞLANTISI — doğrulandı ────────────────────────────────────────────
// olay:[...] alanındaki iki tarih data/olaylar_ek2.js ve data/olaylar.js'de
// BİREBİR var olan t: değerleridir (dosyalar okunarak doğrulandı, uydurulmadı):
//   1453-05-29 → olaylar.js "İstanbul'un fethi" (zaten ekokuma.js'in kendi
//                zimmi-cizye-millet-duzeni kartında da kullanılan ORTAK tarih)
//   1478-09-01 → olaylar_ek2.js:23 "Topkapı Sarayı'na taşınıldı" (bu kartın
//                bağlandığı asıl madde, kaynak:"topkapi-sarayi")
//
// ── KAYNAK — TDV, gövde okunarak sınandı (CLAUDE.md §4) ─────────────────────
//   topkapi-sarayi → HTTP 200, gövde okundu: Bâbıhümâyun tarihi 883/1478,
//     inşaatın muhtemelen 1465'te başladığı, Sarayburnu'nun "her yönden
//     şehre hâkim" konumu, saray teşkilatının Bîrun/Divân-ı Hümâyun/Enderun/
//     Harem dört bölümü — hepsi TDV metninden, uydurma yok.
//
// ── ŞEMA (data/merak.js ve data/ekokuma.js ile birebir aynı sözleşme) ───────
//   { id, tur:"sebep-sonuc", sebep:{b,t}, sonuc:{b,t}, bag, metin, kesinlik,
//     zincir:[...], olay:[...], kaynak }
// ============================================================================

window.EKOKUMA_SH104 = [

{ id:"topkapi-sarayi-insasi", tur:"sebep-sonuc",
  kisa:"Saray tek bina değil, dıştan içe artan bir GİZLİLİK zinciriydi — mimarisi devletin kendi hiyerarşisiydi.",
  sebep:{ b:"İstanbul'un fethinin ardından yeni başşehirde, güvenlik ve simgesel meşruiyet bakımından şehre hâkim, denize açık, eski Bizans yerleşiminden ayrı bir yönetim merkezi kurma ihtiyacı", t:"1453-05-29" },
  sonuc:{ b:"Sarayburnu'ndaki Yeni Saray'ın (bugünkü Topkapı Sarayı) tamamlanarak devlet merkezinin Bâyezîd'deki ilk (Eski) saraydan buraya taşınması", t:"1478-09-01" },
  bag:"TDV'nin Topkapı Sarayı maddesine göre saray 'her yönden şehre hâkim' bir mevkide, Marmara, Üsküdar ve Haliç'i görecek biçimde kuruldu. Bâbıhümâyun kapısı üzerindeki 883 (1478) tarihi tamamlanışı gösterir; inşaata muhtemelen 1465'te başlanmıştı. Beyazıt'taki ilk saraydan ayırt etmek için 'Sarây-ı Cedîd-i Âmire' (Yeni Saray) diye anıldı — 'Topkapı' adı çok daha sonra, kıyıdaki başka bir köşkten ödünç alındı.",
  metin:"Saray, art arda sıralanan üç kapı ve bunların ayırdığı avlulardan oluşan bir teşkilat zinciriydi. Bîrun (dış hizmet), birinci ve kısmen ikinci avludaki muhafız, ahır ve mutfak gibi birimleri kapsardı. Bâbüsselâm'ın ardındaki ikinci avluda, kubbeli Divân-ı Hümâyun'da devlet işleri görüşülürdü. Bâbüssaâde'nin arkasındaki üçüncü avlu Enderun'a, yani devşirme gençlerin yetiştirilip devlet kademelerine hazırlandığı saray okuluna ayrılmıştı. En içeride ise padişah ailesinin özel yaşam alanı Harem bulunurdu. Dıştan içe artan bu kapalılık aynı zamanda bir hiyerarşiydi: birinci avluya halk girebilir, ikinciye yalnız devlet işiyle gelenler kabul edilir, üçüncü avlu ve Harem'e ise çok dar bir çevre alınırdı — sarayın mimarisi, devletin merkezîleşmiş ve tabakalı düzenini taşa dökmüş hâliydi.",
  kesinlik:"kesin",
  zincir:[],
  olay:["1453-05-29","1478-09-01"],
  kaynak:"TDV: topkapi-sarayi" }

];
