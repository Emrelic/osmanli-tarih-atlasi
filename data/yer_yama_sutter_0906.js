// -*- coding: utf-8 -*-
// YER_YAMA_SUTTER_0906 — 1.MURAT (Oturum 0) · 6 Eylül 2026
// ═══════════════════════════════════════════════════════════════════
// 🔴 BU DOSYA `denetim/` ALTINDA BEKLİYOR — KOŞU 7B SÜRÜYOR, `data/` DONUK.
//    Uygulama sırası (merge kuyruğu ⑥):
//      ① git mv denetim/yer_yama_sutter_0906.js data/
//      ② py arac/_sahiplik_uygula.py            (kuru koşu — VARSAYILAN)
//      ③ çıktıda `s:` alanının İNDİĞİNİ gör, sonra --yaz
//    Adı kasten `yer_yama_*`: taşınırken YENİDEN ADLANDIRMA gerekmesin
//    (`§11`: "bir glob bir ad sözleşmesidir" — rename, hata yeridir).
// ═══════════════════════════════════════════════════════════════════
//
// KUSUR — `OLCUM-ENKLAV-ACIK-KALEM-0906.md §①`
//   veri : s: 1839-01-01 → 1923-10-29  `abd`      (tek dönem, kaynak YOK)
//   Sutter kaleyi 1839'da MEKSİKA hükümetinden aldığı arazi imtiyazıyla
//   (Nueva Helvetia) kurdu; Kaliforniya o tarihte Meksika toprağıydı.
//   ⇒ Kayıt ABD'yi ~9 yıl ERKEN başlatıyor.
//   Sınıf: `§3.5.-1` **"DEVLET VAR, YERİ YANLIŞ"** — hayalet devlet DEĞİL
//   (ABD 1776'dan beri var), yalnız ORADA değildi.
//
// 🟢 GÜN SEÇİMİ BİR TERCİH DEĞİL, İKİ BAĞIMSIZ DAYANAK:
//   ① KAYNAK — ABD Millî Arşivi, birincil belge (Guadalupe Hidalgo
//      Antlaşması'nın teati nüshası + tam metin): imza **2 Şubat 1848**,
//      ve devredilenler arasında Kaliforniya ADIYLA sayılıyor.
//   ② ATLASIN KENDİ KONVANSİYONU — `meksika → abd` geçişi veride ZATEN
//      var ve TEK bir gün kullanıyor: `1848-02-02`, BEŞ yerleşimde
//      (Santa Fe · Taos Pueblo · Acoma Pueblo · San Diego · +1).
//      San Diego da KALİFORNİYA'da.
//   📌 `§11`: *"komşusunun kullandığı günü kullanmak, kendi gününü
//      seçmekten dayanaklıdır."* Burada ikisi ÇAKIŞIYOR — arşiv belgesinin
//      günü ile komşunun günü aynı. Alternatifler (tasdik teatisi
//      1848-05-30, fiilî işgal Temmuz 1846) BİLEREK kullanılmadı: atlasın
//      kendi ekseninden ayrışırlardı.
//
// 🟢 ÖN KOŞUL ÖLÇÜLDÜ (`§3.5.0` — künyenin VARLIĞI yetmez, PENCERESİ de tutmalı):
//      meksika  1821-09-27 → 1923-10-29   ✓ 1839'u da 1848'i de kapsıyor
//      veride `meksika` dönemi: 84        ⇒ RENK VAR, yeni künye/renk YOK
//
// 🟢 DEĞİŞMEZ ETKİSİ ÖLÇÜLDÜ:
//      Değişmez 1  — boşluk doğmuyor (iki dönem uç uca, 1848-02-02'de)
//      Değişmez 2s — `1848-02-02` ZATEN bir çekirdek kırılma günü
//                    (`yerlesimler_kamerika.js` girdi.py'nin 77 dosyasında,
//                    ve beş komşu o günü kullanıyor) ⇒ YENİ açık gün YOK.
//      ⚠️ Uygulayıcı yine de "2s zayıf gün: 1848-02-02" diye UYARABİLİR —
//         o günün çekirdekte kendi MADDESİ yok. Uyarı doğru ve bu yamadan
//         ÖNCE de geçerliydi; bu yama onu ne doğuruyor ne büyütüyor.
//      🔜 Ayrı kalem: 1848-02-02'ye kronoloji maddesi (Guadalupe Hidalgo).
//
// ⚠️ NE ÖLÇMEDİM: 1846 Temmuz'daki fiilî ABD işgali ile 1848 arasındaki
//    ~19 ayın atlasta nasıl gösterilmesi gerektiği. Beş komşu da o ayrımı
//    YAPMIYOR; bu yama da yapmıyor — konvansiyona uyuyor, onu SORGULAMIYOR.
// ═══════════════════════════════════════════════════════════════════
window.YER_YAMA_SUTTER_0906 = [
  { ad:"Sutter's Fort (Sacramento)",
    s:[{f:"1839-01-01",t:"1848-02-02",d:"meksika"},
       {f:"1848-02-02",t:"1923-10-29",d:"abd"}],
    kaynak:"ABD Millî Arşivi (archives.gov), Guadalupe Hidalgo Antlaşması — birincil belge: imza 2 Şubat 1848; Meksika'nın devrettiği topraklar arasında Kaliforniya adıyla sayılıyor. TDV `amerika` maddesi gövdesi okundu, Meksika-ABD savaşını ve bu antlaşmayı KAPSAMIYOR (§4 coğrafî kapsam boşluğu ⇒ akademik/birincil kaynak meşru).",
    not:"1839 tarihi DOĞRU ve değişmiyor: Sutter kaleyi o yıl kurdu — ama Meksika hükümetinden aldığı arazi imtiyazıyla (Nueva Helvetia) ve Meksika vatandaşı olarak. Kusur kuruluş tarihinde değil SAHİPTE: kayıt `abd`yi 1839'dan başlatıyordu, ~9 yıl erken. Gün seçimi atlasın kendi meksika→abd konvansiyonuyla birebir aynı (beş komşu, San Diego dâhil)."
  }
];
