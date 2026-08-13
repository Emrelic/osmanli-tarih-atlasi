// =====================================================================
// HAMÂD DOLGUSU — ölçülmüş bir kararın uygulanması
// PETEK/NOKTA oturumu · 3 Ağustos 2026
// =====================================================================
// ⚠️ HENÜZ CANLI DEĞİL — `arac/girdi.py` GIRDI_DOSYALARI'na EKLENMEDİ.
// ⚠️ Koşu 12:43:31'de girdinin anlık görüntüsünü aldı; bağlı dosyaların
//    hiçbirine dokunulmadı. Bu dosya bağlı DEĞİL, koşuyu bozmaz.
// 🔴 OTURUM 0'A: bağlarken `denetle.py` `BEKLENEN_SAHIPSIZ` **55 → 56**.
//
// ── KARAR NASIL VERİLDİ ─────────────────────────────────────────────
// Soru aylarca ikili kaldığı için cevaplanamıyordu: *"Hamâd Osmanlı
// bâdiyesi mi, devletsiz aşiret çölü mü?"* Koordinatör soruyu ölçülebilir
// hâle getirmeyi istedi; ölçüm şunu gösterdi (`ILERLEME.md` PARTİ 5):
//
//   HAMÂD kutusu 30,5-35,0K / 36,5-42,5D · 248.342 km²
//   1600'de 182.881 km² (%74) OSMANLI boyanıyor
//   — ve bunu kimse KARAR VEREREK yapmadı: çevredeki vaha kasabaları
//     (Tedmür · Âne · Hît · Deyrizor · Şam) Osmanlı olduğu için petekleri
//     ortalama 121 km, en uzağı 268 km çöle uzanıyor.
//
// 🔴 BULGUNUN KENDİSİ: **hiçbir şey yapmamak tarafsız değildi.**
//    182.881 km² için "Osmanlı bâdiyesi" demek zaten verilmiş bir karardı;
//    verilmemiş olan yalnız onun BİLİNÇLİ olmasıydı. Motor boşluğu
//    komşunun kimliğiyle doldurduğu için her ölçülmemiş boşluk sessizce
//    verilmiş bir hükümdür.
//
// ── NİÇİN TEK NOKTA, NİÇİN İKİNCİSİ DEĞİL (koordinatörün hükmü) ─────
// Osmanlı Bâdiyetü'ş-Şâm'da YOK DEĞİLDİ: emîrü'l-bâdiye vardı, Aneze ve
// Şammar'a tahsisat ödeniyordu, Hac yolu ve menzil kaleleri korunuyordu.
// Ama bu **güzergâh ve vaha denetimiydi**, iç çölün idaresi değil.
// Ölçüm bunu zaten söylüyor: Hamâd'ı yutan noktaların HEPSİ gerçek Osmanlı
// merkezleri. Bir dolgu iç çölü açar, kenarı ve güzergâhı Osmanlı bırakır.
//   %74 → %52  ← tam olarak bu tablo
//   %74 → %32  ← İKİNCİ nokta bunu verirdi ve FAZLA olurdu; Tedmür'ün ve
//                Âne'nin gerçekten yönettiği yeri de sahipsiz yapardı.
// 📌 Kuzey Arabistan'da beş dolgu kabul edildi çünkü orada güzergâh bile
//    yoktu; burada var. Aynı araç, farklı doz.
//
// ── ÖLÇÜLMÜŞ SABİT — sonraki çöl kararlarında kullanılacak ──────────
// 🔴 **Bir sahipsiz dolgu noktası ~46.000-54.000 km² döndürüyor.**
//    Konuma göre ölçülen değerler (Osmanlı'dan DÜŞEN alan):
//      Rutbe hizası  33,05/40,28   53.913 km² (%21,7)   ← seçilen
//      Hamâd kuzeyi  33,80/39,00   49.774 km² (%20,0)
//      kutu merkezi  32,75/39,50   46.121 km² (%18,6)
//      Hamâd güneyi  31,50/40,50   33.414 km² (%13,5)
//    Bu sayı artık tahmin değil; çölde nokta sevkinin birim etkisidir.
// ⚠️ `§3.5.1` öbür uç da ölçüldü: nokta toplam 63.765 km²'yi sahipsiz
//    yapar; bunun 9.852 km²'si ZATEN sahipsizdi ⇒ **net yeni boşluk
//    53.913 km²**. Suriye ile Irak arasını açıyor ama kenarları değil
//    ortayı açıyor — kasabalar ve güzergâh Osmanlı kalıyor.
//
// ── ÖN KOŞULLAR ─────────────────────────────────────────────────────
// maske ✓ içeride (33,05/40,28 ve çevresinde 25 örnek noktanın 25'i kara)
// 3 km  ✓ en yakın nokta **220,05 km** (Âne) — depodaki en izole kayıt
// renk  — gerekmiyor: hiç `s:` yok
// Değişmez 2 ✓ hiç `d:`/`v:` yok ⇒ KIRILMA ÜRETMİYOR, borç sıfır
// Değişmez 1 — KASITLI sahipsiz; `Vâdî Sirhân` · `Rub'ul Hâlî kuzeyi` ile
//   aynı sınıf. Sayaç 55 → 56.
// 📌 `kasitli_bosluk:` YAZILMADI ve sebebi ölçüldü (PARTİ 2a):
//   `denetle_bosluk.py:251` ilk süzgeci **kalıcı sahipsizliği** zaten
//   yakalıyor (`not (d or v or s)` → "KASITLI SAHİPSİZ"), bayrağa hiç
//   sıra gelmiyor. Vâdî Sirhân'da da yazılmamıştı. Bayrak yalnız DÖNEMİ
//   OLAN noktalar için gerekli.
// =====================================================================

