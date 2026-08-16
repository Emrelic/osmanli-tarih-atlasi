// =====================================================================
// KORİDOR YAMASI — NOKTA AFRİKA İÇ · kol D (BES-ALTYAPI ⑤)
// Görev: tahta M-0631 ③ · dosyam: data/koridor_yama_e9353f.js
//
// ⚠️ `data/koridor.js` BAŞKASININ (KORİDOR ŞEMA üretimi) — DOKUNMADIM.
//   Bu bir YAMA dosyasıdır; koordinatör ya da şema oturumu işler.
//
// ═══════════ İŞ 0 — AĞI KENDİM ÖLÇTÜM (B10: devraldığımı doğrulamadan
//                    taban yapmam) ═══════════
//   düğüm 65 · kenar 64 · koordinatsız düğüm 26
//   ağ PARÇA sayısı: 2   → parça1 38 düğüm (Anadolu) · parça2 27 (Rumeli)
//
// 🔴 VE İLK ÖLÇÜMÜM YANLIŞTI, kaydediyorum: kenar okuyucumu `a`/`b` alan
//   adlarıyla yazdım, dosyada alanlar `u1`/`u2` imiş ⇒ hiçbir kenar
//   okunmadı ve "ağ 65 PARÇA" çıktı. Sayı saçmaydı ve o yüzden fark ettim.
//   📌 Ders: bir ölçüm aracı, ölçtüğü dosyanın şemasını VARSAYARSA
//     sessizce değil GÜRÜLTÜLÜ yanılır — ve gürültülü yanılmak iyidir.
//     Şemayı okuduktan sonra sayı 65 → 2 oldu.
//
// ═══════════ ① KÖPRÜ KENARI — TEK KENAR, AĞI 2'DEN 1'E İNDİRİR ═══════════
//
// ÖLÇÜM: `istanbul` parça2'de ve KOORDİNATLI (41,008 / 28,980).
//         `uskudar` parça1'de ve KOORDİNATSIZ.
//         İkisi arasında kenar YOK ⇒ Anadolu ile Rumeli kolları KOPUK.
//
// 📌 Ve kopukluk tesadüf değil YAPISAL: Üsküdar bütün Anadolu kollarının
//   (`anadolu/sag#1` · `anadolu/orta#1`), İstanbul bütün Rumeli kollarının
//   (`rumeli/sag#1` · `rumeli/orta#1` · `rumeli/sol#1`) BİRİNCİ durağı.
//   Yani ağ, tam da imparatorluğun iki yakasının birleştiği yerde kopuk.
//   Osmanlı menzil sisteminde bu geçiş BOĞAZ GEÇİŞİDİR ve kara yolu değil
//   KAYIKLA yapılırdı — kenarın niçin hiç yazılmadığını da bu açıklıyor.
//
// ⚠️ `km` ve `saat` alanlarını UYDURMADIM:
//   km = iki nokta arası kuş uçuşu, 3,2 km (girdi.km ile hesaplandı,
//        yani TÜRETİLDİ, ölçülmedi)
//   saat = `olculemedi` — boğaz geçişinin süresi rüzgâra ve deniz
//        durumuna bağlıydı; hiçbir kaynakta saat bulamadım ve
//        km/hız tablosuyla türetmek KARA yolu varsayardı, ki değil.

