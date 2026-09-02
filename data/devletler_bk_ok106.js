// ============================================================================
// DEVLETLER_BK_OK106 — ZAMANLI BAŞKENT yaması
// window.DEVLETLER_BK_OK106   (§7: dosya adındaki ayırt edici parça
//                              değişken adında da)
// Oturum: OPUS HAZIR KITA 106 · 2 Eylül 2026 · koordinatör 1.MURAT
// Şema: VERI-YAPISI.md `bk:[{f,t,ad}]` · Karar: tahta M-2102 → şık **(C)**
// 🔴 `data/devletler.js`e TEK BAYT yazılmadı — paylaşılan dosya.
// ============================================================================
//
// ═══ ŞIK (C) — YALNIZ TARİHİ BULUNAN KÜNYE YAZILIR ═══
// Koordinatörün gerekçesi benimkinden keskin ve buraya aynen alıyorum:
//   *"Bir alt sınır, tarihlenen ŞEY hakkındaki bir kaynak cümlesinden
//   gelmelidir. Saltanat aralığı başkent hakkında bir ifade değildir; onu
//   `bk:`ye yazmak `kesinlik:` alanıyla bile dürüst olmaz — çünkü alan
//   HASSASİYETİ bildirir, DAYANAĞIN YOKLUĞUNU değil."*
// ⇒ `kesinlik:` *"ne kadar kesin biliyoruz"* der, *"biliyor muyuz"* demez.
//   İkincisinin cevabı **kaydı yazmamaktır.**
//
// ═══ BU DOSYADA NİÇİN YALNIZ İKİ KÜNYE VAR ═══
// Ölçüldü (`denetim/ONGORU-BASKENT-OK106.md`): 91 çok-başkentli künyenin
// 44'ünün adları eşleşiyor, ama **yalnız 2'sinin `baskent` metninde yıl
// ipucu var.** Kalan 42 için TDV pilotu koşuldu ve verim **1/4** çıktı.
// ⇒ Bu dosya koordinatörün ①. adımıdır: "önce yıl ipucu taşıyan 2 künye —
//   KESİN KAZANÇ." 10 künyelik TDV turu ayrı, ve verimi ölçülüp bildirilecek.
// ============================================================================

