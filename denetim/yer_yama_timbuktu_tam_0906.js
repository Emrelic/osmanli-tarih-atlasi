// -*- coding: utf-8 -*-
// YER_YAMA_TIMBUKTU_TAM_0906 — 1.MURAT (Oturum 0) · 6 Eylül 2026
// ═══════════════════════════════════════════════════════════════════
// 🔴 `denetim/` ALTINDA BEKLİYOR — koşu 7b sürüyor, `data/` DONUK.
//
// 🔴🔴 BU YAMA DÖRT YAMANIN YERİNE GEÇER — hükmü bugün verildi
//    (`denetim/HUKUM-CAKISMA-KUTAISI-TIMBUKTU-0906.md`):
//      "Uygulayıcı `s:` dizisini BÜTÜN OLARAK değiştiriyor ⇒ kısmî bir
//       dizi, TAM diziyi siler. Çare: parça yama YOK, TEK VE TAM zincir."
//    Uygulanınca ŞU DÖRDÜNDEN Timbuktu kayıtları DÜŞÜRÜLECEK:
//      yer_yama_1923_bosluk_0906.js · yer_yama_timbuktu.js
//      yer_yama_ok107.js · yer_yama_belgesiz7.js
//    ⚠️ `belgesiz7`in `bos:`/`neden:` BEYANI BU KAYDA TAŞINDI (aşağıda) —
//       düşürülürken kaybolmasın.
//
// 🟢 60 YILLIK BOŞLUK KAPANDI — ve kapsayıcı madde yine tuttu.
//    Kuyrukta "Timbuktu 1700-1894" diye duran kalem ölçüldü: 1760-1923
//    zaten yazılıydı (`yer_yama_timbuktu.js`), gerçek boşluk **1700-1760**
//    ve **1893-1894** idi. Birincisi bu yamayla kapanıyor.
//
//    TDV `tinbuktu` (gövde okundu):
//      "…'arma' denilen çocukları Ebü'l-Mahallî liderliğinde 1163'te
//       (1750) Tinbüktü'de yönetimi ele geçirdiler."
//      "1760'ta Tevârikler'in zaptettiği Tinbüktü ON YIL SONRA Segu
//       Bambaraları'nın hâkimiyetine girdi."
//      "Tevârikler 1792'de yönetimi tekrar aldılar."
//      "1894'te Fransız işgal ordusu şehri Batı Afrika sömürgesine
//       ilhak etti."
//    ⇒ Mevcut yamanın 1760 · 1770 · 1792 günleri TDV ile BİREBİR tutuyor
//      (bağımsız doğrulama). Yeni olan yalnız **1750 / arma**.
//
// 🟢 İKİ DEĞİŞİKLİK, İKİSİ DE KAYNAKLI:
//    ① `fas` bitişi 1700-01-01 → **1750-01-01**
//       Eski 1700 YUVARLAK ve KAYNAKSIZDI. TDV arma'nın yönetimi 1750'de
//       ele geçirdiğini söylüyor ⇒ o güne kadar paşalık düzeni sürüyordu.
//    ② `arma` 1750-01-01 → 1760-01-01  **YENİ**
//       ⚠️ Bu kimlik veride ŞU ANA KADAR HİÇ KULLANILMAMIŞ (0 dönem) —
//         yani bu yama onu İLK KEZ canlandırıyor.
//
// 🟢 ÖN KOŞULLAR ÖLÇÜLDÜ (`§3.5.0` + `§8`):
//    arma künyesi   1750-01-01 → 1760-01-01  ✓ pencere BİREBİR
//    arma rengi     BOYALAR'da VAR (#24c0d2) ✓ boyanır
//    fas künyesi    1549 → 1923              ✓ 1750'yi kapsıyor
//    bambara 1650→1861 · massina 1818→1862 · tekrur 1852→1893 ·
//    tuareg-ivellemmedan 1281→1899 · songhay 1464→1591-04-13  ✓ hepsi tutuyor
//
// 🟢 DEĞİŞMEZ 2s ÖLÇÜLDÜ — YENİ AÇIK GÜN DOĞMUYOR:
//    zincirdeki günlerin HEPSİ zaten veride kırılma günü
//    (1750→9 uç · 1760→11 · 1770→4 · 1792→4 · 1833→6 · 1862→6 · 1894→10)
//    ⇒ Timbuktu'yu eklemek gün SAYISINI değiştirmiyor. Bir kısmı bugün
//      zaten AÇIK, ama bu yamadan ÖNCE de öyleydi — borç DEVRALINMIYOR,
//      BÜYÜMÜYOR.
//
// 🔴 KAPANMAYAN: **1893-01-01 → 1894-01-01, BİR YIL.**
//    Sebep ölçüldü: `tekrur` künyesi `1852-09-01 → 1893-01-01`de BİTİYOR,
//    TDV ise Fransız ilhakını **1894** diyor. Aradaki yılı doldurmak için
//    kaynak YOK; `tuareg-ivellemmedan` künyesi (1281→1899) o yılı
//    kapsıyor ama TDV bunu SÖYLEMİYOR ⇒ UYDURULMADI.
//    🔜 Açık kalem: 1893-1894 arası Timbuktu kimin?
//
// 🔜 VE UYGULAMADAN SONRA `py arac/renk_olc.py` KOŞULMALI: `arma` ilk kez
//    sahneye çıkıyor, ve `CLAUDE.md §9` "palet verinin fonksiyonudur —
//    renk değişmese bile denetim değişir" diyor.
// ═══════════════════════════════════════════════════════════════════
window.YER_YAMA_TIMBUKTU_TAM_0906 = [
  { ad:"Timbuktu",
    s:[{f:"1281-01-01",t:"1430-01-01",d:"mali-imparatorlugu"},
       // ⟨1430-01-01 → 1468-01-01 BEYANLI BOŞLUK — `bos:kabile`, aşağıda⟩
       {f:"1468-01-01",t:"1591-04-13",d:"songhay-imparatorlugu"},
       {f:"1591-04-13",t:"1750-01-01",d:"fas"},
       {f:"1750-01-01",t:"1760-01-01",d:"arma"},
       {f:"1760-01-01",t:"1770-01-01",d:"tuareg-ivellemmedan"},
       {f:"1770-01-01",t:"1792-01-01",d:"bambara"},
       {f:"1792-01-01",t:"1833-01-01",d:"tuareg-ivellemmedan"},
       {f:"1833-01-01",t:"1862-01-01",d:"massina"},
       {f:"1862-01-01",t:"1893-01-01",d:"tekrur"},
       // ⟨1893-01-01 → 1894-01-01 AÇIK — kaynak YOK, uydurulmadı⟩
       {f:"1894-01-01",t:"1923-10-29",d:"fransa-cumhuriyet"}],
    bos:"kabile",
    neden:"1430-1468 arası: Mali İmparatorluğu'nun zayıflamasıyla bölge Tuareg (Tevârik) boy konfederasyonunun eline geçti, 1468'de Songhay tarafından fethedilene dek merkezî bir devlet YOKTU. Kaynak: TDV `tinbuktu`. ⚠️ AYRICA 1893-01-01 → 1894-01-01 arası BİR YIL açıktır ve bu BEYAN DEĞİL EKSİKTİR: `tekrur` künyesi 1893'te bitiyor, TDV Fransız ilhakını 1894 diyor, aradaki yıl için kaynak bulunamadı.",
    kaynak:"tinbuktu — TDV gövdesi okundu. Zincirin 1750 (arma yönetimi ele geçirdi), 1760 (Tevârikler zaptetti), 1770 (on yıl sonra Segu Bambaraları), 1792 (Tevârikler tekrar) ve 1894 (Fransız ilhakı) günleri BU MADDEDEN. `fas` bitişi 1700'den 1750'ye ÇEKİLDİ: eski gün yuvarlak ve kaynaksızdı, yeni gün TDV'nin verdiği arma devriyle hizalı."
  }
];
