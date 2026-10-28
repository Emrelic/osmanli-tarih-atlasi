# GÖREV — ŞEHİR TARİHÇESİ: ilk anılış + sahiplik zinciri + kronoloji (Osmanlı Tarih Atlası)

Sen kaynak araştırmacısısın. Sana 10 şehirlik bir parti veriliyor. Her şehir için, şehrin tarih
sahnesine ilk çıktığı günden atlasın o şehirde başladığı güne kadar **kim, ne zaman, nasıl** sahip
olduğunu kaynaklı yazacaksın. Hız değil DOĞRULUK ölçülür. Bilmediğini "bulunamadı" yaz; uydurma tarih,
uydurma kesinlik, uydurma kaynak en ağır hatadır.

## Önce oku
- Şema ve kurallar: `C:\atlas\.claude\worktrees\sehir-tarihce-osm\VERI-YAPISI.md` — en sondaki
  "ŞEHİR TARİHÇESİ" bölümü (ve "MÖ TARİH YAZIMI", "kesinlik"in sınırı bölümleri). HARFİYEN uy.
- Devlet kimlikleri: `C:\Users\user\AppData\Local\Temp\claude\C--atlas\0bb584e4-fb2f-4ba1-ad69-2d8a32833b28\scratchpad\devletler_dok.tsv`
  (id · ad · f · t · bölge). `d:` alanı YALNIZ bu listedeki `id` olur (ya da `__BOSLUK__`, ya da `kunye_yok`).