window.DEVLETLER_BK_OK106 = [

  // ── AYDINOĞULLARI — künye 1308-01-01 → 1425-06-01 ────────────────────
  // KAYNAK ① atlasın kendi `baskent` alanı: "Birgi → İzmir (1329) / Tire,
  //          Ayasuluk" — yılı O taşıyor.
  // KAYNAK ② TDV `aydinogullari` (200, gövde okundu) onu DESTEKLİYOR:
  //          "Sakız hâkimi Cenovalı Martino Zaccaria idaresindeki İzmir
  //           Limanı'nı ele geçirdi (1328 veya 1329)"
  //
  // 🟡 VE BİR BELİRSİZLİĞİ GİZLEMİYORUM: aynı TDV maddesi ayrıca
  //    "Umur Bey döneminde İzmir siyasî merkez hâline geldi. 1334 sonrası…"
  //    diyor. Yani **FETİH (1328/29) ile MERKEZ OLMA (1334 sonrası) farklı
  //    olabilir.** `1329` yazıldı çünkü atlasın kendi kaydı ve TDV'nin fetih
  //    yılı onda buluşuyor; ama bu satır okunmadan tarih "kesin" sanılmasın.
  // 🔴 `Tire` ve `Ayasuluk` YAZILMADI: `baskent` alanında "/" ile ayrılmış,
  //    yani SIRA değil YAN MERKEZ. `bk:` bir DİZİDİR, yan merkezler onun
  //    konusu değil.
  { id: "aydin",
    bk: [
      { f: "1308-01-01", t: "1329-01-01", ad: "Birgi" },
      { f: "1329-01-01", t: "1425-06-01", ad: "İzmir" }
    ],
    kaynak: "atlasın kendi `baskent` alanı (\"Birgi → İzmir (1329)\") + TDV " +
            "`aydinogullari`: İzmir \"1328 veya 1329\"da alındı. ⚠️ GÜN YOK, " +
            "yıl da TEK DEĞİL: aynı madde \"1334 sonrası\" İzmir'in siyasî " +
            "merkez olduğunu söylüyor — FETİH ile MERKEZ OLMA ayrı olabilir. " +
            "Yazılan 1329 bir ALT SINIRDIR, kesin gün DEĞİLDİR." },

  // ── FERRARA DÜKALIĞI — künye 1240-01-01 → 1859-01-01 ─────────────────
  // KAYNAK: atlasın kendi `baskent` alanı: "Ferrara → Modena (1598 sonrası)".
  // 1598'de Ferrara Papalık'a devrolunca Este hânedanı Modena'ya çekildi.
  // 🟡 TDV bu künyeyi kapsamıyor (İtalya, `§4`in %0 bölgesi) ⇒ dayanak
  //    projenin KENDİ kaydıdır; dışarıdan ikinci bir kaynakla
  //    DOĞRULANMADI ve bunu yazıyorum.
  // 🟡 "1598 SONRASI" ifadesi gün vermiyor ⇒ `§4`: YYYY-01-01.
  { id: "ferrara",
    bk: [
      { f: "1240-01-01", t: "1598-01-01", ad: "Ferrara" },
      { f: "1598-01-01", t: "1859-01-01", ad: "Modena" }
    ],
    kaynak: "atlasın kendi `baskent` alanı (\"Ferrara → Modena (1598 " +
            "sonrası)\"). ⚠️ TDV bu künyeyi KAPSAMIYOR (İtalya); dayanak " +
            "projenin kendi kaydıdır, DIŞARIDAN DOĞRULANMADI. Gün yok ⇒ " +
            "YYYY-01-01 (§4). \"1598 sonrası\" ifadesi bir ALT SINIRDIR." },

  // ═══ TUR 2 — beş künyelik dilim (M-2106 ③) ═══

  // ── HAMİDOĞULLARI — künye 1297-01-01 → 1391-01-01 ────────────────────
  //  TDV `hamidogullari` (200, gövde okundu):
  //    "Hamîd Bey, muhtemelen 1297 yılında müstahkem bir yer olan Uluborlu'yu
  //     hükümet merkezi yaptı."
  //    "Hükümet merkezinin Eğridir'e nakli MUHTEMELEN 1307 yılına veya biraz
  //     öncesine rastlamaktadır."
  // 🟢 Ve künyenin `f`si (1297-01-01) TDV'nin verdiği yılla BİREBİR tutuyor —
  //    bağımsız bir çapraz doğrulama.
  // 🟡 "MUHTEMELEN" iki kez geçiyor: kaynağın kendi ihtiyatı, ve gizlenmiyor.
  // 🔴 AD SEÇİMİ — `Diyarbekir/Diyarbakır` ailesinin dördüncü üyesi:
  //    TDV "Eğridir" yazıyor, atlasın `baskent` alanı "Eğirdir" diyor.
  //    ÖLÇÜLDÜ: yerleşim adı **"Eğirdir"** (VAR) · "Eğridir" (YOK).
  //    ⇒ `bk[].ad` ATLASIN yazımıyla yazıldı; kaynağın yazımı burada kayıtlı.
  // 🔴 `Isparta` YAZILMADI: "/" ile ayrılmış — sıra değil YAN MERKEZ.
  { id: "hamid",
    bk: [
      { f: "1297-01-01", t: "1307-01-01", ad: "Uluborlu" },
      { f: "1307-01-01", t: "1391-01-01", ad: "Eğirdir" }
    ],
    kaynak: "TDV `hamidogullari`: Uluborlu \"muhtemelen 1297\", Eğridir'e nakil " +
            "\"MUHTEMELEN 1307 yılına veya biraz öncesine\". ⚠️ Kaynak İKİ KEZ " +
            "\"muhtemelen\" diyor ⇒ 1307 bir ALT SINIRDIR, kesin gün DEĞİL. " +
            "AD: TDV \"Eğridir\" yazıyor, atlasta yerleşim \"Eğirdir\" — motorun " +
            "gördüğü ad yazıldı, kaynağınki bu nota kaydedildi." },

  // ── ADAL SULTANLIĞI — künye 1415-01-01 → 1887-01-06 ──────────────────
  //  TDV `harar` (200, gövde okundu):
  //    "Zeyla' Emirliği başşehrinin Zeyla'dan Valasma hânedanı sultanı Ebû
  //     Bekir b. Muhammed b. Ezhereddin tarafından 926'da (1520) Harar'a
  //     taşınması"
  // 🟢 Hicrî karşılığıyla birlikte verilmiş (926/1520) — bu turun EN SAĞLAM
  //    tarihi. Gün yok ⇒ `§4`: YYYY-01-01.
  { id: "adal",
    bk: [
      { f: "1415-01-01", t: "1520-01-01", ad: "Zeyla" },
      { f: "1520-01-01", t: "1887-01-06", ad: "Harar" }
    ],
    kaynak: "TDV `harar`: \"başşehrinin Zeyla'dan … 926'da (1520) Harar'a " +
            "taşınması\". Hicrî karşılığıyla verilmiş. Gün YOK ⇒ YYYY-01-01 (§4)." }

];