window.YERLESIMLER_EK4 = [

{ ad:"Hamâd (Bâdiyetü'ş-Şâm içi)", tur:"bolge", lat:33.05, lon:40.28, g:0, k:0, d:[], kasitli_bosluk:true, bos:"kabile", neden:"Hamâd, Suriye Çölü'nün iç kesimidir ve bedevi aşiretlerin (Rüvele, Anize) göçer denetimindeydi, yerleşik devlet idaresi yoktu." },

// =====================================================================
// ZAPOROJYE SEÇİ — `zaporojye` kimliğine İLK GÖVDE
// =====================================================================
// RENK'in raporu: `renkler.py:643` `"zaporojye": ("Zaporojye Kazak
// Hetmanlığı", "#8c92fe")` tanımlı, `devletler.js` künyesi tam
// (1552-01-01 → 1775-06-16, başkent Zaporojye Seçi), ama **veride kullanım
// SIFIR** — "① EKSİK, GÖVDE BEKLENMİYOR" diye işaretlenmişti. Bu kayıt o
// bayrağı kapatıyor: ölçüldü, nokta **33.669 km²** kapıyor.
//
// 🔴 AMA KOORDİNATÖRÜN VERDİĞİ ÜÇ HÜCREYE DEĞİL — ölçüm başka yeri gösterdi.
// Sevkte "8·10·13'ü açabilirsin, zaporojye kimliği var" deniyordu. Ölçtüm:
//   hücre 8  (48-50K/38-40D, Donets)      Seç'e **317 km**
//   hücre 10 (46-48K/42-44D, aşağı Don)   Seç'e **604 km**
//   hücre 13 (48-50K/36-38D, Harkov)      Seç'e **191 km**
// TDV `ukrayna`: Seç, Dinyeper'in **çağlayanları (Porog) bölgesinde** ~1552'de
// kuruldu; **"Don Kazakları ayrı bir topluluktu, farklı coğrafî bölgede."**
// `devletler.js` özeti de aynı şeyi söylüyor: *"Dinyeper aşağısında."*
// ⇒ Üç hücreye `zaporojye` yazmak, kimliği 200-600 km uzağa taşımak olurdu —
//   Kırım'ı olmadığı yere taşımaktan farkı olmazdı. Onlar AÇILMADI (aşağıda).
//
// ── 1654 PEREYASLAV: İKİ UÇ DA GÖSTERİLDİ, KARAR YAZILMADI ──────────
// Koordinatör "benim yerime karar verme ama iki ucu da göster" dedi.
//   UÇ A — 1654'ten `s:rusya`:
//     TDV `ukrayna`: Pereyaslav ile Ukrayna "Moskova'nın hâkimiyetine girdi;
//     antlaşma sadece himaye değil TÂBİYET anlamına geliyordu."
//     ⇒ `zaporojye` gövdesi 102 yıla (1552-1654) iner.
//     ✗ Ama `devletler.js` künyesi 1775'e kadar yaşatıyor ve kendi
//       kronolojisinde *"1711 bir kesimi Osmanlı himayesine sığındı
//       (Aleşki Seçi)"* yazıyor — 1654'te bitmiş bir devlet 1711'de
//       Osmanlı'ya sığınamaz.
//   UÇ B — 1775'e kadar `zaporojye`:
//     ⇒ gövde 223 yıl; künyeyle ve `§3.5` ömür kuralıyla tam uyumlu.
//     ✓ Ve TDV'nin kendi cümlesi bunu destekliyor: 1667 Andrusova'dan sonra
//       Ukrayna ÜÇE bölünür — Sağ Yaka Lehistan, Sol Yaka Rusya, **güney
//       Kırım Hanlığı üzerinden Osmanlı nüfuzunda.** SEÇ GÜNEYDEDİR.
// 🔴 ÇELİŞKİYİ ÇÖZEN AYRIM: Pereyaslav **HETMANLIĞI** (Sol Yaka) bağladı,
//    **SEÇ'i** (aşağı Dinyeper, güney) değil. İkisi aynı adı taşıyan iki
//    ayrı şeydir. Bu kayıt SEÇ'tir ⇒ UÇ B yazıldı.
//    ⚠️ Sol Yaka Hetmanlığı için ayrı bir nokta açılırsa UÇ A geçerlidir;
//      o nokta bu kaydın zincirini KOPYALAMAMALI.
//
// ── ÖN KOŞULLAR ─────────────────────────────────────────────────────
// maske ✓ · 3 km ✓ en yakın 95,8 km (Yediçkul bozkırı)
// renk  ✓ `altinorda` · `kirim` · `zaporojye` · `rusya` — dördü de BOYALAR'da
// Değişmez 2 ✓ hiç `d:`/`v:` yok ⇒ KIRILMA ÜRETMİYOR, borç sıfır
// Değişmez 1 ✓ 1281→1923 KESİNTİSİZ (sahipsiz sayacına katkı YOK)
// 📌 1502-03-01 `Bozkır (Deşt-i Kıpçak)`tan; 1552-01-01 ve 1775-06-16
//    `devletler.js` künyesinin kendi tarihleri.
{ ad:"Zaporojye Seçi", tur:"kale", lat:47.75, lon:34.80, g:0, k:0, d:[],
  s:[{f:"1281-01-01",t:"1502-03-01",d:"altinorda"},{f:"1502-03-01",t:"1552-01-01",d:"kirim"},{f:"1552-01-01",t:"1775-06-16",d:"zaporojye"},{f:"1775-06-16",t:"1923-10-29",d:"rusya"}] },

// ── LİBYA İÇ ÇÖLÜ — koordinatörün kararı, tek nokta ─────────────────
// Karar gerekçesi (koordinatör): Osmanlı Libya'da **kıyı + vaha** devletiydi —
// Trablus, Bingazi, Derne, Tobruk, Cağbûb, Câlû gerçek merkezlerdi; Sirte'nin
// iç çölü değildi. Ölçüm bunu zaten gösteriyordu: kutuyu yutan dördün de
// (Cağbûb %20,8 · Câlû %18,1 · Ecdâbiye %16,2 · Tobruk) 1600'de Osmanlı.
//
// ÖLÇÜM (27,5-31,5K / 18,0-25,0D · 279.356 km² · ort. yarıçap 104 km):
//   1600'de OSMANLI boyanan 179.166 km² (%64)
//   bu nokta döndürür: 38.921 km² (%13,9)
// 📌 Marjinal kazancın Hamâd'dan düşük olması (%13,9 vs %21,7) ALEYHTE değil
//    LEHTE delil: orada zaten ÜÇ dolgu var (Sirte iç çölü · Serîr Kalanşû ·
//    Serîr, toplam %34,7) — yani atlas bu çölde "kasten boş" kararını çoktan
//    vermiş, eksik olan tek hücreydi. Yarım bırakılmış karar, hiç
//    verilmemişten kötüdür.
// ⚠️ Bu hücre PARTİ 4'te benim tarafımdan "KASTEN BOŞ, dokunulmadı" diye
//    YANLIŞ etiketlenmişti; adına bakıp ölçmemiştim (`Sirte iç çölü` dolgusu
//    400 km batıda). Ölçüm AÇ dedi, düzeltildi.
// 3 km: en yakın nokta 52,19 km (Câlû) ✓ · maske ✓ · d:/v: yok ⇒ borç sıfır
{ ad:"Libya iç çölü (Sirte ardı)", tur:"bolge", lat:29.50, lon:21.50, g:0, k:0, d:[], kasitli_bosluk:true, bos:"devletsiz", neden:"Sirte'nin ardındaki Libya iç çölü, Osmanlı Trablusgarp idaresinin kıyı-vaha ekseninin dışında kalan denetimsiz bir alandı." },

// ── SLOBODA — 🔴 `zaporojye` YAZILMADI, sebebi aşağıda ───────────────
// Koordinatör: *"Harkov çevresi (Sloboda Ukrayna) → zaporojye ekseni,
// kimlik HAZIR, aç."* **Yazmadım ve gerekçesi kaynak yokluğudur.**
//
// TDV `ukrayna` Sloboda Ukrayna hakkında **HİÇBİR ŞEY söylemiyor**: ne idarî
// yapısı, ne Harkov'un kuruluşu, ne Sloboda alaylarının kime bağlı olduğu,
// ne de 1667 bölüşümüne dahil olup olmadığı. Maddenin verdiği tek şey
// Andrusova'nın ikili bölüşümü: *"Özü nehrinin batısı (Sağ Yaka) Lehistan'ın,
// doğusu (Sol Yaka) Kiyef dahil Rusya'nın hâkimiyetine girdi."*
// ⇒ Sloboda, Seç'in idaresinde olduğuna dair TEK bir kaynak cümlesi yok.
//   `zaporojye` yazmak, Don için reddettiğim şeyin aynısı olurdu: **kimliği
//   coğrafyasının dışına taşımak.** Kimlik bir iddiadır; kaynaksız iddia
//   yazılmaz.
// 📌 Ve buna gerek de yok: `Harkov` kaydı ZATEN doğru periyotlu —
//   `altinorda 1281→1441 · kirim 1441→1654-01-01 · rusya 1654→1923` — ve bu,
//   TDV'nin "Sol Yaka Rusya'nın" cümlesiyle uyumlu. Eksik olan SAHİPLİK
//   değil ÇÖZÜNÜRLÜK'tü.
//
// ⇒ Aşağıdaki nokta YENİ BİR İDDİA TAŞIMIYOR: zinciri Harkov'un birebir
//   aynısı, tek işi hücre 13'ün çözünürlüğünü artırmak.
//   ÖLÇÜM: hücre 13 (48-50K/36-38D) ortalama yarıçap **115 km → 67 km (1,7×)**.
// 3 km: en yakın 112,7 km (Harkov) ✓ · maske ✓
// Değişmez 2: hiç `d:`/`v:` yok ⇒ kırılma üretmiyor, borç sıfır
// ⚠️ GÜN 1654-01-01 DEĞİL **1654-01-18** — koordinatörün kararı, ölçüme dayalı.
//    `Poltava` aynı olayı (Pereyaslav) zaten `1654-01-18` ile yazıyor;
//    Harkov ise `1654-01-01` yer tutucusu taşıyordu. Aynı olay iki farklı gün
//    olamaz. Harkov'u Oturum 0 taşıyacak, bu kayıt önden hizalandı.
//    📌 `s:→s:` geçişi olduğu için değişiklik hiçbir kırılma/borç üretmiyor.
{ ad:"Sloboda bozkırı", tur:"bolge", lat:49.20, lon:37.20, g:0, k:0, d:[],
  s:[{f:"1281-01-01",t:"1441-01-01",d:"altinorda"},{f:"1441-01-01",t:"1654-01-18",d:"kirim"},{f:"1654-01-18",t:"1923-10-29",d:"rusya"}] },

];

