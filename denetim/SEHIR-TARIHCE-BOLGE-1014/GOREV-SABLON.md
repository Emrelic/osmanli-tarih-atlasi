# GÖREV ŞABLONU — ŞEHİR TARİHÇESİ PARTİSİ (araştırmacı alt ajan için)

> Bölge oturumu bu dosyayı kendi scratchpad'ine kopyalar ve `<…>` yer tutucularını doldurur:
> `<KOK>` = oturumun worktree yolu · `<IS>` = oturumun scratchpad'i · `<BOLGE>` = rusya|avrupa|asya|amerika|afrika ·
> `<BOLGE_BUYUK>` = RUS|AVR|ASY|AME|AFR · `<GEONAMES>` = indirilmiş cities1000.txt yolu.
> Kaynak: Osmanlı bölgesinde 25 partide oturan görev (denetim/SEHIR-TARIHCE-OSM-1014/GOREV.md) — yolda
> öğrenilen her kural buradadır. KURAL EKLEYEN oturum hem bu şablona hem VERI-YAPISI.md'ye yazar.

Sen kaynak araştırmacısısın. Sana ≤10 şehirlik bir parti veriliyor. Her şehir için, şehrin tarih
sahnesine ilk çıktığı günden atlasın o şehirde başladığı güne kadar **kim, ne zaman, nasıl** sahip
olduğunu kaynaklı yazacaksın. Hız değil DOĞRULUK ölçülür. Bilmediğini "bulunamadı" yaz; uydurma tarih,
uydurma kesinlik, uydurma kaynak — ve UYDURMA OLAY — en ağır hatadır.

## Önce oku
- Şema ve kurallar: `<KOK>\VERI-YAPISI.md` — en sondaki "ŞEHİR TARİHÇESİ" bölümü (ve "MÖ TARİH YAZIMI",
  "TAKVİM", "kesinlik"in sınırı bölümleri). HARFİYEN uy.
- Devlet kimlikleri: `<IS>\devletler_dok.tsv` (`py <KOK>\arac\sehir_tarihce.py devletler <IS>\devletler_dok.tsv`
  ile üretilir). `d:` YALNIZ bu listedeki `id`, ya da ayrılmış kimlikler (aşağıda), ya da `kunye_yok`.
- Bitmiş örnek: `<KOK>\data\sehir_tarihce_osm.js` (241 şehir) — biçim için bak, içeriği DEVRALMA.

## ⚠️ Önce koordinatı sına
Partideki `lat/lon` GeoNames ad eşleşmesidir ve YANLIŞ ADAŞ olabilir (`aday_sayisi` > 1 ise özellikle).
Şehrin 1900 birimine (`birim`, `ust_birim`, `ulke_1900`) bakarak doğru yer olduğunu doğrula. Yanlışsa ELLE
KOORDİNAT YAZMA: `<GEONAMES>` (sekmeli: id, ad, ascii, alt adlar, lat, lon, …, ülke kodu 9. sütun, admin1 11.)
içinde doğrusunu bul, id'siyle `ic_not`a yaz, raporda ayrı başlıkla bildir. `atlas_ad` 3 km kuralıyla değişebilir.
**Şehir yer değiştirdiyse** (1900 merkezi eski yerde, GeoNames bugünkü taşınmış şehirde): kayıt **1900'deki
yerleşimi** tarihler. Doğru koordinat GeoNames'te yoksa `lat/lon` null, `koordinat_bekliyor:"<kaynağın konum
tarifi>"`, `atlas_ad` null (zincir 1900'e gider).

## Her şehir için
1. **ilk** (+ varsa **kur**, **ark**, **bit**): şemadaki gibi. İlk anılıştan `kur` TÜRETME. Aralıkta güvenli uç.
   Yeri kesin olmayan ad eşitlemesi başlangıç SAYILMAZ (Adana kuralı). Yerinde tarihli kitabe yazılı tanıktır.
   Antik yer > 3 km ise ayrı kayıt önerisi (`ic_not`), bu kayda yazılmaz.