// ═══════════ BULUNAMADI — ve bu bir SONUÇTUR ═══════════
// Aranan ama yazılamayan künyeler. `§4`: *"bulunamadı demek bir SONUÇTUR ve
// uydurmaktan kat kat değerlidir."*
//
//   eretna     TDV `eretna` arandı, gövde okundu · "1335-1381 … Sivas ve
//              Kayseri merkez olmak üzere" — GEÇİŞ TARİHİ YOK
//   candar     TDV `candarogullari` arandı · Eflani → Kastamonu → Sinop
//              anlatılıyor ama TARİH YOK (yalnız Süleyman Bey ö. ~1341)
//   aydin      🟢 KISMÎ — yukarıda yazıldı
//
// 🔴 VE BİRİ ÖTEKİLERDEN FARKLI, AYRI İŞARETLENİYOR (koordinatör şartı):
//   celayirli  TDV `celayirliler` arandı, gövde okundu ·
//              🔴 HİÇBİR ŞEHRİ "BAŞKENT" DİYE ANMIYOR.
//              Bu "tarih yok" DEĞİL, **"başkent kavramı hiç kullanılmamış"**.
//              ⚠️ Aynı kovaya konursa bir gün biri *"eksik, tamamlayalım"*
//                deyip kaynağın SÖYLEMEDİĞİNİ yazar. Ayrı duruyor.
//
// ═══ TUR 2'NİN BULUNAMADILARI ═══
//   nizamsahiler  TDV `nizamsahiler` arandı · Ahmednagar'ın 1495'te başkent
//                 yapıldığı VAR, ama DEVLETÂBÂD'a geçiş tarihi YOK.
//                 🔴 VE BİR VERİ SORUSU: TDV, Melik Anber'in **Khirki
//                   (Evrengâbâd)**'yi merkez edindiğini söylüyor;
//                   **Devletâbâd'ı hiç anmıyor.** Yani yalnız TARİH değil,
//                   atlasın `baskent` alanındaki HEDEF ŞEHİR de şüpheli.
//                   Düzeltilmedi — koordinatöre bildirildi.
//   bengal-sultanligi  TDV `bengal-sultanligi` arandı · Gaur'un kuruluşu
//                 (Ballâl Sen, 1108-1119) var ama Pandua ↔ Gaur başkent
//                 değişiminin tarihi YOK. Sınıf: tarih yok.
//
// 🔴🔴 GOLKONDA — TARİHİ BULUNDU AMA **YAZILAMADI**, ve sebebi ÖNEMLİ
//   TDV `kutubsahiler`: *"Muhammed Kulı tarafından 1590-1591'de kurulan
//   Haydarâbâd da hânedana başşehirlik yapmıştır"* ⇒ tarih SAĞLAM.
//   AMA nokta sınavı: atlasta **`Haydarâbâd` YOK**; en yakın ad
//   **`Haydarâbâd (Sind)`** ve o **BAŞKA BİR ŞEHİR** — Pakistan'daki Sind
//   Haydarâbâd'ı, Dekken'dekinden ~1500 km uzakta.
//   ⇒ Yazılsaydı başkent yıldızı YANLIŞ ÜLKEYE düşerdi. Ad benzerliği
//     yine bir tuzak kurdu ve bu sefer NOKTA sınavı yakaladı.
//   📌 Ve bu, turun en önemli ayrımını gösteriyor:
//     **TARİH BULUNMASI ≠ KAYIT YAZILABİLMESİ.** Ad kapısı ayrı bir kapıdır.
//   ⇒ Dekken Haydarâbâd'ı `(c) EKSİK NOKTA` kovasına yazıldı; nokta gelince
//     bu künye TEK TURDA tamamlanır, tarihi hazır.