// =====================================================================
// 8 · 10 · 13 — AÇILMADI, ve sebep artık "kimlik yok" DEĞİL
// =====================================================================
// Koordinatör `zaporojye`nin var olduğunu gösterince engel kalktı sanıldı.
// Ölçüm başka bir engel gösterdi: **kimlik var ama COĞRAFYASI TUTMUYOR.**
//
//   hücre 8  Donets      Seç'e 317 km · içinde nokta YOK
//            yutan: Rostov (Don) 203 km · Azak 212 km · Bozkır 227 km
//   hücre 10 aşağı Don   Seç'e 604 km · içinde nokta YOK
//            yutan: Bozkır 183 km · Kalmuk bozkırı 199 km · Tsaritsyn 221 km
//   hücre 13 Harkov      Seç'e 191 km · içinde Harkov VAR
//            Harkov zaten: kirim 1441→1654-01-01, sonra rusya
//
// ⇒ 8 ve 10 **DON KAZAK ORDASI** coğrafyasıdır ve o kimlik atlasta YOK
//   (`zaporojye` var, `nogay` var, Don yok). TDV `ukrayna` ikisinin ayrı
//   topluluk olduğunu açıkça söylüyor.
// ⇒ 13 zaten periyotlanmış: Harkov 1654'te Rusya'ya geçiyor (Sloboda
//   Ukrayna'nın kuruluş yılı). Eksik olan SAHİPLİK değil ÇÖZÜNÜRLÜK —
//   ve orası `ONCELIK.md` halkasında Kırım'ın kuzeyi, acil değil.
//
// 📌 SIRADAKİ İŞ (VERİ KİMLİK'e): **Don Kazak Ordası** kimliği.
//    Gelince 8 ve 10 tek partide açılır; koordinatları ve ölçümleri burada.