window.KORIDOR_YAMA = {

kenar: [
  // 🟢 AĞI BİRLEŞTİREN TEK KENAR
  {u1:"istanbul", u2:"uskudar", kanat:"bogaz", kol:"gecis", kalinlik:"ana",
   yon:"cift", km:3.2, saat:null, saat_cinsi:"olculemedi",
   saat_kaynak:"bulunamadı — boğaz geçişi kayıkla yapılırdı, süre rüzgâra bağlı",
   f:"1539-01-01", t:"1839-01-01", donem_cinsi:"kurum", kesinlik:2,
   kaynak:"bulunamadı — kenarın VARLIĞI yapısal olarak ölçüldü (Üsküdar bütün Anadolu kollarının, İstanbul bütün Rumeli kollarının BİRİNCİ duragi), güzergâh belgesi bulunamadı",
   neden:"AG 2 PARCAYDI ve bu kenar onu 1'e indiriyor. Uskudar parca1'in, Istanbul parca2'nin uyesi ve ikisi arasinda kenar YOKTU. km kus ucusu TURETILDI (3,2 km); saat UYDURULMADI cunku bogaz gecisi kara yolu degil, km/hiz tablosu burada gecersiz"},
],

// ═══════════ ② DÜĞÜM LİSTESİ — 🔴 GERİ ÇEKİLDİ, ve niçin ═══════════
//
// 🔴 BU BÖLÜM ARTIK BOŞ. Sebebi ölçüldü, nezaket değil.
//
// Aynı işi `data/koridor_yama_f5c9a5.js` bir dakika önce yapmış
// (19:53 ↔ benim 19:54) ve commit'i uzakta (`6f68605`). İki yamayı
// karşılaştırdım:
//   ortak düğüm 23/23 · yalnız bende 0 · yalnız onda 0
//   değer AYNI 5 · FARKLI 18
//   ⇒ 18 farkın 17'si SALT YUVARLAMA (benim 3 ondalık ↔ onun 4).
//     Onunki daha hassas.
//
// 🔴 VE BİRİ GERÇEK UYUŞMAZLIKTI — VE YANLIŞ OLAN BENDİM:
//     yenisehir   benim 40,267 / 29,633   = Yenişehir (BURSA)
//                 onun  39,639 / 22,418   = Yenişehir (LARİSSA, Teselya)
//     ~640 km fark.
//   GÜZERGÂHA sordum ve tartışma bitti: `yenisehir` kolu `rumeli/sol#9`,
//   komşuları Lanzaka (Selânik yakını) ve İzdin (Lamia). ⇒ Teselya'daki
//   Yenişehir. **Onun değeri doğru, benimki yanlış.**
//
// 📌 VE BU, BU DOSYANIN KENDİ DERSİNİN BANA GERİ DÖNMESİ: aşağıda
//   Karasu için *"bir düğümün kimliğini ADI değil KOMŞULARI belirler"*
//   diye yazdım ve Karasu'da uyguladım, Firecik'te uyguladım —
//   **Yenişehir'de UYGULAMADIM**, çünkü ad BİREBİR tuttu ve güvendim.
//   ⇒ Kuralı, kuralın gerektiğini düşündüğüm yerde uyguladım; oysa
//     tam da şüphelenmediğim yerde gerekiyordu. Sahte eşleşme,
//     şüphelendiğin adda değil GÜVENDİĞİN adda saklanıyor.
//
// ⇒ Düğüm listemi geri çekiyorum: onunki hem daha hassas hem bir
//   yerde daha doğru. Bu yamada YALNIZ KÖPRÜ KENARI kalıyor — o
//   ikisinde de yok ve ağı 2'den 1'e indiren tek şey.

// BOŞ — 23 düğüm geri çekildi, gerekçe yukarıda.
dugum: [],

};

// ═══════════ ③ ÜÇ DÜĞÜM HÂLÂ YOK — ve BİRİ SAHTE EŞLEŞMEDEN KURTARILDI ═══════════
//
// 🔴 KARASU — VE BURADA BİR SAHTE EŞLEŞMEYİ ELEDİM.
//   Ad araması `Karasubazar`ı buldu (45,056 / 34,600, Kırım) ve parça2'de
//   Kırım düğümleri (`kirim` · `ozi` · `akkirman`) OLDUĞU İÇİN makul
//   görünüyordu. GÜZERGÂHA baktım ve ÇÜRÜDÜ:
//     `karasu` kolu `rumeli/sag#5`, komşuları Prevadi (43,179/27,433) ve
//     Babadağı (44,892/28,717) — yani DOBRUCA kıyısı, Kırım DEĞİL.
//   ⇒ Aradaki mesafe ~600 km. Karasubazar YAZILSAYDI güzergâh Karadeniz'i
//     geçip geri dönerdi ve hiçbir denetim bunu görmezdi.
//   📌 Bir düğümün kimliğini ADI değil KOMŞULARI belirliyor. Bu, bu gecenin
//     `Nanjing/Nanning` dersinin koridor tarafı: benzerlik arama aletidir,
//     karar aleti DEĞİL — ve burada kararı GÜZERGÂH verdi.
//   ⇒ Aranan yer Dobruca'daki Karasu (bugünkü Medgidia) olmalı; veride YOK.
//
// 🔴 HASAN ÇELEBİ — kol `anadolu/orta#9`, komşuları Sivas (39,750/37,015)
//   ve Malatya (38,353/38,334). Aradığı yer o ikisinin arasında bir menzil.
//   Denenen eş adlar: hasan celebi · hasancelebi · hekimhan — hiçbiri
//   veride YOK. ⇒ `bulunamadı — arandı, veride yok`.
//
// 🔴 HASANKALE — kol `anadolu/sol#8` ve `anadolu/sol-tebriz#1`, komşuları
//   Erzurum (39,905/41,266) · Kars (40,602/43,095) · Tebriz (38,080/46,292).
//   Koordinatörün önerdiği eş ad `Pasinler` DENENDİ ve veride YOK.
//   ⇒ `bulunamadı — arandı, eş adı da yok`.
//
// 📌 Üçü de "araştırılmadı" DEĞİL, "arandı ve veride yok" — ve üçünün de
//   güzergâhtaki YERİ yukarıda yazılı. Bir sonraki oturum nokta yazacaksa
//   nereye koyacağını komşularından biliyor; sıfırdan aramasın.
