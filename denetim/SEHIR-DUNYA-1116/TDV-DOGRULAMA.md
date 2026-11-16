# TDV tam gövde doğrulaması — F2 kayıtları (HAVVA 16 Kasım 2026)

**Yöntem:** gömülü tarayıcıda (islamansiklopedisi.org.tr, aynı origin `fetch`, 2,5 sn aralık) kayıtlardaki
`islamansiklopedisi.org.tr/<slug>` atıflı **35 TDV maddesinin tam gövdesi** alındı; kayıtların `ilk` / `kur` /
`olay[*]` öğelerindeki yıl (ve varsa hicrî yıl) maddede **sayı olarak geçiyor mu** denetlendi (basamaklı regex,
`(^|[^0-9])YIL([^0-9]|$)`). 35/35 sayfa 200 ve ≥2000 karakter döndü; hata 0.

**Kapsam:** 51 kayıt (A 13 · B 12 · C 4 · D 10 · G 7 · H 5) + bolgesiz I 4 / J 9 (TDV atıfları aynı yolla ayrıca
sınanmadı). 160 yıllı öğe sınandı. `sahip[*]` öğeleri (dönem sınırları; atlas dikişi/güvenli uç yılları içerir) bu
turda SINANMADI.

**Sonuç:** 160 öğeden 14'ü maddede bulunamadı:
- 7'si `hufuf` slug'ının Lahsâ'ya yönlendirmesinden (Hüfûf maddesi yok → aynı öğeler `lahsa` maddesinde bulundu): YANLIŞ ALARM.
- 6'sı kaydın kendisinde zaten "türetilmiş / güvenli uç" olarak beyanlı değerler:
  Bayburt `ilk`+`olay[0]` 0565 (Iustinianos dönemi 527-565, "güvenli uç 565"), Bergama `ilk` -0398 ("MÖ 399; yıl
  genel kronolojiden, TDV yıl vermez") ve `olay[1]` -0322/-0323, Doha `ilk` 1801 ("19. yüzyıl başı" güvenli uç),
  Vize `ilk` 0933 ("10. yüzyıl başı, güvenli uç").
- 1'i Hofuf `ilk` 1913: `lahsa` maddesinde `olay[6]` ile aynı yıl bulundu (`hufuf` sayfasında yok).
**Çelişen (maddede başka yıl olan) öğe: 0 tespit edildi** — ama bu test yalnız "yıl metinde geçiyor mu"yu ölçer;
yılın DOĞRU OLAYA bağlı olduğunu ölçmez (ör. yıl başka olayda geçiyor olabilir).

**Sınanmayanlar (borç):** (1) 135 öğenin TDV atfı URL'siz (osm.js kökenli A kayıtları: "TDV LAZKİYE", "TDV BAĞDAT",
"TDV EBÛZABİ", "TDV SÜLEYMANİYE (Irak)", "TDV ÜMMÜLKAYVEYN"…) — slug çözümü gerekir. (2) `sahip[*]`. (3) `tanik`
alanları birebir `includes()` ile sınanmadı (9'u zaten "[TDV özeti]" işaretli). (4) Özet-WebFetch'ten gelen
tarihlerin %7 hata oranı (LAB: 17/237) burada TDV tam gövdesine karşı yıl varlığı düzeyinde ölçüldü: 0 yıl
uyuşmazlığı; ayrıntılı alıntı sınaması yapılırsa sayı değişebilir.

## 2. tur — URL'siz TDV atıfları (HAVVA, 16 Kasım 2026, aynı yöntem)

Slug, TDV arama sayfasından çözüldü (ilk sonuç); 38 madde adı, 128 yıllı öğe (ilk/kur/ark/bit/olay; sahip hariç).
Yanlış çözülen 3 madde elle düzeltilip yeniden sınandı: BAHREYN (/bahreyn), SÜLEYMANİYE (Irak) (/suleymaniye--irak),
İBRÂHİM PAŞA, Kavalalı (/ibrahim-pasa-kavalali) → üçünde de ilgili tüm yıllar maddede VAR.

**Maddede bulunamayan yıllar ve hükümleri:**
- Lazkiye olay[3] (395, künye geçişi): TDV tarihi değil devletler.js künye geçişi (kaynak metni ikisini de sayıyor). YANLIŞ ALARM.
- Lazkiye olay[1] (-0063 = MÖ 64 astronomik): TDV "64" yazıyor → UYUMLU (astronomik sayım farkı).
- Lazkiye olay[11] (1050 civarı, "11. asrın ortası"), İskenderun olay[1] (650, "7. yüzyıl ortası"): yaklaşıklık kayıtta beyanlı. UYUMLU.
- Cidde ilk 656/644, Amâre ilk 1700, Yenice-i Vardar 1400, Trebinye ilk 960: güvenli uç / yüzyıl türevi, kayıtta beyanlı.
- Kalavun olay[20] (1287/686): KALAVUN maddesinde 1285/684 var, 1287/686 yok; LAZKİYE maddesinde 1287 ve 686 VAR →
  ATIF HATASI (yıl doğru, kaynak adı yanlış madde). Düzeltme önerisi: olay kaynağı "TDV LAZKİYE".
- Trebinye olay[1] (1378): TDV TREBİNYE yalnız "Tvrtko 1353-1391" veriyor; 1378 Hrvatska enciklopedija'dan →
  ATIF HATASI (kaynak "TDV TREBİNYE" yazıyor, HE'ye çevrilmeli).

**Sonuç:** yıl ÇELİŞKİSİ 0; ATIF düzeltmesi gereken 2 olay (Kalavun, Trebinye 1378). İki turda toplam 288 yıllı öğe
sınandı (160 + 128). Hâlâ sınanmayanlar: sahip[*] dönem sınırları, tanik alıntılarının birebir includes() sınaması,
URL'siz atıflarda adı çözülemeyen az sayıda yan alıntı.