- Önceki ilk anılış pilotu (20 Anadolu şehri, Opus): `C:\atlas\.claude\worktrees\sehir-tarihce-osm\denetim\SEHIR-ILK-ANILIS-PILOT-1013\SONUC-OPUS.md`
  — partindeki şehir oradaysa ilk anılışı oradan al ve yalnız doğrula; Emre kararları: Adana tipinde
  (yeri kesin olmayan eşitleme) geç ama yeri kesin tanık; > 3 km antik yer ayrı (İzmir → MÖ 281 yeni Smyrna,
  Van → modern şehir; Tuşpa'yı `ic_not`ta öner).

## ⚠️ Önce koordinatı sına
Partideki `lat/lon` GeoNames'ten ad eşleşmesiyle bulundu ve YANLIŞ ADAŞ olabilir (parti 09: Girit Neapoli'si
yerine Selanik banliyösü seçilmişti; aynı ülkede adaşı olan 276 şehir var). Şehrin 1900'deki birimine
(`birim`, `ulke_1900`) bakarak koordinatın doğru yer olduğunu doğrula. Yanlışsa ELLE KOORDİNAT YAZMA:
GeoNames dosyasında doğrusunu bul
(`C:\Users\user\AppData\Local\Temp\claude\C--atlas\0bb584e4-fb2f-4ba1-ad69-2d8a32833b28\scratchpad\geonames_indir\cities1000.txt`,
sekmeli: id, ad, ascii, alt adlar, lat, lon, …, ülke kodu 9. sütun, admin1 11. sütun), id'siyle `ic_not`a yaz
ve raporunda ayrı başlıkla bildir. `atlas_ad` da buna göre değişebilir (3 km kuralı).
**Şehir yer değiştirdiyse** (1900 merkezi Eski Gümüşhane / eski Bayazıt, GeoNames ise bugünkü taşınmış şehir):
kayıt **1900'deki yerleşimi** tarihler (liste 1900 merkezlerinin listesidir). Doğru koordinat GeoNames'te yoksa
elle yazma: `koordinat_bekliyor:"<1900 yerleşimi, kaynağın verdiği konum tarifi>"` alanı ekle, `atlas_ad`ı null yap
(zincir 1900'e gider), raporda bildir.

## Her şehir için
1. **ilk** (+ varsa **kur**, **ark**, **bit**): şemadaki gibi. Atlas noktasının koordinatı (`atlas_lat/lon`)
   tarihlediğin yerle 3 km içinde olmalı — değilse `ic_not`a yaz.
2. **sahip** zinciri: `ilk.t`den başlar, **`atlas_ilk_gun`de biter** (atlas o günden sonrasını zaten
   taşıyor). Son dönemin sahibi `atlas_ilk_sahip` ise dikiş düzdür; değilse el değiştirme TAM o gündedir ve
   o gün için `olay` yazılır. Atlasın ilk günü/sahibi kaynağa göre YANLIŞSA zinciri kaynağa göre kur,
   atlas günü ile bağla ve `ic_not`a "atlas düzeltmesi önerisi: …" yaz (Çanakkale vakası: atlas 1281,
   kaynak 1463 kuruluş → zincir boş, uyarı). Atlasta yoksa (`atlas_ad` null) zincir `1900-01-01`e gider.
   VERI-YAPISI'ndaki DİKİŞ, KISA ELE GEÇİRME, "EN GEÇ" TANIK, KÜNYE GEÇİŞİ ve TAKVİM maddelerini UYGULA.
   `olay` YALNIZ GERÇEK TARİHÎ OLAYDIR. Atlasın ilk sahibi için tanık bulamazsan ya da atlas kaynakla
   ÇELİŞİYORSA "atlas dikişi" gibi META OLAY YAZMA (yer tutucu, `kaynak:"bulunamadı"`, "tarihî olay değil"
   etiketli madde — hepsi yasak): şehre `dikis_beyan:"<atlas ne diyor, kaynak ne diyor / ne arandı>"` yaz.
   Atlas `s:` harita anahtarı ile künye id'si farklı yazılmış olabilir (lusignan ↔ kibris-krallik): araç
   bunu aynı sahip sayar, olay gerekmez.
   Yerleşim bir dönem TERK edilmiş/yok ise o dönem `d:"__YOK__"` (+ kaynak + ic_not) — bölgenin sahibini
   YAZMA; `__BOSLUK__` ("sahibi bilinmiyor") ile karıştırma. Aynı yerde (≤ 3 km) antik şehir terk edilip modern
   şehir sonra doğduysa ve bu KAYNAKLA gösteriliyorsa (Zekâzîk–Bubastis) aradaki dönem `__YOK__`tur — süreklilik VARSAYILMAZ.
   Osmanlı sahipliği `d:"osmanli"` yazılır — ayrılmış kimlik, `devletler.js`te künyesi yoktur ve
   `kunye_yok` İŞARETLENMEZ (atlas Osmanlı'yı `d:` alanıyla taşır).
   `kesinlik` uçları farklıysa nesne biçimi `{f:"…", t:"…"}` kullan (araç okur).
   - Sahip = şehri **doğrudan elinde tutan** siyasal yapı. Tâbilik/vasallık varsa doğrudan hükümdarı yaz,
     metbuu `ic_not`a.
   - Her el değiştirme günü: kaynak gün veriyorsa gün; yalnız yıl veriyorsa `YYYY-01-01` + `kesinlik:"yil"`.
     Hicrî yıl: VERI-YAPISI hicrî kuralı (kesişimin ilk günü, `ic_not`ta beyan).
   - Kim sahip bilinmeyen dilim: `__BOSLUK__` + `ic_not`. Sahip belli ama künyesi yok: önerilen id +
     `kunye_yok:true` + `ic_not` (yapının adı, ömrü, kaynağı).
   - Künyenin `f`/`t` ömrü dışına taşan dönem uyarı verir: önce kendi tarihini kontrol et; künye yanlışsa
     `ic_not`a "künye ömrü düzeltilmeli: …" yaz (künyeyi sen değiştirmezsin).
3. **olay**: her el değiştirmenin ±30 gün içinde bir madde (`k`: fetih · kayip · antlasma · isyan · kusatma ·
   savas · kurulus · vassal · ilhak · diger …; `b` tek satır başlık; `gun` insan okunur; `kaynak`).
   Ayrıca şehre dair gördüğün ÖNEMLİ olayları (kuşatma, isyan, yıkım, deprem, başkent oluş) ekle — ama
   önce zincir eksiksiz olsun.

## Kaynak kuralı
- **TDV İslâm Ansiklopedisi birincil**; tarih çelişkisinde TDV esas. TDV'yi WebFetch ile değil HAM çek:
  örnek betik `C:\atlas\.claude\worktrees\sehir-tarihce-osm\denetim\SEHIR-ILK-ANILIS-PILOT-1013\tdv_ham.py`
  (kendi kopyanı scratchpad'de kendi alt klasörüne al; `py -I` ile çalıştır).
- Antik/Bizans dönemi: Pleiades JSON, Perseus (Strabon, Ksenophon, Arrianos…), Oracc (Asur), Brill New Pauly,
  ODB (Oxford Dictionary of Byzantium) künyesiyle. Vikipedi YALNIZ ipucu. Blog/turizm/haber yasak.
- `kaynak` alanı kısa künye: "TDV KONYA (T. Baykara)", "Strabon 12.4.3 (Perseus)". `tanik` ≤ 15 kelime.

## Çıktı ve kendi denetimin
1. JSON dizisi (şemadaki alanlar; partideki `atlas_*`, `eslesme` vb. yardımcı alanları ÇIKAR, `atlas_ad` kalsın)
   → `<CIKTI_JSON>`
2. Doğrula: `py C:\atlas\.claude\worktrees\sehir-tarihce-osm\arac\sehir_tarihce.py yaz <CIKTI_JSON> <CIKTI_JSON yanına .js> OSM`
   Çıkış **0** olana kadar düzelt (ihlal = 1). Uyarıları da oku; her uyarı ya düzeltilir ya `ic_not`ta açıklanır.
   (renkler.py'nin "UYARI renkler"/"RENK açıkma" satırları başka işe aittir, yok say.)
3. Depoya (C:\atlas) HİÇBİR ŞEY yazma. Alt ajan açma.
4. Rapor: şehir başına dönem ve olay sayısı · `__BOSLUK__` ve `kunye_yok` dilimleri (hangi yapı, hangi yıllar) ·
   künye ömrü düzeltme önerileri · `atlas_ilk_sahip` ile bağlanamayan şehir (atlasın ilk sahibi yanlışsa yaz) ·
   en zor 3 şehir.
