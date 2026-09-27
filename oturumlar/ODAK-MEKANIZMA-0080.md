# ODAK-MEKANIZMA-0080 — bölge dolguları adıyla kamera hedefi olamıyor

**27 Eylül 2026 · hüküm: YILDIRIM BAYEZIT · yama: `ARAYUZ-0077-B` (`js/app.js`)**

Emre: *"mekanizma sınıfını çöz, bölge dolguları için kalıcı çare."*

Doğuran vaka: `kronoloji_dogu_afrika.js` 1897-01-01 *"Somali-Habeşistan
sınırını çizme teşebbüsü"* · `yer_id:"Ogaden"`. Ogaden atlasta VAR, koordinatı
VAR, ama `d:[]` — kendi kaydının deyişiyle *"KASTEN sahipsiz bir dolgu"*.
`js/app.js:3101` süzgeci onu `sehirler` havuzundan düşürüyor ⇒ kamera oraya
gitmiyor ve app.js yalnız `console.warn` basıyor.

---

## ① ÖLÇÜM — sınıf ne kadar geniş

```
yerleşim toplam                4296
`sehirler` havuzunda           4146
🔴 DÜŞEN                        150     ( d/v/s üçü de BOŞ )

cins    bolge 119 · sehir 27 · kale 2 · koy 1 · liman 1
bos:    kabile 99 · devletsiz 34 · veri-yok 11 · insansiz 6
KOORDİNATI OLAN düşen          150 / 150      ← çarenin ön şartı TAM
```

Örnekler: `Ogaden` · `Tibesti` · `Hoggar` · `Karakum` · `Rub'ul Hâlî doğusu`
· `Nûbe çölü` · `Üstyurt platosu (batı/doğu)` · `Vâdî Sirhân` · `Somali çölü`
· `Gilf el-Kebîr` · `Tamanrasset` · `Serîr`.

### 🔴 VE ŞU İKİ SAYIYI GİZLEMİYORUM

```
bugün düşen bir ada atıf yapan madde              1     (yalnız Ogaden)
ODAKSIZ maddenin BAŞLIĞINDA düşen ad geçen        0
```

⇒ **Bu çare bugün 1 maddeyi düzeltiyor ve 0 madde açıyor.** Hacim gerekçesi
YOKTUR ve olduğunu iddia etmiyorum (`§11`: ölçüm doğru, çıkarım yanlış —
gerekçeyi ölçüme uydurmam gerekir, tersi değil).

---

## ② GEREKÇE — hacim değil, SINIF ve İLERİYE DÖNÜK

```
① Yedi ODAK-0080 kolu ŞU ANDA dünya çapında ~1154 odak alanı yazıyor.
   Düşen 150'nin 99'u `bos:"kabile"` — Afrika, Arabistan, Orta Asya
   çöl/bozkır bölgeleri. TAM O KOLLARIN COĞRAFYASI.
   ⇒ Bugün 1, yarın kaç tane olduğunu bugün ölçemem; ama ADAY havuzu 150.
② Çare inmezse o kolların tek çıkışı `yer_kon` ile KOORDİNAT KOPYALAMAK.
   Proje bunu TAM BU ALAN için açıkça reddetmiş (`app.js:11940`):
   *"Koordinat KOPYALANMADI — yalnız kayıt id'si referans alınıyor,
   sınır verisi TEK YERDE durur."*
   ⇒ 150 yerde kopyalanmış koordinat, bakımı imkânsız bir borçtur.
③ Kusur SESSİZ: app.js `console.warn` basar, kimse konsola bakmaz.
   Yayın kapısına bağlanana kadar (bugün bağlandı) hiç görülmemişti.
```

📌 `D234`ün kendisi: *"çare kayda uygulandı, SINIFA uygulanmadı — kusur
'çözülmüş' görünür, sınıf açık kalır ve aynı şikâyet katlanarak döner."*
Ogaden'e `yer_kon` yazmak kaydı düzeltir, sınıfı açık bırakır.

---

## ③ HÜKÜM — kök sebep TEK HAVUZUN İKİ SORUYA HİZMET ETMESİ

```
İŞARET havuzu sorusu :  "burada işaretlenecek bir OLAY var mı?"   → d/v/s ŞART
KAMERA havuzu sorusu :  "bu adın KOORDİNATI ne?"                  → lat/lon YETER
```

`app.js:3101`in süzgeci **İŞARET için doğrudur** — sahiplik dönemi olmayan
bir noktanın ediniliş simgesi, etiketi, dizin satırı olmaz. Kusur süzgeçte
değil, o süzgecin çıktısının **KAMERA çözümünde yeniden kullanılmasında**:
`olayKonumu` (`app.js:11506`) ve `maddeOdakKutusu`nun `odak_yer` dalı
(`app.js:11720`) yalnız `ad`/`lat`/`lon` okur — sahiplik verisine HİÇ
dokunmaz. Yani süzgeç onlara **saf yan hasar**dır.

