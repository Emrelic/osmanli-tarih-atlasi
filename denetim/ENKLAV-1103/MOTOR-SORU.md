# MOTOR-SORU — `enklav:true` kale noktasının Voronoi hücresi karaya taşıyor

Yazan: LAB SALI · 4 Kasım 2026 gecesi · koordinatör EMRELİC 1 KASIM kararıyla bu gece **uygulanmadı**
(tuz değişikliği ister: `uret_petek.py`). Emre / HAVVA sabah görecek.
Ölçüm: koşu 32 çıktısı (`coz-c`, taban `01d545bdb`), alet `olc_enklav_1103.py`, ayrıntı `ADAYLAR.md`.

## Soru

`VERI-YAPISI.md` `enklav:true` için şunu söylüyor: tutan devlet yalnız kaleyi/şehri/limanı tutar, kara tarafı
başkasınındır; motor (`_ENKLAV`) bu noktaya **yetim yüz devretmez**. Ölçüm gösteriyor ki bayrak kale noktasının
**kendi Voronoi hücresini** sınırlamıyor. Kıyıdaki kalenin hücresi, karada daha yakın komşu nokta yoksa onlarca
km içeri uzanıyor ve kale devletinin rengiyle boyanıyor. Ortaya hinterlandı olmayan presidionun karada
"enklav parçası" çıkıyor.

## Ölçülen vakalar

| aday | devlet | yıllar | kesit | parça alanı | nokta | parça içinde nokta | en yakın komşu nokta |
|---|---|---|---|---|---|---|---|
| E083 | ispanya (Oran, Mersa'l-Kebîr `enklav:true`) | 1509-05-17 → 1708-04-04 | 167 | 1.430 km² | 35,43K −0,54D | 0 | Oran 32 km · Ayn Temûşent 56 km (OSMANLI) |
| E084 | ispanya (aynı) | 1732-07-01 → 1792-09-12 | 39 | 1.430 km² | aynı | 0 | aynı |
| E082 | fransa-cumhuriyet (Oran `eksklav:true`) | 1831-01-04 → 1841-05-30 | 10 | 1.430 km² | aynı | 0 | Ayn Temûşent/Muaskar abdulkadir |
| E104 | ispanya (Bâdis / Peñón de Vélez `enklav:true`) | 1564-01-01 → 1673-01-01 | 63 | 174 km² | 34,82K −4,06D | 0 | el-Hüseyme 49 km (sadi); Nekor o devirde yok |

Toplam: dört aday, aynı iki parça; ~290 yıl boyunca haritada hinterlandsız kalelerin içerideki "enklavı".

Yan vaka (aynı aileden değil, geometri): **E111** Kaçar, 1812-01-01 → 1925-10-31, 97 km², Basra'da Şattülarap
kıyısında; koridor 0,1 km, 14 kesitin 9'unda DAR-AYRIM. Nehir yaslanmasının artığı olabilir.

## Ölçülmedi / varsayım

- Oran parçasının Oran'ın kıyı hücresinden **niçin kopuk** olduğu ölçülmedi. Varsayım: Oran Sebhası (tuz gölü,
  göl maskesi) hücreyi ikiye bölüyor. Doğrulamak için o kesitte Oran hücresi ile `goller`/göl maskesi kesişimi
  ölçülmeli.
- `_ENKLAV` kodunun hücreyi kırpıp kırpmadığı okunmadı (motor koduna bu gece dokunulmadı).

## Seçenekler (öneri sırası)

1. **Motor:** `enklav:true` nokta, hücresinin yalnız kaleye yakın kısmını (ör. ≤ R km ya da kıyı tamponu) alır,
   kalanı en yakın enklav-olmayan noktaya devreder. Tuz değişikliği → tam inşa (7-8 saat).
2. **Veri (motorsuz):** kalenin karşısına, o devirde var olduğu kaynakla gösterilen yerel nokta
   (Oran güneyi: Mekerra/Tlelat yöresi; Bâdis karşısı: Bâdis şehri ya da Targuist), zinciri abi merkezden
   (Muaskar / Tilimsan; Sa'dî merkezi) merdiven ⑤ ile. Kaynak bulunamazsa yazılmaz.
3. Hiçbir şey yapma, beyan et: `enklav:true` olan noktada hücre taşması bilinen kusur.

Önerim: 2 (gece kaynakla yapılabilir, tuza dokunmaz); 1 bir sonraki tam inşaya.
