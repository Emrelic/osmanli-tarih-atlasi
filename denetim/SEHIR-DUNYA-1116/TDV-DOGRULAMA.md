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
