// -*- coding: utf-8 -*-
// YERLESIMLER_P0043LIBYA — KITA 13 · paket-emrelic-0043 / İŞ④ · 12 Eylül 2026
// Sevk: 1.MURAT · karar M-3602 + M-3611
// ═══════════════════════════════════════════════════════════════════════
// 🔴 BU DOSYA BİR NOKTA TAŞIYOR — ve bu sayının DÜŞÜKLÜĞÜ İŞİN KENDİSİDİR.
//
// Sevk 12 aday verdi (Tobruk · Derne · Bingazi · Mercu · Beyda · Ajdabiya ·
// Avcile · Dâhile · Hârice · Farafra · Bahriye · Sîve). Ölçüldü
// (`denetim/ARAC-KITA13-LIBYA-TABAN-0912.py`): **onu ZATEN VERİDE.**
// Üçü 3 km sınıfı mükerrer tuzağıydı:
//     "Farafra"      → mevcut `Ferâfire`         0,0 km
//     "Mercu (Marj)" → mevcut `Merc`             4,8 km
//     "el-Beyda"     → mevcut `Beyzâ (Kirene)`  12,4 km
// ⇒ Sevk harfiyen uygulansaydı ON MÜKERRER NOKTA doğardı (`D002`).
//
// 🔴 VE BERKA HİNTERLANDINA (30,0-31,8K / 21,2-24,5D) NOKTA YAZILMADI.
//    O bant gerçekten boş (en yakın nokta 169 km) ama TDV `berka` oraya
//    HİÇBİR yerleşim adı vermiyor; andığı her yer ya kıyıda (Merc ·
//    Bingazi · Beyzâ) ya çok güneyde (Kufra · Câlû · Cağbûb · Tâzirbû) —
//    ve DÖRDÜ DE ATLASTA ZATEN VAR.
//    Emre'nin ilkesi (2 Eylül, p0019/H-0056): *"EĞER YERLEŞİM VAR İSE
//    NOKTA KONUR. YOK İSE UYDURACAK HÂLİMİZ YOK. DEVASA BOŞLUKLAR
//    OLACAKSA OLSUN."*  Koordinatör onayladı (M-3602 ③).
//
// 🔴 AVCİLE (Awjila) YAZILMADI — ve sebebi "mükerrer" DEĞİL:
//    Avcile atlasta YOK ve mevcut `Câlû`dan 26,7 km uzakta, yani 3 km
//    eşiğinin ÜSTÜNDE (`D066`: eşik bir yasak değil bir ŞÜPHE eşiğidir,
//    ve eşiğin üstünde olmak "yaz" demek değildir).
//    Yazılmama sebebi KAYNAKSIZLIK: TDV `berka` gövdesi Senûsî merkezleri
//    olarak **Cağbûb ve Câlû'yu** anıyor, Avcile'yi ANMIYOR.
//    ⚠️ AKADEMİK KAYNAK ARANMADI — `bulunamadı` değil, **ARANMADI**
//    (`D107`: üç damga ayrıdır). Aranırsa yazılabilir.
// ═══════════════════════════════════════════════════════════════════════
//
// 🟢 SÎVA — NİÇİN YAZILDI: KAYNAĞIN KENDİ LİSTESİNDEKİ TEK BOŞLUK
//
// Dar sluglar ÖLÜ (302 ölçüldü): sive · siva · siwa · vahat · amonyum ·
// sive--misir.  ⇒ `§4`: "dar slug tutmazsa KAPSAYICI maddeyi dene."
// Kapsayıcı madde `misir` (200, gövde 231.572 karakter, OKUNDU) şunu
// yazıyor:
//     "Çok geniş ve derin çukurlara dolan sular çevrelerini tarıma ve
//      yerleşmeye uygun vahalar (SÎVA, Bahriyye, Feyyûm, Ferâfre, Dâhle
//      ve Hârce) haline getirmiştir."
//     "En kalabalık vaha Batı çölündeki Libya sınırında bulunan Sîva
//      vahasıdır."
// TDV'nin saydığı ALTI vahanın BEŞİ atlasta zaten var (Bahriye ·
// Feyyûm · Ferâfire · Dâhile · Hârice). Sîva bir TAHMİN değil,
// **kaynağın kendi listesindeki tek eksik.**
//
// ⚠️ AD: TDV yazımı "Sîva". Öngörümde (`denetim/ONGORU-KITA13-IS4-0912.md`,
//    commit 0fa4ea5) "Sîve (Siwa)" yazacağımı söylemiştim; KAYNAĞIN
//    YAZIMINA döndüm. Öngörüden sapma küçük ama kayda geçiyor.
//
// ═══════════ ZİNCİR SEÇİLMEDİ, KARDEŞLERDEN DEVRALINDI (D084) ═══════════
// TDV Sîva için TARİH VERMİYOR — yalnız varlığını ve coğrafyasını veriyor.
// Kendi tarihimi SEÇMEK yerine, aynı sınıftaki DÖRT kardeş vahanın
// kullandığı zinciri devraldım; dördü de BİREBİR aynısını taşıyor:
//     Dâhile (25,494/28,976) · Hârice (25,440/30,546) ·
//     Ferâfire (27,058/27,970) · Bahriye (28,349/28,864)
// 🟢 Ve bu zincir `1517-04-13` kullanıyor — Memlük Devleti'nin GERÇEK
//    sonu. (Libya KIYISI `1517-05-19` kullanıyor ve o ayrı bir kalem:
//    p0043/H-0016(5), İŞ④'e DAHİL DEĞİL.)
// 🔴 DEVRALINDIĞI AÇIKÇA YAZILIYOR: yazılmayan devralma, uydurmadan
//    ayırt edilemez. Aşağıdaki `kaynak:` alanı bunu taşıyor.
//
// ⚠️ BİLİNEN VE DAMGALANAN ZAYIFLIK: Sîva altı vahanın EN ÖZERKİYDİ;
//    Mısır'ın fiilî denetimi Kavalalı Mehmed Ali'nin 1820 Batı Çölü
//    seferiyle kuruldu. Yani `v: 1805-07-03` (Kavalalı'nın valiliği)
//    fiilî denetimden ~15 yıl ÖNCE başlıyor. Bu KARDEŞLERDE DE BÖYLE —
//    atlasın bilinçli konvansiyonu. Sîva'ya özel bir 1820 tarihi
//    YAZMADIM çünkü TDV'de dayanağı yok (`§4`: tarih uydurma).
//    ⇒ Düzeltilecekse DÖRT KARDEŞLE BİRLİKTE düzeltilir, tek başına değil.
//
// ═══════════ SINAVLAR ═══════════
//   3 km mükerrer : en yakın nokta Cağbûb 114,3 km  ✓ (ölçüldü)
//   ad çakışması  : "Sîva"/"Siwa" atlasta YOK — normalleştiriciyle
//                   arandı VE komşuluk taramasıyla doğrulandı ✓
//   kara maskesi  : `denetle.py` konum dalıyla sınanacak
// ═══════════════════════════════════════════════════════════════════════

