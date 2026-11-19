# YAZILAMADI — UMIT19 OSM-2 (19 Kasım 2026)

Aday: `.umit19_aday_osm.tsv` sira 41-80 (40 satır). Yazılan: 13 (`data/sehir_tarihce_umit19_osm_2.js`). Yazılamayan: 27.
Yöntem: TDV tarayıcıda okundu; TDV'de madde bulunamayan (slug aramaya düştü) adlar için ikinci basamak (İSAM/TTK/DergiPark/Britannica) bu turda koşulmadı.

## Atlas başlangıcı düzeltilmeli (kayıt yazıldı, sahip: [] — en erken tanık atlas başlangıcından sonra)
- Tosya (atlas 1000 bizans; TDV ilk tanık 475H = 1082-06-01)
- Divriği (atlas 1000 bizans; TDV 1066)
- Beyşehir (atlas -0024 roma-imp; TDV 'yeniden kuruldu' ~1240)
- Alaşehir (atlas -0128 roma-cumhuriyeti; TDV MÖ II. yy Attalos Philadelphos kuruluşu, güvenli uç -0100)

## TDV'de madde yok / bulunamadı (slug denendi): kaynak basamağı 2+ gerekir
- 41 Edfû, 42 Esna, 43 Fâkûs, 44 Kafrüşşeyh, 45 Kûm Ombo, 47 Uksur (edfu/esna/fakus/uksur/luksor 200→arama)
- 46 Süveyş: TDV 'suveys' maddesi kanal maddesi; en erken yıl+şehir tanığı 1538 (atlas -0029 roma-cumhuriyeti'nden sonra); eski Kulzüm tarihsiz
- 53 Ermenek, 57 Eğirdir, 58 Uluborlu, 59 Yalvaç, 75 Datça, 76 Fethiye (Makri), 73 Sincar, 65 Darende, 72 Zevîle (Zawila) — slug bulunamadı
- 64 Eski Malatya (Battalgazi): 'battalgazi' slug yok; Malatya kaydı `sehir_tarihce_osm.js`te (38.35;8 km ayrı nokta)
- 50 (Akşehir yazıldı), 52 Ereğli (Konya): TDV 'eregli' maddesi Karadeniz Ereğlisi'ni (Herakleia Pontike) anlatıyor, Konya Ereğlisi değil; 'eregli-konya' slug yok → YAZILMADI
- 54 Silifke: mükerrer — `sehir_tarihce_osm.js` ve `sehir_tarihce_yakin-dogu-b.js` zaten kayıtlı
- 49 Sin (Sinj), 60 Chełm, 61 Volodymyr, 67 Damala (Troizen), 68 Ermiyoni, 69 Gördüs (Korint), 71 Methana: Doğu Avrupa / Yunan şehirleri, TDV kapsamı dışı; Britannica/TIB/yabancı akademik basamak bu turda koşulmadı
- 66 Elbistan yazıldı; 55 Yafa yazıldı; 70 Koron yazıldı; 74 Balat (Palatia), 77 Milas yazıldı (Milas); Balat TDV'de ayrı madde bulunamadı (Palatia/Miletos için ayrı arama gerekir)
- 56..59 grubundan yalnız Alaşehir yazıldı
- 62 Besni, 63 Divriği, 78 İstanköy, 79 Dahlak, 80 Zeyla yazıldı

## Zayıf yönler (yazılanlarda beyanlı)
- Hepsi TEK KAYNAK (TDV).
- Yafa: kudus-kralligi 1099-01-01 künye 1099-07-15'ten önce (hayalet uyarısı; TDV yalnız yıl veriyor); 1187-1228 arası boşluk beyanlı; 1228 olayı tahkimdir, el değiştirme değildir.
- İstanköy: 1000 bizans dikişi `dikis_beyan` ile borçlu.
- Elbistan: 951-1111 boşluk; atlas 1111 selcuklu dikişi TDV'de Selçuklu kimliğiyle yazılı değil (İlarslan/Malatya Melikliği).
- Akşehir, Alaşehir, Zeyla: yalnız yüzyıl verildi (güvenli uç yüzyıl sonu).