### 🔴 ÇARE: AYRI BİR AD→KOORDİNAT HAVUZU. `sehirler` GENİŞLETİLMEZ.

`sehirler`i genişletmemenin gerekçesi ölçüldü: **27 kullanım yeri** var ve
çoğu işaret DOM'u (`.ekli`, `.ic`, `getBoundingClientRect`), etiket
öncelik/çakışma sıralaması (`sehirOncelik`, `sehirAnilma`) ve dizin
penceresinin `"sehirler"` sekmesi. Genişletmek **150 yeni işaret · 150 yeni
dizin satırı · yeni etiket çakışmaları** demektir — yani bir KAMERA kusurunu
düzeltmek için ARAYÜZÜ değiştirmek. Bu, düzelttiğinden çok şey bozar.

---

## ④ YAMANIN ŞARTLARI — `ARAYUZ-0077-B`

```
1  YENİ HAVUZ: `window.YERLESIMLER`in koordinatı olan HEPSİ — SÜZGEÇ YOK.
   Anahtar: `ad` ve `ad.split(" (")[0]`  →  {lat, lon}
   Adlandırma önerisi `ODAK_ADRES` (bağlayıcı değil), ama `sehirler` ile
   KARIŞMAYACAK bir ad seç: ikisi karışırsa bu kusur geri döner.
2  `olayKonumu`nun `yer_id` dalı + `maddeOdakKutusu`nun `odak_yer` dalı
   BU havuza bakar.
3  🔴 `sehirler` DEĞİŞMEZ. İşaret · dizin · etiket · çakışma yolları AYNEN
   kalır. Tek satırı bile değişmemeli.
4  BULANIK EŞLEŞME YOK. Birebir ad ya da `" ("` öncesi — app.js'in bugünkü
   tek esnekliği. (Bulanık eşleşme bu projede BEŞ kez yanlış çıktı.)
5  Çözülemeyen ad hâlâ `console.warn` ile ihbar edilir — ama artık
   `arac/odak_olc.py` de sayıyor ve yayın kapısı bloke ediyor.
6  ⚠️ KARAR SENİN, ÖLÇ VE SÖYLE: `yer_id` bir bölge dolgusuna çözülünce
   İŞARET de o koordinata konacak. Bölge merkezine konan işaret kullanıcıya
   "şehir" gibi görünebilir (Karakum'un ortasında bir işaret). Kamera doğru,
   işaret tartışmalı. Seçenekler: (a) işaret de konur, aynı davranış
   (b) `tur:"bolge"` ise işaret konmaz, yalnız kamera gider. Ölçümünü ve
   önerini yaz; hüküm bende.
7  ÖNGÖRÜYÜ ÖLÇÜMDEN ÖNCE YAZ (`§11`): yamadan önce
   `py arac/odak_olc.py --kusur` ile tabanı bas (bugün: 1 kayıt, Ogaden).
   Yamadan sonra 0 olmalı.
```

---

## ⑤ SIRA — 🔴 BU ADIM ATLANIRSA KAPI YANLIŞ TEMİZ DER

`arac/odak_cozum.js`in `SEHIR` havuzu bugün app.js:3101'in süzgecini
BİREBİR taklit ediyor (kasten — kapı, app.js'in GERÇEĞİNİ ölçmeli).
Yama inince ben de aynı kurala genişleteceğim.

```
① ARAYUZ-0077-B  js/app.js yamasını verir ve teslim eder
② KOORDİNATÖR    arac/odak_cozum.js havuzunu AYNI kurala genişletir
③ KOORDİNATÖR    py denetim/ODAK-KAPI-SINAV.py  → 5/5 olmalı
④ KOORDİNATÖR    py arac/odak_olc.py --tavan-yaz  → Ogaden borcu DÜŞER
```

🔴 **Ben ②'yi ①'den ÖNCE yaparsam kapı "temiz" der ama kamera hâlâ bozuk
olur — YANLIŞ TEMİZ.** Bu yüzden sıra pazarlığa açık değil. Kapı app.js'in
gerçeğini ölçer; ölçüyü gerçekten önce değiştirmek, denetimi kör etmektir.

---

## ⑥ ARA ÇARE — yama inene kadar kollar ne yapacak

Beklemeyecekler. `ODAK-0080` kolları düşen 150'den birine odak yazmak
isterse:

```
· E SINIFI YAZ (şartname §SINIFLANDIRMA): hiçbir şey yazma, RAPORLA.
  "Şu madde şu bölge dolgusuna odaklanmalı ama mekanizma çözemiyor" —
  bu bir sonuçtur, eksik iş değil.
· `yer_kon` ile KOORDİNAT KOPYALAMA. Yama inince kopyalar borç olur.
· Listeni bana yaz; yama indiğinde TEK seferde uygulanır.
```

⚠️ Ve bu listenin kendisi bir ölçüm olacak: yama inmeden önce kaç madde
birikeceği, çarenin gerçek faydasının ölçüsüdür. Bugün 0 · yarın bilinmiyor.
