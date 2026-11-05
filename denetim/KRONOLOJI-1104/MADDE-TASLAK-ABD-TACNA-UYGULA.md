# MADDE-TASLAK-ABD-TACNA-1105 — uygulama talimatı (KASA PAZAR; EMRELİC gece-108)

Taslak dosyası: `MADDE-TASLAK-ABD-TACNA-1105.json`. 21 madde var; her biri 7 dilde (en ar de es fr pt ru). KASA SALI veriye yazmaz.

## 🔴 Aynı commit şartı

Aşağıdaki 1-4 numaralı veri değişiklikleri ile 21 kronoloji maddesi TEK commit'te girer:
- Madde önce girerse D2t sayacındaki "kırılmasız madde" sayısı artar.
- Veri önce girerse D2 açığı artar.

1. **İşgal dilimleri:** UMIT'in `abd_13koloni.json` önerileri (origin/umit-1104-dadim, `denetim/DADIM-1104/`).
   - New York, Philadelphia, Charleston, Savannah ve Wilmington'a `isg ingiltere` dilimleri eklenir.
   - Kaskaskia ve Vincennes'e 1778-1779 dilimleri eklenir.
   - 1776-07-04'e çekilen 9 şehir. Bu şehirlerin odak_yer'leri `devletler.js:18810`'daki `on-uc-koloni` t maddesine, kayıt adlarıyla (parantezli) girer.
2. **Michilimackinac:** 1796 Jay teslimi kırılması (`abd` f → 1796-09-01). Ön şartı UMIT önerisidir.
3. **Fort Niagara / Oswego:** yeni nokta AÇILMAZ. ABD-14 maddesinin odak_yer'i atlasta olan karakollarla sınırlı kalır (Detroit, Michilimackinac).
4. **Yeni Granada kırılmaları:** `e4_KASA_YG.json` (Borja, Omaguas ve Andoas için 1802-07-15; Guayaquil için 1803-07-07, ONERI). YG-01 ve YG-02 maddeleri bunlarla birlikte girer.

## Gün kararları (EMRELİC onayı)

- **ABD-09 Wilmington işgali:** 1781-01-28 (NCpedia). 01-29 kaynaksızdı.
- **ABD-07 Savannah işgali:** 1778-12-29 (NPS ve GHS). NGE'nin 12-28'i `ic_not`a.
- **ABD-13 Vincennes:** teslim 1779-02-25; 02-24 kuşatma günüdür.
- **ABD-14 Michilimackinac:** 1796-09-01.

## Tacna maddeleri ve kronoloji_cok mükerrerliği

- EMRELİC kararı: sınır maddeleri D2 evreninde gereklidir, eklenir. `kronoloji_cok` dosyalarındaki maddelere dokunulmaz.
- **Ölçüm (KASA; `js/app.js` çok taraflı ekleyici, satır 17207-17235):**
  - `KRONOLOJI_SINIR_*` ve `KRONOLOJI_COK_*` dosyalarının maddeleri `devletler[]` / `taraflar[]` listesindeki her künyeye eklenir.
  - Mükerrer kontrolü yalnız **aynı t VE aynı b** için yapılır.
  - Taslaktaki TAC-01, 02 ve 04 başlıkları (b) `kronoloji_cok_guney_amerika.js:122/136/137`'dekilerden FARKLI. Bu yüzden sitede, Şili ve Peru künyelerinin kronoloji listelerinde aynı olay İKİ kez görünür.
  - TAC-05 (1929-08-28) b'si `kronoloji_cok_1923_1945.js:965` ile birebir aynı ("Tacna, Şili'den Peru'ya fiilen teslim edildi") → bir kez görünür.