window.YERLESIMLER_P0043LIBYA = [

  { ad:"Sîva (Siwa)",
    tur:"bolge", lat:29.203, lon:25.519, g:0, k:4, m:"Kahire",
    kaynak:"TDV `misir` (kapsayıcı madde, 200, gövde okundu) — VARLIK ve COĞRAFYA kaynaklı: \"vahalar (Sîva, Bahriyye, Feyyûm, Ferâfre, Dâhle ve Hârce)\" ve \"En kalabalık vaha Batı çölündeki Libya sınırında bulunan Sîva vahasıdır.\" 🔴 TARİH KAYNAKLI DEĞİL: TDV Sîva için dönem vermiyor. Zincir, aynı sınıftaki DÖRT kardeş vahadan (Dâhile · Hârice · Ferâfire · Bahriye) BİREBİR DEVRALINDI (D084) — seçilmedi, devralındı ve bu açıkça yazıldı. Dar sluglar ölçüldü ve ÖLÜ: sive · siva · siwa · vahat · amonyum · sive--misir (302).",
    neden:"Batı Çölü'nün en kalabalık vahası ve TDV'nin saydığı altı vahadan atlasta bulunmayan TEK vaha (beşi zaten var). En yakın mevcut nokta Cağbûb 114,3 km ⇒ 3 km sınavı geçti, gerçek boşluk. ⚠️ Sîva altı vahanın en özerkiydi; Mısır'ın fiilî denetimi 1820 Kavalalı seferiyle kuruldu, yani `v:1805-07-03` fiilî denetimden ~15 yıl önce başlıyor — AMA bu dört kardeşte de böyle, atlasın konvansiyonu. Sîva'ya özel tarih YAZILMADI çünkü TDV'de dayanağı yok.",
    s:[{f:"1281-01-01",t:"1517-04-13",d:"memluk"},
       {f:"1914-12-18",t:"1922-03-15",d:"misir-sultanligi"},
       {f:"1922-03-15",t:"1923-10-29",d:"misir-kralligi"}],
    d:[{f:"1517-04-13",t:"1805-07-03"}],
    v:[{f:"1805-07-03",t:"1914-12-18"}],
    isg:[{f:"1882-09-13",t:"1914-12-18",d:"ingiltere"},
         {f:"1914-12-18",t:"1923-10-29",d:"ingiltere"}] }

];