2. **sahip** zinciri `ilk.t`den başlar, **`atlas_ilk_gun`de biter**; atlasta yoksa `1900-01-01`e gider.
   - Sahip = şehri **doğrudan elinde tutan** yapı; metbû `ic_not`a.
   - Dikiş: son sahip `atlas_ilk_sahip` ise düz; değilse el değiştirme TAM o gündedir → o gün için GERÇEK olay.
   - Atlasın ilk sahibi kaynaksız/çelişkiliyse **META OLAY YAZMA** ("atlas dikişi", yer tutucu,
     `kaynak:"bulunamadı"`, "tarihî olay değil" — HEPSİ YASAK): şehre `dikis_beyan:"…"`.
   - Kısa, süresi bilinmeyen ele geçirme: dönem AÇMA, olay yaz. "En geç" tanıkla dönem başı: beyanla.
   - Künye geçişi (Roma → Bizans, Emevî → Abbâsî): dönem sınırı, `k:"diger"` olayı.
   - Takvim Jülyen, ÇEVİRME; hicrî: kaynak karşılığı ya da kesişimin ilk günü + `kaynak`ta beyan.
   - **Ayrılmış kimlikler:** `__BOSLUK__` (şehir VAR, sahibi bilinmiyor) · `__YOK__` (yerleşim YOK — terk;
     aynı yerde kaynakla gösterilen kesinti de) · `__BILINMIYOR__` (yerleşimin VARLIĞI da bilinmiyor) ·
     `osmanli` (atlas `d:`; `kunye_yok` işaretlenmez). Hepsinde `ic_not` zorunlu.
   - Sahip belli ama künyesi yok: önerilen id + `kunye_yok:true` + `ic_not` (ad, ömür, kaynak). Önce
     `devletler_dok.tsv`de ara — aynı yapıya iki ad verilmesin.
   - Künye ömrü dışı uyarısı: önce kendi tarihini sına; künye yanlışsa `ic_not`a "künye ömrü düzeltilmeli: …".
3. **olay**: her el değiştirmenin ±30 gün içinde GERÇEK bir madde; ayrıca önemli olaylar (kuşatma, isyan,
   yıkım, deprem, başkent oluş). `k` sözlüğü `olaylar*.js`ten.

## Kaynak kuralı
- **TDV İslâm Ansiklopedisi** İslâm dünyası, Osmanlı ve komşuları için birincil; HAM çek (WebFetch özetler):
  `<KOK>\denetim\SEHIR-ILK-ANILIS-PILOT-1013\tdv_ham.py` (kopyala, `py -I`). TDV kendi içinde çelişirse
  akademik kaynak, beyanla. TDV'nin kapsamadığı bölgede akademik ansiklopedi/kaynak (Brill, Iranica, ODB,
  Pleiades, Perseus, Oracc, Imperial Gazetteer, ЭСБЕ, Cambridge History …).
- Vikipedi YALNIZ ipucu. Blog, turizm, haber, BELEDİYE TANITIM sayfası, içerik çiftliği, YZ metni YASAK.
  Bellekten tarih YAZMA; doğrulayamadığın atfı "doğrulanmadı" diye işaretle.
- `kaynak` kısa künye; `tanik` ≤ 15 kelime.

## Çıktı ve kendi denetimin
1. JSON dizisi (şema alanları; parti yardımcı alanlarını çıkar, `atlas_ad` kalsın) → `<CIKTI_JSON>`
2. `py <KOK>\arac\sehir_tarihce.py yaz <CIKTI_JSON> <yanına .js> <BOLGE_BUYUK>` → çıkış **0** olana kadar düzelt.
   Her uyarıyı ya düzelt ya `ic_not`ta açıkla.
3. Depoya HİÇBİR ŞEY yazma. Alt ajan açma. Haiku kullanılmaz.
4. Rapor: şehir başına dönem/olay · koordinat sınaması · `__BOSLUK__`/`__YOK__`/`__BILINMIYOR__`/`kunye_yok`
   dilimleri · künye ömrü önerileri · atlasla bağlanamayan şehirler (atlas düzeltme önerisi) · en zor 3 şehir ·
   doğrulanamayan atıflar.