- **KASA önerisi:** TAC-01, 02 ve 04'ün Türkçe b'si `kronoloji_cok`'taki b ile birebir aynı yazılsın. Böylece ekleyici ikincisini atar, D2 evrenindeki madde ise dosyada kalır. b'ler:
  - 1880-05-26: «Tacna (Alto de la Alianza) Savaşı — Peru–Bolivya müttefik ordusu bozguna uğradı»
  - 1880-06-07: «Arica (Morro) Savaşı — Şili Arica'yı aldı, Tacna–Arica fiilen Şili işgaline girdi»
  - 1884-10-31: «Şili, işgal ettiği Tacna ve Arica'yı tek il olarak örgütledi — Tacna y Arica ili kuruldu»
  - Bu durumda çevirilerin b'leri de kronoloji_cok maddelerinin mevcut çevirileriyle (ceviri dalında varsa) aynı olmalı.
- ✅ **EMRELİC onayı (gece-108), JSON'a işlendi.** TAC-01, 02 ve 04'ün b'si ve 7 dildeki b'leri artık kronoloji_cok ile ortaktır.
  - odak_yer (Tacna + Arica) ve kaynak (Memoria Chilena) sinir maddesine özgü kalır. cok maddesinin kaynağı (Sater, sayfasız) zayıftır, sinir maddesine taşınmaz.
  - Çeviri dalında cok maddelerinin çevirisi yok. JSON'daki 7 dil b'si, cok maddeleri çevrilirken aynen kullanılmalı; yoksa çeviri katmanında ikisi ayrışır.
  - Bu kalem Emre listesinden düştü.

### Çeviri ile mükerrer kontrolünün sırası (EMRELİC sorusu, KASA ölçümü)

Ölçülen ağaç: origin/emrelic-1104-ceviri-birlesik (js/ceviri.js, index.html, data/ceviri_*), KASA'da.

- **Sıra:** index.html:2228'de `js/ceviri.js`, 2229'da `js/app.js` yüklenir. Dil Türkçe değilse ceviri.js, dil dosyalarını ve `Ceviri.uygula()` çağrısını document.write ile app.js'ten ÖNCE ekler (ceviri.js:270-277). Yani çeviri, mükerrer kontrolünden (app.js:17207 `cokTarafliKronolojiEkle`) ÖNCE çalışır.
- **Ama kapsam:** `uygula()` yalnız `/^OLAYLAR(_…)?$/` adlı dizileri ve DEVLETLER'in `ad` alanını çevirir (ceviri.js:60-62, 83, 102-107).
  - `KRONOLOJI_SINIR_*` ve `KRONOLOJI_COK_*` dizilerine hiç dokunmaz.
  - Hiçbir ceviri_* dosyasında `KRONOLOJI` anahtarı yok (git grep: 0 dosya).
- **Sonuç bugün:** sinir ve cok maddeleri her dilde Türkçe b ile kalır. Mükerrer kontrolü Türkçe b üzerinde çalışır. Ortak b sayesinde olay her dilde bir kez görünür. Sorun yok.
  - JSON'daki 7 dil çevirisinin bu maddeler için bugün sitede bir kanalı yoktur; kayıt olarak saklanır.
- **İleride KRONOLOJI_* çeviriye açılırsa:** uygula() app.js'ten önce çalıştığı için kontrol çevrilmiş b'yi görür. Bu durumda EMRELİC'in şartı geçerlidir: sinir ve cok maddesi aynı dilde aynı metni taşımalı.
  - ceviri.js:77-82'deki `ozetIndeks` bunu kendiliğinden sağlar. Çeviri kaydı kimlikle bulunamazsa Türkçe metnin FNV özetiyle aranır; aynı Türkçe b, aynı çeviriyi alır.
  - Yani biri çevrilince öteki de aynı metni alır. Yine de kural olarak, KRONOLOJI çevirisini açan commit cok ve sinir maddelerini birlikte çevirmeli.
  - Bu bir motor değişikliği değil, ceviri.js işidir; KASA PAZAR'ın bu dalgasına girmez.

## Kaynaksız ya da özetten cümleler (silinebilir)

- ABD-11'de "silah kullanmadan" ifadesi.
- ABD-14'te "Niagara ve Oswego da aynı yıl teslim edildi".
- YG-01'in son cümlesi ve YG-02'nin ikinci cümlesi.
- ABD-13'teki DCB alıntısının başı kesik.
